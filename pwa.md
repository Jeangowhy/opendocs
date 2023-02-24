


# Progressive Web Application
webpack.js.org-master\src\content\guides\progressive-web-application.md

---
title: Progressive Web Application
sort: 21
contributors:
  - johnnyreilly
  - chenxsan
  - EugeneHlushko
  - benschac
  - aholzner
---

T> This guide extends on code examples found in the [Output Management](/guides/output-management) guide.

Progressive Web Applications (or PWAs) are web apps that deliver an experience similar to native applications. There are many things that can contribute to that. Of these, the most significant is the ability for an app to be able to function when __offline__. This is achieved through the use of a web technology called [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers/).

This section will focus on adding an offline experience to our app. We'll achieve this using a Google project called [Workbox](https://github.com/GoogleChrome/workbox) which provides tools that help make offline support for web apps easier to setup.


## We Don't Work Offline Now

So far, we've been viewing the output by going directly to the local file system. Typically though, a real user accesses a web app over a network; their browser talking to a __server__ which will serve up the required assets (e.g. `.html`, `.js`, and `.css` files).

So let's test what the current experience is like using a simple server. Let's use the [http-server](https://www.npmjs.com/package/http-server) package: `npm install http-server --save-dev`. We'll also amend the `scripts` section of our `package.json` to add in a `start` script:

__package.json__

``` diff
{
  ...
  "scripts": {
-    "build": "webpack"
+    "build": "webpack",
+    "start": "http-server dist"
  },
  ...
}
```

Note: [webpack DevServer](/configuration/dev-server/) writes in-memory by default. We'll need to enable [writeToDisk](/configuration/dev-server/#devserverwritetodisk-) option in order for http-server to be able to serve files from `./dist` directory.

If you haven't previously done so, run the command `npm run build` to build your project. Then run the command `npm start`. This should produce the following output:

``` bash
> http-server dist

Starting up http-server, serving dist
Available on:
  http://xx.x.x.x:8080
  http://127.0.0.1:8080
  http://xxx.xxx.x.x:8080
Hit CTRL-C to stop the server
```

If you open your browser to `http://localhost:8080` (i.e. `http://127.0.0.1`) you should see your webpack application being served from the `dist` directory. If you stop the server and refresh, the webpack application is no longer available.

This is what we aim to change. Once we reach the end of this module we should be able to stop the server, hit refresh and still see our application.


## Adding Workbox

Let's add the Workbox webpack plugin and adjust the `webpack.config.js` file:

``` bash
npm install workbox-webpack-plugin --save-dev
```

__webpack.config.js__

``` diff
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
+ const WorkboxPlugin = require('workbox-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js',
    },
    plugins: [
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
-       title: 'Output Management',
+       title: 'Progressive Web Application',
      }),
+     new WorkboxPlugin.GenerateSW({
+       // these options encourage the ServiceWorkers to get in there fast
+       // and not allow any straggling "old" SWs to hang around
+       clientsClaim: true,
+       skipWaiting: true,
+     }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
```

With that in place, let's see what happens when we do an `npm run build`:

``` bash
...
                  Asset       Size  Chunks                    Chunk Names
          app.bundle.js     545 kB    0, 1  [emitted]  [big]  app
        print.bundle.js    2.74 kB       1  [emitted]         print
             index.html  254 bytes          [emitted]
precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js  268 bytes          [emitted]
      service-worker.js       1 kB          [emitted]
...
```

As you can see, we now have 2 extra files being generated; `service-worker.js` and the more verbose `precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js`. `service-worker.js` is the Service Worker file and `precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js` is a file that `service-worker.js` requires so it can run. Your own generated files will likely be different; but you should have an `service-worker.js` file there.

So we're now at the happy point of having produced a Service Worker. What's next?


## Registering Our Service Worker

Let's allow our Service Worker to come out and play by registering it. We'll do that by adding the registration code below:

__index.js__

``` diff
  import _ from 'lodash';
  import printMe from './print.js';

+ if ('serviceWorker' in navigator) {
+   window.addEventListener('load', () => {
+     navigator.serviceWorker.register('/service-worker.js').then(registration => {
+       console.log('SW registered: ', registration);
+     }).catch(registrationError => {
+       console.log('SW registration failed: ', registrationError);
+     });
+   });
+ }
```

Once more `npm run build` to build a version of the app including the registration code. Then serve it with `npm start`. Navigate to `http://localhost:8080` and take a look at the console. Somewhere in there you should see:

``` bash
SW registered
```

Now to test it. Stop your server and refresh your page. If your browser supports Service Workers then you should still be looking at your application. However, it has been served up by your Service Worker and __not__ by the server.


## Conclusion

You have built an offline app using the Workbox project. You've started the journey of turning your web app into a PWA. You may now want to think about taking things further. A good resource to help you with that can be found [here](https://developers.google.com/web/progressive-web-apps/).




# Vue + PWA = Lavas
https://lavas.baidu.com/guide
https://lavas.baidu.com/pwa
https://github.com/lavas-project
https://github.com/lavas-project/pwa-doc
https://github.com/lavas-project/lavas-tutorial

Lavas 是一套基于 Vue 的 PWA 解决方案，能够帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题，对提升用户体验，用户留存率等有明显提升，且开发者无须过多的关注 PWA 开发本身。

如果您对 PWA 的概念还不熟悉，可以参考 Lavas 官网中关于 PWA 的介绍。简而言之，PWA 的目标是让移动端的 H5 站点拥有可以媲美本地 APP 的体验，包括离线可访问，添加桌面图标以快速启动等等特性。加之移动站点无须频繁安装升级的优势，进而挑战现有 APP 的用户习惯，建立 WEB 新生态。

学习本教程前您应该掌握

- HTML, CSS(less或stylus), JavaScript 等前端编程基础
- ES6/7 部分常用语法，如 Promise, import/export 等
- Vue, Vuex, Vue-router 等基本的开发知识 (教程、API 文档 和 编程风格指南)
- Webpack, Node.js 等基本知识 （推荐）

Lavas 后续的开发计划也已经将支持其他主流前端框架 (如 react) 纳入其中，如果您持续关注我们(Github)，给我们多提意见甚至代码，我们将会非常感谢！

Lavas 解决方案能够帮助开发者完成：

- 最基本的移动站点建设，包括 Vue, Vuex, Vue-router, webpack 等常用且成套的技术提供支持
- 允许站点添加至手机桌面，再次打开时全屏运行，摆脱浏览器的固定显示框架(地址栏，菜单栏等)
- 强化缓存，允许站点在弱网甚至离线的情况下继续显示内容
- 支持消息推送，帮助站长主动推送用户感兴趣的信息，提升业务指标
- 支持服务端渲染(SSR)，对搜索引擎更加友好
- 支持App Shell 模型，在正常情况下提升加载性能，在异常情况下优化错误显示。

总结起来，Lavas 除了能帮助开发者完成 Vue 能做的(搭建基本站点)之外，通过一些配置还能够快速赋予站点 PWA 的特性，且不需要开发者过多的关心 PWA 的详细开发技术和细节。

我们可以粗略的理解为： Lavas = Vue + PWA

## Lavas 2.0 新增功能
Lavas 2.0 提供了更加强大和便捷的功能，让我们来了解一下：

服务端渲染 (SSR) 和浏览器端渲染 (SPA) 可以快速切换

Lavas 2.0 支持通过配置项快速修改和切换。开发者需要修改的(在开发状态下)仅仅是配置项中的一个 boolean 值而已。

提示：采用浏览器端渲染时，构建后所有页面都会由统一的入口 index.html 进行渲染。因此实质就是单页应用 (SPA)。因此在 Lavas 教程中，SPA = 单页应用 = 浏览器端渲染模式。

自动生成路由规则，避免重复代码

一般情况我们除了编写页面，还需要指明每个页面的访问路由规则。但实际上在大部分情况下页面的文件夹路径和路由规则是存在对应关系的。何不由系统自动生成路由，解决这大部分的工作呢？

Lavas 会根据每个页面在目录中的路径位置，生成对应的路由规则，具体可以参考 Lavas 自动路由生成方法。当然如果自动生成的路由规则无法满足开发者的需求，也可以通过配置进行重写，可以参考路由文档

针对 SSR 提供了更加合理的 AppShell 支持，享受更加顺滑和健壮的浏览体验

SSR 没有独立的 HTML 文件生成，因此也不能加入 Skeleton 实现骨架屏。对此情况，Lavas 升级了 SSR 模式下的 App Shell，配合 Service Worker 可以实现和骨架屏类似的效果。详细介绍可以参考 Skeleton 和 App Shell 模型

为了开发者快速上手，我们还提供了一些 Codelab 帮助开发者熟悉 Lavas 2.0 的各种特性，您可以选择适合自己的教程并按照步骤逐步学习。

如果您从未接触过 Lavas 2.0，我们推荐您先从开发第一个 Lavas 应用开始。


# Lavas Demo

Lavas 是一套基于 Vue 的 PWA 解决方案，可以帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题。如果您对 PWA 和 Lavas 还有任何疑问，可以在我们的官方站点上找到二者的教程和文档。

在前一版 Lavas 的基础上，我们倾听了来自开发者的反馈，并跟随业界最新的技术和规范，升级完成了 Lavas 2.0 版本。您可以安装或升级 Lavas 命令行工具，并跟随本教程完成一个简单却完整的示例站点，享受 PWA 带来的全新浏览体验。让我们快速开始吧！

Lavas 2.0 的改进点
- 服务端渲染 (SSR) 和客户端渲染 (SPA) 可以快速切换
- 自动生成路由规则，避免重复配置
- 针对 SSR 提供了更加合理的 AppShell 支持，配合 SPA 下的 Skeleton 保证用户享受更加顺滑和健壮的浏览体验

通过本教程您可以学到
- 如何使用更新后的 Lavas 命令行工具创建 Lavas 2.0 项目
- 如何开发 Lavas 2.0 项目

学习本教程前您应该掌握
- HTML, CSS(less或stylus), JavaScript 等前端编程基础
- ES6/7 部分常用语法，如 Promise, import/export 等
- Vue, Vuex, Vue-router 等基本的开发知识
- Webpack, Node.js 等基本知识 （推荐）

## 在开发前您需要准备

- 一台可以正常联网的计算机并已安装较新版本的 Node.js (≥ 5.0) 和 npm (≥ 3.0)
- 一个方便调试并支持 Service Worker 的浏览器，推荐使用 Google Chrome
- 一个自己习惯的文本编辑器，如 Sublime Text, Web Storm 等等

安装/升级 Lavas 命令行工具

  npm install lavas -g

在合适的目录新建项目并命名，例如本教程中的 "lavas-2-sample"

  lavas init

注意：lavas init 导出的项目默认采用的是 SPA 模式，如果想要使用服务端渲染的 SSR 模式，可以在 lavas.config.js 文件中把 ssr 改为 true

进入目录并安装依赖

  npm install

启动开发服务器，访问 localhost:3000 将看到初始页面。

  lavas dev

默认启动 express 作为开发服务器。如果您想使用 Koa 作为服务器进行开发和上线，可以参考 使用 Koa 作为服务器。

根目录下的 /pages 文件夹用于存放路由组件，Lavas 会自动根据文件结构创建路由规则，生成方法可以查看文档。

在初始模板中，pages 中如下的文件结构将生成三条路由规则：/appshell, / 和 /error。之前我们访问的主页对应着 Index.vue。另外，可以发现单页面组件的名称遵循了 Pascal 命名规范，这是 Vue 的编码规范推荐的形式之一。

  pages
  ├── Error.vue
  ├── Index.vue
  └── Appshell.vue

让我们查看一下 Index.vue，这是一个标准的 Vue 页面组件，熟悉 Vue 开发的同学一定对它的结构相当了解：

  <template>
  // 省略模板代码
  </template>
  <script>
  export default {
      name: 'index',
      metaInfo: {
          title: 'Home',
          titleTemplate: '%s - Lavas',
          meta: [
              {name: 'keywords', content: 'lavas PWA'},
              {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
          ]
      }
  };
  </script>
  <style lang="stylus" scoped>
  // 省略样式规则
  </style>

其中 Lavas 使用了 vue-meta 对 html 的信息进行定义。其中的 metaInfo 是一个可配置的 key，通过修改 /core/app.js 中的相关配置进行修改。而具体包含的配置项以及涵义也可以参见 vue-meta github 。

了解了 Lavas 对于路由组件的处理规则，下面我们将创建一个新的页面。

一个站点只有一个首页显然是不行的，让我们再创建一个页面。这是一个附带了动态参数的页面。动态参数的概念和 Lavas 的处理可以参考这篇文档。

## 创建页面

Lavas 对 /pages 文件夹进行了监听，发生变动会重新生成路由规则，所以在以下操作过程中请保持开发服务器处于运行状态，如果已经关闭，请重新开启。

首先我们需要在 /pages 下创建一个子目录 detail，并在其中创建一个 Vue 页面组件 id.vue， 文件结构如下：

  ├── Error.vue
  ├── Index.vue
  ├── Appshell.vue
  └── detail
      └── _id.vue

`_id.vue` 的内容如下：

  <template>
      <div class="detail-wrapper">
          <article class="detail-content">
              <header class="detail-title">
                  Detail {{$route.params.id}}
              </header>
              <!-- link to another detail -->
              <p>
              Progressive Web Apps are user experiences that have the reach of the web, and are:
  Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
  Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
              </p>
              <!-- link to index -->
          </article>
      </div>
  </template>

  <script>
  export default {
      name: 'detail-_id',
      metaInfo() {
          return {
              title: `Lavas Sample Detail ${this.$route.params.id}`,
              titleTemplate: '%s - Lavas',
              meta: [
                  {name: 'keywords', content: `Lavas Sample Detail`},
                  {name: 'description', content: `Lavas Sample Detail ${this.$route.params.id}`}
              ]
          }
      }
  };
  </script>

  <style lang="stylus" scoped>
  .detail-content
      font-size 16px
      line-height 30px
      margin-top 30px

      .detail-title
          margin-bottom 20px
          padding 10px 0
          font-size 36px
          font-weight bold

  </style>

让我们先忽略其中的两条 link 相关的注释。除了普通的页面内容之外，我们注意到在 `<template>` 和 `<script>` 中分别出现了 {{$route.params.id}} 和 this.$route.params.id，这便是 Lavas 2.0 解析了 URL 之后产出动态参数的获取方式。举例来说，当用户访问 /detail/1，则这两个变量的值都是 1。

创建链接
这里我们来尝试在两个页面之间添加一些链接。熟悉 Vue 的开发者应该对 `<router-link>` 标签并不陌生。

让我们在刚刚创建的 `detail/_id.vue` 的两处注释部分分别添加两个链接，代码如下：

  <!-- link to another detail -->
  <router-link :to="{
      name: 'detailId',
      params: {
          id: Number($route.params.id) + 1
      }
  }">Detail {{Number($route.params.id) + 1}}</router-link>

  <!-- link to index -->
  <router-link to="/">Back to home</router-link>

这里展示了两种 `<router-link>` 的使用方法，这在 router-link 官方文档 中有详细描述。

这里需要指明的是，因为和普通 Vue 项目不同，Lavas 项目的路由规则是自动生成的。因此当使用 to 的 name 属性时，需要将路径转化为 驼峰形式，这样才能和 Lavas 生成的路由规则一致。例如例子中的 detailId 是由文件路径和驼峰规则拼装而成 `detail + _id => detailId` 的。

经过两个简单的步骤，我们的第二个页面也完成了！保存文件，使用 npm run dev 启动项目之后，通过浏览器访问 localhost:3000/detail/1 即可看到这个新增的详情页面。


## 发送请求
在同构应用中，服务端需要发送 HTTP 请求，而客户端需要发送 XHR 异步请求，很多库帮助开发者抹平了这种差异，axios 就是其中之一。在本节中，我们将使用 axios 请求雅虎天气数据并展示在页面上。

首先安装 axios:

  npm install axios --save

接着在 `/pages/detail/_id.vue` 中，引入 axios：

  import axios from 'axios';

请求数据可以发生在路由导航完成之前或者之后，两种方式的特点可以参考 vue-router 数据获取一节。Lavas 默认采用了在路由导航完成之前请求数据，在顶部使用进度条给予用户视觉反馈。

为了支持服务端渲染 (SSR) ，每个页面组件都应当能够在服务端和浏览器端正常渲染。 Lavas 给开发者暴露了 async asyncData() 方法，开发者一般通过实现这个方法来完成一些渲染前的操作，例如发送请求、获取数据和简单计算等，并且这些操作是同时支持服务端和浏览器端的。在本节中，我们就在 asyncData 方法内实现发送请求获取数据。

注意： 在 Vue SSR 官方教程的数据预期和状态中提到，asyncData 方法是一个静态函数，因此无法访问 this。如果开发者需要在 Vue 页面或者 js 中使用数据，应当使用 vuex 的 store 进行传递，这将在本 Codelab 的后续章节提到。

修改后的 `detail/_id.vue` 内容大致如下(仅 script 部分)

  import axios from 'axios';

  export default {
      name: 'detail-_id',
      // 内容省略，和第四节相同
      async asyncData() {
          let result = await axios(`https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202151849&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
          let condition = result.data.query.results.channel.item.condition;

          console.log(`Weather of Shanghai: ${condition.text}, ${condition.temp}°F`);
      }
  };


## 代理 API 请求
在前后端分离的开发模式中，后端数据接口服务往往不在本机，而前端在开发的时候需要使用到这些数据，那么请求跨域了，有很多办法可以帮助解决这个跨域的问题，可以通过 nginx 代理，实现 CORS 等，这些方法不是需要后端配合就是代价相对较高。

在这里，Lavas 的方案中默认提供了一个代理 API 的能力，类似于 Vue Template ProxyTable，下面我们来看看如何使用 proxyTable 完成代理的工作。

Lavas 方案中，开发模式下 proxyTable 的实现全部在 server.dev.js 文件中。

添加 proxyTable 配置
找到 const proxyTable，增加 proxyTable 的配置，如下面的代码所示。

  const proxyTable = {
      '/api': {
          target: 'https://xxx.xxx',
          changeOrigin: true
      }
  };

重新启动开发服务器 lavas dev，启动完成之后，访问 http://localhost:3000/api/ 将会被代理到 target 服务器。

以上配置就完成了 proxyTable 的功能。

proxyTable 详细配置
Lavas 方案中 proxyTable 的实现是采用的 http-proxy-middleware，详细的配置可以参考它的文档。


## 使用 Vuex 管理数据
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式，一般用来管理页面的数据获取和访问。

接着上一节的话题，如果我们需要发送请求获取数据并且在页面中使用，一个更加常见且合理的方式是使用 Vuex 来管理，因此这一节我们会改造上一节那种“原始”的方式，让代码变的更具结构性和扩展性，也更符合常规线上应用的要求。

更多关于 Lavas 和 Vuex 交互部分的写法也可以参考Lavas 文档。

创建 store
首先我们在根目录下的 /store 目录内创建一个 detail.js，内容如下：

  import axios from 'axios';

  const SET_WEATHER = 'setWeather';

  export const state = () => ({
      weather: {
          text: '',
          temp: 0
      }
  });

  export const mutations = {
      [SET_WEATHER](state, {weatherText, weatherTemp}) {
          state.weather = {
              text: weatherText,
              temp: weatherTemp
          };
      }
  };

  export const actions = {
      async setWeather({commit}, params) {
          try {
              let url = `https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20${params.woeid}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
              let result = await axios(url);

              let condition = result.data.query.results.channel.item.condition;

              commit(SET_WEATHER, {
                  weatherText: condition.text,
                  weatherTemp: condition.temp
              })
          }
          catch (e) {
              // TODO with error
              console.log('error in setWeather');
              console.log(e);
          }
      }
  };

关于 Vuex 的组成 (state, mutations, actions) 以及写法等在这里不做介绍，在他们的教程上有详尽的介绍。

这里我们可以看到，原先在上一节中发送请求的部分移动到了 Vuex 的 action setWeather 中，因此对 axios 的引入也改到了这里。此外为了模拟现实情况，我们把城市ID (woeid) 当做参数由外部传入，而不是像上一节那样写死在代码中。

Lavas 会自动扫描 /store 目录中的文件，逐个以 Vuex 的模块 (module) 进行加载。因此不必再在别处进行配置即可直接使用了。

使用 store
我们需要修改 `/pages/detail/_id.vue`，让他可以使用我们刚才建立的 Vuex 模块来获取天气数据，代码如下：(还是只列出 script 部分)

  import {mapState} from 'vuex'

  export default {
      name: 'detail-_id',
      // 内容省略，和第四节相同
      async asyncData({store, route}) {
          await store.dispatch('detail/setWeather', {woeid: 2151849});
      },
      computed: {
          ...mapState('detail', [
              'weather'
          ])
      },
      created() {
          console.log(`Weather of Shanghai: ${this.weather.text}, ${this.weather.temp}°F`);
      }
  };

首先关注 asyncData 方法，这里不再直接发送请求，而是调用我们刚刚创建的 Vuex 模块的 dispatch 方法来告知 store 发送请求获取数据。

接着我们在这里使用 Vuex 的快捷函数 mapState，将状态 weather 挂载到 this 中。

最后我们采用了 Vue 的生命周期钩子 created() 打印获取到的天气信息，这也是为了和上一节的例子保持一致。真实的应用中，我们更可能将天气信息显示到页面上而非打印在 console 里。

至此我们已经完成了示例应用的基本搭建，并且虽然简单却包含了很多功能，包括多个页面，跳转链接，发送异步请求和使用 Vuex 管理数据。接下来我们要学习如何使用 Lavas 的核心功能，让站点拥有 PWA 特性。


## 配置 Manifest
一般来说，PWA 包含三大主要功能：桌面快捷方式，Service Worker 和消息推送。本节我们主要讨论如何赋予站点能够“添加到桌面快捷方式”的能力。由于 Service Worker 的内容比较灵活和复杂，因此我们单独编写了一个关于 Service Worker 的 Codelab。

这个功能主要针对通过移动端访问站点的用户。通过添加到手机桌面的快捷方式，用户能很便捷地调用本地浏览器直接打开站点。和普通浏览器的快捷方式不同，桌面快捷方式在打开时还包含一个启动动画，并且不包含普通浏览器的显示框架(如头部地址栏，底部菜单栏等)，使用起来就和本地安装的 APP 非常接近！

要实现这个功能，本质是需要在构建后的根目录配置一个 manifest.json，给浏览器提供必要的信息，具体可以参见这里。

在 Lavas 中，我们可以通过把这个 manifest.json 放置在 /static 目录下。在构建之后，Lavas 会将它复制到正确位置，即 /dist/manifest.json。

让我们尝试编写一个示例的 manifest.json，看看它的基本功能：

  {
      "start_url": "/?utm_source=homescreen",
      "name": "*__name__*",
      "short_name": "*__name__*",
      "icons": [
          {
              "src": "static/img/icons/android-chrome-512x512.png",
              "type": "image/png",
              "size": "512x512"
          },
          {
              "src": "static/img/icons/android-chrome-192x192.png",
              "type": "image/png",
              "size": "192x192"
          },
          {
              "src": "static/img/icons/apple-touch-icon-180x180.png",
              "type": "image/png",
              "size": "180x180"
          },
          {
              "src": "static/img/icons/apple-touch-icon-152x152.png",
              "type": "image/png",
              "size": "152x152"
          }
      ],
      "display": "standalone",
      "background_color": "#000000",
      "theme_color": "#278fef"
  }

配置完之后，我们可以在 Google Chrome 的开发者工具 (F12) 的 Application - Manifest 查看配置是否成功，正常配置的效果如下：

如果条件允许，你也可以尝试在手机上直接查看效果。如果你没有一个可访问的 https 域名的话，下面列举一种代理配置方法。

如何在手机上查看本地站点的 PWA 特性
电脑上安装代理软件 (charles, fiddler等等)

以 fiddler 为例，打开 Tools - Telerik Fiddler Options - Connections 配置/记录代理端口 (Fiddler listens on port)， 如 8888

打开 Tools - HOSTS, 添加一行 127.0.0.1 localhost，将 localhost 定向到电脑本地

手机和电脑连接同一个 WIFI 网络，修改手机的 WIFI 配置，找到高级设置，填入电脑的 IP 和刚才记录的端口号 (例如 192.168.1.2:8000)

打开手机中支持 PWA 特性的浏览器 (推荐 Google Chrome)，输入 URL localohst:3000 (3000为 lavas 默认服务端口)，能够展现首页的话，在右上角菜单中也可以看到“添加到主屏幕”

添加完成后，在手机桌面上就可以看到新增的图标了

点击这个新的图标，在短暂的过场动画后，会直接展现页面，没有浏览器的显示框架，Cooooooooool!!!!

这里有两个注意点：

第四步中，查看自己电脑的 IP 可以在 fiddler 右上角的 'Online' 用鼠标悬浮看到，也可以在终端输入其他命令查看(如 Windows 的 ipconfig -all， Linux 的 hostname -i 等等)。一般在 WIFI 配置完成后，手机会自动发送一些请求探测网络是否可用，这些请求如果可以在 fiddler 上追踪到，则表明连接成功，HOSTS 也就可以生效了。
部分手机会有权限控制，禁止应用创建桌面快捷方式。这种情况下，我们需要额外打开手机设置，找到权限管理，将 Google Chrome 的“创建桌面快捷方式”设置为允许。这也是 PWA 面临的一个支持问题，但相信随着 PWA 的普及和着实提升的用户体验，这类壁垒最终将会被打破。


## 编写 Service Worker
这一部分我们只列出一些最基本的 Service Worker 的配置方法，有关 Service Worker 更详细的介绍可以移步 Lavas 官网的什么是 Service Worker 和 Lavas 文档的 Service Worker 部分。此外由于 App Shell 模型和骨架屏 (Skeleton) 比较复杂，我们单独编写了一套 Codelab 来介绍，这里就不再涉及了。

初始化生成的项目默认已经带有 Service Worker，我们来查看一下加深了解。Lavas 的 Service Worker 可以分为两部分：配置部分和模板部分。

Service Worker 配置项
首先打开根目录下的 /lavas.config.js，关注 serviceWorker 这一段，如下：

  module.exports = {
      // ...
      serviceWorker: {
          swSrc: path.join(__dirname, 'core/service-worker.js'),
          swDest: path.join(BUILD_PATH, 'service-worker.js'),
          globDirectory: path.basename(BUILD_PATH),
          globPatterns: [
              '**/*.{html,js,css,eot,svg,ttf,woff}'
          ],
          globIgnores: [
              'sw-register.js',
              '**/*.map'
          ],
          appshellUrl: '/appshell',
          dontCacheBustUrlsMatching: /\.\w{8}\./
      },
      // ...
  };

这些配置项都是必填项，具体每一项的含义和配置方法可以参考 Lavas 文档的 Service Worker 部分。大致来说，这里配置了 Service Worker 模板所在位置，最终 js 生成位置，预缓存静态文件的覆盖范围等等。如上的配置将 html, js, css, eot, svg, ttf, woff 等各类静态资源加入预缓存文件，但是将 sw-register.js 和 map 排除在外。

appshellUrl 配置项和 App Shell 有关，这里先忽略。

Service Worker 模板
通过 Service Worker 配置项可以列出预缓存文件列表。如果需要设置动态缓存和 appshell，就需要使用 Service Worker 模板了，位于 /config/service-worker.js。

  importScripts('/static/js/workbox-sw.prod.v2.1.2.js');

  const workboxSW = new WorkboxSW({
      cacheId: 'lavas-cache',
      ignoreUrlParametersMatching: [/^utm_/],
      skipWaiting: true,
      clientsClaim: true
  });

  // Define precache injection point.
  workboxSW.precache([]);

  // Define response for HTML request.
  workboxSW.router.registerNavigationRoute('/appshell');

默认情况下，Service Worker 的模板为我们完成了：

- 引入 WorkBox 的 API
- 初始化 WorkBox 实例
- 定义预缓存文件列表注入入口
- 注册 App Shell 路由规则

关于这些细节的内容在 Lavas 文档的 Service Worker 部分中会有详细介绍。这里我们暂且把这些认定为固定内容，直接往文件末尾继续追加动态缓存的配置即可。在之前的小节中，我们访问了雅虎天气的接口获取上海的天气。因此我们尝试将它缓存起来。

  // Define runtime cache.
  workboxSW.router.registerRoute(new RegExp('https://query\.yahooapis\.com/v1/public/yql'),
      workboxSW.strategies.networkFirst());

我们为雅虎天气的 URL 设定了 networkFirst 缓存策略，在网络正常时会请求网络并更新缓存；否则会使用缓存内容。配合预缓存了的所有静态文件，站点就拥有了离线访问能力！


## 构建代码和上线
对于一个应用来说，经过前面的步骤之后基本功能已经开发完整。让我们把注意力移动到代码的构建和上线上面来。

在项目目录输入命令可以对 Lavas 项目进行构建：

  lavas build

完成后，在项目根目录下会生成一个 /dist 目录，这边是构建后的项目代码。

SPA 模式
由于 lavas 导出的模板默认采用的是 SPA 模式，因此 dist 目录下生成的是静态文件。

我们可以使用 lavas 提供的命令来进行启动。

  lavas static

如果您想脱离 lavas 命令行进行启动 (例如在线上机器进行启动)，可以使用例如 nginx 这类代理服务器对静态文件进行代理服务。

特别地，如果在路由模式中使用了 history 模式，您可能会想要使用 connect-history-api-fallback 中间件。lavas 会帮您生成您的项目中支持的所有路由，位于 dist/lavas/routes.json，在使用中间件时可能会用到。详细的配置方式可以参考 vue-router 提供的这篇文档

SSR 模式
您可以修改 lavas.config.js 中的 ssr 为 true 来启用 SSR 模式。SSR 模式下，dist 目录下生成的是可运行的 nodejs 项目。首先我们使用命令

  npm install

来安装所有依赖，并使用 Lavas 内置命令

  lavas start

以线上模式运行项目。线上模式的所有代码均经过压缩，并且 Service Worker 也会生效 (使用 localhost 访问即可)。

如果您想脱离 lavas 命令行进行启动 (例如在线上机器进行启动)，您有四个步骤需要进行。

修改 /server.prod.js（注意并非 /dist 目录下而是根目录下），添加一行环境变量的声明，如下：

  process.env.NODE_ENV = 'production';

修改 /lavas.config.js，添加 node_modules 的复制要求：

  build: {
       ssrCopy: isDev ? [] : [
           {src: 'server.prod.js'},
           {src: 'package.json'},
           {src: 'node_modules'}
       ]
   }

运行 lavas build

进入 dist 目录，执行命令 node server.prod.js 即可。





# Progressive Web Apps - manifest.json 将站点添加至首屏
https://lavas.baidu.com/pwa/engage-retain-users/introduction

概述
允许将站点添加至主屏幕，是 PWA 提供的一项重要功能。虽然目前部分浏览器已经支持向主屏幕添加网页快捷方式以方便用户快速打开站点，但是 PWA 添加到主屏幕的不仅仅是一个网页快捷方式，它将提供更多的功能，让 PWA 具有更加原生的体验。

本文将以实现功能为粒度，去说明以下问题：

- 如何让 PWA 站点支持添加至主屏幕的功能；
- 添加到主屏幕的 PWA 具有哪些原生体验；
- 如何引导用户将 PWA 添加至主屏幕。

标准现状
PWA 添加至桌面的功能实现依赖于 manifest.json。当前 manifest.json 的标准仍属于草案阶段，Chrome 和 Firefox 已经实现了这个功能，微软正努力在 Edge 浏览器上实现，Apple 目前仍在考虑中。具体请查阅 caniuse.com 来查看主流浏览器的支持情况。同时需要注意的是，manifest.json 目前仍属于实验性技术，所以其部分属性和功能在未来有可能会发生改变。

使用说明
为了实现 PWA 应用添加至桌面的功能，除了要求站点支持 HTTPS 之外，还需要准备 manifest.json 文件去配置应用的图标、名称等信息。举个例子，一个基本的 manifest.json 应包含如下信息：

  {
      "short_name": "短名称",
      "name": "这是一个完整名称",
      "icon": [
          {
              "src": "icon.png",
              "type": "image/png",
              "sizes": "48x48"
          }
      ],
      "start_url": "index.html",
      "theme_color": "blue",
      "background_color": "#2196f3",
      "display": "standalone"
  }

使用 link 标签将 manifest.json 部署到 PWA 站点 HTML 页面的头部，如下所示：

  <link rel="manifest" href="path-to-manifest/manifest.json">

通过对 manifest.json 进行相应配置，可以实现以下功能：

基本功能

- 自定义名称
- 自定义图标
- 设置启动网址
- 设置作用域

  对于一些大型网站而言，有时仅仅对站点的某些模块进行 PWA 改造，其余部分仍为普通的网页。因此需要通过 scope 属性去限定作用域，超出范围的部分会以浏览器的方式显示。

  scope: {string} 作用域
  scope 属性在浏览器中的实现仍然在细化和改进。

  scope 应遵循如下规则：

  如果没有在 manifest 中设置 scope，则默认的作用域为 manifest.json 所在文件夹；
  scope 可以设置为 ../ 或者更高层级的路径来扩大PWA的作用域；
  start_url 必须在作用域范围内；
  如果 start_url 为相对地址，其根路径受 scope 所影响；
  如果 start_url 为绝对地址（以 / 开头），则该地址将永远以 / 作为根地址；

改善应用体验

- 添加启动画面
  当 PWA 从主屏幕点击打开时，幕后执行了若干操作：

  启动浏览器
  启动显示页面的渲染器
  加载资源

  在这个过程中，由于页面未加载完毕，因此屏幕将显示空白并且看似停滞。如果是从网络加载的页面资源，白屏过程将会变得更加明显。因此 PWA 提供了启动画面功能，用标题、颜色和图像组成的画面来替代白屏，提升用户体验。

  设置图像和标题
  浏览器会从 icons 中选择最接近 128dp 的图片作为启动画面图像。标题则直接取自 name。

  设置启动背景颜色
  通过设置 background_color 属性可以指定启动画面的背景颜色。

- 设置显示类型
  可以通过设置 display 属性去指定 PWA 从主屏幕点击启动后的显示类型。仅当显示类型 display 设置为 standalone 或 fullscreen 时，PWA 启动的时候才会显示启动画面。

  display: {string} 显示类型
  显示类型的值包括以下四种：

  显示类型  描述  降级显示类型
  fullscreen  应用的显示界面将占满整个屏幕  standalone
  standalone  浏览器相关UI（如导航栏、工具栏等）将会被隐藏 minimal-ui
  minimal-ui  显示形式与standalone类似，浏览器相关UI会最小化为一个按钮，不同浏览器在实现上略有不同  browser
  browser 浏览器模式，与普通网页在浏览器中打开的显示一致 (None)

- 指定显示方向
  PWA允许应用通过设置 orientation 属性的值，强制指定显示方向。

  orientation: string 应用显示方向
  orientation属性的值有以下几种：

  landscape-primary
  landscape-secondary
  landscape
  portrait-primary
  portrait-secondary
  portrait
  natural
  any

- 设置主题色
  通过设置 theme_color 属性可以指定 PWA 的主题颜色。可以通过该属性来控制浏览器 UI 的颜色。比如 PWA 启动画面上状态栏、内容页中状态栏、地址栏的颜色，会被 theme_color 所影响。

  在指定了 theme_color 的值之后，地址栏依然呈白色。针对这种情况，可以在页面 HTML 里设置 name 为 theme-color 的 meta 标签，例如：

    <meta name="theme-color" content="green">

## 引导用户添加应用

浏览器在 PWA 站点满足以下条件时会自动显示横幅：

- 站点部署 manifest.json，该文件需配置如下属性：
  - short_name （用于主屏幕显示）
  - name （用于安装横幅显示）
  - icons （其中必须包含一个 mime 类型为 image/png 的图标声明）
  - start_url （应用启动地址）
  - display （必须为 standalone 或 fullscreen）
- 站点注册 Service Worker。
- 站点支持 HTTPS 访问。
- 站点在同一浏览器中被访问至少两次，两次访问间隔至少为 5 分钟。

注 应用安装横幅是一种新兴的技术，对应的显示横幅的条件在将来可能会有所变化。

判断用户是否安装此应用
beforeinstallprompt 事件返回一个名为 userChoice 的 Promise 对象，并在当用户对横幅进行操作时进行解析。promise 会返回属性 outcome，该属性的值为 dismissed 或 accepted，如果用户将网页添加到主屏幕，则返回 accepted。

例如：

  window.addEventListener('beforeinstallprompt', function (e) {
      // beforeinstallprompt event fired

      e.userChoice.then(function (choiceResult) {
          if (choiceResult.outcome === 'dismissed') {
              console.log('用户取消安装应用');
          }
          else {
              console.log('用户安装了应用');
          }
      });
  });

利用 userChoice 返回的 Promise 对象，可以根据用户的安装选择结果进行互动。

取消或延迟安装横幅的触发事件
网站虽然不能主动触发安装横幅的显示事件，但是当该事件被浏览器触发之后，可以对其进行取消或者延迟。

通过阻止 beforeinstallprompt 事件的默认行为，即可取消横幅弹出：

  window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      return false;
  });

