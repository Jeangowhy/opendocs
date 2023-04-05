
## 👉 Haxe Programming

Haxe 语言语法类似 Java，Haxe 命令本身是编译器又是转译工具，可以将源代码构建为跨平台
应用程序，并且允许访问每个平台的本地功能。自有虚拟机 HashLink 和 NekoVM，但也可以在
解释模式下运行，例如 `haxe -cp src --main Main --interp`。

Haxe 项目于 2005/10/22 日由法国开发商 Nicolas Cannasse 启动，是开源 ActionScript 2
编译器 MTASC（Motion Twin Action Script compiler）和内部 MTypes 语言的继任者，后者
尝试将类型推理应用于面向对象语言。Nicolas 对编程语言设计的长期热情，以及作为他在 Motion Twin
的游戏开发工作的一部分，混合不同技术的新机会的出现，导致了一种全新语言的诞生。

1. https://haxe.org/manual/introduction-haxe-history.html
2. https://haxe.org/documentation/introduction/stdlib-introduction.html

Haxe 目前支持的目标语言平台：

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

Haxe 本身是 Ocaml 语言编写的，编译速度很快。Haxe 的核心内容是 Type，基于类型转化。

1. Haxe - The Cross-platform Toolkit https://haxe.org
2. Haxe https://github.com/HaxeFoundation/haxe
3. Haxe Documentation Introduction https://haxe.org/documentation/introduction/
4. Haxe for C# https://haxe.org/documentation/platforms/csharp.html
5. Haxe Library Manager https://lib.haxe.org
6. Haxe Manual https://haxe.org/manual/introduction.html
7. Haxe Code Cookbook https://github.com/HaxeFoundation/code-cookbook/ 
8. Haxe programming cookbook https://code.haxe.org/

Haxe Library 安装

```sh
    haxelib install actuate                    # Install `actuate` library
    haxelib install actuate 1.8.1              # Install a specific version
    haxe -lib actuate -main Test -js test.js   # Use `actuate` library in your Haxe build

    haxelib list                               # List all of your installed libraries
    haxelib list openfl                        # List your installed libraries that have "openfl" in the name

    haxelib install actuate.zip                # Install a library from a zip file
    haxelib install test.hxml                  # Install all the libs listed in a hxml
    haxelib install all                        # Install all the libs in the hxml files in the current directory

    haxelib submit actuate.zip                 # Use Haxelib to share your library with others!
```

Haxe Foundation 提供了常用语言系统库：

| Project  |                                Notes                                |
|----------|---------------------------------------------------------------------|
| hxcpp    | The runtime for the C++ backend of the Haxe compiler.               |
| hscript  | Haxe Script is a scripting engine for a subset of the Haxe language |
| hxnodejs | Extern definitions for node.js                                      |
| hxcs     | Support library for the C# backend of the Haxe compiler             |
| hxjava   | Support library for the Java backend of the Haxe compiler           |
| dox      | Haxe documentation generator.                                       |
| markdown | A markdown library for Haxe                                         |
| haxelib  | The haxelib client                                                  |

比如，Hxcpp 作为 Haxe 编译器的 C++ 语言的后端，包含头文件、库、支持代码，用于编译 Haxe 代码。

```sh
# https://lib.haxe.org/p/hxcpp/
# https://github.com/HaxeFoundation/hxcpp/
# Hxcpp is the runtime support for the C++ backend of the Haxe compiler.
haxelib install hxcpp 4.2.1 
# https://lib.haxe.org/p/hxcs
# https://github.com/HaxeFoundation/hxcs 
# Support library for the C# backend of the Haxe compiler
haxelib install hxcs 4.2.0 
# https://lib.haxe.org/p/hxnodejs
# https://github.com/HaxeFoundation/hxnodejs 
# Extern definitions for node.js
haxelib install hxnodejs 12.1.0
```

比如，创建一个 C# 项目：

    project/
    ├── src/
    │   └── Main.hx
    ├── bin/
    │   └── cs/
    └── build.hxml

```sh
    # 1. Create a new directory for your Haxe project, with this structure:
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
        Sys.println("Haxe is great!");
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
    # 4. Build Haxe project by running `haxe build.hxml` in project directory.
    # haxe -cp src -main Main -cs bin/cs
    # haxe -cp src -main Main -cpp bin/cpp
    # haxe -cp src -main Main -python bin/python/main.py
    # haxe -lib hxnodejs -cp src -main Main -js bin/js/main.js
    cd project
    haxe .\build.hxml
```

