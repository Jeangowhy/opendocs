
Box2D 物理引擎
=============

   *  https://box2d.org/
   *  https://github.com/erincatto/Box2D
   *  Documentation v2.4 https://box2d.org/documentation/
   *  Documentation v3.0 https://box2d.org/documentation_v3/

   物理引擎（Physics Engine）是一个模拟真实世界的物理现象的程序，通常通过抽象的刚体（Rigid）、
   软体（Softbody）对象来模拟真实世界的物理受力及响应，物理属性包括（动量、扭矩或者弹性），一般
   用于游戏开发、仿真实验、科学研究等等领域。

   根据物理引擎模拟世界中的模型差别，一般可以分为 2D 或 3D 物理引擎。利用物理引擎开发游戏，可以
   将整个应用程序划分为两个部分：物理引擎中的 ``模拟世界`` 是一个在软件环境中运行的抽象数学模型，
   通过用户输入不同的数据（对物体施加力的作用），然后通过实时计算，并将计算结果反馈给使用引擎的
   ``用户程序``。用户程序根据引擎模拟结果来调整程序的界面，比如一个简单的场景：两个刚体球的碰撞。
   那么物理引擎负责模拟刚体球的运动、碰撞、弹出这个过程，这个过程发生在模拟世界内。用户程序则根据
   模拟世界产生的状态，例如球体的运行位置，来移动用户看到的图像。当这个过程快速地播放，比如每秒 30
   帧画面（30fps）播放出来，就形成了具有真实感的动画。

   图形学中，为了加速处理空间中的对象，通常使用一个对齐坐标轴方向的盒子来切割空间，将整个大场景分
   而治之。在游戏场景中，为了简化物体之间的碰撞检测运算，也会创建一个规则的几何外形将物体包围。
   这个盒子称为 AABB（Axis-Aligned Bounding Box）包围盒。

   流行的物理引擎有很多，包括：

   *  PhysX_：Nvidia 基于 CUDA 设计的执行复杂的物理运算的物理仿真技术。
   *  Havok_：原是一家业界领先的软件服务提供商，后被 Intel 收购，游戏、电影行业都有应用。
   *  Bullet_：开源的物理引擎，Godot、Unity 等游戏引擎中集成使用。

.. _Havok: https://www.havok.com/havok-physics/
.. _PhysX: https://github.com/NVIDIAGameWorks/PhysX
.. _Bullet: https://github.com/bulletphysics/bullet3

   Bullet 是开源免费的物理引擎，广泛应用于游戏、动画、电影和机器人仿真等领域。主要功能如下：

   1. 连续和离散物体的碰撞检测，物体形状包括网格和基本几何体的。
   2. 快速稳定的刚体约束求解器，包括车辆动力学、人体、直线约束、铰链约束等。
   3. 软体物体动力学，包括衣服、绳子、可变形体等，同时支持约束。

   `Bullet Real-Time Physics Simulation <https://pybullet.org/wordpress/>`__

   Box2D 作为一个成熟的 2D 物理引擎，它在 2D 游戏中使用较多。Box2D 本身使用 C++ 语言编写，
   2023 年初，作者开始使用 C++11 改写 Box2D 并变更版本为 Box2C (3.x)。

   由于 Box2D 发展较早，第三方移植有多种语言的实现：

   *  box2d.js https://github.com/kripken/box2d.js/
   *  TypeScript https://vscode.dev/github/flyover/box2d.ts
   *  JBox2D: A Java Physics Engine https://github.com/jbox2d/jbox2d
   *  pybox2d: 2D Game Physics for Python https://github.com/pybox2d/pybox2d

   Web 环境还可以使用 matter-js，JavaScript 实现的 2D 物理引擎。PC 端 Box2D 性能优于
   matter-js，但是在移动端，苹果的微信小游戏，因为没有 JIT 支持，Box2D 性能反而不如轻量的
   matter-js。安卓的微信小游戏，因为有 JIT，Box2D 同样是优于 matter-js。

   Matter.js* is a JavaScript 2D rigid body physics engine for the web

   *  https://brm.io/matter-js/
   *  https://github.com/liabru/matter-js
   *  https://github.com/liabru/matter-js/wiki
   *  https://www.npmjs.com/package/@types/matter-js
   *  MatterTools https://github.com/liabru/matter-tools
   *  `参考案例 <https://github.com/cheneyweb/wxgame-elastic>`__

   Phaser 是一款开源的基于 HTML5 (WebGL + Canvas) 渲染的游戏引擎，Phaser Editor 编辑器
   是一个使用了 matter.js 的可视化的游戏场景设计工具。Phaser 当前有两个版本 2.x 称为社区版本
   (Phaser CE)，当前官方对旧代码进行重构，设计出 Phaser 3.x。此引擎可以使用 JavaScript 或者
   TypeScript 脚本进行跨平台（iOS/Android/Desktop）游戏开发，可以通过插件机制集成 Spine 
   动画工具导出的动画资源。Phaser 游戏引擎本身免费使用，但是 Phaser Editor 设计工具收费。
   Phaser 游戏引擎本身集成多种经量级物理系统，包括 ``Arcade Physics``, ``Ninja Physics``
   和 ``P2.JS Full-Body Physics``。

   *  Phaser Editor https://phaser.io/editor
   *  Phaser Github https://github.com/phaserjs/phaser/releases
   *  Phaser v2.x Community Edition https://phaser.io/download/release/v2.20.0
   *  Phaser v3.80.1 "Nino" https://phaser.io/download/release/v3.80.1
   *  Phaser v3 Examples https://github.com/phaserjs/examples
   *  Getting Started with Phaser 3 https://phaser.io/tutorials/getting-started-phaser3
   *  Making your first Phaser 3 Game https://phaser.io/tutorials/making-your-first-phaser-3-game

   直接编写代码来搭建游戏场景是效率比较低的方式，但是使用代码的好处是灵活性最大的方式。比起
   微信开发者工具这样低能的工具来说，没有提供处理场景的功能，编写代码反而是更好的方式。可以
   利用成熟的游戏引擎提供的工具来搭建 2D/3D 游戏场景，再根据小游戏提供的兼容功能编写游戏逻辑。

   从代码运行逻辑来看，小游戏的运行有 Canvas、WebGL、WebAssembly 等等基本方式。

   .. 在Godot的菜单栏中，选择"Editor"（编辑器）-> "Export"（导出）。3. 在弹出的导出窗口中，
   
   .. 选择左侧的"GDScript/C#"，然后在右侧选中“WASM (WebAssembly)”选项。在下拉菜单中选择“Wasmill”。
   
   .. wasmall是一种针对WebGL和Node.js优化的二进制格式，它使得你的代码更加小且加载更快。

   .. 同时请注意检查下面的 “Emscripten ASAP” 和 "WebAssembly STACK" 是否被勾选，以保证最佳性能和兼容性。

   .. Godot 引擎只能导出到 H5 平台，网络资源访问一般使用的 fetch。而微信专用 wx.request API。

   Godot 导出 Web 平台主要会包含 index.html、index.pck、index.wasm，还有一些 js 的胶水文件。
   其中 index.pck 是场景、素材、资源文件的打包，index.wasm 即是游戏的引擎程序的字节码。

   `Compiling for the Web¶ <https://docs.godotengine.org/en/stable/contributing/development/compiling/compiling_for_web.html>`__

   matter-js 提供了一个 svg 模块，这个模块可以将 Web 加载的 SVG 图形中的 ``path`` 路径中
   包含的顶点提取出来并创建相应的模型。SVG 描绘的是曲线，经过 ``Svg.pathToVertices`` 处理
   转换为离散的点，这会一定程序上降低平滑度。转换过程还会依赖 `Poly Decomp <https://www.npmjs.com/package/poly-decomp>`__。

   matter.js 代码中包含有示例，可以直接在 Web 页面中引用 matter.min.js 以及示例脚本：

   .. code::js

      <script src="../build/matter.min.js"></script>
      <script src="../examples/ballPool.js"></script>
      <script src="../examples/constraints.js"></script>
      <script> for(let it in Example) Example[it]() </script>      

   引擎 `Render.create()` 提供两个选项来指定画布，默认画布尺寸是 800x600：

   *  ``element`` 指定 Web 页面元素作为画布容器，引擎可以自行创建 ``canvas`` 对象；
   *  ``canvas`` 直接指定一个画布对象，比如 ``document.getElementById("canvas_id")``；

   matter.js 这种强强关联画布对象的逻辑与 Box2D 有较大的差别，。
   所以，只运行环境提供的画布对象符合 CanvasRenderingContext2D 接口规范，就可以使用此物理引擎。

   .. code::js

      <body>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"></script>
         <script>
         const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite;
         const iEngine = Engine.create();
         const iRunner = Runner.create();
         const iRender = Render.create({
            element: document.body,
            engine: iEngine,
            options: {
            width: 800,
            height: 400,
            wireframes: false,
            background: "white"
            }
         });
         const boxA = Bodies.rectangle(400, 200, 80, 80);
         const ballA = Bodies.circle(380, 100, 40);
         const ballB = Bodies.circle(460, 10, 40);
         const ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });
         Composite.add(iEngine.world, [boxA, ballA, ballB, ground]);
         Render.run(iRender);
         Runner.run(iRunner, iEngine);
         // STOP
         Engine.clear(iEngine)
         // World.clear(iWorld)
         Render.stop(iRender)
         </script>
      </body>

   TypeScript 环境下使用 matter.js：

   *  创建 npm 项目， ``npm init``；
   *  安装 TypeScirpt 编译器， ``npm install -g tsc``；
   *  安装依赖模块， ``npm install matter-js``；
   *  安装 matter.js 类型声明模块， ``npm install --save @types/matter-js``；
   *  添加类型声明模块目录到 tsconfig.json， ``"typeRoots": [ "node_modules/@types" ]``；
   *  在脚本中引用模块 ``import * as Matter from 'matter-js'``；

   如果直接将 matter.js 脚本拷贝到项目中，并通过 import 语句导入时，会使得 LSP 服务无法正确
   提供智能的类型信息提示。如果项目手动配置 ``tsc`` 构建（转译） TypeScript 脚本，那么引入依赖
   模块，也需要手动处理 node_modules 目录下的依赖模块的输出脚本。

   注意，import 语句导入的是 ``matter-js`` 模块，但是这个模块的输出文件是 ``matter.js``。
   手动配置 ``tsc`` 编译 TypeScript 项目，或者 tsconfig.json 中配置了 ``exclude`` 排除
   了依赖模块目录，将会因为模块与脚本文件名不一致导致程序运行错误：

      Error: module 'matter-js.js' is not defined, require args is 'matter-js'

   ``tsc`` 默认会编译项目中的所有 TypeScript 文件，包括 node_modules 目录中的文件。可以
   使用 ``include`` 配置包含特定的依赖模块，它会处理指定模块目录下的文件，也可以指定具体文件，
   文件目录结构将原样输出到 ``outDir`` 指定的输出目录中：

   .. code::json

      {
         "include": [
            "./**/*.ts",
            "node_modules/matter-js/build/matter.js"
         ],
         "exclude": [
            "node_modules"
         ]
      }

   文件列表可以使用 glob 匹配模式列表，支持的 glob 通配符有：

      *  ``*``：匹配 0 个或多个字符（不包括目录分隔符）。
      *  ``?``：匹配一个任意字符（不包括目录分隔符）。
      *  ``**/``：递归匹配任意子目录。

   现在 Linux Shell 和编程还在使用 glob 这个古老的 UNIX 程序，它用来匹配路径文件名，glob
   模式匹配跟正则表达式不太一样，要简单一些，这种匹配也叫做通配符匹配（wildcard matching）。

   这些工作通常由 Webpack 之类的模块打包工具处理的，如果手动处理就需要额外的项目配置。不使用打包
   工具时，如果处理 ``import`` 语句导入的 node_modules 目录下的依赖模块呢？或者说，Webpack
   这类工具又是如何处理 ``import`` 语句中导入的 node_modules 模块呢？

   Webpack 的模拟解释器可以使用模块路径别名，resolve.alias，也就是模块名到模块路径的映射关系，通过
   这个映射表，就可以解决 ``import`` 语言导入的命名模块对应的 node_modules 子目录。TypeScript
   项目也可以通过 tsconfig.json 配置路径别名：

   .. code::json

      {
      "compilerOptions": {
         "baseUrl": "./src",
         "paths": {
            "@modules/*": ["rest/modules/*"],
            "@services/*": ["services/*"]，
            "@node": ["node_modules/*"] 
         }
      }

   注意，路径映射的是一个路径列表，并且，应该使用相对路径。否则就应该和 ``baseUrl`` 配合使用，
   比如，路径使用文件夹名称开头或者使用斜杠开头。

   虽然 TypeScript 编译器可以正常处理 ``paths`` 中配置的路径别名，但是并不会改写生成脚本文件
   中的 ``import`` 路径，转译后的 JavaScript 代码仍然不能直接运行。因此需要额外的处理。
   
   
   现有解决方案有二：

   *  使用 tsc-alias，适用于修改 ``tsc`` 转译后的代码，更正 ``import`` 路径；
   *  使用 module-alias，适用于 Node 执行的程序；

   如果只是想要让 LSP 提供智能类型提示，还有一种讨巧的方案，同样按前面的 matter-js 物理引擎为例，
   按前面提示的步骤安装好 matter.js 依赖库及其类型声明模块，将且将模块的主脚本文件 ``matter.js``
   复制一份到项目的源代码目录下，但是脚本文件名保持和模块名称一致，即改名为 ``matter-js.js``。
   然后，按以下内容配置 tsconfig.json 将此脚本包含到待处理列表。程序中就按通常的语句导入模块，
   ``import * as Matter from 'matter-js'``，这样在执行 ``tsc`` 编译时，就会将依赖的模块
   一并输出到 ``outDir`` 目录中。

   .. code::json

      {
         "include": [
            "./**/*.ts",
            "./**/matter-js.js"
         ],
         "exclude": [
            "node_modules"
         ]
      }

   多个依赖模块还可以使用集中的脚本管理，即在一个脚本中将这些依赖模块导入后，再导出供其它脚本引用。
   这样处理的好处就是不必使用路径别名，不需要后续处理就可以运行转译后的脚本，非常适合在微信小游戏
   项目中使用。这种方式下，脚本无论是否是压缩后的， ``tsc`` 还是会重新处理脚本文件，如果不希望脚本
   被再次处理，可以使用微信开发者工具提供的 ``编译前预置命令``（自定义预处理），直接使用拷贝命令。

   tsc-alias 配置参考如下：

   .. code::bash

      # https://www.npmjs.com/package/tsc-alias
      # https://github.com/justkey007/tsc-alias
      # First, install tsc-alias as devDependency using npm.
      npm install -g tsc-alias
      npm install --save-dev tsc-alias

      # Add it to your build scripts in package.json
      "scripts": {
         "build": "tsc --project tsconfig.json && tsc-alias -p tsconfig.json",
      }
      # ================ OR ===================
      "scripts": {
         "build": "tsc && tsc-alias",
         "build:watch": "tsc && (concurrently \"tsc -w\" \"tsc-alias -w\")"
      }
      
      # Configuration via tsconfig.json Example
      {
         "compilerOptions": {
            ...
         },
         "tsc-alias": {
            "verbose": false,
            "resolveFullPaths": true,
            "replacers": {
               "exampleReplacer": {
               "enabled": true,
               "file": "./exampleReplacer.js"
               },
               "otherReplacer": {
               "enabled": true,
               "file": "./otherReplacer.js"
               }
            },
            "fileExtensions": {
               "inputGlob": "{js,jsx,mjs}",
               "outputCheck": ["js", "json", "jsx", "mjs"]
            }
         }
      }
   
   除了命令行中直接执行 ``tsc-alias`` 或者 ``npm exec tsc-alias``，还可以在 tsconfig.json
   配置路径映射（paths）替换脚本程序（Replacers），这样就会在执行。

   ``module-alias`` 模块，它通过覆写 Node 全局对象 ``Module`` 上的方法来实现路径别名的转换，
   简单来说就是通过拦截 Node 模块对象的 ``_resolveFilename`` 方法，进行路径别名的转换处理后，
   再钭真实的脚本文件路径传回给模块对象的原生方法。

   module-alias 模块提供两种路径别名配置方式：

   *  将路径别名配置在 package.json 文件中；
   *  通过 API 接口进行处理，addAlias、addAliases、addPath，这种方式适合和 Webpack 插件搭配使用；

   .. code::bash

      # https://www.npmjs.com/package/module-alias
      # https://github.com/ilearnio/module-alias
      npm i --save module-alias

      # config with package.json
      "_moduleAliases": {
         "@": "./src",
         "@deep": "src/some/deep",
         "@wildcard": "src/several"
      }

      # config with API
      moduleAlias.addAliases({
         '@'  : __dirname + './src',
      });

      # use module alias in script file
      require(module-alias/register)
      const userModule = require("@deep/module");

   一般在不需要打包处理的 Node 项目中使用 module-alias，一般 TypeScript 转译过程不含打包处理。
   但是在项目中使用了多层代码组织方式，monorepo 方式，最外层有全局的 package.json, 内层有依赖
   模块的 package.json，这种 monorepo 代码组织方式中，module-alias 无法正常解析在 package.json
   中配置的路径别名，需要特别处理。官方文档对 ``module-alias/register`` 的使用有一段说明：

   .. Note::

      **Using within another NPM package**
      You can use ``module-alias`` within another NPM package, however there are 
      a few things to take into consideration.

      *  As the aliases are global, you should make sure your aliases are unique, 
         to avoid conflicts with end-user code, or with other libraries using 
         module-alias. For example, you could prefix your aliases with '@my-lib/', 
         and then use ``require('@my-lib/deep')``.

      *  The internal "register" mechanism may not work, you should not rely on 
         ``require('module-alias/register')`` for automatic detection of 
         ``package.json`` location (where you defined your aliases), as it tries 
         to find ``package.json`` in either the current working directory of your 
         node process, or two levels down from ``node_modules/module-alias``. 
         It is extremely likely that this is end-user code. So, instead, your 
         should either register aliases manually with ``moduleAlias.addAlias``, 
         or using something like ``require('module-alias')(__dirname)``.

   模块的 ``init`` 方法中，candidatePackagePaths 变量记录备选的模块目录，从中读取配置文件。
   没有给 base 路径参数时，module-alias 默认会优先从深层子目录下寻找 package.json 配置文件，
   一般都会让当前目录的优先级比较高才比较符合正常逻辑，因此导致加载路径别名配置可能不是当前目录下的，
   从而导致找不到路径别名配置而出错。

   参考官方示范： https://vscode.dev/github/Kehrlann/module-alias-library
   先执行 ``npm install`` 安装依赖模块，包括 module-alias，然后执行 ``node index.js``
   运行示范程序，检查路径别名的使用效果。

   .. code::bash

      ./
      ├── index.js    
      ├── LICENSE     
      ├── node_modules
      │   ├── module-alias
      │   │   ├── index.js    
      │   │   ├── LICENSE     
      │   │   ├── package.json
      │   │   ├── README.md
      │   │   └── register.js
      │   └── module-alias-nested-library
      │       ├── index.js
      │       ├── package.json
      │       └── src
      │           └── some
      │               └── deep
      │                   └── module.js
      ├── package.json
      ├── package-lock.json
      ├── README.md
      └── src

      ./package.json

      {
         "name": "module-alias-nested-library",
         "version": "1.0.0",
         "main": "index.js",
         "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
         },
         "keywords": [],
         "author": "",
         "license": "ISC",
         "dependencies": {
            "module-alias": "^2.2.2",
            "module-alias-nested-library": "1.0.0"
         },
         "_moduleAliases": {
            "@deep": "src/some/deep",
            "@wildcard": "src/several"
         }
      }

      ./index.js

      require("module-alias/register");
      console.log("Hello !");
      console.log("");

      console.log("---");
      console.log("Using module-alias from end-user code ...");
      const userModule = require("@deep/module");
      console.log(userModule.message);
      ...


   微信小程序逻辑层的 JavaScript 代码运行在 NW.js 环境中，视图层是由 Chromium Webview 渲染。
   也就是说组件（view）在视图层中渲染，一个页面对应一个 webview。更好体验，小程序使用渲染线程、
   脚本线程分开执行的构架设计。业务逻辑（App service）运行在同一个 JSCore 线程中，iOS 系统
   使用 JavaScriptCore 解释器，Android 系统使用 X5 JSCore，开发者工具中使用 nwjs。
   视图层、逻辑层通过系统层的 JSBridage 进行通信，逻辑层把数据变化通知到视图层，触发页面更新。

   微信小游戏项目支持 JavaScript/TypeScript 脚本语言开发，项目配置（project.config.json）,
   中默认的编译插件配置 ``useCompilerPlugins: false`` 修改为以下内容启用 TypeScript 脚本，
   目前支持编译插件有 typescript、less、sass：

   .. code::json

      {
         "miniprogramRoot": ".",
         "setting": {
            "_useCompilerPlugins": false,
            "useCompilerPlugins": [ "typescript", "less" ]
         },
         "compileType": "game",
      }

   虽然，官方文档上明说开发者工具 1.05.2109101 开始，优化工具内置的编译模块，支持编译插件来扩展
   编译功能。当然，应该包括 TypeScript 编译的支持。但是实际上，直接修改配置后，编译时会提示
   ``getGameJSON`` 未实现的错误，也就是说并没有做好小游戏编译扩展支持。
   
   .. code::

      Error: getGameJSON not implemented
         at SummerCompiler.getGameJSON (C:\minigame\code\package.nw\js\common\compiler\summer\devtool.js:2:12866)

      VM1770 WAGame.js:1 Error: module 'game.js' is not defined, require args is 'game.js'
         at E (VM1781 WAGameSubContext.js:1)
         at <anonymous>:1:1
         at doWhenAllScriptLoaded (game.js:36)
         at HTMLScriptElement.scriptLoaded (game.js:51)
         at HTMLScriptElement.script.onload (game.js:59)

      ideVersion: 1.05.2204264
      osType: win32-x64
      time: 2024-07-06 08:39:54

   小程序项目可以直接使用 TypeScript 基础模块创建项目。虽然，小游戏和小程序有些许区别，增加了
   小游戏引擎构架，但是很内容是共通的，其中包括大量的微信 API。项目配置也有大量通用配置，比如
   源代码根目录 ``miniprogramRoot``，修改这个路径会影响资源的定位，在创建 ``Audio`` 或者
   ``Image`` 对象时，就需要相应改变资源路径。资源文件需要在此路径下，默认源代码目录是项目根目录。
   参考文档： `项目配置 <https://developers.weixin.qq.com/minigame/dev/devtools/projectconfig.html>`__

   项目配置文件中 ``compileType`` 指示了项目编译类型，不同类型的应用，入口脚本、文档也有所差别，
   小游戏项目默认的入口文件是 ``game.js``：

   =========== ==================== ==================
   minigame	   当前为普通小游戏项目 game.js, game.json
   miniprogram	当前为普通小程序项目 app.js, app.json, app.wxss
   gamePlugin	当前为小游戏插件项目 ${pluginRoot}/plugin.json
   plugin	   当前为小程序插件项目 ${pluginRoot}/plugin.json
   =========== ==================== ==================

   直接修改 ``compileType`` 并不能改变项目类型，项目类型还与直接绑定的 ``appid`` 相关。

   根本上说，TypeScript 项目只是增加了一层代码转译过程：TypeScript 代码经过 ``tsc`` 或者 
   ``babel`` 转译。项目需要 安装 npm 支持，通过配置 ``编译前预置命令``（自定义预处理）运行 
   ``tsc`` 转译代码到 js 文件。

   .. code::json

      {
         "description": "项目配置文件 (project.config.json)。",
         ...
         "scripts": {
            "beforeCompile": "npm run build",
            "beforePreview": "TODO",
            "beforeUpload": "TODO"
         },
         "condition": {}
      }

   项目设置操作：Details -> Local Settings，勾选 Enable Custom Processing Commands。
   为了配合以上构建任务，NPM 项目 package.json 配置文件需要提供相应的 scripts 配置，参考如下：

   .. code::json

      {
         "name": "hi_minigame",
         "version": "1.0.0",
         "description": "...",
         "main": "game.ts",
         "scripts": {
            "build": "tsc",
            "test": "echo \"Error: no test specified\" && exit 1"
         },
         "author": "",
         "license": "ISC",
         "dependencies": {
            "@types/matter-js": "^0.19.6",
            "matter-js": "^0.20.0"
         }
      }

   注意，在热更新编译（保存文件引起的编译动作）并不会执行自定义预处理命令。只需对入口代码文件执行
   编译， ``tsc`` 就会根据代码的依赖关系，自动处理其它 TypeScript 代码文件。这样的配置好处是
   简易使用，麻烦的是编译生成的 JavaScript 脚本文件比较混乱，需要修改 tsconfig.json 配置文件
   中的 ``outDir`` 来改变生成文件的输出路径。出于这个目的，就不能直接通过命令行给 ``tsc`` 命令
   指定编译的脚本文件，因为这样会导致配置的 ``outDir`` 选项被忽略。使用 NPM 安装 TypeScript
   编译器后，使用 ``tsc --init`` 命令创建默认的 tsconfig.json 配置文件，根据需要适当修改：

   .. code::json

      {
         "compilerOptions": {
            /* Visit https://aka.ms/tsconfig to read more about this file */

            "module": "CommonJS",
            "target": "ES2020",
            "esModuleInterop": true,
            "strict": true,

            "lib": ["ES2020", "DOM"],
            "outDir": "./emit",

            "strictNullChecks": true,
            "noImplicitAny": true,
            "allowJs": true,
            "allowSyntheticDefaultImports": true,
            "experimentalDecorators": true,
            "noImplicitThis": true,
            "noImplicitReturns": true,
            "alwaysStrict": true,
            "noFallthroughCasesInSwitch": true,
            "noUnusedLocals": true,
            "noUnusedParameters": true,
            "strictPropertyInitialization": true,
            "typeRoots": [ "node_modules/@types", "./typings" ]
         },
         "include": [
            "./**/*.ts"
         ],
         "exclude": [
            "node_modules"
         ]
      }

   使用 ``npm init`` 初始化 package.json 配置文件，如果需要手动构建 npm 包，执行：Tools -> Build npm。
   需要参与构建的 npm n包需要在 `miniprogramRoot` 目录内，或配置 project.config.json 文件
   内的 `packNpmManually` 和 `packNpmRelationList`。

   小程序中使用 npm 包之前，需要先构建 npm 包，或者编译时，勾选“使用 npm 模块”选项进行构建。
   构建完成后即可使用 npm 包。脚本中引入 npm 包或者 app.json 配置使用 npm 包中的自定义组件，
   语法参考如下：

   .. code::js

      const myPackage = require('packageName')
      const packageOther = require('packageName/other')

      {
         "usingComponents": {
            "myPackage": "packageName",
            "package-other": "packageName/other"
         }
      }


   为了提高 Web 性能，可以使用 WebAssembly_ 技术。微信小程序支持 WXWebAssembly_，类似于
   Web 标准 WebAssembly_，能够在一定程度上提高小程序的性能。使用 emscripten_ 编译器将 C++
   代码编译为 wasm 字节码文件，实现 Web 脚本的高效运行。

   *  从基础库 v2.13.0 开始，微信小程序可以在全局访问、使用 WXWebAssembly_ 对象。
   *  从基础库 v2.15.0 开始，微信小程序支持在 Worker 内使用 WXWebAssembly_

   小游戏框架内集成了 `Nvidia PhysX`_，并采用简单易用的组件化设计，为游戏添加逼真且高性能的物理效果。
   游戏脚本中可以通过 ``game.physicsSystem()`` 来获取到物理系统的全局实例。

   微信小游戏不同于 Web 环境，基于 HTML5 的游戏引擎依赖浏览器提供的 BOM 和 DOM API。如果开发
   微信 3D 小游戏则需要适配的引擎。比如，创建画布，就需要调用 wx API：

   .. code::js

      let canvas = wx.createCanvas()
      let context = canvas.getContext('2d')

   .. figure:: https://res.wx.qq.com/wxdoc/dist/assets/img/native-engine-webgl-transform-summary.80356ab3.png

      适配到微信小游戏，游戏开发的流程及运行时支持如下：
      
      开发阶段：对接平台能力
      导出阶段：使用转换打包工具，直接转换成小游戏包
      运行阶段：微信侧提供 WebAssembly 基础能力及底层接口支持

   目前，Cocos、Egret、Laya 等已经完成自身引擎及其工具对小游戏的适配和支持，Unity WebGL 导出
   也提供微信小游戏适配，官方文档对接说明：

   *  Cocos：https://docs.cocos.com/creator/manual/zh/editor/publish/publish-wechatgame.html
   *  Egret：https://docs.egret.com/engine/docs/publish/minigame/wechat/tutorial
   *  LayaBox：https://ldc.layabox.com/doc/?nav=zh-as-5-0-1

   微信开发者工具是基于 VS Code 定制开发环境，在创建项目时，选择 ``小游戏框架 - 3D`` 模板，
   它默认包含了 Cocos 引擎，可以为微信开发者工具提供 2D/3D 视图。如果下载的是小程序开发工具，
   可能会卡在“初始化小游戏容器”，左下角显示“初始化engineWebview”。开发者工具现有“小程序版本”
   和“小游戏版本”，应该使用小游戏版开发工具。项目模板可以在“物理系统”或“构架”文档页面中下载。

   *  https://developers.weixin.qq.com/minigame/dev/guide/framework/physics/
   *  https://developers.weixin.qq.com/minigame/dev/guide/framework/basic.html

   LayaAirIDE 是 LayaAir 引擎的集成开发环境，基于 VS Code 定制，但是定制水平相当差劲，将一个
   原有 100 分的 VS Code 定制变成一坨工具，微信开发者工具也同样。开发者可以采用 LayaAirIDE
   创建微信小游戏项目。LayaAir 引擎与示例项目，UI、动画等可视化编辑，项目代码编写与管理等开发工具。

.. _WebAssembly: https://webassembly.org/
.. _WXWebAssembly: https://developers.weixin.qq.com/miniprogram/dev/framework/performance/wasm.html
.. _emscripten: https://github.com/emscripten-core/emscripten/wiki
.. _Nvidia PhysX: https://developers.weixin.qq.com/minigame/dev/guide/framework/physics/


About
=====

   `About <https://box2d.org/about/>`__

   Hello! I'm Erin Catto. I work in the video game industry. I also created
   Box2D, a 2D physics engine for games.

   I use this blog to give updates on Box2D and write about game physics and
   programming.

   -  You can find Box2D on `GitHub <https://github.com/erincatto>`__
   -  There is a `Discord Server <https://discord.gg/NKYgCBP>`__
   -  And there is a `Subreddit <https://reddit.com/r/box2d>`__

   This site was created using `Hugo <https://gohugo.io/>`__ and a modified
   version of `hello friend ng <https://themes.gohugo.io/hugo-theme-hello-friend-ng/>`__.

   © 2024 `Erin Catto <https://box2d.org>`__


Blogs
=====

   .. code::bash

      curl https://box2d.org/posts/ \
      | pandoc -trst -rhtml --wrap=auto --column=90 --list-table=false


   2024

   -  `Solver2D Feb 5 <https://box2d.org/posts/2024/02/solver2d/>`__

   2023

   -  `Simulation Islands Oct 8 <https://box2d.org/posts/2023/10/simulation-islands/>`__
   -  `Starting Box2D 3.0 Jan 15 <https://box2d.org/posts/2023/01/starting-box2d-3.0/>`__

   2020

   -  `Ghost Collisions Jun 21 <https://box2d.org/posts/2020/06/ghost-collisions/>`__
   -  `Stuck Inside Apr 12 <https://box2d.org/posts/2020/04/stuck-inside/>`__
   -  `Predictive Joint Limits Apr 3 <https://box2d.org/posts/2020/04/predictive-joint-limits/>`__

   2018

   -  `How to Transform a Plane Sep 5 <https://box2d.org/posts/2018/09/how-to-transform-a-plane/>`__
   -  `Box2D Subreddit Jul 7 <https://box2d.org/posts/2018/07/box2d-subreddit/>`__
   -  `Box2D Discord Server Jun 24 <https://box2d.org/posts/2018/06/box2d-discord-server/>`__

   2014

   -  `Balancing Dynamic Trees Aug 7 <https://box2d.org/posts/2014/08/balancing-dynamic-trees/>`__
   -  `Computing a Basis Feb 3 <https://box2d.org/posts/2014/02/computing-a-basis/>`__
   -  `Troublesome Triangle Jan 31 <https://box2d.org/posts/2014/01/troublesome-triangle/>`__

   2012

   -  `m128 Aug 31 <https://box2d.org/posts/2012/08/m128/>`__
   -  `Shape Coordinates Mar 25 <https://box2d.org/posts/2012/03/shape-coordinates/>`__

   2011

   -  `Pixels Dec 17 <https://box2d.org/posts/2011/12/pixels/>`__


Publications
============

   .. code::bash

      curl https://box2d.org/Publications/ \
      | pandoc -trst -rhtml --wrap=auto --column=90 --list-table=false



Box2D v3 Benchmarks

   *  `Benchmarks <https://box2d.org/files/benchmark_results.html>`__


Dynamic Bounding Volume Hierarchies — GDC 2019

   *  `GDC Slides <https://box2d.org/files/ErinCatto_DynamicBVH_GDC2019.pdf>`__
   *  `Full Slides <https://box2d.org/files/ErinCatto_DynamicBVH_Full.pdf>`__


Numerical Methods — GDC 2015

   *  `Slides <https://box2d.org/files/ErinCatto_NumericalMethods_GDC2015.pdf>`__


Understanding Constraints — GDC 2014

   *  `Slides <https://box2d.org/files/ErinCatto_UnderstandingConstraints_GDC2014.pdf>`__
   *  `Matlab Source <https://box2d.org/files/ErinCatto_UnderstandingConstraints_Matlab.zip>`__
   *  `YouTube <https://www.youtube.com/watch?v=SHinxAhv1ZE>`__


Continuous Collision — GDC 2013

   *  `Slides <https://box2d.org/files/ErinCatto_ContinuousCollision_GDC2013.pdf>`__
   *  `YouTube <https://www.youtube.com/watch?v=7_nKOET6zwI>`__


Ragdolls — GDC 2012

   *  `Slides <https://box2d.org/files/ErinCatto_Ragdolls_GDC2012.pdf>`__


Soft Constraints — GDC 2011

   *  `Slides <https://box2d.org/files/ErinCatto_SoftConstraints_GDC2011.pdf>`__


Computing Distance using GJK — GDC 2010

   *  `Slides <https://box2d.org/files/ErinCatto_GJK_GDC2010.pdf>`__
   *  `Source <https://box2d.org/files/ErinCatto_GJK_Source.zip>`__


Numerical Integration — GDC 2009

   *  `Slides <https://box2d.org/files/ErinCatto_NumericalIntegration_GDC2009.pdf>`__
   *  `Source <https://box2d.org/files/ErinCatto_NumericalIntegration_Source.zip>`__


Modeling and Solving Constraints — GDC 2009

   *  `Slides <https://box2d.org/files/ErinCatto_ModelingAndSolvingConstraints_GDC2009.pdf>`__


Contact Manifolds — GDC 2007

   *  `Slides <https://box2d.org/files/ErinCatto_ContactManifolds_GDC2007.pdf>`__


Sequential Impulses — GDC 2006

   *  `Slides <https://box2d.org/files/ErinCatto_SequentialImpulses_GDC2006.pdf>`__
   *  `Box2D-Lite <https://github.com/erincatto/box2d-lite>`__


Iterative Dynamics — GDC 2005

   *  `Slides <https://box2d.org/files/ErinCatto_IterativeDynamicsSlides_GDC2005.pdf>`__
   *  `Paper <https://box2d.org/files/ErinCatto_IterativeDynamics_GDC2005.pdf>`__