beforeinstallprompt 事件返回一个名为 prompt 的方法，通过执行该方法可以触发安装横幅的显示。为了实现显示事件的延迟操作，可以将 beforeinstallprompt 事件的返回值给存储起来，再异步地调用 prompt()。

  var deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', function (e) {
      // 将事件返回存储起来
      deferredPrompt = e;

      // 取消默认事件
      e.preventDefault();
      return false;
  });

  // 当按钮点击事件触发的时候，再去触发安装横幅的显示
  button.addEventListener('click', function () {
      if (deferredPrompt != null) {
          // 异步触发横幅显示
          deferredPrompt.prompt();
          deferredPrompt = null;
      }
  });

通过 prompt() 触发显示的横幅，同样可以通过 userChoice 去监测用户的安装行为：

  button.addEventListener('click', function () {
      if (deferredPrompt != null) {
          // 异步触发横幅显示
          deferredPrompt.prompt();
          // 检测用户的安装行为
          deferredPrompt.userChoice.then(function (choiceResult) {
              console.log(choiceResult.outcome);
          });

          deferredPrompt = null;
      }
  });

更多关于 beforeinstallprompt 的介绍，请阅读 MDN Window.onbeforeinstallprompt

完整的项目代码可以戳这里。
https://github.com/lavas-project/lavas-project.github.io/tree/master/pwa-demo/manifest-demo/add-to-home-screen/delay


