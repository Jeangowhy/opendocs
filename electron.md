
# 🐥 Electron 跨平台桌面应用开发

- [Electron 文档](https://electronjs.org/docs)
- [Electron vs Node-webkit](http://tangiblejs.com/posts/nw-js-electron-compared)
- [维护一个大型开源项目是怎样的体验？](https://www.zhihu.com/question/36292298/answer/102418523)
- [Electron 应用结构](https://electronjs.org/docs/tutorial/application-architecture)
- [安装 Electron](https://electronjs.org/docs/tutorial/installation)
- [应用程序打包](https://electronjs.org/docs/tutorial/application-packaging)
- [Electron入门应用打包exe](http://www.cnblogs.com/ljbmvp/p/8437931.html)
- [Electron 快速入门及打包](https://www.jianshu.com/p/900a961efc6c)
- [常用Electron App打包工具](https://www.jianshu.com/p/1c2ad78df208)
- [electron入门心得不止前端](https://www.cnblogs.com/buzhiqianduan/p/7620099.html)
- [electron + jQuery +node.js 写入文件、拖拽打开文件并读...](https://www.jianshu.com/p/c2f275374325)
- [调试主进程](https://electronjs.org/docs/tutorial/debugging-main-process)
- [打造你的第一个 Electron 应用](https://electronjs.org/docs/tutorial/first-app)

Electron 就是使用 JavaScript 或 TypeScript 等脚本语言开发跨平台桌面程序的架构，
VS Code 就是基于 Electron 开发的跨平台编辑器代表作品。JavaScript 天生的异步特性使用它
在图形界面 GUI 开发上具有天然的流畅性。

The Electron framework lets you write cross-platform desktop applications using 
JavaScript, HTML and CSS. It is based on Node.js and Chromium and is used by 
the Atom editor and many other apps.

Electron 项目架构本身由 C++ 57.2% 和 TypeScript 30.4% 等语言混合编程开发。C++ 主要是对接
Chromium 开源浏览器，并给脚本开发提供一个桌面环境。TypeScript 脚本则是基于 Node 环境开发，
它和 Google 浏览器一样都使用了 V8 脚本引擎。Chromium 浏览器源代码的依赖处理需要 depot_tools，
这是 Google 开发的专用于依赖处理的工具。

Electron 运行的各个 GUI 窗口都有两个基本的进程：

1. **Renderer Process** 进程进行渲染，具体绘制工作交由 Chromium 来执行；
2. **Main Process** 主进程集成 Node，负责与系统 API 交互，处理核心事务。

开发者的应用基于 Node 环境和 Electron 提供的桌面环境进行开发。基于 Electron 开发应用，
本质上与网站开发没有差别。

Chromium 浏览器是一个复杂的软件工程，难度堪与操作系统不相上下，参考 Chromium OS 项目，
堪称是全世界最复杂的软件应用，整体代码库已经庞大到了近 40G，主要的部件包括：

网络处理模块，实现了主机解析，cookies，网络改变探测，SSL，资源缓存，FTP，HTTP，OCSP 实现，
代理配置，解析，QUIC，Socket 池，SPDY，WebSockets 等等。

V8 脚本引擎模块，这是世界上目前运行最快的脚本引擎，比精简的 Lua 也要快得多。功能包括：字节码解析器，
JIT 编译器，多代 GC，inspector 调试支持，内存和 CPU Profiler 性能统计分析工具，WebAssembly，
两种 post-mortem diagnostics 的支持，脚本初始化环境快照，代码缓存、代码热点分析等等。

Skia 图形引擎模块，支持十几种矢量的绘制，文字绘制、GPU 加速、矢量的指令回放（还要能支持线程安全）、
各种图像格式的编解码、GPU渲染优化等等。

Blink 页面解析引擎，这个更复杂，HTML 和 CSS 规范解析器，要将它们完全实现是一个巨大的工作量，
再加上实现 Layout 的成本，涉及到非常庞大的计算，还要考虑极致的性能，保证浏览器的渲染能够流畅快速。

此外还有音视频相关、沙箱、插件、UI 等等。

Tauri VS. Electron - Real world application 
https://juejin.cn/post/7136538913376010277
https://tauri.app/v1/guides/getting-started/setup/

流行跨平台应用开发构架：

| Frameworks |  Language  |          GUI          |
|------------|------------|-----------------------|
| Tauri      | Rust       | WebView2 or WKWebView |
| Electron   | TypeScript | Chromium              |
| Flutter    | Dart       | Skia                  |

```sh
    # Tauri app via Node nmp
    npm create tauri-app@latest
    npm run tauri dev
    npm run tauri build

    # Tauri app via Node pnmp
    pnpm create tauri-app
    pnpm tauri dev
    pnpm tauri build

    # Tauri app via Rust cargo
    cargo install tauri-cli
    cargo install create-tauri-app
    cargo create-tauri-app
    cargo tauri dev
    cargo tauri build --target i686-pc-windows-msvc
```



# 🐥 Electron Demo

Electron 可以让你使用纯 JavaScript 调用丰富的原生(操作系统) APIs 来创造桌面应用。 
你可以把它看作一个专注于桌面应用的 Node. js 的变体，而不是 Web 服务器。

这不意味着 Electron 是某个图形用户界面（GUI）库的 JavaScript 版本。 相反，Electron 使用 
Web 页面作为它的 GUI，所以你能把它看作成一个被 JavaScript 控制的，精简版的 Chromium 浏览器。

从开发的角度来看, Electron application 本质上是一个 Node.js 应用程序。 与 Node.js 模块相同，应用的入口配置在 package.json。基本的 Electron 应用一般来说会有如下的目录结构：

    app/
    ├── package.json
    ├── main.js
    └── index.html

为新应用创建一个新的空文件夹，打开你的命令行工具，然后从该文件夹运行模块初始化命令：

    npm init

npm 会帮助你创建一个基本的 package.json 文件。 其中的 main 字段所表示的脚本为应用的启动脚本，
它将会在主进程中执行。 如下片段是一个 package.json 的示例：

    {
      "name": "your-app",
      "version": "0.1.0",
      "main": "main.js"
    }

注意：如果 main 字段没有在 package.json 中出现，那么 Electron 将会尝试加载 index.js 文件。
添加一个 start 脚本来指引 node 去执行当前的 package，脚本配置可以使用 npm run 命令运行：

    {
      "name": "your-app",
      "version": "0.1.0",
      "main": "main.js",
      "scripts": {
        "start": "node ."
      }
    }

Node 程序修改为 Electron，这是两种执行方式，Node 直接解释运行脚本，而通过 Electron 运行的脚本则拥有了 Chromium 浏览器环境：

    {
      "name": "your-app",
      "version": "0.1.0",
      "main": "main.js",
      "scripts": {
        "start": "electron ."
      }
    }

现在，需要安装 electron 主程序，推荐的安装方法是把它作为 Node 应用中的开发依赖项，方便在不同的
app 中使用不同的 Electron 版本，在 app 所在文件夹中运行下面的命令：

    npm install --save-dev electron

Electron apps 使用 JavaScript 开发，其工作原理和方法与 Node.js 开发相同。 electron 模块
包含了 Electron 提供的所有 API 和功能，引入方法和普通 Node.js 模块一样：

    const electron = require('electron')

Electron 所提供的功能都通过 electron 模块命名空间暴露出来：

1. **app** 负责管理 Electron 应用程序的生命周期， 
2. **BrowserWindow** 类负责创建窗口。

下面 main.js 文件作为应用的入口脚本，它将在应用程序准备就绪后打开一个窗口：

    const { app, BrowserWindow } = require('electron')

    function createWindow () {   
      // 创建浏览器窗口
      win = new BrowserWindow({ width: 800, height: 600 })

      // 然后加载应用的 index.html。
      win.loadFile('index.html')
    }

    app.on('ready', createWindow)

应当在 main.js 中创建窗口，并处理程序中可能遇到的所有系统事件。下面将完善上述例子，添加以下功能：
打开开发者工具、处理窗口关闭事件、在 macOS 用户点击 dock 上图标时重建窗口。修改后的 main.js：

    const { app, BrowserWindow } = require('electron')

    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    let win

    function createWindow () {
      // 创建浏览器窗口。
      win = new BrowserWindow({ width: 800, height: 600 })

      // 然后加载应用的 index.html。
      win.loadFile('index.html')

      // 打开开发者工具
      win.webContents.openDevTools()

      // 当 window 被关闭，这个事件会被触发。
      win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
      })
    }

    // Electron 会在初始化后并准备
    // 创建浏览器窗口时，调用这个函数。
    // 部分 API 在 ready 事件触发后才能使用。
    app.on('ready', createWindow)

    // 当全部窗口关闭时退出。
    app.on('window-all-closed', () => {
      // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
      // 否则绝大部分应用及其菜单栏会保持激活。
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', () => {
      // 在macOS上，当单击dock图标并且没有其他窗口打开时，
      // 通常在应用程序中重新创建一个窗口。
      if (win === null) {
        createWindow()
      }
    })

    // 在这个文件中，你可以续写应用剩下主进程代码。
    // 也可以拆分成几个文件，然后用 require 导入。

最后，创建你想展示的 index.html：

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Hello World!</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        We are using node <script>document.write(process.versions.node)</script>,
        Chrome <script>document.write(process.versions.chrome)</script>,
        and Electron <script>document.write(process.versions.electron)</script>.
      </body>
    </html>


在创建并初始化完成 main.js、 index.html 之后，就可以在当前工程的根目录执行 npm start 命令
来启动刚刚编写好的 Electron 应用程序，相当于执行以下命令：

    electron.exe index.html

安装打包工具 electron-packager，全局安装，完成后执行打包：

    npm install electron-packager -g

    electron-packager . 'HelloWorld' --platform=win32 --arch=x64 --icon=icon.ico --out=./out --asar --app-version=0.0.1

可选打包工具还有 electron-builder 可以打包成 msi、exe、dmg 文件。macOS 系统，只能打包 dmg 文件，
Windows 系统才能打包 exe、msi 文件。没有安装 Electron 可以考虑安装一个 electron 的预编译版本。

    npm install electron-prebuilt

尝试此例，复制并运行这个库 electron/electron-quick-start。

Note: Running this requires Git and npm.

    $ git clone https://github.com/electron/electron-quick-start
    $ cd electron-quick-start
    $ npm install
    $ npm start

启动开发过程的有关模板文件和工具列表, 请参阅模板文件和 CLI 文档 。

Electron 源代码中包含了一系列示范应用，注意在新版本 Electron 运行时需要禁用上下文隔离配置，
以使用渲染进程的代码可以访问 require 等 API：

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }

    electron-25.1.1\docs\fiddles\
    |-- features
    |   |-- dark-mode
    |   |-- drag-and-drop
    |   |-- keyboard-shortcuts
    |   |   |-- global
    |   |   |-- interception-from-main
    |   |   |-- local
    |   |   `-- web-apis
    |   |-- macos-dock-menu
    |   |-- notifications
    |   |   |-- main
    |   |   `-- renderer
    |   |-- offscreen-rendering
    |   |-- online-detection
    |   |-- progress-bar
    |   |-- recent-documents
    |   |-- represented-file
    |   |-- web-bluetooth
    |   |-- web-hid
    |   |-- web-serial
    |   `-- web-usb
    |-- ipc
    |   |-- pattern-1
    |   |-- pattern-2
    |   |-- pattern-3
    |   `-- webview-new-window
    |-- media
    |   `-- screenshot
    |       `-- take-screenshot
    |-- menus
    |   |-- customize-menus
    |   `-- shortcuts
    |-- native-ui
    |   |-- dialogs
    |   |   |-- error-dialog
    |   |   |-- information-dialog
    |   |   |-- open-file-or-directory
    |   |   `-- save-dialog
    |   |-- drag-and-drop
    |   |-- external-links-file-manager
    |   |   |-- external-links
    |   |   `-- path-in-file-manager
    |   |-- notifications
    |   |   |-- basic-notification
    |   |   `-- notification-with-image
    |   `-- tray
    |-- quick-start
    |-- screen
    |   `-- fit-screen
    |-- system
    |   |-- clipboard
    |   |   |-- copy
    |   |   `-- paste
    |   |-- protocol-handler
    |   |   `-- launch-app-from-URL-in-another-app
    |   |-- system-app-user-information
    |   |   `-- app-information
    |   `-- system-information
    |       `-- get-version-information
    |-- tutorial-first-app
    |-- tutorial-preload
    `-- windows
        |-- crashes-and-hangs
        `-- manage-windows
            |-- create-frameless-window
            |-- frameless-window
            |-- manage-window-state
            |-- new-window
            `-- window-events


# 🐥 Electron 程序结构
- https://www.electronjs.org/docs/latest/tutorial/process-model
- https://www.electronjs.org/docs/latest/api/process
- https://www.electronjs.org/docs/tutorial/security
- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy
- Electron 初探问题总结 https://www.cnblogs.com/wonyun/p/10991984.html
- Electron + Vue.js 项目简介 https://zhuanlan.zhihu.com/p/142655397

Electron 内集成了 Nodejs，大大的方便了开发。Nodejs 在主进程和渲染进程中都可以使用，渲染进程因为安全限制，不能直接操作原生 GUI。

需要牢记的是，你的 Electron 程序安全性除了依赖于整个框架基础（Chromium、Node.js）、Electron 本身和所有相关 NPM 库的安全性，还依赖于你自己的代码安全性。 因此，你有责任遵循下列安全守则：

使用最新版的 Electron 框架搭建你的程序。你最终发行的产品中会包含 Electron、Chromium 共享库和 Node.js 的组件。 这些组件存在的安全问题也可能影响你的程序安全性。 

评估你的依赖项目 NPM 提供了五百万可重用的软件包，而你应当承担起选择可信任的第三方库。 如果你使用了受已知漏洞的过时的库，或是依赖于维护的很糟糕的代码，你的程序安全就可能面临威胁。

遵循安全编码实践你的代码是你的程序安全的第一道防线。 一般的网络漏洞，例如跨站脚本攻击(Cross-Site Scripting, XSS)，对 Electron 将造成更大的影响，因此非常建议你遵循安全软件开发最佳实践并进行安全性测试。


Electron API 对应进程有三种

- Main Process （主进进程）
- Renderer Process（渲染进程）
- Share Modules（共享模块）

Electron 模块基本按进程区别划分，不同的模块在相应的进程环境下使用：

- Main Process Modules
- Renderer Process Modules

跨站脚本 XSS 攻击很常见，攻击者跳过渲染进程并在用户电脑上执行恶意代码，危害是非常大的。在 Web 
中禁用 Node.js 集成有助于防止 XSS 攻击升级为“远程代码执行” RCE 攻击。

当禁用 Node.js 集成时，你可以暴露 API 给你的站点，以使用 Node.js 的模块功能或特性。
预加载脚本依然可以使用 require 等 Node.js 特性，以使开发者可以暴露自定义 API 给远程加载内容。

    const mainWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: false, // 是否完整的支持 node. 默认值为 false
        nodeIntegrationInWorker: false,// 是否在 Web 工作器中启用 Node 集成
        contextIsolation: false,
        preload: './preload.js'
      }
    })

在页面运行其他脚本之前预先加载指定的 preload 脚本，无论页面是否集成 Node, 此脚本都可以访问所有
Node API 脚本路径为文件的绝对路径。

新版本默认 contextIsolation = true 设置可能会导致教程中的应用出错，无法在渲染进程中调用 API：

    https://www.electronjs.org/blog/electron-12-0
    Uncaught ReferenceError: process is not defined
    Uncaught ReferenceError: require is not defined

https://www.electronjs.org/docs/latest/tutorial/context-isolation
https://www.electronjs.org/docs/latest/tutorial/security
Context Isolation is a feature that ensures that both your preload scripts and 
Electron's internal logic run in a separate context to the website you load in 
a webContents. This is important for security purposes as it helps prevent the 
website from accessing Electron internals or the powerful APIs your preload 
script has access to.

https://www.electronjs.org/docs/latest/tutorial/sandbox
MessagePorts are a web feature that allow passing messages between different 
contexts. It's like window.postMessage, but on different channels. The goal of 
this document is to describe how Electron extends the Channel Messaging model, 
and to give some examples of how you might use MessagePorts in your app.


下面结合新零售业务，对于 node – serialport 怎么处理的？

Electron 主进程设置：

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            nodeIntegrationInWorker: false
            preload: path.join(__dirname, 'preload.js')
        }
    })

在 preload.js 暴露 API 给站点：

    const serialport = require('serialport');
    let nav = {
        serialport:serialport
    }
    global.nav = nav;

站点使用 API：

    const contr = document.getElementById('port')
    const serialport = window.nav.serialport;
    if(!serialport) return;
    serialport.list((err, ports) => {
        for (let item of ports) {
            var div = document.createElement('div')
            div.innerHTML = item.comName
            contr.appendChild(div)
        }
        console.log(ports);
    });　

Preload 是在页面第一次加载文档之前预先加载的脚本，其需要注意 3 个问题:

- preload 配置的脚本文件路径，只能为本地文件，其协议必须是 file: 或者 asar:。
- preload 脚本仍然有能力去访问所有的 Node APIs, 即使配置 nodeIntegration: false。
- preload 脚本执行执行完成之后，通过 Node 注入的全局对象 global objects 将会被删除。

当使用了启用 contextIsolation 上下文隔离：

      // https://www.bookstack.cn/read/electronjs-9.0/tutorial-context-isolation.md
      mainWindow = new BrowserWindow({
        width: 1000, height: 800,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
          preload: __dirname + '/preload.js'
        }
      })

那表示 preload 脚本中访问的 window 对象和加载的页面使用的是两个不同的对象，参考代码：

    global.exprocess = Object.assign({}, process);
    global.process = Object.assign({}, process); // don't work!

    const { webFrame } = require('electron')
    // 以下方式在页面加载前设置变量，即使隔离上下文也可以访问，但会丢失上下文的访问
    webFrame.executeJavaScript('window.foo = "foo";')
    webFrame.executeJavaScript(`window.write2File = ${writeToFile};`)
    webFrame.executeJavaScript(`window.wfprocess = ${JSON.stringify(process)};`);
    webFrame.executeJavaScript(`window.fs = ${fs};`) // don't work!
    webFrame.executeJavaScript(`window.process = ${JSON.stringify(process)};`); // don't work!

    // 以下方式这些变量在隔离上下文时 contextIsolation: true，被加载的页面将无权访问
    window.bar = 'bar'
    global.loadURL = loadURL;

Before: With context isolation disabled

    window.myAPI = {
      doAThing: () => {}
    }

After: With context isolation enabled

    const { contextBridge } = require('electron')
    contextBridge.exposeInMainWorld('myAPI', {
      doAThing: () => {}
    })


## 🐣 Preload Scripts
https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

Preload scripts
Preload scripts contain code that executes in a renderer process before its 
web content begins loading. These scripts run within the renderer context, 
but are granted more privileges by having access to Node.js APIs.

A preload script can be attached to the main process in the BrowserWindow 
constructor's webPreferences option.

      webPreferences: {
        preload: 'path/to/preload.js'
      }

Because the preload script shares a global Window interface with the renderers 
and can access Node.js APIs, it serves to enhance your renderer by exposing 
arbitrary APIs in the window global that your web contents can then consume.

Although preload scripts share a window global with the renderer they're 
attached to, you cannot directly attach any variables from the preload script 
to window because of the contextIsolation default.

```js
    // preload.js
    window.myAPI = {
      desktop: true
    }

    // renderer.js
    console.log(window.myAPI)
    // => undefined
```

Context Isolation means that preload scripts are isolated from the renderer's 
main world to avoid leaking any privileged APIs into your web content's code.

Instead, use the contextBridge module to accomplish this securely:

```js
    // preload.js
    const { contextBridge } = require('electron')

    contextBridge.exposeInMainWorld('myAPI', {
      desktop: true
    })

    // renderer.js
    console.log(window.myAPI)
    // => { desktop: true }
```

This feature is incredibly useful for two main purposes:

By exposing **ipcRenderer** helpers to the renderer, you can use inter-process 
communication (IPC) to trigger main process tasks from the renderer (and vice-versa).

If you're developing an Electron wrapper for an existing web app hosted on a 
remote URL, you can add custom properties onto the renderer's window global 
that can be used for desktop-only logic on the web client's side.

在预加载脚本中，不能直接调用 getElementById 这样的 API 获取页面元素的引用，应该在内容加载后：

```js
    window.addEventListener('DOMContentLoaded', () => {
      const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
      }

      for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
      }
    })
```

示范参考

    electron-25.1.1\docs\fiddles\quick-start\index.html
    electron-25.1.1\docs\fiddles\tutorial-preload\index.html

```html,ignore
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self'"
        />
        <meta
          http-equiv="X-Content-Security-Policy"
          content="default-src 'self'; script-src 'self'"
        />
        <title>Hello from Electron renderer!</title>
      </head>
      <body>
        <h1>Hello from Electron renderer!</h1>
        <p>👋</p>
        <p id="info"></p>
      </body>
      <script src="./renderer.js"></script>
    </html>
```

脚本参考：

```js,ignore
    // ===main.js===
    const { app, BrowserWindow } = require('electron')
    const path = require('path')

    const createWindow = () => {
      const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js')
        }
      })

      win.loadFile('index.html')
    }

    app.whenReady().then(() => {
      createWindow()

      app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
      })
    })

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })


    // ===preload.js===
    const { contextBridge } = require('electron')

    contextBridge.exposeInMainWorld('versions', {
      node: () => process.versions.node,
      chrome: () => process.versions.chrome,
      electron: () => process.versions.electron
    })

    // ===renderer.js===
    const information = document.getElementById('info')
    information.innerText = `This app is using 
        Chrome (v${window.versions.chrome()}), 
        Node.js (v${window.versions.node()}), and 
        Electron (v${window.versions.electron()})`
```


## 🐣 app 程序对象
- https://www.electronjs.org/docs/api/app

app 控制应用程序的事件生命周期。

进程：主进程

下面的这个例子将会展示如何在最后一个窗口被关闭时退出应用：

    const { app } = require('electron')
    app.on('window-all-closed', () => {
      app.quit()
    })

## 🐣 BrowserWindow 浏览器对象
- https://electronjs.org/docs/api/browser-window
- https://weishuai.gitbooks.io/electron-/content/api/browser-window.html
- https://www.electronjs.org/docs/api/web-frame
- https://www.electronjs.org/docs/api/web-contents

主进程用来创建和控制浏览器窗口。

    // 在主进程中.
    const { BrowserWindow } = require('electron')

    // 或者从渲染进程中使用 `remote`.
    // const { BrowserWindow } = require('electron').remote

    const win = new BrowserWindow({ width: 800, height: 600 })

    // Load a remote URL
    win.loadURL('https://github.com')

    // Or load a local HTML file
    win.loadURL(`file://${__dirname}/app/index.html`)

webContents is an EventEmitter. 负责渲染和控制网页, 是 BrowserWindow 对象的一个属性。 这是一个访问 webContents 对象的例子:

    const { BrowserWindow } = require('electron')

    const win = new BrowserWindow({ width: 800, height: 1500 })
    win.loadURL('http://github.com')

    const contents = win.webContents
    console.log(contents)

webFrame 是 Electron 模块导出的 WebFrame 实例，表示当前 BrowserWindow 顶层 frame。获取 Sub-frames 可以使用 webFrame.firstChild。

将当前页缩放到 200% 的示例。

    const { webFrame } = require('electron')
    webFrame.setZoomFactor(2)

在渲染进程中使用主进程的模块需要使用 remote 模块，因为直接访问主进程模块会有安全问题。
remote 模块会在渲染进程和主进程之间建立一个安全通道，从而使得渲染进程可以安全地访问主进程的模块。

Disabling the remote Module
https://www.electronjs.org/blog/electron-4-0#disabling-the-remote-module
You now have the ability to disable the remote module for security reasons. 
The module can be disabled for BrowserWindows and for webview tags:

    // BrowserWindow
    new BrowserWindow({
      webPreferences: {
        enableRemoteModule: false
      }
    })

    // webview tag
    <webview src="http://www.google.com/" enableremotemodule="false"></webview>


An easier way to use the remote module
https://www.electronjs.org/blog/electron-api-changes
Because of the way using built-in modules has changed, we have made it easier 
to use main-process-side modules in renderer process. You can now just access 
remote's attributes to use them:

    // New way.
    var app = require('electron').remote.app;
    var BrowserWindow = require('electron').remote.BrowserWindow;

    Instead of using a long require chain:

    // Old way.
    var app = require('electron').remote.require('app');
    var BrowserWindow = require('electron').remote.require('BrowserWindow');

Removed: remote module
https://www.electronjs.org/blog/electron-14-0
https://www.electronjs.org/docs/latest/breaking-changes#removed-remote-module
Deprecated in Electron 12, the remote module has now been removed from Electron 
itself and extracted into a separate package, @electron/remote. 

The `@electron/remote` module bridges JavaScript objects from the main process 
to the renderer process. This lets you access main-process-only objects as if 
they were available in the renderer process. This is a direct replacement for the 
remote module. See the module's readme for migration instructions and reference.


Opening windows from the renderer
https://www.electronjs.org/docs/latest/api/window-open
There are several ways to control how windows are created from trusted or untrusted content within a renderer. Windows can be created from the renderer in two ways:

1. clicking on links or submitting forms adorned with `target=_blank`
2. JavaScript calling `window.open()`

Electron 14 正式移除 remote 模块，enableRemoteModule 不能再开启 remote 模块。
解决方法是用 @electron/remote 模块替代：

    npm install --save @electron/remote

在主进程中初始化并开启模块，其中 mainWindow 为主窗口实例，然后在渲染进程中获取 BrowserWindow：

    require('@electron/remote/main').initialize()
    require("@electron/remote/main").enable(mainWindow.webContents)
    
    const { BrowserWindow } = require('@electron/remote')

这种方法在本地启动的时候是可以的，但是使用 electron-packager 打包之后，因为 @electron/remote
没有打包，就会报错 'Error: Cannot find module '@electron/remote'...

参考 electron-25.1.1\docs\fiddles\windows\manage-windows\new-window

main.js 主进程：

```js
    // Modules to control application life and create native browser window
    const { app, BrowserWindow, ipcMain } = require('electron')

    ipcMain.on('new-window', (event, { url, width, height }) => {
      const win = new BrowserWindow({ width, height })
      win.loadURL(url)
    })

    function createWindow () {
      // Create the browser window.
      const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
        }
      })

      // and load the index.html of the app.
      mainWindow.loadFile('index.html')
    }

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.whenReady().then(() => {
      createWindow()

      app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
    })

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    // In this file you can include the rest of your app's specific main process
    // code. You can also put them in separate files and require them here.
```

renderer.js 渲染线程：

```js
    const { shell, ipcRenderer } = require('electron')

    const newWindowBtn = document.getElementById('new-window')
    const link = document.getElementById('browser-window-link')

    newWindowBtn.addEventListener('click', (event) => {
      const url = 'https://electronjs.org'
      ipcRenderer.send('new-window', { url, width: 400, height: 320 })
    })

    link.addEventListener('click', (e) => {
      e.preventDefault()
      shell.openExternal('https://electronjs.org/docs/api/browser-window')
    })
```


## 🐣 IPC 信息通信
- https://www.electronjs.org/docs/api/ipc-main
- https://www.electronjs.org/docs/api/ipc-renderer
- https://www.electronjs.org/docs/api/remote


https://www.electronjs.org/docs/latest/tutorial/ipc
Inter-process communication (IPC) is a key part of building feature-rich desktop 
applications in Electron. Because the main and renderer processes have different 
responsibilities in Electron's process model, IPC is the only way to perform many 
common tasks, such as calling a native API from your UI or triggering changes in 
your web contents from native menus.

IPC channels
In Electron, processes communicate by passing messages through developer-defined 
"channels" with the ipcMain and ipcRenderer modules. These channels are arbitrary 
(you can name them anything you want) and bidirectional (you can use the same 
channel name for both modules).

ipcRenderer 是一个 EventEmitter 的实例，可以使用它提供的一些方法从渲染进程 (web 页面) 
发送同步或异步的消息到主进程，也可以接收主进程回复的消息。

ipcMain 是一个 EventEmitter 的实例，当在主进程中使用时，它处理从渲染器进程（网页）发送来
的异步和同步信息，接收从渲染器进程发送来的消息。

也可以从主进程向渲染进程发送消息，查阅 webContents.send 获取更多信息。

- 发送消息时，事件名称在 API 的 `channel` 参数中指定。
- 回复同步信息时，需要设置 `event.returnValue`。
- 使用 `event.reply(...)` 将异步消息发送回发送者，回复包括从 iframes 发来的消息。
  `event.sender.send(...)` 总是发消息到主进程。

Sending messages

It is also possible to send messages from the main process to the renderer
process, see [webContents.send] for more information.

* When sending a message, the event name is the `channel`.
* To reply to a synchronous message, you need to set `event.returnValue`.
* To send an asynchronous message back to the sender, you can use
  `event.reply(...)`.  This helper method will automatically handle messages
  coming from frames that aren't the main frame (e.g. iframes) whereas
  `event.sender.send(...)` will always send to the main frame.

https://www.electronjs.org/docs/latest/api/web-contents
`webContents` is an EventEmitter. It is responsible for rendering and 
controlling a web page and is a property of the BrowserWindow object.

    contents.send(channel, ...args)
    contents.sendToFrame(frameId, channel, ...args)
    contents.postMessage(channel, message, [transfer])
    contents.sendInputEvent(inputEvent)

invoke 和 handle 是配套使用的方法，一方发起调用，另一方接收处理：

```js
// Renderer process
ipcRenderer.invoke('some-name', someArgument).then((result) => {
  // ...
})

// Main process
ipcMain.handle('some-name', async (event, someArgument) => {
  const result = await doSomeWork(someArgument)
  return result
})
```

ipcRenderer Methods

    ipcRenderer.on(channel, listener)
    ipcRenderer.once(channel, listener)
    ipcRenderer.removeListener(channel, listener)
    ipcRenderer.removeAllListeners(channel)
    ipcRenderer.send(channel, ...args)
    ipcRenderer.invoke(channel, ...args)
    ipcRenderer.sendSync(channel, ...args)
    ipcRenderer.postMessage(channel, message, [transfer])
    ipcRenderer.sendTo(webContentsId, channel, ...args)
    ipcRenderer.sendToHost(channel, ...args)

ipcMain Methods

    ipcMain.on(channel, listener)
    ipcMain.once(channel, listener)
    ipcMain.removeListener(channel, listener)
    ipcMain.removeAllListeners([channel])
    ipcMain.handle(channel, listener)
    ipcMain.handleOnce(channel, listener)
    ipcMain.removeHandler(channel)

IpcMainEvent object

* `processId` Integer - The internal ID of the renderer process that sent this message
* `frameId` Integer - The ID of the renderer frame that sent this message
* `returnValue` any - Set this to the value to be returned in a synchronous message
* `sender` [WebContents] - Returns the `webContents` that sent the message
* `senderFrame` [WebFrameMain] _Readonly_ - The frame that sent this message
* `ports` [MessagePortMain] - A list of MessagePorts that were transferred with this message
* `reply` Function - A function that will send an IPC message to the renderer frame that sent the original message that you are currently handling.  You should use this method to "reply" to the sent message in order to guarantee the reply will go to the correct process and frame.
  * `channel` string
  * `...args` any[]

IpcMainInvokeEvent object

* `processId` Integer - The internal ID of the renderer process that sent this message
* `frameId` Integer - The ID of the renderer frame that sent this message
* `sender` [WebContents] - Returns the `webContents` that sent the message
* `senderFrame` [WebFrameMain] _Readonly_ - The frame that sent this message

注意，方法名带有 handle 字样的，如 `ipcMain.handle(channel, listener)`，其事件对象均为
`IpcMainInvokeEvent`，就不能使用 reply 方法回复信息。


下面是在渲染和主进程之间发送和处理消息的一个例子：

```js
    // 主进程
    const { ipcMain } = require('electron')
    ipcMain.on('asynchronous-message', (event, arg) => {
      console.log(arg) // prints "ping"
      event.reply('asynchronous-reply', 'pong')
    })

    ipcMain.on('synchronous-message', (event, arg) => {
      console.log(arg) // prints "ping"
      event.returnValue = 'pong'
    })

    // 渲染进程
    const { ipcRenderer } = require('electron')
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping'))

    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg) // prints "pong"
    })
    ipcRenderer.send('asynchronous-message', 'ping')
```

主进程脚本 main.js：

```js
    // Modules
    const {app, BrowserWindow, ipcMain} = require('electron')

    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    let mainWindow

    // Create a new BrowserWindow when `app` is ready
    function createWindow () {

      mainWindow = new BrowserWindow({
        width: 1000, height: 800, x: 100, y:140, show: false,
        webPreferences: { 
          nodeIntegration: true,
          nodeIntegrationInWorker: true,
          contextIsolation: false,
          devTools: true,    // 调试工具可用
          webSecurity: true, // 同源策略(上线应该删除)
          // preload: './preload.js' 
        }
      })
      
      mainWindow.once('ready-to-show', () => {
        mainWindow.show()
      })

      // Load index.html into the new BrowserWindow
      mainWindow.loadFile('index.html')

      // Open DevTools - Remove for PRODUCTION!
      mainWindow.webContents.openDevTools();

      mainWindow.webContents.on( 'did-finish-load', e => {

        // mainWindow.webContents.send( 'mailbox', {
        //   from: 'Ray',
        //   email: 'ray@stackacademy.tv',
        //   priority: 1
        // })
      })

      // Listen for window being closed
      mainWindow.on('closed',  () => {
        mainWindow = null
      })
    }

    ipcMain.on( 'closed', (e, args) => {
      if (process.platform !== 'darwin') app.quit();
      e.returnValue = true;
    })

    ipcMain.on( 'sync-message', (e, args) => {
      console.log('[sync-message]', args)

      setTimeout( () => {
        e.returnValue = 'A sync response from the main process'
      }, 3000)

    })

    ipcMain.on( 'channel-01', (e, args) => {
      let ret = 'Main process received msg on "channel-01". Thank you!';
      console.log('[channel-01]', args)
      e.sender.send( 'sync-message', ret)
      e.returnValue = ret;
    })

    // Electron `app` is ready
    app.on('ready', createWindow)

    // Quit when all windows are closed - (Not macOS - Darwin)
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') app.quit()
    })

    // When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
    app.on('activate', () => {
      if (mainWindow === null) createWindow()
    })
```

渲染进程脚本：

```js
    // This file is required by the index.html file and will
    // be executed in the renderer process for that window.
    // All of the Node.js APIs are available in this process.

    const { ipcRenderer } = require('electron')

    let bind = (target, event, handler) => {
        document.getElementById(target).addEventListener(event, handler);
    }

    bind('exit', 'click', e => {
        let res = ipcRenderer.sendSync( 'closed', true );
        console.log("[close]", res);
    });

    bind('talk', 'click', e => {
        let msg = 'From Renderer Process: Hello!';
        // return nothing for asynchrous send.
        ipcRenderer.send( 'channel-01', msg)

        let response = ipcRenderer.sendSync( 'sync-message', msg)
        console.log('[sync-message] response', response)
    })

    ipcRenderer.on( 'sync-message', (e, args) => {
      console.log('[sync-message]', args);
      e.returnValue = "Done!";
    })
```


## 🐣 webview
- https://www.electronjs.org/docs/api/webview-tag
- http://www.ayqy.net/blog/electron-webview完全指南/
- https://www.chromium.org/developers/design-documents/displaying-a-web-page-in-chrome/

Electron 提供 `<webview>` 标签来嵌入 Web 页面。但是 webview 标签基于 Chromium webview，
考虑稳定性，以及内容呈现、导航和事件路由，目前建议不使用 webview 标签，并考虑其他替代方案，
如 iframe、Electron 的 BrowserView 或完全避免嵌入内容的体系结构。

与渲染进程之间的通信不同，渲染进程与 webview 之间的通信，在 webview 层通过调用 sendToHost 方法来向渲染进程通信；而在渲染进程测通过 webview 提供的 ipc-message 事件来向 webview 通信。

具体如下面代码所示：

```js
    // renderer环境，获取webview，然后注册事件
    webview.addEventListener('ipc-message', (event) => {
      // 通过event.channel的值来判断webview发送的事件名
      if (event.channel === 'webview_event_name') {
        console.log(event.args[0]) // 123
      }
    })
    webview.send('renderer_event_name', '456')

    // webview环境
    const {ipcRenderer} = require('electron')
    ipcRenderer.on('renderer_event_name', (e, message) => {
      console.log(message); // 456
      ipcRenderer.sendToHost('webview_event_name', '123')
    })
```

Removed: <webview> new-window event
https://www.electronjs.org/docs/latest/breaking-changes#removed-webview-new-window-event
The new-window event of <webview> has been removed. There is no direct replacement.

    // Removed in Electron 22
    webview.addEventListener('new-window', (event) => {})

参考 electron-25.1.1\docs\fiddles\ipc\webview-new-window


## 🐣 Protocol 自定义协议处理
https://www.electronjs.org/docs/latest/api/protocol
https://www.electronjs.org/docs/latest/api/app#appsetasdefaultprotocolclientprotocol-path-args

示范参考 electron-25.1.1\docs\fiddles\system\protocol-handler

详解 Electron 应用内协议
https://juejin.cn/post/7211151196329279544

Electron 中的 protocol 模块提供了协议拦截、注册两大类与协议相关的方法：

    interceptBufferProtocol    拦截协议并响应 buffer
    interceptFileProtocol      拦截协议并响应 file
    interceptHttpProtocol      拦截协议并响应 http/https 请求
    interceptStreamProtocol    拦截协议并响应 stream
    interceptStringProtocol    拦截协议并响应 string
    uninterceptProtocol        取消协议拦截
    isProtocolHandled(scheme)

    registerBufferProtocol      注册协议并响应 buffer
    registerFileProtocol        注册协议并响应 file
    registerHttpProtocol        注册协议并响应 http/https 请求
    registerStreamProtocol      注册协议并响应 stream
    registerStringProtocol      注册协议并响应 string
    unregisterProtocol(scheme)  取消协议注册

API 命名规则：所谓的 interceptXXXProtocol(yyy) 是指拦截 yyy 这种形式的 scheme，并且
以 XXX 协议的形式返回结果。不过，以上这些 API 已经过时，在新版本中使用 handle() 替代：

Planned Breaking API Changes (10.0)
https://www.electronjs.org/docs/latest/breaking-changes

    protocol.registerSchemesAsPrivileged(customSchemes)
    protocol.handle(scheme, handler)
    protocol.unhandle(scheme)
    protocol.isProtocolIntercepted(scheme)
    protocol.isProtocolRegistered(scheme)

The APIs are now synchronous and the optional callback is no longer needed.

    // Deprecated
    protocol.unregisterProtocol(scheme, () => { /* ... */ })
    // Replace with
    protocol.unregisterProtocol(scheme)

    // Deprecated
    protocol.registerFileProtocol(scheme, handler, () => { /* ... */ })
    // Replace with
    protocol.registerFileProtocol(scheme, handler)


Protocol 的中文翻译是「协议」，例如 HTTP Protocol，FTP Protocol 就是常见的协议。
与之相关的另外一个概念，那就是 scheme，这个单词非常容易跟 protocol 搞混淆，但特别重要。

要解释清楚 scheme 是什么，需要从统一资源标识符（URI）开始讲起，维基百科的原文是：

    A Uniform Resource Identifier (URI) is a unique sequence of characters 
    that identifies a logical or physical resource used by web technologies.

URI's are transferred as strings. The URI's format is defined in 
[http://tools.ietf.org/html/rfc3986](http://tools.ietf.org/html/rfc3986)

    3.  Syntax Components

      foo://example.com:8042/over/there?name=ferret#nose
      \_/   \______________/\_________/ \_________/ \__/
       |           |            |            |        |
    scheme     authority       path        query   fragment
       |   _____________________|__
      / \ /                        \
      urn:example:animal:ferret:nose

常见的 URI 形式有：

    https://www.baidu.com
    telnet://192.0.2.16:80/
    mailto:John.Doe@example.com
    tel:+1-816-555-1212

而 scheme 就是从 URI 中最开始位置到第一个冒号（:）之间的字符串，可以理解为 protocol 的标识符。
Electron app 的另一个 API，可以设置当前应用为 protocol 协议默认客户端，后续通过 protocol://
这样的 scheme 就可以唤起这个应用响应相应的链接。

    app.setAsDefaultProtocolClient(protocol[, path, args])
    app.removeAsDefaultProtocolClient(protocol[, path, args])
    app.isDefaultProtocolClient(protocol[, path, args])
    app.getApplicationNameForProtocol(url)
    app.getApplicationInfoForProtocol(url)

这是对 app 外部行为而言的，协议注册到操作系统，由系统处理响应动作，即应用外部的链接动作唤起。
而 protocol 模块则提供应用内的协议响应，允许用户在应用内部自定义协议，或者对已有协议进行拦截。



Using protocol with a custom partition or session
A protocol is registered to a specific Electron session object. If you don't 
specify a session, then your protocol will be applied to the default session 
that Electron uses. However, if you define a partition or session on your 
browserWindow's webPreferences, then that window will use a different session 
and your custom protocol will not work if you just use electron.protocol.XXX.

To have your custom protocol work in combination with a custom session, you 
need to register it to that session explicitly.

```js
    const { app, BrowserWindow, net, protocol, session } = require('electron')
    const path = require('path')
    const url = require('url')

    app.whenReady().then(() => {
      const partition = 'persist:example'
      const ses = session.fromPartition(partition)

      ses.protocol.handle('atom', (request) => {
        const filePath = request.url.slice('atom://'.length)
        return net.fetch(url.pathToFileURL(path.join(__dirname, filePath)).toString())
      })

      const mainWindow = new BrowserWindow({ webPreferences: { partition } })
    })
```

HTML 页面包含自定义协议链接示范：

      <h1>App Default Protocol Demo</h1>

      <h3>Demo</h3>
      <p>
        First: Launch current page in browser
        <button id="open-in-browser" class="js-container-target demo-toggle-button">
            Click to Launch Browser
          </button>
      </p>

      <p>
        Then: Launch the app from a web link!
        <a href="electron-fiddle://open">Click here to launch the app</a>
      </p>

You can set your app as the default app to open for a specific protocol. For instance, in this demo we set this app as the default for electron-fiddle://. The demo button above will launch a page in your default browser with a link. Click that link and it will re-launch this app.

Packaging
This feature will only work on macOS when your app is packaged. It will not work when you're launching it in development from the command-line. When you package your app you'll need to make sure the macOS plist for the app is updated to include the new protocol handler. If you're using electron-packager then you can add the flag --extend-info with a path to the plist you've created. The one for this app is below:

macOS plist

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
            <plist version="1.0">
                <dict>
                    <key>CFBundleURLTypes</key>
                    <array>
                        <dict>
                            <key>CFBundleURLSchemes</key>
                            <array>
                                <string>electron-api-demos</string>
                            </array>
                            <key>CFBundleURLName</key>
                            <string>Electron API Demos Protocol</string>
                        </dict>
                    </array>
                    <key>ElectronTeamID</key>
                    <string>VEKTX9H2N7</string>
                </dict>
            </plist>


```js,ignore
    // ===preload.js===
    // All of the Node.js APIs are available in the preload process.
    // It has the same sandbox as a Chrome extension.
    const { contextBridge, ipcRenderer } = require('electron')

    // Set up context bridge between the renderer process and the main process
    contextBridge.exposeInMainWorld(
      'shell',
      {
        open: () => ipcRenderer.send('shell:open')
      }
    )

    // ===renderer.js===
    // This file is required by the index.html file and will
    // be executed in the renderer process for that window.
    // All APIs exposed by the context bridge are available here.

    // Binds the buttons to the context bridge API.
    document.getElementById('open-in-browser').addEventListener('click', () => {
      window.shell.open()
    })

    // ===main.js===
    // Modules to control application life and create native browser window
    const { app, BrowserWindow, ipcMain, shell, dialog } = require('electron')
    const path = require('path')

    let mainWindow

    if (process.defaultApp) {
      if (process.argv.length >= 2) {
        app.setAsDefaultProtocolClient('electron-fiddle', process.execPath, [path.resolve(process.argv[1])])
      }
    } else {
      app.setAsDefaultProtocolClient('electron-fiddle')
    }

    const gotTheLock = app.requestSingleInstanceLock()

    if (!gotTheLock) {
      app.quit()
    } else {
      app.on('second-instance', (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        if (mainWindow) {
          if (mainWindow.isMinimized()) mainWindow.restore()
          mainWindow.focus()
        }

        dialog.showErrorBox('Welcome Back', `You arrived from: ${commandLine.pop().slice(0, -1)}`)
      })

      // Create mainWindow, load the rest of the app, etc...
      app.whenReady().then(() => {
        createWindow()
      })

      app.on('open-url', (event, url) => {
        dialog.showErrorBox('Welcome Back', `You arrived from: ${url}`)
      })
    }

    function createWindow () {
      // Create the browser window.
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js')
        }
      })

      mainWindow.loadFile('index.html')
    }

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    // Handle window controls via IPC
    ipcMain.on('shell:open', () => {
      const pageDirectory = __dirname.replace('app.asar', 'app.asar.unpacked')
      const pagePath = path.join('file://', pageDirectory, 'index.html')
      shell.openExternal(pagePath)
    })
```

## 🐣 shell
- https://www.electronjs.org/docs/api/shell

使用系统默认 shell 应用程序打开文件和 url。

Process: Main, Renderer (non-sandboxed only)

shell 模块提供与桌面集成相关的功能。

在用户的默认浏览器中打开 URL 的示例：
electron-25.1.1\docs\fiddles\native-ui\external-links-file-manager\renderer.js

```js
    const { shell } = require('electron')
    const os = require('os')

    const exLinksBtn = document.getElementById('open-ex-links')
    const fileManagerBtn = document.getElementById('open-file-manager')

    fileManagerBtn.addEventListener('click', (event) => {
      shell.showItemInFolder(os.homedir())
    })

    exLinksBtn.addEventListener('click', (event) => {
      shell.openExternal('https://electronjs.org')
    })
```


## 🐣 Drag & Drop
https://www.electronjs.org/docs/latest/tutorial/native-file-drag-drop
https://www.electronjs.org/docs/latest/api/web-contents#contentsstartdragitem
https://www.electronjs.org/docs/latest/api/native-image

通过 WebContents API 将页面中的内容拖放到系统中，并写入文件，示范参考：

    electron-25.1.1\docs\fiddles\native-ui\drag-and-drop\renderer.js

渲染程脚本：

```js
const { ipcRenderer } = require('electron')
const shell = require('electron').shell

const links = document.querySelectorAll('a[href]')

Array.prototype.forEach.call(links, (link) => {
  const url = link.getAttribute('href')
  if (url.indexOf('http') === 0) {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      shell.openExternal(url)
    })
  }
})

const dragFileLink = document.getElementById('drag-file-link')

dragFileLink.addEventListener('dragstart', event => {
  event.preventDefault()
  ipcRenderer.send('ondragstart', __filename)
})
```

主进程脚本：

```js
    // Modules to control application life and create native browser window
    const { app, BrowserWindow, ipcMain, nativeImage } = require('electron')
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    let mainWindow

    function createWindow () {
      // Create the browser window.
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
        }
      })

      // and load the index.html of the app.
      mainWindow.loadFile('index.html')

      // Open the DevTools.
      // mainWindow.webContents.openDevTools()

      // Emitted when the window is closed.
      mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
      })
    }

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.whenReady().then(createWindow)

    // Quit when all windows are closed.
    app.on('window-all-closed', function () {
      // On macOS it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', function () {
      // On macOS it is common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) {
        createWindow()
      }
    })

    ipcMain.on('ondragstart', (event, filepath) => {
      const icon = nativeImage.createFromDataURL('data:image/png;base64,iVBORw0...')

      event.sender.startDrag({
        file: filepath,
        icon
      })
    })

    // In this file you can include the rest of your app's specific main process
    // code. You can also put them in separate files and require them here.
```

## 🐣 File Open/Save Dialog
https://www.electronjs.org/docs/latest/api/dialog

Dialog Methods

    dialog.showOpenDialogSync([browserWindow, ]options)
    dialog.showOpenDialog([browserWindow, ]options)
    dialog.showSaveDialogSync([browserWindow, ]options)
    dialog.showSaveDialog([browserWindow, ]options)
    dialog.showMessageBoxSync([browserWindow, ]options)
    dialog.showMessageBox([browserWindow, ]options)
    dialog.showErrorBox(title, content)
    dialog.showCertificateTrustDialog([browserWindow, ]options)` _macOS_ _Windows

参考示范

    electron-25.1.1\docs\fiddles\ipc\pattern-2\index.html
    electron-25.1.1\docs\fiddles\native-ui\dialogs\error-dialog\main.js
    electron-25.1.1\docs\fiddles\native-ui\dialogs\save-dialog\main.js
    electron-25.1.1\docs\fiddles\native-ui\dialogs\open-file-or-directory\main.js
    electron-25.1.1\docs\fiddles\native-ui\dialogs\information-dialog\main.js

```js
    // Modules to control application life and create native browser window
    const { app, BrowserWindow, ipcMain, dialog } = require('electron')

    ipcMain.on('open-error-dialog', event => {
      dialog.showErrorBox('An Error Message', 'Demonstrating an error message.')
    })

    ipcMain.on('open-information-dialog', event => {
      const options = {
        type: 'info',
        title: 'Information',
        message: "This is an information dialog. Isn't it nice?",
        buttons: ['Yes', 'No']
      }
      dialog.showMessageBox(options, index => {
        event.sender.send('information-dialog-selection', index)
      })
    })

    ipcMain.on('save-dialog', event => {
      const options = {
        title: 'Save an Image',
        filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]
      }
      dialog.showSaveDialog(options, filename => {
        event.sender.send('saved-file', filename)
      })
    })

    ipcMain.on('open-file-dialog', event => {
      dialog.showOpenDialog(
        {
          properties: ['openFile', 'openDirectory']
        },
        files => {
          if (files) {
            event.sender.send('selected-directory', files)
          }
        }
      )
    })
```

index.html 文件参考：

```html,ignore
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
        <title>Dialog</title>
      </head>
      <body>
        <button type="button" id="btn">Open a File</button>
        File path: <strong id="filePath"></strong>
        <script src='./renderer.js'></script>
      </body>
    </html>
```

main.js 文件参考：

```js,ignore
    const { app, BrowserWindow, ipcMain, dialog } = require('electron')
    const path = require('path')

    async function handleFileOpen () {
      const { canceled, filePaths } = await dialog.showOpenDialog()
      if (!canceled) {
        return filePaths[0]
      }
    }

    function createWindow () {
      const mainWindow = new BrowserWindow({
        webPreferences: {
          preload: path.join(__dirname, 'preload.js')
        }
      })
      mainWindow.loadFile('index.html')
    }

    app.whenReady().then(() => {
      ipcMain.handle('dialog:openFile', handleFileOpen)
      createWindow()
      app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
    })

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })
```

preload.js 文件参考：

```js
    const { contextBridge, ipcRenderer } = require('electron')

    contextBridge.exposeInMainWorld('electronAPI', {
      openFile: () => ipcRenderer.invoke('dialog:openFile')
    })
```

renderer.js 文件参考：

```js
    const btn = document.getElementById('btn')
    const filePathElement = document.getElementById('filePath')

    btn.addEventListener('click', async () => {
      const filePath = await window.electronAPI.openFile()
      filePathElement.innerText = filePath
    })
```


## 🐣 Notification API
https://notifications.spec.whatwg.org

参考 electron-25.1.1\docs\fiddles\native-ui\notifications\renderer.js

```js
    const basicNotification = {
      title: 'Basic Notification',
      body: 'Short message part'
    }

    const notification = {
      title: 'Notification with image',
      body: 'Short message plus a custom image',
      icon: 'https://via.placeholder.com/150'
    }

    const basicNotificationButton = document.getElementById('basic-noti')
    const notificationButton = document.getElementById('advanced-noti')

    notificationButton.addEventListener('click', () => {
      const myNotification = new window.Notification(notification.title, notification)

      myNotification.onclick = () => {
        console.log('Notification clicked')
      }
    })

    basicNotificationButton.addEventListener('click', () => {
      const myNotification = new window.Notification(basicNotification.title, basicNotification)

      myNotification.onclick = () => {
        console.log('Notification clicked')
      }
    })
```


## 🐣 App Menus
https://electronjs.org/docs/api/tray
https://www.electronjs.org/docs/latest/api/menu
https://www.electronjs.org/docs/latest/api/menu-item
https://www.electronjs.org/docs/latest/api/global-shortcut

参考 

    electron-25.1.1\docs\fiddles\ipc\pattern-3\index.html
    electron-25.1.1\docs\fiddles\native-ui\tray\index.html
    electron-25.1.1\docs\fiddles\menus\shortcuts\main.js

快捷键注册与使用：

```js
    // Modules to control application life and create native browser window
    const { app, BrowserWindow, globalShortcut, dialog } = require('electron')

      globalShortcut.register('CommandOrControl+Alt+K', () => {
        dialog.showMessageBox({
          type: 'info',
          message: 'Success!',
          detail: 'You pressed the registered global shortcut keybinding.',
          buttons: ['OK']
        })
      })

      globalShortcut.unregisterAll()
```

系统托盘图标上下方菜单：

```js
    const { app, Tray, Menu, nativeImage } = require('electron')

    let tray

    app.whenReady().then(() => {
      const icon = nativeImage.createFromDataURL('data:image/png;base64,iVBORw0KGgoAA...')
      tray = new Tray(icon)

      const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
      ])

      tray.setToolTip('This is my application.')
      tray.setContextMenu(contextMenu)
    })