Buoyancy Demo — Game Programming Gems 6

   *  `Source <https://box2d.org/files/ErinCatto_Buoyancy.zip>`__



⭕ Box2D 3.x
===============

`Box2D version 3.0 alpha <https://github.com/erincatto/box2c>`__

TOC

*  `Overview <https://box2d.org/documentation_v3/index.html>`__
*  `Hello Box2D <https://box2d.org/documentation_v3/hello.html>`__
*  `Samples <https://box2d.org/documentation_v3/samples.html>`__
*  `Foundation <https://box2d.org/documentation_v3/md_foundation.html>`__
*  `Collision Module <https://box2d.org/documentation_v3/md_collision.html>`__
*  `Simulation <https://box2d.org/documentation_v3/md_simulation.html>`__
*  `Loose Ends <https://box2d.org/documentation_v3/md_loose__ends.html>`__
*  `Further Reading <https://box2d.org/documentation_v3/md_reading.html>`__
*  `FAQ <https://box2d.org/documentation_v3/md_faq.html>`__
*  `Migration Guide <https://box2d.org/documentation_v3/md_migration.html>`__
*  `References <https://box2d.org/documentation_v3/topics.html>`__
*  `Data Structures <https://box2d.org/documentation_v3/annotated.html>`__
*  `Files <https://box2d.org/documentation_v3/files.html>`__

👊 Overview
===========

   Box2D is a 2D rigid body simulation library for games. Programmers can
   use it in their games to make objects move in realistic ways and make
   the game world more interactive. From the game engine's point of view,
   a physics engine is just a system for procedural animation.

   Box2D is written in portable C11. Most of the types defined in the
   engine begin with the b2 prefix. Hopefully this is sufficient to avoid
   name clashing with your application.


Prerequisites
-------------

   In this manual I'll assume you are familiar with basic physics
   concepts, such as mass, force, torque, and impulses. If not, please
   first consult Google search and Wikipedia.

   Box2D was created as part of a physics tutorial at the Game Developer
   Conference. You can get these tutorials from the publications section of
   `box2d.org <https://box2d.org/publications/>`__.

   Since Box2D is written in C, you are expected to be experienced in C
   programming. Box2D should not be your first C programming project! You
   should be comfortable with compiling, linking, and debugging.

   .. Caution::

      **Caution**:
      Box2D should not be your first C project. Please learn C
      programming, compiling, linking, and debugging before working with
      Box2D. There are many resources for this online.


Scope
-----

   This manual covers the majority of the Box2D API. However, not every
   aspect is covered. Please look at the Reference section and samples
   application included with Box2D to learn more.

   This manual is only updated with new releases. The latest version of
   Box2D may be out of sync with this manual.


Feedback and Bugs
-----------------

   Please file bugs and feature requests here:
   `Box2D Issues <https://github.com/erincatto/box2d/issues>`__

   You can help to ensure your issue gets fixed if you provide sufficient
   detail. A testbed example that reproduces the problem is ideal. You can
   read about the testbed later in this document.

   There is also a `Discord server <https://discord.gg/NKYgCBP>`__ and a
   `subreddit <https://reddit.com/r/box2d>`__ for Box2D.


Core Concepts
-------------

   Box2D works with several fundamental concepts and objects. I briefly
   define these objects here and more details are given later in this
   document.


rigid body

   A chunk of matter that is so strong that the distance between any two
   bits of matter on the chunk is constant. They are hard like a diamond.
   In the following discussion I use *body* interchangeably with rigid body.


shape

   A shape binds collision geometry to a body and adds material properties such as
   density, friction, and restitution. A shape puts collision geometry into the
   collision system (broad-phase) so that it can collide with other shapes.


constraint

   A constraint is a physical connection that removes degrees of freedom
   from bodies. A 2D body has 3 degrees of freedom (two translation
   coordinates and one rotation coordinate). If I take a body and pin it
   to the wall (like a pendulum) I have constrained the body to the wall.
   At this point the body can only rotate about the pin, so the constraint
   has removed 2 degrees of freedom.


contact constraint

   A special constraint designed to prevent penetration of rigid bodies and
   to simulate friction and restitution. You do not create contact
   constraints; they are created automatically by Box2D.


joint constraint

   This is a constraint used to hold two or more bodies together. Box2D
   supports several joint types: revolute, prismatic, distance, and more.
   Joints may have limits, motors, and/or springs.


joint limit

   A joint limit restricts the range of motion of a joint. For example, the
   human elbow only allows a certain range of angles.


joint motor

   A joint motor drives the motion of the connected bodies according to the
   joint's degrees of freedom. For example, you can use a motor to drive
   the rotation of an elbow. Motors have a target speed and a maximum force
   or torque. The simulation will apply the force or torque required to
   achieve the desired speed.


joint spring

   A joint spring has a stiffness and damping. In Box2D spring stiffness is
   expressed in terms or Hertz or cycles per second. This lets you configure how
   quickly a spring reacts regardless of the body masses. Joint springs also
   have a damping ratio to let you specify how quickly the spring will come to
   rest.


world

   A physics world is a collection of bodies, shapes, joints, and contacts
   that interact together. Box2D supports the creation of multiple worlds which
   are completely independent.


solver

   The physics world has a solver that is used to advance time and to
   resolve contact and joint constraints. The Box2D solver is a high
   performance sequential solver that operates in order N time, where N is
   the number of constraints.


continuous collision

   The solver advances bodies in time using discrete time steps. Without
   intervention this can lead to tunneling.

   .. figure:: https://box2d.org/documentation_v3/tunneling1.svg
      
      ![Tunneling Effect](images/tunneling1.svg)

   Box2D contains specialized algorithms to deal with tunneling. First, the
   collision algorithms can interpolate the motion of two bodies to find
   the first time of impact (TOI). Second, speculative collision is used to create
   contact constraints between bodies before they touch.


events

   World simulation leads to the creation of events that are available at the end
   of the time step:

   - body movement events
   - contact begin and end events
   - contact hit events

   These events allow your application to react to changes in the simulation.


Modules
-------

   Box2D's primary purpose is to provide rigid body simulation. However,
   there are math and collision features that may be useful apart from the
   rigid body simulation. These are provided in the `include` directory. Anything
   in the `include` directory is considered public, while everything in the `src`
   directory is consider internal.

   Public features are supported and you can get help with these on the Discord
   server. Using internal code directly is not supported.


Units
-----

   Box2D works with floating point numbers and tolerances have to be used
   to make Box2D perform well. These tolerances have been tuned to work
   well with meters-kilogram-second (MKS) units. In particular, Box2D has
   been tuned to work well with moving shapes between 0.1 and 10 meters. So
   this means objects between soup cans and buses in size should work well.
   Static shapes may be up to 50 meters long without trouble. If you have a
   large world, you should split it up into multiple static bodies.

   Being a 2D physics engine, it is tempting to use pixels as your units.
   Unfortunately this will lead to a poor simulation and possibly weird
   behavior. An object of length 200 pixels would be seen by Box2D as the
   size of a 45 story building.

   .. Caution::

      **Caution**: 
      Box2D is tuned for MKS units. Keep the size of moving objects larger 
      than 1cm. You'll need to use some scaling system when you render your 
      environment and actors. The Box2D samples application does this by 
      using an OpenGL viewport transform. Do not use pixel units unless you 
      understand the implications.

   It is best to think of Box2D bodies as moving billboards upon which you
   attach your artwork. The billboard may move in a unit system of meters,
   but you can convert that to pixel coordinates with a simple scaling
   factor. You can then use those pixel coordinates to place your sprites,
   etc. You can also account for flipped coordinate axes.

   Another limitation to consider is overall world size. If your world units
   become larger than 12 kilometers or so, then the lost precision can affect
   stability.

   .. Caution::

      **Caution**: 
      Box2D works best with world sizes less than 12 kilometers. If you are
      careful with your simulation tuning, this can be pushed up to around 24
      kilometers, which is much larger than most game worlds.

   Box2D uses radians for angles. The body rotation is stored a complex number,
   so when you access the angle of a body, it will be between -π and π radians.

   .. Caution::

      **Caution**:
      Box2D uses radians, not degrees.


Changing the length units
-------------------------

   Advanced users may change the length unit by calling `b2SetLengthUnitsPerMeter()`
   at application startup. If you keep Box2D in a shared library, you will need
   to call this if the shared library is reloaded.

   If you change the length units to pixels you will need to decide how many 
   pixels represent a meter. You will also need to figure out reasonable values 
   for gravity, density, force, and torque.

   One of the benefits of using MKS units for physics simulation is that you
   can use real world values to get reasonable results.

   It is also harder to get support for using Box2D if you change the unit
   system, because values are harder to communicate and may become non-intuitive.


Ids and Definitions
-------------------

   Fast memory management plays a central role in the design of the Box2D
   interface. When you create a world, body, shape or joint, you will receive
   a handle called an *id*. These ids are opaque and are passed to various functions
   to access the underlying data.

   These ids provide some safety. If you use an id after it has been freed you will
   usually get an assertion. All ids support 64k generations of safety. All ids
   also have a corresponding function you can call to check if it is valid.

   When you create a world, body, shape, or joint, you need to provide a definition 
   structure. These definitions contain all the information needed to build the 
   Box2D object. By using this approach I can prevent construction errors, keep 
   the number of function parameters small, provide sensible defaults, and reduce 
   the number of accessors.

   Here is an example of body creation:

   .. code::cpp

      b2BodyDef bodyDef = b2DefaultBodyDef();
      bodyDef.position = (b2Vec2){10.0f, 5.0f};
      b2BodyId myBodyId = b2CreateBody(myWorldId, &bodyDef);

   Notice the body definition is initialize by calling `b2DefaultBodyDef()`. 
   This is needed because C does not have constructors and zero initialization 
   is not suitable for the definitions used in Box2D.

   Also notice that the body definition is a temporary object that is fully 
   copied into the internal body data structures. Definitions should usually 
   be created on the stack as temporaries.

   This is how a body is destroyed:

   .. code::cpp

      b2DestroyBody(myBodyId);
      myBodyId = b2_nullBodyId;

   Notice that the body id is set to null using the constant `b2_nullBodyId`. 
   You should treat ids as opaque data, however you may zero initialize all 
   Box2D ids and they will be considered *null*.

   Shapes are created in a similar way. For example, here is how a box shape is created:

   .. code::cpp

      b2ShapeDef shapeDef = b2DefaultShapeDef();
      shapeDef.friction = 0.42f;
      b2Polygon box = b2MakeBody(0.5f, 0.25f);
      b2ShapeId myShapeId = b2CreateCircleShape(myBodyId, &shapeDef, &box);

   And the shape may be destroyed as follows:

   .. code::cpp

      b2DestroyShape(myShapeId);
      myShapeId = b2_nullShapeId;

   For convenience, Box2D will destroy all shapes on a body when the body is destroyed.
   Therefore, you may not need to store the shape id.


👊 Hello Box2D
==============


   In the distribution of Box2D is a Hello World unit test written in C. The test
   creates a large ground box and a small dynamic box. This code does not
   contain any graphics. All you will see is text output in the console of
   the box's position over time.

   This is a good example of how to get up and running with Box2D.


Creating a World
----------------

   Every Box2D program begins with the creation of a world object.
   The world is the physics hub that manages memory, objects, and simulation.
   The world is represented by an opaque handle called `b2WorldId`.

   It is easy to create a Box2D world. First, I create the world definition:

   .. code::cpp

      b2WorldDef worldDef = b2DefaultWorldDef();

   The world definition is a temporary object that you can create on the stack. 
   The function `b2DefaultWorldDef()` populates the world definition with default
   values. This is necessary because C does not have constructors and zero 
   initialization is not appropriate for `b2WorldDef`.

   Now I configure the world gravity vector. Note that Box2D has no concept of 
   *up* and you may point gravity in any direction you like. Box2D example code 
   uses the positive y-axis as the up direction.

   .. code::cpp

      worldDef.gravity = (b2Vec2){0.0f, -10.0f};

   Now I create the world object.

   .. code::cpp

      b2WorldId worldId = b2CreateWorld(&worldDef);

   The world creation copies all the data it needs out of the world definition, 
   so the world definition is no longer needed.

   So now we have our physics world, let's start adding some stuff to it.


Creating a Ground Box
---------------------

   Bodies are built using the following steps:

   1. Define a body with position, damping, etc.
   2. Use the world id to create the body.
   3. Define shapes with friction, density, etc.
   4. Create shapes on the body.

   For step 1 I create the ground body. For this I need a body definition. 
   With the body definition I specify the initial position of the ground body.

   .. code::cpp

      b2BodyDef groundBodyDef = b2DefaultBodyDef();
      groundBodyDef.position = (b2Vec2){0.0f, -10.0f};

   For step 2 the body definition and the world id are used to create
   the ground body. Again, the definition is fully copied and may leave scope after
   the body is created. Bodies are static by default. Static bodies don't collide
   with other static bodies and are immovable by the simulation.

   .. code::cpp

      b2BodyId groundId = b2CreateBody(worldId, &groundBodyDef);

   Notice that `worldId` is passed by value. Ids are small structures that should
   be passed by value.

   For step 3 I create a ground polygon. I use the `b2MakeBox()` helper function to
   form the ground polygon into a box shape, with the box centered on the
   origin of the parent body.

   .. code::cpp

      b2Polygon groundBox = b2MakeBox(50.0f, 10.0f);

   The `b2MakeBox()` function takes the **half-width** and
   **half-height** (extents). So in this case the ground box is 100
   units wide (x-axis) and 20 units tall (y-axis). Box2D is tuned for
   meters, kilograms, and seconds. So you can consider the extents to be in
   meters. Box2D generally works best when objects are the size of typical
   real world objects. For example, a barrel is about 1 meter tall. Due to
   the limitations of floating point arithmetic, using Box2D to model the
   movement of glaciers or dust particles is not a good idea.

   I'll finish the ground body in step 4 by creating the shape. For this step
   I need to create a shape definition which works fine with the default value.

   .. code::cpp

      b2ShapeDef groundShapeDef = b2DefaultShapeDef();
      b2CreatePolygonShape(groundId, &groundShapeDef, &groundBox);

   Box2D does not keep a reference to the shape data. It copies the data into the internal
   data structures.

   Note that every shape must have a parent body, even shapes that are
   static. You may attach multiple shapes to a single parent body.

   When you attach a shape, the shape's coordinates become local to the body. 
   So when the body moves, so does the shape. A shape's world transform is 
   inherited from the parent body. A shape does not have a transform independent 
   of the body. So we don't move a shape around on the body. Moving or modifying 
   a shape that is on a body is possible with certain functions, but it should 
   not be part of normal simulation. The reason is simple: a body with morphing 
   shapes is not a rigid body, but Box2D is a rigid body engine. Many of the 
   algorithms in Box2D are based on the rigid body model. If this is violated 
   you may get unexpected behavior.


Creating a Dynamic Body
-----------------------

   I can use the same technique to create a dynamic body. The main difference, 
   besides dimensions, is that I must establish the dynamic body's mass properties.

   First I create the body using CreateBody. By default bodies are static,
   so I should set the `b2BodyType` at creation time to make the body
   dynamic. I should also use the body definition to put the body at the
   intended position for simulation. Creating a body then moving it afterwards is
   very inefficient and may cause lag spikes, especially if many bodies are created at
   the origin.

   .. code::cpp

      b2BodyDef bodyDef = b2DefaultBodyDef();
      bodyDef.type = b2_dynamicBody;
      bodyDef.position.Set(0.0f, 4.0f);
      b2BodyId bodyId = b2CreateBody(worldId, &bodyDef);

   .. Caution::

      **Caution**:
      You must set the body type to `b2_dynamicBody` if you want the body to
      move in response to forces (such as gravity).

   Next I create and attach a polygon shape using a shape definition.
   First I create another box shape:

   .. code::cpp

      b2Polygon dynamicBox = b2MakeBox(1.0f, 1.0f);

   Next I create a shape definition for the box. Notice that I set
   density to 1. The default density is 1, so this is unnecessary. Also,
   the friction on the shape is set to 0.3.

   .. code::cpp

      b2ShapeDef shapeDef = b2DefaultShapeDef();
      shapeDef.density = 1.0f;
      shapeDef.friction = 0.3f;

   .. Caution::

      **Caution**:
      A dynamic body should have at least one shape with a non-zero density.
      Otherwise you will get strange behavior.

   Using the shape definition I can now create the shape. This
   automatically updates the mass of the body. You can add as many shapes
   as you like to a body. Each one contributes to the total mass.

   .. code::cpp

      b2CreatePolygonShape(bodyId, &shapeDef, &dynamicBox);

   That's it for initialization. We are now ready to begin simulating.


Simulating the World
--------------------

   I have initialized the ground box and a dynamic box. Now we are
   ready to set Newton loose to do his thing. I just have a couple more
   issues to consider.

   Box2D uses a computational algorithm called an integrator. Integrators
   simulate the physics equations at discrete points of time. This goes
   along with the traditional game loop where we essentially have a flip
   book of movement on the screen. So we need to pick a time step for
   Box2D. Generally physics engines for games like a time step at least as
   fast as 60Hz or 1/60 seconds. You can get away with larger time steps,
   but you will have to be more careful about setting up your simulation.
   It is also not good for the time step to vary from frame to frame. A
   variable time step produces variable results, which makes it difficult
   to debug. So don't tie the time step to your frame rate. Without further ado,
   here is the time step.

   .. code::cpp

      float timeStep = 1.0f / 60.0f;

   In addition to the integrator, Box2D also uses a larger bit of code
   called a constraint solver. The constraint solver solves all the
   constraints in the simulation, one at a time. A single constraint can be
   solved perfectly. However, when Box2D solves one constraint, it slightly
   disrupts other constraints. To get a good solution, Box2D needs to iterate
   over all constraints a number of times.

   Box2D uses sub-stepping as a means of constraint iteration. It lets the
   simulation move forward in time by small amounts and each constraint
   gets a chance to react to the changes.

   The suggested sub-step count for Box2D is 4. You can tune this number
   to your liking, just keep in mind that this has a trade-off between
   performance and accuracy. Using fewer sub-steps increases performance
   but accuracy suffers. Likewise, using more sub-steps decreases performance 
   but improves the quality of your simulation. For this example, I will 
   use 4 sub-steps.

   .. code::cpp

      int subStepCount = 4;

   Note that the time step and the sub-step count are related. As the time-step
   decreases, the size of the sub-steps also decreases. For example, at 60Hz
   time step and 4 sub-steps, the sub-steps operate at 240Hz. With 8 sub-steps
   the sub-step is 480Hz!

   We are now ready to begin the simulation loop. In your game the
   simulation loop can be merged with your game loop. In each pass through
   your game loop you call `b2World_Step()`. Just one call is usually enough,
   depending on your frame rate and your physics time step. I recommend this article
   `Fix Your Timestep! <https://gafferongames.com/post/fix_your_timestep/>`__ to run
   your game simulation at a fixed rate.

   The Hello World test was designed to be simple, so it has no
   graphical output. The code prints out the position and rotation of the
   dynamic body. Here is the simulation loop that simulates 90 time steps
   for a total of 1.5 seconds of simulated time.

   .. code::cpp

      for (int i = 0; i < 90; ++i)
      {
         b2World_Step(worldId, timeStep, subStepCount);
         b2Vec2 position = b2Body_GetPosition(bodyId);
         float angle = b2Body_GetAngle(bodyId);
         printf("%4.2f %4.2f %4.2f\n", position.x, position.y, angle);
      }

   The output shows the box falling and landing on the ground box. Your
   output should look like this:

   .. code::

      0.00 4.00 0.00
      0.00 3.99 0.00
      0.00 3.98 0.00
      ...
      0.00 1.25 0.00
      0.00 1.13 0.00
      0.00 1.01 0.00


Cleanup
-------

   When you are done with the simulation, you should destroy the world.

   .. code::cpp

      b2DestroyWorld(worldId);

   This efficiently destroys all bodies, shapes, and joints in the simulation.


👊 Samples
==========

   Once you have conquered the HelloWorld example, you should start looking at 
   Box2D's samples application. The samples application is a testing framework 
   and demo environment. Here are some of the features:

   - Camera with pan and zoom
   - Mouse dragging of dynamic bodies
   - Many samples in a tree view
   - GUI for selecting samples, parameter tuning, and debug drawing options
   - Pause and single step simulation
   - Multithreading and performance data

   .. figure:: https://box2d.org/documentation_v3/samples.png

      ![Box2D Samples](images/samples.png)

   The samples application has many examples of Box2D usage in the test cases and the
   framework itself. I encourage you to explore and tinker with the samples
   as you learn Box2D.

   Note: the sample application is written using `GLFW <https://www.glfw.org>`__,
   `imgui <https://github.com/ocornut/imgui>`__, and `enkiTS <https://github.com/dougbinks/enkiTS>`__.
   The samples app is not part of the Box2D library. The Box2D library is agnostic about rendering.
   As shown by the HelloWorld example, you don't need a renderer to use Box2D.


👊 Foundation
=============

   Box2D provides minimal base functionality for allocation hooks and vector math. 
   The C interface allows most runtime data and types to be defined internally 
   in the `src` folder.


Assertions

   Box2D will assert on bad input. This includes things like sending in NaN or 
   infinity for values. It will assert if you use negative values for things 
   that should only be positive, such as density.

   Box2D will also assert if an internal bug is detected. For this reason, it 
   is advisable to build Box2D from source. The Box2D library compiles in about 
   a second on my computer.

   You may wish to capture assertions in your application. In this case you 
   can use `b2SetAssertFcn()`. This allows you to override the debugger break 
   and/or perform your own error handling.


Allocation

   Box2D uses memory efficiently and minimizes per frame allocations by pooling 
   memory. The engine quickly adapts to the simulation size. After the first 
   step or two of simulation, there should be no further per frame allocations.

   As bodies, shapes, and joints are created and destroyed, their memory will 
   be recycled. Internally all this data is stored in contiguous arrays. When 
   an object is destroyed, the array element will be marked as empty. And when 
   an object is created it will use empty slots in the array using an efficient 
   free list.

   Once the internal memory pools are initially filled, the only allocations 
   should be for sleeping islands since their data is copied out of the main 
   simulation. Generally, these allocations should be infrequent.

   You can provide a custom allocator using `b2SetAllocator()` and you can get 
   the number of bytes allocated using `b2GetByteCount()`.


Version

   The b2Version structure holds the current version so you can query this
   at run-time using `b2GetVersion()`.

   .. code::cpp

      b2Version version = b2GetVersion();
      printf("Box2D version %d.%d.%d\n", version.major, version.minor, version.patch);


Vector Math

   Box2D includes a small vector math library including types `b2Vec2`, `b2Rot`, 
   `b2Transform`, and `b2AABB`. This has been designed to suit the internal 
   needs of Box2D and the interface. All the members are exposed, so you may 
   use them freely in your application.

   The math library is kept simple to make Box2D easy to port and maintain.


Multithreading

   Box2D has been highly optimized for multithreading. Multithreading is not 
   required and by default Box2D will run single-threaded. If performance is 
   important for your application, you should consider using the multithreading 
   interface.

   Box2D multithreading has been designed to work with your application's task 
   system. Box2D does not create threads. The Samples application shows how to 
   do this using the open source tasks system `enkiTS <https://github.com/dougbinks/enkiTS>`__.

   Multithreading is established for each Box2D world you create and must be 
   hooked up to the world definition. See `b2TaskCallback()`, `b2EnqueueTaskCallback()`,
   and `b2FinishTaskCallback()` for more details. Also see `b2WorldDef::workerCount`, 
   `b2WorldDef::enqueueTask`, and `b2WorldDef::finishTask`.

   The multithreading design for Box2D is focused on `data parallelism <https://en.wikipedia.org/wiki/Data_parallelism>`__. 
   The idea is to use multiple cores to complete the world simulation as fast 
   as possible. Box2D multithreading is not designed for `task parallelism <https://en.wikipedia.org/wiki/Task_parallelism>`__. 
   Often in games you may have a render thread and an audio thread that do 
   work in isolation from the main thread. Those are examples of task parallelism.

   So when you design your game loop, you should let Box2D *go wide* and use
   multiple cores to finish its work quickly, without other threads trying to 
   interact with the Box2D world.

   .. Caution::

      **Caution**:
      While Box2D is designed for multithreading, its interface is *not* thread-safe. 
      Modifying the Box2D world during simulation or from multiple threads will 
      result in a `race condition <https://en.wikipedia.org/wiki/Race_condition>`__.

   It *is safe* to do ray-casts, shape-casts, and overlap tests from multiple 
   threads outside of `b2World_Step()`. Generally, any read-only operation is 
   safe to do multithreaded outside of `b2World_Step()`. This can be very useful 
   if you have multithreaded game logic.


👊 Collision Module
===================

   Box2D provides geometric types and functions. These include:

   - raw geometry: circles, capsules, segments, and convex polygons
   - convex hull and related helper functions
   - mass and bounding box computation
   - local ray and shape casts
   - contact manifolds
   - shape distance
   - generic shape cast
   - time of impact
   - dynamic bounding volume tree

   The collision interface is designed to be usable outside of rigid body simulation.
   For example, you can use the dynamic tree for other aspects of your game besides physics.

   However, the main purpose of Box2D is to be a rigid body physics engine. 
   So the collision interface only contains features that are also useful in
   the physics simulation.


Shape Primitives
----------------

   Shape primitives describe collision geometry and may be used independently of
   physics simulation. At a minimum, you should understand how to create
   primitives that can be later attached to rigid bodies.

   Box2D shape primitives support several operations:

   - Test a point for overlap with the primitive
   - Perform a ray cast against the primitive
   - Compute the primitive's AABB
   - Compute the mass properties of the primitive


Circles

   Circles have a center and radius. Circles are solid.

   .. figure:: https://box2d.org/documentation_v3/circle.svg

      ![Circle](images/circle.svg)

   .. code::cpp

      b2Circle circle;
      circle.center = (b2Vec2){2.0f, 3.0f};
      circle.radius = 0.5f;

   You can also initialize a circle and other structures inline. 
   This is an equivalent circle:

   .. code::cpp

      b2Circle circle = {{2.0f, 3.0f}, 0.5f};


Capsules

   Capsules have two center points and a radius. The center points are the 
   centers of two semicircles that are connected by a rectangle.

   .. figure:: https://box2d.org/documentation_v3/capsule.svg

      ![Capsule](images/capsule.svg)

   .. code::cpp

      b2Capsule capsule;
      capsule.center1 = (b2Vec2){1.0f, 1.0f};
      capsule.center1 = (b2Vec2){2.0f, 3.0f};
      capsule.radius = 0.25f;


Polygons

   Box2D polygons are solid convex polygons. A polygon is convex when all
   line segments connecting two points in the interior do not cross any
   edge of the polygon. Polygons are solid and never hollow. A polygon must
   have 3 or more vertices.

   .. figure:: https://box2d.org/documentation_v3/convex_concave.svg

      ![Convex and Concave Polygons](images/convex_concave.svg)

   Polygons vertices are stored with a counter clockwise winding (CCW). We
   must be careful because the notion of CCW is with respect to a
   right-handed coordinate system with the z-axis pointing out of the
   plane. This might turn out to be clockwise on your screen, depending on
   your coordinate system conventions.

   .. figure:: https://box2d.org/documentation_v3/winding.svg

      ![Polygon Winding Order](images/winding.svg)

   The polygon members are public, but you should use initialization
   functions to create a polygon. The initialization functions create
   normal vectors and perform validation.

   Polygons in Box2D have a maximum of 8 vertices, as controlled by ``b2_maxPolygonVertices``.
   If you have more complex shapes, I recommend to use multiple polygons.

   There are a few ways to create polygons. You can attempt to create them manually,
   but this is not recommended. Instead there are several functions provided to create them.

   For example if you need a square or box you can use these functions:

   .. code::cpp

      b2Polygon square = b2MakeSquare(0.5f);
      b2Polygon box = b2MakeBox(0.5f, 1.0f);

   The values provided to these functions are *extents*, which are half-widths or half-heights.
   This corresponds with circles and capsules using radii instead of diameters.

   Box2D also supports rounded polygons. These are convex polygons with a thick rounded skin.

   .. code::cpp

      b2Polygon roundedBox = b2MakeRoundedBox(0.5f, 1.0f, 0.25f);

   If you want a box that is not centered on the body origin, you can use an offset box.

   .. code::cpp

      b2Vec2 center = {1.0f, 0.0f};
      float angle = b2_pi / 4.0f;
      b2Polygon offsetBox = b2MakeOffsetBox(0.5f, 1.0f, center, angle);

   If you want a more general convex polygon, you can compute the hull using `b2ComputeHull()`. 
   Then you can create a polygon from the hull. You can make this rounded or not.

   .. code::cpp

      b2Vec2 points[] = {{-1.0f, 0.0f}, {1.0f, 0.0f}, {0.0f, 1.0f}};
      b2Hull hull = b2ComputeHull(points, 3);
      float radius = 0.1f;
      b2Polygon roundedTriangle = b2MakePolygon(&hull, radius);

   If you have an automatic process for generating convex polygons, you may feed 
   a degenerate set of points to `b2ComputeHull()`. You should check that the hull 
   was created successfully before creating the polygon or you will get an assertion.

   .. code::cpp

      b2Hull questionableHull = b2ComputeHull(randomPoints, 8);
      if (questionableHull.count == 0)
      {
         // handle failure
      }

   Degenerate points may be coincident and/or collinear. For the hull to be viable, 
   the enclosed area must be sufficiently positive.


Segments

   Segments are line segments. Segment shapes can collide with circles, capsules, 
   and polygons but not with other line segments. The collision algorithms used 
   by Box2D require that at least one of two colliding shapes has sufficiently 
   positive area. Segment shapes have no area, so segment-segment collision is 
   not possible.

   .. code::cpp

      b2Segment segment1;
      segment1.point1 = (b2Vec2){0.0f, 0.0f};
      segment2.point2 = (b2Vec2){1.0f, 0.0f};

      // equivalent
      b2Segment segment2 = {{0.0f, 0.0f}, {1.0f, 0.0f}};


Ghost Collisions

   In many cases a game environment is constructed by connecting several
   segment shapes end-to-end. This can give rise to an unexpected artifact
   when a polygon slides along the chain of segments. In the figure below there 
   is a box colliding with an internal vertex. These *ghost* collisions
   are caused when the polygon collides with an internal vertex generating
   an internal collision normal.

   .. figure:: https://box2d.org/documentation_v3/ghost_collision.svg

      ![Ghost Collision](images/ghost_collision.svg){html: width=30%}

   If edge1 did not exist this collision would seem fine. With edge1
   present, the internal collision seems like a bug. But normally when
   Box2D collides two shapes, it views them in isolation.

   `b2SmoothSegment` provides a mechanism for eliminating ghost
   collisions by storing the adjacent *ghost* vertices. Box2D uses these
   ghost vertices to prevent internal collisions.

   .. figure:: https://box2d.org/documentation_v3/ghost_vertices.svg

      ![Ghost Vertices](images/ghost_vertices.svg){html: width=30%}

   The Box2D algorithm for dealing with ghost collisions only supports one-sided 
   collision. The front face is to the right when looking from the first vertex 
   towards the second vertex. This matches the counter-clockwise winding order
   used by polygons.


Smooth segment

   Smooth segments use a concept called *ghost vertices* that Box2D can use to 
   eliminate ghost collisions.

   .. code::cpp

      b2SmoothSegment smoothSegment = {0};
      smoothSegment.ghost1 = (b2Vec2){1.7f, 0.0f};
      smoothSegment.segment = (b2Segment){{1.0f, 0.25f}, {0.0f, 0.0f}};
      smoothSegment.ghost2 = (b2Vec2){-1.7f, 0.4f};

   These ghost vertices must align with vertices of neighboring smooth segments, 
   making them tedious and error-prone to setup.

   Smooth segments are not created directly. Instead, you can create chains of smooth
   segments. See `b2ChainDef` and `b2CreateChain()`.


Geometric Queries
-----------------

   You can perform a geometric queries on a single shape.


Shape Point Test

   You can test a point for overlap with a shape. You provide a transform
   for the shape and a world point.

   .. code::cpp

      b2Vec2 point = {5.0f, 2.0f};
      bool hit = b2PointInCapsule(point, &myCapsule);

   See also `b2PointInCircle()` and `b2PointInPolygon()`.


Ray Cast

   You can cast a ray at a shape to get the point of first intersection and normal vector.

   .. Caution::

      **Caution**:
      No hit will register if the ray starts inside a convex shape like a circle
      or polygon. This is consistent with Box2D treating convex shapes as solid. 

   .. code::cpp

      b2RayCastInput input;
      input.origin = (b2Vec2){0.0f, 0.0f};
      input.translation = (b2Vec2){1.0f, 0.0f};
      input.maxFraction = 1.0f;

      b2CastOutput output = b2RayCastPolygon(&input, &myPolygon);
      if (output.hit == true)
      {
         // do something
      }


Shape Cast

   You can also cast a shape at another shape. This uses an abstract way of 
   describing the moving shape. It is represented as a point cloud with a radius. 
   This implies a convex shape even if the input data is not convex. The internal 
   algorithm (GJK) will essentially only use the convex portion.

   .. code::cpp

      b2ShapeCastInput input;
      input.points[0] = (b2Vec2){1.0f, 0.0f};
      input.points[1] = (b2Vec2){2.0f, -3.0f};
      input.radius = 0.2f;
      input.translation = (b2Vec2){1.0f, 0.0f};
      input.maxFraction = 1.0f;

      b2CastOutput output = b2ShapeCastPolygon(&input, &myPolygon);
      if (output.hit == true)
      {
         // do something
      }

   Even more generic, you can use `b2ShapeCast()` to linearly cast one point 
   cloud at another point cloud. All shape cast functions use this internally.


Distance

   `b2ShapeDistance()` function can be used to compute the distance between two
   shapes. The distance function needs both shapes to be converted into a
   `b2DistanceProxy` (which are point clouds with radii). There is also some 
   caching used to warm start the distance function for repeated calls. This 
   can improve performance when the shapes move by small amounts.

   .. figure:: https://box2d.org/documentation_v3/distance.svg

      ![Distance Function](images/distance.svg)


Time of Impact

   If two shapes are moving fast, they may *tunnel* through each other in a
   single time step.

   .. figure:: https://box2d.org/documentation_v3/tunneling2.svg

      ![Tunneling](images/tunneling2.svg){html: width=30%}

   The `b2TimeOfImpact()` function is used to determine the time when two moving 
   shapes collide. This is called the *time of impact* (TOI). The main purpose 
   of `b2TimeOfImpact()` is for tunnel prevention. Box2D uses this internally 
   to prevent moving objects from tunneling through static shapes.

   The `b2TimeOfImpact()` identities an initial separating axis and
   ensures the shapes do not cross on that axis. This process is repeated
   as shapes are moved closer together, until they touch or pass by each other.

   The TOI function might miss collisions that are clear at the final positions.
   Nevertheless, it is very fast and adequate for tunnel prevention.

   .. figure:: https://box2d.org/documentation_v3/captured_toi.svg

      ![Captured Collision](images/captured_toi.svg){html: width=30%}

   .. figure:: https://box2d.org/documentation_v3/missed_toi.svg

      ![Missed Collision](images/missed_toi.svg){html: width=30%}

   It is difficult to put a restriction on the rotation magnitude. There
   may be cases where collisions are missed for small rotations. Normally,
   these missed rotational collisions should not harm game play. They tend
   to be glancing collisions.

   The function requires two shapes (converted to `b2DistanceProxy`) and two
   `b2Sweep` structures. The sweep structure defines the initial and final
   transforms of the shapes.

   You can use fixed rotations to perform a *shape cast*. In this case, the
   time of impact function will not miss any collisions.


