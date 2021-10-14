package scala.build.preprocessing.directives

import scala.build.EitherCps.{either, value}
import scala.build.Os
import scala.build.errors.BuildException
import scala.build.options.{BuildOptions, JavaOptions}

case object UsingJavaHomeDirectiveHandler extends UsingDirectiveHandler {
  def name             = "Java home"
  def description      = "Sets Java home used to run your application or tests"
  def usage            = "using java-home|javaHome _path_"
  override def usageMd = "`using java-home `_path_ | `using javaHome `_path_"
  override def examples = Seq(
    "using java-home \"/Users/Me/jdks/11\""
  )

  def handle(directive: Directive): Option[Either[BuildException, BuildOptions]] =
    directive.values match {
      case Seq("java-home" | "javaHome", path) =>
        val home = os.Path(path, Os.pwd) // FIXME Might throw on invalid path
        val options = BuildOptions(
          javaOptions = JavaOptions(
            javaHomeOpt = Some(home)
          )
        )
        Some(Right(options))
      case _ => None
    }

  override def keys = Seq("java-home", "javaHome")
  override def handleValues(values: Seq[Any]): Either[BuildException, BuildOptions] = either {
    val rawHome = value {
      DirectiveUtil.stringValues(values)
        .lastOption
        .toRight("No value passed to javaHome directive")
    }
    // FIXME Might throw
    // FIXME Wrong cwd
    val home = os.Path(rawHome, Os.pwd)
    BuildOptions(
      javaOptions = JavaOptions(
        javaHomeOpt = Some(home)
      )
    )
  }
}