```


创建一个 HTML 模板，可以加载 Renderer 进行的脚本：

```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline'">
        <title>Hello World!</title>
      </head>
      <body>
        <h1>Hello World!</h1>

        <textarea name="name" rows="8" cols="80"></textarea>

        <!-- All of the Node.js APIs are available in this renderer process. -->
        We are using Node.js <strong><script>document.write( process.versions.node)</script></strong>,
        and Electron <strong><script>document.write( process.versions.electron )</script></strong>.

        <!-- Electron使用指南 - [03] Main Process APIhttps://zhuanlan.zhihu.com/p/142158949 -->

        <script>
          // You can also require other files to run in this process
          require('./renderer.js')
        </script>
      </body>
    </html>
```

渲染线程脚本参考 renderer.js，使用了 ipcRenderer 与页面主进程通信：

```js,ignore
    // This file is required by the index.html file and will
    // be executed in the renderer process for that window.
    // All of the Node.js APIs are available in this process.

    const { ipcRenderer } = require('electron')

    let bind = (target, event, handler) => {
        document.getElementById(target).addEventListener(event, handler);
    }

    ipcRenderer.on( 'sync-message', (e, args) => {
      console.log('[sync-message]', args);
      e.returnValue = "Done!";
    })
```

Electron 加载的主进程脚本 main.js 如下，它定义了右键弹出菜单 contextMenu 和主菜单 mainMenu，
弹出菜单中，使用 `role: 'editMenu'` 调用系统默认的编辑菜单，包括复制、剪切、粘贴等常用功能。
其中，Item 1 这个菜单项并没有定义响应事件，所以点击它不会有响应动作：

```js,ignore
    // Modules
    const {app, BrowserWindow, Menu, MenuItem} = require('electron')

    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    let mainWindow

    let mainMenu = Menu.buildFromTemplate( require('./mainMenu') )


    let contextMenu = Menu.buildFromTemplate([
      { label: 'Item 1' },
      { role: 'editMenu' }
    ])

    // Create a new BrowserWindow when `app` is ready
    function createWindow () {

      mainWindow = new BrowserWindow({
        width: 1000, height: 800,
        webPreferences: { nodeIntegration: true }
      })

      Menu.setApplicationMenu(mainMenu)

      // Load index.html into the new BrowserWindow
      mainWindow.loadFile('index.html')

      // Open DevTools - Remove for PRODUCTION!
      mainWindow.webContents.openDevTools();

      mainWindow.webContents.on('context-menu', e => {
        contextMenu.popup()
      })

      // Listen for window being closed
      mainWindow.on('closed',  () => {
        mainWindow = null
      })
    }

    // Electron `app` is ready
    app.on('ready', createWindow)

    // Quit when all windows are closed - (Not macOS - Darwin)
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') app.quit()
    })

    // When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
    app.on('activate', () => {
      if (mainWindow === null) createWindow()
    })