Contact Manifolds

   Box2D has functions to compute contact points for overlapping shapes. If
   we consider circle-circle or circle-polygon, we can only get one contact
   point and normal. In the case of polygon-polygon we can get two points.
   These points share the same normal vector so Box2D groups them into a
   manifold structure. The contact solver takes advantage of this to
   improve stacking stability.

   .. figure:: https://box2d.org/documentation_v3/manifolds.svg

      ![Contact Manifold](images/manifolds.svg)

   Normally you don't need to compute contact manifolds directly, however
   you will likely use the results produced in the simulation.

   The `b2Manifold` structure holds a normal vector and up to two contact
   points. The contact points store the normal and tangential (friction) impulses
   computed in the rigid body simulation.


Dynamic Tree
------------

   `b2DynamicTree` is used by Box2D to organize large numbers of
   shapes efficiently. The object does not know directly about shapes. Instead it
   operates on axis-aligned bounding boxes (`b2AABB`) with user data integers.

   The dynamic tree is a hierarchical AABB tree. Each internal node in the
   tree has two children. A leaf node is a single user AABB. The tree uses
   rotations to keep the tree balanced, even in the case of degenerate
   input.

   The tree structure allows for efficient ray casts and region queries.
   For example, you may have hundreds of shapes in your scene. You could
   perform a ray cast against the scene in a brute force manner by ray
   casting each shape. This would be inefficient because it does not take
   advantage of shapes being spread out. Instead, you can maintain a
   dynamic tree and perform ray casts against the tree. This traverses the
   ray through the tree skipping large numbers of shapes.

   A region query uses the tree to find all leaf AABBs that overlap a query
   AABB. This is faster than a brute force approach because many shapes can
   be skipped.

   .. figure:: https://box2d.org/documentation_v3/raycast.svg

      ![Ray-cast](images/raycast.svg){html: width=30%}

   .. figure:: https://box2d.org/documentation_v3/overlap_test.svg

      ![Overlap Test](images/overlap_test.svg){html: width=30%}

   Normally you will not use the dynamic tree directly. Rather you will go
   through the `b2World` functions for ray casts and region queries. If you plan
   to instantiate your own dynamic tree, you can learn how to use it by
   looking at how Box2D uses it. Also see the `DynamicTree` sample.


👊 Simulation
=============

   Rigid body simulation is the primary feature of Box2D. It is the most complex part of
   Box2D and is the part you will likely interact with the most. Simulation sits on top of
   the foundation and collision types and functions, so you should be somewhat familiar
   with those by now.

   Rigid body simulation contains:

   - worlds
   - bodies
   - shapes
   - contacts
   - joints
   - events

   There are many dependencies between these objects so it is difficult to
   describe one without referring to another. In the following, you
   may see some references to objects that have not been described yet.
   Therefore, you may want to quickly skim this section before reading it
   closely.


Ids
---

   Box2D has a C interface. Typically in a C/C++ library when you create an object 
   with a long lifetime you will keep a pointer (or smart pointer) to the object.

   Box2D works differently. Instead of pointers, you are given an *id* when you 
   create an object. This *id* acts as a `handle <https://en.wikipedia.org/wiki/Handle_(computing)>`__ 
   and help avoid problems with `dangling pointers <https://en.wikipedia.org/wiki/Dangling_pointer>`__.

   This also allows Box2D to use `data-oriented design <https://en.wikipedia.org/wiki/Data-oriented_design>`__ 
   internally. This helps to reduce cache misses drastically and also allows for `SIMD <https://en.wikipedia.org/wiki/Single_instruction,_multiple_data>`__
   optimizations.

   So you will be dealing with `b2WorldId`, `b2BodyId`, etc. These are small 
   opaque structures that you will pass around by value, just like pointers. 
   Box2D creation functions return an id. Functions that operate on Box2D 
   objects take ids.

   .. code::cpp

      b2BodyId myBodyId = b2CreateBody(myWorldId, &myBodyDef);

   There are functions to check if an id is valid. Box2D functions will assert 
   if you use an invalid id. This makes debugging easier than using dangling pointers.

   .. code::cpp

      if (b2Body_IsValid(myBodyId) == false)
      {
         // oops
      }


World
-----

   The Box2D world contains the bodies and joints. It manages all aspects
   of the simulation and allows for asynchronous queries (like AABB queries
   and ray-casts). Much of your interactions with Box2D will be with a
   world object, using `b2WorldId`.


World Definition
~~~~~~~~~~~~~~~~

   Worlds are created using a *definition* structure. This is temporary structure that
   you can use to configure options for world creation. You **must** initialize 
   the world definition using `b2DefaultWorldDef()`.

   .. code::cpp

      b2WorldDef worldDef = b2DefaultWorldDef();

   The world definition has lots of options, but for most you will use the defaults.
   You may want to set the gravity:

   .. code::cpp

      worldDef.gravity = (b2Vec2){0.0f, -10.0f};

   If your game doesn't need sleep, you can get a performance boost by completely
   disabling sleep:

   .. code::cpp

      worldDef.enableSleep = false;

   You can also configure multithreading to improve performance:

   .. code::cpp

      worldDef.workerCount = 4;
      worldDef.enqueueTask = myAddTaskFunction;
      worldDef.finishTask = myFinishTaskFunction;
      worldDef.userTaskContext = &myTaskSystem;

   Multithreading is not required but it can improve performance substantially.
   Read more on Foundation Multithreading.


World Lifetime
~~~~~~~~~~~~~~

   Creating a world is done using a world definition.

   .. code::cpp

      b2WorldId myWorldId = b2CreateWorld(&worldDef);

      // ... do stuff ...

      b2DestroyWorld(myWorldId);

      // Nullify id for safety
      myWorldId = b2_nullWorldId;

   You can create up to 128 worlds. These worlds do not interact and may be 
   simulated in parallel.

   When you destroy a world, every body, shape, and joint is also destroyed. 
   This is much faster than destroying individual objects.


Simulation
~~~~~~~~~~

   The world is used to drive the simulation. You specify a time step
   and a sub-step count. For example:

   .. code::cpp

      float timeStep = 1.0f / 60.f;
      int32_t subSteps = 10;
      b2World_Step(myWorldId, timeStep, subSteps);

   After the time step you can examine your bodies and joints for
   information. Most likely you will grab the position off the bodies so
   that you can update your game objects and render them. Or more optimally, you
   will use `b2World_GetBodyEvents()`.

   You can perform the time step anywhere in your game loop, but you should be 
   aware of the order of things. For example, you must create bodies before the 
   time step if you want to get collision results for the new bodies in that frame.

   As I discussed in the `Hello Box2D`, you should use a fixed time step. 
   By using a larger time step you can improve performance in low frame rate 
   scenarios. But generally you should use a time step no larger than 1/30 
   seconds (30Hz). A time step of 1/60 seconds (60Hz) will usually deliver 
   a high quality simulation.

   The sub-step count is used to increase accuracy. By sub-stepping the solver
   divides up time into small increments and the bodies move by a small amount.
   This allows joints and contacts to respond with finer detail. The recommended
   sub-step count is 4. However, increasing the sub-step count may improve 
   accuracy. For example, long joint chains will stretch less with more sub-steps.

   The scissor lift sample shown on `Samples` works better with more sub-steps
   and is configured to use 8 sub-steps. With a primary time step of 1/60 seconds,
   the scissor lift is taking sub-steps at 480Hz!


Rigid Bodies
------------

   Rigid bodies, or just *bodies* have position and velocity. You can apply forces, 
   torques, and impulses to bodies. Bodies can be static, kinematic, or dynamic. Here
   are the body type definitions:


Body types
~~~~~~~~~~

   ``b2_staticBody``:
      A static body does not move under simulation and behaves as if it has infinite mass.
      Internally, Box2D stores zero for the mass and the inverse mass. A static body has zero
      velocity. Static bodies do not collide with other static or kinematic bodies.

   ``b2_kinematicBody``:
      A kinematic body moves under simulation according to its velocity.
      Kinematic bodies do not respond to forces. A kinematic body is moved by setting its
      velocity. A kinematic body behaves as if it has infinite mass, however,
      Box2D stores zero for the mass and the inverse mass. Kinematic bodies do
      not collide with other kinematic or static bodies. Generally you should use
      a kinematic body if you want a shape to be animated and not affected by
      forces or collisions.

   ``b2_dynamicBody``:
      A dynamic body is fully simulated and moves according to forces and torques.
      A dynamic body can collide with all body types. A dynamic body always has
      finite, non-zero mass.


   .. Caution::

      **Caution**:
      Generally you should not set the transform on bodies after creation.
      Box2D treats this as a teleport and may result in undesirable behavior.

   Bodies carry shapes and moves them around in the world. Bodies are always
   rigid bodies in Box2D. That means that two shapes attached to the same 
   rigid body never move relative to each other and shapes attached to the same 
   body don't collide.

   Shapes have collision geometry and density. Normally, bodies acquire
   their mass properties from the shapes. However, you can override the
   mass properties after a body is constructed.

   You usually keep ids to all the bodies you create. This way you can
   query the body positions to update the positions of your graphical
   entities. You should also keep body ids so you can destroy them
   when you are done with them.


Body Definition
~~~~~~~~~~~~~~~

   Before a body is created you must create a body definition (`b2BodyDef`).
   The body definition holds the data needed to create and initialize a
   body correctly.

   Because Box2D uses a C API, a function is provided to create a default
   body definition.

   .. code::cpp

      b2BodyDef myBodyDef = b2DefaultBodyDef();

   This ensures the body definition is valid and this initialization is **mandatory**.

   Box2D copies the data out of the body definition; it does not keep a
   pointer to the body definition. This means you can recycle a body
   definition to create multiple bodies.

   Let's go over some of the key members of the body definition.


Body Type
~~~~~~~~~

   As discussed previously, there are three different body types: ``static``, 
   ``kinematic``, and ``dynamic``. ``b2_staticBody`` is the default.
   You should establish the body type at creation because changing the body type
   later is expensive.

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.type = b2_dynamicBody;


Position and Angle
~~~~~~~~~~~~~~~~~~

   You can initialize the body position and angle in the body definition. This has far
   better performance than creating the body at the world origin and then moving the body.


   .. Caution::

      **Caution**:
      Do not create a body at the origin and then move it. If you create
      several bodies at the origin, then performance will suffer.

   A body has two main points of interest. The first point is the body's
   origin. Shapes and joints are attached relative to the body's origin.
   The second point of interest is the center of mass. The center of mass
   is determined from the mass distribution of the attached shapes or is
   explicitly set with `b2MassData`. Much of Box2D's internal computations
   use the center of mass position. For example the body stores the linear
   velocity for the center of mass, not the body origin.

   .. figure:: https://box2d.org/documentation_v3/center_of_mass.svg

      ![Body Origin and Center of Mass](images/center_of_mass.svg)

   When you are building the body definition, you may not know where the
   center of mass is located. Therefore you specify the position of the
   body's origin. You may also specify the body's angle in radians. If you later
   change the mass properties of the body, then the center of mass may move
   on the body, but the origin position and body angle does not change and the attached
   shapes and joints do not move.

   .. code::cpp

      b2BodyDef bodyDef = b2DefaultBodyDef();
      bodyDef.position = (b2Vec2){0.0f, 2.0f};
      bodyDef.angle = 0.25f * b2_pi;

   A rigid body is a frame of reference. You can define shapes and
   joints in that frame. Those shapes and joint anchors never move in the
   local frame of the body.


Damping
~~~~~~~

   Damping is used to reduce the world velocity of bodies. Damping is
   different than friction because friction only occurs with contact.
   Damping is not a replacement for friction and the two effects are
   used together.

   Damping parameter are non-negative. Normally you will use a
   damping value between 0 and 1. I generally do not use linear damping
   because it makes bodies look like they are floating.

   .. code::cpp

      bodyDef.linearDamping = 0.0f;
      bodyDef.angularDamping = 0.1f;

   Damping is approximated to improve performance. At small damping
   values the damping effect is mostly independent of the time step. At
   larger damping values, the damping effect will vary with the time step.
   This is not an issue if you use a fixed time step (recommended).

   Here's some math for the curious. A first-order different equation for velocity damping is:

   \f[
   \frac{dv}{dt} + c v = 0
   \f]

   The solution with initial velocity \f$v_0\f$ is

   \f[
   v = v_0 e^{-c t}
   \f]

   Across a single time step \f$h\f$ the velocity evolves like so

   \f[
   v(t + h) = v_0 e^{-c (t + h)} = v_0 e^{-c t} e^{-c h} = v(t) e^{-c h}
   \f]

   Using the `Pade approximation <https://en.wikipedia.org/wiki/Pad%C3%A9_table>`__ for the
   exponential function gives the update formula:

   \f[
   v(t + h) \approx \frac{1}{1 + c h} v(t)
   \f]

   This is the formula used in the Box2D solver.


Gravity Scale
~~~~~~~~~~~~~

   You can use the gravity scale to adjust the gravity on a single body. Be
   careful though, a large gravity magnitude can decrease stability.

   .. code::cpp

      // Set the gravity scale to zero so this body will float
      bodyDef.gravityScale = 0.0f;


Sleep Parameters
~~~~~~~~~~~~~~~~

   What does sleep mean? Well it is expensive to simulate bodies, so the
   less we have to simulate the better. When a body comes to rest we would
   like to stop simulating it.

   When Box2D determines that a body (or group of bodies) has come to rest,
   the body enters a sleep state which has very little CPU overhead. If a
   body is awake and collides with a sleeping body, then the sleeping body
   wakes up. Bodies will also wake up if a joint or contact attached to
   them is destroyed. You can also wake a body manually.

   The body definition lets you specify whether a body can sleep and
   whether a body is created sleeping.

   .. code::cpp

      bodyDef.enableSleep = true;
      bodyDef.isAwake = true;

   The `isAwake` flag is ignored if `enableSleep` is false.


Fixed Rotation
~~~~~~~~~~~~~~

   You may want a rigid body, such as a character, to have a fixed
   rotation. Such a body does not rotate, even under load. You can use
   the fixed rotation setting to achieve this:

   .. code::cpp

      bodyDef.fixedRotation = true;

   The fixed rotation flag causes the rotational inertia and its inverse to
   be set to zero.


Bullets
~~~~~~~

   Game simulation usually generates a sequence of transforms that are played
   at some frame rate. This is called discrete simulation. In discrete
   simulation, rigid bodies can move by a large amount in one time step. If
   a physics engine doesn't account for the large motion, you may see some
   objects incorrectly pass through each other. This effect is called
   *tunneling*.

   By default, Box2D uses continuous collision detection (CCD) to prevent
   dynamic bodies from tunneling through static bodies. This is done by
   sweeping shapes from their old position to their new positions. The
   engine looks for new collisions during the sweep and computes the time
   of impact (TOI) for these collisions. Bodies are moved to their first
   TOI at the end of the time step.

   Normally CCD is not used between dynamic bodies. This is done to keep
   performance reasonable. In some game scenarios you need dynamic bodies
   to use CCD. For example, you may want to shoot a high speed bullet at a
   stack of dynamic bricks. Without CCD, the bullet might tunnel through
   the bricks.

   Fast moving objects in Box2D can be configured as *bullets*. Bullets will
   perform CCD with all body types, but not other bullets. You should decide what
   bodies should be bullets based on your game design. If you decide a body
   should be treated as a bullet, use the following setting.

   .. code::cpp

      bodyDef.isBullet = true;

      The bullet flag only affects dynamic bodies. I recommend using bullets sparingly.


Disabling
~~~~~~~~~

   You may wish a body to be created but not participate in collision or
   simulation. This state is similar to sleeping except the body will not be
   woken by other bodies and the body's shapes will not collide with anything.
   This means the body will not participate in collisions, ray
   casts, etc.

   You can create a body as disabled and later enable it.

   .. code::cpp

      bodyDef.isEnabled = false;

      // Later ...
      b2Body_Enable(myBodyId);

   Joints may be connected to disabled bodies. These joints will not be
   simulated. You should be careful when you enable a body that its
   joints are not distorted.

   Note that enabling a body is almost as expensive as creating the body
   from scratch. So you should not use body disabling for streaming worlds. 
   Instead, use creation/destruction for streaming worlds to save memory.

   Body disabling is a convenience and is generally not good for performance.


User Data
~~~~~~~~~

   User data is a void pointer. This gives you a hook to link your
   application objects to bodies. You should be consistent to use the same
   object type for all body user data.

   .. code::cpp

      bodyDef.userData = &myGameObject;

   This is useful when you receive results from a query such as a ray-cast
   or event and you want to get back to your game object. You can acquire the
   use data from a body using `b2Body_GetUserData()`.


Body Lifetime
~~~~~~~~~~~~~

   Bodies are created and destroyed using a world id. This lets the world create
   the body with an efficient allocator and add the body to the world data structure.

   .. code::cpp

      b2BodyId myBodyId = b2CreateBody(myWorldId, &bodyDef);

      // ... do stuff ...

      b2DestroyBody(myBodyId);

      // Nullify body id for safety
      myBodyId = b2_nullBodyId;

   Box2D does not keep a reference to the body definition or any of the
   data it holds (except user data pointers). So you can create temporary
   body definitions and reuse the same body definitions.

   Box2D allows you to avoid destroying bodies by destroying the world
   directly using `b2DestroyWorld()`, which does all the cleanup work for you.
   However, you should be mindful to nullify body ids that you keep in your application.

   When you destroy a body, the attached shapes and joints are
   automatically destroyed. This has important implications for how you
   manage shape and joint ids. You should nullify these ids after destroying
   a body.


Using a Body
~~~~~~~~~~~~

   After creating a body, there are many operations you can perform on the
   body. These include setting mass properties, accessing position and
   velocity, applying forces, and transforming points and vectors.


Mass Data
~~~~~~~~~

   A body has mass (scalar), center of mass (2-vector), and rotational
   inertia (scalar). For static bodies, the mass and rotational inertia are
   set to zero. When a body has fixed rotation, its rotational inertia is
   zero.

   Normally the mass properties of a body are established automatically
   when shapes are added to the body. You can also adjust the mass of a
   body at run-time. This is usually done when you have special game
   scenarios that require altering the mass.

   .. code::cpp

      b2MassData myMassData;
      myMassData.mass = 10.0f;
      myMassData.center = (b2Vec2){0.0f, 0.0f};
      myMassData.I = 100.0f;
      b2Body_SetMassData(myBodyId, &myMassData);

   After setting a body's mass directly, you may wish to revert to the 
   mass determined by the shapes. You can do this with:

   .. code::cpp

      b2Body_ApplyMassFromShapes(myBodyId);

   The body's mass data is available through the following functions:

   .. code::cpp

      float mass = b2Body_GetMass(myBodyId);
      float inertia = b2Body_GetInertiaTensor(myBodyId);
      b2Vec2 localCenter b2Body_GetLocalCenterOfMass(myBodyId);
      b2MassData massData = b2Body_GetMassData(myBodyId);


State Information
~~~~~~~~~~~~~~~~~

   There are many aspects to the body's state. You can access this state
   data through the following functions:

   .. code::cpp

      b2Body_SetType(myBodyId, b2_kinematicBody);
      b2BodyType bodyType = b2Body_GetType(myBodyId);
      b2Body_SetBullet(myBodyId, true);
      bool isBullet = b2Body_IsBullet(myBodyId);
      b2Body_EnableSleep(myBodyId, false);
      bool isSleepEnabled = b2Body_IsSleepingEnabled(myBodyId);
      b2Body_SetAwake(myBodyId, true);
      bool isAwake = b2Body_IsAwake(myBodyId);
      b2Body_Disable(myBodyId);
      b2Body_Enable(myBodyId);
      bool isEnabled = b2Body_IsEnabled(myBodyId);
      b2Body_SetFixedRotation(myBodyId, true);
      bool isFixedRotation = b2Body_IsFixedRotation(myBodyId);

   Please see the comments on these functions for more details.


Position and Velocity
~~~~~~~~~~~~~~~~~~~~~

   You can access the position and rotation of a body. This is common when
   rendering your associated game object. You can also set the position and angle,
   although this is less common since you will normally use Box2D to
   simulate movement.

   Keep in mind that the Box2D interface uses *radians*.

   .. code::cpp

      b2Body_SetTransform(myBodyId, position, angleInRadians);
      b2Transform transform = b2Body_GetTransform(myBodyId);
      b2Vec2 position = b2Body_GetPosition(myBodyId);
      b2Rot rotation = b2Body_GetRotation(myBodyId);
      float angleInRadians = b2Body_GetAngle(myBodyId);

   You can access the center of mass position in local and world
   coordinates. Much of the internal simulation in Box2D uses the center of
   mass. However, you should normally not need to access it. Instead you
   will usually work with the body transform. For example, you may have a
   body that is square. The body origin might be a corner of the square,
   while the center of mass is located at the center of the square.

   .. code::cpp

      b2Vec2 worldCenter = b2Body_GetWorldCenterOfMass(myBodyId);
      b2Vec2 localCenter = b2Body_GetLocalCenterOfMass(myBodyId);

   You can access the linear and angular velocity. The linear velocity is
   for the center of mass. Therefore, the linear velocity may change if the
   mass properties change. Since Box2D uses radians, the angular velocity is
   in radians per second.

   .. code::cpp

      b2Vec2 linearVelocity = b2Body_GetLinearVelocity(myBodyId);
      float angularVelocity = b2Body_GetAngularVelocity(myBodyId);


Forces and Impulses
~~~~~~~~~~~~~~~~~~~

   You can apply forces, torques, and impulses to a body. When you apply a
   force or an impulse, you can provide a world point where the load is
   applied. This often results in a torque about the center of mass.

   .. code::cpp

      b2Body_ApplyForce(myBodyId, force, worldPoint, wake);
      b2Body_ApplyTorque(myBodyId, torque, wake);
      b2Body_ApplyLinearImpulse(myBodyId, linearImpulse, worldPoint, wake);
      b2Body_ApplyAngularImpulse(myBodyId, angularImpulse, wake);

   Applying a force, torque, or impulse optionally wakes the body. If you don't
   wake the body and it is asleep, then the force or impulse will be ignored.

   You can also apply a force and linear impulse to the center of mass to avoid rotation.

   .. code::cpp

      b2Body_ApplyForceToCenter(myBodyId, force, wake);
      b2Body_ApplyLinearImpulseToCenter(myBodyId, linearImpulse, wake);


   .. Caution::

      **Caution**:
      Since Box2D uses sub-stepping, you should not apply a steady impulse
      for several frames. Instead you should apply a force which Box2D will
      spread out evenly across the sub-steps, resulting in smoother movement.


Coordinate Transformations
~~~~~~~~~~~~~~~~~~~~~~~~~~

   The body has some utility functions to help you transform points
   and vectors between local and world space. If you don't understand
   these concepts, I recommend reading "Essential Mathematics for Games and
   Interactive Applications" by Jim Van Verth and Lars Bishop.

   .. code::cpp

      b2Vec2 worldPoint = b2Body_GetWorldPoint(myBodyId, localPoint);
      b2Vec2 worldVector = b2Body_GetWorldVector(myBodyId, localVector);
      b2Vec2 localPoint = b2Body_GetLocalPoint(myBodyId, worldPoint);
      b2Vec2 localVector = b2Body_GetLocalVector(myBodyId, worldVector);


Accessing Shapes and Joints
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   You can access the shapes on a body. You can get the number of shapes first.

   .. code::cpp

      int shapeCount = b2Body_GetShapeCount(myBodyId);

   If you have bodies with many shapes, you can allocate an array or if you
   know the number is limited you can use a fixed size array.

   .. code::cpp

      b2ShapeId shapeIds[10];
      int returnCount = b2Body_GetShapes(myBodyId, shapeIds, 10);

      for (int i = 0; i < returnCount; ++i)
      {
         b2ShapeId shapeId = shapeIds[i];

         // do something with shapeId
      }

   You can similarly get an array of the joints on a body.


Body Events
~~~~~~~~~~~

   While you can gather transforms from all your bodies after every time step, 
   this is inefficient. Many bodies may not have moved because they are sleeping. 
   Also iterating across many bodies will have lots of cache misses.

   Box2D provides `b2BodyEvents` that you can access after every call to 
   `b2World_Step()` to get an array of body movement events. Since this data 
   is contiguous, it is cache friendly.

   .. code::cpp

      b2BodyEvents events = b2World_GetBodyEvents(m_worldId);
      for (int i = 0; i < events.moveCount; ++i)
      {
         const b2BodyMoveEvent* event = events.moveEvents + i;
         MyGameObject* gameObject = event->userData;
         MoveGameObject(gameObject, event->transform);
         if (event->fellAsleep)
         {
            SleepGameObject(gameObject);
         }
      }

   The body event also indicates if the body fell asleep this time step. 
   This might be useful to optimize your application.


Shapes
------

   A body may have zero or more shapes. A body with multiple shapes is sometimes
   called a *compound body.*

   Shapes hold the following:

   - a shape primitive
   - density, friction, and restitution
   - collision filtering flags
   - parent body id
   - user data
   - sensor flag

   These are described in the following sections.


Shape Lifetime
~~~~~~~~~~~~~~

   Shapes are created by initializing a shape definition and a shape primitive.
   These are passed to a creation function specific to each shape type.

   .. code::cpp

      b2ShapeDef shapeDef = b2DefaultShapeDef();
      shapeDef.density = 10.0f;
      shapeDef.friction = 0.7f;

      b2Polygon box = b2MakeBox(0.5f, 1.0f);
      b2ShapeId myShapeId = b2CreatePolygonShape(myBodyId, &shapeDef, &box);

   This creates a polygon and attaches it to the body. You do not need to
   store the shape id since the shape will automatically be destroyed when 
   the parent body is destroyed. However, you may wish to store the shape 
   id if you plan to change properties on it later.

   You can create multiple shapes on a single body. They all can contribute
   to the mass of the body. These shapes never collide with each other and may overlap.

   You can destroy a shape on the parent body. You may do this to model a
   breakable object. Otherwise you can just leave the shape alone and let
   the body destruction take care of destroying the attached shapes.

   .. code::cpp

      b2DestroyShape(myShapeId);

   Material properties such as density, friction, and restitution are associated with shapes
   instead of bodies. Since you can attach multiple shapes to a body, this allows for more
   possible setups. For example, you can make a car that is heavier in the back.


Density
~~~~~~~

   The shape density is used to compute the mass properties of the parent
   body. The density can be zero or positive. You should generally use
   similar densities for all your shapes. This will improve stacking
   stability.

   The mass of a body is not adjusted when you set the density. You must
   call `b2Body_ApplyMassFromShapes()` for this to occur. Generally you should establish
   the shape density in `b2ShapeDef` and avoid modifying it later because this
   can be expensive, especially on a compound body.

   .. code::cpp

      b2Shape_SetDensity(myShapeId, 5.0f);
      b2Body_ApplyMassFromShapes(myBodyId);


Friction
~~~~~~~~

   Friction is used to make objects slide along each other realistically.
   Box2D supports static and dynamic friction, but uses the same parameter
   for both. Box2D attempts to simulate friction accurately and the friction
   strength is proportional to the normal force. This is called `Coulomb friction <https://en.wikipedia.org/wiki/Friction>`__. 
   The friction parameter is usually set between 0 and 1, but
   can be any non-negative value. A friction value of 0 turns off friction
   and a value of 1 makes the friction strong. When the friction force is
   computed between two shapes, Box2D must combine the friction parameters
   of the two parent shapes. This is done with the `geometric mean <https://en.wikipedia.org/wiki/Geometric_mean>`__:

   .. code::cpp

      float mixedFriction = sqrtf(b2Shape_GetFriction(shapeIdA) * b2Shape_GetFriction(shapeIdB));

      If one shape has zero friction then the mixed friction will be zero.


Restitution
~~~~~~~~~~~

   `Restitution <https://en.wikipedia.org/wiki/Coefficient_of_restitution>`__ 
   is used to make objects bounce. The restitution value is
   usually set to be between 0 and 1. Consider dropping a ball on a table.
   A value of zero means the ball won't bounce. This is called an
   *inelastic* collision. A value of one means the ball's velocity will be
   exactly reflected. This is called a *perfectly elastic* collision.
   Restitution is combined using the following formula.

   .. code::cpp

      float mixedRestitution = b2MaxFloat(b2Shape_GetRestitution(shapeIdA), 
                                          b2Shape_GetRestitution(shapeIdB));

   Restitution is combined this way so that you can have a bouncy super
   ball without having a bouncy floor.

   When a shape develops multiple contacts, restitution is simulated
   approximately. This is because Box2D uses an sequential solver. Box2D
   also uses inelastic collisions when the collision velocity is small.
   This is done to prevent jitter. See `b2WorldDef::restitutionThreshold`.


Filtering
~~~~~~~~~

   Collision filtering allows you to efficiently prevent collision between shapes.
   For example, say you make a character that rides a bicycle. You want the
   bicycle to collide with the terrain and the character to collide with
   the terrain, but you don't want the character to collide with the
   bicycle (because they must overlap). Box2D supports such collision
   filtering using categories, masks, and groups.

   Box2D supports 32 collision categories. For each shape you can specify
   which category it belongs to. You can also specify what other categories
   this shape can collide with. For example, you could specify in a
   multiplayer game that players don't collide with each other. Rather
   than identifying all the situations where things should not collide, I recommend
   identifying all the situations where things should collide. This way you
   don't get into situations where you are using `double negatives <https://en.wikipedia.org/wiki/Double_negative>`__.
   You can specify which things can collide using mask bits. For example:

   .. code::cpp

      enum MyCategories
      {
         PLAYER = 0x00000002,
         MONSTER = 0x00000004,
      };

      b2ShapeDef playerShapeDef = b2DefaultShapeDef();
      b2ShapeDef monsterShapeDef = b2DefaultShapeDef();
      playerShapeDef.filter.categoryBits = PLAYER;
      monsterShapeDef.filter.categoryBits = MONSTER;

      // Players collide with monsters, but not with other players
      playerShapeDef.filter.maskBits = MONSTER;

      // Monsters collide with players and other monsters
      monsterShapeDef.filter.maskBits = PLAYER | MONSTER;

   Here is the rule for a collision to occur:

   .. code::cpp

      uint32_t catA = shapeA.filter.categoryBits;
      uint32_t maskA = shapeA.filter.maskBits;
      uint32_t catB = shapeB.filter.categoryBits;
      uint32_t maskB = shapeB.filter.maskBits;

      if ((catA & maskB) != 0 && (catB & maskA) != 0)
      {
         // shapes can collide
      }

   Another filtering feature is *collision group*.
   Collision groups let you specify a group index. You can have
   all shapes with the same group index always collide (positive index)
   or never collide (negative index). Group indices are usually used for
   things that are somehow related, like the parts of a bicycle. In the
   following example, shape1 and shape2 always collide, but shape3
   and shape4 never collide.

   .. code::cpp

      shape1Def.filter.groupIndex = 2;
      shape2Def.filter.groupIndex = 2;
      shape3Def.filter.groupIndex = -8;
      shape4Def.filter.groupIndex = -8;

   Collisions between shapes of different group indices are filtered
   according the category and mask bits. If two shapes have the
   same non-zero group index, then this overrides the category and mask.
   Collision groups have a higher priority than categories and masks.

   Note that additional collision filtering occurs automatically in Box2D. Here is a
   list:

   - A shape on a static body can only collide with a dynamic body.
   - A shape on a kinematic body can only collide with a dynamic body.
   - Shapes on the same body never collide with each other.
   - You can optionally enable/disable collision between bodies connected by a joint.

   Sometimes you might need to change collision filtering after a shape
   has already been created. You can get and set the `b2Filter` structure on
   an existing shape using `b2Shape_GetFilter()` and `b2Shape_SetFilter()`. 
   Changing the filter is expensive because it causes contacts to be destroyed.


Chain Shapes
~~~~~~~~~~~~

   The chain shape provides an efficient way to connect many line segments together
   to construct your static game worlds. Chain shapes automatically
   eliminate ghost collisions and provide one-sided collision.

   If you don't care about ghost collisions, you can create a bunch of
   two-sided segment shapes. The performance is similar.

   The simplest way to use chain shapes is to create loops. Simply provide an
   array of vertices.

   .. code::cpp

      b2Vec2 points[4] = {
         {1.7f, 0.0f},
         {1.0f, 0.25f},
         {0.0f, 0.0f},
         {-1.7f, 0.4f}};

      b2ChainDef chainDef = b2DefaultChainDef();
      chainDef.points = points;
      chainDef.count = 4;

      b2ChainId myChainId = b2CreateChain(myBodyId, &chainDef);

      // Later ...
      b2DestroyChain(myChainId);

      // Nullify id for safety
      myChainId = b2_nullChainId;

   The segment normal depends on the winding order. A counter-clockwise winding 
   order orients the normal outwards and a clockwise winding order orients the 
   normal inwards.

   .. figure:: https://box2d.org/documentation_v3/chain_loop_outwards.svg

      ![Chain Shape Outwards Loop](images/chain_loop_outwards.svg)

   .. figure:: https://box2d.org/documentation_v3/chain_loop_inwards.svg

      ![Chain Shape Inwards Loop](images/chain_loop_inwards.svg)

   You may have a scrolling game world and would like to connect several chains 
   together. You can connect chains together using ghost vertices. To do this 
   you must have the first three or last three points of each chain overlap. 
   See the sample `ChainLink` for details.

   .. figure:: https://box2d.org/documentation_v3/chain_shape.svg

      ![Chain Shape](images/chain_shape.svg)

   Self-intersection of chain shapes is not supported. It might work, it
   might not. The code that prevents ghost collisions assumes there are no
   self-intersections of the chain. Also, very close vertices can cause
   problems. Make sure all your points are more than than about a centimeter apart.

   .. figure:: https://box2d.org/documentation_v3/self_intersect.svg

      ![Self Intersection is Bad](images/self_intersect.svg)

   Each segment in the chain is created as a `b2SmoothSegment` shape on the body. 
   If you have the shape id for a smooth segment shape, you can get the owning 
   chain id. This will return `b2_nullChainId` if the shape is not a smooth segment.

   .. code::cpp

      b2ChainId chainId = b2SHape_GetParentChain(myShapeId);

   You cannot create a smooth segment shape directly.



Sensors
~~~~~~~

   Sometimes game logic needs to know when two shapes overlap yet there
   should be no collision response. This is done by using sensors. A sensor
   is a shape that detects overlap but does not produce a response.

   You can flag any shape as being a sensor. Sensors may be static,
   kinematic, or dynamic. Remember that you may have multiple shapes per
   body and you can have any mix of sensors and solid shapes. Also,
   sensors only form contacts when at least one body is dynamic, so you
   will not get sensors overlap detection for kinematic versus kinematic,
   kinematic versus static, or static versus static. Finally sensors do not
   detect other sensors. 

   Sensor overlap detection is achieved using events, which are described
   below.


Contacts
--------

   Contacts are internal objects created by Box2D to manage collision between 
   pairs of shapes. They are fundamental to rigid body simulation in games.


Terminology
~~~~~~~~~~~

   Contacts have a fair bit of terminology that are important to review.

   ``contact point`` 接触点
      A contact point is a point where two shapes touch. Box2D approximates
      contact with a small number of points. Specifically, contact between
      two shapes has 0, 1, or 2 points. This is possible because Box2D uses
      convex shapes.

   ``contact normal`` 触点法向量
      A contact normal is a unit vector that points from one shape to another.
      By convention, the normal points from shapeA to shapeB.

   ``contact separation`` 分隔接触
      Separation is the opposite of penetration. Separation is negative when
      shapes overlap.

   ``contact manifold`` 多点接触
      Contact between two convex polygons may generate up to 2 contact points.
      Both of these points use the same normal, so they are grouped into a
      contact manifold, which is an approximation of a continuous region of
      contact.

   ``normal impulse`` 法向量冲击
      The normal force is the force applied at a contact point to prevent the
      shapes from penetrating. For convenience, Box2D uses impulses. The
      normal impulse is just the normal force multiplied by the time step. Since
      Box2D uses sub-stepping, this is the sub-step time step.

   ``tangent impulse`` 切向量冲击
      The tangent force is generated at a contact point to simulate friction.
      For convenience, this is stored as an impulse.

   ``contact point id`` 接触点 ID
      Box2D tries to re-use the contact impulse results from a time step as the
      initial guess for the next time step. Box2D uses contact point ids to match
      contact points across time steps. The ids contain geometric features
      indices that help to distinguish one contact point from another.

   ``speculative contact`` 推断接触
      When two shapes are close together, Box2D will create up to two contact
      points even if the shapes are not touching. This lets Box2D anticipate
      collision to improve behavior. Speculative contact points have positive
      separation.


