

_____
//docs combine script
===================================================

文档合并脚本中使用了 sed 流式文档处理工具，使用教程参考 OpenDocs： 

1. [Sed in 5 Minius](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
2. [AWK in 5 Minius](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)

合并 MDN 开放文档有个难题，文档本身没有提供目录数据，文档本身是自组织的目录结构。
每个主题对应一个子目录，index.md 作为一个文档入口，它可以包含了其它文档的引用，
其引用的其它文档就相当于提供了一个目录数据，或者它本身就是主题内容。要从 md 文档中
抽取出目录数据，就需要处理页面循环引用、深层嵌套。另外，还有部分文档链接缺失。

为了解决这些问题，需要使用 declare -A NAME 声明关联数组，Associative arrays，
通过关联记录来判断是否已经处理过相应的文档，避免陷入循环引用。注意，key 如果缺失，
将引发 bad array subscript 错误。

    #! /usr/bin/env bash
    
    function print_size_list() {
        echo Markdown Size:
        du -s --si --exclude=*.jpg --exclude=*.gif --exclude=*.png */
        du -s --si --exclude=*.jpg --exclude=*.gif --exclude=*.png web/*/
        echo Resources Size:
        du -s --si --exclude=*.md */
        du -s --si --exclude=*.md web/*/
    }
    
    function print_title() {
        printf "\n%.0s" {1..2}
        printf "_%.0s" {1..5}
        printf "\n$1\n"
        printf "=%.0s" {1..51}
        printf "\n%.0s" {1..2}
    }
    
    function filter() {
        # Print to stderr (File ID 2)
        # local parent=${it/\/index.md/}
        # local parent=$(echo ${1/\/*/})
        # echo ":: $parent" 1>&2
        sed -n "{ s|.*/en-US/docs/$2\([^)]*\)).*|$2\1/index.md|gip }" $1 | grep -v "#"
    }
    
    declare -A TOC
    function toc() {
        echo "$1"
        TOC["K$1"]=true
        while read -r it
        do
            if [ "${TOC[K$it]}" != true ]
            then
                toc $it $2
            fi
            TOC[K$it]=true
        done << EOF
    $(filter "$1" $2)
    EOF
    }
    
    function combile() {
        print_title "/docs combine script"
        cat << EOF
    文档合并脚本中使用了 sed 流式文档处理工具，使用教程参考 OpenDocs： 
    
    1. [Sed in 5 Minius](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
    2. [AWK in 5 Minius](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
    
    合并 MDN 开放文档有个难题，文档本身没有提供目录数据，文档本身是自组织的目录结构。
    每个主题对应一个子目录，index.md 作为一个文档入口，它可以包含了其它文档的引用，
    其引用的其它文档就相当于提供了一个目录数据，或者它本身就是主题内容。要从 md 文档中
    抽取出目录数据，就需要处理页面循环引用、深层嵌套。另外，还有部分文档链接缺失。
    
    为了解决这些问题，需要使用 declare -A NAME 声明关联数组，Associative arrays，
    通过关联记录来判断是否已经处理过相应的文档，避免陷入循环引用。注意，key 如果缺失，
    将引发 bad array subscript 错误。
    
    EOF
        cat $0 | sed -n 's/^/    /p'
        print_title "mdn-content/README.md"
        cat "../../../mdn-content/README.md"
    
        # Filter out duplications by awk.
        toc $1 $2 | awk '
        {
            if (toc[$0] == "") {
                print $0
                toc[$0] = $0
            }
        }
        ' | while read -r it
        do
            print_title $it
            cat $it
        done
    }
    
    combile "WebAssembly/index.md" WebAssembly
    
    # Markdown Size:
    
    # 717k    games/
    # 1.9M    glossary/
    # 6.9M    learn/
    # 889k    mdn/
    # 6.3M    mozilla/
    # 99k     related/
    # 63M     web/
    # 550k    webassembly/
    
    # 1.7M    web/accessibility/
    # 37M     web/api/
    # 8.0M    web/css/
    # 4.1k    web/demos/
    # 70k     web/events/
    # 79k     web/exslt/
    # 332k    web/guide/
    # 2.5M    web/html/
    # 2.1M    web/http/
    # 6.9M    web/javascript/
    # 108k    web/manifest/
    # 271k    web/mathml/
    # 599k    web/media/
    # 13k     web/opensearch/
    # 222k    web/performance/
    # 140k    web/privacy/
    # 463k    web/progressive_web_apps/
    # 177k    web/security/
    # 2.3M    web/svg/
    # 13k     web/text_fragments/
    # 17k     web/tutorials/
    # 162k    web/webdriver/
    # 9.3k    web/xml/
    # 167k    web/xpath/
    # 195k    web/xslt/
    
    # Resources Size:
    # 2.3M    games/
    # 802k    glossary/
    # 22M     learn/
    # 517k    mdn/
    # 8.3M    mozilla/
    # 4.1k    related/
    # 26M     web/
    # 267k    webassembly/
    
    # 1.2M    web/accessibility/
    # 13M     web/api/
    # 5.8M    web/css/
    # 0       web/demos/
    # 0       web/events/
    # 4.1k    web/exslt/
    # 402k    web/guide/
    # 600k    web/html/
    # 1.0M    web/http/
    # 950k    web/javascript/
    # 8.2k    web/manifest/
    # 205k    web/mathml/
    # 528k    web/media/
    # 8.2k    web/opensearch/
    # 558k    web/performance/
    # 136k    web/privacy/
    # 1.2M    web/progressive_web_apps/
    # 54k     web/security/
    # 878k    web/svg/
    # 0       web/text_fragments/
    # 0       web/tutorials/
    # 17k     web/webdriver/
    # 0       web/xml/
    # 13k     web/xpath/
    # 21k     web/xslt/

_____
/mdn-content/README.md
===================================================

# Welcome to MDN Web Docs

<base href="https://developer.mozilla.org/" />

![github-profile](https://user-images.githubusercontent.com/10350960/166113119-629295f6-c282-42c9-9379-af2de5ad4338.png)

[MDN Web Docs][] is an open-source, collaborative project that documents web technologies including CSS, HTML, JavaScript, and Web APIs.
Alongside detailed reference documentation, we provide extensive learning resources for students and beginners getting started with web development.

## MDN's mission

MDN's mission is to provide a blueprint for a better internet and empower a new generation of developers and content creators to build it.

The strength of MDN Web Docs lies in its vast community of active readers and contributors.
Since 2005, approximately 45,000 contributors have created the documentation we know and love.
Together, contributors have created over 45,000 documents that make up an up-to-date, comprehensive, and free resource for web developers worldwide.

In addition to English-language articles, over 35 volunteers lead translation and localization efforts for Chinese, French, Japanese, Korean, Portuguese, Russian, and Spanish.

## Build the site

To set up the site locally, you need to have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.
You can check if these are installed by running the following commands:

```bash
node -v
yarn -v
```

After you have installed Node.js and Yarn, you can install the dependencies using `yarn` and start the local preview:

```bash
yarn
yarn start
```

Once started, a live preview is available at `http://localhost:5042/`.

## Contribute to MDN Web Docs

You can contribute to MDN Web Docs and be a part of our community through content contributions, engineering, or translation work.
The MDN Web Docs project welcomes contributions from everyone who shares our goals and wants to contribute constructively and respectfully within our community.

To find out how to get started, see the [CONTRIBUTING.md](CONTRIBUTING.md) document in this repository.
By participating in and contributing to our projects and discussions, you acknowledge that you have read and agree to our [Code of Conduct](CODE_OF_CONDUCT.md).

## Get in touch

You can communicate with the MDN Web Docs team and community using the [communication channels][].

[communication channels]: https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels
[MDN Web Docs]: https://developer.mozilla.org/


_____
/WebAssembly/index.md
===================================================

---
title: WebAssembly
slug: WebAssembly
page-type: landing-page
browser-compat: javascript.builtins.WebAssembly
---

{{WebAssemblySidebar}}

WebAssembly is a new type of code that can be run in modern web browsers — it is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages such as C/C++, C# and Rust with a compilation target so that they can run on the web. It is also designed to run alongside JavaScript, allowing both to work together.

## In a Nutshell

WebAssembly has huge implications for the web platform — it provides a way to run code written in multiple languages on the web at near native speed, with client apps running on the web that previously couldn't have done so.

WebAssembly is designed to complement and run alongside JavaScript — using the WebAssembly JavaScript APIs, you can load WebAssembly modules into a JavaScript app and share functionality between the two. This allows you to take advantage of WebAssembly's performance and power and JavaScript's expressiveness and flexibility in the same apps, even if you don't know how to write WebAssembly code.

And what's even better is that it is being developed as a web standard via the [W3C WebAssembly Working Group](https://www.w3.org/wasm/) and [Community Group](https://www.w3.org/community/webassembly/) with active participation from all major browser vendors.

## Guides

- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
  - : Get started by reading the high-level concepts behind WebAssembly — what it is, why it is so useful, how it fits into the web platform (and beyond), and how to use it.
- [Compiling a New C/C++ Module to WebAssembly](/en-US/docs/WebAssembly/C_to_Wasm)
  - : When you've written code in C/C++, you can then compile it into Wasm using a tool like [Emscripten](https://emscripten.org/). Let's look at how it works.
- [Compiling an Existing C Module to WebAssembly](/en-US/docs/WebAssembly/existing_C_to_Wasm)
  - : A core use-case for WebAssembly is to take the existing ecosystem of C libraries and allow developers to use them on the web.
- [Compiling from Rust to WebAssembly](/en-US/docs/WebAssembly/Rust_to_Wasm)
  - : If you've written some Rust code, you can compile it into WebAssembly! This tutorial takes you through all you need to know to compile a Rust project to Wasm and use it in an existing web app.
- [Loading and running WebAssembly code](/en-US/docs/WebAssembly/Loading_and_running)
  - : After you have a Wasm module, this article covers how to fetch, compile and instantiate it, combining the [WebAssembly JavaScript](/en-US/docs/WebAssembly/JavaScript_interface) API with the [Fetch](/en-US/docs/Web/API/Fetch_API) or [XHR](/en-US/docs/Web/API/XMLHttpRequest) APIs.
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
  - : Once you've loaded a Wasm module, you'll want to use it. In this article we show you how to use WebAssembly via the WebAssembly JavaScript API.
- [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions)
  - : Exported WebAssembly functions are the JavaScript reflections of WebAssembly functions which allow calling WebAssembly code from JavaScript. This article describes what they are.
- [Understanding WebAssembly text format](/en-US/docs/WebAssembly/Understanding_the_text_format)
  - : This article explains the Wasm text format. This is the low-level textual representation of a Wasm module shown in browser developer tools when debugging.
- [Converting WebAssembly text format to Wasm](/en-US/docs/WebAssembly/Text_format_to_Wasm)
  - : This article provides a guide on how to convert a WebAssembly module written in the text format into a Wasm binary.

## API reference

- [WebAssembly instruction reference](/en-US/docs/WebAssembly/Reference)
  - : Reference documentation with interactive samples for the set of WebAssembly operators.
- [WebAssembly JavaScript interface](/en-US/docs/WebAssembly/JavaScript_interface)
  - : This object acts as the namespace for all WebAssembly related functionality.
- [`WebAssembly.Global()`](/en-US/docs/WebAssembly/JavaScript_interface/Global)
  - : A `WebAssembly.Global` object represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) instances. This allows dynamic linking of multiple modules.
- [`WebAssembly.Module()`](/en-US/docs/WebAssembly/JavaScript_interface/Module)
  - : A `WebAssembly.Module` object contains stateless WebAssembly code that has already been compiled by the browser and can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.
- [`WebAssembly.Instance()`](/en-US/docs/WebAssembly/JavaScript_interface/Instance)
  - : A `WebAssembly.Instance` object is a stateful, executable instance of a `Module`. `Instance` objects contain all the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions) that allow calling into WebAssembly code from JavaScript.
- [`WebAssembly.compile()`](/en-US/docs/WebAssembly/JavaScript_interface/compile_static)
  - : The `WebAssembly.compile()` function compiles WebAssembly binary code into a `WebAssembly.Module` object.
- [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
  - : The `WebAssembly.compileStreaming()` function compiles a `WebAssembly.Module` directly from a streamed underlying source.
- [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static)
  - : The `WebAssembly.instantiate()` function allows you to compile and instantiate WebAssembly code.
- [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
  - : The `WebAssembly.instantiateStreaming()` function is the primary API for compiling and instantiating WebAssembly code, returning both a `Module` and its first `Instance`.
- [`WebAssembly.validate()`](/en-US/docs/WebAssembly/JavaScript_interface/validate_static)
  - : The `WebAssembly.validate()` function validates a given typed array of WebAssembly binary code.
- [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory)
  - : A `WebAssembly.Memory` object is a resizable {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}} that holds the raw bytes of memory accessed by an `Instance`.
- [`WebAssembly.Table()`](/en-US/docs/WebAssembly/JavaScript_interface/Table)
  - : A `WebAssembly.Table` object is a resizable typed array of opaque values, like function references, that are accessed by an `Instance`.
- [`WebAssembly.Tag()`](/en-US/docs/WebAssembly/JavaScript_interface/Tag)
  - : The `WebAssembly.Tag` object defines a type of WebAssembly exception that can be thrown to/from WebAssembly code.
- [`WebAssembly.Exception()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception)
  - : The `WebAssembly.Exception` object represents a runtime exception thrown from WebAssembly to JavaScript, or thrown from JavaScript to a WebAssembly exception handler.
- [`WebAssembly.CompileError()`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError)
  - : Creates a new WebAssembly `CompileError` object.
- [`WebAssembly.LinkError()`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError)
  - : Creates a new WebAssembly `LinkError` object.
- [`WebAssembly.RuntimeError()`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError)
  - : Creates a new WebAssembly `RuntimeError` object.

## Examples

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- See our [webassembly-examples](https://github.com/mdn/webassembly-examples/) repo for a number of other examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm](https://web.dev/articles/emscripting-a-c-library)


_____
/WebAssembly/Concepts/index.md
===================================================

---
title: WebAssembly Concepts
slug: WebAssembly/Concepts
page-type: guide
---

{{WebAssemblySidebar}}

This article explains the concepts behind how WebAssembly works including its goals, the problems it solves, and how it runs inside the web browser's JavaScript engine.

## What is WebAssembly?

WebAssembly is a new type of code that can be run in modern web browsers and provides new features and major gains in performance. It is not primarily intended to be written by hand, rather it is designed to be an effective compilation target for source languages like C, C++, Rust, etc.

This has huge implications for the web platform — it provides a way to run code written in multiple languages on the web at near-native speed, with client apps running on the web that previously couldn't have done so.

What's more, you don't even have to know how to create WebAssembly code to take advantage of it. WebAssembly modules can be imported into a web (or Node.js) app, exposing WebAssembly functions for use via JavaScript. JavaScript frameworks could make use of WebAssembly to confer massive performance advantages and new features while still making functionality easily available to web developers.

## WebAssembly goals

WebAssembly is being created as an open standard inside the [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) with the following goals:

- Be fast, efficient, and portable — WebAssembly code can be executed at near-native speed across different platforms by taking advantage of [common hardware capabilities](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution).
- Be readable and debuggable — WebAssembly is a low-level assembly language, but it does have a human-readable text format (the specification for which is still being finalized) that allows code to be written, viewed, and debugged by hand.
- Keep secure — WebAssembly is specified to be run in a safe, sandboxed execution environment. Like other web code, it will enforce the browser's same-origin and permissions policies.
- Don't break the web — WebAssembly is designed so that it plays nicely with other web technologies and maintains backwards compatibility.

> **Note:** WebAssembly will also have uses outside web and JavaScript environments (see [Non-web embeddings](https://webassembly.org/docs/non-web/)).

## How does WebAssembly fit into the web platform?

The web platform can be thought of as having two parts:

- A virtual machine (VM) that runs the Web app's code, e.g. the JavaScript code that powers your apps.
- A set of [Web APIs](/en-US/docs/Web/API) that the Web app can call to control web browser/device functionality and make things happen ([DOM](/en-US/docs/Web/API/Document_Object_Model), [CSSOM](/en-US/docs/Web/API/CSS_Object_Model), [WebGL](/en-US/docs/Web/API/WebGL_API), [IndexedDB](/en-US/docs/Web/API/IndexedDB_API), [Web Audio API](/en-US/docs/Web/API/Web_Audio_API), etc.).

Historically, the VM has been able to load only JavaScript. This has worked well for us as JavaScript is powerful enough to solve most problems people have on the Web today. We have run into performance problems, however, when trying to use JavaScript for more intensive use cases like 3D games, Virtual and Augmented Reality, computer vision, image/video editing, and a number of other domains that demand native performance (see [WebAssembly use cases](https://webassembly.org/docs/use-cases/) for more ideas).

Additionally, the cost of downloading, parsing, and compiling very large JavaScript applications can be prohibitive. Mobile and other resource-constrained platforms can further amplify these performance bottlenecks.

WebAssembly is a different language from JavaScript, but it is not intended as a replacement. Instead, it is designed to complement and work alongside JavaScript, allowing web developers to take advantage of both languages' strong points:

- JavaScript is a high-level language, flexible and expressive enough to write web applications. It has many advantages — it is dynamically typed, requires no compile step, and has a huge ecosystem that provides powerful frameworks, libraries, and other tools.
- WebAssembly is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages with low-level memory models such as C++ and Rust with a compilation target so that they can run on the web. (Note that WebAssembly has the [high-level goal](https://webassembly.org/docs/high-level-goals/) of supporting languages with garbage-collected memory models in the future.)

With the advent of WebAssembly appearing in browsers, the virtual machine that we talked about earlier will now load and run two types of code — JavaScript AND WebAssembly.

The different code types can call each other as required — the [WebAssembly JavaScript API](/en-US/docs/WebAssembly/JavaScript_interface) wraps exported WebAssembly code with JavaScript functions that can be called normally, and WebAssembly code can import and synchronously call normal JavaScript functions. In fact, the basic unit of WebAssembly code is called a module and WebAssembly modules are symmetric in many ways to ES modules.

### WebAssembly key concepts

There are several key concepts needed to understand how WebAssembly runs in the browser. All of these concepts are reflected 1:1 in the [WebAssembly JavaScript API](/en-US/docs/WebAssembly/JavaScript_interface).

- **Module**: Represents a WebAssembly binary that has been compiled by the browser into executable machine code. A Module is stateless and thus, like a [`Blob`](/en-US/docs/Web/API/Blob), can be explicitly shared between windows and workers (via [`postMessage()`](/en-US/docs/Web/API/MessagePort/postMessage)). A Module declares imports and exports just like an ES module.
- **Memory**: A resizable ArrayBuffer that contains the linear array of bytes read and written by WebAssembly's low-level memory access instructions.
- **Table**: A resizable typed array of references (e.g. to functions) that could not otherwise be stored as raw bytes in Memory (for safety and portability reasons).
- **Instance**: A Module paired with all the state it uses at runtime including a Memory, Table, and set of imported values. An Instance is like an ES module that has been loaded into a particular global with a particular set of imports.

The JavaScript API provides developers with the ability to create modules, memories, tables, and instances. Given a WebAssembly instance, JavaScript code can synchronously call its exports, which are exposed as normal JavaScript functions. Arbitrary JavaScript functions can also be synchronously called by WebAssembly code by passing in those JavaScript functions as the imports to a WebAssembly instance.

Since JavaScript has complete control over how WebAssembly code is downloaded, compiled and run, JavaScript developers could even think of WebAssembly as just a JavaScript feature for efficiently generating high-performance functions.

In the future, WebAssembly modules will be [loadable just like ES modules](https://github.com/WebAssembly/proposals/issues/12) (using `<script type='module'>`), meaning that JavaScript will be able to fetch, compile, and import a WebAssembly module as easily as an ES module.

## How do I use WebAssembly in my app?

Above we talked about the raw primitives that WebAssembly adds to the Web platform: a binary format for code and APIs for loading and running this binary code. Now let's talk about how we can use these primitives in practice.

The WebAssembly ecosystem is at a nascent stage; more tools will undoubtedly emerge going forward. Right now, there are four main entry points:

- Porting a C/C++ application with [Emscripten](https://emscripten.org/).
- Writing or generating WebAssembly directly at the assembly level.
- Writing a Rust application and targeting WebAssembly as its output.
- Using [AssemblyScript](https://www.assemblyscript.org/) which looks similar to TypeScript and compiles to WebAssembly binary.

Let's talk about these options:

### Porting from C/C++

Two of the many options for creating Wasm code are an online Wasm assembler or [Emscripten](https://emscripten.org/). There are a number of online Wasm assembler choices, such as:

- [WasmFiddle](https://wasdk.github.io/WasmFiddle/)
- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

These are great resources for people who are trying to figure out where to start, but they lack some of the tooling and optimizations of Emscripten.

The Emscripten tool is able to take just about any C/C++ source code and compile it into a Wasm module, plus the necessary JavaScript "glue" code for loading and running the module, and an HTML document to display the results of the code.

![Diagram: Emscripten compiles C/C++ source code and into a Wasm module, an HTML document along with the JavaScript glue code.](emscripten-diagram.png)

In a nutshell, the process works as follows:

1. Emscripten first feeds the C/C++ into clang+LLVM — a mature open-source C/C++ compiler toolchain, shipped as part of XCode on OSX for example.
2. Emscripten transforms the compiled result of clang+LLVM into a Wasm binary.
3. By itself, WebAssembly cannot currently directly access the DOM; it can only call JavaScript, passing in integer and floating point primitive data types. Thus, to access any Web API, WebAssembly needs to call out to JavaScript, which then makes the Web API call. Emscripten therefore creates the HTML and JavaScript glue code needed to achieve this.

> **Note:** There are future plans to [allow WebAssembly to call Web APIs directly](https://github.com/WebAssembly/gc/blob/master/README.md).

The JavaScript glue code is not as simple as you might imagine. For a start, Emscripten implements popular C/C++ libraries like [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL), and parts of [POSIX](https://en.wikipedia.org/wiki/POSIX). These libraries are implemented in terms of Web APIs and thus each one requires some JavaScript glue code to connect WebAssembly to the underlying Web API.

So part of the glue code is implementing the functionality of each respective library used by the C/C++ code. The glue code also contains the logic for calling the above-mentioned WebAssembly JavaScript APIs to fetch, load and run the Wasm file.

The generated HTML document loads the JavaScript glue file and writes stdout to a {{htmlelement("textarea")}}. If the application uses OpenGL, the HTML also contains a {{htmlelement("canvas")}} element that is used as the rendering target. It's very easy to modify the Emscripten output and turn it into whatever web app you require.

You can find full documentation on Emscripten at [emscripten.org](https://emscripten.org), and a guide to implementing the toolchain and compiling your own C/C++ app across to Wasm at [Compiling from C/C++ to WebAssembly](/en-US/docs/WebAssembly/C_to_Wasm).

### Writing WebAssembly directly

Do you want to build your own compiler, or your own tools, or make a JavaScript library that generates WebAssembly at runtime?

In the same fashion as physical assembly languages, the WebAssembly binary format has a text representation — the two have a 1:1 correspondence. You can write or generate this format by hand and then convert it into the binary format with any of several [WebAssembly text-to-binary tools](https://webassembly.org/getting-started/advanced-tools/).

For a simple guide on how to do this, see our [Converting WebAssembly text format to Wasm](/en-US/docs/WebAssembly/Text_format_to_Wasm) article.

### Writing Rust Targeting WebAssembly

It is also possible to write Rust code and compile over to WebAssembly, thanks to the tireless work of the Rust WebAssembly Working Group. You can get started with installing the necessary toolchain, compiling a sample Rust program to a WebAssembly npm package, and using that in a sample web app, over at our [Compiling from Rust to WebAssembly](/en-US/docs/WebAssembly/Rust_to_Wasm) article.

### Using AssemblyScript

For web developers who want to try WebAssembly without needing to learn the details of C or Rust, staying in the comfort of a familiar language like TypeScript, AssemblyScript will be the best option. AssemblyScript compiles a strict variant of TypeScript to WebAssembly, allowing web developers to keep using TypeScript-compatible tooling they are familiar with — such as Prettier, ESLint, VS Code IntelliSense, etc. You can check its documentation on <https://www.assemblyscript.org/>.

## Summary

This article has given you an explanation of what WebAssembly is, why it is so useful, how it fits into the web, and how you can make use of it.

## See also

- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [Loading and running WebAssembly code](/en-US/docs/WebAssembly/Loading_and_running) — find out how to load your own WebAssembly module into a web page.
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API) — find out how to use the other major features of the WebAssembly JavaScript API.


_____
/WebAssembly/JavaScript_interface/index.md
===================================================

---
title: WebAssembly
slug: WebAssembly/JavaScript_interface
page-type: webassembly-interface
browser-compat: webassembly.api
---

{{WebAssemblySidebar}}

The **`WebAssembly`** JavaScript object acts as the namespace for all [WebAssembly](/en-US/docs/WebAssembly)-related functionality.

Unlike most other global objects, `WebAssembly` is not a constructor (it is not a function object). You can compare it to {{jsxref("Math")}}, which is also a namespace object for mathematical constants and functions, or to {{jsxref("Intl")}} which is the namespace object for internationalization constructors and other language-sensitive functions.

## Description

The primary uses for the `WebAssembly` object are:

- Loading WebAssembly code, using the [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) function.
- Creating new memory and table instances via the [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/en-US/docs/WebAssembly/JavaScript_interface/Table) constructors.
- Providing facilities to handle errors that occur in WebAssembly via the [`WebAssembly.CompileError()`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError) constructors.

## Constructor properties

- [`WebAssembly.CompileError()`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError/CompileError)
  - : Indicates an error during WebAssembly decoding or validation.
- [`WebAssembly.Global()`](/en-US/docs/WebAssembly/JavaScript_interface/Global/Global)
  - : Represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) instances. This allows dynamic linking of multiple modules.
- [`WebAssembly.Instance()`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/Instance)
  - : Is a stateful, executable instance of a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module)
- [`WebAssembly.LinkError()`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError/LinkError)
  - : Indicates an error during module instantiation (besides [traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) from the start function).
- [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/Memory)
  - : An object whose [`buffer`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/buffer) property is a resizable {{jsxref("ArrayBuffer")}} that holds the raw bytes of memory accessed by a WebAssembly `Instance`.
- [`WebAssembly.Module()`](/en-US/docs/WebAssembly/JavaScript_interface/Module/Module)
  - : Contains stateless WebAssembly code that has already been compiled by the browser and can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.
- [`WebAssembly.RuntimeError()`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError/RuntimeError)
  - : Error type that is thrown whenever WebAssembly specifies a [trap](https://webassembly.github.io/spec/core/exec/index.html).
- [`WebAssembly.Table()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/Table)
  - : An array-like structure representing a WebAssembly Table, which stores [references](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype), such as function references.
- [`WebAssembly.Tag()`](/en-US/docs/WebAssembly/JavaScript_interface/Tag/Tag)
  - : An object that represents a type of WebAssembly exception.
- [`WebAssembly.Exception()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/Exception)
  - : A WebAssembly exception object that can be thrown, caught, and rethrown both within and across WebAssembly/JavaScript boundaries.

## Static methods

- [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static)
  - : The primary API for compiling and instantiating WebAssembly code, returning both a `Module` and its first `Instance`.
- [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
  - : Compiles and instantiates a WebAssembly module directly from a streamed underlying source, returning both a `Module` and its first `Instance`.
- [`WebAssembly.compile()`](/en-US/docs/WebAssembly/JavaScript_interface/compile_static)
  - : Compiles a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) from WebAssembly binary code, leaving instantiation as a separate step.
- [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
  - : compiles a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) directly from a streamed underlying source, leaving instantiation as a separate step.
- [`WebAssembly.validate()`](/en-US/docs/WebAssembly/JavaScript_interface/validate_static)
  - : Validates a given typed array of WebAssembly binary code, returning whether the bytes are valid WebAssembly code (`true`) or not (`false`).

## Examples

### Stream a Wasm module then compile and instantiate it

The following example (see our [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) also) directly streams a Wasm module from an underlying source then compiles and instantiates it, the promise fulfilling with a `ResultObject`. Because the `instantiateStreaming()` function accepts a promise for a [`Response`](/en-US/docs/Web/API/Response) object, you can directly pass it a [`fetch()`](/en-US/docs/Web/API/fetch) call, and it will pass the response into the function when it fulfills.

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

The `ResultObject`'s `.instance` property is then accessed, and the contained exported function invoked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/instantiate_static/index.md
===================================================

---
title: WebAssembly.instantiate()
slug: WebAssembly/JavaScript_interface/instantiate_static
page-type: webassembly-function
browser-compat: webassembly.api.instantiate_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.instantiate()`** function allows you to
compile and instantiate WebAssembly code. This function has two overloads:

- The primary overload takes the WebAssembly binary code, in the form of a [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or
  {{jsxref("ArrayBuffer")}}, and performs both compilation and instantiation in one
  step. The returned `Promise` resolves to both a compiled
  [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) and its first [`WebAssembly.Instance`](/en-US/docs/WebAssembly/JavaScript_interface/Instance).
- The secondary overload takes an already-compiled [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module)
  and returns a `Promise` that resolves to an `Instance` of that
  `Module`. This overload is useful if the `Module` has already
  been compiled.

> **Warning:** This method is not the most efficient way of fetching and
> instantiating Wasm modules. If at all possible, you should use the newer
> [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) method instead, which fetches,
> compiles, and instantiates a module all in one step, directly from the raw bytecode,
> so doesn't require conversion to an {{jsxref("ArrayBuffer")}}.

## Syntax

### Primary overload — taking Wasm binary code

```js
WebAssembly.instantiate(bufferSource, importObject);
```

#### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or
    {{jsxref("ArrayBuffer")}} containing the binary code of the Wasm module you want to
    compile, or a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module).
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) objects.
    There must be one matching property for each declared import of the compiled module or
    else a [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError) is thrown.

#### Return value

A `Promise` that resolves to a `ResultObject` which contains two
fields:

- `module`: A [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object representing the compiled WebAssembly module. This `Module` can be instantiated again, shared via {{domxref("Worker.postMessage", "postMessage()")}}, or [cached](/en-US/docs/WebAssembly/Caching_modules).
- `instance`: A [`WebAssembly.Instance`](/en-US/docs/WebAssembly/JavaScript_interface/Instance) object that contains all the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions).

#### Exceptions

- If either of the parameters are not of the correct type or structure,
  the promise rejects with a {{jsxref("TypeError")}}.
- If the operation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError), or
  [`WebAssembly.RuntimeError`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError), depending on the cause of the failure.

### Secondary overload — taking a module object instance

```js
WebAssembly.instantiate(module, importObject);
```

#### Parameters

- `module`
  - : The [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object to be instantiated.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) objects.
    There must be one matching property for each declared import of `module` or
    else a [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError) is thrown.

#### Return value

A `Promise` that resolves to an [`WebAssembly.Instance`](/en-US/docs/WebAssembly/JavaScript_interface/Instance) object.

#### Exceptions

- If either of the parameters are not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If the operation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError), or
  [`WebAssembly.RuntimeError`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError), depending on the cause of the failure.