```

主菜单定义模块 mainMenu.js 参考，菜单响应事件定义为 click：

```js,ignore
    module.exports = [
      {
        label: 'Electron',
        submenu: [
          { label: 'Item 1'},
          { label: 'Item 2', submenu: [ { label: 'Sub Item 1'} ]},
          { label: 'Item 3'},
        ]
      },
      {
        label: 'Edit',
        submenu: [
          { role: 'undo'},
          { role: 'redo'},
          { role: 'copy'},
          { role: 'paste'},
        ]
      },
      {
        label: 'Actions',
        submenu: [
          {
            label: 'DevTools',
            role: 'toggleDevTools'
          },
          {
            role: 'toggleFullScreen'
          },
          {
            label: 'Greet',
            click: () => { console.log('Hello from Main Menu') },
            accelerator: 'Shift+Alt+G'
          }
        ]
      }
    ]
```

## 🐣 Screen 信息获取
参考 electron-25.1.1\docs\fiddles\screen\fit-screen\main.js

```js
    // Retrieve information about screen size, displays, cursor position, etc.
    //
    // For more info, see:
    // https://electronjs.org/docs/api/screen

    const { app, BrowserWindow } = require('electron')

    let mainWindow = null

    app.whenReady().then(() => {
      // We cannot require the screen module until the app is ready.
      const { screen } = require('electron')

      // Create a window that fills the screen's available work area.
      const primaryDisplay = screen.getPrimaryDisplay()
      const { width, height } = primaryDisplay.workAreaSize
      console.log({ width, height })
      mainWindow = new BrowserWindow({ width, height })
      mainWindow.loadURL('https://electronjs.org')
    })