A taste of Haxe

```js
    class Game {
      // Haxe applications have a static entry point called main
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

    // Enums in Haxe are algebraic data type (ADT), so they can hold data.
    enum Result { 
      Winner(player:Player); 
      Draw; 
    }
```

Language features https://haxe.org/manual/lf.html
Compiler features https://haxe.org/manual/cr-features.html

Haxe features

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



## 👉 Haxe Types
https://haxe.org/manual/types.html

Haxe 是强类型语言，有类型自动推断机制，几种语言类型比较：

```sh
    # As3
    var myButton:MySpecialButton = new MySpecialButton();
    
    # C++ 
    MySpecialButton* myButton = new MySpecialButton();
    auto myButton = new MySpecialButton(); # C++11

    # Haxe
    var myButton = new MySpecialButton();
```

The Haxe type system knows seven type groups:

01. **Class instance**: an object of a given class or interface
02. **Enum instance**: a value of a Haxe enumeration
03. **Structure**: an anonymous structure, i.e. a collection of named fields
04. **Function**: a compound type of several arguments and one return
05. **Dynamic**: a wildcard type which is compatible with any other type
06. **Abstract**: a compile-time type which is represented by a different type at runtime
07. **Monomorph**: an unknown type which may later become a different type


### 🐥 Basic Types
https://haxe.org/manual/types-basic-types.html

Basic types are `Bool`, `Float` and `Int`.

Values of type Bool are a common occurrence in conditions such as if and while.

01. **true** and **false** for Bool,
02. 1, 0, -1 and 0xFF0000 for Int and
03. 1.0, 0.0, -1.0, 1e10 for Float.

Basic types are not classes in Haxe. Instead, they are implemented as 
abstract types and are tied to the compiler's internal operator-handling 
as described in the following sections.

Numeric types

    Define: Float
    Represents a double-precision IEEE 64-bit floating point number.

    Define: Int
    Represents an integral number.

The `haxe.Int32` and `haxe.Int64` classes can be used to ensure correct 
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

```java
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

### 🐥 Nullability
https://haxe.org/manual/types-nullability.html

Nullability

    Define: nullable
    A type in Haxe is considered nullable if null is a valid value for it.

It is common for programming languages to have a single, clean definition for 
nullability. However, Haxe has to find a compromise in this regard due to 
the nature of Haxe's target languages; while some of them allow and, in fact, 
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

As a consequence, the Haxe Compiler does not allow the assignment of null to 
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
Haxe-specific optional arguments which may be needs to be defined. 

This distinction is made using the question-mark optional argument:

```java
    // x is a native Int (not nullable)
    function foo(x : Int = 0) {}
    // y is Null<Int> (nullable)
    function bar( ?y : Int) {}
    // z is also Null<Int>
    function opt( ?z : Int = -1) {}
```

### 🐥 Class instance
https://haxe.org/manual/types-class-instance.html


Class Instance

Similar to many object-oriented languages, classes are the primary data structure
for the majority of programs in Haxe. 

Each Haxe class has an explicit name, an implied path and zero or more class fields. Here we will focus on the general structure of classes and their relations while 
leaving the details of class fields for Class Fields.

The following code example serves as the basis for the remainder of this section:

```java
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

There is a special type in Haxe which is compatible with all classes:

    Define: Class<T>
    This type is compatible with all class types which means that all classes 
    can be assigned to it. Class instances, however, cannot be assigned to this type.

At compile-time, `Class<T>` is the common base type of all class types. 
This relation is not reflected in generated code.

This type is useful when an API requires a value to be a class, but not 
a specific one. This applies to several methods of the Haxe reflection API.


Class constructor

Instances of classes are created by calling the class constructor - a process 
commonly referred to as instantiation. Another name for a class instance 
is object. Nevertheless, we prefer the term class instance to emphasize 
the analogy between classes/class instances and enums/enum instances.

    var p = new Point(-1, 65);


### 🐥 Enum instance
https://haxe.org/manual/types-enum-instance.html

### 🐥 Anonymous Structure
https://haxe.org/manual/types-anonymous-structure.html

