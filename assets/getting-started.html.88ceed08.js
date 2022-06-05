import{r as s,o as a,c as e,a as n,w as l,F as o,b as c,d as p}from"./app.e9ae362a.js";const r={},t=c('<h1 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h1><p><code>asdf</code> 安装过程包括：</p><ol><li>安装依赖</li><li>下载 <code>asdf</code> 核心</li><li>安装 <code>asdf</code></li><li>为每一个你想要管理的工具/运行环境安装插件</li><li>安装工具/运行环境的一个版本</li><li>通过 <code>.tool-versions</code> 配置文件设置全局和项目版本</li></ol><h2 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖" aria-hidden="true">#</a> 1. 安装依赖</h2><p><strong>Linux</strong>：</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>根据你的系统配置可能会需要 <code>sudo</code> 权限。</p></div><table><thead><tr><th>包管理器</th><th>命令</th></tr></thead><tbody><tr><td>Aptitude</td><td><code>apt install curl git</code></td></tr><tr><td>DNF</td><td><code>dnf install curl git</code></td></tr><tr><td>Pacman</td><td><code>pacman -S curl git</code></td></tr><tr><td>Zypper</td><td><code>zypper install curl git</code></td></tr></tbody></table><p><strong>macOS</strong>：</p><table><thead><tr><th>包管理器</th><th>命令</th></tr></thead><tbody><tr><td>Homebrew</td><td>Homebrew 将会自动安装所需要的依赖。</td></tr><tr><td>Spack</td><td><code>spack install coreutils curl git</code></td></tr></tbody></table><h2 id="_2-下载-asdf" tabindex="-1"><a class="header-anchor" href="#_2-下载-asdf" aria-hidden="true">#</a> 2. 下载 asdf</h2><p>尽管还有其他特定于平台的方法，我们建议使用 Git：</p>',11),d=n("thead",null,[n("tr",null,[n("th",null,"方法"),n("th",null,"命令")])],-1),i=n("tr",null,[n("td",null,"Git"),n("td",null,[n("code",null,"git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0")])],-1),h=n("tr",null,[n("td",null,"Homebrew"),n("td",null,[n("code",null,"brew install asdf")])],-1),F=n("td",null,"Pacman",-1),u=n("code",null,"git clone https://aur.archlinux.org/asdf-vm.git && cd asdf-vm && makepkg -si",-1),m=p(" 或者使用你更习惯的 "),f={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},y=p("AUR helper"),g=c('<h2 id="_3-安装-asdf" tabindex="-1"><a class="header-anchor" href="#_3-安装-asdf" aria-hidden="true">#</a> 3. 安装 asdf</h2><p>根据 Shell 脚本、操作系统和安装方法的组合不同，相应的配置也会不同。展开以下与你的系统最匹配的选项：</p><details class="custom-container details"><summary>Bash &amp; Git</summary><p>在 <code>~/.bashrc</code> 文件中加入以下内容：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>补全功能必须在 <code>.bashrc</code> 文件中加入以下内容来配置完成：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><p>如果你正在使用 <strong>macOS Catalina 或者更新的版本</strong>, 默认的 shell 已经被修改为 <strong>ZSH</strong>。除非修改回 Bash, 否则请遵循 ZSH 的说明。</p><p>在 <code>~/.bash_profile</code> 文件中加入以下内容：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>补全功能必须在 <code>.bash_profile</code> 文件中使用以下内容手动配置完成：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>',4),b={class:"custom-container details"},v=c('<summary>Bash &amp; Homebrew (macOS)</summary><p>如果你正在使用 <strong>macOS Catalina 或者更新的版本</strong>, 默认的 shell 已经被修改为 <strong>ZSH</strong>。除非修改回 Bash, 否则请遵循 ZSH 的说明。</p><p>使用以下命令将 <code>asdf.sh</code> 加入到 <code>~/.bash_profile</code> 文件中：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/libexec/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>\n<span class="line"></span></code></pre></div>',4),k=p("补全功能将需要 "),x={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},_=p("按照 Homebrew 的说明完成配置"),E=p(" 或者执行以下命令："),H=c('<div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/etc/bash_completion.d/asdf.bash&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>\n<span class="line"></span></code></pre></div>',1),D={class:"custom-container details"},S=c('<summary>Bash &amp; Pacman</summary><p>在 <code>~/.bashrc</code> 文件中加入以下内容：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),z=p("为了让补全功能正常工作需要安装 "),w={href:"https://wiki.archlinux.org/title/bash#Common_programs_and_options",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"bash-completion",-1),Z=p(" 。"),q=c('<details class="custom-container details"><summary>Fish &amp; Git</summary><p>在 <code>~/.config/fish/config.fish</code> 文件中加入以下内容：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>补全功能必须按照以下命令手动配置完成：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> and ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/completions/asdf.fish </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span></span>\n<span class="line"></span></code></pre></div></details>',1),j={class:"custom-container details"},O=c('<summary>Fish &amp; Homebrew</summary><p>使用以下命令将 <code>asdf.fish</code> 加入到 <code>~/.config/fish/config.fish</code> 文件中：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\nsource &quot;</span><span style="color:#F8F8F2;">(brew --prefix asdf)</span><span style="color:#E6DB74;">&quot;/libexec/asdf.fish&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/config.fish</span></span>\n<span class="line"></span></code></pre></div>',3),B=p("Fish shell 的补全功能可以交给 "),M={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-fish",target:"_blank",rel:"noopener noreferrer"},P=p(" Homebrew 处理"),G=p(". 很友好！"),A=c('<details class="custom-container details"><summary>Fish &amp; Pacman</summary><p>在 <code>~/.config/fish/config.fish</code> 文件中加入以下内容：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>补全功能将会在安装过程中由 AUR 包管理器自动配置完成。</p></details><details class="custom-container details"><summary>Elvish &amp; Git</summary><p>使用以下命令将 <code>asdf.elv</code> 加入到 <code>~/.config/elvish/rc.elv</code> 文件中：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"></span></code></pre></div><p>补全功能将会自动配置。</p></details><details class="custom-container details"><summary>Elvish &amp; Homebrew</summary><p>使用以下命令将 <code>asdf.elv</code> 加入到 <code>~/.config/elvish/rc.elv</code> 文件中：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s (brew --prefix asdf)/libexec/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"></span></code></pre></div><p>补全功能将会自动配置。</p></details><details class="custom-container details"><summary>Elvish &amp; Pacman</summary><p>使用以下命令将 <code>asdf.elv</code> 加入到 <code>~/.config/elvish/rc.elv</code> 文件中：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s /opt/asdf-vm/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"></span></code></pre></div><p>补全功能将会自动配置。</p></details>',4),C={class:"custom-container details"},R=c('<summary>ZSH &amp; Git</summary><p>在 <code>~/.zshrc</code> 文件中加入以下内容：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),L=n("strong",null,"或者",-1),U=p(" 使用 ZSH 框架插件，比如 "),N={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},T=p("asdf for oh-my-zsh"),I=p(" 将会使脚本生效并安装补全功能。"),W=c('<p>补全功能会被 ZSH 框架 <code>asdf</code> 插件或者通过在 <code>.zshrc</code> 文件中加入以下内容自动配置：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># append completions to fpath</span></span>\n<span class="line"><span style="color:#F8F8F2;">fpath=(${ASDF_DIR}/completions $fpath)</span></span>\n<span class="line"><span style="color:#88846F;"># initialise completions with ZSH&#39;s compinit</span></span>\n<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> compinit</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>如果你正在使用自定义的 <code>compinit</code> 配置，请确保 <code>compinit</code> 在 <code>asdf.sh</code> 生效位置的下方</li><li>如果你正在使用自定义的 <code>compinit</code> 配置和 ZSH 框架，请确保 <code>compinit</code> 在框架生效位置的下方</li></ul><p><strong>警告</strong></p>',4),J=p("如果你正在使用 ZSH 框架，有关的 "),K=n("code",null,"asdf",-1),Q=p(" 插件或许需要更新才能通过 "),V=n("code",null,"fpath",-1),X=p(" 正确地使用最新的 ZSH 补全功能。Oh-My-ZSH asdf 插件还在更新中，请查看 "),Y={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},ss=p("ohmyzsh/ohmyzsh#8837"),as=p(" 了解更多。"),es={class:"custom-container details"},ns=c('<summary>ZSH &amp; Homebrew</summary><p>使用以下命令将 <code>asdf.sh</code> 加入到 <code>~/.zshrc</code> 文件中：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/libexec/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> ${ZDOTDIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">~}/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),ls=n("strong",null,"或者",-1),os=p(" 使用 ZSH 框架插件，比如 "),cs={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},ps=p("asdf for oh-my-zsh"),rs=p(" 将会使脚本生效并安装补全功能。"),ts=p("补全功能可以被 ZSH 框架 "),ds=n("code",null,"asdf",-1),is=p(" 或者 "),hs={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-zsh",target:"_blank",rel:"noopener noreferrer"},Fs=p("按照 Homebrew 的指引"),us=p(" 完成配置。如果你正在使用 ZSH 框架，有关的 "),ms=n("code",null,"asdf",-1),fs=p(" 插件或许需要更新才能通过 "),ys=n("code",null,"fpath",-1),gs=p(" 正确地使用最新的 ZSH 补全功能。Oh-My-ZSH asdf 插件还在更新中，请查看 "),bs={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},vs=p("ohmyzsh/ohmyzsh#8837"),ks=p(" 了解更多。"),xs={class:"custom-container details"},_s=c('<summary>ZSH &amp; Pacman</summary><p>在 <code>~/.zshrc</code> 文件中加入以下内容：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),Es=p("补全功能会被放在一个对 ZSH 很友好的位置，但是 "),Hs={href:"https://wiki.archlinux.org/index.php/zsh#Command_completion",target:"_blank",rel:"noopener noreferrer"},Ds=p("ZSH 必须使用自动补全完成配置"),Ss=p("。"),zs=c('<p><code>asdf</code> 脚本需要在设置好的 <code>$PATH</code> <strong>之后</strong>和已经生效的框架（比如 oh-my-zsh 等等）<strong>之后</strong>的位置生效。</p><p>通常打开一个新的终端标签页来重启你的 shell 让 <code>PATH</code> 更改即时生效。</p><h2 id="核心安装完成" tabindex="-1"><a class="header-anchor" href="#核心安装完成" aria-hidden="true">#</a> 核心安装完成！</h2><p>这样就完成了 <code>asdf</code> 核心的安装 🎉</p><p><code>asdf</code> 仅在你安装<strong>插件</strong>、<strong>工具</strong>和管理它们的<strong>版本</strong>时才开始真正发挥作用。请继续阅读下面的指南来了解这些是如何做到的。</p><h2 id="_4-安装插件" tabindex="-1"><a class="header-anchor" href="#_4-安装插件" aria-hidden="true">#</a> 4. 安装插件</h2>',6),ws=p("出于演示目的，我们将通过 "),$s={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},Zs=n("code",null,"asdf-nodejs",-1),qs=p(" 插件来安装和设置 "),js={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},Os=p("Node.js"),Bs=p("。"),Ms=c('<h3 id="插件依赖" tabindex="-1"><a class="header-anchor" href="#插件依赖" aria-hidden="true">#</a> 插件依赖</h3><p>每个插件都有依赖，所以我们需要确认应该列举了这些依赖的插件源码。对于 <code>asdf-nodejs</code> 来说，它们是：</p><table><thead><tr><th>操作系统</th><th>安装依赖</th></tr></thead><tbody><tr><td>Linux (Debian)</td><td><code>apt-get install dirmngr gpg curl gawk</code></td></tr><tr><td>macOS</td><td><code>brew install gpg gawk</code></td></tr></tbody></table><p>我们应该提前安装这些依赖，因为有些插件有 post-install 钩子。</p><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git</span></span>\n<span class="line"></span></code></pre></div><h2 id="_5-安装指定版本" tabindex="-1"><a class="header-anchor" href="#_5-安装指定版本" aria-hidden="true">#</a> 5. 安装指定版本</h2><p>现在我们已经有了 Node.js 插件，所以我们可以开始安装某个版本了。</p><p>我们通过 <code>asdf list all nodejs</code> 可以看到所有可用的版本或者通过 <code>asdf list all nodejs 14</code> 查看版本子集。</p><p>我们将只安装最新可用的 <code>latest</code> 版本：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install nodejs latest</span></span>\n<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">注意</p><p><code>asdf</code> 强制使用准确的版本。<code>latest</code> 是一个通过 <code>asdf</code> 来解析到执行时刻的实际版本号的辅助工具。</p></div><h2 id="_6-设置默认版本" tabindex="-1"><a class="header-anchor" href="#_6-设置默认版本" aria-hidden="true">#</a> 6. 设置默认版本</h2><p><code>asdf</code> 在从当前工作目录一直到 <code>$HOME</code> 目录的所有 <code>.tool-versions</code> 文件中进行工具的版本查找。查找在执行 <code>asdf</code> 管理的工具时实时发生。</p><div class="custom-container warning"><p class="custom-container-title">警告</p><p>如果没有为工具找到指定的版本，则会出现<strong>错误</strong>。<code>asdf current</code> 将显示当前目录中的工具和版本解析结果，或者不存在，以便你可以观察哪些工具将无法执行。</p></div><h3 id="全局" tabindex="-1"><a class="header-anchor" href="#全局" aria-hidden="true">#</a> 全局</h3><p>全局默认配置在 <code>$HOME/.tool-versions</code> 文件中进行管理。使用以下命令可以设置一个全局版本：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf global nodejs latest</span></span>\n<span class="line"></span></code></pre></div><p><code>$HOME/.tool-versions</code> 文件内容将会如下所示：</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',20),Ps=p("某些操作系统已经有一些由系统而非 "),Gs=n("code",null,"asdf",-1),As=p(" 安装和管理的工具了，"),Cs=n("code",null,"python",-1),Rs=p(" 就是一个常见的例子。你需要告诉 "),Ls=n("code",null,"asdf",-1),Us=p(" 将管理权还给系统。"),Ns=p("版本参考部分"),Ts=p(" 将会引导你。"),Is=c('<h3 id="本地" tabindex="-1"><a class="header-anchor" href="#本地" aria-hidden="true">#</a> 本地</h3><p>本地版本被定义在 <code>$PWD/.tool-versions</code> 文件中（当前工作目录）。通常，这将会是一个项目的 Git 存储库。当在你想要的目录执行：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> nodejs latest</span></span>\n<span class="line"></span></code></pre></div><p><code>$PWD/.tool-versions</code> 文件内容将会如下所示：</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="使用现有工具版本文件" tabindex="-1"><a class="header-anchor" href="#使用现有工具版本文件" aria-hidden="true">#</a> 使用现有工具版本文件</h3><p><code>asdf</code> 支持从其他版本管理器的现有版本文件中迁移过来，比如 <code>rbenv</code> 的 <code>.ruby-version</code> 文件。这在每个插件中都原生支持。</p>',7),Ws={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},Js=n("code",null,"asdf-nodejs",-1),Ks=p(" 支持从 "),Qs=n("code",null,".nvmrc",-1),Vs=p(" 和 "),Xs=n("code",null,".node-version",-1),Ys=p(" 文件进行迁移。为了启用此功能，请在 "),sa=n("code",null,"asdf",-1),aa=p(" 配置文件 "),ea=n("code",null,"$HOME/.asdfrc",-1),na=p(" 中加入以下内容："),la=c('<div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">legacy_version_file = yes\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),oa=p("请查看 "),ca=p("配置"),pa=p(" 参考页面可以了解更多配置选项。"),ra=c('<h2 id="完成指南" tabindex="-1"><a class="header-anchor" href="#完成指南" aria-hidden="true">#</a> 完成指南！</h2><p>恭喜你完成了 <code>asdf</code> 的快速上手 🎉 你现在可以管理你的项目的 <code>nodejs</code> 版本了。对于项目中的其他工具类型可以执行类似步骤即可！</p><p><code>asdf</code> 还有更多命令需要熟悉，你可以通过运行 <code>asdf --help</code> 或者 <code>asdf</code> 来查看它们。命令主要分为三类：</p>',3),ta=n("code",null,"asdf",-1),da=p(" 核心"),ia=p("插件"),ha=p("（工具的）版本");r.render=function(c,p){const r=s("OutboundLink"),Fa=s("RouterLink");return a(),e(o,null,[t,n("table",null,[d,n("tbody",null,[i,h,n("tr",null,[F,n("td",null,[u,m,n("a",f,[y,n(r)])])])])]),g,n("details",b,[v,n("p",null,[k,n("a",x,[_,n(r)]),E]),H]),n("details",D,[S,n("p",null,[z,n("a",w,[$,n(r)]),Z])]),q,n("details",j,[O,n("p",null,[B,n("a",M,[P,n(r)]),G])]),A,n("details",C,[R,n("p",null,[L,U,n("a",N,[T,n(r)]),I]),W,n("p",null,[J,K,Q,V,X,n("a",Y,[ss,n(r)]),as])]),n("details",es,[ns,n("p",null,[ls,os,n("a",cs,[ps,n(r)]),rs]),n("p",null,[ts,ds,is,n("a",hs,[Fs,n(r)]),us,ms,fs,ys,gs,n("a",bs,[vs,n(r)]),ks])]),n("details",xs,[_s,n("p",null,[Es,n("a",Hs,[Ds,n(r)]),Ss])]),zs,n("p",null,[ws,n("a",$s,[Zs,n(r)]),qs,n("a",js,[Os,n(r)]),Bs]),Ms,n("p",null,[Ps,Gs,As,Cs,Rs,Ls,Us,n(Fa,{to:"/zh-hans/manage/versions.html"},{default:l((()=>[Ns])),_:1}),Ts]),Is,n("p",null,[n("a",Ws,[Js,n(r)]),Ks,Qs,Vs,Xs,Ys,sa,aa,ea,na]),la,n("p",null,[oa,n(Fa,{to:"/zh-hans/manage/configuration.html"},{default:l((()=>[ca])),_:1}),pa]),ra,n("ul",null,[n("li",null,[n(Fa,{to:"/zh-hans/manage/core.html"},{default:l((()=>[ta,da])),_:1})]),n("li",null,[n(Fa,{to:"/zh-hans/manage/plugins.html"},{default:l((()=>[ia])),_:1})]),n("li",null,[n(Fa,{to:"/zh-hans/manage/versions.html"},{default:l((()=>[ha])),_:1})])])],64)};export default r;
