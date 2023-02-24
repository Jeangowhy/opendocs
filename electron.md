
# Electron JavaScript 桌面化

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

Electron 就是使用 JavaScript 来开发桌面程序的平台，VS Code 是基于 Electron 开发的跨平台编辑器代表作品。JavaScript 天生的异步特性使用它在图形界面 GUI 开发上具有天然的流畅性。VS Code 是也非常强大的开发工具，像版本控制 Version Control 这部分内容就很值得去花时间，但这里只能挑几个功能作为重点来介绍。

# Electron Demo 应用

Electron 可以让你使用纯 JavaScript 调用丰富的原生(操作系统) APIs 来创造桌面应用。 你可以把它看作一个专注于桌面应用的 Node. js 的变体，而不是 Web 服务器。

这不意味着 Electron 是某个图形用户界面（GUI）库的 JavaScript 版本。 相反，Electron 使用 web 页面作为它的 GUI，所以你能把它看作成一个被 JavaScript 控制的，精简版的 Chromium 浏览器。

注意 : 获取该示例的代码仓库: 立即下载并运行 。

从开发的角度来看, Electron application 本质上是一个 Node. js 应用程序。 与 Node.js 模块相同，应用的入口是 package.json 文件。 一个最基本的 Electron 应用一般来说会有如下的目录结构：

    app/
    ├── package.json
    ├── main.js
    └── index.html

为你的新Electron应用创建一个新的空文件夹。 打开你的命令行工具，然后从该文件夹运行npm init

    npm init

npm 会帮助你创建一个基本的 package.json 文件。 其中的 main 字段所表示的脚本为应用的启动脚本，它将会在主进程中执行。 如下片段是一个 package.json 的示例：

    {
      "name": "your-app",
      "version": "0.1.0",
      "main": "main.js"
    }

注意：如果 main 字段没有在 package.json 中出现，那么 Electron 将会尝试加载 index.js 文件（就像 Node.js 自身那样）。 如果你实际开发的是一个简单的 Node 应用，那么你需要添加一个 start 脚本来指引 node 去执行当前的 package：

    {
      "name": "your-app",
      "version": "0.1.0",
      "main": "main.js",
      "scripts": {
        "start": "node ."
      }
    }

把这个 Node 应用转换成一个 Electron 应用也是非常简单的，我们只不过是把 node 运行时替换成了 electron 运行时。

    {
      "name": "your-app",
      "version": "0.1.0",
      "main": "main.js",
      "scripts": {
        "start": "electron ."
      }
    }

## 安装 Electron

现在，您需要安装electron。 我们推荐的安装方法是把它作为您 app 中的开发依赖项，这使您可以在不同的 app 中使用不同的 Electron 版本。 在您的app所在文件夹中运行下面的命令：

    npm install --save-dev electron

除此之外，也有其他安装 Electron 的途径。 请咨询安装指南来了解如何用代理、镜像和自定义缓存。


## 开发一个简易的 Electron

Electron apps 使用JavaScript开发，其工作原理和方法与Node.js 开发相同。 electron模块包含了Electron提供的所有API和功能，引入方法和普通Node.js模块一样：

    const electron = require('electron')

electron 模块所提供的功能都是通过命名空间暴露出来的。 比如说： electron.app负责管理Electron 应用程序的生命周期， electron.BrowserWindow类负责创建窗口。 下面是一个简单的main.js文件，它将在应用程序准备就绪后打开一个窗口：

    const { app, BrowserWindow } = require('electron')

    function createWindow () {   
      // 创建浏览器窗口
      win = new BrowserWindow({ width: 800, height: 600 })

      // 然后加载应用的 index.html。
      win.loadFile('index.html')
    }

    app.on('ready', createWindow)

您应当在 main.js 中创建窗口，并处理程序中可能遇到的所有系统事件。 下面我们将完善上述例子，添加以下功能：打开开发者工具、处理窗口关闭事件、在macOS用户点击dock上图标时重建窗口，添加后，main. js 就像下面这样：

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

## 启动你的应用

在创建并初始化完成 main.js、 index.html和package.json之后，您就可以在当前工程的根目录执行 npm start 命令来启动刚刚编写好的Electron程序了。相当于执行以下命令：

    electron.exe index.html


## 打包APP

安装打包工具 electron-packager，全局安装，完成后执行打包：

    npm install electron-packager -g

    electron-packager . 'HelloWorld' --platform=win32 --arch=x64 --icon=icon.ico --out=./out --asar --app-version=0.0.1