## 引导用户安装原生应用

PWA 站点允许定义类似应用安装横幅的形式去推广原生应用。

显示原生应用安装横幅的条件
浏览器在 PWA 站点满足以下条件时会自动显示横幅：

- 站点部署 manifest.json，该文件需配置如下属性：
  - short_name （用于主屏幕显示）
  - name （用于安装横幅显示）
  - icons （其中必须包含一个 192x192 且 mime 类型为 image/png 的图标声明）
  - 包含原生应用相关信息的 related_applications 对象
- 站点注册 Service Worker。
- 站点支持 HTTPS 访问。
- 站点在同一浏览器中被访问至少两次，两次访问间隔至少为 2 天。

其中 related_applications 的定义如下：

  - related_applications: Array.<AppInfo> 关联应用列表

AppInfo 的属性值包括：

  - platform: {string} 应用平台
  - id: {string} 应用id

例如：

  "related_applications": [
      {
          "platform": "play",
          "id": "com.baidu.samples.apps.iosched"
      }
  ]

如果只希望用户安装原生应用，而不需要弹出横幅引导用户安装 PWA，那么可以在 manifest.json 设置：

  "prefer_related_applications": true



# ServiceWorker
https://lavas.baidu.com/pwa/README
https://www.cnblogs.com/BoatGina/p/10422361.html
https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers
https://developers.google.cn/web/fundamentals/primers/service-workers