## Examples

> **Note:** You'll probably want to use [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) in most cases, as it is more efficient than `instantiate()`.

### First overload example

After fetching some WebAssembly bytecode using fetch, we compile and instantiate the
module using the `WebAssembly.instantiate()` function, importing a
JavaScript function into the WebAssembly Module in the process. We then call an [Exported WebAssembly function](/en-US/docs/WebAssembly/Exported_functions)
that is exported by the `Instance`.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => result.instance.exports.exported_func());
```

> **Note:** You can also find this example at [index.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index.html)
> on GitHub ([view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Second overload example

The following example (see our [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html)
demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) also)
compiles the loaded simple.wasm byte code using the
[`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static) method and then sends it to a [worker](/en-US/docs/Web/API/Web_Workers_API) using
{{domxref("Worker.postMessage", "postMessage()")}}.

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

In the worker (see
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js))
we define an import object for the module to use, then set up an event handler to
receive the module from the main thread. When the module is received, we create an
instance from it using the `WebAssembly.instantiate()` method and invoke an
exported function from inside it.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log("module received from main thread");
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Instance/index.md
===================================================

---
title: WebAssembly.Instance
slug: WebAssembly/JavaScript_interface/Instance
page-type: webassembly-interface
browser-compat: webassembly.api.Instance
---

{{WebAssemblySidebar}}

A **`WebAssembly.Instance`** object is a stateful, executable instance of a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module). `Instance` objects contain all the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions) that allow calling into WebAssembly code from JavaScript.

## Constructor

- [`WebAssembly.Instance()`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/Instance)
  - : Creates a new `Instance` object.

## Instance properties

- [`exports`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/exports)
  - : Returns an object containing as its members all the functions exported from the WebAssembly module instance, to allow them to be accessed and used by JavaScript. Read-only.

## Examples

### Synchronously instantiating a WebAssembly module

The `WebAssembly.Instance()` constructor function can be called to synchronously instantiate a given [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object, for example:

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(mod, importObject);
    instance.exports.exported_func();
  });
```

The preferred way to get an `Instance` is asynchronously, for example using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) function like this:

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

This also demonstrates how the `exports` property is used to access exported functions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/Exported_functions/index.md
===================================================

---
title: Exported WebAssembly functions
slug: WebAssembly/Exported_functions
page-type: guide
---

{{WebAssemblySidebar}}

Exported WebAssembly functions are how WebAssembly functions are represented in JavaScript. This article describes what they are in a little more detail.

## Exported… What?

Exported WebAssembly functions are basically just JavaScript wrappers that represent WebAssembly functions in JavaScript. When you call them, you get some activity in the background to convert the arguments into types that Wasm can work with (for example converting JavaScript numbers to Int32), the arguments are passed to the function inside your Wasm module, the function is invoked, and the result is converted and passed back to JavaScript.

You can retrieve exported WebAssembly functions in two ways:

- By calling [`Table.prototype.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get) on an existing table.
- By accessing a function exported from a Wasm module instance via [`Instance.exports`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/exports).

Either way, you get the same kind of wrapper for the underlying function. From a JavaScript point of view, it's as if every Wasm function _is_ a JavaScript function too — but they are encapsulated by the exported Wasm function object instance and there are only limited ways to access them.

## An example

Let's look at an example to clear things up (you can find this on GitHub as [table-set.html](https://github.com/mdn/webassembly-examples/blob/main/other-examples/table-set.html); see it [running live also](https://mdn.github.io/webassembly-examples/other-examples/table-set.html), and check out the Wasm [text representation](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat)):

```js
const otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
  otherTable.set(0, tbl.get(0));
  otherTable.set(1, tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});
```

Here we create a table (`otherTable`) from JavaScript using the [`WebAssembly.Table`](/en-US/docs/WebAssembly/JavaScript_interface/Table) constructor, then we load `table.wasm` into our page using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) method.

We then get the function exported from the module, retrieve the functions it references via [`tbl.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get) and log the result of invoking each one to the console. Next, we use `set()` to make the `otherTable` table contain references to the same functions as the `tbl` table.

To prove this, we then retrieve these references back from `otherTable` and print their results to console too, which gives the same results.

## They are real functions

In the previous example, the return value of each [`Table.prototype.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get) call is an exported WebAssembly function — exactly what we have been talking about.

It is worth noting that these are real JavaScript functions, in addition to being wrappers for WebAssembly functions. If you load the above example in a [WebAssembly-supporting browser](/en-US/docs/WebAssembly#browser_compatibility), and run the following lines in your console:

```js
const testFunc = otherTable.get(0);
typeof testFunc;
```

you'll get the result `function` returned. You can then go on to do pretty much anything to this function that you can do to other [functions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) in JavaScript — [`call()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`bind()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), etc. `testFunc.toString()` returns an interesting result:

```plain
function 0() {
    [native code]
}
```

This gives you more of an idea of its wrapper-type nature.

Some other particulars to be aware of with exported WebAssembly functions:

- Their [length](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) property is the number of declared arguments in the Wasm function signature.
- Their [name](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property is the `toString()` result of the function's index in the Wasm module.
- If you try to call an exported Wasm function that takes or returns an i64 type value, it currently throws an error because JavaScript currently has no precise way to represent an i64. This may well change in the future though — a new int64 type is being considered for future standards, which could then be used by Wasm.


_____
/WebAssembly/JavaScript_interface/Table/get/index.md
===================================================

---
title: WebAssembly.Table.prototype.get()
slug: WebAssembly/JavaScript_interface/Table/get
page-type: webassembly-instance-method
browser-compat: webassembly.api.Table.get
---

{{WebAssemblySidebar}}

The **`get()`** prototype method of the [`WebAssembly.Table()`](/en-US/docs/WebAssembly/JavaScript_interface/Table) object retrieves the element stored at a given index.

## Syntax

```js-nolint
get(index)
```

### Parameters

- `index`
  - : The index of the element you want to retrieve.

### Return value

Depending the element type of the Table, can be a function reference — this is an [exported WebAssembly function](/en-US/docs/WebAssembly/Exported_functions), a JavaScript wrapper for an underlying Wasm function, or it can be a host reference.

### Exceptions

If _index_ is greater than or equal to [`Table.prototype.length`](/en-US/docs/WebAssembly/JavaScript_interface/Table/length), a {{jsxref("RangeError")}} is thrown.

## Examples

### Using get

The following example (see [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html) also) compiles and instantiates the loaded table.wasm byte code using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) method. It then retrieves the references stored in the exported table.

```js
WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
});
```

Note how you've got to include a second function invocation operator at the end of the accessor to actually retrieve the value stored inside the reference (e.g. `get(0)()` rather than `get(0)`) — it is a function rather than a simple value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Table/index.md
===================================================

---
title: WebAssembly.Table
slug: WebAssembly/JavaScript_interface/Table
page-type: webassembly-interface
browser-compat: webassembly.api.Table
---

{{WebAssemblySidebar}}

The **`WebAssembly.Table`** object is a JavaScript wrapper object — an array-like structure representing a WebAssembly table, which stores homogeneous references. A table created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly.

> **Note:** Tables can currently only store function references, or host references, but this will likely be expanded in the future.

## Constructor

- [`WebAssembly.Table()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/Table)
  - : Creates a new `Table` object.

## Instance properties

- [`Table.prototype.length`](/en-US/docs/WebAssembly/JavaScript_interface/Table/length) {{ReadOnlyInline}}
  - : Returns the length of the table, i.e. the number of elements in the table.

## Instance methods

- [`Table.prototype.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get)
  - : Accessor function — gets the element stored at a given index.
- [`Table.prototype.grow()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/grow)
  - : Increases the size of the `Table` instance by a specified number of elements.
- [`Table.prototype.set()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/set)
  - : Sets an element stored at a given index to a given value.

## Examples

### Creating a new WebAssembly Table instance

The following example (see table2.html [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) and [live version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) creates a new WebAssembly Table instance with an initial size of 2 elements. We then print out the table length and contents of the two indexes (retrieved via [`Table.prototype.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get) to show that the length is two and both elements are [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

We then create an import object that contains the table:

```js
const importObj = {
  js: { tbl },
};
```

Finally, we load and instantiate a Wasm module (table2.wasm) using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) method. The table2.wasm module contains two functions (one that returns 42 and another that returns 83) and stores both into elements 0 and 1 of the imported table (see [text representation](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat)). So after instantiation, the table still has length 2, but the elements now contain callable [Exported WebAssembly Functions](/en-US/docs/WebAssembly/Exported_functions) which we can call from JS.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Note how you've got to include a second function invocation operator at the end of the accessor to actually invoke the referenced function and log the value stored inside it (e.g. `get(0)()` rather than `get(0)`) .

This example shows that we're creating and accessing the table from JavaScript, but the same table is visible and callable inside the Wasm instance too.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Table/Table/index.md
===================================================

---
title: WebAssembly.Table() constructor
slug: WebAssembly/JavaScript_interface/Table/Table
page-type: webassembly-constructor
browser-compat: webassembly.api.Table.Table
---

{{WebAssemblySidebar}}

The **`WebAssembly.Table()`** constructor creates a new `Table` object of the given size and element type, filled with the provided value.

## Syntax

```js-nolint
new WebAssembly.Table(tableDescriptor)
new WebAssembly.Table(tableDescriptor, value)
```

### Parameters

- `tableDescriptor`

  - : An object that can contain the following members:

    - `element`
      - : A string representing the type of value to be stored in the table. This can have a value of `"anyfunc"` (functions) or `"externref"` (host references).
    - `initial`
      - : The initial number of elements of the WebAssembly Table.
    - `maximum` {{optional_inline}}
      - : The maximum number of elements the WebAssembly Table is allowed to grow to.

- `value` {{optional_inline}}

  - : The element to fill the newly-allocated space with.

### Exceptions

- If `tableDescriptor` is not an object, a {{jsxref("TypeError")}} is thrown.
- If `maximum` is specified and is smaller than `initial`, a {{jsxref("RangeError")}} is thrown.
- If `element` is not one of the [reference types](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype), then a {{jsxref("TypeError")}} is thrown.
- If `value` is not a value of the type `element`, a {{jsxref("TypeError")}} is thrown.

## Examples

### Creating a new WebAssembly Table instance

The following example creates a `WebAssembly.Table` instance with an initial size of 2 elements. The `WebAssembly.Table` contents are populated using a WebAssembly module and are accessible from JavaScript. When viewing the [live example](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html), open your developer console to display console log messages from the code snippets below.

This example uses the following reference files:

1. `table2.html`: An HTML file containing JavaScript that creates a `WebAssembly.Table` ([source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html))
2. `table2.wasm`: A WebAssembly module imported by the JavaScript code in `table2.html` ([source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat))

In `table2.html`, we create a `WebAssembly.Table`:

```js
const tbl = new WebAssembly.Table({
  initial: 2,
  element: "anyfunc",
});
```

We can retrieve the index contents using [`Table.prototype.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get):

```js
console.log(tbl.length); // a table with 2 elements
console.log(tbl.get(0)); // content for index 0 is null
console.log(tbl.get(1)); // content for index 1 is null
```

Next, we create an import object that contains the `WebAssembly.Table`:

```js
const importObject = {
  js: { tbl },
};
```

Next, we load and instantiate a WebAssembly module. The `table2.wasm` module defines a table containing two functions. The first function returns 42, and the second returns 83:

```wasm
(module
    (import "js" "tbl" (table 2 anyfunc))
    (func $f42 (result i32) i32.const 42)
    (func $f83 (result i32) i32.const 83)
    (elem (i32.const 0) $f42 $f83)
)
```

We instantiate `table2.wasm` using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) method:

```js
const instantiating = WebAssembly.instantiateStreaming(
  fetch("table2.wasm"),
  importObject,
);
```

After instantiating `table2.wasm`, `tbl` is updated with the following:

- table length is still 2
- content for index 0 is now a function which returns 42
- content for index 1 is now a function which returns 83

The items at indexes 0 and 1 of the table are now callable [Exported WebAssembly Functions](/en-US/docs/WebAssembly/Exported_functions). To call them, note that we must add the function invocation operator `()` after the `get()` call:

```js
instantiating.then((obj) => {
  console.log(tbl.length); // 2
  console.log(tbl.get(0)()); // 42
  console.log(tbl.get(1)()); // 83
});
```

While we are creating and accessing the `WebAssembly.Table` from JavaScript, the same `Table` is also visible and callable inside the WebAssembly instance.

### Creating a new WebAssembly Table instance with a value

The following example creates a new WebAssembly Table instance with 4 elements, full of the same object:

```js
const myObject = { hello: "world" };

const table = new WebAssembly.Table(
  {
    element: "externref",
    initial: 4,
    maximum: 4,
  },
  myObject,
);

console.log(myObject === table.get(2)); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/instantiateStreaming_static/index.md
===================================================

---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming_static
page-type: webassembly-function
browser-compat: webassembly.api.instantiateStreaming_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.instantiateStreaming()`** static method compiles
and instantiates a WebAssembly module directly from a streamed underlying source. This
is the most efficient, optimized way to load Wasm code.

> **Note:** Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source, importObject)
```

### Parameters

- `source`
  - : A [`Response`](/en-US/docs/Web/API/Response)
    object or a promise that will fulfill with one, representing the underlying source of
    a Wasm module you want to stream, compile, and instantiate.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) objects.
    There must be one matching property for each declared import of the compiled module or
    else a
    [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError)
    is thrown.

### Return value

A `Promise` that resolves to a `ResultObject` which contains two
fields:

- `module`: A [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object representing the
  compiled WebAssembly module. This `Module` can be instantiated again or
  shared via [postMessage()](/en-US/docs/Web/API/Worker/postMessage).
- `instance`: A [`WebAssembly.Instance`](/en-US/docs/WebAssembly/JavaScript_interface/Instance) object that contains all
  the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions).

### Exceptions

- If either of the parameters are not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If the operation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError), or
  [`WebAssembly.RuntimeError`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError), depending on the cause of the failure.

## Examples

### Instantiating streaming

The following example (see our [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) also)
directly streams a Wasm module from an underlying source then
compiles and instantiates it, the promise fulfilling with a `ResultObject`.
Because the `instantiateStreaming()` function accepts a promise for a [`Response`](/en-US/docs/Web/API/Response)
object, you can directly pass it a [`fetch()`](/en-US/docs/Web/API/fetch)
call, and it will pass the response into the function when it fulfills.

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

The `ResultObject`'s instance member is then accessed, and the contained
exported function invoked.

> **Note:** For this to work, `.wasm` files should be returned
> with an `application/wasm` MIME type by the server.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Memory/index.md
===================================================

---
title: WebAssembly.Memory
slug: WebAssembly/JavaScript_interface/Memory
page-type: webassembly-interface
browser-compat: webassembly.api.Memory
---

{{WebAssemblySidebar}}

The **`WebAssembly.Memory`** object is a resizable {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} that holds the raw bytes of memory accessed by a [`WebAssembly.Instance`](/en-US/docs/WebAssembly/JavaScript_interface/Instance).

Both WebAssembly and JavaScript can create `Memory` objects. If you want to access the memory created in JS from Wasm or vice versa, you can pass a reference to the memory from one side to the other.

## Constructor

- [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/Memory)
  - : Creates a new `Memory` object.

## Instance properties

- [`Memory.prototype.buffer`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Returns the buffer contained in the memory.

## Instance methods

- [`Memory.prototype.grow()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/grow)
  - : Increases the size of the memory instance by a specified number of WebAssembly pages (each one is 64KiB in size). Detaches the previous `buffer`.

## Examples

### Creating a new Memory object

There are two ways to get a `WebAssembly.Memory` object. The first way is to construct it from JavaScript. The following snippet creates a new WebAssembly Memory instance with an initial size of 10 pages (640KiB), and a maximum size of 100 pages (6.4MiB). Its [`buffer`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/buffer) property will return an {{jsxref("ArrayBuffer")}}.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) fetches and instantiates the loaded memory.wasm bytecode using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) function, while importing the memory created in the line above. It then stores some values in that memory, exports a function, and uses the exported function to sum those values.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new Uint32Array(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands[i] = i;
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

Another way to get a `WebAssembly.Memory` object is to have it exported by a WebAssembly module. This memory can be accessed in the `exports` property of the WebAssembly instance (after the memory is exported within the WebAssembly module). The following example imports a memory exported from WebAssembly with the name `memory`, and then prints out the first element of the memory, interpreted as an {{jsxref("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new Uint32Array(obj.instance.exports.memory.buffer);
  console.log(values[0]);
});
```

### Creating a shared memory

By default, WebAssembly memories are unshared. You can create a [shared memory](/en-US/docs/WebAssembly/Understanding_the_text_format#shared_memories) from JavaScript by passing `shared: true` in the constructor's initialization object:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

This memory's `buffer` property will return a {{jsxref("SharedArrayBuffer")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Memory/Memory/index.md
===================================================

---
title: WebAssembly.Memory() constructor
slug: WebAssembly/JavaScript_interface/Memory/Memory
page-type: webassembly-constructor
browser-compat: webassembly.api.Memory.Memory
---

{{WebAssemblySidebar}}

The **`WebAssembly.Memory()`** constructor creates a new `Memory` object whose [`buffer`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/buffer) property is a resizable {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} that holds the raw bytes of memory accessed by a [`WebAssembly.Instance`](/en-US/docs/WebAssembly/JavaScript_interface/Instance).

A memory object created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly, provided that the code constructed the object, or has been given the object.

Both WebAssembly and JavaScript can create `Memory` objects. If you want to access the memory created in JS from Wasm or vice versa, you can pass a reference to the memory from one side to the other.

## Syntax

```js-nolint
new WebAssembly.Memory(memoryDescriptor)
```

### Parameters

- `memoryDescriptor`

  - : An object that can contain the following members:

    - `initial`
      - : The initial size of the WebAssembly Memory, in units of WebAssembly pages.
    - `maximum` {{optional_inline}}
      - : The maximum size the WebAssembly Memory is allowed to grow to, in units of
        WebAssembly pages. When present, the `maximum` parameter acts as a hint
        to the engine to reserve memory up front. However, the engine may ignore or clamp
        this reservation request. Unshared WebAssembly memories don't need to set a
        `maximum`, but shared memories do.
    - `shared` {{optional_inline}}
      - : A boolean value that defines whether the memory is a shared memory or not. If
        set to `true`, it is a shared memory. The default is `false`.

> **Note:** A WebAssembly page has a constant size of 65,536 bytes, i.e., 64KiB.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if at least one of these conditions is met:
    - `memoryDescriptor` is not an object.
    - `initial` is not specified.
    - `shared` is present and `true`, yet `maximum` is not specified.
- {{jsxref("RangeError")}}
  - : Thrown if at least one of these conditions is met:
    - `maximum` is specified and is smaller than `initial`.
    - `initial` exceeds 65,536 (2^16). 2^16 pages is 2^16 \* 64KiB = 4GiB bytes, which is the maximum range that a Wasm module can address, as Wasm currently only allows 32-bit addressing.
    - Allocation fails. This may occur due to attempting to allocate too much at once, or if the User Agent is otherwise out of memory.

## Examples

### Creating a new Memory instance

There are two ways to get a `WebAssembly.Memory` object: construct it from JavaScript, or have it exported by a WebAssembly module.

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) creates a new WebAssembly Memory instance with an initial size of 10 pages (640KiB), and a maximum size of 100 pages (6.4MiB). The example fetches and instantiates the loaded memory.wasm bytecode using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming) function, while importing the memory created in the line above. It then stores some values in that memory, exports a function, and uses the exported function to sum those values. The `Memory` object's [`buffer`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/buffer) property will return an {{jsxref("ArrayBuffer")}}.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new Uint32Array(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands[i] = i;
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

### Creating a shared memory

By default, WebAssembly memories are unshared.
You can create a [shared memory](/en-US/docs/WebAssembly/Understanding_the_text_format#shared_memories)
from JavaScript by passing `shared: true` in the constructor's initialization object:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

This memory's `buffer` property will return a {{jsxref("SharedArrayBuffer")}}.

## Specifications

The `shared` attribute is only documented in [the Threading proposal for WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#javascript-api-changes) and not part of the official specs.

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Memory/buffer/index.md
===================================================

---
title: WebAssembly.Memory.prototype.buffer
slug: WebAssembly/JavaScript_interface/Memory/buffer
page-type: webassembly-instance-property
browser-compat: webassembly.api.Memory.buffer
---

{{WebAssemblySidebar}}

The read-only **`buffer`** prototype property of the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) object returns the buffer contained in the memory. Depending on whether or not the memory was constructed with `shared: true`, the buffer is either an {{jsxref("ArrayBuffer")}} or a {{jsxref("SharedArrayBuffer")}}.

## Examples

### Using buffer

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) fetches and instantiates the loaded memory.wasm bytecode using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) function, while importing the memory created in the line above. It then stores some values in that memory, exports a function, and uses the exported function to sum those values.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new Uint32Array(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands[i] = i;
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/Using_the_JavaScript_API/index.md
===================================================

---
title: Using the WebAssembly JavaScript API
slug: WebAssembly/Using_the_JavaScript_API
page-type: guide
---

{{WebAssemblySidebar}}

If you have already [compiled a module from another language using tools like Emscripten](/en-US/docs/WebAssembly/C_to_Wasm), or [loaded and run the code yourself](/en-US/docs/WebAssembly/Loading_and_running), the next step is to learn more about using the other features of the WebAssembly JavaScript API. This article teaches you what you'll need to know.

> **Note:** If you are unfamiliar with the basic concepts mentioned in this article and need more explanation, read [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts) first, then come back.

## Some simple examples

Let's run through some examples that explain how to use the WebAssembly JavaScript API, and how to use it to load a Wasm module in a web page.

> **Note:** You can find the sample code in our [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub repo.

### Preparing the example

1. First we need a Wasm module! Grab our [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm) file and save a copy in a new directory on your local machine.
2. Next, let's create a simple HTML file called `index.html` in the same directory as your Wasm file (can use our [simple template](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) if you haven't got one easily available).
3. Now, to help us understand what is going on here, let's look at the text representation of our Wasm module (which we also meet in [Converting WebAssembly format to Wasm](/en-US/docs/WebAssembly/Text_format_to_Wasm#a_first_look_at_the_text_format)):

   ```wasm
   (module
     (func $i (import "imports" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In the second line, you will see that the import has a two-level namespace — the internal function `$i` is imported from `imports.imported_func`. We need to reflect this two-level namespace in JavaScript when writing the object to be imported into the Wasm module. Create a `<script></script>` element in your HTML file, and add the following code to it:

   ```js
   const importObject = {
     imports: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming the WebAssembly module

New in Firefox 58 is the ability to compile and instantiate WebAssembly modules directly from underlying sources. This is achieved using the [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static) and [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) methods. These methods are easier than their non-streaming counterparts, because they can turn the byte code directly into `Module`/`Instance` instances, cutting out the need to separately put the {{domxref("Response")}} into an {{jsxref("ArrayBuffer")}}.

This example (see our [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) also) shows how to use `instantiateStreaming()` to fetch a Wasm module, import a JavaScript function into it, compile and instantiate it, and access its exported function — all in one step.

Add the following to your script, below the first block:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

The net result of this is that we call our exported WebAssembly function `exported_func`, which in turn calls our imported JavaScript function `imported_func`, which logs the value provided inside the WebAssembly instance (42) to the console. If you save your example code now and load it a browser that supports WebAssembly, you'll see this in action!

> **Note:** This is a convoluted, long-winded example that achieves very little, but it does serve to illustrate what is possible — using WebAssembly code alongside JavaScript in your web applications. As we've said elsewhere, WebAssembly doesn't aim to replace JavaScript; the two instead can work together, drawing on each other's strengths.

### Loading our Wasm module without streaming

If you can't or don't want to use the streaming methods as described above, you can use the non-streaming methods [`WebAssembly.compile()`](/en-US/docs/WebAssembly/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) instead.

These methods don't directly access the byte code, so require an extra step to turn the response into an {{jsxref("ArrayBuffer")}} before compiling/instantiating the Wasm module.

The equivalent code would look like this:

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### Viewing Wasm in developer tools

In Firefox 54+, the Developer Tool Debugger Panel has functionality to expose the text representation of any Wasm code included in a web page. To view it, you can go to the Debugger Panel and click on the "wasm://" entry.

![Developer tools debugger panel highlighting a module.](wasm-debug.png)

In addition to viewing WebAssembly as text, developers are able to debug (place breakpoints, inspect the callstack, single-step, etc.) WebAssembly using the text format.

## Memory

In the low-level memory model of WebAssembly, memory is represented as a contiguous range of untyped bytes called [Linear Memory](https://webassembly.github.io/spec/core/exec/index.html) that are read and written by [load and store instructions](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) inside the module. In this memory model, any load or store can access any byte in the entire linear memory, which is necessary to faithfully represent C/C++ concepts like pointers.

Unlike a native C/C++ program, however, where the available memory range spans the entire process, the memory accessible by a particular WebAssembly Instance is confined to one specific — potentially very small — range contained by a WebAssembly Memory object. This allows a single web app to use multiple independent libraries — each of which are using WebAssembly internally — to have separate memories that are fully isolated from each other. In addition, newer implementations can also create [shared memories](/en-US/docs/WebAssembly/Understanding_the_text_format#shared_memories), which can be transferred between Window and Worker contexts using [`postMessage()`](/en-US/docs/Web/API/Window/postMessage), and used in multiple places.

In JavaScript, a Memory instance can be thought of as a resizable [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (or [`SharedArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), in the case of shared memories) and, just as with `ArrayBuffers`, a single web app can create many independent Memory objects. You can create one using the [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) constructor, which takes as arguments an initial size and (optionally) a maximum size and a `shared` property that states whether it is a shared memory or not.

Let's start exploring this by looking at a quick example.

1. Create another new simple HTML page (copy our [simple template](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) and call it `memory.html`. Add a `<script></script>` element to the page.
2. Now add the following line to the top of your script, to create a memory instance:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   The unit of `initial` and `maximum` is WebAssembly pages — these are fixed to 64KB in size. This means that the above memory instance has an initial size of 640KB, and a maximum size of 6.4MB.

   WebAssembly memory exposes its bytes by providing a buffer getter/setter that returns an ArrayBuffer. For example, to write 42 directly into the first word of linear memory, you can do this:

   ```js
   new Uint32Array(memory.buffer)[0] = 42;
   ```

   You can then return the same value using:

   ```js
   new Uint32Array(memory.buffer)[0];
   ```

3. Try this now in your demo — save what you've added so far, load it in your browser, then try entering the above two lines in your JavaScript console.

### Growing memory

A memory instance can be grown by calls to [`Memory.prototype.grow()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/grow), where again the argument is specified in units of WebAssembly pages:

```js
memory.grow(1);
```

If a maximum value was supplied upon creation of the memory instance, attempts to grow past this maximum will throw a {{jsxref("RangeError")}} exception. The engine takes advantage of this supplied upper-bounds to reserve memory ahead of time, which can make resizing more efficient.

Note: Since an {{jsxref("ArrayBuffer")}}'s byteLength is immutable, after a successful [`Memory.prototype.grow()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/grow) operation the buffer getter will return a new ArrayBuffer object (with the new byteLength) and any previous ArrayBuffer objects become "detached", or disconnected from the underlying memory they previously pointed to.

Just like functions, linear memories can be defined inside a module or imported. Similarly, a module may also optionally export its memory. This means that JavaScript can get access to the memory of a WebAssembly instance either by creating a new `WebAssembly.Memory` and passing it in as an import or by receiving a Memory export (via [`Instance.prototype.exports`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/exports)).

### More involved memory example

Let's make the above assertions clearer by looking at a more involved memory example — a WebAssembly module that imports the memory instance we defined earlier, populates it with an array of integers, then sums them. You can find this at [memory.wasm.](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm)

1. make a local copy of `memory.wasm` in the same directory as before.

   > **Note:** You can see the module's text representation at [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat).

2. Go back to your `memory.html` sample file, and fetch, compile, and instantiate your Wasm module as before — add the following to the bottom of your script:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. Since this module exports its memory, given an Instance of this module called instance we can use an exported function `accumulate()` to create and populate an input array directly in the module instance's linear memory (`mem`). Add the following into your code, where indicated:

   ```js
   const i32 = new Uint32Array(memory.buffer);

   for (let i = 0; i < 10; i++) {
     i32[i] = i;
   }

   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Note how we create the {{jsxref("Uint32Array")}} view on the Memory object's buffer ([`Memory.prototype.buffer`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/buffer)), not on the Memory itself.

Memory imports work just like function imports, only Memory objects are passed as values instead of JavaScript functions. Memory imports are useful for two reasons:

- They allow JavaScript to fetch and create the initial contents of memory before or concurrently with module compilation.
- They allow a single Memory object to be imported by multiple module instances, which is a critical building block for implementing dynamic linking in WebAssembly.

> **Note:** You can find our complete demo at [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) ([see it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) .

## Tables

A WebAssembly Table is a resizable typed array of [references](<https://en.wikipedia.org/wiki/Reference_(computer_science)>) that can be accessed by both JavaScript and WebAssembly code. While Memory provides a resizable typed array of raw bytes, it is unsafe for references to be stored in a Memory since a reference is an engine-trusted value whose bytes must not be read or written directly by content for safety, portability, and stability reasons.

Tables have an element type, which limits the types of reference that can be stored in the table. In the current iteration of WebAssembly, there is only one type of reference needed by WebAssembly code — functions — and thus only one valid element type. In future iterations, more element types will be added.

Function references are necessary to compile languages like C/C++ that have function pointers. In a native implementation of C/C++, a function pointer is represented by the raw address of the function's code in the process's virtual address space and so, for the safety reasons mentioned above, cannot be stored directly in linear memory. Instead, function references are stored in a table and their indexes, which are integers and can be stored in linear memory, are passed around instead.

When the time comes to call a function pointer, the WebAssembly caller supplies the index, which can then be safety bounds checked against the table before indexing and calling the indexed function reference. Thus, tables are currently a rather low-level primitive used to compile low-level programming language features safely and portably.

Tables can be mutated via [`Table.prototype.set()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/set), which updates one of the values in a table, and [`Table.prototype.grow()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/grow), which increases the number of values that can be stored in a table. This allows the indirectly-callable set of functions to change over time, which is necessary for [dynamic linking techniques](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md). The mutations are immediately accessible via [`Table.prototype.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get) in JavaScript, and to Wasm modules.

### A table example

Let's look at a simple table example — a WebAssembly module that creates and exports a table with two elements: element 0 returns 13 and element 1 returns 42. You can find this at [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm).

1. Make a local copy of `table.wasm` in a new directory.

   > **Note:** You can see the module's text representation at [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat).

2. Create a new copy of our [HTML template](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) in the same directory and call it `table.html`.
3. As before, fetch, compile, and instantiate your Wasm module — add the following into a {{htmlelement("script")}} element at the bottom of your HTML body:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // add code here
   });
   ```

4. Now let's access the data in the tables — add the following lines to your code in the indicated place:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

This code accesses each function reference stored in the table in turn, and instantiates them to print the values they hold to the console — note how each function reference is retrieved with a [`Table.prototype.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get) call, then we add an extra set of parentheses on the end to actually invoke the function.