```

## 🐣 desktopCapturer 截屏
https://www.electronjs.org/docs/latest/api/desktop-capturer
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

Chromium 支持视频直接录制，一般来说有两种技术方案，rrweb 以及 WebRTC API 方案。如果考虑 
Electron 场景，又会额外多出一种 ffmpeg 的方案。

The MediaDevices.getUserMedia() method prompts the user for permission to use 
a media input which produces a MediaStream with tracks containing the requested 
types of media.

That stream can include, for example, a video track (produced by either a hardware 
or virtual video source such as a camera, video recording device, screen sharing 
service, and so forth), an audio track (similarly, produced by a physical or 
virtual audio source like a microphone, A/D converter, or the like), and possibly 
other track types.

It returns a Promise that resolves to a MediaStream object. If the user denies 
permission, or matching media is not available, then the promise is rejected 
with NotAllowedError or NotFoundError DOMException respectively.

Planned Breaking API Changes (17.0)
https://www.electronjs.org/docs/latest/breaking-changes
Removed: desktopCapturer.getSources in the renderer

The desktopCapturer.getSources API is now only available in the main process. 
This has been changed in order to improve the default security of Electron apps.

If you need this functionality, it can be replaced as follows:

```js
    // Main process
    const { ipcMain, desktopCapturer } = require('electron')

    ipcMain.handle(
      'DESKTOP_CAPTURER_GET_SOURCES',
      (event, opts) => desktopCapturer.getSources(opts)
    )

    // Renderer process
    const { ipcRenderer } = require('electron')

    const desktopCapturer = {
      getSources: (opts) => ipcRenderer.invoke('DESKTOP_CAPTURER_GET_SOURCES', opts)
    }