什么是 Service Worker
Service Worker 是浏览器在后台独立于网页运行的脚本，它打开了通向不需要网页或用户交互的功能的大门。 现在，它们已包括如推送通知和后台同步等功能。 将来，Service Worker 将会支持如定期同步或地理围栏等其他功能。 本教程讨论的核心功能是拦截和处理网络请求，包括通过程序来管理缓存中的响应。

这个 API 之所以令人兴奋，是因为它可以支持离线体验，让开发者能够全面控制这一体验。

在 Service Worker 出现前，存在能够在网络上为用户提供离线体验的另一个 API，称为 AppCache。 AppCache API 存在的许多相关问题，在设计 Service Worker 时已予以避免。

Service Worker 本质上充当 Web 应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步API。

Service Worker 独立于 JavaScript 主线程，因此它不能直接访问DOM，也不能直接访问window对象，但是，Service Worker可以访问navigator对象，也可以通过消息传递的方式（postMessage）与JavaScript主线程进行通信。


Service Worker 相关注意事项：

它是一种 JavaScript Worker，无法直接访问 DOM。 Service Worker 通过响应 postMessage 接口发送的消息来与其控制的页面通信，页面可在必要时对 DOM 执行操作。
Service Worker 是一种可编程网络代理，让您能够控制页面所发送网络请求的处理方式。
Service Worker 在不用时会被中止，并在下次有需要时重启，因此，您不能依赖 Service Worker onfetch 和 onmessage 处理程序中的全局状态。 如果存在您需要持续保存并在重启后加以重用的信息，Service Worker 可以访问 IndexedDB API。
Service Worker 广泛地利用了 promise，因此如果您不熟悉 promise，则应停下阅读此内容，看一看 Promise 简介。