### 🐥 Function Type
https://haxe.org/manual/types-function.html

### 🐥 Dynamic
https://haxe.org/manual/types-dynamic.html

### 🐥 Abstract
https://haxe.org/manual/types-abstract.html

### 🐥 Monomorph
https://haxe.org/manual/types-monomorph.html

A monomorph is a type which may, through unification, morph into a 
different type later. Further details about this type are explained 
in the section on type inference.


## 👉 Haxe & Armory3D

Grease Pencil 绘画是基于曲线创建的，不能像几何体一样导出到 Godot 这些游戏引擎中使用，
只有 Mesh 几何体才能通过 Collada 这些文件导出使用。当然，可以将蜡笔转换为 Polygon Curve，
设置 Geometry -> Depth 再导出为 Collada，但是经过处理后，与 Blender 渲染的效果不一致。
另一种方法是输出透明有动画帧图像，作为 Sprite Animation 使用，需要设置渲染器的透明属性，
Render Properties - Film - Transparent。

目前，Armory3D 是集成了 Blender 功能的游戏引擎，可以说是专为 Blender 开发的，但蜡笔效果
支持也不好。Armory 本身是 Blender 插件，组合成一个完整游戏开发工具和从头到尾的统一工作流程。
使用 Haxe 语言开发，语法类似 Java。Haxe 是编译器又是转译工具，可以将源代码构建为跨平台
应用程序，并且允许访问每个平台的本地功能。自有虚拟机 HashLink 和 NekoVM，但也可以在
解释模式下运行，例如 `haxe -cp src --main Main --interp`。

Armory3D 引擎是一组工具集合，除了一个 Blender 插件，还有以下核心模块：

01. **Haxe** 一个高级跨平台编程语言、代码转译工具。
02. **Kha** 一个使用 Haxe 编程语言的跨平台游戏框架，包含独立于不同系统的图形、音频、输入、网络抽象层。
03. **Iron** 是 Armory 的核心，相对于处理底层 Kha，Iron 是高级抽象层，处理游戏中的渲染与内容管道。
04. **Armory3D**，包含的 Blender 插件称为 Armory，从 Blender 中完全分离 Shaders 和 
    Materials，使用 Cycles 材质节点，使用 Blender 动画，提供 Logic Nodes 可视化编程。
    使用 Haxe 编程语言，使用 Traits 混入编程模式。

Kha 是一套 API 或称为一个开发库，它使用的构建工具称为 **khamake**，以及一个着色器交叉编译器
**Krafix**，使其能够支持多个图形 API。支持平台包含：Web, Mobile, Desktop, and Consoles，
使用 OpenGL, WebGL, DirectX, Vulcan, 以及 Metal 等图形 APIs。

Kha 编译得到目标程序程序是 targets，最典型就是 C++ ( with Kore ), Krom, Web, 和 HashLink (HL)。

Kore ( C++ )
Kore is the cross-platform C++ library that backs Kha's C++ target. It implements 
the whole Kha API for native targets and can be used to publish games to Windows, 
Linux, MacOS, and game consoles. Khamake is used similar to CMake to generate Linux 
( Makefile/Code::Blocks ), Windows ( Visual Studio ), and MacOS ( XCode ) projects 
that you can compile using the platform's native tools.

Armory has recently moved away from using the C++ target to using the HashLink C 
(HL/C) target, which also leverages Kore very similarly to the C++ target.

Krom
Krom is a target developed specifically for Kha that is designed to allow rapid
development and debugging of Kha games. Krom is essentially the Kore library with
complete bindings to Javascript using either Microsoft's Chakra ( default ) or
Chrome's V8 Javascript engine. Because Haxe can compile to Javascript very quickly,
Krom allows you to build and run your game in seconds as opposed to waiting for a
lengthy C++ build. Krom also features a built-in debugger that can be utilized in
the Kode Studio ( and potentially the Kha VSCode plugin ) IDE.

Web
Kha can publish games for web in seconds. The performance in browsers is supposed
to be about 20% slower than Krom, and there are some graphics features such as
Tessellation that that are not supported in Web ( WebGL ).

HashLink ( HL )
HashLink is a virtual machine ( a runtime environment ) for Haxe that can either
run HashLink bytecode generated by Haxe or it can be compiled to C code which is
then compiled using a C compiler, for optimum efficiency. In Armory, HashLink is
used to generate C code for compiling native binaries for each platform.

