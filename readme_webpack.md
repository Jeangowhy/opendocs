# Webpack Readme
- [Webpack 中文文档](https://github.com/docschina/webpack.js.org)
- [Webpack Documentation](https://github.com/webpack/webpack.js.org)
- [Babel](https://github.com/babel/babel)
- [Babel Documetation](https://github.com/babel/website)
- [Babel Handbook](https://github.com/jamiebuilds/babel-handbook/)

- [Webpack Internal Plugin Relation](https://alienzhou.github.io/webpack-internal-plugin-relation/)
- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

- [2018你成长了么？一份给你的前端技术清单](https://www.jianshu.com/p/23fc6b07b8e2)

- [Wepack 工程打包机](https://webpack.github.io/)
- [Webpack 基本概念](https://webpack.js.org/concepts/)
- [Webpack Demos](https://github.com/ruanyf/webpack-demos)
- [Node.js Debugger](http://www.ruanyifeng.com/blog/2018/03/node-debugger.html)
- [webpack学习实践系列](http://www.imooc.com/article/7221)
- [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server)
- [Webpack loader 十问](https://www.jianshu.com/p/6a08e1b1f2fd)

Webpack 总得来说是一个资源模块化 JS Module 打包工具，它的核心思想是模块化思想，不管你是图片，JS，CSS，SCSS，LESS，还是 JSX/TSX，统统都打包成 JS Module，Anythin to JS Modules。各种资源都有相适配的加载器 Loaders 负责对资源进行处理，Webpack 通过执行加载器完成原始资源的转换。


# 🚩 Hello Webpack
- [TypeScript](https://www.tslang.cn/docs/home.html)
- [TypeScript Samples](https://github.com/Microsoft/TypeScriptSamples)
- [TypeScript Node Starte](https://github.com/Microsoft/TypeScript-Node-Starte)
- [TS-Node](https://www.npmjs.com/package/ts-node)
- [Webpack with TypeScript](https://webpack.js.org/guides/typescript/)
- [Awesome TypeScript Loader](https://www.npmjs.com/package/awesome-typescript-loader)
- [TypeScript loader for webpack](https://www.npmjs.com/package/ts-loader)
- [Babel loader for webpack](https://github.com/babel/babel-loader)
- [Base64 URL Loader](https://www.npmjs.com/package/url-loader)
- [Webpack 资源管理](https://webpack.js.org/guides/asset-management/)
- [TypeScript声明文件 `.d.ts`](https://www.tslang.cn/docs/handbook/declaration-files/introduction.html)
- [Build Performance](https://webpack.js.org/guides/build-performance/#general)


这里同过 TypeScript + Webpack 编写一个 Demo 工程来入门 Webpack 工程化打包机的理念，工程化是必然的软件技术发展方向。TypeScript 作为一个强大的静态类型检查语言是作为工程化开发的理想工具，所以 Node.js + TypeScript + Webpack + 框架的工程结构将会是非常流行的技术栈。TypeScript 现在发布 v3.5.3 版本，官方提供的示例 [TypeScript Node Starte] 是非常值得学习的案例。

## 安装使用

Node.js 命令行的 TypeScript 编译器可以使用 npm 来安装，安装后会有一个 tsc 命令来转译 TypeScript 代码为 JavaScript，也可以安装 ts-node 来直接解析运行。

	npm install --save-dev typescript@3.5.3 ts-node@8.3.0
	tsc helloworld.ts
	ts-node helloworld.ts

使用 VSCode、Sublime Text、Vim 作为开发工具都是很好的选择。

通过 Node.js 环境使用 Webpack，先通过 npm 来进行全局安装，创建示例工程 `webpack-demo` 目录，`npm init` 项目初始化命令生成默认的 `package.json` 配置文件，可以传入默许参数 `--yes` 忽略设置内容，关于它得用法可以查询 `npm help init`。一并安装 `webpack-dev-server` 这个开发用的 Web 服务器，还有 TypeScript 支持。

## 相关模块

Webpack 处理 TypeScript (`.ts`) 原代码文件需要用到 `ts-loader` 或 `awesome-typescript-loader`，前者使用得更多。在代码中导入文件资源时需要 `file-loader`，导入图片时需要 `url-loader`，它可以对常用得图片进行 Base64编码，可以设置 `limit` 选项来限定待编码文件大小。在处理 CSS 样式文件时会用到 `css-loader`，打包后的样式在页面上还原出来时需要`style-loader` 提供的功能，它会在 `<head>` 节点下插入一个 `<style>` 节点，通过写入样式规则来还原经过打包的样式。

由于 TypeScript 静态类型的特殊性，那些非代码资源需要为 TypeScript 提供一个 Type Declaration 类型声明文件 `.d.ts`，在工程原代码目录下保存即可，TypeScript 会自动解析。如编写一个 `.svg` 资源的D类型声明文件：

	// custom.d.ts
	declare module "*.svg" {
	  const content: any;
	  export default content;
	}

这个 SVG 类型声明模块指明，任何以 `.svg` 结尾的文件导入时将拥有一个 any 任意类型属性的 content，即数据部分是任意类型。还可以显式定义 `url` 属性为 string，即文件的地址。 这个De类型声明规则同样适用于 CSS, SCSS, JSON 等等，这是 TypeScript 静态类型系统特有的做法。

TypeScript 相比 JavaScript 增加了类型声明。这些类型声明帮助编译器识别类型，从而防止开发者搬起石头砸自己的脚。

原则上，TypeScript 需要开发者做到先声明后使用。这就导致开发者在调用很多原生接口（浏览器、Node.js）或者第三方模块的时候，因为某些全局变量或者对象的方法并没有声明过，导致编译器的类型检查失败。

用 ts 写的模块在发布的时候仍然是用 js 发布，这就导致一个问题：ts 那么多类型数据都没了，所以需要一个 d.ts 文件来标记某个 js 库里面对象的类型
然后 typings 就是一个网络上的 `.d.ts` 数据库。

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。它通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单的工具类。Lodash 的模块化方法 非常适用于做 array、object 和 string 的遍历操作，对值进行操作和检测，创建符合功能的函数等。

`source-map-loader` 是一个 SourceMap 代码地图工具，可以生成代码地图方便做调式。配置时可以在配置 `devtool` 设置内联 `inline-source-map` 或 `source-map` 方式，前者会将调式代码嵌入打包输出，后者则独立保存为 `.map` 代码地图文件。

	mkdir webpack-demo
	cd webpack-demo
	npm init --yes
	npm install --save-dev webpack@4.1.1 webpack-cli@3.3.6 webpack-dev-server@3.7.2
	npm install --save-dev file-loader@4.0.0 url-loader@2.0.1 ts-loader@6.0.4 css-loader@3.0.0 style-loader@0.23.1
	npm install --save-dev awesome-typescript-loader@5.2.1
	npm install --save-dev lodash@4.17.14 source-map-loader@0.2.4

webpack——devtool里的7种 SourceMap模式

eval	每个module会封装到 eval 里包裹起来执行，并且会在末尾追加注释 //@ sourceURL.
source-map	生成一个SourceMap文件.
hidden-source-map	和 source-map 一样，但不会在 bundle 末尾追加注释.
inline-source-map	生成一个 DataUrl 形式的 SourceMap 文件.
eval-source-map	每个module会通过eval()来执行，并且生成一个DataUrl形式的SourceMap.
cheap-source-map	生成一个没有列信息（column-mappings）的SourceMaps文件，不包含loader的 sourcemap（譬如 babel 的 sourcemap）
cheap-module-source-map	生成一个没有列信息（column-mappings）的SourceMaps文件，同时 loader 的 sourcemap 也被简化为只包含对应行的。

webpack 不仅支持这 7 种，而且它们还是可以任意组合上面的eval、inline、hidden关键字，就如文档所说，你可以设置 souremap 选项为 cheap-module-inline-source-map。如果你的 modules 里面已经包含了 SourceMaps，你需要用 source-map-loader 来和合并生成一个新的 SourceMaps。

开发环境推荐：

	cheap-module-eval-source-map

生产环境推荐：

	cheap-module-source-map

这也是下版本 webpack 使用 -d 命令启动 debug 模式时的默认选项，原因如下：

使用 cheap 模式可以大幅提高 souremap 生成的效率。大部分情况我们调试并不关心列信息，而且就算 sourcemap 没有列，有些浏览器引擎（例如 v8） 也会给出列信息。

使用 eval 方式可大幅提高持续构建效率。官方文档提供的速度对比表格可以看到 eval 模式的编译速度很快。

使用 module 可支持 babel 这种预编译工具（在 webpack 里做为 loader 使用）。

使用 eval-source-map 模式可以减少网络请求。这种模式开启 DataUrl 本身包含完整 sourcemap 信息，并不需要像 sourceURL 那样，浏览器需要发送一个完整请求去获取 sourcemap 文件，这会略微提高点效率。而生产环境中则不宜用 eval，这样会让文件变得极大。


## npm 配置文件

`package.json`配置文件参考，`main` 这里设置的式项目入口程序，通常项目需要结合 Webpack 开发，入口文件只在 `webpack.config.js` 配置。如果已经准备好配置文件，直接执行 `npm install` 就可以根据配置好的依赖模块列表进行下载安装：

	{
	  "name": "webpack",
	  "version": "1.0.0",
	  "description": "Webpack Getting Started",
	  "main": "index.ts",
	  "devDependencies": {
	    "clean-webpack-plugin": "^3.0.0",
	    "css-loader": "^3.0.0",
	    "file-loader": "^4.0.0",
	    "html-webpack-plugin": "^3.2.0",
	    "html-webpack-template": "^6.2.0",
	    "lodash": "^4.17.14",
	    "source-map-loader": "^0.2.4",
	    "style-loader": "^0.23.1",
	    "ts-loader": "^6.0.4",
	    "ts-node": "^8.3.0",
	    "typescript": "^3.5.3",
	    "url-loader": "^2.0.1",
	    "webpack": "^4.1.1",
	    "webpack-cli": "^3.3.6",
	    "webpack-dev-server": "^3.7.2"
	  },
	  "dependencies": {},
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "dev": "webpack-dev-server --devtool eval --progress --colors",
	    "build": "set NODE_ENV=production&& webpack -p"
	  },
	  "author": "Jeango",
	  "license": "ISC"
	}

需要注意的式，加载的模块愈多，就越消耗硬件资源，因此没有必要使用的组件就不要安装了，直接从配置文件中移除然后从新执行 `npm install` 安装即可更新配置。
例如给给规则指定 `include` 目录节省搜索时间，简化 `resolve.modules`, `resolve.extensions`, `resolve.mainFiles`, `resolve.descriptionFiles`。使用 `DllPlugin` 插件将那些不怎么修改的内容分离到另一个编译单元，避免在开发过程使用 `source-map` 或 `minimize`，特别是代码地图 Source maps 它非常耗资源，请考虑是否真的需要。

可以使用并行编译，`parallel-webpack` 和 `cache-loader` 提供并行编译的能力，后者对性能开销较大的 loader 提供缓存服务。具体要点参考官方的构建优化文档[Build Performance]。

	rules: [
	  {
	    test: /\.js$/,
	    include: path.resolve(__dirname, 'src'),
	    loader: 'babel-loader'
	  }
	]


为了方便使用打包命令，可以配置到 `package.json` 中的 `scripts`，例如要运行开发服务器 `webpack-dev-server` 只需要执行 `npm run dev`，要生成发布打包就执行 `npm run build`，另外 VSCode 对这里设置的命令配置项支持很到位，直接通过 VSCode 的 Terminal 菜单 `Run Task` 就可以执行。Sublime 

	{
	  "scripts": {
	    "dev": "webpack-dev-server --devtool eval --progress --colors",
	    "build": "NODE_ENV=production webpack -p"
	  },
	}

当项目逐渐变大，webpack 的编译时间会变长，果不想每次修改模块后都重新编译，那么可以启动监听模式 `--watch`。开启监听模式后，没有变化的模块会在编译后缓存到内存中，而不会每次都被重新编译，所以监听模式的整体速度是很快的。`-p` 即设置 NODE_ENV 为 production 模式进行打包， `--progress` 显示百分比进度, `--colors` 参数让编译的输出内容带有进度和颜色。

	webpack -p --progress --colors --watch

webpack 命令的基本用法可以查看帮助信息 `webpack --help`

	webpack				– building for development
	webpack -p			– building for production (minification)
	webpack --watch		– for continuous incremental building
	webpack -d			– including source maps
	webpack --colors	– making building output pretty

	webpack-cli [options] --entry <entry> --output <output>
	webpack-cli [options] <entries...> --output <output>
	webpack-cli <command> [options]


## TypeScript 配置

接下来需要一个 TypeScript 配置文件 `tsconfig.json`，因为 TypeScript 需要使用到 Node.js 的类型信息，模块解析`moduleResolution` 设置成 `node` 模式。其它配置项信息可以参考官方文档 [TypeScript]。

	{
	    "compilerOptions": {
	        "outDir": "./dist/", // path to output directory
	        "sourceMap": true, // allow sourcemap support
	        "strictNullChecks": true, // enable strict null checks as a best practice
	        "module": "es6", // specifiy module code generation
	        "target": "es5", // specify ECMAScript target version
	        "allowJs": true, // allow a partial TypeScript and JavaScript codebase  
	        "moduleResolution": "node",
	        "noImplicitAny": true, // disallow implicit any type
	        "noImplicitReturns": true,
	        "strict": true,
	    },
	    "include": ["./src/"]
	}




## Webpack 配置

安装各种 Loaders 后，需要根据 Loader 开发文档参考配置，Webpack 得配置文件是 `webpack.config.js` 官方文档有很详细得说明。对于 Loader，主要是配置 `rules` 规则，`test` 是文件名匹配正则规则，符合匹配条件得文件就交给指定的 `loader` 进行处理，各个 Loader 的配置选项参考文档设置。

其中 `entry` 和 `output` 是比较重要的配置，entry 表示程序入口，output 表示打包出口，即打包生成的文件。`publicPath` 是访问资源时使用的参考路径，打包后的资源存放路径与它直接关联。在使用开发服务器时，它就是项目的根目录下的路径，使用相对目录时要参考根目录来设置。`output` 还可以设置 `path` 属性来指定打包文件存放位置，默认是 `dist` 目录。结合 `filename` 指定输出文件就是 `/dist/bin/bundle.js`。如果对资源文件的发布目录有自定义需求，可以通过 `process.env.NODE_ENV` 变量判端是否是发布编译，然后再指定一个 `publicPath` 目录。

- Entry    即打包后运行入口，默认是 ./src/index.js，可以在配置文件中修改。
- Output   出口打包文件即打包生成的文件，默认在 ./dist/main.js，可以通过配置修改。
- Mode     模式设置，基本上有 development, production, none 几种模式。根据不同的模式使用不同的配置文件来优化开发/发布。

在 Webpack 4 中，不再强制要求指定 entry 和 output 路径。webpack 4 会默认 entry 为 `./src`，output 为 `./dist`。

`mode` 模式设置，基本上有 development, production, none 几种模式。根据不同的模式使用不同的配置文件来优化开发/发布。

`resolve` 设定要解析的文件类型，设置错误解析不到的文件类型会产生 Module not found: Error: Can't resolve...

	module.exports = {
	    // change to .tsx if necessary
	    entry: './src/index.ts',
	    mode: 'development',
	    output: {
	        publicPath: "/",
	        filename: './bin/bundle.js'
	    },
	    resolve: {
	        extensions: [".ts", ".tsx", ".js", ".jsx"]
	    },
	    module: {
	        rules: [{
	            test: /\.(t|j)sx?$/,
	            use: {
	                loader: 'ts-loader'
	            }
	        }, {
	            test: /\.(png|jpg|gif)$/i,
	            use: [{
	                loader: 'url-loader',
	                options: {
	                    limit: 8192,
	                },
	            }, ],
	        }, {
	            test: /\.css$/i,
	            use: [{
	                loader: "style-loader"
	            }, {
	                loader: 'css-loader',
	                options: {
	                    modules: true,
	                }
	            }]
	        }]
	    // },
	    // devtool: 'inline-source-map',
	    // devtool: "source-map",
	    // optimization: {
	    //     minimize: true
	    // },
	    // externals: {
	    //     "react": "React",
	    //     "react-dom": "ReactDOM",
	    }
	}
	if (process.env.NODE_ENV === "production") {
	    module.exports.output.publicPath = "./release";
	}

如果工程有多个主程序入口文件，那么可以将 `entry` 和 `output` 修改成分组打包方式。Webpack 的输出参数 `output` 指定规则生成输出文件。所有的入口产生的输出文件都必须使用这一套规则，不能针对某一个特定的入口来制定 `output` 规则。输出项中用 `[name]` 来引用 `entry`每一项中的键值，用以批量指定生成后文件的名称。`[hash]` 引用本次编译的一个hash版本号，`[chunkhash]` 引用的是当前chunk的一个hash版本。也就是说，在同一次编译中，每一个chunk的hash都是不一样的；而在两次编译中，如果某个chunk根本没有发生变化，那么该chunk的hash也就不会发生变化。

`html-webpack-plugin` 和 `html-webpack-template` 是两个生成 HTML 模板的插件，为了对发布目录 `dist` 自动清理，可以使用 `clean-webpack-plugin` 插件。这几个插件都是 Webpack 提供学习如何在 Node.js 平台下做 Webpack 插件开发用的，也具有一定的实用。

Node.js 提供的内置模块 `path` 可以用来解析绝对路径。

	const path = require('path');
	const HtmlWebpackPlugin = require('html-webpack-plugin');
	const { CleanWebpackPlugin } = require('clean-webpack-plugin');

	module.exports = {
	  entry: {
	    app: './src/index.js',
	    print: './src/print.js'
	  },
	  // entry: {
	  //   home: ['./home.js', './home.scss'],
	  //   account: ['./account.js', './account.scss']
	  // },
	  output: {
	    filename: '[name].bundle.js',
	    path: path.resolve(__dirname, 'dist')
	  },
	  plugins: [
	    new CleanWebpackPlugin(),
	    new HtmlWebpackPlugin({
	      title: 'Output Management'
	    })
	  ]
	};

## 项目文件

先准备一个页面模板 `index.html` 用它来加载 Webpack 打包生成的输出文件 `bundle.js`，为了简化这里就不引用第三方 JavaScript 库:

	<!DOCTYPE html>
	<html lang="en">
	    <head>
	        <meta charset="utf-8" />
	        <title>TypeScript with Webpack</title>
	        <style>
	        	.frame {
	        		width:50%;
	        		padding:10%;
	        		color:white;
	        		background: #282828;
	        	}
	        </style>
	    </head>
	    <body>
	        <div id="content" class="frame"></div>
	        <script src="./bin/bundle.js"></script>
	    </body>
	</html>

新建 `src` 目录用来放源代码 `index.ts`：

	class Student {
		fullName: string = "";
		readonly age:number = 18;
		constructor( public firstName:string, public middle:string, public lastName:string){
			this.fullName = firstName + ' ' + middle + ' ' + lastName;
		}
	}

	interface Person {
	    firstName: string;
	    lastName: string;
	}

	function greeter(person: Person) {
	    return "Hello, " + person.firstName;
	}

	let user = { firstName: "Jane", lastName: "User" };
	// let user = new Student("Jane", "M.", "User");

	let $ = (id:string, msg:string) => {
		let tag = document.getElementById(id);
		if (!tag){
			document.body.innerHTML = ("HTML element not found #"+id);
		}else{
			tag.innerHTML = msg;
		}
	}
	$("content", greeter(user));

其它不需要打包的资源文件单独放放到 `public` 子目录下，这样的工程目录结构是比较通用合理的。


## 打包
[webpack 4 splitChunk 插件配置](https://juejin.im/post/5af1677c6fb9a07ab508dabb)
[webpack examples](https://github.com/webpack/webpack/tree/master/examples/)
[webpack 4 split-chunks-plugins](https://webpack.docschina.org/plugins/split-chunks-plugin/)
[webpack code splitting](https://webpack.docschina.org/guides/code-splitting/)

编写好项目代码后，就可以打包项目，参考前面配置的打包命令，执行其中一个：

	npm run build
	webpack -p
	webpack --profile --json>profile.json

生成过程会有中间代码块 chunks，可以在entry里配置代码的name属性。使用了代码分割code splitting配置，会有多个 bundle 输出文件。多个chunk合在一起就是bundle，一个bundle可以理解为一个大的js打包之后生成的文件，而多个bundle里可能有公共的部分，或者一个bundle里的东西并不需要一次性加载，需要按照路由按需加载，这个时候就需要按需加载，拆分成不同的 chunk 模块。Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。

升级到 webpack 4 会自动分割、压缩、优化，同时 webpack 也会自动帮你 Scope hoisting 和 Tree-shaking。取消了 UglifyjsWebpackPlugin，使用minimize进行压缩，也取消了 CommonsChunkPlugin 分包，使用 splitChunks 进行分包配置。因为webpack只做了入口文件的依赖代码打包，只做了入口文件的公共代码分析，只有入口文件引用过的代码，并且其他chunk页面也引入了的话，webpack会依据自身默认分包规则将其分包。

分包 Code Splitting 解决的时代码加载流程的优化问题，多入口配置 entry 解决不同程序的多入口需求；抽取公有代码解决那些需要多次使用的代码统一打包避免多次网络请求；动态加载，就是按需加载或者懒加载，避免打包文件过大导致首屏加载时间过长。

但是如果入口文件没有引入，那么其它chunk页面里面的公共代码并没有抽出，可能导致每个bundle都有重复打包代码的情况，导致整个项目文件较大。

	optimization: {
	  splitChunks: {
	     chunks: "async", // 必须三选一：async(默认动态加载模块) initial(入口模块) all(全部模块入口和动态的)。
	     minSize: 30000, // 最小尺寸，30000
	     minChunks: 1, // 打包到公共包要求最小 chunk 引用次数，默认1
	     maxAsyncRequests: 5, // 最大异步请求数， 默认5
	     maxInitialRequests : 3, // 最大初始化请求书，默认3
	     automaticNameDelimiter: '~',// 打包分隔符
	     name: function(){}, // 打包后的名称，此选项可接收 function
	     cacheGroups:{ // 这里开始设置缓存的 chunks
	         priority: 0, // 缓存组优先级
	         vendor: { // key 为entry中定义的 入口名称
	             chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是async) 
	             test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
	             name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
	             minSize: 30000,
	             minChunks: 1,
	             enforce: true,
	             maxAsyncRequests: 5, // 最大异步请求数， 默认1
	             maxInitialRequests : 3, // 最大初始化请求书，默认1
	             reuseExistingChunk: true // 可设置是否重用该chunk
	         }
	     }
	  }
	 },

最大的异步请求数 `maxAsyncRequests` 和最大的初始请求数 `maxInitialRequests`是为了防止chunk划分的过于细致，导致大量的文件请求降低performance。按需加载的代码块（vendor-chunk）并行请求的数量小于或等于5个，才会进行分割，超过请求的指定请求频度数量，还进行分包就有可能应网络请求频发而降低性能，因此 webpack 使用这两个参数来确定是否分包。

修改一下 Webpack 配置，尝试使用多模块的打包：

    entry: {
        main:'./src/index.ts',
        sd:'./src/standalone.ts',
    },
    output: {
        publicPath: "/",
        filename: './bin/[name].bundle.js'
    },

因为输出文件命名规则改变了，HTML 模板也需要修改一下入口引用：

	<!DOCTYPE html>
	<html lang="en">
	    <head>
	        <meta charset="utf-8" />
	        <title>TypeScript with Webpack & Plugin Development!</title>
	        <!-- <link rel="stylesheet" href="style.css"> -->
	    </head>
	    <body>
	        <div id="content" class="frame"></div>
	        <script src="./bin/main.bundle.js"></script>
	    </body>
	</html>

添加一个独立模块 `standalone.ts`，只需要一个输出调试信息的 `test()` 方法。`standalone.ts` 其实是作为入口模块配置，但这里是当作模块实现和使用的。

	export default class Demo{
		test(msg:string){
			console.log("Test:", msg);
		}
	}

然后在 `index.ts` 导入并进行模块测试：

	import SD from "./standalone";
	new SD().test("Jeango");

执行 `webpack -p` 打包时就会生成相应的模块:

	Hash: 1da5fe1d39990835525f
	Version: webpack 4.1.1
	Time: 1988ms
	Built at: 2019-7-24 23:51:34
	               Asset       Size  Chunks             Chunk Names
	  ./bin/sd.bundle.js  675 bytes       0  [emitted]  sd
	./bin/main.bundle.js  992 bytes    1, 0  [emitted]  main
	Entrypoint main = ./bin/main.bundle.js
	Entrypoint sd = ./bin/sd.bundle.js
	   [0] ./src/standalone.ts 206 bytes {0} {1} [built]
	   [1] ./src/index.ts 995 bytes {1} [built]

打包后通过`serve dist` 命令运行测试服务，需要结合开发热加载就使用 `webpack-dev-server`。


## devServer config
[Dev Server Config](https://webpack.js.org/configuration/dev-server/#devserver-hot)
	

	module.exports = {
	  //...
	  devServer: {
	    index: 'index.html',
	    open: 'Chrome.exe',
	    openPage: '/home/page',
	    public: 'demo.com:80',
	    publicPath: '/assets/',
	    port: 8080,
	    proxy: {
	      '/api': 'http://localhost:3000'
	    }
	    proxy: {
	      '/api': {
	        target: 'http://localhost:3000',
	        pathRewrite: {'^/api' : ''}
	      }
	    }
	    proxy: {
	      '/api': {
	        target: 'https://other-server.example.com',
	        secure: false
	      }
	    }

	    http2: true,
	    // https: true,
	    https: {
	      key: fs.readFileSync('/path/to/server.key'),
	      cert: fs.readFileSync('/path/to/server.crt'),
	      ca: fs.readFileSync('/path/to/ca.pem'),
	    }
	  }
	};


# static assets

需要理解 webpack 是怎样处理静态资源的，在 .vue 组件中，所有的 templates 和 css 都会被 vue-html-loader 和 css-loader 解析，寻找资源的 URL。举个例子，在 img src="./logo.png" 和 background: url(./logo.png) 中的图像都是相对资源路径，都会被 Webpack 解析成模块依赖。

由于 logo.png 不是 JavaScript，当被看成一个模块依赖的时候，我们需要使用 url-loader 和 file-loader 进行处理。 模板已经配置好这些 loaders，使用相对/模块路径时不需要担心部署的问题。

由于这些资源可能在构建的时候被内联/复制/重命名， 所以它们从本质上来说是你源码的一部分。这就是为什么我们建议将交由 webpack 处理的静态资源和其它源文件一样放在 /src 路径下面。实际上，你甚至不需要把它们全都放在 /src/assets 路径下，你可以基于模块/组件的使用来组织文件结构。例如，你可以把每个组件和属于它的静态资源放在它自己的目录下。

资源处理规则，相对 URL 如 ./assets/logo.png 解释成一个模块依赖，会被一个基于 Webpack 输出配置自动生成的 URL 替代。

没有前缀的 URL 如 assets/logo.png 将会被看成相对 URL，并且转换成 ./assets/logo.png。

前缀带 ~ 的 URL 会被当成模块请求, 类似于 require 操作。如果你想要利用 Webpack 的模块处理配置，就可以使用这个前缀。例如，如果你有一个对于 assets 的路径解析，你需要使用 img src="~assets/logo.png" 来确保解析是对应上的。

相对根目录的 URL /assets/logo.png 是不会被处理的.

在 JavaScript 里获取资源路径，为了能让 Webpack 返回正确的资源路径，你需要使用 require 相对目录，由 file-loader 进行解析，然后返回处理过的 URL。例如：

	computed: {
	  background () {
	    return require('./bgs/' + this.id + '.jpg')
	  }
	}


作为对比，在 static/ 下的文件都不会被 Webpack 处理，原样直接拷贝到最终的输出路径。你必须使用绝对路径来引用这些文件，取决于在 config.js 里面加入的 build.assetsPublicPath 和 build.assetsSubDirectory。

注意上面的例子，在最终的构建时将会包含 ./bgs/ 路径下的所有图片 这是因为 Webpack 不能猜出来在运行时会用到其中的哪个，所以会包含所有的。

	// config/index.js
	module.exports = {
	  // ...
	  build: {
	    assetsPublicPath: '/',
	    assetsSubDirectory: 'static'
	  }
	}

所有放在 static 目录下的文件都应该是使用绝对 /static/[filename] 引用的。如果你将 assetSubDirectory 的值改成 assets， 那么这些 URL 就会被变成 /assets/[filename]


# 🚩 Hello Webpack Plugin
[Webpack Internal Plugin Relation](https://alienzhou.github.io/webpack-internal-plugin-relation/)
[WebPack 插件开发实例](https://github.com/jantimon/html-webpack-plugin)
[Webpack API](https://webpack.js.org/api/)
[Webpack Modules](https://webpack.js.org/concepts/modules/)
[File System](https://nodejs.org/docs/latest-v9.x/api/fs.html)
[child_process](http://nodejs.cn/api/child_process.html)
[从Webpack源码探究打包流程](https://juejin.im/post/5c0206626fb9a049bc4c6540)


Webpack 插件开发可以参考官方提供的 `html-webpack-plugin`、 `clean-webpack-plugin` 或 `webpack-manifest-plugin` 这些插件作为参考，推荐使用 ES6 语法写插件，Webpack 2.0 就开始支持 ES6。

其次要了解 Webpack 内部插件与钩子关系，参考[Webpack Internal Plugin Relation]，了解 `Compolation`、`Compiler`、`Parser`、`MainTemplate` 基本对象结构。

Webpack 在执行过程不同的阶段执行插件方法，开始时执行 `apply(compiler)` 方法会将当前的编译器实例传入，编译器包含了一组钩子函数 `compiler.hooks` 供插件使用。`compiler.options` 包含了 Webpack 的配置文件内容，这些配置拼合了默认的选项。

实列化 Webpack 时，没有设置回调函数，Webpack 就会返回一个 Compiler 实例：

	const webpack = require('webpack');

	const compiler = webpack({
	  // Configuration Object
	});

	compiler.run((err, stats) => { // Stats Object
	  // ...
	});

	const watching = compiler.watch({
	  // Example watchOptions
	  aggregateTimeout: 300,
	  poll: undefined
	}, (err, stats) => { // Stats Object
	  // Print watch/build result here...
	  console.log(stats);
	});

基于 Node.js, Compiler 实例提供了基本的文件系统 inputFileSystem，outputFileSystem，可以这样来定制：

	const MemoryFS = require('memory-fs');
	const webpack = require('webpack');

	const fs = new MemoryFS();
	const compiler = webpack({ / options / });

	compiler.outputFileSystem = fs;
	compiler.run((err, stats) => {
	  // Read the output later:
	  const content = fs.readFileSync('...');
	});

在使用 `webpack-dev-server` 开发时，就是使用 `CachedInputFileSystem` 和 `MemoryFileSystem`。Webpack 内部还实现了几个文件系统 `NodeWatchFileSystem`、 `NodeOutputFileSystem`、 `NodeJsInputFileSystem` 用于不同的场景。对磁盘文件的读写还是通过 Node.js 提供的 [File System] 文件系统模块实现的。


完成后要执行的动作通过 `compiler.hooks.done` 钩子来注册，Webpack 会将 Compilation 实例传入。`compilation.hooks` 也提供了一些钩子函数。注册钩子的方法参考以下代码，不同钩子回调函数的参数会有所差别：

	compiler.hooks.someHook.tap('MyPlugin', (params) => {

	});

	compilation.hooks.buildModule.tap('MyPlugin',
	  module => {
	    module.useSourceMap = true;
	  }
	);

Webpack 的 Module 是模块化编程的基本单元结构，支持的模块类型有 CoffeeScript、 TypeScript、 ESNext (Babel)、 Sass、 Less、 Stylus 等等，Webpack 系统的 Loader 也是模块的一种。在 `buildModule` 钩子中可以读取 `module.type`、`module.constructor` 确定模块类型。

`compiler.hooks.done` 钩子在编译完成时执行，回调参数是一个统计信息对象，compilation 中有包含了 compiler 和编译模块 modules 信息：

	{
		compilation: ...
		hash: '00354804c2f21f00c528',
		startTime: 1563516897225,
		endTime: 1563516905223
	}

关键钩子作用		钩子类型				回调参数		解析			
`beforeRun`		AsyncSeriesHook		Compiler	运行前的准备活动，主要启用了文件读取的功能。
`run`			AsyncSeriesHook		Compiler	跑起来了，在编译之前有缓存，则启用缓存，这样可以提高效率。
`beforeCompile`	AsyncSeriesHook		params		开始编译前的准备，创建的ModuleFactory，创建Compilation，并绑定ModuleFactory到Compilation上。
`compile`		SyncHook			params		编译了
`make`			AsyncParallelHook	compilation	从Compilation的addEntry函数，开始构建模块
`afterCompile`	AsyncSeriesHook		compilation	编译结束了
`shouldEmit`	SyncBailHook		compilation	获取compilation发来的电报，确定编译时候成功，是否可以开始输出了。
`emit`			AsyncSeriesHook		compilation	输出文件了
`afterEmit`		AsyncSeriesHook		compilation	输出完毕
`done`			AsyncSeriesHook		Stats		无论成功与否，一切已尘埃落定。

现在就来写一个插件，用来将项目根目录下的 `index.html` 模板拷贝到发布目录下。利用 Shell 来拷贝 public 目录的资源。在 Node.js 中使用 child_process 执行 shell 有三种方法，spawn，exec和execFile。假定 Windows 系统，借用了 xcopy 命令来复制目录结构。同时使用了 `iconv-lite` 做默认的 Windows 系统 GB2312 编码的默认的 Node.js 编码 UTF-8 的转换。 `iconv-lite` 是 iconv 的纯js实现，支持的编码包括 Node.js 原生编码：utf8, ucs2, ascii, binary, base64；同时支持广泛使用的单字节编码：Windows 125x family, ISO-8859 family, IBM/DOS codepages, Macintosh family, KOI8 family, latin1, us-ascii；多字节编码：gbk, gb2312, Big5, cp950。官方宣称比node-iconv更快。

	const fs = require('fs');
	const exec = require('child_process').execSync;
	var iconv = require('iconv-lite');

	let isProfile = false;

	class AssetsCopier{
	  constructor(options){
	    this.options = options || {};
	    // console.log('Plugin options', this.options);
	  }

	  apply(compiler){
	    let path = compiler.options.output.path;
	    isProfile = !!compiler.options.profile;
	    let buf = exec(`xcopy ${process.cwd()}\\public ${path}\\public /Y /S /I`, err => {
	      if(err) console.log(err);
	    });
	    let str = iconv.decode(buf, "gb2312");
	    !isProfile && console.log("✓ apply", str);
	    // fs.copyFile(src, dest[, flags], callback)  
	    fs.readFile(process.cwd()+'/index.html', 'utf8', function (err, data) {
	      if (err) return console.log("HTML Template not found "+err.path);
	      fs.writeFile(path+'/index.html', data, err => {
	        !isProfile && console.log( err? "Fail to copy index.html":"Copy index.html to "+path)
	      });
	    });

	    if (compiler.hooks) {
	      compiler.hooks.done.tap('AssetsCopier', this.onDone);
	      // compiler.hooks.compilation.tap('AssetsCopier', this.onCompilation);
	      compiler.hooks.afterResolvers.tap('AssetsCopier', this.onAfterResolve);
	    // } else { for old webpack
	    //   compiler.plugin('done', this.onDone);
	    //   compiler.plugin('compilation', this.onCompilation);
	    //   compiler.plugin('normal-module-factory', (nmf) => {
	    //     nmf.plugin('after-resolve', this.onAfterResolve);
	    //   });
	    }
	  }

	  onAfterResolve(compiler){
	    !isProfile && console.log("✓ onAfterResolve");
	  }
	  onCompilation(compilation, compilationParams){
	    !isProfile && console.log("✓ onCompilation");
	    compilation.hooks.buildModule.tap('AssetsCopier',
	      module => {
	        !isProfile && console.log(`\n✓ buildModule ${module.type}\n`, module.constructor.toString().split("{")[0]);
	      }
	    );
	  }
	  onDone(stats){
	    !isProfile && console.log("✓ onDone");
	  }
	}

	module.exports = AssetsCopier;

现在，把以上代码保存到 `assets-copier.js` 并在 Webpack 配置文件中引入插件，然后就可以源打包，Webpack 就会执行插件了。

	const AssetsCopier = require("./assets-copier");

	module.exports = {
		// ...
	    plugins: [
	        new AssetsCopier(),
	    ]
	}



	## lib/Compiler.js

	创建的hook(钩子)

	### Compiler.hooks.additionalPass
	### Compiler.hooks.afterCompile
	### Compiler.hooks.afterEmit
	### Compiler.hooks.afterEnvironment
	### Compiler.hooks.afterPlugins
	### Compiler.hooks.afterResolvers
	### Compiler.hooks.beforeCompile
	### Compiler.hooks.beforeRun
	### Compiler.hooks.compilation
	### Compiler.hooks.compile
	### Compiler.hooks.contextModuleFactory
	### Compiler.hooks.done
	### Compiler.hooks.emit
	### Compiler.hooks.entryOption
	### Compiler.hooks.environment
	### Compiler.hooks.failed
	### Compiler.hooks.invalid
	### Compiler.hooks.make
	### Compiler.hooks.normalModuleFactory
	### Compiler.hooks.run
	### Compiler.hooks.shouldEmit
	### Compiler.hooks.thisCompilation
	### Compiler.hooks.watchClose
	### Compiler.hooks.watchRun

	无注册的hook(钩子)

	调用的hook(钩子)

	### Compiler.call.additionalPass - callAsync
	### Compiler.call.afterCompile - callAsync
	### Compiler.call.afterEmit - callAsync
	### Compiler.call.beforeCompile - callAsync
	### Compiler.call.beforeRun - callAsync
	### Compiler.call.childCompiler - call
	### Compiler.call.compilation - call
	### Compiler.call.compile - call
	### Compiler.call.contextModuleFactory - call
	### Compiler.call.done - callAsync
	### Compiler.call.emit - callAsync
	### Compiler.call.make - callAsync
	### Compiler.call.needAdditionalPass - call
	### Compiler.call.normalModuleFactory - call
	### Compiler.call.run - callAsync
	### Compiler.call.shouldEmit - call
	### Compiler.call.thisCompilation - call


	## lib/Compilation.js

	创建的hook(钩子)

	### Compilatio.hooks.additionalAssets
	### Compilatio.hooks.additionalChunkAssets
	### Compilatio.hooks.advancedOptimizeModuleOrder
	### Compilatio.hooks.afterChunks
	### Compilatio.hooks.afterHash
	### Compilatio.hooks.afterOptimizeAssets
	### Compilatio.hooks.afterOptimizeChunkAssets
	### Compilatio.hooks.afterOptimizeChunkIds
	### Compilatio.hooks.afterOptimizeChunkModules
	### Compilatio.hooks.afterOptimizeChunks
	### Compilatio.hooks.afterOptimizeDependencies
	### Compilatio.hooks.afterOptimizeExtractedChunks
	### Compilatio.hooks.afterOptimizeModuleIds
	### Compilatio.hooks.afterOptimizeModules
	### Compilatio.hooks.afterOptimizeTree
	### Compilatio.hooks.afterSeal
	### Compilatio.hooks.assetPath
	### Compilatio.hooks.beforeChunkAssets
	### Compilatio.hooks.beforeChunkIds
	### Compilatio.hooks.beforeChunks
	### Compilatio.hooks.beforeHash
	### Compilatio.hooks.beforeModuleAssets
	### Compilatio.hooks.beforeModuleIds
	### Compilatio.hooks.buildModule
	### Compilatio.hooks.childCompiler
	### Compilatio.hooks.chunkAsset
	### Compilatio.hooks.chunkHash
	### Compilatio.hooks.contentHash
	### Compilatio.hooks.dependencyReference
	### Compilatio.hooks.failedModule
	### Compilatio.hooks.finishModules
	### Compilatio.hooks.finishRebuildingModule
	### Compilatio.hooks.moduleAsset
	### Compilatio.hooks.moduleIds
	### Compilatio.hooks.needAdditionalPass
	### Compilatio.hooks.needAdditionalSeal
	### Compilatio.hooks.normalModuleLoader
	### Compilatio.hooks.optimize
	### Compilatio.hooks.optimizeAssets
	### Compilatio.hooks.optimizeChunkAssets
	### Compilatio.hooks.optimizeChunkIds
	### Compilatio.hooks.optimizeChunkModules
	### Compilatio.hooks.optimizeChunkModulesAdvanced
	### Compilatio.hooks.optimizeChunkModulesBasic
	### Compilatio.hooks.optimizeChunkOrder
	### Compilatio.hooks.optimizeChunks
	### Compilatio.hooks.optimizeChunksAdvanced
	### Compilatio.hooks.optimizeChunksBasic
	### Compilatio.hooks.optimizeDependencies
	### Compilatio.hooks.optimizeDependenciesAdvanced
	### Compilatio.hooks.optimizeDependenciesBasic
	### Compilatio.hooks.optimizeExtractedChunks
	### Compilatio.hooks.optimizeExtractedChunksAdvanced
	### Compilatio.hooks.optimizeExtractedChunksBasic
	### Compilatio.hooks.optimizeModuleIds
	### Compilatio.hooks.optimizeModuleOrder
	### Compilatio.hooks.optimizeModules
	### Compilatio.hooks.optimizeModulesAdvanced
	### Compilatio.hooks.optimizeModulesBasic
	### Compilatio.hooks.optimizeTree
	### Compilatio.hooks.rebuildModule
	### Compilatio.hooks.record
	### Compilatio.hooks.recordChunks
	### Compilatio.hooks.recordHash
	### Compilatio.hooks.recordModules
	### Compilatio.hooks.reviveChunks
	### Compilatio.hooks.reviveModules
	### Compilatio.hooks.seal
	### Compilatio.hooks.shouldGenerateChunkAssets
	### Compilatio.hooks.shouldRecord
	### Compilatio.hooks.succeedModule
	### Compilatio.hooks.unseal


	调用的hook(钩子)

	### Compilation.call.additionalAssets - callAsync
	### Compilation.call.additionalChunkAssets - call
	### Compilation.call.advancedOptimizeModuleOrder - call
	### Compilation.call.afterChunks - call
	### Compilation.call.afterHash - call
	### Compilation.call.afterOptimizeAssets - call
	### Compilation.call.afterOptimizeChunkAssets - call
	### Compilation.call.afterOptimizeChunkIds - call
	### Compilation.call.afterOptimizeChunkModules - call
	### Compilation.call.afterOptimizeChunks - call
	### Compilation.call.afterOptimizeDependencies - call
	### Compilation.call.afterOptimizeModuleIds - call
	### Compilation.call.afterOptimizeModules - call
	### Compilation.call.afterOptimizeTree - call
	### Compilation.call.afterSeal - callAsync
	### Compilation.call.beforeChunkAssets - call
	### Compilation.call.beforeChunkIds - call
	### Compilation.call.beforeChunks - call
	### Compilation.call.beforeHash - call
	### Compilation.call.beforeModuleAssets - call
	### Compilation.call.beforeModuleIds - call
	### Compilation.call.buildModule - call
	### Compilation.call.chunkAsset - call
	### Compilation.call.chunkHash - call
	### Compilation.call.contentHash - call
	### Compilation.call.dependencyReference - call
	### Compilation.call.failedModule - call
	### Compilation.call.finishModules - call
	### Compilation.call.finishRebuildingModule - call
	### Compilation.call.moduleAsset - call
	### Compilation.call.moduleIds - call
	### Compilation.call.needAdditionalSeal - call
	### Compilation.call.optimize - call
	### Compilation.call.optimizeAssets - callAsync
	### Compilation.call.optimizeChunkAssets - callAsync
	### Compilation.call.optimizeChunkIds - call
	### Compilation.call.optimizeChunkModules - call
	### Compilation.call.optimizeChunkModulesAdvanced - call
	### Compilation.call.optimizeChunkModulesBasic - call
	### Compilation.call.optimizeChunkOrder - call
	### Compilation.call.optimizeChunks - call
	### Compilation.call.optimizeChunksAdvanced - call
	### Compilation.call.optimizeChunksBasic - call
	### Compilation.call.optimizeDependencies - call
	### Compilation.call.optimizeDependenciesAdvanced - call
	### Compilation.call.optimizeDependenciesBasic - call
	### Compilation.call.optimizeModuleIds - call
	### Compilation.call.optimizeModuleOrder - call
	### Compilation.call.optimizeModules - call
	### Compilation.call.optimizeModulesAdvanced - call
	### Compilation.call.optimizeModulesBasic - call
	### Compilation.call.optimizeTree - callAsync
	### Compilation.call.rebuildModule - call
	### Compilation.call.record - call
	### Compilation.call.recordChunks - call
	### Compilation.call.recordHash - call
	### Compilation.call.recordModules - call
	### Compilation.call.reviveChunks - call
	### Compilation.call.reviveModules - call
	### Compilation.call.seal - call
	### Compilation.call.shouldGenerateChunkAssets - call
	### Compilation.call.shouldRecord - call
	### Compilation.call.succeedModule - call
	### Compilation.call.unseal - call


## CLI 选项参考
https://github.com/docschina/webpack.js.org/blob/cn/src/content/api/cli.md

webpack-cli 3.0.8

	Usage: webpack-cli [options]
	       webpack-cli [options] --entry <entry> --output <output>
	       webpack-cli [options] <entries...> --output <output>
	       webpack-cli <command> [options]

	For more information, see https://webpack.js.org/api/cli/.

	Config options:
	  --config               Path to the config file
	                         [string] [default: webpack.config.js or webpackfile.js]
	  --config-register, -r  Preload one or more modules before loading the webpack
	                         configuration      [array] [default: module id or path]
	  --config-name          Name of the config to use                      [string]
	  --env                  Environment passed to the config, when it is a function
	  --mode                 Enable production optimizations or development hints.
	                                  [choices: "development", "production", "none"]

	Basic options:
	  --context    The base directory (absolute path!) for resolving the `entry`
	               option. If `output.pathinfo` is set, the included pathinfo is
	               shortened to this directory.
	                                       [string] [default: The current directory]
	  --entry      The entry point(s) of the compilation.                   [string]
	  --watch, -w  Enter watch mode, which rebuilds on file change.        [boolean]
	  --debug      Switch loaders to debug mode                            [boolean]
	  --devtool    A developer tool to enhance debugging.                   [string]
	  -d           shortcut for --debug --devtool eval-cheap-module-source-map
	               --output-pathinfo                                       [boolean]
	  -p           shortcut for --optimize-minimize --define
	               process.env.NODE_ENV="production"                       [boolean]
	  --progress   Print compilation progress in percentage                [boolean]

	Module options:
	  --module-bind       Bind an extension to a loader                     [string]
	  --module-bind-post  Bind an extension to a post loader                [string]
	  --module-bind-pre   Bind an extension to a pre loader                 [string]

	Output options:
	  --output, -o                  The output path and file for compilation assets
	  --output-path                 The output directory as **absolute path**
	                                (required).
	                                       [string] [default: The current directory]
	  --output-filename             Specifies the name of each output file on disk.
	                                You must **not** specify an absolute path here!
	                                The `output.path` option determines the location
	                                on disk the files are written to, filename is
	                                used solely for naming the individual files.
	                                                   [string] [default: [name].js]
	  --output-chunk-filename       The filename of non-entry chunks as relative
	                                path inside the `output.path` directory.
	       [string] [default: filename with [id] instead of [name] or [id] prefixed]
	  --output-source-map-filename  The filename of the SourceMaps for the
	                                JavaScript files. They are inside the
	                                `output.path` directory.                [string]
	  --output-public-path          The `publicPath` specifies the public URL
	                                address of the output files when referenced in a
	                                browser.                                [string]
	  --output-jsonp-function       The JSONP function used by webpack for async
	                                loading of chunks.                      [string]
	  --output-pathinfo             Include comments with information about the
	                                modules.                               [boolean]
	  --output-library              Expose the exports of the entry point as library
	                                                                        [string]
	  --output-library-target       Type of library
	         [string] [choices: "var", "assign", "this", "window", "self", "global",
	      "commonjs", "commonjs2", "commonjs-module", "amd", "umd", "umd2", "jsonp"]

	Advanced options:
	  --records-input-path       Store compiler state to a json file.       [string]
	  --records-output-path      Load compiler state from a json file.      [string]
	  --records-path             Store/Load compiler state from/to a json file. This
	                             will result in persistent ids of modules and
	                             chunks. An absolute path is expected. `recordsPath`
	                             is used for `recordsInputPath` and
	                             `recordsOutputPath` if they left undefined.[string]
	  --define                   Define any free var in the bundle          [string]
	  --target                   Environment to build for                   [string]
	  --cache                    Cache generated modules and chunks to improve
	                             performance for multiple incremental builds.
	                      [boolean] [default: It's enabled by default when watching]
	  --watch-stdin, --stdin     Stop watching when stdin stream has ended [boolean]
	  --watch-aggregate-timeout  Delay the rebuilt after the first change. Value is
	                             a time in ms.                              [number]
	  --watch-poll               Enable polling mode for watching           [string]
	  --hot                      Enables Hot Module Replacement            [boolean]
	  --prefetch                 Prefetch this request (Example: --prefetch
	                             ./file.js)                                 [string]
	  --provide                  Provide these modules as free vars in all modules
	                             (Example: --provide jQuery=jquery)         [string]
	  --labeled-modules          Enables labeled modules                   [boolean]
	  --plugin                   Load this plugin                           [string]
	  --bail                     Report the first error as a hard error instead of
	                             tolerating it.            [boolean] [default: null]
	  --profile                  Capture timing information for each module.
	                                                       [boolean] [default: null]

	Resolving options:
	  --resolve-alias         Redirect module requests                      [string]
	  --resolve-extensions    Redirect module requests                       [array]
	  --resolve-loader-alias  Setup a loader alias for resolving            [string]

	Optimizing options:
	  --optimize-max-chunks      Try to keep the chunk count below a limit
	  --optimize-min-chunk-size  Minimal size for the created chunk
	  --optimize-minimize        Enable minimizing the output. Uses
	                             optimization.minimizer.                   [boolean]

	Stats options:
	  --color, --colors               Enables/Disables colors on the console
	                                           [boolean] [default: (supports-color)]
	  --sort-modules-by               Sorts the modules list by property in module
	                                                                        [string]
	  --sort-chunks-by                Sorts the chunks list by property in chunk
	                                                                        [string]
	  --sort-assets-by                Sorts the assets list by property in asset
	                                                                        [string]
	  --hide-modules                  Hides info about modules             [boolean]
	  --display-exclude               Exclude modules in the output         [string]
	  --display-modules               Display even excluded modules in the output
	                                                                       [boolean]
	  --display-max-modules           Sets the maximum number of visible modules in
	                                  output                                [number]
	  --display-chunks                Display chunks in the output         [boolean]
	  --display-entrypoints           Display entry points in the output   [boolean]
	  --display-origins               Display origins of chunks in the output
	                                                                       [boolean]
	  --display-cached                Display also cached modules in the output
	                                                                       [boolean]
	  --display-cached-assets         Display also cached assets in the output
	                                                                       [boolean]
	  --display-reasons               Display reasons about module inclusion in the
	                                  output                               [boolean]
	  --display-depth                 Display distance from entry point for each
	                                  module                               [boolean]
	  --display-used-exports          Display information about used exports in
	                                  modules (Tree Shaking)               [boolean]
	  --display-provided-exports      Display information about exports provided
	                                  from modules                         [boolean]
	  --display-optimization-bailout  Display information about why optimization
	                                  bailed out for modules               [boolean]
	  --display-error-details         Display details about errors         [boolean]
	  --display                       Select display preset
	              [string] [choices: "", "verbose", "detailed", "normal", "minimal",
	                                                          "errors-only", "none"]
	  --verbose                       Show more details                    [boolean]
	  --info-verbosity                Controls the output of lifecycle messaging
	                                  e.g. Started watching files...
	                 [string] [choices: "none", "info", "verbose"] [default: "info"]
	  --build-delimiter               Display custom text after build output[string]

	Options:
	  --help, -h     Show help                                             [boolean]
	  --version, -v  Show version number                                   [boolean]
	  --silent       Prevent output from being displayed in stdout         [boolean]
	  --json, -j     Prints the result as JSON.                            [boolean]


# 🚩 Output 输出配置
https://www.webpackjs.com/configuration/output/
https://webpack.js.org/configuration/output/

---
title: 输出(output)
sort: 5
contributors:
  - sokra
  - skipjack
  - tomasAlabes
  - mattce
  - irth
  - fvgs
  - dhurlburtusa
  - MagicDuck
  - fadysamirsadek
  - byzyk
  - madhavarshney
  - harshwardhansingh
  - eemeli
  - EugeneHlushko
---

`output` 位于对象最顶级键(key)，包括了一组选项，指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」。


## `output.auxiliaryComment`

`string` `object`

在和 [`output.library`](#output-library) 和 [`output.libraryTarget`](#output-librarytarget) 一起使用时，此选项允许用户向导出容器(export wrapper)中插入注释。要为 `libraryTarget` 每种类型都插入相同的注释，将 `auxiliaryComment` 设置为一个字符串：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    library: 'someLibName',
    libraryTarget: 'umd',
    filename: 'someLibName.js',
    auxiliaryComment: 'Test Comment'
  }
};
```

将会生成如下：

__webpack.config.js__

```javascript
(function webpackUniversalModuleDefinition(root, factory) {
  // Test Comment
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('lodash'));
  // Test Comment
  else if(typeof define === 'function' && define.amd)
    define(['lodash'], factory);
  // Test Comment
  else if(typeof exports === 'object')
    exports['someLibName'] = factory(require('lodash'));
  // Test Comment
  else
    root['someLibName'] = factory(root['_']);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
  // ...
});
```

对于 `libraryTarget` 每种类型的注释进行更细粒度地控制，请传入一个对象：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    //...
    auxiliaryComment: {
      root: 'Root Comment',
      commonjs: 'CommonJS Comment',
      commonjs2: 'CommonJS2 Comment',
      amd: 'AMD Comment'
    }
  }
};
```


## `output.chunkFilename`

`string`

此选项决定了非入口(non-entry) chunk 文件的名称。有关可取的值的详细信息，请查看 [`output.filename`](#output-filename) 选项。

注意，这些文件名需要在 runtime 根据 chunk 发送的请求去生成。因此，需要在 webpack runtime 输出 bundle 值时，将 chunk id 的值对应映射到占位符(如 `[name]` 和 `[chunkhash]`)。这会增加文件大小，并且在任何 chunk 的占位符值修改后，都会使 bundle 失效。

默认使用 `[id].js` 或从 [`output.filename`](#output-filename) 中推断出的值（`[name]` 会被预先替换为 `[id]` 或 `[id].`）。


## `output.chunkLoadTimeout`

`integer`

chunk 请求到期之前的毫秒数，默认为 120 000。从 webpack 2.6.0 开始支持此选项。


## `output.crossOriginLoading`

`boolean` `string`

只用于 [`target`](/configuration/target) 是 web，使用了通过 script 标签的 JSONP 来按需加载 chunk。

启用 [cross-origin 属性](https://developer.mozilla.org/en/docs/Web/HTML/Element/script#attr-crossorigin) 加载 chunk。以下是可接收的值……

`crossOriginLoading: false` - 禁用跨域加载（默认）

`crossOriginLoading: 'anonymous'` - __不带凭据(credential)__ 启用跨域加载

`crossOriginLoading: 'use-credentials'` - __带凭据(credential)__ 启用跨域加载 **with credentials**


## `output.jsonpScriptType`

`string`

允许自定义 `script` 的类型，webpack 会将 `script` 标签注入到 DOM 中以下载异步 chunk。可以使用以下选项：

- `'text/javascript'`（默认）
- `'module'`：与 ES6 就绪代码一起使用。


## `output.devtoolFallbackModuleFilenameTemplate`

`string | function(info)`

当上面的模板字符串或函数产生重复时使用的备用内容。

查看 [`output.devtoolModuleFilenameTemplate`](#output-devtoolmodulefilenametemplate)。


## `output.devtoolLineToLine`

`boolean | object`

> 避免使用此选项，因为它们已废弃，并将很快删除。

对所有或某些模块启用「行到行映射(line to line mapping)」。这将生成基本的源映射(source map)，即生成资源(generated source)的每一行，映射到原始资源(original source)的同一行。这是一个性能优化点，并且应该只需要输入行(input line)和生成行(generated line)相匹配时才使用。

传入 boolean 值，对所有模块启用或禁用此功能（默认 `false`）。对象可有 `test`, `include`, `exclude` 三种属性。例如，对某个特定目录中所有 javascript 文件启用此功能：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    devtoolLineToLine: { test: /\.js$/, include: 'src/utilities' }
  }
};
```


## `output.devtoolModuleFilenameTemplate`

`string | function(info)`

此选项仅在 「[`devtool`](/configuration/devtool) 使用了需要模块名称的选项」时使用。

自定义每个 source map 的 `sources` 数组中使用的名称。可以通过传递模板字符串(template string)或者函数来完成。例如，当使用 `devtool: 'eval'`，默认值是：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    devtoolModuleFilenameTemplate: 'webpack://[namespace]/[resource-path]?[loaders]'
  }
};
```

模板字符串(template string)中做以下替换（通过 webpack 内部的 [`ModuleFilenameHelpers`](https://github.com/webpack/webpack/blob/master/lib/ModuleFilenameHelpers.js)）：

| 模板                 | 描述 |
| ------------------------ | ----------- |
| [absolute-resource-path] | 绝对路径文件名 |
| [all-loaders]            | 自动和显式的 loader，并且参数取决于第一个 loader 名称 |
| [hash]                   | 模块标识符的 hash |
| [id]                     | 模块标识符 |
| [loaders]                | 显式的 loader，并且参数取决于第一个 loader 名称 |
| [resource]               | 用于解析文件的路径和用于第一个 loader 的任意查询参数 |
| [resource-path]          | 不带任何查询参数，用于解析文件的路径 |
| [namespace]              | 模块命名空间。在构建成为一个 library 之后，通常也是 library 名称，否则为空 |

当使用一个函数，同样的选项要通过 `info` 参数并使用驼峰式(camel-cased)：

```javascript
module.exports = {
  //...
  output: {
    devtoolModuleFilenameTemplate: info => {
      return `webpack:///${info.resourcePath}?${info.loaders}`;
    }
  }
};
```

如果多个模块产生相同的名称，使用 [`output.devtoolFallbackModuleFilenameTemplate`](#output-devtoolfallbackmodulefilenametemplate) 来代替这些模块。


## `output.devtoolNamespace`

`string`

此选项确定 [`output.devtoolModuleFilenameTemplate`](#output-devtoolmodulefilenametemplate) 使用的模块名称空间。未指定时的默认值为：[`output.library`](#output-library)。在加载多个通过 webpack 构建的 library 时，用于防止 source map 中源文件路径冲突。

例如，如果你有两个 library，分别使用命名空间 `library1` 和 `library2`，并且都有一个文件 `./src/index.js`（可能具有不同内容），它们会将这些文件暴露为 `webpack://library1/./src/index.js` 和 `webpack://library2/./src/index.js`。


## `output.filename`

`string` `function`

此选项决定了每个输出 bundle 的名称。这些 bundle 将写入到 [`output.path`](#output-path) 选项指定的目录下。

对于单个[`入口`](/configuration/entry-context#entry)起点，filename 会是一个静态名称。

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    filename: 'bundle.js'
  }
};
```

然而，当通过多个入口起点(entry point)、代码拆分(code splitting)或各种插件(plugin)创建多个 bundle，应该使用以下一种替换方式，来赋予每个 bundle 一个唯一的名称……

使用入口名称：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    filename: '[name].bundle.js'
  }
};
```

使用内部 chunk id

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    filename: '[id].bundle.js'
  }
};
```

使用每次构建过程中，唯一的 hash 生成

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    filename: '[name].[hash].bundle.js'
  }
};
```

使用基于每个 chunk 内容的 hash：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    filename: '[chunkhash].bundle.js'
  }
};
```

Using hashes generated for extracted content:

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    filename: '[contenthash].bundle.css'
  }
};
```

Using function to return the filename:

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    filename: (chunkData) => {
      return chunkData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
    },
  }
};
```

请确保已阅读过 [指南 - 缓存](/guides/caching) 的详细信息。这里涉及更多步骤，不仅仅是设置此选项。

注意此选项被称为文件名，但是你还是可以使用像 `'js/[name]/bundle.js'` 这样的文件夹结构。

注意，此选项不会影响那些「按需加载 chunk」的输出文件。对于这些文件，请使用 [`output.chunkFilename`](#output-chunkfilename) 选项来控制输出。通过 loader 创建的文件也不受影响。在这种情况下，你必须尝试 loader 特定的可用选项。

可以使用以下替换模板字符串（通过 webpack 内部的[`TemplatedPathPlugin`][`TemplatedPathPlugin`](https://github.com/webpack/webpack/blob/master/lib/TemplatedPathPlugin.js)）：

| 模板 | 描述 |
| ----------- | ----------------------------------------------------------------------------------- |
| [hash]      | 模块标识符(module identifier)的 hash |
| [chunkhash] | chunk 内容的 hash |
| [name]      | 模块名称 |
| [id]        | 模块标识符(module identifier) |
| [query]     | 模块的 query，例如，文件名 `?` 后面的字符串 |
| [function]  | The function, which can return filename [string] |

`[hash]` 和 `[chunkhash]` 的长度可以使用 `[hash:16]`（默认为20）来指定。或者，通过指定[`output.hashDigestLength`](#output-hashdigestlength) 在全局配置长度。

如果将这个选项设为一个函数，函数将返回一个包含上面表格中替换信息的对象。

T> 在使用 [`ExtractTextWebpackPlugin`](/plugins/extract-text-webpack-plugin) 时，可以用 `[contenthash]` 来获取提取文件的 hash（既不是 `[hash]` 也不是 `[chunkhash]`）。


## `output.hashDigest`

在生成 hash 时使用的编码方式，默认为 `'hex'`。支持 Node.js [`hash.digest`](https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding) 的所有编码。对文件名使用 `'base64'`，可能会出现问题，因为 base64 字母表中具有 `/` 这个字符(character)。同样的，`'latin1'` 规定可以含有任何字符(character)。


## `output.hashDigestLength`

散列摘要的前缀长度，默认为 `20`。


## `output.hashFunction`

`string|function`

散列算法，默认为 `'md4'`。支持 Node.JS [`crypto.createHash`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options) 的所有功能。从 `4.0.0-alpha2` 开始，`hashFunction` 现在可以是一个返回自定义 hash 的构造函数。出于性能原因，你可以提供一个不加密的哈希函数(non-crypto hash function)。

```javascript
module.exports = {
  //...
  output: {
    hashFunction: require('metrohash').MetroHash64
  }
};
```

确保 hash 函数有可访问的 `update` and `digest` 方法。

## `output.hashSalt`

一个可选的加盐值，通过 Node.JS [`hash.update`](https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding) 来更新哈希。


## `output.hotUpdateChunkFilename`

`string` `function`

自定义热更新 chunk 的文件名。可选的值的详细信息，请查看 [`output.filename`](#output-filename) 选项。

占位符只能是 `[id]` 和 `[hash]`，默认值是：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    hotUpdateChunkFilename: '[id].[hash].hot-update.js'
  }
};
```

这里没有必要修改它。


## `output.hotUpdateFunction`

`function`

只在 [`target`](/configuration/target) 是 web 时使用，用于加载热更新(hot update)的 JSONP 函数。

JSONP 函数用于异步加载(async load)热更新(hot-update) chunk。

详细请查看 [`output.jsonpFunction`](#output-jsonpfunction)。


## `output.hotUpdateMainFilename`

`string` `function`

自定义热更新的主文件名(main filename)。可选的值的详细信息，请查看 [`output.filename`](#output-filename) 选项

占位符只能是 `[hash]`，默认值是：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    hotUpdateMainFilename: '[hash].hot-update.json'
  }
};
```

这里没有必要修改它。


## `output.jsonpFunction`

`string`

只在 [`target`](/configuration/target) 是 web 时使用，用于按需加载(load on-demand) chunk 的 JSONP 函数。

JSONP 函数用于异步加载(async load) chunk，或者拼接多个初始 chunk(SplitChunksPlugin, AggressiveSplittingPlugin)。

如果在同一网页中使用了多个（来自不同编译过程(compilation)的）webpack runtime，则需要修改此选项。

如果使用了 [`output.library`](#output-library) 选项，library 名称时自动追加的。


## `output.library`

`string` 或 `object`（从 webpack 3.1.0 开始；用于 `libraryTarget: 'umd'`）

`output.library` 的值的作用，取决于[`output.libraryTarget`](#output-librarytarget) 选项的值；完整的详细信息请查阅该章节。注意，`output.libraryTarget` 的默认选项是 `var`，所以如果使用以下配置选项：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    library: 'MyLibrary'
  }
};
```

如果生成的输出文件，是在 HTML 页面中作为一个 script 标签引入，则变量 `MyLibrary` 将与入口文件的返回值绑定。

W> 注意，如果将`数组`作为 `entry`，那么只会暴露数组中的最后一个模块。如果将`对象`作为 `entry`，还可以使用 `array` 语法暴露（具体查看[这个示例](https://github.com/webpack/webpack/tree/master/examples/multi-part-library) for details)）。

T> 有关 `output.library` 以及 `output.libraryTarget` 详细信息，请查看[创建 library 指南](/guides/author-libraries)。


## `output.libraryExport`

`string | string[]`

Configure which module or modules will be exposed via the `libraryTarget`. It is `undefined` by default, same behaviour will be applied if you set `libraryTarget` to an empty string e.g. `''` it will export the whole (namespace) object. The examples below demonstrate the effect of this config when using `libraryTarget: 'var'`.

The following configurations are supported:

`libraryExport: 'default'` - The __default export of your entry point__ will be assigned to the library target:

```javascript
// if your entry has a default export of `MyDefaultModule`
var MyDefaultModule = _entry_return_.default;
```

`libraryExport: 'MyModule'` - The __specified module__ will be assigned to the library target:

```javascript
var MyModule = _entry_return_.MyModule;
```

`libraryExport: ['MyModule', 'MySubModule']` - The array is interpreted as a __path to a module__ to be assigned to the library target:

```javascript
var MySubModule = _entry_return_.MyModule.MySubModule;
```

With the `libraryExport` configurations specified above, the resulting libraries could be utilized as such:

```javascript
MyDefaultModule.doSomething();
MyModule.doSomething();
MySubModule.doSomething();
```


## `output.libraryTarget`

`string: 'var'`

配置如何暴露 library。可以使用下面的选项中的任意一个。注意，此选项与分配给 [`output.library`](#output-library) 的值一同使用。对于下面的所有示例，都假定将 `output.library` 的值配置为 `MyLibrary`。

T> 注意，下面的示例代码中的 `_entry_return_` 是入口起点返回的值。在 bundle 本身中，它是从入口起点、由 webpack 生成的函数的输出结果。

### 暴露为一个变量

这些选项将入口起点的返回值（例如，入口起点的任何导出值），在 bundle 包所引入的位置，赋值给 output.library 提供的变量名。

`libraryTarget: 'var'` - （默认值）当 library 加载完成，__入口起点的返回值__ 将分配给一个变量：

```javascript
var MyLibrary = _entry_return_;

// 在一个单独的 script……
MyLibrary.doSomething();
```

W> 当使用此选项时，将 `output.library` 设置为空，会因为没有变量导致无法赋值。


`libraryTarget: 'assign'` - 这将产生一个隐含的全局变量，可能会潜在地重新分配到全局中已存在的值（谨慎使用）。.

```javascript
MyLibrary = _entry_return_;
```

注意，如果 `MyLibrary` 在作用域中未在前面代码进行定义，则你的 library 将被设置在全局作用域内。

W> 当使用此选项时，将 `output.library` 设置为空，将产生一个破损的输出 bundle。


### 通过在对象上赋值暴露

这些选项将入口起点的返回值（例如，入口起点的任何导出值）赋值给一个特定对象的属性（此名称由 `output.library` 定义）下。

如果 `output.library` 未赋值为一个非空字符串，则默认行为是，将入口起点返回的所有属性都赋值给一个对象（此对象由 `output.libraryTarget` 特定），通过如下代码片段：

```javascript
(function(e, a) { for(var i in a) { e[i] = a[i]; } }(output.libraryTarget, _entry_return_));
```

W> 注意，不设置 `output.library` 将导致由入口起点返回的所有属性，都会被赋值给给定的对象；这里并不会检查现有的属性名是否存在。

`libraryTarget: "this"` - __入口起点的返回值__ 将分配给 this 的一个属性（此名称由 `output.library` 定义）下，`this` 的含义取决于你：

```javascript
this['MyLibrary'] = _entry_return_;

// 在一个单独的 script……
this.MyLibrary.doSomething();
MyLibrary.doSomething(); // 如果 this 是 window
```

`libraryTarget: 'window'` - __入口起点的返回值__ 将使用 `output.library` 中定义的值，分配给 `window` 对象的这个属性下。

```javascript
window['MyLibrary'] = _entry_return_;

window.MyLibrary.doSomething();
```


`libraryTarget: 'global'` - __入口起点的返回值__ 将使用 `output.library` 中定义的值，分配给 `global` 对象的这个属性下。

```javascript
global['MyLibrary'] = _entry_return_;

global.MyLibrary.doSomething();
```


`libraryTarget: 'commonjs'` - __入口起点的返回值__ 将使用 `output.library` 中定义的值，分配给 exports 对象。这个名称也意味着，模块用于 CommonJS 环境：

```javascript
exports['MyLibrary'] = _entry_return_;

require('MyLibrary').doSomething();
```

### 模块定义系统

这些选项将导致 bundle 带有更完整的模块头部，以确保与各种模块系统的兼容性。根据 `output.libraryTarget` 选项不同，`output.library` 选项将具有不同的含义。


`libraryTarget: 'commonjs2'` - __入口起点的返回值__ 将分配给 `module.exports` 对象。这个名称也意味着模块用于 CommonJS 环境：

```javascript
module.exports = _entry_return_;

require('MyLibrary').doSomething();
```

注意，`output.library` 会被省略，因此对于此特定的 `output.libraryTarget`，无需再设置 `output.library` 。

T> 想要弄清楚 CommonJS 和 CommonJS2 之间的区别？虽然它们很相似，但二者之间存在一些微妙的差异，这通常与 webpack 上下文没有关联。（更多详细信息，请[阅读此 issue](https://github.com/webpack/webpack/issues/1114)。）


`libraryTarget: 'amd'` - 将你的 library 暴露为 AMD 模块。

AMD 模块要求入口 chunk（例如使用 `<script>` 标签加载的第一个脚本）通过特定的属性定义，例如 `define` 和 `require`，它们通常由 RequireJS 或任何兼容的模块加载器提供（例如 almond）。否则，直接加载生成的 AMD bundle 将导致报错，如 `define is not defined`。

所以，使用以下配置……

```javascript
module.exports = {
  //...
  output: {
    library: 'MyLibrary',
    libraryTarget: 'amd'
  }
};
```

生成的 output 将会使用 "MyLibrary" 作为模块名定义，即

```javascript
define('MyLibrary', [], function() {
  return _entry_return_;
});
```

可以在 script 标签中，将 bundle 作为一个模块整体引入，并且可以像这样调用 bundle：

```javascript
require(['MyLibrary'], function(MyLibrary) {
  // 使用 library 做一些事……
});
```

如果 `output.library` 未定义，将会生成以下内容。

```javascript
define([], function() {
  return _entry_return_; // 此模块返回值，是入口 chunk 返回的值
});
```

如果直接加载 `<script>` 标签，此 bundle 无法按预期运行，或者根本无法正常运行（在 almond loader 中）。只能通过文件的实际路径，在 RequireJS 兼容的异步模块加载器中运行，因此在这种情况下，如果这些设置直接暴露在服务器上，那么 `output.path` 和 `output.filename` 对于这个特定的设置可能变得很重要。


`libraryTarget: 'amd-require'` - This packages your output with an immediately-executed AMD `require(dependencies, factory)` wrapper.

The `'amd-require'` target allows for the use of AMD dependencies without needing a separate later invocation. As with the `'amd'` target, this depends on the appropriate [`require` function](https://github.com/amdjs/amdjs-api/blob/master/require.md) being available in the environment in which the webpack output is loaded.

With this target, the library name is ignored.


`libraryTarget: 'umd'` - 将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。了解更多请查看 [UMD 仓库](https://github.com/umdjs/umd)。

在这个例子中，你需要 `library` 属性来命名你的模块：

```javascript
module.exports = {
  //...
  output: {
    library: 'MyLibrary',
    libraryTarget: 'umd'
  }
};
```

最终输出如下：

```javascript
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports['MyLibrary'] = factory();
  else
    root['MyLibrary'] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
  return _entry_return_; // 此模块返回值，是入口 chunk 返回的值
});
```

注意，省略 `library` 会导致将入口起点返回的所有属性，直接赋值给 root 对象，就像[对象分配章节](#expose-via-object-assignment)。例如：

```javascript
module.exports = {
  //...
  output: {
    libraryTarget: 'umd'
  }
};
```

输出结果如下：

```javascript
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else {
    var a = factory();
    for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(typeof self !== 'undefined' ? self : this, function() {
  return _entry_return_; // 此模块返回值，是入口 chunk 返回的值
});
```

从 webpack 3.1.0 开始，你可以将 `library` 指定为一个对象，用于给每个 target 起不同的名称：

```javascript
module.exports = {
  //...
  output: {
    library: {
      root: 'MyLibrary',
      amd: 'my-library',
      commonjs: 'my-common-library'
    },
    libraryTarget: 'umd'
  }
};
```

模块验证 library。


### 其他 Targets

`libraryTarget: 'jsonp'` - 这将把入口起点的返回值，包裹到一个 jsonp 包装容器中

``` javascript
MyLibrary(_entry_return_);
```

你的 library 的依赖将由 [`externals`](/configuration/externals/) 配置定义。


## `output.path`

`string`

output 目录对应一个__绝对路径__。

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, 'dist/assets')
  }
};
```

注意，`[hash]` 在参数中被替换为编译过程(compilation)的 hash。详细信息请查看[指南 - 缓存](/guides/caching)。


## `output.pathinfo`

`boolean`

告知 webpack 在 bundle 中引入「所包含模块信息」的相关注释。此选项在 `development` [模式](/concepts/mode/)时的默认值是 `true`，而在 `production` [模式](/concepts/mode/)时的默认值是 `false`。

W> 对于在开发环境(development)下阅读生成代码时，虽然通过这些注释可以提供非常有用的数据信息，但在生产环境(production)下，__不应该__ 使用。

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    pathinfo: true
  }
};
```

注意，这些注释也会被添加至经过 tree shaking 后生成的 bundle 中。


## `output.publicPath`

`string: ''` `function`

对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。

此选项指定在浏览器中所引用的「此输出目录对应的__公开 URL__」。相对 URL(relative URL) 会被相对于 HTML 页面（或 `<base>` 标签）解析。相对于服务的 URL(Server-relative URL)，相对于协议的 URL(protocol-relative URL) 或绝对 URL(absolute URL) 也可是可能用到的，或者有时必须用到，例如：当将资源托管到 CDN 时。

该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，__此选项的值都会以 `/` 结束__。

简单规则如下：[`output.path`](#output-path) 中的 URL 以 HTML 页面为基准。

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: 'https://cdn.example.com/assets/'
  }
};
```

对于这个配置：

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    publicPath: '/assets/',
    chunkFilename: '[id].chunk.js'
  }
};
```

对于一个 chunk 请求，看起来像这样 `/assets/4.chunk.js`。

对于一个输出 HTML 的 loader 可能会像这样输出：

```html
<link href="/assets/spinner.gif" />
```

或者在加载 CSS 的一个图片时：

```css
background-image: url(/assets/spinner.gif);
```

webpack-dev-server 也会默认从 `publicPath` 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件。

注意，参数中的 `[hash]` 将会被替换为编译过程(compilation) 的 hash。详细信息请查看[指南 - 缓存](/guides/caching)。

示例：

```javascript
module.exports = {
  //...
  output: {
    // One of the below
    publicPath: 'https://cdn.example.com/assets/', // CDN（总是 HTTPS 协议）
    publicPath: '//cdn.example.com/assets/', // CDN（协议相同）
    publicPath: '/assets/', // 相对于服务(server-relative)
    publicPath: 'assets/', // 相对于 HTML 页面
    publicPath: '../assets/', // 相对于 HTML 页面
    publicPath: '', // 相对于 HTML 页面（目录相同）
  }
};
```

在编译时(compile time)无法知道输出文件的 `publicPath` 的情况下，可以留空，然后在入口文件(entry file)处使用[自由变量(free variable)](https://stackoverflow.com/questions/12934929/what-are-free-variables) `__webpack_public_path__`，以便在运行时(runtime)进行动态设置。

```javascript
__webpack_public_path__ = myRuntimePublicPath;

// 应用程序入口的其他部分
```

有关 `__webpack_public_path__` 的更多信息，请查看[此讨论](https://github.com/webpack/webpack/issues/2776#issuecomment-233208623)。


## `output.sourceMapFilename`

`string`

 此选项会向硬盘写入一个输出文件，只在 [`devtool`](/configuration/devtool) 启用了 SourceMap 选项时才使用。

配置 source map 的命名方式。默认使用 `'[file].map'`。

可以使用 [#output-filename](#output-filename) 中的 `[name]`, `[id]`, `[hash]` 和 `[chunkhash]` 替换符号。除此之外，还可以使用以下替换符号。`[file]` 占位符会被替换为原始文件的文件名。我们建议__只使用 `[file]` 占位符__，因为其他占位符在非 chunk 文件(non-chunk files)生成的 SourceMap 时不起作用。

| 模板 | 描述 |
| -------------------------- | ----------------------------------------------------------------------------------- |
| [file] | 模块文件名称 |
| [filebase] | 模块 [basename](https://nodejs.org/api/path.html#path_path_basename_path_ext) |


## `output.sourcePrefix`

`string`

修改输出 bundle 中每行的前缀。

__webpack.config.js__

```javascript
module.exports = {
  //...
  output: {
    sourcePrefix: '\t'
  }
};
```

注意，默认情况下使用空字符串。使用一些缩进会看起来更美观，但是可能导致多行字符串中的问题。

这里没有必要修改它。


## `output.strictModuleExceptionHandling`

`boolean`

如果一个模块是在 `require` 时抛出异常，告诉 webpack 从模块实例缓存(`require.cache`)中删除这个模块。

出于性能原因，默认为 `false`。

当设置为 `false` 时，该模块不会从缓存中删除，这将造成仅在第一次 `require` 调用时抛出异常（会导致与 node.js 不兼容）。

例如，设想一下 `module.js`：

```javascript
throw new Error('error');
```

将 `strictModuleExceptionHandling` 设置为 `false`，只有第一个 `require` 抛出异常：

```javascript
// with strictModuleExceptionHandling = false
require('module'); // <- 抛出
require('module'); // <- 不抛出
```

相反，将 `strictModuleExceptionHandling` 设置为 `true`，这个模块所有的 `require` 都抛出异常：

```javascript
// with strictModuleExceptionHandling = true
require('module'); // <- 抛出
require('module'); // <- 仍然抛出
```


## `output.umdNamedDefine`

`boolean`

当使用了 `libraryTarget: "umd"`，设置：

```javascript
module.exports = {
  //...
  output: {
    umdNamedDefine: true
  }
};
```

会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 `define`。






# Module 模块

---
title: 模块(module)
sort: 6
contributors:
  - sokra
  - skipjack
  - jouni-kantola
  - jhnns
  - dylanonelson
  - byzyk
  - pnevares
  - fadysamirsadek
  - nerdkid93
  - EugeneHlushko
---

这些选项决定了如何处理项目中的[不同类型的模块](/concepts/modules)。


## `module.noParse`

`RegExp` `[RegExp]` `function(resource)` `string` `[string]`

防止 webpack 解析那些任何与给定正则表达式相匹配的文件。忽略的文件中__不应该含有__ `import`, `require`, `define` 的调用，或任何其他导入机制。忽略大型的 library 可以提高构建性能。

__webpack.config.js__

```javascript
module.exports = {
  //...
  module: {
    noParse: /jquery|lodash/,
  }
};
```

```javascript
module.exports = {
  //...
  module: {
    noParse: (content) => /jquery|lodash/.test(content)
  }
};
```


## `module.rules`

`[Rule]`

创建模块时，匹配请求的[规则](#rule)数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。


## Rule

`object`

每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。


### Rule 条件

条件有两种输入值：

1. resource：请求文件的绝对路径。它已经根据 [`resolve` 规则](/configuration/resolve)解析。

2. issuer: 被请求资源(requested the resource)的模块文件的绝对路径。是导入时的位置。

__例如:__ 从 `app.js` `导入 './style.css'`，resource 是 `/path/to/style.css`. issuer 是 `/path/to/app.js`。

在规则中，属性 [`test`](#rule-test), [`include`](#rule-include), [`exclude`](#rule-exclude) 和 [`resource`](#rule-resource) 对 resource 匹配，并且属性 [`issuer`](#rule-issuer) 对 issuer 匹配。

当使用多个条件时，所有条件都匹配。

W> 小心！resource 是文件的_解析_路径，这意味着符号链接的资源是真正的路径，_而不是_符号链接位置。在使用工具来符号链接包的时候（如 `npm link`）比较好记，像 `/node_modules/` 等常见条件可能会不小心错过符号链接的文件。注意，可以通过 [`resolve.symlinks`](/configuration/resolve#resolve-symlinks) 关闭符号链接解析（以便将资源解析为符号链接路径）。


### Rule 结果

规则结果只在规则条件匹配时使用。

规则有两种输入值：

1. 应用的 loader：应用在 resource 上的 loader 数组。
2. Parser 选项：用于为模块创建解析器的选项对象。

这些属性会影响 loader：[`loader`](#rule-loader), [`options`](#rule-options-rule-query), [`use`](#rule-use)。

也兼容这些属性：[`query`](#rule-options-rule-query), [`loaders`](#rule-loaders)。

[`enforce`](#rule-enforce) 属性会影响 loader 种类。不论是普通的，前置的，后置的 loader。

[`parser`](#rule-parser) 属性会影响 parser 选项。


## 嵌套的 Rule

可以使用属性 [`rules`](#rule-rules) 和 [`oneOf`](#rule-oneof) 指定嵌套规则。

这些规则用于在规则条件(rule condition)匹配时进行取值。


## `Rule.enforce`

`string`

可能的值有：`"pre" | "post"`

指定 loader 种类。没有值表示是普通 loader。

还有一个额外的种类"行内 loader"，loader 被应用在 import/require 行内。

所有一个接一个地进入的 loader，都有两个阶段：

1. __pitching__ 阶段：loader 上的 pitch 方法，按照 `后置(post)、行内(normal)、普通(inline)、前置(pre)` 的顺序调用。更多详细信息，请查看 [ 越过 loader(pitching loader)](/api/loaders/#pitching-loader)。
2. __normal__ 阶段：loader 上的 常规方法，按照 `前置(pre)、行内(normal)、普通(inline)、后置(post)` 的顺序调用。模块源码的转换，发生在这个阶段。

所有普通 loader 可以通过在请求中加上 `!` 前缀来忽略（覆盖）。

所有普通和前置 loader 可以通过在请求中加上 `-!` 前缀来忽略（覆盖）。

所有普通，后置和前置 loader 可以通过在请求中加上 `!!` 前缀来忽略（覆盖）。

不应该使用行内 loader 和 `!` 前缀，因为它们是非标准的。它们可在由 loader 生成的代码中使用。


## `Rule.exclude`

`Rule.exclude` 是 `Rule.resource.exclude` 的简写。如果你提供了 `Rule.exclude` 选项，就不能再提供 `Rule.resource`。详细请查看 [`Rule.resource`](#rule-resource) 和 [`Condition.exclude`](#条件)。


## `Rule.include`

`Rule.include` 是 `Rule.resource.include` 的简写。如果你提供了 `Rule.include` 选项，就不能再提供 `Rule.resource`。详细请查看 [`Rule.resource`](#rule-resource) 和 [`Condition.include`](#条件)。


## `Rule.issuer`

一个[`条件`](#条件)，用来与被发布的 request 对应的模块项匹配。在以下示例中，a.js request 的`发布者(issuer)`是 index.js 文件的路径。

__index.js__

```javascript
import A from './a.js';
```

这个选项可以用来将 loader 应用到一个特定模块或一组模块的依赖中。


## `Rule.loader`

`Rule.loader` 是 `Rule.use: [ { loader } ]` 的简写。详细请查看 [`Rule.use`](#rule-use) 和 [`UseEntry.loader`](#useentry)。


## `Rule.loaders`

W> 由于需要支持 `Rule.use`，此选项__已废弃__。

`Rule.loaders` 是 `Rule.use` 的别名。详细请查看 [`Rule.use`](#rule-use)。


## `Rule.oneOf`

[`规则`](#rule)数组，当规则匹配时，只使用第一个匹配规则。

__webpack.config.js__

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /inline/, // foo.css?inline
            use: 'url-loader'
          },
          {
            resourceQuery: /external/, // foo.css?external
            use: 'file-loader'
          }
        ]
      }
    ]
  }
};
```

## `Rule.options / Rule.query`

`Rule.options` 和 `Rule.query` 是 `Rule.use: [ { options } ]` 的简写。详细请查看 [`Rule.use`](#rule-use) 和 [`UseEntry.options`](#useentry)。

W> 由于需要支持 `Rule.options` 和 `UseEntry.options`，`Rule.use`，`Rule.query` 已废弃。


## `Rule.parser`

解析选项对象。所有应用的解析选项都将合并。

解析器(parser)可以查阅这些选项，并相应地禁用或重新配置。大多数默认插件，会如下解释值：

- 将选项设置为 `false`，将禁用解析器。
- 将选项设置为 `true`，或不修改将其保留为 `undefined`，可以启用解析器。

然而，一些解析器(parser)插件可能不光只接收一个布尔值。例如，内部的 `NodeStuffPlugin` 差距，可以接收一个对象，而不是 `true`，来为特定的规则添加额外的选项。

__示例__（默认的插件解析器选项）：

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        parser: {
          amd: false, // 禁用 AMD
          commonjs: false, // 禁用 CommonJS
          system: false, // 禁用 SystemJS
          harmony: false, // 禁用 ES2015 Harmony import/export
          requireInclude: false, // 禁用 require.include
          requireEnsure: false, // 禁用 require.ensure
          requireContext: false, // 禁用 require.context
          browserify: false, // 禁用特殊处理的 browserify bundle
          requireJs: false, // 禁用 requirejs.*
          node: false, // 禁用 __dirname, __filename, module, require.extensions, require.main 等。
          node: {...} // 在模块级别(module level)上重新配置 [node](/configuration/node) 层(layer)
        }
      }
    ]
  }
}
```


## `Rule.resource`

[`条件`](#条件)会匹配 resource。既可以提供 `Rule.resource` 选项，也可以使用快捷选项 `Rule.test`，`Rule.exclude` 和 `Rule.include`。在 [`Rule` 条件](#rule-conditions) 中查看详细。


## `Rule.resourceQuery`

A [`Condition`](#条件) matched with the resource query. This option is used to test against the query section of a request string (i.e. from the question mark onwards). If you were to `import Foo from './foo.css?inline'`, the following condition would match:

__webpack.config.js__

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        resourceQuery: /inline/,
        use: 'url-loader'
      }
    ]
  }
};
```


## `Rule.rules`

[`规则`](#rule)数组，当规则匹配时使用。


## `Rule.sideEffects`

`bool`

标示出模块的哪些部分包含外部作用(side effect)。更多详细信息，请查看 [tree shaking](/guides/tree-shaking/#mark-the-file-as-side-effect-free)。


## `Rule.test`

`Rule.test` 是 `Rule.resource.test` 的简写。如果你提供了一个 `Rule.test` 选项，就不能再提供 `Rule.resource`。详细请查看 [`Rule.resource`](#rule-resource) 和 [`Condition.test`](#条件)。


## `Rule.type`

`string`

Possible values: `'javascript/auto' | 'javascript/dynamic' | 'javascript/esm' | 'json' | 'webassembly/experimental'`

`Rule.type` sets the type for a matching module. This prevents defaultRules and their default importing behaviors from occurring. For example, if you want to load a `.json` file through a custom loader, you'd need to set the `type` to `javascript/auto` to bypass webpack's built-in json importing. (See [v4.0 changelog](https://github.com/webpack/webpack/releases/tag/v4.0.0) for more details)

__webpack.config.js__

```javascript
module.exports = {
  //...
  module: {
    rules: [
      //...
      {
        test: /\.json$/,
        type: 'javascript/auto',
        loader: 'custom-json-loader'
      }
    ]
  }
};
```


## `Rule.use`

`[UseEntry]` `function(info)`

__`[UseEntry]`__

`Rule.use` 可以是一个应用于模块的 [UseEntries](#useentry) 数组。每个入口(entry)指定使用一个 loader。

传递字符串（如：`use: [ 'style-loader' ]`）是 loader 属性的简写方式（如：`use: [ { loader: 'style-loader'} ]`）。

Loaders can be chained by passing multiple loaders, which will be applied from right to left (last to first configured).

__webpack.config.js__

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true
            }
          }
        ]
      }
    ]
  }
};
```

__`function(info)`__

`Rule.use` can also be a function which receives the object argument describing the module being loaded, and must return an array of `UseEntry` items.

The `info` object parameter has the following fields:

- `compiler`: The current webpack compiler (can be undefined)
- `issuer`: The path to the module that is importing the module being loaded
- `realResource`: Always the path to the module being loaded
- `resource`: The path to the module being loaded, it is usually equal to `realResource` except when the resource name is overwritten via `!=!` in request string

The same shortcut as an array can be used for the return value (i.e. `use: [ 'style-loader' ]`).

__webpack.config.js__

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        use: (info) => ([
          {
            loader: 'custom-svg-loader'
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{
                cleanupIDs: { prefix: basename(info.resource) }
              }]
            }
          }
        ])
      }
    ]
  }
};
```

详细信息请查看 [UseEntry](#useentry)。


## `条件`

条件可以是这些之一：

- 字符串：匹配输入必须以提供的字符串开始。是的。目录绝对路径或文件绝对路径。
- 正则表达式：test 输入值。
- 函数：调用输入的函数，必须返回一个真值(truthy value)以匹配。
- 条件数组：至少一个匹配条件。
- 对象：匹配所有属性。每个属性都有一个定义行为。

`{ test: Condition }`：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。

`{ include: Condition }`：匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。

`{ exclude: Condition }`：排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。

`{ and: [Condition] }`：必须匹配数组中的所有条件

`{ or: [Condition] }`：匹配数组中任何一个条件

`{ not: [Condition] }`：必须排除这个条件

__示例：__

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'app/styles'),
          path.resolve(__dirname, 'vendor/styles')
        ]
      }
    ]
  }
};
```


## `UseEntry`

`object` `function(info)`

__`object`__

必须有一个 `loader` 属性是字符串。它使用 loader 解析选项（[resolveLoader](/configuration/resolve#resolveloader)），相对于配置中的 [`context`](/configuration/entry-context#context) 来解析。

可以有一个 `options` 属性为字符串或对象。值可以传递到 loader 中，将其理解为 loader 选项。

由于兼容性原因，也可能有 `query` 属性，它是 `options` 属性的别名。使用 `options` 属性替代。

注意，webpack 需要生成资源和所有 loader 的独立模块标识，包括选项。它尝试对选项对象使用 `JSON.stringify`。这在 99.9% 的情况下是可以的，但是如果将相同的 loader 应用于相同资源的不同选项，并且选项具有一些带字符的值，则可能不是唯一的。

如果选项对象不被字符化（例如循环 JSON），它也会中断。因此，你可以在选项对象使用 `ident` 属性，作为唯一标识符。

__webpack.config.js__

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }
    ]
  }
};
```

__`function(info)`__

A `UseEntry` can also be a function which receives the object argument describing the module being loaded, and must return an options object. This can be used to vary the loader options on a per-module basis.

The `info` object parameter has the following fields:

- `compiler`: The current webpack compiler (can be undefined)
- `issuer`: The path to the module that is importing the module being loaded
- `realResource`: Always the path to the module being loaded
- `resource`: The path to the module being loaded, it is usually equal to `realResource` except when the resource name is overwritten via `!=!` in request string

__webpack.config.js__

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'svgs'
        }
      },
      (info) => ({
        loader: 'svgo-loader',
        options: {
          plugins: [{
            cleanupIDs: { prefix: basename(info.resource) }
          }]
        }
      })
    ]
  }
};
```


## 模块上下文(module context)

> 避免使用这些选项，因为它们__已废弃__，并将很快删除。

这些选项描述了当遇到动态依赖时，创建上下文的默认设置。

例如，`未知的(unknown)` 动态依赖：`require`。

例如，`表达式(expr)` 动态依赖：`require(expr)`。

例如，`包裹的(wrapped)` 动态依赖：`require('./templates/' + expr)`。

以下是其[默认值](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js)的可用选项

__webpack.config.js__

```javascript
module.exports = {
  //...
  module: {
    exprContextCritical: true,
    exprContextRecursive: true,
    exprContextRegExp: false,
    exprContextRequest: '.',
    unknownContextCritical: true,
    unknownContextRecursive: true,
    unknownContextRegExp: false,
    unknownContextRequest: '.',
    wrappedContextCritical: false,
    wrappedContextRecursive: true,
    wrappedContextRegExp: /.*/,
    strictExportPresence: false // since webpack 2.3.0
  }
};
```

T> 你可以使用 `ContextReplacementPlugin` 来修改这些单个依赖的值。这也会删除警告。

几个用例：

- 动态依赖的警告：`wrappedContextCritical: true`。
- `require(expr)` 应该包含整个目录：`exprContextRegExp: /^\.\//`
- `require("./templates/" + expr)` 不应该包含默认子目录：`wrappedContextRecursive: false`
- `strictExportPresence` makes missing exports an error instead of warning







# Plugins 插件
https://www.webpackjs.com/configuration/plugins/
https://www.webpackjs.com/plugins/

---
title: 插件(plugins)
sort: 8
contributors:
  - sokra
  - skipjack
  - yatharthk
  - byzyk
  - EugeneHlushko
---

`plugins` 选项用于以各种方式自定义 webpack 构建过程。webpack 附带了各种内置插件，可以通过 `webpack.[plugin-name]` 访问这些插件。请查看 [插件页面](/plugins) 获取插件列表和对应文档，但请注意这只是其中一部分，社区中还有许多插件。

T> 注意：本页面仅讨论使用插件，如果你有兴趣编写自己的插件，请访问 [编写一个插件](/contribute/writing-a-plugin/) 页面。


## `plugins`

[`[Plugin]`](/plugins/)

一组 webpack 插件。例如，[`DefinePlugin`](/plugins/define-plugin/) 允许你创建可在编译时配置的全局常量。这对需要再开发环境构建和生产环境构建之间产生不同行为来说非常有用。

__webpack.config.js__

```js
module.exports = {
  //...
  plugins: [
    new webpack.DefinePlugin({
      // Definitions...
    })
  ]
};
```

一个复杂示例，使用多个插件，可能看起来就像这样：

__webpack.config.js__

```js
var webpack = require('webpack');
// 导入非 webpack 自带默认插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

// 在配置中添加插件
module.exports = {
  //...
  plugins: [
    new ExtractTextPlugin({
      filename: 'build.min.css',
      allChunks: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // 编译时(compile time)插件
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    // webpack-dev-server 强化插件
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
```

## html-webpack-inline-source-plugin

将打包好的 js 代码 inline 进 html，html-webpack-plugin 的配置里有 inlineSource: '.(js|css)'

这就是告诉 html-webpack-inline-source-plugin 需要将打包好的代码 inline 进 html 里，插件需要添加到 html-webpack-plugin 的配置后

	plugins: [
	    new MiniCssExtractPlugin({
	        filename: 'css/[hash].css'
	    })
	].concat(htmlPluginArray).concat([
	    new HtmlWebpackInlineSourcePlugin()
	])

但是 html-webpack-inline-source-plugin 也仅能将打包后输出的 js 文件引入 html，若你想将 html 码其他使用 script 标签加载的 js 文件或者 style 标签加载的 css 文件也 inline 进 html 里的话，html-webpack-inline-source-plugin 并不能实现。从 html-webpack-plugin 里的 Issues 来看，html-webpack-plugin 的作者也无意做这样的事情，但也给出了建议，可以借助 html-webpack-plugin 插件的 hooks html-webpack-plugin-before-html-processing 达到我们需要的效果。




# Authoring Libraries 发行模块
https://webpack.js.org/guides/author-libraries/#root

Aside from applications, webpack can also be used to bundle JavaScript libraries. The following guide is meant for library authors looking to streamline their bundling strategy.

## Authoring a Library

Let's assume that you are writing a small library ,webpack-numbers, that allows users to convert the numbers 1 through 5 from their numeric representation to a textual one and vice-versa, e.g. 2 to 'two'.

The basic project structure may look like this:

project

	+  |- webpack.config.js
	+  |- package.json
	+  |- /src
	+    |- index.js
	+    |- ref.json

Initialize npm, install webpack and lodash:

	npm init -y
	npm install --save-dev webpack lodash

src/ref.json

	[
	  {
	    "num": 1,
	    "word": "One"
	  },
	  {
	    "num": 2,
	    "word": "Two"
	  },
	  {
	    "num": 3,
	    "word": "Three"
	  },
	  {
	    "num": 4,
	    "word": "Four"
	  },
	  {
	    "num": 5,
	    "word": "Five"
	  },
	  {
	    "num": 0,
	    "word": "Zero"
	  }
	]

src/index.js

	import _ from 'lodash';
	import numRef from './ref.json';

	export function numToWord(num) {
	  return _.reduce(numRef, (accum, ref) => {
	    return ref.num === num ? ref.word : accum;
	  }, '');
	}

	export function wordToNum(word) {
	  return _.reduce(numRef, (accum, ref) => {
	    return ref.word === word && word.toLowerCase() ? ref.num : accum;
	  }, -1);
	}

The usage specification for the library use will be as follows:

ES2015 module import:

	import * as webpackNumbers from 'webpack-numbers';
	// ...
	webpackNumbers.wordToNum('Two');

CommonJS module require:

	const webpackNumbers = require('webpack-numbers');
	// ...
	webpackNumbers.wordToNum('Two');

AMD module require:

	require(['webpackNumbers'], function (webpackNumbers) {
	  // ...
	  webpackNumbers.wordToNum('Two');
	});

The consumer also can use the library by loading it via a script tag:

	<!doctype html>
	<html>
	  ...
	  <script src="https://unpkg.com/webpack-numbers"></script>
	  <script>
	    // ...
	    // Global variable
	    webpackNumbers.wordToNum('Five')
	    // Property in the window object
	    window.webpackNumbers.wordToNum('Five')
	    // ...
	  </script>
	</html>

Note that we can also configure it to expose the library in the following ways:

Property in the global object, for node.
Property in the this object.
For full library configuration and code please refer to webpack-library-example.

## Base Configuration
Now let's bundle this library in a way that will achieve the following goals:

Using externals to avoid bundling lodash, so the consumer is required to load it.
Setting the library name as webpack-numbers.
Exposing the library as a variable called webpackNumbers.
Being able to access the library inside Node.js.
Also, the consumer should be able to access the library in the following ways:

ES2015 module. i.e. import webpackNumbers from 'webpack-numbers'.
CommonJS module. i.e. require('webpack-numbers').
Global variable when included through script tag.
We can start with this basic webpack configuration:

webpack.config.js

	const path = require('path');

	module.exports = {
	  entry: './src/index.js',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'webpack-numbers.js',
	  },
	};

## Externalize Lodash

Now, if you run webpack, you will find that a largish bundle is created. If you inspect the file, you'll see that lodash has been bundled along with your code. In this case, we'd prefer to treat lodash as a peerDependency. Meaning that the consumer should already have lodash installed. Hence you would want to give up control of this external library to the consumer of your library.

This can be done using the externals configuration:

webpack.config.js

	  const path = require('path');

	  module.exports = {
	    entry: './src/index.js',
	    output: {
	      path: path.resolve(__dirname, 'dist'),
	      filename: 'webpack-numbers.js',
	    },
	+   externals: {
	+     lodash: {
	+       commonjs: 'lodash',
	+       commonjs2: 'lodash',
	+       amd: 'lodash',
	+       root: '_',
	+     },
	+   },
	  };

This means that your library expects a dependency named lodash to be available in the consumer's environment.

Note that if you only plan on using your library as a dependency in another webpack bundle, you may specify externals as an array.

## External Limitations
For libraries that use several files from a dependency:

	import A from 'library/one';
	import B from 'library/two';

	// ...

You won't be able to exclude them from the bundle by specifying library in the externals. You'll either need to exclude them one by one or by using a regular expression.

	module.exports = {
	  //...
	  externals: [
	    'library/one',
	    'library/two',
	    // Everything that starts with "library/"
	    /^library\/.+$/,
	  ],
	};

## Expose the Library
For widespread use of the library, we would like it to be compatible in different environments, i.e. CommonJS, AMD, Node.js and as a global variable. To make your library available for consumption, add the library property inside output:

webpack.config.js

	  const path = require('path');

	  module.exports = {
	    entry: './src/index.js',
	    output: {
	      path: path.resolve(__dirname, 'dist'),
	      filename: 'webpack-numbers.js',
	+     library: 'webpackNumbers',
	    },
	    externals: {
	      lodash: {
	        commonjs: 'lodash',
	        commonjs2: 'lodash',
	        amd: 'lodash',
	        root: '_',
	      },
	    },
	  };

Note that the library setup is tied to the entry configuration. For most libraries, specifying a single entry point is sufficient. While multi-part libraries are possible, it is simpler to expose partial exports through an index script that serves as a single entry point. Using an array as an entry point for a library is not recommended.

This exposes your library bundle available as a global variable named webpackNumbers when imported. To make the library compatible with other environments, add libraryTarget property to the config. This will add various options about how the library can be exposed.

webpack.config.js

	  const path = require('path');

	  module.exports = {
	    entry: './src/index.js',
	    output: {
	      path: path.resolve(__dirname, 'dist'),
	      filename: 'webpack-numbers.js',
	      library: 'webpackNumbers',
	+     libraryTarget: 'umd',
	    },
	    externals: {
	      lodash: {
	        commonjs: 'lodash',
	        commonjs2: 'lodash',
	        amd: 'lodash',
	        root: '_',
	      },
	    },
	  };

You can expose the library in the following ways:

Variable: as a global variable made available by a script tag (libraryTarget:'var').
This: available through the this object (libraryTarget:'this').
Window: available through the window object, in the browser (libraryTarget:'window').
UMD: available after AMD or CommonJS require (libraryTarget:'umd').
If library is set and libraryTarget is not, libraryTarget defaults to var as specified in the output configuration documentation. See output.libraryTarget there for a detailed list of all available options.

With webpack 3.5.5, using `libraryTarget: { root:'_' }` doesn't work properly (as stated in issue 4824). However, you can set `libraryTarget: { var: '_' }` to expect the library as a global variable.

## Final Steps

Optimize your output for production by following the steps mentioned in the production guide. Let's also add the path to your generated bundle as the package's main field in with the package.json

package.json

	{
	  ...
	  "main": "dist/webpack-numbers.js",
	  ...
	}

Or, to add it as a standard module as per this guide:

	{
	  ...
	  "module": "src/index.js",
	  ...
	}

The key main refers to the standard from package.json, and module to a proposal to allow the JavaScript ecosystem upgrade to use ES2015 modules without breaking backwards compatibility.

The module property should point to a script that utilizes ES2015 module syntax but no other syntax features that aren't yet supported by browsers or node. This enables webpack to parse the module syntax itself, allowing for lighter bundles via tree shaking if users are only consuming certain parts of the library.

Now you can publish it as an npm package and find it at unpkg.com to distribute it to your users.

To expose stylesheets associated with your library, the MiniCssExtractPlugin should be used. Users can then consume and load these as they would any other stylesheet.


# Targets 构建目标
https://github.com/docschina/webpack.js.org/blob/cn/src/content/configuration/target.md

---
title: 构建目标(targets)
sort: 11
contributors:
  - juangl
  - sokra
  - skipjack
  - SpaceK33z
  - pastelsky
  - tbroadley
  - byzyk
  - EugeneHlushko
---

webpack 能够为多种环境或 _target_ 构建编译。想要理解什么是 `target` 的详细信息，请阅读 [target 概念页面](/concepts/targets/)。

## `target`

`string | function (compiler)`

告知 webpack 为目标(target)指定一个环境。


### `string`

通过 [`WebpackOptionsApply`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsApply.js) ，可以支持以下字符串值：

选项                | 描述
--------------------- | -----------------------
`async-node`          | 编译为类 Node.js 环境可用（使用 fs 和 vm 异步加载分块）
`electron-main`       | 编译为 [Electron](https://electronjs.org/) 主进程。
`electron-renderer`   | 编译为 [Electron](https://electronjs.org/) 渲染进程，使用 `JsonpTemplatePlugin`, `FunctionModulePlugin` 来为浏览器环境提供目标，使用 `NodeTargetPlugin` 和 `ExternalsPlugin` 为 CommonJS 和 Electron 内置模块提供目标。
`node`                | 编译为类 Node.js 环境可用（使用 Node.js `require` 加载 chunk）
`node-webkit`         | 编译为 Webkit 可用，并且使用 jsonp 去加载分块。支持 Node.js 内置模块和 [`nw.gui`](http://docs.nwjs.io/en/latest/) 导入（实验性质）
`web`                 | 编译为类浏览器环境里可用__（默认）__
`webworker`           | 编译成一个 WebWorker

例如，当 `target` 设置为 `"electron-main"`，webpack 引入多个 electron 特定的变量。有关使用哪些模板和 externals 的更多信息，你可以 [直接参考 webpack 源码](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsApply.js#L70-L185)。


### `function`

如果传入一个函数，此函数调用时会传入一个 compiler 作为参数。如果以上列表中没有一个预定义的目标(target)符合你的要求，请将其设置为一个函数。

例如，如果你不需要使用以上任何插件：

```js
const options = {
  target: () => undefined
};
```

或者可以使用你想要指定的插件

```js
const webpack = require('webpack');

const options = {
  target: (compiler) => {
    compiler.apply(
      new webpack.JsonpTemplatePlugin(options.output),
      new webpack.LoaderTargetPlugin('web')
    );
  }
};
```



# Externals 外部扩展
https://www.webpackjs.com/configuration/externals/
https://webpack.js.org/configuration/externals/
https://raw.githubusercontent.com/docschina/webpack.js.org/cn/src/content/configuration/externals.md
Webpack externals 深入理解 https://segmentfault.com/a/1190000012113011?utm_source=tag-newest

---
title: 外部扩展(externals)
sort: 13
contributors:
  - sokra
  - skipjack
  - pksjce
  - fadysamirsadek
  - byzyk
  - zefman
---

`externals` 配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。此功能通常对 **library 开发人员** 来说是最有用的，然而也会有各种各样的应用程序用到它。

T> **用户(consumer)**，在这里是指，引用了「使用 webpack 打包的 library」的所有终端用户的应用程序(end user application)。


## `externals`

`string` `object` `function`  `regex`

**防止**将某些 `import` 的包(package)**打包**到 bundle 中，而是在运行时(runtime)再去从外部获取这些**扩展依赖(external dependencies)**。

例如，从 CDN 引入 [jQuery](https://jquery.com/)，而不是把它打包：

__index.html__

``` html
<script
  src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous">
</script>
```

__webpack.config.js__

```javascript
module.exports = {
  //...
  externals: {
    jquery: 'jQuery'
  }
};
```

这样就剥离了那些不需要改动的依赖模块，换句话，下面展示的代码还可以正常运行：

```javascript
import $ from 'jquery';

$('.my-element').animate(/* ... */);
```

具有外部依赖(external dependency)的 bundle 可以在各种模块上下文(module context)中使用，例如 [CommonJS, AMD, 全局变量和 ES2015 模块](/concepts/modules)。外部 library 可能是以下任何一种形式：

- __root__：可以通过一个全局变量访问 library（例如，通过 script 标签）。
- __commonjs__：可以将 library 作为一个 CommonJS 模块访问。
- __commonjs2__：和上面的类似，但导出的是 `module.exports.default`.
- __amd__：类似于 `commonjs`，但使用 AMD 模块系统。

可以接受各种语法……


### string

请查看上面的例子。属性名称是 `jquery`，表示应该排除 `import $ from 'jquery'` 中的 `jquery` 模块。为了替换这个模块，`jQuery` 的值将被用来检索一个全局的 `jQuery` 变量。换句话说，当设置为一个字符串时，它将被视为`全局的`（定义在上面和下面）。


### array

```javascript
module.exports = {
  //...
  externals: {
    subtract: ['./math', 'subtract']
  }
};
```

`subtract: ['./math', 'subtract']` 转换为父子结构，其中 `./math` 是父模块，而 bundle 只引用 `subtract` 变量下的子集。


### object

W> An object with `{ root, amd, commonjs, ... }` is only allowed for [`libraryTarget: 'umd'`](/configuration/output/#output-librarytarget). It's not allowed for other library targets.

```javascript
module.exports = {
  //...
  externals : {
    react: 'react'
  },

  // 或者

  externals : {
    lodash : {
      commonjs: 'lodash',
      amd: 'lodash',
      root: '_' // 指向全局变量
    }
  },

  // 或者

  externals : {
    subtract : {
      root: ['math', 'subtract']
    }
  }
};
```

此语法用于描述外部 library 所有可用的访问方式。这里 `lodash` 这个外部 library 可以在 AMD 和 CommonJS 模块系统中通过 `lodash` 访问，但在全局变量形式下用 `_` 访问。`subtract` 可以通过全局 `math` 对象下的属性 `subtract` 访问（例如 `window['math']['subtract']`）。


### function

对于 webpack 外部化，通过定义函数来控制行为，可能会很有帮助。例如，[webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals) 能够排除 `node_modules` 目录中所有模块，还提供一些选项，比如白名单 package(whitelist package)。

基本配置如下：

```javascript
module.exports = {
  //...
  externals: [
    function(context, request, callback) {
      if (/^yourregex$/.test(request)){
        return callback(null, 'commonjs ' + request);
      }
      callback();
    }
  ]
};
```

`'commonjs'+ request` 定义了需要外部化的模块类型。


### regex

匹配给定正则表达式的每个依赖，都将从输出 bundle 中排除。

```javascript
module.exports = {
  //...
  externals: /^(jquery|\$)$/i
};
```

这个示例中，所有名为 `jQuery` 的依赖（忽略大小写），或者 `$`，都会被外部化。

### Combining syntaxes

Sometimes you may want to use a combination of the above syntaxes. This can be done in the following manner:

```javascript
module.exports = {
  //...
  externals: [
    {
      // String
      react: 'react',
      // Object
      lodash : {
        commonjs: 'lodash',
        amd: 'lodash',
        root: '_' // indicates global variable
      },
      // Array
      subtract: ['./math', 'subtract']
    },
    // Function
    function(context, request, callback) {
      if (/^yourregex$/.test(request)){
        return callback(null, 'commonjs ' + request);
      }
      callback();
    },
    // Regex
    /^(jquery|\$)$/i
  ]
};
```

关于如何使用此 externals 配置的更多信息，请参考[如何编写 library](/guides/author-libraries)。





# Loaders 加载器
https://github.com/docschina/webpack.js.org/tree/cn/src/content/loaders/index.md
https://www.webpackjs.com/loaders/

---
title: loader
sort: 1
contributors:
  - simon04
  - bajras
  - rhys-vdw
  - EugeneHlushko
  - hemal7735
---

webpack 可以使用 [loader](/concepts/loaders) 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源。你可以使用 Node.js 来很简单地编写自己的 loader。

loader 通过在 `require()` 语句中使用 `loadername!` 前缀来激活，或者通过 webpack 配置中的正则表达式来自动应用 - 查看[配置](/concepts/loaders#configuration)。


## 文件

- [`raw-loader`](/loaders/raw-loader) 加载文件原始内容（utf-8）
- [`val-loader`](/loaders/val-loader) 将代码作为模块执行，并将 exports 转为 JS 代码
- [`url-loader`](/loaders/url-loader) 像 file loader 一样工作，但如果文件小于限制，可以返回 [data URL](https://tools.ietf.org/html/rfc2397)
- [`file-loader`](/loaders/file-loader) 将文件发送到输出文件夹，并返回（相对）URL
- [`ref-loader`](https://www.npmjs.com/package/ref-loader) 手动创建所有文件之间的依赖关系


## JSON

- [`json-loader`](/loaders/json-loader) 加载 [JSON](http://json.org/) 文件（默认包含）
- [`json5-loader`](/loaders/json5-loader) 加载和转译 [JSON 5](https://json5.org/) 文件
- `cson-loader` 加载和转译 [CSON](https://github.com/awnist/cson-loader) 文件


## 转译(transpiling)

- [`script-loader`](/loaders/script-loader) 在全局上下文中执行一次 JavaScript 文件（如在 script 标签），不需要解析
- [`babel-loader`](/loaders/babel-loader) 加载 ES2015+ 代码，然后使用 [Babel](https://babel.docschina.org/) 转译为 ES5
- [`buble-loader`](https://github.com/sairion/buble-loader) 使用 [Bublé](https://buble.surge.sh/guide/) 加载 ES2015+ 代码，并且将代码转译为 ES5
- [`traceur-loader`](https://github.com/jupl/traceur-loader) 加载 ES2015+ 代码，然后使用 [Traceur](https://github.com/google/traceur-compiler#readme) 转译为 ES5
- [`ts-loader`](https://github.com/TypeStrong/ts-loader) 或 [`awesome-typescript-loader`](https://github.com/s-panferov/awesome-typescript-loader) 像 JavaScript 一样加载 [TypeScript](https://www.typescriptlang.org/) 2.0+
- [`coffee-loader`](/loaders/coffee-loader) 像 JavaScript 一样加载 [CoffeeScript](http://coffeescript.org/)
- [`fengari-loader`](https://github.com/fengari-lua/fengari-loader/) 使用 [fengari](https://fengari.io/) 加载 Lua 代码


## 模板(templating)

- [`html-loader`](/loaders/html-loader) 导出 HTML 为字符串，需要引用静态资源
- [`pug-loader`](https://github.com/pugjs/pug-loader) 加载 Pug 模板并返回一个函数
- [`markdown-loader`](https://github.com/peerigon/markdown-loader) 将 Markdown 转译为 HTML
- [`react-markdown-loader`](https://github.com/javiercf/react-markdown-loader) 使用 markdown-parse parser(解析器) 将 Markdown 编译为 React 组件
- [`posthtml-loader`](https://github.com/posthtml/posthtml-loader) 使用 [PostHTML](https://github.com/posthtml/posthtml) 加载并转换 HTML 文件
- [`handlebars-loader`](https://github.com/pcardune/handlebars-loader) 将 Handlebars 转移为 HTML
- [`markup-inline-loader`](https://github.com/asnowwolf/markup-inline-loader) 将内联的 SVG/MathML 文件转换为 HTML。在应用于图标字体，或将 CSS 动画应用于 SVG 时非常有用。
- [`twig-loader`](https://github.com/zimmo-be/twig-loader) 编译 Twig 模板，然后返回一个函数

## 样式

- [`style-loader`](/loaders/style-loader) 将模块的导出作为样式添加到 DOM 中
- [`css-loader`](/loaders/css-loader) 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
- [`less-loader`](/loaders/less-loader) 加载和转译 LESS 文件
- [`sass-loader`](/loaders/sass-loader) 加载和转译 SASS/SCSS 文件
- [`postcss-loader`](/loaders/postcss-loader) 使用 [PostCSS](http://postcss.org) 加载和转译 CSS/SSS 文件
- [`stylus-loader`](https://github.com/shama/stylus-loader) 加载和转译 Stylus 文件


## 代码检查和测试(linting && testing)

- [`mocha-loader`](/loaders/mocha-loader) 使用 [mocha](https://mochajs.org/) 测试（浏览器/NodeJS）
- [`eslint-loader`](https://github.com/webpack-contrib/eslint-loader) PreLoader，使用 [ESLint](https://eslint.org/) 清理代码
- [`jshint-loader`](/loaders/jshint-loader) PreLoader，使用 [JSHint](http://jshint.com/about/) 清理代码
- [`jscs-loader`](https://github.com/unindented/jscs-loader) PreLoader，使用 [JSCS](http://jscs.info/) 检查代码样式
- [`coverjs-loader`](/loaders/coverjs-loader) PreLoader，使用 [CoverJS](https://github.com/arian/CoverJS) 确定测试覆盖率


## 框架(frameworks)

- [`vue-loader`](https://github.com/vuejs/vue-loader) 加载和转译 [Vue 组件](https://vuejs.org/v2/guide/components.html)
- [`polymer-loader`](https://github.com/webpack-contrib/polymer-webpack-loader) 使用选择预处理器(preprocessor)处理，并且 `require()` 类似一等模块(first-class)的 Web 组件
- [`angular2-template-loader`](https://github.com/TheLarkInn/angular2-template-loader) 加载和转译 [Angular](https://angular.io/) 组件


![Awesome](../assets/awesome-badge.svg)
更多第三方 loader，查看 [awesome-webpack](https://github.com/webpack-contrib/awesome-webpack#loaders) 列表。


# babel-loader

---
title: babel-loader
source: https://raw.githubusercontent.com/babel/babel-loader/master/README.md
edit: https://github.com/babel/babel-loader/edit/master/README.md
repo: https://github.com/babel/babel-loader
---



此 package 允许你使用 [Babel](https://github.com/babel/babel) 和 [webpack](https://github.com/webpack/webpack) 转译 `JavaScript` 文件。

**注意**：请在 Babel [Issues](https://github.com/babel/babel/issues) tracker 上报告输出时遇到的问题。

## 中文文档

<a href="https://babel.docschina.org" target="_blank" style="font-size: 24px;">Babel 中文文档</a>

## 安装

> webpack 4.x | babel-loader 8.x | babel 7.x

```bash
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

## 用法

webpack 文档：[loaders](https://webpack.js.org/loaders/)

在 webpack 配置对象中，需要将 babel-loader 添加到 module 列表中，就像下面这样：

```javascript
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

## 选项

查看 `babel` [选项](https://babel.docschina.org/docs/en/options)。

你可以使用 [`options`](https://webpack.js.org/configuration/module/#rule-options-rule-query) 属性，来向 loader 传递 options 选项：

```javascript
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    }
  ]
}
```

此 loader 也支持下面这些 loader 特有的选项：

* `cacheDirectory`：默认值为 `false`。当有设置时，指定的目录将用来缓存 loader 的执行结果。之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)。如果设置了一个空值 (`loader: 'babel-loader?cacheDirectory'`) 或者 `true` (`loader: 'babel-loader?cacheDirectory=true'`)，loader 将使用默认的缓存目录 `node_modules/.cache/babel-loader`，如果在任何根目录下都没有找到 `node_modules` 目录，将会降级回退到操作系统默认的临时文件目录。

* `cacheIdentifier`：默认是由 `@babel/core` 版本号，`babel-loader` 版本号，`.babelrc` 文件内容（存在的情况下），环境变量 `BABEL_ENV` 的值（没有时降级到 `NODE_ENV`）组成的一个字符串。可以设置为一个自定义的值，在 identifier 改变后，来强制缓存失效。

* `cacheCompression`：默认值为 `true`。当设置此值时，会使用 Gzip 压缩每个 Babel transform 输出。如果你想要退出缓存压缩，将它设置为 `false` -- 如果你的项目中有数千个文件需要压缩转译，那么设置此选项可能会从中收益。

* `customize`: 默认值为 `null`。导出 `custom` 回调函数的模块路径，[例如传入 `.custom()` 的 callback 函数](#自定义-loader)。由于你必须创建一个新文件才能使用它，建议改为使用 `.custom` 来创建一个包装 loader。只有在你_必须_继续直接使用 `babel-loader` 但又想自定义的情况下，才使用这项配置。

## 疑难解答

### babel-loader 很慢！

确保转译尽可能少的文件。你可能使用 `/\.m?js$/` 来匹配，这样也许会去转译 `node_modules` 目录或者其他不需要的源代码。

要排除 `node_modules`，参考文档中的 `loaders` 配置的 `exclude` 选项。

你也可以通过使用 `cacheDirectory` 选项，将 babel-loader 提速至少两倍。这会将转译的结果缓存到文件系统中。

### Babel 在每个文件都插入了辅助代码，使代码体积过大！

Babel 对一些公共方法使用了非常小的辅助代码，比如 `_extend`。默认情况下会被添加到每一个需要它的文件中

你可以引入 Babel runtime 作为一个独立模块，来避免重复引入。

下面的配置禁用了 Babel 自动对每个文件的 runtime 注入，而是引入 `@babel/plugin-transform-runtime` 并且使所有辅助代码从这里引用。

更多信息请查看 [文档](https://babel.docschina.org/docs/en/babel-plugin-transform-runtime/)。

**注意**：你必须执行 `npm install -D @babel/plugin-transform-runtime` 来把它包含到你的项目中，然后使用 `npm install @babel/runtime` 把 `@babel/runtime` 安装为一个依赖。

```javascript
rules: [
  // 'transform-runtime' 插件告诉 Babel
  // 要引用 runtime 来代替注入。
  {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
  }
]
```

#### **注意**：transform-runtime 和自定义 polyfills (例如 Promise library)

由于 [@babel/plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime) 包含了一个 polyfill，含有自定义的 [regenerator-runtime](https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js) 和 [core-js](https://github.com/zloirock/core-js), 下面使用 `webpack.ProvidePlugin` 来配置 shimming 的常用方法将没有作用：

```javascript
// ...
        new webpack.ProvidePlugin({
            'Promise': 'bluebird'
        }),
// ...
```

下面这样的写法也没有作用：

```javascript
require('@babel/runtime/core-js/promise').default = require('bluebird');

var promise = new Promise;
```

它其实会生成下面这样 (使用了 `runtime` 后)：

```javascript
'use strict';

var _Promise = require('@babel/runtime/core-js/promise')['default'];

require('@babel/runtime/core-js/promise')['default'] = require('bluebird');

var promise = new _Promise();
```

前面的 `Promise` library 在被覆盖前已经被引用和使用了。

一种可行的办法是，在你的应用程序中加入一个“引导(bootstrap)”步骤，在应用程序开始前先覆盖默认的全局变量。

```javascript
// bootstrap.js

require('@babel/runtime/core-js/promise').default = require('bluebird');

// ...

require('./app');
```

### `babel` 的 Node.js API 已经被移到 `babel-core` 中。（原文：The Node.js API for `babel` has been moved to `babel-core`.）

如果你收到这个信息，这说明你有一个已经安装的 `babel` npm package，并且在 webpack 配置中使用 loader 简写方式（在 webpack 2.x 版本中将不再支持这种方式）。
```javascript
  {
    test: /\.m?js$/,
    loader: 'babel',
  }
```

webpack 将尝试读取 `babel` package 而不是 `babel-loader`。

想要修复这个问题，你需要卸载 `babel` npm package，因为它在 Babel v6 中已经被废除。（安装 `@babel/cli` 或者 `@babel/core` 来替代它）
在另一种场景中，如果你的依赖于 `babel` 而无法删除它，可以在 webpack 配置中使用完整的 loader 名称来解决：
```javascript
  {
    test: /\.m?js$/,
    loader: 'babel-loader',
  }
```

## 自定义 loader

`babel-loader` 提供了一个 loader-builder 工具函数，
允许用户为 Babel 处理过的每个文件添加自定义处理选项。

`.custom` 接收一个 callback 函数，
它将被调用，并传入 loader 中的 `babel` 实例，
因此，此工具函数才能够完全确保它使用与 loader 的 `@babel/core` 相同的实例。

如果你想自定义，但实际上某个文件又不想调用 `.custom`，
可以向 `customize` 选项传入一个字符串，
此字符串指向一个导出 `custom` 回调函数的文件。

### 示例

```js
// 从 "./my-custom-loader.js" 中导出，或者任何你想要的文件中导出。
module.exports = require("babel-loader").custom(babel => {
  function myPlugin() {
    return {
      visitor: {},
    };
  }

  return {
    // 传给 loader 的选项。
    customOptions({ opt1, opt2, ...loader }) {
      return {
        // 获取 loader 可能会有的自定义选项
        custom: { opt1, opt2 },

        // 传入"移除了两个自定义选项"后的选项
        loader,
      };
    },

    // 提供 Babel 的 'PartialConfig' 对象
    config(cfg) {
      if (cfg.hasFilesystemConfig()) {
        // 使用正常的配置
        return cfg.options;
      }

      return {
        ...cfg.options,
        plugins: [
          ...(cfg.options.plugins || []),

          // 在选项中包含自定义 plugin
          myPlugin,
        ],
      };
    },

    result(result) {
      return {
        ...result,
        code: result.code + "\n// Generated by some custom loader",
      };
    },
  };
});
```

```js
// 然后，在你的 webpack config 文件中
module.exports = {
  // ..
  module: {
    rules: [{
      // ...
      loader: path.join(__dirname, 'my-custom-loader.js'),
      // ...
    }]
  }
};
```

### `customOptions(options: Object): { custom: Object, loader: Object }`

指定的 loader 的选项，
从 `babel-loader` 选项中分离出自定义选项。


### `config(cfg: PartialConfig): Object`

指定的 Babel 的 `PartialConfig` 对象，
返回应该被传递给 `babel.transform` 的 `option` 对象。


### `result(result: Result): Result`

指定的 Babel 结果对象，允许 loaders 对它进行额外的调整。


## License
[MIT](https://couto.mit-license.org/)





# sass-loader
https://github.com/docschina/webpack.js.org/tree/cn/src/content/loaders/sass-loader.md
https://www.webpackjs.com/loaders/sass-loader/

---
title: sass-loader
source: https://raw.githubusercontent.com/webpack-contrib/sass-loader/master/README.md
edit: https://github.com/webpack-contrib/sass-loader/edit/master/README.md
repo: https://github.com/webpack-contrib/sass-loader
---
Loads a Sass/SCSS file and compiles it to CSS.

Use the [css-loader](/loaders/css-loader/) or the [raw-loader](/loaders/raw-loader/) to turn it into a JS module and the [mini-css-extract-plugin](/plugins/mini-css-extract-plugin/) to extract it into a separate file.
Looking for the webpack 1 loader? Check out the [archive/webpack-1 branch](https://github.com/webpack-contrib/sass-loader/tree/archive/webpack-1).

## 安装

```bash
npm install sass-loader node-sass webpack --save-dev
```

[webpack](https://github.com/webpack) 是 sass-loader 的 [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies)，
并且还需要你预先安装
[Node Sass](https://github.com/sass/node-sass) 或 [Dart Sass](https://github.com/sass/dart-sass)。
这可以控制所有依赖的版本，
并选择要使用的 Sass 实现。

[Node Sass]：https://github.com/sass/node-sass
[Dart Sass]：http://sass-lang.com/dart-sass

## 示例

通过将 [style-loader](https://github.com/webpack-contrib/style-loader) 和 [css-loader](https://github.com/webpack-contrib/css-loader) 与 sass-loader 链式调用，可以立刻将样式作用在 DOM 元素。

```bash
npm install style-loader css-loader --save-dev
```

```js
// webpack.config.js
module.exports = {
	...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // 将 JS 字符串生成为 style 节点
                "css-loader", //  将 CSS 转化成 CommonJS 模块
                "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
            ]
        }]
    }
};
```

也可以直接将选项传递给 [Node Sass][] 或 [Dart Sass][]：

```js
// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
        options: {
          includePaths: ["absolute/path/a", "absolute/path/b"]
        }
      }]
    }]
  }
};
```

更多 Sass 可用选项，查看 [Node Sass 文档](https://github.com/sass/node-sass/blob/master/README.md#options) for all available Sass options.

By default the loader resolve the implementation based on your dependencies.
Just add required implementation to `package.json`
(`node-sass` or `sass` package) and install dependencies.

Example where the `sass-loader` loader uses the `sass` (`dart-sass`) implementation:

**package.json**

```json
{
   "devDependencies": {
      "sass-loader": "*",
      "sass": "*"
   }
}
```

Example where the `sass-loader` loader uses the `node-sass` implementation:

**package.json**

```json
{
   "devDependencies": {
      "sass-loader": "*",
      "node-sass": "*"
   }
}
```

Beware the situation
when `node-sass` and `sass` was installed, by default the `sass-loader`
prefers `node-sass`, to avoid this situation use the `implementation` option.

The special `implementation` option determines which implementation of Sass to
use. It takes either a [Node Sass][] or a [Dart Sass][] module. For example, to
use Dart Sass, you'd pass:

```js
// ...
    {
        loader: "sass-loader",
        options: {
            implementation: require("sass")
        }
    }
// ...
```

Note that when using Dart Sass, **synchronous compilation is twice as fast as
asynchronous compilation** by default, due to the overhead of asynchronous
callbacks. To avoid this overhead, you can use the
[`fibers`](https://www.npmjs.com/package/fibers) package to call asynchronous
importers from the synchronous code path. To enable this, pass the `Fiber` class
to the `fiber` option:

```js
// webpack.config.js
const Fiber = require('fibers');

module.exports = {
    ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    implementation: require("sass"),
                    fiber: Fiber
                }
            }]
        }]
    }
};
```

通常，生产环境下比较推荐的做法是，使用 [mini-css-extract-plugin](/plugins/mini-css-extract-plugin/) 将样式表抽离成专门的单独文件。这样，样式表将不再依赖于 JavaScript：

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
```

## 用法

### 导入(import)

webpack 提供一种[解析文件的高级的机制](https://webpack.js.org/concepts/module-resolution/)。sass-loader 使用 Sass 的 custom importer 特性，将所有的 query 传递给 webpack 的解析引擎(resolving engine)。只要它们前面加上 `~`，告诉 webpack 它不是一个相对路径，这样就可以 import 导入 `node_modules` 目录里面的 sass 模块：

```css
@import "~bootstrap/dist/css/bootstrap";
```

重要的是，只在前面加上 `~`，因为 `~/` 会解析到主目录(home directory)。webpack 需要区分 `bootstrap` 和 `~bootstrap`，因为 CSS 和 Sass 文件没有用于导入相关文件的特殊语法。`@import "file"` 与 `@import "./file";` 这两种写法是相同的

### `url(...)` 的问题

由于 Sass/[libsass](https://github.com/sass/libsass) 并没有提供[url rewriting](https://github.com/sass/libsass/issues/532) 的功能，所以所有的链接资源都是相对输出文件(output)而言。

- 如果生成的 CSS 没有传递给 css-loader，它相对于网站的根目录。
- 如果生成的 CSS 传递给了 css-loader，则所有的 url 都相对于入口文件（例如：`main.scss`）。

第二种情况可能会带来一些问题。正常情况下我们期望相对路径的引用是相对于 `.scss` 去解析（如同在 `.css` 文件一样）。幸运的是，有2个方法可以解决这个问题：

- 将 [resolve-url-loader](https://github.com/bholloway/resolve-url-loader)  设置于 loader 链中的 sass-loader 之前，就可以重写 url。
- Library 作者一般都会提供变量，用来设置资源路径，如 [bootstrap-sass](https://github.com/twbs/bootstrap-sass)  可以通过 `$icon-font-path` 来设置。参见[this working bootstrap example](https://github.com/webpack-contrib/sass-loader/tree/master/test/bootstrapSass)。

### 提取样式表

使用 webpack 打包 CSS 有许多优点，在开发环境，可以通过 hashed urls 或 [模块热替换(HMR)](https://webpack.js.org/concepts/hot-module-replacement/) 引用图片和字体资源。而在线上环境，使样式依赖 JS 执行环境并不是一个好的实践。渲染会被推迟，甚至会出现 [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)，因此在最终线上环境构建时，最好还是能够将 CSS 放在单独的文件中。

从 bundle 中提取样式表，有2种可用的方法：

- [extract-loader](https://github.com/peerigon/extract-loader) （简单，专门针对 css-loader 的输出）
- [mini-css-extract-plugin](/plugins/mini-css-extract-plugin/) (use this, when using webpack 4 configuration. Works in all use-cases)

### Source maps

要启用 CSS source map，需要将 `sourceMap` 选项作为参数，传递给 *sass-loader* 和 *css-loader*。此时`webpack.config.js`  如下：

```javascript
module.exports = {
    ...
    devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }]
    }
};
```

如果你要在 Chrome 中编辑原始的 Sass 文件，建议阅读[这篇不错的博客文章](https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0)。具体示例参考 [test/sourceMap](https://github.com/webpack-contrib/sass-loader/tree/master/test) 。

###  环境变量

如果你要将 Sass 代码放在实际的入口文件(entry file)之前，可以设置 `data` 选项。此时 sass-loader 不会覆盖 `data` 选项，只会将它拼接在入口文件的内容之前。当 Sass 变量依赖于环境时，这一点尤其有用。

```javascript
{
    loader: "sass-loader",
    options: {
        data: "$env: " + process.env.NODE_ENV + ";"
    }
}
```

The `data` option supports `Function` notation:

```javascript
{
    loader: "sass-loader",
    options: {
        data: (loaderContext) => {
          // More information about avalaible options https://webpack.js.org/api/loaders/
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext,resourcePath);

          if (relativePath === "styles/foo.scss") {
             return "$value: 100px;"
          }

          return "$value: 200px;"
        }
    }
}
```

**注意：**由于代码注入, 会破坏整个入口文件的 source map。 通常一个简单的解决方案是，多个 Sass 文件入口。

## 维护人员

<table>
    <tr>
      <td align="center">
        <a href="https://github.com/jhnns"><img width="150" height="150" src="https://avatars0.githubusercontent.com/u/781746?v=3"></a><br>
        <a href="https://github.com/jhnns">Johannes Ewald</a>
      </td>
      <td align="center">
        <a href="https://github.com/webpack-contrib"><img width="150" height="150" src="https://avatars1.githubusercontent.com/u/1243901?v=3&s=460"></a><br>
        <a href="https://github.com/webpack-contrib">Jorik Tangelder</a>
      </td>
      <td align="center">
        <a href="https://github.com/akiran"><img width="150" height="150" src="https://avatars1.githubusercontent.com/u/3403295?v=3"></a><br>
        <a href="https://github.com/akiran">Kiran</a>
      </td>
    <tr>
</table>


## License

[MIT](http://www.opensource.org/licenses/mit-license.php)

[npm]: https://img.shields.io/npm/v/sass-loader.svg
[npm-stats]: https://img.shields.io/npm/dm/sass-loader.svg
[npm-url]: https://npmjs.com/package/sass-loader

[node]: https://img.shields.io/node/v/sass-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack-contrib/sass-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/sass-loader

[travis]: http://img.shields.io/travis/webpack-contrib/sass-loader.svg
[travis-url]: https://travis-ci.org/webpack-contrib/sass-loader

[appveyor-url]: https://ci.appveyor.com/project/webpack-contrib/sass-loader/branch/master
[appveyor]: https://ci.appveyor.com/api/projects/status/rqpy1vaovh20ttxs/branch/master?svg=true

[cover]: https://codecov.io/gh/webpack-contrib/sass-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/sass-loader

[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack






# webpack基础 优化打包发布 去掉#号 页面空白问题

package.json 也是 npm 的配置信息文件，建议了解一些 npm 脚本基础。如 scripts 中配置的是命令，通过 npm run 执行脚本命令时，会新建一个 shell 来执行这里配置的命令，所以只要系统认识的命令都可以在这配置。另外 npm 提供了 pre & post 钩子机制，如 npm run build 执行时，简写成 npm build，它可以按顺序调用以下三个脚本：

	"prebuild": "echo I run before the build script",
	"build": "cross-env NODE_ENV=production webpack",
	"postbuild": "echo I run after the build script"

使用钩子可以用来做一些前期或后期动作，如清理工作，像 clean-webpack-plugin 这种插件就是一行脚本配置的事。清理脚本也可以这样写脚本：

	"clean": "rimraf ./dist && mkdir dist",
	"prebuild": "npm run clean",
	"build": "cross-env NODE_ENV=production webpack"

如果脚本中需要执行多组命令，& 可以用来连接命令，写成 a & b，它会按前后顺序运行命令 a 和 b。而 a && b 则会在 a 命令成功后才执行 b 命令。npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。 通过环境变量process.env对象，拿到package.json配置信息，再通过npm_package_前缀可以获取配置文件内的配置项，如脚本中读取 name & version 等信息：

	console.log(process.env.npm_package_name);
	console.log(process.env.npm_package_version);
	console.log(process.env.npm_package_scripts_build);

以下是常用脚本，参考：
http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html

    "prebuild": "del /Q dist\\*",
	"clean": "rimraf dist/*", // 删除目录
	"clean": "rimraf dist/*", // 删除目录
	"serve": "http-server -p 9090 dist/", // 本地搭建一个 HTTP 服务
	"open:dev": "opener http://localhost:9090", // 打开浏览器
	"livereload": "live-reload --port 9091 dist/", // 实时刷新
	"build:html": "jade index.jade > dist/index.html", // 构建 HTML 文件
	"watch:css": "watch 'npm run build:css' assets/styles/", // 只要 CSS 文件有变动，就重新执行构建
	"watch:html": "watch 'npm run build:html' assets/html", // 只要 HTML 文件有变动，就重新执行构建
	"deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/", // 部署到 Amazon S3
	"build:favicon": "node scripts/favicon.js", // 构建 favicon


webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中，安装命令：

	npm install --save-dev style-loader css-loader

CSS modules 的技术就意在把JS的模块化思想带入CSS中来，通过CSS模块，所有的类名，动画名默认都只作用于当前模块。Webpack从一开始就对CSS模块化提供了支持，在CSS loader中进行配置后，你所需要做的一切就是把”modules“传递都所需要的地方，然后就可以直接把CSS的类名传递到组件的代码中，且这样做只对当前组件有效，不必担心在不同的模块中具有相同的类名可能会造成的问题。

插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。Loaders和Plugins常常被弄混，但是他们其实是完全不同的东西，可以这么来说，loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个，插件并不直接操作单个文件，它直接对整个构建过程其作用。Webpack有很多内置插件，同时也有很多第三方插件，可以让我们完成更加丰富的功能。

Hot Module Replacement（HMR）也是webpack里很有用的一个插件，它允许你在修改组件代码后，自动刷新实时预览修改后的效果，这个特性在开发过程中作用非常巨大。在新版本中，这个插件已经内置了，通过 webpack-dev-server 指定 hot 参数就可以使用：

	webpack-dev-server --content-base ./ --open --inline --hot ...

相对SAP的单面入口，多页应用的每个模块可以对应一个页面，由于多个页面对应多个输出文件，多页应用需要在每个页面中引入公共的 JavaScript 文件以及其自身的 JavaScript 文件。这个引用如果是 CSS 文件，则可以由 extract-text-webpack-plugin 这个插件自动提取并插入到 HTML 页面，对于 HTML 页面中引入 JavaScript 文件则需要使用 html-webpack-plugin 这个插件。以下就是一个页面的配置，多个页面则可以将页面记录在数组中，然后通过脚本枚举生成相应的配置，当然在数量不多的情况下，复制几份配置也是可行的：

    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './src/template/index.ejs',
        inject: false
    })

	['index','home','login'].forEach((page) => {
	    const htmlPlugin = new HTMLWebpackPlugin({
	        filename: `${page}.html`,
	        template: path.resolve(__dirname, `../src/html/${page}.html`),
	        chunks: [page, 'commons'],
	    });
	    HTMLPlugins.push(htmlPlugin);
	    Entries[page] = path.resolve(__dirname, `../src/js/${page}.js`);
	})


模板的配置参考插件文档，这里稍作引导，原有一个模板内容如下：

    <link rel="stylesheet" href="<%= htmlWebpackPlugin.files.css[0] %>">
    <script type="text/javascript" src="<%= htmlWebpackPlugin.files.js[0] %>"></script>
    <script type="text/javascript" src="<%= htmlWebpackPlugin.files.js[1] %>"></script>

webpack 编译时，会产生输出文件，插件可以获取到相应的文件列表，通过输出列表里的文件信息到模板就可以实现引入脚本文件到页面。js[0] 代表的是 vendor.js 共公部分，js[1] 代表的是 main.js 即入口模块，这里有路由配置信息。js[2], js[3] 则会分别代表两个页面模块生成的输出文件，新建一个模板并且把模板名字设置到插件配置项里就可以完成页面的生成动作。

    <link rel="stylesheet" href="<%= htmlWebpackPlugin.files.css[0] %>">
    <script type="text/javascript" src="<%= htmlWebpackPlugin.files.js[0] %>"></script>
    <script type="text/javascript" src="<%= htmlWebpackPlugin.files.js[1] %>"></script>
    <script type="text/javascript" src="<%= htmlWebpackPlugin.files.js[2] %>"></script>

    new HtmlWebpackPlugin({
        filename: '../TabPane.html',
        template: './src/template/TabPane.ejs',
        inject: false
    })




+ 页面空白问题

新手打包vue项目，并行编译结果出现页面空白问题。一般是因为配置不正确导致的，：

	"main": "index.js",

router路由配置文件夹下index.js的设置，极有可能是没有匹配的路由项导致页面无内容。仔细检查各个路由配置项，需要 VurRouter 的基础自行补课

	// mode:'hash' 
	mode: 'history',//去掉#，
	base: '/app/',  //这个配置也很重要，否则会出现页面空白情况
	scrollBehavior: () => ({ y: 0 }),


+ webpack构建性能优化技巧
http://www.hangge.com/blog/cache/detail_2105.html

对于大型 Vue 项目，或者说项目中引入了许多第三方库，那么在执行 npm run build 构建项目的时候会极其的慢，上几十秒甚至几分钟的时间，特别是开发过程中的时段，这是难以接受的等待。

+ 模块定位 resolve modules

webpack 的 resolve.modules 是用来配置模块库（即 node_modules）所在的位置。当 js 里出现 import 'vue' 这样不是相对、也不是绝对路径的写法时，它便会到 node_modules 目录下去找。在默认配置下，webpack 会采用向上递归搜索的方式去寻找。为了减少搜索范围，可我们以直接写明 node_modules 的全路径。

打开 build/webpack.base.conf.js 文件，添加如下高亮配置：

		resolve: {
		    extensions: ['.js', '.vue', '.json'],
		    modules: [
		      resolve('src'),
		      resolve('node_modules')
		    ],
		    alias: {
		      'vue$': 'vue/dist/vue.esm.js',
		      '@': resolve('src'),
		    }
		},


+ 配置装载机的 include & exclude

webpack 的装载机（loaders）里的每个子项都可以有 include 和 exclude 属性。使用 include 更精确地指定要处理的目录，这可以减少不必要的遍历，从而减少性能损失。同时使用 exclude 对于已经明确知道的，不需要处理的目录，予以排除，从而进一步提升性能。

打开 build/webpack.base.conf.js 文件，添加类似如下配置，例如 easytable 没有在项目使用，则可以把它从 include 中去除。

  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig,
      include: [resolve('src'), resolve('node_modules/vue-easytable/libs')],
      exclude: /node_modules\/(?!(autotrack|dom-utils))|vendor\.dll\.js/
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src')],
      exclude: /node_modules/
    },

+ 使用 webpack-parallel-uglify-plugin 插件来压缩代码

默认情况下 webpack 使用 UglifyJS 插件进行代码压缩，但由于其采用单线程压缩，速度很慢。可以改用 webpack-parallel-uglify-plugin 插件，它可以并行运行 UglifyJS 插件，从而更加充分、合理的使用 CPU 资源，从而大大减少构建时间。

执行如下命令安装 webpack-parallel-uglify-plugin

	npm i webpack-parallel-uglify-plugin

打开 webpack.prod.conf.js 文件，并作如下修改：

	const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
	//....
    // 删掉webpack提供的UglifyJS插件
    //new UglifyJsPlugin({
    //  uglifyOptions: {
    //    compress: {
    //      warnings: false
    //    }
    //  },
    //  sourceMap: config.build.productionSourceMap,
    //  parallel: true
    //}),
    // 增加 webpack-parallel-uglify-plugin来替换
    new ParallelUglifyPlugin({
      cacheDir: '.cache/',
      uglifyJS:{
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }
    }),


+ 使用 HappyPack 来加速代码构建

运行在 Node.js 之上的 Webpack 是单线程模型的，所以 Webpack 需要处理的事情只能一件一件地做，不能多件事一起做。而 HappyPack 的处理思路是：将原有的 webpack 对 loader 的执行过程，从单一进程的形式扩展多进程模式，从而加速代码构建。

执行如下命令安装 happypack：

	npm i happypack

打开 build/webpack.base.conf.js 文件，并作类似如下修改：

	const HappyPack = require('happypack');
	const os = require('os');
	const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
	 
	module.exports = {
	    module: {
	        rules: [{
	            test: /\.js$/,
	            //把js文件处理交给id为 happyBabel 的HappyPack 的实例执行
	            loader: 'happypack/loader?id=happyBabel',
	            include: [path.resolve('src')],
	            //排除node_modules 目录下的文件
	            exclude: /node_modules/
	        }, ]
	    },
	    plugins: [
	        new HappyPack({
	            //用id来标识 happypack处理那里类文件
	            id: 'happyBabel',
	            //如何处理  用法和loader 的配置一样
	            loaders: [{
	                loader: 'babel-loader?cacheDirectory=true',
	            }],
	            //共享进程池
	            threadPool: happyThreadPool,
	            //允许 HappyPack 输出日志
	            verbose: true,
	        })
	    ]
	}


+ 启用DllPlugin和DllReferencePlugin预编译库文件
　　　
这是最复杂也是提升效果最明显的一步，原理是将第三方库文件单独编译打包一次，以后的构建都不需要再编译打包第三方库。项目依赖中通常会引用大量的 npm 包，而这些包在正常的开发过程中并不会进行修改，但是在每一次构建过程中却需要反复的将其解析。

而这两个插件就是用来规避此类损耗的，DllPlugin 插件用来预先编译一些模块，DllReferencePlugin 插件用来引用这些预先编译好的模块。注意：DllPlugin 必须要在 DllReferencePlugin 执行前先执行一次，dll 这个概念应该也是借鉴了 windows 程序开发中的 dll 文件的设计理念。


首先增加 webpack.dll.config.js 配置文件，并在 entry 中配置需要单独DLL化的模块，以下作为示例，据需求裁剪
　　　　
	const path = require('path');
	const webpack = require('webpack');

	module.exports = {
	    entry: {
	        vendor: ['vue/dist/vue.common.js',
	            'vue-router',
	            'axios',
	            'mint-ui',
	            'vue-cordova',
	            '@fortawesome/fontawesome-svg-core',
	            '@fortawesome/free-solid-svg-icons',
	            '@fortawesome/free-regular-svg-icons',
	            '@fortawesome/free-brands-svg-icons',
	            '@fortawesome/vue-fontawesome'
	        ]
	    },
	    output: {
	        path: path.join(__dirname, './dist'),
	        filename: '[name].dll.js',
	        library: '[name]_library' // vendor.dll.js中暴露出的全局变量名
	    },
	    plugins: [
	        new webpack.DllPlugin({
	            path: path.join(__dirname, '/dist/', '[name]-manifest.json'),
	            name: '[name]_library'
	        }),
	        new webpack.optimize.UglifyJsPlugin({
	            compress: {
	                warnings: false
	            }
	        })
	    ]
	};


然后在 webpack.base.conf.js 文件，增加一个插件配置配置，作用是通过 DLLReferencePlugin 来使用 DllPlugin 生成的 DLL Bundle。

	// 添加DllReferencePlugin插件
	new webpack.DllReferencePlugin({
		context: path.resolve(__dirname, '..'),
		manifest: require('./dist/vendor-manifest.json')
	}),


在 package.json 增加构建命令　　

	"dll": "webpack --config webpack.dll.config.js"

执行构建，这一步会生成 vendor-manifest.json 和 static/js/vendor.dll.js

	npm run dll
	npm run dev 或 npm run build
　　
最后在入口页面中 index.html 增加 dll.js 引入，而且必须首先引入，另外将已经独立打包的模块从原有的配置文件 webpack.base.conf.js 中设置为 externals 外部引用

	<script src="/static/js/vendor.dll.js"></script>

	module.exports = {
	    externals: {
	        'echarts': 'echarts',
	        'vue': 'vue',
	        'axios': 'axios',
	        'iview': 'iview'
	    }
	}


+ 提取js/css到cdn优化编译大小

以一个vue项目为例。项目引用了vue、axios、iview、iview的css：

	import Vue from 'vue'
	import App from './App.vue'
	import router from './router'
	import axios from 'axios'
	import iView from 'iview'
	import echarts from 'echarts'
	import 'iview/dist/styles/iview.css'

在 webpack.base.conf.js 中，增加externals配置：


然后在页面文件 index.html 引入cdn资源文件

	<body>
	    <div id="app"></div>
	    <script src="https://cdn.bootcss.com/vue/2.5.2/vue.min.js"></script>
	    <script src="https://cdn.bootcss.com/axios/0.17.1/axios.min.js"></script>
	    <script src="https://cdn.bootcss.com/iview/2.6.0/iview.min.js"></script>
	    <script src="//cdn.staticfile.org/echarts/4.2.0-rc.1/echarts.min.js"></script>
	</body>

将大体积文件放置在cdn上，减小了服务器流量压力，加快了不同地区网页加载速度，如百度图表库 echarts 就很大，压缩后的完整包近一个兆的量。另外使用gzip压缩vendor.js可以有效减小文件体积，一般能压缩70%左右。 