```

However, you should consider further restricting the information returned to the renderer; for instance, displaying a source selector to the user and only returning the selected source.

需要在程序处于准备状态下，才能调用 getSources() 获取到相应的媒体源信息，显示屏幕 screen，
或者窗口 window 等等，并且注意新旧两种处理方式：

    desktopCapturer.getSources(options, handler)        // old-style
    desktopCapturer.getSources(options).then(handler)   // new-style

另外，通过数据源的 name 属性作为判断依据不够准确，因为在中文、英文不同语言环境下，名字会改变，
并且，窗口对象的名称与标题有关，作一致性判断也不够精确。屏幕的 id 属性类似 'screen:0:0'。

```js
    // In the main process.
    const { app, BrowserWindow, desktopCapturer } = require('electron')

    app.whenReady().then(() => {
      const mainWindow = new BrowserWindow({
        width: 1000, height: 800, x: 100, y:140, show: true,
        webPreferences: { 
          nodeIntegration: true,
          nodeIntegrationInWorker: true,
          contextIsolation: false,
          devTools: true,    // 调试工具可用
          webSecurity: true, // 同源策略(上线应该删除)
          // preload: './preload.js' 
        }
      })
      mainWindow.loadFile("index.html")

      desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
        console.log('All Sources', sources)
        for (const source of sources) {
          if (source.name === 'Electron') {
            console.log('SET_SOURCE', source.id)
            return
          }
        }
      })
    })
