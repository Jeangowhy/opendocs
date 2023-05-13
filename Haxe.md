
# 🥚 haXe Programming
1. The haXe Manual https://github.com/haXeFoundation/haXeManual
2. The haXe Code Cookbook https://github.com/haXeFoundation/code-cookbook
3. haXe Manual https://haxe.org/manual/introduction.html
4. haXe programming cookbook https://code.haxe.org/
5. Editors and IDEs https://haxe.org/documentation/introduction/editors-and-ides.html
7. Meet HaxeDevelop https://haxe.org/blog/meet-haxedevelop/
7. HaxeDevelop https://github.com/HaxeFoundation/haxedevelop.org
7. HaxeFlixel 2D Game Engine https://haxeflixel.com
7. haXe Sublime Bundle Usage https://github.com/clemos/haXe-sublime-bundle/wiki/Usage
8. haXe workflow with Sublime Text 2, Php & nme examples http://www.aymericlamboley.fr/blog/haXe-workflow-with-sublime-text-2-php-and-nme-examples/

haXe 语言语法类似 Java，haXe 命令本身是编译器又是转译工具，可以将源代码构建为跨平台
应用程序，并且允许访问每个平台的本地功能。自有虚拟机 HashLink 和 NekoVM，但也可以在
解释模式下运行，例如 `haXe -cp src --main Main --interp`。

haXe 项目于 2005/10/22 日由法国开发商 Nicolas Cannasse 启动，是开源 ActionScript 2
编译器 MTASC（Motion Twin Action Script compiler）和内部 MTypes 语言的继任者，后者
尝试将类型推理应用于面向对象语言。Nicolas 对编程语言设计的长期热情，以及作为他在 Motion Twin
的游戏开发工作的一部分，混合不同技术的新机会的出现，导致了一种全新语言的诞生。

1. https://haxe.org/manual/introduction-haXe-history.html
2. https://haxe.org/documentation/introduction/stdlib-introduction.html
3. Why ML/OCaml are good for writing compilers https://flint.cs.yale.edu/cs421/case-for-ml.html
4. 译文：为什么 ML/OCaml 适用于编译器开发 https://zengjialong.com/ml-writing-compilers

haXe 编译器本身是 Ocaml 语言编写的，编译速度很快，haXe 的核心内容是基于类型转化的转译系统。

1. Compiler Explorer https://ocaml.godbolt.org
2. The core OCaml system https://github.com/ocaml/ocaml
3. Get Up and Running With OCaml https://ocaml.org/docs/up-and-running
4. The first hour with OCaml https://ocaml.org/docs/first-hour
5. The Windows-friendly distribution of OCaml https://github.com/diskuv/dkml-installer-ocaml

OCaml 非常的快，粗略地说，同样的代码规模下，使用 C++ 表达则可能需要加倍代码量和 3 倍编译时间。
ML（Meta Language）元语言是一个函数式、指令式的通用的编程语言，它著称于使用了多态的
Hindley–Milner 类型推论。

OCaml 是相对较新的 ML 语言，1996 年出现，与 Java 大约同时诞生。但是，第一个主要 ML 方言可以
追溯到 1973 年，SML 于 1978 年开发。ML 方言在定理证明和研究中占据一席之地，通常被用于学术研究。
OCaml 没有继承 Standard ML 库，实际上它比 C/C++/Java/Python/Haskell 甚至 Ruby 更年轻。
PL (Programming Languages) 三角是：效率，生产力和安全，而 OCaml 同时兼顾了效率，生产力。

1. haXe - The Cross-platform Toolkit https://haxe.org
2. haXe https://github.com/haXeFoundation/haXe
3. haXe Documentation Introduction https://haxe.org/documentation/introduction/
4. haXe for C# https://haxe.org/documentation/platforms/csharp.html
5. haXe Library Manager https://lib.haxe.org
6. haXe Manual https://haxe.org/manual/introduction.html
7. haXe Code Cookbook https://github.com/haXeFoundation/code-cookbook/
8. haXe programming cookbook https://code.haxe.org/

haXe 目前支持的目标语言平台：

|    Name    | Output type |              Main usages               |
|------------|-------------|----------------------------------------|
| JavaScript | Sourcecode  | Browser, Desktop, Mobile, Server       |
| Neko       | Bytecode    | Desktop, Server, CLI                   |
| HashLink   | Bytecode    | Desktop, Mobile, Game consoles         |
| PHP        | Sourcecode  | Server                                 |
| Python     | Sourcecode  | Desktop, Server                        |
| Lua        | Sourcecode  | Desktop, Scripting                     |
| C++        | Sourcecode  | Desktop, Mobile, Server, Game consoles |
| Flash      | Bytecode    | Desktop, Mobile                        |
| Java       | Sourcecode  | Desktop, Mobile, Server                |
| JVM        | Bytecode    | Desktop, Mobile, Server                |
| C#         | Sourcecode  | Desktop, Mobile, Server                |

Compiler Targets
https://haxe.org/documentation/introduction/compiler-targets.html
https://haxe.org/manual/target-details.html

|      Name      | Tier |        Kind       | Static | Sys | Since version |
|----------------|------|-------------------|--------|-----|---------------|
| JavaScript     | 1    | source            | No     | No  | beta (2006)   |
| HashLink       | 1    | bytecode + source | Yes    | Yes | 3.4 (2016)    |
| Eval           | 1    | interpreter       | No     | Yes | 4.0 (2019)    |
| JVM            | 1    | bytecode          | Yes    | Yes | 4.0 (2019)    |
| PHP7           | 1    | source            | No     | Yes | 3.4 (2016)    |
| C++            | 2    | source            | Yes    | Yes | 2.4 (2009)    |
| Lua            | 2    | source            | No     | Yes | 3.3 (2016)    |
| C#             | 3    | source            | Yes    | Yes | 2.10 (2012)   |
| Python         | 3    | source            | No     | Yes | 3.2 (2015)    |
| Java           | 3    | source            | Yes    | Yes | 2.10 (2012)   |
| Flash          | 3    | bytecode          | Yes    | No  | alpha (2005)  |
| Neko           | 3    | bytecode          | No     | Yes | alpha (2005)  |
| ActionScript 3 | -    | source            | Yes    | No  | 1.12 (2007)   |
| PHP5           | -    | source            | No     | Yes | 2.0 (2008)    |

Haxe 可以用来做什么？一堆的可能性能，参考官方用例文档：

0. Use Cases for Haxe https://haxe.org/use-cases/
1. Haxe for Game Development https://haxe.org/use-cases/games/
2. Haxe for Websites and Web Apps https://haxe.org/use-cases/web/
3. Haxe for Mobile App Development https://haxe.org/use-cases/mobile/
4. Haxe for Desktop Apps https://haxe.org/use-cases/desktop/
5. Haxe for Command Line Interface (CLI) Apps https://haxe.org/use-cases/cli/
6. Haxe for Cross Platform APIs https://haxe.org/use-cases/cross-platform-apis/
7. Who Uses Haxe https://haxe.org/use-cases/who-uses-haxe.html
7. Indepth look at 2D game engines for Haxe https://dewitters.com/indepth-look-at-2d-game-engines-for-haxe/

In the Haxe game development ecosystem, there seem to be a lot of high level
game engines that use an underlying **Hardware Abstraction Layer (HAL)** or more.
We can distinguish 3 families of game engines that are each based on the same HAL:

1. Lime (Light Media Engine)
2. Kha
3. Snow

The Lime family is by far the most popular one. There is an obvious reason for this.
OpenFL and NME (Native Media Engine) expose a Flash API. So for all the Flash based
libraries that were ported to Haxe, it made sense to use the same API calls.
Flixel, FlashPunk and Starling are such examples.

The game architecture family tree looks like this:

    HaxeFlixel      Starling      awe6      HaxePunk ...
         |_____________|___________|_________|   |
             |                                   |
           OpenFL (HAL with Flash API)           |
             |                                  NME (HAL with Flash API)
           Lime (HAL)

The Kha family has the following structure:

    KhaPunk  Kha2D  Other lesser known engines
       |       |              |
       |_______|______________|
                  |
                 Kha (HAL)

The Snow family gathers around the snõwkit, a community, libraries,
tools and documentation for Haxe.

      Luxe
       |
      Snow (HAL)
       |
      Linc (Haxe wrapper to native libs)


Flash 作为一种过气技术，因为开源的构架得到了生命的延续。HaxeFlixel 集成了 OpenFL 等开源框架
以开发 Flash 游戏。可以使用 Haxe neko 作为替代，或者使用基于 Node + HTML5 的方案。
Neko 是一种为 Haxe 设计的轻量虚拟机技术，Haxe 支持 Neko bytecode。

1. The Neko Programming Language https://nekovm.org
2. HashLink is a virtual machine for Haxe https://hashlink.haxe.org
3. HashLink VM https://github.com/HaxeFoundation/hashlink
3. Neko VM https://github.com/HaxeFoundation/neko
3. Neko Tools https://nekovm.org/doc/tools/
4. Flash is dead, long live OpenFL https://www.gamedeveloper.com/programming/flash-is-dead-long-live-openfl-

Neko 起初本来就是计算支持多语言，但由于历史原因，终于变成运行 NekoML 和 Haxe 两种语言为主。
Haxe 3.4 引入 HashLink 接替 Neko，设计新虚拟机目的是解决几个主要的 Neko 历史遗留问题：

1. Performance 性能问题
2. Boxing 数据装箱问题
3. Polymorphism 类型多态问题

Neko 是日语“猫”的意思，其安装包文件列表：

01. **neko** : the virtual machine boot binary
02. **libneko.so** (neko.dll + neko.lib on Windows) : the NekoVM library
03. **nekoc** : the command-line Neko compiler
04. **nekoml** : the command-line NekoML compiler
05. **nekoml.std** : the NekoML standard library
06. **nekotools** : neko utilities (including dev web server)
07. several **.ndll** files : the Neko standard libraries
08. **gc.dll** (on Windows only) : the garbage collector used by Neko
09. **include/** : the .H header files needed for embedding and extending the VM
10. LICENCE and CHANGES : some text documents

通过 haxelib 安装的一些工具，如 flixel-tools 只含有 Neko 字节码程序，可以直接使用 neko
命令运行 run.n 字节码程序，等价于 haxelib run 命令。使用 nekotools 工具生成为可执行程序，
这此工具本身使用 NekoML 语言开发，源代码扩展名为 .nml 或者 .neko。

```sh
    neko haxe\lib\flixel-tools\run.n
    haxelib run flixel-tools
    nekotools boot haxe\lib\flixel-tools\run.n
    nekotools server -d path\to\web\app

    > nekoc --help
    Neko Compiler v2.3.0 - (c)2005-2013 Haxe Foundation
     Usage : neko [options] files...
     Options :
      -d <file> : dump bytecode
      -z <file> : make bytecode release
      -p <file> : parse and print neko source
      -doc <file> : make documentation
      -o <dir> : set output directory
      -console : run the console
      -link <file> : link bytecodes files
      -v : verbose mode
      -version : set the bytecode version
```

程序生成功能由 nekoboot.neko 源代码实现，它相当于 NekoVM 扩展程序，加载指定的字节码文件。
Neko 本身也作为 Web 服务器使用，nekotools 包含了一个 server 命令，用它启动 Web 服务器：

```neko
    // neko\src\src\tools\WebServer.nml
    function init() {
        var head = "Neko Web Server v1.0 - (c)2005-2022 Haxe Foundation";
        var port = &2000;
        var host = &"localhost";
        var decl = [
            ("-p", Args.Int (function(n) { port := n }) , "<port> : change server port");
            ("-h", Args.String (function(h) { host := h }) , "<host> : change server host");
            ("-d", Args.String (function(d) {
                var old = Sys.get_cwd();
                Sys.set_cwd d;
                cur_path := Sys.get_cwd();
                Sys.set_cwd old;
            }), "<dir> : change the server base directory");
            ("-log", Args.String (function(s) { file_log := Some (IO.write_file s true) }), "<file> : set log file");
            ("-rewrite", Args.Void (function() { mod_rewrite := true }), ": activate pseudo mod-rewrite for smart urls");
        ];
        Args.parse head decl (function(f) { throw Args.Invalid });
        log "Starting Neko Server on %s:%d" (*host,*port);
        Net.start_server Net.host_resolve(*host) (*port) init_client client_msg_safe;
    }
```

HashLink 程序编译与运行：

```sh
# Compile
# HashLink bytecode can be produced by using Haxe compiler (requires Haxe 3.4+)
haxe -hl output.hl -main MyApp

# Run
# HashLink bytecode can be run using HL/JIT virtual machine.
hl output.hl
```

Dual compilation
HashLink bytecode can be either run through HL/JIT virtual machine or
converted to C with HL/C:

```sh
haxe -hl out/main.c -main MyApp
gcc -O3 -o myapp -std=c11 -I out out/main.c -lhl [-L/path/to/required/hdll]
```

1. Use HL/JIT for daily development (fast compilation time)
2. Use HL/C for final release (best performance)
3. HL/C and HL/JIT share same runtime and semantics

HashLink runtime includes the following features:

1. Fully compatible with Haxe specification
2. Support file I/O, regular expressions, network, etc.
3. Unicode strings by default
4. Mark-and-not-sweep Garbage Collector
5. x86 and x86-64 HL/C compilation
6. x86 and x86-64 HL/JIT compilation

总结来说，Neko 本身是一种语言，其虚拟机称为 NekoVM，HashLink VM 则是为了解决前者不足设计的。

Haxe 官方展示了一个基于 HashLinkVM 的模拟经营 + 轻度 RTS 的游戏：《北加尔》。
初始版本基于 Haxe + Adobe AIR，目前运行于 HL + HLSDL library，性能不变。
《北境之地》《北加尔》剧情模式通关 https://www.bilibili.com/video/BV15J411r7Xh/
Northgard by ShiroGames https://northgard.net/game/

1. The code consists in ~1200 classes containing ~11000 methods.
2. Timing has been measured on a low end Intel Q6600 @2.4 Ghz
3. Whole project recompilation takes 18.2 seconds
4. Recompilation with no change takes 2.4 seconds (using compilation server)
5. Recompilation with partial changes takes 5.8 seconds
6. Memory usage has been reduced from 900MB to 700MB
7. Northgard is built using the open-source Heaps.io game engine
8. Northgard is available on Steam for PC, Mac OS X and Linux but also on consoles Nintendo Switch, PS4 and Xbox One.

Northgard is a strategy game based on Norse mythology in which you control
a clan of Vikings vying for the control of a mysterious newfound continent.

After years of tireless explorations, brave Vikings have discovered a new land
filled with mystery, danger and riches: Northgard. The boldest Northmen have
set sail to explore and conquer these new shores, bring fame to their Clan and
write history through conquest, trading, or devotion to the Gods.

That is, if they can survive the dire Wolves and Undead Warriors roaming
the land, befriend or defeat the giants, and survive the harshest winters
ever witnessed in the North...

“IT IS BETTER TO FIGHT AND FALL THAN TO LIVE WITHOUT HOPE.”
与其行尸走肉，不如奋起战斗！

haXe Library 安装

```sh
    haxelib --global update haxelib

    haXelib install actuate                    # Install `actuate` library
    haXelib install actuate 1.8.1              # Install a specific version
    haXe -lib actuate -main Test -js test.js   # Use `actuate` library in your haXe build

    haXelib list                               # List all of your installed libraries
    haXelib list openfl                        # List your installed libraries that have "openfl" in the name

    haXelib install actuate.zip                # Install a library from a zip file
    haXelib install test.hxml                  # Install all the libs listed in a hxml
    haXelib install all                        # Install all the libs in the hxml files in the current directory

    haXelib submit actuate.zip                 # Use haXelib to share your library with others!
```

haXe Foundation 提供了常用语言系统库：

| Project  |                                Notes                                |
|----------|---------------------------------------------------------------------|
| hxcpp    | The runtime for the C++ backend of the haXe compiler.               |
| hscript  | haXe Script is a scripting engine for a subset of the haXe language |
| hxnodejs | Extern definitions for node.js                                      |
| hxcs     | Support library for the C# backend of the haXe compiler             |
| hxjava   | Support library for the Java backend of the haXe compiler           |
| dox      | haXe documentation generator.                                       |
| markdown | A markdown library for haXe                                         |
| haXelib  | The haXelib client                                                  |

比如，Hxcpp 作为 haXe 编译器的 C++ 语言的后端，包含头文件、库、支持代码，用于编译 haXe 代码。

```sh
# https://lib.haxe.org/p/hxcpp/
# https://github.com/haXeFoundation/hxcpp/
# Hxcpp is the runtime support for the C++ backend of the haXe compiler.
haXelib install hxcpp 4.2.1
# https://lib.haxe.org/p/hxcs
# https://github.com/haXeFoundation/hxcs
# Support library for the C# backend of the haXe compiler
haXelib install hxcs 4.2.0
# https://lib.haxe.org/p/hxnodejs
# https://github.com/haXeFoundation/hxnodejs
# Extern definitions for node.js
haXelib install hxnodejs 12.1.0
```

比如，创建一个 C# 项目：

    project/
    ├── src/
    │   └── Main.hx
    ├── bin/
    │   └── cs/
    └── build.hxml

```sh
    # 1. Create a new directory for your haXe project, with this structure:
    mkdir project
    mkdir project/src
    mkdir project/bin
    mkdir project/bin/cs
    touch project/src/Main.hx
    touch project/build.hxml
    # 2. Add the following code into the src/Main.hx file:
    $src  = '
    class Main {
      static function main() {
        Sys.println("haXe is great!");
      }
    }
    '
    echo $src > project/src/Main.hx
    # 3. Add the following build configuration into the build.hxml file:
    $config = "
    -cp src
    -main Main
    -cs bin/cs
    "
    echo $config > project/build.hxml
    # 4. Build haXe project by running `haXe build.hxml` in project directory.
    # haXe -cp src -main Main -cs bin/cs
    # haXe -cp src -main Main -cpp bin/cpp
    # haXe -cp src -main Main -python bin/python/main.py
    # haXe -lib hxnodejs -cp src -main Main -js bin/js/main.js
    cd project
    haXe .\build.hxml
```

由于库路径配置问题，直接使用 haxe 命令执行编译引用了第三方库的程序时，可能会导致类型未定义的问题。
比如，Kha 游戏框架库，目前已经不在 haxelib 仓库中管理，使用 haxelib 安装时只会得到描述文件。
应该使用 Kha 构建工具 khamake 来调用 haXe 编译程序，Kha 构建工具是一个 Node 脚本程序。

    Type not found : kha.Framebuffer
    Type not found : kha.Blob

可安装的仓库管理的最后一个版本是 kha 16.1.3，需要修改库配置：`"classPath": "Sources/",`。
指向库代码还不够，Kha 有许多平台相关的代码，保存有 Backends 目录下，需要根据不同的平台引用。
使用 --class-path 指定路径，否则就会导致 kha.Blob 这类平台相关类型无定义。这些工作使用 Kha
构建工具时都是自动化处理的。

Kha on haxelib was discontinued many years ago - we sadly now felt it was necessary
to remove it entirely from haxelib because people kept using it despite the scary
warning message it prints on every run. This "lib" now contains only this readme,
please see https://github.com/Kode/Kha/wiki/Getting-Started for instructions on
how to actually use Kha.

一个基本的 Haxe library 就是一系列的 .hx 代码文件，默认的分发方式也是源代码文件，所以可以直接
修改代码文件来改变库的行为。每个库都有一个标识名称，Haxe 编译器通过它来定位代码文件。在编译器命令
参数中使用编译选项指定引用的库名称，或者指定代码路径：

    Compilation:
      -p, --class-path <path>     add a directory to find source files
      -m, --main <class>          select startup class
      -L, --library <name[:ver]>  use a haxelib library
      -D, --define <var[=value]>  define a conditional compilation flag

每个库都有一个 haxelib.json 信息文件，包含版本信息，代码路径等等：
Creating a haxelib package https://lib.haxe.org/documentation/creating-a-haxelib-package/

```json
    {
      "name": "random",
      "license": "MIT",
      "classPath": "src/",
      "tags": [],
      "description": "Shortcuts to generate random floats, ints, bools or pick random items from an array or enum.",
      "contributors": ["jason"],
      "releasenote": "Add support for `Random.fromEnumConstructor( SomeEnum );`",
      "version": "1.2.0",
      "url": "https://github.com/jasononeil/hxrandom",
      "dependencies": { }
    }
```

例如，使用 Random 库产生随机数，它调用内置的 Math.random() 函数：

    haxelib install Random 1.2.0
    haxelib install Random 1.4.1
    haxelib set Random 1.2.0
    haxe --library random --main Main --interp

假定 Haxe 安装在 HaxeToolkit 目录下，那么库文件安装位置及目录结构如下，.current 文件指示
当前激活的版本，使用 haxelib set 命令指定所使用的版本：

    C:\HaxeToolkit\haxe\lib\random\.current
    C:\HaxeToolkit\haxe\lib\random\1,2,0\src\Random.hx
    C:\HaxeToolkit\haxe\lib\random\1,4,1\src\Random.hx

```haxe
    import Random;

    class Main {
      static public function main() {
        var elt = Random.fromArray([1, 2, 3]);
        trace(elt);
      }
    }
```


A taste of haXe

```haxe
    class Game {
      // haXe applications have a static entry point called main
      static function main() {
        // Anonymous structures.
        var playerA = { name: "Simon", move: Paper }
        var playerB = { name: "Nicolas", move: Rock }

        // Array pattern matching. A switch can return a value.
        var result = switch [playerA.move, playerB.move] {
          case [Rock, Scissors] |
               [Paper, Rock] |
               [Scissors, Paper]: Winner(playerA);

          case [Rock, Paper] |
               [Paper, Scissors] |
               [Scissors, Rock]: Winner(playerB);

          case _: Draw;
        }
        // Paper vs Rock, who wins?
        trace('result: $result');
      }
    }

    // Allow anonymous structure named as type.
    typedef Player = { name: String, move: Move }

    // Define multiple enum values.
    enum Move { Rock; Paper; Scissors; }

    // Enums in haXe are algebraic data type (ADT), so they can hold data.
    enum Result {
      Winner(player:Player);
      Draw;
    }
```

Language features https://haxe.org/manual/lf.html
Compiler features https://haxe.org/manual/cr-features.html

haXe features

01.  Cross-platform standard library
02.  Fast compiler / Interpreted mode
03.  Type inference
04.  Conditional Compilation
05.  Enums / Generalized Algebraic Data Types
06.  Pattern matching
07.  Type parameters, constraints, variance
08.  Classes, Interfaces, and Inheritance
09.  Abstract Types
10.  Inlined Calls
11.  Array Comprehension
12.  Metadata
13.  Static Extensions / Mixin functions
14.  String Interpolation
15.  Syntax-transformation / macros
16.  Null Safety (opt-in)
17.  Static Analysis / Dead code removal
18.  Access to native features
19.  Unicode
20.  Open Source



# 🥚 haXe & Flixel
00. HaxeFlixel Demos https://haxeflixel.com/demos/
01. Collection of demos for HaxeFlixel https://github.com/HaxeFlixel/flixel-demos
02. HaxelFlixel Tutorial https://haxeflixel.com/documentation/tutorial
02. Haxe Support for Visual Studio Code https://github.com/vshaxe/vshaxe
03. https://haxeflixel.com/documentation/HaxeDevelop/
04. https://haxeflixel.com/documentation/visual-studio-code/
05. https://github.com/vshaxe/vshaxe/wiki/Installation
06. https://marketplace.visualstudio.com/items?itemName=nadako.vshaxe
07. HaxeFlixel Snippets https://snippets.haxeflixel.com/
08. HaxeFlixel Showcase https://haxeflixel.com/showcase/
09. Flixel handbook https://haxeflixel.com/documentation/haxeflixel-handbook/
10. HaxelFlixel API documentation http://api.haxeflixel.com/
10. HaxelFlixel Docs https://github.com/HaxeFlixel/flixel-docs
11. OGMO Editor https://ogmo-editor-3.github.io
11. Flash is dead, long live OpenFL https://www.gamedeveloper.com/programming/flash-is-dead-long-live-openfl-

Flash Player 寿终正寝后，还可以继承使用 Flash Player 独立播放器来进行播放 SWF。
但是会提示“该版本过旧，不支持运行，请升级后使用”，造成 swf 不能正常播放。
版本过旧问题解决方法：

1. 添加 Host 映射设置，屏蔽 Flash Player 联网的服务器，禁止其联网获取版本信息。

    C:\Windows\System32\drivers\etc\hosts

    127.0.0.1 geo2.adobe.com
    127.0.0.1 fpdownload2.macromedia.com
    127.0.0.1 fpdownload.macromedia.com
    127.0.0.1 macromedia.com
    127.0.0.1 flash.cn

2. 清理配置文件，删除 settings.sol 和 settings.sxx，创建一个空文件替代，属性设置为“只读”。

    C:\Users\你的用户名\AppData\Roaming\Macromedia\Flash Player\macromedia.com\support\flashplayer\sys

Flash Player 运行时会生成配置文件“settings.sol”，用来保存当前版本信息和最新版本信息，
一旦检测到版本不是最新的，就会提示“该版本过旧，不支持运行，请升级后使用”。利用只读的空文件限制
Flash Player 独立播放器再次保存版本信息，就可以一劳永逸地解决问题了。

更好的选择是不使用 Flash Player，可以使用 neko 作为替代，或者使用基于 Node + HTML5 的方案。
Neko 是一种为 Haxe 设计的轻量虚拟机技术，Haxe 支持 Neko bytecode。

Neko 起初本来就是计算支持多语言，但由于历史原因，终于变成运行 NekoML 和 Haxe 两种语言为主。
Haxe 3.4 引入 HashLink 接替 Neko，设计新虚拟机目的是解决几个主要的 Neko 历史遗留问题：

1. Performance 性能问题
2. Boxing 数据装箱问题
3. Polymorphism 类型多态问题


HaxeFlixel Powered by open source cross-platform tech:

    Haxe + OpenFL + Flixel = HaxeFlixel

Flixel is a free Flash Actionscript library created by Adam Saltsman.
It provides some base classes for creating 2D Flash games and other content.
It was originally built up from Saltsman's work on several games such as
Gravity Hook, Fathom, and Canabalt.
https://github.com/HaxeFlixel/flixel-docs
https://flixel.org/about.html

Lime is a foundational Haxe framework for cross-platform development
https://lib.haxe.org/p/lime/
https://github.com/openfl/lime

The Open Flash Library (OpenFL) for fast 2D development, previously known as
NME (Native Media Engine), is an innovative framework designed to provide fast,
productive development for Windows, Mac, Linux, iOS, Android, Flash and HTML5
– all using the same source code.
https://lib.haxe.org/p/openfl/
https://www.openfl.org
https://lime.openfl.org/docs/home/
https://lime.openfl.org/api/
https://lime.openfl.org/docs/command-line-tools/basic-commands/


Install HaxeFlixel

To install the latest stable version of HaxeFlixel, open a command prompt
and run the following [Haxelib](http://lib.haxe.org/) commands:

``` bash
haxelib install lime
haxelib install openfl
haxelib install flixel
```

After the installation is complete, you can compile games to HTML5, Flash and
Neko out of the box.

To easily install additional libraries (addons, ui, demos, tools, templates...)
in a single step, just run:

```bash
haxelib run lime setup flixel
```

Install the `lime` command, makes `lime` available as a command
(alias for `haxelib run lime`).

```bash
haxelib run lime setup
```

To compile to desktop and mobile targets, you have to make sure you have
run the respective `lime setup` commands. Each are specified in the
[Lime "Advanced Setup" docs](https://lime.openfl.org/docs/advanced-setup/windows/).


Install the `flixel` command

Run the following two commands to install
[flixel-tools](http://haxeflixel.com/documentation/flixel-tools/)
(needed for project templates among other things):

通过 haxelib 安装的 flixel-tools 只含有 Neko 字节码程序，可以使用 neko 命令运行 run.n：

``` bash
> haxelib install flixel-tools
> haxelib run flixel-tools setup
> neko ..\..\flixel-tools-dev\run.n

> flixel -h
 _   _               ______ _ _          _
| | | |              |  ___| (_)        | |
| |_| | __ ___  _____| |__ | |___  _____| |
|  _  |/ _` \ \/ / _ \ ___|| | \ \/ / _ \ |
| | | | (_| |>  <  __/ |   | | |>  <  __/ |
|_| |_|\ __,/_/\_\___|_|   |_|_/_/\_\___|_|

Powered by the Haxe Toolkit and OpenFL
Visit www.haxeflixel.com for community support and resources!

HaxeFlixel command-line tools (1.5.1)
Installed flixel version: 5.2.2

Type 'help <command>' for help on a specific subcommand.

Available commands:
   create (c) : create a copy of a demo project
   setup (st) : configure the tools and download the flixel libs
   download (dw) : download the flixel libs
   template (tpl) : create a project from a template
   buildprojects (bp) : builds all demos for the specified target
   configure (conf) : adds IDE template files to one or multiple projects

template(tpl) : create a project from a template
 Usage : template <name> <path> <options>
  <name>    : The name for the template to generate, the "default"
              template will be created when none is specified.
  <path>    : The name for the path to create the template in, default
              is the name of the template itself.
  <options> : The options available will depend on the specific
              template's template.json. The default template has options
              such as -n for project name and -w -h for width and height.
              Eg. flixel tpl -n "Name" -w 680 -h 480
  -ide <subl|fd|idea|vscode|none> : The IDE to use (overrides the configuration).
```

Updating HaxeFlixel

If a new version of Flixel has been released, and you want to update to it,
you can use the following command to do so:

``` bash
    haxelib update flixel
    haxelib update flixel-addons
    ...
```

To stay informed about new releases, you can follow @HaxeFlixel on Twitter or
check out our [Blog](http://haxeflixel.com/blog/) from time to time.

If you are interested in using bleeding edge code from the development branch
[on GitHub](https://github.com/HaxeFlixel/flixel), see
[instructions here](/documentation/install-development-flixel).

Then run the template command (tpl for short), or create (c):

``` bash
    flixel tpl -n "HelloWorld"
    flixel tpl -n "HelloWorld" -ide vscode

    flixel create 29 -ide subl
    flixel tpl "FlxEffectSprite" -ide subl

    > flixel c
    > flixel c --dir path\to\flixel-demos\
    Listing all available demos...

      [01] BSPMapGen             [29] FlxEffectSprite       [57] GamepadTest
      [02] BlendModeShaders      [30] FlxFSM                [58] GridMovement
      [03] BlendModes            [31] FlxFloodFill          [59] HeatmapPathfinding
      ...
      [24] FlxBunnyMark          [52] FlxTilemapExt         [80] TiledEditor
      [25] FlxCamera             [53] FlxTrailArea          [81] Tilemap
      [26] FlxCaveGenerator      [54] FlxTween              [82] Tooltips
      [27] FlxClothSprite        [55] FlxTypeText           [83] Transitions
      [28] FlxCollisions         [56] FrameCollections      [84] TurnBasedRPG

      [c] Cancel

    Please enter the number or name of the demo to create.
```

If no name or number is given to flixel create, it will list all demos and
prompt you for a choice, by number or name.

检查 flixel-tools 源代码 src\commands\Create.hx 可以知道它通过 sys.io.Process 调用
`haxelib path flixel-demos` 命令，获取其返回的库路径信息：

```haxe
    // flixel-tools-dev\src\utils\CommandUtils.hx
    final proc = new Process("haxelib", ["path", name]);

    // flixel-tools-dev\src\commands\Create.hx
    function getProjects():Array<LimeProject>
    {
        var directory = console.getOption("dir");
        if (directory == null)
            directory = CommandUtils.getHaxelibPath("flixel-demos");

        final projects:Array<LimeProject> = ProjectUtils.findLimeProjects(directory);

        if (projects.length == 0)
        {
            Sys.println("No demos found.");
            Sys.println("Is the flixel-demos haxelib installed?");
            Sys.println("Try 'haxelib install flixel-demos'.");
            exit();
        }

        // sort alphabetically
        projects.sort(function(p1, p2)
        {
            if (p1.name < p2.name)
                return -1;
            if (p1.name > p2.name)
                return 1;
            return 0;
        });

        return projects;
    }
```

You will now see a new folder named "HelloWorld" with all the files for
your project being created automatically.

Then add some code into PlayState.hx.

```haxe
    package;

    import flixel.FlxState;
    import flixel.text.FlxText;
    import flixel.FlxG;

    class PlayState extends FlxState
    {
        private var text:FlxText;
        private var dbg:FlxText;
        private var dir:Int;

        override public function create()
        {
            super.create();
            // FlxText(x, y, width, string, size, font)
            text = new FlxText(10, 10, 100, "Hello, World!");
            dbg  = new FlxText(10, 30, 300, "!");
            add(dbg);
            add(text);
            // FlxObject movement
            text.moves = true;
        }

        override public function update(elapsed:Float)
        {
            super.update(elapsed);
            dbg.text = Std.string(text.velocity) + " " + Std.int(text.x);
            // use Global helper class
            dir = text.x > FlxG.width / 2 ? -1 : 1;
            text.velocity.x += dir;
        }
    }
```

Test the Project

Return to your command line window - now we can compile the project.
First switch to the directory containing the Project.xml file.You can
then compile to HTML5, Neko and Flash out of the box with these commands:

```sh
cd HelloWorld
lime build neko -release
lime build hl -release
lime test hl
lime test neko
lime test html5
lime test flash

> lime -h

_/\\\\\\______________________________________________
_\////\\\______________________________________________
_____\/\\\_____/\\\_____________________________________
______\/\\\____\///_____/\\\\\__/\\\\\_______/\\\\\\\\___
_______\/\\\_____/\\\__/\\\///\\\\\///\\\___/\\\/////\\\__
________\/\\\____\/\\\_\/\\\_\//\\\__\/\\\__/\\\\\\\\\\\___
_________\/\\\____\/\\\_\/\\\__\/\\\__\/\\\_\//\\///////____
________/\\\\\\\\\_\/\\\_\/\\\__\/\\\__\/\\\__\//\\\\\\\\\\__
________\/////////__\///__\///___\///___\///____\//////////___

Lime Command-Line Tools (8.0.1)

 Usage: lime <command> [arguments]

 Basic Commands:

  config -- Display or set command-line configuration values
  create -- Create a new project or extension using templates
  clean -- Clean the specified project and target
  update -- Copy assets for the specified project and target
  build -- Compile and package for the specified project and target
  run -- Install and run for the specified project and target
  test -- Update, build and run in one command
  help -- Show this information

 Additional Commands:

  trace -- Trace output for the specifed project and target
  deploy -- Archive and upload builds
  display -- Display information for the specified project and target
  rebuild -- Recompile native binaries for libraries
  install -- Install a library from haxelib, plus dependencies
  remove -- Remove a library from haxelib
  upgrade -- Upgrade a library from haxelib
  setup -- Setup Lime or a specific platform
```

## 🐥 HaxeFlixel Docs
https://github.com/HaxeFlixel/flixel-docs
https://flixel.org/about.html

flixel-docs
|-- LICENSE.md
|-- README.md
|-- api
|   |-- Make.hx
|   |-- dox
|   |   |-- Macro.hx
|   |   |-- Main.hx
|   |   |-- dox.hxml
|   |   |-- haxe_libraries
|   |   |   |-- dox.hxml
|   |   |   |-- hxargs.hxml
|   |   |   |-- hxcpp.hxml
|   |   |   |-- hxcs.hxml
|   |   |   |-- hxjava.hxml
|   |   |   |-- hxnodejs.hxml
|   |   |   |-- hxparse.hxml
|   |   |   |-- hxtemplo.hxml
|   |   |   `-- markdown.hxml
|   |   |-- package-lock.json
|   |   |-- package.json
|   |   `-- theme
|   |       |-- config.json
|   |       |-- resources
|   |       |   |-- extra-styles.css
|   |       |   |-- favicon.ico
|   |       |   `-- haxe-nav.css
|   |       `-- templates
|   |           |-- footer.mtt
|   |           `-- topbar.mtt
|   `-- xml
|       |-- Macro.hx
|       |-- Main.hx
|       |-- project.xml
|       `-- xml.hxml
`-- documentation
    |-- 00_getting_started
    |   |-- 00-getting-started.html.md
    |   |-- 01-install-haxeflixel.html.md
    |   |-- 02-hello-world.html.md
    |   |-- 03-visual-studio-code.html.md
    |   |-- 04-HaxeDevelop.html.md
    |   `-- 05-where-to-now.html.md
    |-- 01_tutorial
    |   |-- 00-tutorial.html.md
    |   |-- 01-the-power-of-haxeflixel.html.md
    |   |-- 02-1-setup.html.md
    |   |-- 03-2-creating-a-new-project.html.md
    |   |-- 04-3-groundwork.html.md
    |   |-- 05-4-sprites-and-animation.html.md
    |   |-- 06-5-creating-a-tilemap.html.md
    |   |-- 07-6-loading-the-tilemap.html.md
    |   |-- 08-7-zoom-and-cameras.html.md
    |   |-- 09-8-pickups.html.md
    |   |-- 10-9-enemies-and-basic-ai.html.md
    |   |-- 11-10-ui-and-combat.html.md
    |   |-- 12-11-game-over-menu.html.md
    |   |-- 13-12-sound-and-music.html.md
    |   |-- 14-13-multiple-platforms.html.md
    |   |-- 15-14-polish.html.md
    |   `-- 16-conclusion.html.md
    |-- 02_handbook
    |   |-- 00-haxeflixel-handbook.html.md
    |   |-- 01-flixel-display-list.html.md
    |   |-- 02-flxgroup.html.md
    |   |-- 03-flxsprite.html.md
    |   |-- 04-flxstate.html.md
    |   |-- 05-flxsave.html.md
    |   |-- 06-flxtween.html.md
    |   |-- 07-haxeflixel-conditionals.html.md
    |   |-- 08-haxeflixel-targets.html.md
    |   |-- 09-desktop-targets.html.md
    |   |-- 10-mobile-targets.html.md
    |   |-- 11-android.html.md
    |   |-- 12-ios.html.md
    |   |-- 13-neko.html.md
    |   |-- 14-keyboard.html.md
    |   |-- 15-mouse.html.md
    |   |-- 16-gamepads.html.md
    |   |-- 17-actions.html.md
    |   |-- 18-troubleshooting.html.md
    |   |-- 19-debugger.html.md
    |   `-- 20-debugger-interaction.html.md
    |-- 03_resources
    |   |-- 00-resources.html.md
    |   |-- 01-cheat-sheet.html.md
    |   |-- 02-openfl-project-xml-format.html.md
    |   |-- 03-game-development-tools.html.md
    |   |-- 04-compiler-conditionals.html.md
    |   |-- 05-using-haxelib.html.md
    |   `-- 06-faq.html.md
    |-- 04_community
    |   |-- 00-community.html.md
    |   |-- 01-about.html.md
    |   |-- 02-why-haxe.html.md
    |   |-- 03-introduction-to-haxe.html.md
    |   |-- 04-introduction-to-openfl.html.md
    |   |-- 05-contributing.html.md
    |   |-- 06-code-contributions.html.md
    |   |-- 07-code-style.html.md
    |   |-- 08-website-docs.html.md
    |   |-- 09-upgrade-guide-3-x.html.md
    |   |-- 10-flixel-addons.html.md
    |   |-- 11-upgrade-guide-4-0-0.html.md
    |   |-- 12-flixel-tools.html.md
    |   `-- 13-install-development-flixel.html.md
    `-- images


# 🥚 haXe & Armory Engine
1. Draw Trangle in Kode Garden http://kodegarden.org/#e477e6b27943e1a6294f997456f20ca27ff67499
2. Community tutorials https://github.com/armory3d/armory/wiki/community_tutorials
3. Games made with Armory3D https://github.com/armory3d/armory/wiki/Games-made-with-Armory/
3. Tutorial for Kha Framework https://github.com/RblSb/khaguide
4. OpenGL Tutorial http://www.opengl-tutorial.org/
4. 3D Tutorials for Kha https://github.com/luboslenco/kha3d_examples/wiki
5. BlackGoku36 Tutorials https://blackgoku36.github.io/BG36-tutorials/
6. package armory.ui.TElement https://api.armory3d.org/armory/ui/TElement.html
7. Games Built With Kha https://github.com/Kode/Kha/wiki/Games-Built-With-Kha
8. Tankzors Lux 塞班手机时代游戏 https://github.com/Tankzors/Builds

UPBGE 作为 Bledner BGE 引擎的继承者，直接基于 Blender 源代码开发，集成度更高。

Armory3D 开发团队自从 ArmoryPaint 工具获 EPIC Games 大奖后，重心似乎也偏向它了：

```sh
    git clone --recurse-submodules git@github.com:armory3d/armortools.git 

    # Updating cloned repository
    git pull origin main
    git submodule update --init --recursive
    # Delete `armorpaint/build` directory if present
```

简而言之：

1. Armory3D 基于 Haxe 语言和 Kha 底层 HAL 硬件抽象层实现跨平台！
2. UPBGE 与 Blender 一体，所见即所得，集成度高，所以 Grease Pencil，支持的！

阅读 Architecture 内容，了解使用到的相关构架，有助于快速认识 Armory 引擎的主体构架结构：

  * [Setup](https://github.com/armory3d/armory/wiki/setup)
  * [Playground tutorial](https://github.com/armory3d/armory/wiki/playground)
  * [Architecture](https://github.com/armory3d/armory/wiki/architecture)
  * [Tanks tutorial](https://github.com/armory3d/armory/wiki/tanks)

Armory3D Wiki - Playground 内容中展示了 Armory 引擎的基本功能以及使用流程：

- Armory Player 工具条的使用，Run、Stop，或者 Krom、Browser 运行时选择等等；
- Materials - Armory PBR 是引擎提供的一个着色程序；
- Animation - Armory 支持 Blender 时间轴动画；
- Physics - Armory 集成了 Bullet 等物理引擎支持 Blender 中的物理设置；
- Logic Nodes - 逻辑节点和 UE 蓝图一样是可视化的节点编程工具；
- Haxe Scripts - Armory 可以使用 Haxe 脚本为场景对象提供编程控制能力，主要是 Iron 构架；
- Bundled Scripts - Armory 引擎提供的一套常用的 Trait 扩展类型定义；
- UI Canvas - 场景属性 Armory Traits 列表可以添加 UI 扩展，可以激活 Armory2D 界面编辑器；
- Render Path - 提供可编程的渲染路径系统，`Render - Armory Render Path` 面板中进行配置；
- Exporter - 项目导出配置： `Properties - Render - Armory Exporter`；

所谓“捆绑脚本”，Bundled Scripts，就是 Armory 源代码中现有的由 Haxe 编写的 Trait 扩展类型。
与常规 Haxe 脚本类似，Bundled 脚本可以附加到对象属性面板或场景属性中的 Armory Trait 列表中。
例如，使用 PhysicsDrag 特性，当这个特性附加到启用了物理的对象上时，可以使用鼠标拖动这个对象。
又如，使用 WalkNavigation 可以实现相机的漫步运动控制。

以下一是 Armsdk 中定义的部分 Bundled Scripts 列表和 Zui UI 框架代码文件：

    Armory Sources
    |-- armory.trait
    |   |-- armory\trait\ArcBall.hx
    |   |-- armory\trait\ThirdPersonController.hx
    |   |-- armory\trait\VehicleBody.hx
    |   |-- armory\trait\VirtualGamepad.hx
    |   |-- armory\trait\WalkNavigation.hx
    |   |-- armory.trait.internal
    |   |   |-- armory\trait\internal\Bridge.hx
    |   |   |-- armory\trait\internal\CameraController.hx
    |   |   |-- armory\trait\internal\CanvasScript.hx
    |   |   |-- armory\trait\internal\DebugConsole.hx
    |   |-- armory.trait.navigation
    |   |   `-- armory\trait\navigation\Navigation.hx
    |   `-- armory.trait.physics
    |       |-- armory\trait\physics\KinematicCharacterController.hx
    |       `-- armory.trait.physics.bullet
    |           |-- armory\trait\physics\bullet\KinematicCharacterController.hx
    |           |-- armory\trait\physics\bullet\PhysicsConstraint.hx
    |           |-- armory\trait\physics\bullet\PhysicsConstraintExportHelper.hx
    |           `-- armory\trait\physics\bullet\SoftBody.hx
    `-- armory.ui
        |-- armory\ui\Canvas.hx
        |-- armory\ui\Ext.hx
        |-- armory\ui\Popup.hx
        `-- armory\ui\Themes.hx


luboslenco kha3d_examples 教程使用了在线的 Kode Garden 服务，只需要使用最新 Chrome
浏览器即可以免环境配置运行 Kha 游戏项目。

使用 Kha 开发游戏项目，最好有图形学基础，有一定的线性代数基础。熟悉现代 GPU 渲染管道的编程逻辑，
了解任意一个图形 API 接口，如 OpenGL、Direct3D、Metal、Vulkan。

Blender Grease Pencil 绘画是基于曲线创建的，不能像几何体一样导出到 Godot 这些游戏引擎中使用，
只有 Mesh 几何体才能通过 Collada 这些文件导出使用。当然，可以将蜡笔转换为 Polygon Curve，
设置 Geometry -> Depth 再导出为 Collada，但是经过处理后，与 Blender 渲染的效果不一致。
另一种方法是输出透明有动画帧图像，作为 Sprite Animation 使用，需要设置渲染器的透明属性，
Render Properties - Film - Transparent。

目前，Armory3D 是集成了 Blender 功能的游戏引擎，可以说是专为 Blender 开发的，但蜡笔效果
支持也不好。Armory 本身是 Blender 插件，组合成一个完整游戏开发工具和从头到尾的统一工作流程。
使用 haXe 语言开发，语法类似 Java。haXe 是编译器又是转译工具，可以将源代码构建为跨平台
应用程序，并且允许访问每个平台的本地功能。自有虚拟机 HashLink 和 NekoVM，但也可以在
解释模式下运行，例如 `haXe -cp src --main Main --interp`。

Armory3D 引擎是一组工具集合，除了一个 Blender 插件，还有以下核心模块：

01. **haXe** 一个高级跨平台编程语言、代码转译工具。
02. **Kha** 一个使用 haXe 编程语言的跨平台游戏框架，包含独立于不同系统的图形、音频、输入、网络抽象层。
03. **Iron** 是 Armory 的核心，相对于处理底层 Kha，Iron 是高级抽象层，处理游戏中的渲染与内容管道。
04. **Armory3D**，包含的 Blender 插件称为 Armory，从 Blender 中完全分离 Shaders 和
    Materials，使用 Cycles 材质节点，使用 Blender 动画，提供 Logic Nodes 可视化编程。
    使用 haXe 编程语言，使用 Traits 混入编程模式。
05. **Zui** UI 框架，使用 Armory2D 编辑器进行可视化界面设计，Bundled 目录下 JSON 文件中保存。
    此构架受 imgui 启发，Immediate Mode 即时刷新模式 UI 构架，使用 Haxe 和 Kha 实现。

Armory 使用独立于 Blender 的渲染程序，通过 Iron 实现，但是使用 Cycles/EEVEE 材质节点，
目前还不断完善，没有完全做支持所有材质节点。Armory 提供了一个 Armory PBR 材质着色器，另外
Render Path 功能完全可脚本化，支持开箱即用的 deferred renderpath。也完全可以在 GLSL
中编写自己的着色器。

显然，Armory 的缺点是对 Blender 材质支持不到位，比如 Glass BSDF 就不能完全支持，这导致
Blender 中调试好的材质，程序运行时 Armory 无法准确还原，并且较多 Shader 节点没有支持。
[supported nodes] https://github.com/armory3d/armory/wiki/supported_nodes

Armory3D 开发本身涉及多个语言，包括 haXe、Python、JavaScript 等等，需要对所选择语言有了解。
可以在渲染器属性面板 Armory Exporter 中配置为 C 语言项目导出，如 Windows (C)、Android (C)，
这种方式会生成相应的项目配置和 C 语言代码，需要经过编译才会生成游戏的可执行程序。使用 JavaScript
语言有两种导出方式，Node (JS) 和 HTML (JS)，不同平台提供的 API 都有差异，需要区别对待。

JavaScript 作为一种跨平台脚本语言，应用非常广泛，在 Armory 中也被大量使用。并且，随着
WebAssembly 不断发展，Web 平台性能有了较大的进步，所以 JavaScript 应用更盛。正所所谓：
任何可以用 JavaScript 来写的应用，最终都将用 JavaScript 来写。
JavaScript 的优点是可以写任何东西，缺点是你真的会用它去写这些东西。

    Atwood's Law: Any application that can be written in JavaScript,
    will eventually be written in JavaScript.

    Reg Braithwaite: The strength of JavaScript is that you can do anything.
    The weakness is that you will.

也就如墨菲定律所说:“如果坏事情有可能发生，它总会发生，并引起最大可能的损失。”
JavaScript 虽然灵活，但是用好它好一点也不容易，特别是大型项目，所以才有了
TypeScirpt 这种强类型升级版 JS 脚本。


Armory3D SDK 本身已经包含 Armory2D 工具，要从 Blender 中启动 Armory2D editor，
只需要在 Scene 属性面板中向 Armory Scene Traits 列表中添加一个 UI Armory Trait，
然后编辑这个 UI 就会打开 Armory 2D 编辑器。或者直接执行 Krom 加载 Armory2D。
Armory2D UI Editor https://github.com/armory3d/armory/wiki/ui_editor

    Krom.exe C:\HaxeToolkit\armsdk\lib\armory_tools\armory2d\d3d11

注意，Kha GraphicsExtension 会在新版本中移除，需要使用这个图形扩展，可以手动拷贝到项目目录中。

    armsdk\Kha\Sources\kha\graphics2\GraphicsExtension.hx

    @:deprecated("GraphicsExtension will be removed. If you want to use it, simply copy it into your own project and then remove this message.")

一个常用的工作流程是：使用 Kha 编译源代码得到 JavaScript 脚本程序，然后由 Krom 加载运行。
Krom 和 Electron 类似，都集成了 V8 JavaScript 脚本引擎，提供了不错的性能。Krom 还集成了
一个低层抽象游戏库：Kinc - Modern low level game library and hardware abstraction。
同时，haXe 编程语言提供了的丰富转译能力，这样的组合也使得 Kha 拥有非常好的移植能力，方便实现
跨平台游戏项目开发。

Krom 运行程序时，如果路径参数缺失，krom 就从其自身的目录下加载着色器和资产。

Armory3D 运行游戏时也会调用 Kha 编译命令，可以打开 Blender 控制台查看。比如，以下命令
将构建出供 Krom 运行时程序，生成的工程也可以使用 HaxeDevelop 进行构建。

用户也可以自行构建 Zui 这些工具，并将结果拷贝到指定目录。下载 Zui 源代码后，就可以参考以下命令
执行 Zui 示例程序的构建、执行：

```sh

    ### Windows
    node Kha/make krom -g direct3d11`
    # Copy files from `build/krom` to `ArmorySDK/lib/armory_tools/armory2d/d3d11`

    ### Linux / macOS
    node Kha/make krom -g opengl`
    # Copy files from `build/krom` to `ArmorySDK/lib/armory_tools/armory2d/opengl`

    # krom [assetsdir shadersdir [--flags]]
    # krom --debug 9988

    cd C:\HaxeToolkit\armory_examples-22.06\ui_canvas\

    C:\HaxeToolkit\armsdk\nodejs\node.exe C:\HaxeToolkit\armsdk\Kha\make krom --ffmpeg ffmpeg.exe -g direct3d11 --shaderversion 330 --parallelAssetConversion 4 --to build\debug --quiet

    C:\HaxeToolkit\armsdk\Krom\Krom.exe build\debug\krom build\debug\krom-resources --consolepid 14812
```

Blender 中执行 Armory3D 构建时，引擎插件会将所有资源、着色器、纹理等等都存放在 compiled 目录下，
最后打包到输出目录，主要是 krom 和 krom-resources 两个目录。构建脚本 khafile.js 也自动生成。
资源导出目标为 `<build target>-resources`，比如 Krom 导出的资源目录就是 krom-resources。

而手动执行 Kha 构建时，则直接打包到输出目录，并且需要自行配置 khafile.js 脚本，当然可以调用 khamake 生成：

    node.exe C:\HaxeToolkit\armsdk\Kha\make --init

Kha 构建 HTML5 或 Flash 应用时，如果有 .wav 等等资源文件，就需要指定 ffmpeg 工具来转换格式。
声波文件在 HTML5 平台中需要转换为 .ogg 文件，在 Flash 平台中转换为 .mp3 文件，优化文件大小。

    node Kha/make html5 --ffmpeg "/path/to/ffmpeg.exe"

khamake 期待的资源文件格式如下，其它格式资源通过 Assets.blobs 作为 Blob 对象访问：

01. Images: png, jpg, hdr
02. Sounds: wav (sample rate: 44100Hz 16 bit)
03. Videos: mp4
04. Fonts: ttf


Kha 是一套 API 或称为一个开发库，它使用的构建工具称为 **khamake**，以及一个着色器交叉编译器
**Krafix**，使其能够支持多个图形 API。支持平台包含：Web, Mobile, Desktop, and Consoles，
使用 OpenGL, WebGL, DirectX, Vulcan, 以及 Metal 等图形 APIs。

Kha 编译得到目标程序程序是 targets，最典型就是 C++ ( with Kore ), Krom, Web, 和 HashLink (HL)。

**Kore ( C++ )**
Kore is the cross-platform C++ library that backs Kha's C++ target. It implements
the whole Kha API for native targets and can be used to publish games to Windows,
Linux, MacOS, and game consoles. Khamake is used similar to CMake to generate Linux
( Makefile/Code::Blocks ), Windows ( Visual Studio ), and MacOS ( XCode ) projects
that you can compile using the platform's native tools.

Armory has recently moved away from using the C++ target to using the HashLink C
(HL/C) target, which also leverages Kore very similarly to the C++ target.

**Krom**
Krom is a target developed specifically for Kha that is designed to allow rapid
development and debugging of Kha games. Krom is essentially the Kore library with
complete bindings to Javascript using either Microsoft's Chakra ( default ) or
Chrome's V8 Javascript engine. Because haXe can compile to Javascript very quickly,
Krom allows you to build and run your game in seconds as opposed to waiting for a
lengthy C++ build. Krom also features a built-in debugger that can be utilized in
the Kode Studio ( and potentially the Kha VSCode plugin ) IDE.

**Web**
Kha can publish games for web in seconds. The performance in browsers is supposed
to be about 20% slower than Krom, and there are some graphics features such as
Tessellation that that are not supported in Web ( WebGL ).

**HashLink ( HL )**
HashLink is a virtual machine ( a runtime environment ) for haXe that can either
run HashLink bytecode generated by haXe or it can be compiled to C code which is
then compiled using a C compiler, for optimum efficiency. In Armory, HashLink is
used to generate C code for compiling native binaries for each platform.

The HashLink target is very similar to the C++ target of Kha and uses Kore for
all of the core functionality just like the C++ target. The difference between
the C++ and HashLink targets is that they have a different garbage collector and
method of generating the code.


01. 3D Engine with Blender Integration https://github.com/armory3d/armory
02. Download ArmorySDK https://armory.itch.io/armory3d
03. Armory Architecture https://github.com/armory3d/armory/wiki/architecture
04. supported nodes https://github.com/armory3d/armory/wiki/supported_nodes
05. https://github.com/Kode/Kha
06. https://github.com/Kode/Kha/wiki/Examples
07. https://github.com/Kode/Krom
08. https://github.com/armory3d/armory/wiki/setup
09. https://github.com/armory3d/armory_examples
10. https://github.com/armory3d/armory2d
11. https://github.com/armory3d/zui
12. https://github.com/ocornut/imgui
13. https://github.com/armory3d/armory_tutorials/releases
14. https://armory3d.github.io/armory_examples_browser

Kha **Feature Matrix**
https://github.com/Kode/Kha/wiki/Feature-Matrix

    \*   - native target, e.g. Android native
    \**  - HTML5 Worker
    \*** - The Node.js target works in headless mode for server operation
         - all APIs are supported but they do nothing

|       Targets       | audio1 | audio2 | graphics1 | graphics2 | graphics4 |
|---------------------|--------|--------|-----------|-----------|-----------|
| Android             |    ✔  |    ✖  |     ✔    |    ✔    |    ✔     |
| Android*            |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| HTML5               |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| HTML5*              |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| HTML5**             |    ✔  |    ✖  |     ✔    |    ✔    |    ✔     |
| iOS/iPadOS/tvOS     |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| Java                |    ✔  |    ✖  |     ✔    |    ✔    |    ✖     |
| Linux               |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| Node.js***          |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| macOS               |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| PlayStation 4       |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| PlayStation 5       |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| Xbox One            |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| Xbox Series X and S |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| Switch              |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| Raspberry Pi        |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| Windows             |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| Windows Universal   |    ✔  |    ✔  |     ✔    |    ✔    |    ✔     |
| WPF                 |    ✖  |    ✖  |     ✔    |    ✔    |    ✖     |

Kha 构架图
https://github.com/Kode/Kha/wiki/Features

    +============================+     +================================+
    |       Kha(all haXe)        |  +  |            Karafix             |
    +============================+     +================================+
    ------------------------------     ----------------------------------
    +===============+  +=========+     +========+  +========+  +========+
    | Kore(all C++) |  |  HTML5  |     |  HLSL  |  |  GLSL  |  |  Metal |
    +===============+  +=========+     +========+  +========+  +========+
    ----------------------------------------------------------------------
                        +==========+  +==========+
                        | Windows  |  |   OSX    |
                        +==========+  +==========+

Audio2 is an API where you just send a stream of audio-samples.

Graphics5 is a lower level GPU API where you have to synchronize resources
of GPU resources manually and which allows multithreaded usage. But it's only
a Kinc thing, not a Kha thing - I deactivated it in Kha because I consider it
to be too advanced for Haxe programmers. The code is still in there, that's
why you can still see a graphics5_ package. If Haxe will ever receive better
multithreading support I might revive it but I don't think that will happen.


## 🐥 Armory HelloWorld

下载 Armory SDK 并解包到任意位置，然后在 Blender 安装插件，定位到 armory.py 脚本进行安装。
插件安装好后，armsdk 目录可能会被改名，注意在插件的 SDK 路径配置中要一致。插件会在 Blender
界面顶部提供运行、代码编辑按钮。

然后安装代码编写工具，在 Blender 插件配置界面中设置 Armory 插件，Advanced - Code Editor
配置项目中指定所安装的代码编辑器，可以是 VSCode 或者同源的 Kcode Studio，只不过后者专用工具。
还可以是 Sublime Text，或设置成系统默认编辑器。

Sublime Text 安装 Terminus 扩展后，也可以实现和 VSCode 相当的集成控制台的功能，可以按 Tab
或者 Console 方式打开集成命令行。为了避免重新编译 haxe-language-server，可以使用 VSCode
扩展中已编译的 Haxe Language Server 脚本程序：
Bring a real terminal to Sublime Text https://packagecontrol.io/packages/Terminus

    node $HOME\.vscode\extensions\nadako.vshaxe-2.28.0\server\bin\server.js -D display-stdin --wait stdio

[Visual Studio Code](https://code.visualstudio.com/) and the
[Kha Extension pack](https://marketplace.visualstudio.com/items?itemName=kodetech.kha-extension-pack) or
[Kode Studio](https://github.com/Kode/KodeStudio/releases)

[Sublime Text](https://www.sublimetext.com/) + (optional)
[Haxe Bundle](https://packagecontrol.io/packages/Haxe) from Sublime's
[PackageControl](https://packagecontrol.io/installation)

1. LSP for Sublime Text https://lsp.sublimetext.io/language_servers/
2. LSP - Packages - Package Control https://packagecontrol.io/packages/LSP
3. Armory3D Wiki - [Setup](https://github.com/armory3d/armory/wiki/setup)

推荐 VSCode，因为 Kha Extension Pack 集成了 LSP，包含 Haxe 开发调试工具。VSCode 配置中，
指定 Kha 和 Krom 路径，指向 ArmorySDK 的对应目录，如 C:\HaxeToolkit\armsdk\Krom 和 Kha，
如果 VScode 没有检测到 Kha 和 Krom，则可能会自动下载：

1. https://github.com/vshaxe/haxe-language-server
2. https://github.com/vshaxe/vshaxe/wiki/Configuration
3. https://code.visualstudio.com/api/language-extensions/language-server-extension-guide
1. Haxe - Haxe language support by Haxe Foundation
2. Debugger for Krom - Debug your JavaScript code in Krom by Kode
3. Kha - Kha support by Kode

安装好 VSCode 扩展，再配置项目，包括：构建任务配置 task.json 和 调试器加载配置 Launch.json。

先添加构建任务配置，打开菜单 Terminal - Add Configuration ...，在备选列表中挑选适用的项目，
比如 Windows (OpenGL) 构建目标。注意，安装好 Kha 扩展后，才会出现预置的构建配置。

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "Kha",
            "target": "Windows",
            "problemMatcher": [ "$haxe-absolute", "$haxe" ],
            "group": "build",
            "label": "Kha: Build for Windows"
        },
        {
            "type": "Kha",
            "target": "Windows (OpenGL)",
            "problemMatcher": [ "$haxe-absolute", "$haxe" ],
            "group": "build",
            "label": "Kha: Build for Windows (OpenGL)"
        },
        {
            "type": "Kha",
            "target": "Krom",
            "problemMatcher": [ "$haxe-absolute", "$haxe" ],
            "group": "build",
            "label": "Kha: Build for Krom"
        },
        {
            "type": "Kha",
            "target": "Debug HTML5",
            "problemMatcher": [
                "$haxe-absolute",
                "$haxe"
            ],
            "group": "build",
            "label": "Kha: Build for Debug HTML5"
        }
    ]
}
```

然后，配置调试器加载方式，一般设置 type 为 korm，也可以使用 electron 或 chrome 等类型。
配置好调试器，打开 VScode 调试面板，在 Run and Debug 列表中选择调试器的配置，然后运行它。
可以在 preLaunchTask 指定调试之前执行构建任务，属性值要和任务的 label 一致：

```json
{
  "configurations": [

    {
      "name": "Kha: HTML5",
      "request": "launch",
      "type": "pwa-chrome",
      "cwd": "${workspaceFolder}/build/debug-html5",
      "runtimeExecutable": "${command:kha.findKhaElectron}",
      "runtimeArgs": [ "--no-sandbox", "--force-device-scale-factor=1", "." ],
      "outFiles": [ "${workspaceFolder}/build/debug-html5/*.js" ],
      "preLaunchTask": "Kha: Build for Debug HTML5",
      "internalConsoleOptions": "openOnSessionStart",
      "skipFiles": [ "<node_internals>/**" ]
    },
    {
      "type": "krom",
      "request": "launch",
      "name": "Kha: Krom",
      "preLaunchTask": "Kha: Build for Krom",
      "internalConsoleOptions": "openOnSessionStart"
    }
  ],
  "compounds": [],
  "version": "0.2.0"
}
```

Blender 中，Armory3D 预置提供了两种运行方式：Krom 和 Browser。

引擎默认使用 Krom 作为游戏运行时，与预编译环境相比，Krom 的设计有快速编译时间和性能优势。
由 Chakra 或 V8 引擎提供 WebAssembly 字节码运行支持，Wasm 模块可以同时支持 HTML5 平台，
以及主机平台 (Windows, Linux, macOS)。当按下播放按钮时，引擎会立即与游戏一起编译成 JS。
不需编译 Armory，可以随时使用内置的更新程序用上最新的 Armory 版本。你可以修改引擎源，
每次修改都会在 Play 的时候立即生效。

Krom 公开了本机硬件功能，并在任何图形 API 上运行。Krom 是一个可执行文件，Windows/Chakra
平台上的占用空间约为 7.9MB/2.8MB（zip）。Krom 可以独立运行，也可以嵌入到现有程序中。
除了 JS 之外，WebAssembly 还可以用来包含 C/C++ 代码。

在构建时确保类型安全，并为运行时错误抛出堆栈跟踪。除此之外，调试器是可用的。一旦准备好发布，Krom
就可以在几秒钟内部署到 Windows、Linux 和 macOS。只需修补 krom.js 文件即更新部署的游戏。
Krom 还提供运行时脚本功能。

如果选择 Browser 作为运行时，则会执行 Nodejs 运行 Web 服务器提供服务。但是 Web 服务器
启动后，没有提供关闭功能，需要关闭 Blender 文件才能关闭。

可以在渲染器属性面板中 Armory Player 或者 Armory Project 进行相应操作。


在项目目录下包含自动生成的编译配置脚本 khafile.js，和源代码 Sources\Main.hx。默认工程包
名为 arm，用户可以编写自己的脚本代码。通过渲染器属性面板可以配置 Armory 的导出设置，场景属性
或者对象属性面板的 Armory Traits 可以混入用户的脚本或代码文件。所谓 Traits 就是代码零件，
即代码复用的一种方式，也称为混入编程模式，被复用的代码组件就是 Trait，有 5 种类型：

1. haXe 脚本代码文件；
2. Nodes 使用 Logic Editor 可视化编程工具定义的节点树；
3. UI - User Interface 使用 Armory2D 用户界面编辑进行可视化编辑；
4. Bundled 预制脚本；
5. Wasm 使用 WebAssembly 字节码程序；

WebAssembly 字节码文件称为一个 Module，可以使用 Rust/C/C++/Emscripten 编译得到 WASM 文件。
https://github.com/armory3d/armory/wiki/wasm


Trait Events
https://github.com/armory3d/armory/wiki/traits

以下方法可以在 Trait 构造方法中调用以注册事件处理函数，这些也是 Trait 对象的生命周期的事件：

- `Trait.notifyOnAdd()` - trait is added to an object
- `Trait.notifyOnInit()` - object which this trait belongs to is added to scene
- `Trait.notifyOnRemove()` - object which this trait belongs to is removed from scene
- `Trait.notifyOnUpdate()` - update game logic here
- `Trait.notifyOnRender()` - update rendering here
- `Trait.notifyOnRender2D()` - update 2D rendering here

由于场景是异步构建的，因此可以在尚未出现所有场景对象时调用 `onInit` 事件。如果 Trait 依赖于
其他场景对象，请使用 `Scene.active.notifyOnInit()` 事件，该事件在场景完全构建后立即调用。

激活 Debug Console 可以在程序运行时提供一个控制台面板，显示 *haXe.Log.trace()* 打印信息。
在渲染器属性面板 Armory Project - Flags - Debug Console 可以设置控制台面板，如缩放、位置。

Armory 以单个 blend 文件为单位，以 Blender 场景为游戏的场景。由 Blender 生成的纹理需要先
保存为文件才可以被引用，例如 Image Texture 中创建纹理时，Generated Type 指定生成的纹理：
UV Grid 或 Color Grid，就需要先保存为文件，后续可以再打包到 blend 文件内。在文件保存之前，
不能直接 pack 到 blend 文件内。

Iron 框架的 Trait 脚本基本结构参考：

```js,ignore
    package arm;

    class CallJS extends iron.Trait {
        public function new() {
            super();

            notifyOnInit(function() {});
            notifyOnUpdate(function() {});
            notifyOnRemove(function() {});
        }
    }
```

在场景中添加一个 Plane，并且在其上面放置一个 Cube，然后在物理属性面板中启用 Rigid Body。
并且分别设置为 Passive 模式和 Active 模式，Plane 充当地板，Cube 则受重力影响，会掉落到地板。
然后，在场景属性面板中，将以下代码添加到 Armory Scene Traits 列表中，代码通过 PhysicsWorld
检测鼠标点击位到的物理体：

```js,ignore
    package arm;

    import armory.trait.physics.PhysicsWorld;
    import iron.system.Input;
    import haXe.Log;

    // This example shows how to call JavaScript after clicking on a Cube object
    // Requires physics enabled and browser target
    // https://github.com/armory3d/armory_examples/blob/master/call_js/Sources/arm/CallJS.hx

    class CallJS extends iron.Trait {

        public function new() {
            super();
            var mouse = Input.getMouse();
            notifyOnUpdate(function() {

                // Check mouse button
                if (!mouse.started()) return;

                // Pick object at mouse coords
                var rb = PhysicsWorld.active.pickClosest(mouse.x, mouse.y);
                Log.trace(["===click=== ", rb == null? "Null": rb.object.name]);

                // Check if picked object is our Cube
                if (rb != null && rb.object.name == 'Cube') {
                    // Raw JS calls
                    js.Syntax.code('console.log("Cube clicked");');
                    js.Syntax.code('document.title = "Cube clicked";');
                    js.Syntax.code('window.alert("Cube clicked");');
                } else {
                    js.Syntax.code('console.log("click");');
                }
            });
        }
    }
```


## 🐥 Armory Troubleshot

Armory 整合了多个框架，并且它有 **Hardware Abstraction Layer (HAL)** ，这也是跨平台
基础框架，也是最可能出问题的环节。

☢ SPIR-V is not generated for failed compile or link

着色器编译出错，使用的是延时光照渲染算法，deferred light。SPIR-V 是 OpenGL 官方开发的一个
中间表示语言，可以用来转换各种着色器程序。发现未定义符号 LWVPSpot0，看名字应该和聚光光相关。

    ERROR: LogicCanvasUI\build_logic\compiled\Shaders\deferred_light.frag.glsl:458: 'LWVPSpot0' : undeclared identifier
    ERROR: LogicCanvasUI\build_logic\compiled\Shaders\deferred_light.frag.glsl:458: '' : missing #endif
    ERROR: LogicCanvasUI\build_logic\compiled\Shaders\deferred_light.frag.glsl:458: '' : compilation terminated
    ERROR: 3 compilation errors.  No code generated.

    SPIR-V is not generated for failed compile or link

    Compiling shader 4 of 25 (deferred_light.frag.glsl) failed:
    Shader compiler error.

LWVP - Light World View Projection Matrix 是光照视图投射变换矩阵。Armory 有几十个着色器，
延时光照着色器是其中一个。着色器还与材质代码生成工具有关，material make 这些脚本用来生成顶点
着色器和片段着色器程序，并且会根据使用到的功能设置相应的代码片段，`LWVPSpot0` 这个符号没有定义，
只在光照着色器中有类似的 `LWVPSpot` 定义，它是矩阵数组：

    armsdk\armory\Shaders\deferred_light\deferred_light.frag.glsl
    armsdk\armory\Shaders\std\light.glsl
    armsdk\armory\Shaders\std\light_mobile.glsl
    armsdk\armory\blender\arm\material\make.py

即就是目前不支持此功能，官方文档 supported nodes 也标明 Principled BSDF 属于部分功能支持。
并且这个功能会在使用了 Spot Light 和次表面散射材质 SSS 时被激活：

```glsl
    #ifdef _Spot
    #ifdef _SSS
    if (matid == 2) fragColor.rgb += fragColor.rgb * SSSSTransmittance(LWVPSpot0, p, n, normalize(pointPos - p), lightPlane.y, shadowMapSpot[0]);
    #endif
    #endif
```

编译过程中，源代码中的 deferred_light.frag.glsl 会拷贝到输出目录，并且会被缓存起来，除非
`Armory Project -> Clean` 执行了清理，否则不会再重新编译。

着色器代码会与 Blender Armory 的世界环境配置项相关：

```py
>>> bpy.data.worlds['Arm'].world_defs
'_Irr_Rad_Deferred_ShadowMap_CSM_Spot_Sun_SinglePoint_Brdf_SMAA_SSAO_SSS_EmissionShadeless'
```

```glsl
#ifdef _ShadowMap
#ifdef _SinglePoint
    #ifdef _Spot
    //!uniform sampler2DShadow shadowMapSpot[1];
    //!uniform mat4 LWVPSpot[1];
    #else
    //!uniform samplerCubeShadow shadowMapPoint[1];
    //!uniform vec2 lightProj;
    #endif
#endif
```


☢ Cubemap filtering tool (cmft) CLI 处理世界光照贴图步骤卡死

编译项目时，Cubemap filtering tool (cmft) CLI 处理世界光照贴图步骤卡死。使用 Very Sleep
工具检查到 cmft.exe 在等待 WaitForSingleObjectEx API 的时间最多。打开 Armory Project -
Debug - Verbose Output 选项，相当于禁止使用 --silent 参数，以查看详细信息：

    $asset = "C:\HaxeToolkit\training\training\build_training\compiled\Assets"
    C:\HaxeToolkit\armsdk\lib\armory_tools\cmft\cmft.exe
    --input $asset\envmaps\env_World_radiance.jpg
    --filter radiance
    --dstFaceSize 128.0
    --srcFaceSize 128.0
    --excludeBase false
    --glossScale 8
    --glossBias 3
    --lightingModel blinnbrdf
    --edgeFixup none
    --numCpuProcessingThreads 4
    --useOpenCL true
    --clVendor anyGpuVendor
    --deviceType gpu
    --deviceIndex 0
    --generateMipChain true
    --inputGammaNumerator 1.0
    --inputGammaDenominator 1.0
    --outputGammaNumerator 1.0
    --outputGammaDenominator 1.0
    --outputNum 1
    --output0 $asset\envmaps\env_World_radiance
    --output0params hdr,rgbe,latlong
    --silent

输出信息如下，集成显卡任务爆满，独立显示似乎无响应，正常 Face 值在减少，检查发现是独立显卡掉线：

    CMFT info: Radiance -> Starting filter...
    CMFT info: Radiance -> Utilizing 4 CPU processing threads and Intel(R) UHD Graphics 620.
    CMFT info: Radiance -> ------------------------------------
    CMFT info: Radiance ->  Device / Face /     Time /    Total
    CMFT info: Radiance -> ------------------------------------
    CMFT info: Radiance -> [CPU3]  |    1 |   0.001s |   0.003s
    CMFT info: Radiance ->  <GPU>  |  128 |   0.047s |   0.265s
    CMFT info: Radiance ->  <GPU>  |  128 |   0.048s |   0.247s
    // 这期间卡住
    CMFT info: Radiance ->  <GPU>  |   64 |   0.041s |   0.351s
    CMFT info: Radiance -> [CPU0]  |   32 |   0.123s |   0.421s
    CMFT info: Radiance -> [CPU3]  |   32 |   0.117s |   0.426s
    CMFT info: Radiance -> ------------------------------------
    CMFT info: Radiance -> Total faces processed on [CPU]: 38
    CMFT info: Radiance -> Total faces processed on <GPU>: 10
    CMFT info: Radiance -> Total time: 0.536 seconds.
    CMFT info: Saving compiled/Assets/envmaps/env_World_radiance.hdr [HDR 512x256 RGBE LatLong 1-faces 8-mips].
    CMFT info: Done.

☢ WARNING: Scene "Scene.001" is missing a world, some render targets will not be cleared

出现警告信息，场景没有世界环境材质，画面渲染时不清屏会有残影，World 属性面板可以添加世界环境材质。

相机角度不同出现的错误阴影问题，场景中没有遮挡物的情况下，相机在特定视角范围中会出现不正确的阴影。
场景中有两 Sun 光源的情况下，Armory 不能正确处理。


☢ WARNING: Asset name "Texture_18c.jpg" already exists, skipping

出现资源重复引用或引用未曾使用的纹理，编译脚本中会自动添加没有使用的纹理图像，可能是因为导入
纹理图像后，对纹理图像更名导致 Image Editor 显示的纹理图像与实现文件名不一致，可以重新设置后
清理未曾使用的数据块 `File -> Clean Up -> Unused Data-blocks`：

    project.addAssets("C:/training/Bundled/Texture_18c.jpg", { notinlist: true });

☢ WARNING: Player exited code 3221225477

游戏闪退，Windows 系统下，Krom 平台出现 STATUS_ACCESS_VIOLATION (0xC0000005)，HTML5
则提供更详细的信息，kha.js 未捕捉的断言异常。从错误信息判断，可能是 Canvas UI 未挂载到相机
或者场景上，导致绘图时 `CanvasScript` 找不到相机。而真实原因是 Speaker 加载了错误的 ogg 
音频文件，加载 m4a 音频时，还会弹窗提示 Unknown Error，返回错误码 1。

    WARNING: Player exited code 1

    kha.js:4082 Uncaught armory_system_ArmAssertionException

    Failed assertion:
    Message: Could not find a canvas trait on the active scene or camera
    Expression: (activeCanvas != null)
    posInfos: {fileName: 'Sources/armory/trait/internal/CanvasScript.hx', lineNumber: 193, className: 'armory.trait.internal.CanvasScript', methodName: 'getActiveCanvas'}

        at armory_system_ArmAssertionException.haxe_exceptions_PosException [as __class__]
        at new armory_system_ArmAssertionException
        at armory_system_Assert.throwAssertionError
        at armory_trait_internal_CanvasScript.getActiveCanvas
        at armory_logicnode_CanvasSetTextNode.run
        at armory_logicnode_OnRender2DNode.runOutput
        at armory_logicnode_OnRender2DNode.onRender2D
        at iron_App.render2D
        at iron_App.render
        at kha_System.render



## 🐥 Armory Iron Traits

1. Armory Features https://armory3d.org/features
2. Bullet 3D Physics for Haxe https://github.com/armory3d/haxebullet
3. OimoPhysics - A lightweight 3D physics engine https://github.com/saharan/OimoPhysics
5. BlackGoku36 Tutorials https://blackgoku36.github.io/BG36-tutorials/

Armory Engine 集成了 Kha 构建工具，而另一方面提供 Armory 插件扩充了 Blender 功能，根据
Blender 中的设置来生成相应的脚本、代码文件，再调用 Kha 构建工具编译程序。

Iron 构建则是基于更高级的抽象，为游戏开发提供了套基于场景节点层次结构的框架，提供多种 Traits
抽象类型，用于扩展 Blender 场景中各种对象的程序化操作。

Armory 编译运行出现黑窗口时，通常 Clean 掉编译缓存文件后，再重新编译即可以解决问题。

Armory 是一个完全免费免版税开放源代码游戏引擎。Blender BEG 游戏引擎则受到 GNU GPL 许可证约束。

Armory Engine 以单个 .blend 文件为基本的程序组织形式，每个 .blend 的场景就是游戏中的场景。
Kha 构建脚本 khafile.js 的内容根据 Blender 的各种设置来生成。

```py
    bpy.data.worlds["Arm"].arm_project_root = "//"
    bpy.data.worlds["Arm"].arm_project_root = "//MyRoot"
```

另外，**Project Root** 设置可以 .blend 文件位于项目子目录下的情况下使用，这个配置项专用于
指定 .blend 文件位置：`Render Properties > Armory Project > Modules > Root`，此路径
会决定 Haxe traits 类型定义文件的定位，以及自动生成文件的存放位置。

注意，如果设置 Root 属性，那么可能导致资源定位不正确。

比如，设置 MyRoot 作为根据目录，但是 .blend 文件还在项目的根目录，那么在使用纹理贴图时，
文件路径就相对于 Root 指定的根目录，但是 Blender 还是使用相对于文件所在的目录。Blender
使用 // 表示 .blend 文件所在目录。

这种设置就会在 Armory 引擎产生错误的处理逻辑：

- `//` 项目根目录下的纹理文件就会变成指向 //MyRoot 目录下的纹理；
- `//MyRoot` 目录下的纹理贴图的路径就会变成指定 //MyRoot/MyRoot 目录下的文件，

Armory 提供了 Multi-User Workflow 支持，但是还在完善中。多人开发工作流基于 Blender 的链接
功能，可以将大型的 .blend 分解成更小的多个 .blend 文件。通过使用**Library Overrides**功能，
可以使用数据覆盖实现修改原本不可以修改的链接数据块，需要启用 `Edit Linked Library` 插件。

0. [Multi-User](https://github.com/armory3d/armory/wiki/multiuser)
1. [linking functionality](https://docs.blender.org/manual/en/latest/files/linked_libraries/link_append.html#link)
2. [Blender Manual: Library Overrides](https://docs.blender.org/manual/en/latest/files/linked_libraries/library_overrides.html)
3. [`Edit Linked Library` add-on](https://docs.blender.org/manual/en/latest/addons/object/edit_linked_library.html)


虽然可以使用 Blender 的资源导入功能，将多个 .blend 内容链接到当前场景或 .blend 工程内：

1. `File - Import` to import file formats.
2. `File - Append` to import objects from other .blend files.
3. `File - Link` to link objects from other .blend files.

Blender 链接外部文件扩充场景内容后，Armory 不能很好处理，会导致程序黑屏运行。

    Python: Traceback (most recent call last):
      File "C:\HaxeToolkit\armsdk/armory\blender\arm\props_ui.py", line 1179, in invoke
        return self.execute(context)
      File "C:\HaxeToolkit\armsdk/armory\blender\arm\props_ui.py", line 1202, in execute
        make.play()
      File "C:\HaxeToolkit\armsdk/armory\blender\arm\make.py", line 555, in play
        build(target=runtime_to_target(), is_play=True)
      File "C:\HaxeToolkit\armsdk/armory\blender\arm\make.py", line 473, in build
        export_data(fp, sdk_path)
      File "C:\HaxeToolkit\armsdk/armory\blender\arm\make.py", line 167, in export_data
        bpy.context.scene.collection.children.link(export_coll)
    RuntimeError: Error: Could not (un)link the collection 'export_coll' because the collection 'Scene Collection' is linked

Armory 无法和诸如 UE4 或 Unity 等商业游戏引擎相比，原生优化效果非常差，同样的模型导入 UE4，
运行起来很流畅，到了 Armory 这里就可能无法运行。UE4 和 Unity 都支持实时编辑调试材质，Armory
还不行，没并完全支持 Blender 材质节点，做好一个材质，运行效果会有出入。效果不行就需要再调整，
调整好了再运行测试，这段编译的时间还很长，就这么浪费掉了。当然其它引擎做材质也要编译，但是基本
可以实时预览。

Armory 使用 Bullet 物理引擎的 Haxe 移植版 haxebullet，ArmorySDK 已经包含这个开源物理引擎。
Scene 属性面板中是否勾选激活 Rigid Body World 不影响 Armory 模拟破碎效果，只影响 Blender。
Armory 默认使用 Bullet 模拟所有对象的运动，特性如下，备选物理引擎是 Oimo physics engine：

01. Notable Features:
02. Rigid body simulation
03. Soft body simulation
04. Ragdoll simulation
05. Ray casting
06. Collision groups
07. Simulation of breaking / fractured meshes

### Trait Types & Events

在项目目录下包含自动生成的编译配置脚本 khafile.js，和源代码 Sources\Main.hx。默认工程包
名为 arm，用户可以编写自己的脚本代码。通过渲染器属性面板可以配置 Armory 的导出设置，场景属性
或者对象属性面板的 Armory Traits 可以混入用户的脚本或代码文件。所谓 Traits 就是代码零件，
即代码复用的一种方式，也称为混入编程模式，被复用的代码组件就是 Trait，有 5 种类型：
Traits https://github.com/armory3d/armory/wiki/traits

![Trait types in the UI](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/traits/trait_types.png)

1. **haXe** 脚本代码文件；
2. **Nodes** 使用 Logic Node Editor 可视化编程工具定义的节点树；
3. **UI** - User Interface (Canvas trait)，使用 Armory2D 用户界面编辑进行可视化编辑；
4. **Bundled** Armory Engine 预定义 Haxe 脚本，是 `Trait` 类型的扩展；
5. **Wasm** 使用 WebAssembly 字节码程序；

Trait Events
https://github.com/armory3d/armory/wiki/traits

以下方法可以在 Trait 构造方法中调用以注册事件处理函数，这些也是 Trait 对象的生命周期的事件：

- `Trait.notifyOnAdd()` - trait is added to an object
- `Trait.notifyOnInit()` - object which this trait belongs to is added to scene
- `Trait.notifyOnRemove()` - object which this trait belongs to is removed from scene
- `Trait.notifyOnUpdate()` - update game logic here
- `Trait.notifyOnRender()` - update rendering here
- `Trait.notifyOnRender2D()` - update 2D rendering here

由于场景是异步构建的，因此可以在尚未出现所有场景对象时调用 `onInit` 事件。如果 Trait 依赖于
其他场景对象，请使用 `Scene.active.notifyOnInit()` 事件，该事件在场景完全构建后立即调用。


### Bundled Scripts

所谓“捆绑脚本”，Bundled Scripts，就是 Armory 源代码中现有的由 Haxe 编写的 Trait 扩展类型。
与常规 Haxe 脚本类似，Bundled 脚本可以附加到对象属性面板或场景属性中的 Armory Trait 列表中。
例如，使用 PhysicsDrag 特性，当这个特性附加到启用了物理的对象上时，可以使用鼠标拖动这个对象。

又如，使用 WalkNavigation 可以实现相机的漫步运动控制，打开相机对象属性面板，Armory Traits
列表中添加一个 Bunddled，然后在 class 列表中指定需要使用的 Armory 内置的 `Trait` 扩展，
选择 `WalkNavigation` 类型以控制相机运动，如果当前对象不是相机，那么运行时控制台就会输出
初始化函数执行类型转换失败的信息：

```haxe
    function init() {
        keyboard = Input.getKeyboard();
        gamepad = Input.getGamepad();
        mouse = Input.getMouse();

        try {
            camera = cast(object, CameraObject);
        }
        catch (msg: String) {
            trace("Error occurred: " + msg + "\nWalkNavigation trait should be used with a camera object.");
        }

        if (camera != null){
            notifyOnUpdate(update);
        }
    }
```

使用标注 `@prop` 可以将属性与 UI 面板关连，例如内置的 Bundled Scripts：
armsdk\armory\Sources\armory\trait\SimpleMoveObject.hx

```haxe
    /**
        Simple script to move an object around using the keyboard with WSAD+QE.
        Can be used for testing and debuging.
    **/
    class SimpleMoveObject extends iron.Trait {

        @prop
        var speed: Float = 0.1;

        var keyboard: Keyboard;
        var rb: RigidBody;
    }
```

添加相应的 Bundled 扩展后，点击 Edit Source 编辑脚本，Armory Engine 中相应的源代码文件
就会复制到工程的 Sources 目录下，这个编辑操作会将内置的 Bundled 转换为 Haxe Script。

执行构建，khafile.js 构建脚本中就会自动添加相应的参数：

```js
// Before Edit Bundled Script
project.addParameter('armory.trait.WalkNavigation');
project.addParameter("--macro keep('armory.trait.WalkNavigation')");
// After Edit Bundled Script
project.addParameter('arm.WalkNavigation');
project.addParameter("--macro keep('arm.WalkNavigation')");
```

构建脚本中经常使用 `addParameter()` 告诉 Haxe 编译时调用 macro 函数。Haxe 初始化宏是一种
在命令行中调用宏的方式，[Initialization Macros] 命令行格式 `--macro callExpr(args)`。
它用来向编译器注册一个函数，使其在宏上下文创建后得到调用，比如，keep() 就是一个宏初始化调用。
宏初始化必需在 `--main` 参数之前指定。

如果 `--macro` 调用的是一个 plain identifier，就会在 Haxe Standard Library 中的
`haxe.macro.Compiler` 内定位这个标识，这里定义多个非常有用的初始化宏：

由于所有宏共享相同的 [Macro Context]，初始化宏可以设置其他宏用作配置的静态字段的值。

1. `Compiler.include` Includes all modules in package `pack` in the compilation.
2. `Compiler.keep` Marks types or packages to be kept by DCE (Dead Code Elimination).

Armory 的游戏角色导航功能使用 [Recast navigation] 框架，Blender 渲染属性面板中可以启用它：
`Armory Project - Modules - Navigation`。导航网格与内置的 Bundled Trait 配合使用：

    armory.trait.NavMesh
    armory.trait.NavAgent
    armory.trait.NavCrowd

在对象的 Armory Traits 列表中添加 Bundled - Navmesh。

To generate a navmesh representation, you can click Generate Navmesh.

You can modify the settings to affect the navmesh generation for the visualization and the in-game version.

Be aware that if your object is too small, the recast library might not be able to process it for the simulation.

官方提供 Armory Tutorials: Navmesh 和 Navmesh Follow 两示例。

  * [Navmesh](https://github.com/armory3d/armory/wiki/navmesh)
  * [Terrain](https://github.com/armory3d/armory/wiki/terrain)
  * [Recast navigation](https://github.com/armory3d/haxerecast)
  * Navmesh Examples https://github.com/armory3d/armory_examples/tree/master/navmesh

以下一是 Armsdk 中定义的 Bundled Scripts 列表：

    Armory Sources
    |-- armory.trait
    |   |-- armory\trait\ArcBall.hx
    |   |-- armory\trait\Character.hx
    |   |-- armory\trait\CustomParticle.hx
    |   |-- armory\trait\FirstPersonController.hx
    |   |-- armory\trait\FollowCamera.hx
    |   |-- armory\trait\NavAgent.hx
    |   |-- armory\trait\NavCrowd.hx
    |   |-- armory\trait\NavMesh.hx
    |   |-- armory\trait\PhysicsBreak.hx
    |   |-- armory\trait\PhysicsDrag.hx
    |   |-- armory\trait\SimpleMoveObject.hx
    |   |-- armory\trait\SimpleRotateObject.hx
    |   |-- armory\trait\SimpleScaleObject.hx
    |   |-- armory\trait\ThirdPersonController.hx
    |   |-- armory\trait\VehicleBody.hx
    |   |-- armory\trait\VirtualGamepad.hx
    |   |-- armory\trait\WalkNavigation.hx
    |   |-- armory.trait.internal
    |   |   |-- armory\trait\internal\Bridge.hx
    |   |   |-- armory\trait\internal\CameraController.hx
    |   |   |-- armory\trait\internal\CanvasScript.hx
    |   |   |-- armory\trait\internal\DebugConsole.hx
    |   |   |-- armory\trait\internal\DebugDraw.hx
    |   |   |-- armory\trait\internal\LivePatch.hx
    |   |   |-- armory\trait\internal\LoadingScreen.hx
    |   |   |-- armory\trait\internal\MovieTexture.hx
    |   |   |-- armory\trait\internal\TerrainPhysics.hx
    |   |   |-- armory\trait\internal\UniformsManager.hx
    |   |   |-- armory\trait\internal\WasmScript.hx
    |   |   `-- armory\trait\internal\wasm_api.h
    |   |-- armory.trait.navigation
    |   |   `-- armory\trait\navigation\Navigation.hx
    |   `-- armory.trait.physics
    |       |-- armory\trait\physics\KinematicCharacterController.hx
    |       |-- armory\trait\physics\PhysicsConstraint.hx
    |       |-- armory\trait\physics\PhysicsHook.hx
    |       |-- armory\trait\physics\PhysicsWorld.hx
    |       |-- armory\trait\physics\RigidBody.hx
    |       |-- armory\trait\physics\SoftBody.hx
    |       `-- armory.trait.physics.bullet
    |           |-- armory\trait\physics\bullet\KinematicCharacterController.hx
    |           |-- armory\trait\physics\bullet\PhysicsConstraint.hx
    |           |-- armory\trait\physics\bullet\PhysicsConstraintExportHelper.hx
    |           |-- armory\trait\physics\bullet\PhysicsHook.hx
    |           |-- armory\trait\physics\bullet\PhysicsWorld.hx
    |           |-- armory\trait\physics\bullet\RigidBody.hx
    |           `-- armory\trait\physics\bullet\SoftBody.hx
    `-- armory.ui
        |-- armory\ui\Canvas.hx
        |-- armory\ui\Ext.hx
        |-- armory\ui\Popup.hx
        `-- armory\ui\Themes.hx



### WebAssembly (Wasm)

WebAssembly 字节码文件称为一个 Module，可以使用 Rust/C/C++/Emscripten 编译得到 WASM 文件。
Armory 使用 Wasm 程序以获取高性的代码执行，WebAssembly modules 只在 HTML5 和使用 Krom
的桌面平台有支持，包括 Windows, Linux, macOS。
[WebAssembly](https://github.com/armory3d/armory/wiki/wasm)

配置 Render 属性面板：Armory Project - Modules - Append Khafile 指定要附加到
khafile.js 构建脚本的内容，指定 Blender 中编写的脚本名称即可。比如 khaconfig 脚本，
内容如下，用来编译 Wasm 字节码：

```js
// Build Bundled/main.wasm in Node JavaScript
// Requires to have Emscripten emcc in you path
require('child_process').execSync('emcc -o Bundled/main.wasm -g -O3 -s WASM=1 -s SIDE_MODULE=1 -s STANDALONE_WASM main.c');
```

官方 wasm_trait_c 示例提供的一个 Wasm 程序，它直接与 Armory API 交互：

```c,ignore
    #define WASM_EXPORT __attribute__((visibility("default")))

    void notify_on_update(void* f);
    int get_object(const char* name);
    void set_transform(int object, float x, float y, float z, float rx, float ry, float rz, float sx, float sy, float sz);

    WASM_EXPORT void update() {
      static float rot = 0.0f;
      rot += 0.01f;
      set_transform(get_object("Cube"), 0, 0, 0, 0, 0, rot, 1, 1, 1);
    }

    // Include main function, Armory calls it when trait is instantiated
    WASM_EXPORT int main() {
      notify_on_update(update);
      return 0;
    }
```


Armory examples wasm_call 示范中，就没有在 Armory Scene Traits 或者 Armory Traits
面板中添加 Wasm 模块，而是在 Haxe 代码中引用 Bundled 目录下的 main.wasm 字节码文件。
`Bundled` 是一个专用目录，Armory 用来存放数据文件，其路径硬编码在源代码中。数据文件，比如 UI
配置文件，canvas.json，在官方 ui_canvas 示例中就可以看到。当然也可以存放 Wasm 文件，然后
通过 `Data.getBlob(name)` 方法获取数据。


添加 `Wasm` 模块到 Armory Traits 列表时，如果直接点击 `New Module` 按钮，就会跳转到 Web
在线编译 Wasm 的服务，webassembly.studio。但是界内环境可能用不了，可以按前面介绍的方法调用
本地安装好的编译器生成 Wasm。然后将 Wasm 文件放到 `Bundled` 目录下，再点击 `Refresh` 刷新
Armory Traits 中的类型列表，就可以看到相应的模块名出现。

1. [WebAssembly Studio](https://github.com/wasdk/WebAssemblyStudio)
2. [WebAssembly Studio](https://esmbly.github.io/WebAssemblyStudio/)

Bundled 这个目录下的文件不需手动引用，Armory 会自动向 khafile.js 中添加引用：

    project.addAssets("Bundled/main.wasm", { notinlist: true });

官方示范中的 .blend 体积非常小，场景同样只包含一个 Cube，示范案例中不到 100kb，而新创建的
文件可能接收 1MB。因为官方的文件清理掉了无用数据，Outliner - Orphans Data，但是 Worlds Arm
不能删除，Armory 需要使用这个对象包含的数据。另外，使用喜好配置的文件压缩保存也可以适当减小文件，
Preferences - File - Save & Load。如果文件已经采用非压缩式保存，那么可以使用 Save As，
指定另存选项中的 Compress 即可以重新启用压缩式保存。

添加 Armory Traits 脚本时，如果工程 Sources 目录下已有脚本文件，可以在 Class 列表中指定
要使用的 Traits 类型定义，如果列表没有类型数据记录，可以点击 Refresh 按钮刷新以读取类型信息。

```haxe
    // armory_examples-22.06\wasm_call\Sources\arm\MyTrait.hx
    package arm;

    import iron.data.Data;
    import iron.data.Wasm;

    class MyTrait extends iron.Trait {

        public function new() {
            super();
            notifyOnInit(init);
        }

        function init() {
            // Load wasm blob
            Data.getBlob("main.wasm", blob -> {
                // Create wasm module
                var wasm = Wasm.instance(blob);
                var rot = 0.0;
                notifyOnUpdate(function() {
                    // Call function from wasm module
                    rot += wasm.exports.test();
                    object.transform.setRotation(0, 0, rot);
                });
            });
        }
    }
```


### Armory2D Canvas UI
* Essentials

  * [UI Editor](https://github.com/armory3d/armory/wiki/ui_editor)
  * https://github.com/BlackGoku36/armory-tutorial-download/tree/master/Canvas


Armory2D 是一个可视化 UI 编辑编辑器，使用 **Zui** UI 框架，此构架受 imgui 启发，
Immediate Mode 即时刷新模式 UI 构架，使用 Haxe 和 Kha 实现。

Zui 源代码文件有 5 个：

    |-- zui/Sources
    |   `-- zui/Sources/zui
    |       |-- zui/Sources/zui/Ext.hx
    |       |-- zui/Sources/zui/Id.hx
    |       |-- zui/Sources/zui/Nodes.hx
    |       |-- zui/Sources/zui/Themes.hx
    |       `-- zui/Sources/zui/Zui.hx

1. Zui.hx 是整个 UI 构架的程序逻辑，每一个用于绘图函数就是一个控件。
2. Nodes.hx 定义了节点类型结构，以及具体的绘图逻辑。
3. Id.hx 提供了 Zui 控件状态数据的获取，CanvasScript.getHandle() 方法返回的控件数据。
4. Ext.hx 扩展了 `Zui` 类型，增加了 textArea、fileBrowser、inlineRadio、colorWheel 等功能。
5. Themes.hx 提供主题功能。

Armory 对 Zui 进行了封装，添加了一些类型定义，画布包装成 `Canvas` 类型，还有弹窗 `Popup`：

    Armory Sources
    `-- armory.ui
        |-- armory\ui\Canvas.hx
        |   `-- Canvas TCanvas TElement TAsset
        |       TLocale TTranslatedText ElementType Anchor
        |-- armory\ui\Ext.hx
        |-- armory\ui\Popup.hx
        `-- armory\ui\Themes.hx

并且在 armory.ui.Canvas 内置默认的字体设置：

    public static inline var defaultFontName = "font_default.ttf";

BG-36's Tutorials - Armory Canvas UI 教程中使用了旧版的类型系统，应该使用 Armory 类空间：

    import zui.Canvas.TElement;
    import armory.ui.Canvas;


使用 Armory2D 编辑器进行可视化界面设计，Bundled 目录下 JSON 文件中保存。

Zui 是一个 Immediate Mode UI Library，其本身缺少布局容器的设计，但是控件可以设置 Anchor
来影响其放置的位置，Anchor 属性值与对位方式如下，锚点的参数原点由控件的 x y 坐标指定：

    | (0) Top-Left    |  (1) Top      |  (2) Top-Right    |
    ------------------+---------------+--------------------
    | (3) Left        |  (4) Center   |  (5) Right        |
    ------------------+---------------+--------------------
    | (6) Bottom-Left |  (7) Bottom   |  (8) Bottom-Right |

文字内容对齐方式由 Alignment 属性指定，0 - Left，1 - Center，2 - Right。

Blender Render 属性面板中设置 Armory Project - Window - Resizable 可以启用窗口的大小
调整功能，以观察不同的锚点位置下，控件的定位效果。例如，控件的坐标设置为 0 点，锚点设置为 Center，
那么控件就会随着窗口的大小调整，而更新为当前的居中位置。

JSON 配置文件中 assets 字段记录导入的图像、字体资源，Image 控件使用 asset 属性显示图像资源。
Button 等等控件可以设置字体资源，以改变文字外观。注意，资源文件路径变动可能导致 Armory2D 界面
纯黑显示不了任何内容。

颜色属性有四种基本形式：

1. color 背景颜色
1. color_text 文字颜色
2. color_hover 悬停状态颜色
3. color_press 按下状态颜色

因为采用负值色彩模型，-1 表示白色，-16645630 表示黑色，-16713472 表示绿色，默认值为 null。

    >>> hex(1 - 16713472)
    '-0xff06ff'
    >>> hex(1 - 16645630)
    '-0xfdfdfd'

Armory3D SDK 本身已经包含 Armory2D 工具，要从 Blender 中启动 Armory2D editor，
只需要添加一个 UI Trait，并编辑它。例如，Scene 属性面板中向 Armory Scene Traits
列表添加一个 UI Trait。然后点击编辑按钮打开 Armory2D 编辑器。

或者直接执行 Krom 加载 Armory2D：

    Krom.exe C:\HaxeToolkit\armsdk\lib\armory_tools\armory2d\d3d11

添加 UI 配置时，点击 `New Canvas`，比如命名为 MyCanvas，就会生成一个画布配置文件:
Bundled\canvas\MyCanvas.json，内容包括画布的名称、坐标、宽高、主题、元素、资源文件：

```json
    {
        "name": "untitled",
        "x": 0,
        "y": 0,
        "width": 1280,
        "height": 720,
        "elements": [{
            "id": 0,
            "type": 2,
            "name": "save_btn",
            "event": "save_btn",
            "x": 460,
            "y": 140,
            "width": 280,
            "height": 40,
            "rotation": 0,
            "text": "Save Game",
            "asset": "DroidSans.ttf",
            "color": -16645630,
            "anchor": 0,
            "parent": null,
            "children": [],
            "visible": true,
            "alignment": 1,
            "color_text": -1,
            "color_hover": -4672589,
            "color_press": null
        }],
        "assets": [{
            "name": "avatar.png",
            "file": "../avatar.png",
            "id": 0
        }, {
            "name": "DroidSans.ttf",
            "file": "../zui/examples/SharedAssets/DroidSans.ttf",
            "id": 1
        }],
        "theme": "Default Light"
    }
```

点击 `Edit Canvas` 打开 Armory2D 工具，界面如下：

1. 左侧，是可用的 UI 组件列表，如 Button、Images、Text、Slider 等等；
2. 中间，是画面设计区，可以将左侧的组件拖放到设计区，进行 UI 布局设计；
3. 右侧，UI 工程保存，组件属性、主题设置、资源文件导入，以及喜好配置，如 UI 界面缩放、参考格大小；

Project 面板中的按钮使用，及注意事项：

- **Current File** 指定当前操作的配置文件，如果在设置了此值，相对路径是 Krom 主程序所在目录。
- **Save** 按钮保存配置文件，如果指定的 Current File，就应该使用绝对路径。
- **Load** 按钮用来加载配置文件，如果 Current File 使用了相对路径，则可能导致程序异常。
- **New**  按钮在 Canvas 分组，用来创建新的 Canvas 配置，Width 和 Height 指定画布大小。

另外，资源文件路径错误也可能导致 Armory2D 界面纯黑，不显示控件。

保存 UI 设计后，就会生成主题配置文件和资源列表文件 MyCanvas.files。

    🐥 Armory Tutorials: ui_canvas
    |-- ui_canvas
    |   |-- Bundled
    |   |   `-- canvas
    |   |       |-- MyCanvas.files
    |   |       |-- MyCanvas.json
    |   |       `-- _themes.json

导入的资源文件，如图像可以作为 Image 控件的背景。

Canvas UI 控件的 Script - Event 属性指定一个事件名，点击时会触发此事件，比如 `save_btn`。
然后，在需要处理此事件的 Haxe 脚本中调用 `Event.add("save_btn", save);` 注册一个处理函数。

所有激活状态的 UI 界面都会在程序运行时显示，控件的事件处理使用的是观察者编程模式，即需要处理什么
事件，就使用 `Event.add()` 方法注册相应的事件处理函数。Observer Pattern 用来解耦 UI 与
程序逻辑的非常好用的工具，UI 控件可以任意指定事件名称，处理与否完全取决于程序逻辑。

Canvas UI 控件可以通过 `CanvasScript` 对象来获取引用，将对控制的属性进行修改，就像 Web
脚本编程中对 HTML 元素的操作一样。但是场景中可能存在激活多个 Canvas UI 的情况，通过 Scene
API 获取到的 CanvasScript 对象总是为 Armory Traits 列表中最上面（靠前）的那一个。

```java
    // iron\Scene.hx
    public function getTrait(c: Class<Trait>): Dynamic {
        return root.children.length > 0 ? root.children[0].getTrait(c) : null;
    }
```

以下是 CanvasTrait.hx 演示代码，假定场景中 Canvas UI 设计包含 Image 和 Button 控件各一个。
点击 Button 触发 on_click() 处理函数，并切换 Image 的显示状态：

```haxe
    package arm;

    import armory.system.Event;
    import armory.trait.internal.CanvasScript;
    import iron.Scene;

    class MyTrait extends iron.Trait {

        var canvas: CanvasScript;

        public function new() {
            super();

            notifyOnInit(function(){
                // Get CanvasScript trit from active scene.
                canvas = Scene.active.getTrait(CanvasScript);

                // Observe event defined in Armory2D UI.
                Event.add("click", () -> on_click());
                Event.add("click", () -> on_click("arrow"));
            });

            // notifyOnUpdate(function() {
            // });

            // notifyOnRemove(function() {
            // });
        }

        function on_click(?arg: String = ""){
            var img = canvas.getElement("Image");
            trace("Click!", img, arg);
            // Set Element visible property to false to hide the element
            img.visible = !img.visible;
        }
    }
```

Haxe 4.0.0 开始支持 Arrow functions，也支持省略参数和 Nullability。但是也不能将在可省略
参数的函数当作 'onEvent' 传给 Event.add() 方法，这是基本的函数签名要求。直接调用则完全可以。

1. Expressions - Local Functions
2. Optional Arguments and Nullability
2. Function Type https://haxe.org/manual/types-function.html
3. Nullability https://haxe.org/manual/types-nullability.html
4. Null Safety https://haxe.org/manual/cr-null-safety.html
5. https://eliasnaur.com/blog/immediate-mode-gui-programming

Zui 作为一个立即模式的 UI 框架，特点就表现在控件的属性值的获取上，另一个特点就是事件的处理机制。

GUI 设计有两种模式：

1. RMGUI（Retained Mode Graphics User Interface），绝大多数应用程序是用的这种模式。
2. IMGUI（Immediate Mode Graphics User Interface），绝大多数游戏是这类模式。

保留模式，是指 UI 控件的状态保留，IMGUI 则不会保留控件状态，因此代码实现更简洁。由于 IMGUI 控件
无状态，所以就不能直接给控件注册事件处理函数，而需要使用 Observer Pattern 编程模式用来解耦 UI
与程序逻辑，UI 控件可以任意指定事件名称，处理与否完全取决于程序逻辑。所有激活状态的 UI 界面都会
在程序运行时显示，控件的事件处理使用的是观察者编程模式，即需要处理什么事件，就使用 `Event.add()`
方法注册相应的事件处理函数，同一个 trait 中同名事件的第一个注册的处理函数才会获得调用机会。

立即模式下，所以控件在每一帧中都会重新绘制，这就导致它占用更高的 CPU 时间，当然这是相对的，只要
保持界面整洁，并不需要多少的额外 CPU 时间。另一方面，由于它更简洁，使得它在游戏开发领域中备受欢迎。


因此，要获取 Zui 控件的值，比如 Slider、ProgressBar、InputText 等等控件的值，首先就需要保存
到内存的一个位置上，以 `Handle` 类型的形式，这个位置可以通过 CanvasScript.getHandle()
方法返回的控件数据 方法获取，根据控件类型从返回的数据中获取相应的字段：

```haxe
    Event.add("on_click",   () -> {
        trace("on_click:",
            canvasScript.getHandle("TextInput").text,
            canvasScript.getHandle("KeyInput").text,
            canvasScript.getHandle("Check").selected,
            canvasScript.getHandle("Combo").position,
            canvasScript.getHandle("Radio").position,
            canvasScript.getHandle("Slider").value);
    });
```

Zui 定义的 Handle 类型的数据字段：

```haxe
class Handle {
    public var selected = false;
    public var position = 0;
    public var color = kha.Color.White;
    public var value = 0.0;
    public var text = "";
    public var texture: kha.Image = null;
    public var redraws = 2;
    public var scrollOffset = 0.0;
    public var scrollEnabled = false;
    public var layout: Layout = 0;
    public var lastMaxX = 0.0;
    public var lastMaxY = 0.0;
    public var dragEnabled = false;
    public var dragX = 0;
    public var dragY = 0;
    public var changed = false;
}
```

ComboBox 和 Radio 控件需要在 Text 属性中指定选项字符串，使用分号分隔，如 Bad; Apple，获取
控件的 position 值，默认为 0，表示选择第一个选项。

进度条有两种，Progress_bar，CProgress_bar，但它们都没有状态数据，getHandle() 获取不到数据。
而要绘制出指定状态的控件，比如环形进行条的百分进度值，就需要在更新回调方法中设置相应的值：

```py
canvasScript.getElement("CProgress_bar").progress_total = 100;
canvasScript.getElement("CProgress_bar").progress_at = Std.int(Math.random()*100);
```

另外，Slider、Keyinput、TextArea 等等都不会触发事件，只有 TextInput 在内容改变后按回车时触发。

Armory 可以使用主题功能，默认为 Default Light 主题，主要是设置控件的色彩属性，替换其默认值。
如果控件设置了相应的色彩，则主题配置的项目不起作用。主题涉及的控件属性有三类：

- Text 控件的字体颜色；
- Elements 元素：BUTTON、ACCENT；
- Others 其它：PANEL_BG_COL；


```json
    [{
        "NAME": "Default Light",
        "WINDOW_BG_COL": -1052689,
        "WINDOW_TINT_COL": -14540254,
        "ACCENT_COL": -1118482,
        "ACCENT_HOVER_COL": -4473925,
        "ACCENT_SELECT_COL": -5592406,
        "BUTTON_COL": -3355444,
        "BUTTON_TEXT_COL": -14540254,
        "BUTTON_HOVER_COL": -5000269,
        "BUTTON_PRESSED_COL": -5131855,
        "TEXT_COL": -6710887,
        "LABEL_COL": -5592406,
        "SEPARATOR_COL": -6710887,
        "HIGHLIGHT_COL": -14656100,
        "CONTEXT_COL": -5592406,
        "PANEL_BG_COL": -5592406,
        "FONT_SIZE": 26,
        "ELEMENT_W": 200,
        "ELEMENT_H": 48,
        "ELEMENT_OFFSET": 8,
        "ARROW_SIZE": 10,
        "BUTTON_H": 44,
        "CHECK_SIZE": 30,
        "CHECK_SELECT_SIZE": 16,
        "SCROLL_W": 12,
        "TEXT_OFFSET": 16,
        "TAB_W": 24,
        "FILL_WINDOW_BG": false,
        "FILL_BUTTON_BG": true,
        "FILL_ACCENT_BG": false,
        "LINK_STYLE": 0,
        "FULL_TABS": false
    }]
```

Armory2D 目前还有些未曾完成的功能，其中就有 Timeline 时间轴动画的支持缺失。

最后注意，传入方法的 id 没有对应控件时，getHandle() 方法触发异常，getElement() 返回 null：

    Trace: TypeError: Cannot read property 'id' of null
        at armory_trait_internal_CanvasScript.getHandle (<anonymous>:8132:34)


### Logic Node Editor
* Logic Nodes
  * [Introduction](https://github.com/armory3d/armory/wiki/Introduction-to-Logic-Nodes)
  * [Reference](https://github.com/armory3d/armory/wiki/reference)
  * [Common Mistakes](https://github.com/armory3d/armory/wiki/Common-Mistakes)
  * [Tilesheets](https://github.com/armory3d/armory/wiki/Tilesheets)

**Logic Node Editor** 是可视化编程工具，和 Unreal Engine 蓝图工具是同类型软件，通过定义节点树，
实现程序逻辑的开发，由节点连接关系来转译成对应的代码，省去人工编写代码的过程。

每个逻辑节点组就是一个逻辑节点树 `LogicTree`，它也是 Trait 的一种扩展类型。

逻辑树定义了一个静态映射 `Map<String, Array<LogicTree>>` 管理工程中所有逻辑树，当前逻辑树
使用 `Map<String, LogicNode>` 管理节点。映射数据类型定义中，使用树名或节点名作为 key，映射
到相应的子树或节点。子树也是逻辑树，同样的类型定义，只是为了实现树状的数据结构而如此设计。

逻辑节点编辑器中，点击侧栏面板 Armory - Armory Logic Group - Add call group node，
添加子树，在子树节点（Group）点击 `Edit tree` 编辑子树，点击编辑器右上角的箭头图标返回上级。
可以将选中的节点转换为子树，也可以将子树整合到上层，子树分组也可以设置输入、输出端口。

逻辑节点 `LogicNode` 构成逻辑树，逻辑编辑器中连接的各种节点都其子类型。节点之间的链接定义为
`LogicNodeLink` 类型，由其属性表达：fromNode 连接到 toNode。由其 fromType 和 toType
两个属性记录端口的数据类型。由其 fromIndex 和 toIndex 属性记录所连接的端口序号，因为逻辑节点
输入、输出端口连接只按序号识别。端口名称仅是供用户阅读，以方便使用。如果两端口之间的数据类型有差异，
则可以由 toValue 提供的方法进行转换。

节点定义一个静态方法用来添加链接关系，因为 LogicNodeLink 记录了链接信息，移除链接需要它：

    public static function addLink(
        fromNode: LogicNode, toNode: LogicNode,
        fromIndex: Int, toIndex: Int): LogicNodeLink { }

Python 脚本定义中，因为是 Bledner 插件工作方式，分别使用了 bpy.types.NodeTree 和 Node，
但是只有节点派生了一个基础类型，`ArmLogicTreeNode`。

Haxe 脚本中，逻辑节点类型定义三个属性：

- **tree** 属性引用其所属的树对象；
- **inputs** 集合记录所有输入链接关系 `Array<LogicNodeLink>`；
- **outputs** 集合记录所有输出链接关系 `Array<LogicNodeLink>`；

节点进入运行状态时，就会通过 `runOutput(i: Int)` 调用相应端口号所链接的节点的 `run()` 方法，
也就是事件流的流向，通过节点的事件控件流的链接，整个逻辑树就可以按设计的功能运行。

整棵逻辑树可以添加节点和子树，节点可以添加链接关系。

编译工程时，使用 **make_logic.py** 脚本将逻辑树转换为 Haxe 脚本文件：

    armsdk\armory\blender\arm\make_logic.py

在生成代码中，会调用 `preallocInputs(amount: Int)` 和 `preallocOutputs(amount: Int)`
调整输入、输出的连接集合大小，以最小化动态分配内存，后续可以再调整。

有个问题：当一个事件流连接到一个数据流端口会发生什么？因为输入、输出端口在相应的两个集合中管理，
也就是 inputs 集合和 outputs 集都可能同时存在控制流和数据流连接。当前一个节点的输出控制流
被执行，就会调用 `runOutput(i: Int)` 方法去执行 i 端口号所链接的节点的 `run()` 方法，
并且将 outLink.toIndex 传递给下游节点。

而具体如何运行，取决于具体节点，比如 PrintNode，如果它接收到一个控制流作为待打印的字符串，
那么它会通过 LogicNodeLink `get()` 方法调用上游节点的 `get(fromIndex)`，它返回什么
就表示要打印什么内容。逻辑节点不一定要定义 `get()` 方法，因此有可能调用 LogicNode 方法，
也就是返回一个 LogicNode 实例：

    @:allow(armory.logicnode.LogicNodeLink)
    function get(from: Int): Dynamic { return this; }

Armory 提供了 Play Tilesheet 逻辑节点用来播放 Sprite Animation，官方教程：

0. https://github.com/armory3d/armory_examples
1. tilesheet 提供简易的 Sprite Animation 使用示范，定义 Tilesheet 和 Action；
2. tilesheet_2d 使用 Tilesheet 搭建的简易的 2D 场景，角色都采用 Sprite Animation。
3. tilesheet_walkcycle 示范通过逻辑节点对 Tilesheet 动画进行设置，播放不同的 Action；

三个 Tilesheet 教程都使用了相同对象动画控制器 AnimControl.hx。

Trait 类型中 object 引用了几何体对象，通过转型函数 cast() 转换为 `MeshObject`，此对象由
Iron 提供，用来操作几何体，tilesheet 就是其中之一，`Tilesheet` 对象提供了 Sprite 动画的
基本控制方法：

    iron\object\MeshObject.hx
    iron\object\Tilesheet.hx
    armory_examples-22.06\tilesheet_walkcycle\Sources\arm\AnimControl.hx

BG-36's Tutorials - Armory Tilesheet 教程演示了通过逻辑节点实现一个爆炸效果的动画播放。
https://github.com/BlackGoku36/armory-tutorial-sourcecode/tree/master/Tilesheet

在场景中添加一个 **Plane**，并添加 Armory PBR 材质，设置 Base Color 和 Opacity 材质纹理，
将它们都关联到带透明通道的 Explosion.png。同时设置 UV，因为 Explosion Tilesheet 图像规格为
8 x 8 帧，所以映射到 Plane 平面时，就需要将其 UV 坐标映射区域的大小设置为 1/8，即 0.125。

Blender 中可以直接输出 1/8，交由 Python 引擎计算表达式的值。在 UV 编辑器中，选择网格，按下 S
进入缩放模式，再按 /8 即可以确定完成缩放。然后按下 G 将缩放后的风格移动到动画帧开始的区域。

01. Material 属性面板 - Armory Tilesheet 添加一个瓦片图，命名为 SpriteAnimation，
    同时创建一个 Action 并命名为 Explosion，可以创建多个 Action 播放不同的区间内的帧。
    Frame Rate 帧率，指定播放速度，根据动画设置。Tiles X/Y 指定图像的水平、竖直方向的帧数。
    多个 Action 可以通过 Start/End 指定播放的帧区间。
02. Object 属性面板 - Armory Props 中引用上一步创建好 Tilesheet，可以不勾选 Animation，
    此选项用于骨骼蒙皮动画和时间轴动画。设置 Tilesheet 和 Action 名称同上，通过列表中选择。

材质面板中 Armory Tilesheet 列表中添加的 Titlesheet，通常可以在列表中命名为 Character，
这此对象可以设置多个动作动画，但是这些不是专为当前选中对象设置的，而是给那些通过其**对象属性面板**
指定了 Armory Props - Tilesheet 和 Action 的对象使用。并且需要配合材质设置，因为 Tilesheet
根本上只是根据指定的图片帧参数移动 UV 坐标映射的区域，所以材质需要使用相应的图片作为纹理。

Armory 提供了 Armory PBR 节点组，它可以很方便地通过 Mix Shader 提供一个 Opacity 端口，
可以直接输入带透明通道的 PNG 图像 Alpha 值。创建一个 Image Texture 节点将动画图像纹理的
Color 和 Alpha 连接到 Armory PBR 着色器的 Base Color 和 Opacity。

另外，对象数据属性面板中 UV Maps 设置的纹理坐标数据非常重要，因为 Sprite Animation 纹理图像
就是通 UV 坐标映射到几何体上的。如果几何体未提供编辑好的 UVMap，或者连默认的 UVMap 都没有，那
就需要进行 UV 坐标碾平，根据纹理图像进行调整。

在几何体上逻辑节点对 Tilesheet 动画进行操作时有可能出现这样的错误，这是因为 Tilesheet 配置
不正确，应该给几何体的对象属性设置好要使用的 Tilesheet 和相应的 Action：

    Trace: TypeError: Cannot read property 'play' of null
    Trace: TypeError: Cannot read property 'tileX' of null

使用逻辑节点播放 Tilesheet，先创建一个 Logic Node 节点树，命名为 SpritePlayer，然后，
按以下说明添加节点设置：

1. Event - `On Init` 初始化事件节点，将事件流输出到 Animation 节点；
2. Object - `Self Object` 自身引用节点，用来给动画节点指定 Object 属性值；
3. Animation - `Play Tilesheet` 瓦片图动画播放节点，Name 属性中指定一个 Action；

注意，逻辑节点的连线颜色，一般有两种含义：事件流（控制流）用红色线，表示程序的执行流程。数据流
有多种颜色对应不同数据类型，表示事件流经过的节点需要使用到的数据。事件节点通常用来获取事件流，
事件流的走向表示程序逻辑的执行流程，将其联接到 Animation 节点，就表示在初始化事件时播放动画。
事件流有两种基本状态：激活状态和非激活状态，处于激活状态就是在运行的逻辑程序。

目前没有 Set Tilesheet 这样的节点用来改变对象的 Sprite Animation，并且在对象属性面板中
Armory Props - Tilesheet 和 Action 都要指定初始值，否则就会产生异常。

```sh
Trace: TypeError: Cannot read property 'start' of null
    at iron_object_Tilesheet.play (<anonymous>:19024:29)
    at <anonymous>:19005:13
    at Function.getSceneRaw (<anonymous>:6773:4)
    at new iron_object_Tilesheet (<anonymous>:18996:18)
    at iron_object_MeshObject.setupTilesheet (<anonymous>:17702:20)
```

然后将逻辑节点树关联到 **Plane** 对象，添加 Logic Trait，生成代码中的类名由 Armory Trait
列表中的条目指定。逻辑节点自动生成的代码如下，每个逻辑节点组就是一个逻辑节点树 `LogicTree`。

以下节点设置可以通过 Space 按键来切换 Tilesheet 的播放与暂停：

1. Event - `Keyboard` Space 事件流向 `Set Tilesheet Paused`；
2. Object - `Self Object` 获取自身对象引用，输入到 `Get Tilesheet State`；
3. Animation - `Get Tilesheet State` 获取 Sprite Animation 的播放状态 **Is Paused**；
4. Logic - `Invert Boolean` 用来反转当前的播放状态，并将结果输入到 `Set Tilesheet Paused`；

注意，`Keyboard` 产生的事件流对应有三种按键状态：

1. Started 刚按下按键时触发的事件；
2. Down 按下按键时触发，只要按键没有释放就持续地在每一帧触发；
3. Released 释放按键时触发的事件；

另外，`Invert Boolean` 和 `Invert Output` 是两类功能完全不同的节点，前者是逻辑取反运算，
后者属于事件流状态控制节点：

1. `InvertOutputNode` - 反转控制流，如果输入的状态处于激活状态，那么输出非激活状态；
2. `AlternateNode` - 变换控制流，可以有多个控制流输出，每次变换地执行其中一个，按顺序循环执行；
3. `SequenceNode` - 序列控制流，按顺序执行输出的控件流；
4. `LoopNode` - 循环控制流，From 与 To 指定循环次数，执行 Loop 端口，结束时再执行 Done 端口；

比如用来清理控制台输出内容的 Clear Console Node，它就是通过脚本调用 Krom 或其它平台的 API。
因为逻辑节点需要在 Bledner 节点编辑器中使用，Armory 将 Haxe 代码转译为对应的 Python 代码，
Blender 节点编辑器，所以 Armory 逻辑节点都按分类组织：

    armsdk\armory\Sources\armory\logicnode\ClearConsoleNode.hx
    armsdk\armory\blender\arm\logicnode\transform\LN_rotate_object.py

注意，逻辑节点生成的代码，默认保存在 Sources/arm/nodes 目录下，不能通过直接复制节点代码文件
来复制 Blender 中的逻辑节点树。并且不能在逻辑节点编辑器中直接通过 Ctrl-X/C 等快捷键复制节点，
需要通过 Logic Node Editor 的菜单执行复制动作。

```haxe
    package armory.logicnode;

    class ClearConsoleNode extends LogicNode {

        public function new(tree: LogicTree) {
            super(tree);
        }

        override function run(from: Int) {

            #if kha_krom
                Krom.sysCommand("cls");
            #elseif kha_html5
                js.Syntax.code("console.clear();");
            #end

            runOutput(0);
        }
    }
```

以下代码使用 `import` 整理过，注意 `@:access` 元数据必需指定完整的 package.module.type，
以访问私有成员，否则会导致异常。参考 [Compiler Features] [Built-in Compiler Metadata]：

    Cannot access private field preallocInputs

以代码方式使用 Logic Trait 并不是它的目的，只能开发者有了解它的需要。

```haxe
    package arm.node;

    import armory.logicnode.LogicTree;
    import armory.logicnode.LogicNode;
    import armory.logicnode.FunctionNode;
    import armory.logicnode.FunctionOutputNode;
    import armory.logicnode.PlayTilesheetNode;
    import armory.logicnode.OnInitNode;
    import armory.logicnode.SelfNode;
    import armory.logicnode.StringNode;
    import armory.logicnode.NullNode;

    @:access(armory.logicnode.LogicNode)@:keep
    class SpritePlayer extends LogicTree {

        var functionNodes:Map<String, FunctionNode>;

        var functionOutputNodes:Map<String, FunctionOutputNode>;

        public function new() {
            super();
            this.functionNodes = new Map();
            this.functionOutputNodes = new Map();
            notifyOnAdd(add);
        }

        override public function add() {
            var _PlayTilesheet = new PlayTilesheetNode(this);
            _PlayTilesheet.preallocInputs(3);
            _PlayTilesheet.preallocOutputs(2);
            var _OnInit = new OnInitNode(this);
            _OnInit.preallocInputs(0);
            _OnInit.preallocOutputs(1);
            LogicNode.addLink(_OnInit, _PlayTilesheet, 0, 0);
            var _SelfObject = new SelfNode(this);
            _SelfObject.preallocInputs(0);
            _SelfObject.preallocOutputs(1);
            LogicNode.addLink(_SelfObject, _PlayTilesheet, 0, 1);
            var _Name = new StringNode(this, "Explosion");
            LogicNode.addLink(_Name, _PlayTilesheet, 0, 2);
            LogicNode.addLink(_PlayTilesheet, new NullNode(this), 0, 0);
            LogicNode.addLink(_PlayTilesheet, new NullNode(this), 1, 0);
        }
    }
```


Armory Blender 插件中的逻辑节点代码文件分类目录：

    armsdk\armory\blender\arm\logicnode
    |   |   |-- arm\logicnode\__init__.py
    |   |   |-- arm\logicnode\arm_node_group.py
    |   |   |-- arm\logicnode\arm_nodes.py
    |   |   |-- arm\logicnode\arm_props.py
    |   |   |-- arm\logicnode\arm_sockets.py
    |   |   |-- arm\logicnode\replacement.py
    |   |   |-- arm\logicnode\tree_variables.py
    |   |   |-- arm\logicnode\animation\
    |   |   |-- arm\logicnode\array\
    |   |   |-- arm\logicnode\camera\
    |   |   |-- arm\logicnode\canvas\
    |   |   |-- arm\logicnode\deprecated\
    |   |   |-- arm\logicnode\draw\
    |   |   |-- arm\logicnode\event\
    |   |   |-- arm\logicnode\input\
    |   |   |-- arm\logicnode\light\
    |   |   |-- arm\logicnode\logic\
    |   |   |-- arm\logicnode\material\
    |   |   |-- arm\logicnode\math\
    |   |   |-- arm\logicnode\miscellaneous\
    |   |   |-- arm\logicnode\native\
    |   |   |-- arm\logicnode\navmesh\
    |   |   |-- arm\logicnode\network\
    |   |   |-- arm\logicnode\object\
    |   |   |-- arm\logicnode\physics\
    |   |   |-- arm\logicnode\postprocess\
    |   |   |-- arm\logicnode\random\
    |   |   |-- arm\logicnode\renderpath\
    |   |   |-- arm\logicnode\scene\
    |   |   |-- arm\logicnode\sound\
    |   |   |-- arm\logicnode\string\
    |   |   |-- arm\logicnode\trait\
    |   |   |-- arm\logicnode\transform\
    |   |   `-- arm\logicnode\variable\


节点分类 Node Categories

- **Basic**
  - Logic nodes used to control execution flow using branching, loops, gates etc.
  - Event nodes to handle events, application state changes, timers etc.
  - Input nodes to process user inputs, gamepad, touch, mouse, keyboard etc.
  - Native nodes interact with the system (Input/Output functionality, etc.) or Haxe.
- **Data**
  - Camera nodes
  - Material nodes
  - Light nodes
  - Object nodes
  - Scene nodes
  - Trait nodes
- **Motion**
  - Animation nodes
  - Navmesh nodes
  - Transform nodes
  - Physics nodes
- **Values**
  - Array nodes
  - Math nodes
  - Random nodes
  - String nodes
  - Variable nodes
- **Graphics**
  - Canvas nodes
  - Postprocess nodes
  - Renderpath nodes
- **Sound**
  - Sound nodes
- **Misc**
  - Miscellaneous nodes
  - Layout nodes

Logic nodes common mistakes

- **Don't put a trait that spawns an object on the spawned objects**

    The reason for that is that you have accidentally created *exponential growth*.
    The first cube will spawn another copy of itself, so now there are two cubes
    in the scene:

    [Cube] --- spawns ---> [Cube]

    Because the spawning trait is applied to both cubes (remember that the
    trait spawns the same object on which it is applied), in the next second
    the trait will be executed twice and will spawn two additional cubes:

    [Cube]                  [Cube]
      |                       |
    spawns                  spawns
      |                       |
      v                       v
    [Cube]                  [Cube]

    The now existing four cubes will then spawn another four cubes, and so on.
    After a less than a minute you would have more cubes than bytes on your
    hard drive and if you wait a bit longer, you would create more cubes than
    atoms in the observable universe.

- **Don't modify an array while iterating over it**

- **Passing values around does not necessarily copy the values**

    If you store a value inside a variable with the `Set Variable` node or
    pass it to a function, the value might not get copied in memory depending on
    its type which can cause unexpected side effects.

    This is because of two different kinds of types, *mutable* and *immutable* types.
    https://en.wikipedia.org/wiki/Immutable_object

    Objects of *Immutable* types can't be modified after their creation.
    If you change the value(s) of an immutable object, a new object is created instead,
    so a change doesn't affect other places where this object is used.
    This has the same effect of a copy, independently of whether there actually
    is data copied in memory or not.

    Primitive types like `Bool`, `Float` and `Int` are immutable.
    The `String` type is immutable as well in Haxe, thus also when using logic nodes.

    Objects of *Mutable* types can be modified after they are created,
    and when storing them in variables or passing them to functions,
    there is no copy made by default. This means that if you change
    their values in one place, it will also change in every other place
    where this value is used. A common mutable type is the `Array` type:
    if you add an object to an array, it is also added to all other places
    where that array is used because it is the *same* array in the same place in memory.

    If you want to work on two different instances of an array or
    another mutable object, make sure to copy it first. For an array,
    this can be done using the `Array Slice` node with `Index` set to 0
    and `End` set to the length of the array.


## 🐥 Custom Logic Node

* Logic Nodes
  * [Introduction](https://github.com/armory3d/armory/wiki/Introduction-to-Logic-Nodes)
* Engine Development
  * [Logic Nodes](https://github.com/armory3d/armory/wiki/logicnodes)

可以实现自定义的逻辑节点：将逻辑节点实现的 Python 脚本文件放到 Armory 源代码中，或者项目中的
Libraries 目录下。本文内容涉及 Blender Python API，但又不完全是 Blender 插件开发，因为
主要内容是 Armory 逻辑节点的框架。

Blender 节点编程接口参考 SocketDeclarationBuilder、NodeDeclarationBuilder，以及
节点编辑器源代码空间 space_node：

    blender\source\blender\nodes
    |-- nodes\CMakeLists.txt
    |-- nodes\NOD_node_declaration.hh
    |-- nodes\NOD_socket_declarations.hh

    blender\source\blender\editors\space_node
    |-- space_node\CMakeLists.txt
    |-- space_node\add_menu_assets.cc
    |-- space_node\add_node_search.cc
    |-- space_node\clipboard.cc
    |-- space_node\drawnode.cc
    |-- space_node\link_drag_search.cc
    |-- space_node\node_add.cc
    |-- space_node\node_context_path.cc
    |-- space_node\node_draw.cc
    |-- space_node\node_edit.cc
    |-- space_node\node_geometry_attribute_search.cc
    |-- space_node\node_gizmo.cc
    |-- space_node\node_group.cc
    |-- space_node\node_intern.hh
    |-- space_node\node_ops.cc
    |-- space_node\node_relationships.cc
    |-- space_node\node_select.cc
    |-- space_node\node_templates.cc
    |-- space_node\node_view.cc
    `-- space_node\space_node.cc

Armory 逻辑节点及编辑器 API 定义在以下各个文件：

    armsdk\armory\blender\arm\logicnode
    |-- data\haxelogic.py           Haxe 逻辑节点数据文件
    |-- arm
    |   |-- arm\handlers.py         Blender 插件模块管理器
    |   |-- arm\make.py             项目构建脚本
    |   |-- arm\make_logic.py       逻辑树代码生成器
    |   |-- arm\make_renderpath.py  渲染路径构建
    |   |-- arm\make_state.py       构建状态设置管理
    |   |-- arm\make_world.py       构建世界环境着色器
    |   |-- arm\node_utils.py       逻辑树辅助函数包
    |   |-- arm\nodes_logic.py      逻辑节点编辑器、逻辑树 API
    |   |-- arm\nodes_material.py
    |   |-- arm\logicnode
    |   |   |-- arm\logicnode\__init__.py  逻辑树节点分类目录及模块初始化脚本
    |   |   |-- arm\logicnode\arm_node_group.py
    |   |   |-- arm\logicnode\arm_nodes.py 逻辑节点 API
    |   |   |-- arm\logicnode\arm_props.py
    |   |   |-- arm\logicnode\arm_sockets.py  逻辑节点连接端口 API
    |   |   |-- arm\logicnode\replacement.py  逻辑节点替换功能 API
    |   |   |-- arm\logicnode\tree_variables.py 节点树变量

阅读 Logic Nodes 代码时应该注意区分，设计阶段的逻辑节点实现代码，以及逻辑节点运行阶段的代码。
前者基于 Blender Python API 接口开发，后者用 Haxe 语言开发，Armory 引擎运行时执行以复现
逻辑节点的可视化设计的逻辑状态。

以下是 arm_nodes.py 文件定义的逻辑节点类型，属于设计阶段的功能，调用 Blender API 实现逻辑
节点编辑器的节点功能，顶级基类是 Blender `Node`，逻辑节点功能父类是 `ArmLogicTreeNode`：

    class ArmLogicTreeNode               (bpy.types.Node):
    class ArmLogicVariableNodeMixin      (ArmLogicTreeNode):
    class ArmNodeCategory:

    class ArmNodeAddInputButton          (bpy.types.Operator):
    class ArmNodeAddInputValueButton     (bpy.types.Operator):
    class ArmNodeRemoveInputButton       (bpy.types.Operator):
    class ArmNodeRemoveInputValueButton  (bpy.types.Operator):
    class ArmNodeAddOutputButton         (bpy.types.Operator):
    class ArmNodeRemoveOutputButton      (bpy.types.Operator):
    class ArmNodeAddInputOutputButton    (bpy.types.Operator):
    class ArmNodeRemoveInputOutputButton (bpy.types.Operator):
    class ArmNodeCallFuncButton          (bpy.types.Operator):
    class ArmNodeSearch                  (bpy.types.Operator):

以下是 nodes_logic.py 文件定义的逻辑节点编辑器功能，设计阶段的功能，调用 Blender API 实现
逻辑节点编辑器的节点树，顶级基类是 Blender `NodeTree`，逻辑节点树功能父类是 `ArmLogicTree`：

    class ArmLogicTree                   (bpy.types.NodeTree):
    class ARM_MT_NodeAddOverride         (bpy.types.Menu):
    class ARM_OT_AddNodeOverride         (bpy.types.Operator):

    class ARM_PT_LogicNodePanel          (bpy.types.Panel):
    class ArmOpenNodeHaxeSource          (bpy.types.Operator):
    class ArmOpenNodePythonSource        (bpy.types.Operator):
    class ArmOpenNodeWikiEntry           (bpy.types.Operator):

    class ARM_PT_NodeDevelopment         (bpy.types.Panel):
    class ARM_OT_ReplaceNodesOperator    (bpy.types.Operator):
    class ARM_UL_interface_sockets       (bpy.types.UIList):
    class DrawNodeBreadCrumbs():

面包屑导航（Breadcrumb）是逻辑编辑器左上角显示当前逻辑树与子树路径关系的提示性工具，添加节点组
并编辑它就会进入下一子级节点树，UI 组件的当前上下文对象可获取路径：context.space_data.path。

节点输入、输出端口的 UI 列表对应 `ARM_UL_interface_sockets`，这个列表维护的是 Blender
界面绘图之用的 UI 数据，即这个列表有什么数据，逻辑编辑器 UI 界面上就会绘画相应的视觉元素，
端口的圆点、节点之间的连线，这些都是视觉元素。节点交互行为基本由 `ArmLogicTreeNode` 类型实现。

节点树中有变量节点，它可以像代码中的变量一样存储数据，只不过这些数据是以节点这种数据结构保存，
`ArmLogicVariableNodeMixin` 就是实现这个机制的类型。变量节点还可以提升为 tree variable
节点树变量，即多个节点引用同一个数据，这样就可以在设计逻辑节点时，避免总是从同一个节点引线连接
到其它位置非常远的节点上，从而可以得到更整洁的节点布局。

有些逻辑节点可以有多个输入、输出端口，比如在 LN_select.py 文件中定义的 `SelectNode` 节点，
它有两种执行模式，可以拥有多个控制流、数据流输入端口：

1. From Index 有一个 Index 输入，和多个 Value 输入，前者指定要输出的 Value 端口索引号；
2. From Input 模式下 Input 控件流和 Value 数据流输入成对出现，控制流激活时输出相应 Value；



逻辑节点设计了版本机制，实现升级替换功能，`ARM_OT_ReplaceNodesOperator` 提供手动替换功能。

Blender 节点编辑器是一个基础功能接口，Armory 基于些设计了逻辑节点树编辑器，ArmLogicTree
代表 Blender 中的逻辑节点编辑器的用户界面，配合各种 UI 组件，构建一个完整的操作界面。

Add Node 菜单提供的功能由 `ARM_MT_NodeAddOverride` 实现，它覆盖 Blender 默认的节点菜单，
用 arm_nodes.category_items 登记的逻辑节点定义填充菜单，并按分区添加 separator 分隔线。
点击菜单项就触发 ARM_OT_AddNodeOverride `invoke()` -> `bpy.ops.node.add_node()`，
Blender 界面中的菜单项和按钮是同一种对象类型 `Operator`。

所有登记的逻辑节点分类，会在菜单中产生相应的分类菜单类条目，名称前缀 `ARM_MT_`。

如侧栏面板的在线文档功能，Armory - Armory Logic Node 对应  `ARM_PT_LogicNodePanel`，
其中提供三个用于打开在线文档的按钮，对应类型为 `Operator`：

1. ArmOpenNodeHaxeSource 对应 **Open Node Haxe Source** 按钮；
2. ArmOpenNodePythonSource 对应 **Open Node Python Source** 按钮；
3. ArmOpenNodeWikiEntry 对应 **Open Node Wiki Entry** 按钮；

它们的功能就是调用 webbrowser.open() 方法打开对应的在线文档资源。

    webbrowser.open(f'https://github.com/armory3d/armory/tree/{version}/Sources/armory/logicnode/{name}.hx')
    webbrowser.open(f'https://github.com/armory3d/armory/tree/{version}/blender/{rel_path}.py')
    webbrowser.open(f'https://github.com/armory3d/armory/wiki/reference_{category_section}#{anchor}')

侧栏面板 Armory Logic Node - Node Development 对应 `ARM_PT_NodeDevelopment`，提供
当前选中节点的信息：

1. 节点所属分类 **Category** (arm_nodes.eval_node_category(node))
2. 节点所属分区 **Section** (node.arm_section)
3. 节点的版本号 **Specific** Version (node.arm_version)
4. 节点类定义版本 **Class Version** (node.__class__.arm_version)
5. 节点是否处于弃用状态 **Is Deprecated** (node.arm_is_obsolete)
6. 是否是变量节点 **Is Variable Node**  (isinstance(node, arm_nodes.ArmLogicVariableNodeMixin))
7. 逻辑 ID 编号 **Logic ID** (node.arm_logic_id)

逻辑节点编辑器中所有节点目录都是按分类、分区二级目录进行管理，在整个逻辑目录上划分了 7 个区和
多个分类，比如 Event 分类和 Input 分类就归属于 Basic 分区。再有，Input 分类下的所有节点
划分为 6 个分区，但它们全都属性于 Input 分类菜单下显示，每个分区对应菜单上的分隔线。

```py,ignore
    # arm\logicnode\__init__.py 逻辑树节点分类目录及模块初始化脚本
    def init_categories():
        # ......
        arm_nodes.add_category('Event', icon='INFO', section="basic")
        arm_nodes.add_category('Input', icon='GREASEPENCIL', section="basic")
        # ......
        arm_nodes.add_category('Miscellaneous', icon='RESTRICT_COLOR_ON', section="misc")
        arm_nodes.add_category('Layout', icon='SEQ_STRIP_DUPLICATE', section="misc")
        # Make sure that logic node extension packs are displayed at the end
        # of the menu by default unless they declare it otherwise
        arm_nodes.add_category_section('default')

    # arm\logicnode\input\__init__.py
    from arm.logicnode.arm_nodes import add_node_section

    add_node_section(name='keyboard', category='Input')
    add_node_section(name='mouse',    category='Input')
    add_node_section(name='gamepad',  category='Input')
    add_node_section(name='surface',  category='Input')
    add_node_section(name='sensor',   category='Input')
    add_node_section(name='virtual',  category='Input')
```

Armory 默认的逻辑节点分类、分区与图标设置，图标参考 Blender bpy.types.Node(bpy_struct)：
* https://wiki.blender.org/wiki/Source/Interface/Icons

|   Categories  |        Icons        | Sections |
|---------------|---------------------|----------|
| Logic         | OUTLINER            | basic    |
| Event         | INFO                | basic    |
| Input         | GREASEPENCIL        | basic    |
| Native        | MEMORY              | basic    |
| Camera        | OUTLINER_OB_CAMERA  | data     |
| Material      | MATERIAL            | data     |
| Light         | LIGHT               | data     |
| Object        | OBJECT_DATA         | data     |
| Scene         | SCENE_DATA          | data     |
| Trait         | NODETREE            | data     |
| Network       | WORLD               | data     |
| Animation     | SEQUENCE            | motion   |
| Navmesh       | UV_VERTEXSEL        | motion   |
| Transform     | TRANSFORM_ORIGINS   | motion   |
| Physics       | PHYSICS             | motion   |
| Array         | LIGHTPROBE_GRID     | values   |
| Math          | FORCE_HARMONIC      | values   |
| Random        | SEQ_HISTOGRAM       | values   |
| String        | SORTALPHA           | values   |
| Variable      | OPTIONS             | values   |
| Draw          | GREASEPENCIL        | graphics |
| Canvas        | RENDERLAYERS        | graphics |
| Postprocess   | FREEZE              | graphics |
| Renderpath    | STICKY_UVS_LOC      | graphics |
| Sound         | OUTLINER_OB_SPEAKER | sound    |
| Miscellaneous | RESTRICT_COLOR_ON   | misc     |
| Layout        | SEQ_STRIP_DUPLICATE | misc     |

Haxe 逻辑节点数据文件中，或者逻辑节点连接端口 API 文件中，都可以找到节点端口的类型定义。在使用
逻辑节点编辑器时，只需要知道事件流与数据流的区分即够用了，事件流对应 **ArmNodeSocketAction**，
数据流，由于数据类型不同，有不同的端口，对应不同颜色的圆点。

在编写节点类型实现代码，调用 `add_output()` 和 `add_input()` 中添加端口时，socket_type
参数需要使用字符串指定端口类型，尽管这种操作不太恰当，但是 Armory 就是这样做的。

Bledner 本身支持节点编辑器，提供端口的基类 `bpy.types.NodeSocket`，Armory 在此基础上
派生出 `ArmCustomSocket`，作为所有逻辑节点端口的基类型，定义在文件：**arm_sockets.py**。

|     Class Names     |   socket_type(idname)   |     socket_colors     |
|---------------------|-------------------------|-----------------------|
| ArmActionSocket     | ArmNodeSocketAction     | (0.80, 0.30, 0.30, 1) |
| ArmAnimActionSocket | ArmNodeSocketAnimAction | (0.80, 0.80, 0.80, 1) |
| ArmRotationSocket   | ArmRotationSocket       | (0.68, 0.22, 0.62, 1) |
| ArmArraySocket      | ArmNodeSocketArray      | (0.80, 0.40, 0.00, 1) |
| ArmBoolSocket       | ArmBoolSocket           | (0.80, 0.65, 0.84, 1) |
| ArmColorSocket      | ArmColorSocket          | (0.78, 0.78, 0.16, 1) |
| ArmDynamicSocket    | ArmDynamicSocket        | (0.39, 0.78, 0.39, 1) |
| ArmFloatSocket      | ArmFloatSocket          | (0.63, 0.63, 0.63, 1) |
| ArmIntSocket        | ArmIntSocket            | (0.06, 0.52, 0.15, 1) |
| ArmObjectSocket     | ArmNodeSocketObject     | (0.15, 0.55, 0.75, 1) |
| ArmStringSocket     | ArmStringSocket         | (0.44, 0.70, 1.00, 1) |
| ArmVectorSocket     | ArmVectorSocket         | (0.39, 0.39, 0.78, 1) |
| ArmAnySocket        | ArmAnySocket            | (0.90, 0.90, 0.90, 1) |

```py
def socket_type(s):
    if s == 'ArmNodeSocketAction':
        return 'ACTION'
    elif s == 'ArmNodeSocketObject':
        return 'OBJECT'
    elif s == 'ArmNodeSocketAnimAction':
        return 'ANIMACTION'
    elif s == 'ArmNodeSocketArray':
        return 'ARRAY'
    elif s == 'NodeSocketShader':
        return 'SHADER'
    elif s == 'NodeSocketInt':
        return 'INTEGER'
    elif s == 'NodeSocketFloat':
        return 'VALUE'
    elif s == 'NodeSocketString':
        return 'STRING'
    elif s == 'NodeSocketBool':
        return 'BOOL'
    elif s == 'NodeSocketVector':
        return 'VECTOR'
    elif s == 'NodeSocketColor':
        return 'RGBA'
    else:
        return s
```

在大型类库中，通常用单个脚本文件定义一个类型，多个文件构成一个包，不同分类的节点类型保存在子目录。
每个逻辑节点脚本名称前缀 `LN_` 并且类型的 [`bl_idname`] 字段**必须**前缀 `LN` 后跟一个名称，
这个名称用来定义 Haxe 类型，注意去掉了前缀。由于 haxe 默认 private 成员访问方式，所以，如果
存在逻辑节点使用的 `property0` - `property9` 这样的属性，就需要使用 public 声明。

参考 LN_select.py 和 SelectNode.hx 定义的 `SelectNode` 节点如何使用 `property0` 属性
来设置执行模式，From Input 模式下，输出的是缓存到 value 变量的数据，这使得它可以“跨事件流”
向其它事件传递数据：

```py,ignore
    from arm.logicnode.arm_nodes import *

    class SelectNode(ArmLogicTreeNode):

        property0: HaxeEnumProperty(
            'property0',
            name='Execution Mode',
            description="The node's behaviour.",
            items=[
                ('from_index', 'From Index', 'Choose the value from the given index'),
                ('from_input', 'From Input', 'Choose the value with the same position as the active input')],
            default='from_index',
            update=update_exec_mode,
        )
```

```hx
    package armory.logicnode;

    class SelectNode extends LogicNode {

        public var property0: String;

        var value: Dynamic = null;

        public function new(tree: LogicTree) {
            super(tree);
        }

        override function run(from: Int) {
            // get and cache value according to the activeated input
            value = inputs[from + Std.int(inputs.length / 2)].get();
            runOutput(0);
        }

        override function get(from: Int): Dynamic {
            if (property0 == "from_index") {
                // ...
                return inputs[index].get();
            }
            // from_input
            return value;
        }
    }
```

逻辑节点初始化脚本的 `init_nodes()` 方法分将所有节点模块加载到 Blender 环境，并添加到
逻辑编辑器的菜单中。

注意，Libraries/your_lib/blender.py 这个脚本文件和路径是 Armory 约定的，当检测到扩展库
存在这个脚本就会执行 `importlib.import_module('blender')` 加载它，并打印信息到控制台。
这个脚本是 Python 语言规范中的一个模块，也相当于一个插件，因为 Blender 集成了解释器，脚本
直接可以导入 Blender bpy 模块。在打开 .blend 文件时，Bledner 首先打开的是默认配置文件，
然后才真正打开用户文件，Armory 会通过检测 bpy.data.filepath 来避免二次执行。

    Armory: Loaded Python library LogicNodes

Logic Node API 参考：

```py,ignore
  # Methods come from arm_sockets.py for `ArmLogicTreeNode`
  def add_input(self, socket_type: str, socket_name: str,
            default_value: Any=None, is_var: bool=False) -> bpy.types.NodeSocket:
  def add_output(self, socket_type: str, socket_name: str,
            default_value: Any=None, is_var: bool=False) -> bpy.types.NodeSocket:

  # Node versioning
  def get_replacement_node(self, node_tree: bpy.types.NodeTree) -> arm.logicnode.arm_nodes.NodeReplacement:

  # Static methods come from arm_nodes.py
  def add_node_section(name: str, category: str) -> None:
  def add_category_section(name: str) -> None:
  def add_category(category: str, section: str='default', icon: str='BLANK1',
                   description: str='') -> Optional[ArmNodeCategory]:
  def add_node(node_type: Type[bpy.types.Node], category: str,
               section: str='default', is_obsolete: bool=False) -> None:
```

  - `run(from: Int): Void` 方法会在逻辑节点接收到活动事件流时执行，它的调用者是上游节点的
    `runOutput(i)` 函数，参数 `from` 指明了当前节点的寻一个输入端口，是它连接的上游节点，
    参数 `i` 是上游节点输出端口的索引号，是它连接当前执行中的节点。
  - `get(from: Int): Dynamic` 方法用来获取数据流的数据，逻辑节点是之间是低耦合的，即节点
    之间可以可以任意连接，即使将控制流连接到数据流也不会产生错误，当然这并不是正确用法。这个
    `get()` 方法是程序逻辑解耦功能的一部分，它供下游节点调用来获取端口的输入数据。节点进入
    运行状态时，通过 `runOutput(i: Int)` 调用相应端口号所链接的下游节点 `run()` 方法，
    端口传递的数据由下游节点来调用自身的 `get()` 方法获取，即下游节点调用`input.get(i)`。
    这个过程就是事件流的流向，通过节点的事件控件流的链接，整个逻辑树就可以按设计的功能运行。

官方文档中，用 impulse socket 表示控制流端口，non-impulse (data) 表示数据流端口。

以下是自定义逻辑节点 SwitchCameraNode 的代码以及目录结构，在大型扩展库中，blender.py 应该是
一个入口脚本，各种节点的定义应该放在独立脚本文件中，Python 以单个文件为模块，并且可以设置初始化
模块 `__init__.py` 文件，当然 Python 模块也不一定必需是脚本文件，也可以是 C/C++ 实现扩展模块。

    Project\Libraries\
    `-- LogicNodes
        |-- Sources\armory\logicnode\
        |   `-- SwitchCameraNode.hx
        `-- blender.py

```py,ignore
    from bpy.props import *
    from bpy.types import Node, NodeSocket
    from arm.logicnode.arm_nodes import *
    import arm.nodes_logic

    class SwitchCamera(ArmLogicTreeNode):
        """Test node extend from ArmLogicTreeNode
        so that the node is recognized as a logic node"""
        bl_idname = 'LNSwitchCameraNode'
        bl_label  = 'Switch Camera'
        bl_description = 'This is a custom logicnode'

        # The category in which this node is listed in the user interface
        arm_category = 'Custom Nodes'

        # Set the node version, so it would be update aotomatically.
        arm_version = 1

        def init(self, context):
            self.add_output('ArmNodeSocketAction', 'Out')
            self.add_input('ArmNodeSocketAction', 'In')
            self.add_input('ArmNodeSocketObject', 'Camera')

    def register():
        """This funtion is called when Armory loads this library."""

        # Add a new category in which we will put the SwitchCamera.
        add_category("Custom Nodes", icon="EVENT_C")

        # Register the node
        SwitchCamera.on_register()
```

考虑到逻辑节点的连接具有高度灵活性，防止用户直接因为使用字符串指定相机而不是指定对象，代码就需要
考虑两种情况，当设置的参数不为字符串时就使用 `cast(camera, CameraObject)` 进行安全转型。

```haxe
    package armory.logicnode;

    import iron.math.Mat4;
    import iron.math.Vec4;
    import iron.math.Quat;
    import iron.object.CameraObject;

    class SwitchCameraNode extends LogicNode {
      public function new(tree:LogicTree) {
        super(tree);
      }

      override function run(from:Int) {
        var camera = inputs[1].get();
        if (camera is String) {
          iron.Scene.active.camera = iron.Scene.active.getCamera(camera);
        } else if (camera is CameraObject) {
          iron.Scene.active.camera = cast(camera, CameraObject);
        }
        // $type(camera);
        // trace('SwitchCameraNode from $from , $camera');
        super.run(from);
      }
    }
```

因为自定义逻辑节点使用 armory.logicnode 包空间，可以直接引用 LogicNode 等类型。

Python 脚本实现的是逻辑节点设计阶段的功能，Armory 引擎编译时，会生成 `LogicTree` 根据逻辑
节点树的设计的功能状态，逻辑树代码生成器 arm\make_logic.py 会生成相应的 `LogicTree` 子类。
以下是一个自动生成的逻辑节点树：使用两个 `Keyboard` 节点触发两个 `SwitchCameraNode` 实现
相机镜头的切换功能。Haxe 语言的标注 `@:access` 意思是使被标注的类具有访问私有成员的权力，注意
使用全路径。另一个 `@:keep` 标注意思是避免 DCE (Dead Code Elimination) 功能清理无用代码。

代码生成器并不是做编译的工作，它只是按照逻辑节点的固有功能进行一个转化操作，比如，生成的类型命名
为 `SwitchCameraNode`，这是因为在 Python 代码中，将 `LNSwitchCameraNode` 这种约定的
字符串指定给 bl_idname 属性，代码生成器将它的前缀 LN 去掉，再写入生成的 Haxe 脚本文件。

```hx
    package arm.node;

    import armory.logicnode.LogicTree;
    import armory.logicnode.FunctionNode;
    import armory.logicnode.FunctionOutputNode;
    import armory.logicnode.SwitchCameraNode;
    import armory.logicnode.MergedKeyboardNode;
    import armory.logicnode.LogicNode;
    import armory.logicnode.ObjectNode;
    import armory.logicnode.BooleanNode;
    import armory.logicnode.NullNode;

    @:access(armory.logicnode.LogicNode)@:keep
    class CustomNodeTree extends LogicTree {

        var functionNodes:Map<String, FunctionNode>;

        var functionOutputNodes:Map<String, FunctionOutputNode>;

        public function new() {
            super();
            this.functionNodes = new Map();
            this.functionOutputNodes = new Map();
            notifyOnAdd(add);
        }

        override public function add() {
            var _SwitchCamera_001 = new SwitchCameraNode(this);
            _SwitchCamera_001.preallocInputs(2);
            _SwitchCamera_001.preallocOutputs(1);
            var _Keyboard_001 = new MergedKeyboardNode(this);
            _Keyboard_001.property0 = "released";
            _Keyboard_001.property1 = "c";
            _Keyboard_001.preallocInputs(0);
            _Keyboard_001.preallocOutputs(2);
            LogicNode.addLink(_Keyboard_001, new BooleanNode(this, false), 1, 0);
            LogicNode.addLink(_Keyboard_001, _SwitchCamera_001, 0, 0);
            LogicNode.addLink(new ObjectNode(this, "Camera.003"), _SwitchCamera_001, 0, 1);
            LogicNode.addLink(_SwitchCamera_001, new NullNode(this), 0, 0);
            var _SwitchCamera = new SwitchCameraNode(this);
            _SwitchCamera.preallocInputs(2);
            _SwitchCamera.preallocOutputs(1);
            var _Keyboard = new MergedKeyboardNode(this);
            _Keyboard.property0 = "started";
            _Keyboard.property1 = "c";
            _Keyboard.preallocInputs(0);
            _Keyboard.preallocOutputs(2);
            LogicNode.addLink(_Keyboard, new BooleanNode(this, false), 1, 0);
            LogicNode.addLink(_Keyboard, _SwitchCamera, 0, 0);
            LogicNode.addLink(new ObjectNode(this, "Camera.002"), _SwitchCamera, 0, 1);
            LogicNode.addLink(_SwitchCamera, new NullNode(this), 0, 0);
        }
    }
```


## 🐥 Iron & Logic Nodes
Iron - 3D Engine Core https://github.com/armory3d/iron
Iron examples https://github.com/armory3d/iron_examples/
Iron wiki https://github.com/armory3d/iron/wiki
Krafix shader compiler https://github.com/Kode/krafix

* Code
  * [Find objects in the scene](https://github.com/armory3d/armory/wiki/Find-objects-in-the-scene)

Iron is a data-based, asynchronous engine for building portable 3D applications.
Iron handles render & content pipelines and lets you develop a custom visual
engine on top of it.

Useful tooling:

- [Haxebullet](https://github.com/armory3d/haxebullet) for 3D physics
- [Haxerecast](https://github.com/armory3d/haxerecast) for 3D navigation
- [Zui](https://github.com/armory3d/zui) to build user interfaces
- [armorbase_format](https://github.com/armory3d/armorbase/tree/main/Sources/arm/format) for 3D model import
- [armorcore](https://github.com/armory3d/armorcore) for deployment

Iron does not import standard 3D file formats directly. Instead, a custom
`.arm` scene format is developed for efficiency. See structure of the
[scene format](https://github.com/armory3d/iron/blob/master/Sources/iron/data/SceneFormat.hx).
JSON (textual, debug) or ArmPack (binary, based on MessagePack, deploy)
serialization is used, with optional compression supported.

[.arm exporter](https://github.com/armory3d/iron/blob/master/tools/io_export_arm.py)
for Blender is provided. Blender can be operated from command line,
making it easy to integrate is as an asset converter.

To import `.fbx`/`.gltf`/`.obj` formats, see armorbase_format.


Render pipeline

Shaders are written in glsl syntax and cross-compiled using krafix.


Iron 为 Armory 提供了一个高级抽象的节点层次结构，基于 iron.object.Object：

- **traits** 集合包含了 Blender 对象中 Armory Traits 列表中添加的所有 iron traits 类型；
- **parent** 引用含父节点；
- **children** 集合包含了所有子节点；
- **animation** 引用节点的动画对象；
- **constraints** 集合包含所有约束关系；
- **lods** 集合包含包含分级细节图；

iron.Trait 类型的两个属性：

- **name**: String 指定 Trait 的名称。
- **object**: 当前 trait 所属着的对象，trait's owner，附着在对象 Armory Traits 列表。

Armory 框架中的 CanvasScript 对象扩展了 iron.Trait，包含属性：

- **cnvName** 即创建 Canvas UI 时指定的名称，如 MyCanvas。
- **canvas** 属性为 `TCanvas` 类型，对应 MyCanvas.json 中的基本画布数据，如宽高、位置。
- **cui** 画布对象对应的 `Zui` 框架实例。

iron.Scene 类型的几个属性：

- **active**: Scene 静态变量，引用当前活动场景。
- **global**: Object 静态变量，引用全局对象。
- **root**: Object 引用场景的根节点。
- **sceneParent**: Object 引用父场景。

它们构建出来的节点树的基本结构如下：

    +=========+              +========+                +=======+
    |  Scene  | --> root --> | Object | --> traits --> | Trait |
    +=========+              +========+                +=======+

Armory 引擎在 armory.trait 空间下定义了大量扩展类型，当然，其中也包括，CanvasScript，
WasmScript，DebugConsole 等等核心扩展类型。

当设置对象的属性面板，并且将一个 trait 附着在对象 Armory Traits 列表，那么这个 trait 就
有了相应的归属者，而这个对象就称为 trait's owner，通过 trait.object 属性引用，也就对应
逻辑节点中的**自引用节点** `Self Object`。

Blender 逻辑节点编辑器中所有节点功能都由 Armory Blender 插件代码实现，在游戏执行时则使用
Armory 框架的代码，即对应 `arm.logicnode` 和 `armory.logicnode` 两套代码，前者属于
Python 脚本，后者是 Haxe 脚本。

两套代码在类型命名上，基本可以保持一致的对应关系，但也有例外，比如 Scene 逻辑节点分类下的:
Add Object to Collection 相应的 Haxe 类型是 AddObjectToGroupNode，并且标明的分类
也可能不一致。但是，类型名字按代码约定，Python 脚本文件名和 bl_idname 字段内容带有 `LN_`
前缀，Haxe 代码定义的类型则去掉前缀。

```py,ignore
# armsdk\armory\blender\arm\logicnode\__init__.py
def init_categories():
    """Register default node menu categories."""
    # ...
    arm_nodes.add_category('Camera', icon='OUTLINER_OB_CAMERA', section="data")
    arm_nodes.add_category('Material', icon='MATERIAL', section="data")
    arm_nodes.add_category('Light', icon='LIGHT', section="data")
    arm_nodes.add_category('Object', icon='OBJECT_DATA', section="data")
    arm_nodes.add_category('Scene', icon='SCENE_DATA', section="data")
    arm_nodes.add_category('Trait', icon='NODETREE', section="data")
    # ...

# armory\blender\arm\logicnode\scene\__init__.py
from arm.logicnode.arm_nodes import add_node_section

add_node_section(name='default', category='Scene')
add_node_section(name='traits', category='Scene')
add_node_section(name='collection', category='Scene')

# armory\logicnode\AddObjectToGroupNode.hx
# armory\blender\arm\logicnode\scene\LN_add_object_to_collection.py
class AddObjectToGroupNode(ArmLogicTreeNode):
    """Add Object to a collection."""
    bl_idname = 'LNAddObjectToGroupNode'
    bl_label = 'Add Object to Collection'
    arm_section = 'collection'
    arm_version = 1
```

Armory 构架、Iron Trait 事件回调，以及相关属性、程序与逻辑节点的对照关系摘要如下，为了制表
方便使用，某些名称可能会采用简略表达，比如 OnAppStateNode 表示 OnApplicationStateNode：

|   Haxe Lib/Scripts  |   Logic Nodes   |           Haxe API Abstract            |
|---------------------|-----------------|----------------------------------------|
| notifyOnAdd()       | AddTraitNode    | trait is added to an object (owner)    |
| notifyOnInit()      | OnInitNode      | trait's owner is added to scene        |
| notifyOnRemove()    | RemoveTraitNode | trait's owner removed from scene       |
| notifyOnUpdate()    | OnUpdateNode    | update game logic here                 |
| notifyOnRender()    | -               | update rendering here                  |
| notifyOnRender2D()  | OnRender2DNode  | update 2D rendering here               |
| trait.object        | Self Object     | reference to trait's ownere            |
| iron.system.Time    | OnTimerNode     | duration -= iron.system.Time.delta     |
| iron.system.Time    | TimerNode       | repeatable timer event                 |
| iron.system.Tween   | SleepNode       | Tween.timer(time, done) and stop()     |
| armory.system.Event | SendGlobalEvent | Event.get(name) -> TEvent.onEvent()    |
| armory.system.Event | SendEventNode   | TEvent.mask == object.uid -> onEvent() |
| armory.system.Event | OnEventNode     | Event.add() and removeListener()       |
| armory.logicnode    | OnAppStateNode  | kha.System.notifyOnApplicationState()  |


大多数逻辑节点的作用都是数据处理，除了几何事件处理逻辑节点，还有就是 Logic Nodes 分类下有多个
节点类型用来处理控制流，这些属于是逻辑编程的核心节点：

1. `BranchNode` 逻辑节点有一个布尔值输入，按成立条件与否输出 True 和 False 两个控制流分支。
1. `SwitchNode` Value 输入值和多个 Case 进行比较，等值时输出对应的 Case 或者 Default 控制流。
1. `MergeNode` 和前面的节点相反，用于合并控制流，有两种执行模式：
    - Once Per Input：简单转发，多了一个索引号输出。如果一帧内多个输入控制流激活，激活相应输出。
    - Once Per Frame：如果一帧内多个输入控制流激活，只激活一次输出控制流。
1. `InvertOutputNode` - 反转控制流，如果输入的状态处于激活状态，那么输出非激活状态；
2. `AlternateNode` - 变换控制流，可以有多个控制流输出，每次变换地执行其中一个，按顺序循环执行；
3. `SequenceNode` - 序列控制流，按顺序执行输出的控件流；
4. `LoopNode` - 循环控制流，From 与 To 指定循环次数，执行 Loop 端口，结束时再执行 Done 端口；

`LoopBreakNode` 节点用来打断 `LoopNode` 这样的循环控制流，但是，和代码中直接使用 break
关键字不同，逻辑树中有它自身的机制打断循环控制流，需要设置 `tree.loopBreak = true;`。
`LoopContinueNode` 节点也类似，需要设置 `tree.loopContinue = true;`。

节点的使用是有条件，有些节点不能搭配在一起使用，因为没有作用。例如，Draw 分类下的所有节点都需要
和 `OnRender2DNode` 配合使用，只有打开一个 Canvas 2D 绘画上下文对象才可以进行绘画。并且
场景中需要在 Armory Scene Traits 或者 Armory Traits 列表中添加 Canvas UI 扩展，这样
才会触发 On Render2D 节点事件。

类似地，如果在一个 Draw 节点引用了其它数据，并且数据来源自其它的事件流，比如 `Keyboard` 事件流
中执行到 `MergeNode`，其输出的 Active Input Index 数据就不能直接输入到 Draw 分类的节点使用。
可以使用变量或都对象属性集中保存起来，再通过变量节点，或者获取属性值输出到 Draw 节点中使用。

使用 `SelectNode` 节点可以实现这样的逻辑，它不属于控制流处理节点，是数据选择节点，From Input
执行模式下，其节点当前输出的 Input 值会保持直到改变输出值，所以可以连接到其它事件流的节点上。

`SelectNode` 节点不属于控制流处理节点，它是数据选择节点，有两种执行模式，并且当前输出的 Input
值会保持直到改变输出值：

1. From Index 直接指定要输出的 Value 索引号；
2. From Input 直接通过控制流选择输出，Input 和 Value 一一对应成组；

`CaseIndexNode` 节点有一个 Compare 和多个 Value 输入进行比较，如果比较到相等值则输出索引号，
否则输出 null：

```haxe
    // armory\logicnode\CaseIndexNode.hx
    override function get(from: Dynamic): Int {
        var value = inputs[0].get();

        for (index in 0...inputs.length - 1) {
            if (Std.isOfType(value, Vec4) ? (value: Vec4).equals(inputs[index + 1].get()) : (value == inputs[index + 1].get())) {
                return index;
            }
        }
        return null;
    }
```

和时间关联的逻辑节点：

1. `OnTimerNode` 事件节点，可以设置 duration 和 repeat，使用 Time.delta 作为触发因素；
2. `TimerNode` 多功能定时器节点，增加事件流输入：Start、Pause、Stop 和输出控件流：Out、Done；
3. `SleepNode` 多功能 Tween 计时器，到时间就触发输出控件流；
4. `PulseNode` 逻辑节点，基于 Time.time() 和 tree.notifyOnUpdate(update) 的循环定时器，
    提供 Start 和 Stop 两个控件流输入，分别用于启用、停止定时器；


有些逻辑是无法通过节点直接表达的，需要迂回实现。比如，On Render2D 事件流中，希望在空格键按下的
时候才绘图指定内容，这就不直接将两种事件链接在一起，而需要将键盘事件保存到一个状态变量中。然后，
在绘画逻辑中检查状态变量并执行相应的任务。

变量或字符串节点保存数据，与使用对象的属性集保存数据是两种不同的方法，Variable vs. Properties。
使用变量或字符串节点，数据直接保存在节点上。比如，`IntegerNode` 定义一个 value 属性用来保存数据，
`StringNode` 也采用相同的方法。而对象属性集合的方式，则是在 owner 对象 properties 集合中保存，
通过它可以在多个逻辑树之间共享状态数据。

逻辑节点中与属性数据读写有关的节点：

1. `GetObjectProperty` 和 `SetObjectProperty` 读写对象的 Properties 属性集合；
2. `GlobalObjectNode` 节点在 iron.Scene.global.properties 属性集合读写数据：
3. 各种 Variable Node 直接在逻辑节点对象上的 value 属性保存数据，例如 `FloatNode`；
4. `GetHaxePropertyNode` 和 `SetHaxePropertyNode` 读写指定 Haxe Dynamic 对象属性：

逻辑节点树变量**Tree Variables**是最新添加的功能，它的目标很简单，但是实现代码感觉很混乱。
使用变量节点时，如果需要在多个位置使用同一个变量，一般就是拉一条条的线进行连接，在大量节点的
场合下显得混乱。Tree Variables 就是解决这个问题的，在一个节点树内，可以用多个变量节点引用
同一个变量，这就是节点树变量的用途。通过栅栏面板 Armory - Tree Variables 操作，可以将现有
变量节点提升为节点树变量，也可以解除变成一般变量节点，或者将变量引用赋给其它同类型变量节点。
实现代码参考 `ArmLogicVariableNodeMixin(ArmLogicTreeNode)`。节点树变量的侧栏面板
界面实现： `ARM_PT_Variables(bpy.types.Panel)`。
New logic tree variable system https://github.com/armory3d/armory/pull/2439

    |   |-- arm\logicnode
    |   |   |-- arm\logicnode\__init__.py
    |   |   |-- arm\logicnode\arm_nodes.py
    |   |   |-- arm\logicnode\tree_variables.py 节点树变量

逻辑节点有很多需要设置 Object 属性，默认留空表示使用 **owner** 对象，在逻辑树执行时会自动配置好。
比如 `SetObjectProperty` 节点没有设置 Object 属性，使用默认值，那么在生成的逻辑树类型定义
中就会包含类似以下的代码。`ObjectNode` 相当是一个代理，它的 `get()` 方法检查到使用了默认值，
就会返回 tree.object，也即是 owner 对象：

```haxe
    package arm.node;

    import armory.logicnode.LogicNode;
    import armory.logicnode.ObjectNode;
    import armory.logicnode.SetPropertyNode;
    import armory.logicnode.FunctionNode;
    import armory.logicnode.FunctionOutputNode;
    import armory.logicnode.LogicTree;

    @:access(armory.logicnode.LogicNode)@:keep
    class CaseIndex extends LogicTree {

        var functionNodes:Map<String, FunctionNode>;

        var functionOutputNodes:Map<String, FunctionOutputNode>;

        public function new() {
            super();
            this.functionNodes = new Map();
            this.functionOutputNodes = new Map();
            notifyOnAdd(add);
        }

        override public function add() {
            var _SetObjectProperty = new SetPropertyNode(this);
            _SetObjectProperty.preallocInputs(4);
            _SetObjectProperty.preallocOutputs(1);
            LogicNode.addLink(new ObjectNode(this, ""), _SetObjectProperty, 0, 1);
        }
    }
```

为了在逻辑节点与 Haxe 脚本之间交换数据，使用 `GlobalObjectNode` 节点的属性，对应脚本对象：

    iron.Scene.global.properties

Set Haxe Property 和 Get Haxe Property 也用于属性的读写，但是使用 Reflection API，
输入对象是一个 Dynamic 类型。这两个节点就是直接对 Haxe 对象属性的读写，而不是 Properties
集合中的属性。可以用它们来设置 Iron Object 的旋转，先用 `GetHaxePropertyNode` 获取
transform 属性，再使用 `SetHaxePropertyNode` 设置转换矩阵的 rot 属性完成旋转操作：

```py
    Reflect.setProperty(object, property, value);
    Reflect.getProperty(object, property);
```

与代码或表达式编写有关的节点：

1. `ScriptNode` 和 `ExpressionNode` 可以用来执行 Haxe 脚本，但需要 Haxe Script 类库支持；
2. `MathExpressionNode` 输入 2 ~ 10 个值和一个算式，内置 `Formula` 解释器执行算式；

`MathExpressionNode` 不依赖外部模块，内置数学算式语法分析工具，但只支持常用的计算相关的功能，
+ - * / ^ % 以及 abs ln sin cos tan cot asin acos atan atan2 log max min 常用函数，
只使用浮点数据类型。 其中 % 表示求余运算，在代码中可以用它截取浮点的小数，但在节点中不能，因为有
小数浮点误差，还有更好的小数点截取方式，比如 Ceil(a * 1000)/1000：

        1.12345 - 1.12345 % 0.001

并且谨慎使用它，可能因为输入数据错误导数据流致相关节点中断执行，以下就是 `Formula` 解析出错一例。
当输入数据出现非数值，或者 NaN 的情况下就会导致逻辑节点执行失败：
armsdk\armory\Sources\armory\logicnode\MathExpressionNode.hx:1903

```sh
Trace: Error: [object Object]
    at Function.thrown (<anonymous>:11492:12)
    at Function.parseString (<anonymous>:4078:27)
    at armory_logicnode_MathExpressionNode.get (<anonymous>:8758:39)
    at armory_logicnode_CanvasSetTextNode.run (<anonymous>:1061:41)
    at armory_logicnode_OnRender2DNode.runOutput (<anonymous>:960:19)
    at armory_logicnode_OnRender2DNode.onRender2D (<anonymous>:8900:8)
    at Function.render2D (<anonymous>:19627:6)
    at render (<anonymous>:19616:12)
    at Function.render (<anonymous>:40548:4)
    at renderCallback (<anonymous>:40691:14)
Trace: Error: End before you begin
    at Function.thrown (<anonymous>:11489:12)
    at kha_graphics4_Graphics2.begin (<anonymous>:61529:25)
    at Function.render2D (<anonymous>:19617:19)
    at render (<anonymous>:19613:12)
    at Function.render (<anonymous>:40545:4)
    at renderCallback (<anonymous>:40688:14)
```

`ScriptNode` 和 `ExpressionNode` 可以用来执行 Haxe 脚本，需要 Haxe Script 类库支持，
它实现了 Haxe language 的一个子集，提供了 `Parser` 和 `Interp`。虽然 Haxe 到处是表达式，
但是这两个节点中不能使用受限的功能，`ExpressionNode` 就不能使用 Std.random(10) 或 trace(this) 等等。只能是纯计算的表达式，例如，以下这句就可以，没有外部引用不会产生异常：

    var a = 1; trace(1 + a); a++;

注意，编写代码或表达式时双引号的使用，因为引擎只是简单地将内容内嵌到生成的逻辑节点树类定义文件中，
如果直接编写 "99 + 1" 这样的表达式，就会因为双引号配对导致语言错误。

```haxe
    var expr = "var x = 4; 1 + 2 * x";
    var parser = new hscript.Parser();
    var ast = parser.parseString(expr);
    var interp = new hscript.Interp();
    parser.allowJSON = true;
    parser.allowTypes = true;
    interp.variables.set("Math", Math);
    interp.variables.set("Std", Std);
    trace(interp.execute(ast));
```

表达式节点 `ExpressionNode` 可以用来执行一些语句，执行结果通过节点的 Result 端口输出。
因为 Armory 引擎使用 Haxe 脚本代码，可以通过修改 armsdk 中的代码来改变 Armory 的行为，
比如在 ScriptNode 代码文件中添加调试代码到 `run(from: Int)` 方法，看看是否已经启用了
hscript 模块。默认状态没有启用 hscript，总是输出 null，并且也不会提示。添加以下代码就可以
在缺失相关模块功能支持时，提示用户安装和启用 hscript 模块：

```haxe
    #if hscript
    // ...
    #else
    trace("""
        ScriptNode need hscript library!
        # https://github.com/HaxeFoundation/hscript
        haxelib install hscript 2.5.0
        haxe -m Main --interp --library hscript

        # Put these js snippet in Blender Text Editor, then set to Append Khafile
        project.addLibrary(\"C:/HaxeToolkit/haxe/lib/hscript/2,5,0\");
        project.addDefine('hscript');
    """);
    #end
```

安装 hscript 模块，然后再设置 Armory Project - Modules - Append Khafile 添加构建
脚本片段，通过 addLibrary() 引入模块，并且定义相应的符号定义，启用 hscript 脚本执行功能。
设置不一定会立即生效，需要 Render - Armory Player - Clear 清理掉缓存文件。

逻辑节点中有三各和函数定义、调用相关的节点：

1. `CallFunctionNode` 调用函数节点，调用 Trait/Any 端口中指定对象中定义的 Function。
2. `FunctionNode` 定义可重用的函数供 [Call Function] 节点调用，需要与函数输出节点配合使用。
3. `FunctionOutputNode` 给指定的 `FunctionNode` 节点设置返回值。

在生成的 `LogicTree` 类定义中，有两个专用的 Map 类型的属性用来管理函数节点的连接配置等等信息。
`FunctionNode` 节点定义的函数，比如 MyFun 就会对应生成代码文件中的一个同名的函数：

```haxe
    var functionNodes:Map<String, armory.logicnode.FunctionNode>;
    var functionOutputNodes:Map<String, armory.logicnode.FunctionOutputNode>;

    public function MyFun(arg0:Dynamic) {
        var functionNode = this.functionNodes["_Function"];
        functionNode.args = [];
        functionNode.args.push(arg0);
        functionNode.run(0);
        return this.functionOutputNodes["_FunctionOutput"].result;
    }
```

`CallFunctionNode` 调用函数节点通过 [Reflect] API 去调用 Trait/Any 端口中指定的对象中
定义的函数。调用函数节点首先检查对象是否存在 Function 输入端口指定名称的函数，如果存在就发起调用，
并且将输入的参数传递给待调用的函数。函数返回值暂存于 result 变量中，等等待下游节点来获取取。如果
`FunctionNode` 不与 `FunctionOutputNode` 节点相连，那么调用函数时，函数输出值就不能通过
储到 functionOutputNodes 这个映射变量内的 FunctionOutputNode.result 获取。由于逻辑节点
的设计需要，当然不能直接在 `FunctionNode` 节点中实现数据保存的逻辑。因为需要在两个节点之间
提供可以连接的机会，才使用得函数节点有被添加功能定义的可能。

另外，因为调用函数节点是直接在 Trait/Any 端口中指定的对象中查找相关的函数，所以这个端口就应该
输入一个 `Self Trait`。通常是 LogicTree，因为逻辑节点的方法会在它的生成代码中定义。

```haxe
    package armory.logicnode;

    import iron.object.Object;

    class  extends LogicNode {

        var result: Dynamic;

        public function new(tree: LogicTree) {
            super(tree);
        }

        override function run(from: Int) {
            var object: Dynamic = inputs[1].get();
            if (object == null) return;

            var funName: String = inputs[2].get();
            var args: Array<Dynamic> = [];

            for (i in 3...inputs.length) {
                args.push(inputs[i].get());
            }

            var func = Reflect.field(object, funName);
            if (func != null) {
                result = Reflect.callMethod(object, func, args);
            }

            runOutput(0);
        }

        override function get(from: Int): Dynamic {
            return result;
        }
    }
```



## 🐥 Iron Scene Structure - Materials

* Graphics
  * [Materials](https://github.com/armory3d/armory/wiki/materials)
* Code
  * [Find objects in the scene](https://github.com/armory3d/armory/wiki/Find-objects-in-the-scene)
* Engine Development
  * [Render Path](https://github.com/armory3d/armory/wiki/renderpath)

Armory 只提供了三个设置材质属性的节点，可以设置 `RGB`, `Value` 和 `Image Texture` 三种值。
官方教程 Material parameters 演示了两种材质属性修改方法，一是使用逻辑节点，二是使用 Haxe
脚本，这种方式更灵活，可以实现更多功能。

    armory_examples-22.06\material_params\Sources\arm\MyTrait.hx

示例场景中，只含有三个 Cube，它们材质设置如下：

1. Cube.001 设置了一个同名的 **RGB** 节点连接 Diffuse BSDF 着色器；
2. Cube.002 设置了一个同名的 **Image Texture** 节点连接 Diffuse BSDF 着色器；
3. Cube.003 设置了一个同名的 **Value** 节点连接 Checker Texture，再接 Diffuse BSDF 着色器；

除了 Object 属性可以留空使用 [owner] 对象，其它都需要提供相应的值。材质可以使用 `Material`
或者使用 `GetMaterialNode` 节点获取。

使用逻辑节点对材质进行编程，这些材质设置的重点是节点名称，可以修改节点名称，只需要在逻辑编辑器
中使节点中 **Node** 属性值与材质设置的节点名称一致。并且，要在材质侧栏面板中激活属性才能使用：

    Logic Node Editor - Properties - Armory Material Node - Parameter

目前支持的材质节点数量有限，除了以上三个之外，比如 Checker Texture 等等的程序化纹理就不支持。

示例中，在场景属性面板附加了一个 `NodeTree` 逻辑节点树，和一个 `MyTrait` 脚本扩展。逻辑节点树
使用了键盘事件 Keyboard，鼠标事件 Mouse，触屏事件 Touch 等事件节点，然后合并到 Merge 节点，
只要任何一个事件触发就支执行后续的材质设置逻辑。

默认启用脚本扩展，轮番切换纹理图像。调用 `Time.time()` -> `kha.Scheduler.time()` 获取到
引擎当前的已运行时间作为变量。本来预期示例中 REB 和 Value 两个材质属性也应该生效，但是在 Links
回调函数中并没有获取到相应参数的回调。而逻辑节点通过 `UniformsManager` 设置的材质属性却可以生效。
多功能节点分组下，还有一个 `Get Application Time` 节点，还可以可以获取前后两帧的时间差：

```haxe
    class TimeNode extends LogicNode {

        override function get(from: Int): Dynamic {
            if (from == 0) return iron.system.Time.time();
            else return iron.system.Time.delta;
        }
    }
```

Iron Uniforms `externalVec3Links` 这些变量是在外部初始化的，具体是 Armory Uniforms 负责。
Iron Uniforms API 执行时有一个逻辑，比如说 `setObjectConstant()` 方法中设置材质颜色，参数
类型条件是 c.type == "vec3"，当它从其中一个回调函数获取到了值，那么就会忽略其它的回调函数。

因此，当材质节点 RGB 可以直接提供数据，那么 `externalVec3Links` 后续的回调函数就被跳过了。
但是 RGB 节点本身又不能设置 null，除非可以将用户的回调函数放到材质节点的数据输出之前。其中一个
方法就是使用 `UniformsManager`。

为了在 Haxe 脚本中实现颜色的不断更新随机值，以下示例代码的基础上，增加了 color 变量，并通过
`UniformsManager` 去注册相应的着色器常量 Links 函数。

```haxe
    package arm;

    import iron.math.Vec4;
    import iron.object.Object;
    import iron.object.Uniforms;
    import iron.data.Data;
    import iron.data.MaterialData;
    import iron.system.Time;

    import iron.object.MeshObject;
    import armory.trait.internal.UniformsManager;

    class MyTrait extends iron.Trait {

        var tex1:kha.Image = null;
        var tex2:kha.Image = null;
        var color: Vec4;

        public function new() {
            super();
            notifyOnInit(() -> {
                // Register link callbacks
                Uniforms.externalVec3Links.push(vec3Link);
                Uniforms.externalFloatLinks.push(floatLink);
                Uniforms.externalTextureLinks.push(textureLink);

                color = new Vec4(Math.random(), Math.random(), Math.random());
                var cube: MeshObject = cast iron.Scene.active.getChild("Cube.001");
                var mat: MaterialData = cube.materials[0];
                UniformsManager.setVec3Value( mat, cube, "RGB", color );
            });
            Data.getImage("tex1.png", img -> tex1 = img );
            Data.getImage("tex2.png", img -> tex2 = img );
        }

        function vec3Link(object:Object, mat:MaterialData, link:String):Vec4 {
            // object - currently bound object
            // mat - currently bound material
            // link - material node name
            if (link == "RGB") {
                var t = Time.time();
                return new Vec4(Math.sin(t) * 0.5 + 0.5, Math.cos(t) * 0.5 + 0.5, Math.sin(t + 0.5) * 0.5 + 0.5);
            }
            return null;
        }

        function floatLink(object:Object, mat:MaterialData, link:String):Null<kha.FastFloat> {
            if (link == "Value") {
                var t = Time.time();
                return Math.floor(t);
            }
            return null;
        }

        function textureLink(object:Object, mat:MaterialData, link:String):kha.Image {
            if (link == "Image Texture") {
                color.x = Math.random();
                color.y = Math.random();
                color.z = Math.random();
                var t = Time.time();
                return Math.sin(t) > 0 ? tex1 : tex2;
            }
            return null;
        }
    }
```

掌握了通用的逻辑节点功能后，接下来就要使用它们来操作场景的对象，包括动画、导航、网络，以及对象材质，
Trait 扩展设置、物理系统、声音，Canvas 2D 画面绘画，甚至是后期处理，Render Path 深入引擎渲染。

这些操作免不了需要翻开源代码来操作，因为官方提供的 API 文档实是不如直接打开源代码来得更有效果，
单看 API 文档，虽然知道它存在目的是做什么，但依然会出现无法理解或琢磨出 API 应该怎么使用的情况。
当然，这主要原因是图形学知识点的缺失，通过代码阅读在一定程度上可以弥补。

就如逻辑节点中，设置灯光就需要使用 Iron LightObject 对象，这就涉及光照技术，如果有良好的图形学
基础，那么很多功能函数基本上看一眼就知道可以用它来干什么了。比如说以下代码片段提供了注解，那么在
掌握 GLSL 着色器编程基础的条件下，很快就可以领悟，这些变量会传递到着色器程序中作为 [uniforms]。

```haxe
    // Data used in uniforms
    public var tileOffsetX: Array<Float> = [0.0];
    public var tileOffsetY: Array<Float> = [0.0];
    public var tileScale: Array<Float> = [1.0];
```

比如，灯光对象 `LightObject` 的构建器中可以看到灯光模型数据保存在 `LightData` 数据属性，包括
颜色、强度、类型等等。其中 **rp_shadowmap** 是一个编译命令定义的符号，定义在 khafile.js 脚本，
通过它的前缀也可以知道它是 Render Path 相关的功能，这是定制游戏渲染引擎的技术细节。需要有相当的
基础才能完全掌握这些代码存在的目的：

```haxe
    public function new(data: LightData) {
        super();

        this.data = data;

        var type = data.raw.type;
        var fov = data.raw.fov;

        if (type == "sun") {
            #if rp_shadowmap
            if (corners == null) {
                corners = [];
                for (i in 0...8) corners.push(new Vec4());
            }
            P = Mat4.identity();
            #else
            P = Mat4.ortho(-1, 1, -1, 1, data.raw.near_plane, data.raw.far_plane);
            #end
            #if arm_shadowmap_atlas
            this.shadowMapScale = 1.0;
            #end
        }
        else if (type == "point" || type == "area") {
            P = Mat4.persp(fov, 1, data.raw.near_plane, data.raw.far_plane);
        }
        else if (type == "spot") {
            P = Mat4.persp(fov, 1, data.raw.near_plane, data.raw.far_plane);
        }

        Scene.active.lights.push(this);
    }
```

又难一点的是设置对象的材质，首先要了解模型由顶点构成的面片组成，顶点除了 3D 空间坐标之外，还有
UV 纹理映射坐标，纹理贴图就是最基本的一种材质属性。面片又可以设置不同材质，这就产生了材质插槽的
概念，Material Slots，一个模型中可以有多个插槽，每个插槽设置一种材质，对应应于目标面片。

给一个几何对象设置材质是相对容易的，只需要指定 MesshObject 或 DecalObject，再指定材质对象。
但是设置指定对象的材质的参数，操作步骤就显得有点繁琐。以下是材质相关的节点介绍：

1. `MaterialNode` 节点只有一个属性用于选定场景中的材质，输出 `MaterialData`；
2. `GetMaterialNode` 节点输出的是指定 `MaterialData`，材质的数据模型；
3. Set Object Material `SetMaterialNode` 节点由新版本 `SetMaterialSlotNode` 取代。
4. `SetMaterialRgbParamNode` 设置对象材质的颜色属性，使用数据类型 `iron.math.Vec4`；
5. `SetMaterialValueParamNode` 设置对象材质的数值属性，使用数据类型 `Null<kha.FastFloat>`；
6. `SetMaterialImageParamNode` 设置对象材质的纹理属性，使用数据类型 `kha.Image`；

变更全局材质设置，就修改 **Get Scene Root** 输出的场景对象，否则使用节点对象列表中的对象。
节点还有一个**Per Object**模式选择，如果激活它，就表示不对全局修改材质设置，只修改指定对象。

在设置参数，`Object` 和 `Material` 分别指要操作的对象和其材质对应的 Solt，但是 `Node` 这个
参数就让人难以琢磨，是什么鬼？材质编辑器中，可以给几何体设置任意的材质节点，即对应脚本中材质属性。
每个材质节点的标题都会显示节点的名称，也可以在侧栏面板中编辑和复制它。在逻辑节点编辑器中使用材质
属性设置节点时，就可以使用这个节点名称。在编程中，`Node` 对应的就是 `MaterialData` 属性名称。

材质属性设置都会使用到 `UniformsManager`，这是一个着色器 uniforms 常量管理工具，它是相当
两种编程语言之间的桥梁，Haxe 代码中的数据通过它传递给 GLSL 着色器中的 uniforms 常量。反过来，
也可以从着色器中获取相关的值。暂且称之为 **GLSL 常量管理器**。

    Armory Sources
    |-- armory.trait
    |   |-- armory.trait.internal
    |   |   |-- armory\trait\internal\UniformsManager.hx
    |-- armory.object
    |   `-- armory\object\Uniforms.hx

    Iron Sources
    |-- iron.object
    |   `-- iron\object\Uniforms.hx

GLSL 常量管理器和 `Uniforms` 类型搭配使用，注意这个工具类型有两个定义。GLSL 常量管理器和
armory.object.Uniforms 和都需要调用 iron.object.Uniforms 提供的数据。后者使得了一系列
数组存储各种数据链接关系，这些静态数组由 armory.object.Uniforms 进行初始化以及管理。在这里
可以看到 Haxe 的另一种怪异语法，数组元素是长长的映射路径。另一种怪异的语法是构造函数在只有一条
语句的情况下，可以省略花括号，这是一种偷懒语法： HaxeManual/AbstractArrayAccessOrder.hx

```haxe
    // armsdk\iron\Sources\iron\object\Uniforms.hx
    public static var externalTextureLinks: Array<Object->MaterialData->String->kha.Image> = null;
    public static var externalMat4Links: Array<Object->MaterialData->String->Mat4> = null;
    public static var externalVec4Links: Array<Object->MaterialData->String->Vec4> = null;
    public static var externalVec3Links: Array<Object->MaterialData->String->Vec4> = null;
    public static var externalVec2Links: Array<Object->MaterialData->String->Vec4> = null;
    public static var externalFloatLinks: Array<Object->MaterialData->String->Null<kha.FastFloat>> = null;
    public static var externalFloatsLinks: Array<Object->MaterialData->String->Float32Array> = null;
    public static var externalIntLinks: Array<Object->MaterialData->String->Null<Int>> = null;

    // armsdk\armory\Sources\armory\object\Uniforms.hx
    public static function register() {
        iron.object.Uniforms.externalTextureLinks = [textureLink];
        iron.object.Uniforms.externalVec2Links = [vec2Link];
        iron.object.Uniforms.externalVec3Links = [vec3Link];
        iron.object.Uniforms.externalVec4Links = [];
        iron.object.Uniforms.externalFloatLinks = [floatLink];
        iron.object.Uniforms.externalIntLinks = [];
    }

    public static function textureLink(object: Object, mat: MaterialData, link: String): Null<kha.Image>
    public static function vec3Link(object: Object, mat: MaterialData, link: String): Null<iron.math.Vec4>
    public static function vec2Link(object: Object, mat: MaterialData, link: String): Null<iron.math.Vec4>
    public static function floatLink(object: Object, mat: MaterialData, link: String): Null<kha.FastFloat>
```

在首次遇到这种语法结构时，首选是搜索引擎查资料。但其实作为一个小众编程语言，并没有太多实用的信息，
更别说涉及到细节的 Haxe 教程。所以还是在官方的 Haxe Manual 中找资料，最好使用 MD 源文档，
搜索的效率更高。如果已经安装 [RunSnippet Sublime Text Plugin](https://github.com/jimboyeah/run-snippet)，
并且在 Sublime 中阅读此文档，那么直接将光标放在 [Language Features] [Function Bindings]
这些关键字上，按 F9 就可以跳转到主题内容中，根据不用再去搜索。

Haxe 语言中的 Arrow Function 使用 -> 箭头表示匿名函数，如下所示：

```haxe
    // HaxeManual\assets\ArrowFunction.hx
    // HaxeManual\assets\Bind.hx
    var myConcat = (a:String, b:String) -> a + b;
    var myChar = (a:String, b:Int) -> (a.charAt(b) : String);
    var oneArgument = number -> number + 1;
    var noArguments = () -> "foobar";
```

Haxe 数组声明中这种连续的 -> 会让人有种误解，学习过链表数据结构的人可能直观地认为这就是链表结构，
但其实它是函数原型的表达。以下程序演示了如何使用这种怪异的数组声明表达：

```haxe
    // haxe -cp ./path/to/MainAWeird.hx -m MainAWeird --interp
    class MainAWeird {
      static var Links: Array<String->Dynamic> = [];
      static function main() {
        Links.push( s -> s.toLowerCase() );
        var map = new haxe.ds.IntMap<String>();
        var f = map.set.bind(_, "12");

        $type(Links);   // Array<String -> Dynamic>
        $type(map.set); // Int -> String -> Void
        $type(f);       // Int -> Void

        trace(Links);   // [#fun]
        trace(Links[0]("BAD APPLE"));   // bad apple
        f(1);
        f(2);
        f(3);
        trace(map); // {1 => 12, 2 => 12, 3 => 12}
      }
    }
```

所谓 Links，就是一组材质处理函数的参数到材质属性数据的映射关系。Iron Uniforms 提供材质处理函数，
`UniformsManager` 或者 Armory Uniforms 提供映射关系，即 Links 静态变量中保存的一组函数，
回调函数在 `register()` 方法中设置。并由 Iron Uniforms API 在处理的过程中进行回调，因此
**Links** 也可以看作是一组回调函数，它们用来向着色器注入数据。参考官方示例 [Material shaders]。

以上所描述的关系可能显得有点乱，简化一下表达就是：Iron Uniforms 定义了一套材质处理函数的规范，
规范中提供一个回调接口，`UniformsManager` 或者 Armory Uniforms 都可以使用这个回调接口，
向里面注册回调函数，函数的入口参数都一致使用： Object->MaterialData->String，至于返回什么
数据就看是什么类型的 Links 集合。下表显示了它们的对应关系：

|      UniformsManager      | Armory Uniforms |               Iron Uniforms               |
|---------------------------|-----------------|-------------------------------------------|
| -           -             | -               | setObjectConstant()  externalIntLinks     |
| floatsMap   floatLink()   | floatLink()     | setObjectConstant()  externalFloatLinks   |
| -           -             | -               | setObjectConstant()  externalFloatsLinks  |
| -           -             | vec2Link()      | setObjectConstant()  externalVec2Links    |
| vectorsMap  vec3Link()    | vec3Link()      | setObjectConstant()  externalVec3Links    |
| -           -             | -               | setObjectConstant()  externalVec4Links    |
| texturesMap textureLink() | textureLink()   | setObjectConstants() externalTextureLinks |
|                           |                 | setObjectConstant()  externalMat4Links    |

Iron Uniforms 有三对核心方法，它们在每一帧都会被 `RenderPath` 调用以更新着色器的数据，并且
内部还会对所有已经登记的 Links 函数进行回调。对于每一个材质参数，回调所有类型对应的 Links 函数，
需要判断 link 参数传递的值，是否与目标的属性值一致，然后再作处理。如果不一致，则返回 `null`
告诉引擎不需要理会当前值。如果回调函数已经返回一个值，那么同类的其它回调函数就会被跳过。

```haxe
    public static function setContextConstants(g: Graphics, context: ShaderContext, bindParams: Array<String>)
    public static function setObjectConstants(g: Graphics, context: ShaderContext, object: Object)
    static public function setMaterialConstants(g: Graphics, context: ShaderContext, materialContext: MaterialContext)

    static function setContextConstant(g: Graphics, location: ConstantLocation, c: TShaderConstant): Bool
    static function setObjectConstant(g: Graphics, object: Object, location: ConstantLocation, c: TShaderConstant)
    static function setMaterialConstant(g: Graphics, location: ConstantLocation, c: TShaderConstant, matc: TBindConstant)
```

Armory 引擎的核心就是 [Render Path]，这是一个可编程的设计，用户可以创建自己的渲染路径，实现
一个 `RenderPathCreator` 类并将代码放置到项目下的目录中：

    Libraries\lib_name\Sources\celshade\renderpath\RenderPathCreator.hx
    Sources\arm\renderpath\RenderPathCreator.hx

关于驱动接口可以参考：armsdk\armory\blender\arm\api.py

虽然 API 文档中对材质节点中的 Node 参数有说明，但依然让人有一种“材质内部有什么节点？”的疑惑。

    @input Node: Name of the parameter.

在设置参数，`Object` 和 `Material` 分别指要操作的对象和其材质对应的 Solt，但是 `Node` 这个
参数就让人难以琢磨，是什么鬼？材质编辑器中，可以给几何体设置任意的材质节点，即对应脚本中材质属性。
每个材质节点的标题都会显示节点的名称，也可以在侧栏面板中编辑和复制它。在逻辑节点编辑器中使用材质
属性设置节点时，就可以使用这个节点名称。在编程中，`Node` 对应的就是 `MaterialData` 属性名称。

这个参数是一个字符串值，会经由 `UniformsManager` API 的 link 参数传入，用于读写材质
的相应属性数据。所以，材质节点中的 **Node** 这个字符串参数就是 `MaterialData` 的属性名称。
如果没有理解这层关系，那么根本无法理解材质属性设置节点的使用。

GLSL 常量管理器中管理三种着色器常量，登记在相应的多级 Map 数据容器内，对象作为一级映射的 Key，
材质数据对象 `MaterialData` 作为二级映射的 Key，使用字符串作为第三级映射的 Key。这三种数据
对应有三个回调方法，它们由 Iron Uniforms 类型进行回调，以获取相应的材质属性数据：

```haxe
    // class UniformsManager extends Trait{
    static var floatsMap = new Map<Object, Map<MaterialData, Map<String, Null<kha.FastFloat>>>>();
    static var vectorsMap = new Map<Object, Map<MaterialData, Map<String, Vec4>>>();
    static var texturesMap = new Map<Object, Map<MaterialData, Map<String, kha.Image>>>();

    enum abstract UniformType(Int) from Int to Int {
        var Float = 0;
        var Vector = 1;
        var Texture = 2;
    }

    static function register(type: UniformType) {
        Uniforms.externalFloatLinks.push(floatLink);
        Uniforms.externalVec3Links.push(vec3Link);
        Uniforms.externalTextureLinks.push(textureLink);
    }
```

材质节点 Python 代码片段参考：

```py,ignore
class MaterialNode(ArmLogicVariableNodeMixin, ArmLogicTreeNode):

    @property
    def property0_get(self):
        if self.property0 == None:
            return ''
        if self.property0.name not in bpy.data.materials:
            return self.property0.name
        return arm.utils.asset_name(bpy.data.materials[self.property0.name])
```

另外，还需要掌握 `MeshObject` 对象的组织结构，materials 属性就是材质插槽，就是一个向量列表。
向量列表中保存的 `MaterialData` 就是材质的数据模型。`DecalObject` 装饰器对象用于表面修饰，
也使用到材质的数据模型，但只有一个材质。前缀 T 开头命名的数据类型定义多数都在 SceneFormat.hx，
这是 Iron 的场景文件 .arm 格式定义。也就是说，了解 Iron 对象的层次结构，还必须对 .arm 场景
文件格式有一定了解：

```haxe
    // iron\Sources\iron\object\MeshObject.hx
    class MeshObject extends Object {
        public var data: MeshData = null;
        public var materials: Vector<MaterialData>;
        public var materialIndex = 0;

    // iron\Sources\iron\object\DecalObject.hx
    class DecalObject extends Object {
        public var material: MaterialData;

    // iron\Sources\iron\data\MaterialData.hx
    class MaterialData {
        static var uidCounter = 0;
        public var uid: Float;
        public var name: String;
        public var raw: TMaterialData;
        public var shader: ShaderData;
        public var contexts: Array<MaterialContext> = null;

    class MaterialContext {
        public var raw: TMaterialContext;
        public var textures: Vector<kha.Image> = null;
        public var id = 0;
        static var num = 0;

    // iron\Sources\iron\data\SceneFormat.hx
    // iron\Sources\iron\system\ArmPack.hx
    #if js
    typedef TMaterialData = {
    #else
    @:structInit class TMaterialData {
    #end
        public var name: String;
        public var shader: String;
        public var contexts: Array<TMaterialContext>;
        @:optional public var skip_context: String;
        @:optional public var override_context: TShaderOverride;
    }

    #if js
    typedef TMaterialContext = {
    #else
    @:structInit class TMaterialContext {
    #end
        public var name: String;
        @:optional public var depth_read: Null<Bool>;
        @:optional public var bind_constants: Array<TBindConstant>;
        @:optional public var bind_textures: Array<TBindTexture>;
    }
```

以材质颜色、纹理属性设置节点为例，`SetMaterialRgbParamNode`和`SetMaterialImageParamNode`
分别调用，`setVec3Value()` 和 `setTextureValue()` 方法将参数依 Links 映射集合声明的
Object->MaterialData->String 顺序传入 `UniformsManager`，由它逐级取得材质参数的属性引用，
并且将设置值存放到相应的映射容器中。

比如纹理赋值方法中的 **entry** 就是一个 `Map<String, kha.Image>` 容器，是材质属性映射关系。
Iron Uniforms `setObjectConstants()` 方法处理这些纹理数据，下表显示了它们的对应关系：

|      UniformsManager      | Armory Uniforms |               Iron Uniforms               |
|---------------------------|-----------------|-------------------------------------------|
| -           -             | -               | setObjectConstant()  externalIntLinks     |
| floatsMap   floatLink()   | floatLink()     | setObjectConstant()  externalFloatLinks   |
| -           -             | -               | setObjectConstant()  externalFloatsLinks  |
| -           -             | vec2Link()      | setObjectConstant()  externalVec2Links    |
| vectorsMap  vec3Link()    | vec3Link()      | setObjectConstant()  externalVec3Links    |
| -           -             | -               | setObjectConstant()  externalVec4Links    |
| texturesMap textureLink() | textureLink()   | setObjectConstants() externalTextureLinks |
|                           |                 | setObjectConstant()  externalMat4Links    |


```haxe
    // class UniformsManager extends Trait{
    // Method to set map Object -> Material -> Link -> Texture
    public static function setTextureValue(material: MaterialData, object: Object, link: String, value: kha.Image) {

        if (object == null || material == null || link == null) return;

        var map = texturesMap;

        var matMap = map.get(object);
        if (matMap == null) {
            matMap = new Map();
            map.set(object, matMap);
        }

        var entry = matMap.get(material);
        if (entry == null) {
            entry = new Map();
            matMap.set(material, entry);
        }

        entry.set(link, value); // parameter name, value
    }


    // class MaterialNode extends LogicNode {
    if (property0 != null) {
        iron.data.Data.getMaterial(iron.Scene.active.raw.name, property0, function(mat: MaterialData) {
            value = mat;
        });
    }


    // class SetMaterialRgbParamNode extends LogicNode {
    if(! perObject){
        UniformsManager.removeVectorValue(object, mat, link);
        object = Scene.active.root;
    }
    UniformsManager.setVec3Value(mat, object, inputs[4].get(), vec);


    // class SetMaterialValueParamNode extends LogicNode {
    if(! perObject){
        UniformsManager.removeFloatValue(object, mat, link);
        object = Scene.active.root;
    }
    UniformsManager.setFloatValue(mat, object, inputs[4].get(), value);


    // class SetMaterialImageParamNode extends LogicNode {
    if(! perObject){
        UniformsManager.removeTextureValue(object, mat, link);
        object = Scene.active.root;
    }
    iron.data.Data.getImage(img, function(image: kha.Image) {
        UniformsManager.setTextureValue(mat, object, inputs[4].get(), image);
    });
```



## 🐥 RenderTarget & Canvas UI

  * [Post-Processing](https://github.com/armory3d/armory/wiki/screen-effects)
* Engine Development
  * [Logic Nodes](https://github.com/armory3d/armory/wiki/logicnodes)
  * [Render Path](https://github.com/armory3d/armory/wiki/renderpath)
  * [Graphics](https://github.com/armory3d/armory/wiki/reference_graphics)
  * [API package descriptions](https://github.com/Kode/Kha/wiki/APIs)
  * [Reference](https://github.com/armory3d/armory/wiki/reference)
  * OpenGL ES之LUT（滤镜基准图） https://juejin.cn/post/6844904194713862152


Armory Engine 逻辑节点编程中 Graphics 处理的节点有四类：

- [Draw] 对画布绘制简易图形、图像纹理、曲线等等，配合 `On Render2D`、Canvas UI Trait 使用；
- [Canvas] 节点分类下用于 Armory2D 设计好的 Canvas UI 元素的交互，比如设置或获取文本；
- [Post-Process] 后期处理添加图像处理效果，比如 LUT 纹理，一方面提升画面质量，同时又减少渲染运算；
- [Render Path] 渲染路径，对游戏渲染引擎进行编程，定制渲染过程。

[LUT Textures] 是一种基于查表算法的图像后期处理技术，LUT 纹理图像就是一张颜色对照表，LUT 意思
是对纹理图像进行查表，Lookup Table，找到指定的色彩替换到原图像上形成新的图像输出。查表是一种
映射算法，比起引擎的渲染，效率极高。同时预配置不同的色彩卡可以得到不同的图像效果输出，操作流程可
标准化，使用十分方便。参考官方的示例 [render_colorgrading]。

配色表图片的本质就是将颜色方块进行二维化处理。假设 LUT 纹理图片分辨率为 512 * 512，划分为 8 * 8
的大格子，每个大格子中存有 64 * 64 个小格子，即用来存储色彩像素点。每个小格子 X 轴表示 R 通道
Y 轴表示 G 通道，取值范围 [0, 255]。剩下蓝色分量的 B 通道放在了大格子中，从左到右，从上到下，
最后将 RGB 三个分量叠加。一张颜色图片一功能储存 64 * 64 * 64 = 512 * 512 = 262144 种色彩。

以下示范使用逻辑节点创建进度条效果，添加一个 Canvas UI，只需要一个 CProgress_bar 进度条控件。
然后在 Armory Scene Traits 添加一个逻辑节点树，节点连接如下：

1. Event - `On Update` 事件流向 `Set Variable`，再流向 `Set Canvas Progress Bar`；
2. Variable - `Integer` 使用整数变量记录进度值；
3. 将整型变量节点连接到赋值节点的 Variable 端口，将其值经过 `Math` 加法运算后连接到赋值节点；
4. 将整型变量连接到 `Set Canvas Progress Bar` 控制进度条的显示；

进度条设置的 At 值如果超出 Max 范围，则会折回再开始绘制进度，相当于从零开始。

使用 Draw 分组下的逻辑节点，使用的是 Kha Graphics2 API，主要是 `GraphicsExtension` 和
`Graphics`。需要在 `On Render2D` 回调中使用，以确保它在画 Canvas 上下文，也就是需要在
Armory Traits 列表中添加 Canvas Trait 扩展使用，否则不会触发 `On Render2D` 事件：

     DrawRectNode must be executed inside of a render2D callback.
     If used in logic node, please consult its documentation.

另外，还要将 Canvas UI 扩展挂载到场景，或者活动相机上，当然挂载到对象 Armory Trait 扩展列表
也可以显示 UI 界面元素，但是逻辑节点的 UI 绘画相关操作不能使用它，并且引发异常。任何不配对的画布
上下文 `begin()` 和 `end()` 方法将导 kha.graphics4.Graphics2 触发致异常：

    throw "End before you begin";
    throw "Begin before you end";
    |   |   |-- armory\trait\internal\CanvasScript.hx

```haxe
    public static function getActiveCanvas(): CanvasScript {
        var activeCanvas = Scene.active.getTrait(CanvasScript);
        if (activeCanvas == null) activeCanvas = Scene.active.camera.getTrait(CanvasScript);

        assert(Error, activeCanvas != null, "Could not find a canvas trait on the active scene or camera");

        return activeCanvas;
    }
```

Draw Image 可以将图像纹理绘制到 Canvas 2D 画布上，注意设置图像路径，默认使用 Bundled 目录
存放资源文件，因为打包会碾平目录结构，所以不要使用子目录。Render - Armory Project 属性面板
设置了一个 Copy to Bundled 按钮，它可以将所有外部或其它目录中的资源复制到 Bundled 目录。
路径指定时就填入文件名，或者 //filename.jpg 这样的路径。

另一种方法是直接向 khafile.js 添加脚本配置，Armory Project - Modules - Append Khafile
指定一个脚本文件，Blender 文本编辑器可以创建脚本文件：

    project.addAssets("textures/**", { notinlist: true });

由于 Zui 没有布局容器概念，所有 Canvas UI 元素使用 XY 坐标加 Anchor 来确定如何放置。锚点属性
有两个维度，水平和竖直方向。对应 anchorH 和 anchorV 属性。所以注意设置好大小尺寸，配置锚点定位。
注意，旋转角度 Angle 使用的是弧度，不是 Degree。

    @input Left/Center/Right: Horizontal anchor point
        0 = Left, 1 = Center, 2 = Right
    @input Top/Middle/Bottom: Vertical anchor point
        0 = Top, 1 = Middle, 2 = Bottom

渲染目标 **Render Target** 是一种可以在运行时写入数据的纹理。从引擎的角度讲，渲染目标存储颜色、
法线以及 AO 等信息。从用户的角度讲，渲染目标可以视为第二个摄像机，用于捕捉图像并保存在内存中，
并将其设置为指定对象材质的参数。从文件存储关系上讲，渲染目标是内存中的图像，纹理文件是硬盘中的图像。
在不同平台下，`RenderTarget` 接口会使用不同的对象类型实现，比如 HTML5 对应：

    armsdk\Kha\Backends\HTML5-Worker\kha\Image.hx

以下是与渲染目标相关的逻辑节点：

1. `Draw Camera` 从指定摄影机的视图中渲染场景，并将渲染目标纹理按指定大小绘制到屏幕指定坐标上。
2. `Draw Camera to Texture` 将指定相机视图的纹理图像绘制到指定对象的指定材质的纹理上。
3. `Draw to Material Image` 用来绘画 `Create Render Target Node` 创建的 render target；

`Draw Camera to Texture` 节点代码中包含了自动创建渲染目标的功能，只需要为节点指定相机对象，
以及待绘制的目标对象，Object 属性可以留空，表示使用 owner 对象。节点一旦运行后，就会注册一个
渲染回调函数，所以不能持续触发 Start 控制流。渲染回调函数对 Render Target 对象进行绘画，
绘画内容将取代对象材质中的第一个上下文的第一个纹理，diffuse texture 或者 base color texture。

参考官方示范 render_to_texture，其代码和节点代码相比，多了一个切换相机 renderTarget 的步骤。
示范代码中则是一个相机镜头始终与一个新创建的 RenderTarget 对象绑定。

如果轮番切换渲染对象，在游戏开始运行时，首次渲染回调中可能获取到的是一个 null，也就还未为相机设置
渲染目标，需要设置渲染目标后，才能调用 `renderFrame()` 方法时得到纹理图像。如果场景中只有一个
相机，那么固定渲染目标后，内容始终不变，就像画面卡住一样。并且，可能由于一开始就是没任何内容，导致
相机渲染的图像始终全黑。

另外，World 材质属性设置会在编译时缓冲到环境贴图 env_World.jpg，例如使用纯色作为环境背景，
Background 节点的 Strength 调整对 Armory 无效，除非 `Armory Project -> Clean` 清理
项目缓存后，再重新编译。

如果没有绘制任务内容到 RenderTarget，那么将它赋予对象材质后，结果就会导致绘画纹理全黑。
从相机视角形成的图像，再绘制到 RenderTarget，再通过指定的材质纹理重现出来，这至少涉及两次绘图，
两绘制图像的尺寸比例不一致就会引起图像的变形。另外，相机拍摄得到的是 2D 纹理，重现到模型上又
经过 UV Map 的映射，这又是一个图像变换过程。并且，在持续的渲染中，相机拍摄到的新内容不断叠加，
这个复杂的过程会形成图像的递归渲染，最终效果不一定是相像中的一样。


armory_examples-22.06\render_to_texture\Sources\arm\MyTrait.hx


```haxe
class DrawCameraTextureNode extends LogicNode {

    var cam: CameraObject;
    var rt: kha.Image;

    public function new(tree: LogicTree) {
        super(tree);
    }

    override function run(from: Int) {
        switch (from) {
            case 0: // Start
                final o = inputs[3].get();
                final mo = cast(o, iron.object.MeshObject);
                final matSlot = inputs[4].get();

                final c = inputs[2].get();
                cam = cast(c, CameraObject);
                rt = kha.Image.createRenderTarget(iron.App.w(), iron.App.h());

                mo.materials[matSlot].contexts[0].textures[0] = rt; // Override diffuse texture

                tree.notifyOnRender(render);
                runOutput(0);

            case 1: // Stop
                tree.removeRender(render);
                runOutput(1);
        }
    }

    function render(g: kha.graphics4.Graphics) {
        final sceneCam = iron.Scene.active.camera;
        final oldRT = cam.renderTarget;

        iron.Scene.active.camera = cam;
        cam.renderTarget = rt;

        cam.renderFrame(g);

        cam.renderTarget = oldRT;
        iron.Scene.active.camera = sceneCam;
    }
}
```

Iron 框架定义的 SceneFormat 结构中，一个材质对象 `MaterialData` 包含多个材质上下文对象和
一个着色器数据对象，这样的类型层次结构设计都是为了着色器编程定制的：

1.  `MaterialContext` 材质上下文对象包装纹理数据；
2.  `ShaderContext` 着色器上下文对象包装着色器程序中需要引用的数据，以及符号定义；

iron\Sources\iron\object\MeshObject.hx
iron\Sources\iron\data\SceneFormat.hx
iron\Sources\iron\data\MaterialData.hx
iron\Sources\iron\data\ShaderData.hx

    .------------------.
    |    MeshObject    |
    '------------------'
      .raw
      |   .------------------.
      |-->| TMaterialData    |
      |   '------------------'
      .materials
      |   .------------------.
      |-->| MaterialData     |
      |   '------------------'
      |     .contexts
      |     |   .------------------.   .------------------.
      |     `-->| MaterialContext  |-->| TMaterialContext |
      |         '------------------'   '------------------'
      .sahder
      |   .------------------.
      `-->| ShaderData       |
          '------------------'
            |   .------------------.
            |-->| TShaderData      |
            |   '------------------'
            .contexts
            |   .------------------.   .------------------.
            `-->| ShaderContext    |-->| TShaderContext   |
                '------------------'   '------------------'


相机到纹理的绘制使用`Draw Camera to Texture`， 不需要指定材质。而绘制到材质节点是另一种使用
渲染目标的方式，`Draw to Material Image`  需要更多的参数，并且这个节点使用到的 API 也更
复杂，涉及了 `UniformsManager` 着色器常量管理器，以及 [Links] 着色器回调函数等等概念。如果
没有一点 Iron 框架的材质处理的基础，根本没有办法使用这个节点。

首先，`Create Render Target Node` 创建的 RenderTarget，并就应该使用 On Init 这样的
只执行一次事件去创建。RenderTarget 对象创建好并不直接返回供使用，而是将它交给着色器常量管理器
`UniformsManager` 进行统一管理，需要使用对应的资源时就通过 Links 回调函数获取，不同资源
有不同的回调函数，对于纹理材质就是 `textureLink()`。所以 `Draw to Material Image` 会
调用这个 API 获取纹理用来绘画。

其次，`Draw to Material Image` 节点是一个“开画布上下文”节点，所谓开画布上下文，即打开一个
画布上下文对象，就像 `On Render2D` 那样，然后接上各种绘画节点，对画布进行绘画。因为可以对画布
进行任意尺寸的绘制，所以内容可能会铺满整个游戏窗口。所绘制的纹理已经脱离具体几何体的边界约束，
可以将图像绘制到屏幕的任意位置。之所以还需要指定对象、材质等参数，是因为 Iron 框架中，渲染目标
需要依存于它们。

因为，RenderTarget 在转绘的过程中会有几何变换作用的影响，所以需要清楚这其中的关系。以简单的
节点连接为例：

1. `Create Render Target Node` 创建一个 32 x 32 大小的 RenderTarget；
2. `Draw to Material Image` 打开渲染目标做绘画准备，可以不连接到上一节点，但材质属性要一致；
3. `Draw Rect` 绘制一个 32 x 32 大小的矩形，那么就会刚好绘满整个 RenderTarget；

注意，绘制矩形设置为对心对齐 Center + Middle，对应值为 1，那么将会以 UV Map 的起点作为中心，
对于一个简单的 Plane 来说，只能绘制 1/4 区域，并且是下面左下角的 1/4。另外，要使用节点进行
材质纹理绘制，就需要材质编辑器中将 Image Texture 节点的文件移除，因为设置了文件资源，就有可能
优先于节点的绘制回调处理，导致节点中设置的 Link 回调函数失效。


在绘画节点分组下，有一个 `DrawImageSequenceNode` 节点，它可以将序列帧纹理图像逐帧地绘制，
同样，这种节点只需要 Start 一次触发就会循环地工作，只需要设置好图像名称的规则，如代码所示：

    iron.data.Data.getImage(imagePrefix + i + '.' + imageExtension, (image: Image) -> { })

文件名如果是 0001.jpg ~ 0111.jpg 这种可能就难一点，代码显示只能是 abc1.jpg ~ abc111.jpg
这种规则，填充 0 值这种没有考虑。扩展名也不需要句点，还有就是指定发绘画区域的大小和起点坐标。
从代码逻辑上看，Wait For Load 这个参数用来在完成加载后再绘制纹理图像，代码循环结构使用的是
`getImage()` 异步回调，循环结束后文件可能还在加载中。

`Set Material Image` 节点也是调用 `UniformsManager` 将指定的纹理图像注册。

使用 `UniformsManager` 和 Iron `Uniforms` 都可以注册着色器需要链接的资源，不同的是，后者
可以直接注册回调函数。而常量管理器则自己注册好了各种回调函数来处理用户需要注册的资源。以下扩展脚本
假设了场景中有一个名为 Plane.001 的对象，材质有 Image Texture 节点并命名为 ImageTexture。
注意，如果同时存在逻辑节点与 Trait 脚本扩展，那么逻辑节点优先于脚本，脚本相应注册的资源失效。
如果同时，存在 `UniformsManager` 和 Iron `Uniforms` 注册的资源，那么常量管理器的设置优先。
`Uniforms` 注册的回调不一定有机会调用，以下代码就是因为 `UniformsManager` 重置了原有链接关系。

```haxe
    package arm;

    import iron.math.Vec4;
    import iron.object.Object;
    import iron.object.Uniforms;
    import iron.data.Data;
    import iron.data.MaterialData;
    import iron.system.Time;

    import iron.object.MeshObject;
    import armory.trait.internal.UniformsManager;

    class MyTrait extends iron.Trait {

        var tex1:kha.Image = null;
        var tex2:kha.Image = null;

        public function new() {
            super();
            iron.Scene.active.notifyOnInit(() -> {
                // Register link callbacks
                Uniforms.externalTextureLinks.push(textureLink);

                var plane: MeshObject = cast iron.Scene.active.getChild("Plane.001");
                var mat: MaterialData = plane.materials[0];
                Data.getImage("Texture_25c.jpg", image -> {
                    UniformsManager.setTextureValue( mat, plane, "ImageTexture", image );
                });
            });
            Data.getImage("Texture_18c.jpg", img -> { trace('Texture_18c.jpg'); tex1 = img;} );
            Data.getImage("Texture_25c.jpg", img -> { trace('Texture_25c.jpg'); tex2 = img;} );
        }

        function textureLink(object:Object, mat:MaterialData, link:String):kha.Image {
            if (link == "ImageTexture") {
                trace('==>Link $link');
                var t = Time.time();
                return Math.sin(t) > 0 ? tex1 : tex2;
            }
            return null;
        }
    }
```

材质可以使用 `Material` 节点直接从现有材质中指定，或者使用 `Get Object Material` 节点
从对象指定 Slot 中的材质，注意这个 Slot 从 0 计数。Blender 材质编辑器中的 Slot 从 1 开始。
另外，如果材质未曾使用过，虽然它已经配置好了，但是要想在游戏运行正常使用，应该启用 **Fake User**
保护材质数据免被优化掉，导致数据读取错误。

`Draw to Material Image` 和 `Set Material Image Param` 节点在功能实现上有互斥，因为
前者已经包含了纹理链接回调函数的设置，而后者同样也是，只不过它还需要独占纹理的处理过程，需要在
Blender 材质编辑器侧栏面板勾选 **Armory -> Armory Material Node -> Paramerter**。
这样才能导出着色器常量，将材质资源与着色器 `uniform` 常量链接起来，才在它的回调函数中获取到
这个材质节点的回调处理，导致后果就是，其它节点读取不到这部分数据。

并且，`SetMaterialValueParamNode` 也是需要导出材质参数的配合，否则，是无法设置指定对象的
材质的纹理图像的！这一点很容易忽略，导致无法意识到是哪里的问题，因为根本找到问题的根源，除非阅读
源代码。就算是官方 Wiki 页面，也没有提供这些设置信息。

使用这这些节点还有一个问题，因为指定对象、材质分开指定，很容易产生不一致问题。假如，对象指定 Cube，
但是材质却是来自另外一个对象，那么最终设置的纹理是影响 Cube 还另一个对象呢？

当然，设置纹理是对哪个材质，那么就应当产生的影响就归属于谁。这种不一致的问题似乎对软件质量有重大
的影响。逻辑节点在设计时，应当考虑这样的问题，至少在节点接收了 Object 参数后，应该将材质端口隐藏，
提供一个材质插槽选项，提供备选供用户选择，而不是让用户去挑选另外可能导致节点无法正常工作的输入。
还有就是易用性问题，一般用户根本无法想象，一个材质设置节点竟然需要和材质编辑器一个角落中的一个选项
配合使用，即使用知道，还容易忽略。

就目前而言，Armory 仅支持 3 种材质回调处理，它们对应了 3 个节点：

1. `SetMaterialRgbParamNode` 设置对象材质的颜色属性，使用数据类型 `iron.math.Vec4`；
2. `SetMaterialValueParamNode` 设置对象材质的数值属性，使用数据类型 `Null<kha.FastFloat>`；
3. `SetMaterialImageParamNode` 设置对象材质的纹理属性，使用数据类型 `kha.Image`；

```py
    UniformsManager.removeVectorValue (object, mat, link);
    UniformsManager.setVec3Value (mat, object, node, vec);
    UniformsManager.removeFloatValue (object, mat, link);
    UniformsManager.setFloatValue (mat, object, inputs[4].get(), value);
    UniformsManager.removeTextureValue (object, mat, link);
    UniformsManager.setTextureValue (mat, object, node, image);
```

C:\HaxeToolkit\armory_examples-22.06\material_params
C:\HaxeToolkit\armory_examples-22.06\material_decal_colors
C:\HaxeToolkit\armory_examples-22.06\material_shaders


Armory 逻辑节点易用性问题最严重的表现就是 `Draw To Material Image` 这个节点上。

Armory Wiki 内容这样描述 Draw To Material Image：

>Sets the image render target to draw to. The render target must be created
>using the `Create Render Target Node` first.
>
>**Inputs:**
>
>- `In`: Executes a 2D draw sequence connected to this node
>- `Object`: Object whose material image should be drawn to.
>   Use `Get Scene Root` node to draw globally
>   (all objects that share this image, and not per-object).
>- `Material`: Material whose image to be drawn to.
>- `Node`: Name of the parameter.
>- `Clear Image`: Clear the image before drawing to it
>
>**Outputs:**
>
>- `Out`: Action output to be connected to other Draw Nodes
>- `Width`: Width of the image
>- `Height`: Height of the image

`DrawToMaterialImageNode` 这个节点本身不负责创建 Render Target，需要使用自行使用节点创建。
节点逻辑设计有点复杂，它的代码逻辑上说明它的作用是：调用 Render Path API 为绘制纹理做准备。
创建一个画布上下文对象并调用 `begin()` 方法打开绘图上下文对象，后续调用逻辑节点 Draw 分类节点，
对材质的纹理图像进行绘画。这些绘画的节点连接到 Out 控制流输出端口上，表示对打开的 Canvas 画布
上下文进行绘画，这个打开的画布就是材质对应的纹理图像。

除了 Object 只可以留空使用默认的 owner 对象，其它参数都必须指定。材质可以从用 `MaterialNode`
或者 `GetMaterialNode` 获取。默认的对象会由 `ObjectNode` 填充，它返回 `LogicTree` 也就是
Trait 类型的 object 属性。**注意，如果留空，就要挂载到正确的对象 Armory Traits 列表中！**
因为挂载的位置不正确，就获取不到正确的数据，这可以导致逻辑节点执行流程中断，并且不给出提示。

在设置参数，`Object` 和 `Material` 分别指要操作的对象和其材质对应的 Slot，但是 `Node` 这个
参数就让人难以琢磨，是什么鬼？

这个参数是一个字符串值，会经由 `UniformsManager` API 的 link 参数传入，用于读写材质
的相应属性数据。所以，材质节点中的 **Node** 这个字符串参数就是 `MaterialData` 的属性名称。
每个材质节点的标题都会显示节点的名称，也可以在侧栏面板中编辑和复制它。在逻辑节点编辑器中使用材质
属性设置节点时，就可以使用这个节点名称。在编程中，`Node` 对应的就是 `MaterialData` 属性名称。
如果没有理解这层关系，那么根本无法理解材质属性设置节点的使用。

重点是 `UniformsManager` 这个着色器常量管理工具，GLSL 着色器中的 `uniform` 常量由其管理。
Kha.Image `createRenderTarget()` 方法创建一个 RenderTarget 对象，就是一个纹理图像，然后
注册到 `UniformsManager`，后续再链接到着色器程序进行显示。要对新创建的这个纹理绘画，就需要按
`Uniforms` 类定义的接口，使用 [Links] 回调函数对其进行处理。`UniformsManager` 注册了默认
的回调函数，调用它就可以获得纹理图像。就如 `DrawToMaterialImageNode` 节点的代码那样获取纹理，
并打开画布上下文。注意 `begin()` 和 `end()` 方法之间的 `runOutput(0)`，就是它调用后续的
逻辑节点，在画布上下文打开期间绘画：

```haxe
    // armory\logicnode\DrawToMaterialImageNode.hx
    override function run(from: Int) {
        var object = inputs[1].get();
        var mat = inputs[2].get();
        var node = inputs[3].get();

        img = UniformsManager.textureLink(object, mat, inputs[3].get());

        assert(Error, img != null, 'Image $node does not exist or is empty');

        assert(Error, img.depth != null, 'Image is not a render target. Use Create Render Target Node to create an image render target');

        RenderToTexture.ensureEmptyRenderTarget("DrawToMaterialImageNode");
        img.g2.begin(inputs[4].get(), Color.Transparent);
        RenderToTexture.g = img.g2;
        runOutput(0);
        RenderToTexture.g = null;
        img.g2.end();
    }

    // armory\trait\internal\UniformsManager.hx
    // Method to get object specific material parameter texture value
    public static function textureLink(object: Object, mat: MaterialData, link: String): kha.Image {

        if (object == null || mat == null) return null;

        // First check if texture exists per object
        var res = getObjectTextureLink(object, mat, link);
        if (res == null) {
            // If not defined per object, use default scene root
            res = getObjectTextureLink(Scene.active.root, mat, link);
        }
        return res;
    }
```

可以在 Blender 脚本编辑器中使用 Python 代码逐步地探索当前选中对象的各种属性，如下：

```py
>>> C.selected_objects[0].name
'Cube'
>>> C.selected_objects[0].material_slots[0].name
'Material'
>>> C.selected_objects[0].material_slots[0].material.name
'Material'
>>> C.selected_objects[0].material_slots[0].material.node_tree.name
'Shader Nodetree'
```

但是，Armory 逻辑节点编辑器中的属性是指 iron.object.Object 对象系统下的对象属性。比如，
使用 `GetPropertyNode` 节点获取属性值，就是在查询 Iron Objects 及其子类对象的属性集合。
属性集合 properties 中的属性需要使用 SetPropertyNode 定义，它们和 Object 其它属性不同。
比如 Get Object UID (GetUidNode) 节点直接通过 object.uid 或以获取对象的 UID，但是
不能通过 properties 集合获取，因为没有定义。

    |-- iron.object
    |   |-- iron\object\Animation.hx
    |   |----> iron\object\BoneAnimation.hx
    |   |----> iron\object\ObjectAnimation.hx
    |   |-- iron\object\Object.hx
    |   |----> iron\object\CameraObject.hx
    |   |----> iron\object\DecalObject.hx
    |   |----> iron\object\LightObject.hx
    |   |----> iron\object\MeshObject.hx
    |   |----> iron\object\ProbeObject.hx
    |   |----> iron\object\SpeakerObject.hx
    |   |-- iron\object\Constraint.hx
    |   |-- iron\object\MorphTarget.hx
    |   |-- iron\object\ParticleSystem.hx
    |   |-- iron\object\Tilesheet.hx
    |   |-- iron\object\Transform.hx
    |   `-- iron\object\Uniforms.hx

```haxe
    // armory\logicnode\GetPropertyNode.hx
    override function get(from: Int): Dynamic {
        var object: iron.object.Object = inputs[0].get();
        var property: String = inputs[1].get();

        if (from == 0) {
            if (object == null || object.properties == null) return null;
            return object.properties.get(property);
        }
        else {
            return property;
        }
    }

    // armory\logicnode\GetHaxePropertyNode.hx
    override function get(from: Int): Dynamic {
        var object: Dynamic = inputs[0].get();
        var property: String = inputs[1].get();

        if (object == null) return null;

        return Reflect.getProperty(object, property);
    }
```

`Draw Camera` 节点有两个控制流输入端口，Start 端口进入绘制逻辑，注册 `render()` 方法以处理
3D 渲染事件。注册 `render2D()` 方法以处理 2D 渲染事件。Stop 端口输入控制流就停止绘制，解除
事件侦听器。检查代码可知，Start 触发后就会注册相应的事件上侦听器，因此不能使用持续触发的控制流，
这会让内存爆满，并且重复触发渲染目标的绘制也不是正确的使用方式，应该使用 `On Init` 这种单次触发
事件流，而不能使用 `On Update` 这种持续触发的事件流。

绘制到 Render Target 对象上的图像来源自指定的 Camera 对象，这个相机的设置决定了来源图像的
大小比例。调用 `createRenderTarget()` 创建 Render Target，其大小比例由 `Draw Camera`
节点的参数指定，包括其 position 位置属性，后续使用纹理时决定其开始绘制位置。将相机视角的图像
绘制到 Render target 对象这个过程就有一次变换，设置不同的宽高值就可能产生变形。

逻辑节点代码中的 runOutput(0) 和 runOutput(1) 就是执行相应的控制流输出端口，即对应节点的
**On Start** 和 **On Stop**，等价于触发两个事件：

```haxe
    override function run(from: Int) {
        switch (from) {
            case 0: // Start
                    // ...
                for (i in 0...cameras.length) {

                    // TODO: implement proper rendertarget cache/pool
                    renderTargets[i] = kha.Image.createRenderTarget(
                        inputs[numStaticInputs + i * 5 + 3].get(), // w
                        inputs[numStaticInputs + i * 5 + 4].get(), // h
                        kha.graphics4.TextureFormat.RGBA32,
                        kha.graphics4.DepthStencilFormat.NoDepthAndStencil
                    );
                }

                tree.notifyOnRender(render);
                tree.notifyOnRender2D(render2D);
                runOutput(0);

            case 1: // Stop
                tree.removeRender(render);
                tree.removeRender2D(render2D);
                runOutput(1);
        }
    }
    function render(g:kha.graphics4.Graphics) {
        // ...
    }

    function render2D(g: kha.graphics2.Graphics) {
        // ...
    }
```

另外 `Get Mouse Movement` 似乎还有问题，不能获取鼠标移动的值，以及滚轮值。经过调试发现，节点
没有在每次鼠标数据更新时被执行，也就是没有获取最新数据。这一原由来自于将这些数据连接到了一个数组
节点上，`ArrayStringNode`，对的，就是因为数组节点具有单次初始化后就不再更新数据的这个逻辑。
为了将数据集中处理，还可以使用 `ConcatenateStringNode` 这样的节点以连接多个变量构成字符串。
还需要注意的是 x y 输出端口其实是 movementX movementY，这种端口名称令人多有误解。

Kha Graphics APIs 分成多种类型集合，其中 G3 缺失，只是占位而已：

1. G1 - `kha.graphics1` Just provides a framebuffer you can write into
2. G2 - `kha.graphics2` Provides a basic and very portable 2D graphics-API
3. G3 - `kha.graphics3` Old-school 3D graphics API similar to early OpenGL.
4. G4 - `kha.graphics4` 3D graphics API similar to Direct3D 11 or modern OpenGL
5. G5 - only exists in Kinc

Some kha targets do not support graphics4. See [Feature Matrix] for more details.

    Kha Sources
        |-- kha.graphics1
        |   |-- kha\graphics1\Graphics.hx
        |   `-- kha\graphics1\Graphics4.hx
        |-- kha.graphics2
        |   |-- kha\graphics2\Graphics.hx
        |   |-- kha\graphics2\Graphics1.hx
        |   |-- kha\graphics2\GraphicsExtension.hx
        |   |-- kha\graphics2\HorTextAlignment.hx
        |   |-- kha\graphics2\ImageScaleQuality.hx
        |   |-- kha\graphics2\VerTextAlignment.hx
        |   `-- kha.graphics2.truetype
        |       |-- kha\graphics2\truetype\StbTruetype.hx
        |       `-- kha\graphics2\truetype\stb_truetype.h


Armory Engine 逻辑节点相关代码文件：

    |   |-- armory\logicnode
    |   |   |-- armory\logicnode\CreateRenderTargetNode.hx
    |   |   |-- armory\logicnode\DrawCameraNode.hx
    |   |   |-- armory\logicnode\DrawCameraTextureNode.hx
    |   |   |-- armory\logicnode\DrawToMaterialImageNode.hx
    |   |   |-- armory\logicnode\GetPropertyNode.hx
    |   |   |-- armory\logicnode\GetHaxePropertyNode.hx
    |   |-- arm\logicnode
    |   |   |-- arm\logicnode\draw\
    |   |   |   |-- arm\logicnode\draw\LN_draw_Text_Area_string.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_arc.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_camera.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_camera_texture.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_circle.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_curve.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_ellipse.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_image.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_image_sequence.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_line.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_polygon.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_rect.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_string.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_to_material_image.py
    |   |   |   |-- arm\logicnode\draw\LN_draw_triangle.py
    |   |   |   |-- arm\logicnode\draw\__init__.py
    |   |   |-- arm\logicnode\postprocess\
    |   |   |   |-- arm\logicnode\postprocess\LN_colorgrading_get_global_node.py
    |   |   |   |-- arm\logicnode\postprocess\LN_colorgrading_get_highlight_node.py
    |   |   |   |-- arm\logicnode\postprocess\LN_colorgrading_get_midtone_node.py
    |   |   |   |-- arm\logicnode\postprocess\LN_colorgrading_get_shadow_node.py
    |   |   |   |-- arm\logicnode\postprocess\LN_colorgrading_set_global_node.py
    |   |   |   |-- arm\logicnode\postprocess\LN_colorgrading_set_highlight_node.py
    |   |   |   |-- arm\logicnode\postprocess\LN_colorgrading_set_midtone_node.py
    |   |   |   |-- arm\logicnode\postprocess\LN_colorgrading_set_shadow_node.py
    |   |   |   |-- arm\logicnode\postprocess\LN_get_bloom_settings.py
    |   |   |   |-- arm\logicnode\postprocess\LN_get_ca_settings.py
    |   |   |   |-- arm\logicnode\postprocess\LN_get_camera_post_process.py
    |   |   |   |-- arm\logicnode\postprocess\LN_get_lenstexture_settings.py
    |   |   |   |-- arm\logicnode\postprocess\LN_get_ssao_settings.py
    |   |   |   |-- arm\logicnode\postprocess\LN_get_ssr_settings.py
    |   |   |   |-- arm\logicnode\postprocess\LN_lenstexture_set.py
    |   |   |   |-- arm\logicnode\postprocess\LN_set_bloom_settings.py
    |   |   |   |-- arm\logicnode\postprocess\LN_set_ca_settings.py
    |   |   |   |-- arm\logicnode\postprocess\LN_set_camera_post_process.py
    |   |   |   |-- arm\logicnode\postprocess\LN_set_ssao_settings.py
    |   |   |   |-- arm\logicnode\postprocess\LN_set_ssr_settings.py
    |   |   |   |-- arm\logicnode\postprocess\__init__.py
    |   |   |-- arm\logicnode\renderpath\
    |   |   |   |-- arm\logicnode\renderpath\LN_create_render_target.py
    |   |   |   |-- arm\logicnode\renderpath\LN_pause_active_camera_render.py
    |   |   |   |-- arm\logicnode\renderpath\LN_rotate_render_target.py
    |   |   |   |-- arm\logicnode\renderpath\LN_set_msaa_quality.py
    |   |   |   |-- arm\logicnode\renderpath\LN_set_post_process_quality.py
    |   |   |   |-- arm\logicnode\renderpath\LN_set_shader_uniform.py
    |   |   |   |-- arm\logicnode\renderpath\LN_set_shadows_quality.py
    |   |   |   |-- arm\logicnode\renderpath\LN_set_ssaa_quality.py
    |   |   |   |-- arm\logicnode\renderpath\__init__.py




## 🐥 Kha Sound and Video

`PlaySoundRawNode` (Play Sound) 或者 `PlaySoundNode` (Play Speaker) 用来播放音频，
需要配合 Blender Speaker 对象来使用。如果不了解这一点，直接添加 Play Sound 节点，点击其音频
列表只有弹出来的纯色块，真的会让人难以理解。并且官方文档的内容如下，真的没有一点作用，已经找到这个
节点了，并且也知道要用它来播放音频，文档却只是说“它是用来播放音频的”：

    Sound: The sound that will be played.

PlaySoundNode 和 PlaySoundRawNode 使用到的 API：

```haxe
    override function run(from: Int) {
        var object: SpeakerObject = cast(inputs[1].get(), SpeakerObject);
        if (object == null) return;
        object.play();
        runOutput(0);
    }

    // iron.data.Data.getSound(file: String, done: kha.Sound->Void)
    iron.data.Data.getSound("sound.wav", (sound: kha.Sound) -> {
        var audioChannel: kha.audio1.AudioChannel =  iron.system.Audio.play(sound);
        trace(audioChannel.position); // In seconds
        trace(audioChannel.finished);
        trace(sound.sampleRate);
    });
```

项目中可以使用 `.wav` / `.flac` 格式，`Armory Project - Flags - Sound Quality`
属性面板可以调整音频质量，并且构建项目时会调用 FFMPEG 工具转换格式。使用其它格式不一定支持，
Blender 中可以直接播放，在 Armory 环境下也不一定可以播放，不同的运行平台有不同的要求。

  * WAV (44100Hz 16 bit) 格式简单通用，但是文件大，所以是简短的音效文件的首选格式。
  * OGG 则提供了更优的压缩比，是长背景音乐的理想选择之一。

Kha 使用 stb_vorbis，而非 libogg 或 libvorbis，后者是 Godot 引擎或 FFMPEG 默认的编码器。
使用 `ffmpeg -encoders` 命令可以查看 FFmpeg 已安装的编码器。


A..... aac                  AAC (Advanced Audio Coding)
A..... ac3                  ATSC A/52A (AC-3)
A..... flac                 FLAC (Free Lossless Audio Codec)
A..... libtwolame           libtwolame MP2 (MPEG audio layer 2) (codec mp2)
A..... libmp3lame           libmp3lame MP3 (MPEG audio layer 3) (codec mp3)
A..... libshine             libshine MP3 (MPEG audio layer 3) (codec mp3)
A..... libopus              libopus Opus (codec opus)
A..... pcm_alaw             PCM A-law / G.711 A-law
A..... pcm_f32be            PCM 32-bit floating point big-endian
A..... pcm_f32le            PCM 32-bit floating point little-endian
A..... pcm_f64be            PCM 64-bit floating point big-endian
A..... pcm_f64le            PCM 64-bit floating point little-endian
A..... pcm_mulaw            PCM mu-law / G.711 mu-law
A..... pcm_s16be            PCM signed 16-bit big-endian
A..... pcm_s16be_planar     PCM signed 16-bit big-endian planar
A..... pcm_s16le            PCM signed 16-bit little-endian
A..... pcm_s16le_planar     PCM signed 16-bit little-endian planar
A..... pcm_s24be            PCM signed 24-bit big-endian
A..... pcm_s24daud          PCM D-Cinema audio signed 24-bit
A..... pcm_s24le            PCM signed 24-bit little-endian
A..... pcm_s24le_planar     PCM signed 24-bit little-endian planar
A..... pcm_s32be            PCM signed 32-bit big-endian
A..... pcm_s32le            PCM signed 32-bit little-endian
A..... pcm_s32le_planar     PCM signed 32-bit little-endian planar
A..... pcm_s64be            PCM signed 64-bit big-endian
A..... pcm_s64le            PCM signed 64-bit little-endian
A..... pcm_s8               PCM signed 8-bit
A..... pcm_s8_planar        PCM signed 8-bit planar
A..... pcm_u16be            PCM unsigned 16-bit big-endian
A..... pcm_u16le            PCM unsigned 16-bit little-endian
A..... pcm_u24be            PCM unsigned 24-bit big-endian
A..... pcm_u24le            PCM unsigned 24-bit little-endian
A..... pcm_u32be            PCM unsigned 32-bit big-endian
A..... pcm_u32le            PCM unsigned 32-bit little-endian
A..... pcm_u8               PCM unsigned 8-bit
A..... real_144             RealAudio 1.0 (14.4K) (codec ra_144)
A..... roq_dpcm             id RoQ DPCM
A..X.. s302m                SMPTE 302M
A..... sbc                  SBC (low-complexity subband codec)
A..X.. sonic                Sonic
A..X.. sonicls              Sonic lossless
A..... libspeex             libspeex Speex (codec speex)
A..X.. truehd               TrueHD
A..... tta                  TTA (True Audio)
A..X.. vorbis               Vorbis
A..... libvorbis            libvorbis (codec vorbis)
A..... wavpack              WavPack
A..... libwavpack            (codec wavpack)
A..... wmav1                Windows Media Audio 1
A..... wmav2                Windows Media Audio 2
S..... ssa                  ASS (Advanced SubStation Alpha) subtitle (codec ass)
S..... ass                  ASS (Advanced SubStation Alpha) subtitle


推荐使用 libvorbis (-codec:a libvorbis) 编码器，而不是实验性很强的原生 FFmpeg Vorbis
(-codec:a vorbis -strict experimental) 音频编码器，因为提供不了 libvorbiss 相当的质量。

A Brief Theora and Vorbis Encoding Guide
https://trac.ffmpeg.org/wiki/TheoraVorbisEncodingGuide

    The Theora video format, Vorbis audio format, and Ogg container formats
    were developed by Xiph.org as free and open-source media formats. ffmpeg
    can create these formats by using the external encoding libraries libtheora
    and libvorbis.

    To use these encoders make sure your ffmpeg build has been compiled with
    --enable-libtheora and --enable-libvorbis, or refer to the output of
    ffmpeg -codecs. If you want to compile ffmpeg to support these encoders
    see the various FFmpeg Compilation Guides for detailed instructions.

    libvorbis (-codec:a libvorbis) is recommended over the very experimental, native FFmpeg Vorbis audio encoder (-codec:a vorbis -strict experimental) since it does not provide comparable quality to libvorbis.

    Note: More modern alternatives like VP9 can often provide better video quality at a lower bitrate. See the VP9 Encoding Guide.

    Variable Bitrate (VBR)

    ffmpeg -i input.mkv -codec:v libtheora -qscale:v 7 -codec:a libvorbis -qscale:a 5 output.ogv

    -qscale:v – video quality. Range is 0–10, where 10 is highest quality.
    5–7 is a good range to try. If you omit -qscale:v (or the alias -q:v)
    then ffmpeg will use the default -b:v 200k which will most likely provide
    a poor quality output, and libtheora may drop/skip frames if the bitrate
    is too low.

    -qscale:a – audio quality. Range is -1.0 to 10.0, where 10.0 is highest
    quality. Default is -q:a 3 with a target of 112kbps. The formula 16×(q+4)
    is used below 4, 32×q is used below 8, and 64×(q-4) otherwise. Examples:
    112=16×(3+4), 160=32×5, 200=32×6.25, 384=64×(10-4).


音频文件与 Kha API 使用不同的采样率会导致音频速度、音高改变。

另一个问题是，比如，水果导出的一个 .ogg 音频文件可以在 Armory 环境下播放，但是经过 FFMPEG
转换格式，即使用还是使用 .ogg 格式，也有可能导致播放失败。

```sh
    > ffmpeg -hide_banner -i .\true-pitch-flstudio.ogg
    Input #0, ogg, from '.\true-pitch-flstudio.ogg':
      Duration: 00:01:07.11, start: 0.000000, bitrate: 194 kb/s
        Stream #0:0: Audio: vorbis, 44100 Hz, stereo, fltp, 192 kb/s
        Metadata:
          ENCODER         : FL Studio

    > ffmpeg -hide_banner -i .\true-pitch-ffmpeg.ogg
    Input #0, ogg, from '.\true-pitch2-ffmpeg.ogg':
      Duration: 00:01:07.13, start: 0.000000, bitrate: 127 kb/s
        Stream #0:0: Audio: vorbis, 44100 Hz, stereo, fltp, 192 kb/s
        Metadata:
          ENCODER         : Lavc58.30.100 libvorbis
```

Blender 通过 Speaker 属性面板导入音频文件，在导入时，可以设置选项，不要勾选 Mono 可以导入
立体声文件。在大纲视图中，选择 Blender Files 列表，可以删除 Sound 分类中记录的音频文件。

Armory Props 面板可以设置 Play On Start，Loop，Stream 流式播放。Armory Project

`kha.audio1` 提供的是最简单的音频播放 API，支持流式音频文件，`Sound` 类型代表音频文件数据，
`AudioChannel` 对象呈现音频，不同平台有不同的适配，尚未支持 Android (Java)。

Armory SDK 中最新 audio1 或 audio2 `AudioChannel` 提供了 set_position()。但是，
通过 haxelib 安装的 kha 16.1.3 没有提供，即 Armory 对其源代码做了更改。

    Kha Sources
        |-- kha\Sound.hx
        |-- kha\Video.hx
        |-- kha.audio1
        |   |-- kha\audio1\Audio.hx
        |   `-- kha\audio1\AudioChannel.hx
        |-- kha.audio2
        |   |-- kha\audio2\Audio.hx
        |   |-- kha\audio2\Audio1.hx
        |   |-- kha\audio2\AudioChannel.hx
        |   |-- kha\audio2\Buffer.hx
        |   |-- kha\audio2\ResamplingAudioChannel.hx
        |   |-- kha\audio2\StreamChannel.hx
        |   `-- kha\audio2\ogg
        |       |-- kha.audio2.ogg.tools
        |       |   |-- kha\audio2\ogg\tools\Crc32.hx
        |       |   |-- kha\audio2\ogg\tools\MathTools.hx
        |       |   `-- kha\audio2\ogg\tools\Mdct.hx
        |       `-- kha.audio2.ogg.vorbis
        |           |-- kha\audio2\ogg\vorbis\Reader.hx
        |           |-- kha\audio2\ogg\vorbis\VorbisDecodeState.hx
        |           |-- kha\audio2\ogg\vorbis\VorbisDecoder.hx
        |           |-- kha\audio2\ogg\vorbis\VorbisTools.hx
        |           `-- kha.audio2.ogg.vorbis.data
        |               |-- kha\audio2\ogg\vorbis\data\Codebook.hx
        |               |-- kha\audio2\ogg\vorbis\data\Comment.hx
        |               |-- kha\audio2\ogg\vorbis\data\Floor.hx
        |               |-- kha\audio2\ogg\vorbis\data\Header.hx
        |               |-- kha\audio2\ogg\vorbis\data\IntPoint.hx
        |               |-- kha\audio2\ogg\vorbis\data\Mapping.hx
        |               |-- kha\audio2\ogg\vorbis\data\Mode.hx
        |               |-- kha\audio2\ogg\vorbis\data\Page.hx
        |               |-- kha\audio2\ogg\vorbis\data\ProbedPage.hx
        |               |-- kha\audio2\ogg\vorbis\data\ReaderError.hx
        |               |-- kha\audio2\ogg\vorbis\data\Residue.hx
        |               `-- kha\audio2\ogg\vorbis\data\Setting.hx


## 🐥 Khamake & khafile.js

* [khafile.js](https://github.com/Kode/Kha/wiki/khafile.js)
* [Third Party Libraries|Libraries](https://github.com/Kode/Kha/wiki/Third-Party-Libraries|Libraries)
* [System Defines](https://github.com/Kode/Kha/wiki/System-Defines)
* [Profiling](https://github.com/Kode/Kha/wiki/Profiling)
* [Managing Your Assets](https://github.com/Kode/Kha/wiki/Managing-Your-Assets)

Kha 是一套 API 或称为一个开发库，它使用的构建工具称为 **khamake**，以及一个着色器交叉编译器
**Krafix**，使其能够支持多个图形 API。支持平台包含：Web, Mobile, Desktop, and Consoles，
使用 OpenGL, WebGL, DirectX, Vulcan, 以及 Metal 等图形 APIs。

Kha 编译得到目标程序程序是 targets，最典型就是 C++ ( with Kore ), Krom, Web, 和 HashLink (HL)。


Blender 中执行 Armory3D 构建时，引擎插件会将所有资源、着色器、纹理等等都存放在 compiled 目录下，
最后打包到输出目录，主要是 krom 和 krom-resources 两个目录。构建脚本 khafile.js 也自动生成。
而手动执行 Kha 构建时，就需要自动处理，包括配置 khafile.js 脚本，当然可以调用 khamake 生成：

    node.exe C:\HaxeToolkit\armsdk\Kha\make --init

以下是 Armory 插件运行时的基本操作，操作包括：

1. 导出内嵌在 .blend 内部的资源文件；
2. 调用 cmft - cubemap filtering tool 生成纹理图像 LOD 分级细节贴图；
3. 期间会在 compiled\Assets 和 Shaders 目录下生成各种默认配置的资源、着色器程序；

```sh
Running Armory SDK from C:\HaxeToolkit\armsdk\
Read blend: C:\HaxeToolkit\armory-tutorial-sourcecode\Tilesheet\ExplosionPacked.blend
Project updated to SDK v2023.4($Id: 00bbb96ca40a1e7a3119a6cb8c1770a7ef88e750 $)
Project cleaned
Saved: 'C:\HaxeToolkit\armory-tutorial-sourcecode\Tilesheet\build_ExplosionPacked\compiled\Assets\envmaps\env_World.jpg'
 Time: 00:01.38 (Saving: 00:00.03)

CMFT info: Converting latlong image to cubemap.
CMFT info: Saving spherical harmonics coefficients to C:\HaxeToolkit\armory-tutorial-sourcecode\Tilesheet\build_ExplosionPacked\compiled\Assets\envmaps\env_World_irradiance.c
CMFT info: Done.
['C:\\HaxeToolkit\armsdk\lib\armory_tools\cmft\cmft.exe', '--input', 'C:\\HaxeToolkit\\armory-tutorial-sourcecode\\Tilesheet\\build_ExplosionPacked\compiled\Assets\envmaps\env_World_radiance.jpg', '--filter', 'radiance', '--dstFaceSize', '128.0', '--srcFaceSize', '128.0', '--excludeBase', 'false', '--glossScale', '8', '--glossBias', '3', '--lightingModel', 'blinnbrdf', '--edgeFixup', 'none', '--numCpuProcessingThreads', '4', '--useOpenCL', 'true', '--clVendor', 'anyGpuVendor', '--deviceType', 'gpu', '--deviceIndex', '0', '--generateMipChain', 'true', '--inputGammaNumerator', '1.0', '--inputGammaDenominator', '1.0', '--outputGammaNumerator', '1.0', '--outputGammaDenominator', '1.0', '--outputNum', '1', '--output0', 'C:\\HaxeToolkit\\armory-tutorial-sourcecode\\Tilesheet\\build_ExplosionPacked\compiled\Assets\envmaps\env_World_radiance', '--output0params', 'hdr,rgbe,latlong', '--silent']
#512x256
#256x128
#128x64
#64x32
#32x16
#16x8
#8x4
#4x2
#2x1
#1x1
C:\HaxeToolkit\armsdk\nodejs\node.exe C:\HaxeToolkit\armsdk\Kha\make krom --ffmpeg c:\download\ffmpeg\ffmpeg.EXE -g direct3d11 --shaderversion 330 --parallelAssetConversion 4 --to build_ExplosionPacked\debug --quiet
Finished in 12.805s
C:\HaxeToolkit\armsdk\Krom\Krom.exe C:\HaxeToolkit\armory-tutorial-sourcecode\Tilesheet\build_ExplosionPacked\debug\krom C:\HaxeToolkit\armory-tutorial-sourcecode\Tilesheet\build_ExplosionPacked\debug\krom-resources --consolepid 16752
Initializing a new default audio device.
```

Armory 运行时会自动生成 khafile.js 构建脚本，脚本中使用到的对象类型定义在 Kha 源代码中。
就脚本中的 `Project` 对象来自源代码：

    armsdk\Kha\Tools\khamake\src\Project.ts

各个方法说明如下：

01. 使用 `Project()` 方法注册一个工程标识，格式为：name_version。
02. 使用 `addLibrary("/armsdk/armory")` 等等引入模块。
03. 使用 `addAssets()` 方法添加资源引用。
04. 使用 `addParameter()` 给 Haxe 添加编译参数设置，比如 addParameter('-main Main')。
05. 使用 `addDefine('arm_physics')` 定义条件编译符号，这里表示添加、启用物理引擎模块。
06. 所有 `rp_` 前缀的符号定义基本都与 Render Path 功能相关，根据启用的功能定义。
07. 其中 `js-es` 符号用来指定转译得到的 ECMAScript，即 JavsScript 版本号。
08. 使用 `resolve(project)` 替换旧版本 Kha 脚本的 return 方式。
09. `arm_deferred` 符号表示使用 [Deferred Lighting] 渲染路径，是渲染引擎的算法类型选择。
10. `arm_csm` 级联阴影贴图，参考 RenderPath.hx LightObject.hx 或 renderpath\Inc.hx。
11. `armory` 默认符号定义，表示 Armory 框架，用于条件编译，[Conditional Compilation]。

级联阴影贴图（Cascaded Shadow Mapping，CSM）是一种沿用层次细节（Level Of Detail，LOD）
思想解决传统 Shadow Mapping 在大场景中阴影贴图精度问题的技术。

模块默认位于 Libraries 目录，project.localLibraryPath 属性可以指定模块目录。

构建脚本中经常使用 `addParameter()` 告诉 Haxe 编译时调用 macro 函数。Haxe 初始化宏是一种
在命令行中调用宏的方式，[Initialization Macros] 命令行格式 `--macro callExpr(args)`。
它用来向编译器注册一个函数，使其在宏上下文创建后得到调用，比如，keep() 就是一个宏初始化调用。
宏初始化必需在 `--main` 参数之前指定。

如果 `--macro` 调用的是一个 plain identifier，就会在 Haxe Standard Library 中的
`haxe.macro.Compiler` 内定位这个标识，这里定义多个非常有用的初始化宏：

    haxe\std\haxe\macro\Compiler.hx

比如，`include` 初始化宏在编译时用来引入整个包，可以递归地处理引入，当然也可以自定义宏：

    --macro include('some.pack', true)
    --macro some.Class.theMacro(args)

由于所有宏共享相同的 [Macro Context]，初始化宏可以设置其他宏用作配置的静态字段的值。

1. `Compiler.include` Includes all modules in package `pack` in the compilation.
2. `Compiler.keep` Marks types or packages to be kept by DCE (Dead Code Elimination).

官方提供的 Armory Examples Browser 项目就是一个 Haxe Web 应用，配置中就调用了自定义宏。
当然，Haxe 开发 Web 应用，体验上远不及 React/Vue/Angular 等更现代的组件式 Web 开发框架。
Haxe 提供的 js 模块设计上相当于 jQuery 时代的水平，需要调用 Document API 构建 HTML。
https://github.com/armory3d/armory_examples_browser

```js
-cp src
--macro Project.buildGroup("../armory_tutorials","web/tutorials",false,true,false)
```

BG-36's Tutorials - SaveLoadMechanism 教程演示了 Haxe 代码如何与 UI 交互。
https://github.com/BlackGoku36/armory-tutorial-download/tree/master/SaveLoadMechanism

```js
    project.addParameter('armory.trait.internal.CanvasScript');
    project.addParameter("--macro keep('armory.trait.internal.CanvasScript')");
    project.addParameter('arm.SaveLoadMechanism');
    project.addParameter("--macro keep('arm.SaveLoadMechanism')");
    project.addParameter('armory.trait.internal.Bridge');
    project.addParameter("--macro keep('armory.trait.internal.Bridge')");
    project.addParameter('arm.CubeController');
    project.addParameter("--macro keep('arm.CubeController')");
```

Kha 构建 HTML5 或 Flash 应用时，如果有 .wav 等等资源文件，就需要指定 ffmpeg 工具来转换格式。
声波文件在 HTML5 平台中需要转换为 .ogg 文件，在 Flash 平台中转换为 .mp3 文件，优化文件大小。

    node Kha/make html5 --ffmpeg "/path/to/ffmpeg.exe"

khamake 期待的资源文件格式如下，其它格式资源通过 Assets.blobs 作为 Blob 对象访问：

01. **images**: png, jpg, hdr
02. **sounds**: wav (sample rate: 44100Hz 16 bit)
03. **videos**: mp4
04. **fonts**: ttf

资源一般使用 assets 目录，但不强制使用此目录，可以使用多个资源目录。

假设 assets 资源目录包含文件如下：

    assets
    |-- map1
    |   `-- tiles.png
    `-- map2
        `-- tiles.png

在构建脚本中添加引用后，就可以通过 `Assets.types.nameOfAsset` 这样的语法来读取资源到内存中。
比如，读取以上的图像资源就是 kha.Assets.images.map1_tiles 或者 map2_tiles，目录使用下划线
分隔。已经有对应分类的资源就可以相应的分类访问，无分类的资源就作为大二进制数据对象 `Assets.blobs`。

但是注意，数据文件经过处理后，目录结构被碾平，假设以上两个目录中在同同名两个文件，如 a.dat，那么
kha.Assets.blobs.a_dat 只能访问到其中一个数据文件，为了解决这个问题，Kha 提供了路径映射，
生成的代码保持目录结构，以访问 map1_a_dat 和 map2_a_dat 两个数据资源：

```js
project.addAssets('assets/**', {
     nameBaseDir: 'assets',
     destination: '{dir}/{name}',
     name: '{dir}/{name}'
});

// Resize images
project.addAssets('assets/**', { scale: 0.5 });

// Add a Custom Icon
project.icon = 'path/icon.png';

// Add a Subproject
await project.addProject(pathToProject);
```

不要创建名称为 Haxe 关键字的文件，如 default.png 就不好，应该用 `_default.png` 这样的名称。
因为在 Assets 中显示的资源名称是使用输出资源目录的 macro 和 json 文件导入的，所有资源命名
必须符合变量、函数的命名规则。资源导出目标为 `<build target>-resources`，比如 Krom 导出方式，
资源目录就是 krom-resources 目录。


```py
    let project = new Project('wasm_call_1_0_0');

    project.addSources('Sources');
    project.addLibrary("/armsdk/armory");
    project.addLibrary("/armsdk/iron");
    project.addParameter('armory.trait.internal.WasmScript');
    project.addParameter("--macro keep('armory.trait.internal.WasmScript')");
    project.addParameter('armory.trait.internal.UniformsManager');
    project.addParameter("--macro keep('armory.trait.internal.UniformsManager')");
    project.addShaders("build_wasm_trait_c_b/compiled/Shaders/*.glsl", { noembed: false});
    project.addShaders("build_wasm_trait_c_b/compiled/Hlsl/*.glsl", { noprocessing: true, noembed: false });
    project.addAssets("build_wasm_trait_c_b/compiled/Assets/**", { notinlist: true });
    project.addAssets("build_wasm_trait_c_b/compiled/Shaders/*.arm", { notinlist: true });
    project.addAssets("Bundled/main.wasm", { notinlist: true });
    project.addAssets("/armory_examples-22.06/wasm_call/Assets/crate.png", { notinlist: true });
    project.addAssets("/armsdk/armory/Assets/brdf.png", { notinlist: true });
    project.addAssets("/armsdk/armory/Assets/smaa_area.png", { notinlist: true });
    project.addAssets("/armsdk/armory/Assets/smaa_search.png", { notinlist: true });
    project.addDefine('arm_deferred');
    project.addDefine('arm_csm');
    project.addDefine('rp_hdr');
    project.addDefine('rp_renderer=Deferred');
    project.addDefine('rp_shadowmap');
    project.addDefine('rp_shadowmap_cascade=1024');
    project.addDefine('rp_shadowmap_cube=512');
    project.addDefine('rp_background=World');
    project.addDefine('rp_render_to_texture');
    project.addDefine('rp_compositornodes');
    project.addDefine('rp_antialiasing=SMAA');
    project.addDefine('rp_supersampling=1');
    project.addDefine('rp_ssgi=SSAO');
    project.addDefine('js-es=6');
    project.addDefine('arm_physics');
    project.addDefine('arm_assert_level=Warning');
    project.addDefine('arm_noembed');
    project.addDefine('arm_soundcompress');
    project.addDefine('arm_audio');
    project.addDefine('arm_skin');
    project.addDefine('arm_morph_target');
    project.addDefine('arm_particles');
    project.addDefine('armory');

    resolve(project);
```

构建脚本 khafile.js 中的其它配置参考：


```ts,ignore
    //=== Register callbacks for build events
    callbacks.preAssetConversion = () => { };
    callbacks.preShaderCompilation = () => { };
    callbacks.preHaxeCompilation = () => { };
    callbacks.postHaxeCompilation = () => { };
    callbacks.postHaxeRecompilation = () => { };
    callbacks.postCppCompilation = () => { };
    callbacks.postAssetReexporting = (filePath: string) => { };
    callbacks.postBuild = () => { };
    callbacks.onFailure = (error: any) => { };

    //=== Set specific options for the HTML5 target
    project.targetOptions.html5.disableContextMenu = true;
    project.targetOptions.html5.canvasId = 'my-custom-canvas-id';
    project.targetOptions.html5.scriptName = 'my-custom-script-name';
    project.targetOptions.html5.webgl = false;

    //=== Set specific options for the flash target
    project.targetOptions.flash.swfVersion = 11.6;
    project.targetOptions.flash.framerate = 42;
    project.targetOptions.flash.stageBackground = 'ff0000';

    //=== Set the initial window size in flash and html5
    project.windowOptions.width = 1366;
    project.windowOptions.height = 768;

    //=== Set specific options for the android-native target
    const android = project.targetOptions.android_native;
    android.package = 'com.example.app';
    android.versionCode = 1;
    android.versionName = '1.0';
    // https://developer.android.com/guide/topics/manifest/activity-element.html#screen
    android.screenOrientation = 'portrait';
    android.permissions = ['android.permission.VIBRATE'];
    // https://developer.android.com/guide/topics/manifest/manifest-element#install
    android.installLocation = "internalOnly";
    // https://developer.android.com/guide/topics/manifest/meta-data-element
    android.metadata = [];
    // same as <meta-data android:name="disableStickyImmersiveMode" android:value="true"/>
    android.disableStickyImmersiveMode = true;
    android.globalBuildGradlePath = 'data/android/build.gradle';
    android.buildGradlePath = 'data/android/app/build.gradle';
    android.proguardRulesPath = 'data/android/app/proguard-rules.pro';
    // for files in Android Studio project-level dir
    android.customFilesPath = 'data/android/files';

    //=== Set specific options for the android (Java) target
    project.targetOptions.android.package = 'com.example.app';
    // https://developer.android.com/guide/topics/manifest/activity-element.html#screen
    project.targetOptions.android.screenOrientation = 'portrait';
    project.targetOptions.android.permissions = ['android.permission.INTERNET'];
    // https://developer.android.com/guide/topics/manifest/manifest-element#install
    project.targetOptions.android.installLocation = "auto";

    //=== Set specific options for the iOS target
    project.targetOptions.ios.bundle = 'com.example.$(PRODUCT_NAME:rfc1034identifier)';
    project.targetOptions.ios.organizationName = 'Your Awesome Organization';
    project.targetOptions.ios.developmentTeam = 'XXXXXXXXXX';
    project.targetOptions.ios.version = '1.0';
    project.targetOptions.ios.build = '1';
```


## 🐥 Armory Addon Panel

Armory3D Wiki

  * [Setup](https://github.com/armory3d/armory/wiki/setup)
  * [Troubleshooting](https://github.com/armory3d/armory/wiki/troubleshooting)
  * [Playground tutorial](https://github.com/armory3d/armory/wiki/playground)
  * [Tanks tutorial](https://github.com/armory3d/armory/wiki/tanks)
  * [Tutorials by community](https://github.com/armory3d/armory/wiki/community_tutorials)
  * [Optimize](https://github.com/armory3d/armory/wiki/optimize)


Armory 插件集成到 Blender 的功能面板参考：

- Render 属性面板

    - Armory Player 提供编译运行，以及清理编译缓存等功能；
    - Armory Exporter 导出配置、发布程序、优化等功能，如程序包名称、版本号、程序图标设置，脚本混淆；
    - Armory Project 项目配置，如缓存编译、调试器设置，以及窗口和模块配置，比如物理引擎的选用等；
    - Armory Render Path 此功能专为 Blender 材质节点设计，创建后期处理效果，各平台可有不同配置；
    - Armory Bake 光照贴图烘焙功能；

- Scene 属性面板

    - Armory Scene Traits 给场景添加 Traits 扩展，Haxe、Logic Nodes、UI、Wasm、Bundled 等等。
    - Armory Props 属性设置，可以设置是否导出场景数据。
    - Armory Terrain 地形功能。

- World 属性面板

    - Armory World Properties 设置 Armory 世界环境，如云层、风力等等。

- Object 属性面板

    - Armory Traits 给场景添加 Traits 扩展。
    - Armory Props 提供 Export、Spawn、Mobile、Animation，以及自定义属性配置。
        - Export 勾选状态下，才会导致当前对象的数据，否则游戏运行时不包含此对象。
        - Animation 是否启用蒙皮动画和时间轴动画，Tilesheet 动画不要勾选此选项。
        - Mobile 勾选状态下，当前对象在 Gameplay 过程中可以移动。
        - Spawn 勾选状态下，当前对象才会在游戏场景中出现。
    - Armory LOD 提供 Level of Detail 设置。

- Modifier 属性面板

    - Armory Props 提供清理缓冲数据功能，Invalidate Cache。

- Partitles 属性面板

    - Armory Props 提供粒子系统的设置：Loop 和 Mutiply Count。

- Physics 属性面板

    - Armory Props 根据所激活的物理功能提供设置，如 Rigid Body Export Type 等。

- Object Data 属性面板

    - Armory Props 提供对象数据设置功能，有 Dynamic Usage 和 Invalidate Cache。

- Material 属性面板

    - Armory Props 提供材质相关设置，如 Cull Mode、Billboard 模式、阴影投射等等。
    - Armory Tilesheet 提供瓦片图。

- Grease Pencil 属性面板

    - Armory Props 没有提供选项功能。

- Camera 属性面板

    - Armory Props 提供 Frustum Culling 功能。

- Logic Nodes Editor 是 Armory 提供的节点可视化编程工具，可以实现 Haxe 代码的交互。

- Navigation 导航支持，默认使用 Recast navigation。

    Implement realistic NPC behavior to your game by marking objects as actors to allow them to calculate real-time pathing using navigational meshes.

    Note: Armory by default uses the Recast navigation system, but can be configured to use other navigation engines.

- Particles 粒子系统支持

    Armory supports both emitter and hair particle systems that can be used to create stunning VFX or foliage covered landscapes. Under the hood, GPU instancing is used to achieve the best possible performance.

- Animation 动画支持

    1. Keyframes
    2. Armature bones
    3. Shape keys
    4. GPU skinning
    5. Tilesheets

- Lighting 光照支持

    1. Lightmapping
    2. Area lights using LTC (linearly transformed cosines)
    3. Reflection probes
    4. IES textures


Armory 插件属性数据参考，使用 Tab 可以在 Blender 展开属性 `bpy.data.worlds['Arm'].`：

```py
>>> print("-", "\n- ".join(bpy.data.worlds['Arm'].keys()))
- arm_version
- arm_commit
- arm_debug_console
- arm_bundled_scripts_list
- arm_recompile
- rp_driver_list
- arm_play_scene
- arm_scripts_list
- arm_wasm_list
- arm_rplist
- arm_rplist_index
- world_defs
- compo_defs
- arm_khafile
- arm_project_name
- arm_project_root
- cycles
- cycles_visibility
```

## 🐥 Snow shader programming
【Godot教程】 着色器编程：积雪与下雪 https://www.bilibili.com/video/BV1TG411u7gM/



## 🐥 Krom File Access API
Web Storage API https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
https://github.com/BlackGoku36/armory-tutorial-download/tree/master/SaveLoadMechanism

Krom 是一个运行环境，Haxe 程序运行于 Krom 环境，就如 JavaScript 程序运行于浏览器，当然 Krom
本身是基于 V8 引擎开发的，当然也可以运行 JavaScript 脚本。浏览器中通过 Web Storage API
向网页程序提供本地数据读写服务，Krom 也有相应的数据服务。

BG-36's Tutorials - Armory - Save and Load Mechanism 教程演示了如何使用这些 Krom API。

在编译 Zui 源代码中的示范程序时，由于使用数据读写服务，运行报错：

    TypeError: Cannot read property 'hxBytes' of undefined
        at Function.haxe_io_Bytes.ofData (<anonymous>:806:13)
        at Function.zui_Ext.fileBrowser (<anonymous>:26660:26)
        at Elements.render (<anonymous>:36:13)
        at Function.kha_System.render (<anonymous>:3403:3)
        at kha_SystemImpl.renderCallback (<anonymous>:3544:13)

haxe.io.Bytes 是一个底层 I/O 对象，转换到不同的语言有不同行为。

    C:\HaxeToolkit\haxe\std\haxe\io\Bytes.hx

Armory SDK 中包含了 Krom API 的定义，通过 `Krom` 类型调用其 Krom 导出的 API 函数库。

    Krom\lib\krom.js
    armsdk\Kha\Backends\Krom\Krom.hx

Krom 基于 Nodejs 二次开发，Krom/lib 目录下的脚本是 V8 脚本运行环境初始化程序库，它们同时
通过 `internalBinding('krom')` 向脚本运行环境导出 C++ 编写的 API。Haxe 编程中基本掌握
这些 API 即可以。

由于 Krom 文档严重缺失，所以阅读其源代码可能是更有效的学习方法，而非是搜索引擎。

```java
    static function writeStorage(name: String, data: haxe.io.BytesData): Void;
    static function readStorage(name: String): haxe.io.BytesData;

    static function fileSaveBytes(path: String, bytes: haxe.io.BytesData): Void;
    static function sysCommand(cmd: String, ?args: Array<String>): Int;
    static function savePath(): String;
    static function getArgCount(): Int;
    static function getArg(index: Int): String;
    static function getFilesLocation(): String;
```

Krom.getFilesLocation() 用来获取 Krom 程序运行所在目录，Armory 编译后的程序默认位置是：

    build_PROJECT/debug/krom/krom.js

如果 Krom.fileSaveBytes() 路径参数中使用相对目录，则是相对于 Krom 主程序所在的目录。但是，
Data.getBlob() 使用的路径总是程序打包资源的路径。

所以，以下脚本可以定位到项目的 Bundled 目录：

```js
var path = Krom.getFilesLocation() + "/../../../" + "/Bundled/save_game.json";
```

数据文件的读写，分别可以调用 `iron.data.Data.getBlob()` 和 `Krom.fileSaveBytes()`。
Krom 还提供一对方法存储接口：writeStorage 和 readStorage，它们在源代码中的关系如下：

```C++,ignore
    // \Krom\src\krom\chakra\main.cpp
    void bindFunctions() {
        addFunction(writeStorage, krom_write_storage);
        addFunction(readStorage, krom_read_storage);
    }
    static void krom_write_storage(const FunctionCallbackInfo<Value> &args);
    static void krom_read_storage(const FunctionCallbackInfo<Value> &args);
```

游戏的存档文件可以用二进制格式，这样更省空间，这也是网络数据传输中常用的方式。也可以使用更简易
JSON 数据作为存档，这是一种通用的字符串数据格式，Haxe 等编程语言都有相应的接口。字符串数据
在传递给数据写入 API 时，需要将字符串转换为字节数组：

```py
    var saveDataJSON = haxe.Json.stringify(saveData);
    var bytes = haxe.io.Bytes.ofString(saveDataJSON);
```

数据读写相关逻辑节点：

1. `WriteFileNode` JSON 数据写入节点；
2. `ReadFileNode` JSON 数据读取节点；
1. `WriteJsonNode` JSON 数据写入节点；
2. `ReadJsonNode` JSON 数据读取节点；
3. `WriteStorageNode` 键值对读取节点；
4. `ReadStorageNode` 键值对写入节点；

文件读写与 JSON 数据读写服务 API 如下：

```haxe
    // Save to the file
    var s = haxe.Json.stringify(data);

    #if kha_krom
    var path = Krom.getFilesLocation() + "/" + file;
    var bytes = haxe.io.Bytes.ofString(s);
    Krom.fileSaveBytes(path, bytes.getData());
    #end

    // Load the file asynchronously
    if (!useCache && iron.data.Data.cachedBlobs.get(file) != null){
        iron.data.Data.cachedBlobs.remove(file);
    }
    iron.data.Data.getBlob(file, function(b: kha.Blob) {
        data = haxe.Json.parse(b.toString());
        if (!useCache) iron.data.Data.cachedBlobs.remove(file);
        runOutput(0);
    });
```

Irom 的数据缓存服务就是在内存开辟一块区域，专用于数据文件、着色器、几何体、材质、粒子等等数据的存储。
数据容器采用 `Map<String, DATA>` 键值对。

在 Web 平台上 JSON 读取操作表现就是一个 GET 文件请求，无写入操作，应该使用网络库进行操作。

键值对数据存储服务由 kha.StorageFile 提供，根据不同平台使用不同的底层实现，数据使用串行化接口 `haxe.Serializer` 和 `haxe.Unserializer` 完成写入或读取前的转换工作。然后由上层框架调用，
iron.system.Storage，由其静态数据成员提供 `get()` 和 `set()` 方法执行键值的 Key 定义操作。
具体数据则由私有静态数据成员保存，并通过 `save()` 和 `get_data()` 等方法执行操作。

在使用串行化 API 时，如果对象存在循环引用，则会导致异常：

    RangeError: Maximum call stack size exceeded

`kha.StorageFile` 只是定义了一个数据服务接口，数据存储使用 `Blob`，具体数据读写操作根据平台
差异化实现，并扩展此类型。Iron 初始化时调用为具体平台实现的 `kha.Storage.defaultFile()`
方法创建默认的数据存储服务文件，默认名称是 **default.kha**，如果不支持就返回 null。

例如，Krom 平台下，使用前面提到的 API：

```haxe
    override public function read(): Blob {
        var data: BytesData = Krom.readStorage(name);
        return data != null ? Blob.fromBytes(Bytes.ofData(data)) : null;
    }

    override public function write(data: Blob): Void {
        if (data != null) {
            Krom.writeStorage(name, data.toBytes().getData());
        }
    }
```

例如，浏览器平台下使用 `LocalStorageFile` 本地存储服务，Flash 或 HTML5 环境保存数据易丢失。
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage

键值对数据可以是以下几种类型，参考 `parseArg()` 函数代码逻辑：

1. 数值，`Std.parseFloat(str)` 或 `Std.parseInt(str)` 方法解析返回值；
2. bool，根据字符串 "true" 或 "false" 返回 `true` 或 `false`;
3. 字符串，使用单引号包括，读取时使用 `Std.StringTools.replace(str, "'", "")` 方法解析；
4. 嵌套数组，使用 `parseArg()` 函数递归解释，并返回一个 `Dynamic` 类型；

```js
    // ReadStorageNode
    var data: Dynamic = iron.system.Storage.data;
    if (data == null) return null;

    var value: Dynamic = Reflect.field(data, key);

    if (value == null) {
        value = parseArg(inputs[1].get());
    }

    // WriteStorageNode
    var data = iron.system.Storage.data;
    if (data == null) return;

    Reflect.setField(data, key, value);
    iron.system.Storage.save();
```

BG-36's Tutorials - SaveLoadMechanism 教程结构、功能说明：

    .
    |-- Bundled
    |   |-- Bundled/canvas
    |   |   |-- Bundled/canvas/SaveLoad.files
    |   |   |-- Bundled/canvas/SaveLoad.json
    |   |   `-- Bundled/canvas/_themes.json
    |   `-- Bundled/save_game.json
    |-- Sources
    |   |-- Sources/Main.hx
    |   `-- Sources/arm
    |       |-- Sources/arm/CubeController.hx
    |       `-- Sources/arm/SaveLoadMechanism.hx
    |-- khafile.js
    `-- untitled.blend

- Blender 创建一个场景，主要是一个 Cube，它的位置将当作游戏中的需要存档的数据写入文件；
- CubeController 控制器类用处理键盘的方向的方向键，用来控制对象的移动。
- 用 `irom.system.Input.getKeyboard()` 来处理键盘输入，M 切换显示。
- SaveLoadMechanism 类中调用数据读写 API 来实现档案读写操作。
- Scene 属性面板中，Scene Armory Traits 列表添加两个 Trait 扩展：
    - 一个 Canvas UI Trait，只需要在适当位置放置 Save 和 Load 两个按钮；
    - 一个 Haxe Trait 加载 `SaveLoadMechanism` 用于处理 Save 和 Load 按钮的动作；
- Cube 对象属性面板中，将 `CubeController` 类添加到 Armory Traits 列表，以控制其移动。

Canvas UI 中的 Script - Event 属性指定一个事件名，点击时会触发此事件，比如 `save_btn`。
然后，在需要处理此事件的 Haxe 脚本中调用 `Event.add("save_btn", save);` 注册一个处理函数。

iron.Trait 类型的 **object** 属性引用了当前 trait 归属的所有者，对于 Cube 以上的来说，
就是 `CubeController` 通过过 **object** 引用 Cube 对象。

注意，档案读写逻辑中，保存动作写入的方位位于 Bundled 目录，而 `Data.getBlob()` 读取的是打包
好的资源路径，所以当前写入的 **save_game.json** 只会在下编译程序并运行时被读取到。

Main.hx 入口类代码：

```haxe
    package ;
    class Main {
        public static inline var projectName = 'SaveLoadMechanism';
        public static inline var projectVersion = '1.0.0';
        public static inline var projectPackage = 'arm';
        public static function main() {
            iron.object.BoneAnimation.skinMaxBones = 8;
            iron.object.LightObject.cascadeCount = 4;
            iron.object.LightObject.cascadeSplitFactor = 0.800000011920929;
            armory.system.Starter.main(
                'Scene',
                0,
                false,
                true,
                false,
                960,
                540,
                1,
                true,
                armory.renderpath.RenderPathCreator.get
            );
        }
    }
```

CubeController.hx 控制器类代码：

```haxe
    package arm;

    import iron.math.Vec4;
    import iron.system.Input;
    import kha.math.Random;

    class CubeController extends iron.Trait {
        var kb = Input.getKeyboard();
        public function new() {
            super();

            notifyOnUpdate(function() {
                if(kb.down("up")) object.transform.translate(-0.2, 0.0, 0.0);
                else if (kb.down("down")) object.transform.translate(0.2, 0.0, 0.0);
                else if (kb.down("left")) object.transform.translate(0.0, -0.2, 0.0);
                else if (kb.down("right")) object.transform.translate(0.0, 0.2, 0.0);
                else if (kb.down("r")) object.transform.rotate(new Vec4(Math.random(), Math.random(), Math.random()), 0.1);
            });
        }
    }
```

SaveLoadMechanism.hx 档案读写工具类代码：

```haxe
    package arm;

    import armory.trait.internal.CanvasScript;
    import armory.system.Event;
    import iron.Scene;
    import iron.math.Vec4;
    import iron.system.Input;
    import iron.data.Data;

    typedef Cube = { loc : Vec4, rot : Vec4 }

    class SaveLoadMechanism extends iron.Trait {

        var kb = Input.getKeyboard();

        var saveFile = "save_game.json";

        var canvas:CanvasScript;

        var isButtonsHidden:Bool;

        public function new() {
            super();

            notifyOnInit(function(){
                canvas = Scene.active.getTrait(CanvasScript);

                hideButtons();
                isButtonsHidden = true;
                Event.add("save_btn", save);
                Event.add("load_btn", load);
            });

            notifyOnUpdate(function (){
                if (kb.started("m")){
                    if (isButtonsHidden){
                        showButtons();
                    }else{
                        hideButtons();
                    }
                }
            });

        }
        public function save(){
            var cube = Scene.active.getChild("Cube");
            var cubeLoc = cube.transform.loc;
            var cubeRot = new Vec4(cube.transform.rot.x, cube.transform.rot.y, cube.transform.rot.z);
            #if kha_krom
            var saveData: Cube = {loc: cubeLoc, rot: cubeRot};
            var saveDataJSON = haxe.Json.stringify(saveData);

            var path = Krom.getFilesLocation() + "/../../../" + "/Bundled/save_game.json";

            var bytes = haxe.io.Bytes.ofString(saveDataJSON);
            Krom.fileSaveBytes(path, bytes.getData());
            trace("Saved!", path);
            #end
        }

        public function load() {
            var cube = Scene.active.getChild("Cube");
            Data.getBlob(saveFile, function(b:kha.Blob) {
                // Get string from loaded bytes
                var string = b.toString();

                // Get json from string
                var json = haxe.Json.parse(string);
                cube.transform.loc = json.loc;
                cube.transform.setRotation(json.rot.x, json.rot.y, json.rot.z);
                cube.transform.buildMatrix();
            });
        }

        public function hideButtons() {
            canvas.getElement("save_btn").visible = false;
            canvas.getElement("load_btn").visible = false;
            isButtonsHidden = true;
        }

        public function showButtons() {
            canvas.getElement("save_btn").visible = true;
            canvas.getElement("load_btn").visible = true;
            isButtonsHidden = false;
        }
    }
```


# 🥚 Sources List

    [Sources List - Bledner Nodes]
    [Sources List - Haxe]
    [Sources List - Iron]
    [Sources List - Zui]
    [Sources List - Krom]
    [Sources List - Armory]
    [Sources List - Kha]
    [Sources List - Khamake]

## 🐥 Sources List - Bledner Nodes
                                                **Sources List - Bledner Nodes**

    blender\source\blender\nodes
    |-- nodes\CMakeLists.txt
    |-- nodes\NOD_add_node_search.hh
    |-- nodes\NOD_common.h
    |-- nodes\NOD_composite.h
    |-- nodes\NOD_derived_node_tree.hh
    |-- nodes\NOD_geometry.h
    |-- nodes\NOD_geometry_exec.hh
    |-- nodes\NOD_geometry_nodes_lazy_function.hh
    |-- nodes\NOD_geometry_nodes_log.hh
    |-- nodes\NOD_math_functions.hh
    |-- nodes\NOD_multi_function.hh
    |-- nodes\NOD_node_declaration.hh
    |-- nodes\NOD_register.hh
    |-- nodes\NOD_shader.h
    |-- nodes\NOD_socket.h
    |-- nodes\NOD_socket_declarations.hh
    |-- nodes\NOD_socket_declarations_geometry.hh
    |-- nodes\NOD_socket_search_link.hh
    |-- nodes\NOD_static_types.h
    |-- nodes\NOD_texture.h
    |-- nodes\composite
    |   |-- nodes\composite\CMakeLists.txt
    |   |-- nodes\composite\node_composite_register.cc
    |   |-- nodes\composite\node_composite_register.hh
    |   |-- nodes\composite\node_composite_tree.cc
    |   |-- nodes\composite\node_composite_util.cc
    |   |-- nodes\composite\node_composite_util.hh
    |   `-- nodes\composite\nodes
    |       |-- nodes\composite\nodes\node_composite_alpha_over.cc
    |       |-- nodes\composite\nodes\node_composite_antialiasing.cc
    |       |-- nodes\composite\nodes\node_composite_bilateralblur.cc
    |       |-- nodes\composite\nodes\node_composite_blur.cc
    |       |-- nodes\composite\nodes\node_composite_bokehblur.cc
    |       |-- nodes\composite\nodes\node_composite_bokehimage.cc
    |       |-- nodes\composite\nodes\node_composite_boxmask.cc
    |       |-- nodes\composite\nodes\node_composite_brightness.cc
    |       |-- nodes\composite\nodes\node_composite_channel_matte.cc
    |       |-- nodes\composite\nodes\node_composite_chroma_matte.cc
    |       |-- nodes\composite\nodes\node_composite_color_matte.cc
    |       |-- nodes\composite\nodes\node_composite_color_spill.cc
    |       |-- nodes\composite\nodes\node_composite_colorbalance.cc
    |       |-- nodes\composite\nodes\node_composite_colorcorrection.cc
    |       |-- nodes\composite\nodes\node_composite_common.cc
    |       |-- nodes\composite\nodes\node_composite_composite.cc
    |       |-- nodes\composite\nodes\node_composite_convert_color_space.cc
    |       |-- nodes\composite\nodes\node_composite_cornerpin.cc
    |       |-- nodes\composite\nodes\node_composite_crop.cc
    |       |-- nodes\composite\nodes\node_composite_cryptomatte.cc
    |       |-- nodes\composite\nodes\node_composite_curves.cc
    |       |-- nodes\composite\nodes\node_composite_defocus.cc
    |       |-- nodes\composite\nodes\node_composite_denoise.cc
    |       |-- nodes\composite\nodes\node_composite_despeckle.cc
    |       |-- nodes\composite\nodes\node_composite_diff_matte.cc
    |       |-- nodes\composite\nodes\node_composite_dilate.cc
    |       |-- nodes\composite\nodes\node_composite_directionalblur.cc
    |       |-- nodes\composite\nodes\node_composite_displace.cc
    |       |-- nodes\composite\nodes\node_composite_distance_matte.cc
    |       |-- nodes\composite\nodes\node_composite_double_edge_mask.cc
    |       |-- nodes\composite\nodes\node_composite_ellipsemask.cc
    |       |-- nodes\composite\nodes\node_composite_exposure.cc
    |       |-- nodes\composite\nodes\node_composite_filter.cc
    |       |-- nodes\composite\nodes\node_composite_flip.cc
    |       |-- nodes\composite\nodes\node_composite_gamma.cc
    |       |-- nodes\composite\nodes\node_composite_glare.cc
    |       |-- nodes\composite\nodes\node_composite_hue_sat_val.cc
    |       |-- nodes\composite\nodes\node_composite_huecorrect.cc
    |       |-- nodes\composite\nodes\node_composite_id_mask.cc
    |       |-- nodes\composite\nodes\node_composite_image.cc
    |       |-- nodes\composite\nodes\node_composite_inpaint.cc
    |       |-- nodes\composite\nodes\node_composite_invert.cc
    |       |-- nodes\composite\nodes\node_composite_keying.cc
    |       |-- nodes\composite\nodes\node_composite_keyingscreen.cc
    |       |-- nodes\composite\nodes\node_composite_lensdist.cc
    |       |-- nodes\composite\nodes\node_composite_levels.cc
    |       |-- nodes\composite\nodes\node_composite_luma_matte.cc
    |       |-- nodes\composite\nodes\node_composite_map_range.cc
    |       |-- nodes\composite\nodes\node_composite_map_uv.cc
    |       |-- nodes\composite\nodes\node_composite_map_value.cc
    |       |-- nodes\composite\nodes\node_composite_mask.cc
    |       |-- nodes\composite\nodes\node_composite_math.cc
    |       |-- nodes\composite\nodes\node_composite_mixrgb.cc
    |       |-- nodes\composite\nodes\node_composite_movieclip.cc
    |       |-- nodes\composite\nodes\node_composite_moviedistortion.cc
    |       |-- nodes\composite\nodes\node_composite_normal.cc
    |       |-- nodes\composite\nodes\node_composite_normalize.cc
    |       |-- nodes\composite\nodes\node_composite_output_file.cc
    |       |-- nodes\composite\nodes\node_composite_pixelate.cc
    |       |-- nodes\composite\nodes\node_composite_planetrackdeform.cc
    |       |-- nodes\composite\nodes\node_composite_posterize.cc
    |       |-- nodes\composite\nodes\node_composite_premulkey.cc
    |       |-- nodes\composite\nodes\node_composite_rgb.cc
    |       |-- nodes\composite\nodes\node_composite_rotate.cc
    |       |-- nodes\composite\nodes\node_composite_scale.cc
    |       |-- nodes\composite\nodes\node_composite_scene_time.cc
    |       |-- nodes\composite\nodes\node_composite_sepcomb_color.cc
    |       |-- nodes\composite\nodes\node_composite_sepcomb_hsva.cc
    |       |-- nodes\composite\nodes\node_composite_sepcomb_rgba.cc
    |       |-- nodes\composite\nodes\node_composite_sepcomb_xyz.cc
    |       |-- nodes\composite\nodes\node_composite_sepcomb_ycca.cc
    |       |-- nodes\composite\nodes\node_composite_sepcomb_yuva.cc
    |       |-- nodes\composite\nodes\node_composite_setalpha.cc
    |       |-- nodes\composite\nodes\node_composite_split_viewer.cc
    |       |-- nodes\composite\nodes\node_composite_stabilize2d.cc
    |       |-- nodes\composite\nodes\node_composite_sunbeams.cc
    |       |-- nodes\composite\nodes\node_composite_switch.cc
    |       |-- nodes\composite\nodes\node_composite_switchview.cc
    |       |-- nodes\composite\nodes\node_composite_texture.cc
    |       |-- nodes\composite\nodes\node_composite_tonemap.cc
    |       |-- nodes\composite\nodes\node_composite_trackpos.cc
    |       |-- nodes\composite\nodes\node_composite_transform.cc
    |       |-- nodes\composite\nodes\node_composite_translate.cc
    |       |-- nodes\composite\nodes\node_composite_val_to_rgb.cc
    |       |-- nodes\composite\nodes\node_composite_value.cc
    |       |-- nodes\composite\nodes\node_composite_vec_blur.cc
    |       |-- nodes\composite\nodes\node_composite_viewer.cc
    |       `-- nodes\composite\nodes\node_composite_zcombine.cc
    |-- nodes\function
    |   |-- nodes\function\CMakeLists.txt
    |   |-- nodes\function\node_function_register.cc
    |   |-- nodes\function\node_function_register.hh
    |   |-- nodes\function\node_function_util.cc
    |   |-- nodes\function\node_function_util.hh
    |   `-- nodes\function\nodes
    |       |-- nodes\function\nodes\node_fn_align_euler_to_vector.cc
    |       |-- nodes\function\nodes\node_fn_boolean_math.cc
    |       |-- nodes\function\nodes\node_fn_combine_color.cc
    |       |-- nodes\function\nodes\node_fn_compare.cc
    |       |-- nodes\function\nodes\node_fn_float_to_int.cc
    |       |-- nodes\function\nodes\node_fn_input_bool.cc
    |       |-- nodes\function\nodes\node_fn_input_color.cc
    |       |-- nodes\function\nodes\node_fn_input_int.cc
    |       |-- nodes\function\nodes\node_fn_input_special_characters.cc
    |       |-- nodes\function\nodes\node_fn_input_string.cc
    |       |-- nodes\function\nodes\node_fn_input_vector.cc
    |       |-- nodes\function\nodes\node_fn_random_value.cc
    |       |-- nodes\function\nodes\node_fn_replace_string.cc
    |       |-- nodes\function\nodes\node_fn_rotate_euler.cc
    |       |-- nodes\function\nodes\node_fn_separate_color.cc
    |       |-- nodes\function\nodes\node_fn_slice_string.cc
    |       |-- nodes\function\nodes\node_fn_string_length.cc
    |       `-- nodes\function\nodes\node_fn_value_to_string.cc
    |-- nodes\geometry
    |   |-- nodes\geometry\CMakeLists.txt
    |   |-- nodes\geometry\node_geometry_register.cc
    |   |-- nodes\geometry\node_geometry_register.hh
    |   |-- nodes\geometry\node_geometry_tree.cc
    |   |-- nodes\geometry\node_geometry_util.cc
    |   |-- nodes\geometry\node_geometry_util.hh
    |   `-- nodes\geometry\nodes
    |       |-- nodes\geometry\nodes\node_geo_accumulate_field.cc
    |       |-- nodes\geometry\nodes\node_geo_attribute_capture.cc
    |       |-- nodes\geometry\nodes\node_geo_attribute_domain_size.cc
    |       |-- nodes\geometry\nodes\node_geo_attribute_statistic.cc
    |       |-- nodes\geometry\nodes\node_geo_blur_attribute.cc
    |       |-- nodes\geometry\nodes\node_geo_boolean.cc
    |       |-- nodes\geometry\nodes\node_geo_bounding_box.cc
    |       |-- nodes\geometry\nodes\node_geo_collection_info.cc
    |       |-- nodes\geometry\nodes\node_geo_common.cc
    |       |-- nodes\geometry\nodes\node_geo_convex_hull.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_endpoint_selection.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_fill.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_fillet.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_handle_type_selection.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_length.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_primitive_arc.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_primitive_bezier_segment.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_primitive_circle.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_primitive_line.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_primitive_quadratic_bezier.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_primitive_quadrilateral.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_primitive_spiral.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_primitive_star.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_resample.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_reverse.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_sample.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_set_handle_type.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_spline_parameter.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_spline_type.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_subdivide.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_to_mesh.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_to_points.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_topology_curve_of_point.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_topology_points_of_curve.cc
    |       |-- nodes\geometry\nodes\node_geo_curve_trim.cc
    |       |-- nodes\geometry\nodes\node_geo_deform_curves_on_surface.cc
    |       |-- nodes\geometry\nodes\node_geo_delete_geometry.cc
    |       |-- nodes\geometry\nodes\node_geo_distribute_points_in_volume.cc
    |       |-- nodes\geometry\nodes\node_geo_distribute_points_on_faces.cc
    |       |-- nodes\geometry\nodes\node_geo_dual_mesh.cc
    |       |-- nodes\geometry\nodes\node_geo_duplicate_elements.cc
    |       |-- nodes\geometry\nodes\node_geo_edge_paths_to_curves.cc
    |       |-- nodes\geometry\nodes\node_geo_edge_paths_to_selection.cc
    |       |-- nodes\geometry\nodes\node_geo_edge_split.cc
    |       |-- nodes\geometry\nodes\node_geo_edges_to_face_groups.cc
    |       |-- nodes\geometry\nodes\node_geo_evaluate_at_index.cc
    |       |-- nodes\geometry\nodes\node_geo_evaluate_on_domain.cc
    |       |-- nodes\geometry\nodes\node_geo_extrude_mesh.cc
    |       |-- nodes\geometry\nodes\node_geo_flip_faces.cc
    |       |-- nodes\geometry\nodes\node_geo_geometry_to_instance.cc
    |       |-- nodes\geometry\nodes\node_geo_image.cc
    |       |-- nodes\geometry\nodes\node_geo_image_info.cc
    |       |-- nodes\geometry\nodes\node_geo_image_texture.cc
    |       |-- nodes\geometry\nodes\node_geo_input_curve_handles.cc
    |       |-- nodes\geometry\nodes\node_geo_input_curve_tilt.cc
    |       |-- nodes\geometry\nodes\node_geo_input_id.cc
    |       |-- nodes\geometry\nodes\node_geo_input_index.cc
    |       |-- nodes\geometry\nodes\node_geo_input_instance_rotation.cc
    |       |-- nodes\geometry\nodes\node_geo_input_instance_scale.cc
    |       |-- nodes\geometry\nodes\node_geo_input_material.cc
    |       |-- nodes\geometry\nodes\node_geo_input_material_index.cc
    |       |-- nodes\geometry\nodes\node_geo_input_mesh_edge_angle.cc
    |       |-- nodes\geometry\nodes\node_geo_input_mesh_edge_neighbors.cc
    |       |-- nodes\geometry\nodes\node_geo_input_mesh_edge_vertices.cc
    |       |-- nodes\geometry\nodes\node_geo_input_mesh_face_area.cc
    |       |-- nodes\geometry\nodes\node_geo_input_mesh_face_is_planar.cc
    |       |-- nodes\geometry\nodes\node_geo_input_mesh_face_neighbors.cc
    |       |-- nodes\geometry\nodes\node_geo_input_mesh_island.cc
    |       |-- nodes\geometry\nodes\node_geo_input_mesh_vertex_neighbors.cc
    |       |-- nodes\geometry\nodes\node_geo_input_named_attribute.cc
    |       |-- nodes\geometry\nodes\node_geo_input_normal.cc
    |       |-- nodes\geometry\nodes\node_geo_input_position.cc
    |       |-- nodes\geometry\nodes\node_geo_input_radius.cc
    |       |-- nodes\geometry\nodes\node_geo_input_scene_time.cc
    |       |-- nodes\geometry\nodes\node_geo_input_shade_smooth.cc
    |       |-- nodes\geometry\nodes\node_geo_input_shortest_edge_paths.cc
    |       |-- nodes\geometry\nodes\node_geo_input_spline_cyclic.cc
    |       |-- nodes\geometry\nodes\node_geo_input_spline_length.cc
    |       |-- nodes\geometry\nodes\node_geo_input_spline_resolution.cc
    |       |-- nodes\geometry\nodes\node_geo_input_tangent.cc
    |       |-- nodes\geometry\nodes\node_geo_instance_on_points.cc
    |       |-- nodes\geometry\nodes\node_geo_instances_to_points.cc
    |       |-- nodes\geometry\nodes\node_geo_interpolate_curves.cc
    |       |-- nodes\geometry\nodes\node_geo_is_viewport.cc
    |       |-- nodes\geometry\nodes\node_geo_join_geometry.cc
    |       |-- nodes\geometry\nodes\node_geo_material_replace.cc
    |       |-- nodes\geometry\nodes\node_geo_material_selection.cc
    |       |-- nodes\geometry\nodes\node_geo_merge_by_distance.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_face_group_boundaries.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_primitive_circle.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_primitive_cone.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_primitive_cube.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_primitive_cylinder.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_primitive_grid.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_primitive_ico_sphere.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_primitive_line.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_primitive_uv_sphere.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_subdivide.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_to_curve.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_to_points.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_to_volume.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_topology_corners_of_face.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_topology_corners_of_vertex.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_topology_edges_of_corner.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_topology_edges_of_vertex.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_topology_face_of_corner.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_topology_offset_corner_in_face.cc
    |       |-- nodes\geometry\nodes\node_geo_mesh_topology_vertex_of_corner.cc
    |       |-- nodes\geometry\nodes\node_geo_object_info.cc
    |       |-- nodes\geometry\nodes\node_geo_offset_point_in_curve.cc
    |       |-- nodes\geometry\nodes\node_geo_points.cc
    |       |-- nodes\geometry\nodes\node_geo_points_to_vertices.cc
    |       |-- nodes\geometry\nodes\node_geo_points_to_volume.cc
    |       |-- nodes\geometry\nodes\node_geo_proximity.cc
    |       |-- nodes\geometry\nodes\node_geo_raycast.cc
    |       |-- nodes\geometry\nodes\node_geo_realize_instances.cc
    |       |-- nodes\geometry\nodes\node_geo_remove_attribute.cc
    |       |-- nodes\geometry\nodes\node_geo_rotate_instances.cc
    |       |-- nodes\geometry\nodes\node_geo_sample_index.cc
    |       |-- nodes\geometry\nodes\node_geo_sample_nearest.cc
    |       |-- nodes\geometry\nodes\node_geo_sample_nearest_surface.cc
    |       |-- nodes\geometry\nodes\node_geo_sample_uv_surface.cc
    |       |-- nodes\geometry\nodes\node_geo_scale_elements.cc
    |       |-- nodes\geometry\nodes\node_geo_scale_instances.cc
    |       |-- nodes\geometry\nodes\node_geo_self_object.cc
    |       |-- nodes\geometry\nodes\node_geo_separate_components.cc
    |       |-- nodes\geometry\nodes\node_geo_separate_geometry.cc
    |       |-- nodes\geometry\nodes\node_geo_set_curve_handles.cc
    |       |-- nodes\geometry\nodes\node_geo_set_curve_normal.cc
    |       |-- nodes\geometry\nodes\node_geo_set_curve_radius.cc
    |       |-- nodes\geometry\nodes\node_geo_set_curve_tilt.cc
    |       |-- nodes\geometry\nodes\node_geo_set_id.cc
    |       |-- nodes\geometry\nodes\node_geo_set_material.cc
    |       |-- nodes\geometry\nodes\node_geo_set_material_index.cc
    |       |-- nodes\geometry\nodes\node_geo_set_point_radius.cc
    |       |-- nodes\geometry\nodes\node_geo_set_position.cc
    |       |-- nodes\geometry\nodes\node_geo_set_shade_smooth.cc
    |       |-- nodes\geometry\nodes\node_geo_set_spline_cyclic.cc
    |       |-- nodes\geometry\nodes\node_geo_set_spline_resolution.cc
    |       |-- nodes\geometry\nodes\node_geo_store_named_attribute.cc
    |       |-- nodes\geometry\nodes\node_geo_string_join.cc
    |       |-- nodes\geometry\nodes\node_geo_string_to_curves.cc
    |       |-- nodes\geometry\nodes\node_geo_subdivision_surface.cc
    |       |-- nodes\geometry\nodes\node_geo_switch.cc
    |       |-- nodes\geometry\nodes\node_geo_transform_geometry.cc
    |       |-- nodes\geometry\nodes\node_geo_translate_instances.cc
    |       |-- nodes\geometry\nodes\node_geo_triangulate.cc
    |       |-- nodes\geometry\nodes\node_geo_uv_pack_islands.cc
    |       |-- nodes\geometry\nodes\node_geo_uv_unwrap.cc
    |       |-- nodes\geometry\nodes\node_geo_viewer.cc
    |       |-- nodes\geometry\nodes\node_geo_volume_cube.cc
    |       `-- nodes\geometry\nodes\node_geo_volume_to_mesh.cc
    |-- nodes\intern
    |   |-- nodes\intern\add_node_search.cc
    |   |-- nodes\intern\derived_node_tree.cc
    |   |-- nodes\intern\geometry_nodes_lazy_function.cc
    |   |-- nodes\intern\geometry_nodes_log.cc
    |   |-- nodes\intern\math_functions.cc
    |   |-- nodes\intern\node_common.cc
    |   |-- nodes\intern\node_common.h
    |   |-- nodes\intern\node_declaration.cc
    |   |-- nodes\intern\node_exec.cc
    |   |-- nodes\intern\node_exec.h
    |   |-- nodes\intern\node_geometry_exec.cc
    |   |-- nodes\intern\node_multi_function.cc
    |   |-- nodes\intern\node_register.cc
    |   |-- nodes\intern\node_socket.cc
    |   |-- nodes\intern\node_socket_declarations.cc
    |   |-- nodes\intern\node_util.cc
    |   |-- nodes\intern\node_util.h
    |   `-- nodes\intern\socket_search_link.cc
    |-- nodes\shader
    |   |-- nodes\shader\CMakeLists.txt
    |   |-- nodes\shader\node_shader_register.cc
    |   |-- nodes\shader\node_shader_register.hh
    |   |-- nodes\shader\node_shader_tree.cc
    |   |-- nodes\shader\node_shader_util.cc
    |   |-- nodes\shader\node_shader_util.hh
    |   `-- nodes\shader\nodes
    |       |-- nodes\shader\nodes\node_shader_add_shader.cc
    |       |-- nodes\shader\nodes\node_shader_ambient_occlusion.cc
    |       |-- nodes\shader\nodes\node_shader_attribute.cc
    |       |-- nodes\shader\nodes\node_shader_background.cc
    |       |-- nodes\shader\nodes\node_shader_bevel.cc
    |       |-- nodes\shader\nodes\node_shader_blackbody.cc
    |       |-- nodes\shader\nodes\node_shader_brightness.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_anisotropic.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_diffuse.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_glass.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_glossy.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_hair.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_hair_principled.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_principled.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_refraction.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_toon.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_translucent.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_transparent.cc
    |       |-- nodes\shader\nodes\node_shader_bsdf_velvet.cc
    |       |-- nodes\shader\nodes\node_shader_bump.cc
    |       |-- nodes\shader\nodes\node_shader_camera.cc
    |       |-- nodes\shader\nodes\node_shader_clamp.cc
    |       |-- nodes\shader\nodes\node_shader_color_ramp.cc
    |       |-- nodes\shader\nodes\node_shader_common.cc
    |       |-- nodes\shader\nodes\node_shader_curves.cc
    |       |-- nodes\shader\nodes\node_shader_displacement.cc
    |       |-- nodes\shader\nodes\node_shader_eevee_specular.cc
    |       |-- nodes\shader\nodes\node_shader_emission.cc
    |       |-- nodes\shader\nodes\node_shader_fresnel.cc
    |       |-- nodes\shader\nodes\node_shader_gamma.cc
    |       |-- nodes\shader\nodes\node_shader_geometry.cc
    |       |-- nodes\shader\nodes\node_shader_hair_info.cc
    |       |-- nodes\shader\nodes\node_shader_holdout.cc
    |       |-- nodes\shader\nodes\node_shader_hueSatVal.cc
    |       |-- nodes\shader\nodes\node_shader_ies_light.cc
    |       |-- nodes\shader\nodes\node_shader_invert.cc
    |       |-- nodes\shader\nodes\node_shader_layer_weight.cc
    |       |-- nodes\shader\nodes\node_shader_light_falloff.cc
    |       |-- nodes\shader\nodes\node_shader_light_path.cc
    |       |-- nodes\shader\nodes\node_shader_map_range.cc
    |       |-- nodes\shader\nodes\node_shader_mapping.cc
    |       |-- nodes\shader\nodes\node_shader_math.cc
    |       |-- nodes\shader\nodes\node_shader_mix.cc
    |       |-- nodes\shader\nodes\node_shader_mix_rgb.cc
    |       |-- nodes\shader\nodes\node_shader_mix_shader.cc
    |       |-- nodes\shader\nodes\node_shader_normal.cc
    |       |-- nodes\shader\nodes\node_shader_normal_map.cc
    |       |-- nodes\shader\nodes\node_shader_object_info.cc
    |       |-- nodes\shader\nodes\node_shader_output_aov.cc
    |       |-- nodes\shader\nodes\node_shader_output_light.cc
    |       |-- nodes\shader\nodes\node_shader_output_linestyle.cc
    |       |-- nodes\shader\nodes\node_shader_output_material.cc
    |       |-- nodes\shader\nodes\node_shader_output_world.cc
    |       |-- nodes\shader\nodes\node_shader_particle_info.cc
    |       |-- nodes\shader\nodes\node_shader_point_info.cc
    |       |-- nodes\shader\nodes\node_shader_rgb.cc
    |       |-- nodes\shader\nodes\node_shader_rgb_to_bw.cc
    |       |-- nodes\shader\nodes\node_shader_script.cc
    |       |-- nodes\shader\nodes\node_shader_sepcomb_color.cc
    |       |-- nodes\shader\nodes\node_shader_sepcomb_hsv.cc
    |       |-- nodes\shader\nodes\node_shader_sepcomb_rgb.cc
    |       |-- nodes\shader\nodes\node_shader_sepcomb_xyz.cc
    |       |-- nodes\shader\nodes\node_shader_shader_to_rgb.cc
    |       |-- nodes\shader\nodes\node_shader_squeeze.cc
    |       |-- nodes\shader\nodes\node_shader_subsurface_scattering.cc
    |       |-- nodes\shader\nodes\node_shader_tangent.cc
    |       |-- nodes\shader\nodes\node_shader_tex_brick.cc
    |       |-- nodes\shader\nodes\node_shader_tex_checker.cc
    |       |-- nodes\shader\nodes\node_shader_tex_coord.cc
    |       |-- nodes\shader\nodes\node_shader_tex_environment.cc
    |       |-- nodes\shader\nodes\node_shader_tex_gradient.cc
    |       |-- nodes\shader\nodes\node_shader_tex_image.cc
    |       |-- nodes\shader\nodes\node_shader_tex_magic.cc
    |       |-- nodes\shader\nodes\node_shader_tex_musgrave.cc
    |       |-- nodes\shader\nodes\node_shader_tex_noise.cc
    |       |-- nodes\shader\nodes\node_shader_tex_pointdensity.cc
    |       |-- nodes\shader\nodes\node_shader_tex_sky.cc
    |       |-- nodes\shader\nodes\node_shader_tex_voronoi.cc
    |       |-- nodes\shader\nodes\node_shader_tex_wave.cc
    |       |-- nodes\shader\nodes\node_shader_tex_white_noise.cc
    |       |-- nodes\shader\nodes\node_shader_uv_along_stroke.cc
    |       |-- nodes\shader\nodes\node_shader_uvmap.cc
    |       |-- nodes\shader\nodes\node_shader_value.cc
    |       |-- nodes\shader\nodes\node_shader_vector_displacement.cc
    |       |-- nodes\shader\nodes\node_shader_vector_math.cc
    |       |-- nodes\shader\nodes\node_shader_vector_rotate.cc
    |       |-- nodes\shader\nodes\node_shader_vector_transform.cc
    |       |-- nodes\shader\nodes\node_shader_vertex_color.cc
    |       |-- nodes\shader\nodes\node_shader_volume_absorption.cc
    |       |-- nodes\shader\nodes\node_shader_volume_info.cc
    |       |-- nodes\shader\nodes\node_shader_volume_principled.cc
    |       |-- nodes\shader\nodes\node_shader_volume_scatter.cc
    |       |-- nodes\shader\nodes\node_shader_wavelength.cc
    |       `-- nodes\shader\nodes\node_shader_wireframe.cc
    `-- nodes\texture
        |-- nodes\texture\CMakeLists.txt
        |-- nodes\texture\node_texture_register.cc
        |-- nodes\texture\node_texture_register.hh
        |-- nodes\texture\node_texture_tree.cc
        |-- nodes\texture\node_texture_util.cc
        |-- nodes\texture\node_texture_util.hh
        `-- nodes\texture\nodes
            |-- nodes\texture\nodes\node_texture_at.cc
            |-- nodes\texture\nodes\node_texture_bricks.cc
            |-- nodes\texture\nodes\node_texture_checker.cc
            |-- nodes\texture\nodes\node_texture_combine_color.cc
            |-- nodes\texture\nodes\node_texture_common.cc
            |-- nodes\texture\nodes\node_texture_compose.cc
            |-- nodes\texture\nodes\node_texture_coord.cc
            |-- nodes\texture\nodes\node_texture_curves.cc
            |-- nodes\texture\nodes\node_texture_decompose.cc
            |-- nodes\texture\nodes\node_texture_distance.cc
            |-- nodes\texture\nodes\node_texture_hueSatVal.cc
            |-- nodes\texture\nodes\node_texture_image.cc
            |-- nodes\texture\nodes\node_texture_invert.cc
            |-- nodes\texture\nodes\node_texture_math.cc
            |-- nodes\texture\nodes\node_texture_mixRgb.cc
            |-- nodes\texture\nodes\node_texture_output.cc
            |-- nodes\texture\nodes\node_texture_proc.cc
            |-- nodes\texture\nodes\node_texture_rotate.cc
            |-- nodes\texture\nodes\node_texture_scale.cc
            |-- nodes\texture\nodes\node_texture_separate_color.cc
            |-- nodes\texture\nodes\node_texture_texture.cc
            |-- nodes\texture\nodes\node_texture_translate.cc
            |-- nodes\texture\nodes\node_texture_valToNor.cc
            |-- nodes\texture\nodes\node_texture_valToRgb.cc
            `-- nodes\texture\nodes\node_texture_viewer.cc


## 🐥 Sources List - Haxe
                                                         **Sources List - Haxe**

### Haxe-4.3.0 libs

    haxe-4.3.0\libs
    |-- haxe-4.3.0\libs\Makefile
    |-- haxe-4.3.0\libs\extc
    |   |-- haxe-4.3.0\libs\extc\LICENSE
    |   |-- haxe-4.3.0\libs\extc\Makefile
    |   |-- haxe-4.3.0\libs\extc\dune
    |   |-- haxe-4.3.0\libs\extc\extc.ml
    |   |-- haxe-4.3.0\libs\extc\extc_stubs.c
    |   |-- haxe-4.3.0\libs\extc\process.ml
    |   |-- haxe-4.3.0\libs\extc\process_stubs.c
    |   `-- haxe-4.3.0\libs\extc\test.ml
    |-- haxe-4.3.0\libs\extlib-leftovers
    |   |-- haxe-4.3.0\libs\extlib-leftovers\Makefile
    |   |-- haxe-4.3.0\libs\extlib-leftovers\base64.ml
    |   |-- haxe-4.3.0\libs\extlib-leftovers\base64.mli
    |   |-- haxe-4.3.0\libs\extlib-leftovers\dune
    |   |-- haxe-4.3.0\libs\extlib-leftovers\multiArray.ml
    |   |-- haxe-4.3.0\libs\extlib-leftovers\multiArray.mli
    |   |-- haxe-4.3.0\libs\extlib-leftovers\rbuffer.ml
    |   |-- haxe-4.3.0\libs\extlib-leftovers\rbuffer.mli
    |   |-- haxe-4.3.0\libs\extlib-leftovers\uCharExt.ml
    |   |-- haxe-4.3.0\libs\extlib-leftovers\uCharExt.mli
    |   |-- haxe-4.3.0\libs\extlib-leftovers\uTF8.ml
    |   `-- haxe-4.3.0\libs\extlib-leftovers\uTF8.mli
    |-- haxe-4.3.0\libs\ilib
    |   |-- haxe-4.3.0\libs\ilib\Makefile
    |   |-- haxe-4.3.0\libs\ilib\dump.ml
    |   |-- haxe-4.3.0\libs\ilib\dune
    |   |-- haxe-4.3.0\libs\ilib\ilData.mli
    |   |-- haxe-4.3.0\libs\ilib\ilMeta.mli
    |   |-- haxe-4.3.0\libs\ilib\ilMetaDebug.ml
    |   |-- haxe-4.3.0\libs\ilib\ilMetaReader.ml
    |   |-- haxe-4.3.0\libs\ilib\ilMetaTools.ml
    |   |-- haxe-4.3.0\libs\ilib\ilMetaWriter.ml
    |   |-- haxe-4.3.0\libs\ilib\peData.ml
    |   |-- haxe-4.3.0\libs\ilib\peDataDebug.ml
    |   |-- haxe-4.3.0\libs\ilib\peReader.ml
    |   `-- haxe-4.3.0\libs\ilib\peWriter.ml
    |-- haxe-4.3.0\libs\javalib
    |   |-- haxe-4.3.0\libs\javalib\Makefile
    |   |-- haxe-4.3.0\libs\javalib\dune
    |   |-- haxe-4.3.0\libs\javalib\jData.ml
    |   |-- haxe-4.3.0\libs\javalib\jReader.ml
    |   `-- haxe-4.3.0\libs\javalib\jWriter.ml
    |-- haxe-4.3.0\libs\json
    |   |-- haxe-4.3.0\libs\json\dune
    |   `-- haxe-4.3.0\libs\json\json.ml
    |-- haxe-4.3.0\libs\mbedtls
    |   |-- haxe-4.3.0\libs\mbedtls\dune
    |   |-- haxe-4.3.0\libs\mbedtls\mbedtls.ml
    |   `-- haxe-4.3.0\libs\mbedtls\mbedtls_stubs.c
    |-- haxe-4.3.0\libs\neko
    |   |-- haxe-4.3.0\libs\neko\Makefile
    |   |-- haxe-4.3.0\libs\neko\binast.ml
    |   |-- haxe-4.3.0\libs\neko\dune
    |   |-- haxe-4.3.0\libs\neko\nast.ml
    |   |-- haxe-4.3.0\libs\neko\nbytecode.ml
    |   |-- haxe-4.3.0\libs\neko\ncompile.ml
    |   `-- haxe-4.3.0\libs\neko\nxml.ml
    |-- haxe-4.3.0\libs\objsize
    |   |-- haxe-4.3.0\libs\objsize\META
    |   |-- haxe-4.3.0\libs\objsize\Makefile
    |   |-- haxe-4.3.0\libs\objsize\README
    |   |-- haxe-4.3.0\libs\objsize\alloc.h
    |   |-- haxe-4.3.0\libs\objsize\bitarray.h
    |   |-- haxe-4.3.0\libs\objsize\c_objsize.c
    |   |-- haxe-4.3.0\libs\objsize\dune
    |   |-- haxe-4.3.0\libs\objsize\objsize.ml
    |   |-- haxe-4.3.0\libs\objsize\objsize.mli
    |   |-- haxe-4.3.0\libs\objsize\tests.ml
    |   `-- haxe-4.3.0\libs\objsize\util.h
    |-- haxe-4.3.0\libs\ocamake
    |   |-- haxe-4.3.0\libs\ocamake\ocamake.dsp
    |   |-- haxe-4.3.0\libs\ocamake\ocamake.dsw
    |   |-- haxe-4.3.0\libs\ocamake\ocamake.html
    |   `-- haxe-4.3.0\libs\ocamake\ocamake.ml
    |-- haxe-4.3.0\libs\pcre2
    |   |-- haxe-4.3.0\libs\pcre2\Makefile
    |   |-- haxe-4.3.0\libs\pcre2\dune
    |   |-- haxe-4.3.0\libs\pcre2\pcre2.ml
    |   `-- haxe-4.3.0\libs\pcre2\pcre2_stubs.c
    |-- haxe-4.3.0\libs\swflib
    |   |-- haxe-4.3.0\libs\swflib\LICENSE
    |   |-- haxe-4.3.0\libs\swflib\Makefile
    |   |-- haxe-4.3.0\libs\swflib\actionScript.ml
    |   |-- haxe-4.3.0\libs\swflib\as3.mli
    |   |-- haxe-4.3.0\libs\swflib\as3code.ml
    |   |-- haxe-4.3.0\libs\swflib\as3hl.mli
    |   |-- haxe-4.3.0\libs\swflib\as3hlparse.ml
    |   |-- haxe-4.3.0\libs\swflib\as3parse.ml
    |   |-- haxe-4.3.0\libs\swflib\dune
    |   |-- haxe-4.3.0\libs\swflib\png.ml
    |   |-- haxe-4.3.0\libs\swflib\png.mli
    |   |-- haxe-4.3.0\libs\swflib\swf.ml
    |   |-- haxe-4.3.0\libs\swflib\swfParser.ml
    |   |-- haxe-4.3.0\libs\swflib\swfPic.ml
    |   |-- haxe-4.3.0\libs\swflib\swflib.sln
    |   `-- haxe-4.3.0\libs\swflib\swflib.vcproj
    |-- haxe-4.3.0\libs\ttflib
    |   |-- haxe-4.3.0\libs\ttflib\Makefile
    |   |-- haxe-4.3.0\libs\ttflib\dune
    |   |-- haxe-4.3.0\libs\ttflib\main.ml
    |   |-- haxe-4.3.0\libs\ttflib\tTFCanvasWriter.ml
    |   |-- haxe-4.3.0\libs\ttflib\tTFData.ml
    |   |-- haxe-4.3.0\libs\ttflib\tTFJsonWriter.ml
    |   |-- haxe-4.3.0\libs\ttflib\tTFParser.ml
    |   |-- haxe-4.3.0\libs\ttflib\tTFSwfWriter.ml
    |   `-- haxe-4.3.0\libs\ttflib\tTFTools.ml
    `-- haxe-4.3.0\libs\ziplib
        |-- haxe-4.3.0\libs\ziplib\Makefile
        |-- haxe-4.3.0\libs\ziplib\dune
        |-- haxe-4.3.0\libs\ziplib\test
        |   |-- haxe-4.3.0\libs\ziplib\test\Makefile
        |   `-- haxe-4.3.0\libs\ziplib\test\minizip.ml
        |-- haxe-4.3.0\libs\ziplib\zip.ml
        |-- haxe-4.3.0\libs\ziplib\zip.mli
        |-- haxe-4.3.0\libs\ziplib\zlib.ml
        `-- haxe-4.3.0\libs\ziplib\zlib.mli

### Haxe-4.3.0 std

    haxe-4.3.0\std
    |-- haxe\std\Any.hx
    |-- haxe\std\Array.hx
    |-- haxe\std\Class.hx
    |-- haxe\std\Date.hx
    |-- haxe\std\DateTools.hx
    |-- haxe\std\EReg.hx
    |-- haxe\std\Enum.hx
    |-- haxe\std\EnumValue.hx
    |-- haxe\std\IntIterator.hx
    |-- haxe\std\Lambda.hx
    |-- haxe\std\List.hx
    |-- haxe\std\Map.hx
    |-- haxe\std\Math.hx
    |-- haxe\std\Reflect.hx
    |-- haxe\std\Std.hx
    |-- haxe\std\StdTypes.hx
    |-- haxe\std\String.hx
    |-- haxe\std\StringBuf.hx
    |-- haxe\std\StringTools.hx
    |-- haxe\std\Sys.hx
    |-- haxe\std\Type.hx
    |-- haxe\std\UInt.hx
    |-- haxe\std\UnicodeString.hx
    |-- haxe\std\Xml.hx
    |-- cpp
    |   |-- haxe\std\cpp\ArrayBase.hx
    |   |-- haxe\std\cpp\AtomicInt.hx
    |   |-- haxe\std\cpp\AutoCast.hx
    |   |-- haxe\std\cpp\Callable.hx
    |   |-- haxe\std\cpp\CastCharStar.hx
    |   |-- haxe\std\cpp\Char.hx
    |   |-- haxe\std\cpp\ConstCharStar.hx
    |   |-- haxe\std\cpp\ConstPointer.hx
    |   |-- haxe\std\cpp\ConstStar.hx
    |   |-- haxe\std\cpp\EnumBase.hx
    |   |-- haxe\std\cpp\ErrorConstants.hx
    |   |-- haxe\std\cpp\FILE.hx
    |   |-- haxe\std\cpp\FastIterator.hx
    |   |-- haxe\std\cpp\Finalizable.hx
    |   |-- haxe\std\cpp\Float32.hx
    |   |-- haxe\std\cpp\Float64.hx
    |   |-- haxe\std\cpp\Function.hx
    |   |-- haxe\std\cpp\Int16.hx
    |   |-- haxe\std\cpp\Int32.hx
    |   |-- haxe\std\cpp\Int64.hx
    |   |-- haxe\std\cpp\Int64Map.hx
    |   |-- haxe\std\cpp\Int8.hx
    |   |-- haxe\std\cpp\Lib.hx
    |   |-- haxe\std\cpp\Native.hx
    |   |-- haxe\std\cpp\NativeArc.hx
    |   |-- haxe\std\cpp\NativeArray.hx
    |   |-- haxe\std\cpp\NativeFile.hx
    |   |-- haxe\std\cpp\NativeGc.hx
    |   |-- haxe\std\cpp\NativeMath.hx
    |   |-- haxe\std\cpp\NativeProcess.hx
    |   |-- haxe\std\cpp\NativeRandom.hx
    |   |-- haxe\std\cpp\NativeSocket.hx
    |   |-- haxe\std\cpp\NativeSsl.hx
    |   |-- haxe\std\cpp\NativeString.hx
    |   |-- haxe\std\cpp\NativeSys.hx
    |   |-- haxe\std\cpp\NativeXml.hx
    |   |-- cpp.NativeXmlImport.cppImport.cpp
    |   |-- haxe\std\cpp\Object.hx
    |   |-- haxe\std\cpp\ObjectType.hx
    |   |-- haxe\std\cpp\Pointer.hx
    |   |-- haxe\std\cpp\Prime.hx
    |   |-- haxe\std\cpp\Random.hx
    |   |-- haxe\std\cpp\RawConstPointer.hx
    |   |-- haxe\std\cpp\RawPointer.hx
    |   |-- haxe\std\cpp\Reference.hx
    |   |-- haxe\std\cpp\Rest.hx
    |   |-- haxe\std\cpp\SizeT.hx
    |   |-- haxe\std\cpp\Star.hx
    |   |-- haxe\std\cpp\StdString.hx
    |   |-- haxe\std\cpp\StdStringRef.hx
    |   |-- haxe\std\cpp\Stdio.hx
    |   |-- haxe\std\cpp\Stdlib.hx
    |   |-- haxe\std\cpp\Struct.hx
    |   |-- haxe\std\cpp\UInt16.hx
    |   |-- haxe\std\cpp\UInt32.hx
    |   |-- haxe\std\cpp\UInt64.hx
    |   |-- haxe\std\cpp\UInt8.hx
    |   |-- haxe\std\cpp\VarArg.hx
    |   |-- haxe\std\cpp\VirtualArray.hx
    |   |-- haxe\std\cpp\Void.hx
    |   |-- cpp\_std
    |   |   |-- haxe\std\cpp\_std\Date.hx
    |   |   |-- haxe\std\cpp\_std\EReg.hx
    |   |   |-- haxe\std\cpp\_std\Reflect.hx
    |   |   |-- haxe\std\cpp\_std\Std.hx
    |   |   |-- haxe\std\cpp\_std\StringBuf.hx
    |   |   |-- haxe\std\cpp\_std\Sys.hx
    |   |   |-- haxe\std\cpp\_std\Type.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\cpp\_std\haxe\Exception.hx
    |   |   |   |-- haxe\std\cpp\_std\haxe\Int64.hx
    |   |   |   |-- haxe\std\cpp\_std\haxe\Log.hx
    |   |   |   |-- haxe\std\cpp\_std\haxe\NativeStackTrace.hx
    |   |   |   |-- haxe\std\cpp\_std\haxe\Resource.hx
    |   |   |   |-- haxe\std\cpp\_std\haxe\Utf8.hx
    |   |   |   |-- haxe.atomic
    |   |   |   |   `-- haxe\std\cpp\_std\haxe\atomic\AtomicInt.hx
    |   |   |   |-- haxe.ds
    |   |   |   |   |-- haxe\std\cpp\_std\haxe\ds\IntMap.hx
    |   |   |   |   |-- haxe\std\cpp\_std\haxe\ds\Map.hx
    |   |   |   |   |-- haxe\std\cpp\_std\haxe\ds\ObjectMap.hx
    |   |   |   |   |-- haxe\std\cpp\_std\haxe\ds\StringMap.hx
    |   |   |   |   `-- haxe\std\cpp\_std\haxe\ds\WeakMap.hx
    |   |   |   `-- haxe.zip
    |   |   |       |-- haxe\std\cpp\_std\haxe\zip\Compress.hx
    |   |   |       `-- haxe\std\cpp\_std\haxe\zip\Uncompress.hx
    |   |   `-- sys
    |   |       |-- haxe\std\cpp\_std\sys\FileSystem.hx
    |   |       |-- sys.db
    |   |       |   |-- haxe\std\cpp\_std\sys\db\Mysql.hx
    |   |       |   `-- haxe\std\cpp\_std\sys\db\Sqlite.hx
    |   |       |-- sys.io
    |   |       |   |-- haxe\std\cpp\_std\sys\io\File.hx
    |   |       |   |-- haxe\std\cpp\_std\sys\io\FileInput.hx
    |   |       |   |-- haxe\std\cpp\_std\sys\io\FileOutput.hx
    |   |       |   `-- haxe\std\cpp\_std\sys\io\Process.hx
    |   |       |-- sys.net
    |   |       |   |-- haxe\std\cpp\_std\sys\net\Host.hx
    |   |       |   |-- haxe\std\cpp\_std\sys\net\Socket.hx
    |   |       |   `-- haxe\std\cpp\_std\sys\net\UdpSocket.hx
    |   |       |-- sys.ssl
    |   |       |   |-- haxe\std\cpp\_std\sys\ssl\Certificate.hx
    |   |       |   |-- haxe\std\cpp\_std\sys\ssl\Digest.hx
    |   |       |   |-- haxe\std\cpp\_std\sys\ssl\Key.hx
    |   |       |   `-- haxe\std\cpp\_std\sys\ssl\Socket.hx
    |   |       `-- sys.thread
    |   |           |-- haxe\std\cpp\_std\sys\thread\Condition.hx
    |   |           |-- haxe\std\cpp\_std\sys\thread\Deque.hx
    |   |           |-- haxe\std\cpp\_std\sys\thread\Lock.hx
    |   |           |-- haxe\std\cpp\_std\sys\thread\Mutex.hx
    |   |           |-- haxe\std\cpp\_std\sys\thread\Semaphore.hx
    |   |           |-- haxe\std\cpp\_std\sys\thread\Thread.hx
    |   |           `-- haxe\std\cpp\_std\sys\thread\Tls.hx
    |   |-- cpp.abi
    |   |   |-- haxe\std\cpp\abi\Abi.hx
    |   |   |-- haxe\std\cpp\abi\CDecl.hx
    |   |   |-- haxe\std\cpp\abi\FastCall.hx
    |   |   |-- haxe\std\cpp\abi\StdCall.hx
    |   |   |-- haxe\std\cpp\abi\ThisCall.hx
    |   |   `-- haxe\std\cpp\abi\Winapi.hx
    |   |-- cpp.cppia
    |   |   |-- haxe\std\cpp\cppia\Host.hx
    |   |   |-- haxe\std\cpp\cppia\HostClasses.hx
    |   |   `-- haxe\std\cpp\cppia\Module.hx
    |   |-- cpp.link
    |   |   |-- haxe\std\cpp\link\StaticMysql.hx
    |   |   |-- haxe\std\cpp\link\StaticRegexp.hx
    |   |   |-- haxe\std\cpp\link\StaticSqlite.hx
    |   |   |-- haxe\std\cpp\link\StaticStd.hx
    |   |   `-- haxe\std\cpp\link\StaticZlib.hx
    |   |-- cpp.net
    |   |   |-- haxe\std\cpp\net\Poll.hx
    |   |   `-- haxe\std\cpp\net\ThreadServer.hx
    |   |-- cpp.objc
    |   |   |-- haxe\std\cpp\objc\NSData.hx
    |   |   |-- haxe\std\cpp\objc\NSDictionary.hx
    |   |   |-- haxe\std\cpp\objc\NSError.hx
    |   |   |-- haxe\std\cpp\objc\NSLog.hx
    |   |   |-- haxe\std\cpp\objc\NSObject.hx
    |   |   |-- haxe\std\cpp\objc\NSString.hx
    |   |   |-- haxe\std\cpp\objc\ObjcBlock.hx
    |   |   `-- haxe\std\cpp\objc\Protocol.hx
    |   |-- cpp.rtti
    |   |   |-- haxe\std\cpp\rtti\FieldIntegerLookup.hx
    |   |   `-- haxe\std\cpp\rtti\FieldNumericIntegerLookup.hx
    |   |-- cpp.vm
    |   |   |-- haxe\std\cpp\vm\Debugger.hx
    |   |   |-- haxe\std\cpp\vm\Deque.hx
    |   |   |-- haxe\std\cpp\vm\ExecutionTrace.hx
    |   |   |-- haxe\std\cpp\vm\Gc.hx
    |   |   |-- haxe\std\cpp\vm\Lock.hx
    |   |   |-- haxe\std\cpp\vm\Mutex.hx
    |   |   |-- haxe\std\cpp\vm\Profiler.hx
    |   |   |-- haxe\std\cpp\vm\Thread.hx
    |   |   |-- haxe\std\cpp\vm\Tls.hx
    |   |   |-- haxe\std\cpp\vm\Unsafe.hx
    |   |   `-- haxe\std\cpp\vm\WeakRef.hx
    |   `-- cpp.zip
    |       |-- haxe\std\cpp\zip\Compress.hx
    |       |-- haxe\std\cpp\zip\Flush.hx
    |       `-- haxe\std\cpp\zip\Uncompress.hx
    |-- cs
    |   |-- haxe\std\cs\Boot.hx
    |   |-- haxe\std\cs\Constraints.hx
    |   |-- haxe\std\cs\Flags.hx
    |   |-- haxe\std\cs\Lib.hx
    |   |-- haxe\std\cs\NativeArray.hx
    |   |-- haxe\std\cs\Out.hx
    |   |-- haxe\std\cs\Pointer.hx
    |   |-- haxe\std\cs\Ref.hx
    |   |-- haxe\std\cs\StdTypes.hx
    |   |-- haxe\std\cs\Syntax.hx
    |   |-- cs\_std
    |   |   |-- haxe\std\cs\_std\Array.hx
    |   |   |-- haxe\std\cs\_std\Date.hx
    |   |   |-- haxe\std\cs\_std\EReg.hx
    |   |   |-- haxe\std\cs\_std\Math.hx
    |   |   |-- haxe\std\cs\_std\Reflect.hx
    |   |   |-- haxe\std\cs\_std\Std.hx
    |   |   |-- haxe\std\cs\_std\String.hx
    |   |   |-- haxe\std\cs\_std\StringBuf.hx
    |   |   |-- haxe\std\cs\_std\Sys.hx
    |   |   |-- haxe\std\cs\_std\Type.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\cs\_std\haxe\Exception.hx
    |   |   |   |-- haxe\std\cs\_std\haxe\Int64.hx
    |   |   |   |-- haxe\std\cs\_std\haxe\NativeStackTrace.hx
    |   |   |   |-- haxe\std\cs\_std\haxe\Resource.hx
    |   |   |   |-- haxe\std\cs\_std\haxe\Rest.hx
    |   |   |   |-- haxe.atomic
    |   |   |   |   |-- haxe\std\cs\_std\haxe\atomic\AtomicInt.hx
    |   |   |   |   `-- haxe\std\cs\_std\haxe\atomic\AtomicObject.hx
    |   |   |   `-- haxe.ds
    |   |   |       |-- haxe\std\cs\_std\haxe\ds\IntMap.hx
    |   |   |       |-- haxe\std\cs\_std\haxe\ds\ObjectMap.hx
    |   |   |       `-- haxe\std\cs\_std\haxe\ds\StringMap.hx
    |   |   `-- sys
    |   |       |-- haxe\std\cs\_std\sys\FileSystem.hx
    |   |       |-- sys.db
    |   |       |   `-- haxe\std\cs\_std\sys\db\Sqlite.hx
    |   |       |-- sys.io
    |   |       |   |-- haxe\std\cs\_std\sys\io\File.hx
    |   |       |   |-- haxe\std\cs\_std\sys\io\FileInput.hx
    |   |       |   |-- haxe\std\cs\_std\sys\io\FileOutput.hx
    |   |       |   `-- haxe\std\cs\_std\sys\io\Process.hx
    |   |       |-- sys.net
    |   |       |   |-- haxe\std\cs\_std\sys\net\Host.hx
    |   |       |   |-- haxe\std\cs\_std\sys\net\Socket.hx
    |   |       |   `-- haxe\std\cs\_std\sys\net\UdpSocket.hx
    |   |       `-- sys.thread
    |   |           |-- haxe\std\cs\_std\sys\thread\Condition.hx
    |   |           |-- haxe\std\cs\_std\sys\thread\Deque.hx
    |   |           |-- haxe\std\cs\_std\sys\thread\Lock.hx
    |   |           |-- haxe\std\cs\_std\sys\thread\Mutex.hx
    |   |           |-- haxe\std\cs\_std\sys\thread\Semaphore.hx
    |   |           |-- haxe\std\cs\_std\sys\thread\Thread.hx
    |   |           `-- haxe\std\cs\_std\sys\thread\Tls.hx
    |   |-- cs.db
    |   |   `-- haxe\std\cs\db\AdoNet.hx
    |   |-- cs.internal
    |   |   |-- haxe\std\cs\internal\BoxedPointer.hx
    |   |   |-- haxe\std\cs\internal\FieldLookup.hx
    |   |   |-- haxe\std\cs\internal\Function.hx
    |   |   |-- haxe\std\cs\internal\HxObject.hx
    |   |   |-- haxe\std\cs\internal\Null.hx
    |   |   |-- haxe\std\cs\internal\Runtime.hx
    |   |   `-- haxe\std\cs\internal\StringExt.hx
    |   |-- cs.io
    |   |   |-- haxe\std\cs\io\NativeInput.hx
    |   |   `-- haxe\std\cs\io\NativeOutput.hx
    |   `-- cs.types
    |       |-- haxe\std\cs\types\Char16.hx
    |       |-- haxe\std\cs\types\Int16.hx
    |       |-- haxe\std\cs\types\Int64.hx
    |       |-- haxe\std\cs\types\Int8.hx
    |       |-- haxe\std\cs\types\UInt16.hx
    |       |-- haxe\std\cs\types\UInt64.hx
    |       `-- haxe\std\cs\types\UInt8.hx
    |-- eval
    |   |-- haxe\std\eval\NativeString.hx
    |   |-- haxe\std\eval\Vector.hx
    |   |-- eval\_std
    |   |   |-- haxe\std\eval\_std\EReg.hx
    |   |   |-- haxe\std\eval\_std\StringBuf.hx
    |   |   |-- haxe\std\eval\_std\Sys.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\eval\_std\haxe\Exception.hx
    |   |   |   |-- haxe\std\eval\_std\haxe\NativeStackTrace.hx
    |   |   |   |-- haxe\std\eval\_std\haxe\Resource.hx
    |   |   |   |-- haxe\std\eval\_std\haxe\Utf8.hx
    |   |   |   |-- haxe.io
    |   |   |   |   |-- haxe\std\eval\_std\haxe\io\Bytes.hx
    |   |   |   |   |-- haxe\std\eval\_std\haxe\io\BytesBuffer.hx
    |   |   |   |   `-- haxe\std\eval\_std\haxe\io\BytesData.hx
    |   |   |   `-- haxe.zip
    |   |   |       |-- haxe\std\eval\_std\haxe\zip\Compress.hx
    |   |   |       `-- haxe\std\eval\_std\haxe\zip\Uncompress.hx
    |   |   |-- mbedtls
    |   |   |   |-- haxe\std\eval\_std\mbedtls\Config.hx
    |   |   |   |-- haxe\std\eval\_std\mbedtls\CtrDrbg.hx
    |   |   |   |-- haxe\std\eval\_std\mbedtls\Entropy.hx
    |   |   |   |-- haxe\std\eval\_std\mbedtls\Error.hx
    |   |   |   |-- haxe\std\eval\_std\mbedtls\PkContext.hx
    |   |   |   |-- haxe\std\eval\_std\mbedtls\Ssl.hx
    |   |   |   |-- haxe\std\eval\_std\mbedtls\SslAuthmode.hx
    |   |   |   |-- haxe\std\eval\_std\mbedtls\SslEndpoint.hx
    |   |   |   |-- haxe\std\eval\_std\mbedtls\SslPreset.hx
    |   |   |   |-- haxe\std\eval\_std\mbedtls\SslTransport.hx
    |   |   |   `-- haxe\std\eval\_std\mbedtls\X509Crt.hx
    |   |   `-- sys
    |   |       |-- haxe\std\eval\_std\sys\FileSystem.hx
    |   |       |-- sys.io
    |   |       |   |-- haxe\std\eval\_std\sys\io\File.hx
    |   |       |   |-- haxe\std\eval\_std\sys\io\FileInput.hx
    |   |       |   |-- haxe\std\eval\_std\sys\io\FileOutput.hx
    |   |       |   `-- haxe\std\eval\_std\sys\io\Process.hx
    |   |       |-- sys.net
    |   |       |   |-- haxe\std\eval\_std\sys\net\Host.hx
    |   |       |   `-- haxe\std\eval\_std\sys\net\Socket.hx
    |   |       |-- sys.ssl
    |   |       |   |-- haxe\std\eval\_std\sys\ssl\Certificate.hx
    |   |       |   |-- haxe\std\eval\_std\sys\ssl\Key.hx
    |   |       |   |-- haxe\std\eval\_std\sys\ssl\Mbedtls.hx
    |   |       |   `-- haxe\std\eval\_std\sys\ssl\Socket.hx
    |   |       `-- sys.thread
    |   |           |-- haxe\std\eval\_std\sys\thread\Condition.hx
    |   |           |-- haxe\std\eval\_std\sys\thread\EventLoop.hx
    |   |           |-- haxe\std\eval\_std\sys\thread\Semaphore.hx
    |   |           `-- haxe\std\eval\_std\sys\thread\Thread.hx
    |   |-- eval.integers
    |   |   |-- haxe\std\eval\integers\Int64.hx
    |   |   `-- haxe\std\eval\integers\UInt64.hx
    |   |-- eval.luv
    |   |   |-- haxe\std\eval\luv\Async.hx
    |   |   |-- haxe\std\eval\luv\Barrier.hx
    |   |   |-- haxe\std\eval\luv\Buffer.hx
    |   |   |-- haxe\std\eval\luv\Check.hx
    |   |   |-- haxe\std\eval\luv\Condition.hx
    |   |   |-- haxe\std\eval\luv\ConnectedUdp.hx
    |   |   |-- haxe\std\eval\luv\Dir.hx
    |   |   |-- haxe\std\eval\luv\Dns.hx
    |   |   |-- haxe\std\eval\luv\Env.hx
    |   |   |-- haxe\std\eval\luv\File.hx
    |   |   |-- haxe\std\eval\luv\FsEvent.hx
    |   |   |-- haxe\std\eval\luv\FsPoll.hx
    |   |   |-- haxe\std\eval\luv\Handle.hx
    |   |   |-- haxe\std\eval\luv\Idle.hx
    |   |   |-- haxe\std\eval\luv\Loop.hx
    |   |   |-- haxe\std\eval\luv\LuvException.hx
    |   |   |-- haxe\std\eval\luv\Metrics.hx
    |   |   |-- haxe\std\eval\luv\Mutex.hx
    |   |   |-- haxe\std\eval\luv\Network.hx
    |   |   |-- haxe\std\eval\luv\Once.hx
    |   |   |-- haxe\std\eval\luv\OsFd.hx
    |   |   |-- haxe\std\eval\luv\OsSocket.hx
    |   |   |-- haxe\std\eval\luv\Passwd.hx
    |   |   |-- haxe\std\eval\luv\Path.hx
    |   |   |-- haxe\std\eval\luv\Pid.hx
    |   |   |-- haxe\std\eval\luv\Pipe.hx
    |   |   |-- haxe\std\eval\luv\Prepare.hx
    |   |   |-- haxe\std\eval\luv\Process.hx
    |   |   |-- haxe\std\eval\luv\Random.hx
    |   |   |-- haxe\std\eval\luv\Request.hx
    |   |   |-- haxe\std\eval\luv\Resource.hx
    |   |   |-- haxe\std\eval\luv\Result.hx
    |   |   |-- haxe\std\eval\luv\RwLock.hx
    |   |   |-- haxe\std\eval\luv\Semaphore.hx
    |   |   |-- haxe\std\eval\luv\Signal.hx
    |   |   |-- haxe\std\eval\luv\SockAddr.hx
    |   |   |-- haxe\std\eval\luv\Stream.hx
    |   |   |-- haxe\std\eval\luv\SystemInfo.hx
    |   |   |-- haxe\std\eval\luv\Tcp.hx
    |   |   |-- haxe\std\eval\luv\Thread.hx
    |   |   |-- haxe\std\eval\luv\ThreadPool.hx
    |   |   |-- haxe\std\eval\luv\Time.hx
    |   |   |-- haxe\std\eval\luv\Timer.hx
    |   |   |-- haxe\std\eval\luv\Tty.hx
    |   |   |-- haxe\std\eval\luv\UVError.hx
    |   |   |-- haxe\std\eval\luv\Udp.hx
    |   |   `-- haxe\std\eval\luv\Version.hx
    |   `-- eval.vm
    |       |-- haxe\std\eval\vm\Context.hx
    |       |-- haxe\std\eval\vm\Gc.hx
    |       |-- haxe\std\eval\vm\NativeSocket.hx
    |       `-- haxe\std\eval\vm\NativeThread.hx
    |-- flash
    |   |-- haxe\std\flash\AnyType.hx
    |   |-- haxe\std\flash\Boot.hx
    |   |-- haxe\std\flash\Lib.hx
    |   |-- haxe\std\flash\Memory.hx
    |   |-- haxe\std\flash\NativeXml.hx
    |   |-- haxe\std\flash\Vector.hx
    |   |-- flash\_std
    |   |   |-- haxe\std\flash\_std\EReg.hx
    |   |   |-- haxe\std\flash\_std\Reflect.hx
    |   |   |-- haxe\std\flash\_std\Std.hx
    |   |   |-- haxe\std\flash\_std\String.hx
    |   |   |-- haxe\std\flash\_std\Type.hx
    |   |   `-- haxe
    |   |       |-- haxe\std\flash\_std\haxe\Exception.hx
    |   |       |-- haxe\std\flash\_std\haxe\Http.hx
    |   |       |-- haxe\std\flash\_std\haxe\Json.hx
    |   |       |-- haxe\std\flash\_std\haxe\Log.hx
    |   |       |-- haxe\std\flash\_std\haxe\NativeStackTrace.hx
    |   |       |-- haxe\std\flash\_std\haxe\Resource.hx
    |   |       |-- haxe.ds
    |   |       |   |-- haxe\std\flash\_std\haxe\ds\IntMap.hx
    |   |       |   |-- haxe\std\flash\_std\haxe\ds\ObjectMap.hx
    |   |       |   |-- haxe\std\flash\_std\haxe\ds\StringMap.hx
    |   |       |   |-- haxe\std\flash\_std\haxe\ds\UnsafeStringMap.hx
    |   |       |   `-- haxe\std\flash\_std\haxe\ds\WeakMap.hx
    |   |       `-- haxe.zip
    |   |           |-- haxe\std\flash\_std\haxe\zip\Compress.hx
    |   |           `-- haxe\std\flash\_std\haxe\zip\Uncompress.hx
    |   |-- flash.accessibility
    |   |   |-- haxe\std\flash\accessibility\Accessibility.hx
    |   |   |-- haxe\std\flash\accessibility\AccessibilityImplementation.hx
    |   |   |-- haxe\std\flash\accessibility\AccessibilityProperties.hx
    |   |   |-- haxe\std\flash\accessibility\ISearchableText.hx
    |   |   `-- haxe\std\flash\accessibility\ISimpleTextSelection.hx
    |   |-- flash.automation
    |   |   |-- haxe\std\flash\automation\ActionGenerator.hx
    |   |   |-- haxe\std\flash\automation\AutomationAction.hx
    |   |   |-- haxe\std\flash\automation\Configuration.hx
    |   |   |-- haxe\std\flash\automation\KeyboardAutomationAction.hx
    |   |   |-- haxe\std\flash\automation\MouseAutomationAction.hx
    |   |   |-- haxe\std\flash\automation\StageCapture.hx
    |   |   `-- haxe\std\flash\automation\StageCaptureEvent.hx
    |   |-- flash.concurrent
    |   |   |-- haxe\std\flash\concurrent\Condition.hx
    |   |   `-- haxe\std\flash\concurrent\Mutex.hx
    |   |-- flash.desktop
    |   |   |-- haxe\std\flash\desktop\Clipboard.hx
    |   |   |-- haxe\std\flash\desktop\ClipboardFormats.hx
    |   |   `-- haxe\std\flash\desktop\ClipboardTransferMode.hx
    |   |-- flash.display
    |   |   |-- haxe\std\flash\display\AVLoader.hx
    |   |   |-- haxe\std\flash\display\AVM1Movie.hx
    |   |   |-- haxe\std\flash\display\ActionScriptVersion.hx
    |   |   |-- haxe\std\flash\display\Bitmap.hx
    |   |   |-- haxe\std\flash\display\BitmapCompressColorSpace.hx
    |   |   |-- haxe\std\flash\display\BitmapData.hx
    |   |   |-- haxe\std\flash\display\BitmapDataChannel.hx
    |   |   |-- haxe\std\flash\display\BitmapEncodingColorSpace.hx
    |   |   |-- haxe\std\flash\display\BlendMode.hx
    |   |   |-- haxe\std\flash\display\CapsStyle.hx
    |   |   |-- haxe\std\flash\display\ColorCorrection.hx
    |   |   |-- haxe\std\flash\display\ColorCorrectionSupport.hx
    |   |   |-- haxe\std\flash\display\DisplayObject.hx
    |   |   |-- haxe\std\flash\display\DisplayObjectContainer.hx
    |   |   |-- haxe\std\flash\display\FocusDirection.hx
    |   |   |-- haxe\std\flash\display\FrameLabel.hx
    |   |   |-- haxe\std\flash\display\GradientType.hx
    |   |   |-- haxe\std\flash\display\Graphics.hx
    |   |   |-- haxe\std\flash\display\GraphicsBitmapFill.hx
    |   |   |-- haxe\std\flash\display\GraphicsEndFill.hx
    |   |   |-- haxe\std\flash\display\GraphicsGradientFill.hx
    |   |   |-- haxe\std\flash\display\GraphicsPath.hx
    |   |   |-- haxe\std\flash\display\GraphicsPathCommand.hx
    |   |   |-- haxe\std\flash\display\GraphicsPathWinding.hx
    |   |   |-- haxe\std\flash\display\GraphicsShaderFill.hx
    |   |   |-- haxe\std\flash\display\GraphicsSolidFill.hx
    |   |   |-- haxe\std\flash\display\GraphicsStroke.hx
    |   |   |-- haxe\std\flash\display\GraphicsTrianglePath.hx
    |   |   |-- haxe\std\flash\display\IBitmapCompressOptions.hx
    |   |   |-- haxe\std\flash\display\IBitmapDrawable.hx
    |   |   |-- haxe\std\flash\display\IDrawCommand.hx
    |   |   |-- haxe\std\flash\display\IGraphicsData.hx
    |   |   |-- haxe\std\flash\display\IGraphicsFill.hx
    |   |   |-- haxe\std\flash\display\IGraphicsPath.hx
    |   |   |-- haxe\std\flash\display\IGraphicsStroke.hx
    |   |   |-- haxe\std\flash\display\InteractiveObject.hx
    |   |   |-- haxe\std\flash\display\InterpolationMethod.hx
    |   |   |-- haxe\std\flash\display\JPEGCompressOptions.hx
    |   |   |-- haxe\std\flash\display\JPEGEncoderOptions.hx
    |   |   |-- haxe\std\flash\display\JPEGXRCompressOptions.hx
    |   |   |-- haxe\std\flash\display\JPEGXREncoderOptions.hx
    |   |   |-- haxe\std\flash\display\JointStyle.hx
    |   |   |-- haxe\std\flash\display\LineScaleMode.hx
    |   |   |-- haxe\std\flash\display\Loader.hx
    |   |   |-- haxe\std\flash\display\LoaderInfo.hx
    |   |   |-- haxe\std\flash\display\MorphShape.hx
    |   |   |-- haxe\std\flash\display\MovieClip.hx
    |   |   |-- haxe\std\flash\display\NativeMenu.hx
    |   |   |-- haxe\std\flash\display\NativeMenuItem.hx
    |   |   |-- haxe\std\flash\display\PNGCompressOptions.hx
    |   |   |-- haxe\std\flash\display\PNGEncoderOptions.hx
    |   |   |-- haxe\std\flash\display\PixelSnapping.hx
    |   |   |-- haxe\std\flash\display\SWFVersion.hx
    |   |   |-- haxe\std\flash\display\Scene.hx
    |   |   |-- haxe\std\flash\display\Shader.hx
    |   |   |-- haxe\std\flash\display\ShaderData.hx
    |   |   |-- haxe\std\flash\display\ShaderInput.hx
    |   |   |-- haxe\std\flash\display\ShaderJob.hx
    |   |   |-- haxe\std\flash\display\ShaderParameter.hx
    |   |   |-- haxe\std\flash\display\ShaderParameterType.hx
    |   |   |-- haxe\std\flash\display\ShaderPrecision.hx
    |   |   |-- haxe\std\flash\display\Shape.hx
    |   |   |-- haxe\std\flash\display\SimpleButton.hx
    |   |   |-- haxe\std\flash\display\SpreadMethod.hx
    |   |   |-- haxe\std\flash\display\Sprite.hx
    |   |   |-- haxe\std\flash\display\Stage.hx
    |   |   |-- haxe\std\flash\display\Stage3D.hx
    |   |   |-- haxe\std\flash\display\StageAlign.hx
    |   |   |-- haxe\std\flash\display\StageDisplayState.hx
    |   |   |-- haxe\std\flash\display\StageQuality.hx
    |   |   |-- haxe\std\flash\display\StageScaleMode.hx
    |   |   |-- haxe\std\flash\display\StageWorker.hx
    |   |   |-- haxe\std\flash\display\TriangleCulling.hx
    |   |   `-- haxe\std\flash\display\Worker.hx
    |   |-- flash.display3D
    |   |   |-- haxe\std\flash\display3D\Context3D.hx
    |   |   |-- haxe\std\flash\display3D\Context3DBlendFactor.hx
    |   |   |-- haxe\std\flash\display3D\Context3DBufferUsage.hx
    |   |   |-- haxe\std\flash\display3D\Context3DClearMask.hx
    |   |   |-- haxe\std\flash\display3D\Context3DCompareMode.hx
    |   |   |-- haxe\std\flash\display3D\Context3DFillMode.hx
    |   |   |-- haxe\std\flash\display3D\Context3DMipFilter.hx
    |   |   |-- haxe\std\flash\display3D\Context3DProfile.hx
    |   |   |-- haxe\std\flash\display3D\Context3DProgramType.hx
    |   |   |-- haxe\std\flash\display3D\Context3DRenderMode.hx
    |   |   |-- haxe\std\flash\display3D\Context3DStencilAction.hx
    |   |   |-- haxe\std\flash\display3D\Context3DTextureFilter.hx
    |   |   |-- haxe\std\flash\display3D\Context3DTextureFormat.hx
    |   |   |-- haxe\std\flash\display3D\Context3DTriangleFace.hx
    |   |   |-- haxe\std\flash\display3D\Context3DVertexBufferFormat.hx
    |   |   |-- haxe\std\flash\display3D\Context3DWrapMode.hx
    |   |   |-- haxe\std\flash\display3D\IndexBuffer3D.hx
    |   |   |-- haxe\std\flash\display3D\Program3D.hx
    |   |   |-- haxe\std\flash\display3D\VertexBuffer3D.hx
    |   |   `-- flash.display3D.textures
    |   |       |-- haxe\std\flash\display3D\textures\CubeTexture.hx
    |   |       |-- haxe\std\flash\display3D\textures\RectangleTexture.hx
    |   |       |-- haxe\std\flash\display3D\textures\Texture.hx
    |   |       |-- haxe\std\flash\display3D\textures\TextureBase.hx
    |   |       `-- haxe\std\flash\display3D\textures\VideoTexture.hx
    |   |-- flash.errors
    |   |   |-- haxe\std\flash\errors\ArgumentError.hx
    |   |   |-- haxe\std\flash\errors\DRMManagerError.hx
    |   |   |-- haxe\std\flash\errors\DefinitionError.hx
    |   |   |-- haxe\std\flash\errors\EOFError.hx
    |   |   |-- haxe\std\flash\errors\Error.hx
    |   |   |-- haxe\std\flash\errors\EvalError.hx
    |   |   |-- haxe\std\flash\errors\IOError.hx
    |   |   |-- haxe\std\flash\errors\IllegalOperationError.hx
    |   |   |-- haxe\std\flash\errors\InvalidSWFError.hx
    |   |   |-- haxe\std\flash\errors\MemoryError.hx
    |   |   |-- haxe\std\flash\errors\RangeError.hx
    |   |   |-- haxe\std\flash\errors\ReferenceError.hx
    |   |   |-- haxe\std\flash\errors\ScriptTimeoutError.hx
    |   |   |-- haxe\std\flash\errors\SecurityError.hx
    |   |   |-- haxe\std\flash\errors\StackOverflowError.hx
    |   |   |-- haxe\std\flash\errors\SyntaxError.hx
    |   |   |-- haxe\std\flash\errors\TypeError.hx
    |   |   |-- haxe\std\flash\errors\URIError.hx
    |   |   |-- haxe\std\flash\errors\UninitializedError.hx
    |   |   `-- haxe\std\flash\errors\VerifyError.hx
    |   |-- flash.events
    |   |   |-- haxe\std\flash\events\AVDictionaryDataEvent.hx
    |   |   |-- haxe\std\flash\events\AVHTTPStatusEvent.hx
    |   |   |-- haxe\std\flash\events\AVLoadInfoEvent.hx
    |   |   |-- haxe\std\flash\events\AVManifestLoadEvent.hx
    |   |   |-- haxe\std\flash\events\AVPauseAtPeriodEndEvent.hx
    |   |   |-- haxe\std\flash\events\AVPlayStateEvent.hx
    |   |   |-- haxe\std\flash\events\AVStatusEvent.hx
    |   |   |-- haxe\std\flash\events\AVStreamSwitchEvent.hx
    |   |   |-- haxe\std\flash\events\AccelerometerEvent.hx
    |   |   |-- haxe\std\flash\events\ActivityEvent.hx
    |   |   |-- haxe\std\flash\events\AsyncErrorEvent.hx
    |   |   |-- haxe\std\flash\events\AudioOutputChangeEvent.hx
    |   |   |-- haxe\std\flash\events\ContextMenuEvent.hx
    |   |   |-- haxe\std\flash\events\DRMAuthenticateEvent.hx
    |   |   |-- haxe\std\flash\events\DRMAuthenticationCompleteEvent.hx
    |   |   |-- haxe\std\flash\events\DRMAuthenticationErrorEvent.hx
    |   |   |-- haxe\std\flash\events\DRMCustomProperties.hx
    |   |   |-- haxe\std\flash\events\DRMDeviceGroupErrorEvent.hx
    |   |   |-- haxe\std\flash\events\DRMDeviceGroupEvent.hx
    |   |   |-- haxe\std\flash\events\DRMErrorEvent.hx
    |   |   |-- haxe\std\flash\events\DRMLicenseRequestEvent.hx
    |   |   |-- haxe\std\flash\events\DRMMetadataEvent.hx
    |   |   |-- haxe\std\flash\events\DRMReturnVoucherCompleteEvent.hx
    |   |   |-- haxe\std\flash\events\DRMReturnVoucherErrorEvent.hx
    |   |   |-- haxe\std\flash\events\DRMStatusEvent.hx
    |   |   |-- haxe\std\flash\events\DataEvent.hx
    |   |   |-- haxe\std\flash\events\ErrorEvent.hx
    |   |   |-- haxe\std\flash\events\Event.hx
    |   |   |-- haxe\std\flash\events\EventDispatcher.hx
    |   |   |-- haxe\std\flash\events\EventPhase.hx
    |   |   |-- haxe\std\flash\events\FocusEvent.hx
    |   |   |-- haxe\std\flash\events\FullScreenEvent.hx
    |   |   |-- haxe\std\flash\events\GameInputEvent.hx
    |   |   |-- haxe\std\flash\events\GeolocationEvent.hx
    |   |   |-- haxe\std\flash\events\GestureEvent.hx
    |   |   |-- haxe\std\flash\events\GesturePhase.hx
    |   |   |-- haxe\std\flash\events\HTTPStatusEvent.hx
    |   |   |-- haxe\std\flash\events\IEventDispatcher.hx
    |   |   |-- haxe\std\flash\events\IMEEvent.hx
    |   |   |-- haxe\std\flash\events\IOErrorEvent.hx
    |   |   |-- haxe\std\flash\events\KeyboardEvent.hx
    |   |   |-- haxe\std\flash\events\MouseEvent.hx
    |   |   |-- haxe\std\flash\events\NetDataEvent.hx
    |   |   |-- haxe\std\flash\events\NetFilterEvent.hx
    |   |   |-- haxe\std\flash\events\NetMonitorEvent.hx
    |   |   |-- haxe\std\flash\events\NetStatusEvent.hx
    |   |   |-- haxe\std\flash\events\OutputProgressEvent.hx
    |   |   |-- haxe\std\flash\events\PressAndTapGestureEvent.hx
    |   |   |-- haxe\std\flash\events\ProgressEvent.hx
    |   |   |-- haxe\std\flash\events\SampleDataEvent.hx
    |   |   |-- haxe\std\flash\events\SecurityErrorEvent.hx
    |   |   |-- haxe\std\flash\events\ShaderEvent.hx
    |   |   |-- haxe\std\flash\events\SoftKeyboardEvent.hx
    |   |   |-- haxe\std\flash\events\SoftKeyboardTrigger.hx
    |   |   |-- haxe\std\flash\events\StageVideoAvailabilityEvent.hx
    |   |   |-- haxe\std\flash\events\StageVideoEvent.hx
    |   |   |-- haxe\std\flash\events\StatusEvent.hx
    |   |   |-- haxe\std\flash\events\SyncEvent.hx
    |   |   |-- haxe\std\flash\events\TextEvent.hx
    |   |   |-- haxe\std\flash\events\ThrottleEvent.hx
    |   |   |-- haxe\std\flash\events\ThrottleType.hx
    |   |   |-- haxe\std\flash\events\TimerEvent.hx
    |   |   |-- haxe\std\flash\events\TouchEvent.hx
    |   |   |-- haxe\std\flash\events\TransformGestureEvent.hx
    |   |   |-- haxe\std\flash\events\UncaughtErrorEvent.hx
    |   |   |-- haxe\std\flash\events\UncaughtErrorEvents.hx
    |   |   |-- haxe\std\flash\events\VideoEvent.hx
    |   |   |-- haxe\std\flash\events\VideoTextureEvent.hx
    |   |   |-- haxe\std\flash\events\WeakFunctionClosure.hx
    |   |   `-- haxe\std\flash\events\WeakMethodClosure.hx
    |   |-- flash.external
    |   |   `-- haxe\std\flash\external\ExternalInterface.hx
    |   |-- flash.filters
    |   |   |-- haxe\std\flash\filters\BevelFilter.hx
    |   |   |-- haxe\std\flash\filters\BitmapFilter.hx
    |   |   |-- haxe\std\flash\filters\BitmapFilterQuality.hx
    |   |   |-- haxe\std\flash\filters\BitmapFilterType.hx
    |   |   |-- haxe\std\flash\filters\BlurFilter.hx
    |   |   |-- haxe\std\flash\filters\ColorMatrixFilter.hx
    |   |   |-- haxe\std\flash\filters\ConvolutionFilter.hx
    |   |   |-- haxe\std\flash\filters\DisplacementMapFilter.hx
    |   |   |-- haxe\std\flash\filters\DisplacementMapFilterMode.hx
    |   |   |-- haxe\std\flash\filters\DropShadowFilter.hx
    |   |   |-- haxe\std\flash\filters\GlowFilter.hx
    |   |   |-- haxe\std\flash\filters\GradientBevelFilter.hx
    |   |   |-- haxe\std\flash\filters\GradientGlowFilter.hx
    |   |   `-- haxe\std\flash\filters\ShaderFilter.hx
    |   |-- flash.geom
    |   |   |-- haxe\std\flash\geom\ColorTransform.hx
    |   |   |-- haxe\std\flash\geom\Matrix.hx
    |   |   |-- haxe\std\flash\geom\Matrix3D.hx
    |   |   |-- haxe\std\flash\geom\Orientation3D.hx
    |   |   |-- haxe\std\flash\geom\PerspectiveProjection.hx
    |   |   |-- haxe\std\flash\geom\Point.hx
    |   |   |-- haxe\std\flash\geom\Rectangle.hx
    |   |   |-- haxe\std\flash\geom\Transform.hx
    |   |   |-- haxe\std\flash\geom\Utils3D.hx
    |   |   `-- haxe\std\flash\geom\Vector3D.hx
    |   |-- flash.globalization
    |   |   |-- haxe\std\flash\globalization\Collator.hx
    |   |   |-- haxe\std\flash\globalization\CollatorMode.hx
    |   |   |-- haxe\std\flash\globalization\CurrencyFormatter.hx
    |   |   |-- haxe\std\flash\globalization\CurrencyParseResult.hx
    |   |   |-- haxe\std\flash\globalization\DateTimeFormatter.hx
    |   |   |-- haxe\std\flash\globalization\DateTimeNameContext.hx
    |   |   |-- haxe\std\flash\globalization\DateTimeNameStyle.hx
    |   |   |-- haxe\std\flash\globalization\DateTimeStyle.hx
    |   |   |-- haxe\std\flash\globalization\LastOperationStatus.hx
    |   |   |-- haxe\std\flash\globalization\LocaleID.hx
    |   |   |-- haxe\std\flash\globalization\NationalDigitsType.hx
    |   |   |-- haxe\std\flash\globalization\NumberFormatter.hx
    |   |   |-- haxe\std\flash\globalization\NumberParseResult.hx
    |   |   `-- haxe\std\flash\globalization\StringTools.hx
    |   |-- flash.media
    |   |   |-- haxe\std\flash\media\AVABRParameters.hx
    |   |   |-- haxe\std\flash\media\AVABRProfileInfo.hx
    |   |   |-- haxe\std\flash\media\AVCaptionStyle.hx
    |   |   |-- haxe\std\flash\media\AVCuePoint.hx
    |   |   |-- haxe\std\flash\media\AVInsertionResult.hx
    |   |   |-- haxe\std\flash\media\AVNetworkingParams.hx
    |   |   |-- haxe\std\flash\media\AVPeriodInfo.hx
    |   |   |-- haxe\std\flash\media\AVPlayState.hx
    |   |   |-- haxe\std\flash\media\AVResult.hx
    |   |   |-- haxe\std\flash\media\AVSegmentedSource.hx
    |   |   |-- haxe\std\flash\media\AVSource.hx
    |   |   |-- haxe\std\flash\media\AVStream.hx
    |   |   |-- haxe\std\flash\media\AVTagData.hx
    |   |   |-- haxe\std\flash\media\AVTimeline.hx
    |   |   |-- haxe\std\flash\media\AVTrackInfo.hx
    |   |   |-- haxe\std\flash\media\AVURLLoader.hx
    |   |   |-- haxe\std\flash\media\AVURLStream.hx
    |   |   |-- haxe\std\flash\media\AudioDecoder.hx
    |   |   |-- haxe\std\flash\media\AudioDeviceManager.hx
    |   |   |-- haxe\std\flash\media\AudioOutputChangeReason.hx
    |   |   |-- haxe\std\flash\media\Camera.hx
    |   |   |-- haxe\std\flash\media\H264Level.hx
    |   |   |-- haxe\std\flash\media\H264Profile.hx
    |   |   |-- haxe\std\flash\media\H264VideoStreamSettings.hx
    |   |   |-- haxe\std\flash\media\ID3Info.hx
    |   |   |-- haxe\std\flash\media\Microphone.hx
    |   |   |-- haxe\std\flash\media\MicrophoneEnhancedMode.hx
    |   |   |-- haxe\std\flash\media\MicrophoneEnhancedOptions.hx
    |   |   |-- haxe\std\flash\media\Sound.hx
    |   |   |-- haxe\std\flash\media\SoundChannel.hx
    |   |   |-- haxe\std\flash\media\SoundCodec.hx
    |   |   |-- haxe\std\flash\media\SoundLoaderContext.hx
    |   |   |-- haxe\std\flash\media\SoundMixer.hx
    |   |   |-- haxe\std\flash\media\SoundTransform.hx
    |   |   |-- haxe\std\flash\media\StageVideo.hx
    |   |   |-- haxe\std\flash\media\StageVideoAvailability.hx
    |   |   |-- haxe\std\flash\media\StageVideoAvailabilityReason.hx
    |   |   |-- haxe\std\flash\media\Video.hx
    |   |   |-- haxe\std\flash\media\VideoCodec.hx
    |   |   |-- haxe\std\flash\media\VideoStatus.hx
    |   |   `-- haxe\std\flash\media\VideoStreamSettings.hx
    |   |-- flash.net
    |   |   |-- haxe\std\flash\net\DynamicPropertyOutput.hx
    |   |   |-- haxe\std\flash\net\FileFilter.hx
    |   |   |-- haxe\std\flash\net\FileReference.hx
    |   |   |-- haxe\std\flash\net\FileReferenceList.hx
    |   |   |-- haxe\std\flash\net\GroupSpecifier.hx
    |   |   |-- haxe\std\flash\net\IDynamicPropertyOutput.hx
    |   |   |-- haxe\std\flash\net\IDynamicPropertyWriter.hx
    |   |   |-- haxe\std\flash\net\LocalConnection.hx
    |   |   |-- haxe\std\flash\net\NetConnection.hx
    |   |   |-- haxe\std\flash\net\NetGroup.hx
    |   |   |-- haxe\std\flash\net\NetGroupInfo.hx
    |   |   |-- haxe\std\flash\net\NetGroupReceiveMode.hx
    |   |   |-- haxe\std\flash\net\NetGroupReplicationStrategy.hx
    |   |   |-- haxe\std\flash\net\NetGroupSendMode.hx
    |   |   |-- haxe\std\flash\net\NetGroupSendResult.hx
    |   |   |-- haxe\std\flash\net\NetMonitor.hx
    |   |   |-- haxe\std\flash\net\NetStream.hx
    |   |   |-- haxe\std\flash\net\NetStreamAppendBytesAction.hx
    |   |   |-- haxe\std\flash\net\NetStreamInfo.hx
    |   |   |-- haxe\std\flash\net\NetStreamMulticastInfo.hx
    |   |   |-- haxe\std\flash\net\NetStreamPlayOptions.hx
    |   |   |-- haxe\std\flash\net\NetStreamPlayTransitions.hx
    |   |   |-- haxe\std\flash\net\ObjectEncoding.hx
    |   |   |-- haxe\std\flash\net\Responder.hx
    |   |   |-- haxe\std\flash\net\SecureSocket.hx
    |   |   |-- haxe\std\flash\net\SharedObject.hx
    |   |   |-- haxe\std\flash\net\SharedObjectFlushStatus.hx
    |   |   |-- haxe\std\flash\net\Socket.hx
    |   |   |-- haxe\std\flash\net\URLLoader.hx
    |   |   |-- haxe\std\flash\net\URLLoaderDataFormat.hx
    |   |   |-- haxe\std\flash\net\URLRequest.hx
    |   |   |-- haxe\std\flash\net\URLRequestHeader.hx
    |   |   |-- haxe\std\flash\net\URLRequestMethod.hx
    |   |   |-- haxe\std\flash\net\URLStream.hx
    |   |   |-- haxe\std\flash\net\URLVariables.hx
    |   |   |-- haxe\std\flash\net\XMLSocket.hx
    |   |   `-- flash.net.drm
    |   |       |-- haxe\std\flash\net\drm\AddToDeviceGroupSetting.hx
    |   |       |-- haxe\std\flash\net\drm\AuthenticationMethod.hx
    |   |       |-- haxe\std\flash\net\drm\DRMAddToDeviceGroupContext.hx
    |   |       |-- haxe\std\flash\net\drm\DRMAuthenticationContext.hx
    |   |       |-- haxe\std\flash\net\drm\DRMContentData.hx
    |   |       |-- haxe\std\flash\net\drm\DRMDeviceGroup.hx
    |   |       |-- haxe\std\flash\net\drm\DRMManager.hx
    |   |       |-- haxe\std\flash\net\drm\DRMManagerSession.hx
    |   |       |-- haxe\std\flash\net\drm\DRMModuleCycleProvider.hx
    |   |       |-- haxe\std\flash\net\drm\DRMPlaybackTimeWindow.hx
    |   |       |-- haxe\std\flash\net\drm\DRMRemoveFromDeviceGroupContext.hx
    |   |       |-- haxe\std\flash\net\drm\DRMResetContext.hx
    |   |       |-- haxe\std\flash\net\drm\DRMReturnVoucherContext.hx
    |   |       |-- haxe\std\flash\net\drm\DRMStoreVoucherContext.hx
    |   |       |-- haxe\std\flash\net\drm\DRMURLDownloadContext.hx
    |   |       |-- haxe\std\flash\net\drm\DRMVoucher.hx
    |   |       |-- haxe\std\flash\net\drm\DRMVoucherDownloadContext.hx
    |   |       |-- haxe\std\flash\net\drm\DRMVoucherStoreContext.hx
    |   |       |-- haxe\std\flash\net\drm\LoadVoucherSetting.hx
    |   |       `-- haxe\std\flash\net\drm\VoucherAccessInfo.hx
    |   |-- flash.printing
    |   |   |-- haxe\std\flash\printing\PrintJob.hx
    |   |   |-- haxe\std\flash\printing\PrintJobOptions.hx
    |   |   `-- haxe\std\flash\printing\PrintJobOrientation.hx
    |   |-- flash.profiler
    |   |   `-- haxe\std\flash\profiler\Telemetry.hx
    |   |-- flash.sampler
    |   |   |-- haxe\std\flash\sampler\Api.hx
    |   |   |-- haxe\std\flash\sampler\ClassFactory.hx
    |   |   |-- haxe\std\flash\sampler\DeleteObjectSample.hx
    |   |   |-- haxe\std\flash\sampler\NewObjectSample.hx
    |   |   |-- haxe\std\flash\sampler\Sample.hx
    |   |   `-- haxe\std\flash\sampler\StackFrame.hx
    |   |-- flash.security
    |   |   |-- haxe\std\flash\security\CertificateStatus.hx
    |   |   |-- haxe\std\flash\security\X500DistinguishedName.hx
    |   |   `-- haxe\std\flash\security\X509Certificate.hx
    |   |-- flash.sensors
    |   |   |-- haxe\std\flash\sensors\Accelerometer.hx
    |   |   `-- haxe\std\flash\sensors\Geolocation.hx
    |   |-- flash.system
    |   |   |-- haxe\std\flash\system\ApplicationDomain.hx
    |   |   |-- haxe\std\flash\system\ApplicationInstaller.hx
    |   |   |-- haxe\std\flash\system\ApplicationInstallerMode.hx
    |   |   |-- haxe\std\flash\system\AuthorizedFeatures.hx
    |   |   |-- haxe\std\flash\system\AuthorizedFeaturesLoader.hx
    |   |   |-- haxe\std\flash\system\Capabilities.hx
    |   |   |-- haxe\std\flash\system\ConnexionsClient.hx
    |   |   |-- haxe\std\flash\system\DomainMemoryWithStage3D.hx
    |   |   |-- haxe\std\flash\system\FSCommand.hx
    |   |   |-- haxe\std\flash\system\IME.hx
    |   |   |-- haxe\std\flash\system\IMEConversionMode.hx
    |   |   |-- haxe\std\flash\system\ImageDecodingPolicy.hx
    |   |   |-- haxe\std\flash\system\JPEGLoaderContext.hx
    |   |   |-- haxe\std\flash\system\LoaderContext.hx
    |   |   |-- haxe\std\flash\system\MessageChannel.hx
    |   |   |-- haxe\std\flash\system\MessageChannelState.hx
    |   |   |-- haxe\std\flash\system\Security.hx
    |   |   |-- haxe\std\flash\system\SecurityDomain.hx
    |   |   |-- haxe\std\flash\system\SecurityPanel.hx
    |   |   |-- haxe\std\flash\system\System.hx
    |   |   |-- haxe\std\flash\system\SystemUpdater.hx
    |   |   |-- haxe\std\flash\system\SystemUpdaterType.hx
    |   |   |-- haxe\std\flash\system\TouchscreenType.hx
    |   |   |-- haxe\std\flash\system\Worker.hx
    |   |   |-- haxe\std\flash\system\WorkerDomain.hx
    |   |   `-- haxe\std\flash\system\WorkerState.hx
    |   |-- flash.text
    |   |   |-- haxe\std\flash\text\AntiAliasType.hx
    |   |   |-- haxe\std\flash\text\CSMSettings.hx
    |   |   |-- haxe\std\flash\text\Font.hx
    |   |   |-- haxe\std\flash\text\FontStyle.hx
    |   |   |-- haxe\std\flash\text\FontType.hx
    |   |   |-- haxe\std\flash\text\GridFitType.hx
    |   |   |-- haxe\std\flash\text\StaticText.hx
    |   |   |-- haxe\std\flash\text\StyleSheet.hx
    |   |   |-- haxe\std\flash\text\TextColorType.hx
    |   |   |-- haxe\std\flash\text\TextDisplayMode.hx
    |   |   |-- haxe\std\flash\text\TextExtent.hx
    |   |   |-- haxe\std\flash\text\TextField.hx
    |   |   |-- haxe\std\flash\text\TextFieldAutoSize.hx
    |   |   |-- haxe\std\flash\text\TextFieldType.hx
    |   |   |-- haxe\std\flash\text\TextFormat.hx
    |   |   |-- haxe\std\flash\text\TextFormatAlign.hx
    |   |   |-- haxe\std\flash\text\TextFormatDisplay.hx
    |   |   |-- haxe\std\flash\text\TextInteractionMode.hx
    |   |   |-- haxe\std\flash\text\TextLineMetrics.hx
    |   |   |-- haxe\std\flash\text\TextRenderer.hx
    |   |   |-- haxe\std\flash\text\TextRun.hx
    |   |   |-- haxe\std\flash\text\TextSnapshot.hx
    |   |   |-- flash.text.engine
    |   |   |   |-- haxe\std\flash\text\engine\BreakOpportunity.hx
    |   |   |   |-- haxe\std\flash\text\engine\CFFHinting.hx
    |   |   |   |-- haxe\std\flash\text\engine\ContentElement.hx
    |   |   |   |-- haxe\std\flash\text\engine\DigitCase.hx
    |   |   |   |-- haxe\std\flash\text\engine\DigitWidth.hx
    |   |   |   |-- haxe\std\flash\text\engine\EastAsianJustifier.hx
    |   |   |   |-- haxe\std\flash\text\engine\ElementFormat.hx
    |   |   |   |-- haxe\std\flash\text\engine\FontDescription.hx
    |   |   |   |-- haxe\std\flash\text\engine\FontLookup.hx
    |   |   |   |-- haxe\std\flash\text\engine\FontMetrics.hx
    |   |   |   |-- haxe\std\flash\text\engine\FontPosture.hx
    |   |   |   |-- haxe\std\flash\text\engine\FontWeight.hx
    |   |   |   |-- haxe\std\flash\text\engine\GraphicElement.hx
    |   |   |   |-- haxe\std\flash\text\engine\GroupElement.hx
    |   |   |   |-- haxe\std\flash\text\engine\JustificationStyle.hx
    |   |   |   |-- haxe\std\flash\text\engine\Kerning.hx
    |   |   |   |-- haxe\std\flash\text\engine\LigatureLevel.hx
    |   |   |   |-- haxe\std\flash\text\engine\LineJustification.hx
    |   |   |   |-- haxe\std\flash\text\engine\RenderingMode.hx
    |   |   |   |-- haxe\std\flash\text\engine\SpaceJustifier.hx
    |   |   |   |-- haxe\std\flash\text\engine\TabAlignment.hx
    |   |   |   |-- haxe\std\flash\text\engine\TabStop.hx
    |   |   |   |-- haxe\std\flash\text\engine\TextBaseline.hx
    |   |   |   |-- haxe\std\flash\text\engine\TextBlock.hx
    |   |   |   |-- haxe\std\flash\text\engine\TextElement.hx
    |   |   |   |-- haxe\std\flash\text\engine\TextJustifier.hx
    |   |   |   |-- haxe\std\flash\text\engine\TextLine.hx
    |   |   |   |-- haxe\std\flash\text\engine\TextLineCreationResult.hx
    |   |   |   |-- haxe\std\flash\text\engine\TextLineMirrorRegion.hx
    |   |   |   |-- haxe\std\flash\text\engine\TextLineValidity.hx
    |   |   |   |-- haxe\std\flash\text\engine\TextRotation.hx
    |   |   |   `-- haxe\std\flash\text\engine\TypographicCase.hx
    |   |   `-- flash.text.ime
    |   |       |-- haxe\std\flash\text\ime\CompositionAttributeRange.hx
    |   |       `-- haxe\std\flash\text\ime\IIMEClient.hx
    |   |-- flash.trace
    |   |   `-- haxe\std\flash\trace\Trace.hx
    |   |-- flash.ui
    |   |   |-- haxe\std\flash\ui\ContextMenu.hx
    |   |   |-- haxe\std\flash\ui\ContextMenuBuiltInItems.hx
    |   |   |-- haxe\std\flash\ui\ContextMenuClipboardItems.hx
    |   |   |-- haxe\std\flash\ui\ContextMenuItem.hx
    |   |   |-- haxe\std\flash\ui\GameInput.hx
    |   |   |-- haxe\std\flash\ui\GameInputControl.hx
    |   |   |-- haxe\std\flash\ui\GameInputControlType.hx
    |   |   |-- haxe\std\flash\ui\GameInputDevice.hx
    |   |   |-- haxe\std\flash\ui\GameInputFinger.hx
    |   |   |-- haxe\std\flash\ui\GameInputHand.hx
    |   |   |-- haxe\std\flash\ui\KeyLocation.hx
    |   |   |-- haxe\std\flash\ui\Keyboard.hx
    |   |   |-- haxe\std\flash\ui\KeyboardType.hx
    |   |   |-- haxe\std\flash\ui\Mouse.hx
    |   |   |-- haxe\std\flash\ui\MouseCursor.hx
    |   |   |-- haxe\std\flash\ui\MouseCursorData.hx
    |   |   |-- haxe\std\flash\ui\Multitouch.hx
    |   |   `-- haxe\std\flash\ui\MultitouchInputMode.hx
    |   |-- flash.utils
    |   |   |-- haxe\std\flash\utils\ByteArray.hx
    |   |   |-- haxe\std\flash\utils\CompressionAlgorithm.hx
    |   |   |-- haxe\std\flash\utils\Dictionary.hx
    |   |   |-- haxe\std\flash\utils\Endian.hx
    |   |   |-- haxe\std\flash\utils\Function.hx
    |   |   |-- haxe\std\flash\utils\IDataInput.hx
    |   |   |-- haxe\std\flash\utils\IDataInput2.hx
    |   |   |-- haxe\std\flash\utils\IDataOutput.hx
    |   |   |-- haxe\std\flash\utils\IDataOutput2.hx
    |   |   |-- haxe\std\flash\utils\IExternalizable.hx
    |   |   |-- haxe\std\flash\utils\JSON.hx
    |   |   |-- haxe\std\flash\utils\Namespace.hx
    |   |   |-- haxe\std\flash\utils\Object.hx
    |   |   |-- haxe\std\flash\utils\ObjectInput.hx
    |   |   |-- haxe\std\flash\utils\ObjectOutput.hx
    |   |   |-- haxe\std\flash\utils\Proxy.hx
    |   |   |-- haxe\std\flash\utils\QName.hx
    |   |   |-- haxe\std\flash\utils\RegExp.hx
    |   |   |-- haxe\std\flash\utils\SetIntervalTimer.hx
    |   |   |-- haxe\std\flash\utils\Telemetry.hx
    |   |   `-- haxe\std\flash\utils\Timer.hx
    |   `-- flash.xml
    |       |-- haxe\std\flash\xml\XML.hx
    |       |-- haxe\std\flash\xml\XMLDocument.hx
    |       |-- haxe\std\flash\xml\XMLList.hx
    |       |-- haxe\std\flash\xml\XMLNode.hx
    |       |-- haxe\std\flash\xml\XMLNodeType.hx
    |       |-- haxe\std\flash\xml\XMLParser.hx
    |       `-- haxe\std\flash\xml\XMLTag.hx
    |-- haxe
    |   |-- haxe\std\haxe\CallStack.hx
    |   |-- haxe\std\haxe\Constraints.hx
    |   |-- haxe\std\haxe\DynamicAccess.hx
    |   |-- haxe\std\haxe\EntryPoint.hx
    |   |-- haxe\std\haxe\EnumFlags.hx
    |   |-- haxe\std\haxe\EnumTools.hx
    |   |-- haxe\std\haxe\Exception.hx
    |   |-- haxe\std\haxe\Http.hx
    |   |-- haxe\std\haxe\Int32.hx
    |   |-- haxe\std\haxe\Int64.hx
    |   |-- haxe\std\haxe\Int64Helper.hx
    |   |-- haxe\std\haxe\Json.hx
    |   |-- haxe\std\haxe\Log.hx
    |   |-- haxe\std\haxe\MainLoop.hx
    |   |-- haxe\std\haxe\NativeStackTrace.hx
    |   |-- haxe\std\haxe\PosInfos.hx
    |   |-- haxe\std\haxe\Resource.hx
    |   |-- haxe\std\haxe\Rest.hx
    |   |-- haxe\std\haxe\Serializer.hx
    |   |-- haxe\std\haxe\SysTools.hx
    |   |-- haxe\std\haxe\Template.hx
    |   |-- haxe\std\haxe\Timer.hx
    |   |-- haxe\std\haxe\Ucs2.hx
    |   |-- haxe\std\haxe\Unserializer.hx
    |   |-- haxe\std\haxe\Utf8.hx
    |   |-- haxe\std\haxe\ValueException.hx
    |   |-- haxe.atomic
    |   |   |-- haxe\std\haxe\atomic\AtomicBool.hx
    |   |   |-- haxe\std\haxe\atomic\AtomicInt.hx
    |   |   `-- haxe\std\haxe\atomic\AtomicObject.hx
    |   |-- haxe.crypto
    |   |   |-- haxe\std\haxe\crypto\Adler32.hx
    |   |   |-- haxe\std\haxe\crypto\Base64.hx
    |   |   |-- haxe\std\haxe\crypto\BaseCode.hx
    |   |   |-- haxe\std\haxe\crypto\Crc32.hx
    |   |   |-- haxe\std\haxe\crypto\Hmac.hx
    |   |   |-- haxe\std\haxe\crypto\Md5.hx
    |   |   |-- haxe\std\haxe\crypto\Sha1.hx
    |   |   |-- haxe\std\haxe\crypto\Sha224.hx
    |   |   `-- haxe\std\haxe\crypto\Sha256.hx
    |   |-- haxe.display
    |   |   |-- haxe\std\haxe\display\Display.hx
    |   |   |-- haxe\std\haxe\display\FsPath.hx
    |   |   |-- haxe\std\haxe\display\JsonModuleTypes.hx
    |   |   |-- haxe\std\haxe\display\Position.hx
    |   |   |-- haxe\std\haxe\display\Protocol.hx
    |   |   `-- haxe\std\haxe\display\Server.hx
    |   |-- haxe.ds
    |   |   |-- haxe\std\haxe\ds\ArraySort.hx
    |   |   |-- haxe\std\haxe\ds\BalancedTree.hx
    |   |   |-- haxe\std\haxe\ds\Either.hx
    |   |   |-- haxe\std\haxe\ds\EnumValueMap.hx
    |   |   |-- haxe\std\haxe\ds\GenericStack.hx
    |   |   |-- haxe\std\haxe\ds\HashMap.hx
    |   |   |-- haxe\std\haxe\ds\IntMap.hx
    |   |   |-- haxe\std\haxe\ds\List.hx
    |   |   |-- haxe\std\haxe\ds\ListSort.hx
    |   |   |-- haxe\std\haxe\ds\Map.hx
    |   |   |-- haxe\std\haxe\ds\ObjectMap.hx
    |   |   |-- haxe\std\haxe\ds\Option.hx
    |   |   |-- haxe\std\haxe\ds\ReadOnlyArray.hx
    |   |   |-- haxe\std\haxe\ds\StringMap.hx
    |   |   |-- haxe\std\haxe\ds\Vector.hx
    |   |   `-- haxe\std\haxe\ds\WeakMap.hx
    |   |-- haxe.exceptions
    |   |   |-- haxe\std\haxe\exceptions\ArgumentException.hx
    |   |   |-- haxe\std\haxe\exceptions\NotImplementedException.hx
    |   |   `-- haxe\std\haxe\exceptions\PosException.hx
    |   |-- haxe.extern
    |   |   |-- haxe\std\haxe\extern\AsVar.hx
    |   |   |-- haxe\std\haxe\extern\EitherType.hx
    |   |   `-- haxe\std\haxe\extern\Rest.hx
    |   |-- haxe.format
    |   |   |-- haxe\std\haxe\format\JsonParser.hx
    |   |   `-- haxe\std\haxe\format\JsonPrinter.hx
    |   |-- haxe.http
    |   |   |-- haxe\std\haxe\http\HttpBase.hx
    |   |   |-- haxe\std\haxe\http\HttpJs.hx
    |   |   |-- haxe\std\haxe\http\HttpMethod.hx
    |   |   |-- haxe\std\haxe\http\HttpNodeJs.hx
    |   |   `-- haxe\std\haxe\http\HttpStatus.hx
    |   |-- haxe.io
    |   |   |-- haxe\std\haxe\io\ArrayBufferView.hx
    |   |   |-- haxe\std\haxe\io\BufferInput.hx
    |   |   |-- haxe\std\haxe\io\Bytes.hx
    |   |   |-- haxe\std\haxe\io\BytesBuffer.hx
    |   |   |-- haxe\std\haxe\io\BytesData.hx
    |   |   |-- haxe\std\haxe\io\BytesInput.hx
    |   |   |-- haxe\std\haxe\io\BytesOutput.hx
    |   |   |-- haxe\std\haxe\io\Encoding.hx
    |   |   |-- haxe\std\haxe\io\Eof.hx
    |   |   |-- haxe\std\haxe\io\Error.hx
    |   |   |-- haxe\std\haxe\io\FPHelper.hx
    |   |   |-- haxe\std\haxe\io\Float32Array.hx
    |   |   |-- haxe\std\haxe\io\Float64Array.hx
    |   |   |-- haxe\std\haxe\io\Input.hx
    |   |   |-- haxe\std\haxe\io\Int32Array.hx
    |   |   |-- haxe\std\haxe\io\Mime.hx
    |   |   |-- haxe\std\haxe\io\Output.hx
    |   |   |-- haxe\std\haxe\io\Path.hx
    |   |   |-- haxe\std\haxe\io\Scheme.hx
    |   |   |-- haxe\std\haxe\io\StringInput.hx
    |   |   |-- haxe\std\haxe\io\UInt16Array.hx
    |   |   |-- haxe\std\haxe\io\UInt32Array.hx
    |   |   `-- haxe\std\haxe\io\UInt8Array.hx
    |   |-- haxe.iterators
    |   |   |-- haxe\std\haxe\iterators\ArrayIterator.hx
    |   |   |-- haxe\std\haxe\iterators\ArrayKeyValueIterator.hx
    |   |   |-- haxe\std\haxe\iterators\DynamicAccessIterator.hx
    |   |   |-- haxe\std\haxe\iterators\DynamicAccessKeyValueIterator.hx
    |   |   |-- haxe\std\haxe\iterators\HashMapKeyValueIterator.hx
    |   |   |-- haxe\std\haxe\iterators\MapKeyValueIterator.hx
    |   |   |-- haxe\std\haxe\iterators\RestIterator.hx
    |   |   |-- haxe\std\haxe\iterators\RestKeyValueIterator.hx
    |   |   |-- haxe\std\haxe\iterators\StringIterator.hx
    |   |   |-- haxe\std\haxe\iterators\StringIteratorUnicode.hx
    |   |   |-- haxe\std\haxe\iterators\StringKeyValueIterator.hx
    |   |   `-- haxe\std\haxe\iterators\StringKeyValueIteratorUnicode.hx
    |   |-- haxe.macro
    |   |   |-- haxe\std\haxe\macro\CompilationServer.hx
    |   |   |-- haxe\std\haxe\macro\Compiler.hx
    |   |   |-- haxe\std\haxe\macro\ComplexTypeTools.hx
    |   |   |-- haxe\std\haxe\macro\Context.hx
    |   |   |-- haxe\std\haxe\macro\DisplayMode.hx
    |   |   |-- haxe\std\haxe\macro\ExampleJSGenerator.hx
    |   |   |-- haxe\std\haxe\macro\Expr.hx
    |   |   |-- haxe\std\haxe\macro\ExprTools.hx
    |   |   |-- haxe\std\haxe\macro\Format.hx
    |   |   |-- haxe\std\haxe\macro\JSGenApi.hx
    |   |   |-- haxe\std\haxe\macro\MacroStringTools.hx
    |   |   |-- haxe\std\haxe\macro\MacroType.hx
    |   |   |-- haxe\std\haxe\macro\PlatformConfig.hx
    |   |   |-- haxe\std\haxe\macro\PositionTools.hx
    |   |   |-- haxe\std\haxe\macro\Printer.hx
    |   |   |-- haxe\std\haxe\macro\Tools.hx
    |   |   |-- haxe\std\haxe\macro\Type.hx
    |   |   |-- haxe\std\haxe\macro\TypeTools.hx
    |   |   `-- haxe\std\haxe\macro\TypedExprTools.hx
    |   |-- haxe.rtti
    |   |   |-- haxe\std\haxe\rtti\CType.hx
    |   |   |-- haxe\std\haxe\rtti\Meta.hx
    |   |   |-- haxe\std\haxe\rtti\Rtti.hx
    |   |   `-- haxe\std\haxe\rtti\XmlParser.hx
    |   |-- haxe.xml
    |   |   |-- haxe\std\haxe\xml\Access.hx
    |   |   |-- haxe\std\haxe\xml\Check.hx
    |   |   |-- haxe\std\haxe\xml\Fast.hx
    |   |   |-- haxe\std\haxe\xml\Parser.hx
    |   |   `-- haxe\std\haxe\xml\Printer.hx
    |   `-- haxe.zip
    |       |-- haxe\std\haxe\zip\Compress.hx
    |       |-- haxe\std\haxe\zip\Entry.hx
    |       |-- haxe\std\haxe\zip\FlushMode.hx
    |       |-- haxe\std\haxe\zip\Huffman.hx
    |       |-- haxe\std\haxe\zip\InflateImpl.hx
    |       |-- haxe\std\haxe\zip\Reader.hx
    |       |-- haxe\std\haxe\zip\Tools.hx
    |       |-- haxe\std\haxe\zip\Uncompress.hx
    |       `-- haxe\std\haxe\zip\Writer.hx
    |-- hl
    |   |-- haxe\std\hl\Abstract.hx
    |   |-- haxe\std\hl\Api.hx
    |   |-- haxe\std\hl\Atomics.hx
    |   |-- haxe\std\hl\BaseType.hx
    |   |-- haxe\std\hl\Boot.hx
    |   |-- haxe\std\hl\Bytes.hx
    |   |-- haxe\std\hl\BytesAccess.hx
    |   |-- haxe\std\hl\CArray.hx
    |   |-- haxe\std\hl\F32.hx
    |   |-- haxe\std\hl\F64.hx
    |   |-- haxe\std\hl\Format.hx
    |   |-- haxe\std\hl\Gc.hx
    |   |-- haxe\std\hl\I64.hx
    |   |-- haxe\std\hl\NativeArray.hx
    |   |-- haxe\std\hl\Profile.hx
    |   |-- haxe\std\hl\Ref.hx
    |   |-- haxe\std\hl\Type.hx
    |   |-- haxe\std\hl\UI.hx
    |   |-- haxe\std\hl\UI16.hx
    |   |-- haxe\std\hl\UI8.hx
    |   |-- hl\_std
    |   |   |-- haxe\std\hl\_std\Date.hx
    |   |   |-- haxe\std\hl\_std\EReg.hx
    |   |   |-- haxe\std\hl\_std\Math.hx
    |   |   |-- haxe\std\hl\_std\Reflect.hx
    |   |   |-- haxe\std\hl\_std\Std.hx
    |   |   |-- haxe\std\hl\_std\String.hx
    |   |   |-- haxe\std\hl\_std\StringBuf.hx
    |   |   |-- haxe\std\hl\_std\Sys.hx
    |   |   |-- haxe\std\hl\_std\Type.hx
    |   |   |-- haxe\std\hl\_std\UInt.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\hl\_std\haxe\Exception.hx
    |   |   |   |-- haxe\std\hl\_std\haxe\Int64.hx
    |   |   |   |-- haxe\std\hl\_std\haxe\NativeStackTrace.hx
    |   |   |   |-- haxe\std\hl\_std\haxe\Resource.hx
    |   |   |   |-- haxe.atomic
    |   |   |   |   |-- haxe\std\hl\_std\haxe\atomic\AtomicInt.hx
    |   |   |   |   `-- haxe\std\hl\_std\haxe\atomic\AtomicObject.hx
    |   |   |   |-- haxe.crypto
    |   |   |   |   |-- haxe\std\hl\_std\haxe\crypto\Md5.hx
    |   |   |   |   `-- haxe\std\hl\_std\haxe\crypto\Sha1.hx
    |   |   |   |-- haxe.ds
    |   |   |   |   |-- haxe\std\hl\_std\haxe\ds\IntMap.hx
    |   |   |   |   |-- haxe\std\hl\_std\haxe\ds\ObjectMap.hx
    |   |   |   |   |-- haxe\std\hl\_std\haxe\ds\StringMap.hx
    |   |   |   |   `-- haxe\std\hl\_std\haxe\ds\Vector.hx
    |   |   |   |-- haxe.io
    |   |   |   |   |-- haxe\std\hl\_std\haxe\io\Bytes.hx
    |   |   |   |   |-- haxe\std\hl\_std\haxe\io\BytesBuffer.hx
    |   |   |   |   `-- haxe\std\hl\_std\haxe\io\FPHelper.hx
    |   |   |   `-- haxe.zip
    |   |   |       |-- haxe\std\hl\_std\haxe\zip\Compress.hx
    |   |   |       `-- haxe\std\hl\_std\haxe\zip\Uncompress.hx
    |   |   `-- sys
    |   |       |-- haxe\std\hl\_std\sys\FileSystem.hx
    |   |       |-- sys.db
    |   |       |   |-- haxe\std\hl\_std\sys\db\Connection.hx
    |   |       |   |-- haxe\std\hl\_std\sys\db\Mysql.hx
    |   |       |   |-- haxe\std\hl\_std\sys\db\ResultSet.hx
    |   |       |   `-- haxe\std\hl\_std\sys\db\Sqlite.hx
    |   |       |-- sys.io
    |   |       |   |-- haxe\std\hl\_std\sys\io\File.hx
    |   |       |   |-- haxe\std\hl\_std\sys\io\FileInput.hx
    |   |       |   |-- haxe\std\hl\_std\sys\io\FileOutput.hx
    |   |       |   `-- haxe\std\hl\_std\sys\io\Process.hx
    |   |       |-- sys.net
    |   |       |   |-- haxe\std\hl\_std\sys\net\Host.hx
    |   |       |   |-- haxe\std\hl\_std\sys\net\Socket.hx
    |   |       |   `-- haxe\std\hl\_std\sys\net\UdpSocket.hx
    |   |       |-- sys.ssl
    |   |       |   |-- haxe\std\hl\_std\sys\ssl\Certificate.hx
    |   |       |   |-- haxe\std\hl\_std\sys\ssl\Context.hx
    |   |       |   |-- haxe\std\hl\_std\sys\ssl\Digest.hx
    |   |       |   |-- haxe\std\hl\_std\sys\ssl\Key.hx
    |   |       |   |-- haxe\std\hl\_std\sys\ssl\Lib.hx
    |   |       |   `-- haxe\std\hl\_std\sys\ssl\Socket.hx
    |   |       `-- sys.thread
    |   |           |-- haxe\std\hl\_std\sys\thread\Condition.hx
    |   |           |-- haxe\std\hl\_std\sys\thread\Deque.hx
    |   |           |-- haxe\std\hl\_std\sys\thread\Lock.hx
    |   |           |-- haxe\std\hl\_std\sys\thread\Mutex.hx
    |   |           |-- haxe\std\hl\_std\sys\thread\Semaphore.hx
    |   |           |-- haxe\std\hl\_std\sys\thread\Thread.hx
    |   |           `-- haxe\std\hl\_std\sys\thread\Tls.hx
    |   |-- haxe\std\hl\hl_version
    |   |-- hl.types
    |   |   |-- haxe\std\hl\types\ArrayBase.hx
    |   |   |-- haxe\std\hl\types\ArrayBytes.hx
    |   |   |-- haxe\std\hl\types\ArrayDyn.hx
    |   |   |-- haxe\std\hl\types\ArrayObj.hx
    |   |   |-- haxe\std\hl\types\BytesMap.hx
    |   |   |-- haxe\std\hl\types\Int64Map.hx
    |   |   |-- haxe\std\hl\types\IntMap.hx
    |   |   `-- haxe\std\hl\types\ObjectMap.hx
    |   `-- hl.uv
    |       |-- haxe\std\hl\uv\Fs.hx
    |       |-- haxe\std\hl\uv\Handle.hx
    |       |-- haxe\std\hl\uv\HandleData.hx
    |       |-- haxe\std\hl\uv\Loop.hx
    |       |-- haxe\std\hl\uv\Stream.hx
    |       `-- haxe\std\hl\uv\Tcp.hx
    |-- java
    |   |-- haxe\std\java\Boot.hx
    |   |-- haxe\std\java\Init.hx
    |   |-- haxe\std\java\Lib.hx
    |   |-- haxe\std\java\NativeArray.hx
    |   |-- haxe\std\java\NativeString.hx
    |   |-- haxe\std\java\StdTypes.hx
    |   |-- java\_std
    |   |   |-- haxe\std\java\_std\Array.hx
    |   |   |-- haxe\std\java\_std\Date.hx
    |   |   |-- haxe\std\java\_std\EReg.hx
    |   |   |-- haxe\std\java\_std\Math.hx
    |   |   |-- haxe\std\java\_std\Reflect.hx
    |   |   |-- haxe\std\java\_std\Std.hx
    |   |   |-- haxe\std\java\_std\String.hx
    |   |   |-- haxe\std\java\_std\StringBuf.hx
    |   |   |-- haxe\std\java\_std\Sys.hx
    |   |   |-- haxe\std\java\_std\Type.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\java\_std\haxe\Exception.hx
    |   |   |   |-- haxe\std\java\_std\haxe\Int64.hx
    |   |   |   |-- haxe\std\java\_std\haxe\NativeStackTrace.hx
    |   |   |   |-- haxe\std\java\_std\haxe\Resource.hx
    |   |   |   |-- haxe\std\java\_std\haxe\Rest.hx
    |   |   |   |-- haxe.atomic
    |   |   |   |   |-- haxe\std\java\_std\haxe\atomic\AtomicBool.hx
    |   |   |   |   |-- haxe\std\java\_std\haxe\atomic\AtomicInt.hx
    |   |   |   |   `-- haxe\std\java\_std\haxe\atomic\AtomicObject.hx
    |   |   |   |-- haxe.crypto
    |   |   |   |   |-- haxe\std\java\_std\haxe\crypto\Md5.hx
    |   |   |   |   |-- haxe\std\java\_std\haxe\crypto\Sha1.hx
    |   |   |   |   `-- haxe\std\java\_std\haxe\crypto\Sha256.hx
    |   |   |   |-- haxe.ds
    |   |   |   |   |-- haxe\std\java\_std\haxe\ds\IntMap.hx
    |   |   |   |   |-- haxe\std\java\_std\haxe\ds\ObjectMap.hx
    |   |   |   |   |-- haxe\std\java\_std\haxe\ds\StringMap.hx
    |   |   |   |   `-- haxe\std\java\_std\haxe\ds\WeakMap.hx
    |   |   |   `-- haxe.zip
    |   |   |       |-- haxe\std\java\_std\haxe\zip\Compress.hx
    |   |   |       `-- haxe\std\java\_std\haxe\zip\Uncompress.hx
    |   |   `-- sys
    |   |       |-- haxe\std\java\_std\sys\FileSystem.hx
    |   |       |-- sys.db
    |   |       |   |-- haxe\std\java\_std\sys\db\Mysql.hx
    |   |       |   `-- haxe\std\java\_std\sys\db\Sqlite.hx
    |   |       |-- sys.io
    |   |       |   |-- haxe\std\java\_std\sys\io\File.hx
    |   |       |   |-- haxe\std\java\_std\sys\io\FileInput.hx
    |   |       |   |-- haxe\std\java\_std\sys\io\FileOutput.hx
    |   |       |   `-- haxe\std\java\_std\sys\io\Process.hx
    |   |       |-- sys.net
    |   |       |   |-- haxe\std\java\_std\sys\net\Host.hx
    |   |       |   `-- haxe\std\java\_std\sys\net\Socket.hx
    |   |       `-- sys.thread
    |   |           |-- haxe\std\java\_std\sys\thread\Condition.hx
    |   |           |-- haxe\std\java\_std\sys\thread\Deque.hx
    |   |           |-- haxe\std\java\_std\sys\thread\Lock.hx
    |   |           |-- haxe\std\java\_std\sys\thread\Mutex.hx
    |   |           |-- haxe\std\java\_std\sys\thread\Semaphore.hx
    |   |           |-- haxe\std\java\_std\sys\thread\Thread.hx
    |   |           `-- haxe\std\java\_std\sys\thread\Tls.hx
    |   |-- java.db
    |   |   `-- haxe\std\java\db\Jdbc.hx
    |   |-- java.internal
    |   |   |-- haxe\std\java\internal\FieldLookup.hx
    |   |   |-- haxe\std\java\internal\Function.hx
    |   |   |-- haxe\std\java\internal\HxObject.hx
    |   |   |-- haxe\std\java\internal\IEquatable.hx
    |   |   |-- haxe\std\java\internal\Runtime.hx
    |   |   `-- haxe\std\java\internal\StringExt.hx
    |   |-- java.io
    |   |   |-- haxe\std\java\io\NativeInput.hx
    |   |   `-- haxe\std\java\io\NativeOutput.hx
    |   |-- java.lang
    |   |   |-- haxe\std\java\lang\Boolean.hx
    |   |   |-- haxe\std\java\lang\Byte.hx
    |   |   |-- haxe\std\java\lang\Character.hx
    |   |   |-- haxe\std\java\lang\Double.hx
    |   |   |-- haxe\std\java\lang\Float.hx
    |   |   |-- haxe\std\java\lang\Integer.hx
    |   |   |-- haxe\std\java\lang\Long.hx
    |   |   `-- haxe\std\java\lang\Short.hx
    |   |-- java.net
    |   |   `-- haxe\std\java\net\SslSocket.hx
    |   |-- java.types
    |   |   |-- haxe\std\java\types\Char16.hx
    |   |   |-- haxe\std\java\types\Int16.hx
    |   |   `-- haxe\std\java\types\Int8.hx
    |   `-- java.vm
    |       |-- haxe\std\java\vm\AtomicList.hx
    |       |-- haxe\std\java\vm\Deque.hx
    |       |-- haxe\std\java\vm\Gc.hx
    |       |-- haxe\std\java\vm\Lock.hx
    |       |-- haxe\std\java\vm\Mutex.hx
    |       |-- haxe\std\java\vm\Thread.hx
    |       `-- haxe\std\java\vm\Tls.hx
    |-- js
    |   |-- haxe\std\js\Boot.hx
    |   |-- haxe\std\js\Browser.hx
    |   |-- haxe\std\js\Cookie.hx
    |   |-- haxe\std\js\Error.hx
    |   |-- haxe\std\js\Function.hx
    |   |-- haxe\std\js\JsIterator.hx
    |   |-- haxe\std\js\Lib.hx
    |   |-- haxe\std\js\Object.hx
    |   |-- haxe\std\js\Promise.hx
    |   |-- haxe\std\js\RegExp.hx
    |   |-- haxe\std\js\Selection.hx
    |   |-- haxe\std\js\Set.hx
    |   |-- haxe\std\js\Symbol.hx
    |   |-- haxe\std\js\Syntax.hx
    |   |-- js\_std
    |   |   |-- haxe\std\js\_std\Array.hx
    |   |   |-- haxe\std\js\_std\Date.hx
    |   |   |-- haxe\std\js\_std\EReg.hx
    |   |   |-- haxe\std\js\_std\HxOverrides.hx
    |   |   |-- haxe\std\js\_std\Math.hx
    |   |   |-- haxe\std\js\_std\Reflect.hx
    |   |   |-- haxe\std\js\_std\Std.hx
    |   |   |-- haxe\std\js\_std\String.hx
    |   |   |-- haxe\std\js\_std\Type.hx
    |   |   `-- haxe
    |   |       |-- haxe\std\js\_std\haxe\Exception.hx
    |   |       |-- haxe\std\js\_std\haxe\Json.hx
    |   |       |-- haxe\std\js\_std\haxe\NativeStackTrace.hx
    |   |       |-- haxe.atomic
    |   |       |   `-- haxe\std\js\_std\haxe\atomic\AtomicInt.hx
    |   |       |-- haxe.ds
    |   |       |   |-- haxe\std\js\_std\haxe\ds\IntMap.hx
    |   |       |   |-- haxe\std\js\_std\haxe\ds\ObjectMap.hx
    |   |       |   `-- haxe\std\js\_std\haxe\ds\StringMap.hx
    |   |       `-- haxe.io
    |   |           |-- haxe\std\js\_std\haxe\io\ArrayBufferView.hx
    |   |           |-- haxe\std\js\_std\haxe\io\Bytes.hx
    |   |           |-- haxe\std\js\_std\haxe\io\BytesBuffer.hx
    |   |           |-- haxe\std\js\_std\haxe\io\Float32Array.hx
    |   |           |-- haxe\std\js\_std\haxe\io\Float64Array.hx
    |   |           |-- haxe\std\js\_std\haxe\io\Int32Array.hx
    |   |           |-- haxe\std\js\_std\haxe\io\UInt16Array.hx
    |   |           |-- haxe\std\js\_std\haxe\io\UInt32Array.hx
    |   |           `-- haxe\std\js\_std\haxe\io\UInt8Array.hx
    |   |-- js.html
    |   |   |-- haxe\std\js\html\AbortController.hx
    |   |   |-- haxe\std\js\html\AbortSignal.hx
    |   |   |-- haxe\std\js\html\AddEventListenerOptions.hx
    |   |   |-- haxe\std\js\html\AlignSetting.hx
    |   |   |-- haxe\std\js\html\AnchorElement.hx
    |   |   |-- haxe\std\js\html\Animation.hx
    |   |   |-- haxe\std\js\html\AnimationEffect.hx
    |   |   |-- haxe\std\js\html\AnimationEvent.hx
    |   |   |-- haxe\std\js\html\AnimationEventInit.hx
    |   |   |-- haxe\std\js\html\AnimationFilter.hx
    |   |   |-- haxe\std\js\html\AnimationPlayState.hx
    |   |   |-- haxe\std\js\html\AnimationPlaybackEvent.hx
    |   |   |-- haxe\std\js\html\AnimationPlaybackEventInit.hx
    |   |   |-- haxe\std\js\html\AnimationTimeline.hx
    |   |   |-- haxe\std\js\html\AreaElement.hx
    |   |   |-- haxe\std\js\html\ArrayBuffer.hx
    |   |   |-- haxe\std\js\html\ArrayBufferView.hx
    |   |   |-- haxe\std\js\html\AssignedNodesOptions.hx
    |   |   |-- haxe\std\js\html\Attr.hx
    |   |   |-- haxe\std\js\html\Audio.hx
    |   |   |-- haxe\std\js\html\AudioElement.hx
    |   |   |-- haxe\std\js\html\AudioStreamTrack.hx
    |   |   |-- haxe\std\js\html\AudioTrack.hx
    |   |   |-- haxe\std\js\html\AudioTrackList.hx
    |   |   |-- haxe\std\js\html\AutoKeyword.hx
    |   |   |-- haxe\std\js\html\BRElement.hx
    |   |   |-- haxe\std\js\html\BarProp.hx
    |   |   |-- haxe\std\js\html\BaseElement.hx
    |   |   |-- haxe\std\js\html\BatteryManager.hx
    |   |   |-- haxe\std\js\html\BeforeInstallPromptEvent.hx
    |   |   |-- haxe\std\js\html\BeforeUnloadEvent.hx
    |   |   |-- haxe\std\js\html\BinaryType.hx
    |   |   |-- haxe\std\js\html\Blob.hx
    |   |   |-- haxe\std\js\html\BlobEvent.hx
    |   |   |-- haxe\std\js\html\BlobEventInit.hx
    |   |   |-- haxe\std\js\html\BlobPropertyBag.hx
    |   |   |-- haxe\std\js\html\BodyElement.hx
    |   |   |-- haxe\std\js\html\BroadcastChannel.hx
    |   |   |-- haxe\std\js\html\ButtonElement.hx
    |   |   |-- haxe\std\js\html\CDATASection.hx
    |   |   |-- haxe\std\js\html\CSS.hx
    |   |   |-- haxe\std\js\html\CSSAnimation.hx
    |   |   |-- haxe\std\js\html\CSSBoxType.hx
    |   |   |-- haxe\std\js\html\CSSConditionRule.hx
    |   |   |-- haxe\std\js\html\CSSCounterStyleRule.hx
    |   |   |-- haxe\std\js\html\CSSFontFaceRule.hx
    |   |   |-- haxe\std\js\html\CSSFontFeatureValuesRule.hx
    |   |   |-- haxe\std\js\html\CSSGroupingRule.hx
    |   |   |-- haxe\std\js\html\CSSImportRule.hx
    |   |   |-- haxe\std\js\html\CSSKeyframeRule.hx
    |   |   |-- haxe\std\js\html\CSSKeyframesRule.hx
    |   |   |-- haxe\std\js\html\CSSMediaRule.hx
    |   |   |-- haxe\std\js\html\CSSMozDocumentRule.hx
    |   |   |-- haxe\std\js\html\CSSNamespaceRule.hx
    |   |   |-- haxe\std\js\html\CSSPageRule.hx
    |   |   |-- haxe\std\js\html\CSSPseudoElement.hx
    |   |   |-- haxe\std\js\html\CSSRule.hx
    |   |   |-- haxe\std\js\html\CSSRuleList.hx
    |   |   |-- haxe\std\js\html\CSSStyleDeclaration.hx
    |   |   |-- haxe\std\js\html\CSSStyleRule.hx
    |   |   |-- haxe\std\js\html\CSSStyleSheet.hx
    |   |   |-- haxe\std\js\html\CSSSupportsRule.hx
    |   |   |-- haxe\std\js\html\CSSTransition.hx
    |   |   |-- haxe\std\js\html\Cache.hx
    |   |   |-- haxe\std\js\html\CacheQueryOptions.hx
    |   |   |-- haxe\std\js\html\CacheStorage.hx
    |   |   |-- haxe\std\js\html\CacheStorageNamespace.hx
    |   |   |-- haxe\std\js\html\CanvasCaptureMediaStream.hx
    |   |   |-- haxe\std\js\html\CanvasElement.hx
    |   |   |-- haxe\std\js\html\CanvasGradient.hx
    |   |   |-- haxe\std\js\html\CanvasPattern.hx
    |   |   |-- haxe\std\js\html\CanvasRenderingContext2D.hx
    |   |   |-- haxe\std\js\html\CanvasWindingRule.hx
    |   |   |-- haxe\std\js\html\CaretPosition.hx
    |   |   |-- haxe\std\js\html\ChannelPixelLayout.hx
    |   |   |-- haxe\std\js\html\ChannelPixelLayoutDataType.hx
    |   |   |-- haxe\std\js\html\CharacterData.hx
    |   |   |-- haxe\std\js\html\Client.hx
    |   |   |-- haxe\std\js\html\ClientQueryOptions.hx
    |   |   |-- haxe\std\js\html\ClientType.hx
    |   |   |-- haxe\std\js\html\Clients.hx
    |   |   |-- haxe\std\js\html\Clipboard.hx
    |   |   |-- haxe\std\js\html\ClipboardEvent.hx
    |   |   |-- haxe\std\js\html\ClipboardEventInit.hx
    |   |   |-- haxe\std\js\html\CloseEvent.hx
    |   |   |-- haxe\std\js\html\CloseEventInit.hx
    |   |   |-- haxe\std\js\html\Comment.hx
    |   |   |-- haxe\std\js\html\CompositeOperation.hx
    |   |   |-- haxe\std\js\html\CompositionEvent.hx
    |   |   |-- haxe\std\js\html\CompositionEventInit.hx
    |   |   |-- haxe\std\js\html\ComputedEffectTiming.hx
    |   |   |-- haxe\std\js\html\Console.hx
    |   |   |-- haxe\std\js\html\ConsoleInstance.hx
    |   |   |-- haxe\std\js\html\ConstrainBooleanParameters.hx
    |   |   |-- haxe\std\js\html\ConstrainDOMStringParameters.hx
    |   |   |-- haxe\std\js\html\ConstrainDoubleRange.hx
    |   |   |-- haxe\std\js\html\ConstrainLongRange.hx
    |   |   |-- haxe\std\js\html\ConvertCoordinateOptions.hx
    |   |   |-- haxe\std\js\html\Coordinates.hx
    |   |   |-- haxe\std\js\html\Crypto.hx
    |   |   |-- haxe\std\js\html\CryptoKey.hx
    |   |   |-- haxe\std\js\html\CustomEvent.hx
    |   |   |-- haxe\std\js\html\CustomEventInit.hx
    |   |   |-- haxe\std\js\html\DListElement.hx
    |   |   |-- haxe\std\js\html\DOMElement.hx
    |   |   |-- haxe\std\js\html\DOMError.hx
    |   |   |-- haxe\std\js\html\DOMException.hx
    |   |   |-- haxe\std\js\html\DOMImplementation.hx
    |   |   |-- haxe\std\js\html\DOMMatrix.hx
    |   |   |-- haxe\std\js\html\DOMMatrixReadOnly.hx
    |   |   |-- haxe\std\js\html\DOMParser.hx
    |   |   |-- haxe\std\js\html\DOMPoint.hx
    |   |   |-- haxe\std\js\html\DOMPointInit.hx
    |   |   |-- haxe\std\js\html\DOMPointReadOnly.hx
    |   |   |-- haxe\std\js\html\DOMQuad.hx
    |   |   |-- haxe\std\js\html\DOMQuadJSON.hx
    |   |   |-- haxe\std\js\html\DOMRect.hx
    |   |   |-- haxe\std\js\html\DOMRectList.hx
    |   |   |-- haxe\std\js\html\DOMRectReadOnly.hx
    |   |   |-- haxe\std\js\html\DOMRequest.hx
    |   |   |-- haxe\std\js\html\DOMRequestReadyState.hx
    |   |   |-- haxe\std\js\html\DOMStringList.hx
    |   |   |-- haxe\std\js\html\DOMStringMap.hx
    |   |   |-- haxe\std\js\html\DOMTokenList.hx
    |   |   |-- haxe\std\js\html\DataElement.hx
    |   |   |-- haxe\std\js\html\DataListElement.hx
    |   |   |-- haxe\std\js\html\DataTransfer.hx
    |   |   |-- haxe\std\js\html\DataTransferItem.hx
    |   |   |-- haxe\std\js\html\DataTransferItemList.hx
    |   |   |-- haxe\std\js\html\DataView.hx
    |   |   |-- haxe\std\js\html\DedicatedWorkerGlobalScope.hx
    |   |   |-- haxe\std\js\html\DetailsElement.hx
    |   |   |-- haxe\std\js\html\DeviceAcceleration.hx
    |   |   |-- haxe\std\js\html\DeviceAccelerationInit.hx
    |   |   |-- haxe\std\js\html\DeviceMotionEvent.hx
    |   |   |-- haxe\std\js\html\DeviceMotionEventInit.hx
    |   |   |-- haxe\std\js\html\DeviceOrientationEvent.hx
    |   |   |-- haxe\std\js\html\DeviceOrientationEventInit.hx
    |   |   |-- haxe\std\js\html\DeviceRotationRate.hx
    |   |   |-- haxe\std\js\html\DeviceRotationRateInit.hx
    |   |   |-- haxe\std\js\html\DialogElement.hx
    |   |   |-- haxe\std\js\html\DirectionSetting.hx
    |   |   |-- haxe\std\js\html\Directory.hx
    |   |   |-- haxe\std\js\html\DirectoryElement.hx
    |   |   |-- haxe\std\js\html\DisplayNameOptions.hx
    |   |   |-- haxe\std\js\html\DisplayNameResult.hx
    |   |   |-- haxe\std\js\html\DivElement.hx
    |   |   |-- haxe\std\js\html\Document.hx
    |   |   |-- haxe\std\js\html\DocumentFragment.hx
    |   |   |-- haxe\std\js\html\DocumentTimeline.hx
    |   |   |-- haxe\std\js\html\DocumentTimelineOptions.hx
    |   |   |-- haxe\std\js\html\DocumentType.hx
    |   |   |-- haxe\std\js\html\DragEvent.hx
    |   |   |-- haxe\std\js\html\DragEventInit.hx
    |   |   |-- haxe\std\js\html\EffectTiming.hx
    |   |   |-- haxe\std\js\html\Element.hx
    |   |   |-- haxe\std\js\html\ElementCreationOptions.hx
    |   |   |-- haxe\std\js\html\EmbedElement.hx
    |   |   |-- haxe\std\js\html\EndingTypes.hx
    |   |   |-- haxe\std\js\html\ErrorCallback.hx
    |   |   |-- haxe\std\js\html\ErrorEvent.hx
    |   |   |-- haxe\std\js\html\ErrorEventInit.hx
    |   |   |-- haxe\std\js\html\Event.hx
    |   |   |-- haxe\std\js\html\EventInit.hx
    |   |   |-- haxe\std\js\html\EventListener.hx
    |   |   |-- haxe\std\js\html\EventListenerOptions.hx
    |   |   |-- haxe\std\js\html\EventModifierInit.hx
    |   |   |-- haxe\std\js\html\EventSource.hx
    |   |   |-- haxe\std\js\html\EventSourceInit.hx
    |   |   |-- haxe\std\js\html\EventTarget.hx
    |   |   |-- haxe\std\js\html\Exception.hx
    |   |   |-- haxe\std\js\html\ExtendableEvent.hx
    |   |   |-- haxe\std\js\html\ExtendableEventInit.hx
    |   |   |-- haxe\std\js\html\ExtendableMessageEvent.hx
    |   |   |-- haxe\std\js\html\ExtendableMessageEventInit.hx
    |   |   |-- haxe\std\js\html\External.hx
    |   |   |-- haxe\std\js\html\FetchEvent.hx
    |   |   |-- haxe\std\js\html\FetchEventInit.hx
    |   |   |-- haxe\std\js\html\FetchObserver.hx
    |   |   |-- haxe\std\js\html\FetchState.hx
    |   |   |-- haxe\std\js\html\FieldSetElement.hx
    |   |   |-- haxe\std\js\html\File.hx
    |   |   |-- haxe\std\js\html\FileCallback.hx
    |   |   |-- haxe\std\js\html\FileList.hx
    |   |   |-- haxe\std\js\html\FileMode.hx
    |   |   |-- haxe\std\js\html\FilePropertyBag.hx
    |   |   |-- haxe\std\js\html\FileReader.hx
    |   |   |-- haxe\std\js\html\FileReaderSync.hx
    |   |   |-- haxe\std\js\html\FileSystem.hx
    |   |   |-- haxe\std\js\html\FileSystemDirectoryEntry.hx
    |   |   |-- haxe\std\js\html\FileSystemDirectoryReader.hx
    |   |   |-- haxe\std\js\html\FileSystemEntriesCallback.hx
    |   |   |-- haxe\std\js\html\FileSystemEntry.hx
    |   |   |-- haxe\std\js\html\FileSystemEntryCallback.hx
    |   |   |-- haxe\std\js\html\FileSystemFileEntry.hx
    |   |   |-- haxe\std\js\html\FileSystemFlags.hx
    |   |   |-- haxe\std\js\html\FillMode.hx
    |   |   |-- haxe\std\js\html\Float32Array.hx
    |   |   |-- haxe\std\js\html\Float64Array.hx
    |   |   |-- haxe\std\js\html\FocusEvent.hx
    |   |   |-- haxe\std\js\html\FocusEventInit.hx
    |   |   |-- haxe\std\js\html\FontElement.hx
    |   |   |-- haxe\std\js\html\FontFace.hx
    |   |   |-- haxe\std\js\html\FontFaceDescriptors.hx
    |   |   |-- haxe\std\js\html\FontFaceLoadStatus.hx
    |   |   |-- haxe\std\js\html\FontFaceSet.hx
    |   |   |-- haxe\std\js\html\FontFaceSetIterator.hx
    |   |   |-- haxe\std\js\html\FontFaceSetIteratorResult.hx
    |   |   |-- haxe\std\js\html\FontFaceSetLoadEvent.hx
    |   |   |-- haxe\std\js\html\FontFaceSetLoadEventInit.hx
    |   |   |-- haxe\std\js\html\FontFaceSetLoadStatus.hx
    |   |   |-- haxe\std\js\html\FormData.hx
    |   |   |-- haxe\std\js\html\FormDataIterator.hx
    |   |   |-- haxe\std\js\html\FormElement.hx
    |   |   |-- haxe\std\js\html\FrameElement.hx
    |   |   |-- haxe\std\js\html\FrameSetElement.hx
    |   |   |-- haxe\std\js\html\FrameType.hx
    |   |   |-- haxe\std\js\html\FullscreenOptions.hx
    |   |   |-- haxe\std\js\html\Gamepad.hx
    |   |   |-- haxe\std\js\html\GamepadButton.hx
    |   |   |-- haxe\std\js\html\GamepadEvent.hx
    |   |   |-- haxe\std\js\html\GamepadEventInit.hx
    |   |   |-- haxe\std\js\html\GamepadMappingType.hx
    |   |   |-- haxe\std\js\html\Geolocation.hx
    |   |   |-- haxe\std\js\html\GetNotificationOptions.hx
    |   |   |-- haxe\std\js\html\GetRootNodeOptions.hx
    |   |   |-- haxe\std\js\html\GetUserMediaRequest.hx
    |   |   |-- haxe\std\js\html\HRElement.hx
    |   |   |-- haxe\std\js\html\HTMLAllCollection.hx
    |   |   |-- haxe\std\js\html\HTMLCollection.hx
    |   |   |-- haxe\std\js\html\HTMLDocument.hx
    |   |   |-- haxe\std\js\html\HTMLFormControlsCollection.hx
    |   |   |-- haxe\std\js\html\HTMLOptionsCollection.hx
    |   |   |-- haxe\std\js\html\HTMLPropertiesCollection.hx
    |   |   |-- haxe\std\js\html\HashChangeEvent.hx
    |   |   |-- haxe\std\js\html\HashChangeEventInit.hx
    |   |   |-- haxe\std\js\html\HeadElement.hx
    |   |   |-- haxe\std\js\html\Headers.hx
    |   |   |-- haxe\std\js\html\HeadersIterator.hx
    |   |   |-- haxe\std\js\html\HeadingElement.hx
    |   |   |-- haxe\std\js\html\History.hx
    |   |   |-- haxe\std\js\html\HitRegionOptions.hx
    |   |   |-- haxe\std\js\html\HtmlElement.hx
    |   |   |-- haxe\std\js\html\IFrameElement.hx
    |   |   |-- haxe\std\js\html\Image.hx
    |   |   |-- haxe\std\js\html\ImageBitmap.hx
    |   |   |-- haxe\std\js\html\ImageBitmapFormat.hx
    |   |   |-- haxe\std\js\html\ImageBitmapRenderingContext.hx
    |   |   |-- haxe\std\js\html\ImageCapture.hx
    |   |   |-- haxe\std\js\html\ImageCaptureError.hx
    |   |   |-- haxe\std\js\html\ImageCaptureErrorEvent.hx
    |   |   |-- haxe\std\js\html\ImageCaptureErrorEventInit.hx
    |   |   |-- haxe\std\js\html\ImageData.hx
    |   |   |-- haxe\std\js\html\ImageElement.hx
    |   |   |-- haxe\std\js\html\InputElement.hx
    |   |   |-- haxe\std\js\html\InputEvent.hx
    |   |   |-- haxe\std\js\html\InputEventInit.hx
    |   |   |-- haxe\std\js\html\Int16Array.hx
    |   |   |-- haxe\std\js\html\Int32Array.hx
    |   |   |-- haxe\std\js\html\Int8Array.hx
    |   |   |-- haxe\std\js\html\IntersectionObserver.hx
    |   |   |-- haxe\std\js\html\IntersectionObserverEntry.hx
    |   |   |-- haxe\std\js\html\IntersectionObserverInit.hx
    |   |   |-- haxe\std\js\html\IntlUtils.hx
    |   |   |-- haxe\std\js\html\IterationCompositeOperation.hx
    |   |   |-- haxe\std\js\html\KeyEvent.hx
    |   |   |-- haxe\std\js\html\KeyboardEvent.hx
    |   |   |-- haxe\std\js\html\KeyboardEventInit.hx
    |   |   |-- haxe\std\js\html\KeyframeAnimationOptions.hx
    |   |   |-- haxe\std\js\html\KeyframeEffect.hx
    |   |   |-- haxe\std\js\html\KeyframeEffectOptions.hx
    |   |   |-- haxe\std\js\html\LIElement.hx
    |   |   |-- haxe\std\js\html\LabelElement.hx
    |   |   |-- haxe\std\js\html\LegendElement.hx
    |   |   |-- haxe\std\js\html\LineAlignSetting.hx
    |   |   |-- haxe\std\js\html\LinkElement.hx
    |   |   |-- haxe\std\js\html\LocalMediaStream.hx
    |   |   |-- haxe\std\js\html\LocaleInfo.hx
    |   |   |-- haxe\std\js\html\Location.hx
    |   |   |-- haxe\std\js\html\MapElement.hx
    |   |   |-- haxe\std\js\html\MediaDeviceInfo.hx
    |   |   |-- haxe\std\js\html\MediaDeviceKind.hx
    |   |   |-- haxe\std\js\html\MediaDevices.hx
    |   |   |-- haxe\std\js\html\MediaElement.hx
    |   |   |-- haxe\std\js\html\MediaError.hx
    |   |   |-- haxe\std\js\html\MediaKeyStatusMapIterator.hx
    |   |   |-- haxe\std\js\html\MediaList.hx
    |   |   |-- haxe\std\js\html\MediaQueryList.hx
    |   |   |-- haxe\std\js\html\MediaQueryListEvent.hx
    |   |   |-- haxe\std\js\html\MediaQueryListEventInit.hx
    |   |   |-- haxe\std\js\html\MediaRecorder.hx
    |   |   |-- haxe\std\js\html\MediaRecorderErrorEvent.hx
    |   |   |-- haxe\std\js\html\MediaRecorderErrorEventInit.hx
    |   |   |-- haxe\std\js\html\MediaRecorderOptions.hx
    |   |   |-- haxe\std\js\html\MediaSource.hx
    |   |   |-- haxe\std\js\html\MediaSourceEndOfStreamError.hx
    |   |   |-- haxe\std\js\html\MediaSourceReadyState.hx
    |   |   |-- haxe\std\js\html\MediaStream.hx
    |   |   |-- haxe\std\js\html\MediaStreamConstraints.hx
    |   |   |-- haxe\std\js\html\MediaStreamError.hx
    |   |   |-- haxe\std\js\html\MediaStreamEvent.hx
    |   |   |-- haxe\std\js\html\MediaStreamEventInit.hx
    |   |   |-- haxe\std\js\html\MediaStreamTrack.hx
    |   |   |-- haxe\std\js\html\MediaStreamTrackEvent.hx
    |   |   |-- haxe\std\js\html\MediaStreamTrackEventInit.hx
    |   |   |-- haxe\std\js\html\MediaStreamTrackState.hx
    |   |   |-- haxe\std\js\html\MediaTrackConstraintSet.hx
    |   |   |-- haxe\std\js\html\MediaTrackConstraints.hx
    |   |   |-- haxe\std\js\html\MediaTrackSettings.hx
    |   |   |-- haxe\std\js\html\MediaTrackSupportedConstraints.hx
    |   |   |-- haxe\std\js\html\MenuElement.hx
    |   |   |-- haxe\std\js\html\MenuItemElement.hx
    |   |   |-- haxe\std\js\html\MessageChannel.hx
    |   |   |-- haxe\std\js\html\MessageEvent.hx
    |   |   |-- haxe\std\js\html\MessageEventInit.hx
    |   |   |-- haxe\std\js\html\MessagePort.hx
    |   |   |-- haxe\std\js\html\MetaElement.hx
    |   |   |-- haxe\std\js\html\MeterElement.hx
    |   |   |-- haxe\std\js\html\MimeType.hx
    |   |   |-- haxe\std\js\html\MimeTypeArray.hx
    |   |   |-- haxe\std\js\html\ModElement.hx
    |   |   |-- haxe\std\js\html\MouseEvent.hx
    |   |   |-- haxe\std\js\html\MouseEventInit.hx
    |   |   |-- haxe\std\js\html\MouseScrollEvent.hx
    |   |   |-- haxe\std\js\html\MutationEvent.hx
    |   |   |-- haxe\std\js\html\MutationObserver.hx
    |   |   |-- haxe\std\js\html\MutationObserverInit.hx
    |   |   |-- haxe\std\js\html\MutationRecord.hx
    |   |   |-- haxe\std\js\html\NamedNodeMap.hx
    |   |   |-- haxe\std\js\html\NavigationType.hx
    |   |   |-- haxe\std\js\html\Navigator.hx
    |   |   |-- haxe\std\js\html\Node.hx
    |   |   |-- haxe\std\js\html\NodeFilter.hx
    |   |   |-- haxe\std\js\html\NodeIterator.hx
    |   |   |-- haxe\std\js\html\NodeList.hx
    |   |   |-- haxe\std\js\html\Notification.hx
    |   |   |-- haxe\std\js\html\NotificationDirection.hx
    |   |   |-- haxe\std\js\html\NotificationEvent.hx
    |   |   |-- haxe\std\js\html\NotificationEventInit.hx
    |   |   |-- haxe\std\js\html\NotificationOptions.hx
    |   |   |-- haxe\std\js\html\NotificationPermission.hx
    |   |   |-- haxe\std\js\html\OListElement.hx
    |   |   |-- haxe\std\js\html\ObjectElement.hx
    |   |   |-- haxe\std\js\html\ObserverCallback.hx
    |   |   |-- haxe\std\js\html\OfflineAudioCompletionEventInit.hx
    |   |   |-- haxe\std\js\html\OptGroupElement.hx
    |   |   |-- haxe\std\js\html\Option.hx
    |   |   |-- haxe\std\js\html\OptionElement.hx
    |   |   |-- haxe\std\js\html\OptionalEffectTiming.hx
    |   |   |-- haxe\std\js\html\OrientationLockType.hx
    |   |   |-- haxe\std\js\html\OrientationType.hx
    |   |   |-- haxe\std\js\html\OutputElement.hx
    |   |   |-- haxe\std\js\html\PageTransitionEvent.hx
    |   |   |-- haxe\std\js\html\PageTransitionEventInit.hx
    |   |   |-- haxe\std\js\html\PaintRequest.hx
    |   |   |-- haxe\std\js\html\PaintRequestList.hx
    |   |   |-- haxe\std\js\html\PaintWorkletGlobalScope.hx
    |   |   |-- haxe\std\js\html\ParagraphElement.hx
    |   |   |-- haxe\std\js\html\ParamElement.hx
    |   |   |-- haxe\std\js\html\Path2D.hx
    |   |   |-- haxe\std\js\html\Performance.hx
    |   |   |-- haxe\std\js\html\PerformanceEntry.hx
    |   |   |-- haxe\std\js\html\PerformanceEntryFilterOptions.hx
    |   |   |-- haxe\std\js\html\PerformanceMark.hx
    |   |   |-- haxe\std\js\html\PerformanceMeasure.hx
    |   |   |-- haxe\std\js\html\PerformanceNavigation.hx
    |   |   |-- haxe\std\js\html\PerformanceNavigationTiming.hx
    |   |   |-- haxe\std\js\html\PerformanceObserver.hx
    |   |   |-- haxe\std\js\html\PerformanceObserverEntryList.hx
    |   |   |-- haxe\std\js\html\PerformanceObserverInit.hx
    |   |   |-- haxe\std\js\html\PerformanceResourceTiming.hx
    |   |   |-- haxe\std\js\html\PerformanceServerTiming.hx
    |   |   |-- haxe\std\js\html\PerformanceTiming.hx
    |   |   |-- haxe\std\js\html\PermissionState.hx
    |   |   |-- haxe\std\js\html\PermissionStatus.hx
    |   |   |-- haxe\std\js\html\Permissions.hx
    |   |   |-- haxe\std\js\html\PictureElement.hx
    |   |   |-- haxe\std\js\html\PlaybackDirection.hx
    |   |   |-- haxe\std\js\html\Plugin.hx
    |   |   |-- haxe\std\js\html\PluginArray.hx
    |   |   |-- haxe\std\js\html\PointerEvent.hx
    |   |   |-- haxe\std\js\html\PointerEventInit.hx
    |   |   |-- haxe\std\js\html\PopStateEvent.hx
    |   |   |-- haxe\std\js\html\PopStateEventInit.hx
    |   |   |-- haxe\std\js\html\PopupBlockedEvent.hx
    |   |   |-- haxe\std\js\html\PopupBlockedEventInit.hx
    |   |   |-- haxe\std\js\html\Position.hx
    |   |   |-- haxe\std\js\html\PositionAlignSetting.hx
    |   |   |-- haxe\std\js\html\PositionError.hx
    |   |   |-- haxe\std\js\html\PositionOptions.hx
    |   |   |-- haxe\std\js\html\PreElement.hx
    |   |   |-- haxe\std\js\html\ProcessingInstruction.hx
    |   |   |-- haxe\std\js\html\ProgressElement.hx
    |   |   |-- haxe\std\js\html\ProgressEvent.hx
    |   |   |-- haxe\std\js\html\ProgressEventInit.hx
    |   |   |-- haxe\std\js\html\PromiseNativeHandler.hx
    |   |   |-- haxe\std\js\html\PropertyNodeList.hx
    |   |   |-- haxe\std\js\html\QuoteElement.hx
    |   |   |-- haxe\std\js\html\RadioNodeList.hx
    |   |   |-- haxe\std\js\html\Range.hx
    |   |   |-- haxe\std\js\html\RecordingState.hx
    |   |   |-- haxe\std\js\html\ReferrerPolicy.hx
    |   |   |-- haxe\std\js\html\RegistrationOptions.hx
    |   |   |-- haxe\std\js\html\Request.hx
    |   |   |-- haxe\std\js\html\RequestCache.hx
    |   |   |-- haxe\std\js\html\RequestCredentials.hx
    |   |   |-- haxe\std\js\html\RequestDestination.hx
    |   |   |-- haxe\std\js\html\RequestInit.hx
    |   |   |-- haxe\std\js\html\RequestMode.hx
    |   |   |-- haxe\std\js\html\RequestRedirect.hx
    |   |   |-- haxe\std\js\html\Response.hx
    |   |   |-- haxe\std\js\html\ResponseInit.hx
    |   |   |-- haxe\std\js\html\ResponseType.hx
    |   |   |-- haxe\std\js\html\Screen.hx
    |   |   |-- haxe\std\js\html\ScreenOrientation.hx
    |   |   |-- haxe\std\js\html\ScriptElement.hx
    |   |   |-- haxe\std\js\html\ScrollAreaEvent.hx
    |   |   |-- haxe\std\js\html\ScrollBehavior.hx
    |   |   |-- haxe\std\js\html\ScrollIntoViewOptions.hx
    |   |   |-- haxe\std\js\html\ScrollLogicalPosition.hx
    |   |   |-- haxe\std\js\html\ScrollOptions.hx
    |   |   |-- haxe\std\js\html\ScrollRestoration.hx
    |   |   |-- haxe\std\js\html\ScrollSetting.hx
    |   |   |-- haxe\std\js\html\ScrollToOptions.hx
    |   |   |-- haxe\std\js\html\SecurityPolicyViolationEvent.hx
    |   |   |-- haxe\std\js\html\SecurityPolicyViolationEventDisposition.hx
    |   |   |-- haxe\std\js\html\SecurityPolicyViolationEventInit.hx
    |   |   |-- haxe\std\js\html\SelectElement.hx
    |   |   |-- haxe\std\js\html\Selection.hx
    |   |   |-- haxe\std\js\html\SelectionMode.hx
    |   |   |-- haxe\std\js\html\ServiceWorker.hx
    |   |   |-- haxe\std\js\html\ServiceWorkerContainer.hx
    |   |   |-- haxe\std\js\html\ServiceWorkerGlobalScope.hx
    |   |   |-- haxe\std\js\html\ServiceWorkerRegistration.hx
    |   |   |-- haxe\std\js\html\ServiceWorkerState.hx
    |   |   |-- haxe\std\js\html\ServiceWorkerUpdateViaCache.hx
    |   |   |-- haxe\std\js\html\ShadowRoot.hx
    |   |   |-- haxe\std\js\html\ShadowRootInit.hx
    |   |   |-- haxe\std\js\html\ShadowRootMode.hx
    |   |   |-- haxe\std\js\html\SharedWorker.hx
    |   |   |-- haxe\std\js\html\SharedWorkerGlobalScope.hx
    |   |   |-- haxe\std\js\html\SlotElement.hx
    |   |   |-- haxe\std\js\html\SourceBuffer.hx
    |   |   |-- haxe\std\js\html\SourceBufferAppendMode.hx
    |   |   |-- haxe\std\js\html\SourceBufferList.hx
    |   |   |-- haxe\std\js\html\SourceElement.hx
    |   |   |-- haxe\std\js\html\SpanElement.hx
    |   |   |-- haxe\std\js\html\SpeechGrammar.hx
    |   |   |-- haxe\std\js\html\SpeechGrammarList.hx
    |   |   |-- haxe\std\js\html\SpeechRecognition.hx
    |   |   |-- haxe\std\js\html\SpeechRecognitionAlternative.hx
    |   |   |-- haxe\std\js\html\SpeechRecognitionError.hx
    |   |   |-- haxe\std\js\html\SpeechRecognitionErrorCode.hx
    |   |   |-- haxe\std\js\html\SpeechRecognitionErrorInit.hx
    |   |   |-- haxe\std\js\html\SpeechRecognitionEvent.hx
    |   |   |-- haxe\std\js\html\SpeechRecognitionEventInit.hx
    |   |   |-- haxe\std\js\html\SpeechRecognitionResult.hx
    |   |   |-- haxe\std\js\html\SpeechRecognitionResultList.hx
    |   |   |-- haxe\std\js\html\SpeechSynthesis.hx
    |   |   |-- haxe\std\js\html\SpeechSynthesisErrorCode.hx
    |   |   |-- haxe\std\js\html\SpeechSynthesisErrorEvent.hx
    |   |   |-- haxe\std\js\html\SpeechSynthesisErrorEventInit.hx
    |   |   |-- haxe\std\js\html\SpeechSynthesisEvent.hx
    |   |   |-- haxe\std\js\html\SpeechSynthesisEventInit.hx
    |   |   |-- haxe\std\js\html\SpeechSynthesisUtterance.hx
    |   |   |-- haxe\std\js\html\SpeechSynthesisVoice.hx
    |   |   |-- haxe\std\js\html\Storage.hx
    |   |   |-- haxe\std\js\html\StorageEstimate.hx
    |   |   |-- haxe\std\js\html\StorageEvent.hx
    |   |   |-- haxe\std\js\html\StorageEventInit.hx
    |   |   |-- haxe\std\js\html\StorageManager.hx
    |   |   |-- haxe\std\js\html\StorageType.hx
    |   |   |-- haxe\std\js\html\StyleElement.hx
    |   |   |-- haxe\std\js\html\StyleSheet.hx
    |   |   |-- haxe\std\js\html\StyleSheetList.hx
    |   |   |-- haxe\std\js\html\SubtleCrypto.hx
    |   |   |-- haxe\std\js\html\SupportedType.hx
    |   |   |-- haxe\std\js\html\TableCaptionElement.hx
    |   |   |-- haxe\std\js\html\TableCellElement.hx
    |   |   |-- haxe\std\js\html\TableColElement.hx
    |   |   |-- haxe\std\js\html\TableElement.hx
    |   |   |-- haxe\std\js\html\TableRowElement.hx
    |   |   |-- haxe\std\js\html\TableSectionElement.hx
    |   |   |-- haxe\std\js\html\TemplateElement.hx
    |   |   |-- haxe\std\js\html\Text.hx
    |   |   |-- haxe\std\js\html\TextAreaElement.hx
    |   |   |-- haxe\std\js\html\TextDecodeOptions.hx
    |   |   |-- haxe\std\js\html\TextDecoder.hx
    |   |   |-- haxe\std\js\html\TextDecoderOptions.hx
    |   |   |-- haxe\std\js\html\TextEncoder.hx
    |   |   |-- haxe\std\js\html\TextMetrics.hx
    |   |   |-- haxe\std\js\html\TextTrack.hx
    |   |   |-- haxe\std\js\html\TextTrackCue.hx
    |   |   |-- haxe\std\js\html\TextTrackCueList.hx
    |   |   |-- haxe\std\js\html\TextTrackKind.hx
    |   |   |-- haxe\std\js\html\TextTrackList.hx
    |   |   |-- haxe\std\js\html\TextTrackMode.hx
    |   |   |-- haxe\std\js\html\TimeElement.hx
    |   |   |-- haxe\std\js\html\TimeEvent.hx
    |   |   |-- haxe\std\js\html\TimeRanges.hx
    |   |   |-- haxe\std\js\html\TitleElement.hx
    |   |   |-- haxe\std\js\html\Touch.hx
    |   |   |-- haxe\std\js\html\TouchEvent.hx
    |   |   |-- haxe\std\js\html\TouchEventInit.hx
    |   |   |-- haxe\std\js\html\TouchInit.hx
    |   |   |-- haxe\std\js\html\TouchList.hx
    |   |   |-- haxe\std\js\html\TrackElement.hx
    |   |   |-- haxe\std\js\html\TrackEvent.hx
    |   |   |-- haxe\std\js\html\TrackEventInit.hx
    |   |   |-- haxe\std\js\html\TransitionEvent.hx
    |   |   |-- haxe\std\js\html\TransitionEventInit.hx
    |   |   |-- haxe\std\js\html\TreeWalker.hx
    |   |   |-- haxe\std\js\html\UIEvent.hx
    |   |   |-- haxe\std\js\html\UIEventInit.hx
    |   |   |-- haxe\std\js\html\UListElement.hx
    |   |   |-- haxe\std\js\html\URL.hx
    |   |   |-- haxe\std\js\html\URLSearchParams.hx
    |   |   |-- haxe\std\js\html\URLSearchParamsIterator.hx
    |   |   |-- haxe\std\js\html\Uint16Array.hx
    |   |   |-- haxe\std\js\html\Uint32Array.hx
    |   |   |-- haxe\std\js\html\Uint8Array.hx
    |   |   |-- haxe\std\js\html\Uint8ClampedArray.hx
    |   |   |-- haxe\std\js\html\UnknownElement.hx
    |   |   |-- haxe\std\js\html\VTTCue.hx
    |   |   |-- haxe\std\js\html\VTTRegion.hx
    |   |   |-- haxe\std\js\html\ValidityState.hx
    |   |   |-- haxe\std\js\html\VideoElement.hx
    |   |   |-- haxe\std\js\html\VideoPlaybackQuality.hx
    |   |   |-- haxe\std\js\html\VideoStreamTrack.hx
    |   |   |-- haxe\std\js\html\VideoTrack.hx
    |   |   |-- haxe\std\js\html\VideoTrackList.hx
    |   |   |-- haxe\std\js\html\VisibilityState.hx
    |   |   |-- haxe\std\js\html\VisualViewport.hx
    |   |   |-- haxe\std\js\html\WebSocket.hx
    |   |   |-- haxe\std\js\html\WheelEvent.hx
    |   |   |-- haxe\std\js\html\WheelEventInit.hx
    |   |   |-- haxe\std\js\html\Window.hx
    |   |   |-- haxe\std\js\html\WindowClient.hx
    |   |   |-- haxe\std\js\html\Worker.hx
    |   |   |-- haxe\std\js\html\WorkerDebuggerGlobalScope.hx
    |   |   |-- haxe\std\js\html\WorkerGlobalScope.hx
    |   |   |-- haxe\std\js\html\WorkerLocation.hx
    |   |   |-- haxe\std\js\html\WorkerNavigator.hx
    |   |   |-- haxe\std\js\html\WorkerOptions.hx
    |   |   |-- haxe\std\js\html\WorkletGlobalScope.hx
    |   |   |-- haxe\std\js\html\XMLDocument.hx
    |   |   |-- haxe\std\js\html\XMLHttpRequest.hx
    |   |   |-- haxe\std\js\html\XMLHttpRequestEventTarget.hx
    |   |   |-- haxe\std\js\html\XMLHttpRequestResponseType.hx
    |   |   |-- haxe\std\js\html\XMLHttpRequestUpload.hx
    |   |   |-- haxe\std\js\html\XMLSerializer.hx
    |   |   |-- haxe\std\js\html\XPathEvaluator.hx
    |   |   |-- haxe\std\js\html\XPathExpression.hx
    |   |   |-- haxe\std\js\html\XPathNSResolver.hx
    |   |   |-- haxe\std\js\html\XPathResult.hx
    |   |   |-- haxe\std\js\html\XSLTProcessor.hx
    |   |   |-- js.html.audio
    |   |   |   |-- haxe\std\js\html\audio\AnalyserNode.hx
    |   |   |   |-- haxe\std\js\html\audio\AnalyserOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioBuffer.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioBufferOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioBufferSourceNode.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioBufferSourceOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioContext.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioContextOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioContextState.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioDestinationNode.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioListener.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioNode.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioNodeOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioParam.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioProcessingEvent.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioScheduledSourceNode.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioWorkletGlobalScope.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioWorkletNodeOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\AudioWorkletProcessor.hx
    |   |   |   |-- haxe\std\js\html\audio\BaseAudioContext.hx
    |   |   |   |-- haxe\std\js\html\audio\BiquadFilterNode.hx
    |   |   |   |-- haxe\std\js\html\audio\BiquadFilterOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\BiquadFilterType.hx
    |   |   |   |-- haxe\std\js\html\audio\ChannelCountMode.hx
    |   |   |   |-- haxe\std\js\html\audio\ChannelInterpretation.hx
    |   |   |   |-- haxe\std\js\html\audio\ChannelMergerNode.hx
    |   |   |   |-- haxe\std\js\html\audio\ChannelMergerOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\ChannelSplitterNode.hx
    |   |   |   |-- haxe\std\js\html\audio\ChannelSplitterOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\ConstantSourceNode.hx
    |   |   |   |-- haxe\std\js\html\audio\ConstantSourceOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\ConvolverNode.hx
    |   |   |   |-- haxe\std\js\html\audio\ConvolverOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\DelayNode.hx
    |   |   |   |-- haxe\std\js\html\audio\DelayOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\DistanceModelType.hx
    |   |   |   |-- haxe\std\js\html\audio\DynamicsCompressorNode.hx
    |   |   |   |-- haxe\std\js\html\audio\DynamicsCompressorOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\GainNode.hx
    |   |   |   |-- haxe\std\js\html\audio\GainOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\IIRFilterNode.hx
    |   |   |   |-- haxe\std\js\html\audio\IIRFilterOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\MediaElementAudioSourceNode.hx
    |   |   |   |-- haxe\std\js\html\audio\MediaElementAudioSourceOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\MediaStreamAudioDestinationNode.hx
    |   |   |   |-- haxe\std\js\html\audio\MediaStreamAudioSourceNode.hx
    |   |   |   |-- haxe\std\js\html\audio\MediaStreamAudioSourceOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\OfflineAudioCompletionEvent.hx
    |   |   |   |-- haxe\std\js\html\audio\OfflineAudioContext.hx
    |   |   |   |-- haxe\std\js\html\audio\OfflineAudioContextOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\OscillatorNode.hx
    |   |   |   |-- haxe\std\js\html\audio\OscillatorOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\OscillatorType.hx
    |   |   |   |-- haxe\std\js\html\audio\OverSampleType.hx
    |   |   |   |-- haxe\std\js\html\audio\PannerNode.hx
    |   |   |   |-- haxe\std\js\html\audio\PannerOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\PanningModelType.hx
    |   |   |   |-- haxe\std\js\html\audio\PeriodicWave.hx
    |   |   |   |-- haxe\std\js\html\audio\PeriodicWaveConstraints.hx
    |   |   |   |-- haxe\std\js\html\audio\PeriodicWaveOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\ScriptProcessorNode.hx
    |   |   |   |-- haxe\std\js\html\audio\StereoPannerNode.hx
    |   |   |   |-- haxe\std\js\html\audio\StereoPannerOptions.hx
    |   |   |   |-- haxe\std\js\html\audio\WaveShaperNode.hx
    |   |   |   `-- haxe\std\js\html\audio\WaveShaperOptions.hx
    |   |   |-- js.html.eme
    |   |   |   |-- haxe\std\js\html\eme\MediaEncryptedEvent.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeyError.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeyMessageEvent.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeyMessageEventInit.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeyMessageType.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeyNeededEventInit.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeySession.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeySessionType.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeyStatusMap.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeySystemAccess.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeySystemConfiguration.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeySystemMediaCapability.hx
    |   |   |   |-- haxe\std\js\html\eme\MediaKeys.hx
    |   |   |   `-- haxe\std\js\html\eme\MediaKeysRequirement.hx
    |   |   |-- js.html.idb
    |   |   |   |-- haxe\std\js\html\idb\Cursor.hx
    |   |   |   |-- haxe\std\js\html\idb\CursorDirection.hx
    |   |   |   |-- haxe\std\js\html\idb\CursorWithValue.hx
    |   |   |   |-- haxe\std\js\html\idb\Database.hx
    |   |   |   |-- haxe\std\js\html\idb\Factory.hx
    |   |   |   |-- haxe\std\js\html\idb\FileHandle.hx
    |   |   |   |-- haxe\std\js\html\idb\FileMetadataParameters.hx
    |   |   |   |-- haxe\std\js\html\idb\FileRequest.hx
    |   |   |   |-- haxe\std\js\html\idb\Index.hx
    |   |   |   |-- haxe\std\js\html\idb\IndexParameters.hx
    |   |   |   |-- haxe\std\js\html\idb\KeyRange.hx
    |   |   |   |-- haxe\std\js\html\idb\MutableFile.hx
    |   |   |   |-- haxe\std\js\html\idb\ObjectStore.hx
    |   |   |   |-- haxe\std\js\html\idb\ObjectStoreParameters.hx
    |   |   |   |-- haxe\std\js\html\idb\OpenDBOptions.hx
    |   |   |   |-- haxe\std\js\html\idb\OpenDBRequest.hx
    |   |   |   |-- haxe\std\js\html\idb\Request.hx
    |   |   |   |-- haxe\std\js\html\idb\RequestReadyState.hx
    |   |   |   |-- haxe\std\js\html\idb\Transaction.hx
    |   |   |   |-- haxe\std\js\html\idb\TransactionMode.hx
    |   |   |   |-- haxe\std\js\html\idb\VersionChangeEvent.hx
    |   |   |   `-- haxe\std\js\html\idb\VersionChangeEventInit.hx
    |   |   |-- js.html.midi
    |   |   |   |-- haxe\std\js\html\midi\MIDIAccess.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIConnectionEvent.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIConnectionEventInit.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIInput.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIInputMap.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIMessageEvent.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIMessageEventInit.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIOptions.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIOutput.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIOutputMap.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIPort.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIPortConnectionState.hx
    |   |   |   |-- haxe\std\js\html\midi\MIDIPortDeviceState.hx
    |   |   |   `-- haxe\std\js\html\midi\MIDIPortType.hx
    |   |   |-- js.html.push
    |   |   |   |-- haxe\std\js\html\push\PushEncryptionKeyName.hx
    |   |   |   |-- haxe\std\js\html\push\PushEvent.hx
    |   |   |   |-- haxe\std\js\html\push\PushEventInit.hx
    |   |   |   |-- haxe\std\js\html\push\PushManager.hx
    |   |   |   |-- haxe\std\js\html\push\PushMessageData.hx
    |   |   |   |-- haxe\std\js\html\push\PushPermissionState.hx
    |   |   |   |-- haxe\std\js\html\push\PushSubscription.hx
    |   |   |   |-- haxe\std\js\html\push\PushSubscriptionInit.hx
    |   |   |   |-- haxe\std\js\html\push\PushSubscriptionJSON.hx
    |   |   |   |-- haxe\std\js\html\push\PushSubscriptionKeys.hx
    |   |   |   |-- haxe\std\js\html\push\PushSubscriptionOptions.hx
    |   |   |   `-- haxe\std\js\html\push\PushSubscriptionOptionsInit.hx
    |   |   |-- js.html.rtc
    |   |   |   |-- haxe\std\js\html\rtc\AnswerOptions.hx
    |   |   |   |-- haxe\std\js\html\rtc\BundlePolicy.hx
    |   |   |   |-- haxe\std\js\html\rtc\Certificate.hx
    |   |   |   |-- haxe\std\js\html\rtc\Configuration.hx
    |   |   |   |-- haxe\std\js\html\rtc\DTMFSender.hx
    |   |   |   |-- haxe\std\js\html\rtc\DTMFToneChangeEvent.hx
    |   |   |   |-- haxe\std\js\html\rtc\DTMFToneChangeEventInit.hx
    |   |   |   |-- haxe\std\js\html\rtc\DataChannel.hx
    |   |   |   |-- haxe\std\js\html\rtc\DataChannelEvent.hx
    |   |   |   |-- haxe\std\js\html\rtc\DataChannelEventInit.hx
    |   |   |   |-- haxe\std\js\html\rtc\DataChannelInit.hx
    |   |   |   |-- haxe\std\js\html\rtc\DataChannelState.hx
    |   |   |   |-- haxe\std\js\html\rtc\DataChannelType.hx
    |   |   |   |-- haxe\std\js\html\rtc\DegradationPreference.hx
    |   |   |   |-- haxe\std\js\html\rtc\FecParameters.hx
    |   |   |   |-- haxe\std\js\html\rtc\IceCandidate.hx
    |   |   |   |-- haxe\std\js\html\rtc\IceCandidateInit.hx
    |   |   |   |-- haxe\std\js\html\rtc\IceConnectionState.hx
    |   |   |   |-- haxe\std\js\html\rtc\IceCredentialType.hx
    |   |   |   |-- haxe\std\js\html\rtc\IceGatheringState.hx
    |   |   |   |-- haxe\std\js\html\rtc\IceServer.hx
    |   |   |   |-- haxe\std\js\html\rtc\IceTransportPolicy.hx
    |   |   |   |-- haxe\std\js\html\rtc\IdentityAssertion.hx
    |   |   |   |-- haxe\std\js\html\rtc\IdentityAssertionResult.hx
    |   |   |   |-- haxe\std\js\html\rtc\IdentityProvider.hx
    |   |   |   |-- haxe\std\js\html\rtc\IdentityProviderDetails.hx
    |   |   |   |-- haxe\std\js\html\rtc\IdentityProviderOptions.hx
    |   |   |   |-- haxe\std\js\html\rtc\IdentityProviderRegistrar.hx
    |   |   |   |-- haxe\std\js\html\rtc\IdentityValidationResult.hx
    |   |   |   |-- haxe\std\js\html\rtc\OfferAnswerOptions.hx
    |   |   |   |-- haxe\std\js\html\rtc\OfferOptions.hx
    |   |   |   |-- haxe\std\js\html\rtc\PeerConnection.hx
    |   |   |   |-- haxe\std\js\html\rtc\PeerConnectionIceEvent.hx
    |   |   |   |-- haxe\std\js\html\rtc\PeerConnectionIceEventInit.hx
    |   |   |   |-- haxe\std\js\html\rtc\PriorityType.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtcpParameters.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpCodecParameters.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpContributingSource.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpEncodingParameters.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpHeaderExtensionParameters.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpParameters.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpReceiver.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpSender.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpSynchronizationSource.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpTransceiver.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpTransceiverDirection.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtpTransceiverInit.hx
    |   |   |   |-- haxe\std\js\html\rtc\RtxParameters.hx
    |   |   |   |-- haxe\std\js\html\rtc\SdpType.hx
    |   |   |   |-- haxe\std\js\html\rtc\SessionDescription.hx
    |   |   |   |-- haxe\std\js\html\rtc\SessionDescriptionInit.hx
    |   |   |   |-- haxe\std\js\html\rtc\SignalingState.hx
    |   |   |   |-- haxe\std\js\html\rtc\StatsReport.hx
    |   |   |   |-- haxe\std\js\html\rtc\TrackEvent.hx
    |   |   |   `-- haxe\std\js\html\rtc\TrackEventInit.hx
    |   |   |-- js.html.svg
    |   |   |   |-- haxe\std\js\html\svg\AElement.hx
    |   |   |   |-- haxe\std\js\html\svg\Angle.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimateElement.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimateMotionElement.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimateTransformElement.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedAngle.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedBoolean.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedEnumeration.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedInteger.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedLength.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedLengthList.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedNumber.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedNumberList.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedPreserveAspectRatio.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedRect.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedString.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimatedTransformList.hx
    |   |   |   |-- haxe\std\js\html\svg\AnimationElement.hx
    |   |   |   |-- haxe\std\js\html\svg\BoundingBoxOptions.hx
    |   |   |   |-- haxe\std\js\html\svg\CircleElement.hx
    |   |   |   |-- haxe\std\js\html\svg\ClipPathElement.hx
    |   |   |   |-- haxe\std\js\html\svg\ComponentTransferFunctionElement.hx
    |   |   |   |-- haxe\std\js\html\svg\DefsElement.hx
    |   |   |   |-- haxe\std\js\html\svg\DescElement.hx
    |   |   |   |-- haxe\std\js\html\svg\Element.hx
    |   |   |   |-- haxe\std\js\html\svg\EllipseElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEBlendElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEColorMatrixElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEComponentTransferElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FECompositeElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEConvolveMatrixElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEDiffuseLightingElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEDisplacementMapElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEDistantLightElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEDropShadowElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEFloodElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEFuncAElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEFuncBElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEFuncGElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEFuncRElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEGaussianBlurElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEImageElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEMergeElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEMergeNodeElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEMorphologyElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEOffsetElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FEPointLightElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FESpecularLightingElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FESpotLightElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FETileElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FETurbulenceElement.hx
    |   |   |   |-- haxe\std\js\html\svg\FilterElement.hx
    |   |   |   |-- haxe\std\js\html\svg\ForeignObjectElement.hx
    |   |   |   |-- haxe\std\js\html\svg\GElement.hx
    |   |   |   |-- haxe\std\js\html\svg\GeometryElement.hx
    |   |   |   |-- haxe\std\js\html\svg\GradientElement.hx
    |   |   |   |-- haxe\std\js\html\svg\GraphicsElement.hx
    |   |   |   |-- haxe\std\js\html\svg\ImageElement.hx
    |   |   |   |-- haxe\std\js\html\svg\Length.hx
    |   |   |   |-- haxe\std\js\html\svg\LengthList.hx
    |   |   |   |-- haxe\std\js\html\svg\LineElement.hx
    |   |   |   |-- haxe\std\js\html\svg\LinearGradientElement.hx
    |   |   |   |-- haxe\std\js\html\svg\MPathElement.hx
    |   |   |   |-- haxe\std\js\html\svg\MarkerElement.hx
    |   |   |   |-- haxe\std\js\html\svg\MaskElement.hx
    |   |   |   |-- haxe\std\js\html\svg\Matrix.hx
    |   |   |   |-- haxe\std\js\html\svg\MetadataElement.hx
    |   |   |   |-- haxe\std\js\html\svg\Number.hx
    |   |   |   |-- haxe\std\js\html\svg\NumberList.hx
    |   |   |   |-- haxe\std\js\html\svg\PathElement.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSeg.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegArcAbs.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegArcRel.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegClosePath.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegCurvetoCubicAbs.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegCurvetoCubicRel.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegCurvetoCubicSmoothAbs.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegCurvetoCubicSmoothRel.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegCurvetoQuadraticAbs.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegCurvetoQuadraticRel.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegCurvetoQuadraticSmoothAbs.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegCurvetoQuadraticSmoothRel.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegLinetoAbs.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegLinetoHorizontalAbs.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegLinetoHorizontalRel.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegLinetoRel.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegLinetoVerticalAbs.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegLinetoVerticalRel.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegList.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegMovetoAbs.hx
    |   |   |   |-- haxe\std\js\html\svg\PathSegMovetoRel.hx
    |   |   |   |-- haxe\std\js\html\svg\PatternElement.hx
    |   |   |   |-- haxe\std\js\html\svg\Point.hx
    |   |   |   |-- haxe\std\js\html\svg\PointList.hx
    |   |   |   |-- haxe\std\js\html\svg\PolygonElement.hx
    |   |   |   |-- haxe\std\js\html\svg\PolylineElement.hx
    |   |   |   |-- haxe\std\js\html\svg\PreserveAspectRatio.hx
    |   |   |   |-- haxe\std\js\html\svg\RadialGradientElement.hx
    |   |   |   |-- haxe\std\js\html\svg\Rect.hx
    |   |   |   |-- haxe\std\js\html\svg\RectElement.hx
    |   |   |   |-- haxe\std\js\html\svg\SVGElement.hx
    |   |   |   |-- haxe\std\js\html\svg\ScriptElement.hx
    |   |   |   |-- haxe\std\js\html\svg\SetElement.hx
    |   |   |   |-- haxe\std\js\html\svg\StopElement.hx
    |   |   |   |-- haxe\std\js\html\svg\StringList.hx
    |   |   |   |-- haxe\std\js\html\svg\StyleElement.hx
    |   |   |   |-- haxe\std\js\html\svg\SwitchElement.hx
    |   |   |   |-- haxe\std\js\html\svg\SymbolElement.hx
    |   |   |   |-- haxe\std\js\html\svg\TSpanElement.hx
    |   |   |   |-- haxe\std\js\html\svg\TextContentElement.hx
    |   |   |   |-- haxe\std\js\html\svg\TextElement.hx
    |   |   |   |-- haxe\std\js\html\svg\TextPathElement.hx
    |   |   |   |-- haxe\std\js\html\svg\TextPositioningElement.hx
    |   |   |   |-- haxe\std\js\html\svg\TitleElement.hx
    |   |   |   |-- haxe\std\js\html\svg\Transform.hx
    |   |   |   |-- haxe\std\js\html\svg\TransformList.hx
    |   |   |   |-- haxe\std\js\html\svg\UnitTypes.hx
    |   |   |   |-- haxe\std\js\html\svg\UseElement.hx
    |   |   |   |-- haxe\std\js\html\svg\ViewElement.hx
    |   |   |   `-- haxe\std\js\html\svg\ZoomAndPan.hx
    |   |   `-- js.html.webgl
    |   |       |-- haxe\std\js\html\webgl\ActiveInfo.hx
    |   |       |-- haxe\std\js\html\webgl\Buffer.hx
    |   |       |-- haxe\std\js\html\webgl\ContextAttributes.hx
    |   |       |-- haxe\std\js\html\webgl\ContextEvent.hx
    |   |       |-- haxe\std\js\html\webgl\ContextEventInit.hx
    |   |       |-- haxe\std\js\html\webgl\Extension.hx
    |   |       |-- haxe\std\js\html\webgl\Framebuffer.hx
    |   |       |-- haxe\std\js\html\webgl\GL.hx
    |   |       |-- haxe\std\js\html\webgl\GL2.hx
    |   |       |-- haxe\std\js\html\webgl\PowerPreference.hx
    |   |       |-- haxe\std\js\html\webgl\Program.hx
    |   |       |-- haxe\std\js\html\webgl\Query.hx
    |   |       |-- haxe\std\js\html\webgl\Renderbuffer.hx
    |   |       |-- haxe\std\js\html\webgl\RenderingContext.hx
    |   |       |-- haxe\std\js\html\webgl\Sampler.hx
    |   |       |-- haxe\std\js\html\webgl\Shader.hx
    |   |       |-- haxe\std\js\html\webgl\ShaderPrecisionFormat.hx
    |   |       |-- haxe\std\js\html\webgl\Sync.hx
    |   |       |-- haxe\std\js\html\webgl\Texture.hx
    |   |       |-- haxe\std\js\html\webgl\TransformFeedback.hx
    |   |       |-- haxe\std\js\html\webgl\UniformLocation.hx
    |   |       |-- haxe\std\js\html\webgl\VertexArrayObject.hx
    |   |       |-- haxe\std\js\html\webgl\WebGL2RenderingContext.hx
    |   |       `-- js.html.webgl.extension
    |   |           |-- haxe\std\js\html\webgl\extension\ANGLEInstancedArrays.hx
    |   |           |-- haxe\std\js\html\webgl\extension\EXTBlendMinmax.hx
    |   |           |-- haxe\std\js\html\webgl\extension\EXTColorBufferFloat.hx
    |   |           |-- haxe\std\js\html\webgl\extension\EXTColorBufferHalfFloat.hx
    |   |           |-- haxe\std\js\html\webgl\extension\EXTDisjointTimerQuery.hx
    |   |           |-- haxe\std\js\html\webgl\extension\EXTFragDepth.hx
    |   |           |-- haxe\std\js\html\webgl\extension\EXTShaderTextureLod.hx
    |   |           |-- haxe\std\js\html\webgl\extension\EXTSrgb.hx
    |   |           |-- haxe\std\js\html\webgl\extension\EXTTextureFilterAnisotropic.hx
    |   |           |-- haxe\std\js\html\webgl\extension\OESElementIndexUint.hx
    |   |           |-- haxe\std\js\html\webgl\extension\OESStandardDerivatives.hx
    |   |           |-- haxe\std\js\html\webgl\extension\OESTextureFloat.hx
    |   |           |-- haxe\std\js\html\webgl\extension\OESTextureFloatLinear.hx
    |   |           |-- haxe\std\js\html\webgl\extension\OESTextureHalfFloat.hx
    |   |           |-- haxe\std\js\html\webgl\extension\OESTextureHalfFloatLinear.hx
    |   |           |-- haxe\std\js\html\webgl\extension\OESVertexArrayObject.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLColorBufferFloat.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLCompressedTextureAstc.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLCompressedTextureAtc.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLCompressedTextureEtc.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLCompressedTextureEtc1.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLCompressedTexturePvrtc.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLCompressedTextureS3tc.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLCompressedTextureS3tcSrgb.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLDebugRendererInfo.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLDebugShaders.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLDepthTexture.hx
    |   |           |-- haxe\std\js\html\webgl\extension\WEBGLDrawBuffers.hx
    |   |           `-- haxe\std\js\html\webgl\extension\WEBGLLoseContext.hx
    |   `-- js.lib
    |       |-- haxe\std\js\lib\ArrayBuffer.hx
    |       |-- haxe\std\js\lib\ArrayBufferView.hx
    |       |-- haxe\std\js\lib\Atomics.hx
    |       |-- haxe\std\js\lib\BufferSource.hx
    |       |-- haxe\std\js\lib\DataView.hx
    |       |-- haxe\std\js\lib\Date.hx
    |       |-- haxe\std\js\lib\Error.hx
    |       |-- haxe\std\js\lib\Float32Array.hx
    |       |-- haxe\std\js\lib\Float64Array.hx
    |       |-- haxe\std\js\lib\Function.hx
    |       |-- haxe\std\js\lib\HaxeIterator.hx
    |       |-- haxe\std\js\lib\Int16Array.hx
    |       |-- haxe\std\js\lib\Int32Array.hx
    |       |-- haxe\std\js\lib\Int8Array.hx
    |       |-- haxe\std\js\lib\Intl.hx
    |       |-- haxe\std\js\lib\Iterator.hx
    |       |-- haxe\std\js\lib\KeyValue.hx
    |       |-- haxe\std\js\lib\Map.hx
    |       |-- haxe\std\js\lib\Math.hx
    |       |-- haxe\std\js\lib\Object.hx
    |       |-- haxe\std\js\lib\Promise.hx
    |       |-- haxe\std\js\lib\Proxy.hx
    |       |-- haxe\std\js\lib\Reflect.hx
    |       |-- haxe\std\js\lib\RegExp.hx
    |       |-- haxe\std\js\lib\Set.hx
    |       |-- haxe\std\js\lib\SharedArrayBuffer.hx
    |       |-- haxe\std\js\lib\Symbol.hx
    |       |-- haxe\std\js\lib\Uint16Array.hx
    |       |-- haxe\std\js\lib\Uint32Array.hx
    |       |-- haxe\std\js\lib\Uint8Array.hx
    |       |-- haxe\std\js\lib\Uint8ClampedArray.hx
    |       |-- haxe\std\js\lib\WeakMap.hx
    |       |-- haxe\std\js\lib\WeakRef.hx
    |       |-- haxe\std\js\lib\WeakSet.hx
    |       |-- haxe\std\js\lib\WebAssembly.hx
    |       |-- js.lib.intl
    |       |   |-- haxe\std\js\lib\intl\Collator.hx
    |       |   |-- haxe\std\js\lib\intl\DateTimeFormat.hx
    |       |   |-- haxe\std\js\lib\intl\DisplayNames.hx
    |       |   |-- haxe\std\js\lib\intl\ListFormat.hx
    |       |   |-- haxe\std\js\lib\intl\LocaleMatcher.hx
    |       |   |-- haxe\std\js\lib\intl\NumberFormat.hx
    |       |   |-- haxe\std\js\lib\intl\PluralRules.hx
    |       |   `-- haxe\std\js\lib\intl\RelativeTimeFormat.hx
    |       `-- js.lib.webassembly
    |           |-- haxe\std\js\lib\webassembly\CompileError.hx
    |           |-- haxe\std\js\lib\webassembly\Global.hx
    |           |-- haxe\std\js\lib\webassembly\Instance.hx
    |           |-- haxe\std\js\lib\webassembly\LinkError.hx
    |           |-- haxe\std\js\lib\webassembly\Memory.hx
    |           |-- haxe\std\js\lib\webassembly\Module.hx
    |           |-- haxe\std\js\lib\webassembly\RuntimeError.hx
    |           `-- haxe\std\js\lib\webassembly\Table.hx
    |-- jvm
    |   |-- haxe\std\jvm\Closure.hx
    |   |-- haxe\std\jvm\CompiledPattern.hx
    |   |-- haxe\std\jvm\DynamicObject.hx
    |   |-- haxe\std\jvm\EmptyConstructor.hx
    |   |-- haxe\std\jvm\Enum.hx
    |   |-- haxe\std\jvm\Function.hx
    |   |-- haxe\std\jvm\Jvm.hx
    |   |-- haxe\std\jvm\NativeTools.hx
    |   |-- haxe\std\jvm\Object.hx
    |   |-- haxe\std\jvm\StringExt.hx
    |   |-- jvm\_std
    |   |   |-- haxe\std\jvm\_std\EReg.hx
    |   |   |-- haxe\std\jvm\_std\Reflect.hx
    |   |   |-- haxe\std\jvm\_std\Std.hx
    |   |   |-- haxe\std\jvm\_std\String.hx
    |   |   |-- haxe\std\jvm\_std\StringBuf.hx
    |   |   |-- haxe\std\jvm\_std\Type.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\jvm\_std\haxe\Rest.hx
    |   |   |   `-- haxe.ds
    |   |   |       `-- haxe\std\jvm\_std\haxe\ds\StringMap.hx
    |   |   `-- haxe\std\jvm\_std\sys
    |   |       `-- sys.thread
    |   |           `-- haxe\std\jvm\_std\sys\thread\Lock.hx
    |   `-- jvm.annotation
    |       |-- haxe\std\jvm\annotation\ClassReflectionInformation.hx
    |       |-- haxe\std\jvm\annotation\EnumReflectionInformation.hx
    |       `-- haxe\std\jvm\annotation\EnumValueReflectionInformation.hx
    |-- lua
    |   |-- haxe\std\lua\Bit.hx
    |   |-- haxe\std\lua\Boot.hx
    |   |-- haxe\std\lua\Coroutine.hx
    |   |-- haxe\std\lua\Debug.hx
    |   |-- haxe\std\lua\Ffi.hx
    |   |-- haxe\std\lua\FileHandle.hx
    |   |-- haxe\std\lua\HaxeIterator.hx
    |   |-- haxe\std\lua\Io.hx
    |   |-- haxe\std\lua\Jit.hx
    |   |-- haxe\std\lua\Lib.hx
    |   |-- haxe\std\lua\LocaleCategory.hx
    |   |-- haxe\std\lua\Lua.hx
    |   |-- haxe\std\lua\Math.hx
    |   |-- haxe\std\lua\NativeIterator.hx
    |   |-- haxe\std\lua\NativeStringTools.hx
    |   |-- haxe\std\lua\Os.hx
    |   |-- haxe\std\lua\Package.hx
    |   |-- haxe\std\lua\PairTools.hx
    |   |-- haxe\std\lua\Result.hx
    |   |-- haxe\std\lua\Table.hx
    |   |-- haxe\std\lua\TableTools.hx
    |   |-- haxe\std\lua\Thread.hx
    |   |-- haxe\std\lua\Time.hx
    |   |-- haxe\std\lua\UserData.hx
    |   |-- haxe\std\lua\_lua
    |   |   |-- haxe\std\lua\_lua\_hx_anon.lua
    |   |   |-- haxe\std\lua\_lua\_hx_apply_self.lua
    |   |   |-- haxe\std\lua\_lua\_hx_bind.lua
    |   |   |-- haxe\std\lua\_lua\_hx_bit.lua
    |   |   |-- haxe\std\lua\_lua\_hx_bit_clamp.lua
    |   |   |-- haxe\std\lua\_lua\_hx_box_mr.lua
    |   |   |-- haxe\std\lua\_lua\_hx_classes.lua
    |   |   |-- haxe\std\lua\_lua\_hx_dyn_add.lua
    |   |   |-- haxe\std\lua\_lua\_hx_func_to_field.lua
    |   |   |-- haxe\std\lua\_lua\_hx_handle_error.lua
    |   |   |-- haxe\std\lua\_lua\_hx_luv.lua
    |   |   |-- haxe\std\lua\_lua\_hx_print.lua
    |   |   |-- haxe\std\lua\_lua\_hx_random_init.lua
    |   |   |-- haxe\std\lua\_lua\_hx_static_to_instance.lua
    |   |   |-- haxe\std\lua\_lua\_hx_tab_array.lua
    |   |   |-- haxe\std\lua\_lua\_hx_table.lua
    |   |   |-- haxe\std\lua\_lua\_hx_tostring.lua
    |   |   `-- haxe\std\lua\_lua\_hx_wrap_if_string_field.lua
    |   |-- lua\_std
    |   |   |-- haxe\std\lua\_std\Array.hx
    |   |   |-- haxe\std\lua\_std\Date.hx
    |   |   |-- haxe\std\lua\_std\EReg.hx
    |   |   |-- haxe\std\lua\_std\Math.hx
    |   |   |-- haxe\std\lua\_std\Reflect.hx
    |   |   |-- haxe\std\lua\_std\Std.hx
    |   |   |-- haxe\std\lua\_std\String.hx
    |   |   |-- haxe\std\lua\_std\StringBuf.hx
    |   |   |-- haxe\std\lua\_std\Sys.hx
    |   |   |-- haxe\std\lua\_std\Type.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\lua\_std\haxe\Exception.hx
    |   |   |   |-- haxe\std\lua\_std\haxe\Json.hx
    |   |   |   |-- haxe\std\lua\_std\haxe\NativeStackTrace.hx
    |   |   |   |-- haxe\std\lua\_std\haxe\Rest.hx
    |   |   |   |-- haxe.ds
    |   |   |   |   |-- haxe\std\lua\_std\haxe\ds\IntMap.hx
    |   |   |   |   |-- haxe\std\lua\_std\haxe\ds\ObjectMap.hx
    |   |   |   |   `-- haxe\std\lua\_std\haxe\ds\StringMap.hx
    |   |   |   |-- haxe.format
    |   |   |   |   `-- haxe\std\lua\_std\haxe\format\JsonParser.hx
    |   |   |   `-- haxe.iterators
    |   |   |       `-- haxe\std\lua\_std\haxe\iterators\StringIterator.hx
    |   |   `-- sys
    |   |       |-- haxe\std\lua\_std\sys\FileSystem.hx
    |   |       |-- sys.io
    |   |       |   |-- haxe\std\lua\_std\sys\io\File.hx
    |   |       |   |-- haxe\std\lua\_std\sys\io\FileInput.hx
    |   |       |   |-- haxe\std\lua\_std\sys\io\FileOutput.hx
    |   |       |   `-- haxe\std\lua\_std\sys\io\Process.hx
    |   |       |-- sys.net
    |   |       |   |-- haxe\std\lua\_std\sys\net\Host.hx
    |   |       |   |-- haxe\std\lua\_std\sys\net\Socket.hx
    |   |       |   |-- haxe\std\lua\_std\sys\net\SocketInput.hx
    |   |       |   `-- haxe\std\lua\_std\sys\net\SocketOutput.hx
    |   |       `-- sys.ssl
    |   |           `-- haxe\std\lua\_std\sys\ssl\Socket.hx
    |   `-- haxe\std\lua\lib
    |       |-- lua.lib.hxluasimdjson
    |       |   `-- haxe\std\lua\lib\hxluasimdjson\Json.hx
    |       |-- lua.lib.lrexlib
    |       |   `-- haxe\std\lua\lib\lrexlib\Rex.hx
    |       |-- lua.lib.luasec
    |       |   |-- haxe\std\lua\lib\luasec\Ssl.hx
    |       |   `-- haxe\std\lua\lib\luasec\SslTcpClient.hx
    |       |-- lua.lib.luasocket
    |       |   |-- haxe\std\lua\lib\luasocket\Socket.hx
    |       |   `-- lua.lib.luasocket.socket
    |       |       |-- haxe\std\lua\lib\luasocket\socket\AddrInfo.hx
    |       |       |-- haxe\std\lua\lib\luasocket\socket\Dns.hx
    |       |       |-- haxe\std\lua\lib\luasocket\socket\ReceivePattern.hx
    |       |       |-- haxe\std\lua\lib\luasocket\socket\SelectResult.hx
    |       |       |-- haxe\std\lua\lib\luasocket\socket\ShutdownMode.hx
    |       |       |-- haxe\std\lua\lib\luasocket\socket\TcpClient.hx
    |       |       |-- haxe\std\lua\lib\luasocket\socket\TcpMaster.hx
    |       |       |-- haxe\std\lua\lib\luasocket\socket\TcpOption.hx
    |       |       |-- haxe\std\lua\lib\luasocket\socket\TcpServer.hx
    |       |       `-- haxe\std\lua\lib\luasocket\socket\TimeoutMode.hx
    |       |-- lua.lib.luautf8
    |       |   `-- haxe\std\lua\lib\luautf8\Utf8.hx
    |       `-- lua.lib.luv
    |           |-- haxe\std\lua\lib\luv\Async.hx
    |           |-- haxe\std\lua\lib\luv\Check.hx
    |           |-- haxe\std\lua\lib\luv\Handle.hx
    |           |-- haxe\std\lua\lib\luv\Idle.hx
    |           |-- haxe\std\lua\lib\luv\Loop.hx
    |           |-- haxe\std\lua\lib\luv\Misc.hx
    |           |-- haxe\std\lua\lib\luv\Os.hx
    |           |-- haxe\std\lua\lib\luv\Pipe.hx
    |           |-- haxe\std\lua\lib\luv\Poll.hx
    |           |-- haxe\std\lua\lib\luv\Prepare.hx
    |           |-- haxe\std\lua\lib\luv\Process.hx
    |           |-- haxe\std\lua\lib\luv\Request.hx
    |           |-- haxe\std\lua\lib\luv\Signal.hx
    |           |-- haxe\std\lua\lib\luv\Stream.hx
    |           |-- haxe\std\lua\lib\luv\Thread.hx
    |           |-- haxe\std\lua\lib\luv\Timer.hx
    |           |-- haxe\std\lua\lib\luv\Tty.hx
    |           |-- haxe\std\lua\lib\luv\Work.hx
    |           |-- lua.lib.luv.fs
    |           |   |-- haxe\std\lua\lib\luv\fs\FileDescriptor.hx
    |           |   |-- haxe\std\lua\lib\luv\fs\FileSystem.hx
    |           |   |-- haxe\std\lua\lib\luv\fs\FileSystemEvent.hx
    |           |   |-- haxe\std\lua\lib\luv\fs\FileSystemPoll.hx
    |           |   `-- haxe\std\lua\lib\luv\fs\Open.hx
    |           `-- lua.lib.luv.net
    |               |-- haxe\std\lua\lib\luv\net\Dns.hx
    |               |-- haxe\std\lua\lib\luv\net\Tcp.hx
    |               `-- haxe\std\lua\lib\luv\net\Udp.hx
    |-- neko
    |   |-- haxe\std\neko\Boot.hx
    |   |-- haxe\std\neko\Lib.hx
    |   |-- haxe\std\neko\NativeArray.hx
    |   |-- haxe\std\neko\NativeString.hx
    |   |-- haxe\std\neko\NativeXml.hx
    |   |-- haxe\std\neko\Random.hx
    |   |-- haxe\std\neko\Utf8.hx
    |   |-- haxe\std\neko\Web.hx
    |   |-- neko\_std
    |   |   |-- haxe\std\neko\_std\Array.hx
    |   |   |-- haxe\std\neko\_std\Date.hx
    |   |   |-- haxe\std\neko\_std\EReg.hx
    |   |   |-- haxe\std\neko\_std\Math.hx
    |   |   |-- haxe\std\neko\_std\Reflect.hx
    |   |   |-- haxe\std\neko\_std\Std.hx
    |   |   |-- haxe\std\neko\_std\String.hx
    |   |   |-- haxe\std\neko\_std\StringBuf.hx
    |   |   |-- haxe\std\neko\_std\Sys.hx
    |   |   |-- haxe\std\neko\_std\Type.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\neko\_std\haxe\Exception.hx
    |   |   |   |-- haxe\std\neko\_std\haxe\NativeStackTrace.hx
    |   |   |   |-- haxe\std\neko\_std\haxe\Resource.hx
    |   |   |   |-- haxe\std\neko\_std\haxe\Utf8.hx
    |   |   |   |-- haxe.crypto
    |   |   |   |   `-- haxe\std\neko\_std\haxe\crypto\Md5.hx
    |   |   |   |-- haxe.ds
    |   |   |   |   |-- haxe\std\neko\_std\haxe\ds\IntMap.hx
    |   |   |   |   |-- haxe\std\neko\_std\haxe\ds\ObjectMap.hx
    |   |   |   |   `-- haxe\std\neko\_std\haxe\ds\StringMap.hx
    |   |   |   |-- haxe.io
    |   |   |   |   `-- haxe\std\neko\_std\haxe\io\StringInput.hx
    |   |   |   |-- haxe.iterators
    |   |   |   |   |-- haxe\std\neko\_std\haxe\iterators\StringIteratorUnicode.hx
    |   |   |   |   `-- haxe\std\neko\_std\haxe\iterators\StringKeyValueIteratorUnicode.hx
    |   |   |   `-- haxe.zip
    |   |   |       |-- haxe\std\neko\_std\haxe\zip\Compress.hx
    |   |   |       `-- haxe\std\neko\_std\haxe\zip\Uncompress.hx
    |   |   `-- sys
    |   |       |-- haxe\std\neko\_std\sys\FileSystem.hx
    |   |       |-- sys.db
    |   |       |   |-- haxe\std\neko\_std\sys\db\Mysql.hx
    |   |       |   `-- haxe\std\neko\_std\sys\db\Sqlite.hx
    |   |       |-- sys.io
    |   |       |   |-- haxe\std\neko\_std\sys\io\File.hx
    |   |       |   |-- haxe\std\neko\_std\sys\io\FileInput.hx
    |   |       |   |-- haxe\std\neko\_std\sys\io\FileOutput.hx
    |   |       |   `-- haxe\std\neko\_std\sys\io\Process.hx
    |   |       |-- sys.net
    |   |       |   |-- haxe\std\neko\_std\sys\net\Host.hx
    |   |       |   |-- haxe\std\neko\_std\sys\net\Socket.hx
    |   |       |   `-- haxe\std\neko\_std\sys\net\UdpSocket.hx
    |   |       |-- sys.ssl
    |   |       |   |-- haxe\std\neko\_std\sys\ssl\Certificate.hx
    |   |       |   |-- haxe\std\neko\_std\sys\ssl\Digest.hx
    |   |       |   |-- haxe\std\neko\_std\sys\ssl\Key.hx
    |   |       |   `-- haxe\std\neko\_std\sys\ssl\Socket.hx
    |   |       `-- sys.thread
    |   |           |-- haxe\std\neko\_std\sys\thread\Deque.hx
    |   |           |-- haxe\std\neko\_std\sys\thread\Lock.hx
    |   |           |-- haxe\std\neko\_std\sys\thread\Mutex.hx
    |   |           |-- haxe\std\neko\_std\sys\thread\Thread.hx
    |   |           `-- haxe\std\neko\_std\sys\thread\Tls.hx
    |   |-- neko.vm
    |   |   |-- haxe\std\neko\vm\Deque.hx
    |   |   |-- haxe\std\neko\vm\Gc.hx
    |   |   |-- haxe\std\neko\vm\Loader.hx
    |   |   |-- haxe\std\neko\vm\Lock.hx
    |   |   |-- haxe\std\neko\vm\Module.hx
    |   |   |-- haxe\std\neko\vm\Mutex.hx
    |   |   |-- haxe\std\neko\vm\Thread.hx
    |   |   |-- haxe\std\neko\vm\Tls.hx
    |   |   `-- haxe\std\neko\vm\Ui.hx
    |   `-- neko.zip
    |       |-- haxe\std\neko\zip\Compress.hx
    |       |-- haxe\std\neko\zip\Flush.hx
    |       `-- haxe\std\neko\zip\Uncompress.hx
    |-- php
    |   |-- haxe\std\php\ArrayAccess.hx
    |   |-- haxe\std\php\ArrayIterator.hx
    |   |-- haxe\std\php\Attribute.hx
    |   |-- haxe\std\php\Boot.hx
    |   |-- haxe\std\php\Closure.hx
    |   |-- haxe\std\php\Collator.hx
    |   |-- haxe\std\php\Const.hx
    |   |-- haxe\std\php\Countable.hx
    |   |-- haxe\std\php\DateInterval.hx
    |   |-- haxe\std\php\DatePeriod.hx
    |   |-- haxe\std\php\DateTime.hx
    |   |-- haxe\std\php\DateTimeImmutable.hx
    |   |-- haxe\std\php\DateTimeInterface.hx
    |   |-- haxe\std\php\DateTimeZone.hx
    |   |-- haxe\std\php\DirectoryIterator.hx
    |   |-- haxe\std\php\Error.hx
    |   |-- haxe\std\php\ErrorException.hx
    |   |-- haxe\std\php\Exception.hx
    |   |-- haxe\std\php\FilesystemIterator.hx
    |   |-- haxe\std\php\Finfo.hx
    |   |-- haxe\std\php\Generator.hx
    |   |-- haxe\std\php\Global.hx
    |   |-- haxe\std\php\IntlCalendar.hx
    |   |-- haxe\std\php\IntlDateFormatter.hx
    |   |-- haxe\std\php\IntlIterator.hx
    |   |-- haxe\std\php\IntlTimeZone.hx
    |   |-- haxe\std\php\IteratorAggregate.hx
    |   |-- haxe\std\php\JsonSerializable.hx
    |   |-- haxe\std\php\Lib.hx
    |   |-- haxe\std\php\Locale.hx
    |   |-- haxe\std\php\LogicException.hx
    |   |-- haxe\std\php\NativeArray.hx
    |   |-- haxe\std\php\NativeAssocArray.hx
    |   |-- haxe\std\php\NativeIndexedArray.hx
    |   |-- haxe\std\php\NativeIterator.hx
    |   |-- haxe\std\php\NativeString.hx
    |   |-- haxe\std\php\NativeStructArray.hx
    |   |-- haxe\std\php\NumberFormatter.hx
    |   |-- haxe\std\php\Phar.hx
    |   |-- haxe\std\php\PharData.hx
    |   |-- haxe\std\php\PharException.hx
    |   |-- haxe\std\php\PharFileInfo.hx
    |   |-- haxe\std\php\RecursiveDirectoryIterator.hx
    |   |-- haxe\std\php\RecursiveIterator.hx
    |   |-- haxe\std\php\Ref.hx
    |   |-- haxe\std\php\Resource.hx
    |   |-- haxe\std\php\ResourceBundle.hx
    |   |-- haxe\std\php\RuntimeException.hx
    |   |-- haxe\std\php\Scalar.hx
    |   |-- haxe\std\php\SeekableIterator.hx
    |   |-- haxe\std\php\Serializable.hx
    |   |-- haxe\std\php\Session.hx
    |   |-- haxe\std\php\SessionHandlerInterface.hx
    |   |-- haxe\std\php\SplFileInfo.hx
    |   |-- haxe\std\php\SplFileObject.hx
    |   |-- haxe\std\php\StdClass.hx
    |   |-- haxe\std\php\SuperGlobal.hx
    |   |-- haxe\std\php\Syntax.hx
    |   |-- haxe\std\php\Syntax.macro.hx
    |   |-- haxe\std\php\Throwable.hx
    |   |-- haxe\std\php\Transliterator.hx
    |   |-- haxe\std\php\Traversable.hx
    |   |-- haxe\std\php\Web.hx
    |   |-- haxe\std\php\_polyfills.php
    |   |-- php\_std
    |   |   |-- haxe\std\php\_std\Array.hx
    |   |   |-- haxe\std\php\_std\Date.hx
    |   |   |-- haxe\std\php\_std\EReg.hx
    |   |   |-- haxe\std\php\_std\Math.hx
    |   |   |-- haxe\std\php\_std\Reflect.hx
    |   |   |-- haxe\std\php\_std\Std.hx
    |   |   |-- haxe\std\php\_std\String.hx
    |   |   |-- haxe\std\php\_std\StringBuf.hx
    |   |   |-- haxe\std\php\_std\StringTools.hx
    |   |   |-- haxe\std\php\_std\Sys.hx
    |   |   |-- haxe\std\php\_std\Type.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\php\_std\haxe\Exception.hx
    |   |   |   |-- haxe\std\php\_std\haxe\Json.hx
    |   |   |   |-- haxe\std\php\_std\haxe\NativeStackTrace.hx
    |   |   |   |-- haxe\std\php\_std\haxe\Resource.hx
    |   |   |   |-- haxe\std\php\_std\haxe\Rest.hx
    |   |   |   |-- haxe\std\php\_std\haxe\Utf8.hx
    |   |   |   |-- haxe.crypto
    |   |   |   |   |-- haxe\std\php\_std\haxe\crypto\Base64.hx
    |   |   |   |   |-- haxe\std\php\_std\haxe\crypto\Md5.hx
    |   |   |   |   |-- haxe\std\php\_std\haxe\crypto\Sha1.hx
    |   |   |   |   |-- haxe\std\php\_std\haxe\crypto\Sha224.hx
    |   |   |   |   `-- haxe\std\php\_std\haxe\crypto\Sha256.hx
    |   |   |   |-- haxe.ds
    |   |   |   |   |-- haxe\std\php\_std\haxe\ds\IntMap.hx
    |   |   |   |   |-- haxe\std\php\_std\haxe\ds\ObjectMap.hx
    |   |   |   |   |-- haxe\std\php\_std\haxe\ds\StringMap.hx
    |   |   |   |   `-- haxe\std\php\_std\haxe\ds\Vector.hx
    |   |   |   |-- haxe.format
    |   |   |   |   `-- haxe\std\php\_std\haxe\format\JsonParser.hx
    |   |   |   |-- haxe.io
    |   |   |   |   |-- haxe\std\php\_std\haxe\io\Bytes.hx
    |   |   |   |   |-- haxe\std\php\_std\haxe\io\BytesBuffer.hx
    |   |   |   |   |-- haxe\std\php\_std\haxe\io\BytesData.hx
    |   |   |   |   |-- haxe\std\php\_std\haxe\io\BytesInput.hx
    |   |   |   |   |-- haxe\std\php\_std\haxe\io\BytesOutput.hx
    |   |   |   |   `-- haxe\std\php\_std\haxe\io\FPHelper.hx
    |   |   |   |-- haxe.iterators
    |   |   |   |   |-- haxe\std\php\_std\haxe\iterators\StringIteratorUnicode.hx
    |   |   |   |   `-- haxe\std\php\_std\haxe\iterators\StringKeyValueIteratorUnicode.hx
    |   |   |   |-- haxe.xml
    |   |   |   |   `-- haxe\std\php\_std\haxe\xml\Parser.hx
    |   |   |   `-- haxe.zip
    |   |   |       |-- haxe\std\php\_std\haxe\zip\Compress.hx
    |   |   |       `-- haxe\std\php\_std\haxe\zip\Uncompress.hx
    |   |   `-- sys
    |   |       |-- haxe\std\php\_std\sys\FileSystem.hx
    |   |       |-- sys.db
    |   |       |   |-- haxe\std\php\_std\sys\db\Mysql.hx
    |   |       |   `-- haxe\std\php\_std\sys\db\Sqlite.hx
    |   |       |-- sys.io
    |   |       |   |-- haxe\std\php\_std\sys\io\File.hx
    |   |       |   |-- haxe\std\php\_std\sys\io\FileInput.hx
    |   |       |   |-- haxe\std\php\_std\sys\io\FileOutput.hx
    |   |       |   `-- haxe\std\php\_std\sys\io\Process.hx
    |   |       `-- sys.net
    |   |           |-- haxe\std\php\_std\sys\net\Host.hx
    |   |           `-- haxe\std\php\_std\sys\net\Socket.hx
    |   |-- php.db
    |   |   |-- haxe\std\php\db\Mysqli.hx
    |   |   |-- haxe\std\php\db\Mysqli_driver.hx
    |   |   |-- haxe\std\php\db\Mysqli_result.hx
    |   |   |-- haxe\std\php\db\Mysqli_stmt.hx
    |   |   |-- haxe\std\php\db\Mysqli_warning.hx
    |   |   |-- haxe\std\php\db\PDO.hx
    |   |   |-- haxe\std\php\db\PDOException.hx
    |   |   |-- haxe\std\php\db\PDOStatement.hx
    |   |   |-- haxe\std\php\db\SQLite3.hx
    |   |   |-- haxe\std\php\db\SQLite3Result.hx
    |   |   `-- haxe\std\php\db\SQLite3Stmt.hx
    |   |-- php.net
    |   |   |-- haxe\std\php\net\Socket.hx
    |   |   `-- haxe\std\php\net\SslSocket.hx
    |   `-- php.reflection
    |       |-- haxe\std\php\reflection\ReflectionClass.hx
    |       |-- haxe\std\php\reflection\ReflectionFunctionAbstract.hx
    |       |-- haxe\std\php\reflection\ReflectionMethod.hx
    |       |-- haxe\std\php\reflection\ReflectionProperty.hx
    |       `-- haxe\std\php\reflection\Reflector.hx
    |-- python
    |   |-- haxe\std\python\Boot.hx
    |   |-- haxe\std\python\Bytearray.hx
    |   |-- haxe\std\python\Bytes.hx
    |   |-- haxe\std\python\Dict.hx
    |   |-- haxe\std\python\Exceptions.hx
    |   |-- haxe\std\python\HaxeIterable.hx
    |   |-- haxe\std\python\HaxeIterator.hx
    |   |-- haxe\std\python\KwArgs.hx
    |   |-- haxe\std\python\Lib.hx
    |   |-- haxe\std\python\NativeArrayTools.hx
    |   |-- haxe\std\python\NativeIterable.hx
    |   |-- haxe\std\python\NativeIterator.hx
    |   |-- haxe\std\python\NativeStringTools.hx
    |   |-- haxe\std\python\Set.hx
    |   |-- haxe\std\python\Syntax.hx
    |   |-- haxe\std\python\Syntax.macro.hx
    |   |-- haxe\std\python\Tuple.hx
    |   |-- haxe\std\python\VarArgs.hx
    |   |-- python\_std
    |   |   |-- haxe\std\python\_std\Array.hx
    |   |   |-- haxe\std\python\_std\Date.hx
    |   |   |-- haxe\std\python\_std\EReg.hx
    |   |   |-- haxe\std\python\_std\Math.hx
    |   |   |-- haxe\std\python\_std\Reflect.hx
    |   |   |-- haxe\std\python\_std\Std.hx
    |   |   |-- haxe\std\python\_std\String.hx
    |   |   |-- haxe\std\python\_std\StringBuf.hx
    |   |   |-- haxe\std\python\_std\Sys.hx
    |   |   |-- haxe\std\python\_std\Type.hx
    |   |   |-- haxe
    |   |   |   |-- haxe\std\python\_std\haxe\Exception.hx
    |   |   |   |-- haxe\std\python\_std\haxe\Json.hx
    |   |   |   |-- haxe\std\python\_std\haxe\NativeStackTrace.hx
    |   |   |   |-- haxe\std\python\_std\haxe\Resource.hx
    |   |   |   `-- haxe.ds
    |   |   |       |-- haxe\std\python\_std\haxe\ds\IntMap.hx
    |   |   |       |-- haxe\std\python\_std\haxe\ds\ObjectMap.hx
    |   |   |       `-- haxe\std\python\_std\haxe\ds\StringMap.hx
    |   |   `-- sys
    |   |       |-- haxe\std\python\_std\sys\FileSystem.hx
    |   |       |-- sys.io
    |   |       |   |-- haxe\std\python\_std\sys\io\File.hx
    |   |       |   |-- haxe\std\python\_std\sys\io\FileInput.hx
    |   |       |   |-- haxe\std\python\_std\sys\io\FileOutput.hx
    |   |       |   `-- haxe\std\python\_std\sys\io\Process.hx
    |   |       |-- sys.net
    |   |       |   |-- haxe\std\python\_std\sys\net\Host.hx
    |   |       |   `-- haxe\std\python\_std\sys\net\Socket.hx
    |   |       `-- sys.thread
    |   |           |-- haxe\std\python\_std\sys\thread\Condition.hx
    |   |           |-- haxe\std\python\_std\sys\thread\Deque.hx
    |   |           |-- haxe\std\python\_std\sys\thread\Lock.hx
    |   |           |-- haxe\std\python\_std\sys\thread\Mutex.hx
    |   |           |-- haxe\std\python\_std\sys\thread\Semaphore.hx
    |   |           |-- haxe\std\python\_std\sys\thread\Thread.hx
    |   |           `-- haxe\std\python\_std\sys\thread\Tls.hx
    |   |-- python.internal
    |   |   |-- haxe\std\python\internal\AnonObject.hx
    |   |   |-- haxe\std\python\internal\ArrayImpl.hx
    |   |   |-- haxe\std\python\internal\EnumImpl.hx
    |   |   |-- haxe\std\python\internal\HxOverrides.hx
    |   |   |-- haxe\std\python\internal\Internal.hx
    |   |   |-- haxe\std\python\internal\MethodClosure.hx
    |   |   |-- haxe\std\python\internal\StringImpl.hx
    |   |   `-- haxe\std\python\internal\UBuiltins.hx
    |   |-- python.io
    |   |   |-- haxe\std\python\io\FileBytesInput.hx
    |   |   |-- haxe\std\python\io\FileBytesOutput.hx
    |   |   |-- haxe\std\python\io\FileTextInput.hx
    |   |   |-- haxe\std\python\io\FileTextOutput.hx
    |   |   |-- haxe\std\python\io\IFileInput.hx
    |   |   |-- haxe\std\python\io\IFileOutput.hx
    |   |   |-- haxe\std\python\io\IInput.hx
    |   |   |-- haxe\std\python\io\IOutput.hx
    |   |   |-- haxe\std\python\io\IoTools.hx
    |   |   |-- haxe\std\python\io\NativeBytesInput.hx
    |   |   |-- haxe\std\python\io\NativeBytesOutput.hx
    |   |   |-- haxe\std\python\io\NativeInput.hx
    |   |   |-- haxe\std\python\io\NativeOutput.hx
    |   |   |-- haxe\std\python\io\NativeTextInput.hx
    |   |   `-- haxe\std\python\io\NativeTextOutput.hx
    |   |-- python.lib
    |   |   |-- haxe\std\python\lib\Builtins.hx
    |   |   |-- haxe\std\python\lib\Codecs.hx
    |   |   |-- haxe\std\python\lib\FileDescriptor.hx
    |   |   |-- haxe\std\python\lib\FileObject.hx
    |   |   |-- haxe\std\python\lib\Functools.hx
    |   |   |-- haxe\std\python\lib\Glob.hx
    |   |   |-- haxe\std\python\lib\Hashlib.hx
    |   |   |-- haxe\std\python\lib\Inspect.hx
    |   |   |-- haxe\std\python\lib\Io.hx
    |   |   |-- haxe\std\python\lib\Json.hx
    |   |   |-- haxe\std\python\lib\Math.hx
    |   |   |-- haxe\std\python\lib\Msvcrt.hx
    |   |   |-- haxe\std\python\lib\Os.hx
    |   |   |-- haxe\std\python\lib\Pprint.hx
    |   |   |-- haxe\std\python\lib\Random.hx
    |   |   |-- haxe\std\python\lib\Re.hx
    |   |   |-- haxe\std\python\lib\Select.hx
    |   |   |-- haxe\std\python\lib\Shutil.hx
    |   |   |-- haxe\std\python\lib\Socket.hx
    |   |   |-- haxe\std\python\lib\Ssl.hx
    |   |   |-- haxe\std\python\lib\Subprocess.hx
    |   |   |-- haxe\std\python\lib\Sys.hx
    |   |   |-- haxe\std\python\lib\Tempfile.hx
    |   |   |-- haxe\std\python\lib\Termios.hx
    |   |   |-- haxe\std\python\lib\ThreadLowLevel.hx
    |   |   |-- haxe\std\python\lib\Threading.hx
    |   |   |-- haxe\std\python\lib\Time.hx
    |   |   |-- haxe\std\python\lib\Timeit.hx
    |   |   |-- haxe\std\python\lib\Traceback.hx
    |   |   |-- haxe\std\python\lib\Tty.hx
    |   |   |-- python.lib.codecs
    |   |   |   |-- haxe\std\python\lib\codecs\Codec.hx
    |   |   |   |-- haxe\std\python\lib\codecs\StreamReader.hx
    |   |   |   |-- haxe\std\python\lib\codecs\StreamReaderWriter.hx
    |   |   |   `-- haxe\std\python\lib\codecs\StreamWriter.hx
    |   |   |-- python.lib.datetime
    |   |   |   |-- haxe\std\python\lib\datetime\Datetime.hx
    |   |   |   |-- haxe\std\python\lib\datetime\Timedelta.hx
    |   |   |   |-- haxe\std\python\lib\datetime\Timezone.hx
    |   |   |   `-- haxe\std\python\lib\datetime\Tzinfo.hx
    |   |   |-- python.lib.io
    |   |   |   |-- haxe\std\python\lib\io\BlockingIOError.hx
    |   |   |   |-- haxe\std\python\lib\io\BufferedIOBase.hx
    |   |   |   |-- haxe\std\python\lib\io\BufferedRWPair.hx
    |   |   |   |-- haxe\std\python\lib\io\BufferedRandom.hx
    |   |   |   |-- haxe\std\python\lib\io\BufferedReader.hx
    |   |   |   |-- haxe\std\python\lib\io\BufferedWriter.hx
    |   |   |   |-- haxe\std\python\lib\io\BytesIO.hx
    |   |   |   |-- haxe\std\python\lib\io\FileIO.hx
    |   |   |   |-- haxe\std\python\lib\io\IOBase.hx
    |   |   |   |-- haxe\std\python\lib\io\RawIOBase.hx
    |   |   |   |-- haxe\std\python\lib\io\StringIO.hx
    |   |   |   |-- haxe\std\python\lib\io\TextIOBase.hx
    |   |   |   |-- haxe\std\python\lib\io\TextIOWrapper.hx
    |   |   |   `-- haxe\std\python\lib\io\UnsupportedOperation.hx
    |   |   |-- python.lib.json
    |   |   |   |-- haxe\std\python\lib\json\JSONDecoder.hx
    |   |   |   `-- haxe\std\python\lib\json\JSONEncoder.hx
    |   |   |-- python.lib.net
    |   |   |   |-- haxe\std\python\lib\net\Address.hx
    |   |   |   `-- haxe\std\python\lib\net\Socket.hx
    |   |   |-- python.lib.os
    |   |   |   `-- haxe\std\python\lib\os\Path.hx
    |   |   |-- python.lib.socket
    |   |   |   |-- haxe\std\python\lib\socket\Address.hx
    |   |   |   `-- haxe\std\python\lib\socket\Socket.hx
    |   |   |-- python.lib.ssl
    |   |   |   |-- haxe\std\python\lib\ssl\Purpose.hx
    |   |   |   |-- haxe\std\python\lib\ssl\SSLContext.hx
    |   |   |   |-- haxe\std\python\lib\ssl\SSLSession.hx
    |   |   |   `-- haxe\std\python\lib\ssl\SSLSocket.hx
    |   |   |-- python.lib.subprocess
    |   |   |   `-- haxe\std\python\lib\subprocess\Popen.hx
    |   |   |-- python.lib.threading
    |   |   |   |-- haxe\std\python\lib\threading\Condition.hx
    |   |   |   |-- haxe\std\python\lib\threading\Lock.hx
    |   |   |   |-- haxe\std\python\lib\threading\RLock.hx
    |   |   |   |-- haxe\std\python\lib\threading\Semaphore.hx
    |   |   |   `-- haxe\std\python\lib\threading\Thread.hx
    |   |   |-- python.lib.time
    |   |   |   `-- haxe\std\python\lib\time\StructTime.hx
    |   |   |-- python.lib.urllib
    |   |   |   `-- haxe\std\python\lib\urllib\Parse.hx
    |   |   `-- haxe\std\python\lib\xml
    |   |       `-- python.lib.xml.etree
    |   |           `-- haxe\std\python\lib\xml\etree\ElementTree.hx
    |   `-- python.net
    |       `-- haxe\std\python\net\SslSocket.hx
    `-- sys
        |-- haxe\std\sys\FileStat.hx
        |-- haxe\std\sys\FileSystem.hx
        |-- haxe\std\sys\Http.hx
        |-- sys.db
        |   |-- haxe\std\sys\db\Connection.hx
        |   |-- haxe\std\sys\db\Mysql.hx
        |   |-- haxe\std\sys\db\ResultSet.hx
        |   `-- haxe\std\sys\db\Sqlite.hx
        |-- sys.io
        |   |-- haxe\std\sys\io\File.hx
        |   |-- haxe\std\sys\io\FileInput.hx
        |   |-- haxe\std\sys\io\FileOutput.hx
        |   |-- haxe\std\sys\io\FileSeek.hx
        |   `-- haxe\std\sys\io\Process.hx
        |-- sys.net
        |   |-- haxe\std\sys\net\Address.hx
        |   |-- haxe\std\sys\net\Host.hx
        |   |-- haxe\std\sys\net\Socket.hx
        |   `-- haxe\std\sys\net\UdpSocket.hx
        |-- sys.ssl
        |   |-- haxe\std\sys\ssl\Certificate.hx
        |   |-- haxe\std\sys\ssl\Digest.hx
        |   |-- haxe\std\sys\ssl\DigestAlgorithm.hx
        |   |-- haxe\std\sys\ssl\Key.hx
        |   `-- haxe\std\sys\ssl\Socket.hx
        `-- sys.thread
            |-- haxe\std\sys\thread\Condition.hx
            |-- haxe\std\sys\thread\Deque.hx
            |-- haxe\std\sys\thread\ElasticThreadPool.hx
            |-- haxe\std\sys\thread\EventLoop.hx
            |-- haxe\std\sys\thread\FixedThreadPool.hx
            |-- haxe\std\sys\thread\IThreadPool.hx
            |-- haxe\std\sys\thread\Lock.hx
            |-- haxe\std\sys\thread\Mutex.hx
            |-- haxe\std\sys\thread\NoEventLoopException.hx
            |-- haxe\std\sys\thread\Semaphore.hx
            |-- haxe\std\sys\thread\Thread.hx
            |-- haxe\std\sys\thread\ThreadPoolException.hx
            `-- haxe\std\sys\thread\Tls.hx


### Haxe-4.3.0 src

Haxe 编译器由 OCaml 语言编写。

    haxe-4.3.0\src
    |-- haxe\src\codegen
    |   |-- haxe\src\codegen\codegen.ml
    |   |-- haxe\src\codegen\dotnet.ml
    |   |-- haxe\src\codegen\gencommon
    |   |   |-- haxe\src\codegen\gencommon\abstractImplementationFix.ml
    |   |   |-- haxe\src\codegen\gencommon\arrayDeclSynf.ml
    |   |   |-- haxe\src\codegen\gencommon\arraySpliceOptimization.ml
    |   |   |-- haxe\src\codegen\gencommon\castDetect.ml
    |   |   |-- haxe\src\codegen\gencommon\classInstance.ml
    |   |   |-- haxe\src\codegen\gencommon\closuresToClass.ml
    |   |   |-- haxe\src\codegen\gencommon\dynamicFieldAccess.ml
    |   |   |-- haxe\src\codegen\gencommon\dynamicOperators.ml
    |   |   |-- haxe\src\codegen\gencommon\enumToClass.ml
    |   |   |-- haxe\src\codegen\gencommon\enumToClass2.ml
    |   |   |-- haxe\src\codegen\gencommon\expressionUnwrap.ml
    |   |   |-- haxe\src\codegen\gencommon\filterClosures.ml
    |   |   |-- haxe\src\codegen\gencommon\fixOverrides.ml
    |   |   |-- haxe\src\codegen\gencommon\gencommon.ml
    |   |   |-- haxe\src\codegen\gencommon\hardNullableSynf.ml
    |   |   |-- haxe\src\codegen\gencommon\initFunction.ml
    |   |   |-- haxe\src\codegen\gencommon\intDivisionSynf.ml
    |   |   |-- haxe\src\codegen\gencommon\interfaceProps.ml
    |   |   |-- haxe\src\codegen\gencommon\interfaceVarsDeleteModf.ml
    |   |   |-- haxe\src\codegen\gencommon\normalize.ml
    |   |   |-- haxe\src\codegen\gencommon\objectDeclMap.ml
    |   |   |-- haxe\src\codegen\gencommon\overloadingConstructor.ml
    |   |   |-- haxe\src\codegen\gencommon\realTypeParams.ml
    |   |   |-- haxe\src\codegen\gencommon\reflectionCFs.ml
    |   |   |-- haxe\src\codegen\gencommon\renameTypeParameters.ml
    |   |   |-- haxe\src\codegen\gencommon\setHXGen.ml
    |   |   |-- haxe\src\codegen\gencommon\switchToIf.ml
    |   |   |-- haxe\src\codegen\gencommon\tArrayTransform.ml
    |   |   |-- haxe\src\codegen\gencommon\unnecessaryCastsRemoval.ml
    |   |   `-- haxe\src\codegen\gencommon\unreachableCodeEliminationSynf.ml
    |   |-- haxe\src\codegen\genxml.ml
    |   |-- haxe\src\codegen\java.ml
    |   |-- haxe\src\codegen\javaModern.ml
    |   |-- haxe\src\codegen\overloads.ml
    |   `-- haxe\src\codegen\swfLoader.ml
    |-- haxe\src\compiler
    |   |-- haxe\src\compiler\args.ml
    |   |-- haxe\src\compiler\compilationCache.ml
    |   |-- haxe\src\compiler\compilationContext.ml
    |   |-- haxe\src\compiler\compiler.ml
    |   |-- haxe\src\compiler\displayOutput.ml
    |   |-- haxe\src\compiler\displayProcessing.ml
    |   |-- haxe\src\compiler\displayProcessingGlobals.ml
    |   |-- haxe\src\compiler\generate.ml
    |   |-- haxe\src\compiler\haxe.ml
    |   |-- haxe\src\compiler\helper.ml
    |   |-- haxe\src\compiler\process_helper.ml
    |   |-- haxe\src\compiler\retyper.ml
    |   |-- haxe\src\compiler\server.ml
    |   |-- haxe\src\compiler\serverCompilationContext.ml
    |   |-- haxe\src\compiler\serverConfig.ml
    |   |-- haxe\src\compiler\serverMessage.ml
    |   `-- haxe\src\compiler\tasks.ml
    |-- haxe\src\context
    |   |-- haxe\src\context\abstractCast.ml
    |   |-- haxe\src\context\common.ml
    |   |-- haxe\src\context\commonCache.ml
    |   |-- haxe\src\context\display
    |   |   |-- haxe\src\context\display\deprecationCheck.ml
    |   |   |-- haxe\src\context\display\diagnostics.ml
    |   |   |-- haxe\src\context\display\diagnosticsPrinter.ml
    |   |   |-- haxe\src\context\display\display.ml
    |   |   |-- haxe\src\context\display\displayEmitter.ml
    |   |   |-- haxe\src\context\display\displayException.ml
    |   |   |-- haxe\src\context\display\displayFields.ml
    |   |   |-- haxe\src\context\display\displayJson.ml
    |   |   |-- haxe\src\context\display\displayPath.ml
    |   |   |-- haxe\src\context\display\displayTexpr.ml
    |   |   |-- haxe\src\context\display\displayToplevel.ml
    |   |   |-- haxe\src\context\display\documentSymbols.ml
    |   |   |-- haxe\src\context\display\findReferences.ml
    |   |   |-- haxe\src\context\display\importHandling.ml
    |   |   |-- haxe\src\context\display\statistics.ml
    |   |   `-- haxe\src\context\display\syntaxExplorer.ml
    |   |-- haxe\src\context\memory.ml
    |   |-- haxe\src\context\nativeLibraries.ml
    |   |-- haxe\src\context\nativeLibraryHandler.ml
    |   |-- haxe\src\context\purityState.ml
    |   |-- haxe\src\context\sourcemaps.ml
    |   `-- haxe\src\context\typecore.ml
    |-- haxe\src\core
    |   |-- haxe\src\core\abstract.ml
    |   |-- haxe\src\core\ast.ml
    |   |-- haxe\src\core\define.ml
    |   |-- haxe\src\core\display
    |   |   |-- haxe\src\core\display\completionItem.ml
    |   |   |-- haxe\src\core\display\displayPosition.ml
    |   |   `-- haxe\src\core\display\javadoc.ml
    |   |-- haxe\src\core\displayTypes.ml
    |   |-- haxe\src\core\ds
    |   |   |-- haxe\src\core\ds\priorityQueue.ml
    |   |   `-- haxe\src\core\ds\ring.ml
    |   |-- haxe\src\core\dune
    |   |-- haxe\src\core\error.ml
    |   |-- haxe\src\core\globals.ml
    |   |-- haxe\src\core\inheritDoc.ml
    |   |-- haxe\src\core\json
    |   |   |-- haxe\src\core\json\genjson.ml
    |   |   |-- haxe\src\core\json\jsonRequest.ml
    |   |   |-- haxe\src\core\json\jsonRpc.ml
    |   |   |-- haxe\src\core\json\jsonRpcSocket.ml
    |   |   `-- haxe\src\core\json\jsonrpc_handler.ml
    |   |-- haxe\src\core\meta.ml
    |   |-- haxe\src\core\numeric.ml
    |   |-- haxe\src\core\path.ml
    |   |-- haxe\src\core\socket.ml
    |   |-- haxe\src\core\stringError.ml
    |   |-- haxe\src\core\stringHelper.ml
    |   |-- haxe\src\core\tFunctions.ml
    |   |-- haxe\src\core\tOther.ml
    |   |-- haxe\src\core\tPrinting.ml
    |   |-- haxe\src\core\tType.ml
    |   |-- haxe\src\core\tUnification.ml
    |   |-- haxe\src\core\texpr.ml
    |   |-- haxe\src\core\timer.ml
    |   |-- haxe\src\core\type.ml
    |   |-- haxe\src\core\warning.ml
    |   `-- haxe\src\core\withType.ml
    |-- haxe\src\dune
    |-- haxe\src\filters
    |   |-- haxe\src\filters\ES6Ctors.ml
    |   |-- haxe\src\filters\capturedVars.ml
    |   |-- haxe\src\filters\defaultArguments.ml
    |   |-- haxe\src\filters\exceptions.ml
    |   |-- haxe\src\filters\filters.ml
    |   |-- haxe\src\filters\filtersCommon.ml
    |   |-- haxe\src\filters\localUsage.ml
    |   |-- haxe\src\filters\renameVars.ml
    |   |-- haxe\src\filters\tre.ml
    |   `-- haxe\src\filters\varLazifier.ml
    |-- haxe\src\generators
    |   |-- haxe\src\generators\flashProps.ml
    |   |-- haxe\src\generators\gencpp.ml
    |   |-- haxe\src\generators\gencs.ml
    |   |-- haxe\src\generators\genhl.ml
    |   |-- haxe\src\generators\genhxold.ml
    |   |-- haxe\src\generators\genjava.ml
    |   |-- haxe\src\generators\genjs.ml
    |   |-- haxe\src\generators\genjvm.ml
    |   |-- haxe\src\generators\genlua.ml
    |   |-- haxe\src\generators\genneko.ml
    |   |-- haxe\src\generators\genphp7.ml
    |   |-- haxe\src\generators\genpy.ml
    |   |-- haxe\src\generators\genshared.ml
    |   |-- haxe\src\generators\genswf.ml
    |   |-- haxe\src\generators\genswf9.ml
    |   |-- haxe\src\generators\hl2c.ml
    |   |-- haxe\src\generators\hlcode.ml
    |   |-- haxe\src\generators\hlinterp.ml
    |   |-- haxe\src\generators\hlopt.ml
    |   `-- haxe\src\generators\jvm
    |       |-- haxe\src\generators\jvm\jvmAttribute.ml
    |       |-- haxe\src\generators\jvm\jvmBuilder.ml
    |       |-- haxe\src\generators\jvm\jvmClass.ml
    |       |-- haxe\src\generators\jvm\jvmCode.ml
    |       |-- haxe\src\generators\jvm\jvmConstantPool.ml
    |       |-- haxe\src\generators\jvm\jvmData.ml
    |       |-- haxe\src\generators\jvm\jvmFunctions.ml
    |       |-- haxe\src\generators\jvm\jvmGlobals.ml
    |       |-- haxe\src\generators\jvm\jvmMethod.ml
    |       |-- haxe\src\generators\jvm\jvmSignature.ml
    |       |-- haxe\src\generators\jvm\jvmVerificationTypeInfo.ml
    |       `-- haxe\src\generators\jvm\jvmWriter.ml
    |-- haxe\src\macro
    |   |-- haxe\src\macro\eval
    |   |   |-- haxe\src\macro\eval\EvalStackTrace.ml
    |   |   |-- haxe\src\macro\eval\bytes
    |   |   |   |-- haxe\src\macro\eval\bytes\evalBytesLower.ml
    |   |   |   |-- haxe\src\macro\eval\bytes\evalBytesUpper.ml
    |   |   |   |-- haxe\src\macro\eval\bytes\evalBytes_E_L79.ml
    |   |   |   |-- haxe\src\macro\eval\bytes\evalBytes_L1020.ml
    |   |   |   |-- haxe\src\macro\eval\bytes\evalBytes_U1021.ml
    |   |   |   `-- haxe\src\macro\eval\bytes\evalBytes_U79.ml
    |   |   |-- haxe\src\macro\eval\evalArray.ml
    |   |   |-- haxe\src\macro\eval\evalBytes.ml
    |   |   |-- haxe\src\macro\eval\evalContext.ml
    |   |   |-- haxe\src\macro\eval\evalDebug.ml
    |   |   |-- haxe\src\macro\eval\evalDebugMisc.ml
    |   |   |-- haxe\src\macro\eval\evalDebugSocket.ml
    |   |   |-- haxe\src\macro\eval\evalDecode.ml
    |   |   |-- haxe\src\macro\eval\evalEmitter.ml
    |   |   |-- haxe\src\macro\eval\evalEncode.ml
    |   |   |-- haxe\src\macro\eval\evalExceptions.ml
    |   |   |-- haxe\src\macro\eval\evalField.ml
    |   |   |-- haxe\src\macro\eval\evalHash.ml
    |   |   |-- haxe\src\macro\eval\evalIntegers.ml
    |   |   |-- haxe\src\macro\eval\evalJit.ml
    |   |   |-- haxe\src\macro\eval\evalJitContext.ml
    |   |   |-- haxe\src\macro\eval\evalLuv.ml
    |   |   |-- haxe\src\macro\eval\evalMain.ml
    |   |   |-- haxe\src\macro\eval\evalMisc.ml
    |   |   |-- haxe\src\macro\eval\evalPrinting.ml
    |   |   |-- haxe\src\macro\eval\evalPrototype.ml
    |   |   |-- haxe\src\macro\eval\evalSsl.ml
    |   |   |-- haxe\src\macro\eval\evalStdLib.ml
    |   |   |-- haxe\src\macro\eval\evalString.ml
    |   |   |-- haxe\src\macro\eval\evalThread.ml
    |   |   `-- haxe\src\macro\eval\evalValue.ml
    |   `-- haxe\src\macro\macroApi.ml
    |-- haxe\src\optimization
    |   |-- haxe\src\optimization\analyzer.ml
    |   |-- haxe\src\optimization\analyzerConfig.ml
    |   |-- haxe\src\optimization\analyzerTexpr.ml
    |   |-- haxe\src\optimization\analyzerTexprTransformer.ml
    |   |-- haxe\src\optimization\analyzerTypes.ml
    |   |-- haxe\src\optimization\dce.ml
    |   |-- haxe\src\optimization\inline.ml
    |   |-- haxe\src\optimization\inlineConstructors.ml
    |   |-- haxe\src\optimization\optimizer.ml
    |   `-- haxe\src\optimization\optimizerTexpr.ml
    |-- haxe\src\syntax
    |   |-- haxe\src\syntax\dune
    |   |-- haxe\src\syntax\grammar.mly
    |   |-- haxe\src\syntax\lexer.ml
    |   |-- haxe\src\syntax\parser.ml
    |   |-- haxe\src\syntax\parserEntry.ml
    |   |-- haxe\src\syntax\reification.ml
    |   `-- haxe\src\syntax\semver.ml
    `-- haxe\src\typing
        |-- haxe\src\typing\callUnification.ml
        |-- haxe\src\typing\calls.ml
        |-- haxe\src\typing\fieldAccess.ml
        |-- haxe\src\typing\fields.ml
        |-- haxe\src\typing\finalization.ml
        |-- haxe\src\typing\forLoop.ml
        |-- haxe\src\typing\functionArguments.ml
        |-- haxe\src\typing\generic.ml
        |-- haxe\src\typing\instanceBuilder.ml
        |-- haxe\src\typing\macroContext.ml
        |-- haxe\src\typing\magicTypes.ml
        |-- haxe\src\typing\matcher.ml
        |-- haxe\src\typing\nullSafety.ml
        |-- haxe\src\typing\operators.ml
        |-- haxe\src\typing\overloadResolution.ml
        |-- haxe\src\typing\strictMeta.ml
        |-- haxe\src\typing\typeload.ml
        |-- haxe\src\typing\typeloadCheck.ml
        |-- haxe\src\typing\typeloadFields.ml
        |-- haxe\src\typing\typeloadFunction.ml
        |-- haxe\src\typing\typeloadModule.ml
        |-- haxe\src\typing\typeloadParse.ml
        |-- haxe\src\typing\typer.ml
        |-- haxe\src\typing\typerBase.ml
        |-- haxe\src\typing\typerDisplay.ml
        `-- haxe\src\typing\typerDotPath.ml



## 🐥 Sources List - Iron
                                                         **Sources List - Iron**

Iron 源代码目标结构及类型关系：

    Iron Sources
    |-- iron\App.hx
    |-- iron\RenderPath.hx
    |-- iron\Scene.hx
    |-- iron\Trait.hx
    |-- iron.data
    |   |-- iron\data\Armature.hx
    |   |-- iron\data\CameraData.hx
    |   |-- iron\data\ConstData.hx
    |   |-- iron\data\Data.hx
    |   |-- iron\data\Geometry.hx
    |   |-- iron\data\LightData.hx
    |   |-- iron\data\MaterialData.hx
    |   |-- iron\data\MeshBatch.hx
    |   |-- iron\data\MeshData.hx
    |   |-- iron\data\ParticleData.hx
    |   |-- iron\data\ProbeData.hx
    |   |-- iron\data\SceneFormat.hx
    |   |-- iron\data\SceneStream.hx
    |   |-- iron\data\ShaderData.hx
    |   |-- iron\data\TerrainStream.hx
    |   |-- iron\data\Wasm.hx
    |   `-- iron\data\WorldData.hx
    |-- iron.math
    |   |-- iron\math\Mat3.hx
    |   |-- iron\math\Mat4.hx
    |   |-- iron\math\Quat.hx
    |   |-- iron\math\Ray.hx
    |   |-- iron\math\RayCaster.hx
    |   |-- iron\math\Vec2.hx
    |   |-- iron\math\Vec3.hx
    |   `-- iron\math\Vec4.hx
    |-- iron.object
    |   |-- iron\object\Animation.hx
    |   |----> iron\object\BoneAnimation.hx
    |   |----> iron\object\ObjectAnimation.hx
    |   |-- iron\object\Object.hx
    |   |----> iron\object\CameraObject.hx
    |   |----> iron\object\DecalObject.hx
    |   |----> iron\object\LightObject.hx
    |   |----> iron\object\MeshObject.hx
    |   |----> iron\object\ProbeObject.hx
    |   |----> iron\object\SpeakerObject.hx
    |   |-- iron\object\Constraint.hx
    |   |-- iron\object\MorphTarget.hx
    |   |-- iron\object\ParticleSystem.hx
    |   |-- iron\object\Tilesheet.hx
    |   |-- iron\object\Transform.hx
    |   `-- iron\object\Uniforms.hx
    `-- iron.system
        |-- iron\system\ArmPack.hx
        |-- iron\system\Audio.hx
        |-- iron\system\Input.hx
        |-- iron\system\Lz4.hx
        |-- iron\system\Storage.hx
        |-- iron\system\Time.hx
        `-- iron\system\Tween.hx

## 🐥 Sources List - Zui
                                                          **Sources List - Zui**
Immediate Mode UI Library https:\\github.com\armory3d\zui

    |-- zui\LICENSE.md
    |-- zui\README.md
    |-- zui\Sources
    |   `-- zui\Sources\zui
    |       |-- zui\Sources\zui\Ext.hx
    |       |-- zui\Sources\zui\Id.hx
    |       |-- zui\Sources\zui\Nodes.hx
    |       |-- zui\Sources\zui\Themes.hx
    |       `-- zui\Sources\zui\Zui.hx
    |-- zui\changes.md
    |-- zui\checkstyle.json
    `-- zui\examples
        |-- zui\examples\CI
        |   |-- zui\examples\CI\Sources
        |   |   |-- zui\examples\CI\Sources\Elements.hx
        |   |   `-- zui\examples\CI\Sources\Main.hx
        |   `-- zui\examples\CI\khafile.js
        |-- zui\examples\ColorWheel
        |   |-- zui\examples\ColorWheel\Sources
        |   |   |-- zui\examples\ColorWheel\Sources\Elements.hx
        |   |   `-- zui\examples\ColorWheel\Sources\Main.hx
        |   `-- zui\examples\ColorWheel\khafile.js
        |-- zui\examples\Elements
        |   |-- zui\examples\Elements\Sources
        |   |   |-- zui\examples\Elements\Sources\Elements.hx
        |   |   `-- zui\examples\Elements\Sources\Main.hx
        |   `-- zui\examples\Elements\khafile.js
        |-- zui\examples\FileBrowser
        |   |-- zui\examples\FileBrowser\Sources
        |   |   |-- zui\examples\FileBrowser\Sources\Elements.hx
        |   |   `-- zui\examples\FileBrowser\Sources\Main.hx
        |   `-- zui\examples\FileBrowser\khafile.js
        |-- zui\examples\Nodes
        |   |-- zui\examples\Nodes\Sources
        |   |   |-- zui\examples\Nodes\Sources\Elements.hx
        |   |   `-- zui\examples\Nodes\Sources\Main.hx
        |   `-- zui\examples\Nodes\khafile.js
        |-- zui\examples\Scaling
        |   |-- zui\examples\Scaling\Sources
        |   |   |-- zui\examples\Scaling\Sources\Elements.hx
        |   |   `-- zui\examples\Scaling\Sources\Main.hx
        |   `-- zui\examples\Scaling\khafile.js
        `-- zui\examples\SharedAssets
            |-- zui\examples\SharedAssets\DroidSans.ttf
            |-- zui\examples\SharedAssets\black_white_gradient.png
            |-- zui\examples\SharedAssets\color_wheel.png
            `-- zui\examples\SharedAssets\kode.png


## 🐥 Sources List - Krom
                                                         **Sources List - Krom**
https:\\github.com\Kode\Krom


Krom = [Kinc](https:\\github.com\Kode\Kinc) + V8 combined.

Krom is a highly portable runtime for JavaScript based multimedia applications.
It executes [JS](https:\\github.com\luboslenco\krom_jstest) or webassembly
through V8 and is fully supported in [Kha](https:\\github.com\Kode\Kha)
as one of the backends, see [bindings]. Krom is optimized for very fast
development cycles and directly supports hot-patching of code, shaders and assets.
[bindings](https:\\github.com\Kode\Kha\blob\master\Backends\Krom\Krom.hx)

Note that Krom does not rely on web APIs. It rather exposes full,
native hardware capabilities and in particular surpasses WebGL in
features and speed.


Build instructions

* For Windows: Run `node Kinc\make` and compile in Visual Studio for x64
* For macOS: Run `node Kinc\make --noshaders` and compile in Xcode
* For Linux: Run `node Kinc\make --compiler clang --compile`

Running

`krom [assetsdir shadersdir [--flags]]`

If no arguments are provided, assets and shaders are loaded from the executable path.

Debugging

To debug Krom itself, just start it in Visual Studio or Xcode.
Linux IDEs are not yet setup automatically for Krom debugging.
The debug protocol can be debugged using an "attach" debug configuration
in Kode Studio or Visual Studio Code. First start Krom in your C++ IDE
with parameters ala `\path\to\project\build\krom --debug 9988` and then
start a launch config which looks something like this:

`{
    "type": "krom",
    "request": "attach",
    "name": "Krom-Test",
    "preLaunchTask": "Kha: Build for Krom",
    "port": 9988
}`

Armory SDK 中包含了 Krom API 的定义，通过 `Krom` 类型调用其 Krom 导出的 API 函数库。

    Krom\lib\krom.js
    armsdk\Kha\Backends\Krom\Krom.hx

Krom 基于 Nodejs 二次开发，Krom\lib 目录下的脚本是 V8 脚本运行环境初始化程序库，它们同时
通过 internalBinding('krom') 向脚本运行环境导出 C++ 编写的 API。

Krom lib sources

    |-- Krom\lib\_http_agent.js
    |-- Krom\lib\_http_client.js
    |-- Krom\lib\_http_common.js
    |-- Krom\lib\_http_incoming.js
    |-- Krom\lib\_http_outgoing.js
    |-- Krom\lib\_http_server.js
    |-- Krom\lib\_stream_duplex.js
    |-- Krom\lib\_stream_passthrough.js
    |-- Krom\lib\_stream_readable.js
    |-- Krom\lib\_stream_transform.js
    |-- Krom\lib\_stream_wrap.js
    |-- Krom\lib\_stream_writable.js
    |-- Krom\lib\_tls_common.js
    |-- Krom\lib\_tls_wrap.js
    |-- Krom\lib\assert
    |   `-- Krom\lib\assert\strict.js
    |-- Krom\lib\assert.js
    |-- Krom\lib\async_hooks.js
    |-- Krom\lib\buffer.js
    |-- Krom\lib\child_process.js
    |-- Krom\lib\cluster.js
    |-- Krom\lib\console.js
    |-- Krom\lib\constants.js
    |-- Krom\lib\crypto.js
    |-- Krom\lib\dgram.js
    |-- Krom\lib\diagnostics_channel.js
    |-- Krom\lib\dns
    |   `-- Krom\lib\dns\promises.js
    |-- Krom\lib\dns.js
    |-- Krom\lib\domain.js
    |-- Krom\lib\events.js
    |-- Krom\lib\fs
    |   `-- Krom\lib\fs\promises.js
    |-- Krom\lib\fs.js
    |-- Krom\lib\http.js
    |-- Krom\lib\http2.js
    |-- Krom\lib\https.js
    |-- Krom\lib\inspector.js
    |-- Krom\lib\internal
    |   |-- Krom\lib\internal\abort_controller.js
    |   |-- Krom\lib\internal\assert
    |   |   |-- Krom\lib\internal\assert\assertion_error.js
    |   |   `-- Krom\lib\internal\assert\calltracker.js
    |   |-- Krom\lib\internal\assert.js
    |   |-- Krom\lib\internal\async_hooks.js
    |   |-- Krom\lib\internal\blob.js
    |   |-- Krom\lib\internal\blocklist.js
    |   |-- Krom\lib\internal\bootstrap
    |   |   |-- Krom\lib\internal\bootstrap\browser.js
    |   |   |-- Krom\lib\internal\bootstrap\environment.js
    |   |   |-- Krom\lib\internal\bootstrap\loaders.js
    |   |   |-- Krom\lib\internal\bootstrap\node.js
    |   |   |-- Krom\lib\internal\bootstrap\pre_execution.js
    |   |   `-- Krom\lib\internal\bootstrap\switches
    |   |       |-- Krom\lib\internal\bootstrap\switches\does_not_own_process_state.js
    |   |       |-- Krom\lib\internal\bootstrap\switches\does_own_process_state.js
    |   |       |-- Krom\lib\internal\bootstrap\switches\is_main_thread.js
    |   |       `-- Krom\lib\internal\bootstrap\switches\is_not_main_thread.js
    |   |-- Krom\lib\internal\buffer.js
    |   |-- Krom\lib\internal\child_process
    |   |   `-- Krom\lib\internal\child_process\serialization.js
    |   |-- Krom\lib\internal\child_process.js
    |   |-- Krom\lib\internal\cli_table.js
    |   |-- Krom\lib\internal\cluster
    |   |   |-- Krom\lib\internal\cluster\child.js
    |   |   |-- Krom\lib\internal\cluster\primary.js
    |   |   |-- Krom\lib\internal\cluster\round_robin_handle.js
    |   |   |-- Krom\lib\internal\cluster\shared_handle.js
    |   |   |-- Krom\lib\internal\cluster\utils.js
    |   |   `-- Krom\lib\internal\cluster\worker.js
    |   |-- Krom\lib\internal\console
    |   |   |-- Krom\lib\internal\console\constructor.js
    |   |   `-- Krom\lib\internal\console\global.js
    |   |-- Krom\lib\internal\constants.js
    |   |-- Krom\lib\internal\crypto
    |   |   |-- Krom\lib\internal\crypto\aes.js
    |   |   |-- Krom\lib\internal\crypto\certificate.js
    |   |   |-- Krom\lib\internal\crypto\cipher.js
    |   |   |-- Krom\lib\internal\crypto\diffiehellman.js
    |   |   |-- Krom\lib\internal\crypto\dsa.js
    |   |   |-- Krom\lib\internal\crypto\ec.js
    |   |   |-- Krom\lib\internal\crypto\hash.js
    |   |   |-- Krom\lib\internal\crypto\hashnames.js
    |   |   |-- Krom\lib\internal\crypto\hkdf.js
    |   |   |-- Krom\lib\internal\crypto\keygen.js
    |   |   |-- Krom\lib\internal\crypto\keys.js
    |   |   |-- Krom\lib\internal\crypto\mac.js
    |   |   |-- Krom\lib\internal\crypto\pbkdf2.js
    |   |   |-- Krom\lib\internal\crypto\random.js
    |   |   |-- Krom\lib\internal\crypto\rsa.js
    |   |   |-- Krom\lib\internal\crypto\scrypt.js
    |   |   |-- Krom\lib\internal\crypto\sig.js
    |   |   |-- Krom\lib\internal\crypto\util.js
    |   |   |-- Krom\lib\internal\crypto\webcrypto.js
    |   |   `-- Krom\lib\internal\crypto\x509.js
    |   |-- Krom\lib\internal\debugger
    |   |   |-- Krom\lib\internal\debugger\inspect.js
    |   |   |-- Krom\lib\internal\debugger\inspect_client.js
    |   |   `-- Krom\lib\internal\debugger\inspect_repl.js
    |   |-- Krom\lib\internal\dgram.js
    |   |-- Krom\lib\internal\dns
    |   |   |-- Krom\lib\internal\dns\promises.js
    |   |   `-- Krom\lib\internal\dns\utils.js
    |   |-- Krom\lib\internal\dtrace.js
    |   |-- Krom\lib\internal\encoding.js
    |   |-- Krom\lib\internal\error_serdes.js
    |   |-- Krom\lib\internal\errors.js
    |   |-- Krom\lib\internal\event_target.js
    |   |-- Krom\lib\internal\fixed_queue.js
    |   |-- Krom\lib\internal\freelist.js
    |   |-- Krom\lib\internal\freeze_intrinsics.js
    |   |-- Krom\lib\internal\fs
    |   |   |-- Krom\lib\internal\fs\cp
    |   |   |   |-- Krom\lib\internal\fs\cp\cp-sync.js
    |   |   |   `-- Krom\lib\internal\fs\cp\cp.js
    |   |   |-- Krom\lib\internal\fs\dir.js
    |   |   |-- Krom\lib\internal\fs\promises.js
    |   |   |-- Krom\lib\internal\fs\read_file_context.js
    |   |   |-- Krom\lib\internal\fs\rimraf.js
    |   |   |-- Krom\lib\internal\fs\streams.js
    |   |   |-- Krom\lib\internal\fs\sync_write_stream.js
    |   |   |-- Krom\lib\internal\fs\utils.js
    |   |   `-- Krom\lib\internal\fs\watchers.js
    |   |-- Krom\lib\internal\heap_utils.js
    |   |-- Krom\lib\internal\histogram.js
    |   |-- Krom\lib\internal\http.js
    |   |-- Krom\lib\internal\http2
    |   |   |-- Krom\lib\internal\http2\compat.js
    |   |   |-- Krom\lib\internal\http2\core.js
    |   |   `-- Krom\lib\internal\http2\util.js
    |   |-- Krom\lib\internal\idna.js
    |   |-- Krom\lib\internal\inspector_async_hook.js
    |   |-- Krom\lib\internal\js_stream_socket.js
    |   |-- Krom\lib\internal\legacy
    |   |   `-- Krom\lib\internal\legacy\processbinding.js
    |   |-- Krom\lib\internal\linkedlist.js
    |   |-- Krom\lib\internal\main
    |   |   |-- Krom\lib\internal\main\check_syntax.js
    |   |   |-- Krom\lib\internal\main\eval_stdin.js
    |   |   |-- Krom\lib\internal\main\eval_string.js
    |   |   |-- Krom\lib\internal\main\inspect.js
    |   |   |-- Krom\lib\internal\main\print_help.js
    |   |   |-- Krom\lib\internal\main\prof_process.js
    |   |   |-- Krom\lib\internal\main\repl.js
    |   |   |-- Krom\lib\internal\main\run_main_module.js
    |   |   `-- Krom\lib\internal\main\worker_thread.js
    |   |-- Krom\lib\internal\modules
    |   |   |-- Krom\lib\internal\modules\cjs
    |   |   |   |-- Krom\lib\internal\modules\cjs\helpers.js
    |   |   |   `-- Krom\lib\internal\modules\cjs\loader.js
    |   |   |-- Krom\lib\internal\modules\esm
    |   |   |   |-- Krom\lib\internal\modules\esm\assert.js
    |   |   |   |-- Krom\lib\internal\modules\esm\create_dynamic_module.js
    |   |   |   |-- Krom\lib\internal\modules\esm\fetch_module.js
    |   |   |   |-- Krom\lib\internal\modules\esm\formats.js
    |   |   |   |-- Krom\lib\internal\modules\esm\get_format.js
    |   |   |   |-- Krom\lib\internal\modules\esm\get_source.js
    |   |   |   |-- Krom\lib\internal\modules\esm\handle_process_exit.js
    |   |   |   |-- Krom\lib\internal\modules\esm\initialize_import_meta.js
    |   |   |   |-- Krom\lib\internal\modules\esm\load.js
    |   |   |   |-- Krom\lib\internal\modules\esm\loader.js
    |   |   |   |-- Krom\lib\internal\modules\esm\module_job.js
    |   |   |   |-- Krom\lib\internal\modules\esm\module_map.js
    |   |   |   |-- Krom\lib\internal\modules\esm\resolve.js
    |   |   |   `-- Krom\lib\internal\modules\esm\translators.js
    |   |   |-- Krom\lib\internal\modules\package_json_reader.js
    |   |   `-- Krom\lib\internal\modules\run_main.js
    |   |-- Krom\lib\internal\net.js
    |   |-- Krom\lib\internal\options.js
    |   |-- Krom\lib\internal\per_context
    |   |   |-- Krom\lib\internal\per_context\domexception.js
    |   |   |-- Krom\lib\internal\per_context\messageport.js
    |   |   `-- Krom\lib\internal\per_context\primordials.js
    |   |-- Krom\lib\internal\perf
    |   |   |-- Krom\lib\internal\perf\event_loop_delay.js
    |   |   |-- Krom\lib\internal\perf\event_loop_utilization.js
    |   |   |-- Krom\lib\internal\perf\nodetiming.js
    |   |   |-- Krom\lib\internal\perf\observe.js
    |   |   |-- Krom\lib\internal\perf\performance.js
    |   |   |-- Krom\lib\internal\perf\performance_entry.js
    |   |   |-- Krom\lib\internal\perf\timerify.js
    |   |   |-- Krom\lib\internal\perf\usertiming.js
    |   |   `-- Krom\lib\internal\perf\utils.js
    |   |-- Krom\lib\internal\policy
    |   |   |-- Krom\lib\internal\policy\manifest.js
    |   |   `-- Krom\lib\internal\policy\sri.js
    |   |-- Krom\lib\internal\priority_queue.js
    |   |-- Krom\lib\internal\process
    |   |   |-- Krom\lib\internal\process\esm_loader.js
    |   |   |-- Krom\lib\internal\process\execution.js
    |   |   |-- Krom\lib\internal\process\per_thread.js
    |   |   |-- Krom\lib\internal\process\policy.js
    |   |   |-- Krom\lib\internal\process\promises.js
    |   |   |-- Krom\lib\internal\process\report.js
    |   |   |-- Krom\lib\internal\process\signal.js
    |   |   |-- Krom\lib\internal\process\task_queues.js
    |   |   |-- Krom\lib\internal\process\warning.js
    |   |   `-- Krom\lib\internal\process\worker_thread_only.js
    |   |-- Krom\lib\internal\promise_hooks.js
    |   |-- Krom\lib\internal\querystring.js
    |   |-- Krom\lib\internal\readline
    |   |   |-- Krom\lib\internal\readline\callbacks.js
    |   |   |-- Krom\lib\internal\readline\emitKeypressEvents.js
    |   |   |-- Krom\lib\internal\readline\interface.js
    |   |   |-- Krom\lib\internal\readline\promises.js
    |   |   `-- Krom\lib\internal\readline\utils.js
    |   |-- Krom\lib\internal\readme.md
    |   |-- Krom\lib\internal\repl
    |   |   |-- Krom\lib\internal\repl\await.js
    |   |   |-- Krom\lib\internal\repl\history.js
    |   |   `-- Krom\lib\internal\repl\utils.js
    |   |-- Krom\lib\internal\repl.js
    |   |-- Krom\lib\internal\socket_list.js
    |   |-- Krom\lib\internal\socketaddress.js
    |   |-- Krom\lib\internal\source_map
    |   |   |-- Krom\lib\internal\source_map\prepare_stack_trace.js
    |   |   |-- Krom\lib\internal\source_map\source_map.js
    |   |   `-- Krom\lib\internal\source_map\source_map_cache.js
    |   |-- Krom\lib\internal\stream_base_commons.js
    |   |-- Krom\lib\internal\streams
    |   |   |-- Krom\lib\internal\streams\add-abort-signal.js
    |   |   |-- Krom\lib\internal\streams\buffer_list.js
    |   |   |-- Krom\lib\internal\streams\compose.js
    |   |   |-- Krom\lib\internal\streams\destroy.js
    |   |   |-- Krom\lib\internal\streams\duplex.js
    |   |   |-- Krom\lib\internal\streams\duplexify.js
    |   |   |-- Krom\lib\internal\streams\end-of-stream.js
    |   |   |-- Krom\lib\internal\streams\from.js
    |   |   |-- Krom\lib\internal\streams\lazy_transform.js
    |   |   |-- Krom\lib\internal\streams\legacy.js
    |   |   |-- Krom\lib\internal\streams\operators.js
    |   |   |-- Krom\lib\internal\streams\passthrough.js
    |   |   |-- Krom\lib\internal\streams\pipeline.js
    |   |   |-- Krom\lib\internal\streams\readable.js
    |   |   |-- Krom\lib\internal\streams\state.js
    |   |   |-- Krom\lib\internal\streams\transform.js
    |   |   |-- Krom\lib\internal\streams\utils.js
    |   |   `-- Krom\lib\internal\streams\writable.js
    |   |-- Krom\lib\internal\structured_clone.js
    |   |-- Krom\lib\internal\test
    |   |   |-- Krom\lib\internal\test\binding.js
    |   |   `-- Krom\lib\internal\test\transfer.js
    |   |-- Krom\lib\internal\timers.js
    |   |-- Krom\lib\internal\tls
    |   |   |-- Krom\lib\internal\tls\secure-context.js
    |   |   `-- Krom\lib\internal\tls\secure-pair.js
    |   |-- Krom\lib\internal\trace_events_async_hooks.js
    |   |-- Krom\lib\internal\tty.js
    |   |-- Krom\lib\internal\url.js
    |   |-- Krom\lib\internal\util
    |   |   |-- Krom\lib\internal\util\comparisons.js
    |   |   |-- Krom\lib\internal\util\debuglog.js
    |   |   |-- Krom\lib\internal\util\inspect.js
    |   |   |-- Krom\lib\internal\util\inspector.js
    |   |   |-- Krom\lib\internal\util\iterable_weak_map.js
    |   |   `-- Krom\lib\internal\util\types.js
    |   |-- Krom\lib\internal\util.js
    |   |-- Krom\lib\internal\v8_prof_polyfill.js
    |   |-- Krom\lib\internal\v8_prof_processor.js
    |   |-- Krom\lib\internal\validators.js
    |   |-- Krom\lib\internal\vm
    |   |   `-- Krom\lib\internal\vm\module.js
    |   |-- Krom\lib\internal\watchdog.js
    |   |-- Krom\lib\internal\webstreams
    |   |   |-- Krom\lib\internal\webstreams\adapters.js
    |   |   |-- Krom\lib\internal\webstreams\compression.js
    |   |   |-- Krom\lib\internal\webstreams\encoding.js
    |   |   |-- Krom\lib\internal\webstreams\queuingstrategies.js
    |   |   |-- Krom\lib\internal\webstreams\readablestream.js
    |   |   |-- Krom\lib\internal\webstreams\transfer.js
    |   |   |-- Krom\lib\internal\webstreams\transformstream.js
    |   |   |-- Krom\lib\internal\webstreams\util.js
    |   |   `-- Krom\lib\internal\webstreams\writablestream.js
    |   |-- Krom\lib\internal\worker
    |   |   |-- Krom\lib\internal\worker\io.js
    |   |   `-- Krom\lib\internal\worker\js_transferable.js
    |   `-- Krom\lib\internal\worker.js
    |-- Krom\lib\krom.js
    |-- Krom\lib\module.js
    |-- Krom\lib\net.js
    |-- Krom\lib\os.js
    |-- Krom\lib\path
    |   |-- Krom\lib\path\posix.js
    |   `-- Krom\lib\path\win32.js
    |-- Krom\lib\path.js
    |-- Krom\lib\perf_hooks.js
    |-- Krom\lib\process.js
    |-- Krom\lib\punycode.js
    |-- Krom\lib\querystring.js
    |-- Krom\lib\readline
    |   `-- Krom\lib\readline\promises.js
    |-- Krom\lib\readline.js
    |-- Krom\lib\repl.js
    |-- Krom\lib\stream
    |   |-- Krom\lib\stream\consumers.js
    |   |-- Krom\lib\stream\promises.js
    |   `-- Krom\lib\stream\web.js
    |-- Krom\lib\stream.js
    |-- Krom\lib\string_decoder.js
    |-- Krom\lib\sys.js
    |-- Krom\lib\timers
    |   `-- Krom\lib\timers\promises.js
    |-- Krom\lib\timers.js
    |-- Krom\lib\tls.js
    |-- Krom\lib\trace_events.js
    |-- Krom\lib\tty.js
    |-- Krom\lib\url.js
    |-- Krom\lib\util
    |   `-- Krom\lib\util\types.js
    |-- Krom\lib\util.js
    |-- Krom\lib\v8.js
    |-- Krom\lib\vm.js
    |-- Krom\lib\wasi.js
    |-- Krom\lib\worker_threads.js
    `-- Krom\lib\zlib.js


## 🐥 Sources List - Armory Logic Nodes

Armory 逻辑节点设计时初始化脚本，初始化方法由 nodes_logic.py 脚本 `register_nodes()` 
调用，其注册逻辑节点，并生成相应的节点菜单条目：

    armsdk\armory\blender\arm\logicnode\__init__.py
    armsdk\armory\blender\arm\nodes_logic.py:131

初始化脚本使用 Python 模块方法 `pkgutil.walk_packages()` 进行目录递归查找并加载。

所有节点及分类注册记录在以下命名空间，分类结构采用 Sections/Categories/Sections 三级结构，
分类上下有分区，后一级分区包含节点列表，比如以下查询 basic 分区 Logic 分类 flow 分区下的节点：

    arm.logicnode.arm_nodes.nodes
    arm.logicnode.arm_nodes.category_items
    arm.logicnode.arm_nodes.category_items['basic'][0].node_sections['flow']

以下代码可以打印所有 Armory 逻辑节点设计时类型，及其运行时类型对照：

```py
from arm.logicnode.arm_nodes import category_items
for s1st in category_items:
    for s2nd in category_items[s1st]:
        for s3rd in s2nd.node_sections:
            for s4th in s2nd.node_sections[s3rd]:
                print('| %s -> %s -> %s | %s | %s' % (s1st, s2nd.name, s3rd, s4th.label, s4th.nodetype))
```

Armory 逻辑节点命名按 bl_idname 约定，去掉 LN 前缀即为运行类型：

|         Nodes Categorys          |             Labels            |            Node Types           |
|----------------------------------|-------------------------------|---------------------------------|
| basic -> Logic -> flow           | Invert Output                 | LNInverseNode                   |
| basic -> Logic -> flow           | Loop                          | LNLoopNode                      |
| basic -> Logic -> flow           | Loop Break                    | LNLoopBreakNode                 |
| basic -> Logic -> flow           | Loop Continue                 | LNLoopContinueNode              |
| basic -> Logic -> flow           | Merge                         | LNMergeNode                     |
| basic -> Logic -> flow           | Once Per Frame                | LNOncePerFrameNode              |
| basic -> Logic -> flow           | Output Sequence               | LNSequenceNode                  |
| basic -> Logic -> flow           | While True                    | LNWhileNode                     |
| basic -> Logic -> function       | Call Function                 | LNCallFunctionNode              |
| basic -> Logic -> function       | Function                      | LNFunctionNode                  |
| basic -> Logic -> function       | Function Output               | LNFunctionOutputNode            |
| basic -> Logic                   | Branch                        | LNBranchNode                    |
| basic -> Logic                   | Case Index                    | LNCaseIndexNode                 |
| basic -> Logic                   | Gate                          | LNGateNode                      |
| basic -> Logic                   | Invert Boolean                | LNNotNode                       |
| basic -> Logic                   | Is False                      | LNIsFalseNode                   |
| basic -> Logic                   | Is Not Null                   | LNIsNotNoneNode                 |
| basic -> Logic                   | Is Null                       | LNIsNoneNode                    |
| basic -> Logic                   | Is True                       | LNIsTrueNode                    |
| basic -> Logic                   | Null                          | LNNoneNode                      |
| basic -> Logic                   | Output to Boolean             | LNToBoolNode                    |
| basic -> Logic                   | Pulse                         | LNPulseNode                     |
| basic -> Logic                   | Select                        | LNSelectNode                    |
| basic -> Logic                   | Switch Output                 | LNSwitchNode                    |
| basic -> Logic                   | Value Changed                 | LNValueChangedNode              |
| basic -> Event                   | On Application State          | LNOnApplicationStateNode        |
| basic -> Event                   | On Init                       | LNOnInitNode                    |
| basic -> Event                   | On Render2D                   | LNOnRender2DNode                |
| basic -> Event                   | On Timer                      | LNOnTimerNode                   |
| basic -> Event                   | On Update                     | LNOnUpdateNode                  |
| basic -> Event -> custom         | On Event                      | LNOnEventNode                   |
| basic -> Event -> custom         | Send Event to Object          | LNSendEventNode                 |
| basic -> Event -> custom         | Send Global Event             | LNSendGlobalEventNode           |
| basic -> Input -> keyboard       | Keyboard                      | LNMergedKeyboardNode            |
| basic -> Input -> mouse          | Cursor In Region              | LNCursorInRegionNode            |
| basic -> Input -> mouse          | Get Cursor Location           | LNGetCursorLocationNode         |
| basic -> Input -> mouse          | Get Cursor State              | LNGetCursorStateNode            |
| basic -> Input -> mouse          | Get Mouse Movement            | LNGetMouseMovementNode          |
| basic -> Input -> mouse          | Mouse                         | LNMergedMouseNode               |
| basic -> Input -> mouse          | Set Cursor State              | LNSetCursorStateNode            |
| basic -> Input -> gamepad        | Gamepad                       | LNMergedGamepadNode             |
| basic -> Input -> gamepad        | Gamepad Coords                | LNGamepadCoordsNode             |
| basic -> Input -> gamepad        | Gamepad Sticks                | LNGamepadSticksNode             |
| basic -> Input -> surface        | Get Touch Location            | LNGetTouchLocationNode          |
| basic -> Input -> surface        | Get Touch Movement            | LNGetTouchMovementNode          |
| basic -> Input -> surface        | Touch                         | LNMergedSurfaceNode             |
| basic -> Input -> surface        | Touch In Region               | LNTouchInRegionNode             |
| basic -> Input -> sensor         | Sensor Coords                 | LNSensorCoordsNode              |
| basic -> Input -> virtual        | Virtual Button                | LNMergedVirtualButtonNode       |
| basic -> Input                   | Get Gamepad Started           | LNGetGamepadStartedNode         |
| basic -> Input                   | Get Input Map Key             | LNGetInputMapKeyNode            |
| basic -> Input                   | Get Keyboard Started          | LNGetKeyboardStartedNode        |
| basic -> Input                   | Get Mouse Started             | LNGetMouseStartedNode           |
| basic -> Input                   | On Input Map                  | LNOnInputMapNode                |
| basic -> Input                   | Remove Input Map Key          | LNRemoveInputMapKeyNode         |
| basic -> Input                   | Set Input Map Key             | LNSetInputMapKeyNode            |
| basic -> Input -> Input          | On Swipe                      | LNOnSwipeNode                   |
| basic -> Input -> Input          | On Tap Screen                 | LNOnTapScreen                   |
| basic -> Native -> haxe          | Call Haxe Static              | LNCallHaxeStaticNode            |
| basic -> Native -> haxe          | Expression                    | LNExpressionNode                |
| basic -> Native -> haxe          | Get Haxe Property             | LNGetHaxePropertyNode           |
| basic -> Native -> haxe          | Script                        | LNScriptNode                    |
| basic -> Native -> haxe          | Set Haxe Property             | LNSetHaxePropertyNode           |
| basic -> Native                  | Clear Console                 | LNClearConsoleNode              |
| basic -> Native                  | Detect Mobile Browser         | LNDetectMobileBrowserNode       |
| basic -> Native                  | Load URL                      | LNLoadUrlNode                   |
| basic -> Native                  | Print                         | LNPrintNode                     |
| basic -> Native                  | Shutdown                      | LNShutdownNode                  |
| basic -> Native -> Native        | Get Date and Time             | LNGetDateTimeNode               |
| basic -> Native -> Native        | Get System Language           | LNGetSystemLanguage             |
| basic -> Native -> Native        | Get System Name               | LNGetSystemName                 |
| basic -> Native -> Native        | Set Vibrate                   | LNSetVibrateNode                |
| basic -> Native -> file          | Read File                     | LNReadFileNode                  |
| basic -> Native -> file          | Read JSON                     | LNReadJsonNode                  |
| basic -> Native -> file          | Read Storage                  | LNReadStorageNode               |
| basic -> Native -> file          | Write File                    | LNWriteFileNode                 |
| basic -> Native -> file          | Write JSON                    | LNWriteJsonNode                 |
| basic -> Native -> file          | Write Storage                 | LNWriteStorageNode              |
| data -> Camera                   | Get Camera Active             | LNActiveCameraNode              |
| data -> Camera                   | Get Camera Aspect             | LNGetCameraAspectNode           |
| data -> Camera                   | Get Camera FOV                | LNGetCameraFovNode              |
| data -> Camera                   | Get Camera Ortho Scale        | LNGetCameraScaleNode            |
| data -> Camera                   | Get Camera Start End          | LNGetCameraStartEndNode         |
| data -> Camera                   | Get Camera Type               | LNGetCameraTypeNode             |
| data -> Camera                   | Set Camera Active             | LNSetCameraNode                 |
| data -> Camera                   | Set Camera Aspect             | LNSetCameraAspectNode           |
| data -> Camera                   | Set Camera FOV                | LNSetCameraFovNode              |
| data -> Camera                   | Set Camera Ortho Scale        | LNSetCameraScaleNode            |
| data -> Camera                   | Set Camera Start End          | LNSetCameraStartEndNode         |
| data -> Camera                   | Set Camera Type               | LNSetCameraTypeNode             |
| data -> Material                 | Get Object Material           | LNGetMaterialNode               |
| data -> Material                 | Material                      | LNMaterialNode                  |
| data -> Material                 | Set Object Material Slot      | LNSetMaterialSlotNode           |
| data -> Material -> params       | Set Material Image Param      | LNSetMaterialImageParamNode     |
| data -> Material -> params       | Set Material RGB Param        | LNSetMaterialRgbParamNode       |
| data -> Material -> params       | Set Material Value Param      | LNSetMaterialValueParamNode     |
| data -> Light                    | Set Area Light Size           | LNSetAreaLightSizeNode          |
| data -> Light                    | Set Light Color               | LNSetLightColorNode             |
| data -> Light                    | Set Light Strength            | LNSetLightStrengthNode          |
| data -> Light                    | Set Spot Light Blend          | LNSetSpotLightBlendNode         |
| data -> Light                    | Set Spot Light Size           | LNSetSpotLightSizeNode          |
| data -> Object                   | Get Distance                  | LNGetDistanceNode               |
| data -> Object                   | Get Object By Uid             | LNGetObjectByUidNode            |
| data -> Object                   | Get Object by Name            | LNGetObjectNode                 |
| data -> Object                   | Mesh                          | LNMeshNode                      |
| data -> Object                   | Object                        | LNObjectNode                    |
| data -> Object                   | Remove Object                 | LNRemoveObjectNode              |
| data -> Object                   | Self Object                   | LNSelfNode                      |
| data -> Object                   | Spawn Object                  | LNSpawnObjectNode               |
| data -> Object                   | Spawn Object By Name          | LNSpawnObjectByNameNode         |
| data -> Object -> props          | Get Object Mesh               | LNGetMeshNode                   |
| data -> Object -> props          | Get Object Name               | LNGetNameNode                   |
| data -> Object -> props          | Get Object Offscreen          | LNGetObjectOffscreenNode        |
| data -> Object -> props          | Get Object Property           | LNGetPropertyNode               |
| data -> Object -> props          | Get Object Uid                | LNGetUidNode                    |
| data -> Object -> props          | Get Object Visible            | LNGetVisibleNode                |
| data -> Object -> props          | Raycast Closest Object        | LNRaycastClosestObjectNode      |
| data -> Object -> props          | Raycast Object                | LNRaycastObjectNode             |
| data -> Object -> props          | Set Object Mesh               | LNSetMeshNode                   |
| data -> Object -> props          | Set Object Name               | LNSetNameNode                   |
| data -> Object -> props          | Set Object Property           | LNSetPropertyNode               |
| data -> Object -> props          | Set Object Shape Key          | LNSetObjectShapeKeyNode         |
| data -> Object -> props          | Set Object Visible            | LNSetVisibleNode                |
| data -> Object -> relations      | Get Object Child              | LNGetChildNode                  |
| data -> Object -> relations      | Get Object Children           | LNGetChildrenNode               |
| data -> Object -> relations      | Get Object Parent             | LNGetParentNode                 |
| data -> Object -> relations      | Remove Object Parent          | LNClearParentNode               |
| data -> Object -> relations      | Set Object Parent             | LNSetParentNode                 |
| data -> Scene                    | Get Scene Active              | LNActiveSceneNode               |
| data -> Scene                    | Get Scene Root                | LNSceneRootNode                 |
| data -> Scene                    | Global Object                 | LNGlobalObjectNode              |
| data -> Scene                    | Remove Scene Active           | LNRemoveActiveSceneNode         |
| data -> Scene                    | Set Scene Active              | LNSetSceneNode                  |
| data -> Scene                    | Spawn Scene                   | LNSpawnSceneNode                |
| data -> Scene -> collection      | Add Object to Collection      | LNAddObjectToGroupNode          |
| data -> Scene -> collection      | Collection                    | LNGroupNode                     |
| data -> Scene -> collection      | Create Collection             | LNAddGroupNode                  |
| data -> Scene -> collection      | Get Collection                | LNGetGroupNode                  |
| data -> Scene -> collection      | Get Object Collection         | LNGetObjectGroupNode            |
| data -> Scene -> collection      | Remove Collection             | LNRemoveGroupNode               |
| data -> Scene -> collection      | Remove Object from Collection | LNRemoveObjectFromGroupNode     |
| data -> Scene -> collection      | Spawn Collection              | LNSpawnCollectionNode           |
| data -> Trait                    | Add Trait to Object           | LNAddTraitNode                  |
| data -> Trait                    | Get Object Trait              | LNGetTraitNode                  |
| data -> Trait                    | Get Object Traits             | LNGetObjectTraitsNode           |
| data -> Trait                    | Get Trait Name                | LNGetTraitNameNode              |
| data -> Trait                    | Get Trait Paused              | LNGetTraitPausedNode            |
| data -> Trait                    | Remove Trait                  | LNRemoveTraitNode               |
| data -> Trait                    | Remove Trait from Object      | LNRemoveTraitObjectNode         |
| data -> Trait                    | Self Trait                    | LNSelfTraitNode                 |
| data -> Trait                    | Set Trait Paused              | LNSetTraitPausedNode            |
| data -> Trait                    | Trait                         | LNTraitNode                     |
| data -> Network                  | Close Connection              | LNNetworkCloseConnectionNode    |
| data -> Network                  | Create Client                 | LNNetworkClientNode             |
| data -> Network                  | Create Host                   | LNNetworkHostNode               |
| data -> Network                  | Host Close Client             | LNNetworkHostCloseClientNode    |
| data -> Network                  | Host Get IP                   | LNNetworkHostGetIpNode          |
| data -> Network                  | Http Request                  | LNNetworkHttpRequestNode        |
| data -> Network                  | Message Parser                | LNNetworkMessageParserNode      |
| data -> Network                  | Network Event                 | LNNetworkEventNode              |
| data -> Network                  | Open Connection               | LNNetworkOpenConnectionNode     |
| data -> Network                  | Send Message                  | LNNetworkSendMessageNode        |
| motion -> Animation              | Action                        | LNAnimActionNode                |
| motion -> Animation              | Blend Action                  | LNBlendActionNode               |
| motion -> Animation              | Get Action State              | LNAnimationStateNode            |
| motion -> Animation              | On Action Marker              | LNOnActionMarkerNode            |
| motion -> Animation              | Play Action From              | LNPlayActionFromNode            |
| motion -> Animation              | Set Action Paused             | LNSetActionPausedNode           |
| motion -> Animation              | Set Action Speed              | LNSetActionSpeedNode            |
| motion -> Animation              | Set Particle Speed            | LNSetParticleSpeedNode          |
| motion -> Animation -> tilesheet | Get Tilesheet State           | LNGetTilesheetStateNode         |
| motion -> Animation -> tilesheet | Play Tilesheet                | LNPlayTilesheetNode             |
| motion -> Animation -> tilesheet | Set Tilesheet Paused          | LNSetTilesheetPausedNode        |
| motion -> Animation -> armature  | Bone FK                       | LNBoneFKNode                    |
| motion -> Animation -> armature  | Bone IK                       | LNBoneIKNode                    |
| motion -> Animation -> armature  | Get Bone FK IK Only           | LNGetBoneFkIkOnlyNode           |
| motion -> Animation -> armature  | Get Bone Transform            | LNGetBoneTransformNode          |
| motion -> Animation -> armature  | Remove Parent Bone            | LNRemoveParentBoneNode          |
| motion -> Animation -> armature  | Set Bone FK IK Only           | LNSetBoneFkIkOnlyNode           |
| motion -> Animation -> armature  | Set Parent Bone               | LNSetParentBoneNode             |
| motion -> Navmesh                | Get Agent Data                | LNGetAgentDataNode              |
| motion -> Navmesh                | Go to Location                | LNGoToLocationNode              |
| motion -> Navmesh                | Navigable Location            | LNNavigableLocationNode         |
| motion -> Navmesh                | Pick NavMesh Location         | LNPickLocationNode              |
| motion -> Navmesh                | Stop Agent                    | LNStopAgentNode                 |
| motion -> Transform              | Append Transform              | LNAppendTransformNode           |
| motion -> Transform              | Get Object Transform          | LNGetTransformNode              |
| motion -> Transform              | Separate Transform            | LNSeparateTransformNode         |
| motion -> Transform              | Set Object Transform          | LNSetTransformNode              |
| motion -> Transform              | Transform Math                | LNTransformMathNode             |
| motion -> Transform              | Transform to Vector           | LNVectorFromTransformNode       |
| motion -> Transform -> location  | Get Object Location           | LNGetLocationNode               |
| motion -> Transform -> location  | Set Object Location           | LNSetLocationNode               |
| motion -> Transform -> location  | Translate Object              | LNTranslateObjectNode           |
| motion -> Transform -> location  | Translate On Local Axis       | LNTranslateOnLocalAxisNode      |
| motion -> Transform -> location  | World Vector to Local Space   | LNWorldVectorToLocalSpaceNode   |
| motion -> Transform -> rotation  | Get Object Rotation           | LNGetRotationNode               |
| motion -> Transform -> rotation  | Get World Orientation         | LNGetWorldNode                  |
| motion -> Transform -> rotation  | Look At                       | LNLookAtNode                    |
| motion -> Transform -> rotation  | Rotate Object                 | LNRotateObjectNode              |
| motion -> Transform -> rotation  | Separate Rotation             | LNSeparateRotationNode          |
| motion -> Transform -> rotation  | Set Object Rotation           | LNSetRotationNode               |
| motion -> Transform -> rotation  | Vector to Object Orientation  | LNVectorToObjectOrientationNode |
| motion -> Transform -> scale     | Get Object Scale              | LNGetScaleNode                  |
| motion -> Transform -> scale     | Set Object Scale              | LNSetScaleNode                  |
| motion -> Transform -> dimension | Get Object Dimension          | LNGetDimensionNode              |
| motion -> Physics                | Add Rigid Body                | LNAddRigidBodyNode              |
| motion -> Physics                | Get RB Point Velocity         | LNGetPointVelocityNode          |
| motion -> Physics                | Get RB Velocity               | LNGetVelocityNode               |
| motion -> Physics                | Get World Gravity             | LNGetGravityNode                |
| motion -> Physics                | On Volume Trigger             | LNOnVolumeTriggerNode           |
| motion -> Physics                | RB Is Active                  | LNIsRigidBodyActiveNode         |
| motion -> Physics                | Remove RB                     | LNRemovePhysicsNode             |
| motion -> Physics                | Set RB Activation State       | LNSetActivationStateNode        |
| motion -> Physics                | Set RB Friction               | LNSetFrictionNode               |
| motion -> Physics                | Set RB Gravity Enabled        | LNSetGravityEnabledNode         |
| motion -> Physics                | Set RB Velocity               | LNSetVelocityNode               |
| motion -> Physics                | Set World Gravity             | LNSetGravityNode                |
| motion -> Physics -> force       | Apply Force                   | LNApplyForceNode                |
| motion -> Physics -> force       | Apply Force At Location       | LNApplyForceAtLocationNode      |
| motion -> Physics -> force       | Apply Impulse                 | LNApplyImpulseNode              |
| motion -> Physics -> force       | Apply Impulse At Location     | LNApplyImpulseAtLocationNode    |
| motion -> Physics -> force       | Apply Torque                  | LNApplyTorqueNode               |
| motion -> Physics -> force       | Apply Torque Impulse          | LNApplyTorqueImpulseNode        |
| motion -> Physics -> contact     | Get RB Contacts               | LNGetContactsNode               |
| motion -> Physics -> contact     | Get RB First Contact          | LNGetFirstContactNode           |
| motion -> Physics -> contact     | Has Contact                   | LNHasContactNode                |
| motion -> Physics -> contact     | Has Contact Array             | LNHasContactArrayNode           |
| motion -> Physics -> contact     | On Contact                    | LNOnContactNode                 |
| motion -> Physics -> contact     | On Contact Array              | LNOnContactArrayNode            |
| motion -> Physics -> ray         | Convex Cast                   | LNPhysicsConvexCastNode         |
| motion -> Physics -> ray         | Convex Cast On                | LNPhysicsConvexCastOnNode       |
| motion -> Physics -> ray         | Pick RB                       | LNPickObjectNode                |
| motion -> Physics -> ray         | Ray Cast                      | LNCastPhysicsRayNode            |
| motion -> Physics -> ray         | Ray Cast On                   | LNCastPhysicsRayOnNode          |
| motion -> Physics -> add         | Add Physics Constraint        | LNAddPhysicsConstraintNode      |
| motion -> Physics -> add         | Physics Constraint            | LNPhysicsConstraintNode         |
| motion -> Physics -> props       | Get RB Data                   | LNGetRigidBodyDataNode          |
| motion -> Physics -> misc        | Volume Trigger                | LNVolumeTriggerNode             |
| values -> Array -> variable      | Array Boolean                 | LNArrayBooleanNode              |
| values -> Array -> variable      | Array Color                   | LNArrayColorNode                |
| values -> Array -> variable      | Array Dynamic                 | LNArrayNode                     |
| values -> Array -> variable      | Array Float                   | LNArrayFloatNode                |
| values -> Array -> variable      | Array Integer                 | LNArrayIntegerNode              |
| values -> Array -> variable      | Array Object                  | LNArrayObjectNode               |
| values -> Array -> variable      | Array String                  | LNArrayStringNode               |
| values -> Array -> variable      | Array Vector                  | LNArrayVectorNode               |
| values -> Array                  | Array Add                     | LNArrayAddNode                  |
| values -> Array                  | Array Compare                 | LNArrayCompareNode              |
| values -> Array                  | Array Concat                  | LNArrayConcatNode               |
| values -> Array                  | Array Contains                | LNArrayInArrayNode              |
| values -> Array                  | Array Count                   | LNArrayCountNode                |
| values -> Array                  | Array Display                 | LNArrayDisplayNode              |
| values -> Array                  | Array Distinct                | LNArrayDistinctNode             |
| values -> Array                  | Array Filter                  | LNArrayFilterNode               |
| values -> Array                  | Array Get                     | LNArrayGetNode                  |
| values -> Array                  | Array Get Next                | LNArrayGetNextNode              |
| values -> Array                  | Array Get Previous/Next       | LNArrayGetPreviousNextNode      |
| values -> Array                  | Array Index                   | LNArrayIndexNode                |
| values -> Array                  | Array Length                  | LNArrayLengthNode               |
| values -> Array                  | Array Loop                    | LNArrayLoopNode                 |
| values -> Array                  | Array Pop                     | LNArrayPopNode                  |
| values -> Array                  | Array Remove by Index         | LNArrayRemoveNode               |
| values -> Array                  | Array Remove by Value         | LNArrayRemoveValueNode          |
| values -> Array                  | Array Resize                  | LNArrayResizeNode               |
| values -> Array                  | Array Reverse                 | LNArrayReverseNode              |
| values -> Array                  | Array Sample                  | LNArraySampleNode               |
| values -> Array                  | Array Set                     | LNArraySetNode                  |
| values -> Array                  | Array Shift                   | LNArrayShiftNode                |
| values -> Array                  | Array Shuffle                 | LNArrayShuffleNode              |
| values -> Array                  | Array Slice                   | LNArraySliceNode                |
| values -> Array                  | Array Sort                    | LNArraySortNode                 |
| values -> Array                  | Array Splice                  | LNArraySpliceNode               |
| values -> Math                   | Bitwise Math                  | LNBitwiseMathNode               |
| values -> Math                   | Clamp                         | LNClampNode                     |
| values -> Math                   | Compare                       | LNCompareNode                   |
| values -> Math                   | Float Delta Interpolate       | LNFloatDeltaInterpolateNode     |
| values -> Math                   | Key Interpolate Node          | LNKeyInterpolateNode            |
| values -> Math                   | Map Range                     | LNMapRangeNode                  |
| values -> Math                   | Math                          | LNMathNode                      |
| values -> Math                   | Math Expression               | LNMathExpressionNode            |
| values -> Math                   | Mix                           | LNMixNode                       |
| values -> Math                   | Tween Float                   | LNTweenFloatNode                |
| values -> Math                   | Tween Rotation                | LNTweenRotationNode             |
| values -> Math                   | Tween Transform               | LNTweenTransformNode            |
| values -> Math                   | Tween Vector                  | LNTweenVectorNode               |
| values -> Math -> angle          | Deg to Rad                    | LNDegToRadNode                  |
| values -> Math -> angle          | Rad to Deg                    | LNRadToDegNode                  |
| values -> Math -> matrix         | Matrix Math                   | LNMatrixMathNode                |
| values -> Math -> matrix         | Screen to World Space         | LNScreenToWorldSpaceNode        |
| values -> Math -> matrix         | World to Screen Space         | LNWorldToScreenSpaceNode        |
| values -> Math -> color          | Combine HSVA                  | LNCombineColorHSVNode           |
| values -> Math -> color          | Combine RGBA                  | LNCombineColorNode              |
| values -> Math -> color          | Separate HSVA                 | LNSeparateColorHSVNode          |
| values -> Math -> color          | Separate RGBA                 | LNSeparateColorNode             |
| values -> Math -> vector         | Mix Vector                    | LNVectorMixNode                 |
| values -> Math -> vector         | Separate XYZ                  | LNSeparateVectorNode            |
| values -> Math -> vector         | Vector Clamp                  | LNVectorClampToSizeNode         |
| values -> Math -> vector         | Vector Math                   | LNVectorMathNode                |
| values -> Math -> vector         | Vector Move Towards           | LNVectorMoveTowardsNode         |
| values -> Math -> quaternions    | Quaternion Math               | LNQuaternionMathNode            |
| values -> Math -> quaternions    | Rotation Math                 | LNRotationMathNode              |
| values -> Random                 | Random Boolean                | LNRandomBooleanNode             |
| values -> Random                 | Random Choice                 | LNRandomChoiceNode              |
| values -> Random                 | Random Color                  | LNRandomColorNode               |
| values -> Random                 | Random Float                  | LNRandomFloatNode               |
| values -> Random                 | Random Integer                | LNRandomIntegerNode             |
| values -> Random                 | Random String                 | LNRandomStringNode              |
| values -> Random                 | Random Vector                 | LNRandomVectorNode              |
| values -> Random -> logic        | Random Output                 | LNRandomOutputNode              |
| values -> String                 | Concatenate String            | LNConcatenateStringNode         |
| values -> String                 | Split String                  | LNSplitStringNode               |
| values -> String                 | String                        | LNStringNode                    |
| values -> String                 | String Case                   | LNCaseStringNode                |
| values -> String                 | String Contains               | LNContainsStringNode            |
| values -> String                 | String Length                 | LNLengthStringNode              |
| values -> String                 | String Replace                | LNStringReplaceNode             |
| values -> String                 | Sub String                    | LNSubStringNode                 |
| values -> String -> parse        | Parse Float                   | LNParseFloatNode                |
| values -> String -> parse        | Parse Int                     | LNParseIntNode                  |
| values -> Variable -> set        | Retain Value                  | LNRetainValueNode               |
| values -> Variable -> set        | Set Variable                  | LNSetVariableNode               |
| values -> Variable               | Boolean                       | LNBooleanNode                   |
| values -> Variable               | Color                         | LNColorNode                     |
| values -> Variable               | Dynamic                       | LNDynamicNode                   |
| values -> Variable               | Float                         | LNFloatNode                     |
| values -> Variable               | Integer                       | LNIntegerNode                   |
| values -> Variable               | Mask                          | LNMaskNode                      |
| values -> Variable               | Rotation                      | LNRotationNode                  |
| values -> Variable               | Scene                         | LNSceneNode                     |
| values -> Variable               | Transform                     | LNTransformNode                 |
| values -> Variable               | Vector                        | LNVectorNode                    |
| graphics -> Draw -> draw         | Draw Arc                      | LNDrawArcNode                   |
| graphics -> Draw -> draw         | Draw Camera                   | LNDrawCameraNode                |
| graphics -> Draw -> draw         | Draw Camera to Texture        | LNDrawCameraTextureNode         |
| graphics -> Draw -> draw         | Draw Circle                   | LNDrawCircleNode                |
| graphics -> Draw -> draw         | Draw Curve                    | LNDrawCurveNode                 |
| graphics -> Draw -> draw         | Draw Ellipse                  | LNDrawEllipseNode               |
| graphics -> Draw -> draw         | Draw Image                    | LNDrawImageNode                 |
| graphics -> Draw -> draw         | Draw Image Sequence           | LNDrawImageSequenceNode         |
| graphics -> Draw -> draw         | Draw Line                     | LNDrawLineNode                  |
| graphics -> Draw -> draw         | Draw Polygon                  | LNDrawPolygonNode               |
| graphics -> Draw -> draw         | Draw Rect                     | LNDrawRectNode                  |
| graphics -> Draw -> draw         | Draw String                   | LNDrawStringNode                |
| graphics -> Draw -> draw         | Draw Text Area String         | LNDrawTextAreaStringNode        |
| graphics -> Draw -> draw         | Draw To Material Image        | LNDrawToMaterialImageNode       |
| graphics -> Draw -> draw         | Draw Triangle                 | LNDrawTriangleNode              |
| graphics -> Canvas               | Get Canvas Checkbox           | LNCanvasGetCheckboxNode         |
| graphics -> Canvas               | Get Canvas Input Text         | LNCanvasGetInputTextNode        |
| graphics -> Canvas               | Get Canvas Location           | LNCanvasGetLocationNode         |
| graphics -> Canvas               | Get Canvas Position           | LNCanvasGetPositionNode         |
| graphics -> Canvas               | Get Canvas Progress Bar       | LNCanvasGetPBNode               |
| graphics -> Canvas               | Get Canvas Rotation           | LNCanvasGetRotationNode         |
| graphics -> Canvas               | Get Canvas Scale              | LNCanvasGetScaleNode            |
| graphics -> Canvas               | Get Canvas Slider             | LNCanvasGetSliderNode           |
| graphics -> Canvas               | Get Canvas Text               | LNCanvasGetTextNode             |
| graphics -> Canvas               | Get Canvas Visible            | LNCanvasGetVisibleNode          |
| graphics -> Canvas               | Get Global Canvas Font Size   | LNGetGlobalCanvasFontSizeNode   |
| graphics -> Canvas               | Get Global Canvas Scale       | LNGetGlobalCanvasScaleNode      |
| graphics -> Canvas               | On Canvas Element             | LNOnCanvasElementNode           |
| graphics -> Canvas               | Set Canvas Asset              | LNCanvasSetAssetNode            |
| graphics -> Canvas               | Set Canvas Checkbox           | LNCanvasSetCheckBoxNode         |
| graphics -> Canvas               | Set Canvas Color              | LNCanvasSetColorNode            |
| graphics -> Canvas               | Set Canvas Input Text         | LNCanvasSetInputTextNode        |
| graphics -> Canvas               | Set Canvas Input Text Focus   | LNCanvasSetInputTextFocusNode   |
| graphics -> Canvas               | Set Canvas Location           | LNCanvasSetLocationNode         |
| graphics -> Canvas               | Set Canvas Progress Bar       | LNCanvasSetPBNode               |
| graphics -> Canvas               | Set Canvas Rotation           | LNCanvasSetRotationNode         |
| graphics -> Canvas               | Set Canvas Scale              | LNCanvasSetScaleNode            |
| graphics -> Canvas               | Set Canvas Slider             | LNCanvasSetSliderNode           |
| graphics -> Canvas               | Set Canvas Text               | LNCanvasSetTextNode             |
| graphics -> Canvas               | Set Canvas Visible            | LNCanvasSetVisibleNode          |
| graphics -> Canvas               | Set Global Canvas Font Size   | LNSetGlobalCanvasFontSizeNode   |
| graphics -> Canvas               | Set Global Canvas Scale       | LNSetGlobalCanvasScaleNode      |
| graphics -> Postprocess          | Get Bloom Settings            | LNBloomGetNode                  |
| graphics -> Postprocess          | Get CA Settings               | LNChromaticAberrationGetNode    |
| graphics -> Postprocess          | Get Camera Post Process       | LNCameraGetNode                 |
| graphics -> Postprocess          | Get Lenstexture Settings      | LNLenstextureGetNode            |
| graphics -> Postprocess          | Get SSAO Settings             | LNSSAOGetNode                   |
| graphics -> Postprocess          | Get SSR Settings              | LNSSRGetNode                    |
| graphics -> Postprocess          | Set Bloom Settings            | LNBloomSetNode                  |
| graphics -> Postprocess          | Set CA Settings               | LNChromaticAberrationSetNode    |
| graphics -> Postprocess          | Set Camera Post Process       | LNCameraSetNode                 |
| graphics -> Postprocess          | Set Lenstexture               | LNLenstextureSetNode            |
| graphics -> Postprocess          | Set SSAO Settings             | LNSSAOSetNode                   |
| graphics -> Postprocess          | Set SSR Settings              | LNSSRSetNode                    |
| graphics -> Postprocess          | Colorgrading Get Global       | LNColorgradingGetGlobalNode     |
| graphics -> Postprocess          | Colorgrading Get Highlight    | LNColorgradingGetHighlightNode  |
| graphics -> Postprocess          | Colorgrading Get Midtone      | LNColorgradingGetMidtoneNode    |
| graphics -> Postprocess          | Colorgrading Get Shadow       | LNColorgradingGetShadowNode     |
| graphics -> Postprocess          | Colorgrading Set Global       | LNColorgradingSetGlobalNode     |
| graphics -> Postprocess          | Colorgrading Set Highlight    | LNColorgradingSetHighlightNode  |
| graphics -> Postprocess          | Colorgrading Set Midtone      | LNColorgradingSetMidtoneNode    |
| graphics -> Postprocess          | Colorgrading Set Shadow       | LNColorgradingSetShadowNode     |
| graphics -> Renderpath           | Create Render Target          | LNCreateRenderTargetNode        |
| graphics -> Renderpath           | Pause Active Camera Render    | LNPauseActiveCameraRenderNode   |
| graphics -> Renderpath           | Rotate Render Target          | LNRotateRenderTargetNode        |
| graphics -> Renderpath           | Set MSAA Quality              | LNRpMSAANode                    |
| graphics -> Renderpath           | Set Post Process Quality      | LNRpConfigNode                  |
| graphics -> Renderpath           | Set SSAA Quality              | LNRpSuperSampleNode             |
| graphics -> Renderpath           | Set Shadows Quality           | LNRpShadowQualityNode           |
| graphics -> Renderpath           | Set Shader Uniform            | LNSetShaderUniformNode          |
| sound -> Sound                   | Pause Speaker                 | LNPauseSoundNode                |
| sound -> Sound                   | Play Sound                    | LNPlaySoundRawNode              |
| sound -> Sound                   | Play Speaker                  | LNPlaySoundNode                 |
| sound -> Sound                   | Stop Speaker                  | LNStopSoundNode                 |
| misc -> group                    | Call Node Group               | LNCallGroupNode                 |
| misc -> group                    | Group Input Node              | LNGroupInputsNode               |
| misc -> group                    | Group Output Node             | LNGroupOutputsNode              |
| misc -> screen                   | Get Display Resolution        | LNDisplayInfoNode               |
| misc -> screen                   | Get Window Resolution         | LNWindowInfoNode                |
| misc -> Miscellaneous            | Boolean to Int                | LNIntFromBooleanNode            |
| misc -> Miscellaneous            | Boolean to Vector             | LNVectorFromBooleanNode         |
| misc -> Miscellaneous            | Default if Null               | LNDefaultIfNullNode             |
| misc -> Miscellaneous            | Get Application Time          | LNTimeNode                      |
| misc -> Miscellaneous            | Get Debug Console Settings    | LNGetDebugConsoleSettings       |
| misc -> Miscellaneous            | Get Frames Per Second         | LNGetFPSNode                    |
| misc -> Miscellaneous            | Set Debug Console Settings    | LNSetDebugConsoleSettings       |
| misc -> Miscellaneous            | Set Time Scale                | LNSetTimeScaleNode              |
| misc -> Miscellaneous            | Sleep                         | LNSleepNode                     |
| misc -> Miscellaneous            | Timer                         | LNTimerNode                     |
| misc -> Layout                   | Frame                         | NodeFrame                       |
| misc -> Layout                   | Reroute                       | NodeReroute                     |


## 🐥 Sources List - Armory Addon

    armsdk\armory\blender
    |-- __init__.py
    |-- arm
    |   |-- arm\LICENSE.md
    |   |-- arm\__init__.py
    |   |-- arm\api.py
    |   |-- arm\assets.py
    |   |-- arm\exporter.py
    |   |-- arm\exporter_opt.py
    |   |-- arm\handlers.py
    |   |-- arm\keymap.py
    |   |-- arm\custom_icons
    |   |   |-- arm\custom_icons\bundle.png
    |   |   |-- arm\custom_icons\haxe.png
    |   |   `-- arm\custom_icons\wasm.png
    |   |-- arm\lib
    |   |   |-- arm\lib\__init__.py
    |   |   |-- arm\lib\armpack.py
    |   |   |-- arm\lib\lz4.py
    |   |   |-- arm\lib\make_datas.py
    |   |   `-- arm\lib\server.py
    |   |-- arm\lightmapper
    |   |   |-- arm\lightmapper\__init__.py
    |   |   |-- arm\lightmapper\assets
    |   |   |   |-- arm\lightmapper\assets\TLM_Overlay.png
    |   |   |   |-- arm\lightmapper\assets\dash.ogg
    |   |   |   |-- arm\lightmapper\assets\gentle.ogg
    |   |   |   |-- arm\lightmapper\assets\noot.ogg
    |   |   |   |-- arm\lightmapper\assets\pingping.ogg
    |   |   |   |-- arm\lightmapper\assets\sound.ogg
    |   |   |   `-- arm\lightmapper\assets\tlm_data.blend
    |   |   |-- arm\lightmapper\icons
    |   |   |   |-- arm\lightmapper\icons\bake.png
    |   |   |   |-- arm\lightmapper\icons\clean.png
    |   |   |   `-- arm\lightmapper\icons\explore.png
    |   |   |-- arm\lightmapper\keymap
    |   |   |   |-- arm\lightmapper\keymap\__init__.py
    |   |   |   `-- arm\lightmapper\keymap\keymap.py
    |   |   |-- arm\lightmapper\network
    |   |   |   |-- arm\lightmapper\network\client.py
    |   |   |   `-- arm\lightmapper\network\server.py
    |   |   |-- arm\lightmapper\operators
    |   |   |   |-- arm\lightmapper\operators\__init__.py
    |   |   |   |-- arm\lightmapper\operators\imagetools.py
    |   |   |   |-- arm\lightmapper\operators\installopencv.py
    |   |   |   `-- arm\lightmapper\operators\tlm.py
    |   |   |-- arm\lightmapper\panels
    |   |   |   |-- arm\lightmapper\panels\__init__.py
    |   |   |   |-- arm\lightmapper\panels\image.py
    |   |   |   |-- arm\lightmapper\panels\light.py
    |   |   |   |-- arm\lightmapper\panels\object.py
    |   |   |   |-- arm\lightmapper\panels\scene.py
    |   |   |   `-- arm\lightmapper\panels\world.py
    |   |   |-- arm\lightmapper\preferences
    |   |   |   |-- arm\lightmapper\preferences\__init__.py
    |   |   |   `-- arm\lightmapper\preferences\addon_preferences.py
    |   |   |-- arm\lightmapper\properties
    |   |   |   |-- arm\lightmapper\properties\__init__.py
    |   |   |   |-- arm\lightmapper\properties\atlas.py
    |   |   |   |-- arm\lightmapper\properties\denoiser
    |   |   |   |   |-- arm\lightmapper\properties\denoiser\integrated.py
    |   |   |   |   |-- arm\lightmapper\properties\denoiser\oidn.py
    |   |   |   |   `-- arm\lightmapper\properties\denoiser\optix.py
    |   |   |   |-- arm\lightmapper\properties\filtering.py
    |   |   |   |-- arm\lightmapper\properties\image.py
    |   |   |   |-- arm\lightmapper\properties\object.py
    |   |   |   |-- arm\lightmapper\properties\renderer
    |   |   |   |   |-- arm\lightmapper\properties\renderer\cycles.py
    |   |   |   |   |-- arm\lightmapper\properties\renderer\luxcorerender.py
    |   |   |   |   |-- arm\lightmapper\properties\renderer\octanerender.py
    |   |   |   |   `-- arm\lightmapper\properties\renderer\radeonrays.py
    |   |   |   `-- arm\lightmapper\properties\scene.py
    |   |   `-- arm\lightmapper\utility
    |   |       |-- arm\lightmapper\utility\__init__.py
    |   |       |-- arm\lightmapper\utility\build.py
    |   |       |-- arm\lightmapper\utility\cycles
    |   |       |   |-- arm\lightmapper\utility\cycles\ao.py
    |   |       |   |-- arm\lightmapper\utility\cycles\cache.py
    |   |       |   |-- arm\lightmapper\utility\cycles\indirect.py
    |   |       |   |-- arm\lightmapper\utility\cycles\lightmap.py
    |   |       |   |-- arm\lightmapper\utility\cycles\nodes.py
    |   |       |   `-- arm\lightmapper\utility\cycles\prepare.py
    |   |       |-- arm\lightmapper\utility\denoiser
    |   |       |   |-- arm\lightmapper\utility\denoiser\integrated.py
    |   |       |   |-- arm\lightmapper\utility\denoiser\oidn.py
    |   |       |   `-- arm\lightmapper\utility\denoiser\optix.py
    |   |       |-- arm\lightmapper\utility\encoding.py
    |   |       |-- arm\lightmapper\utility\filtering
    |   |       |   |-- arm\lightmapper\utility\filtering\numpy.py
    |   |       |   |-- arm\lightmapper\utility\filtering\opencv.py
    |   |       |   `-- arm\lightmapper\utility\filtering\shader.py
    |   |       |-- arm\lightmapper\utility\gui
    |   |       |   |-- arm\lightmapper\utility\gui\Viewport.py
    |   |       |-- arm\lightmapper\utility\icon.py
    |   |       |-- arm\lightmapper\utility\log.py
    |   |       |-- arm\lightmapper\utility\luxcore
    |   |       |   `-- arm\lightmapper\utility\luxcore\setup.py
    |   |       |-- arm\lightmapper\utility\octane
    |   |       |   |-- arm\lightmapper\utility\octane\configure.py
    |   |       |   `-- arm\lightmapper\utility\octane\lightmap2.py
    |   |       |-- arm\lightmapper\utility\pack.py
    |   |       |-- arm\lightmapper\utility\preconfiguration
    |   |       |   `-- arm\lightmapper\utility\preconfiguration\object.py
    |   |       |-- arm\lightmapper\utility\rectpack
    |   |       |   |-- arm\lightmapper\utility\rectpack\__init__.py
    |   |       |   |-- arm\lightmapper\utility\rectpack\enclose.py
    |   |       |   |-- arm\lightmapper\utility\rectpack\geometry.py
    |   |       |   |-- arm\lightmapper\utility\rectpack\guillotine.py
    |   |       |   |-- arm\lightmapper\utility\rectpack\maxrects.py
    |   |       |   |-- arm\lightmapper\utility\rectpack\pack_algo.py
    |   |       |   |-- arm\lightmapper\utility\rectpack\packer.py
    |   |       |   |-- arm\lightmapper\utility\rectpack\skyline.py
    |   |       |   `-- arm\lightmapper\utility\rectpack\waste.py
    |   |       `-- arm\lightmapper\utility\utility.py
    |   |-- arm\live_patch.py
    |   |-- arm\log.py
    |   |-- arm\logicnode
    |   |   |-- arm\logicnode\__init__.py
    |   |   |-- arm\logicnode\arm_node_group.py
    |   |   |-- arm\logicnode\arm_nodes.py
    |   |   |-- arm\logicnode\arm_props.py
    |   |   |-- arm\logicnode\arm_sockets.py
    |   |   |-- arm\logicnode\replacement.py
    |   |   |-- arm\logicnode\tree_variables.py
    |   |   |-- arm\logicnode\animation\
    |   |   |   |-- LN_action.py
    |   |   |   |-- LN_blend_action.py
    |   |   |   |-- LN_bone_fk.py
    |   |   |   |-- LN_bone_ik.py
    |   |   |   |-- LN_get_action_state.py
    |   |   |   |-- LN_get_bone_fk_ik_only.py
    |   |   |   |-- LN_get_bone_transform.py
    |   |   |   |-- LN_get_tilesheet_state.py
    |   |   |   |-- LN_on_action_marker.py
    |   |   |   |-- LN_play_action_from.py
    |   |   |   |-- LN_play_tilesheet.py
    |   |   |   |-- LN_remove_parent_bone.py
    |   |   |   |-- LN_set_action_paused.py
    |   |   |   |-- LN_set_action_speed.py
    |   |   |   |-- LN_set_bone_fk_ik_only.py
    |   |   |   |-- LN_set_parent_bone.py
    |   |   |   |-- LN_set_particle_speed.py
    |   |   |   |-- LN_set_tilesheet_paused.py
    |   |   |   |-- arm\logicnode\animation\__init__.py
    |   |   |-- arm\logicnode\array\
    |   |   |   |-- LN_array.py
    |   |   |   |-- LN_array_add.py
    |   |   |   |-- LN_array_boolean.py
    |   |   |   |-- LN_array_color.py
    |   |   |   |-- LN_array_compare.py
    |   |   |   |-- LN_array_concat.py
    |   |   |   |-- LN_array_contains.py
    |   |   |   |-- LN_array_count.py
    |   |   |   |-- LN_array_display.py
    |   |   |   |-- LN_array_distinct.py
    |   |   |   |-- LN_array_filter.py
    |   |   |   |-- LN_array_float.py
    |   |   |   |-- LN_array_get.py
    |   |   |   |-- LN_array_get_PreviousNext.py
    |   |   |   |-- LN_array_get_next.py
    |   |   |   |-- LN_array_index.py
    |   |   |   |-- LN_array_integer.py
    |   |   |   |-- LN_array_length.py
    |   |   |   |-- LN_array_loop_node.py
    |   |   |   |-- LN_array_object.py
    |   |   |   |-- LN_array_pop.py
    |   |   |   |-- LN_array_remove_by_index.py
    |   |   |   |-- LN_array_remove_by_value.py
    |   |   |   |-- LN_array_resize.py
    |   |   |   |-- LN_array_reverse.py
    |   |   |   |-- LN_array_sample.py
    |   |   |   |-- LN_array_set.py
    |   |   |   |-- LN_array_shift.py
    |   |   |   |-- LN_array_shuffle.py
    |   |   |   |-- LN_array_slice.py
    |   |   |   |-- LN_array_sort.py
    |   |   |   |-- LN_array_splice.py
    |   |   |   |-- LN_array_string.py
    |   |   |   |-- LN_array_vector.py
    |   |   |   |-- arm\logicnode\array\__init__.py\
    |   |   |-- arm\logicnode\camera
    |   |   |   |-- LN_get_camera_active.py
    |   |   |   |-- LN_get_camera_aspect.py
    |   |   |   |-- LN_get_camera_fov.py
    |   |   |   |-- LN_get_camera_scale.py
    |   |   |   |-- LN_get_camera_start_end.py
    |   |   |   |-- LN_get_camera_type.py
    |   |   |   |-- LN_set_camera_active.py
    |   |   |   |-- LN_set_camera_aspect.py
    |   |   |   |-- LN_set_camera_fov.py
    |   |   |   |-- LN_set_camera_scale.py
    |   |   |   |-- LN_set_camera_start_end.py
    |   |   |   |-- LN_set_camera_type.py
    |   |   |   |-- arm\logicnode\camera\__init__.py
    |   |   |-- arm\logicnode\canvas\
    |   |   |   |-- LN_get_canvas_checkbox.py
    |   |   |   |-- LN_get_canvas_input_text.py
    |   |   |   |-- LN_get_canvas_location.py
    |   |   |   |-- LN_get_canvas_position.py
    |   |   |   |-- LN_get_canvas_progress_bar.py
    |   |   |   |-- LN_get_canvas_rotation.py
    |   |   |   |-- LN_get_canvas_scale.py
    |   |   |   |-- LN_get_canvas_slider.py
    |   |   |   |-- LN_get_canvas_text.py
    |   |   |   |-- LN_get_canvas_visible.py
    |   |   |   |-- LN_get_global_canvas_font_size.py
    |   |   |   |-- LN_get_global_canvas_scale.py
    |   |   |   |-- LN_on_canvas_element.py
    |   |   |   |-- LN_set_canvas_asset.py
    |   |   |   |-- LN_set_canvas_checkbox.py
    |   |   |   |-- LN_set_canvas_color.py
    |   |   |   |-- LN_set_canvas_input_text.py
    |   |   |   |-- LN_set_canvas_input_text_focus.py
    |   |   |   |-- LN_set_canvas_location.py
    |   |   |   |-- LN_set_canvas_progress_bar.py
    |   |   |   |-- LN_set_canvas_rotation.py
    |   |   |   |-- LN_set_canvas_scale.py
    |   |   |   |-- LN_set_canvas_slider.py
    |   |   |   |-- LN_set_canvas_text.py
    |   |   |   |-- LN_set_canvas_visible.py
    |   |   |   |-- LN_set_global_canvas_font_size.py
    |   |   |   |-- LN_set_global_canvas_scale.py
    |   |   |   |-- arm\logicnode\canvas\__init__.py
    |   |   |-- arm\logicnode\deprecated\
    |   |   |   |-- LN_get_mouse_lock.py
    |   |   |   |-- LN_get_mouse_visible.py
    |   |   |   |-- LN_group_nodes.py
    |   |   |   |-- LN_mouse_coords.py
    |   |   |   |-- LN_on_gamepad.py
    |   |   |   |-- LN_on_keyboard.py
    |   |   |   |-- LN_on_mouse.py
    |   |   |   |-- LN_on_surface.py
    |   |   |   |-- LN_on_virtual_button.py
    |   |   |   |-- LN_pause_action.py
    |   |   |   |-- LN_pause_tilesheet.py
    |   |   |   |-- LN_pause_trait.py
    |   |   |   |-- LN_play_action.py
    |   |   |   |-- LN_quaternion.py
    |   |   |   |-- LN_resume_action.py
    |   |   |   |-- LN_resume_tilesheet.py
    |   |   |   |-- LN_resume_trait.py
    |   |   |   |-- LN_rotate_object_around_axis.py
    |   |   |   |-- LN_scale_object.py
    |   |   |   |-- LN_separate_quaternion.py
    |   |   |   |-- LN_set_canvas_progress_bar_color.py
    |   |   |   |-- LN_set_canvas_text_color.py
    |   |   |   |-- LN_set_mouse_lock.py
    |   |   |   |-- LN_set_mouse_visible.py
    |   |   |   |-- LN_set_object_material.py
    |   |   |   |-- LN_surface_coords.py
    |   |   |   |-- arm\logicnode\deprecated\__init__.py
    |   |   |-- arm\logicnode\draw\
    |   |   |   |-- LN_draw_Text_Area_string.py
    |   |   |   |-- LN_draw_arc.py
    |   |   |   |-- LN_draw_camera.py
    |   |   |   |-- LN_draw_camera_texture.py
    |   |   |   |-- LN_draw_circle.py
    |   |   |   |-- LN_draw_curve.py
    |   |   |   |-- LN_draw_ellipse.py
    |   |   |   |-- LN_draw_image.py
    |   |   |   |-- LN_draw_image_sequence.py
    |   |   |   |-- LN_draw_line.py
    |   |   |   |-- LN_draw_polygon.py
    |   |   |   |-- LN_draw_rect.py
    |   |   |   |-- LN_draw_string.py
    |   |   |   |-- LN_draw_to_material_image.py
    |   |   |   |-- LN_draw_triangle.py
    |   |   |   |-- arm\logicnode\draw\__init__.py
    |   |   |-- arm\logicnode\event\
    |   |   |   |-- LN_on_application_state.py
    |   |   |   |-- LN_on_event.py
    |   |   |   |-- LN_on_init.py
    |   |   |   |-- LN_on_render2d.py
    |   |   |   |-- LN_on_timer.py
    |   |   |   |-- LN_on_update.py
    |   |   |   |-- LN_send_event_to_object.py
    |   |   |   |-- LN_send_global_event.py
    |   |   |   |-- arm\logicnode\event\__init__.py
    |   |   |-- arm\logicnode\input\
    |   |   |   |-- LN_cursor_in_region.py
    |   |   |   |-- LN_gamepad.py
    |   |   |   |-- LN_gamepad_coords.py
    |   |   |   |-- LN_gamepad_sticks.py
    |   |   |   |-- LN_get_cursor_location.py
    |   |   |   |-- LN_get_cursor_state.py
    |   |   |   |-- LN_get_gamepad_started.py
    |   |   |   |-- LN_get_input_map_key.py
    |   |   |   |-- LN_get_keyboard_started.py
    |   |   |   |-- LN_get_mouse_movement.py
    |   |   |   |-- LN_get_mouse_started.py
    |   |   |   |-- LN_get_touch_location.py
    |   |   |   |-- LN_get_touch_movement.py
    |   |   |   |-- LN_keyboard.py
    |   |   |   |-- LN_mouse.py
    |   |   |   |-- LN_on_input_map.py
    |   |   |   |-- LN_on_swipe.py
    |   |   |   |-- LN_on_tap_screen.py
    |   |   |   |-- LN_remove_input_map_key.py
    |   |   |   |-- LN_sensor_coords.py
    |   |   |   |-- LN_set_cursor_state.py
    |   |   |   |-- LN_set_input_map_key.py
    |   |   |   |-- LN_touch.py
    |   |   |   |-- LN_touch_in_region.py
    |   |   |   |-- LN_virtual_button.py
    |   |   |   |-- arm\logicnode\input\__init__.py
    |   |   |-- arm\logicnode\light\
    |   |   |   |-- LN_set_area_light_size.py
    |   |   |   |-- LN_set_light_color.py
    |   |   |   |-- LN_set_light_strength.py
    |   |   |   |-- LN_set_spot_light_blend.py
    |   |   |   |-- LN_set_spot_light_size.py
    |   |   |   |-- arm\logicnode\light\__init__.py
    |   |   |-- arm\logicnode\logic\
    |   |   |   |-- LN_alternate_output.py
    |   |   |   |-- LN_branch.py
    |   |   |   |-- LN_call_function.py
    |   |   |   |-- LN_case_index.py
    |   |   |   |-- LN_function.py
    |   |   |   |-- LN_function_output.py
    |   |   |   |-- LN_gate.py
    |   |   |   |-- LN_invert_boolean.py
    |   |   |   |-- LN_invert_output.py
    |   |   |   |-- LN_is_false.py
    |   |   |   |-- LN_is_not_null.py
    |   |   |   |-- LN_is_null.py
    |   |   |   |-- LN_is_true.py
    |   |   |   |-- LN_loop.py
    |   |   |   |-- LN_loop_break.py
    |   |   |   |-- LN_loop_continue.py
    |   |   |   |-- LN_merge.py
    |   |   |   |-- LN_null.py
    |   |   |   |-- LN_once_per_frame.py
    |   |   |   |-- LN_output_sequence.py
    |   |   |   |-- LN_output_to_boolean.py
    |   |   |   |-- LN_pulse.py
    |   |   |   |-- LN_select.py
    |   |   |   |-- LN_switch_output.py
    |   |   |   |-- LN_value_changed.py
    |   |   |   |-- LN_while_true.py
    |   |   |   |-- arm\logicnode\logic\__init__.py
    |   |   |-- arm\logicnode\material\
    |   |   |   |-- LN_get_object_material.py
    |   |   |   |-- LN_material.py
    |   |   |   |-- LN_set_material_image_param.py
    |   |   |   |-- LN_set_material_rgb_param.py
    |   |   |   |-- LN_set_material_value_param.py
    |   |   |   |-- LN_set_object_material_slot.py
    |   |   |   |-- arm\logicnode\material\__init__.py
    |   |   |-- arm\logicnode\math\
    |   |   |   |-- LN_bitwise_math.py
    |   |   |   |-- LN_clamp.py
    |   |   |   |-- LN_combine_hsv.py
    |   |   |   |-- LN_combine_rgb.py
    |   |   |   |-- LN_compare.py
    |   |   |   |-- LN_deg_to_rad.py
    |   |   |   |-- LN_float_delta_interpolate.py
    |   |   |   |-- LN_key_interpolate.py
    |   |   |   |-- LN_map_range.py
    |   |   |   |-- LN_math.py
    |   |   |   |-- LN_math_expression.py
    |   |   |   |-- LN_matrix_math.py
    |   |   |   |-- LN_mix.py
    |   |   |   |-- LN_mix_vector.py
    |   |   |   |-- LN_quaternion_math.py
    |   |   |   |-- LN_rad_to_deg.py
    |   |   |   |-- LN_rotation_math.py
    |   |   |   |-- LN_screen_to_world_space.py
    |   |   |   |-- LN_separate_hsv.py
    |   |   |   |-- LN_separate_rgb.py
    |   |   |   |-- LN_separate_xyz.py
    |   |   |   |-- LN_tween_float.py
    |   |   |   |-- LN_tween_rotation.py
    |   |   |   |-- LN_tween_transform.py
    |   |   |   |-- LN_tween_vector.py
    |   |   |   |-- LN_vector_clamp.py
    |   |   |   |-- LN_vector_math.py
    |   |   |   |-- LN_vector_move_towards.py
    |   |   |   |-- LN_world_to_screen_space.py
    |   |   |   |-- arm\logicnode\math\__init__.py
    |   |   |-- arm\logicnode\miscellaneous\
    |   |   |   |-- LN_boolean_to_int.py
    |   |   |   |-- LN_boolean_to_vector.py
    |   |   |   |-- LN_call_group.py
    |   |   |   |-- LN_default_if_null.py
    |   |   |   |-- LN_get_application_time.py
    |   |   |   |-- LN_get_debug_console_settings.py
    |   |   |   |-- LN_get_display_resolution.py
    |   |   |   |-- LN_get_fps.py
    |   |   |   |-- LN_get_window_resolution.py
    |   |   |   |-- LN_group_input.py
    |   |   |   |-- LN_group_output.py
    |   |   |   |-- LN_set_debug_console_settings.py
    |   |   |   |-- LN_set_time_scale.py
    |   |   |   |-- LN_sleep.py
    |   |   |   |-- LN_timer.py
    |   |   |   |-- arm\logicnode\miscellaneous\__init__.py
    |   |   |-- arm\logicnode\native\
    |   |   |   |-- LN_call_haxe_static.py
    |   |   |   |-- LN_clear_console.py
    |   |   |   |-- LN_detect_mobile_browser.py
    |   |   |   |-- LN_expression.py
    |   |   |   |-- LN_get_date_time.py
    |   |   |   |-- LN_get_haxe_property.py
    |   |   |   |-- LN_get_system_language.py
    |   |   |   |-- LN_get_system_name.py
    |   |   |   |-- LN_loadUrl.py
    |   |   |   |-- LN_print.py
    |   |   |   |-- LN_read_file.py
    |   |   |   |-- LN_read_json.py
    |   |   |   |-- LN_read_storage.py
    |   |   |   |-- LN_script.py
    |   |   |   |-- LN_set_haxe_property.py
    |   |   |   |-- LN_set_vibrate.py
    |   |   |   |-- LN_shutdown.py
    |   |   |   |-- LN_write_file.py
    |   |   |   |-- LN_write_json.py
    |   |   |   |-- LN_write_storage.py
    |   |   |   |-- arm\logicnode\native\__init__.py
    |   |   |-- arm\logicnode\navmesh\
    |   |   |   |-- LN_get_agent_data.py
    |   |   |   |-- LN_go_to_location.py
    |   |   |   |-- LN_navigable_location.py
    |   |   |   |-- LN_pick_navmesh_location.py
    |   |   |   |-- LN_stop_agent.py
    |   |   |   |-- arm\logicnode\navmesh\__init__.py
    |   |   |-- arm\logicnode\network\
    |   |   |   |-- LN_network_client.py
    |   |   |   |-- LN_network_close_connection.py
    |   |   |   |-- LN_network_event.py
    |   |   |   |-- LN_network_host.py
    |   |   |   |-- LN_network_host_close_client.py
    |   |   |   |-- LN_network_host_get_ip.py
    |   |   |   |-- LN_network_http_request.py
    |   |   |   |-- LN_network_message_parser.py
    |   |   |   |-- LN_network_open.py
    |   |   |   |-- LN_network_send_message.py
    |   |   |   |-- arm\logicnode\network\__init__.py
    |   |   |-- arm\logicnode\object\
    |   |   |   |-- LN_get_distance.py
    |   |   |   |-- LN_get_object_by_name.py
    |   |   |   |-- LN_get_object_by_uid.py
    |   |   |   |-- LN_get_object_child.py
    |   |   |   |-- LN_get_object_children.py
    |   |   |   |-- LN_get_object_mesh.py
    |   |   |   |-- LN_get_object_name.py
    |   |   |   |-- LN_get_object_offscreen.py
    |   |   |   |-- LN_get_object_parent.py
    |   |   |   |-- LN_get_object_property.py
    |   |   |   |-- LN_get_object_uid.py
    |   |   |   |-- LN_get_object_visible.py
    |   |   |   |-- LN_mesh.py
    |   |   |   |-- LN_object.py
    |   |   |   |-- LN_raycast_closest_object.py
    |   |   |   |-- LN_raycast_object.py
    |   |   |   |-- LN_remove_object.py
    |   |   |   |-- LN_remove_object_parent.py
    |   |   |   |-- LN_self_object.py
    |   |   |   |-- LN_set_object_mesh.py
    |   |   |   |-- LN_set_object_name.py
    |   |   |   |-- LN_set_object_parent.py
    |   |   |   |-- LN_set_object_property.py
    |   |   |   |-- LN_set_object_shape_key.py
    |   |   |   |-- LN_set_object_visible.py
    |   |   |   |-- LN_spawn_object.py
    |   |   |   |-- LN_spawn_object_by_name.py
    |   |   |   |-- arm\logicnode\object\__init__.py
    |   |   |-- arm\logicnode\physics\
    |   |   |   |-- LN_Add_rigid_body.py
    |   |   |   |-- LN_add_physics_constraint.py
    |   |   |   |-- LN_apply_force.py
    |   |   |   |-- LN_apply_force_at_location.py
    |   |   |   |-- LN_apply_impulse.py
    |   |   |   |-- LN_apply_impulse_at_location.py
    |   |   |   |-- LN_apply_torque.py
    |   |   |   |-- LN_apply_torque_impulse.py
    |   |   |   |-- LN_convex_cast.py
    |   |   |   |-- LN_convex_cast_on.py
    |   |   |   |-- LN_get_rb_contacts.py
    |   |   |   |-- LN_get_rb_data.py
    |   |   |   |-- LN_get_rb_first_contact.py
    |   |   |   |-- LN_get_rb_point_velocity.py
    |   |   |   |-- LN_get_rb_velocity.py
    |   |   |   |-- LN_get_world_gravity.py
    |   |   |   |-- LN_has_contact.py
    |   |   |   |-- LN_has_contact_array.py
    |   |   |   |-- LN_is_rb_active.py
    |   |   |   |-- LN_on_contact.py
    |   |   |   |-- LN_on_contact_array.py
    |   |   |   |-- LN_on_volume_trigger.py
    |   |   |   |-- LN_physics_constraint.py
    |   |   |   |-- LN_pick_rb.py
    |   |   |   |-- LN_ray_cast.py
    |   |   |   |-- LN_ray_cast_on.py
    |   |   |   |-- LN_remove_rb.py
    |   |   |   |-- LN_set_rb_activation_state.py
    |   |   |   |-- LN_set_rb_friction.py
    |   |   |   |-- LN_set_rb_gravity_enabled.py
    |   |   |   |-- LN_set_rb_velocity.py
    |   |   |   |-- LN_set_world_gravity.py
    |   |   |   |-- LN_volume_trigger.py
    |   |   |   |-- arm\logicnode\physics\__init__.py
    |   |   |-- arm\logicnode\postprocess\
    |   |   |   |-- LN_colorgrading_get_global_node.py
    |   |   |   |-- LN_colorgrading_get_highlight_node.py
    |   |   |   |-- LN_colorgrading_get_midtone_node.py
    |   |   |   |-- LN_colorgrading_get_shadow_node.py
    |   |   |   |-- LN_colorgrading_set_global_node.py
    |   |   |   |-- LN_colorgrading_set_highlight_node.py
    |   |   |   |-- LN_colorgrading_set_midtone_node.py
    |   |   |   |-- LN_colorgrading_set_shadow_node.py
    |   |   |   |-- LN_get_bloom_settings.py
    |   |   |   |-- LN_get_ca_settings.py
    |   |   |   |-- LN_get_camera_post_process.py
    |   |   |   |-- LN_get_lenstexture_settings.py
    |   |   |   |-- LN_get_ssao_settings.py
    |   |   |   |-- LN_get_ssr_settings.py
    |   |   |   |-- LN_lenstexture_set.py
    |   |   |   |-- LN_set_bloom_settings.py
    |   |   |   |-- LN_set_ca_settings.py
    |   |   |   |-- LN_set_camera_post_process.py
    |   |   |   |-- LN_set_ssao_settings.py
    |   |   |   |-- LN_set_ssr_settings.py
    |   |   |   |-- arm\logicnode\postprocess\__init__.py
    |   |   |-- arm\logicnode\random\
    |   |   |   |-- LN_random_boolean.py
    |   |   |   |-- LN_random_choice.py
    |   |   |   |-- LN_random_color.py
    |   |   |   |-- LN_random_float.py
    |   |   |   |-- LN_random_integer.py
    |   |   |   |-- LN_random_output.py
    |   |   |   |-- LN_random_string.py
    |   |   |   |-- LN_random_vector.py
    |   |   |   |-- arm\logicnode\random\__init__.py
    |   |   |-- arm\logicnode\renderpath\
    |   |   |   |-- LN_create_render_target.py
    |   |   |   |-- LN_pause_active_camera_render.py
    |   |   |   |-- LN_rotate_render_target.py
    |   |   |   |-- LN_set_msaa_quality.py
    |   |   |   |-- LN_set_post_process_quality.py
    |   |   |   |-- LN_set_shader_uniform.py
    |   |   |   |-- LN_set_shadows_quality.py
    |   |   |   |-- LN_set_ssaa_quality.py
    |   |   |   |-- arm\logicnode\renderpath\__init__.py
    |   |   |-- arm\logicnode\scene\
    |   |   |   |-- LN_add_object_to_collection.py
    |   |   |   |-- LN_collection.py
    |   |   |   |-- LN_create_collection.py
    |   |   |   |-- LN_get_collection.py
    |   |   |   |-- LN_get_object_collection.py
    |   |   |   |-- LN_get_scene_active.py
    |   |   |   |-- LN_get_scene_root.py
    |   |   |   |-- LN_global_object.py
    |   |   |   |-- LN_remove_collection.py
    |   |   |   |-- LN_remove_object_from_collection.py
    |   |   |   |-- LN_remove_scene_active.py
    |   |   |   |-- LN_set_scene_active.py
    |   |   |   |-- LN_spawn_collection.py
    |   |   |   |-- LN_spawn_scene.py
    |   |   |   |-- arm\logicnode\scene\__init__.py
    |   |   |-- arm\logicnode\sound\
    |   |   |   |-- LN_pause_speaker.py
    |   |   |   |-- LN_play_sound.py
    |   |   |   |-- LN_play_speaker.py
    |   |   |   |-- LN_stop_speaker.py
    |   |   |   |-- arm\logicnode\sound\__init__.py
    |   |   |-- arm\logicnode\string\
    |   |   |   |-- LN_concatenate_string.py
    |   |   |   |-- LN_parse_float.py
    |   |   |   |-- LN_parse_int.py
    |   |   |   |-- LN_split_string.py
    |   |   |   |-- LN_string.py
    |   |   |   |-- LN_string_case.py
    |   |   |   |-- LN_string_contains.py
    |   |   |   |-- LN_string_length.py
    |   |   |   |-- LN_string_replace.py
    |   |   |   |-- LN_sub_string.py
    |   |   |   |-- arm\logicnode\string\__init__.py
    |   |   |-- arm\logicnode\trait\
    |   |   |   |-- LN_add_trait_to_object.py
    |   |   |   |-- LN_get_object_trait.py
    |   |   |   |-- LN_get_object_traits.py
    |   |   |   |-- LN_get_trait_name.py
    |   |   |   |-- LN_get_trait_paused.py
    |   |   |   |-- LN_remove_trait.py
    |   |   |   |-- LN_remove_trait_from_object.py
    |   |   |   |-- LN_self_trait.py
    |   |   |   |-- LN_set_trait_paused.py
    |   |   |   |-- LN_trait.py
    |   |   |   |-- arm\logicnode\trait\__init__.py
    |   |   |-- arm\logicnode\transform\
    |   |   |   |-- LN_append_transform.py
    |   |   |   |-- LN_get_object_dimension.py
    |   |   |   |-- LN_get_object_location.py
    |   |   |   |-- LN_get_object_rotation.py
    |   |   |   |-- LN_get_object_scale.py
    |   |   |   |-- LN_get_object_transform.py
    |   |   |   |-- LN_get_world_orientation.py
    |   |   |   |-- LN_look_at.py
    |   |   |   |-- LN_rotate_object.py
    |   |   |   |-- LN_separate_rotation.py
    |   |   |   |-- LN_separate_transform.py
    |   |   |   |-- LN_set_object_location.py
    |   |   |   |-- LN_set_object_rotation.py
    |   |   |   |-- LN_set_object_scale.py
    |   |   |   |-- LN_set_object_transform.py
    |   |   |   |-- LN_transform_math.py
    |   |   |   |-- LN_transform_to_vector.py
    |   |   |   |-- LN_translate_object.py
    |   |   |   |-- LN_translate_on_local_axis.py
    |   |   |   |-- LN_vector_to_object_orientation.py
    |   |   |   |-- LN_world_vector_to_local_space.py
    |   |   |   |-- arm\logicnode\transform\__init__.py
    |   |   |-- arm\logicnode\tree_variables.py
    |   |   `-- arm\logicnode\variable\
    |   |       |-- LN_boolean.py
    |   |       |-- LN_color.py
    |   |       |-- LN_dynamic.py
    |   |       |-- LN_float.py
    |   |       |-- LN_integer.py
    |   |       |-- LN_mask.py
    |   |       |-- LN_retain_value.py
    |   |       |-- LN_rotation.py
    |   |       |-- LN_scene.py
    |   |       |-- LN_set_variable.py
    |   |       |-- LN_transform.py
    |   |       |-- LN_vector.py
    |   |       |-- arm\logicnode\variable\__init__.py
    |   |-- arm\make.py
    |   |-- arm\make_logic.py
    |   |-- arm\make_renderpath.py
    |   |-- arm\make_state.py
    |   |-- arm\make_world.py
    |   |-- arm\material
    |   |   |-- arm\material\__init__.py
    |   |   |-- arm\material\arm_nodes
    |   |   |   |-- arm\material\arm_nodes\__init__.py
    |   |   |   |-- arm\material\arm_nodes\arm_nodes.py
    |   |   |   |-- arm\material\arm_nodes\custom_particle_node.py
    |   |   |   `-- arm\material\arm_nodes\shader_data_node.py
    |   |   |-- arm\material\cycles.py
    |   |   |-- arm\material\cycles_functions.py
    |   |   |-- arm\material\cycles_nodes
    |   |   |   |-- arm\material\cycles_nodes\__init__.py
    |   |   |   |-- arm\material\cycles_nodes\nodes_color.py
    |   |   |   |-- arm\material\cycles_nodes\nodes_converter.py
    |   |   |   |-- arm\material\cycles_nodes\nodes_input.py
    |   |   |   |-- arm\material\cycles_nodes\nodes_shader.py
    |   |   |   |-- arm\material\cycles_nodes\nodes_texture.py
    |   |   |   `-- arm\material\cycles_nodes\nodes_vector.py
    |   |   |-- arm\material\make.py
    |   |   |-- arm\material\make_attrib.py
    |   |   |-- arm\material\make_cluster.py
    |   |   |-- arm\material\make_decal.py
    |   |   |-- arm\material\make_depth.py
    |   |   |-- arm\material\make_finalize.py
    |   |   |-- arm\material\make_inst.py
    |   |   |-- arm\material\make_mesh.py
    |   |   |-- arm\material\make_morph_target.py
    |   |   |-- arm\material\make_overlay.py
    |   |   |-- arm\material\make_particle.py
    |   |   |-- arm\material\make_shader.py
    |   |   |-- arm\material\make_skin.py
    |   |   |-- arm\material\make_tess.py
    |   |   |-- arm\material\make_transluc.py
    |   |   |-- arm\material\make_voxel.py
    |   |   |-- arm\material\mat_batch.py
    |   |   |-- arm\material\mat_state.py
    |   |   |-- arm\material\mat_utils.py
    |   |   |-- arm\material\parser_state.py
    |   |   `-- arm\material\shader.py
    |   |-- arm\node_utils.py
    |   |-- arm\nodes_logic.py
    |   |-- arm\nodes_material.py
    |   |-- arm\profiler.py
    |   |-- arm\props.py
    |   |-- arm\props_bake.py
    |   |-- arm\props_collision_filter_mask.py
    |   |-- arm\props_exporter.py
    |   |-- arm\props_lod.py
    |   |-- arm\props_properties.py
    |   |-- arm\props_renderpath.py
    |   |-- arm\props_tilesheet.py
    |   |-- arm\props_traits.py
    |   |-- arm\props_traits_props.py
    |   |-- arm\props_ui.py
    |   |-- arm\ui_icons.py
    |   |-- arm\utils.py
    |   |-- arm\utils_vs.py
    |   |-- arm\write_data.py
    |   `-- arm\write_probes.py
    |-- data
    |   |-- data\arm_data.blend
    |   |-- data\haxelogic.py
    |   `-- data\skydome.blend
    `-- start.py


## 🐥 Sources List - Armory
                                                       **Sources List - Armory**

    Armory Sources
    |-- armory\import.hx
    |-- armory.data
    |   |-- armory\data\Config.hx
    |   `-- armory\data\ConstData.hx
    |-- armory.logicnode
    |   |-- armory\logicnode\ActiveCameraNode.hx
    |   |-- armory\logicnode\ActiveSceneNode.hx
    |   |-- armory\logicnode\AddGroupNode.hx
    |   |-- armory\logicnode\AddObjectToGroupNode.hx
    |   |-- armory\logicnode\AddPhysicsConstraintNode.hx
    |   |-- armory\logicnode\AddRigidBodyNode.hx
    |   |-- armory\logicnode\AddTraitNode.hx
    |   |-- armory\logicnode\AlternateNode.hx
    |   |-- armory\logicnode\AnimActionNode.hx
    |   |-- armory\logicnode\AnimationStateNode.hx
    |   |-- armory\logicnode\AppendTransformNode.hx
    |   |-- armory\logicnode\ApplyForceAtLocationNode.hx
    |   |-- armory\logicnode\ApplyForceNode.hx
    |   |-- armory\logicnode\ApplyImpulseAtLocationNode.hx
    |   |-- armory\logicnode\ApplyImpulseNode.hx
    |   |-- armory\logicnode\ApplyTorqueImpulseNode.hx
    |   |-- armory\logicnode\ApplyTorqueNode.hx
    |   |-- armory\logicnode\ArrayAddNode.hx
    |   |-- armory\logicnode\ArrayBooleanNode.hx
    |   |-- armory\logicnode\ArrayColorNode.hx
    |   |-- armory\logicnode\ArrayCompareNode.hx
    |   |-- armory\logicnode\ArrayConcatNode.hx
    |   |-- armory\logicnode\ArrayCountNode.hx
    |   |-- armory\logicnode\ArrayDisplayNode.hx
    |   |-- armory\logicnode\ArrayDistinctNode.hx
    |   |-- armory\logicnode\ArrayFilterNode.hx
    |   |-- armory\logicnode\ArrayFloatNode.hx
    |   |-- armory\logicnode\ArrayGetNextNode.hx
    |   |-- armory\logicnode\ArrayGetNode.hx
    |   |-- armory\logicnode\ArrayGetPreviousNextNode.hx
    |   |-- armory\logicnode\ArrayInArrayNode.hx
    |   |-- armory\logicnode\ArrayIndexNode.hx
    |   |-- armory\logicnode\ArrayIntegerNode.hx
    |   |-- armory\logicnode\ArrayLengthNode.hx
    |   |-- armory\logicnode\ArrayLoopNode.hx
    |   |-- armory\logicnode\ArrayNode.hx
    |   |-- armory\logicnode\ArrayObjectNode.hx
    |   |-- armory\logicnode\ArrayPopNode.hx
    |   |-- armory\logicnode\ArrayRemoveNode.hx
    |   |-- armory\logicnode\ArrayRemoveValueNode.hx
    |   |-- armory\logicnode\ArrayResizeNode.hx
    |   |-- armory\logicnode\ArrayReverseNode.hx
    |   |-- armory\logicnode\ArraySampleNode.hx
    |   |-- armory\logicnode\ArraySetNode.hx
    |   |-- armory\logicnode\ArrayShiftNode.hx
    |   |-- armory\logicnode\ArrayShuffleNode.hx
    |   |-- armory\logicnode\ArraySliceNode.hx
    |   |-- armory\logicnode\ArraySortNode.hx
    |   |-- armory\logicnode\ArraySpliceNode.hx
    |   |-- armory\logicnode\ArrayStringNode.hx
    |   |-- armory\logicnode\ArrayVectorNode.hx
    |   |-- armory\logicnode\BitwiseMathNode.hx
    |   |-- armory\logicnode\BlendActionNode.hx
    |   |-- armory\logicnode\BloomGetNode.hx
    |   |-- armory\logicnode\BloomSetNode.hx
    |   |-- armory\logicnode\BoneFKNode.hx
    |   |-- armory\logicnode\BoneIKNode.hx
    |   |-- armory\logicnode\BooleanNode.hx
    |   |-- armory\logicnode\BranchNode.hx
    |   |-- armory\logicnode\CallFunctionNode.hx
    |   |-- armory\logicnode\CallGroupNode.hx
    |   |-- armory\logicnode\CallHaxeStaticNode.hx
    |   |-- armory\logicnode\CameraGetNode.hx
    |   |-- armory\logicnode\CameraSetNode.hx
    |   |-- armory\logicnode\CanvasGetCheckboxNode.hx
    |   |-- armory\logicnode\CanvasGetInputTextNode.hx
    |   |-- armory\logicnode\CanvasGetLocationNode.hx
    |   |-- armory\logicnode\CanvasGetPBNode.hx
    |   |-- armory\logicnode\CanvasGetPositionNode.hx
    |   |-- armory\logicnode\CanvasGetRotationNode.hx
    |   |-- armory\logicnode\CanvasGetScaleNode.hx
    |   |-- armory\logicnode\CanvasGetSliderNode.hx
    |   |-- armory\logicnode\CanvasGetTextNode.hx
    |   |-- armory\logicnode\CanvasGetVisibleNode.hx
    |   |-- armory\logicnode\CanvasSetAssetNode.hx
    |   |-- armory\logicnode\CanvasSetCheckBoxNode.hx
    |   |-- armory\logicnode\CanvasSetColorNode.hx
    |   |-- armory\logicnode\CanvasSetInputTextFocusNode.hx
    |   |-- armory\logicnode\CanvasSetInputTextNode.hx
    |   |-- armory\logicnode\CanvasSetLocationNode.hx
    |   |-- armory\logicnode\CanvasSetPBNode.hx
    |   |-- armory\logicnode\CanvasSetProgressBarColorNode.hx
    |   |-- armory\logicnode\CanvasSetRotationNode.hx
    |   |-- armory\logicnode\CanvasSetScaleNode.hx
    |   |-- armory\logicnode\CanvasSetSliderNode.hx
    |   |-- armory\logicnode\CanvasSetTextColorNode.hx
    |   |-- armory\logicnode\CanvasSetTextNode.hx
    |   |-- armory\logicnode\CanvasSetVisibleNode.hx
    |   |-- armory\logicnode\CaseIndexNode.hx
    |   |-- armory\logicnode\CaseStringNode.hx
    |   |-- armory\logicnode\CastPhysicsRayNode.hx
    |   |-- armory\logicnode\CastPhysicsRayOnNode.hx
    |   |-- armory\logicnode\ChromaticAberrationGetNode.hx
    |   |-- armory\logicnode\ChromaticAberrationSetNode.hx
    |   |-- armory\logicnode\ClampNode.hx
    |   |-- armory\logicnode\ClearConsoleNode.hx
    |   |-- armory\logicnode\ClearParentNode.hx
    |   |-- armory\logicnode\ColorNode.hx
    |   |-- armory\logicnode\ColorgradingGetGlobalNode.hx
    |   |-- armory\logicnode\ColorgradingGetHighlightNode.hx
    |   |-- armory\logicnode\ColorgradingGetMidtoneNode.hx
    |   |-- armory\logicnode\ColorgradingGetShadowNode.hx
    |   |-- armory\logicnode\ColorgradingSetGlobalNode.hx
    |   |-- armory\logicnode\ColorgradingSetHighlightNode.hx
    |   |-- armory\logicnode\ColorgradingSetMidtoneNode.hx
    |   |-- armory\logicnode\ColorgradingSetShadowNode.hx
    |   |-- armory\logicnode\ColorgradingShadowNode.hx
    |   |-- armory\logicnode\CombineColorHSVNode.hx
    |   |-- armory\logicnode\CombineColorNode.hx
    |   |-- armory\logicnode\CompareNode.hx
    |   |-- armory\logicnode\ConcatenateStringNode.hx
    |   |-- armory\logicnode\ContainsStringNode.hx
    |   |-- armory\logicnode\CreateRenderTargetNode.hx
    |   |-- armory\logicnode\CursorInRegionNode.hx
    |   |-- armory\logicnode\DefaultIfNullNode.hx
    |   |-- armory\logicnode\DegToRadNode.hx
    |   |-- armory\logicnode\DetectMobileBrowserNode.hx
    |   |-- armory\logicnode\DisplayInfoNode.hx
    |   |-- armory\logicnode\DrawArcNode.hx
    |   |-- armory\logicnode\DrawCameraNode.hx
    |   |-- armory\logicnode\DrawCameraTextureNode.hx
    |   |-- armory\logicnode\DrawCircleNode.hx
    |   |-- armory\logicnode\DrawCurveNode.hx
    |   |-- armory\logicnode\DrawEllipseNode.hx
    |   |-- armory\logicnode\DrawImageNode.hx
    |   |-- armory\logicnode\DrawImageSequenceNode.hx
    |   |-- armory\logicnode\DrawLineNode.hx
    |   |-- armory\logicnode\DrawPolygonNode.hx
    |   |-- armory\logicnode\DrawRectNode.hx
    |   |-- armory\logicnode\DrawStringNode.hx
    |   |-- armory\logicnode\DrawTextAreaStringNode.hx
    |   |-- armory\logicnode\DrawToMaterialImageNode.hx
    |   |-- armory\logicnode\DrawTriangleNode.hx
    |   |-- armory\logicnode\DynamicNode.hx
    |   |-- armory\logicnode\ExpressionNode.hx
    |   |-- armory\logicnode\FloatDeltaInterpolateNode.hx
    |   |-- armory\logicnode\FloatNode.hx
    |   |-- armory\logicnode\FunctionNode.hx
    |   |-- armory\logicnode\FunctionOutputNode.hx
    |   |-- armory\logicnode\GamepadCoordsNode.hx
    |   |-- armory\logicnode\GamepadSticksNode.hx
    |   |-- armory\logicnode\GateNode.hx
    |   |-- armory\logicnode\GetAgentDataNode.hx
    |   |-- armory\logicnode\GetBoneFkIkOnlyNode.hx
    |   |-- armory\logicnode\GetBoneTransformNode.hx
    |   |-- armory\logicnode\GetCameraAspectNode.hx
    |   |-- armory\logicnode\GetCameraFovNode.hx
    |   |-- armory\logicnode\GetCameraScaleNode.hx
    |   |-- armory\logicnode\GetCameraStartEndNode.hx
    |   |-- armory\logicnode\GetCameraTypeNode.hx
    |   |-- armory\logicnode\GetChildNode.hx
    |   |-- armory\logicnode\GetChildrenNode.hx
    |   |-- armory\logicnode\GetContactsNode.hx
    |   |-- armory\logicnode\GetCursorLocationNode.hx
    |   |-- armory\logicnode\GetCursorStateNode.hx
    |   |-- armory\logicnode\GetDateTimeNode.hx
    |   |-- armory\logicnode\GetDebugConsoleSettings.hx
    |   |-- armory\logicnode\GetDimensionNode.hx
    |   |-- armory\logicnode\GetDistanceNode.hx
    |   |-- armory\logicnode\GetFPSNode.hx
    |   |-- armory\logicnode\GetFirstContactNode.hx
    |   |-- armory\logicnode\GetGamepadStartedNode.hx
    |   |-- armory\logicnode\GetGlobalCanvasFontSizeNode.hx
    |   |-- armory\logicnode\GetGlobalCanvasScaleNode.hx
    |   |-- armory\logicnode\GetGravityNode.hx
    |   |-- armory\logicnode\GetGroupNode.hx
    |   |-- armory\logicnode\GetHaxePropertyNode.hx
    |   |-- armory\logicnode\GetInputMapKeyNode.hx
    |   |-- armory\logicnode\GetKeyboardStartedNode.hx
    |   |-- armory\logicnode\GetLocationNode.hx
    |   |-- armory\logicnode\GetMaterialNode.hx
    |   |-- armory\logicnode\GetMeshNode.hx
    |   |-- armory\logicnode\GetMouseLockNode.hx
    |   |-- armory\logicnode\GetMouseMovementNode.hx
    |   |-- armory\logicnode\GetMouseStartedNode.hx
    |   |-- armory\logicnode\GetMouseVisibleNode.hx
    |   |-- armory\logicnode\GetNameNode.hx
    |   |-- armory\logicnode\GetObjectByUidNode.hx
    |   |-- armory\logicnode\GetObjectGroupNode.hx
    |   |-- armory\logicnode\GetObjectNode.hx
    |   |-- armory\logicnode\GetObjectOffscreenNode.hx
    |   |-- armory\logicnode\GetObjectTraitsNode.hx
    |   |-- armory\logicnode\GetParentNode.hx
    |   |-- armory\logicnode\GetPointVelocityNode.hx
    |   |-- armory\logicnode\GetPropertyNode.hx
    |   |-- armory\logicnode\GetRigidBodyDataNode.hx
    |   |-- armory\logicnode\GetRotationNode.hx
    |   |-- armory\logicnode\GetScaleNode.hx
    |   |-- armory\logicnode\GetSystemLanguage.hx
    |   |-- armory\logicnode\GetSystemName.hx
    |   |-- armory\logicnode\GetTilesheetStateNode.hx
    |   |-- armory\logicnode\GetTouchLocationNode.hx
    |   |-- armory\logicnode\GetTouchMovementNode.hx
    |   |-- armory\logicnode\GetTraitNameNode.hx
    |   |-- armory\logicnode\GetTraitNode.hx
    |   |-- armory\logicnode\GetTraitPausedNode.hx
    |   |-- armory\logicnode\GetTransformNode.hx
    |   |-- armory\logicnode\GetUidNode.hx
    |   |-- armory\logicnode\GetVelocityNode.hx
    |   |-- armory\logicnode\GetVisibleNode.hx
    |   |-- armory\logicnode\GetWorldNode.hx
    |   |-- armory\logicnode\GlobalObjectNode.hx
    |   |-- armory\logicnode\GoToLocationNode.hx
    |   |-- armory\logicnode\GroupInputsNode.hx
    |   |-- armory\logicnode\GroupNode.hx
    |   |-- armory\logicnode\GroupOutputsNode.hx
    |   |-- armory\logicnode\HasContactArrayNode.hx
    |   |-- armory\logicnode\HasContactNode.hx
    |   |-- armory\logicnode\IntFromBooleanNode.hx
    |   |-- armory\logicnode\IntegerNode.hx
    |   |-- armory\logicnode\InverseNode.hx
    |   |-- armory\logicnode\IsFalseNode.hx
    |   |-- armory\logicnode\IsNoneNode.hx
    |   |-- armory\logicnode\IsNotNoneNode.hx
    |   |-- armory\logicnode\IsRigidBodyActiveNode.hx
    |   |-- armory\logicnode\IsTrueNode.hx
    |   |-- armory\logicnode\KeyInterpolateNode.hx
    |   |-- armory\logicnode\LengthStringNode.hx
    |   |-- armory\logicnode\LenstextureGetNode.hx
    |   |-- armory\logicnode\LenstextureSetNode.hx
    |   |-- armory\logicnode\LoadUrlNode.hx
    |   |-- armory\logicnode\LogicNode.hx
    |   |-- armory\logicnode\LogicTree.hx
    |   |-- armory\logicnode\LookAtNode.hx
    |   |-- armory\logicnode\LoopBreakNode.hx
    |   |-- armory\logicnode\LoopContinueNode.hx
    |   |-- armory\logicnode\LoopNode.hx
    |   |-- armory\logicnode\MapRangeNode.hx
    |   |-- armory\logicnode\MaskNode.hx
    |   |-- armory\logicnode\MaterialNode.hx
    |   |-- armory\logicnode\MathExpressionNode.hx
    |   |-- armory\logicnode\MathNode.hx
    |   |-- armory\logicnode\MatrixMathNode.hx
    |   |-- armory\logicnode\MergeNode.hx
    |   |-- armory\logicnode\MergedGamepadNode.hx
    |   |-- armory\logicnode\MergedKeyboardNode.hx
    |   |-- armory\logicnode\MergedMouseNode.hx
    |   |-- armory\logicnode\MergedSurfaceNode.hx
    |   |-- armory\logicnode\MergedVirtualButtonNode.hx
    |   |-- armory\logicnode\MeshNode.hx
    |   |-- armory\logicnode\MixNode.hx
    |   |-- armory\logicnode\MouseCoordsNode.hx
    |   |-- armory\logicnode\NavigableLocationNode.hx
    |   |-- armory\logicnode\NetworkClientNode.hx
    |   |-- armory\logicnode\NetworkCloseConnectionNode.hx
    |   |-- armory\logicnode\NetworkEventNode.hx
    |   |-- armory\logicnode\NetworkHostCloseClientNode.hx
    |   |-- armory\logicnode\NetworkHostGetIpNode.hx
    |   |-- armory\logicnode\NetworkHostNode.hx
    |   |-- armory\logicnode\NetworkHttpRequestNode.hx
    |   |-- armory\logicnode\NetworkMessageParserNode.hx
    |   |-- armory\logicnode\NetworkOpenConnectionNode.hx
    |   |-- armory\logicnode\NetworkSendMessageNode.hx
    |   |-- armory\logicnode\NoneNode.hx
    |   |-- armory\logicnode\NotNode.hx
    |   |-- armory\logicnode\NullNode.hx
    |   |-- armory\logicnode\ObjectNode.hx
    |   |-- armory\logicnode\OnActionMarkerNode.hx
    |   |-- armory\logicnode\OnApplicationStateNode.hx
    |   |-- armory\logicnode\OnCanvasElementNode.hx
    |   |-- armory\logicnode\OnContactArrayNode.hx
    |   |-- armory\logicnode\OnContactNode.hx
    |   |-- armory\logicnode\OnEventNode.hx
    |   |-- armory\logicnode\OnGamepadNode.hx
    |   |-- armory\logicnode\OnInitNode.hx
    |   |-- armory\logicnode\OnInputMapNode.hx
    |   |-- armory\logicnode\OnKeyboardNode.hx
    |   |-- armory\logicnode\OnMouseNode.hx
    |   |-- armory\logicnode\OnRender2DNode.hx
    |   |-- armory\logicnode\OnSurfaceNode.hx
    |   |-- armory\logicnode\OnSwipeNode.hx
    |   |-- armory\logicnode\OnTapScreen.hx
    |   |-- armory\logicnode\OnTimerNode.hx
    |   |-- armory\logicnode\OnUpdateNode.hx
    |   |-- armory\logicnode\OnVirtualButtonNode.hx
    |   |-- armory\logicnode\OnVolumeTriggerNode.hx
    |   |-- armory\logicnode\OncePerFrameNode.hx
    |   |-- armory\logicnode\ParseFloatNode.hx
    |   |-- armory\logicnode\ParseIntNode.hx
    |   |-- armory\logicnode\PauseActionNode.hx
    |   |-- armory\logicnode\PauseActiveCameraRenderNode.hx
    |   |-- armory\logicnode\PauseSoundNode.hx
    |   |-- armory\logicnode\PauseTilesheetNode.hx
    |   |-- armory\logicnode\PauseTraitNode.hx
    |   |-- armory\logicnode\PhysicsConstraintNode.hx
    |   |-- armory\logicnode\PhysicsConvexCastNode.hx
    |   |-- armory\logicnode\PhysicsConvexCastOnNode.hx
    |   |-- armory\logicnode\PickLocationNode.hx
    |   |-- armory\logicnode\PickObjectNode.hx
    |   |-- armory\logicnode\PlayActionFromNode.hx
    |   |-- armory\logicnode\PlayActionNode.hx
    |   |-- armory\logicnode\PlaySoundNode.hx
    |   |-- armory\logicnode\PlaySoundRawNode.hx
    |   |-- armory\logicnode\PlayTilesheetNode.hx
    |   |-- armory\logicnode\PrintNode.hx
    |   |-- armory\logicnode\PulseNode.hx
    |   |-- armory\logicnode\QuaternionMathNode.hx
    |   |-- armory\logicnode\QuaternionNode.hx
    |   |-- armory\logicnode\RadToDegNode.hx
    |   |-- armory\logicnode\RandomBooleanNode.hx
    |   |-- armory\logicnode\RandomChoiceNode.hx
    |   |-- armory\logicnode\RandomColorNode.hx
    |   |-- armory\logicnode\RandomFloatNode.hx
    |   |-- armory\logicnode\RandomIntegerNode.hx
    |   |-- armory\logicnode\RandomOutputNode.hx
    |   |-- armory\logicnode\RandomStringNode.hx
    |   |-- armory\logicnode\RandomVectorNode.hx
    |   |-- armory\logicnode\RaycastClosestObjectNode.hx
    |   |-- armory\logicnode\RaycastObjectNode.hx
    |   |-- armory\logicnode\ReadFileNode.hx
    |   |-- armory\logicnode\ReadJsonNode.hx
    |   |-- armory\logicnode\ReadStorageNode.hx
    |   |-- armory\logicnode\RemoveActiveSceneNode.hx
    |   |-- armory\logicnode\RemoveGroupNode.hx
    |   |-- armory\logicnode\RemoveInputMapKeyNode.hx
    |   |-- armory\logicnode\RemoveObjectFromGroupNode.hx
    |   |-- armory\logicnode\RemoveObjectNode.hx
    |   |-- armory\logicnode\RemoveParentBoneNode.hx
    |   |-- armory\logicnode\RemovePhysicsNode.hx
    |   |-- armory\logicnode\RemoveTraitNode.hx
    |   |-- armory\logicnode\RemoveTraitObjectNode.hx
    |   |-- armory\logicnode\ResumeActionNode.hx
    |   |-- armory\logicnode\ResumeTilesheetNode.hx
    |   |-- armory\logicnode\ResumeTraitNode.hx
    |   |-- armory\logicnode\RetainValueNode.hx
    |   |-- armory\logicnode\RotateObjectAroundAxisNode.hx
    |   |-- armory\logicnode\RotateObjectNode.hx
    |   |-- armory\logicnode\RotateRenderTargetNode.hx
    |   |-- armory\logicnode\RotationMathNode.hx
    |   |-- armory\logicnode\RotationNode.hx
    |   |-- armory\logicnode\RpConfigNode.hx
    |   |-- armory\logicnode\RpMSAANode.hx
    |   |-- armory\logicnode\RpShadowQualityNode.hx
    |   |-- armory\logicnode\RpSuperSampleNode.hx
    |   |-- armory\logicnode\SSAOGetNode.hx
    |   |-- armory\logicnode\SSAOSetNode.hx
    |   |-- armory\logicnode\SSRGetNode.hx
    |   |-- armory\logicnode\SSRSetNode.hx
    |   |-- armory\logicnode\ScaleObjectNode.hx
    |   |-- armory\logicnode\SceneNode.hx
    |   |-- armory\logicnode\SceneRootNode.hx
    |   |-- armory\logicnode\ScreenToWorldSpaceNode.hx
    |   |-- armory\logicnode\ScriptNode.hx
    |   |-- armory\logicnode\SelectNode.hx
    |   |-- armory\logicnode\SelfNode.hx
    |   |-- armory\logicnode\SelfTraitNode.hx
    |   |-- armory\logicnode\SendEventNode.hx
    |   |-- armory\logicnode\SendGlobalEventNode.hx
    |   |-- armory\logicnode\SensorCoordsNode.hx
    |   |-- armory\logicnode\SeparateColorHSVNode.hx
    |   |-- armory\logicnode\SeparateColorNode.hx
    |   |-- armory\logicnode\SeparateQuaternionNode.hx
    |   |-- armory\logicnode\SeparateRotationNode.hx
    |   |-- armory\logicnode\SeparateTransformNode.hx
    |   |-- armory\logicnode\SeparateVectorNode.hx
    |   |-- armory\logicnode\SequenceNode.hx
    |   |-- armory\logicnode\SetActionPausedNode.hx
    |   |-- armory\logicnode\SetActionSpeedNode.hx
    |   |-- armory\logicnode\SetActivationStateNode.hx
    |   |-- armory\logicnode\SetAreaLightSizeNode.hx
    |   |-- armory\logicnode\SetBoneFkIkOnlyNode.hx
    |   |-- armory\logicnode\SetCameraAspectNode.hx
    |   |-- armory\logicnode\SetCameraFovNode.hx
    |   |-- armory\logicnode\SetCameraNode.hx
    |   |-- armory\logicnode\SetCameraScaleNode.hx
    |   |-- armory\logicnode\SetCameraStartEndNode.hx
    |   |-- armory\logicnode\SetCameraTypeNode.hx
    |   |-- armory\logicnode\SetCursorStateNode.hx
    |   |-- armory\logicnode\SetDebugConsoleSettings.hx
    |   |-- armory\logicnode\SetFrictionNode.hx
    |   |-- armory\logicnode\SetGlobalCanvasFontSizeNode.hx
    |   |-- armory\logicnode\SetGlobalCanvasScaleNode.hx
    |   |-- armory\logicnode\SetGravityEnabledNode.hx
    |   |-- armory\logicnode\SetGravityNode.hx
    |   |-- armory\logicnode\SetHaxePropertyNode.hx
    |   |-- armory\logicnode\SetInputMapKeyNode.hx
    |   |-- armory\logicnode\SetLightColorNode.hx
    |   |-- armory\logicnode\SetLightStrengthNode.hx
    |   |-- armory\logicnode\SetLocationNode.hx
    |   |-- armory\logicnode\SetMaterialImageParamNode.hx
    |   |-- armory\logicnode\SetMaterialNode.hx
    |   |-- armory\logicnode\SetMaterialRgbParamNode.hx
    |   |-- armory\logicnode\SetMaterialSlotNode.hx
    |   |-- armory\logicnode\SetMaterialValueParamNode.hx
    |   |-- armory\logicnode\SetMeshNode.hx
    |   |-- armory\logicnode\SetMouseLockNode.hx
    |   |-- armory\logicnode\SetNameNode.hx
    |   |-- armory\logicnode\SetObjectShapeKeyNode.hx
    |   |-- armory\logicnode\SetParentBoneNode.hx
    |   |-- armory\logicnode\SetParentNode.hx
    |   |-- armory\logicnode\SetParticleSpeedNode.hx
    |   |-- armory\logicnode\SetPropertyNode.hx
    |   |-- armory\logicnode\SetRotationNode.hx
    |   |-- armory\logicnode\SetScaleNode.hx
    |   |-- armory\logicnode\SetSceneNode.hx
    |   |-- armory\logicnode\SetShaderUniformNode.hx
    |   |-- armory\logicnode\SetSpotLightBlendNode.hx
    |   |-- armory\logicnode\SetSpotLightSizeNode.hx
    |   |-- armory\logicnode\SetTilesheetPausedNode.hx
    |   |-- armory\logicnode\SetTimeScaleNode.hx
    |   |-- armory\logicnode\SetTraitPausedNode.hx
    |   |-- armory\logicnode\SetTransformNode.hx
    |   |-- armory\logicnode\SetVariableNode.hx
    |   |-- armory\logicnode\SetVelocityNode.hx
    |   |-- armory\logicnode\SetVibrateNode.hx
    |   |-- armory\logicnode\SetVisibleNode.hx
    |   |-- armory\logicnode\ShowMouseNode.hx
    |   |-- armory\logicnode\ShutdownNode.hx
    |   |-- armory\logicnode\SleepNode.hx
    |   |-- armory\logicnode\SpawnCollectionNode.hx
    |   |-- armory\logicnode\SpawnObjectByNameNode.hx
    |   |-- armory\logicnode\SpawnObjectNode.hx
    |   |-- armory\logicnode\SpawnSceneNode.hx
    |   |-- armory\logicnode\SplitStringNode.hx
    |   |-- armory\logicnode\StopAgentNode.hx
    |   |-- armory\logicnode\StopSoundNode.hx
    |   |-- armory\logicnode\StringNode.hx
    |   |-- armory\logicnode\StringReplaceNode.hx
    |   |-- armory\logicnode\SubStringNode.hx
    |   |-- armory\logicnode\SurfaceCoordsNode.hx
    |   |-- armory\logicnode\SwitchNode.hx
    |   |-- armory\logicnode\TimeNode.hx
    |   |-- armory\logicnode\TimerNode.hx
    |   |-- armory\logicnode\ToBoolNode.hx
    |   |-- armory\logicnode\TouchInRegionNode.hx
    |   |-- armory\logicnode\TraitNode.hx
    |   |-- armory\logicnode\TransformMathNode.hx
    |   |-- armory\logicnode\TransformNode.hx
    |   |-- armory\logicnode\TranslateObjectNode.hx
    |   |-- armory\logicnode\TranslateOnLocalAxisNode.hx
    |   |-- armory\logicnode\TweenFloatNode.hx
    |   |-- armory\logicnode\TweenRotationNode.hx
    |   |-- armory\logicnode\TweenTransformNode.hx
    |   |-- armory\logicnode\TweenVectorNode.hx
    |   |-- armory\logicnode\ValueChangedNode.hx
    |   |-- armory\logicnode\VectorClampToSizeNode.hx
    |   |-- armory\logicnode\VectorFromBooleanNode.hx
    |   |-- armory\logicnode\VectorFromTransformNode.hx
    |   |-- armory\logicnode\VectorMathNode.hx
    |   |-- armory\logicnode\VectorMixNode.hx
    |   |-- armory\logicnode\VectorMoveTowardsNode.hx
    |   |-- armory\logicnode\VectorNode.hx
    |   |-- armory\logicnode\VectorToObjectOrientationNode.hx
    |   |-- armory\logicnode\VolumeTriggerNode.hx
    |   |-- armory\logicnode\WhileNode.hx
    |   |-- armory\logicnode\WindowInfoNode.hx
    |   |-- armory\logicnode\WorldToScreenSpaceNode.hx
    |   |-- armory\logicnode\WorldVectorToLocalSpaceNode.hx
    |   |-- armory\logicnode\WriteFileNode.hx
    |   |-- armory\logicnode\WriteJsonNode.hx
    |   `-- armory\logicnode\WriteStorageNode.hx
    |-- armory.math
    |   |-- armory\math\Helper.hx
    |   `-- armory\math\Rotator.hx
    |-- armory.network
    |   |-- armory\network\Buffer.hx
    |   |-- armory\network\Connect.hx
    |   |-- armory\network\Handler.hx
    |   |-- armory\network\HttpHeader.hx
    |   |-- armory\network\HttpRequest.hx
    |   |-- armory\network\HttpResponse.hx
    |   |-- armory\network\LICENSE.md
    |   |-- armory\network\Log.hx
    |   |-- armory\network\OpCode.hx
    |   |-- armory\network\SecureSocketImpl.hx
    |   |-- armory\network\SocketImpl.hx
    |   |-- armory\network\State.hx
    |   |-- armory\network\Types.hx
    |   |-- armory\network\Utf8Encoder.hx
    |   |-- armory\network\Util.hx
    |   |-- armory\network\WebSocket.hx
    |   |-- armory\network\WebSocketCommon.hx
    |   |-- armory\network\WebSocketHandler.hx
    |   |-- armory\network\WebSocketSecureServer.hx
    |   |-- armory\network\WebSocketServer.hx
    |   |-- armory.network.nodejs
    |   |   |-- armory\network\nodejs\NodeSocket.hx
    |   |   |-- armory\network\nodejs\NodeSocketInput.hx
    |   |   `-- armory\network\nodejs\NodeSocketOutput.hx
    |   `-- armory.network.uuid
    |       `-- armory\network\uuid\Uuid.hx
    |-- armory.object
    |   |-- armory\object\TransformExtension.hx
    |   `-- armory\object\Uniforms.hx
    |-- armory.renderpath
    |   |-- armory\renderpath\Downsampler.hx
    |   |-- armory\renderpath\DynamicResolutionScale.hx
    |   |-- armory\renderpath\HosekWilkie.hx
    |   |-- armory\renderpath\HosekWilkieData.hx
    |   |-- armory\renderpath\Inc.hx
    |   |-- armory\renderpath\Nishita.hx
    |   |-- armory\renderpath\Postprocess.hx
    |   |-- armory\renderpath\RenderPathCreator.hx
    |   |-- armory\renderpath\RenderPathDeferred.hx
    |   |-- armory\renderpath\RenderPathForward.hx
    |   |-- armory\renderpath\RenderPathRaytracer.hx
    |   |-- armory\renderpath\RenderToTexture.hx
    |   `-- armory\renderpath\Upsampler.hx
    |-- armory.system
    |   |-- armory\system\Assert.hx
    |   |-- armory\system\Event.hx
    |   |-- armory\system\FSM.hx
    |   |-- armory\system\InputMap.hx
    |   |-- armory\system\Logic.hx
    |   `-- armory\system\Starter.hx
    |-- armory.trait
    |   |-- armory\trait\ArcBall.hx
    |   |-- armory\trait\Character.hx
    |   |-- armory\trait\CustomParticle.hx
    |   |-- armory\trait\FirstPersonController.hx
    |   |-- armory\trait\FollowCamera.hx
    |   |-- armory\trait\NavAgent.hx
    |   |-- armory\trait\NavCrowd.hx
    |   |-- armory\trait\NavMesh.hx
    |   |-- armory\trait\PhysicsBreak.hx
    |   |-- armory\trait\PhysicsDrag.hx
    |   |-- armory\trait\SimpleMoveObject.hx
    |   |-- armory\trait\SimpleRotateObject.hx
    |   |-- armory\trait\SimpleScaleObject.hx
    |   |-- armory\trait\ThirdPersonController.hx
    |   |-- armory\trait\VehicleBody.hx
    |   |-- armory\trait\VirtualGamepad.hx
    |   |-- armory\trait\WalkNavigation.hx
    |   |-- armory.trait.internal
    |   |   |-- armory\trait\internal\Bridge.hx
    |   |   |-- armory\trait\internal\CameraController.hx
    |   |   |-- armory\trait\internal\CanvasScript.hx
    |   |   |-- armory\trait\internal\DebugConsole.hx
    |   |   |-- armory\trait\internal\DebugDraw.hx
    |   |   |-- armory\trait\internal\LivePatch.hx
    |   |   |-- armory\trait\internal\LoadingScreen.hx
    |   |   |-- armory\trait\internal\MovieTexture.hx
    |   |   |-- armory\trait\internal\TerrainPhysics.hx
    |   |   |-- armory\trait\internal\UniformsManager.hx
    |   |   |-- armory\trait\internal\WasmScript.hx
    |   |   `-- armory\trait\internal\wasm_api.h
    |   |-- armory.trait.navigation
    |   |   `-- armory\trait\navigation\Navigation.hx
    |   `-- armory.trait.physics
    |       |-- armory\trait\physics\KinematicCharacterController.hx
    |       |-- armory\trait\physics\PhysicsConstraint.hx
    |       |-- armory\trait\physics\PhysicsHook.hx
    |       |-- armory\trait\physics\PhysicsWorld.hx
    |       |-- armory\trait\physics\RigidBody.hx
    |       |-- armory\trait\physics\SoftBody.hx
    |       `-- armory.trait.physics.bullet
    |           |-- armory\trait\physics\bullet\KinematicCharacterController.hx
    |           |-- armory\trait\physics\bullet\PhysicsConstraint.hx
    |           |-- armory\trait\physics\bullet\PhysicsConstraintExportHelper.hx
    |           |-- armory\trait\physics\bullet\PhysicsHook.hx
    |           |-- armory\trait\physics\bullet\PhysicsWorld.hx
    |           |-- armory\trait\physics\bullet\RigidBody.hx
    |           `-- armory\trait\physics\bullet\SoftBody.hx
    `-- armory.ui
        |-- armory\ui\Canvas.hx
        |-- armory\ui\Ext.hx
        |-- armory\ui\Popup.hx
        `-- armory\ui\Themes.hx



## 🐥 Sources List - Kha
                                                          **Sources List - Kha**

    Kha Sources
    |-- Shaders
    |   |-- Shaders\painter-colored.frag.glsl
    |   |-- Shaders\painter-colored.vert.glsl
    |   |-- Shaders\painter-image.frag.glsl
    |   |-- Shaders\painter-image.vert.glsl
    |   |-- Shaders\painter-text.frag.glsl
    |   |-- Shaders\painter-text.vert.glsl
    |   |-- Shaders\painter-video.frag.glsl
    |   `-- Shaders\painter-video.vert.glsl
    |-- haxe
    |   `-- haxe\Timer.hx
    `-- kha
        |-- kha\AssetError.hx
        |-- kha\Assets.hx
        |-- kha\Blob.hx
        |-- kha\Canvas.hx
        |-- kha\CodeStyle.hx
        |-- kha\Color.hx
        |-- kha\Display.hx
        |-- kha\DisplayMode.hx
        |-- kha\EnvironmentVariables.hx
        |-- kha\FastFloat.hx
        |-- kha\Float32ArrayExtensions.hx
        |-- kha\Font.hx
        |-- kha\FontStyle.hx
        |-- kha\Framebuffer.hx
        |-- kha\FramebufferOptions.hx
        |-- kha\HaxelibRunner.hx
        |-- kha\Image.hx
        |-- kha\Kravur.hx
        |-- kha\Resource.hx
        |-- kha\Rotation.hx
        |-- kha\Scaler.hx
        |-- kha\Scheduler.hx
        |-- kha\ScreenCanvas.hx
        |-- kha\ScreenRotation.hx
        |-- kha\Shaders.hx
        |-- kha\Sound.hx
        |-- kha\StorageFile.hx
        |-- kha\StringExtensions.hx
        |-- kha\System.hx
        |-- kha\Video.hx
        |-- kha\Window.hx
        |-- kha\WindowMode.hx
        |-- kha\WindowOptions.hx
        |-- kha\Worker.hx
        |-- kha.arrays
        |   |-- kha\arrays\ByteArray.hx
        |   |-- kha\arrays\ByteBuffer.hx
        |   |-- kha\arrays\Float32Array.hx
        |   |-- kha\arrays\Float64Array.hx
        |   |-- kha\arrays\Int16Array.hx
        |   |-- kha\arrays\Int32Array.hx
        |   |-- kha\arrays\Int8Array.hx
        |   |-- kha\arrays\Uint16Array.hx
        |   |-- kha\arrays\Uint32Array.hx
        |   `-- kha\arrays\Uint8Array.hx
        |-- kha.audio1
        |   |-- kha\audio1\Audio.hx
        |   `-- kha\audio1\AudioChannel.hx
        |-- kha.audio2
        |   |-- kha\audio2\Audio.hx
        |   |-- kha\audio2\Audio1.hx
        |   |-- kha\audio2\AudioChannel.hx
        |   |-- kha\audio2\Buffer.hx
        |   |-- kha\audio2\ResamplingAudioChannel.hx
        |   |-- kha\audio2\StreamChannel.hx
        |   `-- kha\audio2\ogg
        |       |-- kha.audio2.ogg.tools
        |       |   |-- kha\audio2\ogg\tools\Crc32.hx
        |       |   |-- kha\audio2\ogg\tools\MathTools.hx
        |       |   `-- kha\audio2\ogg\tools\Mdct.hx
        |       `-- kha.audio2.ogg.vorbis
        |           |-- kha\audio2\ogg\vorbis\Reader.hx
        |           |-- kha\audio2\ogg\vorbis\VorbisDecodeState.hx
        |           |-- kha\audio2\ogg\vorbis\VorbisDecoder.hx
        |           |-- kha\audio2\ogg\vorbis\VorbisTools.hx
        |           `-- kha.audio2.ogg.vorbis.data
        |               |-- kha\audio2\ogg\vorbis\data\Codebook.hx
        |               |-- kha\audio2\ogg\vorbis\data\Comment.hx
        |               |-- kha\audio2\ogg\vorbis\data\Floor.hx
        |               |-- kha\audio2\ogg\vorbis\data\Header.hx
        |               |-- kha\audio2\ogg\vorbis\data\IntPoint.hx
        |               |-- kha\audio2\ogg\vorbis\data\Mapping.hx
        |               |-- kha\audio2\ogg\vorbis\data\Mode.hx
        |               |-- kha\audio2\ogg\vorbis\data\Page.hx
        |               |-- kha\audio2\ogg\vorbis\data\ProbedPage.hx
        |               |-- kha\audio2\ogg\vorbis\data\ReaderError.hx
        |               |-- kha\audio2\ogg\vorbis\data\Residue.hx
        |               `-- kha\audio2\ogg\vorbis\data\Setting.hx
        |-- kha.capture
        |   |-- kha\capture\AudioCapture.hx
        |   `-- kha\capture\VideoCapture.hx
        |-- kha.compute
        |   |-- kha\compute\Access.hx
        |   |-- kha\compute\Compute.hx
        |   |-- kha\compute\ConstantLocation.hx
        |   |-- kha\compute\Shader.hx
        |   |-- kha\compute\ShaderStorageBuffer.hx
        |   `-- kha\compute\TextureUnit.hx
        |-- kha.deprecated
        |   `-- kha\deprecated\Painter.hx
        |-- kha.graphics1
        |   |-- kha\graphics1\Graphics.hx
        |   `-- kha\graphics1\Graphics4.hx
        |-- kha.graphics2
        |   |-- kha\graphics2\Graphics.hx
        |   |-- kha\graphics2\Graphics1.hx
        |   |-- kha\graphics2\GraphicsExtension.hx
        |   |-- kha\graphics2\HorTextAlignment.hx
        |   |-- kha\graphics2\ImageScaleQuality.hx
        |   |-- kha\graphics2\VerTextAlignment.hx
        |   `-- kha.graphics2.truetype
        |       |-- kha\graphics2\truetype\StbTruetype.hx
        |       `-- kha\graphics2\truetype\stb_truetype.h
        |-- kha.graphics4
        |   |-- kha\graphics4\BlendingFactor.hx
        |   |-- kha\graphics4\BlendingOperation.hx
        |   |-- kha\graphics4\CompareMode.hx
        |   |-- kha\graphics4\ConstantLocation.hx
        |   |-- kha\graphics4\CubeMap.hx
        |   |-- kha\graphics4\CullMode.hx
        |   |-- kha\graphics4\DepthStencilFormat.hx
        |   |-- kha\graphics4\FragmentShader.hx
        |   |-- kha\graphics4\GeometryShader.hx
        |   |-- kha\graphics4\Graphics.hx
        |   |-- kha\graphics4\Graphics2.hx
        |   |-- kha\graphics4\IndexBuffer.hx
        |   |-- kha\graphics4\MipMapFilter.hx
        |   |-- kha\graphics4\PipelineState.hx
        |   |-- kha\graphics4\PipelineStateBase.hx
        |   |-- kha\graphics4\StencilAction.hx
        |   |-- kha\graphics4\StencilValue.hx
        |   |-- kha\graphics4\TessellationControlShader.hx
        |   |-- kha\graphics4\TessellationEvaluationShader.hx
        |   |-- kha\graphics4\TexDir.hx
        |   |-- kha\graphics4\TextureAddressing.hx
        |   |-- kha\graphics4\TextureFilter.hx
        |   |-- kha\graphics4\TextureFormat.hx
        |   |-- kha\graphics4\TextureUnit.hx
        |   |-- kha\graphics4\Usage.hx
        |   |-- kha\graphics4\VertexBuffer.hx
        |   |-- kha\graphics4\VertexData.hx
        |   |-- kha\graphics4\VertexElement.hx
        |   |-- kha\graphics4\VertexShader.hx
        |   |-- kha\graphics4\VertexStructure.hx
        |   `-- kha.graphics4.hxsl
        |       |-- kha\graphics4\hxsl\Ast.hx
        |       |-- kha\graphics4\hxsl\Cache.hx
        |       |-- kha\graphics4\hxsl\Checker.hx
        |       |-- kha\graphics4\hxsl\Clone.hx
        |       |-- kha\graphics4\hxsl\Dce.hx
        |       |-- kha\graphics4\hxsl\Eval.hx
        |       |-- kha\graphics4\hxsl\Flatten.hx
        |       |-- kha\graphics4\hxsl\Globals.hx
        |       |-- kha\graphics4\hxsl\GlslOut.hx
        |       |-- Sources\kha\graphics4\hxsl\LICENSE
        |       |-- kha\graphics4\hxsl\Linker.hx
        |       |-- kha\graphics4\hxsl\MacroParser.hx
        |       |-- kha\graphics4\hxsl\Macros.hx
        |       |-- kha\graphics4\hxsl\Printer.hx
        |       |-- kha\graphics4\hxsl\RuntimeShader.hx
        |       |-- kha\graphics4\hxsl\Serializer.hx
        |       |-- kha\graphics4\hxsl\Shader.hx
        |       |-- kha\graphics4\hxsl\ShaderList.hx
        |       |-- kha\graphics4\hxsl\SharedShader.hx
        |       |-- kha\graphics4\hxsl\Splitter.hx
        |       `-- kha\graphics4\hxsl\Types.hx
        |-- kha.graphics5_
        |   |-- kha\graphics5_\AccelerationStructure.hx
        |   |-- kha\graphics5_\BlendingFactor.hx
        |   |-- kha\graphics5_\BlendingOperation.hx
        |   |-- kha\graphics5_\CommandList.hx
        |   |-- kha\graphics5_\CompareMode.hx
        |   |-- kha\graphics5_\ConstantBuffer.hx
        |   |-- kha\graphics5_\ConstantLocation.hx
        |   |-- kha\graphics5_\CubeMap.hx
        |   |-- kha\graphics5_\CullMode.hx
        |   |-- kha\graphics5_\FragmentShader.hx
        |   |-- kha\graphics5_\GeometryShader.hx
        |   |-- kha\graphics5_\Graphics.hx
        |   |-- kha\graphics5_\IndexBuffer.hx
        |   |-- kha\graphics5_\MipMapFilter.hx
        |   |-- kha\graphics5_\PipelineState.hx
        |   |-- kha\graphics5_\PipelineStateBase.hx
        |   |-- kha\graphics5_\RenderTarget.hx
        |   |-- kha\graphics5_\StencilAction.hx
        |   |-- kha\graphics5_\TessellationControlShader.hx
        |   |-- kha\graphics5_\TessellationEvaluationShader.hx
        |   |-- kha\graphics5_\TextureAddressing.hx
        |   |-- kha\graphics5_\TextureFilter.hx
        |   |-- kha\graphics5_\TextureFormat.hx
        |   |-- kha\graphics5_\TextureUnit.hx
        |   |-- kha\graphics5_\Usage.hx
        |   |-- kha\graphics5_\VertexBuffer.hx
        |   |-- kha\graphics5_\VertexData.hx
        |   |-- kha\graphics5_\VertexElement.hx
        |   |-- kha\graphics5_\VertexShader.hx
        |   `-- kha\graphics5_\VertexStructure.hx
        |-- kha.input
        |   |-- kha\input\Gamepad.hx
        |   |-- kha\input\KeyCode.hx
        |   |-- kha\input\Keyboard.hx
        |   |-- kha\input\Mouse.hx
        |   |-- kha\input\Pen.hx
        |   |-- kha\input\Sensor.hx
        |   |-- kha\input\SensorType.hx
        |   `-- kha\input\Surface.hx
        |-- kha.internal
        |   |-- kha\internal\AssetErrorCallback.hx
        |   |-- kha\internal\AssetsBuilder.hx
        |   |-- kha\internal\BytesBlob.hx
        |   |-- kha\internal\HdrFormat.hx
        |   |-- kha\internal\IntBox.hx
        |   |-- kha\internal\IntCallback.hx
        |   |-- kha\internal\ShadersBuilder.hx
        |   `-- kha\internal\VoidCallback.hx
        |-- kha.math
        |   |-- kha\math\FastMatrix2.hx
        |   |-- kha\math\FastMatrix3.hx
        |   |-- kha\math\FastMatrix4.hx
        |   |-- kha\math\FastVector2.hx
        |   |-- kha\math\FastVector3.hx
        |   |-- kha\math\FastVector4.hx
        |   |-- kha\math\Matrix2.hx
        |   |-- kha\math\Matrix3.hx
        |   |-- kha\math\Matrix4.hx
        |   |-- kha\math\Quaternion.hx
        |   |-- kha\math\Random.hx
        |   |-- kha\math\Vector2.hx
        |   |-- kha\math\Vector2i.hx
        |   |-- kha\math\Vector3.hx
        |   `-- kha\math\Vector4.hx
        |-- kha.netsync
        |   |-- kha\netsync\Client.hx
        |   |-- kha\netsync\Controller.hx
        |   |-- kha\netsync\ControllerBuilder.hx
        |   |-- kha\netsync\Entity.hx
        |   |-- kha\netsync\EntityBuilder.hx
        |   |-- kha\netsync\Example.hx
        |   |-- kha\netsync\LocalClient.hx
        |   |-- kha\netsync\Network.hx
        |   |-- kha\netsync\NodeProcessClient.hx
        |   |-- kha\netsync\Server.hx
        |   |-- kha\netsync\Session.hx
        |   |-- kha\netsync\Sync.hx
        |   |-- kha\netsync\SyncBuilder.hx
        |   |-- kha\netsync\UdpClient.hx
        |   `-- kha\netsync\WebSocketClient.hx
        |-- kha.network
        |   |-- kha\network\Http.hx
        |   `-- kha\network\HttpMethod.hx
        |-- kha.simd
        |   `-- kha\simd\Float32x4.hx
        `-- kha.vr
            |-- kha\vr\Pose.hx
            |-- kha\vr\PoseState.hx
            |-- kha\vr\SensorState.hx
            |-- kha\vr\TimeWarpImage.hx
            |-- kha\vr\TimeWarpParms.hx
            |-- kha\vr\VrInterface.hx
            `-- kha\vr\VrInterfaceEmulated.hx


## 🐥 Sources List - Khamake
                                                      **Sources List - Khamake**

    Kha\Tools\khamake
    |-- khamake\Data
    |   |-- khamake\Data\android
    |   |   |-- khamake\Data\android\app
    |   |   |   |-- khamake\Data\android\app\build.gradle
    |   |   |   |-- khamake\Data\android\app\gitignore
    |   |   |   `-- khamake\Data\android\app\proguard-rules.pro
    |   |   |-- khamake\Data\android\build.gradle
    |   |   |-- khamake\Data\android\gitignore
    |   |   |-- khamake\Data\android\gradle
    |   |   |   `-- khamake\Data\android\gradle\wrapper
    |   |   |       |-- khamake\Data\android\gradle\wrapper\gradle-wrapper.jar
    |   |   |       `-- khamake\Data\android\gradle\wrapper\gradle-wrapper.properties
    |   |   |-- khamake\Data\android\gradle.properties
    |   |   |-- khamake\Data\android\gradlew
    |   |   |-- khamake\Data\android\gradlew.bat
    |   |   |-- khamake\Data\android\idea
    |   |   |   |-- khamake\Data\android\idea\codeStyles
    |   |   |   |   `-- khamake\Data\android\idea\codeStyles\Project.xml
    |   |   |   |-- khamake\Data\android\idea\gradle.xml
    |   |   |   |-- khamake\Data\android\idea\misc.xml
    |   |   |   `-- khamake\Data\android\idea\runConfigurations.xml
    |   |   |-- khamake\Data\android\main
    |   |   |   |-- khamake\Data\android\main\AndroidManifest.xml
    |   |   |   `-- khamake\Data\android\main\res
    |   |   |       `-- khamake\Data\android\main\res\values
    |   |   |           `-- khamake\Data\android\main\res\values\strings.xml
    |   |   `-- khamake\Data\android\settings.gradle
    |   |-- khamake\Data\debug-html5
    |   |   |-- khamake\Data\debug-html5\electron.js
    |   |   |-- khamake\Data\debug-html5\index.html
    |   |   |-- khamake\Data\debug-html5\package.json
    |   |   `-- khamake\Data\debug-html5\preload.js
    |   |-- khamake\Data\hl
    |   |   |-- khamake\Data\hl\kfile.js
    |   |   |-- khamake\Data\hl\kincfile.js
    |   |   `-- khamake\Data\hl\kore_sources.c
    |   |-- khamake\Data\html5
    |   |   `-- khamake\Data\html5\index.html
    |   |-- khamake\Data\hxcpp
    |   |   `-- khamake\Data\hxcpp\kfile.js
    |   |-- khamake\Data\intellij
    |   |   |-- khamake\Data\intellij\idea
    |   |   |   |-- khamake\Data\intellij\idea\compiler.xml
    |   |   |   |-- khamake\Data\intellij\idea\copyright
    |   |   |   |   `-- khamake\Data\intellij\idea\copyright\profiles_settings.xml
    |   |   |   |-- khamake\Data\intellij\idea\haxe.xml
    |   |   |   |-- khamake\Data\intellij\idea\misc.xml
    |   |   |   |-- khamake\Data\intellij\idea\modules.xml
    |   |   |   |-- khamake\Data\intellij\idea\name
    |   |   |   `-- khamake\Data\intellij\idea\vcs.xml
    |   |   `-- khamake\Data\intellij\name.iml
    |   |-- khamake\Data\node
    |   |   |-- khamake\Data\node\package.json
    |   |   `-- khamake\Data\node\server.js
    |   `-- khamake\Data\psm
    |       |-- khamake\Data\psm\Texture.fcg
    |       |-- khamake\Data\psm\Texture.vcg
    |       `-- khamake\Data\psm\app.xml
    |-- khamake\hooks
    |   `-- khamake\hooks\pre-commit
    |-- khamake\khamake.js
    |-- khamake\node_modules
    |-- khamake\out
    |   |-- khamake\out\Architecture.js
    |   |-- khamake\out\AssetConverter.js
    |   |-- khamake\out\AudioApi.js
    |   |-- khamake\out\Color.js
    |   |-- khamake\out\Converter.js
    |   |-- khamake\out\Exporters
    |   |   |-- khamake\out\Exporters\AndroidExporter.js
    |   |   |-- khamake\out\Exporters\CSharpExporter.js
    |   |   |-- khamake\out\Exporters\DebugHtml5Exporter.js
    |   |   |-- khamake\out\Exporters\EmptyExporter.js
    |   |   |-- khamake\out\Exporters\Exporter.js
    |   |   |-- khamake\out\Exporters\FlashExporter.js
    |   |   |-- khamake\out\Exporters\Html5Exporter.js
    |   |   |-- khamake\out\Exporters\Html5WorkerExporter.js
    |   |   |-- khamake\out\Exporters\JavaExporter.js
    |   |   |-- khamake\out\Exporters\KhaExporter.js
    |   |   |-- khamake\out\Exporters\KincExporter.js
    |   |   |-- khamake\out\Exporters\KincHLExporter.js
    |   |   |-- khamake\out\Exporters\KoreExporter.js
    |   |   |-- khamake\out\Exporters\KoreHLExporter.js
    |   |   |-- khamake\out\Exporters\KromExporter.js
    |   |   |-- khamake\out\Exporters\NodeExporter.js
    |   |   |-- khamake\out\Exporters\PlayStationMobileExporter.js
    |   |   |-- khamake\out\Exporters\UnityExporter.js
    |   |   `-- khamake\out\Exporters\WpfExporter.js
    |   |-- khamake\out\GraphicsApi.js
    |   |-- khamake\out\Haxe.js
    |   |-- khamake\out\HaxeCompiler.js
    |   |-- khamake\out\HaxeProject.js
    |   |-- khamake\out\Icon.js
    |   |-- khamake\out\ImageTool.js
    |   |-- khamake\out\Options.js
    |   |-- khamake\out\Platform.js
    |   |-- khamake\out\Project.js
    |   |-- khamake\out\ProjectFile.js
    |   |-- khamake\out\RayTraceApi.js
    |   |-- khamake\out\ShaderCompiler.js
    |   |-- khamake\out\VisualStudioVersion.js
    |   |-- khamake\out\VrApi.js
    |   |-- khamake\out\XmlWriter.js
    |   |-- khamake\out\defaults.js
    |   |-- khamake\out\exec.js
    |   |-- khamake\out\init.js
    |   |-- khamake\out\khamake.js
    |   |-- khamake\out\korepath.js
    |   |-- khamake\out\log.js
    |   |-- khamake\out\main.js
    |   `-- khamake\out\typings.json
    |-- khamake\package-lock.json
    |-- khamake\package.json
    |-- khamake\src
    |   |-- khamake\src\Architecture.ts
    |   |-- khamake\src\AssetConverter.ts
    |   |-- khamake\src\AudioApi.ts
    |   |-- khamake\src\Color.ts
    |   |-- khamake\src\Converter.ts
    |   |-- khamake\src\Exporters
    |   |   |-- khamake\src\Exporters\CSharpExporter.ts
    |   |   |-- khamake\src\Exporters\DebugHtml5Exporter.ts
    |   |   |-- khamake\src\Exporters\EmptyExporter.ts
    |   |   |-- khamake\src\Exporters\Exporter.ts
    |   |   |-- khamake\src\Exporters\FlashExporter.ts
    |   |   |-- khamake\src\Exporters\Html5Exporter.ts
    |   |   |-- khamake\src\Exporters\Html5WorkerExporter.ts
    |   |   |-- khamake\src\Exporters\JavaExporter.ts
    |   |   |-- khamake\src\Exporters\KhaExporter.ts
    |   |   |-- khamake\src\Exporters\KincExporter.ts
    |   |   |-- khamake\src\Exporters\KincHLExporter.ts
    |   |   |-- khamake\src\Exporters\KromExporter.ts
    |   |   |-- khamake\src\Exporters\NodeExporter.ts
    |   |   |-- khamake\src\Exporters\PlayStationMobileExporter.ts
    |   |   `-- khamake\src\Exporters\WpfExporter.ts
    |   |-- khamake\src\GraphicsApi.ts
    |   |-- khamake\src\Haxe.ts
    |   |-- khamake\src\HaxeCompiler.ts
    |   |-- khamake\src\HaxeProject.ts
    |   |-- khamake\src\Icon.ts
    |   |-- khamake\src\ImageTool.ts
    |   |-- khamake\src\Options.ts
    |   |-- khamake\src\Platform.ts
    |   |-- khamake\src\Project.ts
    |   |-- khamake\src\ProjectFile.ts
    |   |-- khamake\src\RayTraceApi.ts
    |   |-- khamake\src\ShaderCompiler.ts
    |   |-- khamake\src\VisualStudioVersion.ts
    |   |-- khamake\src\VrApi.ts
    |   |-- khamake\src\XmlWriter.ts
    |   |-- khamake\src\defaults.ts
    |   |-- khamake\src\exec.ts
    |   |-- khamake\src\init.ts
    |   |-- khamake\src\khamake.ts
    |   |-- khamake\src\korepath.ts
    |   |-- khamake\src\log.ts
    |   `-- khamake\src\main.ts
    |-- khamake\tsconfig.json
    `-- khamake\tslint.json



# 🥚 Command Line Interface (CLI)

## 🐥 Khamake CLI

> node.exe C:\HaxeToolkit\armsdk\Kha\make --help

khamake options:
--from                        Location of your project
--to                          Build location
--projectfile                 Name of your project file, defaults to "khafile.js"
-t --target                   Target platform
--vr                          Target VR device
--raytrace                    Target raytracing api
--main                        Entrypoint for the haxe code (-main argument), defaults to "Main".
-g --graphics                 Graphics api to use. Possible parameters are direct3d9, direct3d11, direct3d12, metal, vulkan and opengl.
--arch                        Target architecture to use. Possible parameters are arm7, arm8, x86, x86_64.
-a --audio                    Audio api to use. Possible parameters are directsound and wasapi.
-v --visualstudio             Version of Visual Studio to use. Possible parameters are vs2010, vs2012, vs2013, vs2015, vs2017, vs2019 and vs2022.
-k --kha                      Location of Kha directory
--haxe                        Location of Haxe directory
--nohaxe                      Do not compile Haxe sources
--ffmpeg                      Location of ffmpeg executable
--ogg                         Commandline for running the ogg encoder
--mp3                         Commandline for running the mp3 encoder
--aac                         Commandline for running the ffmpeg executable
--krafix                      Location of krafix shader compiler
--kraffiti                    Location of kraffiti image processing tool
--noshaders                   Do not compile shaders
--noproject                   Only source files. Don't generate project files.
--onlydata                    Only assets/data. Don't generate project files.
--embedflashassets            Embed assets in swf for flash target
--compile                     Compile executable
--run                         Run executable
--init                        Init a Kha project inside the current directory
--name                        Project name to use when initializing a project
--server                      Run local http server for html5 target
--port                        Running port for the server
--debug                       Compile in debug mode.
--silent                      Silent mode.
--quiet                       Quiet mode. Like silent mode but prints error messages.
-w --watch                    Watch files and recompile on change.
-wp --watchport               Port for the compilation server (default value is 7000).
--livereload                  Reload http server page on watch mode recompilations.
--glsl2                       Use experimental SPIRV-Cross glsl mode.
--shaderversion               Set target shader version manually.
--parallelAssetConversion     Experimental - Spawn multiple processes during asset and shader conversion. Possible values:
  0: disabled (default value)
 -1: choose number of processes automatically
  N: specify number of processes manually
--slowgc                      Disables generational garbage collection.
--nosigning                   Disable code signing for iOS

为了方便调用 Khamake，可以创建一个 kmake.bat 批处理文件：

    node.exe C:\HaxeToolkit\armsdk\Kha\make %*


## 🐥 Haxe CLI

> haxe --help
Haxe Compiler 4.2.5 - (C)2005-2020 Haxe Foundation
Usage: haxe.exe <target> [options] [hxml files and dot paths...]

Target:
  --js <file>                           generate JavaScript code into target file
  --lua <file>                          generate Lua code into target file
  --swf <file>                          generate Flash SWF bytecode into target file
  --neko <file>                         generate Neko bytecode into target file
  --php <directory>                     generate PHP code into target directory
  --cpp <directory>                     generate C++ code into target directory
  --cppia <file>                        generate Cppia bytecode into target file
  --cs <directory>                      generate C# code into target directory
  --java <directory>                    generate Java code into target directory
  --jvm <file>                          generate JVM bytecode into target file
  --python <file>                       generate Python code into target file
  --hl <file>                           generate HashLink .hl bytecode or .c code into target file
  --interp                              interpret the program using internal macro system
  --run <module> [args...]              interpret a Haxe module with command line arguments

Compilation:
  -p, --class-path <path>               add a directory to find source files
  -m, --main <class>                    select startup class
  -L, --library <name[:ver]>            use a haxelib library
  -D, --define <var[=value]>            define a conditional compilation flag
  -r, --resource <file>[@name]          add a named resource file
  --cmd <command>                       run the specified command after successful compilation
  --remap <package:target>              remap a package to another one
  --macro <macro>                       call the given macro before typing anything else
  -C, --cwd <directory>                 set current working directory
  --haxelib-global                      pass --global argument to haxelib

Optimization:
  --dce [std|full|no]                   set the dead code elimination mode (default std)
  --no-traces                           don't compile trace calls in the program
  --no-output                           compiles but does not generate any file
  --no-inline                           disable inlining
  --no-opt                              disable code optimizations

Debug:
  -v, --verbose                         turn on verbose mode
  --debug                               add debug information to the compiled code
  --prompt                              prompt on error
  --times                               measure compilation times

Batch:
  --next                                separate several haxe compilations
  --each                                append preceding parameters to all Haxe compilations separated by --next

Services:
  --display                             display code tips
  --xml <file>                          generate XML types description
  --json <file>                         generate JSON types description

Compilation Server:
  --server-listen [[host:]port]|stdio]  wait on the given port (or use standard i/o) for
commands to run
  --server-connect [host:]port]         connect to the given port and wait for commands to run
  --connect <[host:]port>               connect on the given port and run commands there

Target-specific:
  --swf-version <version>               change the SWF version
  --swf-header <header>                 define SWF header (width:height:fps:color)
  --flash-strict                        more type strict flash API
  --swf-lib <file>                      add the SWF library to the compiled SWF
  --swf-lib-extern <file>               use the SWF library for type checking
  --java-lib <file>                     add an external JAR or directory of JAR files
  --java-lib-extern <file>              use an external JAR or directory of JAR files for type checking
  --net-lib <file>[@std]                add an external .NET DLL file
  --net-std <file>                      add a root std .NET DLL search path
  --c-arg <arg>                         pass option <arg> to the native Java/C# compiler

Miscellaneous:
  --version                             print version and exit
  -h, --help                            show extended help information
  --help-defines                        print help for all compiler specific defines
  --help-metas                          print help for all compiler metadatas

Haxe 4.3.0 版本有些功能并没有打印出来，比如编译服务的启动可以通过 --wait 执行，源代码参考：

    armsdk\armory\blender\arm\lib\server.py
    haxe-4.3.0\extra\CHANGES.txt
    haxe-4.3.0\src\compiler\args.ml
    haxe-4.3.0\src\compiler\compiler.ml
    haxe-4.3.0\tests\misc\projects\Issue4651\CompServer.hx

```haxe
class CompServer {
    static function main() {
        var port = 4000;
        var server = new sys.io.Process("haxe", ["--wait", "" + port]);
        var socket = new sys.net.Socket();
        socket.connect(new sys.net.Host("localhost"), port);
        socket.write("--display Main.hx@43\n-D display-stdin");
        socket.write("\x01");
        socket.write(sys.io.File.getContent("Main.hx.stdin"));
        socket.write("\x00");
        var out = socket.read();
        socket.close();
        Sys.stderr().writeString(out);
        server.kill();
    }
}
```

## 🐥 Cubemap filtering tool (cmft) CLI

cmftStudio - cubemap filtering tool https://github.com/dariomanesku/cmftStudio
GUI counterpart of cmft - cross-platform open-source cubemap filtering tool.

It reaches very fast processing speeds by utilizing both multi-core CPU and
OpenCL GPU at the same time!


> C:\HaxeToolkit\armsdk\lib\armory_tools\cmft\cmft.exe
cmft - cubemap filtering tool
Copyright 2014-2015 Dario Manesku. All rights reserved.
License: http://www.opensource.org/licenses/BSD-2-Clause

Usage: cmft [options]

Typical uses:

1. Lists available OpenCL devices that can be used with cmft for processing:

    cmft --printCLDevices

2. Typical parameters for irradiance filter:

    cmft --input <file path>
         --filter irradiance
         --outputNum 1
         --output0 <output name>
         --output0params dds,bgra8,cubemap

3. Typical parameters for generating spherical harmonics coefficients:

    cmft --input <file path>
         --filter shcoeffs
         --outputNum 1
         --output0 <output name>

4. Typical parameters for radiance filter:

    cmft --input <file path>
         --filter radiance
         --srcFaceSize 256
         --excludeBase false
         --mipCount 9
         --glossScale 10
         --glossBias 1
         --lightingModel phongbrdf
         --dstFaceSize 256
         --numCpuProcessingThreads 4
         --useOpenCL true
         --clVendor anyGpuVendor
         --deviceType gpu
         --deviceIndex 0
         --inputGammaNumerator 1.0
         --inputGammaDenominator 1.0
         --outputGammaNumerator 1.0
         --outputGammaDenominator 1.0
         --generateMipChain false
         --outputNum 2
         --output0 <output name>
         --output0params dds,bgra8,cubemap
         --output1 <output name>
         --output1params ktx,rgba8,cubemap

5. Cmft can be used without any filter for performing image manipulations and/or exporting different format(s) and type(s):

    cmft --input <file path>
         --filter none
         --generateMipChain true
         --posXrotate90
         --posXrotate180
         --posXrotate270
         --posXflipH
         --posXflipV
         --negXrotate90
         --negXrotate180
         --negXrotate270
         --negXflipH
         --negXflipV
         --posYrotate90
         --posYrotate180
         --posYrotate270
         --posYflipH
         --posYflipV
         --negYrotate90
         --negYrotate180
         --negYrotate270
         --negYflipH
         --negYflipV
         --posZrotate90
         --posZrotate180
         --posZrotate270
         --posZflipH
         --posZflipV
         --negZrotate90
         --negZrotate180
         --negZrotate270
         --negZflipH
         --negZflipV
         --outputGamma 1.0
         --outputGammaDenominator 2.2
         --outputNum 1
         --output0 <output name>
         --output0params dds,bgra8,cubemap

All options listed:
    --help                             Prints this message
    --printCLDevices                   Prints OpenCL devices that can be used for processing. Although application allows CPU-type devices to be picked, GPU-type devices are meant to be used as OpenCL devices!
    --input <file path>                Input environment map for filtering.
        Can be `*.dds, *.ktx, *.hdr, *.exr, *.tga` and in form of: cubemap, latlong image, horizontal or vertical cube cross or image strip.
    --inputFacePosX <file path>        Input face +x in case --input is not specified.
    --inputFaceNegX <file path>        Input face -x in case --input is not specified.
    --inputFacePosY <file path>        Input face +y in case --input is not specified.
    --inputFaceNegY <file path>        Input face -y in case --input is not specified.
    --inputFacePosZ <file path>        Input face +z in case --input is not specified.
    --inputFaceNegZ <file path>        Input face -z in case --input is not specified.
    --filter <filter>                  Filter action to be executed.
          radiance
          irradiance
          shCoeffs
          none
    --srcFaceSize <uint>               Resize input image to <uint>. If <uint> == 0, input face size is left as is.
    --dstFaceSize <uint>               Filter output face size. If <uint> == 0, output face size will be same as srcFaceSize.
    --excludeBase <bool>               Exclude base image when generating mipmaped radiance cubemap. [radiance filter param]
    --mipCount <uint>                  Radiance cubemap mipmap number. Glossiness distribution is uniform. [radiance filter param]
    --glossScale <uint>                Equation is glossScale * mipGlossiness + glossBias. [radiance filter param]
    --glossBias <uint>                 Equation is glossScale * mipGlossiness + glossBias. [radiance filter param]
    --lightingModel <model>            Lighting model that matches game lighting equation. [radiance filter param]
          phong
          phongbrdf
          blinn
          blinnbrdf
    --edgeFixup <fixup>                DirectX9 and OpenGL without ARB_seamless_cube_map
cannot sample cubemap across face edges. In those cases, use 'warp' edge fixup. Otherwise, choose 'none'. Cubemaps filtered with warp edge fixup also require some shader code to
be executed at runtime. See 'cmft/include/cubemapfilter.h' for more details. [radiance filter param]
          none
          warp
    --numCpuProcessingThreads <uint>   Should not be bigger than the number of physical CPU cores/threads. [radiance filter param]
    --useOpenCL <bool>                 OpenCL processing can be used alongside processing on CPU. Therefore, OpenCL device should be GPU. [radiance filter param]
    --clVendor <vendor>                This parameter should generally be 'anyGpuVendor'. If other vendor is to be choosen, type in part of the vendor name. Use 'cmft --printCLDevices' to list available devices and vendors. [radiance filter param]
          intel
          amd
          ati
          nvidia
          anyGpuVendor
          anyCpuVendor
          [other]
    --deviceType <type>                After selecting vendor, 'deviceType' is considered. If desired 'deviceType' is not present, value is ignored. [radiance filter param]
          gpu
          cpu
          accelerator
          default
    --deviceIndex <uint>               If there are multiple devices of chosen vendor and type, <uint> is used for selection. There is no support for multiple OpenCL devices for now. [radiance filter param]
    --generateMipChain <bool>          After processing, generate entire mip map chain.
    --inputGammaNumerator <uint>       Gamma applied to cubemap before processing. Use this field to specify gamma numerator. Gamma equation is value^(numerator/denominator).
    --inputGammaDenominator <uint>     Gamma applied to cubemap before processing. Use this field to specify gamma denominator. Gamma equation is value^(numerator/denominator).
    --outputGammaNumerator <uint>      Gamma applied to cubemap after processing. Use this field to specify gamma numerator. Gamma equation is value^(numerator/denominator).
    --outputGammaDenominator <uint>    Gamma applied to cubemap after processing. Use this field to specify gamma denominator. Gamma equation is value^(numerator/denominator).
    --posXrotate90                     Rotate +x input cubemap face by 90 degrees.
    --posXrotate180                    Rotate +x input cubemap face by 180 degrees.
    --posXrotate270                    Rotate +x input cubemap face by 270 degrees.
    --posXflipH                        Horizontal flip +x input cubemap face.
    --posXflipV                        Vertical flip +x input cubemap face.
    --negXrotate90                     Rotate -x input cubemap face by 90 degrees.
    --negXrotate180                    Rotate -x input cubemap face by 180 degrees.
    --negXrotate270                    Rotate -x input cubemap face by 270 degrees.
    --negXflipH                        Horizontal flip -x input cubemap face.
    --negXflipV                        Vertical flip -x input cubemap face.
    --posYrotate90                     Rotate +y input cubemap face by 90 degrees.
    --posYrotate180                    Rotate +y input cubemap face by 180 degrees.
    --posYrotate270                    Rotate +y input cubemap face by 270 degrees.
    --posYflipH                        Horizontal flip +y input cubemap face.
    --posYflipV                        Vertical flip +y input cubemap face.
    --negYrotate90                     Rotate -y input cubemap face by 90 degrees.
    --negYrotate180                    Rotate -y input cubemap face by 180 degrees.
    --negYrotate270                    Rotate -y input cubemap face by 270 degrees.
    --negYflipH                        Horizontal flip -y input cubemap face.
    --negYflipV                        Vertical flip -y input cubemap face.
    --posZrotate90                     Rotate +z input cubemap face by 90 degrees.
    --posZrotate180                    Rotate +z input cubemap face by 180 degrees.
    --posZrotate270                    Rotate +z input cubemap face by 270 degrees.
    --posZflipH                        Horizontal flip +z input cubemap face.
    --posZflipV                        Vertical flip +z input cubemap face.
    --negZrotate90                     Rotate -z input cubemap face by 90 degrees.
    --negZrotate180                    Rotate -z input cubemap face by 180 degrees.
    --negZrotate270                    Rotate -z input cubemap face by 270 degrees.
    --negZflipH                        Horizontal flip -z input cubemap face.
    --negZflipV                        Vertical flip -z input cubemap face.
    --outputNum <N>                    Number of outputs to be considered. Should be equal or bigger than the number of outputs specified. Could be ommited. Default value is 16,
maximum 16.
    --output[0..N-1] <file name>       File name without extension.
    --output[0..N-1]params <params>    Output parameters as following:
          <params> = <fileFormat>,<textureFormat>,<outputType>
          <fileFromat> = [dds,ktx,tga,hdr]
          <dds_textureFormat> = [bgr8,bgra8,rgba16,rgba16f,rgba32f]
          <ktx_textureFormat> = [rgb8,rgb16,rgb16f,rgb32f,rgba8,rgba16,rgba16f,rgba32f]
          <tga_textureFormat> = [bgr8,bgra8]
          <hdr_textureFormat> = [rgbe]
          <dds_outputType> = [cubemap,latlong,hcross,vcross,hstrip,vstrip,facelist,octant]
          <ktx_outputType> = [cubemap,latlong,hcross,vcross,hstrip,vstrip,facelist,octant]
          <tga_outputType> = [latlong,hcross,vcross,hstrip,vstrip,facelist,octant]
          <hdr_outputType> = [latlong,hcross,vcross,hstrip,vstrip,facelist,octant]
    --silent                           Do not print any output.
    --rgbm                             Encode image in RGBM.

Command line parameters are case insenitive (except for file names and paths).
For additional information, see https://github.com/dariomanesku/cmft


# 🥚 Haxe Code Cookbook Toc

- ✨ [Beginner](https://code.haxe.org/category/beginner/)
    - [Using arrays](https://code.haxe.org/category/beginner/arrays.html)
    - [Conditional compilation](https://code.haxe.org/category/beginner/conditional-compilation.html)
    - [Working with date and time](https://code.haxe.org/category/beginner/date-time.html)
    - [Declare classes](https://code.haxe.org/category/beginner/declare-classes.html)
    - [Declare classes using @:structInit](https://code.haxe.org/category/beginner/declare-classes-with-structinit.html)
    - [Declare functions](https://code.haxe.org/category/beginner/declare-functions.html)
    - [Using enum / ADT](https://code.haxe.org/category/beginner/enum-adt.html)
    - [Haxe to Emscripten](https://code.haxe.org/category/beginner/haxe-to-emscripten-hello-world.html)
    - [Hello world](https://code.haxe.org/category/beginner/hello-world.html)
    - [Using lists](https://code.haxe.org/category/beginner/lists.html)
    - [Loading a file from web](https://code.haxe.org/category/beginner/loading-external-files.html)
    - [Using maps](https://code.haxe.org/category/beginner/maps.html)
    - [Using numbers](https://code.haxe.org/category/beginner/numbers-floats-ints.html)
    - [Pattern matching](https://code.haxe.org/category/beginner/pattern-matching.html)
    - [Invoke object method by string](https://code.haxe.org/category/beginner/reflection-method-call.html)
    - [Using regular expressions](https://code.haxe.org/category/beginner/regular-expressions.html)
    - [stdin, stdout, stderr](https://code.haxe.org/category/beginner/stdin-stdout-stderr.html)
    - [Access a field by string](https://code.haxe.org/category/beginner/string-variable-reflection.html)
    - [Using strings](https://code.haxe.org/category/beginner/strings.html)
    - [Using the file system](https://code.haxe.org/category/beginner/using-filesystem.html)
    - [Using static extensions](https://code.haxe.org/category/beginner/using-static-extensions.html)
- ✨ [Abstract types](https://code.haxe.org/category/abstract-types/)
    - [Strict typing for stringly-typed extern code](https://code.haxe.org/category/abstract-types/abstracts-with-type-params.html)
    - [Array access of a database manager](https://code.haxe.org/category/abstract-types/array-access-db-manager.html)
    - [Color as abstract type](https://code.haxe.org/category/abstract-types/color.html)
    - [Email address as abstract type](https://code.haxe.org/category/abstract-types/emailaddress.html)
    - [Pipe using Abstract Operator Overloading](https://code.haxe.org/category/abstract-types/pipe.html)
    - [Rounded Float as abstract type](https://code.haxe.org/category/abstract-types/rounded-float.html)
    - [Temperature units as abstract type](https://code.haxe.org/category/abstract-types/temperature-units.html)
    - [Using Iterators as Generic Type Parameters](https://code.haxe.org/category/abstract-types/using-iterators-as-generic-type-parameters.html)
- ✨ [Compilation](https://code.haxe.org/category/compilation/)
    - [Compiling libraries without main class](https://code.haxe.org/category/compilation/compiling-libraries-without-main-class.html)
    - [Writing target-specific modules differentiated by filename](https://code.haxe.org/category/compilation/target-specific-modules-diff-by-filename.html)
- ✨ [Data structures](https://code.haxe.org/category/data-structures/)
    - [Grid iterator](https://code.haxe.org/category/data-structures/grid-iterator.html)
    - [Reverse iterator](https://code.haxe.org/category/data-structures/reverse-iterator.html)
    - [A fixed ring array](https://code.haxe.org/category/data-structures/ring-array.html)
    - [Sorting arrays](https://code.haxe.org/category/data-structures/sort-array.html)
    - [Stepped iterator](https://code.haxe.org/category/data-structures/step-iterator.html)
- ✨ [Design patterns](https://code.haxe.org/category/design-patterns/)
    - [Factory](https://code.haxe.org/category/design-patterns/factory.html)
    - [Lazy initialization](https://code.haxe.org/category/design-patterns/lazy-initialization.html)
    - [Method chaining / Fluent interface](https://code.haxe.org/category/design-patterns/method-chaining-fluent-interface.html)
    - [Observer](https://code.haxe.org/category/design-patterns/observer.html)
    - [Singleton](https://code.haxe.org/category/design-patterns/singleton.html)
- ✨ [Functional Programming](https://code.haxe.org/category/functional-programming/)
    - [Enums as GADTs](https://code.haxe.org/category/functional-programming/enum-gadt.html)
    - [ML-Style Parse Tree Evaluation](https://code.haxe.org/category/functional-programming/functional-style-expression-evaluation.html)
- ✨ [JavaScript](https://code.haxe.org/category/javascript/)
    - [Adding a HTML element to the DOM](https://code.haxe.org/category/javascript/adding-element-to-dom.html)
    - [Create a server with Haxe/NodeJS](https://code.haxe.org/category/javascript/creating-node-server.html)
    - [JavaScript inline web workers in Haxe](https://code.haxe.org/category/javascript/javascript-inline-workers.html)
    - [Using Haxe classes in JavaScript](https://code.haxe.org/category/javascript/using-haxe-classes-in-javascript.html)
- ✨ [Macros](https://code.haxe.org/category/macros/)
    - [Add git commit-hash in build](https://code.haxe.org/category/macros/add-git-commit-hash-in-build.html)
    - [Add parameters as fields](https://code.haxe.org/category/macros/add-parameters-as-fields.html)
    - [Assert macro that shows sub-expression values](https://code.haxe.org/category/macros/assert-with-values.html)
    - [Generating Arrays with values](https://code.haxe.org/category/macros/build-arrays.html)
    - [Add a map](https://code.haxe.org/category/macros/build-map.html)
    - [Add property with getter](https://code.haxe.org/category/macros/build-property-with-inline-getter.html)
    - [Add a static field](https://code.haxe.org/category/macros/build-static-field.html)
    - [Create value-objects](https://code.haxe.org/category/macros/build-value-objects.html)
    - [Combine two or more structures](https://code.haxe.org/category/macros/combine-objects.html)
    - [Code completion from URL](https://code.haxe.org/category/macros/completion-from-url.html)
    - [Get all values of an @:enum abstract](https://code.haxe.org/category/macros/enum-abstract-values.html)
    - [Extract values from known enum instances](https://code.haxe.org/category/macros/extract-enum-value.html)
    - [Extract values with pattern matching](https://code.haxe.org/category/macros/extract-value-with-pattern-matching.html)
    - [Generate dispatch code](https://code.haxe.org/category/macros/generate-dispatch-code.html)
    - [Add build time using macro](https://code.haxe.org/category/macros/generating-code-in-a-macro.html)
    - [Working with compiler flags](https://code.haxe.org/category/macros/get-compiler-define-value.html)
    - [Include a file next to a Haxe module file](https://code.haxe.org/category/macros/include-file-next-to-module-file.html)
    - [Strictly Typed JSON](https://code.haxe.org/category/macros/strictly-typed-json.html)
    - [Threading macro like Clojure and pipe operator](https://code.haxe.org/category/macros/threading-macro.html)
    - [Validates a .JSON file compile-time](https://code.haxe.org/category/macros/validate-json.html)
- ✨ [Principles](https://code.haxe.org/category/principles/)
    - [Everything is an expression](https://code.haxe.org/category/principles/everything-is-an-expression.html)
    - [Inheritance](https://code.haxe.org/category/principles/inheritance.html)
    - [Null safety](https://code.haxe.org/category/principles/null-safety.html)
- ✨ [Other](https://code.haxe.org/category/other/)
    - [Adding static methods to existing classes](https://code.haxe.org/category/other/adding-static-methods-to-existing-classes.html)
    - [Base64 encoding](https://code.haxe.org/category/other/base64-encoding.html)
    - [Compiling c++ code on Windows using mingw](https://code.haxe.org/category/other/compiling-cpp-code-windows-mingw.html)
    - [Publish to Haxelib using Travis and Github Releases](https://code.haxe.org/category/other/deploy-to-haxelib-using-travis-and-github-releases.html)
    - [Zip files](https://code.haxe.org/category/other/haxe-zip.html)
    - [Named Parameters](https://code.haxe.org/category/other/named-parameters.html)
    - [Passing different types to a function parameter](https://code.haxe.org/category/other/passing-different-types-to-a-function-parameter.html)
    - [Prototype SSL Socket Server](https://code.haxe.org/category/other/ssl-socket-server.html)
    - [VGA text renderer](https://code.haxe.org/category/other/vga-text-renderer.html)
    - [Working with cppia](https://code.haxe.org/category/other/working-with-cppia/index.html)


## ✨ Beginner

### Conditional compilation
                                                     **Conditional compilation**

> This snippet demonstrates use of conditional compilation with custom compiler flags.

Conditional compilation is a tool commonly used to alter the flow of the
compilation process. It relies on the use of compiler flags, also known as
_defines_, which are configurable values that exist only during compilation.


Compiler flags are set with `-D key` or `-D key=value` from the command-line
or build file. The values of `Float`, `Int`, and `String` constants are used
directly when evaluating conditionals.

Note that those conditional compilation branches that the compiler doesn't
enter are discarded while parsing the source file.

To get a list of supported Haxe compiler flags, use `haxe --help-defines`.

Implementation

```haxe
class Main {
  static function main() {
    #if introduce
    trace("Hello! This is an example of conditional compilation.");
    #end

    #if (level > 4)
    trace("Welcome, administrator!");
    #elseif (level > 2)
    trace("Welcome, super user!");
    #else
    trace("Welcome, user!");
    #end
  }
}
```

Usage

Assume the following build file:

```hxml
-main Main
-neko main.n
-D introduce
-D level=3
```

Running `neko main.n` from the compiler output directory will result in:

```sh
Hello, this is an example of conditional compilation.
Welcome, super user!
```

> * Learn about conditional compilation here: http://haxe.org/manual/lf-condition-compilation.html
> * Learn about available global compiler flags here: http://haxe.org/manual/compiler-usage-flags.html
>
> Author: [Domagoj Štrekelj](https://github.com/dstrekelj)


## ✨ Abstract types
                                                              **Abstract types**
## ✨ Compilation
                                                                 **Compilation**
## ✨ Data structures
                                                             **Data structures**
## ✨ Design patterns
                                                             **Design patterns**
## ✨ Functional Programming
                                                      **Functional Programming**
## ✨ JavaScript
                                                                  **JavaScript**
## ✨ Macros
                                                                      **Macros**
### Add parameters as fields
                                                    **Add parameters as fields**

This macro function automatically assigns parameters of method to local variables.

```haxe
import haxe.macro.Context;
import haxe.macro.Expr;
using Lambda;

class MyMacros {
   macro static public function initLocals():Expr {
    // Grab the variables accessible in the context the macro was called.
    var locals = Context.getLocalVars();
    var fields = Context.getLocalClass().get().fields.get();

    var exprs:Array<Expr> = [];
    for (local in locals.keys()) {
      if (fields.exists(function(field) return field.name == local)) {
        exprs.push(macro this.$local = $i{local});
      } else {
        throw new Error(Context.getLocalClass() + " has no field " + local, Context.currentPos());
      }
    }
    // Generates a block expression from the given expression array
    return macro $b{exprs};
  }
}
```

Usage

```haxe
class Test {
  public var name:String;
  public var x:Float;
  public var y:Float;

  public function new(name:String, x:Float, y:Float) {
    MyMacros.initLocals();
  }
}
```

This will be the same as writing this manually:

```haxe
class Test {
  public var name:String;
  public var x:Float;
  public var y:Float;

  public function new(name:String, x:Float, y:Float) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
}
```

> Author: [Mark Knol](https://github.com/markknol)


## ✨ Principles
                                                                  **Principles**

### Everything is an expression
                                                 **Everything is an expression**

Haxe Code Cookbook article: Everything is an expression.
http://code.haxe.org/category/principles/everything-is-an-expression.html


 ```haxe
    // `if/else` is an expression returning value of either `true` or `false` branch:
    trace(if (Math.random() > 0.5) "Hello" else "Bye");

    // `try/catch` is an expression returning value of `try`, or `catch` if error is caught:
    trace(try haxe.Json.parse("{") catch (e:Dynamic) null);

    // `switch` is an expression returning value of the matched `case` (or `default`):
    trace(switch (Std.random(3)) {
      case 0: "zero";
      case 1: "one";
      case 2: "two";
      default: "impossible!";
    });

    // Even blocks are just expressions, returning value of the last of their expressions:
    trace({
      var l = new List();
      for (i in 0...10) l.add(i);
      l;
    });

    // Blocks are mere expressions, they are not necessarily required for e.g. functions
    function toInt(s:String):Int return Std.parseInt(s);

    // Some expressions, such as loops or var declarations don't make any sense as values,
    // so they will be typed as Void and thus won't be able to be used where value is expected.
    // For example the following won't compile:
    trace(for (i in 0...10) i); // ERROR: Cannot use Void as value
    for (i in 0...10) trace(i); // OK

    // Some expressions such as `throw`, `continue` or `return` also don't make sense as values,
    // however they are allowed to be in value places so code like the following is possible:
    for (file in ["a.txt", "b.txt", "c.txt"]) {
      // try reading file or skip the loop iteration
      var content = try sys.io.File.getContent(file) catch (e:Dynamic) continue;
      trace(content);
    }
```

One interesting feature of the `return` expression is that it can be used with
a non-empty expression for returning out of `Void` functions. While it can be
confusing at first, it is very pragmatic when dealing with callback-based code.
This kind of expressions will be transformed from `return someVoid();` to
`someVoid(); return;`. For example:

```haxe
    function getContent(fileName:String, callback:String->Void):Void {
      if (fileName == "")
        // invoke callback and return early if `fileName` is empty string
        return callback("New file");

      var content =
        try
          sys.io.File.getContent(fileName)
        catch (e:Dynamic)
          // invoke callback and return early in case of error
          return callback("ERROR: " + e);

      callback(content.toUpperCase()); // invoke callback normally
    }
```


## ✨ Other
                                                                       **Other**




# 🥚 haXe Manual Toc
                                                            **haxe manual toc**

01. ✨ [Introduction](https://haxe.org/manual/introduction.html)
     - [What is Haxe?]
     - [About this Document]
     - - - [Authors and contributions]
     - - [License]
     - [Hello World]
     - [History]
02. ✨ [Types](https://haxe.org/manual/types.html)
     - [Basic Types]
     - - - [Numeric types]
     - - - [Overflow]
     - - - [Bool]
     - - - [Void]
     - - - [Nullability]
     - - [Optional Arguments and Nullability]
     - [Class Instance]
     - - - [Class constructor]
     - - - [Inheritance]
     - - - [Interfaces]
     - - [Abstract Class]
     - [Enum Instance]
     - - - [Enum Constructor]
     - - [Using enums]
     - [Anonymous Structure]
     - - - [JSON for Structure Values]
     - - - [Class Notation for Structure Types]
     - - - [Optional Fields]
     - - - [Impact on Performance]
     - - [Extensions]
     - [Function Type]
     - - - [Optional Arguments]
     - - [Default values]
     - [Dynamic]
     - - - [Dynamic with Type Parameter]
     - - - [Dynamic access]
     - - [Any type]
     - [Abstract]
     - - - [Implicit Casts]
     - - - [Operator Overloading]
     - - - [Array Access]
     - - - [Enum abstracts]
     - - - [Forwarding abstract fields]
     - - [Core-type abstracts]
     - [Monomorph]
03. ✨ [Type System](https://haxe.org/manual/type-system.html)
     - [Typedef]
     - [Type Parameters]
     - - [Constraints]
     - [Generic]
     - - [Construction of generic type parameters]
     - [Variance]
     - [Unification]
     - - - [Between Class/Interface]
     - - - [Structural Subtyping]
     - - - [Monomorphs]
     - - - [Function Return]
     - - [Common Base Type]
     - [Type Inference]
     - - - [Top-down Inference]
     - - [Limitations]
     - [Modules and Paths]
     - - - [Module Sub-Types]
     - - - [Import]
     - - - [Import defaults / import.hx]
     - - [Resolution Order]
     - [untyped]
04. ✨ [Class Fields](https://haxe.org/manual/class-field.html)
     - [Variable]
     - [Property]
     - - - [Common accessor identifier combinations]
     - - - [Impact on the type system]
     - - [Rules for getter and setter]
     - [Method]
     - - - [Overriding Methods]
     - - [Effects of variance and access modifiers]
     - [Access Modifier]
     - - - [Visibility]
     - - - [Inline]
     - - - [Dynamic]
     - - - [Override]
     - - - [Static]
     - - - [Extern]
     - - - [Final]
05. ✨ [Expressions](https://haxe.org/manual/expression.html)
     - [Blocks]
     - [Literals]
     - - - [Array Declaration]
     - - - [Map Declaration]
     - - [Object Declaration]
     - [Constants]
     - [Operators]
     - - - [Unary Operators]
     - - - [Binary Operators]
     - - - [Ternary Operator]
     - - - [Precedence]
     - - [Overloading and macros]
     - [Field Access]
     - [Array Access]
     - [Function Call]
     - [var and final]
     - [Local Functions]
     - [new]
     - [for]
     - [while]
     - [do-while]
     - [if]
     - [switch]
     - [throw]
     - [try/catch]
     - [return]
     - [break]
     - [continue]
     - [cast]
     - - - [unsafe cast]
     - - [safe cast]
     - [type check]
     - [inline]
06. ✨ [Language Features](https://haxe.org/manual/lf.html)
     - [Conditional Compilation]
     - - - [Target defines]
     - - [Target-Specific Files]
     - [Externs]
     - - - [Native Metadata]
     - - [Implementing Dynamic]
     - [Static Extension]
     - - - [In the Haxe Standard Library]
     - - [Static Extension Metadata]
     - [Pattern Matching]
     - - - [Introduction]
     - - - [Enum matching]
     - - - [Variable capture]
     - - - [Structure matching]
     - - - [Array matching]
     - - - [Or patterns]
     - - - [Guards]
     - - - [Match on multiple values]
     - - - [Extractors]
     - - - [Exhaustiveness checks]
     - - - [Useless pattern checks]
     - - [Single pattern check]
     - [String Interpolation]
     - [Array Comprehension]
     - [Map Comprehension]
     - [Iterators]
     - [Function Bindings]
     - [Metadata]
     - [Access Control]
     - [Inline Constructors]
07. ✨ [Compiler Usage](https://haxe.org/manual/compiler-usage.html)
     - [HXML]
     - [Global Compiler Flags]
08. ✨ [Compiler Features](https://haxe.org/manual/cr-features.html)
     - [Built-in Compiler Metadata]
     - [Dead Code Elimination]
     - [Compiler Services]
     - - - [Overview]
     - - - [Field access completion]
     - - - [Call argument completion]
     - - - [Type path completion]
     - - - [Usage completion]
     - - - [Position completion]
     - - - [Top-level completion]
     - - [Completion server]
     - [Resources]
     - - - [Embedding resources]
     - - - [Retrieving text resources]
     - - - [Retrieving binary resources]
     - - [Implementation details]
     - [Runtime Type Information]
     - [Static Analyzer]
     - [Loop unrolling]
     - [Tail Recursion Elimination (TRE)]
     - [Null Safety]
09. ✨ [Macros](https://haxe.org/manual/macro.html)
     - [Macro Context]
     - [Arguments]
     - - - [ExprOf]
     - - - [Constant Expressions]
     - - [Rest Argument]
     - [Reification]
     - - - [Expression Reification]
     - - - [Type Reification]
     - - [Class Reification]
     - [Tools]
     - [Type Building]
     - - - [Enum building]
     - - - [@:autoBuild]
     - - [@:genericBuild]
     - [Limitations]
     - - - [Macro-in-Macro]
     - - - [Static extension]
     - - - [Build Order]
     - - [Type Parameters]
     - [Persistent Variables]
     - [Initialization Macros]
10. ✨ [Standard Library](https://haxe.org/manual/std.html)
     - [String]
     - - - [String literals]
     - - - [Unicode]
     - - [Encoding]
     - [Data Structures]
     - - - [Array]
     - - - [Vector]
     - - - [List]
     - - - [GenericStack]
     - - - [Map]
     - - [Option]
     - [Regular Expressions]
     - - - [Matching]
     - - - [Groups]
     - - - [Replace]
     - - - [Split]
     - - - [Map]
     - - [Implementation Details]
     - [Math]
     - - - [Special Numbers]
     - - - [Mathematical Errors]
     - - - [Integer Math]
     - - [Extensions]
     - [Lambda]
     - [Template]
     - [Reflection]
     - [Serialization]
     - - [Serialization format]
     - [Xml]
     - - - [Getting started with Xml]
     - - - [Parsing Xml]
     - - - [Encoding Xml]
     - - [Simplified Xml access]
     - [Json]
     - - - [Parsing JSON]
     - - - [Encoding JSON]
     - - [Implementation details]
     - [Input/Output]
     - [Sys]
     - - - [Threading]
     - - - [Standard IO Streams]
     - - [Process]
     - [Remoting]
     - - - [Remoting Connection]
     - - [Implementation details]
     - [Unit Testing]
     - [Haxe 3 Compatibility]
11. ✨ [Haxelib](https://haxe.org/manual/haxelib.html)
12. ✨ [Target Details](https://haxe.org/manual/target-details.html)
     - [Accessing Target-specific Syntax]
     - [JavaScript]
     - - - [Getting started with Haxe/JavaScript]
     - - - [ECMAScript 6 class generation]
     - - - [Using external JavaScript libraries]
     - - - [JavaScript target Metadata]
     - - - [Exposing Haxe classes for JavaScript]
     - - [Loading extern classes using "require" function]
     - [Flash]
     - - - [Getting started with Haxe/Flash]
     - - - [Embedding resources]
     - - - [Using external Flash libraries]
     - - [Flash target Metadata]
     - [Neko]
     - - [Getting started with Haxe/Neko]
     - [PHP]
     - - - [Getting started with Haxe/PHP]
     - - [Defines]
     - [C++]
     - - - [Getting started with Haxe/C++]
     - - - [The Hxcpp Build Environment]
     - - - [Build.xml]
     - - - - [Structure of the top-level]
     - - - - [Files]
     - - - - [Tags]
     - - - - [Targets]
     - - - - [Compiler]
     - - - - [Linker]
     - - - - [Stripper]
     - - - - [The Haxe Target]
     - - - - [Xml Injection]
     - - - [Defines]
     - - - [The Hxcpp Cache]
     - - [Threads And Stacks]
     - [Cppia]
     - - [Getting started with Haxe/Cppia]
     - [Java]
     - - [Getting started with Haxe/Java]
     - [JVM]
     - - [Getting started with Haxe/JVM]
     - [C#]
     - - - [Getting started with Haxe/C#]
     - - - [.NET version and external libraries]
     - - - [Haxe/C# Defines]
     - - - [Haxe/C# Metadata]
     - - [Injecting raw C# code]
     - [Python]
     - - [Getting started with Haxe/Python]
     - [Lua]
     - - - [Getting started with Haxe/Lua]
     - - - [Using external Lua libraries]
     - - - [Version flags]
     - - [Multireturns]
     - [HashLink]
     - - - [Getting started with Haxe/HashLink]
     - - - [HashLink/C Compilation]
13. ✨ [Debugging](https://haxe.org/manual/debugging.html)
     - [Logging and Trace]
     - [Position Information Parameter]
     - [Tracing Types]
     - [IDE Integration]
     - [Debugging in JavaScript]
     - [Source Maps]
     - - - [Source Maps in JavaScript]
     - - - [Source Maps in PHP7]


# 🥚 haXe Types
                                                                       **Types**

02. ✨ [Types](https://haxe.org/manual/types.html)
     - [Basic Types]
     - - - [Numeric types]
     - - - [Overflow]
     - - - [Bool]
     - - - [Void]
     - - - [Nullability]
     - - [Optional Arguments and Nullability]
     - [Class Instance]
     - - - [Class constructor]
     - - - [Inheritance]
     - - - [Interfaces]
     - - [Abstract Class]
     - [Enum Instance]
     - - - [Enum Constructor]
     - - [Using enums]
     - [Anonymous Structure]
     - - - [JSON for Structure Values]
     - - - [Class Notation for Structure Types]
     - - - [Optional Fields]
     - - - [Impact on Performance]
     - - [Extensions]
     - [Function Type]
     - - - [Optional Arguments]
     - - [Default values]
     - [Dynamic]
     - - - [Dynamic with Type Parameter]
     - - - [Dynamic access]
     - - [Any type]
     - [Abstract]
     - - - [Implicit Casts]
     - - - [Operator Overloading]
     - - - [Array Access]
     - - - [Enum abstracts]
     - - - [Forwarding abstract fields]
     - - [Core-type abstracts]
     - [Monomorph]

haXe 是强类型语言，有类型自动推断机制，几种语言类型比较：

```sh
    # As3
    var myButton:MySpecialButton = new MySpecialButton();

    # C++
    MySpecialButton* myButton = new MySpecialButton();
    auto myButton = new MySpecialButton(); # C++11

    # haXe
    var myButton = new MySpecialButton();
```

The haXe type system knows seven type groups:

01. **Class instance**: an object of a given class or interface
02. **Enum instance**: a value of a haXe enumeration
03. **Structure**: an anonymous structure, i.e. a collection of named fields
04. **Function**: a compound type of several arguments and one return
05. **Dynamic**: a wildcard type which is compatible with any other type
06. **Abstract**: a compile-time type which is represented by a different type at runtime
07. **Monomorph**: an unknown type which may later become a different type

You can convert data type with the Standard Library function like this:

    var intDivision = Std.int(6.2/4.7);

    extern class Std {
        static function string(s:Dynamic):String;
        static function int(x:Float):Int;
        static function parseInt(x:String):Null<Int>;
        static function parseFloat(x:String):Float;
        static function random(x:Int):Int;
    }


## 🐥 Basic Types
https://haxe.org/manual/types-basic-types.html
                                                                **Basic Types**

Basic types are `Bool`, `Float` and `Int`.

Values of type Bool are a common occurrence in conditions such as if and while.

01. **true** and **false** for Bool,
02. 1, 0, -1 and 0xFF0000 for Int and
03. 1.0, 0.0, -1.0, 1e10 for Float.

Basic types are not classes in haXe. Instead, they are implemented as
abstract types and are tied to the compiler's internal operator-handling
as described in the following sections.

Numeric types

    Define: Float
    Represents a double-precision IEEE 64-bit floating point number.

    Define: Int
    Represents an integral number.

The `haXe.Int32` and `haXe.Int64` classes can be used to ensure correct
overflow behavior at the cost of additional computations on certain platforms.

Bool

    Define: Bool
    Represents a value which can be either true or false.

Values of type Bool are a common occurrence in conditions such as `if` and `while`.

Void

    Define: Void
    Denotes the absence of a type.
    It is used to express that something (usually a function) has no value.

Void is a special case in the type system because it is not actually a type.
It is used to express the absence of a type, which applies mostly to function
arguments and return types.

We have already "seen" Void in the initial "Hello World" example:

```haxe
    /**
        Multi-line comments for documentation.
    **/
    class Main {
        static public function main():Void {
            // Single line comment
            trace("Hello World");
        }
    }
```

## 🐥 Nullability
Nullability https://haxe.org/manual/types-nullability.html
Null Safety https://haxe.org/manual/cr-null-safety.html
                                                                **Nullability**

Nullability

    Define: nullable
    A type in haXe is considered nullable if null is a valid value for it.

It is common for programming languages to have a single, clean definition for
nullability. However, haXe has to find a compromise in this regard due to
the nature of haXe's target languages; while some of them allow and, in fact,
default to null for anything, others do not even allow null for certain types.
This necessitates the distinction between two types of target languages:

    Define: Static target
    Static targets employ their own type system where null is not a valid value
    for basic types. This is true for the Flash, C++, Java and C# targets.

    Define: Dynamic target
    Dynamic targets are more lenient with their types and allow null values
    for basic types. This applies to the JavaScript, PHP, Neko and Flash 6-8 targets.

There is nothing to worry about when working with null on dynamic targets;
however, static ones may require some thought. For starters, basic types
are initialized to their default values.

    Define: Default values
    Basic types have the following default values on static targets:

    Int: 0
    Float: NaN on Flash, 0.0 on other static targets
    Bool: false

As a consequence, the haXe Compiler does not allow the assignment of null to
a basic type on static targets. In order to achieve this, the basic type has
to be wrapped as `Null<T>`:

```java
    var a:Int = null;       // error on static platforms
    var b:Null<Int> = null; // allowed
```


Similarly, basic types cannot be compared to null unless wrapped:

```java
    var a : Int = 0;
    var b : Null<Int> = 0;
    if( a == null ) { ... } // error on static platforms
    if( b != null ) { ... } // allowed
```

This restriction extends to all situations where unification is performed.

    Define: Null<T>
    On static targets the types Null<Int>, Null<Float> and Null<Bool> can
    be used to allow null as a value. On dynamic targets this has no effect.
    Null<T> can also be used with other types in order to document that
    null is a permitted value.

If a null value is "hidden" in `Null<T>` or Dynamic and assigned to a basic type,
the default value is used:

```java
    var n : Null<Int> = null;
    var a : Int = n;
    trace(a); // 0 on static platforms
```

Optional Arguments and Nullability

Optional arguments must be accounted for when considering nullability;
a separation between native optional arguments which are not nullable and
haXe-specific optional arguments which may be needs to be defined.

This distinction is made using the question-mark optional argument:

```java
    // x is a native Int (not nullable)
    function foo(x : Int = 0) {}
    // y is Null<Int> (nullable)
    function bar( ?y : Int) {}
    // z is also Null<Int>
    function opt( ?z : Int = -1) {}
```

## 🐥 Class instance
https://haxe.org/manual/types-class-instance.html
                                                              **Class instance**

Similar to many object-oriented languages, classes are the primary data structure
for the majority of programs in haXe.

Each haXe class has an explicit name, an implied path and zero or more class fields. Here we will focus on the general structure of classes and their relations while
leaving the details of class fields for Class Fields.

The following code example serves as the basis for the remainder of this section:

```haxe
    class Point {
      var x:Int;
      var y:Int;

      public function new(x, y) {
        this.x = x;
        this.y = y;
      }

      public function toString() {
        return "Point(" + x + "," + y + ")";
      }
    }
```

Semantically, this class represents a point in discrete 2-dimensional space -
but this is not important here. Let us instead describe the structure:

01. The keyword `class` denotes that we are declaring a class.
02. **Point** is the name of the class and could be anything conforming to the rules for type identifiers.
03. Enclosed in curly braces `{}` are the class fields,
04. which consist of two variable fields x and y of type Int,
05. followed by a special function field named new, which is the constructor of the class,
06. as well as a normal function **toString**.

There is a special type in haXe which is compatible with all classes:

    Define: Class<T>
    This type is compatible with all class types which means that all classes
    can be assigned to it. Class instances, however, cannot be assigned to this type.

At compile-time, `Class<T>` is the common base type of all class types.
This relation is not reflected in generated code.

This type is useful when an API requires a value to be a class, but not
a specific one. This applies to several methods of the haXe reflection API.


Class constructor

Instances of classes are created by calling the class constructor - a process
commonly referred to as instantiation. Another name for a class instance
is object. Nevertheless, we prefer the term class instance to emphasize
the analogy between classes/class instances and enums/enum instances.

    var p = new Point(-1, 65);


## 🐥 Enum instance
https://haxe.org/manual/types-enum-instance.html
                                                               **Enum instance**

## 🐥 Anonymous Structure
https://haxe.org/manual/types-anonymous-structure.html
                                                         **Anonymous Structure**

## 🐥 Function Type
https://haxe.org/manual/types-function.html
                                                               **Function Type**

## 🐥 Dynamic
https://haxe.org/manual/types-dynamic.html
                                                                     **Dynamic**

While Haxe has a static type system, it can essentially be disabled by using
the `Dynamic` type. A **dynamic value** can be assigned to anything and
anything can be assigned to it. This has several drawbacks:

1. * The compiler can no longer type-check assignments, function calls and
    other constructs where specific types are expected.
2. * Certain optimizations, in particular when compiling to static targets,
    can no longer be employed.
3. * Some common errors such as typos in field accesses cannot be caught
    at compile-time and likely cause errors at runtime.
4. * [Dead Code Elimination] cannot detect used fields if they are used
    through `Dynamic`.

It is very easy to come up with examples where the usage of `Dynamic` can
cause problems at runtime. Consider compiling the following two lines to
a static target:

```haxe
var d:Dynamic = 1;
d.foo;
```

Trying to run a compiled program in the Flash Player yields an error
`Property foo not found on Number and there is no default value`.
Without `Dynamic`, this would have been detected at compile-time.

Use of `Dynamic` should be minimized as there are often better options available.
However, it is occasionally the practical solution; parts of the Haxe
[Reflection] API make use of it. Additionally, using `Dynamic` can be the best
choice to handle custom data structures that are not known at compile-time.

`Dynamic` behaves in a special way when being unified ([unification]) with
a [monomorph]. Monomorphs are never bound to `Dynamic` which can have
surprising results in examples such as this:

[code asset](assets/DynamicInferenceIssue.hx)

```haxe
    class Main {
      static function main() {
        var jsonData = '[1, 2, 3]';
        var json = haxe.Json.parse(jsonData);
        $type(json); // Unknown<0>
        for (i in 0...json.length) {
          // Array access is not allowed on
          // {+ length : Int }
          trace(json[i]);
        }
      }
    }
```

Although the return type of `Json.parse` is `Dynamic`, the type of local variable
`json` is not bound to it and remains a monomorph. It is then inferred as an
[anonymous structure] upon the `json.length` field access, which causes the
following `json[0]` array access to fail. In order to avoid this, the variable
`json` can be explicitly typed as `Dynamic` by using `var json:Dynamic`.

> ##### Trivia: Dynamic Inference before Haxe 3
>
> The Haxe 3 compiler never infers a type to `Dynamic`, so users must be explicit
> about it. Previous Haxe versions used to infer arrays of mixed types, e.g.
> `[1, true, "foo"]`, as `Array<Dynamic>`. We found that this behavior introduced
> too many type problems and thus removed it for Haxe 3.

> ##### Trivia: Dynamic in the Standard Library
>
> Dynamic was quite frequent in the Haxe Standard Library before Haxe 3. With
> the continuous improvements of the Haxe type system, the occurrences of
> Dynamic were reduced over the releases leading to Haxe 3.


### Dynamic with Type Parameter

`Dynamic` is a special type because it allows explicit declaration with and
without a [type parameter]. If such a type parameter is provided, the semantics
described in [Dynamic] are constrained to all fields being compatible with
the parameter type:

```haxe
    var att : Dynamic<String> = xml.attributes;
    // valid, value is a String
    att.name = "Nicolas";
    // dito (this documentation is quite old)
    att.age = "26";
    // error, value is not a String
    att.income = 0;
```


### Dynamic access

`DynamicAccess` is an [abstract type] for working with [anonymous structures]
that are intended to hold collections of objects by the string key. Basically,
`DynamicAccess` wraps [`Reflect`](std-reflection) calls in a Map-like interface.

[code asset](assets/DynamicAccess.hx)

```haxe
    class Main {
      static public function main() {
        var user:haxe.DynamicAccess<Dynamic> = {};

        // Sets values for specified keys.
        user.set("name", "Mark");
        user.set("age", 25);

        // Returns values by specified keys.
        trace(user.get("name")); // "Mark"
        trace(user.get("age")); // 25

        // Tells if the structure contains a specified key
        trace(user.exists("name")); // true
      }
    }
```


### Any type

`Any` is a type that is compatible with any other type in both directions.
It serves one purpose - to hold values of any type. Explicit casting is required
to use these values in order to guarantee that the code does not suddenly become
dynamically typed. This restriction maintains Haxe's static typing, and allows
for the continued use of advanced type system features and optimizations
associated with the type system.

The implementation is quite simple:

```haxe
abstract Any(Dynamic) from Dynamic to Dynamic {}
```

The 'Any' type does not make assumptions about what the value actually is
or whether it supports fields or operations - this is up to the user to handle.

[code asset](assets/Any.hx)

```haxe
    class Main {
      static function setAnyValue(value:Any) {
        trace(value);
      }

      static function getAnyValue():Any {
        return 42;
      }

      static function main() {
        // value of any type works
        setAnyValue("someValue");
        setAnyValue(42);

        var value = getAnyValue();
        $type(value); // Any, not Unknown<0>

        // won't compile: no dynamic field access
        // value.charCodeAt(0);

        if (value is String) {
          // explicit promotion, type-safe
          trace((value : String).charCodeAt(0));
        }
      }
    }
```

`Any` is a more type-safe alternative to `Dynamic` because it doesn't support
field access or operators and is bound to monomorphs. To work with the actual
value, it needs to be explicitly promoted to another type.


## 🐥 Abstract
https://haxe.org/manual/types-abstract.html
                                                                    **Abstract**

An abstract type is a type which is actually a different type at run-time.
It is a compile-time feature which defines types "over" concrete types
in order to modify or augment their behavior:

[code asset](assets/MyAbstract.hx#L1-L5)

```haxe
abstract AbstractInt(Int) {
  inline public function new(i:Int) {
    this = i;
  }
}

class Main {
  static public function main() {
    var a = new AbstractInt(12);
    trace(a); // 12
  }
}
```

We can derive the following from this example:

01. The keyword `abstract` denotes that we are declaring an abstract type.
02. `AbstractInt` is the name of the abstract type and could be anything
    conforming to the rules for type identifiers.
03. The **underlying type** `Int` is enclosed in parentheses `()`.
04. The fields are enclosed in curly braces `{}`,
05. which are a constructor function `new` accepting one argument `i` of type `Int`.

> ##### Define: Underlying Type
>
> The underlying type of an abstract is the type which is used to represent
> said abstract at runtime. It is usually a concrete (i.e. non-abstract) type
> but could be another abstract type as well.

The syntax is reminiscent of classes and the semantics are indeed similar.
In fact, everything in the "body" of an abstract (everything after the opening
curly brace) is parsed as class fields. Abstracts may have [method] fields and
non-[physical](define-physical-field) [property](class-field-property) fields.

Furthermore, abstracts can be instantiated and used just like classes:

    var a = new AbstractInt(12);

As mentioned before, abstracts are a compile-time feature, so it is interesting
to see what the above actually generates. A suitable target for this is JavaScript,
which tends to generate concise and clean code.

Compiling the above using `haxe --main MyAbstract --js myabstract.js` shows
this JavaScript code:

```js
var a = 12;
console.log(a);
```

The abstract type `Abstract` completely disappeared from the output and all
that is left is a value of its underlying type, `Int`. This is because
the constructor of `Abstract` is inlined - something we shall learn about later
in the section [Inline] - and its inlined expression assigns a value to `this`.
This might be surprising when thinking in terms of classes. However, it is precisely
what we want to express in the context of abstracts. Any **inlined member method**
of an abstract can assign to `this` and thus modify the "internal value".

One problem may be apparent - what happens if a member function is not declared
inline? The code obviously must be placed somewhere! Haxe handles this by creating
a private class, known as the **implementation class**, which contains all the
abstract member functions as static functions accepting an additional first
argument `this` of the underlying type.

> ##### Trivia: Basic Types and abstracts
>
> Before the advent of abstract types, all basic types were implemented as
> extern classes or enums. While this nicely took care of some aspects
> such as `Int` being a "child class" of `Float`, it caused issues elsewhere.
> For instance, with `Float` being an extern class, it would unify with the empty
> structure `{}`, making it impossible to constrain a type to accept only real objects.

### Implicit Casts
                                                              **Implicit Casts**

Unlike classes, abstracts allow defining implicit casts. There are two kinds of
implicit casts:

01. Direct: Allows direct casting of the abstract type to or from another type.
    This is defined by adding `to` and `from` rules to the abstract type and is
    only allowed for types which unify with the underlying type of the abstract.
02. Class field: Allows casting via calls to special cast functions. These
    functions are defined using `@:to` and `@:from` metadata. This kind of cast
    is allowed for all types.

The following code example shows an example of **direct** casting:

[code asset](assets/ImplicitCastDirect.hx)

```haxe
    abstract MyAbstract(Int) from Int to Int {
      inline function new(i:Int) {
        this = i;
      }
    }

    class Main {
      static public function main() {
        var a:Main.MyAbstract = 12;
        var b:Int = a;
        trace(b);
      }
    }
```

We declare `MyAbstract` as being `from Int` and `to Int`, appropriately meaning
it can be assigned from `Int` and assigned to `Int`. This is shown in lines 9
and 10, where we first assign the `Int` `12` to variable `a` of type `MyAbstract`
(this works due to the `from Int` declaration) and then that abstract back to
variable `b` of type `Int` (this works due to the `to Int` declaration).

Class field casts have the same semantics, but are defined completely differently:

[code asset](assets/ImplicitCastField.hx)

```haxe
    abstract MyAbstract(Int) {
      inline function new(i:Int) {
        this = i;
      }

      @:from
      static public function fromString(s:String) {
        return new MyAbstract(Std.parseInt(s));
      }

      @:to
      public function toArray() {
        return [this];
      }
    }

    class Main {
      static public function main() {
        var a:MyAbstract = "3";
        var b:Array<Int> = a;
        trace(b); // [3]
      }
    }
```


By adding `@:from` to a static function, that function qualifies as an
implicit cast function from its argument type to the abstract. These functions
must return a value of the abstract type. They must also be declared `static`.

Similarly, adding `@:to` to a function qualifies it as implicit cast function
from the abstract to its return type.

In the previous example, the method `fromString` allows the assignment of
value `"3"` to variable `a` of type `MyAbstract` while the method `toArray`
allows assigning that abstract to variable `b` of type `Array<Int>`.

When using this kind of cast, calls to the cast functions are inserted
where required. This becomes obvious when looking at the JavaScript output:

```js
var a = _ImplicitCastField.MyAbstract_Impl_.fromString("3");
var b = _ImplicitCastField.MyAbstract_Impl_.toArray(a);
```
This can be further optimized by [inlining] both cast functions, turning
the output into the following:

```haxe
var a = Std.parseInt("3");
var b = [a];
```
The **selection algorithm** when assigning a type `A` to a type `B` where
at least one is an abstract is simple:

1. If `A` is not an abstract, go to 3.
2. If `A` defines a **to**-conversion that admits `B`, go to 6.
3. If `B` is not an abstract, go to 5.
4. If `B` defines a **from**-conversion that admits `A`, go to 6.
5. Stop, unification fails.
6. Stop, unification succeeds.

<!-- ![](assets/figures/types-abstract-implicit-casts-selection-algorithm.svg) -->
<!-- ![](https://haxe.org/manual/types-abstract-implicit-casts-selection-algorithm.svg) -->

_Figure: Selection algorithm flow chart._

          +------------------------------+
    No <--| A is abstract                |
     |    +------------------------------+
     |                  Yes
     |    +------------------------------+
     |    | A defines 'to' for B         | --> Yes ---+
     |    +------------------------------+            |
     |                  No                            |
     +--->+------------------------------+            |
          | B is abstract                |            |
    No<---+------------------------------+            |
     |                  Yes                           |
     |    +------------------------------+            |
     |    | B defines 'from' for A       | --> Yes ---+
     |    +------------------------------+            |
     |                  No                            |
     |         +---------------------+         +----------------------+
     +-------->| Unification fails   |         | Unification succeeds |
               +---------------------+         +----------------------+


By design, implicit casts are **not transitive**, as the following example shows:

[code asset](assets/ImplicitTransitiveCast.hx)

```haxe
    abstract A(Int) {
      public function new()
        this = 0;

      @:to public function toB() return new B();
    }

    abstract B(Int) {
      public function new()
        this = 0;

      @:to public function toC() return new C();
    }

    abstract C(Int) {
      public function new()
        this = 0;
    }

    class Main {
      static public function main() {
        var a = new A();
        var b:B = a; // valid, uses A.toB
        var c:C = b; // valid, uses B.toC
        var c:C = a; // error, A should be C
      }
    }
```

While the individual casts from `A` to `B` and from `B` to `C` are allowed,
a transitive cast from `A` to `C` is not. This is to avoid ambiguous cast
paths and retain a simple selection algorithm.


### Operator Overloading
                                                        **Operator Overloading**

### Array Access
                                                                **Array Access**

Array access describes the particular syntax traditionally used to access
a value in an array at a certain offset. This is usually only allowed with
arguments of type `Int`. Using abstracts, however, makes it possible to define
custom array access methods. The Haxe [Standard Library] uses this in its `Map`
type, where the following two methods can be found:

```haxe
    @:arrayAccess
    public inline function get(key:K) {
      return this.get(key);
    }
    @:arrayAccess
    public inline function arrayWrite(k:K, v:V):V {
        this.set(k, v);
        return v;
    }
```

There are two kinds of array access methods:

* If an `@:arrayAccess` method accepts one argument, it is a getter.
* If an `@:arrayAccess` method accepts two arguments, it is a setter.

The methods `get` and `arrayWrite` seen above then allow for the following usage:

[code asset](assets/AbstractArrayAccess.hx)

```haxe
    class Main {
      public static function main() {
        var map = new Map();
        map["foo"] = 1;
        trace(map["foo"]);
      }
    }
```

At this point, it should not be surprising to see that calls to the
array access fields are inserted into the output:

```js
    map.set("foo",1);
    console.log(map.get("foo")); // 1
```

Order of array access resolving

Due to a bug in Haxe versions before 3.2, the order of checked `@:arrayAccess`
fields was undefined. This was fixed for Haxe 3.2 so that the fields are now
consistently checked from top to bottom:

[code asset](assets/AbstractArrayAccessOrder.hx)

```haxe
    abstract AString(String) {
      public function new(s)
        this = s;

      @:arrayAccess function getInt1(k:Int) {
        return this.charAt(k);
      }

      @:arrayAccess function getInt2(k:Int) {
        return this.charAt(k).toUpperCase();
      }
    }

    class Main {
      static function main() {
        var a = new AString("foo");
        trace(a[0]); // f
      }
    }
```

注意，构造函数的语法，虽然像是不正确，但是 Haxe 确实支持构造器只有一句代码时这样偷懒语法。[code asset](assets/AbstractArrayAccessOrder.hx)

The array access `a[0]` is resolved to the `getInt1` field, leading to the lower
case `f` being returned. The result might be different in Haxe versions before 3.2.

Fields which are defined earlier take priority even if they require an
[implicit cast].

### Enum abstracts
                                                              **Enum abstracts**

### Forwarding abstract fields
                                                  **Forwarding abstract fields**

### Core-type abstracts
                                                         **Core-type abstracts**


## 🐥 Monomorph
https://haxe.org/manual/types-monomorph.html
                                                                   **Monomorph**

A monomorph is a type which may, through unification, morph into a
different type later. Further details about this type are explained
in the section on [type inference].


# 🥚 Type System
https://haxe.org/manual/type-system.html
manual\content\03-type-system.md
                                                                 **Type System**


We learned about the different kinds of types in [Types] and it is
now time to see how they interact with each other. We start off easy by
introducing [typedef], a mechanism to give a name (or alias) to a more
complex type. Among other use cases, typedefs will come in handy when
working with types that have [type parameters].

A significant amount of type-safety is achieved by checking if two given
types are compatible. Meaning, the compiler tries to perform **unification**
between them as detailed in [Unification].

All types are organized in **modules** and can be addressed through **paths**.
[Modules and Paths] will give a detailed explanation of the related mechanics.

## 🐥 Typedef
                                                                     **Typedef**

We briefly looked at typedefs while talking about [anonymous structures] and
saw how we could shorten a complex [structure type] by giving it a name.
This is precisely why typedefs are useful. Giving names to structure types
might even be considered their primary function, and is so common that
the distinction between the two appears somewhat blurry. Many Haxe users
consider typedefs to actually **be** the structure.

A typedef can give a name to any other type:

```haxe
typedef IA = Array<Int>;
```

This enables us to use `IA` in places where we would normally use `Array<Int>`.
While this saves only a few keystrokes in this particular case, it can make
a larger difference for more complex, compound types. Again, this is why
typedef and structures seem so connected:

```haxe
typedef User = {
  var age : Int;
  var name : String;
}
```

Typedefs are not textual replacements, but are actually real types. They can
even have [type parameters] as the `Iterable` type from the Haxe Standard Library
demonstrates:

```haxe
typedef Iterable<T> = {
  function iterator() : Iterator<T>;
}
```


## 🐥 Modules and Paths
                                                           **Modules and Paths**

> ##### Define: Module
>
> All Haxe code is organized in modules, which are addressed using paths.
> In essence, each .hx file represents a module which may contain several types.
> A type may be `private`, in which case only its containing module can access it.

The distinction between a module and its containing type of the same name is
blurry by design. In fact, addressing `haxe.ds.StringMap<Int>` can be considered
shorthand for `haxe.ds.StringMap.StringMap<Int>`.

The latter version consists of four parts:

1. The package `haxe.ds`.
2. The module name `StringMap`.
3. The type name `StringMap`.
4. The type parameter `Int`.

If the module and type name are equal, the duplicate can be removed, leading to
the `haxe.ds.StringMap<Int>` short version. However, knowing about the extended
version helps with understanding how [module sub-types] are addressed.

Paths can be shortened further by using an [import], which typically allows
omitting the package part of a path. This may lead to usage of unqualified
identifiers, which requires understanding the [resolution order].

> ##### Define: Type path
>
> The **dot-path** to a type consists of the package, the module name and
> the type name. Its general form is `pack1.pack2.packN.ModuleName.TypeName`.


## 🐥 Module Sub-Types
                                                            **Module Sub-Types**

A module sub-type is a type declared in a module with a different name than
that module. This allows a single .hx file to contain multiple types, which
can be accessed unqualified from within the module, and by using
`package.Module.Type` from other modules:

```haxe
var e:haxe.macro.Expr.ExprDef;
```

Here the sub-type `ExprDef` within module `haxe.macro.Expr` is accessed.

An example sub-type declaration would look like the following :

```haxe
// a/A.hx
package a;

class A { public function new() {} }
// sub-type
class B { public function new() {} }
```

```haxe
// Main.hx
import a.A;

class Main {
    static function main() {
        var subtype1 = new a.A.B();

        // these are also valid, but require import a.A or import a.A.B :
        var subtype2 = new B();
        var subtype3 = new a.B();
    }
}
```

The sub-type relation is not reflected at run-time; public sub-types become
a member of their containing package, which could lead to conflicts if
two modules within the same package tried to define the same sub-type.
Naturally, the Haxe compiler detects these cases and reports them accordingly.
In the example above `ExprDef` is generated as `haxe.macro.ExprDef`.

Sub-types can also be made private:

```haxe
private class C { ... }
private enum E { ... }
private typedef T { ... }
private abstract A { ... }
```

> ##### Define: Private type
>
> A type can be made private by using the `private` modifier. Afterwards,
> the type can only be directly accessed from within the [module] it is defined in.
>
> Private types, unlike public ones, do not become a member of their containing package.

The accessibility of types can be controlled more precisely by using [access control].


## 🐥 Import
                                                                      **Import**

If a type path is used multiple times in a .hx file, it might make sense to use an `import` to shorten it. The package can then be omitted when using the type:

[code asset](assets/Import.hx)
[code asset](assets/ImportWildcard.hx)

```haxe
import haxe.ds.StringMap;  // Import Type
import haxe.macro.Expr;    // Import all type from a module: Binop etc.
import Math.random;        // Import static method: random()
import haxe.macro.*;       // Wildcard import
import String.fromCharCode in f; // Import as alias: f is an alias

class Main {
  static public function main() {
    // instead of: new haxe.ds.StringMap();
    new StringMap();

    var e:Binop = OpAdd;

    var expr:Expr = null;
    // var expr:ExprDef = null; // Class not found : ExprDef
  }
}
```

Haxe allows using a wildcard symbol `.*` to allow import of all modules in
a package, all types in a module, or all static fields in a type. It is
important to understand that this kind of import only crosses a single level
as we can see in the code above: ExprDef not found.

Using the wildcard import on `haxe.macro` allows accessing `Expr`, which is
a module in this package, but it does not allow accessing `ExprDef` which is
a sub-type of the `Expr` module. This rule extends to static fields when
a module is imported.

When using wildcard imports on a package, the compiler does not eagerly
process all modules in that package; modules that have not been used
explicitly are not part of the generated output.

Since Haxe 3.2.0, the more natural `as` can be used in place of `in` when
importing modules.


## 🐥 Import defaults / import.hx
                                                 **Import defaults / import.hx**

Since Haxe 3.3.0

Using the specially named `import.hx` file (note the lowercase name),
default imports and usings can be defined that will be applied for all modules
inside a directory, which reduces the number of imports for large code bases
with many helpers and static extensions.

The `import.hx` file must be placed in the same directory as your code.
It can only contain import and using statements, which will be applied to
all Haxe modules in the directory and its subdirectories.

Default imports of `import.hx` act as if its contents are placed at
the top of each module.

Related content

* [Introduction of `import.hx`](https://haxe.org/blog/importhx-intro/)


## 🐥 Resolution Order
                                                            **Resolution Order**

Resolution order comes into play as soon as unqualified identifiers are involved.
These are [expressions] in the form of `foo()`, `foo = 1` and `foo.field`.
The last one in particular includes module paths such as `haxe.ds.StringMap`,
where `haxe` is an unqualified identifier.

We describe the resolution order algorithm here, which depends on the following state:

* The declared [local variables](expression-var) (including function arguments).
* The [imported](type-system-import) modules, types and statics.
* The available [static extensions](lf-static-extension).
* The kind (static or member) of the current field.
* The declared member fields on the current class and its parent classes.
* The declared static fields on the current class.
* The [expected type](define-expected-type).
* The expression being `untyped` or not.

<!-- ![](assets/figures/type-system-resolution-order-diagram.svg) -->
<!-- ![](https://haxe.org/manual/type-system-resolution-order-diagram.svg) -->

_Figure: Resolution order of identifier `i`_

            |---------------------------------------------------+
            | i' == 'true', 'false', 'this', 'super' or 'null'  |-> Yes -+
            |---------------------------------------------------+        |
                                      No                                 |
            |---------------------------------------------------+        |
            | Local variable 'i' exists                         |-> Yes -+
            |---------------------------------------------------+        |
                                      No                                 |
            |-----------------------------------------+                  |
      Yes<--| Current field is static?                |                  |
       |    |-----------------------------------------+                  |
       |                              No                                 |
       |    |---------------------------------------------------+        |
       |    | Current class or parent class have field 'i'      |-> Yes -+
       |    |---------------------------------------------------+        |
       |                              No                                 |
       |    |---------------------------------------------------+        |
       |    | Static extension with 'this'-type                 |-> Yes -+
       |    |---------------------------------------------------+        |
       |                              No                                 |
       |    |---------------------------------------------------+        |
       +--->| Current class has static field 'i'                |-> Yes -+
            |---------------------------------------------------+        |
                                      No                                 |
            |---------------------------------------------------+        |
            | Imported enum has constructor 'i'                 |-> Yes -+
            |---------------------------------------------------+        |
                                      No                                 |
            |---------------------------------------------------+        |
            | Static 'i' imported                               |-> Yes -+
            |---------------------------------------------------+        |
                                      No                                 |
            |-----------------------------------------+                  |
      Yes<--| 'i' starts with lower-case character    |                  |
       |    |-----------------------------------------+                  |
       |                              No                                 |
       |    |---------------------------------------------------+        |
       |    | Type 'i' imported                                 |-> Yes -+
       |    |---------------------------------------------------+        |
       |                              No                                 |
       |    |---------------------------------------------------+        |
       |    | Current package contains module 'i' with type 'i' |-> Yes -+
       |    |---------------------------------------------------+        |
       |                              No                                 |
       |    |---------------------------------------------------+        |
       |    | Top-level type 'i' exists                         |-> Yes -+
       |    |---------------------------------------------------+        |
       |             No                                                  |
       |    |------------------|        |-------------+                  |
       +--->| Untyped mode     |-> No ->|    Fail     |                  |
            |------------------|        |-------------+                  |
                     Yes                                                 |
            |---------------------------------------------------+        |
            | 'i' == '__this__'                                 |-> Yes -+
            |---------------------------------------------------+        |
                                      No                                 |
            |---------------------------------------------------+        |
            | Generate local variable 'i'                       |        |
            |---------------------------------------------------+        |
                                                                         |
                                                                    +----v----+
                                                                    | Resolve |
                                                                    +---------+

Given an identifier `i`, the algorithm is as follows:

01. If i is `true`, `false`, `this`, `super` or `null`, resolve to the matching constant and halt.
02. If a local variable named `i` is accessible, resolve to it and halt.
03. If the current field is static, go to 6.
04. If the current class or any of its parent classes has a field named `i`, resolve to it and halt.
05. If a static extension with a first argument of the type of the current class is available, resolve to it and halt.
06. If the current class has a static field named `i`, resolve to it and halt.
07. If an enum constructor named `i` is declared on an imported enum, resolve to it and halt.
08. If a static named `i` is explicitly imported, resolve to it and halt.
09. If `i` starts with a lower-case character, go to 11.
10. If a type named `i` is available, resolve to it and halt.
11. If the expression is not in untyped mode, go to 14.
12. If `i` equals `__this__`, resolve to the `this` constant and halt.
13. Generate a local variable named `i`, resolve to it and halt.
14. Fail.

For step 10, it is also necessary to define the resolution order of types:

1. If a type named `i` is imported (directly or as part of a module), resolve to it and halt.
2. If the current package contains a module named `i` with a type named `i`, resolve to it and halt.
3. If a type named `i` is available at top-level, resolve to it and halt.
4. Fail.

For step 1 of this algorithm, as well as steps 5 and 7 of the previous one,
the order of import resolution is important:

01. Imported modules and static extensions are checked from bottom to top
    with the first match being picked.
02. Imports that come from [import.hx](type-system-import-defaults) files
    are considered to be at the top of affected modules, which means they
    have the lowest priority. If multiple `import.hx` files affect a module,
    the ones in child directories have priority over the ones in parent directories.
03. Within a given module, types are checked from top to bottom.
04. For imports, a match is made if the name equals.
05. For [static extensions](lf-static-extension), a match is made if the name
    equals and the first argument [unifies](type-system-unification). Within
    a given type being used as a static extension, the fields are checked
    from top to bottom.




# 🥚 Class Fields
https://haxe.org/manual/class-field.html
manual\content\04-class-field.md
                                                                **Class Fields**

> ##### Define: Class Field
>
> A class field is a variable, property or method of a class which can
> either be static or non-static. Non-static fields are referred to
> as **member** fields, so we speak of e.g. a **static method** or
> a **member variable**.

So far we have seen how types and Haxe programs, in general, are structured.
This section about class fields concludes the structural part and at the same
time bridges to the behavioral part of Haxe. This is because class fields are
the place where expressions are at home.

There are three kinds of class fields:

* **Variable**: A variable class field holds a value of a certain type, which can be read or written.
* **Property**: A property class field defines a custom access behavior for something that, outside the class, looks like a variable field.
* **Method**: A method is a function which can be called to execute code.

Strictly speaking, a variable could be considered to be a property with
certain access modifiers. Indeed, the Haxe Compiler does not distinguish
variables and properties during its typing phase, but they remain separated
at the syntax level.

Regarding terminology, a method is a (static or non-static) function belonging
to a class. Other functions, such as a local functions in expressions, are
not considered methods.


## 🐥 Variable
                                                                    **Variable**
https://haxe.org/manual/class-field-variable.html

We have already seen variable fields in several code examples of previous sections.
Variable fields hold values, a characteristic which they share with most
(but not all) properties:

[code asset](assets/VariableField.hx)

```haxe
    class Main {
      static var example:String = "bar";

      public static function main() {
        trace(example);
        example = "foo";
        trace(example);
      }
    }
```

We can learn from this that a variable

1. has a name (here: `example`),
2. has a type (here: `String`),
3. may have a constant initialization (here: `"bar"`) and
4. may have [access modifiers](class-field-access-modifier) (here: `static`)

The example first prints the initialization value of `example`, then sets it
to `"foo"` before printing its new value. The effect of access modifiers is
shared by all three class field kinds and explained in a separate section.

It should be noted that the explicit type is not required if there is
an initialization value. The compiler will infer it in this case.

                              inline?
    ----------------------------------------------------------------
                           No    |    Yes
    -----------------------------|----------------------------------
                     extern?     |       static?
    -----------------------------|---------|------------------------
                 No    |   Yes   |      No | Yes
    -------------------|---------|---------|------------------------
            static?    |  None   | Invalid | Constants only
    -----------------------------|----------------------------------
           No | Yes              |
    ----------|------------------|----------------------------------
    No 'this' | Anything         |


![](https://haxe.org/manual/class-field-variable-init-values.svg)

_Figure: Initialization values of a variable field._

## 🐥 Property
                                                                    **Property**

Properties are the second option for dealing with data on a class.
Unlike variables, however, they offer more control of which kind
of field access should be allowed and how it should be generated.
Common use cases include:

* Have a field which can be read from anywhere but only be written from within the defining class.
* Have a field which invokes a **getter**-method upon read-access.
* Have a field which invokes a **setter**-method upon write-access.

When dealing with properties, it is important to understand the two kinds of access:

> ##### Define: Read Access
>
> A read access to a field occurs when a right-hand side field access expression is used.
> This includes calls in the form of `obj.field()`, where `field` is accessed to be read.

> ##### Define: Write Access
>
> A write access to a field occurs when a field access expression is assigned
> a value in the form of `obj.field = value`. It may also occur in combination
> with read access for special assignment operators such as `+=` in expressions
>like `obj.field += value`.


Read access and write access are directly reflected in the syntax,
as the following example shows:

[code asset](assets/Property2.hx)

```haxe
    class Main {
      // read from outside, write only within Main
      public var ro(default, null):Int;

      // write from outside, read only within Main
      public var wo(null, default):Int;

      // access through getter get_x and setter set_x
      public var x(get, set):Int;

      // read access through getter, no write access
      public var y(get, never):Int;

      // required by field x
      function get_x() return 1;
      function set_x(x) return x;

      // required by field y
      function get_y() return 1;

      function new() {
        var v = x;
        x = 2;
        x += 1;
      }

      static public function main() {
        new Main();
      }
    }
```

For the most part, the syntax is similar to variable syntax,
and the same rules indeed apply. Properties are identified by

* the opening parenthesis `(` after the field name,
* followed by a special **access identifier** (here: `default`),
* with a comma `,` separating
* another special access identifier (here: `null`)
* before a closing parenthesis `)`.

The access identifiers define the behavior when the field is read (first identifier)
and written (second identifier). The accepted values are:

* `default`: Allows normal field access if the field has public visibility, otherwise equal to `null` access.
* `null`: Allows access only from within the defining class.
* `get`/`set`: Access is generated as a call to an **accessor method**. The compiler ensures that the accessor is available.
* `dynamic`: Like `get`/`set` access, but does not verify the existence of the accessor field.
* `never`: Allows no access at all.

> ##### Define: Accessor method
>
> An accessor method for a field named `field` of type `T`
> is a **getter** named `get_field` of type `Void->T`
> or a **setter** named `set_field` of type `T->T`.

> ##### Trivia: Accessor names
>
> In Haxe 2, arbitrary identifiers were allowed as access identifiers and
> would lead to custom accessor method names to be admitted. This made
> parts of the implementation quite tricky to deal with. In particular,
> `Reflect.getProperty()` and `Reflect.setProperty()` had to assume that
> any name could have been used, requiring the target generators
> to generate meta-information and perform lookups.
>
> We disallowed these identifiers and went for the `get_` and `set_`
> naming convention which greatly simplified implementation. This was
> one of the breaking changes between Haxe 2 and 3.


## 🐥 Method
                                                                      **Method**

While variables hold data, methods are defining behavior of a program by
hosting expressions. We have seen method fields in every code example of
this document with even the initial [Hello World] example containing a `main` method:

[code asset](assets/HelloWorld.hx)

Methods are identified by the `function` keyword. We can also learn that they

1. have a name (here: `main`),
2. have an argument list (here: empty `()`),
3. have a return type (here: `Void`),
4. may have access modifiers (here: `static` and `public`) and
5. may have an expression (here: `{trace("Hello World");}`).

We can also look at the next example to learn more about arguments and return types:

[code asset](assets/MethodField.hx)
[code asset](assets/OverrideCallParent.hx)

```haxe
    class Base {
      public function new() {}

      public function myMethod() {
        return "Base";
      }
    }

    class Child extends Base {
      public override function myMethod() {
        return "Child";
      }

      public function callHome() {
        return super.myMethod();
      }
    }

    class Main {

      static function myFunc(f:String, i) {
        return true;
      }

      static public function main() {
        myFunc("foo", 1);
        var child = new Child();
        trace(child.callHome()); // Base
      }
    }
```

Arguments are given by an opening parenthesis `(` after the field name,
a comma `,` separated list of argument specifications and a closing parenthesis `)`.
Additional information on the argument specification is described in Function Type.

The example demonstrates how type inference can be used for both argument
and return types. The method `myFunc` has two arguments but only explicitly
gives the type of the first one, `f`, as `String`. The second one, `i`,
is not type-hinted and it is left to the compiler to infer its type from
calls made to it. Likewise, the return type of the method is inferred from
the `return true` expression as `Bool`.


## 🐥 Access Modifier & Visibility
                                            **Access Modifier** & **Visibility**

Fields are by default **private**, meaning that only the class and its
sub-classes may access them. They can be made **public** by using the
`public` access modifier, allowing access from anywhere.

```haxe
    class MyClass {
      static public function available() {
        unavailable();
      }

      static private function unavailable() {}
    }

    class Main {
      static public function main() {
        MyClass.available();
        // Cannot access private field unavailable
        MyClass.unavailable();
      }
    }
```

The example demonstrates visibility through **static** fields, but the rules
for member fields are equivalent. The following example demonstrates visibility
behavior for when inheritance is involved.

```haxe
    class Base {
      public function new() {}

      private function baseField() {}
    }

    class Child1 extends Base {
      private function child1Field() {}
    }

    class Child2 extends Base {
      public function child2Field() {
        var child1 = new Child1();
        child1.baseField();
        // Cannot access private field child1Field
        child1.child1Field();
      }
    }

    class Main {
      static public function main() {}
    }
```

Omitting the visibility modifier usually defaults the visibility to `private`,
but there are exceptions where it becomes `public` instead:

01. If the class is declared as `extern`.
02. If the field is declared on an [interface](types-interfaces).
03. If the field [overrides](class-field-overriding) a public field.
04. If the class has metadata `@:publicFields`, which forces all class
    fields of inheriting classes to be public.

> ##### Trivia: Protected
>
> Haxe does not support the `protected` keyword known from many other
> object-oriented programming languages like Java and C++. However,
> Haxe's `private` behaves similarly to `protected` in other languages,
> but does not allow access from non-inheriting classes in the same package.


## 🐥 Inline functions & inline Variables
                                                                      **Inline**

The `inline` keyword allows function bodies to be directly inserted in place
of calls to them. This can be a powerful optimization tool but should be used
judiciously as not all functions are good candidates for inline behavior.
The following example demonstrates the basic usage:

```haxe
    class Main {
      static inline function mid(s1:Int, s2:Int) {
        return (s1 + s2) / 2;
      }

      static public function main() {
        var a = 1;
        var b = 2;
        var c = mid(a, b);
      }
    }
```

The generated JavaScript output reveals the effect of inline:

```js,ignore
    (function () { "use strict";
    var Main = function() { }
    Main.main = function() {
        var a = 1;
        var b = 2;
        var c = (a + b) / 2;
    }
    Main.main();
    })();
```


The `inline` keyword can also be applied to variables, but only when used
together with `static`. An inline variable must be initialized to a constant,
otherwise the compiler emits an error. The value of the variable is used
everywhere in place of the variable itself.

The following code demonstrates the usage of an inline variable:

```haxe
    class Main {
      static inline final language = "Haxe";

      static public function main() {
        trace(language);
      }
    }
```

The generated JavaScript shows that the `language` variable is not present anymore:

```js,ignore
    (function ($global) { "use strict";
    var Main = function() { };
    Main.main = function() {
        console.log("root/program/Main.hx:5:","Haxe");
    };
    Main.main();
    })({});
```

> ##### Trivia: `inline var`
>
> Prior to Haxe 4, there was no `final` keyword. The inline variables feature
> however was present for a long time, using the `var` keyword instead of `final`.
> Using `inline var` still works in Haxe 4 but might be deprecated in the future,
> because `final` is more appropriate.


## 🐥 Dynamic
                                                                     **Dynamic**

Methods can be denoted with the `dynamic` keyword to make them (re-)bindable:

[code asset](assets/DynamicFunction.hx)

```haxe
    class Main {
      static dynamic function test() {
        return "original";
      }

      static public function main() {
        trace(test()); // original
        test = function() {
          return "new";
        }
        trace(test()); // new
      }
    }
```

The first call to `test()` invokes the original function which returns the
`String` `"original"`. In the next line, `test` is **assigned** a new function.
This is precisely what `dynamic` allows: Function fields can be assigned a new function.
As a result, the next invocation of `test()` returns the `String` `"new"`.

Dynamic fields cannot be `inline` for obvious reasons: While inlining is done at compile-time, dynamic functions necessarily have to be resolved at runtime.

## 🐥 Final (since Haxe 4.0.0)
                                                                       **Final**

The `final` keyword can be used on class fields with the following effects:

* `final function ...` to make a function non-overridable in subclasses.
* `final x = ...` to declare a constant that must be initialized immediately or in the constructor and cannot be written to.
* `inline final x = ...` is the same but inline the value wherever it is used. Only constant values can be assigned.

`static final` fields must be initialized immediately by providing an expression.
If a class has non-static `final` variables which are not initialized immediately,
it requires a constructor which has to assign values to all such fields.
`final` does not affect visibility and it is not supported on properties.
The `final` keyword can also be added to the class declaration preventing
it from being extended.


# 🥚 Expressions
https://haxe.org/manual/expression.html
manual\content\05-expression.md
                                                                 **Expressions**

05. ✨ [Expressions](https://haxe.org/manual/expression.html)
     - [Blocks]
     - [Literals]
     - - - [Array Declaration]
     - - - [Map Declaration]
     - - [Object Declaration]
     - [Constants]
     - [Operators]
     - - - [Unary Operators]
     - - - [Binary Operators]
     - - - [Ternary Operator]
     - - - [Precedence]
     - - [Overloading and macros]
     - [Field Access]
     - [Array Access]
     - [Function Call]
     - [var and final]
     - [Local Functions]
     - [new]
     - [for]
     - [while]
     - [do-while]
     - [if]
     - [switch]
     - [throw]
     - [try/catch]
     - [return]
     - [break]
     - [continue]
     - [cast]
     - - - [unsafe cast]
     - - [safe cast]
     - [type check]
     - [inline]

## 🐥 Blocks
                                                                      **Blocks**
## 🐥 Literals
                                                                    **Literals**
## 🐥 Constants
                                                                   **Constants**
## 🐥 Operators
                                                                   **Operators**
### **Unary Operators**

### **Binary Operators**

### **Ternary Operator**

Operator | Operation | Operand 1 | Operand 2 | Operand 3 | Result type
 --- | --- | --- | --- | --- | ---
`?:` | condition | `Bool` | any | any | any

The type of operand 2 and operand 3 must [unify]. The unified type is used
as the result type of the expression.

The ternary conditional operator is a shorter form of [`if`]:

```haxe
    trace(true ? "Haxe" : "Neko"); // Haxe
    trace(1 == 2 ? 3 : 4); // 4

    // equivalent to:

    trace(if (true) "Haxe" else "Neko"); // Haxe
    trace(if (1 == 2) 3 else 4); // 4
```


### **Precedence**

In order of descending precedence
(i.e. operators higher in the table are evaluated first):

|              Operators              |           Note           | Associativity |
|-------------------------------------|--------------------------|---------------|
| `!`, `++`, `--`                     | postfix unary operators  | right         |
| `~`, `!`, `-`, `++`, `--`           | prefix unary operators   | right         |
| `%`                                 | modulo                   | left          |
| `*`, `/`                            | multiplication, division | left          |
| `+`, `-`                            | addition, subtraction    | left          |
| `<<`, `>>`, `>>>`                   | bitwise shifts           | left          |
| `&`, `|`, `^`                       | bitwise operators        | left          |
| `==`, `!=`, `<`, `<=`, `>`, `>=`    | comparison               | left          |
| `...`                               | interval                 | left          |
| `&&`                                | logical and              | left          |
| `||`                                | logical or               | left          |
| `@`                                 | metadata                 | right         |
| `?:`                                | ternary                  | right         |
| `%=`, `*=`, `/=`, `+=`, `-=`, `<<=` | compound assignment      | right         |
| `>>=`, `>>>=`, `&=`, `|=`, `^=`     | compound assignment      | right         |
| `=>`                                | arrow                    | right         |


Differences from C-like precedence

Many languages (C++, Java, PHP, JavaScript, etc) use the same operator precedence
rules as C. In Haxe, there are a couple of differences from these rules:

* `%` (modulo) has a higher precedence than `*` and `/`; in C they have the same precedence
* `|`, `&`, `^` (bitwise operators) have the same precedence; in C the three operators all have a different precedence
* `|`, `&`, `^` (bitwise operators) also have a lower precedence than `==`, `!=`, etc (comparison operators)

### **Overloading and macros**

The operators specified in the previous sections specify the types and meanings
for operations on basic types. Additional functionality can be implemented using
abstract [operator overloading] or [macros] processing.

Operator precedence cannot be changed with abstract operator overloading.

For macro processing in particular, there is an additional operator available:
the postfix `!` operator.


## 🐥 Field Access
                                                                **Field Access**

Field access is expressed by using the dot `.` followed by the name of the field.

    object.fieldName

This syntax is also used to access types within packages in the form of `pack.Type`.

The typer ensures that an accessed field actually exist and may apply
transformations depending on the nature of the field. If a field access
is ambiguous, understanding the [resolution order] may help.

## 🐥 Array Access
                                                                **Array Access**

Array access is expressed by using an opening bracket `[` followed by the
index expression and a closing bracket `]`.

    expr[indexExpr]

This notation is allowed with arbitrary expressions, but at typing level
only certain combinations are admitted:

* `expr` is of `Array` or `Dynamic` and `indexExpr` is of `Int`
* `expr` is an [abstract type] which defines a matching [array access]

## 🐥 Function Call
                                                               **Function Call**

Functions calls consist of an arbitrary subject expression followed by an
opening parenthesis `(`, a comma `,` separated list of expressions as
arguments and a closing parenthesis `)`.

```haxe
    subject(); // call with no arguments
    subject(e1); // call with one argument
    subject(e1, e2); // call with two arguments
    // call with multiple arguments
    subject(e1, e2, /*...*/ eN);
```

Related content

* Haxe Code Cookbook article: [How to declare functions](http://code.haxe.org/category/beginner/declare-functions.html)
* Class Methods: [Method]

## 🐥 var and final
                                                               **var and final**

The `var` keyword allows declaring multiple variables, separated by comma `,`.
Each variable has a valid [identifier] and optionally a value assignment following
the assignment operator `=`. Variables can also have an explicit type-hint.

```haxe
    var a; // declare local `a`
    var b:Int; // declare variable `b` of type Int
    // declare variable `c`, initialized to value 1
    var c = 1;
    // declare an uninitialized variable `d`
    // and variable `e` initialized to value 2
    var d,e = 2;
```

The scoping behavior of local variables, as well as variable shadowing is
described in [Blocks].

Since Haxe 4.0.0

In Haxe 4, the alternative keyword `final` was introduced at the expression level.
Variables declared with `final` instead of `var` can only be assigned a value once.

[code asset](assets/Final.hx)

```haxe
    class Main {
      static public function main() {
        final a = "hello";
        var b = "world";
        trace(a, b); // hello, world
        b = "Haxe";
        trace(a, b); // hello, Haxe

        // the following line would cause a compilation error:
        // a = "bye";
      }
    }

```
It is important to note that `final` may not have the intended effect with types
that are not immutable, such as arrays or objects. Even though the variable
cannot have a different object assigned to it, the object itself can still
be modified using its methods:

[code asset](assets/FinalMutable.hx)

```haxe
    class Main {
      static public function main() {
        final a = [1, 2, 3];
        trace(a); // [1, 2, 3]

        // the following line would cause a compilation error:
        // a = [1, 2, 3, 4];

        // but the following line works:
        a.push(4);
        trace(a); // [1, 2, 3, 4]
      }
    }
```

## 🐥 Local Functions
                                                             **Local Functions**

Haxe supports first-class functions and allows declaring local functions in
expressions. The syntax follows [class field methods](class-field-method):

[code asset](assets/LocalFunction.hx)

```haxe
    class Main {
      static public function main() {
        var value = 1;
        function myLocalFunction(i) {
          return value + i;
        }
        trace(myLocalFunction(2)); // 3
      }
    }
```

We declare `myLocalFunction` inside the [block expression](expression-block)
of the `main` class field. It takes one argument `i` and adds it to `value`,
which is defined in the outside scope.

The scoping is equivalent to that of [variables](expression-var) and for
the most part writing a named local function can be considered equal to
assigning an unnamed local function to a local variable:

```haxe
    var myLocalFunction = function(a) { }
```

However, there are some differences related to type parameters and the
position of the function. We speak of a "lvalue" function if it is not
assigned to anything upon its declaration, and an "rvalue" function otherwise.

* Lvalue functions require a name and can have [type parameters].
* Rvalue functions may have a name, but cannot have type parameters.


Arrow functions since Haxe 4.0.0

Haxe 4 introduced a shorter syntax for defining local functions without a name,
very similar to the function type syntax. The argument list is defined between
two parentheses, followed by an arrow `->`, followed directly by the expression.
An arrow function with a single argument does not require parentheses around the
argument, and an arrow function with zero arguments should be declared with `() -> ...`:

[code asset](assets/ArrowFunction.hx)

```haxe
    class Main {
      static public function main()
      {
        var myConcat = (a:String, b:String) -> a + b;
        var myChar   =    (a:String, b:Int) -> (a.charAt(b) : String);
        $type(myConcat);  // (a : String, b : String) -> String
        $type(myChar);    // (a : String, b : Int) -> String
        trace(myConcat("foo", "bar")); // "foobar"
        trace(myChar("example", 1));   // "x"

        var oneArgument = number -> number + 1;
        var noArguments = () -> "foobar";
        var myContains = (a:String, needle:String) -> {
          if (a.indexOf(needle) == -1)
            return false;
          trace(a, needle);
          true;
        };
      }
    }
```

Arrow functions are very similar to normal local functions, with a couple of differences:

01. The expression after the arrow is implicitly treated as the return value of
    the function. For simple functions like `myConcat` above, this can be
    a convenient way to shorten the code. Normal `return` expressions
    can still be used, as shown in `myContains` above.
02. There is no way to declare the return type, although you can use a [type check](expression-type-check)
    to unify the function expression with the desired return type.
03. [Metadata](lf-metadata) cannot be applied to the arguments of an arrow function.


## 🐥 new
                                                                         **new**

The `new` keyword signals that a [class] or an [abstract] is being instantiated.
It is followed by the [type path] of the type which is to be instantiated.
It may also list explicit [type parameters] enclosed in `<>` and separated by
comma `,`. After an opening parenthesis `(` follow the constructor arguments,
again separated by comma `,`, with a closing parenthesis `)` at the end.

[code asset](assets/New.hx)

```haxe
    class Main<T> {
      static public function main() {
        new Main<Int>(12, "foo");
      }

      function new(t:T, s:String) {}
    }
```

Within the `main` method we instantiate an instance of `Main` itself, with an
explicit type parameter `Int` and the arguments `12` and `"foo"`. As we can see,
the syntax is very similar to the [function call syntax] and it is common to
speak of **constructor call**.

## 🐥 for
                                                                         **for**

Haxe does not support traditional for-loops known from C. Its `for` keyword
expects an opening parenthesis `(`, then a variable identifier followed by the keyword `in` and an arbitrary expression used as iterating collection. After
the closing parenthesis `)` follows an arbitrary loop body expression.

    for (v in e1) e2;

The typer ensures that the type of `e1` can be iterated over, which is typically
the case if it has an  [`iterator`] method returning an `Iterator<T>`, or
if it is an `Iterator<T>` itself.

Variable `v` is then available within loop body `e2` and holds the value of
the individual elements of collection `e1`.

```haxe
    var list = ["apple", "pear", "banana"];
    for (v in list) {
      trace(v);
    }
    // apple
    // pear
    // banana
```

**Range iteration**

Haxe has a special range operator to iterate over intervals. It is a binary
operator taking two `Int` operands: `min...max` returns an [IntIterator]
instance that iterates from `min` (inclusive) to `max` (exclusive). Note
that `max` may not be smaller than `min`.

    for (i in 0...10) trace(i); // 0 to 9

The type of a `for` expression is always `Void`, meaning it has no value and
cannot be used as right-side expression. However, we'll later introduce
[array comprehension], which lets you construct arrays using `for` expressions.

The control flow of loops can be affected by [`break`] and [`continue`] expressions.

```haxe
    for (i in 0...10) {
      if (i == 2) continue; // skip 2
      if (i == 5) break; // stop at 5
      trace(i);
    }
    // 0
    // 1
    // 3
    // 4
```

**Key-value iteration** Since Haxe 4.0.0

In Haxe 4 it is possible to iterate over collections of key-value pairs.
The syntax is the same as regular `for` loops, but the single variable
identifier is replaced with the key variable identifier, followed by `=>`,
followed by the value variable identifier:

    for (k => v in e1) e2;

Type safety is ensured for key-value iteration as well. The typer checks
that `e1` either has a `keyValueIterator` method returning returning a
`KeyValueIterator<K, V>`, or if it is a `KeyValueIterator<K, V>` itself.
Here `K` and `V` refer to the type of the keys and the values, respectively.

```haxe
    var map = [1 => 101, 2 => 102, 3 => 103];
    for (key => value in map) {
      trace(key, value);
    }
    // 1, 101
    // 2, 102
    // 3, 103
```


* Haxe [iterators] documentation, Haxe [Data Structures] documentation.
* Cookbook: [Haxe iterators examples](http://code.haxe.org/tag/iterator.html)
* [Haxe data structures examples](http://code.haxe.org/tag/data-structures.html)

## 🐥 while
                                                                       **while**
## 🐥 do-while
                                                                    **do-while**
## 🐥 if
                                                                          **if**
## 🐥 switch
                                                                      **switch**

A basic switch expression starts with the `switch` keyword and the switch
subject expression, as well as the case expressions between curly braces `{}`.
Case expressions either start with the `case` keyword and are followed by
a pattern expression, or consist of the `default` keyword. In both cases
a colon `:` and an optional case body expression follows:

```haxe
    switch subject {
      case pattern1: case-body-expression-1;
      case pattern2: case-body-expression-2;
      default: default-expression;
    }
```

Case body expressions never "fall through", so the [`break`] keyword is
not supported in Haxe.

Switch expressions can be used as value; in that case the types of all
case body expressions and the default expression must [unify].

Each case (including the default one) is also a variable scope, which affects
[variable shadowing].

```haxe
    switch (0) {
      case 0:
        var a = "foo";
      case _:
        // This would cause a compilation error, since `a` from the previous
        // case is not accessible in this case:
        // trace(a);
    }
```

* Further details on syntax of pattern expressions are detailed in [Pattern Matching].
* Snippets and tutorials about [pattern matching](http://code.haxe.org/tag/pattern-matching.html) in the Haxe Code Cookbook.

## 🐥 throw
                                                                       **throw**

Haxe allows throwing any kind of value using its `throw` syntax:

    throw expr

A value which is thrown like this can be caught by [try/catch] blocks.
If no such block catches it, the behavior is target-dependent.

Since Haxe 4.1.0

It's highly recommended to not throw arbitrary values and instead throw
instances of `haxe.Exception`.

In fact, if `value` is not an instance of `haxe.Exception`, then `throw value`
is compiled as `throw haxe.Exception.thrown(value)`, which wraps `value` into
an instance of `haxe.Exception`.

However native target exceptions are thrown as-is. For example an instance of
`cs.system.Exception` or `php.Exception` won't get automatically wrapped upon
throwing.

## 🐥 try/catch
                                                                   **try/catch**

Haxe allows catching values using its `try/catch` syntax:

```haxe
    try try-expr
    catch (varName1:Type1) catch-expr-1
    catch (varName2:Type2) catch-expr-2
```

If during runtime the evaluation of `try-expression` causes a [`throw`],
it can be caught by any subsequent `catch` block. These blocks consist of

* a variable name which holds the thrown value,
* an explicit type annotation which determines which types of values to catch, and
* the expression to execute in that case.

Haxe allows throwing and catching any kind of value, it is not limited to types
inheriting from a specific exception or error class. However since Haxe 4.1.0
it's highly recommended to throw and catch only instances of `haxe.Exception`
and its descendants.

Catch blocks are checked from top to bottom with the first one whose type is
compatible with the thrown value being picked.

This process has many similarities to the compile-time [unification] behavior.
However, since the check has to be done at runtime there are several restrictions:

* The type must exist at runtime: [Class instances], [enum instances],
  [abstract core types] and [Dynamic].
* Type parameters can only be [Dynamic].


**Wildcard catch** since Haxe 4.1

Instead of `Dynamic` and `Any` it's possible (and recommended) to omit the
type hint for wildcard catches:

```haxe
    try {
      doSomething();
    } catch(e) { // All exceptions will be caught here
      trace(e.message);
    }
```

This is equivalent to `catch(e:haxe.Exception)`.


Prior to Haxe 4.1.0 the only way to catch all exceptions is by using `Dynamic`
or `Any` as the catch type.

To get a string representation of the exception `Std.string(e)` could be used.

```haxe
    try {
      doSomething();
    } catch(e:Any) { // All exceptions will be caught here
      trace(Std.string(e));
    }
```

**Exception stack** since Haxe 4.1

If the catch type is `haxe.Exception` or one of its descendants, then the
exception stack is available in the `stack` property of the exception instance.

```haxe
    try {
      doSomething();
    } catch(e:haxe.Exception) {
      trace(e.stack);
    }
```

Haxe 3.* and Haxe 4.0

The exception call stack is available via `haxe.CallStack.exceptionStack()`
inside of a `catch` block:

```haxe
    try {
      doSomething();
    } catch(e:Dynamic) {
      var stack = haxe.CallStack.exceptionStack();
      trace(haxe.CallStack.toString(stack));
    }
```


**Rethrowing exceptions** since Haxe 4.1

Even if an instance of `haxe.Exception` is thrown again, it still preserves
all the original information, including the stack.

```haxe
    import haxe.Exception;

    class Main {
      static function main() {
        try {
          try {
            doSomething();
          } catch(e:Exception) {
            trace(e.stack);
            throw e; //rethrow
          }
        } catch(e:Exception) {
          trace(e.stack);
        }
      }

      static function doSomething() {
        throw new Exception('Terrible error');
      }
    }
```

This example being executed with `haxe --main Main --interp` would print
something like this:

```sh
Main.hx:13:
Called from Main.doSomething (Main.hx line 11 column 15)
Called from Main.main (Main.hx line 5 column 5)
Main.hx:17:
Called from Main.doSomething (Main.hx line 11 column 15)
Called from Main.main (Main.hx line 5 column 5)
```

The compiler may avoid unnecessary wrapping when throwing native exceptions
and handle this at the catch-site instead. This ensures that any exception
(native or otherwise) can be caught with `catch (e:haxe.Exception)`. This also
applies for rethrowing exceptions.

For example here's a Haxe code, which being compiled to PHP target catches
and rethrows all exceptions in the inner `try/catch`. And rethrown exceptions
are still catchable using their target native types:

```haxe
    try {
      try {
        (null:Dynamic).callNonExistentMethod();
      } catch(e:Exception) {
        trace('Haxe exception: ' + e.message);
        throw e; // rethrow
      }
    } catch (e:php.ErrorException) {
      trace ('Rethrown native exception: ' + e.getMessage());
    }
```

This sample being compiled to PHP target would print:

```sh
Main.hx:9: Haxe exception: Trying to get property 'callNonExistentMethod' of non-object
Main.hx:13: Rethrown native exception: Trying to get property 'callNonExistentMethod' of non-object
```

**Chaining exceptions** Since Haxe 4.1

Sometimes it's convenient to chain exceptions instead of throwing the same
exception instance again.

To do so just pass an exception to a new exception instance:

```haxe
    try {
      doSomething();
    } catch(e:haxe.Exception) {
      cleanup();
      throw new haxe.Exception('Failed to do something', e);
    }
```

Being executed with `--interp` this sample would print a message like this:

```sh
Main.hx:12: characters 7-12 : Uncaught exception Exception: Terrible error
Called from Main.doSomething (Main.hx line 10 column 13)

Next Exception: Failed to do something
Called from Main.doSomething (Main.hx line 12 column 13)
Called from Main.main (Main.hx line 5 column 5)
Main.hx:5: characters 5-18 : Called from here
```

One use-case is to make error logs more readable.

Chained exceptions are available through `previous` property of
`haxe.Exception` instances:

```haxe
    try {
      try {
        doSomething();
      } catch(e:haxe.Exception) {
        cleanup();
        throw new haxe.Exception('Failed to do something', e);
      }
    } catch(e:haxe.Exception) {
      trace(e.message); // "Failed to do something"
      trace(e.previous.message); // "Terrible error"
    }
```

Another use-case is creating a library, which does not expose internal exceptions
as public API, but still provides information about exceptions reasons:

```haxe
    import haxe.Exception;

    class MyLibException extends Exception {}

    class MyLib {
      static public function calculateSomething() {
        try {
          heavyCalculation();
        } catch(e:Exception) {
          throw new MyLibException(e.message, e);
        }
      }

      static function heavyCalculation() {}
    }
```

Now library users don't have to worry about specific arithmetic exceptions.
All they need to do is handle `MyLibException`.

## 🐥 return
                                                                      **return**

A `return` expression can come with or without a value expression:

    return;
    return expression;

It leaves the control-flow of the innermost function it is declared in, which
has to be distinguished when [local functions] are involved:

```haxe
    function f1() {
      function f2() {
        return;
      }
      f2();
      expression;
    }
```

The `return` leaves local function `f2`, but not `f1`, meaning `expression`
is still evaluated.

If `return` is used without a value expression, the typer ensures that the
return type of the function it returns from is of `Void`. If it has a value
expression, the typer [unifies] its type with the return type (explicitly given
or inferred by previous `return` expressions) of the function it returns from.

## 🐥 break
                                                                       **break**

The `break` keyword leaves the control flow of the innermost loop
(`for` or `while`) it is declared in, stopping further iterations:

```haxe
    while (true) {
      expression1;
      if (condition) break;
      expression2;
    }
```

Here, `expression1` is evaluated for each iteration, but as soon as `condition`
holds, the current iteration is terminated without evaluating `expression2`,
and no more iteration is done.

The typer ensures that it appears only within a loop. The `break` keyword in
[`switch`] cases is not supported in Haxe.

## 🐥 continue
                                                                    **continue**

The `continue` keyword ends the current iteration of the innermost loop
(`for` or `while`) it is declared in, causing the loop condition to be
checked for the next iteration:

```haxe
    while (true) {
      expression1;
      if (condition) continue;
      expression2;
    }
```

Here, `expression1` is evaluated for each iteration, but if `condition` holds,
`expression2` is not evaluated for the current iteration. Unlike `break`,
iterations continue.

The typer ensures that it appears only within a loop.

## 🐥 cast
                                                                        **cast**

Haxe allows two kinds of casts:

```haxe
    cast expr;         // 1. unsafe cast
    cast (expr, Type); // 2. safe cast
```

Unsafe casts are useful to subvert the type system. The compiler types `expr`
as usual and then wraps it in a [monomorph]. This allows the expression to be
assigned to anything.

Unsafe casts do not introduce any [dynamic] types, as the following example:

[code asset](assets/UnsafeCast.hx)

```haxe
    class Main {
      public static function main() {
        var i = 1;
        $type(i); // Int
        var s = cast i;
        $type(s); // Unknown<0>
        Std.parseInt(s);
        $type(s); // String
      }
    }
```

Variable `i` is typed as `Int` and then assigned to variable `s` using the
unsafe cast `cast i`. This causes `s` to be of an unknown type, a monomorph.
Following the usual rules of [unification], it can then be bound to any type,
such as `String` in this example.

These casts are called "unsafe" because the runtime behavior for invalid casts
is not defined. While most [dynamic targets] are likely to work, it might lead
to undefined errors on [static targets].

Unsafe casts have little to no runtime overhead.


Unlike [unsafe casts], the runtime behavior in case of a failing cast is defined
for safe casts:

[code asset](assets/SafeCast.hx)

```haxe
    class Base {
      public function new() {}
    }

    class Child1 extends Base {}
    class Child2 extends Base {}

    class Main {
      public static function main() {
        var child1:Base = new Child1();
        var child2:Base = new Child2();
        cast(child1, Base);   // Ok
        cast(child1, Child2); // Exception: Class cast error
      }
    }
```

In this example we first cast a class instance of type `Child1` to `Base`, which
succeeds because `Child1` is a [child class] of `Base`. We then try to cast the
same class instance to `Child2`, which is not allowed because instances of
`Child2` are not instances of `Child1`.

The Haxe compiler guarantees that an exception of type `String` is [thrown] in
this case. This exception can be caught using a [try/catch] block.

Safe casts have a runtime overhead. It is important to understand that the
compiler already generates type checks, so it is redundant to add manual checks,
e.g. using `Std.isOfType` or the `is` keyword. The intended usage is to try
the safe cast and catch the `String` exception.

## 🐥 type check
                                                                  **type check**

Since Haxe 3.1.0

It is possible to employ compile-time type checks using the following syntax:

    (expr : type)

The parentheses are mandatory. Unlike [safe casts] this construct has no
run-time impact. It has two compile-time implications:

1. [Top-down inference] is used to type `expr` with type `type`.
2. The resulting typed expression is [unified] with type `type`.

This has the usual effect of both operations such as the given type being used
as expected type when performing [unqualified identifier resolution] and the
unification checking for [abstract casts].

## 🐥 inline
                                                                      **inline**

Since Haxe 4.0.0

The `inline` keyword can be used before a [function call] or a [constructor call].
This allows a finer-grained control of inlining, unlike the [inline access modifier].

[code asset](assets/InlineCallsite.hx)

```haxe
    class Main {
      static function mid(s1:Int, s2:Int) {
        return (s1 + s2) / 2;
      }

      static public function main() {
        var a = 1;
        var b = 2;
        var c = mid(a, b);
        var d = inline mid(a, b);
      }
    }
```

The generated JavaScript output is:

```js,ignore
    (function ($global) { "use strict";
    var Test = function() { };
    Test.mid = function(s1,s2) {
        return (s1 + s2) / 2;
    };
    Test.main = function() {
        var a = 1;
        var b = 2;
        var c = Test.mid(a,b);
        var d = (a + b) / 2;
    };
    Test.main();
    })({});
```

Note that `c` produces a call to the function, whereas `d` does not. The usual
warnings about what makes a good candidate for inlining still hold (see [Inline]).

An `inline new` call can be used to avoid creating a local class instance.
See [Inline Constructors] for more details.


# 🥚 Language Features
                                                           **Language Features**
https://haxe.org/manual/lf.html
manual\content\06-lf.md

06. ✨ [Language Features](https://haxe.org/manual/lf.html)
     - [Conditional Compilation]
     - - - [Target defines]
     - - [Target-Specific Files]
     - [Externs]
     - - - [Native Metadata]
     - - [Implementing Dynamic]
     - [Static Extension]
     - - - [In the Haxe Standard Library]
     - - [Static Extension Metadata]
     - [Pattern Matching]
     - - - [Introduction]
     - - - [Enum matching]
     - - - [Variable capture]
     - - - [Structure matching]
     - - - [Array matching]
     - - - [Or patterns]
     - - - [Guards]
     - - - [Match on multiple values]
     - - - [Extractors]
     - - - [Exhaustiveness checks]
     - - - [Useless pattern checks]
     - - [Single pattern check]
     - [String Interpolation]
     - [Array Comprehension]
     - [Map Comprehension]
     - [Iterators]
     - [Function Bindings]
     - [Metadata]
     - [Access Control]
     - [Inline Constructors]

**Abstract types**

An abstract type is a compile-time construct which is represented in a different
way at runtime. This allows giving a whole new meaning to existing types.

**Extern classes**

Externs can be used to describe target-specific interaction in a type-safe manner.

**Anonymous structures**

Data can easily be grouped in anonymous structures, minimizing the necessity of
small data classes.

    var point = {x: 0, y: 10};
    point.x += 10;

**Array Comprehension**

Create and populate arrays quickly using for loops and logic.

    var evenNumbers = [for (i in 0...100) if (i & 1 == 0) i];

**Map Comprehension**

Create and populate maps quickly using for loops and logic.

    var primality = [for (i in 0...100) i => isPrime(i)];

**Classes, interfaces and inheritance**

Haxe allows structuring code in classes, making it an object-oriented language.
Common related features known from languages such as Java are supported,
including inheritance and interfaces.

**Conditional compilation**

Conditional Compilation allows compiling specific code depending on compilation
parameters. This is instrumental for abstracting target-specific differences,
but can also be used for other purposes, such as more detailed debugging.

```java
    #if js
      js.Browser.alert("Hello");
    #elseif sys
      Sys.println("Hello");
      trace(Sys.getEnv("USERPROFILE"));
    #end
```

**(Generalized) Algebraic Data Types**

Structure can be expressed through algebraic data types (ADT), which are known
as enums in the Haxe Language. Furthermore, Haxe supports their generalized
variant known as **GADT**.

```haxe
    enum Result {
      Success(data:Array<Int>);
      UserError(msg:String);
      SystemError(msg:String, position:PosInfos);
    }
```

**Inlined calls**

Functions can be designated as being inline, allowing their code to be inserted
at call-site. This can yield significant performance benefits without resorting
to code duplication via manual inlining.

**Iterators**

Iterating over a set of values, e.g. the elements of an array, is very easy in
Haxe courtesy of iterators. Custom classes can quickly implement iterator
functionality to allow iteration.

    for (i in [1, 2, 3]) {
      trace(i);
    }

**Local functions and closures**

Functions in Haxe are not limited to class fields and can be declared in
expressions as well, allowing powerful closures.

```haxe
    var buffer = "";
    function append(s:String) {
      buffer += s;
    }
    append("foo");
    append("bar");
    trace(buffer); // foobar
```

**Metadata**

Add metadata to fields, classes or expressions. This can communicate information
to the compiler, macros, or runtime classes.

```haxe
    class MyClass {
      @range(1, 8) var value:Int;
    }
    trace(haxe.rtti.Meta.getFields(MyClass).value.range); // [1,8]
```

**Static Extensions**

Existing classes and other types can be augmented with additional functionality
through using static extensions.

```haxe
    using StringTools;
    "  Me & You    ".trim().htmlEscape();
```

**String Interpolation**

Strings declared with a single quotes are able to access variables in the
current context.

    trace('My name is $name and I work in ${job.industry}');

**Partial function application**

Any function can be applied partially, providing the values of some arguments
and leaving the rest to be filled in later.

```haxe
    var map = new haxe.ds.IntMap();
    var setToTwelve = map.set.bind(_, 12);
    setToTwelve(1);
    setToTwelve(2);
```

**Pattern Matching**

Complex structures can be matched against patterns, extracting information
from an enum or a structure and defining specific operations for specific
value combination.

```haxe
    var a = {foo: 12};
    switch a {
      case {foo: i}: trace(i);
      default:
    }
```

**Properties**

Variable class fields can be designed as properties with custom read and write
access, allowing fine grained access control.

```haxe
    public var color(get,set);
    function get_color() {
      return element.style.backgroundColor;
    }
    function set_color(c:String) {
      trace('Setting background of element to $c');
      return element.style.backgroundColor = c;
    }
```

**Access control**

The access control language feature uses the Haxe metadata syntax to force
or allow access classes or fields.

**Type Parameters, Constraints and Variance**

Types can be parametrized with type parameters, allowing typed containers and
other complex data structures. Type parameters can also be constrained to
certain types and respect variance rules.

```haxe
    class Main<A> {
      static function main() {
        new Main<String>("foo");
        new Main(12); // use type inference
      }

      function new(a:A) {}
    }
```

## 🐥 Conditional Compilation
                                                     **Conditional Compilation**

Haxe allows conditional compilation by using `#if`, `#elseif` and `#else` and
checking for **compiler flags**.

> ##### Define: Compiler Flag
>
> A compiler flag is a configurable value which may influence the compilation
> process. Such a flag can be set by invoking the command line with
> `-D key=value` or just `-D key`, in which case the value defaults to `"1"`.
> The compiler also sets several flags internally to pass information between
> different compilation steps.

This example demonstrates usage of conditional compilation:

[code asset](assets/ConditionalCompilation.hx)

```haxe
    class Main {
      public static function main() {
        #if !debug
        trace("ok");
        #elseif (debug_level > 3)
        trace(3);
        #else
        trace("debug level too low");
        #end
      }
    }
```

Compiling this without any flags will leave only the `trace("ok");` line in
the body of the `main` method. The other branches are discarded while parsing
the file. These other branches must still contain valid Haxe syntax, but the
code is not type-checked.

The conditions after `#if` and `#elseif` allow the following expressions:

1. * Any identifier is replaced by the value of the compiler flag by the
    same name. Note that `-D some-flag` from command line leads to the flags
    `some-flag` and `some_flag` to be defined.
2. * The values of `String`, `Int` and `Float` constants are used directly.
3. * The boolean operators `&&` (and), `||` (or) and `!` (not) work as expected,
    however the full expression must be completely contained by parentheses.
4. * The operators `==`, `!=`, `>`, `>=`, `<`, `<=` can be used to compare values.
5. * Parentheses `()` can be used to group expressions as usual.

The Haxe parser does not parse `some-flag` as a single token and instead reads
it as a subtraction binary operator `some - flag`. In cases like this the
underscore version `some_flag` has to be used.

**Working with compiler flags**
Compiler flags are available at compile time, the following methods only work
in macro context `haxe.macro.Context`:

* To see if a compiler flag is set, use `Context.defined("any_flag")`.
* To get the value of a compiler flag, use `Context.definedValue("any_flag")`.
* To get a map of all compiler flags with its value, use `Context.getDefines()`.

**Haxelibs**
By default, each used haxelib version is automatically added as flag, e.g.
when you add `-L actuate`, the compiler adds `-D actuate=1.8.7`. To test if
a library exists in current context, use `#if actuate`. To check a specific
haxelib version, use the operators, for example `#if (actuate <= "1.8.7")`.

**Built-in Compiler Flags**
An exhaustive list of all built-in defines can be obtained by invoking the
Haxe Compiler with the `--help-defines` argument. The Haxe Compiler allows
multiple `-D` flags per compilation.


* See also the [Compiler Flags list].


### Target defines

Depending on the current target, at least one of the following flags will be
defined. Note that they are the same as the argument provided to the compiler
to specify the output. See also [compiler usage].

* `cpp` Defined when generating C++ code or a cppia script.
* `cppia` Defined when generating a cppia script.
* `cs` Defined when generating C# code.
* `eval` Defined when running with `--interp`, or when running in a macro context.
* `hl` Defined when generating HashLink code.
* `java` Defined when generating Java or JVM code.
* `js` Defined when generating JavaScript code.
* `lua` Defined when generating Lua code.
* `neko` Defined when generating a Neko binary.
* `php` Defined when generating PHP code.
* `python` Defined when generating Python code.
* `swf` Defined when generating a SWF file.

Additionally, parts of code may be used in a macro context or during display
completion. These flags can be used to check if this is the case:

* `display` Defined when providing code completion.
* `macro` Defined in a macro context.


Supported features

* `sys` Defined if the target supports the [sys] API.

Since Haxe 4.0.0

To provide more fine-grained knowledge about the features supported on the
current target without having to manually check which target supports what,
Haxe 4 provides the `target.*` defines:

* `target.static` (or `static`) Defined if the target is [static].
* `target.sys` or `sys` Defined if the target supports the [sys API].
* `target.utf16` (or `utf16`) Defined if the target uses UTF-16 for its
  internal [string] representation.
* `target.threaded` Defined if the target supports the unified [threading] API.
* `target.name` Defined to be the name of the target, e.g. `js`.


### Target-Specific Files

Since Haxe 4.0.0

In addition to surrounding individual pieces of code with compile-time checks,
it is possible to provide completely separate target-specific module alternatives
to the compiler. This feature works as follows:

1. * When the compiler finds the file `<Module>.hx`, it then checks the
    containing directory for a file called `<Module>.<target>.hx`, where
    `<target>` is the name of the current [target defines].
2. * The main file for the module (without a target-specific extension) must exist.
3. * If a target-specific file is found for the module, the main file is not loaded
    at all. Keep in mind that this means errors are not checked in the main file.

As an example, we can have the following directory structure:

```haxe
/somepackage/Example.hx
/somepackage/Example.js.hx
/Main.hx
```

In `Main.hx` we can use `somepackage.Example` module. This module is defined
in the file `somepackage/Example.hx`. However, if we compile for JavaScript,
the module is instead defined in the file `somepackage/Example.js.hx`.



## 🐥 Externs
                                                                     **Externs**
## 🐥 Static Extension
                                                            **Static Extension**
## 🐥 Pattern Matching
                                                            **Pattern Matching**
## 🐥 String Interpolation
                                                        **String Interpolation**

注意字符串插值使用单引号，和 PowerShell 使用双引号不同。

With Haxe 3 it is no longer necessary to manually concatenate parts of a string
due to the introduction of **String Interpolation**. Special identifiers,
denoted by the dollar sign `$` within a String enclosed by single-quote `'`
characters, are evaluated as if they were concatenated identifiers:

```haxe
    var x = 12;
    // The value of x is 12
    trace('The value of x is $x');
```

Furthermore, it is possible to include whole expressions in the string
by using `${expr}`, with `expr` being any valid Haxe expression:

```haxe
    var x = 12;
    // The sum of 12 and 3 is 15
    trace('The sum of $x and 3 is ${x + 3}');
```

String interpolation is a compile-time feature and has no impact on the runtime.
The above example is equivalent to manual concatenation, which is exactly what
the compiler generates:

```haxe
    trace("The sum of " + x + " and 3 is " + (x + 3));
```

Of course the use of single-quote enclosed strings without any interpolation
remains valid, but care has to be taken regarding the $ character as it
triggers interpolation. If an actual dollar-sign should be used in the string,
`$$` can be used.

> ##### Trivia: String Interpolation before Haxe 3
>
> String Interpolation has been a Haxe feature since version 2.09. Back then,
> the macro `Std.format` had to be used, being both slower and less comfortable
> than the new string interpolation syntax.


## 🐥 Array Comprehension
                                                         **Array Comprehension**

Array comprehension in Haxe combines [array declaration] and loops to allow
concise initialization of arrays. It is identified by [`for`] or [`while`]
constructs:

[code asset](assets/ArrayComprehension.hx)

```hx
    class Main {
      static public function main() {
        var a = [for (i in 0...10) i];
        trace(a); // [0,1,2,3,4,5,6,7,8,9]

        var i = 0;
        var b = [while (i < 10) i++];
        trace(b); // [0,1,2,3,4,5,6,7,8,9]
      }
    }
```

Variable `a` is initialized to an array holding the numbers 0 to 9.
The compiler generates code which adds the value of each loop iteration
to the array, so the following code would be equivalent:

```haxe
    var a = [];
    for (i in 0...10) a.push(i);
```

Variable `b` is initialized to an array with the same values, but through a
different comprehension style using `while` instead of `for`. Again,
the following code would be equivalent:

```haxe
    var i = 0;
    var b = [];
    while(i < 10) b.push(i++);
```

The loop expression can be anything, including conditions and nested loops,
so the following works as expected:

[code asset](assets/AdvArrayComprehension.hx)

```haxe
    class Main {
      static public function main() {
        var a = [
          for (a in 1...11)
            for (b in 2...4)
              if (a % b == 0)
                a + "/" + b
        ];
        // [2/2,3/3,4/2,6/2,6/3,8/2,9/3,10/2]
        trace(a);
      }
    }
```

## 🐥 Map Comprehension

Map comprehension in Haxe is similar to array comprehension, but just like
[map declaration], it additionally uses the `=>` operator:

[code asset](assets/MapComprehension.hx)

```haxe
    class Main {
      static public function main() {
        var a = [for (i in 0...5) i => 'number ${i}'];
        trace(a); // {0 => number 0, 1 => number 1, 2 => number 2, ... }

        var i = 0;
        var b = [while (i < 5) i => 'number ${i++}'];
        trace(b); // {0 => number 0, 1 => number 1, 2 => number 2, ... }
      }
    }
```

Variable `a` is initialized to an `Map` holding keys from 0 to 4 and
string values. The compiler generates code which adds the value of
each loop iteration to the map, so the following code would be equivalent:

```haxe
    var a = new Map();
    for (i in 0...5) a.set(i, 'number ${i}');
```

Variable `b` is initialized to an `Map` with the same keys and values,
but through a different comprehension style using `while` instead of `for`.
Again, the following code would be equivalent:

```haxe
    var i = 0;
    var b = new Map();
    while(i < 5) b.set(i, 'number ${i++}');
```

The loop expression can be anything, including conditions and nested loops,
so the following works as expected:

[code asset](assets/AdvMapComprehension.hx)

```haxe
    class Main {
      static public function main() {
        var a = [
          for (x in 0...5)
            for (y in 0...5)
              if (x != y)
                x => y
        ];
        // {0 => 4, 1 => 4, 2 => 4, 3 => 4, 4 => 3}
        trace(a);
      }
    }
```
                                                           **Map Comprehension**
## 🐥 Iterators
                                                                   **Iterators**
## 🐥 Function Bindings
                                                           **Function Bindings**

Haxe 3 allows binding functions with partially applied arguments. Each function
type can be considered to have a `bind` field, which can be called with the desired
number of arguments in order to create a new function. This is demonstrated here:

[code asset](assets/Bind.hx)

```haxe
    class Main {
      static public function main() {
        var map = new haxe.ds.IntMap<String>();
        var f = map.set.bind(_, "12");
        $type(map.set); // (key : Int, value : String) -> Void
        $type(f);       // Int -> Void
        f(1);
        f(2);
        f(3);
        trace(map); // {1 => 12, 2 => 12, 3 => 12}
      }
    }
```

Line 4 binds the function `map.set` to a variable named `f`, and applies `12`
as second argument. The underscore `_` is used to denote that this argument
is not bound, which is shown by comparing the types of `map.set` and `f`:
The bound `String` argument is effectively cut from the type, turning a
`Int->String->Void` type into `Int->Void`.

A call to `f(1)` then actually invokes `map.set(1, "12")`, the calls to `f(2)`
and `f(3)` are analogous. The last line proves that all three indices indeed
are mapped to the value `"12"`.

The underscore `_` can be skipped for trailing arguments, so the first argument
could be bound through `map.set.bind(1)`, yielding a `String->Void` function
that sets a new value for index `1` on invocation.

**Optional arguments**

By default, trailing optional arguments are bound to their default values and
do not become arguments of the result function. This can be changed by using
an explicit underscore `_` instead, in which case the optional argument of
the original function becomes a non-optional argument of the result function.

[code asset](assets/BindOptional.hx)

```haxe
    class Main {
      static function test(a:Int, ?b:String):Void {}

      static public function main() {
        var fn = test.bind(1);
        $type(fn); // Void->Void
        fn('foo'); // Compiler error: Too many arguments

        var fn = test.bind(1, _);
        $type(fn); // ?String->Void
        fn('foo'); // works
      }
    }
```

> ##### Trivia: Callback
>
> Prior to Haxe 3, Haxe used to know a `callback`-keyword which could be called
> with a function argument followed by any number of binding arguments. The name
> originated from a common usage were a callback-function is created with the
> this-object being bound.
>
> Callback would allow binding of arguments only from left to right as there was
> no support for the underscore `_`. The choice to use an underscore was controversial
> and several other suggestions were made, none of which were considered superior.
> After all, the underscore `_` at least looks like it's saying "fill value in here",
> which nicely describes its semantics.


## 🐥 Metadata
                                                                    **Metadata**

Several constructs can be attributed with custom metadata:

* `class` and `enum` declarations
* Class fields
* Enum constructors
* Expressions

These metadata information can be obtained at runtime through the
`haxe.rtti.Meta` API:

[code asset](assets/Meta.hx)

```haxe
    import haxe.rtti.Meta;

    @author("Nicolas")
    @:keep
    class MyClass {
      @range(1, 8)
      var value:Int;

      @broken
      static function method() {}
    }

    class Main {
      static public function main() {
        trace(Meta.getType(MyClass));               // { author : ["Nicolas"] }
        trace(Meta.getFields(MyClass).value.range); // [1,8]
        trace(Meta.getStatics(MyClass).method);     // { broken: null }
      }
    }
```

We can easily identify metadata by the leading `@` character, followed by
the metadata name and, optionally, by a number of comma-separated constant
arguments enclosed in parentheses.

1. * Class `MyClass` has an `author` metadata with a single String argument
    `"Nicolas"`, as well as a `:keep` metadata without arguments.
2. * The member variable `value` has a `range` metadata with two Int
    arguments `1` and `8`.
3. * The static method `method` has a `broken` metadata without arguments.

The `main` method accesses these metadata values using their API. The output
reveals the structure of the obtained data:

1. * There is a field for each metadata, with the field name being the metadata name.
2. * The field values correspond to the metadata arguments. If there are no arguments,
    the field value is `null`.
    Otherwise the field value is an array with one element per argument.

Allowed values for metadata arguments are:

* [Constants](expression-constants)
* [Arrays declarations](expression-array-declaration) (if all their elements qualify)
* [Object declarations](expression-object-declaration) (if all their field values qualify)


**Compile-time Metadata**

Metadata starting with `:`, such as `@:keep`, is available at compile time only;
it is omitted at runtime. It may be used by macros or by the Haxe compiler itself.
Unlike runtime metadata, arguments to compile-time metadata can be any valid expression.

**Built-in Compiler Metadata**
An exhaustive list of all defined metadata can be obtained by running command line:

    haxe --help-metas

Prior to Haxe 4, metadata names had to be valid identifiers. Starting in Haxe 4,
metadata names can consist of multiple identifiers separated by `.` symbols.
This change was primarily intended to make it easier to organize compile-time
metadata. Runtime metadata with such a name can only be accessed via [dynamic access].

* See also the [Compiler Metadata list](cr-metadata).


## 🐥 Access Control
                                                              **Access Control**

Access control can be used if the basic [visibility] options are not sufficient.
It is applicable at **class-level** and at **field-level** and knows two directions:

1. * Allowing access: The target is granted access to the given class
    or field by using the `:allow(target)` [metadata].
2. * Forcing access: A target is forced to allow access to the given class
    or field by using the `:access(target)` [metadata].

In this context, a **target** can be the [dot-path] to

* a **class field**,
* a **class** or **abstract** type, or
* a **package**.

Target does **not** respect imports, so the fully qualified path has to be used.

If it is a class or abstract type, access modification extends to all fields of
that type. Likewise, if it is a package, access modification extends to
all types of that package and recursively to all fields of these types.

[code asset](assets/ACL.hx)

Here, `MyClass.foo` can be accessed from the `main`-method because `MyClass` is
annotated with `@:allow(Main)`. This would also work with `@:allow(Main.main)`
and both versions could alternatively be annotated to the field `foo` instead of
the class `MyClass`:

[code asset](assets/ACL2.hx)

```haxe
    class MyClass {
      @:allow(Main.main)
      static private var foo:Int;
    }

    class Main {
      static public function main() {
        MyClass.foo;
      }
    }
```

If a type cannot be modified to allow this kind of access, the accessing method
may force access:

[code asset](assets/ACL3.hx)

```haxe
    class MyClass {
      static private var foo:Int;
    }

    class Main {
      @:access(MyClass.foo)
      static public function main() {
        MyClass.foo;
      }
    }
```


The `@:access(MyClass.foo)` annotation effectively subverts the visibility of the `foo` field within the `main`-method.

> ##### Trivia: On the choice of metadata
>
> The access control language feature uses the Haxe metadata syntax instead of
> additional language-specific syntax. There are several reasons for that:
>
>
> * Additional syntax often adds complexity to the language parsing, and also
>   adds (too) many keywords.
> * Additional syntax requires additional learning by the language user,
>   whereas metadata syntax is something that is already known.
> * The metadata syntax is flexible enough to allow extension of this feature.
> * The metadata can be accessed/generated/modified by Haxe macros.
>
> Of course, the main drawback of using metadata syntax is that you get
> no error report in case you misspell either the metadata key
> (@:access for instance) or the class/package name. However, with this feature
> you will get an error when you try to access a private field that you are
> not allowed to, therefore there is no possibility for silent errors.


Since Haxe 3.1.0

If access is allowed to an [types interfaces], it extends to all classes
implementing that interface:

[code asset](assets/ACL4.hx)

```haxe
    interface I {}

    class MyClass {
      @:allow(I)
      static private var foo: Int;
    }

    class MainACL implements I {
      static public function main() {
        trace(MyClass.foo);
      }
    }
```


This is also true for access granted to parent classes, in which case it extends
to all child classes.

> ##### Trivia: Broken feature
>
> Access extension to child classes and implementing classes was supposed to
> work in Haxe 3.0 and even documented accordingly. While writing this manual
> it was found that this part of the access control implementation was simply missing.


## 🐥 Inline Constructors
                                                         **Inline Constructors**

Since Haxe 3.1.0

If a constructor is declared to be [inline], the compiler may try to optimize it
away in certain situations. For this to work, the compiler must be able to verify
that the object can be replaced by a set of local variables.

* The newly-constructed instance must only be accessible from the local function.
* All called instance functions must be inlined.
* All other references to the instance must only read or write its variables.

The following example demonstrates constructor inlining:

[code asset](assets/NewInline.hx)

```haxe
    class Point {
      public var x:Float;
      public var y:Float;

      public inline function new(x:Float, y:Float) {
        this.x = x;
        this.y = y;
      }
    }

    class Main {
      static public function main() {
        var pt = new Point(1.2, 9.3);
      }
    }
```

A look at the JavaScript output reveals the effect:

```js,ignore
Main.main = function() {
    var pt_x = 1.2;
    var pt_y = 9.3;
};
```


# 🥚 Compiler Usage
                                                              **Compiler Usage**
manual\content\07-compiler-usage.md

07. ✨ [Compiler Usage](https://haxe.org/manual/compiler-usage.html)
     - [HXML]
     - [Global Compiler Flags]

The Haxe Compiler is typically invoked from command line with several arguments
which have to answer two questions:

* What should be compiled?
* What should the output be?

To answer the first question, it is usually sufficient to provide a class path
via the `-p <path>` argument, along with the main class to be compiled via the
`-m <dot_path>` argument. The Haxe Compiler then resolves the main class file
and begins compilation.

The second question usually comes down to providing an argument specifying the
desired target. Each Haxe target has a dedicated command line switch, such as
`--js <file_name>` for JavaScript and `--php <directory>` for PHP. Depending on
the nature of the target, the argument value is either a directory path
(for `--php`, `--cpp`, `--cs`, and `--java`) or a file name.


**Input:**

1. * `-p <path>` (or `--class-path <path>`) Add a class path where `.hx`
    source files or packages (sub-directories) can be found.
2. * `-L <library_name>` (or `--library <library_name>`) Add a [Haxelib] library.
    By default the most recent version in the local Haxelib repository is used.
    To require a specific library version use `-L library_name:version`.
    To require a version from git use `-L library_name:git:https://github.com/user/project.git#commit`
    where the optional #commit can be a branch, tag or commit hash.
3. * `-m <dot_path>` (or `--main <dot_path>`) Set the main class.
4. * `-D <var[=value]>` (or `--define <var[=value]>`) Define a [conditional compilation] flag.

**Output:**

01. * `--js <file_name.js>` Generate [JavaScript] source code in specified file.
02. * `--swf <file_name.swf>` Generate the specified file as [Flash] `.swf`.
03. * `--neko <file_name.n>` Generate [Neko] binary as specified file.
04. * `--php <directory>` Generate [PHP] source code in specified directory.
    Use `-D php7` for PHP7 source code.
05. * `--cpp <directory>` Generate [C++] source code in specified directory
    and compiles it using native C++ compiler.
06. * `--cs <directory>` Generate [C#] source code in specified directory
    and compiles it using native C# compiler.
07. * `--java <directory>` Generate [Java] source code in specified directory
    and compiles it using the Java Compiler. Add `-D jvm` to generate
    JVM byte code directly bypassing Java compilation step.
08. * `--jvm <file_name.jar>` Generate [JVM bytecode] as a jar file.
09. * `--python <file_name.py>` Generate [Python] source code in the specified file.
10. * `--lua <file_name.lua>` Generate [Lua] source code in the specified file.
11. * `--hl <file_name.hl>` Generate [HashLink] byte code in specified file.
12. * `--cppia <file_name.cppia>` Generate the specified script as a [cppia] file.
13. * `-x <file>` Shortcut for compiling and executing a Neko file.
14. * `--no-output` Compile but do not generate any file.
15. * `--interp` Interpret the program using internal macro system.


**Other global arguments**

* `--run <module> [args...]` Compile and execute a Haxe module with CLI arguments.
* `--xml <file>` Generate XML types description. Useful for API documentation
    generation tools like [Dox](https://github.com/HaxeFoundation/dox).
* `-v` (or `--verbose`) Turn on verbose mode.
* `--dce <std|full|no>` Set the [Dead Code Elimination] mode (default `std`).
* `--debug` Add debug information to the compiled code.
* `-r <file>[@name]` (or `--resource <file>[@name]`) Add a named resource file.
* `--prompt` Prompt on error.
* `--cmd <command>` Run the specified shell command after a successful compilation.
* `--no-traces` Don't compile trace calls in the program.
* `--display` Display code tips to provide [Compiler Services] information,.
* `--times` Measure compilation times.
* `--no-inline` Disable [inlining].
* `--no-opt` Disable code optimizations.
* `--remap <package:target>` Remap a package to another one.
* `--macro` Call the given [initialization macro] before typing anything else.
* `--wait <host:port>` Wait on the given port for commands to run [Completion server].
* `--connect <host:port>` Connect to [Completion server] on the given port.
* `-C <dir>` (or `--cwd <dir>`) Set current working directory.

**Target specific arguments**

* `-D php-front=<filename>` Select the name for the php front file.
* `-D php-lib=<filename>` Select the name for the php lib folder.
* `-D php-prefix=<name>` Prefix all classes with given name.
* `--swf-version <version>` Change the SWF version.
* `--swf-header <header>` Define SWF header (width:height:fps:color).
* `--swf-lib <file>` Add the SWF library to the compiled SWF.
* `--swf-lib-extern <file>` Use the SWF library for type checking.
* `--flash-strict` More type strict flash API.
* `--java-lib <file>` Add an external JAR or class directory library.
* `--net-lib <file>[@std]` Add an external .NET DLL file.
* `--net-std <file>` Add a root std .NET DLL search path.
* `--c-arg <arg>` Pass option `arg` to the native Java/C# compiler.

> ##### Trivia: Run commands after compilation
>
> Use `--cmd` to run the specified command after a successful compilation. It can be used to run (testing) tools or to directly run the build, e.g. `--cmd java -jar bin/Main.jar` (for Java), `--cmd node main.js` (for Node.js) or `--cmd neko Main.n` (for Neko) etc.

**Global compiler configuration macros:**

In order to include single modules, their paths can be listed directly on
command line or in hxml: `haxe ... ModuleName pack.ModuleName`. For more
specific includes or excludes, use [initialization macro]:

1. * `--macro include(pack:String, recursive=true, ?ignore:Array<String>, ?classPaths:Array<String>, strict=false)`
    Includes all modules in package pack in the compilation. If `recursive`
    is true, the compiler recursively adds all sub-packages.
2. * `--macro exclude(pack:String, recursive=true`
    Exclude a specific class, enum, or all classes and enums in a package
    from being generated. Excluded types become `extern`. If `recursive` is true,
    the compiler recursively excludes all sub-packages.
3. * `--macro excludeFile(fileName:String)`
    Exclude classes and enums listed from given external file (one per line)
    from being generated.
4. * `--macro keep(?path:String, ?paths:Array<String>, recursive=true)`
    Marks a package, module or sub-type dot path to be kept by [DCE]. This also
    extends to the sub-types of resolved modules. If `recursive` is true,
    the compiler recursively keeps all sub-packages for package paths.
5. * `--macro includeFile(file:String, position)` Embed a JavaScript file at
    compile time. `position` can be either "top", "inline" or "closure".

The full documentation of these methods can be found in the
[`haxe.macro.Compiler`] API documentation.

**Help**

* `haxe --version` Print the current Haxe compiler version.
* `haxe --help` Display this list of options.
* `haxe --help-defines` Print help for all [compiler specific defines].
* `haxe --help-metas` Print help for all [compiler metadata].

Related content

* [Compilation tutorials](http://code.haxe.org/category/compilation/) in the Haxe Code Cookbook.


## 🐥 HXML
                                                                        **HXML**

[Compiler arguments] can be stored in a .hxml file and can be executed with
`haxe <file.hxml>`.In hxml it is possible to use newlines and comments which
makes it easier to maintain Haxe build configurations.It is possible to supply
more arguments after the hxml file, e.g. `haxe build.hxml --debug`.

**Example:**

This example has a configuration which compiles the class file `website.HomePage.hx`
to JavaScript into a file called `bin/homepage.js`, which is located in the `src`
class path. And uses full dead code elimination.

```hxml
    --class-path src
    --dce full
    --js bin/homepage.js
    --main website.HomePage
```

**Multiple build compilations**

Hxml configurations allow multiple compilation using these arguments:

* `--next` Separate several Haxe compilations.
* `--each` Append preceding parameters to all haxe compilations separated
  by `--next`. This reduces the repeating params.

**Example:**

This example has a configuration which compiles three different classes into
their own JavaScript files. Each build uses `src` as class path and uses full
dead code elimination.

```hxml
    --class-path src
    --dce full

    --each

    --js bin/homepage.js
    --main website.HomePage

    --next

    --js bin/gallery.js
    --main website.GalleryPage

    --next

    --js bin/contact.js
    --main website.ContactPage
```

**Comments inside hxml**

Inside .hxml files use a hash (i.e. `#`) to comment out the rest of the line.

**Calling build configurations inside HXML:**

It is possible to create a configuration that looks like this:

```hxml
    build-server.hxml
    --next
    build-website.hxml
    --next
    build-game.hxml
```


## 🐥 Global Compiler Flags
                                                       **Global Compiler Flags**
| No. |             Flag             |         Argument       |   Platforms   |
|-----|------------------------------|------------------------|---------------|
| 001 | `absolute_path`              |                        | all           |
| 002 | `advanced-telemetry`         |                        | flash         |
| 003 | `annotate_source`            |                        | cpp           |
| 004 | `check_xml_proxy`            |                        | all           |
| 005 | `core_api`                   |                        | all           |
| 006 | `core_api_serialize`         |                        | cs            |
| 007 | `cppia`                      |                        | all           |
| 008 | `cs_ver`                     |                        | cs            |
| 009 | `nocppiaast`                 |                        | all           |
| 010 | `dce`                        | <mode: std, full, no>  | all           |
| 011 | `dce_debug`                  |                        | all           |
| 012 | `debug`                      |                        | all           |
| 013 | `disable_unicode_strings`    |                        | cpp           |
| 014 | `display`                    |                        | all           |
| 015 | `display_stdin`              |                        | all           |
| 016 | `dll_export`                 |                        | cpp           |
| 017 | `dll_import`                 |                        | cs            |
| 018 | `doc_gen`                    |                        | all           |
| 019 | `dump`               | <mode: pretty, record, position, legacy> | all |
| 020 | `dump_dependencies`          |                        | all           |
| 021 | `dump_ignore_var_ids`        |                        | all           |
| 022 | `dynamic_interface_closures` |                        | cpp           |
| 023 | `erase_generics`             |                        | cs            |
| 024 | `eval_call_stack_depth`      | <depth>                | eval          |
| 025 | `eval_debugger`              |                        | eval          |
| 026 | `eval_stack`                 |                        | eval          |
| 027 | `eval_times`                 |                        | eval          |
| 028 | `fast_cast`                  |                        | cs, java      |
| 029 | `fdb`                        |                        | flash         |
| 030 | `file_extension`             |                        | cpp           |
| 031 | `flash_strict`               |                        | flash         |
| 032 | `flash_use_stage`            |                        | flash         |
| 033 | `force_lib_check`            |                        | cs, java      |
| 034 | `force_native_property`      |                        | cpp           |
| 035 | `gencommon_debug`            |                        | cs, java      |
| 036 | `haxe3compat`                |                        | all           |
| 037 | `haxe_boot`                  |                        | flash         |
| 038 | `haxe_ver`                   |                        | all           |
| 039 | `haxe`                       |                        | all           |
| 040 | `hxcpp_api_level`            |                        | cpp           |
| 041 | `hxcpp_gc_generational`      |                        | cpp           |
| 042 | `hxcpp_debugger`             |                        | cpp           |
| 043 | `hxcpp_smart_strings`        |                        | cpp           |
| 044 | `include_prefix`             |                        | cpp           |
| 045 | `interp`                     |                        | all           |
| 046 | `java_ver`                   | <version: 5-7>         | java          |
| 047 | `js_classic`                 |                        | js            |
| 048 | `js_es`                      | <version number>       | js            |
| 049 | `js_enums_as_arrays`         |                        | js            |
| 050 | `js_unflatten`               |                        | js            |
| 051 | `js_source_map`              |                        | js            |
| 052 | `jvm`                        |                        | java          |
| 053 | `source_map`                 |                        | php           |
| 054 | `keep_old_output`            |                        | cs, java      |
| 055 | `loop_unroll_max_cost`       | <cost>                 | all           |
| 056 | `lua_jit`                    |                        | lua           |
| 057 | `lua_vanilla`                |                        | lua           |
| 058 | `lua_ver`                    | <version>              | lua           |
| 059 | `macro`                      |                        | all           |
| 060 | `macro_times`                |                        | all           |
| 061 | `net_ver`                    | <version: 20-45>       | cs            |
| 062 | `netcore_ver`                | <version: x.x.x>       | cs            |
| 063 | `net_target`                 | <name>                 | cs            |
| 064 | `neko_source`                |                        | neko          |
| 065 | `neko_v1`                    |                        | neko          |
| 066 | `network-sandbox`            |                        | flash         |
| 067 | `no-compilation`             |                      cs, java, cpp, hl |
| 068 | `no_copt`                    |                        | all           |
| 069 | `no_debug`                   |                        | all           |
| 070 | `no-deprecation-warnings`    |                        | all           |
| 071 | `no-flash-override`          |                        | flash         |
| 072 | `no_opt`                     |                        | all           |
| 073 | `no_inline`                  |                        | all           |
| 074 | `no_root`                    |                        | cs            |
| 075 | `no_macro_cache`             |                        | all           |
| 076 | `no_swf_compress`            |                        | flash         |
| 077 | `no_traces`                  |                        | all           |
| 078 | `objc`                       |                        | cpp           |
| 079 | `old-constructor-inline`     |                        | all           |
| 080 | `old-error-format`           |                        | all           |
| 081 | `php_prefix`              | <dot-separated namespace> | php           |
| 082 | `php_lib`                    | <folder name>          | php           |
| 083 | `php_front`                  | <filename>             | php           |
| 084 | `python_version`             | <version>              | python        |
| 085 | `real_position`              |                        | cs, java, php |
| 086 | `replace_files`              |                        | cs, java      |
| 087 | `scriptable`                 |                        | cpp           |
| 088 | `shallow-expose`             |                        | js            |
| 089 | `source-header`              |                        | all           |
| 090 | `source-map-content`         |                        | js            |
| 091 | `static`                     |                        | all           |
| 092 | `swc`                        |                        | flash         |
| 093 | `swf_compress_level`         | <level: 1-9>           | flash         |
| 094 | `swf_debug_password`         | <password>             | flash         |
| 095 | `swf_direct_blit`            |                        | flash         |
| 096 | `swf_gpu`                    |                        | flash         |
| 097 | `swf_metadata`               | <file>                 | flash         |
| 098 | `swf_preloader_frame`        |                        | flash         |
| 099 | `swf_protected`              |                        | flash         |
| 100 | `swf_script_timeout`         | <time in seconds>      | flash         |
| 101 | `swf_use_doabc`              |                        | flash         |
| 102 | `sys`                        |                        | all           |
| 103 | `unsafe`                     |                        | cs            |
| 104 | `use_nekoc`                  |                        | neko          |
| 105 | `utf16`                      |                        | all           |
| 106 | `vcproj`                     |                        | cpp           |
| 107 | `warn_var_shadowing`         |                        | all           |

001.  Print absolute file path in trace output.
002.  Allow the SWF to be measured with Monocle tool.
003.  Add additional comments to generated source code.
004.  Check the used fields of the XML proxy.
005.  Defined in the core API context.
006.  Mark some generated core API classes with the `Serializable` attribute on C#.
007.  Generate cpp instruction assembly.
008.  The C# version to target.
009.  Use legacy cppia generation.
010.  Set the [DCE] (dead code elimination) mode. (default: std)
011.  Show [DCE] log..
012.  Activated when compiling with -debug.
013.  Disable Unicode support in `String` type.
014.  Activated during completion. See [completion].
015.  Read the contents of a file specified in `--display` from standard input.
016.  GenCPP experimental linking.
017.  Handle Haxe-generated .NET DLL imports.
018.  Do not perform any removal/change in order to correctly generate documentation.
019.  Dump typed AST in dump subdirectory using specified mode or non-prettified default.
020.  Dump the classes dependencies in a dump subdirectory.
021.  Remove variable IDs from non-pretty dumps (helps with diff).
022.  Use slow path for interface closures to save space.
023.  Erase generic classes on C#.
024.  Set maximum call stack depth for eval. (default: 1000)
025.  Support debugger in macro/interp mode. Allows `host:port` value to open a socket. Implies eval_stack.
026.  Record stack information in macro/interp mode.
027.  Record per-method execution times in macro/interp mode. Implies eval_stack.
028.  Enables an experimental casts cleanup on C# and Java.
029.  Enable full flash debug infos for FDB interactive debugging.
030.  Output filename extension for cpp source code.
031.  More strict typing for flash target.
032.  Keep the SWF library initial stage.
033.  Force the compiler to check `--net-lib` and `–-java-lib` added classes (internal).
034.  Tag all properties with `:nativeProperty` metadata for 3.1 compatibility.
035.  GenCommon internal.
036.  Gives warnings about transition from Haxe 3.x to Haxe 4.0.
037.  Give the name 'haxe' to the flash boot class instead of a generated name.
038.  The current Haxe version value as decimal number. E.g. 3.407 for 3.4.7.
039.  The current Haxe version value in SemVer format.
040.  Provided to allow compatibility between hxcpp versions.
041.  Experimental Garbage Collector.
042.  Include additional information for hxcpp_debugger.
043.  Use wide strings in hxcpp. (Turned on by default unless `-D disable_unicode_strings` is specified.)
044.  Prepend path to generated include files.
045.  The code is compiled to be run with `--interp`.
046.  Sets the Java version to be targeted.
047.  Don't use a function wrapper and strict mode in JS output.
048.  Generate JS compliant with given ES standard version. (default: 5) See target [javascript] es6.
049.  Generate enum representation as array instead of as object.
050.  Generate nested objects for packages and types.
051.  Generate JavaScript source map even in non-debug mode.
052.  Generate jvm directly.
053.  Generate source map for compiled files.
054.  Keep old source files in the output directory.
055.  Maximum cost (number of expressions * iterations) before loop unrolling is canceled. (default: 250)
056.  Enable the jit compiler for lua (version 5.2 only).
057.  Generate code lacking compiled extern lib support (e.g. utf8).
058.  The lua version to target.
059.  Defined when code is compiled in the macro context. See [macro].
060.  Display per-macro timing when used with `--times`.
061.  Sets the .NET version to be targeted.
062.  Sets the .NET core version to be targeted
063.  Sets the .NET target. `netcore` (.NET core), `xbox`, `micro` (Micro Framework), `compact` (Compact Framework) are some valid values. (default: `net`)
064.  Output neko source instead of bytecode.
065.  Keep Neko 1.x compatibility.
066.  Use local network sandbox instead of local file access one.
067.  Disable final compilation.
068.  Disable completion optimization (for debug purposes).
069.  Remove all debug macros from cpp output.
070.  Do not warn if fields annotated with `@:deprecated` are used.
071.  Change overrides on some basic classes into HX suffixed methods
072.  Disable optimizations.
073.  Disable inlining. See [class-field-inline].
074.  Generate top-level types into the `haxe.root` namespace.
075.  Disable macro context caching.
076.  Disable SWF output compression.
077.  Disable all trace calls.
078.  Sets the hxcpp output to Objective-C++ classes. Must be defined for interop.
079.  Use old constructor inlining logic (from Haxe 3.4.2) instead of the reworked version.
080.  Use Haxe 3.x zero-based column error messages instead of new one-based format.
081.  Root namespace for generated php classes. E.g. if compiled with`-D php-prefix=some.sub`, then all classes will be generated in `\some\sub` namespace.
082.  Select the name for the php lib folder.
083.  Select the name for the php front file. (default: `index.php`)
084.  The python version to target. (default: 3.3)
085.  Disables Haxe source mapping when targetting C#, removes position comments in Java and Php output.
086.  GenCommon internal.
087.  GenCPP internal.
088.  Expose types to surrounding scope of Haxe generated closure without writing to window object.
089.  Print value as comment on top of generated files, use '' value to disable.
090.  Include the Haxe sources as part of the JS source map.
091.  Defined if the current target is static.
092.  Output a SWC instead of a SWF.
093.  Set the amount of compression for the SWF output.
094.  Set a password for debugging.
095.  Use hardware acceleration to blit graphics.
096.  Use GPU compositing features when drawing graphics.
097.  Include contents of the given file as metadata in the SWF.
098.  Insert empty first frame in SWF.
099.  Compile Haxe `private` as `protected` in the SWF instead of `public`.
100.  Maximum ActionScript processing time before script stuck dialog box displays.
101.  Use `DoAbc` SWF-tag instead of `DoAbcDefine`.
102.  Defined for all system platforms.
103.  Allow unsafe code when targeting C#.
104.  Use `nekoc` compiler instead of the internal one.
105.  Defined for all platforms that use UTF-16 string encoding with UCS-2 API.
106.  GenCPP internal.
107.  Warn about shadowing variable declarations.


# 🥚 Compiler Features
                                                           **Compiler Features**
https://haxe.org/manual/cr-features.html
manual\content\08-cr-features.md

08. ✨ [Compiler Features](https://haxe.org/manual/cr-features.html)
     - [Built-in Compiler Metadata]
     - [Dead Code Elimination]
     - [Compiler Services]
     - - - [Overview]
     - - - [Field access completion]
     - - - [Call argument completion]
     - - - [Type path completion]
     - - - [Usage completion]
     - - - [Position completion]
     - - - [Top-level completion]
     - - [Completion server]
     - [Resources]
     - - - [Embedding resources]
     - - - [Retrieving text resources]
     - - - [Retrieving binary resources]
     - - [Implementation details]
     - [Runtime Type Information]
     - [Static Analyzer]
     - [Loop unrolling]
     - [Tail Recursion Elimination (TRE)]
     - [Null Safety]



# 🥚 Macros
                                                                     **Macros**
https://haxe.org/manual/macro.html
manual\content\09-macro.md
00. ✨ [Macros](https://code.haxe.org/category/macros/)
09. ✨ [Macros](https://haxe.org/manual/macro.html)

     - [Macro Context]
     - [Arguments]
     - - - [ExprOf]
     - - - [Constant Expressions]
     - - [Rest Argument]
     - [Reification]
     - - - [Expression Reification]
     - - - [Type Reification]
     - - [Class Reification]
     - [Tools]
     - [Type Building]
     - - - [Enum building]
     - - - [@:autoBuild]
     - - [@:genericBuild]
     - [Limitations]
     - - - [Macro-in-Macro]
     - - - [Static extension]
     - - - [Build Order]
     - - [Type Parameters]
     - [Persistent Variables]
     - [Initialization Macros]

Macros are without a doubt the most advanced feature in Haxe. They are often
perceived as dark magic that only a select few are capable of mastering,
yet there is nothing magical (and certainly nothing dark) about them.

> ##### Define: Abstract Syntax Tree (AST)
>
> The AST is the result of **parsing** Haxe code into a typed structure.
> This structure is exposed to macros through the types defined in the
> file `haxe/macro/Expr.hx` of the Haxe Standard Library.

<!-- ![](assets/figures/macro-compilation-role.svg) -->
![](https://haxe.org/manual/macro-compilation-role.svg)

_Figure: The role of macros during compilation._

A basic macro is a **syntax-transformation**. It receives zero or more [expressions]
and also returns an expression. If a macro is called, it effectively inserts code
at the place it was called from. In that respect, it could be compared to a
preprocessor like `#define` in C++, but a Haxe macro is not a textual replacement tool.

We can identify different kinds of macros, which are run at specific compilation stages:

01. **Initialization Macros**: These are provided by command line using
    the `--macro` compiler parameter. They are executed after the compiler
    arguments were processed and the **typer context** has been created,
    but before any typing was done (see [Initialization Macros].
02. **Build Macros**: These are defined for classes, enums and abstracts
    through the `@:build` or `@:autoBuild` [metadata]. They are executed per type,
    after the type has been set up (including its relation to other types, such as
    inheritance for classes) but before its fields are typed (see [Type Building]).
03. **Expression Macros**: These are normal functions which are executed
    as soon as they are typed.


Related content

* [macro API documentation](http://api.haxe.org/haxe/macro)
* [macro snippets and tutorials](http://code.haxe.org/category/macros/)


## 🐥 Macro Context
                                                               **Macro Context**

> ##### Define: Macro Context
>
> The macro context is the environment in which the macro is executed.
> Depending on the macro type, it can be considered to be a class being
> built or a function being typed. Contextual information can be obtained
> through the `haxe.macro.Context` API.

Haxe macros have access to different contextual information depending on
the macro type. Other than querying such information, the context also allows
some modifications such as defining a new type or registering certain callbacks.
It is important to understand that not all information is available for
all macro kinds, as the following examples demonstrate:

01. Initialization macros will find that the `Context.getLocal*()` methods
    return `null`. There is no local type or method in the context of an
    initialization macro.
02. Only build macros get a proper return value from `Context.getBuildFields()`.
    There are no fields being built for the other macro kinds.
03. Build macros have a local type (if incomplete), but no local method,
    so `Context.getLocalMethod()` returns `null`.

The context API is complemented by the `haxe.macro.Compiler` API detailed in
[Initialization Macros]. While this API is available to all macro kinds,
care has to be taken for any modification outside of initialization macros.
This stems from the natural limitation of undefined [build order], which could
cause e.g. a flag definition through `Compiler.define()` to take effect before or
after a [conditional compilation] check against that flag.


## 🐥 Arguments
                                                                   **Arguments**

Most of the time, arguments to macros are expressions represented as an instance
of enum `Expr`. As such, they are parsed but not typed, meaning they can be
anything conforming to Haxe's syntax rules. The macro can then inspect their
structure, or (try to) get their type using `haxe.macro.Context.typeof()`.

It is important to understand that arguments to macros are not guaranteed to be
evaluated, so any intended side-effect is not guaranteed to occur. On the
other hand, it is also important to understand that an argument expression
may be duplicated by a macro and used multiple times in the returned expression:

[code asset](assets/MacroArguments.hx)

```haxe
    import haxe.macro.Expr;

    class MainMacro {

      macro static function add(e:Expr){
        return macro $e + $e;
      }

      public function new() {
        var x = 0;
        var b = add(x++);
        trace(b); // 1
      }

      public static function main(){
        new MainMacro();
        var x = 0;
        var b = add(x++);
        trace(x); // 2
      }
    }
```

The macro `add` is called with `x++` as argument and thus returns `x++ + x++`
using [expression reification], causing `x` to be incremented twice.

问题是，为静态方法中调用宏函数与实例方法化中调用返回的结果不一致？


Since `Expr` is compatible with any possible input, Haxe provides the type
`haxe.macro.ExprOf<T>`. For the most part, this type is identical to `Expr`,
but it allows constraining the type of accepted expressions. This is useful when combining macros with [static extensions]:

[code asset](assets/ExprOf.hx)

```haxe
    import haxe.macro.Expr;

    using Main;

    class Main {
      static public function main() {
        identity("foo");
        identity(1);
        "foo".identity();
        // Int has no field identity
        // 1.identity();
      }

      macro static function identity(e:ExprOf<String>) {
        return e;
      }
    }
```

The two direct calls to `identity` are accepted, even though the argument is declared as `ExprOf<String>`. It might come as a surprise that the `Int` `1` is accepted, but it is a logical consequence of what was explained about [macro arguments](macro-arguments): The argument expressions are never typed, so it is not possible for the compiler to check their compatibility by [unifying](type-system-unification).

This is different for the next two lines which are using static extensions (note the `using Main`): For these it is mandatory to type the left side (`"foo"` and `1`) first in order to make sense of the `identity` field access. This makes it possible to check the types against the argument types, which causes `1.identity()` to not consider `Main.identity()` as a suitable field.


A macro can be declared to expect [Constant Expressions] arguments:

[code asset](assets/MacroArgumentsConst.hx)

```haxe
    class Main {
      static public function main() {
        const("foo", 1, 1.5, true);
      }

      macro static function const(s:String, i:Int, f:Float, b:Bool) {
        trace(s);
        trace(i);
        trace(f);
        trace(b);
        return macro null;
      }
    }
```

With these, it is not necessary to detour over expressions as the compiler can use the provided constants directly.


If the final argument of a macro is of type `Array<Expr>`, the macro accepts
an arbitrary number of extra arguments which are available from that array:

[code asset](assets/MacroArgumentsRest.hx)

```haxe
    import haxe.macro.Expr;

    class Main {
      static public function main() {
        myMacro("foo", a, b, c);
      }

      macro static function myMacro(e1:Expr, extra:Array<Expr>) {
        for (e in extra) {
          trace(e);
        }
        return macro null;
      }
    }
```


## 🐥 Reification
                                                                 **Reification**


The Haxe Compiler allows **reification** of expressions, types and classes
to simplify working with macros. The syntax for reification is `macro expr`,
where `expr` is any valid Haxe expression.


**Expression Reification** is used to create instances of `haxe.macro.Expr`
in a convenient way. The Haxe Compiler accepts the usual Haxe syntax and
translates it to an expression object. It supports several escaping mechanisms,
all of which are triggered by the `$` character:

01. `${}` and `$e{}`: `Expr -> Expr` This can be used to compose expressions.
    The expression within the delimiting `{ }` is executed, with its value
    being used in place.
02. `$a{}`: `Array<Expr> -> Array<Expr>` or `Array<Expr> -> Expr` If used in
    a place where an `Array<Expr>` is expected (e.g. call arguments,
    block elements), `$a{}` treats its value as that array. Otherwise
    it generates an array declaration.
03. `$b{}`: `Array<Expr> -> Expr` Generates a block expression from
    the given expression array.
04. `$i{}`: `String -> Expr` Generates an identifier from the given string.
05. `$p{}`: `Array<String> -> Expr` Generates a field expression from
    the given string array.
06. `$v{}`: `Dynamic -> Expr` Generates an expression depending on the type
    of its argument. This is only guaranteed to work for [basic types] and
    [enum instances].

Additionally the [metadata] `@:pos(p)` can be used to map the position of
the annotated expression to `p` instead of the place it is reified at.

This kind of reification only works in places where the internal structure
expects an expression.

This disallows `object.${fieldName}`, but `object.$fieldName` works.
This is true for all places where the internal structure expects a string:

* field access `object.$name`
* variable name `var $name = 1;`


Since Haxe 3.1.0

* field name `{ $name: 1} `
* function name `function $name() { }`
* catch variable name `try e() catch($name:Dynamic) { }`

Furthermore, a `new` expression can be reified by providing [haxe.macro.TypePath]
argument: `new $typePath()`



**Type Reification** is used to create instances of `haxe.macro.Expr.ComplexType`
in a convenient way. It is identified by a `macro : Type`, where `Type` can be
any valid type path expression. This is similar to explicit type hints in normal
code, e.g. for variables in the form of `var x:Type`.

Each constructor of `ComplexType` has a distinct syntax:

* `TPath`: `macro : pack.Type`
* `TFunction`: `macro : Arg1 -> Arg2 -> Return`
* `TAnonymous`: `macro : { field: Type }`
* `TParent`: `macro : (Type)`
* `TExtend`: `macro : {> Type, field: Type }`
* `TOptional`: `macro : ?Type`


**Class Reification** is used reification to obtain an instance of
`haxe.macro.Expr.TypeDefinition`. This is indicated by the `macro class`
syntax as shown here:

[code asset](assets/ClassReification.hx)

```haxe
    class Main {
      macro static function generateClass(funcName:String) {
        var c = macro class MyClass {
          public function new() {}

          public function $funcName() {
            trace($v{funcName} + " was called");
          }
        }
        haxe.macro.Context.defineType(c);
        return macro new MyClass();
      }

      public static function main() {
        var c = generateClass("myFunc");
        c.myFunc();
      }
    }
```

The generated `TypeDefinition` instance is typically passed to
`haxe.macro.Context.defineType` in order to add a new type to the calling context
(not the macro context itself).

This kind of reification can also be useful to obtain instances of
`haxe.macro.Expr.Field`, which are available from the `fields` array of the
generated `TypeDefinition`.


## 🐥 Tools
                                                                       **Tools**

The Haxe Standard Library comes with a set of tool-classes to simplify working
with macros. These classes work best as [static extensions] and can be brought
into context either individually or as a whole through `using haxe.macro.Tools`.
These classes are:

1. * [ComplexTypeTools](https://api.haxe.org/haxe/macro/ComplexTypeTools.html):
    Allows printing `ComplexType` instances in a human-readable way.
    Also allows determining the `Type` corresponding to a `ComplexType`.
2. * [ExprTools](https://api.haxe.org/haxe/macro/ExprTools.html):
    Allows printing `Expr` instances in a human-readable way.
    Also allows iterating and mapping expressions.
3. * [MacroStringTool](https://api.haxe.org/haxe/macro/MacroStringTools.html):
    Offers useful operations on strings and string expressions in macro context.
4. * [TypeTools](https://api.haxe.org/haxe/macro/TypeTools.html):
    Allows printing `Type` instances in a human-readable way.
    Also offers several useful operations on types, such as [unifying] them
    or getting their corresponding `ComplexType`.

Furthermore the [haxe.macro.Printer] class has public methods for printing
various types as a human-readable format. This can be helpful when
debugging macros.

> ##### Trivia: The tinkerbell library and why Tools.hx works
>
> We learned about static extensions that using a **module** implies that
> all its types are brought into static extension context. As it turns out,
> such a type can also be a [typedef] to another type. The compiler then
> considers this type part of the module, and extends static extension
> accordingly.
> 
> This "trick" was first used in Juraj Kirchheim's **tinkerbell** library
> for exactly the same purpose. Tinkerbell provided many useful macro tools
> long before they made it into the Haxe Compiler and Haxe Standard Library.
> It remains the primary library for additional macro tools and offers other
> useful functionality as well.


## 🐥 Type Building
                                                               **Type Building**

## 🐥 Limitations
                                                                 **Limitations**

## 🐥 Persistent Variables
                                                        **Persistent Variables**

When using macros in combination with the [completion server], certain values
obtained in a build or initialization macro can be retained for the next time
the macro is executed. This is useful if obtaining the values is resource-intensive,
or if the macro needs to keep track of previous builds. To mark a static field
as persistent across macro builds, it should be annotated with the `:persistent`
metadata.

As an example, here is `Welcome.hx`:

```haxe
    import haxe.macro.Expr;

    class Welcome {
      @:persistent static var firstBuild:Bool = true;

      public static build():Array<Field> {
        if (firstBuild) {
          trace("congratulations on your first build!");
          firstBuild = false;
        }
        return null;
      }
    }
```

And `Main.hx`:

```haxe
    @:build(Welcome.build())
    class Main {
      public static function main() {}
    }
```

After starting the completion server with `haxe --wait 6000`, we perform a build
with `haxe --connect 6000 --main Main --no-output`. The first time the congratulatory
message is printed during compilation. If we execute the same command again,
however, it is not - the `firstBuild` variable retains the value `false` from
the previous build.

## 🐥 Initialization Macros
                                                       **Initialization Macros**

**Initialization Macros** are invoked from the command line by using the
`--macro callExpr(args)` command. This registers a callback which the compiler
invokes after creating its context, but before typing the argument to `--main`.
This then allows configuring the compiler in some ways.

If the argument to `--macro` is a call to a plain identifier, that identifier
is looked up in the class `haxe.macro.Compiler` which is part of the
Haxe Standard Library. It comes with several useful initialization macros
which are detailed in its API.

As an example, the `include` macro allows the inclusion of an entire package
for compilation, recursively if necessary. The command line argument for this
would then be `--macro include('some.pack', true)`.

Of course it is also possible to define custom initialization macros to perform
various tasks before the real compilation. A macro like this would then be
invoked via `--macro some.Class.theMacro(args)`. For instance, as all macros
share the same [Macro Context], an initialization macro could set the value of
a static field which other macros use as configuration.




# 🥚 Standard Library
                                                            **Standard Library**
manual\content\10-std.md
10. ✨ [Standard Library](https://haxe.org/manual/std.html)
     - [String]
     - - - [String literals]
     - - - [Unicode]
     - - [Encoding]
     - [Data Structures]
     - - - [Array]
     - - - [Vector]
     - - - [List]
     - - - [GenericStack]
     - - - [Map]
     - - [Option]
     - [Regular Expressions]
     - - - [Matching]
     - - - [Groups]
     - - - [Replace]
     - - - [Split]
     - - - [Map]
     - - [Implementation Details]
     - [Math]
     - - - [Special Numbers]
     - - - [Mathematical Errors]
     - - - [Integer Math]
     - - [Extensions]
     - [Lambda]
     - [Template]
     - [Reflection]
     - [Serialization]
     - - [Serialization format]
     - [Xml]
     - - - [Getting started with Xml]
     - - - [Parsing Xml]
     - - - [Encoding Xml]
     - - [Simplified Xml access]
     - [Json]
     - - - [Parsing JSON]
     - - - [Encoding JSON]
     - - [Implementation details]
     - [Input/Output]
     - [Sys]
     - - - [Threading]
     - - - [Standard IO Streams]
     - - [Process]
     - [Remoting]
     - - - [Remoting Connection]
     - - [Implementation details]
     - [Unit Testing]
     - [Haxe 3 Compatibility]

## 🍕 Standard Library Introuduction
                                              **Standard Library Introuduction**
https://haxe.org/documentation/introduction/stdlib-introduction.html

Introduction to the Haxe Standard Library

The Haxe Standard Library provides common purpose tools without trying to be
an exhaustive collection of data structures and algorithms. A Haxe distribution
comes with a `std` directory containing the Haxe Standard Library. Its contents
can be categorized like so:

1. - [General purpose] : The `std` directory itself contains a few top-level
    classes such as `Array`, `Map` or `String` which can be used on all targets.
    The `haxe` sub-directory provides additional data structures, input/output
    APIs and many more tools.
2. - [System] : The `sys` sub-directory contains APIs related to file systems
    and database. Additionally, the `Sys` top-level class allows various
    interaction with the operating system. They can only be accessed when
    compiling to a target of the `sys`-category (C++, C#, Java, Neko, PHP).
3. - [Target specific] : Each Haxe target has a distinct sub-directory containing
    target-specific APIs. These can only be accessed when compiling to the given
    target.

**General purpose API**

Available on all targets

- Top-level:

    - [Array](https://api.haxe.org/Array.html)
       Typed collection which defines several ECMA-compliant operations
    - [Date, DateTools](https://api.haxe.org/Date.html)
       Operations related to dates and timestamps
    - [EReg](https://api.haxe.org/EReg.html)
       Regular Expressions
    - [Lambda](https://api.haxe.org/Lambda.html)
       Operations over iterables
    - [Map](https://api.haxe.org/Map.html)
       Key-to-value mapping data structure
    - [Math](https://api.haxe.org/Math.html)
       ECMA-compliant mathematical functions
    - [Reflect](https://api.haxe.org/Reflect.html)
       Field-related reflection
    - [Std](https://api.haxe.org/Std.html)
       Runtime type-checking; numerical parsing; conversion to Int and String
    - [String](https://api.haxe.org/String.html)
       Basic operations on String
    - [StringBuf](https://api.haxe.org/StringBuf.html)
       Optimized for building Strings
    - [StringTools](https://api.haxe.org/StringTools.html)
       Various extensions to String
    - [Type](https://api.haxe.org/Type.html)
       Type-related reflection
    - [Xml](https://api.haxe.org/Xml.html)
       Cross-platform XML</ul>

- The haxe package:

    - [haxe.Http](https://api.haxe.org/haxe/Http.html)
       HTTP requests
    - [haxe.Json](https://api.haxe.org/haxe/Json.html)
       Encoding and decoding JSON
    - [haxe.Resource](https://api.haxe.org/haxe/Resource.html)
       Work with Haxe resources
    - [haxe.Serializer](https://api.haxe.org/haxe/Serializer.html)
       Serialize arbitrary objects as String
    - [haxe.Template](https://api.haxe.org/haxe/Template.html)
       Simple templating system
    - [haxe.Timer](https://api.haxe.org/haxe/Timer.html)
       Repeated/delayed execution; measuring
    - [haxe.Unserializer](https://api.haxe.org/haxe/Unserializer.html)
       Complement to haxe.Serializer
    - [haxe.UnicodeString](https://api.haxe.org/UnicodeString.html)
       Cross-platform unicode strings
    - [haxe.crypto](https://api.haxe.org/haxe/crypto/)
       Various encryption algorithms
    - [haxe.macro](https://api.haxe.org/haxe/macro/)
       Types for working with Haxe macros
    - [haxe.MainLoop](https://api.haxe.org/haxe/MainLoop.html)
       MainLoop for Haxe
    - [haxe.rtti](https://api.haxe.org/haxe/rtti/)
       Run-time type information
    - [haxe.xml](https://api.haxe.org/haxe/xml/)
       Complementary XML tools
    - [haxe.zip](https://api.haxe.org/haxe/zip/)
       Support of the ZIP-format</ul>

- The haxe.ds package:

    - [haxe.ds.ArraySort](https://api.haxe.org/haxe/ds/ArraySort.html)
       Stable, cross-platform array sorting
    - [haxe.ds.BalancedTree](https://api.haxe.org/haxe/ds/BalancedTree.html)
       Balanced tree data structure
    - [haxe.ds.EnumValueMap](https://api.haxe.org/haxe/ds/EnumValueMap.html)
       Map type supporting enum value keys
    - [haxe.ds.GenericStack](https://api.haxe.org/haxe/ds/GenericStack.html)
       Stack data structure which is optimized on static targets
    - [haxe.ds.IntMap](https://api.haxe.org/haxe/ds/IntMap.html)
       Map type supporting Int keys
    - [haxe.ds.ObjectMap](https://api.haxe.org/haxe/ds/ObjectMap.html)
       Map type supporting object keys
    - [haxe.ds.StringMap](https://api.haxe.org/haxe/ds/StringMap.html)
       Map type supporting string keys
    - [haxe.ds.Vector](https://api.haxe.org/haxe/ds/Vector.html)
       Fixed-size data structure</ul>

- The haxe.io package:

    - [haxe.io.Bytes](https://api.haxe.org/haxe/io/Bytes.html)
       Byte operations on native representations
    - [haxe.io.BytesBuffer](https://api.haxe.org/haxe/io/BytesData.html)
       Optimized for building Bytes
    - [haxe.io.Path](https://api.haxe.org/haxe/io/Path.html)
       Operations on path strings

**System API**

- Available on C++, C#, Java, Neko and PHP.

    - [Sys](https://api.haxe.org/Sys.html)
       Execute native commands; interact with stdin, stdout and stderr;
       various other native operations
    - [sys.FileSystem](https://api.haxe.org/sys/FileSystem.html)
       Read and modify directories; obtain information on files and directories
    - [sys.db](https://api.haxe.org/sys/db/)
       APIs for working with MySQL and SQLite databases
    - [sys.io.File](https://api.haxe.org/sys/io/File.html)
       Read and write file content; copy files
    - [sys.io.Process](https://api.haxe.org/sys/io/Process.html)
       Use native processes
    - [sys.thread](https://api.haxe.org/sys/thread/)
       API for multi-threaded applications.

**Target Specific APIs**


- [cpp](https://api.haxe.org/cpp/)

    - [cpp.Lib](https://api.haxe.org/cpp/Lib.html)
       Provides platform-specific functions for the C++ target.
    - [cpp.vm](https://api.haxe.org/cpp/vm/)
       Thread API, debugger, profiler etc.</ul>

- [js](https://api.haxe.org/js/)

    - [js.Lib](https://api.haxe.org/js/Lib.html)
       Provides some platform-specific functions for the JavaScript target.
    - [js.Browser](https://api.haxe.org/js/Browser.html)
       Shortcuts for common browser functions.
    - [js.html](https://api.haxe.org/js/html/)
       Externs for interacting with the native JavaScript API's / DOM.
    - [js.Syntax](https://api.haxe.org/js/Syntax.html)
       Helper for low-level JavaScript specific code generation.</ul>

- [php](https://api.haxe.org/php/)

    - [php.Lib](https://api.haxe.org/php/Lib.html)
       Provides platform-specific functions for the PHP target.
    - [php.Syntax](https://api.haxe.org/php/Syntax.html)
       Helper for low-level PHP specific code generation.
    - [php.Session](https://api.haxe.org/php/Session.html)
       Work with native PHP sessions
    - [php.Web](https://api.haxe.org/php/Web.html)
       Work with HTTP requests and responses
    - [php.db.PDO](https://api.haxe.org/php/db/PDO.html)
       Additional PDO driver for database interactions  </ul>

- [cs](https://api.haxe.org/cs/) API for C# target

    - [cs.Lib](https://api.haxe.org/cs/Lib.html)
       Provides platform-specific functions for the C# target.
    - [cs.system](https://api.haxe.org/cs/system/)
       Externs for interacting with native C# classes.</ul>

- [java](https://api.haxe.org/java/) API for Java target

    - [java.Lib](https://api.haxe.org/java/Lib.html)
      Provides  platform-specific functions for the Java target.
    - [java.* ](https://api.haxe.org/java/)
      Externs for interacting with native Java classes.</ul>

- [python](https://api.haxe.org/python/)

    - [python.Lib](https://api.haxe.org/python/Lib.html)
       Provides platform-specific functions for the Python target.
    - [python.Syntax](https://api.haxe.org/python/Syntax.html)
       Helper for low-level Python specific code generation.
    - [python.Syntax](https://api.haxe.org/python/lib/)
       Externs for interacting with native Python classes.</ul>

- [flash](https://api.haxe.org/flash/)

    - [flash.Lib](https://api.haxe.org/flash/Lib.html)
      Provides  platform-specific functions for the Flash target.
    - [flash.Memory](https://api.haxe.org/flash/Memory.html)
      Extern for Flash Memory API
    - [flash.Vector](https://api.haxe.org/flash/Vector.html)
  Extern for Flash Vectors  </ul>

- [neko](https://api.haxe.org/neko/)

    - [neko.Lib](https://api.haxe.org/neko/Lib.html)
       Low level interactions with the Neko VM target.
    - [neko.Web](https://api.haxe.org/neko/Web.html)
       Work with HTTP requests and responses.
    - [neko.net](https://api.haxe.org/neko/net/)
       Tools for interacting with networks and running servers.
    - [neko.vm](https://api.haxe.org/neko/vm/)
       API for multi-threaded applications.</ul>

- [hl](https://api.haxe.org/hl/) Low level interactions with the HashLink target
- [lua](https://api.haxe.org/lua/) Low level interactions with the lua target

## 🍕 String
                                                                      **String**

> ##### Define: String
>
> A String is a sequence of characters.

String is a special class in Haxe. It is not considered a [basic type],
but it can be constructed as a [literal]. The [binary comparison operators]
also behave differently when applied to strings. Haxe also supports special
[string interpolation] syntax.

**Character code**

Use the `.code` property on a constant single-char string in order to compile
its Unicode character point:

        "#".code // will compile as 35

* See the [String API](haxe/String.hx) for details about its methods.

**String literals**

A string **literal** is a sequence of characters inside a pair of double quotes
or single quotes:

```haxe
        var a = "foo";
        var b = 'foo';
        trace(a == b); // true
```

The only difference between the two forms is that single-quoted literals allow
[string interpolation].

String literals may occupy multiple lines; In which case, each line of the
string will be punctuated with a '\n' newline character.

```haxe
        var str = "Line one
        Line two
        Line three";
        trace(str);
```

Note that indentation will also be included in the string, such as with the
example below.

```haxe
        class X {
          function foo() {
            var str = "a
            b
            c";
          }
        }
```

The `str` variable will have four spaces before 'b' and 'c'.

**Escape sequences**

| Sequence | Meaning | Unicode codepoint (decimal) | Unicode codepoint (hexadecimal)
|------|----------------------|----|------|
| `\t` | horizontal tab (TAB) |  9 | 0x09 |
| `\n` | new line (LF)        | 10 | 0x0A |
| `\r` | new line (CR)        | 13 | 0x0D |
| `\"` | double quote         | 34 | 0x22 |
| `\'` | single quote         | 39 | 0x27 |
| `\\` | backslash            | 92 | 0x5C |
| `\NNN`   | ASCII escape where `NNN` is 3 octal digits      | 0 - 127     | 0x00 - 0x7F
| `\xNN`   | ASCII escape where `NN` is a pair of hex digits | 0 - 127     | 0x00 - 0x7F
| `\uNNNN` | Unicode escape where `NNNN` is 4 hex digits     | 0 - 65535   | 0x0000 - 0xFFFF
| `\u{N...}` | Unicode escape where `N...` is 1-6 hex digits | 0 - 1114111 | 0x000000 - 0x10FFFF

**Unicode**

Since Haxe 4.0.0

All Haxe targets except Neko support Unicode in strings by default.
The [compile-time define] `target.unicode` is set on targets where
Unicode is supported.

A string in Haxe code represents a valid sequence of Unicode codepoints.
Due to differing internal representations of strings across targets, only
the basic multilingual plane (BMP) is supported consistently:
every BMP Unicode codepoint corresponds to exactly one string character.

It is still possible to work with strings including non-BMP characters on
all targets without having to manually decode surrogate pairs by using the
[Unicode iterators API](haxe/iterators/StringIteratorUnicode.hx) provided
in the standard library.

**Null-bytes in strings**

Some Haxe targets disallow null-bytes (Unicode codepoint 0) in strings.
Additionally, some Haxe core APIs assume a null-byte terminates strings.
To consistently deal with binary data, including null-bytes, use the
[`haxe.io.Bytes`] API.

**Target details**

| Target | target.unicode | target.utf16 | Internal encoding | Null-byte allowed
|------------|-----|-----|-----------------|-----|
| Flash      | yes | yes | UTF-16          | no  |
| JavaScript | yes | yes | UTF-16          | yes |
| C++        | yes | yes | ASCII or UTF-16 (if needed) | yes |
| Java       | yes | yes | UTF-16          | yes |
| JVM        | yes | yes | UTF-16          | yes |
| C\#        | yes | yes | UTF-16          | yes |
| Python     | yes | no  | Latin-1, UCS-2, or UCS-4 (see [PEP 393]) | yes |
| Lua        | yes | no  | UTF-8           | yes |
| PHP        | yes | no  | binary          | yes |
| Eval       | yes | no  | UTF-8           | yes |
| Neko       | no  | no  | binary          | yes |
| HashLink   | yes | yes | UTF-16          | no  |


## 🍕 Data Structures
                                                             **Data Structures**
## 🍕 Regular Expressions
                                                         **Regular Expressions**
## 🍕 Math
                                                                        **Math**
## 🍕 Lambda
                                                                      **Lambda**
## 🍕 Template
                                                                    **Template**
## 🍕 Reflection
                                                                  **Reflection**
## 🍕 Serialization
                                                               **Serialization**
## 🍕 Xml
                                                                         **Xml**
## 🍕 Json
                                                                        **Json**
## 🍕 Input/Output
                                                                **Input/Output**
## 🍕 Sys
                                                                         **Sys**
## 🍕 Remoting
                                                                    **Remoting**

**Deprecated:** since Haxe 4.0.0
The remoting API has been removed from the standard library in Haxe 4.
For compatibility purposes it is still available in the [Haxe 3 Compatibility] library.

Haxe remoting is a way to communicate between different platforms. With Haxe
remoting, applications can transmit data transparently, send data and
call methods between server and client side.

* See the [remoting package](https://api.haxe.org/haxe/remoting/) on the
API documentation for more details on its classes.


## 🍕 Unit Testing
                                                                **Unit Testing**

**Deprecated:** Since Haxe 4.0.0

The unit testing API has been removed from the [standard library] in Haxe 4.
For compatibility purposes it is still available in the [Haxe 3 Compatibility]
library.

The Haxe Standard Library provides basic unit testing classes from the
[haxe.unit](https://api.haxe.org/v/3.4.7/haxe/unit/) package.

**Creating new test cases**

First, create a new class extending
[haxe.unit.TestCase](https://api.haxe.org/v/3.4.7/haxe/unit/TestCase.html)
and add own test methods. Every test method name must start with "`test`".

[code asset](assets/UnitTestCase.hx)

```haxe
    class MyTestCase extends haxe.unit.TestCase {
      public function testBasic() {
        assertEquals("A", "A");
      }
    }
```

**Running unit tests**
To run the test, an instance of [haxe.unit.TestRunner] has to be created.
Add the [TestCase] using the `add` method and call `run` to start the test.
[haxe.unit.TestRunner](https://api.haxe.org/v/3.4.7/haxe/unit/TestRunner.html)
[TestCase](https://api.haxe.org/v/3.4.7/haxe/unit/TestCase.html)

[code asset](assets/UnitTestRunner.hx)

```haxe
    class Main {
      static function main() {
        var r = new haxe.unit.TestRunner();
        r.add(new MyTestCase());
        // add other TestCases here

        // finally, run the tests
        r.run();
      }
    }
```

The result of the test looks like this:

```sh
Class: MyTestCase
.
OK 1 tests, 0 failed, 1 success
```

**Test functions**

The `haxe.unit.TestCase` class comes with three test functions.

* `assertEquals(expected, actual)` Succeeds if `expected` and `actual` are equal
* `assertTrue(a)` Succeeds if `a` is `true`
* `assertFalse(a)` Succeeds if `a` is `false`

**Setup and tear down**

To run code before or after the test, override the functions `setup` and `tearDown` in the `TestCase`.

* `setup` is called before each test runs.
* `tearDown` is called once after all tests are run.

[code asset](assets/UnitTestSetup.hx)

```haxe
    class MyTestCase extends haxe.unit.TestCase {
      var value:String;

      override public function setup() {
        value = "foo";
      }

      public function testSetup() {
        assertEquals("foo", value);
      }
    }
```

**Comparing Complex Objects**

With complex objects, it can be difficult to generate expected values to compare to the actual ones. It can also be a problem that `assertEquals` doesn't do a deep comparison. One way around these issues is to use a string as the expected value and compare it to the actual value converted to a string using `Std.string`. Below is a trivial example using an array.

```haxe
        public function testArray() {
          var actual = [1,2,3];
          assertEquals("[1, 2, 3]", Std.string(actual));
        }
```

**Run unit test**

This is an example showing how to run your unit tests (on Neko and Node.js) after compilation using a [HXML].

```hxml
-p source/main/haxe
-p source/test/haxe
--main your.package.TestRunnerMain
--each

--neko output/neko/test.n
--cmd neko ./output/neko/test.n
--next

--js output/javascript/test.js
--cmd node ./output/javascript/test.js
```

* See the [haxe.unit](https://api.haxe.org/v/3.4.7/haxe/unit/) package on
    the API documentation for more details.


## 🍕 Haxe 3 Compatibility
                                                        **Haxe 3 Compatibility**

Since Haxe 4.0.0

Some APIs that were originally a part of the standard library have been removed
in Haxe 4. To allow projects to transition from Haxe 3 more smoothly, the
[hx3compat](https://github.com/HaxeFoundation/hx3compat/) library still provides
these APIs. To use it, simply install it and compile the project with `-L hx3compat`.

The full list of APIs in hx3compat is:

* `haxe.remoting.*` Haxe remoting
* `haxe.unit.*` Unit testing
* `haxe.web.*` Web request classes for Haxe web servers
* `neko.net.*` Neko web server
* (JavaScript target only) jQuery and SWFObject externs

Note that some of these APIs were removed from the standard library in favour
of solutions in external libraries:

* [utest](https://github.com/haxe-utest/utest) is a Haxe unit testing library.
* [hxnodejs](https://github.com/HaxeFoundation/hxnodejs) can be used to produce
    Node.js web servers in Haxe.



# 🥚 Haxelib
                                                                     **Haxelib**
https://haxe.org/manual/haxelib.html
manual\content\11-haxelib.md

Haxelib is the package manager for the Haxe Toolkit, and is one way
to find and share Haxe code libraries.

More information and many free libraries can be found at [lib.haxe.org](https://lib.haxe.org/).

Haxelib's documentation is available at [lib.haxe.org/documentation/](https://lib.haxe.org/documentation/using-haxelib/).

## 🐥 Getting Started With Haxelib
                                                **Getting Started With Haxelib**
Haxelib is the library manager that comes with any Haxe distribution. Connected
to a central repository, it allows submitting and retrieving libraries and has
multiple features beyond that. Available libraries can be found at http://lib.haxe.org.

A basic Haxe library is a collection of .hx files. That is, libraries are
distributed by source code by default, making it easy to inspect and modify
their behavior. Each library is identified by a unique name, which is utilized
when telling the Haxe Compiler which libraries to use for a given compilation.

Using with Haxe
Any installed Haxe library can be made available to the compiler through the
--library <library-name> (or -L <library-name>) argument. This is very similiar
to the --class-path <path> argument, but expects a library name instead of a
directory path.

These commands are explained thoroughly in Compiler Usage.

For our exemplary usage we chose a very simple Haxe library called "random".
It provides a set of static convenience methods to achieve various random
effects, such as picking a random element from an array.

    class Main {
      static public function main() {
        var elt = Random.fromArray([1, 2, 3]);
        trace(elt);
      }
    }

Compiling this without any --library argument causes an error message along
the lines of Unknown identifier : Random. This shows that installed Haxe libraries
are not available to the compiler by default unless they are explicitly added.
A working command line for above program is

    haxelib install Random
    haxe --library random --main Main --interp

If the compiler emits an error Error: Library random is not installed : run 'haxelib install random' the library has to be installed via the haxelib command first. As the error message suggests, this is achieved through haxelib install random. We will learn more about the haxelib command in Using Haxelib.

## 🐥 Adding libraries to Haxe projects
                                           **Adding libraries to Haxe projects**

When the haxelib is installed, it is ready to be used it code. This is a matter of adding --library libraryname (or -L libraryname) to the compiler arguments.

    haxe --main Main --library kha --interp
    haxe --main Main --library libraryname --js bin/main.js

The same parameters you pass to the compiler can be stored in a hxml file:

    --main Main
    --library libraryname
    --js bin/main.js

Using Haxelib in OpenFL
When using OpenFL, add <haxelib /> tags in the project.xml to include Haxe libraries:

    <haxelib name="actuate" />

To specify a version:

    <haxelib name="actuate" version="1.0.0" />


# 🥚 Target Details
                                                              **Target Details**
manual\content\12-target-details.md

12. ✨ [Target Details](https://haxe.org/manual/target-details.html)
     - [Accessing Target-specific Syntax]
     - [JavaScript]
     - - - [Getting started with Haxe/JavaScript]
     - - - [ECMAScript 6 class generation]
     - - - [Using external JavaScript libraries]
     - - - [JavaScript target Metadata]
     - - - [Exposing Haxe classes for JavaScript]
     - - [Loading extern classes using "require" function]
     - [Flash]
     - - - [Getting started with Haxe/Flash]
     - - - [Embedding resources]
     - - - [Using external Flash libraries]
     - - [Flash target Metadata]
     - [Neko]
     - - [Getting started with Haxe/Neko]
     - [PHP]
     - - - [Getting started with Haxe/PHP]
     - - [Defines]
     - [C++]
     - - - [Getting started with Haxe/C++]
     - - - [The Hxcpp Build Environment]
     - - - [Build.xml]
     - - - - [Structure of the top-level]
     - - - - [Files]
     - - - - [Tags]
     - - - - [Targets]
     - - - - [Compiler]
     - - - - [Linker]
     - - - - [Stripper]
     - - - - [The Haxe Target]
     - - - - [Xml Injection]
     - - - [Defines]
     - - - [The Hxcpp Cache]
     - - [Threads And Stacks]
     - [Cppia]
     - - [Getting started with Haxe/Cppia]
     - [Java]
     - - [Getting started with Haxe/Java]
     - [JVM]
     - - [Getting started with Haxe/JVM]
     - [C#]
     - - - [Getting started with Haxe/C#]
     - - - [.NET version and external libraries]
     - - - [Haxe/C# Defines]
     - - - [Haxe/C# Metadata]
     - - [Injecting raw C# code]
     - [Python]
     - - [Getting started with Haxe/Python]
     - [Lua]
     - - - [Getting started with Haxe/Lua]
     - - - [Using external Lua libraries]
     - - - [Version flags]
     - - [Multireturns]
     - [HashLink]
     - - - [Getting started with Haxe/HashLink]
     - - - [HashLink/C Compilation]

## 🐥 Accessing Target-specific Syntax
                                            **Accessing Target-specific Syntax**

When writing code for a particular target, it might be necessary to
access certain features that are only available on that target and
inaccessible in Haxe code. It is still possible to access these
features using the target-specific Syntax APIs:

* [`js.Syntax`](https://api.haxe.org/js/Syntax.html) - JavaScript syntax
* [`php.Syntax`](https://api.haxe.org/php/Syntax.html) - PHP syntax
* [`python.Syntax`](https://api.haxe.org/python/Syntax.html) - Python syntax

An example of js.Syntax.code:

```java
    var myMessage = "Is Haxe great?";
    var output:Bool = js.Syntax.code("confirm({0})", myMessage);

    // The generated JavaScript output is:
    var myMessage = "Is Haxe great?";
    var output = confirm(myMessage);
```

Other functions are documented in the corresponding API sections.
These generally include native operators that are not available in Haxe.


## 🐥 JavaScript
                                                                  **JavaScript**
## 🐥 Flash
                                                                       **Flash**

## 🐥 Neko VM
                                                                        **Neko**
https://haxe.org/manual/target-neko.html
https://github.com/HaxeFoundation/neko
manual\content\12-target-details.md

Haxe supports compilation to Neko bytecode.
[Neko](https://nekovm.org/) is a virtual machine that was originally designed for Haxe.
Neko is superseded by [HashLink](target-hl), introduced with Haxe 3.4.

Deprecated as of 2021-09-09
Neko is not actively maintained anymore.

We keep it compatible with existing Haxe standard library and Haxe language features.
But don't expect any new features in Neko itself and don't expect implementation
of any new Haxe standard library API.

## 🐥 PHP
                                                                         **PHP**
## 🐥 C++
                                                                         **C++**
## 🐥 Cppia
                                                                       **Cppia**
## 🐥 Java
                                                                        **Java**
## 🐥 JVM
                                                                         **JVM**
## 🐥 C#
                                                                          **C#**
## 🐥 Python
                                                                      **Python**
## 🐥 Lua
                                                                         **Lua**

## 🐥 HashLink VM
                                                                    **HashLink**
https://haxe.org/manual/target-hl.html
https://github.com/HaxeFoundation/hashlink/releases
The New Haxe Target: HashLink InDepth by Nicolas Cannasse https://haxe.org/blog/hashlink-indepth/
manual\content\12-target-details.md

HashLink since Haxe 3.4.0

Haxe supports compilation to HashLink bytecode or HashLink/C code.
[HashLink](https://hashlink.haxe.org/) is a virtual machine designed for Haxe.

It can be considered the successor of NekoVM since it is also a virtual machine
mainly used to develop system/server/desktop applications. However, it has a
different approach in terms of core technology, which mean it is not compatible
with Neko and cannot be simply named "Neko 3.0".

Here are the common points shared by both HashLink and Neko:

1. A virtual machine with garbage collector
2. Small memory footprint
3. Just-In-Time compilation (actually Ahead-of-Time)
4. A small core easily extensible with additional C libraries
5. No crash - only catchable exceptions with full stack traces

And here are some points that are unique to HashLink:

1. A strictly-typed register-based bytecode
2. Ability to compile both to bytecode and native C
3. Full interoperability with C (respect `__cdecl`) in both x86 and x86-64

Beyond Neko
First, let me explain the reasons for writing another virtual machine
in replacement of Neko.

Neko was my first complete virtual machine. It was designed before Haxe was
even created and was meant to run various programming languages. In the end
only two languages ended up targeting Neko: **NekoML**, the language of the
Neko compiler, and of course **Haxe**.

Back then, the Neko virtual machine was not especially designed to run Haxe
and suffered from some limitations, the main one being **performance**.

Compared to other dynamically typed virtual machines which Neko can be
compared to (Python, PHP, Lua, etc.) NekoVM offers some pretty good performance.
However, when compared to any state-of-the-art tracing VM such as V8 or
statically typed VMs such as .NET CLR or JVM, Neko is very slow.

The main reason for this is that it's dynamically typed. So every "value"
in the VM can be either an Int, a Float, a Bool, some Bytes, an Array,
a Function or Object, etc. And because this value needs to be recognized
at run-time, its type together with its data need to be stored in the memory.

This causes two kind of problems:

1. Boxing
2. Polymorphism



## 🐥 Getting started with Haxe/JavaScript
                                        **Getting started with Haxe/JavaScript**
https://haxe.org/manual/target-javascript-getting-started.html
manual\content\12-target-details.md


## 🐥 Getting started with Haxe/Flash
                                             **Getting started with Haxe/Flash**
https://haxe.org/manual/target-flash-getting-started.html
Open Flash Library https://github.com/openfl/openfl
Haxe/flash API https://api.haxe.org/flash/
manual\content\12-target-details.md

Developing Flash applications is really easy with Haxe. Let's look at
our first code sample. This is a basic example showing most of the toolchain.

Create a new folder and save this class as Main.hx.

```java,ignore
    import flash.Lib;
    import flash.display.Shape;
    class Main {
        static function main() {
            var stage = Lib.current.stage;

            // create a center aligned rounded gray square
            var shape = new Shape();
            shape.graphics.beginFill(0x333333);
            shape.graphics.drawRoundRect(0, 0, 100, 100, 10);
            shape.x = (stage.stageWidth - 100) / 2;
            shape.y = (stage.stageHeight - 100) / 2;

            stage.addChild(shape);
        }
    }
```

Create and run  a file called compile.hxml. In this example the hxml file
should be in the same directory as the example class.

    # haxe compile.hxml

    -swf main-flash.swf
    -main MainSwf
    -swf-version 15
    -swf-header 960:640:60:f68712

The output will be a main-flash.swf with size 960x640 pixels at 60 FPS
with an orange background color and a gray square in the center.

To compile this, either run the following from the command line:

    haxe --swf main-flash.swf --main Main --swf-version 15 --swf-header 960:640:60:f68712


Embedding resources

Embedding resources is different in Haxe compared to ActionScript 3.
Instead of using [embed] (AS3-metadata) use Flash specific compiler
metadata like `@:bitmap`, `@:font`, `@:sound` or `@:file`.

```java,ignore
    import flash.Lib;
    import flash.display.BitmapData;
    import flash.display.Bitmap;

    class Main {
      public static function main() {
        var img = new Bitmap( new MyBitmapData(0, 0) );
        Lib.current.addChild(img);
      }
    }

    @:bitmap("relative/path/to/myfile.png")
    class MyBitmapData extends BitmapData { }
```


# 🥚 Debugging
                                                                   **Debugging**
13. ✨ [Debugging](https://haxe.org/manual/debugging.html)
     - [Logging and Trace]
     - [Position Information Parameter]
     - [Tracing Types]
     - [IDE Integration]
     - [Debugging in JavaScript]
     - [Source Maps]
     - - - [Source Maps in JavaScript]
     - - - [Source Maps in PHP7]

## 🐥 Logging and Trace
                                                           **Logging and Trace**

Haxe provides developers with a powerful logging/trace system. Simply call
`trace` within functions:

```haxe
trace("Hello world!");
```

In most Haxe targets trace will be printed to stdout. JavaScript uses
`console.log`. Each trace is displayed with the filename and line number
information where the trace occurred:

```
Test.hx:11: Hello world!
```

To trace without the default position information `haxe.Log.trace(msg, null)`
can be used.

The trace can have a custom output by changing the `Log.trace` method where
all trace calls are redirected.

[code asset](assets/CustomTrace.hx)

```haxe
        class Main {
          static function main() {
            haxe.Log.trace = function(v:Dynamic, ?infos:haxe.PosInfos) {
              // custom trace function here
            }
            trace("hello", "warning", 123);
          }
        }
```


The `v` argument is the first parameter of the trace call. It can be a `String`
or any other value. The optional `infos` argument contains the extra position
parameter, see below.

The `infos.customParams` array contains all extra arguments that were given
to the original trace. If no extra parameters are passed, it will be `null`.

As illustration, the previous example will be compiled as if it was calling
the following:

```js
haxe.Log.trace("hello", {
    fileName : "Test.hx",
    lineNumber : 6,
    className : "Test",
    methodName : "main",
    customParams : ["warning",123]
});
```

You can simply remove all trace information by compiling your project with
the `--no-traces` argument. This will remove all trace calls as if they were
not present in the program.


## 🐥 Position Information Parameter
                                              **Position Information Parameter**

[`haxe.PosInfos`] is a magic type which can be used to generate position
information into the output for debugging use.

If a function has a final optional argument of this type, i.e.
`(..., ?pos:haxe.PosInfos)`, each call to that function which does not assign
a value to that argument has its position added as a call argument.

It is sometimes useful to define a custom method that does traces in some case.
The following usage is possible in Haxe since when the `haxe.PosInfos` optional
parameter is not set, its default value will always be replaced by the compiler:

```js
    typedef PosInfos = {
        var fileName:String;
        var lineNumber:Int;
        var className:String;
        var methodName:String;
        var ?customParams:Array<Dynamic>;
    }
```


[code asset](assets/AssertTrace.hx)

```haxe
    class Main {
      static function assert(cond:Bool, ?pos:haxe.PosInfos) {
        if (!cond)
          haxe.Log.trace("Assert in " + pos.className + "::" + pos.methodName, pos);
      }

      static function main() {
        assert(1 == 1); // nothing
        assert(0 == 3); // trace "Assert in Test::main"
      }
    }
```

## 🐥 Tracing Types
                                                               **Tracing Types**

`$type` is a **compile-time** mechanism that is called similarly to a function
with a single argument. The compiler evaluates the argument expression and
then outputs the type of that expression.

This is useful to evaluate if an expression has a certain type, mostly when
dealing with [Type inference], which leaves the definition of the type up to
the compiler.

```haxe
    var myValue = "foo";
    $type(myValue); // String
```


## 🐥 IDE Integration
                                                             **IDE Integration**
## 🐥 Debugging in JavaScript
                                                     **Debugging in JavaScript**
## 🐥 Source Maps
                                                                 **Source Maps**



# 🥚 Bullet Physics Tutorial
Bullet Real-Time Physics Simulation https://pybullet.org/
Bullet Physics SDK https://github.com/bulletphysics/bullet3
Bullet Collision Detection & Physics Library https://pybullet.org/Bullet/BulletFull/
Haxebullet https://lib.haxe.org/p/haxebullet/
Haxebullet - Bullet physics for Haxe https://github.com/luboslenco/haxebullet/
Bullet 3D Physics for Haxe https://github.com/armory3d/haxebullet

Bullet User Manual - Library Overview - Bullet Physics pipeline
https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf
https://github.com/bulletphysics/bullet3/blob/master/docs/BulletQuickstart.pdf
https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf
Bullet GPU Rigid Body Using OpenCL - Bullet Physics pipeline
https://github.com/bulletphysics/bullet3/blob/master/docs/GPU_rigidbody_using_OpenCL.pdf
https://github.com/bulletphysics/bullet3/blob/master/docs/pybullet_quickstartguide.pdf



# 🥚 Kha Tutorial
4. OpenGL Tutorial http://www.opengl-tutorial.org/
4. 3D Tutorials for Kha https://github.com/luboslenco/kha3d_examples/wiki

luboslenco kha3d_examples 教程提供 8 个示范程序，它们是按照 OpenGL Tutorial 的初级
教程示范程序编写的，主要是用于熟悉 OpenGL API 的编程，另外还有一系列中级教程内容。以下是
教程目录，以及相应教程逐步新增的 Kha 程序库引用：

    Basic OpenGL - Follow them in the right order !

    Tutorial 1 : Opening a window
                                        import kha.System;
                                        import kha.Framebuffer;
                                        import kha.Color;
    Tutorial 2 : The first triangle
                                        import kha.Shaders;
                                        import kha.graphics4.PipelineState;
                                        import kha.graphics4.VertexStructure;
                                        import kha.graphics4.VertexBuffer;
                                        import kha.graphics4.IndexBuffer;
                                        import kha.graphics4.FragmentShader;
                                        import kha.graphics4.VertexShader;
                                        import kha.graphics4.VertexData;
                                        import kha.graphics4.Usage;
    Tutorial 3 : Matrices
                                        import kha.graphics4.ConstantLocation;
                                        import kha.graphics4.CompareMode;
                                        import kha.math.FastMatrix4;
                                        import kha.math.FastVector3;
    Tutorial 4 : A Colored Cube
    Tutorial 5 : A Textured Cube
                                        import kha.Assets;
                                        import kha.Image;
                                        import kha.graphics4.TextureUnit;
    Tutorial 6 : Keyboard and Mouse
                                        import kha.Scheduler;
                                        import kha.input.Keyboard;
                                        import kha.input.Mouse;
                                        import kha.input.KeyCode;
    Tutorial 7 : Model loading
                                        import kha.graphics4.CullMode;
    Tutorial 8 : Basic shading

    Intermediate Tutorials - Follow them in any order !

    Tutorial 9  : VBO Indexing
    Tutorial 10 : Transparency
    Tutorial 11 : 2D text
    Tutorial 12 : OpenGL Extensions
    Tutorial 13 : Normal Mapping
    Tutorial 14 : Render To Texture
    Tutorial 15 : Lightmaps
    Tutorial 16 : Shadow mapping
    Tutorial 17 : Rotations
    Tutorial 18 : Billboards & Particles


## 🐥 Kha Tutorial: init

  * **Developer's Guide**
    * [Getting Started](https://github.com/Kode/Kha/wiki/Getting-Started)
      * [Examples](https://github.com/Kode/Kha/wiki/Examples)

使用 Kha 构建脚本工具创建项目模板，并执行编译，通过 Node 执行 Kha 安装目录下的 make.js 脚本。
以下演示在当前目录初始化一个项目模板，并编译输出 HTML5 平台运行的程序：

```sh
    >node.exe C:\HaxeToolkit\armsdk\Kha\make --init
    Initializing Kha project.

    If you want to use the git version of Kha, execute "git init"
    and "git submodule add https://github.com/Kode/Kha.git".

    # Compile or run executable
    > node C:\HaxeToolkit\armsdk\Kha\make --compile
    > node C:\HaxeToolkit\armsdk\Kha\make --run

    > node C:\HaxeToolkit\armsdk\Kha\make html5
    Creating Kha project.
    Compiling shader 1 of 8 (painter-colored.frag.glsl).
    Compiling shader 2 of 8 (painter-colored.vert.glsl).
    Compiling shader 3 of 8 (painter-image.frag.glsl).
    Compiling shader 4 of 8 (painter-image.vert.glsl).
    Compiling shader 5 of 8 (painter-text.frag.glsl).
    Compiling shader 6 of 8 (painter-text.vert.glsl).
    Compiling shader 7 of 8 (painter-video.frag.glsl).
    Compiling shader 8 of 8 (painter-video.vert.glsl).
    Done.

    >node.exe C:\HaxeToolkit\armsdk\Kha\make --server --port 80
    Running server on 80

    > tree.exe -f .
    .
    |-- ./Assets
    |-- ./Shaders
    |-- ./Sources
    |   `-- ./Sources/Main.hx
    `-- ./khafile.js
```

为了方便调用 Khamake，可以创建一个 kmake.bat 批处理文件：

    node.exe C:\HaxeToolkit\armsdk\Kha\make %*

模板只含有两个文件，一个构建脚本和一个 Haxe 脚本：

```js
    let project = new Project('New Project');
    project.addAssets('Assets/**');
    project.addShaders('Shaders/**');
    project.addSources('Sources');
    resolve(project);
```

游戏逻辑是入口类定义的 `main()` 方法调用 System `start()` 方法开启窗口，以及注册一个
帧重绘通知回调函数 `notifyOnFrames()`，向任务调度器 `Scheduler` 注册一个帧刷新回调函数，
`addTimeTask()`，整个游戏循环就在这两个回调方法之内完成：通过绘画方块组成一个 KHA Logo。
Kha 只提供一个 **Hardware Abstraction Layer (HAL)** 抽象层，以实跨平台开发，因此在
实际使用中还需要搭配更高一级的游戏抽象层使用，比如 Armory Iron。

```java,ignore
    package;

    import kha.Assets;
    import kha.Color;
    import kha.Framebuffer;
    import kha.Scheduler;
    import kha.System;

    class Main {
        static var logo = [
            "1 1 1 1 111", 
            "11  111 111",
            "1 1 1 1 1 1"];

        static function update(): Void {
        }

        static function render(frames: Array<Framebuffer>): Void {
            // As we are using only 1 window, grab the first framebuffer
            final fb = frames[0];
            // Now get the `g2` graphics object so we can draw
            final g2 = fb.g2;
            // Start drawing, and clear the framebuffer to `petrol`
            g2.begin(true, Color.fromBytes(0, 95, 106));
            // Offset all following drawing operations from the top-left a bit
            g2.pushTranslation(64, 64);
            // Fill the following rects with red
            g2.color = Color.Red;

            // Loop over the logo (Array<String>) and draw a rect for each "1"
            for (rowIndex in 0...logo.length) {
              final row = logo[rowIndex];

              for (colIndex in 0...row.length) {
                switch row.charAt(colIndex) {
                  case "1": g2.fillRect(colIndex * 16, rowIndex * 16, 16, 16);
                  case _:
                }
              }
            }

            // Pop the pushed translation so it will not accumulate over multiple frames
            g2.popTransformation();
            // Finish the drawing operations
            g2.end();
        }

        public static function main() {
            System.start({title: "Project", width: 1024, height: 768}, function (_) {
                // Just loading everything is ok for small projects
                Assets.loadEverything(function () {
                    // Avoid passing update/render directly,
                    // so replacing them via code injection works
                    Scheduler.addTimeTask(function () { update(); }, 0, 1 / 60);
                    System.notifyOnFrames(function (frames) { render(frames); });
                });
            });
        }
    }
```



## 🐥 Kha Tutorial: Opening a window

以下 Kha 程序显示打开一个窗口，什么内容也不绘制，只是用纯色填充窗口：

    tutorial01
    |-- Sources
    |   |-- Empty.hx
    |   `-- Main.hx
    `-- khafile.js

其它教程目录、程序结构基本类似，Main.hx 保持不变，只用来开户窗口，主逻辑在 Empty.hx 类文件。
根据教程涉及的内容不同，会有 Assets 或者 Shaders 目录加入，分别保存图像、模型或着色器程序。
构建脚本 khafile.js 也相应调整，但基本内容保持不变。

Tutorial 01 构建脚本内容如下，新版本 Kha 使用 resolve(proejct) 替换旧版的 return 语句。

```js
    let project = new Project('Empty');
    project.addSources('Sources');
    resolve(project);
```

Windows 平台可以使用以下命令编译并执行这个程序，Linux 等平台用 opengl 替换 direct3d：

    #===============================================================
    cd C:\HaxeToolkit\kha3d_examples\tutorial02\
    node.exe C:\HaxeToolkit\armsdk\Kha\make krom --ffmpeg ffmpeg.exe -g direct3d11
    haderversion 330 --parallelAssetConversion 4 --to build\debug --quiet
    Krom.exe build\debug\krom build\debug\krom-resources

为了方便，将 Empty.hx 代码文件整合到 Main.hx 内，原文件可以保留，Kha 编译时不到产生冲突。
主类目的就是实例化游戏逻辑，调用 System 方法注册帧渲染处理函数：

    kha.System.start({title: "Empty", width: 640, height: 480}, init);
    kha.System.notifyOnFrames(game.render);

```haxe
    package;

    import kha.System;
    import kha.Framebuffer;
    import kha.Color;

    class Empty {

        public function new() {  /* ... */  }

        public function render(frames:Array<Framebuffer>) {
            // A graphics object which lets us perform 3D operations
            var g = frames[0].g4;

            // Begin rendering
        g.begin();

        // Clear screen to blue
            g.clear(Color.Blue);

            // End rendering
            g.end();
        }
    }

    class Main {

        public static function main() {
            System.start({title: "Empty", width: 640, height: 480}, init);
        }

        static function init(_) {
            var game = new Empty();
            System.notifyOnFrames(game.render);
        }
    }
```

## 🐥 Kha Tutorial: The first triangle

以下程序演示如何使用 Kha 加载 OpenGL 着色器程序。在构造函数 new() 中加载着色器程序，
Haxe 将类型实例化时就会调用 new() 方法。整个流程和直接使用 OpenGL API 非常相似，
并且，面向对象的抽象中，使用 PipelineState 表示渲染管道，使得 Kha 更容易使用。

    tutorial02
    |-- Sources
    |   |-- Empty.hx
    |   |-- Main.hx
    |   `-- Shaders
    |       |-- simple.frag.glsl
    |       `-- simple.vert.glsl
    |-- khafile.js


着色器程序通过 kha.Shaders 访问，但在此之前需要在构建脚本中调用 addShaders() 方法
将着色器代码文件引入到构建程序中。着色器使用 .glsl 扩展名，而文件名将定义为 kha.Shaders
空间下的相应的符号，只是句点会以下划线替替代，换成合法的标识符。

```js
    let project = new Project('Empty');

    project.addSources('Sources');
    project.addShaders('Sources/Shaders/**');

    resolve(project);
```

简化的顶点着色器与片段着色器代码参考：

```glsl
    // simple.vert.glsl
    #version 450

    // Input vertex data, different for all executions of this shader
    in vec3 pos;

    void main() {
        // Just output position
        gl_Position = vec4(pos, 1.0);
    }

    // simple.frag.glsl
    #version 450

    out vec4 fragColor;

    void main() {
        // Just output red color
        fragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
```

Empty.hx 代码参考：

```haxe
package;

import kha.Framebuffer;
import kha.Color;
import kha.Shaders;
import kha.graphics4.PipelineState;
import kha.graphics4.VertexStructure;
import kha.graphics4.VertexBuffer;
import kha.graphics4.IndexBuffer;
import kha.graphics4.FragmentShader;
import kha.graphics4.VertexShader;
import kha.graphics4.VertexData;
import kha.graphics4.Usage;

class Empty {

    // An array of 3 vectors representing 3 vertices to form a triangle
    static var vertices:Array<Float> = [
       -1.0, -1.0, 0.0, // Bottom-left
        1.0, -1.0, 0.0, // Bottom-right
        0.0,  1.0, 0.0  // Top
    ];
    // Indices for our triangle, these will point to vertices above
    static var indices:Array<Int> = [
        0, // Bottom-left
        1, // Bottom-right
        2  // Top
    ];

    var vertexBuffer:VertexBuffer;
    var indexBuffer:IndexBuffer;
    var pipeline:PipelineState;

    public function new() {
        // Define vertex structure
        var structure = new VertexStructure();
        structure.add("pos", VertexData.Float3);
        // Save length - we only store position in vertices for now
        // Eventually there will be texture coords, normals,...
        var structureLength = 3;

        // Compile pipeline state
        // Shaders are located in 'Sources/Shaders' directory
        // and Kha includes them automatically
        pipeline = new PipelineState();
        pipeline.inputLayout = [structure];
        pipeline.fragmentShader = Shaders.simple_frag;
        pipeline.vertexShader = Shaders.simple_vert;
        pipeline.colorAttachmentCount = 1;
        pipeline.colorAttachments[0] = kha.graphics4.TextureFormat.RGBA32;
        pipeline.depthStencilAttachment = kha.graphics4.DepthStencilFormat.Depth16;
        pipeline.compile();

        // Create vertex buffer
        vertexBuffer = new VertexBuffer(
            Std.int(vertices.length / 3), // Vertex count - 3 floats per vertex
            structure, // Vertex structure
            Usage.StaticUsage // Vertex data will stay the same
        );

        // Copy vertices to vertex buffer
        var vbData = vertexBuffer.lock();
        for (i in 0...vbData.length) {
            vbData.set(i, vertices[i]);
        }
        vertexBuffer.unlock();

        // Create index buffer
        indexBuffer = new IndexBuffer(
            indices.length, // 3 indices for our triangle
            Usage.StaticUsage // Index data will stay the same
        );

        // Copy indices to index buffer
        var iData = indexBuffer.lock();
        for (i in 0...iData.length) {
            iData[i] = indices[i];
        }
        indexBuffer.unlock();
    }

    public function render(frames:Array<Framebuffer>) {
        // A graphics object which lets us perform 3D operations
        var g = frames[0].g4;

        // Begin rendering
        g.begin();

        // Clear screen to black
        g.clear(Color.Black);

        // Bind state we want to draw with
        g.setPipeline(pipeline);

        // Bind data we want to draw
        g.setVertexBuffer(vertexBuffer);
        g.setIndexBuffer(indexBuffer);

        // Draw!
        g.drawIndexedVertices();

        // End rendering
        g.end();
    }
}
```

## 🐥 Kha Tutorial: Matrices
4. OpenGL Tutorial http://www.opengl-tutorial.org/
4. 3D Tutorials for Kha https://github.com/luboslenco/kha3d_examples/wiki

以下程序演示如何使用 Kha 加载 OpenGL 着色器程序，还是使用与上一例同样的三角形数据。
在构造函数 new() 中加载着色器程序，只是调用观察视角，同时片段着色器中也相应修改以
使用 MVP 投射矩阵的设置。

    tutorial03
    |-- Sources
    |   |-- Empty.hx
    |   |-- Main.hx
    |   `-- Shaders
    |       |-- simple.frag.glsl
    |       `-- simple.vert.glsl
    `-- khafile.js

着色器代码与前上一例基本一致，就是片段着色器中使用 MVP 矩阵变换几何体的位置，这个过程相当于
移动相机的位置，使得成像角度变化而带来画面的变化。GPU 渲染管道中的着色器程序的分阶段，每个阶段
都对应一类着色器，顶点着色器对所有顶点并行地执行处理，经过处理后的顶点又成为后续的片段着色器
的数据，但是在不同的着色器之间传递数据有不同的试。uniform 和 varying 是两最基本的两种形式，
uniform 表示在整个渲染管道的执行流程中不变的数据，而 varying 即如其名表示会改变的数据。

```glsl
    #version 450

    // Input vertex data, different for all executions of this shader
    in vec3 pos;

    // Values that stay constant for the whole mesh
    uniform mat4 MVP;

    void main() {
        // Output position of the vertex, in clip space : MVP * position
        gl_Position = MVP * vec4(pos, 1.0);
    }
```

```haxe
    package;

    import kha.Framebuffer;
    import kha.Color;
    import kha.Shaders;
    import kha.graphics4.PipelineState;
    import kha.graphics4.VertexStructure;
    import kha.graphics4.VertexBuffer;
    import kha.graphics4.IndexBuffer;
    import kha.graphics4.FragmentShader;
    import kha.graphics4.VertexShader;
    import kha.graphics4.VertexData;
    import kha.graphics4.Usage;
    import kha.graphics4.ConstantLocation;
    import kha.math.FastMatrix4;
    import kha.math.FastVector3;

    class Empty {

        // An array of 3 vectors representing 3 vertices to form a triangle
        static var vertices:Array<Float> = [
           -1.0, -1.0, 0.0, // Bottom-left
            1.0, -1.0, 0.0, // Bottom-right
            0.0,  1.0, 0.0  // Top
        ];
        // Indices for our triangle, these will point to vertices above
        static var indices:Array<Int> = [
            0, // Bottom-left
            1, // Bottom-right
            2  // Top
        ];

        var vertexBuffer:VertexBuffer;
        var indexBuffer:IndexBuffer;
        var pipeline:PipelineState;

        var mvp:FastMatrix4;
        var mvpID:ConstantLocation;

        public function new() {
            // Define vertex structure
            var structure = new VertexStructure();
            structure.add("pos", VertexData.Float3);
            // Save length - we only store position in vertices for now
            // Eventually there will be texture coords, normals,...
            var structureLength = 3;

            // Compile pipeline state
            // Shaders are located in 'Sources/Shaders' directory
            // and Kha includes them automatically
            pipeline = new PipelineState();
            pipeline.inputLayout = [structure];
            pipeline.fragmentShader = Shaders.simple_frag;
            pipeline.vertexShader = Shaders.simple_vert;
            pipeline.colorAttachmentCount = 1;
            pipeline.colorAttachments[0] = kha.graphics4.TextureFormat.RGBA32;
            pipeline.depthStencilAttachment = kha.graphics4.DepthStencilFormat.Depth16;
            pipeline.compile();

            // Get a handle for our "MVP" uniform
            mvpID = pipeline.getConstantLocation("MVP");

            // Projection matrix: 45° Field of View, 4:3 ratio, display range : 0.1 unit <-> 100 units
            var projection = FastMatrix4.perspectiveProjection(45.0, 4.0 / 3.0, 0.1, 100.0);
            // Or, for an ortho camera
            //var projection = FastMatrix4.orthogonalProjection(-10.0, 10.0, -10.0, 10.0, 0.0, 100.0); // In world coordinates

            // Camera matrix
            var view = FastMatrix4.lookAt(new FastVector3(4, 3, 3), // Camera is at (4, 3, 3), in World Space
                                      new FastVector3(0, 0, 0), // and looks at the origin
                                      new FastVector3(0, 1, 0) // Head is up (set to (0, -1, 0) to look upside-down)
            );

            // Model matrix: an identity matrix (model will be at the origin)
            var model = FastMatrix4.identity();
            // Our ModelViewProjection: multiplication of our 3 matrices
            // Remember, matrix multiplication is the other way around
            mvp = FastMatrix4.identity();
            mvp = mvp.multmat(projection);
            mvp = mvp.multmat(view);
            mvp = mvp.multmat(model);

            // Create vertex buffer
            vertexBuffer = new VertexBuffer(
                Std.int(vertices.length / 3), // Vertex count - 3 floats per vertex
                structure, // Vertex structure
                Usage.StaticUsage // Vertex data will stay the same
            );

            // Copy vertices to vertex buffer
            var vbData = vertexBuffer.lock();
            for (i in 0...vbData.length) {
                vbData.set(i, vertices[i]);
            }
            vertexBuffer.unlock();

            // Create index buffer
            indexBuffer = new IndexBuffer(
                indices.length, // 3 indices for our triangle
                Usage.StaticUsage // Index data will stay the same
            );

            // Copy indices to index buffer
            var iData = indexBuffer.lock();
            for (i in 0...iData.length) {
                iData[i] = indices[i];
            }
            indexBuffer.unlock();
        }

        public function render(frames:Array<Framebuffer>) {
            // A graphics object which lets us perform 3D operations
            var g = frames[0].g4;

            // Begin rendering
            g.begin();

            // Clear screen
            g.clear(Color.fromFloats(0.0, 0.0, 0.3));

            // Bind data we want to draw
            g.setVertexBuffer(vertexBuffer);
            g.setIndexBuffer(indexBuffer);

            // Bind state we want to draw with
            g.setPipeline(pipeline);

            // Send our transformation to the currently bound shader, in the "MVP" uniform
            g.setMatrix(mvpID, mvp);

            // Draw!
            g.drawIndexedVertices();

            // End rendering
            g.end();
        }
    }
```

## 🐥 Kha Tutorial: A Colored Cube

    tutorial04
    |-- Sources
    |   |-- Empty.hx
    |   |-- Main.hx
    |   `-- Shaders
    |       |-- simple.frag.glsl
    |       `-- simple.vert.glsl
    `-- khafile.js

## 🐥 Kha Tutorial: A Textured Cube

    tutorial05
    |-- Assets
    |   `-- uvtemplate.png
    |-- Sources
    |   |-- Empty.hx
    |   |-- Main.hx
    |   `-- Shaders
    |       |-- simple.frag.glsl
    |       `-- simple.vert.glsl
    `-- khafile.js

## 🐥 Kha Tutorial: Keyboard and Mouse

    tutorial06
    |-- Assets
    |   `-- uvtemplate.png
    |-- Sources
    |   |-- Empty.hx
    |   |-- Main.hx
    |   `-- Shaders
    |       |-- simple.frag.glsl
    |       `-- simple.vert.glsl
    `-- khafile.js

## 🐥 Kha Tutorial: Model loading

    tutorial07
    |-- Assets
    |   |-- cube.obj
    |   `-- uvmap.png
    |-- Sources
    |   |-- Empty.hx
    |   |-- Main.hx
    |   |-- ObjLoader.hx
    |   `-- Shaders
    |       |-- simple.frag.glsl
    |       `-- simple.vert.glsl
    `-- khafile.js

## 🐥 Kha Tutorial: Basic shading

    tutorial08
    |-- Assets
    |   |-- suzanne.obj
    |   `-- uvmap.png
    |-- Sources
    |   |-- Empty.hx
    |   |-- Main.hx
    |   |-- ObjLoader.hx
    |   `-- Shaders
    |       |-- simple.frag.glsl
    |       `-- simple.vert.glsl
    `-- khafile.js



# 🥚 Kha Wiki

Clone this wiki locally

    git clone https://github.com/Kode/Kha.wiki.git
    git clone https://github.com/luboslenco/kha3d_examples.wiki.git

Kha is a low level SDK for building games and media applications in a
portable way, based on Haxe and GLSL.

  * **Developer's Guide**
    * [Introduction](https://github.com/Kode/Kha/wiki/Introduction)
      * [Features](https://github.com/Kode/Kha/wiki/Features)
      * [Feature Matrix](https://github.com/Kode/Kha/wiki/Feature-Matrix)
      * [Community](https://github.com/Kode/Kha/wiki/Community)
      * [Games Built With Kha](https://github.com/Kode/Kha/wiki/Games-Built-With-Kha)
      * [Engines using Kha](https://github.com/Kode/Kha/wiki/Engines-using-Kha)
    * [Getting Started](https://github.com/Kode/Kha/wiki/Getting-Started)
      * [Setting Up an IDE or Editor](https://github.com/Kode/Kha/wiki/Setting-Up-an-IDE-or-Editor)
      * [Examples](https://github.com/Kode/Kha/wiki/Examples)
      * [Tutorials](https://github.com/Kode/Kha/wiki/Tutorials)
      * [khafile.js](https://github.com/Kode/Kha/wiki/khafile.js)
      * [Third Party Libraries|Libraries](https://github.com/Kode/Kha/wiki/Third-Party-Libraries|Libraries)
      * [System Defines](https://github.com/Kode/Kha/wiki/System-Defines)
      * [Profiling](https://github.com/Kode/Kha/wiki/Profiling)
      * [Managing Your Assets](https://github.com/Kode/Kha/wiki/Managing-Your-Assets)
    * [Breaking Changes](https://github.com/Kode/Kha/wiki/Breaking-Changes)
    * [Feature Tests](https://github.com/Kode/Kha/wiki/Feature-Tests)
    * [FAQ](https://github.com/Kode/Kha/wiki/FAQ)
    * **System targets**
      * [HTML5](https://github.com/Kode/Kha/wiki/HTML5)
      * [HTML5 (native)](https://github.com/Kode/Kha/wiki/HTML5-%28native%29)
      * [HTML5 Worker](https://github.com/Kode/Kha/wiki/HTML5-Worker)
      * [Windows](https://github.com/Kode/Kha/wiki/Windows)
      * [Windows Universal](https://github.com/Kode/Kha/wiki/Windows-Universal)
      * [OS X](https://github.com/Kode/Kha/wiki/OS-X)
      * [Linux](https://github.com/Kode/Kha/wiki/Linux)
      * [Android](https://github.com/Kode/Kha/wiki/Android)
      * [Android (native)](https://github.com/Kode/Kha/wiki/Android-%28native%29)
      * [iOS](https://github.com/Kode/Kha/wiki/iOS)
      * [Hashlink](https://github.com/Kode/Kha/wiki/Hashlink)
      * [Raspberry Pi](https://github.com/Kode/Kha/wiki/Raspberry-Pi)
      * [Tizen](https://github.com/Kode/Kha/wiki/Tizen)
      * [node.js](https://github.com/Kode/Kha/wiki/node.js)
      * [Unity](https://github.com/Kode/Kha/wiki/Unity)
      * [PlayStation Mobile](https://github.com/Kode/Kha/wiki/PlayStation-Mobile)
      * [Java](https://github.com/Kode/Kha/wiki/Java)
      * [WPF](https://github.com/Kode/Kha/wiki/WPF)
    * **Graphics targets**
      * [Vulkan](https://github.com/Kode/Kha/wiki/Vulkan)
      * [Direct3D 9](https://github.com/Kode/Kha/wiki/Direct3D-9)
      * [Direct3D 11](https://github.com/Kode/Kha/wiki/Direct3D-11)
      * [Direct3D 12](https://github.com/Kode/Kha/wiki/Direct3D-12)
      * [Metal](https://github.com/Kode/Kha/wiki/Metal)
      * [OpenGL](https://github.com/Kode/Kha/wiki/OpenGL)
      * [WebGL](https://github.com/Kode/Kha/wiki/WebGL)
      * [Canvas](https://github.com/Kode/Kha/wiki/Canvas)
      * [Stage3D](https://github.com/Kode/Kha/wiki/Stage3D)
    * [Documentation])(http://api.kha.tech)
    * [API package descriptions](https://github.com/Kode/Kha/wiki/APIs)
      * [kha](https://github.com/Kode/Kha/wiki/kha)
      * [kha.audio1](https://github.com/Kode/Kha/wiki/kha.audio1)
      * [kha.audio2](https://github.com/Kode/Kha/wiki/kha.audio2)
      * [kha.graphics1](https://github.com/Kode/Kha/wiki/kha.graphics1)
      * [kha.graphics2](https://github.com/Kode/Kha/wiki/kha.graphics2)
      * [kha.graphics3](https://github.com/Kode/Kha/wiki/kha.graphics3)
      * [kha.graphics4](https://github.com/Kode/Kha/wiki/kha.graphics4)
      * [kha.input](https://github.com/Kode/Kha/wiki/kha.input)
      * [kha.math](https://github.com/Kode/Kha/wiki/kha.math)
      * [kha.network](https://github.com/Kode/Kha/wiki/kha.network)
      * [kha.simd](https://github.com/Kode/Kha/wiki/kha.simd)
      * [kha.vr](https://github.com/Kode/Kha/wiki/kha.vr)

## 🎨 Getting Started
                                                                **Kha Exampels**
    * [Getting Started](https://github.com/Kode/Kha/wiki/Getting-Started)

Download Kha using git

The get_dlc-script downloads the required binary tools for your current system
which are setup as git-submodules in the Kha/Tools-directory and the
Kha/Kinc/Tools-directory. Be aware that when you use `git clone --recursive`
this will download all tools for all operating systems and CPU-types which
works fine, too but results in a very big download.

When using Windows and the Direct3D9 (by default it uses a Direct3D11 backend)
you will eventually have to install Microsoft's dxwebsetup.exe. This is included
in Kha's Kore/Tools/krafix subdirectory.

As with Visual Studio Code it is recommended to use a Kha-subdirectory in each
Kha-project. You can use a Git-submodule to do this and thereby make the
versioning of your project and its dependencies very robust:

```bash
git submodule add https://github.com/Kode/Kha
git submodule update --init
Kha/get_dlc
```

You can also clone the [Empty project](https://github.com/Kha-Samples/Empty)
and start from it - but make sure to update Kha afterwards like so:

```bash
git clone https://github.com/Kha-Samples/Empty.git
git submodule update --init
Kha/get_dlc
```

If you want to update Kha follow this procedure:

```sh
cd Kha
git pull origin main
get_dlc
```

You can alternatively update each submodule to the latest commit on its
respective branch:

```sh
cd Kha
git pull origin main
get_dlc_dangerously
```

## 🎨 Kha Exampels
                                                                **Kha Exampels**
      * [Examples](https://github.com/Kode/Kha/wiki/Examples)

Kha has several samples available for you to try!

The git urls are as follows:
* [3D example](https://github.com/Kha-Samples/MeshLoader.git)
* [Blocks From Heaven](https://github.com/Kha-Samples/BlocksFromHeaven.git)
* [Shader](https://github.com/Kha-Samples/Shader.git)
* [Ploing](https://github.com/Kha-Samples/Ploing.git)
* [TPlayer](https://github.com/Kha-Samples/TPlayer.git)
* [Velvet Worm](https://github.com/Kha-Samples/VelvetWorm.git)
* [Kario mario clone](http://kodegarden.org/#f47edee824f342b2019a5b8bed43a22c0066b477)

`git clone --recursive` one of the projects or if you want a fresh start, type:

`git clone --recursive https://github.com/Kha-Samples/Empty.git`

A complete clone can take a while, because it contains the complete source history of all used libraries. You can omit the history by adding the `--depth=1` parameter.

Navigate to the directory and execute `node Kha/make html5`. This will create project files for different IDEs in a build subdirectory. Then call `node Kha/make --server` and navigate to localhost in your browser to see your application running. Development is usually done in HTML5 due to the fast build times which can be achieved that way. When everything is done, call khamake again with a different parameter to build your project for a different system.

To build from the command line, you can run `node Kha/make --compile` (compiles only) or `node Kha/make --run` to build and run.

Currently supported parameters for khamake are:

| * krom            | * android           | * html5worker     | * unity
| * windows         | * android-native    | * flash           | * node
| * windowsapp      | * xbox360           | * wpf             | * debug-html5
| * ps3             | * linux             | * java            | * empty
| * ios             | * html5             | * psm             | * pi
| * osx             | * html5-native      | * tizen           | * tvos

If you are not building for html5 or flash, a separate system-build directory will be created inside the build subdirectory, containing the translated sources and a project for the native IDE of the target (Visual Studio, XCode, Code::Blocks or Eclipse respectively).

khamake tries to encode all assets for you automatically but due to the mp3 and aac patent restrictions those encoders are not included. To let khamake use external encoders for that job, call it like this:

`node Kha/make flash --ffmpeg "/path/to/ffmpeg.exe"`


# 🥚 Armory Tutorials
09. https://github.com/armory3d/armory_examples
13. https://github.com/armory3d/armory_tutorials
00. https://armory3d.github.io/armory_examples_browser/
00. [Armory manual](https://github.com/armory3d/armory/wiki)

Armory3D 官方提供两组教程，其一 Armory Tutorials 是 Armory SDK 入门教程。

另外一个：Armory Example Projects 是一个更全面的示范项目，并且提供在线体能，特点如下：

01. Demonstrate a single feature
02. Keep your assets as small as possible
03. Save the project into a directory with the same name as the main .blend file.
04. Prefix the project name with the category (logic_, light_, render_, ui_, ...)
05. Add a <project>/README.md describing the project
06. If the README.md includes usage instructions (like: keybindings) link it as text file into blenders Text Editor.
07. Remove any orphaned data from your blend file

官方提供的 Armory Examples Browser 项目就是一个 Haxe Web 应用，配置中就调用了自定义宏。
当然，Haxe 开发 Web 应用，体验上远不及 React/Vue/Angular 等更现代的组件式 Web 开发框架。
Haxe 提供的 js 模块设计上相当于 jQuery 时代的水平，需要调用 Document API 构建 HTML。
[Armory3D Examples Browser](https://armory3d.github.io/armory_examples_browser/)

```sh
# Clone this repository
git clone https://github.com/armory3d/armory_examples_browser.git
cd armory_examples_browser/

# Clone project repositories
git clone https://github.com/armory3d/armory_examples.git
git clone https://github.com/armory3d/armory_templates.git
git clone https://github.com/armory3d/armory_tutorials.git

haxe build-examples.hxml
haxe build-templates.hxml
haxe build-tutorials.hxml

# Build application
haxelib install build.hxml
haxe build.hxml
```

01. → https://github.com/armory3d/armory_tutorials
02. → https://github.com/armory3d/armory_templates
03. → https://github.com/armory3d/armory_examples
04. → https://github.com/armory3d/armory
05. → https://github.com/armory3d/Kha
06. → https://github.com/armory3d/iron
07. → https://github.com/armory3d/armory2d
08. → https://github.com/armory3d/haxebullet
09. → https://github.com/armory3d/haxerecast
10. → https://github.com/armory3d/zui
11. → https://github.com/armory3d/armory_examples_browser
12. → https://armory3d.org


## 🐥 Armory Tutorials: material_tesselation

    |-- _material_tesselation
    |   |-- README.md
    |   `-- material_tessellation.blend

## 🐥 Armory Tutorials: vr_dino

    |-- _vr_dino
    |   `-- vr_dino.blend

## 🐥 Armory Tutorials: animation_actions

    |-- animation_actions
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- ActionPlayer.hx
    |   `-- animation_actions.blend

## 🐥 Armory Tutorials: animation_blend

    |-- animation_blend
    |   |-- Bundled
    |   |   `-- canvas
    |   |       |-- MyCanvas.files
    |   |       |-- MyCanvas.json
    |   |       `-- _themes.json
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- animation_blend.blend

## 🐥 Armory Tutorials: animation_bonechild

    |-- animation_bonechild
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- SwapWeapon.hx
    |   `-- animation_bonechild.blend

## 🐥 Armory Tutorials: animation_instanced

    |-- animation_instanced
    |   |-- README.md
    |   `-- animation_instanced.blend

## 🐥 Armory Tutorials: animation_movebone

    |-- animation_movebone
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- MoveBoneFK.hx
    |   |       `-- MoveBoneIK.hx
    |   `-- animation_movebone.blend

## 🐥 Armory Tutorials: animation_timeline

    |-- animation_timeline
    |   `-- animation_timeline.blend

## 🐥 Armory Tutorials: animation_uv

    |-- animation_uv
    |   `-- animation_uv.blend

## 🐥 Armory Tutorials: call_hx

    |-- call_hx
    |   |-- Bundled
    |   |   `-- my_plugin.js
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- EvalJS.hx
    |   |       `-- Plugin.hx
    |   `-- call_hx.blend

## 🐥 Armory Tutorials: call_js

    |-- call_js
    |   |-- README.md
    |   |-- Sources
    |   |   |-- Main.hx
    |   |   `-- arm
    |   |       `-- CallJS.hx
    |   |-- call_js.blend
    |   `-- khafile.js

## 🐥 Armory Tutorials: debug_draw

    |-- debug_draw
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- debug_draw.blend

## 🐥 Armory Tutorials: dev_logicnode

    |-- dev_logicnode
    |   |-- Libraries
    |   |   `-- mynodes
    |   |       |-- Sources
    |   |       |   `-- armory
    |   |       |       `-- logicnode
    |   |       |           `-- TestNode.hx
    |   |       `-- blender.py
    |   `-- dev_logicnode.blend

## 🐥 Armory Tutorials: ease

    |-- ease
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- TweenTest.hx
    |   `-- ease.blend

## 🐥 Armory Tutorials: file_read file_storage file_write

    |-- file_read
    |   |-- Bundled
    |   |   |-- canvas
    |   |   |   |-- MyCanvas.files
    |   |   |   |-- MyCanvas.json
    |   |   |   `-- _themes.json
    |   |   `-- my_file.json
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- ReadFile.hx
    |   `-- file_read.blend
    |-- file_storage
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- StorageTest.hx
    |   `-- file_storage.blend
    |-- file_write
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- WriteFile.hx
    |   `-- file_write.blend


## 🐥 Armory Tutorials: game_bowling

    |-- game_bowling
    |   |-- Assets
    |   |   |-- floor_base.jpg
    |   |   |-- floor_nor.jpg
    |   |   |-- floor_occ.jpg
    |   |   |-- floor_rough.jpg
    |   |   |-- keys.png
    |   |   |-- menu.jpg
    |   |   |-- roll.wav
    |   |   |-- strike.wav
    |   |   |-- ui_exit.png
    |   |   |-- ui_play.png
    |   |   `-- ui_refresh.png
    |   |-- Bundled
    |   |   `-- canvas
    |   |       |-- GameCanvas.files
    |   |       |-- GameCanvas.json
    |   |       |-- MenuCanvas.files
    |   |       |-- MenuCanvas.json
    |   |       `-- _themes.json
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- BallTrait.hx
    |   |       `-- PinTrait.hx
    |   |-- game_bowling.blend
    |   |-- pin.blend
    |   `-- textures
    |       `-- bowling.jpg

## 🐥 Armory Tutorials: game_endlessrun

    |-- game_endlessrun
    |   |-- Bundled
    |   |   `-- canvas
    |   |       |-- MyCanvas.files
    |   |       `-- MyCanvas.json
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- GemTrait.hx
    |   |       |-- PlayerController.hx
    |   |       `-- SceneBuilder.hx
    |   |-- game_endless.blend
    |   `-- grid.png

## 🐥 Armory Tutorials: graphics_settings

    |-- graphics_settings
    |   |-- Bundled
    |   |   |-- canvas
    |   |   |   |-- MyCanvas.files
    |   |   |   `-- MyCanvas.json
    |   |   `-- config.arm
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- graphics_settings.blend

- WIP, see attached MyTrait script (scene traits)
- To generate config.arm file, enable `Armory Project - Write Config`

https://api.armory3d.org/armory/data/Config.html
armsdk\armory\Sources\armory\data\Config.hx

注意，`Config` 保存与读取的路径不一定对应，保存路径相对于程序当前工作目录，而读取是工程打包目录。

```haxe
    package armory.data;

    class Config {

        public static var raw: TConfig = null;
        public static var configLoaded = false;

        public static function load(done: Void->Void) {
            try {
                iron.data.Data.getBlob("config.arm", function(blob: kha.Blob) {
                    configLoaded = true;
                    raw = haxe.Json.parse(blob.toString());
                    done();
                });
            }
            catch (e: Dynamic) { done(); }
        }

        public static function save() {
            var path = iron.data.Data.dataPath + "config.arm";
            var bytes = haxe.io.Bytes.ofString(haxe.Json.stringify(raw));
            #if kha_krom
            Krom.fileSaveBytes(path, bytes.getData());
            #elseif kha_kore
            sys.io.File.saveBytes(path, bytes);
            #end
        }

        // public static function reset() {}
    }
```


## 🐥 Armory Tutorials: input_mouselock

    |-- input_mouselock
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- LockTrait.hx
    |   `-- input_mouselock.blend

## 🐥 Armory Tutorials: input_multitouch

    |-- input_multitouch
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- TouchTrait.hx
    |   `-- input_multitouch.blend

## 🐥 Armory Tutorials: input_sensor

    |-- input_sensor
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- SensorTrait.hx
    |   `-- input_sensor.blend

## 🐥 Armory Tutorials: instancing

    |-- instancing
    |   |-- README.md
    |   `-- instancing.blend

## 🐥 Armory Tutorials: light_area

    |-- light_area
    |   |-- checker.png
    |   |-- checker_rough.png
    |   `-- light_area.blend

## 🐥 Armory Tutorials: light_ies

    |-- light_ies
    |   |-- Bundled
    |   |   |-- iestexture.png
    |   |   |-- iestexture2.png
    |   |   `-- iestexture3.png
    |   `-- light_ies.blend

## 🐥 Armory Tutorials: light_probes

    |-- light_probes
    |   `-- light_probes.blend

## 🐥 Armory Tutorials: light_probes_cubemap

    |-- light_probes_cubemap
    |   `-- light_probes_cubemap.blend

## 🐥 Armory Tutorials: light_probes_plane

    |-- light_probes_plane
    |   `-- light_probes_plane.blend

## 🐥 Armory Tutorials: light_volumetric

    |-- light_volumetric
    |   |-- README.md
    |   `-- light_volumetric.blend

## 🐥 Armory Tutorials: linked_proxy

    |-- linked_proxy
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- Cube.hx
    |   |-- blue_cube.blend
    |   |-- green_cube.blend
    |   |-- linked_proxy.blend
    |   `-- white-cube.blend

## 🐥 Armory Tutorials: load_screen

    |-- load_screen
    |   |-- Bundled
    |   |   `-- bunny.png
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- LoadingScreen.hx
    |   `-- load_screen.blend

## 🐥 Armory Tutorials: lod

    |-- lod
    |   |-- README.md
    |   `-- lod.blend


## 🐥 Armory Tutorials: logic_callgroup

    |-- logic_callgroup
    |   |-- Bundled
    |   |   `-- canvas
    |   |       |-- MyCanvas.files
    |   |       `-- MyCanvas.json
    |   |-- README.md
    |   `-- logic_callgroup.blend

## 🐥 Armory Tutorials: logic_camera_pan

    |-- logic_camera_pan
    |   `-- logic_camera_pan.blend

## 🐥 Armory Tutorials: logic_camera_zoom

    |-- logic_camera_zoom
    |   `-- logic_camera_zoom.blend

## 🐥 Armory Tutorials: logic_canvas

    |-- logic_canvas
    |   |-- Assets
    |   |   |-- background.png
    |   |   `-- charactor.png
    |   |-- Bundled
    |   |   `-- canvas
    |   |       |-- MyCanvas.files
    |   |       |-- MyCanvas.json
    |   |       `-- _themes.json
    |   `-- logic_canvas.blend

## 🐥 Armory Tutorials: logic_event_fromhaxe

    |-- logic_event_fromhaxe
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- SendEvent.hx
    |   `-- logic_event_fromhaxe.blend

## 🐥 Armory Tutorials: logic_event_global

    |-- logic_event_global
    |   `-- logic_event_global.blend

## 🐥 Armory Tutorials: logic_event_object

    |-- logic_event_object
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- SendEvent.hx
    |   `-- logic_event_object.blend

## 🐥 Armory Tutorials: logic_gamepad

    |-- logic_gamepad
    |   |-- Bundled
    |   |   `-- canvas
    |   |       |-- MyCanvas.files
    |   |       `-- MyCanvas.json
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- VirtualGamepad.hx
    |   `-- logic_gamepad.blend

## 🐥 Armory Tutorials: logic_gate

    |-- logic_gate
    |   |-- checker.png
    |   |-- checker_rough.png
    |   `-- logic_gate.blend

## 🐥 Armory Tutorials: logic_get_contacts

    |-- logic_get_contacts
    |   `-- logic_get_contacts.blend

## 🐥 Armory Tutorials: logic_keyboard

    |-- logic_keyboard
    |   `-- logic_keyboard.blend

## 🐥 Armory Tutorials: logic_linked_variable

    |-- logic_linked_variable
    |   `-- logic_linked_variable.blend

## 🐥 Armory Tutorials: logic_loadurl

    |-- logic_loadurl
    |   `-- logic_loadurl.blend

## 🐥 Armory Tutorials: logic_mouselock

    |-- logic_mouselock
    |   `-- logic_mouselock.blend

## 🐥 Armory Tutorials: logic_object_rotate

    |-- logic_object_rotate
    |   |-- README.md
    |   `-- logic_object_rotate.blend

## 🐥 Armory Tutorials: logic_object_scale

    |-- logic_object_scale
    |   |-- README.md
    |   `-- logic_object_scale.blend

## 🐥 Armory Tutorials: logic_object_translate

    |-- logic_object_translate
    |   |-- README.md
    |   `-- logic_object_translate.blend

## 🐥 Armory Tutorials: logic_pause_trait

    |-- logic_pause_trait
    |   |-- README.md
    |   `-- logic_pause_trait.blend

## 🐥 Armory Tutorials: logic_pong

    |-- logic_pong
    |   |-- checker.png
    |   |-- checker_rough.png
    |   `-- logic_pong.blend

## 🐥 Armory Tutorials: logic_scenes

    |-- logic_scenes
    |   |-- README.md
    |   `-- logic_scenes.blend

## 🐥 Armory Tutorials: logic_scenetree

    |-- logic_scenetree
    |   |-- README.md
    |   `-- logic_scenetree.blend

## 🐥 Armory Tutorials: logic_script

    |-- logic_script
    |   `-- logic_script.blend

## 🐥 Armory Tutorials: logic_set_property

    |-- logic_set_property
    |   |-- README.md
    |   `-- logic_set_property.blend

## 🐥 Armory Tutorials: logic_toy_car

    |-- logic_toy_car
    |   |-- README.md
    |   `-- logic_toy_car.blend

## 🐥 Armory Tutorials: logic_transform

    |-- logic_transform
    |   `-- logic_transform.blend

## 🐥 Armory Tutorials: macro_armpack

    |-- macro_armpack
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- Game.hx
    |   |       `-- Macros.hx
    |   `-- macro_armpack.blend

## 🐥 Armory Tutorials: material_alpha

    |-- material_alpha
    |   |-- README.md
    |   |-- circle.png
    |   `-- material_alpha.blend

## 🐥 Armory Tutorials: material_bake

    |-- material_bake
    |   `-- material_bake.blend

## 🐥 Armory Tutorials: material_batch

    |-- material_batch
    |   `-- material_batch.blend

## 🐥 Armory Tutorials: material_billboard

    |-- material_billboard
    |   |-- bunny.png
    |   `-- material_billboard.blend

## 🐥 Armory Tutorials: material_bump

    |-- material_bump
    |   |-- brick_bump.jpg
    |   `-- material_bump.blend


## 🐥 Armory Tutorials: material_decal material_decal_colors script_spawnobject spawn_from_scene

    |-- material_decal
    |   |-- decal.png
    |   `-- material_decal.blend
    |-- material_decal_colors
    |   |-- README.md
    |   `-- material_decal_colors.blend
    |-- script_spawnobject
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- script_spawnobject/Sources/SpawnTrait.hx
    |   `-- script_spawnobject.blend
    |-- spawn_from_scene
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- spawn_from_scene/Sources/MyTrait.hx
    |   `-- spawn_from_scene.blend


armory_examples-22.06\material_decal
armory_examples-22.06\material_decal_colors


示例 **material_decal** 演示了如何将装饰物贴到模型的表面上。纹理 dacal.png 连接 Armory PBR
着色器节点组，因为它已经包含了 Opacity 可以直接连接透明通道，透明区域通过 Mixer 混合 
Transparent BSDF 着色器，过滤掉了材质的其它内容。然后将材质赋予 Plane，并紧贴需要被
装饰的模型表面，以达到一个表面装饰的效果。

**script_spawnobject** 示例演示了 `spawnObject()` 方法的 spawnChildren 两种使用方式，
它内部调用  `createObject()` 方法生成实例。

**spawn_from_scene** 示例设置了两个场景，主场景 Scene 作为启动场景，通过场景挂载的脚本扩展，
调用数据、场景对象方法生成来自其它场景 ( Scene.001) 中的猴头。

1. Data `getSceneRaw()` 获取场景数据；
2. 场景对象的 `getRawObjectByName()` 方法获取对象原始数据；
3. 场景对象的 `createObject()` 方法生成实例，可以接收一个父对象用于放置对象；

```haxe
    // Spawn object from scene hierarchy, including children
    iron.Scene.active.spawnObject("Cube", null, function(object:iron.object.Object) {
        object.transform.loc.set(0, 4, 0);
        object.transform.buildMatrix();
    });

    // Spawn single object from scene hierarchy
    var spawnChildren = false;
    iron.Scene.active.spawnObject("Cube", null, function(object:iron.object.Object) {
        object.transform.loc.set(-4, 0, 0);
        object.transform.buildMatrix();
    }, spawnChildren);

    Data.getSceneRaw("Scene.001", function (raw:TSceneFormat) {
        var obj = Scene.getRawObjectByName(raw, "Suzanne");
        Scene.active.createObject(obj, raw, null, null, function(o:Object) {
            trace("Suzanne spawned!");
        });
    });
```

示例 **material_decal_colors** 演示了如何将装饰物贴到模型的表面上。brush_dacal.png 纹理
只是一张灰度图（白色），通过染色使其变成不同的效果。点击猴头就将 Plane 紧贴在目标位置的曲面上，
并通过 RGB 着色器节点设置指定颜色，注意导出着色器常量 `Armory Meterial Node -> Parameter`，
激活此选项后，这个 RGB 着色器节点就会与着色器程序中的一个 `uniform` 常量链接起来。

场景有两个模型，一个猴头，一个设置了墨滴喷溅状纹理的 Plane，点击鼠标时，后者将作为装饰物绘画于
猴头表面。有三个逻辑树，两个模型各一个，场景一个，分为用于旋转猴头、管理装饰物、相机控制、生成装饰物。
注意逻辑节点 **Object** 输入都使用默认值，留空表示使用当前所挂载的对象，即 Plane 对象。

注意，`LNSetParentNode` 节点调用 `setParent()` 设置对象父层级时，要激活父层级逆变换矩阵
Parent Inverse，这样才能保持对象挂到子层级下时保持位置等变换，并且在解除时保留变换状态。否则，
在猴头旋转后，鼠标点击位置与绘画位置不一致，绘画位置还是以正面为参考。有了父层逆变换，就不会使用
默认的变换 (loc 0,0,0 rot 0,0,0 scale 1,1,1)，这个默认的父层级变换会将子对象移动到父对象
的原点位置。

另外，Plane 是如何贴近曲面的，为何不会按四边面原始状态那样平展在猴头表面。尝试 Cube 为绘制对象，
旋转猴头时就不会像 Plane 那样随着表面变换，而是固定在绘画位置，在相交位置渲染出色块。这是因为
没有设置正确的 Armory 材质属性，`Armory Props -> Decal` 激活后，对象就会当作表面装饰物进行
渲染，也就是只渲染与父层级对象表面相交的部分。

**RotateZoom** 逻辑树挂载在 Suzanne 对象上用于旋转、缩放猴头：

0. `LNTranslateObjectNode` 用于在滚轮运动时移动猴头，通过 `LNOnUpdateNode` 事件触发。
1. `LNGetMouseMovementNode` 节点获取经过乘数运算后的 X、Y 以及滚轮运动量，鼠标保持静止时总是 0 值。
2. `LNRotateObjectNode` 节点用于旋转猴头，使用 `Mouse` 事件节点触发。
3. `LNRotationNode` 用于计算欧拉角，旋转角数据来自通过 `Vector` 变量节点的鼠标 X、Y 运动量。

注意，旋转操作有多个节点，具体是涉及不同的输入参数和操作对象，变量节点 `LNRotationNode` 只用来
计算变换值，而 `Transform` 分类中的 `LNRotateObjectNode` 节点改变对象的旋转状态。

**DecalManager** 逻辑树挂载在 Plane 对象上用于管理已经生成的装饰物：

1. `LNRemoveObjectNode` 用于移除所有已经生成的实例，通过 `Mouse` 右键事件触发。
2. `LNSetMaterialRgbParamNode` 用于设置 RGB 着色器常量，颜色来自 `LNRandomColorNode`。
3. `LNGetMaterialNode` 用于获取当前对象的材质，使用 Slot 0 插槽，对应着色器编辑器的 Slot 1。
4. `LNSetParentNode` 设置对象的父节点，将新产生的实例关联到猴头对象的子层级。

因为着色器常量回调函数只要设置一次即可，所以使用 `On Init` 事件，每次实例化时只执行一次，每次都
产生随机色，并能通过着色器常量渲染 Plane 对象的实例。

|         Nodes Categorys         |          Labels          |          Node Types         |
|---------------------------------|--------------------------|-----------------------------|
| basic -> Event                  | On Init                  | LNOnInitNode                |
| basic -> Event                  | On Update                | LNOnUpdateNode              |
| basic -> Input -> mouse         | Get Cursor Location      | LNGetCursorLocationNode     |
| basic -> Input -> mouse         | Get Cursor State         | LNGetCursorStateNode        |
| basic -> Input -> mouse         | Get Mouse Movement       | LNGetMouseMovementNode      |
| basic -> Input -> mouse         | Mouse                    | LNMergedMouseNode           |
| values -> Math -> quaternions   | Rotation Math            | LNRotationMathNode          |
| values -> Variable              | Transform                | LNTransformNode             |
| values -> Variable              | Rotation                 | LNRotationNode              |
| data -> Object                  | Spawn Object             | LNSpawnObjectNode           |
| data -> Object                  | Spawn Object By Name     | LNSpawnObjectByNameNode     |
| data -> Scene                   | Spawn Scene              | LNSpawnSceneNode            |
| data -> Scene -> collection     | Spawn Collection         | LNSpawnCollectionNode       |
| data -> Scene                   | Get Scene Active         | LNActiveSceneNode           |
| data -> Scene                   | Get Scene Root           | LNSceneRootNode             |
| data -> Scene                   | Remove Scene Active      | LNRemoveActiveSceneNode     |
| data -> Scene                   | Set Scene Active         | LNSetSceneNode              |
| data -> Material                | Get Object Material      | LNGetMaterialNode           |
| data -> Material                | Material                 | LNMaterialNode              |
| data -> Material                | Set Object Material Slot | LNSetMaterialSlotNode       |
| data -> Material -> params      | Set Material Image Param | LNSetMaterialImageParamNode |
| data -> Material -> params      | Set Material RGB Param   | LNSetMaterialRgbParamNode   |
| data -> Material -> params      | Set Material Value Param | LNSetMaterialValueParamNode |
| data -> Object                  | Remove Object            | LNRemoveObjectNode          |
| data -> Object -> props         | Raycast Closest Object   | LNRaycastClosestObjectNode  |
| data -> Object -> props         | Raycast Object           | LNRaycastObjectNode         |
| data -> Object -> relations     | Set Object Parent        | LNSetParentNode             |
| motion -> Physics -> ray        | Pick RB                  | LNPickObjectNode            |
| motion -> Physics -> ray        | Ray Cast                 | LNCastPhysicsRayNode        |
| motion -> Physics -> ray        | Ray Cast On              | LNCastPhysicsRayOnNode      |
| motion -> Transform             | Transform Math           | LNTransformMathNode         |
| motion -> Transform -> location | Translate Object         | LNTranslateObjectNode       |
| motion -> Transform -> rotation | Rotate Object            | LNRotateObjectNode          |
| motion -> Transform -> rotation | Set Object Rotation      | LNSetRotationNode           |


**DecalSpawn** 逻辑树挂载在场景上用于生成装饰物，这是示例的核心内容，主要是通过获取光标的在
屏幕空间中的坐标，并使用物理节点 Pick RB 即选择 Rigid Body，所以需要在启用了物理刚体的对象上
使用此节点。然后通过 `LNSpawnObjectByNameNode` 节点进行实例化。

1. `LNGetCursorLocationNode` 获取光标的屏幕空间下坐标，通过 `Vector` 变量节点转换为向量；
2. `LNPickObjectNode` 只需要一个屏幕空间坐标点就可以点选物理刚体对象，输出碰撞点 3D 坐标、法向等；
3. `LNRotationMathNode` 旋转计算节点 From To 模式可以计算一个参考向量到一个向量方向的旋转角度；
4. `LNSpawnObjectByNameNode` 可以实例化一个对象到场景内，可以是当前场景或者其它场景的对象。
5. `LNMergedMouseNode` 鼠标点击事件触发对象生成，Is Not Null 逻辑节点判断是否拾取到对象。

注意激活装饰材质属性，激活对象材质属性面板中的 `Armory Props -> Decal` 选项。

碰撞点对应的法向量是物理刚体曲面对应点的法向，通过 Rotation Math 计算它与参考向量之间的旋转角度。
`RotationMathNode` 节点使用四元数进行计算，根据参数个数不同至少可以提供 6 种运算：

01. 1 argument: Normalize, Inverse
02. 2 arguments: Compose, Amplify, FromTo, FromRotationMat,
03. 3 arguments: Lerp, Slerp, FromAxisAngle, FromEuler

`LNSpawnObjectByNameNode` 节点和 `LNSpawnSceneNode` 节点逻辑上非常相似，只是前者需要
指定要实例化的对象来源场景，并且会调用 `Data.getSceneRaw()` 获取数据，判断是否存在指定名称
的对象再调用场景 `spawnObject()` 进行实例化。两个节点都以一样的方式处理 Transfrom 数据，
差别在于，前者会将 TSceneFormat 场景数据传入 `spawnObject()`。

生成对象的节点调用 API 读取场景数据，将场景、集合、对象实例化添加到场景中，只需要场景或对象名称，
用于在 TSceneFormat 文件中定位相应的对象数据。这些生成的对象在内存中使用的是同样的原始数据，
只是通过设置不同的变换矩阵使其呈现在场景中的不同位置。它们复制只是一种数据映射关系，并不会产生
额外的 Draw call。

Draw Call 就是程序通过 CPU 向 GPU 下达指令渲染、绘制模型。游戏开发人员使用批处理将相似对象的
渲染分组到同一个 Draw Call，这样的好处是只需消耗一次绘制调用即可渲染多个对象，节省能量又提速。

Batches 和 SetPasses 是两种不同的渲染操作，它们有着不同的 Draw call 成本。

***Batches*** 通常被称为绘图调用（Draw Call），包含简单的绘制命令。例如，在此处绘制此对象，
然后在再绘制另一个对象。这主要是关于使用当前全局渲染状态绘制相同着色器、相似参数的对象。

**SetPasses** 描述一种更昂贵的操作：材质更改。更改材质很昂贵，因为必须设置一个新的渲染状态。
其中包括着色器参数和管线设置，例如 Alpha Blending，Z-Test，Z-Writing 等等。

例如，要绘制一个模型三次，分别表示为 A B C，以下显示各个 Batches 和 SetPasses 方案将效果：

|     Cases      | Case: Worst  |  Case: Bad   |  Case: Good  |  Case: Better  |
|----------------|--------------|--------------|--------------|----------------|
| Batches        | Off          | On           | Off          | On             |
| Materials      | x3           | x3           | x1           | x1             |
|----------------|--------------|--------------|--------------|----------------|
| Draw Call      | Set Pass (A) | Set Pass (A) | Set Pass (A) | Set Pass (A)   |
|                | DrawCall (A) | DrawCall (A) | DrawCall (A) | DrawCall (A*3) |
|                | Set Pass (B) | Set Pass (C) | DrawCall (B) |                |
|                | DrawCall (B) | DrawCall (C) | DrawCall (C) |                |
|                | Set Pass (C) | Set Pass (C) |              |                |
|                | DrawCall (C) | DrawCall (C) |              |                |
|----------------|--------------|--------------|--------------|----------------|
| Set Passes     | 3 time       | 3            | 1 time       | 1 time         |
| Batches (D.C.) | 3 time       | 3 time       | 3 time       | 1 time         |

要批处理的对象必须使用相同着色器程序，因此更换当前着色器（Shader）是最昂贵的操作之一，会大大降低
渲染速度，引擎习惯是编译一个大型着色器程序。深入研究 Draw Call 需要适当的工具，例如 RenderDoc。

Armory Project -> Debug Console 也可以打开调试器面板，渲染时间栏目下查看 Draw Call 数据。

使用 `SpawnObjectByNameNode` 等节点还可以设置变换矩阵，用于定位对象的放置点，以及旋转朝向。
相比 `SpawnObjectNode`，此节点只能生成同场景下的对象，而前者可以生成其它场景中的对象。

`Transform` 确定每个对象在场景中的 Position、Rotation 和 Scale 等仿射变换属性值，变换矩阵
`Mat4` 可以代表一个仿射变换操作。每个游戏对象都有一个变换组件，存储游戏对象的位置、旋转、缩放和
父子化状态。变换组件中包含了世界变换、本地变换等等矩阵数据，其中旋转 rot 是一个四元数。通过
`setMatrix()` 方法可以将一个变换矩阵更新平移、旋转、缩放，以及世界变换矩阵。

    armsdk\iron\Sources\iron\data\SceneFormat.hx
    armsdk\iron\Sources\iron\Scene.hx
    armsdk\iron\Sources\iron\object\Transform.hx
    armsdk\iron\Sources\iron\math\Mat4.hx
    armsdk\iron\Sources\iron\math\Quat.hx
    armsdk\armory\Sources\armory\logicnode\SpawnSceneNode.hx
    armsdk\armory\Sources\armory\logicnode\SpawnObjectNode.hx
    armsdk\armory\Sources\armory\logicnode\SpawnObjectByNameNode.hx

场景对象提供的方法：

1. `root`: Object 场景根据对象，名称为 Root，是一切场景对象的父级；
2. `raw`: TSceneFormat 场景原始数据对象，实例化场景集合时需要用到它；
3. `remove()` 移除/卸载场景，也可以移动活动场景内容以准备加载其它场景；
4. `addObject()` 添加对象到场景树，可以指定一个父对象，默认使用 root 作为父对象；
5. `addScene()` 添加场景，可以配合移除场景方法，清理不需要的旧场景内容；
6. `createObject()` 在场景中创建对象，必需传入 TSceneFormat 数据，可以实例化其它场景中的对象；
7. `spawnObject()` 实例化对象，只要提供一个对象名称，也可以传入 TSceneFormat 实例化其它场景的对象；

两种生成对象的方法有些差别，前者需要 TObj 数据来生成对象，后者只需要对象名称，还可以指定是否生成
对象的子层级对象，**spawnChildren** 参数默认为 true。Spawn 方法内部也会调用 `createObject`，
因为它可以生成多种对象，包含相机、灯光、探针、网格、喇叭等等。


## 🐥 Armory Tutorials: material_depth_texture

    |-- material_depth_texture
    |   |-- Assets
    |   |   |-- checker_rough.png
    |   |   `-- grid.png
    |   |-- README.md
    |   `-- material_depth_texture.blend

## 🐥 Armory Tutorials: material_displace

    |-- material_displace
    |   |-- README.md
    |   `-- material_displace.blend

## 🐥 Armory Tutorials: material_glossy_metallic

    |-- material_glossy_metallic
    |   `-- principled.blend

## 🐥 Armory Tutorials: material_multiuvs

    |-- material_multiuvs
    |   `-- multiuvs.blend

## 🐥 Armory Tutorials: material_normalmap

    |-- material_normalmap
    |   `-- material_normalmap.blend

## 🐥 Armory Tutorials: material_params

    |-- material_params
    |   |-- Bundled
    |   |   |-- tex1.png
    |   |   `-- tex2.png
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- material_params.blend

## 🐥 Armory Tutorials: material_shadeless material_shaders

    |-- material_shadeless
    |   `-- material_shadeless.blend
    |-- material_shaders
    |   |-- Bundled
    |   |   `-- MyCustomMaterial
    |   |       `-- MyCustomMaterial.json
    |   |-- Shaders
    |   |   |-- MyCustomMaterial.frag.glsl
    |   |   `-- MyCustomMaterial.vert.glsl
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- material_shaders.blend

* Graphics
  * [Materials](https://github.com/armory3d/armory/wiki/materials)

[Materials] 有两种方法可以设置 Shader uniforms 常量：

- **Using material nodes**
- **Custom materials**

此示例演示着色器程序的使用，以及向着色器常量链接数据。**Material shaders** 示例中场景只有一个
猴头模型，灯光以及相机。提供了一个组着色器程序，MyCustomMaterial，要使用这组着色器就在模型材质
属性面板输入相应的着色器名称：Shader - Armory Props - Custom Material，是的，着色器程序
就是自定义材质，从图形学的逻辑上来说所以材质就是渲染图像出现的特定效果。

这里的自定义材质就是保存于 Bundled 目录中，包含着色器程序配置的 JSON 文件，可以在此面板中
创建自定义材质，在弹出面板中设置地材质名称和 [Render Path] 算法类型，然后就会生成相应的配置
文件和最基本的着色器程序。JSON 配置文件包含 [ShaderData] 和 [ShaderContext] 的配置。

Defered 和 Fowared 是两种最常见的渲染路径：

1. 最简单的 [Forward path] 就一个 Pass 完成渲染，但是场景的光源和模型需要俩俩单独处理。
2. 延时光照 [Deferred Lighting] 需要 2 个 Pass 完成一个物体的渲染：Z Test 和 Lighting。

所谓延时光照，就是先不考虑光照，统一处理模型的渲染，将光照延后处理，避免因场景光源和模型的增加
而带来严重的时间消耗。以下伪代码可以很好地解释两渲染路径的算法设计思维差别：

```py
    # Forward Rendering
    For each light:
        For each object affected by the light:
            framebuffer += object * light

    # Deferred Lighting
    For each object:
        Render to multiple targets
    For each light:
        Apply light as a 2D postprocess
```

场景属性面板 Armory Scene Traits 列表设置了两个扩展，一个是脚本扩展 `MyTrait`，另一个是
逻辑节点扩展，节点设计链接如下：

1. 使用 `SetShaderUniformNode` 节点向着色器传递 uniform 常量，其名称设置为 myParam；
2. 使用 `On Update` 触发着色器常量设置节点；
3. 着色器常量设置节点的数据类型设置为 float，并且按以下节点求值：
    4. 使用 `WindowInfoNode` 节点获取窗口尺寸，取其 Height 值；
    5. 使用 `GetCursorLocationNode` 节点获取光标位置，取其 Y 值；
    6. 使用 `Math` 节点计算差值并缩小 100 倍，Height - Y / 100；

`SetShaderUniformNode` 节点向着色器传递的 uniform 常量，只支持 5 种类型，不含纹理采样。

Iron Uniforms 和 `UniformsManager` 提供了材质处理函数，用户只需要提供 [Links] 回调函数，
以返回需要链接到着色器数据。以下 MyTrait 扩展中的 `floatLink()` 方法就以上节点的求值等价。

所谓 Links，就是一组材质处理函数的参数到材质属性数据的映射关系。Iron Uniforms 提供材质处理函数，
`UniformsManager` 或者 Armory Uniforms 提供映射关系，即 Links 静态变量中保存的一组函数，
回调函数在 `register()` 方法中设置。并由 Iron Uniforms API 在处理的过程中进行回调，因此
**Links** 也可以看作是一组回调函数，它们用来向着色器注入数据。

```haxe
    package arm;

    import iron.Scene;
    import iron.math.Vec4;
    import iron.data.MaterialData;
    import iron.object.MeshObject;
    import iron.object.Object;
    import iron.object.Uniforms;

    class MyTrait extends iron.Trait {

        public function new() {
            super();
            notifyOnInit(() -> {
                Uniforms.externalFloatLinks.push(floatLink);
            });
        }

        function floatLink(object:Object, mat:MaterialData, link:String):Null<kha.FastFloat> {
            if (link == "myParam") {
                var mouse = iron.system.Input.getMouse();
                return (iron.App.h() - mouse.y) / 100;
            }
            return null;
        }
    }
```

引擎有一系列内置的着色器常量，参考 iron/object/Uniforms.hx 或文档 [Available uniforms]。
材质配置文件中，每个常量的三个配置项对应：

1. `<linkName>` 即通过 `UniformsManager` 或者 `Uniforms` 指定的链接名称，如`"myParam"`；
2. `<uniformName>` 着色器程序中对应的常量名称，数据来源自对应的链接名，其 Links 函数返回的数据；
3. `<uniformType>` 根据 fragment shader 程序指定数据类型；

配置配置内容：

```json
{
    "shader_datas": [
        {
            "contexts": [
                {
                    "color_attachments": ["RGBA64"],
                    "compare_mode": "less",
                    "constants": [
                        {
                            "link": "_worldViewProjectionMatrix",
                            "name": "WVP",
                            "type": "mat4"
                        },
                        {
                            "link": "_normalMatrix",
                            "name": "N",
                            "type": "mat3"
                        },
                        {
                            "link": "_posUnpack",
                            "name": "posUnpack",
                            "type": "float"
                        },
                        {
                            "link": "_time",
                            "name": "time",
                            "type": "float"
                        },
                        {
                            "link": "myParam",
                            "name": "myParam",
                            "type": "float"
                        }
                    ],
                    "cull_mode": "clockwise",
                    "depth_write": true,
                    "fragment_shader": "MyCustomMaterial.frag",
                    "name": "mesh",
                    "texture_units": [],
                    "vertex_elements": [
                        {
                            "name": "pos",
                            "data": "short4norm"
                        },
                        {
                            "name": "nor",
                            "data": "short2norm"
                        }
                    ],
                    "vertex_shader": "MyCustomMaterial.vert"
                }
            ],
            "name": "MyCustomMaterial"
        }
    ]
}
```

着色器程序代码参考及功能说明：

WVP - World View Projection Matrix 世界视图投影矩阵是最基本的一个变换矩阵，没有它的场景
就不能按指定的视角产生符合透视规则的图像，所以顶点着色器中输出的顶点坐标都需要与 WVP 变换矩阵相乘。
除了 WVP，还 N、posUnpack、time 等等都是 Armory 引擎内置的自动链接的常量，定义在 `Uniforms`。

N (Normal Matrix) 是顶点着色器经常用到的法线矩阵，它的一个作用是对法线做变换。因为模型经过变换后，
法线也要跟着一起变换。假设物体发生了缩放形变，如果对法线应用相同的变换，可能会得到错误结果。正确处理
的法线才有正确的指向，光照也才能正确渲染。

pos 是每个顶点着色器的基本输入数据，代表当前正在处理的顶点坐标。顶点着色器中对输出的顶点做了变换，
posUnpack 和 texUnpack 系数都是 `Uniforms` 类型内置的着色器常量，默认值为 1.0。

    iron\Sources\iron\object\MeshObject.hx:
      274:      Uniforms.posUnpack = data.scalePos;
      275       Uniforms.texUnpack = data.scaleTex;

顶点坐标 z 分量经过 sin() 正弦函数，其偏移量与外部输入 myParam 正相关，越靠近窗口上侧偏移越大。
模型按三角函数曲线变形，由于加入了 time 时间值的变化，模型呈现出波浪运动的基本特征，看起来就像是
果冻体。

```c,ignore
// MyCustomMaterial.vert.glsl

    #version 450

    // Armory uses packed vertex data to preserve memory
    in vec4 pos; // pos.xyz, nor.z
    in vec2 nor; // nor.xy

    uniform mat4 WVP;
    uniform mat3 N;
    uniform float posUnpack;
    uniform float time;
    uniform float myParam;

    out vec3 mpos;
    out vec3 normal;

    void main() {
        vec4 p = vec4(pos.xyz, 1.0);

        // Position data is packed into (-1, 1) range
        // Retrieve model position
        mpos = pos.xyz * posUnpack;

        // Unpack normal.z component from pos.w
        normal = N * vec3(nor.xy, pos.w);

        p.z += sin((time + mpos.x + mpos.y) * 2.0) * 0.2 * myParam;
        gl_Position = WVP * p;
    }

// MyCustomMaterial.frag.glsl

    #version 450

    in vec3 mpos;
    in vec3 normal;

    // Color of each fragment on the screen
    out vec4 fragColor;

    void main() {
        // Shadeless red color
        //fragColor = vec4(1.0,0.0,0.0,0.0);

        // Assuming forward rendering path for simplicity
        vec3 col = (mpos + vec3(1.0)) / 8.0;
        col += normal * 0.1;
        fragColor = vec4(col, 1.0);
    }
```



## 🐥 Armory Tutorials: material_sss

    |-- material_sss
    |   `-- material_sss.blend

## 🐥 Armory Tutorials: material_translucent

    |-- material_translucent
    |   |-- circle.png
    |   `-- material_translucent.blend

## 🐥 Armory Tutorials: material_video

    |-- material_video
    |   |-- README.md
    |   |-- material_video.blend
    |   `-- video.mp4

- Krom is not yet supported, please use HTML5 or native targets for now.
- ffmpeg is required to process video files.

1. Install [ffmpeg](https://ffmpeg.org)
2. Point `Edit - Preferences… - Add-ons - Armory - Advanced - FFMPEG Path` to ffmpeg binary
3. Play
4. During the first build, video processing may take some time

关于设置浏览器自动播放音频 autoplay 浏览器默认阻止问题
https://www.cnblogs.com/justyouadmin/p/14483803.html

    Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.

谷歌于2018年4月更改自动播放政策，就是不让用了。原因是 Web 浏览器正在朝着更严格的自动播放策略发展，
以改善用户体验，最大程度地减少安装广告拦截器的动机，并减少昂贵和/或受限网络上的数据消耗。
这些更改旨在更好地控制用户的播放，并使使用合法情况的发布者受益。谷歌给出的允许自动播放的条件：

1. 始终允许静音自动播放。
2. 在以下情况下，允许自动播放声音：
    3. 用户已与域进行了交互（单击，点击等）。
    4. 在台式机上，已经超过了用户的“媒体参与度索引”阈值，这意味着该用户以前曾播放带声音的视频。
    5. 用户已将该网站添加到他们在移动设备上的主屏幕，或者在桌面上 安装了 PWA。
6. 顶级框架可以将自动播放权限委派给其 iframe，以允许自动播放声音。

armsdk\Kha\Backends\Krom\kha\LoaderImpl.hx:
   50       failed({
   51           url: desc.files.join(","),
   52:          error: "Could not load video(s), Krom currently does not support loading videos",
   53       });


## 🐥 Armory Tutorials: mesh_generate

    |-- mesh_generate
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- BoxGenerator.hx
    |   `-- mesh_generate.blend

## 🐥 Armory Tutorials: mesh_import

    |-- mesh_import
    |   |-- Bundled
    |   |   `-- cube.obj
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- ImportMesh.hx
    |   |       `-- ObjParser.hx
    |   `-- mesh_import.blend

## 🐥 Armory Tutorials: mesh_terrain

    |-- mesh_terrain
    |   |-- Bundled
    |   |   `-- heightmap_01.png
    |   |-- README.md
    |   |-- base.png
    |   `-- mesh_terrain.blend

To generate **terrain**:

- Place your heightmap as `Bundled/heightmap_01.png`
- Navigate to `Properties - Scene - Armory Terrain`
- Set terrain dimensions using `Sector Size`
- Set terrain height using `Height Scale`
- Click `Generate`
- Adjust terrain material

See <https://github.com/tong/armory_templates/tree/master/third_person_terrain>


## 🐥 Armory Tutorials: Navmesh - Navmesh Follow

    |-- navmesh
    |   |-- README.md
    |   |-- gridbox.png
    |   |-- gridbox2.png
    |   `-- navmesh.blend
    |-- navmesh_follow
    |   |-- README.md
    |   `-- navmesh_follow.blend

官方提供 Armory Tutorials: Navmesh 和 Navmesh Follow 两示例。

  * [Navmesh](https://github.com/armory3d/armory/wiki/navmesh)
  * [Terrain](https://github.com/armory3d/armory/wiki/terrain)
  * [Recast navigation](https://github.com/armory3d/haxerecast)
  * Navmesh Examples https://github.com/armory3d/armory_examples/tree/master/navmesh

Armory 的游戏角色导航功能使用 [Recast navigation] 框架，Blender 渲染属性面板中可以启用它：
`Armory Project - Modules - Navigation`。导航网格与内置的 Bundled Trait 配合使用：

    armory.trait.NavMesh
    armory.trait.NavAgent
    armory.trait.NavCrowd

以下一是 Armsdk 中定义的相关 Bundled Scripts 列表：

    Armory Sources
    |-- armory.trait
    |   |-- armory\trait\NavAgent.hx
    |   |-- armory\trait\NavCrowd.hx
    |   |-- armory\trait\NavMesh.hx

NavAgent 导航代理附着到需要在导航路径中运动的对象，代理受控制对象的导航运动。

1. speed 控制对象移动的速度；
2. turnDuration 转弯速率，控制对象转弯的时间；
3. heightOffset 代理对象高度偏移，使用受控物体与网格导航算法中设置的水平高度有一个修正值；

在对象的 Armory Traits 列表中添加 Bundled - Navmesh，点击 Generate Navmesh 按钮，将
导航算法求解到的可通行区域以网格对象显示出来。要在运行时显示导航网络对象，可以激活对象属性面板的
Armory Props - Export。

Recast config 配置包括网络单元大小、宽高、半径、最大爬升、最大爬坡度等等用于导航算法的配置数据。
单元格式越大控制越粗放，预留给障碍物的缓冲区就越大，生成的导航网络就越小，角色也可能与障碍物重叠。

```haxe
    @prop public var cellSize:      Float = 0.3; // voxelization cell size
    @prop public var cellHeight:    Float = 0.2; // voxelization cell height
    @prop public var agentHeight:   Float = 2.0; // agent capsule height
    @prop public var agentRadius:   Float = 0.4; // agent capsule radius
    @prop public var agentMaxClimb: Float = 0.9; // how high steps agents can climb, in voxels
    @prop public var agentMaxSlope: Float = 45.0; // maximum slope angle, in degrees
```

例如，创建一个 Plane，编辑它的曲面，将一些不能通行的区域抬升，其坡度远大于 agentMaxClimb 即可
阻止角色通过，那此不相连的区域也不能通行。

Be aware that if your object is too small, the recast library might not be able
to process it for the simulation.

项目中的逻辑节点树 NavigateTree 控制一个 Cube 按导航路径移动，鼠标点击获取到导航区域内的一个
目标位置，然后控件 Cube 按一条最近的可触达路径移动。节点关系说明如下：

1. Input - `Mouse` Left 点击事件流向一个逻辑判断节点：`Is Not Null`；
2. Logic - `Is Not Null` 逻辑判断事件流向 `Go to Location`；
3. Navmesh - `Go to Location` 节点用于移动指定目标，并且将事件流向 `Print`；
4. Native - `Print` 用于打印目标位置的坐标到控制台；
5. Input - `Get Cursor Location` 节点获取光标当前位置，并传递给 `Vector`；
6. Variable - `Vector` 用来组合 x/y/z 分量输入一个向量，并传递给 `Pick Navmesh Location`；
7. Navmesh - `Pick Navmesh Location` 输入的屏幕坐标并获取对应的导航网格的目标位置；

游戏运行时使用到的逻辑节点及 Trait 扩展类型：

    |-- armory.logicnode
    |   |---armory\logicnode\GetAgentDataNode.hx
    |   |---armory\logicnode\GoToLocationNode.hx
    |   |---armory\logicnode\StopAgentNode.hx
    |   |-- armory.trait.navigation
    |   |   `-- armory\trait\navigation\Navigation.hx

注意 GoToLocationNode 的实现逻辑，它会获取对象当前绑定的 NavAgent 扩展类型，但是它要求使用
armory.trait.NavAgent 即由 Armory 源代码中的 Bundled Trait，如果在 Blender 属性面板中
编辑了 Bundled，则会将 NavAgent 转换为 arm.NavAgent，假设工程使用了默认的包名 arm，那么
GoToLocationNode 运行时就会产生错误，找到不到 Bundled NavAgent：

    var agent: armory.trait.NavAgent = object.getTrait(armory.trait.NavAgent);
    assert(Error, agent != null, "Object does not have a NavAgent trait");

Navmesh 专用节点 `Go to Location` 在执行时，会逐步地移动 Navagent 靠近当前的目标位置，
而不是一下子瞬移。

    """Makes a NavMesh agent go to location.

    @input In: Start navigation.
    @input Object: The object to navigate. Object must have `NavAgent` trait applied.
    @input Location: Closest point on the navmesh to navigate to.
    @input Speed: Rate of movement.
    @input Turn Duration: Rate of turn.
    @input Height Offset: Height of the object from the navmesh.
    @input Use Raycast: Use physics ray cast to get more precise z positioning.
    @input Ray Cast Depth: Depth of ray cast from the object origin.
    @input Ray Cast Mask: Ray cast mask for collision detection.

    @output Out: Executed immidiately after start of the navigation.
    @output Tick Position: Executed at every step of navigation translation.
    @output Tick Rotation: Executed at every step of navigation rotation.
    """

NavAgent 对象配置的数据会被逻辑节点 GoToLocationNode 中的数据覆盖。使用逻辑节点编程后，
NavAgent 对象的配置数据不再生效，当逻辑节点调用相应的方法时，这些数据就会被覆盖。所以，以下
NavAgentController 虽然可以临时修改 NavAgent 配置数据，但在执行 GoTolocationNode
方法后，数据就会复原：

```haxe
    package arm;

    import armory.system.Assert.assert;
    import armory.trait.NavAgent;
    import iron.Trait;
    import iron.system.Input;

    class NavAgentController extends Trait {

        var kb: Keyboard;
        var agent: armory.trait.NavAgent;

        public function new() {
            super();
            kb = Input.getKeyboard();
            notifyOnInit(()->{
                trace("NavAgentController object:", $type(object));
                agent = object.getTrait(NavAgent);
                assert(Error, agent != null, "Object - Armory Traits list has no NavAgent.");
            });
            notifyOnUpdate(update);
        }

        function update() {
            if (kb.down(".")) {
                agent.speed *= 1.05; trace("update + speed", agent.speed);
            } else if (kb.down(",")) {
                agent.speed *= 0.95; trace("update - speed", agent.speed);
            } else if (kb.down("0")) {
                agent.turnDuration *= 1.05; trace("update + turn dur", agent.turnDuration);
            } else if (kb.down("9")) {
                agent.turnDuration *= 0.95; trace("update - turn dur", agent.turnDuration);
            }
        }
    }
```

可以连接逻辑节点，用键盘按钮来修改速度等配置：

1. Input - `Keyboard` 设置 j 按键，事件流向一个 `Set Variable`；
2. Input - `Keyboard` 设置 k 按键，事件流向另一个 `Set Variable`；
3. Variable - `Float` 假设修改使用浮点值的速度，将此变量连接到变量赋值节点，以及 `Go to Location`；
4. Math - `Multiple` 使用两个数学乘法运算处理变量值再输入到赋值节点，系数为 1.1、0.9 以增减速度；

不同于 UPBGE 的节点，Math 运算节点不可以可以对向量进行数值的运算，使用 Vector Math 专用节点，
进行向量运算，例如点积，叉积等等。


Armory 引擎中专用于 Navmesh 的逻辑节点，以及键盘鼠标输入：

    |   |   |-- arm\logicnode\navmesh
    |   |   |   |-- arm\logicnode\navmesh\LN_get_agent_data.py
    |   |   |   |-- arm\logicnode\navmesh\LN_go_to_location.py
    |   |   |   |-- arm\logicnode\navmesh\LN_navigable_location.py
    |   |   |   |-- arm\logicnode\navmesh\LN_pick_navmesh_location.py
    |   |   |   |-- arm\logicnode\navmesh\LN_stop_agent.py
    |   |   |   |-- arm\logicnode\navmesh\__init__.py
    |   |   |   |-- arm\logicnode\input
    |   |   |   |-- arm\logicnode\input\LN_keyboard.py
    |   |   |   |-- arm\logicnode\input\LN_mouse.py


## 🐥 Armory Tutorials: particle_bunny particle_hair

    |-- particle_bunny
    |   |-- bunny.png
    |   `-- particle_bunny.blend
    |-- particle_hair
    |   `-- particle_hair.blend

Armory 支持对象粒子化，但不支持集合粒子化。


## 🐥 Armory Tutorials: particle_info

    |-- particle_info
    |   |-- part.png
    |   `-- particle_info.blend

## 🐥 Armory Tutorials: particle_mesh

    |-- particle_mesh
    |   |-- README.md
    |   `-- particle_mesh.blend

## 🐥 Armory Tutorials: particle_smoke

    |-- particle_smoke
    |   |-- particle_smoke.blend
    |   `-- smoke.jpg


## 🐥 Armory Tutorials: physics_break logic_break

    |-- logic_break
    |   `-- logic_break.blend
    |-- physics_break
    |   `-- physics_break.blend

程序入口类也会自动生成，它的功能就是定义一个静态入口函数 main，可以不定义 new() 构建函数。
入口类可以对 iron 等构架进行配置，然后调用 `armory.system.Starter` 启动函数。

```haxe
    package;

    class Main {
        public static inline var projectName = "logic_break";
        public static inline var projectVersion = "1.0.0";
        public static inline var projectPackage = "arm";
        public function new() {   }
        public static function main() {
            iron.object.BoneAnimation.skinMaxBones = 8;
            iron.object.LightObject.cascadeCount   = 4;
            iron.object.LightObject.cascadeSplitFactor = 0.800000011920929;
            armory.system.Starter.main(
                'Scene', // scene: String,  Blender scene to run
                0,       // mode: Int,
                false,   // resize: Bool,
                true,    // min: Bool,
                false,   // max: Bool,
                960,     // w: Int,  Window width
                540,     // h: Int,  Window height
                1,       // msaa: Int,
                true,    // vsync: Bool,
                armory.renderpath.RenderPathCreator.get // getRenderPath: Void->iron.RenderPath
            );
        }
    }
```

此教程使用了 Bullet 物理引擎的 Haxe 移植版 haxebullet，ArmorySDK 已经包含这个开源物理引擎。
Scene 属性面板中是否勾选激活 Rigid Body World 不影响 Armory 模拟破碎效果，只影响 Blender。

Logic Nodes 是 Armory 提供的节点可视化编程工具，Logic Break 示例演示了如何通过节点编程
实现模型破碎效果，但是它本身并没有使用逻辑节点编辑器。

此教程只有一个 .blend 文件，根据 Blender 中指定的 Armory 配置不同，生成的 Kha 构建脚本
内容也有所差别。此示例中使用了 Armory 内置的破碎效果脚本，在模型对象属性面板 Armory Traits
列表中添加 Bundled 扩展，从备选项中取 `PhysicsBreak`。

添加内置扩展后，在编译时，khafile.js 构建脚本会自动添加相应的编译参数：

```js
project.addParameter('armory.trait.PhysicsBreak');
project.addParameter("--macro keep('armory.trait.PhysicsBreak')");
project.addDefine('arm_physics');
project.addDefine('arm_bullet');
```
物理系统需要 Armory 默认选用的 Bullet 物理引擎，Armory Project - Modules 配置中默认启用。
`PhysicsBreak` 代码中也会使用条件编译，判断指定的物理引擎是否可用：

```js
    #if arm_bullet
    import armory.trait.physics.bullet.RigidBody;
    import armory.trait.physics.PhysicsWorld;
    #end
```

使用破碎效果就需要场景中模型中的主动运动的刚体去碰撞被动状态的刚体，启用 Physics - Rigid Body，
并相应设置 Type = Active 或 Passive。主动刚体在接收物理引擎默认的重力就会产生下坠的模拟运动，
被动形刚体则处于固定状态，物理引擎不会移动它，但会用来做碰撞检测。可以在场景属性面板 Field Weights
列表中设置重力系数等等，至于是否激活 Rigid Body World，Armory 引擎并没理会。

主动刚体，如果没有激活 Dynamic，物理引擎也不会去移动它。

模型物理系统中的弹性系数也没有什么作用，Surface Response - Bounciness 设置到最大值，并且
碰撞双方的 Fraction 阻尼设置为 0，也没有多大的反弹表现。`AddRigidBodyNode` 逻辑节点可以
帮助了解 Armory 目前支持的物理参数。

破碎效果的基本逻辑是：调用 PhysicsWorld `getContactPairs(body)` 判断模型是否有连接的网格，
如果没有，就创建内部类实例 `ConvexBreaker` 进行曲面分拆与细分，形成多个分离的几何体。该类算法
基于 yomboprime https://github.com/yomboprime

物理相关的 Armory Bundled Scripts

    |-- armory.trait
    |   |-- armory\trait\PhysicsBreak.hx
    |   |-- armory\trait\PhysicsDrag.hx
    |   |-- armory\trait\VehicleBody.hx
    |   `-- armory.trait.physics
    |       |-- armory\trait\physics\KinematicCharacterController.hx
    |       |-- armory\trait\physics\PhysicsConstraint.hx
    |       |-- armory\trait\physics\PhysicsHook.hx
    |       |-- armory\trait\physics\PhysicsWorld.hx
    |       |-- armory\trait\physics\RigidBody.hx
    |       |-- armory\trait\physics\SoftBody.hx
    |       `-- armory.trait.physics.bullet
    |           |-- armory\trait\physics\bullet\KinematicCharacterController.hx
    |           |-- armory\trait\physics\bullet\PhysicsConstraint.hx
    |           |-- armory\trait\physics\bullet\PhysicsConstraintExportHelper.hx
    |           |-- armory\trait\physics\bullet\PhysicsHook.hx
    |           |-- armory\trait\physics\bullet\PhysicsWorld.hx
    |           |-- armory\trait\physics\bullet\RigidBody.hx
    |           `-- armory\trait\physics\bullet\SoftBody.hx


## 🐥 Armory Tutorials: physics_collision_groups

    |-- physics_collision_groups
    |   `-- physics_collision_groups.blend

## 🐥 Armory Tutorials: physics_constraints

    |-- physics_constraints
    |   |-- README.md
    |   `-- physics_constraints.blend


## 🐥 Armory Tutorials: physics_drag physics_picking

    |-- physics_drag
    |   |-- README.md
    |   `-- physics_drag.blend
    |-- physics_picking
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- PickEvent.hx
    |   |       `-- PickTrait.hx
    |   `-- physics_pick.blend

首个示例演示了如何使用 Armory Bundled Scripts 中的 `PhysicsDrag` 等进行物理刚体的拖拽操作。
场景中所有模型都添加了物理属性 Rigid Body - Type = Active，除了模拟地面的 Plane 几何体设置
禁止了 Dynamic 以避免受到物理引擎的运动模拟。

第二个示例用三种方式演示如何调用 PhyscisWorld API 的选择刚体，这些扩展已经挂在相机对象上，
按需要启用，`Camera object Properties - Object - Armory Traits`：

    - PickTrait - using scripting
    - PickEvent - using scripting with mouse event
    - PickTree  - using logic nodes

物理选取操作需要在启用物理 Rigid Body 的对象上使用，

PickTree 逻辑树设置：

1. `GetCursorLocationNode` 获取光标位置，再经过 `VectorNode` 转换成向量，作为屏幕坐标向量；
2. `Pick RB` 根据上一步的向量，调用物理引擎方法获取就近的刚体对象；
3. `PickObjectNode` 类实现代码调用物理引擎方法 `pickClosest()` 获取就近的刚体对象；
4. `TranslateObjectNode` 将 `Pick RB` 节点输出的刚体对象平移指定的偏移位置；

Iron 框架提供了用户输入接口，iron.system.Input 空间下定义的类型以及处理的硬件输入如下：

1. `Input` 用户输入接口，比如 `Input.getMouse()` 获取鼠标输入；
2. `VirtualButton` 按键输入设备抽象化接口，记录按下、按住、释放状态；
3. `GamepadStick` 手柄状态数据结构，对应左右摇杆的轴输入；
4. `Sensor` 加速传感器数据结构，接入 `kha.input.Sensor`；
5. `VirtualInput` 虚拟按键状态管理工具类，方法：`downVirtual()` `upVirtual()` `setVirtual()`；
    6. `Mouse` 虚拟输入具像化，接入 `kha.input.Mouse` 实现鼠标输入；
    7. `Pen` 虚拟输入具像化，接入 `kha.input.Pen` 绘画笔输入；
    8. `Keyboard` 虚拟输入具像化，接入 `kha.input.Keyboard` 键盘输入；
    9. `Gamepad` 虚拟输入具像化，接入 `kha.input.Gamepad` 游戏手柄输入；

```haxe
    package arm;

    import iron.system.Input;
    import armory.trait.physics.PhysicsWorld;

    class PickTrait extends iron.Trait {

        public function new() {
            super();

            notifyOnUpdate(function() {
                // Check mouse button
                var mouse = Input.getMouse();
                if (!mouse.started()) return;

                // Pick object at mouse coords
                var rb = PhysicsWorld.active.pickClosest(mouse.x, mouse.y);
                
                // Check if picked object is our Cube
                if (rb != null && rb.object.name == 'Cube') {
                    rb.object.transform.translate(0, 0, 1);
                    rb.syncTransform();
                }
            });
        }
    }
```

```haxe
    package arm;

    import kha.input.Mouse;
    import armory.trait.physics.PhysicsWorld;

    // Using mouse events
    class PickEvent extends iron.Trait {

        public function new() {
            super();

            notifyOnInit(function() {
                Mouse.get().notify(onMouseDown, onMouseUp, onMouseMove, onMouseWheel);
            });

            notifyOnRemove(function() {
                // Trait or its object is removed, remove event listeners
                Mouse.get().remove(onMouseDown, onMouseUp, onMouseMove, onMouseWheel);
            });
        }

        function onMouseDown(button: Int, x: Int, y: Int) {
            // Pick object at mouse coords
            var rb = PhysicsWorld.active.pickClosest(x, y);
            
            // Check if picked object is our Cube
            if (rb != null && rb.object.name == 'Cube') {
                rb.object.transform.translate(0, 0, 1);
                rb.syncTransform();
            }
        }

        function onMouseUp(button: Int, x: Int, y: Int) { }
        function onMouseMove(x: Int, y: Int, movementX: Int, movementY: Int) { }
        function onMouseWheel(delta: Int) { }
    }
```

`PickEvent` 中直接调用 kha.input.Mouse.get() 获取鼠标输入。物理引擎中的数据不能直接修改，
需要以某种方式告诉物理引擎“现在要修改物理世界的数据”，比如，刚体对象的 `syncTransform()` 
方法告诉物理引擎要使用最新的对象属性来进行运动模拟。应该调用物理引擎提供 `applyForce()` 这类
方法来改变对象的状态，通过改变物理参数（力度）来影响模拟环境将会产生的效果。

相比 `Get Mouse Movement` 节点，它的实现类 `GetMouseMovementNode` 通过 Iron 框架提供的
iron.system.Input.getMouse() 方法来获取数据。鼠标经过 Iron 框架包装成 `Mouse` 对象，内部
还会处理绘图笔、触摸屏事件的处理，Pen & Surface。使用中经常遇到不能返回鼠标移动的数据，以及滚轮值。

观察其代码，感觉就像是创建实例时，因为多线程导致多实例产生，进而导致数据不统一。

但可以给源代码添加调试验证代码，前后数据一致，并不是这样的问题，只是实例的运动量数据总是为 0 值，
坐标位置数据正常。也就是表示运动量数据在设置后，又被其它代码清零，也就是 `endFrame()` 重置方法，
鼠标重置方法清理了除坐标之外的所有数据，导致逻辑节点读取数据出错。

    trace("moveListener", [movementX, movementY], [this.movementX, this.movementY]);

经过以上一翻分析和调试，最近将问题缩小到 `GetMouseMovementNode` 节点的 `get()` 方法根本
没有在每次鼠标数据更新时被执行，也就是没有获取最新数据。这一原由来自于将这些数据连接到了一个数组
节点上，`ArrayStringNode`，对的，就是因为数组节点具有单次初始化后就不再更新数据的这个逻辑。
为了将数据集中处理，还可以使用 `ConcatenateStringNode` 这样的节点以连接多个变量构成字符串。
还需要注意的是 x y 输出端口其实是 movementX movementY，这种端口名称令人多有误解，而且数值
也不太可靠，丢失概率很，所以不能鼠标运动量进行累计。

使用滚轮数据 wheelDelta 也要注意，因为这个值是表示当下的运动值，只要滚轮没动就会立即置零。

所有按键状态信息在 Iron 框架 `VirtualInput` 抽象类型中的 `Map<String, VirtualButton>`
数据容器中保存，并且在后续中通过 `downVirtual()` `upVirtual()` `setVirtual()` 方法更新。
鼠标事件经过 `Mouse` 包装后，就给按键取了名字，以及记录按键的按下、按住、释放状态：

```java
    public static var buttons = ["left", "right", "middle", "side1", "side2"];
    var buttonsDown = [false, false, false, false, false];
    var buttonsStarted = [false, false, false, false, false];
    var buttonsReleased = [false, false, false, false, false];
```

`OnMouseNode` 由最新的 `MergedMouseNode` 节点取代，这些节点都有使用事件回调获取数据。注意，
当事件类型为 `Moved`，节点并不会使用相应的按钮回调，而是使用 **moved** 状态，这个状态会在移动
事件触发是设置为 true，在帧结束时设置为 false。

调用 Iron `getMouse()` 方法时，会检测是否已经创建了实例，是则直接重用，避免重新实例化。

```java
    public static function getMouse(): Mouse {
        if (!registered) register();
        if (mouse == null) mouse = new Mouse();
        return mouse;
    }

    static inline function register() {
        registered = true;
        App.notifyOnEndFrame(endFrame);
        App.notifyOnReset(reset);
        // Reset mouse delta on foreground
        kha.System.notifyOnApplicationState(()->{ getMouse().reset(); }, null, null, null, null);
    }

    public function new() { // new Mouse()
        kha.input.Mouse.get().notify(downListener, upListener, moveListener, wheelListener);
        #if (kha_android || kha_ios)
        if (kha.input.Surface.get() != null) kha.input.Surface.get().notify(onTouchDown, onTouchUp, onTouchMove);
        #end
    }
```


在需要使用物理交互的对象属性面板 Armory Traits 列表中添加 Bundled 扩展，选择 `PhysicsDrag`，
此内置扩展脚本实现了鼠标的拖拽功能。

PhysicsWorld 提供的一系列方法及属性：

1. PhysicsWorld.active 当前活动的物理模拟世界；
2. `pickClosest()` 获取指屏幕空间坐标对应的刚体对象；
3. `rayCast()` 根据射线方向获取击中点，返回 `Hit` 对象中包含了目标刚体、位置、接触点的法线；
4. `getContacts()` 获取与指定刚体接触的所有刚体；
5. `getContactPairs()` 获取指定刚体相关的接触对，`ContactPair` 即用来记录碰撞双方的数据类型；
6. `convexSweepTest()` 凸体扫掠测试，待深入；

射线相关的 `iron.math.RayCaster` 提供了根据两点求射线传播方向，AABB 轴对齐边界盒的求交，
Axis aligned bounding box 是图形学中的一种求交算法。

Bullet 引擎的算法流程中，`ContactPair` 是碰撞检测的阶段的收尾，它记录的是对象间碰撞的数据。
Bullet Physics pipeline 描述的框架中，碰撞数据产生于碰撞世界 **CollisionWorld**，模拟
运动的世界称为 **DynamicsWorld**，它们各自有各自的数据产生。

计算机图形学中的物理引擎有两条基本的设计原则：

1. 图形学物理模拟实际上只是追求视觉近似，而并非精确的物理模拟。
2. 物理引擎从简化计算考虑，采用独立数据系统，不与渲染引擎共享对象数据。

Bullet 物理引擎 简析 - 马良 https://www.cnblogs.com/pengyingh/articles/2388907.html

Bullet User Manual - Library Overview - Bullet Physics pipeline
https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf

Bullet GPU Rigid Body Using OpenCL - Bullet Physics pipeline
https://github.com/bulletphysics/bullet3/blob/master/docs/GPU_rigidbody_using_OpenCL.pdf


## 🐥 Armory Tutorials: physics_raycast raycast_objects

    |-- physics_raycast
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- RayCastTrait.hx
    |   `-- physics_raycast.blend
    |-- raycast_objects
    |   |-- Raycast_Objects.blend
    |   `-- Sources
    |       |-- Main.hx
    |       `-- arm
    |           `-- MyTraitRaycastObjects.hx

此两例是射线碰撞方法的演示：

- Keyboard `L/R` Rotate cone
- Mouse `L` Raycast in cone direction

Rotate the cone using left and right arrow keys. Press left mouse button
to cast a ray in the direction cone is pointing. If ray hits an object,
its name is printed to the console.

Raycast 示例场景只有 Cube 模型设置了 Rigid Body - Types = Active，并且 Dynamic 禁用。
模拟地面的 Plane 和模拟光枪的 Cone 模型不需要设置物理属性，因为 Cube 才需要使用物理引擎的碰撞。
其中的逻辑节点和 `RayCastTrait` 扩展都挂载到模拟光枪的 Cone 模型上，用来旋转它，并且在按下 LMB
时模拟发射出射线，并通过物理引擎求解射线碰撞到的刚体。


```js
    package arm;

    import armory.trait.physics.PhysicsWorld;

    class RayCastTrait extends iron.Trait {

        var q = new iron.math.Quat();

        public function new() {
            super();
            
            var mouse = iron.system.Input.getMouse();
            var keyboard = iron.system.Input.getKeyboard();

            notifyOnUpdate(function() {

                if (mouse.down()) {
                    var physics = PhysicsWorld.active;

                    // Start from cone location
                    var from = object.transform.world.getLoc();

                    // Cast ray in the direction cone points to
                    var to = object.transform.look();

                    // 1000 units long
                    to.mult(1000);

                    // End position
                    to.add(from);
                    
                    var hit = physics.rayCast(from, to);
                    var rb = (hit != null) ? hit.rb : null;
                    var info = '';
                    if( rb != null ) info += ' ${rb.object.name}';
                    trace(info);
                }

                if (keyboard.down("left")) {
                    q.fromEuler(0, 0, 0.1);
                    object.transform.rot.mult(q);
                    object.transform.buildMatrix();
                }

                if (keyboard.down("right")) {
                    q.fromEuler(0, 0, -0.1);
                    object.transform.rot.mult(q);
                    object.transform.buildMatrix();
                }
            });
        }
    }
```

逻辑节点连接关系：

01. `SelfObject` 获取当前 owner 对象，即 Cone 模型； 
02. `CastPhysicsRayNode` Ray Cast 发出射线，From 为起点坐标，To 为终点坐标；
03. From 起点坐标数据处理：
04. `GetLocationNode` Get Object Location 获取当前 owner 对象的位置坐标，用作射线 From 输入； 
05. To 终点坐标数据处理：
06. `GetTransformNode` Get Object Transform 获取对象的变换矩阵；
07. `VectorFromTransformNode` Transform to Vector 将矩阵转换为 look 向量，即 Cone 前方指向；
08. `VectorMathNode` Vector 做乘法运算，各个分量 Multiply 1000，模拟射线传播距离；
09. `VectorMathNode` Vector 再做加法运算，与前面获取到的起点坐标相加，得到正确的射线传播方向；
10. `GetNameNode` Get Object Name 获取射线碰撞到的对象名称；
11. `PrintNode` 将对象命名打印到控制台，使用 `MergedMouseNode` Mouse 节点作为事件流；

Iron 框架定义的 `Transform` 提供了 `look()` 方法，它返回一个方向，指向对象的正面方向。即
对象本地坐标的 Y 轴指向。使用 `Transform to Vector` 节点也可以调用此方法。

其中，旋转操作使用了四元数，Quaternion，这是一种更好的旋转操作算法，同时也是更加抽象的一种算法。
对象局部旋转时，先设置旋转量，再执行四元数 `buildMatrix()` 方法完成旋转。通过 Haxe Property
读写节点来修改 object.transform.rot 属性并不能实现旋转。使用四元数旋转时，注意要设置 w=1 分量。

四元数提供 `applyQuat()` 方法对矩阵应用额外的旋转，Vector to Object Orientation 节点就
是调用此方法实现一个额外旋转量，Objec 参数用于获取其变换矩阵的旋转量，即要旋转的四元数，对指定的
World 向量进行额外的旋转。

旋转中需要单位四元数：

    q = (𝒘, 𝑣⃗)ᵀ = (cos(Θ/2), 𝑢 sin(Θ/2))  |𝑢| = x² + y² + z² + 𝒘² = 1

直观地用一个沿 Z 轴向旋转作为例子，假设分量始终为 𝒘 = 1，World = (1,0,0)，即 X 轴正向为参考
方向，那么物体朝向与世界参考坐标的关系如下，与世界坐标对齐时即旋转 0°，在整个 360° 旋转范围内，
可以看到四元数的 x 和 y 分别分别在 X 和 Y 轴上来回变换方向：

| Rotation |    Quatnion    |
|----------|----------------|
| 0°       | Quat(0, -1, 0) |
| 90°      | Quat(1, 0, 0)  |
| 180°     | Quat(0, 1, 0)  |
| 270°     | Quat(-1, 0, 0) |
| 360°     | Quat(0, -1, 0) |

- [四元数的可视化 by 3Blue1Brown](https://www.bilibili.com/video/av33385105/)
- [Visualizing quaternions, an explorable video series](https://eater.net/quaternions/video/intro)
- [维度：数学漫步 Dimensions: A Walk Through Mathematics (2008)](https://www.bilibili.com/video/BV1rx411J7EL)
- [GAMES105-计算机角色动画基础-刘利斌](https://www.bilibili.com/video/BV1GG4y1p7fF/)


参考 `SetRotationNode` 节点的代码：

|         Nodes Categorys         |        Labels       |       Node Types      |
|---------------------------------|---------------------|-----------------------|
| values -> Variable              | Rotation            | LNRotationNode        |
| motion -> Transform -> rotation | Rotate Object       | LNRotateObjectNode    |
| motion -> Transform -> rotation | Set Object Rotation | LNSetRotationNode     |
| basic -> Native -> haxe         | Get Haxe Property   | LNGetHaxePropertyNode |
| basic -> Native -> haxe         | Set Haxe Property   | LNSetHaxePropertyNode |
| motion -> Transform | Vector to Object Orientation  | LNVectorToObjectOrientationNode |

    armsdk\iron\Sources\iron\math\Mat4.hx
    armsdk\iron\Sources\iron\object\Transform.hx:31
    armsdk\armory\Sources\armory\logicnode\SetRotationNode.hx:22

```haxe
    package armory.logicnode;

    import iron.object.Object;
    import iron.math.Quat;
    import armory.trait.physics.RigidBody;

    class SetRotationNode extends LogicNode {

        public var property0: String; // UNUSED

        public function new(tree: LogicTree) {
            super(tree);
        }

        override function run(from: Int) {
            var object: Object = inputs[1].get();
            if (object == null) return;
            var _q: Quat = inputs[2].get();
            if (_q == null) return;

            final q = new Quat(_q.x, _q.y, _q.z, _q.w).normalize();
            object.transform.rot.setFrom(q);
            object.transform.buildMatrix();

            #if arm_physics
            var rigidBody = object.getTrait(RigidBody);
            if (rigidBody != null) {
                rigidBody.syncTransform();
            }
            #end
            runOutput(0);
        }
    }
```

能不能对示例做一点小改进呢？比如射线击中刚体时，让物体按其输出的碰撞点法向对齐。

首先，修改键盘输入的逻辑节点，因为通过鼠标控件 Cone 模型的旋转操作更方便：

01. `OnUpdateNode` 替换掉 `OnKeyboardNode` 用来触发 Cone 模型的旋转操作； 
02. `RotateObjectNode` 指定一个 Vector 作为旋转偏移量，只需要 Z 轴上的旋转，设置弧度 0.2 左右；
03. 旋转偏移量数据处理：
    04. `GetMouseMovementNode` 滚轮数据作为旋转的偏移，滚轮动作时对应 1 和 -1，指定系数 0.2 即可;
    05. `VectorNode` 节将滚轮数据输入 Z 分量并输出到`RotateObjectNode` 对象旋转节点；
06. 以设置目的是在 Canvas UI 上显示滚轮数据的统计值：
    07. `SetVariableNode` 用来设置一个变量，将滚轮数据保存起来；
    08. `VectorNode` 这是另一个向量节点，用来保存变量数据，将它连接到 `SetVariableNode`；
    09. `VectorMath` 将上面获取到的滚轮数据与向量变量相加，统计的滚轮数据作为 Value 输入到变量设置节点；
10. `OnRender2DNode` 连接 `CanvasSetTextNode`，设置 Element = Text 将数据显示在控件上。
11. 最后，将变量设置节点连接 `OnUpdateNode` 事件流！

注意：这里为了能正确读取到实时更新的鼠标运动数据，变量设置节点必须连接 `OnUpdateNode` 事件流。

使用滚轮数据 wheelDelta 要注意，因为这个值是表示当下的运动值，只要滚轮没动就会立即置零。
Iron 框架的 Input 抽象将鼠标等输入设备的状态设计成了缓存的数据结构，只要没有及时读取出来的
动态数据，就会在稍后，帧绘画线束时清零，除了光标的坐标数据会保留。这就导致像 `PrintNode` 这些
节点可能无法打印出正确的数据，它们可能在 Iron 输入设备的 `reset()` 方法执行之后才得到执行。
这种情况就发生在 `On Render2D` 事件流后面连接的逻辑节点上，所以要正确读取到数据，就要优先
使用 `On Update` 这样的节点来运行所有需要读取输入数据的节点。

为了更方便地使用鼠标的移动来控制镜头的移动，需要对原生的 `WalkNavigation` 改造一下，将其镜头
拖拽的触发条件 `mouse.down()` 改变成 `mouse.moved`，代码片段参考如下。将新改造的扩展脚本
保存到 WalkNavigation 同目录下，即可以当作 Bundled Scripts 使用，注意清理后重新构造工程：

```haxe
    package armory.trait;

    import iron.Trait;
    import iron.system.Input;
    import iron.system.Time;
    import iron.object.CameraObject;
    import iron.math.Vec4;

    class WalkNavigationMM extends Trait {

        public static var enabled = true;

        @prop
        var speed = 5.0;

        var mouse: Mouse;
        var camera: CameraObject;


        public function new() {
            super();
            notifyOnInit(init);
        }

        function init() {
            mouse = Input.getMouse();

            try {
                camera = cast(object, CameraObject);
            }
            catch (msg: String) {
                trace("Error occurred: " + msg + "\nWalkNavigation trait should be used with a camera object.");
            }

            if (camera != null){
                notifyOnUpdate(update);
            }
        }

        function update() {
            if (!enabled || Input.occupied) return;

            // if (mouse.down()) {
            if (mouse.moved) {
                #if arm_yaxisup
                camera.transform.rotate(Vec4.yAxis(), -mouse.movementX / 200);
                #else
                camera.transform.rotate(Vec4.zAxis(), -mouse.movementX / 200);
                #end
                camera.transform.rotate(camera.right(), -mouse.movementY / 200);
            }
        }
    }
```


## 🐥 Armory Tutorials: physics_ragdoll physics_softbody

    |-- physics_ragdoll
    |   |-- README.md
    |   |-- checker.png
    |   |-- checker_rough.png
    |   `-- physics_ragdoll.blend
    |-- physics_softbody
    |   |-- README.md
    |   `-- physics_softbody.blend


## 🐥 Armory Tutorials: render_bloom

    |-- render_bloom
    |   |-- README.md
    |   `-- render_bloom.blend

  * [Post-Processing](https://github.com/armory3d/armory/wiki/screen-effects)

启用后期处理辉光效果：Render - Armory Render Path - Post Process - Bloom。
对其使用时间轴动画会引发异常：

    Sources/iron/data/ShaderData.hx:54: Shader data "bloom_pass" not found!
    Trace: TypeError: Cannot read property 'getContext' of null
        at <anonymous>:4528:21
        at <anonymous>:6560:5
        at <anonymous>:7833:5
        at Function.getSceneRaw (<anonymous>:6571:4)
        at Function.parse (<anonymous>:7829:18)
        at Function.getShader (<anonymous>:6553:24)
        at iron_RenderPath.loadShader (<anonymous>:4527:18)
        at new armory_renderpath__$Downsampler_DownsamplerFragment (<anonymous>:512:8)
        at Function.create (<anonymous>:473:10)
        at Function.init (<anonymous>:1482:89)


## 🐥 Armory Tutorials: render_colorgrading

    |-- render_colorgrading
    |   |-- Bundled
    |   |   `-- luttexture.jpg
    |   |-- README.md
    |   |-- extras
    |   |   |-- LUT_Cold.jpg
    |   |   |-- LUT_Color_Neutral.jpg
    |   |   |-- LUT_Noir.jpg
    |   |   |-- LUT_Selective.jpg
    |   |   |-- LUT_Sepia.jpg
    |   |   `-- LUT_Warm.jpg
    |   |-- img
    |   |   |-- calib_1.png
    |   |   |-- calib_2.png
    |   |   `-- tex1.jpg
    |   `-- render_colorgrading.blend

  * [Post-Processing](https://github.com/armory3d/armory/wiki/screen-effects)

1. https://www.studiobinder.com/blog/what-is-lut/
2. https://www.studiobinder.com/blog/color-grading-vs-color-correction-process/
3. https://docs.unity3d.com/540/Documentation/Manual/script-ColorCorrectionLookup.html
4. https://docs.unrealengine.com/4.26/zh-CN/RenderingAndGraphics/PostProcessEffects/UsingLUTs/



Color Correction Lut (Lut stands for lookup texture) is an optimized way of
performing color grading in a post effect. Instead of tweaking the individual
color channels via curves as in Color Correction Curves, only a single texture
is used to produce the corrected image. The lookup will be performed by using
the original image color as a vector that is used to address the lookup texture.

Advantages include better performance and more professional workflow opportunities,
where all color transforms can be defined in professional image manipulation
software (such as Photoshop or Gimp) and thus a more precise result can be achieved.

**LUT Textures** settings:

- Create a `Bundled` folder in project root
- Put a 512x512 LUT jpg in there
- Armory Render Path - Post Process panel: write `luttexture.jpg`

You might need to clean your project for it to show.

A color neutral LUT file have been included in `extras` folder.
Simply tweak the colors inside a photo-editing application and call it `luttexture.jpg`

Other LUT files have also been included.
Use them as you wish.

Includes pictures are public domain.
Provided by National Gallery of Arts.


## 🐥 Armory Tutorials: render_splitscreen Render Path

    |-- render_splitscreen
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- SplitScreen.hx
    |   `-- render_splitscreen.blend

* Engine Development
  * [Render Path](https://github.com/armory3d/armory/wiki/renderpath)
  * Voxel worlds for Armory https://github.com/armory3d/voxel_world
  * 实时渲染常用 Rendering Path https://www.cnblogs.com/polobymulberry/p/5126892.html

此示例演示屏幕分割，将两个镜头内容同屏显示。Blender 场景中添加主、副两个相机，固定机位即可以。
添加 Blender 吉祥物 Suzanne 猴头作为镜头内容测试，并给它属性面板 Armory Traits 列表中
添加一个逻辑节点树扩展，对模型做简单旋转操作：`On Update` 节点连接一个 `Rotate Object`，
旋转偏移设置 Z = 0.02 即可。

场景属性面板 Armory Scene Traits 添加一个 Haxe Script 扩展，类名为 SplitScreen：

1. `iron.Scene.active` 获取当前活动场景；
2. `scene.getChild()` 获取主、副镜头；
3. `iron.App.w()` 和 `h()` 方法获取 程序窗口的宽高，并分配好区间大小供两个镜头使用；
4. `camera.buildProjection()` 方法调整镜头成像尺寸比例；
5. `Scene.active.camera` 引用指定镜头；
6. `RenderPathCreator.path.currentG` 更新视图到画布；
7. `renderPath.drawMeshes()` 方法绘制所有可视网格，注意绘制时先设置活动相机镜头；


```haxe
    package arm;

    import iron.Scene;
    import iron.object.CameraObject;
    import armory.renderpath.RenderPathCreator;

    class SplitScreen extends iron.Trait {
        public function new() {
            super();

            notifyOnInit(function() {

                var drawMeshes = RenderPathCreator.drawMeshes;

                // Single viewport size
                var w = Std.int(iron.App.w() / 2);
                var h = iron.App.h();

                // Retrieve cameras
                var cam1:CameraObject = cast Scene.active.getChild("Camera");
                var cam2:CameraObject = cast Scene.active.getChild("Camera.001");
                cam1.buildProjection(w / h);
                cam2.buildProjection(w / h);

                // Override draw method to draw split screen
                RenderPathCreator.drawMeshes = function() {

                    var g = RenderPathCreator.path.currentG;

                    // Left viewport
                    RenderPathCreator.setTargetMeshes();
                    Scene.active.camera = cam1;
                    g.viewport(0, 0, w, h);
                    drawMeshes();

                    // Right viewport
                    RenderPathCreator.setTargetMeshes();
                    Scene.active.camera = cam2;
                    g.viewport(w, 0, w, h);
                    drawMeshes();
                }
            });
        }
    }
```

示例文件结构虽然简单，但涉及的内容有点复杂，在解释**Render Path**之前需要了解一些图形学基础，
渲染引擎设计，以及 GPU 的工作原理。

1. **Frame Buffer** 帧缓存，是一组缓存构成的帧图像数据，包括颜色缓存、深度缓存、模板缓存等等；
2. **Color Buffer** 颜色缓冲，在主内存中保存每帧存储的颜色信息；
3. **Stencil Buffer** 镂空模板缓存，Stencil 是穿孔网板的意思，用来屏蔽像素，限制可渲染区域；
4. **Z-Buffer** 深度缓冲，Z 表示深度轴向，用灰度图像记录屏幕空间所有点的深度，即视线与物体的距离；
5. **G-Buffer** 几何缓冲，保存屏幕空间坐标，法线，diffuse，specular 颜色等等；

目前主流的游戏和图形渲染引擎，包括底层的 DirectX 或 OpenGL API 都开始支持现代的图形渲染管线。
现代的渲染管线也称为可编程管线（Programmable Pipeline）。相对于旧 GPU 框架设计，使用固定管线，
固定在硬件的部分功能，比如顶点的处理，像素颜色的处理等等，在现代 GPU 上都可以进行编程。这种设计
的好处就是用户可以自由发挥的空间增大，缺点就是开发者必须提供实现，其中大量的工作由引擎开发者负责。

计算机渲染图像就是模拟人类绘画的过程，只是在执行上有些原理不同。可以形象地将 Pass 理解为画一幅画
的完整过程，从打草稿构图、明暗调整阶段、上色阶段、以及最后的精修阶段。

**Rendering Pass**其实没有非常严格的标准定义，根据渲染引擎的实现，或多或少有些不同。常见的
Rendering Pass 有 Pre-Z、Color、Post Effect。每一个 Pass 基本就是一个完整的图形渲染流程，
从顶点计算、着色、光栅化等一套流程，从而得到一帧数据的过程，因此也可以称为一个渲染回合。

一个渲染技术里面通常包含一个或多个 Pass，可以理解为工序，比如：

1. 最简单的**Forward path**就一个 Pass 完成渲染。
2. PC 家用机 **Deferred Lighting** 需要 2 个 Pass 完成一个物体的渲染：Z Test 和 Lighting。
3. 而如果需要投影，那么就加一个阴影 Pass；
4. 需要精细反射图，那就需要一个反射 Pass；
5. 编辑器模式下需要给这个物体显示线框之类的指示器，那这个物体就要多个指示器 Pass；
6. 2D 菜单要有个 Mesh 剪影，那就加个剪影 Pass ...
7. 本次 GPU 执行的结果写入某个 Render Target，完成一个 Pass 工序。

虽然每个渲染 Pass 都会得到一帧信息，但同时也消耗了更多资源。如果单 pass 可以完成渲染就没有
必要用多 pass.只有在需要更高级的效果，或者需要更多信息，但是一次 pass 又提供不了的时候使用
Multi-pass，就是多个 Pass 流程配合渲染一帧的图像效果。

对现代的 D3D12/Vulkan/Metal API 接口来说，Render Pass 的内涵已经更新，因为当前 GPU 构架
设计在不同程度转向**Tile-Based Rendering**，基于块的渲染方式。所谓 Tile，即切割几何空间为
小块矩形区域的过程，光栅化和片段处理在每 Tile 中进行。TBR 的目的是在最大限度地减少 fragment
shading 期间 GPU 需要的外部内存访问量，从而节省内存带宽。TBR 将屏幕分成小块，并在其写入内存
之前进行片段着色。为了实现这一点，GPU 必须预先知道哪些几何体属于这个块。因此，TBR 将渲染通道
拆分为二：

1. Pass1：Tiling，执行所有与几何相关的处理，生成 tile primitive list，以指示包含哪些图元。
2. Pass2：Tile raster，逐块进行光栅化并且进行 Fragment shading，并在完成后将其写回内存。

早期的渲染方式都是 IMR (Immediate Mode Rendering)，优势是每个 primitive 直接提交渲染，
pipeline 没有中断，可以并行，渲染速度快，每个 Raster core 只要负责 render 分给它的图元即可，
无需其他控制逻辑，只需在 pixel shader 后对 Raster 输出的像素做个排序。

IMR 的劣势在于带宽压力和功耗较大：

Z-Buffer 生成需要进行深度测试，还有 blending 过程，都要频繁从 framebuffer 里读数据，
毕竟它存储于 Memory，带宽压力和功耗自然高；

Overdraw 的问题，比如程序在一帧里先画了棵树，然后画了面墙刚好遮住了树，IMR 模式下树仍然要在
Pixel Shader 里进行纹理采样，即又要访问 Memory，访存功耗大。正因为这种劣势，Mobile GPU
构架设计多数转向 TBR。


渲染路径**Rendering Path**决定光照如何应用到着色程序中，简言之，Rendering Path 就是当前
渲染目标获得光照的流程。以下是常见的渲染路径：

1. Forward Rendering 正向渲染，是传统渲染路径，光源及其对物体的光照度同时处理。
2. Deferred Shading 延迟渲染，延迟是指光照延时处理，Deferred Lighting。
3. Intel SIGGRAPH Courses 2010 - Tiled-based Deferred Shading
4. Forward+: Bringing Deferred Lighting to the Next Level

传统正向渲染的思路是：先进行着色，再进行深度计算，而且着色是逐光源计算其对逐个物体的贡献度，相当于
两层循环程序结构，算法复杂度为 O(m * n）。假如场景中有 1000 个物体，总共 100000 个三角面，
场景中有 100 个光源，那么就是循环处理 100 个光源对这 100000 个三角面的光照，计算量十分巨大。
况且有相当一部分物体是会被其他物体遮挡掉的，这又是一种性能浪费。

延迟渲染则会先把所有物体都先绘制到屏幕空间的几何缓冲区，Geometric Buffer，再逐光源对该缓冲进行
着色，算法复杂度变成 O(m + n)，避免因计算被深度测试丢弃的⽚元的着色而产⽣的不必要的开销。延迟渲染
这种基本思想和传统正向渲染的区别在于：先执行深度测试，再进行着色计算，将本来在三维空间进行光照计算
的问题转换到了二维空间。

以下伪代码可以很好地解释两渲染路径的算法设计思维差别：

```py
    # Forward Rendering
    For each light:
        For each object affected by the light:
            framebuffer += object * light

    # Deferred Lighting
    For each object:
        Render to multiple targets
    For each light:
        Apply light as a 2D postprocess
```

Armory **Render Path** 是可编程式设计，通过创建 `RenderPathCreator` 类并将代码放置到
项目下的 Libraries 目录中，并且在 Render - Armory Render Path - Driver 指定自己的实现，
即可以替换 Armory 默认的渲染路径。参考 Celshade/toon renderer：

    git clone https://github.com/armory3d/driver_celshade
    git clone --recursive https://github.com/armory3d/driver_celshade_example

在工程中创建 `RenderPathCreator` 并放置到以下位置即可以覆盖 Armory 内部的 Render Path，
注意，这种方式不会出现 Armory Render Path - Driver 列表。不同于 Celshade 示例放置在
Libraries 目录有一个 Blender 插件，它调用 `arm.api.add_driver()` 设置属性面板，提供
Driver 列表的选择项，深入定制就要涉及着色器程序的设计：

    blend_root/Sources/arm/renderpath/RenderPathCreator.hx

    Libraries
    `-- Libraries\driver_celshade
        |-- Libraries\driver_celshade\LICENSE.md
        |-- Libraries\driver_celshade\README.md
        |-- Libraries\driver_celshade\Sources\celshade\renderpath
        |   `-- celshade\renderpath\RenderPathCreator.hx
        `-- Libraries\driver_celshade\blender.py

```haxe
    package arm.renderpath;

    import iron.RenderPath;

    class RenderPathCreator {

        public static function get():RenderPath {
            var path = new RenderPath();
            path.commands = function() {
                path.setTarget(""); // Draw to framebuffer
                path.clearTarget(0xffffffff, 1.0); // Clear color & depth
                path.drawMeshes("mesh"); // Draw all visible meshes
            };
            return path;
        }
    }
```

结合后期处理，可以更有效率地提升画面质量，比如 [LUT Textures]，通过渲染器属性面板激活相应的功能：
Render - Armory Render Path - Compositor - Lens Texture 或者 LUT Colorgrading 启用。
It is possible to access pre-tonemaped color, depth, normals,..



Render Path 模块代码文件

    |-- armory.renderpath
    |   |-- armory\renderpath\Downsampler.hx
    |   |-- armory\renderpath\DynamicResolutionScale.hx
    |   |-- armory\renderpath\HosekWilkie.hx
    |   |-- armory\renderpath\HosekWilkieData.hx
    |   |-- armory\renderpath\Inc.hx
    |   |-- armory\renderpath\Nishita.hx
    |   |-- armory\renderpath\Postprocess.hx
    |   |-- armory\renderpath\RenderPathCreator.hx
    |   |-- armory\renderpath\RenderPathDeferred.hx
    |   |-- armory\renderpath\RenderPathForward.hx
    |   |-- armory\renderpath\RenderPathRaytracer.hx
    |   |-- armory\renderpath\RenderToTexture.hx
    |   `-- armory\renderpath\Upsampler.hx


## 🐥 Armory Tutorials: render_to_texture

    |-- render_to_texture
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- render_to_texture.blend

此示例演示使用 image render target 保存纹理，并通过 Plane 显示出来。

Blender 场景中添加一个猴头模型用于地成象测试，创建一个 Plane 用来显示绘画在 [Render Target]
上的纹理。添加两个相机，主相机进行漫步控制，副相机用来获取图像并渲染到 [Render Target] 中保存。

在猴头对象属性面板 Armory Traits 添加一个 Bundled，类型列表中选择 `SimpleRotateObject`,
这个内置扩展使用 Keyboard `R T F G V B` 来旋转对象。

在主相机属性面板 Armory Traits 添加一个 Bundled，类型列表中选择 `WalkNavigation`，这个扩展
使用 QEWASD 键控制相机漫步控制。可以将模型作为相机的子节点，移动相机时间接实现模型的移动。

Plane 对象属性面板 Armory Traits 列表中添加一个 Haxe Script 扩展，类名为 MyTrait，用于
执行渲染目标的绘制处理，代码逻辑如下：

1. `iron.Scene.active` 静态成员引用当前活动场景。
2. `scene.getChild()` 获取场景中的副相机镜头，并使用 `cast()` 方法转换为 CameraObject。
3. `kha.Image.createRenderTarget()` 方法创建一个 image render target 对象用于保存纹理。
4. MyTrait 附着在 Plane，所以 object 属性就引用它，使用 `cast()` 方法转换为 MeshObject。
5. renderTarget 赋值给 Plane 的材质中纹理属性，这样就可以将渲染渲染目标的纹理显示出来。
6. `notifyOnRender()` 回调中，调用副镜头 `renderFrame()` 方法将场景图像保存到纹理。

设置材质属性 Armory Props - Cull Mode 可以指定显示正面、背面或两面都显示。

使用逻辑节点编程：

在场景属性面板 Armory Scene Traits 添加一个 Logic Node 扩展，并打开逻辑节点编辑器进行设计；
Render Path - `Create Render Target` 相当于调用 `createRenderTarget()` 创建渲染目标，
渲染目标创建后应该重复利用，所以使用 `On Init` 节点提供事件流。


```haxe
    package arm;

    class MyTrait extends iron.Trait {
        public function new() {
            super();

            notifyOnInit(function() {
                // Retrieve camera object
                var cam = cast(iron.Scene.active.getChild("Camera.001"), iron.object.CameraObject);

                // Create render target for camera
                cam.renderTarget = kha.Image.createRenderTarget(
                    640,
                    360,
                    kha.graphics4.TextureFormat.RGBA32,
                    kha.graphics4.DepthStencilFormat.NoDepthAndStencil
                );

                // Display camera output on this plane
                var o = cast(object, iron.object.MeshObject);
                o.materials[0].contexts[0].textures[0] = cam.renderTarget; // Override base color texture

                notifyOnRender(function(g:kha.graphics4.Graphics) {
                    // Set as scene camera
                    var activeCamera = iron.Scene.active.camera;
                    iron.Scene.active.camera = cam;

                    // Update camera output
                    cam.renderFrame(g);

                    // Restore original camera
                    iron.Scene.active.camera = activeCamera;
                });
            });
        }
    }
```



## 🐥 Armory Tutorials: render_voxelao_teapots

    |-- render_voxelao_teapots
    |   |-- render_voxelao_teapots.blend
    |   `-- shadows.blend

## 🐥 Armory Tutorials: screentex

    |-- screentex
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- screentex.blend

## 🐥 Armory Tutorials: script_camera_lerp

    |-- script_camera_lerp
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- CameraTrait.hx
    |   |       `-- MyTrait.hx
    |   `-- script_camera_lerp.blend

## 🐥 Armory Tutorials: script_linkedgroup

    |-- script_linkedgroup
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- PinSpawner.hx
    |   |       `-- PinTrait.hx
    |   |-- pin.blend
    |   `-- script_linkedgroup.blend

## 🐥 Armory Tutorials: script_logic_talk

    |-- script_logic_talk
    |   `-- property
    |       |-- Sources
    |       |   `-- arm
    |       |       `-- ReadConfig.hx
    |       `-- property.blend

## 🐥 Armory Tutorials: script_properties

    |-- script_properties
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- script_properties.blend

## 🐥 Armory Tutorials: script_properties_global

    |-- script_properties_global
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- Config.hx
    |   |       `-- ReadConfig.hx
    |   `-- script_properties_global.blend

## 🐥 Armory Tutorials: script_rigidbody_trigger

    |-- script_rigidbody_trigger
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- Trigger.hx
    |   `-- script_rigidbody_trigger.blend


## 🐥 Armory Tutorials: script_transform

    |-- script_transform
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- TransformTest.hx
    |   `-- script_transform.blend


## 🐥 Armory Tutorials: scene_stream

    |-- scene_stream
    |   |-- README.md
    |   `-- scene_stream.blend

- Scene contains 3000+ unique, non-linked meshes, first build may take over 30 sec
- Far plane is set to 100 to visualize streaming
- Object is streamed at camera distance less than (far_plane * 1.1), and unloaded at distance over (far_plane * 1.5)
- Check debug console to see amount of objects loaded
- Mobile render path is set to focus on stream performance

- Only HTML5 streaming is multi-threaded currently
- Materials (and associated textures) are preloaded at scene startup

## 🐥 Armory Tutorials: server_stream

    |-- server_stream
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       |-- ArcBall.hx
    |   |       |-- LoadTrait.hx
    |   |       `-- ObjParser.hx
    |   `-- server_stream.blend

通过 haxe.Http(url) 加载 Web 服务器 OBJ 模型文件。


## 🐥 Armory Tutorials: sound

    |-- sound
    |   |-- Bundled
    |   |   |-- hit0.wav
    |   |   |-- hit1.wav
    |   |   `-- hit2.wav
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- SoundControl.hx
    |   |-- drums.wav
    |   `-- sound.blend


## 🐥 Armory Tutorials: tilesheet tilesheet_2d tilesheet_walkcycle

    |-- tilesheet
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- AnimControl.hx
    |   |-- textures
    |   |   |-- dungeon tileset calciumtrice simple.png
    |   |   |-- minotaur spritesheet calciumtrice.png
    |   |   |-- orc spritesheet calciumtrice.png
    |   |   |-- ranger spritesheet calciumtrice.png
    |   |   |-- rogue spritesheet calciumtrice_0.png
    |   |   |-- warrior spritesheet calciumtrice.png
    |   |   `-- wizard spritesheet calciumtrice.png
    |   `-- tilesheet.blend
    |-- tilesheet_2d
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- AnimControl.hx
    |   |-- textures
    |   |   |-- dungeon tileset calciumtrice simple.png
    |   |   |-- minotaur spritesheet calciumtrice.png
    |   |   |-- orc spritesheet calciumtrice.png
    |   |   |-- ranger spritesheet calciumtrice.png
    |   |   |-- rogue spritesheet calciumtrice_0.png
    |   |   |-- warrior spritesheet calciumtrice.png
    |   |   `-- wizard spritesheet calciumtrice.png
    |   `-- tilesheet_2d.blend
    |-- tilesheet_walkcycle
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- AnimControl.hx
    |   |-- sprite_tux.png
    |   `-- tilesheet_walkcycle.blend

Tilesheet 是 Sprite Animation 工具，通过连续切换图片帧实现动画效果。

- Tilesheet 演示了如何通过材质纹理设置 + Play Tilesheet 逻辑节点播放 Sprite Animation。
- Tilesheet 2D 演示了使用 armory.trait.WalkNavigation 进行相机漫步控制。
- Tilesheet Walkcycle - The level is built using SpryTile blender add-on.

SpryTile 插件目前支持 Bledner 2.83:

1. Sprytile - low-poly scenes https://github.com/Sprytile/Sprytile
2. Quick Start - Sprytile https://docs.sprytile.xyz/quick-start

在场景中添加一个 **Plane**，并添加 Armory PBR 材质，设置 Base Color 和 Opacity 材质纹理，

材质面板中 Armory Tilesheet 列表中添加的 Titlesheet，通常可以在列表中命名为 Character，
这此对象可以设置多个动作动画，但是这些不是专为当前选中对象设置的，而是给那些通过其**对象属性面板**
激活了 Armory Props - Animation 并设置 Tilesheet 和 Action 的对象使用。并且需要配合材质
设置，将动画图像纹理的 Color 和 Alpha 连接到 Armory PBR 着色器的 Base Color 和 Opacity。

另外，对象数据属性面板中 UV Maps 设置的纹理坐标数据非常重要，因为 Sprite Animation 纹理图像
就是通 UV 坐标映射到几何体上的。如果几何体未提供编辑好的 UVMap，或者连默认的 UVMap 都没有，那
就需要进行 UV 坐标碾平，根据纹理图像进行调整。

注意，不要在 Cube 这样的非平面几何体上使用 Tilesheet 动画，Armory 目前不支持：

    Trace: TypeError: Cannot read property 'tileX' of null


tilesheet_2d 示例使用 WalkNavigation 控制相机运动，WASDQE 按键移动，加鼠标拖动旋转，滚轮
调节移动速度。只能在相机属性面板 Armory Traits 添加 `WalkNavigation` 这个扩展，可以将模型
作为相机的子节点，移动相机时间接实现模型的移动。

```js
project.addParameter('armory.trait.WalkNavigation');
project.addParameter("--macro keep('armory.trait.WalkNavigation')");
// armsdk\armory\Sources\armory\trait\WalkNavigation.hx
```

WalkNavigation 需要与 Camera 对象一起使用，即通机制的 Armory Traits 列表中添加它。
但是翻遍 Blender 界面后，依然没有找到它的设置面板，从插件，到属性面板，从 3D 视图到逻辑节点，
都没有发现。并且手动给相机 Armory Traits 列表添加 Bundled - WalkNavigation，也不能替代
这个“隐藏”的漫步导航器，这种无原由的问题着实令人难受。

示例中定义了 RotateCamera 逻辑节点用来旋转几何体，节点按以下方式设置：

1. Event - `On Update` 事件流输出到 Rotate Object 节点；
2. Transform - `Rotate Object` 用于旋转 Trait 所附着的对象；

用来旋转相机时，可以将相机装入 Empty 对象或者其它几何体，作为子对象，旋转的父级从面带动相机，
方便处理相机的取景角度调整。并且，将 Empty 放置在取景焦点位置，然后对它旋转，相机就会围绕焦点。
另外，Rotation 中指定各轴旋转速度分量的大小。使用四元数 Quaternion 旋转时，分量设置 W = 1，
再设置各轴的旋转速度。

    armory\blender\arm\logicnode\transform\LN_rotate_object.py
    armory\Sources\armory\logicnode\RotateObjectNode.hx

Rotate Object 节点中 object 没有指定受控目标，则控制 Trait 所附着的对象。旋转方式有二：

1. Local F.O.R 绕对象局部坐标旋转，Frame of reference oriented with the object。
2. Global/Parent F.O.R 绕全局坐标/父节点坐标旋转。


官方三个 Tilesheet 教程都使用了相同对象动画控制器 AnimControl.hx：

```haxe
    package arm;

    class AnimControl extends iron.Trait {

        var tilesheet:iron.object.Tilesheet;

        public function new() {
            super();

            notifyOnInit(function() {
                tilesheet = cast(object, iron.object.MeshObject).tilesheet;
                iron.system.Tween.timer(Std.random(8), playAnim);
            });
        }

        function playAnim() {
            tilesheet.play("rest", function() {
                tilesheet.play("idle");
                iron.system.Tween.timer(Std.random(8), playAnim);
            });
        }
    }
```

Trait 类型中 object 引用了几何体对象，通过转型函数 cast() 转换为 `MeshObject`，此对象由
Iron 提供，用来操作几何体，tilesheet 就是其中之一，`Tilesheet` 对象提供了 Sprite 动画的
基本控制方法。通过 Tween.timer() 周期性地播放动画，rest 动画播完就进入 idle 动画，再随机
地等待几秒时间。

    iron\object\MeshObject.hx
    iron\object\Tilesheet.hx
    armory_examples-22.06\tilesheet_walkcycle\Sources\arm\AnimControl.hx

    public function play(action_ref: String, onActionComplete: Void->Void = null) {}
    public function pause() {}
    public function resume() {}
    public function remove() {}

    function update() {}
    function setFrame(f: Int) {}


## 🐥 Armory Tutorials: tween

    |-- tween
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- tween.blend

Tween 缓动曲线动画示范，示例场景中只有一个 Cube 模型，并为其对象属性添加了 Armory Traits 扩展。
其中 Haxe 脚本代码扩展使用了 Tween 缓动曲线：

```haxe
    package arm;

    import iron.system.Tween;
    import iron.math.Vec4;
    import iron.math.Quat;

    class MyTrait extends iron.Trait {

        public function new() {
            super();

            notifyOnInit(function() {
                scaleUp();
            });
        }

        var q = new Quat();

        function scaleUp() {
            // Begin tween
            iron.system.Tween.to({
                target: object.transform,
                props: { // Target values to tween
                    loc: new Vec4(0, 0, 1),
                    scale: new Vec4(1.5, 1.5, 1.5),
                    rot: q.fromEuler(0, 0, Math.PI / 2), // Radians
                },
                duration: 1.0,
                // Optional
                delay: 0, // Wait before tweening starts
                tick: function() { trace("Scaling up"); }, // Tweening in progress
                done: scaleDown, // Tweening finished
                ease: Ease.ExpoOut
            });

            // Single vector component
            // iron.system.Tween.to({
            //     target: object.transform.loc,
            //     props: { z: 1.0 },
            //     duration: 1.0,
            //     done: scaleDown,
            //     // Make sure transform matrix gets updated
            //     tick: function() { object.transform.dirty = true; }
            // });
        }

        function scaleDown() {
            iron.system.Tween.to({
                target: object.transform,
                props: {
                    loc: new Vec4(0, 0, 0),
                    scale: new Vec4(1, 1, 1),
                    rot: q.fromEuler(0, 0, 0)
                },
                duration: 1.0,
                delay: 0,
                tick: function() { trace("Scaling down"); },
                done: scaleUp,
                ease: Ease.Linear
            });
        }
    }
```


## 🐥 Armory Tutorials: ui_canvas ui_events

    |-- ui_canvas
    |   |-- Assets
    |   |   |-- crate.png
    |   |   `-- license.txt
    |   |-- Bundled
    |   |   `-- canvas
    |   |       |-- MyCanvas.files
    |   |       |-- MyCanvas.json
    |   |       `-- _themes.json
    |   |-- README.md
    |   |-- Sources
    |   |   |-- Main.hx
    |   |   `-- arm
    |   |       |-- CanvasTrait.hx
    |   |       `-- node
    |   |           `-- NodeTree.hx
    |   |-- khafile.js
    |   |-- ui_canvas.blend
    |   `-- ui_canvas.blend1
    |-- ui_events
    |   |-- Bundled
    |   |   `-- canvas
    |   |       |-- MyCanvas.files
    |   |       `-- MyCanvas.json
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   `-- ui_events.blend


官方系列教程示范 UI 界面的使用，Armory2D 是一个可视化 UI 编辑编辑器，使用 **Zui** UI 框架，
此构架受 imgui 启发，Immediate Mode 即时刷新模式 UI 构架，使用 Haxe 和 Kha 实现。
使用 Armory2D 编辑器进行可视化界面设计，Bundled 目录下 JSON 文件中保存。

Armory3D SDK 本身已经包含 Armory2D 工具，要从 Blender 中启动 Armory2D editor，
只需要添加一个 UI Armory Trait，并编辑它。例如，Scene 属性面板中向 Armory Scene Traits
列表添加一个 UI Trait。然后点击编辑按钮打开 Armory2D 编辑器。

或者直接执行 Krom 加载 Armory2D。
Armory2D UI Editor https://github.com/armory3d/armory/wiki/ui_editor

    Krom.exe C:\HaxeToolkit\armsdk\lib\armory_tools\armory2d\d3d11

1. UI Canvas 演示对象 Armory Trait 列表中的 Canvas UI 设计，和逻辑节点与 UI 控件的交互；
2. UI Events 演示事件节点、逻辑门的事件流控制，以及对象的坐标位置处理和移动操作；
3. UI Script 2D 演示如何通过 Trait 脚本扩展构造出 UI 界面，以及使用 UI 控件变换几何对象；
4. UI Script 3D

UI Ccanvas 示例中只使用了 Canvas UI 和逻辑节点编程，以及使用 Armory Trait 扩展。

Blender 场景中没有放置任何对象，所有图形界面都来自于场景属性面板 Armory Scene Traits 列表
中定义的扩展，使用中的有三个扩展类型：

1. Haxe Script 扩展，定义了一个 `CanvasTrait` 类型，。
2. Logic Nodes 扩展，在逻辑节点编辑器中设置的节点树，命名为 NodeTree。
3. Canvas UI 扩展，Armory2D 设计器创建的 2D 用户界面保存在 Bundled/canvas/MyCanvas.json

逻辑节点编辑器提供了一个可视化编程工具，通过将设计好的逻辑节点树附加到对象的 Armory Traits
列表上，使用对象受到逻辑节点的程序的控制。示例中只定义了 `NodeTree` 这个节点树：

1. Event - `On Init` 事件节点会在初始化时执行，将事件流向哪个节点，相关的节点就得到运行；
2. Event - `On Event` 自定义事件侦听器，指定要侦听的事件名称，并选择执行方式，Update 为持续式；
3. Canvas - `Set Canvas Text` 节点可以设置 Canvas UI 控件的文本；

示例中没有为 `On Event` 指定事件名，所以它目前还不起作用，并且 `NodeTree` 节点树也没有在
Armory Traits 列表中激活。现在要启用它来设置 MyButton 按钮的文本，只需要指定事件名称为
buttonEvent，要和 UI 控件中的 Script Event 指定的命名一致，然后在 Armory Traits 列表
中激活逻辑节点树，即可以按 F5 运行以测试。


Haxe 脚本中定义的 `CanvasTrait` 类型扩展自 iron.Trait，是扩展对象功能的主要形式。

通过 Event.add() 注册事件处理器，侦听 UI 控件 Script Event 属性中指定的事件，当用户界面
触发相应的事件时，就会调用注册好的事件处理函数。可以通过 `CanvasScript` 类型提供的方法访问
Zui UI 框架的控件。

通过 `getElement()` 方法只能获取控件的初始状态值，在程序中更新控件的属性数据在界面上有反映。
因为这是立即模式的 UI 框架，所有控件就是一个函数调用，因此没有控件的状态信息。控件所对应数据
以 `Handle` 类型的形式保存在内存中某一个位置，需要通过 `getHandle()` 方法读取。

脚本中给 MyButton 添加了事件处理函数，用来记录按钮点击次数，并以按钮的文本方式显示。因为还有
逻辑节点，并且逻辑节点的程序会覆盖 Trait 扩展脚本中的功能，不管逻辑节点在列表中的位置是靠前
还是靠后。

所以，Armory Traits 列表中的 NodeTree 逻辑节点扩展激活时，就会以 `Set Canvas Text`
节点中设置的字符串值为准，并在按钮上显示。

```Haxe
    package arm;

    import iron.Scene;
    import iron.App;
    import iron.system.Time;
    import armory.system.Event;
    import armory.trait.internal.CanvasScript;

    class CanvasTrait extends iron.Trait {

        var canvas:CanvasScript;
        var clicks = 0;

        public function new() {
            super();

            notifyOnInit(function() {
                // Get canvas attached to scene
                canvas = Scene.active.getTrait(CanvasScript);

                // Notify on button click
                Event.add("buttonEvent", onEvent);
                Event.add("toggleMenu", onToggleMenu);

                canvas.notifyOnReady(function() {
                    notifyOnUpdate(update);
                });
            });
        }

        function onEvent() {
            // Set butotn text
            canvas.getElement("MyButton").text = Std.string(++clicks);
        }

        function onToggleMenu() {
            var shape = canvas.getElement("Shape");
            shape.visible = !shape.visible;
        }

        function update() {
            // Canvas may be still being loaded
            if (!canvas.ready) return;

            // Set text
            canvas.getElement("MyText").text = "Hello world";

            // Move image
            var img = canvas.getElement("MyImage");
            var center = App.w() / 2 - img.width / 2;
            img.x = center + Math.sin(Time.time()) * 100;
            img.rotation = canvas.getHandle("Check").selected ? Math.PI / 4 : 0;
        }
    }
```

UI Events 示例场景中有相机，有灯光，也有模拟地面的 Plane，还有一个 Cube，并且所有扩展功能
都在 Cube 对象上，在对象属性面板 Armory Traits 列表有有三个扩展：

1. MyCanvas 界面扩展设计了一个按钮，名称为 Button，事件名为 move_box。
2. MyTrait 脚本扩展代码如下，注册了一个 button 事件侦听器，注意和按钮的事件定义不一致。
3. NodeTree 逻辑节点树扩展，节点虽然是连接好的，但功能设计是缺失的。

要启用 MyTrait 中注册的事件有多种方式，以下是两种参考方式：

在逻辑节点编辑器中用 `On Event` 节点驱动 `Send Global Event` 节点。前者注册 move_box
事件侦听器，并且设置为 Update 持续触发方式。后者只要填入要触发的全局事件名称，即填入 button。
因为 MyTrait 注册事件侦听器时使用默认的 event mask，注册的是全局事件。

另一种方式最直接，修改代码中的事件名，将 button 改变为 move_box。

NodeTree 逻辑节点树中使用到的节点说明：

1. Logic - `Gate` 逻辑比较门，用于判断条件成立与否，然后在 True 和 False 两个端口输出控制流。
2. Transform - `Translate Object` 按偏移值移动对象，激活 On Local Axis 相对于局部坐标移动。
3. Transform - `Get Object Location` 获取指定对象的位置坐标。
4. Math - `Seprate XYZ` 分拆向量输出分量。
5. Variable - `Flaot` 定义一个浮点变量。

整个逻辑节点树的功能就是按 Y 轴方向移动 Cube，然后判断对象的 Y 位置，与一个浮点变量值对比，
如果大小这个浮点值，就重置 Cube 的位置。按这个逻辑操作，节点连接不变，设置如下：

1. `On Event` 节点指定 move_box 事件名，事件流向 `Translate Object` 并指定移动对象为 Cube。
2. 事件流向 `Gate` 逻辑比较门，并将条件成立时产生的 True 控制流向用于复位的 `Translate Object`。
3. `Get Object Location` 获取的坐标通过 `Seprate XYZ` 分拆，将 Y 值流向 `Gate` 用于比较。
4. 再将保存参考值的浮点变量连接到 `Gate` 逻辑比较门用于比较，使 Y 值大于参考值时输出 True 控制流。

将节点附加到 Cube 对象的 Armory Traits 列表后，可以省略移动对象的指定，使用默认值，即当前
逻辑节点所附着的对象。

```haxe
    package arm;

    class MyTrait extends iron.Trait {
        public function new() {
            super();
            armory.system.Event.add("button", onEvent);
        }

        function onEvent() {
            var loc = object.transform.loc;
            loc.y += 1;
            if (loc.y > 4) loc.y -= 8;
            object.transform.buildMatrix();
        }
    }
```


## 🐥 Armory Tutorials: ui_script2d ui_script3d

    |-- ui_script2d
    |   |-- README.md
    |   |-- Sources
    |   |   |-- Main.hx
    |   |   `-- arm
    |   |       `-- UITrait.hx
    |   |-- khafile.js
    |   `-- ui_script2d.blend
    |-- ui_script3d
    |   |-- Assets
    |   |   `-- dummy.jpg
    |   |-- README.md
    |   |-- Sources
    |   |   |-- Main.hx
    |   |   `-- arm
    |   |       `-- UITrait.hx
    |   |-- checker.png
    |   |-- checker_rough.png
    |   |-- khafile.js
    |   `-- ui_script3d.blend


## 🐥 Armory Tutorials: wasm_call wasm_trait_c wasm_trait_rust

    |-- wasm_call
    |   |-- Bundled
    |   |   `-- main.wasm
    |   |-- README.md
    |   |-- Sources
    |   |   `-- arm
    |   |       `-- MyTrait.hx
    |   |-- main.c
    |   |-- wasm.png
    |   `-- wasm_call.blend
    |-- wasm_trait_c
    |   |-- Bundled
    |   |   `-- main.wasm
    |   |-- README.md
    |   |-- main.c
    |   |-- wasm.png
    |   `-- wasm_trait_c.blend
    |-- wasm_trait_rust
    |   |-- Bundled
    |   |   `-- main.wasm
    |   |-- README.md
    |   |-- main.rs
    |   |-- wasm.png
    |   `-- wasm_trait_rust.blend

WebAssembly 字节码文件称为一个 Module，可以使用 Rust/C/C++/Emscripten 编译得到 WASM 文件。
https://github.com/armory3d/armory/wiki/wasm



## 🐥 Armory Tutorials: world_sun_direction

    world_sun_direction
    |-- README.md
    |-- Sources
    |   `-- arm
    |       `-- MyTrait.hx
    `-- world_sun_direction.blend



# 🥚 Armory3D Wiki
https://github.com/armory3d/armory/wiki

Clone this wiki locally

    git clone https://github.com/armory3d/armory.wiki.git


* Getting Started

  * [Setup](https://github.com/armory3d/armory/wiki/setup)
  * [Troubleshooting](https://github.com/armory3d/armory/wiki/troubleshooting)
  * [Playground tutorial](https://github.com/armory3d/armory/wiki/playground)
  * [Tanks tutorial](https://github.com/armory3d/armory/wiki/tanks)
  * [Tutorials by community](https://github.com/armory3d/armory/wiki/community_tutorials)

* Essentials

  * [Armory API](https://api.armory3d.org/)
  * [Traits](https://github.com/armory3d/armory/wiki/traits)
  * [Multi-User](https://github.com/armory3d/armory/wiki/multiuser)
  * [Optimize](https://github.com/armory3d/armory/wiki/optimize)
  * [Krom](https://github.com/armory3d/armory/wiki/krom)
  * [Physics](https://github.com/armory3d/armory/wiki/physics)
  * [Sound](https://github.com/armory3d/armory/wiki/sound)
  * [Navmesh](https://github.com/armory3d/armory/wiki/navmesh)
  * [Terrain](https://github.com/armory3d/armory/wiki/terrain)
  * [UI Editor](https://github.com/armory3d/armory/wiki/ui_editor)
  * [Events](https://github.com/armory3d/armory/wiki/Events)
  * [Debug](https://github.com/armory3d/armory/wiki/debug)

* Logic Nodes
  * [Introduction](https://github.com/armory3d/armory/wiki/Introduction-to-Logic-Nodes)
  * [Reference](https://github.com/armory3d/armory/wiki/reference)
  * [Common Mistakes](https://github.com/armory3d/armory/wiki/Common-Mistakes)

* Graphics

  * [Materials](https://github.com/armory3d/armory/wiki/materials)
  * [Global Illumination](https://github.com/armory3d/armory/wiki/global_illumination)
  * [Anti-Aliasing](https://github.com/armory3d/armory/wiki/antialiasing)
  * [Post-Processing](https://github.com/armory3d/armory/wiki/screen-effects)
  * [Vertex Colors](https://github.com/armory3d/armory/wiki/vertexcolors)
  * [Instancing](https://github.com/armory3d/armory/wiki/instancing)
  * Shadows
     * [Shadow Map Atlasing](https://github.com/armory3d/armory/wiki/Shadow-Map-Atlasing)
  * [Tilesheets](https://github.com/armory3d/armory/wiki/Tilesheets)
  * [Shape Keys](https://github.com/armory3d/armory/wiki/Shape-Keys)

* Code

  * [WebAssembly](https://github.com/armory3d/armory/wiki/wasm)
  * [JS](https://github.com/armory3d/armory/wiki/js)
  * [Machine Learning](https://github.com/armory3d/armory/wiki/machine_learning)
  * [Generate Mesh](https://github.com/armory3d/armory/wiki/generate_mesh)
  * [Transform](https://github.com/armory3d/armory/wiki/transform)
  * [Find objects in the scene](https://github.com/armory3d/armory/wiki/Find-objects-in-the-scene)

* Deployment

  * [Windows](https://github.com/armory3d/armory/wiki/windows)
  * [Linux](https://github.com/armory3d/armory/wiki/linux)
  * [macOS](https://github.com/armory3d/armory/wiki/macos)
  * [HTML5](https://github.com/armory3d/armory/wiki/html5)
  * [Android](https://github.com/armory3d/armory/wiki/android)
  * [iOS](https://github.com/armory3d/armory/wiki/ios)
  * [Consoles](https://github.com/armory3d/armory/wiki/consoles)

* Engine Development

  * [Contribute](https://github.com/armory3d/armory/wiki/contribute)
  * [Architecture](https://github.com/armory3d/armory/wiki/architecture)
  * [Code Style](https://github.com/armory3d/armory/wiki/Code-Style)
  * [Git Version](https://github.com/armory3d/armory/wiki/gitversion)
* Engine Development
  * [Logic Nodes](https://github.com/armory3d/armory/wiki/logicnodes)
* Engine Development
  * [Render Path](https://github.com/armory3d/armory/wiki/renderpath)

* Remarks

  * [Roadmap](https://github.com/armory3d/armory/issues/1545)
  * [Project History](https://github.com/armory3d/armory/wiki/history)
  * [supported nodes](https://github.com/armory3d/armory/wiki/supported_nodes)
  * [Supported Particles](https://github.com/armory3d/armory/wiki/supported_particles)
  * [Games made with Armory](https://github.com/armory3d/armory/wiki/Games-made-with-Armory)

* Links

  * [Blender Essentials](https://www.youtube.com/watch?v=jBqYTgaFDxU)
  * [Iron Manual](https://github.com/armory3d/iron/wiki)
  * [Kha Manual](https://github.com/KTXSoftware/Kha/wiki)
  * [Haxe Cookbook](https://code.haxe.org/category/beginner/)


## 🐥 Traits
                                                                      **Traits**
https://github.com/armory3d/armory/wiki/traits


### Table of Content:
- [Introduction](#introduction)
- [Trait Events](#trait-events)
  - [Canvas Trait Events](#canvas-trait-events)
- [Trait Properties](#trait-properties)
  - [Supported Property Types](#supported-property-types)
  - [Properties Example](#properties-example)
  - [Warnings](#warnings)
- [Folder Organisation](#folder-organisation)

### Introduction
Armory uses a trait (component) system to insert logic into Blender objects and make them interactive. Traits can be attached to scene objects or scenes itself. To inspect traits placed in the scene, switch to the `Orphan Data` view in the `Outliner`. The traits are displayed in the `Collections` group as they are internally represented as such:

![](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/traits/traits_groups.png)

To add a trait to an object or a scene, navigate to `Object Properties > Armory Traits` or `Scene Properties > Armory Scene Traits` and click on the small `+` icon right next to the empty list of traits. A dialog will open, asking you for the [type](#trait-types) of the newly created trait.

> A common mistake is to forget adding a trait to an object or scene when a new logic node tree was created. A logic tree alone is not a trait, it needs to be referenced from a node trait to be used!

### Trait Types
There are several trait types, serving different purposes:

![Trait types in the UI](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/traits/trait_types.png)

- `Haxe`: writing scripts from scratch in Haxe, with full access to the Armory API.
- `Wasm`: see [WebAssembly](https://github.com/armory3d/armory/wiki/wasm)
- `UI`: working with canvas & user interface
- `Bundled`: pre-made/bundled Haxe scripts to handle common stuff like character controllers (-> less boilerplate code for you to write).
- `Nodes`: assembling logic visually in the Logic Node Editor ([node reference](https://github.com/armory3d/armory/wiki/reference)).


### Fake User
If a trait is disabled, it is not included in the exported game by default to save space. This is problematic when you want to add the trait later in the game. To export the trait anyway, there is a `Fake User` option that works in a similar fashion than the identically named option for Blender data types. If enabled, the trait is exported even if it is disabled:

![Trait fake user setting](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/traits/traits_fake_user.jpg)

So when using nodes or functions that require a trait name, make sure that the trait is exported!

### Trait Events

Each trait exposes events to make it possible to get notified about its life-cycle. To listen to an event, create a function and pass it to one of the following functions so that it is called when the event occurs:

- `Trait.notifyOnAdd()` - trait is added to an object
- `Trait.notifyOnInit()` - object which this trait belongs to is added to scene
- `Trait.notifyOnRemove()` - object which this trait belongs to is removed from scene
- `Trait.notifyOnUpdate()` - update game logic here
- `Trait.notifyOnRender()` - update rendering here
- `Trait.notifyOnRender2D()` - update 2D rendering here

As the scene is being built asynchronously, `onInit` events can get called at a time when not all scene objects are present yet. If the trait construction depends on other scene objects, use the `Scene.active.notifyOnInit()` event which gets called as soon as the scene is fully constructed.

### Canvas Trait Events

The UI canvas of UI traits ([`CanvasScript`](https://api.armory3d.org/armory/trait/internal/CanvasScript.html)) is also loaded asynchronously and possibly unavailable at the time of the trait's instantiation. To reliably call functions of `CanvasScript` traits, make sure to only call them from within a callback that is passed to [`CanvasScript.notifyOnReady()`](https://api.armory3d.org/armory/trait/internal/CanvasScript.html#notifyOnReady):

```haxe
canvas = Scene.active.getTrait(CanvasScript);
canvas.notifyOnReady(() -> {
    // Here you can safely interact with the canvas
    canvas.getElement("myElement").width = 200;
});
```

### Trait Properties

For scripts, it is possible to pass parameters or set script properties directly from Blender. This makes it easy to create a variation of objects that share the same trait while having different parameters for it.

Variables that should be visible in Blender have to be preceded with `@prop` [metadata](https://haxe.org/manual/lf-metadata.html) in the source code.

**Please note that only variables declared with the `var` keyword are supported!** Using `final` does not work as the properties are set via [Haxe's Reflection API](https://api.haxe.org/Reflect.html) at the start of the game after trait construction.

### Supported Property Types
The following data types are supported:
| Primitive/basic types | Iron object types | Iron float vectors |
| --- | --- | --- |
| `Int` | [`iron.object.Object`](https://api.armory3d.org/iron/object/Object.html) | [`iron.math.Vec2`](https://api.armory3d.org/iron/math/Vec2.html) |
| `Float` | [`iron.object.CameraObject`](https://api.armory3d.org/iron/object/CameraObject.html) | [`iron.math.Vec3`](https://api.armory3d.org/iron/math/Vec3.html)
| `Boolean` | [`iron.object.LightObject`](https://api.armory3d.org/iron/object/LightObject.html) | [`iron.math.Vec4`](https://api.armory3d.org/iron/math/Vec4.html)
| `String` | [`iron.object.MeshObject`](https://api.armory3d.org/iron/object/MeshObject.html) | |
| | [`iron.object.SpeakerObject`](https://api.armory3d.org/iron/object/SpeakerObject.html) | |

### Properties Example

```haxe
    package arm;

    import iron.object.CameraObject;

    import iron.math.Vec2;
    import iron.math.Vec3;
    import iron.math.Vec4;

    class MyTrait extends iron.Trait {
        // Primitive data types
        @prop var intValue: Int = 40; // Type annotations are possible, but only required when no initial value is given.
        @prop var floatValue = 3.14;
        @prop var stringValue = "Hello world!";
        @prop var booleanValue = true;

        // Object data types
        @prop var objValue: iron.object.Object; // Object types need type annotations to be recognized
        @prop var camObjValue: CameraObject; // The type can be imported...
        @prop var lightObjValue: iron.object.LightObject; // .. or not, both will work
        @prop var meshObjValue: iron.object.MeshObject;
        @prop var speakerObjValue: iron.object.SpeakerObject;

        // Vector data types
        @prop var vector2DValue: Vec2 = new Vec2(0.2, 0.5); // Initialization possible...
        @prop var vector3DValue: Vec3; //... but not required
        @prop var vector4DValue = new Vec4(1, 2, 3, 4);

        // Not visible in Blender, `@prop` is missing
        var notVisibleValue = 0.0;

        // ...
    }
```

This example results in the following image:

![Trait properties](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/traits/traits_props.png)

### Warnings
If Armory detects invalid `@prop` declarations, warnings will get displayed:

![Trait properties warnings](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/traits/traits_warnings.jpg)
- The property type must be supported (see [Supported property types](#supported-property-types)).
- The property must be syntactically correct.
- If the property has no type annotation and the type is infered from the given default value, the default value must be a constant literal or a constructor expression (using the `new` keyword).
- Static properties are allowed but strongly discouraged. Multiple objects can write to the same static property, resulting in different results depending on the internal initialization order of the traits.
- Final or inline properties are not allowed.

### Folder Organisation

By default all traits are created into your project's `/Sources/arm` folder when you create them in Blender.

![](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/subfolders/1-Regular_Trait.png)
![](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/subfolders/2-Regular_Trait_Source.png)

In general it's desirable to create a folder structure that matches logically your game division. For example you could decide to split your game in multiple scenes, and ideally keep the code of each Scene in separate subfolders (one per scene) so that it's easy to maintain later on.

In order to create a folder hierarchy tree in Armory, you can use the Haxe package syntax when assigning a name to your new trait. Therefore if you assign a name such as `general.BoxBehavior`, a new trait will be created in the `/Sources/arm/general` subfolder, with the name "BoxBehavior.hx".

![](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/subfolders/3-Subfolder_Trait.png)
![](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/subfolders/4-Subfolder_Trait_List.png)
![](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/subfolders/5-Subfolder_Trait_Source.png)

You can create infinitely many nested subfolders this way by appending more dot-separated names to the trait name, such as "general.terrain.TerrainCollider" which will create a file named "TerrainCollider.hx" under the path `/Sources/arm/general/terrain`.

If at some point you want to assign a different trait to your object, you simply need to select the trait from the list displayed when you click on the `Class` dropdown, right below the Traits List.

![](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/subfolders/6-Trait_List.png)
![](https://github.com/armory3d/armory_wiki_images/raw/master/essentials/subfolders/7-Subfolder_Trait_Assigned.png)

Note: Please bear in mind that some [reserved words](https://haxe.org/manual/expression.html#keywords) are not allowed to be used as package names, therefore trait names such as "my.new.Trait" won't be valid due to `new` being a reserved word.



## 🐥 Events
                                                                      **Events**
  * [Events](https://github.com/armory3d/armory/wiki/Events)

Armory 事件模型使用 Observer Pattern 编程模式，程序中涉及事件的触发方，称为 *sender*，
和事件的消费方，称为 *listeners*。通过设置 event mask 标识，用于区别事件的作用范围，默认值
-1 表示全局事件。

事件相关的代码文件：

    armory\Sources\armory\system\Event.hx
    armory\Sources\armory\logicnode\OnEventNode.hx
    armory\Sources\armory\logicnode\SendEventNode.hx
    armory\Sources\armory\logicnode\SendGlobalEventNode.hx

`Event` 对象代表事件总线，或者称为事件注册中心，在静态成员 events 中管理了所有事件的消费者。

```js
    Event.send(eventName: String, mask = -1)
    Event.add(eventName: String, onEvent: Void->Void, mask = -1): TEvnet;
    Event.removeListener(event: TEvent);

    // Register an event listener
    var listerner:TEvent = Event.add("on_click", () -> {});
    // Event releasse
    listerner.onEvent();
```

`TEvent` 代表 listener，在注册一个事件处理函数时就会返回一个侦听对象，调用其 `onEvent()`
就表示触发相应的事件。

```haxe
    typedef TEvent = {
        /** The name of the events this listener is listening to. **/
        var name: String;

        /** The callback function that is called when a matching event is sent. **/
        var onEvent: Void->Void;

        /** The mask of the events this listener is listening to. **/
        var mask: Int;
    }
```

`SendEventNode` 逻辑节点就是通过 event mask (object.uid) 触发指定对象的事件处理。全局的
`SendGlobalEventNode` 则不会判断 eent mask。

`OnEventNode` 节点创建事件侦听器，可以设置触发的时机，事件名变换后就会重新注册事件处理函数：

1. Init 初始化时单次触发；
2. Update 持续地在每一帧触发；
3. Custom 结合 `Eevnt` 对象，根据 Observer Pattern 编程模式进行自定义;

```haxe
    class OnEventNode extends LogicNode {

        public var property1: String; // Init, Update, Custom
        var value: String;
        var listener: TEvent = null;
        var oldValue: String;

        public function new(tree: LogicTree) {
            super(tree);
            tree.notifyOnInit(init_main);
            tree.notifyOnRemove(onRemove);
        }

        function init_main() {
            switch (property1) {
            case "init": tree.notifyOnInit(init);
            case "update": tree.notifyOnUpdate(update);
            }
        }
        // ...
    }
```

Armory is equipped with an event system that makes it possible to send
notifications (called *events*) from one part of the application to another.

Each event has a name used to identify it (you can choose every name you want),
and other parts of the application can listen to events with a certain name and
then react accordingly to them. For example, in a racing game, every time the
player's car enters the next lap, the [trait] responsible for counting the laps
could be configured to send an event called `next_lap` to the trait controlling
the user interface (UI), which then updates the lap displayed on the screen.
In order to do that, the UI trait needs to be configured to *listen* to events
with the name `next_lap`.

Image below for illustration purposes (non event nodes exits for learning
purposes only and cannot be found in Armory 3D).
![](https://i.postimg.cc/G22Vp5yb/illu-v1.jpg)

> **Terminology used in this article**
>
> In this article, the part of the application that is responsible for sending
> an event is called *sender*, and those parts that react to a certain event
> are called *listeners* of that event.

Events are global by default, which means that every listener can listen to
all events with a given name. However, by using [event masks](#event-masks),
events can be restricted to specific listeners.

Event listeners get immediately notified about an event by the sender,
so events are received within the same frame they are sent.

There are two logic nodes that can be used to send events:

01. - [`Send Event to Object`] node: send an event only to listeners that
    belong to a specific object. The [event masks] of the event is set to the
    UID (unique ID) of the receiving object.
02. - [`Send Global Event`] node: sends a global event to all listeners
    listening to the event's name.

The [`On Event`] node receives any global event and every event sent
specifically to the object that owns the logic tree's trait instance, i.e.
any event whose [event masks] is set to the UID of the trait's owner object.

For detailed documentation on the event system's Haxe API, please refer to
the API documentation on [`armory.system.Event`].

**Event masks**

Masks are signed integral numbers that can be used to restrict which listeners
are notified about a certain event. Both events and event listeners can be
configured with a mask value, each listener is only notified about global events
and events whose mask value _exactly matches_ the listener's mask value.

Events with the mask value `-1` represent a global event, listeners with
a mask value of `-1` can _only_ listen to global events.

Examples

An event with the mask value `42` and the name `abc` will notify all listeners
listening to `abc` events and a configured mask value of `42`. Listeners with
other mask values that are listening to `abc` events are not notified.

An event with the mask value `-1` and the name `xyz` will notify all listeners
listening to `xyz` events independent of their configured mask value.


## 🐥 supported nodes
                                                             **supported nodes**
https://github.com/armory3d/armory/wiki/supported_nodes

While the plan is to support all of the nodes, not all of them work yet. Currently Armory implements the following ones.

> *The following tables are not yet complete, please look at [blender/arm/material/cycles_nodes](https://github.com/armory3d/armory/tree/master/blender/arm/material/cycles_nodes) for detailed information.*

**Legend**:
✔ Full support 🔵 Not fully implemented ❌ Not supported/Will not be supported

### Shader
| Node name | Blender Identifier | Supported | Additional information |
| --- | --- | --- | --- |
| Principled BSDF | `BSDF_PRINCIPLED` | 🔵 | Not all sockets are supported |
| Mix Shader | `MIX_SHADER` | ✔ | There is currently no blending between normals |
| Add Shader        | `ADD_SHADER` | ✔ | |
| Diffuse BSDF      | `BSDF_DIFFUSE` | ✔ | |
| Glossy BSDF       | `BSDF_GLOSSY` | ✔ | |
| Emission          | `EMISSION` | ✔ | |
| Glass BSDF        | `BSDF_GLASS` | 🔵 | |
| Holdout           | `HOLDOUT` | ❌ | |
| Translucent BSDF  | `BSDF_TRANSLUCENT` | 🔵 | |
| Transparent BSDF  | `BSDF_TRANSPARENT` | ✔ | |
| Velvet BSDF       | `BSDF_VELVET` | 🔵 | |
| Subsurface Scattering | `SUBSURFACE_SCATTERING` | 🔵 | |
| Refraction BSDF   | `BSDF_REFRACTION` | ❌ | |
| Specular          | `EEVEE_SPECULAR` | ❌ | |
| Principled Volume | `PRINCIPLED_VOLUME` | ❌ | |
| Volume Absorption | `VOLUME_ABSORPTION` | ❌ | |
| Volume Scatter    | `VOLUME_SCATTER` | ❌ | |

### Input
| Node name | Blender Identifier | Supported | Additional information |
| --- | --- | --- | --- |
| Attribute | `ATTRIBUTE` | 🔵 | Doesn't support all of Blender's attributes. You can access vertex colors (using the color output), UV maps and `time`) |
| Camera Data | `CAMERA` | ✔ | |
| Fresnel | `FRESNEL` | ✔ | |
| Geometry | `NEW_GEOMETRY` | 🔵 | All outputs supported except for `Pointiness` and `Random Per Island` |
| Layer Weight | `LAYER_WEIGHT` | ✔ | |
| Light Path | `LIGHT_PATH` | ❌ | Using preconfigured values (no raytracing) |
| Object Info | `OBJECT_INFO` | 🔵 | All outputs supported except for `Color` |
| Particle Info | `PARTICLE_INFO` | 🔵 | GPU Particles. All outputs supported except for `Random`, `Size` and `Angular Velocity` |
| RGB | `RGB` | ✔ | |
| Tangent | `TANGENT` | 🔵 | |
| Texture Coordinate | `TEX_COORD` | 🔵 | All outputs supported except for `Camera`, `Reflection`. Also it is not possible to access other object's coordinates |
| UV Map | `UVMAP` | ✔ | |
| Value | `VALUE` | ✔ | |
| Vertex Color | `VERTEX_COLOR` | ✔ | |
| Volume Info | `VOLUME_INFO` | ❌ | |

### Output
| Node name | Blender Identifier | Supported | Additional information |
| --- | --- | --- | --- |
| Material Output | `OUTPUT_MATERIAL` | 🔵 | `Volume` input not supported |
| World Output | `OUTPUT_WORLD` | 🔵 | Currently only `Background` and `Emission` nodes can be directly connected to this node |

### Converter
| Node name | Blender Identifier | Supported | Additional information |
| --- | --- | --- | --- |
| Blackbody | `BLACKBODY` | ✔ | |
| Clamp | `CLAMP` | ✔ | |
| Color Ramp | `VALTORGB` | 🔵 | Only color output with constant or linear RGB interpolation |
| Combine Color | `COMBINE_COLOR` | 🔵 | HSL mode is not supported |
| Combine HSV | `COMBHSV` | ✔ | Deprecated. Was replaced by the `Combine Color` node. |
| Combine RGB | `COMBRGB` | ✔ | Deprecated. Was replaced by the `Combine Color` node. |
| Combine XYZ | `COMBXYZ` | ✔ | |
| Math | `MATH` | 🔵 | Most operators are supported but some are still missing |
| RGB to BW | `RGBTOBW` | ✔ | |
| Separate Color | `SEPARATE_COLOR` | 🔵 | HSL mode is not supported |
| Separate HSV | `SEPBHSV` | ✔ | Deprecated. Was replaced by the `Separate Color` node. |
| Separate RGB | `SEPBRGB` | ✔ | Deprecated. Was replaced by the `Separate Color` node. |
| Separate XYZ | `SEPBXYZ` | ✔ | |
| Shader to RGB | `SHADERTORGB` | ❌ | |
| Vector Math | `VECT_MATH` | ✔ | Modulo operator behaves differently in Blender/Armory with negative numbers |
| Wavelength | `WAVELENGTH` | ✔ | |
| Map Range | `MAP_RANGE` | 🔵 | Only supports `Float` data type, no support for `Clamp` option |

### Color
| Node name | Blender Identifier | Supported | Additional information |
| --- | --- | --- | --- |
| Bright Contrast | `BRIGHTCONTRAST` | ✔ | |
| Gamma | `GAMMA` | ✔ | |
| Hue/Saturation | `HUE_SAT ` | ✔ | |
| Invert | `INVERT` | ✔ | |
| MixRGB | `MIX_RGB` | 🔵 | Some blend types default to `Mix` |
| RGB Curves | `CURVE_RGB` | 🔵 | |

### Texture
| Node name | Blender Identifier | Supported | Additional information |
| --- | --- | --- | --- |
| Brick Texture | `TEX_BRICK` | 🔵 | |
| Checker Texture | `TEX_CHECKER` | ✔ | |
| Environment Texture | `TEX_ENVIRONMENT` | ✔ | World shader only |
| Gradient Texture | `TEX_GRADIENT` | 🔵 | |
| Image Texture | `TEX_IMAGE` | ✔ | |
| Magic Texture | `TEX_MAGIC` | 🔵 | |
| Musgrave Texture | `TEX_MUSGRAVE` | 🔵 | |
| Noise Texture | `TEX_NOISE` | ✔ | |
| Sky Texture | `TEX_SKY` | 🔵 | World shader only. Supported sky models: `Hosek/Wilkie` and `Nishita`. `Preetham` will use `Hosek/Wilkie` . |
| Voronoi Texture | `TEX_VORONOI` | 🔵 | |
| Wave Texture | `TEX_WAVE` | 🔵 | |

### Vector
| Node name | Blender Identifier | Supported | Additional information |
| --- | --- | --- | --- |
| Bump| `BUMP` | ✔ | |
| Displacement | `DISPLACEMENT` | 🔵 | |
| Normal | `NORMAL` | ✔ | |
| Normal Map| `NORMAL_MAP` | ✔ | |
| Mapping | `MAPPING` | 🔵 | 'Normal' mapping type is not supported yet |
| Vector Curves| `CURVE_VEC` | ✔ | |

### Armory material nodes

Armory provides additional nodes in the `Armory` node category to ease shader creation:

- **Shader Data**

  ![Shader Data node](https://github.com/armory3d/armory_wiki_images/raw/master/remarks/supported_nodes/shaderdata_node.jpg)
  *Example: Retrieving the position of object instances (`ipos`) from the vertex shader.*

  **Usage**:
  This node lets you access shader data from [uniforms](https://www.khronos.org/opengl/wiki/Uniform_(GLSL)) and shader inputs. You can switch
  between both types via the `Input Type` toggle.

  - **`Input` mode**
    This mode allows you to use the contents of values passed as inputs to the vertex or fragment shader stage. You can choose the stage via the `Input Source` dropdown. If `Vertex Shader` is selected, the variable gets passed through to the fragment shader where it is used.

  - **`Uniform` mode**
    This mode allows you to access the contents of uniform values that are provided by Iron in [Uniforms.hx](https://github.com/armory3d/iron/blob/master/Sources/iron/object/Uniforms.hx). Armory will automatically add the selected uniforms to the generated shader. You can find a list of available uniforms [here](https://github.com/armory3d/armory/wiki/materials#available-uniforms). A more detailed explanation of this mode can be found [here](https://github.com/armory3d/armory/wiki/materials#shader-uniforms).

  The chosen `Variable Type` represents the data type of the value and the `Variable Name` represents either the input name in the shader code or the link name of the uniform.




## 🐥 Materials
                                                                   **Materials**
Materials https://github.com/armory3d/armory/wiki/materials

![](https://github.com/armory3d/armory_wiki_images/raw/master/graphics/materials/materials.jpg)

Materials are built with [EEVEE & Cycles](https://docs.blender.org/manual/en/dev/render/cycles/nodes/index.html) nodes.
To see which nodes are supported, please have a look at the list of [supported nodes](https://github.com/armory3d/armory/wiki/supported_nodes).

### Table of Content
- [Displacement](#displacement)
- [Blending](#blending)
- [Transparency](#transparency)
- [Read depth/Depth Textures](#read-depthdepth-textures)
- [Material parameters](#material-parameters)
- [Shader uniforms](#shader-uniforms)
  - [Available uniforms](#available-uniforms)

### Displacement

Locate the `Armory Render Path - Renderer - Displacement` property:
- `Off` - No displacement performed
- `Vertex` - Mesh vertices are displaced
- `Tessellation` - Mesh is first tessellated for more detail and then displaced

With `Tessellation` selected, the level of tessellation can be set using the `Mesh` and `Shadow` property.

Note: Vertices are displaced in normals direction. Use smooth shading (`Space - Shade Smooth`) for meshes with displacement to prevent gabs.

Examples:
- https://github.com/armory3d/armory_examples/tree/master/material_displace

### Blending

To enable additive blending for specific material, set `Armory Render Path - Blending` to `On` and check the `Blending` property in `Material - Armory Props`.

Examples:
- https://github.com/armory3d/armory_examples/tree/master/material_translucent
- https://github.com/armory3d/armory_examples/tree/master/particle_examples

### Transparency

- Connect an alpha map to the Principled BSDF input of a material.
- Material properties: Armory Props: Uncheck Alpha Test.

### Read Depth/Depth Textures
Some materials need to read the scene's depth (e.g. for soft particles, sea foam etc.), which can be achieved by enabling the `Armory Props > Read Depth` option. Materials with this option then get access to a texture storing the content of the depth buffer.

> This feature is currently unavailable on the forward render path if the compositor is disabled (`Render Properties > Armory Render Path > Compositor`).

> The feature can be globally toggled on or off for a selected render path in `Armory Render Path > Renderer > Depth Texture`. If this option is set to `Auto`, the feature will be enabled only when there are materials in the exported scene with `Read Depth` enabled.

While rendering a frame, all materials with the `Read Depth` option enabled will be rendered after all the other materials without that option enabled. In between the rendering of both of those material sets, the depth buffer is copied to a _dedicated depth texture_ so that the following depth-reading materials can read from it while simultaneously writing their depth to the _actual depth buffer_. Note that because of this order, all materials with the `Read Depth` option enabled will not be visible on the depth texture.

If a depth texture is used, it can be accessed via the `depthtex` [shader uniform](#shader-uniforms). The depth is stored in the red channel (x value) and the values depend on the near/far values of the active camera.

Examples:
- https://github.com/armory3d/armory_examples/tree/master/material_depth_texture

### Material parameters

`RGB`, `Value` and `Image Texture` material nodes can be controlled at run-time using script or logic nodes. To expose material node, enable `Parameter` property in `Node Editor - Properties - Armory Material Node`.

Examples:
- https://github.com/armory3d/armory_examples/tree/master/material_params

#### Animating a parameter:

![](https://i.imgur.com/ZNO1Q65.png)
![](https://i.imgur.com/OJQRctH.png)


### Shader uniforms

It is possible to retrieve additional light and scene data via [uniforms](https://www.khronos.org/opengl/wiki/Uniform_(GLSL)). There are two different ways of using them:

- **Using material nodes**:

  It is possible to access uniform values with the [Shader Data node](https://github.com/armory3d/armory/wiki/supported_nodes#armory-material-nodes). To do this, set the input type to `Uniform` and select the variable type (only uniforms of those data types are currently supported in node shaders). Then, look at [Available uniforms](#available-uniforms) and write the name of the link (e.g. `_pointPosition`) for the uniform into the `Variable Name` field.

  Please note that there is no viewport preview for the Shader Data node!

  **Example**:
  ![Example of the Attribute node with a shader uniform](https://github.com/armory3d/armory_wiki_images/raw/master/graphics/materials/shaderdata_node_uniforms.jpg)

- **Custom materials**:

  To pass a uniform to the fragment shader, add an entry in the material definition
  [example](https://github.com/armory3d/armory_examples/blob/master/material_shaders/Bundled/MyCustomMaterial/MyCustomMaterial.json)
  under `"shader_datas" > "contexts" > "constants"`:

  ```json
  {
      "link": "<linkName>",
      "name": "<uniformName>",
      "type": "<uniformType>"
  }
  ```
  Replace `<linkName>` with the name of the link (e.g. `"_pointPosition"`)
  that can be found in [Available uniforms] and replace `<uniformName>` and
  `<uniformType>` according to your fragment shader.


#### Available uniforms

*(The following tables are not yet complete, please look into
[iron/object/Uniforms.hx] for all available uniforms).*

**Camera**:
| Link name | Type | Description |
| --- | --- | --- |
| `_cameraPlane` | `vec2` | x: camera near plane, y: camera far plane |
| `_cameraPosition` | `vec3` | World position of the active camera |
| `_cameraLook` | `vec3` | Normalized look vector of the active camera in world coordinates |
| `_cameraUp` | `vec3` | Normalized up vector of the active camera in world coordinates |
| `_cameraRight` | `vec3` | Normalized right vector of the active camera in world coordinates |
| `_fieldOfView` | `vec3` | Field of view of the active camera |
| `_viewMatrix` | `mat4` | View matrix of the active camera |
| `_transposeViewMatrix` | `mat4` | View matrix of the active camera with rows and columns 0-2 (3x3) transposed |
| `_projectionMatrix` | `mat4` | Projection matrix of the active camera |
| `_inverseProjectionMatrix` | `mat4` | Inverse of the projection matrix of the active camera |
| `_viewProjectionMatrix` | `mat4` | View matrix multiplied with the projection matrix of the active camera |
| `_inverseViewProjectionMatrix` | `mat4` | View matrix multiplied with the projection matrix of the active camera and inversed |
| `_prevViewProjectionMatrix` | `mat4` | `_viewProjectionMatrix` from the previous frame |

**Lights**:
| Link name | Type | Description |
| --- | --- | --- |
| `_lightDirection` | `vec3` |  |
| `_lightPosition` | `vec3` |  |
| `_pointPosition` | `vec3` |  |
| `_pointColor` | `vec3` |  |
| `_sunColor` | `vec3` |  |
| `_sunDirection` | `vec3` |  |
| `_spotDirection` | `vec3` |  |
| `_lightArea0` - `_lightArea3` | `vec3` |  |

**Objects**:
| Link name | Type | Description |
| --- | --- | --- |
| `_uid` | `int` | The UID of the object |
| `_objectInfoIndex` | `float` | The UID of the object |
| `_objectInfoMaterialIndex` | `float` | The UID of the object's current material |
| `_objectInfoRandom` | `float` | Random value that was assigned to the object during it's creation |
| `_skinBones` | `float[]` | Dual Quaternion skinning buffer. Only available when `arm_skin` is defined. |

**World**:
| Link name | Type | Description |
| --- | --- | --- |
| `_backgroundCol` | `vec3` | The background color of the current world. `(0, 0, 0)` if not set |
| `_envmapStrength` | `float` | The strength of the world background. `0` if the scene has no world |
| `_hosekSunDirection` | `vec3` | The direction of the sun. The z value is clamped below (and including) 0 for the night cycle. `(0, 0, 0)` if the scene has no world |

**Other**:
| Link name | Type | Description |
| --- | --- | --- |
| `_time` | `float` | The elapsed time since the beginning of the game |
| `_vec2x` | `vec2` | Base vector for the x axis (`(1.0, 0.0)`) |
| `_vec2xInv` | `vec2` | Base vector for the x axis divided by the current render target width |
| `_vec2x2` | `vec2` | Base vector for the x axis multiplied by 2 (`(2.0, 0.0)`) |
| `_vec2x2Inv` | `vec2` | Base vector for the x axis multiplied by 2 and divided by the current render target width |
| `_vec2y` | `vec2` | Base vector for the y axis (`(0.0, 1.0)`) |
| `_vec2yInv` | `vec2` | Base vector for the y axis divided by the current render target height |
| `_vec2y2` | `vec2` | Base vector for the y axis multiplied by 2 (`(0.0, 2.0)`) |
| `_vec2y2Inv` | `vec2` | Base vector for the y axis multiplied by 2 and divided by the current render target height |
| `_vec2y3` | `vec2` | Base vector for the y axis multiplied by 3 (`(0.0, 3.0)`) |
| `_vec2y3Inv` | `vec2` | Base vector for the y axis multiplied by 3 and divided by the current render target height |
| `_windowSize` | `vec2` | Window size (x, y) in pixels |
| `_screenSize` | `vec2` | Screen size (size of the renderpath's current render target) in pixels |
| `_screenSizeInv` | `vec2` | Inverse of `_screenSize` (`1.0 / _screenSize`) |
| `_aspectRatioF` | `float` | Aspect ratio of the current render target (width / height) |
| `_aspectRatioWindowF` | `float` | Aspect ratio of the game window (width / height) |


## 🐥 Global Illumination
                                                         **Global Illumination**

This page presents a quick start guide to let you easily **setup global illumination** in your Armory projects.

Armory features a fully dynamic global illumination technique based on a combination of voxel cone-tracing and screen-space ray-tracing. First, the scene is voxelized and processed into a 3D texture. This data is then used to gather ambient occlusion of the scene. Afterwards, screen-space ray-tracing is performed for detail.

- Get the teapots [.blend scene](https://github.com/armory3d/armory_examples/raw/master/render_voxelao_teapots/render_voxelao_teapots.blend).

### Requirements

- A graphics card with **OpenGL 4.4** or **Direct3D 11** support (for voxelization).
- Runs on **Windows** and **Linux**.

### Voxel AO

Enable `Properties - Render - Armory Render Path - Voxel AO`.

The cheapest way of utilizing voxels, usable for **ambient occlusion and shadows**.

- Control the quality using the `Cones` property.
- Control the intensity using the `Occlusion` property.
- Tweak tracing parameters using the `Step, Range, Offset` properties.

![](https://github.com/armory3d/armory_wiki_images/raw/master/graphics/gi/ao.jpg)

### Voxel Volume Setup

Locate `Properties - Render - Armory Render Path - Voxel AO` panel to configure **voxelization volume**.

- Adjust `Dimensions` to control the volume size. Objects placed out of this volume will not contribute to global illumination. By default, dimensions are set to 16 - meaning a volume of 16x16x16 blender units gets voxelized.
- Set `Resolution` to specify amount of voxels used for the volume. For performance, keep this at 128 or below.
- Reduce the `Resolution Z` multiplier to conserve memory if your scene is mostly flat on the Z axis (like a chess board). With `Resolution Z` set to 0.5, 16x16x8 dimensions will get voxelized.
- Enable `Revoxelize` property to update voxel volume every frame. In case of mostly static scenes, you can keep this off - moving objects will receive indirect lighting, but will not affect it. To prevent object from contributing into indirect lighting, enable `Properties - Object - Armory Props - Mobile`.
- With `Revoxelize` checked, enable `Dynamic Camera` to voxelize scene around the camera. As the camera moves, voxelization volume will move as well, making it possible to cover infinitely big scenes. With `Dynamic Camera` disabled, the volume at the scene origin(0,0,0) gets voxelized.
- `Temporal Filter` will blend the indirect lighting with results from the previous frame, in order to minimize flickering.

### Screen-space ray-tracing

#### Ray-traced AO

Set `Properties - Render - Armory Render Path - Post Process - SSGI` - `SSAO` to `RTAO`.

**Ambient occlusion** will be traced.

- Control the quality using the `Rays, Step, Max Steps` properties.
- Control the intensity using the `Strength` property.

#### Ray-traced Shadows

Small scale **contact shadows** will be traced.

Enable `Properties - Render - Armory Render Path - Post Process - SSRS`.

- Increase `Step` in case of artifacts.

#### Ray-traced Reflections

**Local reflections** will be traced.

Enable `Properties - Render - Armory Render Path - SSR`.

- Increase `Step` in case of artifacts.

### Baked lighting

Blender has a full path-tracing Cycles engine integrated. For static scenes, you can pre-bake lighting down into lightmaps using the built-in `Armory Bake` tool.

- Locate `Properties - Render - Armory Bake` panel.
- Add objects to be baked or click `Triangle - Add All`.
- Hit `Bake` to generate lightmaps for all listed objects.
- Once done, hit `Apply` to restore materials and pack lightmaps.
- Optionally, set `Properties - Render - Armory Render Path - Preset` to `2D/Baked`.
- Run(F5)! Armory picks up baked materials.

- Get [example .blend scene](https://github.com/armory3d/archviz_templates/raw/master/baked.blend).

### Light probes

Currently supported light probe features:

- Cubemap example [.blend](https://github.com/armory3d/armory_examples/tree/master/light_probes_cubemap)
- Plane example [.blend](https://github.com/armory3d/armory_examples/tree/master/light_probes_plane)



## 🐥 Tilesheets
                                                                  **Tilesheets**

  * [Tilesheets](https://github.com/armory3d/armory/wiki/Tilesheets)

参考 [Logic Node Editor]