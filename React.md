[TOC]

# React readme 前端框架
- [React JS](https://reactjs.org/)
- [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html)
- [React-Devtools](https://github.com/facebook/react-devtools)

React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。

由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。

这个项目本身也越滚越大，从最早的UI引擎变成了一整套前后端通吃的 Web App 解决方案。衍生的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写 Native App。如果能够实现，整个互联网行业都会被颠覆，因为同一组人只需要写一次 UI ，就能同时运行在服务器、浏览器和手机（参见《也许，DOM 不是答案》）。



# ⚑ Lerna JavaScript 多包工程管理
- [Lerna JavaScript 多包工程管理](https://github.com/lerna/lerna)

lerna 用于管理多 package，且各 package 可能会互相引用的项目。

Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.


monorepo(monolithic repository)，与 multirepo 相对，分别是单代码仓库与多代码仓库。

multirepo 即传统做法，按模块分为多个代码库，实践中发现一些问题：

- issue 管理混乱，经常有在 core repo 提 module 问题的，需要 Close this and track that
- changelog 难以整合，需要人工梳理所有变动的仓库，并做整合
- core repo 版本更新麻烦，需要同步所有 module 更新其依赖的 core repo 版本

monorepo 把所有相关 module 都放到一个 repo 里，每个 module 独立发布，但使用与该 repo 统一的版本号，例如 Babel 和 React。issue 和 PR 都集中到该 repo，changelog 可以简单地从一份 commit 列表梳理出来（甚至如果按照commit规范关联issue tag的话，能够自动生成规范的changelog）

monorepo 也存在一些问题，但不如上面提到的痛点强烈：

- repo 体积较大，可能带来版本控制的问题（Git不适合管理体积太大的repo）
- 统一构建工具，对构建工具提出了更高要求，要能构建各种相关 module

从源码管理的角度来看，multirepo 与 monorepo 是两种不同的理念，前者允许多元化发展，各个 module 可以有自己的玩法（构建，依赖管理，单元测试等），后者希望集中管理，减少玩法差异带来的沟通成本。

Lerna有很多强大的CLI命令，我这里用的有:

- **lerna init** 初始化项目
- **lerna bootstrap** 自动构建项目
- **lerna ls** 列出当前项目所有包
- **lerna clean** 清理 node_modules 文件夹
- **lerna add** 添加依赖，类似 npm install
- **lerna publish** 发版

lerna 通过两种方式管理子项目的版本号：

Fixed/Locked mode (default)：每次执行 lerna publish 都会将所涉及到的包升级到最新一个版本，开发者只需要确定发布下一个 version。
Independent mode：由开发者自行管理子项目的 version，每次执行 lerna publish 都需要确定每个包的下个版本号。

固定模式，通过 lerna.jso n的版本进行版本管理。当你执行 lerna publish 命令时， 如果距离上次发布只修改了一个模块，将会更新对应模块的版本到新的版本号，然后你可以只发布修改的库。

这种模式也是 Babel 使用的方式。如果你希望所有的版本一起变更，可以更新 minor 版本号，这样会导致所有的模块都更新版本。

独立模式，init 的时候需要设置选项 --independent，独立模式允许管理者对每个库单独改变版本号，每次发布的时候，你需要为每个改动的库指定版本号。这种情况下， lerna.json的版本号不会变化了，默认为 independent。


lerna 管理的库文件结构类似如下这样

	my-lerna-repo/
	  package.json
	  packages/
	    package-1/
	      package.json
	    package-2/
	      package.json

通过命令 lerna bootstrap 将会把代码库进行 link。
通过 lerna publish 发布最新改动的库

首先，安装和初始化 lerna 库

	cd lerna-repo
	yarn global add lerna
	lerna init

默认会创建lerna.json和packages目录, 如下

	lerna-repo/
	  packages/
	  package.json
	  lerna.json

lerna.json解析

	{
	  "version": "1.1.3",
	  "npmClient": "npm",
	  "command": {
	    "publish": {
	      "ignoreChanges": [
	        "ignored-file",
	        "*.md"
	      ]
	    },
	    "bootstrap": {
	      "ignore": "component-*",
	      "npmClientArgs": ["--no-package-lock"]      
	    }
	  },
	  "packages": ["packages/*"]
	}

	version , 当前库的版本
	npmClient , 允许指定命令使用的client， 默认是 npm， 可以设置成 yarn
	command.publish.ignoreChanges ， 可以指定那些目录或者文件的变更不会被publish
	command.bootstrap.ignore ， 指定不受 bootstrap 命令影响的包
	command.bootstrap.npmClientArgs ， 指定默认传给 lerna bootstrap 命令的参数
	command.bootstrap.scope ， 指定那些包会受 lerna bootstrap 命令影响
	packages ， 指定包所在的目录

Create 创建子项目

	lerna create <name>

创建一个子项目，并会根据交互提示生成对应的package.json

Add 添加依赖
	
	lerna add <package>[@version] [--dev] [--exact]

	lerna add eslint： 所有包都会装上eslint。
	lerna add eslint --scope=package1：只有package1会装上。
	lerna add eslint packages/prefix-*：符合prefix的包会装上。
	options:

	-dev：添加到devDependencies
	--exact: 只安装特定版本

如果添加的是子项目，则会通过link软连接到对应的项目中。

	lerna add package1 --scope=package2

Run 执行npm script命令

	lerna run <script> -- [..args]

	lerna run test：则会执行所有子项目中的test。
	lerna run --scope package1 test：只执行package1中的test。
	lerna run --ignore package-* test：只执行除了匹配package-*外的项目中的test

Exec 执行任意命令

	lerna exec -- <command> [..args]

与 lerna run 类似，只不过它可以执行任意命令。

	eg: lerna exec -- rm -rf ./node_modules

其他命令

- lerna bootstrap：安装各子项目依赖，对相互引用的项目进行软连接，在子项目中执行 npm run prepublish 和 npm run prepare
	- --hoist [glob]：会将子项目的匹配的依赖(eg：eslint, jest等)，统一放在根目录的 node_modules 中，减少安装时间，但仅限 npmClient=npm
	- —nohoist [glob]: 匹配的依赖(eg: babel)会安装到子项目中的 node_modules 中
- lerna clean：删除子项目的 node_modules
- lerna link：同 bootstrap 第二步。



# ⚑ Hello Demo
- [React CDN 引入](https://www.runoob.com/react/react-install.html)
- [Babel-Sublime](https://github.com/babel/babel-sublime)
- [Sublime Babel for VSCode](https://marketplace.visualstudio.com/items?itemName=joshpeng.sublime-babel-vscode)
- [Hello World in React](https://codepen.io/gaearon/pen/zKRGpo?editors=0010)

没有配置好 Node.js、VSCode、Sublime 开发工具，可以在 CodePen 平台上直接运行 React 代码。这个 Demo 只展示 ReactDOM 基础部分的使用，在生产开发中习惯上使用组件化开发，即 `ReactDOM.render()` 结合组件 `React.Component`一起使用，这就涉及组件的生命周期函数，放后面介绍。

在网页上使用 React 开发，最简单的方法是直接引用 Staticfile CDN 的 React CDN 库：

	<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
	<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
	<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>

官方提供的 CDN 地址：

	<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
	<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
	<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

    <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.production.min.js"> </script>
    <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.production.min.js"> </script>

注意: 在浏览器中使用 Babel 来编译 JSX 效率是非常低的。生产环境中不建议使用 development 后缀版本。

引入的三个库

`react.min.js` - React 的核心库，包含 `React.Component` 组件架构实现
`react-dom.min.js` - 提供与 `ReactDOM` 相关的功能
`babel.min.js` - Babel 可以将 ES6 代码转编译为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。

Sublime Text 开发环境可以安装 [Babel-Sublime] 插件，让源码的语法渲染上升到一个全新的水平。或者 [Sublime Babel for VSCode]。

以下是一个用于体验的 React 页面程序，生产开发环境中是结合 Node.js 平台操作的，利用 npm 来管理软件工程以及安装工程依赖的类库。

	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="utf-8"/>
	        <title>
	            Hello React!
	        </title>
	        <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
	        <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
	        <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
	    </head>
	    <body>
	        <div id="example"> </div>
	        <script type="text/babel">
	            ReactDOM.render(
				    <h1>Hello, world!</h1>,
				    document.getElementById('example')
				);
	        </script>
	    </body>
	</html>

Node.js 是现代前端开发平台，下载安装后，就可以使用 node.exe 来运行或调试脚本，主要还是使用 npm 命令来管理工程。在国内，可以使用阿里的模块服务器，以免下载模块受阻。

	$ npm install -g cnpm --registry=https://registry.npm.taobao.org
	$ npm config set registry https://registry.npm.taobao.org

这样就可以使用 cnpm 命令来安装模块了：

	$ cnpm install [name]

使用 create-react-app 快速构建 React 开发环境，这是来自于 Facebook 官方的脚手架模块，通过该命令我们无需配置就能快速构建 React 开发环境，自动创建的项目基于 Webpack + ES6。执行以下命令创建项目：

	$ cnpm install -g create-react-app
	$ create-react-app my-app
	$ cd my-app/
	$ npm start

在浏览器中打开体验

	http://localhost:3000/


# ⚑ create-react-app 脚手架
- 《做一个基于react-scripts的脚手架》 https://www.codercto.com/a/80522.html
- 🛠如何快速开发一个自己的项目脚手架？ https://www.jianshu.com/p/5d77ba59d1f6
- Create React App https://create-react-app.dev/
- Create a New React App https://reactjs.org/docs/create-a-new-react-app.html
- User Guide https://facebook.github.io/create-react-app/
- Adding TypeScript https://create-react-app.dev/docs/adding-typescript

create-react-app 作为 Facebook 官方的脚手架是相当好用的，设计原理是将配置好的如 Webpack，Babel，ESLint，合并到 react-scripts 这 npm 包中，用户就可以开箱即用，react-scripts 就是 create-react-app 脚手架的核心配置代码。

不使用脚手架工具的情况下创建的应用是使用 npm 安装依赖的，并通过修改 webpack.config.js 进行项目配置的，搭建好环境后在 src 目录下编写源代码。而 create-react-app 就是自动构建，在 package.json 中只有 react-scripts 作为依赖，把原先的配置内容转移到 reacr-scripts 模块中，它已经搭配好了项目所有需要的配置项， 下支持：

- React, JSX, ES6, and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Import CSS and image files directly from JavaScript.
- Autoprefixed CSS, so you don’t need -webkit or other prefixes.
- A build script to bundle JS, CSS, and images for production, with sourcemaps.
- A dev server that lints for common errors.

从 React，ES6，Babel, Webpack 编辑到打包等都交给 react-scripts 都做了，模塊包内提供了兩套模板，一套是 JS 版，另一套是 TypeScript 版的 template-typescript。

如果要自己定制配置，有两种方案可选。一个是 eject，即使用命令 `npm run eject` 执行 `react-scripts eject` 以暴露项目的配置，整个项目结构会转换成普通的 Webpack 项目配置。单向操作不可逆，这样可以自由配置项目所需的依赖，不使用依赖零配置即可开发。原理是将 react-scripts 拆除然后将配置暴露到应用顶层，用户就可以自行进行配置。另一个是使用 react-app-rewired ，用户通过 config-overrides.js 增加修改配置。

两者各有好处，eject 直接暴露可以自行配置，但是坏处就是 react-scripts 被解散了，就不能随官方配置进行升级。 react-scripts 包揽了那些最基础配置的脏活累活，并且一直再维护，比如修复BUG和打包优化，运行速度优化。前端发展的迅速，这些基础配置随着基础设施的升级，可能随时都会变化。我觉得 eject 后要就需要承担维护成本的风险。我的理念是将专业的事情交给专业的人去做就好了，我们应该享受金字塔底层带来的基础设施便利去创造价值，没必要重复造轮子，更没必要在轮子上耗费过多的维护成本。


全局安装 create-react-app 并创建 React 项目模板：

	$ npm install -g create-react-app
	$ create-react-app react-demo
	Creating a new React app in G:\GitHub\React-demo\react-demo.

	Installing packages. This might take a couple of minutes.
	Installing react, react-dom, and react-scripts...

脚手架会自动安装核心的依赖，主要是 React，这样就可以直接开始写组件了：

	npm install react react-dom react-scripts 

安装好后就提供了四个基本命令：

- yarn start

    Starts the development server.

- yarn build

    Bundles the app into static files for production.

- yarn test

    Starts the test runner.

- yarn eject

    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!


PS: 升级后不再支持全局 create-react-app 命令，需要卸载它，或删除 node 目录下的命令相关命令，然后改用 npx。

	npm uninstall -g create-react-app
	yarn global remove create-react-app

	npx create-react-app my-app --template typescript
	# or
	yarn create react-app my-app --template typescript

對於現有項目引入 TypeScript 需要安裝 TypeScript 依赖，還有各個模塊的類型聲明文件，以下可選 yarn 命令安裝：

	npm install --save typescript @types/node @types/react @types/react-dom @types/jest
	# or
	yarn add typescript @types/node @types/react @types/react-dom @types/jest

启用 TypeScript 的项目默认配置的入口文件就是 src 目录下的 index.tsx，需要将 index.jsx 改名。

执行 `npm run start` 或 `react-scripts start` 启动开发服务器。


## 👉 项目配置
- Adding Custom Environment Variables https://create-react-app.dev/docs/adding-custom-environment-variables
- Deployment https://create-react-app.dev/docs/deployment
- Advanced Configuration https://create-react-app.dev/docs/advanced-configuration
- Proxying API Requests in Development https://create-react-app.dev/docs/proxying-api-requests-in-development
- [Create React App - Deployment](https://facebook.github.io/create-react-app/docs/deployment)

环境变量配置：

	set HTTPS=true
	set PORT=9000
	set HOST=192.168.1.109 


	openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365 
	openssl rsa -in keytmp.pem -out key.pem 

	"start": "export HTTPS=true && SSL_CRT_FILE=cert.pem && SSL_KEY_FILE=key.pem && react-scripts start", 

创建项目后可以在 `package.json` 配置 `homepage` 作为资源引用的相对路径，以下设置会忽略主机域名部分，参考[Create React App - Deployment]：

	"homepage": "http://mywebsite.com/relativepath",
	"homepage": ".",

在开发过程中，需要后端 API 访问，可以在 package.json 中设置代理，任何未知请求代理到 API 服务器：

	"proxy": "http://localhost:4000",

不过，更好的做法是建立一个代理服务器，`src/setupProxy.js`：

	$ npm install http-proxy-middleware --save
	$ # or
	$ yarn add http-proxy-middleware

内容如下：

```ts
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
```


可以通过环境变量或者 `.env` 文件配置工程，注意，环境变量配置中，不需要使用 `REACT_APP_` 前缀。

|          Variable         | Dev | Prod |                                   Usage                                    |
|---------------------------|-----|------|----------------------------------------------------------------------------|
| BROWSER                   | ✅   | 🚫    | 默认打开系统默认浏览器，设置 none 或指定一个 Node JS 脚本执行。            |
| BROWSER_ARGS              | ✅   | 🚫    | 指定给浏览器传递的参数，多参数空格隔开。                                   |
| HOST                      | ✅   | 🚫    | 设置开发时绑定的主机，如 localhost, LAN network address, etc.              |
| PORT                      | ✅   | 🚫    | 指定开发主机的端口，默认 3000。                                            |
| HTTPS                     | ✅   | 🚫    | 是不使用 HTTPS 模式。                                                      |
| WDS_SOCKET_HOST           | ✅   | 🚫    | 指定热加载的 websocket 主机名，默认值 window.location.hostname。           |
| WDS_SOCKET_PATH           | ✅   | 🚫    | 为热加载指定 websocket 路径，默认是 /sockjs-node。                         |
| WDS_SOCKET_PORT           | ✅   | 🚫    | 为热加载指定 websocket 端口，通常使用 window.location.port。               |
| PUBLIC_URL                | ✅   | ✅    | 公共资源目录默认是 /public，相当于 Web Root 目录，在 CDN 部署中常用。      |
| BUILD_PATH                | 🚫   | ✅    | 默认输出目录 /build，相对于工作根目录。                                    |
| CI                        | ✅   | ✅    | 是否将生成中的警告视为失败。                                               |
| REACT_EDITOR              | ✅   | 🚫    | 错误堆栈信息层会响应点击动作打开编辑器，设置 none 禁止。                   |
| CHOKIDAR_USEPOLLING       | ✅   | 🚫    | 是否在轮询模式下运行监视程序，这在 VM 内部是必要的。                       |
| GENERATE_SOURCEMAP        | 🚫   | ✅    | 是不要生成代码地图文件。                                                   |
| INLINE_RUNTIME_CHUNK      | 🚫   | ✅    | 构建时默认会嵌入脚本到 index.html，可以在处理 CSP 时禁用。                 |
| IMAGE_INLINE_SIZE_LIMIT   | 🚫   | ✅    | 内联图像文件大小，默认 10,000 字节。 使用 Base64 data URI 编码，0 为禁止。 |
| FAST_REFRESH              | ✅   | 🚫    | 是否使用 Fast Refresh。                                                    |
| TSC_COMPILE_ON_ERROR      | ✅   | ✅    | 是否将 TSC 编译错误转换为警告。                                            |
| ESLINT_NO_DEV_ERRORS      | ✅   | 🚫    | 是否将开发中的 ESLint 错误转换为警告。                                     |
| DISABLE_ESLINT_PLUGIN     | ✅   | ✅    | 是不要禁用 eslint-webpack-plugin。                                         |
| DISABLE_NEW_JSX_TRANSFORM | ✅   | ✅    | 是否要禁用 React 17 中引入的新 JSX 转换。                                  |


package.json 配置參考：

	{
	  "name": "crop-demo",
	  "version": "0.1.0",
	  "private": true,
	  "dependencies": {
	    "react": "^16.8.6",
	    "react-dom": "^16.8.6"
	  },
	  "scripts": {
	    "start": "react-scripts start",
	    "build": "react-scripts build",
	    "test": "react-scripts test",
	    "eject": "react-scripts eject"
	  },
	  "eslintConfig": {
	    "extends": "react-app"
	  },
	  "browserslist": {
	    "production": [
	      ">0.2%",
	      "not dead",
	      "not op_mini all"
	    ],
	    "development": [
	      "last 1 chrome version",
	      "last 1 firefox version",
	      "last 1 safari version"
	    ]
	  },
	  "devDependencies": {
	    "@babel/runtime": "^7.7.2",
	    "babel": "^6.23.0",
	    "babel-preset-react-app": "^9.0.2",
	    "react-dev-utils": "^9.1.0",
	    "react-scripts": "^3.2.0"
	  }
	}


TypeScript 配置 tsconfig.json：

	{
	  "compilerOptions": {
	    "target": "es5",
	    "lib": [
	      "dom",
	      "dom.iterable",
	      "esnext"
	    ],
	    "allowJs": true,
	    "skipLibCheck": true,
	    "esModuleInterop": true,
	    "allowSyntheticDefaultImports": true,
	    "strict": true,
	    "forceConsistentCasingInFileNames": true,
	    "module": "esnext",
	    "moduleResolution": "node",
	    "resolveJsonModule": true,
	    "isolatedModules": true,
	    "noEmit": true,
	    "noImplicitAny": false,
	    "jsx": "react"
	  },
	  "include": [
	    "src"
	  ]
	}


# ⚑ Main Concepts 基本概念
- React on Github https://github.com/facebook/react/
- React.org on Github https://github.com/reactjs/reactjs.org/
- Flow 静态类型检查器 https://flow.org/en/docs/
- Flow 语法检查器在线 AST 支持 https://flow.org/try/
- Flow with React Components https://flow.org/en/docs/react/components/
- Comparison with Facebook Flow Type System #1265 https://github.com/Microsoft/TypeScript/issues/1265
- Compare with Flow & TypeScript https://robin-front.github.io/2017/06/14/compare-with-Flow-and-TypeScript.html
- React Design Principles https://reactjs.org/docs/design-principles.html

这部分结合官方文档，讲解 React 最基本的概念，分析和理解 React 基本运行流程和基本内部原理，由浅到深掌握 React 的基本实现。

作为一个大型工程，React 也使用了静态类型工具来强化 JavaScript 代码的管理，并且是 facebook 自家出品的 Flow 静态类型检查工具。React 的源码使用用了 Flow 做了静态类型检查，所以了解 Flow 有助于我们阅读源码。

Flow 与 Typescript 不同的是，它可以部分引入，不需要完全重构整个项目，所以对于一个已有一定规模的项目来说，迁移成本更小，也更加可行。除此之外，Flow 可以提供实时增量的反馈，通过运行 Flow server 不需要在每次更改项目的时候完全从头运行类型检查，提高运行效率。可以简单总结为：对于新项目，可以考虑使用 TypeScript 或者 Flow，对于已有一定规模的项目则建议使用 Flow 进行较小成本的逐步迁移来引入类型检查。


## Hello ReactDom.Render()
1. https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
2. https://legacy.reactjs.org/docs/react-without-jsx.html

在前面 Hello Demo 的例子中，使用的是最简单的 React 例子，是直接使用 ReactDom.render() 方法渲染一个组件：

    const mountNode = document.getElementById('example')
	ReactDOM.render(
	  <h1>Hello, world!</h1>,
	  mountNode
	);

	// 页面存在一个容器元素 <div id="example"></div>

参考这个方法的原型，在参数提供的 container 指定一个 HTML 节点作为渲染容器，在它里面渲染传入 React 的各种元素 Element，并返回对该组件的引用，或者针对无状态组件返回 null。

	ReactDOM.render(element, container[, callback])

注意 Element 的概念，像 HTML 中的 `<p>` 就是一个 HTMLElement，还有纯字符串也算是一种。而 React 的组件，无论是函数式组件还是类组件，按照这种带有尖括号的写法就是一种 JSX.Element。React 会在内部将它们拆解成为一组数据，用虚拟节点 VirtualNode 的形式进行跟踪维护，对应 ReactNode 对象。

如以下渲染一个 Element 数组：

    ReactDOM.render([<h1>xyz</h1>,"ABC"], mountNode);

在页面容器中出现的渲染结果就是两个对应的 HTML 元素，p 段落元素和纯文本元素 PlainText：

	<div id="example"><h1>xyz</h1>ABC</div>

React 会将传入的 Element 模板会在后续解析成一组数据，并供 React.createElement() 函数调用去构造出相应的 HTML 节点。


参考以下两种完全等效的示例代码，可以看到 createElement 方法使用的参数更接近真实的 HTML 节点：

	// JSX style
	const element = (
	  <h1 className="greeting">
	    Hello, world!
	  </h1>
	);

	// JS style
	const element = React.createElement(
	  'h1',
	  {className: 'greeting'},
	  'Hello, world!'
	);

React.createElement() 生成的的数据对象类似以下简化后的形式，这就是一个虚拟的节点数据：

	// Note: this structure is simplified
	const element = {
	  type: 'h1',
	  props: {
	    className: 'greeting',
	    children: 'Hello, world!'
	  }
	};

再比如，设置样式属性：

	let dstyle = { 
		background:"#222222", 
		color: "white", 
		padding: "2px 16px 16px", 
		margin: "20%", 
		textAlign: "center",
		borderRadius: "32px",
	};
	const element = <h1 className="greeting" style={dstyle} >Hello, world!</h1>;

得到的数据对象就会在 props 中包含相应的样式属性：

	// Note: this structure is simplified
	const element = {
	  type: 'h1',
	  props: {
	    className: 'greeting',
	    children: 'Hello, world!',
	    style: {
	      background: "#222222",
	      borderRadius: "32px",
	      color: "white",
	      margin: "20%",
	      padding: "2px 16px 16px",
	      textAlign: "center",
	    }
	  }
	};

来看看源代码中测试用的声明文件中定义的 render 和 createElement 方法原型：

	// React.d.ts 
	declare module 'react' {
	  export class Component {
	    props: any;
	    state: any;
	    context: any;
	    static name: string;
	    constructor(props?, context?);
	    setState(partial : any, callback ?: any) : void;
	    forceUpdate(callback ?: any) : void;
	  }
	  export let PropTypes : any;
	  export function createElement(tag : any, props ?: any, ...children : any[]) : any
	}

	// ReactDom.d.ts 
	declare module 'react-dom' {
	  export function render(element : any, container : any) : any
	  export function unmountComponentAtNode(container : any) : void
	  export function findDOMNode(instance : any) : any
	}

React 将 HTML 的标签元素、Component 组件和 FunctionComponent 函数式组件等等统一抽象为可以渲染的 UI 元素，这是一个很好的概念。进而根据不同的元素重载出不同 createElement 方法实现对应的构造过程，但是基本还是几个要素：

- 元素出现在页面时的 tag；
- 元素配套的属性值 props；
- 元素的下一级节点 children；

以下是摘自源代码中部分 createElement 重载方法原型：

    // DOM Elements
    // TODO: generalize this to everything in `keyof ReactHTML`, not just "input"
    function createElement<P extends DOMAttributes<T>, T extends Element>(
        type: string,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]): DOMElement<P, T>;


    // Custom components
    function createElement<P extends {}>(
        type: FunctionComponent<P> | ComponentClass<P> | string,
        props?: Attributes & P | null,
        ...children: ReactNode[]): ReactElement<P>;


可以预计的是，最后还是要通过浏览器的 DOM API 去构造和管理节点的：

	document.createElement('div')

如果要追踪具体实现代码，可以从 React 工程的相应模块中查找，目前的版本是 react-17.0.0：

	// react-17.0.0\packages\react-dom\src\client\ReactDOMLegacy.js

	export function render(
	  element: React$Element<any>,
	  container: Container,
	  callback: ?Function,
	) {
	  invariant(
	    isValidContainer(container),
	    'Target container is not a DOM element.',
	  );
	  if (__DEV__) {
	    const isModernRoot =
	      isContainerMarkedAsRoot(container) &&
	      container._reactRootContainer === undefined;
	    if (isModernRoot) {
	      console.error(
	        'You are calling ReactDOM.render() on a container that was previously ' +
	          'passed to ReactDOM.createRoot(). This is not supported. ' +
	          'Did you mean to call root.render(element)?',
	      );
	    }
	  }
	  return legacyRenderSubtreeIntoContainer(
	    null,
	    element,
	    container,
	    false,
	    callback,
	  );
	}

从字面可以看出 legacyRenderSubtreeIntoContainer 大致意思就是把虚拟节点树 VirtualDOM 渲染到真实的 Web DOM 容器中：

	function legacyRenderSubtreeIntoContainer(
	  parentComponent: ?React$Component<any, any>,
	  children: ReactNodeList,
	  container: Container,
	  forceHydrate: boolean,
	  callback: ?Function,
	) {
	  if (__DEV__) {
	    topLevelUpdateWarnings(container);
	    warnOnInvalidCallback(callback === undefined ? null : callback, 'render');
	  }

	  // TODO: Without `any` type, Flow says "Property cannot be accessed on any
	  // member of intersection type." Whyyyyyy.
	  let root: RootType = (container._reactRootContainer: any);
	  let fiberRoot;
	  if (!root) {
	    // Initial mount
	    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(
	      container,
	      forceHydrate,
	    );
	    fiberRoot = root._internalRoot;
	    if (typeof callback === 'function') {
	      const originalCallback = callback;
	      callback = function() {
	        const instance = getPublicRootInstance(fiberRoot);
	        originalCallback.call(instance);
	      };
	    }
	    // Initial mount should not be batched.
	    unbatchedUpdates(() => {
	      updateContainer(children, fiberRoot, parentComponent, callback);
	    });
	  } else {
	    fiberRoot = root._internalRoot;
	    if (typeof callback === 'function') {
	      const originalCallback = callback;
	      callback = function() {
	        const instance = getPublicRootInstance(fiberRoot);
	        originalCallback.call(instance);
	      };
	    }
	    // Update
	    updateContainer(children, fiberRoot, parentComponent, callback);
	  }
	  return getPublicRootInstance(fiberRoot);
	}

再深入追踪 Render 的代码就涉及 React Fiber 部分了，这里的 fiberRoot 就是整个 React 应用的顶级 Fiber 对象，FiberRoot 对象主要用来管理组件树组件的更新进程，同时记录组件树挂载的DOM容器相关信息。



## JSX & Babel 入门 
- Babel 中文网 - https://www.babeljs.cn/docs/
- Babel is a JavaScript compiler - https://babeljs.io/
- Using Babel https://babeljs.io/setup#installation
- Babel REPL 交互式解释器 https://babeljs.io/repl
- babel REPL Custom Plugin https://codesandbox.io/s/babel-repl-custom-plugin-7s08o
- Babel with Sublime Text - https://github.com/babel/babel-sublime
- Create a New React App https://reactjs.org/docs/create-a-new-react-app.html

JSX 代表 JavaScript + XML，它的意义是实现了 XML 和脚本代码共存，在脚本直接使用 XML 节点来编写程序中的组件，这是非常有趣的技术：

	const element = <h1>Hello, world!</h1>;

通过转译程序，JSX 编写的元素会转译成原生的脚本代码一致实现，JSX 编写了什么样的 Element 元素，转译后就有对应的脚本代码实现，这是解放生产力的一大技术。这样的混合技术使得开发者完全摆脱了旧式字符拼接 DOM 结构的束缚，或者使用 jQuery 来零散地管理 DOM，使用 JSX 可以很方便地直接编写 Elements 供 React 渲染。

JSX 模板语法，可以记住两条规则，花括号 `{...}` 内的是 JavaScript 代码，在箭括号 `<...>` 内的就是标签组件定义。要在标签元素中写代码就需要使用花括号，在代码中可以直接写 XML 标。在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。

除 HTML 标签组件外，其它组件名称必须以大写字母开头。React 会将以小写字母开头的组件视为原生 DOM 标签。例如，`<div />` 代表 HTML 的 `div` 标签，而 `<Welcome />` 则代表一个组件，并且需在其作用域内使用。


因为 JSX 转译后就是输出 JavaScript 代码实现，所以可以省略不用 JSX，直接用 React 提供的 DOM 构建方法来写模板，比如一个 JSX 写的一个标题元素的等价 JSX 和 JS 代码：

	// JSX style
	const element = (
	  <h1 className="greeting">
	    Hello, world!
	  </h1>
	);

	// JS style - Babel Translated
	const element = React.createElement(
	  'h1',
	  {className: 'greeting'},
	  'Hello, world!'
	);

以上，只是经过 Babel 的转译得到的结果，可以使用 Babel 将任意符合语法格式的 JSX 代码进行转译，可以在线尝试 Babel REPL - Read Eval Print Loop 交互式解释器。

如原始 JSX 以下这样：

	// JSX - JavaScript + XML
	const element = <h1 abc={efg}>Hello, world!</h1>;

	const Fc = (props) => {
	  return props.children;
	}

	class Cc extends Any.Component {
		bar = 'hello';
		static foo = "Apple"
		constructor(props){
			this.props = props;
		}
		render(){
			return <div>{this.props.children}</div>;
		}
	}

	const elements = (props) => {
		let abc = ["A", 1, <Fc name="xyz"/>, <Cc name="xyz"/>];
		return (
			<>
			{abc.length>2 && <b>multiple</b>}
			<div>{abc.map( (it) => <b>{it}</b>) }</div>
			</>
		);
	}

React.createElement 方法原型参考：

	  export function createElement(tag : any, props ?: any, ...children : any[]) : any

对应 JavaScript - Babel React Preset 的转译结果类似以下，根据不同的配置会有差异：

	"use strict";

	function _defineProperty(obj, key, value) { 
	    if (key in obj) { 
	        Object.defineProperty(obj, key, { 
	            value: value, 
	            enumerable: true, 
	            configurable: true, 
	            writable: true 
	        }); 
	    } else { 
	        obj[key] = value; 
	    } 
	    return obj;
	}

	const element = /*#__PURE__*/React.createElement("h1", {
	  abc: efg
	}, "Hello, world!");

	const Fc = props => {
	  return props.children;
	};


	class Cc extends Any.Component {
	  constructor(props) {
	    this.props = props;
	  }

	  render() {
	    return /*#__PURE__*/React.createElement("div", null, this.props.children);
	  }
	}

	_defineProperty(Cc, "foo", "Apple");


	const elements = props => {
	  let abc = ["A", 1, 
	    /*#__PURE__*/React.createElement(Fc, {name: "xyz"}), 
	    /*#__PURE__*/React.createElement(Cc, {name: "xyz"})];

	  return /*#__PURE__*/React.createElement(
	    React.Fragment, // Tag
	    null,           // Props and children below
	    abc.length > 2 && 
	    /*#__PURE__*/React.createElement("b", null, "multiple"), 
	    /*#__PURE__*/React.createElement("div", null, abc.map(it => /*#__PURE__*/React.createElement("b", null, it))));
	};

可以看到，纯粹的尖括号对应的是 React.Fragment 代表的抽象节点，原先的 JavaScript 还是保留不变，只是嵌入的 XML 标签转换成了 React.createElement 方法创建的对象，这些就是 Babel 做的转译工作。而 createElement 方法接收 tag 参数中，可以接收的类型可以分为三类：

- Plain Text 即字符串或数值这些会原样渲染的内容；
- Function Component 函数组件，将原函数传入；
- Class Component 类组件，将原函数传入，组件的属性传递方式不变；


最早，React 提供了 JSX 的转译程序，但是后来 Babel 在转译方法的贡献做得更强，现在前端开发的转译工作基本由 Babel 来做了。

当然，可以有 JavaScript + XML，也可以 TypeScript + XML，只需要搭配相应的开发环境，将 jsx 文件改成 tsx 文件来做开发，并且后者带来的静态类型检查才是强大的。

要搭建一个现代的前端开发环境配套的工具有很多，比如 Grunt / Gulp / Webpack / Broccoli，都是要解决前端工程化问题。这个主题很大，这里关注基于 Webpack 的 React JSX 开发。现在业界领先的 ES6 编译工具 Babel 随着作者被 Facebook 招入麾下，已经内置了对 JSX 的支持，我们只需要配置 Babel 一个编译工具就可以了，配合 webpack 非常方便，现成的可以直接使用 Create React App 脚手架工具。

Babel 作为一个 JavaScript 转译器，它可以做的工作很多：

- 语法转换，Babel 能够转换 JSX 语法为相应的 JavaScript，让浏览器能运行！
- 类型标注 Type Annotations，支持 Flow 和 TypeScript！
- 因为浏览器进化速度跟不上 JavaScript 速度，可以通过 Browser Polyfill 在目标环境中添加缺失的特性，使用 @babel/polyfill 模块；
- 源码重构 codemods...

但基本的还编译器原理，Babel 的转译过程分为三个阶段：

- 对原代码进行解析 parsing 生成抽象语法树等；
- 根据预置设定进行转译 transforming；
- 最后生成相应代码 generating;

Babel 作为一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中，这解决了一个很大的问题，使得技术更新慢的浏览器也可以用上功能强大、发展更快的脚本技术。


Babel 对不同的功能集合支持会有相应的一个预置模块 preset，安装相应的预置模块来实现不同的功能，最新版 Babel 7 提供了以下几种预置：

- env - 支持 JavaScript 新特性的最小预置 https://www.babeljs.cn/docs/babel-preset-env

		npm install --save-dev @babel/preset-env
		yarn add @babel/preset-env --dev

- flow - 支持 Flow 静态类型检查 https://www.babeljs.cn/docs/babel-preset-flow

		npm install --save-dev @babel/preset-flow

- minify - 最小化打包混淆 https://www.babeljs.cn/docs/babel-preset-minify

		npm install babel-preset-minify --save-dev

- react - 支持 React JSX 语法 https://www.babeljs.cn/docs/babel-preset-react

		npm install --save-dev @babel/preset-react

- stage-0 从 Babel v7 开始，所有针对处于标准提案阶段的功能所编写的预设都已被弃用，env 不支持所有在 stage-x 的 plugin。
- stage-1 Stage 1: proposal
- stage-2 Stage 2: draft
- stage-3 Stage 3: candidate

- typescript - 支持 TypeScript 静态语言 https://babeljs.io/docs/en/babel-preset-typescript

		npm install --save-dev @babel/preset-typescript


Babel 7 的更新：

- Babel 7 的 npm 包正式更名为 @babel/core @babel/cli 等。
- Babel 7 不支持 Node.js 0.10, 0.12, 4 和 5 版本。
- Babel 7 移除了@babel/polyfill 内的 polyfills 支持，现在 @babel/polyfill 几乎只是 core-js v2 的映射。
- babylon 现在被重命名为 @babel/parser
- 去除包名上的年份。
- 将 react 和 flow 预设分离。


为当前 npm 项目安装 Babel CLI：

	npm install --save-dev @babel/core @babel/cli

设置项目脚本命令：

	  {
	    "name": "my-project",
	    "version": "1.0.0",
	+   "scripts": {
	+     "build": "babel src -d lib"
	+   },
	    "devDependencies": {
	      "@babel/cli": "^7.0.0"
	    }
	  }

运行 Babel 转译程序：

	npm run build



Babel 能够通过 React preset 转换 JSX 语法，和 babel-sublime 插件一起使用还可以把语法高亮的功能提升到一个新的水平。使用 Node + Webpack 开发环境，通过以下命令安装此 preset-react 还有 babel-loader：

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

Babel 可以删除类型注释，也就是说支持 Flow 和 TypeScript 这样的类型检查编译工具，查看 Flow preset 或 TypeScript preset 了解如何使用。务必牢记 Babel 不做类型检查，你仍然需要安装 Flow 或 TypeScript 来执行类型检查的工作。

通过以下命令安装 flow preset 或 typescript preset

	npm install --save-dev @babel/preset-flow
	npm install --save-dev @babel/preset-typescript

这两个工具都有相当简单的方法给逐个文件应用：

- Flow: 向文件顶部添加注释 // @flow 来激活 Flow 静态类型检查； 
- TypeScript：将文件扩展名 .js/.jsx 更改为 .ts/.tsx 来激活 TypeScript 静态类型检查；

例子：

	// @flow
	function square(n: number): number {
	  return n * n;
	}

	// typescript
	function Greeter(greeting: string) {
	    this.greeting = greeting;
	}

可以在 HTML 页面中直接引用 Babel CDN 脚本文件支持 JSX 语法，在编写组件的脚本区，只需要使用 `<script type="text/babel" />` 脚本标签即可，这种方法很方便，能快速编写示例直接在浏览器中运行，而不用搭建开发环境。

注意，通过 src 引用外部 jsx 脚本文件時，需要使用 AJAX，即 XMLHttpRequest 加載，需要以 Web 服務方式运行，或者修改浏览器的跨站策略 CORS policy 以放行这种跨站文件文件。

	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<title> Demo for React JSX! </title>
			<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"> </script> 
			<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"> </script>
			<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"> </script>
		</head>
		<body>
			<div id="example"> </div>
		</body>
	</html>

	<script>
		// import React from "react";
		// import {Component} from 'react';
		let Component = React.Component;
		const mountNode = document.getElementById('example')
	</script>

	<script type="text/babel">

		let pstyle = { "border": "1px solid #cccccc"};
		let dstyle = { 
			background:"#222222", 
			color: "white", 
			padding: "2px 16px 16px", 
			margin: "20%", 
			textAlign: "center",
			borderRadius: "32px",
		};

		function Demo(props){
			return <div style={dstyle}>{props.children} {props.dt}</div>
		}

		function Wrap(props){
			return <div>
				<Demo {...props} >
					<p style={pstyle}>Hello</p>
				</Demo>
			</div>
		}

		function render(){
			setInterval(evt=>{
				let dt = Date.now();
				let wrap = <Wrap key="d001" dt={dt} />;
				ReactDOM.unmountComponentAtNode(mountNode)
				ReactDOM.render(wrap, mountNode);
			}, 1000);
		}
		render();
		
	</script>

在线运行示例：

- MBA书记 https://scrimba.com/scrim/cbq2yZhV
- 我爱码笔 https://codepen.io/jeango/pen/mdrZRao
- 代码沙盒 https://codesandbox.io/s/patient-cdn-9vw4q?file=/public/index.html


## 插播：在线交互教育软件系统的要闻
- 网站开发者的感想：Why we're creating a new video format for code
- 关于开发者的采访稿：Interview with Per Harald Borgen https://survivejs.com/blog/scrimba-interview/
- Welcome to Scrimba https://scrimba.com/casts/cast-279
- Official site for Imba https://github.com/imba/imba.io
- 7GUIs: A GUI Programming Benchmark https://eugenkiss.github.io/7guis/
- Learn Vue.js for free https://scrimba.com/learn/learnvue
- Learn React for free https://scrimba.com/learn/learnreact
- Jasmine - A JavaScript Testing Framework https://jasmine.github.io/tutorials/your_first_suite
- 21 Web Dev Tips for 2021 🎇- with Ania Kubow https://scrimba.com/learn/21tips/tip-4-test-driven-programming-cwwRVJSV
- Introduction to TypeScript with Dylan C. Israel https://scrimba.com/learn/intrototypescript
- 你所需要知道的代码整洁之道 https://zhuanlan.zhihu.com/p/103365961
- Smarter Ways to Generate a Deep Nested HTML Structure by Ana Tudor https://css-tricks.com/smarter-ways-to-generate-a-deep-nested-html-structure/
- https://scrimba.com/learn/flexbox/your-first-flexbox-layout-flexbox-tutorial-canLGCw
- Reactive Player https://ractive-player.org/


Scrimba 不同于传统的视频教学除了评论就什么也不能做，Scrimba 是音频、编码记录回放的形式展现，用户能随时暂停，同时还能进行编辑，结合 discord 还可以在线交流。第一次见到这种可直接编辑代码的教学视频，知道大概的原理就是记录所有的键盘和鼠标事件并重绘 DOM，当然音轨也要保持同步。这种基于事件回放，没有任何像素点的录制方式节约了不少流量，播放过程也十分流畅，最重要的是可交互式的回放，类似的技术最早从 OpenCanvas 绘图软件见识过。

来看看创始人对采访的问答：

> How would you describe Scrimba to someone who has never heard of it?
> Scrimba is an interactive video format for communicating code. It makes the experience significantly better for both the creator and the viewer. The easiest way to understand Scrimba is to watch the 1 minute screencast below:
> 
> Welcome to Scrimba https://scrimba.com/casts/cast-279
> 
> As a viewer, you can pause and edit the code at any given time. So if you're struggling to understand something, just hit pause, jump into the environment and play around with the code until you understand it properly.
> 
> Scrimba also makes the creation experience much less frustrating, as we remove all the hassle involved with creating coding screencasts. No more setup, edit, encode, upload and re-encode. Just code while you talk and then publish it instantly.
> 
> How does Scrimba work?
> We record the underlying events instead of pixels. When replaying a Scrimba screencast, we recreate exactly what the creator did.
> 
> This opens up a whole new world of possibilities for interactivity, creation, responsiveness, search, and recommendations. We've only begun scratching the surface of what we can do with this format.

> How does Scrimba differ from other solutions?
> Compared to traditional video, Scrimba has the following benefits:
> 
> Much easier to create
> Interactive (viewer can pause and edit code)
> 1% file size of video
> Better mobile experience (because of responsiveness)
> Indexable/searchable


这真是一个神奇的网站，新手找教程，老鸟找灵感 Scrimba - Interactive Screencasts Created in an Instant！

Scrimba 是一个开发者团队的屏幕直播流分享工具，有自主的基于代码的称为 scrims 的视频格式。Scrimba AS 总部位于挪威奥斯陆，核心团队由 6 人组成，得到了 StartupLab、北欧制造商、Alliance Venture 和 Amasia 的支持。

Scrims 这种视频格式是交互式的，在官网编辑时以 Note 显示，每一个 Note 都是基本组织单元，每个 Note 都是可嵌套的，可以一层 Note 套着多个子 Note。每个 Note 有带声音的录制状态，和非录制状态。录制状态的 Note 可以播放重现原来的交互动作记录，而不带录制的 Note 就是一个原样展示的内容，每个 Note 都可以通过一个 URL 分享。

在 Note 进行操作时会自动进入编辑模式，如果前面没有正在编辑中的 Note，这个操作会产生一个新 Note，编辑完成后就可以将这个 Note 设置为确认状态，未确认修改的 Note 会在退出后就丢失。

Scrims 这种结构类似 Git 的分支结构，但这里有个问题是 Note 如何合并，毕竟 Scrims 不是 Git。

以上是 Scrimba 官网目前免费使用的版本的基本功能，可以制作免费的内容。收费的专业版本可以参加所有的课程，训练营和职业道路，不知道可以不可以发布收费的教学内容：

- Monthly 60$
- Semester 360$
- Annual 601$

整个官网就是一个课程资源加内容制作工具，编辑界面主要是编程 IDE 环境，除了基本的 HTML, CSS, JavaScript，已经支持 Python、TypeScript、Imba 等编程语言，还有 React、Vue、Angular、Mithril.js、Svelte、jQuery 等等开发工具。

目前主要为开发者提供教学内容，但可以想象的是其它领域也可以实现，是一个非常有前景的项目，从开发团队收到的资本支持也可以推断这到点。


Scrimba 目前在实现上还有些问题，如播放有时出问题，可能是服务器问题。选择模板时，只能单选，比如不能同时选择 TypeScript 和 React。如果选择了 TypeScript 再添加 React 依赖也不能正常 import 导入，需要按以下方式，而且 ReactDOM 还不能导入，服务器稳定性不够：

	import * as React from 'react';
	import * as ReactDOM from 'react-dom';


Imba 试用：

	npm install -g imba@2.0.0-alpha.109
	git clone --bare https://github.com/imba/imba-starter-app
	cd imba-starter-app
	imba -w server.imba


### 👉 Scrimba 本地直播

Scrimba 依赖技术：

- Introduction Imba https://imba.io/language/introduction
- Imba - The friendly full-stack language https://github.com/imba/imba
- ESBuild https://github.com/evanw/esbuild
- Scrimba CLI for scrimcasting from your local environment https://cnpmjs.org/package/scrimba
- Web Terminal Emulators https://github.com/microsoft/node-pty
- Xterm.js - Terminal 前端组件 https://github.com/microsoft/xterm.js
- Xterm.js - Terminal front-end component https://www.npmjs.com/package/vscode-xterm
- node-pty - Fork pseudoterminals in Node.JS https://www.npmjs.com/package/node-pty
- Windows conpty API https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/
- winpty library https://github.com/rprichard/winpty
- node-pty-prebuilt GitHub release https://github.com/daviwil/node-pty-prebuilt/releases
- Monaco Editor https://microsoft.github.io/monaco-editor/
- Windows Terminal 选项卡风格控制台 https://github.com/microsoft/Terminal


Scrimba 命令行工具提供的功能：

- Live stream your local dev environment to a URL
- Collaborate in real-time and discuss via voice chat
- Keep a recording of the session afterwards
- The most popular use-cases are code review, onbarding, and documentation.


All features

- Codebase, terminal and browser sharing
- Real-time collaboration
- Mouse pointer for each participant
- Voice chat
- Conferences (up to 4 people)
- Record sessions
- Dashboard for recorded sessions


Quick-start

	# install the CLI
	$ npm -g install scrimba

	# navigate to your project
	$ md scrimba-demo && cd scrimba-demo

	# start a live stream
	$ scrimba start

运行后就会在 Chrome 打开一个 scrim，接下来就可以通过 scrim 交互，编辑和保存文件，并通过 URL 分享本地的工作环境。

最后还是联接不上 scrimba 服务器：

	× Could not connect to https://scrimba.com:9000


### 👉 Monaco Editor
- Monaco Editor 介绍 https://zhuanlan.zhihu.com/p/47746336
- Monaco Editor https://microsoft.github.io/monaco-editor/
- microsoft.github.io/monaco-editor 站点源代码 https://github.com/Microsoft/monaco-editor
- Learn how to integrate the editor with these [complete samples](https://github.com/Microsoft/monaco-editor-samples/).
- NPM Package monaco-editor  https://www.npmjs.com/package/monaco-editor
- Monaco Editor Samples https://github.com/microsoft/monaco-editor-samples

微软有个项目叫做 Monaco Workbench，后来这个项目变成了 VSCode，而 Monaco Editor 就是从这个项目中成长出来的一个 Web 编辑器，很大一部分的代码 monaco-editor-core 都是共用的，所以 monaco 和 VSCode 在编辑代码，交互以及 UI 上几乎是一摸一样的。

有点不同的是，两者的平台不一样，monaco 基于浏览器，而 VSCode 基于 electron，所以功能上 VSCode 更加健全，并且性能比较强大。

- Rich IntelliSense, Validation

	TypeScript, JavaScript, CSS, LESS, SCSS, JSON, HTML

- Basic Syntax Colorization 

	XML, PHP, C#, C++, Razor, Markdown, Diff, Java, VB, CoffeeScript, Handlebars, Batch, Pug, F#, Lua, Powershell, Python, Ruby, SASS, R, Objective-C


NPM 上发布的 monaco-editor 模块包含内容：

- esm 目录包含 ESM 模块打包即 ES 脚本原生模块，支持 webpack；
- dev 目录包含 AMD 异步加载模块打包，unminified 文件；
- min 目录包含 AMD 异步加载模块打包，minified 文件；
- min-maps 目录包含源代码调试地图文件；
- monaco.d.ts 为 TypeScript 使用的 API 原型声明文件；

最好的学习方法是研究 microsoft.github.io/monaco-editor 站点代码，还有文档。站点工程使用 gulp 而不是 webpack 作为打包机。


#### Gulp 打包机使用
- Gulp - A toolkit to automate & enhance your workflow https://gulpjs.com/docs/en/getting-started/quick-start
- Gulp 入门指南 https://www.gulpjs.com.cn/docs/getting-started/quick-start/


前端的构建工具常见的有 Grunt、Gulp、Webpack 三种，Grunt 比较老旧，功能少，更新少，插件少。

Gulp 作为一个自动化构建工具，主要用来设定程序自动处理静态资源的工作，用自动化构建工具增强你的工作流程！

Gulp 是基于任务导向的工具，不管做什么功能，必须去注册一个任务，然后去执行这个任务，编写任务代码做需要做的功能。Gulp 的每个功能都是一个任务，压缩 CSS 的任务、合并文件的任务等，Gulp 规定任务要写在入口脚本中 glupfile.js，在这个文件中用来配置所有任务。

Gulp 是基于流式工作的工具，进行项目构建的时候，会将本地文件数据读取到内存，接下来的操作都在内存中进行，操作完成以后，再从内存中输出到本地。比如说当我们要合并两个文件的时候，先将这两个文件中的内容读取到内存中，然后在内存中进行合并，最后将合并后的内容从内存中输出到本地的文件中。这样，对应着两个操作，一个是输入，一个输出，也就是 I/O 操作。

Gulp 允许你使用现有 JavaScript 知识来书写 gulpfile 文件，或者利用你所掌握的 gulpfile 经验来书写普通的 JavaScript 代码。虽然 gulp 提供了一些实用工具来简化文件系统和命令行的操作，但是你所编写的其他代码都是纯 JavaScript 代码。

Gulpfile 入口脚本是项目目录下名为 gulpfile.js 或者首字母大写，就像 Makefile 一样命名的文件，在运行 gulp 命令时会被自动加载。在这个文件中，你经常会看到类似 src()、dest()、series() 或 parallel() 函数之类的 API。除此之外，JavaScript 代码或 Node 模块也会被使用。任何导出 export 的函数都将注册到 gulp 的任务 task 系统中。

可以使用需要转译的编程语言来书写 gulpfile 文件，例如 TypeScript 或 Babel，通过修改 gulpfile.js 文件的扩展名来表明所用的编程语言并安装对应的转译模块。

- 对于 TypeScript，重命名为 gulpfile.ts 并安装 ts-node 模块。
- 对于 Babel，重命名为 gulpfile.babel.js 并安装 @babel/register 模块。


每个任务 task 可以被分割为独立的文件，然后导入 import 到 gulpfile 文件中并组合。这不仅使事情变得井然有序，而且可以对每个任务 task 进行单独测试，或者根据条件改变组合。

另外 Node 的模块解析功能允许你用相同命名的 gulpfile.js 目录替代原来的脚本文件，只要该目录中包含一个名为 index.js 的文件。在导入时，该文件被当作 gulpfile.js 使用。并且，该目录中还可以包含各个独立的任务 task 模块。


执行以下命令安装 Gulp，如果因为模块依赖问题导致安装失败，尝试 -f 强制安装。

	npm rm --global gulp

	npm install gulp-cli -g
	npm install gulp --save-dev

	npm install -g -f gulp-cli

创建工程和进行测试：

	npx mkdirp my-project
	cd my-project
	
	#Create a package.json file in your project directory
	npm init

	#Install the gulp package in your devDependencies
	npm install --save-dev gulp

	#Verify your gulp versions
	gulp --version

创建入口脚本 gulpfile.js：

	function defaultTask(cb) {
	  // place code for your default task here
	  cb();
	}

	exports.default = defaultTask

在工程目录下运行测试命令：

	gulp



#### 基本使用

安装 monaco

	npm install monaco-editor --save-dev
	npm install monaco-editor-webpack-plugin --save-dev


然后在自己的文件中引入 monaco，这里不需要全部引入，只需要引入自己需要使用的功能模块即可。

	HTML

	<div id="monaco"> </div>

	JS

	import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
	const monacoInstance = monaco.editor.create(document.getElementById("monaco"),{
	    value:`console.log("hello,world")`,
	    language:"javascript"
	})
	monacoInstance.dispose();

我们设置了语言为javascript，界面是出来了，但是却发现没有语法高亮，输入命令发现其实根本没有javascript语言，只有一个最基础的plaintext。

像使用 VSCode 一样使用 monaco，按下 Ctrl+F 来执行文本查找，需要引入查找控件：

	import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';

monaco 还有许多这类控件，我们可以按需引入自己用到的。

不过有一个更加简便的方法，那就是直接引入 main 文件来代替单个 API 文件。

	import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';


	// editor.main.js
	import '../language/typescript/monaco.contribution';
	import '../language/css/monaco.contribution';
	import '../language/json/monaco.contribution';
	import '../language/html/monaco.contribution';
	import '../basic-languages/monaco.contribution';

	export * from './edcore.main';

采用这种方式引入的话，会自动带上所有的内置语言和控件，唯一的缺点就是包的体积过大。

目前为止，我们已经实现了一个可以输入，高亮，查找的web编辑器，但是，和VSCode比较起来，还少了许多重要的功能，例如代码补全，错误提示以及快捷命令功能等。


首先，我们自己可以设想一下，假如要自己来实现代码补全以及错误提示，我们会怎么做？

第一，我们要解析输入的文本，这时，我们就需要写一个Parser。
第二，根据Parser解析的结果来调用monaco的标注接口来标注错误的代码从而实现错误提示功能
第三，根据Parser解析的结果信息，提供上下文相关的代码候选项来实现代码补全功能。

可以看出来，实现起来难度会很大，涉及到的点很多，不过，和语法高亮一样，monaco 也帮助我们实现了这些功能，目前支持 html，css，ts/js，json 四种语言，我们只需要引入即可，但是引入可没有语法高亮那么简单。

Monaco 的实现采用 worker 的方式，因为语法解析需要耗费大量时间，所以用 worker 来异步处理返回结果比较高效。

我们使用的话需要两步，先提供一个定义 worker 路径的全局变量

	window.MonacoEnvironment = {
	 getWorkerUrl: function (moduleId, label) {
	  if (label === 'json') {
	    return './json.worker.js';
	 }
	  if (label === 'css') {
	   return './css.worker.js';
	  }
	  if (label === 'html') {
	   return './html.worker.js';
	  }
	  if (label === 'typescript' || label === 'javascript') {
	   return './typescript.worker.js';
	  }
	  if(label==="sql"){
	   return "./sql.worker.js";
	  }
	  return './editor.worker.js';
	  }
	}

选择对应的 language，monaco 会去调用 getWorkerUrl 去查 worker 的路径，然后去加载。这边默认会加载一个 editor.worker.js，这是一个基础功能文件，提供了所有语言通用的功能（例如已定义常量的代码补全提示），无论使用什么语言，monaco 都会去加载他。

在 webpack 中引入需要的 worker

	 entry: {
	      "main": path.resolve(process.cwd(), "src/main.js"),
	      "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
	      "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
	    },


好了，开始地狱模式，我们会遇到非常多的问题。

问题一. 我们的输出一般是加 hash 的，所以，输出的 worker 文件也会有对应的 hash 值后缀，例如 typescript.worker.a23sf4asfqw.js，那么，第一步中的 getWorkerUrl 中的配置 typescript.worker.js 就和他对不上了，导致查找 worker 路径失败。

问题二. worker 是运行在单独的线程中的，所以没有 window 变量，我们需要修改 webpack 的全局变量为 self 才可以。

问题3. 假如使用 html-webpack-plugin 插件，我们就要防止 worker 被直接引入 html 文件（因为 worker 也是单独的 entry），因此还需要设置 html-webpack-plugin 的 chunks。

....

不得不说 monaco 是一个很贴心的编辑器，他也帮我们解决了这一系列问题。解决我们问题的就是 monaco-editor-webpack-plugin。

	npm install monaco-editor-webpack-plugin -S

webpack配置

	const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

	module.exports=function(){
	  return {
	    ...
	    plugins:[
	      new MonacoWebpackPlugin()
	    ]
	    ...
	  }
	}

插件会帮我们做这么几件事

- 自动注入 getWorkerUrl 全局变量
- 处理 worker 的编译配置
- 自动引入控件和语言包。
- 具体要引入哪些控件和语言包，我们可以通过配置 languages 和 features 来控制

缺省情况下，插件的会引入默认的语言包和控件。

	new MonacoWebpackPlugin({
	 languages:["javascript","css","html","json"],
	 features:["coreCommands","find"]
	})

很好，现在我们以及完成了一个拥有自动补全，错误提示，以及语法高亮的编辑器。


在完成了编辑器本身的配置之后，我们可以开始进行下一步，绑定编辑事件。

	monacoInstance.onDidChangeModelContent((event) => {
	 const newValue=monacoInstance.getValue();
	 console.log(newValue)
	})

monacoInstance 是一个 create 方法返回的实例，他包含很多操作实例的方法。event 是一个 IModelContentChangedEvent 对象，他包含了非常非常详细的变更信息，包括操作的类型（撤销、恢复，还是手动输入引发的文本变更），变更的文本位置，变更的文本内容等。而我们要获取最新的值，则需要调用

	monacoInstance.getValue();

细心的朋友应该还会发现一个很奇怪的地方，那就是我们绑定的方法用的是 onDidChangeModelContent，里面有一个 Model，这命名可是很讲究的，字面意思就是变更 Model 内容触发事件，其实我们在编辑的时候，就是在 Model 上编辑，默认情况下，monaco 会帮我生成一个 Model，我们可以调用 getModel 打印一下

	monacoInstance.getModel()


看一看 API，我们可以发现，Model 其实是一个保存编辑状态的对象，他里面含有语言信息，当前的编辑文本信息，标注信息等。所以我们可以缓存一下 Model 对象，在需要的时候直接调用 setModel 即可随时切换到之前的状态。或者也可以在初始化实例的时候设置一个 Model。

	const model=monaco.editor.createModel("hahahaha","javascript");
	monacoInstance = monaco.editor.create(this.monacoDom.current, {
	 model:model
	})

而且我们可以直接在 model 上来绑定我们的事件

	model.onDidChangeContent((event)=>{
	...
	})

Model 最后也需要我们销毁，这里分两种情况，假如是通过 createModel 创建的 Model，那么我们需要手动销毁，但是如果是 monaco 默认创建的，则不需要，在调用实例的销毁方法时，会顺带销毁默认创建的 Model。

	model.dispose();

除了编辑事件之外，Model还有许多其他事件

例如：

- onDidChangeOptions 配置改变事件
- onDidChangeLanguage 语言改变事件
- ...

在简单的场景下，Model 的存在可能使得我们使用起来比较繁琐，但是，在复杂场景下，model可以极大的简化代码复杂性。

设想一下我们有 5 个 tab，每个 tab 都是一个编辑器，每个编辑器都有各自的语言，内容和标注信息，如果没有 Model，我们需要保存每个 tab 的语言，内容等信息，在切换到对应 tab 时再将这些信息初始化到编辑器上，但是利用 Model，我们不需要额外去保存每个 tab 的编辑信息，只需要保存每个 tab 的 Model，然后将 Model 传给编辑器进行初始化即可。



### 👉 Imba 编程语言

Sindre Aarsæther 作为 CTO 和联合创始人，开发了比 JavaScript 更简洁的 Imba 编程语言。整个 Scrimba 学习平台都是用 Imba 搭建的，包括前端和后端。

Imba 依赖了 Go 语言实现的 esbuild，基于 ESM 的打包机。Vite 和 snowpack 底层都是用了 esbuild。从 Vite 的 README 上可以发现 esbuild 的执行速度非常快，TypeScript 转义成 JavaScript 要比官方的 tsc 快 20-30 倍。对 React、Vue 和 Imba 进行基准测试，结果是 Imba 的 DOM 改写速度快了 20-30 倍。Imba 速度很快，真的非常快。同时支持 VSCode 和 Sublime，开发非常便利。

Imba 语法很像 Python，如官方的 Paint 示范程序：

	# https://imba.io/examples/apps/paint/app.imba
	const dpr = window.devicePixelRatio

	tag app-paint
		prop size = 500
		
		def draw e
			let path = e.$path ||= new Path2D
			path.lineTo(e.x * dpr,e.y * dpr)
			$canvas.getContext('2d').stroke(path)

		def render
			<self[d:block overflow:hidden bg:blue1]>
				<canvas$canvas[size:{size}px]
					width=size*dpr height=size*dpr @touch.fit(self)=draw>

	imba.mount <app-paint>


再看一个例子，样式的使用，:flex 表示 display: flex，简直就是 Web 专用的语言，颜色指定使用的是 Tailwind CSS 的预配置，数字越大色彩越深：

	# https://imba.io/examples/apps/playground/app.imba
	tag x-app
		css .blue bg:blue2 @hover:blue3 color:blue8
		css .teal bg:teal2 @hover:teal3 color:teal8
		css .yellow bg:yellow2 @hover:yellow3 color:yellow8
		css .red bg:red2 @hover:red3 color:red8 
		css .item p:4 flex:1 rd:3 m:4

		def render
			<self [d:flex flw:wrap]>
				<div.blue.item> "One"
				<div.red.item> "Two"
				<div.teal.item> "Three"
				<div.yellow.item> "Four"

	imba.mount <x-app>

Tailwind 是一款 utility-first 的框架，可以被用于快速地构建 UI。在创建网站时，您只需要确定项目的范围，而无需自行编写 CSS。虽然 Tailwind 并不提供默认的主题，您也找不到任何内置的 UI 组件，但是您可以使用预设计的部件菜单，来构建目标网站。



### 👉 Xterm.js
- node-pty - electron example to v9.1.0 https://github.com/microsoft/node-pty/tree/master/examples
- Node.js Versions https://nodejs.org/zh-cn/download/releases/

Xterm.js 是用 JavaScript 编写的终端前端组件，可以在浏览器模拟终端的工作台。它使应用程序能够为其用户提供功能齐全的终端，并创造良好的开发体验，参考 VSCode 的终端界面效果。它适用于大多数终端应用程序，如 bash，vim 和 tmux，这包括对基于 curses 的应用程序和鼠标事件支持的支持。PTY 在前端应用与 Shell 之间充当中间人，负责输入输出数据的传递。

Xterm.js Features

- Text-based application support:  基于文本的应用程序支持，使用 bash、git 等应用程序。
- Curses-based application support:  基于 Curses 的应用程序支持，使用 vim、tmux 等应用程序。
- Mouse events support:  鼠标事件支持，捕获鼠标事件，如单击和滚动，并将其传递给终端的后端控制进程。
- CJK (Chinese, Japanese, Korean) character support:  中日韩字符支持，无缝渲染 CJK 字符。
- IME support:  输入法支持，使用键盘输入法插入国际字符，包括中日韩。
- Self-contained library:  独立库，它不需要任何像 jQuery 或 React 这样的外部库
- Modular, event-based API:  模块化、基于事件的 API，让您轻松构建插件和主题

安装使用，可以为 TypeScript 安装类型声明文件：

	npm install xterm
	npm install @types/xterm

Xterm.js 通过后端的 node-pty 充当与 Shell 服务的数据媒介，在两者之间交换 stdin 和 stdout 数据，实现一个 Web pseudoterminal。node-pty 依赖了
Windows conpty API 和 winpty。


Xterm.js + Electron 示范

	var os = require('os');
	var pty = require('node-pty');
	var Terminal = require('xterm').Terminal;

	// Initialize node-pty with an appropriate shell
	const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
	const ptyProcess = pty.spawn(shell, [], {
	  name: 'xterm-color',
	  cols: 80,
	  rows: 30,
	  cwd: process.cwd(),
	  env: process.env
	});

	// Initialize xterm.js and attach it to the DOM
	const xterm = new Terminal();
	xterm.open(document.getElementById('xterm'));

	// Setup communication between xterm.js and node-pty
	xterm.onData(data => ptyProcess.write(data));
	ptyProcess.on('data', function (data) {
	  xterm.write(data);
	});

node-pty 和 Electron 搭配使用时，如果运行出错，需要注意版本匹配问题。

	Uncaught Error: The module '\\?\C:\electron\node_modules\node-pty\build\Release\conpty.node'
	was compiled against a different Node.js version using
	NODE_MODULE_VERSION 72. This version of Node.js requires
	NODE_MODULE_VERSION 80. Please try re-compiling or re-installing
	the module (for instance, using `npm rebuild` or `npm install`).

有个细节前提需要注意，electron-rebuild 只会 rebuild dependencies 依赖。NODE_MODULE_VERSION 指的是 Node.js ABI - application binary interface 版本号，用来确定编译 Node.js 的 C++ 库版本，以确定是否可以直接加载而不需重新编译。

Node、Electron、v8、Chromium 内核版本都有一定的对应关系，Electron 中的 V8 和 Nodejs 编译 addon 使用的 v8 版本不一致导致。这里提示 conpty.node 的 API 72 版本，而当前 Electron 要求 80 版本。

可以考虑重新编译插件：

	npm i electron-rebuild -s
	./node_modules/.bin/electron-rebuild --abi=72

指定版本

	cnpm rebuild --runtime=electron --target=5.0.13 --dist-url=https://npm.taobao.org/mirrors/atom-shell --abi=72
	node-gyp rebuild --target=5.0.13 --dist-url=https://npm.taobao.org/mirrors/atom-shell 

其它解决办法，换 Electron 版本，重新编译 node-pty。

	npm install electron@4.x
	npm install electron@5.x


### 👉 node-pty

Windows conpty API 和 Windows Command-Line 系列文章：

- Command-Line Backgrounder 
- The Evolution of the Windows Command-Line 
- Inside the Windows Console 
- Introducing the Windows Pseudo Console (ConPTY) API 
- Unicode and UTF-8 Output Text Buffer 

- https://blogs.msdn.microsoft.com/commandline/2018/06/20/windows-command-line-backgrounder/
- https://blogs.msdn.microsoft.com/commandline/2018/06/27/windows-command-line-the-evolution-of-the-windows-command-line/
- https://blogs.msdn.microsoft.com/commandline/2018/07/20/windows-command-line-inside-the-windows-console/
- https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/
- https://devblogs.microsoft.com/commandline/windows-command-line-unicode-and-utf-8-output-text-buffer/
- https://github.com/Microsoft/node-pty/wiki/Debugging

GYP 是一种构建自动化工具，node-gyp 就是为 Node 编译插件的。为了方便跨平台，npm 干脆就直接源码分发，用户装的时候再现场编译。


控制台程序的越来越时髦，如 Windows Terminal 选项卡风格控制台，将 PowerShell 和内置的 WSL - Linux 系统控制台统一整合，极大方便了开发者的使用，Windows + Linux 才是桌面系统的未来之光。

西雅图开幕的 Build 2019 大会上，微软公布了即将面向 Win 10 推出的新命令行程序，Windows Terminal(Windows终端)。Windows Terminal 将把目前的 PowerShell、Cmd、Windows Linux 子系统（WSL）、Azure（微软的云服务）四大环境实现统一。

自从 Satya Nadella 执掌微软帝国以来，微软对开源社区态度发生 180 度转变，也不再视 Linux 为毒瘤，开始以实际行动践行“Microsoft love Linux”的誓言：微软的 Azure 支持 Linux、开源 .Net Core、开源 VS Code、完善命令行对 POSIX 支持、搞 Windows Subsystem for Linux 黑科技、收购 GitHub 等。


winpty 与 Windows console 程序通信，为 Windows 系统提供了类似 Unix pty 功能的工具，包含 libwinpty 库和用于 Cygwin 和 MSYS 的工具以运行 Windows 控制台程序。

- winpty-agent.exe 助手工具，通常由 winpty.dll 启动与一个隐藏的 console 交互，可以用于简单的调试；
- MinGW g++ C++11 编译得到 `winpty.dll` and `winpty-agent.exe`
* A g++ toolchain targeting Cygwin or MSYS to build `winpty.exe`

winpty 需要两套 g++ 工具链，因为它被分成两部分，使用 MinGW 编译 `winpty.dll` 还有 `winpty-agent.exe` 二进制接口与 Windows 命令行界面。使用 MSYS/Cygwin 处理 `winpty.exe` 二进制接口与 MSYS/Cygwin 终端。

相比 winpty 提供的控制台程序交互，更新的是 conpty。

终端，一般认知范围内略同于命令行工具，通俗点说就是 shell 进程。每次在命令行中输入一串命令，敲入回车，终端进程都会 fork 一个子进程，用来执行输入的命令，终端进程通过系统调用 wait4() 监听子进程退出，同时通过暴露的 stdout 输出子进程执行信息。

Web 伪终端的实现类似于本地化的终端功能，但需要做工作会更多。网络时延及可靠性保证、shell 用户体验尽量接近本地化、Web 终端 UI 宽高与输出信息适配、安全准入控制与权限管理等。在具体实现 Web 终端之前，需要评估这些最核心的功能，shell 的功能实现及用户体验、安全性。Web 终端是在提供一个线上服务器功能，因此安全性是必须要保证的。

windows-build-tools 是在 Windows 平台用于编译 Node 模块的工具，下执行以下命令编译：

	npm install node-pty
	npm install --global --production windows-build-tools

node-pty 依赖条件：

- Windows SDK - only the "Desktop C++ Apps" components are needed to be installed
- Node.JS 10+


安装 node-pty 后还在本机运行提示 Cannot find module '..\build\Release\pty.node'，或 conpty.node 模块。查找 windowsPtyAgent.js 文件，修改其 pty 的指向，根据不同版本的 node-pty 需要修改的位置不一样，根据错误信息定位要修改的位置：

	// node\node_modules\scrimba\node_modules\node-pty-prebuilt\lib\windowsPtyAgent.js
	console.log("CWD", path.resolve('.'));
	var cwd = path.resolve('.');
	var pty = require(path.join(cwd, 'node_modules', 'node-pty', 'build', 'Release', 'pty.node'));


	// node_modules\node-pty\lib\utils.js
	function loadNative(moduleName) {
	    let modir =  path.parse(path.join(__dirname));
	    console.log("CWD", path.resolve(".."), modir);
	    let module = path.join(modir.dir, 'build', 'Release', moduleName + ".node");
	    try {
	        return require(module);
	    }
	    catch (_a) {
	        console.log("NOTFOUND MODULE", module);
	        let module = path.join(modir.dir, 'build', 'Debug', moduleName + ".node");
	        return require(module);
	    }
	}
	exports.loadNative = loadNative;

根据 CWD 显示当前目录尽管在 src，但是还是不能使用 ../node_modules 来访问模块，只能将 node_modules 当作工作目录，Node 会根据这个目录加载模块。

使用 node-pty-prebuilt 编译失败，需要使用 npm install --force 强制安装，没有完全编译通过，只生成了两项：

- winpty-agent.exe
- winpty.dll

Microsoft Github 提供的 KillDeepTree 示范：

	var os = require('os');
	var pty = require('node-pty-prebuilt');
	// var pty = require('../..');

	var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

	var ptyProcess = pty.spawn(shell, [], {
	  name: 'xterm-color',
	  cols: 80,
	  rows: 30,
	  cwd: __dirname,
	  // cwd: process.env.HOME,
	  env: process.env
	});

	ptyProcess.on('data', (data) => process.stdout.write(data));
	// ptyProcess.onData((data) => process.stdout.write(data));

	ptyProcess.write('start notepad\r');
	ptyProcess.write('npm start\r');
	ptyProcess.resize(100, 40);
	ptyProcess.write('ls\r');

	// Kill the tree at the end
	setTimeout(() => {
	  console.log('Killing pty');
	  ptyProcess.kill();
	}, 10000);

folk 示范：

	var os = require('os');
	var pty = require('../..');

	var isWindows = os.platform() === 'win32';
	var shell = isWindows ? 'powershell.exe' : 'bash';

	var ptyProcess = pty.spawn(shell, [], {
	  name: 'xterm-256color',
	  cols: 80,
	  rows: 26,
	  cwd: isWindows ? process.env.USERPROFILE : process.env.HOME,
	  env: Object.assign({ TEST: "Environment vars work" }, process.env),
	  useConpty: true
	});

	ptyProcess.onData(data => process.stdout.write(data));

	ptyProcess.write(isWindows ? 'dir\r' : 'ls\r');

	setTimeout(() => {
	  ptyProcess.resize(30, 19);
	  ptyProcess.write(isWindows ? '$Env:TEST\r' : 'echo $TEST\r');
	}, 2000);

	process.on('exit', () => ptyProcess.kill());

	setTimeout(() => process.exit(), 4000);




### 👉 CodePen

说到 CodePen 这个在线代 IDE，前端开发者肯定不陌生，完善的工程管理，完善的编辑快捷键功能，完善的社区交流。如果说 Dribbble 是设计师们聚集的圣地，那么 CodePen 则是前端开发者们约码的天堂。它不仅提供给你了一个 Showcase 的平台，而且能够开拓你的视野，让你能够及时的了解最新前端技术的应用，同时帮助交互设计师找寻更多的灵感。

CodePen 是一个完全免费的前端代码托管服务，与 GitHub Pages 相比，它最重要的优势是即时预览。无论是 Jade、 LESS、 Sass，还是 CoffeeScript、 Babel es6+、TypeScript 都能尽情使用。

快速添加外部资源文件，只需在输入框里输入库名，CodePen 就会寻找匹配的 CDN 上的 css 或 js 库。免费用户支持创建三个模板，不是每个作品都需要从白板开始。优秀的外嵌生成，且支持 oEmbed，在 WordPress 或 Reddit 等支持 oEmbed 的平台上，只要简单地把链接贴入编辑框，发布后会自动转为嵌入作品。

当然，它不是 Git ，不能记录提交历史只能有 fork 功能，通常出于备份他人优秀作品，防止未来该作品消失了或者变了样子。

在 CodePen 上发布的公开作品均使用 MIT 开源协议。CodePen 团队目前只有八个人，完全称得上小而精。

CodePen 每年会出一期名为 The Most Hearted 作品集专题，让我们在惊叹前端开发者创造力的同时，也能够学习一些新的技术，捕捉一些新的想法。2016 年专题中盘点了 100 个最受欢迎的 Pens，参考其中一些经典示范：

- 渐近式琶音器 Musical Chord Progression Arpeggiator - Jake Albaugh

	在作品中，作者利用了音阶生成器 、琶音模式生成器以及 Tone.js 实现的一个 Web（HTML/CSS/JS）应用。

	- 作品地址 https://codepen.io/jakealbaugh/pen/qNrZyw
	- 依赖库地址 https://github.com/Tonejs/Tone.js

- Shader 图像变换特效

	在这个作品中，作者便扩展了 THREE.js 这个 WebGL 第三方库中的 MeshPhongMaterial 实现了动画的任意变换。另外，他还利用 THREE.js 实现了文本变换，而此作品也是基于文本变换而来的。实现交互式变换，拖动鼠标可以对动画时间进行定位。

	- 作品地址 https://codepen.io/zadvorsky/pen/PNXbGo

- Flexbox 游乐场

	在这个作品中，作者为大家展示了 Flex 容器属性与项目属性的应用，交互地学习 Web 的 Flexbox 布局技术。UI 控件的设计做得不错，拖动可以调整数值，点击可以设置预配置属性。

	- 参考阮一峰的 Flex 布局教程 https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html	
	- 作品地址 https://codepen.io/enxaneta/pen/adLPwv



## Rendering 触发更新渲染
- React v16.6.0: lazy, memo and contextType https://reactjs.org/blog/2018/10/23/react-v-16-6.html
- Hooks FAQ: How do I implement shouldComponentUpdate? https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate
- Dive into React codebase: Handling state changes https://reactkungfu.com/2016/03/dive-into-react-codebase-handling-state-changes/
- Optimizing Performance https://reactjs.org/docs/optimizing-performance.html

前面解析了 React 的渲染基本流程，这里将重点放在渲染控制上。React 渲染就是执行元素的渲染函数的过程，对于类组件，就是 render() 成员函数，对于函数式组件就是它本身，对于 HTML 元素则直接解析成虚拟节点再构造成真实的 DOM 节点。

但是出于性能考虑，Render() 函数是有条件触发的，对于类组件，这个过程还涉及组件生命周期的细节：

+ 首次渲染 Initial Render，即元素第一次被呈现在页面时触发；
+ 调用 this.setState() 更新组件状态，不会立即触发，React 会优化在适当时机执行；
+ 更新父组件状态时，通常会修改子组件的 props 属性来传递数据，使得子组件状态被动更新；
+ 如果父组件触发了 render(), 基本上子组件也会相应触发 render()；
+ 调用组件的 this.forceUpdate() 或 forcereload() 进行强制渲染；
+ 调用 ReactDOM.unmountComponentAtNode(this.el) 销毁组件再重新渲染，可以配合 ReactDOM.findDOMNode() 方法使用；

渲染时机的控制是很大的一个知识点，涉及到性能优化的方方面面，特别是越大的工程，优化需求越迫切。这需要熟练地使用 React 的各种调优技术。

React 组件大概分为三种类型：

- HTML 标签组件，正确来讲是 Element；
- StatelessComponent 无状态组件，或称为函数式组件，包括高阶函数组件 HOC - High Order Components；
- React.Component 和 PureComponent 两种有状态的类组件，它们包含完整的组件生命周期函数；


比如，一定要使用类组件时，可以考虑使用 PureComponent 类组件替代 Component 类组件，两者表现基本都一样。只是在 shouldComponentUpdate 方法的实现逻辑上不一样，Component 的实现只是简单返回 true。而 PureComponent 的实现对 props、state 进行浅比较 shallow comparison，如果组件的 props 和 state 都没发生改变就不执行渲染，包括 componentWillUpdate 和 componentDidUpdate 函数都不执行。这样过滤了不必要行为来提高性能，但该组件也具有一定的缺陷，因为它只能进行一层浅比较。简单来说，它只比较 props 和 state 的内存地址，如果内存地址相同，就返回 false 不执行重绘。

React 定义了生命周期的接口 ComponentLifecycle，所有相关的生命周期函数都是接口给定的，这部分专门在组件的状态与生命周期中解析。

参考 ReactBaseClasses 源代码：

	// react-17.0.0\packages\react\src\ReactBaseClasses.js
	/**
	 * Convenience component with default shallow equality check for sCU.
	 */
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  // If a component has string refs, we will assign a different object later.
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
	pureComponentPrototype.constructor = PureComponent;
	// Avoid an extra prototype jump for these methods.
	Object.assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;

	export {Component, PureComponent};



如果使用函数式组件，从本质上来说，无状态组件就是一个 render 纯函数，可以搭配 Hooks API 使用。

- ✅ React.memo() 缓存函数式组件增强性能，这是一个高阶函数组件；
- ✅ React.useMemo() 对函数式组件启用缓存增强性能，这是 React 提供的一个 Hooks API；
- ✅ React.lazy() 使用 <Suspense /> 进行代码拆分和懒加载，参考 Code-Splitting 文档；
- ✅ 类组件能通过 shouldComponentUpdate 依据 props 和 state 决定是否执行 render。
- ✅ 函数式组件通过 React 16.6.0 提供的 React.memo() 高阶组件封装获得依据 props 决定是否执行 render 的能力。

其中 memo() 和 lazy()，React 16.6.0 发布更新了两个新的重要功能，此外还引入其它多个 Hooks API。旧版本 React 中，因为函数式组件没有状态管理，不适用 setState 方式更新组件状态，而新版本引入了 useState() 使用函数式组件也能像类组件一样使用状态管理函数。

当工程规模、依赖组件达到一定量之后，打包后的文件也会随之增大而使得页面不能一次过加载所有内容，在浏览某个页面的时候也并不需要一次性加载所有内容，只需要当前页面的资源即可，此时可以参考本文档实现静态资源的切割及按需加载。

以下示范 React.lazy() 的使用：

	import React, {lazy, Suspense} from 'react';
	const OtherComponent = lazy(() => import('./OtherComponent'));

	function MyComponent() {
	  return (
	    <Suspense fallback={<div>Loading...</div>}>
	      <OtherComponent />
	    </Suspense>
	  );
	}

函数原型参考：

    function lazy<T extends ComponentType<any>>(
        factory: () => Promise<{ default: T }>
    ): LazyExoticComponent<T>;


React.memo() 和 PureComponent 很相似，它帮助我们控制何时重新渲染组件。

	class Child extends React.PureComponent {
	    render(){
	        return (
	            <div>I am update at {Date.now()/1000}</div>
	        )
	    }
	}

	const MyFC = React.memo(function MyFC(props) {
	    return (
	        <div>I am update at {Date.now()/1000}, only if props change</div>
	    )
	});

注意，React.memo() 是高阶函数组件 HOC，经过它封闭的函数组件还是函数组件，但组件仅在它的 props 发生改变的时候进行重新渲染。通常来说，在组件树中 React 组件，只要有变化就会走一遍渲染流程。但是通过 PureComponent 和 React.memo()，我们控制组件的渲染流程。

React.memo() 接受第一个参数为纯函数的组件，第二个参数传入一个比较函数，用于对比 props 控制是否刷新，与 shouldComponentUpdate() 功能类似，所以 React.memo 可以看作是 PureComponent 一样的组件。React.memo() 封装函数式组件，被封装的组件依旧保持原有的函数特性，这就是高阶函数 HOC 的意义。

React.memo() 和 useMemo 命名上很相似，功能上很是相似的，都是提供组件缓存功能。但是，可以给 memo() 的第二个参数传入一个状态比较函数，判断相同就不重新渲染，而 useMemo() 本身有比较函数，只需传入依赖的状态数据列表，是一个数组。

	const Button = React.memo((props) => {
	  // your component
	});

	function Parent({ a, b }) {
	  // Only re-rendered if `a` changes:
	  const child1 = useMemo(() => <Child1 a={a} />, [a]);
	  // Only re-rendered if `b` changes:
	  const child2 = useMemo(() => <Child2 b={b} />, [b]);
	  return (
	    <>
	      {child1}
	      {child2}
	    </>
	  )
	}

参考 React.memo 原型：

	export function memo<Props>(
	  type: React$ElementType,
	  compare?: (oldProps: Props, newProps: Props) => boolean,
	)

上线体验 https://codepen.io/jeango/full/XWjLaLO


## Components & Props 组件与属性
- React Components, Elements, and Instances https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html

前面已经解析过 React 组件大概分为三种类型：

- HTML 标签，正确来讲是 Element 不是组件，但当作组件来使用也没什么不对；
- FunctionComponent 函数式组件，或称无状态组件，包括高阶函数组件 HOC - High Order Components；
- React.Component 和 PureComponent 两种有状态的类组件，它们包含完整的组件生命周期函数；

使用组件概念的目的就是为了提高软件的复用，如果不能高效得利用组件，那它就是一个失败的组件。

React 类型定义中，类组件是泛型实现，其中 P、S、SS 参数对应的是 Props, State 和 getSnapshotBeforeUpdate 方法相关的 SnapShot：

    class Component<P, S> { ... }

    interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> { }
    interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {...}


在 React 中，组件一般有两种形式：函数组件和类组件，前者就是一个函数就可以当一个组件。

	// 类组件
	class MyClassComp extends React.Component {
		render () {
			return <div className="my-comp"></div>
		}
	}

	// 函数组件
	const MyPureFuncComp = () => (
		<div className="my-comp"></div>
	)

在 React 系统内，函数即组件！React 要使用函数作为组件的最小单元，函数式组件没有自己的 State ，因为函数式组件其实是一个只实现了 render 函数的组件。


比如，官网文档中的一个评论组件的反面示范：

	function Comment(props) {
	  return (
	    <div className="Comment">
	      <div className="UserInfo">
	        <img
	          className="Avatar"
	          src={props.author.avatarUrl}
	          alt={props.author.name}
	        />
	        <div className="UserInfo-name">
	          {props.author.name}
	        </div>
	      </div>
	      <div className="Comment-text">{props.text}</div>
	      <div className="Comment-date">
	        {formatDate(props.date)}
	      </div>
	    </div>
	  );
	}

对于一个组件来说，结构太复杂了，需要细化组件的功能，尽量功能保持单纯，比如用户信息部分就可以取作为两个组件来实现：

	function Avatar(props) {
	  return (
	    <img className="Avatar"
	      src={props.user.avatarUrl}
	      alt={props.user.name}
	    />
	  );
	}

	function UserInfo(props) {
	  return (
	    <div className="UserInfo">
	      <Avatar user={props.user} />
	      <div className="UserInfo-name">
	        {props.user.name}
	      </div>
	    </div>
	  );
	}

	function Comment(props) {
	  return (
	    <div className="Comment">
	      <UserInfo user={props.author} />
	      <div className="Comment-text">{props.text}</div>
	      <div className="Comment-date">
	        {formatDate(props.date)}
	      </div>
	    </div>
	  );
	}

再组合后，就构成全功能的一个组件，还可以用在其它页面上，这就是组件的复用，这种组件组合的思想是 React 的基本设计理念。


React 提供了函数式组件的内部定义，React 16.7 - React.SFC 是过时 API，最新的是 React.FC，可以替换使用，本质上是 Hooks 函数。请注意 React.SFC 是 React.StatelessComponent 的别名，React.FC 是 React.FunctionComponent 的别名。 

	const example: React.StatelessComponent<IProps> = ({props}) => ();
	const example: React.SFC<IProps> = ({props}) => ();

	const example: React.FunctionComponent<IProps> = ({props}) => ();
	const example: React.FC<IProps> = ({props}) => ();

函数组件也叫无状态组件 StatelessComponent，可以返回除对象类型外的 HTML 标签、字符串、数值等基础类型或类组件，或包含这些类型的数组，都是正确的。无状态组件概念 Stateless Component 除了父组件传入的属性 props，它不应该再依赖其他的任何的全局变量，它不应该维护自己的 state。因此无状态组件加载后不应该再更改其视图，不应该对无状态组件进行重绘。或者说需要重绘的组件就不应该使用无状态组件，而应该使用类组件。

以下类型定义信息来自 @types/react。可以看到 SFC 或 StatelessComponent 即无状态组件已经弃用，改用 FunctionComponent：

    /**
     * @deprecated as of recent React versions, function components can no
     * longer be considered 'stateless'. Please use `FunctionComponent` instead.
     *
     * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
     */
    type SFC<P = {}> = FunctionComponent<P>;

    /**
     * @deprecated as of recent React versions, function components can no
     * longer be considered 'stateless'. Please use `FunctionComponent` instead.
     *
     * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
     */
    type StatelessComponent<P = {}> = FunctionComponent<P>;

    type FC<P = {}> = FunctionComponent<P>;

    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement | null;
        propTypes?: WeakValidationMap<P>;
        contextTypes?: ValidationMap<any>;
        defaultProps?: Partial<P>;
        displayName?: string;
    }

所有组件都可以接收任意属性数据，通常使用命名为 props 的变量进行传递，需要注意的是，组件属性数据永远是单向流动的，从父组件流向子组件。子组件修改 props 的数据并不会反馈到父组件，这很好理解，就像函数传值调用一样，所以组件对 props 属性的访问是只读的 Read-Only。虽然，JavaScript 这里传递的是对象引用，但是在 React 内部并不难将这个引用的对象做一次完整拷贝，使原来传入的对象引用失去作用，所以在子组件中修改 props 只在子组件中生效。

在项目中会有组件间的数据通讯需要，在这种单向的数据流约束下，有不同情形及相应的处理：

+ 父组件向子组件通信：直接给子组件传递 props；
+ 子组件向父组件通信：将回调函数通过 props 传入子组件；
+ 跨级组件间通信：使用 Context 对象，参考 Hooks API useContext()；
+ 非嵌套组件间通信：使用事件订阅编程模式 EventBus；
+ 使用浏览器提供的 localStorage、sessionStorage 本地存储服务...

浏览器本地存储服务大约有 5MB 容量，示范：

	// 当前会话数据存储服务
	sessionStorage.setItem("lastname", "Smith");
	sessionStorage.getItem("lastname");

	// 本地存储存储服务
	localStorage.setItem("lastname", "Smith");
	localStorage.getItem("lastname");


和组件属性相对的是状态数据，就是称为 state 的状态数据，它需要通过专属的 API 来设置才能触发组件状态的更新。

组件可以选择把它的 state 作为子组件的 props 向下传递到它的子组件中：

	<h2>It is {this.state.date.toLocaleTimeString()}.</h2>

这对于自定义组件同样适用：

	<FormattedDate date={this.state.date} />

FormattedDate 组件会在其 props 中接收参数 date，但是组件本身无法知道它是来自于 Clock 的 state 或 props，还是手动输入的：

	function FormattedDate(props) {
	  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
	}


最简单的子组件向父级传递数据的方法，是在父组件中给子组件属性中设置回调函数，即 React 官方文档中所说的组件状态提升 Lifting State Up。官方提供的例子演示了摄氏度 Celsius 和华氏度 Fahrenheit 换算，子组件通过调用 onTemperatureChange 设置的回调函数向父组件报告输入的温度。

去 CodePen 交互体验 https://codepen.io/gaearon/pen/WZpxpz?editors=0010


## Without JSX then createClass() 组件创建方式
- https://reactjs.org/docs/react-without-es6.html
- https://reactjs.org/docs/react-without-jsx.html
- https://babeljs.io/repl/

最简单的组件创建就是在 render() 函数中传入的 HTML 标签：

```js
render() {
    return (<div className="demo">暂无数据</div>);
}
```

实际上 React 将所字符串、数值、包含字符串或数值的数组都看作是组件，返回这些内容的函数也是组件。

```js
const e = React.createElement;

ReactDOM.render(
  e('div', null, 'Hello World'),
  document.getElementById('root')
);
```

除了通过扩展 React.Component 或 PureComponent 的方式，另一创建类组件的方法是通过 React.createClass() 函数：

```tsx
class Hello extends React.Component {
	render() {
		return <div>Hello {this.props.toWhat}</div>;
	}
}

ReactDOM.render(
	<Hello toWhat="World" />,
	document.getElementById('root')
);
```

以上代码经过编译后，得到不含 JSX 的代码:

```ts
class Hello extends React.Component {
	render() {
		return React.createElement('div', null, `Hello ${this.props.toWhat}`);
	}
}

ReactDOM.render(
	React.createElement(Hello, {toWhat: 'World'}, null),
	document.getElementById('root')
);
```

createClass() 这种方法是 JSX 语法经过 Babel 编译后使用的，可以在线尝试 Babel REPL。

- React.createClass() 方法用于生成一个组件类；
- 所有组件类都必须有自己的 render 方法，用于输出组件；
- 假如生成一个组件类 Hello，模板插入`<Hello />`时，会自动生成组件类 Hello 的一个实例
- 组件类的第一个字母必须大写，否则会报错，比如 Hello，不能写成 hello，避免解析成 html 标签
- 组件类里面只能包含一个顶层标签，否则会报错，多个组件可以使用数组包装；
- 组件类对应的标签的用法和 HTML 标签的用法完全一致，可以加入任意的属性；
- 给组件标签添加属性时，需要注意两个地方，就是把 class 属性写成 className，for 属性写成 htmlFor，这是因为 class 和 for 是保留字；

createClass 本质上是一个工厂函数，extends 的方式更加接近最新的 ES6 规范的写法，两种方式在语法上的差别主要体现在方法的定义和静态属性的声明上。

React.createClass 和 extends Component 的区别主要在于：

- 语法区别，扩展类组件在 constructor 构造器来构造默认的属性和状态。
- propType 和 getDefaultProps
- 状态数据对象的处理
- this 绑定
- Mixins 混入

函数方式 React.createClass 创建组件通过 propTypes 属性对象和 getDefaultProps() 方法来设置和获取组件传入参数：

```js
import React from 'react';

const Contacts = React.createClass({  
  propTypes: {
    name: React.PropTypes.string
  },
  getDefaultProps() {
    return {

    };
  },
  render() {
    return (
      <div></div>
    );
  }
});

export default Contacts;  
```

扩展 React.Component 通过设置两个属性 propTypes 和 defaultProps

```ts
import React form 'react';
class TodoItem extends React.Component{
    static propTypes = { // as static property
        name: React.PropTypes.string
    };
    static defaultProps = { // as static property
        name: ''
    };
    constructor(props){
        super(props)
    }
    render(){
        return <div></div>
    }
}
```

React.createClass 通过 getInitialState() 方法返回一个包含初始值的对象

	import React from 'react';
	let TodoItem = React.createClass({
	    // return an object
	    getInitialState(){ 
	        return {
	            isEditing: false
	        }
	    }
	    render(){
	        return <div></div>
	    }
	})

React.Component：通过 constructor 设置初始状态

	import React from 'react';
	class TodoItem extends React.Component{
	    constructor(props){
	        super(props);
	        this.state = { // define this.state in constructor
	            isEditing: false
	        } 
	    }
	    render(){
	        return <div></div>
	    }
	}

为事件绑定处理函数时，根据绑定方式不同，处理函数的 this 是有区别的。

通常的绑定方法有三种：

- Bind methods in the constructor.
- Use arrow functions, e.g. onClick={(e) => this.handleClick(e)}.
- Keep using createReactClass.

在 constructor 中来改变 this.handleClick 执行的上下文，这应该是相对上面一种来说更好的办法，万一我们需要改变语法结构，这种方式完全不需要去改动 JSX 的部分：

	import React from 'react';

	class Contacts extends React.Component {  
	  constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	  }
	  handleClick() {
	    console.log(this); // React Component instance
	  }
	  render() {
	    return (
	      <div onClick={this.handleClick}></div>
	    );
	  }
	}

	export default Contacts;  

React.createClass 会正确绑定 this 引用到组件。 

	import React from 'react';

	const Contacts = React.createClass({  
	  handleClick() {
	    console.log(this); // React Component instance
	  },
	  render() {
	    return (
	      <div onClick={this.handleClick}></div>//会切换到正确的this上下文
	    );
	  }
	});

	export default Contacts;  

如果扩展 React.Component，由于使用了 ES6，这里会有些微不同，属性并不会自动绑定到 React 类的实例上。

	import React from 'react';
	class TodoItem extends React.Component{
	    constructor(props){
	        super(props);
	    }
	    handleClick(){
	        console.log(this); // null
	    }
	    handleFocus(){  // manually bind this
	        console.log(this); // React Component Instance
	    }
	    // WARNING: this syntax is experimental!
	    // Using an arrow here binds the method:
	    handleBlur: () => {  // use arrow function
	        console.log(this); // React Component Instance
	    }
	    render(){
	        return <input onClick={this.handleClick} 
	                      onFocus={this.handleFocus.bind(this)}  
	                      onBlur={this.handleBlur}/>
	    }
	}

Mixins

使用 React.createClass 的话，我们可以在创建组件时添加一个叫做 mixins 的属性，并将可供混合的类的集合以数组的形式赋给 mixins 参数。如果我们使用 ES6 的方式来创建组件，那么 React mixins 的特性将不能被使用了。

	import React from 'react';
	let MyMixin = {
	    doSomething(){}
	}
	let TodoItem = React.createClass({
	    mixins: [MyMixin], // add mixin
	    render(){
	        return <div></div>
	    }
	})



## State & Lifecycle 组件状态与生命周期
- [State & 生命周期](https://react.docschina.org/docs/state-and-lifecycle.html)
- [React源码分析3 — React生命周期详解](https://zhuanlan.zhihu.com/p/25882388)
- [React Lifecycle Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- React Component https://react.docschina.org/docs/react-component.html
- Update on Async Rendering https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
- React.Component 文档较少使用的几个生命周期方法 http://www.ptbird.cn/react-component-rarely-lifecycle-methods.html
- You Probably Don't Need Derived State https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
- React PureComponent 及浅比较详解 https://juejin.cn/post/6844903784104067086
- Fetch API https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API

前面解析了 PureComponent 和 Component 类组件的主要差异在 shouldComponentUpdate 方法的实现逻辑上不一样，Component 的实现只是简单返回 true。而 PureComponent 的实现对 props、state 进行浅比较 shallow comparison，如果组件的 props 和 state 都没发生改变就不执行渲染，包括 componentWillUpdate 和 componentDidUpdate 函数都不执行。这样过滤了不必要行为来提高性能，但该组件也具有一定的缺陷，因为它只能进行一层浅比较。简单来说，它只比较 props 和 state 的内存地址，如果内存地址相同，就返回 false 不执行重绘。

理解组件生命周期函数，才能正确管理组件内部的状态数据。实际生产开发更多是使用其内部定义的基本生命周期函数，包括构造函数，componentDidMount 和 componentWillUnmount 生命周期函数。


### ☛ State 状态数据管理


在旧版本 React 中，无状态组件不支持 ref，因为在 React 调用到无状态组件的方法之前，是没有一个实例化的过程的，因此也就没有所谓的 ref。无状态组件就剩了一个 render 方法，因此也就没有没法实现组件的生命周期方法。

但是 React 16 发布引入了 Hooks API，其中有 useState 和 useReducer 等，这使得函数组件也能封装成有状态组件，所以有状态组件或无状态组件的概念越来越弱化了。而 React 新引入的 Hooks API 使用函数式编程越来越便利。，如 React.memo() 可以实现类似 PureComponent 的函数式组件，函数式组件 FunctionComponent 对象的实现就是基于 props 属性的，但是和类组件的功能越来越相似。


关于 setState() 你应该了解不要直接修改 State，而是应该使用 setState()。

	// Wrong
	this.state.comment = 'Hello';

	// Correct
	this.setState({comment: 'Hello'});

状态数据是 Immutable Data，一旦创建就不能再被更改的数据，对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure 持久化数据结构，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing 结构共享，即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

React 管理组件属性数据也会使用 Immutable Data，如下面的示例，如果直接将 css 样式变量绑定到组件属性将使 css 封装成只读数据： 

	let css = {
	    display: 'block',
	    background: 'yellow',
	}

	const UseLayoutEffect: React.FC<any> = ({children}) => {
	    const box = useRef<HTMLDivElement>(null);
	    useLayoutEffect(() => {
	        let div = box.current!;
	        console.log('useLayoutEffect');
	        animate(box.current!.style, 'marginLeft', div.offsetLeft, 100, 'px');
	    }, []);
	    // css will be immutatble if bind to div.style directly.
	    css.background = 'yellow';
	    return (
	    <div id="useLayout" style={{...css, background: 'yellow'}} ref={box}>{children} </div>
	    );
	};


构造函数是唯一可以给 this.state 赋值的地方。出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。 State 的更新可能是异步的，this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

例如，此代码可能会无法更新计数器：

	// Wrong
	this.setState({
	  counter: this.state.counter + this.props.increment,
	});

要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

	// Correct
	this.setState((state, props) => ({
	  counter: state.counter + props.increment
	}));

上面使用了箭头函数，不过使用普通的函数也同样可以：

	// Correct
	this.setState(function(state, props) {
	  return {
	    counter: state.counter + props.increment
	  };
	});

State 的更新会被合并，当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。

例如，你的 state 包含几个独立的变量：

	  constructor(props) {
	    super(props);
	    this.state = {
	      posts: [],
	      comments: []
	    };
	  }

通常，componentDidMount 生命周期函数是用来获取数据的最合适场所，然后你可以分别调用 setState() 来单独地更新它们：

	  componentDidMount() {
	    fetchPosts().then(response => {
	      this.setState({
	        posts: response.posts
	      });
	    });

	    fetchComments().then(response => {
	      this.setState({
	        comments: response.comments
	      });
	    });
	  }


### ☛ LifeCycle 函数

整个 React 生命周期分 3 个阶段：创建、更新、卸载，每个阶段有对应的工作和方法。


	------------------------ Mounting ----------------  Updating ------------------- Unmounting --
	                            |                                                         |
	“Render phase”          constructor()   New props   setState()  forceUpdate()         |
	Pure and has no             |               |           |             |               |
	side effects.           ===============getDerivedStateFromProps==============         |
	May be paused,              |                     |                                   |
	aborted orrestarted         |             shouldComponentUpdate                       |
	by React.                   |                     |                                   |
	                        =======================render========================         |
	----------------------------|------------------------------|--------------------------|-------
	                            |                              |                          |
	“Pre-commit phase”          |                     getSnapshotBeforeUpdate             |
	Can read the DOM.           |                              |                          |
	                        ===============React updates ­D­O­M and refs============         |
	----------------------------|------------------------------|--------------------------|--------
	                            |                              |                          |
	“Commit phase”          componentDidMount        componentDidUpdate        componentWillUnmount
	
	Can work with DOM, run side effects, schedule updates.
	-----------------------------------------------------------------------------------------------


	生命周期函数								调用次数					能否使用setSate()
	constructor(props)						1(实例化时调用)			  ✗
	getDefaultProps()						1(creatClass()初始化)	  ✗
	getInitialState()						1(creatClass()初始化)	  ✗
	componentWillMount()					1(组件加载前)			✓
	getDerivedStateFromProps				>=1						  ✗
	render()								>=1(组件渲染时)			  ✗
	componentDidMount()						1(组件加载时)			✓
	componentWillReceiveProps(nextProps)	>=0(props数据更新)		✓
	shouldComponentUpdate(nextProps)		>=0						  ✗
	componentWillUpdate(nextProps)			>=0						  ✗
	getSnapshotBeforeUpdate					>=0						  ✗
	componentDidUpdate(nextProps)			>=0						  ✗
	componentWillUnmount()					1						  ✗

React 定义的生命周期接口主要由 ComponentLifecycle 和 NewLifecycle、 DeprecatedLifecycle 两个基础接口组件，后两者分别表示新 API 和旧 API 集合，ComponentLifecycle 定义最基本的生命周期 API，这些代码组织方式都在明确告知开发者该如何去用好它们：

    interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    }

    interface NewLifecycle<P, S, SS> {
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
    }

    interface StaticLifecycle<P, S> {
        getDerivedStateFromProps?: GetDerivedStateFromProps<P, S>;
        getDerivedStateFromError?: GetDerivedStateFromError<P, S>;
    }

    type GetDerivedStateFromProps<P, S> =
        (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;
    type GetDerivedStateFromError<P, S> =
        (error: any) => Partial<S> | null;

    interface DeprecatedLifecycle<P, S> {
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    }


这些内容在 ReactDom 的 TypeScript 类型声明文件中有明确的说明，使用带有 UNSAFE 前缀的函数表示开发者明白做什么，React 不会在控制台中给提示信息。如果在 VSCode 或 Sublime 等编辑器中安装好 TypeScript 支持插件，在编写这样方法时会将注解的内容提示出来：

	@types\react-dom\node_modules\@types\react\index.d.ts

像 componentWillMount 或者 componentWillReceiveProps 这些过时 API 建议使用 getSnapshotBeforeUpdate 或静态该当 getDerivedStateFromProps 替代。


☛ Lifecycle 第一阶段

这是虚拟 DOM 创建的阶段，会依次执行数个方法，这些方法除了 render 方法，其余基本上在整个生命周期中只调用 1 次，而且一定会调用 1 次：

- **constructor()** 执行组件构造函数，初始化实例对象；
- **getDefaultProps()** 从此方法获取组件默认属性设置，函数没有参数，对 createClass() 创建的组件有效，否则使用 defaultProps 静态成员设置默认属性参数；
- **getInitialState()** 从此方法获取组件的初始状态数据，函数没有参数，对 createClass() 创建的组件有效，否则使用 state 成员设置状态数据；
- **componentWillMount()** 过时 API，可用来修改 state。React 先调用父组件的这个函数，再调用子组件的这个函数；
- **render()** 开始组件渲染函数，返回一个只有一个根节点的虚拟 DOM。该函数中不能同步的修改组件的状态(state)。
- **componentDidMount()** 在 render 渲染之后，通知组件已经加载完成。React 先调用子组件的这个函数，再调用父组件的这个函数。

执行创建阶段的任务后，组件就可以和其他框架交互了，比如设置计时器或者发起网络请求等等耗时的操作都可以在 componentDidMount() 中进行。

DeprecatedLifecycle 接口定义的生命周期函数已经弃用，建议转换到新的 NewLifecycle API。

新 API 的静态函数 getDerivedStateFromProps 会在组件实例化后，渲染之前或者更新渲染之前执行，要求它返回一个对象或来更新 state，或者返回 null 表示新的 props 没有可以可新的状态数据。无论是旧的 componentWillReceiveProps 还是新的 getDerivedStateFromProps，它们都是复杂的函数实现，实际应用中尽量避免使用。

唯一 getDerivedStateFromProps 存在的理解是，组件可以根据组件接收到的属性数据来更新其内部的状态数据，即派生方案 Derived State。不推荐使用派生 state 方案，这会导致代码冗长，并且会使得组件变的难以理解。

注意，前面提到的静态生命周期接口提供了两个函数，一旦在组件中定义了 StaticLifecycle 接口中的任意一个函数，就表示不使用过时的生命周期函数，即 DeprecatedLifecycle 接口的所以函数都不会被调用。一旦使用了 NewLifecycle 接口的函数，就不能使用 UNSAFE 前缀的过时函数。

另外 getSnapshotBeforeUpdate 和 componentDidUpdate 应该一起搭配使用，前者在最近一次的 render 完将要 commit 给 DOM 的时候会调用，这个方法能够使得组件可以在可能更改之前从 DOM 捕获一些信息，比如滚动的位置等等。这个方法返回的任何值，都会传递给 componentDidUpdate，这几个函数的应用可以完全替换掉旧的 componentWillReceiveProps 函数。

	class ScrollingList extends React.Component {
	  constructor(props) {
	    super(props);
	    this.listRef = React.createRef();
	  }

	  getSnapshotBeforeUpdate(prevProps, prevState) {
	    // 捕获滚动的位置，以便后面进行滚动 注意返回的值
	    if (prevProps.list.length < this.props.list.length) {
	      const list = this.listRef.current;
	      return list.scrollHeight - list.scrollTop;
	    }
	    return null;
	  }

	  componentDidUpdate(prevProps, prevState, snapshot) {
	    // 如果有 snapshot 会进行滚动的调整，这样子就不会立即将之前的内容直接弹上去
	    if (snapshot !== null) {
	      const list = this.listRef.current;
	      list.scrollTop = list.scrollHeight - snapshot;
	    }
	  }

	  render() {
	    return (
	      <div ref={this.listRef}>{/* ...contents... */}</div>
	    );
	  }
	}


☛ Lifecycle 第二阶段

此时该组件已经进入了稳定运行阶段，必要时执行组件状态更新流程，这个阶段组件可以处理用户交互，或者接收事件更新界面。

以下方法在整个生命周期中可以执行很多次，也可以一次也不执行：

- **componentWillReceiveProps()** 过时 API，当父容器中对应的参数改变将会调用子组件的该函数。新的 props 将会作为参数传递进来，旧属性可以根据 this.props 来获取。可以在该函数中对 state 作一些处理，并且在该函数中更新 state 不会发生二次渲染；
- **shouldComponentUpdate()** 该函数传递过来两个参数，新的 state 和新的 props，PureComponent 已经实现浅比较，根据比对结果选择更新或者不更新，从而提高效率。
- **componentWillUpdate()** 与 **componentWillMount()** 两个类似的过时 API，都在 render 之前触发，update 方法会接收到新的 props 或者 state，执行时歌词把数据更新到 this.props 和 this.state。
- **componentDidUpdate()** 与 componentDidMount 方法类似，在 render 渲染之后被调用，真实 DOM 生成之后调用该函数。传递过来的参数是之前的 props 和 state。

shouldComponentUpdate 方法只是能够用来优化性能，不能过度依赖它来阻止组件的渲染，因为重写 shouldComponentUpdate 可能会导致 bug，不建议进行深层比较，或者是使用 JSON.stringify，因为效率很低，而且很容易引起性能问题，应该优先使用 PureComponent。需要注意的是，即使 shouldComponent 返回了 false，子组件的状态更新引起的重新渲染是不会受到影响的。


☛ Lifecycle 第三阶段

这就是消亡的阶段，主要进行内存的清理和释放的工作。这个阶段只有一个方法，该方法在整个生命周期内调用且仅调用一次。

	componentWillUnmount()

当组件要被从界面上移除的时候，ReactDOM.unmountComponentAtNode()，就会调用 componentWillUnmount。在这里进行一些相关的销毁操作，比如撤销定时器，事件监听等等。

另外还有两个用于错误处理的函数 componentDidCatch 和 getDerivedStateFromError，React 引入了 Error Boundaries 错误边界的概念，两个方法配合一起使用，以将错误拦截在边界组件上，而不是破坏整个应用。


以下是各个生命周期函数示范：

	import React from 'react';

	interface Props {
	    record?:string[]
	    title?:string
	}
	interface State {
	    record: string[]
	}
	let getTime = ()=>{
	    return new Date().toISOString().substr(11,12)
	}

	export default class LifeCode extends React.Component<Props> {

	    props:Props
	    state:State

	    static record:string[] = []

	    constructor(props: Props){
	        super(props);
	        this.props = props;
	        LifeCode.record.push(getTime()+' Tip: LifeCode constructor');
	        this.state = {record: LifeCode.record};
	    }

	    static getDerivedStateFromProps(props: Props){
	        LifeCode.record.push(getTime()+' Tip: getDerivedStateFromProps');
	        props = {...props, title: 'getDerivedStateFromProps'};
	        return props;
	    }
	    shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: any): boolean {
	        LifeCode.record.push(getTime()+' Tip: shouldComponentUpdate');
	        // check props & state ...
	        return true;
	    }
	    // UNSAFE_componentWillMount(){
	    //   LifeCode.record.push(getTime()+' Tip: componentWillMount');
	    // }
	    // UNSAFE_componentWillUpdate(pp:Props, ps:State){
	    //   LifeCode.record.push(getTime()+' Tip: componentWillUpdate');
	    // }
	    getSnapshotBeforeUpdate(pp:Props, ps:State){
	        LifeCode.record.push(getTime()+' Tip: getSnapshotBeforeUpdate');
	        return {...pp, ...ps}
	    }
	    componentDidMount(){
	        LifeCode.record.push(getTime()+' Tip: componentDidMount');
	    }
	    componentDidUpdate(){
	        LifeCode.record.push(getTime()+' Tip: componentDidUpdate');
	        fetch("https://api.leancloud.cn/1.1/classes/Counter")
	            .then(response => response.json())
	            .then(data => {
	                console.log(data);
	            })
	    }
	    componentWillUnmount(){
	        let msg = getTime()+' Tip: componentWillUnmount';
	        console.log(msg);
	        LifeCode.record.push(msg);
	    }

	    doSetState(ev:React.MouseEvent<HTMLElement, MouseEvent>){
	        LifeCode.record.push(getTime()+' Tip: setState');
	        this.setState({...this.state, title:'setState'});
	    }
	    doForceUpdate(ev:React.MouseEvent<HTMLElement, MouseEvent>){
	        LifeCode.record.push(getTime()+' Tip: forceUpdate');
	        this.forceUpdate();
	    }

	    render(){
	        // readonly props
	        // this.props = this.state;
	        return(
	            <ul>
	            <li>
	                <button onClick={ev => this.doSetState(ev)}>setState</button>
	                <button onClick={ev => this.doForceUpdate(ev)}>forceUpdate</button>
	            </li>
	            {LifeCode.record.map( (it, th) => <li key={th}>{th} - {it}</li>)}
	            </ul>
	        );
	    }
	}


### ☛ shouldComponentUpdate & Object.is

再来看看源代码，shouldComponentUpdate 的内部主要实现在 react-reconciler 模块，主要是 shallowEqual 函数进行比较操作：


	// react-17.0.0\packages\react-reconciler\src\ReactFiberClassComponent.new.js
	function checkShouldComponentUpdate(
	  workInProgress,
	  ctor,
	  oldProps,
	  newProps,
	  oldState,
	  newState,
	  nextContext,
	) {
	  const instance = workInProgress.stateNode;

	  // 执行用户的实现
	  if (typeof instance.shouldComponentUpdate === 'function') {

	    // if (__DEV__) ....
	    const shouldUpdate = instance.shouldComponentUpdate(
	      newProps,
	      newState,
	      nextContext,
	    );

	    // if (__DEV__) ....
	    return shouldUpdate;
	  }

	  // 执行内部的实现
	  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
	    return (
	      !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
	    );
	  }

	  return true;
	}

	// react-17.0.0\packages\shared\shallowEqual.js
	/**
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @flow
	 */

	import is from './objectIs';

	const hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA: mixed, objB: mixed): boolean {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (
	    typeof objA !== 'object' ||
	    objA === null ||
	    typeof objB !== 'object' ||
	    objB === null
	  ) {
	    return false;
	  }

	  const keysA = Object.keys(objA);
	  const keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (let i = 0; i < keysA.length; i++) {
	    if (
	      !hasOwnProperty.call(objB, keysA[i]) ||
	      !is(objA[keysA[i]], objB[keysA[i]])
	    ) {
	      return false;
	    }
	  }

	  return true;
	}

	export default shallowEqual;

其中 Object.is 是同一值比较，这对于 JavaScript 这样的动态语言是个问题，比如 1/0 == 1/-0 或者 NaN == NaN 都返回 false。而 "" == false 或者 "" == [] 比较返回非期望的 true，因为有类型转换。

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x: any, y: any) {
	  return (
	    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
	  );
	}

	const objectIs: (x: any, y: any) => boolean =
	  typeof Object.is === 'function' ? Object.is : is;

	export default objectIs;

Object.is 算法要求符合以下条件：

- both undefined
- both null
- both true or both false
- both strings of the same length with the same characters in the same order
- both the same object (meaning both values reference the same object in memory)
- both numbers and
	- both +0
	- both -0
	- both NaN
	- or both non-zero and both not NaN and both have the same value

MDN 给出一个更容易理解的写法：

	if (!Object.is) {
	  Object.defineProperty(Object, "is", {
	    value: function (x, y) {
	      // SameValue algorithm
	      if (x === y) { // Steps 1-5, 7-10
	        // Steps 6.b-6.e: +0 != -0
	        return x !== 0 || 1 / x === 1 / y;
	      } else {
	        // Step 6.a: NaN == NaN
	        return x !== x && y !== y;
	      }
	    }
	  });
	}



## Handling Events 事件处理
- SyntheticEvent https://reactjs.org/docs/events.html
- W3C DOM Level 3 Events https://www.w3.org/TR/DOM-Level-3-Events/

React 的事件名使用驼峰方式 camelCase，如 onClick 表示单击事件，在 JSX 语法中设置事件处理函数时，传入的是代码而不是字符串，这与直接编写 HTML 是有差别的:

	// HTML
	<button onclick="activateLasers()">
	  Activate Lasers
	</button>

	// React JSX
	<button onClick={activateLasers}>
	  Activate Lasers
	</button>

另一个差别是阻止事件的默认行为时，需要显式执行 preventDefault，这与 HTML 可以直接返回 false 的处理方法不同：

	// HTML
	<a href="#" onclick="console.log('The link was clicked.'); return false">
	  Click me
	</a>

	// React JSX
	function ActionLink() {
	  function handleClick(e) {
	    e.preventDefault();
	    console.log('The link was clicked.');
	  }

	  return (
	    <a href="#" onClick={handleClick}> Click me </a>
	  );
	}

React 使用的是合成事件对象 SyntheticEvent，即内部对原始的 HTML 事件对象进行了统一封装，所有事件定义都遵循 W3C DOM Level 3 事件模型。一些必要的原生方法，如 stopPropagation() 和 preventDefault() 都是有效的。

事件触发流程也三个标准流程：

- The capture phase: 事件可捕抓期，事件对象从顶级节点往末端触发事件节点的上级查询 captue 方式注册的事件处理函数；
- The target phase: 如果事件没有被捕抓就进入触发事件的目标注册的事件处理函数；
- The bubble phase: 如果没有处理函数或者处理函数没有指明禁止冒泡，事件就往父级进行冒泡流程，这个过程允许其它父级的节点有机会处理事件；

以下是合成事件对象的部分属性：

- boolean bubbles
- boolean cancelable
- DOMEventTarget currentTarget
- boolean defaultPrevented
- number eventPhase
- boolean isTrusted
- DOMEvent nativeEvent
- void preventDefault()
- boolean isDefaultPrevented()
- void stopPropagation()
- boolean isPropagationStopped()
- void persist()
- DOMEventTarget target
- number timeStamp
- string type

焦点事件处理的例子：

	function Example() {
	  return (
	    <div
	      tabIndex={1}
	      onFocus={(e) => {
	        if (e.currentTarget === e.target) {
	          console.log('focused self');
	        } else {
	          console.log('focused child', e.target);
	        }
	        if (!e.currentTarget.contains(e.relatedTarget)) {
	          // Not triggered when swapping focus between children
	          console.log('focus entered self');
	        }
	      }}
	      onBlur={(e) => {
	        if (e.currentTarget === e.target) {
	          console.log('unfocused self');
	        } else {
	          console.log('unfocused child', e.target);
	        }
	        if (!e.currentTarget.contains(e.relatedTarget)) {
	          // Not triggered when swapping focus between children
	          console.log('focus left self');
	        }
	      }}
	    >
	      <input id="1" />
	      <input id="2" />
	    </div>
	  );
	}

事件分类及参考：

Clipboard Events

	Event names: onCopy onCut onPaste

	Properties:

	DOMDataTransfer clipboardData

Composition Events

	Event names: onCompositionEnd onCompositionStart onCompositionUpdate

	Properties:

	string data

Keyboard Events

	Event names: onKeyDown onKeyPress onKeyUp

	Properties:

	boolean altKey
	number charCode
	boolean ctrlKey
	boolean getModifierState(key)
	string key
	number keyCode
	string locale
	number location
	boolean metaKey
	boolean repeat
	boolean shiftKey
	number which


Focus Events

	Event names: onFocus onBlur

	Properties:

	DOMEventTarget relatedTarget

Form Events

	Event names: onChange onInput onInvalid onReset onSubmit


Generic Events

	Event names: onError onLoad


Mouse Events

	Event names: onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit

	onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
	onMouseMove onMouseOut onMouseOver onMouseUp

	Properties:

	boolean altKey
	number button
	number buttons
	number clientX
	number clientY
	boolean ctrlKey
	boolean getModifierState(key)
	boolean metaKey
	number pageX
	number pageY
	DOMEventTarget relatedTarget
	number screenX
	number screenY
	boolean shiftKey

CSS3 Pointer Events

	Event names: onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture

	onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut

	Properties:

	number pointerId
	number width
	number height
	number pressure
	number tangentialPressure
	number tiltX
	number tiltY
	number twist
	string pointerType
	boolean isPrimary


Selection Events

	Event names: onSelect


Touch Events

	Event names: onTouchCancel onTouchEnd onTouchMove onTouchStart

	Properties:

	boolean altKey
	DOMTouchList changedTouches
	boolean ctrlKey
	boolean getModifierState(key)
	boolean metaKey
	boolean shiftKey
	DOMTouchList targetTouches
	DOMTouchList touches

UI Events

	Event names: onScroll

	Properties:

	number detail
	DOMAbstractView view

Wheel Events

	Event names: onWheel

	Properties:

	number deltaMode
	number deltaX
	number deltaY
	number deltaZ

Media Events

	Event names: onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted

	onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
	onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
	onTimeUpdate onVolumeChange onWaiting

Image Events

	Event names: onLoad onError


Animation Events

	Event names: onAnimationStart onAnimationEnd onAnimationIteration

	Properties:

	string animationName
	string pseudoElement
	float elapsedTime

Transition Events

	Event names: onTransitionEnd

	Properties:

	string propertyName
	string pseudoElement
	float elapsedTime

Other Events

	Event names: onToggle



## Conditional Rendering 按条件渲染

可以通过条件语句来决定是否渲染指定的 UI 组件，这很容易通过 if 或者 switch 流程控制语句来实现。

	function UserGreeting(props) {
	  return <h1>Welcome back!</h1>;
	}

	function GuestGreeting(props) {
	  return <h1>Please sign up.</h1>;
	}

	function Greeting(props) {
	  const isLoggedIn = props.isLoggedIn;
	  if (isLoggedIn) {
	    return <UserGreeting />;
	  }
	  return <GuestGreeting />;
	}

	ReactDOM.render(
	  // Try changing to isLoggedIn={true}:
	  <Greeting isLoggedIn={false} />,
	  document.getElementById('root')
	);

在线运行 https://codepen.io/gaearon/pen/ZpVxNq?editors=0010

使用过滤，将不需要的组件剔除，或者挑选需要渲染的组件都是常见的做法：

	import React, { useState, useEffect } from "react"

	let colors = ['salmon', 'tomato', 'yellow', 'pink', 'cornsilk', 'orchid'];

	let styles = {
	    background: '#333',
	    boxShadow: '2px 2px 3px #222',
	    color: 'white',
	    padding: 32,
	    margin: 32
	}

	function App() {
	    const [candy, setColors] = useState(colors)

	    function reset() {
	        setColors(() => colors)
	    }

	    function distribute(color:string) {
	        setColors((candy) => candy.filter(
	            (v,i) => v !== color
	        ))
	    }

	    return (
	        <div style={styles}>
	            <h1> Candy dispenser </h1>
	            {!candy.length && <button className="button-minimal" onClick={()=>reset()}>Reset</button>}
	            <ul>
	            {candy.map((v,i) => (
	                <li><button onClick={()=>distribute(v)} style={{background: v, padding: 4, margin: 4}}> Grab Candy </button></li>
	            ))}
	            </ul>
	        </div>
	    )
	}

	export default App

在线运行 https://codepen.io/jeango/pen/BaLXKOY?editors=0010

示例：

	class LoginControl extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleLoginClick = this.handleLoginClick.bind(this);
	    this.handleLogoutClick = this.handleLogoutClick.bind(this);
	    this.state = {isLoggedIn: false};
	  }

	  handleLoginClick() {
	    this.setState({isLoggedIn: true});
	  }

	  handleLogoutClick() {
	    this.setState({isLoggedIn: false});
	  }

	  render() {
	    const isLoggedIn = this.state.isLoggedIn;
	    let button;
	    if (isLoggedIn) {
	      button = <LogoutButton onClick={this.handleLogoutClick} />;
	    } else {
	      button = <LoginButton onClick={this.handleLoginClick} />;
	    }

	    return (
	      <div>
	        <Greeting isLoggedIn={isLoggedIn} />
	        {button}
	      </div>
	    );
	  }
	}

	ReactDOM.render(
	  <LoginControl />,
	  document.getElementById('root')
	);

在线运行 https://codepen.io/gaearon/pen/QKzAgB?editors=0010


## Lists, Keys & Reconciliation 列表、键值与协调器
- Recursing On Children https://reactjs.org/docs/reconciliation.html#recursing-on-children

使用 JavaScript map() 函数可以很方便将数组内容映射到新的内容，通常用它来生成组件或元素列表：

	const numbers = [1, 2, 3, 4, 5];
	const listItems = numbers.map((number) =>
	  <li>{number}</li>
	);

	ReactDOM.render(
	  <ul>{listItems}</ul>,
	  document.getElementById('root')
	);

写成组件的形式：

	function NumberList(props) {
	  const numbers = props.numbers;
	  const listItems = numbers.map((number) =>
	    <li>{number}</li>
	  );
	  return (
	    <ul>{listItems}</ul>
	  );
	}

	const numbers = [1, 2, 3, 4, 5];
	ReactDOM.render(
	  <NumberList numbers={numbers} />,
	  document.getElementById('root')
	);

这个 key 通常可以用数据对象的 id，当然不重复的序列号也可以：

	const todoItems = todos.map((todo) =>
	  <li key={todo.id}> {todo.text} </li>
	);

注意，key 要设置在列表产生的位置的条目上，而不单单是列表条目上，参考以下的 key 设置。尽管 Blog 的列表元素 sidebar 和 content 可以同时出现在同一个 ul 列表中，但是在 React 内部它们是通过 map 映射得到的两个不同的列表：

	function Blog(props:{posts: typeof posts}) {
	  const sidebar = (
	    <ul>
	      {props.posts.map((post) =>
	        <li key={post.id}> {post.title} </li>
	        )}
	    </ul>
	  );
	  const content = props.posts.map((post) =>
	    <div key={post.id}>
	        <h3>{post.title}</h3>
	        <p>{post.content}</p>
	    </div>
	  );
	  return (
	    <>
	      {sidebar}
	      {content}
	    </>
	  );
	}

	const posts = [
	  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
	  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
	];

	export default function Posts(props:{posts?:(typeof posts[0])[]}) {
	  if(props.posts){
	    return ( <Blog posts={props.posts} /> );
	  }else{
	    return ( <Blog posts={posts} /> );
	  }
	}

注意 JSX 的纯粹的尖括号对作用和 Vue 的 template 或微信小程序的 block 元素一样，指不需要在 DOM 渲染的节点。

JSX 支持在元素中嵌入脚本表达式：

	function NumberList(props) {
	  const numbers = props.numbers;
	  return (
	    <ul>
	      {numbers.map((number) =>
	        <ListItem key={number.toString()} value={number} />
	      )}
	    </ul>
	  );
	}

生成的这些组件列表在 React 内部的虚拟 DOM 中管理时，为了提高效率，React 会与浏览器的 DOM 节点进行比对，并尽量利用好现有的 DOM 对象，避免重复的销毁和重建，需要指定一个稳定且在同一列表中不重复的 key 值来标记一个节点和组件件的对应关系。

key 值只需要在当前的列表中唯一，不需要在整个应用中唯一，React 内部的 Fiber Reconciler 调和器知道如何高效地处理虚拟 DOM 节点树。协调算法是 React 的一个实现细节，React 可以在每个操作上重新启动整个应用程序，最终结果是相同的。要清楚的是，在这个上下文中重新渲染意味着为所有组件调用 render，并不意味着 React 要将它卸载并重新装载它们，这就是虚拟 DOM 的好处。

在当前的实现中协调算法中，Diffing Algorithm 差异比较算法可以分辨同一个 key 值的不同位置来表示子树在其同级之间位置移动，但无法判断它已移动到其他位置。

该算法不会尝试匹配不同组件类型的子树，如果您看到自己在两种输出非常相似的组件类型之间交替使用，则可能需要将其设置为相同的类型。

设置的 key 值应该是稳定的、可预测的和唯一的。不稳定 key 值，如 Math.random() 将导致不必要地重新创建许多组件实例和 DOM 节点，这会导致性能下降和子组件中的状态丢失。

差异比较算法最基本的比较，就是对组件树根元素的比较。每个组件的 render 返回的组件树都是只有一个根元素的，以数组方式返回的情况也算，就是将数组对象当作根元素。



## Fiber Reconciliation 调和器
- React Fiber Reconciliation https://reactjs.org/docs/reconciliation.html
- React Fiber Architecture https://github.com/acdlite/react-fiber-architecture
- React 源码全方位剖析 http://www.sosout.com/2018/08/12/react-source-analysis.html

简单理解，fiber 就是指组件上将要完成或者已经完成的任务，每个组件可以安排⼀个或者多个 fiber。

React 提供了声明式 API，这样不必考虑每次更新会发生什么，使得编写应用程序变得更加容易，在 React 中如何实现这一点的就是 Fiber Reconciliation 调和器。

前面追踪代码到 ReactDom.render() --> legacyRenderSubtreeIntoContainer() --> getPublicRootInstance()，再深入追踪 Render 的代码就涉及 React Fiber 部分了，可以说这是 React 算法实现的核心部分，其中包含了大量的计算机系统知识，包括主要差别比较算法 diffing。React Firber 并不是所谓的纤程、微线程、协程，而是一种基于浏览器的单线程调度算法。

	import {
	  findHostInstanceWithNoPortals,
	  updateContainer,
	  unbatchedUpdates,
	  getPublicRootInstance,
	  findHostInstance,
	  findHostInstanceWithWarning,
	} from 'react-reconciler/src/ReactFiberReconciler';

由于浏览器渲染引擎是单线程的，在 React15.x 及之前版本，从 setState 开始到渲染完成整个过程是不受控制且连续不中断完成的，由于该过程将会占用整个线程，则其他任务都会被阻塞，如样式计算、界面布局以及许多情况下的绘制等。

如果需要渲染的是一个很大、层级很深的组件，这可能就会使用户感觉明显卡顿，比如更新一个组件需要 1 毫秒，如果有 200 个组件就需要 200 毫秒。在这个更新过程中，浏览器唯一的主线程在专心运行更新操作，无暇去做其他任何事情。用户的 UI 交互，如往一个 input 元素中输入点什么，敲击键盘也不会立即获得响应。

虽然渲染输入按键结果是浏览器主线程的工作，但是浏览器主线程被 React 占用，抽不出空，最后的结果就是用户敲了按键看不到反应，等 React 更新过程结束之后，咔咔咔那些按键一下子出现在 input 元素里了。

旧版本的调和器可以称为栈调和器 Stack Reconciler，主要缺陷就是不能暂停渲染任务，也不能切分任务，更无法有效平衡组件更新渲染与动画相关任务间的执行顺序，即不能划分任务优先级，这样就很有可能导致重要任务卡顿，动画掉帧等问题。

为了解决这个问题，React 团队经过两年多的努力，提出了一个更先进的 Fiber Reconciler 调和器，它允许渲染过程分段完成，而不必一次性完成，在渲染期间可返回到主线程控制执行其他任务。

通过计算部分组件树的变更，并暂停渲染更新，询问主线程是否有更高需求的绘制或者更新任务需要执行，这些高需求的任务完成后再重新渲染。这一切的实现是在代码层引入了一个新的数据结构对象 Fiber，每一个组件实例对应有一个 fiber 实例，此实例负责管理组件实例的更新，渲染任务及与其他 fiber 实例的通信。

纤维调和器 Fiber Reconciler 提供的新功能主要有：

- 一、调度任务 scheduleWork，把可中断的任务拆分成小任务；
- 二、可重用各分阶段任务，对正在做的工作调整优先次序；
- 三、可以在父子组件任务间前进后退切换任务，以支持React执行过程中的布局刷新；
- 四、支持 render 方法返回多个元素；
- 五、对异常边界处理提供了更好的支持；


使用 React 时，在单个时间点可以将 render() 函数视为创建 React 元素树。在下一个状态或道具更新时，render() 函数将返回不同的 React Element Tree。React 在更前 DOM 树前，需要弄清楚如何高效地更新 UI 以匹配最新的 Element Tree。

对于这个算法问题，有一些通用的解决方案，即生成将一棵树转换为另一棵树的最小操作数。然而，现有算法的复杂度为 O(n3)，其中 n 是树中的元素数量。

如果在 React 中使用它，显示 1000 个元素将需要 10 亿次比较，这个时间成本太贵了。相反，React 基于两个假设实现了一个启发式 O(n) 算法：

- 两种不同类型的元素会产生不同的树。
- 开发者可以给组件指定一个键 key 属性提示哪些子元素在不同的渲染中是稳定的。
- 实际上，这些假设对于几乎所有的实际用例都是有效的。


The Diffing Algorithm 差异算法

对两棵树进行比较时，React 首先比较两个根元素，根元素的类型不同行为是不同的。


👉 Root Elements Of Different Types

在根元素不同的情况下，差异比较算法会在组件的根元素改变时重构组件树，所有 HTML 标签元素都会被释放，再重建新的组件树。这会消耗相当的 CPU 时间去清理浏览器 DOM 树上的旧节点，同时，组件实例会收到 componentWillUnmount() 生命周期函数的调用。当新的 DOM 节点插入，组件实例被创建，会收到 UNSAFE_componentWillMount() 的调用，然后是 componentDidMount() 生命周期函数。

比如以下两个节点树就是根元素不同：

	<div>
	  <Counter />
	</div>

	<span>
	  <Counter />
	</span>


👉 DOM Elements Of The Same Type

在相同的 React DOM 元素比较中，会保持基本的节点元素，并且只更新有差异的属性部分，如以下这组差异只会更新样式类：

	<div className="before" title="stuff" />

	<div className="after" title="stuff" />


如果是样式更新也如此处理，只更新不同的 color 值：

	<div style={{color: 'red', fontWeight: 'bold'}} />

	<div style={{color: 'green', fontWeight: 'bold'}} />

处理完一个节点后再递归处理其它子节点。


👉 Component Elements Of The Same Type

对于相同的组件，会保持原有实例，组件状态也一样保持。React 会更新组件属性 props，并调用 UNSAFE_componentWillReceiveProps(), UNSAFE_componentWillUpdate() 和 componentDidUpdate() 这些组件生命周期函数，接着执行 render() ，差异比较算法会将组件的结果递归处理。

DeprecatedLifecycle 接口这些过时的组件生命周期函数应该尽量避免使用：

    interface DeprecatedLifecycle<P, S> {
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    }

通常，React 同时会递归处理列表和子节点，以下这组差异中，会匹配到前两个相同的节点，并将第三个新节点插入：

	<ul>
	  <li>first</li>
	  <li>second</li>
	</ul>

	<ul>
	  <li>first</li>
	  <li>second</li>
	  <li>third</li>
	</ul>

但是，如果新增加的节点出现在前面，性能会更差：

	<ul>
	  <li>Duke</li>
	  <li>Villanova</li>
	</ul>

	<ul>
	  <li>Connecticut</li>
	  <li>Duke</li>
	  <li>Villanova</li>
	</ul>

React 认识不到可以保留这两个原有的节点，而是变更所有节点，这就是为何要给列表设置 key，这可以解决这个问题。



## Forms Controlled vs Uncontrolled 表单处理
- Uncontrolled Components https://reactjs.org/docs/uncontrolled-components.html
- Controlled and uncontrolled form inputs in React https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
- HTML Form tag https://www.w3school.com.cn/tags/tag_form.asp
- File API - Using files from web applications https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
- Using Fetch API https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API
- XMLHttpRequest Living Standard https://xhr.spec.whatwg.org/
- [Upload 上传组件设计思路 - 高扩展](https://zhuanlan.zhihu.com/p/56684600)
- Fusion Upload Component https://fusion.design/pc/component/basic/upload?themeid=2
- 七牛云存储 - JavaScript SDK https://developer.qiniu.com/kodo/1283/javascript


React 中对 HTML 表单的处理有两种方式，一种是按 HTML 原样。比如以下这个表单，按下 submit 按钮就会跳转到表单接收页面：

	<form>
	  <label>
	    Name:
	    <input type="text" name="name" />
	  </label>
	  <input type="submit" value="Submit" />
	</form>

这就是不受控方式 Uncontrolled，这种原始的处理方式没有完整利用 React 的功能，不能对表单进行灵活的跟踪和处理，包括输入的内容字处理或验证等。

由于不受控制的组件在 DOM 中保留原样功能，因此在使用不受控制的组件时，更容易集成 React 或 non-React 代码，它也可以稍微少一些代码。否则，需要更多的功能控制，通常应使用受控组件。


以下非受控表单模拟了 HTML 表单的处理，使用 handleSubmit 目的是为了通过弹出对话框来模拟提交动作，使用 preventDefault() 来阻止默认的行为，事实上这种做法本身就算是受控的概念：

	class NameForm extends React.Component {

	  public input:React.RefObject<HTMLInputElement>

	  public method = "POST"
	  public action = "/some/page"

	  constructor(props:any) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.input = React.createRef<HTMLInputElement>();
	  }

	  handleSubmit(event:React.FormEvent) {
	    let name = this.input.current!.value || "NOTHING"; // what ?? don't working?
	    // let name = this.input.current?.value ?? "NOTHING";
	    alert(`A name was submitted: ${name} to ${this.action} by ${this.method}`);
	    event.preventDefault();
	  }

	  render() {
	    return (
	      <form method={this.method} action={this.action} onSubmit={this.handleSubmit}>
	        <label>
	          Name:
	          <input type="text" ref={this.input} />
	        </label>
	        <input type="submit" value="Submit" />
	      </form>
	    );
	  }
	}

在受控组件上设置固定值可以防止被改动，以下代码演示锁定 3s 时间内不可修改输入框的内容，直到输入值为 undefined 或 null：

	ReactDOM.render(<input value="hi" />, mountNode);

	setTimeout(function() {
	  ReactDOM.render(<input value={null} />, mountNode);
	}, 3000);

请记住，这里看到的 input 并不等于浏览器 DOM 树上的节点，它需要经过虚拟 DOM 的映射到真实的节点上的。


通常，不会直接给表单控件设置一个固定值，而是使用 defaultValue 属性传递一个默认值，这样在装入组件后更改 defaultValue 属性的值不会导致 DOM 中的值发生任何更新。类似，checkbox 或 radio 使用 defaultChecked 设置选中状态, select 和 textarea 使用 defaultValue。对于 select 在子选项 option 中设置 selected 属性表示选中状态的做法，不建议使用：

	<input defaultValue="Bob" type="text" ref={this.input} />

	<input defaultChecked="Bob" type="checkbox" ref={this.input} />
	<input defaultChecked="Bob" type="radio" ref={this.input} />

	<select name="gender" defaultValue="female">
		<option value="male">Male</option>
		<option selected={true} value="female">Female</option>
	</select>

	<select multiple={true} value={['B', 'C']}>
	<select value={this.state.value} onChange={this.handleChange}>

单选或多选输入框 radio 各 checkbox 都可以在 onChange 事件中使用 checked 来检查是否处于选中状态，同时注意 {[name]: value } 这种表达方式，可以方便对多个不同的输入控件进行状态管理：

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
		  [name]: value
		});
	}


文本输入控件和 select 或者多行文本 textarea 很相似的，都使用 value。

	<textarea value={this.state.value} onChange={this.handleChange} />


HTML 中的 input 控件是多用用途的，当它作为文件输入控件时，就是非受控的，因为浏览器出于安全机制考虑，它总是由用户选择输入什么文件。对于已经选好的文件，可以使用 HTML5 File API 进行处理：

	<input type="file" multiple={true} ref={this.fileInput} />


提交表单时，一个请求伴随着 header 设置不同数据格式也不同，比如 application/json 请求数据包看起来如下：

	POST /api HTTP/1.1
	Content-Type: application/json

	{ "foo" : "bar", "name" : "John" }

这是正常 AJAX 请求，浏览器会简单的将你提交的内容作为 Request Payload 展示出来，这就是它所能做的，因为它不知道数据要做什么用。

如果仅仅提交了一个 HTML 表单，并且设置了 application/x-www-form-urlencoded 或者 multipart/form-data 那么你的请求可能长这个样：

	POST /api HTTP/1.1
	Content-Type: application/x-www-form-urlencoded

	foo=bar&bar=foo

这里的 Form Data 浏览器知道更多，它知道 bar 是提交表单的输入字段 foo 的值。


在处理文件上传时，如果未手动指定任何内容类型，浏览器会设置正确的标题，包括 Content-type 应该附带的多部分边界指示 boundary。但是，如下这样手动指定类型信息不完整时，服务器就无法用 boundary 进行多文件的分割提取操作，从而报错：

	Header("Content-type", "multipart/form-data"); 

	PHP Warning:  Missing boundary in multipart/form-data POST data in Unknown on line 0

所以设定的头部信息时，需要补充完整的 boundary 标记，或者字符编码方案：

	"Content-Type": "multipart/form-data; boundary=BB"+Date.now(),
	"Content-type": "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)); 


以下是一个文件表表单组件：


	type Props = {uploadURL?: string};

	class FileForm extends React.Component {

	  public input:React.RefObject<HTMLInputElement>
	  public inputToken:React.RefObject<HTMLInputElement>
	  public props: Props
	  public state:{flag: number}
	  public fileInfo:{files:FileList|never[], nFiles?:number, sOutput?:string}
	  public tokenQiniu:{key:string, token:string}
	  public returnStatus:{status?:number, statusText?:string, text?:string}

	  constructor(props:Props) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.input = React.createRef<HTMLInputElement>();
	    this.inputToken = React.createRef<HTMLInputElement>();
	    this.state = {flag: 0};
	    this.props = props;
	    this.fileInfo = {} as any;
	    this.tokenQiniu = {} as any;
	    this.returnStatus = {} as any;
	    console.log("FileForm");
	  }

	  fetchToken(){
	    let file = this.fileInfo.files[0];
	    if(!file) return 
	    let api = 'https://www.jianshu.com/upload_images/token.json?filename='+file.name;
	    window.open(api);
	  }

	  handleSubmit(event:React.FormEvent) {
	    let files = this.input.current?.files || [];
	    console.log(this.input.current?.files);
	    
	    this.tokenQiniu = JSON.parse(this.inputToken.current?.value||"{}");
	    const formData = new FormData()
	    // for qiniu upload service
	    formData.append("token", this.tokenQiniu.token);
	    formData.append("key",   this.tokenQiniu.key);
	    for (let id in files) {
	      formData.append('file', files[id]);
	    }
	    formData.append("x:protocol",   "https");

	    fetch(this.props.uploadURL ?? "https://upload.qiniup.com/",{ 
	        method :"POST",
	        body: formData,
	        headers:{
	          // Form Data
	          // 'Content-Type': 'application/x-www-form-urlencoded',
	          // Request Payload
	          // 'Content-Type': 'application/json',
	          // 'Content-Type': 'text/plain',
	          "Content-Type": "multipart/form-data; boundary=BB"+Date.now(),
	          'Referer': 'http://jssdk-v2.demo.qiniu.io/'
	        } 
	    })
	    .then((res) => {
	      console.log('Fetch Status', res);
	      this.returnStatus = {status: res.status, statusText: res.statusText};
	      return res.text();
	    })
	    .then((text) => {
	      this.returnStatus = {...this.returnStatus, text: text};
	      console.log('Fetch JSON', text);
	      this.setState({flag: Date.now()});
	    }).catch(function(e) {
	      console.log('Fetch Error',e);
	    });

	    event.preventDefault();
	  }

	  render() {
	    let {status, statusText, text} = this.returnStatus;
	    console.log("FileForm render", this.fileInfo, this.returnStatus);
	    return (
	      <>
	      <form className="board" onSubmit={this.handleSubmit}>
	        <label>
	          File:
	          <input type="file" multiple={true} ref={this.input} onChange={ev => this.updateSize(ev)} />
	        </label>
	        <input type="submit" value="Submit" />
	      </form>

	      {status &&
	      <div className="board">
	        <div>Server return {status} {statusText}</div>
	        <div>{text}</div>
	      </div>}

	      {this.fileInfo.nFiles &&
	      <div className="board">
	        <label>
	        Token: <input type="text" ref={this.inputToken} />
	        <button onClick={ev => this.fetchToken()}>Get One</button>
	        </label>
	        <div>{this.fileInfo.nFiles} {(this.fileInfo.nFiles!>1? "Files":"File")} {this.fileInfo.sOutput}</div>
	      </div>}
	      </>
	    );
	  }
	  // input.addEventListener("change", updateSize, false);
	  updateSize(ev:React.ChangeEvent<HTMLInputElement>) {
	    let files = ev.target.files ?? [];
	    let nBytes = 0,
	        oFiles = files,
	        nFiles = oFiles?.length || 0;
	    for (let nFileId = 0; nFileId < nFiles; nFileId++) {
	      nBytes += oFiles[nFileId].size;
	    }
	    let sOutput = nBytes + " bytes";

	    const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
	    for (let nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
	      sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
	    }
	    this.fileInfo = {files, nFiles, sOutput};
	    this.setState({flag: Date.now()});
	    console.log('updateSize', this.fileInfo);
	  }
	}

如果安装了 curl 可以用它来做文件上传测试：

    curl -H "Content-Type: multipart/form-data" -X POST http://localhost:80/upload.php -F "file=@C:\pictures\firework.png"
    curl -H "Content-Type: multipart/form-data" -X POST http://localhost:80/upload.php -F "files[]=@C:\pictures\firework.png"

作为测试服务器，可以使用以下 php 脚本作为服务器的 API，可以使用 php 内置的 Web 服务：

	php -S localhost:80 -t /path/to/this/script

	<?php

	class Dynamic extends stdClass{
	    protected $_imageFormats = [ 'image/png','image/jpg', 'image/jpeg', 'image/gif', 'image/bmp' ];
	    protected $_uploadFolder = ".";
	    protected $_CORS = false;
	    protected $out;

	    public function __destruct() {
	        echo json_encode($this->out, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
	    }

	    public function __construct($_CORS = false) {
	        $this->out = new stdClass();
	        $this->_CORS = $_CORS;
	        if($this->_CORS) $this->allowCORS();
	        file_put_contents('upload.json', json_encode($_FILES, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));

	        if(isset($_FILES['file']) && !is_array($_FILES['file']['name'])){
	            $this->handleFileUpload($_FILES['file']);
	            // var_dump($_FILES['file']);
	        }elseif(isset($_FILES['file'])){ // <input name="file" multiple="true" />
	            $len = count($_FILES['file']['name']);
	            for ($i=0; $i < $len; $i++) {
	                $file =  [
	                    "name" => $_FILES['file']['name'][$i], 
	                    "type" => $_FILES['file']['type'][$i], 
	                    "tmp_name" => $_FILES['file']['tmp_name'][$i], 
	                    "error" => $_FILES['file']['error'][$i], 
	                    "size" => $_FILES['file']['size'][$i]
	                ];
	                $this->handleFileUpload($file);
	                // print_r($file);
	            }
	        }else{
	            $this->out->status = 1;
	            $this->out->message = "no any file was uploaded.";
	        }
	    }

	    public function __call($key,$params){
	        //print("Call to undefined method ".get_class($this)."::".$key."()");
	        $subject = $this->{$key};
	        call_user_func_array($subject, $params);
	    }
	    protected function get_current_uri($withQuery=false){
	        $uri = @$_SERVER['REQUEST_URI'];
	        $path = @$_SERVER['PATH_INFO'];
	        return $this->get_base_uri().( $withQuery? $uri:$path);
	    }
	    protected function get_base_uri(){
	        $protocol = @$_SERVER['REQUEST_SCHEME'];
	        $hostName = $_SERVER['HTTP_HOST']; // $_SERVER["SERVER_NAME"]
	        $port = $_SERVER["SERVER_PORT"];
	        $base = $protocol.'://'.$hostName.($port? $port:"");
	        return $base;
	    }
	    protected function allowCORS(){
	      header("Access-Control-Allow-Credentials: true");
	      header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	      header("Access-Control-Allow-Origin: *");
	      header("Access-Control-Allow-Methods: PUT,POST,GET,DELETE,OPTIONS");
	    }
	    protected function handleFileUpload($file){
	        $temp = $file["tmp_name"];
	        $name = $file["name"];
	        $isImage = in_array( $file["type"], $this->_imageFormats);
	        if( $isImage ){
	            $dest = $_SERVER["DOCUMENT_ROOT"]."/".$this->_uploadFolder."/".$name;
	            $root = str_replace( @$_SERVER["PATH_INFO"], "", $this->get_current_uri());
	            $url = $root."/".$this->_uploadFolder."/".$name;
	            $isCopy = copy( $temp, $dest);
	            $this->out->status = $isCopy? 0:1;
	            $this->out->url = $url;
	            $this->out->location = $url;
	            die();
	        }else{
	            $this->out->status = 1;
	            $this->out->message = "只支持 ".join(",", $this->_imageFormats);
	            die();
	        }
	    }
	}

	$dc = new Dynamic(true);



## Web Components

React 的 Web 组件是为了解决不同的问题而构建的，比如和第三方库集成。React 提供了一个声明性库，使 DOM 与数据保持同步，这两个目标是相辅相成的。作为开发人员，可以在 Web 组件中自由使用 React，也可以在 React 中自由使用 Web 组件，或者两者都可以。

大多数使用 React 的人不使用 Web 组件，但是您可能希望使用，特别是在使用 Web 组件编写的第三方 UI 组件时。

示范使用 Web 组件：

	class HelloMessage extends React.Component {
	  render() {
	    return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
	  }
	}

	function BrickFlipbox() {
	  return (
	    <brick-flipbox class="demo">
	      <div>front</div>
	      <div>back</div>
	    </brick-flipbox>
	  );
	}

一个容易混淆的是，Web 组件直接使用 class 指定样式类型，而不是 className。

Web Components 通常用来暴露 imperative API 命令式 API，比如 `video` 组件可能暴露 play() 和 pause() 等函数，要访问命令式 API 需要使用一个 ref 引用 DOM 节点来直接交互，要与第三方的 Web Components 交互，最好是用一个 React 组件去包装 Web 组件。

Events emitted by a Web Component may not properly propagate through a React render tree. You will need to manually attach event handlers to handle these events within your React components.

Web 组件发出的事件可能无法通过 React 渲染过程正确传播，需要手动附加事件处理函数来处理。

为前面使用的 Web 组件提供 React API：

	class XSearch extends HTMLElement {
	  connectedCallback() {
	    const mountPoint = document.createElement('span');
	    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

	    const name = this.getAttribute('name');
	    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
	    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
	  }
	}
	customElements.define('x-search', XSearch);

这里的 customElements 是 Node 开发环境提供的自定义元素注册接口：

	interface CustomElementRegistry {
	    define(name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions): void;
	    get(name: string): any;
	    upgrade(root: Node): void;
	    whenDefined(name: string): Promise<void>;
	}

	declare var CustomElementRegistry: {
	    prototype: CustomElementRegistry;
	    new(): CustomElementRegistry;
	};



## Lifting State Up 状态提升
- Lifting State Up https://reactjs.org/docs/lifting-state-up.html
- [React 组件状态提升](https://react.docschina.org/docs/lifting-state-up.html)


这是最简单的子组件向父级传递数据的方法，是在父组件中给子组件属性中设置回调函数，即 React 官方文档中所说的组件状态提升 Lifting State Up。官方提供的例子演示了摄氏度 Celsius 和华氏度 Fahrenheit 换算，子组件通过调用 onTemperatureChange 设置的回调函数向父组件报告输入的温度。

	const scaleNames = {
	  c: 'Celsius',
	  f: 'Fahrenheit'
	};

	function toCelsius(fahrenheit) {
	  return (fahrenheit - 32) * 5 / 9;
	}

	function toFahrenheit(celsius) {
	  return (celsius * 9 / 5) + 32;
	}

	function tryConvert(temperature, convert) {
	  const input = parseFloat(temperature);
	  if (Number.isNaN(input)) {
	    return '';
	  }
	  const output = convert(input);
	  const rounded = Math.round(output * 1000) / 1000;
	  return rounded.toString();
	}

	function BoilingVerdict(props) {
	  if (props.celsius >= 100) {
	    return <p>The water would boil.</p>;
	  }
	  return <p>The water would not boil.</p>;
	}

	class TemperatureInput extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(e) {
	    this.props.onTemperatureChange(e.target.value);
	  }

	  render() {
	    const temperature = this.props.temperature;
	    const scale = this.props.scale;
	    return (
	      <fieldset>
	        <legend>Enter temperature in {scaleNames[scale]}:</legend>
	        <input value={temperature}
	               onChange={this.handleChange} />
	      </fieldset>
	    );
	  }
	}

	class Calculator extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
	    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	    this.state = {temperature: '', scale: 'c'};
	  }

	  handleCelsiusChange(temperature) {
	    this.setState({scale: 'c', temperature});
	  }

	  handleFahrenheitChange(temperature) {
	    this.setState({scale: 'f', temperature});
	  }

	  render() {
	    const scale = this.state.scale;
	    const temperature = this.state.temperature;
	    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
	    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

	    return (
	      <div>
	        <TemperatureInput
	          scale="c"
	          temperature={celsius}
	          onTemperatureChange={this.handleCelsiusChange} />
	        <TemperatureInput
	          scale="f"
	          temperature={fahrenheit}
	          onTemperatureChange={this.handleFahrenheitChange} />
	        <BoilingVerdict
	          celsius={parseFloat(celsius)} />
	      </div>
	    );
	  }
	}

	ReactDOM.render(
	  <Calculator />,
	  document.getElementById('root')
	);

去 CodePen 交互体验 https://codepen.io/gaearon/pen/WZpxpz?editors=0010



## Composition vs Inheritance 组合 vs 继承
- [Composition vs Inheritance](https://react.docschina.org/docs/composition-vs-inheritance.html)
- [ECMAScript 6 modules: the final syntax](https://2ality.com/2014/09/es6-modules-final.html)
- [不使用 ES6 语法](https://react.docschina.org/docs/react-without-es6.html)
- [React Ways1——函数即组件](https://juejin.im/post/5c8b830f5188257e826ab716)

React 有一个强大的组合模型，并建议使用组合而不是继承来重用组件之间的代码， React 中有一个经典的公式：
	
	const View = f(data)

这个公式里我们可以提取出两个特点： 视图由函数定义——函数即组件，视图的展示与 data 有关——数据驱动！一个组件数据源有两个： 来自外部的属性 props 和来自内部的状态 state。 

父组件可以看作是容器，具体实现什么功能交由子组件去做，这就是组件组合的便利之处：

	function SplitPane(props) {
	  return (
	    <div className="SplitPane">
	      <div className="SplitPane-left">
	        {props.left}
	      </div>
	      <div className="SplitPane-right">
	        {props.right}
	      </div>
	    </div>
	  );
	}

	function App() {
	  return (
	    <SplitPane left={ <Contacts /> } right={ <Chat /> } />
	  );
	}

有时，需要专用功能的组件，可以认为是其他组件的特例，比如说 WelcomeDialog 是 Dialog 的特例。但基本部分在 Dialog 中，通过合成新的实现的，特定功能的组件通过呈现一个更通用的组件，并用 props 配置它：

	function Dialog(props) {
	  return (
	    <FancyBorder color="blue">
	      <h1 className="Dialog-title">
	        {props.title}
	      </h1>
	      <p className="Dialog-message">
	        {props.message}
	      </p>
	    </FancyBorder>
	  );
	}

	function WelcomeDialog() {
	  return (
	    <Dialog
	      title="Welcome"
	      message="Thank you for visiting our spacecraft!" />
	  );
	}

	class SignUpDialog extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSignUp = this.handleSignUp.bind(this);
	    this.state = {login: ''};
	  }

	  render() {
	    return (
	      <Dialog title="Mars Exploration Program"
	              message="How should we refer to you?">
	        <input value={this.state.login}
	               onChange={this.handleChange} />
	        <button onClick={this.handleSignUp}>
	          Sign Me Up!
	        </button>
	      </Dialog>
	    );
	  }

	  handleChange(e) {
	    this.setState({login: e.target.value});
	  }

	  handleSignUp() {
	    alert(`Welcome aboard, ${this.state.login}!`);
	  }
	}

声明式编程 Declarative Programming，与命令式编程相对立，Imperative vs Declarative，声明式编程更加注重于表现代码的逻辑，而不是描述具体的过程。
也就是说，在声明式编程的实践过程中，我们需要更多的告知计算机我们需要什么——比如调用一个具体的函数，而不是用一些抽象的关键字来一行一行的实现我们的需求。
在这个模型下，数据是不可变的，这就避免如死锁等变量改变带来的问题。

如求一个 list 里所有值的和例子，如下：

	// 命令式编程
	var numbers = [1,2,3,4,5]
	var total = 0;
	for(var i = 0; i < numbers.length; i++) {
	  total += numbers[i]
	}
	console.log(total) //=> 15
	
	 
	// 声明式编程
	var numbers = [1,2,3,4,5]
	var total = numbers.reduce(function(sum, n) {
	  return sum + n
	}, 0); // 0是初始值
	console.log(total); //=> 15


简单总结一下声明式编程的优点：

+ 复用性：封装是声明式编程的一大要点，而封装的主要目的之一就是复用代码
+ 安全性：明确关注点，省去了不必要的变量声明和对象引用，防止副作用。
+ 可读性：方法的调用代替直接编写流程，使得代码更加直观
+ 逻辑性：显然通过语义化的方法名能更加清楚的体现代码的逻辑


React 这种可以任意组合组件的 JSX 能力十分强大，同时 TypeScript 的完备类功能可以很便利的继承组件，但推荐使用组合而非继承来实现组件间的代码重用。

React 元素本质就是对象，所以函数式组件和 Component 组件没有根本差别，这些元素可以当作 props 的属性传递给嵌套组件，就像其他数据一样传递。如了解过 Vue 组件的插槽 slot 功能，这种方法其实更简单易用了，你可以将任何东西作为 props 进行传递，然后在组件内部放置于任意位置。对于组件内嵌的元素，则会通过 props.children 传入。

在 Facebook，成百上千个组件中使用 React，并没有使用继承来构建组件层次的情况。Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。

如果要在组件间复用非 UI 的功能，建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们。

继承会带来什么问题？以我的实践经验，过渡使用继承，虽然给编码带来便利，但容易导致代码失控，组件膨胀，降低组件的复用性。

比如：有一个列表组件，叫它 ListView 吧，可以上下滚动显示一个 item 集：

- 突然有一天需求变了，PM 说，我要这个 ListView 能像 iOS 那样有个回弹效果。
- 好，用继承对这个 ListView进行扩展，加入了回弹效果，任务 closed。
- 第二天PM找上门来了，希望所有上下滚动的地方都可以支持回弹效果，这时候就懵逼啦，怎么办？把 ListView 中回弹效果的代码 copy 一遍？这就和 DRY 原则相悖了不是，而且有可能受到其他地方代码的影响，处理回弹效果略有不同，要是有一天PM希望对这个回弹效果做升级，那就有得改啦。应对这种场景，最好的办法是啥？

用组合，封装一个带回弹效果的 Scroller，ListView 看成是 Scroller 和 item 容器组件的组合，其他地方需要要用到滚动的，直接套一个 Scroller，以后不管回弹效果怎么变，我只要维护这个 Scroller 就好了。当然，最理想的，把回弹效果也做成一个组件 SpringBackEffect，从 Scroller 分离出来，这样，需要用回弹效果的地方就加上 SpringBackEffect 组件就好了，这就是为什么组合优先于继承的原因。

函数组件方式和 React.Component 组件继承方式可以混合使用，这两种方式的差异就在于导出的函数组件时一个返回视图的主函数，而导出的 React.Component 组件则时在其 `render()` 成员方法返回视图。组件的 `props` 的传入口分别在主函数和 Component 构造器，并且在构造器中必须先调用父类的构造器 `super(props)`。

React 16 版本以后，官方已经不推荐使用 createclass 的方式创建组件了，同时也取消了以前 Mixin 那一套侵入式复用代码的做法，转而推荐大家使用高阶函数的方式来实现对代码的复用。继承的方式创建一个组件可以继承两个父类 React.Component 和 React.PureComponent。两者除了在 shouldComponentUpdate 方法的实现逻辑上不一样，其他表现都一样，PureComponent 使用了 props、state 的浅比较。

一般情况下我们选择继承 React.PureComponent ，可以优化我们的组件性能，不过特殊时候你也可以选择继承 React.Component，然后自己去实现 shouldComponentUpdate 方法的逻辑部分。

TypeScript 类成员默认是 public 访问许可，可以使用 protected 和 private，static 修饰符定义静态类成员。如果你还未使用过 ES6，你可以使用 create-react-class 模块，ES6 中的 class 与 createReactClass() 方法十分相似，但有以下几个区别值得注意，参考官方文档 [不使用 ES6 语法]。

	var createReactClass = require('create-react-class');
	var Greeting = createReactClass({
	  render: function() {
	    return <h1>Hello, {this.props.name}</h1>;
	  }
	});


通过关键字 `import` 导入的模块会自动定位到 index 文件，不需要填写这部分。如果模块名字不是 index 则需要填写文件名，扩展名部分可以省略不写。这里解析以下 `import` 这条指令：

	import React, {Component} from 'react';

这条指令涉及到默认导入和命名导入，默认导入对应导出内容如下：

	import React from 'react'; // export default xxx

在这种情况下，导入时可以为它指定任意名称，导出的符号就是模块中 `export default` 对应的那个。而对于 React，它需要在 Babel 中使用，已经约定使用这个名字了，不能进行更改。

而命名导入则需要加花括号，也可以使用 `as` 来改名 :

	import { A, A as Any } from './A'; // export const A = 42 or module.exports = {A:42}




## Thinking In React
- 21 Web Dev Tips for 2021 🎇 https://scrimba.com/learn/21tips


React 是用 JavaScript 构建大型、快速 Web 应用程序的一种方案，对于 Facebook 和 Instagram 来讲是最重要的技术，其表现也非常出色。

React 的许多重要部分之一，是它如何让你在构建应用程序时思考它们，这里将以一个产品搜索面板作为一个分析案例。

Start With A Mock 从模仿入手，假设我们已经有了一个 JSON API 和 UI 设计，并且 API 可以返回如下数据：

	[
	  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
	  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
	  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
	  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
	  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
	  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
	];

以下将分 5 步完成一个模型应用的设计开发：

- Step 1: 分解 UI 为组件层次结构 Break The UI Into A Component Hierarchy
- Step 2: 不使用状态建立一个静态组件版本 Build A Static Version in React
- Step 3: 确定一个最小但功能完备的状态管理 Identify The Minimal (but complete) Representation Of UI State
- Step 4: 确定 State 放在什么组件上进行状态管理 Identify Where Your State Should Live
- Step 5: 添加反向的数据流 Add Inverse Data Flow
- And That’s It

下面正式开始。

### 👉 Step 1: Break The UI Into A Component Hierarchy

在 UI 界面的每个组件周围绘制框，并给出它们的所有名称。如果你和一个设计师一起工作，他们可能已经起好名字了，所以去和他们谈谈吧！他们的 Photoshop 图层名称最终会可能成为您的 React 组件的名称！

如何确定某部分 UI 组成组件呢？技术上应该以单一功能为原则，也就是说，一个组件在理想情况下应该只做一件事。如果它的功能修改增长了，它应该分解成更小的子组件。

由于您经常向用户显示 JSON 数据模型，因此您会发现，如果您的模型构建正确，UI 以及组件结构将很好地反映出来。这是因为 UI 和数据模型倾向于遵循相同的信息体系结构。将 UI 划分为多个组件，每个组件与数据模型的一部分相匹配。

这个应用程序中有五个组件，。我们已经将每个组件代表的数据斜体化了。

- FilterableProductTable 整个面板；
- SearchBar 搜索例，接收所有用户的输入；
- ProductTable 产品列表，显示按用户输入过滤好的信息；
- ProductCategoryRow 产品分类，显示分类标题；
- ProductRow 产品信息，每行显示一个产品；

ProductTable 表头包含 Name 和 Price 标签，但是这些信息是属性产品的，本不是它自己组件的。这是一个偏好的问题，任何一种方式都有理由。对于本例，我们将其作为 ProductTable 的一部分，因为它是 ProductTable 负责呈现数据集合的一部分。但是，如果这个头变得很复杂，例如，如果我们要添加用于排序的启示，那么让它成为自己的 ProductTableHeader 组件肯定是有意义的。

既然我们已经在 mock 中标识了组件，那么让我们将它们排列成一个层次结构，组件在组件的层次结构中显示为子组件：

	<FilterableProductTable />
	  +-- <SearchBar />
	  +-- <ProductTable />
	        +--  <ProductCategoryRow />
	        +--  <ProductRow />



### 👉 Step 2: Build A Static Version in React

创建一个静态版本，不含状态管理的组件实现：

	class ProductCategoryRow extends React.Component {
	  render() {
	    const category = this.props.category;
	    return (
	      <tr>
	        <th colSpan="2"> {category} </th>
	      </tr>
	    );
	  }
	}

	class ProductRow extends React.Component {
	  render() {
	    const product = this.props.product;
	    const name = product.stocked ?
	      product.name :
	      <span style={{color: 'red'}}> {product.name} </span>;

	    return (
	      <tr>
	        <td>{name}</td>
	        <td>{product.price}</td>
	      </tr>
	    );
	  }
	}

	class ProductTable extends React.Component {
	  render() {
	    const rows = [];
	    let lastCategory = null;
	    
	    this.props.products.forEach((product) => {
	      if (product.category !== lastCategory) {
	        rows.push(
	          <ProductCategoryRow category={product.category} key={product.category} />
	        );
	      }
	      rows.push(
	        <ProductRow product={product} key={product.name} />
	      );
	      lastCategory = product.category;
	    });

	    return (
	      <table>
	        <thead>
	          <tr>
	            <th>Name</th>
	            <th>Price</th>
	          </tr>
	        </thead>
	        <tbody>{rows}</tbody>
	      </table>
	    );
	  }
	}

	class SearchBar extends React.Component {
	  render() {
	    return (
	      <form>
	        <input type="text" placeholder="Search..." />
	        <p> <input type="checkbox" /> {' '} Only show products in stock </p>
	      </form>
	    );
	  }
	}

	class FilterableProductTable extends React.Component {
	  render() {
	    return (
	      <div>
	        <SearchBar />
	        <ProductTable products={this.props.products} />
	      </div>
	    );
	  }
	}


	const PRODUCTS = [
	  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
	  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
	];
	 
	ReactDOM.render(
	  <FilterableProductTable products={PRODUCTS} />,
	  document.getElementById('container')
	);


在线运行 https://codepen.io/gaearon/pen/BwWzwm

现在您已经有了组件层次结构，静态版本是构建应用最简单的方法，采用数据模型并呈现 UI 但没有交互性的版本。最好将这些过程解耦，因为构建静态版本只需要大量的敲代码输入而不需要思考，而添加交互性则需要大量的思考而不需要大量的输入。

要构建呈现数据模型的应用程序的静态版本，需要构建重用其他组件并使用组件属性传递数据的组件，Props 是将数据从父对象传递给子对象的一种方式。如果您熟悉状态的概念，就不要使用 State 来构建这个静态版本。状态仅保留用于交互，即随时间变化的数据，对于一个静态版本的应用程序，你不需要它。

您可以自顶向下或自下而上构建，Top-Down vs Buttom-Up，也就是说，可以从构建层次结构中顶层组件开始，即从 FilterableProductTable 开始，也可以从构建层次结构中较低的组件开始 ProductRow。在更简单的例子中，自顶向下通常更容易，而在更大的项目中，自下而上和在构建时编写测试更容易。

在这一步结束时，您将拥有一个可重用组件库，这些组件呈现您的数据模型。组件将只有 render() 方法，因为这是应用程序的静态版本。层次结构顶部的组件 FilterableProductTable 将把数据模型作为一个 Props 传递给子组件。如果您更改了基础数据模型并调用 ReactDOM.render() 再次更新 UI。结合 State 状态管理可以看到 UI 是如何更新的，以及在何处进行更改。React 的单向数据流，也称为单向绑定，one-way data flow 或者 one-way binding，使所有内容保持模块化和快速。

简单来说，Props vs State，这是两种数据模型，Props 表示只读的属性数据，由上层往下层传递，State 表示状态管理数据，可以读写，但不能直接写，需要通过 setState() 方法来写入，这样做 React 才能正确处理组件状态及触发重新渲染。



### 👉 Step 3: Identify The Minimal Representation Of UI State

要使 UI 具有交互性，需要能够触发对底层数据模型的更改，用状态 State 和 setState() 来实现这一点。

要正确构建应用程序，首先需要考虑应用程序需要的最小可变状态集。这里的关键是，不要 DRY Code - Don’t Repeat Yourself，重复写重复过的代码，只会增加消耗同时增加出错的概率。
对于消除重复的代码有一个三次法则 Rule of Three：

- 第一次先写了一段代码。
- 第二次在另一个地方写了一段相同的代码，你已经有消除和提取重复代码的冲动了。
- 再次在另一个地方写了同样的代码，你已忍无可忍，现在可以考虑提取和消除重复代码了。

这一法则也适应于对重构时机的把握，过早的重构可能会引入新的问题，三次法则给了你一个重构依据。当然，随着你经验的增长，你可能在第二阶段已经能非常有信心的预料到问题所在。

找出应用程序所需状态的绝对最小表示，然后按需计算所有其他需要的内容。例如，如果您正在构建一个 TODO 列表，请保留一个 TODO 项数组；不要为计数保留单独的状态变量。相反，当您要呈现 TODO 计数时，请采用 TODO items 数组的长度。

想想我们示例应用程序中的所有数据片段：

- 原始产品清单
- 用户输入的搜索文本
- 复选框的值
- 过滤后的产品列表

让我们逐一检查，找出哪一个是状态，就每一条数据问三个问题：

- 是不是 Parent 组件通过 Props 传过来的？如果是这样的话，很可能不是 State。
- 它会随着时间的推移保持不变吗？如果是这样的话，很可能不是 State。
- 你能基于组件中的任何其他状态或属性来计算它吗？如果是这样，那就不是 State。

产品的原始列表作为 Props 传递，所以这不是状态。搜索文本和复选框似乎是状态，因为它们随着时间的推移而改变，并且不能从任何内容计算出来。最后，过滤后的产品列表不是 State，因为它可以通过将原始产品列表与复选框的搜索文本和值相结合来计算。

最后，我们的状态是：

- 用户输入的搜索文本
- 复选框的值


### 👉 Step 4: Identify Where Your State Should Live

这里已经确定了应用程序状态的最小集合是什么。下一步，我们需要确定哪个组件变异或拥有这个状态。

记住：React 完全是关于组件层次结构中的单向数据流。对于新手来说，可能还不清楚哪个组件应该拥有什么状态。这通常是最具挑战性的部分，所以请按照以下步骤来理解。

对于应用程序中的每个状态：

- 识别基于该状态呈现某些内容的每个组件。
- 找到一个公共所有者组件（层次结构中需要状态的所有组件之上的单个组件）。
- 公共所有者或层次结构中更高级别的另一个组件应该拥有状态。
- 如果找不到拥有状态的组件，请创建一个仅用于保存状态的新组件，并将其添加到公共所有者组件之上的层次结构中的某个位置。

让我们为我们的应用程序运行以下策略：

- ProductTable 需要根据状态筛选产品列表，SearchBar 需要显示搜索文本和选中状态。
- 公共所有者组件是 FilterableProductTable。
- 从概念上讲，filterText 和 checked 值存在于 FilterableProductTable 中是有意义的。

所以我们决定 State 在 FilterableProductTable 组件这里：

- 首先，添加一个实例属性 this.state = {filterText:''，inStockOnly:false} 到 FilterableProductTable 的构造函数，以反映应用程序的初始状态。
- 然后，将 filterText 和 inStockOnly 作为 props 传递给 ProductTable 和 SearchBar。
- 最后，使用这些道具过滤 ProductTable 中的行，并在 SearchBar 中设置表单字段的值。

在线浏览 Thinking In React: Step 4 https://codepen.io/gaearon/pen/qPrNQZ

您可以开始了解应用程序的行为：将组件的 filterText 属性设置为 ball 并刷新应用程序，您将看到数据表已正确更新。


	class ProductTable extends React.Component {
	  render() {
	    const filterText = this.props.filterText;
	    const inStockOnly = this.props.inStockOnly;

	    const rows = [];
	    let lastCategory = null;

	    this.props.products.forEach((product) => {
	      if (product.name.indexOf(filterText) === -1) {
	        return;
	      }
	      if (inStockOnly && !product.stocked) {
	        return;
	      }
	      if (product.category !== lastCategory) {
	        rows.push(
	          <ProductCategoryRow category={product.category} key={product.category} />
	        );
	      }
	      rows.push(
	        <ProductRow product={product} key={product.name} />
	      );
	      lastCategory = product.category;
	    });

	    return (
	      <table>
	        <thead>
	          <tr>
	            <th>Name</th>
	            <th>Price</th>
	          </tr>
	        </thead>
	        <tbody>{rows}</tbody>
	      </table>
	    );
	  }
	}

	class SearchBar extends React.Component {
	  render() {
	    const filterText = this.props.filterText;
	    const inStockOnly = this.props.inStockOnly;

	    return (
	      <form>
	        <input
	          type="text"
	          placeholder="Search..."
	          value={filterText} />
	        <p>
	          <input
	            type="checkbox"
	            checked={inStockOnly} />
	          {' '}
	          Only show products in stock
	        </p>
	      </form>
	    );
	  }
	}

	class FilterableProductTable extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      filterText: '',
	      inStockOnly: false
	    };
	  }

	  render() {
	    return (
	      <div>
	        <SearchBar
	          filterText={this.state.filterText}
	          inStockOnly={this.state.inStockOnly}
	        />
	        <ProductTable
	          products={this.props.products}
	          filterText={this.state.filterText}
	          inStockOnly={this.state.inStockOnly}
	        />
	      </div>
	    );
	  }
	}



### 👉 Step 5: Add Inverse Data Flow

到目前为止，我们已经构建了一个应用程序，它可以根据组件层次结构中的 Props 和 State 正确呈现。现在是时候支持数据以另一种方式流动了：层次结构中的表单组件需要更新 FilterableProductTable 中的状态。

React 使此数据流显式化，以帮助您了解程序的工作方式，但它确实需要比传统的双向数据绑定多一点代码。

如果您尝试在当前版本的示例中键入或选中该框，您将看到 React 忽略您的输入。这是有意的，因为我们将输入的值 Props 设置为始终等于从 FilterableProductTable 传入的状态。

让我们想想我们想要发生什么。我们希望确保每当用户更改表单时，我们都会更新状态以反映用户的输入。由于组件应该只更新它们自己的状态，FilterableProductTable会将回调传递给 SearchBar，每当状态需要更新时就会触发。我们可以在输入上使用 onChange 事件来通知它。FilterableProductTable 传递的回调将调用 setState()，应用程序将被更新。

在 FilterableProductTable 组件中定义事件处理函数，并传入 SearchBar 的 onFilterTextChange 和 onInStockChange 属性：

	class SearchBar extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
	    this.handleInStockChange = this.handleInStockChange.bind(this);
	  }
	  
	  handleFilterTextChange(e) {
	    this.props.onFilterTextChange(e.target.value);
	  }
	  
	  handleInStockChange(e) {
	    this.props.onInStockChange(e.target.checked);
	  }
	  
	  render() {
	    return (
	      <form>
	        <input
	          type="text"
	          placeholder="Search..."
	          value={this.props.filterText}
	          onChange={this.handleFilterTextChange}
	        />
	        <p>
	          <input
	            type="checkbox"
	            checked={this.props.inStockOnly}
	            onChange={this.handleInStockChange}
	          />
	          {' '}
	          Only show products in stock
	        </p>
	      </form>
	    );
	  }
	}

	class FilterableProductTable extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      filterText: 'ball',
	      inStockOnly: false
	    };
	    
	    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
	    this.handleInStockChange = this.handleInStockChange.bind(this);
	  }

	  handleFilterTextChange(filterText) {
	    this.setState({
	      filterText: filterText
	    });
	  }
	  
	  handleInStockChange(inStockOnly) {
	    this.setState({
	      inStockOnly: inStockOnly
	    })
	  }

	  render() {
	    return (
	      <div>
	        <SearchBar
	          filterText={this.state.filterText}
	          inStockOnly={this.state.inStockOnly}
	          onFilterTextChange={this.handleFilterTextChange}
	          onInStockChange={this.handleInStockChange}
	        />
	        <ProductTable
	          products={this.props.products}
	          filterText={this.state.filterText}
	          inStockOnly={this.state.inStockOnly}
	        />
	      </div>
	    );
	  }
	}


👉 And That’s It 最后就这些，自己动手试试。

希望这能让您了解如何使用 React 构建组件和应用程序。虽然它可能比您习惯的要多敲一些代码，但请记住，代码的阅读量远远大于编写的量，而且阅读这种模块化的明显的代码难度较小。当您开始构建大型的组件库时，您将体会到这种明确性和模块化，并且随着代码重用，您的代码行将开始缩减。:)

Thinking In React: Step 5 https://codepen.io/gaearon/pen/LzWZvb?editors=0010




# ⚑ Advanced 高级话题



## Web API Router

监听地址栏的变动：

- requestAnimationFrame 动态侦测
- window.addEventListener("hashchange", handler);

判断浏览器是否支持 onhashchange 事件

	if (('onhashchange' in window) && ((typeof document.documentMode === 'undefined') || document.documentMode == 8)) {
	    window.onhashchange = function () {
		    console.log(location.hash);
		};
	}

主程序，提供 Blog、UseEffect、Passthrough 等任意个组件以测试：

	import React, {useState, useEffect} from "react"
	import ReactDOM from 'react-dom';

	import router from '/router.js';
	import Blog from '/cp/keyedList.js';
	import UseEffect from '/cp/useEffect.js';
	import Passthrough from '/cp/passthrough.js';

	let Category = () => {
	  const [n, setN] = React.useState(0);
	  return (
	    <>
	    <div className="grid">
	      <div className="col15">      
	      <h1>Router</h1>
	      <a href="#/start" onClick={router.start}>Start</a>
	      <a href="#/stop" onClick={router.stop}>Stop</a>
	      </div>
	      <div className="col15">
	      <h1>Module</h1>
	      <a onClick={ev => setN(n)} href="#/blog">Blog</a>
	      <a onClick={ev => setN(n)} href="#/useEffect">useEffect</a>
	      <a onClick={ev => setN(n)} href="#/hr">hr</a>
	      <a onClick={ev => setN(n)} href="#/Passthrough">Passthrough</a>
	      </div>
	    </div>
	    <div className="grid">
	      <router.Root>
	        <router.Route path="/hr" cp={<div style={{width:'100%'}}><hr />🚩</div>} />
	        <router.Route path="/useEffect" cp={<UseEffect />} />
	        <router.Route path="/blog" cp={<Blog />} />
	        <router.Route path="/Passthrough" cp={<Passthrough />} />        
	      </router.Root>
	    </div>
	    </>
	  )
	}

	ReactDOM.render(
	  <Category />,
	  document.getElementById('root')
	);


router.js

	import React from 'react';

	// Polyfill
	window.requestAnimationFrame = (function () {
	    if (!window.cancelAnimationFrame) {
	        window.cancelAnimationFrame = function (id) {
	            clearTimeout(id);
	        };
	    }
	    return window.requestAnimationFrame ||
	        window.webkitRequestAnimationFrame ||
	        window.mozRequestAnimationFrame ||
	        window.oRequestAnimationFrame ||
	        window.msRequestAnimationFrame ||
	        function (callback) {
	            window.setTimeout(callback, 1000 / 60);
	        };
	})();

	let router = ((requestAnimationFrame,cancelAnimationFrame)=>{
	  let that, requestid, prev = {}, setS,
	  fs = ['host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'hash'];
	  fs.map(it=>prev[it]=location[it]);
	  
	  let monitor = () => {
	    if(prev.href !== location.href){
	      fs.map(it=>prev[it]=location[it]);
	      //console.log('change', location.hash);
	      setS && setS();
	    }
	    requestid = requestAnimationFrame(monitor);
	  }
	  let isMe = (path) => {
	    return '#'+path === location.hash;
	  }
	  return (that = {
	    start: ()=>{
	      that.stop()
	      monitor();
	    },
	    stop: ()=>{
	      cancelAnimationFrame(requestid);
	    },
	    Root: (props) => {
	      const [state, setState] = React.useState(false);
	      setS = () => setState(!state);
	      let found;
	      props.children && props.children.map(it => {
	        if(isMe(it.props.path)){
	            console.log('Root', isMe(it.props.path), it.props.path, it);
	            found = (<>{it.type(it.props)}</>);
	        }
	      })
	      return found;
	    },
	    Route: (props) => {
	      //console.log('Route', isMe(props.path), props.path, location.hash);
	      return( isMe(props.path)? <>{props.cp}</>:null );
	    }
	  });
	})(requestAnimationFrame,cancelAnimationFrame)

	router.start();

	export default router;


在线观看 https://scrimba.com/scrim/cB32EPsv



## React.memo vs PureComponent 谁更有效率
- React v16.6.0: lazy, memo and contextType https://reactjs.org/blog/2018/10/23/react-v-16-6.html
- Hooks API Reference https://reactjs.org/docs/hooks-reference.html
- React on Github https://github.com/facebook/react/
- React Devtools on Github https://github.com/facebook/react-devtools/releases/tag/3.4.2
- Flow with React Components https://flow.org/en/docs/react/components/

React 核心开发团队一直都努力地让 React 变得更快，在 React 中可以用来优化组件性能的方法大概有以下几种:

- 组件懒加载 React.lazy(...) 和 <Suspense />
- 使用 PureComponent 替代类组件 Component；
- 定制 shouldComponentUpdate 生命周期函数，主动控制渲染时机；
- 使用 React.memo 高阶函数组件等；

React v16.6.0 提供的高阶函数组件 React.memo()，可以实现函数组件的渲染控制，就像 PureComponent 或 shouldComponentUpdate 控制渲染时机一样。


查看 ReactMemo.js 源代码可以发现 React.memo 的实现很简单，过滤掉开发阶段涉及的代码，余下的不多。注意其第二个可选参数传入一个 compare 比较函数，返回比较值是否相等，再决定何时更新:

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	import {REACT_MEMO_TYPE} from 'shared/ReactSymbols';

	...

	export function memo<Props>(
	  type: React$ElementType,
	  compare?: (oldProps: Props, newProps: Props) => boolean,
	) {
	  // if (__DEV__){ ... }
	  const elementType = {
	    $$typeof: REACT_MEMO_TYPE,
	    type,
	    compare: compare === undefined ? null : compare,
	  };
	  // if (__DEV__) { ... 
	  return elementType;
	}

根据传入的 compare 函数比较 prevProps 和 nextProps，最终决定生成对象，并影响渲染效果。其实这一功能和类组件的生命周期函数 shouldComponentUpdate 是相同的功能。而之所以再增加这个 React.memo，目的就是 React 团队一直在秉承的信念，那就是让一切变得更加函数式。

创建类组件有两个选择，React.Component 和 React.PureComponent。两者除了在 shouldComponentUpdate 方法的实现逻辑上不一样，其他表现都一样，并且不建议重写 PureComponent 组件的这个函数。因为 PureComponent 使用了 props、state 的浅比较，通过 shouldComponentUpdate 生命周期函数控制减少 render 调用次数来减少性能损耗的。但该组件也具有一定的缺陷，因为它只能进行一层浅比较，简单来说，它只比较 props 和 state 的内存地址，如果内存地址相同，则 shouldComponentUpdate 生命周期就返回 false 不执行重绘。

以下 Passthrough 示范了各种组件的重新渲染流程，要点如下：

	App - 函数组件，通过 children 向各个一级子组件传入一个 **Indicator** 指示组件
	  +-- CDemo - 类组件
	  |     +-- **Indicator** 指示组件
	  +-- PDemo - 纯类组件
	  |     +-- **Indicator** 指示组件
	  +-- FDemo - 函数组件
	  |     +-- **Indicator** 指示组件
	  |     +-- CDemo - 类组件
	  |     |     +-- **Indicator** 指示组件
	  |     +-- PDemo - 纯类组件
	  |           +-- **Indicator** 指示组件
	  +-- MDemo - 使用 React.memo 封装的函数组件
	        +-- **Indicator** 指示组件

- Top 顶层 App 组件透过 children 传入子组件的部分不受子组件状态更新的影响，如 Top -> CDemo 或 Top -> PDemo 这些指示组件就不会受 CDemo 或 PDemo 状态更新的影响，并保持原状态。
- 但是，通过 children 传入子组件的部分有状态更新时，会触发子组件的更新。这一点通过 PDemo 很好测试，移除组件树中第一个 PDemo 的 children 之后，其状态就不受顶层的更新影响，或者参考 FDemo 和 MDemo 子组件下的 PDemo。
- React.memo 封装的函数组件可以通过比较函数返回值指示是否状态维持原样，来控制更新时机。

以单个函数组件来看，有两个更新数据的方法 update 和 updateVar，但是后者没有更新状态数据就不会触发重新渲染。并且，如果将 toc 变量定义在组件函数内部，每次重新渲染后，它将被清空复原，而将它定义在模块中，就成为一个不受 React 管理的全局变量，这样数据就可以保存下来：

	let toc = "FDemo -> CDemo";
	let FDemo = (props:Props) => {
	    const [state, setState] = React.useState(false);
	    let update = (ev:any) => setState(!state);
	    let updateVar = (ev:any) => {toc += Date.now(); console.log(toc);};
	    return (
	        <div className={props.className}>
	        <Indicator text="FDemo">
	        <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	        <button className="button-minimal" onClick={ev => updateVar(ev)}>Update Var</button>
	        </Indicator>
	        {props.children}
	        <CDemo text={toc}/>
	        <PDemo text="FDemo -> PDemo"/>
	        </div>
	    );
	}

各种组件的更新机制通过以下 Passthrough 示范：

	import React from "react";

	interface Props {
	    state?:boolean
	    children?:any
	    text?:string
	    className?:string
	}

	let Indicator = (props:Props) => {
	    return (
	        <div className="board">
	        {props.text} @<b>{new Date().toISOString().substr(14,10)}</b>
	        <div>{props.children}</div>
	        </div>
	    );
	}

	class CDemo extends React.Component<Props> {
	    props:Props
	    state:{ok: boolean}
	    constructor(props:Props){
	        super(props);
	        this.props = props;
	        this.state = {ok: false};
	    }
	    render(){
	        let update = (ev:any) => this.setState({ok:!this.state.ok});
	        return (
	            <div className={this.props.className}>
	            <Indicator text={this.props.text ?? "CDemo"}>
	                <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	            </Indicator>
	            {this.props.children}
	            </div>
	        );
	    }
	}

	class PDemo extends React.PureComponent<Props> {
	    props:Props
	    state:{ok: boolean}
	    constructor(props:Props){
	        super(props);
	        this.props = props;
	        this.state = {ok: false};
	    }
	    render(){
	        let update = (ev:any) => this.setState({ok:!this.state.ok});
	        return (
	            <div className={this.props.className}>
	            <Indicator text={this.props.text ?? "PDemo"}>
	                <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	            </Indicator>
	            {this.props.children}
	            </div>
	        );
	    }
	}

	let FDemo = (props:Props) => {
	    const [state, setState] = React.useState(false);
	    let update = (ev:any) => setState(!state);
	    return (
	        <div className={props.className}>
	        <Indicator text="FDemo">
	        <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	        </Indicator>
	        {props.children}
	        <CDemo text="FDemo -> CDemo"/>
	        <PDemo text="FDemo -> PDemo"/>
	        </div>
	    );
	}

	let compare = (prev: Props, next: Props) => {
	    return next.state ?? false; // does it no need rerender?
	}
	const MDemo = React.memo((props: Props)=>{
	    const ref = React.useRef<HTMLDivElement>(null)
	    animate(ref.current!);
	    const [state, setState] = React.useState(false);
	    let update = (ev:any) => setState(!state);
	    return (
	        <div ref={ref} className={props.className} >
	        <Indicator text="MDemo">
	            <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	        </Indicator>
	        {props.children}
	        </div>
	    );
	}, compare );

	let animate = (el:HTMLElement, timeout:number = 600) => {
	  if(!el) return ;
	  el.className = 'animate';
	  setTimeout(() => {
	    el.className = 'frozon';
	  }, timeout);
	}

	let App = (props:Props) => {
	    const [state, setState] = React.useState(false);
	    const [rm, setRm] = React.useState(false);
	    let update = (ev:any) => setState(!state);
	    let remove = (ev:any) => setRm(!rm);
	    return (
	        <div className="board bgGray grid">
	        <div className="col16">
	            <Indicator text="Top">
	                <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	            </Indicator>
	        </div>
	        <CDemo className="col16">
	            <Indicator text="Top -> CDemo">
	                <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	            </Indicator>
	        </CDemo>
	        <PDemo className="col16">
	            {!rm && (
	                <>
	                <Indicator text="Top -> PDemo">
	                <button className="button-minimal" onClick={ev => remove(ev)}>Hide 4 PDemo</button>
	                <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	                </Indicator>
	                </>)
	            }
	        </PDemo>
	        <FDemo className="col16">
	            <Indicator text="Top -> FDemo">
	                <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	            </Indicator>
	        </FDemo>
	        <MDemo state={state} >
	            <Indicator text="Top -> MDemo">
	                <button className="button-minimal" onClick={ev => update(ev)}>Update</button>
	            </Indicator>
	        </MDemo>
	        </div>
	    );
	}

	export default App;


CSS 实现的动画：

	.animate {
	    animation: bg-color 0.21s 3/* infinite */;
	    -webkit-animation: bg-color 0.21s 3/* infinite */;
	}

	@-webkit-keyframes bg-color {
	    0% { background-color: #eee; }
	    20% { background-color: #e0dbc4; }
	    60% { background-color: #e3e7ac; }
	    100% { background-color: #eee; } 
	}

	@keyframes bg-color {
	    0% { background-color: #eee; }
	    20% { background-color: #e0dbc4; }
	    60% { background-color: #e3e7ac; }
	    100% { background-color: #eee; } 
	}


在线运行 Passthrough https://scrimba.com/scrim/cB32EPsv



## PropTypes 验证React组件属性
- https://reactjs.org/docs/forms.html
- https://reactjs.org/docs/events.html
- https://reactjs.org/docs/handling-events.html
- [使用 PropTypes 进行类型检查](https://react.docschina.org/docs/typechecking-with-proptypes.html)
- [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

随着你的应用程序不断增长，你可以通过类型检查捕获大量错误。对于某些应用程序来说，你可以使用 Flow 或 TypeScript 等 JavaScript 扩展来对整个应用程序做类型检查。但即使你不使用这些扩展，React 也内置了一些类型检查的功能。

PropTypes 提供一系列验证器，可用于确保组件接收到的数据类型是有效的。在本例中, 我们使用了 PropTypes.string。当传入的 prop 值类型不正确时，JavaScript 控制台将会显示警告。出于性能方面的考虑，propTypes 仅在开发模式下进行检查。

自 React v15.5 起，React.PropTypes 已移入另一个包中。请使用 prop-types 库 代替。由于 TypeScript 的出现，使得 PropTypes 显得相当过时了。

	// Before (15.4 and below)
	import React from 'react';

	class Component extends React.Component {
	  render() {
	    return <div>{this.props.text}</div>;
	  }
	}

	Component.propTypes = {
	  text: React.PropTypes.string.isRequired,
	}

	// After (15.5)
	import React from 'react';
	import PropTypes from 'prop-types';

	class Component extends React.Component {
	  render() {
	    return <div>{this.props.text}</div>;
	  }
	}

	Component.propTypes = {
	  text: PropTypes.string.isRequired,
	};

使用 JavaScript 时要在组件的 props 上进行类型检查，你只需配置特定的 propTypes 属性：

	import React from 'react';
	import PropTypes from 'prop-types';

	class Greeting extends React.Component {
	    render() {
	    return (
	        <h1>Hello, {this.props.name}</h1>
	    );
	    }
	}

	Greeting.defaultProps = {
	    name: 'Stranger[default value]'
	};

	Greeting.propTypes = {
	    name: PropTypes.string
	};

	export default Greeting;

在此示例中，我们使用的是 class 组件，但是同样的功能也可用于函数组件，或者是由 React.memo/React.forwardRef 创建的组件。

在 TypeScript 不支持直接通过类访问 defaultProps 或者 propTypes 来赋值以设置默认属性，因为 React.Component 类型上并没有这些属性。

	// ?Property 'defualtProps' does not exist on type 'typeof Greeting'.ts(2339)
	Greeting.defualtProps = {
	  name: "stranger",
	};

可以将这些属性移入 Greeting 组件内部作为成员定义：

	public static defaultProps: {
	    name: "Demo Value"
	}

上面虽然实现了通过 defaultProps 来指定属性的默认值，但和 Props 没有关联上，以至于可以在 defaultProps 里面放任何值，显然这是不科学的。

可以使用 Partial 类型将 defaultProps 声明为 Props 类型的子集：

	interface Props {
	    name: string
	    more: boolean
	}

	public static defaultProps: Partial<Props> = {
	    more: true
	};


在 TypeScript 中使用 PropTypes 验证组件类属性的完整示范：

	import React from 'react';
	import PropTypes from 'prop-types';

	interface IProps {
	    name: string
	}

	class Greeting extends React.Component<IProps, {}> {
	    static propTypes = {
	        name: PropTypes.oneOf(['Fox', 'Ape'])
	    }

	    static defaultProps: Partial<IProps> = { 
	        name: "world",
	        // age: "Dr."
	    }

	    render() {
	        return (
	            <h1>Hello, {this.props.name}</h1>
	        );
	    }
	}

	export default Greeting;

React 提供了函数式组件的内部定义，React 16.7 - React.SFC 是过时 API，React.FC 相对 React.SFC 是更新的 API，可以替换使用，本质上是 Hooks 函数。请注意 React.SFC 是 React.StatelessComponent 的别名，React.FC 是 React.FunctionComponent 的别名。 

	const example: React.StatelessComponent<IExample> = ({propsType}) => ();
	const example: React.SFC<IExample> = ({propsType}) => ();

	const example: React.FunctionComponent<IExample> = ({propsType}) => ();
	const example: React.FC<IExample> = ({propsType}) => ();

参考组件类型定义文件相关部分，其中 PropsWithChildren 会给函数组件传入 children 即子节点参数：

    /**
     * @deprecated as of recent React versions, function components can no
     * longer be considered 'stateless'. Please use `FunctionComponent` instead.
     *
     * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
     */
    type SFC<P = {}> = FunctionComponent<P>;

    /**
     * @deprecated as of recent React versions, function components can no
     * longer be considered 'stateless'. Please use `FunctionComponent` instead.
     *
     * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
     */
    type StatelessComponent<P = {}> = FunctionComponent<P>;

    type FC<P = {}> = FunctionComponent<P>;

    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
        propTypes?: WeakValidationMap<P>;
        contextTypes?: ValidationMap<any>;
        defaultProps?: Partial<P>;
        displayName?: string;
    }

    type PropsWithChildren<P> = P & { children?: ReactNode };


使用新式的 FunctionComponent 就可以简化 defaultProps 的使用：

	interface PageProps {
	  foo?: string;
	  bar: number;
	}

	const PageComponent: FunctionComponent<PageProps> = (props) => {
	  return (
	    <span>Hello, {props.foo}, {props.bar}</span>
	  );
	};

	PageComponent.defaultProps = {
	  foo: "default"
	};

给函数式组件设置属性：

	import React from 'react';
	import PropTypes from 'prop-types';

	interface IProps {
	  name?: string
	}

	// const App = ({name}: IProps) => {
	const App:React.FC<IProps> = ({ name }) => {
	  return (<div style={{fontSize: 32, textAlign: 'center'}}>Hi, {name}</div>);
	}

	App.displayName = 'App';
	App.defaultProps = {
	  name: "Applications",
	};
	App.propTypes = {
	    name: PropTypes.oneOf(["App", "Application"]),
	};

	export default App;

使用 ES6 的对象扩展运算符 ...rest 也可以将默认参数对象合并到属性中：

	props = { ...defaultProps, ...props }


prop-types 定义文件参考：

	// Type definitions for prop-types 15.7
	// Project: https://github.com/reactjs/prop-types, https://facebook.github.io/react
	// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
	//                 Ferdy Budhidharma <https://github.com/ferdaber>
	//                 Sebastian Silbermann <https://github.com/eps1lon>
	// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
	// TypeScript Version: 2.8

	export type ReactComponentLike =
	    | string
	    | ((props: any, context?: any) => any)
	    | (new (props: any, context?: any) => any);

	export interface ReactElementLike {
	    type: ReactComponentLike;
	    props: any;
	    key: string | number | null;
	}

	export interface ReactNodeArray extends Array<ReactNodeLike> {}

	export type ReactNodeLike =
	    | {}
	    | ReactElementLike
	    | ReactNodeArray
	    | string
	    | number
	    | boolean
	    | null
	    | undefined;

	export const nominalTypeHack: unique symbol;

	export type IsOptional<T> = undefined extends T ? true : false;

	export type RequiredKeys<V> = { [K in keyof V]-?: Exclude<V[K], undefined> extends Validator<infer T> ? IsOptional<T> extends true ? never : K : never }[keyof V];
	export type OptionalKeys<V> = Exclude<keyof V, RequiredKeys<V>>;
	export type InferPropsInner<V> = { [K in keyof V]-?: InferType<V[K]>; };

	export interface Validator<T> {
	    (props: { [key: string]: any }, propName: string, componentName: string, location: string, propFullName: string): Error | null;
	    [nominalTypeHack]?: {
	        type: T;
	    };
	}

	export interface Requireable<T> extends Validator<T | undefined | null> {
	    isRequired: Validator<NonNullable<T>>;
	}

	export type ValidationMap<T> = { [K in keyof T]?: Validator<T[K]> };

	export type InferType<V> = V extends Validator<infer T> ? T : any;
	export type InferProps<V> =
	    & InferPropsInner<Pick<V, RequiredKeys<V>>>
	    & Partial<InferPropsInner<Pick<V, OptionalKeys<V>>>>;

	export const any: Requireable<any>;
	export const array: Requireable<any[]>;
	export const bool: Requireable<boolean>;
	export const func: Requireable<(...args: any[]) => any>;
	export const number: Requireable<number>;
	export const object: Requireable<object>;
	export const string: Requireable<string>;
	export const node: Requireable<ReactNodeLike>;
	export const element: Requireable<ReactElementLike>;
	export const symbol: Requireable<symbol>;
	export const elementType: Requireable<ReactComponentLike>;
	export function instanceOf<T>(expectedClass: new (...args: any[]) => T): Requireable<T>;
	export function oneOf<T>(types: ReadonlyArray<T>): Requireable<T>;
	export function oneOfType<T extends Validator<any>>(types: T[]): Requireable<NonNullable<InferType<T>>>;
	export function arrayOf<T>(type: Validator<T>): Requireable<T[]>;
	export function objectOf<T>(type: Validator<T>): Requireable<{ [K in keyof any]: T; }>;
	export function shape<P extends ValidationMap<any>>(type: P): Requireable<InferProps<P>>;
	export function exact<P extends ValidationMap<any>>(type: P): Requireable<Required<InferProps<P>>>;

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param typeSpecs Map of name to a ReactPropType
	 * @param values Runtime values that need to be type-checked
	 * @param location e.g. "prop", "context", "child context"
	 * @param componentName Name of the component for error messages
	 * @param getStack Returns the component stack
	 */
	export function checkPropTypes(typeSpecs: any, values: any, location: string, componentName: string, getStack?: () => any): void;

	/**
	 * Only available if NODE_ENV=production
	 */
	export function resetWarningCache(): void;




## Code-Splitting & Lazy 代码分割与懒加载
- Code-Splitting https://reactjs.org/docs/code-splitting.html#reactlazy
- Webpack’s guide on code splitting https://webpack.js.org/guides/code-splitting/

几乎所有打包工具都有 Bundling 打包的基本概念，如 Webpack, Rollup 或 Browserify，将所有相关导入的资源整合到一个打包文件中管理，即 bundle 文件。

甚至整个应用都可以打包到一个文件：

	// app.js
	import { add } from './math.js';

	console.log(add(16, 26)); // 42


	// math.js
	export function add(a, b) {
	  return a + b;
	}

打包成 Bundle:

	function add(a, b) {
	  return a + b;
	}

	console.log(add(16, 26)); // 42

对于小应用这是完全没有问题的，但大型工程这样做可能会产生一个十几或几十 MB 的文件，这会给加载带来极大的问题，因此需要进行模块分割和延后加载。

从 import() 方法可以较好理解如何进行代码分割：

	// Before:
	import { add } from './math';

	console.log(add(16, 26));


	// After:
	import("./math").then(module => {
	  console.log(module.add(16, 26));
	});

如果导出中使用了默认导出，那么 import 获取到的模块就会带有 module.default 属性：

	export default let title:string = "Hi";


React 提供的 lazy 方法可以实现延后加载，通过它加载那些不急着使用的组件：

	import OtherComponent from './OtherComponent';

	const OtherComponent = React.lazy(() => import('./OtherComponent'));

而这些被延后加载的组件需要使用 Suspense 组件包装起来，表示要对它们进行代码分割，它们将进行独立打包：

	import React, { Suspense } from 'react';

	const OtherComponent = React.lazy(() => import('./OtherComponent'));
	const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

	function MyComponent() {
	  return (
	    <>
	      <Suspense fallback={<div>Loading...</div>}>
	        <section>
	          <OtherComponent />
	          <AnotherComponent />
	        </section>
	      </Suspense>
	    </>
	  );
	}

可以给 Suspense fallback 属性传入一个组件，用来呈现加载的等待过程。另外，如何要使用 Error Boundary 组件进行错误处理，请将 Suspense 放置在错误边界组件内。

代码分割还可以结合 React Router 路由使用：

	import React, { Suspense, lazy } from 'react';
	import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

	const Home = lazy(() => import('./routes/Home'));
	const About = lazy(() => import('./routes/About'));

	const App = () => (
	  <Router>
	    <Suspense fallback={<div>Loading...</div>}>
	      <Switch>
	        <Route exact path="/" component={Home}/>
	        <Route path="/about" component={About}/>
	      </Switch>
	    </Suspense>
	  </Router>
	);

设置分割点应该合理，不能将一部分分割得很大，另一部又很小，这样不能合理利用加载能力。

React.lazy 目前只支持默认导出的对象，如果要导入命名导出的对象，可以创建一个中间模块，将其包装为默认导出：

	// ManyComponents.js
	export const MyComponent = /* ... */;
	export const MyUnusedComponent = /* ... */;

	// MyComponent.js
	export { MyComponent as default } from "./ManyComponents.js";

	// MyApp.js
	import React, { lazy } from 'react';
	const MyComponent = lazy(() => import("./MyComponent.js"));


React lazy 源代码实现参考 ReactLazy.js 文件，其在内部是一个 LazyComponent 组件。

ExoticComponent 外感组件：

    interface ExoticComponent<P = {}> {
        /**
         * **NOTE**: Exotic components are not callable.
         */
        (props: P): (ReactElement|null);
        readonly $$typeof: symbol;
    }

    interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
        displayName?: string;
    }

    interface ProviderExoticComponent<P> extends ExoticComponent<P> {
        propTypes?: WeakValidationMap<P>;
    }


    // will show `Memo(${Component.displayName || Component.name})` in devtools by default,
    // but can be given its own specific name
    type MemoExoticComponent<T extends ComponentType<any>> = NamedExoticComponent<ComponentPropsWithRef<T>> & {
        readonly type: T;
    };

    function memo<P extends object>(
        Component: SFC<P>,
        propsAreEqual?: (prevProps: Readonly<PropsWithChildren<P>>, nextProps: Readonly<PropsWithChildren<P>>) => boolean
    ): NamedExoticComponent<P>;

    function memo<T extends ComponentType<any>>(
        Component: T,
        propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean
    ): MemoExoticComponent<T>;

    type LazyExoticComponent<T extends ComponentType<any>> = ExoticComponent<ComponentPropsWithRef<T>> & {
        readonly _result: T;
    };

    function lazy<T extends ComponentType<any>>(
        factory: () => Promise<{ default: T }>
    ): LazyExoticComponent<T>;


## StrictMode 严格模式
- https://reactjs.org/docs/strict-mode.html

严格模式是使用 StrictMode 组件来突出显示应用程序中潜在问题的工具，与 Fragment 组件一样，StrictMode 组件不会呈现任何可见的 UI 元素，它为其子代激活检查和警告功能，并且这功能只在开发过程中有效。

	import React from 'react';

	function ExampleApplication() {
	  return (
	      <React.StrictMode>
	        <div>
	          <ComponentOne />
	          <ComponentTwo />
	        </div>
	      </React.StrictMode>
	  );
	}

StrictMode 只对子组件有效，这里指的就是 ComponentOne 和 ComponentTwo，还包含它们的子组件。

StrictMode 当前实现的功能：

- Identifying components with unsafe lifecycles
- Warning about legacy string ref API usage
- Warning about deprecated findDOMNode usage
- Detecting unexpected side effects
- Detecting legacy context API

React 的升级对组件的生命周期函数结构进行了调整，在激活严格模式后，会针对使用不当的 Life Cycle 函数进行提醒和警告。


为使用传统 API 时提供警告信息，如 string ref API 和 callback API 两种过时的引用方法，尽管它它们用来方便，但是不良反应多，所以官方不推荐使用，而是在 React 16.3 大量添加了第三种选择来替代传统的 API：

```ts
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}
```


过去 React 支持 findDOMNode 来实现查找和引用 DOM 树的节点，但是这种做法对整个应用的抽象结构处理不好。它只是一次执行的方法，如果节点更新，那没有办法处理这种变动。

替代方法是使用引用转发 ref forwarding：

```s
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    return <div ref={this.wrapper}>{this.props.children}</div>;
  }
}
```


在侦测意外副作用上面，概念上，React 涉及两方面的工作：

- render 渲染过程，确定什么变动了，React 调用渲染函数，然后和前面的 render 返回值比较差别；
- commit 提交过程，React 提供变动时发生，以 React DOM 来说就是 React 执行 inserts, updates, removes 等 DOM 操作。

提交过程通常很快速，这一过程会调用 componentDidMount 和 componentDidUpdate 等生命周期函数。

但渲染可能很慢，因此，即将到来的并发模式，默认情况下尚未启用，Reconciliation 协调器将渲染工作分解为多个部分，可以暂停、继续工作以避免阻塞浏览器。这意味着 React 可能会在提交之前多次调用呈现阶段的生命周期函数，也可能会在根本不提交的情况下调用它们，由于错误或更高优先级的中断。

Render 阶段的生命周期函数如下：

- constructor
- componentWillMount (or UNSAFE_componentWillMount)
- componentWillReceiveProps (or UNSAFE_componentWillReceiveProps)
- componentWillUpdate (or UNSAFE_componentWillUpdate)
- getDerivedStateFromProps
- shouldComponentUpdate
- render
- setState updater functions (the first argument)

因为它们可能被多次调用，所以不能有副作用 side-effects，多次调用结果应该一致。忽略这一点可能导致严重问题，如果内存泄漏和无效的应用状态。

不幸的是，很难发现这些问题，因为它们往往是不确定的。StrictMode 也不能自动侦测到副作用，但它可以提高一点确定性以帮助聚集问题。这一过程可能会此引用以下方法的二次调用 double-invoking，这也是为何在开发过程中会出现多次执行构造函数的现象：

- Class component constructor, render, and shouldComponentUpdate methods
- Class component static getDerivedStateFromProps method
- Function component bodies
- State updater functions (the first argument to setState)
- Functions passed to useState, useMemo, or useReducer

示例代码：

```ts
class TopLevelRoute extends React.Component {
  constructor(props) {
    super(props);

    SharedApplicationState.recordEvent('ExampleComponent');
  }
}
```

乍一看，这段代码似乎没有问题，但如果 SharedApplicationState.recordEvent 不是幂等的 idempotent，则多次实例化此组件可能会导致无效的应用程序状态。这种微妙的 bug 可能不会在开发过程中表现出来，可能会前后不一致，因此被忽略。通过有意地双重调用组件构造函数这样的方法，StrictMode 使得这样的问题更容易发现。

从 React 17 开始自动修改控制台方法，如 console.log() 以在对生命周期函数的第二次调用中关闭日志。但是，在某些情况下，如果可以使用变通方法处理 console 对象，则可能会有期望外的行为。


此外，严格模式检查过时的 Context API 提示，因为传统的上下文 API 容易出错，会在后期主要的版本中移去，但在 16.x 发布版本中仍可以使用。





## HOC 高阶组件
- [React 高阶组件](https://react.docschina.org/docs/higher-order-components.html)
- [react进阶系列：高阶组件详解（一）](https://segmentfault.com/a/1190000009937019)
- [为什么 withRouter 高阶组件应该 处于最外层？](https://zhuanlan.zhihu.com/p/36895827)
- [深入理解 React 高阶组件](https://zhuanlan.zhihu.com/p/24776678)


高阶组件 HOC - High Order Components 是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

具体而言，高阶组件是参数为组件，返回值为新组件的函数，这就是高阶组件，即不管参数输入什么类型的数据，输出保持同样类型数据。

	const EnhancedComponent = higherOrderComponent(WrappedComponent);

组件是将 Props 转换为 UI，而高阶组件是将组件转换为另一个组件。你可以想象，在一个大型应用程序中，这种订阅 DataSource 和调用 setState 的模式将一次又一次地发生。我们需要一个抽象，允许我们在一个地方定义这个逻辑，并在许多组件之间共享它。这正是高阶组件擅长的地方。

请注意，HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用，即零耦合。被包装组件接收来自容器组件的所有 prop，同时也接收一个新的用于 render 的 data prop。HOC 不需要关心数据的使用方式或原因，而被包装组件也不需要关心数据是怎么来的。


面向切面编程 AOP - Aspect-Oriented Programming 是一种编程范式，他通过允许分离程序的交叉关注点 Cross-Cutting Concerns，用来增强程序的模块性，他是对面向对象编程的一种补充。通过 AOP 我们可以减少代码的重复，使程序的业务逻辑清晰，减少系统间的依赖。面向切面编程需要把程序的业务逻辑拆分为不同的部分（distinct part），这些不同的部分也叫关注点。

HOC 解决横切关注点问题，旧式使用 mixins 来解决横切关注点相关的问题，但要意识到 mixins 会产生更多麻烦。


组件是 React 中代码复用的基本单元，但你会发现某些模式并不适合传统组件。例如，假设有一个 CommentList 组件，它订阅外部数据源，用以渲染评论列表：

```ts
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
```

稍后，编写了一个用于订阅单个博客帖子的组件，该帖子遵循类似的模式：

```ts
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}
```

`CommentList` 和 `BlogPost` 不同 - 它们在 `DataSource` 上调用不同的方法，且渲染不同的结果。但它们的大部分实现都是一样的：

- 在挂载时，向 `DataSource` 添加一个更改侦听器。
- 在侦听器内部，当数据源发生变化时，调用 setState。
- 在卸载时，删除侦听器。

你可以想象，在一个大型应用程序中，这种订阅 `DataSource` 和调用 setState 的模式将一次又一次地发生。我们需要一个抽象，允许我们在一个地方定义这个逻辑，并在许多组件之间共享它，这正是高阶组件擅长的地方。


对于订阅了 `DataSource` 的组件，比如 `CommentList` 和 `BlogPost`，我们可以编写一个创建组件函数。该函数将接受一个子组件作为它的其中一个参数，该子组件将订阅数据作为 prop。

假定高阶函数命名为 `withSubscription`：

```ts
const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
```

第一个参数是被包装组件，第二个参数通过 DataSource 和当前的 props 返回我们需要的数据。

当渲染经过 HoC 封装的 `CommentListWithSubscription` 和 `BlogPostWithSubscription` 时，将向 `CommentList` 和 `BlogPost` 传递一个 data prop，其中包含从 `DataSource` 检索到的最新数据：


```ts
// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
```

请注意，HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。

被包装组件接收来自容器组件的所有 prop，同时也接收一个新的，用于 render 的 data prop。HOC 不需要关心数据的使用方式或原因，而被包装组件也不需要关心数据是怎么来的。

因为 `withSubscription` 是一个普通函数，你可以根据需要对参数进行增添或者删除。例如，您可能希望使 data prop 的名称可配置，以进一步将 HOC 与包装组件隔离开来。或者你可以接受一个配置 `shouldComponentUpdate` 的参数，或者一个配置数据源的参数。因为 HOC 可以控制组件的定义方式，这一切都变得有可能。

与组件一样，`withSubscription` 和包装组件之间的契约完全基于之间传递的 props。这种依赖方式使得替换 HOC 变得容易，只要它们为包装的组件提供相同的 prop 即可。例如你需要改用其他库来获取数据的时候，这一点就很有用。


### 👉 Don’t Mutate the Original Component


不要试图在 HOC 中修改组件原型，或以其他方式改变它，而应该使用组合。

```ts
function logProps(InputComponent) {
  InputComponent.prototype.componentDidUpdate = function(prevProps) {
    console.log('Current props: ', this.props);
    console.log('Previous props: ', prevProps);
  };
  // 返回修改过的组件
  return InputComponent;
}
// 每次调用 logProps 时，增强组件都会有 log 输出。
const EnhancedComponent = logProps(InputComponent);
```

这样做会产生一些不良后果，其一是输入组件再也无法像 HOC 增强之前那样使用了。更严重的是，如果你再用另一个同样会修改 componentDidUpdate 的 HOC 增强它，那么前面的 HOC 就会失效！同时，这个 HOC 也无法应用于没有生命周期的函数组件。

修改传入组件的 HOC 是一种糟糕的抽象方式，调用者必须知道他们是如何实现的，以避免与其他 HOC 发生冲突。


恰当的做法是使用组合的方式，通过将组件包装在容器组件中实现功能：

```ts
function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}
```

该 HOC 的实现比前面修改传入组件的 HOC 虽然功能相同，但是避免了出现冲突的情况，而且适用于 class 组件和函数组件，而且因为它是一个纯函数，它可以与其他 HOC 组合，甚至可以与其自身组合。

注意 HOC 与容器组件模式之间有相似之处，容器组件担任将高级、低级关注点分离的责任，由容器管理订阅和状态，并将 prop 传递给处理 UI 的组件。HOC 使用容器作为其实现的一部分，你可以将 HOC 视为参数化容器组件。


### 👉 Convention: Pass Unrelated Props Through to the Wrapped Component

约定：将不相关的 props 传递给被包裹的组件，这种约定保证了 HOC 的灵活性以及可复用性。

HOC 为组件添加特性，自身不应该大幅改变约定，HOC 返回的组件与原组件应保持类似的接口。

HOC 应该透传与自身无关的 props。

大多数 HOC 都应该包含一个类似于下面的 render 方法：

```ts
render() {
  // Filter out extra props that are specific to this HOC and shouldn't be
  // passed through
  const { extraProp, ...passThroughProps } = this.props;

  // Inject props into the wrapped component. These are usually state values or
  // instance methods.
  const injectedProp = someStateOrInstanceMethod;

  // Pass props to wrapped component
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```

### 👉 Convention: Maximizing Composability

所有 HOC 并非都一样，有时候它仅接受一个参数，也就是被包裹的组件：

	const NavbarWithRouter = withRouter(Navbar);

HOC 通常可以接收多个参数，比如在 Relay 中，HOC 额外接收了一个配置对象用于指定组件的数据依赖：

	const CommentWithRelay = Relay.createContainer(Comment, config);

最常见的 HOC 签名如下：

	// React Redux's `connect`
	const ConnectedComment = connect(commentSelector, commentActions)(CommentList);

这里发生了什么？如果你把括号分开，就会更容易看出发生了两次函数调用。

换句话说，connect 是一个返回高阶组件的高阶函数！

这种形式可能看起来令人困惑或不必要，但它有一个有用的属性。 像 connect 函数返回的单参数 HOC 具有签名 Component => Component。 输出类型与输入类型相同的函数很容易组合在一起。

而不是以下这样：

	// Instead of doing this...
	const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))

你可以编写组合工具函数

	// ... you can use a function composition utility
	// compose(f, g, h) is the same as (...args) => f(g(h(...args)))
	const enhance = compose(
	  // These are both single-argument HOCs
	  withRouter,
	  connect(commentSelector)
	)
	const EnhancedComponent = enhance(WrappedComponent)


使用元编程允许 connect 和其他 HOC 承担装饰器的角色，@connect 这样直接放在要调用的函数前一行，装饰器是一个实验性的 JavaScript 提案，但在其它语言特别是 Java、Python 等非常流行。

许多第三方库都提供了 compose 工具函数，包括 lodash，比如 lodash.flowRight，还有 Redux 和 Ramda。



### 👉 HoC 其它注意事项


提示，将 Display Name 包装在 HoC 组件内，这样可以显示在 DevTools 面板上，方便调试使用。

```ts
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {/* ... */}
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return WithSubscription;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
```


高阶组件有一些需要注意的地方，对于 React 新手来说可能并不容易发现。

不要在 render 方法中使用 HOC， 因为 React 的 diff 算法即协调器使用组件标识来确定它是应该更新现有子树，还是将其丢弃并挂载新子树。如果从 render 返回的组件与前一个渲染中的组件相同，使用 === 比较得到完全相同，则 React 通过将子树与新子树进行区分来递归更新子树。 如果它们不相等，则完全卸载前一个子树。

通常，你不需要考虑这点。但对 HOC 来说这一点很重要，每次调用 render 函数都会创建一个新的，这代表着你不应在组件的 render 方法中对一个组件应用 HOC：

```ts
render() {
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  return <EnhancedComponent />;
}
```

这不仅仅是性能问题 - 重新挂载组件会导致该组件及其所有子组件的状态丢失。

如果在组件之外创建 HOC，这样一来组件只会创建一次。因此，每次 render 时都会是同一个组件。一般来说，这跟你的预期表现是一致的。

在极少数情况下，你需要动态调用 HOC。你可以在组件的生命周期方法或其构造函数中进行调用。


务必复制静态方法！ 

有时在 React 组件上定义静态方法很有用，例如，Relay 容器暴露了一个静态方法 getFragment 以方便组合 GraphQL 片段。

但是，当你将 HOC 应用于组件时，原始组件将使用容器组件进行包装，这意味着新组件没有原始组件的任何静态方法。

```ts
// Define a static method
WrappedComponent.staticMethod = function() {/*...*/}
// Now apply a HOC
const EnhancedComponent = enhance(WrappedComponent);

// The enhanced component has no static method
typeof EnhancedComponent.staticMethod === 'undefined' // true
```


解决方法是，在返回之前把这些方法拷贝到容器组件上：

```ts
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  // Must know exactly which method(s) to copy :(
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
}
```


但要这样做，你需要知道哪些方法应该被拷贝。你可以使用 hoist-non-react-statics 自动拷贝所有非 React 静态方法:

```ts
import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
}

```


除了导出组件，另一个可行的方案是再额外导出这个静态方法。

```js
// Instead of...
MyComponent.someFunction = someFunction;
export default MyComponent;

// ...export the method separately...
export { someFunction };

// ...and in the consuming module, import both
import MyComponent, { someFunction } from './MyComponent.js';
```


注意，引用 Refs 不会被传递，虽然高阶组件的约定是将所有 props 传递给被包装组件，但这对于 refs 并不适用。因为 ref 实际上并不是一个 prop - 就像 key 一样，它是由 React 专门处理的。如果将 ref 添加到 HOC 的返回组件中，则 ref 引用指向容器组件，而不是被包装组件。

这个问题的解决方案是使用 React 16.3 中引入的引用转发 React.forwardRef API。




### 👉 其它模块的高阶函数介绍

HOC 在 React 的第三方库中很常见，例如 Redux 的 connect 和 Relay 的 createFragmentContainer。

在 React 路由中高阶组件还有元编程 Meta Programming 这样一种写法，@withRouter，效果就是把路由相关的方法通过 Props 传给它包裹的组件的 Props 上，这个过程是编译过程自动处理的。

跟 withRouter(component) 是一个效果，就是加层组件封装，以下列子表示给 Demo 组件外加一个 withRouter 组件包裹起来，这样就可以在 Demo 组件中使用路由了。

	import { createHashHistory } from 'history';
	const history = createHashHistory();
	...
    <ConnectedRouter history={history}>{router()}</ConnectedRouter>

React 做国际化，常用 React-intl , 这个库提供了 React 组件和Api两种方式来格式化日期，数字和字符串等。

	import React, { Component } from 'react';
	import { Link, withRouter } from 'react-router-dom';
	import { FormattedMessage, injectIntl } from 'react-intl';

	@injectIntl
	@withRouter
	export default class Demo extends Component { 
		// User Component ... 

		constructor(props) {
			super(props);
			console.log('Demo constructor...', this.props);
			this.clickHandler = this.clickHandler.bind(this);
		}

		clickHandler = (e) => {
			// 路由跳转
			this.props.history.push('/account/setting');
		}
	}

使用元编程 @withRouter 这种写法，需要安装一个包： 

	cnpm i babel-plugin-transform-decorators-legacy -S

Redux 提供了两个 HOC，connect 和 compose

	connect([mapStateToProps], [mapDispatchToProps], [mergeProps],[options])

mapStateToProps 这里传入的函数允许我们将 store 中的数据作为 props 绑定到组件上。

（1）这个函数的第一个参数就是 Redux 的 store，我们从中摘取了 count 属性。你不必将 state 中的数据原封不动地传入组件，可以根据 state 中的数据，动态地输出组件需要的（最小）属性。

（2）函数的第二个参数 ownProps，是组件自己的 props。有的时候，ownProps 也会对其产生影响。

当 state 变化，或者 ownProps 变化的时候，mapStateToProps 都会被调用，计算出一个新的 stateProps，（在与 ownProps merge 后）更新给组件。

connect 的第二个参数是 mapDispatchToProps，它的功能是，将 action 作为 props 绑定到组件上，也会成为 MyComp 的 props。

不管是 stateProps 还是 dispatchProps，都需要和 ownProps merge 之后才会被赋给组件。connect 的第三个参数就是用来做这件事。通常情况下，你可以不传这个参数，connect 就会使用 Object.assign 替代该方法。

	import { connect } from 'react-redux';
	import { compose } from 'redux';

	// ...

	const mapDispatchToProps = {
	  userLogin,
	};

	const mapStateToProps = (state) => {
	  return { loginResult: state.login };
	};

	const withConnect = connect(
	  mapStateToProps,
	  mapDispatchToProps
	);

	const withReducer = injectReducer({ key: 'login', reducer });

	export default compose(
	  withReducer,
	  withConnect
	)(UserLogin);


## Render Prop 模式
- [Render Prop](https://reactjs.org/docs/render-props.html)
- [Render Prop](https://react.docschina.org/docs/render-props.html)
- [PropTypes 类型检查](https://react.docschina.org/docs/typechecking-with-proptypes.html)

实现组件可复用的最好方式，是将组件的 children 放到函数中去，或者利用组件 render 属性，这也是为什么 Render 回调也被称为函数子组件。

重要的是要记住，render 属性是因为这种模式才被称为 Render Prop 模式，不一定要用名为 render 的 prop 来使用这种模式。事实上， 任何被用于告知组件需要渲染什么内容的函数，通过属性来传入，这在技术上都可以被称为 Render Prop，典型的 React Router 就在 Route 组件使用这样的技术。

也可以简单地使用 children 这个默认的 Slot 插槽属性，以下两种方式都是可以的，一个标签内嵌的所有组件都会通过 props.children 属性传入：

	<Mouse children={mouse => (
	  <Cat mouse={mouse} />
	)}/>

	<Mouse>
	  {mouse => (
	    <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>
	  )}
	</Mouse>

在 react-motion 的 API 中看到此技术的应用。由于这一技术的特殊性，当你在设计一个类似的 API 时，你或许会要使用 PropTypes 类型检查，声明 children 的类型应为一个函数。

	Mouse.propTypes = {
	  children: PropTypes.func.isRequired
	};

像 Flow 和 TypeScript 等这些静态类型检查器，可以在运行前识别某些类型的问题。他们还可以通过增加自动补全等功能来改善开发者的工作流程。建议在大型代码库中使用 Flow 或 TypeScript 来代替 PropTypes。

Flow 是一个针对 JavaScript 代码的静态类型检测器。Flow 由 Facebook 开发，经常与 React 一起使用。Flow 通过特殊的类型语法为变量，函数，以及 React 组件提供注解，帮助你尽早地发现错误。

TypeScript 是一种由微软开发的编程语言。它是 JavaScript 的一个类型超集，包含独立的编译器。作为一种类型语言，TypeScript 可以在构建时发现 bug 和错误，这样程序运行时就可以避免此类错误。

关于 render prop 一个有趣的事情是你可以使用带有 render prop 的常规组件来实现大多数高阶组件 (HOC)。 例如，如果你更喜欢使用 withMouse HOC 而不是 `<Mouse>` 组件，你可以使用带有 render prop 的常规 `<Mouse>` 轻松创建一个：

	// 如果你出于某种原因真的想要 HOC，那么你可以轻松实现
	// 使用具有 render prop 的普通组件创建一个！
	function withMouse(Component) {
	  return class extends React.Component {
	    render() {
	      return (
	        <Mouse render={mouse => (
	          <Component {...this.props} mouse={mouse} />
	        )}/>
	      );
	    }
	  }
	}

将 Render Props 与 React.PureComponent 一起使用时要小心。如果你在 render 方法里创建函数，那么使用 render prop 会抵消使用 React.PureComponent 带来的优势。因为浅比较 props 的时候总会得到 false，并且在这种情况下每一个 render 对于 render prop 将会生成一个新的值。每次 `<MouseTracker>` 渲染，它会生成一个新的函数作为 `<Mouse render>` 的 prop，因而在同时也抵消了继承自 React.PureComponent 的 `<Mouse>` 组件的效果！


以下代码来之官方文档，`Mouse` 组件实现鼠标坐标的获取，为了将这种坐标获取的能力应用到其他组件上，如 `Cat` 这个组件，不必将这些组件硬编码到一起，只需要在使用 `Mouse` 组件时在一属性指定需要渲染的组件，在 `Mouse` 组件的 `render` 函数将其渲染。React 推崇的组合编码思想，通过将不同的组件以灵活的组合方式进行整合，既方便对目标组件的功能扩展又方便对组件原有功能的修改。这样在后续的 `Dog`、`Pig` 组件就不需要对 `Mouse` 进行修改了。

Render Prop 的来历：我们可以提供一个带有渲染函数的 `<Mouse>` 组件，它能够动态决定什么需要渲染的，而不是将 `<Cat>` 硬编码到 `<Mouse>`组件里，并有效地改变它的渲染结果。

	class Cat extends React.Component {
	  render() {
	    const mouse = this.props.mouse;
	    return (
	      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
	    );
	  }
	}

	class Mouse extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleMouseMove = this.handleMouseMove.bind(this);
	    this.state = { x: 0, y: 0 };
	  }

	  handleMouseMove(event) {
	    this.setState({
	      x: event.clientX,
	      y: event.clientY
	    });
	  }

	  render() {
	    return (
	      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
	        {/*
	          Instead of providing a static representation of what <Mouse> renders,
	          use the `render` prop to dynamically determine what to render.
	        */}
	        {this.props.render(this.state)}
	      </div>
	    );
	  }
	}

	class MouseTracker extends React.Component {
	  render() {
	    return (
	      <div>
	        <h1>移动鼠标!</h1>
	        <Mouse render={mouse => (
	          <Cat mouse={mouse} />
	        )}/>
	      </div>
	    );
	  }
	}

这项技术使我们共享行为非常容易，要获得这个行为，只要渲染一个带有 render prop 的 `<Mouse>` 组件就能够告诉它当前鼠标坐标 (x, y) 要渲染什么。


## Accessibility 无障碍辅助功能
- https://reactjs.org/docs/accessibility.html
- https://zh-hans.reactjs.org/docs/accessibility.html
- https://www.w3.org/WAI/intro/aria
- https://www.w3.org/WAI/intro/wcag

网络无障碍辅助功能（Accessibility，也被称为 a11y，因为以 A 开头，以 Y 结尾，中间一共 11 个字母）是一种可以帮助所有人获得服务的设计和创造。无障碍辅助功能是使得辅助技术正确解读网页的必要条件。

React 对于创建可访问网站有着全面的支持，而这通常是通过标准 HTML 技术实现的。


网络内容无障碍指南（Web Content Accessibility Guidelines，WCAG） 为开发无障碍网站提供了指南。

下面的 WCAG 检查表提供了一些概览：

- Wuhcag 提供的 WCAG 检查表 https://www.wuhcag.com/wcag-checklist/
- WebAIM 提供的 WCAG 检查表 https://webaim.org/standards/wcag/checklist
- A11Y Project 提供的检查表 https://a11yproject.com/checklist.html


WAI-ARIA 网络无障碍倡议 - 无障碍互联网应用（Web Accessibility Initiative - Accessible Rich Internet Applications） 文件包含了创建完全无障碍 JavaScript 部件所需要的技术。

注意：JSX 支持所有 HTML aria 属性。虽然大多数 React 的 DOM 变量和属性命名都使用驼峰命名（camelCased），但 aria 应该像其在 HTML 中一样使用带连字符的命名法（也叫诸如 hyphen-cased，kebab-case，lisp-case)。

```html
<input
  type="text"
  aria-label={labelText}
  aria-required="true"
  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>
```

### 👉 Semantic HTML 语义化

语义化的 HTML 是无障碍辅助功能网络应用的基础。 利用多种 HTML 元素来强化您网站中的信息通常可以使您直接获得无障碍辅助功能。

有时，语义化的 HTML 会被破坏。比如当在 JSX 中使用 div 元素来实现 React 代码功能的时候，又或是在使用列表（ol， ul 和 dl）和 HTML table 时。 在这种情况下，我们应该使用 React Fragments 来组合各个组件，而避免额外添加节点元素。

举个例子：

```ts
import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
```


和其他的元素一样，你可以把一系列的对象映射到一个 fragment 的数组中。

```ts
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Fragments should also have a `key` prop when mapping collections
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
```


当你不需要在 fragment 标签中添加任何 prop 且你的工具支持的时候，你可以使用 短语法：

```ts
function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}
```


### 👉 Accessible Forms 无障碍表单



### 👉 Focus Control



### 👉 Mouse and pointer events



### 👉 More Complex Widgets



### 👉 Other Points for Consideration



### 👉 Development and Testing Tools






## Fragments 片段元素
- https://reactjs.org/docs/fragments.html


React 中的一个常见模式是一个组件返回多个元素，Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点，就像 Vue 的 Template 标签或微信小程序的 block 标签一样，不渲染任何的 UI 元素。

```ts
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

还有一种新的短语法可用于声明它们。

```ts
class Columns extends React.Component {
  render() {
    return (
      <>
      <ChildA />
      <ChildB />
      <ChildC />
      </>
    );
  }
}
```

使用显式 <React.Fragment> 语法声明的片段可能具有 key，一个使用场景是将一个集合映射到一个 Fragments 数组.

举个例子，创建一个描述列表：

```ts
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

key 是唯一可以传递给 Fragment 的属性。未来我们可能会添加对其他属性的支持，例如事件。




## Portal 组件移位装载
- https://reactjs.org/docs/portals.html
- W3C DOM Level 3 Events https://www.w3.org/TR/DOM-Level-3-Events/

Portal 提供了一种将子节点渲染到现存的父组件以外 DOM 节点的一流方法。

	ReactDOM.createPortal(child, container)

第一个参数 child 是任何可渲染的子元素，例如一个 Element，字符串或 Fragment，第二个参数 container 是一个 DOM 元素。

通常来讲，从组件的 render 方法返回一个元素时，该元素作为子节点挂载到 DOM 节点中，并离其组件父节点最近位置：

```js
render() {
  // React mounts a new div and renders the children into it
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```

有时，在 DOM 不同位置插入子节点是非常有用的：

```js
let domNode = document.getElementById("domNode");

render() {
  // React does *not* create a new div. It renders the children into `domNode`.
  // `domNode` is any valid DOM node, regardless of its location in the DOM.
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

一个典型的用例，是父组件有 overflow: hidden 或 z-index 样式时，子组件不能超父组件范围显示。所以 Portal 可以帮助子组件在视觉上跳出其父组件容器。

注意: 当在使用 portal 时, 记住管理键盘焦点就变得尤为重要。对于模态对话框，通过遵循 WAI-ARIA 模态开发实践，来确保每个人都能够运用它。

在 Portals 中使用事件冒泡 Event Bubbling，首先要明白 DOM 的事件流程模型，参考 React 的事件处理。

浏览器的 DOM 事件触发流程有三个标准流程：

- The capture phase: 事件可捕抓期，事件对象从顶级节点往末端触发事件节点的上级查询 captue 方式注册的事件处理函数；
- The target phase: 如果事件没有被捕抓就进入触发事件的目标注册的事件处理函数；
- The bubble phase: 如果没有处理函数或者处理函数没有指明禁止冒泡，事件就往父级进行冒泡流程，这个过程允许其它父级的节点有机会处理事件；


尽管 portal 可以被放置在 DOM 树中的任何地方，但在其他方面的行为和普通的 React 子节点行为一致。由于 Portal 组件仍存在于 React 组件树中，且与 DOM 树中的位置无关，那么无论其子节点是否是 Portal，像 Context API 这样的功能特性都是不变的，其中就包括事件冒泡流程。

一个从 Portal 组件内部触发的事件，会一直冒泡至包含 React 树的顶层，即便这些元素并不是 DOM 树中的顶层。

假设存在如下 HTML 结构：

```html
<html>
  <body>
    <div id="app-root"></div>
    <div id="modal-root"></div>
  </body>
</html>
```

在 #app-root 里的 Parent 组件即 body 节点能够捕获到未被捕获的从兄弟节点 #modal-root 冒泡上来的事件。


冒泡事件示范，在线运行示范程序 https://codepen.io/gaearon/pen/jGBWpE


```tsx
import React from 'react';
import ReactDOM from 'react-dom';

// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');

// const modalRoot = document.getElementById('modal-root');
const modalRoot = document.createElement('div');
modalRoot.id = 'modal-root';
document.body.appendChild(modalRoot);

class Modal extends React.Component {
  el:HTMLElement
  constructor(props:any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends React.Component<{}, {clicks:number}> {
  constructor(props:any) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div className="board bgDark cLight" onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal board">
      <button>Click</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);
```


对话框、悬浮卡以及提示框示范，在线运行示范程序 https://codepen.io/gaearon/pen/yzMaBd?editors=0010

```jsx
// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

// Let's create a Modal component that is an abstraction around
// the portal API.
class Modal extends React.Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    modalRoot.removeChild(this.el);
  }
  
  render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el,
    );
  }
}

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
  }

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

ReactDOM.render(<App />, appRoot);
```




## Profiler 性能剖析组件
- https://reactjs.org/docs/profiler.html
- https://reactjs.org/docs/hooks-faq.html#how-to-memoize-calculations

Profiler 性能剖析组件用来分析 React 应用的性能，分析时间消耗，主要用来在性能有问题的组件上。

Profiler 会增加一些额外的开销，因此在生产构建中是禁用的，要在构建版本使用剖析功能，React 提供了一个特别的生产版本。

基本用法：

```tsx
let profile:React.ProfilerOnRenderCallback = (id, 
	phase, actualDuration, baseDuration, commitTime, iteractions) => {
  console.log(id, phase, actualDuration, baseDuration, commitTime, iteractions);
}

let Appp = () => (
  <React.Profiler id="Navigation" onRender={profile}>
    <App />
  </React.Profiler>)
```

每个 Profiler 可以设置一个 onRender 回调函数来接收剖析数据，嵌套的就是要被分析的组件。

可以使用多个 Profiler 对不同的部分进行分析，或者进行嵌套的分析：

```tsx
render(
  <App>
    <Profiler id="Panel" onRender={callback}>
      <Panel {...props}>
        <Profiler id="Content" onRender={callback}>
          <Content {...props} />
        </Profiler>
        <Profiler id="PreviewPane" onRender={callback}>
          <PreviewPane {...props} />
        </Profiler>
      </Panel>
    </Profiler>
  </App>
);
```

来看看 onRender 回调函数，它是必需的，当被分析的组件有 commits 或 update 行为时会调用，各个参数意义如下：

```ts
function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
}
```

- **id**: string - 产生分析结果的 Profiler 的 id 属性；
- **phase**: "mount" | "update" - 确定分析发生的阶段，是第一次加载 mount 或者后续更新 update；
- **actualDuration**: number - 当前分析组件更新过程消耗的时间，通常在首次加载后的数据会下降，可以表明使用缓存效果，如 React.memo, useMemo 等；
- **baseDuration**: number - 在 Profiler 树中最近一次所有组件的 render 持续时间。
- **startTime**: number - 当前渲染动作开始的时间戳 Timestamp。
- **commitTime**: number - 提交动作发生的时间戳 Timestamp。
- **interactions**: Set - 包含 interactions 被追踪的交互集合，在更新任务处于计划时，如 render 或 setState 调用时。

Interactions 能用来识别更新是由什么引起的，尽管这个追踪更新的 API 依然是实验性质的。



## Context API 组件通信
- [Context API](https://react.docschina.org/docs/context.html)

在 React 16.3 带来了 Context API，通过它实现在多个组件获取同一组数据, 可以省略通过中间元素传递 Props，直接在需要使用 Context 数据的深层子组件中消费数据。

Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。但请谨慎使用，会增加组件的耦合性，这会使得组件的复用性变差。

如果你只是想避免层层传递一些属性，层层传递这个 Props 就显得非常冗余，组件组合 Component Composition 有时候是一个比 Context 更好的解决方案。

在线运行 03 - Context API Demo https://scrimba.com/scrim/cB32EPsv

	import React from 'react';

	export let NamedColors = [
	    {hex: '#ffe4c4', hsl: 'hsl(255,228,196)', name: 'bisque'},
	    {hex: '#ffebcd', hsl: 'hsl(255,235,205)', name: 'blanchedalmond'},
	    {hex: '#deb887', hsl: 'hsl(222,184,135)', name: 'burlywood'},
	    {hex: '#ff7f50', hsl: 'hsl(255,127,80)' , name: 'coral'},
	    {hex: '#6495ed', hsl: 'hsl(100,149,237)', name: 'cornflowerblue'},
	    {hex: '#b8860b', hsl: 'hsl(184,134,11)' , name: 'darkgoldenrod'},
	    {hex: '#2f4f4f', hsl: 'hsl(47,79,79)'   , name: 'darkslategray'},
	    {hex: '#696969', hsl: 'hsl(105,105,105)', name: 'dimgrey'},
	    {hex: '#daa520', hsl: 'hsl(218,165,32)' , name: 'goldenrod'},
	];

	let setClipData = (ev: React.MouseEvent, color: typeof NamedColors[0]) => {
	    let {name} = color;
	    let css = `
	    .bg_${name} {background-color: ${name};}
	    .c_${name} {color: ${name};}
	    `;
	    navigator.clipboard.writeText(css);
	}

	export let ColorPad = (props:{
	    theme: typeof initTheme
	    className?: string, 
	}) =>{
	    let {hex, name, hsl} = props.theme.color;
	    let textColor = name==="black"? 'white':name;
	    let className = props.className ?? "colorPad col19 board bgLight";
	    return (
	        <div className={className} style={{background: name, margin:12, padding:12}}>
	            <div className="pad" onClick={ev => props.theme.update(props.theme.color)}
	                style={{backgroundColor: hex, cursor: 'pointer', color: textColor, padding: 32}}>&nbsp;</div>
	            <div>hex: {hex}</div>
	            <div>hsl: {hsl}</div>
	            <button className="button-minimal" onClick={(ev)=>setClipData(ev, props.theme.color)}>CC {name}</button>
	        </div>
	    );
	}

	class DeepCC extends React.PureComponent<Partial<Props>>{
	    constructor(props:Partial<Props>) {
	        super(props);
	        // Manually set context type for this.context
	        DeepCC.contextType = contextColor;
	    }

	    render(){
	        let colorValue:typeof initTheme.color = this.context;
	        return (
	        <context.Consumer>
	        {themeValue => (
	        <div className="board bgLight col14">
	            {this.props.children} {new Date().toISOString().substr(13, 9)}
	            <ColorPad theme={{...initTheme, color: colorValue}} className="colorPad" />
	        </div>
	        )}
	        </context.Consumer>
	        )
	    }
	}

	let DeepFC = (props:Partial<Props>) => {
	    return (
	        <context.Consumer>
	        {contextValue => (
	        <div className="board bgLight col15">
	            {props.children} {new Date().toISOString().substr(13, 9)}
	            <ColorPad theme={contextValue} className="colorPad" />
	        </div>
	        )}
	        </context.Consumer>
	    )
	}

	let DeepFcProps = (props:Props) => {
	    return (
	        <div className="board bgLight col15">
	        {props.children} {new Date().toISOString().substr(13, 9)}
	        <ColorPad theme={props.theme} className="colorPad" />
	        </div>
	    )
	}

	let PropsDemo = (props: Props) => {
	    return (
	        <DeepFcProps {...props}>
	        <b>PropsDemo</b>
	        </DeepFcProps>
	    )
	}

	let ContextDemo = (props: Partial<Props>) => {
	    return (
	        <>
	        <DeepFC> <b>ContextDemo 4 DeepFC</b> </DeepFC>
	        <DeepCC> <b>ContextDemo 4 DeepCC</b> </DeepCC>
	        </>
	    )
	}

	let randomColor = ():typeof NamedColors[0] => {
	    return NamedColors[Math.floor(Math.random()*NamedColors.length)];
	}

	type Props = {
	    theme: typeof initTheme
	    children?: any
	}

	const initTheme = {
	    color: {} as typeof NamedColors[0],
	    update: (color: typeof NamedColors[0]) => { console.log(color); }
	}
	const context = React.createContext(initTheme);
	const contextColor = React.createContext(NamedColors[0]);

	context.displayName = "MyRandomColor"; // set display name for DevTools

	let App = () => {
	    const [color, setColor] = React.useState(randomColor())
	    const [bg, setBG] = React.useState(randomColor())
	    const update = () => setColor(randomColor());
	    let theme: typeof initTheme = {color: color, update: (color) => { setBG(color); update(); }};
	    return (
	        <div className="grid">
	        <contextColor.Provider value={NamedColors[0]}>
	        <context.Provider value={theme}>
	            <div className="board col15" style={{color: color.name, background: bg.name}}>
	                <h1>App Panel</h1>
	                <button className="button-minimal" onClick={ ev => update()}>Fresh ChildNode</button>
	                <div>Font:{color.name} Background: {bg.name}</div>
	            </div>
	            <PropsDemo theme={theme} />
	            <ContextDemo />
	        </context.Provider>
	        </contextColor.Provider>
	        </div>
	    )
	}

	export default App;


### 👉 Contexts API

Context API

- React.createContext() 创建上下文对象作为数据源；
- Context.Provider 组件为子组件注入数据；
- 通过在子组件中设置上下文对象类型 Class.contextType 来访问；
- Context.Consumer 组件在子组件中消费数据；
- Context.displayName 设置上下文对象在调试工具中显示的名字；

使用新版本的 useContext Hooks 函数也可以消费上下文传递的数据。


在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于多层级组件类型的属性而言是极其繁琐的，这些属性是应用程序中深层组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 Props。

[Context API] 有两个重要的概念，Provider 和 Consumer。 前者向组件树提供一个全局的数据源，子组件可以订阅它的数据源，即是 Cusumer，不论节点嵌套多深都可以获取到 Provider 提供的数据。

	const MyContext = React.createContext(defaultValue);

创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。这有助于在不使用 Provider 包装组件的情况下对组件进行测试。

注意：将 undefined 传递给 Provider 时，消费组件的 defaultValue 不会生效。

	<MyContext.Provider value={/* 某个值 */}>


每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。

当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

	<MyContext.Consumer>
	  {value => /* 基于 context 值进行渲染*/}
	</MyContext.Consumer>

这里，React 类组件和函数组件都可以订阅到 context 变更，这里使用一个匿名函数式组件作为 Consumer 子元素来消费数据。这个函数接收当前的 context 值，返回一个 React 节点。传递给函数的 value 值等同于组件树上离得最近的 Provider 提供的值。如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue。

注意 ES6 的省略语法，箭头函数语法的多种等价表达：

    {a => <input {...props} value={a} />}
    {(a) => { return <input {...props} value={a} /> } }


可以通过设置类组件的 contextType 来变更要引用 Context 对象：

	class MyClass extends React.Component {
	  componentDidMount() {
	    let value = this.context;
	    /* perform a side-effect at mount using the value of MyContext */
	  }
	  componentDidUpdate() {
	    let value = this.context;
	    /* ... */
	  }
	  componentWillUnmount() {
	    let value = this.context;
	    /* ... */
	  }
	  render() {
	    let value = this.context;
	    /* render something based on the value of MyContext */
	  }
	}
	MyClass.contextType = MyContext;

这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。注意：你只通过该 API 订阅单一 context。


你可以使用 static contextType 这个类属性来初始化：

	class MyClass extends React.Component {
	  static contextType = MyContext;
	  render() {
	    let value = this.context;
	    /* render something based on the value */
	  }
	}


在一些轻量级的应用中，基本上可以使用 [Context API] 解决多级数据共享的问题。如果要更强大，可以使用其它类库，如 Redux。


### 👉 Updating Context from Children

可以修改 Context 对象，但不应该也不能直接改变 context 对象中的属性，同样式出于组件耦合度的考虑。参考 React 官方文档中的示范中的做法，在创建 Context 时，一并定义用于更新状态的回调接口，这样深层组件就可以获得回调来执行自身的更新。这是很好的做法，相比使用全局保存一个状态管理函数的做法更具有低耦合高可维护的特点：

	let State:string, setState:React.Dispatch<React.SetStateAction<string>>;

	let App = () => {
	    [State, setState] = React.useState(initialValue);
	}

官方示范：

	// Make sure the shape of the default value passed to
	// createContext matches the shape that the consumers expect!
	export const ThemeContext = React.createContext({
	  theme: themes.dark,
	  toggleTheme: () => {},
	});

	function ThemeTogglerButton() {
	  // The Theme Toggler Button receives not only the theme
	  // but also a toggleTheme function from the context
	  return (
	    <ThemeContext.Consumer>
	      {({theme, toggleTheme}) => (
	        <button
	          onClick={toggleTheme}
	          style={{backgroundColor: theme.background}}>
	          Toggle Theme
	        </button>
	      )}
	    </ThemeContext.Consumer>
	  );
	}

	class App extends React.Component {
	  constructor(props) {
	    super(props);

	    this.toggleTheme = () => {
	      this.setState(state => ({
	        theme:
	          state.theme === themes.dark
	            ? themes.light
	            : themes.dark,
	      }));
	    };

	    // State also contains the updater function so it will
	    // be passed down into the context provider
	    this.state = {
	      theme: themes.light,
	      toggleTheme: this.toggleTheme,
	    };
	  }

	  render() {
	    // The entire state is passed to the provider
	    return (
	      <ThemeContext.Provider value={this.state}>
	        <ThemeTogglerButton />
	      </ThemeContext.Provider>
	    );
	  }
	}


### 👉 Consuming Multiple Contexts

为了重新渲染更快，React 需要将每个 Consumer 分离到节点树上，以下是消费多个上下文数据对象示范：

	// Theme context, default to light theme
	const ThemeContext = React.createContext('light');

	// Signed-in user context
	const UserContext = React.createContext({
	  name: 'Guest',
	});

	class App extends React.Component {
	  render() {
	    const {signedInUser, theme} = this.props;

	    // App component that provides initial context values
	    return (
	      <ThemeContext.Provider value={theme}>
	        <UserContext.Provider value={signedInUser}>
	          <Layout />
	        </UserContext.Provider>
	      </ThemeContext.Provider>
	    );
	  }
	}

	function Layout() {
	  return (
	    <div>
	      <Sidebar />
	      <Content />
	    </div>
	  );
	}

	// A component may consume multiple contexts
	function Content() {
	  return (
	    <ThemeContext.Consumer>
	      {theme => (
	        <UserContext.Consumer>
	          {user => (
	            <ProfilePage user={user} theme={theme} />
	          )}
	        </UserContext.Consumer>
	      )}
	    </ThemeContext.Consumer>
	  );
	}

### 👉 Contexts Caveats


因为 Context 使用引用标识来确定何时重新呈现，所以当 Provider 的父级重新渲染时，有些陷阱可能会无意触发渲染。

例如，以下代码将在每次 Provider 父级重新渲染时导致 Consumer 重新渲染，因为始终为值创建新对象：

	class App extends React.Component {
	  render() {
	    return (
	      <MyContext.Provider value={{something: 'something'}}>
	        <Toolbar />
	      </MyContext.Provider>
	    );
	  }
	}

解决方法是提升数据到 State 中管理：

	class App extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      value: {something: 'something'},
	    };
	  }

	  render() {
	    return (
	      <Provider value={this.state.value}>
	        <Toolbar />
	      </Provider>
	    );
	  }
	}


## Hooks API 与函数组件
- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- https://reactjs.org/docs/react-api.html#reactmemo
- http://www.ptbird.cn/react-hook-useMemo-purerender.html
- https://kentcdodds.com/blog/usememo-and-usecallback
- React on Github https://github.com/facebook/react/
- React.org on Github https://github.com/reactjs/reactjs.org/
- Flow 静态类型检查器 https://flow.org/en/docs/
- Flow 语法检查器在线 AST 支持 https://flow.org/try/
- React 源码全方位剖析 http://www.sosout.com/2018/08/12/react-source-analysis.html

Hook 是 React 16.8 的新增特性，它可以让你在不编写 class 组件的情况下使用 state 以及其他的 React 特性。具有切片编成的功能 AOP(Aspect Orient Programming)，能将依赖代码放到核心代码的外部，增加编码的灵活性。

可以参考 Wordpress 的 Action 机制，是同类的编程概念。钩子的实现，可以基于回调，在 React 核心代码的合适位置执行回调函数，并提供一个接口供开发者来设置回调，在 React 执行到关键位置时就可以触发开发者设置的回调代码。

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

+ 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
+ 只能在 React 的函数组件中调用 Hook。

基础 Hooks API 有三个：

- **useState** 用于状态数据管理，可以让函数组件实现状态管理，底层就是 useReducer；
- **useEffect** 执行那些需要在 render 之后执行的功能，这些功能称之为副作用，典型的是修改 DOM；
- **useContext** 方便组件嵌套传递属性，可以方便地在子组件中订阅父组件的 Context 属性；

附加 Hooks API 

- **useReducer** 更丰富的状态数据管理，实现比 useState 更复杂的状态管理，类似 Redux 的功能；
- **useCallback** 缓存一个回调函数，只要参数列表中指定的数组参数内容不变，就不会执行封装在内部的回调函数。
- **useMemo** 状态记忆函数用来优化组件刷新流程，只要输入数据没有变化就返回缓存的内容；
- **useRef** 像一个盒子，在其 current 参数中保持引用的组件对象；
- **useImperativeHandle** 在函数组件中向父组件暴露值/方法，以供引用调用；
- **useLayoutEffect** 执行布局副作用操作，会阻塞浏览器绘制；
- **useDebugValue** 在 React DevTools 开发工具面板上显示标签；

所有 Hooks API 的源代码在 ReactHooks.js 文件，其内部执行的是 Dispatcher 的方法 ：

	export function useState<S>(
	  initialState: (() => S) | S,
	): [S, Dispatch<BasicStateAction<S>>] {
	  const dispatcher = resolveDispatcher();
	  return dispatcher.useState(initialState);
	}

	export function useReducer<S, I, A>(
	  reducer: (S, A) => S,
	  initialArg: I,
	  init?: I => S,
	): [S, Dispatch<A>] {
	  const dispatcher = resolveDispatcher();
	  return dispatcher.useReducer(reducer, initialArg, init);
	}

	export function useRef<T>(initialValue: T): {|current: T|} {
	  const dispatcher = resolveDispatcher();
	  return dispatcher.useRef(initialValue);
	}

	export function useEffect(
	  create: () => (() => void) | void,
	  deps: Array<mixed> | void | null,
	): void {
	  const dispatcher = resolveDispatcher();
	  return dispatcher.useEffect(create, deps);
	}

React 的源码利用了 Flow 做了静态类型检查，所以了解 Flow 有助于我们阅读源码，像 useRef 的返回值就使用了 Flow 语法，但和 TypeScript 很相似。

	/* @flow */

	function foo(x: ?number): {|v?: string, o: ?number|} {
	  if (x) {
	    return {o: x};
	  }
	  return {v:"default string", o: x};

	  // Cannot return object literal because property `more` is missing ... [prop-missing]
	  // return {v:"default string", o: x, more: 123};
	}

Flow 的语法中，花括号内加竖线的类型表示一个严格类型，即成员全部显式定义，而不使用竖线表示可以有其它可选成员。

Flow 是 Facebook 开源的静态代码检查工具，它的作用就是在运行代码之前对 React 组件以及 Jsx 语法进行静态代码的检查以发现一些可能存在的问题。在 React v16 Fiber 中的部分 TypeScript 代码只是类型声明文件和测试代码，也就是为了方便利用 TypeScript 写应用的开发者使用 React，给了接口定义和测试样例而已。

React 源代码是使用 Lerna 管理的 monorepo，这个 repository 包含多个 npm 模块。实际上，React 在 npm 上发布的多个模块都来自于同一个 codebase，包括 react、react-dom、react-is……

monorepo VS multirepo 集中管理 vs 多元化，这是两种项目管理理念。通常，当我们的项目不断的迭代更新的时候，我们会根据业务或者是功能又或者是方便复用某些代码模块，把一个大的 codebase 拆成一些独立的 package 或 module，再将这些功能独立的 package 按单独的 repository 维护，此方式可以简单地称为 multiple repositories。而 React 使用的 monorepo 则是一种相反的做法，它提倡将所有的相关 package 都放入一个 repository 来管理。

monorepo 优点

- 一、单个的 lint，build，test 和 release 流程；
- 二、统一的地方处理issue；
- 三、不用到处去找自己项目的repo；
- 四、方便管理版本和dependencies；
- 五、跨项目的操作和修改变得容易；
- 六、方便生成总的changelog。

monorepo 缺点

- 一、repo 的体积变得很大；
- 二、安全问题，如何管理权限。



## ☛ useState 状态管理
- https://reactjs.org/docs/hooks-state.html

useState API 参考：

	// normal initial state
	const [state, setState] = useState(initialState);

	// Lazy initial state
	const [state, setState] = useState(() => {
	  const initialState = someExpensiveComputation(props);
	  return initialState;
	});

	setState(newState);

	setState(prevState => {
	  // Object.assign would also work
	  return {...prevState, ...updatedValues};
	});

用一个计数器示范如何使用 useState：

	import React from 'react';
	import PropTypes from 'prop-types';

	interface IProps {
	  initialCount?: number
	}

	// const App = ({initialCount}: IProps) => {
	const App:React.FC<IProps> = ({ initialCount }) => {
	  const [count, setCount] = React.useState(0)
	  const onClick = () => console.log(count)
	  return (
	    <>
	      Count: {count}
	      <button onClick={() => setCount(initialCount!)}>Reset</button>
	      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
	      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
	    </>
	  );
	}
	App.displayName = 'App';
	App.defaultProps = {
	  initialCount: 0,
	};
	App.propTypes = {
	  initialCount: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
	};

	export default App;

以下将 state 的状态数据在对象中管理，而不是直接使用简单的数值，可以看到设置方法的使用差别，直接传入数据参数和传入一个回调函数是两种基本使用方式：

	import React from 'react';

    interface IProps {
      initialState?: IState
    }

    interface IState {
      value: number
      tag: string
    }

    // const App = ({initialState}: IProps ) => {
    const App:React.FC<IProps> = ({ initialState }) => {
      const [state, setCount] = React.useState(initialState)
      let make = (pv: IState, v:number) => {
        console.log(pv, v);
        return {...pv, ...{value: pv.value + v}};
      }
      return (
        <>
          Count: {state!.value}
          <button onClick={() => setCount(initialState!)}>Reset</button>
          <button onClick={() => setCount(pv => make(pv!, -1))}>-</button>
          <button onClick={() => setCount(pv => make(pv!,  1))}>+</button>
        </>
      );
    }
    App.defaultProps = {
      initialState: {value: 10, tag:"Test"},
    };

	export default App;


接下来，要演示如何使用 useMemo。 先来考虑一个性能问题: 当在一个父组件中调用一个子组件的时候，由于父组件的 state 发生改变导致父组件更新，虽然子组件没有发生改变，但是也会进行更新，造成性能损耗。

使用 class 组件，为了性能优化，经常会选择使用 PureComponent，每次对 props 进行一次浅比较，或者在 shouldComponentUpdate 中进行更深层次的控制。

在 Function 组件中，React 贴心的提供了 React.memo 这个 HOC 高阶函数组件，与 PureComponent 很相似。相比于 PureComponent，React.memo() 可以支持指定一个参数，可以相当于 shouldComponentUpdate 的作用，因此 React.memo() 相对于 PureComponent 来说，用法更加方便。


## ☛ useEffect 副作用
- https://reactjs.org/docs/hooks-effect.html

何为副作用？以下这些都是：

- Network request 数据获取；
- Manual DOM manipulation 手动更改 DOM；
- Event listeners or timeouts and intervals 事件侦听和定时器处理；

用以下这个 Loading 组件也许最能说明什么是 useEffect：

```ts
import {useEffect, useRef} from 'react'

let timer = 0
let index = 0

export let Loading = (props) => {
  let indicator = ['🌑','🌒','🌓','🌔','🌝','🌕','🌖','🌗','🌘','🌚']
  const ref = useRef({})
  useEffect(() => {
    timer = setInterval(() => {
      index = (index+1)%indicator.length
      ref.current.innerHTML = indicator[index] + ' ' + props.text
    }, 300);
    return () => {
      clearInterval(timer)
    };
  })
  return <div ref={ref} className="loading">{indicator[index]} {props.text}</div>
}

export default Loading;
```

这个示例通过 useEffect 设置定时器来实现动态的非组件状态触发的 UI 更新，并且在组件清理阶段会将定时器清除。

使用 useEffect 的意义就是，方便执行那些需要在 render 之后执行的功能。在类组件中，通常会在 componentDidMount 或者 componentDidUpdate 中执行副作用代码。而对于函数式组件，只有借助 useEffect 来做同样的事。

	import React, { useState, useEffect } from 'react';

	function FriendStatus(props) {
	  const [isOnline, setIsOnline] = useState(null);

	  useEffect(() => {
	    function handleStatusChange(status) {
	      setIsOnline(status.isOnline);
	    }
	    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
	    // Specify how to clean up after this effect:
	    return function cleanup() {
	      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
	    };
	  });

	  if (isOnline === null) {
	    return 'Loading...';
	  }
	  return isOnline ? 'Online' : 'Offline';
	}

常用，并不需要执行副作用的清理，如果要做这一步工作，可以在类组件的 componentWillUnmount 事件中或者在函数组件中给 useEffect 指定的函数返回一个清理函数。

和 useCallback 或 useMemo 类似，也可以设置一个依赖数组，React 会分析 Hooks 参数所接收的函数内部依赖了什么数据，只要数据更新就再次执行，useEffect 可以省略依赖列表，其它也可以使用空数组达到省略目的。也可以将可能依赖的数据移到函数外部，这样就可以避免依赖列表不匹配。

	import React, { useState, useEffect } from "react"

	let randomColor = () => {
	    let colors = ['salmon', 'tomato', 'yellow', 'pink', 'cornsilk', 'orchid'];
	    let index = Math.ceil(Math.random() * colors.length);
	    return colors[index];
	}

	let styles = {
	    background: '#333',
	    boxShadow: '2px 2px 3px #222',
	    color: 'white',
	    padding: 32,
	    margin: 32
	}

	function App() {
	    const [count, setCount] = useState(0)
	    const [color, setColor] = useState("")

	    function increment() {
	        setCount(prevCount => prevCount + 1)
	    }

	    function decrement() {
	        setCount(prevCount => prevCount - 1)
	    }

	    useEffect(() => {
	        setColor(randomColor())
	    }, [count])

	    return (
	        <div style={styles}>
	            <h1 style={{ color: color } }> { count } </h1>
	            <button onClick = { increment } > Increment </button>
	            <button onClick = { decrement } > Decrement </button>
	        </div>
	    )
	}

	export default App


## ☛ useContext 上下文传递
- https://reactjs.org/docs/context.html
- https://reactjs.org/docs/hooks-reference.html#usecontext

一般在组件层次中传递参数通过 Props 设置的参数实现，当要传递的层级很，那么就需要这个 API 方便组件嵌套传递属性，可以方便地在子组件中订阅父组件的 Context 属性。

这个 API 需要搭配 createContext 方法使用，并且需要在组件中创建一个 Provider 组件，并且在 Provider 组件中设置要传递的值：

	import { createContext, useContext } from 'react';

	const FooContext = createContext('foo');

	function MyProvider({ children }) {
	  return (
	    <FooContext.Provider value="foo">
	      {children}
	    </FooContext.Provider>
	  );
	}

	// Must be rendered inside a MyProvider instance:

	function MyConsumer() {
	  const foo = useContext(FooContext);

	  return <p>{foo}</p>;
	}

对于多个 Context.Provider 嵌套的情形，可以给内部的子组件设置 contextType 属性为一个指定的 Context 对象，即由 React.createContext() 创建的对象，然后中这个对象的数据就可以通过子组件的 this.context 访问。

	<FooContext.Consumer>
	  {value => /* render something based on the context value */}
	</FooContext.Consumer>


官方文档中的例子的修改：

	import React, { useState, useContext } from "react";

	const themes = {
	  light: {
	    foreground: "#000000",
	    background: "#eeeeee"
	  },
	  dark: {
	    foreground: "#ffffff",
	    background: "#222222"
	  }
	};

	const ThemeContext = React.createContext(themes);

	function App() {
	  return (
	    <ThemeContext.Provider value={themes}>
	      <Toolbar />
	    </ThemeContext.Provider>
	  );
	}

    function Toolbar(props:any) {
      return (
        <div>
        {['snickers', 'skittles', 'twix', 'milky way'].map(it => (
          <ThemedButton caption={it} />
        ))}
        </div>
      );
    }
    interface IProps {
      caption: string
    }
    function ThemedButton({caption}:IProps) {
      const themes:any = useContext(ThemeContext);
      const [name, setTheme] = useState('dark')

      let toggle = () => {
        setTheme((name === 'dark')? 'light':'dark');
      };
      let theme = themes[name];
      return (
        <button onClick={toggle} style={{ background: theme.background, color: theme.foreground }}>
          {caption}
        </button>
      );
    }



API 参考：

	const MyContext = React.createContext(defaultValue);

	<MyContext.Provider value={/* some value */}>

	<MyContext.Consumer>
	  {value => /* render something based on the context value */}
	</MyContext.Consumer>

	// Class.contextType
	class MyClass extends React.Component {
	  componentDidMount() {
	    let value = this.context;
	    /* perform a side-effect at mount using the value of MyContext */
	  }
	  componentDidUpdate() {
	    let value = this.context;
	    /* ... */
	  }
	  componentWillUnmount() {
	    let value = this.context;
	    /* ... */
	  }
	  render() {
	    let value = this.context;
	    /* render something based on the value of MyContext */
	  }
	}
	MyClass.contextType = MyContext;



## ☛ useMemo 缓存对象
- https://reactjs.org/docs/hooks-reference.html#usememo

useMemo API 参考：

	const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

React.memo() 的使用方式：

	function MyComponent(props) {
	  /* render using props */
	}
	function areEqual(prevProps, nextProps) {
	  /*
	  return true if passing nextProps to render would return
	  the same result as passing prevProps to render,
	  otherwise return false
	  */
	}
	export default React.memo(MyComponent, areEqual);

以下示范 useMemo 的应用，只要不点击 Refresh Memory，增减数值不会导致 Board 组件的 useMemo 包装的部分执行。这里只是展示 useMemo 如何通过比较缓存数据来决定执行流程，只要传入的数据数组中没有变化就不会执行没有必要的操作，直接返回缓存内容，还可以用 useMemo 封装组件。假设子组件中的 log 日志打印方法是非常耗时的操作，那么就可以有效地提升了效率：

	import React from 'react';

	const App = () => {
	  const [count, setCount] = React.useState(0);
	  const [msg, setMessage] = React.useState('button');
	  let update = (i:number) => setCount(prev => prev + i);
	  return (
	    <>
	    <h1>{count}</h1>
	    <button onClick={() => update(-1)} > - </button>
	    <button onClick={() => update(+1)} > + </button>
	    <button onClick={() => setMessage(prev=>"Refresh")}>Refresh Memory</button>
	    <Board count={count}>{msg}</Board>
	    </>
	  )
	}

	function Board({ count, children }:any) {
	  let log = (...msg:any)=>console.log(...msg);
	  log('without useMemo', children);
	  const wrap = React.useMemo(()=>log('with useMemo', children), [children]);

	  return (
	    <div><hr/>{count}{children}<hr/></div>
	  )
	}

	export default App;

重新编写，将函数组件返回的组件用 useMemo 封装，并设置更新的最高频度为秒：

	let Board = ({ count, children }:any) => {
	  let stamp = Math.ceil(Date.now()/1000);
	  let log = (...msg:any[])=>{
	    console.log(...msg);
	    return [...msg, stamp];
	  }
	  const wrap = React.useMemo(()=>log('with useMemo', children), [children]);
	  log('without useMemo', children, wrap, stamp);
	  return React.useMemo(()=>(
	    <div><hr/>{count}{wrap}<hr/></div>
	  ), [stamp])
	};

你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。将来，React 可能会选择“遗忘”以前的一些 memoized 值，并在下次渲染时重新计算它们，比如为离屏组件释放内存。先编写在没有 useMemo 的情况下也可以执行的代码，之后再在你的代码中添加 useMemo，以达到优化性能的目的。



## ☛ useCallback 回调缓存
- https://reactjs.org/docs/hooks-reference.html#usecallback

useCallback API 参考：

	function useCallback<T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>): T;

useCallback 使用示范：

	const memoizedCallback = useCallback(
	  () => {
	    doSomething(a, b);
	  },
	  [a, b],
	);

它返回一个缓存好的回调函数，只要参数列表中指定的数组参数内容不变，就不会引起封装在内部的 doSomething 执行。在需要传递回调函数的组件中优化时使用，以避免不必要的渲染操作，类似 shouldComponentUpdate，以下是等价表达式，注意 useMemo 的参数中的匿名函数返回了 fn 函数而不是执行它：

	useCallback(fn, deps)
	useMemo(() => fn, deps)

为了更进一步了解 useCallback 的使用，继续看一个去抖动的例子：


	function jitter(this:any, func:any, delay = 200) {
	  let timer:any;

	  let cancel = function () {
	    if(timer) clearTimeout(timer);
	    timer = null;
	  }
	  let todo = (...args:any[]) => {
	    console.log("do", args);
	    cancel();
	    func.apply(this, ...args);
	    // func.apply({}, ...args);
	  }

	  let jitter = (...args:any[])=>{
	    if(timer) return;
	    timer = setTimeout(todo, delay, args);
	  }
	  return jitter;
	}

	function App() {
	  const [count, setCount] = React.useState(0);
	  const [tick, setTick] = React.useState(0);
	  const jitterLimit = jitter(setTick);

	  const handleMouseMove = () => {
	    setCount(count + 1);
	    jitterLimit(tick + 1);
	  };

	  return (
	    <div onMouseMove={handleMouseMove}
	      style={{padding: 64, background:'#eee' }}>
	      <p>光标运动: {count}</p>
	      <p>防抖处理: {tick}</p>
	    </div>
	  )
	}

鼠标的 onMouseMove 触发是很快的，这里使用一个 HOC 高阶函数 jitter 来封装状态修改函数，以降低触发速率。

但是，这个例子是失败的，因为 App 组件每次更新渲染，都会通过阶函数生成一个新的 jitterLimit，这个问题会导致 timer 定时器不能被正确清除，时间过滤功能就完全失去了意义。

使用 useMemo 或 useCallback 都可以解决这个问题，只需要给它们的依赖传入一个空数组，这样保证 jitter 只执行一次，然后缓存下来供后续使用。

	// const jitterLimit = jitter(setTick);
	// const jitterLimit = React.useCallback(jitter(setTick), []);
	const jitterLimit = React.useMemo(() => jitter(setTick), []);

当然，如果只是去抖动，并不需要做得这样复杂，只需要使用时间的数值作为 useMemo 或 useCallback 的依赖输入，即可达到同样的效果。

为了解决数据在重新渲染过程中失效问题，还可以使用 useRef 函数来持久引用同一个数据。以下示范使用 useRef 来得到一个持久的读秒记录，然后通过它来操控 useMemo 中的 hoc 触发时机：

	import React from 'react';

	interface IProps {
	  initialState: Readonly<IState>
	}
	interface IState {
	  a: number
	  b: number
	}

	function App({initialState}: IProps  = {initialState: {a: 1, b: 1}}) {
	  const [state, setCount] = React.useState(initialState);
	  let stampRef = React.useRef(0);
	  let wrap = (value:number) => {
	    setCount(pv => { 
	      return {...pv, ...{a: pv.a + value}};
	    });
	  }
	  let hoc = () => {
	    console.log("hoc", stampRef);
	    return (v: number) => {
	      let stamp = Math.ceil(Date.now()/1000);
	      // console.log("doit", stampRef, stamp);
	      if(stamp !== stampRef.current) setCount(pv => {
	        stampRef.current = stamp;
	        return {...pv, ...{b: pv.b + v}};
	      });
	    };
	  }
	  const hocSetCountA = React.useCallback(wrap, []);
	  const hocSetCountB = React.useMemo(hoc, [stampRef.current]);

	  let style = { padding: 64, background:'#eee', boxShadow:'1px 1px 2px black', margin: 8 };
	  return (
	    <div>
	      <p onMouseMove={() => hocSetCountA(+1)} style={style}>移动次数[直通]: {state.a}</p>
	      <p onMouseMove={() => hocSetCountB(+1)} style={style}>移动次数[过滤]: {state.b}</p>
	    </div>
	  )
	}

	App.defaultProps = {
	  initialState: {a: 10, b: 1},
	};



## ☛ useReducer 进行状态管理
- https://reactjs.org/docs/hooks-reference.html#usereducer

如果你有一系列的数据，并且想将这些东西拼合，可以使用 Array 的 reduce 函数。 

例如，如果你有一个数字数组并且想得到数组中所有数字的总和，就可以给 reduce 传入一个函数用于此目的，而这个传入的函数就叫做 reducer：

	let numbers = [1, 2, 3];
	let sum = numbers.reduce((total, number) => {
	    return total + number;
	}, 0);

useReducer 参数与 reduce 相同，并且工作方式基本一样，就是用一个 reducer 函数来简化一些操作。

useReducer API 参考：

	const [state, dispatch] = useReducer(reducer, initialArg, init);

如何只是用 useReducer 来计数就太大材小用了，如果要这样用也是可以的：

	const [sum, dispatch] = useReducer((state, acton) => {
	  return state + action
	}, 0);

	dispatch(1);
	dispatch(2);
	dispatch(3);

useReducer 返回一个包含 2 个元素的数组，类似于 useState。 第一个是当前状态，第二个是 dispatch 方法，用来执行 reducer 函数。注意，state 可以是任何值，它不一定是一个对象或一个数字，一个数组，可以是其他任何类型。

尽管 useReducer 是附加的 Hooks API，相比 useState 它功能上更原生，定制性更灵活，换种说法就是使用它需要更多手续，你可以将任何使用 useState 的地方都替换成使用 useReducer。

	const initialState = {count: 0};

	function reducer(state, action) {
	  switch (action.type) {
	    case 'increment':
	      return {count: state.count + 1};
	    case 'decrement':
	      return {count: state.count - 1};
	    default:
	      throw new Error();
	  }
	}

	function Counter() {
	  const [state, dispatch] = useReducer(reducer, initialState);
	  return (
	    <>
	      Count: {state.count}
	      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
	      <button onClick={() => dispatch({type: 'increment'})}>+</button>
	    </>
	  );
	}


以下是 useState 示范代码替换为 useReducer 后的写法：

	interface IAction {
	  type: string
	  value: number
	}

	let reducer = (state:number, action:IAction)=>{
	  switch (action.type) {
	    case 'add':
	      return state + action.value;
	    default:
	      throw new Error();
	  }
	};

	const App = () => {
	  const [count, dispatch] = React.useReducer(reducer, 0);
	  let update = (i:number) => dispatch({type:'add', value:i});
	  return (
	    <>
	    <h1>{count}</h1>
	    <button onClick={() => update(-1)} > - </button>
	    <button onClick={() => update(+1)} > + </button>
	    </>
	  )
	}



## ☛ useRef 引用对象
- https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
- https://reactjs.org/docs/hooks-reference.html#useref
- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
- [React ref 的前世今生](https://zhuanlan.zhihu.com/p/40462264)
- [React refs 的前世今生](http://www.sosout.com/2018/11/30/react-refs.html)


useRef 函数可以引用一个对象实现跨渲染周期持久保存数据。

useRef API 参考：

	const refContainer = useRef(initialValue);
	const refContainer = useRef<T>(initialValue);

useRef 返回一个可变的引用对象保存在 .current 属性中，它的初值就是 initialValue，返回的对象在整个组件生命周期都有效。

以下例子结合 HTML 的 ref 属性来持久引用 input 元素：

	function TextInputWithFocusButton() {
	  const inputEl = useRef(null);
	  const onButtonClick = () => {
	    // `current` points to the mounted text input element
	    let input = inputEl.current! as HTMLInputElement;
	    input.focus();
	  };
	  return (
	    <>
	      <input ref={inputEl} type="text" />
	      <button onClick={onButtonClick}>Focus the input</button>
	    </>
	  );
	}

代码中用 useRef 创建了一个引用对象，并将其赋给了 button 的 ref 属性，这样就可以通过 couterRef.current 访问到 input 对应的 DOM 对象。相似的 createRef 函数每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用。

React 通过声明式的渲染机制把复杂的 DOM 操作抽象成为简单的 state 与 props 操作，将前端工程师从原始的 DOM 操作中拯救出来。尽管我们一再强调在 React 开发中尽量避免 DOM 操作，但在一些场景中仍然无法避免。当然 React 并没有把路堵死，它提供了 ref 用于访问在 render 方法中创建的 DOM 元素或者是 React 组件实例。

引用一般还涉及 DOM 或子组件的交互，调用类组件的公开方法。如果是函数组件，需要配合 useImperativeHandle 来公开方法，供父组件引用调用，一般需要配置 forwardRef 使用。

引用组件或 DOM 节点的方式有以下几种：

- String Refs，这种方式将被废弃，通过组件中的 ref 设置一个字符串来转换成类组件对应的属性；
- Callback Refs，可以使用 useCallback、useMemo 等 API 封装回调函数；
- React.createRef，从 React 16.3 开始；
- React.useRef，从 React 16.3 开始；

示例：

	class MyComponent extends Component {
	  renderRow = (index) => {
	    // This won't work. Ref will get attached to DataTable rather than MyComponent:
	    return <input ref={'input-' + index} />;

	    // This would work though! Callback refs are awesome.
	    return <input ref={input => this['input-' + index] = input} />;
	  }
	 
	  render() {
	    return <DataTable data={this.props.data} renderRow={this.renderRow} />
	  }
	}


以下示范了如何引用子组件并执行子组件的公开方法：

	import React from 'react';

	function App() {
	  const [height, setHeight] = React.useState(0);
	  const [reff, setElement] = React.useState<HTMLInputElement>();

	  const ref = React.useRef<HTMLInputElement>(null);
	  let refc = React.createRef<HTMLInputElement>();
	  
	  React.useEffect(() => {
	    console.log("useEffect", ref, refc, reff);
	    if(ref.current) ref.current.value = "by React.useRef<HTMLInputElement>(null)";
	    if(refc.current) refc.current.value = "by React.createRef<HTMLInputElement>()";
	    if(reff) reff.value = "by ref={functionRef}";
	  });

	  let functionRef = (node: HTMLInputElement) => {
	    setElement(node);
	  }

	  let childRef = (node: Child) => {
	    if(!node) return;
	    console.log('childRef', node);
	    node.setText("ABC");
	    ;
	  }

	  const measuredRef = React.useCallback(node => {
	    if (node !== null) {
	      setHeight(node.getBoundingClientRect().height);
	    }
	  }, []);

	  let style = { 
	    border: '2px solid #ddd', padding: 4, 
	    display: 'block', minWidth: 320, margin: 4, background:'#eee' };

	  return (
	    <>
	      <h1 ref={measuredRef}>Hello, world</h1>
	      <h2>The above header is {Math.round(height)}px tall, and set text below with ABC.</h2>
	      <Child ref={childRef} />
	      <input style={style} onChange={()=>{}} ref={ref} value="useRef(null)"/>
	      <input style={style} onChange={()=>{}} ref={refc} value="createRef"/>
	      <input style={style} onChange={()=>{}} ref={functionRef} value="functionRef"/>
	    </>
	  );
	}

	class Child extends React.Component {
	  state = { text: "" };
	  setText(text = "") {
	    this.setState({ text });
	  }
	  render() {
	    return <p>text: {this.state.text}</p>;
	  }
	}


## ☛ useImperativeHandle & forwardRef
- [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)
- https://reactjs.org/docs/hooks-reference.html#useimperativehandle
- https://github.com/reactjs/rfcs/blob/master/text/0030-ref-forwarding.md

在函数组件中需要配合 useImperativeHandle 来公开方法，供父组件引用调用，一般需要配置 forwardRef 使用：

API 参考：

	useImperativeHandle(ref, createHandle, [deps])

使用示范，在函数式组件中向父组件暴露方法：

	function FancyInput(props, ref) {
	  const inputRef = useRef();
	  useImperativeHandle(ref, () => ({
	    focus: () => {
	      inputRef.current.focus();
	    }
	  }));
	  return <input ref={inputRef} ... />;
	}

	FancyInput = forwardRef(FancyInput);

这个例子中的函数组件在在父组件中使用时，如 `<FancyInput ref={inputRef} />` ，如使用 inputRef.current.focus() 获得访问。


	function Parent() {
	  const ref = useRef(null);

	  return (
	    <>
	      <FancyInput ref={ref} />
	      <button onClick={() => {ref.current && ref.current.focus()}} > Focus on </button>
	    </>
	  );
	}

也可以直接用 forwardRef 封装组件：

	const FancyButton = React.forwardRef((props, ref) => (
	  <button ref={ref} className="FancyButton">
	    {props.children}
	  </button>
	));

	// You can now get a ref directly to the DOM button:
	const ref = React.createRef();
	<FancyButton ref={ref}>Click me!</FancyButton>;






## ☛ useLayoutEffect
- https://github.com/chenglou/react-motion

useLayoutEffect 和 useEffect 函数签名是一致的，但是它会在所有的 DOM 变更之后同步调用，可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新，也就是说它会在浏览器绘制前进行。

所以尽可能使用 useEffect 以避免阻塞视觉更新。

如果要从类组件迁移代码，请注意 useLayoutEffect 与 componentDidMount、 componentDidUpdate 在同一阶段激发。但是，我们建议首先从 useEffect 开始，并且只有在导致问题时才尝试使用 useLayoutEffect。

如果使用服务器呈现，请记住，在下载完 JavaScript 之前，useLayoutEffect 和 useEffect 都不能运行，这是脚本同步加载导致的。这就是为什么当服务器呈现的组件包含 useLayoutEffect 时 React 会发出警告。要解决这个问题，要么将该逻辑移到 useEffect，如果不需要第一次呈现。要么延迟显示该组件，直到客户端呈现之后，如果在 useLayoutEffect 运行之前 HTML 页面看起来已损坏。


将需要从服务器呈现的 HTML 布局效果的组件中排除，请使用有条件地呈现它，并使用 useEffect 延迟显示它。这样，用户界面就不会在融合之前出现破损。

	showChild && <Child />

	useEffect(() => { setShowChild(true); }, [])

总结要点：

- useLayoutEffect 和 componentDidMount、componentDidUpdate 触发时机一致，都在在 DOM 修改后且浏览器渲染之前；
- useLayoutEffect 比 useEffect 更早的触发执行；
- useLayoutEffect 会阻塞浏览器渲染，切记执行同步的耗时操作。

例子演示：


	import React, { useEffect, useLayoutEffect, useRef } from "react";

	let style = {
	    display: 'block',
	    background: 'yellow',
	    padding: 24,
	    margin: 32,
	    marginRight: 'auto',
	    marginLeft: 'auto',
	    // clear: "both",
	    width: 240,
	    height: 140,
	}

	let animate = (obj:any, att: string, start:number, end:number, unit:string) => {
	    let fps = 1000/160, pos = start, diff = start - end, t = 100, dir = start>end? -1:1;
	    let last = Date.now();
	    (function closure(){
	        // time cost task!
	        while(Date.now()<last+fps) ;
	        // console.log("animate", pos, start, end, diff, t, dir);
	        last = Date.now();
	        pos = start - diff*(1 - t--/100);
	        obj[att] = pos+unit;
	        if((dir>0 && pos<end) || (dir<0 && pos>end) ) {
	            closure();
	        }
	    })();
	};

	const UseEffect: React.FC<any> = ({children}) => {
	    const box = useRef<HTMLDivElement>(null);
	    useEffect(() => {
	        let div = box.current!;
	        console.log('useEffect');
	        animate(box.current!.style, 'marginLeft', div.offsetLeft, 100, 'px');
	    }, []);
	    let css = {...style, background: 'cornflowerblue'};
	    return (
	    <div id="useEffect" style={css} ref={box}>
	        {children}
	    </div>
	    );
	};

	const UseLayoutEffect: React.FC<any> = ({children}) => {
	    const box = useRef<HTMLDivElement>(null);
	    useLayoutEffect(() => {
	        let div = box.current!;
	        console.log('useLayoutEffect');
	        animate(box.current!.style, 'marginLeft', div.offsetLeft, 100, 'px');
	    }, []);
	    // style will be immutatble if bind to div.style directly.
	    style.background = 'yellow';
	    return (
	    <div id="useLayout" style={{...style, background: 'yellow'}} ref={box}>{children} </div>
	    );
	};

	export default function App() {
	    return (
	    <div className="App">
	        <UseEffect>刷新观察 useEffect 有移动，因为重绘后才执行定位设置。</UseEffect>
	        <UseLayoutEffect>useLayoutEffect 观察不到移动，因为重绘前定位设置执行完成。</UseLayoutEffect>
	    </div>
	    );
	}


配套的动画样式：

	.animate {
	    /* background-color: #e74c3c; */
	    animation: bg-color 0.21s 3/* infinite */;
	    -webkit-animation: bg-color 0.21s 3/* infinite */;
	}

	@-webkit-keyframes bg-color {
	    0% { background-color: #eee; }
	    20% { background-color: #e0dbc4; }
	    60% { background-color: #e3e7ac; }
	    100% { background-color: #eee; } 
	}

	@keyframes bg-color {
	    0% { background-color: #eee; }
	    20% { background-color: #e0dbc4; }
	    60% { background-color: #e3e7ac; }
	    100% { background-color: #eee; } 
	}




## ☛ useDebugValue

useDebugValue 可以用来在 React DevTools 开发工具面板上显示标签：

	useDebugValue(value)

例如以下 useFriendStatus 组件：

	function useFriendStatus(friendID) {
	  const [isOnline, setIsOnline] = useState(null);

	  // ...

	  // Show a label in DevTools next to this Hook
	  // e.g. "FriendStatus: Online"
	  useDebugValue(isOnline ? 'Online' : 'Offline');

	  return isOnline;
	}

useDebugValue 还接受延后格式化函数作为可选的第二个参数，该函数只有在 Hook 被检查时才会被调用。

	useDebugValue(date, date => date.toDateString());


## Refs & DOM
- Refs and the DOM https://reactjs.org/docs/refs-and-the-dom.html
- Forwarding Refs https://reactjs.org/docs/forwarding-refs.html

React 的引用 Refs 提供了一个方法機制，用來获得 DOM 节点或者在 render 方法中创建的 React 元素。

在典型的 React 数据流中，props 是唯一的父组件与它们的子元素的通信方式。更改子元素，你需要使用新的 props 去重新渲染子元素。但是在一些情况下你现在典型数据流之外强制的更改元素。被更改的子元素可能是一个 React 组件的实例，或者是一个 DOM 元素。对所有这些情况，React 提供了一种特殊方法，它就是 Refs：

- 什么时候使用 Refs

	管理焦点、文本选择、媒体回放
	触发必要动画；
	整合第三方 DOM 库；
	避免对任何可以声明式解决的问题使用 Refs； 
	比如相对于暴露一个对话框组件的 open()、 close() 方法，请優先使用 isOpen prop！

- 不要过度使用 Refs！

    你的第一个倾向可能是使用 Refs 去实现一些APP中的东西。在这种情况下，请停下来，仔细想想 state 应该存在的组件层次。经常地，我们都知道应该由更高的层次去拥有 state。

- 创建 Refs：

	可以通过 React.createRef() 创建 Refs 對象并通过組件標簽的 ref 属性關聯到 React 组件。Refs 通常当组件被實例化创建时被分配给实例变量，这样它们就能在组件中被引用。

		class MyComponent extends React.Component {
			constructor(props) {
				super(props);
				this.myRef = React.createRef();
			}
			render() {
				return <div ref={this.myRef} />;
			}
		}

- 访问 Refs：

	当一个 ref 對象通过 render 放入一个元素中，一个对节点的引用可以通过 ref 的 current 属性得到；

		const node = this.myRef.current;

ref 的值根据节点类型的不同而不同：

- 当 ref 属性用于 HTML 元素，在构造器中通过 React.createRef() 函数创建的 ref 接收底层 DOM 元素作为它的 current 属性；
- 当 ref 属性用于传统的类组件，ref 对象接收挂载好的组件实例作为它的 current；



## ☛ forwardRef 向父组件暴露 DOM
- https://zh-hans.reactjs.org/docs/forwarding-refs.html
- https://reactjs.org/docs/forwarding-refs.html

Forwarding Refs 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。对于大多数应用中的组件来说，这通常不是必需的。但其对某些组件，尤其是可重用的组件库是很有用的。

在很罕见的情况下，你也许想要从父组件访问到子元素的 DOM 节点。通常来说我们不建议这样做，因为这样破坏了组件的封装性，但是在某些情况下对于类似：触发聚焦、改变子元素 DOM 节点的大小、位置等情况非常有用。

你可以向子组件增加 ref，但是这并不是一个完美的解决方案，你只会获得一个组件实例而不是 DOM 节点，更糟糕的是，它对函数式组件没用！

React 16.3 或者更高的版本可以使用引用转发 Ref forwarding 來让组件可以有选择地暴露子组件的 ref。

React 16.2 或者更低的版本，可以使用替代方法，显式的传入一个 ref 当做一个不同命名的 prop。

如果可能，不建议暴露 DOM 节点，但是在一些情况下还是非常有用的。注意，这种方法需要你去在子组件中增加一些代码，如果你完全没有对于子组件实现的控制，你最后的选择是使用 findDOMNode() 方法，当然，也只能这样了。

旧版本中函数组件没有实例引用的，所以没有 this 上下文，不能通过 createRef() 来拿到实例。为了让函数组件获取子组件的 DOM 实例，React 16 引入 React.forwardRef() 方法从而能在父组件获取到子组件的 DOM 实例：

	import React from 'react'

	const Child = React.forwardRef((props, ref)=>{
	  return <div ref={ref}>child div</div>
	})
	
	export default class Parent extends React.Completed{
	  constructor(props){
	    super(props)
	    this.child = React.createRef()
	  }
	
	  componentDidMount(){
	    this.child.current.value='hahhaha'
	  }
	
	  render(){
	    return <Child ref={this.child} />
	  }
	
	}

引用转发 Ref forwading 是一种通过组件向子组件自动传递引用 ref 的技术，对于应用者的大多数组件来说没什么作用。但是对于有些重复使用的组件，可能有用。例如某些 input 组件，需要控制其 focus，本来是可以使用 ref 来控制，但是因为该 input 已被包裹在组件中，这时就需要使用 forwardRef 来透过组件获得该 input 的引用。

在使用 forwardRef 之前，回顾一下 HOC（higher-order component）在 ref 使用上的问题，HOC 的 ref 是无法通过 props 进行传递的，因此无法直接获取被包裹组件 WrappedComponent，需要实现高阶组件的 getWrappedInstance 方法进行中转获取。

在拥有 forwardRef 之后，就不需要再通过了，利用 forwardRef 能直接穿透 HOCComponent 获取到 WrappedComponent。

核心方法是 React.forwardRef，该方法接受一个有额外 ref 参数，并将此 ref 参数注入到生成 React 函数组件中，不调用该方法，普通的组件函数不会获得该 ref 参数。

React.forwardRef 的原理其实非常简单，forwardRef 会生成 React 内部一种较为特殊的 Component。当进行创建更新操作时，会将 forwardRef 组件上的 props 与 ref 直接传递给提前注入的 render 函数来生成 children。



Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递给子组件，换句话说，就是转发它。

在下面的示例中，`FancyButton` 使用 `React.forwardRef` 来获取传递给它的 ref，然后转发到它渲染的 DOM button：

```ts
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

这样，使用 `FancyButton` 的组件可以获取底层 DOM 节点 button 的 ref ，并在必要时访问，就像其直接使用 DOM button 一样。

上述示例发生情况的逐步解释：

- 通过调用 React.createRef 创建了一个 React ref 引用并将其赋值给 ref 常量。
- 通过 JSX 组件属性 ref 将其向下传递给 <FancyButton ref={ref}>。
- FancyButton 内部，即通过 forwardRef 函数封装的内函数的第二个参数传入 (props, ref) 这里面的封装了转发过程。
- 再通过 JSX 属性向下转发该 ref 参数到 `<button ref={ref}>`。
- 当 ref 挂载完成，ref.current 将指向 DOM button 节点。

第二个参数 ref 只在使用 React.forwardRef 封装后注入组件的，常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。

Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。


在组件库中使用 forwardRef 应当将其视为一个破坏性更改，并发布库的一个新的主版本。这是因为你的库可能会有明显不同的行为，例如 refs 被分配给了谁，以及导出了什么类型，并且这样可能会导致依赖旧行为的应用和其他库崩溃。

出于同样的原因，当 React.forwardRef 存在时有条件地使用它也是不推荐的：它改变了你的库的行为，并在升级 React 自身时破坏用户的应用。


转发 refs 这个技巧对高阶组件 HOC 特别有用，从一个输出组件 props 到控制台的 HOC 示例开始：

```ts
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}
```

logProps HOC 透传所有 props 到其包裹的组件，所以渲染结果将是相同的。

需要注意，使用 logProps 封装其它组件时，refs 不会透传下去，这是因为 ref 不是 prop 属性。就像 key 一样，其被 React 进行了特殊处理。如果你对 HOC 添加 ref，该 ref 将引用最外层的容器组件，而不是被包裹的组件。


这意味着用于我们 FancyButton 组件的 refs 实际上将被挂载到 LogProps 组件：


```js
let FancyButton = logProps(SomeButton);

const ref = React.createRef();

// The FancyButton component we imported is the LogProps HOC.
// Even though the rendered output will be the same,
// Our ref will point to LogProps instead of the inner FancyButton component!
// This means we can't call e.g. ref.current.focus()
<FancyButton label="Click Me" handleClick={handleClick} ref={ref} />;
```

而通过使用 React.forwardRef API 明确地将 refs 转发到内部的 FancyButton 组件。React.forwardRef 接受一个渲染函数，其接收 props 和 ref 参数并返回一个 React 节点。

例如：

```ts
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}
```

注意，因为 ref 是保留属性字段，在 LogProps 组件的 JSX 属性中使用普通的字段 forwardedRef 来传递引用。


为方便调试设置 displayName 属性，以下组件将在 DevTools 中显示为 ForwardRef：

	const WrappedComponent = React.forwardRef((props, ref) => {
	  return <LogProps {...props} forwardedRef={ref} />;
	});

如果你命名了渲染函数，DevTools 将显示其名称，例如 ForwardRef(myFunction)：

	const WrappedComponent = React.forwardRef(
	  function myFunction(props, ref) {
	    return <LogProps {...props} forwardedRef={ref} />;
	  }
	);

甚至可以直接设置函数的 displayName 属性来包含被包裹组件的名称，例如 ForwardRef(logProps(MyComponent))：

```ts
function logProps(Component) {
  class LogProps extends React.Component {
    // ...
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
```



## ☛ Refs & 类组件

如果我们想要包装上面的 CustomTextInput，模仿挂载后被点击。我们可以通过 ref 得到自定义的 Input 组件，手动调用它的 focusTextInput 函数。注意！只有当 CustomTextInput 被声明为类的时候才有用！

	class AutoFocusTextInput extends React.Component {
	  constructor(props) {
	    super(props);
	    this.textInput = React.createRef();
	  }
	 
	  componentDidMount() {
	    this.textInput.current.focusTextInput();
	  }
	 
	  render() {
	    return (
	      <CustomTextInput ref={this.textInput} />
	    );
	  }
	}


下面是对应于不同 ref 的例子

	class CustomTextInput extends React.Component {
	  constructor(props) {
	    super(props);
	    // 创建一个 ref 去储存 textInput DOM 元素
	    this.textInput = React.createRef();
	    this.focusTextInput = this.focusTextInput.bind(this);
	  }
	
	  focusTextInput() {
	    // 很明显的，让 text input 获得焦点使用了原生的 DOM API
	    // 注意：我们通过 current 去获得 DOM 节点
	    this.textInput.current.focus();
	  }
	 
	  render() {
	    // 告诉 React 我们想要将當前的 <input> 通過 ref 指定的容器，即在构造器中创建的 textInput 存儲一個引用
	    // 在組件實例化過程，React 執行 render 時就會用這個 <intput[text]> 去填充 this.textInput 容器 current
	    return (
	      <div>
	        <input
	          type="text"
	          ref={this.textInput} />
	 
	        <input
	          type="button"
	          value="Focus the text input"
	          onClick={this.focusTextInput}
	        />
	      </div>
	    );
	  }
	}

React 将会将会在组件挂载时将 DOM 元素分配给 current 属性，并且在组件被卸载时，将 current 属性重置为 null。ref 将会在 componentDidMount 和 componentDidUpdate 生命周期钩子前被更新。



## ☛ Refs & 函数式组件

没有用途的示例：

	function MyFunctionalComponent() {
	  return <input />;
	}
	 
	class Parent extends React.Component {
	  constructor(props) {
	    super(props);
	    this.textInput = React.createRef();
	  }
	  render() {
	    // 这样没用！函数式组件根本就没有实例！
	    return (
	      <MyFunctionalComponent ref={this.textInput} />
	    );
	  }
	}

但是，你可以在函数式组件中使用 ref 属性，就像你引用 DOM 元素和类组件一样。

	function CustomTextInput(props) {
	  // textInput 必须被声明在这里 ref 才能适用于它
	  let textInput = React.createRef();
	 
	  function handleClick() {
	    textInput.current.focus();
	  }
	 
	  return (
	    <div>
	      <input
	        type="text"
	        ref={textInput} />
	 
	      <input
	        type="button"
	        value="Focus the text input"
	        onClick={handleClick}
	      />
	    </div>
	  );
	}



## ☛ Callback Refs

React 同样支持回调方式的 refs 去设置 refs，可以给我们对 refs 创建和销毁更细粒度的控制。

放入一个函数，而不是一个由createRef()创建的ref属性。这个函数接受React组件实例、或者HTML DOM元素作为参数——可以被储存并且在其他地方被访问。

下面的例子实现了一个通常的模式：使用ref回调储存一个DOM节点的应用在实例变量中：

	class CustomTextInput extends React.Component {
	  constructor(props) {
	    super(props);
	 
	    this.textInput = null;
	 
	    this.setTextInputRef = element => {
	      this.textInput = element;
	    };
	 
	    this.focusTextInput = () => {
	      // 通过原生DOM API聚焦文本
	      if (this.textInput) this.textInput.focus();
	    };
	  }
	 
	  componentDidMount() {
	    // 在挂载时自动聚焦
	    this.focusTextInput();
	  }
	 
	  render() {
	    // 使用'ref'回调去在一个实例域中储存文本输入DOM元素的引用(比如, this.textInput).
	    return (
	      <div>
	        <input
	          type="text"
	          ref={this.setTextInputRef}
	        />
	        <input
	          type="button"
	          value="Focus the text input"
	          onClick={this.focusTextInput}
	        />
	      </div>
	    );
	  }
	}

React 将会在组件挂载时使用 DOM 元素调用 ref 回调，在组件卸载时使用 null 调用 ref 回调。ref 回调都会在 componentDidMount 或者 componentDidUpdate 生命周期钩子之前被调用。

你可以在组件之间传递回调 refs，就像你可以对通过 React.createRef() 创建的对象 refs一样：

	function CustomTextInput(props) {
	  return (
	    <div>
	      <input ref={props.inputRef} />
	    </div>
	  );
	}
	 
	class Parent extends React.Component {
	  render() {
	    return (
	      <CustomTextInput
	        inputRef={el => this.inputElement = el}
	      />
	    );
	  }
	}

在上面的例子中，Parent组件将他的ref回调作为inputRef这个属性（props）传入CustomTextInput组件，接着CustomTextInput组件将同样的函数作为一个特殊的ref属性（attribute）传给 `<input>`。从结果来看，Parent组件中的this.inputElement将会被放在与在CustomTextInput组件的 `<input>` 元素相关的DOM节点中。



## ☛ 历史遗留 String Refs

不用管，以后都要移除，见到 `this.refs.textInput` 這種形式就使用 `React.createRef()` 或者回调模式代替。

如 React-Cropper 提供的這個例子就是使用字符串 Refs 的方式

	// Demo from http://roadmanfong.github.io/react-cropper/
	var Demo = React.createClass({

	  _crop: function(){
	    var dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL();
	    console.log(dataUrl);
	  },

	  render: function() {
	    return (
	      <Cropper
	        ref='cropper'
	        crop={this._crop} />
	    );
	  }
	})


如果 ref 回调被定义为一个行内函数，当组件更新时会被调用两次。第一次被 null 调用、而后被 DOM 元素调用。这是因为函数的新实例会在每次渲染的时候创建，所以 React 需要清除老的 ref 然后生成一个新的。你可以通过在 class 中定义一个绑定的 ref 回调方法避免这个问题，但是注意，这种问题在大多数情况下都没什么影响~




## Error Boundaries 错误捕捉
- Error Boundaries https://reactjs.org/docs/error-boundaries.html
- 在线示例 https://codesandbox.io/s/lOo5AV12M
- Using an error boundary with React 16. https://codepen.io/gaearon/pen/wqvxGa

部分 UI 的 JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的 Error Boundaries 错误边界。

在组件的所有生命周期函数中，有两个用于错误处理的函数 componentDidCatch 和 getDerivedStateFromError，后者好理解，就是从捕捉到的错误信息中派生出状态数据，返回一个对象交由 React 来设置 state，返回 null 表示无状态更新。React 引入 Error Boundaries 错误边界的概念，可以将错误拦截在边界组件上，而不是破坏整个应用。

组件要成为一个边界组件 Error Boundaries 只需要在组件中定义个新的生命周期函数 componentDidCatch(error, info)，看官方示例：

	class ErrorBoundary extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = { hasError: false };
	  }

	  componentDidCatch(error, info) {
	    // Display fallback UI
	    this.setState({ hasError: true });
	    // You can also log the error to an error reporting service
	    logErrorToMyService(error, info);
	  }

	  render() {
	    if (this.state.hasError) {
	      // You can render any custom fallback UI
	      return <h1>Something went wrong.</h1>;
	    }
	    return this.props.children;
	  }
	}

上述的 ErrorBoundary 就是一个错误边界组件，然后我们可以这样来使用它：

	<ErrorBoundary>
	  <MyWidget />
	</ErrorBoundary>

Erro Boundaries 本质上也是一个组件，通过增加了新的生命周期函数 componentDidCatch 使其变成了一个新的组件，这个特殊组件可以捕获其子组件树中的脚本错误信息，输出错误信息或者在报错条件下，显示默认错误页。

错误边界可以处理的错误包括其本身渲染过程、生命周期函数和边界组件下级的的组件构造函数中产生的错误，在开发模式下，被边界组件成功处理的错误还是会显示错误信息，这是为了方便调试，直接按 ESC 键就可以隐藏返回到工作界面，这些消息不会在发布模式下提示。

自 React 16 开始，任何未被错误边界捕获的错误将会卸载整个 React 组件树。单一组件内部错误，不应该导致整个应用报错并显示空白页，而 Error Boundaries 解决的就是这个问题。


如果需要报错信息显示错误组件所在的具体的行数和位置，可以使用 babel-plugin-transform-react-jsx-source 插件。

因为 Error Boundaries 仅仅能保证正确的 render，而事件处理函数并不会发生在 render 过程中，事件处理函数中的异常不能被正确处理，我们需要用 try/catch 来处理事件处理函数中的异常，举例来说：

	class MyComponent extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = { error: null };
	  }

	  handleClick = () => {
	    try {
	      // Do something that could throw
	    } catch (error) {
	      this.setState({ error });
	    }
	  }

	  render() {
	    if (this.state.error) {
	      return <h1>Caught an error.</h1>
	    }
	    return <div onClick={this.handleClick}>Click Me</div>
	  }
	}


注意，错误边界无法捕获如下错误:

- Event handlers 事件处理函数触发的错误
- Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)  异步代码
- Server side rendering 服务端渲染
- Errors thrown in the error boundary itself (rather than its children) 自己产生的错误

TypeScript 实例：

	import React, { ErrorInfo } from 'react';

	interface Props {
	    children?:any
	}
	interface State {
	    error: Error | boolean
	    info?: ErrorInfo
	}

	let styles = {
	    background: '#333',
	    boxShadow: '2px 2px 3px #222',
	    color: 'white',
	    padding: 32,
	    margin: 32
	}

	export class ErrorBoundary extends React.Component<Props> {
	    props:Props
	    state:State

	    constructor(props: Props){
	        super(props);
	        this.props = props;
	        this.state = {error: false};
	    }
	    static getDerivedStateFromError(error: Error, info:ErrorInfo){
	        let ds = {error, info};
	        return ds;
	    }
	    componentDidCatch(error: Error, info: React.ErrorInfo): void {
	        console.log("Error Boundaries Working...", error, info);
	        this.setState({error, info});
	    }
	    render(){
	        if(this.state.error){
	            let info = this.state.info?.componentStack;
	            return (
	            <div style={styles}>
	                <h1>✨magic✨Error Catched!</h1>;
	                {info && info.split("\n").map((i, t) => {
	                    return ( <div key={t}> {i} </div> );
	                })}
	            </div>
	            )
	        }
	        return (
	            <>
	            {this.props.children}
	            </>
	        )
	    }
	}

	let Broken = ()=>{
	    const [state, setState] = React.useState(false);
	    if(state) throw new Error("Try Throws Exception");
	    let ee = new Error("Try Event Exception");
	    console.log("May error with you ...", state);
	    return (
	        <>
	            <button onClick={ev => {throw ee}}>🎆Event Exception</button>
	            <button onClick={ev => {setState(true)}}>🎇setState Exception</button>
	        </>
	        );
	}

	export default class LifeCode extends React.Component {

	    render(){
	        return(
	            <ErrorBoundary>
	                <Broken />
	            </ErrorBoundary>
	        );
	    }
	}



## React developers with TypeScript
- https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md
- https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#basic-cheatsheet-table-of-contents
- https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/HOC.md

- Creating TypeScript node modules https://basarat.gitbook.io/typescript/library
- Angular library with typescript-starter https://github.com/bitjson/typescript-starter
- Zero-config CLI for TypeScript package development https://github.com/formium/tsdx

这部分 Advanced Cheatsheet 解析了如何在 React 中应用泛型 generic 开发 utilities/functions/render prop/higher order components 和 TS+React 库。

- It also has miscellaneous tips and tricks for pro users.
- Advice for contributing to DefinitelyTyped
- The goal is to take full advantage of TypeScript.

创建 React + TypeScript 库最好使用 tsdx，使用它的 react 选项。


### 👉 Props 中使用 React.ReactNode

	export interface Props {
	  label?: React.ReactNode;
	  children: React.ReactNode;
	}
	export const Card = (props: Props) => {
	  return (
	    <div>
	      {props.label && <div>{props.label}</div>}
	      {props.children}
	    </div>
	  );
	};

	export interface Props {
	  children: (foo: string) => React.ReactNode;
	}


### 👉 typeGuard 条件渲染组件使用类型守卫

	// Button props
	type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	  href?: undefined;
	};

	// Anchor props
	type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	  href?: string;
	};

	// Input/output options
	type Overload = {
	  (props: ButtonProps): JSX.Element;
	  (props: AnchorProps): JSX.Element;
	};

	// Guard to check if href exists in props
	const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps =>
	  "href" in props;

	// Component
	const Button: Overload = (props: ButtonProps | AnchorProps) => {
	  // anchor render
	  if (hasHref(props)) return <a {...props} />;
	  // button render
	  return <button {...props} />;
	};

	// Usage
	function App() {
	  return (
	    <>
	      {/* 😎 All good */}
	      <Button target="_blank" href="https://www.google.com">
	        Test
	      </Button>
	      {/* 😭 Error, `disabled` doesnt exist on anchor element */}
	      <Button disabled href="x">
	        Test
	      </Button>
	    </>
	  );
	}


### 👉 Props as ElementType

声明 props 参数传入的 `ElementType` 为组件，再供 createElement 函数处理。


	function PassThrough(props: { as: React.ElementType<any> }) {
	  const { as: Component } = props;

	  return <Component />;
	}


### 👉 Generic Component 泛型组件


使用类型感知，可以在泛型组件中获取良好的类型安全。

Generic Components 示范

	interface Props<T> {
	  items: T[];
	  renderItem: (item: T) => React.ReactNode;
	}

	function List<T>(props: Props<T>) {
	  const { items, renderItem } = props;
	  const [state, setState] = React.useState<T[]>([]); // You can use type T in List function scope.
	  return (
	    <div>
	      {items.map(renderItem)}
	      <button onClick={() => setState(items)}>Clone</button>
	      {JSON.stringify(state, null, 2)}
	    </div>
	  );
	}

	ReactDOM.render(
	  <List
	    items={["a", "b"]} // type of 'string' inferred
	    renderItem={item => (
	      <li key={item}>
	        {item.toPrecision(3)} // Error: Property 'toPrecision' does not exist on
	        type 'string'.
	      </li>
	    )}
	  />,
	  document.body
	);


在 TypeScript 2.9 后，可以在 JSX 中使用尖括号为泛型提供类型参数，以使用类型感知。


	ReactDOM.render(
	  <List<number>
	    items={["a", "b"]} // Error: Type 'string' is not assignable to type 'number'.
	    renderItem={item => <li key={item}>{item.toPrecision(3)}</li>}
	  />,
	  document.body
	);


在泛型类型参数中还可以使用 fat arrow function 语法，即类似以下使用 extends。


	interface Props<T> {
	  items: T[];
	  renderItem: (item: T) => React.ReactNode;
	}

	const List = <T extends unknown>(props: Props<T>) => {
	  const { items, renderItem } = props;
	  const [state, setState] = React.useState<T[]>([]); // You can use type T in List function scope.
	  return (
	    <div>
	      {items.map(renderItem)}
	      <button onClick={() => setState(items)}>Clone</button>
	      {JSON.stringify(state, null, 2)}
	    </div>
	  );
	};


在类组件中一样使用。

	interface Props<T> {
	  items: T[];
	  renderItem: (item: T) => React.ReactNode;
	}

	interface State<T> {
	  items: T[];
	}

	class List<T> extends React.PureComponent<Props<T>, State<T>> {
	  // You can use type T inside List class.
	  state: Readonly<State<T>> = {
	    items: []
	  };
	  render() {
	    const { items, renderItem } = this.props;
	    // You can use type T inside List class.
	    const clone: T[] = items.slice(0);
	    return (
	      <div>
	        {items.map(renderItem)}
	        <button onClick={() => this.setState({ items: clone })}>Clone</button>
	        {JSON.stringify(this.state, null, 2)}
	      </div>
	    );
	  }
	}


但是不能在静态成员上使用 Generic Type Parameters。


	class List<T> extends React.PureComponent<Props<T>, State<T>> {
	  // Static members cannot reference class type parameters.ts(2302)
	  static getDerivedStateFromProps(props: Props<T>, state: State<T>) {
	    return { items: props.items };
	  }
	}

解决方法，将静态函数转换为泛型函数，即类型感知函数。

	class List<T> extends React.PureComponent<Props<T>, State<T>> {
	  static getDerivedStateFromProps<T>(props: Props<T>, state: State<T>) {
	    return { items: props.items };
	  }
	}


### 👉 Generic components with children

作为 React 嵌套子组件的传递参数，Props 中的 `children` 通常没有定义，直接使用 `props.children` 会出错。

解决方法，一是添加 `children` 类型定义：

```tsx
interface WrapperProps<T> {
  item: T;
  renderItem: (item: T) => React.ReactNode;
  children: string; // The component will only accept a single string child
}

const Wrapper = <T extends {}>(props: WrapperProps<T>) => {
  return (
    <div>
      {props.renderItem(props.item)}
      {props.children}
    </div>
  );
};
```

二是使用 `React.PropsWithChildren` 类型封装，如 `React.FC<>` 内置函数组件那样做：

```tsx
interface WrapperProps<T> {
  item: T;
  renderItem: (item: T) => React.ReactNode;
}

const Wrapper = <T extends {}>(
  props: React.PropsWithChildren<WrapperProps<T>>
) => {
  return (
    <div>
      {props.renderItem(props.item)}
      {props.children}
    </div>
  );
};
```

### 👉 Typing a Component that Accepts Different Props

通常泛型 Components 和 JSX 就模拟函数，可以根据 Props 来渲染子组件，和重载函数非常相似。

示范，使用类型守卫函数 isPropsForAnchorElement 来根据 `href` 属性做不同的渲染：

```
type ButtonProps = JSX.IntrinsicElements["button"];
type AnchorProps = JSX.IntrinsicElements["a"];

// optionally use a custom type guard
function isPropsForAnchorElement(
  props: ButtonProps | AnchorProps
): props is AnchorProps {
  return "href" in props;
}

function Clickable(props: ButtonProps | AnchorProps) {
  if (isPropsForAnchorElement(props)) {
    return <a {...props} />;
  } else {
    return <button {...props} />;
  }
}
```

这样做，就不需要定义不同的 Props 类型，只要它存在差异就可以通过类型守卫判断。

```tsx
type LinkProps = Omit<JSX.IntrinsicElements["a"], "href"> & { to?: string };

function RouterLink(props: LinkProps | AnchorProps) {
  if ("to" in props) {
    return <a {...props} />;
  } else {
    return <Link {...props} />;
  }
}
```

<details>
  <summary><b>Approach: Generic Components 泛型组件方法</b></summary>

```tsx
interface LinkProps {}
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type RouterLinkProps = Omit<NavLinkProps, "href">;

const Link = <T extends {}>(
  props: LinkProps & T extends RouterLinkProps ? RouterLinkProps : AnchorProps
) => {
  if ((props as RouterLinkProps).to) {
    return <NavLink {...(props as RouterLinkProps)} />;
  } else {
    return <a {...(props as AnchorProps)} />;
  }
};

<Link<RouterLinkProps> to="/">My link</Link>; // ok
<Link<AnchorProps> href="/">My link</Link>; // ok
<Link<RouterLinkProps> to="/" href="/">
  My link
</Link>; // error
```

</details>

<details>
  <summary><b>Approach: Composition 组合方法</b></summary>

```tsx
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type RouterLinkProps = Omit<AnchorProps, 'href'>

interface Button {
  as: React.ComponentClass | 'a'
}

const Button: React.FunctionComponent<Button> = (props) => {
  const {as: Component, children, ...rest} = props
  return (
    <Component className="button" {...rest}>{children}</Component>
  )
}

const AnchorButton: React.FunctionComponent<AnchorProps> = (props) => (
  <Button as="a" {...props} />
)

const LinkButton: React.FunctionComponent<RouterLinkProps> = (props) => (
  <Button as={NavLink} {...props} />
)

<LinkButton to="/login">Login</LinkButton>
<AnchorButton href="/login">Login</AnchorButton>
<AnchorButton href="/login" to="/test">Login</AnchorButton> // Error: Property 'to' does not exist on type...
```

</details>

还可以使用 Discriminated Unions 可辨识联合类型：

```ts
type UserTextEvent = { value: string; target: HTMLInputElement };
type UserMouseEvent = { value: [number, number]; target: HTMLElement };
type UserEvent = UserTextEvent | UserMouseEvent;
function handle(event: UserEvent) {
  if (typeof event.value === "string") {
    event.value; // string
    event.target; // HTMLInputElement | HTMLElement (!!!!)
    return;
  }
  event.value; // [number, number]
  event.target; // HTMLInputElement | HTMLElement (!!!!)
}
```


但是，即使基于 `event.value` 的类型收缩，逻辑上由于事件对象可以是联合类型 `UserTextEvent | UserMouseEvent`，两个子类型都包含同样的值，所以 TypeScript 需要更好的解决办法：使用字面量类型。

示范，定义 type 为字面量类型，直接给定了事件类型，别无二义。

```ts
type UserTextEvent = {
  type: "TextEvent";
  value: string;
  target: HTMLInputElement;
};
type UserMouseEvent = {
  type: "MouseEvent";
  value: [number, number];
  target: HTMLElement;
};
type UserEvent = UserTextEvent | UserMouseEvent;
function handle(event: UserEvent) {
  if (event.type === "TextEvent") {
    event.value; // string
    event.target; // HTMLInputElement
    return;
  }
  event.value; // [number, number]
  event.target; // HTMLElement
}
```

相似的做法，是使用 **User-Defined Type Guards** 用户定义类型守卫的概念，注意 `a is string` 这种语法表示这是一个用户定义守卫函数：

```ts
function isString(a: unknown): a is string {
  return typeof a === "string";
}
```

### 👉 Props: One or the Other but not Both

使用 `in` 关键字，重载函数和联合类型来编写组件，可以判断 Props 是 A 或者是 B 类型，但不能是 A 又是 B 类型。


```tsx
type Props1 = { foo: string };
type Props2 = { bar: string };

function MyComponent(props: Props1 | Props2) {
  if ("foo" in props) {
    // props.bar // error
    return <div>{props.foo}</div>;
  } else {
    // props.foo // error
    return <div>{props.bar}</div>;
  }
}
const UsageComponent: React.FC = () => (
  <div>
    <MyComponent foo="foo" />
    <MyComponent bar="bar" />
    {/* <MyComponent foo="foo" bar="bar"/> // invalid */}
  </div>
);
```

### 👉 Props: Must Pass Both

```tsx
type OneOrAnother<T1, T2> =
  | (T1 & { [K in keyof T2]?: undefined })
  | (T2 & { [K in keyof T1]?: undefined });

type Props = OneOrAnother<{ a: string; b: string }, {}>;

const a: Props = { a: "a" }; // error
const b: Props = { b: "b" }; // error
const ab: Props = { a: "a", b: "b" }; // ok
```

### 👉 Props: Can Optionally Pass One Only If the Other Is Passed

编写一个 Text component，可以通过 `truncate` 或 `expanded` 属性来进行裁剪或在用户点击时扩展显示。

那么 `expanded` 参数会在使用 `truncate` 的情形下使用，否则不可使用。

```tsx
type CommonProps = {
  children: React.ReactNode;
  miscProps?: any;
};

type NoTruncateProps = CommonProps & { truncate?: false };

type TruncateProps = CommonProps & { truncate: true; expanded?: boolean };

// Function overloads to accept both prop types NoTruncateProps & TruncateProps
function Text(props: NoTruncateProps): JSX.Element;
function Text(props: TruncateProps): JSX.Element;
function Text(props: CommonProps & { truncate?: boolean; expanded?: boolean }) {
  const { children, truncate, expanded, ...otherProps } = props;
  const classNames = truncate ? ".truncate" : "";
  return (
    <div className={classNames} aria-expanded={!!expanded} {...otherProps}>
      {children}
    </div>
  );
}
```

示范使用 Text component：

```tsx
const App: React.FC = () => (
  <>
    {/* these all typecheck */}
    <Text>not truncated</Text>
    <Text truncate>truncated</Text>
    <Text truncate expanded>
      truncate-able but expanded
    </Text>
    {/* TS error: Property 'truncate' is missing in type '{ children: string; expanded: true; }' but required in type '{ truncate: true; expanded?: boolean | undefined; }'. */}
    <Text expanded>truncate-able but expanded</Text>
  </>
);
```

### 👉 Omit attribute from a type

从一种类型中省略某参数，有时使用 Intersection Types 交叉类型时需要自行定义的属性而非交叉而来的版本，比如编写的组件有 `label` 属性，但交叉导入的类型也有，以下示范如何使用 Omit 来省略掉它：

```tsx
export interface Props {
  label: React.ReactNode; // this will conflict with the InputElement's label
}

// this comes inbuilt with TS 3.5
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// usage
export const Checkbox = (
  props: Props & Omit<React.HTMLProps<HTMLInputElement>, "label">
) => {
  const { label } = props;
  return (
    <div className="Checkbox">
      <label className="Checkbox-label">
        <input type="checkbox" {...props} />
      </label>
      <span>{label}</span>
    </div>
  );
};
```

当有多个参数重复时，需要使用 `keyof` 类型操作来排除：

```tsx
export interface Props {
  label: React.ReactNode; // conflicts with the InputElement's label
  onChange: (text: string) => void; // conflicts with InputElement's onChange
}

export const Textbox = (
  props: Props & Omit<React.HTMLProps<HTMLInputElement>, keyof Props>
) => {
  // implement Textbox component ...
};
```

### 👉 Extracting Prop Types of a Component

从现有组件中提取 Props 类型是非常有用的，可以避免重复定义相似的类型，而且以下这种做法不用事先导出所有类型。

```ts
import { ComponentProps, JSXElementConstructor } from "react";

// goes one step further and resolves with propTypes and defaultProps properties
type ApparentComponentProps<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
> = C extends JSXElementConstructor<infer P>
  ? JSX.LibraryManagedAttributes<C, P>
  : ComponentProps<C>;
```

如果自定义事件处理程序不是在调用位置本身编写的，也可以使用到强类型，如下使用 JSX 内联 onSomeEvent 属性：

```tsx
// my-inner-component.tsx
export function MyInnerComponent(props: {
  onSomeEvent(
    event: ComplexEventObj,
    moreArgs: ComplexArgs
  ): SomeWeirdReturnType;
}) {
  /* ... */
}

// my-consuming-component.tsx
export function MyConsumingComponent() {
  // event and moreArgs are contextually typed along with the return value
  const theHandler: Props<typeof MyInnerComponent>["onSomeEvent"] = (
    event,
    moreArgs
  ) => {};
  return <MyInnerComponent onSomeEvent={theHandler} />;
}
```

### 👉 Handling Exceptions

当坏事发生时，可以选择提供更好的信息：

```ts
class InvalidDateFormatError extends RangeError {}
class DateIsInFutureError extends RangeError {}

/**
 * // optional docblock
 * @throws {InvalidDateFormatError} The user entered date incorrectly
 * @throws {DateIsInFutureError} The user entered date in future
 *
 */
function parse(date: string) {
  if (!isValid(date))
    throw new InvalidDateFormatError("not a valid date format");
  if (isInFuture(date)) throw new DateIsInFutureError("date is in the future");
  // ...
}

try {
  // call parse(date) somewhere
} catch (e) {
  if (e instanceof InvalidDateFormatError) {
    console.error("invalid date format", e);
  } else if (e instanceof DateIsInFutureError) {
    console.warn("date is in future", e);
  } else {
    throw e;
  }
}
```

普通做法是以上这种，直接抛出异常。但是 TypeScript 可以做得更好，借助类型守卫的做法来决定如何处理问题：

```ts
function parse(
  date: string
): Date | InvalidDateFormatError | DateIsInFutureError {
  if (!isValid(date))
    return new InvalidDateFormatError("not a valid date format");
  if (isInFuture(date)) return new DateIsInFutureError("date is in the future");
  // ...
}

// now consumer *has* to handle the errors
let result = parse("mydate");
if (result instanceof InvalidDateFormatError) {
  console.error("invalid date format", result.message);
} else if (result instanceof DateIsInFutureError) {
  console.warn("date is in future", result.message);
} else {
  /// use result safely
}

// alternately you can just handle all errors
if (result instanceof Error) {
  console.error("error", result);
} else {
  /// use result safely
}
```

还可以使用特定用于异常处理的类型，如 (don't say monads...) `Try`, `Option`, `Maybe`, `Either` ...

```ts
interface Option<T> {
  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Option<U>): Option<U>
  getOrElse(value: T): T
}
class Some<T> implements Option<T> {
  constructor(private value: T) {}
  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Some<U>): Some<U>
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value)
  }
  getOrElse(): T {
    return this.value
  }
}
class None implements Option<never> {
  flatMap<U>(): None {
    return this
  }
  getOrElse<U>(value: U): U {
    return value
  }
}

// now you can use it like:
let result = Option(6) // Some<number>
              .flatMap(n => Option(n*3)) // Some<number>
              .flatMap(n = new None) // None
              .getOrElse(7)

// or:
let result = ask() // Option<string>
              .flatMap(parse) // Option<Date>
              .flatMap(d => new Some(d.toISOString()) // Option<string>
              .getOrElse('error parsing string')
```


### 👉Section 2: Useful Patterns by TypeScript Version

TypeScript 的版本更新，总是带来新的功能特性，利用好这些特性可以使用相应的编程模式。


使用 TypeScript 2.9 **template strings** 来实现格式化组件：

```tsx
export interface InputFormProps {
  foo: string; // this is understood inside the template string below
}

export const InputForm = styledInput<InputFormProps>`
    color:
        ${({ themeName }) => (themeName === "dark" ? "black" : "white")};
    border-color: ${({ foo }) => (foo ? "red" : "black")};
`;
```


使用 TypeScript 2.9 **JSX Generics**

```tsx
// instead of
<Formik render={(props: FormikProps<Values>) => ....}/>

// usage
<Formik<Values> render={props => ...}/>
<MyComponent<number> data={12} />
```


TypeScript 3.0 升级带来许多功能。

在参数列表中使用剩余参数 Typed rest parameters：

```ts
// `rest` accepts any number of strings - even none!
function foo(...rest: string[]) {
  // ...
}

foo("hello"); // works
foo("hello", "world"); // also works
```

使用 JSX `LibraryManagedAttributes`支持 `propTypes` 和 `static defaultProps`

```tsx
export interface Props {
  name: string;
}

export class Greet extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return <div>Hello ${name.toUpperCase()}!</div>;
  }
  static defaultProps = { name: "world" };
}

// Type-checks! No type assertions needed!
let el = <Greet />;
```


带来比 `any` 更安全的 `unknown` 类型：

```tsx
interface IComment {
  date: Date;
  message: string;
}

interface IDataService1 {
  getData(): any;
}

let service1: IDataService1;
const response = service1.getData();
response.a.b.c.d; // RUNTIME ERROR

// ----- compare with -------

interface IDataService2 {
  getData(): unknown; // ooo
}

let service2: IDataService2;
const response2 = service2.getData();
// response2.a.b.c.d; // COMPILE TIME ERROR if you do this

if (typeof response === "string") {
  console.log(response.toUpperCase()); // `response` now has type 'string'
}
```

也可以在 `unknown` 类型上使用类型守卫 **type guard**，这种做法比使用 `any` 更好。


TypeScript 3.0 还支持工程引用 Project References，允许依赖外部 TypeScript 工程，在 tsconfig.json 引用其它 tsconfig.json 配置文件。这为代码带来更强大的可伸缩性 codebases scale，将代码分割成子工程，从而不用重复编译相同的部分。

在每个目录下创建 tsconfig.json 包含以下配置：

```js
{
  "compilerOptions": {
    "composite": true, // tells TSC it is a subproject of a larger project
    "declaration": true, // emit .d.ts declaration files since project references dont have access to source ts files. important for project references to work!
    "declarationMap": true, // sourcemaps for .d.ts
    "rootDir": "." // specify compile it relative to root project at .
  },
  "include": [
    "./**/*.ts
  ],
  "references": [ // (optional) array of subprojects your subproject depends on
    {
      "path": "../myreferencedproject", // must have tsconfig.json
      "prepend": true // concatenate js and sourcemaps generated by this subproject, if and only if using outFile
    }
  ]
}
```

在顶层目录创建 `tsconfig.json` 包含和各个顶层级别的工程：

```js
{
  "files: [],
  "references": [
    {"path": "./proj1"},
    {"path": "./proj2"},
  ]
}
```

然后使用命令 `tsc --build` 或 `tsc -b`。

可以保存配置文件样版 tsconfig boilerplate，然后使用 `extends` 配置项引用：

```js
{
  "extends": "../tsconfig.base",
  // more stuff here
}
```


TypeScript 3.1 可以为函数组件声明属性 Properties declarations

```tsx
export const FooComponent = ({ name }) => <div>Hello! I am {name}</div>;

FooComponent.defaultProps = {
  name: "swyx"
};
```


TypeScript 3.4 可以使用 `const` assertions 常量断言。

```tsx
export function useLoading() {
  const [isLoading, setState] = React.useState(false);
  const load = (aPromise: Promise<any>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };
  return [isLoading, load] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
}
```


TypeScript 3.5 内建 `<Omit>` 类型，从泛型构造函数中感知高阶类型 Higher order type inference。

```tsx
type ComponentClass<P> = new (props: P) => Component<P>;
declare class Component<P> {
  props: P;
  constructor(props: P);
}

declare function myHoc<P>(C: ComponentClass<P>): ComponentClass<P>;

type NestedProps<T> = { foo: number; stuff: T };

declare class GenericComponent<T> extends Component<NestedProps<T>> {}

// type is 'new <T>(props: NestedProps<T>) => Component<NestedProps<T>>'
const GenericComponent2 = myHoc(GenericComponent);
```

### 👉 Full HOC Example

使用 HoC - Hight Order of Components 高阶组件的一个目的就是向组件 Props 注入属性，而不是一层一级地传递 Props。相比使用 Context API，它通常在 `render` 函数中使用。

**The injected props**

```ts
interface WithThemeProps {
  primaryColor: string;
}
```

**Usage in the component**

```ts
interface Props extends WithThemeProps {
  children: React.ReactNode;
}

class MyButton extends React.Component<Props> {
  public render() {
    // Render an the element using the theme and other props.
  }

  private someInternalMethod() {
    // The theme values are also available as props here.
  }
}

export default withTheme(MyButton);
```


**Consuming the Component**，使用组件，并且可以省略 `primaryColor` 属性，或在子组件中覆盖它。

```tsx
<MyButton>Hello button</MyButton> // Valid
<MyButton primaryColor="#333">Hello Button</MyButton> // Also valid
```


**Declaring the HoC**

```tsx
export function withTheme<T extends WithThemeProps = WithThemeProps>(
  WrappedComponent: React.ComponentType<T>
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  return class ComponentWithTheme extends React.Component<
    Optionalize<T, WithThemeProps>
  > {
    public static displayName = `withPages(${displayName})`;

    public render() {
      // Fetch the props you want inject. This could be done with context instead.
      const themeProps = getThemePropsFromSomeWhere();

      // this.props comes afterwards so the can override the default ones.
      return <WrappedComponent {...themeProps} {...(this.props as T)} />;
    }
  };
}
```

注意 `{...this.props as T}` 断言是必需的，因为 TS 3.2 有一个 bug，参考 TypeScript/issues/28938#issuecomment-450636046。

对于 `Optionalize` 工具类型请参考 [utility types section](https://github.com/typescript-cheatsheets/typescript-utilities-cheatsheet#utility-types).


以下是一个高级的动态 HoC 组件示范，基于某些 Props 属性来动态处理：

```tsx
// inject static values to a component so that they're always provided
export function inject<TProps, TInjectedKeys extends keyof TProps>(
  Component: React.JSXElementConstructor<TProps>,
  injector: Pick<TProps, TInjectedKeys>
) {
  return function Injected(props: Omit<TProps, TInjectedKeys>) {
    return <Component {...(props as TProps)} {...injector} />;
  };
}
```

在 HoC 组件中，使用 React 的新 API `forwardRef` 来增强组件的可重用性，可以这样做 `React.forwardRef<Ref, Props>`，它本身就是 HoC。




## PureComponent vs Stateless Component

无状态组件和純組件都可以通过减少继承 Component 的完整生命周期機制而达到性能优化的效果。从本质上来说，无状态组件就是一个 render 纯函数，所以无状态组件的缺点也是显而易见的，它没有 shouldComponentUpdate 生命周期函数，所以父組件每次 state 觸發的組件重繪，它都会跟隨重绘而執行 render 函数，不論是無狀態組件還是 Component 類組件，後面會使用 PureComponent 純組件來避免這個問題。

示例如下，每次點擊更新一個 item 數據的選中狀態時，所有 items 都會一并執行更新動作，如果這個 ListItem 設計的很複雜，那麽帶來的性能影響就不能忽略了：


```ts
function ListItem(props){
	console.log("ListItem render", this)
	const {children, data} = props
	return <div {...data} className="item">
		<span {...data} className={+data.checked?"checked":"unchecked"} title="spin">{children} #{data.id} - </span>
		<span {...data} className="field">{data.name}</span>
		<span {...data} className="field">{data.value}PCS</span>
	</div>
}

function ListView(props){
	console.log("ListView render", this)
	return <div className="list" {...props}>
		{ props.items.map((it,joke)=>{
			let icons = [["⚫", "⚪"], ["❌", "⭕"], ["👁‍🗨", "👁‍🗨"][2];
			let icon = it.checked? icons[0]:icons[1]; 
			return <ListItem key={joke} data={it}>{icon}</ListItem>
		})}
	</div>
}

class TestSuite extends Component {
	constructor(props){
		super(props)
		this.state = {items: this.mockGenerate()}
		this.click.bind(this)
	}

	mockGenerate(){
		let foods = [
			"Apple", "Pineapple", "Strawberry", "grape", "Peach",
			"Pear", "Arbutus", "Blackberry", "Guava", "Honeymelon",
			"Lemon", "Lichee", "Longan", "Loquat", "Lotus nut",
			"Mango", "Olive", "Papaya", "Persimmon", "Pomelo",
			"Raspberry", "Water Caltrop", "Water-chestnut",
		];
		return foods.map((it,joke)=>{
			return {id: joke, name: it, value: parseInt(Math.random()*100), checked: Math.random()>0.8}; 
		});
	}
	click(evt){
		let id = evt.target.id;
		let title = evt.target.title;
		console.log("TestSuite clicked", this, evt, id,)
		if(title!=="spin") return;
		let items = this.state.items;
		items[id].checked = !items[id].checked;
		this.setState({items});
	}

	render(){
		console.log("TestSuite render", this)
		return <ListView onClick={ (evt)=>{this.click(evt);} } {...this.state}></ListView>
	}
}

let list = <TestSuite key="list001" />;
ReactDOM.render(list, mountNode);
console.log(list)
```

TestSuite 組件實例 list 返回類型還是 Symbol(react.element)，只是組件類型標記 type 設置為 TestSuite 构造函数。

在組件實例完成初始化后得到的才是真正運行中的組件實例，即通過組件上下文關聯的 TestSuite 對象實列：

	context: {}
	props: {}
	refs: {}
	state: {items: Array(23)}
	updater: {isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ}
	_reactInternalFiber: FiberNode {tag: 1, key: "list001", stateNode: TestSuite, elementType: ƒ, type: ƒ, …}
	_reactInternalInstance: {_processChildContext: ƒ}
	isMounted: (...)
	replaceState: (...)
	__proto__: Component

另外，ListView 和 ListItem 是無狀態組件，沒有 this 上下文對象，打印出來的也體現了這點：

	ListView render undefined
	ListItem render undefined

原则上，只具有 render 函数的组件都可以封装成无状态组件，在 ListView 這個例子中，较佳的使用场景应该是在 ListView 组件的 renderRow函数内部，因为每次对 ListView 组件的数据进行操作，都会不可避免的调用renderRow函数，而这时无状态组件无生命周期的特性恰好能有效的显示出来。虽然此时是否将renderRow里面的组件拆分出来在效果上都是一样的，但是组件的拆分有利于降低耦合，也有利于隔离这些单元进行独立测试。

创建类组件有两个选择，React.Component 和 React.PureComponent。两者除了在 shouldComponentUpdate 方法的实现逻辑上不一样，其他表现都一样，PureComponent 使用了 props、state 的浅比较。PureComponent
纯组件是通过 shouldComponentUpdate 生命周期函数控制减少 render 调用次数来减少性能损耗的。但该组件也具有一定的缺陷，因为它只能进行一层浅比较，简单来说，它只比较 props 和 state 的内存地址，如果内存地址相同，则 shouldComponentUpdate 生命周期就返回 false 不执行重绘。

PureComponent 的使用场景应该是局部数据发生改变的场景，比如带有输入框、switch 开关等的 UI 组件就可以使用 PureComponent 组件封装。PureComponent 中如果有数据操作最好配合第三方组件 Immutable 一起使用，因为 Immutable 可以保证数据的不变性。

一般情况下我们选择继承 React.PureComponent ，可以优化我们的组件性能，不过特殊时候你也可以选择继承 React.Component，然后自己去实现 shouldComponentUpdate 方法的逻辑，純組件不能使用 shouldComponentUpdate。

	class ListItem extends Component{
		shouldComponentUpdate(nextProps){
			console.log("shouldComponentUpdate", nextProps);
			const { data: dold } = this.props;
			const { data: dnew } = nextProps;
			let isNoChange = dold.id==dnew.id && dold.name==dnew.name && dold.checked==dnew.checked;
			return !isNoChange;
		}
		render(){
			let props = this.props;
			console.log("ListItem render", this)
			const {children, data} = props
			return <div {...data} className="item">
				<span {...data} className={+data.checked?"checked":"unchecked"} title="spin">{children} #{data.id} - </span>
				<span {...data} className="field">{data.name}</span>
				<span {...data} className="field">{data.value}PCS</span>
			</div>
		}
	}

将組件改為 PureComponent 后，更新數據是就需要保證對象是全新構造，而不是直接修改原數據對象，否則被 PureComponent 的更新機制忽略：

	let it = Object.assign({}, items[id]); // NOTICE: AN NEW OBJECT
	it.checked = !it.checked;
	items[id] = it;

	// let it = items[id]; // NOTICE: NEVER WORKING FOR PureComponent
	// it.checked = !it.checked;
	// items[id] = it;
	
	this.setState({items});

無狀態組件改寫為類組件比較容易，直接將原有的函數改名為 render()，再將參數 props 改爲 this.props 引用，最後添加 class extends 骨架即可，改造后的列表程序在修改選擇狀態時不會將所有 ListItem 進行重繪，而是更節省資源的重繪 TestSuite -> ListView -> 修改節點 ListItem：


	class ListItem extends PureComponent{
		render(){
			let props = this.props;
			console.log("ListItem render", this)
			const {children, data} = props
			return <div {...data} className="item">
				<span {...data} className={+data.checked?"checked":"unchecked"} title="spin">{children} #{data.id} - </span>
				<span {...data} className="field">{data.name}</span>
				<span {...data} className="field">{data.value}PCS</span>
			</div>
		}
	}

	class ListView extends PureComponent{
		render(){
			let props = this.props;
			console.log("ListView render", this)
			return <div className="list" {...props}>
				{ props.items.map((it,joke)=>{
					let icons = [["⚫", "⚪"], ["❌", "⭕"], ["👁‍🗨", "👁‍🗨"]][2];
					let icon = it.checked? icons[0]:icons[1]; 
					return <ListItem key={joke} data={it}>{icon}</ListItem>
				})}
			</div>
		}
	}

	class TestSuite extends Component {
		constructor(props){
			super(props)
			this.state = {items: this.mockGenerate()}
			this.click.bind(this)
		}

		mockGenerate(){
			let foods = [
				"Apple", "Pineapple", "Strawberry", "grape", "Peach",
				"Pear", "Arbutus", "Blackberry", "Guava", "Honeymelon",
				"Lemon", "Lichee", "Longan", "Loquat", "Lotus nut",
				"Mango", "Olive", "Papaya", "Persimmon", "Pomelo",
				"Raspberry", "Water Caltrop", "Water-chestnut",
			];
			return foods.map((it,joke)=>{
				return {id: joke, name: it, value: parseInt(Math.random()*100), checked: Math.random()>0.8}; 
			});
		}
		click(evt){
			let id = evt.target.id;
			let title = evt.target.title;
			console.log("TestSuite clicked", this, evt, id,)
			if(title!=="spin") return;
			let items = this.state.items;

			let it = Object.assign({}, items[id]); // NOTICE: AN NEW OBJECT
			it.checked = !it.checked;
			items[id] = it;

			// let it = items[id]; // NOTICE: NEVER WORKING FOR PureComponent
			// it.checked = !it.checked;
			// items[id] = it;
			
			this.setState({items});
		}

		render(){
			console.log("TestSuite render", this)
			return <ListView onClick={ (evt)=>{this.click(evt);} } {...this.state}></ListView>
		}
	}
	
	let list = <TestSuite key="list001" />;
	ReactDOM.render(list, mountNode);
	console.log(list)


注意 ListView onClick 事件的綁定方式，儘管已經在 TestSuite 的構造函數中綁定了上下文對象 this.click.bind(this)，只是 onClick 的響應會在子組件中進行，子組件并沒有為 onClick 綁定上下文對象，如果使用 onClick={this.click} 方式綁定事件處理函數，那麽在函數被調用是就無法獲得當前上下文，也訪問不了 TestSuite 組件。在處理函數 click() 中，主要通過 Object.Asign() 來拷貝一個數據副本，當然可以不使用這個 API，手動賦值到一個新的對象也可以。

事件處理過程中使用了一個小技巧，通過 `title="spin"` 來判斷是否是目標節點觸發的事件，如果不是就直接跳過。

需要注意的是給子組件傳遞的屬性數據要盡量少而優化，這樣可以避免觸發不必要的重繪消耗，同時，在 TestSuite 父組件上事件處理函數的綁定也要注意，HTML 原生事件如 onClick 等事件只要在任意一個 HMTL 節點綁定就可以在 React 接受到此 HMTL 能接受的事件流，會自動在組件閒傳遞，不必通過層層組件的屬性去設置。

以一個 handler 處理函數爲例：

	class TestSuite extends Component{
		// ...
		handler = (evt)=>{
			console.log("handler", this,)
			this.edit(evt);
		}

		render(){
			return <ListView 
				onClick={ (evt)=>{this.handler(evt);} } 
				onChange={ this.handler } 
			></ListView>
		}
	}

代碼中的 onClick 和 onChange 是兩種截然不同的綁定方式，onClick 會在沒次 render() 執行時生成一個新的事件處理函數閉包，也就是一個新的的數據對象。而 onChange 綁定的是 TestSuite 組件的一個成員即 handler，它也是一個閉包，只是它隨組件類一起初始化設置好了，不會隨著每次 render() 的執行而變更。

因此，下面 {...props} 這種將所有屬性綁定到子組件的做法是很容易出現性能問題的，如果 TestSuite 的事件綁定又是使用 `onClick={ (evt)=>{this.handler(evt);} }` 這種方式，那麽在每次 render() 執行都會導致所有 ListItem 子組件的重繪，包括 PuerComponent 組件：

	<ListItem {...props} key={joke} data={it}>{icon}</ListItem>

Vue 的 template 表示模板，同時也是一個模板包裹元素，本身不參與視圖的渲染，和微信小程序的 Block 節點一樣，而 React 可以渲染数组，只要數組元素是合法組件即可，更靈活，但注意要添加 key 屬性讓 React 在狀態更新時進行比對識別。可以把要渲染的任意组件放入数组中，這種方式可以避免 DOM 結構的節點層級過多，現在就可以用到這個特性。

現在完善一下這個列表程序，讓它具有實用的數據修改功能。完善后的列表程序具有 Online Editor 的功能，具有 ListItem 的選中狀態等：


	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<title> Demo for React JSX! </title>
			<script src="./js/react.development.js"> </script>
			<script src="./js/react-dom.development.js"> </script>
			<script src="./js/babel.min.js"> </script>
			<script src="./js/jquery.min.js"></script>
			<!-- 
			<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"> </script> 
			<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"> </script>
			<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"> </script>
			-->
			<style>
				.list { background: transparent; }
				.item { 
				    border: 1px solid rgba(39, 39, 39, 0.5);
					margin: 8px;
					padding: 2px;
					border-radius: 8px;
					background: radial-gradient(260% 100% at 50% 50%, white, rgba(0, 0, 0, 0.25));
				}
				.item .checked,
				.item .unchecked,
				.item .field { display: inline-block; min-width: 180px; }
				.item .field { display: inline-block; min-width: 180px; }
				.item .checked { cursor: pointer; min-width: 72px; color: rgba(40, 40, 40, 1.0);; }
				.item .unchecked { cursor: pointer; min-width: 72px; color: rgba(204, 204, 204, 0.25);; }
			</style>
		</head>
		<body class="half">

			<div id="example"> </div>

		</body>
	</html>

	<script>
		// import $ from "jquery";
		// import React from "react";
		// import {Component} from 'react';
		let Component = React.Component;
		let PureComponent = React.PureComponent;
		const mountNode = document.getElementById('example')
	</script>

	<script type="text/babel">

		class ListItem extends PureComponent{
			render(){
				let props = this.props;
				console.log("ListItem render", this)
				const {children, data} = props
				return <div {...data} className="item">
					<span {...data} className={+data.checked?"checked":"unchecked"} title="spin">{children} #{data.id} - </span>
					<span {...data} className="field">{data.name}</span>
					<span {...data} className="field">{data.value}PCS</span>
				</div>
			}
		}

		class ListView extends PureComponent{
			render(){
				let props = this.props;
				console.log("ListView render", this)
				return <div className="list" {...props}>
					{ props.items.map((it,joke)=>{
						let icons = [["⚫", "⚪"], ["❌", "⭕"], ["👁‍🗨", "👁‍🗨"]][2];
						let icon = it.checked? icons[0]:icons[1]; 
						return <ListItem key={joke} data={it}>{icon}</ListItem>
					})}
				</div>
			}
		}

		class TestSuite extends Component {
			constructor(props){
				super(props)
				this.state = {items: this.mockGenerate()}
				this.click.bind(this)
			}

			mockGenerate(){
				let foods = [
					"Apple", "Pineapple", "Strawberry", "grape", "Peach",
					"Pear", "Arbutus", "Blackberry", "Guava", "Honeymelon",
					"Lemon", "Lichee", "Longan", "Loquat", "Lotus nut",
					"Mango", "Olive", "Papaya", "Persimmon", "Pomelo",
					"Raspberry", "Water Caltrop", "Water-chestnut",
				];
				return foods.map((it,joke)=>{
					return {id: joke, name: it, value: parseInt(Math.random()*100), checked: Math.random()>0.8}; 
				});
			}
			click(evt){
				let id = evt.target.id;
				let title = evt.target.title;
				console.log("TestSuite clicked", this, evt, id,)
				if(title!=="spin") return;
				let items = this.state.items;

				let it = Object.assign({}, items[id]); // NOTICE: AN NEW OBJECT
				it.checked = !it.checked;
				items[id] = it;

				// let it = items[id]; // NOTICE: NEVER WORKING FOR PureComponent
				// it.checked = !it.checked;
				// items[id] = it;
				
				this.setState({items});
			}

			// onClick = (evt)=>this.click(evt)

			render(){
				console.log("TestSuite render", this)
				// return <ListView onClick={this.onClick} {...this.state}></ListView>
				return <ListView onClick={ (evt)=>{this.click(evt);} } {...this.state}></ListView>
			}
		}
		
		let list = <TestSuite key="list001" />;
		ReactDOM.render(list, mountNode);
		console.log(list)
		
	</script>


# ⚑ React SSR & Server Components 
- https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html
- https://github.com/reactjs/server-components-demo
- https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
- https://reactrouter.com/web/guides/server-rendering
- Vue.js 服务器端渲染指南 https://ssr.vuejs.org/zh/

首先，搞清楚什么是 SSR 这个概念，SSR - Server Side Rendering 服务端渲染，指页面的渲染和生成是在服务端完成的，并将渲染好的页面返回客户端。这不是一个什么新技术，早期的 Web 应用都是 SSR，像 PHP 的服务端脚本，执行模板中的代码，然后拼接成一个 HTML 页面返回给客户端。

而现代的 SSR 是基于组件化这个潮流之上的，与传统的做法大不相同，首先需要使用一个基于组件化开发的前端框架，如 React、Angular、Vue 等，然后再利用特定的 API 在服务端运行以生成具有同样交互能力的应用。

这里主要涉及到一个问题：具有交互能力的组件在服务器端渲染生成 HTML 后再返回给客户端，并且具有同样的交互能力。这个过程就像是对一个生命进行脱水保鲜，再运输到目的地，再 `hydrate()` 浸水复活的。

基本流程：

- 服务器渲染组件，并将组件生成的 HTML 发往浏览器；
- 在浏览的交互中，请求新的地址发回服务器；
- 服务器通过会话、路由配置解析相应的组件，重新执行第一步流程。

在后端调用 renderToString() 的方法，把整个页面渲染成字符串。然后前端调用 hydrate() 方法，把后端传递的字符串和自己的实例混合起来，保留 HTML 并附上事件监听，并复原交互功能。这个过程就像有脱水保持活性，转移到客户端后再注水活化。这就是 Next.js 实现 SSR 的主要方法，也就是后端会渲染 HTML, 前端添加监听。前端也会渲染一次，以确保前后端渲染结果一致。如果结果不一致，控制台会报错提醒我们。

React 服务端渲染得到的字符串并不会以 <div onclick="xxx" /> 这种内联事件形态出现。所以，ReactDOMServer 渲染的内容在「结构-样式-行为」铁三角关系里，缺失了「行为」。

React v15 版本的 ReactDOM.render 方法可以根据 data-react-checksum 的标记，复用 ReactDOMServer 的渲染结果，不重复渲染，而是根据 data-reactid 属性，找到需要绑定的事件元素，进行事件绑定的处理。补完「结构-样式-行为」。

React v16 版本里，ReactDOMServer 渲染的内容不再有 data-react 的属性，而是尽可能复用 SSR 的 HTML 结构。这就带来了一个问题，ReactDOM.render 不再能够简单地用 data-react-checksum 的存在性来判断是否应该尝试复用，如果每次 ReactDOM.render 都要尽可能尝试复用，性能和语义都会出现问题。所以， ReactDOM 提供了一个新的 API， ReactDOM.hydrate() 。


在组件化的技术潮流下，服务端渲染焕发新的生机，和旧式的 JSP、PHP 等有着巨大差别。

理论上，SSR 或传统的服务端渲染最大的瓶颈就是服务端的性能，而数据库则是所有能力的瓶颈，但是服务端渲染的优势也明显：

- 首屏加载快，相比SPA单页应用还要有优势。
- SEO 优化 利于爬虫，爬取数据。

如果用户规模大，SPA 作为一个大型分布式系统，充分利用用户的设备去运行 App 的运算，SSR 则是把这些工作包揽到自己的服务器上。所以对于需要大量计算，如图表特别多，而且用户量巨大的页面，并不太适合，应该适当将运算能力分散到客户端去完成。但 SSR 作为静态内容的展示，还是非常适合的，能满足大部分的内容展示页面，或商业站点。

使用 SSR 使项目复杂度增加，需要前端团队有较高的技术素养。为了同构，要处处兼容 Node.js 的执行环境，不能有浏览器相关的原生代码在服务端执行，前端代码使用的 window 在 node 环境是不存在的，所以要对客户端进行 mock window，获取其中最重要的是 cookie，userAgent，location 等属性数据。

以下是基于 Deno 编写的 React SSR 应用示范，为了简化起见，服务器端的 HelloSSR 是简化后 Hello 组件，它们生成的初始内容必须一致，如果使用 hydrateRoot()。SSR 渲染目的是向浏览器在发出页面请求时，服务器可以提供一个具有完整 HTML 结构的页面，这样做的目的可以是出于 SEO 搜索引擎优化需要。

浏览器获取到 SSR 页面后，就执行客户端的脚本，ReactDOM.hydrate() 则根据对应组件生成的 HTML 绑定事件处理函数，恢复组件的交互能力。dydrate() 相比 render() 可以跳过组件 HTML 结构处理过程，因为 HTML 已经由服务生成并已经在页面中，这样以获得非常高效的首次加载体验，React SSR 会使用项目复杂化。

SSR 是 JSP、PHP 时代就存在的古老的技术，只不过之前是通过模版引擎。React SSR 则是基于渲染组件得到 HTML，并且客户端再次渲染，这种叫做同构渲染的模式。

SSR 存在的主要目的除了 SEO 优化，还有就是解决 Client-Side Render (CSR) 项目的初次加载时间长的问题，TTFP（Time To First Page）时间比较长。CSR 渲染模式下，首先要加载 HTML 文件，之后要下载页面所需的 JavaScript 文件，然后 JavaScript 文件渲染生成页面。

```ts,ignore
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


## SSR with ReactDOMServer
浅析React 18 Streaming SSR https://juejin.cn/post/7064759195710521381

使用 ReactDOMServer 进行服务器端渲染示范可以参考 server-components-demo。

React ReactDOMServer 模块提供的 SSR API 有两个：

- `renderToString()` 方法渲染的时候带有 data-reactid 属性，在浏览器访问页面的时候能识别到 HTML 的内容，不会执行 `createElement` 二次创建 DOM。
- `renderToStaticMarkup()` 则没有 data-reactid 属性，页面看上去干净点。在浏览器访问页面的时候不能识别到 HTML 内容，会执行 `createElement` 方法重新创建 DOM。
- `renderToNodeStream()` 支持直接渲染到节点流，渲染到流可以减少内容第一个字节 TTFB 的时间，在文档的下一部分生成之前，将文档的开头至结尾发送到浏览器。 当内容从服务器流式传输时，浏览器将开始解析 HTML 文档。速度是 `renderToString` 的三倍左右，官方是这么说。
- `renderToStaticNodeStream()` 很像前面一个 API，只是没有额外的 DOM 属性，可以节省数据。React 内部使用，如`data-reactroot`，在只生成静态页面时非常有用。返回数据和`renderToStaticMarkup`是一样的，如果需要交互就不能使用此方法，而应该在服务端使用`renderToNodeStream`，在客户端使用`ReactDOM.hydrate()`。

TFFB：Time To First Byte，发出页面请求到接收到应答数据第一个字节所花费的毫秒数。

前面两个 String API 能跨 Node.js、浏览器环境运行：renderToString()、renderToStaticMarkup()

后面两个 Stream API 只能在 Node.js 环境运行：renderToNodeStream()、renderToStaticNodeStream()

其中 renderToString(element) 是最基础的 SSR API，输入 React 组件（ReactElement），输出无交互性的 HTML 字符串。由客户端 hydrate API 给它附加上交互行为，并完成页面渲染。

类似的 renderToStaticMarkup 只用于纯展示（没有事件交互，不需要 hydrate）的场景。只生成干净的 HTML，不带额外的 DOM 属性，如 data-reactroot，响应体积上有些微的优势。

This is useful if you want to use React as a simple static page generator, as stripping away the extra attributes can save some bytes. If you plan to use React on the client to make the markup interactive, do not use this method. Instead, use renderToString on the server and ReactDOM.hydrate() on the client.

React 16 改用单节点校验来复用（服务端返回的）HTML 节点，不再生成 data-reactid、data-react-checksum 等体积占用大户，两个 API 渲染结果的体积差异变得微乎其微。

服务端渲染（Server side rendering）技术涉及前端、后端两方面的 API 配合，React 对应提供的 SSR API 对应为面向服务端的 ReactDOMServer 和客户端执行的 ReactDOM，基本工作流程：

在用户访问时，React SSR 在服务器将 React 组件渲染成 HTML 发送给客户端，这样客户端能够在 JavaScript 渲染完成前展示基本的静态 HTML 内容，减少白屏等待的时间。

然后在 JavaScript 加载完成后对已有的 HTML 组件进行 React 事件逻辑绑定（也就是 Hydration 过程），Hydration 完成后才是一个正常的 React 应用。

```js
// https://react.dev/reference/react-dom/server
ReactDOMServer.renderToString(reactNode)
ReactDOMServer.renderToStaticMarkup(reactNode)
ReactDOMServer.renderToNodeStream(reactNode) // Deprecated
ReactDOMServer.renderToReadableStream(reactNode, options?) 
ReactDOMServer.renderToStaticNodeStream(reactNode)

// https://react.dev/reference/react-dom
ReactDOM.hydrate(element, container, callback?) // Deprecated
ReactDOM.hydrateRoot(domNode, reactNode, options?)
ReactDOM.render(element, container, callback?) // Deprecated
ReactDOM.createRoot(domNode, options?)
```

但是这类 SSR 存在弊端：

1. 服务端需要准备好所有组件的 HTML 才能返回。如果某个组件需要的数据耗时较久，就会阻塞整个 HTML 的生成。
2. Hydration 是一次性的，用户需要等待客户端加载所有组件的 JavaScript 并 Hydrated 完成后才能和任一组件交互。（渲染逻辑复杂时，页面首次渲染到可交互之间可能存在较长的不可交互时间）
3. 在 React SSR 中不支持客户端渲染常用的代码分割组合 React.lazy 和 Suspense。

React 18 中新的 SSR 架构 React Fizz 带来了两个主要新特性来解决上述的缺陷：

1. Streaming HTML（流式渲染）
2. Selective Hydration（选择性注水）


安装依赖：

	npm install --save-dev  koa babel-core babel-polyfill babel-preset-latest-node babel-preset-stage-2 babel-preset-react
	# or
	yarn add -dev  koa babel-core babel-polyfill babel-preset-latest-node babel-preset-stage-2 babel-preset-react


启动文件 start.js：

```js
// start.js
require('babel-core/register')({
    ignore: [/node_modules/],
    presets: [
        'stage-2',
        'react',
        [
            "latest-node",
            { "target": "current" }
        ]
    ]
});

require('babel-polyfill');
require('./../index');
```


入口文件 index.js

```js
// index.js
import Koa from 'koa';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const { renderToString } = ReactDOMServer;

const app = new Koa();

app.use(ctx => {
ctx.body = renderToString(
    <div>
        <h1>Hello，World</h1>
    </div>
);
});

app.listen(3000, () => {
console.log('server run in 3000');
});
```

执行 npm start 启动项目

```js
"scripts": {
	"start": "node ./src/start.js"
},

```



# ⚑ Redux Demo 状态管理仓库
[Redux 入门教程（一）：基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
[Redux 入门教程（二）：中间件与异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)
[Redux 入门教程（三）：React-Redux 的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)
[Getting Started with Redux](https://redux.js.org/introduction/getting-started)
[Getting Started with React-Redux](https://react-redux.js.org/introduction/quick-start)
[Redux 核心概念](https://www.redux.org.cn/docs/introduction/CoreConcepts.html)
[Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
[Reducers](http://cn.redux.js.org/docs/basics/Reducers.html)
[Redux中的reducer到底是什么，以及它为什么叫reducer？](https://zhuanlan.zhihu.com/p/25863768)
[Redux Counter Example](https://github.com/reduxjs/redux/tree/master/examples/counter)


对于大型的复杂应用来说，这两方面恰恰是最关键的。因此，只用 React 没法写大型应用。

为了解决这个问题，2014年 Facebook 提出了 Flux 架构的概念，引发了很多的实现。2015年，Redux 出现，将 Flux 与函数式编程结合一起，很短时间内就成为了最热门的前端架构。

首先明确一点，Redux 是一个有用的架构，但不是非用不可。事实上，大多数情况，你可以不用它，只用 React 就够了。

曾经有人说过这样一句话。

"如果你不知道是否需要 Redux，那就是不需要它。"

Redux 的创造者 Dan Abramov 又补充了一句。

"只有遇到 React 实在解决不了的问题，你才需要 Redux 。"

简单说，如果你的UI层非常简单，没有很多互动，Redux 就是不必要的，用了反而增加复杂性。

Redux 的设计思想很简单，就两句话。

（1）Web 应用是一个状态机，视图与状态是一一对应的。
（2）所有的状态，保存在一个对象里面。

为了避免代码对状态数据的随意修改，引入 Redux 来管理状态数据，以一种规范化方式来读写状态数据。 Redux有3大核心概念： Action Reducer Store，触发 Action 函数就相当触发写动作。Store 就是保存数据的地方，你可以把它看成一个容器，整个应用只能有一个 Store。Redux 提供 `createStore()` 这个函数，用来生成 Store。

Store 对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 `State`。当前时刻的 State，可以通过 `store.getState()` 拿到。

Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。这里的引入 Action 就是用来约束用户对状态数据的规范化写入行为，就是 Redux 实现的状态数据管理的规范化。

可以了解Mutabilit(可变性)和Immutability(不变性)这两个概念。「不可变」就代表某些数据是不可修变的，如果想要改变不可变的数据，那么只能去复制旧的数据，再产生新的数据来取代旧的数据，我们永远不要去修改旧的数据。和Vue框架作为对比，Vue 的编程观念偏向前者，React 偏向后者。

Action 是一个对象，其中的 `type` 属性是必须的，表示 Action 的名称。其他属性可以自由设置，社区有一个规范可以参考。

	const action = {
	  type: 'ADD_TODO',
	  payload: 'Learn Redux'
	};

上面代码中，Action 的名称是 ADD_TODO，它携带的信息是字符串 Learn Redux。View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 `Action Creator`。

可以这样理解，Action 对象描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。通过 `store.dispatch()` 方法将 Action 运送数据到 Store。Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 `Reducer`。Reducer 可以看作一个函数，它接受当前 State 和一个 Action 作为参数，通常会根据 Action 指定的 type 返回一个新的 State。

	const reducer = function (state, action) {
	  // TODO: return a new state;
	};

这个函数叫做 `Reducer` 和数组的 reduce 方法有一定关系，Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。纯函数是函数式编程的概念，必须遵守以下一些约束。

+ 不得改写参数
+ 不能调用系统 I/O 的API
+ 不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果

由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象。

Reducer 函数负责生成 State。由于整个应用只有一个 State 对象，包含所有数据，对于大型应用来说，这个 State 必然十分庞大，导致 Reducer 函数也十分庞大。Redux 提供了一个 `combineReducers` 方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合并到一起形成最终的 Reducer 函数。参考以下两组等价写法，如果 State 的属性名必须与子 Reducer 函数同名还可以使用 ES6 的简化写法。

	const reducer = combineReducers({
	  a: doSomethingWithA,
	  b: doSomethingWithB,
	  c: doSomethingWithC
	})

	function reducer(state = {}, action) {
	  return {
	    a: doSomethingWithA(state.a, action),
	    b: doSomethingWithB(state.b, action),
	    c: doSomethingWithC(state.c, action)
	  }
	}

Store 允许使用 `store.subscribe()` 方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。store.subscribe 方法返回一个函数，调用这个函数就可以解除监听。


	import { createStore } from 'redux';
	const store = createStore(reducer);

	let unsubscribe = store.subscribe(() =>
	  console.log(store.getState())
	);

	// unsubscribe();

显然，只要把 View 的更新函数放入listen，就会实现 View 的自动渲染。对于 React 项目，就是组件的视图更新函数render方法或setState方法。

下面是经过修改的官方计数器实例[Redux Counter Example]，可以直接保存为 html 文件运行。

	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="utf-8"/>
	        <title> Hello React! </title>
	        <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"> </script>
	        <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"> </script>
	        <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"> </script>
	        <script src="https://cdn.staticfile.org/redux/4.0.1/redux.min.js"></script>
	        <script src="https://cdn.staticfile.org/react-redux/6.0.1/react-redux.min.js"></script>
	        <script src="https://cdn.staticfile.org/prop-types/15.7.2/prop-types.js"></script>
	    </head>
	    <body>
	        <div id="example">
	        </div>
	    </body>
	</html>

	<script type="text/babel">
	let Component = React.Component

	// Counter Component
	class Counter extends Component {
	  constructor(props) {
	    super(props);
	    this.incrementAsync = this.incrementAsync.bind(this);
	    this.incrementIfOdd = this.incrementIfOdd.bind(this);
	  }

	  incrementIfOdd() {
	    if (this.props.value % 2 !== 0) {
	      this.props.onIncrement()
	    }
	  }

	  incrementAsync() {
	    setTimeout(this.props.onIncrement, 1000)
	  }

	  render() {
	    const { value, onIncrement, onDecrement } = this.props
	    return (
	      <p>
	        Clicked: {value} times
	        <button onClick={onIncrement}> + </button>
	        <button onClick={onDecrement}> - </button>
	        <button onClick={this.incrementIfOdd}> Increment if odd </button>
	        <button onClick={this.incrementAsync}> Increment async </button>
	      </p>
	    )
	  }
	}

	Counter.propTypes = {
	  value: PropTypes.number.isRequired,
	  onIncrement: PropTypes.func.isRequired,
	  onDecrement: PropTypes.func.isRequired
	}

	// Reducer 
	const reducer = (state = 0, action) => {
	  switch (action.type) {
	    case 'INCREMENT':
	      return state + 1
	    case 'DECREMENT':
	      return state - 1
	    default:
	      return state
	  }
	}

	// index.js
	let createStore = Redux.createStore;

	const store = createStore(reducer)
	const rootEl = document.getElementById('example')

	const render = () => ReactDOM.render(
	  <Counter
	    value={store.getState()}
	    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
	    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
	  />,
	  rootEl
	)

	render()
	store.subscribe(render)
	</script>

在实际应用中，有一个关键问题没有解决：异步操作怎么办？Action 发出以后，Reducer 立即算出 State，这叫做同步；Action 发出以后，过一段时间再执行 Reducer，这就是异步。怎么才能 Reducer 在异步操作结束后自动执行呢？这就要用到新的工具：中间件（middleware）。

在 `store.dispatch()` 方法执行前插入中间件代码是个好的切入点，举例来说，要添加日志功能，把 Action 和 State 打印出来，可以对 `store.dispatch()` 进行改造:

	let next = store.dispatch;
	store.dispatch = function dispatchAndLog(action) {
	  console.log('dispatching', action);
	  next(action);
	  console.log('next state', store.getState());
	}

上面代码中，对 store.dispatch 进行了重定义，在发送 Action 前后添加了打印功能。这就是中间件的雏形。在发出 Action 和执行 Reducer 这两步之间，添加了其他功能，这里目的就是要添加 AJAX 功能，Redux 自带 applyMiddleware 中间件。

	import { applyMiddleware, createStore } from 'redux';
	import createLogger from 'redux-logger';
	const logger = createLogger();

	const store = createStore(
	  reducer,
	  applyMiddleware(logger)
	);

createStore方法可以接受整个应用的初始状态作为参数，那样的话，applyMiddleware 就是第三个参数了。

	const store = createStore(
	  reducer,
	  initial_state,
	  applyMiddleware(logger)
	);

applyMiddleware 它是 Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行。



# ⚑ React-Redux Demo

为了方便使用，Redux 的作者封装了一个 React 专用的库 React-Redux，相对直接使用 Redux，使用 React-Redux 更便利，但是需要掌握额外的 API，并且要遵守它的组件拆分规范。

React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）。

	const Title = value => <h1>{value}</h1>;

UI 组件有以下几个特征。

* 只负责 UI 的呈现，不带有任何业务逻辑
* 没有状态（即不使用this.state这个变量）
* 所有数据都由参数（this.props）提供
* 不使用任何 Redux 的 API
* 下面就是一个 UI 组件的例子。

因为不含有状态，UI 组件又称为"纯组件"，即它纯函数一样，纯粹由参数决定它的值。

容器组件的特征恰恰相反，负责管理数据和业务逻辑，不负责 UI 的呈现，带有内部状态，使用 Redux 的 API。

总之，只要记住一句话就可以了：UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。

你可能会问，如果一个组件既有 UI 又有业务逻辑，那怎么办？回答是，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。

React-Redux 规定，所有的 UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。

React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。为了定义业务逻辑，需要给出下面两方面的信息。

0 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
0 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。

	import { connect } from 'react-redux'

	const VisibleTodoList = connect(
	  mapStateToProps,
	  mapDispatchToProps
	)(TodoList)

上面代码中，connect 方法接受两个参数：`mapStateToProps` 和 `mapDispatchToProps`。它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。尽管最终他们都是合并到 props 属性中的，后者逻辑上强调是 Action 动作，是方法函数。

`mapStateToProps` 会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。它的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。

	const mapStateToProps = (state, ownProps) => {
	  return {
	    active: ownProps.filter === state.visibilityFilter
	  }
	}

`mapDispatchToProps` 是connect函数的第二个参数，用来建立 UI 组件的参数到 `store.dispatch` 方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。

如果 `mapDispatchToProps` 是一个函数，会得到 `dispatch` 和 `ownProps` 两个参数，第二个参数是容器组件的 props 对象。

	const mapDispatchToProps = ( dispatch, ownProps ) => {
	  return {
	    onClick: () => {
	      dispatch({
	        type: 'SET_VISIBILITY_FILTER',
	        filter: ownProps.filter
	      });
	    }
	  };
	}

`mapDispatchToProps` 作为 Action 函数定义，应该返回一个对象，该对象的每个键值对都是一个映射，定义了 UI 组件的参数怎样通过 dispatch 发出 Action，这里直接使用了一个对象，省略了 Action creator 的定义。

如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出。举例来说，上面的mapDispatchToProps写成对象就是下面这样。

	const mapDispatchToProps = {
	  onClick: (filter) => {
	    type: 'SET_VISIBILITY_FILTER',
	    filter: filter
	  };
	}

connect 方法生成容器组件以后，需要让容器组件拿到 state 对象，才能生成 UI 组件的参数。

一种解决方法是将state对象作为参数，传入容器组件。但是，这样做比较麻烦，尤其是容器组件可能在很深的层级，一级级将state传下去就很麻烦。

React-Redux 提供 `Provider` 组件，可以让容器组件拿到 state。Provider 在根组件外面包了一层，这样一来，App 的所有子组件就默认都可以拿到 state 了。它的原理是 React 组件的 Context API，参考官方文档。


以下是一个计数器的例子：

	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="utf-8"/>
	        <title> Hello React! </title>
	        <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"> </script>
	        <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"> </script>
	        <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"> </script>
	        <script src="https://cdn.staticfile.org/redux/4.0.1/redux.min.js"></script>
	        <script src="https://cdn.staticfile.org/react-redux/6.0.1/react-redux.min.js"></script>
	        <script src="https://cdn.staticfile.org/prop-types/15.7.2/prop-types.js"></script>
	    </head>
	    <body>
	        <div id="example">
	        </div>
	    </body>
	</html>

	<script type="text/babel">

	// /component/Counter.tsx
	// import {Component} from 'react';
	let Component = React.Component;

	class Counter extends Component {
	  render() {
	    const { value, onIncreaseClick } = this.props
	    return (
	      <div>
	        <span>{value}</span>
	        <button onClick={onIncreaseClick}>Increase</button>
	      </div>
	    )
	  }
	}

	Counter.propTypes = {
	  value: PropTypes.number.isRequired,
	  onIncreaseClick: PropTypes.func.isRequired
	}

	// /conponent/localStorage.tsx
	// import { Component } from 'react';
	// import { connect } from 'react-redux';

	// import Counter from '../components/Counter';
	// import PropTypes from 'prop-types'
	// import { increment } from '../actionsCreators';
	// import { createStore } from 'redux'
	// import { Provider, connect } from 'react-redux'

	let connect = ReactRedux.connect;
	let Provider = ReactRedux.Provider;
	let createStore = Redux.createStore;

	// Action
	const increaseAction = { type: 'increase' }

	// Reducer
	function counter(state = { count: 0 }, action) {
	  const count = state.count
	  switch (action.type) {
	    case 'increase':
	      return { count: count + 1 }
	    default:
	      return state
	  }
	}

	// Store
	const store = createStore(counter)

	// Map Redux state to component props
	function mapStateToProps(state) {
	  return {
	    value: state.count
	  }
	}

	// Map Redux actions to component props
	function mapDispatchToProps(dispatch) {
	  return {
	    onIncreaseClick: () => dispatch(increaseAction)
	  }
	}

	// Connected Component
	const App = connect(
	  mapStateToProps,
	  mapDispatchToProps
	)(Counter)

	ReactDOM.render(
	  <Provider store={store}>
	    <App />
	  </Provider>,
	  document.getElementById('example')
	)
	</script>


# ⚑ React Router 路由组件
- [React Router 指南](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
- [React Router Tutorial](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)
- [React Router](https://reacttraining.com/react-router/)
- [React Training react-router](https://github.com/ReactTraining/react-router)
- [Rote API](https://reactrouter.com/web/api/Route)
- [React Router 4 Tutorial](https://www.techiediaries.com/react-router-dom-v4/)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [React Router 3 Documentation](https://github.com/ReactTraining/react-router/tree/v3/docs)
- [React Router 2 Documentation](https://github.com/ReactTraining/react-router/tree/v2.8.1/docs)

你会发现，它不是一个库，也不是一个框架，而是一个庞大的体系。想要发挥它的威力，整个技术栈都要配合它改造。你要学习一整套解决方案，从后端到前端，都是全新的做法。

举例来说，React 不使用 HTML，而使用 JSX 。它打算抛弃 DOM，要求开发者不要使用任何 DOM 方法。它甚至还抛弃了 SQL ，自己发明了一套查询语言 GraphQL 。当然，这些你都可以不用，React 照样运行，但是就发挥不出它的最大威力。

这样说吧，你只要用了 React，就会发现合理的选择就是，采用它的整个技术栈。

本文介绍 React 体系的一个重要部分：路由库React-Router。它是官方维护的，事实上也是唯一可选的路由库。它通过管理 URL，实现组件的切换和状态的变化，开发复杂的应用几乎肯定会用到。

官方的示例库非常棒，由浅入深，分成14步，每一步都有详细的代码解释。我强烈建议你先跟着做一遍，然后再看下面的API讲解。[说明] 本文写作时，React-router 是 2.x 版，本文的内容只适合这个版本，与最新的 4.x 版不兼容。目前，官方同时维护 2.x 和 4.x 两个版本，所以前者依然可以用在项目中。2017年3月。

官方文档和实例克隆：

	git clone https://github.com/reactjs/react-router-tutorial/tree/master/lessons

	git clone https://github.com/ReactTraining/react-router.git

React Router v4 分成四个模块：

- **react-router**: common core components between dom and native versions.
- **react-router-dom**: the dom version designed for browsers or web apps.
- **react-router-native**: the native version designed for react-native mobile apps.

React-Router Installation

	$ npm install --save react-router

React Router 模块只提供核心的功能，如果要使用其它组件需要安装 react-router-dom，对应的，React Native 应用安装 react-router-native，它们都会依赖安装 react-router。

Then with a module bundler like webpack, use as you would anything else:

	// using ES6 modules
	import { Router, Route, Switch } from "react-router";
	 
	// using CommonJS modules
	var Router = require("react-router").Router;
	var Route = require("react-router").Route;
	var Switch = require("react-router").Switch;

The UMD build is also available on unpkg:

	<script src="https://unpkg.com/react-router/umd/react-router.min.js"></script>


React-Router-Dom Installation

	$ npm install --save react-router-dom

Then with a module bundler like webpack, use as you would anything else:

	// using ES6 modules
	import { BrowserRouter, Route, Link } from "react-router-dom";
	 
	// using CommonJS modules
	const BrowserRouter = require("react-router-dom").BrowserRouter;
	const Route = require("react-router-dom").Route;
	const Link = require("react-router-dom").Link;

The UMD build is also available on unpkg:

	<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

You can find the library on window.ReactRouterDOM.


## React-Router 基本使用

1). 安装

	npm install react-router --save

2). 定义各个路由组件

	// index.js注册路由
	import {BrowserRouter} from 'react-router-dom'

	ReactDOM.render((
	    <BrowserRouter>
	        <App/>
	    </BrowserRouter>
	), document.getElementById('root'));


先在组件中引入路由组件，添加路由链接，可以使用 Link 或者 NavLink，区别是 NavLink 有个 active 的状态类名，可以通过 activeClassName 来设置其样式，如下代码直接在 css 文件中设置 selected 的样式即可（to后面是要展示的路由地址）

	import {NavLink, Switch, Route, Redirect} from 'react-router-dom'

	<ul>
	  <li>
	      <NavLink to='/home/news'  activeClassName="selected">news</NavLink>
	  </li>
	  <li>
	      <NavLink to='/home/message' activeClassName="selected">message</NavLink>
	  </li>
	</ul>

路由组件展示，如果只有一个组件要展示直接写一个`<Route>`标签进行展示即可。需要设置两个属性，path 和 component，path 是设置路由地址，component是相对应要展示的组件

	<Route path='/home/news' component={News}></Route>

如果有多个组件根据点击相应的路由展示，就需要用到 Switch 组件进行判断，这里多数情况下需要指定一个默认路由地址（如果未匹配到任何可用的路由地址就使用这个地址进行展示），使用 Redirect 重定向组件，Redirect 和 Route 一样需要设置路由地址和相对应的组件，不同的是它的地址需要使用to属性来设置

	<Switch>
	  <Route path='/home/news' component={News}></Route>
	  <Route path='/home/message' component={Message}></Route>
	  <Redirect to='/home/news' component={News} />
	</Switch>

注意，原生的链接标签 a.href 和 NavLink.to 设置同样的值，表现是不一样的：

	<a to="/play">Play Pacman</a>
	<NavLink to="/play">Play Pacman</NavLink>

使用原生标签就是使用浏览器的地址转到指定的位置，而 NavLink 却会根据路由 history 属性配置生成对应的地址。


3).路由传参

路由传参就是在Route组件指定path的时候，path不是固定的是根据某个值变化，所以需要传个参数，这个参数写在冒号后面，参数名可以自己定义，参数值可以在 props.match.params 或 props.computedMatch.params 中找到下面代码中为 id 所传参数

	<Route path='/home/message/messagedetail/:id' component={MsgDetail} />

4).操作路由历史记录 history

history 对象可以在 props 里面查看, history 有几个方法比较常用，分别是

1.push添加一条历史记录

	this.props.history.push(`/home/message/messagedetail/1`)

2.替换一条历史记录，替换的方法会在历史记录中删除当前所在路由的历史记录换成跳转的

	this.props.history.replace(`/home/about`)

3.前进

	this.props.history.goForward()

4.后退

	this.props.history.goBack()


使用时，路由器`Router`组件本身只是一个路由容器组件，路由规则要通过`Route`组件定义。

	import { Router, Route, hashHistory } from 'react-router';

	render((
	  <Router history={hashHistory}>
	    <Route path="/" component={App}/>
	  </Router>
	), document.getElementById('app'));

上面代码中，用户访问根路由，比如`http://www.example.com/`，组件APP就会加载到`document.getElementById('app')`。`Router`组件有一个参数`history`赋值为`hashHistory`，表示路由的切换由URL的hash变化决定，即URL的`#`后的部分发生变化。Route组件定义了URL路径与组件的对应关系，`path`规则匹配时就会执行`component`指定得组件。如例子，用户访问`http://localhost:8080/#/about`时，加载`About`组件。路由匹配规则是从上到下执行，一旦发现匹配，就不再其余的规则了。

	<Router history={hashHistory}>
	  <Route path="/" component={App}/>
	  <Route path="/repos" component={Repos}/>
	  <Route path="/about" component={About}/>
	</Router>

新版 React 的 history 使用方法：

	import React from "react";
	import ReactDOM from "react-dom";
	import { Router } from "react-router";
	import { createBrowserHistory } from "history";

	const history = createBrowserHistory();

	ReactDOM.render(
	  <Router history={history}>
	    <App />
	  </Router>,
	  node
	);


## histroy 设置工作方法

Router组件的`history`属性，用来监听浏览器地址栏的变化，并将 URL 解析成一个地址对象，供 React Router 匹配。

一共可以设置三种工作方式：

	browserHistory
	hashHistory
	createMemoryHistory

如果设为`hashHistory`，路由将通过URL的`hash`部分切换，`#` 号后的部分，URL的形式类似`example.com/#/some/path`。

	import { hashHistory } from 'react-router'

	render(
	  <Router history={hashHistory} routes={routes} />,
	  document.getElementById('app')
	)

如果设为`browserHistory`，浏览器的路由就不再通过`Hash`完成了，而显示正常的路径`example.com/some/path`，背后调用的是浏览器的`History API`，新一代浏览器API支持修改URL地址而不刷新页面。

	import { browserHistory } from 'react-router'

	render(
	  <Router history={browserHistory} routes={routes} />,
	  document.getElementById('app')
	)

但是，这种情况需要对服务器改造。否则用户直接向服务器请求某个子路由，会显示网页找不到的404错误。

如果开发服务器使用的是`webpack-dev-server`，加上`--history-api-fallback`参数就可以了。

	$ webpack-dev-server --inline --content-base . --history-api-fallback

`createMemoryHistory`主要用于服务器渲染。它创建一个内存中的`history`对象，不与浏览器URL互动。

	const history = createMemoryHistory(location)

新的 API 按以下方式处理：

	import { createBrowserHistory as createHistory } from "history";
	import { createHashHistory as createHistory } from "history";
	const history = createHistory();

Hash 的方式：

	export type HashType = 'hashbang' | 'noslash' | 'slash';

	export interface HashHistoryBuildOptions {
	    basename?: string;
	    hashType?: HashType;
	    getUserConfirmation?: typeof getConfirmation;
	}

SPA - Single Page Application 应用的流行自然离不开前端 Route 的兴起，现在流行的 MVVM 框架都是由前端控制路由分发，用 AJAX 和 前端 Route 能带给用户很好的体验。但是对于 SEO 搜索引擎优化就是一场莫大的灾难，因为 AJAX 应用不会留下历史记录。

Hashbang 这是 由 Google 提出的，这种风格形在地址栏使用 #! 符号：

	http://lcoalhost:8080#!woshihashbang
	http://localhost:8080/#!/user/login

虽然 # 后面的 Hash 内容默认不会被爬虫爬到，但是如果是 Hashbang，那么爬虫会认为爬到的是个 SPA 应用，因此，它会自动爬去到 hash 里的内容，现在知道了，hashbang 就是为了解决 AJAX 应用的 SEO 问题而诞生的。

slash 方式就是使用 #/ 符号，相比原本的 Hash 多了一个斜杠。


## React Router 嵌套路由

	<Router history={hashHistory}>
	  <Route path="/" component={App}>
	    <Route path="/repos" component={Repos}/>
	    <Route path="/about" component={About}/>
	  </Route>
	</Router>

上面代码中，用户访问`/repos`时，会先加载`App`组件，然后在它的内部再加载`Repos`组件。

	<App>
	  <Repos/>
	</App>

App组件要写成下面的样子。

	export default React.createClass({
	  render() {
	    return <div>
	      {this.props.children}
	    </div>
	  }
	})

上面代码中，`App`组件的`this.props.children`属性就是子组件，这里就是`Repos`呈现的位置。 子路由也可以不写在`Router`组件里面，单独传入`Router`组件的`routes`属性。

	let routes = <Route path="/" component={App}>
				  <Route path="/repos" component={Repos}/>
				  <Route path="/about" component={About}/>
				</Route>;

	<Router routes={routes} history={browserHistory}/>

## path 属性

Route组件的`path`属性指定路由的匹配规则，省略时表示总是加载指定组件。

	<Route path="inbox" component={Inbox}>
	   <Route path="messages/:id" component={Message} />
	</Route>

上面代码中，`:id`表示一个参数占位符，当用户访问`/inbox/messages/123`时，会加载下面的组件。相当省略外层 Route 的`path`参数，写成下面的样子。

	<Route component={Inbox}>
	  <Route path="inbox/messages/:id" component={Message} />
	</Route>

现在用户访问/inbox/messages/:id时，组件加载还是原来的样子。

	<Inbox>
	  <Message/>
	</Inbox>

## path 通配符


>:paramName – matches a URL segment up to the next /, ?, or #. The matched string is called a param
>() – Wraps a portion of the URL that is optional. You may escape parentheses if you want to use them in a url using a backslash \
>* – Matches all characters (non-greedy) up to the next character in the pattern, or to the end of the URL if there is none, and creates a splat param
>** - Matches all characters (greedy) until the next /, ?, or # and creates a splat param

	<Route path="/hello/:name">         // matches /hello/michael and /hello/ryan
	<Route path="/hello/:name?">       // matches /hello, /hello/michael, and /hello/ryan
	<Route path="/files/*.*">           // matches /files/hello.jpg and /files/hello.html
	<Route path="/**/*.jpg">            // matches /files/hello.jpg and /files/path/to/file.jpg
	<Route path="/hello\\(:name\\)">    // matches /hello(michael)

`:name`变量占位，直到遇到下一个`/`、`?`、`#`为止。这个路径参数可以通过 this.props.params.paramName 取出，如果是函数式组件，则通过函数参数 props.match.params.paramName 获取。匹配类似URL `/hello/michael` 和 `/hello/ryan`。

`(/:name)`加圆括号表示可以选参数匹配，`/hello`、 `/hello/michael` 和 `/hello/ryan`
`*`星号表示任意级路径，直到下一个通配符，匹配 `/hello/` 和 `/hello/ryan/html` 等等
`**`星号表示任意级路径，直到遇到下一个`/`、`?`、`#`为止。匹配 `/hello/` 和 `/hello/ryan/html` 等等
`*.*`星号点星号表示文件名，匹配 `/hello/michael.jpg` 和 `/hello/ryan.html`

	<Route path="/hello/:name">
	<Route path="/hello(/:name)">
	<Route path="/files/*.*">
	<Route path="/files/*">
	<Route path="/**/*.jpg">


path属性也可以使用相对路径（不以/开头），匹配时就会相对于父组件的路径，可以参考上一节的例子。嵌套路由如果想摆脱这个规则，可以使用绝对路由。

	<Router>
	  <Route path="/:userName/:id" component={UserPage}/>
	  <Route path="/about/me" component={About}/>
	</Router>

上面代码中，用户访问/about/me时，不会触发第二个路由规则，因为它会匹配/:userName/:id这个规则。因此，带参数的路径一般要写在路由规则的底部。

此外，URL的查询字符串/foo?bar=baz，可以用this.props.location.query.bar获取。


## IndexRoute 组件

下面的例子，你会不会觉得有一点问题？

	<Router>
	  <Route path="/" component={App}>
	    <Route path="accounts" component={Accounts}/>
	    <Route path="statements" component={Statements}/>
	  </Route>
	</Router>

上面代码中，访问根路径`/`，不会加载任何子组件。也就是说，`App`组件的`this.props.children`，这时是`undefined`。

因此，通常会采用`{this.props.children || <Home/>}`这样的写法。这时，`Home`明明是`Accounts`和`Statements`的同级组件，却没有写在`Route`中。

`IndexRoute`就是解决这个问题，显式指定`Home`是根路由的子组件，即指定默认情况下加载的子组件。你可以把`IndexRoute`想象成某个路径的`index.html`。注意，IndexRoute组件没有路径参数path。

	<Router>
	  <Route path="/" component={App}>
	    <IndexRoute component={Home}/>
	    <Route path="accounts" component={Accounts}/>
	    <Route path="statements" component={Statements}/>
	  </Route>
	</Router>

这种组件结构就很清晰了：App只包含下级组件的共有元素，本身的展示内容则由Home组件定义。这样有利于代码分离，也有利于使用React Router提供的各种API。


## IndexRedirect 组件

IndexRedirect组件用于访问根路由的时候，将用户重定向到某个子组件。

	<Route path="/" component={App}>
	  ＜IndexRedirect to="/welcome" />
	  <Route path="welcome" component={Welcome} />
	  <Route path="about" component={About} />
	</Route>

上面代码中，用户访问根路径时，将自动重定向到子组件welcome。

## Redirect 组件

<Redirect>组件用于路由的跳转，即用户访问一个路由，会自动跳转到另一个路由。

	<Route path="inbox" component={Inbox}>
	  ＜Redirect from="messages/:id" to="/messages/:id" />
	</Route>

现在访问`/inbox/messages/5`，会自动跳转到`/messages/5`。

## Link 组件

Link组件用于取代`<a>`元素，生成一个链接，允许用户点击后跳转到另一个路由。它基本上就是`<a>`元素的React 版本，可以接收Router的状态。

	render() {
	  return <div>
	    <ul role="nav">
	      <li><Link to="/about">About</Link></li>
	      <li><Link to="/repos">Repos</Link></li>
	    </ul>
	  </div>
	}

如果希望当前的路由与其他路由有不同样式，这时可以使用Link组件的`activeStyle`属性。

	<Link to="/about" activeStyle={{color: 'red'}}>About</Link>
	<Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link>

另一种做法是，使用`activeClassName`指定当前路由的Class。

	<Link to="/about" activeClassName="active">About</Link>
	<Link to="/repos" activeClassName="active">Repos</Link>

上面代码中，当前页面的链接的`class`会包含`active`。

在Router组件之外，导航到路由页面，可以使用浏览器的History API，像下面这样写。

	import { browserHistory } from 'react-router';
	browserHistory.push('/some/path');


## IndexLink 组件

如果链接到根路由`/`，使用`IndexLink`组件，不要使用Link组件。

这是因为对于根路由来说，`activeStyle`和`activeClassName`会失效，或者说总是生效，因为`/`会匹配任何子路由。而`IndexLink`组件会使用路径的精确匹配。

	<IndexLink to="/" activeClassName="active">
	  Home
	</IndexLink>

上面代码中，根路由只会在精确匹配时，才具有`activeClassName`。

另一种方法是使用`Link`组件的`onlyActiveOnIndex`属性，也能达到同样效果。

	<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>
	  Home
	</Link>

实际上，`IndexLink`就是对`Link`组件的`onlyActiveOnIndex`属性的包装。


## 表单处理

Link 组件用于正常的用户点击跳转，但是有时还需要表单跳转、点击按钮跳转等操作。这些情况怎么跟React Router对接呢？

	<form onSubmit={this.handleSubmit}>
	  <input type="text" placeholder="userName"/>
	  <input type="text" placeholder="repo"/>
	  <button type="submit">Go</button>
	</form>

第一种方法是使用`browserHistory.push`

	import { browserHistory } from 'react-router'

	// ...
	  handleSubmit(event) {
	    event.preventDefault()
	    const userName = event.target.elements[0].value
	    const repo = event.target.elements[1].value
	    const path = `/repos/${userName}/${repo}`
	    browserHistory.push(path)
	  },

第二种方法是使用context对象。

	export default React.createClass({

	  // ask for `router` from context
	  contextTypes: {
	    router: React.PropTypes.object
	  },

	  handleSubmit(event) {
	    // ...
	    this.context.router.push(path)
	  },
	})


## 路由的钩子

每个路由都有 Enter 和 Leave 钩子，用户进入或离开该路由时触发。

	<Route path="inbox" component={Inbox}>
	  <Route
	    path="messages/:id"
	    onEnter={
	      ({params}, replace) => replace(`/messages/${params.id}`)
	    } 
	  />
	</Route>

onEnter钩子还可以用来做认证。

	const requireAuth = (nextState, replace) => {
	    if (!auth.isAdmin()) {
	        // Redirect to Home page if not an Admin
	        replace({ pathname: '/' })
	    }
	}
	export const AdminRoutes = () => {
	  return (
	     <Route path="/admin" component={Admin} onEnter={requireAuth} />
	  )
	}

下面是一个高级应用，当用户离开一个路径的时候，跳出一个提示框，要求用户确认是否离开。

	const Home = withRouter(
	  React.createClass({
	    componentDidMount() {
	      this.props.router.setRouteLeaveHook(
	        this.props.route, 
	        this.routerWillLeave
	      )
	    },

	    routerWillLeave(nextLocation) {
	      // 返回 false 会继续停留当前页面，
	      // 否则，返回一个字符串，会显示给用户，让其自己决定
	      if (!this.state.isSaved)
	        return '确认要离开？';
	    },
	  })
	)

上面代码中，setRouteLeaveHook方法为Leave钩子指定routerWillLeave函数。该方法如果返回false，将阻止路由的切换，否则就返回一个字符串，提示用户决定是否要切换。



# ⚑  SCSS & SASS Color 颜色函数用法
[SCSS Tutorial](http://www.softwhy.com/article-8800-1.html)

CSS 不是一种真正意义上的编程语言，不具有编程语言的变量、循环、遍历和继承等特性。 为了解决 CSS 的这些缺点，能够对 CSS 进行预处理的"中间语言"就产生了，以此来实现某些编程特性。 

SASS 是最早的 CSS 预处理语言之一。 为了适应编程风格的需求，SASS 在编程风格上做了一些修改，现在称之为 SCSS，增加了一些新的功能，增强了对 CSS3 的支持，其语法完全兼容 CSS3，并且继承了 SASS 的强大功能。

任何标准的 CSS3 样式表都是具有相同语义的有效的 SCSS 文件。另外，SCSS 还能识别大部分 css hacks 和特定于浏览器的语法，例如:古老的 IE filter。由于 SCSS 是 CSS 的扩展，因此，所有在 CSS 中工作的代码也能在 SCSS 中正常工作。

SASS 是最初定义的语法，一个主要的特征是对缩进敏感。

不过很快，开发者决定采用一种叫做 SCSS 的语法，弱化了 SASS 与 CSS 之间的语法区别。

SASS 代码如下:

	#sidebar
	  width: 30%
	  background-color: #faa

而 SCSS 使用更为接近 CSS 的语法格式:

	#sidebar {
	  width: 30%;
	  background-color: #faa;
	}

只要添加大括号和分号就可以转换为 SCSS。

同时 SCSS 对空白符不敏感，上面的代码还可以修改为如下格式:

	#sidebar {
		width: 30%; 
		background-color: #faa
	}

SCSS 函数语法参考：


	rgb($red,$green,$blue)
	rgba($red,$green,$blue,$alpha)

	red($color)
	green($color)
	blue($color)

	mix($color-1,$color-2,[$weight])

	hsl($hue,$saturation,$lightness)
	hsla($hue,$saturation,$lightness,$alpha)

	saturation($color)
	lightness($color)
	adjust-hue($color,$degrees)
	lighten($color,$amount)
	darken($color,$amount)

	alpha($color)
	opacity($color)

	rgba($color,$alpha)
	opacify($color, $amount) / fade-in($color, $amount) 减小透明度
	transparentize($color, $amount) / fade-out($color, $amount) 增加透明度




## rgba() 

能省掉手工转换 hex 到 rgb 格式的工作，如以下 SCSS 代码

	$linkColor: #20a0ff;

	.box{
	  box-shadow: 0 2px 6px 0 rgba($linkColor, 0.3);
	  background-color: $linkColor;
	}

生成的 CSS 代码

	.box{
	  box-shadow:0 2px 6px 0 rgba(32,160,255,.3);
	  background-color:#20a0ff;
	}

还可以通过 opacify 增加，通过 transparentize 来减少透明度值，如：

	>> opacify(rgba(125,125,125, 0.6), 0.2)
	rgba(125,125,125, 0.8)

	>> transparentize(green, 0.5)
	rgba(0, 255, 0, 0.5)
	 

## lighten / darken / saturate / desaturate 

lighten / darken 是基于 HSL 明度变换，这个比较适合 button 按钮的 normal 态和 hover 态变换，

saturate / desaturate 是基于 HSL 饱和度 变换，

效果可以参考这个在线工具 http://scg.ar-ch.org/

然而生成的颜色很丑，不实用。

 

## tint / shade

阿里的 Ant Design 早期版本使用了 tint / shade 色彩算法，通过增加 白色（tint） 和 黑色（shade） 的占比来生成系列色。

	.demo{
	  tint( $base-color, 10% )
	  shade( $base-color, 10% )
	}


这个在项目中会更加实用，不过要注意新生成的颜色与文本对比度需满足 WCAG 2.0 对比度要求。

在线 checker：http://webaim.org/resources/contrastchecker/

 
## complement 补色

在色彩理论中，如果一种颜色与另一种颜色混合后，呈现中性的灰黑色，那么这两种颜色就互为补色。

好莱坞电影比较常用补色后期手法，强烈的互补色对比，能渲染出比较冲击的视觉系氛围。如下图《天使爱美丽》海报的红绿互补。




# ⚑ momentjs 日期处理包
[momentjs](http://momentjs.com/)

获取时间 Start of Time

moment().startOf(String)

	moment().startOf('day')  // 获取今天0时0分0秒
	moment().startOf('week')  // 获取本周第一天(周日)0时0分0秒
	moment().startOf('isoWeek')  // 获取本周周一0时0分0秒
	moment().startOf('month')  // 获取当前月第一天0时0分0秒

moment().endOf(String)

	moment().endOf('day')  // 获取今天23时59分59秒
	moment().endOf('week')  // 获取本周最后一天(周六)23时59分59秒
	moment().endOf('isoWeek')  // 获取本周周日23时59分59秒
	moment().endOf('month')  // 获取当前月最后一天23时59分59秒

Days in Month

moment().daysInMonth()

	moment().daysInMonth() // 获取当前月的总天数

Timestamp 

	moment().format('X') // 返回值为字符串类型 获取时间戳(以秒为单位)
	moment().unix() // 返回值为数值型
	moment().format('x') // 返回值为字符串类型 获取时间戳(以毫秒为单位)
	moment().valueOf() // 返回值为数值型

Get Time

	moment().year()  // 获取年份
	moment().get('year')
	moment().month() (0~11, 0: January, 11: December)  // 获取月份
	moment().get('month')
	moment().date()  // 获取一个月中的某一天
	moment().get('date')

	moment().day() (0~6, 0: Sunday, 6: Saturday) // 获取一个星期中的某一天
	moment().weekday() (0~6, 0: Sunday, 6: Saturday)
	moment().isoWeekday() (1~7, 1: Monday, 7: Sunday)
	moment().get('day')
	mment().get('weekday')
	moment().get('isoWeekday')

	moment().hours() // 获取小时
	moment().get('hours')
	moment().minutes() // 获取分钟
	moment().get('minutes')
	moment().seconds() // 获取秒数
	moment().get('seconds')
	moment().toArray() // [years, months, date, hours, minutes, seconds, milliseconds]
	moment().toObject() // {years: xxxx, months: x, date: xx ...}

设置时间 Set Time

	moment().year(Number), moment().month(Number)...
	moment().set(String, Int)
	moment().set(Object)
	moment().year(2019) // 设置年份
	moment().set('year', 2019)
	moment().set({year: 2019})
	moment().month(11) (0~11, 0: January, 11: December)  // 设置月份
	moment().set('month', 11) 
	moment().date(15)  /// 设置某个月中的某一天
	moment().set('date', 15)
	moment().weekday(0) // 设置日期为本周第一天（周日）
	moment().isoWeekday(1) // 设置日期为本周周一
	moment().set('weekday', 0)
	moment().set('isoWeekday', 1)
	moment().hours(12)  // 设置小时
	moment().set('hours', 12)
	moment().minutes(30)  // 设置分钟
	moment().set('minutes', 30)
	moment().seconds(30)  // 设置秒数
	moment().set('seconds', 30)

Add Time

	moment().add(Number, String)
	moment().add(Object)
	moment().add(1, 'years')  // 设置年份
	moment().add({years: 1})
	moment().add(1, 'months')  // 设置月份
	moment().add(1, 'days')  // 设置日期
	moment().add(1, 'weeks')  // 设置星期
	moment().add(1, 'hours')  // 设置小时
	moment().add(1, 'minutes')  // 设置分钟
	moment().add(1, 'seconds')  // 设置秒数

Subtract Time

	moment().subtract(Number, String)
	moment().subtract(Object)
	moment().subtract(1, 'years')  // 设置年份
	moment().subtract({years: 1})
	moment().subtract(1, 'months')  // 设置月份
	moment().subtract(1, 'days')  // 设置日期
	moment().subtract(1, 'weeks')  // 设置星期
	moment().subtract(1, 'hours')  // 设置小时
	moment().subtract(1, 'minutes')  // 设置分钟
	moment().subtract(1, 'seconds')  // 设置秒数

格式化时间 Format Time

	moment().format()
	moment().format(String)
	moment().format('YYYY年MM月DD日')  // 格式化年月日： 'xxxx年xx月xx日'
	moment().format('YYYY-MM-DD')  // 格式化年月日： 'xxxx-xx-xx'
	moment().format('HH时mm分ss秒')  // 格式化时分秒(24小时制)： 'xx时xx分xx秒'
	moment().format('hh:mm:ss a') // 格式化时分秒(12小时制)：'xx:xx:xx am/pm'
	moment().format('X') // 返回值为字符串类型 格式化时间戳(以秒为单位)
	moment().format('x') // 返回值为字符串类型 格式化时间戳(以毫秒为单位)

比较时间 Difference

	moment().diff(Moment|String|Number|Date|Array)

获取两个日期之间的时间差

	let start_date = moment().subtract(1, 'weeks')
	let end_date = moment()

	end_date.diff(start_date) // 返回毫秒数

	end_date.diff(start_date, 'months') // 0
	end_date.diff(start_date, 'weeks') // 1
	end_date.diff(start_date, 'days') // 7
	start_date.diff(end_date, 'days') // -7

Formatting dates

	moment().format('MMMM Do YYYY, h:mm:ss a');
	moment().format('dddd');
	moment().format("MMM Do YY");
	moment().format('YYYY [escaped] YYYY');
	moment().format();

	April 17th 2013, 4:06:00 pm
	Wednesday
	Apr 17th 13
	2013 escaped 2013
	2013-04-17T16:06:00+08:00

Timeago

	moment("20111031", "YYYYMMDD").fromNow();
	moment("20120620", "YYYYMMDD").fromNow();
	moment().startOf('day').fromNow();
	moment().endOf('day').fromNow();
	moment().startOf('hour').fromNow();

	a year ago
	10 months ago
	16 hours ago
	in 8 hours
	6 minutes ago

Calendar Time

	moment().subtract('days', 10).calendar();
	moment().subtract('days', 6).calendar();
	moment().subtract('days', 3).calendar();
	moment().subtract('days', 1).calendar();
	moment().calendar();
	moment().add('days', 1).calendar();
	moment().add('days', 3).calendar();
	moment().add('days', 10).calendar();

	04/07/2013
	last Thursday at 4:06 PM
	last Sunday at 4:06 PM
	Yesterday at 4:06 PM
	Today at 4:06 PM
	Tomorrow at 4:06 PM
	Saturday at 4:06 PM
	04/27/2013


Internationalization

	moment().format('L');
	moment().format('LL');
	moment().format('LLL');
	moment().format('LLLL');

	04/17/2013
	April 17 2013
	April 17 2013 4:06 PM

Mutability

	var a = moment('2016-01-01'); 
	var b = a.clone().add(1, 'week'); 
	a.format();
	"2016-01-01T00:00:00-06:00"

datetime math

	moment('2016-03-12 13:00:00').add(1, 'day').format('LLL')
	"March 13, 2016 1:00 PM"

	moment('2016-03-12 13:00:00').add(24, 'hours').format('LLL')
	"March 13, 2016 2:00 PM"
	Due to leap years, one year may not equal 365 days:

	moment('2016-01-01').add(1, 'year').format('LL')
	"January 1, 2017"
	moment('2016-01-01').add(365, 'day').format('LL')
	"December 31, 2016"

	moment().add(1.5, 'days') == moment().add(2, 'days')
	moment().add(-1.5, 'days') == moment().add(-2, 'days') == moment().subtract(1.5, 'days') == moment().subtract(2, 'days')
	moment().add(2.3, 'months') == moment().add(2, 'months')
	moment().add(-2.3, 'months') == moment().add(-2, 'months') == moment().subtract(2.3, 'months') == moment().subtract(2, 'months')

Quarters and years are converted to months, and then absolute value/rounded.

	moment().add(1.5, 'years') == moment().add(18, 'months')
	moment().add(.8, 'years') == moment().add(9.6, 'months') == moment().add(10, 'months')
	moment().add(1.5, 'quarters') == moment().add(4.5, 'months') == moment().add(5, 'months')


还有多种语言可以选择（包括简体中文和繁体中文哦）

# ⚑ Path-to-regexp 模块
[Path-to-regexp](https://www.npmjs.com/package/path-to-regexp)

	npm install path-to-regexp --save

该对象上挂载了 3 个方法：

	var pathToRegexp, { parse, compile } = require('path-to-regexp')

	pathToRegexp(path, keys, options)
	pathToRegexp.parse(path)
	pathToRegexp.compile(path)


基本参数为：

+ path: 自定义的匹配路由
+ keys: 通过分组获得的相关值
+ options: 基本匹配选项
+ sensitive: 大小写精确匹配（default: false，不是）
+ strict: 末尾斜杠是否精确匹配（default: false，不是）
+ end: 是否是全局匹配，相当于，带不带 /g 标识符。(defualt: true，带 /g)，
+ delimiter: 设置重复参数的分割符，默认为 /。对于 pathname 匹配时，使用默认就好。

例如：

	var keys = []
	var re = pathToRegexp('/foo/:bar', keys)
	// re = /^\/foo\/([^\/]+?)\/?$/i
	// keys = [{ name: 'bar', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }]

匹配参数，分组名可以通过它自定义的相关匹配语法来完成。

	var re = pathToRegexp('/:foo/:bar', keys)
	// keys = [{ name: 'foo', prefix: '/', ... }, { name: 'bar', prefix: '/', ... }]

	re.exec('/test/route')
	//=> ['/test/route', 'test', 'route']

那么 keys 中的 foo 就是一个分组名的匹配值。

正则表达式量词字符

可选参数 ？

	var re = pathToRegexp('/:foo/:bar?', keys)
	// keys = [{ name: 'foo', ... }, { name: 'bar', delimiter: '/', optional: true, repeat: false }]

	re.exec('/test')
	//=> ['/test', 'test', undefined]

	re.exec('/test/route')
	//=> ['/test', 'test', 'route']

匹配任意个 *

	var re = pathToRegexp('/:foo*', keys)
	// keys = [{ name: 'foo', delimiter: '/', optional: true, repeat: true }]

	re.exec('/')
	//=> ['/', undefined]

	re.exec('/bar/baz')
	//=> ['/bar/baz', 'bar/baz']

匹配一个以上 +

	var re = pathToRegexp('/:foo+', keys)
	// keys = [{ name: 'foo', delimiter: '/', optional: false, repeat: true }]

	re.exec('/')
	//=> null

	re.exec('/bar/baz')
	//=> ['/bar/baz', 'bar/baz']

如果想匹配多个路径，可以使用 * 进行匹配：

	var re = pathToRegexp('/foo/*', keys)
	// keys = [{ name: '0', ... }]

	re.exec('/foo/bar/baz')
	//=> ['/foo/bar/baz', 'bar/baz']

不过注意，* 和 >=0 效果的区别：

	var re = pathToRegexp('/:foo/(.*)', keys)
	// keys = [{ name: 'foo', ... }, { name: 0, ... }]

	re.exec('/test/route')
	//=> ['/test/route', 'test', 'route']


## Unnamed Parameters

It is possible to write an unnamed parameter that only consists of a matching group. It works the same as a named parameter, except it will be numerically indexed.

	const regexp = pathToRegexp('/:foo/(.*)')
	// keys = [{ name: 'foo', ... }, { name: 0, ... }]
	 
	regexp.exec('/test/route')
	//=> ['/test/route', 'test', 'route']


## Custom Matching Parameters

All parameters can have a custom regexp, which overrides the default match ([^/]+). For example, you can match digits or names in a path:

	const regexpNumbers = pathToRegexp('/icon-:foo(\\d+).png')
	// keys = [{ name: 'foo', ... }]
	 
	regexpNumbers.exec('/icon-123.png')
	//=> ['/icon-123.png', '123']
	 
	regexpNumbers.exec('/icon-abc.png')
	//=> null
	 
	const regexpWord = pathToRegexp('/(user|u)')
	// keys = [{ name: 0, ... }]
	 
	regexpWord.exec('/u')
	//=> ['/u', 'u']
	 
	regexpWord.exec('/users')
	//=> null

Tip: Backslashes need to be escaped with another backslash in JavaScript strings.

## Parse

The parse function is exposed via pathToRegexp.parse. This will return an array of strings and keys.

	const tokens = pathToRegexp.parse('/route/:foo/(.*)')
	 
	console.log(tokens[0])
	//=> "/route"
	 
	console.log(tokens[1])
	//=> { name: 'foo', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }
	 
	console.log(tokens[2])
	//=> { name: 0, prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '.*' }

Note: This method only works with strings.

## Compile ("Reverse" Path-To-RegExp)

Path-To-RegExp exposes a compile function for transforming a string into a valid path.

	const toPath = pathToRegexp.compile('/user/:id')
	 
	toPath({ id: 123 }) //=> "/user/123"
	toPath({ id: 'café' }) //=> "/user/caf%C3%A9"
	toPath({ id: '/' }) //=> "/user/%2F"
	 
	toPath({ id: ':/' }) //=> "/user/%3A%2F"
	toPath({ id: ':/' }, { encode: (value, token) => value }) //=> "/user/:/"
	 
	const toPathRepeated = pathToRegexp.compile('/:segment+')
	 
	toPathRepeated({ segment: 'foo' }) //=> "/foo"
	toPathRepeated({ segment: ['a', 'b', 'c'] }) //=> "/a/b/c"
	 
	const toPathRegexp = pathToRegexp.compile('/user/:id(\\d+)')
	 
	toPathRegexp({ id: 123 }) //=> "/user/123"
	toPathRegexp({ id: '123' }) //=> "/user/123"
	toPathRegexp({ id: 'abc' }) //=> Throws `TypeError`.
	Note: The generated function will throw on invalid input. It will do all necessary checks to ensure the generated path is valid. This method only works with strings.



# ⚑ React 原代码目录结构
- [React 源码解析之 ReactElement](https://www.jianshu.com/p/6c0ed359936d)
- [《React源码解析》](https://react.jokcy.me/)]
- [react16 源码阅读学习记录](https://github.com/jsonz1993/react-source-learn/)

在 renderers 中，reconciler（协调器）是最核心的部分，包含React中自定义组件的实现、组件生命周期机制、setState机制、DOM diff算法等。

为什么reconciler是核心？

因为reconciler是实现Virtual DOM的最主要代码：在web开发中，要将更新的数据实时反应到UI上，就不可避免的需要对DOM进行操作，而对DOM的复杂频繁的操作将导致开销巨大、性能下降。为此，React引入了VirtualDOM机制，这也正是React的核心与精髓。

在基于React进行开发时，所有的DOM树都是通过VirtualDOM创造的。React在VirtualDOM上实现了DOM diff算法。当数据更新时，会通过该算法找到需要变更的DOM节点，并只对变化的部分进行DOM更新，而不是重新渲染整个DOM树。

React 组件化与渲染平台是分离的，平时我们写React，都要引入多一个 'react-dom'，将组件ReactElement通过 ReactDOM.render 渲染到 DOM Tree 中。

也就是说我们引入的React负责ReactElement组件相关的东西，渲染层面抽出来交给 ReactDOM、 ReactNative，这种分离这也赋予了React跨终端渲染的能力。

ReactDOM.render 首先会调用 legacyCreateRootFromDOMContainer 创建一个ReactRoot的实例，我们叫他root。调用 requestCurrentTime 获取当前已经花费的时间， 然后调用computeExpirationForFiber来确定我们的优先级， computeExpirationForFiber 会根据我们当前的工作类型，比如isWorking, isCommit, isAsync 等等来返回对应的优先级，第一次渲染默认都是Sync的情况。如果不是同步渲染的情况，既Interactive 或者 Async，这时候会根据我们 前面requestCurrentTime获取的已花费时间 调用相应的算法来确定优先级。React的更新优先级有 Sync、Interactive、Async、offscreen等等，可以细分：

	synchronous 与之前的Stack reconciler操作一样，同步执行
	task 在next tick之前执行
	animation 下一帧之前执行
	high 在不久的将来立即执行
	low 稍微延迟（100-200ms）执行也没关系
	offscreen 下一次render时或scroll时才执行

React 渲染过程大概就是 JSX -> ReactElement -> ReactRoot -> fiberTreeRoot  -> DOM Tree。



## EventBus

还有使用事件总线模式也是常用的解决办法，可以方便地实现非嵌套组件间的通信，需要使用 events 包：

	npm install events --save

新建一个 EventBus.js，引入 events 包，并向外提供一个事件对象，供通信时使用：

	import { EventBus } from "events";
	export default new EventBus();

然后就是使用事件总线来进行多方向的通讯，需要接受数据方注册事件监听函数并负责在组件销毁时解除监听函数，需要发送数据方负责触发事件：

	import EventBus from "./EventBus"

	// 注册事件监听函数
	EventBus.addListener("callMe",(msg)=>{
		this.setState({msg})
	});

	// 组件销毁前移除事件监听
	EventBus.removeListener(handler...);

	// 触发自定义事件
	EventBus.emit("callMe","Hello")

自己实现组件间的通信还是太难以管理了，因此出现了很多状态管理工具，如 flux、redux 等，使用这些工具使得组件间的通信更容易追踪和管理。

## 同其他外部库通信

如果一个项目中，既有React，又有jQuery，又有Vue怎么办？

如果把这个场景抽象一下，可以看做是三种不同的组件需要相互通信，它们对数据的要求不一样，数据格式不同，但是一旦数据打到各自的组件内，其实数据流就不需要我们关心了。
所以可以维护一个公共的数据集市，所有人都从数据集市里取数据，也向数据集市中发数据，数据集市是一个公开的发布者，各组件为订阅者。

但是目前，在React体系中，Redux是绕不开的。



# ⚑ Events System
- [React Event Handling](https://react.docschina.org/docs/handling-events.html)
- [SyntheticEvent](https://reactjs.org/docs/events.html)
- [React Form](https://react.docschina.org/docs/forms.html)
- [React事件机制](https://zhuanlan.zhihu.com/p/49067231)
- [React合成事件](https://react.docschina.org/docs/events.html)

react的事件是合成事件((Synethic event)，不是原生事件

	<button onClick={this.handleClick}></button> 
	<input value={this.state.name} onChange={this.handleChange} />

合成事件与原生事件的区别

1. 写法不同，合适事件是驼峰写法，而原生事件是全部小写
2. 执行时机不同，合适事件全部委托到document上，而原生事件绑定到DOM元素本身
3. 合成事件中可以是任何类型，比如 `this.handleClick` 这个函数，而原生事件中只能是字符串

React事件并没有原生的绑定在真实的DOM上，而是使用了行为委托方式实现事件机制。

浏览器事件的触发实质上是要经过三个阶段:事件捕获、目标对象本身的事件处理和事件冒泡，假设在 DOM 对象的 click 事件触发了，首先经历捕获阶段会由父级元素将事件一直传递到事件发生的元素，执行完目标事件本身的处理事件后，然后经历冒泡阶段，将事件从子元素向父元素冒泡。正因为事件在DOM的传递经历这样一个过程，从而为行为委托提供了可能。

通俗地讲，行为委托的实质就是将子元素事件的处理委托给父级元素处理。React会将所有的事件都绑定在最外层(document)，使用统一的事件监听，并在冒泡阶段处理事件，当挂载或者卸载组件时，只需要在通过的在统一的事件监听位置增加或者删除对象，因此可以提高效率。

并且React并没有使用原生的浏览器事件，而是在基于 Virtual DOM 的基础上实现了合成事件(SyntheticEvent)，事件处理程序接收到的是SyntheticEvent的实例。SyntheticEvent完全符合W3C的标准，因此在事件层次上具有浏览器兼容性，与原生的浏览器事件一样拥有同样的接口，可以通过stopPropagation()和preventDefault()相应的中断。如果需要访问当原生的事件对象，可以通过引用nativeEvent获得。

React中的事件机制分为两个阶段:事件注册和事件触发:

在组件加载 `mount` 和更新 `update` 时,其中的 `ReactDOMComponent` 会对传入的事件属性进行处理，对相关事件进行注册和存储。`document` 中注册的事件不处理具体的事件，仅对事件进行分发。`ReactBrowserEventEmitter` 作为事件注册入口，担负着事件注册和事件触发。注册事件的回调函数由 `EventPluginHub` 来统一管理，根据事件的类型和组件标识 `_rootNodeID` 为唯一标识事件并进行存储。

事件执行时，`document` 上绑定事件 `ReactEventListener.dispatchEvent` 会对事件进行分发，根据之前存储的类型和组件标识找到触发事件的组件。`ReactEventEmitter` 利用 `EventPluginHub` 中注入的事件插件，例如:`SimpleEventPlugin`、`EnterLeaveEventPlugin` 会将原生的DOM事件转化成合成的事件，然后批量执行存储的回调函，回调函数的执行分为两步，第一步是将所有的合成事件放到事件队列里面，第二步是逐个执行。需要注意的是，浏览器原生会为每个事件的每个监听函数创建一个事件对象，可以从这个事件对象获取到事件的引用。这会造成高额的内存分配，React在启动时就会为每种对象分配内存池，用到某一个事件对象时就可以从这个内存池进行复用，节省内存。

	handleClick(e) {
	    if (e.target && e.target.matches('div.code')) {
	      return;
	    }
	    let event = e.nativeEvent;
	    let dom = e.target;
	    e.stopPropagation();
	    e.preventDefault();
	}

## Keyboard API 

当我们点击输入框时，手机的软键盘会自动弹出，以便用户进行输入。但有时我们想在键盘弹出时对页面布局做个调整，或者在程序中使用代码收起这个软键盘，这些借助 React Native 框架提供的Keyboard API 就可以实现。

Keyboard API 提供如下的静态函数供开发者使用。

`addListener(eventName, callback)` 这个函数用来加载一个指定事件的事件监听器，函数中的 eventName 可以是如下值：

	keyboardWillShow：软键盘将要显示
	keyboardDidShow：软键盘显示完毕
	keyboardWillHide：软键盘将要收起
	keyboardDidHide：软键盘收起完毕
	keyboardWillChangeFrame：软件盘的 frame 将要改变
	keyboardDidChangeFrame：软件盘的 frame 改变完毕

这个函数返回一个对象。我们可以保存这个对象，在需要释放事件监听器时，调用这个对象的 remove 方法。

`removeListener(eventName, callback)` 这个函数用来释放一个特定的键盘事件监听器。

`removeAllListener(eventName)` 这个函数用来释放一个指定键盘事件的所有事件监听器。

`dissmiss()` 这个方法让操作系统收起软键盘。

所有的键盘事件处理函数都能收到一个 event 参数，不过在不同平台下 event 参数可以取到的值不太一样。

1，Android 平台可以取到的值

	event.endCoordinates.screenX
	event.endCoordinates.screenY
	event.endCoordinates.width
	event.endCoordinates.height

2，iOS 平台可以取到的值

	event.easing：这个值始终是 keyboard
	evnet.duration：记录软键盘弹出动画的持续事件，单位是毫秒
	event.startCoordinates.screenX
	event.startCoordinates.screenY
	event.startCoordinates.width
	event.startCoordinates.height
	event.endCoordinates.screenX
	event.endCoordinates.screenY
	event.endCoordinates.width
	event.endCoordinates.height


# ⚑ React AJAX 最佳实践

## Root Component 根组件方法
https://facebook.github.io/react/tutorial/tutorial.html

这是一种最简单的方法，因此它适用于简单或小型的应用。

通过这种方法，你可以建立单一根组件（父层组件）去分发所有AJAX请求，然后它会把AJAX响应数据存储进state里，以props方式传递到子组件。可以参考下官方教程上的实例。

此实例中的 CommentBox 组件就是个分发所有AJAX请求的根组件。

不过，我不大喜欢官方教程实例中的一点：它使用了jQuery去发送AJAX请求。

	loadCommentsFromServer: function() {
	    $.ajax({
	        url: this.props.url,
	        dataType: 'json',
	        cache: false,
	        success: function(data) {
	            this.setState({data: data});   // 注意这里
	        }.bind(this),
	        error: function(xhr, status, err) {
	            console.error(this.props.url, status, err.toString());
	        }.bind(this)
	    });
	}


## fetch() API
https://github.com/github/fetch

Fetch 是个新的、简单的、标准化的API，旨在统一Web通信机制，并替代 XMLHttpRequest。它已经被主流浏览器所支持，针对较旧的浏览器也有了一个 polyfill （Benz乱入：polyfill 直译是填充工具，就是旧浏览器本来不支持某个新的 JS API，引入一段js代码后就支持了，这一段js代码给旧浏览器”填充“了一个API。这个单词我实在不知道怎么翻译 ，感觉反而保留原单词不翻译更能让读者理解。）。如果你在使用 Node.js ，你也可以通过 node-fetch 来使 Node.js 支持 Fetch。

当发生跨域请求时，fetch 会先发送一个 OPTIONS 请求，来确认服务器是否允许接受请求。服务器同意后，才会发送真正的请求。


若把上述用 jQuery $.ajax 的代码段改成 fetch 实现的话，代码应该长这样子：

	loadCommentsFromServer: function() {
	    fetch(this.props.url).then(function(response){
	        // 在这儿实现 setState
	    });
	}    

	// Post form
	var form = document.querySelector('form')

	fetch('/users', {
	  method: 'POST',
	  body: new FormData(form)
	})

	// Post JSON
	fetch('/users', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({
	    name: 'Hubot',
	    login: 'hubot',
	  })
	})

	// get json
	fetch('/users.json')
	  .then(function(response) {
	    // return response.text()
	    // return response.blob()
	    return response.json()
	  }).then(function(json) {
	    console.log('parsed json', json)
	  }).catch(function(ex) {
	    console.log('parsing failed', ex)
	  })
	}

	// File upload
	var input = document.querySelector('input[type="file"]')

	var data = new FormData()
	data.append('file', input.files[0])
	data.append('user', 'hubot')

	fetch('/avatars', {
	  method: 'POST',
	  body: data
	})


## Axios 
https://github.com/axios/axios

Axios 是一个基于 promise 对象（Benz 乱入：这个链接也是我加的）的 HTTP 客户端。与 fetch 和 superagent 一样，它同时支持浏览器端和 Node.js 端。另外你可以在其 Github 主页上发现，它有很多很实用的高级功能。

这是 Axios 的大概用法：

	loadCommentsFromServer: function() {
	    axios.get(this.props.url).then(function(response){
	        // 在这儿实现 setState
	    }).catch(function(error){
	        // 处理请求出错的情况
	    });
	}

## Request
https://github.com/request/request

若不介绍这个 request 库，感觉上本文会不太完整。这是一个在思想上追求极简设计的JS库，在 Github 上拥有超过 12k 的 star （Benz 乱入：我翻译这文章时已经 16k+ star 了）。它也是最流行的 Node.js 模块之一。进入它的 GitHub 主页 了解更多。

用法示例：

	loadCommentsFromServer: function() {
	    request(this.props.url, function(err, response, body){
	        // 在这儿实现 setState
	    });
	}

# ⚑ React.Component API

本章节提供了 React class 组件的详细 API 参考。本章节默认你已熟悉基本的 React 概念，例如 组件 & Props，以及 State & 生命周期等。如果你还未熟悉，请先阅读之前章节进行学习。

React 的组件可以定义为 class 或函数的形式。class 组件目前提供了更多的功能，这些功能将在此章节中详细介绍。如需定义 class 组件，需要继承 React.Component：

	class Welcome extends React.Component {
	  render() {
	    return <h1>Hello, {this.props.name}</h1>;
	  }
	}

在 React.Component 的子类中有个必须定义的 render() 函数。本章节介绍其他方法均为可选。

我们强烈建议你不要创建自己的组件基类。 在 React 组件中，代码重用的主要方式是组合而不是继承。

注意:

React 并不会强制你使用 ES6 的 class 语法。如果你倾向于不使用它，你可以使用 create-react-class 模块或类似的自定义抽象来代替。请查阅不使用 ES6 了解更多。

组件的生命周期
每个组件都包含“生命周期方法”，你可以重写这些方法，以便于在运行过程中特定的阶段执行这些方法。你可以使用此生命周期图谱作为速查表。在下述列表中，常用的生命周期方法会被加粗。其余生命周期函数的使用则相对罕见。

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

	constructor()
	static getDerivedStateFromProps()
	render()
	componentDidMount()


注意:下述生命周期方法即将过时，在新代码中应该避免使用它们：

	UNSAFE_componentWillMount()

当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

	static getDerivedStateFromProps()
	shouldComponentUpdate()
	render()
	getSnapshotBeforeUpdate()
	componentDidUpdate()

注意:下述方法即将过时，在新代码中应该避免使用它们：

	UNSAFE_componentWillUpdate()
	UNSAFE_componentWillReceiveProps()

当组件从 DOM 中移除时会调用如下卸载方法：

	componentWillUnmount()

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法，其中 componentDidCatch 是 ErrorBoundary 错误捕捉：

	static getDerivedStateFromError()
	componentDidCatch(err, info)

组件还提供了一些额外的 API：

	setState()
	forceUpdate()

class 属性

	defaultProps
	displayName

实例属性

	props
	state

## render()

	render()

render() 方法是 class 组件中唯一必须实现的方法。

当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：

* React 元素。通常通过 JSX 创建。例如，`<div />`、 `<MyComponent />` 会被 React 分别渲染为 DOM 节点、自定义组件，它们均为 React 元素，可以相互嵌套。
* 数组或 fragments。 使得 render 方法可以返回多个元素。欲了解更多详细信息，请参阅 fragments 文档。
* Portals。可以渲染子节点到不同的 DOM 子树中。
* 字符串或数值类型。它们在 DOM 中会被渲染为文本节点
* 布尔类型或 null。什么都不渲染。（主要用于支持返回 test && `<Child />` 的模式，其中 test 为布尔类型。)

render() 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。

如需与浏览器进行交互，请在 componentDidMount() 或其他生命周期方法中执行你的操作。保持 render() 为纯函数，可以使组件更容易思考。

注意

如果 shouldComponentUpdate() 返回 false，则不会调用 render()。


## constructor()

	constructor(props)

如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。

通常，在 React 中，构造函数仅用于以下两种情况：

+ 通过给 this.state 赋值对象来初始化内部 state。
+ 为事件处理函数绑定实例

在 constructor() 函数中不要调用 setState() 方法。如果你的组件需要使用内部 state，请直接在构造函数中为 this.state 赋值初始 state：

	constructor(props) {
	  super(props);
	  // 不要在这里调用 this.setState()
	  this.state = { counter: 0 };
	  this.handleClick = this.handleClick.bind(this);
	}

只能在构造函数中直接为 this.state 赋值。如需在其他方法中赋值，你应使用 this.setState() 替代。

要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 componentDidMount 中。

成员函数绑定实例后才可以使用 `setStae()`，并且通过 this.state 访问状态数据。没有绑定到实例时，this 指向组件的 state 对象。

注意

避免将 props 的值复制给 state！这是一个常见的错误：

	constructor(props) {
	 super(props);
	 // 不要这样做
	 this.state = { color: props.color };
	}

如此做毫无必要（你可以直接使用 this.props.color），同时还产生了 bug（更新 prop 中的 color 时，并不会影响 state）。

只有在你刻意忽略 prop 更新的情况下使用。此时，应将 prop 重命名为 initialColor 或 defaultColor。必要时，你可以修改它的 key，以强制“重置”其内部 state。

请参阅关于避免派生状态的博文，以了解出现 state 依赖 props 的情况该如何处理。


## componentDidMount()

	componentDidMount()
	
componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。

这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 componentWillUnmount() 里取消订阅

你可以在 componentDidMount() 里可以直接调用 setState()。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 constructor() 中初始化 state。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理



## componentDidUpdate()

	componentDidUpdate(prevProps, prevState, snapshot)

componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。

当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。

	componentDidUpdate(prevProps) {
	  // 典型用法（不要忘记比较 props）：
	  if (this.props.userID !== prevProps.userID) {
	    this.fetchData(this.props.userID);
	  }
	}

你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语件里，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。不要将 props “镜像”给 state，请考虑直接使用 props。 欲了解更多有关内容，请参阅为什么 props 复制给 state 会产生 bug。

如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。

注意

如果 shouldComponentUpdate() 返回值为 false，则不会调用 componentDidUpdate()。



## componentWillUnmount()

	componentWillUnmount()

componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。

componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。


## setState()

	setState(updater[, callback])

setState() 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件。将 setState() 视为请求而不是立即更新组件的命令。为了更好的感知性能，React 会延迟调用它，然后通过一次传递更新多个组件。React 并不会保证 state 的变更会立即生效。

setState() 并不总是立即更新组件。它会批量推迟更新。这使得在调用 setState() 后立即读取 this.state 成为了隐患。为了消除隐患，请使用 componentDidUpdate 或者的回调函数 `callback`，这两种方式都可以保证在应用更新后触发。如需基于之前的 state 来设置当前的 state，请阅读下述关于参数 `updater` 的内容。

除非 shouldComponentUpdate() 返回 false，否则 setState() 将始终执行重新渲染操作。如果可变对象被使用，且无法在 shouldComponentUpdate() 中实现条件渲染，那么仅在新旧状态不一时调用 setState()可以避免不必要的重新渲染

参数一为带有形式参数的 `updater` 函数：

	(state, props) => stateChange

state 是对应用变化时组件状态的引用。当然，它不应直接被修改。你应该使用基于 state 和 props 构建的新对象来表示变化。例如，假设我们想根据 props.step 来增加 state：

	this.setState((state, props) => {
	  return {counter: state.counter + props.step};
	});

`updater` 函数中接收的 state 和 props 都保证为最新。`updater` 的返回值会与 state 进行浅合并。

setState() 的第二个参数为可选的回调函数，它将在 setState 完成合并并重新渲染组件后执行。通常，我们建议使用 componentDidUpdate() 来代替此方式。

setState() 的第一个参数除了接受函数外，还可以接受对象类型：

	setState(stateChange[, callback])

stateChange 会将传入的对象浅层合并到新的 state 中，例如，调整购物车商品数：

	this.setState({quantity: 2})

这种形式的 setState() 也是异步的，并且在同一周期内会对多个 setState 进行批处理。例如，如果在同一周期内多次设置商品数量增加，则相当于：

	Object.assign(
	  previousState,
	  {quantity: state.quantity + 1},
	  {quantity: state.quantity + 1},
	  ...
	)

后调用的 setState() 将覆盖同一周期内先调用 setState 的值，因此商品数仅增加一次。如果后续状态取决于当前状态，我们建议使用 updater 函数的形式代替：

	this.setState((state) => {
	  return {quantity: state.quantity + 1};
	});


## forceUpdate()

	component.forceUpdate(callback)

默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 render() 方法依赖于其他数据，则可以调用 forceUpdate() 强制让组件重新渲染。

调用 forceUpdate() 将致使组件调用 render() 方法，此操作会跳过该组件的 shouldComponentUpdate()。但其子组件会触发正常的生命周期方法，包括 shouldComponentUpdate() 方法。如果标记发生变化，React 仍将只更新 DOM。

通常你应该避免使用 forceUpdate()，尽量在 render() 只使用 this.props 和 this.state



## defaultProps 组件实例属性

defaultProps 可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 null 的情况。例如：

	class CustomButton extends React.Component {
	  // ...
	}

	CustomButton.defaultProps = {
	  color: 'blue'
	};

如果未提供 props.color，则默认设置为 'blue'

	render() {
	  return <CustomButton /> ; // props.color 将设置为 'blue'
	}

如果 props.color 被设置为 null，则它将保持为 null

	render() {
	  return <CustomButton color={null} /> ; // props.color 将保持是 null
	}


## displayName 组件实例属性

displayName 字符串多用于调试消息。通常，你不需要设置它，因为它可以根据函数组件或 class 组件的名称推断出来。如果调试时需要显示不同的名称或创建高阶组件，请参阅使用 displayname 轻松进行调试了解更多。



## props 组件实例属性

this.props 包括被该组件调用者定义的 props。欲了解 props 的详细介绍，请参阅组件 & Props。

需特别注意，this.props.children 是一个特殊的 prop，通常由 JSX 表达式中的子组件组成，而非组件本身定义。

## state 组件实例属性

组件中的 state 包含了随时可能发生变化的数据。state 由用户自定义，它是一个普通 JavaScript 对象。

如果某些值未用于渲染或数据流（例如，计时器 ID），则不必将其设置为 state。此类值可以在组件实例上定义。

欲了解关于 state 的更多信息，请参阅 State & 生命周期。

永远不要直接改变 this.state，因为后续调用的 setState() 可能会替换掉你的改变。请把 this.state 看作是不可变的。



# ⚑ React Top-Level API
- https://reactjs.org/docs/react-api.html#reactjs.org\content\docs\reference-react.md


## React API Overview

- Components {#components}

	- [`React.Component`](#reactcomponent)
	- [`React.PureComponent`](#reactpurecomponent)

	- [`React.memo`](#reactmemo)

- Creating React Elements {#creating-react-elements}

	- [`createElement()`](#createelement)
	- [`createFactory()`](#createfactory)

- Transforming Elements {#transforming-elements}

	- [`cloneElement()`](#cloneelement)
	- [`isValidElement()`](#isvalidelement)
	- [`React.Children`](#reactchildren)

- Fragments {#fragments}

	- [`React.Fragment`](#reactfragment)

- Refs {#refs}

	- [`React.createRef`](#reactcreateref)
	- [`React.forwardRef`](#reactforwardref)

- Suspense {#suspense}

	- [`React.lazy`](#reactlazy)
	- [`React.Suspense`](#reactsuspense)

- Hooks {#hooks}

	- [Basic Hooks](/docs/hooks-reference.html#basic-hooks)
	  - [`useState`](/docs/hooks-reference.html#usestate)
	  - [`useEffect`](/docs/hooks-reference.html#useeffect)
	  - [`useContext`](/docs/hooks-reference.html#usecontext)
	- [Additional Hooks](/docs/hooks-reference.html#additional-hooks)
	  - [`useReducer`](/docs/hooks-reference.html#usereducer)
	  - [`useCallback`](/docs/hooks-reference.html#usecallback)
	  - [`useMemo`](/docs/hooks-reference.html#usememo)
	  - [`useRef`](/docs/hooks-reference.html#useref)
	  - [`useImperativeHandle`](/docs/hooks-reference.html#useimperativehandle)
	  - [`useLayoutEffect`](/docs/hooks-reference.html#uselayouteffect)
	  - [`useDebugValue`](/docs/hooks-reference.html#usedebugvalue)


## Component API Overview

Extend `React.Component`:

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

`React.Component` 子类唯一必需实现的是 [`render()`](#render) 函数，其它都是可选的，但是强烈推荐实现自己的基础组件类。

- The Component Lifecycle {#the-component-lifecycle}

	Each component has several "lifecycle methods" that you can override to run code at particular times in the process. **You can use [this lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) as a cheat sheet.** In the list below, commonly used lifecycle methods are marked as **bold**. The rest of them exist for relatively rare use cases.

- Mounting {#mounting}

	These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

	- [**`constructor()`**](#constructor)
	- [`static getDerivedStateFromProps()`](#static-getderivedstatefromprops)
	- [**`render()`**](#render)
	- [**`componentDidMount()`**](#componentdidmount)

	>Note:
	>
	>These methods are considered legacy and you should [avoid them](/blog/2018/03/27/update-on-async-rendering.html) in new code:
	>
	>- [`UNSAFE_componentWillMount()`](#unsafe_componentwillmount)

- Updating {#updating}

	An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

	- [`static getDerivedStateFromProps()`](#static-getderivedstatefromprops)
	- [`shouldComponentUpdate()`](#shouldcomponentupdate)
	- [**`render()`**](#render)
	- [`getSnapshotBeforeUpdate()`](#getsnapshotbeforeupdate)
	- [**`componentDidUpdate()`**](#componentdidupdate)

	>Note:
	>
	>These methods are considered legacy and you should [avoid them](/blog/2018/03/27/update-on-async-rendering.html) in new code:
	>
	>- [`UNSAFE_componentWillUpdate()`](#unsafe_componentwillupdate)
	>- [`UNSAFE_componentWillReceiveProps()`](#unsafe_componentwillreceiveprops)

- Unmounting {#unmounting}

	This method is called when a component is being removed from the DOM:

	- [**`componentWillUnmount()`**](#componentwillunmount)

- Error Handling {#error-handling}

	These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

	- [`static getDerivedStateFromError()`](#static-getderivedstatefromerror)
	- [`componentDidCatch()`](#componentdidcatch)

- Other APIs {#other-apis}

	Each component also provides some other APIs:

	  - [`setState()`](#setstate)
	  - [`forceUpdate()`](#forceupdate)

	### Class Properties {#class-properties}

	  - [`defaultProps`](#defaultprops)
	  - [`displayName`](#displayname)

	### Instance Properties {#instance-properties}

	  - [`props`](#props)
	  - [`state`](#state)



# ⚑ ReactDOM API
- https://reactjs.org/docs/react-dom.html#reference-react-dom.md

## ReactDOM API Overview

如果你使用一个 `<script>` 标签引入 React，所有的顶层 API 都能在全局 ReactDOM 上调用。如果你使用 npm 和 ES6/ES5，你可以分别使用： 

	import ReactDOM from 'react-dom'    //ES6
	var ReactDOM = require('react-dom') // ES5

react-dom 的 package 提供了可在应用顶层使用的 DOM（DOM-specific）方法，如果有需要，你可以把这些方法用于 React 模型以外的地方。不过一般情况下，大部分组件都不需要使用这个模块。

The `react-dom` package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.

- [`render()`](#render)
- [`hydrate()`](#hydrate)
- [`unmountComponentAtNode()`](#unmountcomponentatnode)
- [`findDOMNode()`](#finddomnode)
- [`createPortal()`](#createportal)

React 支持所有的现代浏览器，包括 IE9 及以上版本，但是需要为旧版浏览器比如 IE9 和 IE10 引入相关的 polyfills 依赖。

注意：

我们不支持那些不兼容 ES5 方法的旧版浏览器，但如果你的应用包含了 polyfill，例如 es5-shim 和 es5-sham 你可能会发现你的应用仍然可以在这些浏览器中正常运行。但是如果你选择这种方法，你便需要孤军奋战了。


## render()

	ReactDOM.render(element, container[, callback])

在提供的 container 里渲染一个 React 元素，并返回对该组件的引用（或者针对无状态组件返回 null）。

如果 React 元素之前已经在 container 里渲染过，这将会对其执行更新操作，并仅会在必要时改变 DOM 以映射最新的 React 元素。

如果提供了可选的回调函数，该回调将在组件被渲染或更新之后被执行。

注意：

**ReactDOM.render()**会控制你传入容器节点里的内容。当首次调用时，容器节点里的所有 DOM 元素都会被替换，后续的调用则会使用 React 的 DOM 差分算法（DOM diffing algorithm）进行高效的更新。

**ReactDOM.render()**不会修改容器节点（只会修改容器的子节点）。可以在不覆盖现有子节点的情况下，将组件插入已有的 DOM 节点中。

**ReactDOM.render()**目前会返回对根组件 ReactComponent 实例的引用。 但是，目前应该避免使用返回的引用，因为它是历史遗留下来的内容，而且在未来版本的 React 中，组件渲染在某些情况下可能会是异步的。 如果你真的需要获得对根组件 ReactComponent 实例的引用，那么推荐为根元素添加 callback ref。

使用 ReactDOM.render() 对服务端渲染容器进行 hydrate 操作的方式已经被废弃，并且会在 React 17 被移除。作为替代，请使用 hydrate()。



## hydrate()

	ReactDOM.hydrate(element, container[, callback])

与 render() 相同，但它用于在 ReactDOMServer 渲染的容器中对 HTML 的内容进行 hydrate 操作。React 会尝试在已有标记上绑定事件监听器。

React 希望服务端与客户端渲染的内容完全一致。React 可以弥补文本内容的差异，但是你需要将不匹配的地方作为 bug 进行修复。在开发者模式下，React 会对 hydration 操作过程中的不匹配进行警告。但并不能保证在不匹配的情况下，修补属性的差异。由于性能的关系，这一点非常重要，因为大多是应用中不匹配的情况很少见，并且验证所有标记的成本非常昂贵。

如果单个元素的属性或者文本内容，在服务端和客户端之间有无法避免差异（比如：时间戳），则可以为元素添加 suppressHydrationWarning={true} 来消除警告。这种方式只在一级深度上有效，应只作为一种应急方案（escape hatch）。请不要过度使用！除非它是文本内容，否则 React 仍不会尝试修补差异，因此在未来的更新之前，仍会保持不一致。

如果你执意要在服务端与客户端渲染不同内容，你可以采用双重（two-pass）渲染。在客户端渲染不同内容的组件可以读取类似于 this.state.isClient 的 state 变量，你可以在 componentDidMount() 里将它设置为 true。这种方式在初始渲染过程中会与服务端渲染相同的内容，从而避免不匹配的情况出现，但在 hydration 操作之后，会同步进行额外的渲染操作。注意，因为进行了两次渲染，这种方式会使得组件渲染变慢，请小心使用。

记得保证弱网环境下的用户体验。JavaScript 代码的加载要比最初的 HTML 渲染晚的多。因此如果你只在客户端渲染不同的内容，其转换可能会不稳定。但是，如果执行顺利，那么在服务端负责渲染的 shell 会对渲染提供帮助，并且只显示客户端上额外的小组件。欲了解如何在不出现标记不匹配的情况下执行此操作，请参考上一段的解释。


## unmountComponentAtNode()

	ReactDOM.unmountComponentAtNode(container)

从 DOM 中卸载组件，会将其事件处理器（event handlers）和 state 一并清除。如果指定容器上没有对应已挂载的组件，这个函数什么也不会做。如果组件被移除将会返回 true，如果没有组件可被移除将会返回 false。

## findDOMNode()

注意: findDOMNode 是一个访问底层 DOM 节点的应急方案（escape hatch）。在大多数情况下，不推荐使用该方法，因为它会破坏组件的抽象结构。严格模式下该方法已弃用。

	ReactDOM.findDOMNode(component)

如果组件已经被挂载到 DOM 上，此方法会返回浏览器中相应的原生 DOM 元素。此方法对于从 DOM 中读取值很有用，例如获取表单字段的值或者执行 DOM 检测（performing DOM measurements）。大多数情况下，你可以绑定一个 ref 到 DOM 节点上，可以完全避免使用 findDOMNode。

当组件渲染的内容为 null 或 false 时，findDOMNode 也会返回 null。当组件渲染的是字符串时，findDOMNode 返回的是字符串对应的 DOM 节点。从 React 16 开始，组件可能会返回有多个子节点的 fragment，在这种情况下，findDOMNode 会返回第一个非空子节点对应的 DOM 节点。

注意:

findDOMNode 只在已挂载的组件上可用（即，已经放置在 DOM 中的组件）。如果你尝试调用未挂载的组件（例如在一个还未创建的组件上调用 render() 中的 findDOMNode()）将会引发异常。

注意：findDOMNode 不能用于函数组件。


## createPortal()

	ReactDOM.createPortal(child, container)

创建 portal。Portal 将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外。


# ⚑ ReactDOMServer API
- https://react.docschina.org/docs/react-dom-server.html
- https://reactjs.bootcss.com/docs/react-dom-server.html
- https://reactjs.org/docs/react-dom-server.html


## Overview {#overview}

ReactDOMServer 对象允许你将组件渲染成静态标记。通常，它被使用在 Node 服务端上：

	// ES modules
	import ReactDOMServer from 'react-dom/server';
	// CommonJS
	var ReactDOMServer = require('react-dom/server');

下述方法可以被使用在服务端和浏览器环境。

- [`renderToString()`](#rendertostring)
- [`renderToStaticMarkup()`](#rendertostaticmarkup)


下述附加方法依赖 stream 并且只能在服务端使用的，它们在浏览器中不起作用。

- [`renderToNodeStream()`](#rendertonodestream)
- [`renderToStaticNodeStream()`](#rendertostaticnodestream)



## renderToString()

	ReactDOMServer.renderToString(element)

将 React 元素渲染为初始 HTML。React 将返回一个 HTML 字符串。你可以使用此方法在服务端生成 HTML，并在首次请求时将标记下发，以加快页面加载速度，并允许搜索引擎爬取你的页面以达到 SEO 优化的目的。

如果你在已有服务端渲染标记的节点上调用 ReactDOM.hydrate() 方法，React 将会保留该节点且只进行事件处理绑定，从而让你有一个非常高性能的首次加载体验。

## renderToStaticMarkup()

	ReactDOMServer.renderToStaticMarkup(element)

此方法与 renderToString 相似，但此方法不会在 React 内部创建的额外 DOM 属性，例如 data-reactroot。如果你希望把 React 当作静态页面生成器来使用，此方法会非常有用，因为去除额外的属性可以节省一些字节。

如果你计划在前端使用 React 以使得标记可交互，请不要使用此方法。你可以在服务端上使用 renderToString 或在前端上使用 ReactDOM.hydrate() 来代替此方法。

## renderToNodeStream()

	ReactDOMServer.renderToNodeStream(element)

将一个 React 元素渲染成其初始 HTML。返回一个可输出 HTML 字符串的可读流。通过可读流输出的 HTML 完全等同于 ReactDOMServer.renderToString 返回的 HTML。你可以使用本方法在服务器上生成 HTML，并在初始请求时将标记下发，以加快页面加载速度，并允许搜索引擎抓取你的页面以达到 SEO 优化的目的。

如果你在已有服务端渲染标记的节点上调用 ReactDOM.hydrate() 方法，React 将会保留该节点且只进行事件处理绑定，从而让你有一个非常高性能的首次加载体验。

注意:

这个 API 仅允许在服务端使用。不允许在浏览器使用。

通过本方法返回的流会返回一个由 utf-8 编码的字节流。如果你需要另一种编码的流，请查看像 iconv-lite 这样的项目，它为转换文本提供了转换流。

## renderToStaticNodeStream()

	ReactDOMServer.renderToStaticNodeStream(element)

此方法与 renderToNodeStream 相似，但此方法不会在 React 内部创建的额外 DOM 属性，例如 data-reactroot。如果你希望把 React 当作静态页面生成器来使用，此方法会非常有用，因为去除额外的属性可以节省一些字节。

通过可读流输出的 HTML，完全等同于 ReactDOMServer.renderToStaticMarkup 返回的 HTML。

如果你计划在前端使用 React 以使得标记可交互，请不要使用此方法。你可以在服务端上使用 renderToNodeStream 或在前端上使用 ReactDOM.hydrate() 来代替此方法。

注意:

此 API 仅限于服务端使用，在浏览器中是不可用的。

通过本方法返回的流会返回一个由 utf-8 编码的字节流。如果你需要另一种编码的流，请查看像 iconv-lite 这样的项目，它为转换文本提供了转换流。




# ⚑ DOM Element
- [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) 
- [`ReactDOM.hydrate()` documentation](/docs/react-dom.html#hydrate)

React 的实现不依赖于浏览器 DOM 的系统，当应用需要使用 DOM 的某些属性时，要使用驼峰命名方式访问，如 `tabindex` 属性对应的驼峰表达 `tabIndex`。但是所有用于辅助访问的属性 `aria-*` 和 `data-*` 都转换成小写，比如 `aria-label` 对应表达 `aria-label`。

输入框的选中状态使用 `checked` 属性，包括 `checkbox` 或 `radio` 类型，另外 `defaultChecked` 用于设置默认状态，只在初始加载时设定，作为非控制组件使用。

要指定 CSS 样式类属性，使用 `className` 属性，对所有 DOM 和 SVG 元素适用，如 `<div>`, `<a>` 等等。

但时，使用 Web Components 即原生组件还是使用 `class` 属性，这种做法还常用。

使用 `dangerouslySetInnerHTML` 属性来替代 `innerHTML` 方法设置原样 HTML 标签，通常这样做有风险，需要预防脚本注入或跨站脚本攻击 XSS - Cross Site Scripting。

```js
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

由于 `for` 是 JavaScript 关键字，React elements 使用 `htmlFor` 替代。

输入事件  `onChange` 和正常输入一样，有数据变动就触发，但是 React 内部不是直接基于浏览器的 onChange 事件，因为描述不当 misnomer，React 是实时处理输入事件。

标记一个 `<option>` 为 `selected` 时，它的值 `value` 就被 `<select>` 引用。

对于 `style` 属性可以动态设置一个含有样式值的对象，通常会优先使用 className 来设置样式，通过 DOM `style` 属性的做法就是使用 JavaScript 修改样式属性，还能防止 XSS 安全问题。

```js
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

注意，不会自动添加浏览器前缀，需要自行处理：

```js
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>;
}
```

Style 属性的键值通常使用驼峰表达，但是对于浏览器前缀需要使用大写首字母 `WebkitTransition`，只是 ms 除外。

React 会自动给数值后缀 "px" 单位，如果不希望使用这个单位，请用字符串设置。

```js
// Result style: '10px'
<div style={{ height: 10 }}>
  Hello World!
</div>

// Result style: '10%'
<div style={{ height: '10%' }}>
  Hello World!
</div>
```

当然，对于特定的属性，如 `zoom`, `order`, `flex` 是不会添加像素单位的。

镇压内容编辑警告 suppressContentEditableWarning，通常将带有子节点的组件设置为 `contentEditable` 可以编辑状态就会收到警告，因为这不会正常工作。不要镇压警告信息，除非是开发组件库，如 [Draft.js](https://facebook.github.io/draft-js/) 编辑器就需要使用 `contentEditable`。

使用 server-side rendering 时，通常会警告服务器和客户端渲染的内容有差异，尽管很少见，但是很难做到完全一致。

如果通过 `suppressHydrationWarning` 设置为 `true` 镇压警告，React 将它作为深层的逃生舱口使用，不要过度使用它。

Hydrate 就是注水，就是把字符串变成可用组件渲染到浏览器。Dehydrate 是脱水，一般指的是服务器端渲染的时候，准备纯数据的过程，这些数据随 HTML 一起发给浏览器。因为 React 需要用这些数据重新渲染一遍，React v16 之前是这样，在浏览器端，根据这些数据重新渲染一遍的过程，就叫做 Rehydrate。

所有支持 `value` 属性的输入元素包括 `<input>`, `<select>` 和 `<textarea>` 组件，可以通过它来设置值，在编写可控组件时很常用。还有 `defaultValue` 是给非受控组件在加载时设置初始值的。

到 React 16 为止，所有标准 DOM 属性都已经完全支持，React 总是提供以 JavaScript 为中心的 API。由于 React 组件经常自己定义属性或 DOM 相关的属性，React 使用驼峰 `camelCase` 表达 DOM APIs：

```js
<div tabIndex={-1} />      // Just like node.tabIndex DOM API
<div className="Button" /> // Just like node.className DOM API
<input readOnly={true} />  // Just like node.readOnly DOM API
```

部分 React 支持的 DOM 属性如下：

```
accept acceptCharset accessKey action allowFullScreen alt async autoComplete
autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
cite classID className colSpan cols content contentEditable contextMenu controls
controlsList coords crossOrigin data dateTime default defer dir disabled
download draggable encType form formAction formEncType formMethod formNoValidate
formTarget frameBorder headers height hidden high href hrefLang htmlFor
httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
min minLength multiple muted name noValidate nonce open optimum pattern
placeholder poster preload profile radioGroup readOnly rel required reversed
role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
sizes span spellCheck src srcDoc srcLang srcSet start step style summary
tabIndex target title type useMap value width wmode wrap
```

所有 SVG 属性者支持：

```
accentHeight accumulate additive alignmentBaseline allowReorder alphabetic
amplitude arabicForm ascent attributeName attributeType autoReverse azimuth
baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight
clip clipPath clipPathUnits clipRule colorInterpolation
colorInterpolationFilters colorProfile colorRendering contentScriptType
contentStyleType cursor cx cy d decelerate descent diffuseConstant direction
display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground
end exponent externalResourcesRequired fill fillOpacity fillRule filter
filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize
fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy
g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef
gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic
imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength
kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor
limitingConeAngle local markerEnd markerHeight markerMid markerStart
markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode
numOctaves offset opacity operator order orient orientation origin overflow
overlinePosition overlineThickness paintOrder panose1 pathLength
patternContentUnits patternTransform patternUnits pointerEvents points
pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits
r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions
requiredFeatures restart result rotate rx ry scale seed shapeRendering slope
spacing specularConstant specularExponent speed spreadMethod startOffset
stdDeviation stemh stemv stitchTiles stopColor stopOpacity
strikethroughPosition strikethroughThickness string stroke strokeDasharray
strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity
strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor
textDecoration textLength textRendering to transform u1 u2 underlinePosition
underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic
vHanging vIdeographic vMathematical values vectorEffect version vertAdvY
vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing
writingMode x x1 x2 xChannelSelector xHeight xlinkActuate xlinkArcrole
xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlns xmlnsXlink xmlBase
xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
```




# ⚑ Element UI
https://element.eleme.cn/#/zh-CN/component/installation
https://elemefe.github.io/element-react/#/zh-CN/quick-start

## Element React

安装
推荐使用 npm 的方式安装，它能更好地和webpack打包工具配合使用。

	npm i element-react --save

主题
开始前, 你还需要一个主题包, 这里我们推荐使用element-theme-default.

	npm install element-theme-default --save

使用

	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Button } from 'element-react';

	import 'element-theme-default';

	ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('app'));

## Element Vue

¶npm 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

	npm i element-ui -S

Quick Start

	import Vue from 'vue'
	import Element from 'element-ui'

	Vue.use(Element)

	// or
	import {
	  Select,
	  Button
	  // ...
	} from 'element-ui'

	Vue.component(Select.name, Select)
	Vue.component(Button.name, Button)


¶CDN
目前可以通过 unpkg.com/element-ui 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

	<!-- 引入样式 -->
	<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
	<!-- 引入组件库 -->
	<script src="https://unpkg.com/element-ui/lib/index.js"></script>

我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。

¶Hello world

通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world 页面。在线演示 https://codepen.io/ziyoung/pen/rRKYpd

	<!DOCTYPE html>
	<html>
	<head>
	  <meta charset="UTF-8">
	  <!-- import CSS -->
	  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
	</head>
	<body>
	  <div id="app">
	    <el-button @click="visible = true">Button</el-button>
	    <el-dialog :visible.sync="visible" title="Hello world">
	      <p>Try Element</p>
	    </el-dialog>
	  </div>
	</body>
	  <!-- import Vue before Element -->
	  <script src="https://unpkg.com/vue/dist/vue.js"></script>
	  <!-- import JavaScript -->
	  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
	  <script>
	    new Vue({
	      el: '#app',
	      data: function() {
	        return { visible: false }
	      }
	    })
	  </script>
	</html>

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：快速上手。


## Element Quick Start
使用 vue-cli@3
我们为新版的 vue-cli 准备了相应的 Element 插件，你可以用它们快速地搭建一个基于 Element 的项目。

¶使用 Starter Kit
我们提供了通用的项目模板，你可以直接使用。对于 Laravel 用户，我们也准备了相应的模板，同样可以直接下载使用。

如果不希望使用我们提供的模板，请继续阅读。

¶引入 Element
你可以引入整个 Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。

¶完整引入
在 main.js 中写入以下内容：

	import Vue from 'vue';
	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-chalk/index.css';
	import App from './App.vue';

	Vue.use(ElementUI);

	new Vue({
	  el: '#app',
	  render: h => h(App)
	});

以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。

¶按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

	npm install babel-plugin-component -D

然后，将 .babelrc 修改为：

	{
	  "presets": [["es2015", { "modules": false }]],
	  "plugins": [
	    [
	      "component",
	      {
	        "libraryName": "element-ui",
	        "styleLibraryName": "theme-chalk"
	      }
	    ]
	  ]
	}

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

	import Vue from 'vue';
	import { Button, Select } from 'element-ui';
	import App from './App.vue';

	Vue.component(Button.name, Button);
	Vue.component(Select.name, Select);
	/* 或写为
	 * Vue.use(Button)
	 * Vue.use(Select)
	 */

	new Vue({
	  el: '#app',
	  render: h => h(App)
	});

完整组件列表和引入方式（完整组件列表以 components.json 为准）

	import Vue from 'vue';
	import {
	  Pagination,
	  Dialog,
	  Autocomplete,
	  Dropdown,
	  DropdownMenu,
	  DropdownItem,
	  Menu,
	  Submenu,
	  MenuItem,
	  MenuItemGroup,
	  Input,
	  InputNumber,
	  Radio,
	  RadioGroup,
	  RadioButton,
	  Checkbox,
	  CheckboxButton,
	  CheckboxGroup,
	  Switch,
	  Select,
	  Option,
	  OptionGroup,
	  Button,
	  ButtonGroup,
	  Table,
	  TableColumn,
	  DatePicker,
	  TimeSelect,
	  TimePicker,
	  Popover,
	  Tooltip,
	  Breadcrumb,
	  BreadcrumbItem,
	  Form,
	  FormItem,
	  Tabs,
	  TabPane,
	  Tag,
	  Tree,
	  Alert,
	  Slider,
	  Icon,
	  Row,
	  Col,
	  Upload,
	  Progress,
	  Spinner,
	  Badge,
	  Card,
	  Rate,
	  Steps,
	  Step,
	  Carousel,
	  CarouselItem,
	  Collapse,
	  CollapseItem,
	  Cascader,
	  ColorPicker,
	  Transfer,
	  Container,
	  Header,
	  Aside,
	  Main,
	  Footer,
	  Timeline,
	  TimelineItem,
	  Link,
	  Divider,
	  Image,
	  Calendar,
	  Backtop,
	  PageHeader,
	  CascaderPanel,
	  Loading,
	  MessageBox,
	  Message,
	  Notification
	} from 'element-ui';

	Vue.use(Pagination);
	Vue.use(Dialog);
	Vue.use(Autocomplete);
	Vue.use(Dropdown);
	Vue.use(DropdownMenu);
	Vue.use(DropdownItem);
	Vue.use(Menu);
	Vue.use(Submenu);
	Vue.use(MenuItem);
	Vue.use(MenuItemGroup);
	Vue.use(Input);
	Vue.use(InputNumber);
	Vue.use(Radio);
	Vue.use(RadioGroup);
	Vue.use(RadioButton);
	Vue.use(Checkbox);
	Vue.use(CheckboxButton);
	Vue.use(CheckboxGroup);
	Vue.use(Switch);
	Vue.use(Select);
	Vue.use(Option);
	Vue.use(OptionGroup);
	Vue.use(Button);
	Vue.use(ButtonGroup);
	Vue.use(Table);
	Vue.use(TableColumn);
	Vue.use(DatePicker);
	Vue.use(TimeSelect);
	Vue.use(TimePicker);
	Vue.use(Popover);
	Vue.use(Tooltip);
	Vue.use(Breadcrumb);
	Vue.use(BreadcrumbItem);
	Vue.use(Form);
	Vue.use(FormItem);
	Vue.use(Tabs);
	Vue.use(TabPane);
	Vue.use(Tag);
	Vue.use(Tree);
	Vue.use(Alert);
	Vue.use(Slider);
	Vue.use(Icon);
	Vue.use(Row);
	Vue.use(Col);
	Vue.use(Upload);
	Vue.use(Progress);
	Vue.use(Spinner);
	Vue.use(Badge);
	Vue.use(Card);
	Vue.use(Rate);
	Vue.use(Steps);
	Vue.use(Step);
	Vue.use(Carousel);
	Vue.use(CarouselItem);
	Vue.use(Collapse);
	Vue.use(CollapseItem);
	Vue.use(Cascader);
	Vue.use(ColorPicker);
	Vue.use(Transfer);
	Vue.use(Container);
	Vue.use(Header);
	Vue.use(Aside);
	Vue.use(Main);
	Vue.use(Footer);
	Vue.use(Timeline);
	Vue.use(TimelineItem);
	Vue.use(Link);
	Vue.use(Divider);
	Vue.use(Image);
	Vue.use(Calendar);
	Vue.use(Backtop);
	Vue.use(PageHeader);
	Vue.use(CascaderPanel);

	Vue.use(Loading.directive);

	Vue.prototype.$loading = Loading.service;
	Vue.prototype.$msgbox = MessageBox;
	Vue.prototype.$alert = MessageBox.alert;
	Vue.prototype.$confirm = MessageBox.confirm;
	Vue.prototype.$prompt = MessageBox.prompt;
	Vue.prototype.$notify = Notification;
	Vue.prototype.$message = Message;

¶全局配置
在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。按照引入 Element 的方式，具体操作如下：

完整引入 Element：

	import Vue from 'vue';
	import Element from 'element-ui';
	Vue.use(Element, { size: 'small', zIndex: 3000 });

按需引入 Element：

	import Vue from 'vue';
	import { Button } from 'element-ui';

	Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
	Vue.use(Button);
按照以上设置，项目中所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。

¶开始使用
至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。

¶使用 Nuxt.js
我们还可以使用 Nuxt.js：https://nuxtjs.org/




# ⚑ React for Vue developers
[React for Vue developers](https://sebastiandedeyne.com/react-for-vue-developers/)

## React vs Vue template

Vue 的 template 表示模板，同時也是一個模板包裹元素，本身不參與視圖的渲染，和微信小程序的 Block 節點一樣，而 React 可以渲染数组，只要數組元素是合法組件即可，更靈活，但注意要添加 key 屬性讓 React 在狀態更新時進行比對識別。可以把要渲染的任意组件放入数组中，這種方式可以避免 DOM 結構的節點層級過多。

	<!-- Greeter.vue -->
	<template>
	  <p>Hello, {{ name }}!</p>
	</template>

	<script>
	export default {
	  props: ['name']
	};
	</script>


	// React uses JSX, which is an extension of ECMAScript.
	export default function Greeter({ name }) {
	  return ["WOo!", <p>Hello, {name}!</p>];
	}


## Rect vs Vue v-if-else

Vue uses v-if, v-else and v-else-if directives to conditionally render parts of a template.

	<!-- Awesome.vue -->
	<template>
	  <article>
	    <h1 v-if="awesome">Vue is awesome!</h1>
	  </article>
	</template>

	<script>
	export default {props: ['awesome'] };
	</script>

React doesn’t support directives, so you need to use the language to conditionally return parts of a template.

The && operator provides a succinct way to write an if statement.

	export default function Awesome({ awesome }) {
	  return (
	    <article>
	      {awesome && <h1>React is awesome!</h1>};
	    </article>
	  );
	}

If you need an else clause, use a ternary statement instead.

	export default function Awesome({ awesome }) {
	  return (
	    <article>
	      {awesome ? (
	        <h1>React is awesome!</h1>
	      ) : (
	        <h1>Oh no 😢</h1>
	      )};
	    </article>
	}

You could also opt to keep the two branches completely separated, and use an early return instead.

	export default function Awesome({ awesome }) {
	  if (!awesome) {
	    return (
	      <article>
	        <h1>Oh no 😢</h1>
	      </article>
	    );
	  }

	  return (
	    <article>
	      <h1>React is awesome!</h1>
	    </article>
	  );
	}


## Rect vs Vue v-for List rendering

React alternative: Array.map

Vue uses the v-for directive to loop over arrays and objects.

	<!-- Recipe.vue -->
	<template>
	  <ul>
	    <li v-for="(ingredient, index) in ingredients" :key="index">
	      {{ ingredient }}
	    </li>
	  </ul>
	</template>

	<script>
	export default {
	  props: ['ingredients']
	};
	</script>

With React, you can “map” the array to a set of elements using the built in Array.map function.

	export default function Recipe({ ingredients }) {
	  return (
	    <ul>
	      {ingredients.map((ingredient, index) => (
	        <li key={index}>{ingredient}</li>
	      ))}
	    </ul>
	  );
	}

Iterating objects is a bit trickier. Vue allows you to use the same v-for directive for keys & values.

	<!-- KeyValueList.vue -->
	<template>
	  <ul>
	    <li v-for="(value, key) in object" :key="key">
	      {{ key }}: {{ value }}
	    </li>
	  </ul>
	</template>

	<script>
	export default {
	  props: ['object'] // E.g. { a: 'Foo', b: 'Bar' }
	};
	</script>

I like to use the built in Object.entries function with React to iterate over objects.

	export default function KeyValueList({ object }) {
	  return (
	    <ul>
	      {Object.entries(object).map(([key, value]) => (
	        <li key={key}>{value}</li>
	      ))}
	    </ul>
	  );
	}


## Rect vs Vue Class and style bindings

React alternative: Manually pass props

Vue automatically binds class and style props to the outer HTML element of a component.

	<!-- Post.vue -->

	<template>
	  <article>
	    <h1>{{ title }}</h1>
	  </article>
	</template>

	<script>
	export default {props: ['title'], };
	</script>

	<!-- <post :title="About CSS" class="margin-bottom" style="color: red" /> -->

With React, you need to manually pass className and style props. Note that style must be an object with React, strings are not supported.

	export default function Post({ title, className, style }) {
	  return (
	    <article className={className} style={style}>
	      {title}
	    </article>
	  );
	}

	{/* <Post title="About CSS" className="margin-bottom" style={{ color: 'red' }} /> */}

If you want to pass down all remaining props, the object rest spread operator comes in handy.

	export default function Post({ title, ...props }) {
	  return (
	    <article {...props}>
	      {title}
	    </article>
	  );
	}

If you miss Vue’s excellent class API, look into [Jed Watson’s classnames library](https://github.com/JedWatson/classnames).


## Rect vs Vue Props

React alternative: Props

Props behave pretty much the same way in React as Vue. One minor difference: React components won’t inherit unknown attributes.

	<!-- Post.vue -->

	<template>
	  <h1>{{ title }}</h1>
	</template>

	<script>
	export default {
	  props: ['title'],
	};
	</script>

React style:

	export default function Post({ title }) {
	  return <h3>{title}</h3>;
	}

Using expressions as props in Vue is possible with a : prefix, which is an alias for the v-bind directive. React uses curly braces for dynamic values.

	<!-- Post.vue -->

	<template>
	  <post-title :title="title" />
	</template>

	<script>
	export default {
	  props: ['title'],
	};
	</script>

React style:

	export default function Post({ title }) {
	  return <PostTitle title={title} />;
	}


## React vs Vue Data

React alternative: The useState hook

In Vue the data option is used to store local component state.

	<!-- ButtonCounter.vue -->

	<template>
	  <button @click="count++">
	    You clicked me {{ count }} times.
	  </button>
	</template>

	<script>
	export default {
	  data() {
	    return {
	      count: 0
	    }
	  }
	};
	</script>

React exposes a useState hook which returns a two-element array containing the current state value and a setter function.

	import { useState } from 'react';

	export default function ButtonCounter() {
	  const [count, setCount] = useState(0);

	  return (
	    <button onClick={() => setCount(count + 1)}>
	      {count}
	    </button>
	  );
	}

You can choose whether you prefer to distribute state between multiple useState calls, or keep it in a single object.

	import { useState } from 'react';

	export default function ProfileForm() {
	  const [name, setName] = useState('Sebastian');
	  const [email, setEmail] = useState('sebastian@spatie.be');
	  // ...
	}
	import { useState } from 'react';

	export default function ProfileForm() {
	  const [values, setValues] = useState({
	    name: 'Sebastian',
	    email: 'sebastian@spatie.be'
	  });
	  // ...
	}

## Rect vs Vue v-model

v-model is a convenient Vue directive that combines passing down a value prop with listening to an input event. This makes it look like Vue does two-way binding, while it’s still just “props down, events up” under the hood.

	<!-- Profile.vue -->

	<template>
	  <input type="text" v-model="name" />
	</template>

	<script>
	export default {
	  data() {
	    return {
	      name: 'Sebastian'
	    }
	  }
	};
	</script>

Vue expands the v-model directive to the following:

	<template>
	  <input
	    type="text"
	    :value="name"
	    @input="name = $event.target.value"
	  />
	</template>

React doesn’t have a v-model equivalent. You always need to be explicit:

	import { useState } from 'react';

	export default function Profile() {
	  const [name, setName] = useState('Sebastian');

	  return (
	    <input
	      type="text"
	      value={name}
	      onChange={event => setName(event.target.name)}
	    />
	  );
	}


## Rect vs Vue Computed properties

React alternative: Variables, optionally wrapped in useMemo

Vue has computed properties for two reasons: to avoid mixing logic and markup in templates, and to cache complex computations in a component instance.

Without computed properties:

	<!-- ReversedMessage.vue -->

	<template>
	  <p>{{ message.split('').reverse().join('') }}</p>
	</template>

	<script>
	export default {
	  props: ['message']
	};
	</script>

React Style:

	export default function ReversedMessage({ message }) {
	  return <p>{message.split('').reverse().join('')}</p>;
	}

With React, you can extract the computation from the template by assigning the result to a variable.

	<!-- ReversedMessage.vue -->

	<template>
	  <p>{{ reversedMessage }}</p>
	</template>

	<script>
	export default {
	  props: ['message'],

	  computed: {
	    reversedMessage() {
	      return this.message.split('').reverse().join('');
	    }
	  }
	};
	</script>

React Style:

	export default function ReversedMessage({ message }) {
	  const reversedMessage = message.split('').reverse().join('');

	  return <p>{reversedMessage}</p>;
	}

If performance is a concern, the computation can be wrapped in a useMemo hook. useMemo requires a callback that returns a computed result, and an array of dependencies.

In the following example, reversedMessage will only be recomputed if the message dependency changes.

	import { useMemo } from 'react';

	export default function ReversedMessage({ message }) {
	  const reversedMessage = useMemo(() => {
	    return message.split('').reverse().join('');
	  }, [message]);

	  return <p>{reversedMessage}</p>;
	}


## Rect vs Vue Methods

React alternative: Functions

Vue has a methods option to declare functions that can be used throughout the component.

	<!-- ImportantButton.vue -->

	<template>
	  <button onClick="doSomething">
	    Do something!
	  </button>
	</template>

	<script>
	export default {
	  methods: {
	    doSomething() {
	      // ...
	    }
	  }
	};
	</script>

In React you can declare plain functions inside our component.

	export default function ImportantButton() {
	  function doSomething() {
	    // ...
	  }

	  return (
	    <button onClick={doSomething}>
	      Do something!
	    </button>
	  );
	}



## Rect vs Vue Events

React alternative: Callback props

Events are essentially callbacks that are called when something happened in the child component. Vue sees events as a first-class citizen, so you can “listen” to them with @, which is shorthand for the v-on directive.

	<!-- PostForm.vue -->

	<template>
	  <form>
	    <button type="button" @click="$emit('save')">
	      Save
	    </button>
	    <button type="button" @click="$emit('publish')">
	      Publish
	    </button>
	  </form>
	</template>

Events don’t have any special meaning in React, they’re just callback props will be called by the child component.

	export default function PostForm({ onSave, onPublish }) {
	  return (
	    <form>
	      <button type="button" onClick={onSave}>
	        Save
	      </button>
	      <button type="button" onClick={onPublish}>
	        Publish
	      </button>
	    </form>
	  );
	}



## Rect vs Vue Event modifiers

React alternative: Higher order functions if you really want

Vue has a few modifiers like prevent and stop to change the way an event is handled without touching it’s handler.

	<!-- AjaxForm.vue -->

	<template>
	  <form @submit.prevent="submitWithAjax">
	    <!-- ... -->
	  </form>
	</template>

	<script>
	export default {
	  methods: {
	    submitWithAjax() {
	      // ...
	    }
	  }
	};
	</script>

There’s no modifier syntax in React. Preventing defaults and stopping propagation is mostly handled in the callback.

	export default function AjaxForm() {
	  function submitWithAjax(event) {
	    event.preventDefault();
	    // ...
	  }

	  return (
	    <form onSubmit={submitWithAjax}>
	      {/* ... */}
	    </form>
	  );
	}

If you really want to have something modifier-like, you could use a higher order function.

	function prevent(callback) {
	  return (event) => {
	      event.preventDefault();
	      callback(event);
	  };
	}

	export default function AjaxForm() {
	  function submitWithAjax(event) {
	    // ...
	  }

	  return (
	    <form onSubmit={prevent(submitWithAjax)}>
	      {/* ... */}
	    </form>
	  );
	}



## Rect vs Vue Lifecycle methods

React alternative: The useEffect hook

DISCLAIMER

With class components, React has a very similar API to Vue when it comes to the component lifecycle. With hooks, most lifecycle-related problems can be solved with useEffect. Effects and lifecycle methods are completely different paradigms, so they're hard to compare. In turn, this section is limited to a few practical examples, as effects deserve their own article.

A common case for lifecycle methods is to set up and tear down third party libraries.

	<template>
	  <input type="text" ref="input" />
	</template>

	<script>
	import DateTimePicker from 'awesome-date-time-picker';

	export default {
	  mounted() {
	   this.dateTimePickerInstance =
	     new DateTimePicker(this.$refs.input);
	  },

	  beforeDestroy() {
	    this.dateTimePickerInstance.destroy();
	  }
	};
	</script>

With useEffect, you can declare a “side effect” that needs to run after a render. When you return a callback from useEffect, it will be invoked when the effect gets cleaned up. In this case, when the component is destroyed.

	import { useEffect, useRef } from 'react';
	import DateTimePicker from 'awesome-date-time-picker';

	export default function Component() {
	  const dateTimePickerRef = useRef();

	  useEffect(() => {
	    const dateTimePickerInstance =
	      new DateTimePicker(dateTimePickerRef.current);

	    return () => {
	      dateTimePickerInstance.destroy();
	    };
	  }, []);

	  return <input type="text" ref={dateTimePickerRef} />;
	}

This looks similar to registering a beforeDestroy listener in mounted in a Vue component.

	<script>
	export default {
	  mounted() {
	    const dateTimePicker =
	      new DateTimePicker(this.$refs.input);

	    this.$once('hook:beforeDestroy', () => {
	      dateTimePicker.destroy();
	    });
	  }
	};
	</script>

Similar to useMemo, useEffect accepts an array of dependencies as a second parameter.

Without any specified dependencies, the effect will run after every render, and will clean up before every next render. This functionality is similar to a combination of mounted, updated, beforeUpdate and beforeDestroy.

	useEffect(() => {
	    // Happens after every render

	    return () => {
	        // Optional; clean up before next render
	    };
	});

If you specify that the effect has no dependencies, the effect will only run when the component renders the first time, because it has no reason to update. This functionality is similar to a combination of mounted, and beforeDestroyed.

	useEffect(() => {
	    // Happens on mount

	    return () => {
	        // Optional; clean up before unmount
	    };
	}, []);

If you specify a dependency, the effect will only run when the dependency changes. We’ll get back to this in the watchers section.

	const [count, setCount] = useState(0);

	useEffect(() => {
	    // Happens when `count` changes

	    return () => {
	        // Optional; clean up when `count` changed
	    };
	}, [count]);

Trying to directly translating lifecycle hooks to useEffect calls is generally a bad idea. It’s better to rethink things as a set of declarative side effects. When the effect is called is an implementation detail.

As Ryan Florence sums it up:

The question is not “when does this effect run” the question is “with which state does this effect synchronize with”

	useEffect(fn) // all state
	useEffect(fn, []) // no state
	useEffect(fn, [these, states])

@ryanflorence on Twitter



## Rect vs Vue Watchers

React alternative: The useEffect hook

Watchers are conceptually similar to lifecycle hooks: “When X happens, do Y”. Watchers don’t exist in React, but you can achieve the same with useEffect.

	<!-- AjaxToggle.vue -->

	<template>
	  <input type="checkbox" v-model="checked" />
	</template>

	<script>
	export default {
	  data() {
	    return {
	      checked: false
	    }
	  },

	  watch: {
	    checked(checked) {
	      syncWithServer(checked);
	    }
	  },

	  methods: {
	    syncWithServer(checked) {
	      // ...
	    }
	  }
	};
	</script>

React Style:

	import { useEffect, useState } from 'react';

	export default function AjaxToggle() {
	  const [checked, setChecked] = useState(false);

	  function syncWithServer(checked) {
	    // ...
	  }

	  useEffect(() => {
	    syncWithServer(checked);
	  }, [checked]);

	  return (
	    <input
	      type="checkbox"
	      checked={checked}
	      onChange={() => setChecked(!checked)}
	    />
	  );
	}

Note that useEffect will also run in the first render. This is the same as using the immediate parameter in a Vue watcher.

If you don’t want the effect to run on the first render, you’ll need to create a ref to store whether or not the first render has happened yet or not.

	import { useEffect, useRef, useState } from 'react';

	export default function AjaxToggle() {
	  const [checked, setChecked] = useState(false);
	  const firstRender = useRef(true);

	  function syncWithServer(checked) {
	    // ...
	  }

	  useEffect(() => {
	    if (firstRender.current) {
	      firstRender.current = false;
	      return;
	    }
	    syncWithServer(checked);
	  }, [checked]);

	  return (
	    <input
	      type="checkbox"
	      checked={checked}
	      onChange={() => setChecked(!checked)}
	    />
	  );
	}



## Rect vs Vue Slots & scoped slots

React alternative: JSX props or render props

If you render a template inside between a component’s opening and closing tags, React passes it as a children prop.

With Vue, you need to declare a `<slot />` tag where inner contents belong. With React, you render the children prop.

	<!-- RedParagraph.vue -->

	<template>
	  <p style="color: red">
	    <slot />
	  </p>
	</template>

React Style:

	export default function RedParagraph({ children }) {
	  return (
	    <p style={{ color: 'red' }}>
	      {children}
	    </p>
	  );
	}

Since “slots” are just props in React, we don’t need to declare anything in our templates. We can just accept props with JSX, and render them where and when we want.

	<!-- Layout.vue -->

	<template>
	  <div class="flex">
	    <section class="w-1/3">
	        <slot name="sidebar" />
	    </section>
	    <main class="flex-1">
	        <slot />
	    </main>
	  </div>
	</template>

	<!-- In use: -->

	<layout>
	  <template #sidebar>
	    <nav>...</nav>
	  </template>
	  <template #default>
	    <post>...</post>
	  </template>
	</layout>

React Style:

	export default function RedParagraph({ sidebar, children }) {
	  return (
	    <div className="flex">
	      <section className="w-1/3">
	        {sidebar}
	      </section>
	      <main className="flex-1">
	        {children}
	      </main>
	    </div>
	  );
	}

	// In use:

	return (
	  <Layout sidebar={<nav>...</nav>}>
	    <Post>...</Post>
	  </Layout>
	);

Vue has scoped slots to pass data to the slot that will be rendered. The key part of scoped slots is will be rendered.

Regular slots are rendered before they get passed to the parent component. The parent component then decides what to do with the rendered fragment.

Scoped slots can’t be rendered before the parent component, because they rely on data they’ll receive from the parent component. In a way, scoped slots are lazily evaluated slots.

Lazily evaluating something in JavaScript is rather straightforward: wrap it in a function and call it when needed. If you need a scoped slot with React, pass a function that will render a template when called.

For a scoped slots, we can once again use children, or any other prop for named scoped slots. However, we’ll pass down a function instead of declaring a template.

	<!-- CurrentUser.vue -->

	<template>
	  <span>
	    <slot :user="user" />
	  </span>
	</template>

	<script>
	export default {
	  inject: ['user']
	};
	</script>

	<!-- In use: -->

	<template>
	  <current-user>
	    <template #default="{ user }">
	      {{ user.firstName }}
	    </template>
	  </current-user>
	</template>

React Style:

	import { useContext } from 'react';
	import UserContext from './UserContext';

	export default function CurrentUser({ children }) {
	  const { user } = useContext(UserContext);

	  return (
	    <span>
	      {children(user)}
	    </span>
	  );
	}

	// In use:

	return (
	  <CurrentUser>
	    {user => user.firstName}
	  </CurrentUser>
	);



## Rect vs Vue Provide / inject

React alternative: createContext and the useContext hook

Provide / inject allows a component to share state with its subtree. React has a similar feature called context.

	<!-- MyProvider.vue -->

	<template>
	  <div><slot /></div>
	</template>

	<script>
	export default {
	  provide: {
	    foo: 'bar'
	  },
	};
	</script>

	<!-- Must be rendered inside a MyProvider instance: -->

	<template>
	  <p>{{ foo }}</p>
	</template>

	<script>
	export default {
	  inject: ['foo']
	};
	</script>

React Style:

	import { createContext, useContext } from 'react';

	const fooContext = createContext('foo');

	function MyProvider({ children }) {
	  return (
	    <FooContext.Provider value="foo">
	      {children}
	    </FooContext.Provider>
	  );
	}

	// Must be rendered inside a MyProvider instance:

	function MyConsumer() {
	  const foo = useContext(FooContext);

	  return <p>{foo}</p>;
	}

## Rect vs Vue Custom directives

React alternative: Components

Directives don’t exist in React. However, most problems that directives solve can be solved with components instead.

	<div v-tooltip="Hello!">
	  <p>...</p>
	</div>

React Style:

	return (
	  <Tooltip text="Hello">
	    <div>
	      <p>...</p>
	    </div>
	  </Tooltip>
	);

## Rect vs Vue Transitions

React alternative: Third party libraries

React doesn’t have any built in transition utilities. If you’re looking for something similar to Vue, a library that doesn’t actually animates anything but orchestrates animations with classes, look into react-transition-group.

If you prefer a library that does more heavy lifting for you, look into Pose.




# ⚑ Testing Library 测试
- React Testing Library https://testing-library.com/docs/react-testing-library/example-intro
- React Testing Library - NPM https://www.npmjs.com/org/testing-library
- React Testing Library - Github https://github.com/testing-library/react-testing-library
- Other Utilities - Simulate https://reactjs.org/docs/test-utils.html#simulate

`@testing-library` 系列软件包可以帮助您以用户为中心的方式测试 UI 组件，目前有 17 个模块，覆盖了当前流行和各个前端框架。这是一个全面的 React DOM 测试框架，是一个比 Airbnb Enzyme 更好的测试框架。

编写可维护的测试，使您对组件是否为用户工作有很高的信心。同时避免包含实现细节，这样组件的重构，对实现的更改而不是功能的更改，就不会破坏您的测试，并降低您和您的团队的速度。

你的测试越像你的软件的使用方式，就越能给你信心。

参考一个示范，以下展示了如何 Mock Fetch API 实现 AJAX 请求的监视测试，并且激发 Input 节点键盘事件完成这一请求动作：

```js
test('click test', () => {
  const fakeUserResponse = {token: 'fake_user_token'}
  let fetch = window.fetch;

  render(<App />);
  let input = screen.getByPlaceholderText(/Type Block Hash Here/i);

  jest.spyOn(window, 'fetch').mockImplementationOnce((url, ...args) => {
    let hash = url.indexOf(input.value)>-1;
    // console.log("fetch args", hash, input.value)
    expect(hash).toBe(true);
    return fetch(args)
  });
  
  fireEvent.keyDown( input, { key: 'Enter', code: 'Enter' } )
});
```

## react-testing-library 介绍

- Introducing the react-testing-library https://kentcdodds.com/blog/introducing-the-react-testing-library/

比如，有一个 `HiddenMessage` 组件，它会将界面中的一些字符串隐藏，配合 `userEvent` 激发事件测试它是不是真的可以隐藏：

```js
import '@testing-library/jest-dom/extend-expect'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'

import HiddenMessage from '../hidden-message'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(<HiddenMessage>{testMessage}</HiddenMessage>)
  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()
  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  userEvent.click(screen.getByLabelText(/show/i))
  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})
```


又比如，有一个 `Login` 组件，它会使用 fetch 请求登录，然后使用 `localStorage` 本地存储服务保存登录凭证：

	window.localStorage.setItem('token', user.token)

使用 `fetch` 请求数据类似如下操作：

	export function loadBlock(hash, setV = ()=>{}, onError = ()=>{}) {
	  // https://www.blockchain.com/api/blockchain_api
	  return fetch("https://blockchain.info/rawblock/"+hash+"?cors=true")
	  .then(res => {
	    return res.json();
	  })
	  .then(json => {
	    setV(json);
	    return json;
	  })
	  .catch(ex => {
	    onError(ex)
	    console.log(ex);
	  });
	}

那么，使用 mock 来封装 Fetch API 进行测试：

```js
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'

import Login from '../login'

test('allows the user to login successfully', async () => {
  // mock out window.fetch for the test
  const fakeUserResponse = {token: 'fake_user_token'}
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    })
  })
  render(<Login />)
  // fill out the form
  userEvent.type(screen.getByLabelText(/username/i), 'chuck')
  userEvent.type(screen.getByLabelText(/password/i), 'norris')
  userEvent.click(screen.getByText(/submit/i))
  // just like a manual tester, we'll instruct our test to wait for the alert
  // to show up before continuing with our assertions.
  const alert = await screen.findByRole('alert')
  // .toHaveTextContent() comes from jest-dom's assertions
  // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
  // but jest-dom will give you better error messages which is why it's recommended
  expect(alert).toHaveTextContent(/congrats/i)
  expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
})
```

或者使用 Mock Service Worker（MSW）创建测试用 Web 服务器：

```js
// __tests__/login.js
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import '@testing-library/jest-dom'
import * as React from 'react'
// import API mocking utilities from Mock Service Worker.
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// import testing utilities
import {render, fireEvent, screen} from '@testing-library/react'
import Login from '../login'

const fakeUserResponse = {token: 'fake_user_token'}
const server = setupServer(
  rest.post('/api/login', (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse))
  }),
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  window.localStorage.removeItem('token')
})
afterAll(() => server.close())

test('allows the user to login successfully', async () => {
  render(<Login />)

  // fill out the form
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: {value: 'chuck'},
  })
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: {value: 'norris'},
  })

  fireEvent.click(screen.getByText(/submit/i))

  // just like a manual tester, we'll instruct our test to wait for the alert
  // to show up before continuing with our assertions.
  const alert = await screen.findByRole('alert')

  // .toHaveTextContent() comes from jest-dom's assertions
  // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
  // but jest-dom will give you better error messages which is why it's recommended
  expect(alert).toHaveTextContent(/congrats/i)
  expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
})

test('handles server exceptions', async () => {
  // mock the server error response for this test suite only.
  server.use(
    rest.post('/api/login', (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({message: 'Internal server error'}))
    }),
  )

  render(<Login />)

  // fill out the form
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: {value: 'chuck'},
  })
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: {value: 'norris'},
  })

  fireEvent.click(screen.getByText(/submit/i))

  // wait for the error message
  const alert = await screen.findByRole('alert')

  expect(alert).toHaveTextContent(/internal server error/i)
  expect(window.localStorage.getItem('token')).toBeNull()
})
```


镇压不必要的 React DOM 16.8 警告信息：

Warning: An update to ComponentName inside a test was not wrapped in act(...).

```js
// this is just a little hack to silence a warning that we'll get until we
// upgrade to 16.9. See also: https://github.com/facebook/react/pull/14853
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
```

警告：测试中对 ComponentName 的更新未包装在 `act(...)`。


## DOM Testing Library
- https://testing-library.com/docs/dom-testing-library/intro
- https://testing-library.com/docs/dom-testing-library/cheatsheet
- https://testing-library.com/docs/dom-testing-library/api-async
- https://testing-library.com/docs/dom-testing-library/api-events

API 概要：

- `Simulate`: a re-export from the Simulate utility from thereact-dom/test-utilsSimulateobject.
- `wait`: allows you to wait for a non-deterministic period of time in your tests. Normally you should mock out API requests or animations, but even if you're dealing with immediately resolved promises, you'll need your tests to wait for the next tick of the event loop and wait is really good for that. (Big shout out to Łukasz Gozda Gandecki who introduced this as a replacement for the (now deprecated)flushPromises API).
- `render`: This is the meat of the library. It's fairly simple. It creates a divwith document.createElement, then uses ReactDOM.render to render to that div.
The render function returns the following objects and utilities:
- `container`: The div your component was rendered to
- `unmount`: A simple wrapper over ReactDOM.unmountComponentAtNodeto unmount your component (to facilitate easier testing of componentWillUnmount for example).


根据文档层次结构，以下 Screen API 可帮助您从不同的查询方法获取测试 UI 目标：

- `screen.getByLabelText()` （获取 label 关联表单元素）
- `screen.getByPlaceholderText()` （仅当您的输入没有标签关联时使用 placeholder 属性来获取元素！）
- `screen.getByText()` （根据内容获取）
- `screen.getByAltText()` （根据 Alt 内容获取图片）
- `screen.getByTestId()` （获取 data-testid 关联元素或其他奇怪元素） 

这些方法在没有想到相应的元素时就会抛出异常，非常有用。可以使用以下匹配模式：

- 不分大小写的部分匹配，`lo world` 可以匹配 `Hello World`；
- 正则匹配，`/^Hello World$/` 匹配 `Hello World`；
- 一个接收 text 或 element 的回调函数: `(text, el) => el.tagName === 'SPAN' && text.startsWith('Hello')`，根据返回条件匹配；

还有类似的 `query*` API，它们将返回 null，而不是抛出一个错误，这对于断言元素不在 DOM 中很有用。

要感谢 Anto Aravinth Belgin Rayen，他们实现了以下这两个方便的测试 API：

- `toBeInTheDOM`: Assert whether an element present in the DOM or not.
- `toHaveTextContent`: Check whether the given element has a text content or not.


### 👉 Appearance and Disappearance

节点数量判断

```js
const submitButton = screen.queryByText('submit')
expect(submitButton).toBeNull() // it doesn't exist

const submitButtons = screen.queryAllByText('submit')
expect(submitButtons).toHaveLength(0) // expect no elements
```


显示与隐藏节点判断

```ts
test('movie title appears', async () => {
  // element is initially not present...

  // wait for appearance inside an assertion
  await waitFor(() => {
    expect(getByText('the lion king')).toBeInTheDocument()
  })
})
```

```ts
test('movie title no longer present in DOM', async () => {
  // element is removed
  await waitForElementToBeRemoved(() => queryByText('the mummy'))
})
```

```ts
import '@testing-library/jest-dom/extend-expect'
// use `queryBy` to avoid throwing an error with `getBy`
const submitButton = screen.queryByText('submit')
expect(submitButton).not.toBeInTheDocument()
```

### 👉 Queries API

	|            | No Match | 1 Match | 1+ Match | Await? |
	|------------|----------|---------|----------|--------|
	| getBy      | throw    | return  | throw    | No     |
	| findBy     | throw    | return  | throw    | Yes    |
	| queryBy    | null     | return  | throw    | No     |
	| getAllBy   | throw    | array   | array    | No     |
	| findAllBy  | throw    | array   | array    | Yes    |
	| queryAllBy | []       | array   | array    | No     |

	| By label or aria-label | By input placeholder value | By element text | By form element value  |
	|------------------------|----------------------------|-----------------|------------------------|
	| getByLabelText         | getByPlaceholderText       | getByText       | getByDisplayValue      |
	| queryByLabelText       | queryByPlaceholderText     | queryByText     | queryByDisplayValue    |
	| getAllByLabelText      | getAllByPlaceholderText    | getAllByText    | getAllByDisplayValue   |
	| queryAllByLabelText    | queryAllByPlaceholderText  | queryAllByText  | queryAllByDisplayValue |
	| findByLabelText        | findByPlaceholderText      | findByText      | findByDisplayValue     |
	| findAllByLabelText     | findAllByPlaceholderText   | findAllByText   | findAllByDisplayValue  |

	| By img alt attribute | By title or svg title tag |  By aria role  | By data-testid attribute |
	|----------------------|---------------------------|----------------|--------------------------|
	| getByAltText         | getByTitle                | getByRole      | getByTestId              |
	| queryByAltText       | queryByTitle              | queryByRole    | queryByTestId            |
	| getAllByAltText      | getAllByTitle             | getAllByRole   | getAllByTestId           |
	| queryAllByAltText    | queryAllByTitle           | queryAllByRole | queryAllByTestId         |
	| findByAltText        | findByTitle               | findByRole     | findByTestId             |
	| findAllByAltText     | findAllByTitle            | findAllByRole  | findAllByTestId          |


### 👉 Async

异步参考 Async API，记得在测试方法中使用 await or .then()。

- waitFor (Promise) retry the function within until it stops throwing or times out
- waitForElementToBeRemoved (Promise) retry the function until it no longer returns a DOM node

Deprecated since v7.0.0:

- wait (Promise) retry the function within until it stops throwing or times
- waitForElement (Promise) retry the function until it returns an element or an array of elements
- findBy and findAllBy queries are async and retry until either a timeout or if the query returns successfully; they wrap waitForElement
- waitForDomChange (Promise) retry the function each time the DOM is changed

异步查询示范：

```js
const button = screen.getByRole('button', { name: 'Click Me' })
fireEvent.click(button)
await screen.findByText('Clicked once')
fireEvent.click(button)
await screen.findByText('Clicked twice')
```

使用 waitFor 实现异步：

```ts
function waitFor<T>(
  callback: () => T | Promise<T>,
  options?: {
    container?: HTMLElement
    timeout?: number
    interval?: number
    onTimeout?: (error: Error) => Error
    mutationObserverOptions?: MutationObserverInit
  }
): Promise<T>

// ...
// Wait until the callback does not throw an error. In this case, that means
// it'll wait until the mock function has been called once.
await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))
// ...
```

使用 waitForElementToBeRemoved 查询

```ts
function waitForElementToBeRemoved<T>(
  callback: (() => T) | T,
  options?: {
    container?: HTMLElement
    timeout?: number
    interval?: number
    onTimeout?: (error: Error) => Error
    mutationObserverOptions?: MutationObserverInit
  }
): Promise<void>


const el = document.querySelector('div.getOuttaHere')
waitForElementToBeRemoved(document.querySelector('div.getOuttaHere')).then(() =>
  console.log('Element no longer in DOM')
)

el.setAttribute('data-neat', true)
// other mutations are ignored...

el.parentElement.removeChild(el)
// logs 'Element no longer in DOM'
```

### 👉 Events

- fireEvent trigger DOM event: fireEvent(node, event)
- fireEvent.* helpers for default event types
	- click fireEvent.click(node)

语法参考：

	fireEvent(node: HTMLElement, event: Event)
	fireEvent[eventName](node: HTMLElement, eventProperties: Object)
	createEvent[eventName](node: HTMLElement, eventProperties: Object)

	fireEvent.mouseOver(element)
	fireEvent.mouseMove(element)
	fireEvent.mouseDown(element)
	element.focus()
	fireEvent.mouseUp(element)
	fireEvent.click(element)

	fireEvent.keyDown(domNode, { key: 'Enter', code: 'Enter' })
	fireEvent.keyDown(domNode, { key: 'A', code: 'KeyA' })

	// <button>Submit</button>
	fireEvent(
	  getByText(container, 'Submit'),
	  new MouseEvent('click', {
	    bubbles: true,
	    cancelable: true,
	  })
	)

完整例子参考：

```ts
import { render, screen, fireEvent } from '@testing-library/react'

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
)

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

```ts
const myEvent = createEvent.click(node, { button: 2 })
fireEvent(node, myEvent)
// myEvent.timeStamp can be accessed just like any other properties from myEvent

// simulate the 'input' event on a file input
fireEvent(
  input,
  createEvent('input', input, {
    target: { files: inputFiles },
    ...init,
  })
)
```

React 示例，使用 Jest 函数模拟：

```ts
import { render, screen, fireEvent } from '@testing-library/react'

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
)

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

Other#

- 在一个节点中查询其内部节点: within(node).getByText("hello")
- 配置全局选项: configure({testIdAttribute: 'my-data-test-id'})


### 👉 Text Match Options

Given the following HTML:

	<div>Hello World</div>

Will find the div:

```js
// Matching a string:
getByText(container, 'Hello World') // full string match
getByText(container, 'llo Worl', { exact: false }) // substring match
getByText(container, 'hello world', { exact: false }) // ignore case

// Matching a regex:
getByText(container, /World/) // substring match
getByText(container, /world/i) // substring match, ignore case
getByText(container, /^hello world$/i) // full string match, ignore case
getByText(container, /Hello W?oRlD/i) // advanced regex

// Matching with a custom function:
getByText(container, (content, element) => content.startsWith('Hello'))
```

Given a button that updates the page after some time:

```js
test('loads items eventually', async () => {
  // Click button
  fireEvent.click(getByText(node, 'Load'))

  // Wait for page to update with query text
  const items = await findByText(node, /Item #[0-9]: /)
  expect(items).toHaveLength(10)
})
```



# ⚑ Serverless 云函数管中窥豹
- Serverless 教父：云计算的三次浪潮 https://zhuanlan.zhihu.com/p/338098414
- Serverless Framework 腾讯云开发框架 https://github.com/serverless/serverless/blob/master/README_CN.md
- 腾讯云 SDK 中心 https://cloud.tencent.com/document/sdk
- 腾讯云 API Explorer https://console.cloud.tencent.com/api/explorer
- API 密钥管理 https://console.cloud.tencent.com/cam/capi
- 云函数免费额度说明 https://cloud.tencent.com/document/product/583/12282
- https://www.linkedin.com/pulse/20140730172610-9679881-pizza-as-a-service/
- 信息论 - 熵、互信息、相对熵 https://zhuanlan.zhihu.com/p/36192699

这里延伸一下我对信息熵的理解，回顾历史，IT 祖师爷是有定论的，克劳德·香农 Claude Shannon 借鉴了热力学的概念，把信息中排除了冗余后的平均信息量称为信息熵，并给出了计算信息熵的数学表达式。

香农用信息熵的概念描述信源的不确定度，信息熵定义信息的基本作用就是消除人们对事物的不确定性。信息论中熵与物理热力学熵 Entropy 的概念有着紧密的联系，热力学中的热熵是表示分子状态混乱程度的物理量，并且事物总是向着熵增的方向发展。通常，一个信源发送出什么符号是不确定的，衡量它可以根据其出现的概率来度量。概率大，出现机会多，不确定性小；反之不确定性就大。一般而言，当一种信息出现概率更高的时候，表明它被传播得更广泛，或者说，被引用的程度更高。从信息传播的角度来看，信息熵可以表示信息的价值。

例如，抛一枚有均匀正反面的硬币和掷一个均匀六面的骰子，显然色子的熵更大信息量更多。而消除熵的过程就是获取信息的过程，比如我说我抛出的硬币不是正面，在只有两种状态的情境中立刻可以得到正确的信息。而如果说我抛的色子小于 3，这时还没有完全消除信息熵，所以不定性还足够大以致你不能知道真正的信息。

一个随机变量的熵越大，意味着不确定性越大，也就是说该随机变量包含的信息量越大。信息量是什么呢？抛一枚硬币的信息量就是，正面朝上，反面朝上，这里包含的 2 种状态就是信息量。

从古代的烽火台开始，到莫斯密码，再到现代的无线电通信，都是在信息熵增长这条道路上摸索前行。烽火台烧不烧火，烧出什么烟，或什么时间烧这些都是有限的状态，和事先约定的含义是关联的，能传递的信息也就是约定好的，传递一个简单的信息也需要好几天几个月时间。

信息熵的计算公式可以简单理解为，一个信息有 N 种可能的情况，那么信息量为 log2(N) bit 。

经典问题：25 桶水，其中一桶有毒，猪喝毒水后会在 15 分钟内死去，想用一个小时找到这桶毒水，至少需要几头猪？

限制条件：

- 一滴毒水足以导致一头猪的死亡。
- 死亡时间为 15 分钟内不确定的某个时间点。
- 其死亡只是毒水导致的，不会有其他因素导致死亡。
- 猪的承水量无穷大，且假设饮一桶花费时间为零。
- 每桶水的量无穷大。

信息分析，毒水可能出现在任意一桶，要确定是那一桶需要的信息量为 log2(25) ≈ 4.64 bit。猪喝毒水后会在 15 分钟内死去，想用一个小时找到这桶毒水。如果充分利用信息，从开始喂水到猪的死亡时间为 15，30，45，60 分这四个节点可以得到死亡与不死两种信息。一头猪活到最后能提供的信息为 5 种，log2(5) ≈ 2.32 bit。

从信息的角度计算，一头猪能提供的信息为 2.32 bit，需要 4.64 bit 信息才能确定毒水位置，那么最少需要 4.64/2.32 = 2 头猪。

算法设计：

- 把水瓶分为 5 行 5 列矩阵。
- 在 0，15，30，45 这四个时间节点，分别让 A 猪喝 1，2，3，4 行的抽样，B 猪喝 1，2，3，4 列的抽样。
- 如果猪死亡，那么代表行或列为毒水。如果猪没有死亡，则代表最后一瓶为毒水。
- 假设 A 猪在 15 内死亡，那么毒水一定在第一行。B 猪没有死亡，那么毒水一定在后 4 列。

算法原理分析显示，因为 A B 的交集只有一瓶，如果同期死就当下表明毒水是哪瓶。就算先死其一，那么余下的目标所在行或列是确定的，也就是说从 4 瓶中确认，还有三个时间确认窗口是足够的。整个算法的原理都围绕在两个元素集合的交集，让每头猪，每次喝的水之间交集变小,每头猪会从所有的水中获取一次信息。


随着各大云计算厂商纷纷推出了各自的 Serverless 产品使得这一概念流行起来，代表性的有 AWS lambda、Azure Function、Google Cloud Functions、阿里云函数计算等。

用一句话简单解析一下什么是云函数，当服务器处不在时，就无需服务器了！Serverless 无服务器真正的函数义并不是没有服务器，而是在云平台下，服务器成为基建设施，开发者完全不用关心它的存在。

服务器云端化将无状态的函数程序迁移到云端的服务中，统一管理，最大的好处就是直接砍掉私有服务器的运维成本和直接提高了开发效能 Time to Market。相比传统的服务器部署，通常要为了对付应用的性能峰值而配置高标准的硬件，但是平时的应用状态是处于低效能运行的，这就是硬件浪费，而云函数这种模式下，No Pay for Idle，可以实现按使用率收费，直接降低企业的成本。从会计学的角度，Serverless 让计算资源从固定成本变成了可变成本。

云函数可以为企业和开发者提供无服务器执行环境，无需购买和管理服务器的情况下运行代码直接使用平台支持的语言编写核心代码并设置代码运行的条件，即可在云基础设施上弹性、安全地运行代码，是实时文件处理和数据处理等场景下理想的计算平台。

Serverless 架构相关的概念还有：

- 函数即服务 FaaS - Functions as a Service
- 后端即服务 BasS - Backend as a Sevice

总的来说就是开发者直接享用服务，而不需要理会硬件设施。

与之相呼应的大概念是以下三个：

- IaaS - Infrastructure-as-a-service 基础设施服务
- PaaS - Platform-as-a-service 平台服务
- SaaS - Software-as-a-service 软件服务

它们在不同规模上定义资源与服务的关系，它们都是以服务为目标导向的架构 SOA - Service-Orient Architecture，为用户简化各种与主要业务不相关的问题。

IBM 的软件架构师 Albert Barron 曾经使用 Pizza as a Service 作为比喻解释这个问题。David Ng 进一步引申，SaaS PaaS and IaaS Explained in One Graphic 变得更准确易懂。

请设想你是一个餐饮业者，打算做披萨生意。一个原始的方案是可以从头到尾全程参与，自己做面饼、馅料、烘焙、包装等等，甚至厨房和设备都需要自己购置。

现在有了一个新的 IaaS 方案，有公司可以出租设备和厨房等生产工具，这样你就专业制作主营的披萨就好了。

随着生意越来越好，完全做不上来卖，这时候就需要 PaaS 方案了，除了前面的基础设施外，平台服务还提供的披萨的面饼原料和包装服务，你只需保证披萨味道好吃，这样就可以更大程度提升生产效率。

然后出名了，你发现只要有货就不愁卖的，这里赶紧上 SaaS 方案，所有披萨生产服务打包给服务平台，你手上的工作就是设计好披萨口味和包装，服务商直接送货到店。

所以，本质上所有这一切面向服务的概念都是在解决**软件复用技术**，提升效能这一大问题。



SCF 在事件触发时执行，根据配置，如内存大小等进行资源分配，并启动和管理容器，即函数的执行环境。涉及到函数运行容器的创建、管理和删除清理操作。这意味着容器启动需要一些时间，这会使每次调用函数时增加一些延迟。但通常仅在首次调用函数、更新函数或长时间未调用时重新调用函数时才会察觉到延迟。平台会尝试重用容器，在调用函数后容器会存留一段时间，预期用于下次调用，在此时间段内的调用会直接重用该容器。

随着云服务的的发展与普及，计算资源高度抽象化，现代云平台可以从物理服务器到云函数和横跨各种抽象程度为用户提供所需要的计算资源。

以腾讯云为例，计算资源的管理按以下几种不同粒度提供服务：

- **黑石物理服务器** CPM - Cloud Physical Machine：以物理机为扩展单位，用户完全拥有整台实体计算资源，安全性最好。
- **云服务器** CVM - Cloud Virtual Machine：以云服务器为扩展单位，虚拟化硬件设备。用户和其他租户共享物理机资源，仍可自行配置 CVM 的各项指标，如 CPU、内存、硬盘、网络、安全等等。并可以在需求发生变化时轻松地调整，相对部署和迭代更加简单。
- **容器化** TKE - Tencent Kubernetes Engine：基于 K8s 以内容编排容器服务为扩展单位，虚拟化操作系统。使用 Docker 镜像部署微服务，实现测试和生产环境完全一致，测试和部署非常轻松。
- **云函数** SCF - Serverless Cloud Function ：以函数为扩展单位，虚拟化运行时环境（Runtime）。是现有计算资源的最小单位，具有完全自动、一键部署、高度可扩展等特点，是轻量级服务部署非常好的选择。


Serverless Framework 特性：

- 支持 Node.js, Python, Java, Go,和 PHP 等语言
- 全生命周期的 Serverless 应用管理（构建，部署，更新，删除）
- 通过云厂商提供的能力，安全、快速的部署函数、事件和相关资源
- 通过服务的维度对函数分组，更好的管理代码、函数和部署流程，支持大型项目开发和跨团队的协作。
- 极简配置，提供完整的脚手架
- 内置多个阶段的支持，方便环境隔离
- 针对 CI/CD 工作流进行了优化
- 自动化、部署速度优化、并提供最佳实践
- 100% 可扩展：支持通过插件扩展或者修改 Serverless Framework
- 良好的 Serverless 插件，服务和组件的生态

安装或者更新 CLI 工具，并创建模板试用：

    npm install -g serverless
    npm update -g serverless
    serverless create --template tencent-nodejs --path severless-service
    cd severless-service
    npm install

框架使用了云函数开发者工具，还有 FSEvents 模块，它用来访问 MacOS 平台底层 API 注册目录树状态改变通知事件处理程序。如果在 Windows 平台，可以使用 -f 进行强制安装。

修改 serverless.yml 配置函数、事件或者其他资源，或者你只是希望把服务的更改都更新到云端时，可以使用以下命令进行部署。或者快速部署并且覆盖云端的 SCF 云函数，并且部署单个函数的速度更快。

    serverless deploy -v
    serverless deploy function -f hello_world

上传前需要登录平台，当前支持微信扫码登录授权。可以配置持久的环境变量/密钥信息，参考腾讯云账号配置文档。

调用腾讯云云函数 SCF，可以在另一窗口打开实时日志监测：

    serverless invoke -f hello_world -l
    serverless logs -f hello_world -t

最后从云端账号中移除所有的函数、事件以及资源。

    serverless remove

可以从 Github 上下载安装已有服务模板：

    serverless install -u https://github.com/your-url-to-the-serverless-service

目前，腾讯云函数提供多种 SDK，以 Node.js SDK 使用为例：

    npm install tencentcloud-sdk-nodejs --save

使用 Node.js SDK 前需要先前往 API 密钥管理中心获取安全凭证，在腾讯云控制台上申请安全凭证包括 `SecretId` 和 `SecretKey`，分别用于标识 API 调用者的身份，和加密签名字符串、服务器端验证签名字符串，SecretKey 必须严格保管，避免泄露。

```js
// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs")

 const clientConfig = {
  credential: {
    secretId:  "*******************",
    secretKey: "*******************",
  },
  region: "ap-guangzhou",
  profile: { // optional
    // signMethod: "HmacSHA256",
    // httpProfile: {
    //   endpoint: "scf.tencentcloudapi.com",
    //   reqMethod: "POST",
    //   reqTimeout: 60,
    // },
  },
}

// CVM client models。
const CvmClient = tencentcloud.cvm.v20170312.Client
const cvmClient = new CvmClient(clientConfig)
cvmClient.DescribeZones({/*params*/}).then(
  (data) => {
    console.log("DescribeZones", data)
  },
  (err) => {
    console.error("error", err)
  }
)

// SCF client models。
const ScfClient = tencentcloud.scf.v20180416.Client;
const models = tencentcloud.scf.v20180416.Models;

const scfClient = new ScfClient(clientConfig);
const params = {};
scfClient.ListFunctions(params).then(
  (data) => {
    console.log("ListFunctions", data, models);
  },
  (err) => {
    console.error("error", err);
  }
);
```



# ⚑ Travis CI 持续集成
- Travis CI 教程 http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html
- 持续集成是什么？ http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html
- Travis CI Tutorial https://docs.travis-ci.com/user/tutorial/
- SSH deploys with Travis CI https://oncletom.io/2016/travis-ssh-deploy/
- Guide to Continuous Delivery and DevOps https://www.mindtheproduct.com/what-the-hell-are-ci-cd-and-devops-a-cheatsheet-for-the-rest-of-us/
- Installing Dependencies https://docs.travis-ci.com/user/installing-dependencies/
- Job Lifecycle https://docs.travis-ci.com/user/job-lifecycle/
- Deployment https://docs.travis-ci.com/user/deployment/
- Travis CI APIs https://docs.travis-ci.com/user/developer/
- Encryption keys https://docs.travis-ci.com/user/encryption-keys/

特拉维斯 Travis CI 是一个免费的，友好集成 Github 服务的持续集成工具。

编写代码只是软件开发的其中一道工序，更多的时间往往花在构建（build）和测试（test），Travis CI 就是自动化构建工具之中，市场份额最大的一个。

Travis CI 只支持 Github，不支持其他代码托管服务，必须将项目托管到 GitHub 才能使用 Travis CI。

使用 Github 账户登入 Travis CI 就会列出所有仓库，以及你所属于的组织。只要选择你需要 Travis 自动构建的仓库，打开仓库旁边的开关。一旦激活了一个仓库，Travis 会监听这个仓库的所有变化。

Travis 要求项目的根目录下面，必须有一个 `.travis.yml` 配置文件，一旦代码仓库有新的 Commit，Travis 就会去找这个文件，执行里面的命令。

按照 Travis Getting started 教程同步 GitHub 仓库库，可能需要在配置文件页中手动初始化某些设置。

添加一个 `.travis.yml` 配置文件到 Git 仓库：

```yaml
language: node_js
node_js:
  - 8
cache:
  directories:
    - node_modules
script:
  - npm run build
  - npm test
env:
  - DB=postgres
  - SH=bash
  - PACKAGE_VERSION="1.0.*"
```

主要配置条目：

- `language` 字段指定了默认运行环境，这里设定使用 Node.js 环境，后面指定了版本号为 8。
- `script` 字段指定要运行的脚本文件，这里指定了 shell 脚本命令。
- `env` 字段可以定义环境变量。

在执行 git push 提交代码时，就会触发 Travis CI 的构建动作，根据需要定制构建脚本，执行自动化部署。

Travis 的运行流程分为许多阶段，每个阶段都可以定制要执行的脚本，任何项目都会经过以下两个阶段：

- install 阶段：安装依赖。
- script 阶段：运行脚本。

安装阶段指定安装脚本文件或者命令，注意，如果其中一个执行失败，整个构建就会停下来，不再往下进行。如果不需要安装，即跳过安装阶段，就直接设为 true。

指定构建或测试脚本，如果其中一个失败，不影响其它脚本命令继续执行，但是，整个构建阶段的状态是失败。

如果需要成功后才能继续执行，就使用逻辑符号拼接，写成下面这样：

	script: command1 && command2

Travis 默认提供的运行环境，目前一共支持几十种主流语言，以后还会不断增加。

脚本执行阶段结束以后，还可以设置通知 notification 和部署 deployment 步骤，它们不是必须的。

部署的脚本可以在 script 阶段执行，也可以使用 Travis 为几十种常见服务提供的快捷部署功能。比如，要部署到 Github Pages：

```yaml
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN # Set in travis-ci.org dashboard
  on:
    branch: master
```

需要保密的信息明文存在 Travis 的网站怕不安全，可以使用 Travis 提供的加密功能。

首先，安装 Ruby 的包 travis，然后使用 travis encrypt 命令加密信息。

	$ gem install travis
	$ travis encrypt SOMEVAR=secretvalue
	$ travis encrypt SOMEVAR=secretvalue --add

上面命令中，SOMEVAR 是要加密的变量名，secretvalue 是要加密的变量值，屏幕上会输出如下信息：

	secure: ".... encrypted data ...."

现在，把这一行加入 `.travis.yml` 环境配置中：

	env:
	  global:
	    - secure: ".... encrypted data ...."

然后，脚本里面就可以使用环境变量 $SOMEVAR 了，Travis 会在运行时自动对它解密。

可以使用 `--add` 参数，会自动写入结果到 `.travis.yml`，省掉了修改 env 字段的步骤。

Travis 提供了加密文件功能，要加密的是文件，比如私钥，安装命令行客户端以后，使用下面的命令登入 Travis CI，进入项目的根目录进行文件加密：

	$ travis login 
	$ travis encrypt-file bacon.txt
	$ travis encrypt-file bacon.txt --add

对文件 bacon.txt 进行加密后生成 bacon.txt.enc，该文件需要提交到代码库。此外，还会生成一个文件解密时用到的环境变量 $encrypted_0a6446eb3ae3_key，保存密钥，储存在 Travis CI。你需要把解密所需的 OpenSSL 命令写在 `.travis.yml` 的 before_install 字段里面，命令行有提示。


完整的生命周期执行的步骤如下：

- before_install
- install
- before_script
- script
- after_failure
- after_success
- [OPTIONAL] before_deploy
- [OPTIONAL] deploy
- [OPTIONAL] after_deploy
- after_script

最后，Travis 每次运行，可能会返回四种状态。

- `passed`：运行成功，所有步骤的退出码都是 0
- `canceled`：用户取消执行
- `errored`：before_install、install、before_script 有非零退出码，运行会立即停止
- `failed` ：script 有非零状态码 ，会继续运行


以下三个是当下流行的软件工程概念。

- CI - Continuous Integration 持续集成
- CD - Continuous Delivery 持续交付
- CD - Continuous Deployment 持续部署

一个典型的案例主是使用 Next.js 框架开发 React 应用，使用 Github 托管代码和 vercel.app 自动化部署服务。只需要将 Github 工程仓库授权与 Vercel，在每次提交代码时，都会触发线上的构建、测试、部署等自动化过程。

与 DevOPs 方法论一样，DevOps 就是 Developers 结合 Operators，即开发团队和运维团队一体化，目的就是提高项目开发的效率。

一个软件从零开始到最终交付，大概包括以下几个阶段：规划、编码、构建、测试、发布、部署和维护，DevOps 核心就是让整个项目相关的团队成员能同时参与进来。目的是促进开发、技术运营和质量保障 QA 部门之间的沟通、协作与整合，在问题出现的最开始就应该被重视起来，与之相关的概念就是敏捷开发 Agile Development，而这一切又与虚拟化、容器、微服务密切关联。

要实现这么高度自动的流水线软件生产，就必定离不开各种工具。

- 协作开发 
	- 构建：版本控制、代码合并、构建状态
- 持续集成 
	- 测试：自动化测试及测试报告
	- 打包：二进制仓库、Docker 镜像仓库
- 部署工具 
	- 容器：容器是轻量级的虚拟化组件，它以隔离的方式运行应用负载。它们基于操作系统所虚拟化技术运行自己的进程、文件系统和网络栈。
	- 发布：变更管理、自动发布
	- 编排：当考虑微服务、面向服务的架构、融合式基础设施、虚拟化和资源准备时，计算系统之间的协作和集成就称为编排。通过利用已定义的自动化工作流，编排保证了业务需求是和你的基础设施资源相匹配的
	- 配置管理：基础设施配置和管理，维护硬件和软件最新的、细节的记录-包括版本、需求、网络地址、设计和运维信息
	- 监视：性能监视、用户行为反馈
- 警告&分析，维护工具等



持续一词用于描述工程流程实践，并不意味着“一直在运行”，而是“随时可运行”。

在软件开发领域，包括以下几个核心概念/最佳实践：

- `频繁发布`：持续实践背后的目标是能够频繁地交付高质量的软件。
- `自动化流程`：实现此频率的关键是用自动化流程来生产软件产品，这包括构建、测试、分析、版本控制，以及在某些情况下的部署。
- `可重复`：自动化流程在给定相同输入的情况下始终具有相同的行为，这个过程应该是可重复的。
- `快速迭代`：快速在这里是个相对术语，但无论软件更新、发布的频率如何，预期的持续过程都会以高效的方式将源代码转换为交付物。

持续集成的流程：

- 开发人员提交代码到 Source Repository； 
- 并通过 git hook 等触发 CI Server 持续集成服务器的相关功能，典型的是执行编译 -> 测试 -> 输出结果；
- 向开发人员反馈结果的 report；

`持续集成`的核心在于通过自动化测试确保新增的代码能够与原先代码正确的集成，与后续的持续交付、持续部署相联接，其最主要的差别也就在于其目标不同。

持续集成的流程并不是固定不变的，Build -> Test 或者 Test -> Build 对持续性核心概念并不冲突。持续集成本身作为一种软件工程的方法或者策略，其并不规定具体的实现。在实际的应用中，还是需要结合具体的开发语言或者工具来定。

持续集成的优势：

- 易于定位错误：持续集成频繁的测试操作无异将复杂的代码逻辑切割为了小块，使得每一次测试中遇到的错误能够更加容易的被定位；
- 易于控制开发流程：更为细致的工作提交也就意味着更容易判断当前的工作进度，这可以为管理者、开发人员省下了汇报交接工作的时间；
- 易于 CodeReview：对于大块工作的切分自然也有助于做 CodeReview；
- 易于减少不必要的工作：自动化测试和构建大大节约时间。

`持续交付`指的是：一种能够使得软件在较短的循环中可靠的发布的软件工程方法。与持续集成相比，持续交付的侧重点在于 交付，其核心对象不在于代码，而在于可交付的产物。由于持续集成仅仅针对于新旧代码的集成过程执行了一定的测试，其变动到持续交付后还需要一些额外的流程。

与持续集成相比较，持续交付的流程是 Test -> Staging -> Production 也就是为新增的代码添加了一个保证，确保新增的代码在生产环境中是可用的。

`持续部署`意味着：通过自动化部署的手段将软件功能频繁的进行交付。与持续交付以及持续集成相比，持续部署强调了通过自动化部署的手段，对新的软件功能进行集成。

可以看到，同 持续交付 相比 持续集成 的区别体现在对 Production 的自动化。从开发人员提交代码到编译、测试、部署的全流程不需要人工的干预，完全通过自动化的方式执行。这一策略加快了代码提交到功能上线的速度，保证新的功能能够第一时间部署到生产环境并被使用。



# ⚑ Jest Test 测试
- https://jestjs.io/zh-Hans/
- http://www.ruanyifeng.com/blog/2016/02/react-testing-tutorial.html
- https://jestjs.io/blog/2016/03/11/javascript-unit-testing-performance.html
- https://reactjs.org/docs/test-utils.html
- https://create-react-app.dev/docs/running-tests

Jest 测试 JavaScript (入门篇)

1 什么是 Jest?

	Jest 是 Facebook 的一套开源的 JavaScript 测试框架， 它自动集成了断言、JSDom、覆盖率报告等开发者所需要的所有测试工具，是一款几乎零配置的测试框架。并且它对同样是 Facebook 的开源前端框架 React 的测试十分友好。

2 安装 Jest

初始化 package.json，并安装 Jest 及相关依赖

	npm init -y

	npm install -D jest babel-jest babel-core babel-preset-env regenerator-runtime

使用 Babel 可以实现 ES6 的语法特性进行单元测试，提供的 import 来导入模块的方式。

添加 Babel 配置文件，在项目的根目录下添加 .babelrc 文件，写入如下内容:

	{
	  "presets": ["env"]
	}
	
在 package.json 中添加的 test 脚本设置，方便通过 npm test 执行：

	"scripts": {
	  "test": "jest"
	}

使用 TypeScript

	yarn add --dev typescript
	tsc --init

	yarn add --dev @babel/preset-typescript @types/jest

	npm install babel-preset-react-app @babel/core @babel/plugin-proposal-decorators

配置 Bebel，错误配置可能导致 Jest 无法测试类对象的继承关系：

	// babel.config.js
	module.exports = {
	  presets: [
	    ['@babel/preset-env', {targets: {node: 'current'}}],
	     '@babel/preset-typescript',
	  ],
	};

将 jest 的运行范围限定在 test 文件夹下，而不是全部，所以在 package.json 中加入如下配置：

	 "jest": {
	    "testRegex": "/test/.*.test.jsx?$"
	 }


3 编写你的第一个Jest测试

创建 src 和 test 目录及相关文件

- 在项目根目录下创建 src 目录，并在目录下添加 functions.js 文件
- 在项目根目录下创建 test 目录，并在目录下创建 functions.test.js 文件

按这种文件命名规则，Jest 会自动找到项目中所有使用 .spec.js 或 .test.js 文件命名的测试文件并执行。

	// src/functions.js
	export default {
	  sum(a, b) {
	    return a + b;
	  }
	}
	

	// test/functions.test.js
	import functions  from '../src/functions';

	test('sum(2 + 2) 等于 4', () => {
	  expect(functions.sum(2, 2)).toBe(4);
	})

	// or
	describe('sum', () => {
	  it('works', () => {
	    expect(sum(5, 4)).toEqual(9);
	  });
	});


运行 npm run test 在 shell 中会打印出以下测试报告：

	 PASS  test/functions.test.js
	  √ sum(2 + 2) 等于 4 (7ms)

	Test Suites: 1 passed, 1 total
	Tests:       1 passed, 1 total
	Snapshots:   0 total
	Time:        4.8s

4 常用的几个 Jest 断言

前面使用了一条测试断言 `expect(sth.).toBe(sth.)`，Jest 提供了 expect 函数用来包装被测试的方法并返回一个对象，内含一系列的条件匹配器，`toBe()` 函数即为一个匹配器，它的含义是期待相等。

👉 `.not` 允许你测试结果不等于某个值的情况，这和英语的语法几乎完全一样，很好理解。

	//functions.test.js
	import functions  from '../src/functions'

	test('sum(2, 2) not equal to 5', () => {
	  expect(functions.sum(2, 2)).not.toBe(5);
	})

👉 `.toEqual()` 匹配器会递归的检查对象所有属性和属性值是否相等，所以如果要进行应用类型的比较时，请使用.toEqual匹配器而不是.toBe。

	// functions.js
	export default {
	  getAuthor() {
	    return {
	      name: 'LITANGHUI',
	      age: 24,
	    }
	  }
	}

	// functions.test.js
	import functions  from '../src/functions';

	test('getAuthor() deeply equal to', () => {
	  expect(functions.getAuthor()).toEqual(functions.getAuthor());
	})

	test('getAuthor() deeply not equal to', () => {
	  expect(functions.getAuthor()).not.toBe(functions.getAuthor());
	})

👉 `.toHaveLength()` 可以很方便的用来测试字符串和数组类型的长度是否满足预期。


	// functions.js
	export default {
	  getIntArray(num) {
	    if (!Number.isInteger(num)) {
	      throw Error('"getIntArray"只接受整数类型的参数');
	    }

	    let result = [];
	    for (let i = 0, len = num; i < len; i++) {
	      result.push(i);
	    }
	    
	    return result;
	  }
	}
	// functions.test.js
	import functions  from '../src/functions';

	test('getIntArray(3)返回的数组长度应该为3', () => {
	  expect(functions.getIntArray(3)).toHaveLength(3);
	})

👉 `.toThorw()` 可能够让我们测试被测试方法是否按照预期抛出异常，但是在使用时需要注意的是：我们必须使用一个函数将将被测试的函数做一个包装，正如上面getIntArrayWrapFn所做的那样，否则会因为函数抛出导致该断言失败。

	// functions.test.js
	import functions  from '../src/functions';

	test('getIntArray(3.3)应该抛出错误', () => {
	  function getIntArrayWrapFn() {
	    functions.getIntArray(3.3);
	  }
	  expect(getIntArrayWrapFn).toThrow('"getIntArray"只接受整数类型的参数');
	})

👉 `.toMatch()` 传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配。


	// functions.test.js
	import functions  from '../src/functions';

	test('getAuthor().name应该包含"li"这个姓氏', () => {
	  expect(functions.getAuthor().name).toMatch(/li/i);
	})

5 测试异步函数

	这里使用最常用的 axios 来进行 HTTP 请求

	npm install axios

	使用由 JSONPlaceholder 提供的 mock 请求地址

	// functions.js
	import axios from 'axios';

	export default {
	  fetchUser() {
	    return axios.get('http://jsonplaceholder.typicode.com/users/1')
	      .then(res => res.data)
	      .catch(error => console.log(error));
	  }
	}


	// functions.test.js
	import functions  from '../src/functions';

	test('fetchUser()', () => {
	  expect.assertions(1);
	  return functions.fetchUser()
	    .then(data => {
	      expect(data.name).toBe('Leanne Graham');
	    });
	})

expect.assertions(1)，它能确保在异步的测试用例中，有一个断言会在回调函数中被执行，这在进行异步代码的测试中十分有效。

使用 async 和 await 精简异步代码

	test('fetchUser()', async () => {
	  expect.assertions(1);
	  const data =  await functions.fetchUser();
	  expect(data.name).toBe('Leanne Graham')
	})

安装了 Babel，使用 async 和 await 的语法来精简异步测试代码，但是别忘记都需要调用 expect.assertions() 方法

和之前介绍的 mocha 和 chai 的功能很像，甚至可以兼容部分 mocha 和 chai 的语法。可以这么写

	import React from 'react'
	import { shallow } from 'enzyme'
	import CommentItem from './commentItem'

	describe('测试评论列表项组件', () => {
	  // 这是mocha的玩法，jest可以直接兼容
	  it('测试评论内容小于等于200时不出现展开收起按钮', () => {
	    const propsData = {
	      name: 'hj',
	      content: '测试标题'
	    }
	    const item = shallow(<CommentItem {...propsData} />)
	    // 这里的断言实际上和chai的expect是很像的
	    expect(item.find('.btn-expand').length).toBe(0);
	  })
	  // 这是jest的玩法，推荐用这种
	  test('两数相加结果为两个数字的和', () => {
	    expect(3).toBe(3);
	  });
	}
	
	jest 与 eslint 检测
	如果看了上面的代码会发现我没有引用任何类似于

	import *  from 'jest'
	
	的代码，而那个 expect 是没有定义的。
	这段代码直接运行 jest 命令没有任何问题，但是 eslint 会检测出错，对于这种情况，可以在 eslint 配置文件 .eslintrc 中加入以下代码：

	"env": {
	    "jest": true
	},
	
Jest 断言：

	expect({a:1}).toBe({a:1})					// 判断两个对象是否相等
	expect(1).not.toBe(2);						// 判断不等
	expect(n).toBeNull(); 						// 判断是否为null
	expect(n).toBeUndefined(); 					// 判断是否为undefined
	expect(n).toBeDefined(); 					// 判断结果与toBeUndefined相反
	expect(n).toBeTruthy(); 					// 判断结果为true
	expect(n).toBeFalsy(); 						// 判断结果为false
	expect(value).toBeGreaterThan(3); 			// 大于3
	expect(value).toBeGreaterThanOrEqual(3.5); 	// 大于等于3.5
	expect(value).toBeLessThan(5); 				// 小于5
	expect(value).toBeLessThanOrEqual(4.5); 	// 小于等于4.5
	expect(value).toBeCloseTo(0.3); 			// 浮点数判断相等
	expect('Christoph').toMatch(/stop/); 		// 正则表达式判断
	expect(['one','two']).toContain('one'); 	// 不解释

	function compileAndroidCode() {
	  throw new ConfigError('you are using the wrong JDK');
	}

	test('compiling android goes as expected', () => {
	  expect(compileAndroidCode).toThrow();
	  expect(compileAndroidCode).toThrow(ConfigError); //判断抛出异常
	}）

更多断言玩法

	介绍了jest替代mocha和chai的部分，那么接下来就看看如何替代sinon。
	下面是官网的示例：

	function forEach(items, callback) {
	  for (let index = 0; index < items.length; index++) {
	   callback(items[index]);
	  }
	}

	const mockCallback = jest.fn();
	forEach([0, 1], mockCallback);

	// 判断是否被执行两次
	expect(mockCallback.mock.calls.length).toBe(2);

	// 判断函数被首次执行的第一个形参为0
	expect(mockCallback.mock.calls[0][0]).toBe(0);

	// 判断函数第二次被执行的第一个形参为1
	expect(mockCallback.mock.calls[1][0]).toBe(1);

从上面可以看到这种玩法很类似于sinon的 sinon.spy()。当然也有类似于stub返回值的那种玩法，更多的请参考 jest mock的更多玩法

mock 文件和 css module 的问题

	如果js文件中引用了css或者本地其他文件，那么就可能测试失败。为了解决这个问题，同时也为了提高测试效率：

	"jest": {
	    "moduleNameMapper": {
	     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/config/fileMock.js",
	     "\\.(css|less)$": "identity-obj-proxy"
	 }
	
	而fileMock.js文件内容为：

	module.exports = 'test-file-stub';
	
	然后安装identity-obj-proxy即可：

	npm install --save-dev identity-obj-proxy
	
在webpack中经常会用到别名，而jest测试时，如果文件中引用了别名会出现找不到文件的问题。毕竟jest测试时没有经过webpack处理。对于以下玩法

	resolve: {  
	    alias: {  
	        common: path.resolve(__dirname, 'plugins/common/')  
	    }  
	} 
	
	可以通过

	"jest": {
	    "testRegex": "./src/test/.*.test.js$",
	    "moduleNameMapper": {
	      "^common(.*)$": "<rootDir>/plugins/common$1",
	    }
	}
	
	这个和之前 mock文件和css module的问题 一样，都是使用了moduleNameMapper这个属性

	生成测试覆盖率报告
	只需要在jest命令后加入 --coverage即可

	jest --coverage