The HashLink target is very similar to the C++ target of Kha and uses Kore for
all of the core functionality just like the C++ target. The difference between
the C++ and HashLink targets is that they have a different garbage collector and
method of generating the code.

1. 3D Engine with Blender Integration https://github.com/armory3d/armory
2. Download ArmorySDK https://armory.itch.io/armory3d
3. Armory Architecture https://github.com/armory3d/armory/wiki/architecture
3. Supported Nodes https://github.com/armory3d/armory/wiki/supported_nodes
3. https://github.com/armory3d/armory/wiki/setup
4. https://github.com/armory3d/armory_examples
5. https://armory3d.github.io/armory_examples_browser
6. https://github.com/armory3d/armory_tutorials/releases
7. https://api.armory3d.org/

下载 Armory SDK 并解包到任意位置，然后在 Blender 安装插件，定位到 armory.py 脚本进行安装。
插件安装好后，armsdk 目录可能会被改名，注意在插件的 SDK 路径配置中要一致。插件会在 Blender
界面顶部提供运行、代码编辑按钮。

Armory3D 开发本身涉及多个语言，包括 Haxe、Python、JavaScript 等等，需要对所选择语言有了解。
可以在渲染器属性面板 Armory Exporter 中配置为 C 语言项目导出，如 Windows (C)、Android (C)，
这种方式会生成相应的项目配置和 C 语言代码，需要经过编译才会生成游戏的可执行程序。使用 JavaScript
语言有两种导出方式，Node (JS) 和 HTML (JS)，不同平台提供的 API 都有差异，需要区别对待。

引擎默认使用 Krom 作为游戏运行时，与预编译环境相比，Krom 的设计有快速编译时间和性能优势。
由 Chakra 或 V8 引擎提供 WebAssembly 字节码运行支持，Wasm 模块可以同时支持 HTML5 平台，
以及主机平台 (Windows, Linux, macOS)。

如果选择 Browser 作为运行时，则会执行 Nodejs 运行 Web 服务器提供服务。但是 Web 服务器
启动后，没有提供关闭功能，需要关闭 Blender 文件才能关闭。

可以在渲染器属性面板中 Armory Player 或者 Armory Project 进行相应操作。

在项目目录下包含自动生成的编译配置脚本 khafile.js，和源代码 Sources\Main.hx。默认工程包
名为 arm，用户可以编写自己的脚本代码。通过渲染器属性面板可以配置 Armory 的导出设置，场景属性
或者对象属性面板的 Armory Traits 可以混入用户的脚本或代码文件。所谓 Traits 就是代码零件，
即代码复用的一种方式，也称为混入编程模式，被复用的代码组件就是 Trait，有 5 种类型：

1. Haxe 脚本代码文件；
2. Nodes 使用 Logic Editor 可视化编程工具定义的节点树；
3. UI - User Interface 使用 Armory2D 用户界面；
4. Bundled 预制脚本；
5. Wasm 使用 WebAssebly 字节码程序； 

Trait Events
https://github.com/armory3d/armory/wiki/traits

1. Trait.notifyOnAdd() - trait is added to an object
2. Trait.notifyOnInit() - object which this trait belongs to is added to scene
3. Trait.notifyOnRemove() - object which this trait belongs to is removed from scene
4. Trait.notifyOnUpdate() - update game logic here
5. Trait.notifyOnRender() - update rendering here
6. Trait.notifyOnRender2D() - update 2D rendering here

激活 Debug Console 可以在程序运行时提供一个控制台面板，显示 *haxe.Log.trace()* 打印信息。
在渲染器属性面板 Armory Project - Flags - Debug Console 可以设置控制台面板，如缩放、位置。


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

比如，在场景中添加一个 Plane，并且在其上面放置一个 Cube，然后在物理属性面板中启用 Rigid Body。
并且分别设置为 Passive 模式和 Active 模式，Plane 充当地板，Cube 则受重力影响，会掉落到地板。
然后，在场景属性面板中，将以下代码添加到 Armory Scene Traits 列表中，代码通过 PhysicsWorld
检测鼠标点击位到的物理体：

```js,ignore
    package arm;

    import armory.trait.physics.PhysicsWorld;
    import iron.system.Input;
    import haxe.Log;

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
