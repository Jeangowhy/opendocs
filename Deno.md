
# 🚩 Deno
- Node to Deno http://www.ruanyifeng.com/blog/2020/01/deno-intro.html
- Debugging over the V8 Inspector Protocol https://v8.dev/docs/inspector
- https://doc.deno.land/builtin/stable
- https://github.com/denoland/manual
- https://deno.land/manual/getting_started/permissions
- https://deno.land/manual@v1.8.1/contributing/architecture
- https://deno.land/manual@v1.8.1/tools
- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
- Getting Started with JSDoc 3 https://jsdoc.app/
- 2020 年 Node.js 开发者调查报告 https://zhuanlan.zhihu.com/p/131377284
- Deno 正式发布几天了哦，彻底弄明白它和 node 的区别 https://www.cnblogs.com/coderhf/p/12911812.html
- Build reliable network applications without compromising speed. https://tokio.rs
- kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/demo-react.js
- https://www.freecodecamp.org/news/the-deno-handbook/
- The Deno Beginner’s Handbook by Flavio Copes (z-lib.org)
- Deno - A Complete Guide to Programming With Deno by Jana Bergant (z-lib.org)


> 研究一个优秀的开发框架是学习一门计算机语言的最好方式！

先从 Node 项目说起，起初，Ryan Dahl 称他的项目为 web.js，但是项目的发展超出了一个 Web 服务器范围，变成构建网络应用的一个基本框架，以实现在它的基础上构建更多的东西，诸如服务器、客户端、命令行工具等。

Node 发展为一个强制不共享任何资源的单线程、单进程系统，包括十分适宜网络的库，为构建大型分布式应用程序提供了基础设施。其目标也是成为一个构建快速、可伸缩的网络应用平台。它自身非常简单，通过通信协议来组织很多 Node，非常容易通过扩展来达成构建大型网络应用的目的。每一个 Node 进程都构成这个网络应用中的一个节点，这是它名字所含意义的真谛。

从 2007 年一直到 2012 年，Node.js 移交给了其他开发者，Dahl 转而研究人工智能。他始终不是很喜欢 Python 语言，久而久之，就想搞一个 JavaScript 语言的人工智能开发框架。等到他再回过头捡起 Node.js，发现这个项目已经背离了他的初衷，有一些无法忽视的问题。

首先，过去五六年，JavaScript 语言脱胎换骨，ES6 标准引入了大量新的语法特性。影响最大的语法有异步编程和 ESM 模块化，包括 `Promise` 接口以及 `async` 函数。Node.js 对这两个新语法的支持都不理想，由于历史原因必须支持`回调函数`，导致异步接口会有 Promise 和回调函数两种写法；同时，Node.js 自己的模块格式 CommonJS 与 ES 模块不兼容，导致迟迟无法完全支持 ESM 模块。

其次，Node.js 的模块管理工具 npm，逻辑越来越复杂；模块安装目录 npm_modules 极其庞杂，难以管理。安全措施缺失，用户只要下载了外部模块，就只好听任别人的代码在本地运行，进行各种读写操作。

再次，Node.js 的功能也不完整，导致外部工具层出不穷，让开发者疲劳不堪：webpack，babel，typescript、eslint、prettier......

由于上面这些原因，Ryan Dahl 决定放弃 Node.js，从头写一个替代品，彻底解决这些问题。

> Deno - A secure runtime for JavaScript and TypeScript.

Deno 是一个简单又现代化而且安全的 JavaScript/TypeScript 运行时，基于 V8 引擎和 Rust（Tokio 异步编程框架），Deno 本身也是 Rust 的一个模块。

- 初始即安全，除非明确准许，初始以沙盒状态运行（无文件、网络、环境变量访问权限）；
- 自身支持 TypeScript；
- 运行时本体以单一二进制文件形式发布；
- 拥有大量的自带工具，例如依赖检查（deno info）和代码格式化工具（deno fmt）；
- 拥有较为完备的官方标准库，确保能适配对应 Deno 版本运行；
- Deno 最初由 Node.js 原作者 Ryan Dahl 于 2018 年 5 月在 JSConf.EU 首次提出。

由于 TS 无法为 Deno runtime 生成高性能的代码，目前部分内部实现从 ts 变更为 js。

早期 Deno 的实现基于 Golang，但由于一些核心问题而迁移到 Rust 言语上进行开发：

- 与 C/C++ 绑定性能差，这是 cgo 模块导致的，结果是 RT - ResponseTime 响应时间比较大，并发数/平均响应时间 TPS 小。
- Golang的GC机制导致的性能的不确定性。目前v8采用的是标记清楚+整理的GC算法，而golang运行时也运行类似的GC算法，这样在多线程中存在两个并行的GC线程会对程序运行造成非常大的不确定性
社区内Rust力量壮大，Rust的服务器性能越发强大，而且没有GC机制，与c通信性能高过golang，因此也算是个推进因素
不过，虽然golang版本的deno走到了终点，我们通过Ryan的实现仍然很容易把握住deno的脉络，因此对于相关的开发者仍有借鉴和参考意义。

但 Deno 并没有放弃 TypeScript，Deno 依然是一个安全的 TS/JS runtime，目前 Deno 彻底用 Rust 替代 C++/C，各语言比例大概是：

- TypeScript：64.7%
- Rust：31.9%
- JavaScript：1.4%

Deno VS Node

    |                    |                   Node                   |         Deno        |
    |--------------------|------------------------------------------|---------------------|
    | API 引用方式       | 模块导入                                 | 全局对象            |
    | 模块系统           | CommonJS & 实验性 ES Module              | 全面 ES Module      |
    | 安全               | 无安全限制                               | 默认安全            |
    | TypeScript         | 通过第三方模块支持 ts-node               | 原生支持            |
    | 包管理             | npm + node_modules                       | 原生支持            |
    | 异步操作           | 回调                                     | Promise             |
    | 包分发             | 中心化 npmjs.com                         | 去中心化 import url |
    | 入口               | package.json 配置 import url             | 直接引入            |
    | 打包、测试、格式化   | 第三方如 eslint、gulp、webpack、babel 等    | 原生支持            |

Deno 集成 JavaScript & TypeScript 的工具：

- `deno bundle` 打包输出到一个文件；
- `deno compile` 编译可执行程序 compiling executables
- `deno install` 安装程序到本地
- `deno info` 依赖探测 dependency inspector，也可以用来查看本地缓存目录信息
- `deno doc` 文档生成，或查看文档，支持 JSDOC，documentation generator 
- `deno fmt a.ts formated.ts` 执行代码格式化 formatter 
- `deno repl` 执行交互式 Read-eval-print-loop
- `deno test` 执行代码测试 test runner
- `deno lint --unstable` 执行集成的 code linter

例如，以下命令查询 Reader 类型的文档：

    deno doc --builtin Deno.Reader

克隆代码仓库，里面包含 Rust 的实现以及手册文档：

    git clone git@github.com:denoland/deno

具体内容参考后面 Deno 目录结构与架构。


## ⚡ Installation

安装使用：

```sh
# Using Shell (macOS and Linux):
curl -fsSL https://deno.land/x/install/install.sh | sh

# Using PowerShell (Windows):
iwr https://deno.land/x/install/install.ps1 -useb | iex

# Using homebrew (MacOS):
brew install deno

# Using Scoop (Windows):
scoop install deno

# Using Chocolatey (Windows):
choco install deno

# Build from source using cargo
cargo install deno

# Upgrade your local version of Deno
deno upgrade
Looking up latest version
Found latest version 1.9.2
Checking https://github.com/denoland/deno/releases/download/v1.9.2/deno-x86_64-pc-windows-msvc.zip
Download has been found
Deno is upgrading to version 1.9.2
Upgraded successfully

deno.old --version
deno 1.7.0 (release, x86_64-pc-windows-msvc)
v8 8.9.255.3
typescript 4.1.3

deno --version
deno 1.9.2 (release, x86_64-pc-windows-msvc)
v8 9.1.269.5
typescript 4.2.2
```

如果使用 Rust 进行编译，这需要花点时间，在网络良好的情况下，因为 Cargo 需要下载依赖，大概需要几十分钟时间，这取决于机器速度，并且会产生 10G 左右的中间文件。

整个 Deno 1.9.2 编译过程涉及 631 个模块，最后一个是 Deno CLI 程序的生成。

示范，查看程序依赖信息，并安装到本地，可以用 -n/--name 为其指定一个名称，或者 --root 指定安装目录：

    deno info https://deno.land/std@0.67.0/http/file_server.ts

    deno install --allow-net --allow-read https://deno.land/std@0.90.0/http/file_server.ts
    deno install --allow-net --allow-read -n serve https://deno.land/std@0.90.0/http/file_server.ts
    deno install --allow-net --allow-read --root /usr/local https://deno.land/std@0.90.0/http/file_server.ts
    deno install --allow-net --allow-read https://deno.land/std@0.90.0/http/file_server.ts -p 8080

安装过程就是下载相关依赖模块到本地，并创建运行脚本，同时，为程序指定需要的权限和参数：

    #!/bin/sh
    # generated by deno install
    deno "run" "--allow-read" "--allow-net" "https://deno.land/std@0.90.0/http/file_server.ts" "$@"

安装程序到本地缓存目录，有必要可以设置环境变量以方便执行。

    echo 'export PATH="$HOME/.deno/bin:$PATH"' >> ~/.bashrc

Deno 具有安全控制，默认情况下脚本不具有读写权限。如果脚本未授权，就读写文件系统或网络，会报错。

Deno 只支持 ES 模块，且只支持从 URL 加载模块，跟浏览器的模块加载规则一致：

- 没有 npm 命令。
- 没有 npm_modules 目录。
- 没有 require() 命令，即不支持 CommonJS 模块。
- 也不需要 package.json 文件。

Deno 完全遵循 ESM 浏览器实现：

    // 支持
    import * as fs from "https://deno.land/std/fs/mod.ts";
    import { deepCopy } from "./deepCopy.js";
    import foo from "/foo.ts";

    // 不支持
    import foo from "foo.ts";
    import bar from "./bar"; // 必须指定扩展名

因此，Deno 不需要一个中心化的模块储存系统，可以从任何地方加载模块。

但是，Deno 下载模块以后，依然会有一个本地目录缓存模块，因此可以离线使用。设置 DENO_DIR 环境变量，默认为 `$HOME/.cache/deno`。

查看本地缓存目录信息：

    $ deno info
    DENO_DIR location: "/home/USER/.cache/deno"
    Remote modules cache: "/home/USER/.cache/deno/deps"
    TypeScript compiler cache: "/home/USER/.cache/deno/gen"

在 Windows WSL 环境中，如果希望和宿主系统即 Windows 共用一套本地缓存，可以设置 `~/.bash_profile` 和 `~/.bashrc` 中的环境变量。

    echo 'export DENO_DIR="/mnt/c/Users/USER/AppData/Local/deno"' >> ~/.bashrc

修改环境变量后一般需要重启终端或机器使其生效，或执行 source 命令使配置立即在当前 shell 中生效。

    source ~/.bashrc

有些场景是将本地写好的代码部署到没有网络的服务器，那么当执行 deno run xxx 时，就是提示 error sending request。只需要将缓存目录内容拷贝到目标服务器，并指定环境变量到其目录即可。

安装使用：

    # Windows Powershell
    iwr https://deno.land/x/install/install.ps1 -useb | iex

    # *nix Shell
    curl -fsSL https://deno.land/x/install/install.sh | sh

    # Homebrew
    brew install deno

    #Using Cargo (Windows, macOS, Linux):
    cargo install deno

    # Using Chocolatey (Windows):
    choco install deno

    # Updating
    deno upgrade
    deno upgrade --version 1.8.0

执行更新后，旧的 Deno 可执行程序会改名增加 old 后缀，比如在 Windows 平台改名后得到 deno.old.exe。版本管理工具也可以这样做，其实根本就不需要。

第一印象：

    deno run https://deno.land/std/examples/welcome.ts

    deno run main.ts a b -c --quiet
    deno run --allow-net net_client.ts
    deno run --watch --unstable main.ts

运行 Web 服务：

```js
import { serve } from "https://deno.land/std@0.87.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```

执行 Web 请求：

```js
const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
```

文件读写：

```js
const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}
```

Cat 命令实现：

```js
// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
// deno run --allow-read cat.ts cat.ts
const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}
```

## ⚡ Sublime VSCode LSP 配置
1. VScode Deno extension https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno
2. Debugging https://deno.land/manual@v1.9.0/getting_started/debugging_your_code
3. Setup Your Environment https://deno.land/manual/getting_started/setup_your_environment
4. Import Auto Completions https://github.com/denoland/vscode_deno/blob/main/docs/ImportCompletions.md
5. https://deno.land/manual@v1.36.1/getting_started/setup_your_environment
6. https://deno.land/manual@v1.36.1/advanced/language_server/overview
6. https://deno.land/manual@v1.36.1/advanced/typescript
7. https://lsp.sublimetext.io/language_servers/#typescript-language-server
8. https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocumentItem

Sublime Text 安装插件：

1. TypeScript 语言支持插件 https://packagecontrol.io/packages/TypeScript
2. LSP 语言服务器支持插件 https://packagecontrol.io/packages/LSP
3. LSP-typescript [可选安装] https://github.com/sublimelsp/LSP-typescript

Sublime 还有另外一个 LSP-typescript 插件，它一样可以支持 TypeScript 智能提示，可以同时与 Deno LSP 激活使用。但是缺少 Deno API 的支持，比如，不能正常引用 Deno 库类型定义，当然可以手动将 Deno 提供的类型声明文件放到工程目录中：

    /// <reference lib="deno.unstable" />
    const kv = await Deno.openKv();


安装好插件后，配置 Package Settings -> LSP -> Settings，将 Deno 官方文档中提供参考配置写入 LSP 插件的 clients 配置中。或者将配置写入 Sublime Text 项目配置文件中，项目文件扩展名是 *.sublime-project*。

然后打开 Sublime 项目，在界面左下角弹出出菜或者使用命令面板 LSP: Toggle Log Panel 打开调试日志面板，如果配置正确，切换到 JavaScript 或 TypeScript 脚本文件后，就会启动 Deno LSP 服务，消息打印如下：

    :: [15:33:51.941] --> deno initialize (1): {'capabilities': ... }
    deno: Starting Deno language server...
    deno:   version: 1.36.1 (release, x86_64-pc-windows-msvc)
    deno:   executable: C:\ProgramData\chocolatey\bin\deno.exe
    deno: Connected to "Sublime Text LSP" 1.25.0

可以遇到的问题：Deno LSP 可以响应 JavaScrit 脚本，但不响应 TypeScript。

首先检查一下配置文件中的 languages 作用域名称类型是否一致，使用工具菜单可以查看当前光标所在文件的作用域名称，Tools -> Developer -> Show Scope Name。

使用 LSP: Troubleshoot Server 进行问题探测。测试报告中信息如下：

Server Configuration 分类下，*selector* 指示当前有效的作用域选择器，即相匹配的 scope 就会激活 LSP 服务。*priority_selector* 应该和配置文件中的 languages 配置的顺序一致，竖直符号表示逻辑或运算，其中一种满足即匹配。

Active View 显示当前激活的文档信息，*base_scope* 指示文档对应的作用域名称类型。

```sh
 - shell command
deno lsp
 - selector
(source.js)|(source.js)
 - priority_selector
(source.ts)|(source.js)|(source.jsx)|(source.tsx)
```

Sublime LSP 插件提供了默认的语法作用域与 LSP Language ID 的映射关系，可以自定义配置：

```js
// SublimeText base scope -> LSP Language ID overrides
{
    // "source.mylanguage": "mylang"
}
```

有可能是因为语言支持包冲突导致的问题，比如安装了 *JavaScript* 语言支持包，它本身就包含 TypeScript 语言支持，如果再另外安装 *TypeScript* 支持包，则此语法设置不能正确激活 Deno LSP 服务，禁用一个语言包即可解决。

消息的箭头指示数据流向，左侧为 Client，右侧为 Server，根据 LSP 规范，通知和请求两种消息的差别在于，前者不需要响应，分别用 -
和 -- 符号表示，三个尖括号表示请求的响应数据流。客户端请求关闭服务器，--> deno shutdown，客户端收到服务器响应后再决定是否关闭客户端。

    :: [23:05:14.748]  -> deno textDocument/didClose: {'textDocument': {'uri': '....ts'}}
    :: [23:05:14.960] <-  deno textDocument/publishDiagnostics: {'diagnostics': [], 'uri': '....ts', 'version': 0}
    :: [23:05:17.786] --> deno shutdown (4): None
    deno: shutdown request received, shutting down
    :: [23:05:17.786] <<< deno (4) (duration: 1ms): None
    :: [23:05:17.786]  -> deno exit: None
    deno: exit notification received, stopping

以上是 Sublime LSP 插件触发的关闭服务器消息，在切换不同的语法作用域时产生，即由语法相关问题导致了 LSP 文档对象的关闭，再继而关闭了 Deno LSP 服务器。以下则是由用户执行 LSP: Disable Language Server in Project 命令后的消息：

    deno: shutdown request received, shutting down
    :: [21:40:26.433] --> deno shutdown (2): None
    deno: exit notification received, stopping
    :: [21:40:26.571] <<< deno (2) (duration: 139ms): None
    :: [21:40:26.571]  -> deno exit: None

正常的文档切换，语言作用域变换，会使 LSP 关闭原文档对象的映射关系，并且重新以新语言建立文档映射关系，所以 didClose 之后会有 didOpen。

导致此现象的原因是 Sublime LSP 插件的语言作用域识别机制，应该在 LSP Settings 中的 clients 下一级配置节点中设置作用域类型列表，将需要启用 Deno LSP 服务的语言作用域添加到 `selector` 配置列表中。因为 Deno 官方文档中给出的参考配置并没有包含此值，从而导致只有 JavaScript 语言作用域下才生效。其配置节点 languages 列表指定的 scopes 并不被 Sublime LSP 插件认可。

Setup your environment 文档提供的 Deno LSP 配置（增加 "selector" 配置）：

```json
    {
      "settings": {
        "LSP": {
          "deno": { // LSP Client
            "command": ["deno", "lsp"],
            "initializationOptions": {
              // "config": "", // Sets the path for the config file in your project
              "enable": true,
              // "importMap": "", // Sets the path for the import-map in your project
              "lint": true,
              "unstable": false
            },
            "enabled": true,
            "selector": "source.js, source.jsx, source.ts, source.tsx",
            "languages": [
              {
                "languageId": "javascript",
                "scopes": ["source.js"],
                "syntaxes": [
                  "Packages/Babel/JavaScript (Babel).sublime-syntax",
                  "Packages/JavaScript/JavaScript.sublime-syntax"
                ]
              },
              {
                "languageId": "javascriptreact",
                "scopes": ["source.jsx"],
                "syntaxes": [
                  "Packages/Babel/JavaScript (Babel).sublime-syntax",
                  "Packages/JavaScript/JavaScript.sublime-syntax"
                ]
              },
              {
                "languageId": "typescript",
                "scopes": ["source.ts"],
                "syntaxes": [
                  "Packages/TypeScript-TmLanguage/TypeScript.tmLanguage",
                  "Packages/TypeScript Syntax/TypeScript.tmLanguage"
                ]
              },
              {
                "languageId": "typescriptreact",
                "scopes": ["source.tsx"],
                "syntaxes": [
                  "Packages/TypeScript-TmLanguage/TypeScriptReact.tmLanguage",
                  "Packages/TypeScript Syntax/TypeScriptReact.tmLanguage"
                ]
              }
            ]
          }
        } // LSP Client
      }
    }
```

VScode 编辑器中配置，首先，安装 VScode Deno extension，它提供了几个命令：

- Deno: Cache - 指示 Deno 获取当前文件所有依赖模块，并且缓存到本地目录，类似执行 deno cache 命令。
- Deno: Initialize Workspace Configuration - 初始化 Deno 工程配置，包括 LSP 插件功能、linting 和 unstable 选项。
- Deno: Language Server Status - 显示 Deno 语言服务器状态页面，在提交扩展 bug 报告时有用。
- Deno: Reload Import Registries Cache - 重新加载缓存 reload any cached responses from the configured import registries.
- Deno: Welcome - displays the information document that appears when the extension is first installed.

注意，Deno 导入必需指定文件全名，必需包含扩展名，但是这个要求带来些困扰，在 VSCode 编辑 TypeScript 代码时，传统省略扩展名的做法是可以正确解析类型声明，但是不能通过 Deno 的编译，而省略后扩展名又不能正确解析远程模块。

    ts(2691): An import path cannot end with a '.ts' extension. Consider importing './hello' instead.

    ts(2307): Cannot find module 'https://deno.land/x/std/log/mod'.

这两个错误是 TypeScript 的编译器 tsc 提供的，如果要打补丁，就需要修改 tsc 的功能。好消息是 TypeScript 2.3 开始支持 Language Service Plugin，这个功能能增强编辑体验。

感谢 justjavac 提供了一个 Language Service Plugin 插件，它正是为了解决这 2 个问题开发的，目前已经集成到官方插件 denoland.vscode-deno。只需要配置打开 LSP 插件即可以使用，通过 Ctrl-Shift-P 执行命令 Deno: Initialize Workspace Configuration，自动在项目根目录生成类似心下的配置文件 .vscode/settings.json：

```js
{
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.idl": "c"
  },
  "deno.enable": true,  // 启用 Deno LSP
  "deno.lint": false,   // 不使用 linting
  "deno.unstable": true // 使用 --unstable
}
```

Deno 1.6 附带 Deno Language Server (deno lsp)，提供了一个实现 Language Service Protocol 语言服务器的交互。支持 LSP 编辑器可以与 Deno 通信，以提供各种高级功能，例如代码自动完成、linting 和悬停文档等。

具体的 denoland.vscode-deno 扩展特性如下：

- 提供 JavaScript/TypeScript 的类型检查，包括 quick fixes, hover cards, intellisense 等。
- 集成已经安装的 Deno CLI，使编辑器使用相同的命令版本。
- 按 Deno CLI 模块解析策略加载远程模块，并缓存在本地目录。
- 集成 Deno CLI's linting 功能，包括内联诊断，悬停参考卡。
- 集成 Deno CLI 模格式化功能。
- 允许为 Deno CLI 指定 import maps 和 TypeScript 配置文件。
- Auto completion for imports.

插件说明中有 Configuration 详细内容：

- `deno.enable`: 配置 Deno Language Server，最好启用以正确解析模块的类型信息，默认关闭。
- `deno.path`: 配置 Deno 命令所在目录，如果已经配置环境变量，可以忽略此选项。
- `deno.codeLens.implementations`: 配置 codeLens，以提供当前代码条目的实现信息。
- `deno.codeLens.references`: 是否为引用条目显示 codeLens 信息，默认关闭。
- `deno.codeLens.referencesAllFunctions`: 是否为所有函数显示 codeLens 信息 ，默认关闭。
- `deno.config`: 指定一个 tsconfig.json 文件，等同 --config 命令行参数。
- `deno.importMap`: 设置一个 import map 文件路径，相当于使用 --import-map 命令行参数。
- `deno.lint`: 配置是否为 Deno Language Server 提供 linting 信息，默认关闭。
- `deno.suggest.imports.hosts`: 自动完成导入的主机映射，如 `{"https://deno.land/": true }`，具体参考插件文档。
- `deno.unstable`: 配置类型检查是否启用 Deno's unstable APIs，如同使用 --unstable 命令参数，默认关闭。

通过 CodeLens，你可以在专注于工作的同时了解代码所发生的情况，而无需离开编辑器。相关信息通过卡片方式展示，可以查找代码引用、代码更改、关联的 Bug、工作项、代码评审和单元测试。

Deno 支持 V8 Inspector Protocol 调试，打开以下一选项开启脚本调试运行，可以使用 Chrome Devtools 调试工具。

    $ deno run --inspect-brk --allow-read --allow-net https://deno.land/std@0.93.0/http/file_server.ts
    Debugger listening on ws://127.0.0.1:9229/ws/1e82c406-85a9-44ab-86b6-7341583480b1
    Download https://deno.land/std@0.93.0/http/file_server.ts
    Compile https://deno.land/std@0.93.0/http/file_server.ts
    ...

- `--inspect` 打开调试器运行，允许任何时间附加到调试器。
- `--inspect-brk` 打开调试器，并等待连接调试。

打开浏览器 `chrome://inspect` 列表并刷新可以看到探测到的待连接调试的 Target，点击 Inspect 按钮开始调试。

使用 VSCode 直接配置 launch.json，然后打开需要执行脚本文件，选择调试列表中的 Deno 开始调试：

    {
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Deno",
          "type": "pwa-node",
          "request": "launch",
          "cwd": "${workspaceFolder}",
          "runtimeExecutable": "deno",
          "runtimeArgs": ["run", "--inspect-brk", "-A", "${file}"],
          "outputCapture": "std",
          "attachSimplePort": 9229
        }
      ]
    }

或配置 VSCode Tasks 任务：

    // task.json
    {
      // https://code.visualstudio.com/docs/editor/tasks
      "version": "2.0.0",
      "tasks": [
        {
          "label": "Deno run",
          "type": "shell",
          "command": "deno",
          "args": ["run", "-A", "${file}", ], // deno run -A filename.ts
          "group": {
            "kind": "build",
            "isDefault": true,
          },
          "presentation": {
            "reveal": "always",
            "focus": true,
            "panel": "shared",
            "showReuseMessage": true,
            "clear": false
          }
        }
      ]
    }

如果遇到执行调试失败，或因为 Anitmalware 查杀，可以将 Code.exe 和 Deno.exe 设置为防火墙入站许可。

在 Windows WSL 环境下正常，没有被拦截的情况。


## ⚡ Deno v1.8 Release
- 精读《Deno v1.8 发布说明》 https://my.oschina.net/hylerrix/blog/4979174
- https://github.com/crowlKats/webgpu-examples
- 从 CLI 指令通读 Deno v1.x 全特性 https://juejin.cn/post/6857058738046861320#heading-9
- Crate deno_core https://docs.rs/deno_core/0.81.0/deno_core/index.html
- deno_core 0.81.0 https://crates.io/crates/deno_core/0.81.0
- 10 Things I Regret About Node.js - Ryan Dahl - JSConf EU https://www.bilibili.com/video/av795642880
- 为什么我认为 Deno 是一个迈向错误方向的 JavaScript 运行时？ https://deno-tutorial.js.org/articles/translation/why-deno-wrong.html
- Design Mistakes in Node - Ryan Dahl @JS Conf Berlin June 2018 https://tinyclouds.org/jsconf2018.pdf

Node 之父 Ryan Dahl 在柏林 JS 大会上发表了主题演讲 “Design Mistakes in Node” 指出过去他在设计 Node 时犯的一些错误，包括：

- 安全性
- 构建系统，基于 GYP 是问题
- package.json 包含太多不必要的内容，有太多重复依赖，require 方法不规范
- node_modules 依赖黑洞
- callback 地狱，而不是更简洁的 Promise 或 async/await
- index.js

Deno 架构图：

![Schematic diagram](https://deno.land/images/schematic_v0.2.png)

Deno 由多个部分组成，其中一个主要部分是 deno_core，这是一个 rust 实现的核心，可以用来嵌入 JavaScript 运行时到 rust 应用程序中。

Deno v1.8.0 版本发布，涵盖了大量的新功能和标准化工作：

- 实验性支持 WebGPU API：在 Deno 中为开箱即用的 GPU 加速机器学习铺平道路。
- 启用内置的国际化 API：支持所有 JS 标准下的 Intl API 开箱即用。
- 翻新测试覆盖工具：测试覆盖功能支持输出 lcov 报告。
- 落地 Import Maps 标准：Web 兼容的依赖重写现已发布。
- 支持获取私有模块：可以使用授权的 token 令牌从私有的服务端获取远程模块。

WebGPU API 是 WebGL 的加强版，给开发者提供一个底层、高性能和跨平台的方式来通过 JavaScript 在 GPU 硬件上编码。相关规范虽未正式确定，但目前 Firefox、Chromium 和 Safari 已逐步开始支持，Deno 也一样在跟进。

该 API 可以让开发者从 Deno 内部进行 GPU 渲染和通用 GPU 计算。一旦该 API 标准化结束并在 Deno 中被取消 unstable 标记，这将正式为开发者提供一种从 Web、服务器和开发机器上访问 GPU 资源的便捷方法。

GPU 可以允许开发者使某些数值算法高度并行。这在渲染图形和游戏外也很有用。在机器学习中高效使用 GPU 开启了复杂的神经网络体系——常被称为“深度学习”。计算机视觉、翻译、图像生成和强化学习等领域的飞速发展都源于有效利用了 GPU 硬件。

如今，大多数神经网络都是在 Python 中定义的，而计算交由 GPU 负责。我们相信如果存在适当基础架构的情况下， JavaScript（而不是 Python），也可以成为表达数学思想的理想语言。在 Deno 中提供开箱即用的 WebGPU 支持是朝向这个方向的一步。我们的目标是通过支持 GPU 加速，以在 Deno 上运行 Tensorflow.js。我们期望这将在未来几周或几个月内落实。

这是一个演示如何访问连接的 GPU 设备并读取名称和其所支持的功能的基本示例：

    // 执行 `deno run --unstable https://deno.land/posts/v1.8/webgpu_discover.ts`

    // 尝试从用户代理来获取一个 adapter 适配器
    const adapter = await navigator.gpu.requestAdapter();
    if (adapter) {
      // 打印出这个适配器的一些基本详情
      console.log(`Found adapter: ${adapter.name}`);
      const features = [...adapter.features.values()];
      console.log(`Supported features: ${features.join(", ")}`);
    } else {
      console.error("No adapter found");
    }

crowlKats/webgpu-examples/hello-triangle/mod.ts 提供的一个小示例，演示 GPU 如何使用渲染着色器在绿色背景上渲染一个简单的红色三角形，使用 WebAssembly 来生成 PNG。

    $ git clone git@github.com:crowlKats/webgpu-examples.git
    cd webgpu-examples
    $ deno run --unstable --allow-write=output.png webgpu-examples/hello-triangle/mod.ts

这非常感谢 crowlKats 领导了将 WebGPU 集成到 Deno 的工作。我们也非常感谢为 Deno 中的 WebGPU 支持奠定基础的 wgpu 和 gfx-rs 项目的所有贡献者。也特别感谢 WebGPU 规范的编辑 kvark 以及 webgpu 和 gfx-rs 的首席开发者们，他们均为实现 WebGPU API 提供了出色的指导。


## ⚡ Strapi HCMS
- Strapi - Open source Node.js Headless CMS 🚀 https://strapi.io
- Introduction https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html
- Quick Start Guide https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html
- https://strapi.io/documentation/user-docs/latest/content-types-builder/introduction-to-content-types-builder.html
- https://strapi.io/documentation/user-docs/latest/users-roles-permissions/introduction-to-users-roles-permissions.html
- https://github.com/strapi/strapi

这是一个免费开源内容管理系统，提供丰富的 UI 界面来操作数据库，视图高可配置，可根据需要调整。

运行以下任一条命令安装使用，创建模板工程:

    yarn create strapi-app my-project --quickstart
    npx create-strapi-app my-project --quickstart

    yarn develop
    npm run develop

Create an Administrator user，打开 http://localhost:1337/admin 创建管理员账户。

所有功能都基于 RBAC - Role Based Access Control 进行单项控件，只有允许的功能才可以供登录者使用。

默认提供以下三个角色，在设置面板中可以为这些角色匹配功能使用权：

- `Author`: to be able to create and manage their own content.
- `Editor`: to be able to create content, and manage and publish any content.
- `Super Admin`: to be able to access all features and settings.

默认安装了 Content-Types Builder 插件，通过它可以创建各种 Content Types：

- Collection Types 集合数据，对应长个条目的数据表，也可以创建表用来保存内容分类，表之间可以进行关联，Strapi 提供了关联操作。
- Single Type 单一数据类型只管理一个条目，也集合内容一样会在 API 目录下生成一系列相关的脚本文件。
- Components 组件数据结构可以在多个集合数据和单一数据中使用，会在 components 目录下创建分类目录 category 和 .json 配置。

各种类型都可以配置任意的字段，每个字段都有一个类型：

- `Text` - Small or long text like title or description
- `Email` - Email field with validations format
- `Rich Text` - A rich text editor with formatting options
- `Password` - Password field with encryption
- `Number` - Numbers (integer, float, decimal)
- `Enumeration` - List of values, then pick one
- `Date` - A date picker with hours, minutes and seconds
- `Media` - Files like images, videos, etc
- `Boolean` - Yes or no, 1 or 0, true or false
- `JSON` - Data in JSON format
- `Relation` - Refers to a Collection Type
    - One way: Content-type A has one Content-type B
    - One-to-one: Content-type A has and belong to one Content-type B
    - One-to-many: Content-type A belongs to many Content-type B
    - Many-to-one: Content-type B has many Content-type A
    - Many-to-many: Content-type A has and belongs to many Content-type B
    - Many way: Content-type A has many Content-type B
- `UID` - Unique identifier
- `Component` - Group of fields that you can repeat or reuse
- `Dynamic Zone` - Dynamically pick component when editi

创建好内容分类，保存写入数据库，然后就可以在 Collection Types 中看到相应的条目，点击进入可以添加数据。

默认有一个 Users 表提供用户权限数据编辑，它关联了其它两个表：

- Permission (from: users-permissions)
- Role (from: users-permissions) 
- User (from: users-permissions) 

另外一个插件是 Roles & Permissions，它用来配置 API 的 JTW 验证，确认安全由于访问。

项目结构：

    /.cache: contains files used to build your admin panel.
    /admin: (optional) contains your admin customization files.
    /api: contains the business logic of your project split into sub-folders per API.
        /config: contains the API's configurations (routes, policies, etc.).
        /controllers: contains the API's custom controllers.
        /models: contains the API's models.
        /services: contains the API's custom services.
    /build: contains your admin panel UI build.
    /config
        /functions: contains lifecycle or generic functions of the project.
            /responses: contains custom responses.
                404.js: contains a template for constructing your custom 404 message.
            bootstrap.js: contains the code executed at the application start.
            cron.js: contains the cron tasks.
        server.js: contains the general configurations of the project.
        database.js: contains the database configurations of the project.
    /extensions: contains the files to extend installed plugins.
    /hooks: contains the custom hooks of the project.
    /middlewares: contains the custom middlewares of the project.
    /plugins: contains your local plugins.
    /public: contains the files accessible to the outside world.
    /node_modules: contains the npm packages used by the project.

## ⚡ High Concurrency concepts

分布式、微服务、Service Mesh 目前都是大家耳熟能详的词语了，现在随便一个互联网公司说出来大家都是在搞微服务。

这需要一堆监控指标来协助我们进行分析当前的应用状态，以便在某些事故发生前进行资源上的调配或优化。

要牢记一点，所有的指标都是根据时间单位来算的，比如每秒 PS、每分钟 PM。

下面咱们就来说道说道这几个重要的指标：

- QPS - Queries Per Second

    每秒处理查询次数。例如，QPS 50 表示，一秒内用户完成了 50 次查询请求，用户发起查询请求到服务器做出响应这算一次。

- TPS - Transactions Per Second

    概念：服务器每秒处理的事务数，一个事物是用户发起查询请求到服务器做出响应这算一次。和 QPS 相似，在针对单接口，TPS 可以认为是等价于 QPS 的，如访问一个页面是一个 TPS，而访问另一个页面可能请求了 3 服务器，这实际就算产生了三个 QPS。

- RT - Resonse Time

    概念：响应实际，就是从客户端请求发起到服务器响应结果的时间。RT 这个参数是系统最重要的指标之一，它的大小直接反应了当前系统的响应状态。基本和咱们用户体验息息相关，现在好一点监控系统一般都有三个 RT，即平均、最大、最小。

一般系统 RT 100ms 以内是比较正常的，300ms 勉强可以接受，1s 的话再加上一些其他的外因导致更大延时，用户已经在内心喊 NMP 了。

- 并发数

    概念：系统能同时处理的请求的数量，不要和 TPS 混淆。举例，请求一个页面需要客户端发起了三个请求，那么此时 TPS 1、QPS 3、并发数 3。

    SO，并发数等于 QPS * RT，而 QPS 等于并发数/RT 

- Throughput

    概念：每秒承受的用户访问量，吞吐量，即系统能承受多少压力，和当前请求对 CPU 消耗、内存、I/O 使用等等紧密相关。单个请求消耗越高，系统吞吐量越低，反之越高。

    一个系统的吞吐量和其 TPS 、QPS、并发数息息相关，每个系统针对这些值都有一个相对极限值，只要其中某一个达到最大，系统的吞吐量也就到达极限了。如此时压力继续增大，系统的吞吐量反而会下降，原因是系统超负荷工作，各种资源切换等等的消耗导致系统性能下降。

    所以，综合理解上面几个关系： QPS（TPS）= 并发数/平均响应时间

- PV - Page View

    概念： 即每个页面的浏览次数，用户每次刷新就算一次。

- UV - Unique Visitor

    概念：独立访客数，每天访问的用户数，此数据需要根据用户唯一标识进行去重。

- Load

    概念：系统负载数据指的是 Linux 系统的负载情况，也就是咱们平时所用 Top 命令查询到的最上面显示的系统负载信息 load average。显示值为最后 1分钟、5分钟、15分钟的平均系统负载值。

    取三个时间平均值参考，比如只有 1 分钟的是满负载，其他俩都是 0.1，这表明只是临时突发的现象，问题不大。如果15分钟内，系统负荷都是满负载，那表明问题持续存在啊。

    对于单核 CPU 系统负载值最大为 1 表示系统已经满负荷状态。但实际经验中，当系统负荷持续大于 0.7 也就是 70%，就基本是满载了，需要马上解决问题，防止进一步恶化。


## ⚡ Examples

Basics

1. Hello World https://examples.deno.land/hello-world
2. Logging with colors https://examples.deno.land/color-logging
3. Importing & Exporting https://examples.deno.land/import-export
4. Dependency Management https://examples.deno.land/dependency-management
5. Use Node.js built-in modules https://examples.deno.land/node
6. Import modules from npm https://examples.deno.land/npm
7. Built-in TypeScript support https://examples.deno.land/typescript
8. Timeouts & Intervals https://examples.deno.land/timers
9. Manipulating & Parsing URLs https://examples.deno.land/url-parsing


Encoding

1. Importing JSON https://examples.deno.land/importing-json
2. Parsing and serializing JSON https://examples.deno.land/parsing-serializing-json
3. Parsing and serializing TOML https://examples.deno.land/parsing-serializing-toml
4. Parsing and serializing YAML https://examples.deno.land/parsing-serializing-yaml
5. Parsing and serializing CSV https://examples.deno.land/parsing-serializing-csv
6. Hex and Base64 Encoding https://examples.deno.land/hex-base64-encoding
7. Manipulating byte arrays https://examples.deno.land/byte-manipulation


CLI

1. Command Line Arguments https://examples.deno.land/command-line-arguments
2. Input Prompts https://examples.deno.land/prompts
3. Getting the Deno version https://examples.deno.land/deno-version
4. Permission Management https://examples.deno.land/permissions
5. Writing Tests https://examples.deno.land/writing-tests

Network

01. HTTP Requests https://examples.deno.land/http-requests
02. Outbound WebSockets https://examples.deno.land/websocket
03. Running DNS Queries https://examples.deno.land/dns-queries
04. HTTP Server: Hello World https://examples.deno.land/http-server
05. HTTP Server: Routing https://examples.deno.land/http-server-routing
06. HTTP Server: Streaming https://examples.deno.land/http-server-streaming
07. HTTP Server: Serving Files https://examples.deno.land/http-server-files
08. HTTP Server: WebSockets https://examples.deno.land/http-server-websocket
09. TCP Listener: Ping https://examples.deno.land/tcp-listener
10. TCP Connector: Ping https://examples.deno.land/tcp-connector
11. TCP/TLS Listener: Ping https://examples.deno.land/tls-listener
12. TCP/TLS Connector: Ping https://examples.deno.land/tls-connector
13. Piping Streams https://examples.deno.land/piping-streams


System

1. Benchmarking https://examples.deno.land/benchmarking
2. Process Information https://examples.deno.land/pid
3. Handling OS Signals https://examples.deno.land/os-signals
4. Environment Variables https://examples.deno.land/environment-variables
5. Subprocesses: Collecting Output https://examples.deno.land/subprocesses-output
6. Subprocesses: Spawning https://examples.deno.land/subprocesses-spawn

File System

01. Reading Files https://examples.deno.land/reading-files
02. Writing Files https://examples.deno.land/writing-files
03. Deleting Files https://examples.deno.land/deleting-files
04. Moving/Renaming Files https://examples.deno.land/moving-renaming-files
05. Temporary Files & Directories https://examples.deno.land/temporary-files
06. Creating & Removing Directories https://examples.deno.land/create-remove-directories
07. Creating & Resolving Symlinks https://examples.deno.land/symlinks
08. Watching the filesystem https://examples.deno.land/watching-files
09. Walking directories https://examples.deno.land/walking-directories
10. Checking for file existence https://examples.deno.land/checking-file-existence
11. Path operations https://examples.deno.land/path-operations
12. Streaming File Operations https://examples.deno.land/streaming-files

Databases

1. Connect to Postgres https://examples.deno.land/postgres
2. Deno KV: Key/Value Database https://examples.deno.land/kv

Cryptography

1. Hashing https://examples.deno.land/hashing
2. Generating & Validating UUIDs https://examples.deno.land/uuids

Advanced

1. Web Workers https://examples.deno.land/web-workers
2. Web Assembly https://examples.deno.land/webassembly


### ✔Logging with colors
https://examples.deno.land/color-logging
```js
console.log("%cHello World", "color: red");

console.log("%cHello World", "background-color: blue");

console.log("%cHello World", "text-decoration: underline");
console.log("%cHello World", "text-decoration: line-through");

console.log("%cHello World", "font-weight: bold");

console.log("%cHello World", "color: red; font-weight: bold");

console.log("%cHello %cWorld", "color: red", "color: blue");

console.log("%cHello World", "color: #FFC0CB");
console.log("%cHello World", "color: rgb(255, 192, 203)");
```

ASCII 控制字符定义，使用 \033[1A 或者 \x1b[1A 控制字符移动光标到行首，\033[K 清除当前行内容。

### ✔Use Node.js built-in modules
https://examples.deno.land/node
```js
import os from "node:os";

console.log("Current architecture is:", os.arch());
console.log("Home directory is:", os.homedir());
```

### ✔Import modules from npm
https://examples.deno.land/npm
```js
import express from "npm:express@4.18.2";

const app = express();

app.get("/", (_req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(3000);
```

### ✔Manipulating & Parsing URLs
https://examples.deno.land/url-parsing
```js
let url = new URL("https://deno.land/manual/introduction");

url = new URL("/manual/introduction", "https://deno.land");

console.log(url.href); // https://deno.land/manual/introduction

console.log(url.host); // deno.land
console.log(url.origin); // https://deno.land
console.log(url.pathname); // /manual/introduction
console.log(url.protocol); // https:

url = new URL("https://deno.land/api?s=Deno.readFile");

console.log(url.searchParams.get("s")); // Deno.readFile

url.host = "deno.com";
url.protocol = "http:";

console.log(url.href); // http://deno.com/api?s=Deno.readFile
```


### ✔Importing JSON
https://examples.deno.land/importing-json
JSON files can be imported in JS and TS files using the `import` keyword. This makes including static data in a library much easier.


```js
import file from "./version.json" assert { type: "json" };
console.log(file.version);

const module = await import("./version.json", {
  assert: { type: "json" },
});
console.log(module.default.version);
```


### ✔Hex and Base64 Encoding
https://examples.deno.land/hex-base64-encoding
```js
import * as base64 from "https://deno.land/std@0.194.0/encoding/base64.ts";
import * as hex from "https://deno.land/std@0.194.0/encoding/hex.ts";

const base64Encoded = base64.encode("somestringtoencode");
console.log(base64.encode(new Int8Array([1, 32, 67, 120, 19])));

const base64Decoded = base64.decode(base64Encoded);

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
console.log(textDecoder.decode(base64Decoded));

const arrayBuffer = textEncoder.encode("somestringtoencode");
const hexEncoded = hex.encode(arrayBuffer);
console.log(hexEncoded);

console.log(textDecoder.decode(hexEncoded));

const hexDecoded = hex.decode(hexEncoded);
console.log(textDecoder.decode(hexDecoded));
```

### ✔Manipulating byte arrays
https://examples.deno.land/byte-manipulation
```js
const a = new Uint8Array([0, 1, 2, 3, 4]);
const b = new Uint8Array([5, 6, 7, 8, 9]);
const c = new Uint8Array([4, 5]);

import { concat } from "https://deno.land/std@0.194.0/bytes/concat.ts";
const d = concat(a, b);
console.log(d); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

import { repeat } from "https://deno.land/std@0.194.0/bytes/repeat.ts";
console.log(repeat(c, 4)); // [4, 5, 4, 5, 4, 5, 4, 5]

import { copy } from "https://deno.land/std@0.194.0/bytes/copy.ts";
const cpy = new Uint8Array(5);
console.log("Bytes copied:", copy(b, cpy)); // 5
console.log("Bytes:", cpy); // [5, 6, 7, 8, 9]
```

### ✔Command Line Arguments
https://examples.deno.land/command-line-arguments
deno run https://examples.deno.land/command-line-arguments.ts Deno Sushi --help --version=1.0.0 --no-color
```js
const name = Deno.args[0];
const food = Deno.args[1];
console.log(`Hello ${name}, I like ${food}!`);

import { parse } from "https://deno.land/std@0.194.0/flags/mod.ts";

const flags = parse(Deno.args, {
  boolean: ["help", "color"],
  string: ["version"],
  default: { color: true },
});
console.log("Wants help?", flags.help);
console.log("Version:", flags.version);
console.log("Wants color?:", flags.color);

console.log("Other:", flags._);
```

### ✔Input Prompts
https://examples.deno.land/prompts
```js
alert("Please acknowledge the message.");
console.log("The message has been acknowledged.");

const shouldProceed = confirm("Do you want to proceed?");
console.log("Should proceed?", shouldProceed);

const name = prompt("Please enter your name:");
console.log("Name:", name);

const age = prompt("Please enter your age:", "18");
console.log("Age:", age);
```

### ✔Getting the Deno version
https://examples.deno.land/deno-version
```js
console.log("%c%cVersions", "color: red; background-color:white");
console.log("Current Deno version", Deno.version.deno);
console.log("Current TypeScript version", Deno.version.typescript);
console.log("Current V8 version", Deno.version.v8);
```

### ✔Permission Management
https://examples.deno.land/permissions
```js
let status = await Deno.permissions.request({ name: "env" });
if (status.state === "granted") {
  console.log("'env' permission is granted.");
} else {
  console.log("'env' permission is denied.");
}

status = Deno.permissions.requestSync({ name: "env" });
if (status.state === "granted") {
  console.log("'env' permission is granted.");
} else {
  console.log("'env' permission is denied.");
}

const readStatus = await Deno.permissions.query({
  name: "read",
  path: "/etc",
});
console.log(readStatus.state);

import { assert } from "https://deno.land/std@0.194.0/testing/asserts.ts";

const runStatus = await Deno.permissions.revoke({ name: "run" });
assert(runStatus.state !== "granted");
```

### ✔Writing Tests
https://examples.deno.land/writing-tests
```js
import { assert, assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts";

Deno.test("assert works correctly", () => {
  assert(true);
  assertEquals(1, 1);
});

Deno.test("testing steps", async (t) => {
  const file = await Deno.open("example.txt", {
    read: true,
    write: true,
    create: true,
  });
  const encoder = new TextEncoder();
  const data = encoder.encode("Hello world!");

  await t.step("write some bytes", async () => {
    const bytesWritten = await file.write(data);
    assertEquals(bytesWritten, data.length);
    await file.seek(0, Deno.SeekMode.Start);
  });

  await t.step("read some bytes", async () => {
    const buffer = new Uint8Array(data.length);
    await file.read(buffer);
    assertEquals(buffer, data);
  });

  file.close();
});

Deno.test({
  name: "leaky test",
  async fn() {
    await Deno.open("example.txt");
  },
  sanitizeResources: false,
});
```

### ✔HTTP Requests
https://examples.deno.land/http-requests
```js
let resp = await fetch("https://example.com");

console.log(resp.status); // 200
console.log(resp.headers.get("Content-Type")); // "text/html"
console.log(await resp.text()); // "Hello, World!"

resp = await fetch("https://example.com");
await resp.arrayBuffer();
/** or await response2.json(); */
/** or await response2.blob(); */

resp = await fetch("https://example.com");
for await (const chunk of resp.body!) {
  console.log("chunk", chunk);
}

const body = `{"name": "Deno"}`;
resp = await fetch("https://example.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "foobar",
  },
  body,
});

const req = new Request("https://example.com", {
  method: "DELETE",
});
resp = await fetch(req);

const url = "https://example.com";
new Request(url, {
  method: "POST",
  body: new Uint8Array([1, 2, 3]),
});
new Request(url, {
  method: "POST",
  body: new Blob(["Hello, World!"]),
});
new Request(url, {
  method: "POST",
  body: new URLSearchParams({ "foo": "bar" }),
});

const formData = new FormData();
formData.append("name", "Deno");
formData.append("file", new Blob(["Hello, World!"]), "hello.txt");
resp = await fetch("https://example.com", {
  method: "POST",
  body: formData,
});

const bodyStream = new ReadableStream({
  start(controller) {
    controller.enqueue("Hello, World!");
    controller.close();
  },
});
resp = await fetch("https://example.com", {
  method: "POST",
  body: bodyStream,
});
```


### ✔HTTP Server: Streaming
https://examples.deno.land/http-server-streaming
```js
function handler(_req: Request): Response {
  let timer: number | undefined = undefined;
  const body = new ReadableStream({
    start(controller) {
      timer = setInterval(() => {
        const message = `It is ${new Date().toISOString()}\n`;
        controller.enqueue(new TextEncoder().encode(message));
      }, 1000);
    },
    cancel() {
      if (timer !== undefined) {
        clearInterval(timer);
      }
    },
  });
  return new Response(body, {
    headers: {
      "content-type": "text/plain",
      "x-content-type-options": "nosniff",
    },
  });
}
Deno.serve(handler);
```

### ✔HTTP Server: Routing
https://examples.deno.land/http-server-routing
```js
const BOOK_ROUTE = new URLPattern({ pathname: "/books/:id" });

function handler(req: Request): Response {

  const match = BOOK_ROUTE.exec(req.url);

  if (match) {
    const id = match.pathname.groups.id;
    return new Response(`Book ${id}`);
  }

  return new Response("Not found (try /books/1)", {
    status: 404,
  });
}

Deno.serve(handler);
```

### ✔HTTP Server: Serving Files
https://examples.deno.land/http-server-files
```js
import { serveDir, serveFile } from "https://deno.land/std@0.194.0/http/file_server.ts";
Deno.serve((req: Request) => {
  const pathname = new URL(req.url).pathname;

  if (pathname === "/simple_file") {
    return serveFile(req, "./path/to/file.txt");
  }

  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: "public",
      urlRoot: "static",
    });
  }

  return new Response("404: Not Found", {
    status: 404,
  });
});
```


### ✔HTTP Server: WebSockets
https://examples.deno.land/http-server-websocket
```js
Deno.serve((req) => {

  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 });
  }

  const { socket, response } = Deno.upgradeWebSocket(req);

  socket.addEventListener("open", () => {
    console.log("a client connected!");
  });

  socket.addEventListener("message", (event) => {
    if (event.data === "ping") {
      socket.send("pong");
    }
  });

  return response;
});
```

### ✔Piping Streams
https://examples.deno.land/piping-streams
```js
const download = await Deno.open("example.html", { create: true, write: true });

const req = await fetch("https://examples.deno.land");

req.body?.pipeTo(download.writable);


import { bgBrightYellow } from "https://deno.land/std@0.194.0/fmt/colors.ts";

class HighlightTransformStream extends TransformStream<string, string> {
  constructor() {
    super({
      transform: (chunk, controller) => {
        controller.enqueue(chunk.replaceAll("<", bgBrightYellow("<")));
      },
    });
  }
}

const example = await Deno.open("example.html", { read: true });

await example.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new HighlightTransformStream())
  .pipeThrough(new TextEncoderStream())
  .pipeTo(Deno.stdout.writable);
```


### ✔Process Information
https://examples.deno.land/pid
```js
console.log(Deno.pid);
console.log(Deno.ppid);
```


### ✔Subprocesses: Collecting Output
https://examples.deno.land/subprocesses-output
```js
const command = new Deno.Command("deno", {
  args: [
    "eval",
"\
    console.log('hello from deno'); \
    console.error('hello from stderr'); \
    ",
  ],
});

let result = await command.output();

result = command.outputSync();

const textDecoder = new TextDecoder();
console.log("stdout:", textDecoder.decode(result.stdout));
console.log("stderr:", textDecoder.decode(result.stderr));
```

### ✔Subprocesses: Spawning
https://examples.deno.land/subprocesses-spawn
```js
const command = new Deno.Command("deno", {
  args: [ "fmt", "-", ],
  stdin: "piped",
  stdout: "piped",
});

const process = await command.spawn();

const writer = await process.stdin.getWriter();
writer.write(new TextEncoder().encode("console.log('hello')"));
writer.releaseLock();

await process.stdin.close();

const result = await process.output();
console.log(new TextDecoder().decode(result.stdout));
```


### ✔Handling OS Signals
https://examples.deno.land/os-signals
https://deno.land/api?s=Deno.addSignalListener
https://deno.land/api@v1.36.1?s=Deno.Signal
```js
console.log("Counting seconds...");

let i = 0;

function sigIntHandler() {
  console.log("interrupted! your number was", i);
  Deno.exit();
}

Deno.addSignalListener("SIGINT", sigIntHandler);

const interval = setInterval(() => {
  i++;
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  Deno.removeSignalListener("SIGINT", sigIntHandler);
  console.log("done! it has been 10 seconds");
}, 10_000);
```


### ✔Environment Variables
https://examples.deno.land/environment-variables
deno run --allow-env https://examples.deno.land/environment-variables.ts
```js
const PORT = Deno.env.get("PORT");
console.log("PORT:", PORT);

const env = Deno.env.toObject();
console.log("env:", env);

Deno.env.set("MY_PASSWORD", "123456");

Deno.env.delete("MY_PASSWORD");

Deno.env.set("MY_PASSWORD", "123");
Deno.env.set("my_password", "456");
console.log("UPPERCASE:", Deno.env.get("MY_PASSWORD"));
console.log("lowercase:", Deno.env.get("my_password"));
```



### ✔Benchmarking
https://examples.deno.land/benchmarking
deno bench https://examples.deno.land/benchmarking.ts
```js
Deno.bench("URL parsing", () => {
  new URL("https://deno.land");
});
Deno.bench("Async method", async () => {
  await crypto.subtle.digest("SHA-256", new Uint8Array([1, 2, 3]));
});
Deno.bench({
  name: "Long form",
  fn: () => {
    new URL("https://deno.land");
  },
});
Deno.bench({
  name: "Date.now()",
  group: "timing",
  baseline: true,
  fn: () => {
    Date.now();
  },
});

Deno.bench({
  name: "performance.now()",
  group: "timing",
  fn: () => {
    performance.now();
  },
});
```


### ✔Creating & Resolving Symlinks
https://examples.deno.land/symlinks
Creating and resolving symlink is a common task. Deno has a number of functions for this task.
```js
await Deno.writeTextFile("example.txt", "hello from symlink!");

await Deno.symlink("example.txt", "link");
console.log(await Deno.realPath("link"));
console.log(await Deno.readTextFile("link"));

await Deno.link("example.txt", "hardlink");
console.log(await Deno.readTextFile("hardlink"));
```

### ✔Watching the filesystem
https://examples.deno.land/watching-files
When creating frameworks or CLI tools, it is often neccessary to watch the filesystem for changes.
```js
let watcher = Deno.watchFs("./");
for await (const event of watcher) {
  console.log(">>>> event", event);
  watcher.close();
}


import { debounce } from "https://deno.land/std@0.194.0/async/debounce.ts";
const log = debounce((event: Deno.FsEvent) => {
  console.log("[%s] %s", event.kind, event.paths[0]);
}, 200);

watcher = Deno.watchFs("./");

for await (const event of watcher) {
  log(event);
}
```


### ✔Walking directories
https://examples.deno.land/walking-directories
When doing something like filesystem routing, it is useful to be able to walk down a directory to visit files.
```js
for await (const dirEntry of Deno.readDir(".")) {
  console.log("Basic listing:", dirEntry.name);
}


import { walk } from "https://deno.land/std@0.194.0/fs/walk.ts";

for await (const dirEntry of walk(".")) {
  console.log("Recursive walking:", dirEntry.name);
}
for await (const dirEntry of walk(".", { exts: ["ts"] })) {
  console.log("Recursive walking with extension:", dirEntry.name);
}
```

### ✔Checking for file existence
https://examples.deno.land/checking-file-existence
Sometimes we as developers think that we need to check if a file exists or not. More often than not, we are entirely wrong.
```js
try {
  await Deno.mkdir("new_dir");
} catch (err) {
  if (!(err instanceof Deno.errors.AlreadyExists)) {
    throw err;
  }
}
try {
  await Deno.lstat("example.txt");
  console.log("exists!");
} catch (err) {
  if (!(err instanceof Deno.errors.NotFound)) {
    throw err;
  }
  console.log("not exists!");
}
```


### ✔Path operations
https://examples.deno.land/path-operations
Many applications need to manipulate file paths in one way or another. The Deno standard library provides simple utilities for this.
```js
import * as path from "https://deno.land/std@0.194.0/path/mod.ts";

const p1 = path.posix.fromFileUrl("file:///home/foo");
const p2 = path.win32.fromFileUrl("file:///home/foo");
console.log(`Path 1: ${p1} Path 2: ${p2}`);
const p3 = path.fromFileUrl("file:///home/foo");
console.log(`Path on current OS: ${p3}`);

const formatPath = path.format({
  root: "/",
  dir: "/home/user/dir",
  ext: ".html",
  name: "index",
});
console.log({
    formatPath, // "/home/user/dir/index.html"
    basename: path.basename(formatPath), // index.html
    dirname: path.dirname(formatPath),  // /home/user/dir
    extname: path.extname(formatPath), // .html
})

const joinPath = path.join("foo", "bar");
console.log(joinPath);
const current = Deno.cwd();
console.log(current);
```


### ✔Streaming File Operations
https://examples.deno.land/streaming-files
Sometimes we need more granular control over file operations. Deno provides a low level interface to file operations that may be used for this purpose.
```js
const output = await Deno.open("example.txt", {
  create: true,
  append: true,
});
const outputWriter = output.writable.getWriter();
await outputWriter.ready;
const outputText = "I love Deno!";
const encoded = new TextEncoder().encode(outputText);
await outputWriter.write(encoded);
await outputWriter.close();

const input = await Deno.open("example.txt");
const inputReader = input.readable.getReader();
const decoder = new TextDecoder();

let done = false;
do {
  const result = await inputReader.read();
  done = result.done;

  if (result.value) {
    console.log(`Read chunk: ${decoder.decode(result.value)}`);
  }
} while (!done);
```

### ✔Deno SQLite ORM
https://deno.land/x/deno_sqlite_orm
Sqlite ORM for deno. Tables with relations are not supported.

Defining columns:
All properties of the table are considered as columns. Column types are automatically inferred from the default value
of the property.


```js
@orm.model()
class Foo extends SqlTable {
  // type is automatically inferred as "string"
  public foo = 'bar'

  // column type is required when property doesn't have a default value
  @orm.columnType('string')
  public bar!: string

  // set a column as a primary key
  @orm.primaryKey()
  public fooId = 0

  // ignore property
  @orm.ignoreColumn()
  @orm.autoIncrement() // mark it as autoincrement
  @orm.columnType('integer')
  public ignored = 0
  
  // remove id from primary key
  @orm.ignoreColumn()
  public id = -1

  // automatically marked as nullable
  @orm.columnType('string')
  @orm.nullable() // or manually mark it
  public baz: string | null = null

  // incase the column exists with a different name
  @orm.mappedTo('bar')
  public baa = ''

  // if you don't want to stack multiple decorators, you can do:
  @orm.column({ type: 'string', nullable: true })
  public faz!: string | null
}
```


Querying data:

```js
// find a single a row, throws an error (`DBNotFound`) when not found
orm.findOne(Foo, 1) // finds a row in Foo where id = 1
// equivalent to above
orm.findOne(Foo, {
  where: {
    clause: 'id = ?',
    values: [1] // optional when not using placeholders
  }
})

// same usage as above, but returns a new instance of `Foo` when not found
// you can check if its new from `Foo._new`
orm.findOneOptional(Foo, 1)

// same as `findOne` but returns multiple instances of or rows of Foo
orm.findMany(Foo, {
  where: {
    clause: 'id > 5'
  },
  limit: 10, // optional
  offset: 3 // optional
})

// save an instance of Foo
const baz = new Foo()
orm.save(baz)

// delete rows from Foo where id = 1
orm.delete(Foo, {
  where: {
    clause: 'id = 1'
  }
})

// count rows of Foo where id < 5
orm.countWhere(Foo, {
  where: {
    clause: 'id < 5'
  }
})

// or you can do a more advanced count
orm.aggregateSelect<[foo: string, count: number]>(Foo, {
  select: {
    clause: 'foo, COUNT(baz)'
  },
  group: {
    cols: ['foo']
  }
})
```

Objects are converted to JSON before saving, and parsed when read. If its a class instance then the class should be registered by @registerJsonSerializable()

You can access the database instance directly by orm.db. If you are using an existing database and it contains JSON objects, enable jsonCompatMode in options.

```js
import { registerJsonSerializable } from 'https://deno.land/x/deno_sqlite_orm@1.1.1/mod.ts';

// the property "ignored" will be ignored and not saved
@registerJsonSerializable(['ignored'])
class Bar {
  public foo = 'bar'
  public ignored = ''
}

@orm.model()
class Foo extends SqlTable {
  // type is automatically inferred as json
  bar: Record<string, any> = {}
  baz: Bar = new Bar()
}
```

Example

```js
import { SqliteOrm, SqlTable } from "https://deno.land/x/deno_sqlite_orm@1.1.1/mod.ts";

const orm = new SqliteOrm({
  dbPath: "orm.db",
  jsonCompatMode: true,
  // backupDir: ".",
});
// orm.db.exec("DROP TABLE IF EXISTS Info");

@orm.model()
class Info extends SqlTable {
  
  @orm.autoIncrement(true)
  @orm.column({type:"integer"})
  public id = 0;

  // @orm.primaryKey()
  @orm.column({type:"string"})
  public key = "";
  
  @orm.columnType("string")
  public value = "";

  @orm.ignoreColumn()
  public ignore = "";

  clone(): Info {
    const obj = new Info();
    obj.key  = this.key;
    obj.value = this.value;
    obj.ignore = this.ignore;
    return obj;
  }
}

const list_table = "SELECT tbl_name, sql FROM sqlite_master WHERE type = 'table'";
console.log(orm.db.prepare(list_table).all());

orm.modelsLoaded();
let info = new Info();
info.key = (new Date()).getTime().toString(16);
info.value = new Date().getTime().toString();
info.ignore = "nothing";
orm.save(info); // totalChanges +1
info = info.clone()
info.key += "_dup";
orm.save(info); // totalChanges +1

let count = orm.countWhere(Info, {
  where: { clause: 'key > ?', values:[""] }
})

console.log( orm.findMany( Info, { 
  order: { by:"key", desc: true },
  limit: 10, 
}), {count},);
// console.log( "findone by Id=1", orm.findOne(Info, 1));
console.log( "findOneOptional by Id=1", orm.findOneOptional(Info, 1));

orm.delete( Info, { 
  where: { clause: 'key <= ?', values:["18a1f358f8c"] },
})
const {changes, totalChanges} = orm.db;
console.log( "delete by key", {changes, totalChanges} );
// https://www.sqlite.org/lang_corefunc.html#total_changes
```


### ✔Deno SQLite Module
https://deno.land/x/sqlite
https://deno.land/x/sqlite3
https://www.sqlite.org/schematab.html
https://www.sqlite.org/lang.html
https://www.sqlite.org/lang_expr.html
https://www.sqlite.org/lang_select.html


This is an SQLite module for JavaScript and TypeScript. The wrapper is targeted at Deno and uses a version of SQLite3 compiled to WebAssembly (WASM). This module focuses on correctness, ease of use and performance.

This module guarantees API compatibility according to semantic versioning. Please report any issues you encounter. Note that the master branch might contain new or breaking features. The versioning guarantee applies only to tagged releases.
```js
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("test.db");
db.execute(`
  CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`);

// Run a simple query
for (const name of ["Peter Parker", "Clark Kent", "Bruce Wayne"]) {
  db.query("INSERT INTO people (name) VALUES (?)", [name]);
}

// Print out data in table
for (const [name] of db.query("SELECT name FROM people")) {
  console.log(name);
}

// Close connection
db.close();
```

SQLite 查询字符串中使用两个连续的双引号 "" 来转义表示一个双引号字符。语句中p字符串两边要加单撇号，数值型可以不加单引号。

```js
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import * as path from "https://deno.land/std@0.194.0/path/mod.ts";

const DENO_DIR = Deno.env.get("DENO_DIR") ?? Deno.env.get("DENO") ?? "";
const dep_analysis_cache_v1 = path.join(DENO_DIR, "dep_analysis_cache_v1");
const check_cache_v1 = path.join(DENO_DIR, "check_cache_v1");
const node_analysis_cache_v1 = path.join(DENO_DIR, "node_analysis_cache_v1");

try {
  const stat = Deno.statSync(dep_analysis_cache_v1);
} catch (err) {
  throw err;
}

// Open a database
const db = new DB(dep_analysis_cache_v1);

// db.execute(`
//   CREATE TABLE IF NOT EXISTS people (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT
//   )
// `);

// Print out data in table
const list_table = "SELECT tbl_name, sql FROM sqlite_master WHERE type = 'table'";
const list_info = `SELECT * FROM info WHERE key like '%'`;
const list_infocache = `SELECT * FROM moduleinfocache LIMIT 60,30`;
const list_checkcache = `SELECT * FROM checkcache`;
const list_tsbuildinfo = `SELECT * FROM tsbuildinfo`;
const list_cjsanalysiscache = `SELECT * FROM cjsanalysiscache`;
for (const [spec, type, _hash, _info] of db.query(list_infocache)) {
  console.log({spec, type, _hash });
}

// for (const [name, sql] of db.query(list_table)) {
//   console.log(name, sql);
// }

// Close connection
db.close();
```

Deno info 命令可以打印出模块缓冲目录，它们以统一的 SQLite3 数据库信息管理。每个运行时版本对应一个 info key-value。参考源代码 deno-1.36.1/cli/cache/cache_db.rs

其中，node_analysis_cache_v1 数据库文件 caching node analysis，记录用户项目中用到的 node 模块依赖信息。

dep_analysis_cache_v1 数据库 caching swc dependency analysis：每个模块依赖会产生 moduleinfocache 表中的一条记录：

1. `specifier` 字段是模块的导入地址；
2. `media_type` 文件类型；
3. `source_hash` 源文件 hash 摘要；
4. `module_info` 模块信息，包括模块依赖；

模块标识符会映射到 deps 目录下各个主机缓存目录，目录下包含成对的模块文件以及其 metadata.json 信息文件，信息文件包含 HTTP 响应头记录以及 URL 地址等。文件名前缀为转码后的 Hash 字符串 64 个字符，对应 32 字节的 SHA256 值。这个 Hash 并非直接通过 URL 或者模块文件计算得到，此值也会记录到 deno.lock 文件中。

```json
// "https://deno.land/x/fresh@1.3.1/init.ts",
// "5",
// "2252238238442211957",
{
    "dependencies": [{
        "kind": "Import",
        "is_dynamic": false,
        "leading_comments": [],
        "range": {
            "start": {"line": 0, "character": 0 },
            "end": {"line": 0, "character": 75 }
        },
        "specifier": "./src/dev/deps.ts",
        "specifier_range": {
            "start": {"line": 0, "character": 55 },
            "end": {"line": 0, "character": 74 }
        },
        "import_assertions": "None"
    }, {
        "kind": "Import",
        "is_dynamic": false,
        "leading_comments": [],
        "range": {
            "start": {"line": 1, "character": 0 },
            "end": {"line": 1, "character": 43 }
        },
        "specifier": "./src/dev/error.ts",
        "specifier_range": {
            "start": {"line": 1, "character": 22 },
            "end": {"line": 1, "character": 42 }
        },
        "import_assertions": "None"
    }, {
        "kind": "Import",
        "is_dynamic": false,
        "leading_comments": [],
        "range": {
            "start": {"line": 2, "character": 0 },
            "end": {"line": 2, "character": 75 }
        },
        "specifier": "./src/dev/mod.ts",
        "specifier_range": {
            "start": {"line": 2, "character": 56 },
            "end": {"line": 2, "character": 74 }
        },
        "import_assertions": "None"
    }, {
        "kind": "Import",
        "is_dynamic": false,
        "leading_comments": [],
        "range": {
            "start": {"line": 3, "character": 0 },
            "end": {"line": 7, "character": 30 }
        },
        "specifier": "./src/dev/imports.ts",
        "specifier_range": {
            "start": {"line": 7, "character": 7 },
            "end": {"line": 7, "character": 29 }
        },
        "import_assertions": "None"
    }]
}
```

```sql
CREATE TABLE sqlite_schema(
  type text,
  name text,
  tbl_name text,
  rootpage integer,
  sql text
);

-- dep_analysis_cache_v1
info CREATE TABLE info (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
-- [ [ "CLI_VERSION", "1.36.1" ] ] 

moduleinfocache CREATE TABLE moduleinfocache (
      specifier TEXT PRIMARY KEY,
      media_type TEXT NOT NULL,
      source_hash TEXT NOT NULL,
      module_info TEXT NOT NULL
    )

-- node_analysis_cache_v1
info CREATE TABLE info (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
cjsanalysiscache CREATE TABLE cjsanalysiscache (
      specifier TEXT PRIMARY KEY,
      source_hash TEXT NOT NULL,
      data TEXT NOT NULL
    )

-- check_cache_v1
info CREATE TABLE info (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
checkcache CREATE TABLE checkcache (
      check_hash TEXT PRIMARY KEY
    )
tsbuildinfo CREATE TABLE tsbuildinfo (
      specifier TEXT PRIMARY KEY,
      text TEXT NOT NULL
    ) 
```


### ✔Deno KV: Key/Value Database
https://examples.deno.land/kv
Deno KV is a key/value database built in to the Deno runtime, and works with zero configuration on Deno Deploy. It's great for use cases that require fast reads and don't require the query flexibility of a SQL database.
```js
/// <reference lib="deno.unstable" />

const kv = await Deno.openKv();

enum Rank {
  Bronze,
  Silver,
  Gold,
}

interface Player {
  username: string;
  rank: Rank;
}

const player1: Player = { username: "carlos", rank: Rank.Bronze };
const player2: Player = { username: "briana", rank: Rank.Silver };
const player3: Player = { username: "alice", rank: Rank.Bronze };

await kv.set(["players", player1.username], player1);
await kv.set(["players", player2.username], player2);
await kv.set(["players", player3.username], player3);

player3.rank = Rank.Gold;
await kv.set(["players", player3.username], player3);

const record = await kv.get(["players", "alice"]);
const alice: Player = record.value as Player;
console.log(record.key, record.versionstamp, alice);

const [record1, record2] = await kv.getMany([
  ["players", "carlos"],
  ["players", "briana"],
]);
console.log(record1, record2);

const records = await kv.list({ prefix: ["players"] });
const players = [];
for await (const res of records) {
  players.push(res.value as Player);
}
console.log(players);

await kv.delete(["players", "carlos"]);

const aliceScoreKey = ["scores", "alice"];
await kv.set(aliceScoreKey, new Deno.KvU64(0n));

await kv.atomic()
  .mutate({
    type: "sum",
    key: aliceScoreKey,
    value: new Deno.KvU64(10n),
  })
  .commit();
const newScore = (await kv.get<Deno.KvU64>(aliceScoreKey)).value;
console.log("Alice's new score is: ", newScore);
```

### ✔Generating & Validating UUIDs
https://examples.deno.land/uuids
UUIDs (universally unique identifier) can be used to uniquely identify some object or data.
Generators and validators for UUIDs for versions v1, v3, v4 and v5.
Consider using the web platform crypto.randomUUID for v4 UUIDs instead.
Based on https://github.com/kelektiv/node-uuid -> https://www.ietf.org/rfc/rfc4122.txt
Support for RFC4122 version 1, 3, 4, and 5 UUIDs
```js
const myUUID = crypto.randomUUID();
console.log("Random UUID:", myUUID);

import * as uuid from "https://deno.land/std@0.194.0/uuid/mod.ts";

console.log(uuid.validate("not a UUID")); // false
console.log(uuid.validate("6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b")); // true

console.log({uuid: uuid.v1.generate(), webuuid: crypto.randomUUID()});

const NAMESPACE_URL = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const data = new TextEncoder().encode("deno.land");
console.log(await uuid.v5.generate(NAMESPACE_URL, data));
```


### ✔Hasing
https://examples.deno.land/hashing
```js
const message = "The easiest, most secure JavaScript runtime.";

const messageBuffer = new TextEncoder().encode(message);

const hashBuffer = await crypto.subtle.digest("SHA-256", messageBuffer);

import { toHashString } from "https://deno.land/std@0.194.0/crypto/to_hash_string.ts";
const hash = toHashString(hashBuffer);
console.log(hash);



import { crypto } from "https://deno.land/std@0.194.0/crypto/mod.ts";
const file = await Deno.open("example.txt", { read: true });

const readableStream = file.readable;

const fileHashBuffer = await crypto.subtle.digest("SHA-256", readableStream);

const fileHash = toHashString(fileHashBuffer);
console.log(fileHash);
```


### ✔Web Assembly
https://examples.deno.land/webassembly
```js
const bytes = new Uint8Array([
  0,97,115,109,1,0,0,0,1,7,1,96,2,
  127,127,1,127,2,1,0,3,2,1,0,4,1,
  0,5,1,0,6,1,0,7,7,1,3,97,100,100,
  0,0,9,1,0,10,10,1,8,0,32,0,32,1,
  106,15,11,11,1,0,
]);

interface WebAssemblyExports {
  add(a: number, b: number): number;
}

const exports = await WebAssembly.instantiate(bytes);

const functions = exports.instance.exports as unknown as WebAssemblyExports;

console.log(functions.add(1, 2)); // 3
```



## ⚡ License Filter

世界上流行的开源许可证大概有 6 种，在这些许可证之中做选择，也已经是复杂的事，但可以通过 5 个问题简单化处理：

    他人修改软件后可以闭源吗？
    ├── YES！每一个改动是否必需放置版权声明？
    │    ├── Yes！ 👉 Apache License
    │    └──  No！衍生软件的广告是否可以用自己的署名？
    │         ├── Yes！ 👉 MIT License
    │         └──  No！ 👉 BSD License
    └── NO！新增代码采用同样许可证吗？
         ├── Yes！ 👉 GLP License
         └──  NO！是否需要对源代码的改动提供文档？
              ├── Yes！ 👉 Mozilla License
              └──  No！ 👉 LGPL License

以下是源自乌克兰程序员 Paul Bagwell 制作的许可证筛选流程图，只用两分钟，你就能搞清楚这六种许可证之间的最大区别。

![许可证筛选流程图](http://www.ruanyifeng.com/blogimg/asset/201105/free_software_licenses.png)



# 🚩 V8 - JavaScript Engine
- Python V8 https://github.com/emmetio/pyv8-binaries
- V8 Tutorials https://github.com/ruby0x1/v8-tutorials
- V8 Git repository https://github.com/v8/v8
- V8.dev Documentation https://v8.dev/docs
- v8.dev Git repository https://github.com/v8/v8.dev
- V8 API Documentation http://v8docs.nodesource.com/
- Performance Tips for JavaScript in V8 https://www.html5rocks.com/en/tutorials/speed/v8/
- A tour of V8: object representation https://www.jayconrod.com/posts/52/a-tour-of-v8--object-representation
- 浏览器是如何工作的：Chrome V8让你更懂JavaScript https://segmentfault.com/a/1190000037435824
- Hermes - JavaScript engine https://reactnative.dev/docs/hermes
- Douglas Crockford https://www.crockford.com/books.html

开源主流 JavaScript 引擎：

- Google V8 应该是目前地球上最高技术水准的 JS 引擎了。
- SpiderMonkey https://spidermonkey.dev/ Mozilla 开发的强大的 JavaScript & WebAssembly Engine，应用广泛，C++ 和 Rust 实现。
- QuickJS https://bellard.org/quickjs/ 是 Fabrice Bellard 大神的作品即 Qemu/TinyCC/FFmpeg 作者，它小巧易用，1-2MB，便于嵌入式开发的引擎。
- Hermes https://hermesengine.dev, Facebook 为 Android 平台上优化 React Native 而生。
- DukTape https://duktape.org 小巧，内存占用小，可方便集成到其它模块中。
- XS https://www.moddable.com 用于 IoT 微控制器 microcontroller 嵌入式低端设备的 JS 引擎。
- MuJS https://mujs.com 和 DukTape 类似，轻量级的，可方便集成到其它模块中的 JS 解释器。
- JerryScript https://jerryscript.net 也是用于 IoT 设备的 JS 引擎

V8 实现 ECMAScript 和 WebAssembly，运行于 Windows 7+，macOS 10.12+, Linux 等操作系统，可以运行于 x64, IA-32, ARM 等 CPU 架构，并被广泛移植到其它平台之上，包括 MIPS, ppcle64, s390x 等。

V8 可以独立运行，但更常见的是嵌入到 C++ 程序系统内部使用，同时，也有多种语言的绑定库，可以从 Rust、Python 等等众多语言中调用 V8 C++ API。

V8 编译并执行 JavaScript 源代码，处理对象的堆内存分配，garbage collects 机制收集不再需要的对象。V8 的 stop-the-world, generational, 准确的垃圾收集器是 V8 的性能的关键之一。

V8 是个大工程，想要 Building V8 from source 可不是一件轻松的事，就算配置好编译环境，也需要 30 分钟以上的编译时间。

克隆 V8 代码仓库就大于 1GB，当然主要是历史版本，当前 V8 9.2.99 文件数 13k，123MB。除了官方网站，Nodejs 的源代码中也包含 V8 源代码。

不要仅仅 git clone 代码库，仅仅下载 V8 源码是无法编译成功的，必须使用 depot_tools 工具包提供的工具。里面包含 gclient、gcl、gn 和 ninja 等工具，其中 gclient 工具利用 svn 和 git 获取代码。

将获取 V8 代码到到 v8 目录：

    fetch v8

depot fetch 会自动处理依赖，要更新执行：

    git pull origin
    gclient sync

要获取所有分支，配置 .git/config 文件：

    fetch = +refs/branch-heads/*:refs/remotes/branch-heads/*
    fetch = +refs/tags/*:refs/tags/*

如果更新失败，禁用自动更新，在 update_depot_tools.bat 里加入：

    :: MODIFY: Disable automatic update!
    set DEPOT_TOOLS_UPDATE=0
    set DEPOT_TOOLS_WIN_TOOLCHAIN=0

进入 V8 目录，v8gen 生成 ninja 构建文件：

    tools/dev/v8gen.py x64.release

编译源码，生成可执行文件，目标系统 x64：

    ninja -C out.gn/x64.release

编译完的文件名不是 V8，而是 D8，Debug for V8。

运行测试（非必需）：

    tools/run-tests.py --gn

有个观点：V8 不是用来学的，因为它存在的目的就是为了最高性能，里面用了大量的奇巧淫技，比如说把浮点数转化成字符串的 Grisus3 算法。V8 对于很多前端同学都是黑盒，如果要理解每一个 API 设计意图，无疑是自找没趣。


## ⚡ Rust V8 JavaScript bindings
- Deno Core Crate https://crates.io/crates/deno_core
- V8 JavaScript bindings for Rust https://github.com/denoland/rusty_v8
- V8 API Reference Guide https://v8.github.io/api/head/
- V8 API Reference Guide for Node.js https://v8docs.nodesource.com/node-16.0/index.html
- git clone git@github.com:denoland/rusty_v8

Deno 团队实现了 V8 bindings for Rust，通过 Rust 就可以调用 V8 C++ API。

Deno Core 中依赖的主要是 Rusty V8 Binding，即编译 rust-v8 项目得到的 libdeno 库，它向 Deno Core 提供了 V8 C++ API。

Deno 团队开发的 rust-v8 目标有以下几点：

- 提个一个高性能 Rust 绑定到 V8's C++ API，并尽可能匹配原有的 API。
- 不引入额外的调用负担，比如，之前尝试 rust-v8 绑定时强制使用持久句柄。
- 不依赖 Cargo 外部编译的 libv8.a，整个 V8 项目超过 60 万行 C++ 代码，编译过程耗时超过 30 分钟，Deno 提供了各个平台的预编译文件。
- 发布在 crates.io 并且提供为 docs.rs 自动生成的文档，由于 V8 项目非常复杂，这需要优化才能满足 Crate 发布要求的 10MiB 以下。

克隆 rusty_v8 源代码，项目的 examples 目录下有几个示范程序，安装 Rust 开发环境后，可以执行以下命令尝试编译、运行演示程序：

    cargo run --example hello_world

研究 V8 需要了解一些基本概念：

- `Snapshots` 快照是 V8 引入的一种提升引擎启动效率的运行策略，它也是运行 JavaScript 代码的环境的内存映像。
- `Isolate` 表示一个独立的 V8 虚拟机，拥有自己独立的堆和栈，故取名为沙箱
- `Handle` 是指向对象的指针，主要作用为垃圾回收机制使用。指针在 V8 中分为持久化、本地化两种，对应在 Heap、Stack 内部。
- `HandleScope` 用来批量处理 Handle，Scope 是集合含义，无需逐个释放 handle，直接释放整个 Scope 即可以回收内存。
- `Context` 执行上下文对象是脚本运行过程中的环境，上下文可以在同一个 V8 虚拟机中隔离运行不同的脚本，互不影响。
- `ContextScope` 对应 V8 C++ 的 Context::Scope，分配在 Stack 内存中，多个运行于本地作用或的执行上下文的集合。

注意，持久化 handle 需要显式的调用 Dispose() 来通知垃圾回收机制进行处理。

V8 数据类型也是复杂的知识点，C++ 与 JavaScript 数据类型差别巨大，V8 用 Data 作为基类，Value 子类的和个继承类代表脚本中的各种类型。

Data 类只定义了一个私有的 Data() 构造器，子类 Value 提供基本的类型判断方法，如 isSet, isMap, isTrue, isNull, isUndefined 等。

然后是原始值类型，Primitive 和 Object 的各种子类，分别对应了 JavaScript 的原始值类型和复杂对象类型：

- class `External` : `Value`
- class `Primitive` : `Value`
    - class `BigInt` : `Primitive`
    - class `Boolean` : `Primitive`
    - class `Name` : `Primitive`
    - class `Number` : `Primitive`
        - class `Integer` : `Number`
            - class `Int32` : `Integer`
            - class `Uint32` : `Integer`
- class `Object` : `Value`
    - class `Array` : `Object`
    - class `Map` : `Object`
    - class `Set` : `Object`
    - class `Function` : `Object`
    - class `Promise` : `Object`
    - class `Resolver` : `Object`
    - class `Proxy` : `Object`
    - class `WasmModuleObject` : `Object`
    - class `ArrayBuffer` : `Object`
    - class `ArrayBufferView` : `Object`
    - class `SharedArrayBuffer` : `Object`
    - class `Date` : `Object`
    - class `NumberObject` : `Object`
    - class `BigIntObject` : `Object`
    - class `BooleanObject` : `Object`
    - class `StringObject` : `Object`
    - class `SymbolObject` : `Object`
    - class `RegExp` : `Object`
    - class `FinalizationGroup` : `Object`

其中，`FinalizationGroup` 用来执行清理回调，是个实验性质的 API。`External` 类型用来来包装含有 C++ void* 指定的 JavaScript 值，主要用来关联 C++ 数据结构与 JavaScript 对象。

使用 V8 引擎的应用程序的基本流程：

- 创建 HandleScope；
- 创建持久化的 Context；
- 创建 ContextScope；
- 将脚本代码放入 Context Scope；
- 创建 Script 对象并执行 Script::Compile()；
- 执行 script.run() 解析脚本；
- 然后，获取处理结果；
- 最后，记得主动调用 Dispose() 方法释放上下文资源。

当然，这里省略了如何向脚本暴露 API，如何在脚本中进行互调。

V8 源代码中提供了两个示范程序：

- shell.cc 演示实现一个与 V8 交互运行脚本的程序。
- process.cc 演示如下处理 HTTP Request。

Deno 团队实现的 V8 JavaScript bindings for Rust 也提供同样功能的示范程序。

以下是 Deno Core 提供的 hello_world.rs 示范，在 Deno 项目源代码 core 子目录下。

```js
use rusty_v8 as v8;

fn main() {
  // Initialize V8.
  let platform = v8::new_default_platform().unwrap();
  v8::V8::initialize_platform(platform);
  v8::V8::initialize();

  {
    // Create a new Isolate and make it the current one.
    let isolate = &mut v8::Isolate::new(v8::CreateParams::default());

    // Create a stack-allocated handle scope.
    let handle_scope = &mut v8::HandleScope::new(isolate);

    // Create a new context.
    let context = v8::Context::new(handle_scope);

    // Enter the context for compiling and running the hello world script.
    let scope = &mut v8::ContextScope::new(handle_scope, context);

    // Create a string containing the JavaScript source code.
    let code = v8::String::new(scope, "'Hello' + ' World!'").unwrap();

    // Compile the source code.
    let script = v8::Script::compile(scope, code, None).unwrap();
    // Run the script to get the result.
    let result = script.run(scope).unwrap();

    // Convert the result to a string and print it.
    let result = result.to_string(scope).unwrap();
    println!("{}", result.to_rust_string_lossy(scope));

    // Use the JavaScript API to generate a WebAssembly module.
    //
    // |bytes| contains the binary format for the following module:
    //
    //     (func (export "add") (param i32 i32) (result i32)
    //       get_local 0
    //       get_local 1
    //       i32.add)
    //
    let c_source = r#"
          let bytes = new Uint8Array([
            0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x07, 0x01,
            0x60, 0x02, 0x7f, 0x7f, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x07,
            0x07, 0x01, 0x03, 0x61, 0x64, 0x64, 0x00, 0x00, 0x0a, 0x09, 0x01,
            0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6a, 0x0b
          ]);
          let module = new WebAssembly.Module(bytes);
          let instance = new WebAssembly.Instance(module);
          instance.exports.add(3, 4);
        "#;
    // Create a string containing the JavaScript source code.
    let source = v8::String::new(scope, c_source).unwrap();

    // Compile the source code.
    let script = v8::Script::compile(scope, source, None).unwrap();

    // Run the script to get the result.
    let result = script.run(scope).unwrap();

    // Print the result.
    let result = result.to_uint32(scope).unwrap();
    println!("3 + 4 = {}", result.value());
  }

  unsafe {
    v8::V8::dispose();
  }
  v8::V8::shutdown_platform();
}
```


## ⚡ Startup Snapshot
- RFC: speeding up Node.js startup using V8 snapshot #17058 https://github.com/nodejs/node/issues/17058
- Custom startup snapshots  https://v8.dev/blog/custom-startup-snapshots

快照技术是一种广泛用于虚拟机提速的技术，原理是通过直接加载内存映像来跳过那些重复执行的代码。

V8 系统内，Context 作为 JavaScript 的运行环境，必须提供的许多内置函数和库。 例如，数据库可以运行 Math.PI，还有其它一堆的全局对象，每次运行时都具有相同状态初始化化配置，从硬盘读取再初始化到堆内存中。

如果每次启动虚拟机都在重复执行这些同样的初始化代码，无疑是重复浪费，也非常耗时并影响运行时性能。为了解决这这种频繁的重复工作，V8 提出快照机制，将 Context 初始化后的堆内存环境序列化存储到本地磁盘的快照文件中，在下次需要初始化 Context 时直接加载快照文件，将数据反序列化到堆中，实现快速还原运行环境的恢复，大幅提升了虚拟机的启动效率。

可以使用 v8::V8::CreateSnapshotDataBlob 创建一个快照映像，也可以使用 v8::Isolate::CreateParams 配置一个 Isolate，以获取自定义快照。




## ⚡ Embedding Deno
- https://crates.io/crates/deno_core
- https://deno.land/manual@v1.9.2/embedding_deno
- V8 bindings for Deno CLI https://github.com/denoland/rusty_v8

这里的 Embedding 并非和 MCU 嵌入式硬件环境开发同一概念，Rust 支持 MCU 环境嵌入式的系统开发，而这里 Deno 嵌入就是指嵌入 Deno Core 到你的软件中，以提供调用 V8 脚本解析引擎运行脚本的能力。

Deno 由多个组成部分，其中 Deno Core 作为一个 Rust Crate 发布，你可以将它嵌入到自己的程序中，以获取 Rusty-V8 提供的 V8 C++ API 调用能力，和 JsRuntime 等核心功能。将一个 JavaScript runtime 嵌入到你的软件系统中，Deno 就是基于 deno_core 开发的应用系统。

参考 Deno Core 部分内容。


## ⚡ Deno Core 源代码逻辑
- ASCII diagrams https://asciiflow.com/#/
- Deno Core Crate https://crates.io/crates/deno_core
- Super fast javascript / typescript compiler https://swc.rs
- SWC - Speedy web compiler https://crates.io/crates/swc
- Using cli (swc) https://swc.rs/docs/usage-swc-cli
- V8 JavaScript bindings for Rust https://github.com/denoland/rusty_v8
- git clone git@github.com:denoland/rusty_v8
- JavaScript 运行机制详解：再谈 Event Loop http://www.ruanyifeng.com/blog/2014/10/event-loop.html
- JavaScript 中的 Event Loop - Jake Archibald https://www.bilibili.com/video/BV1E441197g5
- The Node.js Event Loop, Timers, and process.nextTick() https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
- The Internals of Deno https://choubey.gitbook.io/internals-of-deno/

> 研究一个优秀的开发框架是学习一门计算机语言的最好方式！并且这个过程会让你清楚是否真的喜欢 Rust 语言，以及它的周边环境。

Deno 整个系统架构有多个组成部分，以 Deno 1.8.1 为例，大体可以划分为：

- 使用 JavaScript/TypeScript 前端语言开发应用；
- 使用 Rust 语言开发底层架构，实现 V8 Binding for Rust，为 Node 提供 JsRumtime 接口。
- 实现底层的 Deno Core，这部分是础石，为 Deno 整个架构提供基础支持。

可以看到 Cargo.toml 项目配置的对应软件包依赖关系：

    - Deno CLI
        - Deno Core (JsRuntime)
            - Rusty-V8
        - Deno Runtime
            - js(bootstrap)
            - ops
            - op_crate
                - crypto
                - fetch
                - web
                - webgpu
                - websocket

    +------------+     +---------------+     +---------------+
    |            +-----> Deno Core     +----->  Rusty-V8     |
    | JavaScript |     | Deno Runtime  |     |               |
    |            |     | Tokio         |     |   V8 C++ API  |
    |            <-----+ Deno CLI      <-----+               |
    +------------+     +---------------+     +---------------+

TypeScript 脚本编译器采用 SWC - Speedy web compiler，而不是微软官方的 tsc。脚本解析器还是当前最流行的 Google V8 引擎，Deno 核心团队提供了 rust_v8 绑定，通过它可以调用 V8 C++ API，这也是 Deno Core 的主要依赖。

Deno Core 为 Deno's command-line interface (Deno CLI) 提供 V8 C++ API 绑定，即抽象概念为 JsRuntime，提供了 JavaScript 脚本的解析运行支持。

Deno Core 中依赖的主要是 Rusty V8 Binding，即编译 rust-v8 项目得到的 libdeno 库，它向 Deno Core 提供了 V8 C++ API。

Deno 团队开发的 rust-v8 目标有以下几点：

- 提个一个高性能 Rust 绑定到 V8's C++ API，并尽可能匹配原有的 API。
- 不引入额外的调用负担，比如，之前尝试 rust-v8 绑定时强制使用持久句柄。
- 不依赖 Cargo 外部编译的 libv8.a，整个 V8 项目超过 60 万行 C++ 代码，编译过程耗时超过 30 分钟，Deno 提供了各个平台的预编译文件。
- 发布在 crates.io 并且提供为 docs.rs 自动生成的文档，由于 V8 项目非常复杂，这需要优化才能满足 Crate 发布要求的 10MiB 以下。

Deno 源代码中提供了一些示范程序，参考 Deno core 模块下的 examples 目录，例程演示了如何使用 Deno Core 暴露的 V8 C++ API。

Deno CLI 主要依赖有三个部分：

- Deno Core，主要是 JsRuntime 抽象概念；
- Deno Runtime，核心包括是事件循环处理；
- Tokio 事件驱动非阻塞异步 I/O 框架；

Deno CLI 主要是通过 Deno Core 提供的 `JsRuntime` 能力，处理事件循环运行脚本代码，跟踪所有挂起的任务，包括异步操作、动态模块加载等。使用 `JsRuntime::run_event_loop` 能去事件循环是用户的责任，它必须在 Rust 后续的执行器，如 tokio、smol 的上下文中执行。

Deno Runtime 有个重要的作用就是，和 Deno Core 的 `JsRuntime` 打通关联，在 ops 目录下定义各种操作接口，与 `JsRuntime` 进行对接，并与脚本环境中暴露的 API 关联起来。那些相对独立的 API 集合，单独放到 op_crates 目录下进行管理。这个 ops 其实就是 operators，这个词有旧式电话网络系统中的接线员的意思，但在这里理解为操作码更合适，类似在汇编语言的层次执行 CPU 指令的操作码，指的就是脚本运行环境与 V8 Isolate 相互操作的中间层。  

在 Deno Runtime 工程的 js 目录下存放的是所有需要加载到 V8 Isolate 内，执行一些预备工作，如脚本运行环境中的全局符号初始设置。

Deno ops 的设计非常好，它是连通脚本与 `JsRuntime` 到 V8 C++ API 的桥梁。相当于通过一个插件机制，注册一个操作，脚本就具有调用这个操作的能力。借助 ops 注册机制的设计，Rust 可以很方便地拓展 Deno 脚本环境调用 native 的能力。在实例化 `JsRuntime` 时，主要的工作是匹配 V8 Isolate 沙箱，然后还有 ops 的配置。

以下是 ops 相关的类型定义：

- 每个操作用 `Op` 枚举类型表示，对应有四类操作；
- 每个操作具体的执行的函数类型定义为 `OpFn`，它接收一个 `OpState`，和对应的 BufVec 数据缓存向量；
- `OpTable` 对象保存注册过的 `Op`，是一个固定顺序的索引 Hash Table，提个高效的迭代能力。
- `OpState` 对象为 `JsRuntime` 记录一组操作状态信息对象；

```rust
pub type OpFn = dyn Fn(Rc<RefCell<OpState>>, BufVec) -> Op + 'static;

/// Collection for storing registered ops. The special 'get_op_catalog'
/// op with OpId `0` is automatically added when the OpTable is created.
pub struct OpTable(IndexMap<String, Rc<OpFn>>);

pub enum Op {
  Sync(Box<[u8]>),
  Async(OpAsyncFuture),
  /// AsyncUnref is the variation of Async, which doesn't block the program
  /// exiting.
  AsyncUnref(OpAsyncFuture),
  NotFound,
}

pub struct OpState {
  pub resource_table: ResourceTable,
  pub op_table: OpTable,
  pub get_error_class_fn: GetErrorClassFn,
  gotham_state: GothamState,
}
```

Rust Code 和 Rust Runtime 中提供的 ops API 功能如下：

- JsRuntime 提供 `register_op` 注册函数，并将注册的 `OpFn` 记录到 `OpTable`，并返回表示索引号的 `OpId`，就是 usize 类型数据。
- JsRuntime 提供 `json_op_async`、`json_op_sync` 两种基本的异步、同步操作，使用 JSON 传递数据。
- 注册函数经 Deno Runtime 包装成 `reg_json_async`、`reg_json_sync`，分别用来注册两种基本操作。

Deno CLI 中提供的 ops 模块包装了 JsRuntime 的 `reg_json_async` 方法。并在这个模块初始化时，注册三个基本的操作，分别是脚本地图信息、脚本诊断信息的处理。还有一个异步的 `op_emit` 操作，它是提供运行时编译功能的，当脚本代码中调用 `Deno.emit` 函数时就会执行这个操作，在运行时编译指定的 TypeScript 模块。

```js
// ops/errors.rs
reg_json_sync(rt, "op_apply_source_map", op_apply_source_map);
reg_json_sync(rt, "op_format_diagnostic", op_format_diagnostic);

// ops/runtime_compiler.rs
reg_json_async(rt, "op_emit", op_emit);
```

Deno Core 内部暴露的接口只有 `recv` 和 `send` 两个方法，core\bindings.rs 文件将它们绑定到 Rusty_v8。通过注册操作，将 Rust 函数绑定到 JavaScript，然后通过 JsRuntime 的派发函数 `Deno.core.dispatch()` 触发一个 `send` 实现对脚本动作的响应。用户，即 Deno Core 的使用方，也就是 Deno Runtime 负责将 request 或 response 编码为 Uint8Array 数据对象。

基于 Deno Core 之上的 Deno CLI 既是脚本的运行环境，又是命令行工具，它是开发者需要直接使用的工具之一。

所以，在执行 Deno 程序时，运行入口就在 Deno CLI：

- 首先，加载 Deno CLI 主程序 /cli/main.rs；
- 通过 clap.rs 解析命令参数，另外，flags 模块包含子命令枚举类型，和各种参数选项定义；
- 确定要执行的子命令 `DenoSubcommand` 并且调用相应的方法，如 `run_command` 执行脚本程序；
- 解析模块依赖，然后开始调用 Deno Runtime 和 Deno Core 提供的功能；
    - 创建全局状态实例 `ProgramState`，代表一个 Deno 程序实例状态，在多个 worker 间共享；
    - 创建权限管理实例 `Permissions`；
    - 实例化 `MainWorker`，它关联 JsRuntime 实例来执行脚本，相当于 V8 Isolate 实例，一个独立的上下文环境；
        - 进入 Deno Code 执行 `v8_init` 方法初始化 V8 引擎设置；
        - 用前面创建的 ProgramState, Module, Permissions，并用它们去初始化 V8 的上下文对象 Context。
        - 创建 `ContextScope` 并绑定注册过的操作，
        - 执行 `js_init` 方法执行 Deno Code 初始化脚本；
    - 创建 Worker 实例后，再继续注册各个 Ops，包括 op_crates 目录下的各个 Ops 模块；
    - 为 JsRuntime 中的 `op_state.resource_table` 配置好 I/O；
- 完成 Worker 实例化，JsRuntime 也配置完毕，



当然，Deno 执行过程并不像以上说的这么简单，这只是一个基本执行流程，主要目的是为了阅读源代码时把握主线，避免陷入代码丛林不知归途。

除了以上涉及的主要依赖，Deno 项目中还使用了以下这此非常有用的工具模块：

- URL library for Rust https://crates.io/crates/url
- CLAP - Command Line Argument Parser for Rust https://crates.io/crates/clap
- Futures - Zero-cost asynchronous programming in Rust https://crates.io/crates/futures_core
- IndexMap - A hash table with consistent order and fast iteration https://crates.io/crates/IndexMap
- Serde JSON - serializing and deserializing Rust data structures https://crates.io/crates/serde_json


## ⚡ Deno Core 示例程序
- Deno Core API https://docs.rs/deno_core/0.86.0/deno_core/
- Getting started with Rust https://www.rust-lang.org/learn/get-started

Deno Core 中的 examples 目录提供了简单的示范程序，演示如何在脚本中与注册的各种操作进行交互：

hello_world.rs 演示注 ops，并演示在脚本中如何调用，要点如下：

- 首先，通过 `JsRuntime::new` 创建一个运行时实例；
- 然后，`register_op` 注册 `op_print` 和 `op_sum` 两个操作，实现打印信息到控制台，以及对数组求和；
- 注册操作后，通过 `execute` 执行初始化脚本，其实真正的初始化脚本在 Deno Core 内部，会设置好 Deno.core；
- 演示通过 `Deno.core.dispatchByName` 方法调用注册的 `op_print` 操作。
- 演示通过 `Deno.core.jsonOpSync` 方法调用注册的 `op_sum` 操作。

以上两种调用操作的差别在于脚本执行的方法不同，在 Deno Core 中可以找到 core.js 初始化脚本，这些脚本会在编译时包含到可执行程序中，每次运行程序时就装入到解析器中运行，执行环境初始化，Rust 提供了 `include_str!`、`include_bytes!` 这些宏用来包含文件到可执行文件内：

```js
  /// Executes a JavaScript code to provide Deno.core and error reporting.
  ///
  /// This function can be called during snapshotting.
  fn js_init(&mut self) {
    self
      .execute("deno:core/core.js", include_str!("core.js"))
      .unwrap();
    self
      .execute("deno:core/error.js", include_str!("error.js"))
      .unwrap();
  }
```

这里挑了几个重点，从 Deno Core 内部暴露的接口只有 `recv` 和 `send` 两个方法，其它方法通过 `send` 来请求 API 调用：

```js
  // Available on start due to bindings.
  const core = window.Deno.core;
  const { recv, send } = core;

  // Callers should not call core.recv, use setAsyncHandler.
  function setAsyncHandler(opId, cb) {
    assert(opId != null);
    asyncHandlers[opId] = cb;
  }

  function ops() {
    // op id 0 is a special value to retrieve the map of registered ops.
    const opsMapBytes = send(0);
    const opsMapJson = String.fromCharCode.apply(null, opsMapBytes);
    opsCache = JSON.parse(opsMapJson);
    return { ...opsCache };
  }

  function dispatch(opName, control, ...zeroCopy) {
    return send(opsCache[opName], control, ...zeroCopy);
  }

  async function jsonOpAsync(opName, args = null, ...zeroCopy) {
    setAsyncHandler(opsCache[opName], jsonOpAsyncHandler);

    const promiseId = nextPromiseId++;
    const reqBuf = core.encode("\0".repeat(8) + JSON.stringify(args));
    new DataView(reqBuf.buffer).setBigUint64(0, BigInt(promiseId));
    dispatch(opName, reqBuf, ...zeroCopy);
    let resolve, reject;
    const promise = new Promise((resolve_, reject_) => {
      resolve = resolve_;
      reject = reject_;
    });
    promise.resolve = resolve;
    promise.reject = reject;
    promiseTable[promiseId] = promise;
    return processResponse(await promise);
  }

  function jsonOpSync(opName, args = null, ...zeroCopy) {
    const argsBuf = encodeJson(args);
    const res = dispatch(opName, argsBuf, ...zeroCopy);
    return processResponse(decodeJson(res));
  }

  Object.assign(window.Deno.core, {
    jsonOpAsync,
    jsonOpSync,
    setAsyncHandler,
    dispatch: send,
    dispatchByName: dispatch,
    ops,
    close,
    resources,
    registerErrorClass,
    getErrorClassAndArgs,
    sharedQueueInit: init,
  }
```

另外还有两人示例：

- http_bench_bin_ops.rs 演示调用操作并传递 binary 数据；
- http_bench_json_ops.rs 演示调用操作并传递 json 数据；


这里就不贴代码了，只是需要安装 Rust 编程环境。

在 Linux 或 macOS 上安装 rustup，打开终端并输入如下命令：

    $ curl https://sh.rustup.rs -sSf | sh

在 Windows 上，前往 https://www.rust-lang.org/install.html 并按照说明安装 Rust。

在安装过程的某个步骤，你会收到一个信息说明为什么需要安装 Visual Studio 2013 或更新版本的 C++ build tools。

Visual Studio 或 C++  build tools 必定安装其一，否则不能链接 Rust 程序，建议安装 Visual Studio 2019 社区版。同时，Windows 10 系统需要安装 Windows 10 SDK (10.0.18362.0) 解决 advapi32.lib 这个问题的。


安装 Rust 开发环境后，通过以下命令编译运行 Deno Core 示范程序：

```sh
cargo run --example hello_world
cargo run --example http_bench_bin_ops.rs
cargo run --example http_bench_json_ops.rs
```

由于涉及到 V8 绑定模块，需要不少编译资源，当然已经比真的编译 V8 C++ 源代码省力多了。

编译失败可能发生在 rusty_v8 模块上，也就数它最大块，也最重要，可以尝试清理后再重新编译。

```rust
$ cargo run --example hello_world
   Compiling proc-macro2 v1.0.24
   Compiling unicode-xid v0.2.1
   Compiling syn v1.0.60
   ...
error: failed to run custom build command for `rusty_v8 v0.20.0`

Caused by:
  process did not exit successfully: `/home/deno_src/target/debug/build/rusty_v8-862c183560540251/build-script-build` (exit code: 101)

$ cargo run --example hello_world
   Compiling rusty_v8 v0.20.0
   Compiling deno_core v0.80.2 (/home/deno_src/core)
error: failed to add native library /home/deno_src/target/debug/gn_out/obj/rusty_v8.lib: file too small to be an archive       
...

$ cargo clean --package rusty_v8
failed to run custom build command for `rusty_v8 v0.20.0`

$ cargo run --example hello_world
   Compiling rusty_v8 v0.20.0
   Compiling deno_core v0.80.2 (/home/deno_src/core)
    Finished dev [unoptimized + debuginfo] target(s) in 42.75s
     Running `target/debug/examples/hello_world.exe`
The sum of
1,2,3
is
6
Exception:
Error: invalid type: integer `0`, expected a sequence at line 1 column 1
```


## ⚡ Deno 目录结构与架构
- Deno Architecture https://deno.land/manual@v1.9.2/contributing/architecture
- Deno third_party Prebuilt Binaries https://github.com/denoland/deno_third_party
- Monorepo vs Multirepo https://www.hashicorp.com/blog/terraform-mono-repo-vs-multi-repo-the-great-debate

一般，项目代码仓库的管理有两种方案，Deno 属于 Mono Repos：

- Multiple Source Repositories (Multi Repos) 多个相关项目用多个源代码仓库管理。
- Monolithic Source Repositories (Mono Repos) 多个相关项目用单个源代码仓库管理。

Deno 项目源代码目录结构如下，项目根目录下有一些配置文件和文档：

- .cargo - Rust 项目配置目录。
- .dlint.json - DLint 配置文件，一个动态 JavaScript 代码检测工具。
- .dprintrc.json - dprint 配置文件，一个插件化可配置的代码格式化平台。
- .editorconfig - 编辑器配置文件，Editorconfig 插件用它来设置编辑器的配置。
- .rustfmt.toml - Rust 代码格式化配置。
- Cargo.lock - Rust 项目自动处理的依赖配置文件。
- Cargo.toml - Rust 项目配置清单 manifest，由开发者设置具体参数。
- CODE_OF_CONDUCT.md - 代码行为准则文档。
- git_submodule_status.txt - Git 子模块状态信息文档。
- LICENSE.md - 软件许可证文档，Deno 使用 MIT License。
- README.md - 说明文档，包含 Deno 简介，安装使用方法。
- Releases.md - Deno 发行版本说明。
- docs - Deno 官方网站提供的手册文档。
- third_party - Deno 依赖的第三方模块，如 deno fmt 的实现 dprint，需要另行下载。
- tools - 存放一些 Deno 开发使用到的小工具，包括 WPT - Web Platform Test 等。

Deno 项目是一个多模块单仓库的工程，以下几个目录才是主菜，其中又以 `cli` `core` `runtime` 三个子工程为核心：

- `cli` - Deno CLI 子项目，依赖 Deno Core 和 Deno Runtime 提供 TypesScript 的编译和脚本解析运行能力，编译生成 deno 命令行程序。
- `core` - Deno Core 子项目，是 Deno 整个系统的核心，集成 Rust-V8 绑定，提供 JsRuntime 接口。
- `runtime` - Deno 运行时实现，主要依赖 Tokio 事件驱动非阻塞异步 I/O 框架。
- op_crates - 相对独立的一些运行时操作接口模块，如 websocket, webgpu, fetch 等 API。
- test_plugin - 插件接口测试工程，用 Rust 语言实现一个测试用的插件，并使用脚本进行测试。
- test_util - WPT - Web Platform Test 测试服务器，Rust Cargo 工程，std 目录下包含要测试的 Deno 标准库。

目前 Deno 运行时的脚本部分已经移除 TypeScript，使用 plain JavaScript，即不使用 ES Module 以免增加 V8 Snapshotting 的负担。

参考官方的架构图 [Schematic diagram](https://deno.land/images/schematic_v0.2.png)

    ┌───────────────────────────────────────────────────────────────────────────────────────────┐
    │  ┌─────────────────────────────┐            ┌─────────────────────┐  ===================  │
    │  │ ============                │            │ deno::Isolate(Rust) │  Deno Process (Rust)  │
    │  │ libdeno(C++)  deno_recv_cb  ◄────────────►                     │  ===================  │
    │  │ ============   ▲            │  deno_buf  │                     │  deno 1.7.0 release   │
    │  │                │ deno_send  ◄────────────►                     │  v8 8.9.255.3         │
    │  │                │  ▲         │            └──▲──────────────────┘  typescript 4.1.3     │
    │  │  ┌─────────────│──│──────┐  │               │                                          │
    │  │  │ V8(C++)     │  │      │  │           ops │                    ┌──────────────────┐  │
    │  │  │             │  │      │  │   ┌───────────▼─────────────┐      │ Resourcces(Rust) │  │
    │  │  │  ┌──────────▼──▼────┐ │  │   │ Tokio thread pool(Rust) │      │ ┌──────────────┐ │  │
    │  │  │  │ JsRuntime        │ │  │   │                         │      │ │ stdio        │ │  │
    │  │  │  │                  │ │  │   │ ┌────┐ ┌────┐ ┌────┐    │      │ └──────────────┘ │  │
    │  │  │  │   libdeno.send() │ │  │   │ │    │ │    │ │    │    ◄──────► ┌──────────────┐ │  │
    │  │  │  │   libdeno.recv() │ │  │   │ │ T1 │ │ T2 │ │ T3 │... │      │ │ TCP socket   │ │  │
    │  │  │  │                  │ │  │   │ │    │ │    │ │    │    │      │ └──────────────┘ │  │
    │  │  │  │                  │ │  │   │ │    │ │    │ │    │    │      │ ┌──────────────┐ │  │
    │  │  │  └──────────────────┘ │  │   │ │    │ │    │ │    │    │      │ │ child process│ │  │
    │  │  └───────────────────────┘  │   │ └────┘ └────┘ └────┘    │      │ └──────────────┘ │  │
    │  └─────────────────────────────┘   └─────────────────────────┘      └──────────────────┘  │
    └───────────────────────────────────────────────────────────────────────────────────────────┘

官方的架构图还没更新，Rust 实现的 rusty_v8 已经替换 C++ 实现的 libdeno。

Deno Runtime 里面 js 与 Rust 的交互方法也变更为 Deno.core.send 和 Deno.core.recv 这两个方法。

Deno 的架构与 Linux 系统的模拟：

|            Linux            |          Deno          |
|-----------------------------|------------------------|
| Processes                   | Web Workers            |
| Syscalls                    | Ops                    |
| File descriptors (fd)       | Resource ids (rid)     |
| Scheduler                   | Tokio                  |
| Userland: libc++/glib/boost | https://deno.land/std/ |
| /proc/$$/stat               | Deno.metrics()         |
| man pages                   | deno types             |

Rust 异步框架 Tokio 就像是 Node 的 Libuv 异步 I/O 实现的 Event Loop 事件驱动模型。

Resources 标识简写 rid，是 Deno 中文件描述符的版本，是一个的整数，对应已经打开的 files，sockets 和其它资源。

以下示范通过 Deno.resources() 函数查询资源标识记录：

```js
const file = await Deno.open('out.txt');

console.log(Deno.resources());
// { "0": "stdin", "1": "stdout", "2": "stderr", "3": "fsFile" }
Deno.close(0);
file.close();

console.log(Deno.resources());
// { "1": "stdout", "2": "stderr" }
```

Deno Metrics 是用于各种统计的内部计数器：

    # deno eval console.table(Deno.metrics())
    ┌─────────────────────────┬────────┐
    │          (idx)          │ Values │
    ├─────────────────────────┼────────┤
    │      opsDispatched      │   6    │
    │    opsDispatchedSync    │   0    │
    │   opsDispatchedAsync    │   6    │
    │ opsDispatchedAsyncUnref │   0    │
    │      opsCompleted       │   6    │
    │    opsCompletedSync     │   0    │
    │    opsCompletedAsync    │   6    │
    │ opsCompletedAsyncUnref  │   0    │
    │    bytesSentControl     │  225   │
    │      bytesSentData      │  124   │
    │      bytesReceived      │  103   │
    └─────────────────────────┴────────┘


## ⚡ Tokio - 事件驱动非阻塞异步 I/O
- Tokio home https://tokio.rs/
- git clone git@github.com:tokio-rs/tokio
- Tokio - Event-driven NBIO asynchronous I/O https://crates.io/crates/tokio
- Learning Reactive Programming With Java 8 Nickolay Tsvetinov https://2lib.org/book/2578683/aaec07
- Explore all RxJS operators https://reactive.how/rxjs/
- Interactive diagrams of Rx Observables https://rxmarbles.com
- FRP - Functional Reactive Programming https://www.cnblogs.com/apolis/p/11437688.html
- Taming snakes with reactive streams https://blog.thoughtram.io/rxjs/2017/08/24/taming-snakes-with-reactive-streams.html

> Tokio is an event-driven, non-blocking I/O platform for writing asynchronous applications with the Rust programming language. 

Tokio 是一个 Rust 语言实现的高可靠、异步、非阻塞、事件驱动的小巧的运行库，并且在不影响速度的情况下构建可靠的网络应用。

它可以灵活地针对各种系统，从具有数十个核心的大型服务器到小型嵌入式设备。

基本特性：

- 快速：Tokio 的零成本抽象给你裸机性能。
- 可靠：Tokio 利用 Rust 的所有权、类型系统，和并发模型来减少 bug 并确保线程安全。
- 可伸缩性：Tokio 有一个最小的足迹，并自然地处理回压、撤消，backpressure and cancellation。

概括地讲，Tokio 分成 3 个主要部分：

- A multithreaded, work-stealing based task scheduler.
- A reactor backed by the operating system's event queue (epoll, kqueue, IOCP, etc...).
- Asynchronous TCP and UDP sockets.


网络应用通常都涉及 Flow Control 问题，也是响应式编程 Reactive Programming 常常出现的概念。

比如一个水池，有一个进水管和一个出水管。如果进水管水流更大，过一段时间水池就会满溢。这就是没有进行流量控制导致的结果。

而 Flow Control 有几种思路：

- Backpressure 方式就是自助餐，需要多少取多少。消费者需要多少，生产者就生产多少，消费得少了，就让生产方减产。
- Throttling 节流方式，说白了就是丢弃。消费不过来，就处理其中一部分，剩下的丢弃。
- buffer 和 window，它们是把上游多个小包裹打成大包裹，分发到下游，这样下游需要处理的包裹的个数就减少了。
- Callstack blocking 是一种特殊情况，阻塞住整个调用链。

其实，Backpressure 源自工程上的一个概念，在管道运输中，气流或液流由于管道突然变细、急弯等原因导致由某处出现了下游向上游的逆向压力，这种情况称作「back pressure」。放着水的管道，如果突然关闭，也会产生强大的回压，水锤泵就是利用这个原理产生的。这是一个很直观的词，back pressure 向后的、往回的压力。

在数据流传输过程中，上游生产速度大于下游消费速度，导致下游的 Buffer 溢出，这种现象就叫做 Backpressure 出现。需要强调的是，重点不在于速度差，而在于 Buffer 溢出。Backpressure 和 Buffer 是一对相生共存的概念，只有设置了 Buffer，才有 Backpressure 出现。

Backpressure 处理方案只对 Cold Observable，允许降低速率的发送源。这有点类似于 TCP 里的流量控制，接收方根据自己的接收窗口的设置来控制接收速率，并通过 ACK 回复包来控制发送方的发送速率。比如两台机器传一个文件，速率可大可小，即使降低到每秒几个字节，只要时间足够长，还是能够完成的。反例是直播，速率低于某个值整个功能就没法用了，这种类似于 Hot Observable。

Learning Reactive Programming With Java 8 的作者 Nickolay Tsvetinov 举过类似这样的例子：设想大家都在收看同一套电视节目，这就是 Hot Observable。而各自听磁带音响，这就是 Cold Observable。

> We can say that cold Observables generate notifications for each subscriber and hot
> Observables are always running, broadcasting notifications to all of their subscribers.
> Think of a hot Observable as a radio station. All of the listeners that are listening to
> it at this moment listen to the same song. A cold Observable is a music CD. Many
> people can buy it and listen to it independently.

至于处理哪些和丢弃哪些，就有不同的策略，也就是 sample (or throttleLast)、throttleFirst、debounce (or throttleWithTimeout)这三种。还是举音视频直播的例子，在下游处理不过来的时候，就需要丢弃数据包。


# 🚩 Inner Deno Runtime
- The Internals of Deno https://choubey.gitbook.io/internals-of-deno/

这总要内容聚集于 Deno Runtime 内部初始化脚本的组织，注意，区别 Deno Core 提供的 `JsRuntime` 它是初始化 V8 引擎用来执行脚本的一个环境。而 Deno Runtime 则是向用户脚本应用提供一个运行时环境，比如在脚本中访问 Deno 命名空间的各种对象和方法，而这些方法就是 Deno Runtime 内部初始化脚本设置的一个运行时环境，它们在 Rust 编译 Deno 时就固化到 Deno CLI 程序文件。

理解，Deno Runtime 的内部组织，可以让你在编写应用时胸有成竹。



# 🚩 The Runtime
1. Deno's stable runtime https://doc.deno.land/builtin/stable
2. Deno's unstable runtime https://doc.deno.land/builtin/unstable
3. https://deno.land/manual@v1.36.1/runtime
04. Stable API https://doc.deno.land/builtin/stable
05. Unstable API https://doc.deno.land/builtin/unstable#Deno.CompilerOptions

Deno 运行时分为稳定、不稳定两种。

所符合 Web Platform APIs 规范的接口都可以直接在全局空间中访问。比如 JSON/Fetch API，文档需要参考 mozilla.org 网站，Deno 本身没有提供相关文档。
https://deno.land/manual@v1.36.1/runtime/web_platform_apis

其它接口则需要通过 Deno 命名空间访问，TypeScript 类型定义参考：
https://github.com/denoland/deno/blob/v1.36.1/cli/tsc/dts/lib.deno.ns.d.ts

要使用 Unstable API 就需要通过参数激活：

    deno run --unstable mod_which_uses_unstable_stuff.ts

传入 --unstable 参数的作用：

- 为运行时激活非稳定 API；
- 为 TypeScript 类型检查添加 lib.deno.unstable.d.ts 类型声明，而稳定 API 的类型声明文件是 lib.deno.ns.d.ts。

非稳定 API 是指还未通过安全性审查，not undergone a security review，可能会在随后的版本中破坏性变更。

以下按 Deno 1.7.0 环境展开，Deno 1.9.2 运行失败，引用的第三方模块有问题：

```sh
error: TS2612 [ERROR]: Property 'resolve' will overwrite the base property in 'Deferred<undefined>'. If this is intentional, add an initializer. Otherwise, add a 'declare' modifier or remove the redundant declaration.
    public readonly resolve!: () => void;
#                   ~~~~~~~
    at https://deno.land/x/evt@v1.8.10/tools/Deferred.ts:57:21
```

例如，Runtime compiler APIs 最新的 `Deno.emit` 函数替代了旧的 `Deno.compile` 和 `Deno.bundle`。


The Runtime

01. Stability 
02. Built-in APIs 
03. `import.meta` API 
04. Program Lifecycle 
05. Permission APIs 
06. Web Platform APIs 
07. HTTP Server APIs 
08. KV 
    Operations 
    Transactions 
    Secondary indexes 
    Key Space 
09. Location API 
10. Web Storage API 
11. Workers 
12. Foreign Function Interface 
13. Using WebAssembly 
    Using WebAssembly in Deno 
    Using the Streaming WebAssembly APIs 
    Helpful Resources 

## ⚡ Command Line Interface & shell
- https://deno.land/std@0.93.0/http/file_server.ts
- https://deno.land/std@0.93.0/flags
- https://deno.land/std@0.95.0/path
- https://doc.deno.land/builtin/stable#Deno.chdir
- https://doc.deno.land/builtin/stable#Deno.execPath
- https://doc.deno.land/builtin/stable#Deno.cwd
- https://doc.deno.land/builtin/unstable#Deno.setRaw
- https://deno.land/x/cliffy@v0.19.0
- https://github.com/nodejs/node/blob/v13.13.0/lib/internal/readline/utils.js
- An implementation of the unix "cat" program https://deno.land/manual@v1.9.2/examples/unix_cat

命令行交互需要理解两个基本的概念：

- 基本输入输出；
- 命令行内容解析与控制台内容输出格式；

首先，命令行输入的参数是第一部分输入内容，其次，使用基本输入 stdin 还可以获取控制台的键盘输入。

接下来就是对输入数据的处理，像 inquirer.js 或 commander.js 这些模块比较好地实现了 CLI 交互输入与数据解释。

最后，就是程序的输出，控制台程序接收的数据遵循 ANSI 控制台协议，即除了可显示字符外，还可以通过控制字符对屏幕的光标位置进行定位，在指定位置输出特定内容，也可以指定文件颜色信息。

可以现成的 CLI 命令行交互工具，比如，inquirer 命令行交互工具和 commander 参数解析工具，Deno 平台上有 cliffy。

参考 Cliffy 的示范，读取标准输入的键盘事件，：

```js
#!/usr/bin/env -S deno run --unstable
// https://deno.land/x/cliffy@v0.19.0/examples/keycode/read_key.ts

import { KeyCode, parse } from "https://deno.land/x/cliffy@v0.19.0/keycode/key_code.ts";
import { osType, isWindows } from "https://deno.land/std@0.95.0/_util/os.ts";

async function* keypress(): AsyncGenerator<KeyCode, void> {
  while (true) {
    const data = new Uint8Array(8);
    if(osType==="windows"){
      Deno.setRaw(Deno.stdin.rid, true);
    }else{
      Deno.setRaw(Deno.stdin.rid, true, { cbreak: true });
    }

    const nread = await Deno.stdin.read(data);
    Deno.setRaw(Deno.stdin.rid, false);

    if (nread === null) {
      return;
    }
    
    console.log({buffer: data.slice(0, nread)});
    const keys: Array<KeyCode> = parse(data.subarray(0, nread));

    for (const key of keys) {
      yield key;
    }
  }
}

console.log("Hit ctrl + d to exit.");

for await (const key of keypress()) {
  if (key.ctrl && key.name === "d") {
    console.log("exit");
    break;
  }
  console.log(key);
}
```

通过标准输入读取用户的键盘事件，通常需要将 TTY 从 canonical mode 设置为 raw mode，这样会禁止规范模式下对输入数据的额外操作，原样传递到应用程序中处理。

Raw mode 最直接的影响就是不会回显用户的输入，同时每次按键都可以触发异步读取的返回，Ctrl+C 不会触发中断信号。这样可以直接与用户的按键行为交互，而不用等到用户输入回车才处理。 

在 Unix 类系统可以使用 cbreak 选项，即使在 raw mode 也默认使用 Ctrl+C 触发中断程序信号，但是当前在 Windows 系统上不支持。

```js
Deno.setRaw(Deno.stdin.rid, true, { cbreak: true });
```

通过监视原始数据，可以了解键盘事件中按键状态与代码关系：

- 65 - 90 表示 A-Z
- 97 - 122 表示 a-z；
- \x01 - \x19 即对应的十六进制代码表示 Ctrl+a - Ctrl+z；

在 Windows 系统上，Ctrl 按下，就检测不到 Shift 的状态，而且 Alt、Esc 和 其它功能键总检测不到状态。

在 Linux 系统上，TTY 子系统的支持比较完善，但是 Alt 按键会导致 Ctrl 或 Shift 状态失效，Ctrl 按键会导致 Shift 状态失效，其它功能键支持都比较完整。

例如，Ctrl+a 只有一个字节的代码，而 Alt+a 与 Alt+Shift+a，输入缓存区会读取到两个字节，前面一个是 ESC 转义符号，后面是按键：

```js
{ buffer: Uint8Array(1) [ 1 ] }
{ name: "a", sequence: "\x01", code: undefined, ctrl: true, meta: false, shift: false }
{ buffer: Uint8Array(2) [ 27, 97 ] }
{ name: "a", sequence: "\x1ba", code: undefined, ctrl: false, meta: true, shift: false }
{ buffer: Uint8Array(2) [ 27, 65 ] }
{ name: "a", sequence: "\x1bA", code: undefined, ctrl: false, meta: true, shift: true }
```

是否按下 Shift 可以通过字符的大小写范围判断，而 Ctrl 与 Alt 可以通过是否使用了转义符号判断。

但是，转义符只有和字符一起出现才能判断为 Alt 按下，如果是其它功能键，则有更复杂的组合，例如，Home 功能键与 Ctrl/Shift/Alt 组合的不同代码：

```js
// Home
{ buffer: Uint8Array(3) [ 27, 91, 72 ] }
{ name: "home", sequence: "\x1b[H", code: "[H", ctrl: false, meta: false, shift: false }
// Ctrl+Home
{ buffer: Uint8Array(6) [ 27, 91, 49, 59, 53, 72 ] }
{ name: "home", sequence: "\x1b[1;5H", code: "[H", ctrl: true, meta: false, shift: false }
// Shift+Home
{ buffer: Uint8Array(6) [ 27, 91, 49, 59, 50, 72 ] }
{ name: "home", sequence: "\x1b[1;2H", code: "[H", ctrl: false, meta: false, shift: true }
// Alt+Home
{ buffer: Uint8Array(6) [ 27, 91, 49, 59, 51, 72 ] }
{ name: "home", sequence: "\x1b[1;3H", code: "[H", ctrl: false, meta: true, shift: false }
```

而 F1 - F12 这些按键也有不同的组合规则，不同的终端具有不同的转义代码。

具体功能键的转义代码参考 cliffy\keycode\key_codes.ts 定义，或相关文档。

TTY 是早期设备 Teletype 或 Teletypewriter 的缩写，原来是指电传打字机，后来这种设备逐渐键盘和显示器取代。不管是电传打字机还是键盘显示器，都是作为计算机的终端设备存在的，早期计算机就是一座房子，而且昂贵，数量有限，不可能让大量人到现场操作，而是通过 TTY 远程操作。现在物理终端实际上已经灭绝了，我们看到的所有 TTY 都是模拟视频终端，即软件仿真出来的终端 Terminal。为了支持原有 TTY 设备，Linux 实现了一个叫做 TTY 的子系统。所以 TTY 既指终端，也指 Linux 的 TTY 子系统。

提到终端就不能不提控制台 console 概念，与终端含义非常相近，其实现在我们经常用它们表示相同的东西，但是在计算机的早期时代，它们确实是不同的东西。

Deno 除了提供 args 获取命令行参数，还提供以下和路径相关的 API：

- Deno.cwd(): string
- Deno.execPath(): string
- Deno.chdir(directory: string)

可以参考 file_server，从命令行参数解析，使用 flags 模块的 parse 方法解析命令行参数。

```js
import { parse } from "https://deno.land/std@0.94.0/flags/mod.ts";

console.dir(parse(Deno.args));
```

运行测试，注意 `_` 存放的是零散参数：

    $ deno run https://deno.land/std/examples/flags.ts a -b --c -d dick
    { _: [ "a" ], b: true, c: true, d: "dick" }

    $ deno run https://deno.land/std/examples/flags.ts -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
    { _: [ "foo", "bar", "baz" ], x: 3, y: 4, n: 5, a: true, b: true, c: true, beep: "boop" }    

但是脚本运行目录没有直接 API 方法，可以配合 path 模块的进行路径处理，从 Deno.mainModule 解析得到，等同 import.meta 提供的 URL，`{ url: stirng, main: boolean }`，其中的 main 指示模块是否作为入口模块执行。

```rust
import { parse } from "https://deno.land/std@0.94.0/flags/mod.ts";
import { dirname, fromFileUrl } from "https://deno.land/std@0.95.0/path/mod.ts";

console.log(parse(Deno.args));

// if((Deno as any) !== "object"){
  // throw Error(`usage: deno run --unstable ${Deno.mainModule}`);
// }
Deno.permissions.request({name:"read"}).then(perm => {
  console.log(Deno.noColor);
  if(perm.state !== "granted") return;
  let appDir = dirname(Deno.mainModule); // import.meta.url
  appDir = fromFileUrl(appDir);
  Deno.writeFile("app.txt", new TextEncoder().encode(appDir));
  console.log({appDir})
})
```

可以授权程序读取环境变量，`--allow-env` 允许读取环境变量，以下 API 需要授权使用：

- Deno.hostname() 读取主机名。
- Deno.loadavg() 读取负载平均值，计算 CPU 及 I/O 周期为 1, 5, 15 分钟，e.g. [ 0.71, 0.44, 0.44 ]
- Deno.osRelease() 获取系统发行版本，e.g 6.2.9200

- Deno.env 环境变量键值对字典。
- Deno.noColor 反映 NO_COLOR 环境变量，指示控制台输出是否使用黑白双色模式。
- Deno.mainModule 当前程序的主模块脚本文件路径，注意 Deno.args[0] 表示命令行参数，不是脚本文件路径。

示范，需要 `--unstable` 功能支持：

```js
import { parse } from "https://deno.land/std@0.94.0/flags/mod.ts";
import {posix} from "https://deno.land/std@0.95.0/path/mod.ts";

console.log(parse(Deno.args));

Deno.permissions.request({name:"read"}).then(perm => {
  console.log(Deno.noColor);
  if(perm.state !== "granted") return;
  let appDir = posix.dirname(Deno.mainModule);
  Deno.writeFile("app.txt", new TextEncoder().encode(appDir));
  console.log({appDir})
})

const desc = { name: "env" } as const;
let perm = await Deno.permissions.request(desc);
if(perm.state == "granted") {
  console.log(Deno.env.get("OS"));
  console.log(Deno.hostname());
  console.log(Deno.osRelease())
  console.log(Deno.loadavg())
  console.log(Deno.systemMemoryInfo());
  console.log(Deno.systemCpuInfo());
}
```

输出参考：

    Windows_NT
    DESKTOP-CBSK60R
    6.2.9200
    [ 0.12253511883146262, 0.12253511883146262, 0.12253511883146262 ]
    {
      total: 16692244,
      free: 8546680,
      available: 0,
      buffers: 0,
      cached: 0,
      swapTotal: 18658324,
      swapFree: 5453236
    }
    { cores: 8, speed: 2111 }


额外补充，Unix/Linux 标准 I/O 流行文件与对应的 ID：

    | Handle |  Name  |   Description   |
    |--------|--------|-----------------|
    |      0 | stdin  | Standard input  |
    |      1 | stdout | Standard output |
    |      2 | stderr | Standard error  |

在命令行中，可以使用这些文件 ID 来做重定向，例如 ls 命令的标准输出到文件：

    # redirect stdout to list.txt
    ls > list.txt
    ls 1> list.txt

    # append stdout to list.txt
    ls -l >> list.txt

例如，将 grep 命令的 stderr 重定向到文件：

    grep -R 'MASTER' $HOME 2> err.txt

同时将 stdout 和 stderr 重定向到文件，注意，后面的`2>&1`表示将 stderr 重定向到 stdout：

    $ ls > list.txt 2>&1

    ## bash only ##
    $ ls &> list.txt

Windows 系统还支持以下这样的语法：

    dir 2>&1 > out.txt
    dir 2> nul
    dir > output.msg 2> output.err
    dir 1> output.msg 2>&1


## ⚡ Binary 数据处理
1. https://deno.land/api@v1.36.1#Encoding_API
2. https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
3. https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/DataView
4. https://developer.mozilla.org/en-US/docs/Web/API/Blob
4. https://deno.land/api@v1.36.1?s=Deno

Deno 通过 Rust 绑定 V8 引擎，提供了底层数据类型的支持。

Data 类只定义了一个私有的 Data() 构造器，子类 Value 提供基本的类型判断方法，如 isSet, isMap, isTrue, isNull, isUndefined 等。

然后是原始值类型，Primitive 和 Object 的各种子类，分别对应了 JavaScript 的原始值类型和复杂对象类型：

- class `External` : `Value`
- class `Primitive` : `Value`
    - class `BigInt` : `Primitive`
    - class `Boolean` : `Primitive`
    - class `Name` : `Primitive`
    - class `Number` : `Primitive`
        - class `Integer` : `Number`
            - class `Int32` : `Integer`
            - class `Uint32` : `Integer`
- class `Object` : `Value`
    - class `Array` : `Object`
    - class `Map` : `Object`
    - class `Set` : `Object`
    - class `Function` : `Object`
    - class `Promise` : `Object`
    - class `Resolver` : `Object`
    - class `Proxy` : `Object`
    - class `WasmModuleObject` : `Object`
    - class `ArrayBuffer` : `Object`
    - class `ArrayBufferView` : `Object`
    - class `SharedArrayBuffer` : `Object`
    - class `Date` : `Object`
    - class `NumberObject` : `Object`
    - class `BigIntObject` : `Object`
    - class `BooleanObject` : `Object`
    - class `StringObject` : `Object`
    - class `SymbolObject` : `Object`
    - class `RegExp` : `Object`
    - class `FinalizationGroup` : `Object`

ECMAScript 脚本语言有一套处理二进制数据的对象规范，Deno 文档没有提供这些对象的接口信息，需要参考 ECMAScript 相关文档。

*ArrayBuffer* 是内存中缓冲区保存的数据对象，代表原始的二进制数据 "byte array"，这些数据不能直接在脚本中操作，需要通过其它具体类型来操作，即需要在具体数据类型的约束下才操作内存数据。最基础的就是类型化的数组类型，比如 *Float32Array*、*Uint8Array* 等等，其中后者是字节类型，常用于字符串与二进制之间的转换。

    Array
    Int8Array       Uint8Array  Uint8ClampedArray
    Int16Array      Uint16Array
    Int32Array      Uint32Array
    BigInt64Array    BigUint64Array
    Float32Array    Float64Array

另外，为了减少对原始数据复制操作，引入了 *DataView* 类型，即从不同的区间“取出”一部分数据，但不需要将原始数据复制到内存的其它位置。OOP 编程思想来理解，就是创建数据对象实例，却不需要内存副本，使用共同的原始数据。

You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

https://deno.land/api@v1.36.1?s=Deno.Buffer
https://deno.land/std@0.198.0/io/buffer.ts
Deprecated
Use Buffer from std/io/buffer.ts instead. Deno.Buffer will be removed in the future.

    import * as mod from "https://deno.land/std@0.198.0/io/buffer.ts";


Node.JS 中用 *Buffer* 来操作 ArrayBuffer，即 Buffer 是一个用于操作原始数据的视图(view)，和前面列表中的类型化数组类型一样，都是 *TypedArray* 接口类型的一种。

    ArrayBuffer
    +- TypedArray
    |   +- Int8Array
    |   +- UInt8Array
    |   |   +- Buffer
    |   +- ...
    +- DataView

Uint8Array 作为 8-bit 无符号整型数组，一段以 8-bit 字节数据为单位的无符号整型数组，可以理解为一种具象化的 ArrayBuffer。与 DataView 的区别在于，数据视图不不需要复制数据，在某些应用场景下提升效率。

此外，还有大尺寸的数据对象 Blob - Binary Large Object，通常用于支持文件操作的二进制对象。

```js
let buf:Uint8Array = new Uint8Array(32);
let ret:TextEncoderEncodeIntoResult = new TextEncoder().encodeInto("中文", buf);
let txt:string = new TextDecoder("utf8").decode(buf.subarray( 0, ret.written));
```


## ⚡ File 读写
- Read and write files https://deno.land/manual@v1.9.2/examples/read_write_files
- Unix cat program https://deno.land/manual@v1.9.2/examples/unix_cat
- Fetch data Example https://deno.land/manual@v1.9.2/examples/fetch_data
- Deno runtime API https://doc.deno.land/builtin/stable

实现文件读写的基本要点：

- Deno 运行时异步 API `Deno.readTextFile` & `Deno.writeTextFile` 函数提供整个文本文件的读写操作。
- Deno 运行时还提供同步 API，如 `Deno.readTextFileSync` & `Deno.writeTextFileSync` 等等。
- Use `--allow-read` and `--allow-write` permissions to gain access to the file system.

异步 API 读写文件示范：

```
const text = Deno.readTextFile("./people.json");
text.then((response) => console.log(response));

const write = Deno.writeTextFile("./hello.txt", "Hello World!");
write.then(() => console.log("File written to ./hello.txt"));
```

需要提供读写权以运行程序，读写权可以指定目录或文件列表，用逗号连接多个文件或目录：

```sh
deno run --allow-read --allow-write fileapi.ts
deno run --allow-read=people.json,hello.txt --allow-write=people.json,hello.txt fileapi.ts
```

实现一个 Unix cat 程序的要点：

- Use the Deno runtime API to output the contents of a file to the console.
- `Deno.args` accesses the command line arguments.
- `Deno.open` is used to get a handle to a file.
- `Deno.copy` is used to transfer data from the file to the output stream.
- Files should be closed when you are finished with them
- Modules can be run directly from remote URLs.

示范代码：

```js
/**
 * cat.ts
 */
for (let i = 0; i < Deno.args.length; i++) {
  const filename = Deno.args[i];
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}
```

运行程序，只需要提供读取权限，因为没有写文件操作：

    deno run --allow-read https://deno.land/std@0.95.0/examples/cat.ts /etc/passwd


可以使用文件游标进行随机读写：

```js
// https://doc.deno.land/builtin/stable#Deno.OpenOptions
const opts = { 
  read: true, write: true, create: true,
  // append: true,
  truncate: true, 
};
const file = await Deno.open('out.txt', opts);
const text = new TextEncoder().encode("Hello world!");
await Deno.write(file.rid, text);

// advance cursor 6 bytes
const cursorA = await Deno.seek(file.rid, 6, Deno.SeekMode.Start)
await file.write(text);

const cursorB = await Deno.seek(file.rid, 0, Deno.SeekMode.Start)
const buf = new Uint8Array(100);
await file.read(buf);
console.log(new TextDecoder().decode(buf));
// Hello Hello world!
```

以上程序使用 Deno.seek 函数将随机读写游标移到到文件的指定位置，以 0 为基数：

- Deno.SeekMode.Start 指定距离文件开始位置的相对偏移，文件开头位置往后。
- Deno.SeekMode.End 指定距离文件结束位置的相对偏移，文件结束位置再往后。
- Deno.SeekMode.Current 指定距离当前游标位置的相对偏移。


Deno 提供了常用的标准 JSON 对象，可以很方便地进行 JSON 与对象实现互相转换，可以查询 lib.es5.d.ts 类型定义：

```
interface JSON {
     // Converts a JavaScript Object Notation (JSON) string into an object.
    parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
     // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}
```

其中 stringify 是重载函数，可以将对象串行化为 JSON 字符串，第二个参数可以传入一个替换方法，对正在处理的键值对进行转换。也可以传入一个数值或字符串列表，表示只输出列表中的字段。

```rust
/**
 * write.ts
 */
function writeJson(path: string, data: object): string {
  try {
    Deno.writeTextFileSync(path, JSON.stringify(data));

    return "Written to " + path;
  } catch (e) {
    return e.message;
  }
}

console.log(writeJson("./data.json", { hello: "World" }));
```


## ⚡ OS Signals
- Handle OS Signals https://deno.land/manual@v1.9.2/examples/os_signals
- https://doc.deno.land/builtin/unstable#Deno.SignalStream
- https://github.com/libuv/libuv/blob/47e0c5c575e92a25e0da10fc25b2732942c929f3/docs/src/signal.rst

系统信号处理这里有些棘手问题，是系统底层机制，几乎是无解的。

以下是 libuv 在不同系统中的信号模拟与接收处理。

Windows 系统下的信号模拟接收：

- `SIGINT` 通常在用户按下 CTRL + C 触发，但是类似 Unix，在 raw mode 并不产生。
- `SIGBREAK` 用户按下 CTRL + BREAK 触发。
- `SIGHUP` 用户关闭控制台窗口时触发，在结束程序之前，有 10s 时间来执行清理工作，然后 Windows 将无条件地结束程序。
- `SIGWINCH` 任何时候 libuv 侦测到控制台调整大小时触发，如果是 32-bit libuv 应用运行于 64-bit 系统，SIGWINCH 不能保证送达。
- 其它信号都可以被监听到，除了 `SIGILL`, `SIGABRT`, `SIGFPE`, `SIGSEGV`, `SIGTERM` and `SIGKILL`.
- libuv 监听不到编程方式调用 raise() or abort() 触发的信号。

Unix 类系统下的信息模拟接收：

- `SIGKILL` and `SIGSTOP` 不可能捕捉到。
- libuv 不能预期地处理 `SIGBUS`, `SIGFPE`, `SIGILL` or `SIGSEGV`。
- `SIGABRT` 通过 abort() 触发时不能被 libuv 捕捉，e.g. through assert().
- On Linux `SIGRT0` and `SIGRT1` (signals 32 and 33) 由 NPTL pthreads library 用于线程管理，对它们进行监听会导致意外。

使用 kill 命令给指定 PID 进程发送信号：

    kill -s SIGINT 8466

Deno 提供的系统信号处理 API 如下，需要 `--unstable` 命令参数支持：

- Deno.signal 用来监视、捕捉系统信号；
- dispose() 使用 SignalStream 提供的此方法停止影视系统信号；

OS 信号 API 相关变量：

- Deno.Signal 保存系统信号枚举量 LinuxSignal 和 MacOSSignal；
- Deno.ppid 父进程 PID；
- Deno.signals 简化的系统信号监听方法；

    - alarm() - `Deno.signal(Deno.Signal.SIGALRM)`
    - child() - `Deno.signal(Deno.Signal.SIGCHLD)`
    - hungup() - `Deno.signal(Deno.Signal.SIGHUP)`
    - interrupt() - `Deno.signal(Deno.Signal.SIGINT)`
    - io() - `Deno.signal(Deno.Signal.SIGIO)`
    - pipe() - `Deno.signal(Deno.Signal.SIGPIPE)`
    - quit() - `Deno.signal(Deno.Signal.SIGQUIT)`
    - terminate() - `Deno.signal(Deno.Signal.SIGTERM)`
    - userDefined1() - `Deno.signal(Deno.Signal.SIGUSR1)`
    - userDefined2() - `Deno.signal(Deno.Signal.SIGUSR2)`
    - windowChange() - `Deno.signal(Deno.Signal.SIGWINCH)`

Deno.SignalStream Constructors & Methods

    constructor(signal: typeof Deno.Signal)

    then(f: (v: void) => T | Promise<T>, g?: (v: void) => S | Promise<S>): Promise<T | S>
    next(): Promise<IteratorResult<void>>
    [Symbol.asyncIterator](): AsyncIterableIterator<void>
    dispose(): void

主要的系统信息定义在 LinuxSignal 和 MacOSSignal 两上枚举类型，通过 Deno.Signal 访问，参考源代码的类型声明 \cli\dts\lib.deno.unstable.d.ts。

结束子进程也可以传入系统信号：

```js
const p = Deno.run({
  cmd: ["sleep", "10000"]
});
Deno.sleepSync(10); // 10 millis seconds
Deno.kill(p.pid, Deno.Signal.SIGINT);
```

Async iterator example

```js
/**
 * async-iterator-signal.ts
 */
console.log("Press Ctrl-C to trigger a SIGINT signal");
for await (const _ of Deno.signal(Deno.Signal.SIGINT)) {
  console.log("interrupted!");
  Deno.exit();
}
```
Run with:

    deno run --unstable async-iterator-signal.ts

Promise based example

```js
/**
* promise-signal.ts
*/
console.log("Press Ctrl-C to trigger a SIGINT signal");
await Deno.signal(Deno.Signal.SIGINT);
console.log("interrupted!");
Deno.exit();
```
Run with:

    deno run --unstable promise-signal.ts

Stop watching signals

```ts
/**
* dispose-signal.ts
*/
const sig = Deno.signal(Deno.Signal.SIGINT);
setTimeout(() => {
  sig.dispose();
  console.log("No longer watching SIGINT signal");
}, 5000);

console.log("Watching SIGINT signals");
for await (const _ of sig) {
  console.log("interrupted");
}
```

Run with:

    deno run --unstable dispose-signal.ts

The above for-await loop exits after 5 seconds when sig.dispose() is called.


## ⚡ Import Maps & import.meta API
1. https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/import.meta
2. https://deepu.tech/concurrency-in-modern-languages-ts/
3. https://deno.land/manual@v1.36.1/getting_started/configuration_file
3. https://deno.land/manual@v1.36.1/basics/import_maps
3. https://deno.land/manual@v1.36.1/runtime/import_meta_api
4. https://deno.land/api@v1.36.1#Web_APIs
4. https://deno.land/api@v1.36.1?s=ImportMeta

1. https://deno.land/manual@v1.36.1/node/npm_specifiers
2. https://deno.land/manual@v1.36.1/node/node_specifiers
3. https://deno.land/manual@v1.36.1/node/cdns
4. https://deno.land/manual@v1.36.1/node/package_json
5. https://deno.land/manual@v1.36.1/node/how_to_with_npm
0. https://deno.land/manual@v1.36.1/node/how_to_with_npm/prisma
0. https://deno.land/manual@v1.36.1/node/how_to_with_npm/mongoose
0. https://deno.land/manual@v1.36.1/node/how_to_with_npm/mysql2
0. https://deno.land/manual@v1.36.1/node/how_to_with_npm/redis
0. https://deno.land/manual@v1.36.1/node/how_to_with_npm/react
0. https://deno.land/manual@v1.36.1/node/how_to_with_npm/vue
0. https://deno.land/manual@v1.36.1/node/how_to_with_npm/express
4. https://vitejs.dev/guide/

JavaScript 引入模块规范后，通过 import 和
export 等关键字定义或引入模块，极大也增强的脚本编程的体验，提升了大型项目的管理效率。为了方便脚本中获取脚本模块信息，同时也加入了 import.meta，这是一个给暴露特定上下文的元数据属性的对象。它包含了这个模块的信息，比如说这个模块的 URL。

通常情况下"import."是作为一个属性访问的上下文，但是在这里"import"不是一个真正的对象。import.meta 对象由 ECMAScript 实现，它带有一个null的原型对象。这个对象可以扩展，并且它的属性都是可写，可配置和可枚举的。

为了像 Node 那样导入 "react" 或 "lodash" 这样的脚本模块，Deno 设计了 Import Maps 机制，通过配置文件 `deno.json` 中设置的模块与 URL 映射关系导入指定的模块。

Deno 模块导入设计是直接通过 CDN 提供的模块 URL 地址导入，esm.sh 就是专用于 Deno 模块分布式内容节点服务。另外，为了导入 Node 内置模块和 NPM 模块，除了兼容 package.json 依赖模块设置，还专门设计了 npm: specifiers 和 node: specifiers，引入的 Node 内置模块功能有限制。

使用 CDN 导入，服务器会自动为 TypeScript 开发环境设置一个 Header 提示模块的类型声明文件地址，比如请求 ReactDOMServer 模块，HTTP 响应头就会包含类似以下标记。Deno 可以检测到类型声明标记，在三斜杠指令处会有智能提示内容，表示引入模块已经处理 Resolved Dependency 状态，并且还有 Code 和 Types 两处信息指示相应的 URL 地址，相当于脚本开头使用 triple-slash 指令引用类型声明文件：

    X-Typescript-Types: https://esm.sh/v131/@types/react-dom@~18.2/server~.d.ts

    https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
    /// <reference types="./server~.d.ts" />
    /// <reference types="https://esm.sh/v131/@types/express@^4/index.d.ts" />

    deno cache https://esm.sh/v131/@types/express@^4/index.d.ts
    deno cache https://esm.sh/v128/@types/react@~18.2/index.d.ts
    deno cache https://esm.sh/v131/@types/react-dom@~18.2/index.d.ts
    deno cache https://esm.sh/v131/@types/react-dom@~18.2/server~.d.ts

由于 TypeScript 官方未支持使用 URL 的三斜杠指令，语法检查会提示找不到类型定义文件。只能在 Deno 环境使用，并且 Deno 会在类型定义文件缓存之前提示 URL 指定的文件处理 Uncache 状态，通常会在运行程序时自动缓存，可以手动执行 `deno cache URL` 缓存指定 URL 地址类型声明文件。也只可以手动下载类型声明文件到项目目录下，使用相对路径引用类型定义文件。缓存目录信息使用 `deno info` 命令查看：

1. DENO_DIR location
2. Remote modules cache
3. npm modules cache
4. Emitted modules cache
5. Language server registries cache
6. Origin storage

导入 npm: 模块时，如果模块本身提供了 TypeScript 类型声明，Deno 会检测到，如果没提供，则可以手动 @deno-types 指令指定类型声明模块。

使用 *tsconfig.json* 相关配置项，使用 `tsc --init` 命令生成初始配置。使用编译选项 `typeRoots` 用来指定默认的类型声明文件查找路径，默认配置下，`@types` 包定位在 node_modules/@types 目录下。如果设置了 `typeRoots` 就以目录列表指路径为参考，并且路径相对于 *tsconfig.json* 文件。使用 `types` 指定自动引入模块名称，而不必在源代码文件中显式引用，同时不会引用 node_modules/@types 目录下的其它模块。路径配置错误导致编译器不能定位到类型声明文件：

    Can't find lib definitions for "*.d.ts" 
    typescript(2726)
    Cannot find module 'Deno' or its corresponding type declarations. 
    typescript(2307)
    File "*.d.ts" is not a module.
    typescript(2306)

导入模块时，如果只有类型声明文件，而没有模块源文件，那么就会导致 2306 错误。因为编译器将类型声明文件当作模块导入，但它不是模块定义，不能导入，只能引用其提供的类型声明信息。Deno 这样的命名空间，其本身没有相应的模块定义脚本文件，因为它们是 Rust 底层语言中导出到 V8 Runtime 环境中的全局符号。这样的模块就是内建模块，**built-in lib**，其包含全局类型需要引用类型声明文件，才能提供智能类型提示。其它内建模块定义参考 TypeScript 源代码中的 lib 目录。Deno LSP 服务本身就包含这些类型声明，而其它环境，比如直接使用官方的 TypeScript 开发环境就需要手段引用这些全局类型声明文件。

TypeScript 4.5 开始，内建库可以被 npm modules 覆盖。

注：内建模块的类型声明文件命名类似 lib.deno.unstable.d.ts，其中前缀 lib 表示内建库，后缀 .d.ts 表示类型声明文件，所以在使用三斜杠指令引用内建库时，应该使用 **deno.unstable**，而不应该包含前缀、后缀，相当于给编译器指定参数 --lib deno.unstable。

    /// <reference lib="deno.unstable" />  <==> lib.deno.unstable.d.ts
    /// <reference lib="deno.ns" />      <==> lib.deno.ns.d.ts

Triple-Slash Directives 三斜杠指令是专用于类型声明引用的指令，除了在源代码中引入类型声明，也在类型声明文件中用于设置相应的信息，或者像 import 语句一样引入模块：

```sh
/// <reference path="..." />
It serves as a declaration of dependency between files.

/// <reference types="..." />
Directive declares a dependency on a package.
For example, including /// <reference types="node" /> in a declaration file declares that this file uses names declared in @types/node/index.d.ts; and thus, this package needs to be included in the compilation along with the declaration file.

/// <reference lib="..." />
This directive allows a file to explicitly include an existing built-in lib file,
in the same fashion as the lib compiler option in tsconfig.json 
(e.g. use lib="es2015" and not lib="lib.es2015.d.ts", etc.).

/// <reference no-default-lib="true"/>
# This directive marks a file as a default library. 

///<amd-module name="NamedModule"/>

/// <amd-dependency />
/// <amd-dependency path="x" name="x" />
Deprecated. Use import "moduleName"; statements instead.
```

为了让编译器检测到内建库，最便捷的方法就是将库类型声明文件所在目录链接到项目目录下，注意使用 `tsc --init` 命令初始化项目目录生成配置文件：

```sh
# PowerShell
mkdir types
New-Item -ItemType SymbolicLink -Path types\deno -Target deno-1.36.1\cli\tsc\dts\
```

如果开发者已经提供声明文件,使用 npm 可以方便地获取类型声明包，然后直接导入模块，指定模块名即可，编译器会自动定位 node_modules/@types 目录的类型声明文件专用模块中的入口 index.d.ts，这种导入方式可以为 TypeScript 官方开发环境提供 LSP 类型提示服务，但不兼容 Deno 开发环境：

    npm i @types/express@4.0.29
    npm i @types/react@18.2.0
    npm i @types/react-dom@18.2.0

    import React from "react";
    import ReactDOM from "react-dom";
    import ReactDOMServer from "react-dom/server";

    /// <reference types="react" />
    /// <reference name="React" path="node_modules/@types/react/index.d.ts" />

    /// <reference name="ReactDOM" path="node_modules/@types/react-deom/index.d.ts" />
    /// <reference name="ReactDOMServer" path="node_modules/@types/react-deom/server.d.ts" />

三斜杠指令设置 type 指定模块，或者 path 指定类型声明文件可以为智能提示提供类型定义信息，并且可以指定模块名称，但这种设置会被 import 语句导入的模块覆盖。Deno 使用 npm: 或 node: 指示符来导入模块，这些都不是 TypeScript 官方规范内容，所以不能在 Deno lSP 开发环境下识别。


1. https://www.typescriptlang.org/tsconfig
2. https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
3. https://www.typescriptlang.org/docs/handbook/module-resolution.html
4. https://www.typescriptlang.org/docs/handbook/compiler-options.html
5. https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
6. https://github.com/microsoft/TypeScript/tree/main/src/lib

TypeScript 目前支持两种模块解析策略，默认的 `node` 模式和 TypeScript pre-1.6 旧版本使用的 `classic` 经典模式。

Module Resolution 参考手册详细解释了模块的搜索流程，以导入 "./moduleB" 模块为例，TypeScript 默认解析流程如下所示，：

    /root/src/moduleA.ts
    import { b } from "./moduleB"

    /root/src/moduleB.ts
    /root/src/moduleB.tsx
    /root/src/moduleB.d.ts
    /root/src/moduleB/package.json (if it specifies a types property)
    /root/src/moduleB/index.ts
    /root/src/moduleB/index.tsx
    /root/src/moduleB/index.d.ts

模块路径解析有相对路径、绝对路径两种方式，Relative vs. Non-relative，路径以 `/`, `./` or `../` 等等开头都是相对路径方式导入。非相对路径导入模块例子如下，可以配置 baseUrl 和 paths 路径映射来定位模块：

    import * as $ from "jquery";
    import { Component } from "@angular/core";

```json
{
  "compilerOptions": {
    "baseUrl": ".", // This must be specified if "paths" is.
    "paths": {
      "jquery": ["node_modules/jquery/dist/jquery"] // This mapping is relative to "baseUrl"
    }
  }
}
```

模块解析配置选项 rootDirs 相当于一个虚拟目录机制，它可以用来管理需要分散在多个目录下管理的大项目，列表中指定目录将汇合成单个虚拟的根目录，编译器合并处理分散在多个目录的项目文件，就像是一个单独目录下的项目。

     src
     └ views
        └ view1.ts (can import "./template1", "./view2`)
        └ view2.ts (can import "./template1", "./view1`)

     generated
     └ templates
        └ views
           └ template1.ts (can import "./view1", "./view2")
```json
{
  "compilerOptions": {
    "rootDirs": ["src/views", "generated/templates/views"]
  }
}
```

设置根目录列表的另一个用途是实现单独的“类型层”，使用专用目录存放为非 TypeScript or JavaScript 文件生成的 .d.ts 文件。此技术对于使用导入不一定是代码的文件的捆绑式应用程序非常有用。

     src
     └ index.ts
     └ css
        └ main.css
        └ navigation.css

     generated
     └ css
       └ main.css.d.ts
       └ navigation.css.d.ts

```json
{
  "compilerOptions": {
    "rootDirs": ["src", "generated"]
  }
}
```

Module Resolution Options

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "baseUrl": "./",
    /* Base directory to resolve non-absolute module names. */
    "paths": {},
    /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    "rootDirs": [],
    /* List of root folders whose combined content represents the structure of the project at runtime. */
    "typeRoots": [],
    /* List of folders to include type definitions from. */
    "types": [],
    /* Type declaration files to be included in compilation. */

    "typeRoots": [ "@types" ],
    "types" : ["node", "lodash", "express", "deno.ns", "deno.unstable"]
  }
}
```

Deno supports a number of methods on the [`import.meta`] API:

- `import.meta.url`: returns the URL of the current module.
- `import.meta.main`: returns whether the current module is the entry point to
  your program.
- `import.meta.resolve`: resolve specifiers relative to the current module.

```ts
const worker = new Worker(import.meta.resolve("./worker.ts"));
```

With such import map loaded...

```json
{
  "imports": {
    "fresh": "https://deno.land/x/fresh@1.0.1/dev.ts"
  }
}
```

...you can now resolve:

```js
// resolve.js
console.log(import.meta.resolve("fresh"));
```

```sh
$ deno run resolve.js
https://deno.land/x/fresh@1.0.1/dev.ts
```


## ⚡ Events & EventTarget
- https://doc.deno.land/builtin/stable#Event
- https://doc.deno.land/builtin/stable#EventTarget
- File system events https://deno.land/manual@v1.9.2/examples/file_system_events
- Proxy 对象代理参考文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
- The Internals of Deno https://choubey.gitbook.io/internals-of-deno/

Deno 实现了完全兼容 DOM 的事件模型，虽然 Deno 本身没有 DOM，但仍然可以使用 EventTarget 处理各种内部事件，或自定义事件。

在程序主模块全局对象中的 window 属性即 Window 实例本身就是 EventTarget 对象的子类，可以监听 load 和 unload 两种事件，同一种事件按注册顺序执行：

```js
let handler = (e: Event): void => { };
window.onload = handler;
window.onunload = handler;
window.addEventListener("load", handler);
window.addEventListener("unload", handler);
```

可以在 Deno 源代码文件找到相应的 JsRuntime 内部初始化代码：

- deno:extensions\web\02_event.js
- deno:extensions\web\04_global_interfaces.js

在 JsRuntime 内部，使用了一个 WeakMap 来管理所有对象的事件设置，这个用于管理事件资源的弱映射对象暂时称为 `TargetData`，使用 WeakMap 而不使用 Map 目的是方便脚本引擎执行 GC 清理不再有效的相关事件资源。

与 Map 对象非常相似，WeakMap 差异是：

- key 只能是对象，并且不可以被遍历，不可以清除，也不具有 size 属性。它是黑匣子，只有同时拥有 WeakMap 和 key 引用才能访问其值。
- key 是对象的弱引用，当对象被回收后，会自动移除对应的键值对。

```js,ignore
  const eventTargetData = new WeakMap();

  function getDefaultTargetData() {
    return {
      assignedSlot: false,
      hasActivationBehavior: false,
      host: null,
      listeners: Object.create(null),
      mode: "",
    };
  }
```

在 `EventTarget` 实例化时，会在 `EventTarget` 中为事件对象本身关联设置一个 `DefaultTargetData`，注意 `listeners` 这个成员，它保存已经注册的事件处理函数，这个复数单词表明每个事件会有一系列的侦听函数，使用键值对关联，如 `{unload: Array(1)}`。

执行 `addEventListener` 注册事件监听函数时，一并将回调和相应的参数保存在 listeners 中：

```js
listeners[type].push({ callback, options });
```

对于 Window 实例，默认会在初始化代码 @runtime/js/99_main.js 注册一个 `unload` 事件侦听函数：

```js
defineEventHandler(window, "load", null);
defineEventHandler(window, "unload", null);

window.addEventListener("unload", () => {
  window[isUnloadDispatched] = true;
});
```

而直接给 `load` 和 `unload` 属性设置事件监听函数的做法是通过 @runtime\js\01_web_util.js 文件中定义的 `defineEventHandler` 方法设置的：

```js,ignore
  const handlerSymbol = Symbol("eventHandlers");

  function makeWrappedHandler(handler) {
    function wrappedHandler(...args) {
      if (typeof wrappedHandler.handler !== "function") {
        return;
      }
      return wrappedHandler.handler.call(this, ...args);
    }
    wrappedHandler.handler = handler;
    return wrappedHandler;
  }

  function defineEventHandler(emitter, name, defaultValue = undefined) {
    // HTML specification section 8.1.5.1
    Object.defineProperty(emitter, `on${name}`, {
      get() {
        return this[handlerSymbol]?.get(name)?.handler ?? defaultValue;
      },
      set(value) {
        if (!this[handlerSymbol]) {
          this[handlerSymbol] = new Map();
        }
        let handlerWrapper = this[handlerSymbol]?.get(name);
        if (handlerWrapper) {
          handlerWrapper.handler = value;
        } else {
          handlerWrapper = makeWrappedHandler(value);
          this.addEventListener(name, handlerWrapper);
        }
        this[handlerSymbol].set(name, handlerWrapper);
      },
      configurable: true,
      enumerable: true,
    });
  }
```

ECMAScript 5.1 规范中定义的 `Object.defineProperty()` 属性定义接口，这个方法用来定义对象属性描述符，可以实现双向数据绑定。

对象属性描述符有**数据描述符**和**存取描述符**。数据描述符是一个具有值的属性，可以配置读写性 `writable`。存取描述符是由 Getter、Setter 函数描述的属性，即对属性读写时的关联函数。

简单地说，通过它可以为一个对象实例定义属性，也可以定义这个属性的 Getter、Setter 方法，以实现属性数据的劫持监听。

这个接口通常用来实现非常流行的 Responsible 响应式编程模式，如 Vue 前端框架，在最新的 Vue 框架响应式实现中，使用了 Proxy 对象。 

ES6 引入的代理（Proxy）实现了对象的 API Intercepting 劫持监听，通过代理设置监听处理函数，可以实现响应式的编程。

注册事件的过程相对是简单的，复杂的是向对象注册好的事件处理函数派发事件，以 Window 的 unload 事件为例，事件源头自 Deno Cli，即 Rust 绑定的脚本引擎内部触发，然后一步步向 JsRuntime 初始化代码传递，这中间又涉及了 Deno Core 搭建的 JsRuntime 环境：

```js,ignore
// @core\core.js
  function dispatch(opName, promiseId, control, zeroCopy) {
    const opId = typeof opName === "string" ? opsCache[opName] : opName;
    return opcall(opId, promiseId, control, zeroCopy);
  }

  function opSync(opName, arg1 = null, arg2 = null) {
    return unwrapOpResult(dispatch(opName, null, arg1, arg2));
  }

  function close(rid) {
    opSync("op_close", rid);
  }

// @runtime\js\99_main.js
  function windowClose() {
    if (!windowIsClosing) {
      windowIsClosing = true;
      // Push a macrotask to exit after a promise resolve.
      // This is not perfect, but should be fine for first pass.
      Promise.resolve().then(() =>
        timers.setTimeout.call(
          null,
          () => {
            // This should be fine, since only Window/MainWorker has .close()
            os.exit(0);
          },
          0,
        )
      );
    }
  }

// @runtime\js\30_os.js
  function exit(code = 0) {
    // Dispatches `unload` only when it's not dispatched yet.
    if (!window[Symbol.for("isUnloadDispatched")]) {
      // Invokes the `unload` hooks before exiting
      // ref: https://github.com/denoland/deno/issues/3603
      window.dispatchEvent(new Event("unload"));
    }

    if (exitHandler) {
      exitHandler(code);
      return;
    }

    core.opSync("op_exit", code); // tell deno core to exit
    throw new Error("Code not reachable");
  }
```

如果，抛开 JsRuntime 的初始化代码不管，那么就变得简单，因为脚本是由 Deno CLI 执行的，直接查看 @cli\main.rs 源代码。它在准备好脚本运行环境后，就开始执行指定的脚本，并进入事件环，派发各种事件，包含 load 和 unload。

比如，直接在命令行 deno eval "script..." 方式解析脚本，它的事件处理在 `eval_command` 方法：

```js
async fn eval_command(
  flags: Flags,
  code: String,
  ext: String,
  print: bool,
) -> Result<(), AnyError> {
  ...
  // Save our fake file into file fetcher cache
  // to allow module access by TS compiler.
  program_state.file_fetcher.insert_cached(file);
  debug!("main_module {}", &main_module);
  worker.execute_module(&main_module).await?;
  worker.execute("window.dispatchEvent(new Event('load'))")?;
  worker.run_event_loop(false).await?;
  worker.execute("window.dispatchEvent(new Event('unload'))")?;
  Ok(())
}
```

如果使用 deno run 运行指定的脚本文件，它的事件处理就在 `run_command` 方法：

```js
async fn run_command(flags: Flags, script: String) -> Result<(), AnyError> {
  // ...
  debug!("main_module {}", main_module);
  worker.execute_module(&main_module).await?;
  worker.execute("window.dispatchEvent(new Event('load'))")?;
  worker
    .run_event_loop(maybe_coverage_collector.is_none())
    .await?;
  worker.execute("window.dispatchEvent(new Event('unload'))")?;

  if let Some(coverage_collector) = maybe_coverage_collector.as_mut() {
    coverage_collector.stop_collecting().await?;
  }

  Ok(())
}
```


```js
/**
 * watcher.ts
 */
const watcher = Deno.watchFs(".");
for await (const event of watcher) {
  console.log(">>>> event", event);
  // Example event: { kind: "create", paths: [ "/home/alice/deno/foo.txt" ] }
}
```

Run with:

    deno run --allow-read watcher.ts

Now try adding, removing and modifying files in the same directory as watcher.ts.

Note that the exact ordering of the events can vary between operating systems. This feature uses different syscalls depending on the platform:

- Linux: inotify
- macOS: FSEvents
- Windows: ReadDirectoryChangesW


## ⚡ Modules
- import or export https://deno.land/manual@v1.9.2/examples/import_export
- Module metadata https://deno.land/manual@v1.9.2/examples/module_metadata
- Linking to third party code https://deno.land/manual/linking_to_external_code
- Managing dependencies https://deno.land/manual@v1.9.2/examples/manage_dependencies

模块的元数据主要有以下这些：

- `import.meta` 提供当前执行脚本的上下文信息。
- `import.meta.main` 指示当前模块是否为入口模块，true or false。
- `import.meta.url` 包含当前模块的 URL 地址，本地文件则以 `file:///` 协议开头。
- `Deno.mainModule` 是主模块，即由 Deno CLI 执行的入口模块的 URL 地址。

模块地址的处理，如获取目录，相对目录，脚本目录等，可以通过标准库的 path 模块进行处理。

模块导入功能具有特殊的 Deno 网络权限，可以不用 --allow-net 授权。

例如，以下这个测试演示：

```js
// test.ts
import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";

assertEquals("hello world", "hello world");
assertNotEquals("hello", "world");

console.log("Asserted! ✓");
```

运行测试：

    $ deno run test.ts
    Compile file:///mnt/f9/Projects/github.com/denoland/deno/docs/test.ts
    Download https://deno.land/std@0.95.0/testing/asserts.ts
    Download https://deno.land/std@0.95.0/fmt/colors.ts
    Download https://deno.land/std@0.95.0/testing/diff.ts
    Asserted! ✓

导入的的依赖模块会缓存在 DENO_DIR 目录中，如果没有设置相应环境变量，那么使用以下默认目录，通过 deno info 命令可以查询：

- Linux/Redox: `$XDG_CACHE_HOME/deno` or `$HOME/.cache/deno`
- Windows: `%LOCALAPPDATA%/deno` (`%LOCALAPPDATA%` = FOLDERID_LocalAppData)
- macOS: `$HOME/Library/Caches/deno`
- 后备目录 `$HOME/.deno`

为了避免在项目中重复编写导入模块，可以使用一个 deps.ts 依赖管理文件，统一导出依赖的模块：

    export {
      assert,
      assertEquals,
      assertStrContains,
    } from "https://deno.land/std@0.95.0/testing/asserts.ts";

然后，再导入这个依赖管理脚本：

    import { assertEquals, runTests, test } from "./deps.ts";

使用 lock file 可以保证下载模块的 URL 和初始开发时使用的一致，使用 --lock 命令选项。

为了防止模块服务器挂机而导致依赖下载出错，可以执行 deno cache 预先缓存依赖：

```sh
# Download the dependencies.
DENO_DIR=./deno_dir deno cache src/deps.ts

# Make sure the variable is set for any command which invokes the cache.
DENO_DIR=./deno_dir deno test src

# Check the directory into source control.
git add -u deno_dir
git commit
```

与 Node 的集中式模块管理不同，Deno 使用分布式，可以从任何提供模块服务的主机上获取依赖模块。

Deno 完全摆脱 Node 的模块标准，使用兼容 ESM 的浏览器模块标准，更方便的 import and export，除了导入本地文件，还可以直接导入 URL 指定的模块。

Deno 没有模块管理器的概念，也没有 package manager 工具，它是通过 URL 来管理依赖模块的。

在大项目中依赖会变得 cumbersome 而消耗更多时间，因而，Deno 使用以下两个依赖管理文件：

- deps.ts 本地中心化依赖管理文件；
- dev_deps.ts 开发依赖管理文件；

导入模块语法参考：

```ts
/**
 * remote import
 */
import {
  add,
  multiply,
} from "https://x.nest.land/ramda@0.27.0/source/index.js";

/**
 * local import
 */
import { add, multiply } from "./arithmetic.ts";

function totalCost(outbound: number, inbound: number, tax: number): number {
  return multiply(add(outbound, inbound), tax);
}

/**
 * export
 */
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}
```

ESM improt 语法参考：

    import defaultExport from "module-name";
    import * as name from "module-name";
    import { export1 } from "module-name";
    import { export1 as alias1 } from "module-name";
    import { export1 , export2 } from "module-name";
    import { foo , bar } from "module-name/path/to/specific/un-exported/file";
    import { export1 , export2 as alias2 , [...] } from "module-name";
    import defaultExport, { export1 [ , [...] ] } from "module-name";
    import defaultExport, * as name from "module-name";
    import "module-name";
    var promise = import("module-name");

ESM export 语法参考：

    // Exporting individual features
    export let name1, name2, …, nameN; // also var, const
    export let name1 = …, name2 = …, …, nameN; // also var, const
    export function functionName(){...}
    export class ClassName {...}

    // Export list
    export { name1, name2, …, nameN };

    // Renaming exports
    export { variable1 as name1, variable2 as name2, …, nameN };

    // Exporting destructured assignments with renaming
    export const { name1, name2: bar } = o;

    // Default exports
    export default expression;
    export default function (…) { … } // also class, function*
    export default function name1(…) { … } // also class, function*
    export { name1 as default, … };

    // Aggregating modules
    export * from …; // does not set the default export
    export * as name1 from …; // Draft ECMAScript® 2O21
    export { name1, name2, …, nameN } from …;
    export { import1 as name1, import2 as name2, …, nameN } from …;
    export { default, … } from …;

注意，导出与导入的对应关系：

- Default Export 对应 Default Import：
    - `impoart defultExport from ...`；
    - `impoart defultExport { ... } from ...`；
- 其它 exports 对应 `import { ... }`；


## ⚡ Using TypeScript
1. Super fast javascript / typescript compiler https://swc.rs
2. SWC - Speedy web compiler https://crates.io/crates/swc
3. Using cli (swc) https://swc.rs/docs/usage-swc-cli
4. Using TypeScript in Deno https://deno.land/manual@v1.9.1/typescript
5. Deno Manual - Examples https://deno.land/std@0.90.0/examples
6. https://docs.skypack.dev/skypack-cdn/code/deno
7. https://github.com/denoland/deno/releases
8. https://microsoft.github.io/language-server-protocol/
9. The Deno Handbook: A TypeScript Runtime Tutorial with Code Examples https://www.freecodecamp.org/news/the-deno-handbook/
0. TypeScript 教程 by 阮一峰 https://wangdoc.com/typescript/

Deno 以 TypeScript 作为第一语言，它会基于 Rust 语言集成开发了 TypeScript 编译器，叫做 SWC - Speedy web compiler，是一个 Rust 库。编译器会将脚本代码，包括 TSX 和 JSX 转换转序为 JavaScript 再由脚本解析引擎运行。官方声明，单线程下此编译器要 20x 快于 babel，而 4 核心线程下 70x，除了 Deno，包括字节跳动都在使用。

无论是 TypeScript 还是 JavaScript 还是类型声明文件 d.ts，都是按模块对待。

Deno 设计原则之一是没有魔术解析，当 TypeScript 检查文件类型时，它只关心文件的类型，`tsc` 编译器有很多逻辑来尝试解析不同的类型。默认情况下，它使用模棱两可的模块标识，具有扩展名，并将尝试依次解析 .ts ，然后是 .d.ts，最后是 .js，当配置指定模块解析设置为 `{module: "node"}` 时，再加上一整套其他逻辑。

Deno 则处理显式指定的模块，不过，这可能会导致一些问题。例如，假设 TypeScript 文件转译为 mod.js 和 mod.d.ts，尝试导入 mod.js 到 Deno 则只会做导入这个动作，这意味着导入的代码不会像 `tsc` 那样考虑使用 mod.d.ts 文件。

为了在 Deno 中支持这一点，Deno 有两个解决方案，其中有一个解决方案的变体来增强支持。

两种主要情况是：

- 作为 JavaScript 模块的导入方，应该知道对模块应用什么类型。
- 作为 JavaScript 模块的供应方，应该知道对模块应用什么类型。

后一种情况更好，也就是说，作为模块的提供者或宿主，每个人都可以使用它，而不必弄清楚如何解析 JavaScript 模块的类型。但是，当使无法直接控制模块时，也需要具备执行前一种操作的能力。

在 TypeScript 导入 JavaScript，并且没有类型声明，即使设置 checkJs: false，这是 Deno 的默认值，TypeScript 编译器仍会尝试对其进行一些静态分析，至少尝试确定该模块的导出的类型，以验证 TypeScript 文件中的导入是不否有效。

导入常规 ES 模块时，这通常不是问题，但在某些情况下，如果该模块具有特殊的打包，或者是全局 UMD 模块，编译器对该模块的分析可能会失败，并导致误导性错误。在这种情况下，最好使用提供某种形式的类型定义。

如果要从 JavaScript 升级为 TypeScript 以提供类型检查，除了可以在配置文件设置 checkJs，最简单就是将 .js 改名为 .ts。

还可以有以下做法：

```js
// @ts-check
This will cause the type checker to infer type information about the JavaScript code and raise any issues as diagnostic issues.

// Using JSDoc in JavaScript
/** @type {string[]} */
const a = [];

// Skipping type checking
// You can always bypass type checking for a whole program by passing the --no-check.
// @ts-nocheck
```

克隆 Deno Standard Modules，里面自带示范程序：

    git clone git@github.com:denoland/deno_std.git

Github 仓库中提供了 lib.deno.d.ts 类型声明文件，它包含了 Deno Namespace 中的符号定义，可以将它包含到 tsconfig.json 配置文件中：

    # generate a new tsconfig.json
    tsc --init

TypeScript 配置文件通常位于项目目录下，也可以运行时指定配置文件：

    > deno run --config ./tsconfig.json main.ts

默认配置：

    {
      "compilerOptions": {
        "allowJs": true,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "inlineSourceMap": true,
        "isolatedModules": true,
        "jsx": "react",
        "lib": ["deno.window"],
        "module": "esnext",
        "strict": true,
        "target": "esnext",
        "useDefineForClassFields": true
      }
    }


旧式 TypeScript 中有三斜杠引用类型声明，在 Deno 中也有类似的 @deno-types 引用类型声明文件：

    // @deno-types="./coolLib.d.ts"
    import * as coolLib from "./coolLib.js";

    /// <reference path="./coolLib.d.ts" />
    // ... the rest of the JavaScript ...

或者使用 node_modules/@types 目录下的类型定义模块：

    /// <reference types="react" />
    /// <reference types="react-dom" />

可以通过 npm 安装这些类型定义文件：

    npm install @types/react @types/react-dom

可以在 tsconfig.json 配置 Deno 的类型声明文件位置：

    "typeRoots": [ 
      "./deno_src/cli/dts/",
    ],                       /* List of folders to include type definitions from. */

类型声明文件可以通过命令行生成：

    tsc -d demo.lib.ts

导入时指定类型声明：

    // @deno-types="./coolLib.d.ts"
    import * as coolLib from "./coolLib.js";

Deno 获取远程导入的模块时，如果读取到 `X-TypeScript-Types` 标头就会获取相应的类型声明文件：

    HTTP/1.1 200 OK
    Content-Type: application/javascript; charset=UTF-8
    Content-Length: 648
    X-TypeScript-Types: ./coolLib.d.ts

Skypack.dev 或 jspm.dev 就是支持 Deno 或 Native ES Module 模块规范的 CDN：

    import React from "https://cdn.skypack.dev/react?dts";
    import React from 'https://dev.jspm.io/react'

注意 Skypack.dev 在 URL后缀 dts 表示加载 TypeScript 模块。

使用导入影射 --import-map，假如有以下 import_map.json：

    {
       "imports": {
          "fmt/": "https://deno.land/std@0.90.0/fmt/"
       }
    }

那么编写程序 color.ts 导入模块就可以直接使用影射后的路径：

    import { red } from "fmt/colors.ts";

    console.log(red("hello world"));

    // deno run --import-map=import_map.json color.ts

Deno 强制开启 isolatedModules 编译配置，那么即使使用 TypeScript 编译生成代码，也需要遵守以下规则，即有些特性不支持：

- `Re-exporting` 重导出有误导性，需要知道源模块是在导出运行时代码，还是只导出类型信息，禁止它可以清除多余类型。
- `const enum` 不支持，它需要类型信息来指导生成硬编码，特别是被导出时，它们是一个类型系统的纯构造。
- `export =` and `import =` 是传统 TypeScript 语法，不支持。
- `declare namespace` 支持，运行时 `namespace` 是传统 TypeScript 语法，不支持。


## ⚡ Using JSX and the DOM
01. https://deno.land/manual@v1.36.1/advanced/jsx_dom
02. Deno Bundle for Server Side Rendered React https://dev.to/craigmorten/deno-bundle-for-server-side-rendered-react-11c2
03. Writing a React SSR app in Deno https://dev.to/craigmorten/writing-a-react-ssr-app-in-deno-2m7
06. Deno Bundle https://deno.land/manual/tools/bundler#bundling
07. Runtime compiler APIs https://deno.land/manual@v1.9.0/typescript/runtime
08. Deno Demos https://github.com/jimboyeah/deno-demo
09. opine Fast, minimalist web framework https://github.com/asos-craigmorten/opine
10. std:http/server.ts https://doc.deno.land/https/deno.land/std@0.51.0/http/server.ts

一个 web 应用包含多种技术，对应不同的数据组织形式：

1. JavaScript 脚本，对应浏览器的各种脚本对象；
2. HTML 标签，对应浏览器 DOM 对象；
3. CSS 样式表，对应页面外观样式；
4. Web Assembly 字节码，比脚本更底层的程序。

使用这些数据就需要不同的解释程序，但是现代的 web 应用已经实现组件化，Facebook 创建的 React 框架引入了一种数据溶合技术，JSX 即带有 XML 数据的 JavaScript 脚本，这是一种流行的领域特定语言 DSL (domain specific language) ，这种技术实现了在 JavaScript 或者 TypeScript 脚本上编写类似 HTML 结构的脚本，这使得编写 web 组件变得非常方便，HTML 标签通过组件化技术，就像编写脚本一样。

当前 Deno 可以使用以下工具来解释 JSX 中的 DOM 和 CSS 对象，它们的功能就是实现 HTML-in-JS 和 CSS-in-JS：

1. Using LinkeDOM https://github.com/WebReflection/linkedom
2. Using deno-dom https://deno.land/x/deno_dom
3. Using jsdom https://github.com/jsdom/jsdom
4. Parsing CSS 
    via reworkcss/css https://github.com/reworkcss/css
    or deno_css https://deno.land/x/css
5. Using Twind https://twind.dev/


一个 JSX 组件定义类似如下内容：

```jsx
    export function Greeting({ name }) {
      return (
        <div>
          <h1>Hello {name}!</h1>
        </div>
      );
    }
```


```sh
deno run -A --reload --unstable .\server.tsx
deno run -A --unstable ./server.tsx
#           ^^^^^^^^^^ this is important!
```

使用 --reload 重新加载模块或在 FC 组件中使用 setState Hook API 可能导致运行出错 react-invalid-hook-call，可以检查是不是重复引入了 React。

编写 React 应用 App.tsx：

    // @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
    import React from 'https://dev.jspm.io/react'

    export const App = () => <div>Hello YYDeno with React!</div>

编写 Client.tsx 备用：

```js
import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";
import { App } from "./app.tsx";

(ReactDOM as any).hydrate(
  <App />,
  //@ts-ignore
  document.getElementById("root"),
);
```

编写 React SSR 应用 Server.tsx，利用 ReactDOMServer 将 React 在服务端渲染，之后使用 Deno Server 进行输出：

    import React from 'https://dev.jspm.io/react'
    import { serve } from "https://deno.land/std/http/server.ts";
    import ReactDOMServer from 'https://dev.jspm.io/react-dom/server'
    import { App } from './App.tsx'

    export const str = (ReactDOMServer as any).renderToString(<App />);
    const body = new TextEncoder().encode(str);

    const s = serve(":8080");
    window.onload = async () => {
      console.log("http://localhost:8080/");
      for await (const req of s) {
        req.respond({ body });
      }
    };

如果进行 SSR 开发，就需要使用 Deno 提供的 Runtime compiler APIs 对 React 应用进行动态编译。

```
function emit(
  rootSpecifier: string | URL,
  options?: EmitOptions,
): Promise<EmitResult>;

interface EmitOptions {
  bundle?: "esm";
  check?: boolean;
  compilerOptions?: CompilerOptions;
  importMap?: ImportMap;
  importMapPath?: string;
  sources?: Record<string, string>;
}

interface EmitResult {
  diagnostics: Diagnostic[];
  files: Record<string, string>;
  ignoredOptions?: string[];
  stats: Array<[string, number]>;
}
```

动态编译生成的结果保存在 EmitResult.files 以 `deno:///bundle.js` 为主键的值中。

可以直接以字符串作为要编译的 TypeScript 代码，也可以指定编译文件：

```
const { files } = await Deno.emit("/mod.ts", {
  sources: {
    "/mod.ts": `import * as a from "./a.ts";\nconsole.log(a);\n`,
    "/a.ts": `export const a: Record<string, string> = {};\n`,
  },
});
```

可以配置编译选项，也可以配置导入映射：

```
const { files } = await Deno.emit("mod.ts", {
  bundle: "esm",
  importMap: {
    imports: {
      "lodash": "https://deno.land/x/lodash",
    },
  },
  importMapPath: "file:///import-map.json",
});
```

由于 Deno 只提供最简单的 http server 模块，没有 Web 框架的常用功能，如路由处理，因此选择使用 opine 这个小型框架进行开发。

Server.tsx 服务器端程序参考：

```rust
// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="react-dom/server" />
import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
import { opine } from "https://deno.land/x/opine@0.25.0/mod.ts";
import App from "./App.ts";

/**
 * Create our client bundle - you could split this out into
 * a preprocessing step.
 * Deno.bundle and Deno.compile is outdate, use Deno.emit instead.
 */
const {diagnostics, files} = await Deno.emit(
  "./demo/client.tsx",
  { 
    bundle: "esm",
  },
);

if (diagnostics) {
  console.log(diagnostics);
}
let bundle = files["deno:///bundle.js"];

let react_ssr = (ReactDOMServer as any).renderToString(<App />)

/**
 * Create our Opine server.
 */
let app = opine();
let browserBundlePath = "/browser.js";

let html =
`<html>
  <head><script type="module" src="${browserBundlePath}"></script>
  <style>* { font-family: Helvetica; }</style>
  </head>
  <body>
  <div id="root">${
    react_ssr
  }</div>
  </body>
</html>`;

app.use(browserBundlePath, (req, res, next) => {
  res.type("application/javascript").send(bundle);
});

app.use("/", (req, res, next) => {
  res.type("text/html").send(html);
});

app.listen({ port: 3000 });

console.log("React SSR on http://localhost:3000");
```


## ⚡ Using React JSX Component with Deno
1. https://fresh.deno.dev/docs/getting-started
2. https://alephjs.org/docs/get-started
3. https://deno.land/manual@v1.36.1/basics/react
4. https://preactjs.com/guide/v10/getting-started
5. https://www.patterns.dev/posts/islands-architecture

作为 Web 模块化组件化开发的流行框架，React、Vue、Angular 都受到大量用户不同程度的追捧。Deno 环境中也可以和 Node 一样开发 Web 应用，以下就利用 Fresh 或 Aleph.js 脚手架创建一个配置好开发环境的 Web 示范项目：

```sh
# 🐣 Create a new app with Fresh:
deno run -A -r https://fresh.deno.dev
cd fresh-project
deno task start


# 🐣 Create a new app with Aleph.js:
deno run -A -r https://alephjs.org/init.ts
deno run -A -r https://alephjs.org/init.ts --template=react
deno run -A -r https://alephjs.org/init.ts --template=vue

cd my-app
# Start the app in development mode:
deno task dev
# Start the app in production mode:
deno task start
# Optimize the application (bundling, ssg, etc.):
deno task opt
```

Web 应用脚手架的作用就是简化配置，以及提供开发环境的 Web 服务器配置，最重要的一个功能就是 Hot Module Replacement (or HMR)，通过热加载功能，Web 服务器可以即时更新开发者刚修改的内容，而不用再重新加载整个 Web 服务器，大大提升了开发效率。

Fresh 是最流行的 Deno 平台下的 React 应用开发框架。它使用一个默认情况下不向客户端发送 JavaScript 的模型。大部分渲染都是在服务器上完成的，客户端只负责重新渲染交互性的小岛，这意味着开发人员明确选择客户端呈现特定组件。所谓小岛是指 islands 目录下的组件，这些组件由 route 目录下的路由组件根据用户请求加载，整个应用基于 islands architecture 渲染架构设计。

Fresh 会自动生成包含路由信息的脚本文件 *fresh.gen.ts*，它将路由、小岛映射关系导出为 manifest 配置对象。

以下是处理各种 web 默认状态的内置路由映射，以及路由表参考：

    routes/_app.tsx
    https://fresh.deno.dev/docs/concepts/app-wrapper

    routes/_404.tsx
    routes/_500.tsx
    https://fresh.deno.dev/docs/concepts/error-pages

|        File name        |    Route pattern     |     Matching paths     |
|-------------------------|----------------------|------------------------|
| index.ts                | /                    | /                      |
| about.ts                | /about               | /about                 |
| blog/index.ts           | /blog                | /blog                  |
| blog/[slug].ts          | /blog/:slug          | /blog/foo, /blog/bar   |
| blog/[slug]/comments.ts | /blog/:slug/comments | /blog/foo/comments     |
| old/[...path].ts        | /old/:path*          | /old/foo, /old/bar/baz |

Examples
1. https://fresh.deno.dev/docs/examples/init-the-server
2. https://fresh.deno.dev/docs/examples/handling-complex-routes
3. https://fresh.deno.dev/docs/examples/rendering-markdown
4. https://fresh.deno.dev/docs/examples/creating-a-crud-api
5. https://fresh.deno.dev/docs/examples/using-deno-kv-oauth
6. https://fresh.deno.dev/docs/examples/dealing-with-cors
7. https://fresh.deno.dev/docs/examples/using-csp

Aleph.js is the second most popular React framework for Deno. It gives you the same sort of quick-start with React as Create-React-App. Like Next.js, Aleph provides SSR and SSG out of the box in order to allow developers to create SEO-friendly apps. In addition, Aleph provides some other built-in features that don’t come out of the box in Next.js, such as:

1. Hot Reloading (Using React Fast Refresh)
2. ESM Import Syntax (No need for webpack)
3. TypeScript-Ready

Features
01. Zero Config
02. No build step
03. File-system Routing
04. Just-in-time Server-side Rendering(SSR)
05. Streaming SSR
06. Support Typescript/JSX in Deno out of the box
07. Built-in Unocss (Automatic CSS)
08. Import Maps
09. Hot Module Replacement (or HMR)
10. Support Middware
11. Custom Module Loader like MDX

Supported Frameworks
1. React (docs, example)
2. React with MDX (docs, example)
3. Vue (docs, example)
4. SolidJS (docs, example) Experimental
5. Yew (docs, example) In Rust


以下演示 Web 应用开发框架 React 的导入与使用，注意 React 使用 JSX 语法，需要将代码文件命名为 jsx 或者 tsx，开始环境应该配置好 JSX 语法处理流程，新版本 Deno 会自动根据扩展名对 JSX 格式编写的组件代码（JSX.Element）进行预处理，将标签转换成对应的 React 组件对象。

所谓 JSX 组件，就是 JS + XML 混合的脚本，不能直接在 JavaScript 解析器中运行，它需要先进行转译处理，先转换 HTML 标签为符合 JavaScript 规范的数据结构，这个数据结构就是 `JSX.Element`。也可以直接通过 `React.createElement()` 创建，而不是使用 HTML 标签定义。React 支持多种组件编写形式：

*函数式*：使用函数封装 HTML 标签，也可以不包含标签，因为一般的字符串也是符合规范的内容，一个组件只能有一个顶级标签，如果有多个顶层标签可以使用 React.Fragment 包裹器组件 `<>...</>`，这个组件渲染时没有可见的内容。示例比如：

```sh
    const DIV = () => <div>custom div</div>;
    const DIV = () => "<div>custom div</div>";
    # => "&lt;div&gt;custom div&lt;/div&gt;" 
    const BIS = () => <><b>Bold</b><i>Italic</i></>;
```

*标签式*：常规的 HTML 标签，比如 `<b>Bold</b>`；或者其它自定义组件的标签形式，如以上定义的函数组件的标签式表达为 `<DIV />`；标签式 JSX 组件是 React 的通用形式，可以将 JSX 这种形式理解为一种特别的函数调用形式，在转译程序的支持下实现这种调用。

*组件类*：React 模块提供了多种组件类，有状态组件、无状态组件等等，标准组件就是 React.Component 类型，继承它就可以定制新的组件，同样支持标签式表达，比如 `<HelloSSR />` 就是代表实例一个组件类，也就是递归解析组件 children 嵌套结构对应的标签结构。

在组件标签内联插值，`{variable}` 这种语法会产生额外的 `<!-- -->` 占位符，React 做数据处理时需要用它来定位插值的位置信息。

0. https://deno.land/manual@v1.36.2/advanced/jsx_dom/jsx
1. https://react.dev/blog/2023/03/16/introducing-react-dev
2. https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
3. https://github.com/developit/htm
3. https://github.com/cuixiaorui/mini-vue
3. Minimal React: getting started with the frontend library  https://2ality.com/2020/08/minimal-react.html

流行的转译工具就有 Babel，转译 JSX 只是它的其中一部分功能，更重要的是它可以为浏览实现运行更先进的 ECMASCript 脚本规范提供支持。编译后的脚本在浏览器中运行，通过 ReactDOM API 按组件的数据描述实例化为浏览器 DOM 对象，生成对应的 HTML 结构。ReactDOM 就是在浏览器会用于渲染 HTML 结构的模块，ReactDOMServer 则通用于服务端渲染，当然它是常规脚本，也可以在浏览器中运行，渲染出组件对应的 HTML 字符串。

```tsx
import React from "https://esm.sh/react@18.2.0";

const Div:React.JSX.Element = (<div>HTML Division</div>);

class HelloSSR extends React.Component {
  render () {
    const fakeTick = 1;
    return (<div>Hello, SSR! {fakeTick} </div>)
  }
}
const props = {className:"mydiv",children:"Division"};
console.log({
  HelloSSR, 
  Div,
  mydiv: React.createElement("div", props, "text")
});
/* {
  HelloSSR: [class HelloSSR extends d],      
  ...
  mydiv: {
    "$$typeof": Symbol(react.element),
    type: "div",
    key: null,
    ref: null,
    props: { className: "mydiv", children: "text" },
    _owner: null
  }
} */
console.log({
  HelloSSR: ReactDOMServer.renderToString(<HelloSSR/>), 
  Div: ReactDOMServer.renderToString(Div),
});
/* {
  HelloSSR: "<div>Hello, SSR! <!-- -->1<!-- --> </div>",
  Div: "<div>HTML Division</div>"
} */
```

ESBuild 这样的极速模块打包机也支持 JSX 语法的转译，转译与编译不同，ESBuild 不会进行语言层面上的检查，只是将 JSX 到 JavaScript 转换的关系映射体现出来。

React 类型定义中，类组件是泛型实现，其中 P、S、SS 参数对应的是 Props, State 和 getSnapshotBeforeUpdate 方法相关的 SnapShot 对象。其中 Props 是只读的属性值，不应该进行修改，并且组件构造函数中应该通过 `super(props)` 将参数传递给父类内部进行只读属性的初始化：

```ts,ignore
    class Component<P, S>

    interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> 

    interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> 
```

例如，以下使用 ESBuild 对一组 JSX 组件进行转译：

```jsx
import * as esbuild from 'https://deno.land/x/esbuild@v0.19.0/mod.js'
const ts = `
const t = {id:123, message:"Hello"};
const Hello = (props) => (<b >{props.message}</b>);
const tag = <><Hello {...t} /></>;
class HelloSSR extends React.Component<{message:string}> {
  constructor(props) {
    super(props); // set this.props internally
    console.log(this.props);
  }
  render () {
    return (<div>{ this.props.message }, SSR!  </div>)
  }
}
`;
// const html = ReactDOMServer.renderToString( [tag,<HelloSSR {...t} />] );
const { code, ...result} = await esbuild.transform(ts, { loader: 'tsx' })
console.log({result}, code )
esbuild.stop()
```

注意：标签式组件赋值给变量后（tag），就意味已经得到组件的数据结构 JSX.Element，就不能再对变量使用标签的表达形式。还有定义组件类时，注意泛型参数应该写在父类的泛型参数中，这样就可以定义组件类的 props 属性的数据类型。如果将泛型参数写在继承类（左侧），那么就是在定义一个新的泛型类。

以上代码经过 ESBuild 转译后生成的 JavaScript 代码如下，JSX 组件标签会映射到 React API，亦即前面所说，组件标签相当于函数调用的特殊形式：
https://esbuild.github.io/api/#jsx-side-effects
https://esbuild.github.io/api/#pure

```jsx,ignore
const t = { id: 123, message: "Hello" };
const Hello = (props) => /* @__PURE__ */ React.createElement("b", null, props.message);
const tag = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hello, { ...t }));
class HelloSSR extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, this.props.message, ", SSR!  ");
  }
}
```

以下是基于 Deno 编写的 React SSR 应用示范，为了简化起见，服务器端的 HelloSSR 是简化后 Hello 组件，它们生成的初始内容必须一致，如果使用 hydrateRoot()。SSR 渲染目的是向浏览器在发出页面请求时，服务器可以提供一个具有完整 HTML 结构的页面，这样做的目的可以是出于 SEO 搜索引擎优化需要。

浏览器获取到 SSR 页面后，就执行客户端的脚本，ReactDOM.hydrate() 则根据对应组件生成的 HTML 绑定事件处理函数，恢复组件的交互能力。dydrate() 相比 render() 可以跳过组件 HTML 结构处理过程，因为 HTML 已经由服务生成并已经在页面中，这样以获得非常高效的首次加载体验，React SSR 会使用项目复杂化。

SSR 是 JSP、PHP 时代就存在的古老的技术，只不过之前是通过模版引擎。React SSR 则是基于渲染组件得到 HTML，并且客户端再次渲染，这种叫做同构渲染的模式。

SSR 存在的主要目的除了 SEO 优化，还有就是解决 Client-Side Render (CSR) 项目的初次加载时间长的问题，TTFP（Time To First Page）时间比较长。CSR 渲染模式下，首先要加载 HTML 文件，之后要下载页面所需的 JavaScript 文件，然后 JavaScript 文件渲染生成页面。

```tsx,ignore
/// <reference types="npm:@types/node" />

import os from "node:os";
import chalk from "npm:chalk@5";
// @deno-types="npm:@types/express@^4.17"
import express, {Request, Response} from "npm:express@^4.17";
// import express from "https://esm.sh/express@4.18.2";
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import ReactDOMServer from "https://esm.sh/react-dom@18.2.0/server";


class HelloSSR extends React.Component {
  render () {
    console.log("ssr render", HelloSSR);
    let fakeTick = 1;
    return (<div>Hello, SSR! {fakeTick} </div>)
  }
}

const ssr = ReactDOMServer.renderToString( <HelloSSR /> );

const html = `
  <!doctype html>
  <html>
    <body>
    <div id="container">${ssr}</div>
      <script src="https://cdn.staticfile.org/babel-standalone/7.22.10/babel.min.js"></script>
      <script type="text/babel" data-type="module">
        import React from "https://esm.sh/react@18.2.0";
        import ReactDOM from "https://esm.sh/react-dom@18.2.0";
        import ReactDOMServer from "https://esm.sh/react-dom@18.2.0/server";

class Hello extends React.Component {
  static tick = 0;
  constructor() {
    super({});
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){ 
    console.log("onclick", {t: this, e}); 
    fetch("/react-ssr")
    .then(res=>res.text())
    .then(res=>console.log({res}));
    this.forceUpdate();
  }
  render () {
    Hello.tick++;
    console.log("render", Hello.name, Hello.tick);
    return (<div onClick={this.handleClick}>Hello, SSR! {Hello.tick} </div>)
  }
}
        let container = document.querySelector("#container");
        // ReactDOM.render(<Hello />, container);
        // ReactDOM.hydrate(<Hello />, container);
        ReactDOM.hydrateRoot(container, <Hello />);
      </script>
      <script type="module">
      </script>
    </body>
  </html>
  `;


const app = express();

app.get("/", (req:Request, res:Response) => {
  res.send(html);
});

app.get("/react-ssr", (req:Request, res:Response) => {
  const ssr = ReactDOMServer.renderToString( <HelloSSR /> );
  res.send(ssr);
});

app.listen(3000);
console.log(chalk.green("listening on http://localhost:3000/"), `home dir: ${os.homedir}`);
```


Vite 是新式的前端开发框架，由 Vue 作者尤雨溪开发，基于 JavaScript modules (ESM) 模块，拥有轻量式 Hot Module Replacement (HMR)，支持 Server-Sider Render (SSR) 和插件机制，以及丰富的开箱即用功能，包括 TypeScript, JSX, CSS 等等，用于 Deno 环境下创建 React、Vue 应用等等。执行以下命令，运行 Vite 脚手架，选择 Web 应用框架以及脚本语言和 SSR 方式，创建默认的工程：

```sh
deno run --allow-env --allow-read --allow-write npm:create-vite-extra
cd vite-project
deno task dev
# npm install
# npm run dev
```

Vite 生产环境用 rollup 而非 webpack 打包模块，但使用 npm 或者 yarn 一建生成项目结构的方式，所以项目中会有 node_modules 目录。


```json
{
  "imports": {
    "std/": "https://deno.land/std@0.198.0/",
    "fmt/": "https://deno.land/std@0.198.0/fmt/",
     // import lodash from "lodash";
    "lodash": "https://esm.sh/lodash@4.17.21",
    "react" : "https://esm.sh/react@18.2.0",
  },
  "tasks": {
    "dev": "deno run --watch main.ts"
  }
}
```

```ts,igore
import { red } from "fmt/colors.ts";
console.log(red("hello world"));

import os from "node:os";
import chalk from "npm:chalk@5";
import express from "npm:express@^4.17";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
console.log(chalk.green("listening on http://localhost:3000/"), `homedir: ${os.homedir}`);
```

注意：Vue 框架中，模块代码执行、热更新时，Root 挂载节点下的 HTML 标签会被临时摘除，等待完成虚拟节点的 Patches 操作后再挂载，这个过程可能瞬间完成，也可能耗时长一点，这做空档期间会导致 document.querySelector() 这类的方法不能获取到指定节点，就只有获取到当前模块中已经加载的 DOM 对象。应该使用 Vue API 引用 DOM 节点。

另外，如果尝试将 document.querySelector() 等函数通过变量引用，可能导致其上下文出现逻辑错误。因为通过变量调用函数时，this 引用的上下文对象是变量定义所在的作用域对象。如果是在全局空间定义的变量，那么这个对象可能就是 window，那么执行方法时因为不能通过 window 对象来获取 DOM 而产生错误。可以先将指定对象绑定 API 作为其上下文对象，这样可以保证按原有逻辑运行：

```js
let qb = document.querySelector.bind(document);
let q = document.querySelector;
!function test(){
    console.log( qb("body") );
    console.log( q("body") ); // TypeError: Illegal invocation
}();
```

模块 export 导出的符号，导出的函数、对象和原始值，只能被 import 所在的模块读取，而不能修改：
https://rollupjs.org/es-module-syntax/#how-bindings-work

```js
// hello.js
export let count = 0;
export function increment() { count++; }

// main.js
import { count, increment} from './hello'
increment();
count ++; //TypeError: Cannot assign to read only property 'count' of '[object Module]'
```



## ⚡ Program lifecycle
- Deno Manual - Program lifecycle https://deno.land/manual/runtime/program_lifecycle
- Deno Manual - Import and export modules https://deno.land/manual@v1.9.0/examples/import_export
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
- Deno Global Variable - window https://doc.deno.land/builtin/stable#Window
- Deno is a Browser for Code - Kitson P. Kelly https://www.kitsonkelly.com/posts/deno-is-a-browser-for-code/

主程序与导入模块生命周期，同一种事件按注册顺序执行：

- imported script
- main script
- `load` event in (imported)
- `load` event in (main)
- `onload` event in window.onload (main)
- `unload` event in (imported)
- `unload` event in (main)
- `onunload` event in window.onunload (main)

导入的包和主程序生命事件有些差别，并且，通过 `import.meta.main` 可以确认模块是否是程序入口模块。

请看演示：

```js
// main.ts
import "./imported.ts";

const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (main)`);
};

window.addEventListener("load", handler);

window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function (main)`);
};

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (main)`);
};

console.log("log from main script");

// imported.ts
const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (imported)`);
};

window.addEventListener("load", handler);
window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function (imported)`);
};

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (imported)`);
};

console.log("log from imported script");
```

注意，使用了 `window.addEventListener` and `window.onload`/`window.onunload` 来注册事件处理函数，这是两种处理方式，结果相同。

```sh
$ deno run main.ts
log from imported script
log from main script
got load event in event handler (imported)
got load event in event handler (main)
got load event in onload function (main)
got unload event in event handler (imported)
got unload event in event handler (main)
got unload event in onunload function (main)
```

Deno 作为一个以兼容浏览器 API 为目标的开发环境，提供了顶层的 windows 对象，不过和浏览器对象还是有些区别的。

Deno 全局导出的变量除了 console、crypto、performance 等，还暴露了 window 对象的成员，参考 Deno CLI 类型声明文件 lib.deno.window.d.ts：

```js
declare class Window extends EventTarget {
  new(): Window;
  readonly window: Window & typeof globalThis;
  readonly self: Window & typeof globalThis;
  onload: ((this: Window, ev: Event) => any) | null;
  onunload: ((this: Window, ev: Event) => any) | null;
  close: () => void;
  readonly closed: boolean;
  alert: (message?: string) => void;
  confirm: (message?: string) => boolean;
  prompt: (message?: string, defaultValue?: string) => string | null;
  Deno: typeof Deno;
  Navigator: typeof Navigator;
  navigator: Navigator;
  Location: typeof Location;
  location: Location;
}

declare var window: Window & typeof globalThis;
declare var self: Window & typeof globalThis;
declare var onload: ((this: Window, ev: Event) => any) | null;
declare var onunload: ((this: Window, ev: Event) => any) | null;
```

在编写程序时使用的 Deno 对象就是全局 Window 实例的属性，可以看到，Window 对像的 API 就是按 Web 浏览器模型设置的，alert，confirm，prompt 这些函数都有一致的表现，只不过它们以 CLI 作为交互接口。

此外，lib.dom.d.ts 类型声明文件描述的是接口和浏览器提供的 DOM API 也是一致的，像 queueMicrotask 微任务方法。

可以打印 Deno.core 核心模块的成员信息：

```js
  core: {
    print: [Function],
    recv: [Function],
    send: [Function],
    setMacrotaskCallback: [Function],
    evalContext: [Function],
    encode: [Function],
    decode: [Function],
    getPromiseDetails: [Function],
    getProxyDetails: [Function],
    shared: [Object],
    jsonOpAsync: [AsyncFunction: jsonOpAsync],
    jsonOpSync: [Function: jsonOpSync],
    setAsyncHandler: [Function: setAsyncHandler],
    dispatch: [Function],
    dispatchByName: [Function: dispatch],
    ops: [Function: ops],
    close: [Function: close],
    resources: [Function: resources],
    registerErrorClass: [Function: registerErrorClass],
    getErrorClass: [Function: getErrorClass],
    sharedQueueInit: [Function: init],
    sharedQueue: [Object],
    createPrepareStackTrace: [Function: createPrepareStackTrace]
  },
```

Deno Core API 就是通过 Deno.core 属性暴露出来的，其成员类型定义可以参考源代码中 core\lib.deno_core.d.ts 类型声明文件：

```rust
declare namespace Deno {
  declare namespace core {
    /** Send a JSON op to Rust, and synchronously receive the result. */
    function jsonOpSync(
      opName: string,
      args?: any,
      ...zeroCopy: Uint8Array[]
    ): any;

    /** Send a JSON op to Rust, and asynchronously receive the result. */
    function jsonOpAsync(
      opName: string,
      args?: any,
      ...zeroCopy: Uint8Array[]
    ): Promise<any>;

    /**
     * Retrieve a list of all registered ops, in the form of a map that maps op
     * name to internal numerical op id.
     */
    function ops(): Record<string, number>;

    /**
     * Retrieve a list of all open resources, in the form of a map that maps
     * resource id to the resource name.
     */
    function resources(): Record<string, string>;

    /** Close the resource with the specified op id. */
    function close(rid: number): void;
  }
}
```

## ⚡ Permission APIs
- Permissions https://deno.land/manual@v1.9.2/getting_started/permissions
- https://doc.deno.land/builtin/stable#Deno.permissions
- Ryan Dahl. (September 25, 2020). The Deno security model. Speakeasy JS.

权限许可用来保证 CLI 运行安全，程序只能使用许可的功能。

Deno 目前提供的权限许可 API 未通过验证，需要通过 --unstable 激活。执行 API 申请相应的许可，命令行提供交互操作，由用户进行确认授权。

- `-A`, `--allow-all`：允许所有权限，这将禁用所有安全限制。
- `--allow-hrtime`：允许高精度时间测量，高精度时间能够在计时攻击和特征识别中使用
- `--allow-plugin`：允许加载插件，Unstable API，参考 Deno.openPlugin。
- `--allow-read`：打开读权限，可以指定可读的目录，来提供文件系统白名单，比如 --allow-read=/temp。
- `--allow-write`：打开写权限，允许写入文件系统，或指定目录或文件，来提供文件系统白名单。
- `--allow-net`：允许网络通信，可以指定可请求的域名白名单，多域名使用逗号分隔，比如 --allow-net=google.com。
- `--allow-env`：允许读取环境变量，命令行参数通过 Deno.args[0] 就可以访问，注意脚本路径通过 Deno.mainModule 读取。
- `--allow-run`：允许运行子进程。请注意，子进程不在沙箱中运行，因此没有与 deno 进程相同的安全限制，请谨慎使用。
- `--config <FILE>`               Load tsconfig.json configuration file
- `--import-map <FILE>`           UNSTABLE: Load import map file
- `--no-remote`                   Do not resolve remote modules
- `--reload=<CACHE_BLOCKLIST>`    Reload source code cache (recompile TypeScript)
- `--unstable`                    Enable unstable APIs

Deno 目前发展中，API 有 stable 和 unstable 两套，要使用非稳定 API 就需要通过参数激活：

    deno run --unstable mod_which_uses_unstable_stuff.ts

使用 `--unstable` 相当于在 tsconfig.json 中配置 `{"lib":[ "deno.window", "deno.unstable" ]}`，如果需要 worker 模块，可以添加 "deno.worker"。

直接使用 -A 或 --allow-all 参数允许所有权限。


示范，如下程序如果命令行设置了相应权限，或提供 -A 所有权限，则授权 API 直接返回状态值，而不再提示用户授权：

```js
// deno run --unstable demo\permission.ts

// Permission descriptors
const desc1 = { name: "read", path: "/foo" } as const;
const desc2 = { name: "read", path: "/bar" } as const;

const status1 = await Deno.permissions.request(desc1);
// ⚠️ Deno requests read access to "/foo". Grant? [g/d (g = grant, d = deny)] g
console.log(status1);
// PermissionStatus { state: "granted" }

const status2 = await Deno.permissions.request(desc2);
// ⚠️ Deno requests read access to "/bar". Grant? [g/d (g = grant, d = deny)] d
console.log(status2);
// PermissionStatus { state: "denied" }
```

除了直接请求授权，还可以进行权限查询：

```js
// deno run --allow-read=/foo main.ts

const desc1 = { name: "read", path: "/foo" } as const;
console.log(await Deno.permissions.query(desc1));
// PermissionStatus { state: "granted" }

const desc2 = { name: "read", path: "/foo/bar" } as const;
console.log(await Deno.permissions.query(desc2));
// PermissionStatus { state: "granted" }

const desc3 = { name: "read", path: "/bar" } as const;
console.log(await Deno.permissions.query(desc3));
// PermissionStatus { state: "prompt" }
```

撤回权限 Revoke permissions，将 "granted" 降级为 "prompt" 状态。

```js
// deno run --allow-read=/foo main.ts

const desc = { name: "read", path: "/foo" } as const;
console.log(await Deno.permissions.revoke(desc));
// PermissionStatus { state: "prompt" }
```

但是，对 -A 授权方式无效，只对其它单独的授权进行撤回，并且，对部分的许可内容撤回授权也无效，会保持 "granted" 状态。

```js
// deno run --allow-read=/foo main.ts

const desc = { name: "read", path: "/foo/bar" } as const;
console.log(await Deno.permissions.revoke(desc)); // Insufficient.
// PermissionStatus { state: "granted" }

const strongDesc = { name: "read", path: "/foo" } as const;
await Deno.permissions.revoke(strongDesc); // Good.

console.log(await Deno.permissions.query(desc));
// PermissionStatus { state: "prompt" }
```

Other examples:

```js
// Global write permission.
const desc1 = { name: "write" } as const;

// Write permission to `$PWD/foo/bar`.
const desc2 = { name: "write", path: "foo/bar" } as const;

// Global net permission.
const desc3 = { name: "net" } as const;

// Net permission to 127.0.0.1:8000.
const desc4 = { name: "net", host: "127.0.0.1:8000" } as const;

// High-resolution time permission.
const desc5 = { name: "hrtime" } as const;
```

## ⚡ Web Platform APIs
1. Web Platform APIs https://deno.land/manual@v1.9.2/runtime/web_platform_apis
2. Fetch data Example https://deno.land/manual@v1.9.2/examples/fetch_data
3. 抖音开放平台 - 获取授权 https://open.douyin.com/platform/doc/6848834666171009035
4. DT抖音小姐下载 https://github.com/jimboyeah/deno-demo/blob/master/demo/douyin.ts
5. Remove opaqueredirect response type in fetch #8351 https://github.com/denoland/deno/issues/8351
6. Response.type https://developer.mozilla.org/en-US/docs/Web/API/Response/type
7. Window.location https://developer.mozilla.org/en-US/docs/Web/API/Window/location
8. Service Worker https://developers.google.cn/web/fundamentals/primers/service-workers?hl=zh-cn
9. fetch API 流式处理请求 https://web.dev/i18n/zh/fetch-upload-streaming/
9. https://www.bookstack.cn/read/webapi-tutorial/spilt.2.docs-fetch.md

Deno 目标希望依照 Web platform APIs 提供实现，如 Fetch API，而不是另开门面创建全新一套 API。这些 API 会尽量依照规范实现，并符合 Chrome 和 Firefox 浏览器的标准。

规范实现有些偏差 Spec deviations：

- Deno 的 userAgent 没有提供 cookie jar，因此，不会处理响应上的 set-cookie 标头，也不会从可见的响应头中过滤。
- 带有 manual 重定向的 fetch 会返回一个正常的基础响应，而不是 opaqueredirect 过滤响应。
- Deno 不依照 same-origin policy，因为 Deno 当前的 userAgent 没有同源的概念，也没有 cookie 容器。

这意味着 Deno 不需要防止跨源身份验证数据泄漏，因此，Deno 不实现 WHATWG fetch 规范的以下部分：

- Section 3.1. 'Origin' header.
- Section 3.2. CORS protocol.
- Section 3.5. CORB.
- Section 3.6. 'Cross-Origin-Resource-Policy' header.
- Atomic HTTP redirect handling.
- The opaqueredirect response type.

规范中的重定向 fetch 有以下三种模式：

- {redirect: "follow"} 跟随重定向。
- {redirect: "error"} 返回一个错误。
- {redirect: "manual"} 手动模式会获取到一个 opaqueredirect 过滤响应。

Fetch API 提供以下五个数据流读取器。

1. .text()：返回字符串
2. .json()：返回 JSON 对象
3. .formData()：返回 FormData 对象
4. .blob()：返回 blob 对象
5. .arrayBuffer()：返回缓冲区二进制数组 ArrayBuffer 对象

标准库提供各种相关 APIs：

- Fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch
- Blob https://developer.mozilla.org/en-US/docs/Web/API/Blob
- Console https://developer.mozilla.org/en-US/docs/Web/API/Console
- FormData https://developer.mozilla.org/en-US/docs/Web/API/FormData
- Performance https://developer.mozilla.org/en-US/docs/Web/API/Performance
- setTimeout, setInterval, clearInterval
- Streams API https://developer.mozilla.org/en-US/docs/Web/API/Streams_API
- URL https://developer.mozilla.org/en-US/docs/Web/API/URL
- URLSearchParams https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
- WebSocket https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

内建模块 API 都在程序的顶级作用域，即不使用 Deno 命名空间同时也可以在让 Deno 程序在浏览器中运行。虽然 Deno 的这些 API 并不是 100% 符合 Web 标准，但这对前端开发者依然极大的便利。

Web Platform API 示范：

    /// <reference path="../lib.deno.d.ts" />

    // deno run --allow-net fetch.ts
    // deno.exe run --allow-env --unstable --allow-net fetch.ts https://api.github.com/users/github
    Deno.args.length && fetch(Deno.args[0]).then( res => res.text() ).then(console.log);

相关的 TypeScript 类型声明文件 `lib.deno.shared_globals.d.ts` and `lib.deno.window.d.ts`，还有 workers 的类型声明文件 `lib.deno.worker.d.ts`。

示范使用 fetch 下载文件，并结合文件读取保存到本地：

```rust
  get_video(url: string, name:string, autoplay = false) {
    fetch(url).then(res => {
      return res.arrayBuffer()
    }).then(ab =>{
      let ua8 = new Uint8Array(ab);
      Deno.writeFile(name, ua8).then(val => {
        if (!autoplay) return;
        let cmd =  ["cmd", "/c", "start", name];
        let p = Deno.run({
          cmd: cmd,
        }).status();
      });
    }).catch(e => console.error("Error when to download ", url))
  }
```

Deno 执行 fetch 时，会设置类似以下头标：

```rust
CONNECT localhost:443 HTTP/1.1
Host: localhost:443
User-Agent: Deno/1.10.2
```

参考源代码 op_crates\fetch\26_fetch.js，可以指定 headers：

```js
  let url = `https://v.douyin.com/ekXrYoF/`;
  let init:RequestInit = {
    // method: "POST",
    redirect: "manual",
    headers:{
      "user-agent": "this.userAgent"
    },
    referrer: "https://www.douyin.com/"
  }
  let req = new Request(url, init);
  fetch(req).then(res =>{...});
```

```js
var resource = null;
function get(m3u8){
    var server = /.{4,5}:\/\/[^\/]+/.exec(m3u8)[0];
    return fetch(m3u8).then((res)=>{
        console.log(res, res.body);
        return res.text();
    }).then((res)=>{
        var list = [];
        var lines = res.split("\n");
        resource = res;
        for(var idx in lines){
            var it = lines[idx];
            if(!it.trim() || it.startsWith("#")) continue;
            console.log({it, server, len:lines.length});
            list.push(server+it);
        }
        return list;
    });
}
get(videoUrl).then(res=>{console.log(document.title, location.href, res);});
```



## ⚡ Location API
- Location API https://deno.land/manual@v1.9.2/runtime/location_api

Deno 支持浏览器的 location 全局属性，需要使用 CLI 命令参数 --location 来指定一个 URL，http 或 https URL。

```js
// deno run --location https://example.com/path main.ts

console.log(location.href);
// "https://example.com/path"
```

如果不指定 `--location <href>`，则访问 location 会出错。通常 Web 环境中对 location 对待赋值会跳转页面，而 Deno 没有这样的功能，尝试赋值会出错。

```js
// deno run --location https://example.com/path main.ts

location.pathname = "./foo";
// error: Uncaught NotSupportedError: Cannot set "location.pathname".

```

在命令行指定的 --location 对 Fetch API 或 Worker 模块的加载有影响，相当于 HTML `<base />` 标签：

```js
// deno run --location https://api.github.com/ --allow-net main.ts

const response = await fetch("./orgs/denoland");
// Fetches "https://api.github.com/orgs/denoland".

const worker = new Worker("./workers/hello.ts", { type: "module" });
// Fetches worker module at "https://api.github.com/workers/hello.ts".
```

如果在 fetch() 使用了相对 URL 路径，而命令行中又不指定 --location 则程序运行会出错。


## ⚡ HTTP Server APIs
- HTTP Server APIs https://deno.land/manual@v1.9.2/runtime/http_server_apis
- File server https://deno.land/manual@v1.9.2/examples/file_server
- TCP echo server https://deno.land/manual@v1.9.2/examples/tcp_echo
- HTTP Standard Library https://deno.land/std@0.97.0/http
- https://doc.deno.land/builtin/stable#Deno.listen
- https://doc.deno.land/builtin/unstable#Deno.listenDatagram

Deno 1.9+ 版本引入了原生 HTTP Server API，允许用户可以在 Deno 中创建健壮且性能良好的 Web 服务器。

目前处于 `--unstable` 运行。

```js
Deno.listen({ port: 80 })
Deno.listen({ hostname: "192.0.2.1", port: 80 })
Deno.listen({ hostname: "[2001:db8::1]", port: 80 });
Deno.listen({ hostname: "golang.org", port: 80, transport: "tcp" });
Deno.listenTls({ port: 443, certFile: "./server.crt", keyFile: "./server.key" });
```

如何使用这些 API 可以参考 Deno 标准库 HTTP 的 Server 实现。

```js
import { serve } from "https://deno.land/std@0.90.0/http/server.ts";

console.log("http://localhost:8000/");
const server = serve({ port: 8000 });

for await (const req of server) {
  req.respond({ body: "Hello World!\n" });
}
```

建立一个 Web 服务器的基本步骤：

- 创建 Deno.Listener 实例，使用 `listen`、`listenTls` 等方法；
- 通过 accept 方法监听客户端 TCP 连接请求；
- 建立 HTTP 连接服务，响应请求。

第一步，直接使用 accept 方法接收客户端 TCP 连接，如下：

```js
const server = Deno.listen({ port: 8080 });

while (true) {
  const conn = server.accept();
  if (conn) {
    // ... handle the connection ...
  } else {
    // The listener has closed
    break;
  }
}
```

也可以将 server 实例当作一个可枚举对象，用新的 for-await 语法接收客户端连接：

```js
const server = Deno.listen({ port: 8080 });

for await (const conn of server) {
    // ... handle the connection ...   
}
```

第二步，建立 TCP 连接后，就可以进入 HTTP 请求处理，使用 `serveHttp` 方法：

```js,ignore
let handle = async () => {
  const httpConn = Deno.serveHttp(conn);
  while (true) {
    const requestEvent = await httpConn.nextRequest();
    if (requestEvent) {
      // ... handle requestEvent ...
    } else {
      // the connection has finished
      break;
    }
  }
};
```

同样，HTTP 连接实例也是可枚举对象：

```js,ignore
async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    // ... handle requestEvent
  }
}
```

同一个 TCP 连接可以提供多次的请求服务，这是 HTTP 的长连接方式。

然后，对 `RequestEvent` 进行处理：

```js
  export interface RequestEvent {
    readonly request: Request;
    respondWith(r: Response | Promise<Response>): Promise<void>;
  }
```

完整的程序如下：


```js,ignore
console.log("Server on http://localhost:8080")
const server = Deno.listen({ port: 8080 });

async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    // ... handle requestEvent
    const url = new URL(requestEvent.request.url);
    console.log(`path: ${url.pathname}`);
    await requestEvent.respondWith(new Response("hello world", {
      status: 200,
    }));
  }
}

for await (const conn of server) {
  handle(conn).catch(err => {console.log(err.message)});
}
```

要建立 UDP 连接，使用 listenDatagram 方法，以下方法需要 `--unstable`。

```js
// function Deno.listen(options: UnixListenOptions & { transport: "unix" }): Listener
Deno.listen({ path: "/foo/bar.sock", transport: "unix" })

// function Deno.listenDatagram(options: ListenOptions & { transport: "udp" }): DatagramConn
Deno.listenDatagram({port: 80, transport: "udp"});
Deno.listenDatagram({hostname: "golang.org", port: 80, transport: "udp"});

// function Deno.listenDatagram(options: UnixListenOptions & { transport: "unixpacket" }): DatagramConn
Deno.listenDatagram({path: "/foo/bar.sock", transport: "unixpacket"});
```

Deno 目录对 HTTPS 支持还在更新，SNI - Server Name Indication 也没有提供，似乎通过 hostname 属性指定。一个主机可能存在多个 HTTPS 服务，在握手过程开始时，客户端可以通过 SNI 告诉服务器要连接的主机名称。这允许服务器在相同的 IP 地址上呈现不同 Web 服务的证书。

HTTP/2 的支持，对 Deno Runtime 是透明的，通常 HTTP/2 连接需要在 TLS 连接的协商过程 ALPN - Application Layer Protocol Negotiation 完成，这就要在 alpnProtocols 属性中指定 "h2"。

```js
const server = Deno.listenTls({
  port: 8443,
  certFile: "localhost.crt",
  keyFile: "localhost.key",
  alpnProtocols: ["h2", "http/1.1"],
});
```

列表中指定的协议依次实行，实践中只有 HTTP/2 和 HTTP/1.1 两个协议，对应 "h2" 和 "http/1.1"。

Deno 当前不支持通过 Upgrade 头标将 HTTP/1.1 明文连接升级为 HTTP/2 cleartext 连接，所以 HTTP/2 支持仅通过 TLS/HTTPS 连接支持。

使用 CURL 工具测试 HTTPS 连接可以获得更多的提示性信息，因为使用的是自签证书，所以需要使用 `--ssl-no-revoke` 选项跳过证书有效检查：

```sh
$ curl https://localhost:443
curl: (35) schannel: SNI or certificate check failed: SEC_E_WRONG_PRINCIPAL (0x80090322) -  
目标主要名称不正确。

$ curl https://www.localhost.com:443
curl: (35) schannel: next InitializeSecurityContext failed: Unknown error (0x80092012) - 吊 
销功能无法检查证书是否吊销。

$ curl -i --ssl-no-revoke https://www.localhost.com
HTTP/1.1 200 OK
content-type: text/plain;charset=UTF-8
content-length: 11
date: Sun, 30 May 2021 15:02:57 GMT

hello world
```

Deno 还是会有警告信息：

```js
TLS alert received: Message {
    typ: Alert,
    version: TLSv1_3,
    payload: Alert(
        AlertMessagePayload {
            level: Fatal,
            description: CertificateUnknown,
        },
    ),
}
```


Deno 支持 WebSockets，可以将 HTTP 请求升级为 WebSocket，使用 HTTP servers 就可以处理 WebSocket endpoints。WebSocket 请求包与常规 HTTP 请求的差别在于：WebSocket 包头部包含一个 upgrade 标记，服务探测到此标记后就可以将连接升级为 WebSocket 连接。

目前 WebSockets 只支持 HTTP/1.1，在执行 `Deno.upgradeWebSocket(req)` 升级为 WebSocket，创建的连接就不能用于 HTTP 流量。

```js
async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    await requestEvent.respondWith(handleReq(requestEvent.request));
  }
}

function handleReq(req: Request): Response {
  const upgrade = req.headers.get("upgrade") || "";
  if (upgrade.toLowerCase() != "websocket") {
    return new Response("request isn't trying to upgrade to websocket.");
  }
  const { socket, response } = Deno.upgradeWebSocket(req);
  socket.onopen = () => console.log("socket opened");
  socket.onmessage = (e) => {
    console.log("socket message:", e.data);
    socket.send(new Date().toString());
  };
  socket.onerror = (e) => console.log("socket errored:", e);
  socket.onclose = () => console.log("socket closed");
  return response;
}
```


## ⚡ Web Worker API
1. https://deno.land/manual@v1.9.2/runtime/workers
2. https://deno.land/api@v1.36.1#Web_APIs
2. https://deno.land/api@v1.36.1?#DOM_APIs
2. https://deno.land/api@v1.36.1?#Web_Workers
3. https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker
4. https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis
4. https://deepu.tech/concurrency-in-modern-languages-ts/

JavaScript 是单线程程序，因此多线程的唯一实现方法是创建引擎的多个实例，因此 TypeScript 也是如此。

为了实现多线程编程，ECMAScript 脚本规范引入了 Worker。JavaScript 中的 Web Worker API 和 NodeJS 中的类似支持，Deno 也支持 Web Worker API，每一个 Worker 都运行于独立的专用线程中。Worker 的使用可以实现较高的并发处理能力，因此可以用来处理一些大规模的计算、数据处理任务等等。

可惜 Deno 还没有提供类似于 NodeJS worker_threads 或集群模块的功能，使用 web worker 会使事情变得更加复杂，因为 Deno 只支持模块作为worker，这意味着只能从 worker 调用 JS/TS 文件。因此，NodeJS 中可能存在的一些高级多线程概念在 Deno 中还不可行。同样值得注意的是，Deno 支持开箱即用的 Web Assembly，因此为使用 Rust 等语言的一些高级多线程铺平了道路。

NodeJS 和 Deno 都是重度支持非阻塞和异步编程，non-blocking and asynchronous，Deno改进概念使异步 API 更干净、更易于使用。Deno 异步基于 Promises API 而不是使用回调，这与 NodeJS 相比是一个区别。Deno 甚至支持像顶级等待这样的概念，这样可以减少混乱并使代码更干净。

Worker 是新 Web 规范引入的多线程实现，当前 Deno 只支持 `module` 工作线程，创建实例时需要指定 `type: "module"` 选项。

在主要创建 Worker，使用相对位置需要使用 `--location <href>` 命令行选项，也可以使用 `URL` 对象和 `import.meta.url` 包含的路径信息。

运行需要读取 Worker 脚本，所以需要 `--allow-read`，如果使用远程脚本由指定 `--allow-net` 权限。

```rust
// Good
let url = new URL("./worker.js", import.meta.url).href
new Worker(url, { type: "module" });

// Bad
new Worker(url);
new Worker(url, { type: "classic" });
new Worker("./worker.js", { type: "module" });
```

当所有 Worker 实例完成作业执行 close() 或者
terminate()，或者主线程终止，整个程序结束运行。

Starting in v1.22 the Deno namespace is available in worker scope by default. To enable the namespace in earlier versions pass deno: { namespace: true } when creating a new worker.

Starting in v1.23 `Deno.exit()` no longer exits the process with the provided exit code. Instead is an alias to `self.close()`, which causes only the worker to shutdown. This better aligns with the Web platform, as there is no way in the browser for a worker to close the page.

给工作线程指定权限，或开放 Deno 命令空间，这需要 `--unstable` 支持：

```rust
  let url = new URL("./worker.js", import.meta.url).href;
  let worker = new Worker(url, {
    type: "module",
    deno: {
      namespace: true,
      // permissions: "none",
      // permissions: "inherit",
      permissions: {
        net: [
          "https://deno.land/",
        ],
        read: [
          new URL("./file_1.txt", import.meta.url),
          new URL("./file_2.txt", import.meta.url),
        ],
        write: false,
        env: false,
        hrtime: false,
        plugin: false,
        run: "inherit",
      },
    },
  });
```

示范，在同一个 worker.ts 脚本中实主模块和 worker 模块：

```js
let canRead = await Deno.permissions.query({ 
  name: "read",
  path: "./worker.ts" 
});

// if(import.meta.main && Deno.args[0]=="main"){
if(canRead.state==="granted"){
  let opt:WorkerOptions = { 
    type: "module",
    deno: {
      namespace: true,
      permissions: "none",
    }
  };
  let worker = new Worker(new URL("./worker.ts", import.meta.url).href, opt);
  worker.onmessage = ( ev:MessageEvent ) =>{
    let {type, data:message} = ev;
    console.log({type,message});
    worker.postMessage ({message:"roger that: "+ev.data});
    // worker.terminate();
  }
  worker.addEventListener("error", (event) => console.error(event));
  worker.addEventListener("message", (event) => (event));

  await (function Delay(ms:number):Promise<void> {
    return new Promise((res)=>{
      setTimeout(res, ms);
    })
  })(100);
  worker.postMessage({ message: "Welcome to Deno!" });
}else{
  let worker: Worker = self as any;
  worker.onmessage = async (e:MessageEvent) => {
    const msg = e.data;
    console.log("Roger that:", msg);
    worker.postMessage("Hi there~");
    worker.close();
  };
  // worker.postMessage("initialized!");
}
```

这不能使用 import.meta.main 来判断是否在运行主模块，因为对于同一个文件，如果作为主模块运行，那么后面再创建新进程运行它还是主模块。这里的脚本利用是否授予了读取权来判断当前的脚本运行是否在入口状态。

    deno run -A --unstable src\worker.ts main

如果通过命令行参数来判断，则要在执行 worker 线程时，移除相应的命令行参数才行。

创建 Worker 实例后，一般不在主线程中直接发送消息，因为此时 worker 实例不一定准备好侦听消息，可以由 worker 先发送初始化的状态消息。示范中也在主线程中使用了异步等待，给定了 100ms 时间等待 worker 的初始化工作。

MessageEvent 继承了 Event 类型，其中有两和事件目标相关的只读属性，分别是事件来源（target）和事件处理方（currentTarget），它们都是 Worker 对象：

    readonly currentTarget: EventTarget | null
    Returns the object whose event listener's callback is currently being invoked.

    readonly target: EventTarget | null
    Returns the object to which event is dispatched (its target).

另外，将 worker 代码与主模块一起写还有命令空间识别的问题，主模块的 self 是 global 命令空间的 Window 实例。而 worker 是 WorkerGlobalScope 实例，但是不能直接转换为这个类型，因为在主模块运行时转换会失败，需要将 self 转换为 any 避免类型检查。

```js
var self: Window & typeof globalThis
declare var self: WorkerGlobalScope & typeof globalThis;
```

可以打印 globalThis 对象的构造器来确定类型：

```js
console.log(self.constructor);
// object [Function: Window]
// object [Function: DedicatedWorkerGlobalScope]
```

所有顶级对象在的初始化代码定义在 @extensions\web\04_global_interfaces.js，设置在 @runtime\js\99_main.js。

引入 globalThis 旨在通过定义一个标准的全局属性来整合日益分散的访问全局对象的方法。该提案目前处于第四阶段，这意味着它已经准备好被纳入 ES2020 标准。所有流行的浏览器，包括 Chrome 71+、Firefox 65+和 Safari 12.1+，都已经支持这项功能。

```js
// Web Browser
console.log(globalThis); // => Window {...}
// node.js
console.log(globalThis); // => Object [global] {...}
// web worker
console.log(globalThis); // => DedicatedWorkerGlobalScope {...}
```

Web Workers API 没有 Window 对象，因为它没有浏览上下文。相反，它提供 WorkerGlobalScope 接口，其中包含类似 window 携带的数据。


## ⚡ WebAssembly
- Deno Loves WebAssembly https://www.infoq.com/articles/deno-loves-webassembly/
- Deno Loves WebAssembly [译] https://segmentfault.com/a/1190000023325789
- The AssemblyScript Project https://github.com/AssemblyScript/assemblyscript
- 认识 WebAssembly https://www.cnblogs.com/jixiaohua/p/10425805.html
- https://www.smashingmagazine.com/2017/05/abridged-cartoon-introduction-webassembly/
- http://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript
- https://emscripten.org/docs/getting_started/downloads.html
- https://emscripten.org/docs/optimizing/Optimizing-WebGL.html
- https://github.com/emscripten-core/emscripten/blob/master/tests/hello_world_sdl.cpp
- https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm
- https://webassembly.org/getting-started/developers-guide/
- https://github.com/golang/go/wiki/WebAssembly#getting-started
- WebAssembly System Interface https://nodejs.org/docs/latest-v12.x/api/wasi.html
- Rust Wasm https://rustwasm.github.io/docs/wasm-pack/introduction.html
- asm.js 和 Emscripten 入门教程 http://www.ruanyifeng.com/blog/2017/09/asmjs_emscripten.html

2012 年，Mozilla 的工程师 Alon Zakai 在研究 LLVM 编译器时突发奇想，参考 3D 游戏使用 C/C++ 语言，并且尝试编译成 JavaScript 代码，为了实现这个目标，为此专门做了一个编译器项目 Emscripten，编译的是一种叫做 asm.js 的 JavaScript 变体，是一个子集。

C/C++ 编译成 JS 有两个最大的困难：

- C/C++ 是静态类型语言，而 JS 是动态类型语言。
- C/C++ 是手动内存管理，而 JS 依靠垃圾回收机制。

asm.js 就是为了解决这两个问题而设计的：它的变量一律都是静态类型，并且取消垃圾回收机制。除了这两点，它与 JavaScript 并无差异，尽管它可以大大提高 JS 运行速度，但是它并没有流行起来。


WebAssembly 是一种可以使用非 JavaScript 编程语言编写代码并且能在浏览器上优化运行的技术方案。

由 Mozilla、谷歌、微软和苹果发起的，一种面向 Web 的二进制格式。可以作为任何编程语言的编译目标，使应用程序可以运行在浏览器或其它代理中。

有人将其称为字节码，但 wasm 不是传统意义上的字节码，JavaScript 创始人 Brendan Eich 指出：“WebAssembly 实际上是一个经过压缩的 AST 编码，而不是一堆字节码。小声点，不要告诉任何人。如果愿意，你还是可以称它为字节码。”

WebAssembly 对其指令集架构 ISA - Instructions Set Architecture 和二进制编码有一些要求和目标：

- 可移植性：对于每个机器架构，ISA 必须相同。
- 稳定性：ISA 和二进制编码不能随着时间的推移而改变（或只能以可向后兼容的方式更改）。
- 小编码：程序的表示应尽可能小，以便通过互联网进行传输。
- 快速解码：为了快速启动程序，二进制格式应该快速解压缩和解码。
- 快速编译：ISA 在编译上应该够快（适合于 AOT 或 JIT 编译），以使程序能够快速启动。
- 最小非确定性：程序的行为应尽可能可以预测和具备确定性（在每个架构上应该是相同的，上述提到的可移植性要求的一种更强的形式）。

Deno 支持与浏览器一样的 WebAssembly 接口，以下测试代码中 wasm 导出 main() 函数，它输出一个数值 42：

```js
const wasmCode = new Uint8Array([
  0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127,
  3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0,
  5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145,
  128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97,
  105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0,
  65, 42, 11
]);
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const main = wasmInstance.exports.main as CallableFunction
console.log(main().toString());
```

JavaScript 脚本整个运行周期中花费在特定任务上的时间大概分配如下：

- 10% Parsing - 源码转换成解释器可以运行的东西所用的事情。
- 30% Compiling + optimizing - 花费在基础编译和优化编译上的时间。
- 10% Re-optimizing - 当预先编译优化的代码不能被优化的情况下，JIT 将这些代码重新优化，不能重新优化就丢给基础编译去做。
- 40% Execution - 执行代码的过程。
- 5% Garbage collection - 清理内存的时间。

早期的 JavaScript 的执行只有一个解释器运行 JavaScript 代码，执行速度相当缓慢。后来 JITs 的引入，大大提升了执行效率。

了解一下编译方式：

- Dynamic Compilation 动态编译指在运行时进行编译，相对事前编译 AOT - Ahead-of-time，也叫静态编译 Static Compilation。
- JIT - Just-in-Time 即时编译狭义来说是在代码第一次被执行时进行编译，是动态编译的一种特例。
- Adaptive dynamic Compilation 自适应动态编译，它先让程序以某种式运行起来，收集一些信息之后再做动态编译，这样的编译可以更加优化。

从代码量大小来年，即使使用 gzip 压缩 JavaScript 代码，等效的 WebAssembly 文件需要仍然更少，因为其设计的体积更小，可以以二进制形式表示。

JavaScript 源码下载到浏览器执行前，需要解析为抽象语法树（AST）。通常浏览器解析源码是懒惰的，浏览器首先会解析他们真正需要的东西，没有及时被调用的函数只会被创建成存根。在这个过程中，AST 被转换为脚本引擎的中间表示，称为字节码。

相反，WebAssembly 不需要被转换，因为它已经是字节码了，它仅仅需要被解码并确定没有任何错误。

作为动态类型语言 JavaScript 是在执行代码期间编译的，相同的代码在多次执行中都有可能都因为代码里含有不同的类型数据被重新编译，重复浪费和消耗时间。

相反，WebAssembly 与机器代码更接近，这是速度更快的一个原因：

- 编译器不需要在运行代码时花费时间去观察代码中的数据类型，在开始编译时做优化。
- 编译器不需要去每次执行相同代码中数据类型是否一样。
- 更多的优化在最前面的 LLVM - LOW Level Virtual Machine 就已经完成了，所以编译和优化的工作很少。

传统编译器分三个阶段：

- 前端（Frontend）
- 优化器（Optimizer）
- 后端（Backend）

前端负责分析源代码，可以检查语法级错误，并构建针对语言的抽象语法树（AST）；抽象语法树可以进一步转换为优化，最终转为新的表示方式，然后再交给让优化器和后端处理；最终由后端生成可执行的机器码。

LLVM 也分三个阶段，但是设计上略微的有些区别，不同的就是对于不同的语言它都提供了同一种中间表示：

- 前端可以使用不同的编译工具对代码文件做词法分析以形成抽象语法树 AST，再转换成中间表示 IR - Intermediate Representation；
- 中间部分的优化器只对 IR 操作，通过一系列的 pass 对 IR 做优化；
- 后端负责将优化好的 IR 解释成对应平台的机器码。

LLVM 的优点在于 IR 代码编写良好，而且不同的前端语言最终都转换成同一种的 IR。LLVM 目标是不同类型的机器码，面对不同的机器使用的不同底层结构，希望能够将任何一种高级编程语言转换为任何一种汇编语言。这样做的一个方法是创建一大堆不同的翻译器，可以从任意一种语言转换成任意一种汇编语言，但直接这样做很低效。大多数编译器会在高级语言和汇编语言之间多加一层，编译器将把高级语言翻译成一种更低级的语言，但比机器码的等级高，这就是`中间代码` IR。

LLVM 编译一个源文件的过程：预处理 -> 词法分析 -> Token -> 语法分析 -> AST -> 代码生成 -> LLVM IR -> 优化 -> 生成汇编代码 -> Link -> 目标文件

有时 JIT 抛出一个优化版本的代码，然后重新优化。

JIT 基于运行代码的假设不正确时，会发生这种情况。例如，当进入循环的变量与先前的迭代不同时，或者在原型链中插入新函数时，会发生重新优化。

在 WebAssembly 中，类型是明确的，因此 JIT 不需要根据运行时收集的数据对类型进行假设，这意味着它不必经过重新优化的周期。

大多数开发者并不知道 JIT 的内部原理，即使是那些了解 JIT 内部原理的开发人员，也很难实现最佳的方案。有很多时候，人们为了使他们的代码更易于阅读会阻碍编译器优化代码。

正因如此，执行 WebAssembly 代码通常更快，有些必须对 JavaScript 做的优化不需要用在 WebAssembly 上进行。

另外，WebAssembly 是为编译器设计的，意思是，它是专门给编译器来阅读，并不是当做编程语言让程序员去写的。

WebAssembly 和汇编语言是有一些不同的，他是一个概念机上的机器语言，WebAssembly 指令称为虚拟指令。它比 JavaScript 代码更快更直接的转换成机器代码，但它们不直接和特定硬件的特定机器代码对应。

大多数 WebAssembly 模块开发者使用 C 和 Rust 编写代码，然后编译成 WebAssembly，也有其他创建 WebAssembly 模块的途径。

安装好 Rust 环境之后仍然需要一个 wasm-pack 工具包，可以使用模板快速创建一个 wasm 项目：

    cargo install wasm-pack
    cargo generate --git https://github.com/rustwasm/wasm-pack-template
    wasm-pack build

使用 Emscripten SDK 编写 wasm 程序：

    choco install emscripten
    emcc -O2 demo.cpp
    emcc tests/hello_world_sdl.cpp -o hello.html

或者使用 Golang：

    # $ GOOS=js GOARCH=wasm go build -o main.wasm
    package main

    import "fmt"

    func main() {
        fmt.Println("Hello, WebAssembly!")
    }

编写测试代码：

    /*
     * Copyright 2011 The Emscripten Authors.  All rights reserved.
     * Emscripten is available under two separate licenses, the MIT license and the
     * University of Illinois/NCSA Open Source License.  Both these licenses can be
     * found in the LICENSE file.
     */

    #include <stdio.h>

    int main() {
      printf("hello, world!\n");
      return 0;
    }

使用 emcc 命令编译生成 a.out.js 和 a.out.wasm，然后可以使用 Node 去执行脚本文件。

在 JavaScript 中加载一个 .wasm 文件，它是 WebAssembly 组件，它可以被 JavaScript 加载：

    function fetchAndInstantiate(url, importObject){
        return fetch(url).then(response =>
            response.arrayBuffer()
        ).then(bytes =>
            WebAssembly.instantiate(bytes,importObject)
        ).then(results =>
            results.instance
        );
    }


## ⚡ IPC 
- Support for Named Pipes in Deno.connect #10244 https://github.com/denoland/deno/issues/10244

基于 socket 有两种 IPC 方案：

- [UNSTABLE] The unix socket transport
- [STABLE] The TCP transport

Connects to the hostname (default is "127.0.0.1") and port on the named transport (default is "tcp"), and resolves to the connection (Conn).

```js
Deno.connect(options: ConnectOptions | UnixConnectOptions): Promise<Conn>

const conn1 = await Deno.connect({ port: 80 });
const conn2 = await Deno.connect({ hostname: "192.0.2.1", port: 80 });
const conn3 = await Deno.connect({ hostname: "[2001:db8::1]", port: 80 });
const conn4 = await Deno.connect({ hostname: "golang.org", port: 80, transport: "tcp" });
const conn5 = await Deno.connect({ path: "/foo/bar.sock", transport: "unix" });
```

Requires allow-net permission for "tcp" and allow-read for "unix".

```js
// lib.deno.ns.d.ts
export interface ConnectOptions {
  /** The port to connect to. */
  port: number;
  /** A literal IP address or host name that can be resolved to an IP address.
   * If not specified, defaults to `127.0.0.1`. */
  hostname?: string;
  transport?: "tcp";
}

// lib.deno.unstable.d.ts
export interface UnixConnectOptions {
  transport: "unix";
  path: string;
}
```


## ⚡ Tasks
- https://doc.deno.land/builtin/stable#queueMicrotask
- https://doc.deno.land/builtin/stable#setInterval

创建 microtask

```rust
queueMicrotask(() => { console.log('This event loop stack is complete'); });
```

创建 Timers queue，包含 setTimeout 超时回调和 setInterval 间隔回调

```rust
// function setInterval(cb: (...args: any[]) => void, delay?: number, ...args: any[]): number
// Repeatedly calls a function , with a fixed time delay between each call.
// Outputs 'hello' to the console every 500ms
setInterval(() => { console.log('hello'); }, 500);

// function setTimeout(cb: (...args: any[]) => void, delay?: number, ...args: any[]): number
// Sets a timer which executes a function once after the timer expires. Returns an id which may be used to cancel the timeout.
setTimeout(() => { console.log('hello'); }, 500);
```

deno:runtime/js/11_timers.js 包含了定时器队列处理方法 handleTimerMacrotask。


## ⚡ encode/decode & JSON
- https://doc.deno.land/builtin/stable#TextEncoder
- https://doc.deno.land/builtin/stable#TextDecoder
- https://deno.land/api@v1.36.1#Encoding_API

deno_src\core\core.js 有两个非公开的方法处理 JSON 与 Uint8Array 的转换：

```js
  // Returns Uint8Array
  function encodeJson(args) {
    const s = JSON.stringify(args);
    return core.encode(s);
  }

  function decodeJson(ui8) {
    const s = core.decode(ui8);
    return JSON.parse(s);
  }
```

deno_src\core\bindings.rs 提供了 core.encode 和 core.decode 方法的绑定专用于 UTF-8 编码：

```js
fn encode(
  scope: &mut v8::HandleScope,
  args: v8::FunctionCallbackArguments,
  mut rv: v8::ReturnValue,
){...

fn decode(
  scope: &mut v8::HandleScope,
  args: v8::FunctionCallbackArguments,
  mut rv: v8::ReturnValue,
){...
```

deno:op_crates/web/08_text_encoding.js 提供 TextDecoder/TextEncoder 字符编码对象实现，内部除了使用 core.encode/decode 方法，还另外提供了 Utf16ByteDecoder Big5Decoder gb18030Decoder 等查表编码转换对象。

    !["utf-16le", "utf-16be", "utf-8", "big5", "gbk", "gb18030"].includes(
      encoding,
    )

此外，还有 Base64/Uint8Array 的转换方法 atob/btoa。

```js
// function atob(s: string): string
// Decodes a string of data which has been encoded using base-64 encoding.
console.log(atob("aGVsbG8gd29ybGQ=")); // outputs 'hello world'

// function btoa(s: string): string
// Creates a base-64 ASCII encoded string from the input string.
console.log(btoa("hello world"));  // outputs "aGVsbG8gd29ybGQ="
```



## ⚡ Deno.run & Process
- https://doc.deno.land/builtin/stable#Deno.run
- https://doc.deno.land/builtin/stable#Deno.Process
- https://deno.land/manual@v1.8.1/examples/subprocess

API:

    function Deno.run(opt: T): Process<T>

    declaration file: \cli\dts\lib.deno.ns.d.ts

Spawns new subprocess.  RunOptions must contain at a minimum the `opt.cmd`, 
an array of program arguments, the first of which is the binary.

```js
// create subprocess
const p = Deno.run({
  cmd: ["echo", "hello"],
  env: {
    PLUGIN_URL: "./target/release",
    DEBUG: "true",
  },
  stdout: "piped",
});


// await its completion
// await p.status();
const rawOutput:Uint8Array = await p.output();
// let msg = String.fromCharCode.apply(null, rawOutput as any);
let msg = new TextDecoder("utf-8").decode(rawOutput);
console.log(msg, "done!");
```

Subprocess uses same working directory as parent process unless `opt.cwd` is specified.

Environmental variables for subprocess can be specified using `opt.env` mapping.

By default subprocess inherits stdio of parent process. To change that
`opt.stdout`, `opt.stderr` and `opt.stdin` can be specified independently -
they can be set to either an rid of open file or set to "inherit" "piped"
or "null":

- `"inherit"` 默认值，子进程继承父进程的 I/O 文件描述符；
- `"piped"` 新管道连接父进程与子进程。
- `"null"` 忽略流数据，相当将流导向到 `/dev/null`。

Details of the spawned process are returned.

Requires `allow-run` permission. 


```js
if(import.meta.main && Deno.args[0] == "main"){
  // let cmd = ["echo", "hello"];
  let cmd = ["deno", "run", "-A", "--unstable", Deno.mainModule];
  const p = Deno.run({ cmd, stderr: 'piped', stdout: 'piped' });
  const [status, stdout, stderr] = await Promise.all([
  p.status(),
  p.output(),
  p.stderrOutput()
  ]);
  p.close();

  let msg = new TextDecoder("utf-8").decode(stdout);
  let err = new TextDecoder("utf-8").decode(stderr);
  console.log({status, main: import.meta.main, msg, err});
}else{
  console.log("Hello", import.meta.main);
  console.error("Ooh!");
  Deno.write(Deno.stdout.rid, new TextEncoder().encode("stdout..."));
  Deno.write(Deno.stderr.rid, new TextEncoder().encode("stderr..."));
}
```
输出：

    {
      status: { success: true, code: 0 },
      main: true,
      msg: "Hello true\nstdout...",
      err: "Check path/to/demos/src/stdio.ts\nOoh!\nstderr..."
    }

参考标准 I/O 对象：

```js
console.log(Deno.resources());
// { 0: "stdin", 1: "stdout", 2: "stderr" }
Deno.openSync('../test.file');
console.log(Deno.resources());
// { 0: "stdin", 1: "stdout", 2: "stderr", 3: "fsFile" }

const Deno.stderr: Writer & WriterSync & Closer & { rid: number }
// A handle for stderr.

const Deno.stdin: Reader & ReaderSync & Closer & { rid: number }
// A handle for stdin.

const Deno.stdout: Writer & WriterSync & Closer & { rid: number }
// A handle for stdout.
```


# 🚩 Testing
- Testing https://deno.land/manual@v1.8.1/testing
- STD testing https://deno.land/std@0.90.0/testing#usage
- Web Platform Test https://deno.land/manual@v1.9.2/contributing/web_platform_tests

Deno 集成测试功能，测试脚本命名规则 `{*_,*.,}test.{js,mjs,ts,jsx,tsx}`。

运行测试命令：

    # Run all tests in the current directory and all sub-directories
    deno test

    # Run all tests in the util directory
    deno test util/

    # Run just my_test.ts
    deno test my_test.ts

    # filter out
    deno test --filter "test" tests/
    deno test --filter "/test-*\d/" tests/

    # Failing fast
    deno test --fail-fast

    # Collect your coverage profile with deno test --coverage=<output_directory>
    deno test --coverage=cov_profile --unstable

Resources 也就是 RID 是 Deno 版本的文件描述符，就是一个关联了打开的 files, sockets 等资源的整数符号。

    console.log(Deno.resources());
    // { 0: "stdin", 1: "stdout", 2: "stderr" }
    Deno.close(0);
    console.log(Deno.resources());
    // { 1: "stdout", 2: "stderr" }

Deno 与 Linux 之间的模拟：

    ┌─────────────────────────────────┬────────────────────────┐
    │              Linux              │          Deno          │
    ├─────────────────────────────────┼────────────────────────┤
    │ Processes                       │ Web Workers            │
    │ Syscalls                        │ Ops                    │
    │ File descriptors (fd)           │ Resource ids (rid)     │
    │ Scheduler                       │ Tokio                  │
    │ Userland: libc++ / glib / boost │ https://deno.land/std/ │
    │ /proc/$$/stat                   │ Deno.metrics()         │
    │ man pages                       │ deno types             │
    └─────────────────────────────────┴────────────────────────┘

Deno 内部有一个 Metrics 来计数各种统计信息：


    console.table(Deno.metrics())
    ┌─────────────────────────┬────────┐
    │          (idx)          │ Values │
    ├─────────────────────────┼────────┤
    │      opsDispatched      │   0    │
    │    opsDispatchedSync    │   0    │
    │   opsDispatchedAsync    │   0    │
    │ opsDispatchedAsyncUnref │   0    │
    │      opsCompleted       │   0    │
    │    opsCompletedSync     │   0    │
    │    opsCompletedAsync    │   0    │
    │ opsCompletedAsyncUnref  │   0    │
    │    bytesSentControl     │   0    │
    │      bytesSentData      │   0    │
    │      bytesReceived      │   0    │
    └─────────────────────────┴────────┘

断言方法参考：

- `equal()` - Deep comparison function, where actual and expected are compared deeply, and if they vary, equal returns false.
- `assert()` - Expects a boolean value, throws if the value is false.
- `assertEquals()` - Uses the equal comparison and throws if the actual and expected are not equal.
- `assertNotEquals()` - Uses the equal comparison and throws if the actual and expected are equal.
- `assertStrictEquals()` - Compares actual and expected strictly, therefore for non-primitives the values must reference the same instance.
- `assertStringIncludes()` - Make an assertion that actual includes expected.
- `assertMatch()` - Make an assertion that actual match RegExp expected.
- `assertNotMatch()` - Make an assertion that actual not match RegExp expected.
- `assertArrayIncludes()` - Make an assertion that actual array includes the expected values.
- `assertObjectMatch()` - Make an assertion that actual object match expected subset object
- `assertThrows()` - 期待被测函数抛出异常。
- `assertThrowsAsync()` - 期待被测函数异步地抛出异常，返回一个 Promise rejected。
- `unimplemented()` - Use this to stub out methods that will throw when invoked.
- `unreachable()` - Used to assert unreachable code.


## ⚡ Test Case

结合 Assertions 模块提供的功能编写测试脚本：

```
import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.90.0/testing/asserts.ts";

Deno.test("hello world", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
  assertArrayIncludes([1, 2, 3, 4, 5, 6], [3], "Expected 3 to be in the array");
});

// Simple name and function, compact form, but not configurable
Deno.test("hello world #1", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

// Fully fledged test definition, longer form, but configurable (see below)
Deno.test({
  name: "hello world #2",
  fn: () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
});
```

## ⚡ Test definition filtering

可以定义过滤条件，在指定条件成立时忽略测试。

```
Deno.test({
  name: "do macOS feature",
  ignore: Deno.build.os !== "darwin",
  fn() {
    doMacOSFeature();
  },
});

// Filtering in (Only run these tests)
Deno.test({
  name: "Focus on this test only",
  only: true,
  fn() {
    testComplicatedStuff();
  },
});
```

## ⚡ Async functions

```
import { delay } from "https://deno.land/std@0.90.0/async/delay.ts";

Deno.test("async hello world", async () => {
  const x = 1 + 2;

  // await some async task
  await delay(100);

  if (x !== 3) {
    throw Error("x should be equal to 3");
  }
});
```

## ⚡ Resource and async op sanitizers

测试中创建的资源会自动关闭，以避免资源泄露，可以对其进行配置。

如下禁止资源清理：

```
Deno.test({
  name: "leaky test",
  fn() {
    Deno.open("hello.txt");
  },
  sanitizeResources: false,
  sanitizeOps: false,
});
```

Exit sanitizer

```
Deno.test({
  name: "false success",
  fn() {
    Deno.exit(0);
  },
  sanitizeExit: false,
});

Deno.test({
  name: "failing test",
  fn() {
    throw new Error("this test fails");
  },
});
```


压力测试：

```
import {
  bench,
  runBenchmarks,
} from "https://deno.land/std@0.90.0/testing/bench.ts";

bench(function forIncrementX1e9(b): void {
  b.start();
  for (let i = 0; i < 1e9; i++);
  b.stop();
});

runBenchmarks();
```

## ⚡ Using assertThrows()

```
Deno.test("doesThrow", function (): void {
  assertThrows((): void => {
    throw new TypeError("hello world!");
  });
  assertThrows((): void => {
    throw new TypeError("hello world!");
  }, TypeError);
  assertThrows(
    (): void => {
      throw new TypeError("hello world!");
    },
    TypeError,
    "hello",
  );
});

// This test will not pass.
Deno.test("fails", function (): void {
  assertThrows((): void => {
    console.log("Hello world");
  });
});
```


## ⚡ Using assertThrowsAsync():

```
Deno.test("doesThrow", async function (): Promise<void> {
  await assertThrowsAsync(
    async (): Promise<void> => {
      throw new TypeError("hello world!");
    },
  );
  await assertThrowsAsync(async (): Promise<void> => {
    throw new TypeError("hello world!");
  }, TypeError);
  await assertThrowsAsync(
    async (): Promise<void> => {
      throw new TypeError("hello world!");
    },
    TypeError,
    "hello",
  );
  await assertThrowsAsync(
    async (): Promise<void> => {
      return Promise.reject(new Error());
    },
  );
});

// This test will not pass.
Deno.test("fails", async function (): Promise<void> {
  await assertThrowsAsync(
    async (): Promise<void> => {
      console.log("Hello world");
    },
  );
});
```


# 🚩 Tools
- https://deno.land/manual@v1.9.2/tools

Deno 集成 JavaScript & TypeScript 的工具：

- `deno bundle` 打包输出到一个文件；
- `deno compile` 编译可执行程序 compiling executables
- `deno install` 安装程序到本地
- `deno info` 依赖探测 dependency inspector，也可以用来查看本地缓存目录信息
- `deno doc` 文档生成，支持 JSDOC，documentation generator 
- `deno fmt a.ts formated.ts` 执行代码格式化 formatter 
- `deno repl` 交互式的编程环境 REPL - Read-eval-print-loop
- `deno test` 执行代码测试 test runner
- `deno lint --unstable` 执行集成的 code linter

## ⚡ Script installer

Deno 提供的脚本安装工具 `deno install` 就像 Node 提供的 npm 安装命令，可以很方便地安装 CLI 工具命令。 to easily install and distribute executable code.

`deno install [OPTIONS...] [URL] [SCRIPT_ARGS...]` will install the script
available at `URL` under the name `EXE_NAME`.

This command creates a thin, executable shell script which invokes `deno` using
the specified CLI flags and main module. It is placed in the installation root's
`bin` directory.

例如:

```sh
$ deno install --allow-net --allow-read https://deno.land/std@0.90.0/http/file_server.ts
[1/1] Compiling https://deno.land/std@0.90.0/http/file_server.ts

✅ Successfully installed file_server.
/Users/deno/.deno/bin/file_server
```

安装完成后，会在本地目录生成一个脚本，里面包含了权限配置等信息：

```
# generated by deno install
@deno.exe "run" "--allow-read" "--allow-net" "https://deno.land/std@0.90.0/http/file_server.ts" %*
```

应该在执行脚杆安装命令时指定所需权限，如果需要再次修改，可以再重新安装一遍，这只需重新生成配置脚本：

```sh
deno install --allow-net --allow-read https://deno.land/std@0.90.0/http/file_server.ts -p 8080
```

以上安装命令会创建默认的 `file_server` 可执行脚本配置，监听 TCP 8080 端口。

可以通过 `-n`/`--name` 给安装程序后生成的脚本指定一个名字:

```sh
deno install --allow-net --allow-read -n serve https://deno.land/std@0.90.0/http/file_server.ts
```

配置脚本名字的确定规则：

- 尝试从安装脚本文件获取，以上例子就是 file_server 这个文件名。
- 如果，文件名主干为 main, mod, index or cli 并且有上级目录，则使用上级目录作为命令名。
- 如果，结果名字包含 `@...` 这样的前缀，就清除掉。

如安装 http://www.demo.com/main.ts 则会使用 main 作为命令名，因为可执行脚本在域名下没有上级目录。

可以通过 `--root` 指定安装目录，这样就应该相应配置环境变量以自动定位:

```
deno install --allow-net --allow-read --root /usr/local https://deno.land/std@0.90.0/http/file_server.ts
echo 'export PATH="$HOME/.deno/bin:$PATH"' >> ~/.bashrc
```

安装目录按以下规则确定：

- `--root` 命令行参数优先。
- `DENO_INSTALL_ROOT` 其次指定环境变量。
- `$HOME/.deno` 最后安装到默认的本地目录。


一般，可以通过 `import.meta.main` 来检查当前脚本是否作为入口模块执行：

```ts
// https://example.com/awesome/cli.ts
if (import.meta.main) {
  ...
}
```

创建可执行脚本时，保证添加安装命令示范，以保证用户可以正确使用：

```sh
$ deno install -n awesome_cli https://example.com/awesome/cli.ts
```


## ⚡ Compiling executables
- https://deno.com/blog/v1.6#codedeno-compilecode-self-contained-standalone-binaries
- feat: deno compile #8539 https://github.com/denoland/deno/pull/8539/
- https://github.com/tc39/proposal-asset-references
- https://github.com/tc39/proposal-import-assertions
- Deno release/canary binaries https://dl.deno.land/release/v1.9.2/
- Allow setting the icon for deno compile output binary #8912 https://github.com/denoland/deno/issues/8912
- Set icons and metadata for executables with a rust build script https://github.com/mxre/winres

Deno 自带编译生成 binary 可执行程序的能力，使用 deno compile 命令编译脚本代码即可以生成可执行程序。

尽管文件有点大，毕竟有 V8 加持，还有 SWC 编译器，可以使用 `--lite` 参数缩减输出文件大小。

编译命令需要使用 `--unstable` 激活非稳定 API，并且，程序需要的权限也一并指定，否则编译得到的程序没有相应的权限。

包括 `--location` 也需要在编译时指定具体值，否则编译后，程序可以通过 Deno.args 读取到命令行的参数，但 Window 实例 location 不能正常读取命令行的 --location 值。

```rust
// deno run--unstable - A--location http://www.demo.com/ demo/global.ts
// deno compile --allow-net --unstable --location http://www.baidu.com/ demo/global.ts

console.log(Deno.args);
console.log({ location }, location.toString(), location.href)
fetch("xyz").then(res => {
  console.log(res.url);
}).catch(console.log)
```

```sh
deno compile --target x86_64-unknown-linux-gnu --allow-net --unstable --location http://www.baidu.com/ demo/global.ts
```

支持 Cross Compilation，即在同一台主机上编译生成不同硬件架构下运行的程序。

通过 `--target` 命令行参数指定目标平台架构，当前 Deno 1.9.2 支持四种架构，对应参数设置如下：

- Windows x64 - x86_64-pc-windows-msvc
- macOS x64   - x86_64-apple-darwin
- macOS ARM   - aarch64-apple-darwin
- Linux x64   - x86_64-unknown-linux-gnu

实现方法是使用预编译的各个平台的运行时，编译时会自动下载相应的 Deno release/canary binaries，再和当前编译的脚本整合为一个可执行文件。

通过 `--lite` 参数缩减输出文件大小，就是使用 runtime-only binary 进行整合，输出文件可以减小 10MB 以上或 50% 左右。

```sh
deno compile --help
deno compile --v8-flags=--help
```

如果需要对 V8 进行参数配置，可以在编译时通过 --v8-flags 给 V8 传入指定参数。


目前不支持的功能：

- Web Workers are not currently supported. ISSUE #8654.
- You can not dynamically include code with dynamic import. ISSUE #8655.
- Customizing V8 flags, and sandbox permissions is not currently possible. ISSUE #8656.
- Does not support cross platform compilation. May be a --target flag in the future. ISSUE #8567.

与其它自包含 binary 的工具不同，如 pkg，Deno 的编译子命令没有可用于绑定资源文件的虚拟文件系统。Deno 团队希望在未来的 TC39 方案中，支持如 import assertions, asset references，这样对虚拟文件系统的需求将消失，因为资源可以在 JavaScript 模块图中正确地表达出来。

具体实现，请参考 Deno CLI 源代码的 flags.rs 和 standalone.rs。

Deno 子命令在 flags 的枚举类型中定义： 

```js
pub enum DenoSubcommand {
  Bundle {
    source_file: String,
    out_file: Option<PathBuf>,
  },
  Cache {
    files: Vec<String>,
  },
  Compile {
    source_file: String,
    output: Option<PathBuf>,
    args: Vec<String>,
    target: Option<String>,
    lite: bool,
  },
  ...
}
```

## ⚡ Bundler
- Deno bundler https://deno.land/manual@v1.9.2/tools/bundler
- JavaScript modules 模块 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules
- deno bundle does not support tsconfig.json #3793 https://github.com/denoland/deno/issues/3793
- Support other libs in runtime compiler API #3726 https://github.com/denoland/deno/issues/3726
- https://www.kitsonkelly.com/posts/bundling-in-deno/#dog-fooding

Deno 自带打包命令 `deno bundle [URL]`，输出单个 JavaScript，包含所有指定输入的依赖，即输出的是自包含 ES Module。

    deno bundle --help
    deno bundle [OPTIONS] <source_file> [out_file]

以下示范打包 Deno 标准模块中提供的示范程序：

```sh
> deno bundle https://deno.land/std@0.90.0/examples/colors.ts colors.bundle.js
Bundle https://deno.land/std@0.90.0/examples/colors.ts
Download https://deno.land/std@0.90.0/examples/colors.ts
Download https://deno.land/std@0.90.0/fmt/colors.ts
Emit "colors.bundle.js" (9.83KB)
```

打包结果可以输出到指定文件，如果省略，直接输出到 `stdout`。

可以将打包输出当成一般模块，Deno 可以直接运行它。

```sh
deno run colors.bundle.js
```

作为自包含模块，Deno 会导出主模块中 export 的对象，如下：

```ts
export { foo } from "./foo.js";

export const bar = "bar";
```

使用打包输出的模块时，就可以导入主模块的 export 对象：

```ts
import { bar, foo } from "./lib.bundle.js";
```

Deno 作为兼容浏览器的开发工具，打包输出的模块同样可用于 web browser，只需要在脚本标签指定 `type` 属性为 `"module"`，并且可以通过 import 导入模块：

```html
<script type="module" src="website.bundle.js"></script>

<script type="module">
  import * as website from "./website.bundle.js";
</script>
```

现代浏览器已经普遍支持 ES Module，除了 IE 不支持，还有 worker 线程中缺少支持。

可惜，Deno 这个子命令非常 awkward，因为 Deno 现在没有 document 对象，也不支持 tsconfig.json 以指定 `lib:["dom"]`，编译时找不到这个全局属性。

但是，Deno.emit 提供的运行时编译可以曲线救国，实现 React 客户端代码的编译，ReactDOMServer 可以实现 JSX 或 TSX 组件的编译，参考 JSX 部分内容。

Deno 核心成员 Kitson Kelly 说了当前 Deno 不支持 DOM，因为它没有内联到编译器上，希望不久可以使用 `/// <reference lib="dom" />`：

> Currently the runtime API would support the compiler option of lib, but it would fail in most scenarios where if a lib is included that isn't inlined into the TypeScript compiler. For example lib: [ "esnext", "dom" ] would fail, because lib.dom.d.ts is not inlined into the compiler.

> Yeah, I think this should be pretty straight forward, and would allow /// <reference lib="dom" /> to work as well. I was going to work on something else next, but given there is demand for it from folks, I will start working on this now.


## ⚡ Formatter
- https://deno.land/manual@v1.9.2/tools/formatter

Deno 自带代码格式化命令，执行 `deno fmt` 自动将 TypeScript 和 JavaScript 代码进行标准格式处理。

```sh
# format all JS/TS files in the current directory and subdirectories
deno fmt
# format specific files
deno fmt myfile1.ts myfile2.ts
# check if all the JS/TS files in the current directory and subdirectories are formatted
deno fmt --check
# format stdin and write to stdout
cat file.ts | deno fmt -
```

可以在代码行前设置 `// deno-fmt-ignore` 忽略标记，避免代码被格式化处理：

```js
// deno-fmt-ignore
export const identity = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
];
```

或者在文件开始设置 `// deno-fmt-ignore-file` 避免整个文件进行格式化处理。


## ⚡ Read-eval-print-loop

Deno 提供交互式编程命令行，使用 `deno repl` 或直接运行 `deno` 就会启动 REPL 环境。

可以让你直接输入脚本代码，输入的 JavaScript 代码即时编译执行，代码运行在全局作用域下。

以下是快捷键参考：

|       Keystroke       |                                  Action                                 |
|-----------------------|-------------------------------------------------------------------------|
| Ctrl-A, Home          | Move cursor to the beginning of line                                    |
| Ctrl-B, Left          | Move cursor one character left                                          |
| Ctrl-C                | Interrupt and cancel the current edit                                   |
| Ctrl-D                | If if line _is_ empty, signal end of line                               |
| Ctrl-D, Del           | If line is _not_ empty, delete character under cursor                   |
| Ctrl-E, End           | Move cursor to end of line                                              |
| Ctrl-F, Right         | Move cursor one character right                                         |
| Ctrl-H, Backspace     | Delete character before cursor                                          |
| Ctrl-I, Tab           | Next completion                                                         |
| Ctrl-J, Ctrl-M, Enter | Finish the line entry                                                   |
| Ctrl-K                | Delete from cursor to end of line                                       |
| Ctrl-L                | Clear screen                                                            |
| Ctrl-N, Down          | Next match from history                                                 |
| Ctrl-P, Up            | Previous match from history                                             |
| Ctrl-R                | Reverse Search history (Ctrl-S forward, Ctrl-G cancel)                  |
| Ctrl-T                | Transpose previous character with current character                     |
| Ctrl-U                | Delete from start of line to cursor                                     |
| Ctrl-V                | Insert any special character without performing its associated action   |
| Ctrl-W                | Delete word leading up to cursor (using white space as a word boundary) |
| Ctrl-X Ctrl-U         | Undo                                                                    |
| Ctrl-Y                | Paste from Yank buffer                                                  |
| Ctrl-Y                | Paste from Yank buffer (Meta-Y to paste next yank instead)              |
| Ctrl-Z                | Suspend (Unix only)                                                     |
| Ctrl-_                | Undo                                                                    |
| Meta-0, 1, ..., -     | Specify the digit to the argument. `–` starts a negative argument.      |
| Meta-<                | Move to first entry in history                                          |
| Meta->                | Move to last entry in history                                           |
| Meta-B, Alt-Left      | Move cursor to previous word                                            |
| Meta-Backspace        | 将当前位置到行首的内容删除，或者删除前一个词，如果当前在词之间          |
| Meta-C                | Capitalize the current word                                             |
| Meta-D                | Delete forwards one word                                                |
| Meta-F, Alt-Right     | Move cursor to next word                                                |
| Meta-L                | Lower-case the next word                                                |
| Meta-T                | Transpose words                                                         |
| Meta-U                | Upper-case the next word                                                |
| Meta-Y                | See Ctrl-Y                                                              |

特殊变量：

| Identifier | Description                          |
| ---------- | ------------------------------------ |
| _          | Yields the last evaluated expression |
| _error     | Yields the last thrown error         |



## ⚡ Documentation generator
- Deno doc website https://github.com/denoland/doc_website
- git clone git@github.com:denoland/deno_doc

文档生成器，为 JavaScript & TypeScript 提供文档自动化生成，只要代码中使用了 JSDoc 格式注解，就可以自动生成文档：

```
/**
 * Adds x and y.
 * @param {number} x
 * @param {number} y
 * @returns {number} Sum of x and y
 */
export function add(x: number, y: number): number {
  return x + y;
}
```

使用 deno doc 命令，指定要生成文档的代码文件列表，然后文档会输出到控制台：

```sh
# Output documentation to standard output:
deno doc ./path/to/module.ts

# Output private documentation to standard output:
deno doc --private ./path/to/module.ts

# Output documentation in JSON format:
deno doc --json ./path/to/module.ts

# Target a specific symbol:
deno doc ./path/to/module.ts MyClass.someField

# Show documentation for runtime built-ins:
deno doc
deno doc --builtin Deno.Listener
```

用它可以很方便地查询 Deno runtime  API，另外，使用 --json 参数可以输出 JSON 格式的文档，Deno doc website 就是使用这种格式，文档站点基于 React + Next.js 框架实现。

注意，只能对模块生成 JSON 格式的文档：

    deno doc --json ..\std@0.90.0\http\mod.ts

文档生成器的源代码在 Github denoland 账户上可以下载，它是以 Rust Crate 模块的形式提供的： 

```sh
$ cargo search ddoc
displaydoc-lite = "0.1.3"    # Implement the Display trait using your standard doc comments.
deno_doc = "0.3.0"           # doc generation for deno
caelum-diddoc = "0.1.3"      # Self-Sovereign Identity rust/wasm crate
```

源代码 example 目录中提供了一个示范程序，可以使用以下命令尝试编译运行，可以进行二次开发应用：

    $ cargo run --example ddoc ../deno/std/http/mod.ts



## ⚡ Dependency inspector

使用 deno info 命令可以查询本地缓存目录 Cache location：

```sh
$ deno info
DENO_DIR location: "/Users/deno/Library/Caches/deno"
Remote modules cache: "/Users/deno/Library/Caches/deno/deps"
TypeScript compiler cache: "/Users/deno/Library/Caches/deno/gen"
```

除了以上基本用法，deno info [URL] 命令还是一个依赖探测工具，它可以探测所以 ES module 及依赖，local or remote：

```js
$ deno info https://deno.land/std@0.67.0/http/file_server.ts
Download https://deno.land/std@0.67.0/http/file_server.ts
...
local: /home/deno/.cache/deno/deps/https/deno.land/f57792e36f2dbf28b14a75e2372a479c6392780d4712d76698d5031f943c0020
type: TypeScript
compiled: /home/deno/.cache/deno/gen/https/deno.land/f57792e36f2dbf28b14a75e2372a479c6392780d4712d76698d5031f943c0020.js
deps: 23 unique (total 139.89KB)
https://deno.land/std@0.67.0/http/file_server.ts (10.49KB)
├─┬ https://deno.land/std@0.67.0/path/mod.ts (717B)
│ ├── https://deno.land/std@0.67.0/path/_constants.ts (2.35KB)
│ ├─┬ https://deno.land/std@0.67.0/path/win32.ts (27.36KB)
│ │ ├── https://deno.land/std@0.67.0/path/_interface.ts (657B)
│ │ ├── https://deno.land/std@0.67.0/path/_constants.ts *
...
```


## ⚡ Linter
- deno_lint rule documentation https://lint.deno.land/
- ESlint Rules http://eslint.cn/docs/rules/

Deno 为 JavaScript and TypeScript 代码格式规范检查内置了 linter，但目前不是稳定状态，需要 --unstable 来激活。

```sh
# lint all JS/TS files in the current directory and subdirectories
deno lint --unstable
# lint specific files
deno lint --unstable myfile1.ts myfile2.ts
# print result as JSON
deno lint --unstable --json
# read from stdin
cat file.ts | deno lint --unstable -
```

其它规则请查询帮助命令内容：

```sh
deno lint --help
deno lint --unstable --rules
```

如果要忽略整个文件的规范检查，可以在第一行代码前设置 `// deno-lint-ignore-file` 指令：

```rust
// Copyright 2020 the Deno authors. All rights reserved. MIT license.

/**
 * Some JS doc
 **/

// deno-lint-ignore-file

import { bar } from "./bar.js";

function foo(): any {
  // ...
}
```

要忽略整个文件的某个具体诊断，在后面指定要忽略的规则列表：

```rust
// deno-lint-ignore-file no-explicit-any no-empty

function foo(): any {
  // ...
}
```

注意，`// deno-lint-ignore <codes...>` 指令需要放在违规代码行前：

```rust
// deno-lint-ignore no-explicit-any
function foo(): any {
  // ...
}

// deno-lint-ignore no-explicit-any explicit-function-return-type
function bar(a: any) {
  // ...
}
```



# 🚩 3rd Modules
- From Node to Deno https://aralroca.com/blog/from-node-to-deno
- From Node to Deno [译] https://www.infoq.cn/article/IAHih5jdk8vslmaK10s4

> 开源的强大在于社区的力量的汇聚！


## ⚡ Cliffy CLI/Table/Key
- https://deno.land/x/cliffy@v0.19.0
- https://github.com/tj/commander.js/blob/master/Readme.md
- Skypack CDN - inquirer.js https://www.skypack.dev/view/inquirer
- Skypack CDN - commander.js https://www.skypack.dev/view/commander
- Introducing Deno A First Look at the Newest JavaScript Runtime by Fernando Doglio (z-lib.org)

Command line framework for deno 🦕 Including Commandline-Interfaces, Prompts, CLI-Table, Arguments Parser and more...

- `ansi`: Chainable ansi escape sequences to show, hide and move cli cursor, erase output and scroll window.
- `command`: Create flexible CLI with type checking, auto generated help and out of the box support for shell completions.
- `flags`: Parse command line arguments.
- `keycode`: Parse ANSI key codes.
- `keypress`: Keypress module with promise, async iterator and event target API.
- `prompt`: Create interactive prompts like: checkbox, confirm, input, number, select, etc...
- `table`: Create cli table's with border, padding, nested table's, etc...

克隆代码：

    git clone git@github.com:c4spar/deno-cliffy

示范:

```sh
# ANSI Terminal
deno run --allow-net https://deno.land/x/cliffy/examples/ansi/functional.ts

# Prompt with List, D - Down, U - Up
deno run --unstable https://deno.land/x/cliffy/examples/prompt/prompt_list.ts

# Prompt with List, D - Down, U - Up
deno run --unstable https://deno.land/x/cliffy/examples/prompt/dynamic_prompts.ts

# commander
deno run https://deno.land/x/cliffy/examples/command/dotted_options.ts --bitrate.audio 300 --bitrate.video 900

# flag parse
deno run https://deno.land/x/cliffy/examples/flags/options.ts -vvv -n5 -f ./example.ts -d 1 -s foo bar baz --beep -- --boop
{
  flags: { verbose: 3, amount: 5, file: "./example.ts", debug: true, silent: true },
  unknown: [ "foo", "bar", "baz", "--beep" ],
  literal: [ "--boop" ]
}

# Keycode parse：
deno run --unstable https://deno.land/x/cliffy/examples/keycode/read_key.ts
deno run --unstable --reload https://deno.land/x/cliffy/examples/keypress/promise.ts

# Table span：
deno run https://deno.land/x/cliffy/examples/table/colspan_and_rowspan.ts
```

表格不支持 Windows 控制台。

```js
// display CSV in table format on the terminal
import { parse } from "https://deno.land/std/encoding/csv.ts";
import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { Table } from 'https://deno.land/x/cliffy@v0.19.0/table/mod.ts';
const f = await Deno.open("./data.csv");
const reader = new BufReader(f)
const records:[string[]] = <[string[]]>(await parse(reader))
f.close();
Table.from( records )
.maxCellWidth( 20 )
.padding( 1 )
.indent( 2 )
.border( true )
.render();
```


## ⚡ Moduels Center
- Deno Third Party Modules https://deno.land/x/
- A module registry for Deno https://nest.land

目前有两个 Deno 模块中可以提供开发上传注册自己的模块：

- Deno Land 官方注册中心
- Nest.land 社区注册中心

Deno 可以使用第三方开发者注册的模块，因为基于分布式的模块化组织，Deno 可以使用任意注册中心提供的模块，模块信息基于 GitHub 数据库。

开发者成功注册的模块通过以下 URL 访问：

- https://deno.land/x/IDENTIFIER@VERSION/FILE_PATH
- https://api.deno.land/webhook/gh/Your_Module_Name

官方 Deno Land 注册中心本身就是主要和大概最受欢迎的 Deno 注册中心，可以将模块的 GitHub 仓库添加到注册中心。

需要在 Github 开设仓库以托管模块代码，Deno 注册中心会在你提交创建新 tag 时自动读取更新，这需要设置 Github 的 Web hooks 通知 Deno 注册中心。

登录到 Deno 官网，进入第三方模块页面，点击 Adding a module 开始设置。

登录 Github，设置代码仓库：

- Go to the Settings tab.
- Click on the `Webhooks` tab.
- Click on the `Add webhook` button.
- Enter the URL https://api.deno.land/webhook/gh/douyin?subdir=douyin%2F in the payload URL field.
- Select `application/json` as the content type.
- Select `Let me select individual events`.
- Select `only the Branch or tag creation event`.
- Press `Add webhook`.

确认已添加 Webhooks 中

完成上述步骤后，剩下的就是在 GitHub 仓库中创建 release/tag，注册中心会响应更新。

如果有问题，可以在 deno_registry2 存储仓库中开启一个 issue，或者通过 #help channel of the Deno Discord 发消息来联系 Deno 维护人员。


另一个受欢迎的注册中心是 nest.land ，这个注册中心在区块链上。

这个注册中心有一些很好的特性：安全性，不变性和独立于任何源码管理系统。也就是说，它不要求你使用 git 或 GitHub。

注册账户获取 API Key，注意，保证它隐私且安全。

在本地的模块根目录中安装 eggs CLI：

    deno install -A -f --unstable -n eggs https://x.nest.land/eggs@0.2.1/mod.ts

通过 CLI 工具关联 API Key，并初始化模块设置，完成开发后发布模块：

    eggs link <key>
    eggs init
    eggs publish

这将在本地计算机上保存 API 密钥，意味着你可以将模块发布到 nest.land 并且不需要再登陆了。

配置过程会提示输入模块的有关信息，如名称、描述、版本等，生成的配置文件 egg.json 类似于 package.json。

## ⚡ Cache
- 🥌 Deno cache library https://deno.land/x/cache@0.2.12
- https://deno.land/x/cache@0.2.12/file.ts

Cache library, compatible with deno module caching.

使用缓存方法处理的文件，会被缓存到本地目录中，读取时，可以通过缓存方法返回的 File 对象中的路径进行读取：

```js
// denon run --allow-env --allow-read --allow-write --allow-net demo\cache.ts
import { cache, File } from "https://deno.land/x/cache/mod.ts";

const file: Readonly<File> = await cache("https://deno.land/x/cache/mod.ts");

const text = await Deno.readTextFile(file.path);
console.log({text, file});
```


## ⚡ Plugin
- Plugin prepare https://deno.land/x/plugin_prepare
- Deno plugin management library https://deno.land/x/plug@0.2.10
- https://doc.deno.land/builtin/unstable#Deno.openPlugin

Deno 的 Plugin API 目前处于 ⚠️ Unstable 状态，通过它可以加载其它语言开发的库，并且实现插件机制。

示范加载插件并初始全，插件 API 需要 allow-plugin 权限：

```js
const rid = Deno.openPlugin("./path/to/some/plugin.so");
const opId = Deno.core.ops()["some_op"];
const response = Deno.core.dispatch(opId, new Uint8Array([1,2,3,4]));
console.log(`Response from plugin ${response}`);
```

Deno 的插件并不像 Node 那样，可以直接使用 require 加载，像加载普通模块一样，所以有必要有个能管理插件基本信息的模块。

Deno 的插件是系统级语言开发的动态库形式加载的，并且，根据不同的系统，要编译不同的动态库，而插件开发者通常也要提供多个平台的插件二进制文件。而且，插件体积通常很大，不需要将所有平台的二进制文件都下载，只下载当前平台需要的文件即可。plugin_prepare 就是用来管理这些文件，还有插件的基本信息的第三方模块。

模块导出的 prepare 函数需要提供插件的以下信息：

- 插件名字。
- Darwin/Window/Linux 各系统的动态库下载地址。

这个预备函数更像同步版本的 Deno.openPlugin，会自动根据系统下载插件动态库，并且保存在本地目录中。默认是当前工作目录下的 .deno_plugins 目录，deno info 命令可以查询，要保存在指定目录，使用环境变量 `DENO_PLUGIN_DIR`。

实现功能：

- Caching binary files with URL hash (multi-version coexistence)
- TODO: Supports downloading and decompressing .GZ files

```js
import {
  prepare,
  PrepareOptions,
} from "https://deno.land/x/plugin_prepare@v0.8.0/mod.ts";

const releaseUrl =
  "https://github.com/manyuanrong/deno-plugin-prepare/releases/download/plugin_bins";

const pluginOptions: PrepareOptions = {
  name: "test_plugin",

  // Whether to output log. Optional, default is true
  // printLog: true,

  // Whether to use locally cached files. Optional, default is true
  // checkCache: true,

  // Support "http://", "https://", "file://"
  urls: {
    darwin: `${releaseUrl}/libtest_plugin.dylib`,
    windows: `${releaseUrl}/test_plugin.dll`,
    linux: `${releaseUrl}/libtest_plugin.so`,
  },
};
const rid = await prepare(pluginOptions);
//@ts-ignore
const { testSync } = Deno.core.ops();
//@ts-ignore
const response = Deno.core.dispatch(
  testSync,
  new Uint8Array([116, 101, 115, 116])
)!;

console.log(response);
Deno.close(rid);
```

第三方模块 Plug 已经实现了插件管理，提供加载外部应用的能力，比如 Webview 作为一个通用 Web GUI 开发工具，可能插件机制就可以在 Deno 环境中使用。

相关模块：

- deno_plugin_prepare - A library for managing deno native plugin dependencies
- cache - Deno cache library

```js
import { Plug } from "https://deno.land/x/plug/mod.ts";

// Backwards compatibility with deno-plugin-prepare
const options: Plug.Options = {
  name: "test_plugin",
  urls: {
    darwin: `${path}/libtest_plugin.dylib`,
    windows: `${path}/test_plugin.dll`,
    linux: `${path}/libtest_plugin.so`,
  }
};

// Or if you want plug to guess your binary names
const options: Plug.Options = {
  name: "test_plugin",
  url: "https://example.com/some/path/"
  // Becomes:
  // darwin: "https://example.com/some/path/libtest_plugin.dylib"
  // windows: "https://example.com/some/path/test_plugin.dll"
  // linux: "https://example.com/some/path/libtest_plugin.so"
};

const rid = await Plug.prepare(options);

const { testSync } = Plug.core.ops();
const response = Plug.core.dispatch(
  testSync,
  ...
);

Deno.close(rid);
```

## ⚡ Denon
- Denon https://deno.land/x/denon

👀 Denon 可以监视 Deno 程序改动并自动重启，是 nodemon 的替代品，它提供了一种功能打包、高度可配置和易于使用的体验。

安装后，提供一个 denon 命令，直接用它来替换 deno 命令，执行程序：

```sh
# deno.land
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
# nest.land
deno install -qAf --unstable https://x.nest.land/denon/denon.ts
```

新版本的 Deno 本身提供了 --watch 来监视文件改动：

```sh
deno run --unstable --watch demo.ts
```


## ⚡ Webview
- Webview https://github.com/webview/webview
- Webview for Deno https://doc.deno.land/https/deno.land/x/webview/mod.ts
- Official Webview-org Rust bindings https://lib.rs/crates/webview_official
- Boscop web-view - Rust native ffi bindings for webview https://crates.io/crates/webview-sys
- Android Developers - Web-based content https://developer.android.google.cn/guide/webapps?hl=zh-cn
- Android WebKit https://developer.android.google.cn/reference/android/webkit/package-summary?hl=zh-cn
- git clone git@github.com:webview/webview
- git clone git@github.com:webview/webview_deno

Webview 具有通用跨平台的特性，在基于 Web 开发桌面应用的一种技术。具有小巧通用特性，提供了 C/C++ 语言实现，Golang、Rust 等等众多语言提供绑定，使用 WebKit (Gtk/Cocoa) 或者 Edge (Windows) 浏览器内核。

Webview for Deno 是通过 webview-sys 绑定的 Webview library，可惜更新较慢，目前只能在 Deno 1.7.2 上使用，并且 Buggy，无法加载本地 HTML 文件，也无法加载 localhost 页面，像以下 file:// 协议头并不能有效支持：

    file:///C:/path/to/some.html

相反，使用 Go 或 Rust 开发 Webview 则方便多了，没有二次包装问题。

倒是可以学习 webview_deno 是如何集成 deno_core 和 webview-sys，还有其工程的组织，Deno 插件机制的使用，包括脚本的编写。

内容加载不显示可能是 Webview for Deno 项目配置依赖时，使用了 Edge Features：

```js
[dependencies]
web-view = { version = "0.7", features = ["edge"] }
# web-view = { version = "0.7" }
# web-view = { git = "https://github.com/Boscop/web-view", rev = "0d92ed6" }
```

这个问题可以在 Rust 项目中重现，如果设置为 edge 内核，尝试加载本地文件时就会出错：

    fatal runtime error: Rust cannot catch foreign exceptions
    error: process didn't exit successfully: `target\debug\examples\webview.exe` (exit code: 0xc0000409, STATUS_STACK_BUFFER_OVERRUN)

另外，在 Windows Terminal Preview 环境中，Webview 执行 sync 方法时，还可能导致卡死失去响应：

```js
// https://deno.land/x/webview@0.5.6/plugin.ts
export { Plug } from "https://deno.land/x/plug@0.2.9/mod.ts";

// new Webview: this.id = unwrap(sync("webview_new", ...)
// op = "webview_new", data = {title: "webview_deno", url: "data:text/html,...
export function sync<T>(op: string, data: unknown = {}): T {
  if (rid === undefined) {
    throw "The plugin must be initialized before use";
  }

  const opId = Plug.getOpId(op);
  const response = Plug.core.dispatch(opId, encode(data))!;

  return decode(response) as T;
}
```

Plug 模块二次导出 Deno.core，调试器并不能追踪 dispatch 底层方法，参考 Deno Core 的内部初始脚本：

```js
// Plug/mod.ts
// export const core = Deno.core as UnstableCore;

// deno_src\core\core.js
((window) => {
  // Available on start due to bindings.
  const core = window.Deno.core;
  const { recv, send } = core;

  function dispatch(opName, control, ...zeroCopy) {
    return send(opsCache[opName], control, ...zeroCopy);
  }
  ...
})(this);
```

core\runtime.rs 特别重要，它负责建立 Deno Core 最重要的 JsRuntime，并执行内部初始化脚本，包括 core.js：

```js
  // deno_src\core\runtime.rs
  fn js_init(&mut self) {
    self
      .execute("deno:core/core.js", include_str!("core.js"))
      .unwrap();
    self
      .execute("deno:core/error.js", include_str!("error.js"))
      .unwrap();
  }
```

最后由 Rust 底层给出一个不明确的异常提示：

    fatal runtime error: Rust cannot catch foreign exceptions

调试命令：

    # start url: chrome://inspect/#devices
    deno run --inspect-brk --unstable -A some.ts

另外，执行大量 fetch 请求，如果服务器或本地请求不能及时完成，会卡死： 

    error: Uncaught (in promise) Error: request or response body error: error reading a body from connection: protocol error: unspecific protocol error detected
    throw new ErrorClass(res.err.message);
          ^
    at processResponse (deno:core/core.js:212:11)
    at Object.jsonOpAsync (deno:core/core.js:229:12)
    at async Object.pull (deno:op_crates/fetch/26_fetch.js:1338:32)

需要考虑服务器是否有反爬技术，例如，进程使用同一端口请求的频数高于一个标准值，则进入阻塞，让客户请求挂起，导致客户程序卡死。


Webview 构造器接收参数：

```js
export interface WebviewParams {
  title: string;
  url: string;
  width: number;
  height: number;
  minWidth: number;
  minHeight: number;
  resizable: boolean;
  debug: boolean;
  frameless: boolean;
  visible: boolean;
}
```

互相调用接口：

- Web call Webview: `external.invoke('test');`
- Webview call Web: `webview.eval(string)`

其它 Webview 绑定 API 参考 Webview Rust 绑定模块的源代码：

```
use deno_core::plugin_api::Interface;
use deno_core::plugin_api::Op;
use deno_core::plugin_api::ZeroCopyBuf;

use deno_core::serde_json::json;
use deno_core::serde_json::Value;

use deno_json_op::json_op;

use webview_sys::CWebView;

thread_local! {
  static INDEX: RefCell<u64> = RefCell::new(0);
  static WEBVIEW_MAP: RefCell<HashMap<u64, *mut CWebView>> = RefCell::new(HashMap::new());
  static STACK_MAP: RefCell<HashMap<u64, Vec<String>>> = RefCell::new(HashMap::new());
}

#[no_mangle]
pub fn deno_plugin_init(interface: &mut dyn Interface) {
  interface.register_op("webview_free", webview_free);
  interface.register_op("webview_new", webview_new);
  interface.register_op("webview_exit", webview_exit);
  interface.register_op("webview_eval", webview_eval);
  interface.register_op("webview_loop", webview_loop);
  interface.register_op("webview_step", webview_step);
  interface.register_op("webview_set_color", webview_set_color);
  interface.register_op("webview_set_fullscreen", webview_set_fullscreen);
  interface.register_op("webview_set_maximized", webview_set_maximized);
  interface.register_op("webview_set_minimized", webview_set_minimized);
  interface.register_op("webview_set_title", webview_set_title);
  interface.register_op("webview_set_visible", webview_set_visible);
}
```

最新的 WebView 2 API 有些改动：

1. `webview.Open()` has been removed. Use other webview APIs to create a window, open a link and run main UI loop.
2. `webview.Debug()` and `webview.Debugf()` have been removed. Use your favorite logging library to debug webview apps.
3. `webview.Settings` 移除配置结构体，Title, URL and size 通过其它 API 修改，而再只是构造时设置。
4. `Webview.Loop()` has been removed. Use `Run()` instead.
5. `WebView.Run()`, `WebView.Terminate()`, `WebView.SetTitle()`, `WebView.Dispatch()` stayed the same.
6. `WebView.Exit()` has been renamed to `WebView.Destroy()`
6. `WebView.SetColor()` and `WebView.SetFullScreen()` 使用 `Window()` 替代以获取系统的句柄。
7. `webview.Dialog` has been removed. But it is likely to be brought back as a standalone module.
8. `WebView.Eval()` remained the same.
9. `WebView.InjectCSS()` has been removed. Use eval to inject style tag with CSS inside.
10. `WebView.Bind()` kept the name, but changed the semantics. Only functions can be bound. Not the structs, like in Lorca.


示范 external 接口使用：

```
import { Webview } from "https://deno.land/x/webview/mod.ts";

const html = `
  <html>
  <body>
    <button onclick="external.invoke('test')">test</button>
    <script>
      function test() { external.invoke("finish"); }
    </script>
  </body>
  </html>
`;

const webview = new Webview(
  { url: `data:text/html,${encodeURIComponent(html)}` },
);

// for await (const event of webview.iter()) { 。。 }

await webview.run((event) => {
  switch (event) {
    case "test":
      console.time();
      webview.eval("test();");
      break;
    case "finish":
      console.timeEnd();
      break;
  }
});
```

Local Example

```
import { Webview } from "https://deno.land/x/webview/mod.ts";

const html = `
  <html>
  <body>
    <h1>Hello from deno v${Deno.version.deno}</h1>
  </body>
  </html>
`;

const webview = new Webview(
  { url: `data:text/html,${encodeURIComponent(html)}` },
);
await webview.run();
```

Server Example

```
import { serve } from "https://deno.land/std@0.79.0/http/mod.ts";
import { Webview } from "https://deno.land/x/webview@0.5.6/mod.ts";

const webview = new Webview(
  { url: `http://localhost:8080` },
);
const promise = webview.run();

const server = serve({ port: 8080 });
for await (const req of server) {
  req.respond({ body: "Hello World" });
}

await promise;
```

Run example:

    deno run -Ar --unstable https://deno.land/x/webview/examples/external.ts
    deno run -Ar --unstable https://deno.land/x/webview/examples/local.ts
    deno run -Ar --unstable examples/local.ts

Linux dependencies

- webkit2gtk (to install using apt: sudo apt-get install libwebkit2gtk-4.0-dev)

Building

Building webview_deno can take a nontrivial amount of time depending on your operating system. After the first build most files will be cached so building time will be reduced. Building on Windows requires admin privileges.

For a default build you can use the provided script:

    deno run --unstable -A scripts/build.ts

which internally runs:

optionally you can use mshtml:

    deno run --unstable -A scripts/build.ts mshtml


## ⚡ Feathers
- https://deno.land/x/feathers@v5.0.0-pre.3

REST APIs 框架。

测试不通过：

    deno test https://deno.land/x/feathers@v5.0.0-pre.3/test.ts

主页给的 TS 代码类型定义有错误：

```
// app.ts
import { feathers } from 'https://deno.land/x/feathers@v5.0.0-pre.3/mod.ts';

type Message {
  message: string;
}

class MyService {
  async create (data: Message) {
    return data;
  }
}

type ServiceTypes {
  myservice: MyService
}

const app = feathers<ServiceTypes>();

app.use('myservice', new MyService());

app.service('myservice').on('created', (data: Message) => {
  console.log('Created', data);
});

await app.service('myservice').create({
  message: 'Hello from Deno'
});
```


## ⚡ ejs
- https://ejs.co/
- ejs template engine for deno https://deno.land/x/dejs@0.8.0

Embedded JavaScript templating

“E” 代表什么？可以表示 “可嵌入（Embedded）”，也可以是“高效（Effective）”、“优雅（Elegant）”或者是“简单（Easy）”。EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。

仅支持以下功能：

- `<%= %>` Output escaped value
- `<%- %>` Output raw value
- `<%# %>` Comment (nothing will be shown)
- `<% %>` Evaluate (use control flow like: if, for)
- include partial ejs template


## ⚡ Oak
- https://deno.land/x/oak@v7.3.0
- https://github.com/oakserver/oak

A middleware framework for Deno's native and std/http server 🐿️ 🦕

```js
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const controller = new AbortController();
const { signal } = controller;

// Add some middleware using `app.use()`
app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

const listenPromise = app.listen({ port: 8000, signal });

// In order to close the sever...
controller.abort();

// Listen will stop listening for requests and the promise will resolve...
await listenPromise;
// and you can do something after the close to shutdown
```

Handling std/http requests and responses

```js
import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await listenAndServe({ port: 8000 }, async (request) => {
  const response = await app.handle(request);
  if (response) {
    request.respond(response);
  }
});
```

Handling native requests and responses

```js
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

const listener = Deno.listen({ hostname: "localhost", port: 8000 });

for await (const conn of listener) {
  (async () => {
    const requests = Deno.serveHttp(conn);
    for await (const { request, respondWith } of requests) {
      const response = await app.handle(request, conn);
      if (response) {
        respondWith(response);
      }
    }
  });
}
```

Static content

```js
import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/examples/static`,
    index: "index.html",
  });
});

await app.listen({ port: 8000 });
```




## ⚡ Opine
- https://deno.land/x/opine@1.3.3

一个号称 Fast, minimalist 的 web framework，从 ExpressJS 适配到 Deno 的版本。

```
import { opine } from "https://deno.land/x/opine@1.3.3/mod.ts";

const app = opine();

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(3000);
```

安装 Opine CLI 工具：

```sh
deno install -f -q --allow-read --allow-write --allow-net --unstable https://deno.land/x/opinecli@1.1.0/opine-cli.ts

opine-cli --view=ejs hello-deno && cd hello-deno

# Start your Opine app at http://localhost:3000/:
deno run --allow-net --allow-read --allow-env mod.ts
```

Opine CLI 在 Deno 1.7.0 运行正常，Deno 1.9.2 出错：

    error: TS2612 [ERROR]: Property 'resolve' will overwrite the base property in 'Deferred<undefined>'. If this is intentional, add an initializer. Otherwise, add a 'declare' modifier or remove the redundant declaration.
        public readonly resolve!: () => void;
                        ~~~~~~~
        at https://deno.land/x/evt@v1.9.12/tools/Deferred.ts:57:21


## ⚡ MySQL
- MySQL driver for Deno https://deno.land/x/mysql@v2.8.0
- MySQL driver for Deno https://github.com/denodrivers/mysql
- https://github.com/adeelibr/deno-playground/tree/master/chapter_1:oak
- https://github.com/adeelibr/deno-playground/tree/master/chapter_2:mysql
- How to use MySQL in Deno Oak https://www.freecodecamp.org/news/how-to-use-mysql-in-deno-oak/
- How to use MySQL in Deno Oak [译] https://deno-tutorial.js.org/articles/translation/deno-oak-mysql.html

TODO LIST

- ✔ Connecting to database
    - ✔ Retring
    - ✔ Timeout
- ✔ Basic login authentication
- ✔ Simple queries (no arguments)
- ✔ Parsing data types
- ✔ Queries with parameters
- ✔ Close connection
- ✔ Connection pool
- ✔ Transaction
- ✔ Test case
- ⚡ Support MariaDB 10.0
- ⚡ Support MariaDB 10.1
- ⚡ Support caching_sha2_password auth plugin (mysql8 default)

**connect**

```ts,ignore
import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "dbname",
  password: "password",
});
```

**connect** pool

Create client with connection pool.

pool size is auto increment from 0 to `poolSize`

```ts,ignore
import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "dbname",
  poolSize: 3, // connection limit
  password: "password",
});
```

**create** database

```ts,ignore
await client.execute(`CREATE DATABASE IF NOT EXISTS enok`);
await client.execute(`USE enok`);
```

**create** table

```ts,ignore
await client.execute(`DROP TABLE IF EXISTS users`);
await client.execute(`
    CREATE TABLE users (
        id int(11) NOT NULL AUTO_INCREMENT,
        name varchar(100) NOT NULL,
        created_at timestamp not null default current_timestamp,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`);
```

**insert**

```ts,ignore
let result = await client.execute(`INSERT INTO users(name) values(?)`, [
  "manyuanrong",
]);
console.log(result);
// { affectedRows: 1, lastInsertId: 1 }
```

**update**

```ts,ignore
let result = await client.execute(`update users set ?? = ?`, ["name", "MYR"]);
console.log(result);
// { affectedRows: 1, lastInsertId: 0 }
```

**delete**

```ts,ignore
let result = await client.execute(`delete from users where ?? = ?`, ["id", 1]);
console.log(result);
// { affectedRows: 1, lastInsertId: 0 }
```

**query**

```ts,ignore
const username = "manyuanrong";
const users = await client.query(`select * from users`);
const queryWithParams = await client.query(
  "select ??,name from ?? where id = ?",
  ["id", "users", 1],
);
console.log(users, queryWithParams);
```

**transaction**

```ts,ignore
const users = await client.transaction(async (conn) => {
  await conn.execute(`insert into users(name) values(?)`, ["test"]);
  return await conn.query(`select ?? from ??`, ["name", "users"]);
});
console.log(users.length);
```

**close**

```ts
await client.close();
```

**Logging**

To disable logging:

```ts,ignore
import { configLogger } from "https://deno.land/x/mysql/mod.ts";
await configLogger({ enable: false });
```

**Test**

```bash
docker container run --rm -d -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true docker.io/mariadb:latest
deno test --allow-env --allow-net=127.0.0.1:3306 ./test.ts
```



## ⚡ SheetJS
- https://github.com/SheetJS/sheetjs
- https://oss.sheetjs.com/sheetjs/tests/
- 📗 SheetJS Community Edition https://deno.land/x/sheetjs@v0.16.8

电子表格模块，社区版。

CDN 引用：

|   CDN    |                     URL                      |
|----------|----------------------------------------------|
| unpkg    | https://unpkg.com/xlsx/                      |
| jsDelivr | https://jsdelivr.com/package/npm/xlsx        |
| CDNjs    | http://cdnjs.com/libraries/xlsx              |
| packd    | https://bundle.run/xlsx@latest?name=XLSX     |
| unpkg    | https://unpkg.com/xlsx/dist/xlsx.full.min.js |

```sh
# With npm:
$ npm install xlsx

# With bower:
$ bower install js-xlsx
```


# 🚩 Standard Library API
- Standard library https://deno.land/manual@v1.9.2/standard_library
- Deno's standard modules https://deno.land/std/
- Deno's stable runtime https://doc.deno.land/builtin/stable
- Deno's unstable runtime https://doc.deno.land/builtin/unstable#Deno.emit
- https://deno.land/manual@v1.8.1/runtime/web_platform_apis
- https://doc.deno.land/builtin/stable#Deno.readTextFileSync
- https://fetch.spec.whatwg.org/

克隆官方代码及文档：

    git clone git@github.com:denoland/deno
    git clone git@github.com:denoland/doc_website

提供基础能力的运行时作为 builtin 模块，包含 stable 和 unstable 两个版本。不稳定版本表示暂时未通过安全审核，需要使用 --unstable 选项以激活。

标准库并不意味着 stable，目前仍在发展中，可以查询 https://deno.land/std/version.ts 获取当前版本，每次 Deno 发布一并发布标准库。

有些标准库会使用到 unstable Deno APIs，因此，需要指定 --unstable 命令行参数，这样会给 TypeScript 类型检查提供 lib.deno.unstable.d.ts 类型声明文件，以解除 API 没有定义的警告。


建议指定版本加载固定的标准库，不指定版本号表示加载最新版本：

```js
// import the latest release, this should be avoided
import { copy } from "https://deno.land/std/fs/copy.ts";

// imports from v0.95.0 of std, never changes
import { copy } from "https://deno.land/std@0.95.0/fs/copy.ts";
```


The standard library

- `archive` tar archive utilities
- `async` async utilties
- `bytes` helpers to manipulate bytes slices
- `datetime` date/time parsing
- `encoding` encoding/decoding for various formats
- `flags` parse command-line flags
- `fmt` formatting and printing
- `fs` file system API
- `hash` crypto lib
- `http` HTTP server
- `io` I/O lib
- `log` logging utilities
- `mime` support for multipart data
- `node` Node.js compatibility layer
- `path` path manipulation
- `ws` websockets


## ⚡ std util
- https://deno.land/std@0.95.0/_util

这是一个 Deno 内部使用的工具模块，其实并不是一个模块，当然，开发者也可以使用来做平台判别，但通常不必。

```js
import { osType, isWindows } from "https://deno.land/std@0.95.0/_util/os.ts";
```

Deno 团队已经写了一些必需的平台适配代码，作为开发者确实需要了解他们怎么做：

```js
// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

export const osType = (() => {
  if (globalThis.Deno != null) {
    return Deno.build.os;
  }

  // deno-lint-ignore no-explicit-any
  const navigator = (globalThis as any).navigator;
  if (navigator?.appVersion?.includes?.("Win") ?? false) {
    return "windows";
  }

  return "linux";
})();

export const isWindows = osType === "windows";
```

在类型声明文件 lib.deno.ns.d.ts 查询 Deno.build.os 的值：

```js
  /** Build related information. */
  export const build: {
    /** The LLVM target triple */
    target: string;
    /** Instruction set architecture */
    arch: "x86_64";
    /** Operating system */
    os: "darwin" | "linux" | "windows";
    /** Computer vendor */
    vendor: string;
    /** Optional environment */
    env?: string;
  };
```


## ⚡ std archive
- https://deno.land/std@0.95.0/archive



## ⚡ std fs
- https://deno.land/std@0.97.0/fs/mod.ts

文件系统常用 API:

```js
import { exists} from "https://deno.land/std/fs/mod.ts";

exists("./math.js").then((result) => console.log(result));
```

Functions

    _createWalkEntry(path: string): Promise<WalkEntry>
    _createWalkEntrySync(path: string): WalkEntry
    copy(src: string, dest: string, options: CopyOptions)
    copySync(src: string, dest: string, options: CopyOptions): void
    detect(content: string): EOL | null
    emptyDir(dir: string)
    emptyDirSync(dir: string): void
    ensureDir(dir: string)
    ensureDirSync(dir: string): void
    ensureFile(filePath: string)
    ensureFileSync(filePath: string): void
    ensureLink(src: string, dest: string)
    ensureLinkSync(src: string, dest: string): void
    ensureSymlink(src: string, dest: string)
    ensureSymlinkSync(src: string, dest: string): void
    exists(filePath: string): Promise<boolean>
    existsSync(filePath: string): boolean
    expandGlob(glob: string, { root, exclude, includeDirs, extended, globstar, caseInsensitive }: ExpandGlobOptions): AsyncIterableIterator<WalkEntry>
    move(src: string, dest: string, { overwrite }: MoveOptions)
    moveSync(src: string, dest: string, { overwrite }: MoveOptions): void
    walk(root: string, { maxDepth, includeFiles, includeDirs, followSymlinks, exts, match, skip }: WalkOptions): AsyncIterableIterator<WalkEntry>

Enums

```js
/** EndOfLine character enum */
export enum EOL {
  LF = "\n",
  CRLF = "\r\n",
}
```


## ⚡ std http
- HTTP Standard Library https://deno.land/std@0.97.0/http

此模块对 Deno.listenTls 或 Deno.listen 等原生方法进行封装，提供更易用的 HTTP 网络应用服务。

主要是以下这些服务方法：

- listenAndServe
- listenAndServeTLS
- serve
- serveTLS

```js
import { listenAndServe, listenAndServeTLS, serve, serveTLS } from "https://deno.land/std/http/server.ts";

// listenAndServe(addr: string | HTTPOptions, handler: (req: ServerRequest) => void)
const body = "Hello World\n";
const options = { port: 8000 };
listenAndServe(options, (req) => {
  req.respond({ body });
});

// listenAndServeTLS(options: HTTPSOptions, handler: (req: ServerRequest) => void)
const body = "Hello HTTPS";
const options = {
  hostname: "localhost",
  port: 443,
  certFile: "./path/to/localhost.crt",
  keyFile: "./path/to/localhost.key",
};
listenAndServeTLS(options, (req) => {
  req.respond({ body });
});

// serve(addr: string | HTTPOptions): Server
const body = "Hello World\n";
const server = serve({ port: 8000 });
for await (const req of server) {
  req.respond({ body });
}

// serveTLS(options: HTTPSOptions): Server
const body = "Hello HTTPS";
const options = {
  hostname: "localhost",
  port: 443,
  certFile: "./path/to/localhost.crt",
  keyFile: "./path/to/localhost.key",
};
for await (const req of serveTLS(options)) {
  req.respond({ body });
}
```

也提供了静态文件服务，可以直接运行 file_server.ts，也可以从这个文件导入 API：

```js
function serveFile(req: ServerRequest, filePath: string): Promise<Response>
```

```sh
deno run --allow-net --allow-read https://deno.land/std/http/file_server.ts
> HTTP server listening on http://0.0.0.0:4507/
```

还有 Cookie API：

```js
function deleteCookie(res: { headers: Headers }, name: string): void
function getCookies(req: { headers: Headers }): Record<string, string>
function setCookie(res: { headers: Headers }, cookie: Cookie): void

setCookie(response, { name: 'deno', value: 'runtime',
  httpOnly: true, secure: true, maxAge: 2, domain: "deno.land" });
```

示范 Cookie 管理，以下代码示范：

- 直接在 Request 对象设置 Cookie 头标模拟从客户端传递的 Cookie；
- 构造 Response 来模拟设置返回客户端的 Cookie，通过 Set-Cookie 头标指示客户客户端执行 Cookie 设置；
- 构造 Response 来模拟删除 Cookie，并通过 Set-Cookie 指示客户端的执行 Cookie 删除动作，即设置 Cookie 为过期状态；

```js
import { ServerRequest, Response } from "https://deno.land/std@0.97.0/http/server.ts";
import { Cookie, getCookies, setCookie, deleteCookie } from "https://deno.land/std@0.97.0/http/cookie.ts";

let request = new ServerRequest();
request.headers = new Headers();
request.headers.set("Cookie", "full=of; tasty=chocolate");

const cookies = getCookies(request);
console.log("cookies:", cookies);
// cookies: { full: "of", tasty: "chocolate" }

let response: Response = {};
const cookie: Cookie = { name: "Space", value: "Cat" };
setCookie(response, cookie);

let cookieHeader = response.headers!.get("set-cookie");
console.log("Set-Cookie:", cookieHeader);
// Set-Cookie: Space=Cat

deleteCookie(response, "deno");
cookieHeader = response.headers!.get("set-cookie");
console.log("Set-Cookie:", cookieHeader);
// Set-Cookie: deno=; Expires=Thus, 01 Jan 1970 00:00:00 GMT
```

注意，headers! 后缀感叹号表示 Non-null assertion 非空断言操作符，因为前面使用空花括号作为 Response 实例，{} 不包含 headers，但通过 setCookie 方法设置，所以使用非空断言跳过 TS 的类型检查。



## ⚡ std io
1. https://deno.land/std@0.97.0/io
2. https://deno.land/api@v1.36.1#I/O
2. https://deno.land/api@v1.36.1#Streams_API
3. https://doc.deno.land/builtin/stable?s=WritableStream
4. https://doc.deno.land/builtin/stable?s=ReadableStream
5. https://doc.deno.land/builtin/stable#Deno.Reader
6. https://doc.deno.land/builtin/stable#Deno.Writer
6. https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream/pipeThrough

I/O 流处理模块，对以下 Deno 全局类型的包装：

```js
var ReadableStream: { prototype: ReadableStream }
var ReadableStreamDefaultController: { prototype: ReadableStreamDefaultController }
var ReadableStreamDefaultReader: { prototype: ReadableStreamDefaultReader }
var ReadableStreamReader: { prototype: ReadableStreamReader }
var WritableStream: { prototype: WritableStream }
var WritableStreamDefaultWriter: { prototype: WritableStreamDefaultWriter }

pipeThrough<T>(transform: { writable: WritableStream<R>; readable: ReadableStream<T>; }, options?: PipeOptions): ReadableStream<T>
pipeTo(dest: WritableStream<R>, options?: PipeOptions): Promise<void>
```

Deno.Reader 和 Deno.Writer 是两个最基本的接口。

ReadableStream 提供了两个 pipe 方法，一个是 pipeTo 将数据流管道传送到目标写入流。另一个方法 pipeThrough() 提供了一种链式读取方式，将当前流通过转换流或者其他任何一对可写/可读的流进行管道传输。传输一个流通常在管道传输的时间内锁定这个流，以阻止其他 reader 锁定它。

IO 模块主要提供对象：

- Bufio
    - Buffer
    - BufReader
    - BufWriter
    - BufWriterSync
- Reader
    - StringReader
    - LimitedReader
- Writer
    - StringWriter

Bufio 导出函数读取行或指定分隔符的内存：

```js
readDelim(reader: Reader, delim: Uint8Array): AsyncIterableIterator<Uint8Array>
readLines(reader: Reader): AsyncIterableIterator<string>
readStringDelim(reader: Reader, delim: string): AsyncIterableIterator<string>
```

导出了以下 Streams 助手函数，注意函数名中 From 作为分隔，前面的词表示要返回的类型：

```js
// Create a ReadableStream from any kind of iterable.
function readableStreamFromIterable(iterable: Iterable<T> | AsyncIterable<T>): ReadableStream<T>

// Create a ReadableStream<Uint8Array> from from a Deno.Reader.
function readableStreamFromReader(reader: Deno.Reader | (Deno.Reader & Deno.Closer), 
    options: ReadableStreamFromReaderOptions): ReadableStream<Uint8Array>

// Create a Reader from a ReadableStreamDefaultReader.
function readerFromStreamReader(streamReader: ReadableStreamDefaultReader<Uint8Array>): Deno.Reader

// Create a WritableStream from a Writer.
function writableStreamFromWriter(writer: Deno.Writer): WritableStream<Uint8Array>

// Create a Writer from a WritableStreamDefaultReader.
function writerFromStreamWriter(streamWriter: WritableStreamDefaultWriter<Uint8Array>): Deno.Writer
```

示范从标准流读取用户输入：

```js
import { readLines } from "https://deno.land/std@0.76.0/io/bufio.ts";

async function confirm(question) {
    console.log(question);

    for await (const line of readLines(Deno.stdin)) {
        if (line === "y") {
            return true;
        } else if (line === "n") {
            return false;
        }
    }
}

const answer = await confirm("Do you want to go on? [y/n]");
```

示范从 StringReader 读取字符到 Uint8Array

```js
import { StringReader } from "https://deno.land/std@0.97.0/io/mod.ts";

const data = new Uint8Array(6);
const r = new StringReader("abcdef");
const res0 = await r.read(data);
const res1 = await r.read(new Uint8Array(6));

// Number of bytes read
console.log(res0); // 6
console.log(res1); // null, no byte left to read. EOL
console.log(new TextDecoder().decode(data)); // abcdef
```

示范读取 StringReader 的内容并写入 StringWriter

```js
import {
  copyN,
  StringReader,
  StringWriter,
} from "https://deno.land/std@0.97.0/io/mod.ts";

const w = new StringWriter("base");
const r = new StringReader("0123456789");
await copyN(r, w, 4); // copy 4 bytes

// Number of bytes read
console.log(w.toString()); //base0123

await Deno.copy(r, w); // copy all
console.log(w.toString()); // base0123456789
```

从枚举对象建立 ReadableStream：

```js
 const r1 = readableStreamFromIterable(["foo, bar, baz"]);
 const r2 = readableStreamFromIterable((async function* () {
   await new Promise(((r) => setTimeout(r, 1000)));
   yield "foo";
   await new Promise(((r) => setTimeout(r, 1000)));
   yield "bar";
   await new Promise(((r) => setTimeout(r, 1000)));
   yield "baz";
 })());
 ```

文件类型实现多种接口，可以将 Deno.File 类型转换为 ReadableStream：

```js
// export class File
//   implements
//     Reader,
//     ReaderSync,
//     Writer,
//     WriterSync,
//     Seeker,
//     SeekerSync,
//     Closer { ... }

import { readableStreamFromReader } from "https://deno.land/std/io/mod.ts";

const file = await Deno.open("./file.txt", { read: true });
const fileStream = readableStreamFromReader(file);
// Create a Deno.Reader from an iterable of Uint8Arrays.
function readerFromIterable(iterable: Iterable<Uint8Array> | AsyncIterable<Uint8Array>): Deno.Reader

 // Server-sent events: Send runtime metrics to the client every second.
 request.respond({
   headers: new Headers({ "Content-Type": "text/event-stream" }),
   body: readerFromIterable((async function* () {
     while (true) {
       await new Promise((r) => setTimeout(r, 1000));
       const message = `data: ${JSON.stringify(Deno.metrics())}\n\n`;
       yield new TextEncoder().encode(message);
     }
   })()),
 });
 ```


## ⚡ std node
- Deno Node compatibility https://deno.land/std@0.95.0/node
- NodeJS standard library https://nodejs.org/docs/latest-v12.x/api/
- ESprima - ECMAScript parser https://www.npmjs.com/package/esprima

作为 Node 的同一作者的产品，Deno 也提供了 Node API 兼容模块 - Deno Node compatibility，提供部分功能兼容。

注意：此模块的任何函数都不应在 Deno 标准库的任何地方引用，因为它是一个兼容模块。

Deno 兼容包提供了 Node 模块加载能力，但是，并不是完全支持 Node API，有功能缺失，如 fs 不提供流式操作。所以，尽量使用 Deno API 实现，实在不行才使用 node 模块。

需要提供 node_module 目录读取权限，加载 Node 的 CommonJS Module 使用 `createRequire(...)` 函数：

```js
import { createRequire } from "https://deno.land/std@0.95.0/node/module.ts";

const require = createRequire(import.meta.url);
// Loads native module polyfill.
const path = require("path");
// Loads extensionless module.
const cjsModule = require("./my_mod");
// Visits node_modules.
const leftPad = require("left-pad");
```

Esprima 是基于 BSD 许可的高性能 ECMAScript 兼容解析器，可以对 JavaScript 代码进行以下处理：

- lexical analysis (tokenization)
- syntactic analysis (parsing)

Features：

- Full support for ECMAScript 2017 (ECMA-262 8th Edition)
- Sensible syntax tree format as standardized by ESTree project
- Experimental support for JSX, a syntax extension for React
- Optional tracking of syntax node location (index-based and line-column)
- Heavily tested (~ 1500 unit tests with full code coverage)

```js
import { createRequire } from "https://deno.land/std/node/module.ts";

const require = createRequire(import.meta.url);
const esprima = require("esprima");

const program = 'const answer = 42';
console.log(esprima.tokenize(program))
```

运行测试程序，输出 AST 语法树结构：

    # deno run --unstable --allow-read demo\nodemodule.ts
    Check file:///C:/coding/md-code/deno/demo/nodemodule.ts
    [
      { type: "Keyword", value: "const" },
      { type: "Identifier", value: "answer" },
      { type: "Punctuator", value: "=" },
      { type: "Numeric", value: "42" }
    ]

## ⚡ std path
- https://deno.land/std@0.95.0/path

路径处理模块，模块内部已经做好平台差异处理，通过 Deno.build.os 判断平台，并相应导出 posix 或 win32 子模块的函数：

```js
import { isWindows } from "../_util/os.ts";
import * as _win32 from "./win32.ts";
import * as _posix from "./posix.ts";

const path = isWindows ? _win32 : _posix;
```

以下是 path 模块的 Posix API，和 Win32 API 同样，在匹配的平台下使用才能得到正确路径：

```js
posix.resolve(...pathSegments: string[]): string
posix.normalize(path: string): string
posix.isAbsolute(path: string): boolean
posix.join(...paths: string[]): string
posix.relative(from: string, to: string): string
posix.toNamespacedPath(path: string): string
posix.dirname(path: string): string
posix.basename(path: string, ext = ""): string
posix.extname(path: string): string
posix.format(pathObject: FormatInputPathObject): string
posix.parse(path: string): ParsedPath
posix.fromFileUrl(url: string | URL): string
posix.toFileUrl(path: string): URL
```
