// using scala 3.0.2
// using "org.scalameta::munit:0.7.29"
// using com.lihaoyi::os-lib:0.7.8

import scala.util.matching.Regex

import munit.Assertions.assert

val ScalaCodeBlock = """ *```scala name\:([\w\.]+)+""".r
val CodeBlockEnds  = """ *```""".r
val ScalaCliBlock  = """ *```scala-cli( +fail)?""".r
val CheckBlock     = """ *\<\!\-\- Expected(-regex):""".r
val CheckBlockEnd  = """ *\-\-\>""".r

enum Commands:
  def context: Context

  case Snippet(name: String, lines: Seq[String], context: Context)
  case Run(cmd: Seq[String], shouldFail: Boolean, context: Context)
  case Check(patterns: Seq[String], regex: Boolean, context: Context)

case class Context(file: String, line: Int)

def msg(txt: String)(using c: Context): String = s"From ${c.file}:${c.line}: $txt"

def untilEndOfSnippet[T](
  lines: Seq[String],
  regex: Regex = CodeBlockEnds
)(using c: Context): (Seq[String], Seq[String], Context) =
  val codeLines = lines.takeWhile(l => !regex.matches(l))
  assert(codeLines.size > 0, msg("Block cannot be empty!"))
  assert(codeLines.size < lines.size, msg("Block should end!"))
  (codeLines, lines.drop(codeLines.size + 1), c.copy(line = c.line + codeLines.size + 2))

def parse(content: Seq[String], currentCommands: Seq[Commands], context: Context): Seq[Commands] =
  given Context = context
  content match
    case Nil => currentCommands
    case ScalaCodeBlock(name) :: tail =>
      val (codeLines, rest, newContext) = untilEndOfSnippet(tail)(using context)

      parse(rest, currentCommands :+ Commands.Snippet(name, codeLines, context), newContext)
    case ScalaCliBlock(failGroup) :: tail =>
      val (codeLines, rest, newContext) = untilEndOfSnippet(tail)
      assert(codeLines.size != 0)
      val runCmd = Commands.Run(codeLines.head.split(" ").toList, failGroup != null, newContext)
      parse(rest, currentCommands :+ runCmd, newContext)
    case CheckBlock(regexOpt) :: tail =>
      val isRegex                      = regexOpt == "-regex"
      val (patterns, rest, newContext) = untilEndOfSnippet(tail, CheckBlockEnd)
      parse(rest, currentCommands :+ Commands.Check(patterns, isRegex, context), newContext)
    case _ :: tail => parse(tail, currentCommands, context.copy(line = context.line + 1))

case class TestCase(path: os.Path, failure: Option[Throwable])

def checkPath(dest: Option[os.Path])(path: os.Path): Seq[TestCase] =
  try
    if !os.isDir(path) then
      if path.last.endsWith(".md") then
        checkFile(path, dest)
        Seq(TestCase(path, None))
      else Nil
    else
      val toCheck =
        os.list(path).filterNot(_.last.startsWith("."))
      toCheck.toList.flatMap(checkPath(dest))
  catch
    case e: Throwable =>
      e.printStackTrace()
      Seq(TestCase(path, Some(e)))

val fakeLineMarker = "//fakeline"

def checkFile(file: os.Path, dest: Option[os.Path]) =
  val content  = os.read.lines(file).toList
  val commands = parse(content, Vector(), Context(file.toString, 1))
  val destName = file.last.stripSuffix(".md")
  val out      = os.temp.dir(prefix = destName)

  var lastOutput = ""
  val allSources = Set.newBuilder[os.Path]

  try
    println(s"Using $out as output to process $file")

    commands.foreach { cmd =>
      given Context = cmd.context
      cmd match
        case Commands.Run(cmd, shouldFail, _) =>
          println(s"### Running: ${cmd.mkString(" ")}")
          val res = os.proc(cmd).call(cwd = out, check = false)
          if shouldFail then
            assert(res.exitCode != 0)
          else
            assert(res.exitCode == 0)
          val outputChunks = res.chunks.map {
            case Left(c) =>
              c
            case Right(c) =>
              c
          }
          lastOutput = geny.ByteData.Chunks(outputChunks).text()

        case Commands.Snippet(name, code, c) =>
          println(s"### Writting $name with:\n${code.mkString("\n")}\n---")
          val prefix = (fakeLineMarker + "\n") * c.line
          val file   = out / name
          allSources += file
          os.write(file, code.mkString(prefix, "\n", ""))
        case Commands.Check(patterns, regex, line) =>
          assert(lastOutput != "", msg("No output stored from previous commands"))
          val lines = lastOutput.linesIterator.toList

          if regex then
            patterns.foreach { pattern =>
              val regex = pattern.r
              assert(
                lines.exists(regex.matches),
                msg(s"Regex: $pattern, does not matches any line in:\n$lastOutput")
              )
            }
          else
            patterns.foreach { pattern =>
              assert(
                lines.exists(_.contains(pattern)),
                msg(s"Pattern: $pattern does not exisits in  any line in:\n$lastOutput")
              )
            }
    }
  finally if dest.isEmpty then os.remove.all(out)

  // remove empty space at begining of all files
  if dest.nonEmpty then
    val exampleDir = dest.get / destName
    os.remove.all(exampleDir)
    os.makeDir(exampleDir)

    val relFile = file.relativeTo(os.pwd)
    val header  = s"File was generated from based on $relFile, do not edit manually!"
    allSources.result().foreach { s =>
      val content = os.read.lines(s).dropWhile(_ == fakeLineMarker)
        .mkString(s"// $header\n\n", "\n", "")
      os.write.over(s, content)
    }
    val withoutFrontMatter =
      if !content.head.startsWith("---") then content
      else
        content.tail.dropWhile(l => !l.startsWith("---")).tail

    val readmeLines = List("<!--", "  " + header, "-->", "") ++ withoutFrontMatter
    os.write(exampleDir / "README.md", readmeLines.mkString("\n"))

    os.list(out).filter(_.toString.endsWith(".scala")).foreach(p => os.copy.into(p, exampleDir))

@main def check(args: String*) =
  def processFiles(dest: Option[os.Path], files: Seq[String]) =
    val testCases    = files.flatMap(a => checkPath(dest)(os.pwd / os.RelPath(a)))
    val (failed, ok) = testCases.partition(_.failure.nonEmpty)
    println(s"Completed:\n\t${ok.map(_.path).mkString("\n\t")}")
    if failed.nonEmpty then
      println(s"Failed:\n\t${failed.map(_.path).mkString("\n\t")}")
      sys.exit(1)
    println("---")

  args match
    case Nil =>
      println("No inputs!")
    case "--dest" :: dest :: files => processFiles(Some(os.pwd / dest), files)
    case files                     => processFiles(None, files)