```

旧版本示范参考：

    electron-25.1.1\docs\fiddles\media\screenshot\take-screenshot\main.js

主进程脚本：

```js
    const { BrowserWindow, app, screen, ipcMain, desktopCapturer, shell,  } = require('electron')
    const fs = require('fs')
    const os = require('os')
    const path = require('path')

    let mainWindow = null

    ipcMain.handle('get-screen-size', () => {
      // We cannot require the screen module until the app is ready.
      console.log({workAreaSize: screen.getPrimaryDisplay().workAreaSize})
      return screen.getPrimaryDisplay().workAreaSize
    })

    ipcMain.handle('screenshot', async (event, thumbSize) => {
      const options = { types: ['screen'], thumbnailSize: thumbSize }

      const sources = await desktopCapturer.getSources(options)
      console.log({event, thumbSize, sources})
      const screenshotPath = path.join(os.tmpdir(), 'screenshot.png')

      sources.forEach((source) => {
        const sourceName = source.name.toLowerCase()
        if (['entire screen', '整个屏幕', 'screen 1'].indexOf(sourceName)) {

          fs.writeFile(screenshotPath, source.thumbnail.toPNG(), (error) => {
            if (error) return console.log(error)
            shell.openExternal(`file://${screenshotPath}`)
          })
        }
      })
      return screenshotPath
    })

    function createWindow () {
      const windowOptions = {
        width: 1000,
        height: 300,
        title: 'Take a Screenshot',
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
        }
      }

      mainWindow = new BrowserWindow(windowOptions)
      mainWindow.loadFile('index.html')
      // mainWindow.openDevTools()

      mainWindow.on('closed', () => {
        mainWindow = null
      })

    }

    app.whenReady().then(() => {
      createWindow()
    })