Contact Lifetime
~~~~~~~~~~~~~~~~

   Contacts are created when two shape's AABBs begin to overlap. Sometimes
   collision filtering will prevent the creation of contacts. Contacts are
   destroyed with the AABBs cease to overlap.

   So you might gather that there may be contacts created for shapes that
   are not touching (just their AABBs). Well, this is correct. It's a
   "chicken or egg" problem. We don't know if we need a contact object
   until one is created to analyze the collision. We could delete the
   contact right away if the shapes are not touching, or we can just wait
   until the AABBs stop overlapping. Box2D takes the latter approach
   because it lets the system cache information to improve performance.


Contact Data
~~~~~~~~~~~~

   As mentioned before, the contact is created and destroyed by
   Box2D automatically. Contact data is not created by the user. However, you are
   able to access the contact data.

   You can get contact data from shapes or bodies. The contact data
   on a shape is a sub-set of the contact data on a body. The contact
   data is only returned for touching contacts. Contacts that are not
   touching provide no meaningful information for an application.

   Contact data is returned in arrays. So first you can ask a shape or
   body how much space you'll need in your array. This number is conservative
   and the actual number of contacts you'll receive may be less than
   this number, but never more.

   .. code::cpp

      int shapeContactCapacity = b2Shape_GetContactCapacity(myShapeId);
      int bodyContactCapacity = b2Body_GetContactCapacity(myBodyId);

   You could allocate array space to get all the contact data in all cases, 
   or you could use a fixed size array and get a limited number of results.

   .. code::cpp

      b2ContactData contactData[10];
      int shapeContactCount = b2Shape_GetContactData(myShapeId, contactData, 10);
      int bodyContactCount = b2Body_GetContactData(myBodyId, contactData, 10);

   `b2ContactData` contains the two shape ids and the manifold.

   .. code::cpp

      for (int i = 0; i < bodyContactCount; ++i)
      {
         b2ContactData* data = contactData + i;
         printf("point count = %d\n", data->manifold.pointCount);
      }

   Getting contact data off shapes and bodies is not the most efficient
   way to handle contact data. Instead you should use contact events.


Sensor Events
~~~~~~~~~~~~~

   Sensor events are available after every call to `b2World_Step()`. Sensor 
   events are the best way to get information about sensors overlaps. There are
   events for when a shape begins to overlap with a sensor.

   .. code::cpp

      b2SensorEvents sensorEvents = b2World_GetSensorEvents(myWorldId);
      for (int i = 0; i < sensorEvents.beginCount; ++i)
      {
         b2SensorBeginTouchEvent* beginTouch = sensorEvents.beginEvents + i;
         void* myUserData = b2Shape_GetUserData(beginTouch->visitorShapeId);
         // process begin event
      }

   And there are events when a shape stops overlapping with a sensor.

   .. code::cpp

      for (int i = 0; i < sensorEvents.endCount; ++i)
      {
         b2SensorEndTouchEvent* endTouch = sensorEvents.endEvents + i;
         void* myUserData = b2Shape_GetUserData(endTouch->visitorShapeId);
         // process end event
      }

   You will not get end events if a shape is destroyed. Sensor events should
   be processed after the world step and before other game logic. This should
   help you avoid processing stale data.

   Sensor events are only enabled for a non-sensor shape if `b2ShapeDef::enableSensorEvents`
   is true.


Contact Events
~~~~~~~~~~~~~~

   Contact events are available after each world step. Like sensor events these 
   should be retrieved and processed before performing other game logic. Otherwise
   you may be accessing orphaned/invalid data.

   You can access all contact events in a single data structure. This is much 
   more efficient than using functions like `b2Body_GetContactData()`.

   .. code::cpp

      b2ContactEvents contactEvents = b2World_GetContactEvents(myWorldId);

   None of this data applies to sensors. All events involve at least one dynamic body.

   There are three kinds of contact events:

   1. Begin touch events
   2. End touch events
   3. Hit events


Contact Touch Event
~~~~~~~~~~~~~~~~~~~

   `b2ContactBeginTouchEvent` is recorded when two shapes begin touching. These only
   contain the two shape ids.

   .. code::cpp

      for (int i = 0; i < contactEvents.beginCount; ++i)
      {
         b2ContactBeginTouchEvent* beginEvent = contactEvents.beginEvents + i;
         ShapesStartTouching(beginEvent->shapeIdA, beginEvent->shapeIdB);
      }

   `b2ContactEndTouchEvent` is recorded when two shapes stop touching. These only
   contain the two shape ids.

   .. code::cpp

      for (int i = 0; i < contactEvents.endCount; ++i)
      {
         b2ContactEndTouchEvent* endEvent = contactEvents.endEvents + i;
         ShapesStopTouching(endEvent->shapeIdA, endEvent->shapeIdB);
      }

   The end touch events are not generated when you destroy a shape or the body that owns it.

   Shapes only generate begin and end touch events if `b2ShapeDef::enableContactEvents` is true.


Hit Events
~~~~~~~~~~

   Typically in games you are mainly concerned about getting contact events for when
   two shapes collide at a significant speed so you can play a sound and/or particle 
   effect. Hit events are the answer for this.

   .. code::cpp

      for (int i = 0; i < contactEvents.hitCount; ++i)
      {
         b2ContactHitEvent* hitEvent = contactEvents.hitEvents + i;
         if (hitEvent->approachSpeed > 10.0f)
         {
            // play sound
         }
      }

   Shapes only generate hit events if `b2ShapeDef::enableHitEvents` is true.
   I recommend you only enable this for shapes that need hit events because
   it creates some overhead. Box2D also only reports hit events that have an
   approach speed is larger than `b2WorldDef::hitEventThreshold`.


Contact Filtering
~~~~~~~~~~~~~~~~~

   Often in a game you don't want all objects to collide. For example, you
   may want to create a door that only certain characters can pass through.
   This is called contact filtering, because some interactions are filtered
   out.

   Contact filtering is setup on shapes and is covered on `Filtering` section.


Advanced Contact Handling
~~~~~~~~~~~~~~~~~~~~~~~~~


Custom Filtering Callback
~~~~~~~~~~~~~~~~~~~~~~~~~

   For the best performance, use the contact filtering provided by `b2Filter`.
   However, in some cases you may need custom filtering. You can do
   this by registering a custom filter callback that implements `b2CustomFilterFcn()`.

   .. code::cpp

      bool MyCustomFilter(b2ShapeId shapeIdA, b2ShapeId shapeIdB, void* context)
      {
         MyGame* myGame = context;
         return myGame->WantsCollision(shapeIdA, shapeIdB);
      }

      // Elsewhere
      b2World_SetCustomFilterCallback(myWorldId, MyCustomFilter, myGame);

   This function must be `thread-safe <https://en.wikipedia.org/wiki/Thread_safety>`__ 
   and must not read from or write to the Box2D world. Otherwise you will get a 
   `race condition <https://en.wikipedia.org/wiki/Race_condition>`__. 


Pre-Solve Callback
~~~~~~~~~~~~~~~~~~

   This is called after collision detection, but before collision resolution. 
   This gives you a chance to disable the contact based on the contact geometry.
   For example, you can implement a one-sided platform using this callback.

   The contact will be re-enabled each time through collision processing, so you 
   will need to disable the contact every time-step. This function must be thread-safe
   and must not read from or write to the Box2D world.

   .. code::cpp

      bool MyPreSolve(b2ShapeId shapeIdA, b2ShapeId shapeIdB, b2Manifold* manifold, void* context)
      {
         MyGame* myGame = context;

         if (myGame->IsHittingBelowPlatform(shapeIdA, shapeIdB, manifold))
         {
            return false;
         }

         return true;
      }

      // Elsewhere
      b2World_SetPreSolveCallback(myWorldId, MyPreSolve, myGame);

   Note this currently does not work with high speed collisions, so you may see a
   pause in those situations.

   See the `Platformer` sample for more details.


Joints
------

   Joints are used to constrain bodies to the world or to each other.
   Typical examples in games include ragdolls, teeters, and pulleys. Joints
   can be combined in many different ways to create interesting motions.

   Some joints provide limits so you can control the range of motion. Some
   joints provide motors which can be used to drive the joint at a
   prescribed speed until a prescribed force/torque is exceeded. And some
   joints provide springs with damping.

   Joint motors can be used in many ways. You can use motors to control
   position by specifying a joint velocity that is proportional to the
   difference between the actual and desired position. You can also use
   motors to simulate joint friction: set the joint velocity to zero and
   provide a small, but significant maximum motor force/torque. Then the
   motor will attempt to keep the joint from moving until the load becomes
   too strong.


Joint Definition
~~~~~~~~~~~~~~~~

   Each joint type has an associated joint definition. All
   joints are connected between two different bodies. One body may be static.
   Joints between static and/or kinematic bodies are allowed, but have no
   effect and use some processing time.

   If a joint is connected to a disabled body, that joint is effectively disabled.
   When the both bodies on a joint become enabled, the joint will automatically
   be enabled as well. In other words, you do not need to explicitly enable
   or disable a joint.

   You can specify user data for any joint type and you can provide a flag
   to prevent the attached bodies from colliding with each other. This is
   the default behavior and you must set the `collideConnected`
   Boolean to allow collision between to connected bodies.

   Many joint definitions require that you provide some geometric data.
   Often a joint will be defined by anchor points. These are points fixed
   in the attached bodies. Box2D requires these points to be specified in
   local coordinates. This way the joint can be specified even when the
   current body transforms violate the joint constraint. Additionally, some joint
   definitions need a reference angle between the bodies.
   This may be necessary to constrain rotation correctly.

   The rest of the joint definition data depends on the joint type. I
   cover these below.


Joint Lifetime
~~~~~~~~~~~~~~

   Joints are created using creation functions supplied for each joint type. 
   They are destroyed with a shared function. All joint types share a single 
   id type `b2JointId`.

   Here's an example of the lifetime of a revolute joint:

   .. code::cpp

      b2RevoluteJointDef jointDef = b2DefaultRevoluteJointDef();
      jointDef.bodyIdA = myBodyA;
      jointDef.bodyIdB = myBodyB;
      jointDef.localAnchorA = (b2Vec2){0.0f, 0.0f};
      jointDef.localAnchorB = (b2Vec2){1.0f, 2.0f};

      b2JointId myJointId = b2CreateRevoluteJoint(myWorldId, &jointDef);

      // ... do stuff ...

      b2DestroyJoint(myJointId);
      myJointId = b2_nullJointId;

   It is always good to nullify your ids after they are destroyed. 

   Joint lifetime is related to body lifetime. Joints cannot exist detached from a body. 
   So when a body is destroyed, all joints attached to that body are automatically destroyed.
   This means you need to be careful to avoid using joint ids when the attached body was
   destroyed. Box2D will assert if you use a dangling joint id.


   .. Caution::

      **Caution**:
      Joints are destroyed when an attached body is destroyed.

   Fortunately you can check if your joint id is valid.

   .. code::cpp

      if (b2Joint_IsValid(myJointId) == false)
      {
         myJointId = b2_nullJointId;
      }

   This is certainly useful, but should not be overused because if you are creating
   and destroying many joints, this may eventually alias to a different joint. All ids have
   a limit of 64k generations.


Using Joints
~~~~~~~~~~~~

   Many simulations create the joints and don't access them again until
   they are destroyed. However, there is a lot of useful data contained in
   joints that you can use to create a rich simulation.

   First of all, you can get the type, bodies, anchor points, and user data from
   a joint.

   .. code::cpp

      b2JointType jointType = b2Joint_GetType(myJointId);
      b2BodyId bodyIdA = b2Joint_GetBodyA(myJointId);
      b2BodyId bodyIdB = b2Joint_GetBodyB(myJointId);
      b2Vec2 localAnchorA = b2Joint_GetLocalAnchorA(myJointId);
      b2Vec2 localAnchorB = b2Joint_GetLocalAnchorB(myJointId);
      void* myUserData = b2Joint_GetUserData(myJointId);

   All joints have a reaction force and torque. Reaction forces are related 
   to the `free body diagram <https://en.wikipedia.org/wiki/Free_body_diagram>`__.
   The Box2D convention is that the reaction force is applied to body B at 
   the anchor point. You can use reaction forces to break joints or trigger 
   other game events. These functions may do some computations, so don't call 
   them if you don't need the result.

   .. code::cpp

      b2Vec2 force = b2Joint_GetConstraintForce(myJointId);
      float torque = b2Joint_GetConstraintTorque(myJointId);

   See the sample `BreakableJoint` for more details.


Distance Joint
~~~~~~~~~~~~~~

   One of the simplest joints is a distance joint which says that the
   distance between two points on two bodies must be constant. When you
   specify a distance joint the two bodies should already be in place. Then
   you specify the two anchor points in local coordinates. The first anchor
   point is connected to body A, and the second anchor point is connected
   to body B. These points imply the length of the distance constraint.

   .. figure:: https://box2d.org/documentation_v3/distance_joint.svg

      ![Distance Joint](images/distance_joint.svg)

   Here is an example of a distance joint definition. In this case I
   decided to allow the bodies to collide.

   .. code::cpp

      b2DistanceJointDef jointDef = b2DefaultDistanceJointDef();
      jointDef.bodyIdA = myBodyIdA;
      jointDef.bodyIdB = myBodyIdB;
      jointDef.localAnchorA = (b2Vec2){1.0f, -3.0f};
      jointDef.localAnchorB = (b2Vec2){0.0f, 0.5f};
      b2Vec2 anchorA = b2Body_GetWorldPoint(myBodyIdA, jointDef.localAnchorA);
      b2Vec2 anchorB = b2Body_GetWorldPoint(myBodyIdB, jointDef.localAnchorB);
      jointDef.length = b2Distance(anchorA, anchorB);
      jointDef.collideConnected = true;

      b2JointId myJointId = b2CreateDistanceJoint(myWorldId, &jointDef);

   The distance joint can also be made soft, like a spring-damper connection. 
   Softness is achieved by enabling the spring and tuning two values in the definition:
   Hertz and damping ratio.

   .. code::cpp

      jointDef.enableSpring = true;
      jointDef.hertz = 2.0f;
      jointDef.dampingRatio = 0.5f;

   The hertz is the frequency of a `harmonic oscillator <https://en.wikipedia.org/wiki/Harmonic_oscillator>`__ 
   (like a guitar string). Typically the frequency should be less than a half 
   the frequency of the time step. So if you are using a 60Hz time step, the 
   frequency of the distance joint should be less than 30Hz.
   The reason is related to the `Nyquist frequency <https://en.wikipedia.org/wiki/Nyquist_frequency>`__.

   The damping ratio controls how fast the oscillations dissipate. A damping
   ratio of one is `critical damping <https://en.wikipedia.org/wiki/Damping>`__ 
   and prevents oscillation.

   It is also possible to define a minimum and maximum length for the distance joint.
   You can even motorize the distance joint to adjust its length dynamically.
   See `b2DistanceJointDef` and the `DistanceJoint` sample for details.


Revolute Joint
~~~~~~~~~~~~~~

   A revolute joint forces two bodies to share a common anchor point, often
   called a hinge point or pivot. The revolute joint has a single degree of freedom:
   the relative rotation of the two bodies. This is called the joint angle.

   .. figure:: https://box2d.org/documentation_v3/revolute_joint.svg

      ![Revolute Joint](images/revolute_joint.svg)

   Like all joints, the anchor points are specified in local coordinates.
   However, you can use the body utility functions to simplify this.

   .. code::cpp

      b2Vec2 worldPivot = {10.0f, -4.0f};
      b2RevoluteJointDef jointDef = b2DefaultRevoluteJointDef();
      jointDef.bodyIdA = myBodyIdA;
      jointDef.bodyIdB = myBodyIdB;
      jointDef.localAnchorA = b2Body_GetLocalPoint(myBodyIdA, worldPivot);
      jointDef.localAnchorB = b2Body_GetLocalPoint(myBodyIdB, worldPivot);

      b2JointId myJointId = b2CreateRevoluteJoint(myWorldId, &jointDef);

   The revolute joint angle is positive when bodyB rotates counter-clockwise about 
   the anchor point. Like all angles in Box2D, the revolute angle is measured in 
   radians. By convention the revolute joint angle is zero when the two bodies
   have equal angles. You can offset this using `b2RevoluteJointDef::referenceAngle`.

   In some cases you might wish to control the joint angle. For this, the
   revolute joint can simulate a joint limit and/or a motor.

   A joint limit forces the joint angle to remain between a lower and upper
   angle. The limit will apply as much torque as needed to make this
   happen. The limit range should include zero, otherwise the joint will
   lurch when the simulation begins. The lower and upper limit are relative to
   the reference angle.

   A joint motor allows you to specify the joint speed. The speed can be negative 
   or positive. A motor can have infinite force, but this is usually not desirable. 
   Recall the eternal question:

      *What happens when an irresistible force meets an immovable object?*

   I can tell you it's not pretty. So you can provide a maximum torque for
   the joint motor. The joint motor will maintain the specified speed
   unless the required torque exceeds the specified maximum. When the
   maximum torque is exceeded, the joint will slow down and can even
   reverse.

   You can use a joint motor to simulate joint friction. Just set the joint
   speed to zero, and set the maximum torque to some small, but significant
   value. The motor will try to prevent the joint from rotating, but will
   yield to a significant load.

   Here's a revision of the revolute joint definition above; this time the
   joint has a limit and a motor enabled. The motor is setup to simulate
   joint friction.

   .. code::cpp

      b2Vec2 worldPivot = {10.0f, -4.0f};
      b2RevoluteJointDef jointDef = b2DefaultRevoluteJointDef();
      jointDef.bodyIdA = myBodyIdA;
      jointDef.bodyIdB = myBodyIdB;
      jointDef.localAnchorA = b2Body_GetLocalPoint(myBodyIdA, worldPivot);
      jointDef.localAnchorB = b2Body_GetLocalPoint(myBodyIdB, worldPivot);
      jointDef.lowerAngle = -0.5f * b2_pi; // -90 degrees
      jointDef.upperAngle = 0.25f * b2_pi; // 45 degrees
      jointDef.enableLimit = true;
      jointDef.maxMotorTorque = 10.0f;
      jointDef.motorSpeed = 0.0f;
      jointDef.enableMotor = true;

   You can access a revolute joint's angle, speed, and motor torque.

   .. code::cpp

      float angleInRadians = b2RevoluteJoint_GetAngle(myJointId);
      float speed = b2RevoluteJoint_GetMotorSpeed(myJointId);
      float currentTorque = b2RevoluteJoint_GetMotorTorque(myJointId);

   You also update the motor parameters each step.

   .. code::cpp

      b2RevoluteJoint_SetMotorSpeed(myJointId, 20.0f);
      b2RevoluteJoint_SetMaxMotorTorque(myJointId, 100.0f);

   Joint motors have some interesting abilities. You can update the joint
   speed every time step so you can make the joint move back-and-forth like
   a sine-wave or according to whatever function you want.

   .. code::cpp

      // ... Game Loop Begin ...

      b2RevoluteJoint_SetMotorSpeed(myJointId, cosf(0.5f * time));

      // ... Game Loop End ...

   You can also use joint motors to track a desired joint angle. For example:

   .. code::cpp

      // ... Game Loop Begin ...

      float angleError = b2RevoluteJoint_GetAngle(myJointId) - angleTarget;
      float gain = 0.1f;
      b2RevoluteJoint_SetMotorSpeed(myJointId, -gain * angleError);

      // ... Game Loop End ...

   Generally your gain parameter should not be too large. Otherwise your
   joint may become unstable.


Prismatic Joint
~~~~~~~~~~~~~~~

   A prismatic joint allows for relative translation of two bodies along a
   local axis. A prismatic joint prevents relative rotation. Therefore,
   a prismatic joint has a single degree of freedom.

   .. figure:: https://box2d.org/documentation_v3/prismatic_joint.svg

      ![Prismatic Joint](images/prismatic_joint.svg)

   The prismatic joint definition is similar to the revolute joint
   description; just substitute translation for angle and force for torque.
   Using this analogy provides an example prismatic joint definition with a
   joint limit and a friction motor:

   .. code::cpp

      b2Vec2 worldPivot = {10.0f, -4.0f};
      b2Vec2 worldAxis = {1.0f, 0.0f};
      b2PrismaticJointDef jointDef;
      b2RevoluteJointDef jointDef = b2DefaultRevoluteJointDef();
      jointDef.bodyIdA = myBodyIdA;
      jointDef.bodyIdB = myBodyIdB;
      jointDef.localAnchorA = b2Body_GetLocalPoint(myBodyIdA, worldPivot);
      jointDef.localAnchorB = b2Body_GetLocalPoint(myBodyIdB, worldPivot);
      jointDef.localAxisA = b2Body_GetLocalVector(myBodyIdA, worldAxis);
      jointDef.lowerTranslation = -5.0f;
      jointDef.upperTranslation = 2.5f;
      jointDef.enableLimit = true;
      jointDef.maxMotorForce = 1.0f;
      jointDef.motorSpeed = 0.0f;
      jointDef.enableMotor = true;

   The revolute joint has an implicit axis coming out of the screen. The
   prismatic joint needs an explicit axis parallel to the screen. This axis
   is fixed in body A.

   The prismatic joint translation is zero when the anchor points overlap. I recommend
   to have the prismatic anchor points close to the center of mass of the two bodies.
   This will improve joint stiffness.

   Using a prismatic joint is similar to using a revolute joint. Here are
   the relevant member functions:

   .. code::cpp

      float PrismaticJoint::GetJointTranslation() const;
      float PrismaticJoint::GetJointSpeed() const;
      float PrismaticJoint::GetMotorForce() const;
      void PrismaticJoint::SetMotorSpeed(float speed);
      void PrismaticJoint::SetMotorForce(float force);


Mouse Joint
~~~~~~~~~~~

   The mouse joint is used in the samples to manipulate bodies with the
   mouse. It attempts to drive a point on a body towards the current
   position of the cursor. There is no restriction on rotation.

   The mouse joint definition has a target point, maximum force, Hertz,
   and damping ratio. The target point initially coincides with the body's
   anchor point. The maximum force is used to prevent violent reactions
   when multiple dynamic bodies interact. You can make this as large as you
   like. The frequency and damping ratio are used to create a spring/damper
   effect similar to the distance joint.


Wheel Joint
~~~~~~~~~~~

   The wheel joint restricts a point on bodyB to a line on bodyA. The wheel
   joint also provides a suspension spring and a motor. See the `Driving` sample
   for details.

   .. figure:: https://box2d.org/documentation_v3/wheel_joint.svg

      ![Wheel Joint](images/wheel_joint.svg)


Weld Joint
~~~~~~~~~~

   The weld joint attempts to constrain all relative motion between two
   bodies. See the `Cantilever` sample to see how the weld joint
   behaves.

   It is tempting to use the weld joint to define breakable structures.
   However, the Box2D solver is approximate so the joints can be soft in some
   cases regardless of the joint settings. So chains of bodies connected by weld
   joints may flex.

   See the `ContactEvent` sample for an example of how to merge and split bodies
   without using the weld joint.


Motor Joint
~~~~~~~~~~~

   A motor joint lets you control the motion of a body by specifying target
   position and rotation offsets. You can set the maximum motor force and
   torque that will be applied to reach the target position and rotation.
   If the body is blocked, it will stop and the contact forces will be
   proportional the maximum motor force and torque. See `b2MotorJointDef` and
   the `MotorJoint` sample for details.


Wheel Joint
~~~~~~~~~~~

   The wheel joint is designed specifically for vehicles. It provides a translation
   and rotation. The translation has a spring and damper to simulate the vehicle
   suspension. The rotation allows the wheel to rotate. You can specify an rotational
   motor to drive the wheel and to apply braking. See `b2WheelJointDef` and the `Drive`
   sample for details.

   You may also use the wheel joint where you want free rotation and translation along
   an axis. See the `ScissorLift` sample for details.


Spatial Queries
---------------

   Spatial queries allow you to inspect the world geometrically. There are overlap queries,
   ray-casts, and shape-casts. These allow you to do things like:

   - find a treasure chest near the player
   - shoot a laser beam and destroy all asteroids in the path
   - throw a grenade that is represented as a circle moving along a parabolic path


Overlap Queries
~~~~~~~~~~~~~~~

   Sometimes you want to determine all the shapes in a region. The world has a fast
   log(N) method for this using the broad-phase data structure. Box2D provides these
   overlap tests:
   - axis-aligned bound box (AABB) overlap
   - circle overlap
   - capsule overlap
   - polygon overlap


Query Filtering
~~~~~~~~~~~~~~~

   A basic understanding of query filtering is needed before considering the specific queries.
   Shape versus shape filtering was discussed on `Filtering` section. A similar setup is used
   for queries. This lets your queries only consider certain categories of shapes, it also
   lets your shapes ignore certain queries.

   Just like shapes, queries themselves can have a category. For example, you can have a `CAMERA`
   or `PROJECTILE` category.

   .. code::cpp

      enum MyCategories
      {
         STATIC = 0x00000001,
         PLAYER = 0x00000002,
         MONSTER = 0x00000004,
         WINDOW = 0x00000008,
         CAMERA = 0x00000010,
         PROJECTILE = 0x00000020,
      };

      // Grenades collide with the static world, monsters, and windows but
      // not players or other projectiles.
      b2QueryFilter grenadeFilter;
      grenadeFilter.categoryBits = PROJECTILE;
      grenadeFilter.maskBits = STATIC | MONSTER | WINDOW;

      // The view collides with the static world, monsters, and players.
      b2QueryFilter viewFilter;
      viewFilter.categoryBits = CAMERA;
      viewFilter.maskBits = STATIC | PLAYER | MONSTER;

   If you want to query everything you can use `b2DefaultQueryFilter()`;


AABB Overlap
~~~~~~~~~~~~

   You provide an AABB in world coordinates and an
   implementation of `b2OverlapResultFcn()`. The world calls your function with each
   shape whose AABB overlaps the query AABB. Return true to continue the
   query, otherwise return false. For example, the following code finds all
   the shapes that potentially intersect a specified AABB and wakes up
   all of the associated bodies.

   .. code::cpp

      bool MyOverlapCallback(b2ShapeId shapeId, void* context)
      {
         b2BodyId bodyId = b2Shape_GetBody(shapeId);
         b2Body_SetAwake(bodyId, true);

         // Return true to continue the query.
         return true;
      }

      // Elsewhere ...
      MyOverlapCallback callback;
      b2AABB aabb;
      aabb.lowerBound = (b2Vec2){-1.0f, -1.0f};
      aabb.upperBound = (b2Vec2){1.0f, 1.0f};
      b2QueryFilter filter = b2DefaultQueryFilter();
      b2World_OverlapAABB(myWorldId, aabb, filter, MyOverlapCallback, &myGame);

   Do not make any assumptions about the order of the callback. The order shapes
   are returned to your callback may seem arbitrary.


Shape Overlap
~~~~~~~~~~~~~

   The AABB overlap is very fast but not very accurate because it only considers
   the shape bounding box. If you want an accurate overlap test, you can use a shape
   overlap query. For example, here is how you can get all shapes that overlap
   with a query circle.

   .. code::cpp

      b2Circle circle = {b2Vec2_zero, 0.2f};
      b2World_OverlapCircle(myWorldId, &circle, b2Transform_identity, grenadeFilter, MyOverlapCallback, &myGame);


Ray-casts
~~~~~~~~~

   You can use ray-casts to do line-of-sight checks, fire guns, etc. You
   perform a ray-cast by implementing the `b2CastResultFcn()` callback
   function and providing the origin point and translation. The world calls 
   your function with each shape hit by the ray. Your callback is provided 
   with the shape, the point of intersection, the unit normal vector, and 
   the fractional distance along the ray. You cannot make any assumptions 
   about the order of the points sent to the callback. The callback may receive 
   points that are further away before receiving points that are closer.

   You control the continuation of the ray-cast by returning a fraction.
   Returning a fraction of zero indicates the ray-cast should be
   terminated. A fraction of one indicates the ray-cast should continue as
   if no hit occurred. If you return the fraction from the argument list,
   the ray will be clipped to the current intersection point. So you can
   ray-cast any shape, ray-cast all shapes, or ray-cast the closest shape
   by returning the appropriate fraction.

   You may also return of fraction of -1 to filter the shape. Then the
   ray-cast will proceed as if the shape does not exist.

   Here is an example:

   .. code::cpp

      // This struct captures the closest hit shape
      struct MyRayCastContext
      {
         b2ShapeId shapeId;
         b2Vec2 point;
         b2Vec2 normal;
         float fraction;
      };

      float MyCastCallback(b2ShapeId shapeId, b2Vec2 point, 
                           b2Vec2 normal, float fraction, void* context)
      {
         MyRayCastContext* myContext = context;
         myContext->shape = shape;
         myContext->point = point;
         myContext->normal = normal;
         myContext->fraction = fraction;
         return fraction;
      }

      // Elsewhere ...
      MyRayCastContext context = {0};
      b2Vec2 origin = {-1.0f, 0.0f};
      b2Vec2 end(3.0f, 1.0f);
      b2Vec2 translation = b2Sub(end, origin);
      b2World_CastRay(myWorldId, origin, translation, viewFilter, MyCastCallback, &context);

   Ray-cast results may be delivered in an arbitrary order. This doesn't affect 
   the result for closest point ray-casts (except in ties). When you are 
   collecting multiple hits along the ray, you may want to sort them according 
   to the hit fraction. See the `RayCastWorld` sample for details.


Shape-casts
~~~~~~~~~~~

   Shape-casts are similar to ray-casts. You can view a ray-cast as tracing 
   a point along a line. A shape-cast allows you to trace a shape along a line. 
   Since shapes can have rotation, you provide an origin transform instead of 
   an origin point.

   .. code::cpp

      // This struct captures the closest hit shape
      struct MyRayCastContext
      {
         b2ShapeId shapeId;
         b2Vec2 point;
         b2Vec2 normal;
         float fraction;
      };

      float MyCastCallback(b2ShapeId shapeId, b2Vec2 point, 
                           b2Vec2 normal, float fraction, void* context)
      {
         MyRayCastContext* myContext = context;
         myContext->shape = shape;
         myContext->point = point;
         myContext->normal = normal;
         myContext->fraction = fraction;
         return fraction;
      }

      // Elsewhere ...
      MyRayCastContext context = {0};
      b2Circle circle = {b2Vec2_zero, {0.05f}};
      b2Transform originTransform;
      originTransform.p = (b2Vec2){-1.0f, 0.0f};
      originTransform.q = b2Rot_identity;
      b2Vec2 translation = {10.0f, -5.0f};
      b2World_CastCircle(myWorldId, &circle, originTransform, translation, 
                         grenadeFilter, MyCastCallback, &context);

   Otherwise, shape-casts are setup identically to ray-casts. You can expect 
   shape-casts to generally be slower than ray-casts. So only use a shape-cast 
   if a ray-cast won't do.

   Just like ray-casts, shape-casts results may be sent to the callback in 
   any order. If you need multiple sorted results, you will need to write 
   some code to collect and sort the results.


👊 Loose Ends
=============


User Data
---------

   Bodies, shapes, and joints allow you to attach user data
   as a `void*`. This is handy when you are examining Box2D data
   structures and you want to determine how they relate to the objects in
   your game engine.

   For example, it is typical to attach an entity pointer to the rigid body
   on that entity. This sets up a circular reference. If you have the entity,
   you can get the body. If you have the body, you can get the entity.

   .. code::cpp

      GameEntity* entity = GameCreateEntity();
      b2BodyDef bodyDef = b2DefaultBodyDef();
      bodyDef.userData = entity;
      entity->bodyId = b2CreateBody(myWorldId, &bodyDef);

   Here are some examples of cases where you would need the user data:

   -  Applying damage to an entity using a collision result.
   -  Playing a scripted event if the player is inside an axis-aligned box.
   -  Accessing a game structure when Box2D notifies you that a joint is
      going to be destroyed.

   Keep in mind that user data is optional and you can put anything in it.
   However, you should be consistent. For example, if you want to store an
   entity pointer on one body, you should keep an entity pointer on all
   bodies. Don't store a `GameEntity` pointer on one body, and a `ParticleSystem`
   pointer on another body. Casting a `GameEntity` to a `ParticleSystem` pointer
   may lead to a crash.


Pixels and Coordinate Systems
-----------------------------

   I recommend using MKS (meters, kilograms, and seconds) units and
   radians for angles. You may have trouble working with meters because
   your game is expressed in terms of pixels. To deal with this in the
   sample I have the whole *game* world in meters and just use an OpenGL
   viewport transformation to scale the world into screen space.

   You use code like this to scale your graphics.

   .. code::cpp

      float lowerX = -25.0f, upperX = 25.0f, lowerY = -5.0f, upperY = 25.0f;
      gluOrtho2D(lowerX, upperX, lowerY, upperY);

   If your game must work in pixel units then you could convert your
   length units from pixels to meters when passing values from Box2D.
   Likewise you should convert the values received from Box2D from meters
   to pixels. This will improve the stability of the physics simulation.

   You have to come up with a reasonable conversion factor. I suggest
   making this choice based on the size of your characters. Suppose you
   have determined to use 50 pixels per meter (because your character is 75
   pixels tall). Then you can convert from pixels to meters using these
   formulas:

   .. code::cpppp

      xMeters = 0.02f * xPixels;
      yMeters = 0.02f * yPixels;

   In reverse:

   .. code::cpppp

      xPixels = 50.0f * xMeters;
      yPixels = 50.0f * yMeters;

   You should consider using MKS units in your game code and just convert
   to pixels when you render. This will simplify your game logic and reduce
   the chance for errors since the rendering conversion can be isolated to
   a small amount of code.

   If you use a conversion factor, you should try tweaking it globally to
   make sure nothing breaks. You can also try adjusting it to improve
   stability.

   If this conversion is not possible, you can set the length units used
   by Box2D using `b2SetLengthUnitsPerMeter()`. This is experimental and not
   well tested.


Debug Drawing
-------------

   You can implement the function pointers in `b2DebugDraw` struct to get detailed
   drawing of the Box2D world. Debug draw provides:

   - shapes
   - joints
   - broad-phase axis-aligned bounding boxes (AABBs)
   - center of mass
   - contact points

   This is the preferred method of drawing the Box2D simulation, rather
   than accessing the data directly. The reason is that much of the
   necessary data is internal and subject to change.

   The samples application draws the Box2D world using the `b2DebugDraw`.


Limitations
-----------

   Box2D uses several approximations to simulate rigid body physics
   efficiently. This brings some limitations.

   Here are the current limitations:

   1. Extreme mass ratios may cause joint stretching and collision overlap.
   2. Box2D uses soft constraints to improve robustness. This can lead to 
      joint and contact flexing.
   3. Continuous collision does not handle all situations. For example, 
      general dynamic versus dynamic continuous collision is not handled. 
      Bullets handle this in a limited way. This is done for performance reasons.
   4. Continuous collision does not handle joints. So you may see joint 
      stretching on fast moving objects. Usually the joints recover after 
      a few time steps.
   5. Box2D uses the `semi-implicit Euler method <https://en.wikipedia.org/wiki/Semi-implicit_Euler_method>`__ 
      to solve the `equations of motion <https://en.wikipedia.org/wiki/Equations_of_motion>`__. 
      It does not reproduce exactly the parabolic motion of projectiles and 
      has only first-order accuracy. However it is fast and has good stability.
   6. Box2D uses a the `Gauss-Seidel method <https://en.wikipedia.org/wiki/Gauss%E2%80%93Seidel_method>`__ 
      to solve constraints and achieve real-time performance. You will not 
      get precisely rigid collisions or pixel perfect accuracy. Increasing 
      the sub-step count will improve accuracy.