> **Note:** You can find our complete demo at [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) ([see it live also](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)).

## Globals

WebAssembly has the ability to create global variable instances, accessible from both JavaScript and importable/exportable across one or more [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) instances. This is very useful, as it allows dynamic linking of multiple modules.

To create a WebAssembly global instance from inside your JavaScript, you use the [`WebAssembly.Global()`](/en-US/docs/WebAssembly/JavaScript_interface/Global) constructor, which looks like this:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

You can see that this takes two parameters:

- An object that contains two properties describing the global variable:

  - `value`: its data type, which can be any data type accepted within WebAssembly modules — `i32`, `i64`, `f32`, or `f64`.
  - `mutable`: a boolean defining whether the value is mutable or not.

- A value containing the variable's actual value. This can be any value, as long as its type matches the specified data type.

So how do we use this? In the following example we define a global as a mutable `i32` type, with a value of 0.

The value of the global is then changed, first to `42` using the `Global.value` property, and then to 43 using the `incGlobal()` function exported out of the `global.wasm` module (this adds 1 to whatever value is given to it and then returns the new value).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}<br>`
      : `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
  output.innerHTML += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> **Note:** You can see the example [running live on GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); see also the [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Multiplicity

Now we've demonstrated usage of the main key WebAssembly building blocks, this is a good place to mention the concept of multiplicity. This provides WebAssembly with a multitude of advances in terms of architectural efficiency:

- One module can have N Instances, in the same way that one function literal can produce N closure values.
- One module instance can use 0–1 memory instances, which provide the "address space" of the instance. Future versions of WebAssembly may allow 0–N memory instances per module instance (see [Multiple Memories](https://webassembly.org/roadmap/)).
- One module instance can use 0–1 table instances — this is the "function address space" of the instance, used to implement C function pointers. Future versions of WebAssembly may allow 0–N table instances per module instance.
- One memory or table instance can be used by 0–N module instances — these instances all share the same address space, allowing [dynamic linking](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md).

You can see multiplicity in action in our Understanding text format article — see the [Mutating tables and dynamic linking section](/en-US/docs/WebAssembly/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Summary

This article has taken you through the basics of using the WebAssembly JavaScript API to include a WebAssembly module in a JavaScript context and make use of its functions, and how to use WebAssembly memory and tables in JavaScript. We also touched on the concept of multiplicity.

## See also

- [webassembly.org](https://webassembly.org/)
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/)


_____
/WebAssembly/Loading_and_running/index.md
===================================================

---
title: Loading and running WebAssembly code
slug: WebAssembly/Loading_and_running
page-type: guide
---

{{WebAssemblySidebar}}

To use WebAssembly in JavaScript, you first need to pull your module into memory before compilation/instantiation. This article provides a reference for the different mechanisms that can be used to fetch WebAssembly bytecode, as well as how to compile/instantiate then run it.

## What are the options?

WebAssembly is not yet integrated with `<script type='module'>` or `import` statements, thus there is not a path to have the browser fetch modules for you using imports.

The older [`WebAssembly.compile`](/en-US/docs/WebAssembly/JavaScript_interface/compile_static)/[`WebAssembly.instantiate`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) methods require you to create an {{jsxref("ArrayBuffer")}} containing your WebAssembly module binary after fetching the raw bytes, and then compile/instantiate it. This is analogous to `new Function(string)`, except that we are substituting a string of characters (JavaScript source code) with an array buffer of bytes (WebAssembly source code).

The newer [`WebAssembly.compileStreaming`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static)/[`WebAssembly.instantiateStreaming`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) methods are a lot more efficient — they perform their actions directly on the raw stream of bytes coming from the network, cutting out the need for the {{jsxref("ArrayBuffer")}} step.

So how do we get those bytes into an array buffer and compiled? The following sections explain.

## Using Fetch

[Fetch](/en-US/docs/Web/API/Fetch_API) is a convenient, modern API for fetching network resources.

The quickest, most efficient way to fetch a Wasm module is using the newer [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) method, which can take a `fetch()` call as its first argument, and will handle fetching, compiling, and instantiating the module in one step, accessing the raw byte code as it streams from the server:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
```

If we used the older [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) method, which doesn't work on the direct stream, we'd need an extra step of converting the fetched byte code to an {{jsxref("ArrayBuffer")}}, like so:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

### Aside on instantiate() overloads

The [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) function has two overload forms — the one shown above takes the byte code to compile as an argument and returns a Promise that resolves to an object containing both the compiled module object and an instantiated instance of it. The object looks like this:

```js-nolint
{
  module: Module, // The newly compiled WebAssembly.Module object,
  instance: Instance, // A new WebAssembly.Instance of the module object
}
```

> **Note:** Usually we only care about the instance, but it's useful to have the module in case we want to cache it, share it with another worker or window via [`postMessage()`](/en-US/docs/Web/API/MessagePort/postMessage), or create more instances.

> **Note:** The second overload form takes a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object as an argument, and returns a promise directly containing the instance object as the result. See the [Second overload example](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static#second_overload_example).

### Running your WebAssembly code

Once you've got your WebAssembly instance available in your JavaScript, you can then start using features of it that have been exported via the [`WebAssembly.Instance.exports`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/exports) property. Your code might look something like this:

```js
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // Call an exported function:
    obj.instance.exports.exported_func();

    // or access the buffer contents of an exported memory:
    const i32 = new Uint32Array(obj.instance.exports.memory.buffer);

    // or access the elements of an exported table:
    const table = obj.instance.exports.table;
    console.log(table.get(0)());
  },
);
```

> **Note:** For more information on how exporting from a WebAssembly module works, have a read of [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API), and [Understanding WebAssembly text format](/en-US/docs/WebAssembly/Understanding_the_text_format).

## Using XMLHttpRequest

[`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) is somewhat older than Fetch, but can still be happily used to get a typed array. Again, assuming our module is called `simple.wasm`:

1. Create a new {{domxref("XMLHttpRequest()")}} instance, and use its {{domxref("XMLHttpRequest.open","open()")}} method to open a request, setting the request method to `GET`, and declaring the path to the file we want to fetch.
2. The key part of this is to set the response type to `'arraybuffer'` using the {{domxref("XMLHttpRequest.responseType","responseType")}} property.
3. Next, send the request using {{domxref("XMLHttpRequest.send()")}}.
4. We then use the {{domxref("XMLHttpRequest.load_event", "load")}} event handler to invoke a function when the response has finished downloading — in this function we get the array buffer from the {{domxref("XMLHttpRequest.response", "response")}} property, and then feed that into our [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) method as we did with Fetch.

The final code looks like this:

```js
const request = new XMLHttpRequest();
request.open("GET", "simple.wasm");
request.responseType = "arraybuffer";
request.send();

request.onload = () => {
  const bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> **Note:** You can see an example of this in action in [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).


_____
/WebAssembly/JavaScript_interface/Instance/exports/index.md
===================================================

---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/JavaScript_interface/Instance/exports
page-type: webassembly-instance-property
browser-compat: webassembly.api.Instance.exports
---

{{WebAssemblySidebar}}

The **`exports`** readonly property of the
[`WebAssembly.Instance`](/en-US/docs/WebAssembly/JavaScript_interface/Instance) object prototype returns an object containing as its
members all the functions exported from the WebAssembly module instance, to allow them
to be accessed and used by JavaScript.

## Examples

### Using exports

After fetching some WebAssembly bytecode using fetch, we compile and instantiate the
module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) function, importing a
JavaScript function into the WebAssembly Module in the process. We then call an [Exported WebAssembly function](/en-US/docs/WebAssembly/Exported_functions)
that is exported by the `Instance`.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

> **Note:** You can also find this example as [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
> on GitHub ([view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/Understanding_the_text_format/index.md
===================================================

---
title: Understanding WebAssembly text format
slug: WebAssembly/Understanding_the_text_format
page-type: guide
---

{{WebAssemblySidebar}}

To enable WebAssembly to be read and edited by humans, there is a textual representation of the Wasm binary format. This is an intermediate form designed to be exposed in text editors, browser developer tools, etc. This article explains how that text format works, in terms of the raw syntax, and how it is related to the underlying bytecode it represents — and the wrapper objects representing Wasm in JavaScript.

> **Note:** This is potentially overkill if you are a web developer who just wants to load a Wasm module into a page and use it in your code (see [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)), but it is more useful if for example, you want to write Wasm modules to optimize the performance of your JavaScript library, or build your own WebAssembly compiler.

## S-expressions

In both the binary and textual formats, the fundamental unit of code in WebAssembly is a module. In the text format, a module is represented as one big S-expression. S-expressions are a very old and very simple textual format for representing trees, and thus we can think of a module as a tree of nodes that describe the module's structure and its code. Unlike the Abstract Syntax Tree of a programming language, though, WebAssembly's tree is pretty flat, mostly consisting of lists of instructions.

First, let's see what an S-expression looks like. Each node in the tree goes inside a pair of parentheses — `( ... )`. The first label inside the parenthesis tells you what type of node it is, and after that there is a space-separated list of either attributes or child nodes. So that means the WebAssembly S-expression:

```wasm
(module (memory 1) (func))
```

represents a tree with the root node "module" and two child nodes, a "memory" node with the attribute "1" and a "func" node. We'll see shortly what these nodes actually mean.

### The simplest module

Let's start with the simplest, shortest possible Wasm module.

```wasm
(module)
```

This module is totally empty, but is still a valid module.

If we convert our module to binary now (see [Converting WebAssembly text format to Wasm](/en-US/docs/WebAssembly/Text_format_to_Wasm)), we'll see just the 8 byte module header described in the [binary format](https://webassembly.github.io/spec/core/binary/modules.html#binary-module):

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Adding functionality to your module

Ok, that's not very interesting, let's add some executable code to this module.

All code in a webassembly module is grouped into functions, which have the following pseudocode structure:

```wasm
( func <signature> <locals> <body> )
```

- The **signature** declares what the function takes (parameters) and returns (return values).
- The **locals** are like vars in JavaScript, but with explicit types declared.
- The **body** is just a linear list of low-level instructions.

So this is similar to functions in other languages, even if it looks different because it is an S-expression.

## Signatures and parameters

The signature is a sequence of parameter type declarations followed by a list of return type declarations. It is worth noting here that:

- The absence of a `(result)` means the function doesn't return anything.
- In the current iteration, there can be at most 1 return type, but [later this will be relaxed](https://github.com/WebAssembly/spec/blob/master/proposals/multi-value/Overview.md) to any number.

Each parameter has a type explicitly declared; Wasm [Number types](#number_types), [Reference types](#reference_types), [Vector types](#vector_types).
The number types are:

- `i32`: 32-bit integer
- `i64`: 64-bit integer
- `f32`: 32-bit float
- `f64`: 64-bit float

A single parameter is written `(param i32)` and the return type is written `(result i32)`, hence a binary function that takes two 32-bit integers and returns a 64-bit float would be written like this:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

After the signature, locals are listed with their type, for example `(local i32)`. Parameters are basically just locals that are initialized with the value of the corresponding argument passed by the caller.

## Getting and setting locals and parameters

Locals/parameters can be read and written by the body of the function with the `local.get` and `local.set` instructions.

The `local.get`/`local.set` commands refer to the item to be got/set by its numeric index: parameters are referred to first, in order of their declaration, followed by locals in order of their declaration. So given the following function:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

The instruction `local.get 0` would get the i32 parameter, `local.get 1` would get the f32 parameter, and `local.get 2` would get the f64 local.

There is another issue here — using numeric indices to refer to items can be confusing and annoying, so the text format allows you to name parameters, locals, and most other items by including a name prefixed by a dollar symbol (`$`) just before the type declaration.

Thus, you could rewrite our previous signature like so:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

And then could write `local.get $p1` instead of `local.get 0`, etc. (Note that when this text gets converted to binary, though, the binary will contain only the integer.)

## Stack machines

Before we can write a function body, we have to talk about one more thing: **stack machines**. Although the browser compiles it to something more efficient, Wasm execution is defined in terms of a stack machine where the basic idea is that every type of instruction pushes and/or pops a certain number of `i32`/`i64`/`f32`/`f64` values to/from a stack.

For example, `local.get` is defined to push the value of the local it read onto the stack, and `i32.add` pops two `i32` values (it implicitly grabs the previous two values pushed onto the stack), computes their sum (modulo 2^32) and pushes the resulting i32 value.

When a function is called, it starts with an empty stack which is gradually filled up and emptied as the body's instructions are executed. So for example, after executing the following function:

```wasm
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

The stack contains exactly one `i32` value — the result of the expression (`$p + $p`), which is handled by `i32.add`. The return value of a function is just the final value left on the stack.

The WebAssembly validation rules ensure the stack matches exactly: if you declare a `(result f32)`, then the stack must contain exactly one `f32` at the end. If there is no result type, the stack must be empty.

## Our first function body

As mentioned before, the function body is a list of instructions that are followed as the function is called. Putting this together with what we have already learned, we can finally define a module containing our own simple function:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

This function gets two parameters, adds them together, and returns the result.

There are a lot more things that can be put inside function bodies, but we will start off simple for now, and you'll see a lot more examples as you go along. For a full list of the available opcodes, consult the [webassembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html).

### Calling the function

Our function won't do very much on its own — now we need to call it. How do we do that? Like in an ES module, Wasm functions must be explicitly exported by an `export` statement inside the module.

Like locals, functions are identified by an index by default, but for convenience, they can be named. Let's start by doing this — first, we'll add a name preceded by a dollar sign, just after the `func` keyword:

```wasm
(func $add …)
```

Now we need to add an export declaration — this looks like so:

```wasm
(export "add" (func $add))
```

Here, `add` is the name the function will be identified by in JavaScript whereas `$add` picks out which WebAssembly function inside the Module is being exported.

So our final module (for now) looks like this:

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

If you want to follow along with the example, save the above our module into a file called `add.wat`, then convert it into a binary file called `add.wasm` using wabt (see [Converting WebAssembly text format to Wasm](/en-US/docs/WebAssembly/Text_format_to_Wasm) for details).

Next, we'll asynchronously instantiate our binary (see [Loading and running WebAssembly code](/en-US/docs/WebAssembly/Loading_and_running)) and execute our `add` function in JavaScript (we can now find `add()` in the [`exports`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/exports) property of the instance):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> **Note:** You can find this example in GitHub as [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) ([see it live also](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Also see [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) for more details about the instantiate function.

## Exploring fundamentals

Now we've covered the real basics, let's move on to look at some more advanced features.

### Calling functions from other functions in the same module

The `call` instruction calls a single function, given its index or name. For example, the following module contains two functions — one just returns the value 42, the other returns the result of calling the first plus one:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Note:** `i32.const` just defines a 32-bit integer and pushes it onto the stack. You could swap out the `i32` for any of the other available types, and change the value of the const to whatever you like (here we've set the value to `42`).

In this example you'll notice an `(export "getAnswerPlus1")` section, declared just after the `func` statement in the second function — this is a shorthand way of declaring that we want to export this function, and defining the name we want to export it as.

This is functionally equivalent to including a separate function statement outside the function, elsewhere in the module in the same manner as we did before, e.g.:

```wasm
(export "getAnswerPlus1" (func $functionName))
```

The JavaScript code to call our above module looks like so:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Importing functions from JavaScript

We have already seen JavaScript calling WebAssembly functions, but what about WebAssembly calling JavaScript functions? WebAssembly doesn't actually have any built-in knowledge of JavaScript, but it does have a general way to import functions that can accept either JavaScript or Wasm functions. Let's look at an example:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly has a two-level namespace so the import statement here is saying that we're asking to import the `log` function from the `console` module. You can also see that the exported `logIt` function calls the imported function using the `call` instruction we introduced above.

Imported functions are just like normal functions: they have a signature that WebAssembly validation checks statically, and they are given an index and can be named and called.

JavaScript functions have no notion of signature, so any JavaScript function can be passed, regardless of the import's declared signature. Once a module declares an import, the caller of [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) must pass in an import object that has the corresponding properties.

For the above, we need an object (let's call it `importObject`) such that `importObject.console.log` is a JavaScript function.

This would look like the following:

```js
const importObject = {
  console: {
    log(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("logger.wasm"), importObject).then(
  (obj) => {
    obj.instance.exports.logIt();
  },
);
```

> **Note:** You can find this example on GitHub as [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) ([see it live also](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Declaring globals in WebAssembly

WebAssembly has the ability to create global variable instances, accessible from both JavaScript and importable/exportable across one or more [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) instances. This is very useful, as it allows dynamic linking of multiple modules.

In WebAssembly text format, it looks something like this (see [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in our GitHub repo; also see [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) for a live JavaScript example):

```wasm
(module
   (global $g (import "js" "global") (mut i32))
   (func (export "getGlobal") (result i32)
        (global.get $g))
   (func (export "incGlobal")
        (global.set $g
            (i32.add (global.get $g) (i32.const 1))))
)
```

This looks similar to what we've seen before, except that we specify a global value using the keyword `global`, and we also specify the keyword `mut` along with the value's datatype if we want it to be mutable.

To create an equivalent value using JavaScript, you'd use the [`WebAssembly.Global()`](/en-US/docs/WebAssembly/JavaScript_interface/Global) constructor:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly Memory

The above example is a pretty terrible logging function: it only prints a single integer! What if we wanted to log a text string? To deal with strings and other more complex data types, WebAssembly provides **memory** (although we also have [Reference types](#reference_types) in newer implementation of WebAssembly). According to WebAssembly, memory is just a large array of bytes that can grow over time. WebAssembly contains instructions like `i32.load` and `i32.store` for reading and writing from [linear memory](https://webassembly.github.io/spec/core/exec/index.html#linear-memory).

From JavaScript's point of view, it's as though memory is all inside one big (resizable) {{jsxref("ArrayBuffer")}}. That's literally all that asm.js has to play with (except that it isn't resizable; see the asm.js [Programming model](http://asmjs.org/spec/latest/#programming-model)).

So a string is just a sequence of bytes somewhere inside this linear memory. Let's assume that we've written a suitable string of bytes to memory; how do we pass that string out to JavaScript?

The key is that JavaScript can create WebAssembly linear memory instances via the [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) interface, and access an existing memory instance (currently you can only have one per module instance) using the associated instance methods. Memory instances have a [`buffer`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/buffer) getter, which returns an `ArrayBuffer` that points at the whole linear memory.

Memory instances can also grow, for example via the [`Memory.grow()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/grow) method in JavaScript. When growth occurs, since `ArrayBuffer`s can't change size, the current `ArrayBuffer` is detached and a new `ArrayBuffer` is created to point to the newer, bigger memory. This means all we need to do to pass a string to JavaScript is to pass out the offset of the string in linear memory along with some way to indicate the length.

While there are many ways to encode a string's length in the string itself (for example, C strings); for simplicity here we just pass both offset and length as parameters:

```wasm
(import "console" "log" (func $log (param i32) (param i32)))
```

On the JavaScript side, we can use the [TextDecoder API](/en-US/docs/Web/API/TextDecoder) to easily decode our bytes into a JavaScript string. (We specify `utf8` here, but many other encodings are supported.)

```js
function consoleLogString(offset, length) {
  const bytes = new Uint8Array(memory.buffer, offset, length);
  const string = new TextDecoder("utf8").decode(bytes);
  console.log(string);
}
```

The last missing piece of the puzzle is where `consoleLogString` gets access to the WebAssembly `memory`. WebAssembly gives us a lot of flexibility here: we can either create a [`Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) object in JavaScript and have the WebAssembly module import the memory, or we can have the WebAssembly module create the memory and export it to JavaScript.

For simplicity, let's create it in JavaScript then import it into WebAssembly. Our `import` statement is written as follows:

```wasm
(import "js" "mem" (memory 1))
```

The `1` indicates that the imported memory must have at least 1 page of memory (WebAssembly defines a page to be 64KB.)

So let's see a complete module that prints the string "Hi". In a normal compiled C program, you'd call a function to allocate some memory for the string, but since we're just writing our own assembly here and we own the entire linear memory, we can just write the string contents into global memory using a `data` section. Data sections allow a string of bytes to be written at a given offset at instantiation time and are similar to the `.data` sections in native executable formats.

Our final Wasm module looks like this:

```wasm
(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "Hi")
  (func (export "writeHi")
    i32.const 0  ;; pass offset 0 to log
    i32.const 2  ;; pass length 2 to log
    call $log))
```

> **Note:** Above, note the double semicolon syntax (`;;`) for allowing comments in WebAssembly files.

Now from JavaScript we can create a Memory with 1 page and pass it in. This results in "Hi" being printed to the console:

```js
const memory = new WebAssembly.Memory({ initial: 1 });

const importObject = {
  console: { log: consoleLogString },
  js: { mem: memory },
};

WebAssembly.instantiateStreaming(fetch("logger2.wasm"), importObject).then(
  (obj) => {
    obj.instance.exports.writeHi();
  },
);
```

> **Note:** You can find the full source on GitHub as [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([also see it live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

### WebAssembly tables

To finish this tour of the WebAssembly text format, let's look at the most intricate, and often confusing, part of WebAssembly: **tables**. Tables are basically resizable arrays of references that can be accessed by index from WebAssembly code.

To see why tables are needed, we need to first observe that the `call` instruction we saw earlier (see [Calling functions from other functions in the same module](#calling_functions_from_other_functions_in_the_same_module)) takes a static function index and thus can only ever call one function — but what if the callee is a runtime value?

- In JavaScript, we see this all the time: functions are first-class values.
- In C/C++, we see this with function pointers.
- In C++, we see this with virtual functions.

WebAssembly needed a type of call instruction to achieve this, so we gave it `call_indirect`, which takes a dynamic function operand. The problem is that the only types we have to give operands in WebAssembly are (currently) `i32`/`i64`/`f32`/`f64`.

WebAssembly could add an `anyfunc` type ("any" because the type could hold functions of any signature), but unfortunately this `anyfunc` type couldn't be stored in linear memory for security reasons. Linear memory exposes the raw contents of stored values as bytes and this would allow Wasm content to arbitrarily observe and corrupt raw function addresses, which is something that cannot be allowed on the web.

The solution was to store function references in a table and pass around table indices instead, which are just i32 values. `call_indirect`'s operand can therefore be an i32 index value.

#### Defining a table in Wasm

So how do we place Wasm functions in our table? Just like `data` sections can be used to initialize regions of linear memory with bytes, `elem` sections can be used to initialize regions of tables with functions:

```wasm
(module
  (table 2 funcref)
  (elem (i32.const 0) $f1 $f2)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  ...
)
```

- In `(table 2 funcref)`, the 2 is the initial size of the table (meaning it will store two references) and `funcref` declares that the element type of these references are function reference.
- The functions (`func`) sections are just like any other declared Wasm functions. These are the functions we are going to refer to in our table (for example's sake, each one just returns a constant value). Note that the order the sections are declared in doesn't matter here — you can declare your functions anywhere and still refer to them in your `elem` section.
- The `elem` section can list any subset of the functions in a module, in any order, allowing duplicates. This is a list of the functions that are to be referenced by the table, in the order they are to be referenced.
- The `(i32.const 0)` value inside the `elem` section is an offset — this needs to be declared at the start of the section, and specifies at what index in the table function references start to be populated. Here we've specified 0, and a size of 2 (see above), so we can fill in two references at indexes 0 and 1. If we wanted to start writing our references at offset 1, we'd have to write `(i32.const 1)`, and the table size would have to be 3.

> **Note:** Uninitialized elements are given a default throw-on-call value.

In JavaScript, the equivalent calls to create such a table instance would look something like this:

```js
function () {
  // table section
  const tbl = new WebAssembly.Table({initial: 2, element: "anyfunc"});

  // function sections:
  const f1 = ... /* some imported WebAssembly function */
  const f2 = ... /* some imported WebAssembly function */

  // elem section
  tbl.set(0, f1);
  tbl.set(1, f2);
};
```

#### Using the table

Moving on, now we've defined the table we need to use it somehow. Let's use this section of code to do so:

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- The `(type $return_i32 (func (result i32)))` block specifies a type, with a reference name. This type is used when performing type checking of the table function reference calls later on. Here we are saying that the references need to be functions that return an `i32` as a result.
- Next, we define a function that will be exported with the name `callByIndex`. This will take one `i32` as a parameter, which is given the argument name `$i`.
- Inside the function, we add one value to the stack — whatever value is passed in as the parameter `$i`.
- Finally, we use `call_indirect` to call a function from the table — it implicitly pops the value of `$i` off the stack. The net result of this is that the `callByIndex` function invokes the `$i`'th function in the table.

You could also declare the `call_indirect` parameter explicitly during the command call instead of before it, like this:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

In a higher level, more expressive language like JavaScript, you could imagine doing the same thing with an array (or probably more likely, object) containing functions. The pseudocode would look something like `tbl[i]()`.

So, back to the typechecking. Since WebAssembly is type checked, and the `funcref` can be potentially any function signature, we have to supply the presumed signature of the callee at the callsite, hence we include the `$return_i32` type, to tell the program a function returning an `i32` is expected. If the callee doesn't have a matching signature (say an `f32` is returned instead), a [`WebAssembly.RuntimeError`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError) is thrown.

So what links the `call_indirect` to the table we are calling? The answer is that there is only one table allowed right now per module instance, and that is what `call_indirect` is implicitly calling. In the future, when multiple tables are allowed, we would also need to specify a table identifier of some kind, along the lines of

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

The full module all together looks like this, and can be found in our [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) example file:

```wasm
(module
  (table 2 funcref)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  (elem (i32.const 0) $f1 $f2)
  (type $return_i32 (func (result i32)))
  (func (export "callByIndex") (param $i i32) (result i32)
    local.get $i
    call_indirect (type $return_i32))
)
```

We load it into a webpage using the following JavaScript:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> **Note:** You can find this example on GitHub as [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) ([see it live also](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> **Note:** Just like Memory, Tables can also be created from JavaScript (see [`WebAssembly.Table()`](/en-US/docs/WebAssembly/JavaScript_interface/Table)) as well as imported to/from another Wasm module.

### Mutating tables and dynamic linking

Because JavaScript has full access to function references, the Table object can be mutated from JavaScript using the [`grow()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/grow), [`get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get) and [`set()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/set) methods. And WebAssembly code is itself able to manipulate tables using instructions added as part of [Reference types](#reference_types), such as `table.get` and `table.set`.

Because tables are mutable, they can be used to implement sophisticated load-time and run-time [dynamic linking schemes](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md). When a program is dynamically linked, multiple instances share the same memory and table. This is symmetric to a native application where multiple compiled `.dll`s share a single process's address space.

To see this in action, we'll create a single import object containing a Memory object and a Table object, and pass this same import object to multiple [`instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) calls.

Our `.wat` examples look like so:

`shared0.wat`:

```wasm
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (elem (i32.const 0) $shared0func)
  (func $shared0func (result i32)
   i32.const 0
   i32.load)
)
```

`shared1.wat`:

```wasm
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (type $void_to_i32 (func (result i32)))
  (func (export "doIt") (result i32)
   i32.const 0
   i32.const 42
   i32.store  ;; store 42 at address 0
   i32.const 0
   call_indirect (type $void_to_i32))
)
```

These work as follows:

1. The function `shared0func` is defined in `shared0.wat`, and stored in our imported table.
2. This function creates a constant containing the value `0`, and then uses the `i32.load` command to load the value contained in the provided memory index. The index provided is `0` — again, it implicitly pops the previous value off the stack. So `shared0func` loads and returns the value stored at memory index `0`.
3. In `shared1.wat`, we export a function called `doIt` — this function creates two constants containing the values `0` and `42`, then calls `i32.store` to store a provided value at a provided index of the imported memory. Again, it implicitly pops these values off the stack, so the result is that it stores the value `42` in memory index `0`,
4. In the last part of the function, we create a constant with value `0`, then call the function at this index 0 of the table, which is `shared0func`, stored there earlier by the `elem` block in `shared0.wat`.
5. When called, `shared0func` loads the `42` we stored in memory using the `i32.store` command in `shared1.wat`.

> **Note:** The above expressions again pop values from the stack implicitly, but you could declare these explicitly inside the command calls instead, for example:
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

After converting to assembly, we then use `shared0.wasm` and `shared1.wasm` in JavaScript via the following code:

```js
const importObj = {
  js: {
    memory: new WebAssembly.Memory({ initial: 1 }),
    table: new WebAssembly.Table({ initial: 1, element: "anyfunc" }),
  },
};

Promise.all([
  WebAssembly.instantiateStreaming(fetch("shared0.wasm"), importObj),
  WebAssembly.instantiateStreaming(fetch("shared1.wasm"), importObj),
]).then((results) => {
  console.log(results[1].instance.exports.doIt()); // prints 42
});
```

Each of the modules that is being compiled can import the same memory and table objects and thus share the same linear memory and table "address space".

> **Note:** You can find this example on GitHub as [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([see it live also](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Bulk memory operations

Bulk memory operations are a newer addition to the language (for example, in [Firefox 79](/en-US/docs/Mozilla/Firefox/Releases/79)) — seven new built-in operations are provided for bulk memory operations such as copying and initializing, to allow WebAssembly to model native functions such as `memcpy` and `memmove` in a more efficient, performant way.

The new operations are:

- `data.drop`: Discard the data in an data segment.
- `elem.drop`: Discard the data in an element segment.
- `memory.copy`: Copy from one region of linear memory to another.
- `memory.fill`: Fill a region of linear memory with a given byte value.
- `memory.init`: Copy a region from a data segment.
- `table.copy`: Copy from one region of a table to another.
- `table.init`: Copy a region from an element segment.

> **Note:** You can find more information in the [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md) proposal.

## Types

### Number types

WebAssembly currently has four available _number types_:

- `i32`: 32-bit integer
- `i64`: 64-bit integer
- `f32`: 32-bit float
- `f64`: 64-bit float

### Vector types

- `v128`: 128 bit vector of packed integer, floating-point data, or a single 128 bit type.

### Reference types

The [reference types proposal](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) (supported in [Firefox 79](/en-US/docs/Mozilla/Firefox/Releases/79)) provides two main features:

- A new type, `externref`, which can hold _any_ JavaScript value, for example strings, DOM references, objects, etc. `externref` is opaque from the point of view of WebAssembly — a Wasm module can't access and manipulate these values and instead can only receive them and pass them back out. But this is very useful for allowing Wasm modules to call JavaScript functions, DOM APIs, etc., and generally to pave the way for easier interoperability with the host environment. `externref` can be used for value types and table elements.
- A number of new instructions that allow Wasm modules to directly manipulate [WebAssembly tables](#webassembly_tables), rather than having to do it via the JavaScript API.

> **Note:** The [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) documentation contains some useful information on how to take advantage of `externref` from Rust.

## Multi-value WebAssembly

Another more recent addition to the language (for example, in [Firefox 78](/en-US/docs/Mozilla/Firefox/Releases/78)) is WebAssembly multi-value, meaning that WebAssembly functions can now return multiple values, and instruction sequences can consume and produce multiple stack values.

At the time of writing (June 2020) this is at an early stage, and the only multi-value instructions available are calls to functions that themselves return multiple values. For example:

```wasm
(module
  (func $get_two_numbers (result i32 i32)
    i32.const 1
    i32.const 2
  )
  (func (export "add_two_numbers") (result i32)
    call $get_two_numbers
    i32.add
  )
)
```

But this will pave the way for more useful instruction types, and other things besides. For a useful write-up of progress so far and how this works, see [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) by Nick Fitzgerald.

## WebAssembly threads

WebAssembly Threads (supported in [Firefox 79](/en-US/docs/Mozilla/Firefox/Releases/79) onwards) allow WebAssembly Memory objects to be shared across multiple WebAssembly instances running in separate Web Workers, in the same fashion as [`SharedArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)s in JavaScript. This allows very fast communication between Workers, and significant performance gains in web applications.

The threads proposal has two parts, shared memories and atomic memory accesses.

### Shared memories

As described above, you can create shared WebAssembly [`Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) objects, which can be transferred between Window and Worker contexts using [`postMessage()`](/en-US/docs/Web/API/Window/postMessage), in the same fashion as a [`SharedArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Over on the JavaScript API side, the [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/Memory) constructor's initialization object now has a `shared` property, which when set to `true` will create a shared memory:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

the memory's [`buffer`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/buffer) property will now return a `SharedArrayBuffer`, instead of the usual `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Over in the text format, you can create a shared memory using the `shared` keyword, like this:

```wasm
(memory 1 2 shared)
```

Unlike unshared memories, shared memories must specify a "maximum" size, in both the JavaScript API constructor and Wasm text format.

> **Note:** You can find a lot more details in the [Threading proposal for WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md).

### Atomic memory accesses

A number of new Wasm instructions have been added that can be used to implement higher level features like mutexes, condition variables, etc. You can [find them listed here](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses). These instructions are allowed on non-shared memories as of Firefox 80.

> **Note:** The [Emscripten Pthreads support page](https://emscripten.org/docs/porting/pthreads.html) shows how to take advantage of this new functionality from Emscripten.

## Summary

This finishes our high-level tour of the major components of the WebAssembly text format and how they get reflected in the WebAssembly JS API.

## See also

- The main thing that wasn't included is a comprehensive list of all the instructions that can occur in function bodies. See the [WebAssembly semantics](https://webassembly.github.io/spec/core/exec/index.html) for a treatment of each instruction.
- See also the [grammar of the text format](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax) that is implemented by the spec interpreter.


_____
/WebAssembly/Text_format_to_Wasm/index.md
===================================================

---
title: Converting WebAssembly text format to Wasm
slug: WebAssembly/Text_format_to_Wasm
page-type: guide
---

{{WebAssemblySidebar}}

WebAssembly has an S-expression-based textual representation, an intermediate form designed to be exposed in text editors, browser developer tools, etc. This article explains a little bit about how it works, and how to use available tools to convert text format files to the Wasm format.

> **Note:** Text format files are usually saved with a `.wat` extension. Historically, a `.wast` extension was also used, however that's now used for the scripting language used by the WebAssembly test suite.

## A first look at the text format

Let's look at a simple example of this — the following program imports a function called `imported_func` from a module called `imports`, and exports a function called `exported_func`:

```wasm
(module
  (func $i (import "imports" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

The WebAssembly function `exported_func` is exported for use in our environment (e.g. the web app in which we are using our WebAssembly module). When it is called, it calls an imported JavaScript function called `imported_func`, which is run with the value (42) provided as a parameter.

## Converting the text .wat into a binary .wasm file

Let's have a go at converting the above `.wat` text representation example into `.wasm` assembly format.

1. To start with, make a copy of the above listing inside a text file; call it `simple.wat`.
2. We need to assemble this textual representation into the assembly language the browser actually reads before we can use it. To do this, we can use the wabt tool, which includes compilers to convert between WebAssembly's text representation and Wasm, and vice versa, plus more besides. Go to <https://github.com/webassembly/wabt> — follow the instructions on this page to set up the tool.
3. Once you've got the tool built, add the `/wabt/out/clang/Debug` directory to your system `PATH`.
4. Next, execute the wat2wasm program, passing it the path to the input file, followed by an `-o` parameter, followed by the path to the output file:

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

This will convert the Wasm into a file called `simple.wasm`, which contains the `.wasm` assembly code.

> **Note:** You can also convert the assembly back into the text representation using the wasm2wat tool; for example `wasm2wat simple.wasm -o text.wat`.

## Viewing the assembly output

Because the output file is assembly-based, it can't be viewed in a normal text editor. However, you can view it using the wat2wasm tool's `-v` option. Try this:

```bash
wat2wasm simple.wat -v
```

This will give you an output in your terminal in the following way:

![several strings of binary with textual descriptions beside them. For example: 0000008: 01 ; section code ](assembly-output.png)

## See also

- [Understanding WebAssembly text format](/en-US/docs/WebAssembly/Understanding_the_text_format) — a detailed explanation of the text format syntax.
- [Compiling from C/C++ to WebAssembly](/en-US/docs/WebAssembly/C_to_Wasm) — tools like Binaryen/Emscripten both compile your source code to Wasm, and create the API code needed to run the module in a JavaScript context. Find out more about how to use them.
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API) — read this if you want to find out more about how the WebAssembly API code works.
- [Text format](https://webassembly.github.io/spec/core/text/index.html) — more explanation of the text format, on the WebAssembly GitHub repo.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — a loader for webpack that takes care of all of this for you.


_____
/WebAssembly/C_to_Wasm/index.md
===================================================

---
title: Compiling a New C/C++ Module to WebAssembly
slug: WebAssembly/C_to_Wasm
page-type: guide
---

{{WebAssemblySidebar}}

When you've written a new code module in a language like C/C++, you can compile it into WebAssembly using a tool like [Emscripten](https://emscripten.org/). Let's look at how it works.

## Emscripten Environment Setup

First, let's set up the required development environment.

### Prerequisites

Get the Emscripten SDK, using these instructions: <https://emscripten.org/docs/getting_started/downloads.html>

## Compiling an example

With the environment set up, let's look at how to use it to compile a C example to Wasm. There are a number of options available when compiling with Emscripten, but the main two scenarios we'll cover are:

- Compiling to Wasm and creating HTML to run our code in, plus all the JavaScript "glue" code needed to run the Wasm in the web environment.
- Compiling to Wasm and just creating the JavaScript.

We will look at both below.

### Creating HTML and JavaScript

This is the simplest case we'll look at, whereby you get emscripten to generate everything you need to run your code, as WebAssembly, in the browser.

1. First we need an example to compile. Take a copy of the following simple C example, and save it in a file called `hello.c` in a new directory on your local drive:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Now, using the terminal window you used to enter the Emscripten compiler environment, navigate to the same directory as your `hello.c` file, and run the following command:

   ```bash
   emcc hello.c -o hello.html
   ```

The options we've passed in with the command are as follows:

- `-o hello.html` — Specifies that we want Emscripten to generate an HTML page to run our code in (and a filename to use), as well as the Wasm module and the JavaScript "glue" code to compile and instantiate the Wasm so it can be used in the web environment.

At this point in your source directory you should have:

- The binary Wasm module code (`hello.wasm`)
- A JavaScript file containing glue code to translate between the native C functions, and JavaScript/Wasm (`hello.js`)
- An HTML file to load, compile, and instantiate your Wasm code, and display its output in the browser (`hello.html`)

### Running your example

Now all that remains is for you to load the resulting `hello.html` in a browser that supports WebAssembly. It is enabled by default from Firefox 52, Chrome 57, Edge 57, Opera 44.

> **Note:** If you try to open generated HTML file (`hello.html`) directly from your local hard drive (e.g. `file://your_path/hello.html`), you will end up with an error message along the lines of _`both async and sync fetching of the wasm failed`._ You need to run your HTML file through an HTTP server (`http://`) — see [How do you set up a local testing server?](/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) for more information.

If everything has worked as planned, you should see "Hello world" output in the Emscripten console appearing on the web page, and your browser's JavaScript console. Congratulations, you've just compiled C to WebAssembly and run it in your browser!
![image](helloworld.png)

### Using a custom HTML template

Sometimes you will want to use a custom HTML template. Let's look at how we can do this.

1. First of all, save the following C code in a file called `hello2.c`, in a new directory:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Search for the file `shell_minimal.html` in your emsdk repo. Copy it into a subdirectory called `html_template` inside your previous new directory.
3. Now navigate into your new directory (again, in your Emscripten compiler environment terminal window), and run the following command:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   The options we've passed are slightly different this time:

   - We've specified `-o hello2.html`, meaning that the compiler will still output the JavaScript glue code and `.html`.
   - We've specified `-O3`, which is used to optimize the code. Emcc has optimization levels like any other C compiler, including: `-O0` (no optimization), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og`, and `-O3`. `-O3` is a good setting for release builds.
   - We've also specified `--shell-file html_template/shell_minimal.html` — this provides the path to the HTML template you want to use to create the HTML you will run your example through.

4. Now let's run this example. The above command will have generated `hello2.html`, which will have much the same content as the template with some glue code added into load the generated Wasm, run it, etc. Open it in your browser and you'll see much the same output as the last example.

> **Note:** You could specify outputting just the JavaScript "glue" file\* rather than the full HTML by specifying a .js file instead of an HTML file in the `-o` flag, e.g. `emcc -o hello2.js hello2.c -O3`. You could then build your custom HTML completely from scratch, although this is an advanced approach; it is usually easier to use the provided HTML template.
>
> - Emscripten requires a large variety of JavaScript "glue" code to handle memory allocation, memory leaks, and a host of other problems

### Calling a custom function defined in C

If you have a function defined in your C code that you want to call as needed from JavaScript, you can do this using the Emscripten `ccall()` function, and the `EMSCRIPTEN_KEEPALIVE` declaration (which adds your functions to the exported functions list (see [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process))). Let's look at how this works.

1. To start with, save the following code as `hello3.c` in a new directory:

   ```cpp
   #include <stdio.h>
   #include <emscripten/emscripten.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }

   #ifdef __cplusplus
   #define EXTERN extern "C"
   #else
   #define EXTERN
   #endif

   EXTERN EMSCRIPTEN_KEEPALIVE void myFunction(int argc, char ** argv) {
       printf("MyFunction Called\n");
   }
   ```

   By default, Emscripten-generated code always just calls the `main()` function, and other functions are eliminated as dead code. Putting `EMSCRIPTEN_KEEPALIVE` before a function name stops this from happening. You also need to import the `emscripten.h` library to use `EMSCRIPTEN_KEEPALIVE`.

   > **Note:** We are including the `#ifdef` blocks so that if you are trying to include this in C++ code, the example will still work. Due to C versus C++ name mangling rules, this would otherwise break, but here we are setting it so that it treats it as an external C function if you are using C++.

2. Now add `html_template/shell_minimal.html` with `\{\{{ SCRIPT }}}` as content into this new directory too, just for convenience (you'd obviously put this in a central place in your real dev environment).
3. Now let's run the compilation step again. From inside your latest directory (and while inside your Emscripten compiler environment terminal window), compile your C code with the following command. Note that we need to compile with `NO_EXIT_RUNTIME`: otherwise, when `main()` exits, the runtime would be shut down and it wouldn't be valid to call compiled code. This is necessary for proper C emulation: for example, to ensure that [`atexit()`](https://en.cppreference.com/w/c/program/atexit) functions are called.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. If you load the example in your browser again, you'll see the same thing as before!
5. Now we need to run our new `myFunction()` function from JavaScript. First of all, open up your hello3.html file in a text editor.
6. Add a {{HTMLElement("button")}} element as shown below, just above the first opening `<script type='text/javascript'>` tag.

   ```html
   <button id="mybutton">Run myFunction</button>
   ```

7. Now add the following code at the end of the first {{HTMLElement("script")}} element:

   ```js
   document.getElementById("mybutton").addEventListener("click", () => {
     alert("check console");
     const result = Module.ccall(
       "myFunction", // name of C function
       null, // return type
       null, // argument types
       null, // arguments
     );
   });
   ```

This illustrates how `ccall()` is used to call the exported function.

## See also

- [emscripten.org](https://emscripten.org/) — learn more about Emscripten and its large variety of options.
- [Calling compiled C functions from JavaScript using ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [Compiling an Existing C Module to WebAssembly](/en-US/docs/WebAssembly/existing_C_to_Wasm)


_____
/WebAssembly/existing_C_to_Wasm/index.md
===================================================

---
title: Compiling an Existing C Module to WebAssembly
slug: WebAssembly/existing_C_to_Wasm
page-type: guide
---

{{WebAssemblySidebar}}

A core use-case for WebAssembly is to take the existing ecosystem of C libraries and allow developers to use them on the web.

These libraries often rely on C's standard library, an operating system, a file system and other things. Emscripten provides most of these features, although there are some [limitations](https://emscripten.org/docs/porting/guidelines/api_limitations.html).

As an example, let's compile an encoder for WebP to Wasm. The source for the WebP codec is written in C and [available on GitHub](https://github.com/webmproject/libwebp) as well as some extensive [API documentation](https://developers.google.com/speed/webp/docs/api). That's a pretty good starting point.

```bash
git clone https://github.com/webmproject/libwebp
```

To start off simple, expose `WebPGetEncoderVersion()` from `encode.h` to JavaScript by writing a C file called `webp.c`:

```cpp
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetEncoderVersion();
}
```

This is a good simple program to test whether you can get the source code of libwebp to compile, as it doesn't require any parameters or complex data structures to invoke this function.

To compile this program, you need to tell the compiler where it can find libwebp's header files using the `-I` flag and also pass it all the C files of libwebp that it needs. A useful strategy is to just give it **all** the C files and rely on the compiler to strip out everything that is unnecessary. It seems to work brilliantly for this library:

```bash
emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c \
    libwebp/sharpyuv/*.c
```

> **Note:** This strategy will not work with every C project. Many projects rely on autoconf/automake to generate system-specific code before compilation. Emscripten provides `emconfigure` and `emmake` to wrap these commands and inject the appropriate parameters. You can find more in the [Emscripten documentation](https://emscripten.org/docs/compiling/Building-Projects.html).

Now you only need some HTML and JavaScript to load your new module:

```html
<script src="./a.out.js"></script>
<script>
  Module.onRuntimeInitialized = async () => {
    const api = {
      version: Module.cwrap("version", "number", []),
    };
    console.log(api.version());
  };
</script>
```

And you will see the correct version number in the [output](https://googlechrome.github.io/samples/webassembly/version.html):

![Screenshot of the DevTools console showing the correct version number.](version.png)

> **Note:** libwebp returns the current version a.b.c as a hexadecimal number 0xabc. For example, v0.6.1 is encoded as 0x000601 = 1537.

### Get an image from JavaScript into Wasm

Getting the encoder's version number is great, but encoding an actual image would be more impressive. How do we do that?

The first question you need to answer is: how do I get the image into Wasm? Looking at the [encoding API of libwebp](https://developers.google.com/speed/webp/docs/api#simple_encoding_api), you'll find that it expects an array of bytes in RGB, RGBA, BGR or BGRA. Luckily, the Canvas API has {{domxref("CanvasRenderingContext2D.getImageData")}} — that gives you a {{jsxref("Uint8ClampedArray")}} containing the image data in RGBA:

```js
async function loadImage(src) {
  // Load image
  const imgBlob = await fetch(src).then((resp) => resp.blob());
  const img = await createImageBitmap(imgBlob);
  // Make canvas same size as image
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw image onto canvas
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
}
```

Now it's "only" a matter of copying the data from JavaScript into Wasm. For that, you need to expose two additional functions — one that allocates memory for the image inside Wasm and one that frees it up again:

```cpp
#include <stdlib.h> // required for malloc definition

EMSCRIPTEN_KEEPALIVE
uint8_t* create_buffer(int width, int height) {
  return malloc(width * height * 4 * sizeof(uint8_t));
}

EMSCRIPTEN_KEEPALIVE
void destroy_buffer(uint8_t* p) {
  free(p);
}
```

The `create_buffer()` function allocates a buffer for the RGBA image — hence 4 bytes per pixel. The pointer returned by `malloc()` is the address of the first memory cell of that buffer. When the pointer is returned to JavaScript land, it is treated as just a number. After exposing the function to JavaScript using cwrap, you can use that number to find the start of our buffer and copy the image data:

```js
const api = {
  version: Module.cwrap("version", "number", []),
  create_buffer: Module.cwrap("create_buffer", "number", ["number", "number"]),
  destroy_buffer: Module.cwrap("destroy_buffer", "", ["number"]),
  encode: Module.cwrap("encode", "", ["number", "number", "number", "number"]),
  free_result: Module.cwrap("free_result", "", ["number"]),
  get_result_pointer: Module.cwrap("get_result_pointer", "number", []),
  get_result_size: Module.cwrap("get_result_size", "number", []),
};

const image = await loadImage("./image.jpg");
const p = api.create_buffer(image.width, image.height);
Module.HEAP8.set(image.data, p);
// ... call encoder ...
api.destroy_buffer(p);
```

### Encode the Image

The image is now available in Wasm. It is time to call the WebP encoder to do its job. Looking at the [WebP documentation](https://developers.google.com/speed/webp/docs/api#simple_encoding_api), you'll find that `WebPEncodeRGBA` seems like a perfect fit. The function takes a pointer to the input image and its dimensions, as well as a quality option between 0 and 100. It also allocates an output buffer for us that we need to free using `WebPFree()` once we are done with the WebP image.

The result of the encoding operation is an output buffer and its length. Because functions in C can't have arrays as return types (unless you allocate memory dynamically), this example resorts to a static global array. This may not be clean C. In fact, it relies on Wasm pointers being 32 bits wide. But this is a fair shortcut for keeping things simple:

```cpp
int result[2];
EMSCRIPTEN_KEEPALIVE
void encode(uint8_t* img_in, int width, int height, float quality) {
  uint8_t* img_out;
  size_t size;

  size = WebPEncodeRGBA(img_in, width, height, width * 4, quality, &img_out);

  result[0] = (int)img_out;
  result[1] = size;
}

EMSCRIPTEN_KEEPALIVE
void free_result(uint8_t* result) {
  WebPFree(result);
}

EMSCRIPTEN_KEEPALIVE
int get_result_pointer() {
  return result[0];
}

EMSCRIPTEN_KEEPALIVE
int get_result_size() {
  return result[1];
}
```

Now with all of that in place, you can call the encoding function, grab the pointer and image size, put it in a JavaScript buffer of your own, and release all the Wasm buffers allocated in the process:

```js
api.encode(p, image.width, image.height, 100);
const resultPointer = api.get_result_pointer();
const resultSize = api.get_result_size();
const resultView = new Uint8Array(
  Module.HEAP8.buffer,
  resultPointer,
  resultSize,
);
const result = new Uint8Array(resultView);
api.free_result(resultPointer);
```

> **Note:** `new Uint8Array(someBuffer)` will create a new view onto the same memory chunk, while `new Uint8Array(someTypedArray)` will copy the data.

Depending on the size of your image, you might run into an error where Wasm can't grow the memory enough to accommodate both the input and the output image:

![Screenshot of the DevTools console showing an error.](error.png)

Luckily, the solution to this problem is in the error message. You just need to add `-s ALLOW_MEMORY_GROWTH=1` to your compilation command.

And there you have it. You have compiled a WebP encoder and transcoded a JPEG image to WebP. To prove that it worked, turn your result buffer into a blob and use it on an `<img>` element:

```js
const blob = new Blob([result], { type: "image/webp" });
const blobURL = URL.createObjectURL(blob);
const img = document.createElement("img");
img.src = blobURL;
img.alt = "a useful description";
document.body.appendChild(img);
```

Behold, the glory of a new WebP image.

[Demo](https://googlechrome.github.io/samples/webassembly/image.html) | [Original Article](https://web.dev/articles/emscripting-a-c-library)

![DevTools network panel and the generated image.](result.jpg)


_____
/WebAssembly/JavaScript_interface/Module/index.md
===================================================

---
title: WebAssembly.Module
slug: WebAssembly/JavaScript_interface/Module
page-type: webassembly-interface
browser-compat: webassembly.api.Module
---

{{WebAssemblySidebar}}

A **`WebAssembly.Module`** object contains stateless WebAssembly code that has already been compiled by the browser — this can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.

## Constructor

- [`WebAssembly.Module()`](/en-US/docs/WebAssembly/JavaScript_interface/Module/Module)
  - : Creates a new `Module` object.

## Static methods

- [`WebAssembly.Module.customSections()`](/en-US/docs/WebAssembly/JavaScript_interface/Module/customSections_static)
  - : Given a `Module` and string, returns a copy of the contents of all custom sections in the module with the given string name.
- [`WebAssembly.Module.exports()`](/en-US/docs/WebAssembly/JavaScript_interface/Module/exports_static)
  - : Given a `Module`, returns an array containing descriptions of all the declared exports.
- [`WebAssembly.Module.imports()`](/en-US/docs/WebAssembly/JavaScript_interface/Module/imports_static)
  - : Given a `Module`, returns an array containing descriptions of all the declared imports.

## Examples

### Sending a compiled module to a worker

The following example compiles the loaded `simple.wasm` byte code using the [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static) method and sends the resulting `Module` instance to a [worker](/en-US/docs/Web/API/Web_Workers_API) using {{domxref("Worker/postMessage", "postMessage()")}}.

See the `index-compile.html` [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) or [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

The worker function [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js) defines an import object for the module to use. The function then sets up an event handler to receive the module from the main thread. When the module is received, we create an instance from it using the [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) method and invoke an exported function from inside it.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log("module received from main thread");
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Module/Module/index.md
===================================================

---
title: WebAssembly.Module() constructor
slug: WebAssembly/JavaScript_interface/Module/Module
page-type: webassembly-constructor
browser-compat: webassembly.api.Module.Module
---

{{WebAssemblySidebar}}

A **`WebAssembly.Module()`** constructor creates a new Module
object containing stateless WebAssembly code that has already been compiled by the
browser and can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.

The `WebAssembly.Module()` constructor function can be called to
synchronously compile given WebAssembly binary code. However, the primary way to get a
`Module` is through an asynchronous compilation function like
[`WebAssembly.compile()`](/en-US/docs/WebAssembly/JavaScript_interface/compile_static).

> **Note:** Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

> **Warning:** Since compilation for large modules can be expensive,
> developers should only use the `Module()` constructor when synchronous
> compilation is absolutely required; the asynchronous
> [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static) method should be used at all other times.

```js-nolint
new WebAssembly.Module(bufferSource)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
    containing the binary code of the Wasm module you want to compile.

#### Exceptions

- If the parameter is not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If compilation fails, the constructor rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError).
- Some browsers may throw a {{jsxref("RangeError")}}, as they prohibit compilation and instantiation of Wasm with large buffers on the UI thread.

## Examples

### Synchronously compiling a WebAssembly module

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

function createWasmModule(bytes) {
  return new WebAssembly.Module(bytes);
}

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = createWasmModule(bytes);
    WebAssembly.instantiate(mod, importObject).then((result) =>
      result.exports.exported_func(),
    );
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/compile_static/index.md
===================================================

---
title: WebAssembly.compile()
slug: WebAssembly/JavaScript_interface/compile_static
page-type: webassembly-function
browser-compat: webassembly.api.compile_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.compile()`** static method compiles WebAssembly binary code into a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object.
This function is useful if it is necessary to compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) function should be used).

> **Note:** Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compile(bufferSource)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or {{jsxref("ArrayBuffer")}}
    containing the binary code of the Wasm module you want to compile.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object
representing the compiled module.

### Exceptions

- If `bufferSource` is not a [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or {{jsxref("ArrayBuffer")}},
  the promise rejects with a {{jsxref("TypeError")}}.
- If compilation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError).

## Examples

### Using compile

The following example compiles the loaded simple.wasm byte code using the
`compile()` function and then sends it to a [worker](/en-US/docs/Web/API/Web_Workers_API) using [postMessage()](/en-US/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> **Note:** You'll probably want to use
> [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static) in most cases, as it is more efficient
> than `compile()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/CompileError/index.md
===================================================

---
title: WebAssembly.CompileError
slug: WebAssembly/JavaScript_interface/CompileError
page-type: webassembly-interface
browser-compat: webassembly.api.CompileError
---

{{WebAssemblySidebar}}

The **`WebAssembly.CompileError`** object indicates an error during WebAssembly decoding or validation.

## Constructor

- [`WebAssembly.CompileError()`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError/CompileError)
  - : Creates a new `WebAssembly.CompileError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "WebAssembly.CompileError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.CompileError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "WebAssembly.CompileError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.CompileError.prototype.fileName")}} {{non-standard_inline}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.CompileError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.CompileError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.CompileError.prototype.stack")}} {{non-standard_inline}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Instance methods

- {{jsxref("Error.prototype.toString", "WebAssembly.CompileError.prototype.toString()")}}
  - : Returns a string representing the specified `Error` object. Inherited from {{jsxref("Error")}}.

## Examples

### Creating a new CompileError instance

The following snippet creates a new `CompileError` instance, and logs its details to the console:

```js
try {
  throw new WebAssembly.CompileError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "CompileError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/CompileError/CompileError/index.md
===================================================

---
title: WebAssembly.CompileError() constructor
slug: WebAssembly/JavaScript_interface/CompileError/CompileError
page-type: webassembly-constructor
browser-compat: webassembly.api.CompileError.CompileError
---

{{WebAssemblySidebar}}

The **`WebAssembly.CompileError()`** constructor creates a new
WebAssembly `CompileError` object, which indicates an error during
WebAssembly decoding or validation.

## Syntax

```js-nolint
new WebAssembly.CompileError()
new WebAssembly.CompileError(message)
new WebAssembly.CompileError(message, options)
new WebAssembly.CompileError(message, fileName)
new WebAssembly.CompileError(message, fileName, lineNumber)
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `cause` {{optional_inline}}
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : The name of the file containing the code that caused the exception.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : The line number of the code that caused the exception.

## Examples

### Creating a new CompileError instance

The following snippet creates a new `CompileError` instance, and logs its
details to the console:

```js
try {
  throw new WebAssembly.CompileError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "CompileError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/compileStreaming_static/index.md
===================================================

---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming_static
page-type: webassembly-function
browser-compat: webassembly.api.compileStreaming_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.compileStreaming()`** static method compiles a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) directly from a streamed underlying source.
This function is useful if it is necessary to compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) function should be used).

> **Note:** Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
```

### Parameters

- `source`
  - : A [`Response`](/en-US/docs/Web/API/Response) object or a promise that will fulfill with one, representing the underlying source of a Wasm module you want to stream and compile.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object representing the compiled module.

### Exceptions

- If `source` is not a [`Response`](/en-US/docs/Web/API/Response) or `Promise` resolving to a `Response`, the promise rejects with a {{jsxref("TypeError")}}.
- If compilation fails, the promise rejects with a [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError).
- If the `source` is a `Promise` that rejects, the promise rejects with the error.
- If the `source`'s `Result` has an error (e.g. bad MIME type), the promise rejects with an error.

## Examples

### Compile streaming

The following example (see our [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html) also) directly streams a Wasm module from an underlying source then compiles it to a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object. Because the `compileStreaming()` function accepts a promise for a [`Response`](/en-US/docs/Web/API/Response) object, you can directly pass it a `Promise` from calling [`fetch()`](/en-US/docs/Web/API/fetch), without waiting for the promise to fulfill.

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

The resulting module instance is then instantiated using
[`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static), and the exported function invoked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Module/customSections_static/index.md
===================================================

---
title: WebAssembly.Module.customSections()
slug: WebAssembly/JavaScript_interface/Module/customSections_static
page-type: webassembly-static-method
browser-compat: webassembly.api.Module.customSections_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.Module.customSections()`** static method returns a copy
of the contents of all custom sections in the given module with the given string name.

## Syntax

```js-nolint
WebAssembly.Module.customSections(module, sectionName)
```

### Parameters

- `module`
  - : The [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object whose custom sections are being
    considered.
- `sectionName`
  - : The string name of the desired custom section.

### Return value

A (possibly empty) array containing {{jsxref("ArrayBuffer")}} copies of the contents of all custom sections matching `sectionName`.

### Exceptions

If `module` is not a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object instance, a
{{jsxref("TypeError")}} is thrown.

## Description

A Wasm module consists of a sequence of **sections**. Most of these
sections are fully specified and validated by the Wasm spec, but modules can also
contain **custom sections** that are ignored and skipped over during
validation. (Read [High level structure](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#high-level-structure)
for information on section structures, and how normal sections
("known sections") and custom sections are distinguished.)

This provides developers with a way to include custom data inside Wasm modules for other purposes,
for example the [name custom section](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#name-section),
which allows developers to provide names for all the functions and
locals in the module (like "symbols" in a native build).

Note that the WebAssembly text format currently doesn't have a syntax specified for
adding new custom sections; you can however add a name section to your Wasm during
conversion from text format over to Wasm. The `wast2wasm` command available as part of
the [wabt tool](https://github.com/webassembly/wabt) has a
`--debug-names` option — specify this during conversion to get a Wasm with a
names custom section, for example:

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## Examples

### Using customSections

The following example uses `WebAssembly.Module.customSections` to check
if a loaded module instance contains a "name" custom section. A module contains a "name" custom section if `WebAssembly.Module.customSections`
returns an `ArrayBuffer` with a length greater than 0.

See custom-section.html [source code](https://github.com/mdn/webassembly-examples/blob/main/other-examples/custom-section.html)
and [live example](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html).

```js
WebAssembly.compileStreaming(fetch("simple-name-section.wasm")).then((mod) => {
  const nameSections = WebAssembly.Module.customSections(mod, "name");
  if (nameSections.length !== 0) {
    console.log("Module contains a name section");
    console.log(nameSections[0]);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Module/exports_static/index.md
===================================================

---
title: WebAssembly.Module.exports()
slug: WebAssembly/JavaScript_interface/Module/exports_static
page-type: webassembly-static-method
browser-compat: webassembly.api.Module.exports_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.Module.exports()`** static method returns an
array containing descriptions of all the declared exports of the given
`Module`.

## Syntax

```js-nolint
WebAssembly.Module.exports(module)
```

### Parameters

- `module`
  - : A [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object.

### Return value

An array containing objects representing the exported functions of the given module.

### Exceptions

If module is not a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object instance, a
{{jsxref("TypeError")}} is thrown.

## Examples

### Using exports

The following example (see our [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html)
demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) also)
compiles the loaded simple.wasm byte code using the
[`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static) method and then sends it to a [worker](/en-US/docs/Web/API/Web_Workers_API) using [postMessage()](/en-US/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

In the worker (see
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js))
we define an import object for the module to use, then set up an event handler to
receive the module from the main thread. When the module is received, we create an
instance from it using the [`WebAssembly.Instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) method, invoke an
exported function from inside it, then show how we can return information on the
available exports on a module using `WebAssembly.Module.exports`.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log("module received from main thread");
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });

  const exports = WebAssembly.Module.exports(mod);
  console.log(exports[0]);
};
```

The `exports[0]` output looks like this:

```js
{ name: "exported_func", kind: "function" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Module/imports_static/index.md
===================================================

---
title: WebAssembly.Module.imports()
slug: WebAssembly/JavaScript_interface/Module/imports_static
page-type: webassembly-static-method
browser-compat: webassembly.api.Module.imports_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.Module.imports()`** static method returns an array
containing descriptions of all the declared imports of the given `Module`.

## Syntax

```js-nolint
WebAssembly.Module.imports(module)
```

### Parameters

- `module`
  - : A [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object.

### Return value

An array containing objects representing the imported functions of the given module.

### Exceptions

If module is not a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object instance, a
{{jsxref("TypeError")}} is thrown.

## Examples

### Using imports

The following example compiles a loaded Wasm module and queries the module's imports.

See imports.html [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/imports.html) and
[live version](https://mdn.github.io/webassembly-examples/js-api-examples/imports.html).

```js
WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) => {
  const imports = WebAssembly.Module.imports(mod);
  console.log(imports[0]);
});
```

The console log displays the following description for the imported module:

```js
{ module: "imports", name: "imported_func", kind: "function" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Global/index.md
===================================================

---
title: WebAssembly.Global
slug: WebAssembly/JavaScript_interface/Global
page-type: webassembly-interface
browser-compat: webassembly.api.Global
---

{{WebAssemblySidebar}}

A **`WebAssembly.Global`** object represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) instances. This allows dynamic linking of multiple modules.

## Constructor

- [`WebAssembly.Global()`](/en-US/docs/WebAssembly/JavaScript_interface/Global/Global)
  - : Creates a new `Global` object.

## Global instances

All `Global` instances inherit from the `Global()` constructor's prototype object — this can be modified to affect all `Global` instances.

### Instance properties

- `Global.prototype.constructor`
  - : Returns the function that created this object's instance. By default this is the [`WebAssembly.Global()`](/en-US/docs/WebAssembly/JavaScript_interface/Global/Global) constructor.
- `Global.prototype[@@toStringTag]`
  - : The initial value of the [@@toStringTag](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the String value "WebAssembly.Global".
- `Global.prototype.value`
  - : The value contained inside the global variable — this can be used to directly set and get the global's value.

### Instance methods

- `Global.prototype.valueOf()`
  - : Old-style method that returns the value contained inside the global variable.

## Examples

### Creating a new Global instance

The following example shows a new global instance being created using the `WebAssembly.Global()` constructor. It is being defined as a mutable `i32` type, with a value of 0.

The value of the global is then changed, first to `42` using the `Global.value` property, and then to 43 using the `incGlobal()` function exported out of the `global.wasm` module (this adds 1 to whatever value is given to it and then returns the new value).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}<br>`
      : `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
  output.innerHTML += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> **Note:** You can see the example [running live on GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); see also the [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)


_____
/WebAssembly/JavaScript_interface/Global/Global/index.md
===================================================

---
title: WebAssembly.Global() constructor
slug: WebAssembly/JavaScript_interface/Global/Global
page-type: webassembly-constructor
browser-compat: webassembly.api.Global.Global
---

{{WebAssemblySidebar}}

A **`WebAssembly.Global()`** constructor creates a new `Global` object representing a global variable instance, accessible from both JavaScript and importable/exportable across one or more [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) instances.
This allows dynamic linking of multiple modules.

## Syntax

```js-nolint
new WebAssembly.Global(descriptor, value)
```

### Parameters

- `descriptor`

  - : An object, which contains two properties:

    - `value`: A string representing the
      data type of the global. This can be any one of:
      - `i32`: A 32-bit integer.
      - `i64`: A 64-bit integer. (In JavaScript, this is represented as a {{jsxref("BigInt")}})
      - `f32`: A 32-bit floating point number.
      - `f64`: A 64-bit floating point number.
      - `v128`: A 128-bit vector.
      - `externref`: A host reference.
      - `anyfunc`: A function reference.
    - `mutable`: A boolean value that determines whether the global is
      mutable or not. By default, this is `false`.

- `value`
  - : The value the variable contains. This can be any value, as long as its type matches the variable's data type.
    If no value is specified, a typed 0 value is used where the value of `descriptor.value` is one of `i32`, `i64`, `f32`, or `f64`, and `null` is used if `descriptor.value` is `externref` or `anyfunc` (as specified by the [`DefaultValue` algorithm](https://webassembly.github.io/spec/js-api/#defaultvalue)).

## Examples

### Creating a new Global instance

The following example shows a new global instance being created using the `WebAssembly.Global()` constructor.
It is being defined as a mutable `i32` type, with a value of 0.

The value of the global is then changed, first to `42` using the `Global.value` property, and then to 43 using the `incGlobal()` function exported out of the `global.wasm` module (this adds 1 to whatever value is given to it and then returns the new value).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}<br>`
      : `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
  output.innerHTML += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> **Note:** You can see the example [running live on GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html);
> see also the [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)


_____
/WebAssembly/JavaScript_interface/Memory/grow/index.md
===================================================

---
title: WebAssembly.Memory.prototype.grow()
slug: WebAssembly/JavaScript_interface/Memory/grow
page-type: webassembly-instance-method
browser-compat: webassembly.api.Memory.grow
---

{{WebAssemblySidebar}}

The **`grow()`** prototype method of the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) object increases the size of the memory instance by a specified number of WebAssembly pages.

## Syntax

```js-nolint
grow(delta)
```

### Parameters

- `delta`
  - : The number of WebAssembly pages you want to grow the memory by (each one is 64KiB in size).

### Return value

The previous size of the memory, in units of WebAssembly pages.

### Exceptions

- {{jsxref("RangeError")}}: If the current size added with `delta` exceeds the Memory instance's maximum size capacity.

## Examples

### Using grow

The following example creates a new WebAssembly Memory instance with an initial size of 1 page (64KiB), and a maximum size of 10 pages (640KiB).

```js
const memory = new WebAssembly.Memory({
  initial: 1,
  maximum: 10,
});
```

We can then grow the instance by one page like so:

```js
const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage); // "1"
console.log(memory.grow(1)); // "1"
console.log(memory.buffer.byteLength / bytesPerPage); // "2"
```

Note the return value of `grow()` here is the previous number of WebAssembly pages.

### Detachment upon growing

Every call to `grow` will detach any references to the old `buffer`, even for `grow(0)`!
Detachment means that the {{jsxref("ArrayBuffer")}}'s `byteLength` becomes zero, and it no longer has bytes accessible to JavaScript.
Accessing the `buffer` property after calling `grow`, will yield an `ArrayBuffer` with the correct length.

```js example-bad
const memory = new WebAssembly.Memory({
  initial: 1,
});
const oldMemoryView = new Uint8Array(memory.buffer);
memory.grow(1);
// the array is empty!
console.log(oldMemoryView); // Uint8Array []
```

```js example-good
const memory = new WebAssembly.Memory({
  initial: 1,
});
memory.grow(1);
const currentMemoryView = new Uint8Array(memory.buffer);
// the array is full of zeros
console.log(currentMemoryView); // Uint8Array(131072) [ 0, 0, 0, ... ]
// 131072 = 64KiB * 2
```

For a shared `Memory` instance, the initial `buffer` (which would be a [`SharedArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in such case) will not become detached, but rather its length will not be updated. Accesses to the `buffer` property after growing will yield a larger `SharedArrayBuffer` which may access a larger span of memory than the buffer from before growing the `Memory`. Every `SharedArrayBuffer` from the `buffer` property will all refer to the start of the same memory address range, and thus manipulate the same data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/RuntimeError/index.md
===================================================

---
title: WebAssembly.RuntimeError
slug: WebAssembly/JavaScript_interface/RuntimeError
page-type: webassembly-interface
browser-compat: webassembly.api.RuntimeError
---

{{WebAssemblySidebar}}

The **`WebAssembly.RuntimeError`** object is the error type that is thrown whenever WebAssembly specifies a [trap](https://webassembly.github.io/spec/core/intro/overview.html#trap).

## Constructor

- [`WebAssembly.RuntimeError()`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError/RuntimeError)
  - : Creates a new `WebAssembly.RuntimeError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "WebAssembly.RuntimeError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.RuntimeError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "WebAssembly.RuntimeError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.RuntimeError.prototype.fileName")}} {{non-standard_inline}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.RuntimeError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.RuntimeError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.RuntimeError.prototype.stack")}} {{non-standard_inline}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Instance methods

- {{jsxref("Error.prototype.toString", "WebAssembly.RuntimeError.prototype.toString()")}}
  - : Returns a string representing the specified `Error` object. Inherited from {{jsxref("Error")}}.

## Examples

### Creating a new RuntimeError instance

The following snippet creates a new `RuntimeError` instance, and logs its details to the console:

```js
try {
  throw new WebAssembly.RuntimeError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.RuntimeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "RuntimeError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/RuntimeError/RuntimeError/index.md
===================================================

---
title: WebAssembly.RuntimeError() constructor
slug: WebAssembly/JavaScript_interface/RuntimeError/RuntimeError
page-type: webassembly-constructor
browser-compat: webassembly.api.RuntimeError.RuntimeError
---

{{WebAssemblySidebar}}

The **`WebAssembly.RuntimeError()`** constructor creates a new
WebAssembly `RuntimeError` object — the type that is thrown whenever
WebAssembly specifies a [trap](https://webassembly.github.io/simd/core/intro/overview.html#trap).

## Syntax

```js-nolint
new WebAssembly.RuntimeError()
new WebAssembly.RuntimeError(message)
new WebAssembly.RuntimeError(message, options)
new WebAssembly.RuntimeError(message, fileName)
new WebAssembly.RuntimeError(message, fileName, lineNumber)
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `cause` {{optional_inline}}
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : The name of the file containing the code that caused the exception.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : The line number of the code that caused the exception.

## Examples

### Creating a new RuntimeError instance

The following snippet creates a new `RuntimeError` instance, and logs its
details to the console:

```js
try {
  throw new WebAssembly.RuntimeError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.RuntimeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "RuntimeError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Table/set/index.md
===================================================

---
title: WebAssembly.Table.prototype.set()
slug: WebAssembly/JavaScript_interface/Table/set
page-type: webassembly-instance-method
browser-compat: webassembly.api.Table.set
---

{{WebAssemblySidebar}}

The **`set()`** prototype method of the [`WebAssembly.Table`](/en-US/docs/WebAssembly/JavaScript_interface/Table) object mutates a reference stored at a given index to a different value.

## Syntax

```js-nolint
set(index, value)
```

### Parameters

- `index`
  - : The index of the function reference you want to mutate.
- `value`
  - : The value you want to mutate the reference to. This must be a value of the table's element type. Depending on the type, it may be an [exported WebAssembly function](/en-US/docs/WebAssembly/Exported_functions), a JavaScript wrapper for an underlying Wasm function, or a host reference.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `index` is greater than or equal to [`Table.prototype.length`](/en-US/docs/WebAssembly/JavaScript_interface/Table/length), a {{jsxref("RangeError")}} is thrown.
- If `value` is not of the element type of the table, a {{jsxref("TypeError")}} is thrown.

## Examples

### Using Table.set

The following example (see table2.html [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) and [live version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) creates a new WebAssembly Table instance with an initial size of two references. We then print out the table length and contents of the two indexes (retrieved via [`Table.prototype.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get)) to show that the length is two, and the indexes currently contain no function references (they currently return [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)).

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));
```

We then create an import object that contains a reference to the table:

```js
const importObj = {
  js: { tbl },
};
```

Finally, we load and instantiate a Wasm module (table2.wasm) using [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), print the table length, and invoke the two referenced functions that are now stored in the table. The `table2.wasm` module adds two function references to the table, both of which print out a simple value (see [text representation](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat):

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Note how you've got to include a second function invocation operator at the end of the accessor to actually invoke the referenced function and log the value stored inside it (e.g. `get(0)()` rather than `get(0)`) .

This example shows that we're creating and accessing the table from JavaScript, but the same table is visible and callable inside the Wasm instance, too.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Table/length/index.md
===================================================

---
title: WebAssembly.Table.prototype.length
slug: WebAssembly/JavaScript_interface/Table/length
page-type: webassembly-instance-property
browser-compat: webassembly.api.Table.length
---

{{WebAssemblySidebar}}

The read-only **`length`** prototype property of the [`WebAssembly.Table`](/en-US/docs/WebAssembly/JavaScript_interface/Table) object returns the length of the table, i.e. the number of elements in the table.

## Examples

### Using length

The following example creates a new WebAssembly Table instance with an initial size of
2 and a maximum size of 10:

```js
const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

Grow the table by 1 using `WebAssembly.grow()`:

```js
console.log(table.length); // 2
table.grow(1);
console.log(table.length); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/LinkError/index.md
===================================================

---
title: WebAssembly.LinkError
slug: WebAssembly/JavaScript_interface/LinkError
page-type: webassembly-interface
browser-compat: webassembly.api.LinkError
---

{{WebAssemblySidebar}}

The **`WebAssembly.LinkError`** object indicates an error during module instantiation (besides [traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) from the start function).

## Constructor

- [`WebAssembly.LinkError()`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError/LinkError)
  - : Creates a new `WebAssembly.LinkError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "WebAssembly.LinkError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.LinkError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "WebAssembly.LinkError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.LinkError.prototype.fileName")}} {{non-standard_inline}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.LinkError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.LinkError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.LinkError.prototype.stack")}} {{non-standard_inline}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Instance methods

- {{jsxref("Error.prototype.toString", "WebAssembly.LinkError.prototype.toString()")}}
  - : Returns a string representing the specified `Error` object. Inherited from {{jsxref("Error")}}.

## Examples

### Creating a new LinkError instance

The following snippet creates a new `LinkError` instance, and logs its details to the console:

```js
try {
  throw new WebAssembly.LinkError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "LinkError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/LinkError/LinkError/index.md
===================================================

---
title: WebAssembly.LinkError() constructor
slug: WebAssembly/JavaScript_interface/LinkError/LinkError
page-type: webassembly-constructor
browser-compat: webassembly.api.LinkError.LinkError
---

{{WebAssemblySidebar}}

The **`WebAssembly.LinkError()`** constructor creates a new
WebAssembly `LinkError` object, which indicates an error during module
instantiation (besides [traps](https://webassembly.github.io/simd/core/intro/overview.html#trap)
from the start function).

## Syntax

```js-nolint
new WebAssembly.LinkError()
new WebAssembly.LinkError(message)
new WebAssembly.LinkError(message, options)
new WebAssembly.LinkError(message, fileName)
new WebAssembly.LinkError(message, fileName, lineNumber)
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `cause` {{optional_inline}}
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : The name of the file containing the code that caused the exception.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : The line number of the code that caused the exception.

## Examples

### Creating a new LinkError instance

The following snippet creates a new `LinkError` instance, and logs its
details to the console:

```js
try {
  throw new WebAssembly.LinkError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "LinkError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Table/grow/index.md
===================================================

---
title: WebAssembly.Table.prototype.grow()
slug: WebAssembly/JavaScript_interface/Table/grow
page-type: webassembly-instance-method
browser-compat: webassembly.api.Table.grow
---

{{WebAssemblySidebar}}

The **`grow()`** prototype method of the [`WebAssembly.Table`](/en-US/docs/WebAssembly/JavaScript_interface/Table) object increases the size of the `Table` instance by a specified number of elements, filled with the provided value.

## Syntax

```js-nolint
grow(delta)
grow(delta, value)
```

### Parameters

- `delta`
  - : The number of elements you want to grow the table by.
- `value` {{optional_inline}}
  - : The element to fill the newly-allocated space with.

### Return value

The previous length of the table.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - If the current size added with `delta` exceeds the Table instance's maximum size capacity.
    - If the client doesn't have enough memory for the allocation.
- {{jsxref("TypeError")}}
  - : Thrown if `value` is not a value of the element type of the table.

## Examples

### Using grow

The following example creates a new WebAssembly Table instance with an initial size of
2 and a maximum size of 10:

```js
const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

Grow the table by 1 element using `Table.grow()`:

```js
console.log(table.length); // 2
table.grow(1);
console.log(table.length); // 3
```

### Using grow with a value

The following example creates a new WebAssembly `Table` instance with an initial size of
0 and a maximum size of 4, filling it with an object:

```js
const myObject = { hello: "world" };

const table = new WebAssembly.Table({
  element: "externref",
  initial: 0,
  maximum: 4,
});
```

Grow the table by 4 units and fill it with a value using `WebAssembly.grow()`:

```js
table.grow(4, myObject);
console.log(myObject === table.get(2)); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Instance/Instance/index.md
===================================================

---
title: WebAssembly.Instance() constructor
slug: WebAssembly/JavaScript_interface/Instance/Instance
page-type: webassembly-constructor
browser-compat: webassembly.api.Instance.Instance
---

{{WebAssemblySidebar}}

The **`WebAssembly.Instance()`** constructor creates a new
`Instance` object which is a stateful, executable instance of a
[`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module).

## Syntax

> **Warning:** Since instantiation for large modules can be expensive,
> developers should only use the `Instance()` constructor when synchronous
> instantiation is absolutely required; the asynchronous
> [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) method should be used at all other
> times.

```js
new WebAssembly.Instance(module, importObject);
```

### Parameters

- `module`
  - : The [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object to be instantiated.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) objects.
    There must be one matching property for each declared import of `module` or
    else a [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError) is thrown.

#### Exceptions

- If either of the parameters are not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If the operation fails, one of
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError), or
  [`WebAssembly.RuntimeError`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError) are thrown, depending on the cause of the failure.
- Some browsers may throw a {{jsxref("RangeError")}}, as they prohibit compilation and instantiation of Wasm with large buffers on the UI thread.

## Examples

### Synchronously instantiating a WebAssembly module

The `WebAssembly.Instance()` constructor function can be called to
synchronously instantiate a given [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object, for example:

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(mod, importObject);
    instance.exports.exported_func();
  });
```

However, the preferred way to get an `Instance` is through the asynchronous
[`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) function, for example like this:

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/Caching_modules/index.md
===================================================



_____
/WebAssembly/JavaScript_interface/Tag/Tag/index.md
===================================================

---
title: WebAssembly.Tag() constructor
slug: WebAssembly/JavaScript_interface/Tag/Tag
page-type: webassembly-constructor
browser-compat: webassembly.api.Tag.Tag
---

{{WebAssemblySidebar}}

The **`WebAssembly.Tag()`** constructor creates a new [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) object.

## Syntax

```js-nolint
new WebAssembly.Tag(type)
```

### Parameters

- `type`

  - : An object that can contain the following members:

    - `parameters`
      - : An array of [data types](/en-US/docs/WebAssembly/Understanding_the_text_format#types) (`"i32"`, `"i64"`, `"f32"`, `"f64"`, `"v128"`, `"externref"`, `"anyfunc"`).

### Exceptions

- {{jsxref("TypeError")}}

  - : Thrown if at least one of these conditions are met:
    - The `type` parameter is not an object.
    - The `type.parameters` property is not supplied.
    - The `type.parameters` contains an unsupported data type.

## Examples

This creates a tag with two values.

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Tag/index.md
===================================================

---
title: WebAssembly.Tag
slug: WebAssembly/JavaScript_interface/Tag
page-type: webassembly-interface
browser-compat: webassembly.api.Tag
---

{{WebAssemblySidebar}}

The **`WebAssembly.Tag`** object defines a _type_ of a WebAssembly exception that can be thrown to/from WebAssembly code.

When creating a [`WebAssembly.Exception`](/en-US/docs/WebAssembly/JavaScript_interface/Exception), the tag defines the data types and order of the values carried by the exception.
The same unique tag instance must be used to access the values of the exception (for example, when using [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/getArg)).

[Constructing](/en-US/docs/WebAssembly/JavaScript_interface/Tag/Tag) an instance of `Tag` creates a new unique tag.
This tag can be passed to a WebAssembly module as a tag import, where it will become a typed tag defined in the _tag section_ of the WebAssembly module.
You can also export a tag defined in a module and use it to inspect exceptions thrown from the module.

> **Note:** You can't access the values of an exception with a new tag that just happens to have the same parameters; it's a different tag!
> This ensures that WebAssembly modules can keep exception information internal if required.
> Code can still catch and rethrow exceptions that it does not understand.

## Constructor

- [`WebAssembly.Tag()`](/en-US/docs/WebAssembly/JavaScript_interface/Tag/Tag)
  - : Creates a new `WebAssembly.Tag` object.

## Instance methods

- [`Tag.prototype.type()`](/en-US/docs/WebAssembly/JavaScript_interface/Tag/type)
  - : Returns the object defining the data-types array for the tag (as set in its constructor).

## Examples

This code snippet creates a new `Tag` instance.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

The snippet below shows how we might pass it to a module **example.wasm** during instantiation, using an "import object".

```js
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject).then(
  (obj) => {
    // …
  },
);
```

The WebAssembly module might then import the tag as shown below:

```wasm
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32))
)
```

If the tag was used to throw an exception that propagated to JavaScript, we could use the tag to inspect its values.

> **Note:** There are many alternatives. We could also use the tag to create a [`WebAssembly.Exception`](/en-US/docs/WebAssembly/JavaScript_interface/Exception) and throw that from a function called by WebAssembly.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Exception/index.md
===================================================

---
title: WebAssembly.Exception
slug: WebAssembly/JavaScript_interface/Exception
page-type: webassembly-interface
browser-compat: webassembly.api.Exception
---

{{WebAssemblySidebar}}

The **`WebAssembly.Exception`** object represents a runtime exception thrown from WebAssembly to JavaScript, or thrown from JavaScript to a WebAssembly exception handler.

The [constructor](/en-US/docs/WebAssembly/JavaScript_interface/Exception/Exception) accepts a [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag), an array of values, and an `options` object as arguments.
The tag uniquely defines the _type_ of an exception, including the order of its arguments and their data types.
The same tag that was used to create the `Exception` is required to access the arguments of a thrown exception.
Methods are provided to test whether an exception matches a particular tag, and also to get a particular value by index (if the exception matches specified tag).

JavaScript and other client code can only access WebAssembly exception values, and visa versa, when the associated tag is shared (you can't just use another tag that happens to define the same data types).
Without the matching tag, exceptions can be caught and re-thrown, but they can't be inspected.

In order to make exception-throwing faster, exceptions thrown from WebAssembly generally do not include a stack trace.
WebAssembly code that needs to provide a stack trace must call a JavaScript function to create the exception, passing `options.traceStack=true` parameter in the constructor.
The constructor may then return an exception with a stack trace attached to the [`stack`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/stack) property.

{{AvailableInWorkers}}

## Constructor

- [`WebAssembly.Exception()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/Exception)
  - : Creates a new `WebAssembly.Exception` object.

## Instance methods

- [`Exception.prototype.is()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/is)

  - : Tests whether the exception matches a particular tag.

- [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/getArg)
  - : Returns the data fields of an exception that matches a specified tag.

## Instance properties

- [`Exception.prototype.stack`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Returns the stack trace for the exception, or `undefined`.

## Examples

This example shows how to define a tag and import it into a module, then use it to throw an exception that is caught in JavaScript.

Consider the following WebAssembly code, which is assumed to be compiled to a file **example.wasm**.

- The module imports a tag that is referred to as `$tagname` internally and that has a single `i32` parameter.
  The tag expects the tag to be passed using module `extmod` and tag `exttag`.
- The `$throwException` function throws an exception using the `throw` instruction, taking the `$tagname` and the parameter argument.
- The module exports the function `run()` that throws an exception with the value "42".

```wasm
(module
  ;; import tag that will be referred to here as $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; $throwException function throws i32 param as a $tagname exception
  (func $throwException (param $errorValueArg i32)
    local.get $errorValueArg
    throw $tagname
  )

  ;; Exported function "run" that calls $throwException
  (func (export "run")
    i32.const 42
    call $throwException
  )
)
```

The code below calls [`WebAssembly.instantiateStreaming`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) to import the **example.wasm** file, passing in an "import object" (`importObject`) that includes a new [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) named `tagToImport`.
The import object defines an object with properties that match the `import` statement in the WebAssembly code.

Once the file is instantiated, the code calls the exported WebAssembly `run()` method, which will immediately throw an exception.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32"] });

// Note: import object properties match the WebAssembly import statement!
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    // Check we have the right tag for the exception
    // If so, use getArg() to inspect it
    if (e.is(tagToImport)) {
      console.log(`getArg 0 : ${e.getArg(tagToImport, 0)}`);
    }
  });

/* Log output
example.js:40 WebAssembly.Exception: wasm exception
example.js:41 getArg 0 : 42
*/
```

The exception is caught in JavaScript using the `catch` block.
We can see it is of type `WebAssembly.Exception`, but if we didn't have the right tag we couldn't do much else.

However, because we have a tag, we use [`Exception.prototype.is()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/is) to check that it's the right one, and because it is correct, we call [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/getArg) to read the value of "42".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Exception/stack/index.md
===================================================

---
title: WebAssembly.Exception.prototype.stack
slug: WebAssembly/JavaScript_interface/Exception/stack
page-type: webassembly-instance-property
status:
  - non-standard
browser-compat: webassembly.api.Exception.stack
---

{{WebAssemblySidebar}} {{non-standard_header}}

The read-only **`stack`** property of an object instance of type [`WebAssembly.Exception`](/en-US/docs/WebAssembly/JavaScript_interface/Exception) _may_ contain a stack trace.

Exceptions from WebAssembly code do not include a stack trace by default.

If WebAssembly code needs to provide a stack trace, it must call a JavaScript function to create the exception, passing `options.traceStack=true` parameter in the [constructor](/en-US/docs/WebAssembly/JavaScript_interface/Exception/Exception).
The virtual machine can then attach a stack trace to the exception object returned by the constructor.

> **Note:** Stack traces are not normally sent from WebAssembly code to improve performance.
> The ability to add stack traces to these exceptions is provided for developer tooling, and is not generally recommended for broader use.

## Value

A string containing the stack trace, or {{jsxref("undefined")}} if no trace has been assigned.

The stack trace string lists the locations of each operation on the stack in WebAssembly format.
This is a human-readable string indicating the URL, name of the function type called, the function index, and its offset in the module binary.
It has approximately this format (see [stack trace conventions](https://webassembly.github.io/spec/web-api/index.html#conventions) in the specification for more information):

```plain
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Examples

This example demonstrate how to throw an exception from WebAssembly that includes a stack trace.

Consider the following WebAssembly code, which is assumed to be compiled to a file named **example.wasm**.
This imports a tag, which it refers to as `$tagname` internally, and imports a function that it refers to as `$throwExnWithStack`.
It exports the method `run` that can be called by external code to call `$throwExnWithStack` (and hence the JavaScript function).

```wasm
(module
  ;; import tag that will be referred to here as $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; import function that will be referred to here as $throwExnWithStack
  (import "extmod" "throwExnWithStack" (func $throwExnWithStack (param i32)))

  ;; call $throwExnWithStack passing 42 as parameter
  (func (export "run")
    i32.const 42
    call $throwExnWithStack
  )
)
```

The JavaScript code below defines a new tag `tag` and the function `throwExceptionWithStack`.
These are passed to the WebAssembly module in the `importObject` when it is instantiated.

Once the file is instantiated, the code calls the exported WebAssembly `run()` method, which will immediately throw an exception.
The stack is then logged from the `catch` statement.

```js
const tag = new WebAssembly.Tag({ parameters: ["i32"] });

function throwExceptionWithStack(param) {
  // Note: We declare the exception with "{traceStack: true}"
  throw new WebAssembly.Exception(tag, [param], { traceStack: true });
}

// Note: importObject properties match the WebAssembly import statements.
const importObject = {
  extmod: {
    exttag: tag,
    throwExnWithStack: throwExceptionWithStack,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.log(`stack: ${e.stack}`);
  });

//Log output (something like):
// stack: throwExceptionWithStack@http://<url>/main.js:76:9
// @http://<url>/example.wasm:wasm-function[3]:0x73
// @http://<url>/main.js:82:38
```

The most "relevant" part of this code is the line where the exception is created:

```js
new WebAssembly.Exception(tag, [param], { traceStack: true });
```

Passing in `{traceStack: true}` tells the WebAssembly virtual machine that it should attach a stack trace to the returned `WebAssembly.Exception`.
Without this, the stack would be `undefined`.

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Exception/Exception/index.md
===================================================

---
title: WebAssembly.Exception constructor
slug: WebAssembly/JavaScript_interface/Exception/Exception
page-type: webassembly-constructor
browser-compat: webassembly.api.Exception.Exception
---

{{WebAssemblySidebar}}

The **`WebAssembly.Exception()`** constructor is used to create a new [`WebAssembly.Exception`](/en-US/docs/WebAssembly/JavaScript_interface/Exception).

The constructor accepts a [`Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Exception) argument and a `payload` array of data fields.
The data types of each of the payload elements must match the corresponding data type specified in the `Tag`.

The constructor may also take an `options` object.
The `options.traceStack` property can be set `true` (by default it is `false`) to indicate that a Wasm stack trace may be attached to the exception's [`stack`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/stack) property.

## Syntax

```js-nolint
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### Parameters

- `tag`
  - : An [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) defining the data types expected for each of the values in the `payload`.
- `payload`
  - : An array of one or more data fields comprising the payload of the exception.
    The elements must match the data types of the corresponding elements in the `tag`.
    If the number of data fields in the payload and their types don't match, a {{jsxref("TypeError")}} exception is thrown.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : An object with the following optional fields:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true` if the `Exception` may have a stack trace attached to its [`stack`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/stack) property, otherwise `false`.
        This is `false` by default (if `options` or `options.traceStack` are not provided).

### Exceptions

- `TypeError`
  - : The `payload` and `tag` sequences do not have the same number of elements and/or the elements are not of matching types.

## Examples

This example shows the creation of an exception using a simple tag.

```js
// Create tag and use it to create an exception
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

The [`stack` example](/en-US/docs/WebAssembly/JavaScript_interface/Exception/stack#examples) shows the creation of an exception that uses the `options` parameter.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Exception/is/index.md
===================================================

---
title: WebAssembly.Exception.prototype.is()
slug: WebAssembly/JavaScript_interface/Exception/is
page-type: webassembly-instance-method
browser-compat: webassembly.api.Exception.is
---

{{WebAssemblySidebar}}

The **`is()`** prototype method of the [`Exception`](/en-US/docs/WebAssembly/JavaScript_interface/Exception) object can be used to test if the `Exception` matches a given tag.

The method might be used to test that a tag is correct before passing it to [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/getArg) to get the passed values.
It can be used on tags created in JavaScript or created in WebAssembly code and exported to JavaScript.

> **Note:** It is not enough that the tag has an identical sequence of data types — it must have the same _identity_ (be the same tag) as was used to create the exception.

## Syntax

```js-nolint
is(tag)
```

### Parameters

- `tag`
  - : An [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) that can be checked to verify the type of the exception.

### Return value

A boolean `true` if the specified tag matches the exception, and `false` otherwise.

## Examples

The code below shows how to use `is()` to verify that a tag matches an [`Exception`](/en-US/docs/WebAssembly/JavaScript_interface/Exception).

```js
// Create tag and use it to create an exception
const tag1 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
const exception1 = new WebAssembly.Exception(tag1, [42, 42.3]);

// Verify that "tag1" matches this exception
console.log(`Tag1: ${exception1.is(tag1)}`);

// Log output:
// Tag1: true
```

We can also demonstrate that this exception will not match another tag even if the tag is created with the same parameters.

```js
// Create a new tag (with same parameters) and verify it does not match the exception
const tag2 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
console.log(`Tag2: ${exception1.is(tag2)}`);

// Log output:
// Tag2: false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Exception/getArg/index.md
===================================================

---
title: WebAssembly.Exception.prototype.getArg()
slug: WebAssembly/JavaScript_interface/Exception/getArg
page-type: webassembly-instance-method
browser-compat: webassembly.api.Exception.getArg
---

{{WebAssemblySidebar}}

The **`getArg()`** prototype method of the [`Exception`](/en-US/docs/WebAssembly/JavaScript_interface/Exception) object can be used to get the value of a specified item in the exception's data arguments.

The method passes a [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) and will only succeed if the thrown `Exception` was created using the same tag, otherwise it will throw a `TypeError`.
This ensures that the exception can only be read if the calling code has access to the tag.
Tags that are neither imported into or exported from the WebAssembly code are internal, and their associated [`WebAssembly.Exception`](/en-US/docs/WebAssembly/JavaScript_interface/Exception) cannot be queried using this method!

> **Note:** It is not enough that the tag has an identical sequence of data types — it must have the same _identity_ (be the same tag) as was used to create the exception.

## Syntax

```js-nolint
getArg(exceptionTag, index)
```

### Parameters

- `exceptionTag`
  - : A [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) that must match the tag associated with this exception.
- `index`
  - : The index of the value in the data arguments to return, 0-indexed.

### Return value

The value of the argument at `index`.

### Exceptions

- {{jsxref("TypeError")}}
  - : The tags don't match; the exception was not created with the tag passed to the method.
- {{jsxref("RangeError")}}
  - : The value of the `index` parameter is greater than or equal to the number of fields in the data.

## Examples

In order to get the values of an exception, the tag must be "known" to the calling code;
it may be either imported into or exported from the calling code.

### Getting exception value from imported tag

Consider the following WebAssembly code, which is assumed to be compiled to a file "example.wasm".
This imports a tag, which it refers to internally as `$tagname`, and exports a method `run` that can be called by external code to throw an exception using the tag.

```wasm
(module
  ;; import tag that will be referred to here as $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; $throwException function throws i32 param as a $tagname exception
  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  ;; Exported function "run" that calls $throwException
  (func (export "run")
    i32.const 1
    call $throwException
  )
)
```

The code below calls [`WebAssembly.instantiateStreaming`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) to import the "example.wasm" file, passing in an "import object" (`importObject`) that includes a new [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) named `tagToImport`.
The import object defines an object with properties that match the `import` statement in the WebAssembly code.

Once the file is instantiated, the code calls the exported WebAssembly `run()` method, which will immediately throw an exception.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32"] });

// Note: the import object properties match the import statement in WebAssembly code!
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    console.log(`getArg 0 : ${e.getArg(tagToImport, 0)}`);
  });

/* Log output
example.js:40 WebAssembly.Exception: wasm exception
example.js:41 getArg 0 : 1
*/
```

The code catches the exception and uses `getArg()` to print the value at the first index.
In this case, it is just "1".

### Getting exception value from an exported tag

The process for using an exported tag is very similar to that shown in the previous section.
Here is the same WebAssembly module, simply replacing the import with an export.

```wasm
(module
  ;; Export tag giving it external name: "exptag"
  (tag $tagname (export "exptag") (param i32))

  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  (func (export "run")
    i32.const 1
    call $throwException
  )
)
```

The JavaScript is similar too. In this case, we have no imports, but instead we get the exported tag and use that to get the argument.
To make it a little more "safe", here we also test that we have the right tag using the [`is()` method](/en-US/docs/WebAssembly/JavaScript_interface/Exception/is).

```js
let tagExportedFromWasm;

WebAssembly.instantiateStreaming(fetch("example.wasm"))
  .then((obj) => {
    // Import the tag using its name from the WebAssembly module
    tagExportedFromWasm = obj.instance.exports.exptag;
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    // If the tag is correct, get the value
    if (e.is(tagExportedFromWasm)) {
      console.log(`getArg 0 : ${e.getArg(tagExportedFromWasm, 0)}`);
    }
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/Tag/type/index.md
===================================================

---
title: WebAssembly.Tag.prototype.type()
slug: WebAssembly/JavaScript_interface/Tag/type
page-type: webassembly-instance-method
browser-compat: webassembly.api.Tag.type
---

{{WebAssemblySidebar}}

The **`type()`** prototype method of the [`Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) object can be used to get the sequence of data types associated with the tag.

## Syntax

```js-nolint
type()
```

### Parameters

None

### Return value

An object with a property named `parameters` that references the array of data types associated with this [`Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag).

This is a copy of the `type` object that was originally passed into the [`Tag()` constructor](/en-US/docs/WebAssembly/JavaScript_interface/Tag/Tag).

## Examples

This code snippet creates a tag defining two data types and then exports them using `type()`.
The result is printed to the console:

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
console.log(tag.type());

// Console output:
// Object { parameters: (2) […] }
//   parameters: Array [ "i32", "i64" ]
//   <prototype>: Object { … }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/JavaScript_interface/validate_static/index.md
===================================================

---
title: WebAssembly.validate()
slug: WebAssembly/JavaScript_interface/validate_static
page-type: webassembly-function
browser-compat: webassembly.api.validate_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.validate()`** static method validates a given [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) of WebAssembly binary
code, returning whether the bytes form a valid Wasm module (`true`) or not
(`false`).

## Syntax

```js-nolint
WebAssembly.validate(bufferSource)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
    containing WebAssembly binary code to be validated.

### Return value

A boolean that specifies whether `bufferSource` is valid Wasm code
(`true`) or not (`false`).

### Exceptions

If `bufferSource` is not a [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer),
a {{jsxref("TypeError")}} is thrown.

## Examples

### Using validate

The following example (see the validate.html [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/validate.html),
and [see it live too](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html))
fetches a Wasm module and converts it into a typed array.
The `validate()` method is then used to check whether the module is valid.

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const valid = WebAssembly.validate(bytes);
    console.log(
      `The given bytes are ${valid ? "" : "not "}a valid Wasm module`,
    );
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)


_____
/WebAssembly/Rust_to_Wasm/index.md
===================================================

---
title: Compiling from Rust to WebAssembly
slug: WebAssembly/Rust_to_Wasm
page-type: guide
---

{{WebAssemblySidebar}}

If you have some Rust code, you can compile it into [WebAssembly](/en-US/docs/WebAssembly) (Wasm). This tutorial will show you how to compile a Rust project into WebAssembly and use it in an existing web app.

## Rust and WebAssembly use cases

There are two main use cases for Rust and WebAssembly:

- Build an entire application — an entire web app based in Rust.
- Build a part of an application — using Rust in an existing JavaScript frontend.

For now, the Rust team is focusing on the latter case, and so that's what we cover here. For the former case, check out projects like [`yew`](https://github.com/yewstack/yew).

In this tutorial, we build a package using `wasm-pack`, a tool for building JavaScript packages in Rust. This package will contain only WebAssembly and JavaScript code, and so the users of the package won't need Rust installed. They may not even notice that it's written in Rust.

## Rust Environment Setup

Let's go through all the required steps to get our environment set up.

### Install Rust

Install Rust by going to the [Install Rust](https://www.rust-lang.org/tools/install) page and following the instructions. This installs a tool called "rustup", which lets you manage multiple versions of Rust. By default, it installs the latest stable Rust release, which you can use for general Rust development. Rustup installs `rustc`, the Rust compiler, as well as `cargo`, Rust's package manager, `rust-std`, Rust's standard libraries, and some helpful docs — `rust-docs`.

> **Note:** Pay attention to the post-install note about needing cargo's `bin` directory in your system `PATH`. This is added automatically, but you must restart your terminal for it to take effect.

### wasm-pack

To build the package, we need an additional tool, `wasm-pack`. This helps compile the code to WebAssembly, as well as produce the right packaging for use in the browser. To download and install it, enter the following command into your terminal:

```bash
cargo install wasm-pack
```

## Building our WebAssembly package

Enough setup; let's create a new package in Rust. Navigate to wherever you keep your personal projects, and type this:

```bash
cargo new --lib hello-wasm
```

This creates a new library in a subdirectory named `hello-wasm` with everything you need to get going:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

First, we have `Cargo.toml`; this is the file that we use to configure our build. If you've used `Gemfile` from Bundler or `package.json` from npm, this is likely to be familiar; Cargo works in a similar manner to both of them.

Next, Cargo has generated some Rust code for us in `src/lib.rs`:

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

We won't use this test code at all, so go ahead and delete it.

### Let's write some Rust

Let's put this code into `src/lib.rs` instead:

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

This is the contents of our Rust project. It has three main parts; let's talk about each of them in turn. We give a high-level explanation here, and gloss over some details; to learn more about Rust, please check the free online book [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Using `wasm-bindgen` to communicate between Rust and JavaScript

The first part looks like this:

```rust
use wasm_bindgen::prelude::*;
```

Libraries are called "crates" in Rust.

Get it? _Cargo_ ships _crates_.

The first line contains a `use` command, which imports code from a library into your code. In this case, we're importing everything in the `wasm_bindgen::prelude` module. We use these features in the next section.

Before we move on to the next section, we should talk a bit more about `wasm-bindgen`.

`wasm-pack` uses `wasm-bindgen`, another tool, to provide a bridge between the types of JavaScript and Rust. It allows JavaScript to call a Rust API with a string, or a Rust function to catch a JavaScript exception.

We use `wasm-bindgen`'s functionality in our package. In fact, that's the next section.

#### Calling external functions in JavaScript from Rust

The next part looks like this:

```rust
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
```

The bit inside the `#[ ]` is called an "attribute", and it modifies the next statement somehow. In this case, that statement is an `extern`, which tells Rust that we want to call some externally defined functions. The attribute says "wasm-bindgen knows how to find these functions".

The third line is a function signature, written in Rust. It says "the `alert` function takes one argument, a string named `s`."

As you might suspect, this is [the `alert` function provided by JavaScript](/en-US/docs/Web/API/Window/alert). We call this function in the next section.

Whenever you want to call JavaScript functions, you can add them to this file, and `wasm-bindgen` takes care of setting everything up for you. Not everything is supported yet, but we're working on it. Please [file bugs](https://github.com/rustwasm/wasm-bindgen/issues/new) if something is missing.

#### Producing Rust functions that JavaScript can call

The final part is this one:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Once again, we see the `#[wasm_bindgen]` attribute. In this case, it's not modifying an `extern` block, but a `fn`; this means that we want this Rust function to be able to be called by JavaScript. It's the opposite of `extern`: these aren't the functions we need, but rather the functions we're giving out to the world.

This function is named `greet`, and takes one argument, a string (written `&str`), `name`. It then calls the `alert` function we asked for in the `extern` block above. It passes a call to the `format!` macro, which lets us concatenate strings.

The `format!` macro takes two arguments in this case, a format string, and a variable to put in it. The format string is the `"Hello, {}!"` bit. It contains `{}`s, where variables will be interpolated. The variable we're passing is `name`, the argument to the function, so if we call `greet("Steve")` we should see `"Hello, Steve!".`

This is passed to `alert()`, so when we call this function we will see an alert box with "Hello, Steve!" in it.

Now that our library is written, let's build it.

### Compiling our code to WebAssembly

To compile our code correctly, we first need to configure it with `Cargo.toml`. Open this file, and change its contents to look like this:

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Fill in your own repository and use the same info that `git` uses for the `authors` field.

The big part to add is the `[package]`. The `[lib]` part tells Rust to build a `cdylib` version of our package; we won't get into what that means in this tutorial. For more, consult the [Cargo](https://doc.rust-lang.org/cargo/guide/) and [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) documentation.

The last section is the `[dependencies]` section. Here's where we tell Cargo what version of `wasm-bindgen` we want to depend on; in this case, that's any `0.2.z` version (but not `0.3.0` or above).

### Building the package

Now that we've got everything set up, let's build the package. Type this into your terminal:

```bash
wasm-pack build --target web
```

This does a number of things (and they take a lot of time, especially the first time you run `wasm-pack`). To learn about them in detail, check out [this blog post on Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). In short, `wasm-pack build`:

1. Compiles your Rust code to WebAssembly.
2. Runs `wasm-bindgen` on that WebAssembly, generating a JavaScript file that wraps up that WebAssembly file into a module the browser can understand.
3. Creates a `pkg` directory and moves that JavaScript file and your WebAssembly code into it.
4. Reads your `Cargo.toml` and produces an equivalent `package.json`.
5. Copies your `README.md` (if you have one) into the package.

The end result? You have a package inside the `pkg` directory.

#### A digression about code size

If you check out the generated WebAssembly code size, it may be a few hundred kilobytes. We haven't instructed Rust to optimize for size at all, and doing so cuts down on the size _a lot_. This is beyond the scope of this tutorial, but if you'd like to learn more, check out the Rust WebAssembly Working Group's documentation on [Shrinking .wasm Size](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size).

## Using the package on the web

Now that we've got a compiled Wasm module, let's run it in the browser.
Let's start by creating a file named `index.html` in the root of the project, so we end up with the following project structure:

```plain
├── Cargo.lock
├── Cargo.toml
├── index.html
├── pkg
│   ├── hello_wasm.d.ts
│   ├── hello_wasm.js
│   ├── hello_wasm_bg.wasm
│   ├── hello_wasm_bg.wasm.d.ts
│   └── package.json
├── src
│   └── lib.rs
└── target
    ├── CACHEDIR.TAG
    ├── release
    └── wasm32-unknown-unknown
```

Put the following content in the `index.html` file:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script type="module">
      import init, { greet } from "./pkg/hello_wasm.js";
      init().then(() => {
        greet("WebAssembly");
      });
    </script>
  </body>
</html>
```

The script in this file will import the js glue code, initialize the Wasm module, and call the `greet` function we wrote in rust.

Serve the root directory of the project with a local web server, (e.g. `python3 -m http.server`). If you're not sure how to do that, refer to [Running a simple local HTTP server](/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> **Note:** Make sure to use an up-to-date web server that supports the `application/wasm` MIME type. Older web servers might not support it yet.

Load `index.html` from the web server (if you used the Python3 example: `http://localhost:8000`). An alert box appears on the screen, with `Hello, WebAssembly!` in it. We've successfully called from JavaScript into Rust, and from Rust into JavaScript.

## Making our package available to npm

If you want to use the WebAssembly module with npm, we'll need to make a few changes.

Let's start by recompiling our Rust with the target bundler option:

```bash
wasm-pack build --target bundler
```

### Install Node.js and npm

We are building an npm package, so you need to have Node.js and npm installed.

To get Node.js and npm, go to the [Get npm!](https://docs.npmjs.com/getting-started/) page and follow the instructions.
This tutorial targets node 16, if you need to switch between node versions, you can use [nvm](https://github.com/nvm-sh/nvm).

Next, let's use `npm link` to make this package available to other JavaScript packages installed

```bash
cd pkg
npm link
```

We now have an npm package, written in Rust, but compiled to WebAssembly. It's ready for use from JavaScript, and doesn't require the user to have Rust installed; the code included was the WebAssembly code, not the Rust source.

### Using the npm package on the web

Let's build a website that uses our new npm package. Many people use npm packages through various bundler tools, and we'll be using one of them, `webpack`, in this tutorial. It's only a bit complex, and shows a realistic use-case.

Let's move back out of the `pkg` directory, and make a new directory, `site`, to try this out in:

```bash
cd ..
mkdir site
cd site
npm link hello-wasm
```

Create a new file, `package.json`, and put the following code in it:

```json
{
  "scripts": {
    "serve": "webpack-dev-server"
  },
  "dependencies": {
    "hello-wasm": "^0.1.0"
  },
  "devDependencies": {
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}
```

Next, we need to configure Webpack. Create `webpack.config.js` and put the following in it:

```js
const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
};
```

Next, create a file named `index.js`, and give it these contents:

```js
import("./node_modules/hello-wasm/hello_wasm.js").then((js) => {
  js.greet("WebAssembly with npm");
});
```

This imports the new module from the `node_modules` folder. This isn't considered a best practice, but this is a demo, so it's OK for now. Once it's loaded, it calls the `greet` function from that module, passing `"WebAssembly"` as a string. Note how there's nothing special here, yet we're calling into Rust code. As far as the JavaScript code can tell, this is just a normal module.

Finally, we need to add a HTML file to load the JavaScript. Create an `index.html` file and add the following:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

The `hello-wasm/site` directory should look like this:

```plain
├── index.html
├── index.js
├── node_modules
│   └── hello-wasm -> ../../pkg
├── package.json
└── webpack.config.js
```

We're done making files. Let's give this a shot:

```bash
npm install
npm run serve
```

This starts a web server. Load `http://localhost:8080` and an alert box appears on the screen, with `Hello, WebAssembly with npm!` in it. We've successfully used the Rust module with npm.

## Conclusion

This is the end of our tutorial; we hope you've found it useful.

There's lots of exciting work going on in this space; if you'd like to help make it even better, check out [the Rust WebAssembly Working Group](https://fitzgeraldnick.com/2018/02/27/wasm-domain-working-group.html).


_____
/WebAssembly/Reference/index.md
===================================================

---
title: WebAssembly instruction reference
slug: WebAssembly/Reference
page-type: landing-page
---

{{WebAssemblySidebar}}

- [`Numeric instructions`](/en-US/docs/WebAssembly/Reference/Numeric)
- [`Vector/SIMD instructions`](/en-US/docs/WebAssembly/Reference/Vector)
- [`Reference instructions`](/en-US/docs/WebAssembly/Reference/Reference)
- [`Variable instructions`](/en-US/docs/WebAssembly/Reference/Variables)
- [`Table instructions`](/en-US/docs/WebAssembly/Reference/Table)
- [`Memory instructions`](/en-US/docs/WebAssembly/Reference/Memory)
- [`Control flow instructions`](/en-US/docs/WebAssembly/Reference/Control_flow)


_____
/WebAssembly/Reference/Numeric/index.md
===================================================

---
title: WebAssembly numeric instructions
slug: WebAssembly/Reference/Numeric
page-type: landing-page
---

{{WebAssemblySidebar}}

WebAssembly numeric instructions.

## Constants

- [`Const`](/en-US/docs/WebAssembly/Reference/Numeric/Const)
  - : Declare a constant numbers.

## Comparison

- [`Equal`](/en-US/docs/WebAssembly/Reference/Numeric/Equal)
  - : Check if two numbers are equal.
- [`Not equal`](/en-US/docs/WebAssembly/Reference/Numeric/Not_equal)
  - : Check if two numbers are not equal.
- [`Greater than`](/en-US/docs/WebAssembly/Reference/Numeric/Greater_than)
  - : Check if a number is greater than another number.
- [`Less than`](/en-US/docs/WebAssembly/Reference/Numeric/Less_than)
  - : Check if a number is less than another number.
- [`Greater or equal`](/en-US/docs/WebAssembly/Reference/Numeric/Greater_or_equal)
  - : Check if a number is greater than or equal to another number.
- [`Less or equal`](/en-US/docs/WebAssembly/Reference/Numeric/Less_or_equal)
  - : Check if a number is less than or equal to another number.

## Arithmetic

- [`Addition`](/en-US/docs/WebAssembly/Reference/Numeric/Addition)
  - : Add up two numbers.
- [`Subtraction`](/en-US/docs/WebAssembly/Reference/Numeric/Subtraction)
  - : Subtract one number from another number.
- [`Multiplication`](/en-US/docs/WebAssembly/Reference/Numeric/Multiplication)
  - : Multiply one number by another number.
- [`Division`](/en-US/docs/WebAssembly/Reference/Numeric/Division)
  - : Divide one number by another number.
- [`Remainder`](/en-US/docs/WebAssembly/Reference/Numeric/Remainder)
  - : Calculate the remainder left over when one integer is divided by another integer.

## Conversion

- [`Extend`](/en-US/docs/WebAssembly/Reference/Numeric/Extend)
  - : Convert (extend) `i32` to `i64`.
- [`Wrap`](/en-US/docs/WebAssembly/Reference/Numeric/Wrap)
  - : Convert (wrap) `i64` to `i32`.
- [`Promote`](/en-US/docs/WebAssembly/Reference/Numeric/Promote)
  - : Convert (promote) `f32` to `f64`.
- [`Demote`](/en-US/docs/WebAssembly/Reference/Numeric/Demote)
  - : Convert (demote) `f64` to `f32`.
- [`Convert`](/en-US/docs/WebAssembly/Reference/Numeric/Convert)
  - : Convert integers to floating points.
- [`Truncate (float to int)`](/en-US/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int)
  - : Convert (truncate fractional part) floating points to integers.
- [`Reinterpret`](/en-US/docs/WebAssembly/Reference/Numeric/Reinterpret)
  - : Reinterpret the bytes of integers as floating points and vice versa.

## Floating point specific instructions

- [`Min`](/en-US/docs/WebAssembly/Reference/Numeric/Min)
  - : Get the lower of two numbers.
- [`Max`](/en-US/docs/WebAssembly/Reference/Numeric/Max)
  - : Get the higher of two numbers.
- [`Nearest`](/en-US/docs/WebAssembly/Reference/Numeric/Nearest)
  - : Round a number to the nearest integer.
- [`Ceil`](/en-US/docs/WebAssembly/Reference/Numeric/Ceil)
  - : Round up a number.
- [`Floor`](/en-US/docs/WebAssembly/Reference/Numeric/Floor)
  - : Round down a number.
- [`Truncate (float to float)`](/en-US/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float)
  - : Discard the fractional part of a number.
- [`Absolute`](/en-US/docs/WebAssembly/Reference/Numeric/Absolute)
  - : Get the absolute value of a number.
- [`Negate`](/en-US/docs/WebAssembly/Reference/Numeric/Negate)
  - : Negate a number.
- [`Square root`](/en-US/docs/WebAssembly/Reference/Numeric/Square_root)
  - : Get the square root of a number.
- [`Copy sign`](/en-US/docs/WebAssembly/Reference/Numeric/Copy_sign)
  - : Copy just the sign bit from one number to another.

## Bitwise

- [`AND`](/en-US/docs/WebAssembly/Reference/Numeric/AND)
  - : Used for performing a bitwise AND.
- [`OR`](/en-US/docs/WebAssembly/Reference/Numeric/OR)
  - : Used for performing a bitwise OR.
- [`XOR`](/en-US/docs/WebAssembly/Reference/Numeric/XOR)
  - : Used for performing a bitwise XOR.
- [`Left shift`](/en-US/docs/WebAssembly/Reference/Numeric/Left_shift)
  - : Used for performing a bitwise left-shift.
- [`Right shift`](/en-US/docs/WebAssembly/Reference/Numeric/Right_shift)
  - : Used for performing a bitwise right-shift.
- [`Left rotate`](/en-US/docs/WebAssembly/Reference/Numeric/Left_rotate)
  - : Used for performing a bitwise left-rotate.
- [`Right rotate`](/en-US/docs/WebAssembly/Reference/Numeric/Right_rotate)
  - : Used for performing a bitwise right-rotate.
- [`Count leading zeros`](/en-US/docs/WebAssembly/Reference/Numeric/Count_leading_zeros)
  - : Count the amount of leading zeros in a numbers binary representation.
- [`Count trailing zeros`](/en-US/docs/WebAssembly/Reference/Numeric/Count_trailing_zeros)
  - : Count the amount of trailing zeros in a numbers binary representation.
- [`Population count`](/en-US/docs/WebAssembly/Reference/Numeric/Population_count)
  - : Count the total amount of 1s in a numbers binary representation.


_____
/WebAssembly/Reference/Numeric/Const/index.md
===================================================

---
title: Const
slug: WebAssembly/Reference/Numeric/Const
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`const`** instructions, are used to declare numbers.

{{EmbedInteractiveExample("pages/wat/const.html", "tabbed-standard")}}

## Syntax

```wasm
;; push `5` onto the stack
i32.const 5
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.const` | `0x41`        |
| `i64.const` | `0x42`        |
| `f32.const` | `0x43`        |
| `f64.const` | `0x44`        |


_____
/WebAssembly/Reference/Numeric/Equal/index.md
===================================================

---
title: Equal
slug: WebAssembly/Reference/Numeric/Equal
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`eq`** instructions, short for _equal_, check if two numbers are equal. If both numbers are equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

Similarly, the **`eqz`** instructions check if a number is equal to zero, the **`eqz`** instructions are only available for the integer types and not for the floating point types.

{{EmbedInteractiveExample("pages/wat/eq.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is equal to '2'
i32.eq

;; if $num is equal to `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.eqz`   | `0x45`        |
| `i32.eq`    | `0x46`        |
| `i64.eqz`   | `0x50`        |
| `i64.eq`    | `0x51`        |
| `f32.eq`    | `0x5b`        |
| `f64.eq`    | `0x61`        |


_____
/WebAssembly/Reference/Numeric/Not_equal/index.md
===================================================

---
title: Not equal
slug: WebAssembly/Reference/Numeric/Not_equal
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`ne`** instructions, short for _not equal_, check if two numbers are not equal. If the numbers are not equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

{{EmbedInteractiveExample("pages/wat/ne.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is not equal to '2'
i32.ne

;; if $num is not equal to `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.ne`    | `0x47`        |
| `i64.ne`    | `0x52`        |
| `f32.ne`    | `0x5c`        |
| `f64.ne`    | `0x62`        |


_____
/WebAssembly/Reference/Numeric/Greater_than/index.md
===================================================

---
title: Greater than
slug: WebAssembly/Reference/Numeric/Greater_than
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`gt`** instructions, short for _greater than_, check if a number is greater than another number. If the first number is greater than the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate greater than instructions for signed (**`gt_s`**) and unsigned (**`gt_u`**) numbers.

{{EmbedInteractiveExample("pages/wat/gt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is greater than '2'
i32.gt_u

;; if $num is greater than the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.gt_s`  | `0x4a`        |
| `i32.gt_u`  | `0x4b`        |
| `i64.gt_s`  | `0x55`        |
| `i64.gt_u`  | `0x56`        |
| `f32.gt`    | `0x5e`        |
| `f64.gt`    | `0x64`        |


_____
/WebAssembly/Reference/Numeric/Less_than/index.md
===================================================

---
title: Less than
slug: WebAssembly/Reference/Numeric/Less_than
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`lt`** instructions, short for _less than_, check if a number is less than another number. If the first number is less than the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate less than instructions for signed (**`lt_s`**) and unsigned (**`lt_u`**) numbers.

{{EmbedInteractiveExample("pages/wat/lt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is less then '2'
i32.lt_u

;; if $num is less than the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.lt_s`  | `0x48`        |
| `i32.lt_u`  | `0x49`        |
| `i64.lt_s`  | `0x53`        |
| `i64.lt_u`  | `0x54`        |
| `f32.lt`    | `0x5d`        |
| `f64.lt`    | `0x63`        |


_____
/WebAssembly/Reference/Numeric/Greater_or_equal/index.md
===================================================

---
title: Greater or equal
slug: WebAssembly/Reference/Numeric/Greater_or_equal
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`ge`** instructions, short for _greater or equal_, check if a number is greater than or equal to another number. If the first number is greater than or equal to the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate greater or equal instructions for signed (**`ge_s`**) and unsigned (**`ge_u`**) numbers.

{{EmbedInteractiveExample("pages/wat/ge.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is greater than or equal to '2'
i32.ge_u

;; if $num is greater than or equal to the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.ge_s`  | `0x4e`        |
| `i32.ge_u`  | `0x4f`        |
| `i64.ge_s`  | `0x59`        |
| `i64.ge_u`  | `0x5a`        |
| `f32.ge`    | `0x60`        |
| `f64.ge`    | `0x66`        |


_____
/WebAssembly/Reference/Numeric/Less_or_equal/index.md
===================================================

---
title: Less or equal
slug: WebAssembly/Reference/Numeric/Less_or_equal
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`le`** instructions, short for _less or equal_, check if a number is less than or equal to another number. If the first number is less than or equal to the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate less or equal instructions for signed (**`le_s`**) and unsigned (**`le_u`**) numbers.

{{EmbedInteractiveExample("pages/wat/le.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is less then or equal to '2'
i32.le_u

;; if $num is less than or equal to the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.le_s`  | `0x4C`        |
| `i32.le_u`  | `0x4D`        |
| `i64.le_s`  | `0x57`        |
| `i64.le_u`  | `0x58`        |
| `f32.le`    | `0x5F`        |
| `f64.le`    | `0x65`        |


_____
/WebAssembly/Reference/Numeric/Addition/index.md
===================================================

---
title: Addition
slug: WebAssembly/Reference/Numeric/Addition
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`add`** instructions, are used for adding up two numbers, similar to the **`+`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/add.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; add up both numbers
i32.add

;; the top item on the stack will now be 13  (10 + 3 = 13)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.add`   | `0x6a`        |
| `i64.add`   | `0x7c`        |
| `f32.add`   | `0x92`        |
| `f64.add`   | `0xa0`        |


_____
/WebAssembly/Reference/Numeric/Subtraction/index.md
===================================================

---
title: Subtraction
slug: WebAssembly/Reference/Numeric/Subtraction
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`sub`** instructions, short for _subtraction_, are used for subtracting one number from another number, similar to the **`-`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/sub.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; subtract one number from the other
i32.sub

;; the top item on the stack will now be 7 (10 - 3 = 7)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.sub`   | `0x6b`        |
| `i64.sub`   | `0x7d`        |
| `f32.sub`   | `0x93`        |
| `f64.sub`   | `0xa1`        |


_____
/WebAssembly/Reference/Numeric/Multiplication/index.md
===================================================

---
title: Multiplication
slug: WebAssembly/Reference/Numeric/Multiplication
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`mul`** instructions, short for _multiplication_, are used for multiplying one number by another number, similar to the **`*`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/mul.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; multiply one number by the other
i32.mul

;; the top item on the stack will now be 30 (10 * 3 = 30)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.mul`   | `0x6c`        |
| `i64.mul`   | `0x7e`        |
| `f32.mul`   | `0x94`        |
| `f64.mul`   | `0xa2`        |


_____
/WebAssembly/Reference/Numeric/Division/index.md
===================================================

---
title: Division
slug: WebAssembly/Reference/Numeric/Division
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`div`** instructions, short for _division_, are used for dividing one number by another, similar to the **`/`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/div.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 12
i32.const 3

;; divide one number by the other
i32.div_u

;; the top item on the stack will now be 4 (12 / 3 = 4)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.div_s` | `0x6d`        |
| `i32.div_u` | `0x6e`        |
| `i64.div_s` | `0x7f`        |
| `i64.div_u` | `0x80`        |
| `f32.div`   | `0x95`        |
| `f64.div`   | `0xa3`        |


_____
/WebAssembly/Reference/Numeric/Remainder/index.md
===================================================

---
title: Remainder
slug: WebAssembly/Reference/Numeric/Remainder
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`rem`** instructions, short for _remainder_, are used to calculate the remainder left over when one integer is divided by another integer, similar to the **`%`** operator in other languages. The **`rem`** instructions are only available for the integer types and not for the floating point types.

{{EmbedInteractiveExample("pages/wat/rem.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; calculate the remainder of dividing one number by the other
i32.rem

;; the top item on the stack will now be 1 (10 % 3 = 1)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.rem_s` | `0x6f`        |
| `i32.rem_u` | `0x70`        |
| `i64.rem_s` | `0x81`        |
| `i64.rem_u` | `0x82`        |


_____
/WebAssembly/Reference/Numeric/Extend/index.md
===================================================

---
title: Extend
slug: WebAssembly/Reference/Numeric/Extend
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`extend`** instructions, are used to convert (extend) numbers of type `i32` to type `i64`. There are signed and unsigned versions of this instruction.

{{EmbedInteractiveExample("pages/wat/extend.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an i32 onto the stack
i32.const 10

;; sign-extend from i32 to i64
i64.extend_i32_s

;; the top item on the stack will now be the value 10 of type i64
```

| Instruction        | Binary opcode |
| ------------------ | ------------- |
| `i64.extend_i32_s` | `0xac`        |
| `i64.extend_i32_u` | `0xad`        |


_____
/WebAssembly/Reference/Numeric/Wrap/index.md
===================================================

---
title: Wrap
slug: WebAssembly/Reference/Numeric/Wrap
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`wrap`** instruction, is used to convert numbers of type `i64` to type `i32`. If the number is larger than what an `i32` can hold this operation will wrap, resulting in a different number.

One can think of wrap either as reducing the value [mod](https://en.wikipedia.org/wiki/Modular_arithmetic) 2<sup>32</sup>, or as discarding the high 32 bits to produce a value containing just the low 32 bits.

{{EmbedInteractiveExample("pages/wat/wrap.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an i64 onto the stack
i64.const 10

;; wrap from i64 to i32
i32.wrap_i64

;; the top item on the stack will now be the value 10 of type `i32`
```

| Instruction    | Binary opcode |
| -------------- | ------------- |
| `i32.wrap_i64` | `0xa7`        |


_____
/WebAssembly/Reference/Numeric/Promote/index.md
===================================================

---
title: Promote
slug: WebAssembly/Reference/Numeric/Promote
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`promote`** instruction, is used to convert (promote) numbers of type `f32` to type `f64`.

{{EmbedInteractiveExample("pages/wat/promote.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an f32 onto the stack
f32.const 10.5

;; promote from f32 to f64
f64.promote_f32

;; the top item on the stack will now be the value 10.5 of type f64
```

| Instruction       | Binary opcode |
| ----------------- | ------------- |
| `f64.promote_f32` | `0xbb`        |


_____
/WebAssembly/Reference/Numeric/Demote/index.md
===================================================

---
title: Demote
slug: WebAssembly/Reference/Numeric/Demote
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`demote`** instruction, is used to convert (demote) numbers of type `f64` to type `f32`.

{{EmbedInteractiveExample("pages/wat/demote.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an f64 onto the stack
f64.const 10.5

;; demote from f64 to f32
f32.demote_f64

;; the top item on the stack will now be the value 10.5 of type f32
```

| Instruction      | Binary opcode |
| ---------------- | ------------- |
| `f32.demote_f64` | `0xb6`        |


_____
/WebAssembly/Reference/Numeric/Convert/index.md
===================================================

---
title: Convert
slug: WebAssembly/Reference/Numeric/Convert
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`convert`** instructions, are used for converting integer numbers to floating point numbers. There are signed and unsigned versions of this instruction.

{{EmbedInteractiveExample("pages/wat/convert.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an i32 onto the stack
i32.const 10

;; convert from signed i32 to f32
f32.convert_i32_s

;; the top item on the stack will now be the value 10 of type f32
```

| Instruction         | Binary opcode |
| ------------------- | ------------- |
| `f32.convert_i32_s` | `0xb2`        |
| `f32.convert_i32_u` | `0xb3`        |
| `f32.convert_i64_s` | `0xb4`        |
| `f32.convert_i64_u` | `0xb5`        |
| `f64.convert_i32_s` | `0xb7`        |
| `f64.convert_i32_u` | `0xb8`        |
| `f64.convert_i64_s` | `0xb9`        |
| `f64.convert_i64_u` | `0xba`        |


_____
/WebAssembly/Reference/Numeric/Truncate_float_to_int/index.md
===================================================

---
title: Truncate (float to int)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_int
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`trunc`** instructions, are used for converting floating points to integers. It's named truncate since it truncates the fractional part of the number when doing the conversion. There are signed and unsigned versions of this instruction.

There's another [**`trunc`**](/en-US/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float) instruction that truncates the fractional part of a floating point without converting it to and integer.

{{EmbedInteractiveExample("pages/wat/trunc_float_to_int.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an f32 onto the stack
f32.const 10.5

;; convert from f32 to signed i32 rounding towards zero (.5 will be lost)
i32.trunc_f32_s

;; the top item on the stack will now be the value 10 of type f32
```

| Instruction       | Binary opcode |
| ----------------- | ------------- |
| `i32.trunc_f32_s` | `0xa8`        |
| `i32.trunc_f32_u` | `0xa9`        |
| `i32.trunc_f64_s` | `0xaa`        |
| `i32.trunc_f64_u` | `0xab`        |
| `i64.trunc_f32_s` | `0xae`        |
| `i64.trunc_f32_u` | `0xaf`        |
| `i64.trunc_f64_s` | `0xb0`        |
| `i64.trunc_f64_u` | `0xb1`        |


_____
/WebAssembly/Reference/Numeric/Truncate_float_to_float/index.md
===================================================

---
title: Truncate (float to float)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_float
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`trunc`** instructions, short for _truncate_, are used for getting the value of a number without its fractional part.

**`trunc`** differs from **`floor`** when used on negative numbers, **`floor`** will round down in those cases while **`trunc`** will round up.

There's another [**`trunc`**](/en-US/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int) instruction that truncates the fractional part of a floating point and converts it to an integer.

{{EmbedInteractiveExample("pages/wat/trunc_float_to_float.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; discard the fractional part (.7)
f32.trunc

;; the top item on the stack will now be 2
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.trunc` | `0x8f`        |
| `f64.trunc` | `0x9d`        |


_____
/WebAssembly/Reference/Numeric/Reinterpret/index.md
===================================================

---
title: Reinterpret
slug: WebAssembly/Reference/Numeric/Reinterpret
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`reinterpret`** instructions, are used to reinterpret the bits of a number as a different type.

{{EmbedInteractiveExample("pages/wat/reinterpret.html", "tabbed-taller")}}

## Syntax

```wasm
;; the value `10000000_00000000_00000000_00000000` in binary
;; maps to `-0` as a floating point and to `-2147483648` as an integer

;; push an f32 onto the stack
f32.const -0

;; reinterpret the bytes of the f32 as i32
i32.reinterpret_f32

;; the top item on the stack will now be the value -2147483648 of type i32
```

| Instruction           | Binary opcode |
| --------------------- | ------------- |
| `i32.reinterpret_f32` | `0xbc`        |
| `i64.reinterpret_f64` | `0xbd`        |
| `f32.reinterpret_i32` | `0xbe`        |
| `f64.reinterpret_i64` | `0xbf`        |


_____
/WebAssembly/Reference/Numeric/Min/index.md
===================================================

---
title: Min
slug: WebAssembly/Reference/Numeric/Min
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`min`** instructions, are used for getting the lower of two numbers.

{{EmbedInteractiveExample("pages/wat/min.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const 3

;; get lower number
f32.min

;; the top item on the stack will now be 3
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.min`   | `0x96`        |
| `f64.min`   | `0xa4`        |


_____
/WebAssembly/Reference/Numeric/Max/index.md
===================================================

---
title: Max
slug: WebAssembly/Reference/Numeric/Max
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`max`** instructions, are used for getting the higher of two numbers.

{{EmbedInteractiveExample("pages/wat/max.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const 3

;; get higher number
f32.max

;; the top item on the stack will now be 10
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.max`   | `0x97`        |
| `f64.max`   | `0xa5`        |


_____
/WebAssembly/Reference/Numeric/Nearest/index.md
===================================================

---
title: Nearest
slug: WebAssembly/Reference/Numeric/Nearest
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`nearest`** instructions, are used for getting the value of a number rounded to the nearest integer.

{{EmbedInteractiveExample("pages/wat/nearest.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2.7

;; round to the nearest integer
f32.nearest

;; the top item on the stack will now be -3
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `f32.nearest` | `0x90`        |
| `f64.nearest` | `0x9e`        |


_____
/WebAssembly/Reference/Numeric/Ceil/index.md
===================================================

---
title: Ceil
slug: WebAssembly/Reference/Numeric/Ceil
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`ceil`** instructions, are used for getting the value of a number rounded up to the next integer.

{{EmbedInteractiveExample("pages/wat/ceil.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; round up
f32.ceil

;; the top item on the stack will now be 3
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.ceil`  | `0x8d`        |
| `f64.ceil`  | `0x9b`        |


_____
/WebAssembly/Reference/Numeric/Floor/index.md
===================================================

---
title: Floor
slug: WebAssembly/Reference/Numeric/Floor
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`floor`** instructions, are used for getting the value of a number rounded down to the next integer.

**`floor`** differs from **`trunc`** when used on negative numbers, **`floor`** will round down in those cases while **`trunc`** will round up.

{{EmbedInteractiveExample("pages/wat/floor.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2.7

;; round down
f32.floor

;; the top item on the stack will now be -3
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.floor` | `0x8e`        |
| `f64.floor` | `0x9c`        |


_____
/WebAssembly/Reference/Numeric/Absolute/index.md
===================================================

---
title: Absolute
slug: WebAssembly/Reference/Numeric/Absolute
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`abs`** instructions, short for _absolute_, are used to get the absolute value of a number. That is, it returns x if x is positive, and the negation of x if x is negative.

{{EmbedInteractiveExample("pages/wat/abs.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2

;; absolute
f32.abs

;; the top item on the stack will now be 2
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.abs`   | `0x8b`        |
| `f64.abs`   | `0x99`        |


_____
/WebAssembly/Reference/Numeric/Negate/index.md
===================================================

---
title: Negate
slug: WebAssembly/Reference/Numeric/Negate
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`neg`** instructions, short for _negate_, are used to negate a number. That is, turn a positive number into a negative number and a negative number into a positive number.

{{EmbedInteractiveExample("pages/wat/neg.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; negate
f32.neg

;; the top item on the stack will now be -2.7
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.neg`   | `0x8c`        |
| `f64.neg`   | `0x9a`        |


_____
/WebAssembly/Reference/Numeric/Square_root/index.md
===================================================

---
title: Square root
slug: WebAssembly/Reference/Numeric/Square_root
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`sqrt`** instructions, short for _square root_, are used to get the square root of a number.

{{EmbedInteractiveExample("pages/wat/sqrt.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 289

;; get the square root of 289
f32.sqrt

;; the top item on the stack will now be 17
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.sqrt`  | `0x91`        |
| `f64.sqrt`  | `0x9f`        |


_____
/WebAssembly/Reference/Numeric/Copy_sign/index.md
===================================================

---
title: Copy sign
slug: WebAssembly/Reference/Numeric/Copy_sign
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`copysign`** instructions, are used to copy just the sign bit from one number to another.

{{EmbedInteractiveExample("pages/wat/copysign.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const -1

;; copy just the sign bit from the second number (-1) to the first (10)
f32.copysign

;; the top item on the stack will now be -10
```

| Instruction    | Binary opcode |
| -------------- | ------------- |
| `f32.copysign` | `0x98`        |
| `f64.copysign` | `0xa6`        |


_____
/WebAssembly/Reference/Numeric/AND/index.md
===================================================

---
title: AND
slug: WebAssembly/Reference/Numeric/AND
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`and`** instructions, are used for performing a bitwise AND, similar to the **`&`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/and.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise AND
i32.and

;; the top item on the stack will now be 1 (00000001)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.and`   | `0x71`        |
| `i64.and`   | `0x83`        |


_____
/WebAssembly/Reference/Numeric/OR/index.md
===================================================

---
title: OR
slug: WebAssembly/Reference/Numeric/OR
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`or`** instructions, are used for performing a bitwise OR, similar to the **`|`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/or.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise OR
i32.or

;; the top item on the stack will now be 7 (00000111)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.or`    | `0x72`        |
| `i64.or`    | `0x84`        |


_____
/WebAssembly/Reference/Numeric/XOR/index.md
===================================================

---
title: XOR
slug: WebAssembly/Reference/Numeric/XOR
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`xor`** instructions, are used for performing a bitwise XOR, similar to the **`^`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/xor.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise XOR
i32.xor

;; the top item on the stack will now be 6 (00000110)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.xor`   | `0x73`        |
| `i64.xor`   | `0x85`        |


_____
/WebAssembly/Reference/Numeric/Left_shift/index.md
===================================================

---
title: Left shift
slug: WebAssembly/Reference/Numeric/Left_shift
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`shl`** instructions, short for _shift-left_, are used for performing a bitwise left-shift, similar to the **`<<`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/shl.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; left shift one spot

;; perform a bitwise left-shift
i32.shl

;; the top item on the stack will now be 14 (00001110)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.shl`   | `0x74`        |
| `i64.shl`   | `0x86`        |


_____
/WebAssembly/Reference/Numeric/Right_shift/index.md
===================================================

---
title: Right shift
slug: WebAssembly/Reference/Numeric/Right_shift
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`shr`** instructions, short for _shift-right_, are used for performing a bitwise right-shift, similar to the **`>>>`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/shr.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; right shift one spot

;; perform a bitwise right-shift
i32.shr_u

;; the top item on the stack will now be 3 (00000011)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.shr_s` | `0x75`        |
| `i32.shr_u` | `0x76`        |
| `i64.shr_s` | `0x87`        |
| `i64.shr_u` | `0x88`        |


_____
/WebAssembly/Reference/Numeric/Left_rotate/index.md
===================================================

---
title: Left rotate
slug: WebAssembly/Reference/Numeric/Left_rotate
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`rotl`** instructions, short for _rotate-left_, are used for performing a bitwise left-rotate.

{{EmbedInteractiveExample("pages/wat/rotl.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 3758096384 ;; 11100000_00000000_00000000_00000000
i32.const 1          ;; left rotate one spot

;; perform a bitwise left-rotate
i32.rotl

;; the top item on the stack will now be 3221225473
;; (11000000_00000000_00000000_00000001)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.rotl`  | `0x77`        |
| `i64.rotl`  | `0x89`        |


_____
/WebAssembly/Reference/Numeric/Right_rotate/index.md
===================================================

---
title: Right rotate
slug: WebAssembly/Reference/Numeric/Right_rotate
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`rotr`** instructions, short for _rotate-right_, are used for performing a bitwise right-rotate.

{{EmbedInteractiveExample("pages/wat/rotr.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000000_00000000_00000000_00000111
i32.const 1   ;; right rotate one spot

;; perform a bitwise right-rotate
i32.rotr

;; the top item on the stack will now be 2147483651
;; (10000000_00000000_00000000_00000011)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.rotr`  | `0x78`        |
| `i64.rotr`  | `0x8a`        |


_____
/WebAssembly/Reference/Numeric/Count_leading_zeros/index.md
===================================================

---
title: Count leading zeros
slug: WebAssembly/Reference/Numeric/Count_leading_zeros
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`clz`** instructions, short for _count leading zeros_, are used to count the amount of zeros at the start of the numbers binary representation.

{{EmbedInteractiveExample("pages/wat/clz.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; count leading zeros
i32.clz

;; the top item on the stack will now be 8
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.clz`   | `0x67`        |
| `i64.clz`   | `0x79`        |


_____
/WebAssembly/Reference/Numeric/Count_trailing_zeros/index.md
===================================================

---
title: Count trailing zeros
slug: WebAssembly/Reference/Numeric/Count_trailing_zeros
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`ctz`** instructions, short for _count trailing zeros_, are used to count the amount of zeros at the end of the numbers binary representation.

{{EmbedInteractiveExample("pages/wat/ctz.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; count trailing zeros
i32.ctz

;; the top item on the stack will now be 23
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.ctz`   | `0x68`        |
| `i64.ctz`   | `0x7a`        |


_____
/WebAssembly/Reference/Numeric/Population_count/index.md
===================================================

---
title: Population count
slug: WebAssembly/Reference/Numeric/Population_count
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`popcnt`** instructions, short for _population count_, are used to count the amount of `1`s in a numbers binary representation.

{{EmbedInteractiveExample("pages/wat/popcnt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
i32.const 130 ;; 10000010

;; count the 1s
i32.popcnt

;; the top item on the stack will now be 2
```

| Instruction  | Binary opcode |
| ------------ | ------------- |
| `i32.popcnt` | `0x69`        |
| `i64.popcnt` | `0x7b`        |


_____
/WebAssembly/Reference/Vector/index.md
===================================================



_____
/WebAssembly/Reference/Reference/index.md
===================================================



_____
/WebAssembly/Reference/Variables/index.md
===================================================

---
title: WebAssembly variable instructions
slug: WebAssembly/Reference/Variables
page-type: landing-page
---

{{WebAssemblySidebar}}

WebAssembly variable instructions.

- [`Declare local`](/en-US/docs/WebAssembly/Reference/Variables/Local)
  - : Declare a new local variable.
- [`Get local`](/en-US/docs/WebAssembly/Reference/Variables/Local_get)
  - : Load the value of a local variable onto the stack.
- [`Set local`](/en-US/docs/WebAssembly/Reference/Variables/Local_set)
  - : Set the value of a local variable.
- [`Tee local`](/en-US/docs/WebAssembly/Reference/Variables/Local_tee)
  - : Set the value of a local variable and keep the value on the stack.
- [`Declare global`](/en-US/docs/WebAssembly/Reference/Variables/Global)
  - : Declare a new global variable.
- [`Get global`](/en-US/docs/WebAssembly/Reference/Variables/Global_get)
  - : Load the value of a global variable onto the stack.
- [`Set global`](/en-US/docs/WebAssembly/Reference/Variables/Global_set)
  - : Set the value of a global variable.


_____
/WebAssembly/Reference/Variables/Local/index.md
===================================================

---
title: Local
slug: WebAssembly/Reference/Variables/Local
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`local`** instruction declares a new local variable.

{{EmbedInteractiveExample("pages/wat/local.html", "tabbed-taller")}}

## Syntax

```wasm
;; declare new variable named $val of type i32
(local $val i32)
```


_____
/WebAssembly/Reference/Variables/Local_get/index.md
===================================================

---
title: Local get
slug: WebAssembly/Reference/Variables/Local_get
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`local.get`** instruction loads the value of a local variable onto the stack.

{{EmbedInteractiveExample("pages/wat/local.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the value of a local variable onto the stack
local.get $val
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `local.get` | `0x20`        |


_____
/WebAssembly/Reference/Variables/Local_set/index.md
===================================================

---
title: Local set
slug: WebAssembly/Reference/Variables/Local_set
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`local.set`** instruction sets the values of a local variable.

{{EmbedInteractiveExample("pages/wat/local.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val
local.set $val
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `local.set` | `0x21`        |


_____
/WebAssembly/Reference/Variables/Local_tee/index.md
===================================================

---
title: Local tee
slug: WebAssembly/Reference/Variables/Local_tee
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`local.tee`** instruction sets the value of a local variable and loads the value onto the stack.

The instruction is named after the T-splitter used in plumbing.

{{EmbedInteractiveExample("pages/wat/local_tee.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val and load it on the stack
local.tee $val
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `local.tee` | `0x22`        |


_____
/WebAssembly/Reference/Variables/Global/index.md
===================================================

---
title: Global
slug: WebAssembly/Reference/Variables/Global
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`global`** instruction declares a new global variable.

{{EmbedInteractiveExample("pages/wat/global.html", "tabbed-taller")}}

## Syntax

```wasm
;; declare new variable named $val of type i32
(global $val i32)
```


_____
/WebAssembly/Reference/Variables/Global_get/index.md
===================================================

---
title: Global get
slug: WebAssembly/Reference/Variables/Global_get
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`global.get`** instruction loads the value of a global variable onto the stack.

{{EmbedInteractiveExample("pages/wat/global_get.html", "tabbed-standard")}}

## Syntax

```wasm
;; load the value of a global variable onto the stack
global.get $val
```

| Instruction  | Binary opcode |
| ------------ | ------------- |
| `global.get` | `0x23`        |


_____
/WebAssembly/Reference/Variables/Global_set/index.md
===================================================

---
title: Global set
slug: WebAssembly/Reference/Variables/Global_set
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`global.set`** instruction sets the values of a global variable.

{{EmbedInteractiveExample("pages/wat/global_set.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val
global.set $val
```

| Instruction  | Binary opcode |
| ------------ | ------------- |
| `global.set` | `0x24`        |


_____
/WebAssembly/Reference/Table/index.md
===================================================



_____
/WebAssembly/Reference/Memory/index.md
===================================================

---
title: WebAssembly memory instructions
slug: WebAssembly/Reference/Memory
page-type: landing-page
---

{{WebAssemblySidebar}}

WebAssembly memory instructions.

- [`Grow`](/en-US/docs/WebAssembly/Reference/Memory/Grow)
  - : Increase the size of the memory instance.
- [`Size`](/en-US/docs/WebAssembly/Reference/Memory/Size)
  - : Get the size of the memory instance.
- [`Load`](/en-US/docs/WebAssembly/Reference/Memory/Load)
  - : Load a number from memory.
- [`Store`](/en-US/docs/WebAssembly/Reference/Memory/Store)
  - : Store a number in memory.


_____
/WebAssembly/Reference/Memory/Grow/index.md
===================================================

---
title: Grow
slug: WebAssembly/Reference/Memory/Grow
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`grow`** instruction, increases the size of the memory instance by a specified number of pages, each page is sized 64KiB.

The **`grow`** instruction returns previous size of memory, in pages, if the operation was successful, and returns **`-1`** if the operation failed.

{{EmbedInteractiveExample("pages/wat/grow.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number of memory pages to grow the memory by
i32.const 3

;; grow the memory by 3 pages
memory.grow

;; the top item on the stack will now either be the previous number of pages (success) or `-1` (failure)
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.grow` | `0x40`        |


_____
/WebAssembly/Reference/Memory/Size/index.md
===================================================

---
title: Size
slug: WebAssembly/Reference/Memory/Size
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`size`** instruction, returns the amount of pages the memory instance currently has, each page is sized 64KiB.

{{EmbedInteractiveExample("pages/wat/size.html", "tabbed-standard")}}

## Syntax

```wasm
;; get the amount of pages the memory has
memory.size
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.size` | `0x3f`        |


_____
/WebAssembly/Reference/Memory/Load/index.md
===================================================

---
title: Load
slug: WebAssembly/Reference/Memory/Load
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`load`** instructions, are used to load a number from memory onto the stack.

For the integer numbers, you can also load a narrower number from memory and extend it into a wider type, e.g. load an unsigned 8-bit number and convert it into an i32 (**`i32.load8_u`**). These instructions are separate for signed and unsigned numbers.

{{EmbedInteractiveExample("pages/wat/load.html", "tabbed-taller")}}

## Syntax

```wasm
;; the offset from where to load the number
i32.const 0

;; load the number at position 0
i32.load
```

| Instruction    | Binary opcode |
| -------------- | ------------- |
| `i32.load`     | `0x28`        |
| `i64.load`     | `0x29`        |
| `f32.load`     | `0x2a`        |
| `f64.load`     | `0x2b`        |
| `i32.load8_s`  | `0x2c`        |
| `i32.load8_u`  | `0x2d`        |
| `i32.load16_s` | `0x2e`        |
| `i32.load16_u` | `0x2f`        |
| `i64.load8_s`  | `0x30`        |
| `i64.load8_u`  | `0x31`        |
| `i64.load16_s` | `0x32`        |
| `i64.load16_u` | `0x33`        |
| `i64.load32_s` | `0x34`        |
| `i64.load32_u` | `0x35`        |


_____
/WebAssembly/Reference/Memory/Store/index.md
===================================================

---
title: Store
slug: WebAssembly/Reference/Memory/Store
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`store`** instructions, are used to store a number in memory.

For the integer numbers, you can also store a wide typed number as a narrower number in memory, e.g. store a 32-bit number in an 8-bit slot (**`i32.store8`**). If the number doesn't fit in the narrower number type it will wrap.

{{EmbedInteractiveExample("pages/wat/store.html", "tabbed-taller")}}

## Syntax

```wasm
;; the offset in memory where to store the number
i32.const 0

;; the number to store
i32.const 20

;; store 20 at position 0
i32.store
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `i32.store`   | `0x36`        |
| `i64.store`   | `0x37`        |
| `f32.store`   | `0x38`        |
| `f64.store`   | `0x39`        |
| `i32.store8`  | `0x3a`        |
| `i32.store16` | `0x3b`        |
| `i64.store8`  | `0x3c`        |
| `i64.store16` | `0x3d`        |
| `i64.store32` | `0x3e`        |


_____
/WebAssembly/Reference/Control_flow/index.md
===================================================

---
title: WebAssembly control flow instructions
slug: WebAssembly/Reference/Control_flow
page-type: landing-page
---

{{WebAssemblySidebar}}

WebAssembly control flow instructions.

- [`block`](/en-US/docs/WebAssembly/Reference/Control_flow/block)
  - : Creates a label that can later be branched out of with a [`br`](/en-US/docs/WebAssembly/Reference/Control_flow/br).
- [`br`](/en-US/docs/WebAssembly/Reference/Control_flow/br)
  - : Branches to a loop or block.
- [`call`](/en-US/docs/WebAssembly/Reference/Control_flow/call)
  - : Calls a function.
- [`drop`](/en-US/docs/WebAssembly/Reference/Control_flow/Drop)
  - : Pops a value from the stack, and discards it.
- [`end`](/en-US/docs/WebAssembly/Reference/Control_flow/end)
  - : Can be used to end a `block`, `loop`, `if`, or `else`.
- [`if...else`](/en-US/docs/WebAssembly/Reference/Control_flow/if...else)
  - : Executes a statement if the last item on the stack is true (`1`).
- [`loop`](/en-US/docs/WebAssembly/Reference/Control_flow/loop)
  - : Creates a label that can later be branched to with a [`br`](/en-US/docs/WebAssembly/Reference/Control_flow/br).
- [`nop`](/en-US/docs/WebAssembly/Reference/Control_flow/nop)
  - : Does nothing.
- [`return`](/en-US/docs/WebAssembly/Reference/Control_flow/return)
  - : Returns from a function.
- [`select`](/en-US/docs/WebAssembly/Reference/Control_flow/Select)
  - : Selects one of its first two operands based on a boolean condition.
- [`unreachable`](/en-US/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : Denotes a point in code that should not be reachable.


_____
/WebAssembly/Reference/Control_flow/block/index.md
===================================================

---
title: block
slug: WebAssembly/Reference/Control_flow/block
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`block`** statement creates a label that can later be branched out of with a `br`.

The **`loop`** statement is the opposite of the `block` statement, in the sense that while branching to a `loop` jumps to the beginning of the loop, branching to a `block` jumps to the end of the block; that is, out of the block.

{{EmbedInteractiveExample("pages/wat/block.html", "tabbed-taller")}}

## Syntax

```wasm
;; label the block so that it can be branched to.
(block $my_block

  ;; branch to the block.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise the following control flow are unreachable.
  br $my_block

  ;; this will never be reached, since the br jumped out of the block already.
  unreachable

)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `block`     | `0x02`        |


_____
/WebAssembly/Reference/Control_flow/br/index.md
===================================================

---
title: br
slug: WebAssembly/Reference/Control_flow/br
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`br`** statement branches to a loop, block, or if.

Other variants of `br` are `br_if` for branching on condition, and `br_table` for branching to different blocks based on an argument.

{{EmbedInteractiveExample("pages/wat/br.html", "tabbed-taller")}}

## Syntax

```wasm
;; label the loop so that it can be branched to
(loop $my_loop

  ;; branch to the loop.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise you have an infinite loop.
  br $my_loop

)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `br`        | `0x0c`        |
| `br_if`     | `0x0d`        |
| `br_table`  | `0x0e`        |


_____
/WebAssembly/Reference/Control_flow/call/index.md
===================================================

---
title: call
slug: WebAssembly/Reference/Control_flow/call
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

**`call`** calls a function. `call_indirect` calls a function in a table.

{{EmbedInteractiveExample("pages/wat/call.html", "tabbed-standard")}}

## Syntax

```wasm
call $greet
```

| Instruction     | Binary opcode |
| --------------- | ------------- |
| `call`          | `0x10`        |
| `call_indirect` | `0x11`        |


_____
/WebAssembly/Reference/Control_flow/Drop/index.md
===================================================

---
title: Drop
slug: WebAssembly/Reference/Control_flow/Drop
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`drop`** instruction, pops a value from the stack, and discards it.

{{EmbedInteractiveExample("pages/wat/drop.html", "tabbed-taller")}}

## Syntax

```wasm
;; push multiple values onto the stack
i32.const 1
i32.const 2
i32.const 3

;; drop the top item from the stack (`3`)
drop

;; the top item on the stack will now be `2`
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `drop`      | `0x1a`        |


_____
/WebAssembly/Reference/Control_flow/end/index.md
===================================================

---
title: end
slug: WebAssembly/Reference/Control_flow/end
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

**`end`** is used to end a `block`, `loop`, `if`, or `else`. In the other examples we used the s-expression syntax which doesn't require the `end`, so you won't find it in the other examples here. However, it's still useful to know about since this is what the browsers display in devtools.

{{EmbedInteractiveExample("pages/wat/end.html", "tabbed-taller")}}

## Syntax

```wasm
i32.const 0
if
  ;; do something
end
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `end`       | `0x0b`        |


_____
/WebAssembly/Reference/Control_flow/if...else/index.md
===================================================

---
title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`if`** statement executes a statement if the last item on the stack is true (1). If the condition is false (0), another statement can be executed

{{EmbedInteractiveExample("pages/wat/if...else.html", "tabbed-taller")}}

## Syntax

```wasm
i32.const 0
(if
  (then
    ;; do something
  )
  (else
    ;; do something else
  )
)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `if`        | `0x04`        |
| `else`      | `0x05`        |


_____
/WebAssembly/Reference/Control_flow/loop/index.md
===================================================

---
title: loop
slug: WebAssembly/Reference/Control_flow/loop
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`loop`** statement creates a label that can later be branched to with a `br`. The loop instruction doesn't loop by itself; you need to branch to it to actually create a loop.

The **`loop`** statement is the opposite of the `block` statement, in the sense that while branching to a `loop` jumps to the beginning of the loop, branching to a `block` jumps to the end of the block, that is, out of the block.

{{EmbedInteractiveExample("pages/wat/loop.html", "tabbed-taller")}}

## Syntax

```wasm
;; label the loop so that it can be branched to
(loop $my_loop

  ;; branch to the loop.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise you have an infinite loop.
  br $my_loop

)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `loop`      | `0x03`        |


_____
/WebAssembly/Reference/Control_flow/nop/index.md
===================================================

---
title: nop
slug: WebAssembly/Reference/Control_flow/nop
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

**`nop`** stands for no-operation. It literally does nothing.

{{EmbedInteractiveExample("pages/wat/nop.html", "tabbed-shorter")}}

## Syntax

```wasm
nop
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `nop`       | `0x01`        |


_____
/WebAssembly/Reference/Control_flow/return/index.md
===================================================

---
title: return
slug: WebAssembly/Reference/Control_flow/return
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

**`return`** returns from a function.

- If there are no values left on the stack, it returns nothing/void.
- If there are the same amount of values left on the stack as specified in the function's type signature, it returns those values.
- If there are more values that the function's return type specifies, then the excess values are popped from the stack and discarded, and the last N values are returned.

{{EmbedInteractiveExample("pages/wat/return.html", "tabbed-taller")}}

## Syntax

```wasm
f32.const 4.3
return
```

```wasm
i32.const 7
f32.const 4.3
return
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `return`    | `0x0f`        |


_____
/WebAssembly/Reference/Control_flow/Select/index.md
===================================================

---
title: Select
slug: WebAssembly/Reference/Control_flow/Select
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`select`** instruction, selects one of its first two operands based on whether its third operand is zero or not. It shares some similarities with the ternary operator in other languages (e.g. `false ? 10 : 20`), but doesn't [short-circuit](https://en.wikipedia.org/wiki/Short-circuit_evaluation). The instruction may be followed by an immediate value type: `select (result T)`. `select (result T)` uses a different binary opcode, and allows types besides those introduced by the WebAssembly MVP (`i32`, `i64`, `f32`, `f64`), for example, it allows selection between two `externref` values.

{{EmbedInteractiveExample("pages/wat/select.html", "tabbed-taller")}}

## Syntax

```wasm
;; push two values onto the stack
i32.const 10
i32.const 20

;; change to `1` (true) to get the first value (`10`)
i32.const 0
select
```

```plain
f32.const nan
f32.const -54.1

;; change to `1` (true) to get the first value (`nan`)
i32.const 0
select (result f32)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `select`    | `0x1b`        |
| `select t`  | `0x1c`        |


_____
/WebAssembly/Reference/Control_flow/unreachable/index.md
===================================================

---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

**`unreachable`** is used to denote a point in code that should not be reachable. `unreachable` is an unconditional trap: in the case where an `unreachable` is reached and executed, the instruction traps.

{{EmbedInteractiveExample("pages/wat/unreachable.html", "tabbed-shorter")}}

## Syntax

```wasm
unreachable
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `unreachable` | `0x00`        |
