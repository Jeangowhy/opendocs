# TypeScript
- [TypeScript Web](https://www.typescriptlang.org/)
- [TypeScript Blog](https://devblogs.microsoft.com/typescript/)
- [TypeScript on Github](https://github.com/Microsoft/TypeScript)
- [TypeScript Handbook](https://github.com/Microsoft/TypeScript-Handbook)
- [TypeScript 中文網](https://www.tslang.cn/docs/home.html)
- [TypeScript type definitions](http://definitelytyped.org/)
- [TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin)
- [TypeScript Cpmpletion](https://packagecontrol.io/packages/TypescriptCompletion)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Start a New TS Project](https://www.typescriptlang.org/docs/bootstrap)
- [Gulp 打包机](https://www.typescriptlang.org/docs/handbook/gulp.html)
- [JavaScript Guide](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)
- Node 作者开发 Deno 来替代 Node http://www.ruanyifeng.com/blog/2020/01/deno-intro.html
- A secure runtime for JavaScript and TypeScript https://deno.land/

[TOC]

微軟 TypeScript 官方在 Github 上提供了 TypeScript Handbook 的 Markdown 文檔，可以直接下載學習！

TypeScript 可以理解为是 JavaScript 的一个超集，也就是说涵盖了所有 JavaScript 的功能，并在之上有着自己独特的语法。 TS 编译负责将 TS 代码转译成 JS 代码代码，这样浏览器就可以执行。

>We love TypeScript for many things… With TypeScript, several of our team members have said things like 'I now actually understand most of our own code!' because they can easily traverse it and understand relationships much better. And we’ve found several bugs via TypeScript’s checks.”
>
>— Brad Green, Engineering Director - AngularJS



>“By combining Aurelia with TypeScript for modern web, mobile and desktop development, we've seen what is perhaps the most beautiful and elegant app development workflow to date.”
>
>— Rob Eisenberg, Architect - Aurelia


>“TypeScript is a smart choice when writing a modern web- or JavaScript-based application. TypeScript’s carefully considered language features and functionality, and its consistently improving tools, result in a terrifically productive development experience.”
>
>— Aaron Cornelius, Research Fellow - Epic

>“TypeScript helped us to reuse the team’s knowledge and to keep the same team velocity by providing the same excellent developer experience as C# ... A huge improvement over plain JavaScript.”
>
>— Valio Stoychev, PM Lead - NativeScript


>“One of Ionic's main goals is to make app development as quick and easy as possible, and the tooling support TypeScript gives us with autocompletion, type checking and source documentation really aligns with that.”
>
>— Tim Lancina, Tooling Developer - Ionic

为何 TypeScript 的强类型会流行？来看看 JavaScript 的几个问题：

	if ("" == 0) {
	// It is! But why??
	}
	if (1 < x < 3) {
	// True for *any* value of x!
	}

	const obj = { width: 10, height: 15 };
	// Why is this NaN? Spelling is hard!
	const area = obj.width * obj.heigth;

如果，在大型项目中，以上问题可能会消耗大量调试时间，这就是成本，而强类型的约束会禁止代码出现这样的问题，并且会给出详细提示。


# ⚑ TypeScript 光速入门

为了快速入门 TypeScript，本文将提出几个问题来导入深入地学习 TypeScript。

1. TypeScript 是什么？
2. TypeScript 更好吗？
3. TypeScript 解决什么问题？
4. TypeScript 学习的路线安排。

## 🐣 TypeScript 是什么？

官方网站是这样描述 TypeScript 语言的：

>TypeScript is JavaScript with syntax for types.
>
>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

TypeScript 是一种脚本编程语言，是一种静态类型语言，是一种强类型语言，是 JavaScript 脚本超集。作为一种编程脚本语言，它不仅可以用于开发 Web 前端，或者 Web 后端，还可以开发桌面应用或者游戏开发，等等。

编程语言的本质就是人类用于交流的一种工具，和人类使用的自然语言，英语、汉语或其它民族使用的语言没有本质区别。编程语言由于主要功能是用来指导计算机执行逻辑功能，所以各种编程语言更具有完善的逻辑系统，不同语言理论上可以通过转译程序实现相互之间的等价变换，就像人类日常使用翻译功能进行交流。例如前端开发中使用的 Babel 转译工具，模块打包工具等等。又如 Deno 中提供的 Deno.dlopen() API 可以用来加载 Rust 等系统语言编写的动态扩展模块，可以实现 Deno 当前不支持的功能，Deno 执行程序时就会按脚本配置自动下载相应的动态链接库到本地进行调用，比如 clippy 对系统剪贴板的读写扩展，当然读写剪贴板不一定非通过动态库扩展。

```ts
import * as clippy from "https://deno.land/x/clippy@v0.2.2/mod.ts";
import clipboard from "https://deno.land/x/clipboard@v0.0.2/mod.ts";
console.log({clipboard: await clipboard.readText()});
```

比如，人类自然语言说：

    请把评论打在楼下！

    请投币点赞收藏！

和以下编程脚本中的代码没有本质具别，只还过编程更讲究逻辑，而自然语言则不一定要符合特定逻辑。所以，人类很自然感觉到使用自然语言的轻松，而学习强逻辑的计算机语言有种身在约束丛林的感觉。

就以下代码行而言，其逻辑包含：console 是一个对象，是一个类定义的实例，这种类型是脚本语言内建的（用户可以直接使用），它定义了一个方法叫做 log()，这个方法可以接收任意个参数并将这些参数打印到控制台.

```ts
console.log("Please like me.");
```

在编程世界中，有许多与人类自然语言世界相互冲突的语义，比如数学上 = 号表示两个值相等，比如 1 = x，那么就知道 x 的值是 1。但是在编程逻辑中，由于计算机硬件体系结构的存在-逻辑机器，需要编程语言提供一种数据读写的基本操作，而这个操作表现在编程语言元素中，就是 = 号，比如以下给一个变量赋值，等号右侧的称为数据，data，左侧称为变量，variables。变量的本质是一块随机分配的内存，赋值操作就是将数据保存到分配好的内存中。这个赋值过程和人类搬东西到指定位置具有等价意义：

```ts
	let b = "bad apple";
```

https://article.biliimg.com/bfs/article/a48dd9ecf12561af3388e45a5cecec8f60a15666.png


以下提供几种使用 TypeScript 脚本编程环境安装指导：

TypeScript Playground 游乐场：可以直接在 Web 浏览器上运行脚本，但有功能约束，比如不能使用 fetch 这样的 API 进行 HTTP 操作。https://www.typescriptlang.org/play

Node 环境：安装 Node 开发环境，然后使用命令 npm install -global typescript 安装 tsc 编译器。https://nodejs.org/

Deno 环境：它本身集成了 TypeScript 解析器以及 V8 脚本引擎，直接下载 Deno 即可以开发 TypeScript 应用，或者使用控制台工具进行安装。https://deno.land/manual@v1.36.1/getting_started/installation https://github.com/denoland/deno/releases/tag/v1.36.1

Node.js 命令行的 TypeScript 编译器的安装各基本用法如下，使用 npm 命令来安装，-g 表示 global 全局安装，这样可以在任意的命令行窗口运行编译器。安装后会有一个 tsc 编译器命令来转译 TypeScript 代码为 JavaScript，也可以安装 ts-node 模块来直接解析运行。当然，推荐使用 Deno，它直接可以执行 TypeScript 脚本，并可以用于生产环境的开发工作。

```sh
npm install -g typescript
npm install -g ts-node
tsc helloworld.ts
ts-node helloworld.ts
```

开发工具可选择有很多，推荐两个易用的编程工具：

Sublime Text 这是一款付费软件，但作者没有强制用户付费，只会偶尔弹窗提醒。支持 LSP 智能代码提示，可以搭配 Deno LSP 服务使用。https://www.sublimetext.com/ https://lsp.sublimetext.io/language_servers

Visual Studio Code 简称 VS Code，微软开源团队基于 TypeScript + Electron 开发的跨平台开发工具。https://code.visualstudio.com/

关于 Sublime Text + Deno LSP 环境正确安装后就可以非常方便地开发 TypeScript 应用。环境配置可以参考 Opendocs Demo.md 中的 Sublime VSCode LSP 配置，注意 Deno 官方文档提供的 LSP Settings 中缺少 selector 配置项，默认只提供 JavaScript 智能提示，不处理 TypeScript 脚本和 JSX 或 TSX，可以添加语言选择器配置：

```json
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
	  //......
```

https://github.com/Jeangowhy/opendocs/blob/main/Deno.md

https://deno.land/manual@v1.36.1/getting_started/setup_your_environment

Sublime Text + Deno lsp

## 🐣 TypeScript 更好吗？

网络上信息太多了，什么水平都有。从而很容易引导初学者进行一个怪圈：“什么语言最好？”进入这种问题怪圈不说作用很大，只能说是毫无意义。这个世界没有完美的事件。"大都好物不坚牢，彩云易散琉璃脆。"选择最适合的工具做最恰当的工作，这就是于不完美中尽善。

TypeScript 更好的论断是相对于 JavaScript 脚本的过度灵活从而带来维护问题而言的，任何事，只要足够自由，就会因为参与的人多了产生变坏的趋势。因为人性天然不喜欢约束，JavaScript 则是支持人性的脚本。结果，带来的这种坏可以用以下代码表达：

```js
function addup(arg) {
  console.log(arg + 1);
}

addup(1);   // 2
addup("1"); // "11"
```

为了运行 JavaScript 脚本，可以使用 Chrome 等浏览器提供的开发者工具，按 F12 即可以调出，在 Console 面板中就可以输入代码进行测试。

因为，JavaScript 使用的是动态类型，Dynamic Types，即脚本引擎实现源代码中，使用的是一个数据结构，这个结构可以保存整数值、浮点数、字符串、布尔值等等不同的数据类型，并且会将相应的 API 导出到脚本解析器的运行时环境中供脚本使用。所以在一个脚本编程环境中，包含两个基本构成：解析器底层实现，通常是 C++ 或 C 言语实现；脚本运行时实现，提供一个环境运行脚本或将底层实现的公开 API 导出到运行时，供脚本调用。

这也就是为何在以上代码片段中，同样是执行 `addup()` 函数，但由于参数 arg 接收到的数据类型差异而得到完全不同的结果。在 JavaScript 中，还可以使用 +"1" 这样的表达式将字符串转型为数值，比如 `+"1"+1` 就得到 2。

假设，一个项目随着迭代，代码会必然会增加，那么这种灵活性可能就是未来产生代码“史山”的根源，即使是代码写作者本人，可能隔天就忘记了当时写下代码的本意。


## 🐣 TypeScript 模块化与类型声明文件
1. https://www.typescriptlang.org/docs/handbook/modules.html
2. https://www.typescriptlang.org/docs/handbook/2/modules.html
3. https://www.typescriptlang.org/docs/handbook/namespaces.html
4. https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html
5. https://deno.land/manual@v1.36.1/getting_started/configuration_file
5. https://deno.land/manual@v1.36.1/basics/import_maps

TypeScript 引入了类型声明机制，通过类型声明文件 .d.ts 提供的类型信息，编译可以配合 LSP 给出智能提示，即时反馈源文件中不合法的代码。

脚本模块化是当下的流行趋势，模块化编程需要考虑以下三个问题：

1. **Syntax**: What syntax do I want to use to import and export things?
2. **Module Resolution**: What is the relationship between module names (or paths) and files on disk?
3. **Module Output Target**: What should my emitted JavaScript module look like?

最常用的模块打包规范有两种：

1. Node 默认使用的 CommonJS (CJS) ，最新的 Node 也已经支持 ESM；
2. Web 平台使用的 ES Modules (ESM)，和 ；

Universal Module Definition (UMD) 通用模块是兼容了 RequireJS、CommonJS、ESM 等模块规范，基于 Asynchronous Module Definition (AMD) 异步模块规范，并添加了特殊的外壳来处理多种模块加载的兼容性。AMD 本身也是 CommonJS (CJS) 规范的替代品。

TypeScript 类型声明文件的组织与脚本的模块、命名空间关系密切，并且提供了一个专用的 /// 三斜线指令来处理类型的引用。

执行 tsc init 初始化项目以及生成 tsconfig.josn 配置文件，它包含默认，其中 `target` 指示了当前编译器支持的 TypeScript 转译 JavaScript 脚本时，可以按什么规范生成目标脚本代码。另外 `module` 配置指示生成目标代码所使用的模块打包规范。

```json
"target": "es5",
/* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
"module": "commonjs",
/* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
```

TypeScript 脚本编程本身使用的是最新的 ESM 模块规范，使用 import 或者 export 指令导入导出模块，并且支持多种规范，使用非常便利。
比如，支持 AMD 模块中的 `export =` 和 `import = require()` 这样的使用方式。使用 export = 语法指定从模块导出的单个对象，可以是类、接口、命名空间、函数或枚举。导出模块时，必须配合使用 import require 导入模块。


TypeScript 导入时不需要加 .ts 扩展名，因为编译器将 TypeScript 代码转换为 JavaScript 时不会更改导入说明符，因此导入路径即使在编译后也会保留 .ts
扩展名，这会导致脚本在运行时的导入问题。但是在 Deno 运行环境下，是需要使用扩展名的，因为 Deno 本身不需要将 TypeScript 转译，而直接运行。

>error TS5097: An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled. 

为了编译通过，可以在导入语句上一行使用注释 // @ts-ignore 来忽略错误。

```ts
// @ts-ignore: TS5097 allowImportingTsExtensions
import * as mod from "./mod.ts";
```

还可以在 --noEmit or --emitDeclarationOnly 模式下配置 allowImportingTsExtensions 允许使用 .ts 扩展名。
https://www.typescriptlang.org/tsconfig#allowImportingTsExtensions


考虑到需要编译出可以用于浏览器的脚本模块导入，所以允许加 .js 扩展名，这样在浏览器才不会出错。Web 页面中使用模块语法导入 ESM：

<script type="module" src="./main.js"></script>

>Access to script at 'file://.../main.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

注意：模块涉及 CORS 跨域同源安全策略的约束，默认不支持通过 file:// 协议访问本地文件，即来源属性值 origin = 'null'，需要通过 Web 服务器来做测试。

模块文件 .mjs 后缀的文件需要以 MIME 类型为 `javascript/esm` 来加载 (或者其他的 JavaScript 兼容的 MIME，比如 `application/javascript`)。服务器响应头没有提供严格的 MIME 信息，比如 `Content-Type:
text/plain`，浏览器会一个严格的 MIME 类型检查错误拒绝加载模块。

1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules#故障排除
2. https://examples.deno.land/http-server-files
3. https://deno.land/manual@v1.36.2/examples/file_server
4. https://deno.land/std@0.194.0/http/mod.ts
5. https://deno.land/std@0.194.0/media_types/mod.ts
6. https://deno.land/std@0.194.0/media_types/vendor/mime-db.v1.52.0.ts?source

Web 服务器一般脚本语言都有提供，比如 python -m http.server 8080。需要修改 http.server 模块中的 SimpleHTTPRequestHandler extensions_map，添加正确的 MIME 类型映射。

也可以使用 Deno 脚本编写一个静态文件服务器，HTTP 服务器使用标准库 media_types 来获取 MIIME 类型信息。

```ts
  // https://deno.land/std@0.194.0/http/file_server.ts?source=#L205
  // Set mime-type using the file extension in filePath
  const contentTypeValue = contentType(extname(filePath));
  if (contentTypeValue) {
    headers.set("content-type", contentTypeValue);
  }
```

注意，http 模块使用 media_types 模块提供的 MIME 信息，其导出的 extensions 映射集合中的数据来源自 jshttp/mime-db db.json，模块导出为常量，修这个映射对服务器输出 MIIME 信息不起作用。`contentType("js")` 和 `typeByExtension("js")` 获取到的内容差异在于：前者可能包含完整的内容类型信息，包括编码方案信息，后者则只包含 MIME 类型信息。如果直接使用 http 模块中的 serveFile 服务，就不能对响应文件的 Content-Type 进行修改。Deno 官网几乎不提供 Web API 规范的文档，只提供链接，类型 Response、Headers 这样的接口 API 参考手册需要跳转到引用网站：

1. https://developer.mozilla.org/en-US/docs/Web/API/Response
2. https://developer.mozilla.org/en-US/docs/Web/API/Headers

```ts
// deno run -A https://deno.land/std/http/file_server.ts
import * as path from "https://deno.land/std@0.194.0/path/mod.ts";
import * as http from "https://deno.land/std@0.194.0/http/mod.ts";
import { serveDir, serveFile } from "https://deno.land/std@0.194.0/http/file_server.ts";


Deno.serve((req: Request) => {
  const uri = new URL(req.url);
  const pathname = decodeURI(uri.pathname).substring(1);
  console.log({pathname});

  if (pathname==""){
    const headers = new Headers({"Content-Type":"text/html; charset=utf-8"});
    return new Response("<h1 style='margin:50vh 45vw;'>Hello World!</h1>", { headers});
  }

  const stat = Deno.statSync(pathname);
  if (stat.isFile) {
    if (pathname.endsWith(".js")) {
    }
    return serveFile(req, pathname, {fileInfo: stat});
  } else if (stat.isDirectory) {
    return serveDir(req, {fsRoot:"public", urlRoot:"static"})
  }
  return new Response("404: Not Found", {
    status: 404,
  });
});
```

TypeScript 3.8 之前版本，使用 import 可以导入一个类型，到此版本后，还可以使用专用的 import type：

```ts
// Re-using the same import
import { APIResponseType } from "./api";
// Explicitly use import type
import type { APIResponseType } from "./api";
// Explicitly pull out a value (getResponse) and a type (APIResponseType) 
import { getResponse, type APIResponseType} from "./api";
```

以下是一个演示模块，执行编译命令生成 CommonJS、AMD、UMD 等不同的模块，可以看到打包机制的差别。

CommonJS 模块结构相对简洁，也可以 ESM 较类似，因为其加载过程完全交给了运行环境，比如 Node，使用 require() 导入。而 ESM 则由 Web 浏览器等加载，使用 import 和 export 进行导入导出。

AMD 使用 require()、define() 方法进行导入导出，使用一个函数作为封闭空间包装模块代码。UMD 通过加壳函数处理 factory() 中包含的按 AMD 原样包装的模块代码，壳函数会判断 `module` 变量和 `define` 函数，并选择执行 CommonJS 或 AMD 加载。这些模块的加载器都有共同的特点：使用封闭作用域包装模块代码，避免代码空间污染问题。

注意不同模块规范对 export 指令的使用有细小差别，比如 ESM 中使用的 export default 就不能用于 AMD。TypeScript 中导出的 namespace 会对应到其它模块中 `exports` 中的一个变量，并且命名空间下的代码会用一个匿名函数封闭起来，建议用新的模块规范替代命名空间。

```ts,ignore
// mod.ts
export function addup(a:number) {
    return a + 1;
}

export default addup;


// tsc --module commonjs mod.ts
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addup = void 0;
function addup(a) {
    return a + 1;
}
exports.addup = addup;
exports.default = addup;


// tsc --module amd mod.ts
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addup = void 0;
    function addup(a) {
        return a + 1;
    }
    exports.addup = addup;
    exports.default = addup;
});


// tsc --module umd mod.ts
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addup = void 0;
    function addup(a) {
        return a + 1;
    }
    exports.addup = addup;
    exports.default = addup;
});
```


TypeScript 生成脚本模块中包含一个标记属性 `__esModule`，用于不同模块规范的混用导入，在配置文件中启用 `esModuleInterop`，默认状态，这个标记属性作用就是指示当前模块是一个 ESM 模块。
如果被导入的模块没有标识 `__esModule`，则默认导入将直接返回一个只含有 `default` 属性的对象。

如果不开启 `esModuleInterop` 编译选项，则不能使用默认导入，必须用批量导入才能通过编译。

1. https://www.npmjs.com/package/react
2. https://www.typescriptlang.org/tsconfig#esModuleInterop
3. https://toyobayashi.github.io/2020/06/29/ESModule/

默认状态下，esModuleInterop = false 或者没有在配置文件中设置值，TypeScript 处理 CommonJS/AMD/UMD 模块和 ES6 modules 模块相似。为了混用这些模块，在这样做的过程中，有两个部分被证明是有缺陷的假设：

a namespace import like `import * as moment from "moment"` acts the same as `const moment = require("moment")`

a default import like `import moment from "moment"` acts the same as `const moment = require("moment").default`

这两种由于模块规范差异引起的不匹配导致以下两个问题：

ES6模块规范规定，命名空间导入 `import * as x` 只能是一个对象，通过将其视为 `= require("x")`，然后允许 TypeScript 将导入视为一个函数并可调用。根据规范，这是无效的。

虽然符合 ES6 模块规范，但大多数带有 CommonJS/AMD/UMD 模块的库并不像 TypeScript的 实现那样严格。


以引入 React 为例，官方发布包有 CommonJS (CJS) 和 UMD 两种模块打包，并且默认使用 CJS。

```ts
// import default
import React from 'react'
// import all
import * as React from 'react'
``` 

在没有开启 `esModuleInterop` 并且安装了 @types/react 的情况下，import default 会导致错误：此模块是使用 "export =" 声明的，在使用 "esModuleInterop" 标志时只能与默认导入一起使用。

总之，`__esModule` 标记属性用来兼容 ES 模块导入 CommonJS 模块的 default 导出方案。推荐向标准看齐，在以后写 CommonJS 模块的时候尽量不要用 module.exports 导出单对象，而是导出具体的属性名 exports.foo = bar。在 ES 模块中也尽量不要用 export default。



TypeScript 源代码中提供了一系列内建模块的类型声明，例如浏览器环境下的 DOM 或者 ECMAScript 规范定义的全局对象这样的命名空间，其本身没有相应的模块定义脚本文件，因为它们是 浏览器底层实现语言中导出到脚本运行时环境中的全局符号，例如  V8 Runtime。这样的模块就是内建模块，**built-in lib**，其包含全局类型需要引用类型声明文件，才能提供智能类型提示。其它内建模块定义参考 TypeScript 源代码中的 lib 目录。

TypeScript 4.5 开始，内建库可以被 npm modules 覆盖。

注：内建模块的类型声明文件命名类似 **lib.dom.d.ts**，其中前缀 lib 表示内建库，后缀 .d.ts 表示类型声明文件，所以在使用三斜杠指令引用内建库时，应该使用 **dom**，而不应该包含前缀、后缀，相当于给编译器指定参数 --lib dom。

	/// <reference lib="dom" />

TypeScript 有一个环境模块概念 Ambient Modules，即在一个 .d.ts 文件中使用多个 declaration module 为多个模块编写类型声明，避免在分散的类型声明文件中编写类型声明。然后在代码文件中使用 /// 指令引用这个集中管理的类型声明文件，然后使用 import 导入模块，就会相应获得 Ambient Modules 中的模块声明。这个方法可以用来给那些没有提供类型声明文件的模块编写类型声明，例如：

```ts
// node.d.ts 
declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}

// main.ts 
/// <reference path="node.d.ts"/>
import * as URL from "url";
```

TypeScript 类型信息加载流程：

- 源代码文件中已有的类型信息；
- 通过 import 导入的代码文件包含的类型信息；
- 通过加载类型声明文件提供的类型信息，结合项目配置项使用；

早期，import 语法还没有 ES6 规范，使用三斜线指令引用类型声明：

	/// <reference path="./jquery.d.ts" />
	/// <reference types="node" />

- path 类型声明的是对本地文件的依赖，包含本地路径信息；
- types 类型声明默认是 node_modules/@types 文件夹下的类型信息；

三斜线指令不会将一个全局文件变成模块文件，而 import 会。如果你需要一个在全局文件 b 里用另一个文件 c 里的变量，就可以用三斜线指令，因为用 import 会把 b 变成一个模块文件。


为模块/库写声明文件之前，需要知道这些模块/库是否需要声明文件，或者是否已有声明文件。

若第三方模块/库本身使用 TypeScript 编写且无声明文件， 可以使用编译器参数 --declaration 或配置文件 tsconfig.json 配置选项来生成类型声明文件。

若第三方模块/库本身使用 JavaScript 编写，作者有可以已经提供 npm 类型声明包并发布到 @types，或者与该 npm 包绑定在一起，安装相应的模块即可以获取类型声明文件。

对于无类型声明的其它脚本，则需要自己手写声明文件，或者使用编译器生成 d.ts 类型声明文件。例如，以下有一个演示模块 m.js，只简单导出一个函数：

```js
// m.js
export function addup(a) {
    return a + 1;
}

export default addup;
```

执行编译命令生成类型声明文件内容如下，尽管类型都使用 any，它表示变量可以是脚本中任何支持的类型。因为 TypeScript 默认编译器配置，相当于命令行中指定模块类型为 commonjs，生成的这个类型声明文件本身是一个 CommonJS 模块，可以在脚本中使用 import 进行导入使用：

    tsc --allowJs --declaration --emitDeclarationOnly m.js
    tsc --allowJs --declaration --emitDeclarationOnly --module commonjs m.js

```ts
// m.d.ts
export function addup(a: any): any;
export default addup;
```

为了给 m.js 脚本编写准确的类型声明文件，并且在 TypeScript 有相应的类型智能提示，可以按以下操作：

1. 借助 Ambient Modules 在类型声明文件中的模块中定义导出的符号。
2. 修改配置文件，设置 paths 映射，将模块名映射到脚本文件。
3. 使用 /// 指令引用类型声明文件。
4. 使用 import 导入映射后的模块名，以使用环境模块类型信息生效。

这种导入方式，生成的代码不一定能够直接运行，因为模块映射的文件并不会替换到生成的脚本中，而是保留着以模块名导入。

```ts
// tsconfig.son

    "baseUrl": "./",
    "paths": {
      "mod":"./m.js"
    },

// m.d.ts
declare module "mod" {
    export function addup(a: string): string;
    export default addup;
}
// Global symbol, namespace
declare lets jQuery: (selector: string) => object;
declare namespace ns {
    export let jQuery: (selector: string) => object;
}

// main.ts
/// <reference path="./m.d.ts"/>
import * as m from "mod";

console.log({m});
```

注意：使用 Deno 运行时，大部分 TypeScript 编译选项都不支持，并且配置文件需要手动通过 --config tsconfig.json 参数传入，并不会自动加载。Deno 有自己的配置文件 deno.jsonc，可以使用 deno init 命令初始化。Deno v1.18 开始自动检测 deno.json 或者 deno.jsonc 配置文件。模块映射使用 imports 设置，参考如下：

```json
{
  "imports": {
    "md":"./m.js"
  },
  "tasks": {
    "dev": "deno run --watch main.ts"
  }
}
```

获取当前生效的配置项：

```sh
tsc --showConfig
```


## 🐣 TypeScript 解决什么问题？

JavaScript 一直以来的灵活性引出了一个编程语言类型的选择问题：

1. 选择 Static type 还是 Dynamic type？
2. 选择 Strong  type 还是 Weak type？

这不是好与坏之间的问题，而是合适与不合适之间取舍的权衡。动态类型与静态类型差别在于，动态类型在实现上使用的数据结构可以兼容多种类型，在运行时可以按需要转化类型。而静态类型则不可以，声明什么类型它就是固定的类型。

强类型与弱类型的差别不仅在底层实现上，更体现在于对代码的约束，强类型必需要未求数据类型一致才能达成逻辑操作，而弱类型不需要。

TypeSciprt 的出场就是静态类型与强类型结合，一方面有足够的类型操作的灵活性，另一方法又提供了强类型的安全性，通过配合 Language Server Protocol (LSP) 提供的智能提示，可以让你的代码更健壮（我不想说鲁棒）、更具有可维护性，对于开发大型项目而言，这无异是极大的优势！

注意：强类型、弱类型这样的描述本身具有较多争议，存在误用的情况，建议少用。

TypeScript 在类型系统的设计上，是套完整的类型体操逻辑系统，类型可以通过各种逻辑操作进行组合拆分。一方面又引入了 `any`、`unknow`、`never` 、`void` 等类型解决 JavaScript 遗留问题，主要是指 `undefined` 问题。

JavaScript 主要遗留问题是 null 和 undefined 这样的特殊类型值，默认情况下它们是所有类型的子类型，可以赋值给任何类型的变量。要避免其它类型的变量被赋值为 undefined，可以使用严格空值检查模式编译器选项 --strictNullChecks，这个选项用来配合 TypeScript 2.0 增加的 NonNullable<Type> 工具类型使用。开户严格 null 检查模式后，代码就需要做变量值测试工作保证逻辑的严格性。

`any` 类型就是类型系统中存在的一切类型，或者没有类型约束的类型。`any` 类型本质上是类型系统的一个逃逸舱。作为开发者，这给了我们很大的自由：TypeScript 允许我们对 `any` 类型的值执行任何操作，而无需事先执行任何形式的检查，就像在 JavaScript 中编程一样。

TypeScript 3.0 引入顶级的 `unknown` 类型， 对照于 `any`，`unknown` 是类型安全的。任何值都可以赋给 `unknown`，但是当没有类型断言或基于控制流的类型细化时 `unknown` 不可以赋值给其它类型，除了它自己和 `any` 外。 同样地，在 `unknown` 没有被断言或细化到一个确切类型之前，是不允许在其上进行任何操作的。

TypeScript 类型系统是结构化类型，也称鸭子类型（duck typing）。

当看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子。

更确切地说，TypeScript 类型系统是结构类型系统（Structural type system），任意两个以相同结构描述的值具有相同类型。

TypeScript 类型系统元素包括：

1. JavaScript 基础类型：boolean、string、number、bigint、symbol、object、undefined、null
2. JavaScript 基础对象：Boolean、String、Number、BigInt、Symbol、Object
3. 各种工具类型 Utility Types 以及类型体操逻辑运算：

        instanceof  实例判断
        typeof      类型判断
        as          类型强制转换
        is          断言返回布尔类型
        ?           条件类型
        keyof       键名索引
        in          映射
        infer       声明待推断的类型
        <>          泛型
        type        别名
        |           联合类型
        &           交叉类型

现在，让我们来重新实现前面的 addup 函数：

```js
function addup<T>(arg:T) {
  if (typeof arg ==="number") {
      console.log(arg + 1);
  } else if (typeof arg === "string") {
      console.log(+arg + 1);
  }
}

addup(1);   // 2
addup("1"); // 2
addup("a"); // NaN
```

以上就是 TypeScript 中的一个 Type-narrowing 类型收缩函数，通过逻辑条件判断细分数据的类型。有些函数通过逻辑判断输入参数的类型，并返回一个布尔值表示确定参数是某类型，这种函数在 TypeScript 中叫做守卫函数 guard functions。代码片段中使用到 TypeScript 的泛型、类型收缩、类型自动推断等特性。TypeScript 会按泛型函数 `addup()` 使用到的两种 arg 参数类型，数值和字符串，实例化两个不同的函数：`addup(arg:number)`  和 `addup(arg:string)` 。在函数未标明返回类型，也没有 return 语句时，函数的返回类型为 void。

通过类型指示标注（变量或数据后面的冒号续写的部分用来定义类型），所有变量或数据都拥有一个特定的类型标记，type notation，TypeScript 编译器的主要功能就是确定在相同的类型标记这一条件达成的前提下进行各种逻辑操作。

JavaScript 中常用的 JSON 表达，因为在字面量，TypeScript 可以利用自动推断功能获得其类型，如下代码变量 a 和 b 的类型可以自动根据右侧的字面量推断，所以可以省略 `{id:number}` 这个类型标记信息。每个类型都是成员的数据集合，当一个集合包含另一集合，那么就是兼容类型，如下 b 变量的类型兼容 a 变量的类型，所以 b 可以赋值给 a，但反过来不行。相对于一个变量的类型，它也是数据类型的集合，但是超集可以兼容子集，反过过则不行。比如 `number|null` 交集类型兼容 `number` 类型或者 `null` 类型，可以赋值给超集。但反过来，`number|null` 类型不能赋值给 `number` 类型或者 `null` 类型，因为总有意外的类型不能满足。

```ts
let a: {id:number} = {id:123}
let b = {id:234, tag:"type"}
a = b; // compatiable type
b = a; // Property 'tag' is missing in type '{ id: number; }'
```

字面量类型 Literal Type 可能是最能够体现 TypeScript 类型系统灵活性的一个类型。一般来说，TypeScript 会根据字面量类型自动推断出变量的类型，而不需要声明变量类型。而将字面量当作类型使用，用来声明变量，那么变量就只能接收所声明的字面量：

```ts
type LT = true | "hello" | 996 | [null,string] | {id:number};
let lt: LT = 996;
lt = {id:123};
lt = true;
lt = [null,"NULL"];
// Type 'false' is not assignable to ...
// lt = 123;
// lt = false;
```

以上定义了一个字面量类型 LT，它的值只可以是声明的 5 种形式：

1. 布尔值中的 true；
2. 字符串字面量 "hello"；
3. 数值 996；
4. Tuple 元组 [null,string]，元组是数组的一种，并且是元素有类型秩序的数组；
5. 对象字面量，类型是 {id:number}，即只有一个 id 号码的对象类型；



## 🐣 TypeScript 学习的路线安排

以上就是 TypeScript 的最基础的内容，由于其类型系统的强大，以致官方文档中直接使用类型体操 Type Manipulation 这样的字眼。

https://www.typescriptlang.org/docs/

官方文档内容非常丰富，这里就学习 TypeScript 路径给出一些指引信息：

1. 了解 JavaScript/TypeScript 脚本编程的发展，以及 ECMAScript 脚本规范；
2. 了解脚本的模块化规范，如 Node 使用的 CommonJS 以及最新的 ES Modules 规范；
3. 了解编译器的使用与配置选项，特别是 Declaration Files (.d.ts) 类型声明文件的使用；
4. 了解 TypeScript 对 JavaScript 类型的兼容支持，以及各种流程控制关键字的使用；
5. 了解 TypeScript 各种工具类型的使用，它们可以对类型进行灵活操作；
6. 了解 TypeScript 的接口、类型、泛型等等功能的使用；
7. 了解一些 TypeScript 应用的开发框架，比如开源的 VS Code，或者 Deno，或者 React 或 Vue 等前端框架。


TypeScript Cheat Sheets 是快速参考卡，可以快速了解 TypeScript 的功能概要：

https://www.typescriptlang.org/cheatsheets
https://www.typescriptlang.org/assets/typescript-cheat-sheets.zip


1. TypeScript Control Flow Analysis

https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png

2. TypeScript Interfaces

https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png

3. TypeScript Types

https://www.typescriptlang.org/static/TypeScript%20Types-ae199d69aeecf7d4a2704a528d0fd3f9.png

4. TypeScript Classes

https://www.typescriptlang.org/static/TypeScript%20Classes-83cc6f8e42ba2002d5e2c04221fa78f9.png




# ⚑ 5分钟上手TypeScript

让我们使用 TypeScript 来创建一个简单的 Web 应用。

## 通过 Node.js 安装

Node.js 命令行的 TypeScript 编译器可以使用 npm 来安装，安装后会有一个 tsc 命令来转译 TypeScript 代码为 JavaScript，也可以安装 ts-node 来直接解析运行。

	npm install -g typescript
	npm install -g ts-node
	tsc helloworld.ts
	ts-node helloworld.ts

使用 VSCode、Sublime Text、Vim 作为开发工具都是很好的选择。

## Hello TypeScript

变量后面的分号跟着 TypeScript 类型注解语法，这种显式的类型提高了程序的可读壮，同时也降低了出错的可能：

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

看看 TS 代码编译后的实现：

	var Student = /** @class */ (function () { // 使用闭包封装构造函数
	    function Student(firstName, middle, lastName) {
	        this.firstName = firstName;
	        this.middle = middle;
	        this.lastName = lastName;
	        this.fullName = "";
	        this.age = 18;
	        this.fullName = firstName + ' ' + middle + ' ' + lastName;
	    }
	    return Student;
	}());
	function greeter(person) {
	    return "Hello, " + person.firstName;
	}
	var user = { firstName: "Jane", lastName: "User" };
	// let user = new Student("Jane", "M.", "User");
	var $ = function (id, msg) {
	    var tag = document.getElementById(id);
	    if (!tag) {
	        document.body.innerHTML = ("HTML element not found #" + id);
	    }
	    else {
	        tag.innerHTML = msg;
	    }
	};
	$("content", greeter(user));

注释中以 ** 打头形式的注释可以给 TS 类型做标记提示，编辑器会有更好的提示：

	/** This is a cool guy. */
	interface Person {
	  /** This is name. */
	  name: string,
	}

	const p: Person = {
	    name: 'cool'
	}


类 `class`，接口 `interface` 还有泛型是 TypeScript 提供的强大的编程辅助工具，通过它们可以实现许多高级语言编程模式可以做的事。

例子展示了类成员 `fullName` 的定义，默认为 `public` 访问许可，成员也可以被标记成 `proteced` 或 `private`，这样它就不能在声明它的类的外部访问，`protected` 成员在派生类中仍然可以访问。除此外，`readonly` 也是可以使用的修饰符号，与 `const` 一样具有不可修改的特性，只是后者是类常数不是类成员。另外 `static` 用来定义静态类成员。使用这些访问需要关键字需要在编译时通过 `--target ES5` 或 `-t ES5` 启用 ES5 以上的规范，默认是 ES3。尽管如此，TypeScript 代码转换到 JavaScript 后他们都是以同样的 JavaScript 机制起作用的，这些访问许可的检查只在 TypeScript 规范中体现。

在派生类中还需要 `super()` 来调用父类构造函数。在使用构造函数时，也可以按 JavaScript 的风格来编写，下面就通过一个匿名函数来封装一个 `Greeter(message)` 构造函数，同时使用 JavaScript 原型链 prototype 扩展成员函数 `greet()`。调用 new 并执行了这个构造函数后就得到一个类实例。 换个角度说，我们可以认为类具有 实例部分与 静态部分，这个构造函数也包含了类的所有静态属性。

	let Greeter = (function () {
	    function Greeter(message) {
	        this.greeting = message;
	    }
	    Greeter.prototype.greet = function () {
	        return "Hello, " + this.greeting;
	    };
	    return Greeter;
	})();

	let greeter = new Greeter("world");
	console.log(greeter.greet());

TypeScript 支持把类当做接口使用，也就是接口可以扩展类，`interface A extends ClassB`，在 JavaScript 的原型继承角度看这也是可以的。 

通过 `new` 产生的类实例，在 JavaScript 的角度看，可花括号这种匿名对象 `{firstName:"name"}` 是等价的，因此例子的两种实例化都可以。

把例子代码保存到 `greeter.ts` 然后使用 tsc 命令转译到 JavaScript:

	tsc greeter.ts

在 greeter.html 里输入如下内容就可以运行 TypeScript Web 应用：

	<!DOCTYPE html>
	<html>
	    <head><title>TypeScript Greeter</title></head>
	    <body>
	        <script src="greeter.js"></script>
	    </body>
	</html>

**TypeScript 作爲强類型語言，其接口類型 interface、汎型 generic<T> 及其他基礎/高級類型技術是非常重要而基礎的，參考官方文檔 Basic/Advanced Types。**


# ⚑ Types for classes as values
- Typing objects in TypeScript https://2ality.com/2020/01/typing-objects-typescript.html
- Types for classes as values in TypeScript https://2ality.com/2020/04/classes-as-values-typescript.html

Dr. Axel Rauschmayer 在他的 2ality blog 上提出了一个问题：

	class Point {
	  x: number;
	  y: number;
	  constructor(x: number, y: number) {
	    this.x = x;
	    this.y = y;
	  }
	}

	function createInstance(TheClass: ???, x: number, y: number) {
	  return new TheClass(x, y);
	}

	// inferred-type: Point
	const point = createInstance(Point, 3, 6);
	assert.ok(point instanceof Point);

TypeScript 类型系统有两个清晰的语法概念：

- Runtime (dynamic): plain JavaScript
	- Statements become code and may produce values as side effects (e.g. function declarations).
	- Expressions become values.
- Compile time (static): TypeScript
	- Type expression become types.

所以，`Point` 这类定义创建了两个重要内容：

- The `constructor` function Point
- The `interface Point` for instances of Point

所以 ??? 应该是 `typeof Point`。

使用 `typeof` 的另一个例子，从变量中获取类型信息：

	const KeyToVal = {
	   MyKey1: 'myValue1',
	   MyKey2: 'myValue2',
	};
	// type Keys = "MyKey1" | "MyKey2"
	type Keys = keyof typeof KeyToVal;

易用性上，很容易在 `keyof` 功能之上联想到 `valueof` 样的类型操作，TypeScript 没有直接提供，结合 typeof 和 index 类型可以实现。

例如，用对象成员的值来定义新类型：

	const obj = { 
	  a: 1, 
	  b: 'some_string' 
	} as const;

	// type values = 1 | "some_string"
	type ValueType = typeof obj[keyof typeof obj];

但是不能将索引类型，即联合类型与映射类型结合：

	type ValueT = {[key: ValueType]: string};
	//              ^^^ An index signature parameter type cannot be a union type.


文章中还解析了两种构造函数的两种表达形式：

- Constructor type literals 所谓构造器类型的字面表达，就是前缀 `new` 的函数类型定义，表示需要执行实例化。
- Object type literals with construct signatures 对象类型字面表达的构造器也是类似前缀 `new`，但是返回类型写在冒号后面。

```
function createInstance(
  TheClass: new (x: number, y: number) => Point,
  x: number, y: number
) {
  return new TheClass(x, y);
}

function createInstance(
  TheClass: {new (x: number, y: number): Point},
  x: number, y: number
) {
  return new TheClass(x, y);
}
```

## 泛型类 Class<T>  

根据前面的内容，可以用以下两种方式实现泛型类型：

```
// type alias
type Class<T> = new (...args: any[]) => T;

// we can also use an interface:
interface Class<T> {
  new(...args: any[]): T;
}
```

泛型就是多了泛型参数的类型，上面只定义了 T 这个泛型参数。

```
function newInstance<T>(TheClass: Class<T>, ...args: any[]): T {
  return new TheClass(...args);
}

class Person {
  constructor(public name: string) {}
}
const jane: Person = newInstance(Person, 'Jane');
```

实现类型转换方法：

```
function cast<T>(TheClass: Class<T>, obj: any): T {
  if (! (obj instanceof TheClass)) {
    throw new Error(`Not an instance of ${TheClass.name}: ${obj}`)
  }
  return obj;
}

function parseObject(jsonObjectStr: string): Object {
  // %inferred-type: any
  const parsed = JSON.parse(jsonObjectStr);
  return cast(Object, parsed);
}
```

实现安全 Map 对象：

```
class TypeSafeMap {
  #data = new Map<any, any>();
  // Private id require targeting ECMAScript 2015 and higher.
  get<T>(key: Class<T>) {
    const value = this.#data.get(key);
    return cast(key, value);
  }
  set<T>(key: Class<T>, value: T): this {
    cast(key, value); // runtime check
    this.#data.set(key, value);
    return this;
  }
  has(key: any) {
    return this.#data.has(key);
  }
}

const map = new TypeSafeMap();

map.set(RegExp, /abc/);

// %inferred-type: RegExp
const re = map.get(RegExp);

// Static and dynamic error!
assert.throws(
  // @ts-ignore: Argument of type '"abc"' is not assignable
  // to parameter of type 'Date'.
  () => map.set(Date, 'abc'));
```

在旧版 TypeScript 中，Class<T> 不能用在抽象类型上，需要使用特殊语法：

```
type Class<T> = new (...args: any[]) => T;
abstract class Shape {
}
class Circle extends Shape {
    // ···
}

// @ts-ignore: Type 'typeof Shape' is not assignable to type 'Class<Shape>'.
//   Cannot assign an abstract constructor type to a non-abstract constructor type. (2322)
// const shapeClasses1: Array<Class<Shape>> = [Circle, Shape];

type Class2<T> = Function & {prototype: T};
const shapeClasses2: Array<Class2<Shape>> = [Circle, Shape];
```



## Object type literals and interfaces 

在 Axel Rauschmayer 的另一篇文章中提到 OLT - object literal types 语法概念，包括这时提到的构造器字面表达，有以下这几种 OLT 表达形式：

- method signatures 
- call signatures
- construct signatures

TypeScript 类型系统中有两个对象概念：

- `Object` 大写 “O” 的表示所有 class Object 的实例，它是 JavaScrpt 提供的复杂对象类型。
- `object` 小写 “o” 的表示非原始值类型，即所有复杂类型。

TypeScript 有两种基本的对象类型定义方式，字面量和接口定义：

```js
// Object type literal
let obj3: {prop: boolean};

// Interface
interface ObjectType {
  prop: boolean;
}
let obj4: ObjectType;
```

使用上基本一致，差别在于类型推导过程：

```
// Inlined object type literal:
function f1(x: {prop: number}) {}

function f2(x: ObjectInterface) {} // referenced interface
interface ObjectInterface {
  prop: number;
}
```

以下这个接口定义包含了索引签名，表示可以对这种类型进行索引取值：

```js
interface I1 {
  [key: string]: boolean;

  // @ts-ignore: Property 'myProp' of type 'number' is not assignable to string index type 'boolean'.(2411)
  myProp: number;
  
  // @ts-ignore: Property 'myMethod' of type '() => string' is not assignable to string index type 'boolean'.(2411)
  myMethod(): string;
}
```

将关注点放在 method signatures，如果不是按接口方式定义，而是按对象字面量定义，则可以表达为：

```js
type Method = { myMethod(): string }
```



# ⚑ Flow vs TypeScript
- TypeScript vs FlowType https://github.com/niieani/typescript-vs-flowtype
- Adopting Flow and TypeScript - http://thejameskyle.com/adopting-flow-and-typescript.html
- Flow 静态类型检查器 https://flow.org/en/docs/
- React 源码全方位剖析 http://www.sosout.com/2018/08/12/react-source-analysis.html
- Flow 语法检查器在线 AST 支持 https://flow.org/try/
- How to configure Flow .flowconfig https://flow.org/en/docs/config/
- Learn how to use Flow with flow-remove-types https://flow.org/en/docs/tools/flow-remove-types/
- Advanced features in Flow https://sitr.us/2015/05/31/advanced-features-in-flow.html
- Document advanced Utility Types https://github.com/facebook/flow/issues/2464
- Comparison with Facebook Flow Type System #1265 https://github.com/Microsoft/TypeScript/issues/1265


JavaScript 因为没有静态变量而受到批评。试图纠正此问题的两个主要开发库是 TypeScript 和 Flow，TypeScript 似乎更受欢迎。

Flow 是 facebook 出品的 JavaScript 静态类型检查工具，即 Flow 是静态类型检查工具，由 Babel 负责转译，而 TypeScript 是一门语法，提供编译的实现。

与 Typescript 不同的是，它可以部分引入，不需要完全重构整个项目，所以对于一个已有一定规模的项目来说，迁移成本更小，也更加可行。除此之外，Flow 可以提供实时增量的反馈，通过运行 Flow server 不需要在每次更改项目的时候完全从头运行类型检查，提高运行效率。可以简单总结为：对于新项目，可以考虑使用 TypeScript 或者 Flow，对于已有一定规模的项目则建议使用 Flow 进行较小成本的逐步迁移来引入类型检查。React 的源码利用了 Flow 做了静态类型检查，所以了解 Flow 有助于我们阅读源码。


## Flow 基本使用

安装 Flow 命令工具并初始化项目：

	npm install -g flow-bin
	flow init

目录下生成一个名为 .flowconfig 的配置文件，没有什么特殊需求是不用去配置的，Flow 默认涵盖了当前目录之后的所有文件。

假设项目目录结构如下：

	otherdir
	└── src
	    ├── othercode.js
	mydir
	├── .flowconfig
	├── build
	│   ├── first.js
	│   └── shim.js
	├── lib
	│   └── flow
	├── node_modules
	│   └── es6-shim
	└── src
	    ├── first.js
	    └── shim.js

配置文件 .flowconfig 包含 7 个配置区：

- [declarations] 用正则表达式去匹配需要 Flow 启用 declaration mode 解析模式的文件；
- [include] 用于引入项目之外的文件；
- [ignore] 用正则表达式去匹配那些要排除文件；
- [untyped] 用正则表达式去匹配那些不需要进行类型检查的文件；
- [libs] 引入类型库；
- [lints] 配置 linting 规则；
- [options] 选项配置，键值对格式；
- [version] 指定需要使用 Flow 的版本，留空表示不限制；

参考配置：

	[declarations]
	<PROJECT_ROOT>/third_party/.*

	[include]
	../otherdir/src
	../otherProject/a.js

	[ignore]
	.*/build/.*

	[untyped]
	.*\.untype\.js

	[libs]
	./lib

	[lints]
	# all=off by default
	all=warn
	untyped-type-import=error
	sketchy-null-bool=off

	[options]
	module.file_ext=.foo
	module.file_ext=.bar

	[version]
	0.22.0

默认的命令就是查看项目检查信息：

	flow
	flow status

	flow check
	flow check src
	flow check src/index.js


测试指定文件的类型覆盖率或打印 AST 抽象语法树：

	flow ast index.js
	flow coverage index.js
	flow batch-coverage src/


Flow 在 JavaScript 语法的基础上使用注解 annotation 进行了扩展，浏览器无法正确的解读相关的语法，最终发布的代码中必需将这些 Flow 注解移除掉。有几个 React 开发常用的编译工具：

- Babel
- flow-remove-types
- Create React App

使用 create-react-app 工具直接创建的项目，默认配置好如何移除 Flow 注解，不必我们搞这个事。
	
	npm install -g create-react-app
	create-react-app my-app && cd my-app
	yarn add --dev flow-bin
	yarn run flow init

如果使用 Babel 我们需要安装一个 Babel 对于 Flow 的预配置：

	$ npm install --save-dev babel-preset-flow

然后，我们需要在项目根目录 Babel 的配置文件 .babelrc -> presets 中添加一个 Flow：

	{
	  "presets": [
	    "flow",
	    // ...
	  ]
	}

还可以使用 flow-remove-types 这个工具在发布之前移除 Flow 注解代码：

	yarn add --dev flow-remove-types
	# or
	npm install --save-dev flow-remove-types

	npm install --global flow-remove-types
	flow-remove-types --help
	flow-remove-types input.js > output.js

将 src 目录下的源代码编译，并保存到其它目录：

	yarn run flow-remove-types src/ -d lib/

可以将命令写入 npm 项目配置文件 package.json：

	{
	  "name": "my-project",
	  "main": "lib/index.js",
	  "scripts": {
	    "build": "flow-remove-types src/ -d lib/",
	    "prepublish": "yarn run build"
	  }
	}


## Flow & TypeScript 差异比较

maybe & nullable type 可空类型

	// Flow
	let a: ?string

	// equivalent to:
	let a: string | null | void

	// TypeScript
	let a: string | null | undefined

Optional parameters implicitly add undefined 可选参数隐含添加 undefined

	function f(x?: number) { }
	// is semantically the same as:
	function f(x: number | undefined) { }
	// and also same as (the `| undefined` is redundant):
	function f(x?: number | undefined) { }

Optional properties implicitly add undefined 可选属性隐含添加 undefined

	class A {
	  foo?: string;
	}

type casting 类型转换

	// Flow
	(1 + 1 : number);
	
	// TypeScript
	(1 + 1) as number;

	// OR (jsx version, not recommended):
	<number> (1 + 1);

Exact/Partial Object Types 严格/可选属性的对象类型

	// Flow
	// When using flow, { name: string } only means “an object with at least a name property”.
	type ExactUser = {| name: string, age: number |};
	type User = { name: string, age: number };
	type OptionalUser = $Shape<User>; // all properties become optional
	
	// TypeScript
	type ExactUser = { name: string, age: number };
	type User = { name: string, age: number, [otherProperty: string]: any };
	type OptionalUser = Partial<ExactUser>; // all properties become optional

Importing types 导入类型

	// Flow
	import type {UserID, User} from "./User.js";
	// equivalent:
	import {type UserID, type User} from "./User.js";
	
	//TypeScript
	import {UserID, User} from "./User.js";

typeof 获取对象的类型

	// Flow
	import typeof {jimiguitar as GuitarT} from "./User";

	// OR

	import {typeof jimiguitar} from "./User.js";
	type GuitarT = jimiguitar;

	// OR (below also works in TypeScript)

	import {jimiguitar} from "./User.js";
	type GuitarT = typeof jimiguitar;

	// TypeScript
	import {jimiguitar} from "./User";
	type GuitarT = typeof jimiguitar;

Restrictive type 类型守卫

	// Flow - mixed

	function stringifyNum(num: number) {
	  // Do stuff
	}

	function stringify(value: mixed) {
	  if (typeof value === 'string') {
	    return '' + value; // Works!
	  }
	  if (typeof value === 'number') {
	    return stringifyNum(value); // Works!
	  }
	  return '';
	}


	// Typescript - unknown

	function stringifyNum(num: number) {
	  // Do stuff
	}

	function stringify(value: unknown) {
	  if (typeof value === 'string') {
	    return '' + value; // Works!
	  }
	  if (typeof value === 'number') {
	    return stringifyNum(value); // Works!
	  }
	  return '';
	}

Accessing the type of a Class，类是有类型定义的，但是不需要显式定义它的类型，可以使用 typeof 获取类对象的类型定义。

	// Flow
	class Test {};
	type TestType = typeof Test;

	const instance = new Test();
	type TestTypeFromInstance = Class<typeof instance>;

	// TypeScript
	class Test {};
	type TestType = typeof Test;

Nominal typing 名义类型，Flow 将类看作名义类型，而 TypeScript 看作结构化类型 structural types。

	// Flow
	class Foo {};
	class Bar {};

	const foo: Foo = new Bar();
	// Cannot assign `new Bar()` to `foo` because `Bar` [1] is incompatible with `Foo` [2].


	// TypeScript
	class Foo {};
	class Bar {};

	const foo: Foo = new Bar();
	// No errors!

可以在 TypeScript >=3.7.0 中按以下这样做来解决这个问题：

	class Foo {
	    declare private __nominal: void;
	};
	class Bar {
	    declare private __nominal: void;
	};

	const foo: Foo = new Bar();
	// Type 'Bar' is not assignable to type 'Foo'.
	// Types have separate declarations of a private property '__nominal'.(2322)

Keys/Props Of Type 类型成员的主键
	
	// Flow
	var props = {
	  foo: 1,
	  bar: 'two',
	  baz: 'three',
	}

	type PropsType = typeof props;
	type KeysOfProps = $Enum<PropsType>;

	function getProp<T>(key: KeysOfProps): T {
	  return props[key]
	}
	

	// TypeScript
	var props = {
	  foo: 1,
	  bar: 'two',
	  baz: 'three',
	}

	type PropsType = typeof props
	type KeysOfProps = keyof PropsType;

	function getProp<T>(key: KeysOfProps): T {
	  return props[key]
	}

Records 记录类型

	// Flow
	type $Record<T, U> = {[key: $Enum<T>]: U}
	type SomeRecord = $Record<{ a: number }, string>


	// TypeScript
	type SomeRecord = Record<{ a: number }, string>

Lookup Types 查表类型

	// Flow
	type A = {
	  thing: string
	}

	// when the property is a string constant use $PropertyType (i.e. you know it when typing)
	type lookedUpThing = $PropertyType<A, 'thing'>

	// when you want the property to be dynamic use $ElementType (since Flow 0.49)
	function getProperty<T : Object, Key : string>(obj: T, key: Key): $ElementType<T, Key> {
	    return obj[key];
	}


	// TypeScript
	type A = {
	  thing: string
	}

	type lookedUpThing = A['thing']

	// and...

	function getProperty<T, K extends keyof T>(obj: T, key: K) {
	    return obj[key];  // Inferred type is T[K]
	}

	function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
	    obj[key] = value;
	}

只是 Flow 的使用起来有点费事：

	/* @flow */

	function getProperty<T : Object, Key : string>(obj: T, key: Key): $ElementType<T, Key> {
	    return obj[key];
	}

	type Foo = { value: number, name: string }

	let a: Foo = {value:100, name:"Perfect"}
	let v = getProperty<Foo, 'value'>(a, 'value');


Type-narrowing functions 类型收缩函数，有些函数通过逻辑判断输入参数的类型，并返回一个布尔值表示确定参数是某类型，这种函数在 TypeScript 中叫做守卫函数 guard functions。

在 TypeScript 中，它确保 true 和 value 的映射是 T，而在 Flow 的情况下，它确保根据函数体中的逻辑检查值，例如 typeof、instanceof、value===undefined。这意味着您不能告诉 Flow 被测试的参数是任意类型的，Flow 禁止复杂情况。

	// Flow
	function isNil(value: mixed): boolean %checks {
	  return value == null;
	}

	const thing = null;

	if (!isNil(thing)) {
	  const another = thing.something;
	}


	// TypeScript
	function isNil<T>(value: T | null): value is null {
	  return value == null;
	}

	const thing: any = null;

	if (!isNil(thing)) {
	  const another = thing.something;
	}

当前，Flow 还没有完全实现，%checks 还不能在类方法中使用。

	// @flow
	type Human = {
	    name: string,
	    surname: string,
	}

	function ensureHuman(input : any) : %checks {
	    return typeof input === 'object'
	        && 'name' in input
	        && 'surname' in input
	        && typeof input.name === 'string'
	        && typeof input.surname === 'string'
	}

	const arrayOfHumansAndNumbers = [
	    {name: 'Elon', surname: 'Musk'},
	    123,
	]

	const arrayOfHumans = arrayOfHumansAndNumbers.filter(ensureHuman)

	// this is safe, because we know there are only humans here, but Flow doesn't get it:
	arrayOfHumans[0].name


获取函数返回值的类型：

	// Flow - $Call utility type:

	type Fn1 = <T>(T) => T;
	type E = $Call<Fn1, number>;

	declare var e: E; // E is number
	(42: E); // OK


	// TypeScript - ReturnType utility type:

	type fn1<T> = (a: T) => T;

	type E = ReturnType<fn1<number>>;

	var e: E; // E is number

Mapped Types / Foreach Property

	// Flow
	type InputType = { hello: string };
	type MappedType = $ObjMap<InputType, ()=>number>;


	// TypeScript
	type InputType = { hello: string };
	type MappedType = {
	  [P in keyof InputType]: number;
	};


Function and method overloading 函数与方法重载

	// Flow

	declare function add(x: string, y: string): string;
	declare function add(x: number, y: number): number;

	declare class Adder {
	  add(x: string, y: string): string;
	  add(x: number, y: number): number;
	}

	// overloads inline for functions outside of classes, by using additional declarations.
	declare function add(x: string, y: string): string;
	declare function add(x: number, y: number): number;
	function add(x, y) {
	  return x + y;
	}

	add(1, 1);     // Ok
	add("1", "1"); // Ok
	add(1, "1");   // Error


	// TypeScript

	class Adder {
	  add(x: string, y: string): string;
	  add(x: number, y: number): number;
	  add(x, y) {
	    return x + y;
	  }
	}


	function add(x: string, y: string): string;
	function add(x: number, y: number): number;
	function add(x, y) {
	  return x + y;
	}

Read-only Types 只读类型

	// Flow
	type A = {
	  +b: string
	}

	let a: A = { b: 'something' }
	a.b = 'something-else'; // ERROR
	

	// TypeScript
	type A = {
	  readonly b: string
	}

	let a: A = { b: 'something' }
	a.b = 'something-else'; // ERROR

使 TypeScript 的 readonly 不那么安全，因为非只读属性与 readonly 属性兼容，这意味着可以将具有只读属性的对象传递给一个函数，该函数需要非只读属性，而 TypeScript 不会抛出错误。

	function test(x: { foo: string }) { 
	    x.foo = 'bar';
	}

	const x: { readonly foo: string } = { foo: 'baz' };

	test(x);

"Impossible flow" type 不可能出现的类型

	// Flow - empty

	function returnsImpossible() {
	  throw new Error();
	}

	// type of returnsImpossible() is 'empty'
	


	// TypeScript - never

	function returnsImpossible() {
	  throw new Error();
	}

	// type of returnsImpossible() is 'never'


Difference types 差异类型

	// Flow
	type C = $Diff<{ a: string, b: number }, { a: string }>
	// C is { b: number}

	Flow also has $Rest<>, which represents the result of the JS object rest operator ({ ...rest }).

	type Props = { name: string, age: number };

	const props: Props = {name: 'Jon', age: 42};
	const {age, ...otherProps} = props;
	(otherProps: $Rest<Props, {|age: number|}>);
	otherProps.age;  // Error, since we removed it


	// Typescript

	class A {
	  a: string;
	  b: number;
	}

	class B {
	  a: string;
	  c: boolean;
	}

	// type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
	// type C = Omit<A, B>;
	
	type C = Omit<A, keyof B>;
	// C is { b: number }


Object callable property 可以调用类型

	// Flow

	type F = {
	  (): string
	};
	const f: F = () => "hello";
	const hello: string = f();


	// An overloaded function is a function with multiple call signatures.
	type F = {
	  (): string,
	  [[call]]: (number) => string,
	  [[call]](string): string
	}

	const f: F = (x?: number | string) => {
	  return x ? x.toString() : '';
	}


	// Use call property to annotate function statics:
	type MemoizedFactorialType = {
	  cache: {
	    [number]: number,
	  },
	  [[call]](number): number,
	}

	const factorial: MemoizedFactorialType = n => {
	  if (!factorial.cache) {
	    factorial.cache = {}
	  }
	  if (factorial.cache[n] !== undefined) {
	    return factorial.cache[n]
	  }
	  factorial.cache[n] = n === 0 ? 1 : n * factorial(n - 1)
	  return factorial.cache[n]
	}


	// TypeScript

	type F = {
	  (): string;
	}
	const foo: F = () => "hello";
	const bar: string = foo();


	// An overloaded function is a function with multiple call signatures. 
	type F = {
	  (): string,
	  (x: number): string,
	  (x: string): string
	}

	const f: F = (x?: number | string) => {
	  return x ? x.toString() : '';
	}


	// Use call property to annotate function statics
	type MemoizedFactorialType = {
	  cache?: {
	    [n: number]: number,
	  },
	  (n: number): number,
	}

	const factorial: MemoizedFactorialType = n => {
	  if (!factorial.cache) {
	    factorial.cache = {}
	  }
	  else if (factorial.cache[n] !== undefined) {
	    return factorial.cache[n]
	  }
	  factorial.cache[n] = n === 0 ? 1 : n * factorial(n - 1)
	  return factorial.cache[n]
	}

Flow 和 TypeScript optional parameters 可选参数是一致的

	function(a?: string) {}


TypeScript 和 Flow (since version 0.72) 可以为调用泛型函数或构造函数指定类型，call-time generic parameters：

	const set = new Set<string>();

	// Or using a more complex behavior:
	function makeTgenerator<T>() {
	  return function(next: () => T) {
	    const something = next();
	    return something;
	  }
	}

	const usage = makeTgenerator<string>()
	// 'usage' is of type: (next: () => string) => string


只适用 TypeScript 的概念：

	// 1 - Declarable arbitrary this in functions (outside of objects)
	function something(this: { hello: string }, firstArg: string) {
	  return this.hello + firstArg;
	}
	

	// 2 - Private and Public properties in classes
	class SomeClass {
	  constructor(public prop: string, private prop2: string) {
	    // transpiles to:
	    // this.prop = prop;
	    // this.prop2 = prop2;
	  }
	  private prop3: string;
	}


	// 3 - Non-null assertion operator
	// Add ! to signify we know an object is non-null.


	// 4 - Compiled with --strictNullChecks
	function validateEntity(e?: Entity) {
	  // Throw exception if e is null or invalid entity
	}

	function processEntity(e?: Entity) {
	  validateEntity(e);
	  let s = e!.name;  // Assert that e is non-null and access name
	}
	

	// 5 - Conditional Typing
	type XorY<T, U> = T extends U ? X : Y;

	type Exclude<T, U> = T extends U ? never : T;

	/**
	 * Extract from T those types that are assignable to U
	 */
	type Extract<T, U> = T extends U ? T : never;

	/**
	 * Exclude null and undefined from T
	 */
	type NonNullable<T> = T extends null | undefined ? never : T;

	/**
	 * Obtain the return type of a function type
	 */
	type ReturnType<T extends (...args: any[]) => any> =
	    T extends (...args: any[]) => infer R ? R : any;
	

	// 6 - Mapped Type Modifiers
	// You can use + and - operators to modify mapped types.

	type Mutable<T> = {
	  -readonly [P in keyof T]: T[P]
	}

	interface Foo {
	  readonly abc: number;
	}

	// 'abc' is no longer read-only.
	type TotallyMutableFoo = Mutable<Foo>

	// 7 - Helper type modifiers
	// Required is a type mapper to make all properties of an object to be required.
	// Partial is a type mapper to make all properties of an object to be optional.
	// Readonly is a type mapper to make all properties of an object to be readonly.


只适用于 Flow 的概念：

	// 1 - Inferred existential types
	// * as a type or a generic parameter signifies to the type-checker to infer the type if possible
	// However this type was deprecated in Flow 0.72.
	Array<*>


	// 2 - Variance
	// https://flow.org/en/docs/lang/variance/

	function getLength(o: {+p: ?string}): number {
	  return o.p ? o.p.length : 0;
	}


	// 3 - Opaque Type Alias
	// https://flow.org/en/docs/types/opaque-types/

	opaque type Alias = Type;
	opaque type Alias: SuperType = Type; // with subtyping constrains

	// Within the same file the opaque type alias is defined, opaque type aliases behave exactly as type aliases.
	// Outside the defining file, i.e. when importing an opaque type alias, it behaves like a nominal type. 
	// If the opaque type alias is defined with subtyping constrains, it can be used as the super type when outside the defining file.

	export opaque type Age: number = number;

	function newAge(age: number): Age {
	    return age; // ok within same file, not ok outside defining file
	}

	function incAge(age: Age): number {
	    return age + 1; // ok
	}


	// 4 - Object type spread
	type Foo = {| foo: string, bar: string |}
	type Bar = {| bar: number |}

	type FooBarIntersection = Foo & Bar
	type FooBarSpread = {| ...Foo, ...Bar |}

	const fooBarInterect: FooBarIntersection = { foo: '123', bar: 12 } // not ok
	const fooBarString: FooBarSpread = { foo: '123', bar: 'string' } // not ok
	const fooBar: FooBarSpread = { foo: '123', bar: 12 } // ok

虽然 TypeScript 可以理解对象扩展 ...spread，但是并没有实现对象类型扩展的支持，因此不能使用 { ...spread1, ...spread2 } 这样的类型定义。

TypeScript 也没有不透明类型别名类型 opaque type，但是可以定义 intersection type 工具类型来模仿不透明类型别名的行为。

	type Opaque<T, U> = U & { readonly __TYPE__: T }
	type Age = Opaque<'age', number>

	function newAge(age: number): Age {
	    return age; // not ok
	}

	function incAge(age: Age): number {
	    return age + 1; // ok
	}
	

## Flow ＆ TypeScript 上手流程比较

让我们想象一下我们想要采用一种类型检查器的场景， 最近我们已经注意到了我们的应用程序中的很多 NaN 的出现。我们搜索源代码并找到以下代码：

	// math.js
	function square(n) {
	  return n * n;
	}
	square("oops");

我们对自己叹了口气，也许决定添加一个类型检查器。我们退后一步，查看我们的选项： Flow 或 TypeScript。

这两个工具都有相当简单的方法给逐个文件应用：

- Flow: 向文件顶部添加注释 // @flow 
- TypeScript：将扩展名 .js/.jsx 更改为 .ts/.tsx

但是让我们比较一下这里面发生了什么。

要采用 TypeScript，我们首先重命名 math.js 为 math.ts：

	// math.ts
	function square(n) {
	  return n * n;
	}
	square("oops");

现在运行 typescript：

	(no errors)

没有错误，是因为 TypeScript 要求我们给函数键入注释，然后才会根据注释检查类型。如下所示：

	function square(n: number): number {
	  return n * n;
	}
	square("oops");

如果没有这些类型，TypeScript 将根据您的配置执行下面两件事情之一：

- 隐含地将每个未知类型转换为 any，这种 any 类型表示不使用类型检查机制。
- 或者如果您使用了 --noImplicitAny 或通过 tsconfig.json 的 noImplicitAny 选项进行配置，它会为任何未知类型抛出错误，指明需要添加类型注释。

这意味着 TypeScript 覆盖的代码量与您所写的类型相关。写入类型时，类型 coverage 将线性上升。


在我们进一步讲解之前，我应该解释一下什么是 Type Coverage 类型覆盖。

例子中的变量 n 就是未有类型覆盖的代码用红色显示，如果你看到你的代码中的值和表达式，并问类型检查器“你知道这是什么类型吗”。

如果类型检查器知道它类型，则覆盖该值或表达式。如果类型检查器不知道类型，那么它没有被覆盖。

您希望您的程序尽可能多地提供类型覆盖，因为这样可以在程序运行抛出错误前告诉您。

没有类型覆盖，类型检查器什么都不是。


采用 Flow：

	// @flow
	function square(n) {
	  return n * n;
	}
	square("oops");

然后我们将运行 Flow 并查看结果：

	function square(n) {
	  return n * n;
	         ^   ^
	         Error (x2)
	}
	square("oops");

	Error (x2)
	string. The operand of an arithmetic operation must be a number.

紧接着就抛出了类型错误，告诉我们代码出了问题。Flow 只需要我们键入文件和外部模块的导出，可以推测出其他一切。这使得类型覆盖率快得多。只需几种类型，您可以快速获取具有非常高类型覆盖率的文件。根据我的经验，我可以在短短几分钟内将文件覆盖约 70-90％。


要查看 Flow 中文件的类型覆盖，可以运行：

	flow coverage path/to/file.js --color

您还可以使用 流量报告 来帮助您。 https://github.com/rpl/flow-coverage-report

注意：我没有注意到 TypeScript 有任何的类型报告工具（如果您知道一个，请给我发送一个链接）。但是，您可以测试代码是否覆盖，以确定当您出现错误时是否会报告错误。


这两种工具具有不同行为的原因归结于其架构之间的区别。

- TypeScript 体系结构：AST 导向

	TypeScript 将遍历您的程序并构建已知类型的表。当它发现值和表达式时，它会立即为其分配类型。当 TypeScript 发现一个未知的类型时，它必须立即作出决定，这意味着将其分配给 any 或抛出错误。

- Flow 架构：图形导向

	Flow 将建立一个你所有的值和表达式及其彼此之间的关系的图表。然后，它将开始为每个值和表达式分配类型。如果它找到一个未知的类型，它将使它成为一个“开放”类型，稍后再回来判断。

一旦 Flow 具有您的程序的完整蓝图，它将开始连接所有点，从一个值连接到另一个值地跟踪类型。打开类型接受流入它们的所有值的类型 - 生成的类型称为 “推断类型”。

你可以看这个是怎么回事。来看看我们在之前的类型错误：

	function square(n) {
	  return n * n;
	         ^   ^
	         Error (x2)
	}
	square("oops");

	Error (x2)
	string. The operand of an arithmetic operation must be a number.

注意错误是指向 n * n 而不是 square("oops")。因为我们没有写入一个类型为 n 的 “oops” 字符串流入它，并且 Flow 开始检查 n，就好像它是一个字符串。

添加类型注释我们可以看到错误点移动了：

	function square(n: number) {
	  return n * n;
	}
	square("oops");
	       ^ Error

	Error: string.
	This type is incompatible with the expected param type of number.

这提出了一个重要的一点：Flow 可以在任何地方自动推断类型并不意味着你不应该添加类型注释你的代码。

结论

TypeScript 和 Flow 都有非常好的上手过程。一个个文件地尝试是一个很好的经历。

但是，如果使用 Flow，你就会有更高以及更快的覆盖类型，你就可以安心睡觉。

使用 Flow，您可以添加类型以使错误更友好，而不仅只是发现它们。

本文译自： Adopting Flow and TypeScript



# ⚑ Operators 奇技操作
1. https://www.runoob.com/typescript/ts-operators.html
2. TypeScript 2.0 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
3. TypeScript 2.1 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
4. TypeScript 4.2 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html
5. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

## Destructuring Assignment 解构赋值

解构赋值功能是 ECMAScript 6 规范引入的便利功能，通过它可以便利地从一个对象中解构出需要的字段。

```js
let a: { f1:string, f2:number } = { f1:"bad apple", f2:123 };
let b: { f1:string } = a;
let { f2:c }: { f2:number } = a;
console.log({a, b, c});
// {
//     a: { f1: "bad apple", f2: 123 }, 
//     b: { f1: "bad apple", f2: 123 }, 
//     c: 123 
// }
```

## ?: 可选属性

TypeScript 可以定义可选类型，Optional Properties ?:，定义属性检查机制，不是某类型的一种。可选类型是指 TypeScript 不会去检查是否存在的类型，可以是 null 或 undefined，或其它任意类型。

如以下接口定义可选属性时，只需要在名字定义的后面加一个`?`符号：

	interface SquareConfig {
	  color?: string;
	  width?: number;
	}

使用这个接口的对象时，可以给定任意属性值：

	let config: SquareConfig = { color: "white" }；

	let width = config.width;
	console.log(width); // undefined

访问 Nullable 属性时就需要使用非空类型断言 **!** 操作符号，即表示假定这个属性存在，忽略 undefined 和 null 的情况


## ?? 空值合并运算符
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing

??  - Nullish Coalescing，当变量为 null 或者 undefined 时，取 ?? 后面的默认值。

	let x = foo ?? bar();

	// 等效于
	let x = (foo !== null && foo !== undefined) ? foo : bar();

?? 与 || 的区别： ?? 避免一些意外情况，0，NaN 以及空字符 "" 被视为 false 值。

	// localStorage.volume 为 0 时，返回 0.5。
	let volume = localStorage.volume || 0.5; 

	// localStorage.volume 为 0 时，返回 0。
	//let volume = localStorage.volume ?? 0.5;

空值合并和可选链式访问、非空值断言符号一起使用时，会有细微差别：

	let name = this.input.current!.value || "NOTHING";
	let name = this.input.current?.value ?? "NOTHING";
	
	// what !. and ?? don't working?
	let name = this.input.current!.value ?? "NOTHING";

后一种，使用非空值断言，即使 curerent。value 未定义，也会返回空值，也就是说非空断言和空值合并同时使用时，合并的功能失效了。


## ?. 可选链式访问符
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining

?. - optional chaining operator，变量不为 null 或 undefined 时返回该对象的属性或方法。

	let x = foo?.bar.baz(); 

	// 等效于
	let x = (foo === null || foo === undefined) ? undefined : foo.bar.baz();

?. 会判断表达式是否为 null 或者 undefined，若访问的目标存在，则会返回链式中的目标，否则返回 undefined。


## ! 非空断言操作符

! - Non-null assertion 非空断言操作符，会从编译中移除 null 和 undefined 类型检查，假定类型存在，所以在实际使用的过程中，要特别注意。参考类型保护和类型断言文档 Type guards ! and type assertions。

在上下文中当类型检查器无法断定类型时，! 非空断言操作会禁止检查对象是非 null 和非 undefined 类型。具体而言，x! 将从 x 值域中排除 null 和 undefined。

	interface Config {
	  color: string | null | undefined
	  width?: number | null
	  log?: () => void
	}

	let config: Config = {
	  color: null,
	};

	let len = config.color?.length;
	console.log(len); // undefined

	let maybe = config.width?.toFixed(2);
	console.log(maybe); // undefined

	// TypeError: Cannot read property 'toFixed' of undefined
	// let width = config.width!.toFixed(2);



## callable 可调用类型
- TypeScript Deep Dive https://github.com/basarat/typescript-book/
- TypeScript Deep Dive - callable types https://basarat.gitbook.io/typescript/type-system/callable

Obvious examples

	interface ReturnString {
	  (): string
	}

	declare const foo: ReturnString;
	const bar = foo(); // bar is inferred as a string

complex example:

	interface Complex {
	  (foo: string, bar?: number, ...others: boolean[]): number;
	}

An interface can provide multiple callable annotations to specify function overloading. For example:

	interface Overloaded {
	    (foo: string): string
	    (foo: number): number
	}

	// example implementation
	function stringOrNumber(foo: number): number;
	function stringOrNumber(foo: string): string;
	function stringOrNumber(foo: any): any {
	    if (typeof foo === 'number') {
	        return foo * foo;
	    } else if (typeof foo === 'string') {
	        return `hello ${foo}`;
	    }
	}

	const overloaded: Overloaded = stringOrNumber;

	// example usage
	const str = overloaded(''); // type of `str` is inferred as `string`
	const num = overloaded(123); // type of `num` is inferred as `number`

Of course, like the body of any interface, you can use the body of a callable interface as a type annotation for a variable. For example:

	const overloaded: {
	  (foo: string): string
	  (foo: number): number
	} = (foo: any) => foo;

Arrow Syntax

	const simple: (foo: number) => string
	    = (foo) => foo.toString();

Only limitation of the arrow syntax: You can't specify overloads. For overloads you must use the full bodied { (someArgs): someReturn } syntax.

Newable

	interface CallMeWithNewToGetString {
	  new(): string
	}
	// Usage
	declare const Foo: CallMeWithNewToGetString;
	const bar = new Foo(); // bar is inferred to be of type string


## as 类型断言
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-6.html#jsx-support

类型断言 Type Assertion 可以用来手动指定一个值的类型。

	interface Cat {
	  name: string
	}

	let cat = {name:"Bob"} as Cat;

使用 as 将 any 类型断言为了 Cat 类型，也可以使用 JSX 尖括号语法进行类型转换：

	let cat = <Cat>{name:"Bob"};


## === !== 类型与值比较

TypeScript 中 ==、===、!==、!= 比较运算符：

	console.log("0 === NaN", 0 === NaN);
	console.log("0 === null", 0 === null);
	console.log("0 === undefined", 0 === undefined);

	console.log("0 == NaN", 0 == NaN);
	console.log("0 == null", 0 == null);
	console.log("0 == undefined", 0 == undefined);

- == 比较两个运算元的值是否相等，如果相等则结果为 true
- != 比较两个运算元的值是否不等，如果不等则结果为 true
- === 比较两个运算元的值、类型是否都相等，如果都相等则结果为 true
- !== 比较两个运算元的类型、值是否都不等，如果都不等则结果为 true

## Dynamic Import 动态导入
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-4.html

新引入的 async 支持 await 异步操作，可以实现动态导入：

	async function getZipFile(name: string, files: File[]): Promise<File> {
	  const zipUtil = await import("./utils/create-zip-file");
	  const zipContents = await zipUtil.getContentAsBlob(files);
	  return new File(zipContents, name);
	}

## Get Type Name 获取类型名称

可以通过解析构造函数获取类型名称字符：

	public getClassName() {
	    var funcNameRegex = /function (.{1,})\(/;
	    var results  = (funcNameRegex).exec(this["constructor"].toString());
	    return (results && results.length > 1) ? results[1] : "";
	}

这种方法只适用有命名构造函数的类型，像 JSX 中的各种组件类型不适用。


## keyof and Lookup Types
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types

keyof T 用于提取类型中的主键作为新类型的主键，可以配合映射类型使用。

	interface Person {
	  name: string;
	  age: number;
	  location: string;
	}

	type K1 = keyof Person; 	// "name" | "age" | "location"
	type K2 = keyof Person[]; 	// "length" | "push" | "pop" | "concat" | ...
	type K3 = keyof { [x: string]: Person }; // string

lookup T 使用下标读取属性值的类型：

	type P1 = Person["name"]; 			// string
	type P2 = Person["name" | "age"]; 	// string | number
	type P3 = string["charAt"]; 		// (pos: number) => string
	type P4 = string[]["push"]; 		// (...items: string[]) => number
	type P5 = string[][0]; 				// string

	type ValueOf<T> = T[keyof T];
	type Foo = { a: string, b: number };
	type ValueOf Foo = ValueOf<Foo>; // string | number

示范，定义一个变量为字符串数组，而且值只能是某类型成员的主键名称：

	export type FrontMetter = {
	  title: string,
	  date: string,
	  slug: string,
	  author: { name: string, picture: string },
	  content: string,
	  coverImage: string,
	}

	type MetterKey = keyof FrontMetter;

	let fields: MetterKey[] = []
	let fields: (keyof FrontMetter)[] = []


## Type Guards 类型守卫
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-4.html#type-guards
- https://github.com/basarat/typescript-book/blob/master/docs/types/typeGuard.md

类型守卫是指通过代码判断出对象的具体类型，再执行相应的逻辑。JavaScript 中常用的模式是使用 typeof 和 instanceof 进行类型判断，TypeScript 现在可以根据类型判断条件来感知，变量所在代码块中的类型，这个过程称为类型收缩 Type Narrows：

	var x: any = /* ... */;
	if(typeof x === 'string') {
	    console.log(x.subtr(1)); // Error, 'subtr' does not exist on 'string'
	}
	// x is still any here
	x.unknown(); // OK

	var x: string | HTMLElement = /* ... */;
	if(typeof x === 'string') {
	    // x is string here, as shown above
	}
	else {
	    // x is HTMLElement here
	    console.log(x.innerHTML);
	}

	class Dog { woof() { } }
	class Cat { meow() { } }
	var pet: Dog|Cat = /* ... */;
	if (pet instanceof Dog) {
	    pet.woof(); // OK
	}
	else {
	    pet.woof(); // Error
	}

使用 typeof

	function doSomething(x: number | string) {
	    if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
	        console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
	        console.log(x.substr(1)); // OK
	    }
	    x.substr(1); // Error: There is no guarantee that `x` is a `string`
	}

使用 instanceof

	class Foo {
	    foo = 123;
	    common = '123';
	}

	class Bar {
	    bar = 123;
	    common = '123';
	}

	function doStuff(arg: Foo | Bar) {
	    if (arg instanceof Foo) {
	        console.log(arg.foo); // OK
	        console.log(arg.bar); // Error!
	    }
	    if (arg instanceof Bar) {
	        console.log(arg.foo); // Error!
	        console.log(arg.bar); // OK
	    }

	    console.log(arg.common); // OK
	    console.log(arg.foo); // Error!
	    console.log(arg.bar); // Error!
	}

	doStuff(new Foo());
	doStuff(new Bar());

使用 in

	interface A {
	  x: number;
	}
	interface B {
	  y: string;
	}

	function doStuff(q: A | B) {
	  if ('x' in q) {
	    // q: A
	  }
	  else {
	    // q: B
	  }
	}

Literal Type Guard 字面量类型守卫可以使用 === == !== != 进行逻辑比较。

	type TriState = 'yes' | 'no' | 'unknown';

	function logOutState(state:TriState) {
	  if (state == 'yes') {
	    console.log('User selected yes');
	  } else if (state == 'no') {
	    console.log('User selected no');
	  } else {
	    console.log('User has not made a selection yet');
	  }
	}


	type Foo = {
	  kind: 'foo', // Literal type 
	  foo: number
	}
	type Bar = {
	  kind: 'bar', // Literal type 
	  bar: number
	}

	function doStuff(arg: Foo | Bar) {
	    if (arg.kind === 'foo') {
	        console.log(arg.foo); // OK
	        console.log(arg.bar); // Error!
	    }
	    else {  // MUST BE Bar!
	        console.log(arg.foo); // Error!
	        console.log(arg.bar); // OK
	    }
	}

null and undefined with strictNullChecks，TypeScript 对 null 和 undefined 类型的比较有足够智能，a == null 或 != null 这样的检查很容易感知。

	function foo(a?: number | null) {
	  if (a == null) return;

	  // a is number now.
	}

User Defined Type Guards，JavaScript 没有丰富的运行时探测，在不能使用 instanceof 和 typeof 进行类型判断时，可以定义类型保卫函数 Type Guard functions，它返回一个布尔值表示是否是指定类型，同时函数的返回值中使用 is 表达式对参数进行断言。

	/**
	 * Just some interfaces
	 */
	interface Foo {
	    foo: number;
	    common: string;
	}

	interface Bar {
	    bar: number;
	    common: string;
	}

	/**
	 * User Defined Type Guard!
	 */
	function isFoo(arg: any): arg is Foo {
	    return arg.foo !== undefined;
	}

	/**
	 * Sample usage of the User Defined Type Guard
	 */
	function doStuff(arg: Foo | Bar) {
	    if (isFoo(arg)) {
	        console.log(arg.foo); // OK
	        console.log(arg.bar); // Error!
	    }
	    else {
	        console.log(arg.foo); // Error!
	        console.log(arg.bar); // OK
	    }
	}

	doStuff({ foo: 123, common: '123' });
	doStuff({ bar: 123, common: '123' });

Type Guards and callbacks，TypeScript 不假设类型守卫在回调中保持活动状态，因为做出这种假设是危险的。

	// Example Setup
	declare var foo:{bar?: {baz: string}};
	function functionDoingSomeStuff(callback: ()=>void) {
	  callback();
	}

	// Type Guard
	if (foo.bar) {
	  console.log(foo.bar.baz); // Okay
	  functionDoingSomeStuff(() => {
	    console.log(foo.bar.baz); // TS error: Object is possibly 'undefined'"
	  });
	}

解决方法就像将推断出的安全值存放到本地变量一样简单，自动确保它不会被外部更改，TypeScript 可以很容易地理解：

	// Type Guard
	if (foo.bar) {
	  console.log(foo.bar.baz); // Okay
	  const bar = foo.bar;
	  functionDoingSomeStuff(() => {
	    console.log(bar.baz); // Okay
	  });
	}


## Template strings 模板字符串
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-4.html#template-strings

TypeScript 1.4 开始支持 ES6 template strings：

	var name = "TypeScript";
	var greeting = `Hello, ${name}! Your name has ${name.length} characters`;

对应 ES6 编译结果：

	var name = "TypeScript!";
	var greeting =
	  "Hello, " + name + "! Your name has " + name.length + " characters";



# ⚑ Basic Types 基礎類型
- http://www.typescriptlang.org/docs/handbook/basic-types.html
- https://www.tslang.cn/docs/handbook/basic-types.html
- https://www.typescriptlang.org/docs/handbook/functions.html
- https://www.typescriptlang.org/docs/handbook/intro.html
- https://www.typescriptlang.org/docs/handbook/2/functions.html
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

1. [Introduction](#introduction)
2. [Boolean](#boolean)
3. [Number](#number)
4. [String](#string)
5. [Array](#array)
6. [Tuple](#tuple)
7. [Enum](#enum)
8. [Any](#any)
9. [Void](#void)
10. [Null and Undefined](#null-and-undefined)
11. [Never](#never)
12. [Object](#object)
13. [Type assertions](#type-assertions)
14. [A note about 'let'](#a-note-about-let)
15. [New `unknown` top type](#)


## Introduction
- [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

作为 JavaScript 的超集，TypeScript 直接在数据类型上体现了这一特性，JavaScript 只有一些简单类型和复杂类型：

- 原始值类型 Primitives，包含 5-7 种简单类型。
	- `undefined` 未初始化或未声明的变量，特殊的非值类型，non-values；
	- `null` 空引用对象，特殊的非值类型，non-values；
	- `boolean` 布尔值类型，只有两种值 `false` `true`；
	- `number` 数值类型，包括 NaN 非数值 Not a Number，还有无限值 Infinity；
	- `string` 字符串类型，如 "123"；
	- `symbol` 符号类型，[ES2015] 新增类型；
	- `bigint` 大整数类型，[ES2020] 规范引入，表达超过 53 bits 的带符号整数，如 -123n；
- 对象类型 objects，包含 7 种基础复杂对象类型。
	- Object 基础对象类型，为后面的子类类提供基本的隐式转型方法 `toString()` `valueOf()`；
	- Function 函数对象；
	- Array 数组对象；
	- Map 影射对象；
	- Set 集合对象；
	- Date 日期时间对象；
	- RegExp 正则表达式对象；

但在 TypeScript 的类型系统中，完全超出这些基础类型的限制，构建了一个相当复杂又强大的类型系统。

为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。 TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。

不要使用 JavaScript 提供的 Number, String, Boolean, Symbol, 或 Object 等非原始类型，它们是 JavaScript 中的对象，这样做可以最大化地规范类型行为，而不是使用怪异的 JavaScript 类型，比如 `[]+1` 或 `{}+1` 这样毫无用处但是招聘者会利用来炫技的特性将完全不能通过类型检查机制。

	/* WRONG */
	function reverse(s: String): String;

	/* OK */
	function reverse(s: string): string;

不要在函数返回值中使用 any 类型，而是 void：

	/* WRONG */
	function fn(x: () => any) {
	  x();
	}

	/* OK */
	function fn(x: () => void) {
	  x();
	}

不要在回调中使用可选参数，而是提供更少参数的重载：

	/* WRONG */
	interface Fetcher {
	  getObject(done: (data: any, elapsedTime?: number) => void): void;
	}

	/* OK */
	interface Fetcher {
	  getObject(done: (data: any, elapsedTime: number) => void): void;
	}

不要根据回调不同分开多选编写重载函数：

	/* WRONG */
	declare function beforeAll(action: () => void, timeout?: number): void;
	declare function beforeAll(
	  action: (done: DoneFn) => void,
	  timeout?: number
	): void;

	/* OK */
	declare function beforeAll(
	  action: (done: DoneFn) => void,
	  timeout?: number
	): void;

原因：回调忽略参数总是合法的，所以不需要较短的重载。首先提供一个较短的回调允许传入错误类型的函数，因为它们与第一个重载匹配。

不要将匹配度大的函数重载写在前面：

	/* WRONG */
	declare function fn(x: any): any;
	declare function fn(x: HTMLElement): number;
	declare function fn(x: HTMLDivElement): string;

	var myElem: HTMLDivElement;
	var x = fn(myElem); // x: any, wat?

	/* OK */
	declare function fn(x: HTMLDivElement): string;
	declare function fn(x: HTMLElement): number;
	declare function fn(x: any): any;

	var myElem: HTMLDivElement;
	var x = fn(myElem); // x: string, :)

原因：TypeScript 会执行第一个匹配到的重载函数。


不要根据最后一个参数写重载函数：

	/* WRONG */
	interface Example {
	  diff(one: string): number;
	  diff(one: string, two: string): number;
	  diff(one: string, two: string, three: boolean): number;
	}

	/* OK */
	interface Example {
	  diff(one: string, two?: string, three?: boolean): number;
	}

原因有二，TypeScript 通过源参数检查签名的兼容性，当使用可选参数签名正确时会导致一个 Bug：

	function fn(x: (a: string, b: number, c: number) => void) {}
	var x: Example;
	// When written with overloads, OK -- used first overload
	// When written with optionals, correctly an error
	fn(x.diff);

第二个原因，使用 strict null checking 特性时出现问题，因为可选参数对应 JavaScript 的 undefined：

	var x: Example;
	// When written with overloads, incorrectly an error because of passing 'undefined' to 'string'
	// When written with optionals, correctly OK
	x.diff("something", true ? undefined : "hour");


不要根据一个位置的参数类型编写重载函数：

	/* WRONG */
	interface Moment {
	  utcOffset(): number;
	  utcOffset(b: number): Moment;
	  utcOffset(b: string): Moment;
	}

	/* OK */
	interface Moment {
	  utcOffset(): number;
	  utcOffset(b: number | string): Moment;
	}

注意返回值不同，函数签名不同，参数 b 不作为可选参数。

	function fn(x: string): void;
	function fn(x: number): void;
	function fn(x: number | string) {
	  // When written with separate overloads, incorrectly an error
	  // When written with union types, correctly OK
	  return moment().utcOffset(x);
	}


## Boolean 布尔值

最基本的数据类型就是简单的 true/false 值，在 JavaScript 和 TypeScript 里叫做 boolean（其它语言中也一样）。

	let isDone: boolean = false;

## Number 数值

和 JavaScript 一样， TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量， TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量。

	let decLiteral: number = 6;
	let hexLiteral: number = 0xf00d;
	let binaryLiteral: number = 0b1010;
	let octalLiteral: number = 0o744;

## String 字符串

JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 string 表示文本数据类型。 和 JavaScript 一样，可以使用双引号（ "）或单引号（'）表示字符串。

	let name: string = "bob";
	name = "smith";

你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围，并且以 `${ expr }` 这种形式嵌入表达式

	let name: string = `Gene`;
	let age: number = 37;
	let sentence: string = `Hello, my name is ${ name }.

	I'll be ${ age + 1 } years old next month.`;

这与下面定义 sentence 的方式效果相同：

	let sentence: string = "Hello, my name is " + name + ".\n\n" +
	    "I'll be " + (age + 1) + " years old next month.";


## Array 数组

 TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：

	let list: number[] = [1, 2, 3];

第二种方式是使用数组泛型，Array<元素类型>：

	let list: Array<number> = [1, 2, 3];

## Tuple 元组

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同，但对应位置的类型需要相同。比如，你可以定义一对值分别为 string 和 number 类型的元组。

	// Declare a tuple type
	let x: [string, number];

	// Initialize it
	x = ['hello', 10]; // OK

	// Initialize it incorrectly
	x = [10, 'hello']; // Error

当访问一个已知索引的元素，会得到正确的类型：

	console.log(x[0].substr(1)); // OK
	console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

当访问一个越界的元素，会使用联合类型替代：

	x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

	console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

	x[6] = true; // Error, 布尔不是(string | number)类型

联合类型是高级主题，我们会在以后的章节里讨论它。

	type Scores = [number, number?, number?];
	const samScores: Scores = [55];
	const bobScores: Scores = [95, 75];
	const jayneScores: Scores = [65, 50, 70];

	// error
	const e1: Scores = [95, 50, 75, 75];
	const sarahScores: Scores = [];

## Enum 枚举
https://www.typescriptlang.org/docs/handbook/enums.html

enum 类型是对 JavaScript 标准数据类型的一个补充。 像 C## 等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

	enum Color {Red, Green, Blue}
	let c: Color = Color.Green;

默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：

	enum Color {Red = 1, Green, Blue}
	let c: Color = Color.Green;

或者，全部都采用手动赋值：

	enum Color {Red = 1, Green = 2, Blue = 4}
	let c: Color = Color.Green;

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

	enum Color {Red = 1, Green, Blue}
	let colorName: string = Color[2];

	console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

字符串枚举类型：

	enum Direction {
	  Up = "UP",
	  Down = "DOWN",
	  Left = "LEFT",
	  Right = "RIGHT",
	}

Heterogeneous enums

	enum BooleanLikeHeterogeneousEnum {
	  No = 0,
	  Yes = "YES",
	}

Enums at compile time

Even though Enums are real objects that exist at runtime, the keyof keyword works differently than you might expect for typical objects. Instead, use keyof typeof to get a Type that represents all Enum keys as strings.

	enum LogLevel {
	  ERROR,
	  WARN,
	  INFO,
	  DEBUG,
	}

	/**
	 * This is equivalent to:
	 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
	 */
	type LogLevelStrings = keyof typeof LogLevel;

	function printImportant(key: LogLevelStrings, message: string) {
	  const num = LogLevel[key];
	  if (num <= LogLevel.WARN) {
	    console.log("Log level key is:", key);
	    console.log("Log level value is:", num);
	    console.log("Log level message is:", message);
	  }
	}
	printImportant("ERROR", "This is a message");


	type Pack = {
	  [level in LogLevelStrings]?: string
	}
	function printPack(pack:Pack) {
	  for(let key in pack){
	    let message = pack[key];
	    const num = LogLevel[key];
	    console.log("Log level key is:", key);
	    console.log("Log level value is:", num);
	    console.log("Log level message is:", message);
	  }
	}
	printPack({ERROR: "This is a message"});

以上示范了如何获取枚举类型的主键作为字符使用。


## Any 任意

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：

	let notSure: any = 4;
	notSure = "maybe a string instead";
	notSure = false; // okay, definitely a boolean

在对现有代码进行改写的时候，any 类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object 有相似的作用，就像它在其它语言中那样。 但是 Object 类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：

	let notSure: any = 4;
	notSure.ifItExists(); // okay, ifItExists might exist at runtime
	notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

	let prettySure: Object = 4;
	prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

当你只知道一部分数据的类型时，any 类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：

	let list: any[] = [1, true, "free"];

	list[1] = 100;


## Void 无类型

某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：

	function warnUser(): void {
	    console.log("This is my warning message");
	}

声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null：

	let unusable: void = undefined;

## Null and Undefined 空值与未定义

TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 和 void 相似，它们的本身的类型用处不是很大：

	// Not much else we can assign to these variables!
	let u: undefined = undefined;
	let n: null = null;

默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。

然而，当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string 或 null 或 undefined，你可以使用联合类型 `string | null | undefined`。 再次说明，稍后我们会介绍联合类型。

注意：我们鼓励尽可能地使用 --strictNullChecks，但在本手册里我们假设这个标记是关闭的。


## Never 不可能

never 类型表示的是那些永不存在的值的类型。 例如， never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never 类型，当它们被永不为真的类型保护所约束时。

never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给 never 类型除本身之外。 即使 any 也不可以赋值给 never 。

下面是一些返回 never 类型的函数：

	// 返回never的函数必须存在无法达到的终点
	function error(message: string): never {
	    throw new Error(message);
	}

	// 推断的返回值类型为never
	function fail() {
	    return error("Something failed");
	}

	// 返回never的函数必须存在无法达到的终点
	function infiniteLoop(): never {
	    while (true) {
	    }
	}


## Object 对象

object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。

	  onResize(ev: {}){ ... }
	  onResize(ev: object){ ... }

上面两个参数类型定义等价。

使用 objec 类型，就可以更好的表示像 Object.create 这样的 API。例如：

	declare function create(o: object | null): void;

	create({ prop: 0 }); // OK
	create(null); // OK

	create(42); // Error
	create("string"); // Error
	create(false); // Error
	create(undefined); // Error


## Type assertions

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法：

	let someValue: any = "this is a string";

	let strLength: number = (<string>someValue).length;

另一个为 as 语法：

	let someValue: any = "this is a string";

	let strLength: number = (someValue as string).length;

两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的。

## A note about `let`

你可能已经注意到了，我们使用 let 关键字来代替大家所熟悉的 JavaScript 关键字 var。 let 关键字是 JavaScript 的一个新概念，TypeScript 实现了它。 我们会在以后详细介绍它，很多常见的问题都可以通过使用 let 来解决，所以尽可能地使用 let 来代替 var 吧。

## New `unknown` top type 未知
- [TypeScript 3.0 Release Notes](https://www.tslang.cn/docs/release-notes/typescript-3.0.html)
- [TypeScript Handbook](https://github.com/Microsoft/TypeScript-Handbook)
- [TypeScript 基础类型](https://www.runoob.com/typescript/ts-type.html)
- https://www.typescriptlang.org/docs/handbook/type-compatibility.html

TypeScript 3.0 引入了一个顶级的 unknown 类型。 对照于 any，unknown 是类型安全的。 任何值都可以赋给 unknown，但是当没有类型断言或基于控制流的类型细化时 unknown 不可以赋值给其它类型，除了它自己和 any 外。 同样地，在 unknown 没有被断言或细化到一个确切类型之前，是不允许在其上进行任何操作的。

any 类型本质上是类型系统的一个逃逸舱。作为开发者，这给了我们很大的自由：TypeScript 允许我们对 any 类型的值执行任何操作，而无需事先执行任何形式的检查。

	let value: unknown;
	 
	let value1: unknown = value;   // OK
	let value2: any = value;       // OK
	let value3: boolean = value;   // Error
	let value4: number = value;    // Error
	...

反过来，any 类开可以赋值给其它任意类型，这是很奇怪的，同时也说明，unknown 比 any 更安全：

	let value: any;
	 
	let value1: any =     value;   // OK
	let value2: unknown = value;   // OK
	let value3: boolean = value;   // OK
	let value4: number =  value;   // OK
	console.log(value4); // abc


类型 any 在许多场景下，这样的机制都太宽松了。使用any类型，可以很容易地编写类型正确但是执行异常的代码。如果我们使用 any 类型，就无法享受 TypeScript 大量的保护机制。

但如果能有顶级类型也能默认保持安全呢？这就是 unknown 到来的原因。

- unknown 也可以与双重断言使用
- 不知道一个变量的类型的时候，尽量使用 unknown 来代替 any
- {} 这个类型包含所有的值，除了 null 和 undefined
- Object 类型包含了所有的非原始值类型，包含 null，array，objects 但是不包含 undefined


就像所有类型都可以被归为 any，所有类型也都可以被归为 unknown。这使得 unknown 成为 TypeScript 类型系统的另一种顶级类型（另一种是 any）。

例子

	// In an intersection everything absorbs unknown

	type T00 = unknown & null;  // null
	type T01 = unknown & undefined;  // undefined
	type T02 = unknown & null & undefined;  // null & undefined (which becomes never)
	type T03 = unknown & string;  // string
	type T04 = unknown & string[];  // string[]
	type T05 = unknown & unknown;  // unknown
	type T06 = unknown & any;  // any

	// In a union an unknown absorbs everything

	type T10 = unknown | null;  // unknown
	type T11 = unknown | undefined;  // unknown
	type T12 = unknown | null | undefined;  // unknown
	type T13 = unknown | string;  // unknown
	type T14 = unknown | string[];  // unknown
	type T15 = unknown | unknown;  // unknown
	type T16 = unknown | any;  // any

	// Type variable and unknown in union and intersection

	type T20<T> = T & {};  // T & {}
	type T21<T> = T | {};  // T | {}
	type T22<T> = T & unknown;  // T
	type T23<T> = T | unknown;  // unknown

	// unknown in conditional types

	type T30<T> = unknown extends T ? true : false;  // Deferred
	type T31<T> = T extends unknown ? true : false;  // Deferred (so it distributes)
	type T32<T> = never extends T ? true : false;  // true
	type T33<T> = T extends never ? true : false;  // Deferred

	// keyof unknown

	type T40 = keyof any;  // string | number | symbol
	type T41 = keyof unknown;  // never

	// Only equality operators are allowed with unknown

	function f10(x: unknown) {
	    x == 5;
	    x !== 10;
	    x >= 0;  // Error
	    x + 1;  // Error
	    x * 2;  // Error
	    -x;  // Error
	    +x;  // Error
	}

	// No property accesses, element accesses, or function calls

	function f11(x: unknown) {
	    x.foo;  // Error
	    x[5];  // Error
	    x();  // Error
	    new x();  // Error
	}

	// typeof, instanceof, and user defined type predicates

	declare function isFunction(x: unknown): x is Function;

	function f20(x: unknown) {
	    if (typeof x === "string" || typeof x === "number") {
	        x;  // string | number
	    }
	    if (x instanceof Error) {
	        x;  // Error
	    }
	    if (isFunction(x)) {
	        x;  // Function
	    }
	}

	// Homomorphic mapped type over unknown

	type T50<T> = { [P in keyof T]: number };
	type T51 = T50<any>;  // { [x: string]: number }
	type T52 = T50<unknown>;  // {}

	// Anything is assignable to unknown

	function f21<T>(pAny: any, pNever: never, pT: T) {
	    let x: unknown;
	    x = 123;
	    x = "hello";
	    x = [1, 2, 3];
	    x = new Error();
	    x = x;
	    x = pAny;
	    x = pNever;
	    x = pT;
	}

	// unknown assignable only to itself and any

	function f22(x: unknown) {
	    let v1: any = x;
	    let v2: unknown = x;
	    let v3: object = x;  // Error
	    let v4: string = x;  // Error
	    let v5: string[] = x;  // Error
	    let v6: {} = x;  // Error
	    let v7: {} | null | undefined = x;  // Error
	}

	// Type parameter 'T extends unknown' not related to object

	function f23<T extends unknown>(x: T) {
	    let y: object = x;  // Error
	}

	// Anything but primitive assignable to { [x: string]: unknown }

	function f24(x: { [x: string]: unknown }) {
	    x = {};
	    x = { a: 5 };
	    x = [1, 2, 3];
	    x = 123;  // Error
	}

	// Locals of type unknown always considered initialized

	function f25() {
	    let x: unknown;
	    let y = x;
	}

	// Spread of unknown causes result to be unknown

	function f26(x: {}, y: unknown, z: any) {
	    let o1 = { a: 42, ...x };  // { a: number }
	    let o2 = { a: 42, ...x, ...y };  // unknown
	    let o3 = { a: 42, ...x, ...y, ...z };  // any
	}

	// Functions with unknown return type don't need return expressions

	function f27(): unknown {
	}

	// Rest type cannot be created from unknown

	function f28(x: unknown) {
	    let { ...a } = x;  // Error
	}

	// Class properties of type unknown don't need definite assignment

	class C1 {
	    a: string;  // Error
	    b: unknown;
	    c: any;
	}


# ⚑ ECMA262 JSON to Class
1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
2. https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
3. https://www.typescriptlang.org/docs/handbook/utility-types.html
3. https://github.com/tc39/ecma262
3. ECMAScript历代版本新特性 https://juejin.cn/post/7109378925964296223
3. https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

TypeScript 环境下，JSON API 解析 json 数据返回的是 any 类型对象，即使赋值给指定类型的变量或者使用 as 声明类型，它依然是 any 类型，除非用以下方法：

1. Use Object.assign to Cast From JSON to Class in TypeScript
2. Use Custom Methods to Cast a JSON String to Class in TypeScript

TypeScript 2.8 版本引入了一些与 infer 有关的映射类型工具，`ReturnType<Type>` 就是其中一个，它可以获取泛型参数 Type 指定的函数类型返回类型。

```js
function getInt(a: string) {
  return parseInt(a);
}

type A = ReturnType<typeof getInt>; // => number
// ReturnType<CLASS['method']>
```

注：使用函数与类成员作为 ReturnType 的泛型参数时，前者需要使用 typeof，因为函数是一个值类型，泛型参数需要的是类型定义。

注：构建函数没有返回， ReturnType 不能使用 CLASS["constructor"] 或者 CLASS.constructor 这样的方式推断出类型。构造函数不返回值的原因是，它不是由代码直接调用的，而是由运行时中的内存分配和对象初始化代码调用的。构造过程由编译器生成类型数据结构，并确定类对象实例在内存中需要占据多少空间，无论是在堆或栈上，Heap Memory vs. Stack Memory。

尽管在 TypeScript 中声明了变量的类型就可以获得自动完成智能提示，但在代码实现逻辑上，并不能通过赋值操作直接将 JSON.parse() 返回的 any 类型转化为声明的类型。所以，以下代码中的 dd 变量保存的并非 CC 类型实例，也不能调用其 toObject() 方法。

```js
class CC {
    id:number;
    tag:string;
    constructor(id?:number, tag?:string) {
        this.id = id || 0;
        this.tag = tag || "";
    }
    public toObject () {
        return {id:this.id, tag:this.tag};
    }
}

let json = '{"id":123,"tag":"link", "extra_reviver":321}';
let dd:CC = JSON.parse(json, (key,value)=>{
    if (Object.keys(new CC).indexOf(key)>=0){
        return value;
    } else if (key === "") {
        return value; // Top moust of json.
    }
}) as CC; // JSON.parse return an `any` type.
let ee:ReturnType<CC['toObject']> = dd;
let ff:CC = Object.assign(new CC, dd);

console.log({
    json, id: dd.id,
    "dd is CC":dd instanceof CC,  // false
    "ee is CC":ee instanceof CC,  // false
    "ff is CC":ff instanceof CC, // true
});
```

TypeScript 定义了一个关键字 is 来判断对象是否实现了接口，但是它不能直接做判断，而是用于 Type Guards，间接实现接口的判断，并且 is 关键字只能作为 type predicates 形式使用。如下，代码中明确的表示参数是一个接口类型，同时又声明函数的返回值是 boolean 值，这种形式称为类型谓词。实质上做判断的还是函数体中的语句，使用的是 duck typing 策略，即听起来像鸭子，走起步子又像鸭子，就认为是鸭子：

```ts
interface ICC {
    id:number;
    type:"ICC";
}

function isICC(s): s is ICC {
  return s.type === "ICC";
}

const cc:ICC = { id:123, type:"ICC" }
console.log({cc, isICC: isICC(cc)})
```


Object 是 JavaScript 的一种数据类型。它用于存储各种键值集合和更复杂的实体。可以通过 Object() 构造函数或者使用对象字面量的方式创建对象。

2015 年发布的 ECMAScript 6 脚本规范为 Web API 带来了丰富的特性，这是一个跨时代的脚本规范！更早的 ES5 2009 规范已经支持 Object.keys()，它可以获取一个对象的字段名称。

EMCA（European Computer Manufacturers Association）欧洲计算机制造商协会标准组织容纳了大量通信、计算机及其相关行业的标准规范，现发展为 Ecma International。ECMAScript 脚本规范在官方档案中命名为 ECMA-262 通常缩写为 ES。

目前在线归档的版本主要有：

1. ECMA-262, 5.1 edition, June 2011
2. ECMA-262, 6th edition, June 2015
3. ECMA-262, 7th edition, June 2016
4. ECMA-262, 8th edition, June 2017
5. ECMA-262, 9th edition, June 2018
6. ECMA-262, 10th edition, June 2019
7. ECMA-262, 11th edition, June 2020
8. ECMA-262, 12th edition, June 2021
9. ECMA-262, 13th edition, June 2022

规范从提案立项到正式完成发布，会经历 5 个阶段：

1. Stage 0: Strawman 展示新特性阶段；
2. Stage 1: Proposal 征求提案阶段；
3. Stage 2: Draft 形成初步草案阶段；
4. Stage 3: Candidate 后选阶段；
5. Stage 4: Finished 完成阶段；

TC39 是一个由 JavaScript 开发者、实现者、学者等组成的团体，TC39 归属 Ecma International，与 JavaScript 社区合作维护和发展 JavaScript 的标准，其也有相应的规范档案发展阶段。

1. Inactive Proposals
2. Stage 0 Proposals
3. Stage 1 Proposals
4. Active Proposals
5. Finished Proposals

Object 是 JavaScript 脚本中的一种对象类型，名称就叫对象，这个单词本身的意思就是泛指面向对象编程中的对象。新规范文档将 Object 对象类型归类为基础对象，而早期版本文档则将其归类到 Types 章节，可以看到早期文档未将 Function 对象内容统一到对应章节，而是散布在多个章节中：

	https://www.ecma-international.org/wp-content/uploads/ECMA-262_5th_edition_december_2009.pdf
	https://262.ecma-international.org/5.1/

	8 Types
	8.1 The Undefined Type
	8.2 The Null Type
	8.3 The Boolean Type
	8.4 The String Type
	8.5 The Number Type
	8.6 The Object Type
	8.7 The Reference Specification Type
	8.8 The List Specification Type
	8.9 The Completion Specification Type
	8.10 The Property Descriptor and Property Identifier Specification Types
	8.11 The Lexical Environment and Environment Record Specification Types
	8.12 Algorithms for Object Internal Methods

	https://262.ecma-international.org/13.0/index.html
	6 ECMAScript Data Types and Values
	6.1 ECMAScript Language Types
	6.1.1 The Undefined Type
	6.1.2 The Null Type
	6.1.3 The Boolean Type
	6.1.4 The String Type
	6.1.5 The Symbol Type
	6.1.6 Numeric Types
	6.1.7 The Object Type
	6.2 ECMAScript Specification Types
	6.2.1 The List and Record Specification Types
	6.2.2 The Set and Relation Specification Types
	6.2.3 The Completion Record Specification Type
	6.2.4 The Reference Record Specification Type
	6.2.5 The Property Descriptor Specification Type
	6.2.6 The Environment Record Specification Type
	6.2.7 The Abstract Closure Specification Type
	6.2.8 Data Blocks
	6.2.9 The PrivateElement Specification Type
	6.2.10 The ClassFieldDefinition Record Specification Type
	6.2.11 Private Names
	6.2.12 The ClassStaticBlockDefinition Record Specification Type

	20 Fundamental Objects
	20.1 Object Objects
	20.2 Function Objects
	20.3 Boolean Objects
	20.4 Symbol Objects
	20.5 Error Objects

从文档中可以看到，类型系统中涉及到两大类型，一是脚本语言中直接使用的类型，比如：Undefined, Null, Boolean, String, Symbol, Number, BigInt, and Object。另一类是规范类型，比如：Reference, List, Completion Record, Property Descriptor, Environment Record, Abstract Closure, Data Block。规范类型对应于算法中用于描述 ECMAScript 语言构造和 ECMAScript 语言类型的语义的元值，meta-value，即脚本语言实现层面上的类型实现算法使用的数据结构。



# ⚑ Enum of String literal - TS Plugin
- [Language Server Protocol Specification](https://microsoft.github.io/language-server-protocol/specification)
- [TypeScript Wiki - Writing a Language Service Plugin](https://github.com/Microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin)

在 TypeScript 众多的 issue 中，有一个 (#16464) 希望可以扩展 Enum 语法的提案，这个提案的目的在于提供一种简便方法，以允许大家快捷方便的定义字符串字面量枚举类型。

即如下形式：

```js
enum Action {
   LOAD_PROFILE = "LOAD_PROFILE",
   ADD_TASK = "ADD_TASK",
   REMOVE_TASK = "REMOVE_TASK"
}
```

对于经常会用到字符串字面量枚举的开发者来说，提案提建议支持如下语法：

```
enum Action: string {
   LOAD_PROFILE,
   ADD_TASK,
   REMOVE_TASK
}
```

但是官方没有接受这样的提议，可以利用 Server Language Plugin 机制实现一个扩展，以自动生成字面量枚举类型的字符串部分，就像是一个 Emmet 工具一样。

插件的安装使用有两种方式： 

- 作为 VSCode extension，直接在 VScode 扩展面板中安装 Typescript string literal enums Tools。
- 作为 TypeScript 插件，需要安装依赖模块，并且需要修改配置。

VSCode 与 TypeScript 由同一团队在维护，因此，两者的插件可以非常方便快捷集成，一个 TypeScript plugin 可以方便地集成为 VSCode extensions。

```sh
yarn add literal-enum 
# or 
npm i literal-enum
```

更新 tsconfig.json 配置：

```js
{
    "compilerOptions": {
        "plugins": [{
            "name": "literal-enum",
        }]
    }
}
```

TypeScript 提供了 Refactors，可以实现代码的重构，在编写插件中就需要相应的 API。

插件中需要引入一个叫 vscode 的模块

	import * as vscode from 'vscode';

熟悉 TypeScript 的朋友都知道这实际上只是引入了一个 vscode.d.ts 类型声明文件而已，这个文件包含了所有插件可用的 API 及类型定义。

https://zhuanlan.zhihu.com/p/54289476


# ⚑ Namespaces 命名空间
- https://www.typescriptlang.org/docs/handbook/namespaces.html
- https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html
- https://babeljs.io/docs/en/babel-plugin-transform-typescript#impartial-namespace-support
- https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html
- D3js: Data-Driven Documents https://www.d3js.org.cn/
- D3 Demo - Owls to the Max https://observablehq.com/@mbostock/owls-to-the-max

TypeScript 可以将多个 ts 文件的内容组织到一个名称空间中方便使用，要通过名称空间访问成员，成员必须要用 export 关键字导出。

示范：

	namespace Validation {
	  export interface StringValidator {
	    isAcceptable(s: string): boolean;
	  }

	  const lettersRegexp = /^[A-Za-z]+$/;
	  const numberRegexp = /^[0-9]+$/;

	  export class LettersOnlyValidator implements StringValidator {
	    isAcceptable(s: string) {
	      return lettersRegexp.test(s);
	    }
	  }

	  export class ZipCodeValidator implements StringValidator {
	    isAcceptable(s: string) {
	      return s.length === 5 && numberRegexp.test(s);
	    }
	  }
	}


	// Some samples to try
	let strings = ["Hello", "98052", "101"];

	// Validators to use
	let validators: { [s: string]: Validation.StringValidator } = {};
	validators["ZIP code"] = new Validation.ZipCodeValidator();
	validators["Letters only"] = new Validation.LettersOnlyValidator();

	// Show whether each string passed each validator
	for (let s of strings) {
	  for (let name in validators) {
	    console.log(
	      `"${s}" - ${
	        validators[name].isAcceptable(s) ? "matches" : "does not match"
	      } ${name}`
	    );
	  }
	}


多文件的命名空间使用示范：

Validation.ts

	namespace Validation {
	  export interface StringValidator {
	    isAcceptable(s: string): boolean;
	  }
	}
	
LettersOnlyValidator.ts

	/// <reference path="Validation.ts" />
	namespace Validation {
	  const lettersRegexp = /^[A-Za-z]+$/;
	  export class LettersOnlyValidator implements StringValidator {
	    isAcceptable(s: string) {
	      return lettersRegexp.test(s);
	    }
	  }
	}

ZipCodeValidator.ts

	/// <reference path="Validation.ts" />
	namespace Validation {
	  const numberRegexp = /^[0-9]+$/;
	  export class ZipCodeValidator implements StringValidator {
	    isAcceptable(s: string) {
	      return s.length === 5 && numberRegexp.test(s);
	    }
	  }
	}

Test.ts

	/// <reference path="Validation.ts" />
	/// <reference path="LettersOnlyValidator.ts" />
	/// <reference path="ZipCodeValidator.ts" />

	// Some samples to try
	let strings = ["Hello", "98052", "101"];

	// Validators to use
	let validators: { [s: string]: Validation.StringValidator } = {};
	validators["ZIP code"] = new Validation.ZipCodeValidator();
	validators["Letters only"] = new Validation.LettersOnlyValidator();

	// Show whether each string passed each validator
	for (let s of strings) {
	  for (let name in validators) {
	    console.log(
	      `"${s}" - ${
	        validators[name].isAcceptable(s) ? "matches" : "does not match"
	      } ${name}`
	    );
	  }
	}

进行编译时，编译器会自动根据引用将文件进行合并，以下命令等价：

	tsc --outFile sample.js Test.ts

	tsc --outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts


在 import 导入时使用命名空间别名：

	namespace Shapes {
	  export namespace Polygons {
	    export class Triangle {}
	    export class Square {}
	  }
	}

	import polygons = Shapes.Polygons;
	let sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'


环境命名空间 Ambient Namespaces，通常有些库是通过 HTML script 标签引入的，如 D3js，它是一个可以基于数据来操作文档的 JavaScript 库，可以帮助你使用 HTML, CSS, SVG 以及 Canvas 来展示数据。它使用命名空间定义其 shape 对象，对于 TypeScript 编译器要看到它们，就需要环境命名空间声明，例如可以像以下这样定义：

D3.d.ts (simplified excerpt)

	declare namespace D3 {
	  export interface Selectors {
	    select: {
	      (selector: string): Selection;
	      (element: EventTarget): Selection;
	    };
	  }

	  export interface Event {
	    x: number;
	    y: number;
	  }

	  export interface Base extends Selectors {
	    event: Event;
	  }
	}

	declare var d3: D3.Base;



在项目中和 Babel 一起使用时，由于 Babel 通过 plugin-transform-typescript 插件只实现支持 TypeScript 的命名空间功能的子集，所以有有些功能会受到约束。

比如，可能出现以下错误信息：

	Namespace not marked type-only declare. Non-declarative namespaces are only supported experimentally in Babel

即命名空间不是仅作为类型声明使用，而是包含了值定义，即非声明性命名空间 Non-declarative namespaces，这是 Babel 实验性功能，需要启用 allowNamespaces 选项支持才可用，默认是关闭的。或者将命名空间中的值定义部分移出，使命名空间只含有类型声明部分。

Babel 配置文件是项目顶级目录下的 .babelrc, .babelrc.js, .babelrc.json, 或者 babel.config.js，还可以配置到 package.json 文件的 babel 中。

比较一下 Type-Only declare 和 Non-declarative namespaces 的差别在哪：

	namespace Validation {
	  export function isAcceptable(s: string): boolean;
	}

	namespace Validation {
	  export function isAcceptable(s: string): boolean {
	  	return s.length > 0;
	  }
	}

另外命名空间不共享作用域，在 TypeScript 中，引用命名空间扩展的上下文项而不限定它们是有效的，编译器会添加限定符。在 Babel 中没有类型模型 Type-Model，并且不可能动态地更改引用以匹配父对象的已建立类型。

考虑以下代码：

	namespace N {
	  export const V = 1;
	}

	namespace N {
	  export const W = V;
	}

TypeScript 编译后得到：

	var N = {};
	(function (N) {
	  N.V = 1;
	})(N);
	(function (N) {
	  N.W = N.V;
	})(N);

Babel 会转译成以下结果：

	var N;
	(function (_N) {
	  const V = _N = 1;
	})(N || (N = {}));
	(function (_N) {
	  const W = V;
	})(N || (N = {}));

由于 Babel 不理解 N 的类型，引用 V 导致错误，解决方法是显式引用不在同一个命名空间定义的值，即使它们在 TypeScript 的可见作用域内。

	namespace N {
	  export const V = 1;
	}
	namespace N {
	  export const W = N.V;
	}



## Namespace & Module 命名空间与模块

在 TypeScript 1.5 开始，术语发生了变化，内部模块 Internal modules 现在称为名称空间。External modules 外部模块现在只是模块，与 ECMAScript 2015 的术语一致，即 model X {...} 相当于现在首选的名称空间 namespace X {...}。此外，在声明内部模块时使用 module 关键字的任何地方，都可以而且应该使用 namespace 关键字，这避免了类似名称的术语使用户感到困惑。

模块 Module 可以包含代码、声明，而命名空间是 TypeScript 组织代码的一种方法。模块在加载过程还依赖于模块加载器，不同的加载器使用的模块打包方式不一样，比如 CommonJS 或者支持 ES 模块的运行时。

模块化本身是为了提供更好的代码重用、更强的隔离和更好的工具支持。

值得注意的是 Node.js 应用程序默认是模块化的，在现代代码中，建议将模块置于名称空间之上。

从 ECMAScript 2015 开始，模块是语言的原生支持功能，所有兼容的引擎实现都应支持这些模块。因此，对于新项目，模块将是推荐的代码组织机制。


名称空间是组织特定类型脚本的方法，名称空间只是全局名称空间中的命名 JavaScript 对象。这使得名称空间成为一个非常简单的构造，与模块不同，它们可以跨多个文件，并且可以使用 --outFile 连接。名称空间是在 Web 应用程序中构造代码的好方法，所有依赖项都作为 script 标记包含在 HTML 页面中。

就像所有全局命名空间污染一样，很难识别组件依赖关系，尤其是在大型应用程序中。


模块的权衡，正如 JS 文件和模块之间有一对一的对应关系一样，TypeScript 在模块源文件和它们编译得到的 JS 文件之间也有一样。这样做的一个影响是，根据目标模块系统，无法连接多个模块源文件。例如，在针对 CommonJS 或 UMD 时不能使用 outFile 选项，但是对于 TypeScript 1.8 及更高版本，在针对 AMD 或 SYSTEM 时可以使用 outFile。

不必要的命名空间，如果要将程序从名称空间转换向为模块，很容易得到如下文件：

	export namespace Shapes {
		export class Triangle {
		  /* ... */
		}
		export class Square {
		  /* ... */
		}
	}

这种结构很让人迷惑，使用也不方便：

	// shapeConsumer.ts
	import * as shapes from "./shapes";
	let t = new shapes.Shapes.Triangle(); // shapes.Shapes?


一个常见的错误是尝试使用三斜杠指令来引用模块，而不是使用 import 语句。要理解这种区别，首先需要了解编译器如何根据导入路径 path 来确定模块的类型信息。编译器将尝试找到一个 .ts 或者 .tsx 原代码文件，然后是一个具有适当路径的 .d.ts 类型声明文件。如果找不到特定的文件，那么编译器将查找环境模块声明。回想一下，这些需要在 .d.ts 文件中声明。


	// myModules.d.ts
	// In a .d.ts file or .ts file that is not a module:
	declare module "SomeModule" {
	export function fn(): string;
	}


	// myOtherModule.ts
	/// <reference path="myModules.d.ts" />
	import * as m from "SomeModule";

The reference tag here allows us to locate the declaration file that contains the declaration for the ambient module. This is how the node.d.ts file that several of the TypeScript samples use is consumed.

这里的 reference 标记允许定位包含环境模块的声明文件，对就是 ambient module 的声明文件。



# ⚑ Module & Resolution 模块与解释
- https://www.typescriptlang.org/docs/handbook/modules.html
- https://www.typescriptlang.org/docs/handbook/module-resolution.html
- https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html

从 ECMAScript 2015 开始，JavaScript 有一个模块的概念，这是前端开发工程化管理的开端，TypeScript 也有这个概念。

模块在自己的作用域范围内执行，而不是在全局范围内执行，意味着在模块中声明的变量、函数、类等在模块外部不可见，除非它们使用某个导出窗体显式导出。相反，要使用从不同模块导出的变量、函数、类、接口等，必须使用各种 import 形式导入。

模块是声明性的，模块之间的关系是根据文件级的 import 和 export 来指定的。

有了模块的管理，相应就有模块加载器来加载，由于模块的发展太快，导致了有多种组织方式，不同模块组织格式不同，相互导入就需要正确对接。在运行时，模块加载器负责在执行模块之前定位和执行模块的所有依赖项。

主要的 Web 应用程序模块组织有四种，AMD、CMD、UMD、CommonJS，对应的主要模块加载器：

- **AMD** Asynchromous Module Definition 异步加载模块对应 RequireJS 加载程序；
- **CMD** Common Module Definition 公共模块定义；
- **UMD** Universal Module Definition 通用模块定义；
- **CommonJS** 服务端模块规范模块对应 Node.js 加载器；

TypeScript 就像 ECMAScript 2015 一样，任何包含顶级导入或导出的文件都被视为一个模块。相反，没有任何顶级导入或导出声明的文件被视为脚本，其内容在全局范围内可用，因此也对模块可用。



## AMD 异步模块加载程序
- https://requirejs.org/docs/download.html
- https://github.com/amdjs/amdjs-api/wiki/AMD

AMD - Asynchromous Module Definition 是 RequireJS 在推广过程中对模块定义的规范化产出，AMD 是异步加载模块，推崇依赖前置，管理模块之间的依赖性，便于代码的编写和维护。

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

	// import
	require(['module'], function (ref){ ... });

	// export
	define(function (){return 'value');

代码中使用时，依赖被前置，如定义模块 `module1` 时，就会加载依赖 `jquery`

	define('module1', ['jquery'], ($) => {
	  //do something...
	});

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
- 应用：seajs 是参照 UMD 规范实现的，requireJS 的最新的几个版本也是部分参照了 UMD 规范的实现

语法：

	// import
	define(function(require, exports, module) {});

	// export 
	define(function (){return '值');

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



## CommonJS 服务端模块规范

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

CommonJS 加载模块是同步的，所以只有加载完成才能执行后面的操作。像 Node.js 主要用于服务器的编程，加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式，所以 CommonJS 规范比较适用。但如果是浏览器环境，要从服务器加载模块，这是就必须采用异步模式，所以就有了 AMD CMD 解决方案。

## UMD 通用模块定义

UMD - Universal Module Definition 兼容 AMD 和 commonJS 规范的同时，还兼容全局引用的方式，全局变量引用方式即相当于原始的脚本，是 AMD 和 CommonJS 的一个糅合。AMD 是浏览器优先，异步加载；CommonJS 是服务器优先，同步加载。


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


## ESM - EcmaScript Module
- https://nodejs.org/dist/latest-v10.x/docs/api/esm.html#--experimental-modules

EcmaScript Module 或 ES MODULE，是支持 import from 最新标准的。

ESM 特点：

- 按需加载（编译时加载）
- import 和 export 命令只能在模块的顶层，不能在代码块如 if 语句之中，import() 语句可以在代码块中实现异步动态按需动态加载

- 环境： 浏览器或服务器环境（以后可能支持）
- 应用： ES6的最新语法支持规范
- 语法： 
	- import {moduleA，moduleB...} from 'path'
	- export 和 export default
	- import('path').then()

注意： export 只支持对象形式导出，不支持值的导出，export default 命令用于指定模块的默认输出，只支持值导出，但是只能指定一个，本质上它就是输出一个叫做 default 的变量或方法。

示范写法：

	export var m = 1;

	var m = 1;
	export {m};
	export {n as m};

	export default m;

	if (true) {
		import('./myModule.js')
		.then(({export1, export2}) => {
		  // ...
		});
	}

	Promise.all([
	  import('./module1.js'),
	  import('./module2.js'),
	  import('./module3.js'),
	])
	.then(([module1, module2, module3]) => {
	   ···
	});


## import & export

TypeScript 中所有声明，如：

- 变量 variable
- 函数 function
- 类实现 class
- 类型别名 type alias
- 接口 interface

TypeScript 的导出声明示范：

	// StringValidator.ts
	export interface StringValidator {
	  isAcceptable(s: string): boolean;
	}

	export { StringValidator };
	export { StringValidator as default };

	export default StringValidator;


	// ZipCodeValidator.ts
	import alsoValidator, { StringValidator } from "./StringValidator";

	export const numberRegexp = /^[0-9]+$/;

	export class ZipCodeValidator implements StringValidator {
	  isAcceptable(s: string) {
	    return s.length === 5 && numberRegexp.test(s);
	  }
	}

	class ZipCodeValidator implements StringValidator {
	  isAcceptable(s: string) {
	    return s.length === 5 && numberRegexp.test(s);
	  }
	}
	export { ZipCodeValidator };
	export { ZipCodeValidator as mainValidator };
	
模块有一个默认的导出对象，Default exports，在导入时，不需要使用花括号。



当前模块导入的声明，或导出其它未导入的模块 re-export，重新导出并不会进行导入，除非确实通过 import 导入了：

	ParseIntBasedZipCodeValidator.ts
	export class ParseIntBasedZipCodeValidator {
	  isAcceptable(s: string) {
	    return s.length === 5 && parseInt(s).toString() === s;
	  }
	}

	// Export original validator but rename it
	export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";

	export * from "./StringValidator"; // exports 'StringValidator' interface
	export * from "./ZipCodeValidator"; // exports 'ZipCodeValidator' class and 'numberRegexp' constant value
	export * from "./ParseIntBasedZipCodeValidator"; //  exports the 'ParseIntBasedZipCodeValidator' class
	// and re-exports 'RegExpBasedZipCodeValidator' as alias
	// of the 'ZipCodeValidator' class from 'ZipCodeValidator.ts'
	// module.


导入相对于导出就简单多了，和导出一样，导入也支持使用 as 来起花名：

	import { ZipCodeValidator } from "./ZipCodeValidator";
	let myValidator = new ZipCodeValidator();

	import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
	let myValidator = new ZCV();

不指定的符号的导入称为副作用导入 side-effects，即被导入的模块有某些功能，但不需要在当前模块中显式使用，也不要用它导出什么：

	import "./my-module.js";

TypeScript 3.8 版本及之后，可以使用 import 或 import type 语句导入类型：

	// Re-using the same import
	import { APIResponseType } from "./api";

	// Explicitly use import type
	import type { APIResponseType } from "./api";


或者使用 * 号一次导出、导入所有声明：

	export * as utilities from "./utilities";

	import * as utilities from "./utilities";



如果导出的库要设计用于许多种模块加载器中，或者没有模块加载的全局变量使用，这种模块管理被称为 UMD 模块。

可以通过导入或全局变量访问这些库，例如：

	// math-lib.d.ts
	export function isPrime(x: number): boolean;
	export as namespace mathLib;

然后在模块内导入使用：

	import { isPrime } from "math-lib";
	isPrime(2);
	mathLib.isPrime(2); // ERROR: can't use the global definition from inside a module

也可以用作全局变量，但只能在脚本内部使用，脚本是没有导入或导出的文件。

	mathLib.isPrime(2);


## exports for CommonJS & AMD

CommonJS 和 AMD 通常都有一个 exports 对象的概念，该对象包含一个模块的所有导出。它们还支持将 exports 对象替换为自定义的单个对象。默认导出 export default 旨在替代此行为，但是，两者不兼容。TypeScript 支持 export = 对传统的 CommonJS 和 AMD 工作流进行打包。

使用 export = 语法指定从模块导出的单个对象，可以是类、接口、命名空间、函数或枚举。导出模块时，必须配合使用 import require 导入模块：

	// ZipCodeValidator.ts
	let numberRegexp = /^[0-9]+$/;
	class ZipCodeValidator {
	  isAcceptable(s: string) {
	    return s.length === 5 && numberRegexp.test(s);
	  }
	}
	export = ZipCodeValidator;
	

	// Test.ts
	import zip = require("./ZipCodeValidator");

	// Some samples to try
	let strings = ["Hello", "98052", "101"];

	// Validators to use
	let validator = new zip();

	// Show whether each string passed each validator
	strings.forEach((s) => {
	  console.log(
	    `"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`
	  );
	});


## Code Generation for Modules

根据 TypeScript 配置的输出模块目标类型 target，编译器可以生成 Node.js (CommonJS), require.js (AMD), UMD, SystemJS, 或者 ECMAScript 2015 原生 ES6 模块。有关所生成代码中的 define、require 和 register 调用的信息，请参阅各个模块加载程序的文档。

除了在配置文件设置 module 生成类型，还可以在命令行中指定：

	tsc --module commonjs Test.ts

这个简单的例子展示了如何将导入和导出过程中使用的名称转换为模块加载代码。

	// SimpleModule.ts
	import m = require("mod");
	export let t = m.something + 1;


	// AMD / RequireJS SimpleModule.js
	define(["require", "exports", "./mod"], function (require, exports, mod_1) {
	  exports.t = mod_1.something + 1;
	});

	
	// CommonJS / Node SimpleModule.js
	var mod_1 = require("./mod");
	exports.t = mod_1.something + 1;
	

	// UMD SimpleModule.js
	(function (factory) {
	  if (typeof module === "object" && typeof module.exports === "object") {
	    var v = factory(require, exports);
	    if (v !== undefined) module.exports = v;
	  } else if (typeof define === "function" && define.amd) {
	    define(["require", "exports", "./mod"], factory);
	  }
	})(function (require, exports) {
	  var mod_1 = require("./mod");
	  exports.t = mod_1.something + 1;
	});
	

	// System SimpleModule.js
	System.register(["./mod"], function (exports_1) {
	  var mod_1;
	  var t;
	  return {
	    setters: [
	      function (mod_1_1) {
	        mod_1 = mod_1_1;
	      },
	    ],
	    execute: function () {
	      exports_1("t", (t = mod_1.something + 1));
	    },
	  };
	});
	

	// Native ECMAScript 2015 modules SimpleModule.js
	import { something } from "./mod";
	export var t = something + 1;



## Do not use namespaces in modules

不要在模块中使用名称空间，当第一次基于模块的组织时，一个常见的倾向是将导出对象包装在一个额外的 namespace。

模块有自己的作用域，只有导出的声明才能从模块外部看到，考虑到这一点，命名空间在处理模块时提供的使用价值很少。

在组织方面，名称空间可以方便地将全局范围内逻辑上相关的对象和类型分组在一起。例如 C# 所以集合类型组织在 System.Collections 命名空间。 通过将类型组织到分层名称空间中，为这些类型的用户提供了良好的发现体验。另一方面，模块已经存在于文件系统中，我们必须通过路径和文件名来解析它们，所以有一个逻辑组织方案供我们使用。

名称空间对于避免全局范围内的命名冲突非常重要，比如 A.AddForm 和 B.AddForm 两个名称相同但命名空间不同的类型。这不是模块的问题，在一个模块中，没有合理的理由让两个对象具有相同的名称。从使用者来看，任何给定模块的都要使用名字来引用模块，因此不可能出现意外的命名冲突。



# ⚑ Declaration Merging
- Declaration Merging https://www.typescriptlang.org/docs/handbook/declaration-merging.html

TypeScript 的强类型也带来了更多的约束，比如在 window 对象添加全局变量。有一些旧的库文件，使用全局变量访问，挂载在 window 对象下，那么在 TypeScript 中访问时提示 Window 类型上不存在指定属性。

TypeScript 特有的声明合并概念能帮助你使用现有 JavaScript 时获得优势，它还为更高级的抽象概念打开了大门。

可以给全局空间添加声明，TypeScript 会进行合并 Merging Namespaces，建一个声明文件，如 index.d.ts：

    interface Window {
        test: string;
    }

在 TypeScript 3.4 之前的做法是声明全局空间的变量，但是全局范围的扩充只能直接嵌套在外部模块或环境模块声明中：

	declare global {
	    interface Window {
	        test: string;
	    }
	}

Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.

避开强类型，可以将 window 对象转型，当然显得相当不 TypeScript：

	<any>windows.someglobalvar


## 声明合并基本概念

声明合并是指编译器将两个使用相同名称声明的独立声明合并到一个定义中。这个合并的定义具有两个原始声明的特性，可以合并任意数量的声明，不仅限于两个声明。

在 TypeScript 中，声明至少在以下三个组中的一个组中创建实体：名称空间、类型或值。

- Namespace-creating 声明创建一个名称空间，其中包含使用虚线表示法访问的名称。
- Type-creating 类型创建声明就是这样做的：它们创建的类型对声明的形状可见并绑定到给定的名称。
- Value-creating 值创建声明创建在输出 JavaScript 中可见的值。

	| Declaration Type | Namespace | Type | Value |
	|------------------|-----------|------|-------|
	| Namespace        | X         |      | X     |
	| Class            |           | X    | X     |
	| Enum             |           | X    | X     |
	| Interface        |           | X    |       |
	| Type Alias       |           | X    |       |
	| Function         |           |      | X     |
	| Variable         |           |      | X     |

## Merging Interfaces

The simplest, and perhaps most common, type of declaration merging is interface merging. At the most basic level, the merge mechanically joins the members of both declarations into a single interface with the same name.

	interface Box {
	  height: number;
	  width: number;
	}

	interface Box {
	  scale: number;
	}

	let box: Box = { height: 5, width: 6, scale: 10 };

Non-function members of the interfaces should be unique. If they are not unique, they must be of the same type. The compiler will issue an error if the interfaces both declare a non-function member of the same name, but of different types.

For function members, each function member of the same name is treated as describing an overload of the same function. Of note, too, is that in the case of interface A merging with later interface A, the second interface will have a higher precedence than the first.

That is, in the example:

	interface Cloner {
	  clone(animal: Animal): Animal;
	}

	interface Cloner {
	  clone(animal: Sheep): Sheep;
	}

	interface Cloner {
	  clone(animal: Dog): Dog;
	  clone(animal: Cat): Cat;
	}

The three interfaces will merge to create a single declaration as so:

	interface Cloner {
	  clone(animal: Dog): Dog;
	  clone(animal: Cat): Cat;
	  clone(animal: Sheep): Sheep;
	  clone(animal: Animal): Animal;
	}

Notice that the elements of each group maintains the same order, but the groups themselves are merged with later overload sets ordered first.

One exception to this rule is specialized signatures. If a signature has a parameter whose type is a single string literal type (e.g. not a union of string literals), then it will be bubbled toward the top of its merged overload list.

For instance, the following interfaces will merge together:

	interface Document {
	  createElement(tagName: any): Element;
	}
	interface Document {
	  createElement(tagName: "div"): HTMLDivElement;
	  createElement(tagName: "span"): HTMLSpanElement;
	}
	interface Document {
	  createElement(tagName: string): HTMLElement;
	  createElement(tagName: "canvas"): HTMLCanvasElement;
	}

The resulting merged declaration of Document will be the following:

	interface Document {
	  createElement(tagName: "canvas"): HTMLCanvasElement;
	  createElement(tagName: "div"): HTMLDivElement;
	  createElement(tagName: "span"): HTMLSpanElement;
	  createElement(tagName: string): HTMLElement;
	  createElement(tagName: any): Element;
	}

## Merging Namespaces

Similarly to interfaces, namespaces of the same name will also merge their members. Since namespaces create both a namespace and a value, we need to understand how both merge.

To merge the namespaces, type definitions from exported interfaces declared in each namespace are themselves merged, forming a single namespace with merged interface definitions inside.

To merge the namespace value, at each declaration site, if a namespace already exists with the given name, it is further extended by taking the existing namespace and adding the exported members of the second namespace to the first.

The declaration merge of Animals in this example:

	namespace Animals {
	  export class Zebra {}
	}

	namespace Animals {
	  export interface Legged {
	    numberOfLegs: number;
	  }
	  export class Dog {}
	}
	is equivalent to:

	namespace Animals {
	  export interface Legged {
	    numberOfLegs: number;
	  }

	  export class Zebra {}
	  export class Dog {}
	}

This model of namespace merging is a helpful starting place, but we also need to understand what happens with non-exported members. Non-exported members are only visible in the original (un-merged) namespace. This means that after merging, merged members that came from other declarations cannot see non-exported members.

We can see this more clearly in this example:

	namespace Animal {
	  let haveMuscles = true;

	  export function animalsHaveMuscles() {
	    return haveMuscles;
	  }
	}

	namespace Animal {
	  export function doAnimalsHaveMuscles() {
	    return haveMuscles; // Error, because haveMuscles is not accessible here
	  }
	}

Because haveMuscles is not exported, only the animalsHaveMuscles function that shares the same un-merged namespace can see the symbol. The doAnimalsHaveMuscles function, even though it’s part of the merged Animal namespace can not see this un-exported member.

## Merging Namespaces with Classes, Functions, and Enums

Namespaces are flexible enough to also merge with other types of declarations. To do so, the namespace declaration must follow the declaration it will merge with. The resulting declaration has properties of both declaration types. TypeScript uses this capability to model some of the patterns in JavaScript as well as other programming languages.

## Merging Namespaces with Classes

This gives the user a way of describing inner classes.

	class Album {
	  label: Album.AlbumLabel;
	}
	namespace Album {
	  export class AlbumLabel {}
	}

The visibility rules for merged members is the same as described in the Merging Namespaces section, so we must export the AlbumLabel class for the merged class to see it. The end result is a class managed inside of another class. You can also use namespaces to add more static members to an existing class.

In addition to the pattern of inner classes, you may also be familiar with the JavaScript practice of creating a function and then extending the function further by adding properties onto the function. TypeScript uses declaration merging to build up definitions like this in a type-safe way.

	function buildLabel(name: string): string {
	  return buildLabel.prefix + name + buildLabel.suffix;
	}

	namespace buildLabel {
	  export let suffix = "";
	  export let prefix = "Hello, ";
	}

	console.log(buildLabel("Sam Smith"));

Similarly, namespaces can be used to extend enums with static members:

	enum Color {
	  red = 1,
	  green = 2,
	  blue = 4,
	}

	namespace Color {
	  export function mixColor(colorName: string) {
	    if (colorName == "yellow") {
	      return Color.red + Color.green;
	    } else if (colorName == "white") {
	      return Color.red + Color.green + Color.blue;
	    } else if (colorName == "magenta") {
	      return Color.red + Color.blue;
	    } else if (colorName == "cyan") {
	      return Color.green + Color.blue;
	    }
	  }
	}

## Disallowed Merges

Not all merges are allowed in TypeScript. Currently, classes can not merge with other classes or with variables. For information on mimicking class merging, see the Mixins in TypeScript section.

## Module Augmentation

Although JavaScript modules do not support merging, you can patch existing objects by importing and then updating them. Let’s look at a toy Observable example:

	// observable.ts
	export class Observable<T> {
	  // ... implementation left as an exercise for the reader ...
	}

	// map.ts
	import { Observable } from "./observable";
	Observable.prototype.map = function (f) {
	  // ... another exercise for the reader
	};

This works fine in TypeScript too, but the compiler doesn’t know about Observable.prototype.map. You can use module augmentation to tell the compiler about it:

	// observable.ts
	export class Observable<T> {
	  // ... implementation left as an exercise for the reader ...
	}

	// map.ts
	import { Observable } from "./observable";
	declare module "./observable" {
	  interface Observable<T> {
	    map<U>(f: (x: T) => U): Observable<U>;
	  }
	}
	Observable.prototype.map = function (f) {
	  // ... another exercise for the reader
	};

	// consumer.ts
	import { Observable } from "./observable";
	import "./map";
	let o: Observable<number>;
	o.map((x) => x.toFixed());

The module name is resolved the same way as module specifiers in import/export. See Modules for more information. Then the declarations in an augmentation are merged as if they were declared in the same file as the original.

However, there are two limitations to keep in mind:

You can’t declare new top-level declarations in the augmentation — just patches to existing declarations.
Default exports also cannot be augmented, only named exports (since you need to augment an export by its exported name, and default is a reserved word - see #14080 for details)

## Global augmentation

You can also add declarations to the global scope from inside a module:

	// observable.ts
	export class Observable<T> {
	  // ... still no implementation ...
	}

	declare global {
	  interface Array<T> {
	    toObservable(): Observable<T>;
	  }
	}

	Array.prototype.toObservable = function () {
	  // ...
	};

# ⚑ Mixins 混入
- https://www.typescriptlang.org/docs/handbook/mixins.html
- https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/

与传统的 OO 层次结构一样，从可重用组件构建类的另一种流行方法是 Mixins，通过组合更简单的部分类来构建它们。和 Scala 等语言的 mixin 或 traits 的概念相同，并且该模式在 JavaScript 社区中也已达到一定的流行程度。

例子，基类如下：

	class Sprite {
	  name = "";
	  x = 0;
	  y = 0;

	  constructor(name: string) {
	    this.name = name;
	  }
	}

然后需要一个类型和工厂返回扩展基类后的类：

	// To get started, we need a type which we'll use to extend
	// other classes from. The main responsibility is to declare
	// that the type being passed in is a class.

	type Constructor = new (...args: any[]) => {};

	// This mixin adds a scale property, with getters and setters
	// for changing it with an encapsulated private property:

	function Scale<TBase extends Constructor>(Base: TBase) {
	  return class Scaling extends Base {
	    // Mixins may not declare private/protected properties
	    // however, you can use ES2020 private fields
	    _scale = 1;

	    setScale(scale: number) {
	      this._scale = scale;
	    }

	    get scale(): number {
	      return this._scale;
	    }
	  };
	}

然后，使用工厂来混合出新类型：

	// Compose a new class from the Sprite class,
	// with the Mixin Scale applier:
	const EightBitSprite = Scale(Sprite);

	const flappySprite = new EightBitSprite("Bird");
	flappySprite.setScale(0.8);
	console.log(flappySprite.scale);

## Constrained Mixins

In the above form, the mixin’s have no underlying knowledge of the class which can make it hard to create the design you want.

To model this, we modify the original constructor type to accept a generic argument.

	// This was our previous constructor:
	type Constructor = new (...args: any[]) => {};
	// Now we use a generic version which can apply a constraint on
	// the class which this mixin is applied to
	type GConstructor<T = {}> = new (...args: any[]) => T;

This allows for creating classes which only work with constrained base classes:

	type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
	type Spritable = GConstructor<typeof Sprite>;
	type Loggable = GConstructor<{ print: () => void }>;

Then you can create mixins which only work when you have a particular base to build on:

	function Jumpable<TBase extends Positionable>(Base: TBase) {
	  return class Jumpable extends Base {
	    jump() {
	      // This mixin will only work if it is passed a base
	      // class which has setPos defined because of the
	      // Positionable constraint.
	      this.setPos(0, 20);
	    }
	  };
	}

## Alternative Pattern

Previous versions of this document recommended a way to write mixins where you created both the runtime and type hierarchies separately, then merged them at the end:

	// Each mixin is a traditional ES class
	class Jumpable {
	  jump() {}
	}

	class Duckable {
	  duck() {}
	}

	// Including the base
	class Sprite {
	  x = 0;
	  y = 0;
	}

	// Then you create an interface which merges
	// the expected mixins with the same name as your base
	interface Sprite extends Jumpable, Duckable {}
	// Apply the mixins into the base class via
	// the JS at runtime
	applyMixins(Sprite, [Jumpable, Duckable]);

	let player = new Sprite();
	player.jump();
	console.log(player.x, player.y);

	// This can live anywhere in your codebase:
	function applyMixins(derivedCtor: any, constructors: any[]) {
	  constructors.forEach((baseCtor) => {
	    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
	      Object.defineProperty(
	        derivedCtor.prototype,
	        name,
	        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
	          Object.create(null)
	      );
	    });
	  });
	}

This pattern relies less on the compiler, and more on your codebase to ensure both runtime and type-system are correctly kept in sync.

## Constraints
The mixin pattern is supported natively inside the TypeScript compiler by code flow analysis. There are a few cases where you can hit the edges of the native support.

Decorators and Mixins #4881

You cannot use decorators to provide mixins via code flow analysis:

	// A decorator function which replicates the mixin pattern:
	const Pausable = (target: typeof Player) => {
	  return class Pausable extends target {
	    shouldFreeze = false;
	  };
	};

	@Pausable
	class Player {
	  x = 0;
	  y = 0;
	}

	// The Player class does not have the decorator's type merged:
	const player = new Player();
	player.shouldFreeze;
	Property 'shouldFreeze' does not exist on type 'Player'.

	// It the runtime aspect could be manually replicated via
	// type composition or interface merging.
	type FreezablePlayer = typeof Player & { shouldFreeze: boolean };

	const playerTwo = (new Player() as unknown) as FreezablePlayer;
	playerTwo.shouldFreeze;

Static Property Mixins #17829

More of a gotcha than a constraint. The class expression pattern creates singletons, so they can’t be mapped at the type system to support different variable types.

You can work around this by using functions to return your classes which differ based on a generic:

	function base<T>() {
	  class Base {
	    static prop: T;
	  }
	  return Base;
	}

	function derived<T>() {
	  class Derived extends base<T>() {
	    static anotherProp: T;
	  }
	  return Derived;
	}

	class Spec extends derived<string>() {}

	Spec.prop; // string
	Spec.anotherProp; // string


# ⚑ Utility Types 工具类型
- https://www.typescriptlang.org/docs/handbook/utility-types.html

TypeScript 提供的工具类型可以很好地帮助 TypeScript 代码实现通用的 JavaScript 代码，同时又不失强类型的特征。

01. Awaited<Type>
02. Partial<Type>
03. Required<Type>
04. Readonly<Type>
05. Record<Keys, Type>
06. Pick<Type, Keys>
07. Omit<Type, Keys>
08. Exclude<UnionType, ExcludedMembers>
09. Extract<Type, Union>
10. NonNullable<Type>
11. Parameters<Type>
12. ConstructorParameters<Type>
13. ReturnType<Type>
14. InstanceType<Type>
15. ThisParameterType<Type>
16. OmitThisParameter<Type>
17. ThisType<Type>
18. Intrinsic String Manipulation Types
19. Uppercase<StringType>
20. Lowercase<StringType>
21. Capitalize<StringType>
22. Uncapitalize<StringType>


## Optionalize

Optionalize<T extends K, K>: Remove from T the keys that are in common with K

	/**
	 * Remove from T the keys that are in common with K
	 */
	type Optionalize<T extends K, K> = Omit<T, keyof K>;


## Nullable<T> or Maybe<T>

Nullable<T> or Maybe<T>: Make a Type into a Maybe Type

	/**
	 * Make a Type into a Maybe Type
	 */
	type Nullable<T> = T | null
	type Maybe<T> = T | undefined


## Dictionary<T>

Dictionary<T>: Dictionary of string, value pairs

	/**
	 * Dictionary of string, value pairs
	 */
	type Dictionary<T> = { [key: string]: T }

[key: string] 这种是映射类型语法。


## Partial<Type> 泛型

参考 TypeScript 提供的 Mapped Types 映射类型，Partial 可以构造出成员可选的类型，这在 JavaScript 是最基本的功能。

	type Partial<T> = {
	    [P in keyof T]?: T[P];
	}

以下示范通过 Partial 泛型得到一个成员可选的类型：

	type Props = {
		name: string, 
		a: number
	};

	type PartialProps = {
		name?: string, 
		a?: number
	};

	// type PartialProps = Partial<Props>;


	function test(props: Props) {
	  console.log(props);
	}

	function testPartial(props:PartialProps) {
	  console.log(props);
	}

	testPartial({a:1});


## Readonly<Type> 泛型

Readonly 可以生成一个成员为只读的类型：

	type Readonly<T> = {
	    readonly [P in keyof T]: T[P];
	}

使用示范：

	interface Todo {
	  title: string;
	}

	const todo: Readonly<Todo> = {
	  title: "Delete inactive users",
	};

	todo.title = "Hello";
	// Cannot assign to 'title' because it is a read-only property.

## Record<Keys,Type>

Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

	interface PageInfo {
	  title: string;
	}

	type Page = "home" | "about" | "contact";

	const nav: Record<Page, PageInfo> = {
	  about: { title: "about" },
	  contact: { title: "contact" },
	  home: { title: "home" },
	};

	nav.about;
	//   ^ = Could not get LSP result: v.a>b

## Pick<Type, Keys>

Constructs a type by picking the set of properties Keys from Type.

	interface Todo {
	  title: string;
	  description: string;
	  completed: boolean;
	}

	type TodoPreview = Pick<Todo, "title" | "completed">;

	const todo: TodoPreview = {
	  title: "Clean room",
	  completed: false,
	};

	todo;
	// ^ = const todo: Pick


## Omit<Type, Keys>

Constructs a type by picking all properties from Type and then removing Keys.

	interface Todo {
	  title: string;
	  description: string;
	  completed: boolean;
	}

	type TodoPreview = Omit<Todo, "description">;

	const todo: TodoPreview = {
	  title: "Clean room",
	  completed: false,
	};

	todo;
	// ^ = const todo: Pick


## Exclude<Type, ExcludedUnion>

Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.

	type T0 = Exclude<"a" | "b" | "c", "a">;
	//    ^ = type T0 = "b" | "c"

	type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
	//    ^ = type T1 = "c"
	
	type T2 = Exclude<string | number | (() => void), Function>;
	//    ^ = type T2 = string | number

## Extract<Type, Union>

Constructs a type by extracting from Type all union members that are assignable to Union.

	type T0 = Extract<"a" | "b" | "c", "a" | "f">;
	//    ^ = type T0 = "a"

	type T1 = Extract<string | number | (() => void), Function>;
	//    ^ = type T1 = () => void

## NonNullable<Type>

Constructs a type by excluding null and undefined from Type.

	type T0 = NonNullable<string | number | undefined>;
	//    ^ = type T0 = string | number

	type T1 = NonNullable<string[] | null | undefined>;
	//    ^ = type T1 = string[]



## Parameters<Type>

Constructs a tuple type from the types used in the parameters of a function type Type.

	declare function f1(arg: { a: number; b: string }): void;

	type T0 = Parameters<() => string>;
	//    ^ = type T0 = []

	type T1 = Parameters<(s: string) => void>;
	//    ^ = type T1 = [s: string]

	type T2 = Parameters<<T>(arg: T) => T>;
	//    ^ = type T2 = [arg: unknown]

	type T3 = Parameters<typeof f1>;
	//    ^ = type T3 = [arg: {
	//        a: number;
	//        b: string;
	//    }]

	type T4 = Parameters<any>;
	//    ^ = type T4 = unknown[]

	type T5 = Parameters<never>;
	//    ^ = type T5 = never

	type T6 = Parameters<string>;
	Type 'string' does not satisfy the constraint '(...args: any) => any'.
	//    ^ = type T6 = never

	type T7 = Parameters<Function>;
	Type 'Function' does not satisfy the constraint '(...args: any) => any'.
	  Type 'Function' provides no match for the signature '(...args: any): any'.
	//    ^ = type T7 = neverTry


## ConstructorParameters<Type>

Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type never if Type is not a function).

	type T0 = ConstructorParameters<ErrorConstructor>;
	//    ^ = type T0 = [message?: string]

	type T1 = ConstructorParameters<FunctionConstructor>;
	//    ^ = type T1 = string[]

	type T2 = ConstructorParameters<RegExpConstructor>;
	//    ^ = type T2 = [pattern: string | RegExp, flags?: string]

	type T3 = ConstructorParameters<any>;
	//    ^ = type T3 = unknown[]

	type T4 = ConstructorParameters<Function>;
	Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
	  Type 'Function' provides no match for the signature 'new (...args: any): any'.
	//    ^ = type T4 = never


## ReturnType<Type>

从函数返回值中构建类型。

Constructs a type consisting of the return type of function Type.

	declare function f1(): { a: number; b: string };

	type T0 = ReturnType<() => string>;
	//    ^ = type T0 = string

	type T1 = ReturnType<(s: string) => void>;
	//    ^ = type T1 = void

	type T2 = ReturnType<<T>() => T>;
	//    ^ = type T2 = unknown

	type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
	//    ^ = type T3 = number[]

	type T4 = ReturnType<typeof f1>;
	//    ^ = type T4 = {
	//        a: number;
	//        b: string;
	//    }

	type T5 = ReturnType<any>;
	//    ^ = type T5 = any

	type T6 = ReturnType<never>;
	//    ^ = type T6 = never

	type T7 = ReturnType<string>;
	Type 'string' does not satisfy the constraint '(...args: any) => any'.
	//    ^ = type T7 = any

	type T8 = ReturnType<Function>;
	Type 'Function' does not satisfy the constraint '(...args: any) => any'.
	  Type 'Function' provides no match for the signature '(...args: any): any'.
	//    ^ = type T8 = any

## InstanceType<Type>

Constructs a type consisting of the instance type of a constructor function in Type.

	class C {
	  x = 0;
	  y = 0;
	}

	type T0 = InstanceType<typeof C>;
	//    ^ = type T0 = C

	type T1 = InstanceType<any>;
	//    ^ = type T1 = any

	type T2 = InstanceType<never>;
	//    ^ = type T2 = never

	type T3 = InstanceType<string>;
	Type 'string' does not satisfy the constraint 'new (...args: any) => any'.
	//    ^ = type T3 = any

	type T4 = InstanceType<Function>;
	Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
	  Type 'Function' provides no match for the signature 'new (...args: any): any'.
	//    ^ = type T4 = any


## Required<Type>

Constructs a type consisting of all properties of T set to required. The opposite of Partial.

	interface Props {
	  a?: number;
	  b?: string;
	}

	const obj: Props = { a: 5 };

	const obj2: Required<Props> = { a: 5 };
	Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.


## ThisParameterType<Type>

Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.

	function toHex(this: Number) {
	  return this.toString(16);
	}

	function numberToString(n: ThisParameterType<typeof toHex>) {
	  return toHex.apply(n);
	}


## OmitThisParameter<Type>

Removes the this parameter from Type. If Type has no explicitly declared this parameter, the result is simply Type. Otherwise, a new function type with no this parameter is created from Type. Generics are erased and only the last overload signature is propagated into the new function type.

	function toHex(this: Number) {
	  return this.toString(16);
	}

	const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

	console.log(fiveToHex());

## ThisType<Type>

This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type. Note that the --noImplicitThis flag must be enabled to use this utility.

	type ObjectDescriptor<D, M> = {
	  data?: D;
	  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
	};

	function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
	  let data: object = desc.data || {};
	  let methods: object = desc.methods || {};
	  return { ...data, ...methods } as D & M;
	}

	let obj = makeObject({
	  data: { x: 0, y: 0 },
	  methods: {
	    moveBy(dx: number, dy: number) {
	      this.x += dx; // Strongly typed this
	      this.y += dy; // Strongly typed this
	    },
	  },
	});

	obj.x = 10;
	obj.y = 20;
	obj.moveBy(5, 5);



# ⚑ Template Literal Types
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
- https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
- https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype

模板文本类型是方便字符串字面类型处理的工具：

	type World = "world";

	type Greeting = `hello ${World}`;
	//   ^ = type Greeting = "hello world"

	type EmailLocaleIDs = "welcome_email" | "email_heading";
	type FooterLocaleIDs = "footer_title" | "footer_sendoff";

	type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
	//   ^ = type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

	type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
	type Lang = "en" | "ja" | "pt";

	type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
	//   ^ = type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"

## String Unions in Types

当基于类型中的现有字符串定义新字符串时，模板文本的威力就来了。

例如，JavaScript 中的一个常见模式是基于对象当前拥有的字段来扩展对象。为一个函数提供一个类型定义，添加了对 on 函数的支持，该函数通知数据何时发生了更改：

	const person = makeWatchedObject({
	  firstName: "Saoirse",
	  lastName: "Ronan",
	  age: 26,
	});

	person.on("firstNameChanged", (newValue) => {
	  console.log(`firstName was changed to ${newValue}!`);
	});

	type PropEventSource<Type> = {
	    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
	};

	/// Create a "watched object" with an 'on' method
	/// so that you can watch for changes to properties.
	declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

当使用错误的属性时，比如打错字，就会得到错误信息，这就很好地解决了一些潜在不容易发觉的 bug：

	// It's typo-resistent
	person.on("firstName", () => {});
	Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.

	person.on("frstNameChanged", () => {});
	Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.


## Inference with Template Literals

请注意，上一个示例没有重用原始值的类型，回调参数使用了 any，模板文本类型可以从替换位置推断。

我们可以将最后一个示例设置为泛型，以便从 eventName 字符串的部分内容推断出关联的属性。

	type PropEventSource<Type> = {
	    on<Key extends string & keyof Type>
	        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
	};

	declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

	const person = makeWatchedObject({
	  firstName: "Saoirse",
	  lastName: "Ronan",
	  age: 26
	});

	person.on("firstNameChanged", newName => {
	//                            ^ = (parameter) newName: string
	    console.log(`new name is ${newName.toUpperCase()}`);
	});

	person.on("ageChanged", newAge => {
	//                      ^ = (parameter) newAge: number
	    if (newAge < 0) {
	        console.warn("warning! negative age");
	    }
	})

## Intrinsic String Manipulation Types

内在字符串操作类型包含一系列的字符串处理类型，内建于 TypeScript 4.1 中，在 .d.ts 类型定义文件里是找不到的。

Uppercase<StringType>

	type Greeting = "Hello, world"
	type ShoutyGreeting = Uppercase<Greeting>
	// ^ = Could not get LSP result: typ>e< Sh

	type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
	type MainID = ASCIICacheKey<"my_app">
	//   ^ = type MainID = "ID-MY_APP"

Lowercase<StringType>

	type QuietGreeting = Lowercase<Greeting>
	// ^ = Could not get LSP result: typ>e< Qu

	type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
	type MainID = ASCIICacheKey<"MY_APP">
	//   ^ = type MainID = "id-my_app"Try

Capitalize<StringType>

	type Greeting = Capitalize<LowercaseGreeting>;
	//   ^ = type Greeting = "Hello, world"Try

Uncapitalize<StringType>

	type UncomfortableGreeting = Uncapitalize<LowercaseGreeting>;
	//   ^ = type UncomfortableGreeting = "hELLO WORLD"


# ⚑ Advanced Types 高级类型
- 高级类型 https://www.tslang.cn/docs/handbook/advanced-types.html
- Advanced Types https://www.typescriptlang.org/docs/handbook/advanced-types.html
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html

- Intersection Types
- Union Types
- Type Guards and Differentiating Types
	- User-Defined Type Guards
		- Using type predicates
		- Using the in operator
	- typeof type guards
	- instanceof type guards

- Nullable types
	- Optional parameters and properties
	- Type guards and type assertions

- Type Aliases
	- Interfaces vs. Type Aliases

- String Literal Types
- Numeric Literal Types
- Enum Member Types
- Discriminated Unions
	- Exhaustiveness checking

- Polymorphic this types

- Index types
	- Index types and index signatures

- Mapped types
	- Inference from mapped types

- Conditional Types
	- Distributive conditional types
	- Type inference in conditional types
	- Predefined conditional types

TypeScript Cheat Sheets 
		https://www.typescriptlang.org/cheatsheets
		https://www.typescriptlang.org/assets/typescript-cheat-sheets.zip

1. TypeScript Control Flow Analysis
		https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png
2. TypeScript Interfaces
		https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png
3. TypeScript Types
		https://www.typescriptlang.org/static/TypeScript%20Types-ae199d69aeecf7d4a2704a528d0fd3f9.png
4. TypeScript Classes
		https://www.typescriptlang.org/static/TypeScript%20Classes-83cc6f8e42ba2002d5e2c04221fa78f9.png

## Intersection Types 交叉类型 &

交叉类型 Intersection Types 是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。

例如，同时是 Person 和 Serializable 和 Loggable，就是说这个类型的对象同时拥有了这三种类型的成员。

	type IT = Person & Serializable & Loggable

我们大多是在混入 mixins 或其它不适合典型面向对象模型的地方看到交叉类型的使用。 在 JavaScript 里发生这种情况的场合很多！

下面是如何创建混入的一个简单例子：

	function extend<T, U>(first: T, second: U): T & U {
	    let result = <T & U>{};
	    for (let id in first) {
	        (<any>result)[id] = (<any>first)[id];
	    }
	    for (let id in second) {
	        if (!result.hasOwnProperty(id)) {
	            (<any>result)[id] = (<any>second)[id];
	        }
	    }
	    return result;
	}

	class Person {
	    constructor(public name: string) { }
	}
	interface Loggable {
	    log(): void;
	}
	class ConsoleLogger implements Loggable {
	    log() {
	        // ...
	    }
	}
	var jim = extend(new Person("Jim"), new ConsoleLogger());
	var n = jim.name;
	jim.log();

## Union Types 联合类型 |

联合类型 Union Types 与交叉类型很有关联，但是使用上却完全不同。 偶尔你会遇到这种情况，一个代码库希望传入 number 或 string 类型的参数。 例如下面的函数：

	/**
	 * Takes a string and adds "padding" to the left.
	 * If 'padding' is a string, then 'padding' is appended to the left side.
	 * If 'padding' is a number, then that number of spaces is added to the left side.
	 */
	function padLeft(value: string, padding: any) {
	    if (typeof padding === "number") {
	        return Array(padding + 1).join(" ") + value;
	    }
	    if (typeof padding === "string") {
	        return padding + value;
	    }
	    throw new Error(`Expected string or number, got '${padding}'.`);
	}

	padLeft("Hello world", 4); // returns "    Hello world"

padLeft 存在一个问题， padding 参数的类型指定成了 any。 这就是说我们可以传入一个既不是 number 也不是 string 类型的参数，但是 TypeScript 却不报错。

	let indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错

在传统的面向对象语言里，我们可能会将这两种类型抽象成有层级的类型。 这么做显然是非常清晰的，但同时也存在了过度设计。 padLeft 原始版本的好处之一是允许我们传入原始类型。 这样做的话使用起来既简单又方便。 如果我们就是想使用已经存在的函数的话，这种新的方式就不适用了。

代替 any， 我们可以使用联合类型做为 padding 的参数：

	/**
	 * Takes a string and adds "padding" to the left.
	 * If 'padding' is a string, then 'padding' is appended to the left side.
	 * If 'padding' is a number, then that number of spaces is added to the left side.
	 */
	function padLeft(value: string, padding: string | number) {
	    // ...
	}

	let indentedString = padLeft("Hello world", true); // errors during compilation

联合类型表示一个值可以是几种类型之一。 我们用竖线分隔每个类型，所以 `number | string | boolean` 表示一个值可以是 number， string，或 boolean。

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

	interface Bird {
	    fly();
	    layEggs();
	}

	interface Fish {
	    swim();
	    layEggs();
	}

	function getSmallPet(): Fish | Bird {
	    // ...
	}

	let pet = getSmallPet();
	pet.layEggs(); // okay
	pet.swim();    // errors

这里的联合类型可能有点复杂，但是你很容易就习惯了。 如果一个值的类型是 `A | B`，我们能够 确定的是它包含了 A 和 B 中共有的成员。 这个例子里， Bird 具有一个 fly 成员。 我们不能确定一个 `Bird | Fish` 类型的变量是否有 fly 方法。 如果变量在运行时是 Fish 类型，那么调用 pet.fly() 就出错了。


## Type Guards and Differentiating Types 类型保护与区分类型

联合类型适合于那些值可以为不同类型的情况。 但当我们想确切地了解是否为 Fish 时怎么办？ JavaScript 里常用来区分 2 个可能值的方法是检查成员是否存在。 如之前提及的，我们只能访问联合类型中共同拥有的成员。

	let pet = getSmallPet();

	// 每一个成员访问都会报错
	if (pet.swim) {
	    pet.swim();
	}
	else if (pet.fly) {
	    pet.fly();
	}

为了让这段代码工作，我们要使用类型断言：

	let pet = getSmallPet();

	if ((<Fish>pet).swim) {
	    (<Fish>pet).swim();
	}
	else {
	    (<Bird>pet).fly();
	}

### ☛ 用户自定义的类型保护

这里可以注意到我们不得不多次使用类型断言。 假若我们一旦检查过类型，就能在之后的每个分支里清楚地知道 pet 的类型的话就好了。

TypeScript里的 类型保护机制让它成为了现实。 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。 要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词：

	function isFish(pet: Fish | Bird): pet is Fish {
	    return (<Fish>pet).swim !== undefined;
	}

在这个例子里， pet is Fish 就是类型谓词。 谓词为 parameterName is Type这种形式， parameterName 必须是来自于当前函数签名里的一个参数名。

每当使用一些变量调用 isFish 时，TypeScript 会将变量缩减为那个具体的类型，只要这个类型与变量的原始类型是兼容的。

	// 'swim' 和 'fly' 调用都没有问题了

	if (isFish(pet)) {
	    pet.swim();
	}
	else {
	    pet.fly();
	}

注意 TypeScript 不仅知道在 if 分支里 pet 是 Fish 类型； 它还清楚在 else 分支里，一定 不是 Fish 类型，一定是 Bird 类型。

### ☛ typeof 类型保护

现在我们回过头来看看怎么使用联合类型书写 padLeft代码。 我们可以像下面这样利用类型断言来写：

	function isNumber(x: any): x is number {
	    return typeof x === "number";
	}

	function isString(x: any): x is string {
	    return typeof x === "string";
	}

	function padLeft(value: string, padding: string | number) {
	    if (isNumber(padding)) {
	        return Array(padding + 1).join(" ") + value;
	    }
	    if (isString(padding)) {
	        return padding + value;
	    }
	    throw new Error(`Expected string or number, got '${padding}'.`);
	}

然而，必须要定义一个函数来判断类型是否是原始类型，这太痛苦了。 幸运的是，现在我们不必将 typeof x === "number" 抽象成一个函数，因为 TypeScript 可以将它识别为一个类型保护。 也就是说我们可以直接在代码里检查类型了。

	function padLeft(value: string, padding: string | number) {
	    if (typeof padding === "number") {
	        return Array(padding + 1).join(" ") + value;
	    }
	    if (typeof padding === "string") {
	        return padding + value;
	    }
	    throw new Error(`Expected string or number, got '${padding}'.`);
	}

这些 `* typeof` 类型保护 `*` 只有两种形式能被识别： `typeof v === "typename"` 和 `typeof v !== "typename"`， "typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。

### ☛ instanceof 类型保护

如果你已经阅读了 typeof 类型保护并且对 JavaScript 里的 instanceof 操作符熟悉的话，你可能已经猜到了这节要讲的内容。

instanceof 类型保护是通过构造函数来细化类型的一种方式。 比如，我们借鉴一下之前字符串填充的例子：

	interface Padder {
	    getPaddingString(): string
	}

	class SpaceRepeatingPadder implements Padder {
	    constructor(private numSpaces: number) { }
	    getPaddingString() {
	        return Array(this.numSpaces + 1).join(" ");
	    }
	}

	class StringPadder implements Padder {
	    constructor(private value: string) { }
	    getPaddingString() {
	        return this.value;
	    }
	}

	function getRandomPadder() {
	    return Math.random() < 0.5 ?
	        new SpaceRepeatingPadder(4) :
	        new StringPadder("  ");
	}

	// 类型为SpaceRepeatingPadder | StringPadder
	let padder: Padder = getRandomPadder();

	if (padder instanceof SpaceRepeatingPadder) {
	    padder; // 类型细化为'SpaceRepeatingPadder'
	}
	if (padder instanceof StringPadder) {
	    padder; // 类型细化为'StringPadder'
	}

instanceof 的右侧要求是一个构造函数，TypeScript 将细化为：

- 此构造函数的 prototype属性的类型，如果它的类型不为 any的话
- 构造签名所返回的类型的联合
- 以此顺序。


## Nullable types 可以为 null 的类型

### Optional ? parameters and properties 可选参数和可选属性

使用了 –strictNullChecks，可选参数会被自动地加上 | undefined:

	function f(x: number, y?: number) {
	    return x + (y || 0);
	}

	f(1, 2);
	f(1);
	f(1, undefined);
	f(1, null); // error, 'null' is not assignable to 'number | undefined'

	class C {
	    a: number;
	    b?: number;
	}

	let c = new C();
	c.a = 12;
	c.a = undefined; // error, 'undefined' is not assignable to 'number'
	c.b = 13;
	c.b = undefined; // ok
	c.b = null; // error, 'null' is not assignable to 'number | undefined'

### Type guards ! and type assertions 类型保护和类型断言

由于可以为 null 的类型是通过联合类型实现，那么你需要使用类型保护来去除 null。 幸运地是这与在 JavaScript 里写的代码一致：

	function f(sn: string | null): string {
	    if (sn == null) {
	        return "default";
	    }
	    else {
	        return sn;
	    }
	}

这里很明显地去除了 null，你也可以使用捷径运算符：

	function f(sn: string | null): string {
	    return sn || "default";
	}

如果编译器不能够去除 null 或 undefined，你可以使用类型断言手动去除。 语法是添加 ! 后缀： identifier! 从 identifier 的类型里去除了 null 和 undefined：

	function broken(name: string | null): string {
	  function postfix(epithet: string) {
	    return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
	  }
	  name = name || "Bob";
	  return postfix("great");
	}

	function fixed(name: string | null): string {
	  function postfix(epithet: string) {
	    return name!.charAt(0) + '.  the ' + epithet; // ok
	  }
	  name = name || "Bob";
	  return postfix("great");
	}

本例使用了嵌套函数，因为编译器无法去除嵌套函数的 null， 除非是立即调用的函数表达式。 因为它无法跟踪所有对嵌套函数的调用，尤其是你将内层函数做为外层函数的返回值。 如果无法知道函数在哪里被调用，就无法知道调用时 name 的类型。




## Type Aliases 类型别名

类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。

	type Name = string;
	type NameResolver = () => string;
	type NameOrResolver = Name | NameResolver;
	function getName(n: NameOrResolver): Name {
	    if (typeof n === 'string') {
	        return n;
	    }
	    else {
	        return n();
	    }
	}

起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。 给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用。

同接口一样，类型别名也可以是泛型 - 我们可以添加类型参数并且在别名声明的右侧传入：

	type Container<T> = { value: T };

我们也可以使用类型别名来在属性里引用自己：

	type Tree<T> = {
	    value: T;
	    left: Tree<T>;
	    right: Tree<T>;
	}

与交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型。

	type LinkedList<T> = T & { next: LinkedList<T> };

	interface Person {
	    name: string;
	}

	var people: LinkedList<Person>;
	var s = people.name;
	var s = people.next.name;
	var s = people.next.next.name;
	var s = people.next.next.next.name;

然而，类型别名不能出现在声明右侧的任何地方。

	type Yikes = Array<Yikes>; // error

### ☛ 接口 vs. 类型别名

像我们提到的，类型别名可以像接口一样；然而，仍有一些细微差别。

其一，接口创建了一个新的名字，可以在其它任何地方使用。 类型别名并不创建新名字—比如，错误信息就不会使用别名。 在下面的示例代码里，在编译器中将鼠标悬停在 interfaced上，显示它返回的是 Interface，但悬停在 aliased上时，显示的却是对象字面量类型。

	type Alias = { num: number }
	interface Interface {
	    num: number;
	}
	declare function aliased(arg: Alias): Alias;
	declare function interfaced(arg: Interface): Interface;

另一个重要区别是类型别名不能被 extends 和 implements，也不能去 extends 和 implements 其它类型。 因为 软件中的对象应该对于扩展是开放的，但是对于修改是封闭的，你应该尽量去使用接口代替类型别名。

另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。

## String Literal Types 字符串字面量类型
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

字符串字面量类型允许你指定字符串必须的固定值。 在实际应用中，字符串字面量类型可以与联合类型，类型保护和类型别名很好的配合。 通过结合使用这些特性，你可以实现类似枚举类型的字符串。

	type Easing = "ease-in" | "ease-out" | "ease-in-out";
	class UIElement {
	    animate(dx: number, dy: number, easing: Easing) {
	        if (easing === "ease-in") {
	            // ...
	        }
	        else if (easing === "ease-out") {
	        }
	        else if (easing === "ease-in-out") {
	        }
	        else {
	            // error! should not pass null or undefined.
	        }
	    }
	}

	let button = new UIElement();
	button.animate(0, 0, "ease-in");
	button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

你只能从三种允许的字符中选择其一来做为参数传递，传入其它值则会产生错误。

	Argument of type '"uneasy"' is not assignable to parameter of type '"ease-in" | "ease-out" | "ease-in-out"'

字符串字面量类型还可以用于区分函数重载：

	function createElement(tagName: "img"): HTMLImageElement;
	function createElement(tagName: "input"): HTMLInputElement;
	// ... more overloads ...
	function createElement(tagName: string): Element {
	    // ... code goes here ...
	}

## Numeric Literal Types 数字字面量类型

TypeScript还具有数字字面量类型。

	function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
	    // ...
	}

我们很少直接这样使用，但它们可以用在缩小范围调试bug的时候：

	function foo(x: number) {
	    if (x !== 1 || x !== 2) {
	        //         ~~~~~~~
	        // Operator '!==' cannot be applied to types '1' and '2'.
	    }
	}

换句话说，当 x与 2进行比较的时候，它的值必须为 1，这就意味着上面的比较检查是非法的。


## Enum Member Types 枚举成员类型

## Discriminated Unions 可辨识联合

你可以合并单例类型，联合类型，类型保护和类型别名来创建一个叫做 可辨识联合的高级模式，它也称做 标签联合或 代数数据类型。 可辨识联合在函数式编程很有用处。 一些语言会自动地为你辨识联合；而 TypeScript 则基于已有的 JavaScript 模式。 它具有 3 个要素：

	interface Square {
	    kind: "square";
	    size: number;
	}
	interface Rectangle {
	    kind: "rectangle";
	    width: number;
	    height: number;
	}
	interface Circle {
	    kind: "circle";
	    radius: number;
	}

- 具有普通的单例类型属性 — 可辨识的特征。
- 一个类型别名包含了那些类型的联合 — 联合。
- 此属性上的类型保护。

首先我们声明了将要联合的接口。 每个接口都有 kind属性但有不同的字符串字面量类型。 kind 属性称做 可辨识的特征或 标签。 其它的属性则特定于各个接口。 注意，目前各个接口间是没有联系的。 下面我们把它们联合到一起：

	type Shape = Square | Rectangle | Circle;

现在我们使用可辨识联合:

	function area(s: Shape) {
	    switch (s.kind) {
	        case "square": return s.size * s.size;
	        case "rectangle": return s.height * s.width;
	        case "circle": return Math.PI * s.radius ** 2;
	    }
	}

完整性检查
当没有涵盖所有可辨识联合的变化时，我们想让编译器可以通知我们。 比如，如果我们添加了 Triangle 到 Shape，我们同时还需要更新 area:

	type Shape = Square | Rectangle | Circle | Triangle;
	function area(s: Shape) {
	    switch (s.kind) {
	        case "square": return s.size * s.size;
	        case "rectangle": return s.height * s.width;
	        case "circle": return Math.PI * s.radius ** 2;
	    }
	    // should error here - we didn't handle case "triangle"
	}

有两种方式可以实现。 首先是启用 --strictNullChecks并且指定一个返回值类型：

	function area(s: Shape): number { // error: returns number | undefined
	    switch (s.kind) {
	        case "square": return s.size * s.size;
	        case "rectangle": return s.height * s.width;
	        case "circle": return Math.PI * s.radius ** 2;
	    }
	}

因为 switch 没有包涵所有情况，所以 TypeScript 认为这个函数有时候会返回 undefined。 如果你明确地指定了返回值类型为 number，那么你会看到一个错误，因为实际上返回值的类型为 number 或 undefined。 然而，这种方法存在些微妙之处且 --strictNullChecks 对旧代码支持不好。

第二种方法使用 never类型，编译器用它来进行完整性检查：

	function assertNever(x: never): never {
	    throw new Error("Unexpected object: " + x);
	}
	function area(s: Shape) {
	    switch (s.kind) {
	        case "square": return s.size * s.size;
	        case "rectangle": return s.height * s.width;
	        case "circle": return Math.PI * s.radius ** 2;
	        default: return assertNever(s); // error here if there are missing cases
	    }
	}

这里， assertNever 检查 s 是否为 never 类型—即为除去所有可能情况后剩下的类型。 如果你忘记了某个 case，那么 s 将具有一个真实的类型并且你会得到一个错误。 这种方式需要你定义一个额外的函数，但是在你忘记某个 case 的时候也更加明显。


## Polymorphic this types 多态的 this 类型

多态的 this 类型表示的是某个包含类或接口的 子类型。 这被称做 F-bounded 多态性。 它能很容易的表现连贯接口间的继承，比如。 在计算器的例子里，在每个操作之后都返回 this 类型：

	class BasicCalculator {
	    public constructor(protected value: number = 0) { }
	    public currentValue(): number {
	        return this.value;
	    }
	    public add(operand: number): this {
	        this.value += operand;
	        return this;
	    }
	    public multiply(operand: number): this {
	        this.value *= operand;
	        return this;
	    }
	    // ... other operations go here ...
	}

	let v = new BasicCalculator(2)
	            .multiply(5)
	            .add(1)
	            .currentValue();

由于这个类使用了 this 类型，你可以继承它，新的类可以直接使用之前的方法，不需要做任何的改变。

	class ScientificCalculator extends BasicCalculator {
	    public constructor(value = 0) {
	        super(value);
	    }
	    public sin() {
	        this.value = Math.sin(this.value);
	        return this;
	    }
	    // ... other operations go here ...
	}

	let v = new ScientificCalculator(2)
	        .multiply(5)
	        .sin()
	        .add(1)
	        .currentValue();

如果没有 this类型， ScientificCalculator 就不能够在继承 BasicCalculator 的同时还保持接口的连贯性。 multiply 将会返回 BasicCalculator，它并没有 sin 方法。 然而，使用 this 类型，multiply 会返回 this，在这里就是 ScientificCalculator。


## Index types 索引类型

使用索引类型，编译器就能够检查使用了动态属性名的代码。 例如，一个常见的 JavaScript 模式是从对象中选取属性的子集。

	function pluck(o, names) {
	    return names.map(n => o[n]);
	}

下面是如何在 TypeScript 里使用此函数，通过 索引类型查询和索引访问操作符：

	function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
	  return names.map(n => o[n]);
	}

	interface Person {
	    name: string;
	    age: number;
	}
	let person: Person = {
	    name: 'Jarid',
	    age: 35
	};
	let strings: string[] = pluck(person, ['name']); // ok, string[]

编译器会检查 name 是否真的是 Person 的一个属性。 本例还引入了几个新的类型操作符。 首先是 keyof T， 索引类型查询操作符。 对于任何类型 T，keyof T 的结果为 T 上已知的公共属性名的联合。 例如：

	let personProps: keyof Person; // 'name' | 'age'

keyof Person 是完全可以与 'name' 或 'age' 互相替换的。 不同的是如果你添加了其它的属性到 Person，例如 address: string，那么 keyof Person 会自动变为 'name' 或 'age' 或 'address'。 你可以在像 pluck 函数这类上下文里使用 keyof，因为在使用之前你并不清楚可能出现的属性名。 但编译器会检查你是否传入了正确的属性名给 pluck：

	pluck(person, ['age', 'unknown']); // error, 'unknown' is not in 'name' | 'age'

第二个操作符是 T[K]，索引访问操作符。 在这里，类型语法反映了表达式语法。 这意味着 person['name'] 具有类型 Person['name'] — 在我们的例子里则为 string 类型。 然而，就像索引类型查询一样，你可以在普通的上下文里使用 T[K]，这正是它的强大所在。 你只要确保类型变量 K extends keyof T 就可以了。 例如下面 getProperty 函数的例子：

	function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
	    return o[name]; // o[name] is of type T[K]
	}

getProperty里的 o: T 和 name: K，意味着 o[name]: T[K]。 当你返回 T[K]的结果，编译器会实例化键的真实类型，因此 getProperty的返回值类型会随着你需要的属性改变。

	let name: string = getProperty(person, 'name');
	let age: number = getProperty(person, 'age');
	let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'

索引类型和字符串索引签名
keyof 和 T[K] 与字符串索引签名进行交互。 如果你有一个带有字符串索引签名的类型，那么 keyof T 会是 string。 并且 T[string] 为索引签名的类型：

	interface Map<T> {
	    [key: string]: T;
	}
	let keys: keyof Map<number>; // string
	let value: Map<number>['foo']; // number

应用示范：

	interface StringArray {
	  [index: number]: string;
	}

	interface Person {
	    name: string;
	    age: number;
	    [propName: string]: string | number;
	}
	let person: Person = {
	    name: 'Jarid',
	    age: 35,
	    title: "Dr."
	};
	console.log(person);


多层级类型嵌套：

	type EventMap = {
	    [type: string]: {[event: string]: ()=>void};
	}

	interface EventMap {
	    [type: string]: {[event: string]: ()=>void};
	}


	let events: EventMap = {
	    "on": {"click": ()=>console.log("Clicked")}
	};
	events['on']['click']();


## Mapped Types(keyof) 映射类型

一个常见的任务是将一个已知的类型每个属性都变为可选的：

	interface PersonPartial {
	    name?: string;
	    age?: number;
	}

或者我们想要一个只读版本：

	interface PersonReadonly {
	    readonly name: string;
	    readonly age: number;
	}

这在 JavaScript 里经常出现，TypeScript 提供了从旧类型中创建新类型的一种方式 — 映射类型。 在映射类型里，新类型以相同的形式去转换旧类型里每个属性。 例如，你可以令每个属性成为 readonly 类型或可选的。 下面是一些例子：

	type Readonly<T> = {
	    readonly [P in keyof T]: T[P];
	}
	type Partial<T> = {
	    [P in keyof T]?: T[P];
	}

像下面这样使用：

	type PersonPartial = Partial<Person>;
	type ReadonlyPerson = Readonly<Person>;

下面来看看简化的映射类型和它的组成部分：

	type Keys = 'option1' | 'option2';
	type Flags = { [K in Keys]: boolean };

它的语法与索引签名的语法类型，内部使用了 for .. in。 具有三个部分：

- 类型变量 K，它会依次绑定到每个属性。
- 字符串字面量联合的 Keys，它包含了要迭代的属性名的集合。
- 属性的结果类型。

在个简单的例子里， Keys 是硬编码的的属性名列表并且属性类型永远是 boolean，因此这个映射类型等同于：

	type Flags = {
	    option1: boolean;
	    option2: boolean;
	}

在真正的应用里，可能不同于上面的 Readonly 或 Partial。 它们会基于一些已存在的类型，且按照一定的方式转换字段。 这就是 keyof 和索引访问类型要做的事情：

	type NullablePerson = { [P in keyof Person]: Person[P] | null }
	type PartialPerson = { [P in keyof Person]?: Person[P] }

但它更有用的地方是可以有一些通用版本。

	type Nullable<T> = { [P in keyof T]: T[P] | null }
	type Partial<T> = { [P in keyof T]?: T[P] }

在这些例子里，属性列表是 keyof T 且结果类型是 T[P] 的变体。 这是使用通用映射类型的一个好模版。 因为这类转换是 同态的，映射只作用于 T 的属性而没有其它的。 编译器知道在添加任何新属性之前可以拷贝所有存在的属性修饰符。 例如，假设 Person.name 是只读的，那么 `Partial<Person>.name` 也将是只读的且为可选的。

下面是另一个例子，T[P] 被包装在 `Proxy<T>` 类里：

	type Proxy<T> = {
	    get(): T;
	    set(value: T): void;
	}
	type Proxify<T> = {
	    [P in keyof T]: Proxy<T[P]>;
	}
	function proxify<T>(o: T): Proxify<T> {
	   // ... wrap proxies ...
	}
	let proxyProps = proxify(props);

注意 `Readonly<T>` 和 `Partial<T>` 用处不小，因此它们与 Pick 和 Record 一同被包含进了 TypeScript 的标准库里：

	type Pick<T, K extends keyof T> = {
	    [P in K]: T[P];
	}
	type Record<K extends string, T> = {
	    [P in K]: T;
	}

Readonly， Partial 和 Pick 是同态的，但 Record 不是。 因为 Record 并不需要输入类型来拷贝属性，所以它不属于同态：

	type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>

非同态类型本质上会创建新的属性，因此它们不会从它处拷贝属性修饰符。

由映射类型进行推断
现在你了解了如何包装一个类型的属性，那么接下来就是如何拆包。 其实这也非常容易：

	function unproxify<T>(t: Proxify<T>): T {
	    let result = {} as T;
	    for (const k in t) {
	        result[k] = t[k].get();
	    }
	    return result;
	}

	let originalProps = unproxify(proxyProps);

注意这个拆包推断只适用于同态的映射类型。 如果映射类型不是同态的，那么需要给拆包函数一个明确的类型参数。


## Conditional Types - extends 条件类型
1. https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types
2. https://typescript-play.js.org/#example/conditional-types
3. https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

根据条件选择类型定义：

	T extends U ? X : Y

含义：当 T 是 U 的扩展类型，即，T 可以给赋值给 U，那么条件类型得到 X 否则得到 Y 类型。

条件类型示例：

	type TypeName<T> = T extends string
	  ? "string"
	  : T extends number
	  ? "number"
	  : T extends boolean
	  ? "boolean"
	  : T extends undefined
	  ? "undefined"
	  : T extends Function
	  ? "function"
	  : "object";

	type T0 = TypeName<string>;		//   ^ = type T0 = "string"
	type T1 = TypeName<"a">;		//   ^ = type T1 = "string"
	type T2 = TypeName<true>;		//   ^ = type T2 = "boolean"
	type T3 = TypeName<() => void>;	//   ^ = type T3 = "function"
	type T4 = TypeName<string[]>;	//   ^ = type T4 = "object"

以下示范如何将 getProperty 或 setProperty 的参数 key 约束为 obj 的属性字段以保证安全访问：

	function getProperty<T, K extends keyof T>(obj: T, key: K) {
	  return obj[key]; // Inferred type is T[K]
	}

	function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
	  obj[key] = value;
	}

	let x = { foo: 10, bar: "hello!" };

	let foo = getProperty(x, "foo"); // number
	let bar = getProperty(x, "bar"); // string

	let oops = getProperty(x, "wargarbl"); // Error! "wargarbl" is not "foo" | "bar"

	setProperty(x, "foo", "string"); // Error!, string expected number


As an example of some types that are immediately resolved, we can take a look at the following example:

	declare function f<T extends boolean>(x: T): T extends true ? string : number;

	// Type is 'string | number'
	let x = f(Math.random() < 0.5);
	//  ^ = let x: string | number

But as an example of a place where conditional types are deferred - where they stick around instead of picking a branch - would be in the following:

	interface Foo {
	  propA: boolean;
	  propB: boolean;
	}

	declare function f<T>(x: T): T extends Foo ? string : number;

	function foo<U>(x: U) {
	  // Has type 'U extends Foo ? string : number'
	  let a = f(x);

	  // This assignment is allowed though!
	  let b: string | number = a;
	}


分布条件类型 Distributive conditional types，简单来说，给泛型能数 T 传入一个联合类型，则这个类型表达式会被展开：

	type TypeName<T> = T extends U ? X : Y;

	type exp = TypeName<A | B | C>;
	type exp = (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)


Example

	type T5 = TypeName<string | (() => void)>;
	//   ^ = type T5 = "string" | "function"
	type T6 = TypeName<string | string[] | undefined>;
	//   ^ = type T6 = "string" | "undefined" | "object"
	type T7 = TypeName<string[] | number[]>;
	//   ^ = type T7 = "object"


In instantiations of a distributive conditional type T extends U ? X : Y, references to T within the conditional type are resolved to individual constituents of the union type (i.e. T refers to the individual constituents after the conditional type is distributed over the union type). Furthermore, references to T within X have an additional type parameter constraint U (i.e. T is considered assignable to U within X).

Example

	type BoxedValue<T> = { value: T };
	type BoxedArray<T> = { array: T[] };
	type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

	type T1 = Boxed<string>;
	//   ^ = type T1 = {
	//       value: string;
	//   }
	type T2 = Boxed<number[]>;
	//   ^ = type T2 = {
	//       array: number[];
	//   }
	type T3 = Boxed<string | number[]>;
	//   ^ = type T3 = BoxedValue | BoxedArray


Notice that T has the additional constraint any[] within the true branch of Boxed<T> and it is therefore possible to refer to the element type of the array as T[number]. Also, notice how the conditional type is distributed over the union type in the last example.

The distributive property of conditional types can conveniently be used to filter union types:

	// Remove types from T that are assignable to U
	type Diff<T, U> = T extends U ? never : T;
	// Remove types from T that are not assignable to U
	type Filter<T, U> = T extends U ? T : never;

	type T1 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;
	//   ^ = type T1 = "b" | "d"
	type T2 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"
	//   ^ = type T2 = "a" | "c"
	type T3 = Diff<string | number | (() => void), Function>; // string | number
	//   ^ = type T3 = string | number
	type T4 = Filter<string | number | (() => void), Function>; // () => void
	//   ^ = type T4 = () => void

	// Remove null and undefined from T
	type NotNullable<T> = Diff<T, null | undefined>;

	type T5 = NotNullable<string | number | undefined>;
	//   ^ = type T5 = string | number
	type T6 = NotNullable<string | string[] | null | undefined>;
	//   ^ = type T6 = string | string[]

	function f1<T>(x: T, y: NotNullable<T>) {
	  x = y;
	  y = x;
	Type 'T' is not assignable to type 'Diff<T, null | undefined>'.
	}

	function f2<T extends string | undefined>(x: T, y: NotNullable<T>) {
	  x = y;
	  y = x;
	Type 'T' is not assignable to type 'Diff<T, null | undefined>'.
	  Type 'string | undefined' is not assignable to type 'Diff<T, null | undefined>'.
	    Type 'undefined' is not assignable to type 'Diff<T, null | undefined>'.
	  let s1: string = x;
	Type 'T' is not assignable to type 'string'.
	  Type 'string | undefined' is not assignable to type 'string'.
	    Type 'undefined' is not assignable to type 'string'.
	  let s2: string = y;
	}

Conditional types are particularly useful when combined with mapped types:

	type FunctionPropertyNames<T> = {
	  [K in keyof T]: T[K] extends Function ? K : never;
	}[keyof T];
	type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

	type NonFunctionPropertyNames<T> = {
	  [K in keyof T]: T[K] extends Function ? never : K;
	}[keyof T];
	type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

	interface Part {
	  id: number;
	  name: string;
	  subparts: Part[];
	  updatePart(newName: string): void;
	}

	type T1 = FunctionPropertyNames<Part>;
	//   ^ = type T1 = "updatePart"
	type T2 = NonFunctionPropertyNames<Part>;
	//   ^ = type T2 = "id" | "name" | "subparts"
	type T3 = FunctionProperties<Part>;
	//   ^ = type T3 = {
	//       updatePart: (newName: string) => void;
	//   }
	type T4 = NonFunctionProperties<Part>;
	//   ^ = type T4 = {
	//       id: number;
	//       name: string;
	//       subparts: Part[];
	//   }

Similar to union and intersection types, conditional types are not permitted to reference themselves recursively. For example the following is an error.

Example

	type ElementType<T> = T extends any[] ? ElementType<T[number]> : T; // Error

Type inference in conditional types

Within the extends clause of a conditional type, it is now possible to have infer declarations that introduce a type variable to be inferred. Such inferred type variables may be referenced in the true branch of the conditional type. It is possible to have multiple infer locations for the same type variable.

For example, the following extracts the return type of a function type:

	type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

Conditional types can be nested to form a sequence of pattern matches that are evaluated in order:

	type Unpacked<T> = T extends (infer U)[]
	  ? U
	  : T extends (...args: any[]) => infer U
	  ? U
	  : T extends Promise<infer U>
	  ? U
	  : T;

	type T0 = Unpacked<string>;
	//   ^ = type T0 = string
	type T1 = Unpacked<string[]>;
	//   ^ = type T1 = string
	type T2 = Unpacked<() => string>;
	//   ^ = type T2 = string
	type T3 = Unpacked<Promise<string>>;
	//   ^ = type T3 = string
	type T4 = Unpacked<Promise<string>[]>;
	//   ^ = type T4 = Promise
	type T5 = Unpacked<Unpacked<Promise<string>[]>>;
	//   ^ = type T5 = string

The following example demonstrates how multiple candidates for the same type variable in co-variant positions causes a union type to be inferred:

	type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;

	type T1 = Foo<{ a: string; b: string }>;
	//   ^ = type T1 = string
	type T2 = Foo<{ a: string; b: number }>;
	//   ^ = type T2 = string | number

Likewise, multiple candidates for the same type variable in contra-variant positions causes an intersection type to be inferred:

	type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
	  ? U
	  : never;

	type T1 = Bar<{ a: (x: string) => void; b: (x: string) => void }>;
	//   ^ = type T1 = string
	type T2 = Bar<{ a: (x: string) => void; b: (x: number) => void }>;
	//   ^ = type T2 = never

When inferring from a type with multiple call signatures (such as the type of an overloaded function), inferences are made from the last signature (which, presumably, is the most permissive catch-all case). It is not possible to perform overload resolution based on a list of argument types.

	declare function foo(x: string): number;
	declare function foo(x: number): string;
	declare function foo(x: string | number): string | number;

	type T1 = ReturnType<typeof foo>;
	//   ^ = type T1 = string | number

It is not possible to use infer declarations in constraint clauses for regular type parameters:

	type ReturnedType<T extends (...args: any[]) => infer R> = R;
	'infer' declarations are only permitted in the 'extends' clause of a conditional type.
	Cannot find name 'R'.
	
However, much the same effect can be obtained by erasing the type variables in the constraint and instead specifying a conditional type:

	type AnyFunction = (...args: any[]) => any;
	type ReturnType<T extends AnyFunction> = T extends (...args: any[]) => infer R
	  ? R
	  : any;

TypeScript 2.8 在 lib.d.ts 里增加了一些预定义的有条件类型：

	Exclude<T, U> -- 从 T 中剔除可以赋值给 U 的类型。
	Extract<T, U> -- 提取 T 中可以赋值给 U 的类型。
	NonNullable<T> -- 从 T 中剔除 null 和 undefined。
	ReturnType<T> -- 获取函数返回值类型。
	InstanceType<T> -- 获取构造函数类型的实例类型。

示例

	type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
	type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

	type T02 = Exclude<string | number | (() => void), Function>;  // string | number
	type T03 = Extract<string | number | (() => void), Function>;  // () => void

	type T04 = NonNullable<string | number | undefined>;  // string | number
	type T05 = NonNullable<(() => string) | string[] | null | undefined>;  // (() => string) | string[]

	function f1(s: string) {
	    return { a: 1, b: s };
	}

	class C {
	    x = 0;
	    y = 0;
	}

	type T10 = ReturnType<() => string>;  // string
	type T11 = ReturnType<(s: string) => void>;  // void
	type T12 = ReturnType<(<T>() => T)>;  // {}
	type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
	type T14 = ReturnType<typeof f1>;  // { a: number, b: string }
	type T15 = ReturnType<any>;  // any
	type T16 = ReturnType<never>;  // any
	type T17 = ReturnType<string>;  // Error
	type T18 = ReturnType<Function>;  // Error

	type T20 = InstanceType<typeof C>;  // C
	type T21 = InstanceType<any>;  // any
	type T22 = InstanceType<never>;  // any
	type T23 = InstanceType<string>;  // Error
	type T24 = InstanceType<Function>;  // Error

注意：Exclude 类型是建议的 Diff 类型的一种实现。我们使用 Exclude 这个名字是为了避免破坏已经定义了 Diff 的代码，并且我们感觉这个名字能更好地表达类型的语义。我们没有增加 Omit<T, K> 类型，因为它可以很容易的用 `Pick<T, Exclude<keyof T, K>>` 来表示。

## distributive conditional type 条件分发
1. https://juejin.cn/post/6985463429502877726
2. https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
3. https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

TS 大多数高级类型都是基于条件类型，分发的概念也和 Conditional Types 息息相关，所以先来看看所谓的 Conditional Types 究竟是什么。

```js
type isString<T> = T extends string ? true : false;

let a: isString<'abc'>; // a 的类型为 true
let b: isString<123>;  // b 的类型为 false

console.log({a: typeof a,b: typeof b}); // all undefined
```

所谓条件类型就是对类型进行逻辑条件操作后得到的类型，例中代码使用了三元表达式来返回类型信息。

注意：代码中 typeof 关键字在运行时获取到的是变量所赋值的类型，因为没有初始化以及赋值，所以得到结果是 undefined。

TypeScript 扩展了 typeof 运算符，你可以在类型上下文中使用它来引用变量或属性的类型，即引用其它类型来声明变量。

```js
class Lion  { meow() { return "meow..."}; }
class Shark { }
class Tiger { meow() { return "meow..."}; }
class Zebra { }

type Animal = Lion | Zebra | Tiger | Shark

type ExtractCat<A> = A extends { meow(): void } ? A : never

type Cat = ExtractCat<Animal> // Cat => Lion | Tiger

let kitten: Cat = new Tiger();
console.log(kitten.meow());
```

注意代码中的 Cat 类型，它经过 ExtractCat 将 Animal 中所以满足条件的类型过滤出来，Cat 即为所有猫科动物类型定义。

TypeScript 这种条件类型的用法被称为分发条件类型（distributive conditional type），将一系列类型（联合类型）按条件类型定义递归处理。

这种“分发”，也就是联合类型以递归方式展开，但是这是有限制的：只发生在 extends 关键字左侧是普通类型变量的时候。

通过 Pick Exclude keyof 等等类型运算操作，可以将以下示例代码 Action 类型中的 type 和其它参数字段进行分离，方便 dispatch() 方法使用。

类型分发的示例：

```js
type Action = { type:"INIT" } | { type:"SYNC" } | { type:"LOGIN", email:string }
type ActionType = Action['type']
type ActionArgs<A,T> = A extends { type:T } ? Pick<A, Exclude<keyof A, "type">> : never

type ExtractSimpleActionType<T> = Exclude<keyof Action, "type"> extends never ? Action["type"] : never
type SimpleActionType = ExtractSimpleActionType<Action>

// declare function dispatch<T extends ActionType>(type:T, args:ActionArgs<Action,T>): void

function dispatch (type:SimpleActionType): void
function dispatch (type:ActionType, args:ActionArgs<Action,ActionType>): void
function dispatch (type:ActionType, args?:ActionArgs<Action,ActionType>): void {
    console.log({type, args})
}

let a: ActionArgs<Action,"LOGIN"> = { email:"x@studio.com" }
dispatch("LOGIN", a)
dispatch("INIT")
```


## covariance & contravariance 协变与逆变
TS中各种高级语法 https://cloud.tencent.com/developer/article/1986722

逆变与协变的含义：随着某一个量的变化，随之一致变化的即为**协变** covariance，随之相反变化的即为**逆变** contravariance。

维基百科对协变和逆变的概念解释：

1. Covariant：它保持了子类型序关系≦。该序关系是：子类型≦基类型。
2. Contravariant：它逆转了子类型序关系。

在编程领域中，协变与逆变可以通过子类型可以隐性的转换为父类型这个过程来理解。比如，*int* 和 *float* 两个类型的关系可以写成这样：int ≦ float，也就是说 int 是 float 的子类型。按照上面的原理来说，就是 int 可以转换成 float 类型，比如 int 3 可以默认转化为 float 3.0，但是 float 3.14 默认转换成 int 3 就会丢失精度。所以说 int 可以是 float 类型，但是 float 不能是 int 类型。

绝大部分的语言允许协变，也就是允许子类型默认转换为父类型，逆变一般是不被允许的（除了函数的参数）。

```js
let a!: { a: string; b: number };
let b!: { a: string };
b = a


let fn1!: (a: string, b: number) => void;
let fn2!: (a: string, b: number, c: boolean) => void;

fn2 = fn1; // covariant
fn1 = fn2; // Error: 不能将fn2的类型赋值给fn1


let fn1!: (a: string, b: number) => string;
let fn2!: (a: string, b: number) => string | number | boolean;

fn2 = fn1; // covariant
fn1 = fn2; // Error: 不可以将 string|number|boolean 赋给 string 类型
```

处理函数参数列表协变时，参数兼容即可以赋值，多传入的数据可以不使用，但是反过来，缺少参数就不行。

处理函数返回值和变量赋值过程相同，兼容类型即可以赋值。



# ⚑ Functions
- https://www.typescriptlang.org/docs/handbook/functions.html

函数是最基本的代码结构，由函数名和花括号代码块构成，代码块内部和外部分别就是两个作用域 Scopes：

	// Named function
	function add(x, y) {
	  return x + y;
	}

	// Anonymous function
	let myAdd = function (x, y) {
	  return x + y;
	};

函数内部作用域代码可以直接访问外部作用域的变量，反过来却不行。可以通过闭包来暴露函数，给外部作用域提供访问内部作用域的变量。

	let z = 100;

	function addToZ(x, y) {
	  return x + y + z;
	}

	function closureDemo(){
		let x = "xyz";
		return () => x;
	}
	let closure = closureDemo();
	console.log(closure());


那么对于以下两个函数：

	function add(x: number, y: number): number {
	  return x + y;
	}

	let myAdd = function (x: number, y: number): number {
	  return x + y;
	};

TypeScript 给函数添加类型定义后，其相关的语法含义会更清晰，只是阅读会所混乱，其实和变量类型定义格式是一致的，以下两种方式定义的函数类型等价：

	let myAdd: (x: number, y: number) => number = function (
	  x: number,
	  y: number
	): number {
	  return x + y;
	};


	let myAdd: (baseValue: number, increment: number) => number = function (
	  x: number,
	  y: number
	): number {
	  return x + y;
	};

## Inferring the types

当类型信息足够时，TypeScript 可以推断出类型 Inferring the types，如 myAdd2 后面的 function 参数进行了类型推断：

	// The parameters 'x' and 'y' have the type number
	let myAdd = function (x: number, y: number): number {
	  return x + y;
	};

	// myAdd has the full function type
	let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
	  return x + y;
	};

## Optional and Default Parameters

可选参数与默认参数，Optional and Default Parameters。通常参数列表指定的参数是 Required 状态，一定要传入的：

	function buildName(firstName: string, lastName: string) {
	  return firstName + " " + lastName;
	}

	let result1 = buildName("Bob"); // error, too few parameters
	Expected 2 arguments, but got 1.
	let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
	Expected 2 arguments, but got 3.
	let result3 = buildName("Bob", "Adams"); // ah, just right


	function buildNameOpt(firstName: string, lastName?: string) {
	  if (lastName) return firstName + " " + lastName;
	  else return firstName;
	}

	let result1 = buildNameOpt("Bob"); // works correctly now
	let result2 = buildNameOpt("Bob", "Adams", "Sr."); // error, too many parameters
	Expected 1-2 arguments, but got 3.
	let result3 = buildNameOpt("Bob", "Adams"); // ah, just right


	function buildNameDef(firstName: string, lastName = "Smith") {
	  return firstName + " " + lastName;
	}

	let result1 = buildNameDef("Bob"); // works correctly now, returns "Bob Smith"
	let result2 = buildNameDef("Bob", undefined); // still works, also returns "Bob Smith"
	let result3 = buildNameDef("Bob", "Adams", "Sr."); // error, too many parameters
	Expected 1-2 arguments, but got 3.
	let result4 = buildNameDef("Bob", "Adams"); // ah, just right

## Rest Parameters/Spread expressions
- Add spread/rest higher-order types operator #10727 https://github.com/microsoft/TypeScript/issues/10727

剩余参数 Rest Parameters 可以用一个参数名来接收传入函数的多个变量。

	function buildName(firstName: string, ...restOfName: string[]) {
	  return firstName + " " + restOfName.join(" ");
	}

	// employeeName will be "Joseph Samuel Lucas MacKinzie"
	let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

	let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

示范 Object.assign() 浅拷贝：

	interface Object{
	  assign: (a:{}, b:{}, ...rest:object[])=>any
	}
	let ori = {"item":{"array":[{"a":"abs", "x":"xor"}]}};
	
	let deepCopy = JSON.parse(JSON.stringify(ori));
	let shadowCopy = Object.assign({}, ori);
	shadowCopy.item.array[0].a = "Apply";
	console.log(ori.item.array);

一个糟糕的 TypeScript 写法：

	cpy = <any>Object.assign({}, ori);


## this & arrow functions

一般函数调用时，this 会关联到主调代码所控制的作用对象上，而使用箭头函数后可以将 this 绑定为箭头函数代码所在的 this 对象。

	let deck = {
	  suits: ["hearts", "spades", "clubs", "diamonds"],
	  cards: Array(52),
	  createCardPicker: function () {
	    return function () {
	      let pickedCard = Math.floor(Math.random() * 52);
	      let pickedSuit = Math.floor(pickedCard / 13);

	      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
	    };
	  },
	};

	let cardPicker = deck.createCardPicker();
	let pickedCard = cardPicker();

	alert("card: " + pickedCard.card + " of " + pickedCard.suit);

上面的代码中，如果在浏览器中执行 cardPicker() 将会使函数内的 this 指向 window 对象，但是当你使用箭头函数后，这个 this 将绑定为 deck 对象：

	  createCardPicker: function () {
	    return () => {
	      let pickedCard = Math.floor(Math.random() * 52);
	      let pickedSuit = Math.floor(pickedCard / 13);

	      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
	    };
	  },

这里还有一个问题，就是 this 的类型为 any。TypeScript 提供了 this 参数来解决这个问题，这是一个假参数，它要出现在参数列表的第一个位置：

	function f(this: void) {
	  // make sure `this` is unusable in this standalone function
	}

添加类型接口后的代码：

	interface Card {
	  suit: string;
	  card: number;
	}

	interface Deck {
	  suits: string[];
	  cards: number[];
	  createCardPicker(this: Deck): () => Card;
	}

	let deck: Deck = {
	  suits: ["hearts", "spades", "clubs", "diamonds"],
	  cards: Array(52),
	  // NOTE: The function now explicitly specifies that its callee must be of type Deck
	  createCardPicker: function (this: Deck) {
	    return () => {
	      let pickedCard = Math.floor(Math.random() * 52);
	      let pickedSuit = Math.floor(pickedCard / 13);

	      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
	    };
	  },
	};

	let cardPicker = deck.createCardPicker();
	let pickedCard = cardPicker();

	console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

## this parameters in callbacks

复杂一点，定义一个参数 callback 为函数的函数：

	const callbackWithIndex = (callback: (i: number) => void) => {
	  callback(i);
	};

上面，演示了一个匿名函数的定义，其参数 callback 是一个回调函数，(i: number) => void) 就是一个函数类型的定义，接收一个数值参数，无返回值。

	import Media from "react-media";

	function Mobile({ children }: { children: any }) {
	    // return Media({query: "(max-width:800px)", children});
	    return <Media query="(max-width:800px)" children={children} />;
	}

上面演示了，结构化赋值参数 { children } 的类型定义，即类型为 { children: any }。

使用接口定义一个 UI 元素：

	interface UIElement {
	  addClickListener(onclick: (this: void, e: Event) => void): void;
	}

注意 this: void 表示函数内不可使用 this 对象，但通过箭头函数使用外部的 this 对象。

	class Handler {
	  info: string;
	  onClickGood(this: void, e: Event) {
	    // can't use `this` here because it's of type void!
	    console.log("clicked!");
	  }
	}

	let h = new Handler();
	uiElement.addClickListener(h.onClickGood);

## Overloads 重载
https://www.typescriptlang.org/docs/handbook/2/functions.html

有些函数可以接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为。这种根据参数类型不同，执行不同逻辑的行为，称为函数重载（function overload）。

函数签名由函数的名称、参数列表以及返回值等信息构成。函数签名不同，函数会做出不同的处理。重载形式可以有多个，函数实现只有一个。为了处理参数列表中的参数数量差异，在实现函数时，参数可能需要使用可选参数声明形式。

Overload Signatures and the Implementation Signature

如果重复实现同名函数，或者多个函数笔一致，重载使用不规范，TypeScript 编译器会报告 "duplicate function implementation.ts(2393)" 错误，关键是检查所有同名函数的定义，并确保它们的名称相同、参数列表和返回值类型有差异。

重载声明的排序很重要，因为 TypeScript 是按照顺序进行检查的，一旦发现符合某个类型声明，就不再往下检查了，所以类型最宽的声明应该放在最后面，防止覆盖其他类型声明。


JavaScript 作为一个非常动态的语言，它的函数可以返回任意类型的数据：

	let suits = ["hearts", "spades", "clubs", "diamonds"];

	function pickCard(x: any): any {
	  // Check to see if we're working with an object/array
	  // if so, they gave us the deck and we'll pick the card
	  if (typeof x == "object") {
	    let pickedCard = Math.floor(Math.random() * x.length);
	    return pickedCard;
	  }
	  // Otherwise just let them pick the card
	  else if (typeof x == "number") {
	    let pickedSuit = Math.floor(x % 3);
	    return { suit: suits[pickedSuit], card: x % 13 };
	  }
	}

	let myDeck = [
	  { suit: "diamonds", card: 2 },
	  { suit: "spades", card: 10 },
	  { suit: "hearts", card: 4 },
	];

	let pickedCard1 = myDeck[pickCard(myDeck)];
	alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

	let pickedCard2 = pickCard(15);
	alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

TypeScript 提供了重载类型，只需给函数定义不同类型的列表：

	let suits = ["hearts", "spades", "clubs", "diamonds"];

	function pickCard(x: { suit: string; card: number }[]): number;
	function pickCard(x: number): { suit: string; card: number };
	function pickCard(x: any): any {
	  // Check to see if we're working with an object/array
	  // if so, they gave us the deck and we'll pick the card
	  if (typeof x == "object") {
	    let pickedCard = Math.floor(Math.random() * x.length);
	    return pickedCard;
	  }
	  // Otherwise just let them pick the card
	  else if (typeof x == "number") {
	    let pickedSuit = Math.floor(x / 13);
	    return { suit: suits[pickedSuit], card: x % 13 };
	  }
	}

	let myDeck = [
	  { suit: "diamonds", card: 2 },
	  { suit: "spades", card: 10 },
	  { suit: "hearts", card: 4 },
	];

	let pickedCard1 = myDeck[pickCard(myDeck)];
	alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

	let pickedCard2 = pickCard(15);
	alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


# ⚑ Number + Number 不可相加？
- https://github.com/Microsoft/TypeScript/issues/2031#issuecomment-74329927

给定 index.ts:

	var a: Number = new Number(1);
	var b: Number = new Number(2);
	var c: number = 3;
	console.log(a+b);
	console.log(b+c);

编译出错：

	index.ts(4,13): error TS2365: Operator '+' cannot be applied to types 'Number' and 'Number'.
	index.ts(5,13): error TS2365: Operator '+' cannot be applied to types 'Number' and 'number'.

如果禁用 --noEmitOnError 编译器生成 index.js 并通过:

	var a = new Number(1);
	var b = new Number(2);
	var c = 3;
	console.log(a + b);
	console.log(b + c);

在 TS 规范中 Section 4.15.2 定义两元去处符 + 要求操作数匀为 Number 元类型，或者 enum 类型，或者至少有一个 Any 和 String：

	var n: Number = { 
	    toFixed(x?: number) { return ''},
	    toExponential(x?: number) { return ''},
	    toPrecision(x?: number) { return ''} 
	}

	var r = n + 3;
	console.log(r); // r is ?


# ⚑ Iterators and Generators 迭代器和生成器
- https://www.tslang.cn/docs/handbook/iterators-and-generators.html
- https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
- https://basarat.gitbook.io/typescript/future-javascript/generators

## Iterable 可迭代性

当一个对象实现了 Symbol.iterator 属性时，我们认为它是可迭代的。 一些内置的类型如 Array，Map，Set，String，Int32Array，Uint32Array 等都已经实现了各自的 Symbol.iterator。 对象上的 Symbol.iterator 函数负责返回供迭代的值。

`for..of` 语句会遍历可迭代的对象，调用对象上的 Symbol.iterator 方法：

	let someArray = [1, "string", false];

	for (let entry of someArray) {
	    console.log(entry); // 1, "string", false
	}

`for..of` 和 `for..in` 语句均可迭代一个列表；但是用于迭代的值却不同，`for..in` 迭代的是对象的键的列表 keys ，而`for..of` 则迭代对象的键对应的值 values：

	let list = [4, 5, 6];

	for (let i in list) {
	    console.log(i); // "0", "1", "2",
	}

	for (let i of list) {
	    console.log(i); // "4", "5", "6"
	}

另一个区别是 `for..in` 可以操作任何对象；它提供了查看对象属性的一种方法。 但是 `for..of`关注于迭代对象的值。内置对象 Map 和 Set 已经实现了 Symbol.iterator 方法，让我们可以访问它们保存的值。

	let pets = new Set(["Cat", "Dog", "Hamster"]);
	pets["species"] = "mammals";

	for (let pet in pets) {
	    console.log(pet); // "species"
	}

	for (let pet of pets) {
	    console.log(pet); // "Cat", "Dog", "Hamster"
	}

代码生成目标为 ES5 和 ES3，迭代器只允许在 Array 类型上使用。 在非数组值上使用 `for..of` 语句会得到一个错误，就算这些非数组值已经实现了 Symbol.iterator 属性。

编译器会生成一个简单的 for 循环做为 `for..of` 循环，比如：

	let numbers = [1, 2, 3];
	for (let num of numbers) {
	    console.log(num);
	}

生成的代码为：

	var numbers = [1, 2, 3];
	for (var _i = 0; _i < numbers.length; _i++) {
	    var num = numbers[_i];
	    console.log(num);
	}

当目标为兼容 ECMAScipt 2015 的引擎时，编译器会生成相应引擎的 `for..of` 内置迭代器实现方式。


## ES6 generators

TypeScript 1.6 增加支持 ES6 Generators 生成器 ，生成器也像函數一樣有返回類型標注。

	function *g(): Iterable<string> {
	    for (var i = 0; i < 100; i++) {
	        yield ""; // string is assignable to string
	    }
	    // otherStringGenerator must be iterable and element type assignable to string
	    yield * otherStringGenerator(); 
	}

如果沒有標注類型就從 yield 語句中進行類型推導：

	function *g() {
	    for (var i = 0; i < 100; i++) {
	        yield ""; // infer string
	    }
	    yield * otherStringGenerator(); // infer element type of otherStringGenerator
	}


## Async Iteration

TypeScript 2.3 adds support for the async iterators and generators as described by the current [TC39 proposal](https://github.com/tc39/proposal-async-iteration).

### ☛ Async iterators

The Async Iteration introduces an `AsyncIterator`, which is similar to `Iterator`.
The difference lies in the fact that the `next`, `return`, and `throw` methods of an `AsyncIterator` return a `Promise` for the iteration result, rather than the result itself.
This allows the caller to enlist in an asynchronous notification for the time at which the `AsyncIterator` has advanced to the point of yielding a value.
An `AsyncIterator` has the following shape:

	interface AsyncIterator<T> {
	  next(value?: any): Promise<IteratorResult<T>>;
	  return?(value?: any): Promise<IteratorResult<T>>;
	  throw?(e?: any): Promise<IteratorResult<T>>;
	}

An object that supports async iteration is said to be "iterable" if it has a `Symbol.asyncIterator` method that returns an `AsyncIterator` object.

### ☛ Async Generators

The [Async Iteration proposal](https://github.com/tc39/proposal-async-iteration) introduces "Async Generators", which are async functions that also can be used to yield partial computation results.
Async Generators can also delegate calls via `yield*` to either an iterable or async iterable:

	async function* g() {
	  yield 1;
	  await sleep(100);
	  yield* [2, 3];
	  yield* (async function *() {
	    await sleep(100);
	    yield 4;
	  })();
	}

## Stricter Generators

TypeScript 3.6 introduces stricter checking for iterators and generator functions.
In earlier versions, users of generators had no way to differentiate whether a value was yielded or returned from a generator.

	function* foo() {
	    if (Math.random() < 0.5) yield 100;
	    return "Finished!"
	}

	let iter = foo();
	let curr = iter.next();
	if (curr.done) {
	    // TypeScript 3.5 and prior thought this was a 'string | number'.
	    // It should know it's 'string' since 'done' was 'true'!
	    curr.value
	}

Additionally, generators just assumed the type of `yield` was always `any`.

	function* bar() {
	    let x: { hello(): void } = yield;
	    x.hello();
	}

	let iter = bar();
	iter.next();
	iter.next(123); // oops! runtime error!

In TypeScript 3.6, the checker now knows that the correct type for `curr.value` should be `string` in our first example, and will correctly error on our call to `next()` in our last example.

This is thanks to some changes in the `Iterator` and `IteratorResult` type declarations to include a few new type parameters, and to a new type that TypeScript uses to represent generators called the `Generator` type.

The `Iterator` type now allows users to specify the yielded type, the returned type, and the type that `next` can accept.

	interface Iterator<T, TReturn = any, TNext = undefined> {
	    // Takes either 0 or 1 arguments - doesn't accept 'undefined'
	    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
	    return?(value?: TReturn): IteratorResult<T, TReturn>;
	    throw?(e?: any): IteratorResult<T, TReturn>;
	}

Building on that work, the new `Generator` type is an `Iterator` that always has both the `return` and `throw` methods present, and is also iterable.

	interface Generator<T = unknown, TReturn = any, TNext = unknown>
	        extends Iterator<T, TReturn, TNext> {
	    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
	    return(value: TReturn): IteratorResult<T, TReturn>;
	    throw(e: any): IteratorResult<T, TReturn>;
	    [Symbol.iterator](): Generator<T, TReturn, TNext>;
	}

To allow differentiation between returned values and yielded values, TypeScript 3.6 converts the `IteratorResult` type to a discriminated union type:

	type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;

	interface IteratorYieldResult<TYield> {
	    done?: false;
	    value: TYield;
	}

	interface IteratorReturnResult<TReturn> {
	    done: true;
	    value: TReturn;
	}

In short, what this means is that you'll be able to appropriately narrow down values from iterators when dealing with them directly.

To correctly represent the types that can be passed in to a generator from calls to `next()`, TypeScript 3.6 also infers certain uses of `yield` within the body of a generator function.

	function* foo() {
	    let x: string = yield;
	    console.log(x.toUpperCase());
	}

	let x = foo();
	x.next(); // first call to 'next' is always ignored
	x.next(42); // error! 'number' is not assignable to 'string'

If you'd prefer to be explicit, you can also enforce the type of values that can be returned, yielded, and evaluated from `yield` expressions using an explicit return type.
Below, `next()` can only be called with `boolean`s, and depending on the value of `done`, `value` is either a `string` or a `number`.

	/**
	 * - yields numbers
	 * - returns strings
	 * - can be passed in booleans
	 */
	function* counter(): Generator<number, string, boolean> {
	    let i = 0;
	    while (true) {
	        if (yield i++) {
	            break;
	        }
	    }
	    return "done!";
	}

	var iter = counter();
	var curr = iter.next()
	while (!curr.done) {
	    console.log(curr.value);
	    curr = iter.next(curr.value === 5)
	}
	console.log(curr.value.toUpperCase());

	// prints:
	//
	// 0
	// 1
	// 2
	// 3
	// 4
	// 5
	// DONE!

For more details on the change, [see the pull request here](https://github.com/Microsoft/TypeScript/issues/2983).



# ⚑ Decorators 装饰器
- Decorators https://www.typescriptlang.org/docs/handbook/decorators.html
- Decorators https://www.tslang.cn/docs/handbook/decorators.html


装饰器 Decorator 是 ES6 的新特性，是一种与类相关的语法，用来注释或修改类和类方法。Decorator 提案经过了大幅修改，目前还没有定案，但是在开发项目中，依旧是可以使用的。

在项目中使用装饰器，要用 Babel 来进行转换：

	npm install babel-preset-react-app @babel/core @babel/plugin-proposal-decorators

JavaScript 里的装饰器目前处在 建议征集的第二阶段，在 TypeScript 里做为一项实验性特性予以支持。若要启用实验性的装饰器特性，你必须在命令行或 tsconfig.json 里启用 experimentalDecorators 编译器选项：

命令行:

	tsc --target ES5 --experimentalDecorators

tsconfig.json:

	{
	    "compilerOptions": {
	        "target": "ES5",
	        "experimentalDecorators": true
	    }
	}


## Decorators & Factories

装饰器是一种元數據編程 Meta Programming，它能够被附加到类装饰器，方法，访问符，属性，或参数上。 装饰器利用 `@expression` 这种語法方式進行求值並返回一个函数，被装饰的對象在运行时會被调用。

在 Python 2.4 脚本編程中也增加了元编程 Meta Programming，同时它也是最简单的元编程方式，Decorator 這種元編程方式能極大簡化程序結構，是非常流行的技術。

定制一个修饰器应用到一个声明上，就得写一个装饰器工厂函数返回一个裝飾器表达式，以供装饰器在运行时调用。

	function color(value: string) {
	    return function (target) {
	        // do something with "target" and "value"...
	    }
	}

多个装饰器可以同时应用到一个声明上，书写在同一行上或在多行上都可以。

当多个装饰器应用于一个声明上，就是複合裝飾器 Decorator Composition 它们求值方式与复合函数相似。在这个模型下，当复合 f 和 g 时，复合的结果 (f ∘ g)(x) 等同于 f(g(x))。

同样的，在 TypeScript 里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：

- 由上至下依次对装饰器表达式求值。
- 求值的结果会被当作函数，由下至上依次调用。

如果我们使用装饰器工厂的话，可以通过下面的例子来观察它们求值的顺序：

	function f() {
	    console.log("f(): evaluated");
	    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
	        console.log("f(): called");
	    }
	}

	function g() {
	    console.log("g(): evaluated");
	    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
	        console.log("g(): called");
	    }
	}

	class C {
	    @f()
	    @g()
	    method() {}
	}

在控制台里会打印出如下结果，执行装饰器从下到上，即近者先行：

	f(): evaluated
	g(): evaluated
	g(): called
	f(): called

装饰器求值 Decorator Evaluation 顺序定義如下：

- `参数装饰器`，然后依次是`方法装饰器`，`访问符装饰器`，或`属性装饰器`应用到每个实例成员。
- `参数装饰器`，然后依次是`方法装饰器`，`访问符装饰器`，或`属性装饰器`应用到每个静态成员。
- `参数装饰器`应用到构造函数。
- `类装饰器`应用到类。

各种装饰器原型参考：

```ts
interface TypedPropertyDescriptor<T> {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
    value?: T;
    get?: () => T;
    set?: (value: T) => void;
}

declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
```

可以直接使用装饰器函数，而不用工厂函数包装，编译器会调用装饰器，并将参数对应传入给装饰器：

	error TS1238: Unable to resolve signature of class decorator when called as an expression.


## Class Decorators

ClassDecorator 的要点：

- 类装饰器在类声明之前紧靠着类声明，应用于类构造函数，可以用来监视，修改或替换类定义。
- 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
- 类装饰器不能用在声明文件中( .d.ts)，也不能用在任何外部上下文中比如 declare 的类。
- 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。

注意👁‍🗨  如果你要返回一个新的构造函数，你必须注意处理好原来的原型链。 在运行时的装饰器调用逻辑中 不会为你做这些。

下面是使用类装饰器 @sealed 的例子，应用在 Greeter 类：

	@sealed
	class Greeter {
	    greeting: string;
	    constructor(message: string) {
	        this.greeting = message;
	    }
	    greet() {
	        return "Hello, " + this.greeting;
	    }
	}

我们可以这样定义 @sealed 装饰器：

	function sealed(constructor: Function) {
	    Object.seal(constructor);
	    Object.seal(constructor.prototype);
	}

当 @sealed 被执行的时候，它将密封此类的构造函数和原型。
注：参考 Object.seal https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

下面是一个重载构造函数的例子。

	function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
	    return class extends constructor {
	        newProperty = "new property";
	        hello = "override";
	    }
	}

	@classDecorator
	class Greeter {
	    property = "property";
	    hello: string;
	    constructor(m: string) {
	        this.hello = m;
	    }
	}

	console.log(new Greeter("world"));

输出：

	class_1 {
	  property: 'property',
	  hello: 'override',
	  newProperty: 'new property'
	}


## Method Decorators

MethodDecorator 要点：

- 方法装饰器声明在一个方法的声明之前，紧靠着方法声明。
- 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
- 方法装饰器不能用在声明文件( .d.ts)，重载或者任何外部上下文中，比如 declare 的类。

方法装饰器表达式会在运行时当作函数被调用，传入下列 3 个参数：

- `target` 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象 Class。
- `propertyKey` 对应了成员名称字符串；
- `descriptor` 成员的属性描述符，对应成员方法的 PropertyDescriptor 对象。

如果方法装饰器返回一个值，它会被用作方法的属性描述符。

注意👁‍🗨  如果代码输出目标版本小于 ES5，属性描述符将会是 undefined。
注意👁‍🗨  如果代码输出目标版本小于 ES5 返回值会被忽略。

下面是一个方法装饰器 @enumerable 的例子，应用于 Greeter 类的方法上：

	class Greeter {
	    greeting: string;
	    constructor(message: string) {
	        this.greeting = message;
	    }

	    @enumerable(false)
	    greet() {
	        return "Hello, " + this.greeting;
	    }
	}

用下面的函数来定义 @enumerable 装饰器包装函数：

	function enumerable(value: boolean) {
	    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	        descriptor.enumerable = value;
	    };
	}

这里的 @enumerable(false) 是一个装饰器工厂。 当装饰器 @enumerable(false) 被调用时，它会修改属性描述符的 enumerable 属性。


## Accessor Decorators

AccessorDecorator 要点：

- 访问器装饰器声明在一个访问器的声明之前紧靠着 get/set 访问器函数声明。
- 访问器装饰器应用于访问器的属性描述符，并且可以用来监视，修改或替换一个访问器的定义。
- 访问器装饰器不能用在声明文件中（.d.ts），或者任何外部上下文中，比如 declar e的类。

注意  TypeScript 不允许同时装饰一个成员的 get 和 set 访问器。取而代之的是，一个成员的所有装饰的必须应用在文档顺序的第一个访问器上。这是因为，在装饰器应用于一个属性描述符时，它联合了 get 和 set 访问器，而不是分开声明的。

访问器装饰器表达式会在运行时当作函数被调用，传入下列 3 个参数：

- `target` 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
- `propertyKey` 成员的名字。
- `descriptor` 成员的属性描述符。

如果访问器装饰器返回一个值，它会被用作方法的属性描述符。

注意  如果代码输出目标版本小于 ES5，Property Descriptor 将会是 undefined。
注意  如果代码输出目标版本小于 ES5 返回值会被忽略。

下面是使用了访问器装饰器 @configurable 的例子，应用于 Point 类的成员上：

	class Point {
	    private _x: number;
	    private _y: number;
	    constructor(x: number, y: number) {
	        this._x = x;
	        this._y = y;
	    }

	    @configurable(false)
	    get x() { return this._x; }

	    @configurable(false)
	    get y() { return this._y; }
	}

我们可以通过如下函数声明来定义 @configurable 装饰器：

	function configurable(value: boolean) {
	    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	        descriptor.configurable = value;
	    };
	}

## Property Decorators

属性装饰器声明在一个属性声明之前，属性装饰器不能用在声明文件中（.d.ts），或者任何外部上下文中，比如 declare 的类里。

属性装饰器表达式会在运行时当作函数被调用，传入下列 2 个参数：

- `target` 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象，注意是原型不是实例。
- `propertyKey` 类成员的名字。
 
注意  **属性描述符不会做为参数传入属性装饰器，这与 TypeScript 是如何初始化属性装饰器的有关。 因为目前没有办法在定义一个原型对象的成员时描述一个实例属性，并且没办法监视或修改一个属性的初始化方法，返回值也会被忽略。因此，属性描述符只能用来监视类中是否声明了某个名字的属性。**

我们可以用它来记录这个属性的元数据，如下例所示：

	class Greeter {
	    @format("Hello, %s")
	    greeting: string;

	    constructor(message: string) {
	        this.greeting = message;
	    }
	    greet() {
	        let formatString = getFormat(this, "greeting");
	        return formatString.replace("%s", this.greeting);
	    }
	}

然后定义 @format 装饰器和 getFormat 函数：

	import "reflect-metadata";

	const formatMetadataKey = Symbol("format");

	function format(formatString: string) {
	    return Reflect.metadata(formatMetadataKey, formatString);
	}

	function getFormat(target: any, propertyKey: string) {
	    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
	}

这个 @format("Hello, %s") 装饰器是个装饰器工厂。 当 @format("Hello, %s") 被调用时，它添加一条这个属性的元数据，通过 reflect-metadata 库里的 Reflect.metadata 函数。 当 getFormat 被调用时，它读取格式的元数据。

注意  这个例子需要使用 reflect-metadata 库。 Relfect Metadata，简单来说，你可以通过装饰器来给类添加一些自定义的信息。然后通过反射将这些信息提取出来。当然你也可以通过反射来添加这些信息。在 ES6 的规范当中，就已经存在 Reflect API 了。简单来说这个 API 的作用就是可以实现对变量操作的函数化，也就是反射。

注意，属性装饰器和方法装饰器的签名是不同的，少了最后的 `PropertyDescriptor`:

	function f(): PropertyDecorator {
	    console.log("f(): evaluated");
	    return function (target, propertyKey: string) {
	        console.log("f(): called");
	    }
	}

如果误用，会导致：

	error TS1240: Unable to resolve signature of property decorator when called as an expression.

导致 TS1240 的问题可能是因为使用了错误的装饰器签名，如将方法装饰器用途属性装饰器。双或者 return 写成单独一行，而后装饰器函数当成一个整体，导致自动给返回语句插入了行尾的分号。


## Parameter Decorators

ParameterDecorator 要点：

- 参数装饰器声明在一个参数声明之前紧靠着参数声明。 
- 参数装饰器应用于类构造函数或方法声明。 
- 参数装饰器不能用在声明文件（.d.ts），重载或其它外部上下文，比如 declare的类里。

参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

- `target` 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
- `propertyKey` 成员的名字。
- `index` 参数在函数参数列表中的索引。

注意  参数装饰器只能用来监视一个方法的参数是否被传入。

参数装饰器的返回值会被忽略。

下例定义了参数装饰器（@required）并应用于Greeter类方法的一个参数：

	class Greeter {
	    greeting: string;

	    constructor(message: string) {
	        this.greeting = message;
	    }

	    @validate
	    greet(@required name: string) {
	        return "Hello " + name + ", " + this.greeting;
	    }
	}

然后我们使用下面的函数定义 @required 和 @validate 装饰器：

	import "reflect-metadata";

	const REQUIRED = Symbol("required");

	function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
	    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(REQUIRED, target, propertyKey) || [];
	    existingRequiredParameters.push(parameterIndex);
	    Reflect.defineMetadata(REQUIRED, existingRequiredParameters, target, propertyKey);
	}

	function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
	    let method = descriptor.value;
	    descriptor.value = function () {
	        let requiredParameters: number[] = Reflect.getOwnMetadata(REQUIRED, target, propertyName);
	        if (requiredParameters) {
	            for (let parameterIndex of requiredParameters) {
	                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
	                    throw new Error("Missing required argument.");
	                }
	            }
	        }

	        return method.apply(this, arguments);
	    }
	}

@required 装饰器添加了元数据实体把参数标记为必需的。 @validate 装饰器把 greet 方法包裹在一个函数里在调用原先的函数前验证函数参数。

注意  这个例子使用了 reflect-metadata 库。 查看 元数据了解 reflect-metadata 库的更多信息。



## Metadata 元编程
- http://blog.wolksoftware.com/the-end-of-javascript
- https://github.com/tc39/proposal-decorators
- https://www.npmjs.com/package/reflect-metadata
- http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
- JavaScript dependency inversion (DI) http://blog.wolksoftware.com/introducing-inversifyjs

一些例子使用了 reflect-metadata 库来支持实验性的 Metadata API。这个库还不是 ECMAScript 标准的一部分，是 Polyfill for Metadata Reflection API。 然而，当装饰器被 ECMAScript 官方标准采纳后，这些扩展也将被推荐给 ECMAScript 以采纳。

你可以通过 npm 安装这个库：

	npm i reflect-metadata --save

TypeScript 支持为带有装饰器的声明生成元数据。 你需要在命令行或 tsconfig.json 里启用 emitDecoratorMetadata 编译器选项。

Command Line:

	tsc --target ES5 --experimentalDecorators --emitDecoratorMetadata

tsconfig.json:

	{
	    "compilerOptions": {
	        "target": "ES5",
	        "experimentalDecorators": true,
	        "emitDecoratorMetadata": true
	    }
	}

当启用后，只要 reflect-metadata 库被引入了，设计阶段添加的类型信息可以在运行时使用。

有三个设计时元数据主键 Metadata Design Keys 可以获取相应的类型信息：

- `Type metadata` 设计时类型信息使用主键 "design:type"
- `Parameter type metadata` 设计时参数列表信息使用主键 "design:paramtypes"
- `Return type metadata` 设计时返回值类型使用主键 "design:returntype"

使用 `MethodDecorator` 结合 Reflect 可以实现提取参数列表：

```ts
interface IFoo {}
class Foo {
  public one = 'One'
  public two = 'Two'
  public three = 'Three'
  public four = 'Four'
  constructor() { }
}

let field = Object.keys(Reflect.construct(Foo, []))
let fields = Object.keys(new Foo) as Array<string>

function logParamTypes(target : any, key : string) {
  var types = Reflect.getMetadata("design:paramtypes", target, key);
  var s = types.map((a:any) => a.name).join();
  console.log(`${key} param types: ${s}`);
  // doSomething param types: String,Number,Foo,Object,Object,Function,Function
}

class Demo{
  @logParamTypes // apply parameter decorator
  doSomething(
    param1 : string,
    param2 : number,
    param3 : Foo,
    param4 : { test : string },
    param5 : IFoo,
    param6 : Function,
    param7 : (a : number) => void,
  ) : number { 
      return 1
  }
}
```

利用设计时类型信息对 get/set 功能重写，如下例所示：

	import "reflect-metadata";

	class Point {
	    x: number;
	    y: number;
	}

	class Line {
	    private _p0: Point;
	    private _p1: Point;

	    @validate
	    set p0(value: Point) { this._p0 = value; }
	    get p0() { return this._p0; }

	    @validate
	    set p1(value: Point) { this._p1 = value; }
	    get p1() { return this._p1; }
	}

	function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
	    let set = descriptor.set;
	    descriptor.set = function (value: T) {
	        let type = Reflect.getMetadata("design:type", target, propertyKey);
	        // let p = new type()
	        if (!(value instanceof type)) {
	            throw new TypeError("Invalid type.");
	        }
	        set(value);
	    }
	}

TypeScript 编译器可以通过 @Reflect.metadata 装饰器注入设计阶段的类型信息。 你可以认为它相当于下面的 TypeScript：

	class Line {
	    private _p0: Point;
	    private _p1: Point;

	    @validate
	    @Reflect.metadata("design:type", Point)
	    set p0(value: Point) { this._p0 = value; }
	    get p0() { return this._p0; }

	    @validate
	    @Reflect.metadata("design:type", Point)
	    set p1(value: Point) { this._p1 = value; }
	    get p1() { return this._p1; }
	}

回到前面的参数列表类型信息处理，TypeScript 只支持 Basic type serialization，像 IFoo 不属于基础类型，所以序列化时输出的是 `Object` 而不是 IFoo。

基础类型规则：

- number 串行化为 `Number`
- string 串行化为 `String`
- boolean 串行化为 `Boolean`
- any 串行化为 `Object`
- void serializes as `undefined`
- Array 串行化为 `Array`
- Tuple 串行化为 `Array`
- Class 串行化为类构造器模式 `[Function: className]`
- Enum 串行化为 `Number`
- 至少有一个调用签名串行化为 `Function`
- 其它，包括 interface 串行化为 `Object`

TypeScript 有个提案应对处理 Complex types serialization：

这些信息可以用来做一些事情，比如验证实体是否在运行时实现了某个接口，这对于 IoC 容器非常有用。 我们不知道什么时候复杂类型序列化支持会被添加到 TypeScript 中，有些计划需要现在就用它来为类似 InversifyJS 这样的优秀 IoC 容器添加一些很酷的特性。

在 TypeScript 中，类名和参数名通过反射是获取不到的，可以使用构造器获取类名：

	class MyClass {}

	const instance = new MyClass();

	console.log(instance.constructor.name); // MyClass
	console.log(MyClass.name);              // MyClass

	this.constructor.toString().match(/\w+/g)[1];


JavaScript 有一个庞大、繁荣的社区，已经成为事实上的通用语言。但它缺少一些功能，使它难以应用于大型应用程序的开发。正是由于这个原因，才出现了 TypeScript 和 Dart 。AngularJS 创建者 Misko Hevery 和 DurandalJS 创建者 Rob Eisenberg 联合发布了 AtScript 入门草稿。该文指出，AtScript 的目标同样是增加 JavaScript 缺少的功能。它从以下几个方面对 JavaScript 进行了增强：

- `Annotations` 类型注解，字段注解，元数据注解；
- `Introspection` 支持注解的类型内省；


注意  装饰器元数据是个实验性的特性并且可能在以后的版本中发生破坏性的改变（breaking changes）。

```ts
namespace Reflect {
  // 作为装饰器使用，给类或成员设置元数据
  metadata(k, v): (target, property?) => void 

  // 在对象上面定义元数据
  defineMetadata(k, v, o, p?): void 

  // 检查是否存在元数据
  hasMetadata(k, o, p?): boolean 
  hasOwnMetadata(k, o, p?): boolean
  
  // 获取元数据
  getMetadata(k, o, p?): any 
  getOwnMetadata(k, o, p?): any
  
  // 获取所有元数据的 Keys
  getMetadataKeys(o, p?): any[] 
  getOwnMetadataKeys(o, p?): any[]
  
  // 删除元数据
  deleteMetadata(k, o, p?): boolean 
}
```

这些 API 用途都是一个目的，给对象添加额外的信息，但是不影响对象的结构，这一点很重要，不会有 property 改动，可以衍生出很多其他的用途。例如让装饰器拥有真正装饰对象而不改变对象的能力，让对象拥有更多语义上的功能。

- 对类的元修饰都定义在类对象 Class 上面，而非实例 Instance；
- 对类的属性、方法修饰，都定义在类的原型 Prototype 上面，并且以属性、方法的名称作为 property。

类似于类的继承，查找元数据的方式也可以通过原型链进行的，而带有 `Own` 的函数表时只在当前对象中读取元数据，不通过原型链查找。


```ts
import 'reflect-metadata'

// metadata save to CLASS
@Reflect.metadata('name', "[It's A]") 
class A {
  // metadata save to PROTOTYPE
  @Reflect.metadata('name', "[It's hello]") 
  hello() {}
}

const objs = [A, new A, A.prototype]
objs.map(obj => console.log(
    Reflect.getMetadata('name', obj), 
    Reflect.getOwnMetadata('name', obj),
    Reflect.getMetadata('name', obj, 'hello'),
    Reflect.getOwnMetadata('name', obj ,'hello')
    ))
```

以上例子的输出：

    [It's A] [It's A] undefined undefined
    undefined undefined [It's hello] undefined
    undefined undefined [It's hello] [It's hello]

- 首先，无论是 `getMetadata()` `getOwnMetadata()`，读取类对象的元数据只有在 obj 是类对象 A 时才能读取到。
- 其次，读取原型上的元数据，两者都可以。
- 最后，读取类实例上的元数据，`Own` 方法不执行原型链回溯查找，所以从 A 类实例读取原形链上的元数据，只有使用 `getMetadata()` 才能成功获取。


# ⚑ Classes 类封装

- Introduction
- Classes
- Inheritance
- Public, private, and protected modifiers
	- Public by default
	- Understanding `private`
	- Understanding `protected`
- Readonly modifier
	- Parameter properties
- Accessors
- Static Properties
- Abstract Classes
- Advanced Techniques
	- Constructor functions
	- Using a class as an interface

OOP 的 S.O.L.I.D 基本原则：

- S - Single responsibility principle 单一职责原则，一个类应该只有一个功能职责；
- O - Open/closed principle 开放闭合原则，对扩展开放，对修改闭合；
- L - Liskov substitution principle 里氏替换原则，S 类继承 T，对应实例为 x、y，两者对应有一个属性 `q(x)`、`q(y)`，则 q(y) 可以替代 q(x)，即子类替代父类；
- I - Interface segregation principle 接口隔离原则，一个类不应该被强制实现它不需要用到的接口，或者说一个类不应该依赖它用不到的方法；
- D - Dependency inversion principle 应该依赖抽象而不是具体；


## Hello Class

TypeScript 引入的类概念和 Java 的语法非常相似：

	class Greeter {
	    greeting: string;
	    constructor(message: string) {
	        this.greeting = message;
	    }
	    greet() {
	        return "Hello, " + this.greeting;
	    }
	}

	let greeter = new Greeter("world");


## Inheritence or Extends

	class Animal {
	    name: string;
	    constructor(theName: string) { this.name = theName; }
	    move(distanceInMeters: number = 0) {
	        console.log(`${this.name} moved ${distanceInMeters}m.`);
	    }
	}

	class Snake extends Animal {
	    constructor(name: string) { super(name); }
	    move(distanceInMeters = 5) {
	        console.log("Slithering...");
	        super.move(distanceInMeters);
	    }
	}

	class Horse extends Animal {
	    constructor(name: string) { super(name); }
	    move(distanceInMeters = 45) {
	        console.log("Galloping...");
	        super.move(distanceInMeters);
	    }
	}

	let sam = new Snake("Sammy the Python");
	let tom: Animal = new Horse("Tommy the Palomino");

	sam.move();
	tom.move(34);


## Public, private, protected 访问修饰

### ☛ Public by default

	class Animal {
	    public name: string;
	    public constructor(theName: string) { this.name = theName; }
	    public move(distanceInMeters: number) {
	        console.log(`${this.name} moved ${distanceInMeters}m.`);
	    }
	}

### ☛ Understanding private

	class Animal {
	    private name: string;
	    constructor(theName: string) { this.name = theName; }
	}

	class Rhino extends Animal {
	    constructor() { super("Rhino"); }
	}

	class Employee {
	    private name: string;
	    constructor(theName: string) { this.name = theName; }
	}

	let animal = new Animal("Goat");
	let rhino = new Rhino();
	let employee = new Employee("Bob");

	animal = rhino; // ok
	new Animal("Cat").name; // Error: 'name' is private;
	animal = employee; // Error: 'Animal' and 'Employee' are not compatible

### ☛ Understanding protected

	class Person {
	    protected name: string;
	    constructor(name: string) { this.name = name; }
	}

	class Employee extends Person {
	    private department: string;

	    constructor(name: string, department: string) {
	        super(name);
	        this.department = department;
	    }

	    public getElevatorPitch() {
	        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	    }
	}

	let howard = new Employee("Howard", "Sales");
	console.log(howard.getElevatorPitch());
	console.log(howard.name); // error

### ☛ Protected constructor

	class Person {
	    protected name: string;
	    protected constructor(theName: string) { this.name = theName; }
	}

	// Employee can extend Person
	class Employee extends Person {
	    private department: string;

	    constructor(name: string, department: string) {
	        super(name);
	        this.department = department;
	    }

	    public getElevatorPitch() {
	        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	    }
	}

	let howard = new Employee("Howard", "Sales");
	let john = new Person("John"); // Error: The 'Person' constructor is protected

## Readonly modifier 

	class Octopus {
	    readonly name: string;
	    readonly numberOfLegs: number = 8;
	    constructor (theName: string) {
	        this.name = theName;
	    }
	}
	let dad = new Octopus("Man with the 8 strong legs");
	dad.name = "Man with the 3-piece suit"; // error! name is readonly.

### ☛ Parameter properties 

	class Octopus {
	    readonly numberOfLegs: number = 8;
	    constructor(readonly name: string) {
	    }
	}


## Accessors 读写器 getters/setters

可随意的成员读写

	class Employee {
	    fullName: string;
	}

	let employee = new Employee();
	employee.fullName = "Bob Smith";
	if (employee.fullName) {
	    console.log(employee.fullName);
	}

引入  getters/setters 时为了防止随意读写类成员

	const fullNameMaxLength = 10;

	class Employee {
	    private _fullName: string;

	    get fullName(): string {
	        return this._fullName;
	    }

	    set fullName(newName: string) {
	        if (newName && newName.length > fullNameMaxLength) {
	            throw new Error("fullName has a max length of " + fullNameMaxLength);
	        }
	        
	        this._fullName = newName;
	    }
	}

	let employee = new Employee();
	employee.fullName = "Bob Smith";
	if (employee.fullName) {
	    console.log(employee.fullName);
	}

## Static Properties 静态成员


	class Grid {
	    static origin = {x: 0, y: 0};
	    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
	        let xDist = (point.x - Grid.origin.x);
	        let yDist = (point.y - Grid.origin.y);
	        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
	    }
	    constructor (public scale: number) { }
	}

	let grid1 = new Grid(1.0);  // 1x scale
	let grid2 = new Grid(5.0);  // 5x scale

	console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
	console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

## Abstract Classes 抽象类

可以声明抽象类变量，但不能进行实例化。

	abstract class Department {

	    constructor(public name: string) {
	    }

	    printName(): void {
	        console.log("Department name: " + this.name);
	    }

	    abstract printMeeting(): void; // must be implemented in derived classes
	}

	class AccountingDepartment extends Department {

	    constructor() {
	        super("Accounting and Auditing"); // constructors in derived classes must call super()
	    }

	    printMeeting(): void {
	        console.log("The Accounting Department meets each Monday at 10am.");
	    }

	    generateReports(): void {
	        console.log("Generating accounting reports...");
	    }
	}

	let department: Department; // ok to create a reference to an abstract type
	department = new Department(); // error: cannot create an instance of an abstract class

	department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
	department.printName();
	department.printMeeting();
	department.generateReports(); // error: method doesn't exist on declared abstract type


## Advanced Techniques

TypeScript 中定义类的同时，其实同时也定义了类实例类型，`let greeter: Greeter` 就是声明变量的实列类型，另外也同时创建了构造器函数，执行`new()` 时就是在执行 TypeScript 生成的 JavaScript 构造器函数。虽然这里的代码已经明显实现了`constructor`构造器，但是不写也会一样存在：

	class Greeter {
	    static standardGreeting = "Hello, there";
	    greeting: string;
	    constructor(message: string) {
	        this.greeting = message;
	    }
	    greet() {
	        if (this.greeting) {
	            return "Hello, " + this.greeting;
	        }
	        else {
	            return Greeter.standardGreeting;
	        }
	    }xie
	}

	let greeter1: Greeter;
	greeter1 = new Greeter();
	console.log(greeter1.greet());

	let greeterMaker: typeof Greeter = Greeter;
	greeterMaker.standardGreeting = "Hey there!";

	let greeter2: Greeter = new greeterMaker();
	console.log(greeter2.greet());

注意`greeterMaker`这行的`typeof Greeter`，意思是给我 `Greeter` 的类型。这样的结果就是 `greeterMaker` 和 `Greeter` 具有同样的类型定义，包括成员定义及构造器等，因此可以通过 `new()` 来实列化。


### Using a class as an interface

	class Point {
	    x: number;
	    y: number;
	}

	interface Point3d extends Point {
	    z: number;
	}

	let point3d: Point3d = {x: 1, y: 2, z: 3};




# ⚑ Interfaces 接口

TypeScript 的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做**鸭式辨型法**或**结构性子类型化**。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

维基百科里的定义：

>If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.

翻译过来就是：如果某个东西长得像鸭子，像鸭子一样游泳，像鸭子一样嘎嘎叫，那它就可以被看成是一只鸭子。

## Our First Interface

下面通过一个简单示例来观察接口是如何工作的：

	function printLabel(labelledObj: { label: string }) {
	  console.log(labelledObj.label);
	}

	let myObj = { size: 10, label: "Size 10 Object" };
	printLabel(myObj);

类型检查器会查看`printLabel`的调用，参数列表中的类型字面量 `{ label: string }` 表明参数`printLabel`要有一个名为`label`属性并且类型为`string`。 实际传入的对象参数可能会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。 然而，有些时候 TypeScript 却并不会这么宽松，我们下面会稍做讲解。

下面使用接口来描述替代类型字面量：必须包含一个label属性且类型为string：

	interface LabelledValue {
	  label: string;
	}

	function printLabel(labelledObj: LabelledValue) {
	  console.log(labelledObj.label);
	}

	let myObj = {size: 10, label: "Size 10 Object"};
	printLabel(myObj);

在TypeScript的静态类型中并不能像在其它语言里一样，说传给 `printLabel` 的对象实现了这个接口。我们只会去关注值的外形，即类型字面量。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的，也就是暗示实现了相应的接口。

如下，直接使用接口定义变量 m 的类型：

	const m: {size: number, label: string} = myObj;
	printLabel(m);

还有一点值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。

## Optional Properties ?:

Nullable types 可以为 null 的类型，接口里的属性不全都是必需的，或者根本不存在。 可选属性在应用`option bags`模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。 接口定义可选属性时，只需要在名字定义的后面加一个`?`符号：

	interface SquareConfig {
	  color?: string;
	  width?: number;
	}

	function createSquare(config: SquareConfig): {color: string; area: number} {
	  let newSquare = {color: "white", area: 100};
	  if (config.color) {
	    newSquare.color = config.color;
	  }
	  if (config.width) {
	    newSquare.area = config.width * config.width;
	  }
	  return newSquare;
	}

	let mySquare = createSquare({color: "black"});

可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。 比如，我们故意将 createSquare里的color属性名拼错，就会得到一个错误提示。

## Readonly 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 `readonly` 来指定只读属性:

	interface Point {
	    readonly x: number;
	    readonly y: number;
	}

你可以通过赋值一个对象字面量来构造一个`Point`。 赋值后， x和y再也不能被改变了。

	let p1: Point = { x: 10, y: 20 };
	p1.x = 5; // error!

TypeScript具有`ReadonlyArray<T>`类型，它与`Array<T>`相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：

	let a: number[] = [1, 2, 3, 4];
	let ro: ReadonlyArray<number> = a;
	ro[0] = 12; // error!
	ro.push(5); // error!
	ro.length = 100; // error!
	a = ro; // error!

上面代码的最后一行，可以看到就算把整个`ReadonlyArray`赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：

	a = ro as number[];

最简单判断该用`readonly`还是`const`的方法是看要把它做为变量使用还是做为一个属性。 做为常量使用的话用 `const`，若做为属性则使用`readonly`。


## Excess Property Checks 额外属性检查

注意下面传入createSquare的参数拼写为`colour`而不是`color`。 在JavaScript里，这会默默地失败。

	interface SquareConfig {
	    color?: string;
	    width?: number;
	}

	function createSquare(config: SquareConfig): { color: string; area: number } {
	    // ...
	}

	let mySquare = createSquare({ colour: "red", width: 100 });

你可能会争辩这个程序已经正确地类型化了，因为`width`属性是兼容的，不存在`color`属性，而且额外的`colour`属性是无意义的。

然而，TypeScript会认为这段代码可能存在bug。 **对象字面量**会被特殊对待而且会经过**额外属性检查**，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何目标类型不包含的属性时，你会得到一个错误，对象包含非期待的额外属性。

	// error: 'colour' not expected in type 'SquareConfig'
	let mySquare = createSquare({ colour: "red", width: 100 });

绕开额外检查非常简单， 最简便的方法是使用类型断言：

	let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

然而，最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。 如果 `SquareConfig`带有上面定义的类型的`color`和`width`属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：

	interface SquareConfig {
	    color?: string;
	    width?: number;
	    [propName: string]: any;
	}

我们稍后会讲到索引签名，但在这我们要表示的是`SquareConfig`可以有任意数量的属性，并且只要它们不是`color`和`width`，那么就无所谓它们的类型是什么。

还有最后一种跳过这些检查的方式，这可能会让你感到惊讶，它就是将这个对象赋值给一个另一个变量： 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。

	let squareOptions = { colour: "red", width: 100 };
	let mySquare = createSquare(squareOptions);

要留意，在像上面一样的简单代码里，你可能不应该去绕开这些检查。 对于包含方法和内部状态的复杂对象字面量来讲，你可能需要使用这些技巧，但是大部额外属性检查错误是真正的`bug`! 就是说你遇到了额外类型检查出的错误，比如`option bags`，你应该去审查一下你的类型声明。 


## Function Type 函数类型

接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。

	interface SearchFunc {
	  (source: string, subString: string): boolean;
	}

	let mySearch: SearchFunc;
	mySearch = function(src: string, sub: string): boolean {
	  let result = src.search(sub);
	  return result > -1;
	}

函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 `SearchFunc` 类型变量。 函数的返回值类型是通过其返回值推断出来的，此例是 `false`和`true`。 如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与 `SearchFunc`接口中的定义不匹配。

	let mySearch: SearchFunc;
	mySearch = function(src, sub) {
	    let result = src.search(sub);
	    return result > -1;
	}

## Indexable Types 可索引类型接口

那些能够通过索引得到的类型，比如`a[10]`或`ageMap["daniel"]`具有一个**索引签名**，它描述了对象索引的类型，还有相应的索引返回值类型。 让我们看一个例子：

	interface StringArray {
	  [index: number]: string;
	}

	let myArray: StringArray;
	myArray = ["Bob", "Fred"];

	let myStr: string = myArray[0];

上面例子里，我们定义了`StringArray`接口，它具有**索引签名**。 这个索引签名表示了当用 `number`去索引`StringArray`时会得到`string`类型的返回值。

TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用数值 `100`去索引等同于使用字符串`"100"`去索引，因此两者需要保持一致。

	class Animal {
	    name: string;
	}
	class Dog extends Animal {
	    breed: string;
	}

	// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
	interface NotOkay {
	    [x: number]: Animal;
	    [x: string]: Dog;
	}

字符串索引签名能够很好的描述`dictionary`模式，并且它们也会确保所有属性与其返回值类型相匹配。 因为字符串索引声明了 `obj.property`和`obj["property"]`两种形式都可以。 下面的例子里，`name`的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：

	interface NumberDictionary {
	  [index: string]: number;
	  length: number;    // 可以，length是number类型
	  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
	}

最后，你可以将索引签名设置为只读，这样就防止了给索引赋值：

	interface ReadonlyStringArray {
	    readonly [index: number]: string;
	}
	let myArray: ReadonlyStringArray = ["Alice", "Bob"];
	myArray[2] = "Mallory"; // error!

你不能设置`myArray[2]`，因为索引签名是只读的。


## Class Types

与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。也可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样。

	interface ClockInterface {
	    currentTime: Date;
	    setTime(d: Date);
	}

	class Clock implements ClockInterface {
	    currentTime: Date;
	    constructor(h: number, m: number) { }
	    setTime(d: Date) {
	        this.currentTime = d;
	    }
	}

接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

当你操作类和接口的时候，你要知道类是具有两个类型的：**静态部分的类型**和**实例的类型**。 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：Clock 没有提供合适的`new()`!

	interface ClockConstructor {
	    new (hour: number, minute: number);
	}

	class Clock implements ClockConstructor {
	    currentTime: Date;
	    constructor(h: number, m: number) { }
	}

因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 `constructor`存在于类的静态部分，所以不在检查的范围内。

因此，我们应该直接操作类的静态部分。 如下例子，`ClockConstructor`为构造函数所用，`ClockInterface`为实例方法所用。 为了方便我们定义一个构造函数 `createClock`，它用传入的类型创建实例。

因为`createClock`的第一个参数是`ClockConstructor`类型，在`createClock(AnalogClock, 7, 32)`里，会检查`AnalogClock`是否符合构造函数签名。

	interface ClockConstructor {
	    new (hour: number, minute: number): ClockInterface;
	}
	interface ClockInterface {
	    tick();
	}

	class DigitalClock implements ClockInterface {
	    constructor(h: number, m: number) { }
	    tick() {
	        console.log("beep beep");
	    }
	}
	class AnalogClock implements ClockInterface {
	    constructor(h: number, m: number) { }
	    tick() {
	        console.log("tick tock");
	    }
	}

	function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
	    return new ctor(hour, minute);
	}

	let digital = createClock(DigitalClock, 12, 17);
	let analog = createClock(AnalogClock, 7, 32);

另一个结构更简单的例子：

	interface ClockConstructor {
	  new (hour: number, minute: number);
	}

	interface ClockInterface {
	  tick();
	}

	const Clock: ClockConstructor = class Clock implements ClockInterface {
	  constructor(h: number, m: number) {}
	  tick() {
	      console.log("beep beep");
	  }
	}

	let clock = new Clock(1,2);


## Extending Interfaces 继承接口

和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

	interface Shape {
	    color: string;
	}

	interface Square extends Shape {
	    sideLength: number;
	}

	let square = <Square>{};
	square.color = "blue";
	square.sideLength = 10;

一个接口可以继承多个接口，创建出多个接口的合成接口。

	interface Shape {
	    color: string;
	}

	interface PenStroke {
	    penWidth: number;
	}

	interface Square extends Shape, PenStroke {
	    sideLength: number;
	}

	let square = <Square>{};
	square.color = "blue";
	square.sideLength = 10;
	square.penWidth = 5.0;


## Interface Extends Class 接口继承类

正如类章节中提到的，接口可以继承类，类可以当作接口使用。

当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的`private`和`protected`成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。

当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 这个子类除了继承至基类外与基类没有任何关系。 例：

	class Control {
	    private state: any;
	}

	interface SelectableControl extends Control {
	    select(): void;
	}

	class Button extends Control implements SelectableControl {
	    select() { }
	}

	class TextBox extends Control {
	    select() { }
	}

	// Error：Property 'state' is missing in type 'Image' but required
	class Image implements SelectableControl {
	    select() { }
	}

	class Location {

	}

在上面的例子里，`SelectableControl`接口继承了`Control`的所有成员，包括私有成员`state`，所以只能够是`Control`的子类们才能实现这个接口，而`Image`这个类不符合。 因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。

在`Control`类内部，是允许通过`SelectableControl`的实例来访问私有成员`state`的。 实际上 `SelectableControl`接口和`Control`类是一样的。 `Button`和`TextBox`类是`SelectableControl`的子类，它们都继承自`Control`并实现了接口方法`select()`，但`Image`和`Location`类并不是这样的。


## Hybrid Types 混合类型

先前我们提过，接口能够描述JavaScript里丰富的类型。 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。

	interface Counter {
	    (start: number): string;
	    interval: number;
	    reset(): void;
	}

	function getCounter(): Counter {
	    let counter = <Counter>function (start: number) { };
	    counter.interval = 123;
	    counter.reset = function () { };
	    return counter;
	}

	let c = getCounter();
	c(10);
	c.reset();
	c.interval = 5.0;

在使用JavaScript第三方库的时候，你可能需要像上面那样去完整地定义类型。

## Interface vs Type alias
- https://juejin.im/post/5c2723635188252d1d34dc7d

Typescript 中的 interface 和 type 到底有什么区别

1. 相同点

都可以用来描述一个对象或函数：

	interface User {
	  name: string
	  age: number
	}

	type User = {
	  name: string
	  age: number
	};

	interface SetUser {
	  (name: string, age: number): void;
	}
	type SetUser = (name: string, age: number): void;


都允许拓展（extends）：

interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。

interface extends interface

	interface Name { 
	  name: string; 
	}
	interface User extends Name { 
	  age: number; 
	}

type extends type

	type Name = { 
	  name: string; 
	}
	type User = Name & { age: number  };

interface extends type

	type Name = { 
	  name: string; 
	}
	interface User extends Name { 
	  age: number; 
	}

type extends interface

	interface Name { 
	  name: string; 
	}
	type User = Name & { 
	  age: number; 
	}


2. 不同点

type 可以声明基本类型别名，联合类型，元组等类型，而 interface 不行

	// 基本类型别名
	type Name = string

	// 联合类型
	interface Dog {
	    wong();
	}
	interface Cat {
	    miao();
	}

	type Pet = Dog | Cat

	// 具体定义数组每个位置的类型
	type PetList = [Dog, Pet]
	
type 语句中还可以使用 typeof 获取实例的 类型进行赋值

	// 当你想获取一个变量的类型时，使用 typeof
	let div = document.createElement('div');
	type B = typeof div
	

其他骚操作

	type StringOrNumber = string | number;  
	type Text = string | { text: string };  
	type NameLookup = Dictionary<string, Person>;  
	type Callback<T> = (data: T) => void;  
	type Pair<T> = [T, T];  
	type Coordinates = Pair<number>;  
	type Tree<T> = T | { left: Tree<T>, right: Tree<T> };


interface 能够声明合并，而 type不行

	interface User {
	  name: string
	  age: number
	}

	interface User {
	  sex: string
	}

	/*
	User 接口为 {
	  name: string
	  age: number
	  sex: string 
	}
	*/


interface 有可选属性和只读属性

可选属性接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 例如给函数传入的参数对象中只有部分属性赋值了。带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。如下所示

	interface Person {
	  name: string;
	  age?: number;
	  gender?: number;
	}
	

只读属性顾名思义就是这个属性是不可写的，对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性，如下所示：

	interface User {
	    readonly loginName: string;
	    password: string;
	}

上面的例子说明，当完成 User 对象的初始化后 loginName 就不可以修改了。


# ⚑ Generics 泛型
- [TypeScript 口袋手册 - 泛型](https://www.tslang.cn/docs/handbook/generics.html)
- [TypeScript Handbook - Generics](http://www.typescriptlang.org/docs/handbook/generics.html)

软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

## Hello Generics

下面来创建一个`identity`函数泛型化的例子， 这个函数会返回任何传入它的值， 你可以把这个函数当成是 echo 命令。

不用泛型的话，这个函数可能是下面这样两种方式：

	function identity(arg: number): number {
	    return arg;
	}

	function identity(arg: any): any {
	    return arg;
	}

使用`any`类型来定义类型会导致这个函数可以接收任何类型的参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

因此，我们需要使用泛型，一种使返回值的类型与传入参数的类型是相同的方法，或者说泛型使用了类型变量`Generic Type Variable`，它是一种特殊的变量，只用于表示类型而不是值。

	function identity<T>(arg: T): T {
	    return arg;
	}

我们给`identity`添加了类型变量`T`， 帮助我们捕获用户传入的类型，比如`number`，然后在函数定义过程中使用这个类型。 最后再次使用了 `T`当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了， 这允许编译器跟踪函数里使用的类型的信息。

这个版本的`identity`函数叫做泛型函数，因为它可以适用于多个类型。 不同于使用 `any`，它不会丢失类型信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。

我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：

	let output = identity<string>("myString");  // type of output will be 'string'

这里我们明确的指定了`T`是`string`类型，并做为一个参数传给函数，使用了`<>`括起来而不是`()`。

第二种方法利用了类型推论更普遍， 即编译器会根据传入的参数自动地帮助我们确定`T`的类型：

	let output = identity("myString");  // type of output will be 'string'

注意我们没必要使用尖括号`<>`来明确地传入类型；编译器可以查看`myString`的值，然后把`T`设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入`T`的类型，在一些复杂的情况下，这是可能出现的。


## Working with Generic Type Variable

来考虑一个需要打印参数信息的泛型函数：

	function loggingIdentity<T>(arg: T): T {
	    console.log(arg.length);  // Error: T doesn't have .length
	    return arg;
	}

如果这么做，编译器会报错说我们使用了`arg.length`属性，但是没有地方指明它具有这个属性。 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有这个属的。这个问题可以在后面介绍的泛型约束中得到解决。

现在假设我们想操作`T`类型的数组，这样`arg.length`属性是应该存在的， 可以像创建其它数组一样创建这个数组：

	function loggingIdentity<T>(arg: T[]): T[] {
	    console.log(arg.length);  // Array has a .length, so no more error
	    return arg;
	}

你可以这样理解泛型函数loggingIdentity，它接收类型参数`T`和参数`arg`，它是个元素类型是T的数组，并返回元素类型是T的数组。 如果我们传入数字数组，将返回一个数字数组，因为此时`T`的的类型为`number`。 这可以让我们把泛型变量`T`当做类型的一部分使用，而不是整个类型，增加了灵活性。

我们也可以这样实现上面的例子：

	function loggingIdentity<T>(arg: Array<T>): Array<T> {
	    console.log(arg.length);  // Array has a .length, so no more error
	    return arg;
	}

使用过其它语言的话，你可能对这种语法已经很熟悉了。 在下一节，会介绍如何创建自定义泛型像 `Array<T>`一样。


## Generic Types 泛型类型

泛型类型与非普通类型没什么不同，只是多了一个带箭括号的类型参数`<T>`在最前面，泛型字面意义就是泛化的类型，通用的类型。完全可以像函数声明一样，也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以，`<T>(arg: T) => T` 和 `<U>(arg: U) => U` 就是等价的类型，最后一个`T`和`U`表示函数返回类型。

	function identity<T>(arg: T): T {
	    return arg;
	}

	let myIdentity: <T>(arg: T) => T = identity;

	let itIdentity: <U>(arg: U) => U = identity;

还可以使用带有调用签名的对象字面量来定义泛型函数，花括号内的签名和函数定义一致：

	let myIdentity: {<T>(arg: T): T} = identity;

了解泛型类型后，就可以尝试去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口：

	interface GenericIdentityFn {
	    <T>(arg: T): T;
	}

	function identity<T>(arg: T): T {
	    return arg;
	}

	let myIdentity: GenericIdentityFn = identity;

一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型，比如`Dictionary<string>`而不只是`Dictionary`， 这样接口里的其它成员也能知道这个参数的类型了。

	interface GenericIdentityFn<T> {
	    (arg: T): T;
	}

	function identity<T>(arg: T): T {
	    return arg;
	}

	let myIdentity: GenericIdentityFn<number> = identity;

注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。 当我们使用`GenericIdentityFn`的时候，还得传入一个类型参数来指定泛型类型，这里是`number`，锁定了之后代码里使用的类型。 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。

除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间。 


## Generic Classes 泛型类

泛型类看上去与泛型接口差不多，泛型类型变量`<T>`跟在类名后。

	class GenericNumber<T> {
	    zeroValue: T;
	    add: (x: T, y: T) => T;
	}

	let myGenericNumber = new GenericNumber<number>();
	myGenericNumber.zeroValue = 0;
	myGenericNumber.add = function(x, y) { return x + y; };

GenericNumber类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用`number`类型。

	let stringNumeric = new GenericNumber<string>();
	stringNumeric.zeroValue = "";
	stringNumeric.add = function(x, y) { return x + y; };

	console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。

我们在类那节说过，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。


## Generic Constraints 泛型约束

你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 在`loggingIdentity`例子中，我们想访问`arg`的`length`属性，但是编译器并不能证明每种类型都有`length`属性，所以就报错了。

	function loggingIdentity<T>(arg: T): T {
	    console.log(arg.length);  // Error: T doesn't have .length
	    return arg;
	}

相比于操作`any`所有类型，我们想要限制函数去处理任意带有`.length`属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于`T`的约束要求。

为此，我们定义一个接口来描述约束条件。 创建一个包含 `.length` 属性的接口，使用这个接口和`extends`关键字来实现约束：

	interface Lengthwise {
	    length: number;
	}

	function loggingIdentity<T extends Lengthwise>(arg: T): T {
	    console.log(arg.length);  // Now we know it has a .length property, so no more error
	    return arg;
	}

现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：

	loggingIdentity(3);  // Error, number doesn't have a .length property

我们需要传入符合约束类型的值，必须包含必须的属性：

	loggingIdentity({length: 10, value: 3});


在泛型约束中使用类型参数对另一个类型参数进行约束，即*泛型参数相互约束*。 比如，想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 `obj`上，因此我们需要在这两个类型之间使用约束。

	function getProperty<T, K extends keyof T>(obj: T, key: K) {
	    return obj[key];
	}

	let x = { a: 1, b: 2, c: 3, d: 4 };

	getProperty(x, "a"); // okay
	getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

在*泛型里使用类类型*，在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如以下例子，注意圆括号部分的函数参数列表`(c: {new(): T; })`，其中的花括号是类型字面量，约束这个类存在构造函数`new()`并且返回`T`一个实例:

	function create<T>(c: {new(): T; }): T {
	    return new c();
	}

一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系，注意继承约束`<A extends Animal>`。

	class BeeKeeper {
	    hasMask: boolean;
	}

	class ZooKeeper {
	    nametag: string;
	}

	class Animal {
	    numLegs: number;
	}

	class Bee extends Animal {
	    keeper: BeeKeeper;
	}

	class Lion extends Animal {
	    keeper: ZooKeeper;
	}

	function createInstance<A extends Animal>(c: new () => A): A {
	    return new c();
	}

	createInstance(Lion).keeper.nametag;  // typechecks!
	createInstance(Bee).keeper.hasMask;   // typechecks!




# ⚑ tsconfig.json 配置文件
- What is a tsconfig.json https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- What is jsconfig.json? https://code.visualstudio.com/docs/languages/jsconfig
- Intro to the TSConfig Reference https://www.typescriptlang.org/tsconfig

如果一个目录下存在一个 `tsconfig.json` 配置文件，意味着这个目录是 TypeScript 项目的根目录，配置文件中指定了用来编译这个项目的根文件和编译选项。

一个 TSConfig 配置文件标志其所在目录为 TypeScript 或者 JavaScript 项目的根目录，TSConfig 配置文件可以是 tsconfig.json 或者 jsconfig.json，它们具有相同的配置和功能。

配置文件模板可以通过命令生成：

	tsc --init

一个项目可以通过以下方式之一来编译：

✓ 使用 `tsconfig.json`
✓ 不带任何输入文件的情况下调用 `tsc`，编译器会从当前目录开始去查找 `tsconfig.json`，逐级向上搜索父目录。
✓ 不带任何输入文件的情况下调用 `tsc`，且使用命令行参数 `--project` 或 `-p` 指定一个包含 `tsconfig.json` 文件的目录。
✓ 当命令行上指定了输入文件时，`tsconfig.json` 文件会被忽略。

`tsconfig.json`示例文件:

主要匹配项如下，可以被忽略，这时编译器会使用默认值：

- `compilerOptions` 编译器匹配项；
- `files` 代码文件列表；
- `include` 设置要包含的目录；
- `exclude` 设置要排除的目录；

配置参考：

	{
	    "compilerOptions": {
	        "module": "system",
	        "noImplicitAny": true,
	        "removeComments": true,
	        "preserveConstEnums": true,
	        "outFile": "../../built/local/tsc.js",
	        "sourceMap": true
	    },
	    "files": [
	        "core.ts",
	        "sys.ts",
	        "types.ts",
	        "scanner.ts",
	        "parser.ts",
	    ]
	    "include": [
	        "src/**/*"
	    ],
	    "exclude": [
	        "node_modules",
	        "**/*.spec.ts"
	    ]
	}

include 和 exclude 支持 glob 通配符：

- `*` 任意个字符，但不包含目录分隔符。
- `?` 匹配一个或没有匹配字符，不匹配目录分隔符。
- `**/` 匹配任意级目录。

如果一个 glob 模式里的某部分只包含 `*` 或 `.*`，那么仅有支持的文件扩展名类型被包含在内，比如默认`.ts`，`.tsx` 和 `.d.ts`， 如果 `allowJs` 设置 true 可以支持 JavaScript，包含 `.js` 和 `.jsx`。

如果`files`和`include`都没有被指定，编译器默认包含当前目录和子目录下所有的 TypeScript 文件（`.ts`, `.d.ts` 和 `.tsx`），排除在`exclude`里指定的文件。如果 `allowJs` 设置成 true，JS文件（`.js` 和 `.jsx`）也被包含进来。 如果指定了 `files`或`include`，编译器会将它们结合一并包含进来。 使用 `outDir`指定的目录下的文件永远会被编译器排除，除非你明确地使用`files`将其包含进来（这时就算用exclude指定也没用）。

使用`include`引入的文件可以使用`exclude`属性过滤。 然而，通过 `files`属性明确指定的文件却总是会被包含在内，不管`exclude`如何设置。 如果没有特殊指定， `exclude`默认情况下会排除node_modules，bower_components，jspm_packages和 `<outDir>` 目录。

任何被`files`或`include`指定的文件所引用的文件也会被包含进来。 A.ts 引用了 B.ts，因此 B.ts 不能被排除，除非引用它的 A.ts 在"exclude"列表中。

需要注意编译器不会去引入那些可能做为输出的文件；比如，假设我们包含了index.ts，那么index.d.ts和index.js会被排除在外。 通常来讲，不推荐只有扩展名的不同来区分同目录下的文件。

tsconfig.json 文件可以是个空文件，那么所有默认的文件（如上面所述）都会以默认配置选项编译。

在命令行上指定的编译选项会覆盖在 tsconfig.json 文件里的相应选项。


## extends 继承配置

`tsconfig.json`文件可以利用 `extends` 属性从另一个配置文件里继承配置。

`extends` 是`tsconfig.json`文件里的顶级属性（与compilerOptions，files，include，和exclude一样）。  `extends` 的值是一个字符串，包含指向另一个要继承文件的路径。

在原文件里的配置先被加载，然后被来至继承文件里的配置重写。 如果发现循环引用，则会报错。

来至所继承配置文件的files，include和exclude覆盖源配置文件的属性。

配置文件里的相对路径在解析时相对于它所在的文件。

比如：

	// configs/base.json：
	{
	  "compilerOptions": {
	    "noImplicitAny": true,
	    "strictNullChecks": true
	  }
	}

	// tsconfig.json：
	{
	  "extends": "./configs/base",
	  "files": [
	    "main.ts",
	    "supplemental.ts"
	  ]
	}

	// tsconfig.nostrictnull.json：
	{
	  "extends": "./tsconfig",
	  "compilerOptions": {
	    "strictNullChecks": false
	  }
	}

## compileOnSave

在最顶层设置 `compileOnSave` 标记，可以让 IDE 在保存文件的时候根据 `tsconfig.json` 重新生成文件。

	{
	    "compileOnSave": true,
	    "compilerOptions": {
	        "noImplicitAny" : true
	    }
	}

要想支持这个特性需要Visual Studio 2015， TypeScript1.8.4以上并且安装atom-typescript插件。


## Compiler Options

- `--allowJs` boolean	false	允许编译javascript文件。
- `--allowSyntheticDefaultImports` boolean	module === "system" 或设置了 --esModuleInterop 且 module 不为 es2015 / esnext	允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。
- `--allowUnreachableCode` boolean	false	不报告执行不到的代码错误。
- `--allowUnusedLabels` boolean	false	不报告未使用的标签错误。
- `--alwaysStrict` boolean	false	以严格模式解析并为每个源文件生成 "use strict"语句
- `--baseUrl` string		解析非相对模块名的基准目录。查看 模块解析文档了解详情。
- `--charset` string	"utf8"	输入文件的字符集。
- `--checkJs` boolean	false	在 .js文件中报告错误。与 --allowJs 配合使用。
- `--declaration` `-d` boolean	false	生成相应的 .d.ts文件。
- `--declarationDir` string		生成声明文件的输出路径。
- `--diagnostics` boolean	false	显示诊断信息。
- `--disableSizeLimit` boolean	false	禁用JavaScript工程体积大小的限制
- `--emitBOM` boolean	false	在输出文件的开头加入BOM头（UTF-8 Byte Order Mark）。
- `--emitDecoratorMetadata` [1]	boolean	false	给源码里的装饰器声明加上设计类型元数据。查看 issue #2577了解更多信息。
- `--experimentalDecorators` [1]	boolean	false	启用实验性的ES装饰器。
- `--extendedDiagnostics` boolean	false	显示详细的诊段信息。
- `--forceConsistentCasingInFileNames` boolean	false	禁止对同一个文件的不一致的引用。
- `--help` `-h` 打印帮助信息。 --importHelpers	string		从 tslib 导入辅助工具函数（比如 `__extends`，`__rest`等）
- `--inlineSourceMap` boolean	false	生成单个sourcemaps文件，而不是将每sourcemaps生成不同的文件。
- `--inlineSources` boolean	false	将代码与sourcemaps生成到一个文件中，要求同时设置了 --inlineSourceMap或 --sourceMap属性。
- `--init` 初始化TypeScript项目并创建一个 tsconfig.json文件。
- `--isolatedModules` boolean	false	将每个文件作为单独的模块（与“ts.transpileModule”类似）。
- `--jsx` string	"Preserve"	在 .tsx文件里支持JSX： "React"或 "Preserve"。查看 JSX。
- `--jsxFactory` string	"React.createElement"	指定生成目标为react JSX时，使用的JSX工厂函数，比如 React.createElement或 h。
- `--lib` string[]		编译过程中需要引入的库文件的列表。

	可能的值为： 

	► ES5 ► ES6 ► ES2015 ► ES7 ► ES2016 ► ES2017 ► ES2018 ► ESNext ► DOM ► DOM.Iterable ► WebWorker ► ScriptHost ► ES2015.Core ► ES2015.Collection ► ES2015.Generator ► ES2015.Iterable ► ES2015.Promise ► ES2015.Proxy ► ES2015.Reflect ► ES2015.Symbol ► ES2015.Symbol.WellKnown ► ES2016.Array.Include ► ES2017.object ► ES2017.Intl ► ES2017.SharedMemory ► ES2017.String ► ES2017.TypedArrays ► ES2018.Intl ► ES2018.Promise ► ES2018.RegExp ► ESNext.AsyncIterable ► ESNext.Array ► ESNext.Intl ► ESNext.Symbol

	注意：如果--lib没有指定默认注入的库的列表。默认注入的库为： 

	► 针对于 `--target ES5`：DOM，ES5，ScriptHost 
	► 针对于 `--target ES6`：DOM，ES6，-M.Iterable，ScriptHost 

- `--listEmittedFiles` boolean	false	打印出编译后生成文件的名字。
- `--listFiles` boolean	false	编译过程中打印文件名。
- `--locale` string	(platform specific)	显示错误信息时使用的语言，比如：en-us。
- `--mapRoot` string		为调试器指定指定sourcemap文件的路径，而不是使用生成时的路径。当 .map文件是在运行时指定的，并不同于 js文件的地址时使用这个标记。指定的路径会嵌入到 sourceMap里告诉调试器到哪里去找它们。
- `--maxNodeModuleJsDepth` number	0	node_modules依赖的最大搜索深度并加载JavaScript文件。仅适用于 --allowJs。
- `--module` `-m` string	target === "ES6" ? "ES6" : "commonjs"	指定生成哪个模块系统代码： "None"， "CommonJS"， "AMD"， "System"， "UMD"， "ES6"或 "ES2015"。 

	► 只有 "AMD"和 "System"能和 --outFile一起使用。
	► "ES6"和 "ES2015"可使用在目标输出为 "ES5"或更低的情况下。

- `--moduleResolution` string	module === "AMD" or "System" or "ES6" ? "Classic" : "Node"	决定如何处理模块。或者是"Node"对于Node.js/io.js，或者是"Classic"（默认）。
- `--newLine` string	(platform specific)	当生成文件时指定行结束符： "crlf"（windows）或 "lf"（unix）。
- `--noEmit` boolean	false	不生成输出文件。
- `--noEmitHelpers` boolean	false	不在输出文件中生成用户自定义的帮助函数代码，如 __extends。
- `--noEmitOnError` boolean	false	报错时不生成输出文件。
- `--noErrorTruncation` boolean	false	不截短错误消息。
- `--noFallthroughCasesInSwitch` boolean	false	报告switch语句的fallthrough错误。（即，不允许switch的case语句贯穿）
- `--noImplicitAny` boolean	false	在表达式和声明上有隐含的 any类型时报错。
- `--noImplicitReturns` boolean	false	不是函数的所有返回路径都有返回值时报错。
- `--noImplicitThis` boolean	false	当 this表达式的值为 any类型的时候，生成一个错误。
- `--noImplicitUseStrict` boolean	false	模块输出中不包含 "use strict"指令。
- `--noLib` boolean	false	不包含默认的库文件（ lib.d.ts）。
- `--noResolve` boolean	false	不把 `/// <reference>`或模块导入的文件加到编译文件列表。
- `--noStrictGenericChecks` boolean	false	禁用在函数类型里对泛型签名进行严格检查。
- `--noUnusedLocals` boolean	false	若有未使用的局部变量则抛错。
- `--noUnusedParameters` boolean	false	若有未使用的参数则抛错。
- `--outDir` string		重定向输出目录。
- `--outFile` string		将输出文件合并为一个文件。合并的顺序是根据传入编译器的文件顺序和 `///<reference>`和 import的文件顺序决定的。查看输出文件顺序文件了解详情。
- `paths` [2]	Object		模块名到基于 baseUrl 的路径映射的列表。查看 模块解析文档了解详情。
- `--preserveConstEnums` boolean	false	保留 const和 enum声明。查看 const enums documentation了解详情。
- `--preserveSymlinks` boolean	false	不把符号链接解析为其真实路径；将符号链接文件视为真正的文件。
- `--preserveWatchOutput` boolean	false	保留watch模式下过时的控制台输出。
- `--pretty` [1]	boolean	false	给错误和消息设置样式，使用颜色和上下文。
- `--project` `-p` string		编译指定目录下的项目。这个目录应该包含一个 tsconfig.json文件来管理编译。查看 tsconfig.json文档了解更多信息。
- `--reactNamespace` string	"React"	当目标为生成 "react" JSX时，指定 createElement和 `__spread`的调用对象
- `--removeComments` boolean	false	删除所有注释，除了以 `/!*`开头的版权信息。
- `--rootDir` string	(common root directory is computed from the list of input files)	仅用来控制输出的目录结构 --outDir。
- `rootDirs` [2]	string[]		根（root）文件夹列表，表示运行时组合工程结构的内容。查看 模块解析文档了解详情。
- `--skipDefaultLibCheck` boolean	false	忽略 库的默认声明文件的类型检查。
- `--skipLibCheck` boolean	false	忽略所有的声明文件 `*.d.ts` 的类型检查。
- `--sourceMap` boolean	false	生成相应的 .map文件。
- `--sourceRoot` string		指定TypeScript源文件的路径，以便调试器定位。当TypeScript文件的位置是在运行时指定时使用此标记。路径信息会被加到 sourceMap里。
- `--strict` boolean	false	启用所有严格类型检查选项。启用 --strict相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict， --strictNullChecks和 --strictFunctionTypes和--strictPropertyInitialization。
- `--strictFunctionTypes` boolean	false	禁用函数参数双向协变检查。
- `--strictPropertyInitialization` boolean	false	确保类的非undefined属性已经在构造函数里初始化。若要令此选项生效，需要同时启用--strictNullChecks。
- `--strictNullChecks` boolean	false	在严格的 null检查模式下， null和 undefined值不包含在任何类型里，只允许用它们自己和 any来赋值（有个例外， undefined可以赋值到 void）。
- `--stripInternal` [1]	boolean	false	不对具有 `/** @internal */` JSDoc注解的代码生成代码。
- `--suppressExcessPropertyErrors` [1]	boolean	false	阻止对对象字面量的额外属性检查。
- `--suppressImplicitAnyIndexErrors` boolean	false	阻止 --noImplicitAny对缺少索引签名的索引对象报错。查看 issue #1232了解详情。
- `--target` `-t` string	"ES3"	指定ECMAScript目标版本 "ES3"（默认）， "ES5"， "ES6"/ "ES2015"， "ES2016"， "ES2017"或 "ESNext"。
注意： "ESNext"最新的生成目标列表为 ES proposed features

- `--traceResolution` boolean	false	生成模块解析日志信息
- `--types` string[]		要包含的类型声明文件名列表。查看 @types，--typeRoots和--types章节了解详细信息。
- `--typeRoots` string[]		要包含的类型声明文件路径列表。查看 @types，--typeRoots和--types章节了解详细信息。
- `--version` `-v` 打印编译器版本号。
- `--watch` `-w` 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。监视文件和目录的具体实现可以通过环境变量进行配置。详情请看配置 Watch。

[1] 这些选项是试验性的。
[2] 这些选项只能在 tsconfig.json 里使用，不能在命令行使用。


# ⚑ Type Declaration @types，typeRoots 和 types
- https://www.tslang.cn/docs/handbook/declaration-files/introduction.html
- https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html
- https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html
- https://www.tslang.cn/docs/handbook/triple-slash-directives.html
- Modules .d.ts https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

`*.d.ts` 即类型声明文件 Declaration Files。通常引用 JavaScript 这种无类型声明的脚本时，需要一个类型文件来帮助你在 TypeScript 使用它们。TypeScript 工程中，类型信息是必须的，因为这是一种强类型脚本语言，可以将类型信息写入类型声明文件，也可以在 tsc 编译时生成类型声明文件供其它项目使用。TypeScript 也是我见过拥有最丰富类型系统的脚本语言，没有之一，你可以使用 Any 或 Unkown 来兼容 JavaScript 这种弱类型脚本语言。

https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html

虽然通过直接引用可以调用库的类和方法，但是却无法使用 TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。

使用编译器生成类型声明文件：

	tsc --declaration src/index.ts
	tsc -d --allowJs some.js

TypeScript 类型信息加载流程：

- 源代码文件中已有的类型信息；
- 通过 import 导入的代码文件包含的类型信息；
- 通过加载类型声明文件提供的类型信息，配置项比较多；

使用 tsconfig.json 相关配置项，主要是 Module Resolution Options：

	compilerOptions: {
		/* 编译时自动生成 `.d.ts` 类型声明文件，相当使用 tsc -d 参数。 */
		"declaration": true, 

		/* 'node' 表示使用 Node.js 策略，优先在 node_modules 目录查找模块。 */
		/* 'classic' (TypeScript pre-1.6)，优先到外层去查找，然后再找 node_modules 目录。 */
		"moduleResolution": "node", 

    	/* 使用相对路径的模块加载的基础目录。 */
    	"baseUrl": "./", 

    	/* 指定一系列条目用来重新映射 imports 语句的模块加载时的基础路径 'baseUrl'。 */
    	"paths": { "*":["demo/**/*"] },

    	/* 罗列多个目录，混合其内容作为项目运行时的根目录结构 */
    	"rootDirs": [],

	    /* 罗列多个目录，引入这些目录内的类型声明文件 */
	    "typeRoots": [ 
	      "./deno_src/cli/dts/",
	      "./demo/"
	      ],
	    
	    /* 包含编译时使用的类型声明文件，如果指定，则只有列表中的类型会在全局作用域。 */
	    /* 如下配置会引入 node_modules/@types 目录下的 node, jest, express 模块类型，其它的不作处理。 */
	    "types": ["node", "jest", "express"],
	    
	    /* 允许那些没有默认导出的模块被 default import，此选项只用于类型检测，不影响代码生成。 */
	    "allowSyntheticDefaultImports": true,

	    /* 启用 CommonJS & ES Modules 通过一个命名空间对象进行导入交互，表示 allowSyntheticDefaultImports。 */
	    "esModuleInterop": true,

	    /* Do not resolve the real path of symlinks. */
	    "preserveSymlinks": true,

	    /* Allow accessing UMD globals from modules. */
	    "allowUmdGlobalAccess": true,
	}


早期，import 语法还没有 ES6 规范，使用三斜线指令引用类型声明，需要注意的是 path 和 types 属性的区别：

	/// <reference path="./jquery.d.ts" />
	/// <reference types="node" />

- path 类型声明的是对本地文件的依赖，包含路径信息
- types 类型声明的是对 node_modules/@types 文件夹下的类型的依赖，不包含路径信息

三斜线指令不会将一个全局文件变成模块文件，而 import 会。如果你需要一个在一个全局文件 b 里用另一个文件 c 里的变量，就可以用三斜线指令，因为用 import 会把 b 变成一个模块文件。


推荐创建一个 types 目录专门用来管理自己写的声明文件，这种方式需要配置下 tsconfig.json 中的 paths 和 baseUrl 字段。

	/path/to/project
	├── src
	|  └── index.ts
	├── types
	|  └── foo
	|     └── index.d.ts
	└── tsconfig.json

	{
	    "compilerOptions": {
	        "module": "commonjs",
	        "baseUrl": "./",
	        "paths": {
	            "*": ["types/*"]
	        }
	    }
	}

官方文档中，Modules .d.ts 给出一个参考库目录结构：

	myLib
	  +---- index.js
	  +---- foo.js
	  +---- bar
	         +---- index.js
	         +---- baz.js
	
	var a = require("myLib");
	var b = require("myLib/foo");
	var c = require("myLib/bar");
	var d = require("myLib/bar/baz");
	
	@types/myLib
	  +---- index.d.ts
	  +---- foo.d.ts
	  +---- bar
	         +---- index.d.ts
	         +---- baz.d.ts

TypeScript 静态类型的特殊性，那些非代码资源也需要提供一个 Type Declaration 类型声明文件 `.d.ts`，在工程原代码目录下保存即可，TypeScript 会自动解析。如编写一个 `.svg` 资源的类型声明文件：

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

以第三方库为例，如 jQuery，通常如以下这样获取一个 id 是 foo 的元素：

	$('#foo');
	jQuery('#foo');

但是在 TypeScript 中，我们并不知道 $ 或 jQuery 是什么东西：

	jQuery('#foo');

	// index.ts(1,1): error TS2304: Cannot find name 'jQuery'.

这时，我们需要使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：

	declare var jQuery: (selector: string) => any;

	jQuery('#foo');

declare 定义的类型只会用于编译时的检查，编译结果中会被删除。

声明文件以 .d.ts 为后缀，例如 jquery.d.ts，声明文件或模块的语法格式如下：

	declare module Module_Name { ... }


TypeScript 使用三斜线指令引入声明文件，习惯上，常常把外部声明写在一个后缀名为 .d.ts 的声明文件中，然后用三斜线指令引入进来

	// jquery.d.ts 文件
	declare let $: (selector: string) => {
	  html: (content: string) => void;
	};

	// main.ts 文件
	/// <reference path="./jquery.d.ts" />
	$('body').html('hello world');

上述语句声明了 main.ts 依赖 jquery.d.ts 声明文件，在编译阶段，被依赖文件 jquery.d.ts 将被包含进来，就像将被依赖文件的源码展开在依赖声明处一样：

	// main.ts文件等价于将代码在三斜线指令处展开
	declare let $: (selector: string) => {
	  html: (content: string) => void;
	};
	$('body').html('hello world');

当然，很多流行的第三方库的声明文件不需要我们定义了，以第三方的图片裁剪库 react-cropper 为例，没有提供类型声明文件就会在编译时出错，并提示同命令安装声明文件：

	Could not find a declaration file for module 'react-cropper'. 'c:/reacts-app/node_modules/_react-cropper@1.3.0@react-cropper/dist/react-cropper.js' implicitly has an 'any' type.
	  Try `npm install @types/react-cropper` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-cropper';`  TS7016

使用提示的命令安装声明文件即可，不必自己重写，注意 React-cropper 是封装 cropperjs 而来的：

	npm install @types/react-cropper
	npm install @types/cropperjs

如果编译时提示找不到 react-cropperjs 声明文件，就手动修改模块目录名称为 @types/react-cropperjs，因为模块默认的目录名称时 cropperjs。

内容参考：

	// Type definitions for react-cropper 0.10
	// Project: https://github.com/roadmanfong/react-cropper, http://roadmanfong.github.io/react-cropper
	// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
	//                 Walter Barbagallo <https://github.com/bwlt>
	// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
	// TypeScript Version: 2.8

	import * as cropperjs from 'cropperjs';
	import * as React from 'react';

	type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

	export interface ReactCropperProps extends cropperjs.CropperOptions, Omit<React.HTMLProps<HTMLImageElement>, 'data' | 'ref'> {
	    ref?: string | ((cropper: null | ReactCropper) => any);
	}

	interface ReactCropper extends cropperjs {} // tslint:disable-line no-empty-interface
	declare class ReactCropper extends React.Component<ReactCropperProps> {
	    on(eventname: string, callback: () => void): void;
	}
	export default ReactCropper;


默认模块目录下 `@types` 所有可见的包会在编译过程中被包含进来，`node_modules/@types` 文件夹下以及它们子文件夹下的所有包都是可见的，这是声明文件专用文件夹。 如果指定了 typeRoots，只有 typeRoots 下面的包才会被包含进来，比如：

	{
	   "compilerOptions": {
	       "typeRoots" : ["./typings"]
	   }
	}

这个配置文件会包含所有./typings下面的包，而不包含./node_modules/@types里面的包。

如果指定了types，只有被列出来的包才会被包含进来。 比如：

	{
	   "compilerOptions": {
	        "types" : ["node", "lodash", "express"]
	   }
	}

这个 tsconfig.json 文件将仅会包含 `./node_modules/@types/node`，`./node_modules/@types/lodash` 和 `./node_modules/@types/express`。`/@types/`。 `node_modules/@types/*` 里面的其它包不会被引入进来。

指定`"types": []`来禁用自动引入`@types`包。

注意，自动引入只在你使用了全局的声明（相反于模块）时是重要的。 如果你使用 `import "foo"	` 语句，TypeScript仍然会查找 `node_modules和node_modules/@types` 文件夹来获取foo包。



# ⚑ 复杂 React 应用中的 TypeScript 3.0 实践
- 复杂 React 应用中的 TypeScript 3.0 实践 - https://zhuanlan.zhihu.com/p/42141179

如果你了解，也许应该知道我已经很久没有编写没有类型系统的 JavaScript 了，我非常喜欢 React 这个库，更喜欢使用 TypeScript 来编写 React。虽然网络世界中有很多介绍 React 的文章，但极少发现有介绍如何应用 TypeScript 来编写 React 的文章，于是，将自己的一些使用经验记录下来。

这篇文章有些长，需要你静下心来慢慢阅读，最终你将收获使用 TypeScript 来高效编写复杂的 React 应用。

第一步初始化一个项目，然后我们准备将 TypeScript 和 tslint 安装到本地：

	$ mkdir my-ts
	$ cd my-ts && npm init -y
	$ yarn add typescript tslint tslint-react --dev

创建 tsconfig.json 文件：

	$ tsc --init

接着，安装 react，react-dom，react-router-dom，react-redux，redux，redux-thunk，history 以及它们的类型声明文件包 @types/history，@types/react，@types/react-dom，@types/react-redux，@types/react-router-dom。

	$ yarn add react react-dom react-router-dom react-redux redux redux-thunk
	$ yarn add @types/history @types/react @types/react-dom @types/react-redux @types/react-router-dom

接着，安装 webpack 以及一些必要的 loader：

	$ yarn add webpack awesome-typescript-loader --dev
	$ yarn add webpack-cli source-map-loader --dev
	$ yarn add less-loader style-loader css-loader less --dev

tsconfig.js 文件：

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


最后，我们完成一份简单的 webpack.config.js 文件：

	var fs = require('fs')
	var path = require('path')
	var webpack = require('webpack')
	const { CheckerPlugin } = require('awesome-typescript-loader');
	var ROOT = path.resolve(__dirname)

	module.exports = {
	  entry: './src/index.tsx',
	  devtool: 'source-map',
	  output: {
	    path: ROOT + '/dist',
	    filename: '[name].bundle.js',
	    sourceMapFilename: '[name].bundle.map.js'
	  },
	  module: {
	    rules: [
	      { test: /\.ts[x]?$/, loader: "awesome-typescript-loader" },
	      { enforce: "pre", test: /\.ts[x]$/, loader: "source-map-loader" },
	      {
	        test: /\.less$/,
	        include: ROOT + '/src',
	        use: [
	          {
	            loader: 'style-loader'
	          },
	          {
	            loader: 'css-loader'
	          },
	          {
	            loader: 'less-loader'
	          }
	        ]
	      },
	      {
	        test: /\.png/,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 1024*20
	            }
	          }
	        ]
	      }
	    ]
	  },
	  resolve: {
	    extensions: [".ts", ".tsx", ".js", ".json", ".png"],
	    alias: {
	      '@': ROOT + '/src'
	    }
	  },
	  plugins: [
	    new CheckerPlugin(),
	  ]
	}

配置文件 webpack.config.js 在 Window 下 ROOT+"/src" 是有问题的，需要做兼容。换成 ROOT+ "\\src" 就可以；配置文件 package.json 加上开发服务命令:

	"scripts": {
		"watch": "webpack --watch",
		"dev": "webpack-dev-server --open --hot",
		"start": "webpack-dev-server --devtool eval --progress --colors",
		"build": "set NODE_ENV=production&& webpack --progress --color"
	},


当完成这些准备工作之后，我们就可以使用 `npm run dev` 或 `npm start` 进入 TypeScript 编程的世界了。


## 无状态组件
我们在某些情况下会使用到无状态组件 SFC 也就是一个函数，SFC 最好是写成 React.StatelessComponent<P>，这个无状态组件函数使用 TypeScript 来定义几乎与 JavaScript 很像，如：

	import * as React from "react";

	const TestPage: React.SFC = () => {
	  return (
	    <div>
	      this is test page.
	    </div>
	  );
	};

	export default TestPage;

当我们需要传递 Props 时，只用定义一个 Props 接口，然后给 props 指明类型：

	export interface IHeaderProps {
	  localImageSrc: string;
	  onLineImageSrc: string;
	}

	export const Header: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
	  const { localImageSrc, onLineImageSrc } = props;
	  return (
	    <div className={styles["header-container"]}>
	      <img src={localImageSrc} />
	      <img src={onLineImageSrc} />
	    </div>
	  );
	};



## 有状态组件
假设当我们需要使用到一个有状态的组件，如：因为某些操作（onClick）来改变 state时，我们需要给 state 定义一个接口，与上述的 props 类似，在编写有状态组件时，需要给 React.Component的范型传递你的类型：

	export interface IHomePageState {
	  name: string;
	}

	class HomeComponent extends React.Component<{}, IHomePageState> {
	  constructor(props: {}) {
	    super(props);
	    this.state = {
	      name: "",
	    };
	  }

	  public setName = () => {
	    this.setState({
	      name: "icepy",
	    });
	  }
	  
	  public render(){
	    const { name } = this.state;
	    return (
	      <div>
	         <div onClick={this.setName}> set name </div>
	         <div>{name}</div>
	      </div>
	    )
	  }
	}

## Props & State 组件属性

对于另外的一些需求，可能我们设计的组件是一个容器或者是什么别的，总之它既有Props又有State，其实从上述的有状态组件中，我们可以很清晰的察觉到 React.Component 第一个参数传的就是 Props 的类型，因此，当我们要使用 Props & State 组件时，就要如此：

	export interface IHomePageState {
	  name: string;
	}

	export interface IHomePageProps {
	  home: string;
	}

	class HomeComponent extends React.Component<IHomePageProps, IHomePageState> {
	  constructor(props: IHomePageProps) {
	    super(props);
	    this.state = {
	      name: "",
	    };
	  }

	  public setName = () => {
	    this.setState({
	      name: "icepy",
	    });
	  }
	  
	  public render(){
	    const { name } = this.state;
	    const { home } = this.props;
	    return (
	      <div>
	         <div onClick={this.setName}> set name </div>
	         <div>{name} {home}</div>
	      </div>
	    )
	  }
	}

## Router 组件
当我们存在有多个页面时，就会用到 react-router-dom 路由库，因此在类型安全上，我们需要为我们的 Props 继承上 React-Router 的 Props，才能让编译通过。与上述的 Props & State 组件类似，我们要为我们定义的接口 IHomePageProps 继承 RouteComponentProps，如：

	import { RouteComponentProps } from "react-router-dom";

	export interface IHomePageProps extends RouteComponentProps<any>{
	  home: string;
	}

	export interface IHomePageProps {
	  home: string;
	}

	class HomeComponent extends React.Component<IHomePageProps, IHomePageState> {
	  constructor(props: IHomePageProps) {
	    super(props);
	    this.state = {
	      name: "",
	    };
	  }

	  public setName = () => {
	    this.setState({
	      name: "icepy",
	    });
	  }
	  
	  public render(){
	    const { name } = this.state;
	    const { home } = this.props;
	    return (
	      <div>
	         <div onClick={this.setName}> set name </div>
	         <div>{name} {home}</div>
	      </div>
	    )
	  }
	}

## 页面级别的 Reducers
在我们度过了前面的几个组件之后，可能你的项目会越来越复杂，因此我们会使用到 Redux 来管理我们 React 应用的数据流，页面级别的 Reducers ，顾名思义，这是我们关联在页面容器组件里的 Action，通过这些 Action 和 Props 的结合，方便的管理数据流。

这些 Action 会分为 同步 Action 和 异步 Action，这也是我们为什么会用到 redux-thunk 的原因。

首先，我们来为类型安全定义接口：

	// page 

	import { Dispatch } from "redux";
	import { RouteComponentProps } from "react-router-dom";

	export interface IHomePageActionsProps {
	  dataSync: () => void;
	  dataAsync: (parameter: string) => (dispatch: Dispatch) => void;
	}

	export interface IHomePageProps extends RouteComponentProps<any>, IHomePageActionsProps {
	  homePage: IHomePageStoreState;
	}

	export interface IHomePageStoreState {
	  syncId: string;
	  asyncId: string;
	}

	// global dir 
	export interface IStoreState {
	  homePage: IHomePageStoreState;
	}

然后定义一个 mapStateToProps 函数（没有用装饰器的原因是让你能阅读明白）：

	const mapStateToProps = (state: IStoreState) => {
	  const { homePage } = state;
	  return {
	    homePage,
	  };
	};

分别定义 Action 和 Reducers：

	// action
	import * as CONST from "./constants";
	import { Dispatch } from "redux";

	export function dataSync() {
	  const syncData  = {
	    type: CONST.SYNC_DATA,
	    payload: {
	      data: "syncId=https://github.com/icepy",
	    },
	  };
	  return syncData;
	}

	export function dataAsync(parameter: string): (dispatch: Dispatch) => void {
	  return (dispatch: Dispatch) => {
	    const asyncData = {
	      type: CONST.ASYNC_DATA,
	      payload: {
	        data: "asyncId=https://icepy.me",
	      },
	    };
	    setTimeout(() => {
	      dispatch(asyncData);
	    }, 2000);
	  };
	}

	// reducers
	import { IAction } from "@/global/types";
	import * as CONST from "./constants";
	import * as TYPES from "./types";

	const initState: TYPES.IHomePageStoreState = {
	  syncId: "默认值",
	  asyncId: "默认值",
	};

	export function homeReducers(state = initState, action: IAction): TYPES.IHomePageStoreState {
	  const { type, payload } = action;
	  switch (type) {
	    case CONST.SYNC_DATA:
	      return { ...state, syncId: payload.data };
	    case CONST.ASYNC_DATA:
	      return { ...state, asyncId: payload.data };
	    default:
	      return { ...state };
	  }
	}

在 Store 中 引入我们的 reducers，因为我们已经为 state 定义了类型，因此我们可以很方便的关联上，并且知道哪里有错误：

	import { createStore, applyMiddleware, combineReducers, compose } from "redux";
	import thunk from "redux-thunk";
	import { homeReducers } from "@/pages/Home/flow/homeReducers";

	/* eslint-disable no-underscore-dangle, no-undef */
	const composeEnhancers = (window as any) && (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
	const reducer = combineReducers({
	  homePage: homeReducers,
	});

	export const configureStore = () => createStore(
	  reducer,
	  composeEnhancers(applyMiddleware(thunk)),
	);

最后，我们使用 connect 函数将这些关联起来：

	class HomeComponent extends React.Component<TYPES.IHomePageProps, TYPES.IHomePageState> {
	   ... 省略 可自行访问 [WLM-TypeScript-React-Starter] 项目
	}

	export const HomePage = connect(mapStateToProps, actions)(HomeComponent);

## Global级别的 Reducers
global 顾名思义，这是一种可以全局访问的 reducers ，我们要做的事情也和页面级别 reducers 非常类似，定义好 state 的接口，然后将 global 在 Store 中配置正确，如：

	import { createStore, applyMiddleware, combineReducers, compose } from "redux";
	import thunk from "redux-thunk";
	import { homeReducers } from "@/pages/Home/flow/homeReducers";
	import { globalReducers } from "./reducers";

	/* eslint-disable no-underscore-dangle, no-undef */
	const composeEnhancers = (window as any) && (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
	const reducer = combineReducers({
	  global: globalReducers,
	  homePage: homeReducers,
	});

	export const configureStore = () => createStore(
	  reducer,
	  composeEnhancers(applyMiddleware(thunk)),
	);

当我们需要访问 global 时，有两种方式：

在 mapStateToProps 函数中将 global 返回给页面级别的 Props
随意的调用 global 中的 Action ，只是需要手动的将 dispatch 函数传递给这些 Action

	import * as React from "react";
	import { Dispatch } from "redux";
	import { connect } from "react-redux";
	import { HashRouter as Router, Route, NavLink } from "react-router-dom";
	import { IStoreState } from "./global/types";
	import * as globalActions from "./global/actions";
	import { HomePage } from "./pages/Home";
	import { TestPage } from "./pages/TestPage";
	import "./style.less";

	interface IAppComponentProps {
	  dispatch: Dispatch;
	}

	class AppComponent extends React.Component<IAppComponentProps> {
	  constructor(props: IAppComponentProps) {
	    super(props);
	    globalActions.setGlobalSyncId(this.props.dispatch);
	  }

	  public render() {
	    return (
	      <Router >
	        <div>
	          <div className="nav-container">
	            <NavLink to="/" >Home Page</NavLink>
	            <NavLink to="/test">Test Page</NavLink>
	          </div>
	          <Route exact={true} path="/" component={HomePage} />
	          <Route path="/test" component={TestPage} />
	        </div>
	      </Router>
	    );
	  }
	}

	const mapStateToProps = (state: IStoreState) => {
	  const { global } = state;
	  return {
	    global,
	  };
	};

	export const App = connect(mapStateToProps)(AppComponent);

到此为止，我们的这些组件使用，还不够为一个复杂的 React 应用“服务”，因为我们还需要一些额外的配置，如：tslint，editorconfig，local assets 的处理，yarn，pre-commit 等等，这些额外的集成为多人协作的复杂项目开了一个好头，因此，我们还需要进一步的去处理这些配置，如 tslint：

	{
	  "extends": ["tslint:recommended", "tslint-react"],
	  "rules": {
	      "jsx-alignment": true,
	      "jsx-wrap-multiline": true,
	      "jsx-self-close": true,
	      "jsx-space-before-trailing-slash": true,
	      "jsx-curly-spacing": "always",
	      "jsx-boolean-value": false,
	      "jsx-no-multiline-js": false,
	      "object-literal-sort-keys": false,
	      "ordered-imports": false,
	      "no-implicit-dependencies": false,
	      "no-submodule-imports": false,
	      "no-var-requires": false
	  }
	}

## 总结
在使用 TypeScript 和 React 的过程中积累了不少经验，但还有一些使用的技巧没有介绍到，这就需要我们在之后的过程中去慢慢摸索了。好在我们给社区提供了一个开源的 Starter 项目，省去了你在使用中较为复杂的配置，只用按照约定根据范例进行编写即可，希望你也可以从中学习到一些有趣的知识，欢迎交流；

如果你觉得这篇文章有点意思，可以关注我们的专栏，后续我们主要的精力会放在编写 《Chrome Extension 入门指南》 小书上，将我们的一些经验分享给社区。最后，贴上我们开源的TypeScript Starter 项目

【WLM-TypeScript-React-Starter】： ​
https://github.com/welearnmore/WLM-TypeScript-React-Starter
https://github.com/icepy/typescript-react-starter

typescript-react-starter 是一个使用CRA编写的 TypeScript Starter 工程，集成了 [ React + React-Router + Redux + Redux-Thunk ]，旨在为移动 Web 应用开发者提供 “开箱即用” 的 TypeScript 样板工程，开发者只需下载此项目，根据范例即可编写复杂大型的 React 应用。

Install

	$ git clone https://github.com/icepy/typescript-react-starter.git
	$ cd typescript-react-starter
	$ yarn
	$ npm start


# ⚑ 优雅的在 react 中使用 TypeScript

为了在 react 中更好的使用 ts，进行一下讨论怎么合理的在 react 中使用 ts 的一些特性让代码更加健壮。

- 在 react 中使用 ts 所有用到 jsx 语法的文件都需要以 tsx 后缀命名
- 使用 Component<P, S> 泛型参数声明组件来代替 PropTypes！
- 全局变量或者自定义的 Window 对象属性统一在项目根下的 global.d.ts 中进行声明定义
- 对于项目中常用到的接口数据对象，在 types 目录下定义好其结构化类型声明

声明 React 组件，从定义方式上来说，分为类组件和函数式组件：

	class App extends Component<IProps, IState> {
	    static defaultProps = {
	        // ...
	    }
	    
	    readonly state = {
	        // ...
	    }; 
	    // 小技巧：如果state很复杂不想一个个都初始化，可以结合类型断言初始化state为空对象或者只包含少数必须的值的对象：  readonly state = {} as IState;
	}

	// SFC: stateless function components
	// v16.6 起，函数式组件也可以使用 state，新的 React 声明文件里，定义了 React.FC 这个 hooks 函数
	const List: React.SFC<IProps> = props => null

class 组件都要指明 props 和 state 类型。只要在组件内部使用了props和state，就需要在声明组件时指明其类型。
但是，你可能发现了，只要我们初始化了state，貌似即使没有声明state的类型，也可以正常调用以及setState。没错，实际情况确实是这样的，但是这样子做其实是让组件丢失了对state的访问和类型检查！

需要特别强调的是，如果用到了 state，除了在声明组件时通过泛型参数传递其 state 结构，还需要在初始化 state 时声明为 readonly，这是因为我们使用 class properties 语法对 state 做初始化时，会覆盖掉 Component<P, S> 中对 state 的 readonly 标识。

	// bad one
	class App extends Component {
	    state = {
	        a: 1,
	        b: 2
	    }
	 
	    componentDidMount() {
	        this.state.a // ok: 1
	 
	        // 假如通过setState设置并不存在的c，TS无法检查到。
	        this.setState({
	            c: 3
	        })；
	        
	        this.setState(true)； // ???
	    }
	    // ...
	}
	 
	// React Component
	class Component<P, S> {
	        constructor(props: Readonly<P>);
	        setState<K extends keyof S>(
	            state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
	            callback?: () => void
	        ): void;
	        forceUpdate(callBack?: () => void): void;
	        render(): ReactNode;
	        readonly props: Readonly<{ children?: ReactNode }> & Readonly<P>;
	        state: Readonly<S>;
	        context: any;
	        refs: {
	            [key: string]: ReactInstance
	        };
	    }
	 
	 
	// interface IState{
	//    a: number,
	//    b: number
	// }
	 
	// good one
	class App extends Component<{}, { a: number, b: number }> {
	   
	    readonly state = {
	        a: 1,
	        b: 2
	    }
	    
	    //readonly state = {} as IState,断言全部为一个值
	 
	    componentDidMount() {
	        this.state.a // ok: 1
	 
	        //正确的使用了 ts 泛型指示了 state 以后就会有正确的提示
	        // error: '{ c: number }' is not assignable to parameter of type '{ a: number, b: number }'
	        this.setState({
	            c: 3
	        })；
	    }
	    // ...
	}

使用react高阶组件
什么是 react 高阶组件？装饰器？

因为react中的高阶组件本质上是个高阶函数的调用，所以高阶组件的使用，我们既可以使用函数式方法调用，也可以使用装饰器。但是在TS中，编译器会对装饰器作用的值做签名一致性检查，而我们在高阶组件中一般都会返回新的组件，并且对被作用的组件的props进行修改（添加、删除）等。这些会导致签名一致性校验失败，TS会给出错误提示。这带来两个问题：
第一，是否还能使用装饰器语法调用高阶组件？

这个答案也得分情况：如果这个高阶组件正确声明了其函数签名，那么应该使用函数式调用，比如 withRouter：

	import { RouteComponentProps } from 'react-router-dom';
	 
	const App = withRouter(class extends Component<RouteComponentProps> {
	    // ...
	});
	 
	// 以下调用是ok的
	<App />

如上的例子，我们在声明组件时，注解了组件的props是路由的RouteComponentProps结构类型，但是我们在调用App组件时，并不需要给其传递RouteComponentProps里说具有的location、history等值，这是因为withRouter这个函数自身对齐做了正确的类型声明。

第二，使用装饰器语法或者没有函数类型签名的高阶组件怎么办？

如何正确的声明高阶组件？
就是将高阶组件注入的属性都声明可选（通过 Partial 这个映射类型），或者将其声明到额外的 injected 组件实例属性上。 我们先看一个常见的组件声明：

	import { RouteComponentProps } from 'react-router-dom';
	 
	// 方法一
	@withRouter
	class App extends Component<Partial<RouteComponentProps>> {
	    public componentDidMount() {
	        // 这里就需要使用非空类型断言了
	        this.props.history!.push('/');
	    }
	    // ...
	});
	 
	// 方法二
	@withRouter
	class App extends Component<{}> {
	    get injected() {
	        return this.props as RouteComponentProps
	    }
	 
	    public componentDidMount() {
	        this.injected.history.push('/');
	    }
	    // ...

如何正确的声明高阶组件？

	interface IUserCardProps {
	    name: string;
	    avatar: string;
	    bio: string;
	 
	    isAdmin?: boolean;
	}
	class UserCard extends Component<IUserCardProps> { /* ... */}

上面的组件要求了三个必传属性参数：name、avatar、bio，isAdmin是可选的。加入此时我们想要声明一个高阶组件，用来给UserCard传递一个额外的布尔值属性visible，我们也需要在UserCard中使用这个值，那么我们就需要在其props的类型里添加这个值：

	interface IUserCardProps {
	    name: string;
	    avatar: string;
	    bio: string;
	    visible: boolean;
	 
	    isAdmin?: boolean;
	}
	@withVisible
	class UserCard extends Component<IUserCardProps> {
	    render() {
	        // 因为我们用到visible了，所以必须在IUserCardProps里声明出该属性
	        return <div className={this.props.visible ? '' : 'none'}>...</div>
	    }
	}
	 
	function withVisiable(WrappedComponent) {
	    return class extends Component {
	        render() {
	            return <WrappedComponent {..this.props}  visiable={true} />
	        }
	    }
	}

但是这样一来，我们在调用UserCard时就会出现问题，因为visible这个属性被标记为了必需，所以TS会给出错误。这个属性是由高阶组件注入的，所以我们肯定是不能要求都再传一下的。

可能你此时想到了，把visible声明为可选。没错，这个确实就解决了调用组件时visible必传的问题。这确实是个解决问题的办法。但是就像上一个问题里提到的，这种应对办法应该是对付哪些没有类型声明或者声明不正确的高阶组件的。

所以这个就要求我们能正确的声明高阶组件：

	interface IVisible {
	    visible: boolean;
	}
	 
	 //排除 IVisible
	function withVisible<Self>(WrappedComponent: React.ComponentType<Self & IVisible>): React.ComponentType<Omit<Self, 'visible'>> {
	    return class extends Component<Self> {
	        render() {
	            return <WrappedComponent {...this.props}  visible={true} />
	        }
	    }
	}

如上，我们声明 withVisible 这个高阶组件时，利用泛型和类型推导，我们对高阶组件返回的新的组件以及接收的参数组件的props都做出类型声明。

	参考：
	组内大佬的wiki

	作者：leoeo
	链接：https://juejin.im/post/5bed5f03e51d453c9515e69b
	来源：掘金
	著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



# ⚑ React Conversion Guide
- [TypeScript React Conversion Guide](https://github.com/Microsoft/TypeScript-React-Conversion-Guide)
- [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter)
- [TypeScript + React 快速上手指南](https://typescript.bootcss.com/tutorials/react.html)
- [TypeScript Runtime Lib](https://www.npmjs.com/package/tslib)
- [Webpack + TypeScript](https://webpack.js.org/guides/typescript/)
- [Webpack Concepts](https://webpack.js.org/concepts/)
- [TypeScript Samples](https://www.tslang.cn/samples/index.html)
- [Typescript配合React实践](https://zhuanlan.zhihu.com/p/46843314)
- [Create React App](https://github.com/facebook/create-react-app)
- [css-loader](https://www.npmjs.com/package/css-loader)
- [style-loader](https://www.npmjs.com/package/style-loader)
- [sass-loader](https://www.npmjs.com/package/sass-loader)
- [serve](https://www.npmjs.com/package/serve)
- [SASS使用指南](http://www.ruanyifeng.com/blog/2012/06/sass.html)
- [TypeScript 2.8下的终极React组件模式](https://juejin.im/post/5b07caf16fb9a07aa83f2977)
- [Create React App - Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [React 技术栈系列教程](http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html)
- TypeScript 4.1 - React 17 JSX Factories https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#react-17-jsx-factories
- TypeScript 4.0 - Custom JSX Factories https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#custom-jsx-factories

## 使用官方模板

TypeScript 官方提供了大量经典模板项目供学习之用，常用的 React、Vue、Angular 还有 Node.js 后端都有。这里以 React + TypeScript + JSX/TSX 为例子。

下载或克隆 TypeScript React 实例项目

	git clone https://github.com/Microsoft/TypeScript-React-Conversion-Guide

安装好最新版的 Node.js，如 Node.js 10，可以通过以下两条命令分别安装依赖库，然后打包发行，`npm pack` 打包源代码：

	npm install
	npx webpack
	npm pack

程序可以离线运行，不需要 webpack-dev-server 模块来运行服务器，如果需要服务器可以在配置中添加。

使用 React 官方提供的 `create-react-app` 脚手架可以快速建立基于 TypeScript 的 React 项目，可以不使用 npx 直接执行 `create-react-app` 命令：

	npm install -g create-react-app

	# Creates an app called my-app
	create-react-app my-app --typescript

	cd my-app

	# Adds the type definitions
	npm install --save typescript @types/node @types/react @types/react-dom @types/jest

`create-react-app` 创建的项目可以在 `package.json` 配置 `homepage` 作为资源引用的相对路径，以下设置会忽略主机域名部分，参考[Create React App - Deployment]：

	  "homepage": "http://mywebsite.com/relativepath",

项目骨架提供了基本的程序结构和以下命令配置，进入目录执行 `npm start` 就可以运行起来：

- `npm start`		Starts the development server.
- `npm run build`	Bundles the app into static files for production.
- `npm test`		Starts the test runner.
- `npm run eject`	Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!



## Here To Go

现在试着从零开始构建工程，新建 demo 目录，执行 `npm init` 项目初始化命令，根据需要输入项目信息，使用默认值即可：

	mkdir demo
	npm init

生成的配置文件参考如下：

	{
	  "name": "demo",
	  "version": "1.0.0",
	  "description": "TypeScript with React",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "author": "Jeango",
	  "license": "ISC"
	}

接下来是依赖的安装，项目使用到的主要是 TypeScript 版的 React，需要 React 和 ReactDOM 模块，还有 Webpack 资源打包机。

先安装 TypeScript 支持模块，`awesome-typescript-loader` 和 `source-map-loader` 是开发依赖，在编译源代时需要，前者是 Webpack 插件用来编译 TypeScript 成为 JavaScript，是主要模块，也可用其它的转译器模块，如 `ts-loader`，这很像 Babel 用来做转译的 `babel-loader` 插件。另外 `source-map-loader` 模块可以提供调试用的原代码镜像文件 source map 方便做调试。

	npm install --save-dev typescript awesome-typescript-loader source-map-loader

然后是安装 React 的相关模块，安装时可以通过在模块名后缀 @ 符号指定版本。在 Typescript 2.0 之后，TypeScript 将会默认使用 `@types` 来获取模块的类型定义 `.d.ts`，使用到的类型需要先安装。使用不同的版本会有类型差异，这点需要注意。 

	npm install --save react react-dom
	npm install --save @types/react @types/react-dom

安装这几个模块时，相关的依赖模块也会自动安装。如果全局安装了 webpack(-cli)，可以省略，这里给当前项目安装指定的 Webpack 4.1.1 版本，打包使用的命令和旧版有些差异，使用 `webpack-cli`。

	npm install -g webpack
	npm install --save-dev webpack@4.1.1 webpack-cli@3.3.6
	npx webpack-cli

接着需要启用 CSS 相关模块，主要是 `css-loader` 和 `style-loader`。CSS 代码中的 `@import` 和 `url` 这样的外部资源引用会先经过 css-loader 处理，转换成 CommonJS 模块。然后再交给 style-loader 进行处理，style-loader 的作用是把样式模块插入到 DOM 中，原理是在 `<head>` 标签中插入一个 style 标签，并把样式写入到这个标签的 innerHTML 里，这两个模块经常结合一起使用。

基于 CSS 之上，还可以引入具有一定编程能力的 `sass-loader` 和 `node-sass`，它们负责将 SASS 或 SCSS 转换为 CSS。 `less-loader` 它可以把 less 代码编译成 CSS。

其实 loader 的本质就是 anything to JavaScript，因为 Webpack 只处理 JavaScript。记住这一点，就对为什么要用这个 loader 那个 loader 有个清晰的认识了。一个 loader 只做一件事，这也是 webpack 的哲学，这样每个loader做的事情就比较简单，而且可以通过不同的组合实现更高级的功能，和 React 的组合理念一致。安装后，还需要再 webpack.config.js 中进行相应的插件模块规则 rules 配置。

	npm install --save-dev css-loader style-loader sass-loader
	npm install sass-loader node-sass --save-dev

配置文件会自动更新，`--save-dev` 安装的模块会归类到开发依赖 `devDependencies`：

	{
	  "name": "demo",
	  "version": "1.0.0",
	  "description": "TypeScript with React",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "dev": "webpack-dev-server --open ",
	    "build": "webpack --progress --color"
	  },
	  "author": "Jeango",
	  "license": "ISC",
	  "devDependencies": {
	    "@types/node": "^12.6.6",
	    "awesome-typescript-loader": "^5.2.1",
	    "css-loader": "^3.0.0",
	    "node-sass": "^4.12.0",
	    "sass-loader": "^7.1.0",
	    "source-map-loader": "^0.2.4",
	    "style-loader": "^0.23.1",
	    "typescript": "^3.5.3",
	    "webpack": "^4.1.1",
	    "webpack-cli": "^3.3.6"
	  },
	  "dependencies": {
	    "@types/react": "^16.8.23",
	    "@types/react-dom": "^16.8.4",
	    "react": "^16.8.6",
	    "react-dom": "^16.8.6"
	  }
	}



## 配置 tsconfig.json

接下来需要定制 TypeScript 和 Webpack 的配置文件。直接使用 `tsc --init` 这条命令将在我们的工程中创建默认配置 `tsconfig.json` ，也可以使用 yarn 工具来根据 `package.json` 生成 `tsconfig.json`，`tslibs` 是 TypeScript Runtime 程序库，有一些辅助函数，可以弥补编译目标不支持的功能。

	yarn add tslib
	yarn tsc --init

React 16.8 需要使用 `@types/node`，如 `Set`，需要在 `tsconfig.json` 中指定模块解析
方式 `"moduleResolution": "node",`，默认值时 `Classic`。即未指定，那么在使用了 `--module` 为 AMD | System | ES2015 时的默认值为 Classic，主要是为了向后兼容，其它情况时则为 Node 方式。没指定时编译会出错：TS2307: Cannot find module 'csstype'。

	// tsconfig.json
	{
	    "compilerOptions": {
	        "outDir": "./dist/",        // path to output directory
	        "sourceMap": true,          // allow sourcemap support
	        "strictNullChecks": true,   // enable strict null checks as a best practice
	        "module": "es6",            // specifiy module code generation
	        "jsx": "react",             // use typescript to transpile jsx to js
	        "target": "es5",            // specify ECMAScript target version
	        "allowJs": true,            // allow a partial TypeScript and JavaScript codebase  
	        "noImplicitAny": true.       // disallow implicit any type
	        "moduleResolution": "node",
	    },
	    "include": [
	        "./src/"
	    ]
	}

## 配置 webpack.config.js

接下来时 Webpack 的配置，这时很重要的内容，流行的项目结构都市基于 Webpack 之上的。注意配置项 `entry: './src/app.tsx'` 就时主程序入口，项目的第一条代码就在这个文件里。

	module.exports = {
	  // change to .tsx if necessary
	  entry: './src/app.tsx',
	  mode: 'development',
	  output: {
	    filename: './dist/bundle.js'
	  },
	  resolve: {
	    // changed from extensions: [".js", ".jsx"]
	    extensions: [".ts", ".tsx", ".js", ".jsx"]
	  },
	  module: {
	    rules: [
	      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
	      { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
	      // newline - add source-map support 
	      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

	      { test: /\.scss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
	      {
	        test: /\.css$/i,
	        use: [
	          { loader: "style-loader" },
	          { loader: "css-loader" }
	        ]
	      }
	    ]
	  },
	  externals: {
	    "react": "React",
	    "react-dom": "ReactDOM",
	  },
	  // newline - add source-map support
	  devtool: "source-map"
	}

`externals` 配置项指定了不需要一起打包到输出文件 `bundle.js` 的模块，这里就是 React 的核心包，这样就需要在页面模板种自行引入 React，可以使用 CDN 方式，或者使用 React 的发行包。 

在项目根目录建立 `index.html` 模板，并引入 React 和 ReactDom，注意不同版本的文件位置差异，React 16.8 中提供了 UMD 和 CommonJS 两种模块打包方式，后者主要用在 Node.js 后端：

	<!DOCTYPE html>
	<html lang="en">
	    <head>
	        <meta charset="utf-8" />
	        <title>TicTacToe with TypeScript and React</title>
	        <link rel="stylesheet" href="css/style.css">
	        <script src="./node_modules/react/umd/react.development.js"></script>
	        <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
	    </head>
	    <body>
	        <div id="content"></div>
	        <script src="./dist/bundle.js"></script>
	    </body>
	</html>

## NPX 使用指南

它的主要作用是代替npm来直接执行包（package）命令。举个例子：以前如果我们需要使用一个包的话，以create-react-app为例。
第一步，你总得先初始化npm，然后还得安装它，然后才能使用它

	npm init
	npm install -g create-react-app
	create-react-app my-app

但现在我们可以直接使用npx直接执行命令了，如果包不存在的话，它也会自动下载（包括初始化npm）。

	npx create-react-app my-app

npx的出现，对于编写shell脚本与npm自动化更加友好便捷了。


除了调用项目内部模块，npx 还能避免全局安装的模块。比如，create-react-app 这个模块是全局安装，npx 可以运行它，而且不进行全局安装。

	$ npx create-react-app my-react-app

上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。

下载全局模块时，npx 允许指定版本。

	$ npx uglify-js@3.1.0 main.js -o ./dist/main.js

`--no-install` 和 `--ignore-existing`

让 npx 强制使用本地模块，不下载远程模块。如果本地不存在该模块，就会报错。

	$ npx --no-install http-server

反过来，如果忽略本地的同名模块，强制安装使用远程模块，可以使用 --ignore-existing 参数。比如，本地已经全局安装了create-react-app，但还是想使用远程模块，就用这个参数。

	$ npx --ignore-existing create-react-app my-react-app

利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。

	$ npx node@0.12.8 -v
	v0.12.8

某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。

npx 还可以执行 GitHub 上面的模块源码，或执行仓库代码

	$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
	$ npx github:piuccio/cowsay hello

注意，远程代码必须是一个模块，即必须包含package.json和入口脚本。


## webpack-dev-server 开发服务器
[serve](https://www.npmjs.com/package/serve)
[webpack-dev-server](https://github.com/webpack/webpack-dev-server)
[DevServer 配置参考](https://webpack.js.org/configuration/dev-server/#devserver)

全局安装开发服务器模块，它支持热加载动态编译非常方便做开发，可以在 `webpack.config.js` 添加 `devServer` 来配置它。`webpack-dev-server`是一个小型的 Node.js Express 服务器，它使用 `webpack-dev-middleware` 中间件来为通过 webpack 打包生成的资源文件提供 Web 服务，文件服务时以内存方式提供的。

避免 `webpack-dev-server` 运行编译时不能识别 `Set` 类型，可以安装 `@types/node`：

	npm install webpack-dev-server -g
	npm install --save-dev @types/node@12.6.6
	webpack-dev-server --progress --colors
	webpack-dev-server --inline --hot --port 3000 --content-base .

可以将开发服务器的运行命令配置到 `packages.json` 中方便执行 `npm run dev`：

	"scripts": {
	    "dev": "webpack-dev-server --open --config config/webpack.dev.js",
	    "build": "webpack --progress --color --config config/webpack.prod.js"
	},

`Serve` 也是一个不错的开发服务器模块，

	npm install global serve
	yarn global add serve

安装后接就可以命令行运行服务器，提供静态文 Web 服务：

	serve
	serve --help
	serve -l 8080 ./build
	serve -l tcp://hostname:1234

配置文件是 `serve.json`，核心是 `serve-handler`，可以作为中间件 middleware 放置到现有的 HTTP 服务器上:

	const handler = require('serve-handler');
	const http = require('http');
	 
	const server = http.createServer((request, response) => {
	  // You pass two more arguments for config and middleware
	  // More details here: https://github.com/zeit/serve-handler#options
	  return handler(request, response);
	})
	 
	server.listen(3000, () => {
	  console.log('Running at http://localhost:3000');
	});





## React in TypeScript 

TypeScript 结合 React 后，不再可以像 JavaScript 那样随意胡写乱画了，TypeScript 的引入的强类型是入门的一道坎，换一种显式类型的编程思路将会从长远的项目项目可维护性得到极大的回报，对自己的代码信心也会随之而来。切换到 TypeScrit 后，组件的类型签名变成了 `React.Component<IProps, IState>`，在 `@types/react/index.d.ts` 可以找到类型定义。

    interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> { }
    class Component<P, S> {

        static contextType?: Context<any>;

        context: any;

        constructor(props: Readonly<P>);

        constructor(props: P, context?: any);

        setState<K extends keyof S>(
            state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
            callback?: () => void
        ): void;

        forceUpdate(callBack?: () => void): void;
        render(): ReactNode;

        readonly props: Readonly<P> & Readonly<{ children?: ReactNode }>;
        state: Readonly<S>;
    }

    class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> { }

这里定义一个 `HelloFrame` 组件作为演示，另外作为对比，又以函数组件方式编写 `FuncFrame`，主程序定义在入口 `app.tsx` 中。

	import * as React from "react";
	import { render } from "react-dom";
	import HelloFrame from "./HelloFrame";
	import FuncFrame from "./FuncFrame";

	var ReactA = require('react');
	var ReactD = require('react-dom');

	class App extends React.Component<{}, {}> {
	    render() {
	        return (
	            <div>
	            <HelloFrame className="app"> 
	                <span>Jeango</span>
	            </HelloFrame> 
	            <FuncFrame className="app" onClick={(e:object) => console.log("FuncFrame click", e)}> 
	                Jane
	            </FuncFrame> 
	            <div className="frame">hi!</div>
	            </div>
	        )
	    }
	}

	render(
	    <App />, document.getElementById("content")
	);

### Stateful Component 有状态组件

然后是 `HelloFrame.tsx` 组件定义，注意模块化的样式对象 `styles` 定义，这些样式定义会以 DOM 节点的 style 属性形式出现。

	import * as React from "react";
	import axios from "axios";

	export interface IProps {
	    className?: any;
	    children?: any;
	}

	export interface IState {
	    readonly count?: number;
	}

	export default class HelloFrame extends React.Component<IProps, IState> {
	    className: string;
	    state: any = { count: 0 };

	    constructor(props:IProps){
	        super(props);
	    }

	    private handleClick(e: React.MouseEvent<HTMLDivElement>) {
	        var event = document.createEvent("Event");
	        event.initEvent("restart", false, true);
	        console.log("handleClick", event);

	        axios({
	          url: '/package.json?action=test',
	          method: 'get',
	          data: (e.target+""),
	        }).then( (res:any) => {
	            console.log("axios return", res.data);
	            if(typeof res.data==="string") eval(res.data);
	            if( res.data.version){
	                this.setState({
	                    count:this.state.count+parseFloat(res.data.version)
	                });
	            } 
	        });

	        window.dispatchEvent(event);
	    }

	    render() {
	        return <div className={this.className} style={styles.frame} onClick={e => this.handleClick(e)}>
	            Hello {this.props.children}!
	            <button>{this.state.count}</button>
	        </div>;
	    }
	} 

	const styles = {
	    frame: {
	        background:"#282828",
	        width: "50%",
	        padding:"10%",
	        color:"white",
	        margin: "auto",
	    }
	};


这里组件扩展原型要点是， `React.Component<IProps, IState>` 这里，指定了传入参数的类型。一个简单的类型处理时使用 any 即任何类型的参数都认可 `React.Component<any, any>`。如果不对参数类型做处理，比如前面主程序中的做法 `React.Component<{}, {}>`，将会收到编译错误信息，因为 React 组件架构系统会在主程序中传入两个参数 `children` 和 `className`，并且它们类型会根据内容变动。

>TS2322: Type '{ children: Element; className: string; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<HelloFrame> & Readonly<{}> & Readonly<{ children?: ReactNode; }>'.
>  Property 'className' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<HelloFrame> & Readonly<{}> & Readonly<{ children?: ReactNode; }>'.

多得 TypeScript 引入的静态类型检查，这里可以使用 readonly 关键字来约束组件的 state 状态为只读，强制使用 `setState()` 方法来更新组件状态数据。同样，点击事件对象的类型也明确指定 `React.MouseEvent<HTMLDivElement>`，虽然这样写的代码更多了，但是字面的指导暗示意义也十分有用，可以起到指定编码的作用。

为了展示 axios 模块的 ajax 能力，这里使用了项目中的配置文件 `package.json` 作为服务器端数据，请求返回后将版本号累加到 count 状态中。


### Stateless Component 无状态组件

接下来是 `FuncFrame.tsx` 函数式组件，我们需要显式的告诉我们的组件/函数的props是什么类型的，这里使用了 any 接受任何类型，另外将样式部分独立到 `theme.css` 保存：

	import * as React from "react";
	// const styles = require("theme.css");
	// import styles from "./theme.css";
	import "./theme.css";

	function Hello( props:any) {
	  return (
	    <div className="frame" /*style={styles.frame}*/ onClick={props.onClick}>
	      I'm {props.children}.
	    </div>
	  );
	}

	export default Hello;

也可完整地定义类型：

	import React, { MouseEvent, ReactNode } from 'react'

	type Props = { 
	 onClick(e: MouseEvent<HTMLElement>): void
	 children?: ReactNode 
	}

	const Button = ({ onClick: handleClick, children }: Props) => (
	  <div className="frame" onClick={handleClick}>{children}</div>
	)

最后运行源代码打包命令，生成代码包：

	npm pack



## SCSS CSS Modules 模块化
[CSS Modules](https://github.com/css-modules/css-modules)
[css-loader](https://github.com/webpack-contrib/css-loader)

CSS Modules 就是将交互式CSS，即 ICSS or Interoperable CSS 打包成 Node.js 的 JS Module，然后通过导入指令再转换成 CSS Module，这个过程就是 CSS 模块化，如：

	/* style.css */
	.className {
	  color: green;
	}

通过 import 导入 CSS Module，导入后的作为一个 JS Module 使用，所有样式都作为模块的一个变量属性，这种能力就式 CSS 模块化。

	import styles from "./style.css";
	// import { className } from "./style.css";

	element.innerHTML = '<div class="' + styles.className + '">';

样式起名推荐 camelCase 驼峰式，当然 kebab-case 连字式也可以，如 style['class-name']，但是 style.className 更清晰。

使用 `:global` 切换全局空间，`:global(.xxx)` 等价 `@keyframes :global(xxx)`, 类似有 `:local`、`:local(...)`。

	:local(.className) {
	  background: red;
	}
	:local .className {
	  color: green;
	}
	:local(.className .subClass) {
	  color: green;
	}
	:local .className .subClass :global(.global-class-name) {
	  color: blue;
	}

样式类可以进行组合：

	.className {
	  color: green;
	  background: red;
	}

	.otherClassName {
	  composes: className;
	  color: yellow;
	}

	.otherClassName {
	  composes: className from "./style.css";
	}

	.otherClassName {
	  composes: globalClassName from global;
	}

可以进行预处理如 less.js

	:global {
	  .global-class-name {
	    color: green;
	  }
	}

`css-loader` 提供了 `modules` 选项支持，在 `webpack.config.js` 配置即可：

	module.exports = {
	  module: {
	    rules: [
	      { test: /\.css$/i, 
	      	loader: 'css-loader',
	        options: { modules: true, },
	      },
	    ],
	  },
	};

在 TypeScript 项目遇到的样式模块化导入问题，无法通过以下语句进行模块化导入，这也导致了样式文件无法模块化限定应用到组件上，即 `style={styles.frame}` 不能使用：

	const styles = require("theme.css");

	import styles from "./theme.css";

`import` 是在编译过程中执行，静态编译，地址不能通过计算得到。而 CommonJS 的 `require` 是同步，可以解析动态地址，例如 `require(a+b)`。从执行效果上看，import 导入了 export 指定的对象，而 require 则将模块所有内容都一起获取了。

	import HelloFrame from "./HelloFrame";      // ƒ HelloFrame(props) {

	const HelloFrame = require('./HelloFrame'); // {default: ƒ, __esModule: true}

样式文件不是一个模块，文件里根本没有说明导出什么内容，不能按 JavaScript 工程那样通过上面提到的语句导入。而 `import "./theme.css"` 不会报错，因为这只是导入一个样式文件而已，并不是模块导入。

TypeScript 社区提供的解决办法是导出符号，但这并不是很好的解决：

	// theme.css
	.frame {
	    background: #282828;
	    width: 50%;
	    padding: 10%;
	    color: white;
	    margin: auto;
	}

	// theme.css.d.ts
	declare module styles {
	  const frame: any;
	}
	export default styles;

[TypeScript 中使用 CSS Modules](https://juejin.im/post/59c62f8e6fb9a00a51439ad5)
https://github.com/Jimdo/typings-for-css-modules-loader


# ⚑ Vue in TypeScript
- [TypeScript Vue Starter](https://github.com/Microsoft/TypeScript-Vue-Starter)
- [TypeScript Loader](https://www.npmjs.com/package/ts-loader)
- [webpack之loader和plugin简介](https://zhuanlan.zhihu.com/p/28245984)
- [vue + typescript 项目起手式](https://segmentfault.com/a/1190000011744210)
- [vue + typescript 进阶篇](https://segmentfault.com/a/1190000011878086)
- [TypeScript体系调研报告](https://juejin.im/post/59c46bc86fb9a00a4636f939)
- [Vue 官方支持模块 vue-class-component](https://github.com/vuejs/vue-class-component)
- [VUE TypeScript Support](https://vuejs.org/v2/guide/typescript.html)
- [VUE 3 TypeScript Support](https://v3.vuejs.org/guide/typescript-support.html)

安装 Vue 3 脚手架后，直接创建项目，选择 Manually 手动选项设置 TypeScript 支持：

	> npm install -g @vue/cli
	> vue create hello-world

	Vue CLI v3.5.1
	┌───────────────────────────┐
	│  Update available: 4.5.9  │
	└───────────────────────────┘
	? Please pick a preset: (Use arrow keys)
	> default (babel, eslint)
	  Manually select features

	? Please pick a preset: Manually select features
	? Check the features needed for your project:
	 (*) Babel
	 (*) TypeScript
	 (*) Progressive Web App (PWA) Support
	 (*) Router
	 (*) Vuex
	 (*) CSS Pre-processors
	 (*) Linter / Formatter
	>(*) Unit Testing
	 ( ) E2E Testing

在 tslint.json 配置中设置启用 console 用于调试：

	"rules": {
	    "no-console": false,
	}


不推荐在已有项目上强加 TypeScript，因为组件写法跟之前的组件不兼容，若上的话需要修改之前写的组件或设置 tsconfig.json 的 allowJs 配置项。

要使用 TypeScript 开发 Vue 项目，后缀 `.ts` 的源文件需要 `ts-loader` 进行处理。 Vue 单文件组件 `.vue` 需要 `vue-loader` 处理，而 Vue 组件的模板编译需要 `vue-template-compiler`。要使用 `.tsx` 就通过 `babel-loader` 进行转译，这是 Vue 官方做法。大概处理流程就有两种路线 `.tsx` -> `.ts` -> `.js` 和 `.vue` -> `.ts` -> `.js`。

启用 `.tsx` 后可以在 `.vue` 单文件中使用 TypeScript 写组件了，不要使用 `.jsx` 了，这是 TypeScript 工程，不是 JavaScript 工程。

需要通过 `require()` 引入文件，就要安装 `file-loader`。

	const icon  = require('../logo.png');

依赖安装命令：

	npm install --save-dev typescript webpack webpack-cli ts-loader css-loader babel-loader file-loader
	npm install --save-dev vue-template-compiler@2.6.10 vue@2.6.10 vue-loader@15.7.0

配置 webpack 时，可以设置 `appendTsSuffixTo` 增加后缀名的方式来显示这些转换过程，如 `demo.vue` 经过 `vue-loader` 转换处理后就变成 `demo.vue.ts`。

	module.exports = {
	  entry: "./index.vue",
	  output: { filename: "bundle.js" },
	  resolve: {
	    extensions: [".ts", ".vue"]
	  },
	  module: {
	    rules: [
	      { test: /\.vue$/, loader: "vue-loader" },
	      {
	        test: /\.ts$/,
	        loader: "ts-loader",
	        options: { appendTsSuffixTo: [/\.vue$/] }
	      }
	    ]
	  }
	};

对于 `.jsx` 配置如下：

	module.exports = {
	    entry: './index.vue',
	    output: { filename: 'bundle.js' },
	    resolve: {
	        extensions: ['.ts', '.tsx', '.vue', '.vuex']
	    },
	    module: {
	        rules: [
	            { test: /\.vue$/, loader: 'vue-loader',
	              options: {
	                loaders: {
	                  ts: 'ts-loader',
	                  tsx: 'babel-loader!ts-loader',
	                }
	              }
	            },
	            { test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/TS\.vue$/] } }
	            { test: /\.tsx$/, loader: 'babel-loader!ts-loader', options: { appendTsxSuffixTo: [/TSX\.vue$/] } }
	        ]
	    }
	}

为了让 babel 来处理 `.jsx` 需要在 `tsconfig.json` 设置编译选项：

	{
	  "compilerOptions": {
	    "jsx": "preserve"
	  }
	}


## 单文件组件支持

![TypeScript Fit in Vue](typescript-vue.png)

由于 TypeScript 默认并不支持 `*.vue` 后缀的文件，所以开启 SFC 的第一步就是让 TypeScript 识别 `.vue`。`ts-loader` 提供了 `appendTsSuffixTo` 配置项，设置为 `[/\.vue$/]`，这样 TypeScript 就会从 `.vue` 文件种提取 `<script lang="js">` 包括的代码部分。 

另外，在 vue 项目源代码目录中加入一个 `vue-shim.d.ts` 文件，放在项目项目对应使用目录下，不必导入，让 TypeScript 自行包括编译：

	declare module "*.vue" {
	  import Vue from "vue";
	  export default Vue;
	}

这个类型定义文件重点意思是告诉 TypeScript `*.vue` 后缀的文件具有 Vue 一样的类构造。在代码中导入 `*.vue` 文件的时候，需要写上 `.vue` 后缀，原因还是因为 TypeScript 默认只识别 `*.ts` 文件，不识别 `*.vue` 文件：

	import Component from 'demo.vue'

最后总结几点：

✓ 一定要用 `<script lang="ts">` 来使用 TypeScript 写 SFC 组件。
✓ `import` 导入组件时一定要加上 `.vue` 扩展名。
✓ 可以在 SFC 组件内使用 `<style>` 或`<style scoped>` 写样式，`.ts` 写组件就不能，`scoped` 关键字可以让样式作用范围限定在当前组件，Vue 会修改样式规则后缀，如 `.frame` 会变成 `.frame[data-v-abee1218]`。
✓ TypeScript 默认会导出一个 `Vue.extend()` 如果忘写了，Vetur 会让程序正常运行，但是在构建时会给出错误提示。

## webpack.config.js

一份 Webpack 配置参考，配置文件中的 `output` 设置构建时文件的输出目录 `path`，它只能时指向本地磁盘的绝对目录，这里使用了 Node 的 `path` 模块来获取当前项目下的 `build` 子目录。另外一个时 `publicPath`，这个目录设置影响到程序如何去访问资源文件。可以使用相对目录，也可使用绝对目录，也可以时服务器的 URL 路径。程序编译后，资源路径就以 `publicPath` 的设置为参考。

最后一段配置判读是否时发行编译，`process.env.NODE_ENV === 'production'`，可以在 `package.json` 中配置一条构建命令，通过设置环境变量 `NODE_ENV` 来引导进入发行编译的配置部分，即使用代码压缩 `minimize`。

  "scripts": {
    "build": "set NODE_ENV=production&& webpack --progress --color"
  },

另外，考虑到 Vue 框架本身不是很大，可以打包到一个 `bundle.js` 输出，在 `externals` 配置就注解掉了，这样就不必在 index.html 模板中去引入 Vue，只要正确加载编译输出的 `bundle.js` 文件就可以了。

	const VueLoaderPlugin = require('vue-loader/lib/plugin')
	const webpack = require("webpack")
	const path = require("path")

	module.exports = {
	    entry: './src/app.tsx',
	    mode: 'development',
	    output: {
	        // path: '/build',
	        path: path.resolve(__dirname, './build'),
	        publicPath: './dist/',
	        filename: 'bundle.js'
	    },
	    resolve: {
	        extensions: ['.jsx', '.tsx', '.ts', '.js', '.vue', '.json'],
	        alias: {
	            'vue$': 'vue/dist/vue.esm.js'
	        }
	    },
	    plugins: [
	        new VueLoaderPlugin(),
	    ],
	    module: {
	        rules: [{
	            test: /\.vue$/,
	            loader: 'vue-loader',
	            options: {
	                loaders: {
	                    'scss': 'vue-style-loader!css-loader!sass-loader',
	                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
	                }
	            }
	        }, {
	            test: /\.tsx?$/,
	            loader: 'ts-loader',
	            exclude: /node_modules/,
	            options: {
	                appendTsSuffixTo: [/\.vue$/],
	            }
	        }, {
	            test: /\.(png|jpg|gif|svg)$/,
	            loader: 'file-loader',
	            options: {
	                name: '[name].[ext]?[hash]'
	            }
	        }, {
	            test: /\.css$/,
	            use: ['vue-style-loader', 'css-loader']
	        }]
	    },
	    externals: {
	        // "vue": "Vue",
	    },
	    devtool: "source-map"
	}
	if (process.env.NODE_ENV === 'production') {
	    console.log(process.env.NODE_ENV);
	    module.exports.output.publicPath = './release/bin/'
	    module.exports.optimization = {
	        minimize: true
	    };
	    module.exports.plugins = (module.exports.plugins || []).concat([
	        new webpack.DefinePlugin({
	            'process.env': {
	                NODE_ENV: '"production"'
	            }
	        }),
	        new webpack.LoaderOptionsPlugin({
	            minimize: true
	        })
	    ])
	}

## Code Samples

app.jsx 主程序代码：

	import Vue from "vue";
	import axios from "axios";
	import HelloFrame from "./HelloFrame.vue";
	import Exclamation from "./Exclamation";

	Vue.component('HelloFrame', HelloFrame);
	Vue.component('Exclamation', Exclamation);

	let v = new Vue({
	    el: "#content",
	    template: `
	    <div>
	        <Exclamation name="Emily" :value="2" />
	        <HelloFrame name="Jane" value="1">Hello {{name}}!</HelloFrame>
	    </div>`,
	    data: {
	        name: "World"
	    }
	});

标准 TypeScript 组件 Exclamation.ts：

	import Vue from "vue";
	// import styles from "./theme.css";
	const styles = require("./theme.css");

	export default Vue.extend({
	    props: ['name', 'value', 'styles'],
	    data() {
	        return {
	            // css:styles,
	            enthusiasm: (this.value? +this.value:1),
	        }
	    },
	    // styles,
	    template: `
	        <div class="frame">
	            <div>Hello {{name}}{{exclamationMarks}}</div>
	            <button @click="decrement">-</button>
	            <button @click="increment">+</button>
	        </div>
	    `,
	    methods: {
	        increment() { this.enthusiasm++; },
	        decrement() {
	            if (this.enthusiasm > 1) {
	                this.enthusiasm--;
	            }
	        },
	    },
	    computed: {
	        exclamationMarks(): string {
	            return Array(this.enthusiasm + 1).join('!');
	        }
	    }
	});

还是要注意，样式文件模块化引入是有问题的，`require("./theme.css")` 就正常。

单文件组件 SFC 实列 HelloFrame.vue：

	<template>
	  <div class="frame">
	    <img :src="icon" title="icon">
	    <slot>{{icon}}</slot>
	    <div>Hello {{name}}{{exclamationMarks}}</div>
	    <button @click="decrement">-</button>
	    <button @click="increment">+</button>
	  </div>
	</template>

	<script lang="ts">

	import Vue from "vue";
	const icon  = require('../logo.png');

	export default Vue.extend({
	    props: ['name', 'value'],
	    data() {
	        return {
	        	icon,
	            enthusiasm: (this.value? +this.value:1),
	        }
	    },
	    template: `
	        <div>
	            <div>Hello {{name}}{{exclamationMarks}}</div>
	            <button @click="decrement">-</button>
	            <button @click="increment">+</button>
	        </div>
	    `,
	    methods: {
	        increment() { this.enthusiasm++; },
	        decrement() {
	            if (this.enthusiasm > 1) {
	                this.enthusiasm--;
	            }
	        },
	    },
	    computed: {
	        exclamationMarks(): string {
	            return Array(this.enthusiasm + 1).join('!');
	        }
	    }
	});

	</script>

	<style scoped>
	.frame {
	    background: #282828;
	    width: 50%;
	    padding: 10%;
	    color: white;
	    margin: 0.08px auto;
	}
	img { width:50%; }
	</style> 


## vue-class-component

`vue-class-component` 官方提供了的 TypeScript 类组件支持模块，实现了 Vue、Component 等类；Vue 社区开发的 `vue-property-decorator` 修饰符模块深度依赖了 `vue-class-component`，提供拓展多个操作符： `@Prop`、`@Emit`、`@Inject`、`@Model`、`@Provide`、`@Watch`；这两个模块为 Vue 类组件开发带来了很多便利：

✓ methods，钩子都可以直接写作class的方法
✓ computed属性可以直接通过get来获得
✓ 初始化data可以声明为class的属性
✓ 其他的都可以放到Component装饰器里

	npm install --save-dev vue-class-component@7.1.0 vue-property-decorator@8.2.1

以官方提供的单文件组件例子展示：

	<template>
	  <div>
	    <input v-model="msg">
	    <p>prop: {{propMessage}}</p>
	    <p>msg: {{msg}}</p>
	    <p>helloMsg: {{helloMsg}}</p>
	    <p>computed msg: {{computedMsg}}</p>
	    <button @click="greet">Greet</button>
	  </div>
	</template>

	<script>
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({
	  props: {
	    propMessage: String
	  }
	})
	export default class App extends Vue {
	  // initial data
	  msg = 123

	  // use prop values for initial data
	  helloMsg = 'Hello, ' + this.propMessage

	  // lifecycle hook
	  mounted () {
	    this.greet()
	  }

	  // computed
	  get computedMsg () {
	    return 'computed ' + this.msg
	  }

	  // method
	  greet () {
	    alert('greeting: ' + this.msg)
	  }
	}
	</script>


1、写法问题：引入组件和接收父组件传过来的参数

	@Component({
	 components: {
	 XXXX
	 },
	 props: {
	 mapFlag: Number
	 }
	})

2、获取refs，在其后面加上as HTMLDivElement（不知道是不是这插件引起的，懒得管，直接干就是）

	let layoutList:any = this.$refs.layout as HTMLDivElement


使用修饰符模块 `vue-property-decorator` 编写 Vue 组件：

	import { Vue, Component, Prop } from "vue-property-decorator";

	@Component
	export default class HelloDecorator extends Vue {
	    @Prop() name!: string;
	    @Prop() initialEnthusiasm!: number;

	    enthusiasm = this.initialEnthusiasm;

	    increment() {
	        this.enthusiasm++;
	    }
	    decrement() {
	        if (this.enthusiasm > 1) {
	            this.enthusiasm--;
	        }
	    }

	    get exclamationMarks(): string {
	        return Array(this.enthusiasm + 1).join('!');
	    }
	}


# ⚑ Angular in TypeScript
[用Typescript编写AngularJS应用是怎样一种感受](https://segmentfault.com/a/1190000005110986)
[ts-angular-components 组件助手](http://npm.taobao.org/package/ts-angular-components)
[Angular CLI](https://github.com/angular/angular-cli)
[Angular Tutorial](https://angular.io/tutorial)

## Angular-CLI 脚手架

先安装 Node.js，再使用 npm 工具安装 cnpm，注册淘宝镜像，使用命令查看版本：

	npm install -g cnpm --registry=https://registry.npm.taobao.org
	cnpm -v

使用 Angular-Cli 脚手架创建项目骨架，Angular CLI 8.0+ 搭配 Node.js 10.9。创建项目过程可以选择配置 Angular Routing 样式模块， 可以使用 `ng generate` 生成组件或模块：

	npm install -g @angular/cli ts-angular-components
	ng new ng-demo
	cd ng-demo
	npm install
	ng serve --open
	
	ng generate module components/ts-[component-name]
	ng generate component components/ts-[component-name]

导出生成的组件并 injector 注入模块：

    @NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TsComponentClassName],
    exports: [TsComponentClassName],
    entryComponents: [TsComponentClassName]
    })
    export class TsModuleName {
    constructor(private injector: Injector) {
        const el = createCustomElement(TsComponentClassName, { injector });
        customElements.define('ts-component-selector', el);
    }
    ngDoBootstrap() { }
};
3. add module to 'public_api.ts' 

   export * from './src/app/components/ts-[component-name]/ts-component-name.module';

使用脚手架工具可以调用开发服务器、打包等服务：

	ng serve
	ng build my-app -c production



## Yeoman & generator-ts-angular

使用 Yeoman 和 generator-ts-angular 创建项目骨架，后者提供了一个项目生成器，即 yo 使用到的 Angular 项目生成器 `ts-angular`。先找个你喜欢的目录，然后运行下面的命令，因为一会新项目会直接创建在该目录下。

	npm install -g yo
	npm install -g generator-ts-angular
	yo ts-angular

上面命令回车后，生成器会要求输入设置信息。注意: 使用了 SPA 单页应用，即在 Use html5 model 选项上，可能需要修改 `core/configurations/route.ts`。

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }); 

COMMAND	ALIAS	DESCRIPTION
`add` 添加外部库
`analytics` Configures the gathering of Angular CLI usage metrics. See https://v8.angular.io/cli/usage-analytics-gathering.
`build`、`b` 编译 Angular 工程输出到 `dist/` 或指定 `output path`
`config` 获取或设置 angular.json 配置.
`doc`、`d` 打开 Angular 官方文档并搜索指定关键字
`e2e`、`e` Builds and serves an Angular app, then runs end-to-end tests using Protractor.
`generate`、`g` Generates and/or modifies files based on a schematic.
`help` Lists available commands and their short descriptions.
`lint`、`l` Runs linting tools on Angular app code in a given project folder.
`new`、`n` Creates a new workspace and an initial Angular app.
`run` Runs an Architect target with an optional custom builder configuration defined in your project.
`serve`、`s` Builds and serves your app, rebuilding on file changes.
`test`、`t` Runs unit tests in a project.
`update` Updates your application and its dependencies. See https://update.angular.io/
`version`、`v` Outputs Angular CLI version.
`xi18n` Extracts i18n messages from source code.


## 手动搭建项目

使用脚手架的好处就是方便初始化项目骨架，如果熟悉 Webpack 项目搭键，手动初始化项目按需要安装依赖更能优化项目结构。

	mkdir myAngularProject
	cd myAngularProject
	npm init
	cnpm install --save-dev rxjs@6.4.0 @angular/common@8.1.2 zone.js@0.9.1
	cnpm install --save-dev @angular/core@8.1.2 @angular/platform-browser@8.1.2 

安装依赖后自动生成 package.json 配置文件，在当前目录下就会生成一个 node_modules 目录，包含了所需要的模块。一起安装开发服务器 `webpack-dev-server`，设置 `build` 和 `start` 两条命令用于构建项目和运行开发服务器。

	{
	  "name": "ts-angular",
	  "version": "1.1.0",
	  "description": "Demo for Angular & TypeScript",
	  "main": "index.ts",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "build": "set NODE_ENV=production&& webpack -p"
	    "start": "webpack-dev-server --devtool eval --progress --colors"
	  },
	  "keywords": [
	    "Angualr",
	    "TypeScript"
	  ],
	  "author": "Jeango",
	  "license": "ISC",
	  "devDependencies": {
	    "@angular/common": "^8.1.2",
	    "@angular/core": "^8.1.2",
	    "@angular/platform-browser": "^8.1.2",
	    "rxjs": "^6.4.0",
	    "zone.js": "^0.9.1"
	  }
	}

tsconfig.json 定义了 TypeScript 编译器如何从项目源文件生成 JavaScript 代码。

	{
	  "compileOnSave": false,
	  "compilerOptions": {
	    "baseUrl": "./",
	    "outDir": "./dist/out-tsc",
	    "sourceMap": true,
	    "declaration": false,
	    "module": "esnext",
	    "moduleResolution": "node",
	    "emitDecoratorMetadata": true,
	    "experimentalDecorators": true,
	    "importHelpers": true,
	    "target": "es2015",
	    "typeRoots": [
	      "node_modules/@types"
	    ],
	    "lib": [
	      "es2018",
	      "dom"
	    ]
	  }
	}

typings.json 为那些 TypeScript 编译器无法识别的库提供了额外的定义文件。
systemjs.config.js 为模块加载器提供了该到哪里查找应用模块的信息，并注册了所有必备的依赖包。

接下来在工程目录下面新建 `app` 文件夹：


每个 Angular 应用都至少有一个根组件，这里是 `AppComponent` 组件，保存在 `app.component.ts` 文件，代码如下：

	import { Component } from '@angular/core';
	@Component({
	  selector: 'my-app',
	  template: '<h1>Hello Angular!</h1>'
	})
	export class AppComponent { }

进入app文件夹，创建 `app.module.ts` 文件。导入根组件 `AppComponent` 并把它添加到 `NgModule` 装饰器的 declarations 和 bootstrap 字段中：

	import { NgModule }      from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	import { AppComponent }   from './app.component';
	@NgModule({
	  imports:      [ BrowserModule ],
	  declarations: [ AppComponent ],
	  bootstrap:    [ AppComponent ]
	})
	export class AppModule { }

接下来我们需要告诉 Angular 如何启动应用。在 `app` 目录下创建 `main.ts` 入口文件，代码如下所示：

	import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
	import { AppModule } from './app.module';
	 
	const platform = platformBrowserDynamic();
	platform.bootstrapModule(AppModule);

以上代码初始化了平台，让你的代码可以运行，然后在该平台上启动你的 `AppModule`。

在工程目录下创建 index.html 作为应用的宿主页面。

	<html>
	  <head>
	    <title>Angular 2 Dmoe</title>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link rel="stylesheet" href="styles.css">
	    <!-- IE 需要 polyfill -->
	    <script src="node_modules/core-js/client/shim.min.js"></script>
	    <script src="node_modules/zone.js/dist/zone.js"></script>
	    <script src="node_modules/reflect-metadata/Reflect.js"></script>
	    <script src="node_modules/systemjs/dist/system.src.js"></script>
	    <!-- 2. 配置 SystemJS -->
	    <script src="systemjs.config.js"></script>
	    <script>
	      System.import('app').catch(function(err){ console.error(err); });
	    </script>
	  </head>
	  <!-- 3. 显示应用 -->
	  <body>
	    <my-app>Loading...</my-app>
	  </body>
	</html>

写一个简单的样式style.css放在平级目录下：

	h1 {
	  color: #369;
	  font-family: Arial, Helvetica, sans-serif;
	  font-size: 250%;
	}
	h2, h3 {
	  color: #444;
	  font-family: Arial, Helvetica, sans-serif;
	  font-weight: lighter;
	}
	body {
	  margin: 2em;
	}


编译并运行，将`.ts` 编译成 `.js` 然后启动项目，如果3000端口没被占用的话，默认打开访问 http://localhost:3000/

	npm start


# ⚑ 在 JavaScript 工程使用 JSDoc 注解
- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
- https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html
- https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html

JSDoc 是 JavaScript 工程的工具，可以用来激活 TypeScript 的类型检查机制。

TypeScript 类型机制分为不同的严格级别：

- A type-system based only on inference with JavaScript code
- Incremental typing in JavaScript via JSDoc
- Using // @ts-check in a JavaScript file
- TypeScript code
- TypeScript with strict enabled

如果有大量的 JavaScript 文件需要检查，可以使用 jsconfig.json，即一个 JavaScript 工程。要禁止类型检查，在代码文件中使用 // @ts-nocheck 注解。对不重要的类型检查错误，可以在代码行前使用 // @ts-ignore 或 // @ts-expect-error。

一个 TSConfig 配置文件标志其所在目录为 TypeScript 或者 JavaScript 项目的根目录，TSConfig 配置文件可以是 tsconfig.json 或者 jsconfig.json，它们具有相同的配置和功能。

TypeScript 3.7 开始，类型声明文件 .d.ts 可以从 JavaScript 的 JSDoc 中生成，相应 TSConfig 配置参考：

	{
	  // Change this to match your project
	  include: ["src/**/*"],

	  compilerOptions: {
	    // Tells TypeScript to read JS files, as
	    // normally they are ignored as source files
	    allowJs: true,
	    // Generate d.ts files
	    declaration: true,
	    // This compiler run should
	    // only output d.ts files
	    emitDeclarationOnly: true,
	    // Types should go into this directory.
	    // Removing this would place the .d.ts files
	    // next to the .js files
	    outDir: "dist",
	  },
	}

## @see 参考引用
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#editor-support-for-the-jsdoc-see-tag

VSCode 编辑器可以支持 JSDoc @see 标记，它可以帮助快速定位到符号定义处：

	// @filename: first.ts
	export class C {}

	// @filename: main.ts
	import * as first from "./first";

	/**
	 * @see first.C
	 */
	function related() {}


## @type 类型注解

	/**
	 * @type {string}
	 */
	var s;

	/** @type {Window} */
	var win;

	/** @type {PromiseLike<string>} */
	var promisedString;

	// You can specify an HTML Element with DOM properties
	/** @type {HTMLElement} */
	var myElement = document.querySelector(selector);
	element.dataset.myData = "";


	/**
	 * @type {(string | boolean)}
	 */
	var sb;

	/**
	 * @type {string | boolean}
	 */
	var sb;


	/** @type {number[]} */
	var ns;
	/** @type {Array.<number>} */
	var nds;
	/** @type {Array<number>} */
	var nas;


	/** @type {{ a: string, b: number }} */
	var var9;


	/**
	 * A map-like object that maps arbitrary `string` properties to `number`s.
	 *
	 * @type {Object.<string, number>}
	 */
	var stringToNumber;

	/** @type {Object.<number, object>} */
	var arrayLike;


	/** @type {function(string, boolean): number} Closure syntax */
	var sbn;
	/** @type {(s: string, b: boolean) => number} TypeScript syntax */
	var sbn2;


	/** @type {Function} */
	var fn7;
	/** @type {function} */
	var fn6;


	/**
	 * @type {*} - can be 'any' type
	 */
	var star;
	/**
	 * @type {?} - unknown type (same as 'any')
	 */
	var question;


## Casts 类型转换

	/**
	 * @type {number | string}
	 */
	var numberOrString = Math.random() < 0.5 ? "hello" : 100;
	var typeAssertedNumber = /** @type {number} */ (numberOrString);

经过转换，typeAssertedNumber 是 number 类型。


## Import types 类型声明导入

如下两个文件：

	// @filename: types.d.ts
	export type Pet = {
	  name: string,
	};

	// @filename: main.js
	/**
	 * @param p { import("./types").Pet }
	 */
	function walk(p) {
	  console.log(`Walking ${p.name}...`);
	}

导入类型声明，还可以使用别名：

	/**
	 * @typedef { import("./types").Pet } Pet
	 */

	/**
	 * @type {Pet}
	 */
	var myPet;
	myPet.name;

使用 typeof 获取类型：

	/**
	 * @type {typeof import("./accounts").userAccount }
	 */
	var x = require("./accounts").userAccount;


## @param and @returns 参数和返回值注解

	// Parameters may be declared in a variety of syntactic forms
	/**
	 * @param {string}  p1 - A string param.
	 * @param {string=} p2 - An optional param (Closure syntax)
	 * @param {string} [p3] - Another optional param (JSDoc syntax).
	 * @param {string} [p4="test"] - An optional param with a default value
	 * @return {string} This is the result
	 */
	function stringsStringStrings(p1, p2, p3, p4) {
	  // TODO
	}


	/**
	 * @return {PromiseLike<string>}
	 */
	function ps() {}

	/**
	 * @returns {{ a: string, b: number }} - May use '@returns' as well as '@return'
	 */
	function ab() {}


## @typedef, @callback, and @param 类型定义

@typedef 可以用来在注解中定义新类型：

	/**
	 * @typedef {Object} SpecialType - creates a new type named 'SpecialType'
	 * @property {string} prop1 - a string property of SpecialType
	 * @property {number} prop2 - a number property of SpecialType
	 * @property {number=} prop3 - an optional number property of SpecialType
	 * @prop {number} [prop4] - an optional number property of SpecialType
	 * @prop {number} [prop5=42] - an optional number property of SpecialType with default
	 */

	/** @type {SpecialType} */
	var specialTypeObject;
	specialTypeObject.prop3;

可以在首先中使用 object 或 Object：

	/**
	 * @typedef {object} SpecialType1 - creates a new type named 'SpecialType'
	 * @property {string} prop1 - a string property of SpecialType
	 * @property {number} prop2 - a number property of SpecialType
	 * @property {number=} prop3 - an optional number property of SpecialType
	 */

	/** @type {SpecialType1} */
	var specialTypeObject1;

@param 用来为函数等定义一次性使用的类型，请注意，属性名称必须以参数名称作为前缀：

	/**
	 * @param {Object} options - The shape is the same as SpecialType above
	 * @param {string} options.prop1
	 * @param {number} options.prop2
	 * @param {number=} options.prop3
	 * @param {number} [options.prop4]
	 * @param {number} [options.prop5=42]
	 */
	function special(options) {
	  return (options.prop4 || 1001) + options.prop5;
	}

@callback 类似 @typedef 但是用来定义函数类型：

	/**
	 * @callback Predicate
	 * @param {string} data
	 * @param {number} [index]
	 * @returns {boolean}
	 */

	/** @type {Predicate} */
	const ok = (s) => !(s.length % 2);

当然，这些类型可以单行的 TypeScript 语法定义：

	/** @typedef {{ prop1: string, prop2: string, prop3?: number }} SpecialType */
	/** @typedef {(data: string, index?: number) => boolean} Predicate */


## @template 泛型模板定义

使用 @template 来定义泛型函数模板：

	/**
	 * @template T
	 * @param {T} x - A generic parameter that flows through to the return type
	 * @return {T}
	 */
	function id(x) {
	  return x;
	}

	const a = id("string");
	const b = id(123);
	const c = id({});

多个参数使用逗号分开：

	/**
	 * @template T,U,V
	 * @template W,X
	 */

在参数定义前可以定义约束类型，仅约束参数列表中的第一个类型：

	/**
	 * @template {string} K - K must be a string or string literal
	 * @template {{ serious(): string }} Seriousalizable - must have a serious method
	 * @param {K} key
	 * @param {Seriousalizable} object
	 */
	function seriousalize(key, object) {
	  // ????
	}

## Classes 类定义的注解

	class C {
	  /**
	   * @param {number} data
	   */
	  constructor(data) {
	    // property types can be inferred
	    this.name = "foo";

	    // or set explicitly
	    /** @type {string | null} */
	    this.title = null;

	    // or simply annotated, if they're set elsewhere
	    /** @type {number} */
	    this.size;

	    this.initialize(data); // Should error, initializer expects a string
	  }
	  /**
	   * @param {string} s
	   */
	  initialize = function (s) {
	    this.size = s.length;
	  };
	}

	var c = new C(0);

	// C should only be called with new, but
	// because it is JavaScript, this is allowed and
	// considered an 'any'.
	var result = C(1);


## @constructor 构造器注解

编译器从 this 属性来推断出构造函数，但是使用 @constructor 可以帮助提供更好的提示和更严格的编译：

	/**
	 * @constructor
	 * @param {number} data
	 */
	function C(data) {
	  // property types can be inferred
	  this.name = "foo";

	  // or set explicitly
	  /** @type {string | null} */
	  this.title = null;

	  // or simply annotated, if they're set elsewhere
	  /** @type {number} */
	  this.size;

	  this.initialize(data);
	  // Argument of type 'number' is not assignable to parameter of type 'string'.
	}
	/**
	 * @param {string} s
	 */
	C.prototype.initialize = function (s) {
	  this.size = s.length;
	};

	var c = new C(0);
	c.size;

	var result = C(1);
	// Value of type 'typeof C' is not callable. Did you mean to include 'new'?


注意：错误消息只在启用 JSConfig 和 checkJs 的 JS 代码库中显示。

使用 @constructor 会在构造函数 C 中检查，可以得到 initialize 方法的建议，如果您向它传递一个数字，则会出现一个错误。如果调用 C 而不是使用 new 构造 C，编辑器也可能显示警告，这意味着可调用的构造函数不能使用 @constructor。


## @this 指针
- https://www.typescriptlang.org/docs/handbook/utility-types.html#thisparametertypetype

TypeScript 编译器通常会指出 this 引用的对象类型，如果没有，可以使用 @this 指定：

	/**
	 * @this {HTMLElement}
	 * @param {*} e
	 */
	function callbackForLater(e) {
	  this.clientHeight = parseInt(e); // should be fine!
	}

在 TypeScript 中可以使用 ThisParameterType<Type> 工具类型声明：

	function toHex(this: Number) {
	  return this.toString(16);
	}


## @extends 类扩展

当 JavaScript 类扩展泛型基类，使用 @extends 来指定泛型参数类型：

	/**
	 * @template T
	 * @extends {Set<T>}
	 */
	class SortableSet extends Set {
	  // ...
	}

@extends 只用于类扩展，不用于构造函数的扩展。

## @enum 枚举

用 @enum 声明枚举类型:

	/** @enum {number} */
	const JSDocState = {
	  BeginningOfLine: 0,
	  SawAsterisk: 1,
	  SavingComments: 2,
	};

	JSDocState.SawAsterisk;

注意 @enum 与 TypeScript 的 enum 类型多少有些不同，@enum 只可以是任意类型：

	/** @enum {function(number): number} */
	const MathFuncs = {
	  add1: (n) => n + 1,
	  id: (n) => -n,
	  sub1: (n) => n - 1,
	};

	MathFuncs.add1;


## Patterns that are known NOT to be supported

将值空间中的对象作为类型引用是行不通的，除非该对象还创建了一个类型，比如构造函数。

	function aNormalFunction() {}

	/**
	 * @type {aNormalFunction}
	 */
	var wrong;

	/**
	 * Use 'typeof' instead:
	 * @type {typeof aNormalFunction}
	 */
	var right;

后缀 = 号在属性类型中不可以指定可选参数：

	/**
	 * @type {{ a: string, b: number= }}
	 */
	var wrong;

	/**
	 * Use postfix question on the property name instead:
	 * @type {{ a: string, b?: number }}
	 */
	var right;


Nullable 类型只有在 strictNullChecks 配置打开时有效：

	/**
	 * @type {?number}
	 * With strictNullChecks: true  -- number | null
	 * With strictNullChecks: false -- number
	 */
	var nullable;

	/**
	 * @type {number | null}
	 * With strictNullChecks: true  -- number | null
	 * With strictNullChecks: false -- number
	 */
	var unionNullable;

## Unsupported tags

TypeScript 自动忽略不支持的 JSDoc 标记，以下标记有相应的 open issues 支持：

- @const (issue #19672)
- @inheritdoc (issue #23215)
- @memberof (issue #7237)
- @yields (issue #23857)
- {@link …} (issue #35524)


## JSDoc Property Modifiers

从 TypeScript 3.8 开始，JSDoc 可以使用访问修改器，@public, @private, @protected，和 TypeScript 中的 public, private, protected 一样。

	// @ts-check

	class Car {
	  constructor() {
	    /** @private */
	    this.identifier = 100;
	  }

	  printIdentifier() {
	    console.log(this.identifier);
	  }
	}

	const c = new Car();
	console.log(c.identifier);
	// Property 'identifier' is private and only accessible within class 'Car'.

还有 @readonly 修改器，只读不写：

	// @ts-check

	class Car {
	  constructor() {
	    /** @readonly */
	    this.identifier = 100;
	  }

	  printIdentifier() {
	    console.log(this.identifier);
	  }
	}

	const c = new Car();
	console.log(c.identifier);