👊 Further Reading
==================

- `Erin Catto's Publications <https://box2d.org/publications/>`__
- Collision Detection in Interactive 3D Environments, Gino van den Bergen, 2004
- Real-Time Collision Detection, Christer Ericson, 2005


👊 FAQ
======

What is Box2D?
--------------

   Box2D is a feature rich 2D rigid body physics engine, written in C11 by 
   Erin Catto. It has been used in many games and in many game engines.

   Box2D uses the `MIT license <https://en.wikipedia.org/wiki/MIT_License>`__
   license and can be used free of charge. Credit should be included if possible. 
   Support is `appreciated <https://github.com/sponsors/erincatto>`__. You may 
   use the Box2D `logo <https://box2d.org/images/logo.svg>`__.

What platforms does Box2D support?
----------------------------------

   Box2D is developed using C11. Ports and bindings are likely available for 
   most languages and platforms.

   Erin Catto maintains the C11 version, but provides no support for other 
   languages. Other languages are supported by the community and possibly 
   by the authors of those ports.

Who makes it?
-------------

   Erin Catto is the creator and sole contributor of the C11 version of Box2D, 
   with various others supporting the ports. Box2D is an open source project, 
   and accepts community feedback.

How do I get help?
------------------

   You should read the documentation and the rest of this FAQ first. Also, 
   you should study the examples included in the source distribution. Then 
   you can visit the `Discord <https://discord.gg/aM4mRKxW>`__ to ask any 
   remaining questions.

   Please to not message or email Erin Catto for support. It is best to ask 
   questions on the Discord server so that everyone can benefit from the discussion.


Documentation
-------------

Why isn't a feature documented?

   If you grab the latest code from the git master branch you will likely 
   find features that are not documented in the manual. New features are 
   added to the manual after they are mature and a new point release is 
   imminent. However, all major features added to Box2D are accompanied by 
   example code in the samples application to test the feature and show the 
   intended usage.


Prerequisites
-------------

Programming

   You should have a working knowledge of C before you use Box2D. You should 
   understand functions, structures, and pointers. There are plenty of 
   resources on the web for learning C. You should also understand your 
   development environment: compilation, linking, and debugging.


Math and Physics

   You should have a basic knowledge of rigid bodies, force, torque, and 
   impulses. If you come across a math or physics concept you don't 
   understand, please read about it on Wikipedia. Visit this `page <http://box2d.org/publications/>`__
   if you want a deeper knowledge of the algorithms used in Box2D.


API
---

What units does Box2D use?

   Box2D is tuned for meters-kilograms-seconds (MKS). This is recommend as the 
   units for your game. However, you may use different units if you are careful.


How do I convert pixels to meters?

   Suppose you have a sprite for a character that is 100x100 pixels. You decide 
   to use a scaling factor that is 0.01. This will make the character physics 
   box 1m x 1m. So go make a physics box that is 1x1. Now suppose the character 
   starts out at pixel coordinate (345,679). So position the physics box at 
   (3.45,6.79). Now simulate the physics world. Suppose the character physics 
   box moves to (2.31,4.98), so move your character sprite to pixel coordinates 
   (231,498).

   Now the only tricky part is choosing a scaling factor. This really depends on 
   your game. You should try to get your moving objects in the range 0.1 - 10 
   meters, with 1 meter being the sweet spot.

   This `repo <https://github.com/erincatto/box2d-raylib>`__ shows how to convert
   meters to pixels.


Why don't you use this awesome language?

   Box2D is designed to be portable and easy to wrap with other languages, so I 
   decided to use C11. I used C11 to get support for atomics.


Can I use Box2D in a DLL?

   Yes. See the CMake option `BUILD_SHARED_LIBS`.


Is Box2D thread-safe?

   No. Box2D will likely never be thread-safe. Box2D has a large API and trying
   to make such an API thread-safe would have a large performance and complexity 
   impact. However, you can call read only functions from multiple threads. 
   For example, all the `spatial query` functions are read only.


Build Issues
------------

Why doesn't my code compile and/or link?

   There are many reasons why a build can go bad. Here are a few that have come up:

   * Using old Box2D headers with new code
   * Not linking the Box2D library with your application
   * Using old project files that don't include some new source files


Rendering
---------

What are Box2D's rendering capabilities?

   Box2D is only a physics engine. How you draw stuff is up to you.


But the samples application draws stuff

   Visualization is very important for debugging collision and physics. 
   I wrote the samples application to help me test Box2D and give you 
   examples of how to use Box2D. The samples are not part of the Box2D library.


How do I draw shapes?

   Implement the `b2DebugDraw` interface and call `b2World_Draw()`.


Accuracy
--------

   Box2D uses approximate methods for a few reasons.
   * Performance
   * Some differential equations don't have known solutions
   * Some constraints cannot be determined uniquely

   What this means is that constraints are not perfectly rigid and sometimes 
   you will see some bounce even when the restitution is zero.

   Box2D uses `Gauss-Seidel <https://en.wikipedia.org/wiki/Gauss%E2%80%93Seidel_method>`__
   to approximately solve constraints. Box2D also uses `Semi-implicit Euler <https://en.wikipedia.org/wiki/Semi-implicit_Euler_method>`__
   to approximately solve the differential equations. Box2D also does not have 
   exact collision. There is no continuous collision between dynamic shapes. 
   Slow moving shapes may have small overlap for a few time steps. In extreme 
   stacking scenarios, shapes may have sustained overlap.


Making Games
------------

Worms Clones

   Making a worms clone requires arbitrarily destructible terrain. This is 
   beyond the scope of Box2D, so you will have to figure out how to do this 
   on your own.


Tile Based Environment

   Using many boxes for your terrain may not work well because box-like 
   characters can get snagged on internal corners. Box2D proves chain shapes
   for smooth collision, see `b2ChainDef`. In general you should avoid using 
   a rectangular character because collision tolerances will still lead to 
   undesirable snagging. Box2D provides capsules and rounded polygons that 
   may work better for characters.


Asteroid Type Coordinate Systems

   Box2D does not have any support for coordinate frame wrapping. You would
   likely need to customize Box2D for this purpose. You may need to use a 
   different broad-phase for this to work.


Determinism
-----------

Is Box2D deterministic?

   For the same input, and same binary, Box2D will reproduce any simulation. 
   Box2D does not use any random numbers nor base any computation on random 
   events (such as timers, etc).

   Box2D is also deterministic under multithreading. A simulation using two 
   threads will give the same result as eight threads.

   However, people often want more stringent determinism. People often want 
   to know if Box2D can produce identical results on different binaries and 
   on different platforms. Currently this is not provided, but the situation 
   may improve in a future update.


But I really want determinism

   This naturally leads to the question of fixed-point math. Box2D does not 
   support fixed-point math. In the past Box2D was ported to the NDS in 
   fixed-point and apparently it worked okay. Fixed-point math is slower and 
   more tedious to develop, so I have chosen not to use fixed-point for the 
   development of Box2D.


What are the common mistakes made by new users?
-----------------------------------------------

   * Using pixels for length instead of meters
   * Expecting Box2D to give pixel perfect results
   * Testing their code in release mode
   * Not learning C before using Box2D


👊 Migration Guide
==================


Version 2.4 to Version 3.0

   Box2D version 3.0 is a full rewrite. You can read some background information
   `here <https://box2d.org/posts/2023/01/starting-box2d-3.0/>`__.

   Here are the highlights that affect the API:

   - moved from C++ to C
   - identifiers (handles) instead of pointers
   - multithreading support
   - fewer callbacks
   - more features (such as capsules and shape casts)
   - new sub-stepping solver

   However, the scope of what Box2D does has not changed much. It is still a 
   2D rigid body engine. It is just faster and more robust (hopefully). And 
   hopefully it is easier to work with and port/wrap for other languages/platforms.

   I'm going to describe migration by comparing code snippets between 2.4 and 3.0.
   These should give you and idea of the sort of transformations you need to 
   make to your code to migrate to v3.0.

   I'm not going to cover all the details of v3.0 in this guide. That is the 
   job of the manual, the doxygen reference, and the samples.

   The surface area of the Box2D is smaller in v3.0 because C++ is not good 
   at hiding details. So hopefully you find the new API easier to work with.


Creating a world

   Version 2.4:

   .. code::cpp

      #include "box2d/box2d.h"
      b2Vec2 gravity(0.0f, -10.0f);
      b2World world(gravity);

   Version 3.0:

   .. code::cpp

      #include "box2d/box2d.h"
      b2Vec2 gravity = {0.0f, -10.0f};
      b2WorldDef worldDef = b2DefaultWorldDef();
      worldDef.gravity = gravity;
      b2WorldId worldId = b2CreateWorld(&worldDef);

   There is now a required world definition. C does not have constructors, 
   so you need to initialize **ALL** structures that you pass to Box2D. 
   Box2D provides an initialization helper for almost all structures. 
   For example `b2DefaultWorldDef()` is used here to initialize `b2WorldDef`. 
   `b2WorldDef` provides many options, but the defaults are good enough to get going.

   In Version 3.0, Box2D objects are generally hidden and you only have an 
   identifier. This keeps the API small. So when you create a world you just 
   get a `b2WorldId` which you should treat as an atomic object, like `int` 
   or `float`. It is small and should be passed by value.

   In Version 3.0 there are also no destructors, so you must destroy the world.

   .. code::cpp

      b2DestroyWorld(worldId);
      worldId = b2_nullWorldId;

   This destroys all bodies, shapes, and joints as well. This is quicker than 
   destroying them individually. Just like pointers, it is good practice to 
   nullify identifiers. Box2D provides null values for all identifiers and also 
   macros such as `B2_IS_NULL` to test if an identifier is null.


Creating a body

   Version 2.4:

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.type = b2_dynamicBody;
      bodyDef.position.Set(0.0f, 4.0f);
      b2Body* body = world.CreateBody(&bodyDef);

   Version 3.0:

   .. code::cpp

      b2BodyDef bodyDef = b2DefaultBodyDef();
      bodyDef.type = b2_dynamicBody;
      bodyDef.position = {0.0f, 4.0f};
      b2BodyId bodyId = b2CreateBody(worldId, &bodyDef);

   Body creation is very similar in v3.0. In this case there is a definition 
   initialization function `b2DefaultBodyDef()`. This can help save a bit of 
   typing in some cases. In v3.0 I recommend getting comfortable with curly 
   brace initialization for initializing vectors. There are no member functions
   in C. Notice that the body is created using a loose function and providing 
   the `b2WorldId` as an argument. Basically what you would expect going from
   C++ to C.

   Destroying a body is also similar.

   Version 2.4:

   .. code::cpp

      world.DestroyBody(body);
      body = nullptr;

   Version 3.0:

   .. code::cpp

      b2DestroyBody(bodyId);
      bodyId = b2_nullBodyId;

   Notice there is a little magic here in Version 3.0. `b2BodyId` knows what 
   world it comes from. So you do not need to provide `worldId` when destroying 
   the body. Version 3.0 supports up to 128 worlds. This may increased or be 
   overridden in the future.

   Shapes and joints are still destroyed automatically. However, 
   `b2DestructionListener` is gone. This holds to the theme of fewer callbacks. 
   However, you can now use `b2Shape_IsValid()` and `b2Joint_IsValid()`.


Creating a shape

   Shape creation has been streamlined in Version 3.0. `b2Fixture` is gone. 
   I feel like it was a confusing concept so I hope you don't miss it.

   Version 2.4:

   .. code::cpp

      b2PolygonShape box;
      box.SetAsBox(1.0f, 1.0f);

      b2FixtureDef fixtureDef;
      fixtureDef.shape = &box;
      fixtureDef.density = 1.0f;
      fixtureDef.friction = 0.3f;

      b2Fixture* fixture = body->CreateFixture(&fixtureDef);


   Version 3.0:

   .. code::cpp

      b2Polygon box = b2MakeBox(1.0f, 1.0f);

      b2ShapeDef shapeDef = b2DefaultShapeDef();
      shapeDef.density = 1.0f;
      shapeDef.friction = 0.3f;

      b2ShapeId shapeId = b2CreatePolygonShape(bodyId, &shapeDef, &box);


   So basically v2.4 shapes are no longer shapes, they are *primitives* with 
   no inheritance (of course). This freed the term _shape_ to be used where 
   _fixture_ was used before. In v3.0 the shape definition is generic and 
   there are different functions for creating each shape type, such as 
   `b2CreateCircleShape` or `b2CreateSegmentShape`.

   Again notice the structure initialization with `b2DefaultShapeDef()`. 
   Unfortunately we cannot have meaningful definitions with zero initialization. 
   You must initialize your structures.

   Another important change for shapes is that the default density in the 
   shape definition is now 1 instead of 0. Static and kinematic bodies will 
   ignore the density. You can now make an entire game without touching the density.

   Destroying shapes is straight forward.

   Version 2.4:

   .. code::cpp

      body->DestroyFixture(fixture);
      fixture = nullptr;


   Version 3.0:

   .. code::cpp

      b2DestroyShape(shapeId);
      shapeId = b2_nullShapeId;



Chains

   In Version 2.4 chains are a type of shape. In Version 3.0 they are a 
   separate concept. This lead to significant simplifications internally. 
   In Version 2.4 all shapes had to support the notion of child shapes. 
   This is gone.

   Version 2.4:

   .. code::cpp

      b2Vec2 points[5];
      points[0].Set(-8.0f, 6.0f);
      points[1].Set(-8.0f, 20.0f);
      points[2].Set(8.0f, 20.0f);
      points[3].Set(8.0f, 6.0f);
      points[4].Set(0.0f, -2.0f);

      b2ChainShape chain;
      chain.CreateLoop(points, 5);
      b2FixtureDef fixtureDef;
      fixtureDef.shape = &chain;
      b2Fixture* chainFixture = body->CreateFixture(&fixtureDef);


   Version 3.0:

   .. code::cpp

      b2Vec2 points[5] = {
         {-8.0f, 6.0f},
         {-8.0f, 20.0f},
         {8.0f, 20.0f},
         {8.0f, 6.0f},
         {0.0f, -2.0f}
      };

      b2ChainDef chainDef = b2DefaultChainDef();
      chainDef.points = points;
      chainDef.count = 5;
      chainDef.loop = true;
      b2ChainId chainId = b2CreateChain(bodyId, &chainDef);


   Since chains are their own concept now, they get their own identifier, 
   `b2ChainId`. You can view chains as macro objects, they create many 
   `b2SmoothSegment` shapes internally. Normally you don't interact with these. 
   However they are returned from queries. I may need to write an API to allow 
   you to get the `b2ChainId` for a smooth segment that you get from a query.

   DO NOT destroy or modify a `b2SmoothSegment` that belongs to a chain shape directly


Creating a joint

   Joints are very similar in v3.0. The lack of C member functions changes initialization.

   Version 2.4:

   .. code::cpp

      b2RevoluteJointDef jointDef;
      jointDef.Initialize(ground, body, b2Vec2(-10.0f, 20.5f));
      jointDef.motorSpeed = 1.0f;
      jointDef.maxMotorTorque = 100.0f;
      jointDef.enableMotor = true;
      jointDef.lowerAngle = -0.25f * b2_pi;
      jointDef.upperAngle = 0.5f * b2_pi;
      jointDef.enableLimit = true;:
      b2RevolutionJoint* joint = (b2RevoluteJoint*)world->CreateJoint(&jointDef);

   Version 3.0:

   .. code::cpp

      b2Vec2 pivot = {-10.0f, 20.5f};
      b2RevoluteJointDef jointDef = b2DefaultRevoluteJointDef();
      jointDef.bodyIdA = groundId;
      jointDef.bodyIdB = bodyId;
      jointDef.localAnchorA = b2Body_GetLocalPoint(jointDef.bodyIdA, pivot);
      jointDef.localAnchorB = b2Body_GetLocalPoint(jointDef.bodyIdB, pivot);
      jointDef.motorSpeed = 1.0f;
      jointDef.maxMotorTorque = 100.0f;
      jointDef.enableMotor = true;
      jointDef.lowerAngle = -0.25f * b2_pi;
      jointDef.upperAngle = 0.5f * b2_pi;
      jointDef.enableLimit = true;
      b2JointId jointId = b2CreateRevoluteJoint(worldId, &jointDef);


   Some of the joints have more options now. Check the code comments and 
   samples for details.

   The friction joint has been removed since it is a subset of the motor joint.

   The pulley and gear joints have been removed. I'm not quite happy with 
   how they work and plan to implement improved versions in the future.


New solver

   There is a new solver that uses sub-stepping. Instead of specifying velocity
   iterations or position iterations, you now specify the number of sub-steps.

   .. code::cpp

      void b2World_Step(b2WorldId worldId, float timeStep, int32_t subStepCount);

   It is recommended to start with 4 sub-steps and adjust as needed. 
   The sub-stepping only computes contact points once per full time step, 
   so contact events are for the full time step.

   With a sub-stepping solver you need to think differently about how you 
   interact with bodies. Externally applied impulses or velocity adjustments 
   no longer exist after the first sub-step. So if you try to control the 
   movement of a body by setting the velocity every time step then you may 
   get unexpected results. You will get more predictable results by applying 
   a force and/or torque. Forces and torques are spread across all time steps.

   If you want full control over the movement of a body, considering setting 
   the body type to `b2_kinematicBody`. Preferably this is done in the `b2BodyDef`:

   .. code::cpp

      b2BodyDef bodyDef = b2DefaultBodyDef();
      bodyDef.type = b2_kinematicBody;



Contact data

   In v2.4 `b2ContactListener` provided `BeginContact`, `EndContact`, 
   `PreSolve`, and `PostSolve`. You could also iterate over the contacts 
   associated with a body using `b2Body::GetContactList`. The latter was 
   rarely used due to how continuous collision worked in v2.4 meant that 
   you could miss some contacts using `GetContactList`.

   In v3.0 there is a strong emphasis on multithreading. Callbacks in 
   multithreading are problematic for a few reasons:

   * chance of race conditions in user code
   * user code becomes non-deterministic
   * uncertain performance impact

   Therefore all callbacks except `PreSolve` have been removed. Instead 
   you can now access all events and contact data after the time step. 
   Version 3.0 no longer uses collision sub-stepping for continuous collision. 
   This means all contacts data are valid at the end of the time step. Just 
   keep in mind that Box2D computes contact points at the beginning of the 
   time step, so the contact points apply to the previous position of the body.

   Here is how you access contact data in v3.0:

   .. code::cpp

      b2ContactEvents contactEvents = b2World_GetContactEvents(worldId);

   The contact events structure has begin and end events:

   .. code::cpp

      typedef struct b2ContactEvents
      {
         b2ContactBeginTouchEvent* beginEvents;
         b2ContactEndTouchEvent* endEvents;
         b2ContactHitEvent* hitEvents;
         int beginCount;
         int endCount;
         int hitCount;
      } b2ContactEvents;

   You can loop through these events after the time step. These events are in 
   deterministic order, even with multithreading. See the `sample_events.cpp` 
   file for examples.

   You may not want Box2D to save all contact events, so you can disable them 
   for a given shape using `enableContactEvents` on `b2ShapeDef`.

   If you want to access persistent contacts, you can get the data from bodies or shapes.

   .. code::cpp

      b2ContactData contactData[10];
      int count = b2Body_GetContactData(bodyId, contactData, 10);


   .. code::cpp

      b2ContactData contactData[10];
      int count = b2Shape_GetContactData(shapeId, contactData, 10);

   This includes contact data for contacts reported in begin events. This data 
   is also in deterministic order.

   Pre-solve contact modification is available using a callback.

   .. code::cpp

      typedef bool b2PreSolveFcn(b2ShapeId shapeIdA, b2ShapeId shapeIdB, 
                                 b2Manifold* manifold, void* context);
      void b2World_SetPreSolveCallback(b2WorldId worldId, 
                                       b2PreSolveFcn* fcn, void* context);

   You can define a pre-solve callback and register that with the world. 
   You can also provide a context variable that will be passed back to your 
   callback. This is **not** enough to get a pre-solve callback. You also 
   need to enable it on your shape using `enablePreSolveEvents` in `b2ShapeDef`. 
   This is false by default.

   Pre-solve callbacks are dangerous. You must avoid race conditions and 
   you must understand that behavior may not be deterministic. This is 
   especially true if you have multiple pre-solve callbacks that are 
   sensitive to order.


Sensors

   In v2.4 sensor events were mixed in with contact events. I have split them 
   up to make user code simpler.

   .. code::cpp

      b2SensorEvents sensorEvents = b2World_GetSensorEvents(b2WorldId worldId);

   Note that contact data on bodies and shapes have no information about 
   sensors. That data only has touching contacts.

   Sensor events are available to all shapes on dynamic bodies except chains. 
   You can disable them using `enableSensorEvents` on `b2ShapeDef`.


Queries

   Version 2.4 has `b2World::QueryAABB` and `b2World::RayCast`. This 
   functionality is largely the same in v3.0, but more features have been 
   added such as precise overlap tests and shape casts.

   Another new feature is `b2QueryFilter` which allows you to filter raycast 
   results before they reach your callback. This query filter is tested 
   against `b2Filter` on shapes that the query encounters.

   Ray casts now take an origin and translation rather than start and end 
   points. This convention works better with the added shape cast functions.


World iteration

   Iterating over all bodies/shapes/joints/contacts in a world is very 
   inefficient and has been removed from Version 3.0. Instead, you should 
   be using `b2BodyEvents` and `b2ContactEvents`. Events are efficient and 
   data-oriented.


Library configuration

   Version 3.0 offers more library configuration. You can override the 
   allocator and you can intercept assertions by registering global 
   callbacks. These are for expert users and they must be thread safe.

   .. code::cpp

      void b2SetAllocator(b2AllocFcn* allocFcn, b2FreeFcn* freeFcn);
      void b2SetAssertFcn(b2AssertFcn* assertFcn);


👊 References
=============

   Here is a list of all topics with brief descriptions:

   - `Base <https://box2d.org/documentation_v3/group__base.html>`__

      Base functionality

   - `World <https://box2d.org/documentation_v3/group__world.html>`__

      These functions allow you to create a simulation world

   - `Body <https://box2d.org/documentation_v3/group__body.html>`__

      This is the body API

   - `Shape <https://box2d.org/documentation_v3/group__shape.html>`__

      Functions to create, destroy, and access

   - `Joint <https://box2d.org/documentation_v3/group__joint.html>`__
   - `| Distance Joint <https://box2d.org/documentation_v3/group__distance__joint.html>`__
   - `| Motor Joint <https://box2d.org/documentation_v3/group__motor__joint.html>`__
   - `| Mouse Joint <https://box2d.org/documentation_v3/group__mouse__joint.html>`__
   - `| Prismatic Joint <https://box2d.org/documentation_v3/group__prismatic__joint.html>`__
   - `| Revolute Joint <https://box2d.org/documentation_v3/group__revolute__joint.html>`__
   - `| Weld Joint <https://box2d.org/documentation_v3/group__weld__joint.html>`__
   - `| Wheel Joint <https://box2d.org/documentation_v3/group__wheel__joint.html>`__

      The wheel joint can be used to simulate wheels on vehicles

   - `Geometry <https://box2d.org/documentation_v3/group__geometry.html>`__
   - `Distance <https://box2d.org/documentation_v3/group__distance.html>`__

      Functions for computing the distance between shapes

   - `Collision <https://box2d.org/documentation_v3/group__collision.html>`__
   - `Dynamic Tree <https://box2d.org/documentation_v3/group__tree.html>`__

      The dynamic tree is a binary AABB tree to organize and query large
      numbers of geometric objects

   - `Ids <https://box2d.org/documentation_v3/group__id.html>`__

      These ids serve as handles to internal Box2D objects

   - `Math <https://box2d.org/documentation_v3/group__math.html>`__
   - `C++ Math <https://box2d.org/documentation_v3/group__math__cpp.html>`__
   - `Events <https://box2d.org/documentation_v3/group__events.html>`__

      World event types


👊 Data Structures
==================

   Here are the data structures with brief descriptions:

   -  C `b2AABB <https://box2d.org/documentation_v3/group__math.html#structb2_a_a_b_b>`__
      Axis-aligned bounding box

   -  C `b2BodyDef <https://box2d.org/documentation_v3/group__body.html#structb2_body_def>`__
      A body definition holds all the data needed to construct a rigid body

   -  C `b2BodyEvents <https://box2d.org/documentation_v3/group__events.html#structb2_body_events>`__
      Body events are buffered in the Box2D world and are available as event
      arrays after the time step is complete

   -  C `b2BodyId <https://box2d.org/documentation_v3/group__id.html#structb2_body_id>`__
      Body id references a body instance. This should be treated as an opaque handle

   -  C `b2BodyMoveEvent <https://box2d.org/documentation_v3/group__events.html#structb2_body_move_event>`__
      Body move events triggered when a body moves

   -  C `b2Capsule <https://box2d.org/documentation_v3/group__geometry.html#structb2_capsule>`__
      A solid capsule can be viewed as two semicircles connected by a rectangle

   -  C `b2CastOutput <https://box2d.org/documentation_v3/group__geometry.html#structb2_cast_output>`__
      Low level ray-cast or shape-cast output data

   -  C `b2ChainDef <https://box2d.org/documentation_v3/group__shape.html#structb2_chain_def>`__
      Used to create a chain of edges

   -  C `b2ChainId <https://box2d.org/documentation_v3/group__id.html#structb2_chain_id>`__
      Chain id references a chain instances. This should be treated as an opaque handle

   -  C `b2Circle <https://box2d.org/documentation_v3/group__geometry.html#structb2_circle>`__
      A solid circle

   -  C `b2ContactBeginTouchEvent <https://box2d.org/documentation_v3/group__events.html#structb2_contact_begin_touch_event>`__
      A begin touch event is generated when two shapes begin touching

   -  C `b2ContactData <https://box2d.org/documentation_v3/group__events.html#structb2_contact_data>`__
      The contact data for two shapes

   -  C `b2ContactEndTouchEvent <https://box2d.org/documentation_v3/group__events.html#structb2_contact_end_touch_event>`__
      An end touch event is generated when two shapes stop touching

   -  C `b2ContactEvents <https://box2d.org/documentation_v3/group__events.html#structb2_contact_events>`__
      Contact events are buffered in the Box2D world and are available as event
      arrays after the time step is complete

   -  C `b2ContactHitEvent <https://box2d.org/documentation_v3/group__events.html#structb2_contact_hit_event>`__
      A hit touch event is generated when two shapes collide with a speed
      faster than the hit speed threshold

   -  C `b2DebugDraw <https://box2d.org/documentation_v3/structb2_debug_draw.html>`__
      This struct holds callbacks you can implement to draw a Box2D world

   -  C `b2DistanceCache <https://box2d.org/documentation_v3/group__distance.html#structb2_distance_cache>`__
      Used to warm start b2Distance

   -  C `b2DistanceInput <https://box2d.org/documentation_v3/group__distance.html#structb2_distance_input>`__
      Input for b2Distance

   -  C `b2DistanceJointDef <https://box2d.org/documentation_v3/group__distance__joint.html#structb2_distance_joint_def>`__
      Distance joint definition

   -  C `b2DistanceOutput <https://box2d.org/documentation_v3/group__distance.html#structb2_distance_output>`__
      Output for b2Distance

   -  C `b2DistanceProxy <https://box2d.org/documentation_v3/group__distance.html#structb2_distance_proxy>`__
      A distance proxy is used by the GJK algorithm. It encapsulates any shape

   -  C `b2DynamicTree <https://box2d.org/documentation_v3/group__tree.html#structb2_dynamic_tree>`__
      The dynamic tree structure

   -  C `b2Filter <https://box2d.org/documentation_v3/group__shape.html#structb2_filter>`__
      This is used to filter collision on shapes

   -  C `b2Hull <https://box2d.org/documentation_v3/group__geometry.html#structb2_hull>`__
      A convex hull. Used to create convex polygons

   -  C `b2JointId <https://box2d.org/documentation_v3/group__id.html#structb2_joint_id>`__
      Joint id references a joint instance. This should be treated as an opaque handle

   -  C `b2Manifold <https://box2d.org/documentation_v3/group__collision.html#structb2_manifold>`__
      A contact manifold describes the contact points between colliding shapes

   -  C `b2ManifoldPoint <https://box2d.org/documentation_v3/group__collision.html#structb2_manifold_point>`__
      A manifold point is a contact point belonging to a contact manifold

   -  C `b2MassData <https://box2d.org/documentation_v3/group__geometry.html#structb2_mass_data>`__
      This holds the mass data computed for a shape

   -  C `b2Mat22 <https://box2d.org/documentation_v3/group__math.html#structb2_mat22>`__
      A 2-by-2 Matrix

   -  C `b2MotorJointDef <https://box2d.org/documentation_v3/group__motor__joint.html#structb2_motor_joint_def>`__
      A motor joint is used to control the relative motion between two bodies

   -  C `b2MouseJointDef <https://box2d.org/documentation_v3/group__mouse__joint.html#structb2_mouse_joint_def>`__
      A mouse joint is used to make a point on a body track a specified world point

   -  C `b2Polygon <https://box2d.org/documentation_v3/group__geometry.html#structb2_polygon>`__
      A solid convex polygon

   -  C `b2PrismaticJointDef <https://box2d.org/documentation_v3/group__prismatic__joint.html#structb2_prismatic_joint_def>`__
      Prismatic joint definition

   -  C `b2QueryFilter <https://box2d.org/documentation_v3/group__shape.html#structb2_query_filter>`__
      The query filter is used to filter collisions between queries and shapes

   -  C `b2RayCastInput <https://box2d.org/documentation_v3/group__geometry.html#structb2_ray_cast_input>`__
      Low level ray-cast input data

   -  C `b2RayResult <https://box2d.org/documentation_v3/group__world.html#structb2_ray_result>`__
      Result from b2World_RayCastClosest

   -  C `b2RevoluteJointDef <https://box2d.org/documentation_v3/group__revolute__joint.html#structb2_revolute_joint_def>`__
      Revolute joint definition

   -  C `b2Rot <https://box2d.org/documentation_v3/group__math.html#structb2_rot>`__
      2D rotation This is similar to using a complex number for rotation

   -  C `b2Segment <https://box2d.org/documentation_v3/group__geometry.html#structb2_segment>`__
      A line segment with two-sided collision

   -  C `b2SegmentDistanceResult <https://box2d.org/documentation_v3/group__distance.html#structb2_segment_distance_result>`__
      Result of computing the distance between two line segments

   -  C `b2SensorBeginTouchEvent <https://box2d.org/documentation_v3/group__events.html#structb2_sensor_begin_touch_event>`__
      A begin touch event is generated when a shape starts to overlap a sensor shape

   -  C `b2SensorEndTouchEvent <https://box2d.org/documentation_v3/group__events.html#structb2_sensor_end_touch_event>`__
      An end touch event is generated when a shape stops overlapping a sensor shape

   -  C `b2SensorEvents <https://box2d.org/documentation_v3/group__events.html#structb2_sensor_events>`__
      Sensor events are buffered in the Box2D world and are available as
      begin/end overlap event arrays after the time step is complete

   -  C `b2ShapeCastInput <https://box2d.org/documentation_v3/group__geometry.html#structb2_shape_cast_input>`__
      Low level shape cast input in generic form

   -  C `b2ShapeCastPairInput <https://box2d.org/documentation_v3/group__distance.html#structb2_shape_cast_pair_input>`__
      Input parameters for b2ShapeCast

   -  C `b2ShapeDef <https://box2d.org/documentation_v3/group__shape.html#structb2_shape_def>`__
      Used to create a shape

   -  C `b2ShapeId <https://box2d.org/documentation_v3/group__id.html#structb2_shape_id>`__
      Shape id references a shape instance. This should be treated as an opaque handle

   -  C `b2SmoothSegment <https://box2d.org/documentation_v3/group__geometry.html#structb2_smooth_segment>`__
      A smooth line segment with one-sided collision

   -  C `b2Sweep <https://box2d.org/documentation_v3/group__distance.html#structb2_sweep>`__
      This describes the motion of a body/shape for TOI computation

   -  C `b2TOIInput <https://box2d.org/documentation_v3/group__distance.html#structb2_t_o_i_input>`__
      Input parameters for b2TimeOfImpact

   -  C `b2TOIOutput <https://box2d.org/documentation_v3/group__distance.html#structb2_t_o_i_output>`__
      Output parameters for b2TimeOfImpact

   -  C `b2Transform <https://box2d.org/documentation_v3/group__math.html#structb2_transform>`__
      A 2D rigid transform

   -  C `b2TreeNode <https://box2d.org/documentation_v3/group__tree.html#structb2_tree_node>`__
      A node in the dynamic tree

   -  C `b2TreeNode.__unnamed1__ <https://box2d.org/documentation_v3/group__tree.html#unionb2_tree_node_8____unnamed1____>`__


   -  C `b2Vec2 <https://box2d.org/documentation_v3/group__math.html#structb2_vec2>`__
      2D vector This can be used to represent a point or free vector

   -  C `b2Version <https://box2d.org/documentation_v3/group__base.html#structb2_version>`__
      Version numbering scheme

   -  C `b2WeldJointDef <https://box2d.org/documentation_v3/group__weld__joint.html#structb2_weld_joint_def>`__
      Weld joint definition

   -  C `b2WheelJointDef <https://box2d.org/documentation_v3/group__wheel__joint.html#structb2_wheel_joint_def>`__
      Wheel joint definition

   -  C `b2WorldDef <https://box2d.org/documentation_v3/group__world.html#structb2_world_def>`__
      World definition used to create a simulation world

   -  C `b2WorldId <https://box2d.org/documentation_v3/group__id.html#structb2_world_id>`__
      World id references a world instance. This should be treated as an opaque handle


👊 Files
========

   Here is a list of all documented files with brief descriptions:

   - ▼ `include <https://box2d.org/documentation_v3/dir_d44c64559bbebec7f509842c48db8b23.html>`__
   - ▼ `box2d <https://box2d.org/documentation_v3/dir_91a7119247d4f5b2b45acab156855f16.html>`__
   - `base.h <https://box2d.org/documentation_v3/base_8h_source.html>`__
   - `box2d.h <https://box2d.org/documentation_v3/box2d_8h_source.html>`__
   - `collision.h <https://box2d.org/documentation_v3/collision_8h_source.html>`__
   - `id.h <https://box2d.org/documentation_v3/id_8h_source.html>`__
   - `math_functions.h <https://box2d.org/documentation_v3/math__functions_8h_source.html>`__
   - `types.h <https://box2d.org/documentation_v3/types_8h_source.html>`__



⭕ Box2D 2.4.1
===============

TOC

*  `Overview <https://box2d.org/documentation/index.html>`__
*  `Hello Box2D <https://box2d.org/documentation/md__d_1__git_hub_box2d_docs_hello.html>`__
*  `Testbed <https://box2d.org/documentation/md__d_1__git_hub_box2d_docs_testbed.html>`__
*  `Common Module <https://box2d.org/documentation/md__d_1__git_hub_box2d_docs_common.html>`__
*  `Collision Module <https://box2d.org/documentation/md__d_1__git_hub_box2d_docs_collision.html>`__
*  `Dynamics Module <https://box2d.org/documentation/md__d_1__git_hub_box2d_docs_dynamics.html>`__
*  `Loose Ends <https://box2d.org/documentation/md__d_1__git_hub_box2d_docs_loose_ends.html>`__
*  `References <https://box2d.org/documentation/md__d_1__git_hub_box2d_docs_references.html>`__
*  `FAQ <https://box2d.org/documentation/md__d_1__git_hub_box2d_docs__f_a_q.html>`__