Service Worker 的生命周期完全独立于网页。

要为网站安装服务工作线程，您需要先在页面的 JavaScript 中注册。 注册服务工作线程将会导致浏览器在后台启动服务工作线程安装步骤。

在安装过程中，您通常需要缓存某些静态资产。 如果所有文件均已成功缓存，那么 Service Worker 就安装完毕。 如果任何文件下载失败或缓存失败，那么安装步骤将会失败，Service Worker 就无法激活（也就是说， 不会安装）。 如果发生这种情况，不必担心，它下次会再试一次。 但这意味着，如果安装完成，您可以知道您已在缓存中获得那些静态资产。

安装之后，接下来就是激活步骤，这是管理旧缓存的绝佳机会，我们将在 Service Worker 的更新部分对此详加介绍。

激活之后，Service Worker 将会对其作用域内的所有页面实施控制，不过，首次注册该 Service Worker 的页面需要再次加载才会受其控制。 服务工作线程实施控制后，它将处于以下两种状态之一：服务工作线程终止以节省内存，或处理获取和消息事件，从页面发出网络请求或消息后将会出现后一种状态。

关于 service worker 的一些注意点：

- Service Worker 是一个JavaScript worker ,所以它不能直接访问 DOM 。但 service worker 可以通过postMessage 接口与跟其相关的页面进行通信,发送消息,从而让这些页面在有需要的时候去操纵 DOM 。
- Service Worker 是一个可编程的网络代理，允许你去控制如何处理页面的网络请求， 可以处理fetch请求。
- Service Worker 在不使用时将被终止，并会在需要的时候重新启动，因此你不能把onfetch 和 onmessage事件来作为全局依赖处理程序。如果你需要持久话一些信息并在重新启动Service worker后使用他，可以使用 IndexedDBAPI ，service worker 支持。
- Service Worker 的缓存机制是依赖 Cache API 实现的
- Service worker 广泛使用了 promise。
- Service worker依赖 HTML5 fetch API
- Service Workers 要求必须在 HTTPS 下才能运行


