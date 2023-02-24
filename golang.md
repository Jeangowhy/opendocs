
# 🚩 Installation
Golang Downloads: https://golang.google.cn/dl/

根据系统下载安装包

- Microsoft Windows
	- Windows 7 or later, Intel 64-bit processor
	- go1.13.3.windows-amd64.msi (112MB)
	- https://dl.google.com/go/go1.13.3.windows-amd64.msi

- Apple macOS
	- macOS 10.11 or later, Intel 64-bit processor
	- go1.13.3.darwin-amd64.pkg (115MB)
	- https://dl.google.com/go/go1.13.3.darwin-amd64.pkg

- Linux
	- Linux 2.6.23 or later, Intel 64-bit processor
	- go1.13.3.linux-amd64.tar.gz (114MB)
	- https://dl.google.com/go/go1.13.3.linux-amd64.tar.gz

- Source
	- go1.13.3.src.tar.gz (21MB)
	- https://dl.google.com/go/go1.13.3.src.tar.gz


Linux 下的安装命令步骤如下，通常需要 sudo 命令来获取 root 权限。根据当前系统的 CPU 架构选择下载 amd64 版本，解压到 /user/local 目录下，这样 Go 目录树就在 /usr/local/go：

	wget https://dl.google.com/go/go1.13.3.linux-amd64.tar.gz
	tar -C /usr/local -xzf go1.13.3.linux-amd64.tar.gz

再将 /usr/local/go/bin 添加到 PATH 环境变量中以方便执行 go 命令时自动定位，将以下脚本内容修改到 /etc/profile 或 $HOME/.profile 配置文件，前者是系统配置，后者是当前用户配置:

	export PATH=$PATH:/usr/local/go/bin

修改环境变量后一般需要重启终端或机器使其生效，或执行 source 命令使配置立即在当前 shell 中生效。

	source $HOME/.profile.

source 在当前 bash 环境下执行命令，而 scripts 是启动一个子 shell 来执行命令。这样如果把设置环境变量的命令写进 scripts 中，就只会影响子 shell 无法改变当前的 BASH>通过文件设置环境变量时，要用 source 命令。

执行 go version 命令查看版本信息，测试安装是否成功。

	go version
	go version go1.13.3 linux/amd64

用编辑器，如 vi 或 GNOME 的 gedit 编写以下一段测试代码：

	package main

	func main() {
	    print("Hello, Let's Go!\n")
	}

直接 run 方式运行或编译生产程序：

	# vi demo.go
	# go run demo.go
	Hello, Let's Go!

	# go build demo.go
	# ls -l
	total 5824
	-rwxr-xr-x 1 root   root   5917096 Oct 18 14:32 demo
	-rw-r--r-- 1 root   root      1763 Oct 18 08:00 demo.go...

因为 GO 是静态编译，编译结果 demo 是一个独立可运行程序，不依赖其它文件。


相关环境变量设置

$GOROOT   指向golang安装之后的根目录，windows平台下默认为c:/go，会在安装过程中由安装程序自动写入系统环境变量。
$GOARCH   目标平台（编译后的目标平台）的处理器架构（386、amd64、arm）
$GOOS     目标平台（编译后的目标平台）的操作系统（darwin、freebsd、linux、windows）
$GOBIN    指向安装之后根目录下的bin目录，即$GOROOT/bin

`go get` = git clone + go install，从 github 上直接 clone 下源码，编译出 .a 包文件和安装 bin 到 $GOPATH，就可以本地任意地方使用了。比直接使用 `go install` 的体验要好，因为不会被墙。gofmt 确保代码风格统一，码农们再也不用为空格与 Tab 争吵了。 `go test` 支持 benchmarks 和覆盖率测试。

Debian 系统 DVD 1 包含 Git 安装文件，通过 dpkg 安装它，也可以使用 apt 自带下载安装：

	dpkg -i /media/cdrom/pool/main/g/git/git_2.20.1-2_amd64.deb
	apt install git


一般开发过程还会用到的数据库相关的 mysql，gorm 模块，或者 Web 框架 beego 或 iris 等安装参考，参数 -u 表示更新依赖：

	go get github.com/go-sql-driver/mysql
	go get -u github.com/jinzhu/gorm

	go get github.com/astaxie/beego
	go get -u github.com/beego/bee

	go get -u github.com/kataras/iris
	go get -u github.com/mattn/go-sqlite3
	go install github.com/mattn/go-sqlite3

	go get gopkg.in/yaml.v2
	go get gopkg.in/gcfg.v1

考虑到需要使用到 C++ 模块，可以将 GCC 编译器一并安装。

# 🚩 Go Doc 文檔查詢

支持本地参考文档，执行 `godoc -http=localhost:6060` 后就能在浏览器中访问 `godoc.org`、 `golang.org` 的本地版，对被墙的同学是个不错的选择。

	cmd /C "start http://localhost:6080 && godoc -http=localhost:6080"

使用 go doc 命令可以直接查詢模塊信息，如内建函數：

	go doc builtin
	go doc builtin.float64

命令文檔

	>go help doc
	usage: go doc [-u] [-c] [package|[package.]symbol[.methodOrField]]

Doc prints the documentation comments associated with the item identified by its
arguments (a package, const, func, type, var, method, or struct field)
followed by a one-line summary of each of the first-level items "under"
that item (package-level declarations for a package, methods for a type,
etc.).

Doc accepts zero, one, or two arguments.

Given no arguments, that is, when run as

	go doc

it prints the package documentation for the package in the current directory.
If the package is a command (package main), the exported symbols of the package
are elided from the presentation unless the -cmd flag is provided.

When run with one argument, the argument is treated as a Go-syntax-like
representation of the item to be documented. What the argument selects depends
on what is installed in GOROOT and GOPATH, as well as the form of the argument,
which is schematically one of these:

	go doc <pkg>
	go doc <sym>[.<methodOrField>]
	go doc [<pkg>.]<sym>[.<methodOrField>]
	go doc [<pkg>.][<sym>.]<methodOrField>

The first item in this list matched by the argument is the one whose documentation
is printed. (See the examples below.) However, if the argument starts with a capital
letter it is assumed to identify a symbol or method in the current directory.

For packages, the order of scanning is determined lexically in breadth-first order.
That is, the package presented is the one that matches the search and is nearest
the root and lexically first at its level of the hierarchy. The GOROOT tree is
always scanned in its entirety before GOPATH.

If there is no package specified or matched, the package in the current
directory is selected, so "go doc Foo" shows the documentation for symbol Foo in
the current package.

The package path must be either a qualified path or a proper suffix of a
path. The go tool's usual package mechanism does not apply: package path
elements like . and ... are not implemented by go doc.

When run with two arguments, the first must be a full package path (not just a
suffix), and the second is a symbol, or symbol with method or struct field.
This is similar to the syntax accepted by godoc:

        go doc <pkg> <sym>[.<methodOrField>]

In all forms, when matching symbols, lower-case letters in the argument match
either case but upper-case letters match exactly. This means that there may be
multiple matches of a lower-case argument in a package if different symbols have
different cases. If this occurs, documentation for all matches is printed.

Examples:

	go doc                   # Show documentation for current package.
	go doc Foo               # Show documentation for Foo in the current package.
	go doc json              # Shorthand for encoding/json.
	go doc encoding/json     # Show documentation for the encoding/json package.
	go doc json.number       # Show documentation and method summary for json.Number.
	go doc json.Number
	go doc json.number.int64 # Show documentation for json.Number's Int64 method.
	go doc json.Number.Int64
	go doc cmd/doc           # Show package docs for the doc command.
	go doc -cmd cmd/doc      # Show package docs and exported symbols within the doc command.
	go doc template.new      # Show documentation for html/template's New function. (html/template is lexically before text/template)
	go doc text/template.new # One argument, Show documentation for text/template's New function.
	go doc text/template new # Two arguments, Show documentation for text/template's New function.

At least in the current tree, these invocations all print the documentation for json.Decoder's Decode method:

	go doc json.Decoder.Decode
	go doc json.decoder.decode
	go doc json.decode
	cd go/src/encoding/json; go doc decode

Flags:

- all
    Show all the documentation for the package.
- c
    Respect case when matching symbols.
- cmd
    Treat a command (package main) like a regular package. Otherwise package main's exported symbols are hidden when showing the package's top-level documentation.
- src
    Show the full source code for the symbol. This will display the full Go source of its declaration and definition, such as a function definition (including the body), type declaration or enclosing const block. The output may therefore include unexported details.
- u
    Show documentation for unexported as well as exported symbols, methods, and fields.


# 🚩 Go 2.0 设计草案：主打规模化和扩展性，支持泛型
 
2017 年 7 月，Go 语言官博就曾透露 Go 2 开发计划，并表示 Go 2 的目标就是解决 Go 1.x 在规模化方面做的还不够好的地方。随着时间的推进，开发团队已着手准备 2.0 版本的开发工作，并公布了设计草案，供社区讨论和反馈，以促进最终的语言设计。

设计草案包含三个方面，错误处理、错误值和泛型，并针对各个方面进行了详细的概述和改进草案。大致总结如下：

一、错误处理（Error handling）
为扩展至大型代码库，Go 程序必须是轻量级的，不会过度重复，且具备稳健性，能够优雅地处理出现的错误。

目前 Go 检查错误的代码太多，但处理这些错误的代码却严重不足。对于 Go 2，开发团队希望错误检查更加轻量级，减少用于错误检查的 Go 程序的文本量。此外，还能更加方便地编写错误处理程序，提高开发者处理错误的可能性。

为避免处理重复异常，错误检查和错误处理还必须是显性的，在程序文本中可见。

参考示例：

	func main() {
		hex, err := ioutil.ReadAll(os.Stdin)
		if err != nil {
			log.Fatal(err)
		}

		data, err := parseHexdump(string(hex))
		if err != nil {
			log.Fatal(err)
		}

		os.Stdout.Write(data)
	}

简化后：

	func main() {
		handle err {
			log.Fatal(err)
		}

		hex := check ioutil.ReadAll(os.Stdin)
		data := check parseHexdump(string(hex))
		os.Stdout.Write(data)
	}

二、错误值（Error values）
大型程序必须能够以编程方式测试和响应错误，并且还能很好地报告它们。

目前的各种流行的助手工具包添加了超出标准错误接口的功能，但它们以不兼容的方式执行。对于 Go 2，开发团队考虑将“可选接口”标准化，以允许这些工具包进行互操作，并慢慢减少对它们的需求。

改进主要包含两个目标：一是让程序的错误检查更容易，更不容易出错，以提高程序的错误处理和稳健性；二是希望能够以标准格式打印包含额外细节的错误。

	// Is reports whether err or any of the errors in its chain is equal to target.
	func Is(err, target error) bool
	// As checks whether err or any of the errors in its chain is a value of type E.
	// If so, it returns the discovered value of type E, with ok set to true.
	// If not, it returns the zero value of type E, with ok set to false.
	func As(type E)(err error) (e E, ok bool)

三、泛型（Generics）
想要扩展到大型代码库，代码的可重用性非常重要。

Go 团队在早期其实一直有在调查和讨论“泛型”的可能性设计，但由于种种原因，Go 1 更多的是确保能快速构建包含很多独立软件包的程序。

Go 2 的目标是通过允许带有类型参数的参数多态来解决编写 Go 库的问题，这些问题抽象出了不必要的类型细节。

此外，除了预期的容器类型之外，开发团队还希望能编写有用的库来操作任意的 map 和 channel 值。理想方案是编写能够同时操作 [ ]byte 和 string 值的多态函数。

	type List(type T) []T

	func Keys(type K, V)(m map[K]V) []K


# 🚩 Introduction

[Golanag](https://github.com/golang/go)
[Go会接替Java，成为下一个企业级编程语言吗？](https://zhuanlan.zhihu.com/p/62763527)
[the Way to Go](https://github.com/Unknwon/the-way-to-go_ZH_CN/blob/master/TOC.md)
[go1.12.windows-amd64.msi](https://dl.google.com/go/go1.12.windows-amd64.msi)
[GoSublime or Golang Build](https://github.com/golang/sublime-build)
[为 Java 程序员准备的 Go 语言入门](https://www.runoob.com/w3cnote/go-for-java-programmers.html)
[GoDoc](https://godoc.org/fmt)
[Go By Examples](https://gobyexample.com/)
[Go 编程语言](https://go-zh.org/doc/)
[Go 语言之旅](https://tour.go-zh.org/welcome/1)
[50 Shades of Go](http://devs.cloudimmunity.com/gotchas-and-common-mistakes-in-go-golang/index.html)
[Go Web Programming](https://www.kancloud.cn/kancloud/web-application-with-golang/44105)

Go是Google开发的一种编译型，可平行化，并具有垃圾回收功能的编程语言。 Robert Griesemer & Rob Pike 及肯·汤普逊于2007年9月开始设计Go语言，稍后 Ian Lance Taylor & Russ Cox 加入项目中。Go语言是基于 Inferno 操作系统所开发的。Go语言于2009年11月正式宣布推出，成为开放源代码项目，并在Linux及MacOSX平台上进行了实现，后追加Windows系统下的实现。

正如: 21 世纪的 C 语言 这句话所说，Go 语言并不是凭空而造的，而是和 C++、Java 和 C# 一样属于 C 系。不仅如此，设计者们还汲取了其它编程语言的精粹部分融入到 Go 语言当中。

在声明和包的设计方面，Go 语言受到 Pascal、Modula 和 Oberon 系语言的影响；在并发原理的设计上，Go 语言从同样受到 Tony Hoare 的 CSP（通信序列进程 Communicating Squential Processes）理论影响的 Limbo 和 Newsqueak 的实践中借鉴了一些经验，并使用了和 Erlang 类似的机制。

这是一门完全开源的编程语言，因为它使用 BSD 授权许可，所以任何人都可以进行商业软件的开发而不需要支付任何费用。

尽管为了能够让目前主流的开发者们能够对 Go 语言中的类 C 语言的语法感到非常亲切而易于转型，但是它在极大程度上简化了这些语法，使得它们比 C/C++ 的语法更加简洁和干净。同时，Go 语言也拥有一些动态语言的特性，这使得使用 Python 和 Ruby 的开发者们在使用 Go 语言的时候感觉非常容易上手。

C/C++ 的发展速度无法跟上计算机发展的脚步，十多年来也没有出现一门与时代相符的主流系统编程语言，因此人们需要一门新的系统编程语言来弥补这个空缺，尤其是在计算机信息时代。相比计算机性能的提升，软件开发领域不被认为发展得足够快或者比硬件发展得更加成功（有许多项目均以失败告终），同时应用程序的体积始终在不断地扩大，这就迫切地需要一门具备更高层次概念的低级语言来突破现状。

在 Go 语言出现之前，开发者们总是面临非常艰难的抉择，究竟是使用执行速度快但是编译速度并不理想的语言，如 C++，还是使用编译速度较快但执行效率不佳的语言，如.NET、Java，或者说开发难度较低但执行速度一般的动态语言呢？显然，Go 语言在这 3 个条件之间做到了最佳的平衡：快速编译，高效执行，易于开发。

Go 语言的主要目标是将静态语言的安全性和高效性与动态语言的易开发性进行有机结合，达到完美平衡，从而使编程变得更加有乐趣，而不是在艰难抉择中痛苦前行。

因此，Go 语言是一门类型安全和内存安全的编程语言。虽然 Go 语言中仍有指针的存在，但并不允许进行指针运算。

Go 语言的另一个目标是对于网络通信、并发和并行编程的极佳支持，从而更好地利用大量的分布式和多核的计算机，这一点对于谷歌内部的使用来说就非常重要了。设计者通过 `goroutine` 这种轻量级线程的概念来实现这个目标，然后通过 `channel` 来实现各个 `goroutine` 之间的通信。他们实现了分段栈增长和 `goroutine` 在线程基础上多路复用技术的自动化。

这个特性显然是 Go 语言最强有力的部分，不仅支持了日益重要的多核与多处理器计算机，也弥补了现存编程语言在这方面所存在的不足。

Go 语言能像java一样自动管理内存，又像 C 一样有指针，有一个 `main()` 函数；将以下代码保存到 `hello.go`，使用 `go run hello.go` 命令执行：

	package main
	 
	import "fmt"
	 
	func main() {
	    fmt.Printf("hello Golang\n");
	}

Golang 中不存在类、对象的概念，因此是一个基于并发模型的语言，并不是完整的面向对象编程。以 type 为中心，定义类型方法，也可以达到部分对象的功能，好处是代码组织上有迹可寻，同一类的用同一个 type+一组类型方法即可。

以 package 来组织代码，名为 main 的 package 是整个项目的入口。其余的package以库的形式起作用，通过 import 引入。目前理解的是，Go 为了做到环境无关，把相关的库都静态编译成一个可执行文件，因此编译出来的go程序明显体积都大于代码，这是编译类语言中比较少见的。

程序的入口 main 执行之前有一个 init 方法，更贴近于我们在业务开发中为流程准备的hook，每个源文件可以且只一个init方法。

## 语言的用途

Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。

Go 语言一个非常好的目标就是实现所谓的复杂事件处理（CEP），这项技术要求海量并行支持，高度的抽象化和高性能。当我们进入到物联网时代，CEP 必然会成为人们关注的焦点。

但是 Go 语言同时也是一门可以用于实现一般目标的语言，例如对于文本的处理，前端展现，甚至像使用脚本一样使用它。

值得注意的是，因为垃圾回收和自动内存分配的原因，Go 语言不适合用来开发对实时性要求很高的软件。

越来越多的谷歌内部的大型分布式应用程序都开始使用 Go 语言来开发，例如谷歌地球的一部分代码就是由 Go 语言完成的。

如果你想知道一些其它组织使用Go语言开发的实际应用项目，你可以到 使用 Go 的组织 页面进行查看。出于隐私保护的考虑，许多公司的项目都没有展示在这个页面。我们将会在第 21 章讨论到一个使用 Go 语言开发的大型存储区域网络（SAN）案例。

在 Chrome 浏览器中内置了一款 Go 语言的编译器用于本地客户端（NaCl），这很可能会被用于在 Chrome OS 中执行 Go 语言开发的应用程序。

Go 语言可以在 Intel 或 ARM 处理器上运行，因此它也可以在安卓系统下运行，例如 Nexus 系列的产品。


## 语言的特性

Go 语言从本质上（程序和结构方面）来实现并发编程。

因为 Go 语言没有类和继承的概念，所以它和 Java 或 C++ 看起来并不相同。但是它通过接口（interface）的概念来实现多态性。Go 语言有一个清晰易懂的轻量级类型系统，在类型之间也没有层级之说。因此可以说这是一门混合型的语言。

在传统的面向对象语言中，使用面向对象编程技术显得非常臃肿，它们总是通过复杂的模式来构建庞大的类型层级，这违背了编程语言应该提升生产力的宗旨。

函数是 Go 语言中的基本构件，它们的使用方法非常灵活。在第六章，我们会看到 Go 语言在函数式编程方面的基本概念。

Go 语言使用静态类型，所以它是类型安全的一门语言，加上通过构建到本地代码，程序的执行速度也非常快。

作为强类型语言，隐式的类型转换是不被允许的，记住一条原则：让所有的东西都是显式的。

Go 语言其实也有一些动态语言的特性（通过关键字 var），所以它对那些逃离 Java 和 .Net 世界而使用 Python、Ruby、PHP 和 JavaScript 的开发者们也具有很大的吸引力。

Go 语言支持交叉编译，比如说你可以在运行 Linux 系统的计算机上开发运行 Windows 下运行的应用程序。这是第一门完全支持 UTF-8 的编程语言，这不仅体现在它可以处理使用 UTF-8 编码的字符串，就连它的源码文件格式都是使用的 UTF-8 编码。Go 语言做到了真正的国际化！

许多能够在大多数面向对象语言中使用的特性 Go 语言都没有支持，但其中的一部分可能会在未来被支持。

✗ 为了简化设计，不支持函数重载和操作符重载
✗ 为了避免在 C/C++ 开发中的一些 Bug 和混乱，不支持隐式转换
✗ Go 语言通过另一种途径实现面向对象设计（第 10-11 章）来放弃类和类型的继承
✗ 尽管在接口的使用方面（第 11 章）可以实现类似变体类型的功能，但本身不支持变体类型
✗ 不支持动态加载代码
✗ 不支持动态链接库
✗ 不支持泛型
✗ 通过 recover 和 panic 来替代异常机制
✗ 不支持静态变量



✓ 基本数据类型

☛ bool
☛ string
☛ int int8 int16 int32 int64
☛ uint uint8 uint16 uint32 uint64
☛ uintptr
☛ byte（uint8）
☛ rune（int32，用于表示一个 unicode code point）
☛ float32 float64
☛ complex64 complex128


✓ Pakages

Golang 程序由包（packages）组成，程序从 main 包开始运行：

	package main

此语句表示此文件属于 main 包（多个源文件可以属于同一个包）。`import` 语句后接上包所在的路径，一个目录中放置一个包，通常的做法是，目录名和包名相同：

	import (
	    "fmt"
	    "math/rand"
	)

这里的 import 语句也可以这样写：

	import "fmt"
	import "math/rand"

我们导入了包之后，就可以通过 package.name 来引用导出的 name 了，例如：

	import "fmt"
	 
	fmt.Printf("hello Golang\n");

在 Golang 中，一个名字如果首字母大写则表示此名字被导出。


✓ 自动垃圾回收

从C到C++，从程序性能的角度来考虑，这两种语言允许程序员自己管理内存，包括内存的申请和释放等。因为没有垃圾回收机制所以C/C++运行起来速度很快，但是随着而来的是程序员对内存使用上的很谨小慎微的考虑。因为哪怕一点不小心就可能会导致内存泄露，使得资源浪费或者野指针致使程序崩溃等，尽管C++11后来使用了智能指针的概念，但是程序员仍然需要很小心的使用。后来为了提高程序开发的速度以及程序的健壮性，Java和C#等高级语言引入了GC机制，即程序员不需要再考虑内存的回收等，而是由语言特性提供垃圾回收器来回收内存。但是随之而来的可能是程序运行效率的降低。

Go 语言作为一门新生的开发语言，当然不能忽略内存管理这个问题。Go语言没有C++ 
这么强大的指针计算功能，因此可以很自然地包含垃圾回收功能。开发者无需担心所指向的对象失效的问题，因此Go语言中不需要 `delete` 关键字，也不需要 `free()` 方法来明确释放内存。


✓ 更丰富的内置类型

其实作为一种新兴的语言，如果仅仅是为了某种特定的用途那么可能其内置类型不是很多，仅需要能够完成我的功能即可，但是Go语言不仅支持几乎所有语言都支持的简单内置类型，比如整型和浮点型等，还支持一些其他的高级类型，比如字典类型，map。数组切片 Slice，类似于C++ STL中的 vector，在Go也是一种内置的数据类型作为动态数组来使用。这里满有一个颇为简单的解释：“既然绝大多数开发者都需要用到这个类型，为什么还非要每个人都写一行 import 语句来包含一个库？”


✓ 支持函数多返回值

一些高级语言如 C，C++ 是不支持多个函数返回值的，但是这项功能又确实是需要的。所以在C语言中一般通过将返回值定义成一个结构体，或者通过函数的参数引用的形式进行返回。而在Go语言中，作为一种新型的语言，目标定位为强大的语言当然满足这一需求:

	func getName()(firstName, middleName, lastName, nickName string){
		return "May", "M", "Chen", "Babe" 
	}

	fn, mn, ln, nn := getName()
	_, _, lastName, _ := getName() //缺省调用


✓ 错误处理

在传统的OOP编程中，为了捕获程序的健壮性需要捕获异常，使用的方法大都是 try-catch 结构, 而 Go 引入了三个关键字，分别是 `defer`、 `panic` 和 `recover`，其中使用 `defer` 关键字语句确保在函数退出时自动执行相关代码，不管程序是否出现异常。

	// java
	Connection conn = ...;
	try {
	    Statement stmt = ...;
	    // ...
	finally {
	    stmt.close();
	    }
	finally {
	    conn.close(); 
	}

	// Go
	conn := ...
	defer conn.Close()

Go 语言的错误处理机制可以大量减少代码量，让开发者也无需仅仅为了程序安全性而添加大量一层套一层的 try-catch。这对于代码的阅读者和维护者来说也是一件很好的事情，因为可以避免在层层的代码嵌套中定位业务代码。

✓ 匿名函数和闭包

在 Go 语言中，所有的函数也是值类型，可以作为参数传递。Go 语言支持常规的匿名函数和闭包，比如下列代码就定义了一个匿名函数并赋予 `f`，开发者可以随意对该匿名函数变量进行传递和调用： 

	f := func(x, y int) int { 
		return x + y 
	}


✓ 类型和接口 Type And interface

Go是静态类型语言，每个变量都有一个静态类型，即在编译时就已知被固定上一种类型：

	type MyInt int

	var i int
	var j MyInt

变量i和j具有不同的静态类型，虽然他们具有相同的底层类型，但如果没有转换，则无法将他们分配给彼此。


变量包括（type,value）两部分，这也是为什么 `nil != nil` 的原因。 type 包括 static type 和 concrete type，前者是编辑时就看到的类型，后者是 runtime 看到的类型。

interface 可以存储任何具体的值。

	type IPerson interface{
	}

	type Student struct{
	    name string
	    age int
	}

	func newIPerson(name string,age int) IPerson{
	    return Student{
	        name : name,
	        age : age,
	    }
	}

接口是实现 OPP 时候的一些特性，Go语言没有很复杂的面向对象的概念，即没有继承和重载，其类型更像是 C 中的 struct，并且直接使用了struct关键字，仅仅是最基本的类型组合功能。

✓ 并发编程

最吸引人就是这个特性，Go 语言引入了 `goroutine` 概念，它使得并发编程变得非常简单。通过使用 `goroutine` 而不是裸用操作系统的并发机制，以及使用消息传递来共享内存而不是使用共享内存来通信，Go语言让并发编程变得更加轻盈和安全。通过在函数调用前使用关键字 `go` 即可让该函数以 `goroutine` 方式执行。 `goroutine` 是一种比线程更加轻盈、更省资源的协程。

Go 语言实现了通信顺序进程 CSP - Communicating Sequential Process 模型来作为 `goroutine` 间的推荐通信方式。在CSP模型中，一个并发系统由若干并行运行的顺序进程组成，每个进程不能对其他进程的变量赋值。进程之间只能通过一对通信原语实现协作。Go语言用 `channel` 这个概念来轻巧地实现了CSP模型。`channel` 的使用方式比较接近 Unix 系统中的管道 pipe 概念，可以方便地进行跨 `goroutine` 的通信。

另外，由于一个进程内创建的所有 `goroutine` 运行在同一个内存地址空间中，因此如果不同的 `goroutine` 不得不去访问共享的内存变量，访问前应该先获取相应的读写锁。Go语言标准库中的 sync 包提供了完备的读写锁功能。

✓ 支持反射 reflecttion

可以用来获取对象类型的相信信息，并动态操作对象。因为反射可能会对程序的可读性有很大的干扰，所以，在Go中只是在特别需要反射支持的地方才实现反射的一些功能。“反射最常见的使用场景是做对象的序列化（serialization，有时候也叫Marshal & Unmarshal）。例如，Go语言标准库的encoding/json、encoding/xml、encoding/gob、encoding/binary等包就大量依赖于反射功能来实现。”

## Go 运行时（runtime）

尽管 Go 编译器产生的是本地可执行代码，这些代码仍旧运行在 Go 的 runtime（这部分的代码可以在 runtime 包中找到）当中。这个 runtime 类似 Java 和 .NET 语言所用到的虚拟机，它负责管理包括内存分配、垃圾回收、栈处理、goroutine、channel、切片（slice）、map 和反射（reflection）等等。

runtime 主要由 C 语言编写（Go 1.5 开始自举），并且是每个 Go 包的最顶级包。你可以在目录 `$GOROOT/src/runtime` 中找到相关内容。

垃圾回收器 Go 拥有简单却高效的标记-清除回收器。它的主要思想来源于 IBM 的可复用垃圾回收器，旨在打造一个高效、低延迟的并发回收器。目前 gccgo 还没有回收器，同时适用 gc 和 gccgo 的新回收器正在研发中。使用一门具有垃圾回收功能的编程语言不代表你可以避免内存分配所带来的问题，分配和回收内容都是消耗 CPU 资源的一种行为。

Go 的可执行文件都比相对应的源代码文件要大很多，这恰恰说明了 Go 的 runtime 嵌入到了每一个可执行文件当中。当然，在部署到数量巨大的集群时，较大的文件体积也是比较头疼的问题。但总的来说，Go 的部署工作还是要比 Java 和 Python 轻松得多。因为 Go 不需要依赖任何其它文件，它只需要一个单独的静态文件，这样你也不会像使用其它语言一样在各种不同版本的依赖文件之间混淆。


## 与 C/C++ 进行交互 CGO SWIG
cgo 文档主页: http://golang.org/cmd/cgo


SWIG（简化封装器和接口生成器）支持在 Linux 系统下使用 Go 代码调用 C 或者 C++ 代码。这里有一些使用 SWIG 的注意事项：

✓ 编写需要封装的库的 SWIG 接口。
✓ SWIG 会产生 C 的存根函数。
✓ 这些库可以使用 cgo 来调用。
✓ 相关的 Go 文件也可以被自动生成。

这类接口支持方法重载、多重继承以及使用 Go 代码实现 C++ 的抽象类。

目前使用 SWIG 存在的一个问题是它无法支持所有的 C++ 库，比如说它就无法解析 `TObject.h`。


工具 cgo 提供了对 FFI（外部函数接口）的支持，能够使用 Go 代码安全地调用 C 语言库，cgo 会替代 Go 编译器来产生可以组合在同一个包中的 Go 和 C 代码。在实际开发中一般使用 cgo 创建单独的 C 代码包。

如果你想要在你的 Go 程序中使用 cgo，则必须在单独的一行使用 `import "C"` 来导入，一般来说你可能还需要 `import "unsafe"`。

然后，你可以在 `import "C"` 之前使用注释（单行或多行注释均可）的形式导入 C 语言库（甚至有效的 C 语言代码），它们之间没有空行，例如：

	// #include <stdio.h>
	// #include <stdlib.h>
	import "C"

名称 "C" 并不属于标准库的一部分，这只是 cgo 集成的一个特殊名称用于引用 C 的命名空间。在这个命名空间里所包含的 C 类型都可以被使用，例如 `C.uint`、C`.long` 等等，还有 `libc` 中的函数 `C.random()` 等也可以被调用。

当你想要使用某个类型作为 C 中函数的参数时，必须将其转换为 C 中的类型，反之亦然，例如：

	var i int
	C.uint(i) 		// 从 Go 中的 int 转换为 C 中的无符号 int
	int(C.random()) // 从 C 中 random() 函数返回的 long 转换为 Go 中的 int

下面的 2 个 Go 函数 `Random()` 和 `Seed()` 分别调用了 C 中的 `C.random()` 和 `C.srandom()`。

	package rand

	// #include <stdlib.h>
	import "C"

	func Random() int {
		return int(C.random())
	}

	func Seed(i int) {
		C.srandom(C.uint(i))
	}

C 当中并没有明确的字符串类型，如果你想要将一个 string 类型的变量从 Go 转换到 C 时，可以使用 `C.CString(s)`；同样，可以使用 `C.GoString(cs)` 从 C 转换到 Go 中的 string 类型。

Go 的内存管理机制无法管理通过 C 代码分配的内存。

开发人员需要通过手动调用 C.free 来释放变量的内存：

	defer C.free(unsafe.Pointer(Cvariable))

这一行最好紧跟在使用 C 代码创建某个变量之后，这样就不会忘记释放内存了。下面的代码展示了如何使用 cgo 创建变量、使用并释放其内存：

	package print

	// #include <stdio.h>
	// #include <stdlib.h>
	import "C"
	import "unsafe"

	func Print(s string) {
		cs := C.CString(s)
		defer C.free(unsafe.Pointer(cs))
		C.fputs(cs, (*C.FILE)(C.stdout))
	}

构建 cgo 包

除了使用变量 GOFILES 之外，还需要使用变量 CGOFILES 来列出需要使用 cgo 编译的文件列表。可以使用包含以下内容的 Makefile 文件来编译，你可以使用 gomake 或 make：

	include $(GOROOT)/src/Make.inc
	TARG=rand
	CGOFILES=\
	c1.go\
	include $(GOROOT)/src/Make.pkg


## Bitwish 位运算操作符
 
	&      位运算 AND		0000 0100 & 0000 1111 => 0000 0100 => 4
	|      位运算 OR			0000 1111 | 0011 1100 => 0011 1111
	^      位运算 XOR		0000 0100 + 0000 0010 => 0000 0110 = 6
	&^     位清空 (AND NOT)	0000 0010 &^ 0000 0100 => 0000 0010
	<<     左移				0000 1111 << 2 => 0011 1100
	>>     右移				0000 1111 >> 2 => 0000 0011

如果 ^ 是作为一元运算符出现，他的意思是按位取反，例如

	package main

	import "fmt"

	func main() {
	    x := 4
	    fmt.Println(^x)
	}
	output: -5

如果作为二元运算符则是

	package main

	import "fmt"

	func main() {
	    x := 4
	    y := 2
	    fmt.Println(x^y)
	}
	output: 6

XOR 是不进位加法计算，也就是异或计算。

 &^ (AND NOT) 位清空运算和被运算变量位置有关系，先看一个例子：

```go
	package main

	import "fmt"

	func main() {

	    x := 2
	    y := 4
	    fmt.Println(x&^y)
	}
	// output: 2
```

计算 x&^y 首先我们先换算成2进制  0000 0010 &^ 0000 0100 = 0000 0010 如果ybit位上的数是0则取x上对应位置的值， 如果ybit位上为1则取结果位上取0

`>>`右移 `<<` 左移继续看例子：

```go
	package main

	import "fmt"

	func main() {
	    x := 2
	    y := 4
	    fmt.Println(x<<1)
	    fmt.Println(y>>1)
	}
	// output:4 2
```

进行转化为二进制 然后向左或者向右移动。

	 

## COM 串口编程初探

golang 串口源码：https://github.com/huin/goserial

对于 go 的串口通讯要求如下：

	Data Bits：8
	Stop Bits：1
	Parity：None
	Hardware Flow Control：None
	Software Flow Control：None

设置串口号和波特率

	c := &serial.Config{Name: "COM5", Baud: 115200}

Config 是一个结构体。原型如下：

	type Config struct {
		Name string
		Baud int

		Size     ByteSize
		Parity   ParityMode
		StopBits StopBits

		// RTSFlowControl bool
		// DTRFlowControl bool
		// XONFlowControl bool

		CRLFTranslate bool // Ignored on Windows.
		// TimeoutStuff int
	}

go get github.com/tarm/goserial
go get github.com/larspensjo/config

go出来都已经快十年了，很多组件都被封装好了，果然被我搜到了 goserial ， 剩下的事情就简单了：

	package main

	import (
	    "flag"
	    "github.com/tarm/goserial"
	    "github.com/larspensjo/config"
	    "os"
	    "log"
	)

	var (
	    conFile = flag.String("configfile","/config.ini","config file")
	)

	var TOPIC = make(map[string]string)

	func main() {
        //获取当前路径
	    file, _ := os.Getwd()
	    cfg, err := config.ReadDefault(file + *conFile)

        //获取配置文件中的配置项
	    id, err := cfg.String("COM","COMID")
	    //设置串口编号
	    c := &serial.Config{Name: id, Baud: 115200}
	    //打开串口
	    s, err := serial.OpenPort(c)

	    if err != nil {
	        log.Fatal(err)
	    }

	    command, err := cfg.String("COM","COMMAND")
	    // 写入货柜串口命令
	    log.Printf("货柜打开指令 %s", command)
	    n, err := s.Write([]byte(command))

	    if err != nil {
	        log.Fatal(err)
	    }

	    buf := make([]byte, 128)
	    n, err = s.Read(buf)
	    log.Printf("读取窗口信息 %s", buf[:n])
	    if err != nil {
	        log.Fatal(err)
	    }
	    log.Printf("%q", buf[:n])
	}

demo 程序这样就完成了，直接用 go build 就可以生成 exe 文件，后面再加入 socket 连接服务器交互，就能实现手机控制货柜的门了


## 文件名、关键字与标识符

Go 的源文件以 .go 为后缀名存储在计算机中，这些文件名均由小写字母组成，如 scanner.go 。如果文件名由多个部分组成，则使用下划线 _ 对它们进行分隔，如 scanner_test.go 。文件名不包含空格或其他特殊字符。

一个源文件可以包含任意多行的代码，Go 本身没有对源文件的大小进行限制。

你会发现在 Go 代码中的几乎所有东西都有一个名称或标识符。另外，Go 语言也是区分大小写的，这与 C 家族中的其它语言相同。有效的标识符必须以字母，任何 UTF-8 编码的字符或 `_` 开头，然后紧跟着 0 个或多个字符或 Unicode 数字，如：

✓ `X56`
✓ `group1`
✓ `_x23`
✓ `i`
✓ `өԑ12`

以下是无效的标识符：

✗ `1ab`（以数字开头）
✗ `case`（Go 语言的关键字）
✗ `a+b`（运算符是不允许的）

_ 本身就是一个特殊的标识符，被称为空白标识符。它可以像其他标识符那样用于变量的声明或赋值，任何类型都可以赋值给它，但任何赋给这个标识符的值都将被抛弃，因此这些值不能在后续的代码中使用，也不可以使用这个标识符作为变量对其它变量进行赋值或运算。

在编码过程中，你可能会遇到没有名称的变量、类型或方法。虽然这不是必须的，但有时候这样做可以极大地增强代码的灵活性，这些变量被统称为匿名变量。

下面列举了 Go 代码中会使用到的 25 个关键字或保留字：

	break		default		func	interface	select
	case		defer		go		map			struct
	chan		else		goto	package		switch
	const		fallthrough	if		range		type
	continue	for			import	return		var

之所以刻意地将 Go 代码中的关键字保持的这么少，是为了简化在编译过程第一步中的代码解析。和其它语言一样，关键字不能够作标识符使用。

除了以上介绍的这些关键字，Go 语言还有 36 个预定义标识符，其中包含了基本类型的名称和一些基本的内置函数（第 6.5 节），它们的作用都将在接下来的章节中进行进一步地讲解。

	append	bool	byte	cap			close	complex	complex64	complex128	uint16
	copy	false	float32	float64		imag	int		int8		int16		uint32
	int32	int64	iota	len			make	new		nil			panic		uint64
	print	println	real	recover		string	true	uint		uint8		uintptr

程序一般由关键字、常量、变量、运算符、类型和函数组成。

程序中可能会使用到这些分隔符：括号 ()，中括号 [] 和大括号 {}。

程序中可能会使用到这些标点符号：.、,、;、: 和 …。

程序的代码通过语句来实现结构化。每个语句不需要像 C 家族中的其它语言一样以分号 ; 结尾，因为这些工作都将由 Go 编译器自动完成。

如果你打算将多个语句写在同一行，它们则必须使用 ; 人为区分，但在实际开发中我们并不鼓励这种做法。


# 🚩 package main 多文件

通常在main package中只有一个main.go文件，里面有程序的入口函数main()。

	go run main.go

就可以跑起程序了。

但是如果 main.go 文件比较长，希望将 main.go 拆分多个文件，比如在 main package 下，有 a.go, b.go 和 main.go。

这个时候再用就需要使用：

	go run *.go



# 🚩 go generate

go generate 命令是 go 1.4 版本里面新添加的一个命令。运行 go generate 时，它将扫描与当前包相关的源代码文件，找出所有包含 `//go:generate` 的特殊注释，提取并执行该特殊注释后面的命令，命令为可执行程序，形同 shell 命令执行。

有几点需要注意：

- 该特殊注释必须在.go源码文件中。
- 每个源码文件可以包含多个generate特殊注释时。
- 显示运行go generate命令时，才会执行特殊注释后面的命令。
- 命令串行执行的，如果出错，就终止后面的执行。
- 特殊注释必须以"//go:generate"开头，双斜线后面没有空格。

在有些场景下，我们会使用go generate：

- yacc：从 .y 文件生成 .go 文件。
- protobufs：从 protocol buffer 定义文件（.proto）生成 .pb.go 文件。
- Unicode：从 UnicodeData.txt 生成 Unicode 表。
- HTML：将 HTML 文件嵌入到 go 源码 。
- bindata：将形如 JPEG 这样的文件转成 go 代码中的字节数组。

再比如：

- string方法：为类似枚举常量这样的类型生成String()方法。
- 宏：为既定的泛型包生成特定的实现，比如用于 ints 的 sort.Ints。

go generate命令使用格式如下：

	go generate [-run regexp] [-n] [-v] [-x] [build flags] [file.go... | packages]

其中：

	-run 正则表达式匹配命令行，仅执行匹配的命令
	-v 输出被处理的包名和源文件名
	-n 显示不执行命令
	-x 显示并执行命令

执行 go generate 时，有一些环境变量可以使用:

	$GOARCH 体系架构 (arm、amd64等待)
	$GOOS   OS环境(linux、windows等)
	$GOFILE 当前处理中的文件名
	$GOLINE 当前命令在文件中的行号
	$GOPACKAGE 当前处理文件的包名
	$DOLLAR 固定的"$",不清楚用途

以安装 Golang 可以执行以下命令打开本地文档：

	start http://localhost:6060/cmd/go/
	godoc

假设我们有个 main.go 文件，内容如下：

	package main

	import "fmt"

	//go:generate echo hello
	//go:generate go run main.go
	//go:generate echo file=$GOFILE pkg=$GOPACKAGE
	func main() {
	    fmt.Println("main func")
	}

执行 go generate 后，输出如下：

	$ go generate
	hello
	main func
	file=main.go pkg=main


## go generate demo

现在我们来实践一下前面介绍的 go generate。需要使用 stringer 工具来生成对象的 String() 方法，它不是 Go 自带的工具，需要手动安装：

	$ go get golang.org/x/tools/cmd/stringer

上面的命令需要翻墙。也可以通过 Github 上的镜像来安装。假设你已经配置好 Go 的开发环境了，安装方法如下：

	$ git clone https://github.com/golang/tools/ $GOPATH/src/golang.org/x/tools
	$ go install golang.org/x/tools/cmd/stringer

安装好的 stringer 命令位于 $GOPATH/bin 目录下，强烈建议将这个目录加入系统 PATH 中。

假设我们有一些代码，里面包含若干定义为 Pill 的整型常量，并为 Pill 类型定义了 String() 方法：

	package painkiller

	type Pill int

	const (
	    Placebo Pill = iota
	    Aspirin
	    Ibuprofen
	    Paracetamol
	    Acetaminophen = Paracetamol
	)

	func (p Pill) String() string {
	    switch p {
	    case Placebo:
	        return "Placebo"
	    case Aspirin:
	        return "Aspirin"
	    case Ibuprofen:
	        return "Ibuprofen"
	    case Paracetamol: // == Acetaminophen
	        return "Paracetamol"
	    }
	    return fmt.Sprintf("Pill(%d)", p)
	}

现在用 go generate 来实现 String()。

首先，我这里创建一个 painkiller.go 文件：

	//go:generate stringer -type=Pill
	package painkiller

	type Pill int

	const (
	    Placebo Pill = iota
	    Aspirin
	    Ibuprofen
	    Paracetamol
	    Acetaminophen = Paracetamol
	)

在文件的开头包含了一个 `//go:generate stringer -type=Pill` 特殊注释，使用 stringer 工具。

然后，在painkiller.go所在的目录下面运行"go generate"命令：

	$ go generate

我们会发现当前目录下面生成一个 pill_string.go 文件，里面实现了我们需要的 String() 方法，文件内容如下：

	// Code generated by "stringer -type=Pill"; DO NOT EDIT.

	package painkiller

	import "fmt"

	const _Pill_name = "PlaceboAspirinIbuprofenParacetamol"

	var _Pill_index = [...]uint8{0, 7, 14, 23, 34}

	func (i Pill) String() string {
	    if i < 0 || i >= Pill(len(_Pill_index)-1) {
	        return fmt.Sprintf("Pill(%d)", i)
	    }
	    return _Pill_name[_Pill_index[i]:_Pill_index[i+1]]
	}

通过 stringer 工具生成的 String() 方法很好地压缩了 iota 枚举量的名称，并将分割位置保存到了 `_Pill_name` 常量中，配合 String() 方法就很好的将 Pill 数字转化成为对应的常量名。

参考
Generating code https://blog.golang.org/generate
Go generate: A Proposal https://docs.google.com/document/d/1SHOA8vZUKwFP0WHg2_qgJsDB3-Wk_6OutAAAlJj1BTk/edit#heading=h.69ca143066hf
Generate Go files by processing source https://golang.org/cmd/go/#hdr-Generate_Go_files_by_processing_source




# 🚩 模块安装 unrecognized import path
[go mod 使用](https://juejin.im/post/5c8e503a6fb9a070d878184a)


粗手请不要安装多个 Go 版本，可能导致符号重定义：

	Go\src\runtime\map.go:65:2: bucketCntBits redeclared

第一个方法：

不翻墙的情况下怎么解决这个问题？其实 golang 在 github 上建立了一个镜像库，如 https://github.com/golang/net 即是 https://golang.org/x/net 的镜像库

获取 golang.org/x/net 包，其实只需要以下步骤：

	mkdir -p $GOPATH/src/golang.org/x
	cd $GOPATH/src/golang.org/x
	git clone https://github.com/golang/net.git

其它 golang.org/x 下的包获取皆可使用该方法


其二，把 golang 升级到 1.11，建议使用 1.12,1.11 之后，go 官方引入了 go module 来解决依赖管理问题.这是快速解决被墙的核心.

In Linux or macOS, you can execute the below commands.

Bash

	# Enable the go modules feature
	export GO111MODULE=on
	# Set the GOPROXY environment variable
	export GOPROXY=https://goproxy.io

Or, write it into the .bashrc or .bash_profile file.

In Windows, you can execute the below commands.

PowerShell 

	# Enable the go modules feature
	$env:GO111MODULE=on
	# Set the GOPROXY environment variable
	$env:GOPROXY=https://goproxy.io

Now, when you build and run your applications, go will fetch dependencies via goproxy.io. See more information in the goproxy repository.

If your Go version >= 1.13, the GOPRIVATE environment variable controls which modules the go command considers to be private (not available publicly) and should therefore not use the proxy or checksum database. For example:

Go version >= 1.13

	go env -w GOPROXY=https://goproxy.io,direct
	# Set environment variable allow bypassing the proxy for selected modules
	go env -w GOPRIVATE=*.corp.example.com



# 🚩 Cobra 命令行库的使用
https://github.com/spf13/cobra

Cobra 既是用于创建强大的现代 CLI 应用程序的库，也是用于生成应用程序和命令文件的程序。许多使用最广泛的Go项目都是使用Cobra构建的，其中包括：

	kubernetes
	docker
	openshift
	...

在我们安装 Cobra 之前，我们先解决大陆网络无法访问的问题，否则是无法完成所有工具的安装。这里我们使用 Gopm - Go Package Manager，这一个好用的 Golang 包管理工具。

	go get -u github.com/gpmgo/gopm

安装 gopm 完成就可以在对应的 $GOPATH/bin 目录下即可看到。继续安装 Cobra：

	go get -g github.com/spf13/cobra/cobra
	go build github.com/spf13/cobra/cobra

提示：在执行 go install 的时候，需要依赖 golang.org/x/相关软件包，手动下载解压到 $GOPATH/src 目录即可。也可以使用 github.com 镜像获取依赖模块，如下 transform 模块，下载后再移动到相应的 golang.org 目录下：

	go get golang.org/x/text/transform
	go get github.com/golang/text/transform


使用 Cobra 生产应用程序

假设现在我们要开发一个基于 CLI 的命令程序，名字为 demo。首先打开 CMD，切换到 GOPATH 的 bin 目录下，执行如下指令：

	cobra init demo

在src目录下会生成一个demo的文件夹，如下：

	tree src/demo
	src/demo
	├── LICENSE
	├── cmd
	│   └── root.go
	└── main.go

测试cobra效果：

	demo go run main.go demo
	A longer description that spans multiple lines and likely contains
	examples and usage of using your application. For example:

	Cobra is a CLI library for Go that empowers applications.
	This application is a tool to generate the needed files
	to quickly create a Cobra application.

当初次创建完项目之后，即可使用项目(这里是"demo")来查看效果；

添加子命令，这里以 51reboot 培训内容为例：

	demo cobra add unbuf
	unbuf created at /Users/yangsheng/go/src/demo/cmd/unbuf.go

	demo tree
	.
	├── LICENSE
	├── cmd
	│   ├── root.go
	│   └── unbuf.go
	└── main.go

此时目录结构变更为如上所示。现在我们来执行一下这个子命令：

	go run main.go unbuf
	unbuf called

完善子命令功能

创建 unbuf 代码程序

	mkdir unbuf

在该目录下面新建文件unbuf.go文件，具体内容如下：

	package unbuf

	import (
	    "fmt"
	    "math/rand"
	    "sync"
	    "time"
	)

	func init() {
	    rand.Seed(time.Now().UnixNano())
	}

	//Player xxx
	type Player struct {
	    User1 string
	    User2 string
	}

	// NewPlayer  create a instance, Player is object
	func NewPlayer(user1, user2 string) *Player {
	    return &Player{
	        User1: user1,
	        User2: user2,
	    }
	}

	func (p *Player) GoPlayer() {
	    var wg sync.WaitGroup
	    ch := make(chan int)
	    wg.Add(2)
	    go player(p.User1, ch, &wg)
	    go player(p.User2, ch, &wg)
	    ch <- 1
	    wg.Wait()
	}

	//player  two players
	func player(name string, ch chan int, wg *sync.WaitGroup) {
	    defer wg.Done()
	    for {
	        ball, ok := <-ch
	        if !ok {
	            fmt.Printf("%s won!!!\n", name)
	            break
	        }
	        n := rand.Intn(100)
	        if n%15 == 0 {
	            fmt.Printf("%s miss,the rand number is %d\n", name, n)
	            close(ch)
	            break
	        }
	        fmt.Printf("Player %s hit the ball %d,the rand number is %d\n", name, ball, n)
	        ball++
	        ch <- ball
	    }
	}

	func Runner() {
	    var wg sync.WaitGroup
	    ch := make(chan int)
	    wg.Add(1)
	    go run(ch, &wg)
	    ch <- 1
	    wg.Wait()
	}

	func run(ch chan int, wg *sync.WaitGroup) {
	    var newRunner int
	    runner := <-ch
	    fmt.Printf("runner %d running with Baton\n", runner)
	    if runner != 4 {
	        newRunner = runner + 1
	        fmt.Printf("runner %d to the line\n", runner)
	        go run(ch, wg)
	    }
	    // rand sleep time
	    n := rand.Intn(100)
	    time.Sleep(time.Duration(n) * time.Millisecond)
	    if runner == 4 {
	        fmt.Printf("runner %d finish,Race over\n", runner)
	        wg.Done()
	        return
	    }
	    fmt.Printf("runner %d exchange with runner %d\n", runner, newRunner)
	    ch <- newRunner
	}
	
	对子命令进行完善，具体代码如下：

	
	// Copyright © 2018 NAME HERE <EMAIL ADDRESS>
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//     http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

	package cmd

	import (
	    "fmt"

	    "github.com/51reboot/golang-03-homework/lesson8/jkak/unbuf"
	    "github.com/spf13/cobra"
	)

	// unbufCmd represents the unbuf command
	var unbufCmd = &cobra.Command{
	    Use:   "unbuf",
	    Short: "A brief description of your command",
	    Long: `A longer description that spans multiple lines and likely contains examples
	and usage of using your command. For example:
	Cobra is a CLI library for Go that empowers applications.
	This application is a tool to generate the needed files
	to quickly create a Cobra application.`,
	    Run: func(cmd *cobra.Command, args []string) {
	        fmt.Println("unbuf called")
	        // TODO: work your own magic here
	        obj := unbuf.NewPlayer("chen", "song")
	        obj.GoPlayer()

	        fmt.Println("\n-- start running --\n")
	        unbuf.Runner()
	    },
	}

	func init() {
	    rootCmd.AddCommand(unbufCmd)

	    // Here you will define your flags and configuration settings.

	    // Cobra supports Persistent Flags which will work for this command
	    // and all subcommands, e.g.:
	    // unbufCmd.PersistentFlags().String("foo", "", "A help for foo")

	    // Cobra supports local flags which will only run when this command
	    // is called directly, e.g.:
	    // unbufCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
	}
	
	到此一个简单demo功能就已经实现，我们运行一下看看实际效果：

	
	go run main.go unbuf
	unbuf called
	Player song hit the ball 1,the rand number is 12
	Player chen hit the ball 2,the rand number is 69
	Player song hit the ball 3,the rand number is 58
	Player chen hit the ball 4,the rand number is 77
	Player song hit the ball 5,the rand number is 83
	Player chen hit the ball 6,the rand number is 31
	Player song hit the ball 7,the rand number is 16
	Player chen hit the ball 8,the rand number is 67
	Player song hit the ball 9,the rand number is 78
	chen miss,the rand number is 15
	song won!!!

	-- start running --

	runner 1 running with Baton
	runner 1 to the line
	runner 1 exchange with runner 2
	runner 2 running with Baton
	runner 2 to the line
	runner 2 exchange with runner 3
	runner 3 running with Baton
	runner 3 to the line
	runner 3 exchange with runner 4
	runner 4 running with Baton
	runner 4 finish,Race over
	
	Cobra的使用就介绍到这里，更新细节可去github详细研究一下。这里只是一个简单的使用入门介绍，如果有错误之处，敬请指出，谢谢～

	最后文中用到的代码，如有侵权，请与我联系；




# 🚩 基本语句

## for only

Golang 使用且只使用 for 来进行循环，没有 while 语句：

	package main
	 
	func main() {
	    sum := 0
	    
	    for i := 0; i < 10; i++ {
	        sum += i
	    }
	    
	    for sum < 1000 {
	        sum += sum
	    }
	}

区别于 C/C++ 等语言，使用 for 语句时不需要 () 并且 {} 是必须的。 if、switch 语法处理上也是一样的。如果需要无限循环，那么使用：

	for {
	}

## if 语句

if 语句可以在执行条件判断前带一个语句，此语句中变量的生命周期在 if 语句结束后结束。

	if n := rand.Intn(6); n <= 2 {
	    fmt.Println("[0, 2]", n)
	} else {
	    fmt.Println("[3, 5]", n)
	}

	// variable n unreachable!

## switch

	package main
	 
	import (
	    "fmt"
	    "runtime"
	)
	 
	func main() {
	    fmt.Print("Go runs on ")
	    switch os := runtime.GOOS; os {
	    case "darwin":
	        fmt.Println("OS X.")
	    case "linux":
	        fmt.Println("Linux.")
	    default:
	        // freebsd, openbsd, plan9, windows...
	        fmt.Printf("%s.", os)
	    }
	}

不像 C/C++ 等语言，Golang 中无需使用 break 语句来跳出 switch，switch 可以不要条件：

	package main
	 
	import (
	    "fmt"
	    "time"
	)
	 
	func main() {
	    t := time.Now()
	    switch {
	    case t.Hour() < 12:
	        fmt.Println("Good morning!")
	    case t.Hour() < 17:
	        fmt.Println("Good afternoon.")
	    default:
	        fmt.Println("Good evening.")
	    }
	}


## defer

一个 defer 语句能够将一个函数调用加入一个列表中，这叫做 deferred，在当前函数调用结束时，再执行 deferred 调用列表中的函数。

	func CopyFile(dstName, srcName string) (written int64, err error) {
	    src, err := os.Open(srcName)
	    if err != nil {
	        return
	    }
	    defer src.Close()
	 
	    dst, err := os.Create(dstName)
	    if err != nil {
	        return
	    }
	    defer dst.Close()
	 
	    return io.Copy(dst, src)
	}

deferred 函数调用按先进后出的顺序执行，如下输出 43210：

	package main
	 
	import "fmt"
	 
	func main() {
	    for i := 0; i < 5; i++ {
	        defer fmt.Print(i)
	    }
	}


## structs & pointer 结构于指针

结构是一个域的集合：

	package main
	 
	import "fmt"
	 
	type Vertex struct {
	    X int
	    Y int
	}
	 
	func main() {
	    v := Vertex{1, 2}
	    v.X = 4
	    fmt.Println(v)
	}

Golang 中是存在指针的，但是指针不支持算术运算：

	p := Vertex{1, 2}
	q := &p 
	q.X = 2

就像上面看到的，字面结构体 literal struct 由 {} 包裹，在 struct literal 中我们可以使用 `{x:0}` 这中类似 JSON 的语法来为特定域设置值：

	type Vertex struct {
	    X, Y int
	}
	 
	r := Vertex{X: 3}

三种初始化结构体的方式：

	// 第一种 直接以 var 声明结构体即可完成实例化
	var vt Vertex
	vt.X = 1
	vt.Y = 2

	// 第二种，使用 new() 实例化，等效 &Vertex{}
	vt := new(Vertex)

	// 第三种，使用字面量初始化
	vt := Vertex{1, 2}
	vt := Vertex{X: 1, Y: 2}

使用 var vt Vertex 会给 vt 分配内存，并零值化内存，但是这个时候的 vt 的类型是 Vertex。

使用 new 关键字时 vt := new(Vertex)，变量 vt 则是一个指向 Vertex 的指针。

对于嵌套匿名结构体的字面量初始化参考如下，写法有点啰嗦：

	type Demo struct {
		Msg string
		Logging struct {
			Info string
		}
	}

	dm := &Demo {
		Msg: "hello",
		Logging: struct {
			Info string
		}{
			Info:"ok",
		},
	}

非匿名嵌套结构体字面量初始化参考：

	type Engine struct {
	    Power int
	    Type  string
	}
	type Car struct {
	    Wheel int
	    Engine
	}

    c := Car{
    	Wheel: 60,
        Engine: Engine{
            Type:  "1.4T",
            Power: 143,
        },
    }



## new 函数

我们可以通过表达式 new(T) 分配一个被初始化为 0 且类型为 T 的值，并且返回指向此值的指针，用法如下：

	var p *T = new(T)
	p := new(T)

更详尽的例子：

	package main
	 
	import "fmt"
	 
	type Vertex struct {
	    X, Y int
	}
	 
	func main() {
	    v := new(Vertex)
	    fmt.Println(v)
	    v.X, v.Y = 11, 9
	    fmt.Println(v)
	}


## slice 与数组

`[n]T` 这种表达在 Golang 中是一个类型，就像 `*T` 一样，表示一个长度为 n 的数组，其元素类型为 T。注意，数组长度无法被改变。

	package main
	 
	import "fmt"
	 
	func main() {
	    var a [2]string
	    a[0] = "Hello"
	    a[1] = "World"
	    fmt.Println(a[0], a[1])
	    fmt.Println(a)
	}

slice 是一个数据结构，其指向一个数组某个连续的部分的切片。slice 用起来很像数组。`[]T` 为 slice 类型，其中元素类型为 T：

	package main
	 
	import "fmt"
	 
	func main() {
	    p := []int{2, 3, 5, 7, 11, 13}
	    fmt.Println("p ==", p)
	 
	    for i := 0; i < len(p); i++ {
	        fmt.Printf("p[%d] == %d\n", i, p[i])
	    }
	}

表达式 `s[lo:hi]` 用于创建一个 slice，新创建的 slice 的元素为 s 中 [lo, hi) 位置的元素。

创建 slice 使用 make 函数，而不是用 new 函数，因为需要设置额外的参数来控制 slice 的创建：

	a := make([]int, 5)
	// len(a) is 5

这里 make 函数会创建一个数组，其元素初始化为 0，并返回一个 slice 指向此数组。make 可以带第三个参数，用于指定容量：

	// len(b) is 0
	// cap(b) is 5
	b := make([]int, 0, 5)
	 
	b = b[:cap(b)] // len(b)=5, cap(b)=5
	b = b[1:] // len(b)=4, cap(b)=4

一个没有值的 slice 是 nil，长度和容量都为 0。

	package main
	 
	import "fmt"
	 
	func main() {
	    var z []int
	    fmt.Println(z, len(z), cap(z))
	    if z == nil {
	        fmt.Println("nil!")
	    }
	}


## for & range

range 被用在 for 中来迭代一个 slice 或者一个 map：

	package main
	 
	import "fmt"
	 
	var s = []int{1, 2, 3}
	 
	func main() {
	    for i, v := range s {
	        fmt.Println(i, v)
	    }
	 
	    // 只需要值，使用 _ 忽略索引
	    for _, v := range s {
	        fmt.Println(v)
	    }
	 
	    // 只需要索引
	    for i := range s {
	        fmt.Println(i)
	    }
	}


## map

map 用于建立键值对映射，从 key 映射到 value。map 可以通过内建方法 make() 来创建但非 new：

	package main
	 
	import "fmt"
	 
	type Vertex struct {
	    Lat, Long float64
	}
	 
	var m map[string]Vertex
	 
	func main() {
	    m = make(map[string]Vertex)
	    m["Bell Labs"] = Vertex{
	        40.68433, -74.39967,
	    }
	    fmt.Println(m["Bell Labs"])
	}

map literal 很像 struct literal，花括号内的两个 Vertex 可以省略不写：

	var m = map[string]Vertex{
	    "Bell Labs": Vertex{
	        40.68433, -74.39967,
	    },
	    "Google": Vertex{
	        37.42202, -122.08408,
	    },
	}

使用 [] 来访问 map 中的值，使用 delete 来删除 map 中的值：

	m[key] = elem
	elem = m[key]
	delete(m, key)

如果需要检查 map 中某 key 是否存在使用：

	elem, ok = m[key]

elem 返回 key 的值，key 不存在时，elem 为 0，ok 表示 key 是否存在。


## Closure 闭包

Golang 中函数也可以作为一个变量值，且函数可以是一个闭包。闭包是一个可以访问内部变量的函数。

	package main
	 
	import "fmt"
	 
	func adder() func(int) int {
	    sum := 0
	    return func(x int) int {
	        sum += x
	        return sum
	    }
	}
	 
	func main() {
	    a := adder()
	    fmt.Println(a(9527))
	}


# 🚩 Panic & Recover

Go 语言中的异常处理，没有 try-catch 结构等，而是使用 defer、 panic、 recover 来处理异常。panic 是用来表示非常严重的不可恢复的错误的，panic() 是 Go 语言的一个内置函数，调用 panic 函数可以主动触发程序异常，程序会立即退出除非在 defer 中调用 recover()。内置函数 recover 允许一段程序管理一个正在 paincing goroutine 的行为。

	package main

	import (
		"fmt"
	)

	func main() {
	    deferCall()
	}

	func deferCall() {
	    defer func() { fmt.Println("1") }()
	    defer func() { fmt.Println("2") }()
	    panic("触发异常")
	    defer func() { fmt.Println("3") }()
	}

在 defer 定义的函数内部执行 recover 函数来停止 panic 函数的执行，并且可以找出给 panic 所传递的错误值。 如果在 defer 函数之外调用恢复，它不会停止 panic 的执行。 在这种情况下，或者当 goroutine 没有 panicing 时，或者提供给 panicing 的参数为零时，恢复返回 nil。 因此，recover 函数的返回值报告协程是否正在遭遇 panicing 。

panic 函数就是往外扔错误，一层接一层往上扔直到当前程序不能运行为止，不想让 panic 函数扔的错误导致程序挂掉，就得使用 recover 函数来接收 panic 错误或者说是阻挡 panicing ，并且 recover 函数可以将错误转化为 error 类型。因为 panic 错误不会让 defer 关键字定义的函数也停止运行。就是说 defer 关键字声明的函数或者代码即使遇到错误也会执行。

一个函数里面有 defer 关键字声明一个函数和要运行出错的代码，假设 defer catch() 这个函数，在 catch 函数里面调用 recover() 就会拦截错误，不会让错误往上扔，返回给调用者 error 对象，里面有错误的信息，从而使 goroutine 不挂掉。

	package main

	import (
	    "fmt"
	    "errors"
	)

	func main() {
	    testError()
	    afterErrorfunc()
	}

	func testError() {
	    //defer catch()
	    panic(" \"panic 错误\"")
	    fmt.Println("抛出一个错误后继续执行代码")
	}
	func  catch()  {
	    if r := recover(); r != nil {
	        fmt.Println("testError() 遇到错误:", r)
	        var err error
	        switch x := r.(type) {
	        case string:
	            err = errors.New(x)
	        case error:
	            err = x
	        default:
	            err = errors.New("")
	        }
	        if err != nil {
	            fmt.Println("recover后的错误:",err)
	        }
	    }
	}

	func afterErrorfunc(){
	    fmt.Println("遇到错误之后 func ")
	}

运行结果：

	panic:  "panic 错误"

	goroutine 1 [running]:
	main.testError()
	    E:/goCode/src/MyTestGo/src/com.dylan.main/panic/testpanic.go:16 +0x40
	main.main()
	    E:/goCode/src/MyTestGo/src/com.dylan.main/panic/testpanic.go:10 +0x27

	Process finished with exit code 2

当 panic 函数执行的时候导致后面函数 afterErrorfunc() 不能执行，main 函数也抛出一个错误，整个程序异常退出。

启用 defer catch() 函数，程序运行结果：

	testError() 遇到错误:  "panic 错误"
	recover后的错误:  "panic 错误"
	遇到错误之后 func 
	Process finished with exit code 0

分析：程序正常结束，没有因为 panic 错误而到导致程序终止挂掉。错误被 recover 函数接收，转化为 error 类型的错误信息输出，然后继续后面 afterErrorfunc(）执行。

一般不用单独定义 catch 函数，而是使用函数闭包，在发生panic 函数里面加入下述代码就可以拦截panicing， 并且不让程序挂掉和显示错误信息。

	defer func() {
        if r := recover(); r != nil {
            fmt.Println("testError() 遇到错误:", r)
        }
    }()

最后如果想将错误信息返回给调用者可以这么做：

	func main() {
	    err := testError()
	    if err != nil {
	        fmt.Println("main 函数得到错误类型:", err)
	    }
	    afterErrorfunc()
	}

	func testError() (err error) {
	    defer func() {
	        if r := recover(); r != nil {
	            fmt.Println("testError() 遇到错误:", r)
	            switch x := r.(type) {
	            case string:
	                err = errors.New(x)
	            case error:
	                err = x
	            default:
	                err = errors.New("")
	            }
	        }
	    }()
	    panic(" \"panic 错误\"")
	    fmt.Println("抛出一个错误后继续执行代码")
	    return nil
	}

	func catch(err error) {
	    if r := recover(); r != nil {
	        fmt.Println("testError() 遇到错误:", r)
	        switch x := r.(type) {
	        case string:
	            err = errors.New(x)
	        case error:
	            err = x
	        default:
	            err = errors.New("")
	        }
	    }
	}

	func afterErrorfunc() {
	    fmt.Println("遇到错误之后 func ")
	}

提前声明一个 error 类型的变量。把错误信息传递给 error变量，再把 error 变量返回给调用者。

## Golang Recover 的一个小坑
https://juejin.im/post/5da6d23e6fb9a04dfa097715

一般 defer recover 这种机制经常用在常驻进程的应用，比如 Web 服务，在 Go 里面，每一个Web请求都会分配一个goroutine去处理，在没有做任何处理的情况下，假如某一个请求发生了panic，就会导致整个服务挂掉，这是不可接受的，所以在Web应用里面必须使用recover保证即使某一个请求发生错误也不影响其它请求。

这里我使用一小段代码模拟一下：

	package main

	import (
		"fmt"
	)

	func main() {
		requests := []int{12, 2, 3, 41, 5, 6, 1, 12, 3, 4, 2, 31}
		for n := range requests {
			go run(n) //开启多个协程
		}

		for {
			select {}
		}
	}

	func run(num int) {
	    //模拟请求错误
		if num%5 == 0 {
			panic("请求出错")
		}
		fmt.Printf("%d\n", num)
	}

上面这段代码无法完整执行下去，因为其中某一个协程必然会发生panic，从而导致整个应用挂掉，其它协程也停止执行。

解决方法和上面一样，我们只需要在run函数里面加入defer recover，整个程序就会非常健壮，即使发生panic，也会完整的执行下去。

	func run(num int) {
		defer func() {
			if err := recover();err != nil {
				fmt.Printf("%s\n", err)
			}
		}()
		if num%5 == 0 {
			panic("请求出错")
		}
		fmt.Printf("%d\n", num)
	}

上面的代码只是演示，真正的坑是：如果你在run函数里面又启动了其它协程，这个协程发生的panic是无法被recover的，还是会导致整个进程挂掉,我们改造了一下上面的例子：

	func run(num int) {
		defer func() {
			if err := recover(); err != nil {
				fmt.Printf("%s\n", err)
			}
		}()
		if num%5 == 0 {
			panic("请求出错")
		}
		go myPrint(num)
	}

	func myPrint(num int) {
		if num%4 == 0 {
			panic("请求又出错了")
		}
		fmt.Printf("%d\n", num)
	}

我在run函数里面又通过协程的方式调用了另一个函数，而这个函数也会发生panic，你会发现整个程序也挂了，即使run函数有recover也没有任何作用，这意味着我们还需要在myPrint函数里面加入recover。但是如果你不使用协程的方式调用myPrint函数，直接调用的话还是可以捕获recover的。

总结一下就是defer recover这种机制只是针对当前函数和以及直接调用的函数可能产生的panic，它无法处理其调用产生的其它协程的panic，这一点和try catch机制不一样。

理论上讲，所有使用协程的地方都必须做defer recover处理，这样才能保证你的应用万无一失，不过开发中可以根据实际情况而定，对于一些不可能出错的函数加了还影响性能。

Go的Web服务也是一样，默认的recover机制只能捕获一层，如果你在这个请求的处理中又使用了其它协程，那么必须非常慎重，毕竟只要发生一个panic，整个Web服务就会挂掉。

最后，总结一下，Go的异常处理机制虽然没有很多其它语言高效，但是基本上还是能满足需求，目前官方已经在着完善这一点，Go2可能会见到。


# 🚩 net.Error Go 中如何准确地判断和识别各种网络错误
https://liudanking.com/network/go-中如何准确地判断和识别各种网络错误/

Go 自带的网络标准库可能让很多第一次使用它的人感慨，这个库让网络编程的门槛低到了令人发指的地步。然而，封装层次与开发人员的可控性往往是矛盾的。Go 的网络库封装程度算是一个不错的折衷，绝大部分时候，我们只需要调用 Dial, Read, Write Close 几个基本操作就可以了。

但是，网络是复杂的。我们有时候需要细致的处理网络中的各种错误，根据不同的错误进行不同的处理。比如我们遇到一个网络错误时，需要区分这个错误是因为无法解析 host ip, 还是 TCP 无法建立连接，亦或是读写超时。一开始的时候，我们的写法可能是这样的：

    errString := err.Error()
    fmt.Println(errString)
    switch {
    case strings.Contains(errString, "timeout"):
        fmt.Println("Timeout")
    case strings.Contains(errString, "no such host"):
        fmt.Println("Unknown host")
    case strings.Contains(errString, "connection refused"):
        fmt.Println("Connection refused")
    default:
        fmt.Printf("Unknown error:%s", errString)
    }

这种根据错误信息进行字符串匹配进行判断的方法有非常明显的局限性：该错误信息依赖于操作系统，不同的操作系统对于同一错误返回的字符串信息可能是不同的。因此，这种判断网络错误类型的方法是不可靠的。那么有没有一种准确而可靠的判断各种网络错误的方式呢？答案是肯定的。

我们知道在 Go 中，error 是一个内建的 interface 类型：

	type error interface {
        Error() string
	}

要准确判断不同的错误类型，我们只需要类型断言出其错误类型即可。

在 Go 的网络标准库中，错误类型被统一封装为 net.Error 的 interface 类型：

	type Error interface {
	    error
	    Timeout() bool   // Is the error a timeout?
	    Temporary() bool // Is the error temporary?
	}

而 net.Error 类型的具体 concrete 类型又被封装为 net.OpError 类型：

	type OpError struct {
	    // Op is the operation which caused the error, such as
	    // "dial", "read" or "write".
	    Op string

	    // Net is the network type on which this error occurred,
	    // such as "tcp" or "udp6".
	    Net string

	    // For operations involving a remote network connection, like
	    // Dial, Read, or Write, Source is the corresponding local
	    // network address.
	    Source Addr

	    // Addr is the network address for which this error occurred.
	    // For local operations, like Listen or SetDeadline, Addr is
	    // the address of the local endpoint being manipulated.
	    // For operations involving a remote network connection, like
	    // Dial, Read, or Write, Addr is the remote address of that
	    // connection.
	    Addr Addr

	    // Err is the error that occurred during the operation.
	    Err error
	}

其中，net.OpError.Err 可能是以下几种类型：

	net.DNSError
	net.InvalidAddrError
	net.UnknownNetworkError
	net.AddrError
	net.DNSConfigError
	*os.SyscallError
	*os.SyscallError 错误比较特殊，与具体操作系统调用有关：

	type SyscallError struct {
	        Syscall string
	        Err     error
	}

对于我们关心的网络错误，SyscallError.Err 一般为 sys.Errno 类型，与网络错误相关的常用值有：

- syscall.ECONNREFUSED
- syscall.ETIMEDOUT

看到这里，你可能忍不住要吐槽 Go 这种错误嵌套处理了，事实上，官方也意识到了这种错误处理的问题，在 Go 2中，可能会出现新的错误和异常处理方式，可以参见 GopherChina 2018 keynote 点评: RETHINKING ERRORS FOR GO 2.
https://liudanking.com/arch/gopherchina-2018-keynote-%E7%82%B9%E8%AF%84/

当前阶段，我们依然要直面这种错误处理方式。为了方便大家理解 Go 网络标准库中处理错误的方式，我们把上面的错误嵌套整理了一张关系图：



明白了网络标准库中处理错误的逻辑，判断和识别各种类型的网络错误就非常简单了：对网络错误进行类型断言。以我们团队主要关心的 DNS 解析错误、TCP 无法建立连接、读写超时为例，判断逻辑可以是这样：

	func isCaredNetError(err error) bool {
	    netErr, ok := err.(net.Error)
	    if !ok {
	        return false
	    }

	    if netErr.Timeout() {
	        log.Println("timeout")
	        return true
	    }

	    opErr, ok := netErr.(*net.OpError)
	    if !ok {
	        return false
	    }

	    switch t := opErr.Err.(type) {
	    case *net.DNSError:
	        log.Printf("net.DNSError:%+v", t)
	        return true
	    case *os.SyscallError:
	        log.Printf("os.SyscallError:%+v", t)
	        if errno, ok := t.Err.(syscall.Errno); ok {
	            switch errno {
	            case syscall.ECONNREFUSED:
	                log.Println("connect refused")
	                return true
	            case syscall.ETIMEDOUT:
	                log.Println("timeout")
	                return true
	            }
	        }
	    }

	    return false
	}

这种错误判定方式除了能解决最开始提到的可靠性和准确性问题，也具有良好的普适性。即基于 net 的其他标准库，如 net/http 也支持这种错误判断方式。

扩展阅读

- Portable way to detect different kinds of network error in Golang 
	https://stackoverflow.com/questions/22761562/portable-way-to-detect-different-kinds-of-network-error-in-golang?answertab=active#tab-top
- Rethinking Errors in Go 
	https://www.dotconferences.com/2017/11/marcel-van-lohuizen-rethinking-errors-in-go

–EOF–


# 🚩 Go test 少为人知的特性
https://studygolang.com/articles/12587

大多数的 Go 程序员都知道和喜欢用 go test，这个测试工具来自于 Go 官方的 gc 工具链。（想要执行测试代码）这个命令可能是最简单的了，而且还能做得很漂亮。

大家都知道，运行 go test 命令将执行当前目录下的包的测试代码，它会寻找 `*_test.go` 文件，并在这些文件中，寻找符合 `TestXxx(*testing.T){}` 命名的函数和参数。这个测试代码不会影响正常的编译过程，只在执行 `go test` 时被使用。

但这里还有很多隐藏的东西。

## 黑盒测试包 The black box test package

通常情况下，在 Go 语言中，测试和要被测试的代码在同一个包中（被测系统），这样才能访问内部实现细节的代码。为了支持黑盒测试，go test 支持使用以 `_test` 后缀命名，并可被编译成独立的包的形式。

如：

	// in example.go
	package example

	var start int

	func Add(n int) int {
	    start += n
	    return start
	}

	// in example_test.go
	package example_test

	import (
	    "testing"

	    . "bitbucket.org/splice/blog/example"
	)

	func TestAdd(t *testing.T) {
	    got := Add(1)
	    if got != 1 {
	        t.Errorf("got %d, want 1", got)
	    }
	}

你可以在代码中看到臭名昭著的 点导入 。但当对一个包做黑盒测试时，在当前包的范围内导入（被导入包中）可被导出的符号来说，这是它的一个有实际意义的例子。测试代码在通常的情况下应该尽量避免进入被测试的环境中。

https://golang.org/ref/spec#Import_declarations
https://code.google.com/p/go-wiki/wiki/CodeReviewComments#Import_Dot

就像在点导入的链接符号章节中所解释的一样，黑盒测试模式也能被用来打破循环导入的问题（在被测试的包 “a” 被 “b” 导入，并且 “a“ 的测试也需要导入 ”b“ 时 - 测试可以被移动到 “a_test“ 包，然后可以（同时）导入 “a” 和 “b”，这样就没有循环导入的问题）。

## 跳过测试 Skipping tests
一些测试可能要求要有特定的上下文环境。例如，一些测试可能需要调用一个外部的命令，使用一个特殊的文件，或者需要一个可以被设置的环境变量。当条件无法满足时，（如果）不想让那些测试失败，可以简单地跳过那些测试：

	func TestSomeProtectedResource(t *testing.T) {
	    if os.Getenv("SOME_ACCESS_TOKEN") == "" {
	        t.Skip("skipping test; $SOME_ACCESS_TOKEN not set")
	    }
	    // ... the actual test
	}

如果 go test -v 被调用（注意那个冗余（”-v“）标志），输出将会提醒已跳过的测试：

	=== RUN TestSomeProtectedResource
	--- SKIP: TestSomeProtectedResource (0.00 seconds)
	        example_test.go:17: skipping test; $SOME_ACCESS_TOKEN not set

通常是用 -short 命令行标志来实现这个跳过的特性，如果标志被设置的话，反映到代码中，testing.Short() 将简单地返回 true（就像是 -v 标志一样，如果它被设置，通过判断 testing.Verbose() ，你可以打印出额外的调试日志）。

当测试需要运行较长时间时，而你又很着急的话，你可以执行 go test -short，（如果）提供这个包的开发者又刚好实现了这个功能，运行时间长的测试将会被跳过。这就是从源码安装时，（通常情况下）Go 测试被执行的样子，这里有 stdlib 库中运行时间较长的测试被跳过的例子：

	func TestCountMallocs(t *testing.T) {
	    if testing.Short() {
	        t.Skip("skipping malloc count in short mode")
	    }
	    // rest of test...
	}

跳过只是一个可选项，-short 标志只是一个标示，具体还依赖于开发者，他们可以选择（这种标示生效时是否）运行的测试，来避免一些运行比较慢的断言被执行。

这里还有 -timeout 标志，它能够被用来强制退出限定时间内没有运行完的测试。例如，运行这个命令 go test -timeout 1s 以执行下面的测试：

	func TestWillTimeout(t *testing.T) {
	    time.Sleep(2 * time.Second)
	    // pass if timeout > 2s
	}

会有如下输出（截断）：

	=== RUN TestWillTimeout
	panic: test timed out after 1s

如果想执行特定的测试函数，而不是执行全部的测试集，只需要运行 go test -run TestNameRegexp。

## 并行执行测试 Parallelizing tests
默认情况下，指定包的测试是按照顺序执行的，但也可以通过在测试的函数内部使用 t.Parallel() 来标志某些测试也可以被安全的并发执行（和默认的一样，假设参数名为 t）。在并行执行的情况下，只有当那些被标记为并行的测试才会被并行执行，所以只有一个测试函数时是没意义的。它应该在测试函数体中第一个被调用（在任何需要跳过的条件之后），因为它会重置测试时间：

	func TestParallel(t *testing.T) {
	    t.Parallel()
	    // actual test...
	}

在并发情况下，同时运行的测试的数量默认取决于 GOMAXPROCS。它可以通过 -parallel n 被指定（go test -parallel 4）

另外一个可以实现并行的方法，尽管不是函数级粒度，但却是包级粒度，就是类似这样执行 go test p1 p2 p3（也就是说，同时调用多个测试包）。在这种情况下，包会被先编译，并同时被执行。当然，这对于总的时间来说是有好处的，但它也可能会导致错误变得具有不可预测性，比如一些资源被多个包同时使用时（例如，一些测试需要访问数据库，并删除一些行，而这些行又刚好被其他的测试包使用的话）。

为了保持可控性，-p 标志可以用来指定编译和测试的并发数。当仓库中有多个测试包，并且每个包在不同的子目录中，一个可以执行所有包的命令是 go test ./...，这包含当前目录和所有子目录。没有带 -p 标志执行时，总的运行时间应该接近于运行时间最长的包的时间（加上编译时间）。运行 go test -p 1 ./...，使编译和测试工具只能在一个包中执行时，总的时间应该接近于所有独立的包测试的时间加上编译的时间的总和。你可以自己试试，执行 go test -p 3 ./...，看一下对运行时间的影响。

还有，另外一个可以并行化的地方（你应该测试一下）是在包的代码里面。多亏了 Go 非常棒的并行原语，实际上，除非 GOMAXPROCS 通过环境变量或者在代码中显式设置为 GOMAXPROCS=1，否则，包中一个goroutines 都没有用是不太常见的。想要使用 2 个 CPU，可以执行 GOMAXPROCS=2 go test，想要使用 4 个 CPU，可以执行 GOMAXPROCS=4 go test，但还有更好的方法：go test -cpu=1,2,4 将会执行 3 次，其中 GOMAXPROCS 值分别为 1，2，和 4。

-cpu 标志，搭配数据竞争的探测标志 -race，简直进入天堂（或者下地狱，取决于它具体怎么运行）。竞争探测是一个很神奇的工具，在以高并发为主的开发中不得不使用这个工具（来防止死锁问题），但对它的讨论已经超过了本文的范围。如果你对此感兴趣，可以阅读 Go 官方博客的 这篇文章。
http://blog.golang.org/race-detector

## 更多的内容
go test 工具支持以与测试函数相似的方式运行基准测试和可断言示例（！）。godoc 工具甚至能够理解例子中的语法并将其包含在生成的文档中。

不得不提的还有代码覆盖率和性能测试，测试工具也支持这两个功能。对于感兴趣并想要深入了解的，可以访问 The cover story 和 Profiling Go programs，它们都在 Go 博客中。

http://blog.golang.org/cover
http://blog.golang.org/profiling-go-programs

在你写自己的测试代码前，建议看一下标准库中的 testing/iotest，testing/quick 和 net/http/httptest 软件包。

# 🚩 Golang 试题
- https://zhuanlan.zhihu.com/p/360195086

## slice vs map 初始值 nil

允许对值为 nil 的 slice 添加元素，但未初始化的 map 添加元素，则会造成运行时 panic。

```js
// m := make(map[string]int)
var m map[string]int
m["one"] = 1  // error: panic: assignment to entry in nil map

var s []int
s = append(s, 1)
```


# 🚩 log 日志

基本用法

    log.Print("Print array ",arr,"\n")
    log.Println("Println array",arr)
    log.Printf("Printf array with item [%d,%d]\n",arr[0],arr[1])
	log.Panicln("test for defer Panic")
	log.Fatalln("test for defer Fatal")

Fatalln 等价 Println() 和 os.Exit(1)，会导致程序终止，类似的有 Fatal 和 Fatalf。

写入文件日志

	package main
	import (
	    "log"
	    "os"
	)
	func main(){
	    fileName := "Info_First.log"
	    logFile,err  := os.Create(fileName)
	    defer logFile.Close()
	    if err != nil {
	        log.Fatalln("open file error")
	    }
		//debugStd = New(os.Stderr, "[ShortTime]", log.Ltime)
	    debugLog := log.New(logFile,"[Info]",log.Llongfile)
	    debugLog.Println("A Info message here")
	    debugLog.SetPrefix("[Debug]")
	    debugLog.Println("A Debug Message here ")
	}

参考

	const Ldate = 1 << iota ...
	func Fatal(v ...interface{})
	func Fatalf(format string, v ...interface{})
	func Fatalln(v ...interface{})
	func Flags() int
	func Output(calldepth int, s string) error
	func Panic(v ...interface{})
	func Panicf(format string, v ...interface{})
	func Panicln(v ...interface{})
	func Prefix() string
	func Print(v ...interface{})
	func Printf(format string, v ...interface{})
	func Println(v ...interface{})
	func SetFlags(flag int)
	func SetOutput(w io.Writer)
	func SetPrefix(prefix string)
	type Logger struct{ ... }
	    func New(out io.Writer, prefix string, flag int) *Logger

	const (
	        Ldate         = 1 << iota     // the date in the local time zone: 2009/01/23
	        Ltime                         // the time in the local time zone: 01:23:23
	        Lmicroseconds                 // microsecond resolution: 01:23:23.123123.  assumes Ltime.
	        Llongfile                     // full file name and line number: /a/b/c/d.go:23
	        Lshortfile                    // final file name element and line number: d.go:23. overrides Llongfile
	        LUTC                          // if Ldate or Ltime is set, use UTC rather than the local time zone
	        LstdFlags     = Ldate | Ltime // initial values for the standard logger
	)


# 🚩 goroutine & channel
- [Golang GC核心要点和度量方法](https://wudaijun.com/2020/01/go-gc-keypoint-and-monitor/)

在 Go 调度模型中没有真正的实时抢占机制，而是一套协作式抢占 cooperative preemption，即给 G(groutine)打个标记，等待G在调用函数时检查这个标记，以此作为一个安全的抢占点(GC safe-point)。好消息是，Go1.14 已经支持异步抢占，也就是说，以下这段代码，简单起见，没用 channel 协同，它在 Go1.14 中终于能输出 OK 了，而不是卡在循环中:

	package main

	import (
		"runtime"
		"time"
	)

	func main() {
		go func() {
			for {
			}
		}()

		time.Sleep(time.Millisecond)
		runtime.GC()
		println("OK")
	}


这个提了近五年的 Issue: runtime: tight loops should be preemptible #10958 终于关闭了。不得不说，这是 Go Runtime 的一大进步，它不止避免了单个 goroutine 死循环导致整个 runtime 卡死的问题，更重要的是，它为 STW 提供了最坏预期，避免了 GC STW 造成了性能抖动隐患。


信道 Channel 是 Go 中的一个核心类型，你可以把它看成一个管道，通过它给并发核心单元发送或者接收数据进行通讯。它的操作符是箭头 `<-`，箭头的指向就是数据的流向。

	ch <- v    // 发送值v到 Channel ch中  
	v := <-ch  // 从 Channel ch 中接收数据，并将数据赋值给v  

就像 map 和 slice 数据类型一样, channel 必须先创建再使用:

	ch := make(chan int)

Channel类型的定义格式如下：

	ChannelType = ( "chan" | "chan" "<-" | "<-" "chan" ) ElementType .

它包括三种类型的定义，可选的 `<-` 代表数据的流向，流向 channel 的方向 `chan<-` 表示信道对象用来接收数据，或者由 channel 流出 `<-chan` 表示信道对象用发送收数据。如果没有指定方向，那么 Channel 就是双向的，既可以接收数据，也可以发送数据。

	chan T          // 可以接收和发送类型为 T 的数据  
	chan<- float64  // 只可以用来发送 float64 类型的数据  
	<-chan int      // 只可以用来接收 int 类型的数据  

信道可以进行串联，即信道传输的数据就是信道对象，定义是注意 `<-` 总是优先和最左边的类型结合。(The <- operator associates with the leftmost chan possible)

	chan<- chan int    // 等价 chan<- (chan int)
	chan<- <-chan int  // 等价 chan<- (<-chan int)
	<-chan <-chan int  // 等价 <-chan (<-chan int)
	chan (<-chan int)

使用make初始化Channel,并且可以设置容量:

	make(chan int, 100)

容量(capacity)代表Channel容纳的最多的元素的数量，代表Channel的缓存的大小。如果没有设置容量，或者容量设置为0, 说明 Channel 没有缓存，只有 sender 和 receiver 都准备好了后它们的通讯(communication)才会发生(Blocking)。如果设置了缓存，就有可能不发生阻塞， 只有 buffer 满了后 send 才会阻塞， 而只有缓存空了后 receive 才会阻塞。一个 nil channel 不会通信。

## close

可以通过内建的close方法可以关闭Channel。

你可以在多个 goroutine 从/往 一个channel 中 receive/send 数据, 不必考虑额外的同步措施。

Channel可以作为一个先入先出(FIFO)的队列，接收的数据和发送的数据的顺序是一致的。

channel的 receive支持 multi-valued assignment，如

	v, ok := <-ch

它可以用来检查Channel是否已经被关闭了。

send语句用来往Channel中发送数据， 如ch <- 3。

	SendStmt = Channel "<-" Expression .
	Channel  = Expression .

在通讯(communication)开始前channel和expression必选先求值出来(evaluated)，比如下面的(3+4)先计算出7然后再发送给channel。

	c := make(chan int)
	defer close(c)
	go func() { c <- 3 + 4 }()
	i := <-c
	fmt.Println(i)

send被执行前(proceed)通讯(communication)一直被阻塞着。如前所言，无缓存的channel只有在receiver准备好后send才被执行。如果有缓存，并且缓存未满，则send会被执行。

往一个已经被close的channel中继续发送数据会导致 run-time panic。

往nil channel中发送数据会一致被阻塞着。

receive 操作符

`<-ch` 用来接收数据，这个表达式会一直被block,直到有数据可以接收。 从一个nil channel中接收数据会一直被block。

从一个被close的channel中接收数据不会被阻塞，而是立即返回，接收完已发送的数据后会返回元素类型的零值(zero value)。

如前所述，你可以使用一个额外的返回参数来检查channel是否关闭。

	x, ok := <-ch
	x, ok = <-ch
	var x, ok = <-ch

如果OK 是false，表明接收的x是产生的零值，这个channel被关闭了或者为空。


## blocking

缺省情况下，发送和接收会一直阻塞着，直到另一方准备好。这种方式可以用来在gororutine中进行同步，而不必使用显示的锁或者条件变量。

如官方的例子中x, y := <-c, <-c这句会一直等待计算结果发送到channel中。

	import "fmt"
	func sum(s []int, c chan int) {
		sum := 0
		for _, v := range s {
			sum += v
		}
		c <- sum // send sum to c
	}
	func main() {
		s := []int{7, 2, 8, -9, 4, 0}
		c := make(chan int)
		go sum(s[:len(s)/2], c)
		go sum(s[len(s)/2:], c)
		x, y := <-c, <-c // receive from c
		fmt.Println(x, y, x+y)
	}

## Buffered Channels

make的第二个参数指定缓存的大小：ch := make(chan int, 100)。

通过缓存的使用，可以尽量避免阻塞，提供应用的性能。

Range
for …… range语句可以处理Channel。

	func main() {
		go func() {
			time.Sleep(1 * time.Hour)
		}()
		c := make(chan int)
		go func() {
			for i := 0; i < 10; i = i + 1 {
				c <- i
			}
			close(c)
		}()
		for i := range c {
			fmt.Println(i)
		}
		fmt.Println("Finished")
	}

range c产生的迭代值为Channel中发送的值，它会一直迭代直到channel被关闭。上面的例子中如果把close(c)注释掉，程序会一直阻塞在for …… range那一行。

 

## select

select语句选择一组可能的send操作和receive操作去处理。它类似switch,但是只是用来处理通讯(communication)操作。
它的case可以是send语句，也可以是receive语句，亦或者default。

receive语句可以将值赋值给一个或者两个变量。它必须是一个receive操作。

最多允许有一个default case,它可以放在case列表的任何位置，尽管我们大部分会将它放在最后。
 
	import "fmt"
	func fibonacci(c, quit chan int) {
		x, y := 0, 1
		for {
			select {
			case c <- x:
				x, y = y, x+y
			case <-quit:
				fmt.Println("quit")
				return
			}
		}
	}
	func main() {
		c := make(chan int)
		quit := make(chan int)
		go func() {
			for i := 0; i < 10; i++ {
				fmt.Println(<-c)
			}
			quit <- 0
		}()
		fibonacci(c, quit)
	}

如果有同时多个case去处理,比如同时有多个channel可以接收数据，那么Go会伪随机的选择一个case处理(pseudo-random)。如果没有case需要处理，则会选择default去处理，如果default case存在的情况下。如果没有default case，则select语句会阻塞，直到某个case需要处理。

需要注意的是，nil channel上的操作会一直被阻塞，如果没有default case,只有nil channel的select会一直被阻塞。

select语句和switch语句一样，它不是循环，它只会选择一个case来处理，如果想一直处理channel，你可以在外面加一个无限的for循环：

	for {
		select {
		case c <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("quit")
			return
		}
	}


select有很重要的一个应用就是超时处理。 因为上面我们提到，如果没有case需要处理，select语句就会一直阻塞着。这时候我们可能就需要一个超时操作，用来处理超时的情况。

下面这个例子我们会在2秒后往channel c1中发送一个数据，但是select设置为1秒超时,因此我们会打印出timeout 1,而不是result 1。

	import "time"
	import "fmt"
	func main() {
	    c1 := make(chan string, 1)
	    go func() {
	        time.Sleep(time.Second * 2)
	        c1 <- "result 1"
	    }()
	    select {
	    case res := <-c1:
	        fmt.Println(res)
	    case <-time.After(time.Second * 1):
	        fmt.Println("timeout 1")
	    }
	}

其实它利用的是time.After方法，它返回一个类型为<-chan Time的单向的channel，在指定的时间发送一个当前时间给返回的channel中。
 

## Timer和Ticker

timer是一个定时器，代表未来的一个单一事件，你可以告诉timer你要等待多长时间，它提供一个Channel，在将来的那个时间那个Channel提供了一个时间值。下面的例子中第二行会阻塞2秒钟左右的时间，直到时间到了才会继续执行。

	timer1 := time.NewTimer(time.Second * 2)
	<-timer1.C
	fmt.Println("Timer 1 expired")
	 
当然如果你只是想单纯的等待的话，可以使用time.Sleep来实现。

你还可以使用 timer.Stop 来停止计时器。

	timer2 := time.NewTimer(time.Second)
	go func() {
		<-timer2.C
		fmt.Println("Timer 2 expired")
	}()
	stop2 := timer2.Stop()
	if stop2 {
		fmt.Println("Timer 2 stopped")
	}

ticker是一个定时触发的计时器，它会以一个间隔(interval)往Channel发送一个事件(当前时间)，而Channel的接收者可以以固定的时间间隔从Channel中读取事件。下面的例子中ticker每500毫秒触发一次，你可以观察输出的时间。

	ticker := time.NewTicker(time.Millisecond * 500)
	go func() {
		for t := range ticker.C {
			fmt.Println("Tick at", t)
		}
	}()

类似timer, ticker也可以通过Stop方法来停止。一旦它停止，接收者不再会从channel中接收数据了。

 



## goroutine channel 同步

channel可以用在goroutine之间的同步。

下面的例子中 main goroutine 通过 done channel 等待 worker 完成任务。 worker 做完任务后只需往 channel 发送一个数据就可以通知 main goroutine 任务完成。

	import (  
	    "fmt"  
	    "time"  
	)  
	func worker(done chan bool) {  
	    time.Sleep(time.Second)  
	    // 通知任务已完成  
	    done <- true  
	}  
	func main() {  
	    done := make(chan bool, 1)  
	    go worker(done)  
	    // 等待任务完成  
	    <-done  
	}  

 

# 🚩 实现 Futures 模式

所谓 `Futures` 就是指：有时候在你使用某一个值之前需要先对其进行计算。这种情况下，你就可以在另一个处理器上进行该值的计算，到使用时，该值就已经计算完毕了。

`Futures` 模式通过闭包和通道可以很容易实现，类似于生成器，不同地方在于 `Futures` 需要返回一个值。

参考条目文献给出了一个很精彩的例子：假设我们有一个矩阵类型，我们需要计算两个矩阵A和B乘积的逆，首先我们通过函数 `Inverse(M)`分别对其进行求逆运算，再将结果相乘。如下函数 `InverseProduct()` 实现了如上过程：

	func InverseProduct(a Matrix, b Matrix) {
	    a_inv := Inverse(a)
	    b_inv := Inverse(b)
	    return Product(a_inv, b_inv)
	}

在这个例子中，a和b的求逆矩阵需要先被计算。那么为什么在计算b的逆矩阵时，需要等待a的逆计算完成呢？显然不必要，这两个求逆运算其实可以并行执行的。换句话说，调用 `Product` 函数只需要等到 `a_inv` 和 `b_inv` 的计算完成。如下代码实现了并行计算方式：

	func InverseProduct(a Matrix, b Matrix) {
	    a_inv_future := InverseFuture(a)   // start as a goroutine
	    b_inv_future := InverseFuture(b)   // start as a goroutine
	    a_inv := <-a_inv_future
	    b_inv := <-b_inv_future
	    return Product(a_inv, b_inv)
	}

InverseFuture 函数以 `goroutine` 的形式起了一个闭包，该闭包会将矩阵求逆结果放入到future通道中：

	func InverseFuture(a Matrix) chan Matrix {
	    future := make(chan Matrix)
	    go func() {
	        future <- Inverse(a)
	    }()
	    return future
	}

当开发一个计算密集型库时，使用 `Futures` 模式设计API接口是很有意义的。在你的包使用 `Futures` 模式，且能保持友好的API接口。此外， `Futures` 可以通过一个异步的API暴露出来。这样你可以以最小的成本将包中的并行计算移到用户代码中。（参见参考文件18：http://www.golangpatterns.info/concurrency/futures ）



# 🚩 interface & struct 接口与结构体

GO 语言的基础特性 interface 可以理解为一种类型的规范或者约定。它跟java，C# 不太一样，不需要显示说明实现了某个接口，它没有继承或子类或 implements 关键字，只是通过约定的形式，隐式的实现 interface 中的方法即可。

每个类型都实现了一个空接口 interface{}，任何类型 `int`、`float`、`string`、`map`、`struct` 都可赋值于一个 interface{} 类型变量。 interface{} 包含有 type 和 data 两个元素，只有两者均为 nil 的时候才是真的 nil。在进行类型断言时，指定的断言类型和 interface{} 的 type 一致时才能得到正确结果。

例如下面的代码中 h 作为一个接口的指针赋值给 t 接口类型后，t 也获得了一个类型属性。所以它在做逻辑判断时不为 nil，尽管数据部分是 nil 状态，除非不给 t 赋值，或者直接赋值 t = nil。又或者 h 定义不是一个指针，而是 h http.Handler，那么结果就完全不同了。

	s := "abc"
	var h *http.Handler
	var t interface{}
	t = h
	log.Printf("t is %T %v %v", t, t, t == nil) // t is *http.Handler <nil> false
	t = s
	s = t.(string)
	log.Printf("t is %T %v %v", t, t, t == nil) // t is string abc false
	log.Printf("h is %T %v %v", h, h, h == nil) // h is *http.Handler <nil> true

但是 []string 这样的类型就不能直接转换 []interface{}，因为 []string 是一个字符数组，而 []interface{} 也不是接口！它只是元素类型碰巧是 interface{}。如果非要转换，可以使用 for 循环逐一转。

go 语言中的 interface：

- interface 是方法声明的集合
- 任何类型的对象实现了在interface 接口中声明的全部方法，则表明该类型实现了该接口。
- interface 可以作为一种数据类型，实现了该接口的任何对象都可以给对应的接口类型变量赋值。
- interface 可以被任意对象实现，一个类型/对象也可以实现多个 interface
- interface 定义的方法不能重载，如 eat() eat(s string) 不能同时存在

以继承为特点的 OOP 只是编程世界的一种抽象方式，在 Golang 的世界里没有继承，只有组合和接口，并且是松散的接口结构，不强制声明实现接口。

If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.

翻译过来就是：如果某个东西长得像鸭子，像鸭子一样游泳，像鸭子一样嘎嘎叫，那它就可以被看成是一只鸭子。

结合到 GO 语言，也就是说那些实现了鸭子某个 interface 全部方法的 struct 对象就是鸭子。

单一继承关系解决了 is-a 也就是定义问题，因此可以把子类当做父类来对待。但对于父类不同但又具有某些共同行为的数据，单一继承就不能解决了，C++ 采取了多继承这种复杂的方式。

GO 采取更贴近现实世界的网状结构，不同于继承，GO 语言的接口是松散的结构，它不和定义绑定。从这一点上来说，Duck Type 相比传统的 extends 是更加松耦合的方式，可以同时从多个维度对数据进行抽象，找出它们的共同点，使用同一套逻辑来处理。

如果想在一个包中访问另一个包中结构体的字段，则必须是大写字母开头的变量，即可导出的变量。

在定义结构体字段时，除字段名称和数据类型外，还可以使用反引号为结构体字段声明元信息，这种元信息称为Tag，用于编译阶段关联到字段当中：

	type Member struct {
	    Id     int    `json:"id,-"`
	    Name   string `json:"name"`
	    Email  string `json:"email"`
	    Gender int    `json:"gender,"`
	    Age    int    `json:"age"`
	}

以上使用 encoding/json 包编码或解码结构体时使用的Tag信息，在 Member 成员到 Json 键值 做对应。Tag由反引号括起来的一系列用空格分隔的 key:"value" 键值对组成，如：

	Id int `json:"id" gorm:"AUTO_INCREMENT"`

接口使用例子，定义`MyString`类型与`string`一样，再实现 `VolwelsFInder` 接口的方法，使用时只需要实例化对象并赋予接口即可以访问接口规范的方法，`rune` 是基本数据类型 Unicode 字符:

	package main

	import (  
	    "fmt"
	)

	// 定义interface 
	type VowelsFinder interface {  
	    FindVowels() []rune
	}

	// 别名扩展方式
	type MyString string

	// 实现接口
	func (ms MyString) FindVowels() []rune {  
	    var vowels []rune
	    for _, rune := range ms {
	        if rune == 'a' || rune == 'e' || rune == 'i' || rune == 'o' || rune == 'u' {
	            vowels = append(vowels, rune)
	        }
	    }
	    return vowels
	}

	func findType(i interface{}) {
	    switch v := i.(type) {
	        case VowelsFinder:
	            fmt.Println("VowelsFinder type.", v);
	        default:
	            fmt.Printf("unknown type\n")
	    }
	}

	func main() {
	    name := MyString("Sam Anderson") // 类型转换
	    findType(name)  // VowelsFinder type.
	    fmt.Printf("Vowels are %c", name.FindVowels())
	    
	    var v VowelsFinder               // 定义一个接口类型的变量
	    v = name 
	    fmt.Printf("Vowels are %c", v.FindVowels())
	}


所有类型都实现了空接口 Empty Interface 表示为 `interface{}`，空接口也是基础类型，它的作用相当于 Java 中的 Object。可以对任何接口类型进行类型断言 Type Assertions，类型断言检查正确就可以得到期待的类型。类型断言检查是对接口类型进行的动态类型检查，语法格式 `x.(T)`，x 是一个接口，T 就是断言目标类型，通过断言检查就可以从操作数中得到具体的类型数据。

如下面尝试将变量类型 s 转换成 string，先将 s 转换成空接口`interface{}(v)`，再进行 `.(string)` 断言：
 
	val, ok := interface{}(v).(string)

GO 语言的结构体 struct 是组合非继承，不像其它 OOP 语言那样通过继承机制实现类结构的扩展。

下面例程中，Being 是最基础的结构体，Human 组合了 Being，而 Student 又组合了 Human。 但是通过 Human.Eat() 方法调用 Drink() 只能是 Human.Drink()。如果 Student 也实现了 Eat 方法并调用 Dranking()，则会调用自己的 Student.Dranking()。

对 s 分别进行了 Human、Student 类型断言，输出结果可以看到，s 断言 Human 是不成功的，因为它是 Student 类型，两个结构体是完全不同的类型。断言 IHuman 接口也是成功的，因为 Student 结构实现了 IHuman 接口的所以方法。也就是说看起来叫起来都像鸭子的东西，那就可以认为它是鸭子 

	package main
	 
	import "fmt"
	 
	func main(){
	    var h Human
	 
	    s := Student{Grade: 1, Human: Human{Name: "Jason", Age: 12, Being: Being{IsLive: true}}}
	    fmt.Println("student:", s)
	    fmt.Println("student ", s.Name, " is alive:", s.IsLive )
	 
	    // h = s // cannot use s (type Student) as type Human in assignment
	    fmt.Println(h)
	 
	    // Heal(s) // cannot use s (type Student) as type Being in argument to Heal
	    Heal(s.Human.Being) // true
	 
	    s.Drink() // student drinking...
	    s.Eat() // human eating... & human drinking...

		human, b := interface{}(s).(Human) // false s is Student but Human
		fmt.Println(human, b)
		 
		student, b := interface{}(s).(Student)
		fmt.Println(student, b)

		ihuman, b := interface{}(s).(IHuman)
		fmt.Println(ihuman, b)

	}
	 
	type Being struct {
	    IsLive bool
	}
	 
	type Human struct {
	    Being
	    Name string
	    Age int
	}

	func (h Human) Eat(){
	    fmt.Println("human eating...")
	    h.Drink()
	}
	 
	func (h Human) Drink(){
	    fmt.Println("human drinking...")
	}
	 
	type Student struct {
	    Human
	    Grade int
	}
	
	func (s Student) Drink(){
	    fmt.Println("student drinking...")
	}

	func Heal(b Being){
	    fmt.Println(b.IsLive)
	}

	type IHuman interface {
		Eat()
		Drink()
	}

关于结构体的扩展两种方式，嵌入结构体方式与别名扩展方式的总结参考后续的 [JSON 解析与扩展已有类型] 小节。

	package main

	import (
		"fmt"
		"reflect"
	)

	type IBase interface {
		Show()
	}

	type Base struct {
		ID   int    `yaml:"ID" json:"id"`
		Name string `yaml:"NAME" json:"name"`
	}

	func (this Base) Show() {
		fmt.Printf("#%d - %s\n", this.ID, this.Name)
	}

	type User struct {
		Base `yaml:"BasePart" json:"basepart"`
	}

	type Manager struct {
		Base
	}

	func echoType(i interface{}) {
		switch v := i.(type) {
		case IBase:
			fmt.Println("echoType: IBase.", v)
		}

		switch v := i.(type) {
		case Base:
			fmt.Println("echoType: Base.", v)
		case User:
			fmt.Println("echoType: User.", v)
		case Manager:
			fmt.Println("echoType: Manager.", v)
		default:
			fmt.Printf("echoType: Unknown.\n")
		}
	}

	func main() {
		var user = User{Base: Base{1, "ABC"}}
		var inte = interface{}(user)
		// panic: interface conversion: interface {} is main.User, not main.Manager
		// var mana = inte.(Manager)
		fmt.Printf("User %#v\n", user)
		fmt.Printf("Inte %#v\n", inte)

		echoType(user)

		// TypeOf return reflect.Type interface
		tt := reflect.TypeOf(&user)
		rt := tt.Elem()
		for i := 0; i < rt.NumField(); i++ {
			field := rt.Field(i)
			at := field.Tag
			yt := field.Tag.Get("yaml")
			jt, _ := field.Tag.Lookup("json")
			fmt.Printf("FIELD: %s\n\tJASON TAG: %s\n\tYAML TAG: %s\n\tALL TAGS: %s\n", field.Name, jt, yt, at)
		}
	}

一个对象既至少由两种类型信息，如上面代码中的 user，既是一个 struct 也是一个 interface 类型，以上示例输出：

	User main.User{Base:main.Base{ID:1, Name:"ABC"}}
	Inte main.User{Base:main.Base{ID:1, Name:"ABC"}}
	echoType: IBase. {{1 ABC}}
	echoType: User. {{1 ABC}}
	FIELD: Base
	    JASON TAG: basepart
	    YAML TAG: BasePart
	    ALL TAGS: yaml:"BasePart" json:"basepart"



# 🚩 Demo FileList

	package main

	import (
		"encoding/json"
		"io/ioutil"
		"path/filepath"
	)

	func main() {
		list, _ := thumbs("c:/coding/md/iceWork/uploads")
		jsn, err := json.MarshalIndent(list, "", "\t")
		if err != nil {

		}
		print("JSON:", string(jsn))
	}

	func thumbs(folder string) ([](map[string]interface{}), int) {
		list, _ := ioutil.ReadDir(folder)
		items := [](map[string]interface{}){}
		for _, i := range list {
			item := map[string]interface{}{
				"name":   i.Name(),
				"size":   i.Size(),
				"modify": i.ModTime(),
			}
			items = append(items, item)
			if i.IsDir() {
				ph := filepath.Join(folder, i.Name())
				item["path"] = ph
				list, size := thumbs(ph)
				item["size"] = size
				item["sub"] = list
			}
		}
		return items, len(items)
	}





# 🚩 Getting started with Delve
- Getting started with Delve http://hustcat.github.io/getting-started-with-delve/
- 使用Delve进行Golang代码的调试 https://yq.aliyun.com/articles/57578
- Debugging Go Code with GDB 官方 https://golang.org/doc/gdb
- Using the gdb debugger with Go https://blog.codeship.com/using-gdb-debugger-with-go/
- 实现一个 Golang 调试器 https://studygolang.com/articles/12794

综合比较两个Golang程序调试器gdb和dlv，两者的优缺点比较大致如下

- dlv	对 goroutine 环境调试支持比较完善
- gdb	符合现有的调试习惯，类似C/C++调试指令都有，但对 goroutine 场景支持不足。

使用 gdb 调试 go 程序时，给 gdb 命令指定需要调试的程序，然后需要加载 runtime-gdb.py 脚本，设定一个断点后再开始运行调试，quit 命令用来退出：

	$ go build -gcflags "-N -l" -o gdb_sandbox main.go 
	$ ls
	gdb_sandbox  main.go  README.md
	$ gdb gdb_sandbox
	....
	(gdb) source /usr/local/src/go/src/runtime/runtime-gdb.py

	(gdb) b main.go:9 
	Breakpoint 1 at 0x400d35: file /home/gdb_sandbox/main.go, line 9. 
	(gdb) run 


Delve aims to solve the various issues felt by developers when debugging their Go code with traditional tools such as GDB.

We must have Go 1.5 or higher installed. Also, if using Go 1.5 you must set GO15VENDOREXPERIMENT=1 before attempting to install. Such as:

	# export GO15VENDOREXPERIMENT=1
	# export GOROOT=/usr/local/go_1.5.2/
	# export PATH=/usr/local/go_1.5.2/bin:$PATH

## install delve

	# mkdir -p vendor/src/github.com/go-delve
	# ln -s /data/go/src/github.com/go-delve/delve vendor/src/github.com/go-delve/delve
	# export GOPATH=/data/go/src/github.com/go-delve/delve/vendor
	# go get -u github.com/go-delve/delve/cmd/dlv
	# ls vendor/bin/
	dlv
	# cp vendor/bin/dlv /usr/local/bin/

test program:

	package main

	import (
		"fmt"
		"sync"
	)

	func dostuff(wg *sync.WaitGroup, i int) {
		fmt.Printf("goroutine id %d\n", i)
		fmt.Printf("goroutine id %d\n", i)
		wg.Done()
	}

	func main() {
		var wg sync.WaitGroup
		workers := 10

		wg.Add(workers)
		for i := 0; i < workers; i++ {
			go dostuff(&wg, i)
		}
		wg.Wait()
	}

Delve is a source level debugger for Go programs.

Delve enables you to interact with your program by controlling the execution of the process,
evaluating variables, and providing information of thread / goroutine state, CPU register state and more.

The goal of this tool is to provide a simple yet powerful interface for debugging Go programs.


Pass flags to the program you are debugging using `--`, for example:

	dlv exec ./hello -- server --config conf/config.toml

## delve command help

	Usage:
	  dlv [command]

	Available Commands:
	  attach      Attach to running process and begin debugging.
	  connect     Connect to a headless debug server.
	  core        Examine a core dump.
	  debug       Compile and begin debugging main package in current directory, or the package specified.
	  exec        Execute a precompiled binary, and begin a debug session.
	  help        Help about any command
	  run         Deprecated command. Use 'debug' instead.
	  test        Compile test binary and begin debugging program.
	  trace       Compile and begin tracing program.
	  version     Prints version.

	Flags:
	      --accept-multiclient   Allows a headless server to accept multiple client connections.
	      --api-version int      Selects API version when headless. (default 1)
	      --backend string       Backend selection (see 'dlv help backend'). (default "default")
	      --build-flags string   Build flags, to be passed to the compiler.
	      --check-go-version     Checks that the version of Go in use is compatible with Delve. (default true)
	      --headless             Run debug server only, in headless mode.
	      --init string          Init file, executed by the terminal client.
	  -l, --listen string        Debugging server listen address. (default "127.0.0.1:0")
	      --log                  Enable debugging server logging.
	      --log-dest string      Writes logs to the specified file or file descriptor (see 'dlv help log').
	      --log-output string    Comma separated list of components that should produce debug output (see 'dlv help log')
	      --wd string            Working directory for running the program. (default ".")

	Additional help topics:
	  dlv backend Help about the --backend flag.
	  dlv log     Help about logging flags.

	Use "dlv [command] --help" for more information about a command.


## Begin a debug session:

	# dlv debug

	Type 'help' for list of commands.

	(dlv) help
	The following commands are available:
	    args ------------------------ Print function arguments.
	    break (alias: b) ------------ Sets a breakpoint.
	    breakpoints (alias: bp) ----- Print out info for active breakpoints.
	    clear ----------------------- Deletes breakpoint.
	    clearall -------------------- Deletes multiple breakpoints.
	    condition (alias: cond) ----- Set breakpoint condition.
	    continue (alias: c) --------- Run until breakpoint or program termination.
	    disassemble (alias: disass) - Disassembler.
	    exit (alias: quit | q) ------ Exit the debugger.
	    frame ----------------------- Executes command on a different frame.
	    funcs ----------------------- Print list of functions.
	    goroutine ------------------- Shows or changes current goroutine
	    goroutines ------------------ List program goroutines.
	    help (alias: h) ------------- Prints the help message.
	    list (alias: ls) ------------ Show source code.
	    locals ---------------------- Print local variables.
	    next (alias: n) ------------- Step over to next source line.
	    on -------------------------- Executes a command when a breakpoint is hit.
	    print (alias: p) ------------ Evaluate an expression.
	    regs ------------------------ Print contents of CPU registers.
	    restart (alias: r) ---------- Restart process.
	    set ------------------------- Changes the value of a variable.
	    source ---------------------- Executes a file containing a list of delve commands
	    sources --------------------- Print list of source files.
	    stack (alias: bt) ----------- Print stack trace.
	    step (alias: s) ------------- Single step through program.
	    step-instruction (alias: si)  Single step a single cpu instruction.
	    thread (alias: tr) ---------- Switch to the specified thread.
	    threads --------------------- Print out info for every traced thread.
	    trace (alias: t) ------------ Set tracepoint.
	    types ----------------------- Print list of types
	    vars ------------------------ Print package variables.
	Type help followed by a command for full documentation.


## Set breakpoint:

	(dlv) break main.main
	Breakpoint 1 set at 0x401283 for main.main() ./test.go:14

	(dlv) break main.dostaff
	(dlv) break hello.go:15

## Continue to breakpoint:

	(dlv) continue
	> main.main() ./test.go:14 (hits goroutine(1):1 total:1) (PC: 0x401283)
	     9:         fmt.Printf("goroutine id %d\n", i)
	    10:         fmt.Printf("goroutine id %d\n", i)
	    11:         wg.Done()
	    12: }
	    13:
	=>  14: func main() {
	    15:         var wg sync.WaitGroup
	    16:         workers := 10
	    17:
	    18:         wg.Add(workers)
	    19:         for i := 0; i < workers; i++ {

## Restart debug session

	(dlv) restart
	Process restarted with PID 16808
	(dlv) continue
	> main.main() ./test.go:14 (hits goroutine(1):1 total:1) (PC: 0x401283)
	Warning: debugging optimized function

## Step over to next source line:

	(dlv) next
	> main.main() ./test.go:15 (PC: 0x401287)
	    10:         fmt.Printf("goroutine id %d\n", i)
	    11:         wg.Done()
	    12: }
	    13:
	    14: func main() {
	=>  15:         var wg sync.WaitGroup
	    16:         workers := 10
	    17:
	    18:         wg.Add(workers)
	    19:         for i := 0; i < workers; i++ {
	20:                 go dostuff(&wg, i)

## Print variables:

	(dlv) locals
	wg = sync.WaitGroup {noCopy: sync.noCopy {}, state1: [3]uint32 [...]}
	workers = 824634236776

	(dlv) next
	...

	(dlv) print workers
	10

## Show Disassembler

	(dlv) disass
	TEXT main.main(SB) ./test.go
	        chat.go:14      0x4b1390        65488b0c2528000000      mov rcx, qword ptr gs:[0x28]
	        chat.go:14      0x4b1399        488b8900000000          mov rcx, qword ptr [rcx]
	        chat.go:14      0x4b13a0        483b6110                cmp rsp, qword ptr [rcx+0x10]
	        chat.go:14      0x4b13a4        0f86d5000000            jbe 0x4b147f
	        chat.go:14      0x4b13aa*       4883ec58                sub rsp, 0x58
	        chat.go:14      0x4b13ae        48896c2450              mov qword ptr [rsp+0x50], rbp
	        chat.go:14      0x4b13b3        488d6c2450              lea rbp, ptr [rsp+0x50]
	        chat.go:15      0x4b13b8        488d05e1120200          lea rax, ptr [_image_base__+861856]
	        chat.go:15      0x4b13bf        48890424                mov qword ptr [rsp], rax
	        chat.go:15      0x4b13c3        e8b8acf5ff              call $runtime.newobject
	        chat.go:15      0x4b13c8        488b442408              mov rax, qword ptr [rsp+0x8]
	        chat.go:15      0x4b13cd        4889442448              mov qword ptr [rsp+0x48], rax
	        chat.go:15      0x4b13d2        48c70000000000          mov qword ptr [rax], 0x0
	        chat.go:15      0x4b13d9        48c7400400000000        mov qword ptr [rax+0x4], 0x0
	        chat.go:16      0x4b13e1        48c74424200a000000      mov qword ptr [rsp+0x20], 0xa
	=>      chat.go:18      0x4b13ea        488b442448              mov rax, qword ptr [rsp+0x48]
	        chat.go:18      0x4b13ef        4889442440              mov qword ptr [rsp+0x40], rax
	        chat.go:18      0x4b13f4        48890424                mov qword ptr [rsp], rax
	        chat.go:18      0x4b13f8        488b442420              mov rax, qword ptr [rsp+0x20]
	        chat.go:18      0x4b13fd        4889442408              mov qword ptr [rsp+0x8], rax
	        chat.go:18      0x4b1402        e879c6fbff              call $sync.(*WaitGroup).Add
	        chat.go:19      0x4b1407        48c744242800000000      mov qword ptr [rsp+0x28], 0x0
	        chat.go:19      0x4b1410        eb00                    jmp 0x4b1412
			...


## List program goroutines:

	(dlv) break dostuff
	Breakpoint 2 set at 0x401018 for main.dostuff() ./test.go:8
	(dlv) continue
	(dlv) goroutines
	[14 goroutines]
	  Goroutine 1 - User: /usr/local/go/src/runtime/sema.go:43 sync.runtime_Semacquire (0x436ab3)
	  Goroutine 2 - User: /usr/local/go/src/runtime/proc.go:186 runtime.gopark (0x4297f3)
	  Goroutine 3 - User: /usr/local/go/src/runtime/proc.go:186 runtime.gopark (0x4297f3)
	  Goroutine 4 - User: /usr/local/go/src/runtime/proc.go:186 runtime.gopark (0x4297f3)
	* Goroutine 5 - User: ./test.go:8 main.dostuff (0x401018)
	  Goroutine 6 - User: ./test.go:8 main.dostuff (0x401000)
	  Goroutine 7 - User: ./test.go:8 main.dostuff (0x401000)
	  Goroutine 8 - User: ./test.go:8 main.dostuff (0x401000)
	  Goroutine 9 - User: ./test.go:8 main.dostuff (0x401000)
	  Goroutine 10 - User: ./test.go:8 main.dostuff (0x401000)
	  Goroutine 11 - User: ./test.go:8 main.dostuff (0x401000)
	  Goroutine 12 - User: ./test.go:8 main.dostuff (0x401000)
	  Goroutine 13 - User: ./test.go:8 main.dostuff (0x401000)
	  Goroutine 14 - User: ./test.go:8 main.dostuff (0x401018)

	All goroutine pause at function `dostuff`.

## Switch program goroutine:

	(dlv> goroutine 9
	Switched from 5 to 9 (thread 7300)

## List program threads

	(dlv) threads
	  Thread 1628 at :0
	* Thread 7300 at 0x4c316f ./test.go:14 main.main
	  Thread 8372 at :0
	  Thread 9396 at :0

## Switch program thread

	(dlv) thread 1628
	Switched from 7300 to 1628

## Print stack trace：

	(dlv) bt
	0  0x0000000000401018 in main.dostuff
	   at ./test.go:8
	1  0x0000000000455bb0 in runtime.goexit
	   at /usr/local/go/src/runtime/asm_amd64.s:1721

## delete breakpoints:

	(dlv) breakpoints
	Breakpoint unrecovered-panic at 0x4271e0 for runtime.startpanic() /usr/local/go/src/runtime/panic.go:504 (0)
	Breakpoint 1 at 0x401283 for main.main() ./test.go:14 (1)
	Breakpoint 2 at 0x401018 for main.dostuff() ./test.go:8 (2)
	(dlv) clear 1
	Breakpoint 1 cleared at 0x401283 for main.main() ./test.go:14
	(dlv) breakpoints
	Breakpoint unrecovered-panic at 0x4271e0 for runtime.startpanic() /usr/local/go/src/runtime/panic.go:504 (0)
	Breakpoint 2 at 0x401018 for main.dostuff() ./test.go:8 (2)


	(dlv) quit
	Process 14068 has exited with status 0

## debug with arguments

	# dlv debug . -- -key=value

## dlv attach 进阶调试

其实很多时候，我们调试的代码可能是 daemon 程序或者需要实现编译好在不同机器运行的程序。这就需要我们 attach 到一个已经在运行中的程序上，下面使用任意一个调试用的程序。

	go build test-debug.go
	./test-debug

然后使用 ps 查看正在运行的程序 pid

  501 40994   549   0 12:08AM ttys003    0:00.00 ./test-debug
 
然后我们 attach 上去

	dlv attach 40994

可以看到，熟悉的 debug seesion 又回来了。下面我们可以继续使用上面的命令去设置断点了

	(dlv) break dostuff
	Breakpoint 1 set at 0x2058 for main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:9
	(dlv) break dostuff:3
	Breakpoint 2 set at 0x2144 for main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:12

我使用continue使程序运行到我设置断点的地方

	(dlv) continue
	> main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:12 (hits goroutine(18):1 total:8) (PC: 0x2144)
	> main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:12 (hits goroutine(19):1 total:8) (PC: 0x2144)
	> main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:12 (hits goroutine(26):1 total:8) (PC: 0x2144)
	> main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:12 (hits goroutine(23):1 total:8) (PC: 0x2144)
	> main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:12 (hits goroutine(24):1 total:8) (PC: 0x2144)
	> main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:12 (hits goroutine(20):1 total:8) (PC: 0x2144)
	> main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:12 (hits goroutine(21):1 total:8) (PC: 0x2144)
	> main.dostuff() /Users/xianlu/WorkSpace/golang/src/test-debug.go:12 (hits goroutine(25):1 total:8) (PC: 0x2144)
	     7:    )
	     8:
	     9:    func dostuff(wg *sync.WaitGroup, i int) {
	    10:        fmt.Printf("goroutine id %d\n", i)
	    11:        time.Sleep(300 * time.Second)
	=>  12:        fmt.Printf("goroutine id %d\n", i)
	    13:        wg.Done()
	    14:    }
	    15:
	    16:    func main() {
	    17:        var wg sync.WaitGroup
	(dlv)

可以看到，Delve已经打印出来了当前正在运行的 goroutine，打印局部变量试试

	(dlv) print i
	7
	(dlv) print wg

	*sync.WaitGroup {
	    state1: [12]uint8 [1,0,0,0,10,0,0,0,0,0,0,0],
	    sema: 0,}

和上面一样，而且 attach 到这个进程后，也可以把对应的源码显示出来，是不是很强大呢。更多的功能就自己参考文档摸索吧。



## Reference
- Debugging Go programs with Delve https://blog.gopheracademy.com/advent-2015/debugging-with-delve/
- Installation on Linux https://github.com/derekparker/delve/blob/master/Documentation/installation/linux/install.md
- Debugging Go Code with GDB https://golang.org/doc/gdb
- how to pass arguments to the running program https://github.com/derekparker/delve/issues/178






# 🚩 http & Webserver Demo

Go 语言就是嗯为 Web 服务的语言，net/http 包提供了 Web 访问及服务的基础工具，HTTP 2 已经得到支持，要理解这个包的使用需要理解 HTTP 的工作原理。

# 🚩 as Web Client

作为客户端，可以使用以下方法读取网络上的内容：

	resp, err := http.Head("http://demo.com/")
	resp, err := http.Get("http://demo.com/")
	resp, err := http.Post("http://demo.com/upload", "image/jpeg", &buf)
	resp, err := http.PostForm("http://demo.com/form", url.Values{"key": {"Value"}, "id": {"123"}})

要更细致地控制请求的过程，可以使用 Client 对象，如设置请求头信息：

	client := &http.Client{
		CheckRedirect: redirectPolicyFunc,
	}

	resp, err := client.Get("http://demo.com")
	req, err := http.NewRequest("GET", "http://demo.com", nil)
	req.Header.Add("If-None-Match", `W/"wyzzy"`)
	resp, err := client.Do(req)

需要 HTTP 代理服务、TLS 配置、长连接 keep-alives、压缩或其它设置，是用传输控制对象 Transport:

	tr := &http.Transport{
		MaxIdleConns:       10,
		IdleConnTimeout:    30 * time.Second,
		DisableCompression: true,
	}
	client := &http.Client{Transport: tr}
	resp, err := client.Get("https://example.com")


# 🚩 as Web Server

更多时候 net/http 包用在服务器端的开发，GOPL 书中给了一个 Echo Web Server 的例子：

	// Server1 is a minimal "echo" server.
	package main

	import (
		"fmt"
		"log"
		"net/http"
	)

	func main() {
		http.HandleFunc("/", handler) // each request calls handler
		log.Fatal(http.ListenAndServe("localhost:8000", nil))
	}

	// handler echoes the Path component of the request URL r.
	func handler(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "URL.Path = %q\n", r.URL.Path)
	}

这个例子没做什么事，就是让请求的 WEB 路径回显到页面，可以使用 http.Server 对象进行更细致的设置：

	s := &http.Server{
		Addr:           ":8080",
		Handler:        myHandler,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}
	log.Fatal(s.ListenAndServe())

在响应方法中，注意 ResponseWriter.WriteHeader() 只能调用一次，设置 HTTP 状态码，且必须在 Write() 输出内容之前调用。因为在 Write() 调用过程中，如果发现 WriteHeader 没有调用过，那么它会自行写入一次 200 作为默认状态值。

对于标准 Header 如 ContentType，Header().Set() 必须在 WriteHeader/Write 之前调用，否则不会生效。因为按照写入顺序，是 Header -> StatusHeader -> Body -> Trailer Header。

	mux := http.NewServeMux()
	mux.HandleFunc("/sendstrailers", func(w http.ResponseWriter, req *http.Request) {
	    // Before any call to WriteHeader or Write, declare
	    // the trailers you will set during the HTTP
	    // response. These three headers are actually sent in
	    // the trailer.
	    w.Header().Set("Trailer", "AtEnd1, AtEnd2")
	    w.Header().Add("Trailer", "AtEnd3")

	    w.Header().Set("Content-Type", "text/plain; charset=utf-8") // normal header
	    w.WriteHeader(http.StatusOK)

	    w.Header().Set("AtEnd1", "value 1")
		io.WriteString(w, "This HTTP response has both headers before this text and trailers at the end.\n")
		w.Header().Add("AtEnd2", "value 2")
		w.Header().Set("AtEnd3", "value 3") // These will appear as trailers.
		io.WriteString(w, "</div>")
	})

以上代码产生的响应可以通过 curl -i http://localhost/ 查看，Atend1、 Atend2、 Atend3 这些 Trailer Header 会被输出到文档流的末端：

	HTTP/1.1 200 OK
	Content-Type: text/plain; charset=utf-8
	Trailer: AtEnd1, AtEnd2
	Trailer: AtEnd3
	Date: Wed, 11 Dec 2019 16:06:44 GMT
	Transfer-Encoding: chunked

	<div>This HTTP response has both headers before this text and trailers at the end.
	This HTTP response has both headers before this text and trailers at the end.
	</div>Atend1: value 1
	Atend2: value 2
	Atend3: value 3

要完全控制 HTTP 数据流，Handler 方式不能，需要通过 http.Hijacker 接口来获得完全控制权，Hijack() 方法返回一个 net.Conn 和 bufio.ReadWriter 都可以用来完全控制输出流的写入，注意 bufio 是带缓存的读写，需要执行 Flush 来清出数：

	hj, ok := w.(http.Hijacker)
	if !ok {
		http.Error(w, "websocket: response does not implement http.Hijacker", http.StatusInternalServerError)
		return
	}
	var brw *bufio.ReadWriter
	netConn, brw, err := hj.Hijack()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	c.netconn = netConn
	c.brw = brw

	if brw.Reader.Buffered() > 0 {
		netConn.Close()
		http.Error(w, "websocket: client sent data before handshake is complete", http.StatusInternalServerError)
		return
	}
	brw.Write([]byte("Totally-Control: Yes\r\n"))
	brw.Flush()
	
	netConn.Write([]byte("HTTP/1.1 200 OK\r\n\r\nOK"))
	netConn.Close()


## Dive into http

http.HandleFunc() 注册一个响应指定 URL 路径的 HandlerFunc 处理函数，处理函数接收两个参数，http.ResponseWriter 和 http.Request，相当于给客户端的响应和客户端的请求对象。

还可以使用 http.Handle() 方法来注册一个 Handler 接口对象，它只需要按以下签名实现 ServeHTTP 方法即可：

	type Handler interface {
		ServeHTTP(ResponseWriter, *Request) // HandlerFunc
	}

	type HandlerFunc func(ResponseWriter, *Request)

	// The HandlerFunc type is an adapter to allow the use of
	// ordinary functions as HTTP handlers. If f is a function
	// with the appropriate signature, HandlerFunc(f) is a
	// Handler that calls f.

	// ServeHTTP calls f(w, r).
	func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {
		f(w, r)
	}

也可以实现自己的 http.Handler 接口对象：

	http.Handle("/debuger/", debuger{})

	type debuger struct {
		w http.ResponseWriter
		r *http.Request
	}

	func (c debuger) ServeHTTP(w http.ResponseWriter, r *http.Request) {
		c.w = w
		c.r = r
		log.Println("debuger.ServeHTTP()...", r.URL.Path, r.RequestURI)
	}


这些处理函数都注册到了 DefaultServeMux 对象上，ServeMux 就是多路 Server 的支持：

	// Handle registers the handler for the given pattern
	// in the DefaultServeMux.
	// The documentation for ServeMux explains how patterns are matched.
	func Handle(pattern string, handler Handler) { DefaultServeMux.Handle(pattern, handler) }

	// HandleFunc registers the handler function for the given pattern
	// in the DefaultServeMux.
	// The documentation for ServeMux explains how patterns are matched.
	func HandleFunc(pattern string, handler func(ResponseWriter, *Request)) {
		DefaultServeMux.HandleFunc(pattern, handler)
	}

设定好响应函数，调用 http.ListenAndServe() 开始启动服务器对象执行 `net.Listen("tcp", addr)` 侦听 TCP 连接，收到连接请求后进入 Serve() 方法进行接收处理：

	func ListenAndServe(addr string, handler Handler) error {
		server := &Server{Addr: addr, Handler: handler}
		return server.ListenAndServe()
	}

	// ListenAndServe listens on the TCP network address srv.Addr and then
	// calls Serve to handle requests on incoming connections.
	// Accepted connections are configured to enable TCP keep-alives.
	//
	// If srv.Addr is blank, ":http" is used.
	//
	// ListenAndServe always returns a non-nil error. After Shutdown or Close,
	// the returned error is ErrServerClosed.
	func (srv *Server) ListenAndServe() error {
		if srv.shuttingDown() {
			return ErrServerClosed
		}
		addr := srv.Addr
		if addr == "" {
			addr = ":http"
		}
		ln, err := net.Listen("tcp", addr)
		if err != nil {
			return err
		}
		return srv.Serve(tcpKeepAliveListener{ln.(*net.TCPListener)})
	}

在 Server.Serve 内部又会将响应流程转交到内部 conn 对象的 serve() 方法进行处理，注册好的响应处理函数就会在这里开始调用，相关代码片段如下：

	// Serve a new connection.
	func (c *conn) serve(ctx context.Context){
		// ...
		// HTTP cannot have multiple simultaneous active requests.[*]
		// Until the server replies to this request, it can't read another,
		// so we might as well run the handler in this goroutine.
		// [*] Not strictly true: HTTP pipelining. We could let them all process
		// in parallel even if their responses need to be serialized.
		// But we're not going to implement HTTP pipelining because it
		// was never deployed in the wild and the answer is HTTP/2.
		serverHandler{c.server}.ServeHTTP(w, w.req)
	}

	// serverHandler delegates to either the server's Handler or
	// DefaultServeMux and also handles "OPTIONS *" requests.
	type serverHandler struct {
		srv *Server
	}

	func (sh serverHandler) ServeHTTP(rw ResponseWriter, req *Request) {
		handler := sh.srv.Handler
		if handler == nil {
			handler = DefaultServeMux
		}
		if req.RequestURI == "*" && req.Method == "OPTIONS" {
			handler = globalOptionsHandler{}
		}
		handler.ServeHTTP(rw, req)
	}


也可以运行一个本地静态文件服务，只需要给 http.Handle() 提供一个静态文件服务器对象 http.FileServer()，一般还会使用虚拟目录如这里的 `/static/` 就是作为虚拟目录使用的，http.StripPrefix() 方法用来去掉 URL 中虚拟目录部分，并返回一个 HandlerFunc 对象。当然如果映射的是根目录则不需要这一步处理，服务器收到请求后就会通过 http.Dir("./") 指定的目录去读取文件：

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./"))))

例如以下请求路径就会去程序运行的当前目录中读取 index.html 文件并传送到客户端：

	http://localhost/static/index.html

Request 对象有以下常用方法用来获取客户端的信息或表达数据：

    func (r *Request) AddCookie(c *Cookie)
    func (r *Request) Cookie(name string) (*Cookie, error)
    func (r *Request) Cookies() []*Cookie
    func (r *Request) FormFile(key string) (multipart.File, *multipart.FileHeader, error)
    func (r *Request) FormValue(key string) string
    func (r *Request) MultipartReader() (*multipart.Reader, error)
    func (r *Request) ParseForm() error
    func (r *Request) ParseMultipartForm(maxMemory int64) error
    func (r *Request) PostFormValue(key string) string
    func (r *Request) Referer() string
    func (r *Request) UserAgent() string


上传文件可以通过 FormFile(key) 方法获取表达提交的文件，key 即是指定 input 的 name 属性值，此方法返回一个 mime/multipart 包的 File 对象，包含文件的二进制数据，还有一个 FileHeader 包含文件名、大小等信息:

	type FileHeader struct {
	    Filename string
	    Header   textproto.MIMEHeader
	    Size     int64 // Go 1.9
	    // contains filtered or unexported fields
	}

例如上传一个 xyz.jpg 文件，相应接收到的 FileHeader 信息：

	Filename: "xyz.jpg"
	Header:
		Content-Disposition: ["form-data; name="file"; filename="xyz.jpg""]
		Content-Type: ["image/jpeg"]
	Size: 62251

MultipartReader() 获取的是整个表单的文件数据，包括 HTTP 协议的分隔符号。ParseForm() 和 ParseMultipartForm() 都可以解析表单数据，后者只有首次调用有效，它会将表单当做 multipart/form-data 类型进行解析。

Cookie 对象有如下属性，主要的是 Name 和 Value，还有过期时间 Expires：

	type Cookie struct {
	    Name  string
	    Value string

	    Path       string    // optional
	    Domain     string    // optional
	    Expires    time.Time // optional
	    RawExpires string    // for reading cookies only

	    // MaxAge=0 means no 'Max-Age' attribute specified.
	    // MaxAge<0 means delete cookie now, equivalently 'Max-Age: 0'
	    // MaxAge>0 means Max-Age attribute present and given in seconds
	    MaxAge   int
	    Secure   bool
	    HttpOnly bool
	    SameSite SameSite // Go 1.11
	    Raw      string
	    Unparsed []string // Raw text of unparsed attribute-value pairs
	}

以下是一个 Server-Demo，可以将程序目录作为静态文件服务，还结合了协程信道 channel 关闭服务器，通过 URL 访问 /close 即可以触发关闭动作，服务器监听 /mock/upload 作为文件上传地址。在 Window 系统运行服务器后，程序会是用 exec.Command() 执行命令打开浏览器访问默认的 demos.html 页面：

	package main

	import (
		"encoding/json"
		"io/ioutil"
		"log"
		"net"
		"net/http"
		"os"
		"os/exec"
	)

	func startServer(done chan bool) string {
		ln, err := net.Listen("tcp", "127.0.0.1:0") // Port 0 for randomly
		if err != nil {
			log.Fatal(err)
		}
		go func() {
			defer ln.Close()
			http.HandleFunc("/mock/upload", func(w http.ResponseWriter, r *http.Request) {
				if err := r.ParseMultipartForm(2 << 10); err != nil {
					print(err.Error() + "\n")
				}

				file, header, err := r.FormFile("file")
				url := ""
				if err == nil {
					os.Mkdir("uploads", os.ModeDir)
					filename := "uploads/" + header.Filename
					data, _ := ioutil.ReadAll(file)
					err = ioutil.WriteFile(filename, data, os.ModeExclusive)
					if err != nil {
						print(err)
					}
					url = "/static/" + filename
				}
				jsb, _ := json.Marshal(map[string]interface{}{
					"file_tag":   "file",
					"form":       r.Form,
					"fileheader": header,
					"err":        err,
					"cookies":    r.Cookies(),
					"url":        url,
				})
				w.Write(jsb)
			})
			http.HandleFunc("/close", func(w http.ResponseWriter, r *http.Request) {
				w.Write([]byte(`
					<h1>Goodbye!</h1>
					<style>
					h1 {
					    background: radial-gradient(#fddbdbd1, #ff6b6b85), radial-gradient(100% 80% at 10% 20%, #e07231bf, #529bf587);
					    width: 100%;
					    height: 100%;
					    margin: -8px;
					    position: fixed;
					    text-align: center;
					    line-height: 100vh;
					    color: white;
					    text-shadow: 1px 1px 2px #523e3e, -1px -1px 28px white;
					}
					</style>
				`))
				done <- true
			})
			http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./"))))
			log.Fatal(http.Serve(ln, nil))
		}()
		return "http://" + ln.Addr().String()
	}

	func main() {
		willdone := make(chan bool, 1)
		url := startServer(willdone) + "/static/demos.html"
		err := exec.Command("cmd.exe", "/c", "start "+url).Run()
		if err != nil {
			log.Print(url, err)
		}
		print(url)
		<-willdone // wait for done
	}


# 🚩 net/http 超时机制完全手册
http://colobu.com/2016/07/01/the-complete-guide-to-golang-net-http-timeouts/

原文链接：http://colobu.com/2016/07/01/the-complete-guide-to-golang-net-http-timeouts/
英文原始出处: The complete guide to Go net/http timeouts , 作者: Filippo Valsorda

当用Go写HTTP的服务器和客户端的时候，超时处理总是最易犯错和最微妙的地方之一。错误可能来自很多地方，一个错误可能等待很长时间没有结果，直到网络故障或者进程挂起。

HTTP是一个复杂的、多阶段(multi-stage)协议，所以没有一个放之四海而皆准的超时解决方案，比如一个流服务、一个JSON API和一个Comet服务对超时的需求都不相同， 往往默认值不是你想要的。

本文我将拆解需要超时设置的各个阶段，看看用什么不同的方式去处理它， 包括服务器端和客户端。

## SetDeadline
首先，你需要了解Go实现超时的网络原语(primitive): Deadline (最后期限)。

net.Conn 为Deadline提供了多个方法 Set[Read|Write]Deadline(time.Time) 。Deadline是一个绝对时间值，当到达这个时间的时候，所有的 I/O 操作都会失败，返回超时(timeout)错误。

Deadline不是超时(timeout)。一旦设置它们永久生效(或者直到下一次调用SetDeadline), 不管此时连接是否被使用和怎么用。所以如果想使用 SetDeadline 建立超时机制，你不得不每次在 Read/Write 操作之前调用它。

你可能不想自己调用 SetDeadline , 而是让 net/http 代替你调用，所以你可以调用更高级的timeout方法。但是请记住，所有的超时的实现都是基于Deadline, 所以它们不会每次接收或者发送重新设置这个值(so they do NOT reset every time data is sent or received )。

江南雨的指正：

应该是由于“Deadline是一个绝对时间值”，不是真的超时机制，所以作者特别提醒，这个值不会自动重置的，需要每次手动设置。

## 服务器端超时设置

对于暴露在网上的服务器来说，为客户端连接设置超时至关重要，否则巨慢的或者隐失的客户端可能导致文件句柄无法释放，最终导致服务器出现下面的错误:

	http: Accepterror: accepttcp [::]:80: accept4: toomanyopenfiles; retryingin 5ms  

http.Server 有两个设置超时的方法: `ReadTimeout` 和 and `WriteTimeout`。你可以显示地设置它们：

	srv := &http.Server{  
	    ReadTimeout: 5 * time.Second,
	    WriteTimeout: 10 * time.Second,
	}
	log.Println(srv.ListenAndServe())

ReadTimeout 的时间计算是从连接被接受 accept 到 request body 完全被读取，如果你不读取 body，那么时间截止到读完 header 为止。内部实现是在 Accept 立即调用 SetReadDeadline 方法。

	 ……
	  if d := c.server.ReadTimeout; d != 0 {
	 c.rwc.SetReadDeadline(time.Now().Add(d))
	}
	if d := c.server.WriteTimeout; d != 0 {
	 c.rwc.SetWriteDeadline(time.Now().Add(d))
	}
	  ……

WriteTimeout 的时间计算正常是从 request header 的读取结束开始，到 response write 结束为止，也就是 ServeHTTP 方法的声明周期, 它是通过在 readRequest 方法结束的时候调用 SetWriteDeadline 实现的。

	func (c *conn) readRequest(ctxcontext.Context) (w *response, errerror) {
	 if c.hijacked() {
	 return nil, ErrHijacked
	 }
	 if d := c.server.ReadTimeout; d != 0 {
	 c.rwc.SetReadDeadline(time.Now().Add(d))
	 }
	 if d := c.server.WriteTimeout; d != 0 {
	 defer func() {
	 c.rwc.SetWriteDeadline(time.Now().Add(d))
	 }()
	 }
	  ……
	}

但是，当连接是HTTPS的时候， SetWriteDeadline 会在 Accept 之后立即调用，所以它的时间计算也包括 TLS 握手时的写的时间。 讨厌的是， 这就意味着同时也只有这种情况 WriteTimeout 设置的时间包含了读取 Headerd 到读取 body 第一个字节这段时间。

	if tlsConn, ok := c.rwc.(*tls.Conn); ok {
	 if d := c.server.ReadTimeout; d != 0 {
	 c.rwc.SetReadDeadline(time.Now().Add(d))
	 }
	 if d := c.server.WriteTimeout; d != 0 {
	 c.rwc.SetWriteDeadline(time.Now().Add(d))
	 }
	    ……

当你处理不可信的客户端和网络的时候，你应该同时设置读写超时，这样客户端就不会因为读慢或者写慢长久的持有这个连接了。

最后，还有一个 http.TimeoutHandler 方法。 它并不是Server参数，而是一个 Handler 包装函数，可以限制 ServeHTTP 调用。它缓存 response, 如果 deadline 超过了则发送 504 Gateway Timeout 错误。 注意这个功能在 1.6 中有问题，在 1.6.2 中改正了。

## http.ListenAndServe 的错误
顺便提一句， net/http 包下的封装的绕过 http.Server 的函数 http.ListenAndServe , http.ListenAndServeTLS 和 http.Serve 并不适合实现互联网的服务器。这些函数让超时设置默认不启用，并且你没有办法设置启用超时处理。所以如果你使用它们，你会很快发现连接泄漏，太多的文件句柄。我犯过这种错误至少五六次。

取而代之，你应该创建一个 http.Server 示例，设置 ReadTimeout 和 WriteTimeout ,像上面的例子中一样使用相应的方法。

## Stream 关于流

令人心塞的是， 没有办法从 ServeHTTP 中访问底层的 net.Conn ，所以提供流服务强制不去设置 WriteTimeout （这也可能是为什么这些值的默认值总为0）。如果无法访问 net.Conn 就不能在每次 Write 的时候调用 SetWriteDeadline 来实现一个正确的idle timeout。

而且，也没有办法取消一个阻塞的 ResponseWriter.Write ，因为 ResponseWriter.Close 没有文档指出它可以取消一个阻塞并发写。也没有办法使用Timer创建以俄国手工的timeout 杯具就是流服务器不能对于慢读的客户端进行防护。我提交的了一个［bug]( https://github.com/golang/go/issues/16100)，欢迎大家反馈。

编者按 : 作者此处的说法是有问题的，可以通过 Hijack 获取 net.Conn，既然可以可以获取 net.Conn 就可以调用它的 SetWriteDeadline 方法。代码例子如下：

	package main

	import (
		"fmt"
		"log"
		"net/http"
	)

	func main() {
		http.HandleFunc("/hijack", func(w http.ResponseWriter, r *http.Request) {
			hj, ok := w.(http.Hijacker)
			if !ok {
				http.Error(w, "webserver doesn't support hijacking", http.StatusInternalServerError)
				return
			}
			conn, bufrw, err := hj.Hijack()
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			// Don't forget to close the connection:
			defer conn.Close()
			conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
			bufrw.WriteString("Now we're speaking raw TCP. Say hi: ")
			bufrw.Flush()
			s, err := bufrw.ReadString('\n')
			if err != nil {
				log.Printf("error reading string: %v", err)
				return
			}
			fmt.Fprintf(bufrw, "You said: %q\nBye.\n", s)
			bufrw.Flush()
		})
	}

## Client timeout 客户端超时设置

Client端的超时设置说复杂也复杂，说简单也简单，看你怎么用了，最重要的就是不要有资源泄漏的情况或者程序被卡住。

最简单的方式就是使用 http.Client 的 Timeout 字段。 它的时间计算包括从连接(Dial)到读完response body。

	c := &http.Client{  
	    Timeout: 15 * time.Second,
	}
	resp, err := c.Get("https://blog.filippo.io/")

就像服务器端一样， http.GET 使用Client的时候也没有超时设置,所以在互联网上使用也很危险。

有一些更细粒度的超时控制：

- net.Dialer.Timeout 限制建立TCP连接的时间
- http.Transport.TLSHandshakeTimeout 限制 TLS 握手的时间
- http.Transport.ResponseHeaderTimeout 限制读取 response header 的时间

http.Transport.ExpectContinueTimeout 限制 client 在发送包含 Expect: 100-continue- 的 header 到收到继续发送 body 的 response 之间的时间等待。注意在 1.6 中设置这个值会禁用 HTTP/2( DefaultTransport 自1.6.2起是个特例)

	c := &http.Client{  
	    Transport: &Transport{
	        Dial: (&net.Dialer{
	                Timeout:  30 * time.Second,
	                KeepAlive: 30 * time.Second,
	        }).Dial,
	        TLSHandshakeTimeout:  10 * time.Second,
	        ResponseHeaderTimeout: 10 * time.Second,
	        ExpectContinueTimeout: 1 * time.Second,
	    }
	}

如我所讲，没有办法限制发送 request 的时间。读取 response body (原文是读取request body，按照理解应该是读取response可以手工控制) 的时间花费可以手工的通过一个 time.Timer 来实现, 读取发生在调用 Client.Do 之后（详见下一节）。

最后将一点，在Go 1.7中，增加了一个 http.Transport.IdleConnTimeout ， 它不控制client request的阻塞阶段，但是可以控制连接池中一个连接可以idle多长时间。

注意一个Client缺省的可以执行 redirect 。 http.Client.Timeout 包含所有的 redirect ，而细粒度的超时控制参数只针对单次请求有效， 因为 http.Transport 是一个底层的类型，没有 redirect 的概念。

## Cancel 和 Context
net/http 提供了两种方式取消一个 client 的请求: Request.Cancel 以及Go 1.7新加的 Context。

Request.Cancel 是一个可选的 channel, 当设置这个值并且 close 它的时候，request 就会终止，就好像超时了一样(实际它们的实现是一样的，在写本文的时候我还发现一个1.7 的 一个 bug , 所有的 cancel 操作返回的错误还是 timeout error )。

我们可以使用 Request.Cancel 和 time.Timer 来构建一个细粒度的超时控制，允许读取流数据的时候推迟deadline:

	package main
	import (  
	    "io"
	    "io/ioutil"
	    "log"
	    "net/http"
	    "time"
	)
	func main() {  
	    c := make(chan struct{})
	    timer := time.AfterFunc(5*time.Second, func() {
	        close(c)
	    })
	        // Serve 256 bytes every second.
	    req, err := http.NewRequest("GET", "http://httpbin.org/range/2048?duration=8&chunk_size=256", nil)
	    if err != nil {
	        log.Fatal(err)
	    }
	    req.Cancel = c
	    log.Println("Sending request...")
	    resp, err := http.DefaultClient.Do(req)
	    if err != nil {
	        log.Fatal(err)
	    }
	    defer resp.Body.Close()
	    log.Println("Reading body...")
	    for {
	        timer.Reset(2 * time.Second)
	                // Try instead: timer.Reset(50 * time.Millisecond)
	        _, err = io.CopyN(ioutil.Discard, resp.Body, 256)
	        if err == io.EOF {
	            break
	        } else if err != nil {
	            log.Fatal(err)
	        }
	    }
	}

上面的例子中我们为Do方法执行阶段设置5秒的超时，但是我们至少花费8秒执行8次才能读完所欲的body，每一次设置2秒的超时。我们可以为流 API这样处理避免程序死在那里。 如果超过两秒我们没有从服务器读取到数据， io.CopyN会返回 net/http: request canceled 错误。

在1.7中， context包升级了，进入到标准库中。Context有很多值得学习的功能，但是对于本文介绍的内容来讲，你只需直到它可以用来替换和扔掉 Request.Cancel 。

用Context取消请求很简单，我们只需得到一个新的Context和它的cancel()函数，这是通过context.WithCancel方法得到的，然后创建一个request并使用 Request.WithContext 绑定它。当我们想取消这个请求是，我们调用 cancel() 取消这个Context:

	ctx, cancel := context.WithCancel(context.TODO())  
	timer := time.AfterFunc(5*time.Second, func() {  
	    cancel()
	})
	req, err := http.NewRequest("GET", "http://httpbin.org/range/2048?duration=8&chunk_size=256", nil)  
	if err != nil {  
	    log.Fatal(err)
	}
	req = req.WithContext(ctx)

Context好处还在于如果parent context被取消的时候(在 context.WithCancel 调用的时候传递进来的)，子context也会取消， 命令会进行传递。



# 🚩 Echo Server Demo

Go programming language 一书 Chapter 8.10 中演示了一个 chat.go 聊天服务示例 Example: Chat Server。

示例使用了 go 协程响应每个客户的入站连接请求，也使用了 go 协程来处理广播事件，将客户的登入及下线信息广播给其它客户端。

而客户端的消息则通过 bufio.Scanner 的 Text() 方读取，然后通过消息信道 message channel 广播给其它客户端。

注意例程中三种信道的定义，关于 Go 信道 channel 的内容参考 Go programming language 一书 8. Goroutines and Channels 217。

	type client chan<- string // an outgoing message channel

	var (
		entering = make(chan client)
		leaving  = make(chan client)
		messages = make(chan string) // all incoming client messages
	)

这里定义了 client 为字符串信道输入信道类型，所以不能从 client 信道读取数据。接着示例化了两个串联信道 entering、 leaving，即这两个信道可进行双向传输的数据就是 client 信道对象，因此可以从 entering、 leaving 信道读取 client 对象，它们作为所有客户端的上线、下线信息管道，广播协程会将它们发送到所有客户端。第三个 messages 则是双向字符串信道实例，作为所有客户端入站消息的管道。

程序的运行逻辑大概如下：

- go broadcaster() 先启动协程处理广播事件；
- listener.Accept() 接入连接；
- go handleConn(conn) 启动协程响应客户入站请求；
	- go clientWriter(conn, ch) 启动信息回显处理，ch 是局部信道作为出站消息管道使用；
	- who := conn.RemoteAddr().String() 通过客户端的地址接端口标识用户；
	- entering <- ch 客户端入站后紧接着将回显信道推入 entering 信道，待广播协程处理；
	- input := bufio.NewScanner(conn) 和 Scan() 构成阻塞的消息读取逻辑，消息内容通过 Text() 方法，然后通过 messages 信道广播到其它客户端；
	- leaving <- ch 类似地在客户端离线后将回显信道推入 leaving 信道，待广播协程处理；

缓存IO对象的使用，可以先配置一个缓存区，在 Scan() 获得数据返回后通过缓冲区获取数据，获取数据的方式有两种 Text() 和 Bytes()，可以多次调用获取当前的数据，并会影响缓存区的现有数据。

	bs := []byte{}
	input := bufio.NewScanner(conn)
	input.Buffer(bs, 80)
	input.Scan() // blocking before data be ready
	msg := string(bs)
	// msg := input.Text()
	// bys := input.Bytes()


代码中并没有对连接对象进行管理，所有消息都是通过信道处理的，在广播方法中使用了客户端临时信道映射对象 clients 来处理：

	func broadcaster() {
		clients := make(map[client]bool) // all connected clients
		for {
			select {
			case msg := <-messages:
				// Broadcast incoming message to all
				// clients' outgoing message channels.
				for cli := range clients {
					cli <- msg
				}

			case cli := <-entering:
				clients[cli] = true

			case cli := <-leaving:
				delete(clients, cli)
				close(cli)
			}
		}
	}

虽然在定义 entering、 leaving 时使用的是只输入字符串的 client 信道作为传输对象，但是不影响它们接收一个双向的临时 ch 信道，这个临时信道就是通往各个客户端的信息管道，这个管道的内容最后都是经过 clientWriter() 回显方法发送到客户端的。所以广播方法中，只需要通过客户端临时信道映射对象 clients 即可以将所有在 entering、 leaving 信道接收到的信息广播出去。注意方法内将 select 结合 channel 的用法，哪个信道先来信息就先执行哪个分支。

Echo Server 运行服务后，可以通过 telnet 来测试，可以结合 Delve 这样的调试工具，方便做协程的调试：

	telnet localhost 8000

这里对原代码的消息读取逻辑进行了改进，这样客户端可以发送 bye 消息来断开连接。

	for input.Scan() {
		msg := input.Text()
		messages <- who + ": " + msg
		if msg=="bye"{
			conn.Close()
			break;
		}
	}

另外希望在广播事件中将客户端的上线、线下消息打印到服务器上。开始想通过对客户端临时管道 ch 进行读取操作，但是这不是个好主意。因为要修改 client 为双向信道，同时一个信道在两个位置有读取操作，即使为 ch 设置缓存区也很容易导致 chan 死锁，两个协程要同时竞争数据的读取权，也不能保证读取的先后顺序。

最好的做法是增加一个服务端专用信道 notices，将需要在服务器上打印的信息通过 notices 专用信道传输。


完整示例代码

	// Chat is a server that lets clients chat with each other.
	package main

	import (
		"bufio"
		"fmt"
		"log"
		"net"
	)

	type client chan<- string // an outgoing message channel

	var (
		entering = make(chan client)
		leaving  = make(chan client)
		notices  = make(chan string) // all server-side message
		messages = make(chan string) // all incoming client messages
	)

	func broadcaster() {
		clients := make(map[client]bool) // all connected clients
		for {
			select {
			case msg := <-messages:
				// Broadcast incoming message to all
				// clients' outgoing message channels.
				for cli := range clients {
					cli <- msg
				}

			case cli := <-entering:
				clients[cli] = true

			case cli := <-leaving:
				delete(clients, cli)
				close(cli)

			case echo := <-notices:
				log.Printf("Server Notine: %s", echo)
			}
		}
	}

	func handleConn(conn net.Conn) {
		ch := make(chan string) // outgoing client messages
		go clientWriter(conn, ch)

		who := conn.RemoteAddr().String()
		ch <- "You are " + who
		messages <- who + " has arrived"
		notices <- who + " has arrived"
		entering <- ch

		input := bufio.NewScanner(conn)
		for input.Scan() {
			msg := input.Text()
			messages <- who + ": " + msg
			if msg == "bye" {
				conn.Close()
				break
			}
		}
		// NOTE: ignoring potential errors from input.Err()

		leaving <- ch
		messages <- who + " has left"
		notices <- who + " has left"
		conn.Close()
	}

	func clientWriter(conn net.Conn, ch <-chan string) {
		for msg := range ch {
			fmt.Fprintln(conn, msg) // NOTE: ignoring network errors
		}
	}

	func main() {
		log.Println("Chat Server on localhost:8001")
		listener, err := net.Listen("tcp", "localhost:8001")
		if err != nil {
			log.Fatal(err)
		}

		go broadcaster()
		for {
			conn, err := listener.Accept()
			if err != nil {
				log.Print(err)
				continue
			}
			go handleConn(conn)
		}
	}




# 🚩 Server-demo.go upload 上传测试

	package main

	import (
		"encoding/json"
		"io/ioutil"
		"log"
		"net"
		"net/http"
		"os"
		"os/exec"
		"path/filepath"
		"strings"
	)

	func startServer() string {
		ln, err := net.Listen("tcp", "0.0.0.0:0") // Port 0 for randomly
		if err != nil {
			log.Fatal(err)
		}
		go func() {
			defer ln.Close()
			http.HandleFunc("/mock/thumbs", doThumbs)
			http.HandleFunc("/mock/upload", doUpload)
			http.HandleFunc("/close", doClose)
			http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./"))))
			log.Fatal(http.Serve(ln, nil))
		}()
		return "http://" + ln.Addr().String()
	}

	func doClose(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(`
			<h1>Goodbye!</h1>
			<style>
			h1 {
			    background: radial-gradient(#fddbdbd1, #ff6b6b85), radial-gradient(100% 80% at 10% 20%, #e07231bf, #529bf587);
			    width: 100%;
			    height: 100%;
			    margin: -8px;
			    position: fixed;
			    text-align: center;
			    line-height: 100vh;
			    color: white;
			    text-shadow: 1px 1px 2px #523e3e, -1px -1px 28px white;
			}
			</style>
		`))
		willdone <- true
	}

	func doThumbs(w http.ResponseWriter, r *http.Request) {
		list, _ := thumbs("./uploads")
		jsn, _ := json.Marshal(list)
		w.Write(jsn)
	}

	func thumbs(folder string) ([](map[string]interface{}), int) {
		list, _ := ioutil.ReadDir(folder)
		items := [](map[string]interface{}){}
		for _, i := range list {
			item := map[string]interface{}{
				"name":   i.Name(),
				"size":   i.Size(),
				"path":   strings.Replace(folder, "\\", "/", 1024),
				"modify": i.ModTime(),
			}
			items = append(items, item)
			if i.IsDir() {
				ph := filepath.Join(folder, i.Name())
				item["subpath"] = strings.Replace(ph, "\\", "/", 1024)
				list, size := thumbs(ph)
				item["size"] = size
				item["sub"] = list
			}
		}
		return items, len(items)
	}

	func doUpload(w http.ResponseWriter, r *http.Request) {
		if err := r.ParseMultipartForm(2 << 10); err != nil {
			print(err.Error() + "\n")
		}

		file, header, err := r.FormFile("file")
		url := ""
		if err == nil {
			os.Mkdir("uploads", os.ModeDir)
			filename := "uploads/" + header.Filename
			data, _ := ioutil.ReadAll(file)
			err = ioutil.WriteFile(filename, data, os.ModeExclusive)
			if err != nil {
				print(err)
			}
			url = "/static/" + filename
		}
		jsb, _ := json.Marshal(map[string]interface{}{
			"input[name]": "file",
			"form":        r.Form,
			"fileheader":  header,
			"cookies":     r.Cookies(),
			"success":     err == nil,
			"message":     err,
			"url":         url,
			"imgURL":      url,
			"downloadURL": url,
		})
		w.Write(jsb)
	}

	var willdone chan bool

	func main() {
		willdone = make(chan bool, 1)
		url := strings.Replace(startServer(), "[::]", "127.0.0.1", 4) + "/static/demos.html#./demos/upload.jsx"
		err := exec.Command("cmd.exe", "/c", "start "+url).Run()
		if err != nil {
			log.Println(url, err)
		}
		print(url)
		<-willdone // wait for done
	}


# 🚩 MAC & IP Inquire
https://cloud.tencent.com/developer/article/1122940

	package main

	import (
		"fmt"
		"net"
	)

	func getMacAddrs() (macAddrs []string) {
		netInterfaces, err := net.Interfaces()
		if err != nil {
			fmt.Printf("fail to get net interfaces: %v", err)
			return macAddrs
		}

		for _, netInterface := range netInterfaces {
			macAddr := netInterface.HardwareAddr.String()
			if len(macAddr) == 0 {
				continue
			}

			macAddrs = append(macAddrs, macAddr)
		}
		return macAddrs
	}

	func getIPs() (ips []string) {

		interfaceAddr, err := net.InterfaceAddrs()
		if err != nil {
			fmt.Printf("fail to get net interface addrs: %v", err)
			return ips
		}

		for _, address := range interfaceAddr {
			ipNet, isValidIpNet := address.(*net.IPNet)
			if isValidIpNet && !ipNet.IP.IsLoopback() {
				if ipNet.IP.To4() != nil {
					ips = append(ips, ipNet.IP.String())
				}
			}
		}
		return ips
	}

	func main() {
		fmt.Printf("mac addrs: %q\n", getMacAddrs())
		fmt.Printf("ips: %q\n", getIPs())
	}


输出：
linux

	mac addrs: ["08:00:27:88:0f:fd" "08:00:27:0b:06:54" "56:84:7a:fe:97:99"]
	ips: ["192.168.1.104" "192.168.56.101" "172.17.42.1"]

windows

	mac addrs: ["00:e0:66:07:5c:97:00:00" "08:00:27:00:d8:94:00:00"]
	ips: ["192.168.1.101" "169.254.167.46"]

特别指出
go语言在获取机器的mac地址和ip时，windows和linux输出格式不一样，比如windows获取的mac地址是8个字节，而linux获取的mac是6个字节，ip异同可以参考这篇博客:

go获取windows的hostid

所以不同平台需做不同处理。

# 🚩 Interface & Function 对象扩展

Golang 的函数即对象，和 JavaScript 一样，像结构体可以定义方法一样，函数对象也可定义方法。只需要使用 type 定义一个函数类型，就可以对这个函数对象进行各种方法的扩展，和别名方式、嵌入结构体方式没有太大的差别。特别的一点是，定义函数体时它会被当做构造器使用，但是方法的签名要和函数类型定义保持一致，因为调用任意一个方法都会前触发构造函数。当然，还有通过 new 来编写构造方法的做法。

	package main

	import (
		"fmt"
	)

	type adder interface {
		add(string) int
	}

	type handler func(name string) int // 函数即对象，和 JavaScript 一样

	func (h handler) add(name string) int { // 实现函数对象的 handler.add() 方法
		value := h(name) + 1
		fmt.Printf(`handler.add("%v") %v %s`, name, value, "\n")
		return value
	}

	type Integer int // 定义别名类型

	func (i Integer) add(name string) int { // 实现新类型 Integer.add() 方法
		value := len(name) + int(i)
		fmt.Printf(`Integer.add("%v") %v %s`, name, value, "\n")
		return value
	}

	func doubler(name string) int { // doubler 函数和 handler 签名一致可以互相转换
		value := len(name) * 2
		fmt.Printf(`doubler("%v") %v %s`, name, value, "\n")
		return value
	}

	func process(a adder) { // process 函数用来处理 add 接口类型
		fmt.Printf(`process("%v")%s`, a, "\n")
		a.add("test")
	}

	func main() {

		var h handler = func(name string) int { // 定义 handler 函数对象，相当构造函数
			value := len(name)
			fmt.Printf(`anoymous func("%v") %v %s`, name, value, "\n")
			return value
		}

		h("anoymous")                    // 调用 handler 函数对象构造器即上面的匿名函数
		h.add("h.add()")                 // 调用 handler 函数对象的 add() 方法，会执行构造函数
		handler(doubler).add("typecast") // 显式转换后调用 handler.add() 方法，doubler() 会当做构造函数，因为是转型来的 

		fmt.Printf("\nTest process(h)\n")
		process(h)
		// process 接受 adder 接口类型参数，并调用接口方法 add()，这里是 handler.add()

		fmt.Printf("\nTest process(handler(doubler))\n")
		process(handler(doubler))
		// doubler 没有实现 add() 方法，不符合 addr 接口类型。因为签名和 handler 一样，可以强制转换。

		fmt.Printf("\nTest process(Integer(8))\n")
		process(Integer(8))
		// 函数对象、结构体实都可以现 adder 接口
	}

Output:

	anoymous func("anoymous") 8 
	anoymous func("h.add()") 7 
	handler.add("h.add()") 8 
	doubler("typecast") 16 
	handler.add("typecast") 17 

	Test process(h)
	process("0x493120")
	anoymous func("test") 4 
	handler.add("test") 5 

	Test process(handler(doubler))
	process("0x492cf0")
	doubler("test") 8 
	handler.add("test") 9 

	Test process(Integer(8))
	process("8")
	Integer.add("test") 12 


# 🚩 在 Golang 中使用 C 代码
uzoice · 2015-02-03 02:00:01 · 8272 次点击 · 预计阅读时间 3 分钟 · 大约1分钟之前 开始浏览    
这是一个创建于 2015-02-03 02:00:01 的文章，其中的信息可能已经有所发展或是发生改变。
参考文献列表：
http://golang.org/cmd/cgo/

cgo 使得在 Golang 中可以使用 C 代码。

Hello World

为了有一个较为直观的了解，我们来看一个简单的例子，创建文件 main.go：

	package main
	 
	/*
	#include <stdio.h>
	 
	void sayHi() {
	    printf("Hi");
	}
	*/
	import "C"
	 
	func main() {
	    C.sayHi()
	}

如果想要在 Windows 上使用 cgo，那么需要安装 gcc 编译器，这里我使用 mingw-w64，可以在这里、这里下载，另外你也可以使用 TDM-GCC。

## 设置编译和链接标志

我们使用 import “C” 导入的是一个伪包（pseudo-package），我们通过其来使用 C 代码。在 import “C” 之前，紧跟着 import “C” 的注释可以包括：

- 编译器和链接器标志
- C 代码

我们可以通过 #cgo 指令来设置编译器和链接器标志，例如：

	// #cgo CFLAGS: -DPNG_DEBUG=1
	// #cgo amd64 386 CFLAGS: -DX86=1
	// #cgo LDFLAGS: -lpng
	// #include <png.h>
	import "C"

附带提及一点的是，这些指令中可以包含构建约束（build constraint），详细内容见：http://golang.org/pkg/go/build/#hdr-Build_Constraints。

常用的 #cgo 指令有：

- CPPFLAGS、CFLAGS 指令被用于编译当前包中的 C 文件（任何的 .c、.s、.S 文件）
- CPPFLAGS、CXXFLAGS 指令被用于编译当前包中的 C++ 文件（任何的 .cpp、.cc、.cxx 文件）
- LDFLAGS 指令用于指定链接器标志
- pkg-config 指令用于通过 pkg-config 工具获取编译器和链接器标志（例如：#cgo pkg-config: png cairo）

在 Golang 的工具发现存在使用 import “C” 的 Golang 源文件时，它将会查找当前目录下的非 Golang 源文件并编译它们作为此 Golang 包的一部分：

文件 test.c

	#include <stdio.h>
	 
	void sayHi() {
	    printf("Hi");
	}

文件 test.go

	package main
	 
	/*
	extern void sayHi();
	*/
	import "C"
	 
	func main() {
	    C.sayHi()
	}

进行构建工作：

	go build

需要注意的是，使用 go build test.go 将不会编译 test.c 文件。

## Golang 引用 C

结构体上需要注意的点：

- C 结构体的域名称如果为 Golang 的关键字时，访问时需要在域名称前面加上 `_`。比如说，C 中有一个结构体变量 x，此变量对应的结构体中有一个域 type，那么在 Golang 中需要通过 `x._type` 来访问 type 域
- 结构体的位域、非对齐数据等无法在 Golang 中表示时会被忽略
- Golang 结构体中不能使用 C 类型的域

标准的 C 数值类型对应：

	C.char
	C.schar（signed char）
	C.uchar（unsigned char）
	C.short
	C.ushort（unsigned short）
	C.int
	C.uint（unsigned int）
	C.long
	C.ulong（unsigned long）
	C.longlong（long long）
	C.ulonglong（unsigned long long）
	C.float
	C.double

任何的 C 函数（包括 void 函数）都可以返回一个返回值和 C 的 errno 变量（作为错误）：

	n, err := C.sqrt(-1)
	_, err := C.voidFunc()

直接调用 C 函数指针目前还无法支持。

有一些特殊的函数可以用于 C 类型和 Golang 类型之间转换（通过数据拷贝的方式），伪定义如下：

	// Golang 的字符串转为 C 字符串
	// C 的字符串是使用 malloc 分配的，因此，此函数的调用者
	// 需要调用 C.free 来释放内存
	func C.CString(string) *C.char
	 
	// 转换 C 字符串到 Golang 字符串
	func C.GoString(*C.char) string
	 
	// 转换一定长度的 C 字符串到 Golang 字符串
	func C.GoStringN(*C.char, C.int) string
	 
	// 转换一块 C 内存区域到 Golang 的字节数组中去
	func C.GoBytes(unsafe.Pointer, C.int) []byte

其他需要注意的点：

- C 语言中的 void* 对应 unsafe.Pointer
- C 语言中的结构、联合、枚举类型（而非变量），在 Golang 中需要加上 struct_、union_、enum_ 前缀访问。由于 Golang 中没有联合这种数据类型，因此 C 的联合在 Golang 中被表示为字节数组
和 C 语言等价的那些类型是不可以导出的

## C 引用 Golang

Golang 的函数可以导出给 C 使用：

	//export MyFunction
	func MyFunction(arg1, arg2 int, arg3 string) int64 {...}
	//export MyFunction2
	func MyFunction2(arg1, arg2 int, arg3 string) (int64, *C.char) {...}

对应的 C 代码为（被生成在 `_cgo_export.h` 中）：

	extern int64 MyFunction(int arg1, int arg2, GoString arg3);
	extern struct MyFunction2_return MyFunction2(int arg1, int arg2, GoString arg3);

有几点需要注意：

Golang 函数的多个返回值会被映射为一个 C 结构体
使用 //export 来使得 Golang 函数可以在 C 中引用。在使用了 //export 之后，此 Golang 源文件中就不能包含 C 的定义（但可以存在声明）



# 🚩 cgo & pkg-config
https://www.freedesktop.org/wiki/Software/pkg-config/
https://dev.gentoo.org/~mgorny/pkg-config-spec.html

pkg-config 是一个 linux 下的命令，用于获得某一个库/模块的所有编译相关的信息，安装命令 apt install apk-config。

pkg-config的作用:

- 检查库的版本号。如果所需要的库的版本不满足要求，它会打印出错误信息，避免链接错误版本的库文件。
- 获得编译预处理参数，如宏定义，头文件的位置。
- 获得链接参数，如库及依赖的其它库的位置，文件名及其它一些连接参数。
- 自动加入所依赖的其它库的设置。

所有用opencv的其他程序，在编译时，只需要：

	pkg-config opencv –libs –cflags

如果系统没有安装就会报错：

	pkg-config: exec: “pkg-config”: executable file not found in %PATH%

而不需要自己去找opencv的头文件在哪里，要链接的库在哪里！省时省力！
如果你写了一个库，不管是静态的还是动态的，要提供给第三方使用，那除了给人家库/头文件，最好也写一个pc文件，这样别人使用就方便很多，不用自己再手动写依赖了你哪些库，只需要敲一个

	pkg-config [YOUR_LIB] –libs –cflags

pkg-config的信息从哪里来？ 有2种路径：

- 第一种：取系统的/usr/lib下的所有 .pc 文件。
- 第二种：PKG_CONFIG_PATH环境变量所指向的路径下的所有 .pc 文件。

这些pc文件什么时候有的？都是在你安装某个库/模块的时候，添加的。比如你往系统安装opencv时，就会在/usr/lib/目录下，放一个opencv.pc。
比如，我的PC是这样的。你可以看到，有各种各样的pc文件。


现在 pkg-config 能找到我们的.pc文件。但如果有多个.pc文件，那么pkg-config又怎么能正确找到我想要的那个呢？这就需要我们在使用 pkg-config 命令的时候去指定。比如

	$gcc main.c `pkg-config --cflags --libs gtk+-2.0` -o main

就指定了要查找的.pc文件是gtk+-2.0.pc。又比如，有第三方库OpenCV，而且其对应的pc文件为opencv.pc，那么我们在使用的时候，就要这样写

	pkg-config --cflags --libs opencv

这样，pkg-config才会去找opencv.pc文件。


 

很多开源代码在makefile中会使用pkg-config，pkg-config是linux下获取系统库/模块信息的命令。

 

用法例子：

	$ pkg-config --libs --cflags grpc  
	-I/usr/local/include -L/usr/local/lib -lgrpc  

查看 grpc 头文件路径及依赖库名称。

	$ pkg-config --list-all  
	grpc++_unsecure gRPC++ unsecure - C++ wrapper for gRPC without SSL  
	libidn2         libidn2 - Library implementing IDNA2008 and TR46  
	gflags          gflags - A commandline flags library that allows for distributed flags.  
	libxslt         libxslt - XSLT library version 2.  

查看 pkg-config 所有模块信息。


当安装 grpc 库时会在 /usr/local/lib/pkgconfig 下生成 grpc.pc 文件，该文件记录 grpc 库版本/路径等信息。

pkg-config 在以下目录搜索 pc 文件，还可以通过环境变量 PKG_CONFIG_PATH 指定 pc 搜索路径。

- /usr/lib/pkgconfig
- /usr/share/pkgconfig
- /usr/local/lib/pkgconfig
- /usr/local/share/pkgconfig

grpc++.pc 文件内容也比较简单：

	prefix=/usr/local  
	exec_prefix=${prefix}  
	includedir=${prefix}/include  
	libdir=${exec_prefix}/lib  
	  
	Name: gRPC++  
	Description: C++ wrapper for gRPC  
	Version: 1.18.0  
	Cflags: -I${includedir}  
	Requires.private: grpc  #依赖其它私有模块  
	Libs: -L${libdir} -lgrpc++  
	Libs.private:           #模块依赖第三方私有库  
	 

grpc makefile:

	LDFLAGS += -L/usr/local/lib `pkg-config --libs protobuf grpc++ grpc`\  
	           -Wl,--no-as-needed -lgrpc++_reflection -Wl,--as-needed\  
	           -ldl  
 

 




# 🚩 go build & link 优化 & UPX
Command link: https://godoc.org/cmd/link

默认的构建命令生成的执行文件很大，可以通过各种参数优化，其中主要的就是链接参数 -ldflags：

	go build -ldflags="-s -w" index.go

	-s    disable symbol table
	-w    disable DWARF generation

以上两部分功能可以缩小 30% 的大小左右，链接命令通常由 go build 调用：

	go tool link [flags] main.a


在 Windows 平台编译命令传入 CGO 链接参数 `-ldflags="-H windowsgui"` 来设置程序类型为 GUI 类型，而非制台窗口 console binary：

	go build -ldflags="-H windowsgui" -o gui-example.exe

	-H type
		Set executable format type.
		The default format is inferred from GOOS and GOARCH.
		On Windows, -H windowsgui writes a "GUI binary" instead of a "console binary."

还可以使用 UPX 压缩工具对可执行文件进行压缩，UPX 支持多平台运行。简而言之，UPX 就是对可执行文件进行压缩，然后可以已极快的速度解压并运行，对于像有些程序需要放到路由器中去运行，而路由器的空间又很小，有这个工具，可以很好的解决这个空间不足的问题。

直接下载解包安装：

	https://github.com/upx/upx/releases/download/v3.95/upx-3.95-win64.zip

在 Linux 下安装运行，压缩级别 -1 到 -9，数字越大文件越小：

	wget https://github.com/upx/upx/releases/download/v3.95/upx-3.95-amd64_linux.tar.xz
	tar xvf upx-3.95-amd64_linux.tar.xz
	cd upx-3.95-amd64_linux
	./upx -1 client_linux_amd64 -o client_linux_amd64_upx

测试：

	$ upx index.exe
	                       Ultimate Packer for eXecutables
	                          Copyright (C) 1996 - 2018
	UPX 3.95w       Markus Oberhumer, Laszlo Molnar & John Reiser   Aug 26th 2018

	        File size         Ratio      Format      Name
	   --------------------   ------   -----------   -----------
	  21839346 ->   8537074   39.09%    win64/pe     index.exe
	  Packed 1 file.


# 🚩 Slice Split 切片分割

	package main

	import (
		"math"
		"fmt"
	)

	func main() {
	    lenth := 11
	    size := 5
	    list := make([]int, 0, lenth)
	    for i := 0; i < lenth; i++ {
	        list = append(list, i)
	    }
	    
	    for i, sp := range SpiltList(list, size) {
	        fmt.Println(i, " ==> ", sp)
	    }
	}

	func SpiltList(list []int, size int) [][]int {
	    lens := len(list)
	    mod := math.Ceil(float64(lens) / float64(size))
	    splited := make([][]int, 0)
	    for i := 0; i < int(mod); i++ {
	        tmp := make([]int, 0, size)
	        if i == int(mod)-1 {
	            tmp = list[i*size:]
	        } else {
	            tmp = list[i*size : i*size+size]
	        }
	        splited = append(splited, tmp)
	    }
	    return splited
	}


# 🚩 package builtin 内建函数及类型

	func append(slice []Type, elems ...Type) []Type     type ComplexType      type float32
	func cap(v Type) int                                type FloatType        type float64
	func close(c chan<- Type)                           type IntegerType      type int
	func complex(r, i FloatType) ComplexType            type Type             type int16
	func copy(dst, src []Type) int                      type Type1            type int32
	func delete(m map[Type]Type1, key Type)             type bool             type int64
	func imag(c ComplexType) FloatType                  type byte             type int8
	func len(v Type) int                                type complex128       type rune
	func make(t Type, size ...IntegerType) Type         type complex64        type string
	func new(Type) *Type                                type error            type uint
	func panic(v interface{})                                                 type uint16
	func print(args ...Type)                                                  type uint32
	func println(args ...Type)                                                type uint64
	func real(c ComplexType) FloatType                                        type uint8
	func recover() interface{}                                                type uintptr
	

要查询内建函数列表使用以下命令：

	$ go doc builtin

或运行以下命令，再打开文档页面 http://localhost:6060/ 翻到 builtin 这个包：

	start http://localhost:6060/pkg/builtin && godoc -http :6060


## append(slice []Type, elems ...Type) []Type
## cap(Type) int
## close(chan<- Type)
## complex(r, i FloatType) ComplexType
## copy(dst, src []Type) int

    The copy built-in function copies elements from a source slice into a
    destination slice. (As a special case, it also will copy bytes from a string
    to a slice of bytes.) The source and destination may overlap. Copy returns
    the number of elements copied, which will be the minimum of len(src) and
    len(dst).

## delete(m map[Type]Type1, key Type)
## imag(ComplexType) FloatType
## len(Type) int
## make(Type, size ...IntegerType) Type

	var channel = make(chan struct{}, 20)
	var dict map[int]string = make(map[int]string)
	var any = make(map[string]interface{}, 10) 
	bytes := make([]byte,info.Size())

## new(Type) `*Type`
## panic(interface{})
## print(args ...Type)
## println(args ...Type)
## real(ComplexType) FloatType
## recover() interface{}



# 🚩 Crypto Bcrypt & RSA

用 MD5/sha1+salt 的方法保存密码是不安全的，使用 Bcrypt, 保存密码一定要用 Bcrypt。

因为 bcrypt 加密使用了随机的盐，所以同一个字串每次 hash 的结果也是不一样的。

存储的话，就把结果转成字符串存起来就好了呀。你想更新也是可以的啊，反正同一字串的加密结果都是等价的

比如用户从前端传过来密码 password，你使用 GenerateFromPassword(password) 加密后（假设为 hashedPassword）放如数据库。下次用户登录的时候，前端还是传过来了他的密码 passwordNotCheck，你从数据库拿出 hashedPassword，你需要使用 CompareHashAndPassword(hashedPassword, passwordNotCheck) 的返回值 是否为 nil 来判断用户发过来的密码是否正确

	package main

	import (
		"time"
		"fmt"
		"io"
		"strconv"
		"golang.org/x/crypto/bcrypt"
		"crypto/md5"
		// "crypto/sha256"
		// "crypto/rsa"
		// "crypto/rand"
		// "crypto/x509"
		// "encoding/pem"
		// "encoding/base64"
	)

	type User struct {
		ID             int64     `json:"id" form:"id"`
		Firstname      string    `json:"firstname" form:"firstname"`
		Username       string    `json:"username" form:"username"`
		HashedPassword []byte    `json:"-" form:"-"`
		CreatedAt      time.Time `json:"created_at" form:"created_at"`
	}

	func main() {
		now := time.Now().Unix()
		MD5( strconv.FormatInt(now, 10) )
		MD5( "somepassword" )

		token, _ := Bcrypt("somepassword")
		BcryptValidate("somepassword", token)
		BcryptValidate("someattack", token)
	}

	func MD5(data string) string{
		hash := md5.New()
		io.WriteString(hash, data)
		token := fmt.Sprintf("%x", hash.Sum(nil))
		fmt.Printf("MD5 HASH: %s [%s]\n", data, token)
		return token
	}

	func Bcrypt(password string) ([]byte, error) {
		// Random salt cause a different token for the same password
		token, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	    if err != nil {
	        panic(err)
	    }
	    fmt.Printf("Bcrypt HASH: %s, [%s]\n", password, token)
		return token, err
	}

	// ValidatePassword will check if passwords are matched.
	func BcryptValidate(password string, token []byte) (bool, error) {
		if err := bcrypt.CompareHashAndPassword(token, []byte(password)); err != nil {
			fmt.Printf("Failure of validation [%s]\n", password)
			return false, err
		}
		fmt.Printf("Success of validation [%s]\n", password)
		return true, nil
	}

RSA 非对称加密系统使用公钥+私钥机制，其中任一个用来加密，另一个可以解密，公钥公开，私钥保密不公开。加密/解密是采用公钥加密，私钥解密。签名/验签是采用私钥签名，公钥验签。特定私钥的拥有者使用他的私钥加密消息，公众可以通过公钥来进行解密，这个流程可以确定消息的加密方，因此广泛用于签名与验证。

PKCS#1 是 PKCS（公钥密码标准），而 #1 就是指 RSA 的标准。 rsa 包中函数的名称可以看到有两对加解密的函数。 EncryptOAEP、DecryptOAEP，EncryptPKCS1v15、DecryptPKCS1v15。还有签名验证函数对 VerifyPSS、SignPSS，SignPKCS1v15、VerifyPKCS1v15。

这称作加密方案，详细可以查看，PKCS #1 v2.1 RSA 算法标准

RSA 私钥常遇到的是 pkcs1 和 pkcs8 两种标准，有时候还会遇到加密后的私钥，需要用密码加载或者去掉秘钥后再使用。 一般来说，常遇到的公钥是PEM格式，是对DER格式公钥的一种封装，内容包括以下几块，其中 base64 编码部分以64个字符为一行：

	块名称	块内容示例
	头	-----BEGIN RSA PUBLIC KEY-----
	公钥	base64.encode(public_key_string)
	尾	-----END RSA PUBLIC KEY-----

	头 -----BEGIN RSA PRIVATE KEY-----
	私钥	base64.encode(private_key_string)
	尾 -----END RSA PRIVATE KEY-----

以下是一个PEM格式公钥的示例：

	-----BEGIN RSA PUBLIC KEY-----
	MIIBCgKCAQEA+xGZ/wcz9ugFpP07Nspo6U17l0YhFiFpxxU4pTk3Lifz9R3zsIsu
	ERwta7+fWIfxOo208ett/jhskiVodSEt3QBGh4XBipyWopKwZ93HHaDVZAALi/2A
	+xTBtWdEo7XGUujKDvC2/aZKukfjpOiUI8AhLAfjmlcD/UZ1QPh0mHsglRNCmpCw
	mwSXA9VNmhz+PiB+Dml4WWnKW/VHo2ujTXxq7+efMU4H2fny3Se3KYOsFPFGZ1TN
	QSYlFuShWrHPtiLmUdPoP6CV2mML1tk+l7DIIqXrQhLUKDACeM5roMx0kLhUWB8P
	+0uj1CNlNN4JRZlC7xFfqiMbFRU9Z4N6YwIDAQAB
	-----END RSA PUBLIC KEY-----

DEMO 2 - RSA

	package main

	import (
		"crypto/rsa"
		"crypto/rand"
		"crypto/x509"
		"os"
		"encoding/pem"
		"fmt"
	)

	func GenerateKeyFiles(bits int){
		privateKey, err := rsa.GenerateKey(rand.Reader, bits)
		if err!=nil{
			panic(err)
		}

		privateFile, err := os.Create("private.pem")
		if err!=nil{
			panic(err)
		}
		defer privateFile.Close()

		X509PrivateKey := x509.MarshalPKCS1PrivateKey(privateKey)
		privateBlock:= pem.Block{Type: "RSA Private Key", Bytes:X509PrivateKey}

		// save to private.pem
		pem.Encode(privateFile, &privateBlock)

		publicKey := privateKey.PublicKey
		publicFile, err := os.Create("public.pem")
		if err!=nil{
			panic(err)
		}
		defer publicFile.Close()

		X509PublicKey, err:= x509.MarshalPKIXPublicKey(&publicKey)
		if err!=nil{
			panic(err)
		}
		publicBlock:= pem.Block{Type: "RSA Public Key",Bytes:X509PublicKey}

		// save to public.pem
		pem.Encode(publicFile,&publicBlock)
	}

	func RSA_Encrypt(plainText []byte,path string)[]byte{
		file, err := os.Open(path)
		if err!=nil{
			panic(err)
		}
		defer file.Close()

		info, _ := file.Stat()
		buf := make([]byte,info.Size())
		file.Read(buf)

		block, _ := pem.Decode(buf)
		publicKeyInterface, err := x509.ParsePKIXPublicKey(block.Bytes)
		if err!=nil{
			panic(err)
		}
		publicKey := publicKeyInterface.(*rsa.PublicKey)

		cipherText, err := rsa.EncryptPKCS1v15(rand.Reader, publicKey, plainText)
		if err!=nil{
			panic(err)
		}
		return cipherText
	}

	func RSA_Decrypt(cipherText []byte,path string) []byte{
		file, err := os.Open(path)
		if err!=nil{
			panic(err)
		}
		defer file.Close()

		info, _ := file.Stat()
		buf := make([]byte,info.Size())
		file.Read(buf)

		block, _ := pem.Decode(buf)
		privateKey, err := x509.ParsePKCS1PrivateKey(block.Bytes)
		if err!=nil{
			panic(err)
		}
		plainText,_:=rsa.DecryptPKCS1v15(rand.Reader,privateKey,cipherText)
		return plainText
	}


	func main(){
		message:=[]byte("hello world")
		GenerateKeyFiles(2048)

		cipherText:=RSA_Encrypt(message,"public.pem")
		fmt.Printf("RSA_Encrypt: %x\n", string(cipherText))

		plainText := RSA_Decrypt(cipherText, "private.pem")
		fmt.Println("RSA_Decrypt:", string(plainText))
	}


DEMO 3 - RSA Verify:

	package main

	import (
	    "os"
	    "fmt"
	    "log"
	    "errors"
	    "io/ioutil"
	    "crypto"
	    "crypto/rsa"
	    "crypto/rand"
	    "crypto/x509"
	    "crypto/sha256"
	    "encoding/pem"
	    "encoding/base64"
	)

	func GenerateKey(bits int) (*rsa.PrivateKey, *rsa.PublicKey, error) {
		privateKey, err := rsa.GenerateKey(rand.Reader, bits)
		if err!=nil{
			panic(err)
		}
		publicKey := &privateKey.PublicKey
		return privateKey, publicKey, err
	}

	func PrivateKeyPemFile(privatekey *rsa.PrivateKey, filename string) error {
	    var keybytes []byte = x509.MarshalPKCS1PrivateKey(privatekey)
	    block := &pem.Block{
	        Type  : "RSA PRIVATE KEY",
	        Bytes :  keybytes,
	    }
	    file, err := os.Create(filename)
	    if err != nil {
	        return err
	    }
	    err = pem.Encode(file, block)
	    if err != nil {
	        return err
	    }
	    return nil
	}

	func PublicKeyPemFile(publickey *rsa.PublicKey, filename string) error {
	    keybytes, err := x509.MarshalPKIXPublicKey(publickey)
	    if err != nil {
	        return err
	    }
	    block := &pem.Block{
	        Type  : "PUBLIC KEY",
	        Bytes :  keybytes,
	    }
	    file, err := os.Create(filename)
	    if err != nil {
	        return err
	    }
	    err = pem.Encode(file, block)
	    if err != nil {
	        return err
	    }
	    return nil
	}

	func PrivateKeyPemLoad(keyfile string) (*rsa.PrivateKey, error) {
	    keybuffer, err := ioutil.ReadFile(keyfile)
	    if err != nil {
	        return nil, err
	    }

	    block, _ := pem.Decode([]byte(keybuffer))
	    if block == nil {
	        return nil, errors.New("private key error!")
	    }

	    privatekey, err := x509.ParsePKCS1PrivateKey(block.Bytes)
	    if err != nil {
	        return nil, errors.New("parse private key error!")
	    }

	    return privatekey, nil
	}

	func PublicKeyPemLoad(keyfile string) (*rsa.PublicKey, error) {
	    keybuffer, err := ioutil.ReadFile(keyfile)
	    if err != nil {
	        return nil, err
	    }

	    block, _ := pem.Decode(keybuffer)
	    if block == nil {
	        return nil, errors.New("public key error")
	    }

	    pubkeyinterface, err := x509.ParsePKIXPublicKey(block.Bytes)
	    if err != nil {
	        return nil, err
	    }

	    publickey := pubkeyinterface.(*rsa.PublicKey)
	    return publickey, nil
	}

	func PrivateKeyPemBuffer(privatekey *rsa.PrivateKey) (string, error) {
	    var keybytes []byte = x509.MarshalPKCS1PrivateKey(privatekey)
	    block := pem.Block{
	        Type  : "RSA PRIVATE KEY",
	        Bytes :  keybytes,
	    }

	    var keybuffer []byte = pem.EncodeToMemory(&block)
	    return string(keybuffer), nil
	}

	func PublicKeyPemBuffer(publickey *rsa.PublicKey) (string, error) {
	    keybytes, err := x509.MarshalPKIXPublicKey(publickey)
	    if err != nil {
	        return "", err
	    }

	    block := pem.Block{
	        Type  : "PUBLIC KEY",
	        Bytes :  keybytes,
	    }

	    var keybuffer []byte = pem.EncodeToMemory(&block)
	    return string(keybuffer), nil
	}

	func PrivateKeyBufferLoad(key string) (*rsa.PrivateKey, error) {
	    block, _ := pem.Decode([]byte(key))
	    privatekey, err := x509.ParsePKCS1PrivateKey(block.Bytes)
	    if err != nil {
	        return nil, err
	    }
	    return privatekey, nil
	}

	func PublicKeyBufferLoad(key string) (*rsa.PublicKey, error) {
	    block, _ := pem.Decode([]byte(key))
	    inface, err := x509.ParsePKIXPublicKey(block.Bytes)
	    if err != nil {
	        return nil, err
	    }
		publickey := inface.(*rsa.PublicKey)
	    return publickey, nil
	}

	func PrivateKeyBase64(privatekey *rsa.PrivateKey) (string, error) {
	    var keybytes []byte = x509.MarshalPKCS1PrivateKey(privatekey)

	    keybase64 := base64.StdEncoding.EncodeToString(keybytes)
	    return keybase64, nil
	}

	func PublicKeyBase64(publickey *rsa.PublicKey) (string, error) {
	    keybytes, err := x509.MarshalPKIXPublicKey(publickey)
	    if err != nil {
	        return "", err
	    }

	    keybase64 := base64.StdEncoding.EncodeToString(keybytes)
	    return keybase64, nil
	}
	
	func PrivateKeyBase64Load(base64key string) (*rsa.PrivateKey, error) {
	    keybytes, err := base64.StdEncoding.DecodeString(base64key)
	    if err != nil {
	        return nil, fmt.Errorf("base64 decode failed, error=%s\n", err.Error())
	    }

	    privatekey, err := x509.ParsePKCS1PrivateKey(keybytes)
	    if err != nil {
	        return nil, errors.New("parse private key error!")
	    }

	    return privatekey, nil
	}

	func PublicKeyBase64Load(base64key string) (*rsa.PublicKey, error) {
	    keybytes, err := base64.StdEncoding.DecodeString(base64key)
	    if err != nil {
	        return nil, fmt.Errorf("base64 decode failed, error=%s\n", err.Error())
	    }

	    pubkeyinterface, err := x509.ParsePKIXPublicKey(keybytes)
	    if err != nil {
	        return nil, err
	    }

	    publickey := pubkeyinterface.(*rsa.PublicKey)
	    return publickey, nil
	}

	func Encrypt(plaintext string, publickey *rsa.PublicKey) (string, error) {
	    label := []byte("")
	    hash := sha256.New()
	    ciphertext, err := rsa.EncryptOAEP(hash, rand.Reader, publickey, []byte(plaintext), label)

	    decodedtext := base64.StdEncoding.EncodeToString(ciphertext)
	    return decodedtext, err
	}

	func Decrypt(ciphertext string, privatekey *rsa.PrivateKey) (string, error) {
	    decodedtext, err := base64.StdEncoding.DecodeString(ciphertext)
	    if err != nil {
	        return "", fmt.Errorf("base64 decode failed, error=%s\n", err.Error())
	    }

	    hash := sha256.New()
	    decryptedtext, err := rsa.DecryptOAEP(hash, rand.Reader, privatekey, decodedtext, nil)
	    if err != nil {
	        return "", fmt.Errorf("RSA decrypt failed, error=%s\n", err.Error())
	    }

	    return string(decryptedtext), nil
	}

	func Signature(privatekey *rsa.PrivateKey, hash crypto.Hash, msg string) ([]byte, error) {
		// hash = crypto.SHA256
		h := hash.New()
		h.Write([]byte(msg))
		hashed := h.Sum(nil)
		signature, err := rsa.SignPKCS1v15(rand.Reader, privatekey, hash, hashed)
		if err != nil {
			fmt.Println("Signature", err.Error(), hashed)
		}
		return signature, err
	}

	func Verify(publickey *rsa.PublicKey, hash crypto.Hash, msg string, signature []byte) bool{
		// hash = crypto.SHA256
		h := hash.New()
		h.Write([]byte(msg))
		hashed := h.Sum(nil)
		err := rsa.VerifyPKCS1v15(publickey, hash, hashed, signature)
		return err == nil
	}

	func main() {
	    // generate key
	    privatekey, publickey, err := GenerateKey(1024)
	    if err != nil {
	        log.Fatalf("Cannot generate RSA key\n")
	    }

	    // dump private key to file
	    err = PrivateKeyPemFile(privatekey, "private-1024.pem")
	    if err != nil {
	        log.Fatalf("Cannot dump private-1024.pem key file\n")
	    }
	    
	    // dump public key to file
	    err = PublicKeyPemFile(publickey, "public-1024.pem")
	    if err != nil {
	        log.Fatalf("Cannot dump public-1024.pem key file\n")
	    }

	    // load private/public key
	    // privatekey, err = PrivateKeyPemLoad("private-1024.pem")
	    // if privatekey == nil {
	    //     fmt.Printf("Cannot load private key\n");
	    // }
	    // publickey, err = PublicKeyPemLoad("public-1024.pem")
	    // if publickey == nil {
	    //     fmt.Printf("Cannot load public key\n");
	    // }

	    privateBuf, _ := PrivateKeyPemBuffer(privatekey)
	    publicBuf, _ := PublicKeyPemBuffer(publickey)

		privatekey, _ = PrivateKeyBufferLoad(privateBuf)
		publickey, _ = PublicKeyBufferLoad(publicBuf)

	    // load public key and encrypt message by public key
	    message := "apple vs banana"
	    cipher, err := Encrypt(message, publickey)
	    if err != nil {
	        log.Fatalf("Cannot encrypt message\n")
	    }
	    fmt.Printf("encrypt [%s]: (%x)\n", message, cipher)

	    // decrypt by private
	    plain, err := Decrypt(cipher, privatekey)
	    if err != nil {
	        log.Fatalf("Cannot decrypt message\n")
	    }
	    fmt.Printf("decrypt result is (%s)\n", plain)

	    signature, _ := Signature(privatekey, crypto.SHA256, message)
	    pass := Verify(publickey, crypto.SHA256, message, signature)
	    pasa := Verify(publickey, crypto.SHA256, "attack", signature)
	    format := "Signature: %x\nVerify [%s]: %t\nVerify [%s]: %t\n"
	    fmt.Printf(format, signature, message, pass, "attack", pasa)
	}



# 🚩 RegExp

	package main

	import (
		"fmt"
		"regexp"
	)

	func main() {
		// Compile the expression once, usually at init time.
		// Use raw strings to avoid having to quote the backslashes.
		var validID = regexp.MustCompile(`^[a-z]+\[[0-9]+\]$`)

		fmt.Println(validID.MatchString("adam[23]")) // true
		fmt.Println(validID.MatchString("eve[7]"))   // true
		fmt.Println(validID.MatchString("Job[48]"))  // false
		fmt.Println(validID.MatchString("snakey"))   // false
	}


## Compile(expr string) (`*Regexp`, error)

Compile parses a regular expression and returns, if successful, a Regexp object that can be used to match against text.

When matching against text, the regexp returns a match that begins as early as possible in the input (leftmost), and among those it chooses the one that a backtracking search would have found first. This so-called leftmost-first matching is the same semantics that Perl, Python, and other implementations use, although this package implements it without the expense of backtracking. For POSIX leftmost-longest matching, see CompilePOSIX.

## MustCompile(str string) `*Regexp`

MustCompile is like Compile but panics if the expression cannot be parsed. It simplifies safe initialization of global variables holding compiled regular expressions.


## Expand(dst []byte, template []byte, src []byte, match []int) []byte
Expand appends template to dst and returns the result; during the append, Expand replaces variables in the template with corresponding matches drawn from src. The match slice should have been returned by FindSubmatchIndex.

In the template, a variable is denoted by a substring of the form $name or ${name}, where name is a non-empty sequence of letters, digits, and underscores. A purely numeric name like $1 refers to the submatch with the corresponding index; other names refer to capturing parentheses named with the (?P<name>...) syntax. A reference to an out of range or unmatched index or a name that is not present in the regular expression is replaced with an empty slice.

In the $name form, name is taken to be as long as possible: $1x is equivalent to ${1x}, not ${1}x, and, $10 is equivalent to ${10}, not ${1}0.

To insert a literal $ in the output, use $$ in the template.

Code:

	content := []byte(`
	    # comment line
	    option1: value1
	    option2: value2

	    # another comment line
	    option3: value3
	`)

	// Regex pattern captures "key: value" pair from the content.
	pattern := regexp.MustCompile(`(?m)(?P<key>\w+):\s+(?P<value>\w+)$`)

	// Template to convert "key: value" to "key=value" by
	// referencing the values captured by the regex pattern.
	template := []byte("$key=$value\n")

	result := []byte{}

	// For each match of the regex in the content.
	for _, submatches := range pattern.FindAllSubmatchIndex(content, -1) {
	    // Apply the captured submatches to the template and append the output
	    // to the result.
	    result = pattern.Expand(result, template, content, submatches)
	}
	fmt.Println(string(result))

Output:

	option1=value1
	option2=value2
	option3=value3

## ExpandString(dst []byte, template string, src string, match []int) []byte
ExpandString is like Expand but the template and source are strings. It appends to and returns a byte slice in order to give the calling code control over allocation.

Code:

	content := `
	    # comment line
	    option1: value1
	    option2: value2

	    # another comment line
	    option3: value3
	`

	// Regex pattern captures "key: value" pair from the content.
	pattern := regexp.MustCompile(`(?m)(?P<key>\w+):\s+(?P<value>\w+)$`)

	// Template to convert "key: value" to "key=value" by
	// referencing the values captured by the regex pattern.
	template := "$key=$value\n"

	result := []byte{}

	// For each match of the regex in the content.
	for _, submatches := range pattern.FindAllStringSubmatchIndex(content, -1) {
	    // Apply the captured submatches to the template and append the output
	    // to the result.
	    result = pattern.ExpandString(result, template, content, submatches)
	}
	fmt.Println(string(result))

Output:

	option1=value1
	option2=value2
	option3=value3

## Find(b []byte) []byte
Find returns a slice holding the text of the leftmost match in b of the regular expression. A return value of nil indicates no match.

Code:

	re := regexp.MustCompile(`foo.?`)
	fmt.Printf("%q\n", re.Find([]byte(`seafood fool`)))  // "food"

## FindAll(b []byte, n int) [][]byte

FindAll is the 'All' version of Find; it returns a slice of all successive matches of the expression, as defined by the 'All' description in the package comment. A return value of nil indicates no match.

Code:

	re := regexp.MustCompile(`foo.?`)
	fmt.Printf("%q\n", re.FindAll([]byte(`seafood fool`), -1)) // ["food" "fool"]

## FindAllIndex(b []byte, n int) [][]int
FindAllIndex is the 'All' version of FindIndex; it returns a slice of all successive matches of the expression, as defined by the 'All' description in the package comment. A return value of nil indicates no match.


## FindAllString(s string, n int) []string
FindAllString is the 'All' version of FindString; it returns a slice of all successive matches of the expression, as defined by the 'All' description in the package comment. A return value of nil indicates no match.

Code:

	re := regexp.MustCompile(`a.`)
	fmt.Println(re.FindAllString("paranormal", -1))    // len 3 [ar an al]
	fmt.Println(re.FindAllString("paranormal", 2))     // len 2 [ar an]
	fmt.Println(re.FindAllString("graal", -1))         // len 1 [aa]
	fmt.Println(re.FindAllString("none", -1))          // len 0 []


## FindAllStringIndex(s string, n int) [][]int

FindAllStringIndex is the 'All' version of FindStringIndex; it returns a slice of all successive matches of the expression, as defined by the 'All' description in the package comment. A return value of nil indicates no match.


## FindAllStringSubmatch(s string, n int) [][]string
FindAllStringSubmatch is the 'All' version of FindStringSubmatch; it returns a slice of all successive matches of the expression, as defined by the 'All' description in the package comment. A return value of nil indicates no match.

Code:

	re := regexp.MustCompile(`a(x*)b`)
	fmt.Printf("%q\n", re.FindAllStringSubmatch("-ab-", -1))       // [["ab" ""]]
	fmt.Printf("%q\n", re.FindAllStringSubmatch("-axxb-", -1))     // [["axxb" "xx"]]
	fmt.Printf("%q\n", re.FindAllStringSubmatch("-ab-axb-", -1))   // [["ab" ""] ["axb" "x"]]
	fmt.Printf("%q\n", re.FindAllStringSubmatch("-axxb-ab-", -1))  // [["axxb" "xx"] ["ab" ""]]


## FindAllStringSubmatchIndex(s string, n int) [][]int
FindAllStringSubmatchIndex is the 'All' version of FindStringSubmatchIndex; it returns a slice of all successive matches of the expression, as defined by the 'All' description in the package comment. A return value of nil indicates no match.

Code:

	re := regexp.MustCompile(`a(x*)b`)
	// Indices:
	//    01234567   012345678
	//    -ab-axb-   -axxb-ab-
	fmt.Println(re.FindAllStringSubmatchIndex("-ab-", -1))        // [[1 3 2 2]]
	fmt.Println(re.FindAllStringSubmatchIndex("-axxb-", -1))      // [[1 5 2 4]]
	fmt.Println(re.FindAllStringSubmatchIndex("-ab-axb-", -1))    // [[1 3 2 2] [4 7 5 6]]
	fmt.Println(re.FindAllStringSubmatchIndex("-axxb-ab-", -1))   // [[1 5 2 4] [6 8 7 7]]
	fmt.Println(re.FindAllStringSubmatchIndex("-foo-", -1))       // []


## FindAllSubmatch(b []byte, n int) [][][]byte
FindAllSubmatch is the 'All' version of FindSubmatch; it returns a slice of all successive matches of the expression, as defined by the 'All' description in the package comment. A return value of nil indicates no match.

Code:

	re := regexp.MustCompile(`foo(.?)`)
	fmt.Printf("%q\n", re.FindAllSubmatch([]byte(`seafood fool`), -1))

Output:

	[["food" "d"] ["fool" "l"]]

## FindAllSubmatchIndex(b []byte, n int) [][]int
FindAllSubmatchIndex is the 'All' version of FindSubmatchIndex; it returns a slice of all successive matches of the expression, as defined by the 'All' description in the package comment. A return value of nil indicates no match.

Code:

	content := []byte(`
	    # comment line
	    option1: value1
	    option2: value2
	`)
	// Regex pattern captures "key: value" pair from the content.
	pattern := regexp.MustCompile(`(?m)(?P<key>\w+):\s+(?P<value>\w+)$`)
	allIndexes := pattern.FindAllSubmatchIndex(content, -1)
	for _, loc := range allIndexes {
	    fmt.Println(loc)
	    fmt.Println(string(content[loc[0]:loc[1]]))
	    fmt.Println(string(content[loc[2]:loc[3]]))
	    fmt.Println(string(content[loc[4]:loc[5]]))
	}

Output:

	[18 33 18 25 27 33]
	option1: value1
	option1
	value1
	[35 50 35 42 44 50]
	option2: value2
	option2
	value2


## FindIndex(b []byte) (loc []int)
FindIndex returns a two-element slice of integers defining the location of the leftmost match in b of the regular expression. The match itself is at b[loc[0]:loc[1]]. A return value of nil indicates no match.

Code:

	content := []byte(`
	    # comment line
	    option1: value1
	    option2: value2
	`)
	// Regex pattern captures "key: value" pair from the content.
	pattern := regexp.MustCompile(`(?m)(?P<key>\w+):\s+(?P<value>\w+)$`)

	loc := pattern.FindIndex(content)
	fmt.Println(loc)                               // [18 33]
	fmt.Println(string(content[loc[0]:loc[1]]))    // option1: value1


## FindReaderIndex(r io.RuneReader) (loc []int)
FindReaderIndex returns a two-element slice of integers defining the location of the leftmost match of the regular expression in text read from the RuneReader. The match text was found in the input stream at byte offset loc[0] through loc[1]-1. A return value of nil indicates no match.


## FindReaderSubmatchIndex(r io.RuneReader) []int
FindReaderSubmatchIndex returns a slice holding the index pairs identifying the leftmost match of the regular expression of text read by the RuneReader, and the matches, if any, of its subexpressions, as defined by the 'Submatch' and 'Index' descriptions in the package comment. A return value of nil indicates no match.


## FindString(s string) string
FindString returns a string holding the text of the leftmost match in s of the regular expression. If there is no match, the return value is an empty string, but it will also be empty if the regular expression successfully matches an empty string. Use FindStringIndex or FindStringSubmatch if it is necessary to distinguish these cases.

Code:

	re := regexp.MustCompile(`foo.?`)
	fmt.Printf("%q\n", re.FindString("seafood fool"))   // "food"
	fmt.Printf("%q\n", re.FindString("meat"))           // ""

## FindStringIndex(s string) (loc []int)
FindStringIndex returns a two-element slice of integers defining the location of the leftmost match in s of the regular expression. The match itself is at s[loc[0]:loc[1]]. A return value of nil indicates no match.

Code:

	re := regexp.MustCompile(`ab?`)
	fmt.Println(re.FindStringIndex("tablett"))          // [1 3]
	fmt.Println(re.FindStringIndex("foo") == nil)       // true


## FindStringSubmatch(s string) []string
FindStringSubmatch returns a slice of strings holding the text of the leftmost match of the regular expression in s and the matches, if any, of its subexpressions, as defined by the 'Submatch' description in the package comment. A return value of nil indicates no match.

Code:

	re := regexp.MustCompile(`a(x*)b(y|z)c`)
	fmt.Printf("%q\n", re.FindStringSubmatch("-axxxbyc-")) // ["axxxbyc" "xxx" "y"]
	fmt.Printf("%q\n", re.FindStringSubmatch("-abzc-"))    // ["abzc" "" "z"]



## FindStringSubmatchIndex(s string) []int
FindStringSubmatchIndex returns a slice holding the index pairs identifying the leftmost match of the regular expression in s and the matches, if any, of its subexpressions, as defined by the 'Submatch' and 'Index' descriptions in the package comment. A return value of nil indicates no match.


## FindSubmatch(b []byte) [][]byte
FindSubmatch returns a slice of slices holding the text of the leftmost match of the regular expression in b and the matches, if any, of its subexpressions, as defined by the 'Submatch' descriptions in the package comment. A return value of nil indicates no match.

Code:

	re := regexp.MustCompile(`foo(.?)`)
	fmt.Printf("%q\n", re.FindSubmatch([]byte(`seafood fool`))) // ["food" "d"]


## FindSubmatchIndex(b []byte) []int
FindSubmatchIndex returns a slice holding the index pairs identifying the leftmost match of the regular expression in b and the matches, if any, of its subexpressions, as defined by the 'Submatch' and 'Index' descriptions in the package comment. A return value of nil indicates no match.


## LiteralPrefix() (prefix string, complete bool)
LiteralPrefix returns a literal string that must begin any match of the regular expression re. It returns the boolean true if the literal string comprises the entire regular expression.


## Longest()
Longest makes future searches prefer the leftmost-longest match. That is, when matching against text, the regexp returns a match that begins as early as possible in the input (leftmost), and among those it chooses a match that is as long as possible. This method modifies the Regexp and may not be called concurrently with any other methods.

## Match(b []byte) bool
Match reports whether the byte slice b contains any match of the regular expression re.

Code:

	re := regexp.MustCompile(`foo.?`)
	fmt.Println(re.Match([]byte(`seafood fool`)))     // true


## MatchReader(r io.RuneReader) bool
MatchReader reports whether the text returned by the RuneReader contains any match of the regular expression re.

## MatchString(s string) bool
MatchString reports whether the string s contains any match of the regular expression re.

Code:

	re := regexp.MustCompile(`(gopher){2}`)
	fmt.Println(re.MatchString("gopher"))              // false
	fmt.Println(re.MatchString("gophergopher"))        // true
	fmt.Println(re.MatchString("gophergophergopher"))  // true


## ReplaceAll(src, repl []byte) []byte
ReplaceAll returns a copy of src, replacing matches of the Regexp with the replacement text repl. Inside repl, $ signs are interpreted as in Expand, so for instance $1 represents the text of the first submatch.

## ReplaceAllFunc(src []byte, repl func([]byte) []byte) []byte
ReplaceAllFunc returns a copy of src in which all matches of the Regexp have been replaced by the return value of function repl applied to the matched byte slice. The replacement returned by repl is substituted directly, without using Expand.

## ReplaceAllLiteral(src, repl []byte) []byte
ReplaceAllLiteral returns a copy of src, replacing matches of the Regexp with the replacement bytes repl. The replacement repl is substituted directly, without using Expand.

## ReplaceAllLiteralString(src, repl string) string
ReplaceAllLiteralString returns a copy of src, replacing matches of the Regexp with the replacement string repl. The replacement repl is substituted directly, without using Expand.

Code:

	re := regexp.MustCompile(`a(x*)b`)
	fmt.Println(re.ReplaceAllLiteralString("-ab-axxb-", "T"))     // -T-T-
	fmt.Println(re.ReplaceAllLiteralString("-ab-axxb-", "$1"))    // -$1-$1-
	fmt.Println(re.ReplaceAllLiteralString("-ab-axxb-", "${1}"))  // -${1}-${1}-

## ReplaceAllString(src, repl string) string
ReplaceAllString returns a copy of src, replacing matches of the Regexp with the replacement string repl. Inside repl, $ signs are interpreted as in Expand, so for instance $1 represents the text of the first submatch.

Code:

	re := regexp.MustCompile(`a(x*)b`)
	fmt.Println(re.ReplaceAllString("-ab-axxb-", "T"))            // -T-T-
	fmt.Println(re.ReplaceAllString("-ab-axxb-", "$1"))           // --xx-
	fmt.Println(re.ReplaceAllString("-ab-axxb-", "$1W"))          // ---
	fmt.Println(re.ReplaceAllString("-ab-axxb-", "${1}W"))        // -W-xxW-

More:

	package main

	import (
		"fmt"
		"regexp"
	)

	func main() {
		re := regexp.MustCompile(`a(\w*)b`)
		fmt.Println(re.ReplaceAllString("-axxb + axzb-", "T"))      // -T + T-
		fmt.Println(re.ReplaceAllString("-axxb + axzb-", "$1"))     // -xx + xz-
		fmt.Println(re.ReplaceAllString("-axxb + axzb-", "$1W"))    // - + -
		fmt.Println(re.ReplaceAllString("-axxb + axzb-", "${1}W"))  // -xxW + xzW-
	}


## ReplaceAllStringFunc(src string, repl func(string) string) string

ReplaceAllStringFunc returns a copy of src in which all matches of the Regexp have been replaced by the return value of function repl applied to the matched substring. The replacement returned by repl is substituted directly, without using Expand.


## Split(s string, n int) []string
Split slices s into substrings separated by the expression and returns a slice of the substrings between those expression matches.

The slice returned by this method consists of all the substrings of s not contained in the slice returned by FindAllString. When called on an expression that contains no metacharacters, it is equivalent to strings.SplitN.

Example:

	s := regexp.MustCompile("a*").Split("abaabaccadaaae", 5)
	// s: ["", "b", "b", "c", "cadaaae"]

The count determines the number of substrings to return:

n > 0: at most n substrings; the last substring will be the unsplit remainder.
n == 0: the result is nil (zero substrings)
n < 0: all substrings

Code:

	a := regexp.MustCompile(`a`)
	fmt.Println(a.Split("banana", -1))      // len 4 [b n n ]
	fmt.Println(a.Split("banana", 0))       // len 0 []
	fmt.Println(a.Split("banana", 1))       // len 1 [banana]
	fmt.Println(a.Split("banana", 2))       // len 2 [b nana]
	zp := regexp.MustCompile(`z+`)
	fmt.Println(zp.Split("pizza", -1))      // len 2 [pi a]
	fmt.Println(zp.Split("pizza", 0))       // len 0 []
	fmt.Println(zp.Split("pizza", 1))       // len 1 [pizza]
	fmt.Println(zp.Split("pizza", 2))       // len 2 [pi a]

# 🚩 Go Webview GUI
[Go Webview](https://github.com/zserge/webview)
[GoDoc Webview](https://godoc.org/github.com/zserge/webview)
[go-bindata](https://github.com/jteeuwen/go-bindata)

在 Linux 系统下 webview 还有依赖 GTK 图形库和 Webkit 2 浏览器内核，需要预先安装：

	apt install gtk+-3.0 webkit2gtk-4.0

WebView 安装后自带示例，webview/examples：

	# go get github.com/zserge/webview

	package main

	import "github.com/zserge/webview"

	func main() {
		// Open Web Page in a 800x600 resizable window
		webview.Open("Webview GoDoc", "https://godoc.org/github.com/zserge/webview", 800, 600, true)
	}

在 Windows 平台编译命令传入 CGO 链接参数 `-ldflags="-H windowsgui"` 来消除控制台窗口：

	# Linux
	$ go build -o webview-example && ./webview-example

	# MacOS uses app bundles for GUI apps
	$ mkdir -p example.app/Contents/MacOS
	$ go build -o example.app/Contents/MacOS/example
	$ open example.app # Or click on the app in Finder

	# Windows requires special linker flags for GUI apps.
	# It's also recommended to use TDM-GCC-64 compiler for CGo.
	# http://tdm-gcc.tdragon.net/download
	$ go build -ldflags="-H windowsgui" -o webview-example.exe

运行一个本地服务，提供页面图形界面，http.Handle() 可以接受一个静态文件服务器，因为使用了虚拟目录 `/static/`，需要手动去前缀，如果映射的是根目录则不需要这一步处理：

	package main

	import (
		"github.com/zserge/webview"
		"log"
		"net"
		"net/http"
	)

	func startServer() string {
		ln, err := net.Listen("tcp", "127.0.0.1:0") // Port 0 for randomly
		if err != nil {
			log.Fatal(err)
		}
		go func() {
			defer ln.Close()
			http.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
				w.Write([]byte(`<h1>Go Working!</h1>`))
			})
			http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./"))))
			log.Fatal(http.Serve(ln, nil))
		}()
		return "http://" + ln.Addr().String()
	}

	func handleRPC(w webview.WebView, data string) {
		log.Println("Handle PRC", data)
		switch data {
		case "close":
			w.Terminate()
		case "fullscreen":
			w.SetFullscreen(true)
		}
	}

	func main() {
		url := startServer() + "/static/readme_bizCharts.html"
		w := webview.New(webview.Settings{
			Width:                  980,
			Height:                 640,
			Title:                  "Simple Window demo",
			Resizable:              true,
			URL:                    url,
			ExternalInvokeCallback: handleRPC,
		})
		log.Println("Serve on: ", url)
		w.SetColor(255, 0, 255, 128)
		defer w.Exit()
		w.Run()
	}



## go-bindata 资源打包

go-bindata 是一个资源打包工具，可以将脚本、页面、样式、图片等等文件打包到一个 Go 原代码文件，方便发布管理。

	go get -u github.com/jteeuwen/go-bindata/...

打包命令

	$ go-bindata data/
	$ go-bindata data/...
	$ go-bindata -o myfile.go data/
	$ go-bindata dir1/... /path/to/dir2/... dir3
	$ go-bindata -ignore=\\.gitignore data/...

访问资源文件

	data, err := Asset("pub/style/foo.css")
	if err != nil {
		// Asset was not found.
	}
	
	// use asset data

## Webview API ❖

	func Debug(a ...interface{})
	func Debugf(format string, a ...interface{})
	func Open(title, url string, w, h int, resizable bool) error
	type DialogType
	type ExternalInvokeCallbackFunc
	type Settings
	type WebView
	func New(settings Settings) WebView

	const (
	    DialogTypeOpen DialogType = iota
	    DialogTypeSave
	    DialogTypeAlert
	)

	type ExternalInvokeCallbackFunc func(w WebView, data string)

	type Settings
	
	type Settings struct {
	    Title string
	    URL string
	    Width int
	    Height int
	    Resizable bool
	    Debug bool
	    ExternalInvokeCallback ExternalInvokeCallbackFunc
	}

	type WebView interface {
	    Run()
	    Loop(blocking bool) bool
	    SetTitle(title string)
	    SetFullscreen(fullscreen bool)
	    SetColor(r, g, b, a uint8)
	    Eval(js string) error
	    InjectCSS(css string)
	    Dialog(dlgType DialogType, flags int, title string, arg string) string
	    Terminate()
	    Dispatch(func())
	    Exit()
	    Bind(name string, v interface{}) (sync func(), err error)
	}

For the most simple use cases there is only one function:

	int webview(const char *title, const char *url, int width, int height, int resizable);

The following URL schemes are supported:

`http://`, `https://`, `file:///` can be useful if you want to unpack HTML/CSS assets to some temporary directory and point a webview to open index.html from there.

`data:text/html,<html>...</html>` allows to pass short HTML data inline without using a web server or polluting the file system. Further modifications of the webview contents can be done via JavaScript bindings.

If you want to have more control over the app lifecycle you can use the following functions:

	struct webview webview = {
	  .title = title,
	  .url = url,
	  .width = w,
	  .height = h,
	  .debug = debug,
	  .resizable = resizable,
	};
	/* Create webview window using the provided options */
	webview_init(&webview);
	/* Main app loop, can be either blocking or non-blocking */
	while (webview_loop(&webview, blocking) == 0);
	/* Destroy webview window, often exits the app */
	webview_exit(&webview);

	/* To change window title later: */
	webview_set_title(&webview, "New title");

	/* To terminate the webview main loop: */
	webview_terminate(&webview);

	/* To print logs to stderr, MacOS Console or DebugView: */
	webview_debug("exited: %d\n", 1);

To evaluate arbitrary JavaScript code use the following C function:

	webview_eval(&webview, "alert('hello, world');");

Webview 提供 `webview.external_invoke_cb` 给页面 JavaScript 脚本提供交互接口:

	// C
	void my_cb(struct webview *w, const char *arg) {
		...
	}

	// JS
	window.external.invoke('some arg');
	// Exactly one string argument must be provided, to pass more complex objects
	// serialize them to JSON and parse it in C. To pass binary data consider using
	// base64.
	window.external.invoke(JSON.stringify({fn: 'sum', x: 5, y: 3}));

Webview library is meant to be used from a single UI thread only. So if you want to call `webview_eval` or `webview_terminate` from some background thread

you have to use `webview_dispatch` to post some arbitrary function with some context to be executed inside the main UI thread:

	// This function will be executed on the UI thread
	void render(struct webview *w, void *arg) {
	  webview_eval(w, ......);
	}

	// Dispatch render() function from another thread:
	webview_dispatch(w, render, some_arg);

Window-Go DEMO：

	package main

	import (
		"log"
		"net"
		"net/http"
		"strconv"
		"strings"

		"github.com/zserge/webview"
	)

	const (
		windowWidth  = 480
		windowHeight = 320
	)

	var indexHTML = `
	<!doctype html>
	<html>
		<head>
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<style>
				body {width:100%;width:100%;overflow:hidden;}
				button {border-radius:16px;background:#f0f0f0;border:1px solid #dddddd;margin:2px;box-shadow:1px 1px 2px #28282880;}
				input {border:none;outline:1px solid #dddddd;margin:2px;}
			</style>
			<script>
				function changeTitle(e){
					invoke('changeTitle:'+document.getElementById('new-title').value)
				}
				function changeColor(e){
					invoke('changeColor:'+document.getElementById('new-color').value)
				}
				function invoke(e){
					external.invoke(e)
				}
			</script>
		</head>
		<body>
			<div>
				<button onclick="invoke('fullscreen')">Fullscreen</button>
				<button onclick="invoke('unfullscreen')">Unfullscreen</button>
				<button onclick="invoke('open')">Open</button>
				<button onclick="invoke('opendir')">Open directory</button>
				<button onclick="invoke('save')">Save</button>
				<button onclick="invoke('message')">Message</button>
				<button onclick="invoke('info')">Info</button>
				<button onclick="invoke('warning')">Warning</button>
				<button onclick="invoke('error')">Error</button>
				<button onclick="invoke('close')">Close</button>
				<button onclick="invoke(event)">Post Event</button>
				<button onclick="invoke('goto:https://godoc.org/github.com/zserge/webview')">WebView</button>
				<button onclick="location=('https://godoc.org/github.com/zserge/webview')">WebView</button>
			</div>
			<div>
				<button onclick="changeTitle(event)"> Change title </button>
				<input id="new-title" type="text" />
			</div>
			<div>
				<button onclick="changeColor(event)"> Change color </button>
				<input id="new-color" value="#e91e63" type="color" />
			</div>
		</body>
	</html>
	`

	func startServer() string {
		ln, err := net.Listen("tcp", "127.0.0.1:0") // Port 0 for randomly
		if err != nil {
			log.Fatal(err)
		}
		go func() {
			defer ln.Close()
			http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
				w.Write([]byte(indexHTML))
			})
			log.Fatal(http.Serve(ln, nil))
		}()
		return "http://" + ln.Addr().String()
	}

	func handleRPC(w webview.WebView, data string) {
		switch {
		case data == "close":
			w.Terminate()
		case data == "fullscreen":
			w.SetFullscreen(true)
		case data == "unfullscreen":
			w.SetFullscreen(false)
		case data == "open":
			log.Println("open", w.Dialog(webview.DialogTypeOpen, 0, "Open file", ""))
		case data == "opendir":
			log.Println("open", w.Dialog(webview.DialogTypeOpen, webview.DialogFlagDirectory, "Open directory", ""))
		case data == "save":
			log.Println("save", w.Dialog(webview.DialogTypeSave, 0, "Save file", ""))
		case data == "message":
			w.Dialog(webview.DialogTypeAlert, 0, "Hello", "Hello, world!")
		case data == "info":
			w.Dialog(webview.DialogTypeAlert, webview.DialogFlagInfo, "Hello", "Hello, info!")
		case data == "warning":
			w.Dialog(webview.DialogTypeAlert, webview.DialogFlagWarning, "Hello", "Hello, warning!")
		case data == "error":
			w.Dialog(webview.DialogTypeAlert, webview.DialogFlagError, "Hello", "Hello, error!")
		case strings.HasPrefix(data, "changeTitle:"):
			w.SetTitle(strings.TrimPrefix(data, "changeTitle:"))
		case strings.HasPrefix(data, "goto:"):
			url := strings.TrimPrefix(data, "goto:")
			log.Println("Goto: ", url)
			webview.Open("View Web", url, 800, 600, true)
		case strings.HasPrefix(data, "changeColor:"):
			hex := strings.TrimPrefix(strings.TrimPrefix(data, "changeColor:"), "#")
			num := len(hex) / 2
			if !(num == 3 || num == 4) {
				log.Println("Color must be RRGGBB or RRGGBBAA")
				return
			}
			i, err := strconv.ParseUint(hex, 16, 64)
			if err != nil {
				log.Println(err)
				return
			}
			if num == 3 {
				r := uint8((i >> 16) & 0xFF)
				g := uint8((i >> 8) & 0xFF)
				b := uint8(i & 0xFF)
				w.SetColor(r, g, b, 255)
				return
			}
			if num == 4 {
				r := uint8((i >> 24) & 0xFF)
				g := uint8((i >> 16) & 0xFF)
				b := uint8((i >> 8) & 0xFF)
				a := uint8(i & 0xFF)
				w.SetColor(r, g, b, a)
				return
			}
		default:
			log.Println("ExternalInvokeCallback Default: " + data)
		}
	}

	func main() {
		url := startServer()
		w := webview.New(webview.Settings{
			Width:                  windowWidth,
			Height:                 windowHeight,
			Title:                  "Simple window demo",
			Resizable:              true,
			URL:                    url,
			ExternalInvokeCallback: handleRPC,
		})
		log.Println("Serve on: ", url)
		w.SetColor(255, 0, 255, 128)
		defer w.Exit()
		w.Run()
	}

# 🚩 CLI Arguments & os.Args & flag

命令行参数：程序启动或者停止时候，在命令行中给定的参数就是命令行参数。例如 webstart -p 8080  

go 语言中提供了两种处理命令行参数的包，os.Agrs 和 flag。

os.Agrs 提供了简单的命令行参数，以命令行参数个数作为标识，参数列表是一个切片，索引 0 代表程序本身，1 代表第一个参数，以此类推，没有更细粒度的参数区分，使用起来简单。注意，切片中的第一个参数是该程序的路径，os.Args[1:] 保存所有程序命令行的原始参数。

flag 提供了更为科学的命令行参数处理办法，提供更细粒度的和更全的参数解析，推荐使用。

示例：

	package main

	import (
	    "os"
	    "fmt"
	)

	func main()  {
	    if len(os.Args) < 2 {
	        fmt.Println("no args")
	        return
	    }
	    println("script name： ",os.Args[0])
	    for i := range os.Args {
	        fmt.Printf("CLI Argument #%d : %s\n" ,i ,os.Args[i])

	    }
	}

	// script name：  ./demo.exe
	// demo abc xyz
	// CLI Argument #0 arg : ./demo.exe
	// CLI Argument #1 arg : abc
	// CLI Argument #2 arg : xyz

flag 包提供了一系列解析命令行参数的功能接口，定义的命令行参数格式有以下几种，即在命令行中传入参数的格式：

	-flag   // bool 类型参数
	-flag=x // 任意类型参数
	-flag x // 只支持非 bool 类型，特别 -flag 和 --flag 等效

然后再通过 flag.String(), Bool(), Int() 等方从命令行参数列表中提取数据，这些方法参数列表中，第一个为命令行接受的参数名称，参数二为默认值，参数三为描述信息，返回值是个指针，执行 flag.Parse() 方法后完成参数赋值。

Flag 类型是一个结构体，其定义如下：

	type Flag struct {
        Name     string // name as it appears on command line
        Usage    string // help message
        Value    Value  // value as set
        DefValue string // default value (as text); for usage message
	}

示例：

	package main

	import (
		"flag"
		"fmt"
	)

	func main() {
		ip := flag.String("ip", "192.168.0.22", "Server IP")
		port := flag.Int("port", 80, "Server port")
		flag.Parse()
		fmt.Println("IP", *ip)
		fmt.Println("Port", *port)
	}

	// go build ./demo.go && demo --port 8080 -ip 127.0.0.1
	// IP 127.0.0.1
	// Port 8080

另一种方式是通过 flag.StringVar()、 flag.IntVar()、flag.BoolVar() 等带 Var 后缀的方法将 flag 绑定到一个变量，再 flag.Parse() 解析得到参数。

	package main

	import (
		"flag"
		"fmt"
	)

	func main() {
		var ip string = ""
		var port int = 1024
		flag.StringVar(&ip, "ip", "192.168.0.22", "Server IP")
		flag.IntVar(&port, "port", 80, "Server port")
		flag.Parse()
		fmt.Println("IP", ip)
		fmt.Println("Port", port)
	}

	// go build ./demo.go && demo --ip 127.0.0.1 -port 1024
	// IP 127.0.0.1
	// Port 1024

flag.Parse() 除了解析参数，还会再多传没有定义的参数是提示用法，防止输入错误。



# 🚩 Go Android with gooid
[Android NDK][https://developer.android.google.cn/ndk/downloads/]
[gooid tools](https://github.com/gooid/tools)

Go 1.10 支持编译成 Android 的可执行文件和动态库，一般在 Android 中应用场景是用来写一些运行库，后台服务或一些工具程序等。

|GOARCH	|TOOLPATH					|LIBPATH	|GCC_H	|ABI|
|-------|---------------------------|-----------|-------|---|
|arm	|arm-linux-androideabi-4.9	|arm		|arm-linux-androideabi	|armeabi OR armeabi-v7a|
|arm64	|aarch64-linux-android-4.9	|arm64		|aarch64-linux-android	|arm64-v8a|
|386	|x86-4.9					|x86		|i686-linux-android		|x86|
|amd64	|x86_64-4.9					|x86_64		|x86_64-linux-android	|x86_64|

连接手机或仿真，进命令行运行 adb shell getprop ro.product.cpu.abilist （或是 adb shell getprop ro.product.cpu.abi）查看输出结果。比如 Andorid 7.0 arm 仿真执行结果如下：

	>adb shell getprop ro.product.cpu.abilist
	arm64-v8a,armeabi-v7a,armeabi

现在看到 ABI 支持 armeabi-v7a 和 armeabi，我们可以选定其中一个为我们要生成应用的 ABI，一般选 armeabi 或 x86 (因为 64 位的手机一般兼容 32 位）。确定 ABI 之后通过上表就可得到相对应的如 TOOLPATH, GOARCH 等的值，按 Windows 的表示法以下用 `%TOOLPATH%` 表示相应的值，如 ABI 为 armeabi 时 `%TOOLPATH%` 是 arm-linux-androideabi-4.9 。

下载 android-ndk-r16b-windows-x86_64.zip 并解压，将其中的 `sysroot` 拷贝到 `prebuilt\windows-x86_64\` 目录下。

`platforms\android-%SDK_API%\arch-%LIBPATH%\` 目录下的库拷贝一份到 `prebuilt\windows-x86_64\sysroot\` 目录。 并将其中的 `usr\include%GCC_H%\asm` 拷贝到上级目录。

把 %TOOLPATH%\prebuilt\windows-x86_64\bin 的完整路径加到环境变量PATH中，在命令行下面可以运行 %GCC_H%-gcc -v ，说明 NDK 就准备好了。

命令行环境设置和编译，下载 gooid tools，拉取对应 windows 或 linux 版的 gomobile：

	curl -#Lo %GOPATH%/bin/gomobile.exe https://github.com/gooid/tools/blob/master/gomobile/windows64/gomobile.exe?raw=true
	curl -#Lo %GOPATH%/bin/gomobile https://github.com/gooid/tools/blob/master/gomobile/linux64/gomobile?raw=true

并把它的路径同样设置到环境变量 PATH 中，GOPATH 如果已经设置好就不用管。linux 下要手动设置可执行权限：

	set GOPATH=???
	set GOOS=android
	set CGO_ENABLED=1
	set CGO_CFLAGS=-D__ANDROID_API__=%SDK_API%
	set GOARCH=%GOARCH%
	set CC=%GCC_H%-gcc

拉取 gooid

	go get github.com/gooid/gooid

测试编译，依次执行下面的命令，最后生成 wallpapertwinkle.apk

	cd %GOPATH%\src\github.com\gooid\gooid\examples\WallPaperTwinkle
	go build -buildmode c-shared -o basic\lib\%ABI%\libWallPaperTwinkle.so
	gomobile build -o wallpapertwinkle.apk basic

至此环境终于设置完成，可以开始写你自己的APK了。

	package main

	import (
		"log"

		"github.com/gooid/gooid"
		"github.com/gooid/gooid/input"
	)

	func main() {
		context := app.Callbacks{
			Event: event,
		}
		app.SetMainCB(func(ctx *app.Context) {
			ctx.Run(context)
		})
		for app.Loop() {
		}
		log.Println("done.")
	}

	var bWallpaper = false

	func event(act *app.Activity, e *app.InputEvent) {
		if mot := e.Motion(); mot != nil {
			if mot.GetAction() == input.KEY_EVENT_ACTION_UP {
				log.Println("event:", mot)

				bWallpaper = !bWallpaper
				if bWallpaper {
					act.SetWindowFlags(app.FLAG_SHOW_WALLPAPER, 0)
				} else {
					act.SetWindowFlags(0, app.FLAG_SHOW_WALLPAPER)
				}
			}
		}
	}


# 🚩 unsafe.Pointer

Go语言是个强类型语言。也就是说Go对类型要求严格，不同类型不能进行赋值操作。指针也是具有明确类型的对象，进行严格类型检查。下面的代码会产生编译错误 ：

	package main
	import (
	    "fmt"
	)

	func main() {
	    u := uint32(32)
	    i := int32(1)
	    fmt.Println(&u, &i)
	    p := &i          // p 的类型是 *int32
	    p = &u           // &u 的类型是 *uint32，不能赋值
	    p = (*int32)(&u) // 这种类型转换语法也是无效的  
	    fmt.Println(p)
	}

unsafe 包提供的 Pointer 方法可以完成这个任务

	package main
	import (
	    "fmt"
	    "unsafe"
	)
	func main() {
	    u := uint32(32)
	    i := int32(1)
	    fmt.Println(&u, &i)
	    p := &i
	    p = (*int32)unsafe.Pointer(&u)
	    fmt.Println(p)
	}

注意：实际使用中unsafe可用场景很少，稍微复杂一点的结构，比如 struct 根本不能适用。

简洁回顾两个知识点。第一是 unsafe.Pointer 可以让你的变量在不同的指针类型转来转去，也就是表示为任意可寻址的指针类型。第二是 uintptr 常用于与 unsafe.Pointer 打配合，用于做指针运算，巧妙地很。注意 uintptr 类型是不能存储在临时变量中的。因为从 GC 的角度来看，uintptr 类型的临时变量只是一个无符号整数，并不知道它是一个指针地址。


因为它是 unsafe（不安全的），但是在特殊的场景下，使用了它。可以打破 Go 的类型和内存安全机制，让你获得眼前一亮的惊喜效果。它表示任意类型且可寻址的指针值，可以在不同的指针类型之间进行转换（类似 C 语言的 void * 的用途）

在上小节中，我们对普通的指针变量进行了修改。 Offsetof 能做更复杂一点的事：

	type Num struct{
	    i string
	    j int64
	}

	func main(){
	    n := Num{i: "ABC", j: 1}
	    nPointer := unsafe.Pointer(&n)

	    niPointer := (*string)(unsafe.Pointer(nPointer))
	    *niPointer = "煎鱼"

	    njPointer := (*int64)(unsafe.Pointer(uintptr(nPointer) + unsafe.Offsetof(n.j)))
	    *njPointer = 2

	    fmt.Printf("n.i: %s, n.j: %d", n.i, n.j)
	}


输出结果：

	n.i: 煎鱼, n.j: 2


在剖析这段代码做了什么事之前，我们需要了解结构体的一些基本概念：

- 结构体的成员变量在内存存储上是一段连续的内存
- 结构体的初始地址就是第一个成员变量的内存地址
- 基于结构体的成员地址去计算偏移量 Offsetof 能够得出其他成员变量的内存地址

上述代码执行流程：

- 修改 n.i 值：i 为第一个成员变量。因此不需要进行偏移量计算，直接取出指针后转换为 Pointer，再强制转换为字符串类型的指针值即可
- 修改 n.j 值：j 为第二个成员变量。Offsetof 获取偏移，计算得到指向第二个成员变量指针，接着重复转换赋值即可



需要注意的是，这里使用了如下方法：

- uintptr 是 Go 的内置类型。返回无符号整数，可存储一个完整的地址。后续常用于指针运算

	type uintptr uintptr

- unsafe.Offsetof：返回变量的字节大小，也就是本文用到的偏移量大小。需要注意的是入参 ArbitraryType 表示任意类型，并非定义的 int。它实际作用是一个占位符

	func Offsetof(x ArbitraryType) uintptr


错误示例

	func main(){
	    n := Num{i: "EDDYCJY", j: 1}
	    nPointer := unsafe.Pointer(&n)
	    ...

	    ptr := uintptr(nPointer)
	    njPointer := (*int64)(unsafe.Pointer(ptr + unsafe.Offsetof(n.j)))
	    ...
	}

因为 ptr 这个临时变量是可能被垃圾回收掉的，那么接下来的内存操作，岂不成迷？




# 🚩 Reflection 反射

GO 的反射包 reflect 被大量使用，虽然反射的机制大多数语言都支持，配合空接口 interface{} 让原本是静态类型的 GO 具备了很多动态类型语言的特征。 

reflect 库有几个个重要的接口类型、两个相应的方法和两个重要的结构体：

- interface reflect.Type
- interface reflect.Value
- method reflect.TypeOf(i interface{}) Type
- method reflect.ValueOf(i interface{}) Value
- struct reflect.Method
- struct reflect.StructField

Type 和 Value 分别对应对象的类型 Type Part 和值数据 Value Part，这是所有 Go 对象的组成，参考 GOPL 12.2. reflect.Type and reflect.Value 330。反射包提供两个重要的函数，TypeOf() 和 ValueOf() 来获取对象的这两部分内容。

StructField 结构体字段类型描述了对象属性的结构，可以通过 Type 对象的 Field() 方法获取。这个结构描述结构体的成员信息，通过这个信息可以获取成员与结构体的关系，如偏移、索引、是否为匿名字段、结构体标签（Struct Tag）等，而且还可以通过 StructField 的 Type 字段进一步获取结构体成员的类型信息：

	type StructField struct {
	    Name string          // 字段名
	    PkgPath string       // 字段路径
	    Type      Type       // 字段反射类型对象
	    Tag       StructTag  // 字段的结构体标签
	    Offset    uintptr    // 字段在结构体中的相对偏移
	    Index     []int      // Type.FieldByIndex中的返回的索引值
	    Anonymous bool       // 是否为匿名字段
	}

Method 结构体表述了对象的方法的信息：

	type Method struct 
	    Name    string // the method name.
	    PkgPath string // The package path that qualifies a upper case method name.It is empty for lower case method names.
	    Type    Type   // method type
	    Func    Value  // func with receiver as first argument
	    Index   int    // index for Type.Method
	}

通过 Type 对象提供以下方法获得反射接口的各种信息：

	Align() int                 // this type when allocated in memory.
	AssignableTo(u Type) bool   // AssignableTo reports whether a value of the type is assignable to type u.
	Comparable() bool           // Comparable reports whether values of this type are comparable.
	ConvertibleTo(u Type) bool  // ConvertibleTo reports whether a value of the type is convertible to type u.
	FieldAlign() int            // FieldAlign returns the alignment in bytes of a value of
	Implements(u Type) bool     // Implements reports whether the type implements the interface type u.
	Kind() Kind                 // Kind returns the specific kind of this type.
	Method(int) Method          // Method returns the i'th method in the type's method set.
	MethodByName(string) (Method, bool) // MethodByName returns the method with that name if the method was found.
	Name() string               // Name returns the type's name within its package for a defined type.
	NumMethod() int             // NumMethod returns the number of exported methods in the type's method set.
	PkgPath() string            // PkgPath returns a defined type's package path, that is, the import path
	Size() uintptr              // Size returns the number of bytes needed to store a value of the given type; it is analogous to unsafe.Sizeof.
	String() string             // String returns a string representation of the type.

以下是针对指定类型有效的方法：

	// Methods applicable only to some types, depending on Kind.
	//
	//	Int*, Uint*, Float*, Complex*: Bits
	//	Array: Elem, Len
	//	Chan: ChanDir, Elem
	//	Func: In, NumIn, Out, NumOut, IsVariadic.
	//	Map: Key, Elem
	//	Ptr: Elem
	//	Slice: Elem
	//	Struct: Field, FieldByIndex, FieldByName, FieldByNameFunc, NumField

	// IsVariadic reports whether a function type's final input parameter
	// is a "..." parameter. If so, t.In(t.NumIn() - 1) returns the parameter's
	// implicit actual type []T.
	//
	// For concreteness, if t represents func(x int, y ... float64), then
	//
	//	t.NumIn() == 2
	//	t.In(0) is the reflect.Type for "int"
	//	t.In(1) is the reflect.Type for "[]float64"
	//	t.IsVariadic() == true
	//
	IsVariadic() bool

	Bits() int                // Bits returns the size of the type in bits.
	ChanDir() ChanDir         // ChanDir returns a channel type's direction.
	Elem() Type               // Elem returns a type's element type.
	Field(i int) StructField  // Field returns a struct type's i'th field.
	FieldByIndex(index []int) StructField // Returns the nested field corresponding to the index sequence.
	FieldByName(name string) (StructField, bool) // Returns the struct field with the given name.
	FieldByNameFunc(match func(string) bool) (StructField, bool) // Rreturns the struct field with a name that satisfies the match function.
	In(i int) Type            // In returns the type of a function type's i'th input parameter.
	Key() Type                // Key returns a map type's key type.
	Len() int                 // Len returns an array type's length.
	NumField() int            // NumField returns a struct type's field count.
	NumIn() int               // NumIn returns a function type's input parameter count.
	NumOut() int              // NumOut returns a function type's output parameter count.
	Out(i int) Type           // Out returns the type of a function type's i'th output parameter.
	common() *rtype
	uncommon() *uncommonType



# 🚩 Struct Field Tags & Reflection 结构体标签与映射
[golang自定义struct字段标签](https://www.jianshu.com/p/c4ec92afeca8)

定义结构体时，可以个字段添加 Tags 标签，即在字段后面用反引号的内容，定义多个 Tag 使用空格隔开，每个 Tag 的格式定义 `name:"attr1[,attr2,...]"`。

同个反射可以在运行时读取 Tags，这个功能应用很广泛，最常见的就是在 JSON 等格式转换时映射结构体字段到指定的键命，encoding/json 不支持默认值，可以值原始数据上处理，参考列子：

	package main

	import (
		"encoding/json"
		"fmt"
		"gopkg.in/yaml.v2"
		"reflect"
	)

	type User struct {
		UserId   int    `json:"user_id,number" yaml:"userid"`
		UserName string `json:"user_name" yaml:"username"`
		Password []byte `json:"-" yaml:"-"`
		Age      int
	}

	func main() {
		user := &User{UserId: 0, UserName: "Yoyo"}

		jsonTxt, _ := json.Marshal(user)
		fmt.Println("JSON:\n" + string(jsonTxt))

		yamlTxt, _ := yaml.Marshal(user)
		fmt.Println("YAML:\n" + string(yamlTxt))

		tt := reflect.TypeOf(user)
		rt := tt.Elem()
		for i := 0; i < rt.NumField(); i++ {
			field := rt.Field(i)
			at := field.Tag
			yt := field.Tag.Get("yaml")
			jt, _ := field.Tag.Lookup("json")
			fmt.Printf("FIELD: %s\n\tJASON TAG: %s\n\tYAML TAG: %s\n\tALL TAGS:%s\n", field.Name, jt, yt, at)
		}
	}

输出内容如下，可以看到 UserId 字段转换成 JSON 的 user_id 键名了，而 YAML 对应的键名则是 userid。Go语言的下划线表示忽略，在这里只适用连字符。对应没有指定 Tag 的 Age 字段，转换时就有不同的表现，JSON 保持大写字母，而 YAML 则转换成小写的 age 键名：

	JSON:
	{"user_id":0,"user_name":"Yoyo","Age":0}
	YAML:
	userid: 0
	username: Yoyo
	age: 0

	FIELD: UserId
	    JASON TAG: user_id,number
	    YAML TAG: userid
	    ALL TAGS:json:"user_id,number" yaml:"userid"
	FIELD: UserName
	    JASON TAG: user_name
	    YAML TAG: username
	    ALL TAGS:json:"user_name" yaml:"username"
	FIELD: Password
	    JASON TAG: -
	    YAML TAG: -
	    ALL TAGS:json:"-" yaml:"-"
	FIELD: Age
	    JASON TAG: 
	    YAML TAG: 
	    ALL TAGS:

通过添加 Tags 可以做许多丰富的功能，如 validator 包，它就会通过 Tags 设置的条件来进行验证动作：

	$ go get gopkg.in/go-playground/validator.v9
	$ go get github.com/go-playground/validator

	import "gopkg.in/go-playground/validator.v9"

	// User contains user information.
	type User struct {
		FirstName      string     `json:"fname"`
		LastName       string     `json:"lname"`
		Age            uint8      `json:"age" validate:"gte=0,lte=130"`
		Email          string     `json:"email" validate:"required,email"`
		FavouriteColor string     `json:"favColor" validate:"hexcolor|rgb|rgba"`
		Addresses      []*Address `json:"addresses" validate:"required,dive,required"` // a person can have a home and cottage...
	}

# 🚩 validator 数据验证

一般地，服务端获取到客户端参数后，都需要根椐接口定义，对参数做一些合法性检查，比如：

- 是否必填
- 是否数字，数字的范围
- 字符串的长度
- 值是否在指定的列表中
- 是否有效的日期
- 是否满足指定的正式表达式

validator 的使用方法
设计一个功能时，我都习惯目标驱动，那就先来看看我期望的 Validator 怎么使用

	func (this *Controller) User(){
		validator:=NewValidator(this.Post) //将要检查的数据字典传入，生成Validator对象
		validator.AddRule("name","string","2-5",true) //对字段name添加规则： 2-5个字符长度，必填
		validator.AddRule("sport","list","football,swim",false) //对字段sport添加规则： 值需在列表中（football，swim),非必填
		...
		if err:= validator.Check();err !=nil{
			//检查不通过，处理错误 
		}
	}

有了目标，就开始定义对象、接口及相关的方法

	type Validator struct {
		data map[string]string //要校验的数据字典
		rule map[string]*vRule //规则列表，key为字段名
	}
	type vRule struct {
		vr       ValidateRuler
		required bool
	}
	//校验规则接口，支持自定义规则
	type ValidateRuler interface {
		Check(data string) error
	}
	//内置规则结构，实现ValidateRuler接口
	type normalRule struct {
		key    string
		rule   string
		params string
	}
	//创建校验器对象
	func NewValidator(data map[string]string) *Validator {
		v := &Validator{data: data}
		v.rule = make(map[string]*vRule)
		return v
	}
	 
	//添加内置的校验规则(同一个key只能有一条规则，重复添加会覆盖)
	func (this *Validator) AddRule(key string, rule string, params string, required ...bool) {
		nr := &normalRule{key, rule, params}
		this.rule[key] = &vRule{nr, true} //默认required = true
		if len(required) > 0 {
			this.rule[key].required = required[0]
		}
	}
	 
	//框架不可能包括所有的规则，为了满足不同应用的需要，除了内置规则外，需同时支持自定义规则的添加。
	//go不支持重载，所以定义一个新方法来添加自定义规则（使用ValidateRuler interface参数）
	func (this *Validator) AddExtRule(key string, rule ValidateRuler, required ...bool) {
		this.rule[key] = &vRule{rule, true}
		if len(required) > 0 {
			this.rule[key].required = required[0]
		}
	}

执行检查

	func (this *Validator) Check() (errs map[string]error) {
		errs = make(map[string]error)
		for k, v := range this.rule {
			data, exists := this.data[k]
			if !exists { //无值
				if v.required { //如果必填，报错
					errs[k] = errors.New("data error: required field miss")
				}
			} else { //有值判断规则
				if err := v.vr.Check(data); err != nil { //调用ValidateRuler接口的Check方法来检查
					errs[k] = err
				}
			}
		}
		return errs
	}

内置规则实现ValidateRuler接口
接下来，编写normalRule的Check方法，以实现ValidateRuler接口

	func (this *normalRule) Check(data string) (Err error) {
		if this.params == "" {
			Err = errors.New("rule error: params wrong of rule")
			return
		}
		switch this.rule {
		case "string":
			//字符串，根椐params判断长度的最大值和最小值
		case "number":
			//判断是否整数数字
			//判断最大值和最小值是否在params指定的范围
		case "list":
			//判断值是否在params指定的列表
		case "regular":
			//是否符合正则表达式
		default:
			Err = errors.New(fmt.Sprintf("rule error: not support of rule=%s", this.rule))
		}
		return
	}

使用自定义规则
当内置规则不满足时，开发者可以自定义规则来检查，只需规则实现了ValidateRuler 接口即可

	type myRuler struct{
	}
	//添加Check方法，实现ValidateRuler 接口
	func (this *myRuler) Check(data string)(Err error){
		//判断data是否符合规则
	}
	//添加规则
	validator.AddExtRule("name", &myRuler{})


# 🚩 GO & Windows Service
[Btcsuite winsvc](https://github.com/btcsuite/winsvc)
[Karadianos Service](https://github.com/kardianos/service)
[Windows Service](https://godoc.org/golang.org/x/sys/windows/svc)

	go get github.com/jander/golog/logger
	go get github.com/kardianos/service

Karadianos Service 服务例程在 example 目录下，支持 install / un-install, start / stop, run，restart 等操作，当前支持 Windows XP+, Linux/(systemd, Upstart, SysV), and OSX/Launchd.

	package main

	import (
		"fmt"
		"github.com/jander/golog/logger"
		"github.com/kardianos/service"
		_ "golang.org/x/sys/windows/svc"
		"log"
		"net/http"
		"os"
		"time"
	)

	var svcConfig = &service.Config{
		Name:        "go-demo",                      //显示服务名称
		DisplayName: "Go Service demo.exe",          //服务名称
		Description: "This service demo for Golang", //服务描述
	}

	type program struct{}

	func (p *program) Start(s service.Service) error {
		go p.run()
		return nil
	}

	func (p *program) Stop(s service.Service) error {
		return nil
	}

	var timestamp = time.Now()

	func (p *program) run() {
		// each request calls handler
		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			fmt.Fprintf(w, "URL.Path = %q [%v]\n", r.URL.Path, timestamp)
		})
		fmt.Println("Server listen on localhost:80")
		log.Fatal(http.ListenAndServe("localhost:80", nil))
	}

	func main() {

		prg := &program{}
		s, err := service.New(prg, svcConfig)
		if err != nil {
			logger.Fatal(err)
		}

		if err != nil {
			logger.Fatal(err)
		}

		if len(os.Args) > 1 {
			switch os.Args[1] {
			case "install":
				err := s.Install()
				logger.Println("安装服务:", svcConfig.Name)
				if err != nil {
					logger.Println(err.Error())
				}
				return
			case "remove":
				err := s.Uninstall()
				logger.Println("卸载服务:", svcConfig.Name)
				if err != nil {
					logger.Println(err.Error())
				}
				return
			case "start":
				err := s.Start()
				logger.Println("启动服务:", svcConfig.Name)
				if err != nil {
					logger.Println(err.Error())
				}
				return
			case "restart":
				err := s.Restart()
				logger.Println("重启服务:", svcConfig.Name)
				if err != nil {
					logger.Println(err.Error())
				}
				return
			case "stop":
				err := s.Stop()
				logger.Println("停止服务:", svcConfig.Name)
				if err != nil {
					logger.Println(err.Error())
				}
				return
			}
		}

		fmt.Println("Usage: ", os.Args[0], "install/remove/start/restart/stop")
		fmt.Println("Test: curl localhost:80")

		err = s.Run()
		if err != nil {
			logger.Error(err)
		}
	}


# 🚩 Windows 10 Toast
[Windows 10 Toast](https://docs.microsoft.com/zh-cn/windows/uwp/design/shell/tiles-and-notifications/adaptive-interactive-toasts)

借助自适应和交互式 toast 通知，可使用文本、图像和按钮/输入创建灵活的通知。Toast 内容的核心组件有：

- launch  : 定义哪些参数将传递回您的应用程序，当用户单击应用的 toast，这样您就可以向深层链接插入烤面包已显示的正确内容。
- visual  : Toast 的可视部分，包括泛型的绑定，包含文本和图像。
- actions : Toast 通知，包括输入和操作交互部分。
- audio   : 当向用户显示 toast 通知时，音频播放控件。

C#

	ToastContent content = new ToastContent()
	{
	    Launch = "app-defined-string",
	 
	    Visual = new ToastVisual()
	    {
	        BindingGeneric = new ToastBindingGeneric() { ... }
	    },
	 
	    Actions = new ToastActionsCustom() { ... },
	 
	    Audio = new ToastAudio() { ... }
	};

XML

	<toast launch="app-defined-string">

	  <visual>
	    <binding template="ToastGeneric">
	      ...
	    </binding>
	  </visual>

	  <actions>
	    ...
	  </actions>

	  <audio src="ms-winsoundevent:Notification.Reminder"/>

	</toast>

toast 库实现原理很简单，先临时生成的包含通知代码的 Powershell 脚本，再用 Go 的 exec.Command 调用。

	package main

	import (
		// go get github.com/go-toast/toast
		"github.com/go-toast/toast" 
		"log"
	)

	func main() {
		notification := toast.Notification{
			AppID:   "Win10 Toast Demo",
			Title:   "Hello",
			Message: "This is toast demo",
			Icon:    "C:/Users/OCEAN/Documents/SOP/tablet.png", // optional
			Actions: []toast.Action{
				{"protocol", "Google", "https://www.google.com/"},
				{"protocol", "Github", "https://github.com/go-toast/toast"},
			},
		}
		err := notification.Push()
		if err != nil {
			log.Fatalln(err)
		}
	}


# 🚩 TimeNormal

日期时间 JSON 格式化转换示例，注意 JSON 的字符串包含双引号，time.Parse 函数的 TIME_LAYOUT 也需要进行双引号匹配，或者使用 strings.Replace 过滤掉双引号。

	package main

	import (
		"fmt"
		"time"
		"encoding/json"

	)

	type TimeNormal struct { // 内嵌方式（推荐）
		time.Time
	}

	func (t TimeNormal) MarshalJSON() ([]byte, error) {
		tune := t.Format(`"2006-01-02 15:04:05"`)
		fmt.Println("TimeNormal Encode: ", t.Time, "to", t)
		return []byte(tune), nil
	}

	func (t *TimeNormal) UnmarshalJSON(data []byte) error {
		tt := time.Time{}
		err := json.Unmarshal(data, &tt)
		if err == nil {
			t.Time = tt
			return nil
		}

		//data = []byte(strings.Replace(string(data), `"`,"", 2))
		if time, err := time.Parse(`"2006-01-02 15:04:05"`, string(data)); err != nil{
			fmt.Println("TimeNormal Decode Error:", err)
			return err
		}else{
			t.Time = time
		}
		return nil
	}

	type Feature struct {
		ID        int       `json:"ID"`
		Timestamp TimeNormal    `json:"timestamp"`
	}


	func main() {
		var data = `{"id": 2, "timestamp": "2018-12-11 12:30:00"}`

		jsn := Feature{}

		data = `{"ID":11,"timestamp":"2019-11-23T02:00:25.4256794+08:00"}`
		json.Unmarshal([]byte(data), &jsn)
		fmt.Println(jsn)

		data = `{"ID":12,"timestamp":"2019-11-22 02:00:25"}`
		json.Unmarshal([]byte(data), &jsn)
		fmt.Println(jsn)

		jsn = Feature{1, TimeNormal{time.Now()}}
		jxt,_ := json.Marshal(jsn)
		fmt.Println(string(jxt))

	}


# 🚩 JSON 解析与扩展已有类型

Go 语言是没有完整的 OOP 对象模型的，在 Golang 的世界里没有继承，只有组合和接口，并且是松散的接口结构，不强制声明实现接口。通过对结构体的组合对现有对象进行扩展也是很便利的，参考 interface & struct 接口与结构体。

单一继承关系解决了 is-a 也就是定义问题，因此可以把子类当做父类来对待。但对于父类不同但又具有某些共同行为的数据，单一继承就不能解决了，C++ 采取了多继承这种复杂的方式。GO 采取的组合方式更贴近现实世界的网状结构，不同于继承，GO 语言的接口是松散的结构，它不和定义绑定。从这一点上来说，Duck Type 相比传统的 extends 是更加松耦合的方式，可以同时从多个维度对数据进行抽象，找出它们的共同点，使用同一套逻辑来处理。

以下时 JSON 数据类型的转换关系

	bool,                   for JSON booleans
	float64,                for JSON numbers
	string,                 for JSON strings
	[]interface{},          for JSON arrays
	map[string]interface{}, for JSON objects
	nil                     for JSON null

① 默认情况下，按照上面提到的映射进行解析；
② 如果对象实现了 json.Marshaler/Unmarshaler 接口且不是 nil 指针，则调用对应的方法进行编解码；如果没有实现该接口，但实现了 encoding.TextMarshaler/TextUnmarshaler 接口，则调用该接口的相应方法进行编解码；
③ struct 中通过 json tag 来控制相关编解码；
④ struct 的匿名嵌入字段，默认展开；可以通过指定 tag 来使其不展开；
⑤ 如果存在匿名字段，如果同级别有相同字段名，不会冲突，具体处理规则文档有说明；
⑥ 在解码时到struct时，会忽略多余或不存在的字段（包括不导出的），而不会报错；

    // Field appears in JSON as key "myName".
    Field int `json:"myName"`

    // Field appears in JSON as key "myName" and
    // the field is omitted from the object if its value is empty,
    // as defined above.
    Field int `json:"myName,omitempty"`

    // Field appears in JSON as key "Field" (the default), but
    // the field is skipped if empty.
    // Note the leading comma.
    Field int `json:",omitempty"`

    // Field is ignored by this package.
    Field int `json:"-"`

    // Field appears in JSON as key "-".
    Field int `json:"-,"`

json 的编解码，使用了 Go 的反射功能，性能自然不是太好，ffjson、easyjson 之类的开源库的原理是通过 go generate 根据 struct 生成相应的代码，避免反射。


**注意 People.Name 成员首字母大写，否则不会导出，解析 JSON 时不会正确赋值，反而结构体不共外部使用可以小写。** 
**如果想在一个包中访问另一个包中结构体的字段，则必须是大写字母开头的变量，即可导出的变量。**

	import (
		// "database/sql/driver"
		"encoding/json"
		"fmt"
		"time"
	)

	type People struct {
		Name string `json:"name"`
		Time TimeNormal
	}

	func main() {
		js := `{
		        "name":"Aob"
		    }`
		var p People
		err := json.Unmarshal([]byte(js), &p)
		if err != nil {
			fmt.Println("err: ", err)
			return
		}
		fmt.Println("people: ", p)

		p.Time = TimeNormal{time.Now()}
		data, err := json.Marshal(p)
		if err != nil {
			fmt.Println("JSON marshaling failed: %s", err)
		}
		fmt.Printf("JSON: %s\n", data)

	}

	// type TimeNormal time.Time // 别名方式扩展
	type TimeNormal struct { // 内嵌方式（推荐）
		time.Time
	}

	func (t TimeNormal) MarshalJSON() ([]byte, error) {
		// tune := fmt.Sprintf(`"%s"`, t.Format("2006-01-02 15:04:05"))
		tune := t.Format(`"2006-01-02 15:04:05"`)
		return []byte(tune), nil
	}

GO 的 time 包中实现 json.Marshaler 接口的序列化方法 MarshalJSON 指定 RFC3339Nano 格式：

	// MarshalJSON implements the json.Marshaler interface.
	// The time is a quoted string in RFC 3339 format, with sub-second precision added if present.
	func (t Time) MarshalJSON() ([]byte, error) {
	    if y := t.Year(); y < 0 || y >= 10000 {
	        // RFC 3339 is clear that years are 4 digits exactly.
	        // See golang.org/issue/4556#c15 for more discussion.
	        return nil, errors.New("Time.MarshalJSON: year outside of range [0,9999]")
	    }

	    b := make([]byte, 0, len(RFC3339Nano)+2)
	    b = append(b, '"')
	    b = t.AppendFormat(b, RFC3339Nano)
	    b = append(b, '"')
	    return b, nil
	}

可以使用格式化函数进行转换，下面是12H、24H两种格式的转换，年份和小时格式代码分别是06、03，使用4位数年份就是 2006，使用24H制就是 15：

	time.Now().Format("06-01-02 03:04:05")
	time.Now().Format("2006-01-02 15:04:05")

也可以直接给 Format 函数传入格式类型：

	time.ANSIC:       Fri Aug  2 23:02:02 2019
	time.UnixDate:    Fri Aug  2 23:02:02 CST 2019
	time.RFC1123:     Fri, 02 Aug 2019 23:02:02 CST
	time.RFC3339:     2019-08-02T23:02:02+08:00
	time.RFC822:      02 Aug 19 23:02 CST
	time.RFC850:      Friday, 02-Aug-19 23:02:02 CST
	time.RFC1123Z:    Fri, 02 Aug 2019 23:02:02 +0800
	time.RFC3339Nano: 2019-08-02T23:02:02.6227628+08:00
	time.RFC822Z:     02 Aug 19 23:02 +0800
	time.Kitchen:     11:02PM
	time.Stamp:       Aug  2 23:02:02
	time.StampMicro:  Aug  2 23:02:02.629703
	time.StampMilli:  Aug  2 23:02:02.631
	time.StampNano:   Aug  2 23:02:02.631646200

Go 不允许在包外新增或重写方法 cannot define new methods on non-local type，只能通过在外部定义别名或者内嵌结构体进行内置对象的扩展。需要注意别名方式只能使用原始类型的字段，不能使用其方法，只重写字段的时候可以考虑使用。

在 gorm 中只重写 MarshalJSON 是不够的，因为 ORM 在插入记录、读取记录时需要的相应执行 Value 和 Scan 方法，需要引入 database/sql/driver 包。为了方便使用，可以定义一个 BaseModel 来替代 gorm.Model。

	import "database/sql/driver"

	type TimeNormal struct { // 内嵌方式（推荐）
		time.Time
	}

	func (t TimeNormal) MarshalJSON() ([]byte, error) {
		// tune := fmt.Sprintf(`"%s"`, t.Format("2006-01-02 15:04:05"))
		tune := t.Format(`"2006-01-02 15:04:05"`)
		return []byte(tune), nil
	}
	
	func (t *TimeNormal) UnmarshalJSON(data []byte) error {
		tt := time.Time{}
		err := json.Unmarshal(data, &tt)
		if err == nil {
			t.Time = tt
			return nil
		}

		//data = []byte(strings.Replace(string(data), `"`,"", 2))
		if time, err := time.Parse(`"2006-01-02 15:04:05"`, string(data)); err != nil{
			fmt.Println("TimeNormal Decode Error:", err)
			return err
		}else{
			t.Time = time
		}
		return nil
	}

	// Value insert timestamp into mysql need this function.
	func (t TimeNormal) Value() (driver.Value, error) {
		var zeroTime time.Time
		if t.Time.UnixNano() == zeroTime.UnixNano() {
			return nil, nil
		}
		return t.Time, nil
	}

	// Scan valueof time.Time
	func (t *TimeNormal) Scan(v interface{}) error {
		value, ok := v.(time.Time)
		if ok {
			*t = TimeNormal{Time: value}
			return nil
		}
		return fmt.Errorf("can not convert %v to timestamp", v)
	}

	type BaseModel struct {
		// gorm.Model
		ID        uint        `gorm:"primary_key" json:"id"`
		CreatedAt TimeNormal  `json:"createdAt"`
		UpdatedAt TimeNormal  `json:"updatedAt"`
		DeletedAt *TimeNormal `sql:"index" json:"-"`
	}


下面是别名方式扩展的核心代码示例，注意类型的转，类型断言和返回类型。访问时间对象时，内嵌方式是 t.Time，使用别名方式后时类型转换 time.Time(t)，而且 Scan 方法中不能直接通过类型断言 v.(TimeNormal) 将接口转换到 TimeNormal。另外，设置别名后，TimeNormal 并不能直接使用原始类型 time.Time 的各种方法和成员，需要先进行类型转换。显然，通过结构体匿名嵌入的方式并不存在这样的不便，这种方式可以很好的保持对象的原有性质。

	type TimeNormal time.Time // 别名方式扩展

	func (t TimeNormal) MarshalJSON() ([]byte, error) {
		ti := time.Time(t)
		tune := ti.Format(`"2006-01-02 15:04:05"`)
		return []byte(tune), nil
	}

	// Value insert timestamp into mysql need this function.
	func (t TimeNormal) Value() (driver.Value, error) {
		var zeroTime time.Time
		ti := time.Time(t)
		if ti.UnixNano() == zeroTime.UnixNano() {
			return nil, nil
		}
		return ti, nil
	}

	// Scan valueof time.Time
	func (t *TimeNormal) Scan(v interface{}) error {
		ti, ok := v.(time.Time) // NOT directly assertion v.(TimeNormal)
		if ok {
			*t = TimeNormal(ti)
			return nil
		}
		return fmt.Errorf("can not convert %v to timestamp", v)
	}


# 🚩 JSON Made Me Mad

搞定乱七八糟的JSON，那些让人抓狂的JSON转换有两大特点：类型混杂，结构零散！如例子的 ugly 中数值字符混杂在 data 字段，uglyMad 的数组元素包含多种类型。

	package main

	import (
		"encoding/json"
		"fmt"
		"time"
	)

	var ugly = `[
	    {"data": 2, "name": "Apply"},
	    {"data": "XL", "name":"Tshirt"}
	]`

	type feature struct {
		Name string `json:"name"`
		Data string `json:"data"`
		Time string `json:"time"`
	}

	type uglyFeature struct {
		Name string
		Data interface{}
	}

	func (fe feature) MarshalJSON() ([]byte, error) {
		t := time.Now().Format(`"2006-01-01"`)
		tune := fmt.Sprintf(`{"name":"%s", "data":"%s", "time":%s}`, fe.Name, fe.Data, t)
		return []byte(tune), nil
	}

	func (fea *feature) UnmarshalJSON(b []byte) (e error) {
		var uf uglyFeature
		err := json.Unmarshal(b, &uf)
		if err != nil {
			fmt.Println("Error: ", err)
		} else {
			switch v := uf.Data.(type) {
			case string:
				fea.Data = v
			case float64:
				fea.Data = fmt.Sprint(v)
			default:
				fea.Data = v.(string)
			}
			fea.Name = uf.Name
			// fmt.Println("ugly Tuner: ", uf, fea)
		}
		return nil
	}

	var uglyMad = `[
		123,
		{"mad": [
		    {"data": 2, "name": "Apply"},
		    {"data": "XL", "name": "Tshirt"}
		]}
	]`

	func main() {
		var ps []feature
		err := json.Unmarshal([]byte(ugly), &ps)
		if err != nil {
			fmt.Println("Error: ", err)
		} else {
			bs, _ := json.Marshal(ps)
			fmt.Println("Feature Tuner: ", ps)
			fmt.Println("Feature Json:", string(bs))
		}

		var mad = map[string]([]feature){}
		var code int
		var compo = []interface{}{&code, &mad}
		err = json.Unmarshal([]byte(uglyMad), &compo)
		if err != nil {
			fmt.Println("Error: ", err)
		} else {
			jsn, _ := json.Marshal(compo)
			fmt.Printf("Compose Tuner: %#v\n", compo)
			fmt.Printf("Compose Value: %#v %#v\n", code, mad["mad"][0])
			fmt.Printf("Compose JSON: %s \n", string(jsn))
		}

	}

Output:

	Feature Tuner:  [{Apply 2 } {Tshirt XL }]
	Feature Json: [{"name":"Apply","data":"2","time":"2019-09-09"},{"name":"Tshirt","data":"XL","time":"2019-09-09"}]
	Compose Tuner: []interface {}{(*int)(0xc0000628b8), (*map[string][]main.feature)(0xc00008e068)}
	Compose Value: 123 main.feature{Name:"Apply", Data:"2", Time:""}
	Compose JSON: [123,{"mad":[{"name":"Apply","data":"2","time":"2019-09-09"},{"name":"Tshirt","data":"XL","time":"2019-09-09"}]}] 

这里很关键的一行代码，通过传入指针构造了一个匿名类型和 uglyMad 表达的数据结构一致：

	var compo = []interface{}{&code, &mad}

以下针对这个匿名类型例子展示，这行关键的一行代码通过传入指针构造了一个匿名类型，[] 表明是个数组，元素时 interface{}，即任何类型数据。这里初始化了一个包含 ini、string 的 interface{}，因为传入的是指针，所以修改 code 或 msg 的数据都会在 compo 中体现:

	package main

	import "fmt"

	func main() {
		var code int = 99
		var msg string = "abc"
		var compo = []interface{}{&code, &msg}
		var vi int = *compo[0].(*int)
		var vm string = *compo[1].(*string)
		fmt.Printf("%#v \nvi = %d\nvm = %s\n", compo, vi, vm)
	}

	// []interface {}{(*int)(0xc00000e0c8), (*string)(0xc00004a1d0)} 
	// vi = 99
	// vm = abc

为了将元素中的数据还原回原来的类型，因为是接口类型，需要对 interface{} 进行类型断言的转换。

不使用结构体，直接使用接口解码 JSON，需要一步步还原，如下面的 info 不能直接使用 `(map[string]([]interface{}))` 这样的类型断言：

	package main

	import (
		"encoding/json"
		"fmt"
	)

	func main() {
		var uglyMad = `{
	            "ID": 123,
	            "info": {"mad": [
	                {"data": 2, "name": "Apply"},
	                {"data": "XL", "name": "Tshirt"}
	            ]}
	        }`
		var compo = map[string]interface{}{}
		err := json.Unmarshal([]byte(uglyMad), &compo)
		var info = compo["info"].(map[string](interface{}))
		id := int(compo["ID"].(float64))
		if err != nil {
			fmt.Println("Error: ", err)
		} else {
			jsn, _ := json.Marshal(compo)
			fmt.Printf("ID: %#v \ninfo: %#v\n", id, info["mad"])
			fmt.Printf("Compose JSON: %s \n", string(jsn))
		}
	}



# 🚩 xml使用

可扩展标记语言，标准通用标记语言的子集，是一种用于标记电子文件使其具有结构性的标记语言，是比较传统的格式。

新建一个文件名为conf.xml，键入内容：

	<?xml version="1.0" encoding="UTF-8" ?>
	<Config>
	   <enabled>true</enabled>
	   <path>/usr/local</path>
	</Config>

新建main.go，键入内容：

	package main

	import (
	    "encoding/xml"
	    "fmt"
	    "os"
	)

	type configuration struct {
	    Enabled bool   `xml:"enabled"`
	    Path    string `xml:"path"`
	}

	func main() {
	    xmlFile, err := os.Open("conf.xml")
	    if err != nil {
	        fmt.Println("Error opening file:", err)
	        return
	    }
	    defer xmlFile.Close()

	    var conf configuration
	    if err := xml.NewDecoder(xmlFile).Decode(&conf); err != nil {
	        fmt.Println("Error Decode file:", err)
	        return
	    }

	    fmt.Println(conf.Enabled)
	    fmt.Println(conf.Path)

	}


# 🚩 ini的使用

INI文件格式是某些平台或软件上的配置文件的非正式标准，以节(section)和键(key)构成，常用于微软Windows操作系统中。这种配置文件的文件扩展名多为INI，故名。

新建一个文件名为 conf.ini：

	; A comment line
	[Section]
	enabled = true
	path = /usr/local # another comment

使用第三方库编写示例： 

	 // go get gopkg.in/gcfg.v1
	package main

	import (
	    "fmt"

	    "gopkg.in/gcfg.v1"
	)

	func main() {
	    config := struct {
	        Section struct {
	            Enabled bool
	            Path    string
	        }
	    }{}

	    err := gcfg.ReadFileInto(&config, "conf.ini")
	    if err != nil {
	        fmt.Println("Failed to parse config file: %s", err)
	    }
	    fmt.Println(config.Section.Enabled)
	    fmt.Println(config.Section.Path)
	}

输出： 
true 
/usr/local


# 🚩 YAML 解析
[YAML](https://github.com/go-yaml/yaml)
[YAML GoDoc](https://godoc.org/gopkg.in/yaml.v2)

Yaml1与Yaml2的区别在于Yaml2中在tag中加入了inline,使之变成了内嵌类型。
在官方的简介中对于tag中支持的flag进行了说明，分别有flow、inline、omitempty。其中flow用于对数组进行解析，而omitempty的作用在于当带有此flag变量的值为nil或者零值的时候，则在Marshal之后的结果不会带有此变量。

注意，tag 没有指定映射键名则结构体中的大写变量名会转换成小写保存到 yaml 文件，如以下的结构体和 yaml 文件对应结构：

	type Configuration struct {
		iris.Configuration
		DBType       string `yaml:"DBType"`
		DBConnection string `yaml:"DBConnection"`
		BindAddress  string `yaml:"BindAddress"`
		Authority    map[string]([]string)
	}

	DBType: sqlite3
	DBConnection: miniot.db
	BindAddress: :8080
	authority:
	  GetUsers:
	  - adminitrator
	  - advanced
	  - user
	  GetProducts: ["administrator", "operator","user"]
	  GetOrderss: ["administrator", "advanced"]

如果需要在多个文档类型进行映射，用空格分割即可`yaml:"DBType" json:"DBType"`。Struct Field Tags 内容参考 Go Programming Language 12.7。

当然大家如果懒得去写struct进行Unmarshal时，也是可以像main.go中直接声明一个resultMap := make(map[string]interface{}) 这样来进行解析的。

安装和导入：

	go get gopkg.in/yaml.v2

	import "gopkg.in/yaml.v2"

官方示例：

	package main

	import (
	        "fmt"
	        "log"
	        "gopkg.in/yaml.v2"
	)

	var data = `
	a: Easy!
	b:
	  c: 2
	  d: [3, 4]
	`

	// Note: struct fields must be public in order for unmarshal to
	// correctly populate the data.
	type T struct {
	        A string
	        B struct {
	                RenamedC int   `yaml:"c"`
	                D        []int `yaml:",flow"`
	        }
	}

	func main() {
	        t := T{}
	    
	        err := yaml.Unmarshal([]byte(data), &t)
	        if err != nil {
	                log.Fatalf("error: %v", err)
	        }
	        fmt.Printf("--- t:\n%v\n\n", t)
	    
	        d, err := yaml.Marshal(&t)
	        if err != nil {
	                log.Fatalf("error: %v", err)
	        }
	        fmt.Printf("--- t dump:\n%s\n\n", string(d))
	    
	        m := make(map[interface{}]interface{})
	    
	        err = yaml.Unmarshal([]byte(data), &m)
	        if err != nil {
	                log.Fatalf("error: %v", err)
	        }
	        fmt.Printf("--- m:\n%v\n\n", m)
	    
	        d, err = yaml.Marshal(&m)
	        if err != nil {
	                log.Fatalf("error: %v", err)
	        }
	        fmt.Printf("--- m dump:\n%s\n\n", string(d))
	}


两种测试文件如下：

test.yaml

	cache:
	  enable : false
	  list : [redis,mongoDB]
	mysql:
	  user : root
	  password : Tech2501
	  host : 10.11.22.33
	  port : 3306
	  name : cwi

test1.yaml

	enable : false
	list : [redis,mongoDB]
	user : root
	password : Tech2501
	host : 10.11.22.33
	port : 3306
	name : cwi

yaml.go

	package module
	// Yaml struct of yaml
	type Yaml struct {
	    Mysql struct {
	        User string `yaml:"user"`
	        Host string `yaml:"host"`
	        Password string `yaml:"password"`
	        Port string `yaml:"port"`
	        Name string `yaml:"name"`
	    }
	    Cache struct {
	        Enable bool `yaml:"enable"`
	        List []string `yaml:"list,flow"`
	    }
	}

	// Yaml1 struct of yaml
	type Yaml1 struct {
	    SQLConf Mysql `yaml:"mysql"`
	    CacheConf Cache `yaml:"cache"`
	}

	// Yaml2 struct of yaml
	type Yaml2 struct {
	    Mysql `yaml:"mysql,inline"`
	    Cache `yaml:"cache,inline"`
	}

	// Mysql struct of mysql conf
	type Mysql struct {
	    User string `yaml:"user"`
	    Host string `yaml:"host"`
	    Password string `yaml:"password"`
	    Port string `yaml:"port"`
	    Name string `yaml:"name"`
	}

	// Cache struct of cache conf
	type Cache struct {
	    Enable bool `yaml:"enable"`
	    List []string `yaml:"list,flow"`
	}

main.go

	package main
	import (
	    "io/ioutil"
	    "log"
	    "module"
	    yaml "gopkg.in/yaml.v2"
	)
	func main() {
	    // resultMap := make(map[string]interface{})
	    conf := new(module.Yaml)
	    yamlFile, err := ioutil.ReadFile("test.yaml")
	   
	    // conf := new(module.Yaml1)
	    // yamlFile, err := ioutil.ReadFile("test.yaml")

	    // conf := new(module.Yaml2)
	    // yamlFile, err := ioutil.ReadFile("test1.yaml")

	    log.Println("yamlFile:", yamlFile)
	    if err != nil {
	        log.Printf("yamlFile.Get err #%v ", err)
	    }
	    err = yaml.Unmarshal(yamlFile, conf)
	    // err = yaml.Unmarshal(yamlFile, &resultMap)
	    if err != nil {
	        log.Fatalf("Unmarshal: %v", err)
	    }
	    log.Println("conf", conf)
	    // log.Println("conf", resultMap)
	}



# 🚩 Markdown & Template
- https://godoc.org/html/template
- https://godoc.org/text/template

Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。 

Markdown具有一系列衍生版本，用于扩展Markdown的功能（如表格、脚注、内嵌HTML等等），这些功能原初的Markdown尚不具备，它们能让Markdown转换成更多的格式，例如LaTeX，Docbook。Markdown增强版中比较有名的有Markdown Extra、MultiMarkdown、 Maruku等。这些衍生版本要么基于工具，如Pandoc；要么基于网站，如GitHub和Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动

Iris Web 框架的 Context.Markdown() 提供 Markdown 支持。

	package main

	import (
		"github.com/kataras/iris"
	)

	var md = []byte(`
	# Hello Markdown, *it's* **golang**!
	# Title H1
	## Title H2
	### Title H3
	Title H1
	=======
	Title H2
	-------
	* list a
	* list a
	* list c
	- list a
	- list a
	- list c
	0. list 1
	0. list 2
	0. list 3
	`)

	func main() {
		app := iris.Default()
		app.Get("/ping", func(ctx iris.Context) {
		ctx.Markdown(md)
			// ctx.JSON(iris.Map{
			// 	"message": "pong...",
			// })
		})

		// listen and serve on http://0.0.0.0:8080.
		app.Run(iris.Addr(":8082"))
	}


这里怒推 Haroopad，最好用的 markdown 编辑器。haroo 在韩语中的意思是“一天”，所以为什么官方网站很多是韩文。

官网： http://pad.haroopress.com/
作为使用人员进入： http://pad.haroopress.com/user.html
github地址： https://github.com/rhiokim/haroopad/


russross/blackfriday
地址：https://github.com/russross/blackfriday 

一个简单的server

	package main

	import (
	  "fmt"
	  "net/http"
	)

	func handlerequest(w http.ResponseWriter, r *http.Request) {
	  fmt.Fprintf(w, "Hi i am SuperWang %s", r.URL.Path[1:])
	}

	func main() {
	  http.HandleFunc("/", handlerequest)
	  http.ListenAndServe(":8000", nil)
	}

使用template 


index.html:

	<html>
	  <body>
	    <h1>SuperWang's Blog!</h1>
	    <p>{{.}}</p>
	  </body>
	</html>

Go语言学习之html/template包(The way to go)

	package main

	import (
	    "html/template"
	    "net/http"
	)

	func handlerequest(w http.ResponseWriter, r *http.Request) {
	    title := "Hello Golang World!"
	    t := template.New("index.html")
	    t, _ = t.ParseFiles("index.html")
	    t.Execute(w, title)
	}

	func main() {
	    http.HandleFunc("/", handlerequest)
	    http.ListenAndServe(":8000", nil)
	}


读取markdown文件 

index.html修改为：

	<html>
	  <body>
	    <h1>SuperWang's Blog!</h1>
	    {{range .}}
	      <a href="/{{.File}}"><h2>{{.Title}} ({{.Date}})</h2></a>
	      <p>{{.Summary}}</p>
	    {{end}}
	  </body>
	</html>

md文件，姑且命名为test.md:

	First post!
	8/9/2017
	This is the summary.
	This is the main post!
	# Markdown!
	*it's* **golang**!

main.go:

	package main

	import (
	    "html/template"
	    "io/ioutil"
	    "net/http"
	    "path/filepath"
	    "strings"

	    "github.com/russross/blackfriday"
	)

	type Post struct {
	    Title   string
	    Date    string
	    Summary string
	    Body    string
	    File    string
	}

	func handlerequest(w http.ResponseWriter, r *http.Request) {
	    posts := getPosts()
	    t := template.New("index.html")
	    t, _ = t.ParseFiles("index.html")
	    t.Execute(w, posts)
	}

	func getPosts() []Post {
	    a := []Post{}
	    files, _ := filepath.Glob("posts/*")
	    for _, f := range files {
	        file := strings.Replace(f, "posts/", "", -1)
	        file = strings.Replace(file, ".md", "", -1)
	        fileread, _ := ioutil.ReadFile(f)
	        lines := strings.Split(string(fileread), "\n")
	        title := string(lines[0])
	        date := string(lines[1])
	        summary := string(lines[2])
	        body := strings.Join(lines[3:len(lines)], "\n")
	        body = string(blackfriday.MarkdownCommon([]byte(body)))
	        a = append(a, Post{title, date, summary, body, file})
	    }
	    return a
	}

	func main() {
	    http.HandleFunc("/", handlerequest)
	    http.ListenAndServe(":8000", nil)
	}

原文链接：https://blog.csdn.net/wangshubo1989/article/details/77893561

# 🚩 runtime.GOMAXPROCS 协程随机性

runtime 包实现了一个小型的任务调度器。这套调度器的工作原理类似于操作系统调度线程，Go 程序调度器可以高效地将 CPU 资源分配给每一个任务。传统逻辑中，开发者需要维护线程池中线程与 CPU 核心数量的对应关系。同样的，Go 可以通过 `GOMAXPROCS()`  函数做到。 `NumCPU()` 函数用来获取 CPU 内核数。

以下例程多核和单核执行有差别，如果是单核，第一个 for 循环始终输出 `A: 10`，因为是通过闭包访问的 i，单核运行先历遍主线程的循环再执行协程。如果是多核运行，则可能出现在 for 循环执行了几步就开始协程了，因此可能出现 `A: 2` 这样的输出，但顺序是随机的。

	package main
	import (
	    "runtime"
	    "sync"
	    "fmt"
	)

	func main() {
	    runtime.GOMAXPROCS(1)
	    wg := sync.WaitGroup{}
	    wg.Add(20)
	    for i := 0; i < 10; i++ {
	        go func() {
	            fmt.Println("A: ", i)
	            wg.Done()
	        }()
	    }
	    for i := 0; i < 10; i++ {
	        go func(i int) {
	            fmt.Println("B: ", i)
	            wg.Done()
	        }(i)
	    }
	    wg.Wait()
	}


# 🚩 select case

	package main
	import (
	    "runtime"
	    "fmt"
	)

	func main() {
	    runtime.GOMAXPROCS(1)
	    int_chan := make(chan int, 1)
	    string_chan := make(chan string, 1)
	    int_chan <- 1
	    string_chan <- "hello"
	    select {
	    case value := <-int_chan:
	        fmt.Println(value)
	    case value := <-string_chan:
	        panic(value)
	    }
	}

考点：select随机性 
解答： select会随机选择一个可用通用做收发操作。所以代码是有肯触发异常，也有可能不会。单个chan如果无缓冲时，将会阻塞。但结合 select 可以在多个chan间等待执行。有三点原则： 

只要有一个 case 能 return ，则立刻执行。
当如果同一时间有多个 case 均能 return 则伪随机方式抽取任意一个执行。
如果没有一个 case 能 return 则可以执行 default 块。


# 🚩 Polling 轮询打印

展示 channel 的有缓存和无缓存的两种方式实现协程轮询：

	package main

	import (
		"time"
		"fmt"
	)

	func main() {
		Polling()
		time.Sleep(3 * time.Second)
		fmt.Print("[DONE]")
	}

	func Polling(){
		ch1 := make(chan int)
		ch2 := make(chan int)
		go func() {
			for i := 0; i < 26; i++ {
				fmt.Print(string(rune(i+65)))
				time.Sleep( 50 * time.Millisecond)
				ch2 <- i
				<- ch1
			}
		}()
		go func() {
			for i := 0; i < 26; i++ {
				<- ch2
				fmt.Print(i+1)
				time.Sleep( 50 * time.Millisecond)
				ch1 <- i
			}
		}()
	}

	func BufferPolling() {
		ch1 := make(chan int, 1)
		ch2 := make(chan int, 1)
		ch1 <- 1
		go func() {
			for i := 65; i<=90; i++ {
				<- ch1
				fmt.Print(string(rune(i)))
				time.Sleep( 50 * time.Millisecond )
				ch2 <- i
			}
		}()
		go func(){
			for i := 1; i<=26; i++{
				<- ch2
				fmt.Print(i)
				time.Sleep( 50 * time.Millisecond )
				ch1 <- i
			}
		}()
	}


# 🚩 Context & Goroutine

在Go 1.7 以后引进的强大的Context上下文，实现并发控制

在一些简单场景下使用 `channel` 和 `WaitGroup` 已经足够了，一些复杂多变的网络并发场景下需要一种可以跟踪 goroutine 的方案，才可以达到控制他们的目的，这就是Go语言为我们提供的 Context，它就是 goroutine 的上下文对象。它是包括一个程序的运行环境、现场和快照等。每个程序要运行时，都需要知道当前程序的运行状态，通常Go 将这些封装在一个 Context 里，再将它传给要执行的 goroutine 。context 包主要是用来处理多个 goroutine 之间共享数据，及多个 goroutine 的管理。

Context 接口提供以下方法：

`Done()` 返回一个只能接受数据的channel类型，当该context关闭或者超时时间到了的时候，该channel就会有一个取消信号
`Err()` 在 `Done()` 之后，返回context 取消的原因。
`Deadline()` 设置该context cancel的时间点
`Value()` 方法允许 Context 对象携带request作用域的数据，该数据必须是线程安全的。

contex 包提供以下函数：

func `WithCancel`(parent Context) (ctx Context, cancel CancelFunc)
func `WithDeadline`(parent Context, d time.Time) (Context, CancelFunc)
func `WithTimeout`(parent Context, timeout time.Duration) (Context, CancelFunc)

Context 对象是线程安全的，你可以把一个 Context 对象传递给任意个数的 gorotuine，对它执行 取消 操作时，所有 goroutine 都会接收到取消信号。

例程描述的是通过 channel 实现一个次数为 5 的循环，在每一个循环中产生一个协程，每一个协程中都传入 context，在每个协程中通过传入ctx创建一个子Context，并且通过select一直监控该Context的运行情况。

当在父Context退出的时候，代码中并没有明显调用子Context的Cancel函数，但是结果显示子Context还是正确合理的关闭了。这是因为，所有基于这个Context或者衍生的子Context都会收到通知，这时就可以进行清理操作了，最终释放协程，这就优雅的解决了协程启动后不可控的问题。

	package main

	import (
		"context"
		"time"
		"fmt"
	)

	func childFunc(cont context.Context, num *int) {
	    ctx, _ := context.WithCancel(cont)
	    for {
	        select {
	        case <-ctx.Done():
	            fmt.Println("child Done : ", ctx.Err())
	            return
	        }
	    }
	}

	func main() {
	    gen := func(ctx context.Context) <-chan int {
	        dst := make(chan int)
	        n := 1
	        go func() {
	            for {
	                select {
	                case <-ctx.Done():
	                    fmt.Println("parent Done : ", ctx.Err())
	                    return // returning not to leak the goroutine
	                case dst <- n:
	                    n++
	                    go childFunc(ctx, &n)
	                }
	            }
	        }()
	        return dst
	    }

	    ctx, cancel := context.WithCancel(context.Background())
	    for n := range gen(ctx) {
	        fmt.Println(n)
	        if n >= 5 {
	            break
	        }
	    }
	    cancel()
	    time.Sleep(1 * time.Second)
	}


Context 使用原则

✓ 不要把Context放在结构体中，要以参数的方式传递
✓ 以Context作为参数的函数方法，应该把Context作为第一个参数，放在第一位。
✓ 给一个函数方法传递Context的时候，不要传递nil，如果不知道传递什么，就使用context.TODO
✓ Context的Value相关方法应该传递必须的数据，不要什么数据都使用这个传递
✓ Context是线程安全的，可以放心的在多个goroutine中传递

# 🚩 sync.Mutex Counter 线程安全计数器

互斥锁 sync.Mutex 是独占锁，即在加锁状态时其它线程无法进行读取操作，可能在高并发环境下导致低效率。而读写锁 RWMutex 则在加锁状态下保证其它线程还可以读取数据，可以用在读多写少的场景提升效能。

利用同步锁的一个目的就是在多线程的环境下保证数据一致性，即在写数据前加锁，保证写入安全，写入完成再解锁。如果还要保证多线程环境下读取的数据一致性，则读取函数也要使用同步锁。

以下例程使用了 `WaitGroup` 来确保主线程最后读取的是所有线程都运行完毕的数据，在所有线程运行完毕，Counter.Sum 的值应该为 0，main 函数的 sum 变量是作为测试对比。根据程序输出可以看到，在真实多核多线程的条件下，Counter 始终保证数据是线程安全的，而对比的 sum 则会飘忽不定，除非设置为单核方式 `GOMAXPROCS(1)`。

	package main

	import (
		"sync"
		"runtime"
		"fmt"
	)

	type Counter struct {
		sum int
		sync.Mutex
	}

	func (ua *Counter) Add(value int) {
		ua.Lock()
		defer ua.Unlock()
		ua.sum += value
	}

	func (ua *Counter) Get() int {
		return ua.sum;
	}

	func main() {
		runtime.GOMAXPROCS(runtime.NumCPU())
		ua := Counter{ sum:0 }
		max := 1000
		sum := 0
		wg := sync.WaitGroup{}
		wg.Add(max*2)
		for i:=0; i<max; i++{
			go func (i int){
				ua.Add(i)
				sum += i;
				wg.Done()
			}(i)
		}
		for i:=0; i<max; i++{
			go func (i int){
				ua.Add(-i)
				sum -= i;
				wg.Done()
			}(i)
		}
		wg.Wait()
		fmt.Print(" Final sum:", ua.Get(), sum)
	}



# 🚩 sync.Mutex 同步锁
- https://draveness.me/golang/docs/part3-runtime/ch06-concurrency/golang-sync-primitives/

Go 1.9 提供了 sync.Map 实现线程安全的 Map。

	package main

	import (
		"sync"
		"runtime"
		"fmt"
	)

	type UserAges struct {
		ages map[string]int
		sync.Mutex
	}

	func (ua *UserAges) Add(name string, age int) {
		ua.Lock()
		defer ua.Unlock()
		ua.ages[name] = age
	}

	func (ua *UserAges) Get(name string) int {
		if age, ok := ua.ages[name]; ok {
			return age
		}
		return -1
	}

	func main() {
		runtime.GOMAXPROCS(runtime.NumCPU())
		ua := UserAges{ ages:map[string]int{} }
		for i:=0; i<1000; i++{
			go func (i int){
				ua.Add("Jean", i)
			}(i)
		}
		for i:=0; i<1000; i++{
			go func (i int){
			}(i)
		}
	}

考点：map线程安全 
解答：可能会出现fatal error: concurrent map read and map write. 修改一下看看效果

	func (ua *UserAges) Get(name string) int {
	    ua.Lock()
	    defer ua.Unlock()
	    if age, ok := ua.ages[name]; ok {
	        return age
	    }
	    return -1
	}



# 🚩 Glide | Package Management For Go
[Playing with Go module proxies](https://roberto.selbach.ca/go-proxies/)
[Introduce to Go Modules](https://roberto.selbach.ca/intro-to-go-modules/)
[Glide | Package Management For Go](https://github.com/Masterminds/glide/releases)

Get Glide
Get the latest release of Glide. The script puts it with your Go binaries ($GOPATH/bin or $GOBIN).


	curl https://glide.sh/get | sh

或使用 GO 安装 glide
	
	$ go get github.com/Masterminds/glide
	$ go install github.com/Masterminds/glide

Initialization
Scan a codebase and create a glide.yaml file containing the dependencies.


	$ glide init

Additional Configuration
Optionally, edit the glide.yaml file to add versions and other information.


	$ edit glide.yaml

Resolve The Dependency Tree
Install the latest dependencies into the vendor directory matching the version resolution information. The complete dependency tree is installed, importing Glide, Godep, GB, and GPM configuration along the way. A lock file is created from the final output.


	$ glide update

Reproducible Installations
Install the dependencies and revisions listed in the lock file into the vendor directory. If no lock file exists an update is run.


	$ glide install

Add More Dependencies
Add a new dependency to the glide.yaml, install the dependency, and re-resolve the dependency tree. Optionally, put a version after an anchor.


	$ glide get github.com/foo/bar

Or

	$ glide get github.com/foo/bar#^1.2.3


使用镜像 (glide mirror)

	[WARN]  Unable to checkout golang.org/x/crypto
	[ERROR] Update failed for golang.org/x/crypto: Cannotdetect VCS
	[ERROR] Failed to do initial checkout of config:Cannot detect VCS

这几行信息估计很多人都是遇到过的。在我天朝或者在公司内部都可能不能访问一些站点，导致很Golang的依赖包不能通过go get下载。此时也就是glide大发神威的时候到了，可以通过配置将墙了的版本库 URL 映射到没被墙的 URL，甚至也可以映射到本地版本库。将golang.org映射到github: 修改glide.yaml加入

	- package:golang.org/x/crypto

	$ glide mirrorset golang.org/x/crypto github.com/golang/crypto
	[INFO] golang.org/x/crypto being set to github.com/golang/crypto
	[INFO] mirrors.yaml written with changes
	$ glide up


版本号指定规则

	=: equal (aliasedto no operator)
	!=: not equal
	>: greater than
	<: less than
	>=: greater than or equal to
	<=: less than or equal to

	1.2 - 1.4.5 which is equivalent to >= 1.2, <=1.4.5
	2.3.4 - 4.5 which is equivalent to >= 2.3.4, <=4.5
	1.2.x is equivalent to >= 1.2.0, < 1.3.0

	>= 1.2.x is equivalent to >= 1.2.0
	<= 2.x is equivalent to < 3
	* is equivalent to >= 0.0.0

	~1.2.3 is equivalent to >= 1.2.3, < 1.3.0
	~1 is equivalent to >= 1, < 2
	~2.3 is equivalent to >= 2.3, < 2.4
	~1.2.x is equivalent to >= 1.2.0, < 1.3.0
	~1.x is equivalent to >= 1, < 2

	^1.2.3 is equivalent to >= 1.2.3, < 2.0.0
	^1.2.x is equivalent to >= 1.2.0, < 2.0.0
	^2.3 is equivalent to >= 2.3, < 3
	^2.x is equivalent to >= 2.0.0, < 3

指定版本报错，可以不填写


# 🚩 Golang 交叉编译
[Docker Golang](https://hub.docker.com/_/golang)


在一个平台上生成另一个平台的可执行程序

Mac 下编译 Linux 和 Windows 64位可执行程序

	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go

Linux 下编译 Mac 和 Windows 64位可执行程序

	CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build main.go
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go

Windows 下编译 Mac 和 Linux 64位可执行程序

	SET CGO_ENABLED=0
	SET GOOS=darwin
	SET GOARCH=amd64
	go build -o main main.go

	SET CGO_ENABLED=1
	SET GOOS=linux
	SET GOARCH=amd64
	go build -o main main.go

GOOS：目标平台的操作系统（darwin、freebsd、linux、windows），GOARCH：目标平台的体系架构（386、amd64、arm）

|-----------|-------------------|----------|
|OS			|ARCH				|OS version|
|-----------|-------------------|----------|
|linux		|386 / amd64 / arm	|>= Linux 2.6|
|darwin		|386 / amd64		|OS X (Snow Leopard + Lion)|
|freebsd	|386 / amd64		|>= FreeBSD 7|
|windows	|386 / amd64		|>= Windows 2000|

其中 CGO_ENABLED=0 的意思是使用C语言版本的GO编译器，参数配置为0的时候就关闭C语言版本的编译器了。自从 Golang 1.5 以后就使用 Go 语言编译器进行编译了。上面的命令编译 64 位可执行程序，当然也可以使用 386 编译 32 位可执行程序。Go 版本1.10，已默认支持所有平台。


编译 go-sqlite3 可能遇到 undefined: SQLiteConn，因为它是 CGO module，需要 CGO 编译。支持 CGO 编译需要安装 Windows 平台的 tdm-gcc-5.1.0-3 编译工具。但是用到CGO，就不建议使用交叉编译，自己用虚拟机搭一个编译环境。在Windows下即便交叉编译通过，到linux上也可能运行不起来。 如 Docker Toolbox 的 Linux 虚拟机就可以：

	docker run --rm -v $GOPATH:/go golang:1.10 bash -c 'cd $GOPATH/src/code && CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build main.go'
	docker run --rm -v "$PWD":/c/iceWorks/iris -w /c/iceWorks/iris -e GOOS=windows -e GOARCH=386 golang go build -v -o main index.go

可以按自己需求修改，编译完会自动删除容器

+ –rm 删除容器
+ -v --volume list 宿主机 $GOPATH 映射到容器的目录，这样就不用下载包
+ -w --workdir 设置工作目录
+ golang:1.10 Go镜像版本
+ bash -c 直接bash命令
+ cd $GOPATH/src/code 进入容器项目目录，-v 已经把宿主机上面项目都弄到容器里
+ CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build main.go 编译 main.go程序文件


## 在 Docker Golang 中运行程序

Dockerfile 编写:

	FROM golang:1.8

	WORKDIR /go/src/app
	COPY . .

	RUN go get -d -v ./...
	RUN go install -v ./...

	CMD ["app"]

编译 Docker Image:

	$ docker build -t my-golang-app .
	$ docker run -it --rm --name my-running-app my-golang-app

## 在 Docker 容器内编译

	$ docker run --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp golang:1.8 go build -v

命令会将 $PWD 当前工作目录映射到 Docker 容器的卷 --volume，然后执行 go build 编译当前工作目录中的程序。如果有 Makefile 自动编译脚本，可以在容器内执行以下编译命令：

	$ docker run --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp golang:1.8 make

## 在 Docker 容器内交叉编译

例如在 linux/amd64 系统上编译程序在 Windows/386 系统上运行:

	$ docker run --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp -e GOOS=windows -e GOARCH=386 golang:1.8 go build -v

也可以这样一次编译到多个平台:

	$ docker run --rm -it -v "$PWD":/usr/src/myapp -w /usr/src/myapp golang:1.8 bash
	$ for GOOS in darwin linux; do
	>   for GOARCH in 386 amd64; do
	>     export GOOS GOARCH
	>     go build -v -o myapp-$GOOS-$GOARCH
	>   done
	> done

## Image Variants
The golang images come in many flavors, each designed for a specific use case.

	golang:<version>

This is the defacto image. If you are unsure about what your needs are, you probably want to use this one. It is designed to be used both as a throw away container (mount your source code and start the container to start your app), as well as the base to build other images off of.

Some of these tags may have names like buster or stretch in them. These are the suite code names for releases of Debian and indicate which release the image is based on.

	golang:<version>-alpine

This image is based on the popular Alpine Linux project, available in the alpine official image. Alpine Linux is much smaller than most distribution base images (~ 5MB), and thus leads to much slimmer images in general.

This variant is highly recommended when final image size being as small as possible is desired. The main caveat to note is that it does use musl libc instead of glibc and friends, so certain software might run into issues depending on the depth of their libc requirements. However, most software doesn't have an issue with this, so this variant is usually a very safe choice. See this Hacker News comment thread for more discussion of the issues that might arise and some pro/con comparisons of using Alpine-based images.

To minimize image size, it's uncommon for additional related tools (such as git or bash) to be included in Alpine-based images. Using this image as a base, add the things you need in your own Dockerfile (see the alpine image description for examples of how to install packages if you are unfamiliar).

	golang:<version>-windowsservercore

This image is based on Windows Server Core (microsoft/windowsservercore). As such, it only works in places which that image does, such as Windows 10 Professional/Enterprise (Anniversary Edition) or Windows Server 2016.

For information about how to get Docker running on Windows, please see the relevant "Quick Start" guide provided by Microsoft:





# 🚩 Docker 虚拟化部署
- [Linux 容器化技术前世今生: 虚拟化、容器化、Docker](https://juejin.cn/post/6844904160651902984)
- [Docker 基础知识](https://juejin.im/post/5d4522c1f265da03e05af5f5)
- [The Convergence of DevOps](https://itrevolution.com/articles/the-convergence-of-devops/)
- [Docker architecture](https://docs.docker.com/get-started/overview/)

虚拟化技术中，有两个适用于现代网络的框架：虚拟机和容器，Virtual Machines vs. Continers。
两者相通不互斥，都便于将一个物理设备的内容移动到另一个物理设备。在容器技术流行之前，虚拟机就是虚拟
技术的代表，主要有 VMWare 和 OpenStack。

虚拟机的应用程序、存储箱和库，以及客户操作系统为其提供了硬件级别的虚拟化，虚拟机占用 GB 级别的内存。

容器的关键区别和优势在于它们的大小，或者说没有大小，又或者说可以很小很轻便。相比虚拟机，容器通常只
包含一个应用程序，并且占用的空间 MB 为单位。

没有计算虚拟化技术的年代，部署一个应用程序非常麻烦，传统的物理服务器部署应用缺点如下：

01. 部署非常慢：先准备硬件服务器，安装操作系统，再部署应用程序，以及处理应用程序依赖。
02. 成本非常高：主要是物理器成本太高，即使是部署一个简单的应用，也需要一台服务器。
03. 资源浪费：如果应用太简单，也容易浪费硬件资源，比如 CPU 和内存。
04. 迁移和扩展太慢：如果需要迁移应用，或者扩展应用，都要再准备其他的物理服务器，过程很麻烦且慢。

虚拟机是重量级单元，其重要吸引力在于 DevOps 中的应用，所以在不同平台之间存储和迁移应用程序的能力
至关重要。填补这一空白的是虚拟化的轻量级虚拟化技术：容器。

单个物理设备可以通过虚拟机管理程序包含多个隔离的虚拟环境，其优势包括降低开销、方便移动性和可扩展性。
容器化是解决传统虚拟化带来的障碍的解决方案，容器技术的引入，使得虚拟机(VM)能够做到事半功倍。

Docker 解决以上罗列的这些问题的虚拟化技术，Docker 是码头工人的意思，本身是软件容器平台。容器和
虚拟机一样，都拥有环境隔离的能力，但它比虚拟机更加轻量级，可以使资源更大化地得到应用。容器英文单词
container 也有另外的一个意思就是“集装箱”。

Docker 容器虚拟化是指操作系统而不是硬件，容器之间共享同一套操作系统资源，但是相比于虚拟机，容器的
隔离级别会稍微低一些。从使用者的角度看，容器就是虚拟化的操作系统。


DevOps 是一个完整的面向 IT 运维的工作流，以 IT 自动化以及持续集成（CI）、持续部署（CD）为基础，
来优化程式开发、测试、系统运维等所有环节。

微服务体系结构允许软件开发人员生成由几个独立的可部署服务组成的应用程序。而容器技术非常适合这种构架，
容器中托管的应用程序的不同组件是可伸缩的，并且可以在不中断其他服务的情况下进行更新。还可以搭配容器
编排平台可实现自动化管理，如 Kubernetes (K8S)。

K8S 是基于容器的集群管理平台，一套管理系统，可以对 Docker 及容器进行更高级更灵活的管理。

Docker 的使用流程就是 “Build, Ship and Run”，也就是，“搭建、发送、运行”，三板斧。
Docker 第二句口号就是：“Build once，Run anywhere”。

Docker技术的三大核心概念，分别是：

- 镜像（Image）包含容器运行时所需的程序、库、资源、配置，以及运行时配置参数，镜像内容只读。
- 容器（Container）容器是镜像运行时的实体，可以对容器进行创建、启动、停止、删除、暂停等操作。
- 仓库（Repository）是集中存储和分发镜像的服务。

![Docker architecture](https://docs.docker.com/engine/images/architecture.svg)

Docker 使用 Golang 语言开发，技术核心是 Linux 内核的 Namespace、Cgroup 和 AUFS 等文件系统。
Docker 通过这些底层的技术，对进程进行封装隔离，而被隔离的进程也称为容器，完全独立于宿主机的进程。

Namespace 作为 Linux 内核的组成部分大约出现于 2002 年，随着时间的推移，Linux 内核添加了更多的
工具和 namespace 类型。然而，直到 2013 年，Linux 内核才添加了真正的容器支持。

命名空间是许多编程语言使用的一种代码组织的形式，通过命名空间来分类，区别不同的代码功能，避免不同的
代码片段，通常由不同的人协同工作或调用已有的代码片段，同时使用时由于不同代码间变量名相同而造成冲突。

Linux 内核引入 Namespace 概念做封装抽象，限制，隔离，使得命名空间内的进程拥有自己的全局资源。

Linux 内核中实现的 6 种 Namespace：

| Namespaces |   Kernel  |                      Isolates                     |
|------------|-----------|---------------------------------------------------|
| Mount      | 2.4       | 隔离文件系统挂载点                                |
| IPC        | 2.6       | 隔离 System V IPC 和 POSIX 消息队列               |
| Network    | 2.6       | 隔离网络资源 Network devices, stacks, ports, etc. |
| PID        | 2.6       | 隔离进程ID                                        |
| Time       | -         | Boot and monotonic clocks                         |
| UTS        | 2.6       | 隔离主机名和域名 Hostname and NIS domain name     |
| User       | 2.6 - 3.8 | 隔离用户和用户组                                  |
| Cgroup     | 4.6       | Cgroup root directory 管理资源的分配、限制        |


Linux manual page

- https://man7.org/linux/man-pages/man7/namespaces.7.html
- https://man7.org/linux/man-pages/man7/mount_namespaces.7.html
- https://man7.org/linux/man-pages/man7/ipc_namespaces.7.html
- https://man7.org/linux/man-pages/man7/network_namespaces.7.html
- https://man7.org/linux/man-pages/man7/pid_namespaces.7.html
- https://man7.org/linux/man-pages/man7/time_namespaces.7.html
- https://man7.org/linux/man-pages/man7/uts_namespaces.7.html
- https://man7.org/linux/man-pages/man7/user_namespaces.7.html
- https://man7.org/linux/man-pages/man7/cgroup_namespaces.7.html
- https://man7.org/linux/man-pages/man7/cgroups.7.html

Linux 早期的版本中就实现了部分的 namespace，随着 Linux 自身的发展以及容器技术持续发展带来的需求，
会有新的 namespace 支持，比如在内核 4.6 中就添加了 Cgroup namespace。

Control groups (Cgroup) 内核功能用来限制、控制与分离进程组的资源，如 CPU、内存、磁盘 I/O 等。
它由 Google 两位工程师开发，自 2008 年 1 月正式发布的 Linux 内核 v2.6.24 开始提供此能力。


AUFS 是一种 Union File System，就是把不同物理位置的目录合并 mount 到同一个目录中。比如，一张
CD/DVD 和一个硬盘目录联合 mount 在一起，然后就可以对存于硬盘上的目录里的文件进行读写。

AUFS 几度改名，但还是没有并入 Linux 内核，从开始的 Another UnionFS，Alternative UnionFS，
最后直接改为 Advance UnionFS。它是对 Linux 原生 UnionFS 的重写和改进。但是，可以在 Ubuntu 和
Debian 这些发行版上使用它。

AUFS 在使用上全兼容 UnionFS，而且在稳定性和性能上都要好很多，后来 UnionFS 2.x 开始抄其功能。
但是没有将它并入 Linux 主干，因为 Linus 不让，基本上是因为代码量比较多，而且写得烂。相对于只有
3000 行的 union mount 和 10000 行的 UnionFS，以及其它平均下来只有 6000 行代码左右的 VFS，
AUFS 居然有 30000 行代码。所以，岡島不断地改进代码质量，不断地提交，不断地被 Linus 拒绝。

历史上，有一个 Linux 发行版叫 Knoppix，主要用于 Linux 光盘教学、系统急救，以及商业产品的演示，
不需要硬盘安装，直接在一个可写的存储设备上运行 CD/DVD 上的映像，比如 U 盘，就可以提供读写能力。
其实，也就是把 CD/DVD 这个文件系统和 USB 这个可写的系统给联合 mount 起来，对 CD/DVD 映像做
任何改动都会在被应用在 U 盘上。于是乎，就像可以对 CD/DVD 上的内容进行任意的修改。

我们可以再发挥一下想像力，你也可以把一个目录，比如你的源代码，作为一个只读的template，和另一个你的working directory给union在一起，然后你就可以做各种修改而不用害怕会把源代码改坏了。有点像一个ad hoc snapshot。

Docker 对 UnionFS 的想像力发挥到了容器的镜像文件，用 UnionFS 这样的技术做出分层的镜像来。其中
Container Layer 可读取，Image Layer 只读。

Docker 官方文档中展示了用 UnionFS 搭建的分层镜像结构。
[Storage drivers versus Docker volumes](https://docs.docker.com/storage/storagedriver/)

![Container Image Layers](https://docs.docker.com/storage/storagedriver/images/container-layers.jpg)

Docker 使用存储驱动程序来存储图像层，并将数据存储在容器的可写层中。删除容器后，可写层不会持久化，
但适合存储运行时生成的临时数据。存储驱动程序针对空间效率进行了优化，但写入速度低于本机文件系统性能，
特别是对于使用写时复制文件系统的存储驱动程序。写密集型应用程序（如数据库存储）会受到性能开销的影响，
特别是在只读层中存在预先存在的数据时。

Docker Volume 用于写入密集型数据、必须在容器生命周期之外保存的数据以及必须在容器之间共享的数据。
卷是保存 Docker 容器生成和使用的数据的首选机制。

Windows 10 目前已经通过 WSL 子系统支持 Linux 环境，Docker Desktop 也自带了 WSL 2 运行环境。
在支持 WSL 2 的系统上，只要安装 Docker Desktop for Windows，就会默认启用。用户也可以修改配置
选项 Use WSL 2 based engine。

- [Docker Desktop WSL 2 backend on Windows](https://docs.docker.com/desktop/windows/wsl/)
- [Using Docker in WSL 2](https://code.visualstudio.com/blogs/2020/03/02/docker-in-wsl2)
- [Using Dev Containers in WSL 2](https://code.visualstudio.com/blogs/2020/07/01/containers-wsl)

WSL 2 为 Windows 提供了对 Linux 发行版的支持，其中每个发行版的行为都像一个 VM，只是它们都运行
在一个共享的 Linux 内核之上。通过修改配置，Resources - WSL Integration，可以将 Docker 环境
集成到 Windows 系统自带的 WSL。使用 wsl 命令可以查询当前系统已安装 WSL 映像：

```sh
> wsl -l -v
  NAME                   STATE           VERSION
* Ubuntu-20.04           Running         2
  docker-desktop         Running         2
  docker-desktop-data    Running         2
> wsl -d docker-desktop

> uname -a
Linux DESKTOP-CBSK60R 5.10.102.1-microsoft-standard-WSL2 #1 SMP Wed Mar 2 00:30:59 UTC 2022 x86_64 Linux

> whereis wsl-bootstrap
wsl-bootstrap: /usr/local/bin/wsl-bootstrap

> ps all | grep docker
   18 root      0:07 wsl-bootstrap run --base-image /mnt/host/c/Docker/resources/wsl/docker-for-wsl.iso --cli-iso /mnt/host/c/Docker/resources/wsl/docker-wsl-cli.iso
  757 root      0:00 /usr/bin/containerd-shim-runc-v2 -namespace services.linuxkit -id docker -address /run/containerd/containerd.sock
  783 root      0:00 /usr/bin/docker-init /usr/bin/entrypoint.sh
 1281 root      0:00 /usr/bin/trim-after-delete -- /sbin/fstrim /var/lib/docker
 1334 root      0:00 /usr/bin/logwrite -n dockerd /usr/local/bin/dockerd --containerd /var/run/desktop-containerd/containerd.sock --pidfile /run/desktop/docker.pid --swarm-default-advertise-addr=eth0 --host-gateway-ip 192.168.65.2
 1339 root      0:04 /usr/local/bin/dockerd --containerd /var/run/desktop-containerd/containerd.sock --pidfile /run/desktop/docker.pid --swarm-default-advertise-addr=eth0 --host-gateway-ip 192.168.65.2
```

安装 Docker 后并运行服务进程，执行以下命令开始布置、运行一个用于学习的教程项目：

```sh
	# sudo dockerd
	# https://github.com/docker/getting-started
	docker run -d -p 80:80 docker/getting-started
	docker run -dp 80:80 docker/getting-started
```

此命令运行一个叫做 getting-started 的映像，参数说明如下，在浏览器打开 localhost:80 就可以
看到教程内容。Docker 检测到映像未安装时，会自动从仓库中拉取映像文件并创建容器运行它：

- `-d` - run the container in detached mode (in the background)
- `-p` 80:80 - map port 80 of the host to port 80 in the container
- `docker/getting-started` - the image to use

如果安装了 Docker Desktop 图形化管理工具，Docker Dashboard 中可以看到映像和容器以及卷的信息。

- [Docker Desktop Manual](https://docs.docker.com/desktop/)
- [Explore Images](https://docs.docker.com/desktop/use-desktop/images/)
- [Explore Volumes](https://docs.docker.com/desktop/use-desktop/volumes/)
- [How is a vulnerability's severity determined?](https://support.snyk.io/hc/en-us/articles/360001040078)

Images 视图显示 Docker 映像列表，允许将映像文件运行在容器中，Docker Hub 上可以获取最新版本的
映像，并对图像进行检查。还显示了使用 Snyk 依赖性安全漏洞扫描工具提供的报告摘要。

映像视图下显示的详细信息包括：

01. Image history
02. Image ID
03. Date the image was created
04. Size of the image
05. Layers making up the image
06. Base images used
07. Vulnerabilities found
08. Packages inside the image

其中比较重要的内容有，Image Hierarchy、Layers 和 Vulnerabilities，通过它们可以大概了解一个
映像文件的依赖层次结构以及安全性问题。

映像文件可能依赖一个或多个映像，罗列在 Image Hierarchy 层次结构下。这意味着映像的作者在构建时
使用另一个映像作为起点。通常，这些基本映像要么是 Debian、Ubuntu 和 Alpine 等操作系统映像，要么
是 PHP、Python 和 Java 等编程语言映像。选择 ALL 行将重新选择整个图像的所有图层和基础图像。右侧
Packages 显示了映像所依赖的软件包。

安全问题通过一个带有感叹号的红色盾牌表示，右侧 Vulnerabilities 罗列了当前映像所包含的安全性问题，
按包分组，根据级别高低划分为 Critical、High、Medium、Low，分别简写为 C、H、M、L。

| Severity | CVSS v3 Rating |
|----------|----------------|
| Critical | 9.0 - 10.0     |
| High     | 7.0 - 8.9      |
| Medium   | 4.0 - 6.9      |
| Low      | 0.1 - 3.9      |

一个或多个基本映像可能有可用的更新，其中可能包括更新的安全修补程序，以消除映像中的漏洞。任何具有可用
更新的基础图像都会在图像层次结构的右侧显示。

Docker 映像由层组成，映像层从上到下列出，最早的层在顶部，最新的层在底部。通常，底部的是映像作者
通过 Dockerfile 命令添加的层。要查看哪些层源自基础映像，只需在“映像”层次结构下选择一个基础映像，
相关层将高亮显示。




## Go Docker 部署示例
- [Alpine 系统入门教程](https://www.cnblogs.com/yeqing112/p/10773500.html)
- [Containerize an application](https://docs.docker.com/get-started/02_our_app/)
- [Docker CLI (docker)](https://docs.docker.com/engine/reference/commandline/container_ls/)
- [Format command and log output](https://docs.docker.com/config/formatting/)

编写一个 Go Web 测试程序：

```js
	package main

	import (
	    "net/http"
	    "fmt"
	    "log"
	    "os"
	)

	func main () {
	    http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
	        fmt.Fprint(writer, "Hello World")
	    })
	    http.HandleFunc("/bye", func(writer http.ResponseWriter, request *http.Request) {
	        defer writer.(http.Flusher).Flush()
	        fmt.Fprint(writer, "See you then")
	        os.Exit(0)
	    })
	    log.Fatal(http.ListenAndServe(":8080", nil))
	}
```

Go Build 注意事项，编译应用的时候记得带上参数，否则使用 alpine 镜像在部署时动态编译会出现Bug。

	CGO_ENABLED=0 go build -o main

Alpine 操作系统镜像是 Docker 官方系统镜像，这是一个面向安全的轻型 Linux 发行版。目前 Docker
官方已开始推荐使用 Alpine 替代之前的 Ubuntu 做为基础镜像环境。这样会带来多个好处。包括镜像下载
速度加快，镜像安全性提高，主机之间的切换更方便，占用更少磁盘空间等。

Alpine 的特点：

01. 小巧：基于 Musl libc 和 busybox，最小的镜像只有 5MB，Ubuntu 镜像则有 88.9MB；
02. 安全：面向安全的轻量发行版；
03. 简单：提供 APK 包管理工具，软件的搜索、安装、删除、升级都非常方便。
04. 适合容器使用：由于小巧、功能完备，非常适合作为容器的基础镜像。

使用一个映射前，需要从 Docker 仓库中拉取到本地，参考以下命令：

```sh
	# List images or containers
	docker image ls
	docker images
	docker container ls
	docker ps --all
	docker ps --all --format "{{json .}}"
	docker ps --all --format "table {{.ID}}\t{{.Command}}\t{{.Names}}\t{{.Image}}\t{{.Status}}"

	docker pull alpine
	docker run -it --name myalpine alpine
	docker run --name myalpine alpine
	docker stop    myalpine
	docker restart myalpine
	docker exec    myalpine ls
	docker rm      myalpine
```

有两条命令查询当前的容器列表，可以在 ls 后面指定 --all 参数以相询包括不在运行状态的容器。
其中 run 命令的 -it 参数表示执行一个具有 TTY 交互的容器，方便用户执行容器内的命令，也可以使用
exec 执行正在运行的容器内的命令。


编写 Dockerfile 配置文件：

```sh
	FROM alpine:latest
	# FROM centos:latest

	MAINTAINER Abc <abc@gmail.com>
	LABEL Description="This is the golang development base on centOS"

	WORKDIR /

	ADD main /

	EXPOSE 3000

	ENTRYPOINT ["./main"]

	#Reconfig timezone
	#RUN echo "Asia/Shanghai" > /etc/timezone

	#env
	ENV PATH /usr/local/go/bin:$PATH 
	ENV GOROOT /usr/local/go
	ENV GOPATH /home/go

	# install golang
	ADD install_go.sh /
	RUN chmod +x /install_go.sh \
	    &&  /install_go.sh \
	    &&  echo "Asia/Shanghai" > /etc/timezone
```

- FROM 指定要依赖的映射，可以是 alpine，也可以是 Centos 等等 Linux；
- 设置工作路径
- 把上文编译好的main文件添加到镜像里
- 暴露容器内部端口
- ENTRYPOINT 配置入口程序，

配套的 Go 安装脚本 install_go.sh 文件参考如下：

```sh
	#/bin/bash

	# install wget
	yum -y install wget

	mkdir /home/go

	# Download & install Golang
	wget https://dl.google.com/go/go1.10.1.linux-amd64.tar.gz
	tar -C /usr/local -zxf go1.10.1.linux-amd64.tar.gz

	# Set GOROOT & GOPATH
	echo export GOROOT=/usr/local/go >> /etc/profile
	echo export GOPATH=/home/go >> /etc/profile

	echo "export PATH=$PATH:/usr/local/go/bin" >> /etc/profile

	rm -f go1.10.1.linux-amd64.tar.gz

	# Test Golang installation
	go version
```

以下 docker 命令按当前目录下的 Dockerfile 配置构建镜像，-t 参数标记应用的镜像标签名：

	docker build -t myapp:v1 .

构建完成后就可以在本地容器列表找到，然后运行容器，将本地端口映射到容器映像端口：

	docker run --rm -it -d -p 3000:8080 myapp
	docker run myapp:v1

本机打开 localhost:3000 端口进行访问和测试。



## Docker Installation

Docker分为社区版（CE）和企业版（EE）两个版本，社区版本可以免费使用，而企业版则需要付费使用，对于我们个人开发者或小企业来说，一般是使用社区版的。

Docker为Windows提供了一个桌面应用程序管理的安装包（Docker Desktop for Windows），不过对系统有以下几点要求：

Windows 10 64位 Build 15063 或更高版本；
在BIOS中启用虚拟化，通常，默认情况下启用虚拟化；
必须启用 Hyper-V 和容器功能。
至少有4GB内存；
CPU支持SLAT。

如果操作系统满足上面的要求，则可以直接下载安装包直接安装，在安装成功后，Docker并不会自动启动，需要我们自己启动，可以开始菜单中找到Docker启动。

如果系统达不到上面的要求，比如说你用的是Windows 7操作系统，这时候要想使用Docker，便需要借助Docker Toolbox，Docker Toolbox是Docker提供的在比较旧的Mac OS，Windows操作系统上安装Docker环境的工具集，结合 VirtualBox 虚拟机实现。

可能有些Linux预先安装Docker，但一般版本比较旧，所以可以先执行以下代码来删除旧版本的Docker。

$ sudo dnf remove docker
              docker-client
              docker-client-latest
              docker-common
              docker-latest
              docker-latest-logrotate
              docker-logrotate
              docker-selinux
              docker-engine-selinux
              docker-engine

指定安装版本

	$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

	# 使用yum安装Docker
	$ sudo yum install docker-ce docker-ce-cli containerd.io

	# 启动docker守护进程
	$ sudo systemctl start docker

测试安装是否成功

	# 打印docker版本
	$ docker version 

	# 搜索公开发布的镜像
	$ docker search hello

	# 拉取hello-world镜像
	docker pull hello-world

	# 使用hello-world运行一个容器
	docker run hello-world

	# 查看 Docker Root Dir
	docker info

## Docker Toolbox 安装问题一览

双击Docker Quickstart Terminal，提示windows 正在查找bash.exe。

一般出现这个问题，是因为之前已经安装过了git，且bash.exe的路径与Docker Toolbox中不一致导致的。修改 Docker Quickstart Terminal 指向的 bash 路径。

双击Docker Quickstart Terminal，bash窗口一闪而过。

窗口一闪而过，一般是程序运行出错了，需要找到错误信息。直接在bash中执行start.sh，按提示操作，发现输出如下一段文字:

Docker Machine is not installed. Please re-run the Toolbox Installer and try again.

使用编辑器打开 start.sh，找到关联处:

	export PATH="$(win_to_unix_path "${DOCKER_TOOLBOX_INSTALL_PATH}"):$PATH"
	VM=${DOCKER_MACHINE_NAME-default}
	DOCKER_MACHINE="${DOCKER_TOOLBOX_INSTALL_PATH}\docker-machine.exe"

	// ...

	if [ ! -f "${DOCKER_MACHINE}" ]; then
	  echo "Docker Machine is not installed. Please re-run the Toolbox Installer and try again."
	  exit 1
	fi

发现是因为找不到docker-machine.exe报的错。docker-machine.exe的路径跟DOCKER_TOOLBOX_INSTALL_PATH这个变量有关。查看环境变量，发现确实没有DOCKER_TOOLBOX_INSTALL_PATH。

解决办法是使用 docker-machine.exe 创建一个 docker machine，环境变量里就会自动设置 DOCKER_TOOLBOX_INSTALL_PATH。

启动过程 pre-create check 下载引导镜像失败，需要科学上网下载 boot2docker.iso。

	# If seeing:
	#     (dev) No default Boot2Docker ISO found locally, downloading the latest release...
	#     Error with pre-create check: "failure getting a version tag from the Github API response (are you getting rate limited by Github?)"
	# then:
	curl -Lo ~/.docker/machine/cache/boot2docker.iso https://github.com/boot2docker/boot2docker/releases/download/v1.9.1/boot2docker.iso
	curl -Lo ~/.docker/machine/cache/boot2docker.iso https://github.com/boot2docker/boot2docker/releases/download/v19.03.2-rc1/boot2docker.iso

如果安装目录有 boot2docker.iso 文件，可以到安装目录执行下面这个命令跳过检查：

	docker-machine.exe create --driver virtualbox --virtualbox-boot2docker-url=boot2docker.iso default

因为 Docker Toolbox 需要结合 VirtualBox 虚拟机使用，因此执行命令时确保虚拟机处于开启状态。

建议有条件的安装 Docker Desktop for Windows，安装过 Docker Toolbox 再安装可能会出现类似没有发现CA凭证等错误。

	“could not read CA certificate “C:\Users\username\.docker\machine\machines\default\ca.pem”

通过删除环境变量解决，前缀是 DOCKER_ 的变量全部删掉，点击确定即可。在 Powershell 中执行环境变量 Unset 命令： docker-machine env -u



## Docker的基本概念

Docker Client : Docker提供给用户的客户端。Docker Client提供给用户一个终端，用户输入Docker提供的命令来管理本地或者远程的服务器。

Docker Daemon : Docker服务的守护进程。每台服务器（物理机或虚机）上只要安装了Docker的环境，基本上就跑了一个后台程序Docker Daemon，Docker Daemon会接收Docker Client发过来的指令,并对服务器的进行具体操作。

Docker Images : 俗称Docker的镜像，这个可难懂了。你暂时可以认为这个就像我们要给电脑装系统用的系统CD盘，里面有操作系统的程序，并且还有一些CD盘在系统的基础上安装了必要的软件，做成的一张“只读” 的CD。如编程人员实际要编写的程序包，可以理解成一个待运行的程序。Docker镜像是一个特殊的文件系统，提供容器运行时所需的程序、库、资源、配置等文件，另外还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像是一个静态的概念，不包含任何动态数据，其内容在构建之后也不会被改变。

Docker Registry : 这个可认为是 Docker Images 的仓库，就像git的仓库一样，用来管理 Docker 镜像的，提供了 Docker 镜像的上传、下载和浏览等功能，并且提供安全的账号管理可以管理只有自己可见的私人image。就像git的仓库一样，docker也提供了官方的Registry，叫做 Dock Hub(http://hub.Docker.com)

Docker Container : 俗称 Docker 的容器，这个是最关键的东西了。Docker Container 是真正跑项目程序、消耗机器资源、提供服务的地方，Docker Container 通过 Docker Images 启动，在 Docker Images 的基础上运行你需要的代码。可以认为Docker Container提供了系统硬件环境，然后使用了Docker Images 这些制作好的系统盘，再加上你的项目代码，跑起来就可以提供服务了。

切换阿里镜像、科大镜像：

	sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
	sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories

下面的命令是一些对镜像的基本操作，如下：

	docker image ls  # 列出所有镜像
	docker images    # 列表所有镜像

前面已经拉取了hello-world镜像，会输出下面的内容：

	REPOSITORY                                      TAG                 IMAGE ID            CREATED             SIZE
	hello-world                                     latest              fce289e99eb9        7 months ago        1.84kB

前面我们已经演示过使用 docker pull 命令拉取了 hello-world 镜像了，当然使用 docker image pull 命令也是一样的。

一般默认是从Docker Hub上拉取镜像的，Docker Hub是Docker官方提供的镜像仓库服务（Docker Registry），有大量官方或第三方镜像供我们使用，比如我们可以在命令行中输入下面的命令直接拉取一个CentOS镜像：

	docker pull centos
	# docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]

拉取一个镜像，需要指定 Docker Registry 的地址和端口号，默认是 Docker Hub，还需要指定仓库名和标签，仓库名和标签唯一确定一个镜像，而标签是可能省略，如果省略，则默认使用latest作为标签名，另外，仓库名则由作者名和软件名组成。

那么，我们上面使用 CentOS，那是因为省略作者名，则作者名 library，表示 Docker 官方的镜像，所以上面的命令等同于：

	docker pull library/centos:latest

因此，如果拉取非官方的第三方镜像，则需要指定完整仓库名，如下：

	docker pull mysql/mysql-server:latest

使用docker run命令，可以通过镜像创建一个容器，如下：

	docker run -it centos /bin/bash

当本地有些镜像我们不需要时，那我们也可以删除该镜像，以节省存储空间，不过要注意，如果有使用该镜像创建的容器未删除，则不允许删除镜像。

	# image_name表示镜像名，image_id表示镜像id
	docker image rm image_name/image_id
	docker rmi image_name/image_id

Docker 的镜像是用于生成容器的模板，镜像与容器的关系，就是面向对象编程中类与对象的关系，Docker 上构建好每一个镜像，然后使用镜像创建我们需要的容器。

启动容器有两种方式，一种是我们前面已经介绍过的，使用 docker run 命令通过镜像创建一个全新的容器，如下：

	docker run hello-world

另外一种指定容器ID的方式启动一个已经停止运行的容器：

	docker start container_id

要停止正在运行的容器可以使用的命令如下：

	docker stop
	docker stop container_id
	docker container stop

查看本地所有的容器命令：

	docker container ls
	docker ps

删除容器，注意不允许删除正在运行的容器，因此如果要删除的话，就必须先停止容器。 container_id表示容器id，通过 docker ps 可以查看。

	docker rm
	docker rm container_id
	docker container rm
	docker rm $(docker ps -q) # 删除所有容器
	docker container prune    # 删除所有退出的容器

进入容器，command表示Linux命令，如/bin/bash

	docker exec -it container_id command

仓库（Repository）

在前面的例子中，我们使用两种方式构建镜像，构建完成之后，可以在本地运行镜像，生成容器，但如果在更多的服务器运行镜像呢？很明显，这时候我们需要一个可以让我们集中存储和分发镜像的服务，就像Github可以让我们自己存储和分发代码一样。

Docker Hub 就是Docker提供用于存储和分布镜像的官方 Docker Registry，也是默认的 Registry，其网址为 https://hub.docker.com 前面我们使用 docker pull 命令便从Docker Hub上拉取镜像。

Docker Hub 有很多官方或其他开发提供的高质量镜像供我们使用，当然，如果要将我们自己构建的镜像上传到 Docker Hub 上，我们需要在Docker Hub上注册一个账号，然后把自己在本地构建的镜像发送到Docker Hub的仓库当中，Docker Registry包含很多个仓库，每个仓库对应多个标签，不同标签对应一个软件的不同版本。

Docker的组成与架构
在安装好并启动了Docker之后，我们可以使用在命令行中使用Docker命令操作Docker，比如我们使用如下命令打印Docker的版本信息，包含两个部分的信息：Client和Server。

	docker verion

这是 Docker 跟大部分服务端软件一样（如MySQL），都是使用 C/S 的架构模型，也就是通过客户端调用服务器，只是我们现在刚好服务端和客户端都在同一台机器上而已。

因此，我们可以使用下面的图来表示Docker的架构，DOCKER_HOST 是 Docker Server，而 Clinet 便是我们在命令中使用 Docker 命令。

Docker Engine

Docker Server为客户端提供了容器、镜像、数据卷、网络管理等功能，其实，这些功能都是由Docker Engine来实现的。

- dockerd：服务器守护进程。
- Client docker Cli：命令行接口
- REST API：除了cli命令行接口，也可以通过REST API调用Docker


## Docker 常用命令

	$ docker search imageName/ID                 # 查找Docker Hub上的镜像
	$ docker pull ImageName/ID                   # 获取Docker Hub上的镜像
	$ docker images                              # 显示本地主机上的镜像列表
	$ docker run ImageName/ID                    # 运行本地主机上的镜像
	$ docker ps                                  # 列出正在运行的容器
	$ docker port ContainerID                    # 查看正在运行容器的网络端口映射情况
	$ docker top ContainerID                     # 查看正在运行容器的内部正在进程运行
	$ docker inspect ContainerID                 # 查看正在运行容器的内部底层信息
	$ docker stop ContainerID/                   # 停止正在运行容器
	$ docker start ContainerID                   # 重启已经停止的容器
	$ docker rm ContainerimageID                 # 删除不需要的容器（必须在容器已经停止的情况下）
	$ docker rmi ImageName/ID                    # 移除本地镜像，移除前需要把该镜像下所有的容器删除
	$ docker login                               # 登录docker
	$ docker run -t -i ubuntu:16.04 /bin/bash    # 运行ubuntu:16.04镜像并创建容器和启动bash终端
	$ docker rename wonderful_kepler Ubuntu16.04 # 重命名容器名
	$ docker push spiffyeight77/ubuntu           # 提交镜像到docker hub 需要登录
	$ docker commit -m="has update" -a="SpiffyEight77" ff5d623e2d61 spiffyeight77/ubuntu:16.04 # 构建镜像

部分参数说明

	-d: 守护模式 后台运行
	-p: 是容器内部端口绑定到指定的主机端口
	-P: 是容器内部端口随机映射到主机的高端口
	-f : 让 docker logs 像使用 tail -f 一样来输出容器内部的标准输出
	-l : 查询最后一次创建的容器
	-t : 选项让Docker分配一个伪终端（pseudo-tty）并绑定到容器的标准输入上
	-i : 则让容器的标准输入保持打开
	-m:提交的描述信息
	-a: 指定镜像作者
	--rm: 停止容器后移除容器
	ff5d623e2d61: 容器ID
	spiffyeight77/ubuntu:16.04: 指定要创建的目标镜像名


# 🚩 reCaptcha 人机验证
[Anti-Google-reCAPTCHA](https://www.blackhat.com/docs/asia-16/materials/asia-16-Sivakorn-Im-Not-a-Human-Breaking-the-Google-reCAPTCHA-wp.pdf)

为了防止机器人攻击，国外很多网站都使用了 Google reCaptcha 验证码。reCaptcha 对于国外用户非常的友好，对于国内用户就不怎么友好了，国内网络全线屏蔽 Google 服务，导致 reCaptcha 完全加载不出来。

	https://www.recaptcha.net/recaptcha/api.js
	https://www.recaptcha.net/recaptcha/api/siteverify

php示例：

	<?php
	function send_post($url, $post_data)
	{
	    $postdata = http_build_query($post_data);
	    $options = array(
	        'http' => array(
	            'method' => 'POST',
	            'header' => 'Content-type:application/x-www-form-urlencoded',
	            'content' => $postdata,
	            'timeout' => 15 * 60 // 超时时间（单位:s）
	        )
	    );
	    $context = stream_context_create($options);
	    $result = file_get_contents($url, false, $context);
	    return $result;
	}
	
	$post_data = array(        
		'secret' => '你的Secret key',        
		'response' => $_POST["g-recaptcha-response"]    //前端传过来的响应码
	);

	$recaptcha_json_result = send_post('https://www.google.com/recaptcha/api/siteverify', $post_data); 
	$recaptcha_result = json_decode($recaptcha_json_result);   
	//在这里处理返回的值 
	var_dump($recaptcha_result);    
	?>

reCAPTCHA 是一种用于区分访问者是真人还是机器人的方案，比验证码智能。reCAPTCHA 技术利用了 CAPTCHA 的原理，CAPTCHA 全称 “全自动区分计算机和人类的图灵测试”（Completely Automated Public Turing Test to Tell Computers and Humans Apart），它是一种区分用户是计算机还是人的计算程序，这种程序生成人类能很容易通过但计算机通不过的测试，并进行判定，人/机进行测试的过程称为一次“挑战”。

reCAPTCHA 虽然反其道利用人在接受 CAPTCHA 挑战时的识别能力，可以额外地把人的识别结果集作为类似古籍复原这样的项目的有力输入，但在检验访问者是人还是机这一点上，它与 CAPTCHA 本质是一样的。

谷歌公告中表示，在 reCAPTCHA 第一个版本中，用户接受的挑战内容需要阅读扭曲字符，并将之输入文本框，而为了改善用户体验和提升安全性，他们不断改进挑战方式，在 reCAPTCHA v2 中开始借助许多其它的信号来识别请求的来源是真人还是机器人。挑战的主要方式变成了单击一次“I'm not a robot”的复选框，用户不再需要去输入那些奇形怪状的字符，“这使得 reCAPTCHA 的挑战从主导位置退居二线，大约一半用户只需要通过简单的点击即可通过挑战。”

而此次发布的 reCAPTCHA v3，更是在此基础上做出了重大优化，用户甚至不再需要像 v2 那样单击接受挑战。“v3 从根本上改变了网站如何测试人与机器人活动的方式，通过返回一个分值来告诉您当下的交互是多么可疑，并且无需发起挑战中断用户。”

也就是说，在 v3 中，基于 reCAPTCHA 的保护不再是交互式的，它不会再弹出让你打勾的框框，而是全程预埋在网页背后监控你的网页活动。谷歌为此引入了一个“action”概念，用户可以使用该标记来定义上网活动的关键步骤，并开启 reCAPTCHA，使其能够在上下文中运行其自适应风险分析引擎。

同时，在 reCAPTCHA 管理控制台中，用户还可以全面地了解 reCAPTCHA 收集到的每个分值的分布（0-1）与不同 action 的风险，以帮助不同程度地定位可疑页面，这给用户提供了更多空间来决定在危险情况下应该做些什么。

美国马里兰大学的四位研究员开源了一个名为UnCaptcha的工具，能够破解谷歌的验证码系统ReCaptcha，其进行语音验证的准确率高达85%。与众多验证机制一样，早期的ReCaptcha系统通过数字验证码进行识别，以此确保操作方是人类而非机器人。但是，2012年一个谷歌研究团队几乎百分之百破解了其文本验证码系统。于是谷歌在这之后的升级版当中加入了语音和图像验证的方式。

如今，上述验证方式再次遭遇巨大挑战。“谷歌的ReCaptcha系统使用了一些高级的分析工具来判断一个用户到底是人还是机器人。他们使用了多种元素，包括cookie、解题的速度、鼠标的移动以及解题的成功率。”

Package recaptcha is google golang module for google re-captcha.

Installation

	go get github.com/haisum/recaptcha

Usage

Usage example can be found in example/main.go file.


Source code

Available on github: http://github.com/haisum/recaptcha

Author: Haisum (haisumbhatti@gmail.com)

	package main

	import (
		"fmt"
		"log"
		"net/http"

		"github.com/haisum/recaptcha"
	)

	func main() {
		sitekey := "6LfiVjcUAAAAAJyjCEGVyTpmFqlpOMGVIZpZPy6p"
		re := recaptcha.R{
			Secret: "6LfiVjcUAAAAAJ7wALWYNew2yx0qbT0WxRR-kYu9",
		}

		form := fmt.Sprintf(`
	        <html>
	            <head>
	                <!-- <script src='https://www.google.com/recaptcha/api.js'></script> -->
	                <script src='https://www.recaptcha.net/recaptcha/api.js'></script>
	            </head>
	            <body>
	                <form action="/submit" method="post">
	                    <div class="g-recaptcha" data-sitekey="%s"></div>
	                    <input type="submit">
	                </form>
	            </body>
	        </html>
	    `, sitekey)

		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			fmt.Fprintf(w, form)
		})
		http.HandleFunc("/submit", func(w http.ResponseWriter, r *http.Request) {
			isValid := re.Verify(*r)
			if isValid {
				fmt.Fprintf(w, "Valid")
			} else {
				fmt.Fprintf(w, "Invalid! These errors ocurred: %v", re.LastError())
			}
		})

		log.Printf("\n Starting server on http://localhost:8080 .")

		err := http.ListenAndServe(":8080", nil)

		if err != nil {
			log.Fatalf("Could not start server. %s", err)
		}
	}

reCaptcha Go 服务端封装：

	// Package recaptcha is google golang module for google re-captcha.
	//
	// Installation
	//
	//   go get github.com/haisum/recaptcha
	//
	// Usage
	//
	// Usage example can be found in example/main.go file.
	//
	//
	// Source code
	//
	// Available on github: http://github.com/haisum/recaptcha
	//
	// Author: Haisum (haisumbhatti@gmail.com)
	package recaptcha

	import (
		"encoding/json"
		"io/ioutil"
		"net/http"
		"net/url"
		"time"
	)

	// R type represents an object of Recaptcha and has public property Secret,
	// which is secret obtained from google recaptcha tool admin interface
	type R struct {
		Secret    string
		lastError []string
	}

	// Struct for parsing json in google's response
	type googleResponse struct {
		Success    bool
		ErrorCodes []string `json:"error-codes"`
	}

	// url to post submitted re-captcha response to
	// var postURL = "https://www.google.com/recaptcha/api/siteverify"
	var postURL = "https://www.recaptcha.net/recaptcha/api/siteverify"

	// Verify method, verifies if current request have valid re-captcha response and returns true or false
	// This method also records any errors in validation.
	// These errors can be received by calling LastError() method.
	func (r *R) Verify(req http.Request) bool {
		response := req.FormValue("g-recaptcha-response")
		return r.VerifyResponse(response)
	}

	// VerifyResponse is a method similar to `Verify`; but doesn't parse the form for you.  Useful if
	// you're receiving the data as a JSON object from a javascript app or similar.
	func (r *R) VerifyResponse(response string) bool {
		r.lastError = make([]string, 1)
		client := &http.Client{Timeout: 20 * time.Second}
		resp, err := client.PostForm(postURL,
			url.Values{"secret": {r.Secret}, "response": {response}})
		if err != nil {
			r.lastError = append(r.lastError, err.Error())
			return false
		}
		defer resp.Body.Close()
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			r.lastError = append(r.lastError, err.Error())
			return false
		}
		gr := new(googleResponse)
		err = json.Unmarshal(body, gr)
		if err != nil {
			r.lastError = append(r.lastError, err.Error())
			return false
		}
		if !gr.Success {
			r.lastError = append(r.lastError, gr.ErrorCodes...)
		}
		return gr.Success
	}

	// LastError returns errors occurred in last re-captcha validation attempt
	func (r R) LastError() []string {
		return r.lastError
	}


# 🚩 优雅的关闭 Go Web 服务器
[《优雅的关闭 Go Web 服务器》](https://mp.weixin.qq.com/s/rA_oh472ZhfcAsAkWyyXFA)

文章[《优雅的关闭 Go Web 服务器》]写到：可以通过开启一个单独的 goroutine 拦截关闭信号，这样，当服务器真正关闭之前，可以做一些任务，做完任务再发出执行完毕的关闭号。

一些任务比如：清理某些资源；完成数据库事务；一些其他长时间的操作；退出服务的那一刻，刚好收到一个响应，为了保证所有请求完成，就可以在这里，在最大超时时间内去处理这个响应；dump 进程当前状态；记录日志的动作。

启动应用，Ctrl + C 中断程序，中断信号被拦截，do something.....

	go run main.go -listen-addr=5001
	http: 2019/08/31 11:34:30 Server is ready to handle requests at :5001
	^Chttp: 2019/08/31 11:34:32 Server is shutting down...
	do something start .....  2019-08-31 11:34:32.594668 +0800 CST m=+2.337451148
	do something end .....  2019-08-31 11:34:37.598248 +0800 CST m=+7.340881516
	http: 2019/08/31 11:34:37 Server stopped

对文中代码做了改造，代码如下：

	var listenAddr string

	func init() {
	    //接收端口号，默认端口号：5000
	    flag.StringVar(&listenAddr, "listen-addr", ":5000", "server listen address")
	}
	func main() {
	    flag.Parse() //外部参数解析
	    listenAddr = fmt.Sprintf(":%s",listenAddr)

	    logger := log.New(os.Stdout, "http: ", log.LstdFlags)

	    //创建 server：
	    server := newWebServer(logger)

	    done := make(chan struct{}, 1)
	    quit := make(chan  os.Signal, 1)

	    //os.Interrupt: syscall.SIGINT
	    signal.Notify(quit, os.Interrupt)
	    //启动另一个 goroutine ，监听将要关闭信号：
	    go shutdown(server, logger, quit, done)

	    //启动 server：
	    logger.Println("Server is ready to handle requests at",listenAddr)
	    err := server.ListenAndServe()
	    if err != nil && err != http.ErrServerClosed {
	        logger.Fatalf("Could not listen on %s: %v \n", listenAddr, err)
	    }

	    //等待已经关闭的信号：
	    <-done
	    logger.Println("Server stopped")
	}

	//初始化 server
	func newWebServer(logger *log.Logger) *http.Server {
	    //路由:
	    router := http.NewServeMux()
	    router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	        w.WriteHeader(http.StatusOK)
	    })

	    //http 服务配置:
	    server := &http.Server{
	        Addr: listenAddr,
	        Handler: router,
	        ErrorLog: logger,
	        ReadTimeout: 5 * time.Second,
	        WriteTimeout: 10 * time.Second,
	        IdleTimeout: 15 * time.Second,
	    }

	    return server
	}

	//关闭 server
	//quit: 接收关闭信号
	//done: 发出已经关闭信号
	func shutdown(server *http.Server, logger *log.Logger, quit <-chan os.Signal, done chan<- struct{}) {
	    //等待接收到退出信号：
	    <-quit
	    logger.Println("Server is shutting down...")

	    ctx, cancel := context.WithTimeout(context.Background(), 30 * time.Second)
	    defer cancel()

	    server.SetKeepAlivesEnabled(false)
	    err := server.Shutdown(ctx)
	    if err != nil {
	        logger.Fatalf("Could not gracefully shutdown the server: %v \n", err)
	    }

	    //do Something ：
	    fmt.Println("do something start ..... ", time.Now())
	    time.Sleep(5 * time.Second)
	    fmt.Println("do something end ..... ", time.Now())

	    close(done)
	}

改造的地方
原文代码：

	done := make(chan bool, 1)

改造后代码：

	done := make(chan struct{}, 1)

可以看到，把关闭信号从 chan bool 改成了 chan struct{}。

好处：空 struct{} 不占用空间，chan bool 占 1 字节。空 struct{} 更节省资源。

由下面测试代码可以知道：

	s := struct {}{}
	b := true
	fmt.Println("struct: ", unsafe.Sizeof(s), " bool: ", unsafe.Sizeof(b)) 
	//打印结果：struct:  0  bool:  1

一些其他 Go 中的信号

os/signal 包对信号处理。


监听收到的信号：

	func Notify(c chan<- os.Signal, sig ...os.Signal)

取消监听：

	func Stop(c chan<- os.Signal)

监听 Interrupt 信号，用户 Ctrl+C 触发：

	quit := make(chan  os.Signal, 1)
	//os.Interrupt: syscall.SIGINT
	signal.Notify(quit, os.Interrupt)   

监听所有信号：

	c := make(chan os.Signal)
	signal.Notify(c)

监听多个指定信号：

	c := make(chan os.Signal)
	signal.Notify(c,os.Interrupt, os.Kill, syscall.SIGQUIT)

一些信号：

	//操作系统收到信号后的动作:
	//Term: 表明默认动作为终止进程
	//Ign: 表明默认动作为忽略该信号
	//Core: 表明默认动作为终止进程同时输出core dump
	//Stop: 表明默认动作为停止进程

	// Signals
	const (
	    SIGABRT   = Signal(0x6) //调用abort函数触发，十进制值：6, Core
	    SIGALRM   = Signal(0xe) //时钟定时信号，十进制值：14, Term
	    SIGBUS    = Signal(0xa) //非法地址(内存地址对齐错误)，十进制值：10 Core
	    SIGCHLD   = Signal(0x14)//子进程结束(由父进程接收)，十进制值：20  Ign
	    SIGCONT   = Signal(0x13)//继续执行已经停止的进程(不能被阻塞)，十进制：19 Cont
	    SIGEMT    = Signal(0x7)
	    SIGFPE    = Signal(0x8)//算术运行错误(浮点运算错误、除数为零等)，十进制：8  Core
	    SIGHUP    = Signal(0x1)//终端控制进程结束(终端连接断开),十进制：1  Term
	    SIGILL    = Signal(0x4)//非法指令(程序错误、试图执行数据段、栈溢出等)  Core
	    SIGINFO   = Signal(0x1d)
	    SIGINT    = Signal(0x2)//用户发送INTR字符(Ctrl+C)触发，十进制值：2
	    SIGIO     = Signal(0x17)
	    SIGIOT    = Signal(0x6)
	    SIGKILL   = Signal(0x9)//无条件结束程序(不能被捕获、阻塞或忽略)十进制：9
	    SIGPIPE   = Signal(0xd)//消息管道损坏(FIFO/Socket通信时，管道未打开而进行写操作)
	    SIGPROF   = Signal(0x1b)
	    SIGQUIT   = Signal(0x3)//用户发送QUIT字符(Ctrl+/)触发，十进制值：3
	    SIGSEGV   = Signal(0xb)//无效内存引用(试图访问不属于自己的内存空间、对只读内存空间进行写操作)
	    SIGSTOP   = Signal(0x11)//停止进程(不能被捕获、阻塞或忽略)
	    SIGSYS    = Signal(0xc)
	    SIGTERM   = Signal(0xf)
	    SIGTRAP   = Signal(0x5)
	    SIGTSTP   = Signal(0x12)//停止进程(可以被捕获、阻塞或忽略)
	    SIGTTIN   = Signal(0x15)//后台程序从终端中读取数据时触发
	    SIGTTOU   = Signal(0x16)//后台程序向终端中写数据时触发
	    SIGURG    = Signal(0x10)
	    SIGUSR1   = Signal(0x1e)
	    SIGUSR2   = Signal(0x1f)
	    SIGVTALRM = Signal(0x1a)
	    SIGWINCH  = Signal(0x1c)
	    SIGXCPU   = Signal(0x18)//超过CPU时间资源限制(4.2BSD)
	    SIGXFSZ   = Signal(0x19)//超过文件大小资源限制(4.2BSD)
	)



# 🚩 MySQL
[Database/SQL](https://godoc.org/database/sql)
[Working with Unknown Columns](http://go-database-sql.org/varcols.html)
[go-sql-driver mysql](https://github.com/go-sql-driver/mysql)
[MySQL Go Walker](https://gowalker.org/github.com/go-sql-driver/mysql)

Go 连接 mysql 数据库需要两个包，一个是通用的 SQL 数据库包 `database/sql`，另一个是数据库驱动包，mysql 的驱动包使用 `github.com/go-sql-driver/mysql`。

	package main

	import (
		"database/sql"
		"fmt"
		_ "github.com/go-sql-driver/mysql"
	)

	func checkerr(err error) {
		if err != nil {
			panic(err)
		}

	}

	func rows2map(rows *sql.Rows) {
		cols, err := rows.Columns() // Remember to check err afterwards
		checkerr(err)

		vals := make([][]byte, len(cols))
		scans := make([]interface{}, len(cols))

		for i := range vals {
			scans[i] = &vals[i]
		}
		var results []map[string]string

		for rows.Next() {
			err = rows.Scan(scans...)
			checkerr(err)
			row := make(map[string]string)
			for k, v := range vals {
				key := cols[k]
				row[key] = string(v)
			}
			results = append(results, row)
		}

		fmt.Println("nickName of #0 is ", results[0]["nickName"])
		// for k, v := range results {
		// fmt.Println(k, v)
		// }
	}

	func rowsEcho(rows *sql.Rows) {
		for rows.Next() {
			var id string
			var nickName string
			var timestamp string
			err := rows.Scan(&id, &nickName, &timestamp)
			checkerr(err)
			fmt.Println(id, nickName, timestamp)
		}

	}

	func main() {
		var (
			dbusername = "root"
			dbpassword = "25414203"
			dbhostip   = "127.0.0.1"
			dbname     = "minis"
		)

		db, err := sql.Open("mysql", dbusername+":"+dbpassword+"@tcp("+dbhostip+")/"+dbname+"?charset=utf8")
		checkerr(err)

		stmt, err := db.Prepare("SELECT id,nickName,timestamp FROM wxapp_userinfo where id<?")
		checkerr(err)

		rows, err := stmt.Query("50")
		checkerr(err)

		rows2map(rows)

		defer db.Close()
		defer stmt.Close()
		defer rows.Close()

		//stmt,err:=db.Prepare("insert into note values (?,?,?,?,?)")
		// checkerr(err)
		//result,err:=stmt.Exec("888","888","888","78","79")
		// result,err:=db.Exec("delete from note where year=1")
		// checkerr(err)
		// fmt.Println(result.LastInsertId())
	}


在 `rows.Scan()` 读取字段时，传入的参数个数必须与SELECT返回的字段个数一致，否则会报错。如果只需用到数据表中的几个字段时，SELECT 语句就必须明确指定字段而不是 `*`。

	sql: expected xxx destination arguments in Scan

对未知数据类型的字段应该使用 sql.RawBytes，是转型需要使用 Type Assertion，如 `string(*joke.(*sql.RawBytes))` 将 `*sql.RawBytes` 指针所指的数据转换成字符串:


	cols, err := rows.Columns() // Remember to check err afterwards
	vals := make([]interface{}, len(cols))
	for i, _ := range cols {
		vals[i] = new(sql.RawBytes)
	}
	for rows.Next() {
		err = rows.Scan(vals...)
		// Now you can check each element of vals for nil-ness,
		// and you can use type introspection and type assertions
		// to fetch the column into a typed variable.
	}
	for it, joke := range vals {
		fmt.Print("Field #", it, "=", string(*joke.(*sql.RawBytes)), "\n")
	}


# 🚩 Beego Web Framework
[Beego](https://beego.me/)
[Beego Documentation](https://beego.me/docs/intro/)

beego 是一个快速开发 Go 应用的 HTTP 框架，他可以用来快速开发 API、Web 及后端服务等各种应用，是一个 RESTful 的框架，主要设计灵感来源于 tornado、sinatra 和 flask 这三个框架，但是结合了 Go 本身的一些特性（interface、struct 嵌入等）而设计的一个框架。


## 框架特性

✓ 简单化 RESTful 支持、MVC 模型，可以使用 bee 工具快速地开发应用，包括监控代码修改进行热编译、自动化测试代码以及自动化打包部署。

✓ 智能化 支持智能路由、智能监控，可以监控 QPS、内存消耗、CPU 使用，以及 goroutine 的运行状况，让您的线上应用尽在掌握。

✓ 模块化 beego 内置了强大的模块，包括 Session、缓存操作、日志记录、配置解析、性能监控、上下文操作、ORM 模块、请求模拟等强大的模块，足以支撑你任何的应用。

✓ 高性能 beego 采用了 Go 原生的 http 包来处理请求，goroutine 的并发效率足以应付大流量的 Web 应用和 API 应用，目前已经应用于大量高并发的产品中。

## Installation

需要将 Beego 安装到 %GOPATH%/src 目录下，包名保持和子目录结构一致，即 `github.com/astaxie/` 子目录下克隆 BeeGo 项目：

	go get github.com/astaxie/beego
	git clone https://github.com/astaxie/beego

	git clone %GOPATH%/github.com/astaxie/beego https://github.com/astaxie/beego.git

需要安装 Go 1.1+ 以确保所有功能的正常使用，需要安装或者升级 Beego 和 Bee 的开发工具:

	$ go get -u github.com/astaxie/beego
	$ go get -u github.com/beego/bee

想要快速建立一个应用来检测安装？

	$ cd $GOPATH/src
	$ bee new hello
	$ cd hello
	$ bee run

Windows 平台下输入：

	cd %GOPATH%/src
	bee new hello
	cd hello
	bee run

克隆 BeeGo 后，就可以写 Demo 程序，可以将代码 `demo.go` 保存到工作目录下:

	package main

	import "github.com/astaxie/beego"

	func main() {
	    beego.Run()
	}

编译执行：

	go build -o hello hello.go
	./hello

打开浏览器并访问 http://localhost:8080

其它实列：

	git clone https://github.com/beego/samples.git


一个 Beego 程序先要导入包 `github.com/astaxie/beego`。 Go 语言里面被导入的包会按照深度优先的顺序去执行导入包的初始化（变量和 init 函数，更多详情），beego 包中会初始化一个 BeeAPP 的应用和一些参数。

然后定义 Controller，Beego 定义了一个 struct 为 MainController，充分利用了 Go 语言的组合的概念，匿名包含了 beego.Controller。 自定义的 MainController 可以组合 beego.Controller 的所有方法。

定义 RESTful 方法，通过匿名组合之后，其实目前的 MainController 已经拥有了 Get、Post、Delete、Put 等方法，这些方法是分别用来对应用户请求的 Method 函数，如果用户发起的是 POST 请求，那么就执行 Post 函数。所以这里我们定义了 MainController 的 Get 方法用来重写继承的 Get 函数，这样当用户发起 GET 请求的时候就会执行该函数。


如何自动下载所有依赖包？

大部分情况下大家下载 Go 项目都是使用go get命令，它除了会下载指定的项目代码，还会去下载这个项目所依赖的所有项目。

但是有的时候我们的项目由于各种原因并不是通过go get下载的，是通过git clone下载的，这样代码下下来就没有依赖包了，没办法编译通过的。这样的话怎么办呢？

	go get -d -v ./...

-d 标志只下载代码包，不执行安装命令；
-v 打印详细日志和调试日志。这里加上这个标志会把每个下载的包都打印出来；
./...这个表示路径，代表当前目录下所有的文件。

# 🚩 beego.Run()


入口函数 main 里面的 beego.Run 执行之后，它内部做了很多事情：

✓ 解析配置文件

beego 会自动解析配置文件 `conf/app.conf`，配置文件可以定义：开启的端口，是否开启 session，应用名称等信息。

✓ 执行用户的 hookfunc

beego 会执行用户注册的 hookfunc，默认的已经存在了注册 mime，用户可以通过函数 `AddAPPStartHook` 注册自己的启动函数。

✓ 是否开启 session

会根据上面配置文件的分析之后判断是否开启 session，如果开启的话就初始化全局的 session。

✓ 是否编译模板

beego 会在启动的时候根据配置把 views 目录下的所有模板进行预编译，然后存在 map 里面，这样可以有效的提高模板运行的效率，无需进行多次编译。

✓ 是否开启文档功能

根据 EnableDocs 配置判断是否开启内置的文档路由功能

✓ 是否启动管理模块

beego 目前做了一个很酷的模块，应用内监控模块，会在 8088 端口做一个内部监听，我们可以通过这个端口查询到 QPS、CPU、内存、GC、goroutine、thread 等统计信息。

✓ 监听服务端口

这是最后一步也就是我们看到的访问 8080 看到的网页端口，内部其实调用了 ListenAndServe，充分利用了 goroutine 的优势

一旦 run 起来之后，我们的服务就监听在两个端口了，一个服务端口 8080 作为对外服务，另一个 8088 端口实行对内监控。


# 🚩 Routers
[Router 设置](https://beego.me/docs/mvc/controller/router.md)

	package routers

	import (
	    "quickstart/controllers"
	    "github.com/astaxie/beego"
	)

	func init() {
	    beego.Router("/", &controllers.MainController{})
	}

执行路由注册函数 `beego.Router()` 映射 URL 到 controller，第一个参数是用户请求的地址 URL，这里我们注册的是 /，也就是我们访问的不带任何参数的 URL，第二个参数是对应的 Controller，也就是我们即将把请求分发到那个控制器来执行相应的逻辑。

	beego.Router("/user", &controllers.UserController{})

这样用户就可以通过访问 `/user` 去执行 UserController 的逻辑。

通过第三个参数自定义方法指向及 RESTful 规则：

	beego.Router("/",&IndexController{},"*:Index")

使用第三个参数，第三个参数就是用来设置对应 method 到函数名，定义如下

使用 `methods:funcname` 格式来设置 HTTP 方法到控制器函数的映射，`*`表示任意的 method 都执行映射函数，多个不同的格式使用 `;` 分割。多个 method 对应同一个 funcname，method 之间通过 `,` 来分割。 以下是 RESTful 的设计示例：

	beego.Router("/api/list",&RestController{},"*:ListFood")
	beego.Router("/api/create",&RestController{},"post:CreateFood")
	beego.Router("/api/update",&RestController{},"put:UpdateFood")
	beego.Router("/api/delete",&RestController{},"delete:DeleteFood")

	beego.Router("/api",&RestController{},"get,post:ApiFunc")

	beego.Router("/simple",&SimpleController{},"get:GetFunc;post:PostFunc")

可用的 HTTP Method 有 `get`、 `post`、 `put`、 `delete`、 `patch`、 `options`、 `head`、 如果同时存在 * 和对应的 HTTP Method，那么优先执行 HTTP Method 的方法，例如同时注册了如下所示的路由：

	beego.Router("/simple",&SimpleController{},"*:AllFunc;post:PostFunc")

那么执行 POST 请求的时候，执行 PostFunc 而不执行 AllFunc。


## AutoRouter 自动匹配

自动路由：

	beego.AutoRouter(&controllers.ObjectController{})

那么 beego 就会通过反射获取该结构体中所有的实现方法，你就可以通过如下的 URL 访问到对应的方法中：

	/object/login   调用 ObjectController 中的 Login 方法
	/object/logout  调用 ObjectController 中的 Logout 方法

除了前缀两个 `/:controller/:method` 的匹配之外，URL剩下部分 beego 会自动化解析为参数，保存在 `this.Ctx.Input.Params` 当中：

`/object/blog/2013/09/12`  调用 ObjectController 中的 `Blog()` 方法，参数对应为 `map[0:2013 1:09 2:12]`

现在已经可以通过自动识别出来下面类似的所有 url，都会把请求分发到 controller 的 simple 方法：

	/controller/simple
	/controller/simple.html
	/controller/simple.json
	/controller/simple.xml

可以通过 `this.Ctx.Input.Param(":ext")` 获取后缀名。


## Comment Routers 注解路由

从 beego 1.3 版本开始支持了注解路由，用户无需在 router 中注册路由，只需要使用 `beego.Include()` 包含带注解路由 `@router`的控制器，就可以了，详细的使用请看下面的例子：

	// CMS API
	type CMSController struct {
	    beego.Controller
	}

	func (c *CMSController) URLMapping() {
	    c.Mapping("StaticBlock", c.StaticBlock)
	    c.Mapping("AllBlock", c.AllBlock)
	}

	// @router /staticblock/:key [get]
	func (this *CMSController) StaticBlock() {

	}

	// @router /all/:key [get]
	func (this *CMSController) AllBlock() {

	}

可以在 router.go 中通过如下方式注册路由：

	beego.Include(&CMSController{})

beego 自动会进行源码分析，注意只会在 dev 模式下进行生成，生成的路由放在 `/routers/commentsRouter.go` 文件中。

这样上面的路由就支持了如下的路由：

	GET /staticblock/:key
	GET /all/:key

其实效果和自己通过 Router 函数注册是一样的：

	beego.Router("/staticblock/:key", &CMSController{}, "get:StaticBlock")
	beego.Router("/all/:key", &CMSController{}, "get:AllBlock")

新版本里面增加了 `URLMapping` 函数，用户如果没有进行注册，那么就会通过反射来执行对应的函数，如果注册了就会通过 interface 来进行执行函数，性能上面会提升很多。还有命名空间路由器 namespace。

	//初始化 namespace
	ns :=
	beego.NewNamespace("/v1",
	    beego.NSCond(func(ctx *context.Context) bool {
	        if ctx.Input.Domain() == "api.beego.me" {
	            return true
	        }
	        return false
	    }),
	    beego.NSBefore(auth),
	    beego.NSGet("/notallowed", func(ctx *context.Context) {
	        ctx.Output.Body([]byte("notAllowed"))
	    }),
	    beego.NSRouter("/version", &AdminController{}, "get:ShowAPIVersion"),
	    beego.NSRouter("/changepassword", &UserController{}),
	    beego.NSNamespace("/shop",
	        beego.NSBefore(sentry),
	        beego.NSGet("/:id", func(ctx *context.Context) {
	            ctx.Output.Body([]byte("notAllowed"))
	        }),
	    ),
	    beego.NSNamespace("/cms",
	        beego.NSInclude(
	            &controllers.MainController{},
	            &controllers.CMSController{},
	            &controllers.BlockController{},
	        ),
	    ),
	)
	//注册 namespace
	beego.AddNamespace(ns)

上面这个代码支持了如下这样的请求 URL

	GET /v1/notallowed
	GET /v1/version
	GET /v1/changepassword
	POST /v1/changepassword
	GET /v1/shop/123
	GET /v1/cms/ 对应 MainController、CMSController、BlockController 中得注解路由

而且还支持前置过滤,条件判断,无限嵌套 namespace



## 基本 RESTFul 路由注册方式

	beego.Get(router, beego.FilterFunc)
	beego.Post(router, beego.FilterFunc)
	beego.Put(router, beego.FilterFunc)
	beego.Patch(router, beego.FilterFunc)
	beego.Head(router, beego.FilterFunc)
	beego.Options(router, beego.FilterFunc)
	beego.Delete(router, beego.FilterFunc)
	beego.Any(router, beego.FilterFunc)

	beego.Get("/",func(ctx *context.Context){
	     ctx.Output.Body([]byte("hello world"))
	})

	beego.Post("/alice",func(ctx *context.Context){
	     ctx.Output.Body([]byte("bob"))
	})

	beego.Any("/foo",func(ctx *context.Context){
	     ctx.Output.Body([]byte("bar"))
	})



## 支持自定义的 handler 实现

有些时候我们已经实现了一些 rpc 的应用,但是想要集成到 beego 中,或者其他的 httpserver 应用,集成到 beego 中来.现在可以很方便的集成:

	s := rpc.NewServer()
	s.RegisterCodec(json.NewCodec(), "application/json")
	s.RegisterService(new(HelloService), "")
	beego.Handler("/rpc", s)

beego.Handler(router, http.Handler) 这个函数是关键,第一个参数表示路由 URI, 第二个就是你自己实现的 http.Handler, 注册之后就会把所有 rpc 作为前缀的请求分发到 http.Handler 中进行处理.

这个函数其实还有第三个参数就是是否是前缀匹配,默认是 false, 如果设置了 true, 那么就会在路由匹配的时候前缀匹配,即 /rpc/user 这样的也会匹配去运行

## Routing & RegExp 正则路由

为了用户更加方便的路由设置，beego 参考了 sinatra 的路由实现，支持多种方式的路由：

	beego.Router("/api/?:id", &controllers.RController{})

URL `/api/123` 可以匹配成功，此时变量`:id`值为123

	beego.Router("/api/:id", &controllers.RController{})

URL `/api/123 `可以匹配成功，此时变量 `:id `值为 `123 `，但URL `/api/` 匹配失败

	beego.Router("/api/:id([0-9]+)", &controllers.RController{})

URL `/api/123`可以匹配成功，此时变量`:id`值为`123`

	beego.Router("/user/:username([\\w]+)", &controllers.RController{})

URL`/user/astaxie`可以匹配成功，此时变量`:username`值为`astaxie`

	beego.Router("/download/*.*", &controllers.RController{})

URL `/download/file/api.xml`可以匹配成功，此时变量`:path`值为`file/api`，`:ext`值为`xml`

	beego.Router("/download/ceshi/*", &controllers.RController{})

URL `/download/ceshi/file/api.json`可以匹配成功，此时变量`:splat`值为`file/api.json`

	beego.Router("/:id:int”, &controllers.RController{})

int 类型设置方式，匹配 `:id`为 int 类型，对应正则 `([0-9]+)`

	beego.Router("/:hi:string”, &controllers.RController{})

string 类型设置方式，匹配 `:hi` 为 string 类型，对应正则 `([\w]+)`

	beego.Router("/cms_:id([0-9]+).html”, &controllers.CmsController{})

带有前缀的自定义正则，匹配 `:id` 为正则类型。匹配 `cms_123.html` 这样的 URL，`:id` = 123



# 🚩 beego.Controller
[Beego Controller](https://beego.me/docs/mvc/controller/controller.md)
[Controller 运行机制](https://beego.me/docs/quickstart/controller.md)

	package controllers

	import (
	        "github.com/astaxie/beego"
	)

	type MainController struct {
	        beego.Controller
	}

	func (this *MainController) Get() {
	        this.Data["Website"] = "beego.me"
	        this.Data["Email"] = "astaxie@gmail.com"
	        this.TplName = "index.tpl"
	}

声明了一个控制器 MainController 内嵌 beego.Controller，这就是 Go 的嵌入方式。 beego.Controller 拥有很多方法，其中包括 `Init`、`Prepare`、`Post`、`Get`、`Delete`、`Head` 等方法。我们可以通过重写的方式来实现这些方法，而我们上面的代码就是重写了 `Get` 方法。

beego 是一个 RESTful 的框架，所以我们的请求默认是执行对应 `req.Method` 的方法。例如浏览器的是 `GET` 请求，那么默认就会执行 `MainController.Get()` 方法。用户可以改变这个行为，通过注册自定义的函数名，更加详细的请参考路由设置。

`this.Data` 成员是一个用来存储输出数据的 `map`，可以赋值任意类型的值，这里我们只是简单举例输出两个字符串。

`this.TplName` 就是需要渲染的模板，不设置该参数，默认加载模板目录的 `Controller/<method>.tpl`，例子这里就是 `maincontroller/get.tpl`，**文件、文件夹必须小写**。

用户设置了模板之后系统会自动的调用 `beego.Controller.Render()` 函数，当然也可以不使用模版，直接用 `this.Ctx.WriteString()` 输出字符串，如：

	func (this *MainController) Get() {
	        this.Ctx.WriteString("hello")
	}

`beego.Controller` 实现了接口 `beego.ControllerInterface`，定义了如下函数：

`Init(ct *context.Context, childName string, app interface{})`

这个函数主要初始化了 Context、相应的 Controller 名称，模板名，初始化模板参数的容器 Data，app 即为当前执行的 Controller 的 reflecttype，这个 app 可以用来执行子类的方法。

`Prepare()`

这个函数主要是为了用户扩展用的，这个函数会在下面定义的这些 Method 方法之前执行，用户可以重写这个函数实现类似用户验证之类。

`Get()`

如果用户请求的 HTTP Method 是 GET，那么就执行该函数，默认是 405，用户继承的子 struct 中可以实现了该方法以处理 Get 请求。

`Post()`

如果用户请求的 HTTP Method 是 POST，那么就执行该函数，默认是 405，用户继承的子 struct 中可以实现了该方法以处理 Post 请求。

`Delete()`

如果用户请求的 HTTP Method 是 DELETE，那么就执行该函数，默认是 405，用户继承的子 struct 中可以实现了该方法以处理 Delete 请求。

`Put()`

如果用户请求的 HTTP Method 是 PUT，那么就执行该函数，默认是 405，用户继承的子 struct 中可以实现了该方法以处理 Put 请求.

`Head()`

如果用户请求的 HTTP Method 是 HEAD，那么就执行该函数，默认是 405，用户继承的子 struct 中可以实现了该方法以处理 Head 请求。

`Patch()`

如果用户请求的 HTTP Method 是 PATCH，那么就执行该函数，默认是 405，用户继承的子 struct 中可以实现了该方法以处理 Patch 请求.

`Options()`

如果用户请求的HTTP Method是OPTIONS，那么就执行该函数，默认是 405，用户继承的子 struct 中可以实现了该方法以处理 Options 请求。

`Finish()`

这个函数是在执行完相应的 HTTP Method 方法之后执行的，默认是空，用户可以在子 struct 中重写这个函数，执行例如数据库关闭，清理数据之类的工作。

`Render() error`

这个函数主要用来实现渲染模板，如果 beego.AutoRender 为 true 的情况下才会执行。

`StopRun()` 用来提前终止执行

	func (this *RController) Prepare() {
	    this.Data["json"] = map[string]interface{}{"name": "astaxie"}
	    this.ServeJSON()
	    this.StopRun()
	}

调用 StopRun 之后，如果你还定义了 Finish 函数就不会再执行，如果需要释放资源，那么请自己在调用 StopRun 之前手工调用 Finish 函数。


## Model & ORM
[Model & ORM](https://beego.me/docs/mvc/model/overview.md)

beego ORM 是一个强大的 Go 语言 ORM 框架。她的灵感主要来自 Django ORM 和 SQLAlchemy。

目前该框架仍处于开发阶段，可能发生任何导致不兼容的改动。

已支持数据库驱动：

	MySQL：github.com/go-sql-driver/mysql
	PostgreSQL：github.com/lib/pq
	Sqlite3：github.com/mattn/go-sqlite3

以上数据库驱动均通过基本测试，但我们仍需要您的反馈。

ORM 特性：

	支持 Go 的所有类型存储
	轻松上手，采用简单的 CRUD 风格
	自动 Join 关联表
	跨数据库兼容查询
	允许直接使用 SQL 查询／映射
	严格完整的测试保证 ORM 的稳定与健壮

安装 ORM：

	go get github.com/astaxie/beego/orm


简单示例

	package main

	import (
	    "fmt"
	    "github.com/astaxie/beego/orm"
	    _ "github.com/go-sql-driver/mysql" // import your used driver
	)

	// Model Struct
	type User struct {
	    Id   int
	    Name string `orm:"size(100)"`
	}

	func init() {
	    // set default database
	    orm.RegisterDataBase("default", "mysql", "username:password@tcp(127.0.0.1:3306)/db_name?charset=utf8", 30)

	    // register model
	    orm.RegisterModel(new(User))

	    // create table
	    orm.RunSyncdb("default", false, true)
	}

	func main() {
	    o := orm.NewOrm()

	    user := User{Name: "slene"}

	    // insert
	    id, err := o.Insert(&user)
	    fmt.Printf("ID: %d, ERR: %v\n", id, err)

	    // update
	    user.Name = "astaxie"
	    num, err := o.Update(&user)
	    fmt.Printf("NUM: %d, ERR: %v\n", num, err)

	    // read one
	    u := User{Id: user.Id}
	    err = o.Read(&u)
	    fmt.Printf("ERR: %v\n", err)

	    // delete
	    num, err = o.Delete(&u)
	    fmt.Printf("NUM: %d, ERR: %v\n", num, err)
	}

关联查询

	type Post struct {
	    Id    int    `orm:"auto"`
	    Title string `orm:"size(100)"`
	    User  *User  `orm:"rel(fk)"`
	}

	var posts []*Post
	qs := o.QueryTable("post")
	num, err := qs.Filter("User__Name", "slene").All(&posts)


当您无法使用 ORM 来达到您的需求时，也可以直接使用 SQL 来完成查询／映射操作。

	var maps []orm.Params
	num, err := o.Raw("SELECT * FROM user").Values(&maps)
	for _,term := range maps{
	    fmt.Println(term["id"],":",term["name"])
	}

事务处理

	o.Begin()
	...
	user := User{Name: "slene"}
	id, err := o.Insert(&user)
	if err == nil {
	    o.Commit()
	} else {
	    o.Rollback()
	}


## BeeGo Config
[Config](https://beego.me/docs/mvc/controller/config.md)

	appname = beepkg
	httpaddr = "127.0.0.1"
	httpport = 9090
	runmode ="dev"
	autorender = false
	recoverpanic = false
	viewspath = "myview"

上面这些参数会替换 beego 默认的一些参数, beego 的参数主要有哪些呢？请参考https://godoc.org/github.com/astaxie/beego#pkg-constants 。

BConfig 就是 beego 里面的默认的配置，你也可以直接通过 `beego.BConfig.AppName="beepkg"` 这样来修改，但是配置文件就会显得更加灵活。

	mysqluser = "root"
	mysqlpass = "rootpass"
	mysqlurls = "127.0.0.1"
	mysqldb   = "beego"

那么你就可以通过如下的方式获取设置的配置信息:

	beego.AppConfig.String("mysqluser")
	beego.AppConfig.String("mysqlpass")
	beego.AppConfig.String("mysqlurls")
	beego.AppConfig.String("mysqldb")

AppConfig 的方法如下：

	Set(key, val string) error
	String(key string) string
	Strings(key string) []string
	Int(key string) (int, error)
	Int64(key string) (int64, error)
	Bool(key string) (bool, error)
	Float(key string) (float64, error)
	DefaultString(key string, defaultVal string) string
	DefaultStrings(key string, defaultVal []string)
	DefaultInt(key string, defaultVal int) int
	DefaultInt64(key string, defaultVal int64) int64
	DefaultBool(key string, defaultVal bool) bool
	DefaultFloat(key string, defaultVal float64) float64
	DIY(key string) (interface{}, error)
	GetSection(section string) (map[string]string, error)
	SaveConfigFile(filename string) error

在使用 ini 类型的配置文件中, key 支持 `section::key` 模式。 

在配置文件里面支持 section，可以有不同的 Runmode 的配置，默认优先读取 runmode 下的配置信息，例如下面的配置文件：

	appname = beepkg
	httpaddr = "127.0.0.1"
	httpport = 9090
	runmode ="dev"
	autorender = false
	recoverpanic = false
	viewspath = "myview"

	[dev]
	httpport = 8080
	[prod]
	httpport = 8088
	[test]
	httpport = 8888

上面的配置文件就是在不同的 `runmode` 下解析不同的配置，如在 dev 模式下，httpport 是 8080。解析的时候优先解析 runmode 下的配置，然后解析默认的配置。

读取不同模式下配置参数的方法如下：

	beego.AppConfig.String("dev::mysqluser")

INI 格式配置支持 include 方式，引用多个配置文件，例如下面的两个配置文件效果同上：

	appname = beepkg
	httpaddr = "127.0.0.1"
	httpport = 9090

	include "app2.conf"
	app2.conf

	runmode ="dev"
	autorender = false
	recoverpanic = false
	viewspath = "myview"

	[dev]
	httpport = 8080
	[prod]
	httpport = 8088
	[test]
	httpport = 8888

配置文件解析支持从环境变量中获取配置项，配置项格式：${环境变量}。例如下面的配置中优先使用环境变量中配置的 runmode 和 httpport，如果有配置环境变量 ProRunMode 则优先使用该环境变量值。如果不存在或者为空，则使用 “dev” 作为 runmode。

	runmode  = "${ProRunMode||dev}"
	httpport = "${ProPort||9090}"

配置文件路径，默认是应用程序对应的目录下的 conf/app.conf，用户可以在程序代码中加载自己的配置文件
beego.LoadAppConfig("ini", "conf/app2.conf")
也可以加载多个文件，只要你调用多次就可以了，如果后面的文件和前面的 key 冲突，那么以最新加载的为最新值

## App 配置

`AppName`
应用名称，默认是 beego。通过 bee new 创建的是创建的项目名。

	beego.BConfig.AppName = "beego"


`RunMode`
应用的运行模式，可选值为 prod, dev 或者 test. 默认是 dev, 为开发模式，在开发模式下出错会提示友好的出错页面，如前面错误描述中所述。

	beego.BConfig.RunMode = "dev"


`RouterCaseSensitive`
是否路由忽略大小写匹配，默认是 true，区分大小写

	beego.BConfig.RouterCaseSensitive = true


`ServerName`
beego 服务器默认在请求的时候输出 server 为 beego。

	beego.BConfig.ServerName = "beego"


`RecoverPanic`
是否异常恢复，默认值为 true，即当应用出现异常的情况，通过 recover 恢复回来，而不会导致应用异常退出。

	beego.BConfig.RecoverPanic = true


`CopyRequestBody`
是否允许在 HTTP 请求时，返回原始请求体数据字节，默认为 false （GET or HEAD or 上传文件请求除外）。

	beego.BConfig.CopyRequestBody = false


`EnableGzip`
是否开启 gzip 支持，默认为 false 不支持 gzip，一旦开启了 gzip，那么在模板输出的内容会进行 gzip 或者 zlib 压缩，根据用户的 Accept-Encoding 来判断。

	beego.BConfig.EnableGzip = false

Gzip允许用户自定义压缩级别、压缩长度阈值和针对请求类型压缩:

压缩级别, gzipCompressLevel = 9,取值为 [1,9],如果不设置为 1(最快压缩)

压缩长度阈值, gzipMinLength = 256,当原始内容长度大于此阈值时才开启压缩,默认为 20B(ngnix默认长度)

请求类型, includedMethods = get;post,针对哪些请求类型进行压缩,默认只针对 GET 请求压缩

`MaxMemory`
文件上传默认内存缓存大小，默认值是 1 << 26(64M)。

	beego.BConfig.MaxMemory = 1 << 26


`EnableErrorsShow`
是否显示系统错误信息，默认为 true。

	beego.BConfig.EnableErrorsShow = true


`EnableErrorsRender`
是否将错误信息进行渲染，默认值为 true，即出错会提示友好的出错页面，对于 API 类型的应用可能需要将该选项设置为 false 以阻止在 dev 模式下不必要的模板渲染信息返回。

## Web配置

`AutoRender`
是否模板自动渲染，默认值为 true，对于 API 类型的应用，应用需要把该选项设置为 false，不需要渲染模板。

beego.BConfig.WebConfig.AutoRender = true

`EnableDocs`
是否开启文档内置功能，默认是 false

	beego.BConfig.WebConfig.EnableDocs = true

`FlashName`
Flash 数据设置时 Cookie 的名称，默认是 BEEGO_FLASH

	beego.BConfig.WebConfig.FlashName = "BEEGO_FLASH"

`FlashSeperator`
Flash 数据的分隔符，默认是 BEEGOFLASH

	beego.BConfig.WebConfig.FlashSeperator = "BEEGOFLASH"

`DirectoryIndex`
是否开启静态目录的列表显示，默认不显示目录，返回 403 错误。

	beego.BConfig.WebConfig.DirectoryIndex = false

`StaticDir`

静态文件目录设置，默认是static

可配置单个或多个目录:

单个目录, StaticDir = download. 相当于 beego.SetStaticPath("/download","download")

多个目录, StaticDir = download:down download2:down2. 相当于 beego.SetStaticPath("/download","down") 和 beego.SetStaticPath("/download2","down2")

	beego.BConfig.WebConfig.StaticDir

`StaticExtensionsToGzip`

允许哪些后缀名的静态文件进行 gzip 压缩，默认支持 .css 和 .js

	beego.BConfig.WebConfig.StaticExtensionsToGzip = []string{".css", ".js"}

等价 config 文件中

	StaticExtensionsToGzip = .css, .js

`TemplateLeft`
模板左标签，默认值是{{。

	beego.BConfig.WebConfig.TemplateLeft="{{"

`TemplateRight`
模板右标签，默认值是}}。

	beego.BConfig.WebConfig.TemplateRight="}}"

`ViewsPath`
模板路径，默认值是 views。

	beego.BConfig.WebConfig.ViewsPath="views"

`EnableXSRF`
是否开启 XSRF，默认为 false，不开启。

	beego.BConfig.WebConfig.EnableXSRF = false

`XSRFKEY`
XSRF 的 key 信息，默认值是 beegoxsrf。 EnableXSRF＝true 才有效

	beego.BConfig.WebConfig.XSRFKEY = "beegoxsrf"

`XSRFExpire`
XSRF 过期时间，默认值是 0，不过期。

	beego.BConfig.WebConfig.XSRFExpire = 0

## 监听配置

`Graceful` 是否开启热升级，默认是 false，关闭热升级。

	beego.BConfig.Listen.Graceful=false

`ServerTimeOut` 设置 HTTP 的超时时间，默认是 0，不超时。

	beego.BConfig.Listen.ServerTimeOut=0

`ListenTCP4` 监听本地网络地址类型，默认是TCP6，可以通过设置为true设置为TCP4。

	beego.BConfig.Listen.ListenTCP4 = true

`EnableHTTP` 是否启用 HTTP 监听，默认是 true。

	beego.BConfig.Listen.EnableHTTP = true

`HTTPAddr` 应用监听地址，默认为空，监听所有的网卡 IP。

	beego.BConfig.Listen.HTTPAddr = ""

`HTTPPort` 应用监听端口，默认为 8080。

	beego.BConfig.Listen.HTTPPort = 8080

`EnableHTTPS` 是否启用 HTTPS，默认是 false 关闭。当需要启用时，先设置 EnableHTTPS = true，并设置 HTTPSCertFile 和 HTTPSKeyFile

	beego.BConfig.Listen.EnableHTTPS = false

`HTTPSAddr` 应用监听地址，默认为空，监听所有的网卡 IP。

	beego.BConfig.Listen.HTTPSAddr = ""

`HTTPSPort` 应用监听端口，默认为 10443

	beego.BConfig.Listen.HTTPSPort = 10443

`HTTPSCertFile` 开启 HTTPS 后，ssl 证书路径，默认为空。

	beego.BConfig.Listen.HTTPSCertFile = "conf/ssl.crt"

`HTTPSKeyFile` 开启 HTTPS 之后，SSL 证书 keyfile 的路径。

	beego.BConfig.Listen.HTTPSKeyFile = "conf/ssl.key"

`EnableAdmin` 是否开启进程内监控模块，默认 false 关闭。

	beego.BConfig.Listen.EnableAdmin = false

`AdminAddr` 监控程序监听的地址，默认值是 localhost 。

	beego.BConfig.Listen.AdminAddr = "localhost"

`AdminPort` 监控程序监听的地址，默认值是 8088 。

	beego.BConfig.Listen.AdminPort = 8088

`EnableFcgi` 是否启用 fastcgi ， 默认是 false。

	beego.BConfig.Listen.EnableFcgi = false

`EnableStdIo` 通过fastcgi 标准I/O，启用 fastcgi 后才生效，默认 false。

	beego.BConfig.Listen.EnableStdIo = false

## Session配置

`SessionOn` session 是否开启，默认是 false。

	beego.BConfig.WebConfig.Session.SessionOn = false

`SessionProvider` session 的引擎，默认是 memory，详细参见 session 模块。

	beego.BConfig.WebConfig.Session.SessionProvider = ""

`SessionName` 存在客户端的 cookie 名称，默认值是 beegosessionID。

	beego.BConfig.WebConfig.Session.SessionName = "beegosessionID"

`SessionGCMaxLifetime` session 过期时间，默认值是 3600 秒。

	beego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600

SessionProviderConfig

配置信息，根据不同的引擎设置不同的配置信息，详细的配置请看下面的引擎设置，详细参见 session 模块

`SessionCookieLifeTime` session 默认存在客户端的 cookie 的时间，默认值是 3600 秒。

	beego.BConfig.WebConfig.Session.SessionCookieLifeTime = 3600

`SessionAutoSetCookie` 是否开启SetCookie, 默认值 true 开启。

	beego.BConfig.WebConfig.Session.SessionAutoSetCookie = true

`SessionDomain` session cookie 存储域名, 默认空。

	beego.BConfig.WebConfig.Session.SessionDomain = ""

## Log配置

log详细配置，请参见 `logs 模块`。

`AccessLogs` 是否输出日志到 Log，默认在 prod 模式下不会输出日志，默认为 false 不输出日志。此参数不支持配置文件配置。

	beego.BConfig.Log.AccessLogs = false

`FileLineNum` 是否在日志里面显示文件名和输出日志行号，默认 true。此参数不支持配置文件配置。

	beego.BConfig.Log.FileLineNum = true

`Outputs` 日志输出配置，参考 logs 模块，console file 等配置，此参数不支持配置文件配置。

	beego.BConfig.Log.Outputs = map[string]string{"console": `""}` or

	beego.BConfig.Log.Outputs["console"] = ""

## Nginx & BeeGO
[部署到Nginx](https://beego.me/docs/deploy/nginx.md)

独立部署即为在后端运行程序，让程序跑在后台。

在 linux 下面部署，我们可以利用 nohup 命令，把应用部署在后端，如下这样执行命令，应用就跑在了 Linux 系统的守护进程：

	nohup ./beepkg &

在 Windows 系统中，设置开机自动，后台运行，可以制作 bat 文件，放在“启动”里面或制作成服务。

Go 是一个独立的 HTTP 服务器，但是我们有些时候为了 nginx 可以帮我做很多工作，例如访问日志，cc 攻击，静态服务等，nginx 已经做的很成熟了，Go 只要专注于业务逻辑和功能就好，所以通过 nginx 配置代理就可以实现多应用同时部署，如下就是典型的两个应用共享 80 端口，通过不同的域名访问，反向代理到不同的应用。

	server {
	    listen       80;
	    server_name  .a.com;

	    charset utf-8;
	    access_log  /home/a.com.access.log;

	    location /(css|js|fonts|img)/ {
	        access_log off;
	        expires 1d;

	        root "/path/to/app_a/static";
	        try_files $uri @backend;
	    }

	    location / {
	        try_files /_not_exists_ @backend;
	    }

	    location @backend {
	        proxy_set_header X-Forwarded-For $remote_addr;
	        proxy_set_header Host            $http_host;

	        proxy_pass http://127.0.0.1:8080;
	    }
	}

	server {
	    listen       80;
	    server_name  .b.com;

	    charset utf-8;
	    access_log  /home/b.com.access.log  main;

	    location /(css|js|fonts|img)/ {
	        access_log off;
	        expires 1d;

	        root "/path/to/app_b/static";
	        try_files $uri @backend;
	    }

	    location / {
	        try_files /_not_exists_ @backend;
	    }

	    location @backend {
	        proxy_set_header X-Forwarded-For $remote_addr;
	        proxy_set_header Host            $http_host;

	        proxy_pass http://127.0.0.1:8081;
	    }
	}


## Apache & BeeGo

apache 和 nginx 的实现原理一样，都是做一个反向代理，把请求向后端传递，配置如下所示：

	NameVirtualHost *:80
	<VirtualHost *:80>
	    ServerAdmin webmaster@dummy-host.example.com
	    ServerName www.a.com
	    ProxyRequests Off
	    <Proxy *>
	        Order deny,allow
	        Allow from all
	    </Proxy>
	    ProxyPass / http://127.0.0.1:8080/
	    ProxyPassReverse / http://127.0.0.1:8080/
	</VirtualHost>

	<VirtualHost *:80>
	    ServerAdmin webmaster@dummy-host.example.com
	    ServerName www.b.com
	    ProxyRequests Off
	    <Proxy *>
	        Order deny,allow
	        Allow from all
	    </Proxy>
	    ProxyPass / http://127.0.0.1:8081/
	    ProxyPassReverse / http://127.0.0.1:8081/
	</VirtualHost>

## Toolbox 进程内监控

beego 默认会开启两个端口，一个是 8080 应用端口，对外服务，一个是 8088 端口，用于监控进程内的信息，执行定时任务等。

toolbox 模块，beego 默认是关闭的，在进程开启的时候监控端口，但是默认是监听在 127.0.0.1:8088，这样无法通过外网访问。当然你可以通过各种方法访问，例如 nginx 代理。

为了安全，建议用户在防火墙中把 8088 端口给屏蔽了。你可以在 conf/app.conf 中打开它

默认监控是关闭的，你可以通过设置参数配置开启监控：

	EnableAdmin = true

而且你还可以修改监听的地址和端口：

	AdminAddr = "localhost"
	AdminPort = 8088

打开浏览器进入 http://localhost:8088/



# 🚩 Gin Web framework
[Gin HTTP web framework](https://github.com/gin-gonic/gin)
[YAML support for the Go language](https://github.com/go-yaml/yaml)

虽然YAML是参考JSON，XML和SDL等语言，不过跟这些语言比起来，YAML仍有自己的特色。YAML使用冒号加缩进的方式代表层级（属性）关系，使用短横杠(-)代表数组元素。JSON的语法是YAML1.2版的子集，同时非常接近YAML1.0与1.1版的子集，因此大部分的JSON文件都可以被YAML的剖析器剖析。这是因为JSON的语法结构和YAML的内置格式相同。虽然大范围的分层也可以使用类似JSON的内置格式，不过YAML标准并不建议这样使用，除非这样编写能让文件可读性增加。YAML的许多扩展在JSON是找不到的，如：进阶资料形态、关系锚点、字串不需要双引号、映射资料形态会储存键值的顺序。

Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin. https://gin-gonic.com/

	go get -u github.com/gin-gonic/gin

	$GOPATH\src\github.com\gin-gonic>git clone https://github.com/gin-gonic/gin


The first need Go installed (version 1.10+ is required), then you can use the below Go command to install Gin.

	$ go get -u github.com/gin-gonic/gin

Import it in your code:

	import "github.com/gin-gonic/gin"

(Optional) Import net/http. This is required for example if using constants such as http.StatusOK.

	import "net/http"


Quick start

	# assume the following codes in example.go file
	$ cat example.go
	package main

	import "github.com/gin-gonic/gin"

	func main() {
		r := gin.Default()
		r.GET("/ping", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"message": "pong",
			})
		})
		r.Run() // listen and serve on 0.0.0.0:8080
	}
	# run example.go and visit 0.0.0.0:8080/ping on browser
	$ go run example.go

依赖安装：

	go get -d -v ./...
	go get gopkg.in/yaml.v2

	git clone --branch v8.18.2 https://github.com/go-playground/validator.git
	git clone --branch v2.2.1 https://github.com/go-yaml/yaml.git



# 🚩 iris Web framework
[Iris](https://github.com/kataras/iris)
[Iris Documentation](https://docs.iris-go.com/iris/)
[Iris Wiki Documentation](https://github.com/kataras/iris/wiki)
[Iris 中文文档](https://www.studyiris.com/doc/)
[Iris Godoc](https://godoc.org/github.com/kataras/iris)
[Iris Web Framework](https://iris-go.com/start/)
[GORM](http://gorm.io/zh_CN/docs/)

Iris 框架的特性

	专注于高性能
	简单流畅的API
	高扩展性
	强大的路由和中间件生态系统
		使用iris独特的表达主义路径解释器构建RESTful API
		动态路径参数化或通配符路由与静态路由不冲突
		使用重定向选项从URL中删除尾部斜杠
		使用虚拟主机和子域名变得容易
		分组API和静态或甚至动态子域名
		net/http和negroni-like处理程序通过iris.FromStd兼容
		针对任意Http请求错误 定义处理函数
		支持事务和回滚
		支持响应缓存
		使用简单的函数嵌入资源并与go-bindata 保持兼容
		mvc

	上下文
		高度可扩展的试图渲染(目前支持markdown,json,xml，jsonp等等)
		正文绑定器和发送HTTP响应的便捷功能
		限制请求正文
		提供静态资源或嵌入式资产
		本地化i18N
		压缩（Gzip是内置的）

	身份验证
		Basic Authentication
		OAuth, OAuth2 (支持27个以上的热门网站)
		JWT *服务器
		通过TLS提供服务时，自动安装和提供来自https://letsencrypt.org的证书
		默认为关闭状态
		在关闭，错误或中断事件时注册
		连接多个服务器，完全兼容 net/http#Server
	视图系统.支持五种模板隐隐 完全兼容 html/template

	Websocket库，其API类似于socket.io [如果你愿意，你仍然可以使用你最喜欢的]

	热重启

	Typescript集成 + Web IDE


## Go 或 git 克隆安装

	$ go get -u github.com/kataras/iris
	git clone https://github.com/kataras/iris

	git clone %GOPATH%/github.com/kataras/iris https://github.com/kararas/iris.git

## Quick start

	# assume the following codes in example.go file
	$ cat example.go
	package main

	import "github.com/kataras/iris"

	func main() {
	    app := iris.Default()
	    app.Get("/ping", func(ctx iris.Context) {
	        ctx.JSON(iris.Map{
	            "message": "pong",
	        })
	    })
	    // listen and serve on http://0.0.0.0:8080.
	    app.Run(iris.Addr(":8080"))
	}

	# run example.go and visit http://0.0.0.0:8080/ping on browser
	$ go run example.go

iris 框架不像 beego 有自己的热启动命令工具，但可以使用 Beego 的 `bee run` 做热编译，也可以用第三方的 gowatch 热编译工具，提升开发效率，也是参考 bee run 实现的。

	go get github.com/silenceper/gowatch

	bee run
	bee run -main=hello.go
	bee run -main=hello.go -ex=[".\iot"]


## View 
[Iris View](https://docs.iris-go.com/iris/view)
[Iris View Layout](https://github.com/kataras/iris/tree/master/_examples/view/)

Iris支持开箱即用的6个模板引擎，所有这6个模板引擎都具有通用API的共同特征，如布局，模板功能，特定的布局，部分渲染等。

| Engine | Declaration | Underline Template Parser
| -----------|-------------|-------------|
| std template/html | `iris.HTML(...)`       | [html/template](https://golang.org/pkg/html/template/) package |
| django        | `iris.Django(...)`     | [flosch/pongo2](https://github.com/flosch/pongo2) package |
| handlebars    | `iris.Handlebars(...)` | [Joker/jade](https://github.com/Joker/jade) package |
| amber         | `iris.Amber(...)`      | [aymerick/raymond](https://github.com/aymerick/raymond) package |
| pug(jade)     | `iris.Pug(...)`        | [eknkc/amber](https://github.com/eknkc/amber) package |
| jet           | `iris.Jet(...)`        | [CloudyKit/jet](https://github.com/CloudyKit/jet) package |


Iris 为模板提供了 `yield`, `render`, `render_r`, `current`, `urlpath` 等模板函数，还有为所有模板引擎提供了 `Layouts` and `binding` across middlewares and **embedded template files**。参考官方示例 [Iris View Layout]。

如果使用标准`html/template`引擎，则需要熟悉相应的模板规则，规则参考如下：

	{{/* comments */}}
	{{.field}}
	{{.method <param> <param2> …}}

	{{ 12.3456 | printf "%.2f" }}

	{{[函数映射的名字]}}

	{{$variable}}:用于输出在模版中定义的变量名
	{{$x}}
	{{$x := “OK”}}
	{{$x := pipeline}}

	{{if .condition}} ... {{end}}
	{{if .condition}} ... {{else}} ... {{end}}
	{{if .condition}} ... {{else if .condition}} ... {{end}}
	{{if not .condition}} ... {{end}}
	{{if and .condition1 .condition2}} ... {{end}}
	{{if or .condition1 .condition2}} ... {{end}}

	{{if eq .var1 .var2}} equal {{end}}
	{{if ne .var1 .var2}} not-equal {{end}}
	{{if lt .var1 .var2}} less-than {{end}}
	{{if le .var1 .var2}} less-or-equal {{end}}
	{{if gt .var1 .var2}} greater-than {{end}}
	{{if ge .var1 .var2}} greater-or-equal {{end}}

	{{ with .arg }} 此时的点 . 就是arg {{ end }}

	{{range k,v := .slice}} ... {{end}}
	{{range .slice}} dot now is element from .slice {{.}} {{end}}

	{{define "template name"}} ... {{end}}  定义一个模版
	{{templates "template name"}}  获取另一个模版的变量

	{{ part "header" }} 在模板中定义内容占位

	<!-- Render the current template here -->
	{{ yield }} 在 layout 文件中指定渲染模板

以下示例修改自官方的 template_5，模板与 layout 结构展示了如何使用占位来渲染模板：

	<!-- layout.html -->
	<html>
	    <head>
	        {{ part "header" }}
	    </head>
	    <body>
	        {{ part "body" }}
	        {{ yield }} <!-- Render the current template here -->
	        {{ part "footer" }}
	    </body>
	</html>

	<!-- home.html -->
	{{ define "home-header"}}
		<title>{{.title}}</title>
	{{ end }}

	{{ define "home-body"}}
		<div> Hello home page </div>
	{{ end }}

	{{ define "home-footer"}}
		<div> copyrights &copy;2019 </div>
	{{ end }}

	<!-- user/index.html -->
	{{ define "user/index-body"}}
		<div> Hello home page </div>
	{{ end }}

	<div>
	    Hello user index page
	</div>

	<!-- main.go -->
	package main

	import (
		"github.com/kataras/iris"
	)

	func main() {
		app := iris.New()

		app.RegisterView(iris.HTML("./views", ".html").Layout("layout.html").Reload(true))

		app.Get("/home", func(ctx iris.Context) {
			ctx.ViewData("title", "Home page")
			ctx.View("home.html")
			// Note that: you can pass "layout" : "otherLayout.html" to bypass the config's Layout property
			// or view.NoLayout to disable layout on this render action.
			// third is an optional parameter
		})

		app.Get("/user", func(ctx iris.Context) {
			ctx.View("user/index.html")
		})

		// http://localhost:8080
		app.Run(iris.Addr(":8080"))
	}


更多示例

	package main

	import "github.com/kataras/iris"

	func main() {
	    app := iris.New()

	    // Parse all templates from the "./views" folder
	    // where extension is ".html" and parse them
	    // using the standard `html/template` package.
	    tmpl := iris.HTML("./views", ".html")

	    // Enable re-build on local template files changes.
	    tmpl.Reload(true)

	    // Default template funcs are:
	    //
	    // - {{ urlpath "myNamedRoute" "pathParameter_ifNeeded" }}
	    // - {{ render "header.html" }}
	    // and partial relative path to current page:
	    // - {{ render_r "header.html" }} 
	    // - {{ yield }}
	    // - {{ current }}
	    // Register a custom template func:
	    tmpl.AddFunc("greet", func(s string) string {
	        return "Greetings " + s + "!"
	    })

	    // Register the view engine to the views,
	    // this will load the templates.
	    app.RegisterView(tmpl)

	    // Method:    GET
	    // Resource:  http://localhost:8080
	    app.Get("/", func(ctx iris.Context) {
	    	// ctx.ViewLayout(layoutTmplFile string)
	        // Bind: {{.message}} with "Hello world!"
	        ctx.ViewData("message", "Hello world!")
	        // Render template file: ./views/hi.html
	        ctx.View("hi.html")
	    })

	    app.Run(iris.Addr(":8080"))
	}

	<html>
	<head>
	    <title>Hi Page</title>
	</head>
	<body>
	    <h1>{{.message}}</h1>
	    <strong>{{greet "to you"}}</strong>
	</body>
	</html>


在控制器方法中使用，可以覆盖 `Layout()` 中指定的布局文件：

	// Resource: http://localhost:8080/travel/user/{username:string}
	func (c *TravelController) GetUserBy(username string) mvc.Result {
		return mvc.View{
			// Data: username,
			Data: iris.Map{
				"message":  "View test for controller",
				"username": username,
			},
			Name:   "index.html",
			// Layout: "layout",
			// Layout: "layout.html",
			// Layout: "path/layout",
			// Layout: "path/layout.html",
			// NO RELATIVED PREFIX ./path/layout.html
		}
	}

注意路径不用使用相对路径 `./`，这会导致模板不能正确加载引起布局运行出错： yield was called, yet no layout defined！

## Form 表单数据处理
[HTTP Request](https://github.com\kataras\iris\_examples\http_request\read-form)
[Golang HTTP请求](https://www.jianshu.com/p/f95558a49e98)

使用以下命令测试：

	curl -d "Username=A&Mail=B&mydata=c&mydata=d" http://127.0.0.1:8080/form_action
	Visitor: main.Visitor{Username:"A", Mail:"B", Data:[]string{"c", "d"}}

	curl -d "Username=A&Mail=B&mydata=c&mydata=d" http://127.0.0.1:8080/post_value
	Username: A Mail: B Data:[]string{"c", "d"}

	curl "http://127.0.0.1:8080/query?Username=A&Mail=B&mydata=C&mydata=D"
	Username: A Mail: B  mydata: C All Data: map[string]string{"Mail":"B", "Username":"A", "mydata":"C,D"}

    curl -d "{""Username"":""A"",""Mail"":""B"",""mydata"":[""C"",""D""]}" -X POST http://127.0.0.1:8080/json
    Received: main.Visitor{Username:"A", Mail:"B", Data:[]string{"C", "D"}}

	curl -d "<visitor name=""A"" mail=""B""><li>C</li><li>D</li></visitor>" -X POST http://127.0.0.1:8080/xml
	Received: main.Visitor{XMLName:xml.Name{Space:"", Local:"visitor"}, Username:"A", Mail:"B", Data:[]string{"C", "D"}}

	POST http://127.0.0.1:8080/yaml with:
	user: A
	mail: B
	data: ["C", "D"]
	Received: main.Visitor{Username:"A", Mail:"B", Data:[]string{"C", "D"}}

    curl -H "Content-Type: multipart/form-data" -X POST http://localhost:8081/upload -F "uploadfile=@C:\pictures\001.jpg" -F "uploadfile=@C:\pictures\005zXVmagw1f10f6fheibg30a00dqb2g.gif" 


以下例程修改自官方 HTTP Request DEMO:

	package main

	import (
		"io"
		"os"
		"encoding/xml"
		"github.com/kataras/iris"
		"gopkg.in/yaml.v2"
	)

	type Visitor struct {
		XMLName  xml.Name `xml:"visitor"`   // element name
		Username string   `yaml:"user" xml:"name,attr"` // ,attr for attribute.
		Mail     string   `yaml:"mail" xml:"mail,attr"` // li for inner element name, value is its body.
		Data     []string `yaml:"data" json:"mydata" form:"mydata" xml:"li"`
	}

	// Decode implements the `kataras/iris/context#BodyDecoder` for ctx.UnmarshalBody(&visitor, nil)
	func (c *Visitor) Decode(body []byte) error {
		return yaml.Unmarshal(body, c)
	}


	func main() {
		app := iris.New()

		// set the view html template engine
		app.RegisterView(iris.HTML("./templates", ".html").Reload(true))

		app.Get("/", func(ctx iris.Context) {
			if err := ctx.View("form.html"); err != nil {
				ctx.StatusCode(iris.StatusInternalServerError)
				ctx.WriteString(err.Error())
			}
		})

		// curl -d "Username=A&Mail=B&mydata=c&mydata=d" http://127.0.0.1:8080/form_action
		app.Post("/form_action", func(ctx iris.Context) {
			visitor := Visitor{}
			err := ctx.ReadForm(&visitor)
			if err != nil && !iris.IsErrPath(err) /* see: https://github.com/kataras/iris/issues/1157 */ {
				ctx.StatusCode(iris.StatusInternalServerError)
				ctx.WriteString(err.Error())
				return
			}

			ctx.Writef("Visitor: %#v", visitor)
		})

		// curl -d "{""Username"":""A"",""Mail"":""B"",""mydata"":[""C"",""D""]}" -X POST http://127.0.0.1:8080/json
		app.Post("/json", func(ctx iris.Context) {
			visitor := Visitor{}
			if err := ctx.ReadJSON(&visitor); err != nil {
				ctx.StatusCode(iris.StatusBadRequest)
				ctx.WriteString(err.Error())
				return
			}
			ctx.Writef("Received: %#v", visitor)
		})

		// curl -d "<visitor name=""A"" mail=""B""><li>C</li><li>D</li></visitor>" -X POST http://127.0.0.1:8080/xml
		app.Post("/xml", func(ctx iris.Context) {
			var visitor Visitor
			if err := ctx.ReadXML(&visitor); err != nil {
				ctx.StatusCode(iris.StatusBadRequest)
				ctx.WriteString(err.Error())
				return
			}
			ctx.Writef("Received: %#+v", visitor)
		})

		/*
		POST http://127.0.0.1:8080/yaml with:
		user: A
		mail: B
		data: ["C", "D"]
		Received: main.Visitor{Username:"A", Mail:"B", Data:[]string{"C", "D"}}
		 */
		app.Post("/yaml", func(ctx iris.Context) {
			var visitor Visitor
			// unmarshaler := iris.UnmarshalerFunc(yaml.Unmarshal)
			if err := ctx.UnmarshalBody(&visitor, nil); err != nil {
				ctx.StatusCode(iris.StatusBadRequest)
				ctx.WriteString(err.Error())
				return
			}
			ctx.Writef("Received: %#+v", visitor)
		})

		// curl -d "Username=A&Mail=B&mydata=c&mydata=d" http://127.0.0.1:8080/post_value
		app.Post("/post_value", func(ctx iris.Context) {
			username := ctx.PostValueDefault("Username", "iris")
			mail := ctx.PostValue("Mail")
			data := ctx.PostValues("mydata")
			ctx.Writef("Username: %s Mail: %s Data:%#v", username, mail, data)
		})

		// curl "http://127.0.0.1:8080/query?Username=A&Mail=B&mydata=C&mydata=D"
		app.Get("/query", func(ctx iris.Context) {
			username := ctx.URLParamDefault("Username", "iris")
			mail := ctx.URLParam("Mail")
			data := ctx.URLParam("mydata")
			all := ctx.URLParams()
			ctx.Writef("Username: %s Mail: %s  mydata: %s All Data: %#v", username, mail, data, all)
		})

		const maxSize = 30 << 20
		app.Post("/upload", iris.LimitRequestBodySize(maxSize+1<<20), func(ctx iris.Context) {
			// Get the file from the request.
			file, info, err := ctx.FormFile("uploadfile")
			if err != nil {
				ctx.StatusCode(iris.StatusInternalServerError)
				ctx.Writef("Error while uploading: <b>%s</b>", err.Error())
				return
			}

			defer file.Close()
			fname := info.Filename

			// Create a file with the same name
			// assuming that you have a folder named 'uploads'
			out, err := os.OpenFile("./uploads/"+fname,
				os.O_WRONLY|os.O_CREATE, 0666)

			if err != nil {
				ctx.StatusCode(iris.StatusInternalServerError)
				ctx.Writef("Error while uploading: <b>%s</b>", err.Error())
				return
			}
			defer out.Close()

			_, err = io.Copy(out, file)
			if err != nil {
				ctx.StatusCode(iris.StatusInternalServerError)
				ctx.Writef("Error while copy file: <b>%s</b", err.Error())
				return
			}
			ctx.Writef("%s upload!", info.Filename)
		})

		app.Run(iris.Addr(":8081"), iris.WithoutServerError(iris.ErrServerClosed), iris.WithOptimizations)
	}

## ReadJSON & ReadXML 注意事项

使用 ctx.UnmarshalBody() 解析指定格式内容，有几种方式，一是实现 `kataras/iris/context#BodyDecoder` 接口，只有一个解码方法：

	// Decode implements the `kataras/iris/context#BodyDecoder` for ctx.UnmarshalBody(&visitor, nil)
	func (c *Visitor) Decode(body []byte) error {
		return yaml.Unmarshal(body, c)
	}

二是实现 `kataras/iris/context#Unmarshaler` 接口：

	type myBodyDecoder struct{}

	var DefaultBodyDecoder = myBodyDecoder{}

	// Implements the `kataras/iris/context#Unmarshaler` but at our example
	// we will use the simplest `context#UnmarshalerFunc` to pass just the yaml.Unmarshal.
	//
	// Can be used as: ctx.UnmarshalBody(&c, DefaultBodyDecoder)
	func (r *myBodyDecoder) Unmarshal(data []byte, outPtr interface{}) error {
		return yaml.Unmarshal(data, outPtr)
	}

三是使用封装函数，如：

	ctx.UnmarshalBody(&c, iris.UnmarshalerFunc(yaml.Unmarshal))

通过 `app.Run(..., iris.WithoutBodyConsumptionOnUnmarshal)` 可以在 Unmarshal 解码时避免消费方式读取 POST BODY 来避免数据被破坏，这样可以后续使用 `PostValue()`、`FormValue()` 多次读取访问 Request body。`FormValue()` 在读取不到 POST BODY 的数据时，还会尝试去读取 URL 附带的数据。

默认读取后缓存区就被清空，后续的读取动作就获取不到数据，不要使用 req.GetBody() 来获取输入流，它返回空指针。注意读取过程中对 io.EOF 的处理，读取到结束位置后 err 返回一个 io.EOF。以下代码提供了两种读取方式，以时直接通过 ReaderCloser.read()，另一个是通过 bytes.Buffer.ReadFrom()。

另外，`ctx.PostValue()`、 `ctx.FormValue()` 会影响到 ReadJSON 等方法读取不到数据，产生 unexpected end of JSON input PostValue。JSON 数据类型与结构体定义的类型不一致也会解析失败，产生 json: cannot unmarshal string into Go struct field。

	// app.UseGlobal(before_global)
	func before_global(ctx iris.Context) {
		if isDebug && ctx.Path()=="/login" && ctx.Request().Method=="POST" { 
			TryEcho(ctx)
			return // capture this request
		}

		ctx.Next()
	}

	type TryJSONFilter struct {
		ID        int       `json:"ID"`
		Page      int       `json:"page"`
		City      string    `json:"city"`
		Keylike   string    `json:"keylike"`
		Role      string    `json:"role"`
		Timestamp string    `json:"timestamp"`
		Time      time.Time `json:"-"`
		HasTime   bool      `json:"-"`
	}

	func (ft *TryJSONFilter) Decode(data []byte) error {
		err := json.Unmarshal(data, ft)
		if err != nil {
			fmt.Println("TryJSONFilter Decode: ", string(data), ft, err)
			return err
		}
		roles := map[string]string{
			"guest": "guest", "agent": "agent", "operator": "operator", "advanced": "advanced", "administrator": "administrator",
			"普通用户": "guest", "代理人": "agent", "操作员": "operator", "高级用户": "advanced", "管理员": "administrator",
		}
		ft.Role = roles[ft.Role]
		// page := strconv.Atoi(ctx.FormValue("page"))
		if ft.Page <= 0 {
			ft.Page = 1
		}

		time, err := time.Parse("2006-01-02", ft.Timestamp)
		ft.HasTime = err == nil
		ft.Time = time
		return err
	}

	// cls && curl -d "{""page"":2}" -X POST http://127.0.0.1:8082/tryreadjson
	// cls && curl -d "{""page"":2,""city"":""A"",""keylike"":""B"",""role"":""C"",""timestamp"":""D""}" -X POST http://127.0.0.1:8082/tryreadjson

	// unexpected end of JSON input PostValue
	// cls && curl -d "{""page"":2,""city"":""A""}" -X POST http://127.0.0.1:8082/tryreadjson?t=FormValue
	// cls && curl -d "{""page"":2,""city"":""A""}" -X POST http://127.0.0.1:8082/tryreadjson?t=PostValue

	// cls && curl -d "tp=WO7" -X POST "http://127.0.0.1:8082/tryreadjson?t=PostValuePost&tp=007"
	// cls && curl -d "tp=WO7" -X POST "http://127.0.0.1:8082/tryreadjson?t=FormValuePost&tp=007"
	// cls && curl -d "{""page"":2,""city"":""A""}" -X POST "http://127.0.0.1:8082/tryreadjson?t=FormValuePost&tp=007"

	// json: cannot unmarshal string into Go struct field TryJSONFilter.page of type int
	// cls && curl -d "{""page"":""2""}" -X POST http://127.0.0.1:8082/tryreadjson

	func TryReadJSON(ctx iris.Context) {
		t := ctx.URLParam("t") // ctx.ReadJSON() OK
		if t == "PostValue" {
			ctx.PostValue("t") // ctx.ReadJSON() - unexpected end of JSON input
		}
		if t == "FormValue" {
			ctx.FormValue("t") // ctx.ReadJSON() failure!
		}
		jsn := TryJSONFilter{}
		// err := ctx.UnmarshalBody(&jsn, nil)
		err := ctx.ReadJSON(&jsn)
		if t == "PostValuePost" {
			t = ctx.PostValue("tp") // ok if app.Run(..., iris.WithoutBodyConsumptionOnUnmarshal)
		}
		if t == "FormValuePost" {
			t = ctx.FormValue("tp") // ok if app.Run(..., iris.WithoutBodyConsumptionOnUnmarshal) or like ctx.URLParam("tp")
		}
		ctx.Writef("TryReadJSON: %v, err: %v, t: %v", jsn, err, t)
	}

	func TryEcho(ctx iris.Context) {
		req := ctx.Request()
		len := req.ContentLength
		// body := make([]byte, len)
		// size, err := req.Body.Read(body)
		buf := new(bytes.Buffer)
		size, err := buf.ReadFrom(req.Body)
		body := buf.String()
		if err == nil || err == io.EOF {
			ctx.Writef("Method: %s\n", ctx.Request().Method)
			ctx.Writef("Content Type: %s\n", req.Header.Get("Content-Type"))
			ctx.Writef("Content Length: %s [%d]\n", req.Header.Get("Content-Length"), len)
			ctx.Writef("Body Size %d: %s\n", size, string(body))
		} else {
			ctx.Writef("Get Body: %s\n", err.Error())
		}
		t := ctx.URLParam("t")
		if t=="stopit"{
			ctx.StopExecution()
		}
	}


格式化字符串 `%#+v` 将结构体接字段名打印出来，参考 fmt 包。


## Upload Files

默认最大 POST 数据 32MB，可以通过 `iris.WithPostMaxMemory(maxSize)` 配置到 `app.Run()`。

通过 `ctx.GetContentLength()` 可以获取提交的数据大小，通常这个值要额外加上 2MB 甚至 10MB 来容纳其它数据如 headers 等，可以使用中间件来限制提交的最大数据：

	maxSize = 30 << 20 // 30MB
	myLimiter := func(ctx iris.Context) {
		if ctx.GetContentLength() > maxSize { // + 2 << 20 {
			ctx.StatusCode(iris.StatusRequestEntityTooLarge)
			return
		}
		ctx.Next()`
	}

	app.Post("/upload", myLimiter, myUploadHandler)

大多数客户端都会发送 `Content-Length` 头信息表明数据大小，但是通过路由中间件 `app.Use(LimitRequestBodySize(maxSize))` 保证服务器不处理额外的数据是好的做法。`ctx.SetMaxRequestBodySize(maxSize)` 也可以在指定的响应方法中强制限定大小，它会直接关闭提交超大数据的连接，客户端会收到一个 connection reset。

	app.Post("/upload", iris.LimitRequestBodySize(maxSize), myUploadHandler)

	app.Post("/upload", func(ctx iris.Context){
		ctx.SetMaxRequestBodySize(maxSize)
		// [...]
	})

通过 `ctx.FormFile()` 方法可获取文件大小等信息，但非整个提交数据的大小：

	app.Post("/", func(ctx iris.Context){
		file, info, err := ctx.FormFile("uploadfile")
		if err != nil {
			ctx.StatusCode(iris.StatusInternalServerError)
			ctx.HTML("Error while uploading: <b>" + err.Error() + "</b>")
			return
		}

		defer file.Close()

		if info.Size > maxSize {
			ctx.StatusCode(iris.StatusRequestEntityTooLarge)
			return
		}

		// [...]
	})

测试文件上传可以使用 curl 工具：

    cls && curl -H "Content-Type: multipart/form-data" -X POST http://localhost:8080/upload_manual -F "uploadfile=@C:\pictures\001.jpg" -F "uploadfile=@C:\pictures\005zXVmagw1f10f6fheibg30a00dqb2g.gif" 

官方 DEMO：

	package main

	import (
		"crypto/md5"
		"fmt"
		"io"
		"mime/multipart"
		"os"
		"path/filepath"
		"strconv"
		"strings"
		"time"

		"github.com/kataras/iris"
	)

	func main() {
		app := iris.New()

		app.RegisterView(iris.HTML("./templates", ".html"))

		// Serve the upload_form.html to the client.
		app.Get("/upload", func(ctx iris.Context) {
			// create a token (optionally).

			now := time.Now().Unix() // UnixNano() 1567187420027000100
			h := md5.New()
			io.WriteString(h, strconv.FormatInt(now, 10))
			token := fmt.Sprintf("%x", h.Sum(nil))

			// render the form with the token for any use you'd like.
			ctx.View("upload_form.html", token)
		})

		// Handle the post request from the upload_form.html to the server.
		app.Post("/upload", func(ctx iris.Context) {
			//
			// UploadFormFiles
			// uploads any number of incoming files ("multiple" property on the form input).
			//

			// second argument is totally optionally,
			// it can be used to change a file's name based on the request,
			// at this example we will showcase how to use it
			// by prefixing the uploaded file with the current user's ip.
			ctx.UploadFormFiles("./uploads", beforeSave)
		})

		app.Post("/upload_manual", func(ctx iris.Context) {
			// Get the max post value size passed via iris.WithPostMaxMemory.
			maxSize := ctx.Application().ConfigurationReadOnly().GetPostMaxMemory()

			err := ctx.Request().ParseMultipartForm(maxSize)
			if err != nil {
				ctx.StatusCode(iris.StatusInternalServerError)
				ctx.WriteString(err.Error())
				return
			}

			form := ctx.Request().MultipartForm

			files := form.File["files[]"]
			failures := 0
			for _, file := range files {
				_, err = saveUploadedFile(file, "./uploads")
				if err != nil {
					failures++
					ctx.Writef("failed to upload: %s\n", file.Filename)
				}
			}
			ctx.Writef("%d files uploaded", len(files)-failures)
		})

		// start the server at http://localhost:8080 with post limit at 32 MB.
		app.Run(iris.Addr(":8080"), iris.WithPostMaxMemory(32<<20))
	}

	func saveUploadedFile(fh *multipart.FileHeader, destDirectory string) (int64, error) {
		src, err := fh.Open()
		if err != nil {
			return 0, err
		}
		defer src.Close()

		out, err := os.OpenFile(filepath.Join(destDirectory, fh.Filename),
			os.O_WRONLY|os.O_CREATE, os.FileMode(0666))

		if err != nil {
			return 0, err
		}
		defer out.Close()

		return io.Copy(out, src)
	}

	func beforeSave(ctx iris.Context, file *multipart.FileHeader) {
		ip := ctx.RemoteAddr()
		// make sure you format the ip in a way
		// that can be used for a file name (simple case):
		ip = strings.Replace(ip, ".", "_", -1)
		ip = strings.Replace(ip, ":", "_", -1)

		// you can use the time.Now, to prefix or suffix the files
		// based on the current time as well, as an exercise.
		// i.e unixTime :=	time.Now().Unix()
		// prefix the Filename with the $IP-
		// no need for more actions, internal uploader will use this
		// name to save the file into the "./uploads" folder.
		file.Filename = ip + "-" + file.Filename
	}


## Gorm 数据库模块
[Gorm Guides](http://gorm.io/docs/)
[Go Doc](https://godoc.org/github.com/jinzhu/gorm)
[Gorm 中文文档](https://learnku.com/docs/gorm/2018/index/3781)

数据库模块可以使用 gorm，数据库，也可以使用 xorm , beego orm 这个几 orm 都不错。没有 http 测试的支持的话，写代码，测试代码，修改 bug 的时候都会非常痛苦，特别是你的代码结构非常糟糕的时候。如果还没有写单元测试的习惯，强烈推荐了解下 TDD 测试驱动开发 Test-Driven Development。 以测试来驱动开发，测试用例先行，开发的目的就让测试通过。

	go get -u github.com/jinzhu/gorm

想要连接数据库，你需要先导入对应数据库的驱动，比如：

	import _ "github.com/go-sql-driver/mysql"

GORM 已经包装了一些驱动，以便更容易的记住导入路径，所以你可以这样导入 mysql 的驱动：

	import _ "github.com/jinzhu/gorm/dialects/mysql"
	// import _ "github.com/jinzhu/gorm/dialects/postgres"
	// import _ "github.com/jinzhu/gorm/dialects/sqlite"
	// import _ "github.com/jinzhu/gorm/dialects/mssql"

MySQL

[mysql parameters](https://github.com/go-sql-driver/mysql#parameters)

注意：想要能正确的处理 time.Time，你需要添加 parseTime 参数。
想要完全的支持 UTF-8 编码，你需要修改charset=utf8 为 charset=utf8mb4。 详情请查看 utf8mb4.

	import (
	  "github.com/jinzhu/gorm"
	  _ "github.com/jinzhu/gorm/dialects/mysql"
	)

	func main() {
	  db, err := gorm.Open("mysql", "user:password@/dbname?charset=utf8&parseTime=True&loc=Local")
	  defer db.Close()
	}

PostgreSQL

	import (
	  "github.com/jinzhu/gorm"
	  _ "github.com/jinzhu/gorm/dialects/postgres"
	)

	func main() {
	  db, err := gorm.Open("postgres", "host=myhost port=myport user=gorm dbname=gorm password=mypassword")
	  defer db.Close()
	}

Sqlite3

注意： 你也可以使用:memory: 替代文件路径。 这会告诉 sqlite 使用系统内存作为一个临时数据库。 当你针对 GORM 应用进行测试时，这特别有用，因为你的测试需要一个真正的数据库，并且该数据库位于内存中，性能也很好。

	import (
	  "github.com/jinzhu/gorm"
	  _ "github.com/jinzhu/gorm/dialects/sqlite"
	)

	func main() {
	  db, err := gorm.Open("sqlite3", "/tmp/gorm.db")
	  defer db.Close()
	}

通过 SQL Server 开始使用,它可以运行在有 Docker 环境的 Mac, Linux 上。

	import (
	  "github.com/jinzhu/gorm"
	  _ "github.com/jinzhu/gorm/dialects/mssql"
	)

	func main() {
	  db, err := gorm.Open("mssql", "sqlserver://username:password@localhost:1433?database=dbname")
	  defer db.Close()
	}


一般 golang 使用的 sqlite 驱动包都是 github.com/mattn/go-sqlite3，但是官方并没有直接支持 windows 平台的编译，需要下载安装 gcc 支持。

	go get -u github.com/mattn/go-sqlite3
	go install github.com/mattn/go-sqlite3

由 GCC 缺失或 64-bit 版本不对引起的编译错误如下:

	exec: "gcc": executable file not found in %PATH%

	cc1.exe: sorry, unimplemented: 64-bit mode not compiled in

GORM 官方支持以下几种方言：sqlite, mysql, postgres, mssql，你可以通过创建一个新的方言来为其它数据库提供支持。 当你创建一个新方言的时候，你必须实现 the dialect interface 接口。

示例程序使用了 SQLite，`db.LogMode(true).Debug()` 打开调试信息：

	package main

	import (
		"encoding/json"
		"fmt"
		"github.com/jinzhu/gorm"
		// _ "github.com/jinzhu/gorm/dalects/sqlite"
		_ "github.com/jinzhu/gorm/dialects/mysql"
	)

	type Product struct {
		gorm.Model
		Name  string
		Code  string
		Price uint
	}

	type User struct {
		gorm.Model
		Name string
		Age  uint
	}

	func main() {
		argsStr := "root:pass@tcp(localhost:3306)/miniot?charset=utf8&parseTime=True&loc=Local"
		db, err := gorm.Open("mysql", argsStr)
		// db, err := gorm.Open("sqlite3", "test.db")
		if err != nil {
			panic("failed to connect database")
		}
		defer db.Close()

		// Migrate the schema
		db.AutoMigrate(&Product{})
		db.AutoMigrate(&User{})

		// 创建
		db.Create(&Product{Code: "L1212", Price: 1000, Name: "Pie"})
		db.Create(&User{Name: "Robot", Age: 24})

		// 读取
		var product Product
		db.First(&product, 1) // 查询id为1的product
		// db.LogMode(true).Debug().First(&product, 1)
		fmt.Println("#1", product)

		db.First(&product, "code = ?", "L1212") // 查询code为l1212的product
		fmt.Println("#L1212", product)

		// 更新 - 更新product的price为2000
		db.Model(&product).Update("Price", 5000)

		var users []User
		db.Find(&users)
		jsonTxt, err := json.Marshal(users[0])
		it := users[0]
		fmt.Printf("%s \n ID:%d CT: %s DT: %s Name: %s", jsonTxt, it.ID, it.CreatedAt, it.DeletedAt, it.Name)

		// 删除 - 删除product
		db.Delete(&product)
	}

对应生成的数据表结构：

	CREATE TABLE "products" (
	    "id" integer primary key autoincrement,
	    "created_at" datetime,
	    "updated_at" datetime,
	    "deleted_at" datetime,
	    "code" varchar(255),
	    "price" integer );

	CREATE INDEX idx_products_deleted_at ON "products"(deleted_at) ;


### Gorm for SQL Join 关联查询
Belongs To: http://gorm.io/docs/belongs_to.html
Has One: http://gorm.io/docs/has_one.html
Has Many: http://gorm.io/docs/has_many.html
Many To Many: http://gorm.io/docs/many_to_many.html
Associations: http://gorm.io/docs/associations.html
Preloading (Eager Loading): http://gorm.io/docs/preload.html

参考官方文档关于 Associations 的部分，连表关系分成 Belongs To、 Has One、 Has Many、 Many To Many、 Associations 几种。

定义了一个 User 和 Company, User 中可以包含多个 Company, 如下:

	type User struct {
	    ID        int        `gorm:"TYPE:int(11); NOT NULL; PRIMARY_KEY; INDEX"`
	    Name      string     `gorm:"TYPE: VARCHAR(255); DEFAULT:'';INDEX"`
	    Companies []Company  `gorm:"FOREIGNKEY:UserId; ASSOCIATION_FOREIGNKEY:ID"`
	}
	
	type Company struct {
	    gorm.Model
	    Industry int    `gorm:"TYPE:INT(11);DEFAULT:0"`
	    Name     string `gorm:"TYPE:VARCHAR(255);DEFAULT:'';INDEX"`
	    Job      string `gorm:"TYPE:VARCHAR(255);DEFAULT:''"`
	    UserId   int    `gorm:"TYPE:int(11);NOT NULL;INDEX"`
	}

ASSOCIATION_FOREIGNKEY 指定本主表字段名作为关联外键，此关联外键字段与 FOREIGNKEY 指定的外键在连表查询时进行匹配。在查询 User 时希望把 Company 的信息也一并查询, 基本操作通过 Related()、Association()、Preload() 三种方法实现:

- 使用 Related 方法, 需要把把 User 查询好, 然后根据 User 中定义的 FOREIGNKEY 指定外键字段名去查找 Company 表中 UserId 匹配的记录, 如果没定义, 则调用 Related(value, foreignKeys) 时需要指定。注意 Related() 和 Find() 一样时立即方法，即会请求数据，如果又添加 Find(&u.Companies) 就是 Multiple Immediate Methods 方式，可能出现逻辑错误，参考 Method Chaining 链式操作。

		var u User
		db.First(&u)
		db.Model(&u).Related(&u.Companies)

- 使用 Association 方法, 需要把把 User 查询好, 然后根据 User 定义中指定的 AssociationForeignKey 去查找 Company, 必须定义。

		var u User
		db.First(&u)
		db.Model(&u).Association("Companies").Find(&u.Companies)

- 使用 Preload 方法, 在查询 User 时先去获取 Company 的记录，预加载 Companie 定义的字段 Companies，可以传入 Where 从句 Preload("Companies", "endtime > ?", time.Now())。

		// 查询单条 user
		var u User
		db.Debug().Preload("Companies").First(&u)

		// 对应的 sql 语句
		// SELECT * FROM users LIMIT 1;
		// SELECT * FROM companies WHERE user_id IN (1);
		 
		// 查询所有 user
		var users []User
		db.Debug().Preload("Companies").Find(&users)

		// 对应的 sql 语句
		// SELECT * FROM users;
		// SELECT * FROM companies WHERE user_id IN (1,2,3...);

Find(&user) 这类方法会返回完整的表字段，包含 select 没有指定的字段置 0 或空字符串，或 Unit 起始时间戳。因为 &user 本身是一个 stuct ，肯定是一个完整的结构，没有值的字段会有默认值，如果不想显示那些的话，可以使用 Scan/ScanRows 等方法。

以上 Related()、Association()、Preload() 三种方法结合 Join 方法就可以很方便的获取连表查询结果：

	db.Preload("Companies", "id > ?", 10).
		Joins("left join sops on Companies.user = sops.user").
		Where("sops.task = ?", 9).Group("sops.user").Order("sops.id").
		Find(&users)

子查询生成函数 QueryExpr() 也是经常使用的，注意的 where 从句的使用不会附加默认的 deleted_at is NULL：

	db.Where("id not in (?)", db.Table("sops").Select("user").Where("task = ?", line.Task).Group("user").QueryExpr()).
		Order("id desc").Find(&staff)
	
	SELECT * FROM `users`  WHERE (id not in (SELECT user FROM `sops`  WHERE (task = 1) GROUP BY user)) ORDER BY id desc

但通过定义模型的 TableName() 方法更简单，只需要另外定义一个包含需要字段的模型，再通过 TableName() 指定数据来源的表名即可。以下例子，TableName() 会根据当前对象的 Role 返回表名：

	type Result struct {
	  Name string
	  Age  int
	}

	func (c *Result)TableName() string {
		if c.Role == "admin" {
			return "Admin_T"
		} else {
			return "User"
		}
	}

	var result Result
	db.Table("users").Select("name, age").Where("name = ?", 3).Scan(&result)

	// Raw SQL
	db.Raw("SELECT name, age FROM users WHERE name = ?", 3).Scan(&result)


扫描 sql.Rows 数据到模型

	rows, err := db.Model(&User{}).Where("name = ?", "jinzhu").Select("name, age, email").Rows() // (*sql.Rows, error)
	defer rows.Close()

	for rows.Next() {
	  var user User
	  // ScanRows 扫描一行到 user 模型
	  db.ScanRows(rows, &user)

	  // do something
	}


使用 `*sql.Row.Scan()` 或者 `*sql.Rows.Scan()` 填充查询结果

	row := db.Table("users").Where("name = ?", "jinzhu").Select("name, age").Row() // (*sql.Row)
	row.Scan(&name, &age)

	rows, err := db.Model(&User{}).Where("name = ?", "jinzhu").Select("name, age, email").Rows() // (*sql.Rows, error)
	defer rows.Close()
	for rows.Next() {
	    ...
	    rows.Scan(&name, &age, &email)
	    ...
	}

	// 原生SQL
	rows, err := db.Raw("select name, age, email from users where name = ?", "jinzhu").Rows() // (*sql.Rows, error)
	defer rows.Close()
	for rows.Next() {
	    ...
	    rows.Scan(&name, &age, &email)
	    ...
	}



### Model 模型定义
模型一般都是普通的 Golang 的结构体，Go 的基本数据类型，或者指针。sql.Scanner 和 driver.Valuer，同时也支持接口。

例子：

	type User struct {
	  gorm.Model
	  Name         string
	  Age          sql.NullInt64
	  Birthday     *time.Time `gorm:"Column:birth_day" // 指定列映射的名称
	  Email        string  `gorm:"type:varchar(100);unique_index"`
	  Role         string  `gorm:"size:255"`           // 设置字段的大小为255个字节
	  MemberNumber *string `gorm:"unique;not null"`    // 设置 memberNumber 字段唯一且不为空
	  Num          int     `gorm:"AUTO_INCREMENT"`     // 设置 Num字段自增
	  Address      string  `gorm:"index:addr"`         // 给Address 创建一个索引名字是  `addr`
	  IgnoreMe     int     `gorm:"-"`                  // 忽略这个字段
	}

结构标签
标签是声明模型时可选的标记。GORM 支持以下标记：

支持的结构标签

	标签	    		说明
	Column			指定列的名称
	Type			指定列的类型
	Size			指定列的大小，默认是 255
	PRIMARY_KEY		指定一个列作为主键
	UNIQUE			指定一个唯一的列
	DEFAULT			指定一个列的默认值
	PRECISION		指定列的数据的精度
	NOT NULL		指定列的数据不为空
	AUTO_INCREMENT	指定一个列的数据是否自增
	INDEX			创建带或不带名称的索引，同名创建复合索引
	UNIQUE_INDEX	类似 索引，创建一个唯一的索引
	EMBEDDED		将 struct 设置为 embedded
	EMBEDDED_PREFIX	设置嵌入式结构的前缀名称
	-				忽略这些字段

关联的结构标签

有关详细信息，请查看「关联」部分

	标签	        			说明
	MANY2MANY				指定连接表名称
	FOREIGNKEY				指定外键
	ASSOCIATION_FOREIGNKEY	指定关联外键
	POLYMORPHIC				指定多态类型
	POLYMORPHIC_VALUE		指定多态的值
	JOINTABLE_FOREIGNKEY	指定连接表的外键
	ASSOCIATION_JOINTABLE_FOREIGNKEY	指定连接表的关联外键
	SAVE_ASSOCIATIONS		是否自动保存关联
	ASSOCIATION_AUTOUPDATE	是否自动更新关联
	ASSOCIATION_AUTOCREATE	是否自动创建关联
	ASSOCIATION_SAVE_REFERENCE	是否引用自动保存的关联
	PRELOAD					是否自动预加载关联

### Model 定制模型

一个模型如上面的 User 关联数据表名是 users，模型名是驼峰式如 UserMeta 关联表名 user_meta，连续大写字母 ABC 则直接转为小写。

Gorm 模型提供了方法回调机制让用户深度定制模型，例如想自己根据不同的条件来创建对应的表名，可以重写模型的 TableName() 方法：

	func (c *User)TableName() string {
		if c.ID == "1" {
			return "Admin_T"
		} else {
			return "Guest_T"
		}
	}

在操作时通过 Table() 方法指定表名，这个方法只对立即操作方法有效，如 Find() 这种方法就可以，但像 Preload() 这种方法就无效：

	// Create `core_users` table with struct User's definition
	db.Table("core_users").CreateTable(&User{})

	var core_users []User
	db.Table("core_users").Find(&core_users)
	//// SELECT * FROM core_users;

	db.Table("core_users").Where("name = ?", "jinzhu").Delete()
	//// DELETE FROM core_users WHERE name = 'jinzhu';


可以通过定义 DefaultTableNameHandler 修改默认表名生成规则

	gorm.DefaultTableNameHandler = func (db *gorm.DB, defaultTableName string) string  {
	  return "prefix_" + defaultTableName;
	}


### Migration 迁移

自动迁移
自动迁移你的模型，使之保持最新状态。

警告： 自动迁移 只会 创建表、缺失的列、缺失的索引， 不会 更改现有列的类型或删除未使用的列，以此来保护您的数据。

	db.AutoMigrate(&User{})

	db.AutoMigrate(&User{}, &Product{}, &Order{})

	// 创建表时添加表后缀
	db.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&User{})

其它迁移工具

GORM 的自动迁移在大多数情况下都会正常工作，但如果你需要更严格的迁移工具， GORM 提供了通用 DB interface ，这可能对你有帮助。

	// 返回 `*sql.DB`
	db.DB()

参考 通用 Interface 获取详情。

模型方法
Has Table

	// 检查模型 User 的表是否存在
	db.HasTable(&User{})

	// 检查表 users 是否存在
	db.HasTable("users")

Create Table

	// 为模型 `User` 创建表
	db.CreateTable(&User{})

	// 创建表时会追加 “ENGINE=InnoDB” 到 SQL 语句中。
	db.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&User{})

Drop table
	
	// 删除模型 `User` 的表
	db.DropTable(&User{})

	// 删除表 `users`
	db.DropTable("users")

	// 删除模型 `User` 的表和表 `products`
	db.DropTableIfExists(&User{}, "products")

ModifyColumn
修改列类型为给定的值

	// 修改模型 `User` 的 description 列的类型为 `text` 
	db.Model(&User{}).ModifyColumn("description", "text")

DropColumn

	// 删除模型 `User` 的 description 列
	db.Model(&User{}).DropColumn("description")

Add Indexes

	// 为 `name` 列添加名为 `idx_user_name` 的普通索引
	db.Model(&User{}).AddIndex("idx_user_name", "name")

	// 为 `name` 和 `age` 两列添加名为 `idx_user_name_age` 的普通索引
	db.Model(&User{}).AddIndex("idx_user_name_age", "name", "age")

	// 添加唯一索引
	db.Model(&User{}).AddUniqueIndex("idx_user_name", "name")

	// 为多列添加唯一索引
	db.Model(&User{}).AddUniqueIndex("idx_user_name_age", "name", "age")

Remove Index

	// 删除索引
	db.Model(&User{}).RemoveIndex("idx_user_name")

Add Foreign Key

	// 添加外键
	// 第一个参数： 外键字段
	// 第二个参数：目标表名(字段)
	// 第三个参数：删除时
	// 第四个参数： 更新时
	db.Model(&User{}).AddForeignKey("city_id", "cities(id)", "RESTRICT", "RESTRICT")

Remove ForeignKey

	db.Model(&User{}).RemoveForeignKey("city_id", "cities(id)")

### Query

#### db.First(&user)
获取第一条记录，按主键排序

	SELECT * FROM users ORDER BY id LIMIT 1;

#### db.Take(&user)

	func (s *DB) Take(out interface{}, where ...interface{}) *DB

Take return a record that match given conditions, the order will depend on the database implementation


获取一条记录，不指定排序

	SELECT * FROM users LIMIT 1;

#### db.Last(&user)
获取最后一条记录，按主键排序

	SELECT * FROM users ORDER BY id DESC LIMIT 1;

#### db.Find(&users)
获取所有的记录

	SELECT * FROM users;

#### db.First(&user, 10)
通过主键进行查询 (仅适用于主键是数字类型)

	SELECT * FROM users WHERE id = 10;



### db.Where() 查询条件

要和查询方法链式书写才有效，并且可以多次调用。

	func (s *DB) Where(query interface{}, args ...interface{}) *DB

Where return a new relation, filter records with given conditions, accepts `map`, `struct` or `string` as conditions, refer http://jinzhu.github.io/gorm/crud.html#query


获取第一条匹配的记录

	db.Where("name = ?", "jinzhu").First(&user)
	//// SELECT * FROM users WHERE name = 'jinzhu' limit 1;

获取所有匹配的记录

	db.Where("name = ?", "jinzhu").Find(&users)
	//// SELECT * FROM users WHERE name = 'jinzhu';

<>

	db.Where("name <> ?", "jinzhu").Find(&users)

IN

	db.Where("name in (?)", []string{"jinzhu", "jinzhu 2"}).Find(&users)

LIKE

	db.Where("name LIKE ?", "%jin%").Find(&users)

AND

	db.Where("name = ? AND age >= ?", "jinzhu", "22").Find(&users)

Time

	db.Where("updated_at > ?", lastWeek).Find(&users)

BETWEEN

	db.Where("created_at BETWEEN ? AND ?", lastWeek, today).Find(&users)

Struct

	db.Where(&User{Name: "jinzhu", Age: 20}).First(&user)
	//// SELECT * FROM users WHERE name = "jinzhu" AND age = 20 LIMIT 1;

Map

	db.Where(map[string]interface{}{"name": "jinzhu", "age": 20}).Find(&users)
	//// SELECT * FROM users WHERE name = "jinzhu" AND age = 20;

多主键 slice 查询

	db.Where([]int64{20, 21, 22}).Find(&users)
	//// SELECT * FROM users WHERE id IN (20, 21, 22);

#### db.Where(&User{Name: "jinzhu", Age: 0}).Find(&users)

NOTE 当通过 struct 进行查询的时候，GORM 将会查询这些字段的非零值， 意味着你的字段包含 0， ''， false 或者其他 零值 , 将不会出现在查询语句中， 例如:

	SELECT * FROM users WHERE name = "jinzhu";

你可以考虑适用指针类型或者 scanner/valuer 来避免这种情况。

	// 使用指针类型
	type User struct {
	  gorm.Model
	  Name string
	  Age  *int
	}

	// 使用 scanner/valuer
	type User struct {
	  gorm.Model
	  Name string
	  Age  sql.NullInt64
	}

### Not 查询
和 Where 查询类似


	db.Not("name", "jinzhu").First(&user)
	//// SELECT * FROM users WHERE name <> "jinzhu" LIMIT 1;

不包含

	db.Not("name", []string{"jinzhu", "jinzhu 2"}).Find(&users)
	//// SELECT * FROM users WHERE name NOT IN ("jinzhu", "jinzhu 2");

不在主键 slice 中

	db.Not([]int64{1,2,3}).First(&user)
	//// SELECT * FROM users WHERE id NOT IN (1,2,3);

	db.Not([]int64{}).First(&user)
	//// SELECT * FROM users;

原生 SQL

	db.Not("name = ?", "jinzhu").First(&user)
	//// SELECT * FROM users WHERE NOT(name = "jinzhu");

Struct

	db.Not(User{Name: "jinzhu"}).First(&user)
	//// SELECT * FROM users WHERE name <> "jinzhu";

### Or 查询

	db.Where("role = ?", "admin").Or("role = ?", "super_admin").Find(&users)
	//// SELECT * FROM users WHERE role = 'admin' OR role = 'super_admin';

Struct

	db.Where("name = 'jinzhu'").Or(User{Name: "jinzhu 2"}).Find(&users)
	//// SELECT * FROM users WHERE name = 'jinzhu' OR name = 'jinzhu 2';

Map

	db.Where("name = 'jinzhu'").Or(map[string]interface{}{"name": "jinzhu 2"}).Find(&users)
	//// SELECT * FROM users WHERE name = 'jinzhu' OR name = 'jinzhu 2';

### inline-where 内l联条件查询

和 Where 查询类似。需要注意的是，当使用链式调用传入行内条件查询时，这些查询不会被传参给后续的中间方法。

通过主键进行查询 (仅适用于主键是数字类型)

	db.First(&user, 23)
	//// SELECT * FROM users WHERE id = 23 LIMIT 1;

非数字类型的主键查询

	db.First(&user, "id = ?", "string_primary_key")
	//// SELECT * FROM users WHERE id = 'string_primary_key' LIMIT 1;

原生 SQL

	db.Find(&user, "name = ?", "jinzhu")
	//// SELECT * FROM users WHERE name = "jinzhu";

	db.Find(&users, "name <> ? AND age > ?", "jinzhu", 20)
	//// SELECT * FROM users WHERE name <> "jinzhu" AND age > 20;

Struct

	db.Find(&users, User{Age: 20})
	//// SELECT * FROM users WHERE age = 20;

Map

	db.Find(&users, map[string]interface{}{"age": 20})
	//// SELECT * FROM users WHERE age = 20;

为查询 SQL 添加额外的选项

	db.Set("gorm:query_option", "FOR UPDATE").First(&user, 10)
	//// SELECT * FROM users WHERE id = 10 FOR UPDATE;

### db.FirstOrInit()
获取第一条匹配的记录，或者通过给定的条件下初始一条新的记录（仅适用与于 struct 和 map 条件）。

	// 未查询到
	db.FirstOrInit(&user, User{Name: "non_existing"})
	//// user -> User{Name: "non_existing"}

	// 查询到
	db.Where(User{Name: "Jinzhu"}).FirstOrInit(&user)
	//// user -> User{Id: 111, Name: "Jinzhu", Age: 20}
	db.FirstOrInit(&user, map[string]interface{}{"name": "jinzhu"})
	//// user -> User{Id: 111, Name: "Jinzhu", Age: 20}

### db.Attrs()

如果未找到记录，则使用参数初始化 struct

	// 未查询到
	db.Where(User{Name: "non_existing"}).Attrs(User{Age: 20}).FirstOrInit(&user)
	//// SELECT * FROM USERS WHERE name = 'non_existing';
	//// user -> User{Name: "non_existing", Age: 20}

	db.Where(User{Name: "non_existing"}).Attrs("age", 20).FirstOrInit(&user)
	//// SELECT * FROM USERS WHERE name = 'non_existing';
	//// user -> User{Name: "non_existing", Age: 20}

	// 查询到
	db.Where(User{Name: "Jinzhu"}).Attrs(User{Age: 30}).FirstOrInit(&user)
	//// SELECT * FROM USERS WHERE name = jinzhu';
	//// user -> User{Id: 111, Name: "Jinzhu", Age: 20}

### db.Assign()
无论是否查询到数据，都将参数赋值给 struct

	// 未查询到
	db.Where(User{Name: "non_existing"}).Assign(User{Age: 20}).FirstOrInit(&user)
	//// user -> User{Name: "non_existing", Age: 20}

	// 查询到
	db.Where(User{Name: "Jinzhu"}).Assign(User{Age: 30}).FirstOrInit(&user)
	//// SELECT * FROM USERS WHERE name = jinzhu';
	//// user -> User{Id: 111, Name: "Jinzhu", Age: 30}

### FirstOrCreate
获取第一条匹配的记录，或者通过给定的条件创建一条记录 （仅适用与于 struct 和 map 条件）。

	// 未查询到
	db.FirstOrCreate(&user, User{Name: "non_existing"})
	//// INSERT INTO "users" (name) VALUES ("non_existing");
	//// user -> User{Id: 112, Name: "non_existing"}

	// 查询到
	db.Where(User{Name: "Jinzhu"}).FirstOrCreate(&user)
	//// user -> User{Id: 111, Name: "Jinzhu"}

### db.QueryExpr() 表达式与子查询

使用 `*gorm.expr` 进行子查询

	db.Where("amount > ?", DB.Table("orders").Select("AVG(amount)").Where("state = ?", "paid").QueryExpr()).Find(&orders)
	// SELECT * FROM "orders"  WHERE "orders"."deleted_at" IS NULL AND (amount > (SELECT AVG(amount) FROM "orders"  WHERE (state = 'paid')));

### db.Select() 查询字段
指定要从数据库检索的字段，默认情况下，将选择所有字段，Select 方法要和后面的查询方法链式书写才有效。

	db.Select("name, age").Find(&users)
	//// SELECT name, age FROM users;

	db.Select([]string{"name", "age"}).Find(&users)
	//// SELECT name, age FROM users;

	db.Table("users").Select("COALESCE(age,?)", 42).Rows()
	//// SELECT COALESCE(age,'42') FROM users;

### db.Order() 排序
使用 Order 从数据库查询记录时，当第二个参数设置为 true 时，将会覆盖之前的定义条件。

	db.Order("age desc, name").Find(&users)
	//// SELECT * FROM users ORDER BY age desc, name;

	// 多个排序条件
	db.Order("age desc").Order("name").Find(&users)
	//// SELECT * FROM users ORDER BY age desc, name;

	// 重新排序
	db.Order("age desc").Find(&users1).Order("age", true).Find(&users2)
	//// SELECT * FROM users ORDER BY age desc; (users1)
	//// SELECT * FROM users ORDER BY age; (users2)

### db.Limit() 分页
指定要查询的最大记录数

	db.Limit(3).Find(&users)
	//// SELECT * FROM users LIMIT 3;

	// 用 -1 取消 LIMIT 限制条件
	db.Limit(10).Find(&users1).Limit(-1).Find(&users2)
	//// SELECT * FROM users LIMIT 10; (users1)
	//// SELECT * FROM users; (users2)

### db.Offset() 分页起点
指定在开始返回记录之前要跳过的记录数。

	db.Offset(3).Find(&users)
	//// SELECT * FROM users OFFSET 3;

	// 用 -1 取消 OFFSET 限制条件
	db.Offset(10).Find(&users1).Offset(-1).Find(&users2)
	//// SELECT * FROM users OFFSET 10; (users1)
	//// SELECT * FROM users; (users2)


### db.Count() 合计
获取模型记录数

	db.Where("name = ?", "jinzhu").Or("name = ?", "jinzhu 2").Find(&users).Count(&count)
	//// SELECT * from USERS WHERE name = 'jinzhu' OR name = 'jinzhu 2'; (users)
	//// SELECT count(*) FROM users WHERE name = 'jinzhu' OR name = 'jinzhu 2'; (count)

	db.Model(&User{}).Where("name = ?", "jinzhu").Count(&count)
	//// SELECT count(*) FROM users WHERE name = 'jinzhu'; (count)

	db.Table("deleted_users").Count(&count)
	//// SELECT count(*) FROM deleted_users;

注意： 在查询链中使用 Count 时，必须放在最后一个位置，因为它会覆盖 SELECT 查询条件。

### db.Group() 和 db.Having() 分组统计

	rows, err := db.Table("orders").Select("date(created_at) as date, sum(amount) as total").Group("date(created_at)").Rows()
	for rows.Next() {
	    ...
	}

	rows, err := db.Table("orders").Select("date(created_at) as date, sum(amount) as total").Group("date(created_at)").Having("sum(amount) > ?", 100).Rows()
	for rows.Next() {
	    ...
	}

	type Result struct {
	    Date  time.Time
	    Total int64
	}
	db.Table("orders").Select("date(created_at) as date, sum(amount) as total").Group("date(created_at)").Having("sum(amount) > ?", 100).Scan(&results)

### db.Joins() 联表
指定关联条件

	rows, err := db.Table("users").Select("users.name, emails.email").Joins("left join emails on emails.user_id = users.id").Rows()
	for rows.Next() {
	    ...
	}

	db.Table("users").Select("users.name, emails.email").Joins("left join emails on emails.user_id = users.id").Scan(&results)

	// 多个关联查询
	db.Joins("JOIN emails ON emails.user_id = users.id AND emails.email = ?", "jinzhu@example.org").Joins("JOIN credit_cards ON credit_cards.user_id = users.id").Where("credit_cards.number = ?", "411111111111").Find(&user)

### db.Pluck()
使用 Pluck 从模型中查询单个列作为集合。如果想查询多个列，应该使用 Scan 代替。

	var ages []int64
	db.Find(&users).Pluck("age", &ages)

	var names []string
	db.Model(&User{}).Pluck("name", &names)

	db.Table("deleted_users").Pluck("name", &names)

	// Requesting more than one column? Do it like this:
	db.Select("name, age").Find(&users)

### db.Scan()
将 Scan 查询结果放入另一个结构体中。

	type Result struct {
	    Name string
	    Age  int
	}

	var result Result
	db.Table("users").Select("name, age").Where("name = ?", 3).Scan(&result)

	// Raw SQL
	db.Raw("SELECT name, age FROM users WHERE name = ?", 3).Scan(&result)

### db.ScanRows()

	func (s *DB) ScanRows(rows *sql.Rows, result interface{}) error

ScanRows scan `*sql.Rows` to give struct


### db.Create() 创建记录

	user := User{Name: "Jinzhu", Age: 18, Birthday: time.Now()}
	db.NewRecord(user) // => 返回 `true` ，因为主键为空
	db.Create(&user)   // => return *gorm.DB
	db.NewRecord(user) // => 在 `user` 之后创建返回 `false`

你可以通过标签定义字段的默认值，例如：

	type Animal struct {
	    ID   int64
	    Name string `gorm:"default:'galeone'"`
	    Age  int64
	}

然后 SQL 会排除那些没有值或者有 零值 的字段，在记录插入数据库之后，gorm 将从数据库中加载这些字段的值。

	var animal = Animal{Age: 99, Name: ""}
	db.Create(&animal)
	// INSERT INTO animals("age") values('99');
	// SELECT name from animals WHERE ID=111; // 返回的主键是 111
	// animal.Name => 'galeone'

注意 所有包含零值的字段，像 0，''，false 或者其他的 零值  不会被保存到数据库中，但会使用这个字段的默认值。你应该考虑使用指针类型或者其他的值来避免这种情况:

	// Use pointer value
	type User struct {
	  gorm.Model
	  Name string
	  Age  *int `gorm:"default:18"`
	}

	// Use scanner/valuer
	type User struct {
	  gorm.Model
	  Name string
	  Age  sql.NullInt64 `gorm:"default:18"`
	}

如果你想在 BeforeCreate 钩子函数中更新字段的值，应该使用 scope.SetColumn，例如：

	func (user *User) BeforeCreate(scope *gorm.Scope) error {
	  scope.SetColumn("ID", uuid.New())
	  return nil
	}

为插入 SQL 语句添加额外选项

	db.Set("gorm:insert_option", "ON CONFLICT").Create(&product)
	// INSERT INTO products (name, code) VALUES ("name", "code") ON CONFLICT;


###  db.Save() 更新所有字段
Save 方法在执行 SQL 更新操作时将包含所有字段，即使这些字段没有被修改。

	db.First(&user)

	user.Name = "jinzhu 2"
	user.Age = 100
	db.Save(&user)

	//// UPDATE users SET name='jinzhu 2', age=100, birthday='2016-01-01', updated_at = '2013-11-17 21:34:10' WHERE id=111;

### db.Update()  db.Updates() 更新已更改的字段

如果你只想更新已经修改了的字段，可以使用 Update，Updates 方法。

	// 如果单个属性被更改了，更新它
	db.Model(&user).Update("name", "hello")
	//// UPDATE users SET name='hello', updated_at='2013-11-17 21:34:10' WHERE id=111;

	// 使用组合条件更新单个属性
	db.Model(&user).Where("active = ?", true).Update("name", "hello")
	//// UPDATE users SET name='hello', updated_at='2013-11-17 21:34:10' WHERE id=111 AND active=true;

	// 使用 `map` 更新多个属性，只会更新那些被更改了的字段
	db.Model(&user).Updates(map[string]interface{}{"name": "hello", "age": 18, "actived": false})
	//// UPDATE users SET name='hello', age=18, actived=false, updated_at='2013-11-17 21:34:10' WHERE id=111;

	// 使用 `struct` 更新多个属性，只会更新那些被修改了的和非空的字段
	db.Model(&user).Updates(User{Name: "hello", Age: 18})
	//// UPDATE users SET name='hello', age=18, updated_at = '2013-11-17 21:34:10' WHERE id = 111;

	// 警告： 当使用结构体更新的时候, GORM 只会更新那些非空的字段
	// 例如下面的更新，没有东西会被更新，因为像 "", 0, false 是这些字段类型的空值
	db.Model(&user).Updates(User{Name: "", Age: 0, Actived: false})

更新选中的字段
如果你在执行更新操作是只想更新或者忽略某些字段，可以使用 Select，Omit 方法。

	db.Model(&user).Select("name").Updates(map[string]interface{}{"name": "hello", "age": 18, "actived": false})
	//// UPDATE users SET name='hello', updated_at='2013-11-17 21:34:10' WHERE id=111;

	db.Model(&user).Omit("name").Updates(map[string]interface{}{"name": "hello", "age": 18, "actived": false})
	//// UPDATE users SET age=18, actived=false, updated_at='2013-11-17 21:34:10' WHERE id=111;

更新列钩子方法
上面的更新操作更新时会执行模型的 BeforeUpdate 和 AfterUpdate 方法，来更新 UpdatedAt 时间戳，并且保存他的 关联。如果你不想执行这些操作，可以使用 UpdateColumn，UpdateColumns 方法。

	// Update single attribute, similar with `Update`
	db.Model(&user).UpdateColumn("name", "hello")
	//// UPDATE users SET name='hello' WHERE id = 111;

	// Update multiple attributes, similar with `Updates`
	db.Model(&user).UpdateColumns(User{Name: "hello", Age: 18})
	//// UPDATE users SET name='hello', age=18 WHERE id = 111;

批量更新时，钩子函数不会执行

	db.Table("users").Where("id IN (?)", []int{10, 11}).Updates(map[string]interface{}{"name": "hello", "age": 18})
	//// UPDATE users SET name='hello', age=18 WHERE id IN (10, 11);

	// 使用结构体更新将只适用于非零值，或者使用 map[string]interface{}
	db.Model(User{}).Updates(User{Name: "hello", Age: 18})
	//// UPDATE users SET name='hello', age=18;

	// 使用 `RowsAffected` 获取更新影响的记录数
	db.Model(User{}).Updates(User{Name: "hello", Age: 18}).RowsAffected

带有表达式的 SQL 更新

	DB.Model(&product).Update("price", gorm.Expr("price * ? + ?", 2, 100))
	//// UPDATE "products" SET "price" = price * '2' + '100', "updated_at" = '2013-11-17 21:34:10' WHERE "id" = '2';

	DB.Model(&product).Updates(map[string]interface{}{"price": gorm.Expr("price * ? + ?", 2, 100)})
	//// UPDATE "products" SET "price" = price * '2' + '100', "updated_at" = '2013-11-17 21:34:10' WHERE "id" = '2';

	DB.Model(&product).UpdateColumn("quantity", gorm.Expr("quantity - ?", 1))
	//// UPDATE "products" SET "quantity" = quantity - 1 WHERE "id" = '2';

	DB.Model(&product).Where("quantity > 1").UpdateColumn("quantity", gorm.Expr("quantity - ?", 1))
	//// UPDATE "products" SET "quantity" = quantity - 1 WHERE "id" = '2' AND quantity > 1;

如果你想使用 BeforeUpdate、BeforeSave 钩子函数修改更新的值，可以使用 scope.SetColumn 方法，例如：

	func (user *User) BeforeSave(scope *gorm.Scope) (err error) {
	  if pw, err := bcrypt.GenerateFromPassword(user.Password, 0); err == nil {
	    scope.SetColumn("EncryptedPassword", pw)
	  }
	}

在更新 SQL 语句中添加额外的 SQL 选项

	db.Model(&user).Set("gorm:update_option", "OPTION (OPTIMIZE FOR UNKNOWN)").Update("name", "hello")
	//// UPDATE users SET name='hello', updated_at = '2013-11-17 21:34:10' WHERE id=111 OPTION (OPTIMIZE FOR UNKNOWN);


### db.Delete() 删除记录

Delete Record 删除记录

返回值 db 可能包含错误信息：

	{
		Error: {Number: 1146, Message: "Table 'miniot.field_sets' doesn't exist"}
		RowsAffected: 0
	}

警告：当删除一条记录的时候，你需要确定这条记录的主键有值，GORM 会使用主键来删除这条记录。如果主键字段为空，GORM 会删除模型中所有的记录。

	// 删除一条存在的记录
	db.Delete(&email)
	//// DELETE from emails where id=10;

	// 为删除 SQL 语句添加额外选项
	db.Set("gorm:delete_option", "OPTION (OPTIMIZE FOR UNKNOWN)").Delete(&email)
	//// DELETE from emails where id=10 OPTION (OPTIMIZE FOR UNKNOWN);

Batch Delete 批量删除
删除所有匹配的记录

	db.Where("email LIKE ?", "%jinzhu%").Delete(Email{})
	//// DELETE from emails where email LIKE "%jinzhu%";

	db.Delete(Email{}, "email LIKE ?", "%jinzhu%")
	//// DELETE from emails where email LIKE "%jinzhu%";

Soft Delete 软删除
如果模型中有 DeletedAt 字段，它将自动拥有软删除的能力！当执行删除操作时，数据并不会永久的从数据库中删除，而是将 DeletedAt 的值更新为当前时间。

	db.Delete(&user)
	//// UPDATE users SET deleted_at="2013-10-29 10:23" WHERE id = 111;

	// 批量删除
	db.Where("age = ?", 20).Delete(&User{})
	//// UPDATE users SET deleted_at="2013-10-29 10:23" WHERE age = 20;

	// 在查询记录时，软删除记录会被忽略
	db.Where("age = 20").Find(&user)
	//// SELECT * FROM users WHERE age = 20 AND deleted_at IS NULL;

Delete record permanently

	// 使用 Unscoped 方法查找软删除记录
	db.Unscoped().Where("age = 20").Find(&users)
	//// SELECT * FROM users WHERE age = 20;

	// 使用 Unscoped 方法永久删除记录
	db.Unscoped().Delete(&order)
	//// DELETE FROM orders WHERE id=10;


### Method Chaining 链式操作
Gorm 继承了链式操作接口， 所以你可以写像下面一样的代码：

	db, err := gorm.Open("postgres", "user=gorm dbname=gorm sslmode=disable")

	// 创建一个新的关系
	tx := db.Where("name = ?", "jinzhu")

	// 新增更多的筛选条件
	if someCondition {
	    tx = tx.Where("age = ?", 20)
	} else {
	    tx = tx.Where("age = ?", 30)
	}

	if yetAnotherCondition {
	    tx = tx.Where("active = ?", 1)
	}

直到调用立即方法之前都不会产生查询，在某些场景中会很有用。

就像你可以封装一个包来处理一些常见的逻辑

立即方法 Immediate Methods
立即方法就是那些会产生 SQL 查询并且发送到数据库，通常它就是一些 CRUD 方法， 就像:

	Create, First, Find, Take, Save, UpdateXXX, Delete, Scan, Row, Rows...

下面是一个立即方法的例子:

	tx.Find(&user)
	// SELECT * FROM users where name = 'jinzhu' AND age = 30 AND active = 1;

Scopes 方法
Scope 方法基于链式操作理论创建的。

使用它，你可以提取一些通用逻辑，写一些更可用的库。

	func AmountGreaterThan1000(db *gorm.DB) *gorm.DB {
	    return db.Where("amount > ?", 1000)
	}

	func PaidWithCreditCard(db *gorm.DB) *gorm.DB {
	    return db.Where("pay_mode_sign = ?", "C")
	}

	func PaidWithCod(db *gorm.DB) *gorm.DB {
	    return db.Where("pay_mode_sign = ?", "C")
	}

	func OrderStatus(status []string) func (db *gorm.DB) *gorm.DB {
	    return func (db *gorm.DB) *gorm.DB {
	        return db.Scopes(AmountGreaterThan1000).Where("status in (?)", status)
	    }
	}

	db.Scopes(AmountGreaterThan1000, PaidWithCreditCard).Find(&orders)
	// 查找所有大于1000的信用卡订单和金额

	db.Scopes(AmountGreaterThan1000, PaidWithCod).Find(&orders)
	// 查找所有大于1000的 COD 订单和金额

	db.Scopes(AmountGreaterThan1000, OrderStatus([]string{"paid", "shipped"})).Find(&orders)
	// 查找大于1000的所有付费和运单

Multiple Immediate Methods 多个立即方法
当使用 GORM 的立即方法，后面的立即方法将复用前面的立即方法的搜索条件（不包含内联条件）

	db.Where("name LIKE ?", "jinzhu%").Find(&users, "id IN (?)", []int{1, 2, 3}).Count(&count)

Generates 生成

	SELECT * FROM users WHERE name LIKE 'jinzhu%' AND id IN (1, 2, 3)
	SELECT count(*) FROM users WHERE name LIKE 'jinzhu%'

Thread Safety 线程安全
所有的链式操作都将会克隆并创建一个新的数据库对象（共享一个连接池），GORM 对于多个 goroutines 的并发使用是安全的。


### Hooks Method 钩子方法

对象的生命周期
钩子是一个在 插入 / 查询 / 更新 / 删除 之前或之后被调用的方法。

如果你在一个模型中定义了特殊的方法，它将会在插入，更新，查询，删除的时候被自动调用，如果任何的回调抛出错误，GORM 将会停止将要执行的操作并且回滚当前的改变。

可用于创建对象时的钩子

	// 开启事务
	BeforeSave
	BeforeCreate
	// 连表前的保存
	// 更新时间戳 `CreatedAt`, `UpdatedAt`
	// 保存自己
	// 重载哪些有默认值和空的字段
	// 链表后的保存
	AfterCreate
	AfterSave
	// 提交或回滚事务

代码例子:

	func (u *User) BeforeSave() (err error) {
	    if u.IsValid() {
	        err = errors.New("can't save invalid data")
	    }
	    return
	}

	func (u *User) AfterCreate(scope *gorm.Scope) (err error) {
	    if u.ID == 1 {
	    scope.DB().Model(u).Update("role", "admin")
	  }
	    return
	}
	注意，在 GORM 中的保存 / 删除 操作会默认进行事务处理，所以在事物中，所有的改变都是无效的，直到它被提交为止:

	func (u *User) AfterCreate(tx *gorm.DB) (err error) {
	    tx.Model(u).Update("role", "admin")
	    return
	}

可用于更新对象时的钩子

	// 开启事务
	BeforeSave
	BeforeUpdate
	// 链表前的保存
	// 更新时间戳 `UpdatedAt`
	// 保存自身
	// 链表后的保存
	AfterUpdate
	AfterSave
	// 提交或回滚的事务

代码示例:

	func (u *User) BeforeUpdate() (err error) {
	    if u.readonly() {
	        err = errors.New("read only user")
	    }
	    return
	}

	// 在事务结束后，进行更新数据
	func (u *User) AfterUpdate(tx *gorm.DB) (err error) {
	  if u.Confirmed {
	    tx.Model(&Address{}).Where("user_id = ?", u.ID).Update("verfied", true)
	  }
	    return
	}

可用于删除对象时的钩子

	// 开启事务
	BeforeDelete
	// 删除自身
	AfterDelete
	// 提交或回滚事务

代码示例:

	// 在事务结束后进行更新数据
	func (u *User) AfterDelete(tx *gorm.DB) (err error) {
	  if u.Confirmed {
	    tx.Model(&Address{}).Where("user_id = ?", u.ID).Update("invalid", false)
	  }
	    return
	}

可用于查询时的钩子

	// 从数据库中读取数据
	// 加载之前 (急于加载)
	AfterFind

代码示例:

	func (u *User) AfterFind() (err error) {
	  if u.MemberShip == "" {
	    u.MemberShip = "user"
	  }
	    return
	}


### SQL Builder & Run Raw SQL
[Database SQL](https://godoc.org/database/sql)

#### db.Exec() & db.Raw()

执行原生 SQL 时不能通过链式调用其他方法

	db.Exec("DROP TABLE users;")
	db.Exec("UPDATE orders SET shipped_at=? WHERE id IN (?)", time.Now(), []int64{11,22,33})

	// Scan
	type Result struct {
	    Name string
	    Age  int
	}

	var result Result
	db.Raw("SELECT name, age FROM users WHERE name = ?", 3).Scan(&result)

#### sql.Row.Scan() & sql.Rows.Scan() & db.Model()
[sql.Rows Example](https://godoc.org/database/sql#example-Rows)

database/sql 包的 `Row.Scan()` 或 `Rows.Scan()` 按照官方的实现要求，对一条记录扫码时必须按 Select 指明所有字段及相同顺序设置变量。比如 SQL 是`select col1,col2,col3` 对应 `row.Scan(&col1, &col2, &col3)`，不能缺失变量。`db.ScanRows()` 方法不是 database/sql 包的方法，没有这个要求，会自行按结构体的字段赋值。

	age := 27
	rows, err := db.QueryContext(ctx, "SELECT name FROM users WHERE age=?", age)
	if err != nil {
	    log.Fatal(err)
	}
	defer rows.Close()

	names := make([]string, 0)
	for rows.Next() {
	    var name string
	    if err := rows.Scan(&name); err != nil {
	        log.Fatal(err)
	    }
	    names = append(names, name)
	}
	// Check for errors from iterating over rows.
	if err := rows.Err(); err != nil {
	    log.Fatal(err)
	}
	log.Printf("%s are %d years old", strings.Join(names, ", "), age)


使用 `*sql.Row` 或者 `*sql.Rows` 获得查询结果

	row := db.Table("users").Where("name = ?", "jinzhu").Select("name, age").Row() // (*sql.Row)
	row.Scan(&name, &age)

	rows, err := db.Model(&User{}).Where("name = ?", "jinzhu").Select("name, age, email").Rows() // (*sql.Rows, error)
	defer rows.Close()
	for rows.Next() {
	    ...
	    rows.Scan(&name, &age, &email)
	    ...
	}

	// 原生SQL
	rows, err := db.Raw("select name, age, email from users where name = ?", "jinzhu").Rows() // (*sql.Rows, error)
	defer rows.Close()
	for rows.Next() {
	    ...
	    rows.Scan(&name, &age, &email)
	    ...
	}

#### db.ScanRows() & db.Model()

扫描 sql.Rows 数据到模型

	rows, err := db.Model(&User{}).Where("name = ?", "jinzhu").Select("name, age, email").Rows() // (*sql.Rows, error)
	defer rows.Close()

	for rows.Next() {
	  var user User
	  // ScanRows 扫描一行到 user 模型
	  db.ScanRows(rows, &user)

	  // do something
	}


### Migration 数据库迁移

自动迁移
使用 migrate 来维持你的表结构一直处于最新状态。

警告：migrate 仅支持创建表，没有的字段和没有索引。为了保护你的数据，它并不支持改变已有的字段类型或删除未被使用的字段

	db.AutoMigrate(&User{})

	db.AutoMigrate(&User{}, &Product{}, &Order{})

	// 创建表的时候，添加表后缀
	db.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&User{})

其他数据库迁移工具
GORM 的数据库迁移工具能够支持主要的数据库，但是如果你要寻找更多的迁移工具， GORM 会提供的数据库接口，这可能可以给到你帮助。

	// 返回 `*sql.DB`
	db.DB()

表结构的方法
Has Table

	// 检查模型中 User 表是否存在
	db.HasTable(&User{})

	// 检查 users 表是否存在
	db.HasTable("users")

Create Table

	// 通过模型 User 创建表
	db.CreateTable(&User{})

	// 在创建 users 表的时候，会在 SQL 语句中拼接上 `"ENGINE=InnoDB"`
	db.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&User{})

Drop table

	// 删除模型 User 表
	db.DropTable(&User{})

	// 删除 users 表
	db.DropTable("users")

	// 删除模型 User 表和 products 表
	db.DropTableIfExists(&User{}, "products")

ModifyColumn
以给定的值来定义字段类型

	// User 模型，改变 description 字段的数据类型为 `text`
	db.Model(&User{}).ModifyColumn("description", "text")

DropColumn

	// User 模型，删除  description 字段
	db.Model(&User{}).DropColumn("description")

Add Indexes

	// 为 `name` 字段建立一个名叫 `idx_user_name` 的索引
	db.Model(&User{}).AddIndex("idx_user_name", "name")

	// 为 `name`, `age` 字段建立一个名叫 `idx_user_name_age` 的索引
	db.Model(&User{}).AddIndex("idx_user_name_age", "name", "age")

	// 添加一条唯一索引
	db.Model(&User{}).AddUniqueIndex("idx_user_name", "name")

	// 为多个字段添加唯一索引
	db.Model(&User{}).AddUniqueIndex("idx_user_name_age", "name", "age")

Remove Index

	// 移除索引
	db.Model(&User{}).RemoveIndex("idx_user_name")

Add Foreign Key

	// 添加主键
	// 第一个参数 : 主键的字段
	// 第二个参数 : 目标表的 ID
	// 第三个参数 : ONDELETE
	// 第四个参数 : ONUPDATE
	db.Model(&User{}).AddForeignKey("city_id", "cities(id)", "RESTRICT", "RESTRICT")

Remove ForeignKey

	db.Model(&User{}).RemoveForeignKey("city_id", "cities(id)")


### Transactions 事务

GORM 默认在事务中执行单个 create， update， delete 操作，以确保数据库数据完整性。

如果你想将多个 create， update， delete 当成一个原子性操作，Transaction 就是为了这个而创造的。

要在事务中执行一组操作，正常的流程如下所示。

	// 开启事务
	tx := db.Begin()

	// 在事务中执行一些数据库操作 （从这里开始使用 'tx'，而不是 'db'）
	tx.Create(...)

	// ...

	// 发生错误回滚事务
	tx.Rollback()

	// 或者提交这个事务
	tx.Commit()

具体例子

	func CreateAnimals(db *gorm.DB) err {
	  // 注意在事务中要使用 tx 作为数据库句柄
	  tx := db.Begin()
	  defer func() {
	    if r := recover(); r != nil {
	      tx.Rollback()
	    }
	  }()

	  if tx.Error != nil {
	    return err
	  }

	  if err := tx.Create(&Animal{Name: "Giraffe"}).Error; err != nil {
	     tx.Rollback()
	     return err
	  }

	  if err := tx.Create(&Animal{Name: "Lion"}).Error; err != nil {
	     tx.Rollback()
	     return err
	  }

	  return tx.Commit().Error
	}


### 通用数据库对象 sql.DB

GORM 提供了从当前的 `*gorm.DB` 连接中返回通用的数据库接口的方法 `DB *sql.DB` 。

	// 获取通用数据库对象 sql.DB 来使用他的 db.DB() 方法

	// Ping
	db.DB().Ping()

注意： 如果底层的数据库连接不是 `*sql.DB`。就像在事务中，它将返回 nil。

连接池

	// SetMaxIdleConns 设置空闲连接池中的最大连接数。
	db.DB().SetMaxIdleConns(10)

	// SetMaxOpenConns 设置数据库连接最大打开数。
	db.DB().SetMaxOpenConns(100)

	// SetConnMaxLifetime 设置可重用连接的最长时间
	db.DB().SetConnMaxLifetime(time.Hour)


### Error Handling 错误处理
由于 GORM 的 链式 API，GORM 中的错误处理与惯用的 Go 代码不同，但它仍然相当容易。

如果发生任何错误，GORM 会将其设置为 * gorm.DB 的 Error 字段，你可以这样检查：

	if err := db.Where("name = ?", "jinzhu").First(&user).Error; err != nil {
	    // error handling...
	}

或者

	if result := db.Where("name = ?", "jinzhu").First(&user); result.Error != nil {
	    // error handling...
	}

错误
在处理数据期间，发生几个错误很普遍，GORM 提供了一个 API 来将所有发生的错误作为切片返回

	// 如果有多个错误产生，`GetErrors` 返回一个 `[]error`的切片
	db.First(&user).Limit(10).Find(&users).GetErrors()

	fmt.Println(len(errors))

	for _, err := range errors {
	  fmt.Println(err)
	}

RecordNotFound 错误
GORM 提供了一个处理 RecordNotFound 错误的快捷方式，如果发生了多个错误，它将检查每个错误，如果它们中的任何一个是 RecordNotFound 错误。

	//检查是否返回 RecordNotFound 错误
	db.Where("name = ?", "hello world").First(&user).RecordNotFound()

	if db.Model(&user).Related(&credit_card).RecordNotFound() {
	  // 数据没有找到
	}

	if err := db.Where("name = ?", "jinzhu").First(&user).Error; gorm.IsRecordNotFoundError(err) {
	  // 数据没有找到
	}

## Associations 关联 连表查询

### Belongs to 关联

属于

belongs to 会与另一个模型建立一对一关系，因此声明的每一个模型实例都会”属于”另一个模型实例。

例如, 如果您的应用程序包含用户和配置文件, 并且可以将每个配置文件分配给一个用户

	type User struct {
	  gorm.Model
	  Name string
	}

	// `Profile` 属于 `User`， 外键是`UserID` 
	type Profile struct {
	  gorm.Model
	  UserID int
	  User   User
	  Name   string
	}

外键

Foreign Key，若要定义属于关系的外键必须存在, 默认外键使用所有者的类型名称及其主键。

对于上述例子，定义一个属于 User 的模型，外键应该是 UserID。

GORM 提供了自定义外键的方法，例如：

	type User struct {
	  gorm.Model
	  Name string
	}

	type Profile struct {
	  gorm.Model
	  Name      string
	  User      User `gorm:"foreignkey:UserRefer"` // 使用 UserRefer 作为外键
	  UserRefer uint
	}

关联外键

对于一个 belongs to 关系，GORM 通常使用所有者的主键作为外键的值，对于上面例子，外键的值是 User 的 ID。

当你关联一个 profile 到一个 user 时，GORM 将保存 user 的 ID 到 profile 的 UserID 字段。

你可以用 association_foreignkey 标签来更改它，例如：

	type User struct {
	  gorm.Model
	  Refer string
	  Name string
	}

	type Profile struct {
	  gorm.Model
	  Name      string
	  User      User `gorm:"association_foreignkey:Refer"` // 使用 Refer 作为外键
	  UserRefer string
	}

Belongs To 的使用

你可以使用 Related 查找 belongs to 关系。

	db.Model(&user).Related(&profile)
	//// SELECT * FROM profiles WHERE user_id = 111; // 111 is user's ID


### Has One

在一个 has one 关联中，其也与另一个 model 建立了一对一关系，但它和一对一关系有不同的语义（及结果）。 Has one 表示：model 的每一个示例都包含或拥有另一个 model 的示例。

例如，你的应用包含了用户和信用卡，并且每个用户只能有一张信用卡。

	type User struct {
	    gorm.Model
	    CreditCard   CreditCard
	}

	// 用户有一张信用卡，UserID 是外键
	type CreditCard struct {
	    gorm.Model
	    Number   string
	    UserID   uint
	}

外键

Foreign Key，在 has one 关系中，被拥有 model 必须存在一个外键字段，用于保存所属 model 的主键。

外键字段的名称通常使用 has one 拥有者 model 加上它的 主键 生成，对于上面的例子，其外键名为 UserID.

当你为用户关联信用卡时，信用卡会保存用户的 ID 到它的 UserID 字段。

如果你想使用另一个字段来记录该关系，您可以通过标签 foreignkey 来改变它， 例如：

	type User struct {
	    gorm.Model
	    CreditCard CreditCard `gorm:"foreignkey:UserName"`
	}

	type CreditCard struct {
	    gorm.Model
	    Number   string
	    UserName string
	}

关联外键

Association ForeignKey，默认情况下，在 has one 中，被拥有 model 会使用其外键，保存拥有者 model 的主键，您可以更改保存至另一个字段，例如上面例子中的 Name.

	type User struct {
	    gorm.Model
	    Name       `sql:"index"`
	    CreditCard CreditCard `gorm:"foreignkey:uid;association_foreignkey:name"`
	}

	type CreditCard struct {
	    gorm.Model
	    Number string
	    UID    string
	}

多态关联

Polymorphism Association，Gorm 支持 has many 和 has one 的多态关联。

	type Cat struct {
	  ID    int
	  Name  string
	  Toy   Toy `gorm:"polymorphic:Owner;"`
	}

	type Dog struct {
	  ID   int
	  Name string
	  Toy  Toy `gorm:"polymorphic:Owner;"`
	}

	type Toy struct {
	  ID        int
	  Name      string
	  OwnerID   int
	  OwnerType string
	}

注意：many-to-many 明确的不支持多态关联，如果使用会抛出错误。

Has One 的使用

你可以通过 Related 使用 has one 关联。

	var card CreditCard
	db.Model(&user).Related(&card, "CreditCard")
	//// SELECT * FROM credit_cards WHERE user_id = 123; // 123 is user's primary key
	// CreditCard 是 users 的字段，其含义是，获取 user 的 CreditCard 并填充至 card 变量
	// 如果字段名与 model 名相同，比如上面的例子，此时字段名可以省略不写，像这样：
	db.Model(&user).Related(&card)


### Has Many

在一个 has many 关联中，其也与另一个 model 建立了一对多关系，不同于 has one，model 的拥有者可以有零个或多个实例。

例如，你的应用包含了用户和信用卡，并且每个用户可以有多张信用卡。

	// 用户有多张信用卡， UserID 是外键
	type User struct {
	    gorm.Model
	    CreditCards []CreditCard
	}

	type CreditCard struct {
	    gorm.Model
	    Number   string
	    UserID  uint
	}

外键

Foreign Key，在 has many 关系中，被拥有 model 必须存在一个外键字段，默认的外键字段名称通常使用其拥有者 model 加上它的主键（比如 UserID, CardID, 等）。

例如：定义一个属于 User 的 model，它的外键应该为 UserID.

要使用另一个字段作为外键，你可以通过标签 foreignkey 来定制它，例如：

	type User struct {
	  gorm.Model
	  CreditCards []CreditCard `gorm:"foreignkey:UserRefer"`
	}

	type CreditCard struct {
	  gorm.Model
	  Number    string
	  UserRefer uint
	}

关联外键

Association ForeignKey，GORM 通常使用拥有者的主键作为外键的值，在上面的例子中，它是 User 的 ID.

当你为用户关联信用卡时，GORM 会保存用户的 ID 到信用卡的 UserID 字段。

您可以通过标签 association_foreignkey 来改变它，例如：

	type User struct {
	  gorm.Model
	  MemberNumber string
	  CreditCards  []CreditCard `gorm:"foreignkey:UserMemberNumber;association_foreignkey:MemberNumber"`
	}

	type CreditCard struct {
	  gorm.Model
	  Number           string
	  UserMemberNumber string
	}

多态关联

Polymorphism Association，GORM 支持 has many 和 has one 的多态关联。

	type Cat struct {
	  ID    int
	  Name  string
	  Toy   []Toy `gorm:"polymorphic:Owner;"`
	}

	type Dog struct {
	  ID   int
	  Name string
	  Toy  []Toy `gorm:"polymorphic:Owner;"`
	}

	type Toy struct {
	  ID        int
	  Name      string
	  OwnerID   int
	  OwnerType string
	}

注意：many-to-many 明确的不支持多态关联，如果使用会抛出错误。

Has Many 的使用

你可以通过 Related 使用 has many 关联。

	db.Model(&user).Related(&emails)
	//// SELECT * FROM emails WHERE user_id = 111; // 111 is user's primary key


### Many To Many

Many to Many 在两个 model 中添加一张连接表。

比如，您的应用程序包含用户和语言，一个用户可以说多种语言，多个用户也可以说某一种语言。

	// 用户拥有且属于多种语言，使用 `user_languages` 作为连接表
	type User struct {
	    gorm.Model
	    Languages         []Language `gorm:"many2many:user_languages;"`
	}

	type Language struct {
	    gorm.Model
	    Name string
	}

互引用关联

	// Back-Reference，用户拥有且属于多种语言，使用 `user_languages` 作为连接表
	type User struct {
	    gorm.Model
	    Languages         []*Language `gorm:"many2many:user_languages;"`
	}

	type Language struct {
	    gorm.Model
	    Name string
	    Users             []*User     `gorm:"many2many:user_languages;"`
	}

	var users []User
	language := Language{}

	db.First(&language, "id = ?", 111)

	db.Model(&language).Related(&users,  "Users")
	//// SELECT * FROM "users" INNER JOIN "user_languages" ON "user_languages"."user_id" = "users"."id" WHERE  ("user_languages"."language_id" IN ('111'))

多外键

	type CustomizePerson struct {
	  IdPerson string             `gorm:"primary_key:true"`
	  Accounts []CustomizeAccount `gorm:"many2many:PersonAccount;association_foreignkey:idAccount;foreignkey:idPerson"`
	}

	type CustomizeAccount struct {
	  IdAccount string `gorm:"primary_key:true"`
	  Name      string
	}

Foreign Keys，它将为这两个 struct 创建多对多关系，并且他们的关系将被保存到连接表 PersonAccount ，连接表的外键为 customize_person_id_person 和 customize_account_id_account.

连接表外键

Jointable ForeignKey，如果你想改变连接表的外键，你可以使用标签 association_jointable_foreignkey 和 jointable_foreignkey.

	type CustomizePerson struct {
	  IdPerson string             `gorm:"primary_key:true"`
	  Accounts []CustomizeAccount `gorm:"many2many:PersonAccount;foreignkey:idPerson;association_foreignkey:idAccount;association_jointable_foreignkey:account_id;jointable_foreignkey:person_id;"`
	}

	type CustomizeAccount struct {
	  IdAccount string `gorm:"primary_key:true"`
	  Name      string
	}

自引用关联

Self-Referencing，在自引用的多对多关系中，你必须在连接表中修改关联外键。

使用属性名及其主键生成关联外键，使得关联外键与外键不同，比如：

	type User struct {
	  gorm.Model
	  Friends []*User `gorm:"many2many:friendships;association_jointable_foreignkey:friend_id"`
	}

GORM 会生成一个关联表，其外键为 user_id 和 friend_id，并用其保存自引用用户关系。

然后你还是可以像正常关系一样操作它们，比如：

	DB.Preload("Friends").First(&user, "id = ?", 1)
	DB.Model(&user).Association("Friends").Append(&User{Name: "friend1"}, &User{Name: "friend2"})
	DB.Model(&user).Association("Friends").Delete(&User{Name: "friend2"})
	DB.Model(&user).Association("Friends").Replace(&User{Name: "new friend"})
	DB.Model(&user).Association("Friends").Clear()
	DB.Model(&user).Association("Friends").Count()

Many To Many 的使用

	db.Model(&user).Related(&languages, "Languages")
	//// SELECT * FROM "languages" INNER JOIN "user_languages" ON "user_languages"."language_id" = "languages"."id" WHERE "user_languages"."user_id" = 111

	// 查询 user 时会预加载 Languages
	db.Preload("Languages").First(&user)

### Association 关联

自动创建/更新
创建/更新记录时, GORM 将自动保存关联及其引用。如果关联具有主键, GORM 将调用 Update 来保存它, 否则将创建它。

	user := User{
	    Name:            "jinzhu",
	    BillingAddress:  Address{Address1: "Billing Address - Address 1"},
	    ShippingAddress: Address{Address1: "Shipping Address - Address 1"},
	    Emails:          []Email{
	        {Email: "jinzhu@example.com"},
	        {Email: "jinzhu-2@example.com"},
	    },
	    Languages:       []Language{
	        {Name: "ZH"},
	        {Name: "EN"},
	    },
	}

	db.Create(&user)
	//// BEGIN TRANSACTION;
	//// INSERT INTO "addresses" (address1) VALUES ("Billing Address - Address 1");
	//// INSERT INTO "addresses" (address1) VALUES ("Shipping Address - Address 1");
	//// INSERT INTO "users" (name,billing_address_id,shipping_address_id) VALUES ("jinzhu", 1, 2);
	//// INSERT INTO "emails" (user_id,email) VALUES (111, "jinzhu@example.com");
	//// INSERT INTO "emails" (user_id,email) VALUES (111, "jinzhu-2@example.com");
	//// INSERT INTO "languages" ("name") VALUES ('ZH');
	//// INSERT INTO user_languages ("user_id","language_id") VALUES (111, 1);
	//// INSERT INTO "languages" ("name") VALUES ('EN');
	//// INSERT INTO user_languages ("user_id","language_id") VALUES (111, 2);
	//// COMMIT;

	db.Save(&user)

跳过自动更新
如果数据库中已存在关联, 你可能不希望对其进行更新。

可以使用 DB 设置, 将 gorm: association_autoupdate 设置为 false

	// Don't update associations having primary key, but will save reference
	db.Set("gorm:association_autoupdate", false).Create(&user)
	db.Set("gorm:association_autoupdate", false).Save(&user)
	或者使用 GORM  gorm:"association_autoupdate:false"

	type User struct {
	  gorm.Model
	  Name       string
	  CompanyID  uint
	  // Don't update associations having primary key, but will save reference
	  Company    Company `gorm:"association_autoupdate:false"`
	}

跳过自动创建
即使你禁用了 AutoUpdating，没有主键的关联仍然会被创建，所有关联的引用也会被保存。

如果你也想跳过，那么你可以通过 DB 的设置，将gorm:association_autocreate设置为false

	// Don't create associations w/o primary key, WON'T save its reference
	db.Set("gorm:association_autocreate", false).Create(&user)
	db.Set("gorm:association_autocreate", false).Save(&user)

或使用 GORM tags GORM: "association_autocreate: false"

	type User struct {
	  gorm.Model
	  Name       string
	  // Don't create associations w/o primary key, WON'T save its reference
	  Company1   Company `gorm:"association_autocreate:false"`
	}

跳过自动创建及更新
若要禁用 自动创建 及 自动更新, 可以将这两个设置一起使用

	db.Set("gorm:association_autoupdate", false).Set("gorm:association_autocreate", false).Create(&user)

	type User struct {
	  gorm.Model
	  Name    string
	  Company Company `gorm:"association_autoupdate:false;association_autocreate:false"`
	}

或使用 GORM Tag gorm: save_associations

	db.Set("gorm:save_associations", false).Create(&user)
	db.Set("gorm:save_associations", false).Save(&user)

	type User struct {
	  gorm.Model
	  Name    string
	  Company Company `gorm:"association_autoupdate:false"`
	}

跳过引用的保存
如果你不想保存关联的引用，那么你可以使用下面的技巧

	db.Set("gorm:association_save_reference", false).Save(&user)
	db.Set("gorm:association_save_reference", false).Create(&user)

或者使用 GORM Tag

	type User struct {
	  gorm.Model
	  Name       string
	  CompanyID  uint
	  Company    Company `gorm:"association_save_reference:false"`
	}

关联模式
关联模式包含几个帮助方法，可以更方便的来管理关联

	// 开始使用关联模式
	var user User
	db.Model(&user).Association("Languages")
	// `user` 是源，必须包含主键
	// `Languages` 是关系中的源的字段名
	// 只有在满足上面两个条件时，关联模式才能正常工作，请注意检查错误：
	// db.Model(&user).Association("Languages").Error

查找关联
查找匹配的关联

	db.Model(&user).Association("Languages").Find(&languages)

添加关联
为many to many，has many添加新的关联关系代替当前的关联关系has one，belongs to

	db.Model(&user).Association("Languages").Append([]Language{languageZH, languageEN})
	db.Model(&user).Association("Languages").Append(Language{Name: "DE"})

替换关联
使用新关联替换当前关联

	db.Model(&user).Association("Languages").Replace([]Language{languageZH, languageEN})
	db.Model(&user).Association("Languages").Replace(Language{Name: "DE"}, languageEN)

删除关联
删除关联的引用，不会删除关联本身

	db.Model(&user).Association("Languages").Delete([]Language{languageZH, languageEN})
	db.Model(&user).Association("Languages").Delete(languageZH, languageEN)

清空关联
清空对关联的引用，不会删除关联本身

	db.Model(&user).Association("Languages").Clear()

关联的数量
返回关联的数量

	db.Model(&user).Association("Languages").Count()


### Preloading (预加载)

预加载

	db.Preload("Orders").Find(&users)
	//// SELECT * FROM users;
	//// SELECT * FROM orders WHERE user_id IN (1,2,3,4);

	db.Preload("Orders", "state NOT IN (?)", "cancelled").Find(&users)
	//// SELECT * FROM users;
	//// SELECT * FROM orders WHERE user_id IN (1,2,3,4) AND state NOT IN ('cancelled');

	db.Where("state = ?", "active").Preload("Orders", "state NOT IN (?)", "cancelled").Find(&users)
	//// SELECT * FROM users WHERE state = 'active';
	//// SELECT * FROM orders WHERE user_id IN (1,2) AND state NOT IN ('cancelled');

	db.Preload("Orders").Preload("Profile").Preload("Role").Find(&users)
	//// SELECT * FROM users;
	//// SELECT * FROM orders WHERE user_id IN (1,2,3,4); // has many
	//// SELECT * FROM profiles WHERE user_id IN (1,2,3,4); // has one
	//// SELECT * FROM roles WHERE id IN (4,5,6); // belongs to

自动预加载
Gorm 默认总是会自动预加载关联记录

	type User struct {
	  gorm.Model
	  Name       string
	  CompanyID  uint
	  Company    Company `gorm:"PRELOAD:false"` // 不会预加载
	  Role       Role                           // 预加载
	}

	db.Set("gorm:auto_preload", true).Find(&users)

嵌套预加载

	db.Preload("Orders.OrderItems").Find(&users)
	db.Preload("Orders", "state = ?", "paid").Preload("Orders.OrderItems").Find(&users)

自定义预加载 SQL
你可以通过传入 `func(db *gorm.DB) *gorm.DB` 来自定义预加载，比如：

	db.Preload("Orders", func(db *gorm.DB) *gorm.DB {
	    return db.Order("orders.amount DESC")
	}).Find(&users)
	//// SELECT * FROM users;
	//// SELECT * FROM orders WHERE user_id IN (1,2,3,4) order by orders.amount DESC;


## Session
[Iris Session](https://www.studyiris.com/doc/irisDoc/Sessions.html)

Iris提供快速，功能齐全且易于使用的 Sessions 会话管理器。

    import "github.com/kataras/iris/sessions"
    sess := sessions.Start(http.ResponseWriter, *http.Request)
    sess.
      ID() string
      Get(string) interface{}
      HasFlash() bool
      GetFlash(string) interface{}
      GetFlashString(string) string
      GetString(key string) string
      GetInt(key string) (int, error)
      GetInt64(key string) (int64, error)
      GetFloat32(key string) (float32, error)
      GetFloat64(key string) (float64, error)
      GetBoolean(key string) (bool, error)
      GetAll() map[string]interface{}
      GetFlashes() map[string]interface{}
      VisitAll(cb func(k string, v interface{}))
      Set(string, interface{})
      SetImmutable(key string, value interface{})
      SetFlash(string, interface{})
      Delete(string)
      Clear()
      ClearFlashes()

此示例将说明如何存储会话中的数据。 除了 Iris 之外，您不需要任何第三方库，但如果您想要使用任何东西，请记住 Iris 与标准库完全兼容。

使用 session.Set() 方法保存数据时，如果时结构体对象，会被转换成 map[string]interface{} 类型进行保存，因此数据类型丢失了。数值也会变成 float64 类型。

在此示例中，我们将仅允许经过身份验证的用户在 /secret 时段查看我们的秘密消息。要获得访问权限，首先必须访问 /login 才能获得有效的会话 cookie，并将其登录。此外，他可以访问 /logout 以撤消对我们的秘密消息的访问权限。

    // sessions.go
    package main
    import (
        "github.com/kataras/iris"
        "github.com/kataras/iris/sessions"
    )
    var (
        cookieNameForSessionID = "mycookiesessionnameid"
        sess                   = sessions.New(sessions.Config{Cookie: cookieNameForSessionID})
    )
    func secret(ctx iris.Context) {
        //验证用户授权
        if auth, _ := sess.Start(ctx).GetBoolean("authenticated"); !auth {
            ctx.StatusCode(iris.StatusForbidden)
            return
        }
        //输出消息
        ctx.WriteString("The cake is a lie!")
    }
    func login(ctx iris.Context) {
        session := sess.Start(ctx)
        // 在里执行验证
        // ...
        //把验证状态保存为true
        session.Set("authenticated", true)
    }
    func logout(ctx iris.Context) {
        session := sess.Start(ctx)
        // 撤消用户身份验证
        session.Set("authenticated", false)
    }
    func main() {
        app := iris.New()
        app.Get("/secret", secret)
        app.Get("/login", login)
        app.Get("/logout", logout)
        app.Run(iris.Addr(":8080"))
    }

运行与测试命令

	$ go run sessions.go
	$ curl -s http://localhost:8080/secret Forbidden
	$ curl -s -I http://localhost:8080/login Set-Cookie: mysessionid=MTQ4NzE5Mz...
	$ curl -s --cookie "mysessionid=MTQ4NzE5Mz..." http://localhost:8080/secret The cake is a lie!`

SessionID 默认时通过 Cookie 传输的，要手动指定如通过 URL 携带就要阅读 iris sessions.go 源代码解决了。Iris 使用了 encodeCookieValue()、 decodeCookieValue() 对 Cookie 值编码和解码，可以在 config 中配置 Encoding 接口，默认无配置。如果要通过主动设置 Cookie 来达到指定 SessionID 的目的，无法通过 AddCookie() 或 SetCookie() 来实现，因为这些方法先要将 Cookie 以 Set-Cookie 头信息发送到客户端，再下次向服务器发送请求时才正式生效。需要在服务器端对 Cookie 数据进行劫持，或者通过临时重定向跳转一次，太麻烦了，还是实现一个 Sessions 来得实际。

再前后端分离的开发环境下，Cookie 跨域需要时有的，需要设置 ajax 的 withCredentials 允许跨域携带 Cookie，如以下 Jquery/fetch/Axios 各种设置方法：

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	$.ajax({
	    type : "get",
	    url: "http://localhost:8080/test/getCookie",
	    xhrFields:{
	        withCredentials:true // cors cookie
	    },
	    success: function(json){
	        result = json;
	    }
	});

	fetch(url, {
	  method: 'GET',
	  headers: myHeaders,
	  credentials: "include"
	})

	import axios from 'axios';

	// CORS Cookie
	axios.defaults.withCredentials = true

	// 使用请求拦截器
	let interceptor = axios.interceptors.request.use( function (config) { 
	  // console.log("axios request "+config.url, config);
	  config.withCredentials = true
	  return config;
	}, function (error) {
	  return Promise.reject(error);
	});
	// axios.interceptors.request.eject(interceptor);

	// 使用响应拦截器
	axios.interceptors.response.use(function (response) {
	  // console.log("axios return "+response.config.url, response);
	  return response;
	}, function (error) {
	  return Promise.reject(error);
	});

服务器端设置：

	header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Origin: http://www.example.com");

这种情况下不能使用所有跨域许可 Access-Control-Allow-Origin:* 需要根据客户端域名进行设置。

	// Start should start the session for the particular request.
	func (s *Sessions) Start(ctx context.Context) *Session {
		cookieValue := s.decodeCookieValue(GetCookie(ctx, s.config.Cookie))

		if cookieValue == "" { // cookie doesn't exists, let's generate a session and add set a cookie
			sid := s.config.SessionIDGenerator()

			sess := s.provider.Init(sid, s.config.Expires)
			sess.isNew = s.provider.db.Len(sid) == 0

			s.updateCookie(ctx, sid, s.config.Expires)

			return sess
		}

		sess := s.provider.Read(cookieValue, s.config.Expires)

		return sess
	}

	// let's keep these funcs simple, we can do it with two lines but we may add more things in the future.
	func (s *Sessions) decodeCookieValue(cookieValue string) string {
		if cookieValue == "" {
			return ""
		}

		var cookieValueDecoded *string

		if decode := s.config.Decode; decode != nil {
			err := decode(s.config.Cookie, cookieValue, &cookieValueDecoded)
			if err == nil {
				cookieValue = *cookieValueDecoded
			} else {
				cookieValue = ""
			}
		}

		return cookieValue
	}

	func (s *Sessions) encodeCookieValue(cookieValue string) string {
		if encode := s.config.Encode; encode != nil {
			newVal, err := encode(s.config.Cookie, cookieValue)
			if err == nil {
				cookieValue = newVal
			} else {
				cookieValue = ""
			}
		}

		return cookieValue
	}

    func (s *Sessions) updateCookie(ctx context.Context, sid string, expires time.Duration) {
        cookie := &http.Cookie{}

        cookie.Name = s.config.Cookie

        cookie.Value = sid
        cookie.Path = "/"
        cookie.Domain = formatCookieDomain(ctx, s.config.DisableSubdomainPersistence)
        cookie.HttpOnly = true
        // MaxAge=0 means no 'Max-Age' attribute specified.
        // MaxAge<0 means delete cookie now, equivalently 'Max-Age: 0'
        // MaxAge>0 means Max-Age attribute present and given in seconds
        if expires >= 0 {
            if expires == 0 { // unlimited life
                cookie.Expires = CookieExpireUnlimited
            } else { // > 0
                cookie.Expires = time.Now().Add(expires)
            }
            cookie.MaxAge = int(cookie.Expires.Sub(time.Now()).Seconds())
        }

        // set the cookie to secure if this is a tls wrapped request
        // and the configuration allows it.
        if ctx.Request().TLS != nil && s.config.CookieSecureTLS {
            cookie.Secure = true
        }

        // encode the session id cookie client value right before send it.
        cookie.Value = s.encodeCookieValue(cookie.Value)
        AddCookie(ctx, cookie, s.config.AllowReclaim)
    }

	// Encoding is the Cookie Encoder/Decoder interface, which can be passed as configuration field
	// alternatively to the `Encode` and `Decode` fields.
	type Encoding interface {
		// Defaults to nil
		Encode(cookieName string, value interface{}) (string, error)

		// Defaults to nil
		Decode(cookieName string, cookieValue string, v interface{}) error
	}


有时您需要一个后端存储，即文件存储或redis存储，这将使您的会话数据在服务器重新启动时保持不变。

使用单个调用注册数据库非常容易.UseDatabase（数据库）。

让我们看一个使用快速键值存储 bolt db 的简单示例。

    package main
    import (
        "time"
        "github.com/kataras/iris"
        "github.com/kataras/iris/sessions"
        "github.com/kataras/iris/sessions/sessiondb/boltdb"
    )
    func main() {
        db, _ := boltdb.New("./sessions/sessions.db", 0666, "users")
        // 使用不同的go协程来同步数据库
        db.Async(true)
        // 按下control + C / cmd + C时关闭并解锁数据库
        iris.RegisterOnInterrupt(func() {
            db.Close()
        })
        sess := sessions.New(sessions.Config{
            Cookie:  "sessionscookieid",
            Expires: 45 * time.Minute, // 0 代表忽略
        })
        // 重要:
        sess.UseDatabase(db)
        // 其余的代码保持不变
        app := iris.New()
        app.Get("/", func(ctx iris.Context) {
            ctx.Writef("You should navigate to the /set, /get, /delete, /clear,/destroy instead")
        })
        app.Get("/set", func(ctx iris.Context) {
            s := sess.Start(ctx)
            //设置
            s.Set("name", "iris")
            //测试如果在这里设置
            ctx.Writef("All ok session setted to: %s", s.GetString("name"))
        })
        app.Get("/set/{key}/{value}", func(ctx iris.Context) {
            key, value := ctx.Params().Get("key"), ctx.Params().Get("value")
            s := sess.Start(ctx)
            // 设置会话值
            s.Set(key, value)
            // 测试如果在这里设置
            ctx.Writef("All ok session setted to: %s", s.GetString(key))
        })
        app.Get("/get", func(ctx iris.Context) {
            // 获取一个特定的键，如字符串，如果没有找到只返回一个空字符串
            name := sess.Start(ctx).GetString("name")
            ctx.Writef("The name on the /set was: %s", name)
        })
        app.Get("/get/{key}", func(ctx iris.Context) {
            // 获取一个特定的键，如字符串，如果没有找到只返回一个空字符串
            name := sess.Start(ctx).GetString(ctx.Params().Get("key"))
            ctx.Writef("The name on the /set was: %s", name)
        })
        app.Get("/delete", func(ctx iris.Context) {
            // 删除一个具体的值
            sess.Start(ctx).Delete("name")
        })
        app.Get("/clear", func(ctx iris.Context) {
            // 删除所有条目
            sess.Start(ctx).Clear()
        })
        app.Get("/destroy", func(ctx iris.Context) {
            //destroy，删除整个会话数据和cookie
            sess.Destroy(ctx)
        })
        app.Get("/update", func(ctx iris.Context) {
            //更新过期日期与新日期
            sess.ShiftExpiration(ctx)
        })
        app.Run(iris.Addr(":8080"))
    }

创建自定义后端会话存储，您可以通过实现Database接口来创建自己的后端存储。


## Session & Static Demo

	package main

	import (
		_ "encoding/json"
		_ "fmt"
		"github.com/kataras/iris"
		"github.com/kataras/iris/sessions"
		"os"
		"strconv"
	)

	func main() {
		// app := iris.Default()
		app := iris.New()
		app.Get("/", navigator)
		app.Get("/secret", secret)
		app.Get("/login", login)
		app.Get("/logout", logout)

		app.StaticWeb("/public", "./static") // not allow index.html
		app.Get("/static/{param:path}", func(ctx iris.Context) {
			// path := "./static/" + ctx.Params().Get("param")
			path := "." + ctx.Path()
			stat, err := os.Stat(path)
			if !(err == nil || os.IsExist(err)) {
				// ctx.StatusCode(iris.StatusNotFound)
				ctx.HTML("404 Not Found " + path)
				return
			}
			if !stat.IsDir() {
				ctx.ServeFile(path, true)
				// ctx.SendFile(path, stat.Name()) // download file
			} else {
				ctx.HTML("Forbiden " + path)
			}
		})

		// listen and serve on http://0.0.0.0:8080.
		app.Run(iris.Addr(":8082"))
	}

	var (
		sess = sessions.New(sessions.Config{Cookie: "SessionId"})
	)

	func secret(ctx iris.Context) {
		auth, _ := sess.Start(ctx).GetInt("authenticated")
		if auth <= 0 {
			ctx.StatusCode(iris.StatusForbidden)
			return
		}
		navigator(ctx)
		ctx.WriteString("The cake is a lie! " + strconv.Itoa(auth))
	}
	func login(ctx iris.Context) {
		session := sess.Start(ctx)
		session.Set("authenticated", 777)

		ctx.StatusCode(iris.StatusTemporaryRedirect) // 307 Temporary Redirect
		ctx.Header("Location", "/secret")

		ctx.WriteString("<h1>Welcome</h1>")
		navigator(ctx)
	}
	func logout(ctx iris.Context) {
		session := sess.Start(ctx)
		session.Set("authenticated", nil)
		ctx.Markdown([]byte(`# Bye!`))
		navigator(ctx)
	}

	func navigator(ctx iris.Context) {
		ctx.Markdown([]byte(`[Home](/) | [Login](/login) | [Logout](/logout) | [Secret](/secret) | [Ping](/ping)`))
	}


## Session & boltdb 实现存储

创建自定义后端会话存储，通过实现Database接口来创建自己的后端存储。

    type Database interface {
        Load(sid string) returns struct {
            //值包含整个内存存储，此存储
            //包含从内存调用更新的当前值，
            //会话数据（键和值）。这条路
            //数据库可以访问整个会话的数据
            // 每次。
            Values memstore.Store
            //在插入时它包含到期日期时间
            //在更新时它包含新的到期日期时间（如果更新或旧的）
            //在删除时它将为零
            //明确时它将为零
            //在销毁时它将为零
            Lifetime LifeTime
        }
        Sync(accepts struct {
            //值包含整个内存存储，此存储
            //包含从内存调用更新的当前值，
            //会话数据（键和值）。这条路
            //数据库可以访问整个会话的数据每次。
            Values memstore.Store

            //在插入时它包含到期日期时间
            //在更新时它包含新的到期日期时间（如果更新或旧的）
            //在删除时它将为零
            //明确时它将为零
            //在销毁时它将为零
            Lifetime LifeTime
        })
    }

这就是boltdb会话数据库的样子

    package boltdb
    import (
        "bytes"
        "os"
        "path/filepath"
        "runtime"
        "time"
        "github.com/boltdb/bolt"
        "github.com/kataras/golog"
        "github.com/kataras/iris/core/errors"
        "github.com/kataras/iris/sessions"
    )
    // DefaultFileMode用作默认数据库的“fileMode”
    //用于创建会话目录路径，打开和写入
    //会话boltdb（基于文件）存储。
    var (
        DefaultFileMode = 0666
    )
    //数据库BoltDB（基于文件）会话存储。
    type Database struct {
        table []byte
        //服务是下划线BoltDB数据库连接，
        //它在`New`或`NewFromDB`初始化。
        //可用于获取统计数据。
        Service *bolt.DB
        async   bool
    }
    var (
        //当path或tableName为空时，ErrOptionsMissing在`New`上返回。
        ErrOptionsMissing = errors.New("required options are missing")
    )
    // New创建并返回一个新的BoltDB（基于文件）存储
    //基于“路径”的实例。
    //路径应包括文件名和目录（也称为fullpath），即sessions / store.db。
    //它将删除任何旧的会话文件。
    func New(path string, fileMode os.FileMode, bucketName string) (*Database, error) {
        if path == "" || bucketName == "" {
            return nil, ErrOptionsMissing
        }
        if fileMode <= 0 {
            fileMode = os.FileMode(DefaultFileMode)
        }
        // create directories if necessary
        if err := os.MkdirAll(filepath.Dir(path), fileMode); err != nil {
            golog.Errorf("error while trying to create the necessary directories for %s: %v", path, err)
            return nil, err
        }
        service, err := bolt.Open(path, 0600,
            &bolt.Options{Timeout: 15 * time.Second},
        )
        if err != nil {
            golog.Errorf("unable to initialize the BoltDB-based session database: %v", err)
            return nil, err
        }
        return NewFromDB(service, bucketName)
    }
    // NewFromDB与`New`相同，但接受已创建的自定义boltdb连接。
    func NewFromDB(service *bolt.DB, bucketName string) (*Database, error) {
        if bucketName == "" {
            return nil, ErrOptionsMissing
        }
        bucket := []byte(bucketName)
        service.Update(func(tx *bolt.Tx) (err error) {
            _, err = tx.CreateBucketIfNotExists(bucket)
            return
        })
        db := &Database{table: bucket, Service: service}
        runtime.SetFinalizer(db, closeDB)
        return db, db.Cleanup()
    }
    //清理会删除所有无效（已过期）的会话条目，
    //它也会在“新”上自动调用。
    func (db *Database) Cleanup() error {
        err := db.Service.Update(func(tx *bolt.Tx) error {
            b := db.getBucket(tx)
            c := b.Cursor()
            for k, v := c.First(); k != nil; k, v = c.Next() {
                if len(k) == 0 { // empty key, continue to the next pair
                    continue
                }
                storeDB, err := sessions.DecodeRemoteStore(v)
                if err != nil {
                    continue
                }
                if storeDB.Lifetime.HasExpired() {
                    if err := c.Delete(); err != nil {
                        golog.Warnf("troubles when cleanup a session remote store from BoltDB: %v", err)
                    }
                }
            }
            return nil
        })
        return err
    }
    // Async如果为true，那么它将使用不同的
    //go协程来更新BoltDB（基于文件的）存储。
    func (db *Database) Async(useGoRoutines bool) *Database {
        db.async = useGoRoutines
        return db
    }
    //加载来自BoltDB（基于文件）会话存储的会话。
    func (db *Database) Load(sid string) (storeDB sessions.RemoteStore) {
        bsid := []byte(sid)
        err := db.Service.View(func(tx *bolt.Tx) (err error) {
            // db.getSessBucket(tx, sid)
            b := db.getBucket(tx)
            c := b.Cursor()
            for k, v := c.First(); k != nil; k, v = c.Next() {
                if len(k) == 0 { // empty key, continue to the next pair
                    continue
                }
                if bytes.Equal(k, bsid) { // session id should be the name of the key-value pair
                    storeDB, err = sessions.DecodeRemoteStore(v) // decode the whole value, as a remote store
                    break
                }
            }
            return
        })
        if err != nil {
            golog.Errorf("error while trying to load from the remote store: %v", err)
        }
        return
    }
    // Sync同步数据库与会话（内存）存储。
    func (db *Database) Sync(p sessions.SyncPayload) {
        if db.async {
            go db.sync(p)
        } else {
            db.sync(p)
        }
    }
    func (db *Database) sync(p sessions.SyncPayload) {
        bsid := []byte(p.SessionID)
        if p.Action == sessions.ActionDestroy {
            if err := db.destroy(bsid); err != nil {
                golog.Errorf("error while destroying a session(%s) from boltdb: %v",
                    p.SessionID, err)
            }
            return
        }
        s, err := p.Store.Serialize()
        if err != nil {
            golog.Errorf("error while serializing the remote store: %v", err)
        }
        err = db.Service.Update(func(tx *bolt.Tx) error {
            return db.getBucket(tx).Put(bsid, s)
        })
        if err != nil {
            golog.Errorf("error while writing the session bucket: %v", err)
        }
    }
    func (db *Database) destroy(bsid []byte) error {
        return db.Service.Update(func(tx *bolt.Tx) error {
            return db.getBucket(tx).Delete(bsid)
        })
    }
    func (db *Database) getBucket(tx *bolt.Tx) *bolt.Bucket {
        return tx.Bucket(db.table)
    }
    // Len报告存储到此BoltDB表的会话数。
    func (db *Database) Len() (num int) {
        db.Service.View(func(tx *bolt.Tx) error {
            // Assume bucket exists and has keys
            b := db.getBucket(tx)
            if b == nil {
                return nil
            }
            b.ForEach(func([]byte, []byte) error {
                num++
                return nil
            })
            return nil
        })
        return
    }
    // 关闭BoltDB连接。FUNC
    func (db *Database) Close() error {
        return closeDB(db)
    }
    func closeDB(db *Database) error {
        err := db.Service.Close()
        if err != nil {
            golog.Warnf("closing the BoltDB connection: %v", err)
        }
        return err
    }


## Cookies

Cookies are accessible through the Request instance of Context. The ctx.Request() returns a net/http#Request.

However the Iris Context provides some helpers to make the most common use cases of cookies easier accessible to you and without any custom additional code of yours that would be required if you just using the Request's Cookies methods.

### Set a Cookie
The SetCookie method adds a cookie.

Use of the "options" is not required, they can be used to modify the "cookie". You'll see later on what the available options are, custom ones can be added depending on your web application requirements, this also helps to not repeat yourself in a codebase.

	SetCookie(cookie *http.Cookie, options ...CookieOption)

If you want you can also use the SetCookieKV method which does not require an import of the net/http package.

	SetCookieKV(name, value string, options ...CookieOption)

Note that the default expiration for a cookie set by SetCookieKV is 365 days. You can either use the CookieExpires Cookie Option(see below) or globally by setting the kataras/iris/Context.SetCookieKVExpiration package-level variable.

The CookieOption is just a type for `func(*http.Cookie)`.

### Set Path

	CookiePath(path string) CookieOption

Set Expiration

	iris.CookieExpires(durFromNow time.Duration) CookieOption

HttpOnly

	iris.CookieHTTPOnly(httpOnly bool) CookieOption

HttpOnly field defaults to true for RemoveCookie and SetCookieKV.

And let's go a bit further with cookie encoding.

Encode

Provides encoding functionality when adding a cookie.

Accepts a CookieEncoder and sets the cookie's value to the encoded value.

Users of that is the SetCookie and SetCookieKV.

	iris.CookieEncode(encode CookieEncoder) CookieOption

Decode

Provides decoding functionality when retrieving a cookie.

Accepts a CookieDecoder and sets the cookie's value to the decoded value before return by the GetCookie.

User of that is the GetCookie.

	iris.CookieDecode(decode CookieDecoder) CookieOption

Where CookieEncoder can be described as:

A CookieEncoder should encode the cookie value.

Should accept the cookie's name as its first argument and

as second argument the cookie value ptr.

Should return an encoded value or an empty one if encode operation failed.

Should return an error if encode operation failed.

	CookieEncoder func(cookieName string, value interface{}) (string, error)

And CookieDecoder:

CookieDecoder should decode the cookie value.

Should accept the cookie's name as its first argument,

as second argument the encoded cookie value and as third argument the decoded value ptr.

Should return a decoded value or an empty one if decode operation failed.

Should return an error if decode operation failed.

	CookieDecoder func(cookieName string, cookieValue string, v interface{}) error

Errors are not printed, so you have to know what you're doing, and remember: if you use AES it only supports key sizes of 16, 24 or 32 bytes.

You either need to provide exactly that amount or you derive the key from what you type in.

### Get a Cookie
The GetCookie returns cookie's value by its name, returns empty string if nothing was found.

	GetCookie(name string, options ...CookieOption) string

If you want more than the value then use the following instead:

	cookie, err := ctx.Request().Cookie("name")

### Get all Cookies
The ctx.Request().Cookies() method returns a slice of all the available request cookies. Sometimes you want to modify them or perform an action on each one of them, the easiet way to do that is by the VisitAllCookies method.

VisitAllCookies(visitor func(name string, value string))

### Remove a Cookie
The RemoveCookie method deletes a cookie by its name and path = "/", the root one.

Tip: change the cookie's path to the current one by providing the iris.CookieCleanPath Cookie Options, as : RemoveCookie("nname", iris.CookieCleanPath).

Also, note that the default behavior is to set its HttpOnly to true. It performs a removal of cookie based on the web standards.

	RemoveCookie(name string, options ...CookieOption)


## Hosts 主机服务

### 监听服务

您可以启动服务器监听任何类型的`net.Listener`甚至`http.Server`实例。 服务器的初始化方法应该在最后通过Run函数传递。

Go开发人员用于服务其服务器的最常用方法是传递 hostname:ip 形式的网络地址。 有了Iris，我们使用的iris.Addr是一种iris.Runner类型

	//用网络地址监听随机端口 tcp 0.0.0.0:0
	app.Run(iris.Addr(":0"))

	//监听本地随机端口 tcp 127.0.0.1:0
	app.Run(iris.Addr("127.0.0.1:0"))

有时您在应用程序的其他位置创建了标准的 net/http 服务器，并希望使用它来为Iris Web应用程序提供服务

	// 与之前相同，但使用自定义的http.Server，也可能在其他地方使用
	app.Run(iris.Server(&http.Server{Addr:":8080"}))

最高级的用法是创建自定义或标准net.Listener并将其传递给app.Run

	// 使用自定义的net.Listener
    l, err := net.Listen("tcp4", ":8080")
    if err != nil {
        panic(err)
    }
    app.Run(iris.Listener(l))

一个更完整的示例，使用仅限unix的套接字文件功能

    package main
    import (
        "os"
        "net"
        "github.com/kataras/iris"
    )
    func main() {
        app := iris.New()
        // UNIX socket
        if errOs := os.Remove(socketFile); errOs != nil && !os.IsNotExist(errOs) {
            app.Logger().Fatal(errOs)
        }
        l, err := net.Listen("unix", socketFile)
        if err != nil {
            app.Logger().Fatal(err)
        }
        if err = os.Chmod(socketFile, mode); err != nil {
            app.Logger().Fatal(err)
        }
        app.Run(iris.Listener(l))
    }

UNIX和BSD主机可以优先考虑重用端口功能

    package main
    import (
        // Package tcplisten provides customizable TCP net.Listener with various
        // performance-related options:
        //
        //   - SO_REUSEPORT. This option allows linear scaling server performance
        //     on multi-CPU servers.
        //     See https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/ for details.
        //
        //   - TCP_DEFER_ACCEPT. This option expects the server reads from the accepted
        //     connection before writing to them.
        //
        //   - TCP_FASTOPEN. See https://lwn.net/Articles/508865/ for details.
        "github.com/valyala/tcplisten"
        "github.com/kataras/iris"
    )

	//go get github.com/valyala/tcplisten
	//go run main.go

    func main() {
        app := iris.New()
        app.Get("/", func(ctx iris.Context) {
            ctx.HTML("<h1>Hello World!</h1>")
        })
        listenerCfg := tcplisten.Config{
            ReusePort:   true,
            DeferAccept: true,
            FastOpen:    true,
        }
        l, err := listenerCfg.NewListener("tcp", ":8080")
        if err != nil {
            app.Logger().Fatal(err)
        }
        app.Run(iris.Listener(l))
    }

### HTTP/2 和安全

如果您有已签名的文件密钥，则可以根据这些证书密钥使用该iris.TLS服务https

    app.Run(iris.TLS("127.0.0.1:443", "mycert.cert", "mykey.key"))

应用程序已经准备好发布应该使用 iris.AutoTLS() 开始自动认证的安全服务器， https://letsencrypt.org 免费提供。

	// Automatic TLS
    app.Run(iris.AutoTLS(":443", "example.com", "admin@example.com"))

### 任何 iris.Runner

有时你可能想要一些非常特别的东西来听，这不是一种类型的net.Listener。你能够做到这一点iris.Raw，但你负责这种方法

	//使用任何func（）错误， //启动听众的责任取决于你这个方式， //为了简单起见，我们将使用 //net / http包的ListenAndServe函数
    app.Run(iris.Raw(&http.Server{Addr:":8080"}).ListenAndServe)

### 主机配置器

所有上述形式的倾听都接受了最后的，可变的论证 `func(*iris.Supervisor)`。这用于为通过这些函数传递的特定主机添加配置程序。

例如，假设我们要添加一个在服务器关闭时触发的回调

    app.Run(iris.Addr(":8080", func(h *iris.Supervisor) {
        h.RegisterOnShutdown(func() {
            println("server terminated")
        })
    }))

您甚至可以在app.Run方法之前执行此操作，但区别在于这些主机配置程序将被执行到您可能用于为您的Web应用程序提供服务的所有主机 （通过app.NewHost我们将在一分钟内看到）

    app := iris.New()
    app.ConfigureHost(func(h *iris.Supervisor) {
        h.RegisterOnShutdown(func() {
            println("server terminated")
        })
    })
    app.Run(iris.Addr(":8080"))

Application#Hosts在该Run方法之后，字段可以提供对为您的应用程序提供服务的所有主机的访问权限。

但最常见的情况是您可能需要在app.Run方法之前访问主机，有两种获取访问主机主管的方法，请参阅下文。

我们已经看到了如何通过app.Run或的第二个参数配置所有应用程序的主机app.ConfigureHost。还有一种方法更适合简单的场景，即使用app.NewHost创建新主机并使用其中一个Serve或多个Listen函数通过iris#RawRunner 启动应用程序。

请注意，这种方式需要额外导入net/http包。

    h := app.NewHost(&http.Server{Addr:":8080"})
    h.RegisterOnShutdown(func(){
        println("server terminated")
    })
    app.Run(iris.Raw(h.ListenAndServe))

### 多主机

您可以使用多个服务器为您的Iris Web应用程序提供服务，因此iris.Router与net/http/Handler功能兼容，您可以理解，它可以在任何net/http服务器上进行调整，但是有一种更简单的方法， 通过使用app.NewHost也可以复制所有主机配置程序，它关闭连接到特定Web应用程序的所有主机app.Shutdown。

    app := iris.New()
    app.Get("/", indexHandler)

    //在不同的goroutine中运行，以便不阻止主要的“goroutine”。
    go app.Run(iris.Addr(":8080"))

    // 启动第二个服务器，它正在监听tcp 0.0.0.0:9090，
    //没有“go”关键字，因为我们想要在最后一次服务器运行时阻止。
    app.NewHost(&http.Server{Addr:":9090"}).ListenAndServe()

关机（优雅） 让我们继续学习如何捕获CONTROL + C / COMMAND + C或unix kill命令并优雅地关闭服务器。

正确关闭CONTROL + C / COMMAND + C或者当发送的kill命令是ENABLED BY-DEFAULT时。

为了手动管理应用程序中断时要执行的操作，我们必须使用该选项禁用默认行为WithoutInterruptHandler 并注册新的中断处理程序（全局，跨所有可能的主机）。

如下代码:

    package main
    import (
        "context"
        "time"
        "github.com/kataras/iris"
    )
    func main() {
        app := iris.New()
        iris.RegisterOnInterrupt(func() {
            timeout := 5 * time.Second
            ctx, cancel := context.WithTimeout(context.Background(), timeout)
            defer cancel()
            // close all hosts
            app.Shutdown(ctx)
        })
        app.Get("/", func(ctx iris.Context) {
            ctx.HTML(" <h1>hi, I just exist in order to see if the server is closed</h1>")
        })
        app.Run(iris.Addr(":8080"), iris.WithoutInterruptHandler)
    }

## Config 配置

在iris中 初始化应用程序 已经使用了默认的配置值,所以我们可以无需使用任何配置也可以启动我们的应 用程序,像下面一样只需要简单的几行代码就可以运行我们web应用

通过程序内部配置

    package main
    import (
       "github.com/kataras/iris"
    )
    func main() {
        app := iris.New()
        app.Get("/", func(ctx iris.Context) {
            ctx.HTML("<b>Hello!</b>")
        })
        // [...]
        //我们可以用这种方法单独定义我们的配置项
        app.Configure(iris.WithConfiguration(iris.Configuration{ DisableStartupLog:false}))
        //也可以使用app.run的第二个参数
        app.Run(iris.Addr(":8080"), iris.WithConfiguration(iris.Configuration{
            DisableInterruptHandler:           false,
            DisablePathCorrection:             false,
            EnablePathEscape:                  false,
            FireMethodNotAllowed:              false,
            DisableBodyConsumptionOnUnmarshal: false,
            DisableAutoFireStatusCode:         false,
            TimeFormat:                        "Mon, 02 Jan 2006 15:04:05 GMT",
            Charset:                           "UTF-8",
        }))
        //通过多参数配置 但是上面两种方式是我们最推荐的
        // 我们使用With+配置项名称 如WithCharset("UTF-8") 其中就是With+ Charset的组合
        //app.Run(iris.Addr(":8080"), iris.WithoutStartupLog, iris.WithCharset("UTF-8"))
        //当使用app.Configure(iris.WithoutStartupLog, iris.WithCharset("UTF-8"))设置配置项时
        //需要app.run()面前使用
    }

通过TOML配置文件

我们在config 目录下新建main.tml

    DisablePathCorrection = false
    EnablePathEscape = false
    FireMethodNotAllowed = true
    DisableBodyConsumptionOnUnmarshal = false
    TimeFormat = "Mon, 01 Jan 2006 15:04:05 GMT"
    Charset = "UTF-8"
    [Other]
        MyServerName = "iris"

在程序内做以下使用

    package main
    import (
       "github.com/kataras/iris"
    )
    func main() {
        app := iris.New()
        app.Get("/", func(ctx iris.Context) {
            ctx.HTML("<b>Hello!</b>")
        })
        // [...]
        // 通过文件配置 我们可以更加方便的切换开发环境配置和生产环境.
        app.Run(iris.Addr(":8080"), iris.WithConfiguration(iris.TOML("./configs/iris.tml")))
    }

通过YAML配置文件

	DisablePathCorrection: false
	EnablePathEscape: false
	FireMethodNotAllowed: true
	DisableBodyConsumptionOnUnmarshal: true
	TimeFormat: Mon, 01 Jan 2006 15:04:05 GMT
	Charset: UTF-8

    package main
    import (
       "github.com/kataras/iris"
    )
    func main() {
        app := iris.New()
        app.Get("/", func(ctx iris.Context) {
            ctx.HTML("<b>Hello!</b>")
        })
        // [...]
        app.Run(iris.Addr(":8080"), iris.WithConfiguration(iris.YAML("./configs/iris.yml")))
    }

Built'n配置器

	// err := app.Run(iris.Addr(":8080"), iris.WithoutServerError(iris.ErrServerClosed))
	// 当配置此项 如果web服务器 出现异常 我们将返回nil.
	// 参考`Configuration的IgnoreServerErrors方法
	// 地址: https://github.com/kataras/iris/tree/master/_examples/http-listening/listen-addr/omit-server-errors
	func WithoutServerError(errors ...error) Configurator

	var WithoutStartupLog                    // 当主服务器打开时，是否显示启动信息如: Now listening on: http://localhost:8080
	var WithoutInterruptHandler              // 当按下ctrl+C 时 禁止关闭当前程序(不会中止程序的运行)
	var WithoutPathCorrection                // 路径重新定义(默认关闭)比如当访问/user/info 当该路径不存在的时候自动访问/user对应的handler
	var WithoutBodyConsumptionOnUnmarshal    // 如果此字段设置为true，则将创建一个新缓冲区以从请求主体读取。
	var WithoutAutoFireStatusCode            // 如果为true则关闭http错误状态代码处理程序自动执行
	var WithPathEscape                       // 转义路径
	var WithOptimizations                    // 开启优化
	var WithFireMethodNotAllowed             // 不允许重新指向方法

	func WithTimeFormat(timeformat string) Configurator             // 设置时间格式
	func WithCharset(charset string) Configurator                   // 设值程序字符集
	func WithRemoteAddrHeader(headerName string) Configurator       // 启用或添加新的或现有的请求标头名称
	func WithoutRemoteAddrHeader(headerName string) Configurator    // 取消现有的请求标头名称
	func WithOtherValue(key string, val interface{}) Configurator   // 自定义配置 key=>value


## Routing 基本介绍

Iris 支持所有HTTP方法，开发人员还可以为不同方法注册相同路径的处理程序。

第一个参数是HTTP方法，第二个参数是路径的请求路径， 第三个可变参数应该包含一个或多个iris.Handler， 当用户从服务器请求该特定的资源路径时，由注册的顺序执行。

示例代码:

    package main
    import (
        "github.com/kataras/iris"
    )
    func main(){
        app := iris.New()
        app.Handle("GET", "/contact", func(ctx iris.Context) {
            ctx.HTML("<h1> Hello from /contact </h1>")
        })
    }

为了使最终开发人员更容易，iris为所有HTTP方法提供了功能。第一个参数是路由的请求路径， 第二个可变参数应该包含一个或多个iris.Handler，当用户从服务器请求该特定的资源路径时，由注册顺序执行。

示例代码:

    package main
    import (
        "github.com/kataras/iris"
    )
    func main(){
        app := iris.New()
        app.Get("/", handler)        // GET 方法
        app.Post("/", handler)       // POST 方法
        app.Put("/", handler)        // PUT 方法
        app.Delete("/", handler)     // DELETE 方法
        app.Options("/", handler)    // OPTIONS 方法
        app.Trace("/", handler)      // TRACE 方法
        app.Connect("/", handler)    // CONNECT 方法
        app.Head("/", handler)       // HEAD 方法
        app.Patch("/", handler)      // PATCH 方法
        app.Any("/", handler)        // 任意的http请求方法如option等

    }
    func handler(ctx iris.Context){
        ctx.Writef("Hello from method: %s and path: %s", ctx.Method(), ctx.Path())
    }

分组路由 由路径前缀分组的一组路由可以（可选）共享相同的中间件处理程序和模板布局。一个组也可以有一个嵌套组。

.Party 正在用于分组路由，开发人员可以声明无限数量的（嵌套）组。

    package main
    import (
        "github.com/kataras/iris"
    )
    func main(){
        app := iris.New()
        //请在参数化路径部分
        users := app.Party("/users", myAuthMiddlewareHandler)
        // http://localhost:8080/users/42/profile
        users.Get("/{id:int}/profile", userProfileHandler)
        // http://localhost:8080/users/inbox/1
        users.Get("/inbox/{id:int}", userMessageHandler)
    }
    func myAuthMiddlewareHandler(ctx iris.Context){
        ctx.WriteString("Authentication failed")
    }
    func userProfileHandler(ctx iris.Context) {//
        id:=ctx.Params().Get("id")
        ctx.WriteString(id)
    }
    func userMessageHandler(ctx iris.Context){
        id:=ctx.Params().Get("id")
        ctx.WriteString(id)
    }

也可以使用接受子路由器（Party）的功能编写相同的内容。

    package main
    import (
        "github.com/kataras/iris"
    )
    func main(){
        app := iris.New()
        app.PartyFunc("/users", func(users iris.Party) {
            users.Use(myAuthMiddlewareHandler)
            // http://localhost:8080/users/42/profile
            users.Get("/{id:int}/profile", userProfileHandler)
            // http://localhost:8080/users/messages/1
            users.Get("/inbox/{id:int}", userMessageHandler)
        })
    }
    func myAuthMiddlewareHandler(ctx iris.Context){
        ctx.WriteString("Authentication failed")
        ctx.Next()//继续执行后续的handler
    }
    func userProfileHandler(ctx iris.Context) {//
        id:=ctx.Params().Get("id")
        ctx.WriteString(id)
    }
    func userMessageHandler(ctx iris.Context){
        id:=ctx.Params().Get("id")
        ctx.WriteString(id)
    }


## Routing 动态路由参数

Iris 拥有你从未遇到过的 简单的,强大的路由.

同时, Iris有自己的路径（就像编程语言一样），用于路由的路径语法及其路径参数解析和评估. 我们简称为"macros".

怎么样? 它计算了它的需求，如果没有需要任何特殊的正则表达式 那么它只是用低级路径语法注册路由，否则它预先编译正则表达式并添加必要的中间件。 这意味着相对于其他路由器或Web框架 您的性能成本为零 。

路径路径参数的标准macro类型

	+------------------------+
	| {param:string}         |
	+------------------------+

string 类型 任意字符串

	+------------------------+
	| {param:int}            |
	+------------------------+

int 类型 支持数字 (0-9)(这里是组合123或者1234其他整数类型于此相同)

	+------------------------+
	| {param:long}           |
	+------------------------+

int64 type 仅仅数字 (0-9)

	+------------------------+
	| {param:boolean}        |
	+------------------------+

bool 类型 仅仅 "1" 或者 "t" 或者 "T" 或者 "TRUE"或者 "true" 或者 "True"，或者 "0" 或者 "f" 或者 "F" 或者 "FALSE" 或者 "false" 或者 "False"

	+------------------------+
	| {param:alphabetical}   |
	+------------------------+

alphabetical/letter (拼音或者字母)类型
letters only (大写或者小写)

	+------------------------+
	| {param:file}           |
	+------------------------+

file 类型
	
	letters (大写或者小写)
	numbers (0-9)
	underscore (_)
	dash (-)
	point (.)

没有空格 ！或其他字符

	+------------------------+
	| {param:path}           |
	+------------------------+

path 类型 anything,应该是最后一部分，多个路径段,

示例: /path1/path2/path3 , ctx.Params().Get("param") == "/path1/path2/path3"

如果缺少类型，则参数的类型默认为字符串，因此{param} == {param：string}。

如果在该类型上找不到函数，则使用字符串macro类型的函数。

除了Iris提供基本类型和一些默认的“macro功能”你也可以注册自己的func！

注册命名路径参数功能

	app.Macros().Int.RegisterFunc("min", func(argument int) func(paramValue string) bool {
	    // [...]
	    return true 
	    // -> true 意味着通过验证, false 表示无效的消息404，或者如果“其他500”被附加到macors语法，则内部服务器错误.
	})

在 func(argument ...) 你可以有任何标准类型, 它将在服务器启动之前进行验证，因此不关心那里的任何性能成本，它在服务时运行的唯一事情就是返回func（paramValue string）bool。

{param:string equal(iris)} , "iris" 在这里是一个参数:

	app.Macros().String.RegisterFunc("equal", func(argument string) func(paramValue string) bool {
	    return func(paramValue string){ return argument == paramValue }
	})

示例代码:

	app := iris.New()
	// 您可以使用“string”类型，该类型对于可以是任何内容的单个路径参数有效
	app.Get("/username/{name}", func(ctx iris.Context) {
	    ctx.Writef("Hello %s", ctx.Params().Get("name"))
	}) //  {name:string}

	//注册我们的第一个附加到int macro类型的宏
	// "min" = 当前函数名字
	// "minValue" = 函数的参数
	// func(string) bool = macro's 的路径参数评估器，这在服务时执行
	// 用户使用min（...）macros参数函数请求包含：int macros类型的路径。
	app.Macros().Int.RegisterFunc("min", func(minValue int) func(string) bool {
	    // 在此之前做任何事情[...]
	    //在这种情况下，我们不需要做任何事情
	    return func(paramValue string) bool {
	        n, err := strconv.Atoi(paramValue)
	        if err != nil {
	            return false
	        }
	        return n >= minValue
	    }
	})
	// http://localhost:8080/profile/id>=1
	// 这将抛出404，即使它被发现为路线 : /profile/0, /profile/blabla, /profile/-1
	// macros 参数函数当然是可选的

	app.Get("/profile/{id:int min(1)}", func(ctx iris.Context) {
	    //  第二个参数是错误的，因为我们使用 macros 它总是为nil
	    // 验证已经发生了.
	    id, _ := ctx.Params().GetInt("id")
	    ctx.Writef("Hello id: %d", id)
	})

	// 更改每个路由的macros评估程序的错误代码：
	app.Get("/profile/{id:int min(1)}/friends/{friendid:int min(1) else 504}", func(ctx iris.Context) {
	    id, _ := ctx.Params().GetInt("id")
	    friendid, _ := ctx.Params().GetInt("friendid")
	    ctx.Writef("Hello id: %d looking for friend id: ", id, friendid)
	}) // 如果没有传递所有路由的macros，这将抛出504错误代码而不是404.

	// http://localhost:8080/game/a-zA-Z/level/0-9
	//记住，字母只是小写或大写字母。
	app.Get("/game/{name:alphabetical}/level/{level:int}", func(ctx iris.Context) {
	    ctx.Writef("name: %s | level: %s", ctx.Params().Get("name"), ctx.Params().Get("level"))
	})

	//让我们使用一个简单的自定义regexp来验证单个路径参数
	//它的值只是小写字母。

	// http://localhost:8080/lowercase/anylowercase
	app.Get("/lowercase/{name:string regexp(^[a-z]+)}", func(ctx iris.Context) {
	    ctx.Writef("name should be only lowercase, otherwise this handler will never executed: %s", ctx.Params().Get("name"))
	})

	// http://localhost:8080/single_file/app.js
	app.Get("/single_file/{myfile:file}", func(ctx iris.Context) {
	    ctx.Writef("file type validates if the parameter value has a form of a file name, got: %s", ctx.Params().Get("myfile"))
	})

	// http://localhost:8080/myfiles/any/directory/here/
	// 这是唯一接受任意数量路径段的macro类型。
	app.Get("/myfiles/{directory:path}", func(ctx iris.Context) {
	    ctx.Writef("path type accepts any number of path segments, path after /myfiles/ is: %s", ctx.Params().Get("directory"))
	})

	app.Run(iris.Addr(":8080"))
	}

路径参数名称应仅包含字母。不允许使用 `_`和数字等符号。

最后，不要将 ctx.Params() 与 ctx.Values() 混淆。路径参数的值转到 ctx.Params() 和上下文的本地存储 可以用来在处理程序和中间件之间进行通信，转到 ctx.Values() 。


## Routing Middleware 中间件

所谓中间件就是 `func (ctx iris.Context)` 格式函数，可以对客户端请求进行处理，并在函数体中使用 `ctx.Next()` 来执行其它中间件函数。

当我们在Iris中讨论中间件时，我们讨论的是在HTTP请求生命周期中在主处理程序代码之前和/或之后运行代码。例如，记录中间件可能会将传入的请求详细信息写入日志，然后在写入有关日志响应的详细信息之前调用处理程序代码。关于中间件的一个很酷的事情是这些单元非常灵活和可重用。

下面一个简单的示例

    package main
    import "github.com/kataras/iris"
    func main() {
        app := iris.New()
        // or app.Use(before) and app.Done(after).
        app.Get("/", before, mainHandler, after)
        app.Run(iris.Addr(":8080"))
    }
    func before(ctx iris.Context) {
        shareInformation := "this is a sharable information between handlers"

        requestPath := ctx.Path()
        println("Before the mainHandler: " + requestPath)

        ctx.Values().Set("info", shareInformation)
        ctx.Next() //继续执行下一个handler，在本例中是mainHandler。
    }
    func after(ctx iris.Context) {
        println("After the mainHandler")
    }
    func mainHandler(ctx iris.Context) {
        println("Inside mainHandler")
        // take the info from the "before" handler.
        info := ctx.Values().GetString("info")
        // write something to the client as a response.
        ctx.HTML("<h1>Response</h1>")
        ctx.HTML("<br/> Info: " + info)
        ctx.Next() // 继续下一个handler 这里是after
    }

试试看:

    $ go run main.go # and navigate to the http://localhost:8080
    Now listening on: http://localhost:8080
    Application started. Press CTRL+C to shut down.
    Before the mainHandler: /
    Inside mainHandler
    After the mainHandler

全局使用中间件

    package main
    import "github.com/kataras/iris"
    func main() {
        app := iris.New()
        //将“before”处理程序注册为将要执行的第一个处理程序
        //在所有域的路由上。
        //或使用`UseGlobal`注册一个将跨子域触发的中间件。
        app.Use(before)

	    // app.UseGlobal(before)
	    // app.DoneGlobal(after)

        //将“after”处理程序注册为将要执行的最后一个处理程序
        //在所有域的路由'处理程序之后。
        app.Done(after)

        // register our routes.
        app.Get("/", indexHandler)
        app.Get("/contact", contactHandler)

        app.Run(iris.Addr(":8080"))
    }
    func before(ctx iris.Context) {
         // [...]
    }
    func after(ctx iris.Context) {
        // [...]
    }
    func indexHandler(ctx iris.Context) {
        ctx.HTML("<h1>Index</h1>")
        ctx.Next() // 执行通过`Done`注册的“after”处理程序。
    }
    func contactHandler(ctx iris.Context) {
        // write something to the client as a response.
        ctx.HTML("<h1>Contact</h1>")
        ctx.Next() // 执行通过`Done`注册的“after”处理程序。
    }

局部中间件 `app.User()` 和 `app.Done()` 只对后续的路由生效，全局中件 `app.UseGlobal()` 和 `app.DoneGlobal()` 则无顺序要求，总是有效，除非 `ctx.Next()` 没有执行，`aoo.DoneGlobal()`被中断。当接收到客户端请求，则按以下步骤执行中间件函数：

	app.Use(, func(ctx iris.Context) {
		// step 2
		ctx.Next()
	})
	app.Done(, func(ctx iris.Context) {
		// step 4
		ctx.Next()
	})

	app.Get("/", func(ctx iris.Context) {
		// step 3
		ctx.Next()
	})

	app.UseGlobal(, func(ctx iris.Context) {
		// step 1
		ctx.Next()
	})
	app.DoneGlobal(, func(ctx iris.Context) {
		// step 5
		ctx.Next()
	})

Iris 内部提供的 basicauth 认证包的 basicAuthMiddleware 中间件为例，它内部是通过 `Serve()` 方法提供的路由认证机制，这个方法通过 `basicauth.New()` 进行配置返回供路由使用 ：

	type basicAuthMiddleware struct { ... }

	func New(c Config) context.Handler {
		...
		b := &basicAuthMiddleware{config: config}
		b.init()
		return b.Serve
	}

	// Serve the actual middleware
	func (b *basicAuthMiddleware) Serve(ctx context.Context) {

		auth, found := b.findAuth(ctx.GetHeader("Authorization"))
		if !found {
			b.askForCredentials(ctx)
			ctx.StopExecution()
			return
			// don't continue to the next handler
		}
		// all ok
		if b.expireEnabled {
			if auth.logged == false {
				auth.expires = time.Now().Add(b.config.Expires)
				auth.logged = true
			}

			if time.Now().After(auth.expires) {
				b.askForCredentials(ctx) // ask for authentication again
				ctx.StopExecution()
				return
			}
		}
		ctx.Next() // continue
	}

注意一下，iris.Application.Router 和 mvc.Application.Router 是不同的前者是 router.APIBuilder 不能用 Use 方法来注册中间件，后者 router.Router 可以。`Router.Use()` 必须在 `Handle()` 方法前执行才有效。

	mvc.Application.Router.Use(BasicAuthority)
	mvc.Application.Handle(&TravelController{})



探索与发现 下面你可以看到一些有用的处理程序的源代码来学习

- [basic authentication](https://github.com/kataras/iris/tree/master/_examples/authentication/)
- [Google reCAPTCHA](https://github.com/kataras/iris/tree/master/_examples/miscellaneous/recaptcha)
- [localization and internationalization i81n](https://github.com/kataras/iris/tree/master/_examples/miscellaneous/i81n)
- [request logger](https://github.com/kataras/iris/tree/master/_examples/http_request/request-logger)
- [article_id profiling](https://github.com/kataras/iris/tree/master/_examples/miscellaneous/pprof)
- [article_id recovery](https://github.com/kataras/iris/tree/master/_examples/miscellaneous/recover)

一些真正帮助您完成特定任务的中间件

- [jwt](https://github.com/iris-contrib/middleware/tree/master/jwt/_example) 中间件在传入请求的Authorization标头上检查JWT并对其进行解码。
- [cors](https://github.com/iris-contrib/middleware/tree/master/cors/_example) HTTP访问控制。
- [secure](https://github.com/iris-contrib/middleware/tree/master/secure/_example) 实现一些快速安全性的中间件获胜。
- [tollbooth](https://github.com/iris-contrib/middleware/tree/master/tollbooth/_examples/limit-handler) 用于限制HTTP请求的通用中间件。
- [cloudwatch](https://github.com/iris-contrib/middleware/tree/master/cloudwatch/_example) AWS cloudwatch指标中间件。
- [new relic](https://github.com/iris-contrib/middleware/tree/master/newrelic/_example) 官方New Relic Go Agent。
- [prometheus](https://github.com/iris-contrib/middleware/tree/master/prometheus/_example) 轻松为prometheus检测工具创建指标端点
- [casbin](https://github.com/iris-contrib/middleware/tree/master/casbin/_examples) 一个授权库，支持ACL，RBAC，ABAC等访问控制模型

## Wrap the Router 包装路由器

443/500 非常罕见，您可能永远不需要它，但无论如何您都需要它。(以备不时之需)

如果你以前有过使用net/http和其他web框架的经验， 这个函数会有熟悉的net/http中间件形式，但它不接受处理程序，而是接受Router作为函数执行或否。

	// WrapperFunc is used as an expected input parameter signature
	// for the WrapRouter. It's a "low-level" signature which is compatible
	// with the net/http.
	// It's being used to run or no run the router based on a custom logic.
	type WrapperFunc func(w http.ResponseWriter, r *http.Request, router http.HandlerFunc)

	// WrapRouter adds a wrapper on the top of the main router.
	// Usually it's useful for third-party middleware
	// when need to wrap the entire application with a middleware like CORS.
	//
	// Developers can add more than one wrappers,
	// those wrappers' execution comes from last to first.
	// That means that the second wrapper will wrap the first, and so on.
	//
	// Before build.
	func WrapRouter(wrapperFunc WrapperFunc)

Iris的路由器基于HTTP方法搜索其路由，路由器包装器可以覆盖该行为并执行自定义代码。 示例代码:

	package main

	import (
	    "net/http"
	    "strings"

	    "github.com/kataras/iris"
	)

	func newApp() *iris.Application {
	    app := iris.New()

	    app.OnErrorCode(iris.StatusNotFound, func(ctx iris.Context) {
	        ctx.HTML("<b>Resource Not found</b>")
	    })

	    app.Get("/profile/{username}", func(ctx iris.Context) {
	        ctx.Writef("Hello %s", ctx.Params().Get("username"))
	    })

	    app.HandleDir("/", "./public")

	    myOtherHandler := func(ctx iris.Context) {
	        ctx.Writef("inside a handler which is fired manually by our custom router wrapper")
	    }

	    // wrap the router with a native net/http handler.
	    // if url does not contain any "." (i.e: .css, .js...)
	    // (depends on the app , you may need to add more file-server exceptions),
	    // then the handler will execute the router that is responsible for the
	    // registered routes (look "/" and "/profile/{username}")
	    // if not then it will serve the files based on the root "/" path.
	    app.WrapRouter(func(w http.ResponseWriter, r *http.Request, router http.HandlerFunc) {
	        path := r.URL.Path

	        if strings.HasPrefix(path, "/other") {
	            // acquire and release a context in order to use it to execute
	            // our custom handler
	            // remember: we use net/http.Handler because here
	            // we are in the "low-level", before the router itself.
	            ctx := app.ContextPool.Acquire(w, r)
	            myOtherHandler(ctx)
	            app.ContextPool.Release(ctx)
	            return
	        }

	        // else continue serving routes as usual.
	        router.ServeHTTP(w, r) 
	    })

	    return app
	}

	func main() {
	    app := newApp()

	    // http://localhost:8080
	    // http://localhost:8080/index.html
	    // http://localhost:8080/app.js
	    // http://localhost:8080/css/main.css
	    // http://localhost:8080/profile/anyusername
	    // http://localhost:8080/other/random
	    app.Run(iris.Addr(":8080"))

	    // Note: In this example we just saw one use case,
	    // you may want to .WrapRouter or .Downgrade in order to
	    // bypass the Iris' default router, i.e:
	    // you can use that method to setup custom proxies too.
	}


## Subdomains 子域名支持
Iris has the simplest known form for subdomains registration to a single application. Of course you can always use nginx or caddy for management in production.

Subdomains are separated into two categories: static and dynamic/wildcard.

Static : when you know the subdomain, i.e : analytics.mydomain.com

Wildcard : when you don't know the subdomain but you know that it's before a particular subdomain or root domain, i.e : user_created.mydomain.com, otheruser.mydomain.com like the  username.github.io

We use the Subdomain and WildcardSubdomain methods of an iris.Party or iris.Application to register subdomains.

The Subdomain method returns a new Party which is responsible to register routes to this specific "subdomain".

The only difference from a regular Party is that if called from a child party then the subdomain will be prepended to the path instead of appended. So if app.Subdomain("admin").Subdomain("panel") then the result is: "panel.admin.".

	Subdomain(subdomain string, middleware ...Handler) Party

The WildcardSubdomain method returns a new Party which is responsible to register routes to a dynamic, wildcard(ed) subdomain. A dynamic subdomain is a subdomain which can handle any subdomain requests. Server will accept any subdomain (if not static subdomain found) and it will search and execute the handlers of this Party.

	WildcardSubdomain(middleware ...Handler) Party

Example Code:

	// [app := iris.New...]
	admin := app.Subdomain("admin")
	​
	// admin.mydomain.com
	admin.Get("/", func(ctx iris.Context) {
	    ctx.Writef("INDEX FROM admin.mydomain.com")
	})
	​
	// admin.mydomain.com/hey
	admin.Get("/hey", func(ctx iris.Context) {
	    ctx.Writef("HEY FROM admin.mydomain.com/hey")
	})
	​
	// [other routes here...]
	​
	app.Run(iris.Addr("mydomain.com:80"))

For local development you'll have to edit your hosts, for example in windows operating system open the C:\Windows\System32\Drivers\etc\hosts file and append:

	127.0.0.1 mydomain.com
	127.0.0.1 admin.mydomain.com

To prove that subdomains works like any other regular Party you can also register a subdomain using the alternative method below:

	adminSubdomain:= app.Party("admin.")
	// or
	adminAnalayticsSubdomain := app.Party("admin.analytics.")
	// or for a dynamic one:
	anySubdomain := app.Party("*.")

There is also an iris.Application method which allows to register a global redirection rule for subdomains as well.

The SubdomainRedirect sets (or adds if used more than one time) a router wrapper which redirects(StatusMovedPermanently) a (sub)domain to another subdomain or to the root domain as fast as possible, before the execution of the route's handler(s).

It receives two arguments, they are the from and to/target locations, 'from' can be a wildcard subdomain as well (app.WildcardSubdomain()) 'to' is not allowed to be a wildcard for obvious reasons, 'from' can be the root domain(app) when the 'to' is not the root domain and visa-versa.

	SubdomainRedirect(from, to Party) Party

Usage

	www := app.Subdomain("www")
	app.SubdomainRedirect(app, www)

The above will redirect all http(s)://mydomain.com/%anypath% to http(s)://www.mydomain.com/%anypath%.

The Context offers four main methods when working with subdomains that may be helpful for you.

	// Host returns the host part of the current url.
	Host() string
	// Subdomain returns the subdomain of this request, if any.
	// Note that this is a fast method which does not cover all cases.
	Subdomain() (subdomain string)
	// IsWWW returns true if the current subdomain (if any) is www.
	IsWWW() bool
	// FullRqeuestURI returns the full URI,
	// including the scheme, the host and the relative requested path/resource.
	FullRequestURI() string

Usage

	func info(ctx iris.Context) {
	    method := ctx.Method()
	    subdomain := ctx.Subdomain()
	    path := ctx.Path()
	​
	    ctx.Writef("\nInfo\n\n")
	    ctx.Writef("Method: %s\nSubdomain: %s\nPath: %s", method, subdomain, path)
	}


## Override Context 上下文覆盖
In this section you will learn how to override the existing Context's methods.

The Context is an interface. However as you probably know, when using other frameworks you don't have that functionality of overriding even if it's used as an interface. With Iris you can attach your implementation to the context pool itself using the app.ContextPool.Attach method.

Let's get started by importing the "github.com/kataras/iris/context" which is required here.

Secondly, create your own Context implementation.

Add the Do and Next methods where they just call the context.Do and context.Next package-level functions.

Use the Application's ContextPool to set it as the Context implementation that should be used for the route's handlers.

Example Code:

	package main
	​
	import (
	    "reflect"
	​
	    "github.com/kataras/iris"
	    // 1.
	    "github.com/kataras/iris/context"
	)
	​
	// 2.
	// Create your own custom Context, put any fields you'll need.
	type MyContext struct {
	    // Embed the `iris.Context` - 
	    // It's totally optional but you will need this if you
	    // don't want to override all the context's methods!
	    iris.Context
	}
	​
	// Optionally: validate MyContext implements iris.Context on compile-time.
	var _ iris.Context = &MyContext{}
	​
	// 3.
	func (ctx *MyContext) Do(handlers context.Handlers) {
	    context.Do(ctx, handlers)
	}
	​
	​
	// 3.
	func (ctx *MyContext) Next() {
	    context.Next(ctx)
	}
	​
	// [Override any context's method you want here...]
	// Like the HTML below:
	​
	func (ctx *MyContext) HTML(htmlContents string) (int, error) {
	    ctx.Application().Logger().Infof("Executing .HTML function from MyContext")
	​
	    ctx.ContentType("text/html")
	    return ctx.WriteString(htmlContents)
	}
	​
	func main() {
	    app := iris.New()
	​
	    // 4.
	    app.ContextPool.Attach(func() iris.Context {
	        return &MyContext{
	            // If you use the embedded Context,
	            // call the `context.NewContext` to create one:
	            Context: context.NewContext(app),
	        }
	    })
	​
	    // Register a view engine on .html files inside the ./view/** directory.
	    app.RegisterView(iris.HTML("./view", ".html"))
	​
	    // Register your route, as you normally do
	    app.Handle("GET", "/", recordWhichContextForExample,
	    func(ctx iris.Context) {
	        // use the context's overridden HTML method.
	        ctx.HTML("<h1> Hello from my custom context's HTML! </h1>")
	    })
	​
	    // This will be executed by the
	    // MyContext.Context embedded default context
	    // when MyContext is not directly define the View function by itself.
	    app.Handle("GET", "/hi/{firstname:alphabetical}",recordWhichContextForExample,
	    func(ctx iris.Context) {
	        firstname := ctx.Values().GetString("firstname")
	​
	        ctx.ViewData("firstname", firstname)
	        ctx.Gzip(true)
	​
	        ctx.View("hi.html")
	    })
	​
	    app.Run(iris.Addr(":8080"))
	}
	​
	// Should always print "($PATH) Handler is executing from 'MyContext'"
	func recordWhichContextForExample(ctx iris.Context) {
	    ctx.Application().Logger().Infof("(%s) Handler is executing from: '%s'",
	        ctx.Path(), reflect.TypeOf(ctx).Elem().Name())
	​
	    ctx.Next()
	}


## Context Interface 上下文接口对象

	type (
	    // BodyDecoder is an interface which any struct can implement in order to customize the decode action
	    // from ReadJSON and ReadXML
	    //
	    // Trivial example of this could be:
	    // type User struct { Username string }
	    //
	    // func (u *User) Decode(data []byte) error {
	    //      return json.Unmarshal(data, u)
	    // }
	    //
	    // the 'context.ReadJSON/ReadXML(&User{})' will call the User's
	    // Decode option to decode the request body
	    //
	    // Note: This is totally optionally, the default decoders
	    // for ReadJSON is the encoding/json and for ReadXML is the encoding/xml.
	    BodyDecoder interface {
	        Decode(data []byte) error
	    }

	    // Unmarshaler is the interface implemented by types that can unmarshal any raw data.
	    // TIP INFO: Any pointer to a value which implements the BodyDecoder can be override the unmarshaler.
	    Unmarshaler interface {
	        Unmarshal(data []byte, outPtr interface{}) error
	    }

	    // UnmarshalerFunc a shortcut for the Unmarshaler interface
	    //
	    // See 'Unmarshaler' and 'BodyDecoder' for more.
	    UnmarshalerFunc func(data []byte, outPtr interface{}) error
	)

	// Unmarshal parses the X-encoded data and stores the result in the value pointed to by v.
	// Unmarshal uses the inverse of the encodings that Marshal uses, allocating maps,
	// slices, and pointers as necessary.
	func (u UnmarshalerFunc) Unmarshal(data []byte, v interface{}) error {
	    return u(data, v)
	}

	// Context is the midle-man server's "object" for the clients.
	//
	// A New context is being acquired from a sync.Pool on each connection.
	// The Context is the most important thing on the iris's http flow.
	//
	// Developers send responses to the client's request through a Context.
	// Developers get request information from the client's request a Context.
	type Context interface {
	    // BeginRequest is executing once for each request
	    // it should prepare the (new or acquired from pool) context's fields for the new request.
	    //
	    // To follow the iris' flow, developer should:
	    // 1. reset handlers to nil
	    // 2. reset values to empty
	    // 3. reset sessions to nil
	    // 4. reset response writer to the http.ResponseWriter
	    // 5. reset request to the *http.Request
	    // and any other optional steps, depends on dev's application type.
	    BeginRequest(http.ResponseWriter, *http.Request)

	    // EndRequest is executing once after a response to the request was sent and this context is useless or released.
	    //
	    // To follow the iris' flow, developer should:
	    // 1. flush the response writer's result
	    // 2. release the response writer
	    // and any other optional steps, depends on dev's application type.
	    EndRequest()

	    // ResponseWriter returns an http.ResponseWriter compatible response writer, as expected.
	    ResponseWriter() ResponseWriter

	    // ResetResponseWriter should change or upgrade the Context's ResponseWriter.
	    ResetResponseWriter(ResponseWriter)

	    // Request returns the original *http.Request, as expected.
	    Request() *http.Request

	    // ResetRequest sets the Context's Request,
	    // It is useful to store the new request created by a std *http.Request#WithContext() into Iris' Context.
	    // Use `ResetRequest` when for some reason you want to make a full
	    // override of the *http.Request.
	    // Note that: when you just want to change one of each fields you can use the Request() which returns a pointer to Request,
	    // so the changes will have affect without a full override.
	    // Usage: you use a native http handler which uses the standard "context" package
	    // to get values instead of the Iris' Context#Values():
	    // r := ctx.Request()
	    // stdCtx := context.WithValue(r.Context(), key, val)
	    // ctx.ResetRequest(r.WithContext(stdCtx)).
	    ResetRequest(r *http.Request)

	    // SetCurrentRouteName sets the route's name internally,
	    // in order to be able to find the correct current "read-only" Route when
	    // end-developer calls the `GetCurrentRoute()` function.
	    // It's being initialized by the Router, if you change that name
	    // manually nothing really happens except that you'll get other
	    // route via `GetCurrentRoute()`.
	    // Instead, to execute a different path
	    // from this context you should use the `Exec` function
	    // or change the handlers via `SetHandlers/AddHandler` functions.
	    SetCurrentRouteName(currentRouteName string)

	    // GetCurrentRoute returns the current registered "read-only" route that
	    // was being registered to this request's path.
	    GetCurrentRoute() RouteReadOnly

	    // Do calls the SetHandlers(handlers)
	    // and executes the first handler,
	    // handlers should not be empty.
	    //
	    // It's used by the router, developers may use that
	    // to replace and execute handlers immediately.
	    Do(Handlers)

	    // AddHandler can add handler(s)
	    // to the current request in serve-time,
	    // these handlers are not persistenced to the router.
	    //
	    // Router is calling this function to add the route's handler.
	    // If AddHandler called then the handlers will be inserted
	    // to the end of the already-defined route's handler.
	    //
	    AddHandler(...Handler)

	    // SetHandlers replaces all handlers with the new.
	    SetHandlers(Handlers)

	    // Handlers keeps tracking of the current handlers.
	    Handlers() Handlers

	    // HandlerIndex sets the current index of the
	    // current context's handlers chain.
	    // If -1 passed then it just returns the
	    // current handler index without change the current index.
	    //
	    // Look Handlers(), Next() and StopExecution() too.
	    HandlerIndex(n int) (currentIndex int)

	    // Proceed is an alternative way to check if a particular handler
	    // has been executed and called the `ctx.Next` function inside it.
	    // This is useful only when you run a handler inside
	    // another handler. It justs checks for before index and the after index.
	    //
	    // A usecase example is when you want to execute a middleware
	    // inside controller's `BeginRequest` that calls the `ctx.Next` inside it.
	    // The Controller looks the whole flow (BeginRequest, method handler, EndRequest)
	    // as one handler, so `ctx.Next` will not be reflected to the method handler
	    // if called from the `BeginRequest`.
	    //
	    // Although `BeginRequest` should NOT be used to call other handlers,
	    // the `BeginRequest` has been introduced to be able to set
	    // common data to all method handlers before their execution.
	    // Controllers can accept middleware(s) from the MVC's Application's Router as normally.
	    //
	    // That said let's see an example of `ctx.Proceed`:
	    //
	    // var authMiddleware = basicauth.New(basicauth.Config{
	    //     Users: map[string]string{
	    //         "admin": "password",
	    //     },
	    // })
	    //
	    // func (c *UsersController) BeginRequest(ctx iris.Context) {
	    //     if !ctx.Proceed(authMiddleware) {
	    //         ctx.StopExecution()
	    //     }
	    // }
	    // This Get() will be executed in the same handler as `BeginRequest`,
	    // internally controller checks for `ctx.StopExecution`.
	    // So it will not be fired if BeginRequest called the `StopExecution`.
	    // func(c *UsersController) Get() []models.User {
	    //      return c.Service.GetAll()
	    //}
	    // Alternative way is `!ctx.IsStopped()` if middleware make use of the `ctx.StopExecution()` on failure.
	    Proceed(Handler) bool

	    // HandlerName returns the current handler's name, helpful for debugging.
	    HandlerName() string

	    // HandlerFileLine returns the current running handler's function source file and line information.
	    // Useful mostly when debugging.
	    HandlerFileLine() (file string, line int)

	    // RouteName returns the route name that this handler is running on.
	    // Note that it will return empty on not found handlers.
	    RouteName() string

	    // Next calls all the next handler from the handlers chain,
	    // it should be used inside a middleware.
	    //
	    // Note: Custom context should override this method in order to be able to pass its own iris.Context implementation.
	    Next()

	    // NextOr checks if chain has a next handler, if so then it executes it
	    // otherwise it sets a new chain assigned to this Context based on the given handler(s)
	    // and executes its first handler.
	    //
	    // Returns true if next handler exists and executed, otherwise false.
	    //
	    // Note that if no next handler found and handlers are missing then
	    // it sends a Status Not Found (404) to the client and it stops the execution.
	    NextOr(handlers ...Handler) bool

	    // NextOrNotFound checks if chain has a next handler, if so then it executes it
	    // otherwise it sends a Status Not Found (404) to the client and stops the execution.
	    //
	    // Returns true if next handler exists and executed, otherwise false.
	    NextOrNotFound() bool

	    // NextHandler returns (it doesn't execute) the next handler from the handlers chain.
	    //
	    // Use .Skip() to skip this handler if needed to execute the next of this returning handler.
	    NextHandler() Handler

	    // Skip skips/ignores the next handler from the handlers chain,
	    // it should be used inside a middleware.
	    Skip()

	    // StopExecution if called then the following .Next calls are ignored,
	    // as a result the next handlers in the chain will not be fire.
	    StopExecution()

	    // IsStopped checks and returns true if the current position of the Context is 255,
	    // means that the StopExecution() was called.
	    IsStopped() bool

	    // OnConnectionClose registers the "cb" function which will fire (on its own goroutine, no need to be registered goroutine by the end-dev)
	    // when the underlying connection has gone away.
	    //
	    // This mechanism can be used to cancel long operations on the server
	    // if the client has disconnected before the response is ready.
	    //
	    // It depends on the `http#CloseNotify`.
	    // CloseNotify may wait to notify until Request.Body has been
	    // fully read.
	    //
	    // After the main Handler has returned, there is no guarantee
	    // that the channel receives a value.
	    //
	    // Finally, it reports whether the protocol supports pipelines (HTTP/1.1 with pipelines disabled is not supported).
	    // The "cb" will not fire for sure if the output value is false.
	    //
	    // Note that you can register only one callback for the entire request handler chain/per route.
	    //
	    // Look the `ResponseWriter#CloseNotifier` for more.
	    OnConnectionClose(fnGoroutine func()) bool

	    // OnClose registers the callback function "cb" to the underline connection closing event using the `Context#OnConnectionClose`
	    // and also in the end of the request handler using the `ResponseWriter#SetBeforeFlush`.
	    // Note that you can register only one callback for the entire request handler chain/per route.
	    //
	    // Look the `Context#OnConnectionClose` and `ResponseWriter#SetBeforeFlush` for more.
	    OnClose(cb func())

	    //  +------------------------------------------------------------+
	    //  | Current "user/request" storage                             |
	    //  | and share information between the handlers - Values().     |
	    //  | Save and get named path parameters - Params()              |
	    //  +------------------------------------------------------------+

	    // Params returns the current url's named parameters key-value storage.
	    // Named path parameters are being saved here.
	    // This storage, as the whole Context, is per-request lifetime.
	    Params() *RequestParams

	    // Values returns the current "user" storage.
	    // Named path parameters and any optional data can be saved here.
	    // This storage, as the whole Context, is per-request lifetime.
	    //
	    // You can use this function to Set and Get local values
	    // that can be used to share information between handlers and middleware.
	    Values() *memstore.Store

	    // Translate is the i18n (localization) middleware's function,
	    // it calls the Values().Get(ctx.Application().ConfigurationReadOnly().GetTranslateFunctionContextKey())
	    // to execute the translate function and return the localized text value.
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/miscellaneous/i18n
	    Translate(format string, args ...interface{}) string

	    //  +------------------------------------------------------------+
	    //  | Path, Host, Subdomain, IP, Headers etc...                  |
	    //  +------------------------------------------------------------+

	    // Method returns the request.Method, the client's http method to the server.
	    Method() string

	    // Path returns the full request path,
	    // escaped if EnablePathEscape config field is true.
	    Path() string

	    // RequestPath returns the full request path,
	    // based on the 'escape'.
	    RequestPath(escape bool) string

	    // Host returns the host part of the current url.
	    Host() string

	    // Subdomain returns the subdomain of this request, if any.
	    // Note that this is a fast method which does not cover all cases.
	    Subdomain() (subdomain string)

	    // IsWWW returns true if the current subdomain (if any) is www.
	    IsWWW() bool

	    // FullRqeuestURI returns the full URI,
	    // including the scheme, the host and the relative requested path/resource.
	    FullRequestURI() string

	    // RemoteAddr tries to parse and return the real client's request IP.
	    //
	    // Based on allowed headers names that can be modified from Configuration.RemoteAddrHeaders.
	    //
	    // If parse based on these headers fail then it will return the Request's `RemoteAddr` field
	    // which is filled by the server before the HTTP handler.
	    //
	    // Look `Configuration.RemoteAddrHeaders`,
	    //      `Configuration.WithRemoteAddrHeader(...)`,
	    //      `Configuration.WithoutRemoteAddrHeader(...)` for more.
	    RemoteAddr() string

	    // GetHeader returns the request header's value based on its name.
	    GetHeader(name string) string

	    // IsAjax returns true if this request is an 'ajax request'( XMLHttpRequest)
	    //
	    // There is no a 100% way of knowing that a request was made via Ajax.
	    // You should never trust data coming from the client, they can be easily overcome by spoofing.
	    //
	    // Note that "X-Requested-With" Header can be modified by any client(because of "X-"),
	    // so don't rely on IsAjax for really serious stuff,
	    // try to find another way of detecting the type(i.e, content type),
	    // there are many blogs that describe these problems and provide different kind of solutions,
	    // it's always depending on the application you're building,
	    // this is the reason why this `IsAjax`` is simple enough for general purpose use.
	    //
	    // Read more at: https://developer.mozilla.org/en-US/docs/AJAX
	    // and https://xhr.spec.whatwg.org/
	    IsAjax() bool

	    // IsMobile checks if client is using a mobile device(phone or tablet) to communicate with this server.
	    // If the return value is true that means that the http client using a mobile
	    // device to communicate with the server, otherwise false.
	    //
	    // Keep note that this checks the "User-Agent" request header.
	    IsMobile() bool

	    // GetReferrer extracts and returns the information from the "Referer" header as specified
	    // in https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
	    // or by the URL query parameter "referer".
	    GetReferrer() Referrer

	    //  +------------------------------------------------------------+
	    //  | Headers helpers                                            |
	    //  +------------------------------------------------------------+

	    // Header adds a header to the response writer.
	    Header(name string, value string)

	    // ContentType sets the response writer's header key "Content-Type" to the 'cType'.
	    ContentType(cType string)

	    // GetContentType returns the response writer's header value of "Content-Type"
	    // which may, set before with the 'ContentType'.
	    GetContentType() string

	    // GetContentType returns the request's header value of "Content-Type".
	    GetContentTypeRequested() string

	    // GetContentLength returns the request's header value of "Content-Length".
	    // Returns 0 if header was unable to be found or its value was not a valid number.
	    GetContentLength() int64

	    // StatusCode sets the status code header to the response.
	    // Look .`GetStatusCode` too.
	    StatusCode(statusCode int)

	    // GetStatusCode returns the current status code of the response.
	    // Look `StatusCode` too.
	    GetStatusCode() int

	    // Redirect sends a redirect response to the client
	    // to a specific url or relative path.
	    // accepts 2 parameters string and an optional int
	    // first parameter is the url to redirect
	    // second parameter is the http status should send,
	    // default is 302 (StatusFound),
	    // you can set it to 301 (Permant redirect)
	    // or 303 (StatusSeeOther) if POST method,
	    // or StatusTemporaryRedirect(307) if that's nessecery.
	    Redirect(urlToRedirect string, statusHeader ...int)

	    //  +------------------------------------------------------------+
	    //  | Various Request and Post Data                              |
	    //  +------------------------------------------------------------+

	    // URLParam returns true if the url parameter exists, otherwise false.
	    URLParamExists(name string) bool

	    // URLParamDefault returns the get parameter from a request,
	    // if not found then "def" is returned.
	    URLParamDefault(name string, def string) string

	    // URLParam returns the get parameter from a request, if any.
	    URLParam(name string) string

	    // URLParamTrim returns the url query parameter with trailing white spaces removed from a request.
	    URLParamTrim(name string) string

	    // URLParamTrim returns the escaped url query parameter from a request.
	    URLParamEscape(name string) string

	    // URLParamInt returns the url query parameter as int value from a request,
	    // returns -1 and an error if parse failed.
	    URLParamInt(name string) (int, error)

	    // URLParamIntDefault returns the url query parameter as int value from a request,
	    // if not found or parse failed then "def" is returned.
	    URLParamIntDefault(name string, def int) int

	    // URLParamInt32Default returns the url query parameter as int32 value from a request,
	    // if not found or parse failed then "def" is returned.
	    URLParamInt32Default(name string, def int32) int32

	    // URLParamInt64 returns the url query parameter as int64 value from a request,
	    // returns -1 and an error if parse failed.
	    URLParamInt64(name string) (int64, error)

	    // URLParamInt64Default returns the url query parameter as int64 value from a request,
	    // if not found or parse failed then "def" is returned.
	    URLParamInt64Default(name string, def int64) int64

	    // URLParamFloat64 returns the url query parameter as float64 value from a request,
	    // returns -1 and an error if parse failed.
	    URLParamFloat64(name string) (float64, error)

	    // URLParamFloat64Default returns the url query parameter as float64 value from a request,
	    // if not found or parse failed then "def" is returned.
	    URLParamFloat64Default(name string, def float64) float64

	    // URLParamBool returns the url query parameter as boolean value from a request,
	    // returns an error if parse failed or not found.
	    URLParamBool(name string) (bool, error)

	    // URLParams returns a map of GET query parameters separated by comma if more than one
	    // it returns an empty map if nothing found.
	    URLParams() map[string]string

	    // FormValueDefault returns a single parsed form value by its "name",
	    // including both the URL field's query parameters and the POST or PUT form data.
	    //
	    // Returns the "def" if not found.
	    FormValueDefault(name string, def string) string

	    // FormValue returns a single parsed form value by its "name",
	    // including both the URL field's query parameters and the POST or PUT form data.
	    FormValue(name string) string

	    // FormValues returns the parsed form data, including both the URL
	    // field's query parameters and the POST or PUT form data.
	    //
	    // The default form's memory maximum size is 32MB, it can be changed by the
	    // `iris#WithPostMaxMemory` configurator at main configuration passed on `app.Run`'s second argument.
	    //
	    // NOTE: A check for nil is necessary.
	    FormValues() map[string][]string

	    // PostValueDefault returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name".
	    //
	    // If not found then "def" is returned instead.
	    PostValueDefault(name string, def string) string

	    // PostValue returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name"
	    PostValue(name string) string

	    // PostValueTrim returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name",  without trailing spaces.
	    PostValueTrim(name string) string

	    // PostValueInt returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name", as int.
	    //
	    // If not found returns -1 and a non-nil error.
	    PostValueInt(name string) (int, error)

	    // PostValueIntDefault returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name", as int.
	    //
	    // If not found returns or parse errors the "def".
	    PostValueIntDefault(name string, def int) int

	    // PostValueInt64 returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name", as float64.
	    //
	    // If not found returns -1 and a no-nil error.
	    PostValueInt64(name string) (int64, error)

	    // PostValueInt64Default returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name", as int64.
	    //
	    // If not found or parse errors returns the "def".
	    PostValueInt64Default(name string, def int64) int64

	    // PostValueInt64Default returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name", as float64.
	    //
	    // If not found returns -1 and a non-nil error.
	    PostValueFloat64(name string) (float64, error)

	    // PostValueInt64Default returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name", as float64.
	    //
	    // If not found or parse errors returns the "def".
	    PostValueFloat64Default(name string, def float64) float64

	    // PostValueInt64Default returns the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name", as bool.
	    //
	    // If not found or value is false, then it returns false, otherwise true.
	    PostValueBool(name string) (bool, error)

	    // PostValues returns all the parsed form data from POST, PATCH,
	    // or PUT body parameters based on a "name" as a string slice.
	    //
	    // The default form's memory maximum size is 32MB, it can be changed by the
	    // `iris#WithPostMaxMemory` configurator at main configuration passed on `app.Run`'s second argument.
	    PostValues(name string) []string

	    // FormFile returns the first uploaded file that received from the client.
	    //
	    // The default form's memory maximum size is 32MB, it can be changed by the
	    //  `iris#WithPostMaxMemory` configurator at main configuration passed on `app.Run`'s second argument.
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/http_request/upload-file
	    FormFile(key string) (multipart.File, *multipart.FileHeader, error)

	    // UploadFormFiles uploads any received file(s) from the client
	    // to the system physical location "destDirectory".
	    //
	    // The second optional argument "before" gives caller the chance to
	    // modify the *miltipart.FileHeader before saving to the disk,
	    // it can be used to change a file's name based on the current request,
	    // all FileHeader's options can be changed. You can ignore it if
	    // you don't need to use this capability before saving a file to the disk.
	    //
	    // Note that it doesn't check if request body streamed.
	    //
	    // Returns the copied length as int64 and
	    // a not nil error if at least one new file
	    // can't be created due to the operating system's permissions or
	    // http.ErrMissingFile if no file received.
	    //
	    // If you want to receive & accept files and manage them manually you can use the `context#FormFile`
	    // instead and create a copy function that suits your needs, the below is for generic usage.
	    //
	    // The default form's memory maximum size is 32MB, it can be changed by the
	    //  `iris#WithPostMaxMemory` configurator at main configuration passed on `app.Run`'s second argument.
	    //
	    // See `FormFile` to a more controlled to receive a file.
	    //
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/http_request/upload-files
	    UploadFormFiles(destDirectory string, before ...func(Context, *multipart.FileHeader)) (n int64, err error)

	    //  +------------------------------------------------------------+
	    //  | Custom HTTP Errors                                         |
	    //  +------------------------------------------------------------+

	    // NotFound emits an error 404 to the client, using the specific custom error error handler.
	    // Note that you may need to call ctx.StopExecution() if you don't want the next handlers
	    // to be executed. Next handlers are being executed on iris because you can alt the
	    // error code and change it to a more specific one, i.e
	    // users := app.Party("/users")
	    // users.Done(func(ctx iris.Context){ if ctx.StatusCode() == 400 { /*  custom error code for /users */ }})
	    NotFound()

	    //  +------------------------------------------------------------+
	    //  | Body Readers                                               |
	    //  +------------------------------------------------------------+

	    // SetMaxRequestBodySize sets a limit to the request body size
	    // should be called before reading the request body from the client.
	    SetMaxRequestBodySize(limitOverBytes int64)

	    // GetBody reads and returns the request body.
	    // The default behavior for the http request reader is to consume the data readen
	    // but you can change that behavior by passing the `WithoutBodyConsumptionOnUnmarshal` iris option.
	    //
	    // However, whenever you can use the `ctx.Request().Body` instead.
	    GetBody() ([]byte, error)

	    // UnmarshalBody reads the request's body and binds it to a value or pointer of any type.
	    // Examples of usage: context.ReadJSON, context.ReadXML.
	    //
	    // Example: https://github.com/kataras/iris/blob/master/_examples/http_request/read-custom-via-unmarshaler/main.go
	    //
	    // UnmarshalBody does not check about gzipped data.
	    // Do not rely on compressed data incoming to your server. The main reason is: https://en.wikipedia.org/wiki/Zip_bomb
	    // However you are still free to read the `ctx.Request().Body io.Reader` manually.
	    UnmarshalBody(outPtr interface{}, unmarshaler Unmarshaler) error

	    // ReadJSON reads JSON from request's body and binds it to a pointer of a value of any json-valid type.
	    //
	    // Example: https://github.com/kataras/iris/blob/master/_examples/http_request/read-json/main.go
	    ReadJSON(jsonObjectPtr interface{}) error

	    // ReadXML reads XML from request's body and binds it to a pointer of a value of any xml-valid type.
	    //
	    // Example: https://github.com/kataras/iris/blob/master/_examples/http_request/read-xml/main.go
	    ReadXML(xmlObjectPtr interface{}) error

	    // ReadForm binds the formObject  with the form data
	    // it supports any kind of type, including custom structs.
	    // It will return nothing if request data are empty.
	    // The struct field tag is "form".
	    //
	    // Example: https://github.com/kataras/iris/blob/master/_examples/http_request/read-form/main.go
	    ReadForm(formObject interface{}) error

	    // ReadQuery binds the "ptr" with the url query string. The struct field tag is "url".
	    //
	    // Example: https://github.com/kataras/iris/blob/master/_examples/http_request/read-query/main.go
	    ReadQuery(ptr interface{}) error

	    //  +------------------------------------------------------------+
	    //  | Body (raw) Writers                                         |
	    //  +------------------------------------------------------------+

	    // Write writes the data to the connection as part of an HTTP reply.
	    //
	    // If WriteHeader has not yet been called, Write calls
	    // WriteHeader(http.StatusOK) before writing the data. If the Header
	    // does not contain a Content-Type line, Write adds a Content-Type set
	    // to the result of passing the initial 512 bytes of written data to
	    // DetectContentType.
	    //
	    // Depending on the HTTP protocol version and the client, calling
	    // Write or WriteHeader may prevent future reads on the
	    // Request.Body. For HTTP/1.x requests, handlers should read any
	    // needed request body data before writing the response. Once the
	    // headers have been flushed (due to either an explicit Flusher.Flush
	    // call or writing enough data to trigger a flush), the request body
	    // may be unavailable. For HTTP/2 requests, the Go HTTP server permits
	    // handlers to continue to read the request body while concurrently
	    // writing the response. However, such behavior may not be supported
	    // by all HTTP/2 clients. Handlers should read before writing if
	    // possible to maximize compatibility.
	    Write(body []byte) (int, error)

	    // Writef formats according to a format specifier and writes to the response.
	    //
	    // Returns the number of bytes written and any write error encountered.
	    Writef(format string, args ...interface{}) (int, error)

	    // WriteString writes a simple string to the response.
	    //
	    // Returns the number of bytes written and any write error encountered.
	    WriteString(body string) (int, error)

	    // SetLastModified sets the "Last-Modified" based on the "modtime" input.
	    // If "modtime" is zero then it does nothing.
	    //
	    // It's mostly internally on core/router and context packages.
	    //
	    // Note that modtime.UTC() is being used instead of just modtime, so
	    // you don't have to know the internals in order to make that works.
	    SetLastModified(modtime time.Time)

	    // CheckIfModifiedSince checks if the response is modified since the "modtime".
	    // Note that it has nothing to do with server-side caching.
	    // It does those checks by checking if the "If-Modified-Since" request header
	    // sent by client or a previous server response header
	    // (e.g with WriteWithExpiration or HandleDir or Favicon etc.)
	    // is a valid one and it's before the "modtime".
	    //
	    // A check for !modtime && err == nil is necessary to make sure that
	    // it's not modified since, because it may return false but without even
	    // had the chance to check the client-side (request) header due to some errors,
	    // like the HTTP Method is not "GET" or "HEAD" or if the "modtime" is zero
	    // or if parsing time from the header failed.
	    //
	    // It's mostly used internally, e.g. `context#WriteWithExpiration`.
	    //
	    // Note that modtime.UTC() is being used instead of just modtime, so
	    // you don't have to know the internals in order to make that works.
	    CheckIfModifiedSince(modtime time.Time) (bool, error)

	    // WriteNotModified sends a 304 "Not Modified" status code to the client,
	    // it makes sure that the content type, the content length headers
	    // and any "ETag" are removed before the response sent.
	    //
	    // It's mostly used internally on core/router/fs.go and context methods.
	    WriteNotModified()

	    // WriteWithExpiration works like `Write` but it will check if a resource is modified,
	    // based on the "modtime" input argument,
	    // otherwise sends a 304 status code in order to let the client-side render the cached content.
	    WriteWithExpiration(body []byte, modtime time.Time) (int, error)

	    // StreamWriter registers the given stream writer for populating
	    // response body.
	    //
	    // Access to context's and/or its' members is forbidden from writer.
	    //
	    // This function may be used in the following cases:
	    //
	    //     * if response body is too big (more than iris.LimitRequestBodySize(if set)).
	    //     * if response body is streamed from slow external sources.
	    //     * if response body must be streamed to the client in chunks.
	    //     (aka `http server push`).
	    //
	    // receives a function which receives the response writer
	    // and returns false when it should stop writing, otherwise true in order to continue
	    StreamWriter(writer func(w io.Writer) bool)

	    //  +------------------------------------------------------------+
	    //  | Body Writers with compression                              |
	    //  +------------------------------------------------------------+
	    // ClientSupportsGzip retruns true if the client supports gzip compression.
	    ClientSupportsGzip() bool

	    // WriteGzip accepts bytes, which are compressed to gzip format and sent to the client.
	    // returns the number of bytes written and an error ( if the client doesn' supports gzip compression)
	    // You may re-use this function in the same handler
	    // to write more data many times without any troubles.
	    WriteGzip(b []byte) (int, error)

	    // TryWriteGzip accepts bytes, which are compressed to gzip format and sent to the client.
	    // If client does not supprots gzip then the contents are written as they are, uncompressed.
	    TryWriteGzip(b []byte) (int, error)

	    // GzipResponseWriter converts the current response writer into a response writer
	    // which when its .Write called it compress the data to gzip and writes them to the client.
	    //
	    // Can be also disabled with its .Disable and .ResetBody to rollback to the usual response writer.
	    GzipResponseWriter() *GzipResponseWriter

	    // Gzip enables or disables (if enabled before) the gzip response writer,if the client
	    // supports gzip compression, so the following response data will
	    // be sent as compressed gzip data to the client.
	    Gzip(enable bool)

	    //  +------------------------------------------------------------+
	    //  | Rich Body Content Writers/Renderers                        |
	    //  +------------------------------------------------------------+

	    // ViewLayout sets the "layout" option if and when .View
	    // is being called afterwards, in the same request.
	    // Useful when need to set or/and change a layout based on the previous handlers in the chain.
	    //
	    // Note that the 'layoutTmplFile' argument can be set to iris.NoLayout || view.NoLayout
	    // to disable the layout for a specific view render action,
	    // it disables the engine's configuration's layout property.
	    //
	    // Look .ViewData and .View too.
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/view/context-view-data/
	    ViewLayout(layoutTmplFile string)

	    // ViewData saves one or more key-value pair in order to be passed if and when .View
	    // is being called afterwards, in the same request.
	    // Useful when need to set or/and change template data from previous hanadlers in the chain.
	    //
	    // If .View's "binding" argument is not nil and it's not a type of map
	    // then these data are being ignored, binding has the priority, so the main route's handler can still decide.
	    // If binding is a map or context.Map then these data are being added to the view data
	    // and passed to the template.
	    //
	    // After .View, the data are not destroyed, in order to be re-used if needed (again, in the same request as everything else),
	    // to clear the view data, developers can call:
	    // ctx.Set(ctx.Application().ConfigurationReadOnly().GetViewDataContextKey(), nil)
	    //
	    // If 'key' is empty then the value is added as it's (struct or map) and developer is unable to add other value.
	    //
	    // Look .ViewLayout and .View too.
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/view/context-view-data/
	    ViewData(key string, value interface{})

	    // GetViewData returns the values registered by `context#ViewData`.
	    // The return value is `map[string]interface{}`, this means that
	    // if a custom struct registered to ViewData then this function
	    // will try to parse it to map, if failed then the return value is nil
	    // A check for nil is always a good practise if different
	    // kind of values or no data are registered via `ViewData`.
	    //
	    // Similarly to `viewData := ctx.Values().Get("iris.viewData")` or
	    // `viewData := ctx.Values().Get(ctx.Application().ConfigurationReadOnly().GetViewDataContextKey())`.
	    GetViewData() map[string]interface{}

	    // View renders a template based on the registered view engine(s).
	    // First argument accepts the filename, relative to the view engine's Directory and Extension,
	    // i.e: if directory is "./templates" and want to render the "./templates/users/index.html"
	    // then you pass the "users/index.html" as the filename argument.
	    //
	    // The second optional argument can receive a single "view model"
	    // that will be binded to the view template if it's not nil,
	    // otherwise it will check for previous view data stored by the `ViewData`
	    // even if stored at any previous handler(middleware) for the same request.
	    //
	    // Look .ViewData` and .ViewLayout too.
	    //
	    // Examples: https://github.com/kataras/iris/tree/master/_examples/view
	    View(filename string, optionalViewModel ...interface{}) error

	    // Binary writes out the raw bytes as binary data.
	    Binary(data []byte) (int, error)

	    // Text writes out a string as plain text.
	    Text(format string, args ...interface{}) (int, error)

	    // HTML writes out a string as text/html.
	    HTML(format string, args ...interface{}) (int, error)

	    // JSON marshals the given interface object and writes the JSON response.
	    JSON(v interface{}, options ...JSON) (int, error)

	    // JSONP marshals the given interface object and writes the JSON response.
	    JSONP(v interface{}, options ...JSONP) (int, error)

	    // XML marshals the given interface object and writes the XML response.
	    XML(v interface{}, options ...XML) (int, error)

	    // Markdown parses the markdown to html and renders its result to the client.
	    Markdown(markdownB []byte, options ...Markdown) (int, error)

	    // YAML parses the "v" using the yaml parser and renders its result to the client.
	    YAML(v interface{}) (int, error)

	    //  +------------------------------------------------------------+
	    //  | Serve files                                                |
	    //  +------------------------------------------------------------+

	    // ServeContent serves content, headers are autoset
	    // receives three parameters, it's low-level function, instead you can use .ServeFile(string,bool)/SendFile(string,string)
	    //
	    //
	    // You can define your own "Content-Type" with `context#ContentType`, before this function call.
	    //
	    // This function doesn't support resuming (by range),
	    // use ctx.SendFile or router's `HandleDir` instead.
	    ServeContent(content io.ReadSeeker, filename string, modtime time.Time, gzipCompression bool) error

	    // ServeFile serves a file (to send a file, a zip for example to the client you should use the `SendFile` instead)
	    // receives two parameters
	    // filename/path (string)
	    // gzipCompression (bool)
	    //
	    // You can define your own "Content-Type" with `context#ContentType`, before this function call.
	    //
	    // This function doesn't support resuming (by range),
	    // use ctx.SendFile or router's `HandleDir` instead.
	    //
	    // Use it when you want to serve dynamic files to the client.
	    ServeFile(filename string, gzipCompression bool) error

	    // SendFile sends file for force-download to the client
	    //
	    // Use this instead of ServeFile to 'force-download' bigger files to the client.
	    SendFile(filename string, destinationName string) error

	    //  +------------------------------------------------------------+
	    //  | Cookies                                                    |
	    //  +------------------------------------------------------------+

	    // SetCookie adds a cookie.
	    // Use of the "options" is not required, they can be used to amend the "cookie".
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/cookies/basic
	    SetCookie(cookie *http.Cookie, options ...CookieOption)

	    // SetCookieKV adds a cookie, requires the name(string) and the value(string).
	    //
	    // By default it expires at 2 hours and it's added to the root path,
	    // use the `CookieExpires` and `CookiePath` to modify them.
	    // Alternatively: ctx.SetCookie(&http.Cookie{...})
	    //
	    // If you want to set custom the path:
	    // ctx.SetCookieKV(name, value, iris.CookiePath("/custom/path/cookie/will/be/stored"))
	    //
	    // If you want to be visible only to current request path:
	    // ctx.SetCookieKV(name, value, iris.CookieCleanPath/iris.CookiePath(""))
	    // More:
	    //                              iris.CookieExpires(time.Duration)
	    //                              iris.CookieHTTPOnly(false)
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/cookies/basic
	    SetCookieKV(name, value string, options ...CookieOption)

	    // GetCookie returns cookie's value by its name
	    // returns empty string if nothing was found.
	    //
	    // If you want more than the value then:
	    // cookie, err := ctx.Request().Cookie("name")
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/cookies/basic
	    GetCookie(name string, options ...CookieOption) string

	    // RemoveCookie deletes a cookie by its name and path = "/".
	    // Tip: change the cookie's path to the current one by: RemoveCookie("name", iris.CookieCleanPath)
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/cookies/basic
	    RemoveCookie(name string, options ...CookieOption)

	    // VisitAllCookies accepts a visitor function which is called
	    // on each (request's) cookies' name and value.
	    VisitAllCookies(visitor func(name string, value string))

	    // MaxAge returns the "cache-control" request header's value
	    // seconds as int64
	    // if header not found or parse failed then it returns -1.
	    MaxAge() int64

	    //  +------------------------------------------------------------+
	    //  | Advanced: Response Recorder and Transactions               |
	    //  +------------------------------------------------------------+

	    // Record transforms the context's basic and direct responseWriter to a ResponseRecorder
	    // which can be used to reset the body, reset headers, get the body,
	    // get & set the status code at any time and more.
	    Record()

	    // Recorder returns the context's ResponseRecorder
	    // if not recording then it starts recording and returns the new context's ResponseRecorder
	    Recorder() *ResponseRecorder

	    // IsRecording returns the response recorder and a true value
	    // when the response writer is recording the status code, body, headers and so on,
	    // else returns nil and false.
	    IsRecording() (*ResponseRecorder, bool)

	    // BeginTransaction starts a scoped transaction.
	    //
	    // You can search third-party articles or books on how Business Transaction works (it's quite simple, especially here).
	    //
	    // Note that this is unique and new
	    // (=I haver never seen any other examples or code in Golang on this subject, so far, as with the most of iris features...)
	    // it's not covers all paths,
	    // such as databases, this should be managed by the libraries you use to make your database connection,
	    // this transaction scope is only for context's response.
	    // Transactions have their own middleware ecosystem also, look iris.go:UseTransaction.
	    //
	    // See https://github.com/kataras/iris/tree/master/_examples/ for more
	    BeginTransaction(pipe func(t *Transaction))

	    // SkipTransactions if called then skip the rest of the transactions
	    // or all of them if called before the first transaction
	    SkipTransactions()

	    // TransactionsSkipped returns true if the transactions skipped or canceled at all.
	    TransactionsSkipped() bool

	    // Exec calls the `context/Application#ServeCtx`
	    // based on this context but with a changed method and path
	    // like it was requested by the user, but it is not.
	    //
	    // Offline means that the route is registered to the iris and have all features that a normal route has
	    // BUT it isn't available by browsing, its handlers executed only when other handler's context call them
	    // it can validate paths, has sessions, path parameters and all.
	    //
	    // You can find the Route by app.GetRoute("theRouteName")
	    // you can set a route name as: myRoute := app.Get("/mypath", handler)("theRouteName")
	    // that will set a name to the route and returns its RouteInfo instance for further usage.
	    //
	    // It doesn't changes the global state, if a route was "offline" it remains offline.
	    //
	    // app.None(...) and app.GetRoutes().Offline(route)/.Online(route, method)
	    //
	    // Example: https://github.com/kataras/iris/tree/master/_examples/routing/route-state
	    //
	    // User can get the response by simple using rec := ctx.Recorder(); rec.Body()/rec.StatusCode()/rec.Header().
	    //
	    // Context's Values and the Session are kept in order to be able to communicate via the result route.
	    //
	    // It's for extreme use cases, 99% of the times will never be useful for you.
	    Exec(method, path string)

	    // RouteExists reports whether a particular route exists
	    // It will search from the current subdomain of context's host, if not inside the root domain.
	    RouteExists(method, path string) bool

	    // Application returns the iris app instance which belongs to this context.
	    // Worth to notice that this function returns an interface
	    // of the Application, which contains methods that are safe
	    // to be executed at serve-time. The full app's fields
	    // and methods are not available here for the developer's safety.
	    Application() Application

	    // String returns the string representation of this request.
	    // Each context has a unique string representation.
	    // It can be used for simple debugging scenarios, i.e print context as string.
	    //
	    // What it returns? A number which declares the length of the
	    // total `String` calls per executable application, followed
	    // by the remote IP (the client) and finally the method:url.
	    String() string
	}


## MVC

Iris 对 MVC 模式有一流的支持，您在其他任何地方都找不到这些东西，Iris 框架支持请求数据、模型、持久数据和以最快的速度执行的绑定。

支持所有HTTP方法，例如，如果想要提供GET，那么控制器应该有一个名为 `Get()` 的函数，您可以定义多个方法函数在同一个Controller中提供。

一个 Singleton Controller Demo：

	package main

	import (
		"fmt"
		"sync/atomic"

		"github.com/kataras/iris"
		"github.com/kataras/iris/mvc"
	)

	func main() {
		app := iris.New()
		mvc.New(app.Party("/")).Handle(&globalVisitorsController{visits: 0})

		// http://localhost:8080
		app.Run(iris.Addr(":8080"))
	}

	type globalVisitorsController struct {
		visits uint64
	}

	func (c *globalVisitorsController) Get() string {
		count := atomic.AddUint64(&c.visits, 1)
		return fmt.Sprintf("Total visitors: %d", count)
	}


示例代码:

    import (
        "github.com/kataras/iris"
        "github.com/kataras/iris/mvc"
    )
    func main() {
        app := iris.New()
        mvc.Configure(app.Party("/root"), myMVC)

        // 从 "./views" 文件夹加载扩展名为 .html 的模板
        // 使用模板引擎是标准的`html/template`包。
        app.RegisterView(iris.HTML("./views", ".html"))

        app.Run(iris.Addr(":8080"))
    }
    func myMVC(app *mvc.Application) {
        // app.Register(...)
        // app.Router.Use/UseGlobal/Done(...)
        app.Handle(new(MyController))
    }
    
    type MyController struct {}

    func (m *MyController) BeforeActivation(b mvc.BeforeActivation) {
        // b.Dependencies().Add/Remove
        // b.Router().Use/UseGlobal/Done // 以及您已经知道的任何标准API调用

        // 1-> Method
        // 2-> Path
        // 3-> 控制器的函数名称将被解析为处理程序
        // 4-> 应该在MyCustomHandler之前运行的任何处理程序
	    anyMiddleware := func(ctx iris.Context) {
	        ctx.Application().Logger().Warnf("Inside /custom_path")
	        ctx.Next()
	    }
        b.Handle("GET", "/something/{id:long}", "MyCustomHandler", anyMiddleware...)

	    // or even add a global middleware based on this controller's router,
	    // which in this example is the root "/":
	    // b.Router().Use(myMiddleware)
    }

    // GET: http://localhost:8080/root/something/{id:long}
    func (m *MyController) MyCustomHandler(id int64) string { 
    	return "MyCustomHandler says Hey" 
    }

	// Resource: http://localhost:8080
	func (c *MyController) Get() mvc.Result {
	    return mvc.Response{
	        ContentType: "text/html",
	        Text:        "<h1>Welcome</h1>",
	    }
	}

	// Resource: http://localhost:8080/ping
	func (c *MyController) GetPing() string {
	    return "pong"
	}

	// Resource: http://localhost:8080/json
	func (c *TravelController) GetHelloJson() interface{} {
		return map[string]string{"message": "Hello Iris!"}
	}

	// Resource: http://localhost:8080/json/list
	func (c *TravelController) GetHelloList() interface{} {
		return []string{"message", "Hello Iris!"}
	}

	// Resource: http://localhost:8080/hello/string
	func (c *TravelController) GetHelloString() interface{} {
		return "Hello Iris!"
	}

	// Resource: http://localhost:8080/user/{username:string}
	func (c *MyController) GetUserBy(username string) mvc.Result {
	 return mvc.View{
	     Name: "user/username.html",
	     Data: username,
	 }
	}

Controller结构中的持久性数据（在请求之间共享数据），通过定义对依赖项的服务或具有Singleton控制器作用域。

mvcApplication.Register() 用来注册依赖对象，但方法参数列表是 iris.Context 对象，即 `func(ctx iris.Context) {}`，Iris 会自动将注册的依赖对象注入到 ctx 对象实例的相同类型的字段属性中。下面的代码片段中，注册了三个依赖对象，其中就有 time.Time，这个依赖对象就会自动注入到控制器的 StartTime 字段中。如果没有注册 time.Time 类型对象，那么控制器的 StartTime 字段就会保持未初始化的状态。

如果控制器没有相应字段或函数签名，则注在服务器运行之前忽略这些依赖项，这样你就可以绑定很多依赖对象并在不同的控制器中使用它们。如果注册的依赖对象是一个 `func(ctx iris.Context)` 函数并返回一个值。控制器会解析到此函数的结果类型并且在每个请求上它将使用 Context 调用该函数，并将结果设置为控制器的字段。

对于 iris.Context 对象则不需要进行注册，Iris 会自行检查到控制器的 iris.Context 字段，并在客户端发出请求后自动进行动态绑定 Dynamic Binding，除此外，MVC 对象的相关请求响应方法的参数也是动态绑定的。相对于 Session，它在程序运行后就完成初始化并且是进行静态绑定的 Static Bindding。为了看到进行了那些绑定行为，可以在程序初始化时设置打印调试日志信息：

	app.Logger().SetLevel("debug")

参考官方 MVC Login DEMO：

	func (ctx iris.Context，otherArguments ...)

	type UserController struct {
		// context is auto-binded by Iris on each request,
		// remember that on each incoming request iris creates a new UserController each time,
		// so all fields are request-scoped by-default, only dependency injection is able to set
		// custom fields like the Service which is the same for all requests (static binding)
		// and the Session which depends on the current context (dynamic binding).
		Ctx iris.Context

		// Our UserService, it's an interface which
		// is binded from the main application.
		Service services.UserService

		// Session, binded using dependency injection from the main.go.
		Session *sessions.Session

		// A time.time which is binded from the MVC,
		// order of binded fields doesn't matter.
		StartTime time.Time
	}

	func (c *UserController) GetRegister() mvc.Result {
		if c.isLoggedIn() {
			c.logout()
		}

		return registerStaticView
	}

	// main.go
	sessManager := sessions.New(sessions.Config{
		Cookie:  "sessioncookiename",
		Expires: 24 * time.Hour,
	})
	user := mvc.New(app.Party("/user"))
	user.Register(
		userService,
		sessManager.Start,
		time.Now(),
	)
	user.Handle(new(controllers.UserController))


共享控制器之间的依赖关系或在父MVC应用程序上注册它们，并能够在 `BeforeActivation` 可选事件回调中修改每个控制器的依赖关系，这个方法只在初始过程执行一次，并在初始化结束时执行 `AfterActivation`。

可选的 `BeginRequest(ctx)` 和 `EndRequest(ctx)` 函数在方法执行之前、之后执行，可以做一些初始化工作，对调用中间件或许多方法使用相同的数据集合很有用。注意这两个方法单独实现无效，要一起实现才生效。 不同于中间件函数，这两个方法在控制器方法执行时总会被相应执行，例如有一个TravelController 控制器：

	func (c *TravelController) BeginRequest(ctx iris.Context) {
		fmt.Println("BeginRequest")
	}
	func (c *TravelController) AfterActivation(b mvc.AfterActivation) {
		fmt.Println("TravelController AfterActivation")
	}
	func (c *TravelController) EndRequest(ctx iris.Context) {
		fmt.Println("EndRequest")
	}
	func (c *TravelController) BeforeActivation(b mvc.BeforeActivation) {
		// b.Dependencies().Add/Remove(...)
		fmt.Println("BeforeActivation")
	}

MVC 方法命名规则与 URL 映射关系：

`mvc.New(app.Party("/user")).Handle(new(user.Controller))`

- `func(*Controller) Get()` - `GET:/user`.
- `func(*Controller) Post()` - `POST:/user`.
- `func(*Controller) GetLogin()` - `GET:/user/login`
- `func(*Controller) AnyLogin()` - `POST/GET/...`
- `func(*Controller) PostLogin()` - `POST:/user/login`
- `func(*Controller) GetProfileFollowers()` - `GET:/user/profile/followers`
- `func(*Controller) PostProfileFollowers()` - `POST:/user/profile/followers`
- `func(*Controller) GetBy(id int64)` - `GET:/user/{param:long}`
- `func(*Controller) PostBy(id int64)` - `POST:/user/{param:long}`

`mvc.New(app.Party("/profile")).Handle(new(profile.Controller))`

- `func(*Controller) GetBy(username string)` - `GET:/profile/{param:string}`

`mvc.New(app.Party("/assets")).Handle(new(file.Controller))`

- `func(*Controller) GetByWildard(path string)` - `GET:/assets/{param:path}`

方法可接受参数类型：int, int64, bool and string。

可以通过 MVC 控制器方法的返回参数进行依赖注入，所以可以自行定义方法返回的类型，Iris 会自动处理方法返回的参数，参考 Iris Wiki [[Dependency Injection]]。

	func(c *ExampleController) Get() string |
	                            (string, string) |
	                            (string, int) |
	                            int |
	                            (int, string) |
	                            (string, error) |
	                            error |
	                            (int, error) |
	                            (any, bool) |
	                            (customStruct, error) |
	                            customStruct |
	                            (customStruct, int) |
	                            (customStruct, string) |
	                            mvc.Result or (mvc.Result, error)

其中 `mvc.Result` 就是 `hero.Result` 的别名写法：

	type Result interface {
	    // Dispatch should sends the response to the context's response writer.
	    Dispatch(ctx iris.Context)
	}



## MVC with Session

    // +build go1.9 session-controller

	package main

	import (
		"fmt"
		"time"

		"github.com/kataras/iris"
		"github.com/kataras/iris/mvc"
		"github.com/kataras/iris/sessions"
	)

	// VisitController handles the root route.
	type VisitController struct {
		// the current request session,
		// its initialization happens by the dependency function that we've added to the `visitApp`.
		Session *sessions.Session

		// A time.time which is binded from the MVC,
		// order of binded fields doesn't matter.
		StartTime time.Time
	}

	// Get handles
	// Method: GET
	// Path: http://localhost:8080
	func (c *VisitController) Get() string {
		// it increments a "visits" value of integer by one,
		// if the entry with key 'visits' doesn't exist it will create it for you.
		visits := c.Session.Increment("visits", 1)
		// write the current, updated visits.
		since := time.Now().Sub(c.StartTime).Seconds()
		return fmt.Sprintf("%d visit(s) from my current session in %0.1f seconds of server's up-time",
			visits, since)
	}

	func newApp() *iris.Application {
		app := iris.New()
		sess := sessions.New(sessions.Config{Cookie: "mysession_cookie_name"})

		visitApp := mvc.New(app.Party("/"))
		// bind the current *session.Session, which is required, to the `VisitController.Session`
		// and the time.Now() to the `VisitController.StartTime`.
		visitApp.Register(
			// if dependency is a function which accepts
			// a Context and returns a single value
			// then the result type of this function is resolved by the controller
			// and on each request it will call the function with its Context
			// and set the result(the *sessions.Session here) to the controller's field.
			//
			// If dependencies are registered without field or function's input arguments as
			// consumers then those dependencies are being ignored before the server ran,
			// so you can bind many dependecies and use them in different controllers.
			sess.Start,
			time.Now(),
		)
		visitApp.Handle(new(VisitController))

		return app
	}

	func main() {
		app := newApp()

		// 1. open the browser (no in private mode)
		// 2. navigate to http://localhost:8080
		// 3. refresh the page some times
		// 4. close the browser
		// 5. re-open the browser and re-play 2.
		app.Run(iris.Addr(":8080"))
	}



## MVC with Websocket

    package main
    import (
        "sync/atomic"
        "github.com/kataras/iris"
        "github.com/kataras/iris/mvc"
        "github.com/kataras/iris/websocket"
    )
    func main() {
        app := iris.New()
        // 加载模板
        app.RegisterView(iris.HTML("./views", ".html"))

        // 渲染视图.
        app.Get("/", func(ctx iris.Context) {
            ctx.View("index.html")
        })

        mvc.Configure(app.Party("/websocket"), configureMVC)

        // http://localhost:8080
        app.Run(iris.Addr(":8080"))
    }
    func configureMVC(m *mvc.Application) {
        ws := websocket.New(websocket.Config{})
        // http://localhost:8080/websocket/iris-ws.js
        m.Router.Any("/iris-ws.js", websocket.ClientHandler())

      //这将绑定ws.Upgrade的结果，这是一个websocket.Connection
        //由`m.Handle`服务的控制器。
        m.Register(ws.Upgrade)
        m.Handle(new(websocketController))
    }
    var visits uint64
    func increment() uint64 {
        return atomic.AddUint64(&visits, 1)
    }

    func decrement() uint64 {
        return atomic.AddUint64(&visits, ^uint64(0))
    }

    type websocketController struct {
        //注意你也可以使用匿名字段，无所谓，binder会找到它。
        //这是当前的websocket连接，每个客户端都有自己的* websocketController实例。
        Conn websocket.Connection
    }

    func (c *websocketController) onLeave(roomName string) {
        //visits--
        newCount := decrement()

        //这将在所有客户端上调用“visit”事件，当前客户端除外
        //（它不能因为它已经离开但是对于任何情况都使用这种类型的设计）
        c.Conn.To(websocket.Broadcast).Emit("visit", newCount)
    }

    func (c *websocketController) update() {
        // visits++
        newCount := increment()

       //这将在所有客户端上调用“visit”事件，包括当前事件
        //使用'newCount'变量。
        //
        //你有很多方法可以做到更快，例如你可以发送一个新的访问者
        //并且客户端可以自行增加，但这里我们只是“展示”websocket控制器。
        c.Conn.To(websocket.All).Emit("visit", newCount)
    }
    func (c *websocketController) Get( /* websocket.Connection could be lived here as well, it doesn't matter */ ) {
        c.Conn.OnLeave(c.onLeave)
        c.Conn.On("visit", c.update)

        // 在所有事件回调注册后调用它。
        c.Conn.Wait()
    }



## API Examples

Using Get, Post, Put, Patch, Delete and Options

	func main() {
	    // Creates an application with default middleware:
	    // logger and recovery (crash-free) middleware.
	    app := iris.Default()

	    app.Get("/someGet", getting)
	    app.Post("/somePost", posting)
	    app.Put("/somePut", putting)
	    app.Delete("/someDelete", deleting)
	    app.Patch("/somePatch", patching)
	    app.Head("/someHead", head)
	    app.Options("/someOptions", options)

	    app.Run(iris.Addr(":8080"))
	}

## Parameters in path

### Params().Get
:string	string	anything (single path segment)

### Params().GetInt
:int	int	-9223372036854775808 to 9223372036854775807 (x64) or -2147483648 to 2147483647 (x32), depends on the host arch

### Params().GetInt8
:int8	int8	-128 to 127

### Params().GetInt16
:int16	int16	-32768 to 32767

### Params().GetInt32
:int32	int32	-2147483648 to 2147483647

### Params().GetInt64
:int64	int64	-9223372036854775808 to 9223372036854775807

### Params().GetUint
:uint	uint	0 to 18446744073709551615 (x64) or 0 to 4294967295 (x32), depends on the host arch

### Params().GetUint8
:uint8	uint8	0 to 255

### Params().GetUint16
:uint16	uint16	0 to 65535

### Params().GetUint32
:uint32	uint32	0 to 4294967295

### Params().GetUint64
:uint64	uint64	0 to 18446744073709551615

### Params().GetBool
:bool	bool	"1" or "t" or "T" or "TRUE" or "true" or "True" or "0" or "f" or "F" or "FALSE" or "false" or "False"

### Params().Get
:alphabetical	string	lowercase or uppercase letters

### Params().Get
:file	string	lowercase or uppercase letters, numbers, underscore `(_)`, dash `(-)`, point `(.)` and no spaces or other special characters that are not valid for filenames

### Params().Get
:path	string	anything, can be separated by slashes (path segments) but should be the last part of the route path

	app.Get("/users/{id:uint64}", func(ctx iris.Context){
	    id := ctx.Params().GetUint64Default("id", 0)
	    // [...]
	})

## Built'n Func

### regexp(expr string)	:string
### prefix(prefix string)	:string
### suffix(suffix string)	:string
### contains(s string)	:string
### min(minValue)	:string(char length), retValue

minValue int or int8 or int16 or int32 or int64 or uint8 or uint16 or uint32 or uint64 or float32 or float64
retValue :int, :int8, :int16, :int32, :int64, :uint, :uint8, :uint16, :uint32, :uint64

### max(maxValue )	:string(char length), retValue

maxValue int or int8 or int16 or int32 or int64 or uint8 or uint16 or uint32 or uint64 or float32 or float64
retValue :int, :int8, :int16, :int32, :int64, :uint, :uint8, :uint16, :uint32, :uint64

### range(minValue, maxValue )	retValue

minValue, maxValue int or int8 or int16 or int32 or int64 or uint8 or uint16 or uint32 or uint64 or float32 or float64
retValue :int, :int8, :int16, :int32, :int64, :uint, :uint8, :uint16, :uint32, :uint64

Usage:

	app.Get("/profile/{name:alphabetical max(255)}", func(ctx iris.Context){
	    name := ctx.Params().Get("name")
	    // len(name) <=255 otherwise this route will fire 404 Not Found
	    // and this handler will not be executed at all.
	})























































































































































































































































































































































