👊 Overview
===========

Box2D 2.4.1 - A 2D physics engine for games


   Box2D is a 2D rigid body simulation library for games. Programmers can use it
   in their games to make objects move in realistic ways and make the game world
   more interactive. From the game engine's point of view, a physics engine is
   just a system for procedural animation.

   Box2D is written in portable C++. Most of the types defined in the engine
   begin with the b2 prefix. Hopefully this is sufficient to avoid name clashing
   with your game engine.


Prerequisites

   In this manual I'll assume you are familiar with basic physics concepts, such
   as mass, force, torque, and impulses. If not, please first consult Google
   search and Wikipedia.

   Box2D was created as part of a physics tutorial at the Game Developer
   Conference. You can get these tutorials from the download section of
   box2d.org.

   Since Box2D is written in C++, you are expected to be experienced in C++
   programming. Box2D should not be your first C++ programming project! You
   should be comfortable with compiling, linking, and debugging.

      **Caution**: Box2D should not be your first C++ project. Please learn C++
      programming, compiling, linking, and debugging before working with Box2D.
      There are many resources for this on the net.


Scope

   This manual covers the majority of the Box2D API. However, not every aspect is
   covered. Please look at the testbed included with Box2D to learn more.

   This manual is only updated with new releases. The latest version of Box2D may
   be out of sync with this manual.


Feedback and Bugs

   Please file bugs and feature requests here: 
   `Box2D Issues <https://github.com/erincatto/box2d/issues>`__

   You can help to ensure your issue gets fixed if you provide sufficient detail.
   A testbed example that reproduces the problem is ideal. You can read about the
   testbed later in this document.

   There is also a `Discord server <https://discord.gg/NKYgCBP>`__ and a
   `subreddit <https://reddit.com/r/box2d>`__ for Box2D.


Core Concepts

   Box2D works with several fundamental concepts and objects. We briefly define
   these objects here and more details are given later in this document.


shape

   A shape is 2D geometrical object, such as a circle or polygon.


rigid body

   A chunk of matter that is so strong that the distance between any two bits of
   matter on the chunk is constant. They are hard like a diamond. In the
   following discussion we use body interchangeably with rigid body.


fixture

   A fixture binds a shape to a body and adds material properties such as
   density, friction, and restitution. A fixture puts a shape into the collision
   system (broad-phase) so that it can collide with other shapes.


constraint

   A constraint is a physical connection that removes degrees of freedom from
   bodies. A 2D body has 3 degrees of freedom (two translation coordinates and
   one rotation coordinate). If we take a body and pin it to the wall (like a
   pendulum) we have constrained the body to the wall. At this point the body can
   only rotate about the pin, so the constraint has removed 2 degrees of freedom.


contact constraint

   A special constraint designed to prevent penetration of rigid bodies and to
   simulate friction and restitution. You do not create contact constraints; they
   are created automatically by Box2D.


joint

   This is a constraint used to hold two or more bodies together. Box2D supports
   several joint types: revolute, prismatic, distance, and more. Some joints may
   have limits and motors.


joint limit

   A joint limit restricts the range of motion of a joint. For example, the human
   elbow only allows a certain range of angles.


joint motor

   A joint motor drives the motion of the connected bodies according to the
   joint's degrees of freedom. For example, you can use a motor to drive the
   rotation of an elbow.


world

   A physics world is a collection of bodies, fixtures, and constraints that
   interact together. Box2D supports the creation of multiple worlds, but this is
   usually not necessary or desirable.


solver

   The physics world has a solver that is used to advance time and to resolve
   contact and joint constraints. The Box2D solver is a high performance
   iterative solver that operates in order N time, where N is the number of
   constraints.


continuous collision

   The solver advances bodies in time using discrete time steps. Without
   intervention this can lead to tunneling.


      .. figure:: https://box2d.org/documentation/tunneling1.svg

         Tunneling Effect

   Box2D contains specialized algorithms to deal with tunneling. First, the
   collision algorithms can interpolate the motion of two bodies to find the
   first time of impact (TOI). Second, there is a sub-stepping solver that moves
   bodies to their first time of impact and then resolves the collision.


Modules

   Box2D is composed of three modules: Common, Collision, and Dynamics. The
   Common module has code for allocation, math, and settings. The Collision
   module defines shapes, a broad-phase, and collision functions/queries. Finally
   the Dynamics module provides the simulation world, bodies, fixtures, and
   joints.


      .. figure:: https://box2d.org/documentation/modules.svg

         Box2D Modules


Units

   Box2D works with floating point numbers and tolerances have to be used to make
   Box2D perform well. These tolerances have been tuned to work well with
   meters-kilogram-second (MKS) units. In particular, Box2D has been tuned to
   work well with moving shapes between 0.1 and 10 meters. So this means objects
   between soup cans and buses in size should work well. Static shapes may be up
   to 50 meters long without trouble.

   Being a 2D physics engine, it is tempting to use pixels as your units.
   Unfortunately this will lead to a poor simulation and possibly weird behavior.
   An object of length 200 pixels would be seen by Box2D as the size of a 45
   story building.

      **Caution**: Box2D is tuned for MKS units. Keep the size of moving objects
      roughly between 0.1 and 10 meters. You'll need to use some scaling system
      when you render your environment and actors. The Box2D testbed does this by
      using an OpenGL viewport transform. DO NOT USE PIXELS.

   It is best to think of Box2D bodies as moving billboards upon which you attach
   your artwork. The billboard may move in a unit system of meters, but you can
   convert that to pixel coordinates with a simple scaling factor. You can then
   use those pixel coordinates to place your sprites, etc. You can also account
   for flipped coordinate axes.

   Another limitation to consider is overall world size. If your world units
   become larger than 2 kilometers or so, then the lost precision can affect
   stability.

      **Caution**: Box2D works best with world sizes less than 2 kilometers. Use
      ``b2World::ShiftOrigin`` to support larger worlds.

   If you need to have a larger game world, consider using ``b2World::ShiftOrigin``
   to keep the world origin close to your player. I recommend to use grid lines
   along with some hysteresis for triggering calls to ShiftOrigin. This call
   should be made infrequently because it is has CPU cost. You may need to store
   a physics offset when translating between game units and Box2D units.

   Box2D uses radians for angles. The body rotation is stored in radians and may
   grow unbounded. Consider normalizing the angle of your bodies if the magnitude
   of the angle becomes too large (use ``b2Body::SetTransform``).

      **Caution**: Box2D uses radians, not degrees.


Changing the length units

   Advanced users may change the length unit modifying
   ``b2_lengthUnitsPerMeter``. You can avoid merge conflicts by defining
   ``B2_USER_SETTINGS`` and providing ``b2_user_settings.h``. See the file
   ``b2_settings.h`` for details.


Factories and Definitions

   Fast memory management plays a central role in the design of the Box2D API. So
   when you create a ``b2Body`` or a
   ``b2Joint``, you need to call the factory functions on
   ``b2World``. You should never try to allocate these types
   in another manner.

   There are creation functions:

   .. code::cpp 

         b2Body * b2World::CreateBody (const b2BodyDef * def)

         b2Joint * b2World::CreateJoint (const b2JointDef * def)

   And there are corresponding destruction functions:

   .. code::cpp 

         void b2World::DestroyBody (b2Body * body)

         void b2World::DestroyJoint (b2Joint * joint)

   When you create a body or joint, you need to provide a definition. These
   definitions contain all the information needed to build the body or joint. By
   using this approach we can prevent construction errors, keep the number of
   function parameters small, provide sensible defaults, and reduce the number of
   accessors.

   Since fixtures (shapes) must be parented to a body, they are created and
   destroyed using a factory method on ``b2Body``:

   .. code::cpp 

         b2Fixture * b2Body::CreateFixture (const b2FixtureDef * def)

         void b2Body::DestroyFixture (b2Fixture * fixture)

   There is also shortcut to create a fixture directly from the shape and
   density.

   .. code::cpp 

         b2Fixture * b2Body::CreateFixture (const b2Shape * shape, float density)

   Factories do not retain references to the definitions. So you can create
   definitions on the stack and keep them in temporary resources.


👊 Hello Box2D
==============

   In the distribution of Box2D is a Hello World project. The program
   creates a large ground box and a small dynamic box. This code does not
   contain any graphics. All you will see is text output in the console of
   the box's position over time.

   This is a good example of how to get up and running with Box2D.


Creating a World

   Every Box2D program begins with the creation of a ``b2World`` object.
   ``b2World`` is the physics hub that manages memory, objects, and simulation.
   You can allocate the physics world on the stack, heap, or data section.

   It is easy to create a Box2D world. First, we define the gravity vector.

   .. code::cpp

      b2Vec2 gravity(0.0f, -10.0f);

   Now we create the world object. Note that we are creating the world on
   the stack, so the world must remain in scope.

   .. code::cpp

      b2World world(gravity);

   So now we have our physics world, let's start adding some stuff to it.


Creating a Ground Box

   Bodies are built using the following steps:
   1. Define a body with position, damping, etc.
   2. Use the world object to create the body.
   3. Define fixtures with a shape, friction, density, etc.
   4. Create fixtures on the body.

   For step 1 we create the ground body. For this we need a body
   definition. With the body definition we specify the initial position of
   the ground body.

   .. code::cpp

      b2BodyDef groundBodyDef;
      groundBodyDef.position.Set(0.0f, -10.0f);

   For step 2 the body definition is passed to the world object to create
   the ground body. The world object does not keep a reference to the body
   definition. Bodies are static by default. Static bodies don't collide
   with other static bodies and are immovable.

   .. code::cpp

      b2Body* groundBody = world.CreateBody(&groundBodyDef);

   For step 3 we create a ground polygon. We use the ``SetAsBox`` shortcut to
   form the ground polygon into a box shape, with the box centered on the
   origin of the parent body.

   .. code::cpp

      b2PolygonShape groundBox;
      groundBox.SetAsBox(50.0f, 10.0f);

   The ``SetAsBox`` function takes the **half** - **width** and
   **half** - **height** (extents). So in this case the ground box is 100
   units wide (x-axis) and 20 units tall (y-axis). Box2D is tuned for
   meters, kilograms, and seconds. So you can consider the extents to be in
   meters. Box2D generally works best when objects are the size of typical
   real world objects. For example, a barrel is about 1 meter tall. Due to
   the limitations of floating point arithmetic, using Box2D to model the
   movement of glaciers or dust particles is not a good idea.

   We finish the ground body in step 4 by creating the shape fixture. For
   this step we have a shortcut. We do not have a need to alter the default
   fixture material properties, so we can pass the shape directly to the
   body without creating a fixture definition. Later we will see how to use
   a fixture definition for customized material properties. The second
   parameter is the shape density in kilograms per meter squared. A static
   body has zero mass by definition, so the density is not used in this
   case.

   .. code::cpp

      groundBody->CreateFixture(&groundBox, 0.0f);

   Box2D does not keep a reference to the shape. It clones the data into a
   new ``b2Shape`` object.

   Note that every fixture must have a parent body, even fixtures that are
   static. However, you can attach all static fixtures to a single static
   body.

   When you attach a shape to a body using a fixture, the shape's
   coordinates become local to the body. So when the body moves, so does
   the shape. A fixture's world transform is inherited from the parent
   body. A fixture does not have a transform independent of the body. So we
   don't move a shape around on the body. Moving or modifying a shape that
   is on a body is not supported. The reason is simple: a body with
   morphing shapes is not a rigid body, but Box2D is a rigid body engine.
   Many of the assumptions made in Box2D are based on the rigid body model.
   If this is violated many things will break


Creating a Dynamic Body

   So now we have a ground body. We can use the same technique to create a
   dynamic body. The main difference, besides dimensions, is that we must
   establish the dynamic body's mass properties.

   First we create the body using ``CreateBody``. By default bodies are static,
   so we should set the ``b2BodyType`` at construction time to make the body
   dynamic.

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.type = b2_dynamicBody;
      bodyDef.position.Set(0.0f, 4.0f);
      b2Body* body = world.CreateBody(&bodyDef);

   .. Caution::

      **Caution**:
      You must set the body type to b2_dynamicBody if you want the body to
      move in response to forces.

   Next we create and attach a polygon shape using a fixture definition.
   First we create a box shape:

   .. code::cpp

      b2PolygonShape dynamicBox;
      dynamicBox.SetAsBox(1.0f, 1.0f);

   Next we create a fixture definition using the box. Notice that we set
   density to 1. The default density is zero. Also, the friction on the
   shape is set to 0.3.

   .. code::cpp

      b2FixtureDef fixtureDef;
      fixtureDef.shape = &dynamicBox;
      fixtureDef.density = 1.0f;
      fixtureDef.friction = 0.3f;

   .. Caution::

      **Caution**:
      A dynamic body should have at least one fixture with a non-zero density.
      Otherwise you will get strange behavior.

   Using the fixture definition we can now create the fixture. This
   automatically updates the mass of the body. You can add as many fixtures
   as you like to a body. Each one contributes to the total mass.

   .. code::cpp

      body->CreateFixture(&fixtureDef);

   That's it for initialization. We are now ready to begin simulating.


Simulating the World

   So we have initialized the ground box and a dynamic box. Now we are
   ready to set Newton loose to do his thing. We just have a couple more
   issues to consider.

   Box2D uses a computational algorithm called an integrator. Integrators
   simulate the physics equations at discrete points of time. This goes
   along with the traditional game loop where we essentially have a flip
   book of movement on the screen. So we need to pick a time step for
   Box2D. Generally physics engines for games like a time step at least as
   fast as 60Hz or 1/60 seconds. You can get away with larger time steps,
   but you will have to be more careful about setting up the definitions
   for your world. We also don't like the time step to change much. A
   variable time step produces variable results, which makes it difficult
   to debug. So don't tie the time step to your frame rate (unless you
   really, really have to). Without further ado, here is the time step.

   .. code::cpp

      float timeStep = 1.0f / 60.0f;

   In addition to the integrator, Box2D also uses a larger bit of code
   called a constraint solver. The constraint solver solves all the
   constraints in the simulation, one at a time. A single constraint can be
   solved perfectly. However, when we solve one constraint, we slightly
   disrupt other constraints. To get a good solution, we need to iterate
   over all constraints a number of times.

   There are two phases in the constraint solver: a velocity phase and a
   position phase. In the velocity phase the solver computes the impulses
   necessary for the bodies to move correctly. In the position phase the
   solver adjusts the positions of the bodies to reduce overlap and joint
   detachment. Each phase has its own iteration count. In addition, the
   position phase may exit iterations early if the errors are small.

   The suggested iteration count for Box2D is 8 for velocity and 3 for
   position. You can tune this number to your liking, just keep in mind
   that this has a trade-off between performance and accuracy. Using fewer
   iterations increases performance but accuracy suffers. Likewise, using
   more iterations decreases performance but improves the quality of your
   simulation. For this simple example, we don't need much iteration. Here
   are our chosen iteration counts.

   .. code::cpp

      int32 velocityIterations = 6;
      int32 positionIterations = 2;

   Note that the time step and the iteration count are completely
   unrelated. An iteration is not a sub-step. One solver iteration is a
   single pass over all the constraints within a time step. You can have
   multiple passes over the constraints within a single time step.

   We are now ready to begin the simulation loop. In your game the
   simulation loop can be merged with your game loop. In each pass through
   your game loop you call b2World::Step. Just one call is usually enough,
   depending on your frame rate and your physics time step.

   The Hello World program was designed to be simple, so it has no
   graphical output. The code prints out the position and rotation of the
   dynamic body. Here is the simulation loop that simulates 60 time steps
   for a total of 1 second of simulated time.

   .. code::cpp

      for (int32 i = 0; i < 60; ++i)
      {
          world.Step(timeStep, velocityIterations, positionIterations);
          b2Vec2 position = body->GetPosition();
          float angle = body->GetAngle();
          printf("%4.2f %4.2f %4.2f\n", position.x, position.y, angle);
      }

   The output shows the box falling and landing on the ground box. Your
   output should look like this:

   .. code::

      0.00 4.00 0.00
      0.00 3.99 0.00
      0.00 3.98 0.00
      ...
      0.00 1.25 0.00
      0.00 1.13 0.00
      0.00 1.01 0.00


Cleanup

   When a world leaves scope or is deleted by calling delete on a pointer,
   all the memory reserved for bodies, fixtures, and joints is freed. This
   is done to improve performance and make your life easier. However, you
   will need to nullify any body, fixture, or joint pointers you have
   because they will become invalid.


👊 Testbed
==========

Once you have conquered the HelloWorld example, you should start looking
at Box2D's testbed. The testbed is a testing framework and demo
environment. Here are some of the features:

- Camera with pan and zoom.
- Mouse picking of shapes attached to dynamic bodies.
- Extensible set of tests.
- GUI for selecting tests, parameter tuning, and debug drawing options.
- Pause and single step simulation.
- Text rendering.

.. figure:: https://box2d.org/documentation/testbed.png

   Box2D Testbed

The testbed has many examples of Box2D usage in the test cases and the
framework itself. I encourage you to explore and tinker with the testbed
as you learn Box2D.

Note: the testbed is written using `GLFW <https://www.glfw.org>`__ and
`imgui <https://github.com/ocornut/imgui>`__. The testbed is not part of the
Box2D library. The Box2D library is agnostic about rendering. As shown by
the HelloWorld example, you don't need a renderer to use Box2D.


👊 Common Module
================

   The Common module contains settings, memory management, and vector math.


Settings

   The header ``b2Settings.h`` contains:

   - Types such as int32 and float
   - Constants
   - Allocation wrappers
   - The version number


Types

   Box2D defines various types such as ``int8``, etc. to make it easy
   to determine the size of structures.


Constants

   Box2D defines several constants. These are all documented in
   ``b2Settings.h``. Normally you do not need to adjust these constants.

   Box2D uses floating point math for collision and simulation. Due to
   round-off error some numerical tolerances are defined. Some tolerances
   are absolute and some are relative. Absolute tolerances use MKS units.


Allocation wrappers

   The settings file defines ``b2Alloc`` and ``b2Free`` for large allocations. 
   You may forward these calls to your own memory management system.


Version

   The ``b2Version`` structure holds the current version so you can query this
   at run-time.


Memory Management

   A large number of the decisions about the design of Box2D were based on
   the need for quick and efficient use of memory. In this section I will
   discuss how and why Box2D allocates memory.

   Box2D tends to allocate a large number of small objects (around 50-300
   bytes). Using the system heap through malloc or new for small objects is
   inefficient and can cause fragmentation. Many of these small objects may
   have a short life span, such as contacts, but can persist for several
   time steps. So we need an allocator that can efficiently provide heap
   memory for these objects.

   Box2D's solution is to use a small object allocator (SOA) called
   ``b2BlockAllocator``. The SOA keeps a number of growable pools of varying
   sizes. When a request is made for memory, the SOA returns a block of
   memory that best fits the requested size. When a block is freed, it is
   returned to the pool. Both of these operations are fast and cause little
   heap traffic.

   Since Box2D uses a SOA, you should never new or malloc a body, fixture,
   or joint. However, you do have to allocate a b2World on your own. The
   b2World class provides factories for you to create bodies, fixtures, and
   joints. This allows Box2D to use the SOA and hide the gory details from
   you. Never, call delete or free on a body, fixture, or joint.

   While executing a time step, Box2D needs some temporary workspace
   memory. For this, it uses a stack allocator called ``b2StackAllocator`` to
   avoid per-step heap allocations. You don't need to interact with the
   stack allocator, but it's good to know it's there.


Math

   Box2D includes a simple small vector and matrix module. This has been
   designed to suit the internal needs of Box2D and the API. All the
   members are exposed, so you may use them freely in your application.

   The math library is kept simple to make Box2D easy to port and maintain.


👊 Collision Module
===================

   The Collision module contains shapes and functions that operate on them.
   The module also contains a dynamic tree and broad-phase to acceleration
   collision processing of large systems.

   The collision module is designed to be usable outside of the dynamic
   system. For example, you can use the dynamic tree for other aspects of
   your game besides physics.

   However, the main purpose of Box2D is to provide a rigid body physics
   engine, so the using the collision module by itself may feel limited for
   some applications. Likewise, I will not make a strong effort to document
   it or polish the APIs.


Shapes
------

   Shapes describe collision geometry and may be used independently of
   physics simulation. At a minimum, you should understand how to create
   shapes that can be later attached to rigid bodies.

   Box2D shapes implement the b2Shape base class. The base class defines
   functions to:

   - Test a point for overlap with the shape.
   - Perform a ray cast against the shape.
   - Compute the shape's AABB.
   - Compute the mass properties of the shape.

   In addition, each shape has a type member and a radius. The radius even
   applies to polygons, as discussed below.

   Keep in mind that a shape does not know about bodies and stand apart
   from the dynamics system. Shapes are stored in a compact form that is
   optimized for size and performance. As such, shapes are not easily moved
   around. You have to manually set the shape vertex positions to move a
   shape. However, when a shape is attached to a body using a fixture, the
   shapes move rigidly with the host body. In summary:

   - When a shape is **not** attached to a body, you can view it's vertices as being expressed in world-space.
   - When a shape is attached to a body, you can view it's vertices as being expressed in local coordinates.


Circle Shapes

   Circle shapes have a position and radius. Circles are solid. You cannot
   make a hollow circle using the circle shape.

   .. code::cpp

      b2CircleShape circle;
      circle.m_p.Set(2.0f, 3.0f);
      circle.m_radius = 0.5f;


Polygon Shapes

   Polygon shapes are solid convex polygons. A polygon is convex when all
   line segments connecting two points in the interior do not cross any
   edge of the polygon. Polygons are solid and never hollow. A polygon must
   have 3 or more vertices.

   .. figure:: https://box2d.org/documentation/convex_concave.gif

      ![Convex and Concave Polygons](images/convex_concave.gif)

   Polygons vertices are stored with a counter clockwise winding (CCW). We
   must be careful because the notion of CCW is with respect to a
   right-handed coordinate system with the z-axis pointing out of the
   plane. This might turn out to be clockwise on your screen, depending on
   your coordinate system conventions.

   .. figure:: https://box2d.org/documentation/images/winding.svg

      ![Polygon Winding Order](images/winding.svg)

   The polygon members are public, but you should use initialization
   functions to create a polygon. The initialization functions create
   normal vectors and perform validation.

   You can create a polygon shape by passing in a vertex array. The maximal
   size of the array is controlled by ``b2_maxPolygonVertices`` which has a
   default value of 8. This is sufficient to describe most convex polygons.

   The ``b2PolygonShape::Set`` function automatically computes the convex hull
   and establishes the proper winding order. This function is fast when the
   number of vertices is low. If you increase ``b2_maxPolygonVertices``, then
   the convex hull computation might become slow. Also note that the convex
   hull function may eliminate and/or re-order the points you provide.
   Vertices that are closer than ``b2_linearSlop`` may be merged.

   .. code::cpp

      // This defines a triangle in CCW order.
      b2Vec2 vertices[3];
      vertices[0].Set(0.0f, 0.0f);
      vertices[1].Set(1.0f, 0.0f);
      vertices[2].Set(0.0f, 1.0f);

      int32 count = 3;
      b2PolygonShape polygon;
      polygon.Set(vertices, count);

   The polygon shape has some convenience functions to create boxes.

   .. code::cpp

      void SetAsBox(float hx, float hy);
      void SetAsBox(float hx, float hy, const b2Vec2& center, float angle);

   Polygons inherit a radius from ``b2Shape``. The radius creates a skin around
   the polygon. The skin is used in stacking scenarios to keep polygons
   slightly separated. This allows continuous collision to work against the
   core polygon.

   .. figure:: https://box2d.org/documentation/skinned_polygon.svg

      ![Polygon Skin](images/skinned_polygon.svg)

   The polygon skin helps prevent tunneling by keeping the polygons
   separated. This results in small gaps between the shapes. Your visual
   representation can be larger than the polygon to hide any gaps.

   .. figure:: https://box2d.org/documentation/skin_collision.svg

      ![Skin Collision](images/skin_collision.svg)

   Not that polygon skin is only provided to help with continuous collision.
   The purpose is not to simulate rounded polygons.


Edge Shapes

   Edge shapes are line segments. These are provided to assist in making a
   free-form static environment for your game. A major limitation of edge
   shapes is that they can collide with circles and polygons but not with
   themselves. The collision algorithms used by Box2D require that at least
   one of two colliding shapes have volume. Edge shapes have no volume, so
   edge-edge collision is not possible.

   .. code::cpp

      // This an edge shape.
      b2Vec2 v1(0.0f, 0.0f);
      b2Vec2 v2(1.0f, 0.0f);

      b2EdgeShape edge;
      edge.SetTwoSided(v1, v2);

   In many cases a game environment is constructed by connecting several
   edge shapes end-to-end. This can give rise to an unexpected artifact
   when a polygon slides along the chain of edges. In the figure below we
   see a box colliding with an internal vertex. These *ghost* collisions
   are caused when the polygon collides with an internal vertex generating
   an internal collision normal.

   .. figure:: https://box2d.org/documentation/ghost_collision.svg

      ![Ghost Collision](images/ghost_collision.svg)

   If edge1 did not exist this collision would seem fine. With edge1
   present, the internal collision seems like a bug. But normally when
   Box2D collides two shapes, it views them in isolation.

   Fortunately, the edge shape provides a mechanism for eliminating ghost
   collisions by storing the adjacent *ghost* vertices. Box2D uses these
   ghost vertices to prevent internal collisions.

   .. figure:: https://box2d.org/documentation/ghost_vertices.svg

      ![Ghost Vertices](images/ghost_vertices.svg)

   The Box2D algorithm for dealing with ghost collisions only supports
   one-sided collision. The front face is to the right when looking from the first
   vertex towards the second vertex. This matches the CCW winding order
   used by polygons.

   .. code::cpp

      // This is an edge shape with ghost vertices.
      b2Vec2 v0(1.7f, 0.0f);
      b2Vec2 v1(1.0f, 0.25f);
      b2Vec2 v2(0.0f, 0.0f);
      b2Vec2 v3(-1.7f, 0.4f);

      b2EdgeShape edge;
      edge.SetOneSided(v0, v1, v2, v3);

   In general stitching edges together this way is a bit wasteful and
   tedious. This brings us to chain shapes.


Chain Shapes


   The chain shape provides an efficient way to connect many edges together
   to construct your static game worlds. Chain shapes automatically
   eliminate ghost collisions and provide one-sided collision. The collision is
   one-sided to eliminate ghost collisions.

   If you don't care about ghost collisions, you can just create a bunch of
   two-sided edge shapes. The efficiency is similar.

   The simplest way to use chain shapes is to create loops. Simply provide an
   array of vertices.

   .. code::cpp

      b2Vec2 vs[4];
      vs[0].Set(1.7f, 0.0f);
      vs[1].Set(1.0f, 0.25f);
      vs[2].Set(0.0f, 0.0f);
      vs[3].Set(-1.7f, 0.4f);

      b2ChainShape chain;
      chain.CreateLoop(vs, 4);

   The edge normal depends on the winding order. A counter-clockwise winding 
   order orients the normal outwards and a clockwise winding order orients 
   the normal inwards.

   .. figure:: https://box2d.org/documentation/chain_loop_outwards.svg

      ![Chain Shape Outwards Loop](images/chain_loop_outwards.svg)

   .. figure:: https://box2d.org/documentation/chain_loop_inwards.svg

      ![Chain Shape Inwards Loop](images/chain_loop_inwards.svg)

   You may have a scrolling game world and would like to connect several chains together.
   You can connect chains together using ghost vertices, like we did with ``b2EdgeShape``.

   .. figure:: https://box2d.org/documentation/chain_shape.svg

      ![Chain Shape](images/chain_shape.svg)

   .. code::cpp

      b2ChainShape::CreateChain(const b2Vec2* vertices, int32 count,
            const b2Vec2& prevVertex, const b2Vec2& nextVertex);

   Self-intersection of chain shapes is not supported. It might work, it
   might not. The code that prevents ghost collisions assumes there are no
   self-intersections of the chain. Also, very close vertices can cause
   problems. Make sure all your edges are longer than ``b2_linearSlop`` (5mm).

   .. figure:: https://box2d.org/documentation/self_intersect.svg

      ![Self Intersection is Bad](images/self_intersect.svg)

   Each edge in the chain is treated as a child shape and can be accessed
   by index. When a chain shape is connected to a body, each edge gets its
   own bounding box in the broad-phase collision tree.

   .. code::cpp

      // Visit each child edge.
      for (int32 i = 0; i < chain.GetChildCount(); ++i)
      {
         b2EdgeShape edge;
         chain.GetChildEdge(&edge, i);

         ...
      }


Geometric Queries
-----------------

   You can perform a couple geometric queries on a single shape.


Shape Point Test

   You can test a point for overlap with a shape. You provide a transform
   for the shape and a world point.

   .. code::cpp

      b2Transform transform;
      transform.SetIdentity();
      b2Vec2 point(5.0f, 2.0f);

      bool hit = shape->TestPoint(transform, point);

   Edge and chain shapes always return false, even if the chain is a loop.


Shape Ray Cast

   You can cast a ray at a shape to get the point of first intersection and normal vector. A child index is included for chain shapes because the ray cast will only check a single edge at a time.

   .. Caution::

      **Caution**:
      No hit will register if the ray starts inside a convex shape like a circle 
      or polygon. This is consistent with Box2D treating convex shapes as solid. 


   .. code::cpp

      b2Transfrom transform;
      transform.SetIdentity();

      b2RayCastInput input;
      input.p1.Set(0.0f, 0.0f);
      input.p2.Set(1.0f, 0.0f);
      input.maxFraction = 1.0f;
      int32 childIndex = 0;

      b2RayCastOutput output;
      bool hit = shape->RayCast(&output, input, transform, childIndex);

      if (hit)
      {
         b2Vec2 hitPoint = input.p1 + output.fraction * (input.p2 -- input.p1);
         ...
      }


Pairwise Functions
------------------

   The Collision module contains functions that take a pair of shapes and 
   compute some results. These include:

   - Overlap
   - Contact manifolds
   - Distance
   - Time of impact


Overlap

   You can test two shapes for overlap using this function:

   .. code::cpp

      b2Transform xfA = ..., xfB = ...;
      bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);

   Again you must provide child indices to for the case of chain shapes.


Contact Manifolds

   Box2D has functions to compute contact points for overlapping shapes. If
   we consider circle-circle or circle-polygon, we can only get one contact
   point and normal. In the case of polygon-polygon we can get two points.
   These points share the same normal vector so Box2D groups them into a
   manifold structure. The contact solver takes advantage of this to
   improve stacking stability.

   .. figure:: https://box2d.org/documentation/manifolds.svg

      ![Contact Manifold](images/manifolds.svg)

   Normally you don't need to compute contact manifolds directly, however
   you will likely use the results produced in the simulation.

   The ``b2Manifold`` structure holds a normal vector and up to two contact
   points. The normal and points are held in local coordinates. As a
   convenience for the contact solver, each point stores the normal and
   tangential (friction) impulses.

   The data stored in ``b2Manifold`` is optimized for internal use. If you need
   this data, it is usually best to use the ``b2WorldManifold`` structure to
   generate the world coordinates of the contact normal and points. You
   need to provide a ``b2Manifold`` and the shape transforms and radii.

   .. code::cpp

      b2WorldManifold worldManifold;
      worldManifold.Initialize(&manifold, transformA, shapeA.m_radius,
      transformB, shapeB.m_radius);

      for (int32 i = 0; i < manifold.pointCount; ++i)
      {
         b2Vec2 point = worldManifold.points[i];
         ...
      }

   Notice that the world manifold uses the point count from the original
   manifold.

   During simulation shapes may move and the manifolds may change. Points
   may be added or removed. You can detect this using ``b2GetPointStates``.

   .. code::cpp

      b2PointState state1[2], state2[2];
      b2GetPointStates(state1, state2, &manifold1, &manifold2);

      if (state1[0] == b2_removeState)
      {
         // process event
      }


Distance

   The `b2Distance` function can be used to compute the distance between two
   shapes. The distance function needs both shapes to be converted into a
   b2DistanceProxy. There is also some caching used to warm start the
   distance function for repeated calls.

   .. figure:: https://box2d.org/documentation/distance.svg

      ![Distance Function](images/distance.svg)


Time of Impact

   物理引擎的模拟世界是一个非连续的模拟，因为计算机只处理的是离散数字信号，不可能像真实世界那样
   模拟连续不间断的时间状态。因此，如果不考虑时间影响因素（Time of Impact），物体在前后两个
   时间状态之间存在的碰撞将会被忽略，这将模拟不出来合理的、真实的世界运行状态。

   If two shapes are moving fast, they may *tunnel* through each other in a
   single time step.

   .. figure:: https://box2d.org/documentation/tunneling2.svg

      ![Tunneling](images/tunneling2.svg)

   The `b2TimeOfImpact` function is used to determine the time when two
   moving shapes collide. This is called the *time of impact* (TOI). The
   main purpose of `b2TimeOfImpact` is for tunnel prevention. In particular,
   it is designed to prevent moving objects from tunneling outside of
   static level geometry.

   This function accounts for rotation and translation of both shapes,
   however if the rotations are large enough, then the function may miss a
   collision. However the function will still report a non-overlapped time
   and will capture all translational collisions.

   The time of impact function identities an initial separating axis and
   ensures the shapes do not cross on that axis. This might miss collisions
   that are clear at the final positions. While this approach may miss some
   collisions, it is very fast and adequate for tunnel prevention.

   .. figure:: https://box2d.org/documentation/captured_toi.svg

      ![Captured Collision](images/captured_toi.svg)

   .. figure:: https://box2d.org/documentation/missed_toi.svg

      ![Missed Collision](images/missed_toi.svg)

   It is difficult to put a restriction on the rotation magnitude. There
   may be cases where collisions are missed for small rotations. Normally,
   these missed rotational collisions should not harm game play. They tend
   to be glancing collisions.

   The function requires two shapes (converted to b2DistanceProxy) and two
   b2Sweep structures. The sweep structure defines the initial and final
   transforms of the shapes.

   You can use fixed rotations to perform a *shape cast*. In this case, the
   time of impact function will not miss any collisions.


Dynamic Tree
------------

   The ``b2DynamicTree`` class is used by Box2D to organize large numbers of
   shapes efficiently. The class does not know about shapes. Instead it
   operates on axis-aligned bounding boxes (AABBs) with user data pointers.

   The dynamic tree is a hierarchical AABB tree. Each internal node in the
   tree has two children. A leaf node is a single user AABB. The tree uses
   rotations to keep the tree balanced, even in the case of degenerate
   input.

   The tree structure allows for efficient ray casts and region queries.
   For example, you may have hundreds of shapes in your scene. You could
   perform a ray cast against the scene in a brute force manner by ray
   casting each shape. This would be inefficient because it does not take
   advantage of shapes being spread out. Instead, you can maintain a
   dynamic tree and perform ray casts against the tree. This traverses the
   ray through the tree skipping large numbers of shapes.

   A region query uses the tree to find all leaf AABBs that overlap a query
   AABB. This is faster than a brute force approach because many shapes can
   be skipped.

   .. figure:: https://box2d.org/documentation/raycast.svg

      ![Raycast](images/raycast.svg)

   .. figure:: https://box2d.org/documentation/overlap_test.svg

      ![Overlap Test](images/overlap_test.svg)

   Normally you will not use the dynamic tree directly. Rather you will go
   through the b2World class for ray casts and region queries. If you plan
   to instantiate your own dynamic tree, you can learn how to use it by
   looking at how Box2D uses it.


