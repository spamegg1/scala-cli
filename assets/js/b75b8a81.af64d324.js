"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9149],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},385:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],l={title:"Under the hood",sidebar_position:32},s=void 0,c={unversionedId:"under-the-hood",id:"under-the-hood",title:"Under the hood",description:"This page is for people who are already familiar with the Scala/JVM ecosystem.",source:"@site/docs/under-the-hood.md",sourceDirName:".",slug:"/under-the-hood",permalink:"/docs/under-the-hood",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/under-the-hood.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"Under the hood",sidebar_position:32},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/reference/scala-command/commands"},next:{title:"Release notes",permalink:"/docs/release_notes"}},p={},d=[{value:"Caching and incrementality",id:"caching-and-incrementality",level:3},{value:"Bloop and Coursier",id:"bloop-and-coursier",level:3},{value:"scala-cli&#39;s JVM",id:"scala-clis-jvm",level:3}],u={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This page is for people who are already familiar with the Scala/JVM ecosystem."),(0,r.kt)("p",{parentName:"admonition"},"If you just want to learn Scala CLI, head out to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/commands/basics"},"Commands section"),".")),(0,r.kt)("h1",{id:"under-the-hood"},"Under the hood"),(0,r.kt)("p",null,"Scala CLI consists of a native executable, generated by ",(0,r.kt)("a",{parentName:"p",href:"https://www.graalvm.org"},"GraalVM")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.graalvm.org/reference-manual/native-image"},"Native Image"),".\nIt runs fine on Linux and macOS with no prior requirements, and\nonly requires the ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145"},"Visual C++ Redistributable Runtime"),"\non Windows.\nNative Image lets us build Scala CLI as a native image for each platform, and lets Scala CLI be responsive, as a command line application should be."),(0,r.kt)("h3",{id:"caching-and-incrementality"},"Caching and incrementality"),(0,r.kt)("p",null,"Since most of the tasks require compilation or dependency resolution under the hood, Scala CLI heavily uses caches and incrementality under the hood to provide output as quickly as possible."),(0,r.kt)("p",null,"But note that incremental compilation and caching are not perfect.\nIn some cases, when there's a compilation problem and you don't think it's a problem with the code, it may be the stale state of the project - cleaning the project state might help.\nFor this reason Scala CLI has the ",(0,r.kt)("a",{parentName:"p",href:"/docs/commands/clean"},"clean")," command, which invalidates local caches and forces the next compilation to be a total rebuild from a clean slate."),(0,r.kt)("p",null,"We provide a more in-depth overview about how caching works in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/internals"},"Scala CLI internals guide"),"."),(0,r.kt)("h3",{id:"bloop-and-coursier"},"Bloop and Coursier"),(0,r.kt)("p",null,"To ensure the quickest compilation, Scala CLI uses and manages the ",(0,r.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/bloop/"},"Bloop")," compilation server.\nWe have a ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/bloop"},"detailed guide")," that describes how Scala CLI interacts with the local Bloop server.\nThe main point to know is that Scala CLI takes care of fetching and starting Bloop if needed, so you don't have to worry about it."),(0,r.kt)("p",null,"Scala CLI uses ",(0,r.kt)("a",{parentName:"p",href:"https://get-coursier.io/"},"Coursier")," to manage dependencies.\nIt automatically downloads and unpacks a JVM if none is installed on your system, so that all its commands work fine even if a JVM isn't already installed.\nScala CLI shares Coursier caches with other tools like ",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org/"},"sbt"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/com-lihaoyi/mill"},"Mill"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"Metals"),"."),(0,r.kt)("h3",{id:"scala-clis-jvm"},"scala-cli's JVM"),(0,r.kt)("p",null,"Scala CLI is a JVM application. Although by default it is distributed as a GraalVM native image, it is still possible to set Java properties.\nIn order set them, the ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," command-line flags must be placed as the first options to scala-cli, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -Dfoo1=bar1 -Dfoo2=bar2 run ...\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scala-cli run . -Dfoo=bar")," would pass the java property into your Scala app"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scala-cli -Dfoo=bar run .")," would pass the java property into ",(0,r.kt)("inlineCode",{parentName:"li"},"scala-cli"),"."))),(0,r.kt)("p",null,"The Scala CLI can also load Java properties from the ",(0,r.kt)("inlineCode",{parentName:"p"},".scala-jvmopts")," file present in the current working\ndirectory and import these Java properties into Scala CLI. Any java options in the ",(0,r.kt)("inlineCode",{parentName:"p"},".scala-jvmopts")," that are not\nrecognizable as Java properties will be ignored."),(0,r.kt)("p",null,"The example below shows that the Java properties ",(0,r.kt)("inlineCode",{parentName:"p"},"foo1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"foo2")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},".scala-jvmopts")," file will be passed\ninto the Scala CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"$ cat .scala-jvmopts\n-Dfoo1=bar1 \n-Dfoo2=bar2\n$ scala-cli run ...\n")),(0,r.kt)("p",null,"You can set Java properties globally for the Scala CLI launcher using the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," command.\nThe example below shows how to set the Java properties ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djavax.net.ssl.trustStore=cacerts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dfoo=bar2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli config java.properties Djavax.net.ssl.trustStore=cacerts Dfoo=bar2\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please note that if you need to modify the Java properties, you have to redefine all of them. It's not possible\nto update just a single value via the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," command. Each update effectively replaces the entire Java properties\nlist.")))}m.isMDXComponent=!0}}]);