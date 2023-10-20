"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8658],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1152:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={title:"SBT and Mill \u26a1\ufe0f",sidebar_position:50},s=void 0,c={unversionedId:"guides/sbt-mill",id:"guides/sbt-mill",title:"SBT and Mill \u26a1\ufe0f",description:"The export sub-command is an experimental feature.",source:"@site/docs/guides/sbt-mill.md",sourceDirName:"guides",slug:"/guides/sbt-mill",permalink:"/docs/guides/sbt-mill",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/sbt-mill.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"SBT and Mill \u26a1\ufe0f",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Internals",permalink:"/docs/guides/internals"},next:{title:"Proxies \u26a1\ufe0f",permalink:"/docs/guides/proxies"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," sub-command is an experimental feature."),(0,a.kt)("p",{parentName:"admonition"},"Please bear in mind that non-ideal user experience should be expected.\nIf you encounter any bugs or have feedback to share, make sure to reach out to the maintenance team\non ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/VirtusLab/scala-cli"},"GitHub"),".")),(0,a.kt)("p",null,"Scala CLI lets you export your current build into sbt or Mill.\nThis means that if your project needs something that Scala CLI doesn\u2019t provide \u2014 such as a second module \u2014 you can export your project to your build tool of choice."),(0,a.kt)("p",null,"Why do we need this?\nBasically we don\u2019t want to block the development of your project.\nBut at the same time, we don\u2019t want to introduce the complexity that multi-module builds and tasks and plugin systems introduce \u2014 at least not until that complexity is needed."),(0,a.kt)("p",null,"To export a project, run this command to export to sbt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli export --sbt <standard-options>\n")),(0,a.kt)("p",null,"Or use this command to export to Mill:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli export --mill <standard-options>\n")),(0,a.kt)("p",null,"These commands create a copy of your sources, resources, and local JARs.\nThey also download gists and other non-local inputs.\nBy default the project is exported to a ",(0,a.kt)("inlineCode",{parentName:"p"},"dest")," directory, but you can control that with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-o")," option."))}m.isMDXComponent=!0}}]);