Service Worker 生命周期

- 注册service worker，在网页上生效
- 安装成功，激活 或者 安装失败（下次加载会尝试重新安装）
- 激活后，在sw的作用域下作用所有的页面，首次控制sw不会生效，下次加载页面才会生效。
- sw作用页面后，处理fetch（网络请求）和message（页面消息）事件 或者 被终止（节省内存）。

## Cache API

（1）检测api是否存在

  if('caches' in window) {
        // Has support!
    }

（2）caches.open，创建缓存总对象。如下创建名为 test-cache 的缓存。

  caches.open('test-cache').then(function(cache) {
      // Cache is created and accessible
  });

（3）cache.add和cache.addAll，添加缓存内容。其中cache.add只添加一个，cache.addAll可以添加多个。

  caches.open('test-cache').then(function(cache) { 
      cache.addAll(['/', '/images/logo.png'])
      .then(function() { 
        // Cached!
        
        // or use cache.add
        cache.add('/page/1');  // "/page/1" URL will be fetched and cached!
    });
  });

（4）cache.keys()，查看已经缓存的数据

  caches.open('test-cache').then(function(cache) {
      cache.keys().then(function(cachedRequests) {
          console.log(cachedRequests); // [Request, Request]
      });
  });
  　　

（5）cache.match和cache.matchAll，匹配缓存文件路径

  caches.open('test-cache').then(function(cache) {
      cache.match('/page/1').then(function(matchedResponse) {
          console.log(matchedResponse);
      });
  });

