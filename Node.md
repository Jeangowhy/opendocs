
# 🚩 Nodejs WEB

Node.js 企业级大事记

- 2014年 nearform （ Node.Js 为什么会成为企业中的首选技术？ ）
- 2015年 IBM （收购 StrongLoop，拓展云服务业务）

Node.js 基金会的创始成员包括 Joyent、IBM、Paypal、微软、Fidelity 和 Linux 基金会。

前端开发四阶段

- HTML/CSS/JS（基础）
- jQuery、jQuery-ui，Extjs（曾经流行）
- Backbone MVC/Angularjs/Vuejs/React 组件化（未来趋势）
- Node.js 模块化、工程化

综合看组件化工程的优点，应该是下一个流行趋势。

Hybrid 跨平台开发

Hybrid 混搭开发是指使用 H5 技术开发的跨浏览器应用，并最终可以将 HTML5/JS/CSS 等打包成 apk 和 ipa 包的开发方式。它也可以上传到应用商店，提供给移动设备进行安装。它最大的好处是通过 H5 开发一次，就可以在多个平台上安装。

未来将会是 JavaScript 一统天下（Node.js 做后端，传统 Web 和 H5 使用 JavaSctipt，更智能的工具如 gulp，更简单的写法如 coffeescript 等）。H5 大行其道（网速变快，硬件内存增长）。

C/S 架构到 B/S 架构，移动端加壳，在浏览器上做文章，把页面生成各个移动端的 app 文件。

PC 端加壳，一样是延续浏览器做文章，不过这次把页面生成各个 PC 平台的可执行文件。

- Apache Cordova 开源移动开发框架，前身是 PhoneGap。
- node-webkit (renamed NW.js)
- Electron  - Build cross platform desktop apps with web technologies

目前比较火的编辑器都是基于 Electron 打包：

- Atom
- VSCode

基于 Node.js 开必的 Monaco-editor 即 VSCode 集成的编辑器，现在非常流行，各大在线应用平台都有它的影子。

此外，Google Flutter，React-Native 都是错的跨平台开发框架。


Node.js 与生俱来的 2 个特性：

event-driven
non-blocking I/O
以前总强调的异步特性，到今天异步已经不是明显优势。因此除了性能，其他都是病（不足）？

1、Callback hell 问题

目前已经很好的解决了。promise / generator / async 后面会讲。

2、包管理

npm 已经是开源世界里最大的包管理器了，模块非常丰富（25.6万 ）。

Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

以前我们总是喜欢拿异步说事儿，现在我们拿 Node.js 的强大的生态来炫耀。

Node.js 好处

- 同样不优化，性能比大部分语言好。即使优化，也比其他语言简单，比如Java。
- 有足够多的选择和架构的平衡。
- 如实在不够，通过 C/C++/Java 扩展插件补。

Node.js 给了我们足够的选择工具

- 可以面向过程
- 可以面向对象
- 可以函数式

甚至可以用各种编译器 coffee、typescript、babel（es）等。对于从 0 开始的团队来讲，可以先面向过程、然后随着团队的成熟度，一点一点增加难度。

提供好的基础和包管理工具

- 测试相关 tdd / bdd 测试覆盖率
- 规范化 standard、各种 lint、hint
- 构建相关 gulp、grunt、webpack，大量插件
- 生成器 yo 等
- 包管理工具 npm 足够简单易用

以上这些都做大型软件的基础，Node.js 在这方面做得非常好。

在架构中各自做各自合适的事儿就好，我们很坦然的面对 Node.js 的优点和缺点，做好架构平衡。

1、在语言层面可以做，那语言层面做

- 已有大量 npm 上的模块 ( 目前在 25.6 万个以上 ) 
- 自己造轮子 ( 站在海量包上 简单语法 npm = 快速 )
- 使用 Node.js NAN - Native Abstractions for Node.js 包装 C/C++ 轮子
- 从上面看，绝大部分需求都可以满足了 

2、如果语言层面搞不定，那就架构层面做

- 业务边界、模块拆分、面向服务
- MQ、RPC、cache
- 运维、监控、自动化

架构与 Node.js 没直接关系，其次，架构师常用的东东有足够的 Node.js 模块支持，比如 MQ，像 Rabbitmq 有比较好的  Node 模块支持，RPC 里 Thrift、Grpc、Tchannel 支持的都不错，我们使用的 senecajs，Redis，ioredis 等软件，后面做 HA 都是一样的。

3、如果架构层面也解决不了

合适的场景用合适的东西。有很多东西是 Node.js 不擅长，又不在架构范畴里的，咋办？如实在不够，其他语言补。

- 比如复杂 excel 生成
- 比如 apns 推送（Go 做其实也很好，不过除了我，没人能维护）
- 但凡是 Java 或其他语言里比较成熟的库，可以作为独立服务使用的，都可以做 Node.js 的支持。避免过多的时间用在造轮子上，影响开发进度。

4、Node.js 优劣分析

- 执行效率，同样不优化，性能比大部分语言好。
- 开发效率，Node.js 本身比较简单，开发效率还是比较高的。完善的生态，比如测试、工具、npm 大量模块。
- 缺少 Rails 一样的大杀器，scaffold 脚手架，ORM 太弱。

Node.js 的 Web 开发框架 Express、Koa 等，简单，小巧，精致，缺点是集成度不够，目前已有的 MEAN 架构或 yo 或 sails 等总有某种方面的不满意。

MEAN 是目前最潮的全栈架构，是一个 JavaScript 平台的现代 Web 开发框架总称，集成 MongoDB Express AngularJS Node.js 四个框架，它与传统 LAMP 一样是一种全套开发工具的简称。

由于 Node.js 已经提供以下特性，因此你可以在 30 分钟完成一个脚手架。

- cli 命令模块，编写非常容易
- 基于 JavaScript 的模板引擎（知名的 30 ）

用 Node.js 做什么？

- API 服务
- 前端（moa-frontend）
- SDK（OAuth Provider）
- 辅助开发 cli 工具
- ...



## Installation

Node.js v8.x `setup_8.x` ~ v10.x `setup_10.x` ~ v11.x `setup_11.x` ~ v12.x `setup_12.x`:

    # Using Ubuntu
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y npm

    # Using Debian, as root
    curl -sL https://deb.nodesource.com/setup_12.x | bash -
    apt-get install -y nodejs

with Electron

    git clone https://github.com/electron/electron-quick-start
    cd electron-quick-start
    npm install
    npm start


## NPM - Node Package Manager
- https://nodejs.dev/learn/semantic-versioning-using-npm

NPM 是模块包管理工具

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用

- 测试是否成功安装 npm -v
- 查看当前目录已安装插件：npm list
- 更新全部插件： npm update [ --save-dev ]
- 使用 npm 更新对应插件： npm update <name> [ -g ] [ --save-dev]
- 使用 npm 卸载插件： npm uninstall <name> [ -g ] [ --save-dev ]

安装参数 -g -S -D

-g 即 --global 全局安装。 
    将会安装在 C:\Users\Administrator\AppData\Roaming\npm 并且写入系统环境变量；非全局安装：将会安装在当前定位目录;全局安装可以通过命令行任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，通过要求调用;
-S 即 --save 写入配置
    npm install module_name --save 会将模块依赖关系写入 package.json 的 dependencies，即运行依赖，相关模块是需要发布到生产环境的，比如 jQuery，React, Vue，ele-ui 等 ui 框架这些项目运行时必须使用到的插件就需要放到 dependencies。
-D 即 --save-dev 写入
    npm install module_name --save-dev 会将模块写入 package.json 的 devDependencies，即开发依赖，相关插件只用于开发环境，不用于生产环境。比如一些babel编译功能的插件、webpack打包插件就是开发时候的需要，真正程序打包跑起来并不需要的一些插件。
为什么要保存在package.json 因为node_module包实在是太大了。用一个配置文件保存，只打包安装对应配置文件的插件，按需导入。

nrm 包安装命令： npm i nrm -g

能够管理所用可用的镜像源地址以及当前所使用的镜像源地址，但是只是单纯的提供了几个url并能够让我们在这几个地址之间方便切换
nrm ls 即 nrm list，查看所有可用的镜像，并可以切换。`*` 号表示当前 npm 使用的地址，可以使用命令 nrm use taobao 或 nrm use npm 来进行两者之间的切换。

NPM v5.2.0 引入的一条命令 NPX，作为一个 NPM 包执行器，指在提高从 NPM 注册表使用软件包时的体验，解决的主要问题就是调用项目内部安装的模块。

NPX 使得使用 CLI 工具和其他托管在注册表，它大大简化了一些工具运行和使用。在 NPM 的基础之上，NPX 让 NPM 包中的命令行工具和其他可执行文件在使用上变得更加简单。它极大地简化了我们之前使用纯粹的 NPM 时所需要的大量步骤。

主要特点：

- 临时安装可执行依赖包，不用全局安装，不用担心长期的污染。
- 可以执行依赖包中的命令，安装完成自动运行。
- 自动加载 node_modules 中依赖包，不用指定 $PATH。
- 可以指定 node 版本、命令的版本，解决了不同项目使用不同版本的命令的问题。

⛏ prefix Configuration

The `prefix` config defaults to the location where node is installed.
On most systems, this is `/usr/local`. On Windows, it's `%AppData%\npm`.
On Unix systems, it's one level up, since node is typically installed at
`{prefix}/bin/node` rather than `{prefix}/node.exe`.

When the `global` flag is set, npm installs things into this prefix.
When it is not set, it uses the root of the current package, or the
current working directory if not in a package already.

⛏ Node Modules

Packages are dropped into the `node_modules` folder under the `prefix`.
When installing locally, this means that you can
`require("packagename")` to load its main module, or
`require("packagename/lib/path/to/sub/module")` to load other modules.

Global installs on Unix systems go to `{prefix}/lib/node_modules`.
Global installs on Windows go to `{prefix}/node_modules` (that is, no
`lib` folder.)

Scoped packages are installed the same way, except they are grouped together
in a sub-folder of the relevant `node_modules` folder with the name of that
scope prefix by the @ symbol, e.g. `npm install @myorg/package` would place
the package in `{prefix}/node_modules/@myorg/package`. See [`scope`](/using-npm/scope) for more details.

If you wish to `require()` a package, then install it locally.

⛏ Executables

When in global mode, executables are linked into `{prefix}/bin` on Unix,
or directly into `{prefix}` on Windows.

When in local mode, executables are linked into
`./node_modules/.bin` so that they can be made available to scripts run
through npm.  (For example, so that a test runner will be in the path
when you run `npm test`.)



## PowerShell NVM.ps1

NPM 配置要点参考 node_modules/nmp/doc 文档，使用 npm config ls -l 查看当前配置信息列表。

如何在多 Nodejs 版本下全局管理 node_modules 模块？因为 `prefix` 配置决定了当前 Node 从其
子目录加载模块，所以使用目录符号连接来更改版本时，可以额外设置 node_modules 目录的连接来实现。

具体操作是，使用一个目录安装 node 各版本，并且单独用一个 c:\\nvm\\node_moduels 安装模块，
切换版本时，将 Node 版本目录映射到某一目录，如 c:/nodejs，再将 node_modules 映射为其子目录，
最后将各版本的 NPM 目录映射为 node_modules 子目录。

Nodejs 18.2.0 除了 NPM 模块，还多了一个 corepck 模块。

另外 NPM 安装模块时，会自动解除映射的 node_modules，并使用 `prefix` 目录下的模块目录。

用户可以修改以下四个相关的配置文件：

    cache = "C:\\Users\\OCEAN\\AppData\\Roaming\\npm-cache"
    prefix= "c:\\nvm"

* per-project config file (/path/to/my/project/.npmrc)
* per-user config file (~/.npmrc)
* global config file ($PREFIX/etc/npmrc)
* npm builtin config file (/path/to/npm/npmrc)


```sh
PARAM([string]$version, $target="c:/nodejs")

# Use Target and LinkType in PS5.1, LinkTarget only support in newer version, such PS7.1
$PS = $PSCommandPath -replace "^.+[\\/]",""
$NVM = (Get-Item $PSCommandPath).Target
$VMD = $NVM
if ($NVM -eq $null){ 
    $NVM = $PSCommandPath
    $VMD = $PSCommandPath
}
$VMD = $VMD -replace "\\[^/\\]+$","\"
$versions = Get-Childitem -Directory "$VMD/v*"

$current = "Not set yet"
if ( (Test-Path $target) -and (Get-Item $target).Target){
    $current = (Get-Item $target).Target
}

function Print($msg, $color=$null)
{
    # Write-Host ("="*80)
    if ($color){
        Write-Host $msg -Foreground $color
    } else {
        Write-Host $msg
    }
    # Write-Host ("="*80)
} 

function PrintHelp 
{
    Print @"
    Node.js Version Manager`n
    Usage:
        $NVM $($versions[-1].Name)
        $NVM $($versions[-1].Name) c:/nodejs
    
    Candidate: 
        $($versions.Name)
    
    Current: 
        $($current)
"@
}

function PrintNoVersion 
{
    Print @"
    No such version: $version
          Candidate: $($versions.Name)
"@
}

function PrintResult($action, $result)
{
    if ($lastexitcode -eq 0){
        Print "$action [$lastexitcode] $result" Green 
    }else{
        Print "$action [$lastexitcode] $result" Yellow 
    }
}

function CanBeLinkSymblic($sym){
    $exist = Test-Path "$sym"
    if ($exist -and (Get-Item "$sym").Target -eq $null){
        return $false
    }
    return $true
}

function MakeSymblic($sym, $target, $filelink=$false)
{
    if ((CanBeLinkSymblic $sym) -eq $false){
        return Print "$sym is not symbolic and it is there"
    }
    if (Test-Path $sym){ 
        $ret = rm $sym 
    }
    if ($filelink){
        $ret = cmd.exe /c "mklink `"$sym`" `"$target`""
    }else{
        $ret = cmd.exe /c "mklink /d `"$sym`" `"$target`""
    }
    PrintResult MakeSymblic $ret
}

function SwitchVersion
{
    $versions | % {
        if ($_.Name.IndexOf($version) -ge 0){
            Print "Use $($_.Name)"
            MakeSymblic "$target"    "$_"
            MakeSymblic "$_/$PS"     "$VMD/$PS"     $true
            MakeSymblic "$_/nvm.exe" "$VMD/nvm.exe" $true
            FixedNodeModules "$_"
            break
        }
    }
}

function FixedNodeModules($ver)
{
    if (!(Test-Path "$ver/node_modules_inside")){
        ren "$ver/node_modules" "node_modules_inside"
    }
    MakeSymblic "$target/node_modules" "$VMD/node_modules"
    if(Test-Path "$ver/node_modules_inside/npm"){
        MakeSymblic "$target/node_modules/npm" "$ver/node_modules_inside/npm"
    }
    if (Test-Path "$ver/node_modules_inside/corepack"){
        MakeSymblic "$target/node_modules/corepack" "$ver/node_modules_inside/corepack"
    }
}

if ($version -eq ""){ 
    PrintHelp 
} elseif ($versions.Count -eq 0) {
    Print "No any Node.js version found"
} elseif (!(CanBeLinkSymblic $target)) {
    Print "Target is not a symbolic: $target"
} elseif ((Get-Childitem -Directory "$VMD/*$version*").Count -eq 0) {
    PrintNoVersion
} else{
    SwitchVersion($version)
}
```


## Ubuntu 上安装使用 node.js

一、安装

    $ sudo apt-get install nodejs
    $ sudo apt-get install npm

二、升级

    $ sudo npm install npm -g
    /usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
    npm@2.14.2 /usr/local/lib/node_modules/npm

    $ npm install –g n
    $ npm install –g n latest
    $ npm install –g n stable
    $ npm install –g n v12.10

latest 升级 node.js 到最新版，stable 升级 node.js 到最新稳定版，n 后面也可以跟随版本号。

三、npm 镜像替换为淘宝镜像

1.得到原本的镜像地址

    $ npm get registry 
    > https://registry.npmjs.org/

设成淘宝的

    $ npm config set registry http://registry.npm.taobao.org/

2.换成原来的

    $ npm config set registry https://registry.npmjs.org/
 

四、选装 cnpm

因为 npm 安装插件是从国外服务器下载，受网络影响大，可能出现异常，cnpm 是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10 分钟 一次以保证尽量与官方服务同步。

官方网址：http://npm.taobao.org

3.安装：命令提示符执行

    npm install cnpm -g --registry=https://registry.npm.taobao.org

注意：安装完后最好查看其版本号cnpm -v或关闭命令提示符重新打开，安装完直接使用有可能会出现错误；

注：cnpm 跟 npm 用法完全一致。


五、全局安装与本地安装

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有 -g 而已。

比如我们使用 npm 命令安装常用的 Node.js web框架模块 express:

    $ npm install express          # 本地安装
    $ npm install express -g       # 全局安装

六、卸载

    sudo npm uninstall npm -g
    sudo apt-get remove nodejs


使用 nvm 管理 Node.js 版本。

安装

    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

安装成功后需要关闭 xshell，重新启动。nvm 才会生效。

使用 command -v nvm 查看 nvm 是否安装成功

    root@linuxidc:~# command -v nvm

通过 nvm ls 查看已安装的版本

    $ nvm ls
                N/A
    node -> stable (-> N/A) (default)
    iojs -> N/A (default)

通过 nvm ls-remote 查看可使用版本

    $ nvm ls-remote
            v0.1.14
            v0.1.15
            v0.1.16
            v0.1.17
            v0.1.18

通过 nvm install 7.8.0来安装，后面的版本号我们可以任意选择

    root@linuxidc:~# nvm install 7.8.0
    Downloading and installing node v6.2.0...
    Downloading https://nodejs.org/dist/v7.8.0/node-v7.8.0-linux-x64.tar.xz...


国内如果不能直接下载安装脚本，可以通过克隆 nvm 仓库安装即 Git Install：

    git clone https://github.com/nvm-sh/nvm.git .nvm
    git checkout v0.37.2

- 先决条件，安装 git v1.7.10+
- clone nvm 到想安装的目录
- 签出最新的版本 git checkout v0.37.2
- sourcing nvm 引用激活 . ./nvm.sh

修改 `~/.bashrc` `~/.profile` `~/.zshrc` 之一个，以自动查找 nvm 命令：

    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion



## CNPM 替代 NPM 使用 taobao 模块服务器
http://npm.taobao.org/

使用国外的模块服务经常因墙事故出现项目运行失败，建议使用 taobao 模块服务器，例如使用阿里的飞冰框架时遇到 ice-scripts 2.1.6 找不到 node-sass 模块问题：

    Cannot find module 'node-sass'

直接使用 npm 安装失败，解决办法是接入国内模块仓库并安装相应 cnpm 管理模块：

    npm config set registry https://registry.npmjs.org/
    npm config set registry https://registry.npm.taobao.org
    npm config set disturl https://npm.taobao.org/dist

    npm install -g cnpm --registry=https://registry.npm.taobao.org
    cnpm install node-sass

模块下载成功后就可以正常的运行项目了。

这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

- 当前 registry.npm.taobao.org 是从 r.cnpmjs.org 进行全量同步的.
- 当前 npm.taobao.org 运行版本是: cnpmjs.org@
- 本系统运行在 Node.js@ 上.
- 开源镜像: http://npm.taobao.org/mirrors
- Node.js 镜像: http://npm.taobao.org/mirrors/node
- alinode 镜像: http://npm.taobao.org/mirrors/alinode
- phantomjs 镜像: http://npm.taobao.org/mirrors/phantomjs
- ChromeDriver 镜像: http://npm.taobao.org/mirrors/chromedriver
- OperaDriver 镜像: http://npm.taobao.org/mirrors/operadriver
- Selenium 镜像: http://npm.taobao.org/mirrors/selenium
- Node.js 文档镜像: http://npm.taobao.org/mirrors/node/latest/docs/api/index.html
- NPM 镜像: https://npm.taobao.org/mirrors/npm/
- electron 镜像: https://npm.taobao.org/mirrors/electron/
- node-inspector 镜像: https://npm.taobao.org/mirrors/node-inspector/

安装模块

从 registry.npm.taobao.org 安装所有模块. 当安装的时候发现安装的模块还没有同步过来, 淘宝 NPM 会自动在后台进行同步, 并且会让你从官方 NPM registry.npmjs.org 进行安装. 下次你再安装这个模块的时候, 就会直接从 淘宝 NPM 安装了.

    $ cnpm install [name]

直接通过 sync 命令马上同步一个模块, 只有 cnpm 命令行才有此功能:

    $ cnpm sync connect

当然, 你可以直接通过 web 方式来同步: /sync/connect

    $ open https://npm.taobao.org/sync/connect

支持 npm 除了 publish 之外的所有命令, 如:

    $ cnpm info connect



# 🚩 Yarn vs NPM
- https://classic.yarnpkg.com/en/docs/usage
- https://classic.yarnpkg.com/en/docs/cli/
- [Yarn Install](https://yarnpkg.com/zh-Hans/docs/install#windows-stable)
- [NPM vs Yarn](https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/)
- [为什么我从 npm 到 yarn 再到 npm?](https://segmentfault.com/a/1190000014716713)

缓存目录配置查询，和 NPM 共用部分配置：

    yarn config list
    yarn config current

    C:\Users\{YOU}\AppData\Roaming\npm-cache
    C:\Users\{YOU}\AppData\Local\Yarn

Yarn 对你的代码来说是一个包管理器， 你可以通过它使用全世界开发者的代码，或者分享自己的代码。 Yarn 做这些快捷、安全、可靠，所以你不用担心什么。

通过 Yarn 可以使用其他开发者针对不同问题的解决方案，使自己的开发过程更简单。 使用过程中遇到问题，你可以将其上报或者贡献解决方案。一旦问题被修复，Yarn会更新保持同步。

代码通过包（package）（或者称为模块（module））的方式来共享。 一个包里包含所有需要共享的代码，以及描述包信息的文件，称为package.json。

Yarn 比 npm 更快因为 Yarn 会缓存每一个它下载的包，这样当下次请求相同的包的时候就不要再次下载了。
而且 yarn 会并行下载依赖的包，所以 yarn 比 npm 更快。

旧版 npm 确实存在这些问题，一个项目依赖经常几百 MB，把项目挪一个位置重新 install，都要重新下载，
而且下载速度真是出奇的慢，所以才有了国内专用的 cnpm。其实 cnpm 也不是什么好东西，下载包经常报错，
尤其是跟 npm 混用的时候。


## Yarn Usages

对于如何安装 Yarn，Yarn 官方给出了很全面的说明，详见 Install Yarn；涵盖 MacOs，Windows，Linux 等平台，并且还给出一些备用安装方式，譬如通过 npm 来安装：

    npm install --global yarn

当然，Yarn 官方在 Yarn 备选安装方式有明确讲道不推荐通过 npm 安装 Yarn，在用基于 Node 的包管理器安装 Yarn 时，该包未被签名， 并且只通过基本的 SHA1 散列进行唯一完整性检查。这在安装系统级应用时有安全风险。因为这些原因，高度推荐用你的操作系统最适合的方式来安装 Yarn。

但在实际使用中，这倒是最为方便的方式之一，迄今倒也没遇到什么问题；当然，最好按照官方推荐的方式；如果你使用并熟悉 Mac 操作系统，用推荐方式安装 Yarn 也是很简单：

    brew install yarn
    brew upgrade yarn

如果 Yarn 通过 Debian / Ubuntu 包安装，则可以运行如下命令予以更新：

    sudo apt-get update && sudo apt-get install yarn

也可以使用自体 yarn global 命令来全局更新自己：

    yarn global add yarn

    yarn global <add/bin/list/remove/upgrade> [--prefix]

    Install packages globally on your operating system.

常用命令：

   1. yarn add: add a package to use in your current package.
   2. yarn bin: displays the location of the yarn bin folder.
   3. yarn list: list installed packages.
   4. yarn remove: remove a package that will no longer be used in your current package.
   5. yarn upgrade: upgrade packages to their latest version based on the specified range.
   6. yarn upgrade-interactive: similar to upgrade command, but display the outdated packages before performing any upgrade, allowing the user to select which packages to upgrade.

Usage

```sh
# version info
yarn -v
yarn --version

# Starting a new project, make a package.json
yarn init

# Adding a dependency
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

# Adding a dependency to different categories of dependencies
# Add to devDependencies, peerDependencies, and optionalDependencies respectively:
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional

# Upgrading a dependency
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

# Removing a dependency
yarn remove [package]

# Installing all the dependencies of project
yarn
# or
yarn install
```

配置项查询与管理：

    yarn config list
    yarn config get <key>
    yarn config delete <key>
    yarn config set <key> <value> [-g|--global]

    # 配置源镜像为淘宝源
    yarn config get registry
    yarn config set registry https://registry.npm.taobao.org/

    # 修改全局安装目录
    yarn config set global-folder "C:\Yarn\global"

    # 查看或设置全局安装位置、命令目录前缀 *\bin，请相应设置环境变量
    yarn global dir
    yarn global bin
    yarn config set prefix "C:\Yarn\global\"
    yarn config set cache-folder "D:\Yarn\cache"


使用 install 命令安装依赖包，生成 package.json：

    yarn install
    yarn install --flat           # 安装一个包的单一版本
    yarn install --force          # 强制重新下载所有包
    yarn install --production     # 只安装dependencies里的包
    yarn install --no-lockfile    # 不读取或生成yarn.lock
    yarn install --pure-lockfile  # 不生成 yarn.lock

添加包依赖，更新 package.json yarn.lock：

    yarn add [package]            # 项目中安装依赖，更新 package.json yarn.lock
    yarn add [package]@[version]  # 安装指定版本，主要版本，使用 -E 指定小版本
    yarn add [package]@[tag]      # 安装某个 tag，比如 beta，next 或者 latest

默认依赖类型 dependencies，你也可以指定依赖类型：

    yarn add --dev/-D             # 加到 devDependencies
    yarn add --peer/-P            # 加到 peerDependencies
    yarn add --optional/-O        # 加到 optionalDependencies

默认安装包的主要版本里的最新版本，下面两个命令可以指定版本：

    yarn add --exact/-E           # 安装精确版本。
    yarn add foo@1.2.3            # 会接受 1.9.1 版
    yarn add foo@1.2.3 --exact    # 只安装 1.2.3 版

    yarn add --tilde/-T           # 安装包的次要版本里的最新版。
    yarn add foo@1.2.3 --tilde    # 接受 1.2.9，但不接受 1.3.0

发布包

    yarn publish

移除一个包

    yarn remove <packageName>：移除一个包，会自动更新package.json和yarn.lock

更新一个依赖

    yarn upgrade 用于更新包到基于规范范围的最新版本

运行脚本

    yarn run 用来执行在 package.json 中 scripts 属性下定义的脚本

显示某个包的信息

    yarn info <packageName> 可以用来查看某个模块的最新版本信息

缓存

    yarn cache
    yarn cache list     # 列出已缓存的每个包
    yarn cache dir      # 返回 全局缓存位置
    yarn cache clean    # 清除缓存


使用 Yarn 为 React/Vue 项目添加 TypeScript 2.8 支持

首先，我们需要安装 TypeScript 和 tslibs 帮助程序库，以便我们生出的代码更小

    yarn add -D typescript@next
    # tslib 将仅用与您的编译目标不支持的功能
    yarn add tslib

    # 创建工程默认配置 tsconfig.json 
    yarn tsc --init

现在我们来安装 react、react-dom 和它们的类型定义。

    yarn add react react-dom
    yarn add -D @types/{react,react-dom}

Yarn + Vue

    yarn add typescript@3.1.4             # ts 语言支持)
    yarn add ts-loader@3.5.0              # 识别ts的laoder)
    yarn add tslint@5.11.0                # tslint校验库)
    yarn add tslint-loader@3.5.4          # tslint的loader)
    yarn add tslint-config-standard@8.0.1 # 用于tslint默认校验规则)
    yarn add vue-class-component@7.1.0    # 类组件支持
    yarn add vue-property-decorator@7.2.0 # 用于在.vue文件中使用ts语法)



## Yarn 6 大优点


Features

* **Offline Mode.** If you've installed a package before, then you can install it again without an internet connection.
* **Deterministic.** The same dependencies will be installed in the same exact way on any machine, regardless of installation order.
* **Network Performance.** Yarn efficiently queues requests and avoids request waterfalls in order to maximize network utilization.
* **Network Resilience.** A single request that fails will not cause the entire installation to fail. Requests are automatically retried upon failure.
* **Flat Mode.** Yarn resolves mismatched versions of dependencies to a single version to avoid creating duplicates.
* **More emojis.** 🐈


1、离线模式

yarn会有一个缓存目录，会缓存以前安装过的软件包，再次安装时就不必从网络下载了，大大加速安装速度。

这一点很重要，npm 饱受诟病的一点就是，每次安装依赖，都需要从网络下载一大堆东西，而且是全部重新下载，工程多的时候比较烦人。

我司部署node项目，是需要在发布机上install所有的依赖而且发布机的网络环境不是很好(不给搭梯子)，导致安装慢不说还经常失败(部分包需要联网编译)。更换yarn后只需将yarn的cache目录缓存起来，每次install嗷嗷的快，麻麻再也不用担心发布失败了。

2、依赖关系确定性
在每一台机器上针对同一个工程安装依赖时，生成的依赖关系顺序和版本是一致的。

之前 npm 在这里有一个处理得不好的地方 。举例来说，我写的工程依赖 A, B, C 三个库，我在编写 package.json 的时候，给 A, B, C 都指定了版本号。但是 A 库可能又依赖 D, E, F 库，D 库又依赖 G, H 库。这么多关联依赖关系中，很可能某个库在指定依赖时，没有指定版本号。

于是，这就导致了一个问题。如果我在另一台机器上对同样的工程安装依赖，或者把这台机器工程下的 node_modules 目录删除来重新安装依赖。由于关联依赖中，没有指定版本号的库，发生了版本更新，就会导致再次安装的依赖，其中具体某些软件包的版本是不一致的。在这种情况下，你会发现原来能够正常运行的程序，忽然变得不能工作或一堆 BUG.

npm对包引入顺序也十分的敏感，比如在一个空项目里执行以下命令

    npm init -y
    npm install globule@0.1.0 -S
    npm install babel-generator@6.19.0 -S
    npm install babel-helper-define-map@6.18.0 -S

我们这里安装了3个包都依赖于lodash，不过globule依赖lodash@1.0.3,另外两个依赖lodash@4.x。

这时假设我们在项目里使用lodash，但是忘记重新安装lodash

    var lodash = require('lodash');
    console.log(lodash.VERSION); // v1.0.3

另一个同事获取项目代码，执行npm install , 这时的目录依赖结构为

可以看到第一层依赖的lodash变成了4.x版本，这样就造成了依赖版本不一致的问题。而yarn则会保证无论怎样引入的顺序，目录依赖结构都是一致的，确保不会发生这样的BUG。

3、网络性能优化

下载软件时会优化请求顺序，避免请求瀑布发生

4、网络回弹

yarn在某个安装包请求失败时不会导致安装失败，它会自动去尝试重新安装。而npm则会毫不犹豫的失败，导致得再来一次，耗费时间

5、多注册来源

所有的依赖包，不管他被不同的库间接关联引用多少次，安装这个包时，只会从一个注册来源去装，要么是 npm 要么是 bower, 防止出现混乱不一致。

6、扁平模式

对于多个包依赖同一个子包的情况，yarn会尽量提取为同一个包，防止出现多处副本，浪费空间。比如1.2中，`yarn`会为`babel-generator`和`babel-helper-define-map` 创建同一个`lodash`子依赖，这样就节约一份的空间。


## Npm & Yarn 命令比较

Npm & Yarn 有差异的命令

    Npm                         Yarn                        功能描述
    npm install(npm i)          yarn install(yarn)          根据 package.json 安装所有依赖
    npm i –save [package]       yarn add [package]          添加依赖包
    npm i –save-dev [package]   yarn add [package] –dev     添加依赖包至 devDependencies
    npm i -g [package]          yarn global add [package]   进行全局安装依赖包
    npm update –save            yarn upgrade [package]      升级依赖包
    npm uninstall [package]     yarn remove [package]       移除依赖包

相同操作的命令

    Npm                         Yarn                功能描述
    npm init                    yarn init           互动式创建/更新 package.json 项目配置文件 
    npm run                     yarn run            运行 package.json 中预定义的脚本
    npm config list             yarn config list    查看配置信息
    npm config set registry     yarn config set registry 仓库地址   更换仓库地址
    npm list                    yarn list           查看当前目录下已安装的node包
    npm login                   yarn login          保存你的用户名、邮箱
    npm logout                  yarn logout         删除你的用户名、邮箱
    npm outdated                yarn outdated       检查过时的依赖包
    npm link                    yarn link           开发时链接依赖包，以便在其他项目中使用
    npm unlink                  yarn unlink         取消链接依赖包
    npm publish                 yarn publish        将包发布到 npm
    npm test                    yarn test           测试 = yarn run test
    npm bin                     yarn bin            显示 bin 文件所在的安装目录
    npm info                    yarn info           显示一个包的信息

yarn或者是npm安装或者升级包的时候，都可以指定对应的版本信息

    npm install [package]@[version]
    npm install [package]@[tag]

    yarn add [package]@[version]
    yarn add [package]@[tag]

yarn和npm独有的命令

`npm rebuild pacakgename` 用于更改包内容后进行重建；比如常见的`npm rebuild node-sass`；当使用Sass（Scss）来作样式表预处理器，再打包的时候，你可能会遇见如下错误；而解决此问题，最为简单的方式即使用 rebuild 命令，对 node-sass 进行重建即可。

>Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: 
This usually happens because your environment has changed since running npm install. Run npm rebuild node-sass to build the binding for your current environment.

`yarn import` 依据原npm安装后的node_modules目录生成一份yarn.lock文件；
`yarn licenses` 列出已安装包的许可证信息
`yarn pack` 创建一个压缩的包依赖 gzip 档案
`yarn why` 显示有关一个包为何被安装的信息
`yarn autoclean` 从包依赖里清除并移除不需要的文件

总结：yarn的命令跟npm的命令大同小异，对于使用过npm的人来说，从npm过渡到yarn只是半个小时以内的事情。所以学习成本很低，值得学习一下。

设置yarn淘宝镜像

    yarn config set registry http://registry.npm.taobao.org


# 🚩 NPM RUN-SCRIPT 命令

[npm scripts 使用指南 - 阮一峰](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。

如果是并行执行（即同时的平行执行），可以使用&符号。

    $ npm run script1.js & npm run script2.js

如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用&&符号。

    $ npm run script1.js && npm run script2.js

这两个符号是 Bash 的功能。此外，还可以使用 node 的任务管理模块：script-runner、npm-run-all、redrun。

linux 系统还可以使用 `nohub` 和 `&` 命令来运行后台命令

    nohup node app.js &

Windows 系统可以使用 `start /b` 来运行后台程序，相应的进程强制终止命令如下

    start /b some.exe
    taskkill /IM some.exe


npm 脚本有pre和post两个钩子。举例来说，build脚本命令的钩子就是prebuild和postbuild。

    "prebuild": "echo I run before the build script",
    "build": "cross-env NODE_ENV=production webpack",
    "postbuild": "echo I run after the build script"

用户执行npm run build的时候，会自动按照下面的顺序执行。

    npm run prebuild && npm run build && npm run postbuild

因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。

    "clean": "rimraf ./dist && mkdir dist",
    "prebuild": "npm run clean",
    "build": "cross-env NODE_ENV=production webpack"

npm 默认提供下面这些钩子。

    prepublish，postpublish
    preinstall，postinstall
    preuninstall，postuninstall
    preversion，postversion
    pretest，posttest
    prestop，poststop
    prestart，poststart
    prerestart，postrestart

自定义的脚本命令也可以加上pre和post钩子。比如，myscript这个脚本命令，也有premyscript和postmyscript钩子。不过，双重的pre和post无效，比如prepretest和postposttest是无效的。

npm 提供一个npm_lifecycle_event变量，返回当前正在运行的脚本名称，比如pretest、test、posttest等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的npm scripts命令编写代码。请看下面的例子。

    const TARGET = process.env.npm_lifecycle_event;

    if (TARGET === 'test') {
      console.log(`Running the test task!`);
    }

    if (TARGET === 'pretest') {
      console.log(`Running the pretest task!`);
    }

    if (TARGET === 'posttest') {
      console.log(`Running the posttest task!`);
    }

注意，prepublish这个钩子不仅会在npm publish命令之前运行，还会在npm install（不带任何参数）命令之前运行。这种行为很容易让用户感到困惑，所以 npm 4 引入了一个新的钩子prepare，行为等同于prepublish，而从 npm 5 开始，prepublish将只在npm publish命令之前运行。

## scripts 命令简写形式

四个常用的 npm 脚本有简写形式。

    npm start     npm run start
    npm stop      npm run stop
    npm test      npm run test
    npm restart   npm run stop && npm run restart && npm run start


## CLI Commander 交互工具制作
- 《做一个基于react-scripts的脚手架》 https://www.codercto.com/a/80522.html
- 🛠如何快速开发一个自己的项目脚手架？ https://www.jianshu.com/p/5d77ba59d1f6
- https://www.smashingmagazine.com/2017/03/interactive-command-line-application-node-js/
- 命令行交互模块 https://github.com/SBoudrias/Inquirer.js
- Commander.js https://www.npmjs.com/package/commander

获取命令行参数并不困难，只需要使用 process.argv，但解析这些参数的值和选项可是件累人的活。可以直接用 Commander 开源模块，用于编写写可交互的命令行工具。

```js
var program = require('commander');

program
  .version('0.1.0')
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --no-tests', 'ignore test hook');

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  .action(function(env, options){
    var mode = options.setup_mode || "normal";
    env = env || 'all';
    console.log('setup for %s env(s) with %s mode', env, mode);
  });

program
  .command('exec <cmd>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action(function(cmd, options){
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  }).on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ deploy exec sequential');
    console.log('  $ deploy exec async');
  });

program
  .command('*')
  .action(function(env){
    console.log('deploying "%s"', env);
  });

program.parse(process.argv);
```

来写一段程序，从 CSV 文件中读取数据并打印到控制台。

```js
const program = require('commander');
const csv = require('csv');
const fs = require('fs');
program
  .version('0.0.1')
  .option('-l, --list [list]', 'List of customers in CSV')
  .parse(process.argv)
let parse = csv.parse;
let stream = fs.createReadStream(program.list)
    .pipe(parse({ delimiter : ',' }));
stream
  .on('data', function (data) {
    let firstname = data[0];
    let lastname = data[1];
    let email = data[2];
    console.log(firstname, lastname, email);
  });
```

使用 inquirer 模块实现控制台交互程序，这是功能非常完善的控制台输入模块，许多框架的脚手架都用到它：

```js
const inquirer = require('inquirer')

var questions = [
  { type: 'input', name: 'name', message: "What's your name?" },
  { 
    type: 'rawlist', 
    name: 'years', 
    message: "When was PRC founded?", 
    choices: [ "1945", new inquirer.Separator(), "1949", new inquirer.Separator(), "1955" ]
  },
  {
    type: 'checkbox',
    name: 'favor',
    message: "What's your favor?",
    choices: [ "Azure", new inquirer.Separator(), "Blue Violet" ]
  },
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`, answers)
})
```

创建一个名为 doreact 的 Nodejs 项目，作为简化示例，使用默认选项初始化，不依赖其它模块，不用执行 npm install 安装他依赖工具：

    npm init

配置文件添加一个 bin 配置：

    {
      "name": "doreact",
      "version": "1.0.0",
      "description": "",
      "main": "main.js",
      "bin": {
        "doreact": "index.js"
      },
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }

index.js 随意写了一句测试语句：

    #!/usr/bin/env node
    console.log("do react here...")

执行链接 npm link：

    npm link
    npm WARN doreact@1.0.0 No description
    npm WARN doreact@1.0.0 No repository field.

    up to date in 0.136s
    C:\Users\OCEAN\AppData\Roaming\npm\doreact -> C:\Users\OCEAN\AppData\Roaming\npm\node_modules\doreact\index.js
    C:\Users\OCEAN\AppData\Roaming\npm\node_modules\doreact -> C:\coding\md\icework\doreact

npm link 命令可以将一个 npm 包链接到全局执行环境，从而在任意位置使用命令行都可以直接运行。简要地讲，这个命令主要做了两件事：

- 为 npm 包目录创建软链接，将其链到 {prefix}/lib/node_modules/your_package
- 为可执行文件 bin 创建软链接，将其链到 {prefix}/bin/{name}

这两个路径是官方文档给出的 Linux 平台上的路径。在 Windows平台中，这两个路径为：

- 目录 C:\Users\{Username}\AppData\Roaming\npm\node_modules\your_package
- 文件 C:\Users\{Username}\AppData\Roaming\npm\package_name

可执行文件创建了文件的软链接后，这样时就会在 npm 程序目录下放置一个运行脚本 doreact，可以在命令行运行这本 CLI 程序：

    #!/bin/sh
    basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

    case `uname` in
        *CYGWIN*|*MINGW*|*MSYS*) basedir=`cygpath -w "$basedir"`;;
    esac

    "$basedir/node_modules/doreact/index.js"   "$@"
    exit $?

在 Windows 平台下会有一个控制台脚本命令：

    @ECHO off
    SETLOCAL
    CALL :find_dp0
    "%dp0%\node_modules\doreact\index.js"   %*
    ENDLOCAL
    EXIT /b %errorlevel%
    :find_dp0
    SET dp0=%~dp0
    EXIT /b


在 Linux 系统中，`#!/usr/bin/env node` 这行会让系统执行 node 主程序来加载入口程序。执行 npm link 链接后，就可以把命令挂载到全局，效果和 npm install -g 后一样，当做全局命令使用。link 的主要目的是给我开发调试用的，现在可以直接在控制台输入 doreact 执行，你就可以看到打印的信息了。

开发完成，可以试试发布到 NPM 官网上，只需要注册一个账户，通过邮箱验证，就可以执行 `npm login` 登录 NPM 账号，然后执行 `npm publish` 发布。注意，项目 package.json 中的 name 也就是项目名称不能和线上已有项目重名。发布好就可以通过 `npm i <you project name> -g` 来全局安装它。

注意，如果使用了淘宝源，需要暂时切回官方源：

    npm config set registry https://registry.npm.taobao.org
    npm config set registry http://registry.npmjs.org


## hot reload
https://webpack.js.org/configuration/dev-server/
https://zhuanlan.zhihu.com/p/58171039

一般情况下，我都是通过 CLI 的方式热加载项目，但是有一次项目中我需要 debug 编译的过程，所以就需要通过 Nodejs 调用相应的API实现热加载。

    webpack-dev-server --config webpack.config.js

总结了两种方式：第一种是 nodejs 调用 webpack-dev-server 的API ， 第二种是 通过 webpack-dev-middleware + webpack-hot-middleware + express 实现。

supervisor 在 node 程序更改时会自动终止程序然后重启

    npm install -g supervisor

    supervisor app.js

如果是在Linux或者mac上安装会出现错误，因为需要管理员权限才能安装，请在命令前加上sudo



使用 fs 的 watch：

    const fs = require('fs');
    fs.watch('./a.txt', function(eventType,filename){
        console.log(eventType,filename);
    });

Windows 下修改一个文件会调用多次 Windows API，导致多次打印。
https://github.com/nodejs/node-v0.x-archive/issues/1970#issuecomment-2599352



# 🚩 NPM 模块发布

在自己新建的文件夹下执行如下代码：

    npm init

按照提示填写基本信息，配置项意义如下：

- name      包的名字    默认是所在文件夹的名字
- version   包的版本    默认值 1.0.0
- description   项目描述    
- entry point   入口文件    默认值 index.js
- test command  测试命令    
- git respository   源代码git仓库地址  
- keyword   关键字，会显示在npm中，方便别人搜索 
- author    作者  
- license   执照

参照 Webpack 教程，开始编写模块代码。

## 发布到 NPM 仓库

先在官网注册 npm 账号，通过邮箱验证，没有验证的话是不能发布代码 https://www.npmjs.com。

项目添加 .npmignore 文件，例：

    /**/*
    !dist/gaia.demo.map.js
    !ACKNOWLEDGEMENT

这样会将 build 后的 dist 文件夹内的 js 包文件发布到 npm，方便后续通过 cdn 访问。

登录 npm 账号，提交发布上面创建的包：

    $ npm adduser
    Username: your name
    Password: your password 
    Email: yourmail

按照你注册的账号配置好，这时候看一下 package.json 中 author 尽量与 npm 账户一致。

在根目录下配置账号信息，只用配置一次即可，我上传的时候发现有提示必须 admin 权限才能上传问题就是没在根目录下配置信息。

检查是否登录成功，如果不成功则重新登录一下，配置成功之后提交代码:

    npm who am i
    npm login
    npm publish

注意：如果提示包不能为 private，需要执行下面的发布方式：

    npm publish --access public

unpublish 可以用来删除发布的模块，超过 24 小时就不能删除了：

    npm --force unpublish module_name

每次提交版本号都要比上次的高，测试是否提交成功，去官网你的账号下面看一下有没有，或者直接 npm 下载下来:

    npm i module_name

或者直接上官网的模块主页上看结果：

    https://www.npmjs.com/package/module_name


## npm 的版本控制

在 package.json 的 version 字段记录了每次提交到 npm 的版本号，手动修改或者使用 npm version 命令。

npm 有一套自己的版本控制标准 Semantic versioning 语义化版本，对于 "version":"x.y.z" 具体体现为：

- 修复 bug 小改动，增加z
- 增加了新特性，但仍能向后兼容，增加y
- 有很大的改动，无法向后兼容,增加x

例如：原本的项目是 1.0.0 版本的话，若是小改动，版本号变为 1.0.1，大级别升级版本号变为 2.0.0。

通过 npm version 自动改变版本，update_type 为 patch, minor, or major 其中之一，分别表示补丁，小改，大改。

NPM 提供了一条打包命令将模块的文件打包为一个压缩包，压缩包里面的内容跟其他用户通过 npm install 安装你的模块里的内容一模一样。

    npm pack

这样，你就能清楚的知道，其他人安装你的npm包后，包里的内容到底有哪些，可以说是相当方便了。发布一个npm包实际上不是很难，而要维护各个版本功能可用，各种文档的编写，各种版本示例的迭代升级等等，这些才是最折磨人的事情。

## 一些常见的错误

1. no_perms Private mode enable, only admin can publish this module

    这是因为镜像设置成淘宝镜像了，设置回来即可

        npm config set registry http://registry.npmjs.org

2. npm publish failed put 500 unexpected status code 401

    一般是没有登录，重新登录一下 npm login 即可

3. npm ERR! you do not have permission to publish “your module name”. Are you logged in as the correct user?

    包名被占用，改个包名即可。最好在官网查一下是否有包名被占用，之后再重命名

4. you must verify your email before publishing a new package

    邮箱未验证，去官网验证一下邮箱


## 通过CDN访问

这里使用的是 jsdelivr

地址格式为：

    https://cdn.jsdelivr.net/npm/(packagename)@(version)/(file)

如：

    https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js




# 🚩 Node 架构
- https://nodejs.org/en/docs/
- https://nodejs.org/dist/latest-v14.x/docs/api/
- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- 解读 V8 GC Log（一）: Node.js 应用背景与 GC 基础知识 https://developer.aliyun.com/article/592878

Node 有四几个基本特性：

- 异步 I/O 可以保证在 CPU 计算的同时，异步的加载 I/O，加快了应用的访问。不像传统的服务器是使用阻塞 I/O、轮询 I/O 等等，它相当于在发送处理请求时，直接传一个回调函数，当异步的 I/O 结束后，会自动的执行回调。

- Event Loop 事件驱动，Libuv 异步 I/O 把程序粒度降低到事件级别，file system, DNS, network, child processes, pipes, signal handling, polling and streaming。传统的服务器是一个请求分配一个线程进行处理，这样就会增加多线程通信的复杂性。而事件驱动，则简化了事件模型。

- 单线程，主要是因为 Node 基于 V8 引擎具有单线程的特点，而且内存很小。这同时也是 Node 的劣势，无法利用多核 CPU 进行多线程高 CPU 密度的应用。单线程应用出现问题整个系统也会崩溃，因此 Node 提供了 child_process 模块创建工作线程，以此来利用多核，也引入 cluster 集群特性，增加健壮性。

- 跨平台，Node 除了基于 JavaScript 实现开放模块功能，底层的大部分的模块还是使用 C++ 实现的，因此通过切换系统级别的组件，可以直接切换平台。

Node 依赖的库及工具：

- Libraries
    - Google V8 JavaScript engine C++ API.
    - libuv C library asynchronous I/O.
    - llhttp lightweight TypeScript and C library for HTTP parse.
    - c-ares C library for asynchronous DNS requests.
    - OpenSSL used extensively in both the tls and crypto modules.
    - zlib for fast compression and decompression.
- Tools
    - npm - package manager
    - gyp - The build system is handled by gyp, a python-based project generator copied from V8.
    - gtest - Native C++ code can be tested using gtest, which is taken from Chromium. 


## Memory 内存机制
- 深入浅出 Node.js 重点内容 https://www.jianshu.com/p/6a6ce275422f

Node 的内存机制很像 JVM，因为开发设计 Node 内存虚拟机的正是开发 Hotspot 的人。

在 JavaScript 能使用的内存是有限制的，64 位系统下约为 1.4GB，32 位系统减半。

在 Node 启动前可以通过传递以下参数来调整最大值，单位为 MB：

    node --max-old-space-size=1700 app.js
    node --max-new-space-size=1024 app.js

V8 垃圾回收机制将内存分为新生代和老生代，新生代中的对象为存活时间较短的对象，老生代中的对象为存活时间较长或常驻内存的对象，堆的整体大小就是新生代所用内存加上老生代所有内存。

新生代中的对象主要通过 Scavenge 算法进行垃圾回收，具体实现是 Cheney 算法。

垃圾回收机制可以简单的描述为：

- 新生代：生命周期短的对象，使用复制回收——即把内存分成两块，一块闲置，另一块工作；垃圾回收时，把工作中的存活对象复制到闲置空间中，再交换闲置和工作状态。典型的空间换时间。

- 老生代：生命周期长的对象，使用标记清除、标记整理——即标记那些不再使用的对象，回收的时候回收掉这些标记中的对象；由于这种标记方法会出现内存碎片，因此搭配标记整理，可以整理内存。

这基于一个基本原理：那么不会长时间生存的内容，应该经常清理，而那么长时间生存的内容应该让它安静地存在下去下。

坑一：使用大对象作为缓存，导致老生代（Old Space）的垃圾回收变慢

例如使用一个变量 cache 作为缓存，加速用户信息的查询，进行了很多次查询后，cache 对象会进入老生代，并且会变得无比庞大，而老生代是使用三色标记 + DFS 的方式进行 GC 的，一个大对象会直接导致 GC 花费的时间增长（而且也有内存泄漏的风险）。

坑二：新生代空间不足，导致频繁 GC，这个坑会比较隐蔽。

Node.js 默认给 64 位的机器的新生代分配的内存是 64MB，但因为新生代 GC 使用的是 `Scavenge` 算法，所以实际能使用的内存只有一半，即 32MB。

当业务代码频繁地产生大量的小对象时，这个空间很容易就会被占满，从而触发 GC。虽然新生代的 GC 比老生代要快得多，但频繁的 GC 依然会很大地影响性能。极端的情况下，GC 甚至可以占用全部计算时间的 30% 左右。

解决方法就是，在启动 Node.js 时，修改新生代的内存上限，减少 GC 的次数：

    node --max-semi-space-size=128 app.js

随着内存的增大，GC 的次数减少，但每次 GC 所需要的时间也会增加，所以并不是越大越好，具体数值需要对业务进行压测 profile 才能确定分配多少新生代内存最好。

但一般根据经验而言，分配 64MB 或者 128MB 是比较合理的。


## Event Loop
- https://nodejs.dev/learn/the-nodejs-event-emitter
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
- JavaScript 运行机制详解：再谈 Event Loop http://www.ruanyifeng.com/blog/2014/10/event-loop.html
- JavaScript 中的 Event Loop - Jake Archibald https://www.bilibili.com/video/BV1E441197g5
- https://nodejs.org/en/docs/guides/timers-in-node/
- https://nodejs.org/dist/latest-v14.x/docs/api/timers.html
- https://swtch.com/~rsc/regexp/regexp1.html
- ReDOS https://www.cnblogs.com/wwlww/p/8413313.html
- https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
- https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/
- https://nodejs.dev/learn/the-nodejs-event-loop

Node.js 的运行机制如下：

- V8 引擎解析 JavaScript 脚本。
- 解析后的代码，调用 Node API。
- libuv 库负责 Node API 的执行，将不同的任务分配给不同的线程，形成一个 Event Loop，以异步的方式将任务的执行结果返回给 V8 引擎。
- V8 引擎再将结果返回给用户。

除了 setTimeout & setInterval 这两个方法，Node.js 还提供了另外两个与 Task Queue 有关的方法：

- process.nextTick() 添加在当前"执行栈"的尾部，以及下一次主线程读取 Task Queue 之前触发的回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。
- setImmediate() 往当前 Task Queue 的尾部添加事件，它指定的任务总是在下一次 Event Loop 时执行，这与 setTimeout(fn, 0) 很像。

注：由于 nextTick() 向当前栈添加任务的这种特性，在递归调用方式使用它，可能导致任务死锁。

![Node.js System](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100803.png)

       ┌───────────────────────────┐
    ┌─>│           timers          │
    │  └─────────────┬─────────────┘
    │  ┌─────────────v─────────────┐
    │  │     pending callbacks     │
    │  └─────────────┬─────────────┘
    │  ┌─────────────v─────────────┐
    │  │       idle, prepare       │
    │  └─────────────┬─────────────┘      ┌───────────────┐
    │  ┌─────────────v─────────────┐      │   incoming:   │
    │  │           poll            │<─────┤  connections, │
    │  └─────────────┬─────────────┘      │   data, etc.  │
    │  ┌─────────────v─────────────┐      └───────────────┘
    │  │           check           │
    │  └─────────────┬─────────────┘
    │  ┌─────────────v─────────────┐
    └──┤      close callbacks      │
       └───────────────────────────┘

Phases Overview

- `timers`: this phase executes callbacks scheduled by setTimeout() and setInterval().
- `pending callbacks`: executes I/O callbacks deferred to the next loop iteration.
- `idle`, `prepare`: only used internally. 
- `poll`: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
- `check`: setImmediate() callbacks are invoked here.
- `close` callbacks: some close callbacks, e.g. socket.on('close', ...).


示范：

```
setImmediate(function A() {
  console.log(3);
  setImmediate(function B(){console.log(4);});
  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0)
});

process.nextTick(function A() {
  console.log(1);
  process.nextTick(function B(){console.log(2);});
});

// 1
// 2
// 3
// TIMEOUT FIRED
// 4
```

Node.js 使用 Worker Pool 来执行那些花销大的任务，包括操作系统没有提供非阻塞的 I/O，也包含 CPU 密集型任务。

使用 Worker Pool 的 API：

- I/O-intensive
    - DNS: dns.lookup(), dns.lookupService().
    - File System: All file system APIs except fs.FSWatcher() and those that are explicitly synchronous use libuv's threadpool.
- CPU-intensive
    - Crypto: crypto.pbkdf2(), crypto.scrypt(), crypto.randomBytes(), crypto.randomFill(), crypto.generateKeyPair().
    - Zlib: All zlib APIs except those that are explicitly synchronous use libuv's threadpool.

抽象地说，Event Loop 和 Worker Pool 分别维护挂起事件和挂起任务的队列。

事实上，事件循环实际上并不维护队列，它有一个文件描述符集合，它要求操作系统使用 epoll（Linux）、kqueue（OSX）、event ports（Solaris）或 IOCP（Windows）等机制来监视这些描述符。这些文件描述符对应于网络套接字，和它监视的任何文件。当操作系统说这些文件描述符中的一个已经就绪时，事件循环将其转换为适当的事件，并调用与该事件相关联的回调。

相反，Worker Pool 是一个真正的队列，其条目是要处理的任务。工作进程从此队列中弹出一个任务并对其进行处理，完成后，工作进程为事件循环引发至少一个任务已完成事件。

ReDoS - Regular expression Denial of Service 正则表达式拒绝服务攻击。开发人员使用了正则表达式来对用户输入的数据进行有效性校验, 当编写校验的正则表达式存在缺陷或者不严谨时, 攻击者可以构造特殊的字符串来大量消耗服务器的系统资源，造成服务器的服务中断或停止。

    // REDOS
    if (path.match(/(\/.+)+$/)) {
      console.log('valid path');
    }

还有 Blocking the Event Loop: JSON DOS，尽管 JSON.parse & JSON.stringify 提供了非常便利的功能，但是它们花销也是特别大的 API，复杂度 O(n)，对于 n 特别大的输入绝对是性能杀手。

可以使用 JSON Schema 来加速序列化，在 JSON 序列化时，我们需要识别大量的字段类型，比如对于 string 类型，我们就需要在两边加上 "，对于数组类型，我们需要遍历数组，把每个对象序列化后，用 , 隔开，然后在两边加上 [ 和 ]，诸如此类等等。

但如果已经提前通过 Schema 知道每个字段的类型，那么就不需要遍历、识别字段类型，而可以直接用序列化对应的字段，这就大大减少了计算开销，这就是 fast-json-stringfy 的原理。

根据项目中的跑分，在某些情况下甚至可以比 JSON.stringify 快接近 10 倍！


以下 Node.js 核心模块会需要执行同步并且大开销的 API：

- Encryption
- Compression
- File system
- Child process

以下 synchronous APIs 不应该在服务器上运行：

- Encryption:
    - crypto.randomBytes (synchronous version)
    - crypto.randomFillSync
    - crypto.pbkdf2Sync
    - You should also be careful about providing large input to the encryption and decryption routines.
- Compression:
    - zlib.inflateSync
    - zlib.deflateSync
- File system:
    - Do not use the synchronous file system APIs.
- Child process:
    - child_process.spawnSync
    - child_process.execSync
    - child_process.execFileSync


## Task queues
- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask
- https://github.com/zloirock/core-js/blob/v3.2.1/packages/core-js/modules/web.queue-microtask.js
- https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
- https://html.spec.whatwg.org/multipage/webappapis.html#event-loops
- [译] Deep Dive into Worker Threads in Node.js https://blog.csdn.net/u010862794/article/details/107519722
- [译] NodeJS Event Loop Part 2 - Timers, Immediates, nextTick  https://zhuanlan.zhihu.com/p/87396353
- JavaScript 运行机制详解：再谈 Event Loop http://www.ruanyifeng.com/blog/2014/10/event-loop.html
- JavaScript Event Loop - Jake Archibald https://www.bilibili.com/video/BV1E441197g5
- https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver

Deepal Jayasekara 发布了 NodeJS Event Loop 系列文章，详细解析了事件循环与任务队列：

- Event Loop and the Big Picture
- Timers, Immediates and Next Ticks
- Promises, Next-Ticks, and Immediates
- Handling I/O (This article)
- Event Loop Best Practices
- New changes to timers and microtasks in Node v11
- JavaScript Event Loop vs Node JS Event Loop

Web 程序执行涉及到以下这个过程：

- 主线的同步任务，形成执行栈（execution context stack），注意不是主线程，JavaScript 只有单线程。
- 在主线任务外，还存在多个任务队列（task queue），事件循环需要在每个循环周期中按调度规则去处理这些任务。
- 执行栈中的所有同步任务执行完毕，于是结束异步任务的等待状态，系统开始处理任务队列中的异步任务。

脚本线程运行的事件循环会不断重复上面的步骤。

通过 libuv 事件循环处理的有 4 种任务队列：

- Timers queue —  包含 setTimeout 超时回调和 setInterval 间隔回调
- IO Events Queue — Completed IO events
- Immediates Queue — 包含 setImmediate 回调；
- Close Handlers Queue— Any close event handlers.

Node 又添加了另外两种：

- Next Ticks Queue — 包含 process.nextTick 回调；
- Microtasks Queue — 包含其它微任务，如 Promise 回调；

在 Web 中有个例外的是 RAF - requestAnimationFrame 动画专用的间隔任务，它会保证在循环周期中固定地执行，不像 setTimeout 这类方法，延时不固定。

还有 MutationObserver 是监视 DOM 对象变化的 API：

```js
new MutationObserver(function () {
  console.log('mutate');
}).observe(dom, {
  attributes: true,
});
```

根据浏览器的规范，可以将事件循环的一个周期划分为不同的阶段，但不是每个浏览都实现同样的处理模型：

- Event Input 执行输入事件处理；
- JS Tasks 执行脚本任务处理；
- Begin Frame 执行每帧需要处理的事件，如窗口调整大小，内容滚动；
- RAF 执行动画回调，MutationObserver；
- Layout 执行布局处理；
- Paint 执行内容更新；

不同类型的任务在 Event Loop 循环中执行的差别：

- Timeers 队列在每次循环中不一定所有任务者执行完，可以被打断； 
- RAF 队列在每个 Event Loop 循环中将当前队列中的所有任务处理完，后面添加的任务会在下一轮执行； 
- Microtask 队列只要有任务，Event Loop 当下就会执行完再进入下一轮循环，如果持续在往队列添加任务会导致事件环卡在微任务的执行中；

以下代码，演示了各种任务的执行顺序，按数字编号：

```js
console.log('0 script start');
let id = setInterval(() =>   console.log('3 setInterval'), 0);
setTimeout(() =>{ clearInterval(id); console.log('3 setTimeout')}, 0);
Promise.resolve().then(() => console.log('2 Promise'));
Promise.resolve().then(() => console.log('2 Promise'));
Promise.resolve().then(() => {
                             console.log('2 Promise');
    process.nextTick(() =>   console.log('9 nextTick'));
});
Promise.resolve().then(() => console.log('2 Promise'));
Promise.resolve().then(() => console.log('2 Promise'));

setImmediate(() =>             console.log('4 setImmediate'));
setImmediate(() =>             console.log('4 setImmediate'));

process.nextTick(() =>       console.log('1 nextTick'));
process.nextTick(() =>       console.log('1 nextTick'));
process.nextTick(() =>       console.log('1 nextTick'));
console.log('0 script end');
```

即在同一个循环周期中，执行顺序是：

- 0 sync code
- 1 nextTick
- 2 Promise
- 3 setTimeout/setIntervel
- 4 setImmediate

在原生的 Promises 回调属于 Microtask，会在 next tick queue 之后执行。

Node v11.0.0 中 Timers 和 Microtasks 任务执行顺序有变化：

```js
setTimeout(() => console.log('timeout1'));
setTimeout(() => {
    Promise.resolve().then(() => console.log('promise resolve1'))
    console.log('timeout2')
    Promise.resolve().then(() => console.log('promise resolve2'))
});
setTimeout(() => console.log('timeout3'));
```

以上代码输出，在不同的 Node 版本中输出结果不同：

```sh
# ^Node 11.0
timeout1
timeout2
promise resolve1
promise resolve2
timeout3

# Node 11.0 bellow
timeout1
timeout2
timeout3
promise resolve1
promise resolve2
```

Node v11.0.0 的 `nextTick` 和 `microtasks` 任务会在每个 `timers` 或 `immediates` 任务间穿插，即 timers queue 或 immediates queue 每运行一个任务后，就会暂停执行，以留出 CPU 时间供更高级优先级的 nextTick 或 microtasks 任务使用，这种行为和浏览器是一致的。

但是在 Node v11.0.0 以下的版本中，promise 任务将会被过时 timers 任务抢先执行。



# 🚩 Profile 性能分析
- https://nodejs.org/docs/latest-v14.x/api/perf_hooks.html
- https://nodejs.org/en/docs/guides/simple-profiling/
- https://v8.dev/docs/profile
- https://benchmarking.nodejs.org/
- Node.js性能优化 https://blog.csdn.net/guyue35/article/details/87873438

仅仅是简单的升级 Node.js 版本就可以轻松地获得性能提升，因为几乎任何新版本的 Node.js 都会比老版本性能更好，为什么？

Node.js 每个版本的性能提升主要来自于两个方面：

- V8 的版本更新；
- Node.js 内部代码的更新优化。

例如最新的 V8 7.1 中，就优化了某些情形下闭包的逃逸分析，让 Array 的一些方法得到了性能提升。

Node.js 的内部代码，随着版本的升级，也会有明显的优化。每个提交到 Node.js 的 PR 都会在 review 的时候考虑会不会对当前性能造成衰退，有专门的 benchmarking 团队来监控性能变化。

Node.js 的版本策略：

- Node.js 的版本主要分为 Current 和 LTS；
- Current 就是当前最新的、依然处于开发中的 Node.js 版本；
- LTS 就是稳定的、会长期维护的版本；
- Node.js 每六个月会发布一次大版本升级，大版本会带来一些不兼容的升级；
- 每年四月发布稳定版本，为偶数版本号，社区会从发布当年的十月开始，继续维护 18 + 12 个月（Active LTS + Maintenance LTS）；
- 每年十月发布的版本，版本号为奇数，只有 8 个月的维护期。

举个例子，现在 Node.js Current 的版本是 v15，LTS 版本是 v14。

Node.js 非常适合 IO 密集型的应用，而对于计算密集的业务，很多人都会想到用编写 C++ Addon 的方式来优化性能。但实际上 C++ 扩展并不是灵丹妙药，V8 的性能也没有想象的那么差。

JavaScript 在 V8 上跑得比 C++ 扩展还快，这种情况多半发生在与字符串、正则表达式相关的场景，因为 V8 内部使用的正则表达式引擎是 irregexp，这个正则表达式引擎比 boost 中自带的引擎（boost::regex）要快得多。

还有一处值得注意的就是，Node.js 的 C++ 扩展在进行类型转换的时候，可能会消耗非常多的性能，如果不注意 C++ 代码的细节，性能会很大地下降。

C++ 是否比 JavaScript 更加高效需要具体问题具体分析，某些情况下，C++ 扩展不一定就会比原生 JavaScript 更高效。如果你对自己的 C++ 水平不是那么有信心，其实还是建议用 JavaScript 来实现，因为 V8 的性能比你想象的要好得多。


Node 使用 V8 引擎内置的 profile 性能分析工具，它可以在程序执行期间定期对堆栈进行采样，它将这些示例的结果以及重要的优化事件，如 JIT 编译记录为一系列记号：

    code-creation,LazyCompile,0,0x2d5000a337a0,396,"bp native array.js:1153:16",0x289f644df68,~
    code-creation,LazyCompile,0,0x2d5000a33940,716,"hasOwnProperty native v8natives.js:198:30",0x289f64438d0,~
    code-creation,LazyCompile,0,0x2d5000a33c20,284,"ToName native runtime.js:549:16",0x289f643bb28,~
    code-creation,Stub,2,0x2d5000a33d40,182,"DoubleToIStub"
    code-creation,Stub,2,0x2d5000a33e00,507,"NumberToStringStub"

从 Node.js 4.4.0 后可以直接的使用 profile 工具，而无需从 v8 源代码单独构建。

假设已经部署了 Web 应用程序，用户抱怨请求的延迟很高，我们可以使用内置探查器轻松运行应用程序，并处理报告：

    $ NODE_ENV=production node --prof --log-source-code app.js
    $ node --prof-process isolate-0x5617f50-1283-v8.log 
    $ node --prof-process --preprocess isolate-0x5617f50-1283-v8.log > v8.json

然后，可以使用 Apache Bench 等工具进行负载测试：

    npm install -g loadtest
    npm i autocannon -g

    curl -X GET "http://localhost:3000"
    autocannon -c 100 -d 5 -p 2 http://localhost:3000
    loadtest -n 1000 -c 100 --rps 100 http://localhost:3000
    ab -k -c 20 -n 250 "http://localhost:3000"

输出的堆栈采样数据是零散的记录，需要对 profile 文件进行分析处理：

    $ node --prof-process isolate-0x5617f50-1283-v8.log 
    Statistical profiling result from isolate-0x5617f50-1283-v8.log, (182 ticks, 0 unaccounted, 0 excluded).

     [Shared libraries]:
       ticks  total  nonlib   name
        159   87.4%          /home/jeango/.nvm/versions/node/v15.9.0/bin/node
          2    1.1%          [vdso]
          2    1.1%          /usr/lib/x86_64-linux-gnu/libc-2.31.so

     [JavaScript]:
       ticks  total  nonlib   name

     [C++]:
       ticks  total  nonlib   name
         16    8.8%   84.2%  __write
          1    0.5%    5.3%  std::ostream::sentry::sentry(std::ostream&)
          1    0.5%    5.3%  __lll_lock_wait
          1    0.5%    5.3%  __GI___pthread_mutex_unlock

     [Summary]:
       ticks  total  nonlib   name
          0    0.0%    0.0%  JavaScript
         19   10.4%  100.0%  C++
          0    0.0%    0.0%  GC
        163   89.6%          Shared libraries

     [C++ entry points]:
       ticks    cpp   total   name
          5  100.0%    2.7%  TOTAL

     [Bottom up (heavy) profile]:
      Note: percentage shows a share of a particular caller in the total
      amount of its parent calls.
      Callers occupying less than 1.0% are not shown.

       ticks parent  name
        159   87.4%  /home/jeango/.nvm/versions/node/v15.9.0/bin/node
        150   94.3%    /home/jeango/.nvm/versions/node/v15.9.0/bin/node
        120   80.0%      LazyCompile: ~DiffieHellman node:internal/crypto/diffiehellman:85:23
        120  100.0%        LazyCompile: ~createDiffieHellman node:crypto:151:29
        120  100.0%          Eval: ~<anonymous> /home/jeango/arcblock/my-app/demo.js:1:1
        120  100.0%            LazyCompile: ~Module._compile node:internal/modules/cjs/loader:1045:37
         17   11.3%      LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
         15   88.2%        LazyCompile: ~nativeModuleRequire node:internal/bootstrap/loaders:303:29
          4   26.7%          Eval: ~<anonymous> node:crypto:1:1
          4  100.0%            LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          3   20.0%          Eval: ~<anonymous> node:internal/source_map/source_map_cache:1:1
          3  100.0%            LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          1    6.7%          LazyCompile: ~initializeCJSLoader node:internal/bootstrap/pre_execution:413:29
          1  100.0%            LazyCompile: ~prepareMainThreadExecution node:internal/bootstrap/pre_execution:21:36
          1    6.7%          Eval: ~<anonymous> node:internal/modules/package_json_reader:1:1
          1  100.0%            LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          1    6.7%          Eval: ~<anonymous> node:internal/modules/esm/loader:1:1
          1  100.0%            LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          1    6.7%          Eval: ~<anonymous> node:internal/modules/esm/get_source:1:1
          1  100.0%            LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          1    6.7%          Eval: ~<anonymous> node:internal/crypto/hkdf:1:1
          1  100.0%            LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          1    6.7%          Eval: ~<anonymous> node:internal/crypto/cipher:1:1
          1  100.0%            LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          1    6.7%          Eval: ~<anonymous> node:fs:1:1
          1  100.0%            LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          1    6.7%          Eval: ~<anonymous> node:assert:1:1
          1  100.0%            LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          2   11.8%        LazyCompile: ~compileForPublicLoader node:internal/bootstrap/loaders:219:25
          2  100.0%          LazyCompile: ~loadNativeModule node:internal/modules/cjs/helpers:35:26
          2  100.0%            LazyCompile: ~Module._load node:internal/modules/cjs/loader:747:24
          3    2.0%      LazyCompile: ~internalBinding node:internal/bootstrap/loaders:137:45
          3  100.0%        Eval: ~<anonymous> node:crypto:1:1
          3  100.0%          LazyCompile: ~compileForInternalLoader node:internal/bootstrap/loaders:270:27
          3  100.0%            LazyCompile: ~compileForPublicLoader node:internal/bootstrap/loaders:219:25

         16    8.8%  __write
          5   31.3%    /home/jeango/.nvm/versions/node/v15.9.0/bin/node
          1   20.0%      LazyCompile: ~toString node:buffer:783:46
          1  100.0%        Eval: ~<anonymous> /home/jeango/arcblock/my-app/demo.js:1:1
          1  100.0%          LazyCompile: ~Module._compile node:internal/modules/cjs/loader:1045:37
          1  100.0%            LazyCompile: ~Module._extensions..js node:internal/modules/cjs/loader:1100:37
          1   20.0%      LazyCompile: ~setupWarningHandler node:internal/bootstrap/pre_execution:138:29
          1  100.0%        LazyCompile: ~prepareMainThreadExecution node:internal/bootstrap/pre_execution:21:36
          1  100.0%          Eval: ~<anonymous> node:internal/main/run_main_module:1:1
          1   20.0%      LazyCompile: ~prepareMainThreadExecution node:internal/bootstrap/pre_execution:21:36
          1  100.0%        Eval: ~<anonymous> node:internal/main/run_main_module:1:1
          1   20.0%      LazyCompile: ~isEncoding node:buffer:530:40
          1  100.0%        LazyCompile: ~assertEncoding node:internal/fs/utils:133:24
          1  100.0%          LazyCompile: ~getOptions node:internal/fs/utils:296:20
          1  100.0%            LazyCompile: ~readFileSync node:fs:390:22
          1   20.0%      LazyCompile: ~compileFunction node:vm:311:25
          1  100.0%        LazyCompile: ~wrapSafe node:internal/modules/cjs/loader:1007:18
          1  100.0%          LazyCompile: ~Module._compile node:internal/modules/cjs/loader:1045:37
          1  100.0%            LazyCompile: ~Module._extensions..js node:internal/modules/cjs/loader:1100:37

          2    1.1%  [vdso]
          1   50.0%    /home/jeango/.nvm/versions/node/v15.9.0/bin/node
          1  100.0%      LazyCompile: ~patchProcessObject node:internal/bootstrap/pre_execution:78:28
          1  100.0%        LazyCompile: ~prepareMainThreadExecution node:internal/bootstrap/pre_execution:21:36
          1  100.0%          Eval: ~<anonymous> node:internal/main/run_main_module:1:1

          2    1.1%  /usr/lib/x86_64-linux-gnu/libc-2.31.so

从 [Summary] 可以看到性能报告的总结性数据，根据具体的 Shared libraries、JavaScript、C++ 模块可以知道性能瓶颈出现在哪。

再从 [Bottom up (heavy) profile] 列表中分析具体的 API 占用 CPU 时间来确定问题点，不过有些导致性能问题的 API 可能没有记录，这个需要有处理经验。

每个部分的代码执行所占用的 CPU ticks 时钟周期数，细节列表 [Bottom up (heavy) profile] 中的百分比是占父调用的比例。

上面采样的这些数据表示，89.6% 的 CPU 时间花在 Shared libraries 运行上，共享库中又以 Node 占用 CPU 时间最多 87.4%。

接下来查看列表，看看到底是哪些 API 占用了最多的时间，并找出相应的解决办法。这里显然是 crypto diffiehellman，即加密模块的 DH 算法的 API，因为测试程序使用的是 crypto.createDiffieHellman(512) 进行密钥生成。

文本查看方式不够直观，可以用 Chrome V8 profiling log processor，这是 v8 仓库提供的 UI 界面工具。

可以先 clone v8 仓库下来，再将日志文件转换成 JSON 格式用 v8/tools/profview/index.html 页面打开：

    git clone https://github.com/v8/v8.git
    node --prof --log-source-code app.js
    node --prof-process --preprocess isolate-xxxxxxxxxx-v8.log > v8.json

Node 源代码也包含 v8，可以在 deps 目录下找到。


## Node Clinic & Flame graphs
- Bubbleprof https://clinicjs.org/documentation/bubbleprof/
- https://www.npmjs.com/package/autocannon
- 如何读懂火焰图？ http://www.ruanyifeng.com/blog/2017/09/flame-graph.html
- http://www.brendangregg.com/blog/2014-09-17/node-flame-graphs-on-linux.html
- http://www.brendangregg.com/flamegraphs.html

node-clinic 是 NearForm 开源的一款 Node.js 性能诊断工具，可以非常快速地定位性能问题。

安装使用：

    npm i -g clinic
    npm i -g autocannon

    yarn global add clinic
    yarn global add autocannon

官方示范例子提供 Event Loop、I/O 和 GC 方面性能测试示范：

    git clone git@github.com:nearform/node-clinic-doctor-examples.git
    cd node-clinic-doctor-examples
    npm install

    clinic doctor --autocannon [ / ] -- node slow-event-loop
    clinic doctor --autocannon [ -c 2500 / ] -- node slow-gc
    clinic doctor --autocannon [ / ] -- node slow-io
    clinic doctor --autocannon [ / ] -- node sync-io

    git clone git@github.com:nearform/node-clinic-flame-demo.git
    git clone git@github.com:nearform/node-clinic-bubbleprof-demo.git

    clinic flame --on-port 'autocannon localhost:$PORT' -- node 1-server-with-slow-function.js
    clinic bubbleprof --on-port 'autocannon -c 5 -a 500 localhost:$PORT' -- node 1-server-with-no-index.js


模块提供三大功能，跑分测试，I/O 问题分析，火焰图：

- Clinic.js Doctor - 性能问题诊断
    - Collects metrics by injecting probes
    - Assess health and heuristics
    - Creates recommendations

- Clinic.js Bubbleprof - 代码分析
    - Collects metrics using `async_hooks`
    - Tracks latency between operations
    - Creates bubble graphs

- Clinic.js Flame - 使用火焰图揭示性能瓶颈
    - Collects metrics by CPU sampling
    - Tracks top-of-stack frequency
    - Creates flamegraphs

基本使用流程：

    # 1. benchmark
    clinic doctor -- node server.js

    wrk http://localhost:3000
    autocannon http://localhost:3000

    # Finally shut down your server (Ctrl+C).

    # 2. debug I/O issues, use Clinic.js Bubbleprof
    clinic bubbleprof -- node server.js
    # Then benchmark your server again, just like you did with clinic doctor.

可惜还不支持 cluster 模块。

使用的时候，先开启服务进程 clinic doctor 运行程序，再进行性能测试。

可以用任何压测工具跑一次压测，比如使用同一个作者的 autocannon，它们可以很好地一起工作。当然你也可以使用 ab、curl 这样的工具来进行压测，压测完毕后 Ctrl + c 关闭 clinic 开启的进程，就会自动生成报告。

    clinic doctor --autocannon [ -m POST /api/example ] -- node server.js
    clinic doctor --autocannon [ -m POST 'http://localhost:$PORT/?\$page=1' ] -- node server.js
    clinic doctor --on-port 'autocannon localhost:$PORT' -- node slow-event-loop

    clinic flame --on-port 'autocannon localhost:$PORT' -- node slow-io
    clinic bubbleprof --on-port 'autocannon localhost:$PORT' -- node slow-io

autocannon 部分参数：

    -c/--connections NUM 测试并发的请求数量，默认为 10 个；
    -p/--pipelining NUM 测试用的管道请求数量，默认 1 个；
    -d/--duration SEC 测试总时间，默认 10s；
    -a/--amount NUM 总测试的请求数量，如果设置就忽略时间设置；
    -S/--socketPath 设置 Unix Domain Socket 或 Windows Named Pipe 路径；
    -w/--workers 设置工作线程数；
    --on-port 在侦听端口后开始向 port 发送请求，需要 URL 但可以省略主机部分，默认使用 localhost；
    -m/--method METHOD 执行 HTTP 的请求方法，默认 GET；
    -t/--timeout NUM 超时设置，默认 10s;
    -b/--body BODY 请求数据体，可能需要设置相应标头 -H/--headers；
    -i/--input FILE 发送文件；
    -H/--headers K=V 设置相应标头；


例如，同步 I/O 案例测试 autocannon 报告概要：

    $ clinic doctor --autocannon [ / ] -- node sync-io
    Running 10s test @ http://localhost:3000/
    10 connections

    ┌─────────┬───────┬────────┬────────┬────────┬──────────┬──────────┬────────┐
    │ Stat    │ 2.5%  │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
    ├─────────┼───────┼────────┼────────┼────────┼──────────┼──────────┼────────┤
    │ Latency │ 91 ms │ 100 ms │ 113 ms │ 120 ms │ 99.91 ms │ 10.16 ms │ 163 ms │
    └─────────┴───────┴────────┴────────┴────────┴──────────┴──────────┴────────┘
    ┌───────────┬───────┬───────┬───────┬───────┬─────────┬───────┬─────────┐
    │ Stat      │ 1%    │ 2.5%  │ 50%   │ 97.5% │ Avg     │ Stdev │ Min     │
    ├───────────┼───────┼───────┼───────┼───────┼─────────┼───────┼─────────┤
    │ Req/Sec   │ 93    │ 93    │ 100   │ 100   │ 99.1    │ 2.08  │ 93      │
    ├───────────┼───────┼───────┼───────┼───────┼─────────┼───────┼─────────┤
    │ Bytes/Sec │ 14 kB │ 14 kB │ 15 kB │ 15 kB │ 14.9 kB │ 312 B │ 13.9 kB │
    └───────────┴───────┴───────┴───────┴───────┴─────────┴───────┴─────────┘

    Req/Bytes counts sampled once per second.

    991 requests in 10.04s, 149 kB read
    Analysing data
    Generated HTML file ...

其中主要指标 Req/Sec 即并发数量，Latency 请求响应延时，统计延时数据越低的请求放在前面并显示相应的百分比，将同步文件 API 关闭对比会发现性能绝对是两回事。

再测试 slow-event-loop 可以发现，比 sync-io 的延时要明显，因为 sleep 时间更大，这也是典型的同步计算阻塞了异步队列导致延迟极高：

    $ clinic doctor --autocannon [ / ] -- node slow-event-loop
    Running 10s test @ http://localhost:3000/
    10 connections

    ┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
    │ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
    ├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
    │ Latency │ 252 ms │ 300 ms │ 331 ms │ 332 ms │ 297.54 ms │ 28.01 ms │ 370 ms │
    └─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
    ┌───────────┬─────────┬─────────┬─────────┬────────┬─────────┬───────┬─────────┐
    │ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%  │ Avg     │ Stdev │ Min     │
    ├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
    │ Req/Sec   │ 31      │ 31      │ 33      │ 34     │ 33      │ 0.78  │ 31      │
    ├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
    │ Bytes/Sec │ 4.65 kB │ 4.65 kB │ 4.95 kB │ 5.1 kB │ 4.95 kB │ 117 B │ 4.65 kB │
    └───────────┴─────────┴─────────┴─────────┴────────┴─────────┴───────┴─────────┘

    Req/Bytes counts sampled once per second.

    330 requests in 10.06s, 49.5 kB read
    Analysing data
    Generated HTML file

当然，还有相应的 Web 报告视图，四个数据使用的相同的 x 坐标表示时间轴：

- CPU Usage 多核会出现超过 100% 的数据，如果 I/O 代码有阻塞问题，CPU 占用会更高并且是间断的执行任务，基本失去并发能力。
- Memory Usage
    - `RSS` - Resident Set Size: 进程执行的一部分分配的所有内存最高值，到 THA 的差值表示非堆内存，如代码本身的存储、堆栈包含的变量指针和原始值，以及 Buffer 内存池。
    - `THA` - Total Heap Allocated: 堆内存总分配量，为存储具有引用的项预留的空间，如字符串、对象和闭包等。与存储指向这些项的引用指针的 stack 内存不同，堆内存是分配是预先设置的。
    - `HU` Heap Used: 堆内存使用量，对应时间周期内已分配但未垃圾收集的所有字符串、对象、闭包等总大小。这通常是最有趣的一行，RSS 和 Total Heap 分配了上下文。
- Event Loop Delay 表示 JavaScript 同步代码的执行延时，越低性能越好。水平线表示 Node.js 阻塞中，因此没有收集到任何数据显示在图表上。
- Active Handles 活跃资源句柄数，越大表示占用越多资源。


火焰图要从 perf 命令讲起，它是 performance 的缩写，它是 Linux 系统原生提供的性能分析工具，会返回 CPU 正在执行的函数名以及调用栈（stack）。

通常，它的执行频率是 99Hz，如果 99 次都返回同一个函数名，那就说明 CPU 这一秒钟都在执行同一个函数，可能存在性能问题。火焰图是基于 perf 结果产生的 SVG 图片，用来展示 CPU 的调用栈。

- y 轴表示调用栈，每一层都是一个函数。调用栈越深，火焰就越高，顶部就是正在执行的函数，下方都是它的父函数。
- x 轴表示抽样数，如果一个函数在 x 轴占据的宽度越宽，就表示它被抽到的次数多，即执行的时间长。

火焰图就是看哪个顶层函数占据的宽度最大，只要有"平顶"（plateaus），就表示该函数可能存在性能问题。

结合 sync-io 案例可以看到平顶出现的位置：

- processTimers
- fs.closeSync()
- fs.openSync()

优化是没有尽头的，火焰图也总是显示当前分析数据，指示主要问题可能出现的位置。图案颜色没有特殊含义，火焰图只是用暖色调表示 CPU 的繁忙程度。

使用 clinic flame 可以查看具体的代码与 CPU 时间消耗，火焰图中每个 API 或模块所占的宽度即对应的 CPU 时间，可以很容易定位到哪些位置出现了密集计算。

从火焰图里可以明显看到顶部的那个热度路径中的白条部分，它代表了 sleep 函数空转所消耗的 CPU 时间。根据这样的火焰图，我们可以非常轻松地看出 CPU 资源的消耗情况，从而定位代码中哪里有密集的计算或 I/O 的阻塞，找到性能瓶颈。


下面我们使用 clinic bubbleprof 来检测 I/O 或 GC 时间消耗问题。

气泡图含义：

- 一个气泡表示一组异步操作。
- 一组异步操作中花费的时间越多，气泡就越大。
- 气泡之间的线越长，它们之间存在的延迟就越多。

分析的代码分为 3 个区域：

- userland (the application being profiled),
- dependencies (3rd party modules)
- and node core.

通过联线长度或气泡大小可以定们 CPU 时间的消耗位置，查看相应的位置，会发现调用栈中存在大量的 empty frame，也就是说，由于网络 I/O 的限制，CPU 存在大量的空转：

    0 frames from this async operation
    10,020 ms in asynchronous delays, 11 ms in synchronous delays.
     Empty frames


sync-io 案例代码：

```
'use strict'

const restify = require('restify')
const fs = require('fs')
const path = require('path')
const tmp = path.join(__dirname, 'tmp')
const server = restify.createServer()

server.get('/', function (req, res, next) {
  sleep(10) // mimic sync I/O by sleeping 10ms sync
  res.send({})
  next()
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  try { fs.unlinkSync(tmp) } catch (e) {}
  server.close()
})

function sleep (ms) {
  var now = Date.now()
  while (Date.now() < now + ms) {
    fs.closeSync(fs.openSync(tmp, 'a'))
  }
}
```

slow-event-loop 案例代码：

```
'use strict'

const restify = require('restify')
const server = restify.createServer()

function sleep (ms) {
  const future = Date.now() + ms
  while (Date.now() < future);
}

server.get('/', function (req, res, next) {
  sleep(30)
  res.send({})
  next()
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})
```


slow-io 案例代码：

```
'use strict'

const restify = require('restify')
const server = restify.createServer()
const async = require('async')

function awaitData (callback) {
  async.series([
    (done1) => setTimeout(done1, Math.random() * 1000),
    (done1) => async.parallel([
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000)
    ], done1)
  ], callback)
}

server.get('/', function (req, res, next) {
  awaitData(function () {
    res.send({})
    next()
  })
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})
```

slow-gc 案例代码：

```
'use strict'

const restify = require('restify')
const server = restify.createServer()

function createLargeLinkStructure (tail, item, repeats, callback) {
  setImmediate(function () {
    if (repeats > 0) {
      const next = JSON.parse(item)
      tail.next = next
      createLargeLinkStructure(next, item, repeats - 1, callback)
    } else {
      callback(null, tail)
    }
  })
}

function getLargeData (data, callback) {
  const item = JSON.stringify(data)
  const first = JSON.parse(item)
  createLargeLinkStructure(first, item, 512, function (err, last) {
    if (err) return callback(err)

    // make data circular
    last.next = first
    callback(null, first)
  })
}

function getVersion (bigdata, callback) {
  setTimeout(function () {
    callback(null, bigdata.version)
  }, 1000)
}

function processRequest (data, callback) {
  getLargeData(data, function (err, bigdata) {
    if (err) return callback(err)

    getVersion(bigdata, function (err, version) {
      if (err) return callback(err)

      callback(null, { version })
    })
  })
}

server.get('/', function (req, res, next) {
  processRequest(require('../package.json'), function (err, output) {
    if (err) return next(err)
    res.send(output)
    next()
  })
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})
```


# 🚩 v8 inspector 模块
- https://nodejs.org/docs/latest-v12.x/api/inspector.html
- https://nodejs.org/docs/latest-v12.x/api/v8.html
- https://nodejs.org/docs/latest-v12.x/api/vm.html
- perf 与 FlameGraph 火焰图 https://xiaozhuanlan.com/Nodejs-Guide/9650287413
- 使用 v8-profiler 分析 CPU 的使用情况 https://xiaozhuanlan.com/Nodejs-Guide/8209375641
- Flame Graphs https://nodejs.org/en/docs/guides/diagnostics-flamegraph/
- 服务监控实例，基于Grafana，InfluxDB和Telegraf https://baijiahao.baidu.com/s?id=1638107903038876829
- perf Examples http://www.brendangregg.com/perf.html

the inspector module provides an API for interacting with the V8 inspector.

CPU profiler:

```
const inspector = require('inspector');
const fs = require('fs');
const session = new inspector.Session();
session.connect();

session.post('Profiler.enable', () => {
  session.post('Profiler.start', () => {
    // Invoke business logic under measurement here...

    // some time later...
    session.post('Profiler.stop', (err, { profile }) => {
      // Write profile to disk, upload, etc.
      if (!err) {
        fs.writeFileSync('./profile.cpuprofile', JSON.stringify(profile, null, '  '));
      }
    });
  });
});
```

Heap Profiler:

```
const inspector = require('inspector');
const fs = require('fs');
const session = new inspector.Session();

const fd = fs.openSync('profile.heapsnapshot', 'w');

session.connect();

session.on('HeapProfiler.addHeapSnapshotChunk', (m) => {
  fs.writeSync(fd, m.params.chunk);
});

session.post('HeapProfiler.takeHeapSnapshot', null, (err, r) => {
  console.log('HeapProfiler.takeHeapSnapshot done:', err, r);
  session.disconnect();
  fs.closeSync(fd);
});
```


```
$ node --inspect -p 'inspector.url()'
Debugger listening on ws://127.0.0.1:9229/166e272e-7a30-4d09-97ce-f1c012b43c34
For help see https://nodejs.org/en/docs/inspector
ws://127.0.0.1:9229/166e272e-7a30-4d09-97ce-f1c012b43c34

$ node --inspect=localhost:3000 -p 'inspector.url()'
Debugger listening on ws://localhost:3000/51cf8d0e-3c36-4c59-8efd-54519839e56a
For help see https://nodejs.org/en/docs/inspector
ws://localhost:3000/51cf8d0e-3c36-4c59-8efd-54519839e56a
```

Chrome Devtools 自带 CPU profile 日志分析工具。

打开 Chrome -> 调出控制台 -> 点击右上角三个点的按钮 -> More tools -> Javascript Profiler -> Load，加载生成的 .cpuprofile 文件。

左上角可选三种模式：

- Chart：显示按时间顺序排列的火焰图。
- Heavy (Bottom Up)：按照函数对性能的影响排列，同时你也可以检查函数的调用路径。
- Tree (Top Down)：显示调用结构的总体状况，从调用堆栈的顶端开始。

例如 Tree (Top Down) 模式，按 Total Time 降序排列，可以看到有三列：

- Self Time：函数调用所花的时间，仅包含函数本身的声明，不包含任何子函数
- Total Time：函数调用所花的总时间，包含函数本身的声明及所有子函数
- Function：函数名及路径，可展开查看子函数

时间数据关系： 父函数的 Total Time = 父函数的 Self Time + 所有子函数的 Total Time。


可以用火焰图来展示 cpuprofile 数据，全局安装使用 flamegraph 这个模块：

    $ npm i flamegraph -g
    $ flamegraph -t cpuprofile -f cpuprofile-xxx.cpuprofile -o cpuprofile.svg

用 Chrome 打开 cpuprofile.svg

还有是社区开源的 v8-profiler 和 heapdump 等输出的 CPU & heap-memory 日志的工具。可以提供：

- v8 引擎逆优化或者优化失败的函数标红展示以及优化失败原因展示
- 函数执行时长超过预期标红展示
- 当前项目中可疑的内存泄漏点展示

全局安装使用 v8-analytics，以下命令将所有函数的执行时间大于 200ms 的函数标红显示：

    $ npm i v8-analytics -g
    $ va timeout cpuprofile-xxx.cpuprofile 200



各模块 API 参考：

Inspector 模块

    - inspector.close()
    - inspector.console
    - inspector.open([port[, host[, wait]]])
    - inspector.url()
    - inspector.waitForDebugger()

    - Class: inspector.Session
    - new inspector.Session()
    - Event: 'inspectorNotification'
    - Event: <inspector-protocol-method>;
    - session.connect()
    - session.connectToMainThread()
    - session.disconnect()
    - session.post(method[, params][, callback])

V8 模块

    - v8.cachedDataVersionTag()
    - v8.getHeapSpaceStatistics()
    - v8.getHeapSnapshot()
    - v8.getHeapStatistics()
    - v8.getHeapCodeStatistics()
    - v8.setFlagsFromString(flags)
    - v8.writeHeapSnapshot([filename])
    - Serialization API
    - v8.serialize(value)
    - v8.deserialize(buffer)

    - Class: v8.Serializer
    - new Serializer()
    - serializer.writeHeader()
    - serializer.writeValue(value)
    - serializer.releaseBuffer()
    - serializer.transferArrayBuffer(id, arrayBuffer)
    - serializer.writeUint32(value)
    - serializer.writeUint64(hi, lo)
    - serializer.writeDouble(value)
    - serializer.writeRawBytes(buffer)
    - serializer._writeHostObject(object)
    - serializer._getDataCloneError(message)
    - serializer._getSharedArrayBufferId(sharedArrayBuffer)
    - serializer._setTreatArrayBufferViewsAsHostObjects(flag)

    - Class: v8.Deserializer
    - new Deserializer(buffer)
    - deserializer.readHeader()
    - deserializer.readValue()
    - deserializer.transferArrayBuffer(id, arrayBuffer)
    - deserializer.getWireFormatVersion()
    - deserializer.readUint32()
    - deserializer.readUint64()
    - deserializer.readDouble()
    - deserializer.readRawBytes(length)
    - deserializer._readHostObject()

    - Class: v8.DefaultSerializer

    - Class: v8.DefaultDeserializer

VM (executing JavaScript)

- Class: vm.Script
    - new vm.Script(code[, options])
    - script.createCachedData()
    - script.runInContext(contextifiedObject[, options])
    - script.runInNewContext([contextObject[, options]])
    - script.runInThisContext([options])

- Class: vm.Module
    - module.dependencySpecifiers
    - module.error
    - module.evaluate([options])
    - module.link(linker)
    - module.namespace
    - module.status
    - module.identifier

- Class: vm.SourceTextModule
    - new vm.SourceTextModule(code[, options])
    - sourceTextModule.createCachedData()

- Class: vm.SyntheticModule
    - new vm.SyntheticModule(exportNames, evaluateCallback[, options])
    - syntheticModule.setExport(name, value)
    - vm.compileFunction(code[, params[, options]])
    - vm.createContext([contextObject[, options]])
    - vm.isContext(object)
    - vm.runInContext(code, contextifiedObject[, options])
    - vm.runInNewContext(code[, contextObject[, options]])
    - vm.runInThisContext(code[, options])



# 🚩 Debug 调试
- https://nodejs.org/docs/latest-v14.x/api/debugger.html
- https://nodejs.org/en/docs/guides/debugging-getting-started/
- https://nodejs.org/docs/latest-v14.x/api/tracing.html

[Node.js] 内置了一个进程外调试器，遵循 [V8 Inspector Protocol] 协议的 Inspector 或 Node 内置的客户端都可以进行访问。谷哥开发者调试协议 [V8 Inspector Protocol] 是目前最流行易用的前端调试协议之一，这个工具在不断更新发展中。

在 [Node.js] 6.3+ 中，可以内置了对旧的 V8 Debugger Protocol 协议的支持，通过 `--debug` 选项调用。新版的 Node 已经集成 [V8 Inspector Protocol] 协议则支持，使用 `--inspect` 选项即可调用，可以指定地址端口，默认使用 `127.0.0.1:9229`。旧版本 node 中断方式调试 `--debug-brk` 也被新协议的 `--inspect-brk` 替换。在 VS Code 中新旧两种协议分别称作 inspector 和 legacy，在看到 VS Code 出现相应提示信息时，可以知道它们的对应关系。VS Code 調試配置文件中 protocol 配置可以用來指定使用哪个协议，legacy、inspector、auto，默认是 auto。对于 Launch 方式加載并且沒有在配置项 runtimeExecutable 指定 node.exe 路径的，VS Code 会根据环境变量中指定的 [Node.js] 版本，即 node --version 给出的版本信息来选择协议，[Node.js] 8.0 及以上版本使用新协议。

    node --debug[=port] <file>     开启远进程调试并绑定端口，默认端口 5858 (legacy)
    node --debug-brk[=port] <file> 开启远进程调试并绑定端口，可手动在代码插入断点 debugger; (legacy)
    node debug <file>              开启交互调试命令行，可手动在代码插入断点 debugger; (legacy)
    node debug <URI>               作为调试客户端连接到 URI 指定的进程，如 node debug localhost:5858 (legacy)
    node debug -p <pid>            作为调试客户端连接到 PID 指定的进程 (legacy)

    node --inspect-brk[=[host:]port] 开启 inspector 远程调试并在执行前中断用户脚本，可指定服务器地址及端口
    node --inspect-port=[host:]port  指定 inspector 服务器地址及端口
    node --inspect[=[host:]port]     在指定服务器地址及端口开启 inspector
    node inspect <file>              开启交互调试命令行

安装了最新版本的 Node 就不必安装 node-inspector，这个工具是主要做协议转换，将 Chromium 使用的 Inspector Protocol 协议转换到旧版本 Node 使用的 V8 Debugger Protocol，由于这个旧协议已经不再更新了，[Node.js] 8.x 开始不再提供支持，所以不必再使用这它了。另外 [Node Inspect] 这个是命令行调试客户端工具，已经在新版本 Node 中集成，使用 `node inspect` 这个命令进入交互调试命令行。

在命令行打开 [Node Inspector] 调试器，可以指定被调试的脚本文件，命令行会显示绑定的服务地址，默认为 `127.0.0.1:9229`。然后打开 Chrome 的侦测器面板 `chrome://inspect/#devices`，首次使用需要进行配置，点击率 `Configure...` 按钮，将调试器指定的服务地址录入到 Target discovery 目标探测列表上，确认返回刷新等待刷新远程目标列表 Remote Target，这个列表会将目标按地址分类，点击匹配条目中的 `inspect` 进入 Chrome DevTools 界面开始调试。DevTools 也可以用来修改代码，点击 DevTools 面板的 `Sources` => `Filesystem` => `Add folder to workspace` 将工程目录包含进来并授于读写权限即可以实现边调试边修改代码。

VS Code 调用 [Node.js] 调试器的方法有几种，直接执行的 `Launch Program`，`Launch via npm`、`Attach`、`Attach to Remote Program` 等方式。

比直接执行方式复杂点的是 `Launch via npm`，这种方式结合了 [Node.js] 模块管理工具 NPM 来运行调试。使用 [Node.js] 开发项目时，经常会用到 NPM 来下载安装项目中的依赖模块。项目根目录下会有个配置文件 `package.json` 记录项目信息，它包含了依赖模块 dependencies、项目脚本配置 scripts 等等。那些在开发阶段才被用到的模块则属于开发依赖模块 devDependencies，比如 uglifyjs 这个模块只是在发布前打包时，用来混淆加密脚本增加逆向工程难度的，在项目发布后这些模块就没有作用了。

    {
        "name": "vue-demo",
        "version": "1.0.0",
        "description": "A Vue.js project",
        "author": "jimboyeah <jimboyeah@gmail.com>",
        "private": true,
        "scripts": {
            "debug": "node --nolazy --inspect-brk=9229 demo.js",
            "start": "npm run dev",
            "build": "node build/build.js"
        },
        "dependencies": {
            "vue": "^2.5.2",
            "vue-router": "^3.0.1"
        },
        "devDependencies": {
            "uglifyjs-webpack-plugin": "^1.1.1",
            "vue-loader": "^13.3.0",
            "vue-style-loader": "^3.0.1",
            "vue-template-compiler": "^2.5.2",
            "webpack": "^3.6.0",
        }
    }

VS Code 中的 `Launch via npm` 调试配置就是通过 runtimeExecutable 和 runtimeArgs 这两个参数实现对配置文件中的 debug 脚本的调用，如果需要运行其它脚本条目，只需要修改 runtimeArgs，端口设置 port 也要根据项目提供的调试器绑定的端口设置，执行调试时，相应的脚本命令被执行，[Node.js] 的 Inspector 调试器开始提供调试服务。

    {
        "type": "node",
        "request": "launch",
        "name": "Launch via NPM",
        "runtimeExecutable": "npm",
        "runtimeArgs": [ "run-script", "debug"],
        "port": 9229
    }

这个配置在执行时的等效命令就是:

    npm run-script debug

`Attach` 或 `Attach by Process ID` 方式通过连接本地 [Node.js] Inspector 调试服务器进行调试，需要先执行 [Node.js] 调试器，参考前面介绍的使用方法设置好调试服务器端口。VS Code 与命令行终端结合越来越好，直接在 VS Code 就可以完成各种命令的执行，所以不必另开命令行去调用 [Node.js] 调试服务器。如果需要进行远进程调试，那么就需要将调试服务器绑定指定端口，并且在 VS Code 中使用`Attach to Remote Program` 方式进行调试，注意配置好地址和端口：

    node --debug-brk[=port] <file> - 开启调试并绑定端口，可手动在代码插入断点 debugger; (legacy)
    node debug <file>              - 开启交互调试命令行，可手动在代码插入断点 debugger; (legacy)

在 VS Code 配置 `Attach` 的内容较少，request 设置为 注意端口配置号保持一致就可以了，远程调试除了 IP 地址和端口外，还需要设置本地目录 localRoot 和远程目录 remoteRoot，两者的代码文件是映射关系，调试时 VS Code 用來定位对应的代码文件。注意，[Node.js] 8.x 开始已经不支持旧的 V8 Debugger Protocol 协议，而 VS Code 中的 `Attach to Remote` 需要这个旧的协议，如果提示 legacy 时，说明当前运行的 [Node.js] 版本太新了，请使用 [Node.js] 8.x 以下版本。注意 `Attach by Process ID` 指定的进程 ID 的方式，`${command.PickProcess}` 这个点位符号会自动替换成系统中正在运行调试服务的 [Node.js] 进程的 PID。

    {
        "type": "node",
        "request": "attach",
        "name": "Attach",
        // "protocol": "inspector",
        "port": 5858
    }, {
        "type": "node",
        "request": "attach",
        "name": "Attach by Process ID",
        "processId": "${command.PickProcess}"
    }, {
        "type": "node",
        "request": "attach",
        "name": "Attach to Remote - Node",
        // "address": "localhost",
        "port": 5858,
        "localRoot": "${workspaceFolder}",
        "remoteRoot": "/absolute/path/to/remote/directory"
    }


# 🚩 Errors 错误处理
- https://nodejs.org/docs/latest-v14.x/api/domain.html
- https://nodejs.org/docs/latest-v14.x/api/errors.html
- Domain Module Postmortem https://nodejs.org/en/docs/guides/domain-postmortem/

在 Node.js 环境运行的程序会产生四种错误对象：

- Standard JavaScript errors: `EvalError`, `SyntaxError`, `RangeError`, `ReferenceError`, `TypeError`, `URIError`.
- System errors.
- User-specified errors triggered by application code.
- `AssertionErrors` 通常由 assert 模块检测到逻辑错误时触发。

所有 JavaScript 及 system errors 由 Node.js 继承标准的 JavaScript `Error` 产生，并保证至少提供该基类上可用的属性。

错误处理函数约定 error-first 回调格式，回调函数有两条定义规则：

- 第一个参数保留给一个错误 error 对象，如果有错误发生，错误将通过第一个参数 err 返回。
- 第二个参数为成功响应的数据保留，如果没有错误发生，err 将被设置为 null, 成功的数据将从第二个参数返回。

错误传递按 try…catch 语句块进行，再到对象的 on('error') 事件，直到 process.on('uncaughtException') 事件。

    process.on('uncaughtException', function(err){}) // 监听未捕获的异常
    process.on('unhandledRejection', function(err, promise){}) // 监听 Promise 没有被捕获的失败函数

Domain 模块与域名无关，它只是用来简化异步代码的异常处理，可以捕捉处理 try catch 无法捕捉的异常，新版本中是过时 API。

domain 模块把处理多个不同的 I/O 的操作编为一个组，注册事件和回调到 domain，当发生一个错误事件或抛出一个错误时，domain 对象会收到通知，不会丢失上下文环境，也不导致程序错误立即退出，与 process.on('uncaughtException') 不同。

有个最大的问题，它不能捕获所有的异步异常！也就是说，即使用了 domain，程序依然有因为 uncaughtException crash 的可能。

Domain 模块可分为隐式绑定和显式绑定：

- 隐式绑定: 绑定 domain 上下文中定义的变量；
- 显式绑定: 显式绑定不在 domain 上下文中定义的变量；

```
var eventEmitter = require("events").EventEmitter;
var domain = require("domain");
var eeA = new eventEmitter();

var domain1 = domain.create();
domain1.on("error", function(err){
  console.log("domain1："+err.message);
})

// 显式绑定
domain1.add(eeA);
eeA.on("error", function(err){
  console.log("eeA："+err.message);
})
eeA.emit("error", new Error("由 eeA 处理的错误"));
eeA.removeAllListeners("error");
eeA.emit("error", new Error("由 domain1 处理的错误"));

var domain2 = domain.create();
domain2.on("error", function(err){
  console.log("domain2："+err.message);
})

//隐式绑定
domain2.run(function(){
  var eeB = new eventEmitter();
  eeB.emit("error", new Error("由 domain2 处理的错误"));
})

domain1.remove(eeA);
eeA.emit("error", new Error("System Crash!"));
```

Node 异常的默认处理的顺序是先触发 uncaughtException 事件，若事件没有被监听，则打印堆栈的错误信息，最后调用进程的退出事件。

process uncaughtException 事件发生的条件：

- 当程序发生了异常
- 且异常未被 try...catch 捕获

缺点与问题

- 无法获取异常的上下文。
- 无法给出友好的异常处理。例如，当接口发生 uncaughtException 时，无法获取到上下文中的 response 对象告知调用方。
- 会导致内存泄露。uncaughtException 事件发生后，会丢失当前环境的堆栈，可能导致 Node 不能正常进行内存回收，从而导致内存泄露。


```
process.on('uncaughtException', (error) => {
  console.log('call uncaughtException handle');
});

// 执行一个不存在的异常
nonexistentFunc();
```

可以使用 Cluster 模块，开启多个工作线程。当遇到无法捕获的异常，或在 uncaughtException 捕获到时，为了避免内存泄露，可以结束当前进程。


一般错误信息：

- `EACCES` 没有权限：试图在一个文件权限不允许的文件夹中访问一个文件。
- `EADDRINUSE` 地址已被使用：试图将一个服务器绑定一个已由其它服务占用的本地地址。
- `ECONNREFUSED` 连接被拒绝：目标机器积极拒绝导致的无法连接，这通常是试图连接到非活动主机的结果。
- `ECONNRESET` 连接被对方重置：一个连接被对方强行关闭。这通常是因超时或自动重启导致的远程套接字（socket）丢失的结果。
- `EEXIST` 文件已存在：一个要求目标不存在的文件操作的目标是一个已存在的文件。
- `EISDIR` 是一个目录：一个对文件的操作，但给定的路径是一个目录。
- `EMFILE` 在系统中打开了过多的文件：打开多个文件时已达到系统中文件描述符允许的最大数量，设置数量限制，执行同一进程 shell 命令 ulimit -n 2048。
- `ENOENT` 无此文件或目录：通常是由文件操作引起的，这表明指定的路径组合不存在——在给定的路径上无法找到任何实体（文件或目录）。
- `ENOTDIR` 不是一个目录：给定的路径组合存在，但不是所期望的目录。通常是由 fs.readdir 引起的。
- `ENOTEMPTY` 目录非空：一个需要空目录操作的目标目录是一个实体。通常是由 fs.unlink 引起的。
- `EPERM` 操作不被允许：试图执行需要提升权限的操作。
- `EPIPE` 管道损坏：没有进程读取数据时写入 pipe、socket 或 FIFO，表明在远端的流（stream）准备写入前被关闭。
- `ETIMEDOUT` 操作超时：由于连接方在一段时间后并没有做出合适的响应导致的连接或发送的请求失败。


Errors 模块部分 API 

- Class: Error
    - new Error(message)
    - Error.captureStackTrace(targetObject[, constructorOpt])
    - Error.stackTraceLimit
    - error.code
    - error.message
    - error.stack

- Class: AssertionError

- Class: RangeError

- Class: ReferenceError

- Class: SyntaxError

- Class: SystemError
    - error.address
    - error.code
    - error.dest
    - error.errno
    - error.info
    - error.message
    - error.path
    - error.port
    - error.syscall

- Class: TypeError
    - error.opensslErrorStack
    - error.function
    - error.library
    - error.reason


# 🚩 Addons 插件开发
- https://github.com/nodejs/node
- https://nodejs.org/api/n-api.html
- https://nodejs.org/docs/latest-v12.x/api/embedding.html
- https://v8.dev/docs/embed
- https://v8docs.nodesource.com
- https://github.com/nodejs/nan
- https://github.com/nodejs/node-addon-api#api-documentation
- https://github.com/nodejs/node-gyp
- https://www.npmjs.com/package/node-gyp
- Node.js C/C++插件 https://itbilu.com/nodejs/core/4y4-Nrd5G.html
- Node.js Addon Examples https://github.com/nodejs/node-addon-examples
- Node.js Sqlite3 Addon https://github.com/mapbox/node-sqlite3
- NAN - Native Abstractions for Node.js https://nodei.co/npm/nan/
- node-gyp - Node.js native addon build tool https://www.npmjs.com/package/node-gyp
- [Node Add-on Documentation](https://nodejs.org/api/addons.html)
- Node Add-on Documentation [CN] http://nodejs.cn/api/addons.html
- Node Addion Example https://github.com/nodejs/node-addon-examples

Node.js 是跨平台开源软件，基于 Google v8 JavaScript 引擎动力，将脚本代码脱离浏览器环境运行，使用 NPM 模块依赖管理大大方便了开发，使得 Node.js 广泛流行于前后端应用开发。

Node.js 使用开放模块管理，由 OpenJS Foundation 项目提供支持。

可以方便地通过 C++ Addons 对其缺失的功能进行扩展开发，Node.js 提供三种插件模块开发方式：

- NAN - Native Abstractions for Node.js 是一套方便用于开发插件的工具，包含一套 API，和相关的头文件，宏定义等等。
- N-API - 用于原生插件开发，与 v8 JavaScript 引擎运行时无关，提供最好的兼容性，API 在多个版本中通过。
- C++ API - 直接使用内部的 V8, libuv 各 Node.js 库文件实现，这是相对难的方式，需要理解多个 C++ 模块，可以访问未在 N-API 暴露的功能。


应用二进制接口 ABI - Application Binary Interface 的存在，旨在将插件与底层 JavaScript 引擎隔离开来，并允许为一个 Node.js 主版本号编译的块提供兼容运行环境，而无需重新编译插件。

插件 Addons 是一套 C++ 实现的动态链接库，可以通过 `require()` 函数将插件当作一般的 Node.js 脚本模块一样加载。插件机制提供了一套 JavaScript 与 C/C++ 库交互的程序接口。

如果不使用 N-API 开发插件，那就需要熟悉各个基础类库：

- V8: Google 提供的 C++ library，Node.js 用来提供 JavaScript 运行环境，V8 提供了创建对象的机制、函数调用等等。在 Node.js 源代码中可以找到 v8.h 头文件，它包含了大多数定义。

- libuv: 采用 C 语言实现的异步事件驱动的网络库，用来实现 Node.js event loop。作为一个跨平台的抽象库，允许跨所有主要操作系统轻松地访问常见的 POSIX 系统任务，如与文件系统、套接字、计时器和系统事件进行交互。还为需要超越标准事件循环的更复杂的异步插件提供了类似于 POSIX 线程的线程抽象。插件作者应该避免使用 I/O 或其他时间密集型任务阻塞事件循环，应该通过 libuv 将工作卸载到非阻塞系统操作、工作线程或自定义使用 libuv 线程。

- 内部库，Node.js 导出的 C++ APIs 供插件使用，其中最紧要的类对象是 node::ObjectWrap。

- Node.js 还包含其它静态链接库，如 OpenSSL，可以在 `deps/` 目录找到。只有 libuv, OpenSSL, V8 和 zlib 符号才导出供插件使用。


使用 N-API 开发插件与使用 C++ Addons 相同的开发打包流程，使用相同的工具，差别是使用 N-API 函数，而不是使用 V8 或者 NAN API。

N-API 暴露的函数一般用于创建和管理 JavaScript 对象，概念通常与 ECMA-262 语言规范保持一致，具有以下特点：

- 所有 N-API 调用返回状态码 napi_status 指明调用是否成功，额外信息通过 `napi_get_last_error_info` 获取；
- API 返回值通过一个 out parameter 传递；
- 所有 JavaScript 值抽象为 napi_value；

N-API 是一套 C API，它确保 ABI 接口在各个 Node.js 版本中不同的编译级别的稳定，C++ API 很容易使用这套函数。为了支持 C++，项目提供了 C++ 包装模块 `node-addon-api`，提供可链接的 C++ API。基于它开发的插件二进制文件依赖于 Node.js 导出的 N-API，它是更有效率的插件开发方法。

尽管 N-API 提供 ABI 稳定性保证，但是其它的部分，如 Node.js，供插件调用的外部库不会。

特别是以下的 API 都不能在各大版本中保持稳定：

- Node.js C++ APIs

```cpp
#include <node.h>
#include <node_buffer.h>
#include <node_version.h>
#include <node_object_wrap.h>
```

- libuv APIs

```cpp
#include <uv.h>
```

- V8 API

```cpp
#include <v8.h>
```

因此，对于一个插件来说，要在 Node.js 主要版本中保持稳定，就必须通过 N-API 限制自己使用不稳定的 API。

```cpp
#define NAPI_VERSION 6
#include <node_api.h>
```


## Hello Addon

示范 C++ 编写 Hello world 插件实现以下脚本功能：

    module.exports.hello = () => 'world';

首先创建 CPP 源代码：

```
// hello.cc
#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, "world").ToLocalChecked());
}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hello", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo
```

所有 Node.js 插件必须按以下格式导出初始化函数：

    void Initialize(Local<Object> exports);
    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

注意 NODE_MODULE 没有分号，它不是一个函数而是一个宏定义。`module_name` 插件名须要和最终生成的二进制文件匹配，不含 `.node` 扩展名。

插件加载时，由 `node-gyp` 进行绑定，使用 `NODE_GYP_MODULE_NAME` 作为 `NODE_MODULE()` 第一个参数以确保最终生成的二进制文件正确传入。

插件的构建是通过 `node-gyp` 工具进行的，Node.js native addon build tool，这是一个跨平台专用于插件的构建的工具，用它来构建插件能很好解决插件跨平台问题。它由构建 Chromium 的工具 `gyp-next` 复刻而来，并作了扩展以支持 Node.js 原生插件，GYP 即 Generate Your Projects。根据不同系统，需要为它安装好相应的编译工具，如 GCC 编译器、Pythond 脚本解析器。此外，可以使用 node-pre-gyp 这类工具，它可以上传预编译好的插件模块文件。

    npm install -g node-gyp
    npm install --global --production windows-build-tools
    md my_node_addon && cd my_node_addon
    node-gyp configure
    node-gyp configure --msvs_version=2015
    node-gyp build

node-gyp 命令参考：

- **help**  Shows the help dialog
- **build** Invokes make/msbuild.exe and builds the native addon
- **clean** Removes the build directory if it exists
- **configure** Generates project build files for the current platform
- **rebuild**   Runs clean, configure and build all in a row
- **install**   Installs Node.js header files for the given version
- **list**  Lists the currently installed Node.js header versions
- **remove**    Removes the Node.js header files for the given version

选项参考：

- **-j n, --jobs n**    Run make in parallel. The value max will use all available CPU cores
- **--target=v6.2.1**   Node.js version to build for (default is process.version)
- **--silly, --loglevel=silly** Log all progress to console
- **--verbose, --loglevel=verbose** Log most progress to console
- **--silent, --loglevel=silent**   Don't log anything to console
- **debug, --debug**    Make Debug build (default is Release)
- **--release, --no-debug** Make Release build
- **-C $dir, --directory=$dir** Run command in different directory
- **--make=$make**  Override make command (e.g. gmake)
- **--thin=yes**    Enable thin static libraries
- **--arch=$arch**  Set target architecture (e.g. ia32)
- **--tarball=$path**   Get headers from a local tarball
- **--devdir=$path**    SDK download directory (default is OS cache directory)
- **--ensure**  Don't reinstall headers if already present
- **--dist-url=$url**   Download header tarball from custom URL
- **--proxy=$url**  Set HTTP(S) proxy for downloading header tarball
- **--noproxy=$urls**   Set urls to ignore proxies when downloading header tarball
- **--cafile=$cafile**  Override default CA chain (to download tarball)
- **--nodedir=$path**   Set the path to the node source code
- **--python=$path**    Set path to the Python binary
- **--msvs_version=$version**   Set Visual Studio version (Windows only)
- **--solution=$solution**  Set Visual Studio Solution version (Windows only)


配置文件 `binding.gyp` 描述了插件模块，通常与 package.json 同目录，内容类似如下：

```on
{
  "targets": [
    {
      "target_name": "binding",
      "sources": [ "src/binding.cc" ]
    }
  ]
}
```

使用 `node-gyp` 构建成功后，可以通过 Node.js 的 `require()` 函数像一般脚本模块一样加载运行。

如，创建一个 hello.js，文件内容如下：

```
// hello.js
// Cannot use import statement outside a module
// import addon, {hello} from "../my_node_addon/build/Release/addon";
const addon = require("../my_node_addon/build/Release/addon");

console.log(addon, addon.hello);
addon.hello();
```

编译得到的二进制插件文件扩展名是 `.node`，可以看作 .dll 或 .so。`require()` 函数会寻找 .node 扩展名的插件文件，按动态链接库加载。

当加载目录内有相同基础文件名时，如 addon.js 和 addon.node 共存，会发出一个警告，并且优先尝试加载 addon.js 文件。

可以在生成的工程文件中查看 node-gyp 使用的头文件版本 Node.js 12.13.0，可以换一版本再编译：

    node-gyp install --target=v6.2.1
    node-gyp build

如果使用头文件版本大低，加载插件出错提示正在使用的是低版本号 NODE_MODULE_VERSION，而当前需要的是 `#define NAPI_VERSION 6`，NODE_MODULE_VERSION 72，即对应运行的 Node.js v12.13.0：

    node-pre-gyp info This Node instance does not support builds for N-API version 6
    Error: The module '\\?\C:\coding\md-code\sqlitorm\my_node_addon\build\Release\addon.node'
    was compiled against a different Node.js version using
    NODE_MODULE_VERSION 48. This version of Node.js requires
    NODE_MODULE_VERSION 72. Please try re-compiling or re-installing

参考 N-API  版本矩阵：

    |    1    |      2       |      3       |              |
    |---------|--------------|--------------|--------------|
    | v6.x    |              |              | v6.14.2*     |
    | v8.x    | v8.6.0**     | v8.10.0*     | v8.11.2      |
    | v9.x    | v9.0.0*      | v9.3.0*      | v9.11.0*     |
    | ≥ v10.x | all releases | all releases | all releases |

    |   4   |    5     |    6     |    7     |          |
    |-------|----------|----------|----------|----------|
    | v10.x | v10.16.0 | v10.17.0 | v10.20.0 |          |
    | v11.x | v11.8.0  |          |          |          |
    | v12.x | v12.0.0  | v12.11.0 | v12.17.0 | v12.19.0 |
    | v13.x | v13.0.0  | v13.0.0  |          |          |
    | v14.x | v14.0.0  | v14.0.0  | v14.0.0  | v14.12.0 |


# 🚩 Modules 模块规范
- https://nodejs.org/docs/latest-v12.x/api/modules.html
- https://nodejs.org/docs/latest-v12.x/api/globals.html
- JS模块规范：AMD、UMD、CMD、commonJS、ES6 module https://segmentfault.com/a/1190000012419990
- https://www.typescriptlang.org/docs/handbook/2/modules.html
- 《深入浅出理解NodeJS》

JavaScript 的生态系统一直在稳步增长，当各种组件混合使用时，就可能会发现不是所有的组件都能和平共处，为了解决这些问题，各种模块规范就出来了。模块化开发极大促进了 JavaScript 开发的规模、速度和代码质量，通过 Node 开发环境，可以结合 NPM 模块管理工具将传统零散的脚本迁移到模块化开发模式，然后通过模块打包工具，如 Webpack 生产浏览器运行的脚本程序，这种工程化的方法使得 JavaScript 也可以开发高质量的大型软件工程。

Node 作为一门服务端的 javascript，它借鉴了 CommonJS 的规范，形成了一套易用的模块规范。

`Node version 13.2.0 is required to support ES Modules: ${(process.versions.node)}`
Use mjs extension or type:"module" in package.json, to use import/export.
CommonJS is Node default setting, use cjs extension or type:"commonjs" to use require/module.exports.

1. Modules: Packages https://nodejs.org/api/packages.html
2. Modules: node:module API https://nodejs.org/api/module.html
3. Modules: CommonJS modules https://nodejs.org/api/modules.html
4. Modules: ECMAScript modules https://nodejs.org/api/esm.html


注意以下测试 CJS 模块代码通过 exports 导出符号的操作：

```js
// m.js
module.exports = {m: "this is m.js [module.exports]"} // OK
exports.m  = "this is m.js [exports.m]" // OK
exports = {m: "this is m.js [exports]"}  // Error,Unlink

// n.js
let m = require("./m.js"); // CommonJS
console.log( {m} );
```

在脚本模块中，exports 就是引用 module.exports，如果直接将一个对象赋值给 exports，那么就会导致原引用的关系被替换为一个新对象，而不是 module.exports 这个对象，因此导出失败，这种方式不能使用。


以下测试 ESM 模块代码通过 export 关键字导出符号，注意 ESM 模块中导入 Node 内建模块时，需要在模块名前缀 `node:`：

```js
// m.js
export {m: "this is m.js [exports]"} // OK
export default {m: "this is m.js [default]"}  // OK

// n.js
import m from "./m.js"; // ESM
import cp from "node:child_process"; // Builtin modules
console.log( {m, cp} );
```

```js
import https from "node:https";
import zlib from "node:zlib";
import { StringDecoder } from "node:string_decoder";

const url = "https://cdn-g2.ltfc.net/wuyue/assets/hdputils-fc5d45e9.js"
https.get(url, { headers: {"Accept-Encoding":""} }, res =>{
    const decoder = new StringDecoder('utf8');
    // res.on('data', data => console.log((data)));
    var buffer = [];
    res.on('data', data => {
        buffer.push(data);
    });
    res.on('end', res =>{
        zlib.gunzip(Buffer.concat(buffer), (err, buf) => console.log(buf.toString()));
    });
    console.log({statusCode: res.statusCode});
}).on('error', e => console.error(e))
```
https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction

模块规范部分可以分成三部分：

- require 模块引用 => 这是整个模块系统最核心的部分，能够引入其他模块，充分的运用。
- exports 模块定义 => 另一个出彩的地方，可以将自身模块中的内容导出，供其他模块使用。
- 标识(模块标识) => 供别人认清楚模块的东西。

Node 有两个全局模块对所有脚本模块可用，`require` 和 `module`，不用再使用 require 请求自身。
此外，还有全局名句空间的对象或变量，如 process 提供了当前进程的信息。 

每个脚本文件都是一个模块，Node 加载时会使用 module.wrapper 包装它。所以，每个模块文件中都可使用
require, exports, module 这些模块或模块变量，它们由模块的封装函数提供，可以查询 arguments 变量。

模块封装函数 wrapper 就是编译过程中，Node 对获取到的脚本文件代码进行上下文隔离包装，形成一个
闭包空间防止其污染全局作用域：

    (function(exports, require, module, __filename, __dirname){
        // 此处填充模块文件代码，即 js 脚本文件内容
    });

```sh
> node
Welcome to Node.js v14.0.0.
> require('module').wrapper
Proxy [
  [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
  ],
  { set: [Function: set], defineProperty: [Function: defineProperty] }
]
```

通常在脚本中，require 导入的是项目中的 node_modules 下安装的模块，如果要导入 global 模块，
就需要指定全局模块的路径：

```js
const { execSync } = require("child_process");
// get root folder of global node modules
const root = execSync("npm root -g")
  .toString()
  .trim();
// then we require global node modules as
const axios = require(`${root}/axios`);
const uuidv4 = require(`${root}/uuid/v4`);
```

模块引入的步骤：

- 路径分析 => 对模块的路径进行分析，'./circle' 就是路径。(./此类的是相对路径，当然还有绝对路径)
- 文件定位 => 通过分析出来的位置，去进行文件的获取。
- 编译执行 => 只有通过编译过的文件，才能够放入其他模块中进行使用 (之后也会分析如何进行编译的)。

在模块作用域中暴露以下内容：

- `__dirname`
- `__filename`
- `exports`
- `module`
    - module.children
    - module.exports
        - exports shortcut
    - module.filename
    - module.id
    - module.loaded
    - module.parent [deprecated]
    - module.path
    - module.paths
    - module.require(id)
- `require(id)`
    - require.cache
    - require.extensions
    - require.main
    - require.resolve(request[, options])
    - require.resolve.paths(request)

通过这种方法，每个模块文件之间都进行了作用域隔离。接下来，包装之后的代码会通过 VM 原生模块的 runInThisContext() 方法执行，该方法类似 eval()，只是具有明确的上下文，无污染全局。

该方法会返回一个具体的 function 对象。最后，将该当前模块对象的 exports 属性，require() 方法，module 即模块对象自身以及文件定位中得到的完整的文件路径和目录作为参数传递给这个封装函数执行。

执行之后，模块的 exports 属性被返回给了调用方，因此 exports 属性上的任何方法和属性都可以被外部调用到，但是模块中的其他属性或方法则封闭在闭包内不可直接调用。

尽管参数中的 exports 也是直接被返回的属性，直接用 exports 通常会得到失败的结果，它只是 module.exports 的一个引用。如果 Module.exports 已经具备一些属性和方法，那么exports收集来的信息将被忽略。

直接通过 module.exports 来添加属性或方法，忽略 exports 就可以了，按照官方的说明：ignore exports and only use module.exports

一般来说，引用时指定的是一个模块文件，但是目录也可以作为一个模块的概念存在，只要目录存在以下任一个文件，或是模块或是插件：

- ./some-library/index.js
- ./some-library/index.node

另外，`require()` 传入的不是一个相对目录 '/', '../', './'，那么 Node.js 就会从当前模块的根目录中加载引入的模块，并且会自动从 `/node_modules` 目录中找到相应的模块。

如果要从全局目录加载模块，可以设置 `NODE_PATH` 环境变量，默认加载以下全局目录：

- $HOME/.node_modules
- $HOME/.node_libraries
- $PREFIX/lib/node

如果模块存在循环引用，`require()` 调用模块返回时可能尚未完成执行，要等待被引用的模块加载后才完成循环引用的部分。


## AMD 异步模块

AMD - Asynchromous Module Definition 是 RequireJS 在推广过程中对模块定义的规范化产出，AMD是异步加载模块，推崇依赖前置，管理模块之间的依赖性，便于代码的编写和维护。

    // An example AMD module
    define("my_module", ["dependency_1", "dependency_2"], function (dep1, dep2) {
      return {
        name: "My Awesome Module",
        greet: () => {
          alert("Hello, world!");
        },
      };
    });

requireJS 的应用是参照 AMD 规范实现的，适用于浏览器环境，语法：

- 导入 require(['module'], function (ref){ ... });
- 导出 define(function (){return '值');

    define('module1', ['jquery'], ($) => {
      //do something...
    });

代码中依赖被前置，当定义模块 `module1` 时，就会加载依赖 `jquery`

    demo
    // a.js
    define(function (){
    　　return {
    　　　a:'hello world'
    　　}
    });

    // b.js
    require(['./a.js'], function (moduleA){
        console.log(moduleA.a); // hello world
    });


## CMD 公共模块定义

CMD - Common Module Definition 是在 AMD 基础上改进的一种规范，和 AMD 不同在于对依赖模块的执行时机处理不同，CMD 是就近依赖，而 AMD 是前置依赖。

CMD 是 SeaJS 在推广过程中对模块定义的规范化产出，它对于模块的依赖是延迟执行，推崇依赖就近。同时 CMD 也是延自 CommonJS Modules/2.0 规范

- 环境：浏览器环境
- 应用：seajs是参照UMD规范实现的，requireJS的最新的几个版本也是部分参照了UMD规范的实现
- 语法：
    - 导入：define(function(require, exports, module) {});
    - 导出：define(function (){return '值');

Demo

    // a.js
    define(function (require, exports, module){
    　　exports.a = 'hello world';
    });

    // b.js
    define(function (require, exports, module){
        var moduleA = require('./a.js');
        console.log(moduleA.a); // 打印出：hello world
    });


如上代码 b.js 只有当真正执行用到 `moduleA.a` 时才会执行依赖请求。



## CommonJS

CommonJS 是服务端模块的规范，由于 Node.js 被广泛认知。

根据 CommonJS 规范，一个单独的文件就是一个模块。加载模块使用 `require` 方法，该方法读取一个文件并执行，最后返回文件内部的 `module.exports` 对象。

    //file1.js
    moudle.exports = {
      a: 1
    };
     
    //file2.js
    var f1 = require('./file1');
    var v = f1.a + 2;
    module.exports ={
      v: v
    };

CommonJS 加载模块是同步的，所以只有加载完成才能执行后面的操作。像 Node.js 主要用于服务器的编程，加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式，所以 CommonJS 规范比较适用。但如果是浏览器环境，要从服务器加载模块，这是就必须采用异步模式。所以就有了 AMD CMD 解决方案。

## UMD 通用模块定义

UMD - Universal Module Definition 兼容 AMD 和 commonJS 规范的同时，还兼容全局引用的方式，是 AMD 和 CommonJS 的一个糅合。AMD 是浏览器优先，异步加载；CommonJS 是服务器优先，同步加载。


- 环境： 浏览器或服务器环境
- 应用： 无
- 语法： 无导入导出规范，只有如下的一个常规写法：

        (function (root, factory) {
            if (typeof define === 'function' && define.amd) {
                // AMD. Register as an anonymous module.
                define(['b'], factory);
            } else if (typeof module === 'object' && module.exports) {
                // Node. Does not work with strict CommonJS, but
                // only CommonJS-like environments that support module.exports,
                // like Node.
                module.exports = factory(require('b'));
            } else {
                // Browser globals (root is window)
                root.returnExports = factory(root.b);
            }
        }(this, function (b) {
            //use b in some fashion.

            // Just return a value to define the module export.
            // This example returns an object, but the module
            // can return a function as the exported value.
            // 暴露公共方法 这里是真正的函数体
            return {}; 
        }));

既然要通用，怎么办呢？那就先判断是否支持 Node.js 的模块，存在就使用 Node.js；再判断是否支持 AMD 的 define 是否存在，存在则使用 AMD 的方式加载，这就是所谓的 UMD。

例如开发一个基于 React 的组件工具，可以编译打包的时生成包含 React 代码的完全可运行程序，也可以使用 Webpack 打包 UMD 模块，单独编译成 UMD 模块，再在页面中先加载 React 的发布的 UMD模块，后加载组件的 UMD 模块也一样可以正常运行。浏览器加载脚本的流程时同步加载的，页面中先出现的脚本先执行，先引用的脚本文件先加载。


## ES6 module

ES6 module 特点：

- 按需加载（编译时加载）
- import 和 export 命令只能在模块的顶层，不能在代码块之中如 if 语句，import() 语句可以在代码块中实现异步动态按需动态加载

- 环境： 浏览器或服务器环境（以后可能支持）
- 应用： ES6的最新语法支持规范
- 语法： 
    - 导入： import {模块名A，模块名B...} from '模块路径'
    - 导出： export和export default
    - import('模块路径').then()方法

注意： export 只支持对象形式导出，不支持值的导出，export default 命令用于指定模块的默认输出，只支持值导出，但是只能指定一个，本质上它就是输出一个叫做 default 的变量或方法。

错误的写法：

    // 写法一
    export 1;

    // 写法二
    var m = 1;
    export m;

    // 写法三
    if (x === 2) {
      import MyModual from './myModual';
    }


正确的三种写法

    // 写法一
    export var m = 1;

    // 写法二
    var m = 1;
    export {m};

    // 写法三
    var n = 1;
    export {n as m};

    // 写法四
    var n = 1;
    export default n;

    // 写法五
    if (true) {
        import('./myModule.js')
        .then(({export1, export2}) => {
          // ...·
        });
    }

    // 写法六
    Promise.all([
      import('./module1.js'),
      import('./module2.js'),
      import('./module3.js'),
    ])
    .then(([module1, module2, module3]) => {
       ···
    });


## Import 路径别名

打包工具常用的是 Webpack，说一下 publicPath 这个配置参数，如果要做 CDN 引入肯定是要配置这个参数的。

    import Vue form 'vue'

写全的话是就是

    import Vue from '.../nodemouls/vue/list/vue.js';

此时在 webpack.base.conf.js 中进行了定义，内置了一些扩展名选项，意思是省略后面的后缀，由 Webpack 来自动为我们加上。

    extenions:['.js','.vue','.json'], 

如果名字比较长，还可以起个别名。

    alias:{ '@':resolve('src')},

它的意思是在项目中，引入路径的时候使用 @ 代表 src 文件夹，省去了相对目录的操作，这样写比较十分方便。 当我们在模板中写 img 的时候有时也需要翻着找，那么用 @ 代替是便利的，比如在 assets 文件夹中有 logo.png 图片，以往写法和别名写法对比：

    <img src="../../src/assets/logo.png">
    <img src="@/assets/logo.png">



# 🚩 Webpack & UMD 模块打包测试
- 如何用 Webpack 打包 UMD 模块并测试打包结果 https://segmentfault.com/a/1190000018243783
- UMD 模块与 Webpack 打包 Vue 后的构建产物分析 http://www.ptbird.cn/umd-module-webpack-build-vue.html

对于 JavaScript 的模块而言, Webpack 可以用来 build 基于浏览器或服务端的模块包，下面让我们学习如何使用 Webpack 生成 UMD。

首先需要全局安装 Webpack：

    npm install -g webpack

让我们先来创建一个用来返回两数之和的加法模块：

    // add.js
    module.exports = function add(a, b) {
      return a + b;
    };

接下来配置 Webpack，配置项 libraryTarget 指定 umd 模块：

    // webpack.config.js
    module.exports = {
      entry: './add.js',
      output: {
        filename: './dist/add.js',
        // export to AMD, CommonJS, or window
        libraryTarget: 'umd',
        // the name exported to window
        library: 'add'
      }
    };

libraryTarget 对应 Webpack 参数 --output-library-target，它可以有以下几种取值：

- `var` 默认值，表示对一个变量赋值 var Library = xxx
- `this` 设置 this 的 Library 属性 var Library = xxx
- `commonjs` 设置 exports["Library"] = xxx
- `commonjs2` 设置 module.exports = xxx
- `amd` 导出为 AMD 模块
- `umd` 导出为 AMD，CommonJS2，以及全局对象的一个属性

而 library 对应 Webpack 的命令行参数 --output-library 。接下来使用 Webpack 命令根据配置文件来 build 模块：

    $ webpack
    Hash: 87657f97293582af3ac3
    Version: webpack 4.29.3
    Time: 435ms
    Built at: 02/22/2019 9:01:57 AM
       Asset      Size  Chunks             Chunk Names
    ./add.js  1.17 KiB       0  [emitted]  main
    Entrypoint main = ./add.js
    [0] ./add.js 83 bytes {0} [built

也可以传入打包参数来运行命令，比如使用 Webpack 4.x 以 main.js 作为入口，build.js 作为出口进行开发模式打包输出： 

    webpack main.js -o build.js // 注意是 4.x 版本

如果不需要分析产物，可以选择发行打包 production 模式：

    webpack main.js -o build.js --mode development

或不使用配置文件，直接在命令行通过参数进行配置：

    webpack .\add.js -o .\dist\add.js --mode development --output-library-target umd --output-library add

打包后的产物就包含 webpackBootstrap 这个模块依赖管理脚本，接近 100 行代码，这个模块加载器的大概结构如下，eval() 执行的才是模块的代码，：

    (function(modules) { // webpackBootstrap
        // ...
    })({
        // exports ...
        "./app.js": (function(module, __webpack_exports__, __webpack_require__) {
            eval("...");
        }),
        "./main.js": (function(module, __webpack_exports__, __webpack_require__) {
            eval("...");
        }),
    })

这些导出模块 exports 在执行请求加载时，会被调用，然后返回模块设置好的导出对象。

现在你可以来使用 CommonJS, AMD, script tag 这三种不同的方式来测试 UMD 包是否正确了。

在测试之前，需要确定是否安装成功 Nodejs 环境，当你使用 Webpack 打包的程序中包含了调用 window 的内容时，比如操作 DOM 啥的，需要将 commonJS 转换成浏览器可识别的代码。这一步有很多方法，推荐使用 browserify，它的 logo 贼好看，让我有种在写咒语的感觉。而且也很好用，你只要在 terminal 下输入 browserify 想要转换的文件 > 生成文件，就可以生成可以在浏览器环境下使用的 js 啦。

如果不想详细测试，也不想装 browserify，还有一种偷懒的办法可以不完整的测试你的代码, 在 nodejs 环境下定义 `global.window = {};` 代码应该也可以运行。

    $ node

    > var add = require('./dist/add');
    > add(1, 2);

AMD 模块需要一个 requirejs 模块，我这里采用的是在 CDN 上引用，你也可以把它下载下来，自己引入试一下。需要注意的是，如果自己引用的话，需要注意文件路径。

下载链接在这里 https://requirejs.org/docs/download.html
AMD (中文版) https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88

    <!-- amd.html -->
    <html>
    <body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require.min.js"></script>
      <script>
        window.requirejs(['dist/add'], function(add) {
          console.log(add(1, 2));
        });
      </script>
    </body>
    </html>

这个就是最简单的全局暴露，没啥好说的。

    <!-- script-tag.html -->
    <html>
    <body>
      <script src="./dist/add.js"></script>
      <script>
        console.log(window.add(1, 2));
      </script>
    </body>
    </html>


模块 entry 脚本：

    function Ukulele(){
        //balabala
    }
    export {Ukulele}

配置 webpack-config.js 如下：

    var webpack = require('webpack');
    var path = require('path');

    var config = {
        entry: __dirname + '/src/ukulele/core/Ukulele.js',
        devtool: 'source-map',
        output: {
            path: __dirname + '/dist',
            filename: 'ukulele.js',
            library: "Ukulele",
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /(node_modules|bower_components|test)/,
                    query: {
                        presets: ['es2015']
                    }
                 },
            ]
        },
        resolve: {
            root: path.resolve('./src'),
            extensions: ['', '.js']
        }
    }
    module.exports = config;

在这个实例中，注意导出的是对象 `export {Ukulele}` 那么调用模块方法是就要使用 library 指定的模块名来引用这个导出的对象。

    <script src="ukulele.js"></script>
    <script>
        Ukulele.Ukulele()
    </script>

在浏览器中使用时，导出的对象会被挂载到全局空间，所以 Ukulele 所引用的对象就能在全局空间上寻找到。


## Webpack Externals 配置
Webpack externals 深入理解 https://segmentfault.com/a/1190000012113011
Webpack Externals https://www.webpackjs.com/configuration/externals/
Webpack Externals https://webpack.js.org/configuration/externals/

为了导出 UMD 模块，需要配置 Webpack 的 externals 参数。按照官方文档的解释，如果我们想引用一个库，但是又不想让 webpack 打包，并且又不影响我们在程序中以 CMD、AMD 或者 window/global 全局等方式进行使用，那就可以通过配置 externals。这个功能主要是用在创建一个库的时候用的，但是也可以在我们项目开发中充分使用。externals 的配置有以下几种：Array、 Object、 RegExp、 Function、 String，使用 Array 又可以包含 Object 等配置，即官方文档说明的 Combining syntaxes，例如以下就通过 Array 方式整合了 Object、 Function 等配置方式：

    externals: [
        {
            "react": "React",
            "react-dom": "ReactDOM",
            "@alifd/next": "Next"
        },
        function(context, request, callback) {
            // Every module prefixed with "global-" becomes external
            // "global-abc" -> abc
            if(/^global-/.test(request)){
                console.log( request, callback, request.substr(7))
                return callback(null, "var " + request.substr(7));
            }
            callback();
        },
    ],


假设：我们开发了一个自己的库，里面引用了lodash这个包，经过webpack打包的时候，发现如果把这个lodash包打入进去，打包文件就会非常大。那么我们就可以externals的方式引入。也就是说，自己的库本身不打包这个 lodash，需要用户环境提供。

使用lodash

    import _ from 'lodash';

配置externals

    externals: {
      "lodash": {
            commonjs: "lodash",//如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
            commonjs2: "lodash",//同上
            amd: "lodash",//如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
            root: "_"//如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
      }
    }

有一点需要注意的是，假如 lodash 中在浏览器环境中不提供 `_` 的全局变量，那么就没有办法使用。这个 `_` 是不能随便乱写的。如果外部库 lodash 提供的是全局变量 lodash 那就得使用 lodash。

Array 数组内的每一个元素又可以是多种形式，包括 object, reg, function, string 配置形式。 Object 形式一定是key: value 的结构，所以像 string 形式就不可能出现在 object 形式中，这种情况下使用的最多。 reg 就不介绍了，也就是正则匹配的形式。

    externals: [
        // ① object形式
        { 
            jquery: 'jQuery',
            a: false,                 // 不是external，配置错误
            b: true,                  // `module.exports = b`，适用于你所引用的库暴露出的变量和你所使用的库的名称一致的情况，比如moment
            "./c": "c",               // `module.exports = c`
            "./d": "var d",           // `module.exports = ./d` 语法错误
            "./f": "commonjs2 ./a/b", // `module.exports = require("./a/b")`
            "./f": "commonjs ./a/b",  // ...和 commonjs2一样
            "./f": "this ./a/b",      // (function() { module.exports = this["./a/b"]; }())`
        },
        // abc -> require("abc")

        // ② reg形式
        /^[a-z\-0-9]+$/,

        // ③ function形式
        function(context, request, callback) {
            // Every module prefixed with "global-" becomes external
            // "global-abc" -> abc
            if(/^global-/.test(request))
                return callback(null, "var " + request.substr(7));
            callback();
        },
        // ④ string形式
        "./e" // external ( require("./e") )
    ]


externals 支持以下模块上下文(module context)

- global - 外部 library 能够作为全局变量使用。用户可以通过在 script 标签中引入来实现。这是 externals 的默认设置。
- commonjs - 用户(consumer)应用程序可能使用 CommonJS 模块系统，因此外部 library 应该使用 CommonJS 模块系统，并且应该是一个 CommonJS 模块。
- commonjs2 - 类似上面几行，但导出的是 module.exports.default。
- amd - 类似上面几行，但使用 AMD 模块系统。

### 不同环境设置 externals 方式

如果你的代码想运行在Node环境中，那么你需要在 external 中添加前缀 commonjs2 或者 commonjs

    externals:{
      react:'commonjs2 react',
      jquery:'commonjs2 jquery'
    }

如果需要requirejs等符合AMD规范的环境中加载，那就要添加 amd

    externals:{
      react:'amd React',
      jquery:'amd jQuery'
    }

如果要在浏览器中运行，那么不用添加什么前缀，默认设置就是 global。

    externals:{
      react:'React',
      jquery:'jQuery'
    }

也可以这样

    externals:["React","jQuery"]

这种方式配置下，就是配置你所引用你的库暴露出的全局变量。上面两种模式下或者说，如果你想运行代码在浏览器中，你所引用的包，必须暴露出一个全局变量。如果没有，这种方式不适合在浏览器下使用，可以尝试 dll 的方式。

这里你可以看出，不同模式下，value是不一样的。2，3模式下，是要引入去全局变量，1模式是要加载包名。那如果这个包的包名和在浏览器下引入的全局变量一致，上面就可以写成一样了，比如 moment。

### externals 和 libraryTarget 的关系

- libraryTarget 配置如何暴露 library。如果不设置 library 表示不暴露，模块就相当于一个自执行函数
- externals 是决定的是以哪种模式去加载所引入的额外的包
- libraryTarget 决定了 library 运行在哪个环境，哪个环境也就决定了你哪种模式去加载所引入的额外的包。

也就是说，externals 应该和 libraryTarget 保持一致。library 运行在浏览器中的，你设置 externals 的模式为 commonjs，那代码肯定就运行不了了。如果是应用程序开发，一般是运行在浏览器环境 libraryTarget 可以不设置，externals 默认的模式是 global，也就是以全局变量的模式加载所引入外部的库。







# 🚩 OS 系统模块
- https://nodejs.org/docs/latest-v12.x/api/os.html
- https://nodejs.org/docs/latest-v14.x/api/os.html

此模块提供当前程序运行系统的信息，以及各种信号、错误的常量定义。

当前系统平台类型 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'，可以从 platform() 方法获取。

os.cpus() 返回系统的 CPU 及各个内核信息，数组对象，包含的成员：

    model <string>
    speed <number> (in MHz)
    times <Object>
    user <number> The number of milliseconds the CPU has spent in user mode.
    nice <number> The number of milliseconds the CPU has spent in nice mode.
    sys <number> The number of milliseconds the CPU has spent in sys mode.
    idle <number> The number of milliseconds the CPU has spent in idle mode.
    irq <number> The number of milliseconds the CPU has spent in irq mode.

使用 top 命令可以看到 CPU 统计信息：

    top - 02:22:40 up  9:48,  0 users,  load average: 0.52, 0.58, 0.59
    Tasks:  14 total,   1 running,  13 sleeping,   0 stopped,   0 zombie
    %Cpu(s):  0.2 us,  0.2 sy,  0.0 ni, 99.5 id,  0.0 wa,  0.1 hi,  0.0 si,  0.0 st
    MiB Mem :  16305.4 total,   6723.3 free,   9358.1 used,    224.0 buff/cache
    MiB Swap:  49152.0 total,  49005.2 free,    146.8 used.   6816.7 avail Mem 

      PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
        1 root      20   0    8936    268    224 S   0.0   0.0   0:00.17 init
      689 root      20   0    8952    228    180 S   0.0   0.0   0:00.01 init
      690 jeango    20   0   10656    632    604 S   0.0   0.0   0:00.01 sh
      691 jeango    20   0   10656    692    660 S   0.0   0.0   0:00.01 sh
      695 jeango    20   0   10656    664    632 S   0.0   0.0   0:00.01 sh
      697 jeango    20   0  986036  45468  19888 S   0.0   0.3   0:05.96 node
      721 jeango    20   0  898420  34248  13304 S   0.0   0.2   0:04.57 node
     1022 jeango    20   0 1168924  83996  44120 S   0.0   0.5   0:10.59 node
     1035 jeango    20   0   20572   6124   6024 S   0.0   0.0   0:00.33 bash
     1181 jeango    20   0  656720  99744  15716 S   0.0   0.6   0:04.34 node

各个值的意思是：

| 缩写 |        含义        |                          说明                         |
|------|--------------------|-------------------------------------------------------|
| `us` | user cpu time      | CPU time spent in user space                          |
| `sy` | system cpu time    | CPU time spent in kernel space                        |
| `ni` | user nice cpu time | CPU time spent on low priority processes              |
| `id` | idle cpu time      | CPU time spent idle                                   |
| `wa` | io wait cpu time   | CPU time spent in wait (on disk)                      |
| `hi` | hardware irq       | CPU time spent servicing/handling hardware interrupts |
| `si` | software irq       | CPU time spent servicing/handling software interrupts |
| `st` | steal time         | 即 CPU 偷取时间                                       |


CPU 时间片，比如一秒内有 100 个 CPU 时间片，时间片就是 CPU 工作的最小单位。时间片在不同的区域和目的进行操作使用，就代表这个区域所占用的 CPU 时间比，也就是这里得出的 CPU 时间百分比。

CPU 偷取时间，是专门对虚拟机来说的，一台物理是可以虚拟化出几台虚拟机的。在其中一台虚拟机上用 top 查看发现 st 不为 0，就说明本来有这么多个 CPU 时间是安排给我这个虚拟机的，但是由于某种虚拟技术，把这个 CPU 时间分配给其他的虚拟机，这就叫做偷取。

Steal time is the percentage of time a virtual CPU waits for a real CPU while the hypervisor is servicing another virtual processor.

如果程序都没什么问题，那么是没有 hi 和 si 时间的，但是实际上有个硬中断和软中断的概念。比如硬中断， CPU 在执行程序的时候，突然外设硬件（比如硬盘出现问题了）机器需要立刻通知 CPU 进行现场保存工作。这个时候会 CPU 会出现上下文切换，就是 CPU 会有一部分时间会被硬中断占用了，这个时间就是 hi。相类似，si 是软中断的 CPU 占用时间，软中断是由软件的指令方式触发的。

nice 是什么呢，每个 Linux 进程都有个优先级，优先级高的进程有优先执行的权利，这个叫做 PR。进程除了优先级外，还有个优先级的修正值。即比如你原先的优先级是 20，然后修正值为 -2，这个修正值对应的时间就叫做进程的 nice cpu time。


OS API 参考：

- os.EOL
- os.arch()
- os.constants
- os.cpus()
- os.endianness()
- os.freemem()
- os.getPriority([pid])
- os.homedir()
- os.hostname()
- os.loadavg()
- os.networkInterfaces()
- os.platform()
- os.release()
- os.setPriority([pid, ]priority)
- os.tmpdir()
- os.totalmem()
- os.type()
- os.uptime()
- os.userInfo([options])
- os.version()


信号常量 os.constants.signals 有进程对应的事件处理，如：

    process.on('SIGINT', handle);
    process.on('SIGTERM', handle);

Windows 不支持部分信号，如 kill('SIGHUP') 结束进程可能导致 ENOSYS 错误，可以使用 kill('SIGTERM')。


|     Constant    |                               Description                               |
|-----------------|-------------------------------------------------------------------------|
| SIGHUP          | 表示控制终端已经关闭，或父进程退出                                      |
| SIGINT          | 表示用户期望通过 Ctrl+C 结束进程                                        |
| SIGQUIT         | 表示用户期望结束进程，并且执行 core dump.                               |
| SIGILL          | 通知进程尝试在执行错误、未知、恶意、特权指令 malformed, privileged      |
| SIGTRAP         | Sent to a process when an exception has occurred.                       |
| SIGABRT         | Sent to a process to request that it abort.                             |
| SIGIOT          | Synonym for SIGABRT                                                     |
| SIGBUS          | Sent to a process to notify that it has caused a bus error.             |
| SIGFPE          | 表示进程在执行错误的算术运算                                            |
| SIGKILL         | Sent to a process to terminate it immediately.                          |
| SIGUSR1 SIGUSR2 | Sent to a process to identify user-defined conditions.                  |
| SIGSEGV         | Sent to a process to notify of a segmentation fault.                    |
| SIGPIPE         | 表示进程尝试写一个断开的管道                                            |
| SIGALRM         | Sent to a process when a system timer elapses.                          |
| SIGTERM         | Sent to a process to request termination.                               |
| SIGCHLD         | Sent to a process when a child process terminates.                      |
| SIGSTKFLT       | Sent to a process to indicate a stack fault on a coprocessor.           |
| SIGCONT         | Sent to instruct the operating system to continue a paused process.     |
| SIGSTOP         | Sent to instruct the operating system to halt a process.                |
| SIGTSTP         | Sent to a process to request it to stop.                                |
| SIGBREAK        | Sent to indicate when a user wishes to interrupt a process.             |
| SIGTTIN         | Sent to a process when it reads from the TTY while in the background.   |
| SIGTTOU         | Sent to a process when it writes to the TTY while in the background.    |
| SIGURG          | Sent to a process when a socket has urgent data to read.                |
| SIGXCPU         | Sent to a process when it has exceeded its limit on CPU usage.          |
| SIGXFSZ         | Sent to a process when it grows a file larger than the maximum allowed. |
| SIGVTALRM       | Sent to a process when a virtual timer has elapsed.                     |
| SIGPROF         | Sent to a process when a system timer has elapsed.                      |
| SIGWINCH        | Sent to a process when the controlling terminal has changed its size.   |
| SIGIO           | Sent to a process when I/O is available.                                |
| SIGPOLL         | Synonym for SIGIO                                                       |
| SIGLOST         | Sent to a process when a file lock has been lost.                       |
| SIGPWR          | Sent to a process to notify of a power failure.                         |
| SIGINFO         | Synonym for SIGPWR                                                      |
| SIGSYS          | Sent to a process to notify of a bad argument.                          |
| SIGUNUSED       | Synonym for SIGSYS                                                      |

Error 常量由 os.constants.errno 导出，POSIX 和 Windows 平台下的错误常量参考文档。

POSIX error constants

|     Constant    |                        Description                        |
|-----------------|-----------------------------------------------------------|
| E2BIG           | 参数列表超出期望长度                                      |
| EACCES          | 操作权限不足                                              |
| EADDRINUSE      | 网络地址已经被使用                                        |
| EADDRNOTAVAIL   | 网络地址当前使用无效                                      |
| EAFNOSUPPORT    | 不支持的 network address family                           |
| EAGAIN          | 当前没有数据，请稍后再试                                  |
| EALREADY        | socket 已经有挂起的连接                                   |
| EBADF           | Indicates that a file descriptor is not valid.            |
| EBADMSG         | Indicates an invalid data message.                        |
| EBUSY           | Indicates that a device or resource is busy.              |
| ECANCELED       | Indicates that an operation was canceled.                 |
| ECHILD          | Indicates that there are no child processes.              |
| ECONNABORTED    | Indicates that the network connection has been aborted.   |
| ECONNREFUSED    | Indicates that the network connection has been refused.   |
| ECONNRESET      | Indicates that the network connection has been reset.     |
| EDEADLK         | Indicates that a resource deadlock has been avoided.      |
| EDESTADDRREQ    | Indicates that a destination address is required.         |
| EDOM            | 参数超出函数域                                            |
| EDQUOT          | Indicates that the disk quota has been exceeded.          |
| EEXIST          | Indicates that the file already exists.                   |
| EFAULT          | Indicates an invalid pointer address.                     |
| EFBIG           | Indicates that the file is too large.                     |
| EHOSTUNREACH    | Indicates that the host is unreachable.                   |
| EIDRM           | Indicates that the identifier has been removed.           |
| EILSEQ          | Indicates an illegal byte sequence.                       |
| EINPROGRESS     | Indicates that an operation is already in progress.       |
| EINTR           | Indicates that a function call was interrupted.           |
| EINVAL          | Indicates that an invalid argument was provided.          |
| EIO             | Indicates an otherwise unspecified I/O error.             |
| EISCONN         | Indicates that the socket is connected.                   |
| EISDIR          | Indicates that the path is a directory.                   |
| ELOOP           | Indicates too many levels of symbolic links in a path.    |
| EMFILE          | Indicates that there are too many open files.             |
| EMLINK          | Indicates that there are too many hard links to a file.   |
| EMSGSIZE        | Indicates that the provided message is too long.          |
| EMULTIHOP       | Indicates that a multihop was attempted.                  |
| ENAMETOOLONG    | Indicates that the filename is too long.                  |
| ENETDOWN        | Indicates that the network is down.                       |
| ENETRESET       | 网络连接已经终止                                          |
| ENETUNREACH     | Indicates that the network is unreachable.                |
| ENFILE          | Indicates too many open files in the system.              |
| ENOBUFS         | Indicates that no buffer space is available.              |
| ENODATA         | stream 读取队列中没有消息                                 |
| ENODEV          | Indicates that there is no such device.                   |
| ENOENT          | Indicates that there is no such file or directory.        |
| ENOEXEC         | Indicates an exec format error.                           |
| ENOLCK          | Indicates that there are no locks available.              |
| ENOLINK         | Indications that a link has been severed.                 |
| ENOMEM          | Indicates that there is not enough space.                 |
| ENOMSG          | Indicates that there is no message of the desired type.   |
| ENOPROTOOPT     | Indicates that a given protocol is not available.         |
| ENOSPC          | Indicates that there is no space available on the device. |
| ENOSR           | Indicates that there are no stream resources available.   |
| ENOSTR          | Indicates that a given resource is not a stream.          |
| ENOSYS          | Indicates that a function has not been implemented.       |
| ENOTCONN        | Indicates that the socket is not connected.               |
| ENOTDIR         | Indicates that the path is not a directory.               |
| ENOTEMPTY       | Indicates that the directory is not empty.                |
| ENOTSOCK        | Indicates that the given item is not a socket.            |
| ENOTSUP         | Indicates that a given operation is not supported.        |
| ENOTTY          | Indicates an inappropriate I/O control operation.         |
| ENXIO           | Indicates no such device or address.                      |
| EOPNOTSUPP      | socket 不支持的操作，Linux 平台中和 ENOTSUP 相同          |
| EOVERFLOW       | 溢出，存储的值超过数据类型最大值                          |
| EPERM           | Indicates that the operation is not permitted.            |
| EPIPE           | Indicates a broken pipe.                                  |
| EPROTO          | Indicates a protocol error.                               |
| EPROTONOSUPPORT | Indicates that a protocol is not supported.               |
| EPROTOTYPE      | Indicates the wrong type of protocol for a socket.        |
| ERANGE          | Indicates that the results are too large.                 |
| EROFS           | Indicates that the file system is read only.              |
| ESPIPE          | Indicates an invalid seek operation.                      |
| ESRCH           | Indicates that there is no such process.                  |
| ESTALE          | Indicates that the file handle is stale.                  |
| ETIME           | Indicates an expired timer.                               |
| ETIMEDOUT       | Indicates that the connection timed out.                  |
| ETXTBSY         | Indicates that a text file is busy.                       |
| EWOULDBLOCK     | Indicates that the operation would block.                 |
| EXDEV           | Indicates an improper link.                               |

Windows-specific error constants#

|        Constant        |                        Description                        |
|------------------------|-----------------------------------------------------------|
| WSAEINTR               | Indicates an interrupted function call.                   |
| WSAEBADF               | Indicates an invalid file handle.                         |
| WSAEACCES              | 权限不足，操作失败                                        |
| WSAEFAULT              | Indicates an invalid pointer address.                     |
| WSAEINVAL              | Indicates that an invalid argument was passed.            |
| WSAEMFILE              | Indicates that there are too many open files.             |
| WSAEWOULDBLOCK         | Indicates that a resource is temporarily unavailable.     |
| WSAEINPROGRESS         | Indicates that an operation is currently in progress.     |
| WSAEALREADY            | Indicates that an operation is already in progress.       |
| WSAENOTSOCK            | Indicates that the resource is not a socket.              |
| WSAEDESTADDRREQ        | Indicates that a destination address is required.         |
| WSAEMSGSIZE            | Indicates that the message size is too long.              |
| WSAEPROTOTYPE          | Indicates the wrong protocol type for the socket.         |
| WSAENOPROTOOPT         | Indicates a bad protocol option.                          |
| WSAEPROTONOSUPPORT     | Indicates that the protocol is not supported.             |
| WSAESOCKTNOSUPPORT     | Indicates that the socket type is not supported.          |
| WSAEOPNOTSUPP          | Indicates that the operation is not supported.            |
| WSAEPFNOSUPPORT        | Indicates that the protocol family is not supported.      |
| WSAEAFNOSUPPORT        | Indicates that the address family is not supported.       |
| WSAEADDRINUSE          | Indicates that the network address is already in use.     |
| WSAEADDRNOTAVAIL       | Indicates that the network address is not available.      |
| WSAENETDOWN            | Indicates that the network is down.                       |
| WSAENETUNREACH         | Indicates that the network is unreachable.                |
| WSAENETRESET           | Indicates that the network connection has been reset.     |
| WSAECONNABORTED        | Indicates that the connection has been aborted.           |
| WSAECONNRESET          | Indicates that the connection has been reset by the peer. |
| WSAENOBUFS             | Indicates that there is no buffer space available.        |
| WSAEISCONN             | Indicates that the socket is already connected.           |
| WSAENOTCONN            | Indicates that the socket is not connected.               |
| WSAESHUTDOWN           | socket 已经关闭不能发送数据。                             |
| WSAETOOMANYREFS        | Indicates that there are too many references.             |
| WSAETIMEDOUT           | Indicates that the connection has timed out.              |
| WSAECONNREFUSED        | Indicates that the connection has been refused.           |
| WSAELOOP               | Indicates that a name cannot be translated.               |
| WSAENAMETOOLONG        | Indicates that a name was too long.                       |
| WSAEHOSTDOWN           | Indicates that a network host is down.                    |
| WSAEHOSTUNREACH        | Indicates that there is no route to a network host.       |
| WSAENOTEMPTY           | Indicates that the directory is not empty.                |
| WSAEPROCLIM            | Indicates that there are too many processes.              |
| WSAEUSERS              | Indicates that the user quota has been exceeded.          |
| WSAEDQUOT              | Indicates that the disk quota has been exceeded.          |
| WSAESTALE              | Indicates a stale file handle reference.                  |
| WSAEREMOTE             | Indicates that the item is remote.                        |
| WSASYSNOTREADY         | Indicates that the network subsystem is not ready.        |
| WSAVERNOTSUPPORTED     | Indicates that the winsock.dll version is out of range.   |
| WSANOTINITIALISED      | WSAStartup 执行失败                                       |
| WSAEDISCON             | Indicates that a graceful shutdown is in progress.        |
| WSAENOMORE             | Indicates that there are no more results.                 |
| WSAECANCELLED          | Indicates that an operation has been canceled.            |
| WSAEINVALIDPROCTABLE   | Indicates that the procedure call table is invalid.       |
| WSAEINVALIDPROVIDER    | Indicates an invalid service provider.                    |
| WSAEPROVIDERFAILEDINIT | 服务供应者初始化失败                                      |
| WSASYSCALLFAILURE      | Indicates a system call failure.                          |
| WSASERVICE_NOT_FOUND   | Indicates that a service was not found.                   |
| WSATYPE_NOT_FOUND      | Indicates that a class type was not found.                |
| WSA_E_NO_MORE          | Indicates that there are no more results.                 |
| WSA_E_CANCELLED        | Indicates that the call was canceled.                     |
| WSAEREFUSED            | Indicates that a database query was refused.              |

dlopen constants

|    Constant   |                              Description                               |
|---------------|------------------------------------------------------------------------|
| RTLD_LAZY     | Perform lazy binding. Node.js sets this flag by default.               |
| RTLD_NOW      | Resolve all undefined symbols in the library before dlopen(3) returns. |
| RTLD_GLOBAL   | 符号全局化，由库定义的符号可用于随后加载的库的符号解析。               |
| RTLD_LOCAL    | 符号本地化，默认的，动态库中定义的符号不能被其后打开的其他库重定位。   |
| RTLD_DEEPBIND | 让自包含的库使用自己的符号定义，而不是使用前面加载的库。               |

RTLD can be Run-time Load definition.

Priority constants

|        Constant       |                           Description                           |
|-----------------------|-----------------------------------------------------------------|
| PRIORITY_LOW          | 值 19，最低优先级，对应 Windows IDLE_PRIORITY_CLASS             |
| PRIORITY_BELOW_NORMAL | 值 10，正常稍低优先级，对应 Windows BELOW_NORMAL_PRIORITY_CLASS |
| PRIORITY_NORMAL       | 值  0，正常优先级，对应 Windows NORMAL_PRIORITY_CLASS           |
| PRIORITY_ABOVE_NORMAL | 值 -7，正常稍高优先级，对应 Windows ABOVE_NORMAL_PRIORITY_CLASS |
| PRIORITY_HIGH         | 值 -14，高优先级，对应 Windows HIGH_PRIORITY_CLASS              |
| PRIORITY_HIGHEST      | 值 -20，最高优先级，对应 Windows REALTIME_PRIORITY_CLASS        |

libuv constants

- UV_UDP_REUSEADDR



# 🚩 Worker Threads 工作线程
- https://nodejs.org/docs/latest-v12.x/api/worker_threads.html
- https://github.com/microsoft/napajs
- https://v8docs.nodesource.com/node-0.8/d5/dda/classv8_1_1_isolate.html
- JavaScript 运行机制详解：再谈 Event Loop http://www.ruanyifeng.com/blog/2014/10/event-loop.html
- [译]Deep Dive into Worker Threads in Node.js https://blog.csdn.net/u010862794/article/details/107519722
- JavaScript 中的 Event Loop - Jake Archibald https://www.bilibili.com/video/BV1E441197g5

首先明确 JavaScript 并没有多线程的特性，所以 Node.js 的 Worker Threads 和其他支持多线程的高级语言在处理上是不一样的。

Node.js 采用事件驱动、异步编程，为网络服务而设计，集成了各种常用的基础模块，如通过 OpenSSL 实现的 Crypto 安全模块。

单线程下的 Node.js 程序运行状态：

- 一个进程
- 一个线程
- 一个事件循环
- 一个 JavaScript 引擎实例
- 一个 Node.js 实例

多工程线程下 Node.js 程序运行状态：

- 一个进程
- 多个工作线程
- 每个线程都拥有独立的事件循环
- 每个线程都拥有一个 JavaScript 引擎实例
- 每个线程都拥有一个 Node.js 实例

理解 Node 的底层对于理解 Workers 是很有必要的。

![Node.js System](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100803.png)

每个 Node.js 程序实例都是一个完整的 Node.js 环境。

每个程序至少包含一个进程 `Proces`，这是系统进行资源分配和调度的基本单位，如内存、文件资源/网络句柄，进程也是程序运行的基本结构。每个运行的程序至少包含一个线程 `Thread`，这是操作系统能够进行运算调度的最小单位。单线程程序意味着在当前进程中同一时刻只有一个指令在执行。

`事件循环` Event Loop 是 Node.js 核心模块，因为整个 Node.js 基于事件驱动。尽管 JavaScript 是单线程的，但通过使用回调，promises, async/await 等语法，基于事件循环将对操作系统的操作异步化，使得 Node 拥有异步非阻塞 IO 的特性。

Node.js 集成 Google v8 引擎运行 JavaScript 脚本，一个引擎实例即可以运行一个 JavaScript 程序。

换言之，Node 运行在单线程上，并且在事件循环中同执行一个进程的任务，同一时刻只会执行一段代码。这是非常有效的，因为这样的机制足够简单，让你在使用 JavaScript 的时候无需担心并发编程的问题。

由于天生的单线程，Node.js 向来都不是实现高 CPU 密集型应用的最佳选择，对此问题，多方都有尝试提供解决方案：

- 使用 `child_process` 模块在一个子进程中运行 CPU 密集型代码；
- 使用 `cluster` 模块在多个进程中运行多个 CPU 密集型操作；
- 使用 Microsoft Napa.js 这样的基于 Node.js Addon 实现的第三方模块；
- Node.js v10.5.0 通过 `worker_threads` 模块引入了实验性的工作线程 Worker 概念，并从 Node.js v12 LTS 起成为一个稳定功能。

在 Worker 工作线程方案之前，Node.js 中有多种方式执行 CPU 密集型应用的方式都没有被广泛接收。可能是受限于性能、额外引入的复杂性、占有率低、薄弱的文档化等等。

尽管 worker_threads 对于 JavaScript 的并发问题来说是一个优雅的解决方案，但是 JavaScript 引擎本身并没有引进多线程语言特性。实际上，worker_threads 是通过运行多个工作线程，父子 workers 通过 Node.js 来通信。每个 worker 有他自己的 V8 实例和 Event Loop，和子进程不同，workers 可以共享内存。

```
const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename, {"workerData": {num: 5}});
  worker.once('message', (result) => {
    console.log('square of 5 is :', result);
  })
} else {
  parentPort.postMessage(workerData.num * workerData.num)
}
```

在上面的例子中，通过 `workerData` 向工作线程传递一个数字，让其来计算其平方值。在完成计算后，将结果发送给 MainThread。

每一个 worker 都通过一个 MessageChannel 来和另外一方通信，`postMessage()` 将信息写入信道的一端，然后传递到通道的另一端口。一个信道有两个 ports，信道的两端就简单的叫做 port1 和 port2，往其中一端写入信息，在另一端就有信息事件来接收信息。

```
const {MessageChannel} = require("worker_threads")
const {port1, port2} = new MessageChannel
port1.on("message", console.log)
port1.postMessage("Hi form 1");
port2.on("message", console.log)
port2.postMessage("Hi form 2");
```

JavaScript 本身并不支持并行，那么两个 workers 是如何并行执行的呢？

答案就是 V8 Isolates 类型，这是一个独立的 Chrome V8 运行实例，其有独立的 Heap 和微任务队列，这为每一个 worker 独立运行提供了保障。其缺陷就是，workers 之间没法直接访问对方的堆，由于这个原因，每个 worker 都有其自己的 Event Loop。

Worker 的实现通过 worker_threads 模块暴露在了 JavaScript 的用户空间，分成两部分内容：

- Worker 初始化脚本 - 设置 workers 之间的信道设置，使得 parent worker 可以将 metadata 传递给 child worker。
- Worker 执行脚本 - 负责使用用户提供的 workerData 和 parent worker 提供的 metadata 来执行用户的脚本。


Worker Threads 有如下特性：

- ArrayBuffers 可以将内存中的变量从一个线程转到另外一个。
- SharedArrayBuffer 可以在多个线程中共享内存中的变量，但是限制为二进制格式的数据。
- 可用的原子操作，可以让你更有效率地同时执行某些操作并且实现竞态变量
- 消息端口，用于多个线程间通信。可以用于多个线程间传输结构化的数据，内存空间
- 消息通道就像多线程间的一个异步的双向通信通道。
- WorkerData 是用于传输启动数据。在多个线程间使用 postMessgae 进行传输的时候，数据会被克隆，并将克隆的数据传输到线程的 contructor 中。

API 参考：

- worker.isMainThread
- worker.markAsUntransferable(object)
- worker.moveMessagePortToContext(port, contextifiedSandbox)
- worker.parentPort
- worker.receiveMessageOnPort(port)
- worker.resourceLimits
- worker.SHARE_ENV
- worker.threadId
- worker.workerData
- Class: MessageChannel
- Class: MessagePort extends <EventEmitter>
    - Event: close()
    - Event: message( value:any )
    - Event: messageerror( err )
    - port.close()
    - port.postMessage(value[, transferList])
    - port.ref()
    - port.start()
    - port.unref()
- Class: Worker extends <EventEmitter>
    - new Worker(filename[, options])
    - Event: error( err )
    - Event: exit( exitCode  )
    - Event: message( value:any )
    - Event: messageerror(err )
    - Event: online( )
    - worker.getHeapSnapshot()
    - worker.postMessage(value[, transferList])
    - worker.ref()
    - worker.resourceLimits
    - worker.stderr
    - worker.stdin
    - worker.stdout
    - worker.terminate()
    - worker.threadId
    - worker.unref()



# 🚩 Atomics 原子操作
- https://tc39.es/ecma262/#sec-atomics-object
- https://nodejs.org/docs/latest-v12.x/api/worker_threads.html
- JavaScript 多线程编程 https://zhuanlan.zhihu.com/p/148492451
- libuv 漫谈之线程 https://zhuanlan.zhihu.com/p/25973650
- Nodejs cluster 模块深入探究 https://segmentfault.com/a/1190000010260600
- https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
- https://github.com/lars-t-hansen/js-lock-and-condition/blob/master/lock.js
- https://github.com/lars-t-hansen/js-lock-and-condition/blob/master/async-lock.js
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics
- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask
- https://github.com/zloirock/core-js/blob/v3.2.1/packages/core-js/modules/web.queue-microtask.js
- Futexes Are Tricky - Ulrich Drepper https://akkadia.org/drepper/futex.pdf
- https://docs.microsoft.com/en-us/windows/win32/sync/synchronization-objects
- https://es6.ruanyifeng.com/#docs/arraybuffer#Atomics-%E5%AF%B9%E8%B1%A1
- Operating Systems Internals an Priciples 9th - CH5 Concurrency: Mutual Exclusion and Synchronization
- Thinking in Java 4th - Concurrency

实现 sleep 功能可以通过 setTimeout() requestAnimationFrame() 或者使用 queueMicrotask() Promise 微任务方式实现，也可以通过循环空转来解决。本质上执行的线程并没有真正的 sleep，事件循环以及 v8 仍在运行，而空转的实现则无疑实在浪费 CPU 性能，有点类似自旋锁，不符合大多数场景。

参考以下代码：

```
setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
    console.log('PromiseTask');
}); 

queueMicrotask(() => {
    console.log('queueMicrotask');
}); 

// queueMicrotask
// PromiseTask
// setTimeout
```

无论顺序如何，setTimeout 任务总是在微任务后面执行。而 Promise 和 queueMicrotask 两者则是谁在前面谁先执行，和 process.nextTick 是类似的。

不同类型的任务在 Event Loop 循环中执行的差别：

- Tasks 消息队列在每个 Event Loop 循环中只执行一个任务，下一个换下一轮执行； 
- Animation Callbacks RAF 队列在每个 Event Loop 循环中将当前队列中的所有任务处理完，后面添加的任务会在下一轮执行； 
- Microtask 队列只要有任务，Event Loop 当下就会执行完再进入下一轮循环，如果持续在往队列添加任务会导致事件环卡在微任务的执行中；

暴露 queueMicrotask API 的目的：

- 提供底层 API 功能支持；
- 更有效率的运行任务，而不是模拟运行，避免资源浪费，比如 Promise 会返回一个实例对象，而直接 queueMicrotask 则不会；
- 更好的语义性，同时帮助开发者理解这些不同异步任务之间的区别；

注意，可能会意外无限制地指派微任务，以致死循环。如果浏览器的微任务队列始终处于非空状态，这将导致控制权始终无法交还给浏览器进行下一次事件循环，然后它就卡死了。

如下面的代码：

    function deadloop(fn) {
        queueMicrotask(() => deadloop(fn))
    }

    deadloop(()=>{})

在 ECMA-262 出现之后开始有了转机，它引入 Atomics 对象，提供 wait() 让脚本引擎陷入等待队列并进入真正的 sleep，直到 notify() 或者超时，该规范特性在 Node 8.10.0+ 实现。

Atomics 对象保证所有共享内存的操作都是原子性的，原子性操作在现代编程语言中表示单条指令的操作，这能够保证线程安全。

事实上，Atomics 的出现主要解决 worker 之间数据同步的问题，web-worker 在 Node 12 正式纳入到 worker-threads 模块，这些都是 ECMAScript 多线程模型的具体实现。多线程必然需要同步机制，而 Atomics.wait() 和 notify() 就是解决方案。

利用 Atomics.wait() 的等待超时机制实现 sleep 方法：

```
let sab = new SharedArrayBuffer(4);
let i32a = new Int32Array(sab);

let sleep = function(seconds){
  // setTimeout(() => {
  //   Atomics.notify(i32a, 0)
  // }, seconds * 1000);
  Atomics.wait(i32a, 0, 0, seconds * 1000);
}

console.log("Sleep 1 seconds.");
sleep(1);
console.log("Done.");
```

注意，wait() 是同步方法，会阻塞执行线程，因此可以测试到 setTimeout 任务并不会被执行，除非用其它线执行 notify()。

示范多线程中使用原子操作：

```
const { exit } = require('process');
let { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
var sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
var int32 = new Int32Array(sab);

let newWorker = ()=>{
  const  worker  =  new Worker(__filename, { workerData: sab });
  worker.on('error', console.error);
  worker.on('message', (data) => {
    console.log('Roger that:', data, int32);
  });
  worker.on('exit', (code) => {
    if (code !==  0)
      console.error(new  Error(`worker exit ${code}`));
  });
}

if (isMainThread) {
  let threads = [1, 2, 3, 4, 5];
  threads.map(newWorker);
  threads.map((val)=>{
    let out = Atomics.wait(int32, 0, val-1);
    console.log("Master", val, int32[0], out); // Not a atomics reading
  });
  console.log("Master done", int32[0]);
} else {
  let buf = workerData;
  let int32 = new Int32Array(buf);
  Atomics.add(int32, 0, 1);
  let value = Atomics.load(int32, 0);
  parentPort.postMessage({msg:"+1", value});
  Atomics.notify(int32, 0, 1);
}
```

worker_threads 工作线程的创建不同于 C/Java，它使用 libuv `uv_thread_create()` 创建线程，之前需要进行 MessagePort、v8 实例设置等，因此创建一个工作线程并不是一个轻量级的操作，需要结合场景酌情使用。

多线程程序通常涉及 thread safty 问题，即并发的多个线程访问一个数据对象时，不考虑这些线程在运行时环境下的调度和交替执行，也不需要进行额外的同步，或者在调用方进行任何其他的协调操作，调用这个对象的行为都可以获得正确的结果，那这个对象是线程安全的。

比如，在多线程运行状态下的银行账户就需要线程安全特性，否则就会对不上账目。

如 A 线程要向账户转入 100，而 B 线程要从账户划走 100，在线程不安全的条件下会出现以下问题：

- A 线程先读取了账户余额 x，而 B 也随后读取余额；
- A 线程执行 x + 100 写入账户；
- B 线程执行 x - 100 写入账户；
- 最后，账户只有 x - 100，差了 100 入账；

而线程安全需要确保读写逻辑在时间上正确，即需要线程同步机制，根据读写场景的不同，可以有多种机制实现。

Windows 平台下的线程同步机制：

- 临界区（Critical Section）
- 互斥量（Mutex）
- 信号量（Semaphore）
- 事件（Event）

临界区通过对多线程串行化来访问公共资源或一段代码，速度快，适合控制数据访问。在任意时刻只允许一个线程对共享资源进行访问，如果有多个线程试图访问公共资源，那么在有一个线程进入后，其他试图访问公共资源的线程将被挂起，并一直等到进入临界区的线程离开，临界区在被释放后，其他线程才可以抢占。

互斥量采用互斥对象机制，拥有互斥对象的线程才有访问公共资源的权限，保证公共资源不会同时被多个线程访问。互斥不仅能实现同一应用程序的公共资源安全共享，还能实现不同应用程序的公共资源安全共享。

信号量允许多个线程在同一时刻访问同一资源，但是需要限制在同一时刻访问此资源的最大线程数目。

事件机制通过通知操作的方式来保持线程的同步，还可以方便实现对多个线程的优先级比较的操作。

互斥量的实现通常称为 Look 对象，而锁的实现需要依赖于全局变量，使用 SharedArrayBuffer 就可以在 workers 之间共享数据。有了共享的内存，还需要解决在 Workers 之间安全共享问题，race onditions，也就是资源竞争的问题。

当然使用 Atomics 进行线程安全操作，但是更合理的目标是的组合 Atomics 开发出像 Golang Synchronization Primitives 一样的 API。参考 Mozzila 工程师 Lars T Hansen 提供的 Mutex 和 Cond 实现。

Mutex 一般提供锁定和解锁功能，可以保证 lock() 和 unlock() 之间的代码代码不会被打断，它可以看作有三个状态的状态机：

- `UNLOCK`: 未锁定，执行 unlock() 并且没有线程等待时转换为未锁定状态；
- `LOCKED`: 被锁定，使用 lock() 转变为锁定状态，并且等待线程数量记录加 1；
- `WAITED`: 被锁定，且大于等于 1 个线程在等待该锁；

Cond 基于 Mutex 实现的，它的大致功能是持有锁的情况下可进行两种操作：

- wait(): 本线程进度进入等待态，并且被唤醒的时候重新持有锁。
- notifyOne(): 唤醒一个正在等待态的线程。

Cond 状态转换：

- `NORMAL`: 非等待态，调用 wait() 转化为 WAITED 状态。
- `WAITED`: 等待态，调用 notifyOne() 唤醒一个处于等待态的线程转换为 NORMAL 状态，并且重新持有锁，然后进行后续操作。


实现一个公平、排它、不可重入锁，需要使用 Atomics.wait/notify/compareExchange 来实现线程同步。

```
function Lock(sab, loc) {
    // _checkParameters(sab, loc, Lock, "Lock constructor");
    this._iab = new Int32Array(sab); // View the whole thing so we can share with Cond
    this._ibase = loc >>> 2;
}

Lock.prototype.lock = function () {
    const iab = this._iab;
    const stateIdx = this._ibase;
    let c;
    if ((c = Atomics.compareExchange(iab, stateIdx, 0, 1)) != 0) {
        do {
            if (c == 2 || Atomics.compareExchange(iab, stateIdx, 1, 2) != 0)
                Atomics.wait(iab, stateIdx, 2);
        } while ((c = Atomics.compareExchange(iab, stateIdx, 0, 2)) != 0);
    }
}

Lock.prototype.tryLock = function () {
    const iab = this._iab;
    const stateIdx = this._ibase;
    return Atomics.compareExchange(iab, stateIdx, 0, 1) == 0;
}

Lock.prototype.unlock = function () {
    const iab = this._iab;
    const stateIdx = this._ibase;
    let v0 = Atomics.sub(iab, stateIdx, 1);
    // Wake up a waiter if there are any
    if (v0 != 1) {
        Atomics.store(iab, stateIdx, 0);
        Atomics.notify(iab, stateIdx, 1);
    }
}
```

compareExchange() 这个原子操作方法保证在修改后的值被写回之前不会发生其他写操作，同时完成指定位置值的比较，只有在指定位置的值与期望值相等的时候才写入新值。

在 lock() 方法中，通过返回值是判断加锁状态：

- 0 未加锁，当前进程可以获得锁，设置状态位为 1 表示加锁；
- 1 已加锁，但没有等待的进程，设置状态位为 2 表示有等待进程，进入等待状态；
- 2 有等待进程，进入等待状态；

在 unlock() 方法中，对状态位值递减，决断状态位原值不为 1 表示有等待进程，执行通知唤醒。注意，只有获取锁的进行不能执行 unlock()，因为未获得锁的进程会进入等待唤醒状态。

以下代码精简实现一个只有双态的锁，并模拟测试多线程安全操作：

```
const { exit } = require('process');
let { Worker, isMainThread, parentPort, workerData, threadId } = require('worker_threads');
var sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 3);
var int32 = new Int32Array(sab);

let newWorker = (id)=>{
  const  worker  =  new Worker(__filename, { workerData: sab });
  worker.on('error', console.error);
  worker.on('message', (data) => {
    console.log(`#${id} Roger that:`, data);
  });
  worker.on('exit', (code) => {
    if (code !==  0)
      console.error(new  Error(`#${id} exit ${code}`));
  });
}

let lock = function (iab, stateIdx) {
  while (Atomics.compareExchange(iab, stateIdx, 0, 1) != 0){
    Atomics.wait(iab, stateIdx, 1);
  }
}

let unlock = function (iab, stateIdx) {
  Atomics.store(iab, stateIdx, 0);
  Atomics.notify(iab, stateIdx, 1);
}

let intLock = 1;
let intDelay = 2;
if (isMainThread) {
  let threads = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];
  threads.map(newWorker);
  console.log("Master done!")
} else {
  let buf = workerData;
    let int32 = new Int32Array(buf);
  lock(int32, intLock)
  let val = int32[0];
  // do somethin to waste time
  Atomics.wait(int32, intDelay, 0, Math.random()*1000)
  int32[0] = val + 1;
    let value = int32[0];
  parentPort.postMessage({msg:"+1", value, threadId});
  unlock(int32, intLock)
}
```

同步锁在主线程使用，超时就会引起浏览器抛出异常，可以设计所谓的`异步锁`，就是将同步锁里面的 Atomics.wait() 操作交给一个新的线程，主线程和这个线程通过事件通信来异步化这里的操作。


Atomics API 参考：

- Atomics.add( typedArray, index, value ) 往指定的 index 位置加一个值；
- Atomics.sub( typedArray, index, value ) 往指定的 index 位置减一个值；
- Atomics.store( typedArray, index, value ) 保存 value 返回新值；
- Atomics.load( typedArray, index ) 读取 index 指定位置的值；
- Atomics.compareExchange( typedArray, index, expectedValue, replacementValue )
- Atomics.exchange( typedArray, index, value) 保存 value 返回旧值；

- Atomics.and( typedArray, index, value ) 对指定的 index 位置进行 and 运算并保存
- Atomics.or( typedArray, index, value ) 对指定的 index 位置进行 or 运算并保存
- Atomics.xor( typedArray, index, value ) 对指定的 index 位置进行 xor 运算并保存

- Atomics.isLockFree( size )
- Atomics.notify( typedArray, index[, count] )
- Atomics.wait( typedArray, index, value[, timeout] )

静态方法 Atomics.isLockFree() 可用于校验指定长度的 TypedArray 是否能够使用原子操作，4 或 8 字节的 TypedArray 都可以。不同类型的 TypedArray 标准字节长度参见其 BYTES_PER_ELEMENT 属性。

静态方法 Atomics.wait() 等待什么值并不重要，重要的是它会让线程进入等待状态。注意，它会验证 index 位置的值是否和等于给定值，如果是则休眠，等待唤醒或超时。

该方法返回字符串：

- 等待值与原值相同返回 "ok"；
- 等待值与原值不同返回 "not-equal"；
- 如果超时退出等待返回 "timed-out"；

Atomics.wait() 第一个参数必须是支持原子操作的数据类型，如 Int32Array 对象，用此对象包装 SharedArrayBuffer 缓冲区。当线程阻塞在 Atomics.wait()，可通过其它线程调用 Atomics.notify() 进行唤醒，从而恢复线程继续执行。

说明一下 compareExchange() 它返回 index 位置的旧值，只有在指定位置的值与期望值相等的时候，才将 replacementValue 替换掉数组上的值。这个原子操作方法保证在修改后的值被写回之前不会发生其他写操作。



# 🚩 cluster 子进程模块
- https://nodejs.org/docs/latest-v14.x/api/cluster.html
- https://nodejs.org/docs/latest-v12.x/api/cluster.html
- IOCP https://zhuanlan.zhihu.com/p/40096515
- I/O Completion Ports https://docs.microsoft.com/en-us/windows/win32/fileio/i-o-completion-ports
- https://www.codeproject.com/Articles/10280/Managed-I-O-Completion-Ports-IOCP
- P(rocess) M(anager) 2 https://pm2.keymetrics.io/docs/usage/quick-start/
- Nodejs cluster 模块深入探究 https://segmentfault.com/a/1190000010260600
- 分布式系统：概念与设计 原书第5版

基于 v8 之上，每个 Node.js 程序都是单线程运行的，要最大化利用多核心 CPU 系统，可以使用线程集群 cluster 模块来处理负载。

利用 cluster 模块，基于 Net 模块封装好的 IPC 通信和调度机，可以非常简单的创建一个 master + worker 模式的 HTTP 服务器集群，子进程是基于  `child_process.fork()` 产生的。

子进程的 schedulingPolicy 方式可以通过环境变量 `NODE_CLUSTER_SCHED_POLICY` 设置，'rr' or 'none' 对应：

- `cluster.SCHED_RR` 默认的 Round-Robin 方式，每个子进程的获取的事件的机会是均等的，除 Windows 外。
- `cluster.SCHED_NONE` 随操作系统；

调度策略是一个全局设置，当第一个工作进程 spawned 或者 cluster.setupMaster() 设置后在第一时间生效。只要 libuv 可以有效地分发 IOCP，而不会导致严重的性能冲击的话，Windows 系统也会更改为 SCHED_RR。

高性能大并发网络服务器必须采用非阻塞模式，IOCP - Input/Output Completion Port 是 Windows 平台非阻塞模式中性能最好的一种。

I/O 完成端口为多处理器系统上处理多个异步 I/O 请求提供了有效的线程模型，当一个进程创建一个 I/O 完成端口时，系统为请求创建一个相关联的队列对象为这些请求提供服务。处理许多并发异步 I/O 请求的进程可以通过将 I/O 完成端口与预先分配的线程池结合使用，而不是在接收 I/O 请求时创建线程，更快、更高效地完成此操作。


以上两种调度方式也决定了集群可以提供两种连接分发方式：

- 第一种方法是循环方法，其中主进程侦听端口，接受新连接，并以 round-robin 算法循环地将它们分发给工作进程，同时使用一些内置的智能来避免工作进程过载。
- 第二种方法是主进程创建侦听套接字并将其发送给感兴趣的 Worker 进行处理。

理论上，第二种方法应该提供最佳性能，然而，在实践中，由于操作系统调度器的变幻莫测，分布往往非常不平衡。据观察，超过 70% 的连接仅在两个进程中结束，总共有八个。

不像 Worker 可以在实例化时通过 `workerData` 向工作线程传递一个共享数据，集群中每一个工作进程都是独立的，并且互相之间除了能够进行通信外，没有办法共享内存。

但父子进程间可以进行 IPC 通信，在 `spawn()` `fork()` 函数可以接收一个 stdio 参数，通过 cluster.settings.stdio 配置。如果使用数组变量，则它必须包含一个值为 ipc 的项，否则将引发错误，例如 [0，1，2，'ipc']。

IPC - Inter-process communication 常用手段有以下方式：

- Pipe
- Nameed Pipe (FIFO)
- 消息队列 MessageQueue
- 共享存储
- 信号量 Semaphore
- 信号 Signal
- 套接字 Socket

在集群中 master 和 worker 通信基于 UNIX Domain Socket IPC，所以可以在 Workers 中使用一个 listern() 方法并且可以共享。

http.server 继承了 net.server，其 Server.prototype.listen() 方法处理了 IPC 的通信功能，在 cluster 模式中根据进程类型表现不同的功能。

主要是 listenInCluster() 方法，对于主进程，它直接创建 socket 监听服务。对于子进程，则执行 child worker getserver() 函数，并向主进程发送 serverQuery 指令，主进程接收到指令后，会实例化 RoundRobinHandle。在这个过程中，主进程服务被创建，端口被监听，子进程被加入到调度度列中。

主进程负责接受客户端请求，并分发客户端请求给某个子进程进行处理。具体分配给哪个子进程处理，是由 round-robbine 进程高度策略来决定。子进程在 server 中设置 socket 的引用，接收到任务后，触发 connection 事件开始执行业务逻辑。

因为涉及底层 libuv，需要结合 C++ 代码一起理解。

以下方法都可以接收 path 参数业创建 IPC endpoints：

- net.connect()
- net.createConnection()
- server.listen() 
- socket.connect() 

主进程处理 server.listen() 大部分工作，与正常的 Node 程序相比，cluster worker 有 3 个差异：

- `server.listen({fd: 7})` 这里是 master 在侦听 file descriptor 7，然后将请求交给 worker，而不是工作进程自己侦听。
- `server.listen(handle)` 通过 worker 提供的 handle 进行通信，而不用与 master 进程联系。
- `server.listen(0)` 正常来说，这会侦听一个随机端口，尽管如此，集群中的 worker 都会共享这个随机端口。当然，可以为每个 worker 分配一单独的端口。

Node.js 没有路由逻辑，worker 之间没有共享状态。所以，程序要设计得简单一些，比如基于内存的 session。

因为 workers 都是独立运行的，根据程序的需要，它们可以被独立删除或者重启，worker 并不相互影响。只要还有 workers 存活，则 master 将继续接受连接。Node 不会自动维护 workers 的数目，需要根据需要管理这些进程池。

注意，不仅需要调用 server.close() 来关闭连接，同时还需要调用 cluster.worker.disconnect() 结束并且通知 master 进程已停止服务，或者调用 cluster.disconnect([callback]) 断开所有 workers 的连接。

cluster 源代码入口只有三行，它根据止境变量选择加载 master or child：

```
'use strict';

const childOrMaster = 'NODE_UNIQUE_ID' in process.env ? 'child' : 'master';
module.exports = require(`internal/cluster/${childOrMaster}`);
```

然后各个子模块进行相应的设置，如 master：

```
cluster.isWorker = false;
cluster.isMaster = true;
cluster.Worker = Worker;
cluster.workers = {};
cluster.settings = {};
cluster.SCHED_NONE = SCHED_NONE;  // Leave it to the operating system.
cluster.SCHED_RR = SCHED_RR;      // Master distributes connections.
```

创建进程的方法代码如下，其中 id 是 cluster 模块内部生成的，环境变量会传递给 `child_process.fork()`：

```
function createWorkerProcess(id, env) {
  const workerEnv = { ...process.env, ...env, NODE_UNIQUE_ID: `${id}` };
  const execArgv = [...cluster.settings.execArgv];
  const debugArgRegex = /--inspect(?:-brk|-port)?|--debug-port/;
  const nodeOptions = process.env.NODE_OPTIONS || '';

  if (execArgv.some((arg) => arg.match(debugArgRegex)) ||
      nodeOptions.match(debugArgRegex)) {
    let inspectPort;
    if ('inspectPort' in cluster.settings) {
      if (typeof cluster.settings.inspectPort === 'function')
        inspectPort = cluster.settings.inspectPort();
      else
        inspectPort = cluster.settings.inspectPort;

      validatePort(inspectPort);
    } else {
      inspectPort = process.debugPort + debugPortOffset;
      if (inspectPort > maxPort)
        inspectPort = inspectPort - maxPort + minPort - 1;
      debugPortOffset++;
    }

    execArgv.push(`--inspect-port=${inspectPort}`);
  }

  return fork(cluster.settings.exec, cluster.settings.args, {
    cwd: cluster.settings.cwd,
    env: workerEnv,
    serialization: cluster.settings.serialization,
    silent: cluster.settings.silent,
    windowsHide: cluster.settings.windowsHide,
    execArgv: execArgv,
    stdio: cluster.settings.stdio,
    gid: cluster.settings.gid,
    uid: cluster.settings.uid
  });
}
```

参考模块默认的 RoundRobin 调度策略实现 `RoundRobinHandle` 的主要方法：

```
const net = require('net');

function RoundRobinHandle(key, address, { port, fd, flags }) {
  this.key = key;
  this.all = new Map();
  this.free = new Map();
  this.handles = [];
  this.handle = null;
  this.server = net.createServer(assert.fail);

  if (fd >= 0)
    this.server.listen({ fd });
  else if (port >= 0) {
    this.server.listen({
      port,
      host: address,
      // Currently, net module only supports `ipv6Only` option in `flags`.
      ipv6Only: Boolean(flags & constants.UV_TCP_IPV6ONLY),
    });
  } else
    this.server.listen(address);  // UNIX socket path.

  this.server.once('listening', () => {
    this.handle = this.server._handle;
    this.handle.onconnection = (err, handle) => this.distribute(err, handle);
    this.server._handle = null;
    this.server = null;
  });
}

RoundRobinHandle.prototype.distribute = function(err, handle) {
  this.handles.push(handle);
  const [ workerEntry ] = this.free;

  if (ArrayIsArray(workerEntry)) {
    const [ workerId, worker ] = workerEntry;
    this.free.delete(workerId);
    this.handoff(worker);
  }
};

RoundRobinHandle.prototype.handoff = function(worker) {
  if (!this.all.has(worker.id)) {
    return;  // Worker is closing (or has closed) the server.
  }

  const handle = this.handles.shift();

  if (handle === undefined) {
    this.free.set(worker.id, worker);  // Add to ready queue again.
    return;
  }

  const message = { act: 'newconn', key: this.key };

  sendHelper(worker.process, message, handle, (reply) => {
    if (reply.accepted)
      handle.close();
    else
      this.distribute(0, handle);  // Worker is shutting down. Send to another.

    this.handoff(worker);
  });
};

// utils.js
function sendHelper(proc, message, handle, cb) {
  if (!proc.connected)
    return false;

  // Mark message as internal. See INTERNAL_PREFIX in lib/child_process.js
  message = { cmd: 'NODE_CLUSTER', ...message, seq };

  if (typeof cb === 'function')
    callbacks.set(seq, cb);

  seq += 1;
  return proc.send(message, handle);
}
```

派发函数 `distribute()` 负责筛选出处理请求的子进程并派发处理任务，this.free 数组存储空闲的子进程，this.handles 存放待处理的用户请求。

任务交接函数 `handoff()` 获取排队中的客户端请求，并通过 IPC 发送句柄 handle 和 newconn 动作消息，等待子进程返回。当子进程返回正在处理请求消息时，在此执行 handoff 函数，继续分配请求给该子进程，不管该子进程上次请求是否处理完成（Node 的异步特性和事件循环可以让单进程处理多请求）。按照这样的策略，主进程每 fork 一个子进程，都会调用 handoff 函数，进入该子进程的处理循环中。一旦主进程没有缓存的客户端请求时（this.handles 为空），便会将当前子进程加入 free 空闲队列，等待主进程的下一步调度。这就是 cluster 模式的 RoundRobin 调度策略，每个子进程的处理逻辑都是一个闭环，直到主进程缓存的客户端请求处理完毕时，该子进程的处理闭环才被打开。

这么简单的实现带来的效果却是不小，经过全世界这么多使用者的尝试，主进程分发请求还是很平均的，如果 RoundRobin 的调度需求不满足你业务中的要求，你可以尝试仿照 RoundRobin 模块写一个另类的调度算法。

在 Windows 系统中采用的 shared socket 策略是什么呢？采用 SS 策略调度算法，子进程的服务器工作逻辑完全不同于上文中所讲的那样，子进程创建的 TCP 服务器会在底层侦听端口并处理响应，这是如何实现的呢？SS 策略的核心在于 IPC 传输句柄的文件描述符，并且在 C++ 层设置端口的 SO_REUSEADDR 选项，最后根据传输的文件描述符还原出 handle(net.TCP)，处理请求。这正是 shared socket 名称由来，共享文件描述符。

需要指出的是，在子进程中根据文件描述符还原出的 handle，不能再进行 bind(ip,port) 和 listen(backlog)操作，只有主进程创建的 handle 可以调用这些函数，子进程中只能选择 accept、read、write 操作。

既然 SS 策略传递的是 master 管理的 socket 文件描述符，子进程侦听该描述符，那么由谁来调度哪个子进程处理请求呢？这就是由操作系统内核来进行调度。可是内核调度往往出现意想不到的效果，在 Linux 下导致请求往往集中在某几个子进程中处理。这从内核的调度策略也可以推算一二，内核的进程调度离不开上下文切换，上下文切换的代价很高，不仅需要保存当前进程的代码、数据和堆栈等用户空间数据，还需要保存各种寄存器，如 PC，ESP，最后还需要恢复被调度进程的上下文状态，仍然包括代码、数据和各种寄存器，因此代价非常大。而 Linux 内核在调度这些子进程时往往倾向于唤醒最近被阻塞的子进程，上下文切换的代价相对较小。而且内核的调度策略往往受到当前系统的运行任务数量和资源使用情况，对专注于业务开发的 HTTP 服务器影响较大，因此会造成某些子进程的负载严重不均衡的状况。那么为什么 cluster 模块默认会在 Windows 机器中采用 SS 策略调度子进程呢？原因是 Node 在 Windows 平台采用的 IOCP 来最大化性能，它使得传递连接的句柄到其他进程的成本很高，因此采用默认的依靠操作系统调度的 SS 策略。

SS 调度策略非常简单，主进程直接通过IPC通道发送handle给子进程即可


集群使用示范：

```
const cluster = require('cluster');
const http = require('http');
const cores = require('os').cpus();

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  cores.map(cpu => {
    let worker = cluster.fork(); // fork self
  });
  cluster.on('exit', (worker, code, signal) => {
    let pid = worker.process.pid;
    console.log({worker: worker.id, pid, exitCode: code});
    void function killAll(){
      for(let id in cluster.workers) {
        cluster.workers[id].disconnect();
        // cluster.workers[id].kill('SIGTERM');
      }
    }();
  });
} else {
  // Workers can share any TCP connection with Master bye IPC server.
  let port = 8000; // cluster.worker.id;
  const svr = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`hello world Worker ${process.pid}\n`);
    svr.close((err)=>{
      if(err) console.error(err);
      process.exit();
    });
  }).listen(port, "localhost");
  console.log(`Worker ${process.pid} started`, port);
}
```

配置 Master：

```
const cluster = require('cluster');
cluster.setupMaster({
  exec: 'worker.js',
  args: ['--use', 'https'],
  silent: true
});
cluster.fork(); // https worker

cluster.setupMaster({
  exec: 'worker.js',
  args: ['--use', 'http']
});
cluster.fork(); // http worker
```

Cluster 模块的功能非常强大，而 PM2 将它的使用变得更加容易。

通过 PM2 可以实时扩展集群，可以通过以下命令来对集群进行扩展，参数 n 指定工作线程的数量，被用来增加或减少集群进程数。

    pm2 scale <app name> <n>
    pm2 scale app +3

    pm2 start app.js --name app
    pm2 start app.js -i 8
    pm2 list
    pm2 monit
    
    pm2 stop all
    pm2 start all
    pm2 restart all
    pm2 reload all
    pm2 delete all


- Class: Worker
    - Event: disconnect( )
    - Event: error( )
    - Event: exit( code, signal )
    - Event: listening( address )
    - Event: message( message, handle )
    - Event: online( )

    - worker.disconnect()
    - worker.exitedAfterDisconnect
    - worker.id
    - worker.isConnected()
    - worker.isDead()
    - worker.kill([signal])
    - worker.process
    - worker.send(message[, sendHandle[, options]][, callback])

- cluster 模块
    - Event: disconnect( worker )
    - Event: exit( worker, code, signal )
    - Event: fork( worker )
    - Event: listening( worker, address )
    - Event: message( worker, message, handle )
    - Event: online( worker )
    - Event: setup( settings )
    - cluster.disconnect([callback])
    - cluster.fork([env])
    - cluster.isMaster
    - cluster.isWorker
    - cluster.schedulingPolicy
    - cluster.settings
    - cluster.setupMaster([settings])
    - cluster.worker
    - cluster.workers


# 🚩 events 事件模块
- https://nodejs.org/docs/latest-v12.x/api/events.html

大部分 Node 核心 API 是围绕一个惯用的异步事件驱动体系结构打造的，在这个体系结构中，某些称为 emitters 的对象会发出命名事件，从而导致那些称为 listeners 的函数对象被执行。

示范事件发射对象的使用：

```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event');
myEmitter.emit('event', 'a', 'b');
```

要点：

- emitter.on() 注册监听函数；
- emitter.emit() 发射事件，并返回一个布尔值表示事件发射是否成功；
- emitter.once() 注册执行一次的监听函数； 
- 发射事件时，可以给监听函数传递任意数量的参数；
- 结合 setImmediate() 实现异步执行；

使用异步函数处理事件时，需要考虑 rejected 状态，可以监听 error 事件，或者 `Symbol.for('nodejs.rejection')` 方法：

```
const EventEmitter = require('events');
// EventEmitter.captureRejections = true;
const ee1 = new EventEmitter({ captureRejections: true });
ee1.on('something', async (value) => {
  throw new Error('kaboom');
});

ee1.on('error', (err) => console.log("on error:", err.message));
ee1[Symbol.for('nodejs.rejection')] = console.log;

ee1.emit("something");
```

不建议使用异步函数用作 error 事件处理程序，并且，不能在 error 中使用 catch 处理程序，以避免无限的错误循环。


- Static Properties
    - events.once(emitter, name)
    - events.captureRejections
    - events.captureRejectionSymbol
    - events.on(emitter, eventName)

- Class: EventEmitter
    - Event: 'newListener'
    - Event: 'removeListener'
    - EventEmitter.listenerCount(emitter, eventName)
    - EventEmitter.defaultMaxListeners
    - EventEmitter.errorMonitor
    - emitter.addListener(eventName, listener)
    - emitter.emit(eventName[, ...args])
    - emitter.eventNames()
    - emitter.getMaxListeners()
    - emitter.listenerCount(eventName)
    - emitter.listeners(eventName)
    - emitter.off(eventName, listener)
    - emitter.on(eventName, listener)
    - emitter.once(eventName, listener)
    - emitter.prependListener(eventName, listener)
    - emitter.prependOnceListener(eventName, listener)
    - emitter.removeAllListeners([eventName])
    - emitter.removeListener(eventName, listener)
    - emitter.setMaxListeners(n)
    - emitter.rawListeners(eventName)
    - emitter[Symbol.for('nodejs.rejection')](err, eventName[, ...args])


# 🚩 process 进程模块
- https://nodejs.org/docs/latest-v14.x/api/process.html
- https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program

系统每个信息都是一个对应的事件 Signal events，参考 OS 模块，部分信号如下：

- `'SIGUSR1'` 被 Node.js 保留用于启动调试器。
- `'SIGPIPE'` 默认会被忽略，可以给其绑定监听器。
- `'SIGHUP'` 当控制台窗口被关闭时会触发，默认行为是终止程序，但绑定监听器则会阻止默认行为。Windows 上会在触发后 10 秒后无条件地终止。
- `'SIGTERM'` 绑定了监听器，则其默认的行为会被移除，即不再会退出程序，但在 Windows 上不支持。
- `'SIGINT'` 从终端运行时，所有平台上都支持，通常可以使用 Ctrl+C 触发。
- `'SIGBREAK'` 在 Windows 上，当按下 Ctrl+Break 时则会触发。 在非 Windows 平台上，可以为其绑定监听器，但是无法发送或触发此事件。
- `'SIGWINCH'` 当控制台被调整大小时则会触发。 在 Windows 上，只有当写入控制台时移动光标、或者在原始模式中使用可读的 tty 时，才会触发。
- `'SIGKILL'` 不能绑定监听器，在所有平台上，都会无条件地终止 Node.js。
- `'SIGSTOP'` 不能绑定监听器。
- `'SIGBUS'` 'SIGFPE' 'SIGSEGV' 'SIGILL', 使用 kill(2) 产生，否则会使进程停留在某种状态，此状态下调用 JS 监听器可能导致进程停止响应。
-  0 信号用来测试进程是否存在，不存在会抛出错误，与平台无关的方式来测试进程的存在性。

Windows 不支持信号，不能通过信号终止进程，但是 Node.js 提供了 process.kill() 和 subprocess.kill() 来模拟，以下三个进程退出方式等效：

    process.exit(1)
    process.exitCode = 1
    process.kill(process.pid, 'SIGTERM')

发送 SIGINT、 SIGTERM 和 SIGKILL 会使目标进程被无条件地终止，然后子进程会报告该进程已被信号终止。

```ts
// Begin reading from stdin so the process does not exit.
process.stdin.resume();
process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Control-D to exit.');
});

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}
process.on('SIGINT', handle);
process.on('SIGTERM', handle);
```

Exit codes

- 0 正常退出；
- 1 Uncaught Fatal Exception
- 2 Unused (reserved by Bash for builtin misuse)
- 3 Internal JavaScript Parse Error
- 4 Internal JavaScript Evaluation Failure
- 5 Fatal Error: There was a fatal unrecoverable error in V8.
- 6 Non-function Internal Exception Handler
- 7 Internal Exception Handler Run-Time Failure:
- 8: Unused
- 9 Invalid Argument
- 10 Internal JavaScript Run-Time Failure
- 12 Invalid Debug Argument
- 13 Unfinished Top-Level Await
- >128 Signal Exits:  SIGKILL or SIGHUP, then its exit code will be 128 plus the value of the signal code. 

- Process events
    - Event: beforeExit( code )
    - Event: disconnect(  )
    - Event: exit( code )
    - Event: message( message, sendHandle )
    - Event: multipleResolves( type, promise, value )
    - Event: rejectionHandled( promise )
    - Event: uncaughtException( err, origin )
    - Event: uncaughtExceptionMonitor( err, origin )
    - Event: unhandledRejection( reason, promise )
    - Event: warning( warning )

- 属性参考：
    - process.allowedNodeEnvironmentFlags
    - process.arch
    - process.argv
    - process.argv0
    - process.channel
    - process.config
    - process.connected
    - process.debugPort
    - process.env 获取环境变量
    - process.execArgv
    - process.execPath
    - process.exitCode
    - process.mainModule `deprecated`
    - process.noDeprecation
    - process.pid
    - process.platform
    - process.ppid
    - process.release
    - process.report
    - process.report.compact
    - process.report.directory
    - process.report.filename
    - process.report.reportOnFatalError
    - process.report.reportOnSignal
    - process.report.reportOnUncaughtException
    - process.report.signal
    - process.stderr
    - process.stderr.fd
    - process.stdin
    - process.stdin.fd
    - process.stdout
    - process.stdout.fd
    - process.throwDeprecation
    - process.title
    - process.traceDeprecation
    - process.version
    - process.versions

- API 参考：
    - process.abort()
    - process.channel.ref()
    - process.channel.unref()
    - process.chdir(directory)
    - process.cpuUsage([previousValue])
    - process.cwd()
    - process.disconnect()
    - process.dlopen(module, filename[, flags])
    - process.emitWarning(warning[, options])
    - process.emitWarning(warning[, type[, code]][, ctor])
    - process.exit([code])
    - process.getegid()
    - process.geteuid()
    - process.getgid()
    - process.getgroups()
    - process.getuid()
    - process.hasUncaughtExceptionCaptureCallback()
    - process.hrtime([time])
    - process.hrtime.bigint()
    - process.initgroups(user, extraGroup)
    - process.kill(pid[, signal])
    - process.memoryUsage()
    - process.memoryUsage.rss()
    - process.nextTick(callback[, ...args])
    - process.report.getReport([err])
    - process.report.writeReport([filename][, err])
    - process.resourceUsage()
    - process.send(message[, sendHandle[, options]][, callback])
    - process.setegid(id)
    - process.seteuid(id)
    - process.setgid(id)
    - process.setgroups(groups)
    - process.setuid(id)
    - process.setUncaughtExceptionCaptureCallback(fn)
    - process.umask()  `deprecated`
    - process.umask(mask)
    - process.uptime()



# 🚩 child_process 子进程模块
- https://nodejs.org/api/child_process.html
- https://nodejs.org/api/process.html

Node 子进程模块提供与系统交互的重要接口，其主要 API 有： 

- 标准输入、标准输出及标准错误输出的接口 stdio：
    - `child.stdin` 获取标准输入。
    - `child.stdout` 获取标准输出。
    - `child.stderr` 获取标准错误输。 
- `child.pid` 子进程 PID。
- `child_process.exec(cmd, [options], callback)` 执行 Shell 命令。
- `child_process.execFile(file[, args][, options][, callback])` 执行脚本文件或程序。
- `child_process.fork(modulePath[, args][, options])` 复刻创建 Node 子进程，相当 spawn 增强版。
- `child_process.spawn(cmd, args=[], [options])` 孵化创建子进程，带有 stdout stderr 流对象获取输出。
- `child.kill(signal='SIGTERM')` 杀死子进程。

以上方法中还有三个同步执行版本：

- child_process.execFileSync(file[, args][, options])
- child_process.execSync(command[, options])
- child_process.spawnSync(command[, args][, options])

`fork()` 是 `spawn()` 的特殊形式，用于在子进程中运行的模块，在父进程与子进程之间，建立一个通信管道用于进程之间的通信。如 `fork('./sub.js')` 相当于 `spawn('node', ['./sub.js'])`。

在不同的平台上 `exec()` & `execFile()` 表现差异很大：

- Unix, Linux, macOS 平台上 `execFile()` 更有效率，因为默认不通过 spawn 来孵化运行 shell 进程；
- Windows 平台上 .bat .cmd 需要通过终端程序运行，所以不能使用 `execFile()`，而是采用 `spawn()` `exec()`；

像 exec 可以直接执行威胁性的 shell 命令，如：

    exec('echo hello world;rm -rf');

通过 exec 执行后就会导致删除当前目录下的文件，而 execFile 则可以避免：

    execFile('echo', ['hello world;rm -rf']);

对于文件有空格时，还需要使用双引号包括。

```
const { exec, spawn } = require('child_process');

exec('my.bat', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

// Script with spaces in the filename:
const bat = spawn('"my script.cmd"', ['a', 'b'], { shell: true });
// or:
exec('"my script.cmd" a b', (err, stdout, stderr) => {
  // ...
});
```

在 `spawn()` `fork()` 函数可以接收一个 stdio 参数，如果使用数组变量，则它必须包含一个值为 ipc 的项，否则将引发错误，例如[0，1，2，'ipc']。

这个选项用于配置父子进程之间建立通信的管道，默认情况下选项 stdio 等于 ['pipe'，'pipe'，'pipe']，子进程的 stdio 重定向到 ChildProcess 对象上相应的流，如下：

- stdin --> subprocess.stdin
- stdout --> subprocess.stdout
- stderr  --> subprocess.stderr 

约定，options.stdio 可以传入以下设置：

- `'pipe'`: 等价于默认的 ['pipe', 'pipe', 'pipe']
- `'ignore'`: 等价于 ['ignore', 'ignore', 'ignore']
- `'inherit'`: 等价于 ['inherit', 'inherit', 'inherit'] 或者 [0, 1, 2]

如果传入数组，则其中每个索引对应于子进程中的一个文件描述符 fd，值 0、1、2 分别对应 stdin、stdout、stderr。

可以指定其他 FD 以在父级和子级之间创建其他管道，值如下：

- `'pipe'`: 为父子进程创建管道通信，父进程端的 pipe 通过 subprocess.stdio[fd] 暴露，fds 0, 1, 2 对应 subprocess.stdin, subprocess.stdout, subprocess.stderr。

- `'ipc'`: 为父子进程创建 IPC 通道，通过消息或文件描述符，这样就可以使用 subprocess.send() 传递消息，对于 Node.js 子进程，IPC 通道的 process.send() & process.disconnect() 方法都有效，还有 'disconnect' and 'message' 事件。

- `'ignore'`: 告诉 Node.js 在子进程中忽略这个 fd，Node.js 总会为子进程打开 0, 1, 2 这几个 fd，设置 'ignore' 就是让 Node.js 打开 /dev/null 并附加到子进程的 fd。

- `'inherit'`: 继承父进程 stdio stream，在传入数组前 3 个位置对应 process.stdin, process.stdout, process.stderr，其它位置等价 'ignore'。

- `Stream` 对象: 与多个子进程共享一个引用 tty/file/socket/pipe 的 readable 或 writable 流对象。

- 正整数: 数值代表当前父进程打开的 fd，由子进程共享，类似 `Stream` 对象的共享方式，在 Windows 平台下可以传入 sockets。

- `null` `undefined`: 使用默认值，stdio fds 0, 1, 2 默认值对应 stdin, stdout, stderr 管道，而 fd 3 或更大的值其默认值为 'ignore'。

```
const { spawn } = require('child_process');

// Child will use parent's stdios.
spawn('prg', [], { stdio: 'inherit' });

// Spawn child sharing only stderr.
spawn('prg', [], { stdio: ['pipe', 'pipe', process.stderr] });

// Open an extra fd=4, to interact with programs presenting a
// startd-style interface.
spawn('prg', [], { stdio: ['pipe', null, null, null, 'pipe'] });
```

例如，将 stdio 重定向到文件：

```
var child_process = require('child_process');
var fs = require('fs');

var out = fs.openSync('./out.log', 'a');
var err = fs.openSync('./err.log', 'a');

var child = child_process.spawn('node', ['child.js'], {
    detached: true,
    stdio: ['ignore', out, err]
});

child.unref();
```



传入 shell 参数，boolean or string，表示执行 shell 命令，在 Unix 系统上默认使用 `/bin/sh`，在 Windows 系统上默认使用 process.env.ComSpec 或 `%COMSPEC%` 指定的 `cmd.exe` 执行命令，其它 shell 程序可以传入字符串指定。

一个 shell 程序应该可以使用 -c 开关来执行命令，对于 Windows 的 'cmd.exe'，这应该可以使用 /d /s /c 等开关，执行命令格式应该兼容。

选项设置，还有 `detached` 可以让子进程不受主进程的退出影响而继续执行：

```
const fs = require('fs');
const { spawn } = require('child_process');
const out = fs.openSync('./out.log', 'a');
const err = fs.openSync('./out.log', 'a');

const subprocess = spawn('prg', [], {
  detached: true,
  stdio: [ 'ignore', out, err ]
});

subprocess.unref();
```

子进程 ChildProcess 的事件参考，在 Windows 平台下执行命令获取的字符串是 GBK 编码，可以使用 TextDecoder  iconv 模块进行转码：

```
const { spawn, exec, execFile } = require('child_process');
const {decode, encode} = require('iconv-lite')

let isWin32 = process.platform==='win32';
const ls = isWin32? execFile('cmd', ['/c dir .'], {encoding: "binary"})
// const ls = isWin32? exec('cmd /c dir .', {encoding: "binary"})
// const ls = isWin32? spawn('cmd', ['/c', 'dir .'])
  : spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  const buffer = Buffer.from(data, "binary");
  const utf8 = decode(buffer, "gbk");
  console.log(`stdout: ${utf8}`);
});

ls.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
});

ls.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

默认，主进程会等待子进程退出，可以使用 `subprocess.unref()` 方法主动将子进程从父进程的事件循环中剔除，相当于使用 `detached` 选项来孵化子进程，除非使用了 IPC 通信通道。

在子进程的 IPC 通信中，可以使用 v8 模块的串行化 API 来传递数据，但是要 JSON 支持更多的数据类型，如 BigInt, Map & Set, ArrayBuffer & TypedArray, Buffer, Error, RegExp 等等，可以在 child_process.spawn() or child_process.fork() 执行时传入 serialization 选项为 'advanced'。

API 参考：

- Event: close(code, signal) 
- Event: disconnect() 
- Event: error(err) 
- Event: exit(code, signal) 
- Event: message(message, sendHandle) 与 fork 子进程通信。
- Event: spawn() 

- subprocess.channel
- subprocess.channel.ref()
- subprocess.channel.unref()
- subprocess.connected
- subprocess.disconnect()
- subprocess.exitCode
- subprocess.kill([signal])
- subprocess.killed
- subprocess.pid
- subprocess.ref()
- subprocess.send(message[, sendHandle[, options]][, callback])
- subprocess.signalCode
- subprocess.spawnargs
- subprocess.spawnfile
- subprocess.stderr
- subprocess.stdin
- subprocess.stdio
- subprocess.stdout
- subprocess.unref()


## onmessage 通信事件示范

根据子进程的 send() 方法，可以给子进程发送各种用于 IPC 通信的对象。

- subprocess.send(message[, sendHandle[, options]][, callback])

子进程通信使用 message 事件接收信息，消息在发送方调用 `send()` 方法发送：

    const cp = require('child_process');
    const n = cp.fork(`${__dirname}/sub.js`);

    n.on('message', (m) => {
      console.log('PARENT got message:', m);
    });

    // Causes the child to print: CHILD got message: { hello: 'world' }
    n.send({ hello: 'world' });

子进程脚本 sub.js：

    process.on('message', (m) => {
      console.log('CHILD got message:', m);
    });

    // process.send(message[, sendHandle[, options]][, callback])
    process.send({ foo: 'bar', baz: NaN });


使用 server 对象通信：

    const subprocess = require('child_process').fork('subprocess.js');

    // Open up the server object and send the handle.
    const server = require('net').createServer();
    server.on('connection', (socket) => {
      socket.end('handled by parent');
    });
    server.listen(1337, () => {
      subprocess.send('server', server);
    });

在子进程中接收 server：

    process.on('message', (m, server) => {
      if (m === 'server') {
        server.on('connection', (socket) => {
          socket.end('handled by child');
        });
      }
    });

使用 socket 对象通信，使用 "normal" or "special" 两个子进程优先级：

    const { fork } = require('child_process');
    const normal = fork('subprocess.js', ['normal']);
    const special = fork('subprocess.js', ['special']);

    // Open up the server and send sockets to child. Use pauseOnConnect to prevent
    // the sockets from being read before they are sent to the child process.
    const server = require('net').createServer({ pauseOnConnect: true });
    server.on('connection', (socket) => {

      // If this is special priority...
      if (socket.remoteAddress === '74.125.127.100') {
        special.send('socket', socket);
        return;
      }
      // This is normal priority.
      normal.send('socket', socket);
    });
    server.listen(1337);

子进程接收 socket：

    process.on('message', (m, socket) => {
      if (m === 'socket') {
        if (socket) {
          // Check that the client socket exists.
          // It is possible for the socket to be closed between the time it is
          // sent and the time it is received in the child process.
          socket.end(`Request handled with ${process.argv[2]} priority`);
        }
      }
    });





# 🚩 Global 全局对象
- https://nodejs.org/docs/latest-v12.x/api/globals.html
- https://nodejs.org/docs/latest-v12.x/api/buffer.html
- https://developer.mozilla.org/en-US/docs/WebAssembly

在模块部分解析过暴露的几个全局属性或方法，它们是 JavaScript built-in 对象，可以全局访问：

- __dirname
- __filename
- exports
- module
- require()


Global objects

- Class: Buffer
- __dirname
- __filename
- clearImmediate(immediateObject)
- clearInterval(intervalObject)
- clearTimeout(timeoutObject)
- console
- exports
- global
- module
- process
- queueMicrotask(callback)
- require()
- setImmediate(callback[, ...args])
- setInterval(callback, delay[, ...args])
- setTimeout(callback, delay[, ...args])
- TextDecoder
- TextEncoder
- URL
- URLSearchParams
- WebAssembly


# 🚩 Buffer 二进制数据处理
http://nodejs.cn/api/buffer.html

在引入 TypedArray 之前，JavaScript 语言没有用于读取或操作二进制数据流的机制。 Buffer 类是作为 Node.js API 的一部分引入的，用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。

现在可以使用 TypedArray， Buffer 类以更优化和更适合 Node.js 的方式实现了 Uint8Array API。

Buffer 类的实例类似于从 0 到 255 之间的整数数组（其他整数会通过 ＆ 255 操作强制转换到此范围），但对应于 V8 堆外部的固定大小的原始内存分配。 Buffer 的大小在创建时确定，且无法更改。

Buffer 类在全局作用域中，因此无需使用 require('buffer').Buffer。

    // 创建一个长度为 10、且用零填充的 Buffer。
    const buf1 = Buffer.alloc(10);

    // 创建一个长度为 10、且用 0x1 填充的 Buffer。 
    const buf2 = Buffer.alloc(10, 1);

    // 创建一个长度为 10、且未初始化的 Buffer。
    // 这个方法比调用 Buffer.alloc() 更快，
    // 但返回的 Buffer 实例可能包含旧数据，
    // 因此需要使用 fill() 或 write() 重写。
    const buf3 = Buffer.allocUnsafe(10);

    // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
    const buf4 = Buffer.from([1, 2, 3]);

    // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
    const buf5 = Buffer.from('tést');

    // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
    const buf6 = Buffer.from('tést', 'latin1');

## Buffer 与字符编码

当字符串数据被存储入 Buffer 实例或从 Buffer 实例中被提取时，可以指定一个字符编码。

    const buf = Buffer.from('hello world', 'ascii');

    console.log(buf.toString('hex'));
    // 打印: 68656c6c6f20776f726c64
    console.log(buf.toString('base64'));
    // 打印: aGVsbG8gd29ybGQ=

    console.log(Buffer.from('fhqwhgads', 'ascii'));
    // 打印: <Buffer 66 68 71 77 68 67 61 64 73>
    console.log(Buffer.from('fhqwhgads', 'utf16le'));
    // 打印: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>

Node.js 当前支持的字符编码有：

    'ascii': 仅适用于 7 位 ASCII 数据。此编码速度很快，如果设置则会剥离高位。
    'utf8': 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8。
    'utf16le': 2 或 4 个字节，小端序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
    'ucs2': 'utf16le' 的别名。
    'base64': Base64 编码。当从字符串创建 Buffer 时，此编码也会正确地接受 RFC 4648 第 5 节中指定的 “URL 和文件名安全字母”。
    'latin1': 一种将 Buffer 编码成单字节编码字符串的方法（由 RFC 1345 中的 IANA 定义，第 63 页，作为 Latin-1 的补充块和 C0/C1 控制码）。
    'binary': 'latin1' 的别名。
    'hex': 将每个字节编码成两个十六进制的字符。

现代的 Web 浏览器遵循 WHATWG 编码标准，将 'latin1' 和 'ISO-8859-1' 别名为 'win-1252'。 这意味着当执行 http.get() 之类的操作时，如果返回的字符集是 WHATWG 规范中列出的字符集之一，则服务器可能实际返回 'win-1252' 编码的数据，而使用 'latin1' 编码可能错误地解码字符。

## Buffer 与 TypedArray

Buffer 实例也是 Uint8Array 实例，但是与 TypedArray 有微小的不同。 例如，ArrayBuffer#slice() 会创建切片的拷贝，而 Buffer#slice() 是在现有的 Buffer 上创建而不拷贝，这使得 Buffer#slice() 效率更高。

也可以从一个 Buffer 创建新的 TypedArray 实例，但需要注意以下事项：

Buffer 对象的内存是被拷贝到 TypedArray，而不是共享。

Buffer 对象的内存是被解释为不同元素的数组，而不是目标类型的字节数组。 也就是说， new Uint32Array(Buffer.from([1, 2, 3, 4])) 会创建一个带有 4 个元素 [1, 2, 3, 4] 的 Uint32Array，而不是带有单个元素 [0x1020304] 或 [0x4030201] 的 Uint32Array。

通过使用 TypedArray 对象的 .buffer 属性，可以创建一个与 TypedArray 实例共享相同内存的新 Buffer。

    const arr = new Uint16Array(2);

    arr[0] = 5000;
    arr[1] = 4000;

    // 拷贝 `arr` 的内容。
    const buf1 = Buffer.from(arr);
    // 与 `arr` 共享内存。
    const buf2 = Buffer.from(arr.buffer);

    console.log(buf1);
    // 打印: <Buffer 88 a0>
    console.log(buf2);
    // 打印: <Buffer 88 13 a0 0f>

    arr[1] = 6000;

    console.log(buf1);
    // 打印: <Buffer 88 a0>
    console.log(buf2);
    // 打印: <Buffer 88 13 70 17>

当使用 TypedArray 的 .buffer 创建 Buffer 时，也可以通过传入 byteOffset 和 length 参数只使用 TypedArray 的一部分。

    const arr = new Uint16Array(20);
    const buf = Buffer.from(arr.buffer, 0, 16);

    console.log(buf.length);
    // 打印: 16

Buffer.from() 与 TypedArray.from() 有着不同的实现。 具体来说，TypedArray 可以接受第二个参数作为映射函数，在类型数组的每个元素上调用：

    TypedArray.from(source[, mapFn[, thisArg]])

Buffer.from() 则不支持映射函数的使用：

    Buffer.from(array)
    Buffer.from(buffer)
    Buffer.from(arrayBuffer[, byteOffset[, length]])
    Buffer.from(string[, encoding])


## Buffer API

Buffer 类

    new Buffer(array)
    new Buffer(arrayBuffer[, byteOffset[, length]])
    new Buffer(buffer)
    new Buffer(size)
    new Buffer(string[, encoding])
    Buffer.alloc(size[, fill[, encoding]])
    Buffer.allocUnsafe(size)
    Buffer.allocUnsafeSlow(size)
    Buffer.byteLength(string[, encoding])
    Buffer.compare(buf1, buf2)
    Buffer.concat(list[, totalLength])
    Buffer.from(array)
    Buffer.from(arrayBuffer[, byteOffset[, length]])
    Buffer.from(buffer)
    Buffer.from(object[, offsetOrEncoding[, length]])
    Buffer.from(string[, encoding])
    Buffer.isBuffer(obj)
    Buffer.isEncoding(encoding)
    Buffer.poolSize
    buf[index]
    buf.buffer
    buf.byteOffset
    buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
    buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
    buf.entries()
    buf.equals(otherBuffer)
    buf.fill(value[, offset[, end]][, encoding])
    buf.includes(value[, byteOffset][, encoding])
    buf.indexOf(value[, byteOffset][, encoding])
    buf.keys()
    buf.lastIndexOf(value[, byteOffset][, encoding])
    buf.length
    buf.parent
    buf.readBigInt64BE([offset])
    buf.readBigInt64LE([offset])
    buf.readBigUInt64BE([offset])
    buf.readBigUInt64LE([offset])
    buf.readDoubleBE([offset])
    buf.readDoubleLE([offset])
    buf.readFloatBE([offset])
    buf.readFloatLE([offset])
    buf.readInt8([offset])
    buf.readInt16BE([offset])
    buf.readInt16LE([offset])
    buf.readInt32BE([offset])
    buf.readInt32LE([offset])
    buf.readIntBE(offset, byteLength)
    buf.readIntLE(offset, byteLength)
    buf.readUInt8([offset])
    buf.readUInt16BE([offset])
    buf.readUInt16LE([offset])
    buf.readUInt32BE([offset])
    buf.readUInt32LE([offset])
    buf.readUIntBE(offset, byteLength)
    buf.readUIntLE(offset, byteLength)
    buf.subarray([start[, end]])
    buf.slice([start[, end]])
    buf.swap16()
    buf.swap32()
    buf.swap64()
    buf.toJSON()
    buf.toString([encoding[, start[, end]]])
    buf.values()
    buf.write(string[, offset[, length]][, encoding])
    buf.writeBigInt64BE(value[, offset])
    buf.writeBigInt64LE(value[, offset])
    buf.writeBigUInt64BE(value[, offset])
    buf.writeBigUInt64LE(value[, offset])
    buf.writeDoubleBE(value[, offset])
    buf.writeDoubleLE(value[, offset])
    buf.writeFloatBE(value[, offset])
    buf.writeFloatLE(value[, offset])
    buf.writeInt8(value[, offset])
    buf.writeInt16BE(value[, offset])
    buf.writeInt16LE(value[, offset])
    buf.writeInt32BE(value[, offset])
    buf.writeInt32LE(value[, offset])
    buf.writeIntBE(value, offset, byteLength)
    buf.writeIntLE(value, offset, byteLength)
    buf.writeUInt8(value[, offset])
    buf.writeUInt16BE(value[, offset])
    buf.writeUInt16LE(value[, offset])
    buf.writeUInt32BE(value[, offset])
    buf.writeUInt32LE(value[, offset])
    buf.writeUIntBE(value, offset, byteLength)
    buf.writeUIntLE(value, offset, byteLength)

buffer.INSPECT_MAX_BYTES
buffer.kMaxLength
buffer.transcode(source, fromEnc, toEnc)

SlowBuffer 类

    new SlowBuffer(size)

Buffer 常量

    buffer.constants.MAX_LENGTH
    buffer.constants.MAX_STRING_LENGTH


# 🚩 assert 断言
- https://nodejs.org/docs/latest-v12.x/api/assert.html

两种模式：

- Strict assertion mode: require('assert').strict;
- Legacy assertion mode: require('assert');

```
// const assert = require('assert');
const assert = require('assert').strict;

let a = [[[1, 2, 3]], 4, 5], b = [[[1, 2, 3]], 4, 5];
assert.deepEqual(a, a);
assert.deepEqual(a, b);
assert.deepStrictEqual(a, b);
```


API 参考：

- Assert
    - assert.deepEqual(actual, expected[, message])
    - assert.deepStrictEqual(actual, expected[, message])
    - assert.doesNotMatch(string, regexp[, message])
    - assert.doesNotReject(asyncFn[, error][, message])
    - assert.doesNotThrow(fn[, error][, message])
    - assert.equal(actual, expected[, message])
    - assert.fail([message])
    - assert.fail(actual, expected[, message[, operator[, stackStartFn]]]) ⛔
    - assert.ifError(value)
    - assert.match(string, regexp[, message])
    - assert.notDeepEqual(actual, expected[, message])
    - assert.notDeepStrictEqual(actual, expected[, message])
    - assert.notEqual(actual, expected[, message])
    - assert.notStrictEqual(actual, expected[, message])
    - assert.ok(value[, message])
    - assert.rejects(asyncFn[, error][, message])
    - assert.strictEqual(actual, expected[, message])
    - assert.throws(fn[, error][, message])

- Class: assert.AssertionError
    - new assert.AssertionError(options)

- Class: assert.CallTracker
    - tracker.calls([fn][, exact])
    - tracker.report()
    - tracker.verify()
    - assert(value[, message])


# 🚩 async_hooks 异步勾子
- https://nodejs.org/docs/latest-v12.x/api/async_hooks.html

async_hooks 用于 asynchronous resources 追踪，资源动作会触发相应的 async_hooks 回调函数。

异步资源表示具与 hooks 回调关联的对象，此回调可能被多次调用，例如，net.createServer() 中的 connection 事件，或者只是一次 fs.open()，也可以在调用 hooks 回调之前关闭资源。asynch_hook 没有显式区分这些不同的情况，而是将它们表示为作为资源的抽象概念。

如果使用 worker，则每个工作线程都有一个独立的 async_hooks 接口，并且每个线程都将使用一组新的 async ID。

hook callbak 可以是：

- init(asyncId, type, triggerAsyncId, resource)
- before()
- after()
- destroy()

 init 钩子参数列表：

 - asyncId 异步资源 ID；
 - type 异步资源类型；
 - triggerAsyncId 异步资源创建上下文的 ID；
 - resource 异步资源；

 触发 before、after、destroy 时会接收到 asyncId，此 asyncId 与 fn 函数内通过 executionAsyncId 取到的值相同。

```
const { createServer } = require('http');
const { executionAsyncId, executionAsyncResource, createHook } = require('async_hooks');

const sym = Symbol('state'); // Private symbol to avoid pollution
let data = [];

let hook = {
  init(asyncId, type, triggerAsyncId, resource) {
        const cr = executionAsyncResource();
        if(cr){
            resource[sym] = cr[sym];
        }
    const eid = executionAsyncId();
    data.push({init: asyncId, type, eid, triggerAsyncId/* , resource */})
  },
  before: (asyncId) => data.push({before: asyncId}),
  after: (asyncId) => data.push({after: asyncId}),
  destroy: (asyncId) => data.push({destroy: asyncId}),
}

createHook(hook).enable();

createServer((req, res) => {
  executionAsyncResource()[sym] = { state: req.url, data };
  setTimeout(function() {
    res.end(JSON.stringify(data, null, '  '));
  }, 100);
}).listen(3000);
```

输出类似如下内容：

```on
[
  { "init": 6, "type": "TCPSERVERWRAP", "eid": 1, "triggerAsyncId": 1 },
  { "init": 7, "type": "TickObject", "eid": 1, "triggerAsyncId": 6 },
  { "before": 7 },
  { "after": 7 },
  { "destroy": 7 },
  { "init": 8, "type": "TCPWRAP", "eid": 0, "triggerAsyncId": 6 },
  { "before": 6 },
  { "init": 9, "type": "HTTPINCOMINGMESSAGE", "eid": 6, "triggerAsyncId": 8 },
  { "init": 10, "type": "TickObject", "eid": 6, "triggerAsyncId": 8 },
  { "after": 6 },
  { "before": 10 },
  { "after": 10 },
  { "destroy": 10 },
  { "before": 9 },
  { "after": 9 },
  { "before": 9 },
  { "init": 11, "type": "Timeout", "eid": 9, "triggerAsyncId": 9 },
  { "after": 9 },
  { "before": 9 },
  { "after": 9 },
  { "before": 9 },
  { "after": 9 },
  { "before": 11 },
  { "before": 24 },
  { "init": 25, "type": "PIPEWRAP", "eid": 24, "triggerAsyncId": 24 },
  { "after": 24 },
  { "destroy": 17 },
  { "destroy": 24 },
  { "before": 8 },
  { "after": 8 },
  { "destroy": 9 },
  { "destroy": 8 },
]
```


Public API

    - async_hooks.createHook(callbacks)
    - async_hooks.executionAsyncResource()
    - async_hooks.executionAsyncId()
    - async_hooks.triggerAsyncId()

- Class: AsyncHook
    - asyncHook.enable()
    - asyncHook.disable()

- Hook callbacks
    - init(asyncId, type, triggerAsyncId, resource)
    - before(asyncId)
    - after(asyncId)
    - destroy(asyncId)
    - promiseResolve(asyncId)

- Class: AsyncResource
    - new AsyncResource(type[, options])
    - Static method: AsyncResource.bind(fn[, type])
    - asyncResource.bind(fn)
    - asyncResource.runInAsyncScope(fn[, thisArg, ...args])
    - asyncResource.emitDestroy()
    - asyncResource.asyncId()
    - asyncResource.triggerAsyncId()

- Class: AsyncLocalStorage
    - new AsyncLocalStorage()
    - asyncLocalStorage.disable()
    - asyncLocalStorage.getStore()
    - asyncLocalStorage.enterWith(store)
    - asyncLocalStorage.run(store, callback[, ...args])
    - asyncLocalStorage.exit(callback[, ...args])


# 🚩 console 控制台
- http://nodejs.cn/api/console.html
- https://nodejs.dev/learn/output-to-the-command-line-using-nodejs

console 模块提供了一个简单的调试控制台，类似于 Web 浏览器提供的 JavaScript 控制台。

该模块导出两个特定组件：

Console 类，包含 console.log()、 console.error() 和 console.warn() 等方法，可用于写入任何 Node.js 流。
全局的 console 实例，配置为写入 process.stdout 和 process.stderr。 使用时无需调用 require('console')。
注意：全局的 console 对象的方法既不像浏览器中的 API 那样总是同步的，也不像其他 Node.js 流那样总是异步的。 详见进程 I/O。

使用全局 console 的示例：

    console.log('你好世界');                // 打印到 stdout: 你好世界
    console.log('你好%s', '世界');      // 打印到 stdout: 你好世界
    console.error(new Error('错误信息'));// 打印到 stderr: [Error: 错误信息]

    const name = '描述';
    console.warn(`警告${name}`);          // 打印到 stderr: 警告描述

打印到 stdout，并加上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 printf(3) 中的代替值（参数都会传给 util.format()）。

    const count = 5;
    console.log('计数: %d', count);
    // 打印到 stdout: 计数: 5 
    console.log('计数:', count);
    // 打印到 stdout: 计数: 5 
    有关更多信息，请参见 util.format()。


使用 Console 类的示例：

    const out = getStreamSomehow();
    const err = getStreamSomehow();
    const myConsole = new console.Console(out, err);

    myConsole.log('你好世界');              // 打印到 out: 你好世界
    myConsole.log('你好%s', '世界');            // 打印到 out: 你好世界
    myConsole.error(new Error('错误信息')); // 打印到 err: [Error: 错误信息]

    const name = '描述';
    myConsole.warn(`警告${name}`);            // 打印到 err: 警告描述

    console.log('My %s has %d years', 'cat', 2)
    %s format a variable as a string
    %d format a variable as a number
    %i format a variable as its integer part only
    %o format a variable as an object

使用表格生成：

    console.table(location)
    ┌────────────────────────────┬───────┬─────────────────────────────────────────────────────────────┐
    │          (index)           │ Value │                            length                           │
    ├────────────────────────────┼───────┼─────────────────────────────────────────────────────────────┤
    │ ancestorOrigins            │     0 │                                                             │
    │ href                       │       │ "https://deno.land/manual@v1.8.1/contributing/architecture" │
    │ origin                     │       │ "https://deno.land"                                         │
    │ protocol                   │       │ "https:"                                                    │
    │ host                       │       │ "deno.land"                                                 │
    │ hostname                   │       │ "deno.land"                                                 │
    │ pathname                   │       │ "/manual@v1.8.1/contributing/architecture"                  │
    │ Symbol(Symbol.toPrimitive) │       │ undefined                                                   │
    └────────────────────────────┴───────┴─────────────────────────────────────────────────────────────┘

- Console API
    - new Console(stdout[, stderr][, ignoreErrors])
    - new Console(options)
    - console.assert(value[, ...message])
    - console.clear()
    - console.count([label])
    - console.countReset([label])
    - console.debug(data[, ...args])
    - console.dir(obj[, options])
    - console.dirxml(...data)
    - console.error([data][, ...args])
    - console.group([...label])
    - console.groupCollapsed()
    - console.groupEnd()
    - console.info([data][, ...args])
    - console.log([data][, ...args])
    - console.table(tabularData[, properties])
    - console.time([label])
    - console.timeEnd([label])
    - console.timeLog([label][, ...data])
    - console.trace([message][, ...args])
    - console.warn([data][, ...args])

- 仅用于调试的方法

    - console.markTimeline([label])
    - console.profile([label])
    - console.profileEnd([label])
    - console.timeStamp([label])
    - console.timeline([label])
    - console.timelineEnd([label])




# 🚩 i18n 国际化支持
- https://nodejs.org/docs/latest-v12.x/api/intl.html
- ICU - International Components for Unicode http://site.icu-project.org
- https://github.com/nodejs/node/blob/master/BUILDING.md

Internationalization 单字有 18 个字母，简称 i18n。

Node.js 使用 C/C++ 实现以下 ICU 国际化功能支持：

- ECMAScript Language Specification 支持的本地化 Unicode 函数:
    - String.prototype.normalize()
    - String.prototype.toLowerCase()
    - String.prototype.toUpperCase()
- 支持所有 ECMAScript Internationalization API Specification (aka ECMA-402):
    - Intl object
    - Locale-sensitive methods like String.prototype.localeCompare() and Date.prototype.toLocaleString()
- WHATWG URL 可解析的 IDNs - internationalized domain names
- require('buffer').transcode()
- More accurate REPL line editing
- require('util').TextDecoder
- RegExp Unicode Property Escapes

编译 Node.js 源代码时可以使用以下配置项：

- --with-intl=none/--without-intl
- --with-intl=system-icu
- --with-intl=small-icu (default)
- --with-intl=full-icu



# 🚩 Utilities Functions 实用工具
- https://nodejs.org/docs/latest-v14.x/api/util.html#util_class_util_textdecoder
- http://nodejs.cn/api/util.html#util_util_format_format_args
- Encoding Living Standard https://encoding.spec.whatwg.org/

- Customizing util.inspect colors
- Modifiers
- Foreground colors
- Background colors
- Custom inspection functions on objects
    - Custom promisified functions

    - WHATWG supported encodings
    - Encodings Supported Without ICU
    - Encodings Supported by Default (With ICU)
    - Encodings requiring full ICU data

TextDecoder 和 TextEncoder 按 WHATWG 规范实现编码解码：

```
const decoder = new TextDecoder('shift_jis');
let string = '';
let buffer;
while (buffer = getNextChunkSomehow()) {
  string += decoder.decode(buffer, { stream: true });
}
string += decoder.decode(); // end-of-stream

const encoder = new TextEncoder();
const src = 'this is some data';
const dest = new Uint8Array(10);
const { read, written } = encoder.encodeInto(src, dest);
```

注意，如果 Node 构建时配置了完全的 Full ICU 技术才能使用 GBK 这样的编码，Small-ICU 支持 utf-8 utf-16le utf-16be，如果禁用则支持 utf-8 utf-16le 两种。

- Static
    - util.callbackify(original)
    - util.debuglog(section[, callback])
    - util.deprecate(fn, msg[, code])
    - util.format(format[, ...args])
    - util.formatWithOptions(inspectOptions, format[, ...args])
    - util.getSystemErrorName(err)
    - util.inherits(constructor, superConstructor)
    - util.inspect(object[, options])
    - util.inspect(object[, showHidden[, depth[, colors]]])
    - util.inspect.custom
    - util.inspect.defaultOptions
    - util.isDeepStrictEqual(val1, val2)
    - util.promisify(original)
    - util.promisify.custom

- Class: util.TextDecoder
    - new TextDecoder([encoding[, options]])
    - textDecoder.decode([input[, options]])
    - textDecoder.encoding
    - textDecoder.fatal
    - textDecoder.ignoreBOM

- Class: util.TextEncoder
    - textEncoder.encode([input])
    - textEncoder.encodeInto(src, dest)
    - textEncoder.encoding

- util.types
    - util.types.isAnyArrayBuffer(value)
    - util.types.isArrayBufferView(value)
    - util.types.isArgumentsObject(value)
    - util.types.isArrayBuffer(value)
    - util.types.isAsyncFunction(value)
    - util.types.isBigInt64Array(value)
    - util.types.isBigUint64Array(value)
    - util.types.isBooleanObject(value)
    - util.types.isBoxedPrimitive(value)
    - util.types.isDataView(value)
    - util.types.isDate(value)
    - util.types.isExternal(value)
    - util.types.isFloat32Array(value)
    - util.types.isFloat64Array(value)
    - util.types.isGeneratorFunction(value)
    - util.types.isGeneratorObject(value)
    - util.types.isInt8Array(value)
    - util.types.isInt16Array(value)
    - util.types.isInt32Array(value)
    - util.types.isMap(value)
    - util.types.isMapIterator(value)
    - util.types.isModuleNamespaceObject(value)
    - util.types.isNativeError(value)
    - util.types.isNumberObject(value)
    - util.types.isPromise(value)
    - util.types.isProxy(value)
    - util.types.isRegExp(value)
    - util.types.isSet(value)
    - util.types.isSetIterator(value)
    - util.types.isSharedArrayBuffer(value)
    - util.types.isStringObject(value)
    - util.types.isSymbolObject(value)
    - util.types.isTypedArray(value)
    - util.types.isUint8Array(value)
    - util.types.isUint8ClampedArray(value)
    - util.types.isUint16Array(value)
    - util.types.isUint32Array(value)
    - util.types.isWeakMap(value)
    - util.types.isWeakSet(value)
    - util.types.isWebAssemblyCompiledModule(value)

## util.promisify(original)

封装函数 util.promisify(original) 可以将那些依赖回调的异步函数，封装成 Promise 形式，将 callback 变成 catch 语法。

被封装的函数要满足一个条件，即最后一个参数是回调函数 `(err, value) => ...`。

```
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
  // Do something with `stats`
}).catch((error) => {
  // Handle the error.
});

//Or, equivalently using async functions:

const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}
```

如果函数不符合这个格式，需要给函数增加一个 util.promisify.custom 属性，指定一个函数作为 Promise 化处理函数，即可。

```
const util = require('util');

function doSomething(foo, callback) {
  // ...
}

doSomething[util.promisify.custom] = (foo) => {
  return getPromiseSomehow();
};

const promisified = util.promisify(doSomething);
console.log(promisified === doSomething[util.promisify.custom]);
// prints 'true'
```


## util.format(format[, ...args])

    format <string> 一个类似 printf 的格式字符串。

util.format() 方法返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式的字符串，该字符串可以包含零个或多个格式占位符。 每个占位符会被对应参数转换后的值所替换。 支持的占位符有：

    %s - String 将用于转换除 BigInt、 Object 和 -0 外的所有值。BigInt 值将用 n 表示，而没有用户定义 toString 函数的对象使用带有选项 { depth: 0, colors: false, compact: 3 } 的 util.inspect() 进行检查。
    %d - Number 将用于转换除 BigInt 和 Symbol 之外的所有值。
    %i - parseInt(value, 10) 用于除 BigInt 和 Symbol 之外的所有值。
    %f - parseFloat(value) 用于除 BigInt 和 Symbol 之外的所有值。
    %j - JSON。如果参数包含循环引用，则替换为字符串 '[Circular]'。
    %o - Object。具有通用 JavaScript 对象格式的对象的字符串表示形式。 类似于带有选项 { showHidden: true, showProxy: true } 的 util.inspect()。 这将显示完整对象，包括非可枚举属性和代理。
    %O - Object。具有通用 JavaScript 对象格式的对象的字符串表示形式。 类似于 util.inspect() 但没有选项。 这将显示完整对象，不包括非可枚举属性和代理。
    %c - CSS。该说明符当前会被忽略，将会跳过任何传入的 CSS。
    %% - 单个百分号（'%'）。这不会消耗参数。
    返回: <string> 格式化的字符串。

如果占位符没有对应的参数，则占位符不被替换。

    util.format('%s:%s', 'foo');
    // 返回: 'foo:%s'

如果类型不是 string，则使用 util.inspect() 格式化不属于格式字符串的值。

如果传入 util.format() 方法的参数比占位符的数量多，则多出的参数会被强制转换为字符串，然后拼接到返回的字符串，参数之间用一个空格分隔。

    util.format('%s:%s', 'foo', 'bar', 'baz');
    // 返回: 'foo:bar baz'

如果第一个参数不是一个字符串，则 util.format() 返回一个所有参数用空格分隔并连在一起的字符串。

    util.format(1, 2, 3);
    // 返回: '1 2 3'

如果只有一个参数传给 util.format()，它将按原样返回，不带任何格式：

    util.format('%% %s');
    // 返回: '%% %s'

util.format() 是一种用作调试工具的同步方法。 某些输入值可能会产生严重的性能开销，从而阻止事件循环。 请谨慎使用此功能，切勿在热代码路径中使用。



# 🚩 Crypto 加密模块
- https://nodejs.org/docs/latest-v12.x/api/crypto.html
- https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/
- https://stackoverflow.com/questions/1220751/how-to-choose-an-aes-encryption-mode-cbc-ecb-ctr-ocb-cfb
- 椭圆曲线算法：入门 https://www.jianshu.com/p/2e6031ac3d50?from=groupmessage
- https://andrea.corbellini.name/2015/05/30/elliptic-curve-cryptography-ecdh-and-ecdsa/
- https://github.com/openssl/openssl/blob/81fc390/crypto/ec/ec_curve.c#L766
- AES, Advanced Encryption Standard https://github.com/matt-wu/AES
- Cryptography Theory and Practice 4th 密码学原理与实践
- [ASN.1 key structures in DER and PEM](https://tls.mbed.org/kb/cryptography/asn1-key-structures-in-der-and-pem)
- [ASN.1 JavaScript decoder](https://lapo.it/asn1js/)
- [RFC 6025 - ASN.1 Translation](https://www.rfc-editor.org/rfc/rfc6025.html)
- [RFC 1421 - Privacy Enhance Mail Part I: Message Encryption and Authentication Procedures](https://www.rfc-editor.org/rfc/rfc1421.html)
- [RFC 2315 - Privacy Enhance Mail](https://www.rfc-editor.org/rfc/rfc2315.html)
- [RFC 2986 - Certificate Signing Request](https://www.rfc-editor.org/info/rfc2986)
- [RSA算法原理（一）阮一峰](http://www.ruanyifeng.com/blog/2013/06/rsa_algorithm_part_one.html)
- [RSA算法原理（二）阮一峰](http://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html)
- [数字签名是什么？](http://www.ruanyifeng.com/blog/2011/08/what_is_a_digital_signature.html)
- [What is a Digital Signature? An introduction to Digital Signatures, by David Youd](http://www.youdzone.com/signature.html)
- 信息安全技术 SM2 椭圆曲线公钥密码算法 http://www.gb688.cn/bzgk/gb/std_list?p.p1=0&p.p90=circulation_date&p.p91=desc&p.p2=32918
- SM系列国密算法 https://www.cnblogs.com/lyh523329053/p/10238260.html

提供密码学函数，cryptographic functionality，包含 OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.


## 对称加密算法

通过 crypto.getCiphers() 获取完整的对称加密算法列表：

    | aes-128-cbc             | aria-128-cbc  | bf                | des                      | rc2          |
    | aes-128-cbc-hmac-sha1   | aria-128-ccm  | bf-cbc            | des-cbc                  | rc2-128      |
    | aes-128-cbc-hmac-sha256 | aria-128-cfb  | bf-cfb            | des-cfb                  | rc2-40       |
    | aes-128-ccm             | aria-128-cfb1 | bf-ecb            | des-cfb1                 | rc2-40-cbc   |
    | aes-128-cfb             | aria-128-cfb8 | bf-ofb            | des-cfb8                 | rc2-64       |
    | aes-128-cfb1            | aria-128-ctr  | blowfish          | des-ecb                  | rc2-64-cbc   |
    | aes-128-cfb8            | aria-128-ecb  | camellia-128-cbc  | des-ede                  | rc2-cbc      |
    | aes-128-ctr             | aria-128-gcm  | camellia-128-cfb  | des-ede-cbc              | rc2-cfb      |
    | aes-128-ecb             | aria-128-ofb  | camellia-128-cfb1 | des-ede-cfb              | rc2-ecb      |
    | aes-128-gcm             | aria-192-cbc  | camellia-128-cfb8 | des-ede-ecb              | rc2-ofb      |
    | aes-128-ocb             | aria-192-ccm  | camellia-128-ctr  | des-ede-ofb              | rc4          |
    | aes-128-ofb             | aria-192-cfb  | camellia-128-ecb  | des-ede3                 | rc4-40       |
    | aes-128-xts             | aria-192-cfb1 | camellia-128-ofb  | des-ede3-cbc             | rc4-hmac-md5 |
    | aes-192-cbc             | aria-192-cfb8 | camellia-192-cbc  | des-ede3-cfb             | seed         |
    | aes-192-ccm             | aria-192-ctr  | camellia-192-cfb  | des-ede3-cfb1            | seed-cbc     |
    | aes-192-cfb             | aria-192-ecb  | camellia-192-cfb1 | des-ede3-cfb8            | seed-cfb     |
    | aes-192-cfb1            | aria-192-gcm  | camellia-192-cfb8 | des-ede3-ecb             | seed-ecb     |
    | aes-192-cfb8            | aria-192-ofb  | camellia-192-ctr  | des-ede3-ofb             | seed-ofb     |
    | aes-192-ctr             | aria-256-cbc  | camellia-192-ecb  | des-ofb                  | sm4          |
    | aes-192-ecb             | aria-256-ccm  | camellia-192-ofb  | des3                     | sm4-cbc      |
    | aes-192-gcm             | aria-256-cfb  | camellia-256-cbc  | des3-wrap                | sm4-cfb      |
    | aes-192-ocb             | aria-256-cfb1 | camellia-256-cfb  | desx                     | sm4-ctr      |
    | aes-192-ofb             | aria-256-cfb8 | camellia-256-cfb1 | desx-cbc                 | sm4-ecb      |
    | aes-256-cbc             | aria-256-ctr  | camellia-256-cfb8 | id-aes128-CCM            | sm4-ofb      |
    | aes-256-cbc-hmac-sha1   | aria-256-ecb  | camellia-256-ctr  | id-aes128-GCM            |              |
    | aes-256-cbc-hmac-sha256 | aria-256-gcm  | camellia-256-ecb  | id-aes128-wrap           |              |
    | aes-256-ccm             | aria-256-ofb  | camellia-256-ofb  | id-aes128-wrap-pad       |              |
    | aes-256-cfb             | aria128       | camellia128       | id-aes192-CCM            |              |
    | aes-256-cfb1            | aria192       | camellia192       | id-aes192-GCM            |              |
    | aes-256-cfb8            | aria256       | camellia256       | id-aes192-wrap           |              |
    | aes-256-ctr             |               | cast              | id-aes192-wrap-pad       |              |
    | aes-256-ecb             |               | cast-cbc          | id-aes256-CCM            |              |
    | aes-256-gcm             |               | cast5-cbc         | id-aes256-GCM            |              |
    | aes-256-ocb             |               | cast5-cfb         | id-aes256-wrap           |              |
    | aes-256-ofb             |               | cast5-ecb         | id-aes256-wrap-pad       |              |
    | aes-256-xts             |               | cast5-ofb         | id-smime-alg-CMS3DESwrap |              |
    | aes128                  |               | chacha20          | idea                     |              |
    | aes128-wrap             |               | chacha20-poly1305 | idea-cbc                 |              |
    | aes192                  |               |                   | idea-cfb                 |              |
    | aes192-wrap             |               |                   | idea-ecb                 |              |
    | aes256                  |               |                   | idea-ofb                 |              |
    | aes256-wrap             |               |                   |                          |              |


算法的模式如下：

- 仅限加密：
    - 需要填充的模式：与示例中一样，填充通常很危险，因为它可以填充 oracle 攻击。
        - cbc - Cipher Block Chaining 密码分组链接模式，先将明文切分成若干小段，然后与初始块或者上一段的密文段进行异或运算后，再进行加密。
        - ecb - Electronic Codebook Book 电码本模式，将整个明文分成若干段相同的小段，然后对每一小段进行加密。
    - 流密码模式：这些模式生成可能或可能不依赖于明文的伪随机数据流。
        - cfb - Cipher FeedBack 密码反馈模式，这种算法模式较复杂。
        - ctr - Counter 计数器模式，有自增的算子，算子加密之后的输出和明文异或的结果得到密文，相当于一次一密。这种加密方式简单快速，安全可靠，可以并行加密。
        - ofb - Output FeedBack 输出反馈模式，同上。
    - 磁盘加密模式：这些模式专门用于加密文件系统抽象下的数据，一些成员：xex，xts，lrw。
- 认证加密

    为了防止填充 oracle 攻击和密文更改，可以在密文上计算消息认证码（MAC），只有在没有被篡改的情况下才解密。这称为 encrypt-then-mac，应该优先于任何其他顺序。除极少数用例外，真实性与机密性一样重要（后者是加密的目的）。经过身份验证的加密方案（带有关联数据（AEAD））将加密和身份验证的两个部分过程组合成一个块密码模式，该模式也会在过程中生成身份验证标记。在大多数情况下，这会提高速度。

    - CCM 是 CTR 模式和 CBC-MAC 的简单组合，每个块使用两个分组密码加密非常慢。
    - OCB 更快但受专利限制，但是，对于免费或非军事软件，专利持有人已经授予了免费许可。
    - GCM 是一种非常快速但可以说是复杂的 CTR 模式和 GHASH 的组合，是 Galois 字段上的 MAC，具有 2^128 个元素。

对称加密算法有两个过程，Cipher 和 Decipher，以 AES-256-GCM 算法为例演示对称加密与解密：

```
const crypto = require('crypto');

const text = 'Testing AES GCM mode';

const key = Buffer.from("yourpassword".repeat(32).substr(0, 32));
const iv = crypto.randomBytes(16);
const algorithm = 'aes-256-gcm';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(text, 'utf8', 'hex');
encrypted += cipher.final('hex');
const tag = cipher.getAuthTag();

const decipher = crypto.createDecipheriv(algorithm, key, iv);
decipher.setAuthTag(tag);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log({text, algorithm, encrypted, tag, key, iv, decrypted});
```


## HASH 摘要算法

通过 crypto.getHashes() 获取完整的哈希函数列表：

    | RSA-MD4        | blake2b512                         | sha1                        | sha512WithRSAEncryption |
    | RSA-MD5        | blake2s256                         | sha1WithRSAEncryption       | shake128                |
    | RSA-MDC2       | id-rsassa-pkcs1-v1_5-with-sha3-224 | sha224                      | shake256                |
    | RSA-RIPEMD160  | id-rsassa-pkcs1-v1_5-with-sha3-256 | sha224WithRSAEncryption     | sm3                     |
    | RSA-SHA1       | id-rsassa-pkcs1-v1_5-with-sha3-384 | sha256                      | sm3WithRSAEncryption    |
    | RSA-SHA1-2     | id-rsassa-pkcs1-v1_5-with-sha3-512 | sha256WithRSAEncryption     | ssl3-md5                |
    | RSA-SHA224     | md4                                | sha3-224                    | ssl3-sha1               |
    | RSA-SHA256     | md4WithRSAEncryption               | sha3-256                    | whirlpool               |
    | RSA-SHA3-224   | md5                                | sha3-384                    |                         |
    | RSA-SHA3-256   | md5-sha1                           | sha3-512                    |                         |
    | RSA-SHA3-384   | md5WithRSAEncryption               | sha384                      |                         |
    | RSA-SHA3-512   | mdc2                               | sha384WithRSAEncryption     |                         |
    | RSA-SHA384     | mdc2WithRSA                        | sha512                      |                         |
    | RSA-SHA512     | ripemd                             | sha512-224                  |                         |
    | RSA-SHA512/224 | ripemd160                          | sha512-224WithRSAEncryption |                         |
    | RSA-SHA512/256 | ripemd160WithRSA                   | sha512-256                  |                         |
    | RSA-SM3        | rmd160                             | sha512-256WithRSAEncryption |                         |

SHA-256 Hash 函数使用示范，按流式使用或直接调用摘要方法，每个 Hash 在执行 copy() 方法可以拷贝一个副本，这样多次执行摘要：

```
const crypto = require('crypto');
const hash = crypto.createHash('sha256');

// Example: Using Hash objects as streams
hash.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = hash.read();
  if (data) {
    console.log(data.toString('hex'));
  }
});

hash.write('some data to hash');
hash.end();

// Using the hash.update() and hash.digest() methods
hash.update('one');
console.log(hash.copy().digest('hex'));

hash.update('two');
console.log(hash.copy().digest('hex'));
```

PBKDF2 - Password-Based Key Derivation Function 应用一个伪随机函数以导出密钥，导出密钥的长度没有限制，但是，导出密钥的最大有效搜索空间受限于基本伪随机函数的结构。

由于哈希算法是单向的，能够将不论什么大小的数据转化为定长的“指纹”，并且无法被反向计算，非常适合那些不能以明文方式保存密钥的场景。

PBKDF2 简单而言就是多次计算 salted hash，这个次数是可选择的。如果计算一次所需要的时间是 1 微秒，那么计算 1 百万次就需要 1 秒钟。假如攻击一个密码所需的 rainbow table 有 1 千万条，建立对应的 rainbow table 就需要超过 115 天时间。

美国政府机构已经将这个方法标准化，并且用于一些政府和军方的系统。 这个方案最大的优点是标准化，实现容易同时采用了久经考验的 SHA 算法。

```
const crypto = require('crypto');

crypto.randomBytes(32, (err, salt) => {
  if (err) throw err;
    let iterations = 4096, keylen = 512, digest = 'sha256';
  crypto.pbkdf2("password", salt, iterations, keylen, digest, (err, key) => {
        if (err) throw err;
        console.log({secret: key.toString('hex'), salt: salt.toString('hex')});
  });
});
```

HMAC - Hash-based Message Authentication Code 是密钥相关的哈希运算消息认证码，由 H.Krawezyk，M.Bellare，R.Canetti 于 1996 年提出的一种基于 Hash 函数和密钥进行消息认证的方法，并于 1997 年作为 RFC2104 公布，在 IPSec 和其他网络协议，如 SSL 中得以广泛应用，现在已经成为事实上的 Internet 安全标准，可以与任何迭代散列函数捆绑使用。

HMAC 典型应用在 Challenge/Response 身份认证中，认证流程如下：

- 客户端向服务器发出一个验证请求。
- 服务器接到此请求后给客户端生成一个 challenge 随机数。
- 客户端将收到的随机数交由 ePass 与存储的密钥进行 HMAC-MD5 运算，并将结果作为认证证据 Response 传给服务器。
- 服务器也将 challenge 随机数与数据库中的客户密钥进行 HMAC-MD5 运算，再与客户端传回的响应比较，结果相同则认为客户端是一个合法用户。

USB Key 或 USB Token 主要是用作基于公钥体系（PKI）的数字证书和私钥的安全载体，形状类似 U 盘。

RSA 密钥对是在 USB Key 内生成的，私钥永远不能导出，确保证书持有人的信息安全。同时采用 Key+PIN 的双因子认证，保证数字证书和私钥的合法使用。所谓 Key+PIN 双因子认证是指：必须有 USB Key 插入计算机，并且同时验证 PIN 码后才能使用 Key 里的私钥进行签名。

OTP Token 动态令牌是一种便携的手持式动态密码计算和产生的电子产品。脱机使用，或与计算机相连。免除静态密码被截取、猜测、攻击和破解的隐患。可根据时间（Time），事件（Event），挑战/应答（Challenge/Response）等因素产生动态密码。

PIN - Personal Identification Number 个人识别密码。

示范使用 HMAC + SHA-256 进行哈希摘要：

```
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);
```


## PKI 公钥体系

在 PKI - Public Key Infrastructure 密码学应用中，基于 RSA 加密算法是最流行的，原理上 RSA 需要用到素数、互质数、模运算、指数运算等数学知识。

素数也就是质数，任意一个正整数都可以写成一系列质数的积，所以，选取任意两个大的素数计求积很容易，但要分解这个积极其困难，这是 RSA 算法的基本数学原理。

以下示范 RSA 算法的非对称加密、解密，签名与验证示范： 

```
const crypto = require('crypto');
const { generateKeyPairSync, publicEncrypt, privateDecrypt, createSign, createVerify } = crypto;

const options = {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki', // pkcs1 spki
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8', // pkcs1 pkcs8 sec1
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
};

// generateKeyPair('rsa', options, (err, publicKey, privateKey) => {
//   // Handle errors and use the generated key pair.
// });

let {privateKey, publicKey} = generateKeyPairSync('rsa', options);
let msg = "Hello RSA";
let keyset = {key: privateKey, passphrase: 'top secret'};
let pubset = {key: publicKey, passphrase: 'top secret'};
console.log({privateKey, publicKey})

const encryptData = publicEncrypt(pubset, Buffer.from(msg)).toString('base64');
console.log('publicEncrypt', {msg, encryptData});

const decryptData = privateDecrypt(keyset, Buffer.from(encryptData, 'base64'));
console.log('privateDecrypt', {msg, decryptData.toString()});

const signer = createSign('RSA-SHA256');
signer.update(msg);
signer.end();
const signature = signer.sign(keyset);

const verifier = createVerify('RSA-SHA256');
verifier.update(msg);
verifier.end();
const result = verifier.verify(publicKey, signature)

console.log({verify: result, signature: signature.toString("hex")});
```

以上使用公钥加密，私钥解密，而签名和验证就是用私钥加密，公钥解密。

在加密的使用场景中，肯定是不希望别人知道待加密的消息，并且只有私钥持有者才能解密。同理，对于签名与验证，那肯定是不希望有人冒充我发消息，只有私钥持有者才能发布这个签名，然后所有人都可以用公钥对签名进行验证。

KPI 体系设计中，私钥和公钥强度是不同的，私钥值更大，公钥值更小。也就是说，如果将私钥公开，而公钥保密，因为公钥更短所以更容易被破解。从技术上讲是可以的，但这不是安全的方案。


DH - Diffie-Hellman 是基于 PKI 体系的密钥交换安全协议，它可以让双方在不安全的信道上创建一个密钥。双方互相发送的数据就算被第三方知晓，也无法知道加密信息的密钥。

密钥交换流程：

1. Alice 与 Bob 协定使用 p=23 以及 g=5，实际应用中 p 是一个大质数。
2. Alice 选择一个秘密整数 a=6, 计算 A = g^a mod p = 5^6 mod 23 = 8 并发送给 Bob。  
3. Bob 也选择一个秘密整数 b=15, 计算 B = g^b mod p = 5^15 mod 23 = 19 并发送给 Alice 。  
4. Alice 计算 s = B^a mod p = 19^6 mod 23 = 2。
5. Bob 计算 s = A^b mod p  = 8^15 mod 23 = 2。

Diffie-Hellman 原理要点：

- 交换过程中涉及到的所有参与者定义一个组，在这个组中定义一个大质数 p，底数 g。
- 密钥交换是一个两部分的过程，首先 Alice 和 Bob 都需要一个私有的数字 a，b。
- 其次，双方要互相传递一个公开的 prime，攻击者即使被监听到也没有用，因为对于大质数，反向求解双方的秘密数字 a 或 b 是难题。

公共密钥 (g^b)^a=(g^a)^b，因为群是乘法交换的，涉及到数论及代数的内容。正确交换的前提是，Alice 必须确保对方是 Bob，无法抵御中间人攻击。DH 这种神奇的算法可以让你服务器和客户端在不传输该对称密钥的情况下就可以通过心有灵犀地方式各自计算出一个对称密钥，双方计算结果一样，避免了该密钥在网络上明文传输。


```
const crypto = require('crypto');
const assert = require('assert');

// Generate Alice's keys...
const alice = crypto.createDiffieHellman(512);
const aliceKey = alice.generateKeys();
let prime = alice.getPrime(), gen = alice.getGenerator()

// Generate Bob's keys...
const bob = crypto.createDiffieHellman(prime, gen);
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
```


椭圆曲线密码学 ECC - Elliptic curve cryptography 是一种建立公开密钥加密的算法，基于椭圆曲线数学，使用比 RSA 加密算法更小的密钥就可以提供相当的或更高等级的安全，因此同样安全等级 ECC 比 RSA 的性能更高。美国国家标准与技术局和 ANSI X9 设定的最小密钥长度的要求中，RSA、DSA 1024bit，ECC 160bit。

ECC 建立在基于椭圆曲线的离散对数问题上的密码体制，给定椭圆曲线上的一个点 P，一个整数 k，求解 Q=kP 很容易；给定一个点 P、Q，知道 Q=kP，求整数 k 是一个难题。

椭圆曲线乘法是一种密码学家称之为`陷阱门`的函数：在一个方向（乘法）很容易计算，而在相反的方向（除法）是不可能计算出来的。私钥的所有者可以容易地创建公钥，然后与世界共享，但没有人可以从公钥反向计算出私钥。 这个数学技巧成为证明比特币资金所有权不可伪造和安全的数字签名的基础。

其中 ECC 应用于数字签名，即`椭圆曲线数字签名算法` ECDSA - Elliptic Curve Digital Signature Algorithm 是一种无法伪造的数字签名算法。数字签名是一种数学方案 mathematical scheme，由两部分组成的：第一部分是使用私钥（签名密钥）从消息（交易）创建签名；第二部分是允许任何人依据给定的消息和公钥验证签名。

目前 OpenSSL 实现的 ECC 算法的套件支持 ECDSA/ECDH，目前看起来 ECC 是一个趋势，但还没有形成一个统一的全球标准，因其设计困难，实现复杂。

通过 crypto.getCurves() 获取完整的椭圆曲线算法列表：

    | Oakley-EC2N-3   | c2pnb163v1 | secp112r1 | wap-wsg-idm-ecid-wtls1  |
    | Oakley-EC2N-4   | c2pnb163v2 | secp112r2 | wap-wsg-idm-ecid-wtls10 |
    | SM2             | c2pnb163v3 | secp128r1 | wap-wsg-idm-ecid-wtls11 |
    | brainpoolP160r1 | c2pnb176v1 | secp128r2 | wap-wsg-idm-ecid-wtls12 |
    | brainpoolP160t1 | c2pnb208w1 | secp160k1 | wap-wsg-idm-ecid-wtls3  |
    | brainpoolP192r1 | c2pnb272w1 | secp160r1 | wap-wsg-idm-ecid-wtls4  |
    | brainpoolP192t1 | c2pnb304w1 | secp160r2 | wap-wsg-idm-ecid-wtls5  |
    | brainpoolP224r1 | c2pnb368w1 | secp192k1 | wap-wsg-idm-ecid-wtls6  |
    | brainpoolP224t1 | c2tnb191v1 | secp224k1 | wap-wsg-idm-ecid-wtls7  |
    | brainpoolP256r1 | c2tnb191v2 | secp224r1 | wap-wsg-idm-ecid-wtls8  |
    | brainpoolP256t1 | c2tnb191v3 | secp256k1 | wap-wsg-idm-ecid-wtls9  |
    | brainpoolP320r1 | c2tnb239v1 | secp384r1 |                         |
    | brainpoolP320t1 | c2tnb239v2 | secp521r1 |                         |
    | brainpoolP384r1 | c2tnb239v3 | sect113r1 |                         |
    | brainpoolP384t1 | c2tnb359v1 | sect113r2 |                         |
    | brainpoolP512r1 | c2tnb431r1 | sect131r1 |                         |
    | brainpoolP512t1 | prime192v1 | sect131r2 |                         |
    |                 | prime192v2 | sect163k1 |                         |
    |                 | prime192v3 | sect163r1 |                         |
    |                 | prime239v1 | sect163r2 |                         |
    |                 | prime239v2 | sect193r1 |                         |
    |                 | prime239v3 | sect193r2 |                         |
    |                 | prime256v1 | sect233k1 |                         |
    |                 |            | sect233r1 |                         |
    |                 |            | sect239k1 |                         |
    |                 |            | sect283k1 |                         |
    |                 |            | sect283r1 |                         |
    |                 |            | sect409k1 |                         |
    |                 |            | sect409r1 |                         |
    |                 |            | sect571k1 |                         |
    |                 |            | sect571r1 |                         |


ECDH - Elliptic Curve Diffie-Hellman 则是结合了 ECC 的密钥交换协议，交换双方可以在不共享任何秘密的情况下协商出一个密钥。

密钥磋商过程如下，假设密钥交换双方为 Alice、Bob，共享三个曲线参数，椭圆曲线 E、阶 N、基点 G：

- Alice 生成随机整数 a，计算 `A=(a*G)`，生成 Alice 公钥；
- Bob 生成随机整数 b，计算 `B=(b*G)`，生成 Bob 公钥；
- Alice 和 Bob 互换 A 和 B，传递可以公开，由于椭圆曲线的离散对数问题难题，所以攻击者不能通过 G 计算出各自的随机数。
- Bob 收到 Alice 传递的 A，计算 `Q=(b*A)`，Bob 通过自己的私钥和 Alice 的公钥得到对称密钥 Q。
- Alice 收到 Bob 传递的 B，计算 `Q=(a*B)`，Alice 通过自己的私钥和 Bob 的公钥得到对称密钥 Q。

Alice、Bob 双方即得 Q = b×A = b×(a×G) = (b×a)×G = (a×b)×G = a×(b×G) = a×B = Q' (交换律和结合律)，即双方得到一致的密钥Q。

```
const crypto = require('crypto');
const assert = require('assert');

// Generate Alice's keys...
const alice = crypto.createECDH('secp521r1');
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = crypto.createECDH('secp521r1');
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
```

国密算法是国家密码管理局制定的自主可控的国产算法，包括 SM1、SM2、SM3 、SM4、SM7、SM9、祖冲之密码算法（ZUC)等。在金融领域目前主要使用公开的 SM2、SM3、SM4 三种商用密码算法，分别为非对称加密算法、哈希算法和对称加密算法。

SM2 算法和 RSA 算法都是公钥密码算法，但是，基于椭圆曲线离散对数问题理论的 SM2 算法更先进安全，密码复杂度高、处理速度快、机器性能消耗更小，在我们国家商用密码体系中被用来替换 RSA 算法。因为，随着密码技术和计算机技术的发展，目前常用的 1024bit RSA 算法面临严重的安全威胁。从算法上说，SM2 就是设计了一根新的椭圆曲线。

国密中值得我们关注的主要除了 SM1 以外的公开算法：

- SM1 为对称加密，分组密码算法，分组长度、密钥长度都为 128 比特。加密强度与 AES 相当，该算法不公开，仅以 IP 核的形式存在于芯片中。
- SM2 基于椭圆曲线密码（ECC）的公钥密码算法标准，提供数字签名，密钥交换，公钥加密，用于替换 RSA/ECDSA/ECDH 等国际算法。
- SM3 消息摘要算法，哈希结果为256 bits，用于替换MD5/SHA1/SHA256等国际算法。
- SM4 对称加密算法，密钥长度和分组长度均为128 bits，主要用于无线局域网标准，用于替换 DES/AES 等算法。
- 国密证书：这里的国密证书指的是使用国密算法（SM2-with-SM3）的标准X509格式证书，证书使用SM3作为哈希算法，使用SM2作为数字签名算法。
- 国密 SSL：采用国密算法，符合国密标准的安全传输协议，也就是 SSL/TLS 协议的国密版本。

以下示范 Node 环境下通过 ECDH 密钥交换协议来使用 SM2 算法：

```
const crypto = require('crypto');

const alice = crypto.createECDH('SM2');
const bob = crypto.createECDH('SM2');

// This is a shortcut way of specifying one of Alice's previous private
// keys. It would be unwise to use such a predictable private key in a real
// application.
alice.setPrivateKey(
  crypto.createHash('sha256').update('secret', 'utf8').digest()
);
// bob.setPrivateKey(
//   crypto.createHash('sha256').update('secret2', 'utf8').digest()
// );

// Bob uses a newly generated cryptographically strong pseudorandom key pair
bob.generateKeys();
// alice.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'base64');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'base64');

// aliceSecret and bobSecret should be the same shared secret value
console.log({
  alice_secret: aliceSecret, 
  bob_secret: bobSecret, 
  bob_pub: bob.getPublicKey("base64", "compressed"), 
  bob_key: bob.getPrivateKey("base64"),
  alice_pub: alice.getPublicKey("base64", "compressed"), 
  alice_key: alice.getPrivateKey("base64"),
});
```

## MITM 中间人攻击
- HTTP Strict Transport Security (HSTS) https://tools.ietf.org/html/rfc6797

MITM - Man-in-the-middle-attacks 中间人攻击, 是一种电脑黑客的攻击模式。

例如在 client 发出的请求、Web server 返回数据之间，布置一个代理服务器 proxy server 进行转发, 这个 proxy server 就起到了一个 middle man 的作用。如 Fiddler 或 Charles 这类软件就可以充当这个中间人，通过代理设置，在菜单 Tools --> Fiddler Options --> Connections 就可以打开 Fiddler 的抓包功能。Fiddler 会自动设置 WinINET，将网络请求流量路由到 Fiddler 的代理服务器上来。

通过中间人代理，可以捕获 HTTPS 这样的基于 PKI 体系的加密系统的消息，客户端请求先经过中间人，再由中间人和服务器对接，这种模式称为`在线中间人攻击`。

`离线中间人攻击`模式，例如：某中间人成功截获了消息，对其进行修改，然后将新的内容发回给发件人或收件人，而当此人在不知情的情况下回复时，该中间人便可继续截获并阅读原本通信双方互发的信息。由于双方并非面对面通信，因此信息即使被截获和窃取，他们都不得而知。

总的说来，中间人攻击手段可以有但不仅限以下这些：

- Wi-Fi 欺骗：攻击者可以创建与本地免费 Wi-Fi 同名的虚假 Wi-Fi 接入点(AP)。
- HTTPS 欺骗：攻击者通过欺骗您的浏览器，使您认为自己访问的是可信任站点。
- SSL 劫持：浏览器访问站点，可能会从 HTTP 重定向到 HTTPS，这个过程可以被攻击者劫持，并且跳转到钓鱼站点，进而窃取您的敏感数据、以及输入的所有信任凭据。
- DNS 欺骗：通常访问服务器通过域名系统而不是 IP 地址，然而，提供域名转 IP 服务的 DNS 可能被攻击，从而导致客户端访问的是伪造的地址。
- 电子邮件劫持：如果攻击者获得了受信任机构(例如银行)的邮箱、甚至是邮件服务器的访问权限，那么他们就能够拦截包含敏感信息的客户电子邮件，甚至以该机构的身份发送各种电子邮件。


简单来讲就是，浏览器向网站发起一次HTTP请求，在得到一个重定向响应后，发起一次HTTPS请求并得到最终的响应内容。所有的这一切对用户而言是完全透明的，所以在用户眼里看来，在浏览器里直接输入域名却依然可以用HTTPS协议和网站进行安全的通信，是个不错的用户体验。

HTTPS 能够防止基本的中间人攻击，但是面对 SSLStrip 类型的中间人攻击，浏览器会被降级在 HTTP 模式。

为了应对 SSLStrip 协议降级攻击，可以采用 HSTS - HTTP Strict Transport Security，它能够强制要求 Web 服务器与所有用户仅仅使用 HTTPS 进行交互。

当然，HSTS 并非能够一直奏效，用户首次访问时还处于 HTTP 模式，然后才可以进行 HSTS 配置。因此，这种短暂的过程仍然会给 SSLStrip 攻击留下较短的时间窗口：

- 第1步：浏览器发起一次 HTTP 明文请求，但实际上会被攻击者拦截下来；
- 第2步：攻击者作为代理，把当前请求转发给钓鱼网站；
- 第3步：钓鱼网站返回假冒的网页内容；
- 第4步：攻击者把假冒的网页内容返回给浏览器；

HSTS 最为核心的是一个 HTTP Response Header：

    Strict-Transport-Security: <max-age=>[; includeSubDomains][; preload]

- `max-age` 是必选参数，是一个以秒为单位的数值，它代表着 HSTS Header 的过期时间，如设置为 1 年即 31536000 秒。
- `includeSubDomains` 如果包含它，则意味着当前域名及其子域名均开启 HSTS 保护。
- `preload` 使用浏览器内置的域名列表。

正是它可以让浏览器得知，在接下来的一段时间内，当前域名只能通过 HTTPS 进行访问，并且在浏览器发现当前连接不安全的情况下，强制拒绝用户的后续访问要求。

虽然 HSTS 可以很好的解决 HTTPS 降级攻击，但是对于 HSTS 生效前的首次 HTTP 请求，依然无法避免被劫持。

浏览器厂商们为了解决这个问题，提出了 HSTS Preload List 方案：内置一份可以定期更新的列表，对于列表中的域名，即使用户之前没有访问过，也会使用 HTTPS 协议。

目前这个 Preload List 由 Google Chrome 维护，Chrome、Firefox、Safari、IE 11 和 Microsoft Edge 都在使用。

如果要想把自己的域名加进这个列表，首先需要满足以下条件：

- 拥有合法的证书，如果使用 SHA-1 证书，过期时间必须早于 2016 年；
- 将所有 HTTP 流量重定向到 HTTPS；
- 确保所有子域名都启用了 HTTPS；
- 输出 HSTS 响应头：
- max-age 不能低于 18 周(10886400秒)；
- 必须指定 includeSubdomains 参数；
- 必须指定 preload 参数；

即便满足了上述所有条件，也不一定能进入 HSTS Preload List，更多信息可以查看：https://hstspreload.org/。

通过 chrome://net-internals/#hsts 可以查询某个网站是否在列表之中，还可以手动把某个域名加到本机 Preload List。

虽然 Preload List 可以让防御更深一层，但它也不是万能的。



## Crypto API 参考

- Static
    - crypto.constants
    - crypto.DEFAULT_ENCODING
    - crypto.fips
    - crypto.createCipher(algorithm, password[, options])
    - crypto.createCipheriv(algorithm, key, iv[, options])
    - crypto.createDecipher(algorithm, password[, options])
    - crypto.createDecipheriv(algorithm, key, iv[, options])
    - crypto.createDiffieHellman(prime[, primeEncoding][, generator][, generatorEncoding])
    - crypto.createDiffieHellman(primeLength[, generator])
    - crypto.createDiffieHellmanGroup(name)
    - crypto.createECDH(curveName)
    - crypto.createHash(algorithm[, options])
    - crypto.createHmac(algorithm, key[, options])
    - crypto.createPrivateKey(key)
    - crypto.createPublicKey(key)
    - crypto.createSecretKey(key)
    - crypto.createSign(algorithm[, options])
    - crypto.createVerify(algorithm[, options])
    - crypto.diffieHellman(options)
    - crypto.generateKeyPair(type, options, callback)
    - crypto.generateKeyPairSync(type, options)
    - crypto.getCiphers()
    - crypto.getCurves()
    - crypto.getDiffieHellman(groupName)
    - crypto.getFips()
    - crypto.getHashes()
    - crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)
    - crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
    - crypto.privateDecrypt(privateKey, buffer)
    - crypto.privateEncrypt(privateKey, buffer)
    - crypto.publicDecrypt(key, buffer)
    - crypto.publicEncrypt(key, buffer)
    - crypto.randomBytes(size[, callback])
    - crypto.randomFillSync(buffer[, offset][, size])
    - crypto.randomFill(buffer[, offset][, size], callback)
    - crypto.randomInt([min, ]max[, callback])
    - crypto.scrypt(password, salt, keylen[, options], callback)
    - crypto.scryptSync(password, salt, keylen[, options])
    - crypto.setEngine(engine[, flags])
    - crypto.setFips(bool)
    - crypto.sign(algorithm, data, key)
    - crypto.timingSafeEqual(a, b)
    - crypto.verify(algorithm, data, key, signature)

- Class: Certificate
    - Certificate.exportChallenge(spkac)
    - Certificate.exportPublicKey(spkac[, encoding])
    - Certificate.verifySpkac(spkac)
    - Legacy API
        - new crypto.Certificate()
        - certificate.exportChallenge(spkac)
        - certificate.exportPublicKey(spkac)
        - certificate.verifySpkac(spkac)

- Class: Cipher
    - cipher.final([outputEncoding])
    - cipher.setAAD(buffer[, options])
    - cipher.getAuthTag()
    - cipher.setAutoPadding([autoPadding])
    - cipher.update(data[, inputEncoding][, outputEncoding])

- Class: Decipher
    - decipher.final([outputEncoding])
    - decipher.setAAD(buffer[, options])
    - decipher.setAuthTag(buffer)
    - decipher.setAutoPadding([autoPadding])
    - decipher.update(data[, inputEncoding][, outputEncoding])

- Class: DiffieHellman
    - diffieHellman.computeSecret(otherPublicKey[, inputEncoding][, outputEncoding])
    - diffieHellman.generateKeys([encoding])
    - diffieHellman.getGenerator([encoding])
    - diffieHellman.getPrime([encoding])
    - diffieHellman.getPrivateKey([encoding])
    - diffieHellman.getPublicKey([encoding])
    - diffieHellman.setPrivateKey(privateKey[, encoding])
    - diffieHellman.setPublicKey(publicKey[, encoding])
    - diffieHellman.verifyError

- Class: DiffieHellmanGroup
- Class: ECDH
    - Static method: ECDH.convertKey(key, curve[, inputEncoding[, outputEncoding[, format]]])
    - ecdh.computeSecret(otherPublicKey[, inputEncoding][, outputEncoding])
    - ecdh.generateKeys([encoding[, format]])
    - ecdh.getPrivateKey([encoding])
    - ecdh.getPublicKey([encoding][, format])
    - ecdh.setPrivateKey(privateKey[, encoding])
    - ecdh.setPublicKey(publicKey[, encoding])

- Class: Hash
    - hash.copy([options])
    - hash.digest([encoding])
    - hash.update(data[, inputEncoding])

- Class: Hmac
    - hmac.digest([encoding])
    - hmac.update(data[, inputEncoding])

- Class: KeyObject
    - keyObject.asymmetricKeyType
    - keyObject.export([options])
    - keyObject.symmetricKeySize
    - keyObject.type

- Class: Sign
    - sign.sign(privateKey[, outputEncoding])
    - sign.update(data[, inputEncoding])

- Class: Verify
    - verify.update(data[, inputEncoding])
    - verify.verify(object, signature[, signatureEncoding])


# 🚩 TLS/SSL 安全传输层
- https://nodejs.org/docs/latest-v14.x/api/tls.html

TLS - Transport Layer Security 和 SSL - Secure Socket Layer 是基于 PKI 体系的安全协议，是 HTTPS 的基础，基于 OpenSSL 开源框架之上实现。

在开始测试中，通常需要生成自签名证书供站点使用，以下使用 OpenSSL 命令行生成密钥对、自签证书：

    # 1. generate a 2048-bit RSA private key:
    openssl genrsa -out ryans-key.pem 2048

    # 2. create a Certificate Signing Request (CSR) file.
    openssl req -new -sha256 -key ryans-key.pem -out ryans-csr.pem

    # 3. a Certificate Authority for signing or used to generate a self-signed certificate.
    openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem

    # 4. generate a .pfx or .p12 file:
    openssl pkcs12 -export -in ryans-cert.pem -inkey ryans-key.pem -certfile ca-cert.pem -out ryans.pfx

命令行中的参数解析：

- `in`: 输入已签名的证书；
- `inkey`: 关联的私钥；
- `certfile`: 串连所有 CA - Certificate Authority 颁发的证书到一个证书文件，如 cat ca1-cert.pem ca2-cert.pem > ca-cert.pem

    - TLS/SSL concepts
    - Perfect forward secrecy
    - ALPN and SNI
    - Pre-shared keys
    - Client-initiated renegotiation attack mitigation
    - Session resumption
    - Session identifiers
    - Session tickets
    - Modifying the default TLS cipher suite

示范 TLS Server：

```
const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),

  // This is necessary only if using client certificate authentication.
  requestCert: true,

  // This is necessary only if the client uses a self-signed certificate.
  ca: [ fs.readFileSync('client-cert.pem') ]
};

const server = tls.createServer(options, (socket) => {
  console.log('server connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  socket.write('welcome!\n');
  socket.setEncoding('utf8');
  socket.pipe(socket);
});
server.listen(8000, () => {
  console.log('server bound');
});
```

示范 TLS Client：

```
// Assumes an echo server that is listening on port 8000.
const tls = require('tls');
const fs = require('fs');

const options = {
  // Necessary only if the server requires client certificate authentication.
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem'),

  // Necessary only if the server uses a self-signed certificate.
  ca: [ fs.readFileSync('server-cert.pem') ],

  // Necessary only if the server's cert isn't for "localhost".
  checkServerIdentity: () => { return null; },
};

const socket = tls.connect(8000, options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});
socket.setEncoding('utf8');
socket.on('data', (data) => {
  console.log(data);
});
socket.on('end', () => {
  console.log('server ends connection');
});
```


TLS (SSL) API 参考

- Class: tls.CryptoStream ⛔

- Class: tls.SecurePair ⛔

- Class: tls.Server
    - Event: 'connection'
    - Event: 'keylog'
    - Event: 'newSession'
    - Event: 'OCSPRequest'
    - Event: 'resumeSession'
    - Event: 'secureConnection'
    - Event: 'tlsClientError'
    - server.addContext(hostname, context)
    - server.address()
    - server.close([callback])
    - server.connections
    - server.getTicketKeys()
    - server.listen()
    - server.setSecureContext(options)
    - server.setTicketKeys(keys)

- Class: tls.TLSSocket
    - new tls.TLSSocket(socket[, options])
    - Event: 'keylog'
    - Event: 'OCSPResponse'
    - Event: 'secureConnect'
    - Event: 'session'
    - tlsSocket.address()
    - tlsSocket.authorizationError
    - tlsSocket.authorized
    - tlsSocket.disableRenegotiation()
    - tlsSocket.enableTrace()
    - tlsSocket.encrypted
    - tlsSocket.getCertificate()
    - tlsSocket.getCipher()
    - tlsSocket.getEphemeralKeyInfo()
    - tlsSocket.getFinished()
    - tlsSocket.getPeerCertificate([detailed])
    - tlsSocket.getPeerFinished()
    - tlsSocket.getProtocol()
    - tlsSocket.getSession()
    - tlsSocket.getSharedSigalgs()
    - tlsSocket.exportKeyingMaterial(length, label[, context])
    - tlsSocket.getTLSTicket()
    - tlsSocket.isSessionReused()
    - tlsSocket.localAddress
    - tlsSocket.localPort
    - tlsSocket.remoteAddress
    - tlsSocket.remoteFamily
    - tlsSocket.remotePort
    - tlsSocket.renegotiate(options, callback)
    - tlsSocket.setMaxSendFragment(size)
    - tls.checkServerIdentity(hostname, cert)

- Static
    - tls.connect(options[, callback])
    - tls.connect(path[, options][, callback])
    - tls.connect(port[, host][, options][, callback])
    - tls.createSecureContext([options])
    - tls.createSecurePair([context][, isServer][, requestCert][, rejectUnauthorized][, options])
    - tls.createServer([options][, secureConnectionListener])
    - tls.getCiphers()
    - tls.rootCertificates
    - tls.DEFAULT_ECDH_CURVE
    - tls.DEFAULT_MAX_VERSION
    - tls.DEFAULT_MIN_VERSION


# 🚩 TTY 终端文件
- https://nodejs.org/docs/latest-v14.x/api/tty.html
- https://docs.microsoft.com/en-us/windows/console/setconsoletextattribute

当 Node.js 检测到它被运行时附加了一个文本终端（TTY），则默认情况下，process.stdin 会被初始化为 tty.ReadStream 的实例，process.stdout 和 process.stderr 会被初始化为 tty.WriteStream 的实例。

判断 Node.js 是否被运行在一个 TTY 上下文中的首选方法是检查 process.stdout.isTTY 属性的值是否为 true：

    $ node -p -e "Boolean(process.stdout.isTTY)"
    true
    $ node -p -e "Boolean(process.stdout.isTTY)" | cat
    false

在大多数情况下，应用程序几乎没有理由手动地创建 tty.ReadStream 和 tty.WriteStream 类的实例。

tty 理解为终端，tty 模块提供终端相关的接口，用来获取终端的行数列数等。

早期，电脑是大型主机，不像现代电脑一样方便操作。通常需要通过终端设备进行远程操作，而`终端控制符`的出现是因为，早期计算机设备用户都会通过网络访问一台公用主机，而用户手中只有一台显示器和输入设备。但不同的显示器与键盘硬件上互不兼容，这就导致显示的内容可能会不一致。此时就会导致非常多的问题，所以当时出现了终端控制符这种协议。事实上协议非常多，但是后来用的最多的是 vt100。

控制选项说明 
 
    \33[0m 关闭所有属性 
    \33[1m 设置高亮度 
    \33[4m 下划线 
    \33[5m 闪烁 
    \33[7m 反显 
    \33[8m 消隐 
    \33[30m — \33[37m 设置前景色 
    \33[40m — \33[47m 设置背景色 
    \33[nA 光标上移n行 
    \33[nB 光标下移n行 
    \33[nC 光标右移n行 
    \33[nD 光标左移n行 
    \33[y;xH 设置光标位置 
    \33[2J 清屏 
    \33[K 清除从光标到行尾的内容 
    \33[s 保存光标位置 
    \33[u 恢复光标位置 
    \33[?25l 隐藏光标 

到后来，操作系统中对终端进行模拟，这就是我们现在所说的模拟终端，模拟终端中依然支持这些终端控制符。

如，我们常用的 clear 清屏命令，事实上就是被转换为一组内容为 `\33[2J` 的控制符，与此同时更多的控制符可以执行颜色设置，简单绘图等多种命令。

在 Node 程序中，清屏只需执行如下代码即可：

    console.log("\33[2J");

Linux 终端中的颜色是用转义序列控制的，转义序列以 ESC 开头，可以用八进制 \033 或十进制 27，十六进行制 0x1b 表示 ESC 的 ASCII 码，其格式为：

    \033[显示方式;前景色;背景色m 显示内容 \033[0m

显示方式、前景色、背景色至少一个存在即可，位置可随意。Linux 系统中，可以使用 printf 命令：

    printf "\033[1;45;33m HELLO_WORLD \033[0m\n"

    printf ("\033[1;45;33m HELLO_WORLD \033[0m\n");

    前景色            背景色             颜色
     ---------------------------------------
     30                40               黑色
     31                41               红色
     32                42               绿色
     33                43               黃色
     34                44               蓝色
     35                45               紫红色
     36                46               青蓝色
     37                47               白色
    显示方式            意义
     -------------------------
     0                终端默认设置
     1                高亮显示
     4                使用下划线
     5                闪烁
     7                反白显示
     8                不可见
    nA   光标上移n行
    nB   光标下移n行
    nC   光标右移n行
    nD   光标左移n行

示范，终端字符动画：

```
var process = require('process');
var tty = require('tty');

if(!process.stdout.isTTY) {
  return console.log('No TTY available', process.stdout.isTTY);
}

var ws = new tty.WriteStream(process.stdout.fd);
var width = ws.columns;

var head = "|";
var foot = "%";
var progress = "";
var num = 0;

function spin()
{
    foot = num + "%";
    var len = width - head.length - foot.length - 1;
    var p = Math.ceil( num / 100 * len );
  progress = "";
    for(var i=0; i<len; i++)
    {
    progress += ( i<=p )? "=":" ";
    }
    process.stdout.write(head+progress+foot+"\33[K\r");
    num+=5;
    if( num>100 )
    {
        process.stdout.write("\33[K\r");
        process.exit(0);
    }
}

setInterval(spin,500);
```

也可以使用现成的 progress 模块：

```
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
```



TTY API

- Class: tty.ReadStream
    - readStream.isRaw
    - readStream.isTTY
    - readStream.setRawMode(mode)

- Class: tty.WriteStream
    - Event: 'resize'
    - writeStream.clearLine(dir[, callback])
    - writeStream.clearScreenDown([callback])
    - writeStream.columns
    - writeStream.cursorTo(x[, y][, callback])
    - writeStream.getColorDepth([env])
    - writeStream.getWindowSize()
    - writeStream.hasColors([count][, env])
    - writeStream.isTTY
    - writeStream.moveCursor(dx, dy[, callback])
    - writeStream.rows
    - tty.isatty(fd)


# 🚩 Readline 读取行
- https://nodejs.org/api/readline.html
- https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
- 命令行交互模块 https://github.com/SBoudrias/Inquirer.js

读入数据：

```
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})
```

或者使用 inquirer 模块，这是功能非常完善的控制台输入模块，许多框架的脚手架都用到它：

```
const inquirer = require('inquirer')

var questions = [
  { type: 'input', name: 'name', message: "What's your name?" },
  { 
    type: 'rawlist', 
    name: 'years', 
    message: "When was PRC founded?", 
    choices: [ "1945", new inquirer.Separator(), "1949", new inquirer.Separator(), "1955" ]
  },
  {
    type: 'checkbox',
    name: 'favor',
    message: "What's your favor?",
    choices: [ "Azure", new inquirer.Separator(), "Blue Violet" ]
  },
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`, answers)
})
```

逐行读取，也可以使用 line 事件：

```
const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine();
```

Readline API

- Class: Interface
    - Event: 'close'
    - Event: 'line'
    - Event: 'history'
    - Event: 'pause'
    - Event: 'resume'
    - Event: 'SIGCONT'
    - Event: 'SIGINT'
    - Event: 'SIGTSTP'
    - rl.close()
    - rl.pause()
    - rl.prompt([preserveCursor])
    - rl.question(query[, options], callback)
    - rl.resume()
    - rl.setPrompt(prompt)
    - rl.getPrompt()
    - rl.write(data[, key])
    - rl[Symbol.asyncIterator]()
    - rl.line
    - rl.cursor
    - rl.getCursorPos()
    - readline.clearLine(stream, dir[, callback])
    - readline.clearScreenDown(stream[, callback])
    - readline.createInterface(options)
    - Use of the completer function
    - readline.cursorTo(stream, x[, y][, callback])
    - readline.emitKeypressEvents(stream[, interface])
    - readline.moveCursor(stream, dx, dy[, callback])



# 🚩 Stream 流对象
- https://nodejs.org/docs/latest-v12.x/api/stream.html
- https://nodejs.org/docs/latest-v14.x/api/stream.html
- https://nodejs.org/en/docs/guides/backpressuring-in-streams/

流模块是 Node 非常核心又底层的模块，到处都有流对象的应用。

有四种 stream 类型：

- Readable 用来读取数据，数据读取就像你用吸管喝可乐的过程，可乐是数据，你就是数据消费者。
- Writable 用来写数据，数据写入就像用一个水桶接水龙头的水的过程，水流进水桶就是写入数据。
- Duplex 可读写流，比如 net.Socket()。
- Transform 在读写的过程中，可以对数据进行修改，比如数据压缩/解压 zlib.createDeflate()。

常见的 Readable ：

- HTTP responses, on the client
- HTTP requests, on the server
- http.IncomingRequest
- fs read streams
- child process stdout and stderr
- process.stdin

常见的 Writable：

- HTTP requests, on the client
- HTTP responses, on the server
- fs write streams
- child process stdin
- process.stdout, process.stderr

Duplex streams include:

- TCP sockets
- zlib streams - Transform stream
- crypto streams - Transform stream

比如从文件创建流 fs.createReadStream() fs.createWriteStream()。

最常见的 Duplex stream 应该就是 net.Socket 实例，可以参考相关模块文档。

Transform stream 是 Duplex stream 的特例，它们都实现了 Readable & Writable 接口，同时可读可写，区别在于 Transform stream 的输出与输入是存在相关性的。

例如使用 gzip 压缩文件：

```
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./extra/test.txt');
var out = fs.createWriteStream('./extra/test.txt.gz');

inFile.pipe(gzip).pipe(out);
```

流的核心方法：

    |                    Use-case                   |   Class   |          Method(s) to implement          |
    |-----------------------------------------------|-----------|------------------------------------------|
    | Reading only                                  | Readable  | _read()                                  |
    | Writing only                                  | Writable  | _write(), _writev(), _final()            |
    | Reading and writing                           | Duplex    | _read(),  _write(),  _writev(), _final() |
    | Operate on written data, then read the result | Transform | _transform(), _flush(), _final()         |

Node 创建的所有流都只对字符串和 `Buffer` 或 `Uint8Array` 对象进行操作。如果与其他 JavaScript 类型的值一起工作，有特殊用途的 null 除外，这样的流被认为是在 Object mode 下操作。创建流时，使用 `objectMode` 选项设置流实例为对象模式，尝试将现有流切换到对象模式是不安全的。

处于 object mode 的流，可以操作其它 JavaScript 值：

- Readable stream 调用 stream.read(size) 总会返回单个项目，无论是什么参数，而不是 Buffer 元素数量。
- Writable stream 可以写任意数据，总会忽略传给 stream.write(data, encoding) 的 encoding 参数。


`Readable` 对象主要事件：

- `data` 事件会在流将数据传递给消费者时触发；
- `end` 事件将在流中再没有数据可供消费时触发；
- `readable` 表明流有了新的动态，要么是有了新的数据，要么是到了流的尾部。在某些情况下，为 readable 事件附加一个侦听器会导致一些数据被读入内部缓冲区，可能会在开始时读取到 null。

`Writable` 对象主要事件：

- `drain` 数据排空事件，表示可以缓冲区再次接收数据写入。
- `pipe` 表示 `Readable` 执行了 pipe() 方法写入数据。


`Readable` 有两种模式：

- `flowing` 模式下 `Readable` 可自动从资源读取数据；
- `pause` 模式下需要显式调用 stream.read() 方法来读取数据；

`pause` 模式下可读流有三种状态，根据 `readable._readableState.flowing` 属性判断：

- flowing = null 目前没有数据消费者，所以不会从资源库中读取数据；
- flowing = false 暂停从资源库读取数据，readable.pause()， readable.unpipe()，或者接收 back pressure 可转换到此状态；
- flowing = true 正在从资源库中读取数据，监听 'data' 事件，调用 readable.pipe() 或者 readable.resume() 方法可转换到此状态；

`Readable` 数据流并不是直接流向消费者，而是先 push 到缓存池，缓存池就像一个空的水桶，消费者通过管口接水。同时，资源池就像有一个水泵，不断地往水桶中泵水，而 `highWaterMark` 是水桶的浮标，达到阈值就停止蓄水，再 push 的时候会返回 false，从而控制读取数据流的速度。如同水管上的阀门，当水管面装满了水，就暂时关上阀门，不再从资源里抽水出来。

什么场景下会出现这种情况呢？

- 消费者主动执行了 .pause()；
- 消费速度比数据 push() 数据速度慢；

setEncoding 设置读取时的解码编码，而不是 Buffer 对象数据的编码。

数据消费者可以主动调用 read([size]) 方法从缓存池取出数据，并且可以带上 size 参数，用多少就取多少，但是数据需要在 readable 事件触发后才可读取。

有些情况下，需要触发底层可读流机制的刷新，而不实际消耗任何数据，在这种情况下，可以执行 `read(0)`，它将始终返回 null。

将零字节字符串、Buffer 或 Uint8Array 推送到非对象模式的流中有一个有趣的副作用，因为 `push('')` 将结束读取过程。但是，由于参数是空字符串，因此不会将任何数据添加到可读缓冲区中，因此用户无需消费任何数据。

使用 `pipe()` 方法可以直接将数据流直接导入 `Writable`，就像是联通器，直接读取 `Readable` 数据并写入 `Writable`，并且会触发其 pipe 事件。

参考 `pipe()` 方法源代码：

    Readable.prototype.pipe = function(writable, options) {
      this.on('data', (chunk) => {
        let ok = writable.write(chunk);
        if(!ok) this.pause();
      });
      writable.on('drain', () => {
        this.resume();
      });
      writable.emit('pipe', this);
      return writable;
    };

它根据 `Writable` 是不处于排空状态来写入数据，如果写入过快就执行 `pause()` 暂停写入，同时停止 data 事件，等待 writable 的排空事件再恢复写入。

执行 Writable stream.write(chunk) 返回 false 缓冲区已满，需要等待 drain 事件触发，这个事件表示数据已经抽干，可以再写入数据。

整个 pipe() 流程就是 backpressuring in streams 机制，如果没有回压机制，系统将会出现如下的问题：

- 内存溢出；
- 其他进程变得缓慢；
- 垃圾收集器将超负荷运作；


以下综合演示这些 API 的使用：

```
const { Readable, Writable } = require('stream');
const { createWriteStream } = require('fs');

class Alphabet extends Readable{
    constructor(dataSource, options){
        super(options)
        this.dataSource = dataSource
    }
    // override super method
    _read(){
        const data = this.dataSource.makeData()
        this.push(data)
    }
}

const dataSource = {
    data: 'abcdefghijklmnopqrstuvwxyz'.split(/(?=\w)/g),
    makeData: function(){
      return (!this.data.length)? null : this.data.shift()
    }
}

const alphabet = new Alphabet(dataSource);
alphabet.setEncoding('utf8');

process.stdout.on("pipe", (src)=>{
  console.log('on pipe: src is Alphabet? ', src instanceof Alphabet);
  alphabet.unpipe(process.stdout);
});
alphabet.pipe(process.stdout);
alphabet.pipe(createWriteStream('alphabet.txt'));

alphabet.once('readable', ()=>{
  alphabet.read(0); // read out null
  console.log('read abc:', alphabet.read(3));
  alphabet.removeListener
});

alphabet.on('data', (chunk) => {
  console.log(' <on data>:', chunk);
});
```

都知道 Node API 都是按异步 I/O 框架实现的，对比一下以下两种 Server 实现方式：

```
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  // fs.readFile() read all data then put it into response.
  fs.readFile(__dirname + '/alphabet.txt',function(err, data){
    res.end(data);
  });

  // use Readable to stream out data flow.
  var stream = fs.createReadStream(__filename);
  stream.pipe(res);
}).listen(3000);
```

通过测试可以发现，stream 方式的内容会更优先返回给客户端，这是因为流行更有效率，结合 zlib 模块还可以给客户端返回 gzip 数据，节省带宽。`pipe()` 方法会自动监听 data 和 end 事件。上面的代码会将文件每一个小段数据都源源不断的发送到客户端。除此之外，流式数据处理还可以降低后台压力，客户端连接缓慢的时候 Node 可以相应减少缓存数据的处理。

如果使用文件方式，在每次请求的时候，都会先读取整个文件的内容到内存中，然后再返回给客户端。特别是对于大尺寸文件，消耗内存会更明显，同时等待文件读入内存这个过程的用户体验不好。

而流式处理则完全没有这样的问题，它是一种随读随用的数据处理方式。打个非常恰当的比方，流式数据就像水管里的水，想喝就拧开。而文件 API 读取则相当提个着水桶去水井打水喝。


可以与异步生成器结合：

```
const { Readable } = require('stream');

async function * generate() {
  yield 'a';
  yield 'b';
  yield 'c';
}

const readable = Readable.from(generate());

readable.on('data', (chunk) => {
  console.log(chunk);
});
```

Piping to writable streams from async iterators

```
const { pipeline } = require('stream');
const util = require('util');
const fs = require('fs');

const writable = fs.createWriteStream('./file');

// Callback Pattern
pipeline(iterator, writable, (err, value) => {
  if (err) {
    console.error(err);
  } else {
    console.log(value, 'value returned');
  }
});

// Promise Pattern
const pipelinePromise = util.promisify(pipeline);
pipelinePromise(iterator, writable)
  .then((value) => {
    console.log(value, 'value returned');
  })
  .catch(console.error);
```

在过去的 Node.js 中，处理 stream 是非常麻烦的，举个例子：

    source.pipe(a).pipe(b).pipe(c).pipe(dest)

一旦其中 source、a、b、c、dest 中，有任何一个 stream 出错或者关闭，会导致整个管道停止，此时我们需要手工销毁所有的 stream，在代码层面这是非常麻烦的。

所以社区出现了 pump 这样的库来自动控制 stream 的销毁。而 Node.js v10.0 加入了一个新的特性：stream.pipeline()，可以替代 pump 帮助我们更好的管理 stream。

静态方法 pipeline() 通常和 zlib 配合使用，将一个 Readable 与多个流进行混合处理。通过管线机制，用于从一个流中获取数据并将该流的输出传递到另外的流，简单地说，管线方法用于分步骤处理流数据。


Stream API

- Class: stream.Writable
    - Event: close( )
    - Event: drain( )
    - Event: error( )
    - Event: finish( )
    - Event: pipe( src )
    - Event: unpipe( )
    - writable.cork()
    - writable.destroy([error])
    - writable.destroyed
    - writable.end([chunk[, encoding]][, callback])
    - writable.setDefaultEncoding(encoding)
    - writable.uncork()
    - writable.writable
    - writable.writableEnded
    - writable.writableCorked
    - writable.writableFinished
    - writable.writableHighWaterMark
    - writable.writableLength
    - writable.writableObjectMode
    - writable.write(chunk[, encoding][, callback])

- Class: stream.Readable
    - Event: close( )
    - Event: data( chunk )
    - Event: end( )
    - Event: error( )
    - Event: pause( )
    - Event: readable( )
    - Event: resume( )
    - readable.destroy([error])
    - readable.destroyed
    - readable.isPaused()
    - readable.pause()
    - readable.pipe(destination[, options])
    - readable.read([size])
    - readable.readable
    - readable.readableEncoding
    - readable.readableEnded
    - readable.readableFlowing
    - readable.readableHighWaterMark
    - readable.readableLength
    - readable.readableObjectMode
    - readable.resume()
    - readable.setEncoding(encoding)
    - readable.unpipe([destination])
    - readable.unshift(chunk[, encoding])
    - readable.wrap(stream)
    - readable[Symbol.asyncIterator]()

- Class: stream.Duplex
- Class: stream.Transform
    - transform.destroy([error])
    - stream.finished(stream[, options], callback)
    - stream.pipeline(source[, ...transforms], destination, callback)
    - stream.pipeline(streams, callback)
    - stream.Readable.from(iterable, [options])

- Implementing a writable stream
    - new stream.Writable([options])
    - writable._write(chunk, encoding, callback)
    - writable._writev(chunks, callback)
    - writable._destroy(err, callback)
    - writable._final(callback)

- Implementing a readable stream
    - new stream.Readable([options])
    - readable._read(size)
    - readable._destroy(err, callback)
    - readable.push(chunk[, encoding])

- Implementing a duplex stream
    - new stream.Duplex(options)
    - An example duplex stream
    - Object mode duplex streams

- Implementing a transform stream
    - new stream.Transform([options])
    - Event: 'end'
    - Event: 'finish'
    - transform._flush(callback)
    - transform._transform(chunk, encoding, callback)
    - Class: stream.PassThrough


# 🚩 Zlib 压缩库
- https://nodejs.org/docs/latest-v14.x/api/zlib.html
- https://hacks.mozilla.org/2015/11/better-than-gzip-compression-with-brotli/
- Accept-Encoding https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
- Brotli Compressed Data Format https://tools.ietf.org/html/rfc7932
- DEFLATE Compressed Data Format Specification v1.3 https://tools.ietf.org/html/rfc1951
- GZIP file format specification v4.3 https://tools.ietf.org/html/rfc1952
- HTTP/1.1: Message Syntax and Routing - Gzip Coding https://tools.ietf.org/html/rfc7230#section-4.2.3
- https://cran.r-project.org/web/packages/brotli/vignettes/benchmarks.html
- zlib 1.2.11 Manual https://www.zlib.net/manual.html
- ZIP File Format Specification https://pkware.cachefly.net/webdocs/APPNOTE/APPNOTE-6.2.0.txt
- zlib port to javascript, very fast! https://www.npmjs.com/package/pako
- Premier Press - Data Structures For Game Programmers CH21 Data Compression
- Springer - David Salomon - Data Compression 4th Edition
- A painless guide to crc error detection algorithms http://www.zlib.net/crc_v3.txt
- 文件压缩包 https://www.npmjs.com/package/archiver
- 压缩算法 Brotli https://github.com/google/brotli

Node 的压缩模块基于 zlib 工业库，算法有 Gzip, Deflate/Inflate, Brotli，数据处理基于 Streams API，主要是 zlib Transform 类型。

Deflate 是一个无专利的压缩算法，它可以实现无损数据压缩，有众多开源的实现算法。

Gzip 基于 Deflate 算法，它是 LZ77 与霍夫曼编码的组合，最早用于 UNIX 系统的文件压缩。

Brotli 压缩算法是 Google 在 2015 年 9 月推出的无损压缩算法，通过变种的 LZ77 算法、Huffman 编码以及二阶文本建模等方式进行数据压缩，与其他压缩算法相比，它有着更高的压缩效率。

Brotli 压缩算法具有多个特点：

- 针对常见的 Web 资源内容，Brotli 的性能相比 Gzip 提高了 17-25%；
- 当 Brotli 压缩级别为 1 时，压缩率比 Gzip 最高压缩等级 9 还要高；
- 在处理不同 HTML 文档时，Brotli 依然能够提供非常高的压缩率。
- 在压缩速度上跟 Deflate 差不多，但是提供了更密集的压缩。

以下一份测试来自 2013 Apple MacBook Pro OSX 10.10.5 16GB 1600 MHz DDR3 2.7 GHz Core i7 4-Core with HyperThreading.

    |  压缩算法 | Requests/s | 速度 (MB/s) | Max RSS (MB) | Avg. Latency (ms) |
    |-----------|------------|-------------|--------------|-------------------|
    | br-stream |        203 |        0.25 |      3485.54 |            462.57 |
    | lzma      |        233 |        0.37 |       330.29 |            407.71 |
    | gzip      |       2276 |        3.44 |       204.29 |             41.86 |
    | none      |       4061 |       14.06 |        125.1 |             23.45 |
    | br-static |       4087 |        5.85 |       105.58 |              23.3 |

RSS - Resident Set Size 表示该进程所占物理内存的大小。


示范返回压缩数据给客户端：

```
var http = require('http');
var fs = require('fs');
var zlib = require("zlib");

http.createServer(function(req, res){
  let ae = req.headers['accept-encoding'];
  let isZip = ae && ae.indexOf('gzip')>=0;
  var stream = fs.createReadStream(__filename);
  if(isZip || true){
    res.writeHead(200, {
            'Content-Length': '406',
            'Content-Encoding': 'gzip',
      'Content-Type': 'text/html', // application/x-gzip
        });
    var gzip = zlib.createGzip();
    stream.pipe(gzip).pipe(res, true);
    // res.end(zlib.gzipSync(fs.readFileSync(__filename)));
    // var gz = fs.createWriteStream(__filename+'.gz');
    // stream.pipe(gzip).pipe(gz, true);
  }else{
    stream.pipe(res, true);
  }
})
.on('error', err => console.log)
.listen(3000);
```

配合 pipeline 管道化处理文件的压缩流程：

```
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const gzip = createGzip();
const source = createReadStream(__filename);
const destination = createWriteStream(__filename+'.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});

// Or, Promisified

const { promisify } = require('util');
const pipe = promisify(pipeline);

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
}

do_gzip(__filename, __filename+'.gz')
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  });
```

所有 zlib API 都用在内部的线程池中，除了显式同步的，使用不当可能导致严重性能问题。

如下，同步地实例化多个 zlib 将导致大量的内存碎片：

```
const zlib = require('zlib');

const payload = Buffer.from('This is some data');

// WARNING: DO NOT DO THIS!
for (let i = 0; i < 30000; ++i) {
  zlib.deflate(payload, (err, buffer) => {});
}
```

强烈建议缓存压缩操作的结果，以避免重复工作。

需要 zip 压缩包处理功能，可以借助现成的 archiver 模块进行打包或解包，也可以自行根据 zip 文件格式规范实现。

```
const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream(__dirname + '/../example.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

// @see: https://nodejs.org/api/stream.html#stream_event_end
output.on('end', function() {
  console.log('Data has been drained');
});

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    // log warning
  } else {
    // throw error
    throw err;
  }
});

// good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

// append a file from stream
const file1 = __dirname + '/demo.js';
archive.append(fs.createReadStream(file1), { name: 'demo.md' });

archive.append('append a file from string!', { name: 'string.txt' });

const buffer3 = Buffer.from('append a file from buffer!');
archive.append(buffer3, { name: 'buffer.txt' });

archive.file(__filename, { name: "src/archive.js" });

// append files from a sub-directory and naming it `subdir` within the archive
archive.directory('node/', 'subdir');

// append files from a sub-directory, putting its contents at the root of archive
archive.directory("src/", false);

// append files from a glob pattern
archive.glob('*.js', {cwd: __dirname});

// finalize the archive (ie we are done appending files but streams have to finish yet)
// 'close', 'end' or 'finish' may be fired right after calling 
// this method so register to them beforehand
archive.finalize();
```



Zlib 常量参考

- Allowed flush values.

    - zlib.constants.Z_NO_FLUSH
    - zlib.constants.Z_PARTIAL_FLUSH
    - zlib.constants.Z_SYNC_FLUSH
    - zlib.constants.Z_FULL_FLUSH
    - zlib.constants.Z_FINISH
    - zlib.constants.Z_BLOCK
    - zlib.constants.Z_TREES

- Return codes, negative values are errors.

    - zlib.constants.Z_OK
    - zlib.constants.Z_STREAM_END
    - zlib.constants.Z_NEED_DICT
    - zlib.constants.Z_ERRNO
    - zlib.constants.Z_STREAM_ERROR
    - zlib.constants.Z_DATA_ERROR
    - zlib.constants.Z_MEM_ERROR
    - zlib.constants.Z_BUF_ERROR
    - zlib.constants.Z_VERSION_ERROR

- Compression levels.

    - zlib.constants.Z_NO_COMPRESSION
    - zlib.constants.Z_BEST_SPEED
    - zlib.constants.Z_BEST_COMPRESSION
    - zlib.constants.Z_DEFAULT_COMPRESSION

- Compression strategy.

    - zlib.constants.Z_FILTERED
    - zlib.constants.Z_HUFFMAN_ONLY
    - zlib.constants.Z_RLE
    - zlib.constants.Z_FIXED
    - zlib.constants.Z_DEFAULT_STRATEGY

Brotli constants

- Flush operations 

    - zlib.constants.BROTLI_OPERATION_PROCESS (default for all operations)
    - zlib.constants.BROTLI_OPERATION_FLUSH (default when calling .flush())
    - zlib.constants.BROTLI_OPERATION_FINISH (default for the last chunk)
    - zlib.constants.BROTLI_OPERATION_EMIT_METADATA

- Compressor options

    - `BROTLI_PARAM_MODE`
        - `BROTLI_MODE_GENERIC` (default)
        - `BROTLI_MODE_TEXT`, adjusted for UTF-8 text
        - `BROTLI_MODE_FONT`, adjusted for WOFF 2.0 fonts
    - `BROTLI_PARAM_QUALITY` Ranges from `BROTLI_MIN_QUALITY` to `BROTLI_MAX_QUALITY`, with a default of `BROTLI_DEFAULT_QUALITY`.
    - `BROTLI_PARAM_SIZE_HINT` 期待输入大小，未知输入默认值为 0。

- Advanced compression options:

    - `BROTLI_PARAM_LGWIN` 设置 Large Window Brotli 大小 默认值 `BROTLI_DEFAULT_WINDOW`。
        - `BROTLI_MIN_WINDOW_BITS` 最小值；
        - `BROTLI_MAX_WINDOW_BITS` 最大值；
        - `BROTLI_LARGE_MAX_WINDOW_BITS` 极大值，在启用 `BROTLI_PARAM_LARGE_WINDOW` 标志时使用。
    - `BROTLI_PARAM_LGBLOCK` Ranges from `BROTLI_MIN_INPUT_BLOCK_BITS` to `BROTLI_MAX_INPUT_BLOCK_BITS`.
    - `BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING` 是否降低压缩比以提高解压缩速度。
    - `BROTLI_PARAM_LARGE_WINDOW` 是否启用 Large Window Brotli，与 RFC 7932 标准格式不兼容。
    - `BROTLI_PARAM_NPOSTFIX` Ranges from 0 to `BROTLI_MAX_NPOSTFIX`.
    - `BROTLI_PARAM_NDIRECT` Ranges from 0 to `15 << NPOSTFIX` in steps of `1 << NPOSTFIX`.

- Decompressor options

    - `BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION` 影响内部内存分配模式的布尔标志。
    - `BROTLI_DECODER_PARAM_LARGE_WINDOW` 是否启用 Large Window Brotli，与 RFC 7932 标准格式不兼容。


Zlib API 参考

- Class: Options
- Class: BrotliOptions
- Class: zlib.BrotliCompress
- Class: zlib.BrotliDecompress
- Class: zlib.Deflate
- Class: zlib.DeflateRaw
- Class: zlib.Gunzip
- Class: zlib.Gzip
- Class: zlib.Inflate
- Class: zlib.InflateRaw
- Class: zlib.Unzip
- Class: zlib.ZlibBase
- Static
    - zlib.bytesRead
    - zlib.bytesWritten
    - zlib.close([callback])
    - zlib.flush([kind, ]callback)
    - zlib.params(level, strategy, callback)
    - zlib.reset()
    - zlib.constants
    - zlib.createBrotliCompress([options])
    - zlib.createBrotliDecompress([options])
    - zlib.createDeflate([options])
    - zlib.createDeflateRaw([options])
    - zlib.createGunzip([options])
    - zlib.createGzip([options])
    - zlib.createInflate([options])
    - zlib.createInflateRaw([options])
    - zlib.createUnzip([options])
    - zlib.brotliCompress(buffer[, options], callback)
    - zlib.brotliCompressSync(buffer[, options])
    - zlib.brotliDecompress(buffer[, options], callback)
    - zlib.brotliDecompressSync(buffer[, options])
    - zlib.deflate(buffer[, options], callback)
    - zlib.deflateSync(buffer[, options])
    - zlib.deflateRaw(buffer[, options], callback)
    - zlib.deflateRawSync(buffer[, options])
    - zlib.gunzip(buffer[, options], callback)
    - zlib.gunzipSync(buffer[, options])
    - zlib.gzip(buffer[, options], callback)
    - zlib.gzipSync(buffer[, options])
    - zlib.inflate(buffer[, options], callback)
    - zlib.inflateSync(buffer[, options])
    - zlib.inflateRaw(buffer[, options], callback)
    - zlib.inflateRawSync(buffer[, options])
    - zlib.unzip(buffer[, options], callback)
    - zlib.unzipSync(buffer[, options])


# 🚩 File System 文件系统
[File System](https://nodejs.org/docs/latest-v9.x/api/fs.html)
- https://nodejs.org/docs/latest-v12.x/api/cli.html#cli_uv_threadpool_size_size
- https://nodejs.org/en/docs/guides/working-with-different-filesystems/

所有文件系统 API 可能产生负面性能影响，除了 fs.FSWatcher() 和那些显式同步的使用 libuv 线程池。

文件路径可以直接使用字符表示，也可以使用 URL 对象：

    const fs = require('fs');
    const fileUrl = new URL('file:///tmp/hello');

    fs.readFileSync(fileUrl);

Promise example

    const fs = require('fs').promises;

    (async function(path) {
      try {
        await fs.unlink(path);
        console.log(`successfully deleted ${path}`);
      } catch (error) {
        console.error('there was an error:', error.message);
      }
    })('/tmp/hello');



目录拷贝示范：

    var fs = require('fs');
    var path = require('path');

    function copyFileSync( source, target ) {

        var targetFile = target;

        // If target is a directory, a new file with the same name will be created
        if ( fs.existsSync( target ) ) {
            if ( fs.lstatSync( target ).isDirectory() ) {
                targetFile = path.join( target, path.basename( source ) );
            }
        }

        fs.writeFileSync(targetFile, fs.readFileSync(source));
    }

    function copyFolderRecursiveSync( source, target ) {
        var files = [];

        // Check if folder needs to be created or integrated
        var targetFolder = path.join( target, path.basename( source ) );
        if ( !fs.existsSync( targetFolder ) ) {
            fs.mkdirSync( targetFolder );
        }

        // Copy
        if ( fs.lstatSync( source ).isDirectory() ) {
            files = fs.readdirSync( source );
            files.forEach( function ( file ) {
                var curSource = path.join( source, file );
                if ( fs.lstatSync( curSource ).isDirectory() ) {
                    copyFolderRecursiveSync( curSource, targetFolder );
                } else {
                    copyFileSync( curSource, targetFolder );
                }
            } );
        }
    }

文件读写

    var path = require('path');
    var fs = require('fs');

    var _path = path.join(__dirname, '\\', 'record.txt');
    var path1 = "e:\\coding\\electron\\record.txt";
    // console.log( ["PATH:",_path, path1]);

    fs.readFile(_path, 'utf8', function (err, data) {
        if (err) return console.log(err);
    });

    fs.writeFile(_path, "electron + Javascript "+(new Date()), function (err) {
        if (!err) console.log("file write done!")
    })


## File Descriptors

文件描述符包含文件相关信息，这些信息可以使用 stat 命令获取，如：

    stats: {
      "dev": 2,
      "mode": 16877,
      "nlink": 1,  指 inode 被引用次数
      "uid": 1000,
      "gid": 1000,
      "rdev": 0,
      "blksize": 4096,
      "ino": 562949959402140,
      "size": 4096,
      "blocks": 0,
      "atimeMs": 1614539247544.6877,
      "mtimeMs": 1614539247623.6729,
      "ctimeMs": 1614539247623.6729,
      "birthtimeMs": 1614539247623.6729,
      "atime": "2021-02-28T19:07:27.545Z",
      "mtime": "2021-02-28T19:07:27.624Z",
      "ctime": "2021-02-28T19:07:27.624Z",
      "birthtime": "2021-02-28T19:07:27.624Z"
    }

文件时间相关的属性有四个，加 Ms 后缀的表示使用毫秒单位：

- `atime` "Access Time" 最后一次访问时间，执行 mknod(2), utimes(2), read(2) 系统调用时修改。
- `mtime` "Modified Time" 最后一次修改的时间，执行 mknod(2), utimes(2), write(2) 系统调用时修改。
- `ctime` "Change Time" 最后一次变更的时间，inode 数据修改，执行 chmod(2), chown(2), link(2), mknod(2), rename(2), unlink(2), utimes(2), read(2), write(2) 系统调用时修改。
- `birthtime` "Birth Time" 文件创建时间。对于不支持的文件系统，可能使用 ctime 或 1970-01-01T00:00Z (ie, Unix epoch timestamp 0)。


示范使用以下 API 获取文件描述符 File descriptors：

- fs.fstat( fd, callback )
- fs.fstatSync( fd )
- fs.lstat( path, callback )
- fs.lstatSync( path )
- fs.stat( path, callback )
- fs.statSync( path )

- Class: fs.Stats
    - fs.stats.isBlockDevice()
    - fs.stats.isCharacterDevice()
    - fs.stats.isDirectory()
    - fs.stats.isFIFO()
    - fs.stats.isFile()
    - fs.stats.isSocket()
    - fs.stats.isSymbolicLink()
    - fs.stats.dev
    - fs.stats.ino
    - fs.stats.mode
    - fs.stats.nlink
    - fs.stats.uid
    - fs.stats.gid
    - fs.stats.rdev
    - fs.stats.size
    - fs.stats.blksize
    - fs.stats.blocks
    - fs.stats.atimeMs
    - fs.stats.mtimeMs
    - fs.stats.ctimeMs
    - fs.stats.birthtimeMs
    - fs.stats.atime
    - fs.stats.mtime
    - fs.stats.ctime
    - fs.stats.birthtime


示范：

    const fs = require("fs");

    fs.stat('public', (err, stats) => {
      if (err) throw err;
      console.log(`stats: ${JSON.stringify(stats, null, "  ")}`);
    });

    fs.open('public', fs.constants.O_RDONLY, (err, fd) => {
      if (err) throw err;
      fs.fstat(fd, (err, stats) => {
        if (err) throw err;
        console.log(`stats: ${JSON.stringify(stats, null, "  ")}`);
      });
      // always close the file descriptor!
      fs.close(fd, (err) => {
        if (err) throw err;
      });
    });

作为简化表达，可以直接使用 'r' 替代 fs.constants.O_RDONLY。

    const fs = require("fs");

    fs.rename('/tmp/hello', '/tmp/world', (err) => {
      if (err) throw err;
      fs.stat('/tmp/world', (err, stats) => {
        if (err) throw err;
        console.log(`stats: ${JSON.stringify(stats)}`);
      });
    });

    thumb = 'C:/pictures/thumb';
    fs.open(thumb, 'r', (err, fd) => {
      if (err) throw err;
      fs.fstat(fd, (err, stat) => {
        if (err) throw err;
        // use stat
        if(stat.isDirectory()) {
            fs.readdir(thumb, "", (err, list) => {
                console.log(`stats: ${JSON.stringify(list, null, "    ")}`);
                pre = 1;
                for (var i = list.length - 1; i >= 0; i--) {
                    cur = parseInt(list[list.length-i]);
                    if(cur>pre+1){
                        for(var j = pre + 1; j<cur; j++){
                            console.log("curl -O ", j);
                        }
                    }
                    pre = cur;
                }
            });
        }

        // always close the file descriptor!
        fs.close(fd, (err) => {
          if (err) throw err;
        });
      });
    });

See https://nodejs.org/api/fs.html#fs_fs_copyfilesync_src_dest_flags)


## Class: fs.Dir & fs.Dirent

目录流对象，使用 Promise.opendir() 返回的是可以枚举的钱列表，每个元素是 Dirent，即 Directory Entry，使用以下 API 创建：

- fs.opendir()
- fs.opendirSync()
- fsPromises.opendir()

示范：

    const fs = require('fs');

    async function print(path) {
      const dir = await fs.promises.opendir(path);
      for await (const dirent of dir) {
        console.log(dirent.name);
      }
    }
    print('./').catch(console.error);

同步 API 方式：

    const fs = require('fs');

    const dir = fs.opendirSync('public')
    while( ent = dir.readSync() ) console.log(ent.name)
    dir.close()

API 参考：

- Class: fs.Dirent

    - dir.close()
    - dir.close(callback)
    - dir.closeSync()
    - dir.path
    - dir.read()
    - dir.read(callback)
    - dir.readSync()
    - dir[Symbol.asyncIterator]()

- Class: fs.Dirent

    - dirent.isBlockDevice()
    - dirent.isCharacterDevice()
    - dirent.isDirectory()
    - dirent.isFIFO()
    - dirent.isFile()
    - dirent.isSocket()
    - dirent.isSymbolicLink()
    - dirent.name

## Class: fs.ReadStream & fs.WriteStream
- https://nodejs.org/docs/latest-v12.x/api/stream.html#stream_class_stream_writable
- https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_class_fs_writestream

ReadStream 和 WriteStream 分别是 stream.Readable，stream.Writable 子类。

管道 pipe 实现大量数据的流读写

    /**
     * destination 必须一个可写入流数据对象
     * [opations] end 默认为true，表示读取完成立即关闭文件；
     */

    var rs = fs.createReadStream(__dirname + '/test/Until You.mp3');
    var ws = fs.createWriteStream(__dirname + '/test/untiyou.mp3');
    rs.pipe(ws);
    rs.on('data', function (data) {
      console.log('数据可读')
    });
    rs.on('end', function () {
      console.log('文件读取完成');
      //ws.end('再见')
    });

API 参考：

- Class: fs.ReadStream
    - Event: close()
    - Event: open( fd )
    - readStream.bytesRead
    - readStream.path

- Class: fs.WriteStream
    - Event: close()
    - Event: open( fd )
    - writeStream.bytesWritten
    - writeStream.path

相关 API：

- fs.createReadStream( path[, options] )
- fs.createWriteStream( path[, options] )


## fs API

- fs.constants 包含各种常量

- fs.access( path[, mode], callback )
- fs.accessSync( path[, mode] )
- fs.appendFile( file, data[, options], callback )
- fs.appendFileSync( file, data[, options] )
- fs.chmod( path, mode, callback )
- fs.chmodSync( path, mode )
- fs.chown( path, uid, gid, callback )
- fs.chownSync( path, uid, gid )
- fs.close( fd, callback )
- fs.closeSync( fd )
- fs.copyFile( src, dest[, flags], callback )
- fs.copyFileSync( src, dest[, flags] )
- fs.createReadStream( path[, options] )
- fs.createWriteStream( path[, options] )
- fs.exists( path, callback )
- fs.existsSync( path )
- fs.fchmod( fd, mode, callback )
- fs.fchmodSync( fd, mode )
- fs.fchown( fd, uid, gid, callback )
- fs.fchownSync( fd, uid, gid )
- fs.fdatasync( fd, callback )
- fs.fdatasyncSync( fd )
- fs.fstat( fd, callback )
- fs.fstatSync( fd )
- fs.fsync( fd, callback )
- fs.fsyncSync( fd )
- fs.ftruncate( fd[, len], callback )
- fs.ftruncateSync( fd[, len] )
- fs.futimes( fd, atime, mtime, callback )
- fs.futimesSync( fd, atime, mtime )
- fs.lchmod( path, mode, callback )
- fs.lchmodSync( path, mode )
- fs.lchown( path, uid, gid, callback )
- fs.lchownSync( path, uid, gid )
- fs.link( existingPath, newPath, callback )
- fs.linkSync( existingPath, newPath )
- fs.lstat( path, callback )
- fs.lstatSync( path )
- fs.mkdir( path[, mode], callback )
- fs.mkdirSync( path[, mode] )
- fs.mkdtemp( prefix[, options], callback )
- fs.mkdtempSync( prefix[, options] )
- fs.open( path, flags[, mode], callback )
- fs.openSync( path, flags[, mode] )
- fs.read( fd, buffer, offset, length, position, callback )
- fs.readdir( path[, options], callback )
- fs.readdirSync( path[, options] )
- fs.readFile( path[, options], callback )
- fs.readFileSync( path[, options] )
- fs.readlink( path[, options], callback )
- fs.readlinkSync( path[, options] )
- fs.readSync( fd, buffer, offset, length, position )
- fs.realpath( path[, options], callback )
- fs.realpath. native(path[, options], callback )
- fs.realpathSync( path[, options] )
- fs.realpathSync. native(path[, options] )
- fs.rename( oldPath, newPath, callback )
- fs.renameSync( oldPath, newPath )
- fs.rmdir( path, callback )
- fs.rmdirSync( path )
- fs.stat( path, callback )
- fs.statSync( path )
- fs.symlink( target, path[, type], callback )
- fs.symlinkSync( target, path[, type] )
- fs.truncate( path[, len], callback )
- fs.truncateSync( path[, len] )
- fs.unlink( path, callback )
- fs.unlinkSync( path )
- fs.unwatchFile( filename[, listener] )
- fs.utimes( path, atime, mtime, callback )
- fs.utimesSync( path, atime, mtime )
- fs.watch( filename[, options][, listener] )
- fs.watchFile( filename[, options], listener )
- fs.write( fd, buffer[, offset[, length[, position]]], callback )
- fs.write( fd, string[, position[, encoding]], callback )
- fs.writeFile( file, data[, options], callback )
- fs.writeFileSync( file, data[, options] )
- fs.writeSync( fd, buffer[, offset[, length[, position]]] )
- fs.writeSync( fd, string[, position[, encoding]] )


## fs Promises API

Node v10.0.0 添加了 fs.promises 提供一组使用 Promise 替代回调函数方式的异步文件处理 API。

    require('fs').promises

FileHandle 实例由 fsPromises.open() 方法创建，A FileHandle object is a wrapper for a numeric file descriptor. Instances of FileHandle are distinct from numeric file descriptors in that they provide an object oriented API for working with files.。

与回调式 API 不同，如 fs.fstat(), fs.fchown(), fs.fchmod()，文件描述符 FD 是不需要的，替代使用的是 FileHandle 对象，它包装了 FD，在 Promise 处于 resolved 或 rejected 状态时实现自动关闭 FD，以免意外的未关闭 FD 导致资源泄露。

不要依赖此行为，因为它不可靠，并且文件可能未关闭。相反，显式关闭文件句柄是可靠的。

示范使用 `access(path)` 测试文件的可访问性：

    const fs = require('fs');
    const fsPromises = fs.promises;

    fsPromises.access('/etc/passwd', fs.constants.R_OK | fs.constants.W_OK)
      .then(() => console.log('can access'))
      .catch(() => console.error('cannot access'));

Class: FileHandle API 参考：

- filehandle.fd

- filehandle.appendFile(data, options)
- filehandle.chmod(mode)
- filehandle.chown(uid, gid)
- filehandle.close()
- filehandle.datasync()
- filehandle.read(buffer, offset, length, position)
- filehandle.read(options)
- filehandle.readFile(options)
- filehandle.readv(buffers[, position])
- filehandle.stat([options])
- filehandle.sync()
- filehandle.truncate(len)
- filehandle.utimes(atime, mtime)
- filehandle.write(buffer[, offset[, length[, position]]])
- filehandle.write(string[, position[, encoding]])
- filehandle.writeFile(data, options)
- filehandle.writev(buffers[, position])

fs.promises API 参考：

- fsPromises.access(path[, mode])
- fsPromises.appendFile(path, data[, options])
- fsPromises.chmod(path, mode)
- fsPromises.chown(path, uid, gid)
- fsPromises.copyFile(src, dest[, flags])
- fsPromises.lchmod(path, mode)
- fsPromises.lchown(path, uid, gid)
- fsPromises.lutimes(path, atime, mtime)
- fsPromises.link(existingPath, newPath)
- fsPromises.lstat(path[, options])
- fsPromises.mkdir(path[, options])
- fsPromises.mkdtemp(prefix[, options])
- fsPromises.open(path, flags[, mode])
- fsPromises.opendir(path[, options])
- fsPromises.readdir(path[, options])
- fsPromises.readFile(path[, options])
- fsPromises.readlink(path[, options])
- fsPromises.realpath(path[, options])
- fsPromises.rename(oldPath, newPath)
- fsPromises.rmdir(path[, options])
- fsPromises.stat(path[, options])
- fsPromises.symlink(target, path[, type])
- fsPromises.truncate(path[, len])
- fsPromises.unlink(path)
- fsPromises.utimes(path, atime, mtime)
- fsPromises.writeFile(file, data[, options])


## Watch File 文件监听

文件监听相关 API：

- fs.unwatchFile(filename[, listener])
- fs.watch(filename[, options][, listener]): FSWatcher
- fs.watchFile(filename[, options], listener): StatWatcher

- Class: fs.FSWatcher
    - Event: change( eventType, filename )
    - Event: error( error )
    - Event: close()
    - watcher.close()
    - watcher.ref(): FSWatcher
    - watcher.unref(): FSWatcher

- Class: fs.StatWatcher
    - watcher.ref(): StatWatcher
    - watcher.unref(): StatWatcher

注意 fs.watch API 并不是 100% 工作于所有平台。

其中 recursive 选项只对 macOS 和 Windows 有效。

根据不同系统的 filesystem 变更事件，如什么导致功能失效监听就会失败：

- Linux 系统使用 inotify
- BSD 系统使用 kqueue
- macOS 分别使用 kqueue 和 FSEventsfor 对应监听文件和目录
- SunOS 系统包括 Solaris SmartOS 使用 event ports
- Windows 系统使用 ReadDirectoryChangesW API
- Aix 系统依赖 AHAFS 功能

比如监听网线文件系统 NFS, SMB 等，或者 Vagrant, Docker 等虚拟化的主机系统文件都是不可靠的。

仍然可以使用 fs.watchFile() 来轮询文件的 stat 信息，但效率不高，也不太可靠。

在 Linux 和 macOS 系统，fs.watch() 解析 inode 路径并监视 inode。如果已观察到的路径被删除并重新创建，则会为其分配一个新的 inode。该监视将为删除发出一个事件，但将继续监视原始 inode，这将不会发出新 inode 的事件，这是预期的行为。

AIX 系统的文件在其生命周期中保留相同的 inode，保存和关闭文件时，将监听到两个通知，一个添加新内容，另一个用于截断，adding & truncation。

只有 Linux、macOS、Windows 和 AIX 系统支持在回调中提供文件名参数，即使在受支持的平台上，也不能保证总是提供文件名。因此，不要假设 filename 参数总是在回调中提供的，如果它为 null，则使用一些回退逻辑。

Filename Argument 示范

    fs.watch('somedir', (eventType, filename) => {
      console.log(`event type is: ${eventType}`);
      if (filename) {
        console.log(`filename provided: ${filename}`);
      } else {
        console.log('filename not provided');
      }
    });

## Inode 文件索引节点

理解 inode，不仅有助于提高系统操作水平，还有助于体会 Unix 设计哲学，即如何把底层的复杂性抽象成一个简单概念，从而大大简化用户接口。

从文件储存来理解 inode，硬盘的最小存储单位叫做扇区 Sector，能储存 512 字节。

操作系统读取硬盘的时候，不会一个个扇区的读取，这样效率太低，而是一次性连续读取多个扇区，即一次性读取一个块 block，块是文件存取的最小单位。最常见的块的大小设置是 4KB，即连续的 8 sectors 组成一个 block。

而为了管理文件的元信息，比如文件的创建者、文件的创建日期、文件的大小等等，引入了 Inode 即索引节点。

每一个文件都有对应的 Inode，使用 stat 命令可以查看：

    $ stat m4demo.m4 
      File: m4demo.m4
      Size: 244             Blocks: 0          IO Block: 4096   regular file
    Device: 2h/2d   Inode: 4785074605758679  Links: 1
    Access: (0666/-rw-rw-rw-)  Uid: ( 1000/  jeango)   Gid: ( 1000/  jeango)
    Access: 2020-08-03 02:14:04.412914100 +0800
    Modify: 2020-08-03 02:14:04.412914100 +0800
    Change: 2020-08-03 02:14:04.419913100 +0800
     Birth: -

inode 也会消耗硬盘空间，所以硬盘格式化的时候，操作系统自动将硬盘分成两个区域。一个是存放文件数据区域，另一个是 inode table。

每个 inode 节点的大小一般是 128KB 或 256KB，节点的总数在格式化时就固定，一般是每 1KB 或每 2KB 就设置一个 inode。一块 1GB 的硬盘，如果每个 inode 节点的大小为 128KB，每 1KB 就设置一个 inode，那么 inode table 的大小就会占 1/8 到 128MB。因此，如果保存大量小文件，就有可能发生 inode 已经用光，但是硬盘还未存满的情况，这时，就无法在硬盘上创建新文件。

查看每个硬盘分区的 inode 总数和已经使用的数量，可以使用 df -i 命令，查看 inode 号码使用 ls -i。

查看每个 inode 节点的大小，可以用如下命令：

    sudo dumpe2fs -h /dev/hda | grep "Inode size"

Unix/Linux 系统内部不使用文件名，而使用 inode 号码来识别文件。对于系统来说，文件名只是 inode 号码便于识别的别称或者绰号。

实际上，系统内部打开一个文件这个过程分成三步：

- 首先，系统找到这个文件名对应的 inode 号码；
- 其次，通过 inode 号码，获取 inode 信息；
- 最后，根据 inode 信息，找到文件数据所在的 block，读出数据。

由于 inode 号码与文件名分离，这种机制导致了一些 Unix/Linux 系统特有的现象。

- 有时，文件名包含特殊字符，无法正常删除，可以直接删除 inode 节点起到删除文件的作用。
- 移动文件或重命名文件，只是改变文件名，不影响 inode 号码。
- 打开一个文件以后，系统就以 inode 号码来识别这个文件，不再考虑文件名。
- 可以为文件创建硬链接或软链接。

这使得软件更新变得简单，可以在不关闭软件的情况下进行更新，不需要重启。因为系统通过 inode 号码识别运行中的文件，更新的时候，新版文件以同样的文件名，但是关联的 inode 是新创建的。等到下一次运行这个软件的时候，文件名就自动指向新版文件，旧版文件的 inode 则被回收。

Unix/Linux 系统允许链接文件，多个文件名指向同一个 inode 号码。

inode 记录了文件的链接数，通过 stat 命令可以看到 Links 指示的数量，每创建一个链接文件，总数增加 1。反过来，删除一个链接文件，就减 1。当这个值减到 0，表明没有文件名指向这个 inode，系统就会回收这个 inode 占用的空间，以及其所对应 block 区域。

硬链接 hard link 意味着，可以用不同的文件名访问同样的内容；对文件内容进行修改，会影响到所有文件名；但是，删除一个文件名，不影响另一个文件名的访问。软件链接 symbolic links 有些差别，它会创建新的 inode，因此目标文件的链接数不变，这是软链接与硬链接最大的不同。

删除链接，并不影响原文件内容，但删除原文件后软链接文件就成为了死链 Danglink Link。若被指向路径文件被重新创建，死链接可恢复为正常的软链接。

但是删除硬链接的原文件就和删除一个硬链接一样，文件照样存在，除非所有硬链接都删除，Links 记录数量为 0 引发文件存储空间回收。

创建目录时，默认会生成两个目录项 . 和 .. 对应的是当前目录和父目录的 inode 号码，等同于这两个目录的硬链接。

但是硬链接不能对目录进行创建，只可对文件创建，这是因为允许硬链接到目录将破坏文件系统的有向无环图结构，directed acyclic graph structure。在遍历的时候会有无限递归的情况，而软链接有独立的 inode 号则可以。

创建硬链接或软链接文件：

    ln TARGET LINK_NAME
    ln -s TARGET LINK_NAME


## FS Constants

fs.constants 包含各种常量。

File Access Constants

    Flag    Description
    F_OK    the file be visible to the calling process.
    R_OK    the file can be read by the calling process.
    W_OK    the file can be written by the calling process.
    X_OK    the file can be executed by the calling process.

File Open Constants

    Constant    Description
    O_RDONLY    open a file for read-only access.
    O_WRONLY    open a file for write-only access.
    O_RDWR      open a file for read-write access.
    O_CREAT     create the file if it does not already exist.
    O_EXCL      opening a file should fail if the O_CREAT flag is set and the file already exists.
    O_NOCTTY    避免打开一个终端并成为进程的控制终端，如果进程还没有控制终端。
    O_TRUNC     open and truncated file to zero if the file exists and is a regular file.
    O_APPEND    data will be appended to the end of the file.
    O_DIRECTORY the open should fail if the path is not a directory.
    O_NOATIME   访问文件而不更新文件 atime 信息，只对 Linux 系统有效。
    O_NOFOLLOW  the open should fail if the path is a symbolic link.
    O_SYNC      使用同步 I/O 强制刷新内核缓冲区到输出文件，获得文件完整性。
    O_DSYNC     使用同步 I/O 强制刷新内核缓冲区到输出文件，获得数据完整性。
    O_SYMLINK   open the symbolic link itself rather than the resource it is pointing to.
    O_DIRECT    直接 I/O 操作，绕过缓冲区高速缓存，会导致最小的文件缓存效果。
    O_NONBLOCK  open the file in nonblocking mode when possible.

File Type Constants

    Flat        Description
    S_IFMT      Bit mask used to extract the file type code.
    S_IFREG     File type constant for a regular file.
    S_IFDIR     File type constant for a directory.
    S_IFCHR     File type constant for a character-oriented device file.
    S_IFBLK     File type constant for a block-oriented device file.
    S_IFIFO     File type constant for a FIFO/pipe.
    S_IFLNK     File type constant for a symbolic link.
    S_IFSOCK    File type constant for a socket.

File Mode Constants

    Constant    Description
    S_IRWXU     File mode indicating readable, writable, and executable by owner.
    S_IRUSR     File mode indicating readable by owner.
    S_IWUSR     File mode indicating writable by owner.
    S_IXUSR     File mode indicating executable by owner.
    S_IRWXG     File mode indicating readable, writable, and executable by group.
    S_IRGRP     File mode indicating readable by group.
    S_IWGRP     File mode indicating writable by group.
    S_IXGRP     File mode indicating executable by group.
    S_IRWXO     File mode indicating readable, writable, and executable by others.
    S_IROTH     File mode indicating readable by others.
    S_IWOTH     File mode indicating writable by others.
    S_IXOTH     File mode indicating executable by others.

以上标识后缀含义:

- U 或 USR 表示 Owner User
- G 或 GRP 表示 Group User
- O 或 OTH 表示 Other User


总结，标准的 stdio 函数库和内核采用的缓冲这两级缓冲：

- 首先，通过 stdio 库将用户数据传递到 stdio 缓冲区，该缓冲区位于用户态内存区。
- 当缓冲区填满，stdio 库会执行系统调用 write() 将数据传递到内核高速缓冲区，该缓冲区位于内核态内存区。
- 最终，内核发起磁盘操作。

Linux 允许应用程序在执行磁盘 I/O 时绕过缓冲区高速缓存，从用户空间直接将数据传递到文件或磁盘设备，或者裸称为 Raw I/O。像数据库系统，其高速缓存和 I/O 优化机制均自成一体，无需内核消耗 CPU 时间和内存去完成相同的任务。

使用直接 I/O 可能会大大降低性能，内核对缓冲区告诉缓存做了不少优化，包括：按顺序预读取，在成簇磁盘块上执行 I/O，允许访问同一文件的多个进程共享高速缓存的缓冲区。

O_NONBLOCK 和 O_NDELAY 都是使 I/O 变成非阻塞模式，在读取不到数据或是写入缓冲区已满会马上 return，而不会阻塞等待。

它们的差别在于：在读操作时，如果读不到数据，O_NDELAY 模式会马上返回 0，但这又衍生出一个问题，区别不了是否读取到文件末尾(EOF)时返回的 0。因此，O_NONBLOCK 就产生出来，它在读取不到数据时会回传 -1，并且设置 errno 为 EAGAIN。




# 🚩 Path QueryString 
- https://nodejs.org/docs/latest-v9.x/api/path.html
- https://nodejs.org/docs/latest-v12.x/api/modules.html
- https://nodejs.org/docs/latest-v14.x/api/querystring.html

使用 Path API 解析模块暴露的路径信息：

```
const fs = require( 'fs');
const path = require( 'path');

console.log(path.parse(__filename))
console.log(path.parse(process.cwd()))
console.log(path.dirname(process.cwd()))
console.log(__dirname, __filename, process.cwd())
/*
{
  root: 'C:\\',
  dir: 'C:\\coding\\md-code\\coding',
  base: 'coding.mjs.js',
  ext: '.js',
  name: 'coding.mjs'
}
*/
```

Windows vs. POSIX，同样的路径可能返回不同的值：

    path.basename('C:\\temp\\myfile.html');

    // On POSIX:
    // Returns: 'C:\\temp\\myfile.html'

    // On Windows:
    // Returns: 'myfile.html'

两种系统使用不同的路径分隔符：

- path.delimiter `;` for Windows `:` for POSIX
- path.sep `\` on Windows `/` on POSIX

无论使用 Windows 风格还是 POSIX 风格的路径，以下方式都适用：

    path.win32.basename('C:\\temp\\myfile.html');
    // Returns: 'myfile.html'

    path.posix.basename('/tmp/myfile.html');
    // Returns: 'myfile.html'

因此使用 path.posix 或 path.win32 提供的平台化适配方法更好。

执行 parse() 解析目录路径，平台差异如下：

    On POSIX:
    path.parse('/home/user/dir/file.txt');
    ┌─────────────────────┬────────────┐
    │          dir        │    base    │
    ├──────┬              ├──────┬─────┤
    │ root │              │ name │ ext │
    "  /    home/user/dir / file  .txt "
    └──────┴──────────────┴──────┴─────┘

    On Windows:
    path.parse('C:\\path\\dir\\file.txt');
    ┌─────────────────────┬────────────┐
    │          dir        │    base    │
    ├──────┬              ├──────┬─────┤
    │ root │              │ name │ ext │
    " C:\      path\dir   \ file  .txt "
    └──────┴──────────────┴──────┴─────┘

API 参考：

- Path
    - path.basename(path[, ext])
    - path.delimiter
    - path.dirname(path)
    - path.extname(path)
    - path.format(pathObject)
    - path.isAbsolute(path)
    - path.join([...paths])
    - path.normalize(path)
    - path.parse(path)
    - path.posix
    - path.relative(from, to)
    - path.resolve([...paths])
    - path.sep
    - path.toNamespacedPath(path)
    - path.win32

- Query string
    - querystring.decode()
    - querystring.encode()
    - querystring.escape(str)
    - querystring.parse(str[, sep[, eq[, options]]])
    - querystring.stringify(obj[, sep[, eq[, options]]])
    - querystring.unescape(str)


# 🚩 URL Module
- https://nodejs.org/docs/latest-v12.x/api/url.html
- URL Living Standard https://url.spec.whatwg.org/
- Punycode https://tools.ietf.org/html/rfc5891#section-4.4

按规范定义，每一个 URL 字符串的各个组成分解如下：

    ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
    │                                              href                                              │
    ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
    │ protocol │  │        auth         │          host          │           path            │ hash  │
    │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
    │          │  │                     │    hostname     │ port │ pathname │     search     │       │
    │          │  │                     │                 │      │          ├─┬──────────────┤       │
    │          │  │                     │                 │      │          │ │    query     │       │
    "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
    │          │  │          │          │    hostname     │ port │          │                │       │
    │          │  │          │          ├─────────────────┴──────┤          │                │       │
    │ protocol │  │ username │ password │          host          │          │                │       │
    ├──────────┴──┴──────────┴──────────┴────────────────────────┤          │                │       │
    │                           origin                           │ pathname │     search     │ hash  │
    ├────────────────────────────────────────────────────────────┴──────────┴────────────────┴───────┤
    │                                              href                                              │
    └────────────────────────────────────────────────────────────────────────────────────────────────┘
    (All spaces in the "" line should be ignored. They are purely for formatting.)

```
const {parse, URL} = require("url")

const url = "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash";

let test = parse(url)
console.log(JSON.stringify(test, null, "  "))

const myURL = new URL(url);
console.log(myURL.origin);
```

输出：

    {
      "protocol": "https:",
      "slashes": true,
      "auth": "user:pass",
      "host": "sub.example.com:8080",
      "port": "8080",
      "hostname": "sub.example.com",
      "hash": "#hash",
      "search": "?query=string",
      "query": "query=string",
      "pathname": "/p/a/t/h",
      "path": "/p/a/t/h?query=string",
      "href": "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
    }
    https://sub.example.com:8080

Percent-encoding in URLs

    Legacy API: < > " ` \r \n \t { } | \ ^ '
    WHATWG API: 
    - The C0 control percent-encode set: [U+0000, U+001F], [U+007E, +]
    - The fragment percent-encode set: the C0 control percent-encode set, U+0020, U+0022, U+003C, U+003E, and U+0060.
    - The path percent-encode set: the C0 control percent-encode set, U+0020, U+0022, U+0023, U+003C, U+003E, U+003F, U+0060, U+007B, and U+007D.
    - The userinfo encode set: the path percent-encode set, U+002F, U+003A, U+003B, U+003D, U+0040, U+005B, U+005C, U+005D, U+005E, and U+007C.

以上几个百分比编码集的使用：

- 片段百分比编码集用于 URL 片段。
- 路径百分比编码集用于大多数 URL 的路径。
- 用户信息百分比编码集专门用于 URL 中用户名和密码编码。
- C0 控制百分比编码集用于特定条件下的主机和路径，以及所有其他情况。

在域名出现非 ASCII 编码字符时，进行 punycode 转换，即前缀 `xn--`：

```
const myURL = new URL('https://%CF%80.example.com/foo');
console.log(myURL.href);
// Prints https://xn--1xa.example.com/foo
console.log(myURL.origin);
// Prints https://xn--1xa.example.com
```

Legacy urlObject 已经过时。


API 参考：

- Class: URL
    - new URL(input[, base])
    - url.hash
    - url.host
    - url.hostname
    - url.href
    - url.origin
    - url.password
    - url.pathname
    - url.port
    - url.protocol
    - url.search
    - url.searchParams
    - url.username
    - url.toString()
    - url.toJSON()
    - url.domainToASCII(domain)
    - url.domainToUnicode(domain)
    - url.fileURLToPath(url)
    - url.format(URL[, options])
    - url.pathToFileURL(path)

- Class: URLSearchParams
    - new URLSearchParams()
    - new URLSearchParams(string)
    - new URLSearchParams(obj)
    - new URLSearchParams(iterable)
    - urlSearchParams.append(name, value)
    - urlSearchParams.delete(name)
    - urlSearchParams.entries()
    - urlSearchParams.forEach(fn[, thisArg])
    - urlSearchParams.get(name)
    - urlSearchParams.getAll(name)
    - urlSearchParams.has(name)
    - urlSearchParams.keys()
    - urlSearchParams.set(name, value)
    - urlSearchParams.sort()
    - urlSearchParams.toString()
    - urlSearchParams.values()
    - urlSearchParams[Symbol.iterator]()


# 🚩 DNS Module
- https://nodejs.org/docs/latest-v14.x/api/dns.html

虽然此模块以 DNS - Domain Name System 命名，但并不总是使用 DNS 协议查找域名。

dns.lookup() 使用操作系统工具执行域名解析，它可能不需要执行任何网络通信，执行它可以像同一系统上的其他应用程序那样执行名称解析。

```
const dns = require('dns');

dns.lookup('example.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
// address: "93.184.216.34" family: IPv4
```

示范，正向与反向域名解析：

```
const dns = require('dns');

dns.resolve4('archive.org', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});
```

尽管 dns.lookup() 以及各种 DNS 域名解析函数或反解函数目标是转换域名与相关联 IP 地址，但它们的行为完全不同，这些差异会对 Node 程序行为产生微妙但重要的影响。

简单地说，dns.lookup() 和其它程序一样使用操作系统的域名工具，如 /etc/hosts 配置文件，几乎也和 ping 命令一样执行域名解析过程。

在大多数 POSIX-like 操作系统上，dns.lookup() 函数可以通过配置 nsswitch.conf(5) 或 resolv.conf(5) 来改变行为，这些配置同时也会影响系统的其它程序。

尽管调用 dns.lookup() 是异步执行的 JavaScript 脚本，但它是通过 libuv's threadpool 同步调用 getaddrinfo(3) 实现的，这可能导致令人惊讶的负面性能影响，参考 UV_THREADPOOL_SIZE 文档。

许多网络 API 都需要 dns.lookup() 来解析域名，如果使用 dns.lookup() 进行域名解析有问题，可以使用地址而非域名。一些网络 API 如 `socket.connect()` `dgram.createSocket()` 允许默认的域名解析函数 dns.lookup() 替换为其它实现。

除了 dns.lookup()，模块下的其它函数会联接真实 DNS 服务器执行域名解析，它们总是请求网络，忽略其它域名工具，并且不像 dns.lookup() 使用类似 /etc/hosts 这样的本地配置文件。

各个正向解析与反向解析函数 dns.resolve() & dns.reverse() 与 dns.lookup() 函数的实现不同，它们不使用 getaddrinfo(3) 函数，并且总是由 libuv's threadpool 异步地通过网络请求 DNS 查询。

因此，这些函数不会对 libuv 线程池上其他进程产生和 dns.lookup() 相同的负面影响。



域名解析函数回调中的 rrtype：

    |  rrtype |        records contains        | Result type |  Shorthand method  |
    |---------|--------------------------------|-------------|--------------------|
    | 'A'     | IPv4 addresses (default)       | <string>    | dns.resolve4()     |
    | 'AAAA'  | IPv6 addresses                 | <string>    | dns.resolve6()     |
    | 'ANY'   | any records                    | <Object>    | dns.resolveAny()   |
    | 'CNAME' | canonical name records         | <string>    | dns.resolveCname() |
    | 'MX'    | mail exchange records          | <Object>    | dns.resolveMx()    |
    | 'NAPTR' | name authority pointer records | <Object>    | dns.resolveNaptr() |
    | 'NS'    | name server records            | <string>    | dns.resolveNs()    |
    | 'PTR'   | pointer records                | <string>    | dns.resolvePtr()   |
    | 'SOA'   | start of authority records     | <Object>    | dns.resolveSoa()   |
    | 'SRV'   | service records                | <Object>    | dns.resolveSrv()   |
    | 'TXT'   | text records                   | <string[]>  | dns.resolveTxt()   |


DNS API 参考

- Class: dns.Resolver
    - Resolver([options])
    - resolver.cancel()
    - dns.getServers()
    - dns.lookup(hostname[, options], callback)
    - dns.lookupService(address, port, callback)
    - dns.resolve(hostname[, rrtype], callback)
    - dns.resolve4(hostname[, options], callback)
    - dns.resolve6(hostname[, options], callback)
    - dns.resolveAny(hostname, callback)
    - dns.resolveCname(hostname, callback)
    - dns.resolveMx(hostname, callback)
    - dns.resolveNaptr(hostname, callback)
    - dns.resolveNs(hostname, callback)
    - dns.resolvePtr(hostname, callback)
    - dns.resolveSoa(hostname, callback)
    - dns.resolveSrv(hostname, callback)
    - dns.resolveTxt(hostname, callback)
    - dns.reverse(ip, callback)
    - dns.setServers(servers)

- Class: dnsPromises.Resolver
    - dnsPromises.getServers()
    - dnsPromises.lookup(hostname[, options])
    - dnsPromises.lookupService(address, port)
    - dnsPromises.resolve(hostname[, rrtype])
    - dnsPromises.resolve4(hostname[, options])
    - dnsPromises.resolve6(hostname[, options])
    - dnsPromises.resolveAny(hostname)
    - dnsPromises.resolveCname(hostname)
    - dnsPromises.resolveMx(hostname)
    - dnsPromises.resolveNaptr(hostname)
    - dnsPromises.resolveNs(hostname)
    - dnsPromises.resolvePtr(hostname)
    - dnsPromises.resolveSoa(hostname)
    - dnsPromises.resolveSrv(hostname)
    - dnsPromises.resolveTxt(hostname)
    - dnsPromises.reverse(ip)
    - dnsPromises.setServers(servers)

- Error codes
    - dns.NODATA:   DNS server returned answer with no data.
    - dns.FORMERR:  DNS server claims query was misformatted.
    - dns.SERVFAIL:     DNS server returned general failure.
    - dns.NOTFOUND:     Domain name not found.
    - dns.NOTIMP:   DNS server does not implement requested operation.
    - dns.REFUSED:  DNS server refused query.
    - dns.BADQUERY:     Misformatted DNS query.
    - dns.BADNAME:  Misformatted host name.
    - dns.BADFAMILY:    Unsupported address family.
    - dns.BADRESP:  Misformatted DNS reply.
    - dns.CONNREFUSED:  Could not contact DNS servers.
    - dns.TIMEOUT:  Timeout while contacting DNS servers.
    - dns.EOF:  End of file.
    - dns.FILE:     Error reading file.
    - dns.NOMEM:    Out of memory.
    - dns.DESTRUCTION:  Channel is being destroyed.
    - dns.BADSTR:   Misformatted string.
    - dns.BADFLAGS:     Illegal flags specified.
    - dns.NONAME:   Given host name is not numeric.
    - dns.BADHINTS:     Illegal hints flags specified.
    - dns.NOTINITIALIZED:   c-ares library initialization not yet performed.
    - dns.LOADIPHLPAPI:     Error loading iphlpapi.dll.
    - dns.ADDRGETNETWORKPARAMS:     Could not find GetNetworkParams function.
    - dns.CANCELLED:    DNS query cancelled.


# 🚩 UDP dgram Module
- https://nodejs.org/docs/latest-v14.x/api/dgram.html

    - Example: IPv6 outgoing multicast interface
    - Example: IPv4 outgoing multicast interface
    - Call results

dgram 模块是对 UDP socket 的一层封装，相对 TCP 协议的 net 模块简单很多。

IPv4/v6 数据报的最大大小取决于 MTU - Maximum Transmission Unit 和 Payload 长度字段大小。

有效负载长度字段为 16 bits，这意味着正常有效负载不能超过 64KB，包括 Internet 标头和数据：

    65507 Bytes = 65535 − 8 Bytes UDP Header − 20 Bytes IP Header

这通常适用于环回接口，但对于大多数主机和网络来说，这样长的数据报消息是不切实际的。

MTU 是给定链路层技术可以支持的最大数据报消息大小，对于任何链路，IPv4 都要求最小 MTU 为 68 Bytes，而 IPv4 推荐 MTU 576（通常推荐为拨号类型应用程序的 MTU），无论它们是完整到达，还是片段到达。

对于 IPv6，最小 MTU 是 1280 个八位字节，但是，强制的最小片段重组缓冲区大小是 1500 个八位字节。68 个八位字节的值非常小，因为大多数当前的链路层技术，如以太网的最小 MTU 为 1500。

不可能预先知道包可能通过的每个链路的 MTU，发送大于接收器 MTU 的数据报将不起作用，因为数据包将被无声地丢弃，而不会通知源数据没有到达其预期的收件人。

MTU 参数是网络调节的重要因素，因为包中的额外开销量相当高。高 MTU 值减少了头信息浪费的字节数，对大量数据传输尤其重要，而对小于 MTU 的传输没有影响。


UDP 客户端 vs UDP 服务端

```
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var opt = {
  port: 3000,
  address: '127.0.0.1',
}

server.on('listening', function () {
    var {address, port} = server.address();
    console.log('UDP Server listening on %s:%s ', address, port);
});

server.on('message', function (message, remote) {
    console.log("%s:%s - %s", remote.address, remote.port, message.toString());
});

server.bind(opt);

```


```
var dgram = require('dgram');

var {port, address} = {
  port: 3000,
  address: '127.0.0.1',
};
var message = Buffer.from('Biu! Biu! are your ok?');

var client = dgram.createSocket('udp4');

client.send(message, port, address, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to %s:%s', address, port);
    client.close();
});
```

通过 UDP 实现广播功，服务端代码修改如下，只需要 bind(port)，或者 IP 改为四个 0 即当前主机地址：

```
// broadcast-server.js
var opt = {
  port: 3000,
  address: '0.0.0.0',
}
// ...
server.bind(opt);
```

创建客户端，向当前子网的广播地址 255.255.255.255:3000 或本地广播地址 127.0.0.255:3000 进行广播：

```
var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var {port, address} = {
  port: 3000,
  address: '127.0.0.255',
  address: '255.255.255.255',
};
var message = Buffer.from('Biu! Biu! are your ok?');

client.bind(function(){
  client.setBroadcast(true);
  client.send(message, port, address, function(err){
      if(err) throw err;
      console.log('UDP message sent to %s:%s', address, port);
      client.close();
  });
});
```


UDP/datagram sockets

- Class: dgram.Socket
    - Event: 'close'
    - Event: 'connect'
    - Event: 'error'
    - Event: 'listening'
    - Event: 'message'
    - socket.addMembership(multicastAddress[, multicastInterface])
    - socket.addSourceSpecificMembership(sourceAddress, groupAddress[, multicastInterface])
    - socket.address()
    - socket.bind([port][, address][, callback])
    - socket.bind(options[, callback])
    - socket.close([callback])
    - socket.connect(port[, address][, callback])
    - socket.disconnect()
    - socket.dropMembership(multicastAddress[, multicastInterface])
    - socket.dropSourceSpecificMembership(sourceAddress, groupAddress[, multicastInterface])
    - socket.getRecvBufferSize()
    - socket.getSendBufferSize()
    - socket.ref()
    - socket.remoteAddress()
    - socket.send(msg[, offset, length][, port][, address][, callback])
    - socket.setBroadcast(flag)
    - socket.setMulticastInterface(multicastInterface)
    - socket.setMulticastLoopback(flag)
    - socket.setMulticastTTL(ttl)
    - socket.setRecvBufferSize(size)
    - socket.setSendBufferSize(size)
    - socket.setTTL(ttl)
    - socket.unref()

- dgram module functions
    - dgram.createSocket(options[, callback])
    - dgram.createSocket(type[, callback])


# 🚩 Net Module
- Linux C 编程一站式学习 ch37 - UNIX Domain Socket IPC https://akaedu.github.io/book/ch37s04.html
- Advanced Programming in the UNIX Environment Third Edition - Chapter 16. Network IPC: Sockets
- Accept-Ranges https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.5

《UNIX环境高级编程》，英文缩写 APUE，赫赫有名，几乎没几个计算机专业的毕业生没听说过，但是其实并没有几个人真的看过，看完过。但凡有程序员搬家卖书，几乎都少不了这一本。这是一个有趣的现象：计算机行业有许多名著，历史悠久，赫赫有名，人人都买，但是没几个人认真看。

《APUE》之所以被称为不朽之作，并不是因为它把那些东西讲的细，讲的精准，而是因为它是站在创作者的角度，详细分析UNIX系统本身。它真正讲的是UNIX是个什么东西，UNIX是如何实现某个功能的，几个UNIX变种（Linux，Mac OS X，FreeBSD，Solaris）分别有什么异同，程序员可以通过提供的接口做哪些事情。

《C程序设计语言》这本书很薄，正文只有100多页不到200页，只是讲了 C 语言，其他真的什么都没有讲。这书基本人人都看过，但是看过之后可能会有一些困惑“这些我都懂了，但是我能做什么呢？然后我应该学点什么呢”。

如果带着目的去翻一本书，而不是从头到尾地看，也许收获会更大。因为，从头看到尾的这种方式很容易让人有种错觉，就是看完整本书就该什么都会了。

Net 模块不仅提供基于 stream 的网络底层 TCP API，其更重要的功能是 IPC - Inter-process communication，在 Node 环境中最常用的手段就是基于 socket 的进程间通信手段。

在 Windows 平台下，IPC 基于 named pipes 实现，在其它系统基于 Unix domain sockets。

原本 socket 为网络通讯设计，而随着基于 socket 上面的 IPC 机制实现，即 UNIX Domain Socket 可以带来更优化的，专用于进程间通信的网络通信。

虽然 socket 可用于同一台主机的进程间通讯，通过 loopback 127.0.0.1，但是 UNIX Domain Socket 方式用于 IPC 更有效率：不需要经过 TCP/IP 网络协议栈，不需要打包拆包、计算校验和、维护序号和应答等，而是直接将应用层数据从一个进程拷贝到另一个进程。

UNIX Domain Socket 提供 SOCK_DGRAM 或 SOCK_STREAM 两种 API 接口，类似于 TCP/UDP，但是面向消息的 UNIX Domain Socket 也是可靠的，消息既不会丢失也不会顺序错乱。

UNIX Domain Socket 与网络 Web socket 编程最明显的不同在于地址格式不同，用结构体 sockaddr_un 表示。Web socket 是 IP:Port，而 UNIX Domain Socket 是一个 socket 类型的文件，这个文件由 bind() 调用创建。

服务器端的步骤如下：

1. socket - 建立一个 socket；
2. bind - 根据 AF_UNIX、AF_INET 通信方式绑定 socket 到某个文件上或某个端口上；
3. listen - 开始监听，每监听到新的连接就保存在一个队列，其长度就是 backlog；
4. accept - 开始接收客户端连接，并新建一个 socket 对象和客户进行通信；
5. read/write - 读取或发送数据到客户端；
6. close - 通信完成后关闭 socket；

客户端的步骤如下：

1. socket - 建立一个 socket；
2. connect - 根据 AF_UNIX、AF_INET 通信方式主动连接服务器端的某个文件或某个端口；
3. read/write - 服务器 accept 连接后，读取或发送数据到服务器端；
4. close - 通信完成后关闭 socket；

关于 Unix Domain Socket 的应用，参考 cluster 模块。


Server 实现：

```
var net = require('net');

var opt = {
    host: '127.0.0.1',
    port: '3000'
};

var server = net.createServer(function(socket){
    socket.write("Hi there!, I'm web server.");
  socket.on('data', (data) => {
    console.log('server roger that: [%s]', data);
  })
    socket.end();
})
.on('error', err => console.log)
// Grab an arbitrary unused port if opt was omitted.
.listen(opt, ()=>{
  console.log('Server listen on', server.address())
});

```

Client 实现：

```
var net = require('net');
var opt = {
    host: '127.0.0.1',
    port: '3000'
};

var socket = net.connect(opt, function(){
    socket.write("Hi! I'm client");
});

socket.on('data', function(data){
    console.log('client roger that: [%s]', data);
    socket.end();
});
```


- 静态方法及成员
    - net.connect()
    - net.connect(options[, connectListener])
    - net.connect(path[, connectListener])
    - net.connect(port[, host][, connectListener])
    - net.createConnection()
    - net.createConnection(options[, connectListener])
    - net.createConnection(path[, connectListener])
    - net.createConnection(port[, host][, connectListener])
    - net.createServer([options][, connectionListener])
    - net.isIP(input)
    - net.isIPv4(input)
    - net.isIPv6(input)

- Class: net.Server
    - new net.Server([options][, connectionListener])
    - Event: 'close'
    - Event: 'connection'
    - Event: 'error'
    - Event: 'listening'
    - server.address()
    - server.close([callback])
    - server.connections ⛔
    - server.getConnections(callback)
    - server.listen()
    - server.listen(handle[, backlog][, callback])
    - server.listen(options[, callback])
    - server.listen(path[, backlog][, callback])
    - server.listen([port[, host[, backlog]]][, callback])
    - server.listening
    - server.maxConnections
    - server.ref()
    - server.unref()

- Class: net.Socket
    - new net.Socket([options])
    - Event: 'close'
    - Event: 'connect'
    - Event: 'data'
    - Event: 'drain'
    - Event: 'end'
    - Event: 'error'
    - Event: 'lookup'
    - Event: 'ready'
    - Event: 'timeout'
    - socket.address()
    - socket.bufferSize
    - socket.bytesRead
    - socket.bytesWritten
    - socket.connect()
    - socket.connect(options[, connectListener])
    - socket.connect(path[, connectListener])
    - socket.connect(port[, host][, connectListener])
    - socket.connecting
    - socket.destroy([error])
    - socket.destroyed
    - socket.end([data[, encoding]][, callback])
    - socket.localAddress
    - socket.localPort
    - socket.pause()
    - socket.pending
    - socket.ref()
    - socket.remoteAddress
    - socket.remoteFamily
    - socket.remotePort
    - socket.resume()
    - socket.setEncoding([encoding])
    - socket.setKeepAlive([enable][, initialDelay])
    - socket.setNoDelay([noDelay])
    - socket.setTimeout(timeout[, callback])
    - socket.unref()
    - socket.write(data[, encoding][, callback])


# 🚩 HTTP/HTTPS Web 模块
- https://nodejs.org/docs/latest-v9.x/api/http.html#http_class_http_incomingmessage
- https://nodejs.org/docs/latest-v12.x/api/https.html
- https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

http.get(options[, callback])
http.get(url[, options][, callback])
http.request(options[, callback])
http.request(url[, options][, callback])
https.get(options[, callback])
https.get(url[, options][, callback])
https.globalAgent
https.request(options[, callback])
https.request(url[, options][, callback])

HTTP GET 请求

    var http = require('http');
    var options = {
        host: 'www.jinian.com',
        port:80,
        path:'/wxappApi3/debug?debug=1',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    http.get(options, function(res) {
        var resData = "";
        res.on("data",function(data){
            resData += data;
        });
        res.on("end", function() {
            let json = JSON.parse(resData);
            console.log([resData,JSON.stringify(json,null,'    ')]);
        });
    }).on("error", function (err) {  
        // (err.stack)  
    });  


HTTPS POST 请求

    // var http = require('http');
    var https = require('https');
    var querystring = require('querystring');
    var postData = querystring.stringify({
        'msg' : 'Hello World!'
    });
     
    var options = {
        host: 'oxyxl.xiubao.com',
        port:443,
        path:'/wxappApi2/debug?debug=1',
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };
     
    var req = https.request(options, (res) => {
        let headers = JSON.stringify(res.headers,null,'  ');
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${headers}`);
        res.setEncoding('utf8');
        let data = "";
        res.on('data', (chunk) => {
            data += chunk;
            // console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            let json = JSON.parse(data);
            console.log( JSON.stringify(json,null,'  ') );
        });
    });
     
    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });
     
    // write data to request body
    req.write(postData);
    req.end();


- Class: http.Agent
    - new Agent([options])
    - agent.createConnection(options[, callback])
    - agent.keepSocketAlive(socket)
    - agent.reuseSocket(socket, request)
    - agent.destroy()
    - agent.freeSockets
    - agent.getName(options)
    - agent.maxFreeSockets
    - agent.maxSockets
    - agent.requests
    - agent.sockets
Class: http.ClientRequest
    - Event: 'abort'
    - Event: 'connect'
    - Event: 'continue'
    - Event: 'response'
    - Event: 'socket'
    - Event: 'timeout'
    - Event: 'upgrade'
    - request.abort()
    - request.aborted
    - request.connection
    - request.end([data[, encoding]][, callback])
    - request.flushHeaders()
    - request.getHeader(name)
    - request.removeHeader(name)
    - request.setHeader(name, value)
    - request.setNoDelay([noDelay])
    - request.setSocketKeepAlive([enable][, initialDelay])
    - request.setTimeout(timeout[, callback])
    - request.socket
    - request.write(chunk[, encoding][, callback])
Class: http.Server
    - Event: 'checkContinue'
    - Event: 'checkExpectation'
    - Event: 'clientError'
    - Event: 'close'
    - Event: 'connect'
    - Event: 'connection'
    - Event: 'request'
    - Event: 'upgrade'
    - server.close([callback])
    - server.listen()
    - server.listening
    - server.maxHeadersCount
    - server.setTimeout([msecs][, callback])
    - server.timeout
    - server.keepAliveTimeout
- Class: http.ServerResponse
    - Event: 'close'
    - Event: 'finish'
    - response.addTrailers(headers)
    - response.connection
    - response.end([data][, encoding][, callback])
    - response.finished
    - response.getHeader(name)
    - response.getHeaderNames()
    - response.getHeaders()
    - response.hasHeader(name)
    - response.headersSent
    - response.removeHeader(name)
    - response.sendDate
    - response.setHeader(name, value)
    - response.setTimeout(msecs[, callback])
    - response.socket
    - response.statusCode
    - response.statusMessage
    - response.write(chunk[, encoding][, callback])
    - response.writeContinue()
    - response.writeHead(statusCode[, statusMessage][, headers])
- Class: http.IncomingMessage
    - Event: 'aborted'
    - Event: 'close'
    - message.destroy([error])
    - message.headers
    - message.httpVersion
    - message.method
    - message.rawHeaders
    - message.rawTrailers
    - message.setTimeout(msecs, callback)
    - message.socket
    - message.statusCode
    - message.statusMessage
    - message.trailers
    - message.url

- 静态方法及成员
    - http.METHODS
    - http.STATUS_CODES
    - http.createServer([options][, requestListener])
    - http.get(options[, callback])
    - http.globalAgent
    - http.request(options[, callback])

HTTPS API 参考：

- Class: https.Agent
    - new Agent([options])
    - Event: 'keylog'

- Class: https.Server
    - server.close([callback])
    - server.headersTimeout
    - server.listen()
    - server.maxHeadersCount
    - server.setTimeout([msecs][, callback])
    - server.timeout
    - server.keepAliveTimeout
    
- 静态方法及成员
    - https.createServer([options][, requestListener])
    - https.get(options[, callback])
    - https.get(url[, options][, callback])
    - https.globalAgent
    - https.request(options[, callback])
    - https.request(url[, options][, callback])


## request 封装

    function get_file_contents(url, opts){
        let callback = typeof opts==="function"? opts:opts.callback;
        const http = require("http");
        const https = require("https");

        const querystring = require('querystring');
        var postData = querystring.stringify(opts.data||{'msg' : 'Hello World!'});

        var regs = {
            http :  /^http:\/\/([\.\w]+):?(\d+)?(\/.+)/,
            https:  /^https:\/\/([\.\w]+):?(\d+)?(\/.+)/,
            file:  /^file:\/\//,
            local: /^(\/|^\.\/|^\.\.\/|\w+\/|\w:\/)/
        }
        var options = {
            hostname: '127.0.0.1',
            port: 5858,
            path: '/json/list',
            method: 'POST',
            // key: fs.readFileSync('./keys/client.key'), 
            // cert: fs.readFileSync('./keys/client.crt'),
            // ca: [fs.readFileSync('./keys/ca.crt')],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': 0 // Buffer.byteLength(postData)
            }
        };
        for(let p in opts){
            if( p=="callback" || p=="data" ) continue;
            options[p] = opts[p];
        }

        let webRequest = null, ishttp=regs.http.test(url), ishttps=regs.https.test(url);
        if( ishttp || ishttps ){
            console.log([ishttp, ishttps]);
            let m = regs.http.exec(url) || regs.https.exec(url);
            options['hostname'] = m[1];
            options['port'] = m[2]? m[2]:(ishttp? 80:443);
            options['path'] = m[3];
            if( ishttp ) webRequest = http;
            if( ishttps) webRequest = https;
        }
        let req = webRequest.request(options, (res) => {
            var data = "";
            res.setEncoding('utf8');
            res.on("data",function(chunk){ // Uint8Array
                data += chunk;
                // console.log(chunk+"");
            });
            res.on("end", function() {
                try{
                    let json = JSON.parse(data);
                    callback && callback(data, json);
                }catch(e){
                    callback && callback(data, {});
                }
                // document.write(data);
            });
        }).on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
        });
         
        // write data to request body
        req.write(postData);
        req.end();
    }

    // let url = "http://www.jinian.com/wxappApi3/debug?debug=1";
    let url = "https://oxyxl.xiubao.com/wxappApi2/apimobilestarrank?action=vote_star_wxapp";
    let res = get_file_contents(url, (data,json)=>{
        console.log(data);
        console.log(JSON.stringify(json,null,"  "));
    });


## Request 模块
https://github.com/mikeal/request

    // JSON.stringify(json,null,"    ")
    function print_r(o,property,indent,level){
        indent = indent||0;
        level = level||0;
        let isobject = typeof(o)==="object";
        if( level>10 ) return isobject? o+"":typeof(o);
        if( !isobject ) return "\""+o+"\"";

        let max = "                                  ";
        let pad = max.substr(0,indent);
        let padsub = max.substr(0,indent+4);
        let f = [];
        // o.test = "\"\'\"\"++++++";

        for( let p in o){
            if( typeof o[p]==="object" ){
                f.push( arguments.callee(o[p], p, indent+4) );
            }else{
                f.push( padsub+"\""+p+"\":\""+(o[p]+"").replace(/\"/g,"\\\"")+"\"" );
            }
        }
        if( f.length ) f[f.length-1] += "\n";
        return pad+(property? "\""+property+"\":":"")+"{\n"+f.join(",\n")+pad+"}";
    }

    var request = require('request');
    request.post('http://www.jinian.com/wxappApi3/debug?debug=1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(body);
            // console.log(print_r(json))
            document.write("<pre>"+print_r(json)+"</pre>")
        }
    })


Request —— 让 Node.js http请求变得超简单 - 江小湖のBlog - https://segmentfault.com/a/1190000000385867

    var request = require('request'), fs = require('fs');
    var img = 'https://gss0.bdstatic.com/7051cy89RcgCncy6lo7D0j9wexYrbOWh7c50/shangcheng/hiv270170.jpg';
    var stream = fs.createWriteStream('deom.jpg');
    request(img).pipe(strema);


任何响应都可以输出到文件流。

    request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))

反过来，也可以将文件传给PUT或POST请求。未提供header的情况下，会检测文件后缀名，在PUT请求中设置相应的content-type。

    fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'))

请求也可以pipe给自己。这种情况下会保留原content-type和content-length。

    request.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'))

request支持 application/x-www-form-urlencoded 和 multipart/form-data 实现表单文件上传。

x-www-form-urlencoded很简单：

    request.post('http://service.com/upload', {form:{key:'value'}})
    request.post('http://service.com/upload').form({key:'value'})

使用multipart/form-data不用操心设置header之类的琐事，request会帮你解决。

    var r = request.post('http://service.com/upload')
    var form = r.form()
    form.append('my_field', 'my_value')
    form.append('my_buffer', new Buffer([1, 2, 3]))
    form.append('my_file', fs.createReadStream(path.join(__dirname, 'doodle.png'))
    form.append('remote_file', request('http://google.com/doodle.png'))

HTTP认证

    request.get('http://some.server.com/').auth('username', 'password', false);
    request.get('http://some.server.com/', {
      'auth': {
        'user': 'username',
        'pass': 'password',
        'sendImmediately': false
      }
    });

sendImmediately，默认为真，支持Digest认证，发送一个基本的认证header。设为false之后，收到401会重试（服务器的401响应必须包含WWW-Authenticate指定认证方法）。

OAuth 登录

    // Twitter OAuth
    var qs = require('querystring')
      , oauth =
        { callback: 'http://mysite.com/callback/'
        , consumer_key: CONSUMER_KEY
        , consumer_secret: CONSUMER_SECRET
        }
      , url = 'https://api.twitter.com/oauth/request_token'
      ;
    request.post({url:url, oauth:oauth}, function (e, r, body) {
      // Ideally, you would take the body in the response
      // and construct a URL that a user clicks on (like a sign in button).
      // The verifier is only available in the response after a user has
      // verified with twitter that they are authorizing your app.
      var access_token = qs.parse(body)
        , oauth =
          { consumer_key: CONSUMER_KEY
          , consumer_secret: CONSUMER_SECRET
          , token: access_token.oauth_token
          , verifier: access_token.oauth_verifier
          }
        , url = 'https://api.twitter.com/oauth/access_token'
        ;
      request.post({url:url, oauth:oauth}, function (e, r, body) {
        var perm_token = qs.parse(body)
          , oauth =
            { consumer_key: CONSUMER_KEY
            , consumer_secret: CONSUMER_SECRET
            , token: perm_token.oauth_token
            , token_secret: perm_token.oauth_token_secret
            }
          , url = 'https://api.twitter.com/1/users/show.json?'
          , params =
            { screen_name: perm_token.screen_name
            , user_id: perm_token.user_id
            }
          ;
        url += qs.stringify(params)
        request.get({url:url, oauth:oauth, json:true}, function (e, r, user) {
          console.log(user)
        })
      })
    })

定制 HTTP header，User-Agent之类可以在options对象中设置。在下面的例子中，我们调用github API找出某仓库的收藏数和派生数。我们使用了定制的User-Agent和https.

    var request = require('request');

    var options = {
        url: 'https://api.github.com/repos/mikeal/request',
        headers: {
            'User-Agent': 'request'
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info.stargazers_count + " Stars");
            console.log(info.forks_count + " Forks");
        }
    }

    request(options, callback);

默认情况下，cookies是禁用的。在defaults或options将jar设为true，使后续的请求都使用cookie.

    var request = request.defaults({jar: true})
    request('http://www.google.com', function () {
      request('http://images.google.com')
    })

通过创建request.jar()的新实例，可以使用定制的cookie，而不是request全局的cookie jar。

    var j = request.jar()
    var request = request.defaults({jar:j})
    request('http://www.google.com', function () {
      request('http://images.google.com')
    })

或者

    var j = request.jar()
    var cookie = request.cookie('your_cookie_here')
    j.setCookie(cookie, uri, function (err, cookie){})
    request({url: 'http://www.google.com', jar: j}, function () {
      request('http://images.google.com')
    })

注意，setCookie至少需要三个参数，最后一个是回调函数。


# 🚩 HTTP2 Module
- https://nodejs.org/docs/latest-v12.x/api/http2.html

核心对象 API 参考：


- Class: Http2Session
    - Event: 'close'
    - Event: 'connect'
    - Event: 'error'
    - Event: 'frameError'
    - Event: 'goaway'
    - Event: 'localSettings'
    - Event: 'ping'
    - Event: 'remoteSettings'
    - Event: 'stream'
    - Event: 'timeout'
    - http2session.alpnProtocol
    - http2session.close([callback])
    - http2session.closed
    - http2session.connecting
    - http2session.destroy([error][, code])
    - http2session.destroyed
    - http2session.encrypted
    - http2session.goaway([code[, lastStreamID[, opaqueData]]])
    - http2session.localSettings
    - http2session.originSet
    - http2session.pendingSettingsAck
    - http2session.ping([payload, ]callback)
    - http2session.ref()
    - http2session.remoteSettings
    - http2session.setTimeout(msecs, callback)
    - http2session.socket
    - http2session.state
    - http2session.settings([settings][, callback])
    - http2session.type
    - http2session.unref()

- Class: ServerHttp2Session
    - serverhttp2session.altsvc(alt, originOrStream)
    - Specifying alternative services
    - serverhttp2session.origin(...origins)

- Class: ClientHttp2Session
    - Event: 'altsvc'
    - Event: 'origin'
    - clienthttp2session.request(headers[, options])

- Class: Http2Stream
    - Event: 'aborted'
    - Event: 'close'
    - Event: 'error'
    - Event: 'frameError'
    - Event: 'ready'
    - Event: 'timeout'
    - Event: 'trailers'
    - Event: 'wantTrailers'
    - http2stream.aborted
    - http2stream.bufferSize
    - http2stream.close(code[, callback])
    - http2stream.closed
    - http2stream.destroyed
    - http2stream.endAfterHeaders
    - http2stream.id
    - http2stream.pending
    - http2stream.priority(options)
    - http2stream.rstCode
    - http2stream.sentHeaders
    - http2stream.sentInfoHeaders
    - http2stream.sentTrailers
    - http2stream.session
    - http2stream.setTimeout(msecs, callback)
    - http2stream.state
    - http2stream.sendTrailers(headers)

- Class: ClientHttp2Stream
    - Event: 'continue'
    - Event: 'headers'
    - Event: 'push'
    - Event: 'response'

- Class: ServerHttp2Stream
    - http2stream.additionalHeaders(headers)
    - http2stream.headersSent
    - http2stream.pushAllowed
    - http2stream.pushStream(headers[, options], callback)
    - http2stream.respond([headers[, options]])
    - http2stream.respondWithFD(fd[, headers[, options]])
    - http2stream.respondWithFile(path[, headers[, options]])

- Class: Http2Server
    - Event: 'checkContinue'
    - Event: 'connection'
    - Event: 'request'
    - Event: 'session'
    - Event: 'sessionError'
    - Event: 'stream'
    - Event: 'timeout'
    - server.close([callback])
    - server.setTimeout([msecs][, callback])

- Class: Http2SecureServer
    - Event: 'checkContinue'
    - Event: 'connection'
    - Event: 'request'
    - Event: 'session'
    - Event: 'sessionError'
    - Event: 'stream'
    - Event: 'timeout'
    - Event: 'unknownProtocol'
    - server.close([callback])
    - server.setTimeout([msecs][, callback])

- 静态方法及成员
    - http2.createServer(options[, onRequestHandler])
    - http2.createSecureServer(options[, onRequestHandler])
    - http2.connect(authority[, options][, listener])
    - http2.constants
    - http2.getDefaultSettings()
    - http2.getPackedSettings([settings])
    - http2.getUnpackedSettings(buf)


对应 HTTP 类型差别：

- Class: http2.Http2ServerRequest
    - Event: 'aborted'
    - Event: 'close'
    - request.aborted
    - request.authority
    - request.complete
    - request.destroy([error])
    - request.headers
    - request.httpVersion
    - request.method
    - request.rawHeaders
    - request.rawTrailers
    - request.scheme
    - request.setTimeout(msecs, callback)
    - request.socket
    - request.stream
    - request.trailers
    - request.url

- Class: http2.Http2ServerResponse

    - response.stream
    - response.writableEnded
    - response.createPushResponse(headers, callback)

    ## React-materials 组件 UMD 导出示例[Qrcode]
Fusion Next 组件 Github 仓库地址: https://github.com/alibaba-fusion/next
Iceworks React-materials https://github.com/ice-lab/react-materials
使用 Babel 避免 Webpack 编译运行时模块依赖 https://www.jianshu.com/p/2bbc7d50220f
Webpack babel-loader https://github.com/babel/babel-loader
ReactQRCode https://www.npmjs.com/package/react-qrcode
QrCode.React https://www.npmjs.com/package/qrcode.react

以导出 React Materials 的 QRCode 组件为例，它基于 QrCode.React 实现，QRcode 組件名是 IceQrcode，其内部代码层次结构如下：

- 通过 Panel.jsx 文件封装 Qrcode.react 组件
- Qrcode.jsx 封装 Pannel.jsx 导出为 IceQrcode 组件
- IceQrcode 引用了 @alifd/next 的 Balloon 组件作为弹出界面实现
- QrCodeIcon.jsx 则是二维码图标的 SVG 实现


首先创建 React 工程，安装依赖模块：

    npm init
    npm install react react-dom react-scripts
    npm install ice-scripts ice-plugin-fusion
    npm install @alifd/next moment
    npm install @icedesign/qrcode qrcode.react
    npm install node-sass -g
    npm i node-sass -D --verbose

https://github.com/sass/node-sass/releases

注意 Qrcode 组件模块目录下提供的 build 或 start 脚本在 Windows 平台有兼容问题，命令如果使用了点号相对路径就需要使用引号包括，否则需要使用正斜杠表示目录分割，不然识别不了，所以将命令或文件的路径的 forward slash / 修改为反斜杠 backslash \。

      "scripts": {
        "start": "../../node_modules/.bin/ice-scripts dev --config ../../ice.component.config.js",
        "build": "../../node_modules/.bin/ice-scripts build --config ../../ice.component.config.js",
        "prepublishOnly": "npm run build"
      },

在这里不需要使用这些官方的配置，直接通过 @icedesign/qrcode 的发行模块进行导出，但是需要安装 Webpack 的相关 Loaders，因为发布的 ES 模块依赖了 SCSS 样式模块：

    npm install style-loader css-loader sass-loader

接下来需要配置 Webpack，：

    // webpack.config.js
    module.exports = {
        mode: 'production',
        entry: './node_modules/@icedesign/qrcode/lib/index.js',
        output: {
            filename: '../../js/icedesign-qrcode.min.js',
            // export to AMD, CommonJS, or window
            libraryTarget: 'umd',
            // the name exported to window
            library: 'Qrcode'
        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            // "@alifd/next/es/balloon": "Balloon",
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }]
        }
    };

接着使用打包命令将 ES 模块转换成 UMD 模块供浏览器运行：

    $ webpack --config webpack.config.js
    Hash: 2aa97e4f11021824b76f
    Version: webpack 4.0.0
    Time: 15154ms
    Built at: 2019-11-17 0:30:12
                               Asset     Size  Chunks                    Chunk Names
    ../../js/icedesign-qrcode.min.js  434 KiB       0  [emitted]  [big]  main
       [2] external "React" 42 bytes {0} [built]
       [8] external "ReactDOM" 42 bytes {0} [built]
     [196] ./node_modules/@alifd/next/es/balloon/style.js + 3 modules 221 bytes {0} [built]
           |    4 modules
     [197] ./node_modules/@alifd/next/es/balloon/index.js + 34 modules 141 KiB {0} [built]
           |    35 modules
     [199] ./node_modules/moment/locale sync ^\.\/.*$ 3 KiB {0} [optional] [built]
     [200] (webpack)/buildin/module.js 519 bytes {0} [built]
        + 253 hidden modules

    WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
    This can impact web performance.
    Assets:
      ../../js/icedesign-qrcode.min.js (434 KiB)

因为 Qrcode 组件依赖了 @alifd/next 组件库的 Balloon，打包得到的 UMD 模块文件比较大。Babel 對組件轉譯時，對依賴處理使用了兩種方式： 

    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

    var _balloon = _interopRequireDefault(require("@alifd/next/es/balloon"));
    var _react = _interopRequireWildcard(require("react"));

由于 Babel 使用 Webpack 运行时模块依赖方式加載依賴，這裏就不能直接將 Balloon 組件設置在 externals，這會導致導入不正確，在接下來的組件實例化時導致 React 獲取不到組件定義。需要設置好 Webpack 的 externals，用 Qrcode 原代碼重新以運行時依賴 Balloon 的方式編譯。一個取巧的做法是修改模塊中的 `_balloon.default` 爲全局的 Balloon 符號：

    return _react.default.createElement("div", {
        className: clazz,
        style: style
    }, _react.default.createElement(_balloon.default, {
        align: this.alignMap[align] || this.alignMap.left,
        closable: false,
        alignEdge: true,
        trigger: trigger || _react.default.createElement(_QrCodeIcon.default, {
            className: triggerClazz,
            style: triggerStyle
        }),
        triggerType: "hover"
    }, content));

注意👁‍🗨 打包后得到的 UMD 模块是通过 default 导出 Qrcode 组件的，因此在页面中使用组件时注意正确引用！

    let Qrcode = Qrcode.default;
    let {Panel} = Qrcode.Panel;

如果使用 sass 报错 TypeError: this.getResolve is not a function at Object.loader，可能是 sass 版本太高了如 sass 8.0.0，可以通过安装指定 sass 版本解决：

    npm install sass-loader@7.3.1

如果克隆 Iceworks React-materials 的 Github 源代码仓库开始，就需要配 JSX 开发环境，可以使用 React 官方提供的 create-react-app 脚手架建立模板工程，在进入仓库的本地目录安装各个依赖模块，并配置相关的 Webpack 模块即插件等。

通过 babel-preset-react 支持 React JSX 语法 https://www.babeljs.cn/docs/babel-preset-react

    npm install --save-dev @babel/preset-react
    npm install --save-dev babel-loader

并将 @babel/preset-react 添加到你的 Babel 配置文件中 .babelrc：
    
    {
      "presets": ["env", "stage-0", "react"],
      "plugins": ["transform-runtime"]
    }

添加 babel-loader 配置项：
    
    module: {
        rules: [
          { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }

体验特性 classProperties 需要配置提案特性插件 plugin-proposal-class-properties：

> Syntax error : Support for the experimental syntax 'classProperties' isn't currently enabled

    npm install --save-dev @babel/plugin-proposal-class-properties

然后配置到 .babelrc 或 webpack.config.js：

.babelrc 文配置如下，注意，在新版的 Babel 7 中，像 `preset-2015` 这种带年份的预置不再使用了。

    {
        "presets": [
            "@babel/preset-env", 
            "@babel/preset-2015", 
            "@babel/preset-react"
        ],
        "plugins": [
            "transform-runtime",
            "@babel/plugin-proposal-class-properties"
        ]
    }


或直接配置到 webpack.config.js：

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                // use: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }

导出模块时偶遇到一个问题，不可重现问题。即是引用 Balloon 组件不正确，手动修改一下也可以使用：

    createElement(B.Balloon...)




# 🚩 React + TypeScript + Cropper 图片裁剪示例
- Getting Started with TypeScript and React https://javascriptplayground.com/react-typescript/
- Adding TypeScript https://create-react-app.dev/docs/adding-typescript/
- Cropper.js https://github.com/fengyuanchen/cropperjs
- Cropper as React components http://roadmanfong.github.io/react-cropper/
- react-cropper https://github.com/roadmanfong/react-cropper
- vue-cropperjs https://github.com/Agontuk/vue-cropperjs
- angular-cropper https://github.com/matheusdavidson/angular-cropperjs
- jquery-cropper https://github.com/fengyuanchen/jquery-cropper
- Cropper for jQueryhttps://github.com/fengyuanchen/cropper

Cropper.js 是一个 JavaScript 图片裁剪库，基于它实现的有 React 组件 React-Cropper，也有基于 Vue 和 Angular 的组件，还有基于 jQuery 的插件 jQuery-Cropper。

注意 react-cropperjs 是另一個封裝版本，和 React-Cropper 不是同一個模塊，不建议使用。

官方项目代码发布目录提供了基本的模块打包文件：

    dist/
    ├── cropper.css
    ├── cropper.min.css   (compressed)
    ├── cropper.js        (UMD)
    ├── cropper.min.js    (UMD, compressed)
    ├── cropper.common.js (CommonJS, default)
    └── cropper.esm.js    (ES Module)

直接在页面中引用 UMD 模块即可使用，不依赖 jQuery 等，以下是 Cropper.js Example

    <!-- Wrap the image or canvas element with a block element (container) -->
    <div>
      <img id="image" src="picture.jpg">
    </div>
    /* Limit image width to avoid overflow the container */
    img {
      max-width: 100%; /* This rule is very important, please do not ignore this! */
    }

    // import 'cropperjs/dist/cropper.css';
    import Cropper from 'cropperjs';

    const image = document.getElementById('image');
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });

这里主要介绍 React-Cropper 组件模块的使用。

## Installation

使用 React 脚手架工具創建模板工程，並安裝依賴模塊：

    $ npm install -g create-react-app
    $ create-react-app react-demo
    Creating a new React app in G:\GitHub\React-demo\react-demo.

    Installing packages. This might take a couple of minutes.
    Installing react, react-dom, and react-scripts...

    $ npm install --save react-cropper

脚手架会自动安装核心的依赖，主要是 React 的兩個依賴庫和脚手架模塊，只需要安裝 React-Cropper 模塊就可以直接开始写组件了：

    npm install react react-dom react-scripts 

依賴 cropperjs 的文件 cropper.css 可以在項目目錄下找到：
- /node_modules/react-cropper/node_modules/cropperjs/dist/cropper.css
- /node_modules/cropperjs/dist/cropper.css

使用 create-react-app 构建 TypeScript 项目只需要在創建項目模板時指定 --typescript 參數，以下命令選其一執行創建模板工程：
    
    create-react-app react-demo --typescript
    yarn create react-app react-demo --typescript

對於現有項目引入 TypeScript 需要安裝 TypeScript 依賴，還有各個模塊的類型聲明文件，以下可選 yarn 命令安裝依賴：

    npm install --save typescript @types/node @types/react @types/react-dom @types/jest @types/react-cropper
    yarn add typescript @types/node @types/react @types/react-dom @types/jest @types/react-cropper

再給 TypeScript 創建 tsconfig.json 配置文件：

    $ tsc --init

配置提供了各選項的注解，這裏給一份 tsconfig.js 文件配置參考：

    {
        "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "lib": ["dom", "es2015", "es2015.promise"],
            "jsx": "react",
            "sourceMap": true,
            "strict": true,
            "noImplicitAny": true,
            "baseUrl": "src",
            "paths": {
                "@/*": ["./*"],
            },
            "esModuleInterop": true
        },
        "include": [
            "./src/**/*"
        ]
    }

再將 react-scripts 模塊包目錄内提供的 template-typescript 工程模板拷貝一份即可使用 TypeScript 語法寫組件了，注意要給 React-Cropper 安裝 TypeScript 的類型聲明模塊。沒有類型聲明文件，TypeScript 會給一個隱式類型錯誤信息 implicitly has an 'any' type，或者如果您使用了--noImplicitAny 或通过 tsconfig.json 的 noImplicitAny 选项进行配置為 false 表示許可隱式類型，它不会为任何未知类型抛出错误。通常使用默認配置，即需要顯式指明类型注释。

    $ npm install --save @types/react-cropper

完成配置后，入口文件會從默認的 index.js 更改為默認的 index.tsx，内容基本不變。從 App 組件開始，語法上的差異就開始體現了，多了組件的類型聲明 React.FC：

    const App: React.FC = () => {
        // ...
    }

FC 就是函数组件 FunctionComponent：

    type FC<P = {}> = FunctionComponent<P>;


關於 TypeScript 類型請參考官方文檔：

- 高级类型 https://www.tslang.cn/docs/handbook/advanced-types.html
- Advanced Types https://www.typescriptlang.org/docs/handbook/advanced-types.html

TypeScript 作为靜態类型语言，就是为了可以提供尽可能严格的类型检测，在編譯期反饋錯誤信息，開始適應期會覺得代碼寫起來麻煩。所以办法无非就是你上述提到的两种：要不判断，要不加！但为了高可维护可预测的代码，选择妥协，不然还是用回 JavaScript。


## Quick Example

編寫一個 Cropper 組件，並在 App.js 中引入使用：

    import React, {Component} from 'react';
    import Cropper from 'react-cropper';
    import 'cropperjs/dist/cropper.css'; 
    // see installation section above for versions of NPM older than 3.0.0
    // If you choose not to use import, you need to assign Cropper to default
    // var Cropper = require('react-cropper').default

    import Logo from './logo.svg';

    let review = {position:"fixed", right:0, top:0, zIndex:2};

    export default class Demo extends Component {

      state = {src:""}
      ref = React.createRef();

      _crop(){
        let dt = +Date.now();
        if(this.last > dt-1000/30) return; // set 30fps
        this.last = dt;
        console.log("_crop", this.ref);
        if(!this.ref.current) return;
        let imgdata = this.ref.current.getCroppedCanvas().toDataURL();
        this.setState({src: imgdata});
      }

      render() {
        return (
          [
            <img key="1" src={this.state.src} alt="DEMO" style={review}/>,
            <Cropper
              key="2"
              ref={this.ref}
              src={Logo}
              style={{height: 400, width: '100%'}}
              // Cropper.js options
              aspectRatio={16 / 9}
              guides={false}
              crop={this._crop.bind(this)} >
              </Cropper>,
          ]
        );
      }
    }

例子使用了 React.createRef 来操纵 React 组件实例對應的 DOM 元素，參考官方文檔關於 Refs 的部分。

- Refs and the DOM https://reactjs.org/docs/refs-and-the-dom.html
- Forwarding Refs https://reactjs.org/docs/forwarding-refs.html

每次裁剪動作都會觸發 `_crop()`，在這裏進行圖像數據的獲取及轉換。

## 以 TypeScript 重寫例子

在這裏需要處理一個棘手的問題，就是 React 的 Refs 機制。注意：React Refs 是個難點技術，濫用 Refs 特性可能導致程序的不穩定。

TypeScript 中的 `?:` 符合表示 Nullable types，即可以为 null 的类型，可選項。另外對於不能確定類型的對象，直接使用 any 類型聲明也是一個選擇，万物皆 Any。

在嘗試確定 ReactCropper 相關的 React.createRef() 返回類型的過程，根據 TypeScript 給出了以下類型提示：

    ref: React.RefObject<Cropper> = React.createRef();

    TypeScript error in C:/crop-demo/src/Cropper.tsx(41,11):
    No overload matches this call.
      Overload 1 of 2, '(props: Readonly<ReactCropperProps>): ReactCropper', gave the following error.
        Type 'RefObject<Cropper>' is not assignable to type 'string | (string & ((cropper: ReactCropper | null) => any)) | (((instance: ReactCropper | null) => void) & string) | (((instance: ReactCropper | null) => void) & ((cropper: ReactCropper | null) => any)) | (RefObject<...> & string) | (RefObject<...> & ((cropper: ReactCropper | null) => any)) | undefined'.
          Type 'RefObject<Cropper>' is not assignable to type 'RefObject<ReactCropper> & ((cropper: ReactCropper | null) => any)'.
            Type 'RefObject<Cropper>' is not assignable to type 'RefObject<ReactCropper>'.
              Type 'Cropper' is missing the following properties from type 'ReactCropper': on, context, setState, forceUpdate, and 4 more.
      Overload 2 of 2, '(props: ReactCropperProps, context?: any): ReactCropper', gave the following error.
        Type 'RefObject<Cropper>' is not assignable to type 'string | (string & ((cropper: ReactCropper | null) => any)) | (((instance: ReactCropper | null) => void) & string) | (((instance: ReactCropper | null) => void) & ((cropper: ReactCropper | null) => any)) | (RefObject<...> & string) | (RefObject<...> & ((cropper: ReactCropper | null) => any)) | undefined'.
          Type 'RefObject<Cropper>' is not assignable to type 'RefObject<ReactCropper> & ((cropper: ReactCropper | null) => any)'.
            Type 'RefObject<Cropper>' is not assignable to type 'RefObject<ReactCropper>'.  TS2769

        39 |         <ReactCropper
        40 |           key="2"
      > 41 |           ref={this.ref}
           |           ^`
        42 |           src={Logo}
        43 |           style={{height: 400, width: '100%'}}
        44 |           // Cropper.js options

這個類型錯誤信息有幾個要點：

- 期望的 ref 類型是一長串的交叉类型 Intersection Types 及聯合類型 Union Types，包括 `((cropper: ReactCropper | null) => any)`
- React Ref 配置函數有兩種重載方式響應 `ref={this.ref}`，都是返回 ReactCropper 對象：
    - (props: Readonly<ReactCropperProps>): ReactCropper
    - (props: ReactCropperProps, context?: any): ReactCropper
- 组件标签的属性 `ref={this.ref}` 期望赋值一个 `RefObject<ReactCropper>`

也就是說 React.createRef() 返回的是一個交叉类型 Intersection Types，即 & 符合将多个类型合并为一个类型，滿足其中一個類型就可以。明顯，最簡單省事的做法就是設置 any 類型，就是不管類型。

不過這裏嘗試使用回調函數 `(cropper: ReactCropper | null) => any`，這裏的 cropper 就是未經過封裝的原生 Cropper.js 對象，`getCroppedCanvas` 方法在 Cropper.js 的類型聲明文件可以看到，記得使用命令安裝 `npm install --save @types/cropperjs`。

    ref: React.RefObject<(current: Cropper)=>any> = React.createRef();

    TypeScript error in C:/coding/md/icework/crop-demo/src/Cropper.tsx(26,44):
    Property 'getCroppedCanvas' does not exist on type '(ref: ReactCropper) => any'.  TS2339

        24 |     console.log("_crop", this.ref);
        25 |     if(!this.ref.current) return;
      > 26 |     let imgdata: String = this.ref.current.getCroppedCanvas().toDataURL();
           |                                            ^
        27 |     this.setState({src: imgdata});
        28 |   }
        29 |

這個聲明 ref 類型的寫法是符合 React 的類型定義了，但是又出現另一個問題，在 crop 處理函數中不能正確獲取 current 的對象類型，其實他就 ReactCropper 對象。因爲 ref 聲明的類型是回調函數，而不是 React.RefObject<Cropper> 類型。

結合 React 的類型聲明來看，createRef<T>() 汎型函數的類型 T 是定義 current 屬性的，從調用 current.getCroppedCanvas() 這個方法這一點來看 T 類型應該是使用 React.js 對象，而不是上面提到的那一串交叉類型，這就和 React 内部的 Refs 實現機制衝突了，事實上，React 在 Refs 機制的處理上有欠妥儅。

    function createRef<T>(): RefObject<T>;

    interface RefObject<T> {
        readonly current: T | null;
    }

React.createRef() 函數實現代碼比較簡短，就是返回一個 immutable 不可變對象：

    // an immutable object with a single mutable value
    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }

最後解決方法有二個：

- 一是使用 any 類型定義 this.ref 屬性，跳過 TypeScript 的類型檢查機制，這是最簡單的逃逸法。
- 二是使用 TypeScript 的類型斷言機制 Type assertions，將 current 屬性轉換為 ReactCropper 對象。

我選擇的做法是二者結合，測試了多種方法后將 Cropped 的實例改造成以下的結果，提供了 any 方式，也提供了 Ref 回調函數方式：

    import React, {Component} from 'react';
    import Cropper from 'react-cropper';
    // import Cropper from 'cropperjs';

    // var Cropper = require('react-cropper').default

    import 'cropperjs/dist/cropper.css'; 

    import Logo from './logo.svg';

    let review: React.CSSProperties = {position:"fixed", right:0, top:0, width: "30vw", zIndex:2};

    export default class Demo extends Component {

      instance?: Cropper;
      // ref: any = React.createRef();
      // ref = {current: Cropper};
      ref: React.RefObject<(cuurent: Cropper)=>any> = React.createRef();
      // ref = (cropper:Cropper): {current: Cropper}=>{
      //   // let cropper = new Cropper(new Image());
      //   console.log("ref init", cropper.constructor.name, this.constructor.name);
      //   this.instance = cropper; 
      //   return { current: cropper};
      // };

      state = {src:""};
      last: Number = 0;

      _crop(){
        let dt = +Date.now();
        if(this.last > dt-1000/30) return; // set 30fps
        this.last = dt;
        console.log("do crop", this.instance, this.ref);

        let cropper = (this.ref as unknown as React.RefObject<Cropper>).current!;
        // let cropper = this.instance!;
        let canvas = cropper.getCroppedCanvas();
        let img: String = canvas.toDataURL();
        console.log("do_crop", canvas, img);
        this.setState({src: img});
      }

      render() {
        return (
          [
            <img key="1" src={this.state.src} alt="cropped review" style={review}/>,
            <Cropper
              key="2"
              ref={this.ref as any}
              src={Logo}
              style={{height: 400, width: '100%'}}
              // Cropper.js options
              aspectRatio={16 / 9}
              guides={false}
              crop={this._crop.bind(this)}
               />
              ,
          ]
        );
      }
    }

以上示例使用了以下 TypeScript 特性：

- Type assertions 類型斷言
- New `unknown` top type for TypeScript 3.0
- Optional ? parameters and properties 可选参数和可选属性
- Type guards ! 类型保护


## ReactCropper UMD 模块导出
https://www.webpackjs.com/configuration/externals/
https://www.webpackjs.com/configuration/output/

ReactCropper 默认发布并没有提供 UMD 等模块文件，只是提供了 ES6 模块定义文件，不能直接在浏览器上运行。要在浏览器直接使用 ReactCropper 组件就需要导出 ReactCropper UMD 模块，或者直接使用 Cropper.js 模块。参考 Webpack & UMD 模块打包。

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var ReactCropper =
    /*#__PURE__*/
    function (_Component) {
      ...
      return ReactCropper;
    }(_react.Component);

    ReactCropper.propTypes = {
        ...
    }

    var _default = ReactCropper;
    exports.default = _default;

可以直接使用命令将 ReactCropper 发布的 ES6 模块打包为 UMD 模块，使用 ES6 而非源代码进行打包，有个好处，就是不用配置 React JSX 开发环境，直接打包转换 ES 模块为 UMD 模块即可：

    webpack  .\node_modules\react-cropper\dist\react-cropper.js -o .\dist\react-cropper.min.js --mode development --output-library-target umd --output-library Cropper

另外，这样打包还会将依赖的 React 一起打包到输出文件中，Webpack 提供了 `externals` 配置选项「从输出的 bundle 中排除依赖」。此功能通常对 **library 开发人员** 来说是最有用的，然而也会有各种各样的应用程序用到它。

    // webpack.config.js
    module.exports = {
        mode: 'production',
        entry: './node_modules/react-cropper/dist/react-cropper.js',
        output: {
            filename: './react-cropper.min.js',
            // export to AMD, CommonJS, or window
            libraryTarget: 'umd',
            // the name exported to window
            library: 'Cropper'
        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
        }
    };

执行打包命令时指定配置文件：

    webpack --config webpack.config.js

注意👁‍🗨 打包后得到的 UMD 模块是通过 default 导出 ReactCropper 组件的，因此在页面中使用组件时注意正确引用！

    let ReactCropper = Cropper.default;


## ReactCropper 主要对象参考

    <Cropper
      src='http://fengyuanchen.github.io/cropper/img/picture.jpg'
      aspectRatio={16 / 9} 
      guides={false} 
      crop={this._crop} />

- src
    Type: string
    Default: null

        <Cropper src='http://fengyuanchen.github.io/cropper/img/picture.jpg' />

- alt
    Type: string
    Default: picture
    crossOrigin
    Type: string
    Default: null

- aspectRatio https://github.com/fengyuanchen/cropperjs#aspectratio
- dragMode https://github.com/fengyuanchen/cropperjs#dragmode
- data https://github.com/fengyuanchen/cropperjs#setdatadata
- scaleX https://github.com/fengyuanchen/cropperjs#scalexscalex
- scaleY https://github.com/fengyuanchen/cropperjs#scalexscaley
- enable https://github.com/fengyuanchen/cropperjs#enable
- disable https://github.com/fengyuanchen/cropperjs#disable
- cropBoxData https://github.com/fengyuanchen/cropperjs#setcropboxdatadata
- canvasData https://github.com/fengyuanchen/cropperjs#setcanvasdata
- zoomTo https://github.com/fengyuanchen/cropperjs#zoomto
- moveTo https://github.com/fengyuanchen/cropperjs#moveto
- rotateTo https://github.com/fengyuanchen/cropperjs#rotateto

TypeScript 对象定义

    export interface Options {

        crop?(event: CustomEvent): void;
        cropend?(event: CustomEvent): void;
        cropmove?(event: CustomEvent): void;
        cropstart?(event: CustomEvent): void;
        ready?(event: CustomEvent): void;
        zoom?(event: CustomEvent): void;

        aspectRatio?: number;
        autoCrop?: boolean;
        autoCropArea?: number;
        background?: boolean;
        center?: boolean;
        checkCrossOrigin?: boolean;
        checkOrientation?: boolean;
        cropBoxMovable?: boolean;
        cropBoxResizable?: boolean;
        data?: Data;
        dragMode?: DragMode;
        guides?: boolean;
        highlight?: boolean;
        initialAspectRatio?: number;
        minCanvasHeight?: number;
        minCanvasWidth?: number;
        minContainerHeight?: number;
        minContainerWidth?: number;
        minCropBoxHeight?: number;
        minCropBoxWidth?: number;
        modal?: boolean;
        movable?: boolean;
        preview?: Element | Element[] | NodeList | string;
        responsive?: boolean;
        restore?: boolean;
        rotatable?: boolean;
        scalable?: boolean;
        toggleDragModeOnDblclick?: boolean;
        viewMode?: ViewMode;
        wheelZoomRatio?: number;
        zoomable?: boolean;
        zoomOnTouch?: boolean;
        zoomOnWheel?: boolean;
    }

    declare class Cropper {
        constructor(element: HTMLImageElement | HTMLCanvasElement, options?: Cropper.Options);
        clear(): Cropper;
        crop(): Cropper;
        destroy(): Cropper;
        disable(): Cropper;
        enable(): Cropper;
        getCanvasData(): Cropper.CanvasData;
        getContainerData(): Cropper.ContainerData;
        getCropBoxData(): Cropper.CropBoxData;
        getCroppedCanvas(options?: Cropper.GetCroppedCanvasOptions): HTMLCanvasElement;
        getData(rounded?: boolean): Cropper.Data;
        getImageData(): Cropper.ImageData;
        move(offsetX: number, offsetY?: number): Cropper;
        moveTo(x: number, y?: number): Cropper;
        replace(url: string, onlyColorChanged?: boolean): Cropper;
        reset(): Cropper;
        rotate(degree: number): Cropper;
        rotateTo(degree: number): Cropper;
        scale(scaleX: number, scaleY?: number): Cropper;
        scaleX(scaleX: number): Cropper;
        scaleY(scaleY: number): Cropper;
        setAspectRatio(aspectRatio: number): Cropper;
        setCanvasData(data: Cropper.SetCanvasDataOptions): Cropper;
        setCropBoxData(data: Cropper.SetCropBoxDataOptions): Cropper;
        setData(data: Cropper.SetDataOptions): Cropper;
        setDragMode(dragMode: Cropper.DragMode): Cropper;
        zoom(ratio: number): Cropper;
        zoomTo(ratio: number, pivot?: {x: number; y: number}): Cropper;
        static noConflict(): Cropper;
        static setDefaults(options: Cropper.Options): void;
    }


# 🚩 Eggjs
https://eggjs.org/en/intro/quickstart.html

Egg is born for building enterprise application and framework，we hope Egg will give birth to more application framework to help developers and developing team reduce development and maintenance costs.

Features
- Provide capability to customizd framework base on Egg
- Highly extensible plugin mechanism
- Built-in cluster
- Based on Koa with high performance
- Stable core framework with high test coverage
- Progressive development

Koa is a new Web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for Web applications and APIs.

## Initialization

    $ mkdir egg-example && cd egg-example
    $ npm init egg --type=simple

    $ npm i
    $ npm run dev
    $ open http://localhost:7001

Then add npm scripts to package.json.

    {
      "name": "egg-example",
      "scripts": {
        "dev": "egg-bin dev"
      }
    }

## Enable validate plugin

    // config/plugin.js
    exports.validate = {
      enable: true,
      package: 'egg-validate',
    };

## Router Registry

    // app/router.js
    module.exports = app => {
      const { router, controller } = app;
      router.get('/', controller.home.index);
      router.resources('topics', '/api/v2/topics', controller.topics);
    };

## Create a Controller

    // app/controller/home.js
    const Controller = require('egg').Controller;

    class HomeController extends Controller {
      async index() {
        this.ctx.body = 'Hello world';
      }
    }

    module.exports = HomeController;

Then edit the router file and add a mapping.

    // app/router.js
    module.exports = app => {
      const { router, controller } = app;
      router.get('/', controller.home.index);
    };

Then add a configuration file:

    // config/config.default.js
    exports.keys = <YOUR_SECURITY_COOKIE_KEYS>;

The project directory looks like this:

    egg-example
    ├── app
    │   ├── controller
    │   │   └── home.js
    │   └── router.js
    ├── config
    │   └── config.default.js
    └── package.json

For more information about directory structure, see Directory Structure.

Now you can start up the Web Server and see your application in action.

    $ npm run dev
    $ open http://localhost:7001

Note：

You could write Controller with class or exports style, see more detail at Controller.
And Config could write with module.exports or exports style, see more detail at Node.js modules docs.

## Adding Static Assets
Egg has a built-in plugin called static. In production, it is recommended that you deploy static assets to CDN instead of using this plugin.

static maps /public/* to the directory app/public/* by default.

In this case, we just need to put our static assets into the directory app/public.

    app/public
    ├── css
    │   └── news.css
    └── js
        ├── lib.js
        └── news.js

## Adding Templates for Rendering
In most cases, data are usually read, processed and rendered by the templates before being presented to the user. Thus we need to introduce corresponding template engines to handle it.

Egg does not force to use any particular template engines, but specifies the View Plugins Specification to allow the developers to use different plugins for their individual needs instead.

For more information, cf. View.

In this example, we will use Nunjucks.

First install the corresponding plugin egg-view-nunjucks.

    $ npm i egg-view-nunjucks --save

And enable it.

    // config/plugin.js
    exports.nunjucks = {
      enable: true,
      package: 'egg-view-nunjucks'
    };

    // config/config.default.js
    exports.keys = <YOUR_SECURITY_COOKE_KEYS>;
    // add view's configurations
    exports.view = {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    };

Carefully! config dir, not app/config!

Then create a template for the index page. This usually goes to the app/view directory.

    <!-- app/view/news/list.tpl -->
    <html>
      <head>
        <title>Egg HackerNews Clone</title>
        <link rel="stylesheet" href="/public/css/news.css" />
      </head>
      <body>
        <ul class="news-view view">
          {% for item in list %}
            <li class="item">
              <a href="{{ item.url }}">{{ item.title }}</a>
            </li>
          {% endfor %}
        </ul>
      </body>
    </html>

Then add a controller and router.

    // app/controller/news.js
    const Controller = require('egg').Controller;

    class NewsController extends Controller {
      async list() {
        const dataList = {
          list: [
            { id: 1, title: 'this is news 1', url: '/news/1' },
            { id: 2, title: 'this is news 2', url: '/news/2' }
          ]
        };
        await this.ctx.render('news/list.tpl', dataList);
      }
    }

    module.exports = NewsController;

    // app/router.js
    module.exports = app => {
      const { router, controller } = app;
      router.get('/', controller.home.index);
      router.get('/news', controller.news.list);
    };

Open a browser window and navigate to http://localhost:7001/news. You should be able to see the rendered page.

Tip：In development, Egg enables the development plugin by default, which reloads your worker process when changes are made to your back-end code.

## Create a Service
In practice, controllers usually won't generate data on their own, neither will they contain complicated business logic. Complicated business logic should be abstracted as a busineess logic layer instead, i.e., service.

    Let's create a service to fetch data from the HackerNews.

    // app/service/news.js
    const Service = require('egg').Service;

    class NewsService extends Service {
      async list(page = 1) {
        // read config
        const { serverUrl, pageSize } = this.config.news;

        // use build-in http client to GET hacker-news api
        const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
          data: {
            orderBy: '"$key"',
            startAt: `"${pageSize * (page - 1)}"`,
            endAt: `"${pageSize * page - 1}"`,
          },
          dataType: 'json',
        });

        // parallel GET detail
        const newsList = await Promise.all(
          Object.keys(idList).map(key => {
            const url = `${serverUrl}/item/${idList[key]}.json`;
            return this.ctx.curl(url, { dataType: 'json' });
          })
        );
        return newsList.map(res => res.data);
      }
    }

    module.exports = NewsService;

Egg has HttpClient built in in order to help you make HTTP requests.

Then slightly modify our previous controller.

    // app/controller/news.js
    const Controller = require('egg').Controller;

    class NewsController extends Controller {
      async list() {
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const newsList = await ctx.service.news.list(page);
        await ctx.render('news/list.tpl', { list: newsList });
      }
    }

    module.exports = NewsController;

And also add config.

    // config/config.default.js
    // add news' configurations
    exports.news = {
      pageSize: 5,
      serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };

## Adding Extensions
We might encounter a small problem here. The time that we fetched are Unix Time format, whereas we want to present them in a more friendly way to read.

Egg provides us with a quick way to extend its functionalities. We just need to add extension scripts to the app/extend directory. For more information, cf. Extensions.

In the case of view, we can just write a helper as an extension.

    $ npm i moment --save
    // app/extend/helper.js
    const moment = require('moment');
    exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

Then use it in the templates.

    <!-- app/view/news/list.tpl -->
    {{ helper.relativeTime(item.time) }}

## Adding Middlewares
Suppose that we wanted to prohibit accesses from Baidu crawlers.

Smart developers might quickly guess that we can achieve it by adding a middleware that checks the User-Agent.

    // app/middleware/robot.js
    // options === app.config.robot
    // test demo:
    // curl localhost:7001/news -A "Baiduspider"
    module.exports = (options, app) => {
      return async function robotMiddleware(ctx, next) {
        const source = ctx.get('user-agent') || '';
        const match = options.ua.some(ua => ua.test(source));
        if (match) {
          ctx.status = 403;
          ctx.message = 'Go away, robot.';
        } else {
          await next();
        }
      }
    };

    // config/config.default.js
    // add middleware robot
    exports.middleware = [
      'robot'
    ];
    // robot's configurations
    exports.robot = {
      ua: [
        /Baiduspider/i,
      ]
    };

Now try it using `curl localhost:7001/news -A "Baiduspider"`.

See Middleware for more details.
https://eggjs.org/en/basics/middleware.html

## Adding Configurations
When writing business logic, it is inevitable that we need to manage configurations. Egg provides a powerful way to manage them in a merged configuration file.

Environment-specific configuration files are well supported, e.g. config.local.js, config.prod.js, etc.
Configurations could be set wherever convenient for Applications/Plugins/Framesworks, and Egg will be careful to merge and load them.
For more information on merging, see Configurations.
https://eggjs.org/en/basics/config.html

    // config/config.default.js
    exports.robot = {
      ua: [
        /curl/i,
        /Baiduspider/i,
      ],
    };

    // config/config.local.js
    // only read at development mode, will override default
    exports.robot = {
      ua: [
        /Baiduspider/i,
      ],
    };

    // app/service/some.js
    const Service = require('egg').Service;

    class SomeService extends Service {
      async list() {
        const rule = this.config.robot.ua;
      }
    }

    module.exports = SomeService;

## Exception Handling
https://eggjs.org/en/core/error-handling.html

Taking benefits from framework asynchronous support, all exceptions can be caught by try catch.

With those features, you can take following implementation as reference:

    // app/service/test.js
    try {
      const res = await this.ctx.curl('http://eggjs.com/api/echo', { dataType: 'json' });
      if (res.status !== 200) throw new Error('response status is not 200');
      return res.data;
    } catch (err) {
      this.logger.error(err);
      return {};
    }

Generally, you can use try catch to catch exceptions. However, some implementations may break this mechanism down. Imaging that await makes generators run in order just like a chain. What will happen if one of them jumpoff the chain? The following code can help you realize the imagination:

    // app/controller/home.js
    class HomeController extends Controller {
      async buy () {
        const request = {};
        const config = await ctx.service.trade.buy(request);
        // checking the deal and don't block current request
        setImmediate(() => {
          ctx.service.trade.check(request).catch(err => ctx.logger.error(err));
        });
      }
    }

In this case, you may find that the exceptions in setImmediate will be swallowed because the scope breaks the chain, although egg already handled exceptions externally.

Above scene is also considered. To catch the exception inside the scope, You can invoke helper method ctx.runInBackground(scope) to wrap the chain back. Now, the exceptions will be detected and caught.

    class HomeController extends Controller {
      async buy () {
        const request = {};
        const config = await ctx.service.trade.buy(request);
        // checking the deal and don't block current request
        ctx.runInBackground(async () => {
          // Exceptions thrown here will be caught in background and printed into log.
          await ctx.service.trade.check(request);
        });
      }
    }


## Adding Unit Testing
Unit Testing is very important, and Egg also provides egg-bin to help you write tests painless.

All the test files should be placed at `{app_root}/test/**/*.test.js`.

    // test/app/middleware/robot.test.js
    const { app, mock, assert } = require('egg-mock/bootstrap');

    describe('test/app/middleware/robot.test.js', () => {
      it('should block robot', () => {
        return app.httpRequest()
          .get('/')
          .set('User-Agent', "Baiduspider")
          .expect(403);
      });
    });

Then add npm scripts.

    {
      "scripts": {
        "test": "egg-bin test",
        "cov": "egg-bin cov"
      }
    }

Also install dependencies.

    $ npm i egg-mock --save-dev

Run it.

    $ npm test

That is all of it, for more detail, see Unit Testing. 
https://eggjs.org/en/core/unittest.html


## Conclusions
We can only touch the tip of the iceberg of Egg with the above short sections. Where to go from here? read our documentation to better understand the framework.

- About Egg boilerplate type, See Boilerplate Type Description.
- Egg provides a powerful mechanism for extending features. See Plugin.
- Egg framework allows small or large teams to work together as fast as possible under the well-documented conventions and coding best practices. In addition, the teams can build up logics on top of the framework to better suit their special needs. See more on [Frameworks].(../advanced/framework.md).
- Egg framework provides code reusabilities and modularities. See details at Progressive.
- Egg framework enables developers to write painless unit testing with many plugins and community-powered toolings. The team should give it a try by using Egg unit testing without worrying about setting up the testing tooling but writing the testing logics. See Unit Testing.


# 🚩 Egg-MySQL
https://eggjs.org/en/tutorials/mysql.html

MySQL is one of the most common and best RDBMS in terms of web applications. It is used in many large-scale websites such as Google and Facebook.

egg-mysql is provided to access both the MySQL databases and MySQL-based online database service.

Install egg-mysql

    $ npm i --save egg-mysql

Enable Plugin:

    // config/plugin.js
    exports.mysql = {
      enable: true,
      package: 'egg-mysql',
    };

Configure database information in config/config.${env}.js

Single Data Source
Configuration to accesss single MySQL instance as shown below:

    // config/config.${env}.js
    exports.mysql = {
      // database configuration
      client: {
        host: 'mysql.com',
        port: '3306',
        user: 'test_user',
        password: 'test_password',
        database: 'test',
      },
      // load into app, default true
      app: true,
      // load into agent, default false
      agent: false,
    };

Use:

    await app.mysql.query(sql, values); // single instance can be accessed through app.mysql

Multiple Data Sources
Configuration to accesss multiple MySQL instances as below:

    exports.mysql = {
      clients: {
        // clientId, obtain the client instances using the app.mysql.get('clientId')
        db1: {
          host: 'mysql.com',
          port: '3306',
          user: 'test_user',
          password: 'test_password',
          database: 'test',
        },
        db2: {
          host: 'mysql2.com',
          port: '3307',
          user: 'test_user',
          password: 'test_password',
          database: 'test',
        },
        // ...
      },
      //default configuration of all databases
      default: {

      },

      // load into app, default true
      app: true,
      // load into agent, default false
      agent: false,
    };

Use:

    const client1 = app.mysql.get('db1');
    await client1.query(sql, values);

    const client2 = app.mysql.get('db2');
    await client2.query(sql, values);

## Dynamic Creation
Pre-declaration of configuration might not needed in the configuration file. Obtaining the actual parameters dynamically from the configuration center then initialize an instance instead.

    // {app_root}/app.js
    module.exports = app => {
      app.beforeStart(async () => {
        // obtain the MySQL configuration from the configuration center
        // { host: 'mysql.com', port: '3306', user: 'test_user', password: 'test_password', database: 'test' }
        const mysqlConfig = await app.configCenter.fetch('mysql');
        app.database = app.mysql.createInstance(mysqlConfig);
      });
    };

## Service Layer
Connecting to MySQL is a data processing layer in the Web layer. So it is strongly recommended that keeping the code in the Service layer.

An example of connecting to MySQL as follows.

Details of Service layer, refer to service

    // app/service/user.js
    class UserService extends Service {
      async find(uid) {
       // assume we have the user id then trying to get the user details from database
        const user = await this.app.mysql.get('users', { id: 11 });
        return { user };
      }
    }
    After that, obtaining the data from service layer using the controller

    // app/controller/user.js
    class UserController extends Controller {
      async info() {
        const ctx = this.ctx;
        const userId = ctx.params.id;
        const user = await ctx.service.user.find(userId);
        ctx.body = user;
      }
    }

Writing CRUD
Following statments default under app/service if not specifed

Create
INSERT method to perform the INSERT INTO query

    // INSERT
    const result = await this.app.mysql.insert('posts', { title: 'Hello World' }); //insert a record title 'Hello World' to 'posts' table

    => INSERT INTO `posts`(`title`) VALUES('Hello World');

    console.log(result);
    =>
    {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 3710,
      serverStatus: 2,
      warningCount: 2,
      message: '',
      protocol41: true,
      changedRows: 0
    }

    // check if insertion is success or failure
    const insertSuccess = result.affectedRows === 1;

Read
Use get or select to select one or multiple records. select method support query criteria and result customization

get one record

    const post = await this.app.mysql.get('posts', { id: 12 });

    => SELECT * FROM `posts` WHERE `id` = 12 LIMIT 0, 1;

query all from the table

    const results = await this.app.mysql.select('posts');

    => SELECT * FROM `posts`;

query criteria and result customization

    const results = await this.app.mysql.select('posts', { // search posts table
      where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE criteria
      columns: ['author', 'title'], // get the value of certain columns
      orders: [['created_at','desc'], ['id','desc']], // sort order
      limit: 10, // limit the return rows
      offset: 0, // data offset
    });

    => SELECT `author`, `title` FROM `posts`
      WHERE `status` = 'draft' AND `author` IN('author1','author2')
      ORDER BY `created_at` DESC, `id` DESC LIMIT 0, 10;

Update
UPDATE operation to update the records of databases

    // modify data and search by primary key ID, and refresh
    const row = {
      id: 123,
      name: 'fengmk2',
      otherField: 'other field value',    // any other fields u want to update
      modifiedAt: this.app.mysql.literals.now, // `now()` on db server
    };
    const result = await this.app.mysql.update('posts', row); // update records in 'posts'

    => UPDATE `posts` SET `name` = 'fengmk2', `modifiedAt` = NOW() WHERE id = 123 ;

    // check if update is success or failure
    const updateSuccess = result.affectedRows === 1;

    // if primary key is your custom id,such as custom_id,you should config it in `where`
    const row = {
      name: 'fengmk2',
      otherField: 'other field value',    // any other fields u want to update
      modifiedAt: this.app.mysql.literals.now, // `now()` on db server
    };

    const options = {
      where: {
        custom_id: 456
      }
    };
    const result = await this.app.mysql.update('posts', row, options); // update records in 'posts'

    => UPDATE `posts` SET `name` = 'fengmk2', `modifiedAt` = NOW() WHERE custom_id = 456 ;

    // check if update is success or failure
    const updateSuccess = result.affectedRows === 1;

Delete
DELETE operation to delete the records of databases

    const result = await this.app.mysql.delete('posts', {
      author: 'fengmk2',
    });

    => DELETE FROM `posts` WHERE `author` = 'fengmk2';

Implementation of SQL statement
Plugin supports splicing and execute SQL statment directly. It can use query to execute a valid SQL statement

Note!! Strongly do not recommend developers splicing SQL statement, it is easier to cause SQL injection!!

Use the mysql.escape method if you have to splice SQL statement

Refer to preventing-sql-injection-in-node-js

    const postId = 1;
    const results = await this.app.mysql.query('update posts set hits = (hits + ?) where id = ?', [1, postId]);

    => update posts set hits = (hits + 1) where id = 1;


## Transaction
Transaction is mainly used to deal with large data of high complexity. For example, in a personnel management system, deleting a person which need to delete the basic information of the staff, but also need to delete the related information of staff, such as mailboxes, articles and so on. It is easier to use transaction to run a set of operations. A transaction is a set of continuous database operations which performed as a single unit of work. Each individual operation within the group is successful and the transaction succeeds. If one part of the transaction fails, then the entire transaction fails. In gerenal, transaction must be atomic, consistent, isolated and durable.

- Atomicity requires that each transaction be "all or nothing": if one part of the transaction fails, then the entire transaction fails, and the database state is left unchanged.
- The consistency property ensures that any transaction will bring the database from one valid state to another.
- The isolation property ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed sequentially
- The durability property ensures that once a transaction has been committed, it will remain so.

Therefore, for a transaction, must be accompanied by beginTransaction, commit or rollback, respectively, beginning of the transaction, success and failure to roll back.

egg-mysql proviodes two types of transactions

## Manual Control
- adventage: beginTransaction, commit or rollback can be completely under control by developer
- disadventage: more handwritten code, Forgot catching error or cleanup will lead to serious bug.

        const conn = await app.mysql.beginTransaction(); // initialize the transaction

        try {
          await conn.insert(table, row1);  // first step
          await conn.update(table, row2);  // second step
          await conn.commit(); // commit the transaction
        } catch (err) {
          // error, rollback
          await conn.rollback(); // rollback after catching the exception!!
          throw err;
        }

Automatic Control: Transaction with Scope
- API：beginTransactionScope(scope, ctx)
    - scope: A generatorFunction which will execute all sqls of this transaction.
    - ctx: The context object of current request, it will ensures that even in the case of a nested transaction, there is only one active transaction in a request at the same time.
- adventage: easy to use, as if there is no transaction in your code.
- disadvantage: all transation will be successful or failed, cannot control precisely

        const result = await app.mysql.beginTransactionScope(async conn => {
            // don't commit or rollback by yourself
            await conn.insert(table, row1);
            await conn.update(table, row2);
            return { success: true };
        }, ctx); // ctx is the context of current request, accessed by `this.ctx`  within in service file.
        // if error throw on scope, will auto rollback

## Literal
Use Literal if need to call literals or functions in MySQL

Inner Literal
NOW()：The database system time, obtained by app.mysql.literals.now

    await this.app.mysql.insert(table, {
      create_time: this.app.mysql.literals.now,
    });

    => INSERT INTO `$table`(`create_time`) VALUES(NOW())

Custom literal
The following demo showe how to call CONCAT(s1, ...sn) funtion in mysql to do string splicing.

    const Literal = this.app.mysql.literals.Literal;
    const first = 'James';
    const last = 'Bond';
    await this.app.mysql.insert(table, {
      id: 123,
      fullname: new Literal(`CONCAT("${first}", "${last}"`),
    });

    => INSERT INTO `$table`(`id`, `fullname`) VALUES(123, CONCAT("James", "Bond"))





# 🚩 Express Web 框架开发
- ThinkJS Node.js 框架 https://thinkjs.org/doc/index.html
- CmsWing 内容管理框架 https://www.cmswing.com/
- [Express/Node 入门](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Express.js API](http://www.expressjs.com.cn/4x/api.html#app.all)
- [Developing template engines](http://www.expressjs.com.cn/advanced/developing_template_engines.html)
- [Node cors package](https://www.npmjs.com/package/cors)
- [Express Middleware](http://www.expressjs.com.cn/resources/middleware.html)
- [Process managers](http://www.expressjs.com.cn/advanced/pm.html)
- [使用数据库 (Mongoose)](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose)


## MongoDB 数据库访问

Express 应用本身并没有定义任何数据库管理的附加行为或需求，但可以使用 Node 支持的所有数据库。包括 PostgreSQL、MySQL、Redis、SQLite、MongoDB 等等。

使用数据库前先要用 NPM 来安装驱动程序，安装流行的 NoSQL 数据库 MongoDB 的驱动程序，使用以下命令：

    npm install mongodb

数据库可以安装在本地或云端，通过 `require()` 引入驱动程序，连接，然后进行数据操作，执行增加、读取、更新、删除四种操作（CRUD）。以下示例展示了如何查找 MongoDB 表中 '哺乳动物' 的记录：

    // MongoDB 3.0+ required
    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017/animals', (err, client) => {
      if(err) throw err;
      
      let db = client.db('动物');
      db.collection('哺乳动物').find().toArray((err, result) => {
        if(err) throw err;
        console.log(result);
        client.close();
      });
    });

通过对象关系映射 ORM Object Relational Mapper 间接访问数据库的方法。可以把数据定义为对象或模型，然后由 ORM 根据给定的数据库格式搞定所有映射关系。这种方法产生原生对象，方便 JavaScript 开发者使用，而无需直接使用数据库语法，参考 [使用数据库 (Mongoose)]。


## 模板引擎 app.engine(ext, callback)

通过 `app.engine()` 可以注册自己的模板引擎，只需要将模板引擎名字和实现方法传入即可，参考 [Express.js API]。以下这个超简模板引擎 extremely simple template engine 来自官方文档 [Developing template engines]：

    var express = require('express')
    var fs = require('fs')
    var app = express()

    app.engine('ntl', function (filePath, options, callback) {
      fs.readFile(filePath, function (err, content) {
        if (err) return callback(err)
        var rendered = content.toString().replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        return callback(null, rendered)
      })
    })

然后通过 `set()` 设置为默认模板引擎，一并设置模板文件保存目录路径，还有一个用于测试的根地址路由：

    app.set('views', './views') // specify the views directory
    app.set('view engine', 'ntl') // register the template engine

    app.get('/', function (req, res) {
      res.render('index', { title: 'Hey', message: 'Hello there!' })
    })

然后在指定的模板文件目录中新建一个用于测试的模板文件 `index.ntl`：

    <html>
        <head>
            #title#
        </head>
        <body>
            #message#
        </body>
    </html>

运行以上程序可以检查模板引擎的工作流程。

在生产环境下，Express 应用有必要通过进程管理工具来增强运行稳定性，进程管理器就像是应用容器，集中为应用提供：

+ 应用卡死时自动重启。Restart the app automatically if it crashes.
+ 掌握运行时性能和资源消耗。Gain insights into runtime performance and resource consumption.
+ 通过修改配置动态提升性能。Modify settings dynamically to improve performance.
+ 控制集群。Control clustering.

在 Node.js 环境下常用的进程管理器有如下：

+ Forever
+ PM2
+ StrongLoop Process Manager
+ SystemD




# 🚩 Fusion Design 体系 - 模块化大工程典范
- Fusion Design 介绍 https://fusion.design/help.html#/fusion-intro
- Fusion Design 体系 https://blog.csdn.net/weixin_43665351/article/details/86759547
- Fusion Design Next https://github.com/alibaba-fusion/next
- Iceworks React-materials https://github.com/ice-lab/react-materials
- Iceworks 官方文档 https://www.bookstack.cn/read/alibaba-ice/docs-iceworks.md
- Iceworks https://ice.work/docs/iceworks/about
- Iceworks 物料开发规范 https://www.bookstack.cn/read/alibaba-ice/docs-materials-material-specification.md
- Ant Design 设计体系 https://ant.design/index-cn

Fusion 是一套企业级中后台UI的解决方案，致力于解决设计师与前端在产品体验一致性、工作协同、开发效率方面的问题。通过协助业务线构建设计系统，提供系统化工具协助设计师前端使用设计系统，下游提供一站式设计项目协作平台；打通互联网产品从设计到开发的工作流。

Fusion 产品创建于2015年底，阿里巴巴集团中台战略背景下，由国际 UED（现国际用户体验事业部）与 B2B 技术部成立中台DPL项目。从国际 UED，天猫，商家等各类业务形态中抽象解构，通过一套设计系统协议提升设计与开发效率，以统一的物料分发工具提升团队协同能力，借助灵活的在线样式配置支撑业务的设计创新。

Fusion 要解决什么问题：

- 不同品牌下的中台系统构建问题

    当业务演进到 “平台化、垂直市场、采购市场” 阶段时，UI 也面对了更多的问题和挑战：“周期性业务的品牌更新”，“不同品牌的多种垂直业务同期构建”，“众多相似的后台系统构建”。

- 设计规范一致性问题

    如何在多人协作过程中保障设计规范的一致性在设计和开发者之间落地

- 设计/前端的跨职能协作成本问题

    如果在项目中减少设计和开发者之间的协作、沟通成本

Fusion 的能力

- 通过构建一套标准化中后台体验设计原则，提升中后台产品体验一致性问题。
- 通过Fusion平台的主题配置能力，线上优化品牌样式并同步物料给设计师与开发使用，做到品牌样式迭代0成本。节省了大量的设计师和开发工作量。
- 设计可直接在sketch（通过插件FusionCool）使用配好的组件画设计稿；开发可在本地工程里面使用配好的主题开发项目，不需要关心组件样式（未来甚至页面样式）；从而打破协作壁垒，让合作更加顺畅。
- 通过 FusionCool 可以直接方便的沉淀模块模板；通过脚手架工具可以方便的沉淀业务组件、代码端； 让项目更快落地。

Fusion Design 是一个设计师与工程师的协作平台，主要有 4 个组成部分

- Fusion Next 组件库 @alifd/next；
- Fusion Design 站点；
- FusionCool Sketch 插件；
- Iceworks GUI 客户端，基于 Electron 开发的桌面端工具；

Iceworks 是阿里推出的前端框架，基于物料的一站式可视化源码研发工作台，React-materials 是基于 React 的组件库，使用 ice-script 脚手架工具进行打包管理，相关工具资源如下：

- ice-devtools  物料开发工具，支持 React&Vue https://ice.work/docs/materials/about
- ice-scripts   基于 webpack 的高可配置开发构建工具 https://ice.work/docs/cli/about
- icestore      基于 React Hooks 的轻量级状态管理方案 https://github.com/ice-lab/icestore#icestore
- icestark      面向大型应用的微前端解决方案 https://github.com/ice-lab/icestark#icestark
- react-materials   由官方提供的丰富的高质量 React 物料 https://ice.work/scaffold
- vue-materials 由社区维护的高质量 Vue 物料 https://ice.work/block?type=vue

物料 Materials 是指前端项目中的结构单元，物料从小到大可以分为 组件 Component， 区块 Block， 模板 Template，布局 layout 等，具体定义如下：

- 组件：
    - 基础组件：同一公司同类业务应该只有一套基础组件，基础组件需要足够原子化以及灵活性，比如 Button, Menu 等
    - 业务组件：面向业务的组件体系，一般功能比较确定同时复杂度较高，业务里通过 npm 依赖使用，不可随意更改业务组件代码

- 区块：与组件相比灵活性较高，功能相对比较简单，对应代码量也比较少，业务里会将区块的代码复制到项目里使用

- 模板：样板工程，通常会包含通用的布局、常用页面、工程配置等，常在初始化项目时使用


Fusion 主要是解决设计师和前端工作协同的问题。 一般一个项目的上线流程基本都要经历，评审、设计、开发、测试 这几个阶段。项目上线流程而各个阶段又可以再深入进去的拆分，大致如下：

- 评审：业务交互（产品功能交互），业务逻辑的评审
- 设计：设计规范（设计师对整个产品在视觉规范上面的定义），视觉设计（绘制视觉稿），标注稿（产出标注搞给到前端）
- 开发：前端一般都会有一套组件库；但是组件库可能和自己业务线的品牌并不是对应的，所以第一步需要在组件层面做UI的定制，然后是业务逻辑的开发。
- 测试：最常见的就是设计师和前端坐在一起两天专门做UI还原度review；业务逻辑测试是必做流程不多说。

Fusion Design 体现可以总结为两个端一个平台，Fusion Design 平台通过官网 https://fusion.design 提供定制自己的 Design System。两端就是面向开发者和设计者的两个工具，开发者工具 Iceworks 和设计师工具 FusionCool。

在 Fusion Design 体系下，工程师和设计师配合，简单来说就 4 个步骤。

- 设计师配置完成一个 Design System 并发布。获得 Sketch Symbol 和 Fusion 组件库主题包
- 设计师使用 Sketch 创作设计稿。
- 工程师安装 Fusion 组件库 与 设计师给予的 主题包。
- 工程师 Coding 实现设计师的稿件。


## ice-plugin-fusion 插件
ice-scripts plugin for fusion https://npm.taobao.org/package/ice-plugin-fusion
ice-plugin-fusion 插件详细介绍 https://github.com/alibaba/ice/blob/master/docs/cli/plugin-list/fusion.md
Iceworks Plugins https://ice.work/docs/cli/plugin-list/fusion

    npm i --save-dev ice-plugin-fusion

ice-plugin-fusion 是 Fusion UI 体系开发下必不可少的插件。

- 组件按需加载
- 组件（包含业务组件）样式自动引入
- 主题定制能力
- 多个不同包名的基础组件统一

Options

themePackage: 主题包，如何新建主题包请参考文档 主题配置。https://github.com/alibaba/ice/blob/master/docs/guide/dev/theme.md
themeConfig: 主题配置
uniteBaseComponent: 如果项目里依赖了多个不同名称的基础包，可以通过 uniteBaseComponent 来统一基础包，减少重复的代码（社区用户无需关心该问题）
注意：themePackage 与 themeConfig 中的变量配置是冲突的，两种方式只能选择一个，原因 https://github.com/alibaba/ice/pull/1435#issuecomment-460055905

- 默认的蓝色主题：@icedesign/theme
- 橙色主题：@alifd/theme-ice-orange
- 绿色主题：@alifd/theme-ice-green
- 紫色主题：@alifd/theme-ice-purple

安装主题包

    # 项目/模板安装在 dependencies 里
    npm install @icedesign/theme --save

    # 区块/组件安装在 devDependencies 里
    npm install @icedesign/theme --save-dev


使用主题变量
无论是组件、区块、模板还是业务项目里，只要在代码里正确的使用主题变量，就可以通过主题包的配置实现一键换肤。

使用主题中的变量
在对应 sass 文件中，先通过 @import 方式引入变量文件，然后使用其中的 sass 变量即可：

    // 引入主题变量
    @import "~@alifd/next/variables.scss";

    // 使用主题变量
    .title {
      color: $color-brand1-6;
    }

可以使用的变量列表请参考 fusion.design Design Tokens。

按照这个步骤之后，在项目构建时，就会用开发者配置的主题包覆盖掉默认变量，实现一键换肤的能力。

虽然 Design Tokens 提供了大量变量，但实际场景里用到的非常有限，这里介绍几个重点的变量：

- $color-brand1-6: 品牌主色
- $color-brand1-9: 深一点的品牌主色，常用来 hover 效果
- $color-brand1-1: 非常浅的品牌主色，常用来支持背景颜色

Design Tokens 参考 https://fusion.design/component/tokens


基础用法

直接配置主题包 themePackage 或修改配置 scss 变量，如主品牌色 primaryColor，ice-scripts 版本 2.0.0 以上，1.x 版本请使用 themeConfig 的配置方式。


    // ice.config.js
    module.exports = {
      plugins: [
        ['ice-plugin-fusion', {
          // 主题包
          themePackage: '@icedesign/theme',
          themeConfig: {
            // 自定义 css prefix，需要配合 ConfigProvider 更改 js 的 prefix
            nextPrefix: 'nextfd-',
            // 根据配置推导主品牌色
            primaryColor: '#f60',
            // 覆盖 scss 原始变量
            'font-size-body-1': '14px',
          },
          // @icedesign/base | @alife/next | @ali/ice -> @alife/next
          uniteBaseComponent: '@alife/next'
        }]
      ]
    }

以上能力依赖的基础组件为 @alifd/next，如果依赖使用 `@icedeisgn/base` 实现主题定制，官方默认提供一套 @icedesign/skin 的主题包支持默认主题，配置在 package.json 里的 buildConfig.theme 字段即可，默认是蓝色系，如果想要修改的话只需要在 package.json 里加以下字段：

    // package.json
    {
      "themeConfig": {
         "primary-color": "#FF6600",
         "secondary-color": "#FF5500"
      }
    }


字体变量配置

如果希望将 css 中的网络资源本地化，推荐使用 ice-plugin-css-assets-local

@alifd/next 组件库默认引用两类字体，包括图标字体和 robot 基础字体。字体包括 Bold，Light、 Medium、 Regular、 Thin 四种样式，eot、 ttf、 woff、 woff2 五种文件格式共 20 个字体文件，图标字体则只有一套 4 个文件格式，如果希望定制这些字体的路径，可以参照如下配置：

    module.exports = {
      plugins: [
        ['ice-plugin-fusion', {
          // 主题包
          themePackage: '@icedesign/theme',
          themeConfig: {
            // 替换表示图标字体文件路径的变量，路径下应有对应4个 iconfont 文件
            'icon-font-path': '"/font/icon-font-path"',
            // 替换表示 Roboto 字体文件路径的变量，路径下应有对应20个 roboto 字体文件
            'font-custom-path': '"/font/font-path/"',
          },
        }]
      ]
    }

/font/icon-font-path 路径下对应的4个图标字体文件分别为：icon-font.eot、icon-font.woff、icon-font.ttf 和 icon-font.svg。 /font/font-path/ 路径下对应的20个字体文件可查看打包下载地址：robot-font.zip

https://files.alicdn.com/tpsservice/31b61ac0c41fac383a1bffd154674347.zip

多主题配置
多主题能力在版本 0.1.7 及更高版本中支持。

多主题常规的实现思路可以分为两步：

- 准备不同主题的 css
- 通过 js 动态加载对应的主题 css
- 而前端工程化的如今，很多基本依赖的组件库本身带有可配置的主题变量,比如 fusion，生成多份主题意味着需要提前打包出多份不同的主题文件，对于前端工程的调试和构建都带来极大的处理成本。

ice-plugin-fusion 结合 fusion 自身可以配置主题包的能力，支持多个主题包的配置，大大简化多主题切换的成本，通过 css 变量能力实现动态主题的切换，核心实现思路如下：

- 提取主题包中的 scss 变量（色值变量）
- 将 scss 变量具体内容转换为 css 变量，即 $color-brand1-1: #E2EDFF; => $color-brand1-1: var(--color-brand-1);
- 注入新的 scss 变量值（如 $color-brand1-1: var(--color-brand-1) ）进行编译
- 在 window 下注入 `__changeTheme__` 方法，实现不同主题包全局 css 变量声明的切换

    module.exports = {
      plugins: [
        ['ice-plugin-fusion', {
          // 通过数组方式配置多主题包
          themePackage: [{
            name: '@icedesign/theme',
            // 设置默认加载主题，如果不进行设置，默认以最后添加主题包作为默认主题
            default: true,
            // 设置自定义主题颜色，可以在 scss 文件中直接使用该变量，比如： .bg-color { background: $custom-color; }
            themeConfig: {
              'custom-color': '#000',
            },
          }, {
            name: '@alifd/theme-ice-purple',
            themeConfig: {
              'custom-color': '#fff',
            },
          }],
        }]
      ]
    }

ice.config.js 中完成多主题包配置后，业务代码中可以直接调用 __changeTheme__ 方法在多个主题包之间进行切换：

    // 可以在设置的主题包 @icedesign/theme 和 @alifd/theme-ice-purple 之间切换
    window.__changeTheme__('@alifd/theme-ice-purple');



## Fusion Next 组件
Fusion Next 组件快速上手 https://fusion.design/help.html#/next-start


@alifd/next 是 Fusion Design 中的面向 PC 端可配置组件库，基于 React 实现，支持所有现代浏览器和 IE9+, 内部称之为骨架 DPL - Design Pattern Library。

Github 仓库地址: https://github.com/alibaba-fusion/next
文档见: https://fusion.design/component

基于 Next，通过官方提供的 Iceworks GUI 工具和 ice-scripts 脚手架工具可以快速复用 Iceworks 的模板工程。透过 Iceworks，阿里 Fusion Design 体现面向开发者提供了强大的框架。

简单安利一下 Fusion 组件的基本特性：

- 组件丰富 50+ 个组件,覆盖绝大多数场景体积小 next.min.js 702 KB
- next.min.css 337 KB
- 组件单测覆盖率近 90%

当然,拥有以上的特性只能保证 Fusion 组件可以放心地用在生产环境,不输任何现有的主流组件库的体验。

Fusion Next 是基于 React 实现的一套 PC 端的组件库，这套组件库已经在阿里内部服务了三年。这次开源出来的版本是最近一年基于之前两年的使用经验、问题反馈进行重新整理和优化过。具备以下特性

- 易用性

    对比上一个版本 80 + 功能，进行 300+ 优化，组件整体代码体积却减小30%

    next.min.js 910KB -> 702KB
    next.min.css 428KB -> 337KB

    一共 50+组件，打包下来却只有 700 多K，这个目前在业界比较少组件有能力做到这点。组件之间依赖关系清晰，复用度高也是体积小的原因。

- 稳定性

    组件单测覆盖率近90%，提供服务以来没有产生过起线上事故。

- 能力增强

    国际化、RTL、无障碍能力全面支持。

另外针对中后台表单大数据量场景做了大量性能优化，比如普通 table 随着数据不断增长 render 会越来越慢。

页面随节点个数增长消耗的时间

Next 引入了 virtual-list ，目前用在了 table 和 select 这两个使用频率较高的组件。因为在大数据量(测试过1w节点）下只渲染需要展示的节点（比如20个），所以可以将渲染时长永远的控制在 0.3s 之内。
另外, Fusion 组件的杀手锏,最强大的一个能力。


1.使用 npm 安装(推荐)

    npm install @alifd/next --save

2.浏览器直接引用

在浏览器中使用 script 和 link 标签直接引入文件，并使用全局变量 Next。我们在 npm 包中提供了 @alifd/next/dist 目录下的 next.js/next.min.js 和 next.css/next.min.css 等文件，也可以通过 unpkg 或者jsDelivr进行下载。jsDelivr网宿有合作,推荐大陆用户使用

开发环境推荐使用未压缩的版本,方便错误调试:

    // alifd cdn
    <link rel="stylesheet" href="https://alifd.alicdn.com/npm/@alifd/next/{版本号}/next.css">
    <script src="https://alifd.alicdn.com/npm/@alifd/next/{版本号}/next.js"></script>

    // jsDelivr 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@alifd/next/dist/next.css">
    <script src="https://cdn.jsdelivr.net/npm/@alifd/next/dist/next.js"></script>

    // unpkg 
    <link rel="stylesheet" href="https://unpkg.com/@alifd/next/dist/next.css">
    <script src="https://unpkg.com/@alifd/next/dist/next.js"></script>


生产环境推荐引入固定版本且压缩过的next组件,以保证代码稳定并提高加载速度:

    // alifd cdn
    <link rel="stylesheet" href="https://alifd.alicdn.com/npm/@alifd/next/1.11.6/next.min.css">
    <script src="https://alifd.alicdn.com/npm/@alifd/next/1.11.6/next.min.js"></script>

    // jsDelivr
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@alifd/next/1.11.6/next.min.css">
    <script src="https://cdn.jsdelivr.net/npm/@alifd/next/1.11.6/next.min.js"></script>

    // unpkg 
    <link rel="stylesheet" href="https://unpkg.com/@alifd/next@1.11.6/dist/next.min.css">
    <script src="https://unpkg.com/@alifd/nextnext@1.11.6/dist/next.min.js"></script>


依赖

@alifd/next 基于 react@16 开发，目前并不兼容 react@15 及其以下的版本，且将 react/react-dom 作为 peerDependencies，需要用户手动提前安装或引入。
@alifd/next 在处理日期时间相关组件逻辑时，使用了 moment 库，且将 moment 作为 peerDependencies，需要用户手动提前安装或引入。

全量引入

    import '@alifd/next/dist/next.css';
    // import '@alifd/next/index.scss';

    import { Button, Input } from '@alifd/next';

手动按需引入

    import Button from '@alifd/next/lib/button';
    import '@alifd/next/lib/button/style';

优点：按需引入 js 代码、样式代码，不会加载不必要的组件
缺点：使用起来过于繁琐，需要手动添加每一个用到的组件 js 代码及样式


使用 babel-plugin-import (推荐)

通过 babel-plugin-import 插件，可以将下面的代码

    import { Button } from '@alifd/next';

转化为类似下面的代码：

    import Button from '@alifd/next/lib/button';
    import '@alifd/next/lib/button/style';

babel 配置：

    // webpack babel loader option or .babelrc
    {
        // ...
        plugins: [
            [
                'babel-plugin-import',
                {
                    libraryName: '@alifd/next',
                    style: true,
                },
            ],
        ];
    }


发布周期

遵循 Semantic Versioning 2.0.0 语义化版本管理策略：
- z 位：每周三会进行日常 bug 修复版本的更新，紧急问题不受此限制，可以随时发布
- y 位：每月发布一个带有新特性的向下兼容的版本
- x 位：包含有 break change 变更的大版本，一般周期一到两年



## Iceworks CLI & GUI 客户端工具
iceworks cli https://github.com/alibaba/ice/blob/master/docs/cli/start.md
ice-scripts 使用指南 https://www.bookstack.cn/read/alibaba-ice/docs-advanced-webpackrc.md
Iceworks & create-react-app https://www.bookstack.cn/read/alibaba-ice/docs-advanced-work-with-create-react-app.md
ice-scripts ICE SDK https://npm.taobao.org/package/ice-scripts/v/2.1.12
ice-scripts plugin for fusion https://npm.taobao.org/package/ice-plugin-fusion

Fusion Next 组件库本身是不依赖任何脚手架, 完全可以通过 cdn 引入或者整合到 create-react-app 等方式使用。但是为了方便将 Fusion Next 组件库应用到前端项目，需要脚手架 Iceworks CLI 和 Iceworks  GUI 客户端帮忙快速生成工程项目。 ICE 团队开源了一系列产品，而 Fusion Design 团队选择 Iceworks 作为 Fusion 官方主推的开发工具。

飞冰项目默认使用 ice-scripts 作为开发工具，即 ice 命令，Iceworks CLI 则将 ice-scripts 提供的命令进行封装简化使用，ice-scripts 提供了丰富的功能帮助我们提高开发效率：

- 命令行工具
- 主题配置
- 代理配置
- 自定义 webpack 配置
- Mock ...

安装 ice-scripts，然后使用 ice 命令：

    cnpm install ice-scripts 

启动调试服务：

    $ ice dev --help
    Usage: ice-dev [options]
    Options:
      -p, --port <port>      服务端口号
      -h, --host <host>      服务主机名
      --https                开启 https
      --analyzer             开启构建分析
      --analyzer-port        设置分析端口号
      --disabled-reload      关闭 hot reload
      --project-type <type>  项目类型, node|web (default: "web")
      --inject-babel <type>  注入 babel 运行环境, Enum: polyfill|runtime (default: "polyfill")

构建代码：

    $ ice build --help
    Usage: ice-build [options]
    Options:
      --debug                debug 模式下不压缩
      --hash                 构建后的资源带 hash 版本
      --project-type <type>  项目类型, node|web (default: "web")
      --inject-babel <type>  注入 babel 运行环境, Enum: polyfill|runtime (default: "polyfill")


飞冰默认使用 ice-scripts 作为开发工具，但是如果想使用 React 社区的 create-react-app 开发项目，Iceworks 也提供了基于 create-react-app 的模板，支持按需引入飞冰基础组件，添加区块等能力。

基于 Iceworks 能够一键生成 Ice 和 Node 的前后端分离的项目，前端使用 React 技术栈，后端使用 Koa 2.x 作为服务端开发框架。

Iceworks CLI 工具和 Iceworks GUI 工具进行初始化项目都很好用，一个是命令行工具，一个是基于 Electron 开发的桌面图形工具。

全局安装 iceworks CLI 工具并创建一个工程模板：

    $ npm install iceworks -g
    $ iceworks --help

    # 创建一个空的项目目录
    $ mkdir iceapp && cd iceapp

    # 根据已有模板创建项目
    $ iceworks init

    # 安装依赖
    $ npm install

完成项目初始化后既可以开始开始项目调试开发和项目构建。

调试开发
项目目录下启动调试服务：

    $ npm start

开始调试服务后，可以访问 http://localhost:4444 进行页面预览。修改源码内容后将自动刷新页面。

调试服务支持的命令参数：

    $ ice-scripts dev --help

    Usage: ice-scripts dev [options]

    Options:
      -p, --port <port>      服务端口号
      -h, --host <host>      服务主机名
      --https                开启 https
      --analyzer             开启构建分析
      --analyzer-port        设置分析端口号
      --disabled-reload      关闭 hot reload
      --disabled-mock      关闭 mock 功能

比如使用 3000 端口启动 dev server

    $ npm run start -- -p 3000
    # 或者
    $ ice-scripts dev -p 3000

比如开启 https

    $ npm run start -- --https


构建代码
构建项目代码：

    $ npm run build

构建服务支持的命令参数：

    $ ice-scripts build --help

    Usage: ice-scripts build [options]

    Options:
      --analyzer             开启构建分析
      --analyzer-port        设置分析端口号

构建产物默认生成到 ./build 目录下。


曾经 Iceworks 也是支持微信小程序开发的，估计是竞争关系被终止了。在 Iceworks 开发小程序，升级到 Iceworks 2.9.0 版本，在设置面板开启 小程序物料源 选项，即可在模板界面和区块面板看到对应的小程序相关物料，其中包括 4 个模板：

- miniapp-lite https://ice.work/rax-materials/miniapp-lite/index.html
- products-admin https://ice.work/rax-materials/products-admin/index.html
- posts-admin https://alibaba.github.io/ice/rax-materials/posts-admin/index.html
- operating-dashboard https://alibaba.github.io/ice/rax-materials/operating-dashboard/index.html



## Fusion 站点

主题配置能力，可以通过 Fusion 站点可视化配置主题，Fusion 站点是 Fusion Design 管理等能力的集散地。主要提供以下能力:

- 自有站点管理
- 主题配置

以上两个是用的比较多的,其他功能就不在入门篇里面一一介绍。

自有站点

简单理解自有站点就是用户自己创造的一个集合，主题、物料都必须依附于站点。一个站点可以有多套主题,多种物料，多个成员。站点管理管理能力包含新建站点、站点成员管理、主题管理、物料管理。这个就不一一细说,本文后续涉及到的会细说。
主题配置

主题这个词用的一看笔者就是一个前端。在设计师领域, 类似概念称之为 Design System。在 Fusion Design 站点上, 设计师可以基于 Fusion Design 官方的 Design System 改造成自己专属的 Design System。每个 Design System 就是一个自有站点。一个自有站点可以拥有多个主题。主题配置可以编辑 Design Token (这也是设计师语言,前端同学可以把这个等价于 SCSS 变量), 生成主题。

编辑完成主题 并且发布,并且发布,并且发布 (重要事情说三遍),设计师可以获得两样东西:

- 主题代码包,可以直接提供给前端使用
- 基础设计素材, 可以通过 FusionCool 插件直接在 Sketch 中使用

Fusion Design 对外正式开放短短一个月,新建2500个站点,已经沉淀2800+套主题。

阿里集团内, 天猫 MUI、淘宝 ICE Design、阿里云 Wind、盒马鲜生 Hippo、菜鸟 Walle 等Design System 都是基于 Fusion Design 深度定制, 满足各个BU不同的业务需求。目前集团内服务40+BU、项沉淀主题1500+套,服务2000+项目。

## FusionCool

FusionCool 是一个 Sketch 插件, 辅助设计师做设计稿。 FusionCool 提供以下素材:

- 基础组件
- 图标Icon
- 图表
- 模块
- 模板

其中 1 ~ 3 是根据设计师在配置平台完成的Design System自动生成的,Design System中的某个主题发生变动并且发布以后, FusionCool中的设计素材就会自动跟着变化。 4 ~ 5 素材,目前都是Fusion Design官方设计师手绘,后续会对齐 1 ~ 3 的能力。

代码到视觉稿的无损还原

突破 html2svg 的弊端，做到无损还原

早在一年前我们是把设计师在主题配置平台（直接在web页面配置组件的主题）的组件直接通过 html2svg 技术直接把组件直接转换为svg文件，从而让设计师可以直接在 sketch 里面使用。但是这种方案存在的弊端就是还原度不够（大概95%还原度）。

早期 html2svg 的还原度问题

主要原因是 html 采用盒模型 和 svg 的转换并不是一一对应的，所以这里永远有修不完的bug。虽然95% 是好的，但是对于设计端来说是完全不能忍受的。

所以 Fusion 项目小组经过近半年的努力终于突破了还原度的问题，流程图如下

FusionCool 渲染组件到sketch流程

从配置平台导出的不再是 html，而是 DesignToken （设计变量），FusionCool 底层使用 Airbnb 提供的 react-sketch 能力写成的一份 Next 组件，直接通过 DesignToken 覆盖默认变量，最终在 Sketch 端实时渲染。在这里插入图片描述

组件的类型、大小、内容都可以直接在面板配置

图表配置可以直接唤起配置面板

sketch 端的任何点击都可以通过 Event 的方式在 FusionCool 产生配置面板。


后续设计师自己完成的设计素材也支持通过FusionCool导入Design System, 可以很方便地复用。



## 常见问题

- Fusion Design 和 Ant Design 有什么差异?

    简单地回答就是 Ant Design是一套组件库, Fusion Design 是一个组件库生成工厂。
    Ant Design是一款很优秀的组件库,在社区深受欢迎,影响力极大。代码质量优秀,Fusion组件库在开发过程中也有所借鉴。Fusion Design也在阿里内部沉淀打磨了三年, 覆盖大量的BU和业务场景。单从组件库的层面而言, Fusion 和 AntD 的体验差异不大。
    参与过 SEE Conf 的同学都会为 AntD 优秀的设计理念所折服。可是一千个人眼里有一千个哈姆雷特,各个公司(BU/部门/产品线)对于美的认知是由差异的,而且业务形态的不同也对设计风格有着不同的要求,所有各个公司(BU/部门/产品线)对组件库默认的样式进行定制就常常成为刚需。当用户想要定制组件库的时候, AntD 就不是特别方便，需要前端工程师大量修改 LESS 变量,反复与设计师确定设计稿还原的准确性。 AntD 定制主题 / Issue: support dark theme
    Fusion组件库由集团多个 BU 的设计师共同参与设计的，目标是帮助每个BU都能定制属于自己的 XXXX Design。所以 Fusion 会在 UI 的定制能力上比 Antd 设计得更为通用，以满足各业务线的定制能力。设计师通过 Fusion Design 的平台,能够可视化编辑 Fusion 组件库的样式，全程无需工程师参与。
    阿里集团内, 天猫MUI、淘宝ICE Design、阿里云 Wind、盒马鲜生 Hippo、菜鸟 Walle等Design System都是基于Fusion Design深度定制, 满足各个BU不同的业务需求。目前集团内服务 40+ BU、项沉淀主题 1500+ 套,服务 2000+ 项目。

- Fusion 和 飞冰(ICE) 是什么关系？

    ICE 是 Fusion 的好基友。 Fusion 解决的是前端与设计师的协同问题。 ICE 解决的是前端开发的效率问题。通过海量可复用物料，配套桌面工具极速构建前端应用，提升开发效率。
    Fusion 与ICE 的合作主要体现在以下几点:

    - ICE 官方react物料使用 fusion组件库作为默认组件库
    - Fusion 推荐使用 ICE的GUI客户端 Iceworks 作为首选开发工具
    - ICE官方 React 物料和 Fusion 官方物料是互通的(春节前完成)，双方共同丰富物料生态,推动区块/模板物料的开发模式落地

- 设计师使用 FusionCool 创作的设计稿能不能导出成代码?

    FusionCool 导出的 HTMl ,是带标注的设计稿。
    设计稿想要转换成代码,只能说"路漫漫其修远兮,吾将上下而求索"。想要直接导出代码,短期内还做不到。
    Fusion 团队目前在这方面也有投入和摸索。可以期待一下。

- Vue 用户可以用 Fusion Design 么?

    Fusion 组件库是基于 React技术栈实现的。但是 Fusion Design 的组件配置能力和组件的技术栈是无关的。只要一套组件库按照 Fusion Design 组件开发规范进行开发,就可以接入到 Fusion Design 站点, 获取配置能力。
    ElementUI 团队已经开始 Fusion Design 配置能力的对接工作，敬请期待…

- 移动端可以用Fusion Design 么?

    Fusion Design Mobile Web 端组件正在开发中，React Native、Weex、flutter 以及小程序用的组件暂无排期…

相关链接Fusion 站点：https://fusion.design/next
github 仓库： https://github.com/alibaba-fusion/next

文章原作：Fusion Design 成员暮尘