```

渲染进程脚本：

```js
    const { ipcRenderer } = require('electron')

    const screenshot = document.getElementById('screen-shot')
    const screenshotMsg = document.getElementById('screenshot-path')

    screenshot.addEventListener('click', async (event) => {
      screenshotMsg.textContent = 'Gathering screens...'
      const thumbSize = await determineScreenShotSize()
      let screenshotPath = await ipcRenderer.invoke('screenshot', thumbSize)
      screenshotMsg.textContent = `Saved screenshot to: ${screenshotPath}`
    })

    async function determineScreenShotSize () {
      const screenSize = await ipcRenderer.invoke('get-screen-size')
      const maxDimension = Math.max(screenSize.width, screenSize.height)
      return {
        width: maxDimension * window.devicePixelRatio,
        height: maxDimension * window.devicePixelRatio
      }
    }
```


## 🐣 Clipboard 使用剪贴板
https://electronjs.org/docs/api/clipboard

    var {clipboard} = require('electron');
    clipboard.writeText('Example String')
    clipboard.writeText('Example String', 'selection') 

在 X Window 系统上还有一个可选的剪贴板

    console.log(clipboard.readText('selection'))

    // mac
    filePath = clipboard.read('public.file-url').replace('file://', '');

    // windows
    // 读取含有中文名称时，WIN平台会有问题，需要使用UNICODE字符集。
    // const rawFilePath = clipboard.read('FileName');
    // const rawFilePath = clipboard.read('FileNameW');
    const rawFilePath = clipboard.readBuffer('FileNameW').toString('ucs2');
    let filePath = rawFilePath.replace(new RegExp(String.fromCharCode(0), 'g'), '');
    document.getElementById("title").innerHTML = ("PATH:"+filePath);
    // document.body.innerHTML = ("PATH:"+filePath);


# 🐥 Packaging App
https://www.electronjs.org/docs/latest/tutorial/forge-overview
https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites
https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging
https://www.electronjs.org/docs/latest/tutorial/tutorial-publishing-updating
https://www.electronforge.io/cli#commands

Electron 应用可以打包在 Windows、macOS、Linux 和 Android、iOS 等操作系统上运行的可执行文件。
可使用工具：

    electron-builder
    electron-winstaller
    electron-packager
    electron-installer-debian

Electron Forge 是最新的打包工具，执行 npm run package 就可以将应用打包输出到 out 目录下。

What is Electron Forge?
https://www.electronjs.org/blog/forge-v6-release
https://www.electronjs.org/docs/latest/tutorial/code-signing
Electron Forge is a tool for packaging and distributing Electron applications. 
It unifies Electron's build tooling ecosystem into a single extensible interface 
so that anyone can jump right into making Electron apps.

1. Packaging your application (package)
2. Generating executables and installers for each OS (make), and,
3. Publishing these files to online platforms to download (publish).

Highlight features include:

📦 Application packaging and code signing
🚚 Customizable installers on Windows, macOS, and Linux (DMG, deb, MSI, PKG, AppX, etc.)
☁️ Automated publishing flow for cloud providers (GitHub, S3, Bitbucket, etc.)
⚡️ Easy-to-use boilerplate templates for webpack and TypeScript
⚙️ Native Node.js module support
🔌 Extensible JavaScript plugin API

```sh
    # Initializing a new Forge project
    npm init electron-app@latest my-app -- --template=webpack
    cd my-app
    npm start
    npm run package 

    # Importing an existing project
    cd my-app
    npm install --save-dev @electron-forge/cli
    npm exec --package=@electron-forge/cli -c "electron-forge import"


    # By default, the package command corresponds to a package npm script:
    npm run package -- --arch=ia32
    # If there is no package script:
    npx electron-forge package --arch=ia32

    # By default, the make command corresponds to a make npm script:
    npm run make -- --arch=ia32
    # If there is no make script:
    npx electron-forge make --arch=ia32