（6）cache.delete，删除缓存。

  caches.open('test-cache').then(function(cache) {
     cache.delete('/page/1');
  });
  　　

Fetch API基本使用        

  // url (required), options (optional)
  fetch('https://davidwalsh.name/some/url', {
      method: 'get'
  }).then(function(response) {
      // ...
  }).catch(function(err) {
      // Error :(
  });


## Services Worker Demo
https://mdn.github.io/sw-test/

index.html

  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="viewport" content="width=device-width">

      <title>Service worker demo</title>

      <link rel="stylesheet" href="style.css">
      <!--[if lt IE 9]>
        <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
      <![endif]-->
    </head>

    <body>
      <h1>Lego Star Wars gallery</h1>

      <section></section>

      <script src="image-list.js"></script>
      <script src="app.js"></script>
    </body>
  </html>

style.css

  html, body {
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: sans-serif;
  }

  h1 {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    height: 197px;
    background: url(star-wars-logo.jpg) no-repeat center;
  }

  section {
    max-width: 640px;
    margin: 0 auto;
  }

  figure {
    width: 100%;
    margin: 0;
  }

  img {
    width: 100%;  
    box-shadow: 2px 2px 1px black;
  }

  caption {
    display: block;
    margin: 0 auto 1rem;
    width: 70%;
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 5px;
    background: #ccc;
    box-shadow: 1px 1px 1px black;
  }