Broad-phase
-----------

   Collision processing in a physics step can be divided into narrow-phase
   and broad-phase. In the narrow-phase we compute contact points between
   pairs of shapes. Imagine we have N shapes. Using brute force, we would
   need to perform the narrow-phase for N*N/2 pairs.

   The b2BroadPhase class reduces this load by using a dynamic tree for
   pair management. This greatly reduces the number of narrow-phase calls.

   Normally you do not interact with the broad-phase directly. Instead,
   Box2D creates and manages a broad-phase internally. Also, b2BroadPhase
   is designed with Box2D's simulation loop in mind, so it is likely not
   suited for other use cases.


👊 Dynamics Module
==================

   The Dynamics module is the most complex part of Box2D and is the part
   you likely interact with the most. The Dynamics module sits on top of
   the Common and Collision modules, so you should be somewhat familiar
   with those by now.

   The Dynamics module contains:

   - fixture class
   - rigid body class
   - contact class
   - joint classes
   - world class
   - listener classes

   There are many dependencies between these classes so it is difficult to
   describe one class without referring to another. In the following, you
   may see some references to classes that have not been described yet.
   Therefore, you may want to quickly skim this chapter before reading it
   closely.

   The dynamics module is covered in the following chapters.


Bodies
------

   Bodies have position and velocity. You can apply forces, torques, and
   impulses to bodies. Bodies can be static, kinematic, or dynamic. Here
   are the body type definitions:


b2_staticBody

   A static body does not move under simulation and behaves as if it has
   infinite mass. Internally, Box2D stores zero for the mass and the
   inverse mass. Static bodies can be moved manually by the user. A static
   body has zero velocity. Static bodies do not collide with other static
   or kinematic bodies.


b2_kinematicBody

   A kinematic body moves under simulation according to its velocity.
   Kinematic bodies do not respond to forces. They can be moved manually by
   the user, but normally a kinematic body is moved by setting its
   velocity. A kinematic body behaves as if it has infinite mass, however,
   Box2D stores zero for the mass and the inverse mass. Kinematic bodies do
   not collide with other kinematic or static bodies.


b2_dynamicBody

   A dynamic body is fully simulated. They can be moved manually by the
   user, but normally they move according to forces. A dynamic body can
   collide with all body types. A dynamic body always has finite, non-zero
   mass. If you try to set the mass of a dynamic body to zero, it will
   automatically acquire a mass of one kilogram and it won't rotate.

   Bodies are the backbone for fixtures (shapes). Bodies carry fixtures and
   move them around in the world. Bodies are always rigid bodies in Box2D.
   That means that two fixtures attached to the same rigid body never move
   relative to each other and fixtures attached to the same body don't
   collide.

   Fixtures have collision geometry and density. Normally, bodies acquire
   their mass properties from the fixtures. However, you can override the
   mass properties after a body is constructed.

   You usually keep pointers to all the bodies you create. This way you can
   query the body positions to update the positions of your graphical
   entities. You should also keep body pointers so you can destroy them
   when you are done with them.


Body Definition

   Before a body is created you must create a body definition (b2BodyDef).
   The body definition holds the data needed to create and initialize a
   body.

   Box2D copies the data out of the body definition; it does not keep a
   pointer to the body definition. This means you can recycle a body
   definition to create multiple bodies.

   Let's go over some of the key members of the body definition.


Body Type

   As discussed at the beginning of this chapter, there are three different
   body types: ``static``, ``kinematic``, and ``dynamic``. You should establish the
   body type at creation because changing the body type later is expensive.

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.type = b2_dynamicBody;


   Setting the body type is mandatory.


Position and Angle

   The body definition gives you the chance to initialize the position of
   the body on creation. This has far better performance than creating the
   body at the world origin and then moving the body.

   .. Caution::

      **Caution**:
      Do not create a body at the origin and then move it. If you create
      several bodies at the origin, then performance will suffer.

   A body has two main points of interest. The first point is the body's
   origin. Fixtures and joints are attached relative to the body's origin.
   The second point of interest is the center of mass. The center of mass
   is determined from mass distribution of the attached shapes or is
   explicitly set with ``b2MassData``. Much of Box2D's internal computations
   use the center of mass position. For example ``b2Body`` stores the linear
   velocity for the center of mass.

   When you are building the body definition, you may not know where the
   center of mass is located. Therefore you specify the position of the
   body's origin. You may also specify the body's angle in radians, which
   is not affected by the position of the center of mass. If you later
   change the mass properties of the body, then the center of mass may move
   on the body, but the origin position does not change and the attached
   shapes and joints do not move.

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.position.Set(0.0f, 2.0f); // the body's origin position.
      bodyDef.angle = 0.25f * b2_pi; // the body's angle in radians.


   A rigid body is also a frame of reference. You can define fixtures and
   joints in that frame. Those fixtures and joint anchors never move in the
   local frame of the body.


Damping

   Damping is used to reduce the world velocity of bodies. Damping is
   different than friction because friction only occurs with contact.
   Damping is not a replacement for friction and the two effects should be
   used together.

   Damping parameters should be between 0 and infinity, with 0 meaning no
   damping, and infinity meaning full damping. Normally you will use a
   damping value between 0 and 0.1. I generally do not use linear damping
   because it makes bodies look like they are floating.

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.linearDamping = 0.0f;
      bodyDef.angularDamping = 0.01f;


   Damping is approximated for stability and performance. At small damping
   values the damping effect is mostly independent of the time step. At
   larger damping values, the damping effect will vary with the time step.
   This is not an issue if you use a fixed time step (recommended).


Gravity Scale

   You can use the gravity scale to adjust the gravity on a single body. Be
   careful though, increased gravity can decrease stability.

   .. code::cpp

      // Set the gravity scale to zero so this body will float
      b2BodyDef bodyDef;
      bodyDef.gravityScale = 0.0f;


Sleep Parameters

   What does sleep mean? Well it is expensive to simulate bodies, so the
   less we have to simulate the better. When a body comes to rest we would
   like to stop simulating it.

   When Box2D determines that a body (or group of bodies) has come to rest,
   the body enters a sleep state which has very little CPU overhead. If a
   body is awake and collides with a sleeping body, then the sleeping body
   wakes up. Bodies will also wake up if a joint or contact attached to
   them is destroyed. You can also wake a body manually.

   The body definition lets you specify whether a body can sleep and
   whether a body is created sleeping.

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.allowSleep = true;
      bodyDef.awake = true;



Fixed Rotation

   You may want a rigid body, such as a character, to have a fixed
   rotation. Such a body should not rotate, even under load. You can use
   the fixed rotation setting to achieve this:

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.fixedRotation = true;


   The fixed rotation flag causes the rotational inertia and its inverse to
   be set to zero.


Bullets

   Game simulation usually generates a sequence of images that are played
   at some frame rate. This is called discrete simulation. In discrete
   simulation, rigid bodies can move by a large amount in one time step. If
   a physics engine doesn't account for the large motion, you may see some
   objects incorrectly pass through each other. This effect is called
   tunneling.

   By default, Box2D uses continuous collision detection (CCD) to prevent
   dynamic bodies from tunneling through static bodies. This is done by
   sweeping shapes from their old position to their new positions. The
   engine looks for new collisions during the sweep and computes the time
   of impact (TOI) for these collisions. Bodies are moved to their first
   TOI and then the solver performs a sub-step to complete the full time
   step. There may be additional TOI events within a sub-step.

   Normally CCD is not used between dynamic bodies. This is done to keep
   performance reasonable. In some game scenarios you need dynamic bodies
   to use CCD. For example, you may want to shoot a high speed bullet at a
   stack of dynamic bricks. Without CCD, the bullet might tunnel through
   the bricks.

   Fast moving objects in Box2D can be labeled as bullets. Bullets will
   perform CCD with both static and dynamic bodies. You should decide what
   bodies should be bullets based on your game design. If you decide a body
   should be treated as a bullet, use the following setting.

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.bullet = true;


   The bullet flag only affects dynamic bodies.


Activation

   You may wish a body to be created but not participate in collision or
   dynamics. This state is similar to sleeping except the body will not be
   woken by other bodies and the body's fixtures will not be placed in the
   broad-phase. This means the body will not participate in collisions, ray
   casts, etc.

   You can create a body in an inactive state and later re-activate it.

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.active = true;


   Joints may be connected to inactive bodies. These joints will not be
   simulated. You should be careful when you activate a body that its
   joints are not distorted.

   Note that activating a body is almost as expensive as creating the body
   from scratch. So you should not use activation for streaming worlds. Use
   creation/destruction for streaming worlds to save memory.


User Data

   User data is a void pointer. This gives you a hook to link your
   application objects to bodies. You should be consistent to use the same
   object type for all body user data.

   .. code::cpp

      b2BodyDef bodyDef;
      bodyDef.userData.pointer = reinterpret_cast<uintptr_t>(&myActor);



Body Factory

   Bodies are created and destroyed using a body factory provided by the
   world class. This lets the world create the body with an efficient
   allocator and add the body to the world data structure.

   .. code::cpp

      b2World* myWorld;
      b2Body* dynamicBody = myWorld->CreateBody(&bodyDef);

      // ... do stuff ...

      myWorld->DestroyBody(dynamicBody);
      dynamicBody = nullptr;


   > **Caution**:
   > You should never use new or malloc to create a body. The world won't
   > know about the body and the body won't be properly initialized.

   Box2D does not keep a reference to the body definition or any of the
   data it holds (except user data pointers). So you can create temporary
   body definitions and reuse the same body definitions.

   Box2D allows you to avoid destroying bodies by deleting your b2World
   object, which does all the cleanup work for you. However, you should be
   mindful to nullify body pointers that you keep in your game engine.

   When you destroy a body, the attached fixtures and joints are
   automatically destroyed. This has important implications for how you
   manage shape and joint pointers.


Using a Body

   After creating a body, there are many operations you can perform on the
   body. These include setting mass properties, accessing position and
   velocity, applying forces, and transforming points and vectors.


Mass Data

   A body has mass (scalar), center of mass (2-vector), and rotational
   inertia (scalar). For static bodies, the mass and rotational inertia are
   set to zero. When a body has fixed rotation, its rotational inertia is
   zero.

   Normally the mass properties of a body are established automatically
   when fixtures are added to the body. You can also adjust the mass of a
   body at run-time. This is usually done when you have special game
   scenarios that require altering the mass.

   .. code::cpp

      void b2Body::SetMassData(const b2MassData* data);


   After setting a body's mass directly, you may wish to revert to the
   natural mass dictated by the fixtures. You can do this with:

   .. code::cpp

      void b2Body::ResetMassData();


   The body's mass data is available through the following functions:

   .. code::cpp

      float b2Body::GetMass() const;
      float b2Body::GetInertia() const;
      const b2Vec2& b2Body::GetLocalCenter() const;
      void b2Body::GetMassData(b2MassData* data) const;



State Information

   There are many aspects to the body's state. You can access this state
   data efficiently through the following functions:

   .. code::cpp

      void b2Body::SetType(b2BodyType type);
      b2BodyType b2Body::GetType();
      void b2Body::SetBullet(bool flag);
      bool b2Body::IsBullet() const;
      void b2Body::SetSleepingAllowed(bool flag);
      bool b2Body::IsSleepingAllowed() const;
      void b2Body::SetAwake(bool flag);
      bool b2Body::IsAwake() const;
      void b2Body::SetEnabled(bool flag);
      bool b2Body::IsEnabled() const;
      void b2Body::SetFixedRotation(bool flag);
      bool b2Body::IsFixedRotation() const;



Position and Velocity

   You can access the ``position`` and ``rotation`` of a body. This is common 
   when rendering your associated game actor. You can also set the ``position``,
   although this is less common since you will normally use Box2D to
   simulate movement.

   .. code::cpp

      bool b2Body::SetTransform(const b2Vec2& position, float angle);
      const b2Transform& b2Body::GetTransform() const;
      const b2Vec2& b2Body::GetPosition() const;
      float b2Body::GetAngle() const;


   You can access the center of mass position in local and world
   coordinates. Much of the internal simulation in Box2D uses the center of
   mass. However, you should normally not need to access it. Instead you
   will usually work with the body transform. For example, you may have a
   body that is square. The body origin might be a corner of the square,
   while the center of mass is located at the center of the square.

   .. code::cpp

      const b2Vec2& b2Body::GetWorldCenter() const;
      const b2Vec2& b2Body::GetLocalCenter() const;


   You can access the linear and angular velocity. The linear velocity is
   for the center of mass. Therefore, the linear velocity may change if the
   mass properties change.


Forces and Impulses

   You can apply forces, torques, and impulses to a body. When you apply a
   force or an impulse, you provide a world point where the load is
   applied. This often results in a torque about the center of mass.

   .. code::cpp

      void b2Body::ApplyForce(const b2Vec2& force, const b2Vec2& point);
      void b2Body::ApplyTorque(float torque);
      void b2Body::ApplyLinearImpulse(const b2Vec2& impulse, const b2Vec2& point);
      void b2Body::ApplyAngularImpulse(float impulse);


   Applying a force, torque, or impulse wakes the body. Sometimes this is
   undesirable. For example, you may be applying a steady force and want to
   allow the body to sleep to improve performance. In this case you can use
   the following code.

   .. code::cpp

      if (myBody->IsAwake() == true)
      {
         myBody->ApplyForce(myForce, myPoint);
      }



Coordinate Transformations

   The body class has some utility functions to help you transform points
   and vectors between local and world space. If you don't understand
   these concepts, please read "Essential Mathematics for Games and
   Interactive Applications" by Jim Van Verth and Lars Bishop. These
   functions are efficient (when inlined).

   .. code::cpp

      b2Vec2 b2Body::GetWorldPoint(const b2Vec2& localPoint);
      b2Vec2 b2Body::GetWorldVector(const b2Vec2& localVector);
      b2Vec2 b2Body::GetLocalPoint(const b2Vec2& worldPoint);
      b2Vec2 b2Body::GetLocalVector(const b2Vec2& worldVector);



Acessing Fixtures, Joints, and Contacts

   You can iterate over a body's fixtures. This is mainly useful if you
   need to access the fixture's user data.

   .. code::cpp

      for (b2Fixture* f = body->GetFixtureList(); f; f = f->GetNext())
      {
         MyFixtureData* data = (MyFixtureData*)f->GetUserData();
         // do something with data ...
      }


   You can similarly iterate over the body's joint list.

   The body also provides a list of associated contacts. You can use this
   to get information about the current contacts. Be careful, because the
   contact list may not contain all the contacts that existed during the
   previous time step.


Fixtures
--------

   Recall that shapes don't know about bodies and may be used independently
   of the physics simulation. Therefore Box2D provides the ``b2Fixture`` class
   to attach shapes to bodies. A body may have zero or more fixtures. A
   body with multiple fixtures is sometimes called a *compound body.*

   Fixtures hold the following:

   - a single shape
   - broad-phase proxies
   - density, friction, and restitution
   - collision filtering flags
   - back pointer to the parent body
   - user data
   - sensor flag

   These are described in the following sections.


Fixture Creation

   Fixtures are created by initializing a fixture definition and then
   passing the definition to the parent body.

   .. code::cpp

      b2Body* myBody;
      b2FixtureDef fixtureDef;
      fixtureDef.shape = &myShape;
      fixtureDef.density = 1.0f;
      b2Fixture* myFixture = myBody->CreateFixture(&fixtureDef);


   This creates the fixture and attaches it to the body. You do not need to
   store the fixture pointer since the fixture will automatically be
   destroyed when the parent body is destroyed. You can create multiple
   fixtures on a single body.

   You can destroy a fixture on the parent body. You may do this to model a
   breakable object. Otherwise you can just leave the fixture alone and let
   the body destruction take care of destroying the attached fixtures.

   .. code::cpp

      myBody->DestroyFixture(myFixture);



Density

   The fixture density is used to compute the mass properties of the parent
   body. The density can be zero or positive. You should generally use
   similar densities for all your fixtures. This will improve stacking
   stability.

   The mass of a body is not adjusted when you set the density. You must
   call ResetMassData for this to occur.

   .. code::cpp

      b2Fixture* fixture;
      fixture->SetDensity(5.0f);
      b2Body*
   body->ResetMassData();



Friction

   Friction is used to make objects slide along each other realistically.
   Box2D supports static and dynamic friction, but uses the same parameter
   for both. Friction is simulated accurately in Box2D and the friction
   strength is proportional to the normal force (this is called Coulomb
   friction). The friction parameter is usually set between 0 and 1, but
   can be any non-negative value. A friction value of 0 turns off friction
   and a value of 1 makes the friction strong. When the friction force is
   computed between two shapes, Box2D must combine the friction parameters
   of the two parent fixtures. This is done with the geometric mean:

   .. code::cpp

      b2Fixture* fixtureA;
      b2Fixture* fixtureB;
      float friction;
      friction = sqrtf(fixtureA->friction * fixtureB->friction);


   So if one fixture has zero friction then the contact will have zero
   friction.

   You can override the default mixed friction using `b2Contact::SetFriction`.
   This is usually done in the ``b2ContactListener`` callback.


Restitution

   Restitution is used to make objects bounce. The restitution value is
   usually set to be between 0 and 1. Consider dropping a ball on a table.
   A value of zero means the ball won't bounce. This is called an
   inelastic collision. A value of one means the ball's velocity will be
   exactly reflected. This is called a perfectly elastic collision.
   Restitution is combined using the following formula.

   .. code::cpp

      b2Fixture* fixtureA;
      b2Fixture* fixtureB;
      float restitution;
      restitution = b2Max(fixtureA->restitution, fixtureB->restitution);


   Restitution is combined this way so that you can have a bouncy super
   ball without having a bouncy floor.

   You can override the default mixed restitution using `b2Contact::SetRestitution`. 
   This is usually done in the ``b2ContactListener`` callback.

   When a shape develops multiple contacts, restitution is simulated
   approximately. This is because Box2D uses an iterative solver. Box2D
   also uses inelastic collisions when the collision velocity is small.
   This is done to prevent jitter. See ``b2_velocityThreshold``.


Filtering

   Collision filtering allows you to prevent collision between fixtures.
   For example, say you make a character that rides a bicycle. You want the
   bicycle to collide with the terrain and the character to collide with
   the terrain, but you don't want the character to collide with the
   bicycle (because they must overlap). Box2D supports such collision
   filtering using categories and groups.

   Box2D supports 16 collision categories. For each fixture you can specify
   which category it belongs to. You also specify what other categories
   this fixture can collide with. For example, you could specify in a
   multiplayer game that all players don't collide with each other and
   monsters don't collide with each other, but players and monsters should
   collide. This is done with masking bits. For example:

   .. code::cpp

      b2FixtureDef playerFixtureDef, monsterFixtureDef;
      playerFixtureDef.filter.categoryBits = 0x0002;
      monsterFixtureDef.filter.categoryBits = 0x0004;
      playerFixtureDef.filter.maskBits = 0x0004;
      monsterFixtureDef.filter.maskBits = 0x0002;


   Here is the rule for a collision to occur:

   .. code::cpp

      uint16 catA = fixtureA.filter.categoryBits;
      uint16 maskA = fixtureA.filter.maskBits;
      uint16 catB = fixtureB.filter.categoryBits;
      uint16 maskB = fixtureB.filter.maskBits;

      if ((catA & maskB) != 0 && (catB & maskA) != 0)
      {
         // fixtures can collide
      }


   Collision groups let you specify an integral group index. You can have
   all fixtures with the same group index always collide (positive index)
   or never collide (negative index). Group indices are usually used for
   things that are somehow related, like the parts of a bicycle. In the
   following example, fixture1 and fixture2 always collide, but fixture3
   and fixture4 never collide.

   .. code::cpp

      fixture1Def.filter.groupIndex = 2;
      fixture2Def.filter.groupIndex = 2;
      fixture3Def.filter.groupIndex = -8;
      fixture4Def.filter.groupIndex = -8;


   Collisions between fixtures of different group indices are filtered
   according the category and mask bits. In other words, group filtering
   has higher precedence than category filtering.

   Note that additional collision filtering occurs in Box2D. Here is a
   list:

   - A fixture on a static body can only collide with a dynamic body.
   - A fixture on a kinematic body can only collide with a dynamic body.
   - Fixtures on the same body never collide with each other.
   - You can optionally enable/disable collision between fixtures on bodies connected by a joint.

   Sometimes you might need to change collision filtering after a fixture
   has already been created. You can get and set the b2Filter structure on
   an existing fixture using ``b2Fixture::GetFilterData`` and
   ``b2Fixture::SetFilterData``. Note that changing the filter data will not
   add or remove contacts until the next time step (see the World class).


Sensors

   Sometimes game logic needs to know when two fixtures overlap yet there
   should be no collision response. This is done by using sensors. A sensor
   is a fixture that detects collision but does not produce a response.

   You can flag any fixture as being a sensor. Sensors may be static,
   kinematic, or dynamic. Remember that you may have multiple fixtures per
   body and you can have any mix of sensors and solid fixtures. Also,
   sensors only form contacts when at least one body is dynamic, so you
   will not get a contact for kinematic versus kinematic, kinematic versus
   static, or static versus static.

   Sensors do not generate contact points. There are two ways to get the
   state of a sensor:

   1. `b2Contact::IsTouching`
   2. `b2ContactListener::BeginContact` and `b2ContactListener::EndContact`


Joints
------

   Joints are used to constrain bodies to the world or to each other.
   Typical examples in games include ragdolls, teeters, and pulleys. Joints
   can be combined in many different ways to create interesting motions.

   Some joints provide limits so you can control the range of motion. Some
   joint provide motors which can be used to drive the joint at a
   prescribed speed until a prescribed force/torque is exceeded.

   Joint motors can be used in many ways. You can use motors to control
   position by specifying a joint velocity that is proportional to the
   difference between the actual and desired position. You can also use
   motors to simulate joint friction: set the joint velocity to zero and
   provide a small, but significant maximum motor force/torque. Then the
   motor will attempt to keep the joint from moving until the load becomes
   too strong.


Joint Definition

   Each joint type has a definition that derives from ``b2JointDef``. All
   joints are connected between two different bodies. One body may be static.
   Joints between static and/or kinematic bodies are allowed, but have no
   effect and use some processing time.

   You can specify user data for any joint type and you can provide a flag
   to prevent the attached bodies from colliding with each other. This is
   actually the default behavior and you must set the collideConnected
   Boolean to allow collision between to connected bodies.

   Many joint definitions require that you provide some geometric data.
   Often a joint will be defined by anchor points. These are points fixed
   in the attached bodies. Box2D requires these points to be specified in
   local coordinates. This way the joint can be specified even when the
   current body transforms violate the joint constraint --- a common
   occurrence when a game is saved and reloaded. Additionally, some joint
   definitions need to know the default relative angle between the bodies.
   This is necessary to constrain rotation correctly.

   Initializing the geometric data can be tedious, so many joints have
   initialization functions that use the current body transforms to remove
   much of the work. However, these initialization functions should usually
   only be used for prototyping. Production code should define the geometry
   directly. This will make joint behavior more robust.

   The rest of the joint definition data depends on the joint type. We
   cover these now.


Joint Factory

   Joints are created and destroyed using the world factory methods. This
   brings up an old issue:

   .. Caution::

      **Caution**:
      Don't try to create a joint on the stack or on the heap using new or
      malloc. You must create and destroy bodies and joints using the create
      and destroy methods of the ``b2World`` class.

   Here's an example of the lifetime of a revolute joint:

   .. code::cpp

      b2World* myWorld;
      b2RevoluteJointDef jointDef;
      jointDef.bodyA = myBodyA;
      jointDef.bodyB = myBodyB;
      jointDef.anchorPoint = myBodyA->GetCenterPosition();

      b2RevoluteJoint* joint = (b2RevoluteJoint*)myWorld->CreateJoint(&jointDef);

      // ... do stuff ...

      myWorld->DestroyJoint(joint);
      joint = nullptr;


   It is always good to nullify your pointer after they are destroyed. This
   will make the program crash in a controlled manner if you try to reuse
   the pointer.

   The lifetime of a joint is not simple. Heed this warning well:

   > **Caution**:
   > Joints are destroyed when an attached body is destroyed.

   This precaution is not always necessary. You may organize your game
   engine so that joints are always destroyed before the attached bodies.
   In this case you don't need to implement the listener class. See the
   section on Implicit Destruction for details.


Using Joints

   Many simulations create the joints and don't access them again until
   they are destroyed. However, there is a lot of useful data contained in
   joints that you can use to create a rich simulation.

   First of all, you can get the bodies, anchor points, and user data from
   a joint.

   .. code::cpp

      b2Body* b2Joint::GetBodyA();
      b2Body* b2Joint::GetBodyB();
      b2Vec2 b2Joint::GetAnchorA();
      b2Vec2 b2Joint::GetAnchorB();
      void* b2Joint::GetUserData();


   All joints have a reaction force and torque. This the reaction force
   applied to body 2 at the anchor point. You can use reaction forces to
   break joints or trigger other game events. These functions may do some
   computations, so don't call them if you don't need the result.

   .. code::cpp

      b2Vec2 b2Joint::GetReactionForce();
      float b2Joint::GetReactionTorque();



Distance Joint

   One of the simplest joint is a distance joint which says that the
   distance between two points on two bodies must be constant. When you
   specify a distance joint the two bodies should already be in place. Then
   you specify the two anchor points in world coordinates. The first anchor
   point is connected to body 1, and the second anchor point is connected
   to body 2. These points imply the length of the distance constraint.

   .. figure:: https://box2d.org/documentation/distance_joint.gif
   
      ![Distance Joint](images/distance_joint.gif)

   Here is an example of a distance joint definition. In this case we
   decide to allow the bodies to collide.

   .. code::cpp

      b2DistanceJointDef jointDef;
      jointDef.Initialize(myBodyA, myBodyB, worldAnchorOnBodyA,
      worldAnchorOnBodyB);
      jointDef.collideConnected = true;


   The distance joint can also be made soft, like a spring-damper
   connection. See the Web example in the testbed to see how this behaves.

   Softness is achieved by tuning two constants in the definition:
   stiffness and damping. It can be non-intuitive setting these values directly
   since they have units in terms on Newtons. Box2D provides and API to compute
   these values in terms of frequency and damping ratio.

   .. code::cpp

      void b2LinearStiffness(float& stiffness, float& damping,
         float frequencyHertz, float dampingRatio,
         const b2Body* bodyA, const b2Body* bodyB);


   Think of the frequency as the frequency of a harmonic oscillator (like a
   guitar string). The frequency is specified in Hertz. Typically the frequency
   should be less than a half the frequency of the time step. So if you are using
   a 60Hz time step, the frequency of the distance joint should be less than 30Hz.
   The reason is related to the Nyquist frequency.

   The damping ratio is non-dimensional and is typically between 0 and 1,
   but can be larger. At 1, the damping is critical (all oscillations
   should vanish).

   .. code::cpp

      float frequencyHz = 4.0f;
      float dampingRatio = 0.5f;
      b2LinearStiffness(jointDef.stiffness, jointDef.damping, frequencyHz, 
                        dampingRatio, jointDef.bodyA, jointDef.bodyB);


   It is also possible to define a minimum and maximum length for the distance joint.
   See `b2DistanceJointDef` for details.


Revolute Joint

   A revolute joint forces two bodies to share a common anchor point, often
   called a hinge point. The revolute joint has a single degree of freedom:
   the relative rotation of the two bodies. This is called the joint angle.

   .. figure:: https://box2d.org/documentation/revolute_joint.gif

      ![Revolute Joint](images/revolute_joint.gif)

   To specify a revolute you need to provide two bodies and a single anchor
   point in world space. The initialization function assumes that the
   bodies are already in the correct position.

   In this example, two bodies are connected by a revolute joint at the
   first body's center of mass.

   .. code::cpp

      b2RevoluteJointDef jointDef;
      jointDef.Initialize(myBodyA, myBodyB, myBodyA->GetWorldCenter());


   The revolute joint angle is positive when ``myBodyB`` rotates CCW about the
   angle point. Like all angles in Box2D, the revolute angle is measured in
   radians. By convention the revolute joint angle is zero when the joint
   is created using ``Initialize()``, regardless of the current rotation of the
   two bodies.

   In some cases you might wish to control the joint angle. For this, the
   revolute joint can optionally simulate a joint limit and/or a motor.

   A joint limit forces the joint angle to remain between a lower and upper
   bound. The limit will apply as much torque as needed to make this
   happen. The limit range should include zero, otherwise the joint will
   lurch when the simulation begins.

   A joint motor allows you to specify the joint speed (the time derivative
   of the angle). The speed can be negative or positive. A motor can have
   infinite force, but this is usually not desirable. Recall the eternal
   question:

   .. block::

      *What happens when an irresistible force meets an immovable object?*

   I can tell you it's not pretty. So you can provide a maximum torque for
   the joint motor. The joint motor will maintain the specified speed
   unless the required torque exceeds the specified maximum. When the
   maximum torque is exceeded, the joint will slow down and can even
   reverse.

   You can use a joint motor to simulate joint friction. Just set the joint
   speed to zero, and set the maximum torque to some small, but significant
   value. The motor will try to prevent the joint from rotating, but will
   yield to a significant load.

   Here's a revision of the revolute joint definition above; this time the
   joint has a limit and a motor enabled. The motor is setup to simulate
   joint friction.

   .. code::cpp

      b2RevoluteJointDef jointDef;
      jointDef.Initialize(bodyA, bodyB, myBodyA->GetWorldCenter());
      jointDef.lowerAngle = -0.5f * b2_pi; // -90 degrees
      jointDef.upperAngle = 0.25f * b2_pi; // 45 degrees
      jointDef.enableLimit = true;
      jointDef.maxMotorTorque = 10.0f;
      jointDef.motorSpeed = 0.0f;
      jointDef.enableMotor = true;

   You can access a revolute joint's angle, speed, and motor torque.

   .. code::cpp

      float b2RevoluteJoint::GetJointAngle() const;
      float b2RevoluteJoint::GetJointSpeed() const;
      float b2RevoluteJoint::GetMotorTorque() const;


   You also update the motor parameters each step.

   .. code::cpp

      void b2RevoluteJoint::SetMotorSpeed(float speed);
      void b2RevoluteJoint::SetMaxMotorTorque(float torque);


   Joint motors have some interesting abilities. You can update the joint
   speed every time step so you can make the joint move back-and-forth like
   a sine-wave or according to whatever function you want.

   .. code::cpp

      // ... Game Loop Begin ...

      myJoint->SetMotorSpeed(cosf(0.5f * time));

      // ... Game Loop End ...


   You can also use joint motors to track a desired joint angle. For example:

   .. code::cpp

      // ... Game Loop Begin ...

      float angleError = myJoint->GetJointAngle() - angleTarget;
      float gain = 0.1f;
      myJoint->SetMotorSpeed(-gain * angleError);

      // ... Game Loop End ...


   Generally your gain parameter should not be too large. Otherwise your
   joint may become unstable.


Prismatic Joint

   A prismatic joint allows for relative translation of two bodies along a
   specified axis. A prismatic joint prevents relative rotation. Therefore,
   a prismatic joint has a single degree of freedom.

   .. figure:: https://box2d.org/documentation/prismatic_joint.gif

      ![Prismatic Joint](images/prismatic_joint.gif)

   The prismatic joint definition is similar to the revolute joint
   description; just substitute translation for angle and force for torque.
   Using this analogy provides an example prismatic joint definition with a
   joint limit and a friction motor:

   .. code::cpp

      b2PrismaticJointDef jointDef;
      b2Vec2 worldAxis(1.0f, 0.0f);
      jointDef.Initialize(myBodyA, myBodyB, myBodyA->GetWorldCenter(), worldAxis);
      jointDef.lowerTranslation = -5.0f;
      jointDef.upperTranslation = 2.5f;
      jointDef.enableLimit = true;
      jointDef.maxMotorForce = 1.0f;
      jointDef.motorSpeed = 0.0f;
      jointDef.enableMotor = true;


   The revolute joint has an implicit axis coming out of the screen. The
   prismatic joint needs an explicit axis parallel to the screen. This axis
   is fixed in the two bodies and follows their motion.

   Like the revolute joint, the prismatic joint translation is zero when
   the joint is created using ``Initialize()``. So be sure zero is between your
   lower and upper translation limits.

   Using a prismatic joint is similar to using a revolute joint. Here are
   the relevant member functions:

   .. code::cpp

      float PrismaticJoint::GetJointTranslation() const;
      float PrismaticJoint::GetJointSpeed() const;
      float PrismaticJoint::GetMotorForce() const;
      void PrismaticJoint::SetMotorSpeed(float speed);
      void PrismaticJoint::SetMotorForce(float force);



Pulley Joint

   A pulley is used to create an idealized pulley. The pulley connects two
   bodies to ground and to each other. As one body goes up, the other goes
   down. The total length of the pulley rope is conserved according to the
   initial configuration.


   length1 + length2 == constant


   You can supply a ratio that simulates a block and tackle. This causes
   one side of the pulley to extend faster than the other. At the same time
   the constraint force is smaller on one side than the other. You can use
   this to create mechanical leverage.


   length1 + ratio * length2 == constant


   For example, if the ratio is 2, then length1 will vary at twice the rate
   of length2. Also the force in the rope attached to body1 will have half
   the constraint force as the rope attached to body2.

   .. figure:: https://box2d.org/documentation/pulley_joint.gif

      Pulley Joint

   Pulleys can be troublesome when one side is fully extended. The rope on
   the other side will have zero length. At this point the constraint
   equations become singular (bad). You should configure collision shapes
   to prevent this.

   Here is an example pulley definition:

   .. code::cpp

      b2Vec2 anchor1 = myBody1->GetWorldCenter();
      b2Vec2 anchor2 = myBody2->GetWorldCenter();

      b2Vec2 groundAnchor1(p1.x, p1.y + 10.0f);
      b2Vec2 groundAnchor2(p2.x, p2.y + 12.0f);

      float ratio = 1.0f;

      b2PulleyJointDef jointDef;
      jointDef.Initialize(myBody1, myBody2, groundAnchor1, groundAnchor2, 
                          anchor1, anchor2, ratio);


   Pulley joints provide the current lengths.

   .. code::cpp

      float PulleyJoint::GetLengthA() const;
      float PulleyJoint::GetLengthB() const;



Gear Joint

   If you want to create a sophisticated mechanical contraption you might
   want to use gears. In principle you can create gears in Box2D by using
   compound shapes to model gear teeth. This is not very efficient and
   might be tedious to author. You also have to be careful to line up the
   gears so the teeth mesh smoothly. Box2D has a simpler method of creating
   gears: the gear joint.

   .. figure:: https://box2d.org/documentation/gear_joint.gif

      ![Gear Joint](images/gear_joint.gif)

   The gear joint can only connect revolute and/or prismatic joints.

   Like the pulley ratio, you can specify a gear ratio. However, in this
   case the gear ratio can be negative. Also keep in mind that when one
   joint is a revolute joint (angular) and the other joint is prismatic
   (translation), and then the gear ratio will have units of length or one
   over length.


   coordinate1 + ratio * coordinate2 == constant


   Here is an example gear joint. The bodies ``myBodyA`` and ``myBodyB`` are any
   bodies from the two joints, as long as they are not the same bodies.

   .. code::cpp

      b2GearJointDef jointDef;
      jointDef.bodyA = myBodyA;
      jointDef.bodyB = myBodyB;
      jointDef.joint1 = myRevoluteJoint;
      jointDef.joint2 = myPrismaticJoint;
      jointDef.ratio = 2.0f * b2_pi / myLength;


   Note that the gear joint depends on two other joints. This creates a
   fragile situation. What happens if those joints are deleted?

   .. Caution::

      **Caution**:
      Always delete gear joints before the revolute/prismatic joints on the
      gears. Otherwise your code will crash in a bad way due to the orphaned
      joint pointers in the gear joint. You should also delete the gear joint
      before you delete any of the bodies involved.