可选打包工具还有 electron-builder 可以打包成msi、exe、dmg文件，macOS系统，只能打包dmg文件，window系统才能打包exe，msi文件。没有安装 Electron 可以考虑安装一个electron的预编译版本。

    npm install electron-prebuilt


## 尝试此例

复制并运行这个库 electron/electron-quick-start。

Note: Running this requires Git and npm.

    # 克隆这仓库
    $ git clone https://github.com/electron/electron-quick-start
    # 进入仓库
    $ cd electron-quick-start
    # 安装依赖库
    $ npm install
    # 运行应用
    $ npm start

启动开发过程的有关模板文件和工具列表, 请参阅模板文件和 CLI 文档 。


# 调试主进程
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



# Node与node-inspect调试工具
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

# Electron 程序结构
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


跨站脚本 XSS 攻击很常见，攻击者跳过渲染进程并在用户电脑上执行恶意代码，危害是非常大的。在 Web 中禁用 Node.js 集成有助于防止 XSS 攻击升级为“远程代码执行” RCE 攻击。

当禁用 Node.js 集成时，你可以暴露 API 给你的站点，以使用 Node.js 的模块功能或特性。预加载脚本依然可以使用 require 等 Node.js 特性，以使开发者可以暴露自定义 API 给远程加载内容。

    const mainWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: false, // 是否完整的支持 node. 默认值为 false
        nodeIntegrationInWorker: false,// 是否在 Web 工作器中启用 Node 集成
        preload: './preload.js'
      }
    })

在页面运行其他脚本之前预先加载指定的 preload 脚本，无论页面是否集成 Node, 此脚本都可以访问所有 Node API 脚本路径为文件的绝对路径

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

BrowserWindow 提供的 preload 是为了在页面第一次加载文档之前预先加载 js 脚本文件，其需要注意 3 个问题:

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


## app 程序对象
- https://www.electronjs.org/docs/api/app

app 控制应用程序的事件生命周期。

进程：主进程

下面的这个例子将会展示如何在最后一个窗口被关闭时退出应用：

    const { app } = require('electron')
    app.on('window-all-closed', () => {
      app.quit()
    })

## BrowserWindow 浏览器对象
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


## ipcMain & ipcRenderer 信息通信
- https://www.electronjs.org/docs/api/ipc-main
- https://www.electronjs.org/docs/api/ipc-renderer
- https://www.electronjs.org/docs/api/remote

ipcRenderer 是一个 EventEmitter 的实例。 你可以使用它提供的一些方法从渲染进程 (web 页面) 发送同步或异步的消息到主进程。 也可以接收主进程回复的消息。

ipcMain 是一个 EventEmitter 的实例。 当在主进程中使用时，它处理从渲染器进程（网页）发送出来的异步和同步信息。 从渲染器进程发送的消息将被发送到该模块。

也可以从主进程向渲染进程发送消息，查阅 webContents.send 获取更多信息。

- 发送消息时，事件名称在 API 的 channel 参数中指定。
- 回复同步信息时，需要设置 event.returnValue。
- 使用 event.reply(...) 将异步消息发送回发送者，回复包括从 iframes 发来的消息。 event.sender.send(...) 总是发消息到主进程。

下面是在渲染和主进程之间发送和处理消息的一个例子：

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

## webview & renderer 通信
- https://www.electronjs.org/docs/api/webview-tag

Electron 提供了 webview 标签，用来嵌入 Web 页面。但是 webview 标签基于 Chromium webview </0> ，后者正在经历巨大的架构变化。 这将影响 webview 的稳定性，包括呈现、导航和事件路由。 我们目前建议不使用 webview 标签，并考虑其他替代方案，如 iframe 、Electron的 BrowserView 或完全避免嵌入内容的体系结构。

与渲染进程之间的通信不同，渲染进程与 webview 之间的通信，在 webview 层通过调用 sendToHost 方法来向渲染进程通信；而在渲染进程测通过 webview 提供的 ipc-message 事件来向 webview 通信。

具体如下面代码所示：

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

## shell
- https://www.electronjs.org/docs/api/shell

shell 使用默认应用程序管理文件和 url。

Process: Main, Renderer (non-sandboxed only)

shell 模块提供与桌面集成相关的功能。

在用户的默认浏览器中打开 URL 的示例:

    const { shell } = require('electron')

    shell.openExternal('https://github.com')


## 使用剪贴板
https://electronjs.org/docs/api/clipboard

    var {clipboard} = require('electron');
    clipboard.writeText('Example String')
    clipboard.writeText('Example String', 'selection') 在 X Window 系统上还有一个可选的剪贴板
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