image-list.js

  var Path = 'gallery/';

  var Gallery = { 'images' : [
        
    {
      'name'  : 'Darth Vader',
      'alt' : 'A Black Clad warrior lego toy',
      'url': 'gallery/myLittleVader.jpg',
      'credit': '<a href="https://www.flickr.com/photos/legofenris/">legOfenris</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    },

    {
      'name'  : 'Snow Troopers',
      'alt' : 'Two lego solders in white outfits walking across an icy plain',
      'url': 'gallery/snowTroopers.jpg',
      'credit': '<a href="https://www.flickr.com/photos/legofenris/">legOfenris</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    },

    {
      'name'  : 'Bounty Hunters',
      'alt' : 'A group of bounty hunters meeting, aliens and humans in costumes.',
      'url': 'gallery/bountyHunters.jpg',
      'credit': '<a href="https://www.flickr.com/photos/legofenris/">legOfenris</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    },
    
  ]};

app.js

  // register service worker

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw-test/sw.js', { scope: '/sw-test/' }).then(function(reg) {

      if(reg.installing) {
        console.log('Service worker installing');
      } else if(reg.waiting) {
        console.log('Service worker installed');
      } else if(reg.active) {
        console.log('Service worker active');
      }

    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }

  // function for loading each image via XHR

  function imgLoad(imgJSON) {
    // return a promise for an image loading
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', imgJSON.url);
      request.responseType = 'blob';

      request.onload = function() {
        if (request.status == 200) {
          var arrayResponse = [];
          arrayResponse[0] = request.response;
          arrayResponse[1] = imgJSON;
          resolve(arrayResponse);
        } else {
          reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
        }
      };

      request.onerror = function() {
        reject(Error('There was a network error.'));
      };

      // Send the request
      request.send();
    });
  }

  var imgSection = document.querySelector('section');

  window.onload = function() {

    // load each set of image, alt text, name and caption
    for(var i = 0; i<=Gallery.images.length-1; i++) {
      imgLoad(Gallery.images[i]).then(function(arrayResponse) {

        var myImage = document.createElement('img');
        var myFigure = document.createElement('figure');
        var myCaption = document.createElement('caption');
        var imageURL = window.URL.createObjectURL(arrayResponse[0]);

        myImage.src = imageURL;
        myImage.setAttribute('alt', arrayResponse[1].alt);
        myCaption.innerHTML = '<strong>' + arrayResponse[1].name + '</strong>: Taken by ' + arrayResponse[1].credit;

        imgSection.appendChild(myFigure);
        myFigure.appendChild(myImage);
        myFigure.appendChild(myCaption);

      }, function(Error) {
        console.log(Error);
      });
    }
  };

sw.js

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/sw-test/',
          '/sw-test/index.html',
          '/sw-test/style.css',
          '/sw-test/app.js',
          '/sw-test/image-list.js',
          '/sw-test/star-wars-logo.jpg',
          '/sw-test/gallery/bountyHunters.jpg',
          '/sw-test/gallery/myLittleVader.jpg',
          '/sw-test/gallery/snowTroopers.jpg'
        ]);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();
          
          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('/sw-test/gallery/myLittleVader.jpg');
        });
      }
    }));
  });