```

Important: signing your code
https://www.electronforge.io/guides/code-signing
In order to distribute desktop applications to end users, we highly recommend 
that you code sign your Electron app. Code signing is an important part of shipping 
desktop applications, and is mandatory for the auto-update step in the final part 
of the tutorial.

Code signing is a security technology that you use to certify that a desktop app 
was created by a known source. Windows and macOS have their own OS-specific code 
signing systems that will make it difficult for users to download or launch 
unsigned applications.

On macOS, code signing is done at the app packaging level. On Windows, 
distributable installers are signed instead. If you already have code signing 
certificates for Windows and macOS, you can set your credentials in your 
Forge configuration.

```js
// macOS forge.config.js
module.exports = {
  packagerConfig: {
    osxSign: {},
    // ...
    osxNotarize: {
      tool: 'notarytool',
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_PASSWORD,
      teamId: process.env.APPLE_TEAM_ID
    }
    // ...
  }
}

// Windows forge.config.js
module.exports = {
  // ...
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: process.env.CERTIFICATE_PASSWORD
      }
    }
  ]
  // ...
}
```


# 🐥 调试主进程
https://www.jianshu.com/p/98237341a08e
https://segmentfault.com/a/1190000005598234
https://www.w3cschool.cn/electronmanual/u59k1qkp.html

浏览器窗口的开发工具仅能调试渲染器的进程脚本（比如 web 页面）。为了提供一个可以调试主进程的方法，Electron 提供了 --debug 和 --debug-brk 开关。
命令行开关

使用如下的命令行开关来调试 Electron 的主进程：

    --debug=[port]

当这个开关用于 Electron 时，它将会监听 V8 引擎中有关 port 的调试器协议信息。默认的 port 是 5858。

    --debug-brk=[port]

就像 --debug 一样，但是会在第一行暂停脚本运行。

    E:\coding\electron\node_modules\electron\dist\electron.exe index.html --enable-logging --inspect=5858
    E:\coding\electron\node_modules\electron\dist\electron.exe index.html --debug=5858 --inspect=5858

使用 node-inspector 来调试

Electron 浏览器窗口中的 DevTools 只能调试在该窗口中执行的 JavaScript (即 web 页面) 。 为了提供一个可以调试主进程的方法，Electron 提供了 --inspect 和 --inspect-brk 开关。

    --inspect=[port]

这个开关用于 Electron 时，它将会监听 V8 引擎中有关 port 的调试器协议信息。 默认的port 是 5858

    electron --inspect=5858 your/app

--inspect-brk=[port] 和 --inspector 一样，但是会在 JavaScript 脚本的第一行暂停运行。

获取调试元数据

    http://127.0.0.1:5858/json/list

    [ {
      "description": "node.js instance",
      "devtoolsFrontendUrl": "chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:5858/8974ccce-acd3-4978-980f-a9c03214a032",
      "faviconUrl": "https://nodejs.org/static/favicon.ico",
      "id": "8974ccce-acd3-4978-980f-a9c03214a032",
      "title": "C:_Windows_System32_cmd.exe[10740]",
      "type": "node",
      "url": "file://",
      "webSocketDebuggerUrl": "ws://127.0.0.1:5858/8974ccce-acd3-4978-980f-a9c03214a032"
    } ]

用浏览器打开其中 devtoolsFrontendUrl 提供的地址就可以看到调试控制台。

通过命令行控制台获取日志信息，如果需要输出中文字符，可以使用代码页工具切换到UTF字符集

    chcp 65001
    electron.exe --enable-logging index.html 

命令行如下，将会强制打开开发者工具，工具的位置将有上一次打开的位置所决定（在api-demo中，是这样的）。主进程日志在终端输出，渲染进程日志在开发者工具中输出。

    electron . --debug （api-demo专属功能）

外部调试器，可以使用一个支持 V8 调试协议的调试器，通过访问 inspect 配置工具来连接 Chrome 并在那里选择需要检查的 Electron 应用程序。也可以使用 VSCode 进行主进程调试

    chrome://inspect/#devicest


    // In the main process.
    // const {BrowserWindow} = require('electron')
    // const BrowserWindow = require('electron').BrowserWindow;

    // Or in the renderer process.
    // const {BrowserWindow} = require('electron').remote
    const BrowserWindow = require('electron').remote.BrowserWindow;

    let win = new BrowserWindow();
    let win = new BrowserWindow({width: 800, height: 600})
    
    // 打开内置浏览器 DevTools 调试工具
    win.webContents.openDevTools();

    win.on('closed', () => { win = null； })

    // Load a remote URL
    win.loadURL('https://github.com')

    // Or load a local HTML file
    win.loadURL(`file://${__dirname}/app/index.html`)



# 🐥 Node与node-inspect调试工具
- https://nodejs.org/en/docs/inspector
- https://www.bootwiki.com/electron/electron-selenium-and-webdriver.html

1.全局安装node-inspect模块：

    npm install -g node-inspect

2.通过谷歌浏览器启用开发者工具实验性功能：

    chrome://flags/#enable-devtools-experiments

3.在cmd中执行node调试命令，新版本中使用 --inspect-brk 替代 --debug-brk：

    node-inspect --inspect-brk[=[host:]port] activate inspector on host:port and break at start of user script
    node-inspect --inspect-port=[host:]port  set host:port for inspector
    node-inspect --inspect[=[host:]port]     activate inspector on host:port


    node --debug-brk --inspect
    node --debug-brk --inspect main.js
    node --inspect-brk main.js

4.复制cmd中Debugger listening输出的URL，在谷歌浏览器中打开之后，按F12打开谷歌开发者工具。

5.最终进入node-inspect调试界面，可以开始调试nodejs程序了！

在浏览器中打开调试这设备页可以看到进入调试的程序

    chrome://inspect/#devices

    Target (v10.3.0)
    C:_Windows_System32_cmd.exe - node --debug-brk --inspect[3652]
    file:///
    inspect

    Target (v10.3.0)

    main.js
    file:///E:/_coding_electron_main.js
    inspect

进入调试后，node进程会打开WebSocket监听，默认是9229端口，地址会在Debugger listening on后给出，详细的元数据可以通过HTTP输出的JSON数据中得到：

    http://[host:port]/json/list
    http://127.0.0.1:9229/json/list

    [ {
      "description": "node.js instance",
      "devtoolsFrontendUrl": "chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/82675ece-f844-4eac-bde5-0fce0ceed6de",
      "faviconUrl": "https://nodejs.org/static/favicon.ico",
      "id": "82675ece-f844-4eac-bde5-0fce0ceed6de",
      "title": "main.js",
      "type": "node",
      "url": "file://E:_coding_electron_main.js",
      "webSocketDebuggerUrl": "ws://127.0.0.1:9229/82675ece-f844-4eac-bde5-0fce0ceed6de"
    } ]

用浏览器打开其中devtoolsFrontendUrl提供的地址就可以看到调试信息。

