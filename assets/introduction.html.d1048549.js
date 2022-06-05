import{r as e,o as r,c as n,a,F as o,b as d,d as l}from"./app.e9ae362a.js";const t={},s=d('<h1 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介" aria-hidden="true">#</a> 项目简介</h1><p><code>asdf</code> 是一个工具版本管理器。所有的工具版本定义都包含在一个文件（<code>.tool-versions</code>）中，你可以将配置文件放在项目的 Git 存储库中以便于和团队其他成员共享，从而确保每个人都使用<strong>完全</strong>相同的工具版本。</p><p>传统工作方式需要多个命令行版本管理器，而且每个管理器都有其不同的 API、配置文件和实现方式（比如，<code>$PATH</code> 操作、垫片、环境变量等等）。<code>asdf</code> 提供单个交互方式和配置文件来简化开发工作流程，并可通过简单的插件接口扩展到所有工具和运行环境。</p><h2 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的" aria-hidden="true">#</a> 它是如何工作的</h2>',4),h=l("一旦 "),i=a("code",null,"asdf",-1),c=l(" 核心在 Shell 配置中设置好之后，你可以安装插件来管理特定的工具。当通过插件安装工具时，安装的可执行程序会为每个可执行程序创建 "),u={href:"https://zh.wikipedia.org/wiki/%E5%9E%AB%E7%89%87_(%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)",target:"_blank",rel:"noopener noreferrer"},f=l("垫片"),p=l("。当你尝试运行其中一个可执行程序时，将运行垫片，从而允许 "),b=a("code",null,"asdf",-1),m=l(" 识别 "),v=a("code",null,".tool-versions",-1),g=l(" 文件中设置的工具版本并执行该版本。"),x=a("h2",{id:"相关项目",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#相关项目","aria-hidden":"true"},"#"),l(" 相关项目")],-1),k=a("h3",{id:"nvm-n-rbenv-等",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#nvm-n-rbenv-等","aria-hidden":"true"},"#"),l(" nvm / n / rbenv 等")],-1),w={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},E=l("nvm"),S=l(", "),_={href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"},A=l("n"),O=l(" 和 "),N={href:"https://github.com/rbenv/rbenv",target:"_blank",rel:"noopener noreferrer"},B=l("rbenv"),H=l(" 等工具都是用 Shell 脚本写的，这些脚本能为工具安装的可执行程序创建垫片。"),q=a("p",null,[a("code",null,"asdf"),l(" 非常相似，目的是在工具/运行环境版本管理领域竞争。"),a("code",null,"asdf"),l(" 的区别之处在于它的插件系统，它消除了每个工具/运行环境对管理工具的需求、每个管理工具的不同命令以及存储库中不同的"),a("code",null,"*-版本"),l("文件。")],-1),j=a("h3",{id:"direnv",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#direnv","aria-hidden":"true"},"#"),l(" direnv")],-1),F=a("blockquote",null,[a("p",null,"使用可以根据当前目录加载和卸载环境变量的新功能增强现有 shell。")],-1),L=a("code",null,"asdf",-1),P=l(" 不管理环境变量，但是有一个插件 "),y={href:"https://github.com/asdf-community/asdf-direnv",target:"_blank",rel:"noopener noreferrer"},z=a("code",null,"asdf-direnv",-1),G=l(" 可以用来集成 direnv 的特性到 "),I=a("code",null,"asdf",-1),T=l(" 中。"),$=l("请查看 "),C={href:"https://direnv.net/",target:"_blank",rel:"noopener noreferrer"},D=l("direnv 文档"),J=l(" 了解更多。"),K=a("h3",{id:"homebrew",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#homebrew","aria-hidden":"true"},"#"),l(" Homebrew")],-1),M=a("blockquote",null,[a("p",null,"macOS（或者 Linux）上缺失包的管理器")],-1),Q=a("p",null,[l("Homebrew 管理你的软件包及其上游依赖。"),a("code",null,"asdf"),l(" 不管理上游依赖，它不是包管理器。这个责任取决于用户，尽管我们试图保持依赖关系列表很小。")],-1),R=l("请查看 "),U={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},V=l("Homebrew 文档"),W=l(" 了解更多。"),X=a("h3",{id:"nixos",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#nixos","aria-hidden":"true"},"#"),l(" NixOS")],-1),Y=a("blockquote",null,[a("p",null,"Nix 是一种采用独特方法进行软件包管理和系统配置的工具")],-1),Z=a("p",null,[l("NixOS 旨在通过管理每个工具的整个依赖关系树中软件包的确切版本来构建真正可重复的环境，有些是 "),a("code",null,"asdf"),l(" 无法做到的。NixOS 使用自己的编程语言、许多命令行工具和超过 60,000 个包的包集合来实现这一点。")],-1),ee=a("p",null,[l("同样，"),a("code",null,"asdf"),l(" 不管理上游依赖，并且它不是一个包管理器。")],-1),re=l("请查看 "),ne={href:"https://nixos.org/guides/how-nix-works.html",target:"_blank",rel:"noopener noreferrer"},ae=l("NixOS 文档"),oe=l(" 了解更多。"),de=d('<h2 id="为什么使用-asdf" tabindex="-1"><a class="header-anchor" href="#为什么使用-asdf" aria-hidden="true">#</a> 为什么使用 asdf？</h2><p><code>asdf</code> 确保团队可以使用<strong>完全</strong>相同的工具版本，通过插件系统支持<strong>很多</strong>工具，以及作为 Shell 配置中包含的单个 <strong>Shell</strong> 脚本的 <em>简单性和熟悉性</em> 。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p><code>asdf</code> 并不打算成为一个系统包管理器。它是一个工具版本管理器。仅仅因为你可以为任何工具创建插件并使用 <code>asdf</code> 管理其版本，并不意味着这是这个特定工具的最佳实践方案。</p></div>',3);t.render=function(d,l){const t=e("OutboundLink");return r(),n(o,null,[s,a("p",null,[h,i,c,a("a",u,[f,a(t)]),p,b,m,v,g]),x,k,a("p",null,[a("a",w,[E,a(t)]),S,a("a",_,[A,a(t)]),O,a("a",N,[B,a(t)]),H]),q,j,F,a("p",null,[L,P,a("a",y,[z,a(t)]),G,I,T]),a("p",null,[$,a("a",C,[D,a(t)]),J]),K,M,Q,a("p",null,[R,a("a",U,[V,a(t)]),W]),X,Y,Z,ee,a("p",null,[re,a("a",ne,[ae,a(t)]),oe]),de],64)};export default t;