Mouse Joint

   The mouse joint is used in the testbed to manipulate bodies with the
   mouse. It attempts to drive a point on a body towards the current
   position of the cursor. There is no restriction on rotation.

   The mouse joint definition has a target point, maximum force, frequency,
   and damping ratio. The target point initially coincides with the body's
   anchor point. The maximum force is used to prevent violent reactions
   when multiple dynamic bodies interact. You can make this as large as you
   like. The frequency and damping ratio are used to create a spring/damper
   effect similar to the distance joint.

   Many users have tried to adapt the mouse joint for game play. Users
   often want to achieve precise positioning and instantaneous response.
   The mouse joint doesn't work very well in that context. You may wish to
   consider using kinematic bodies instead.


Wheel Joint

   The wheel joint restricts a point on ``myBodyB`` to a line on ``myBodyA``. 
   The wheel joint also provides a suspension spring. See ``b2WheelJoint.h`` 
   and ``Car.h`` for details.

   .. figure:: https://box2d.org/documentation/wheel_joint.svg

      ![Wheel Joint](images/wheel_joint.svg)


Weld Joint

   The weld joint attempts to constrain all relative motion between two
   bodies. See the ``Cantilever.h`` in the testbed to see how the weld joint
   behaves.

   It is tempting to use the weld joint to define breakable structures.
   However, the Box2D solver is iterative so the joints are a bit soft. So
   chains of bodies connected by weld joints will flex.

   Instead it is better to create breakable bodies starting with a single
   body with multiple fixtures. When the body breaks, you can destroy a
   fixture and recreate it on a new body. See the Breakable example in the
   testbed.


Friction Joint

   The friction joint is used for top-down friction. The joint provides 2D
   translational friction and angular friction. See ``b2FrictionJoint.h`` and
   ``apply_force.cpp`` for details.


Motor Joint

   A motor joint lets you control the motion of a body by specifying target
   position and rotation offsets. You can set the maximum motor force and
   torque that will be applied to reach the target position and rotation.
   If the body is blocked, it will stop and the contact forces will be
   proportional the maximum motor force and torque. See ``b2MotorJoint`` and
   ``motor_joint.cpp`` for details.


Wheel Joint

   The wheel joint is designed specifically for vehicles. It provides a translation
   and rotation. The translation has a spring and damper to simulate the vehicle
   suspension. The rotation allows the wheel to rotate. You can specify an rotational
   motor to drive the wheel and to apply braking. See ``b2WheelJoint``, ``wheel_joint.cpp``,
   and ``car.cpp`` for details.


Contacts
--------

   Contacts are objects created by Box2D to manage collision between two
   fixtures. If the fixture has children, such as a chain shape, then a
   contact exists for each relevant child. There are different kinds of
   contacts, derived from ``b2Contact``, for managing contact between different
   kinds of fixtures. For example there is a contact class for managing
   polygon-polygon collision and another contact class for managing
   circle-circle collision.

   Here is some terminology associated with contacts.


contact point

   A contact point is a point where two shapes touch. Box2D approximates
   contact with a small number of points.


contact normal

   A contact normal is a unit vector that points from one shape to another.
   By convention, the normal points from ``fixtureA`` to ``fixtureB``.


contact separation

   Separation is the opposite of penetration. Separation is negative when
   shapes overlap. It is possible that future versions of Box2D will create
   contact points with positive separation, so you may want to check the
   sign when contact points are reported.


contact manifold

   Contact between two convex polygons may generate up to 2 contact points.
   Both of these points use the same normal, so they are grouped into a
   contact manifold, which is an approximation of a continuous region of
   contact.


normal impulse

   The normal force is the force applied at a contact point to prevent the
   shapes from penetrating. For convenience, Box2D works with impulses. The
   normal impulse is just the normal force multiplied by the time step.


tangent impulse

   The tangent force is generated at a contact point to simulate friction.
   For convenience, this is stored as an impulse.


contact ids

   Box2D tries to re-use the contact force results from a time step as the
   initial guess for the next time step. Box2D uses contact ids to match
   contact points across time steps. The ids contain geometric features
   indices that help to distinguish one contact point from another.

   Contacts are created when two fixture's AABBs overlap. Sometimes
   collision filtering will prevent the creation of contacts. Contacts are
   destroyed with the AABBs cease to overlap.

   So you might gather that there may be contacts created for fixtures that
   are not touching (just their AABBs). Well, this is correct. It's a
   "chicken or egg" problem. We don't know if we need a contact object
   until one is created to analyze the collision. We could delete the
   contact right away if the shapes are not touching, or we can just wait
   until the AABBs stop overlapping. Box2D takes the latter approach
   because it lets the system cache information to improve performance.


Contact Class

   As mentioned before, the contact class is created and destroyed by
   Box2D. Contact objects are not created by the user. However, you are
   able to access the contact class and interact with it.

   You can access the raw contact manifold:

   .. code::cpp

      b2Manifold* b2Contact::GetManifold();
      const b2Manifold* b2Contact::GetManifold() const;


   You can potentially modify the manifold, but this is generally not
   supported and is for advanced usage.

   There is a helper function to get the `b2WorldManifold`:

   .. code::cpp

      void b2Contact::GetWorldManifold(b2WorldManifold* worldManifold) const;


   This uses the current positions of the bodies to compute world positions
   of the contact points.

   Sensors do not create manifolds, so for them use:

   .. code::cpp

      bool touching = sensorContact->IsTouching();


   This function also works for non-sensors.

   You can get the fixtures from a contact. From those you can get the
   bodies.

   .. code::cpp

      b2Fixture* fixtureA = myContact->GetFixtureA();
      b2Body* bodyA = fixtureA->GetBody();
      MyActor* actorA = (MyActor*)bodyA->GetUserData().pointer;


   You can disable a contact. This only works inside the
   ``b2ContactListener::PreSolve`` event, discussed below.


Accessing Contacts

   You can get access to contacts in several ways. You can access the
   contacts directly on the world and body structures. You can also
   implement a contact listener.

   You can iterate over all contacts in the world:

   .. code::cpp

      for (b2Contact* c = myWorld->GetContactList(); c; c = c->GetNext())
      {
         // process c
      }


   You can also iterate over all the contacts on a body. These are stored
   in a graph using a contact edge structure.

   .. code::cpp

      for (b2ContactEdge* ce = myBody->GetContactList(); ce; ce = ce->next)
      {
         b2Contact* c = ce->contact;
         // process c
      }


   You can also access contacts using the contact listener that is
   described below.

   .. Caution::

      **Caution**:
      Accessing contacts off ``b2World`` and ``b2Body`` may miss some transient
      contacts that occur in the middle of the time step. Use
      ``b2ContactListener`` to get the most accurate results.


Contact Listener

   You can receive contact data by implementing ``b2ContactListener``. The
   contact listener supports several events: begin, end, pre-solve, and
   post-solve.

   .. code::cpp

      class MyContactListener : public b2ContactListener
      {
      public:

      void BeginContact(b2Contact* contact)
         { /* handle begin event */ }

      void EndContact(b2Contact* contact)
         { /* handle end event */ }

      void PreSolve(b2Contact* contact, const b2Manifold* oldManifold)
         { /* handle pre-solve event */ }

      void PostSolve(b2Contact* contact, const b2ContactImpulse* impulse)
         { /* handle post-solve event */ }
      };

   .. Caution::

      **Caution**:
      Do not keep a reference to the pointers sent to ``b2ContactListener``.
      Instead make a deep copy of the contact point data into your own buffer.
      The example below shows one way of doing this.

   At run-time you can create an instance of the listener and register it with 
   ``b2World::SetContactListener``. Be sure your listener remains in scope
   while the world object exists.


Begin Contact Event

   This is called when two fixtures begin to overlap. This is called for
   sensors and non-sensors. This event can only occur inside the time step.


End Contact Event

   This is called when two fixtures cease to overlap. This is called for
   sensors and non-sensors. This may be called when a body is destroyed, so
   this event can occur outside the time step.


Pre-Solve Event

   This is called after collision detection, but before collision
   resolution. This gives you a chance to disable the contact based on the
   current configuration. For example, you can implement a one-sided
   platform using this callback and calling ``b2Contact::SetEnabled(false)``.
   The contact will be re-enabled each time through collision processing,
   so you will need to disable the contact every time-step. The pre-solve
   event may be fired multiple times per time step per contact due to
   continuous collision detection.

   .. code::cpp

      void PreSolve(b2Contact* contact, const b2Manifold* oldManifold)
      {
         b2WorldManifold worldManifold;
         contact->GetWorldManifold(&worldManifold);
         if (worldManifold.normal.y < -0.5f)
         {
            contact->SetEnabled(false);
         }
      }


   The pre-solve event is also a good place to determine the point state
   and the approach velocity of collisions.

   .. code::cpp

      void PreSolve(b2Contact* contact, const b2Manifold* oldManifold)
      {
         b2WorldManifold worldManifold;
         contact->GetWorldManifold(&worldManifold);

         b2PointState state1[2], state2[2];
         b2GetPointStates(state1, state2, oldManifold, contact->GetManifold());

         if (state2[0] == b2_addState)
         {
            const b2Body* bodyA = contact->GetFixtureA()->GetBody();
            const b2Body* bodyB = contact->GetFixtureB()->GetBody();
            b2Vec2 point = worldManifold.points[0];
            b2Vec2 vA = bodyA->GetLinearVelocityFromWorldPoint(point);
            b2Vec2 vB = bodyB->GetLinearVelocityFromWorldPoint(point);

            float approachVelocity = b2Dot(vB -- vA, worldManifold.normal);

            if (approachVelocity > 1.0f)
            {
                  MyPlayCollisionSound();
            }
         }
      }



Post-Solve Event

   The post solve event is where you can gather collision impulse results.
   If you don't care about the impulses, you should probably just implement
   the pre-solve event.

   It is tempting to implement game logic that alters the physics world
   inside a contact callback. For example, you may have a collision that
   applies damage and try to destroy the associated actor and its rigid
   body. However, Box2D does not allow you to alter the physics world
   inside a callback because you might destroy objects that Box2D is
   currently processing, leading to orphaned pointers.

   The recommended practice for processing contact points is to buffer all
   contact data that you care about and process it after the time step. You
   should always process the contact points immediately after the time
   step; otherwise some other client code might alter the physics world,
   invalidating the contact buffer. When you process the contact buffer you
   can alter the physics world, but you still need to be careful that you
   don't orphan pointers stored in the contact point buffer. The testbed
   has example contact point processing that is safe from orphaned
   pointers.

   This code from the CollisionProcessing test shows how to handle orphaned
   bodies when processing the contact buffer. Here is an excerpt. Be sure
   to read the comments in the listing. This code assumes that all contact
   points have been buffered in the b2ContactPoint array ``m_points``.

   .. code::cpp

      // We are going to destroy some bodies according to contact
      // points. We must buffer the bodies that should be destroyed
      // because they may belong to multiple contact points.
      const int32 k_maxNuke = 6;
      b2Body* nuke[k_maxNuke];
      int32 nukeCount = 0;

      // Traverse the contact buffer. Destroy bodies that
      // are touching heavier bodies.
      for (int32 i = 0; i < m_pointCount; ++i)
      {
         ContactPoint* point = m_points + i;
         b2Body* bodyA = point->fixtureA->GetBody();
         b2Body* bodyB = point->FixtureB->GetBody();
         float massA = bodyA->GetMass();
         float massB = bodyB->GetMass();

         if (massA > 0.0f && massB > 0.0f)
         {
            if (massB > massA)
            {
                  nuke[nukeCount++] = bodyA;
            }
            else
            {
                  nuke[nukeCount++] = bodyB;
            }

            if (nukeCount == k_maxNuke)
            {
                  break;
            }
         }
      }

      // Sort the nuke array to group duplicates.
      std::sort(nuke, nuke + nukeCount);

      // Destroy the bodies, skipping duplicates.
      int32 i = 0;
      while (i < nukeCount)
      {
         b2Body* b = nuke[i++];
         while (i < nukeCount && nuke[i] == b)
         {
            ++i;
         }

         m_world->DestroyBody(b);
      }



Contact Filtering

   Often in a game you don't want all objects to collide. For example, you
   may want to create a door that only certain characters can pass through.
   This is called contact filtering, because some interactions are filtered
   out.

   Box2D allows you to achieve custom contact filtering by implementing a
   ``b2ContactFilter`` class. This class requires you to implement a
   ``ShouldCollide`` function that receives two ``b2Shape`` pointers. Your 
   function returns true if the shapes should collide.

   The default implementation of ``ShouldCollide`` uses the ``b2FilterData``
   defined in Chapter 6, Fixtures.

   .. code::cpp

      bool b2ContactFilter::ShouldCollide(b2Fixture* fixtureA, b2Fixture* fixtureB)
      {
         const b2Filter& filterA = fixtureA->GetFilterData();
         const b2Filter& filterB = fixtureB->GetFilterData();

         if (filterA.groupIndex == filterB.groupIndex && filterA.groupIndex != 0)
         {
            return filterA.groupIndex > 0;
         }

         bool collideA = (filterA.maskBits & filterB.categoryBits) != 0;
         bool collideB = (filterA.categoryBits & filterB.maskBits) != 0
         bool collide =  collideA && collideB;
         return collide;
      }


   At run-time you can create an instance of your contact filter and
   register it with ``b2World::SetContactFilter``. Make sure your filter stays
   in scope while the world exists.

   .. code::cpp

      MyContactFilter filter;
      world->SetContactFilter(&filter);
      // filter remains in scope ...



World
-----

   The `b2World` class contains the bodies and joints. It manages all aspects
   of the simulation and allows for asynchronous queries (like AABB queries
   and ray-casts). Much of your interactions with Box2D will be with a
   ``b2World`` object.


Creating and Destroying a World

   Creating a world is fairly simple. You just need to provide a gravity
   vector and a Boolean indicating if bodies can sleep. Usually you will
   create and destroy a world using new and delete.

   .. code::cpp

      b2World* myWorld = new b2World(gravity, doSleep);

      // ... do stuff ...

      delete myWorld;



Using a World

   The world class contains factories for creating and destroying bodies
   and joints. These factories are discussed later in the sections on
   bodies and joints. There are some other interactions with ``b2World`` that I
   will cover now.


Simulation

   The world class is used to drive the simulation. You specify a time step
   and a velocity and position iteration count. For example:

   .. code::cpp

      float timeStep = 1.0f / 60.f;
      int32 velocityIterations = 10;
      int32 positionIterations = 8;
      myWorld->Step(timeStep, velocityIterations, positionIterations);


   After the time step you can examine your bodies and joints for
   information. Most likely you will grab the position off the bodies so
   that you can update your actors and render them. You can perform the
   time step anywhere in your game loop, but you should be aware of the
   order of things. For example, you must create bodies before the time
   step if you want to get collision results for the new bodies in that
   frame.

   As I discussed above in the HelloWorld tutorial, you should use a fixed
   time step. By using a larger time step you can improve performance in
   low frame rate scenarios. But generally you should use a time step no
   larger than 1/30 seconds. A time step of 1/60 seconds will usually
   deliver a high quality simulation.

   The iteration count controls how many times the constraint solver sweeps
   over all the contacts and joints in the world. More iteration always
   yields a better simulation. But don't trade a small time step for a
   large iteration count. 60Hz and 10 iterations is far better than 30Hz
   and 20 iterations.

   After stepping, you should clear any forces you have applied to your
   bodies. This is done with the command `b2World::ClearForces`. This lets
   you take multiple sub-steps with the same force field.

   .. code::cpp

      myWorld->ClearForces();



Exploring the World

   The world is a container for bodies, contacts, and joints. You can grab
   the body, contact, and joint lists off the world and iterate over them.
   For example, this code wakes up all the bodies in the world:

   .. code::cpp

      for (b2Body* b = myWorld->GetBodyList(); b; b = b->GetNext())
      {
         b->SetAwake(true);
      }


   Unfortunately real programs can be more complicated. For example, the
   following code is broken:

   .. code::cpp

      for (b2Body* b = myWorld->GetBodyList(); b; b = b->GetNext())
      {
         GameActor* myActor = (GameActor*)b->GetUserData().pointer;
         if (myActor->IsDead())
         {
            myWorld->DestroyBody(b); // ERROR: now GetNext returns garbage.
         }
      }


   Everything goes ok until a body is destroyed. Once a body is destroyed,
   its next pointer becomes invalid. So the call to `b2Body::GetNext()` will
   return garbage. The solution to this is to copy the next pointer before
   destroying the body.

   .. code::cpp

      b2Body* node = myWorld->GetBodyList();
      while (node)
      {
         b2Body* b = node;
         node = node->GetNext();
         
         GameActor* myActor = (GameActor*)b->GetUserData().pointer;
         if (myActor->IsDead())
         {
            myWorld->DestroyBody(b);
         }
      }


   This safely destroys the current body. However, you may want to call a
   game function that may destroy multiple bodies. In this case you need to
   be very careful. The solution is application specific, but for
   convenience I'll show one method of solving the problem.

   .. code::cpp

      b2Body* node = myWorld->GetBodyList();
      while (node)
      {
         b2Body* b = node;
         node = node->GetNext();

         GameActor* myActor = (GameActor*)b->GetUserData().pointer;
         if (myActor->IsDead())
         {
            bool otherBodiesDestroyed = GameCrazyBodyDestroyer(b);
            if (otherBodiesDestroyed)
            {
                  node = myWorld->GetBodyList();
            }
         }
      }


   Obviously to make this work, ``GameCrazyBodyDestroyer`` must be honest about
   what it has destroyed.


AABB Queries

   Sometimes you want to determine all the shapes in a region. The b2World
   class has a fast ``log(N)`` method for this using the broad-phase data
   structure. You provide an AABB in world coordinates and an
   implementation of ``b2QueryCallback``. The world calls your class with each
   fixture whose AABB overlaps the query AABB. Return true to continue the
   query, otherwise return false. For example, the following code finds all
   the fixtures that potentially intersect a specified AABB and wakes up
   all of the associated bodies.

   .. code::cpp

      class MyQueryCallback : public b2QueryCallback
      {
      public:
         bool ReportFixture(b2Fixture* fixture)
         {
            b2Body* body = fixture->GetBody();
            body->SetAwake(true);

            // Return true to continue the query.
            return true;
         }
      };

      // Elsewhere ...
      MyQueryCallback callback;
      b2AABB aabb;

      aabb.lowerBound.Set(-1.0f, -1.0f);
      aabb.upperBound.Set(1.0f, 1.0f);
      myWorld->Query(&callback, aabb);


   You cannot make any assumptions about the order of the callbacks.


Ray Casts

   You can use ray casts to do line-of-sight checks, fire guns, etc. You
   perform a ray cast by implementing a callback class and providing the
   start and end points. The world class calls your class with each fixture
   hit by the ray. Your callback is provided with the fixture, the point of
   intersection, the unit normal vector, and the fractional distance along
   the ray. You cannot make any assumptions about the order of the
   callbacks.

   You control the continuation of the ray cast by returning a fraction.
   Returning a fraction of zero indicates the ray cast should be
   terminated. A fraction of one indicates the ray cast should continue as
   if no hit occurred. If you return the fraction from the argument list,
   the ray will be clipped to the current intersection point. So you can
   ray cast any shape, ray cast all shapes, or ray cast the closest shape
   by returning the appropriate fraction.

   You may also return of fraction of -1 to filter the fixture. Then the
   ray cast will proceed as if the fixture does not exist.

   Here is an example:

   .. code::cpp

      // This class captures the closest hit shape.
      class MyRayCastCallback : public b2RayCastCallback
      {
      public:
         MyRayCastCallback()
         {
            m_fixture = NULL;
         }

         float ReportFixture(b2Fixture* fixture, const b2Vec2& point,
                              const b2Vec2& normal, float fraction)
         {
            m_fixture = fixture;
            m_point = point;
            m_normal = normal;
            m_fraction = fraction;
            return fraction;
         }

         b2Fixture* m_fixture;
         b2Vec2 m_point;
         b2Vec2 m_normal;
         float m_fraction;
      };

      // Elsewhere ...
      MyRayCastCallback callback;
      b2Vec2 point1(-1.0f, 0.0f);
      b2Vec2 point2(3.0f, 1.0f);
      myWorld->RayCast(&callback, point1, point2);

   .. Caution::

      **Caution**:
      Due to round-off errors, ray casts can sneak through small cracks
      between polygons in your static environment. If this is not acceptable
      in your application, trying slightly overlapping your polygons.


👊 Loose Ends
=============

User Data

   The `b2Fixture`, `b2Body`, and `b2Joint` classes allow you to attach user data
   as a ``uintptr_t``. This is handy when you are examining Box2D data
   structures and you want to determine how they relate to the objects in
   your game engine.

   For example, it is typical to attach an actor pointer to the rigid body
   on that actor. This sets up a circular reference. If you have the actor,
   you can get the body. If you have the body, you can get the actor.

   .. code::cpp

      GameActor* actor = GameCreateActor();
      b2BodyDef bodyDef;
      bodyDef.userData.pointer = reinterpret_cast<uintptr_t>(actor);
      actor->body = myWorld->CreateBody(&bodyDef);

   You can also use this to hold an integral value rather than a pointer.

   Here are some examples of cases where you would need the user data:

   -  Applying damage to an actor using a collision result.
   -  Playing a scripted event if the player is inside an axis-aligned box.
   -  Accessing a game structure when Box2D notifies you that a joint is
      going to be destroyed.

   Keep in mind that user data is optional and you can put anything in it.
   However, you should be consistent. For example, if you want to store an
   actor pointer on one body, you should keep an actor pointer on all
   bodies. Don't store an actor pointer on one body, and a foo pointer on
   another body. Casting an actor pointer to a foo pointer may lead to a
   crash.

   User data pointers are 0 by default.

   For fixtures you might consider defining a user data structure that lets
   you store game specific information, such as material type, effects
   hooks, sound hooks, etc.

   .. code::cpp

      struct FixtureUserData
      {
         int materialIndex;
         // ...
      };

      FixtureUserData myData = new FixtureUserData;
      myData->materialIndex = 2;

      b2FixtureDef fixtureDef;
      fixtureDef.shape = &someShape;
      fixtureDef.userData.pointer = reinterpret_cast<uintptr_t>(myData);

      b2Fixture* fixture = body->CreateFixture(&fixtureDef);
      // ...

      delete fixture->GetUserData();
      body->DestroyFixture(fixture);


Custom User Data

   You can define custom data structures that are embedded in the Box2D data
   structures. This is done by defining `B2_USER_SETTINGS` and providing the
   file `b2_user_settings.h`. See `b2_settings.h` for details.


Implicit Destruction

   Box2D doesn't use reference counting. So if you destroy a body it is
   really gone. Accessing a pointer to a destroyed body has undefined
   behavior. In other words, your program will likely crash and burn. To
   help fix these problems, the debug build memory manager fills destroyed
   entities with FDFDFDFD. This can help find problems more easily in some
   cases.

   If you destroy a Box2D entity, it is up to you to make sure you remove
   all references to the destroyed object. This is easy if you only have a
   single reference to the entity. If you have multiple references, you
   might consider implementing a handle class to wrap the raw pointer.

   Often when using Box2D you will create and destroy many bodies, shapes,
   and joints. Managing these entities is somewhat automated by Box2D. If
   you destroy a body then all associated shapes and joints are
   automatically destroyed. This is called implicit destruction.

   When you destroy a body, all its attached shapes, joints, and contacts
   are destroyed. This is called implicit destruction. Any body connected
   to one of those joints and/or contacts is woken. This process is usually
   convenient. However, you must be aware of one crucial issue:

   .. Caution::

      **Caution**:
      When a body is destroyed, all fixtures and joints attached to the body
      are automatically destroyed. You must nullify any pointers you have to
      those shapes and joints. Otherwise, your program will die horribly if
      you try to access or destroy those shapes or joints later.

   To help you nullify your joint pointers, Box2D provides a listener class
   named ``b2DestructionListener`` that you can implement and provide to your
   world object. Then the world object will notify you when a joint is
   going to be implicitly destroyed

   Note that there no notification when a joint or fixture is explicitly
   destroyed. In this case ownership is clear and you can perform the
   necessary cleanup on the spot. If you like, you can call your own
   implementation of ``b2DestructionListener`` to keep cleanup code
   centralized.

   Implicit destruction is a great convenience in many cases. It can also
   make your program fall apart. You may store pointers to shapes and
   joints somewhere in your code. These pointers become orphaned when an
   associated body is destroyed. The situation becomes worse when you
   consider that joints are often created by a part of the code unrelated
   to management of the associated body. For example, the testbed creates a
   b2MouseJoint for interactive manipulation of bodies on the screen.

   Box2D provides a callback mechanism to inform your application when
   implicit destruction occurs. This gives your application a chance to
   nullify the orphaned pointers. This callback mechanism is described
   later in this manual.

   You can implement a ``b2DestructionListener`` that allows b2World to inform
   you when a shape or joint is implicitly destroyed because an associated
   body was destroyed. This will help prevent your code from accessing
   orphaned pointers.

   .. code::cpp

      class MyDestructionListener : public b2DestructionListener
      {
         void SayGoodbye(b2Joint* joint)
         {
            // remove all references to joint.
         }
      };

   You can then register an instance of your destruction listener with your
   world object. You should do this during world initialization.

   .. code::cpp

      myWorld->SetListener(myDestructionListener);


Pixels and Coordinate Systems

   Recall that Box2D uses MKS (meters, kilograms, and seconds) units and
   radians for angles. You may have trouble working with meters because
   your game is expressed in terms of pixels. To deal with this in the
   testbed I have the whole *game* work in meters and just use an OpenGL
   viewport transformation to scale the world into screen space.

   .. code::cpp

      float lowerX = -25.0f, upperX = 25.0f, lowerY = -5.0f, upperY = 25.0f;
      gluOrtho2D(lowerX, upperX, lowerY, upperY);

   If your game must work in pixel units then you should convert your
   length units from pixels to meters when passing values from Box2D.
   Likewise you should convert the values received from Box2D from meters
   to pixels. This will improve the stability of the physics simulation.

   You have to come up with a reasonable conversion factor. I suggest
   making this choice based on the size of your characters. Suppose you
   have determined to use 50 pixels per meter (because your character is 75
   pixels tall). Then you can convert from pixels to meters using these
   formulas:

   .. code::cpp

      xMeters = 0.02f * xPixels;
      yMeters = 0.02f * yPixels;

   In reverse:

   .. code::cpp

      xPixels = 50.0f * xMeters;
      yPixels = 50.0f * yMeters;

   You should consider using MKS units in your game code and just convert
   to pixels when you render. This will simplify your game logic and reduce
   the chance for errors since the rendering conversion can be isolated to
   a small amount of code.

   If you use a conversion factor, you should try tweaking it globally to
   make sure nothing breaks. You can also try adjusting it to improve
   stability.


Debug Drawing

   You can implement the ``b2DebugDraw`` class to get detailed drawing of the
   physics world. Here are the available entities:

   - shape outlines
   - joint connectivity
   - broad-phase axis-aligned bounding boxes (AABBs)
   - center of mass

   .. figure:: https://box2d.org/documentation/debug_draw.png

      ![Debug Draw](images/debug_draw.png)

   This is the preferred method of drawing these physics entities, rather
   than accessing the data directly. The reason is that much of the
   necessary data is internal and subject to change.

   The testbed draws physics entities using the debug draw facility and the
   contact listener, so it serves as the primary example of how to
   implement debug drawing as well as how to draw contact points.


Limitations

   Box2D uses several approximations to simulate rigid body physics
   efficiently. This brings some limitations.

   Here are the current limitations:

   1. Stacking heavy bodies on top of much lighter bodies is not stable. 
      Stability degrades as the mass ratio passes 10:1.
   2. Chains of bodies connected by joints may stretch if a lighter body is 
      supporting a heavier body. For example, a wrecking ball connect to a 
      chain of light weight bodies may not be stable. Stability degrades as 
      the mass ratio passes 10:1.
   3. There is typically around 0.5cm of slop in shape versus shape collision.
   4. Continuous collision does not handle joints. So you may see joint 
      stretching on fast moving objects.
   5. Box2D uses the symplectic Euler integration scheme. It does not reproduce 
      parabolic motion of projectiles and has only first-order accuracy. However 
      it is fast and has good stability.
   6. Box2D uses an iterative solver to provide real-time performance. 
      You will not get precisely rigid collisions or pixel perfect accuracy. 
      Increasing the iterations will improve accuracy.


👊 References
=============

- `Erin Catto's Publications <https://box2d.org/publications/>`__
- Collision Detection in Interactive 3D Environments, Gino van den Bergen, 2004
- Real-Time Collision Detection, Christer Ericson, 2005


👊 FAQ
======

What is Box2D?

   Box2D is a feature rich 2D rigid body physics engine, written in C++ by 
   Erin Catto. It has been used in many games, including Crayon Physics Deluxe, 
   winner of the 2008 Independant Game Festival Grand Prize.

   Box2D uses the `MIT license <https://en.wikipedia.org/wiki/MIT_License>`__
   license and can be used free of charge.


What platforms does Box2D support?

   Box2D is developed on Windows using Visual C++. Ports are also available 
   for Flash, Java, C#, Python.

   Erin Catto maintains the C++ version, but provides no support for other 
   languages. Other languages are supported by the community and possibly 
   by the authors of those ports.


Who makes it?

   Erin Catto is the driving force behind Box2D, with various others supporting 
   the ports. Box2D is an open source project, and accepts community feedback.


How do I get help?

   You should read the documentation and the rest of this FAQ first. Also, 
   you should study the examples included in the source distribution. Then 
   you can visit the `subreddit <https://www.reddit.com/r/box2d/>`__ to ask
   any remaining questions.

   Please to not PM or email Erin Catto for support. It is best to ask 
   questions in the forum so that everyone can benefit from the discussion.


Documentation
-------------

Why isn't feature foo documented?

   If you grab the latest code from the git master branch you will likely 
   find features that are not documented in the manual. New features are 
   added to the manual after they are mature and a new point release is 
   imminent. However, all major features added to Box2D are accompanied by 
   example code in the testbed to test the feature and show the intended usage.


Prerequisites
-------------

Programming

   You should have a working knowledge of C++ before you use Box2D. You 
   should understand classes, inheritance, and pointers. There are plenty 
   of resources on the web for learning C++. You should also understand 
   your development environment: compilation, linking, and debugging.


Math and Physics

   You should have a basic knowledge of rigid bodies, force, torque, and 
   impulses. If you come across a math or physics concept you don't 
   understand, please read about it on Wikipedia. Visit this `page <http://box2d.org/publications/>`__
   if you want a deeper knowledge of the algorithms used in Box2D.


API
---

What units does Box2D use?

   Box2D is tuned for meters-kilograms-seconds (MKS). Your moving objects 
   should be between 0.1 - 10 meters. Do not use pixels as units! You will 
   get a jittery simulation.


How do I convert pixels to meters?

   Suppose you have a sprite for a character that is 100x100 pixels. You 
   decide to use a scaling factor that is 0.01. This will make the character 
   physics box 1m x 1m. So go make a physics box that is 1x1. Now suppose 
   the character starts out at pixel coordinate (345,679). So position the 
   physics box at (3.45,6.79). Now simulate the physics world. Suppose the 
   character physics box moves to (2.31,4.98), so move your character sprite 
   to pixel coordinates (231,498).

   Now the only tricky part is choosing a scaling factor. This really depends 
   on your game. You should try to get your moving objects in the range 0.1 - 10 
   meters, with 1 meter being the sweet spot.


Why don't you use this awesome C++ feature?

   Box2D is designed to be portable, so I try to keep the C++ usage simple. 
   Also, I don't use the STL (except sort) or other libraries to keep the 
   dependencies low. I keep template usage low and don't use name spaces. 
   Remember, just because a C++ feature exists, that doesn't mean you need 
   to use it.

   The many ports of Box2D to other languages platforms shows that this 
   strategy has been successful.


Can I use Box2D in a DLL?

   Box2D was not designed to be used in a DLL. You may have to change how 
   static data is used to make this work.


Is Box2D thread-safe?

   No. Box2D will likely never be thread-safe. Box2D has a large API and 
   trying to make such an API thread-safe would have a large performance 
   and complexity impact.


Build Issues
------------

Why doesn't my code compile and/or link?

   There are many reasons why a build can go bad. Here are a few that have come up:

   * Using old Box2D headers with new code
   * Not linking the Box2D library with your application
   * Using old project files that don't include some new source files


Rendering
---------

What are Box2D's rendering capabilities?

   Box2D is only a physics engine. How you draw stuff is up to you.


But the Testbed draws stuff

   Visualization is very important for debugging collision and physics. 
   I wrote the test bed to help me test Box2D and give you examples of how to use Box2D. The TestBed is not part of the Box2D library.


How do I draw shapes?

   Drawing shapes is not supported and shape internal data is likely to change. Instead you should implement the `b2DebugDraw` interface.


Accuracy
--------

   Box2D uses approximate methods for a few reasons.

   * Performance
   * Some differential equations don't have known solutions
   * Some constraints cannot be determined uniquely

   What this means is that constraints are not perfectly rigid and sometimes 
   you will see some bounce even when the restitution is zero.
   Box2D uses Gauss-Seidel to approximately solve constraints.
   Box2D also uses Semi-implicit Euler to approximately solve the differential equations.
   Box2D also does not have exact collision. Polygons are covered with a thin 
   skin (around 0.5cm thick) to avoid numerical problems. This can sometimes 
   lead to unexpected contact normals. Also, some shapes may begin to overlap 
   and then be pushed apart by the solver.

   高斯-赛德尔迭代（Gauss–Seidel method）是数值线性代数中的一个迭代法，可用来求出线性方程组
   解的近似值。该方法以卡尔·弗里德里希·高斯和路德维希·赛德尔命名。 同雅可比法一样，高斯-赛德尔
   迭代是基于矩阵分解原理。


Making Games
------------

Worms Clones

   Making a worms clone requires arbitrarily destructible terrain. This is 
   beyond the scope of Box2D, so you will have to figure out how to do this 
   on your own.


Tile Based Environment

   Using many boxes for your terrain may not work well because box-like 
   characters can get snagged on internal corners. A future update to Box2D 
   should allow for smooth motion over edge chains. In general you should 
   avoid using a rectangular character because collision tolerances will 
   still lead to undesirable snagging.


Asteroid Type Coordinate Systems

   Box2D does not have any support for coordinate frame wrapping. You would 
   likely need to customize Box2D for this purpose. You may need to use a d
   ifferent broad-phase for this to work.


Determinism
-----------

Is Box2D deterministic?

   For the same input, and same binary, Box2D will reproduce any simulation. 
   Box2D does not use any random numbers nor base any computation on random 
   events (such as timers, etc).

   However, people often want more stringent determinism. People often want 
   to know if Box2D can produce identical results on different binaries and 
   on different platforms. The answer is no. The reason for this answer has 
   to do with how floating point math is implemented in many compilers and 
   processors. I recommend reading this article if you are curious: 
   http://www.yosefk.com/blog/consistency-how-to-defeat-the-purpose-of-ieee-floating-point.html


But I really want determinism

   This naturally leads to the question of fixed-point math. Box2D does not 
   support fixed-point math. In the past Box2D was ported to the NDS in 
   fixed-point and apparently it worked okay. Fixed-point math is slower and 
   more tedious to develop, so I have chosen not to use fixed-point for the 
   development of Box2D.


Why is the restitution/friction mixing inaccurate?

   A physically correct restitution value must be measured in experiments. 
   But as soon as you change the geometry from the experiment then the value 
   is wrong. Next, adding simultaneous collision makes the answer worse. 
   We've been down this road before.

   So the question of accuracy has been answered: failure.

   The only remaining question is how do we make it convenient. On this opinions may vary.

   `b2Settings` is just that. Settings you can adjust if you know what you are doing.


What are the biggest mistakes made by new users?

   * Using pixels for length instead of meters.
   * Expecting Box2D to give pixel perfect results.
   * Using b2Polygon to create concave polygons.
   * Testing their code in release mode.
   * Not learning C++ before using Box2D.
   * Not reading this FAQ. :)

