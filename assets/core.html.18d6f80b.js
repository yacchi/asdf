import{r as s,o as a,c as e,a as n,w as l,F as o,d as r,b as c}from"./app.e9ae362a.js";const i={},p=n("h1",{id:"core",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#core","aria-hidden":"true"},"#"),r(" Core")],-1),d=n("blockquote",null,[n("p",null,'Hi, we\'ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the "Edit this page" link at the bottom of the page.')],-1),t=n("p",null,[r("A lista de comandos do núcleo "),n("code",null,"asdf"),r(" é bastante pequena, mas pode facilitar muitos fluxos de trabalho.")],-1),m=n("h2",{id:"instalacao-e-configuracao",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#instalacao-e-configuracao","aria-hidden":"true"},"#"),r(" Instalação e configuração")],-1),u=r("Baseado no "),F=r("Guia de Introdução"),b=r("."),h=c('<h2 id="execute" tabindex="-1"><a class="header-anchor" href="#execute" aria-hidden="true">#</a> Execute</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#66D9EF;">exec</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [args...]</span></span>\n<span class="line"></span></code></pre></div><p>Executa o comando shim para a versão atual</p><h2 id="variavel-de-ambiente" tabindex="-1"><a class="header-anchor" href="#variavel-de-ambiente" aria-hidden="true">#</a> Variável de Ambiente</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf env </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [util]</span></span>\n<span class="line"></span></code></pre></div><h2 id="informacoes" tabindex="-1"><a class="header-anchor" href="#informacoes" aria-hidden="true">#</a> Informações</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf info</span></span>\n<span class="line"></span></code></pre></div><p>Um comando auxiliar para imprimir as informações de depuração do SO, Shell e <code>asdf</code>. Compartilhe isso ao fazer um relatório de bug.</p><h2 id="reshim" tabindex="-1"><a class="header-anchor" href="#reshim" aria-hidden="true">#</a> Reshim</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf reshim </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"></span></code></pre></div>',10),v=r("Isso recria os shims para a versão atual de um pacote. Por padrão, os calços são criados por plugins durante a instalação de uma ferramenta. Algumas ferramentas como a "),f={href:"https://docs.npmjs.com/cli/",target:"_blank",rel:"noopener noreferrer"},y=r("npm CLI"),g=r(" permitem a instalação global de executáveis, por exemplo, instalando "),k={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},E=r("Yarn"),x=r(" via "),D=n("code",null,"npm install -g fio",-1),$=r(". Como este executável não foi instalado por meio do ciclo de vida do plug-in, ainda não existe shim para ele. "),H=n("code",null,"asdf reshim nodejs <version>",-1),O=r(" forçará o recálculo de shims para quaisquer novos executáveis, como "),M=n("code",null,"yarn",-1),_=r(", para "),A=n("code",null,"<version>",-1),R=r(" de "),q=n("code",null,"nodejs",-1),S=r("."),w=c('<h2 id="versionamento-do-shim" tabindex="-1"><a class="header-anchor" href="#versionamento-do-shim" aria-hidden="true">#</a> Versionamento do Shim</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf shim-versions </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Lista os plugins e versões que fornecem shims para um comando.</p>',3),I=r("Como exemplo, o "),j={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},B=r("Node.js"),T=r(" vem com dois executáveis, "),z=n("code",null,"node",-1),G=r(" e "),C=n("code",null,"npm",-1),P=r(". Quando muitas versões das ferramentas são instaladas com "),L={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},Z=n("code",null,"asdf-nodejs",-1),U=r(),V=n("code",null,"shim-versions",-1),K=r(" pode retornar:"),N=c('<div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">➜ asdf shim-versions node</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>\n<span class="line"></span></code></pre></div><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">➜ asdf shim-versions npm</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>\n<span class="line"></span></code></pre></div><h2 id="atualizar" tabindex="-1"><a class="header-anchor" href="#atualizar" aria-hidden="true">#</a> Atualizar</h2><p><code>asdf</code> tem um comando embutido para atualização que depende do Git (nosso método de instalação recomendado). Se você instalou usando um método diferente, siga as etapas para esse método:</p>',4),Q=n("thead",null,[n("tr",null,[n("th",null,"Method"),n("th",null,"Latest Stable Release"),n("th",null,[r("Latest commit on "),n("code",null,"master")])])],-1),Y=n("tr",null,[n("td",null,"asdf (via Git)"),n("td",null,[n("code",null,"asdf update")]),n("td",null,[n("code",null,"asdf update --head")])],-1),J=n("tr",null,[n("td",null,"Homebrew"),n("td",null,[n("code",null,"brew upgrade asdf")]),n("td",null,[n("code",null,"brew upgrade asdf --fetch-HEAD")])],-1),W=n("td",null,"Pacman",-1),X=r("Obter manualmente um novo "),ss=n("code",null,"PKGBUILD",-1),as=r(" e "),es=n("br",null,null,-1),ns=r(" reconstruir ou usar suas preferências de "),ls={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},os=r("AUR"),rs=r("."),cs=n("td",null,null,-1),is=c('<h2 id="desinstalar" tabindex="-1"><a class="header-anchor" href="#desinstalar" aria-hidden="true">#</a> Desinstalar</h2><p>Para desinstalar <code>asdf</code> siga os passos:</p><details class="custom-container details"><summary>Bash &amp; Git</summary><ol><li>Em seu <code>~/.bashrc</code> remova as linhas do <code>asdf.sh</code> e seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><ol><li>Em seu <code>~/.bash_profile</code> remova as linhas do <code>asdf.sh</code> e remova seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>',4),ps={class:"custom-container details"},ds=c('<summary>Bash &amp; Homebrew (macOS)</summary><p>Caso esteja usando <strong>macOs Catalina ou mais recente</strong>, por padrão o <em>shell</em> é <strong>ZSH</strong>. Se não achar alguma configuração em seu <code>~/.bash_profile</code> talvez esteja em <code>~/.zshrc</code> em cada caso siga as intruções do ZSH.</p><ol><li>Em seu <code>~/.bash_profile</code> remova as linhas do <code>asdf.sh</code> e remova seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>\n<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/etc/bash_completion.d/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',4),ts=r("?> Os complementos precisam "),ms={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},us=r("instruções de configuração do Homebrew"),Fs=r(" e siga o guia de remoção."),bs=c('<ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',4),hs=c('<details class="custom-container details"><summary>Bash &amp; Pacman</summary><ol><li>Em seu <code>~/.bashrc</code> remova as linhas do <code>asdf.sh</code> e seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Fish &amp; Git</summary><ol><li>Em seu <code>~/.config/fish/config.fish</code> remova as linhas do <code>asdf.sh</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>e remova os complementos de com esse comando:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Fish &amp; Homebrew</summary><ol><li>Em seu <code>~/.config/fish/config.fish</code> remova as linhas do <code>asdf.fish</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;(brew --prefix asdf)&quot;</span><span style="color:#F8F8F2;">/libexec/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Fish &amp; Pacman</summary><ol><li>Em seu <code>~/.config/fish/config.fish</code> remova as linhas do <code>asdf.fish</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Elvish &amp; Git</summary><ol><li>Em seu <code>~/.config/elvish/rc.elv</code> remova as linhas que importa o módulo <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>\n<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>e desinstale o módulo <code>asdf</code> com este comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>\n<span class="line"></span></code></pre></div><ol start="2"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">=s $E:ASDF_DATA_DIR </span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">) { rm -rf $E:ASDF_DATA_DIR } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> { rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf }</span></span>\n<span class="line"></span></code></pre></div><ol start="3"><li>Execute este comando para remover todos os arquivos de configuração <code>asdf</code>:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Homebrew</summary><ol><li>Em seu <code>~/.config/elvish/rc.elv</code> remova as linhas que importa o módulo <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>\n<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>e desinstale o módulo <code>asdf</code> com este comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>\n<span class="line"></span></code></pre></div><ol start="2"><li>Desinstale com seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>\n<span class="line"></span></code></pre></div><ol start="3"><li>Execute este comando para remover todos os arquivos de configuração <code>asdf</code>:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Pacman</summary><ol><li>Em seu <code>~/.config/elvish/rc.elv</code> remova as linhas que importa o módulo <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>\n<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>e desinstale o módulo <code>asdf</code> com este comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>\n<span class="line"></span></code></pre></div><ol start="2"><li>Desinstale com seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>\n<span class="line"></span></code></pre></div><ol start="3"><li>Remova o diretório <code>$ HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">=s $E:ASDF_DATA_DIR </span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">) { rm -rf $E:ASDF_DATA_DIR } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> { rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf }</span></span>\n<span class="line"></span></code></pre></div><ol start="4"><li>Execute este comando para remover todos os arquivos de configuração <code>asdf</code>:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Git</summary><ol><li>Em seu <code>~/.zshrc</code> remova as linhas do <code>asdf.sh</code> e seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"><span style="color:#88846F;"># ...</span></span>\n<span class="line"><span style="color:#F8F8F2;">fpath=(${ASDF_DIR}/completions $fpath)</span></span>\n<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit</span></span>\n<span class="line"><span style="color:#F8F8F2;">compinit</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Ou</strong> use ZSH Framework plugin.</p><ol start="2"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>ZSH &amp; Homebrew</summary><ol><li>Em seu <code>~/.zshrc</code> remova as linhas do <code>asdf.sh</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>ZSH &amp; Pacman</summary><ol><li>Em seu <code>~/.zshrc</code> remova as linhas do <code>asdf.sh</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><p>Tudo pronto! 🎉</p>',11);i.render=function(r,c){const i=s("RouterLink"),vs=s("OutboundLink");return a(),e(o,null,[p,d,t,m,n("p",null,[u,n(i,{to:"/pt-br/guide/getting-started.html"},{default:l((()=>[F])),_:1}),b]),h,n("p",null,[v,n("a",f,[y,n(vs)]),g,n("a",k,[E,n(vs)]),x,D,$,H,O,M,_,A,R,q,S]),w,n("p",null,[I,n("a",j,[B,n(vs)]),T,z,G,C,P,n("a",L,[Z,n(vs)]),U,V,K]),N,n("table",null,[Q,n("tbody",null,[Y,J,n("tr",null,[W,n("td",null,[X,ss,as,es,ns,n("a",ls,[os,n(vs)]),rs]),cs])])]),is,n("details",ps,[ds,n("p",null,[ts,n("a",ms,[us,n(vs)]),Fs]),bs]),hs],64)};export default i;
