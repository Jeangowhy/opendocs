
# 🐣 Makefile 自动化编译
- http://www.ruanyifeng.com/blog/2015/02/make.html
- https://www.gnu.org/software/make/manual/make.html
- http://erlang.org/doc/man/make.html#emakefile
- Programming Erlang 2nd - 10.3 Automating Compilation with Makefiles

Make 是最常用的构建工具，诞生于 1977 年，主要用于 C 语言的项目。但是实际上 ，任何只要某个文件有变化，就要重新构建的项目，都可以用 Make 构建。

Erlang 命令本身也实现了 Emakefile 的功能，执行编译 `erl -make` 相当执行 `make:all()`，编译后的字节文件会保存到 `ebin` 目录，执行时使用 `erl -pa ebin` 就可以自动加载字节码。erl -make 也兼容 GNU make。

Makefile 脚本是一组依赖规则，make 命令根据规则去调用相应的命令生成相应的输出，最终构建出需要编译的程序。

Emakefile 规则定义语法：

    Modules.
    {Modules,Options}.

其中 Modules 是原子类型，可以是以下：

- 一个模块名，如 file1，又或者在其它目录中 `../foo/file1`
- 一组模块，通过熊通配符号指定，如 `'file*'`
- 全通配，当前目录下的所有模块 `'*'`
- 由以上项目任意组合的列表，比如 `['file*','../foo/file3','File4']`

选项 Options 指定了编译选项，Emakefile 文件是从上到下读取的，如果多条匹配设置出现，开头的一条生效。如下 `'file1'` 模块的编译选项是 `[debug_info,{i,"../foo"}]`，它指定了编译输出调试信息，如以下 Emakefile 文件：

    {'src/*', [debug_info,
               {i, "src"},
               {i, "include"},
               {outdir, "ebin"}]}.

    {'file1',[debug_info,{i,"../foo"}]}.
    {'*',[debug_info]}.    


GNU 的 Make 工具可以替代手工的编译工作，通过 Makefile 脚本实现工程级别的编译工作自动化。

列如，以下一个 Makefile：

    .SUFFIXES: .erl .beam
     
    .erl.beam:
        erlc -W $<
    ERL = erl -boot start_clean 
     
    MODS = hello shop
    
    all: compile 
     
    compile: ${MODS:%=%.beam}
        @echo "make clean - clean up"
     
    clean:  
        rm -rf *.beam erl_crash.dump 

保存到源代码 hello.erl、shop.erl 同一文件夹下，执行 `erl -make`，编译成功就会出现源代码对应的 .beam。

在 Windows 系统使用 Gnu make 命令，需要在 makefile 中指定 ComSpec 这个环境变量指向 cmd.exe，或者设置 `SHELL=cmd.exe` 否则 shell 会执行失败：

    process_begin: CreateProcess(NULL,gcc -c test.c, ...)failed. 
    make(e=2): 系统找不到指定的文件 
    make:*** [test.o] 错误2 

列如，Erlang 源代码中提供了 wxErlang 模块的示例，其编译脚本 otp_src_23.0\lib\wx\examples\demo\Makefile 是为 Linux 系统准备的，在 Windows 系统上使用需要修改一下；

    SHELL=cmd.exe

    ERL_TOP = ..\..\..\..
    TOPDIR   = ..\..
    SRC = .
    BIN = .
    ERLINC = $(TOPDIR)/include
    ERLC = erlc
    TESTMODS = \
        demo \
        demo_html_tagger \
        ...
        ex_graphicsContext

    TESTTARGETS = $(TESTMODS:%=%.beam)
    TESTSRC = $(TESTMODS:%=%.erl)

    # Targets
    $(TESTTARGETS):$(TESTSRC)
    opt debug:  $(TESTTARGETS)
        ERLC -o $(TOPDIR)/ebin  $(TESTSRC)
    clean:
        del $(TOPDIR)\ebin\*.beam
        del "$(TOPDIR)\ebin\erl_crash.dump"
    #   del $(TESTTARGETS:%="$(TOPDIR)/ebin/%")
    #   rm -f $(TESTTARGETS)
    #   rm -f *~ core erl_crash.dump

    # docs:

    run: opt
        erl -smp -detached -pa $(TOPDIR)\ebin -s demo

然后执行编译，运行测试：

    $ make
    $ erl -noshell -s demo start -s init stop

make 命令只是一个根据指定的 Shell 命令进行构建的工具，它的规则很简单：

- Target 规定要构建哪个文件，用什么命令；
- Dependence 它依赖哪些源文件；
- Update 当那些文件有变动时，如何重新构建它。

构建规则都写在 Makefile 文件里面，这个文件由一系列规则 rules 构成：

    <target> : <prerequisites> 
    [tab]  <commands>

- 第一行冒号前面的部分，叫做`目标` Target，多目标用空格隔开，冒号后面的部分叫做`前置条件` prerequisites。
- 第二行必须由一个 tab 键起首，后面跟着`命令` commands。
- 目标是必需的，不可省略，前置条件和命令都是可选的，但是两者之中必须至少存在一个。
- 每条规则就明确两件事：构建目标的前置条件是什么，以及如何构建。

目标通常是文件名，指明 Make 命令所要构建的对象，除了文件名，目标还可以是某个操作的名字，这称为`伪目标` phony target。

在定义目标时，如果当前目录中，正好有一个文件同名，比如，目标叫做 `clean`，Make 执行时发现 clean 文件已经存在，而且是最新的状态，就认为没有必要重新构建了，就不会执行指定的命令。为了避免这种情况，可以明确声明 clean 是伪目标，写法如下：

    .PHONY: clean
    clean:
            rm *.o temp

声明 clean 是伪目标之后，make 就不会去检查是否存在一个叫做 clean 的文件，而是每次运行都执行对应的命令。像 `.PHONY` 这样的内置目标名还有不少，伪目标以句点开头跟大写字母，可以查看手册。

前置条件通常是一组文件名，之间用空格分隔。它指定了目标是否重新构建的判断标准： 只要有一个`前置文件`不存在，或者有过更新，前置文件的 last-modification 时间戳比`目标`的时间戳新，目标就需要重新构建。

命令 commands 表示如何更新目标文件，由一行或多行的 Shell 命令组成。它是构建目标的具体指令，它的运行结果通常就是生成目标文件。

Make 有`隐含规则` implict rule，比如：

    foo : foo.o bar.o
            cc -o foo foo.o bar.o $(CFLAGS) $(LDFLAGS)

上面的规则中，没有定义 foo.o 目标，make 会自动使用隐含规则，选检查 foo.o 文件是不存在，然后检查目录下对应的源代码，比如 foo.c 文件就会执行 C 编译器，如果是 foo.p 文件则执行 Pascal 编译器，如此。

隐含规则和隐含变量是配套的，C compiler，对应的隐含变量就是 cc 命令，可以直接调用，$(CC)、$(CFLAGS)、$(CPPFLAGS) 等。


Make 的一些编程能力：

- Make 支持命令换行，在换行符前加反斜杠 `\` 转义，$$ 表示转义 $ 符号。
- 井号 # 在 Makefile 中表示其后面的内容是注释。
- 支持 `*`、`?`、`[...]`  通配符用来指定一组符合条件的文件名。
- 支持匹配符，`%`，如 `%.o: %.c` 为当前目录下源码文件定义相应的目标。
- 支持变量，如 `v1 = Hi!` 定义了 v1 变量，`${v1}` 或 `$(v1)` 使用变量，例如 `@echo $(v1)`，或者 `v2 = $(v1)`。
- 支持 shell 命令，如 `contents := $(shell cat foo)`。
- 变量高级引用，`$(var:a=b)` 或者 `${var:a=b}`，例如以下 bar 变量最后的值是 `a.c b.c l.a c.c`：

        foo := a.o b.o l.a c.o
        bar := $(foo:.o=.c)

- 内置变量，如`$(CC)` 指向当前使用的编译器，`$(MAKE)` 指向当前使用的 Make 工具。
- 自动变量：

    - `$@` 指代当前 Make 命令当前构建的那个目标。
    - `$<` 指代第一个前置条件。
    - `$?` 指代比目标更新的所有前置条件，之间以空格分隔。比如，规则为 t: p1 p2，其中 p2 的时间戳比 t 新，$? 就指代 p2。
    - `$^` 指代所有前置条件，之间以空格分隔。
    - `$*` 指代匹配符 % 匹配的部分， 比如 % 匹配 f1.txt 中的 f1，$* 就表示 f1。
    - `$(@D)` 和 `$(@F)` 分别指向 $@ 自动变量的目录名和文件名部分。
    - `$(<D)` 和 `$(<F)` 分别指向 $< 自动变量的目录名和文件名部分。

- 支持 if-else 条件判断结构：

        ifeq ($(CC),gcc)
            libs=$(libs_for_gcc)
        else
            libs=$(normal_libs)
        endif

- 支持循环结构：

        LIST = one two three

        all:
            for i in $(LIST); do \
                echo $$i; \
            done

    等同于

        all:
            for i in one two three; do \
                echo $i; \
            done

- 支持使用函数：

        $(function arguments)

    或者

        ${function arguments}

Makefile 提供了许多内置函数，可供调用。下面是几个常用的内置函数。

Text Functions

| 格式        | 示范        |
| :-------  | :-------  |
| $(subst from,to,text) | $(subst ee,EE,feet on the street) |
| $(lastword names…)    | $(lastword foo bar) |
| $(patsubst pattern,replacement,text)  | $(patsubst %.c,%.o,x.c.c bar.c) |
| $(strip string)   | $(strip a b c ) |
| $(findstring find,in) | $(findstring a,a b c) |
| $(filter pattern…,text)   | $(filter %.c %.s,$(sources)) |
| $(sort list)  | $(sort foo bar lose) |
| $(word n,text)    | $(word 2, foo bar baz) |
| $(wordlist s,e,text)  | $(wordlist 2, 3, foo bar baz) |

File Name Functions

| 格式        | 示范    |
| :-------  | :-------  |
| $(dir names…) | $(dir src/foo.c hacks)    |
| $(notdir names…)  | $(notdir src/foo.c hacks) |
| $(suffix names…)  | $(suffix src/foo.c src-1.0/bar.c hacks)   |
| $(basename names…)    | $(basename src/foo.c src-1.0/bar hacks)   |
| $(addsuffix suffix,names…)    | $(addsuffix .c,foo bar)   |
| $(addprefix prefix,names…)    | $(addprefix src/,foo bar) |
| $(join list1,list2)   | $(join a b,.c .o) |
| $(wildcard pattern)   |   |
| $(realpath names…)    |   |
| $(abspath names…) |   |

Conditional Functions

| 格式        | 示范    |
| :-------  | :-------  |
| $(if condition,then-part[,else-part]) |   |
| $(or condition1[,condition2[,condition3…]])   |   |
| $(and condition1[,condition2[,condition3…]])  |   |

Make Control Functions

| 格式        | 示范    |
| :-------  | :-------  |
| $(error text…)    | $(error error is $(ERROR1))   |
| $(info text…) |   |
| $(warning text…)  |   |

其它函数 

| 函数        | 格式        | 作用    |
| :-------  | :-------  | :-------  |
| Foreach Function  | $(foreach var,list,text)  | Repeat some text with controlled variation. |
| File Function     | $(file op filename[,text])    | Write text to a file. |
| Call Function     | $(call variable,param,param,…)    | Expand a user-defined function. |
| Value Function    | $(value variable) | Return the un-expanded value of a variable. |
| Eval Function     | $(eval $(call PROGRAM_template,$(prog))   | Evaluate the arguments as makefile syntax. |
| Origin Function   | $(origin variable)    | Find where a variable got its value. |
| Flavor Function   | $(flavor variable)    | Find out the flavor of a variable. |
| Shell Function    | $(shell echo *.c) | Substitute the output of a shell command. |
| Guile Function    |   | Use GNU Guile embedded scripting language. |


脚本模板 Makefile.template：

    # leave these lines alone
    .SUFFIXES: .erl .beam .yrl

    .erl.beam:
        erlc -W $<

    .yrl.erl:
        erlc -W $<

    ERL = erl -boot start_clean

    # Here's a list of the erlang modules you want compiling
    # If the modules don't fit onto one line add a \ character
    # to the end of the line and continue on the next line
    # Edit the lines below
    
    MODS = module1 module2 \
        module3 ... special1 \
        ...
        moduleN
    
    # The first target in any makefile is the default target.
    # If you just type "make" then "make all" is assumed (because
    # "all" is the first target in this makefile)

    all: compile

    compile: ${MODS:%=%.beam} subdirs

    ## special compilation requirements are added here

    special1.beam: special1.erl
        ${ERL} -Dflag1 -W0 special1.erl

    ## run an application from the makefile

    application1: compile
        ${ERL} -pa Dir1 -s application1 start Arg1 Arg2

    # the subdirs target compiles any code in sub-directories

    subdirs:
        cd dir1; $(MAKE)
        cd dir2; $(MAKE)
        ...

    # remove all the code

    clean:
        rm -rf *.beam erl_crash.dump
        cd dir1; $(MAKE) clean
        cd dir2; $(MAKE) clean

最重要的是：

    MODS = module1 module2 module3 ... special1 ...

它定义了需要编译的目标模块，然后使用 `${MODS:%=%.beam}` 转换成 beam 扩展名，执行 make 可以指定编译的目标：

    make [Target]

就会将模块编译生成脚本定义目标文件。


# 🐣 GNU m4 宏编程
1. https://www.gnu.org/software/m4/
2. https://www.gnu.org/software/autoconf/
3. https://www.gnu.org/software/automake/
4. 让这世界再多一份 GNU m4 教程 https://segmentfault.com/a/1190000004108113

手写 Makefile 虽然不是困难的工作却非常繁琐，并且手写脚本可能风格不一致。为此 GNU 引入了多个工具来实现自动地生成符合自由软件惯例的 Makefile，象常见的 GNU 程序一样，只要使用 ./configure make make instal 就可以完成程序和编译和安装：

1. autoconf 根据一个宏文件生成 configure 源代码配置脚本；
2. automake 根据一些简单的预定义宏文件来生成 Makefile.in 脚本，依赖 autoconf；
3. configure 脚本依据 Makefile.in 来生成一个符合惯例的 Makefile 脚本；
4. GNU m4 通用的宏处理器，宏编程工具，autoconf 中大量采用；

C 语言自诞生后，只用了 5 年就让汇编语言归隐山林了，这可能要归功于 Unix 的成功以及 Dennis Ritchie 的忽悠。Steve Johnson——yacc, lint, spell 以及 PCC（Portable C Compiler）的作者说：『Dennis Ritchie 告诉所有人，C 函数的调用开销真的很小很小。于是人人都开始编写小函数，搞模块化。然而几年后，我们发现在 PDF-11 中函数的调用开销依然非常大，而 VAX 机器上的代码往往在 CALL 指令上花费掉 50% 的运行时间。Dennis 对我们撒了谎！但为时已晚，我们已经欲罢不能……』

Macros 即代码生成工具，宏可以创造优雅易读的代码，更能体现编程是一种艺术。虽然有些编程语言未提供宏功能，但是有 GNU m4 这种通用的宏处理器可用。所有的 Unix 系统都会提供 m4 宏处理器，因为它是 POSIX 标准的一部分。

最初的 M4 作为 Rational FORTRAN 系统的预处理器设计实现，受到 Stratchey 于1965年首次描述的通用宏生成器 General Purpose Macro (GPM) 的影响！GNU M4 是 GNU 项目对 M4 的实现，于 1990 年由 RenéSeindal 编写。

GNU m4 它扫描用户输入的文本并将其输出，期间如果遇到宏就将其展开后输出。宏有两种，一种是内建的，另一种是用户定义的，它们能接受任意数量的参数。除了做展开宏的工作之外，m4 内建的宏能够加载文件，执行 Shell 命令，做整数运算，操纵文本，形成递归等等。m4 可用作编译器的前端，或者单纯作为宏处理器来用。

来自 GNU m4 手册的警告：有些人对 m4 非常着迷，他们先是用 m4 解决一些简单的问题，然后解决了一个比一个更大的问题，直至掌握如何编写一个复杂的 m4 宏集。若痴迷于此，往往会对一些简单的问题写出复杂的 m4 脚本，然后耗费很多时间去调试，反而不如直接手动解决问题更有效。所以，对于程序猿中的强迫症患者，要对 m4 有所警惕，它可能会危及你的健康。

使用 m4 首先需要建立流的概念，m4 命令的输入输出是以流的形式处理的。这意味着 m4 在从输入流中读取文本的过程中至少需要检测所读取的某段文本是不是宏，如果是宏就展开它，如果是一般文本就保持原样。

注解使用 # 号，注解符号直到行尾的内容都是 commets，但是代码最后一行不能是注解。注意，m4 的注释文本一样会被发送到输出流，它们只是没有宏展开功能。除非使用 dnl 指令将此指令位置后到换行符的内容统统干掉。

可以用 changecom 宏修改 m4 默认的注释符，或定义块注释符，例如：

    changecom(`@@')
    changecom(/*,*/)

如果不向 changecom 提供任何参数，其他 m4 实现会恢复默认的注释符，但是 GNU m4 不会恢复默认的注释符，而是关闭 m4 的注释功能。

## 🍀 Diversions
1. https://www.gnu.org/software/m4/manual/m4.html#Input-Control
2. https://www.gnu.org/software/m4/manual/m4.html#File-Inclusion
3. https://www.gnu.org/software/m4/manual/m4.html#Diversions

8 Input control
This chapter describes various builtin macros for controlling the input to m4.

    Builtin: dnl “Discard to Next Line”
    Builtin: changequote ([start = ‘`’], [end = ‘'’])
    Builtin: changecom ([start], [end = ‘NL’])
    Optional builtin: changeword (regex)
    Builtin: m4wrap (string, …)

    Builtin: include (file)
    Builtin: sinclude (file)

1. • Dnl       Deleting whitespace in input
2. • Changequote       Changing the quote characters
3. • Changecom     Changing the comment delimiters
4. • Changeword        Changing the lexical structure of words
5. • M4wrap        Saving text until end of input

缓冲区的使用方式 Diverting and undiverting output：

10.1 `divert ([number = ‘0’])` 将输出转移到指定缓冲区；
10.2 `undivert ([diversions…])` 所有（黑暗缓存除外）或指定缓存区的内容重新迁移到当前的缓冲区；
10.3 `divnum` 获取当前缓冲区序号。默认使用 0 号缓存区；
10.4 Discarding diverted text 舍弃缓冲内容，黑暗缓冲区；

以下是一个 m4 演示程序，可以执行 m4 命令，这时没有任何内容输出，因为 m4 在等待输入流的数据。直接运行 m4 对应的输入输出流就是 C 语言程序概念中的 stdin 和 stdout，用户可以直接编写以下代码，然后执行到 say_hello 时，m4 就会展开这个宏并打印出 Hello World！当然，可以将代码保存到 .m4 文件，通常使用这个扩展名，然后执行 m4 some.m4 来执行脚本文件。

```sh
divert(0)
define(say_hello, Hello World!)
say_hello
```

作为一种编程工具，m4 当然就是一个图灵机，它至少需要有一个『状态寄存器』，否则它无法判断当前从输入流中读取的文本是宏还是非宏。为了提高文本处理效率，还应该有一个缓存空间，使得 m4 在这一空间中高效工作。

官方概念是临时通道（Diversion），divert(0) 即表达使用首个临时缓存区，这也是默认缓存区。可以使用 divert(1) 这样的指令随机切换工作缓存区。m4 缓存的容量为 512KB。当它满了的时候，会自动将其中的内容保存到临时文件中备用。所以，只要你的磁盘或其它外围设备的容量足够，就不要担心 m4 无法处理大文件。

类似 CPU 的多级缓存机制，m4 的缓存空间也是划分了级别的。POSIX 标准的 m4 将缓存空间划分为 10 个级别，编号依次为 0, 1, 2, ..., 9。GNU m4 对缓存空间的级别数量不作限制。

m4 会根据缓存级别的编号的增序进行汇总。例如，它总是先将 1 号缓存的内容汇总到 0 号缓存中，然后将 2 号缓存的内容汇总到 0 号缓存中，以此类推，最后将 0 号缓存中的内容依序发送到输出流中。有了这种分级的缓存汇总机制，就可以控制文本的支流，决定哪条支流先汇入 0 号缓存。

```sh
# output: hello world
divert(eval(1<<28))world
divert(2)hello
```

注：`eval(1<<28)` 是一个求值表达式，1 左移 28 bit，即 2^28，是一个非常大的值，保证 world 这个词最后合并到输出流。Linux Shell 环境下还可以使用 divert(`1+1') 这样的表达式写法，注意反引号开头，单引号结尾。

可以使用格式化输出宏来复制输入流数据到输出流：

    format(`Result is %d', eval(`2**15'))

m4 有黑暗缓存概念，Discarding diverted text，即不会输出缓存区编号为负数的缓存区。上面例子中宏指令语句『展开』为一个长度为 0 的字符串，也就是空文本，但是每条指令后面，比如 divert(0) 之后存在一个换行符，m4 会将这个换行符发送到输出流。所以在运行脚本时，会出现多个换行，通过将指令语句转移到黑暗缓存，就可以避免输出这些空行。

消除指令后面的换行符有两种方法：

1. 指令后面不换行，例如：`divert(0)Hello`。
2. 使用 m4 内建的 dnl 宏将它被调用的位置到后面换行符之间的文本一并删除。

```sh
divert(-9)
define(say_hello_world, Hello World!)
divert(0)No new line -> dnl delete to the new line
say_hello_world
```

要禁止所有内容输出，最简单的方法就是使用黑暗缓存，并且使用 undivert 指令将所有缓存区内容放到黑暗是缓存中：

```sh
divert(`1')
Diversion one: divnum
divert(`2')
Diversion two: divnum
divert(`-1')
undivert
```

以下定义了一个 cleardivert 宏，可以清除指定的缓存区内容，使用到 pushdef 和 popdef，它们用于直接操作宏定义堆栈，在此临时重定义宏：

    5.6 Temporarily redefining macros：
    Builtin: pushdef (name, [expansion])
    Builtin: popdef (name…)

```sh
divert(`1')
Diversion one: divnum
divert(`2')
Diversion two: divnum
define(`cleardivert',
`pushdef(`_n', divnum)divert(`-1')undivert($@)divert(_n)popdef(`_n')')
cleardivert(`1')
```

使用 m4wrap 指令可以将内容保存起来，直到最后才输出：

```sh
define(`cleanup', `This is the `cleanup' action. ')
m4wrap(`cleanup')
```

注意，m4wrap 参数中使用了转义字符串，也就是到程序结束时输出 "cleanup" 这个字符串，因为它是一个宏定义，所以要展开其内容再输出。如果没有使用转义，则会直接将 cleanup 这个宏展开的内容暂存起来，最后再输出，而这时因为内容中又包含 "cleanup"，所以又会再对它展开得到二次展开内容。


由于 m4 没有提供文件操作接口，所以文件的读写只能通过操作系统环境中的 stdin、stdout 和 stderr 等标准 I/O 文件实现，配合文件重定向管道进行操作。

m4 状态机的运行状态可以通过文件进行保留、加载，这个功能称为 frozen state，可以使用以前保留的状态继承执行脚本，使用 -F file 和 -R file 分别指定要写入、读取的状态文件。


## 🍀 CPL -  Standard I/O

此文档参考 The C Programming Language -  Standard I/O 内容翻译而成。

以下 stdio.c 程序演示控制台的基本输入输出：

```c
#include <stdio.h>
#include <stdlib.h>

int main() 
{ 
    int c;
    do {
        c = getchar();
        if (c=='x') break;
        if (c!='\n') putchar(c);
    } while (c != EOF);
    printf("End of File: %d", c);
    return EXIT_SUCCESS;
}
```

这是两个最基本的输入输出函数，gethar 函数读取一个字符，然后 putchar 输出一个字符。

这个示范程序使用了 while 循环的另一种形式，do-while，将条件判断移到循环体后面。

循环中使用 EOF 作为结束，在 Windows 系统中，输入 ENTER 键新起一行后，再输入 Ctrl+Z，再输入 ENTER 键即可以产生 EOF。 

Linux 直接按 CTRL+D 快捷键结束输入，即产生 EOF。

基本输入输出一般涉及键盘和显示器，也就是程序运行中的控制台。对控制台操作时，键盘和鼠标等输入设备产生的信号或数据被抽象为输入文件 `stdin` 文件。而输出的内容会写入显示器的缓存中并显示出来，视觉上就是控制台窗口看到的内容，同样，输出也被抽象为 `stdout` 文件。

对于键盘输入设备抽象而来的 stdin 文件，怎么表示它的结束是个技巧，不像硬盘存储的文件，有明确的文件大小和结束位置。标准控制台的输入结束一般意味着程序的结束，不能再接收用户的输入。比如，通过 Ctrl+D 和 Ctrl+C 结束程序，即会得到文件结束符 EOF，它在函数库里一般定义为 -1，但这个值的意义不在于取什么值，因为它不是用户输入的值，而是任意指定的。

事实上，输入输入文件是可以被重定向到其它文件的，标准输入输出文件，stdin stdout stderr 它们都可以重定向到磁盘中文件，即输入文件到程序中，或者输出内容、错误信息到磁盘文件中。如运行程序时，将 stdio 程序的 stdout 重定向到 out.txt 文件，而不是控制台默认的显示器输出：

```sh
stdio.exe > out.txt
a
b
c
x
```

只要程序正常结束，输出的内容便会按照约定写入 out.txt 文件中，原来的文件内容将被覆盖，可以使用 >> 来将新内容附加到文件原有内容后。

此外，还有 stderr 标准错误文件，它输出的是错误信息，和 stdout 相对应。

额外补充，Unix/Linux 标准 I/O 流文件与对应的 ID：

    | Handle |  Name  |   Description   |
    |--------|--------|-----------------|
    |      0 | stdin  | Standard input  |
    |      1 | stdout | Standard output |
    |      2 | stderr | Standard error  |

在命令行中，可以使用这些文件 ID 来做重定向，例如 ls 命令的标准输出到文件：

    # redirect stdout to list.txt
    ls > list.txt
    ls 1> list.txt

    # append stdout to list.txt
    ls -l >> list.txt

例如，将 grep 命令的 stderr 重定向到文件：

    grep -R 'MASTER' $HOME 2> err.txt

同时将 stdout 和 stderr 重定向到文件，注意，后面的`2>&1`表示将 stderr 重定向到 stdout：

    $ ls > list.txt 2>&1

    ## bash only ##
    $ ls &> list.txt

Windows 系统还支持以下这样的语法：

    dir 2>&1 > out.txt
    dir 2> nul
    dir > output.msg 2> output.err
    dir 1> output.msg 2>&1

重定向 stdin 使用左尖括号，在 Windows 系统只支持第一种用法：

    cmd < foo         将 cmd 的标准输入重定向到文件 foo 即读入文件
    cmd << delimiter  将 cmd 的标准输入重定向到下面的命令行，直到遇到 delimiter（here document）
    cmd <<- delimiter 将 cmd 的标准输入重定向到下面的命令行，直到遇到 delimiter（here document，命令行中开头的制表符会被忽略）


## 🍀 Define Macros

5 How to define new macros
Macros can be defined, redefined and deleted in several different ways. Also, it is possible to redefine a macro without losing a previous value, and bring back the original value at a later time.

    Builtin: define (name, [expansion])
    Builtin: undefine (name…)
    Builtin: defn (name…)
    Builtin: pushdef (name, [expansion])
    Builtin: popdef (name…)
    Builtin: indir (name, [args…])
    Builtin: builtin (name, [args…])

    Composite: array (index)
    Composite: array_set (index, [value])
    Composite: exch (arg1, arg2)
    Composite: nargs (…)

1. • Define        Defining a new macro
2. • Arguments     Arguments to macros
3. • Pseudo Arguments      Special arguments to macros
4. • Undefine      Deleting a macro
5. • Defn         Renaming macros
6. • Pushdef       Temporarily redefining macros
7. • Indir         Indirect call of macros
8. • Builtin       Indirect call of builtins

宏定义基本语法 `define(Name, Body)`，通过使用反引号和单引号结尾组合，宏名大小写敏感，不能使用空格，只能包含 letters, digits, _ (underscore)，出现非法字符将忽略宏定义。

此命名规则可以通过命令行 -W regexp 或者 --word-regexp=regexp 等参数，又或者使用 changeword 指令改变默认的标识符号单词匹配的正则规则：

    [_a-zA-Z][_a-zA-Z0-9]*

    Optional builtin: changeword (regex)

可以在 Body 中编写多行内容。如果内容中没有逗号，这是宏参数分隔符，不用引号也不会出问题，而反引号可使逗号功能逃逸。

使用 dumpdef 可以获取宏定义信息：

    dumpdef(`macro')
    Builtin: dumpdef ([names…]))

就 define 这个宏本身而言，和调用其它宏一样通过圆括号调用，并传递参数。如果宏体中使用未传入的参数，那么它仅仅会得到空字符串。可以在运行 m4 命令时，指定 --quiet 或者  --silent, -Q 等等参数来避免在宏参数数量不一致时的警告信息。

宏体中可以通过 $1, $2, ..., $n 等等引用对应的宏参数，$# 指示宏接收到的参数个数，注意 # 是作为默认注解符号，应用使用引号包括这个预定义宏。$* 和 $@ 都表示所有参数，差别在于后者使用引号包括参数避免进行宏展开。GNU m4 不限定参数的个数，其他 m4 实现最多支持 9 个参数，所以其它 m4 实现中 n=9。如果知道 Bash 脚本编程，那么就应该知道 $0 对应脚本本身的路径，而在 m4 脚本中 $0 是宏本身，使用它意味着递归调用。

```sh
define(args, `
    `$'# = arugments count: $#
    `$'@ = all arugments quoted: $@
    `$'* = all arugments unquoted: $*
    `$'00 = macro itself: `$0'
    `$'01 = $01
    `$'02 = $02
    `$'03 = $03
    ......
    `$'11 = $11
    ')
args(1,2,3,4,5,6,7,8,9,0,a,b,c)
```

虽然，从输出内容来年，$* 和 $@ 的内容看起来是一样的，但是 $@ 输出的内容不会再进行宏扩展。另外，这些内置的参数宏不会因为使用了引号包括而作为字符串，它们依然会被替换成相应的参数值，除非使用引号将这些符号分割开来：

    $# = arugments count: 13
    $@ = all arugments quoted: 1,2,3,4,5,6,7,8,9,0,a,b,c
    $* = all arugments unquoted: 1,2,3,4,5,6,7,8,9,0,a,b,c
    $00 = macro itself: args
    $01 = 1
    $02 = 2
    $03 = 3
    ......
    $11 = a

以下演示宏参数的各种组织形成，特别是内联的注解并不会打断一个参数，包括注解内容依然可以在宏体中获取。另外，成对的双此号、单引号并不像反引号与单引号那么可以用来转义字符串，它们和一般字符串没有区别。只有反引号与单引号组合才具有转义功能。

```sh
define(`nargs', `$#')dnl
nargs  # nargs ⇒0
nargs()  # nargs() ⇒1
nargs(,,,) # nargs(,,,) ⇒4
nargs(`a 1', `b 2', `c 3')   # nargs(`a 1', `b 2', `c 3') ⇒3
# ⇒ 1 and 1 and also 1
nargs(`quoted comma, like this')
nargs(arg1#inside comments, commas do not separate arguments
still arg1) 
nargs((unquoted parentheses, like this, group arguments))
```

以下宏定义像 C 语言的宏编程一样生成结构体定义：

```sh
divert(-1)
define(DEF_PAIR_OF,
`typedef struct pair_of_$1 {
        $1 first;
        $1 second;
} pair_of_$1')
divert(0)dnl

DEF_PAIR_OF(int);
DEF_PAIR_OF(double);
```

blind macro 是指需要显式使用圆括号才会展开的宏，即没有参数时返回宏名本身：

    Composite: define_blind (name, [value])

Defines name as a blind macro, such that name will expand to value only when given explicit arguments. value should not be the result of defn. This macro is only recognized with parameters, and results in an empty string.

```sh
define(`define_blind', `ifelse(`$#', `0', ``$0'',
    `_$0(`$1', `$2', `$'`#', `$'`0')')')
define(`_define_blind', `define(`$1', 
    `ifelse(`$3', `0', ``$4'', `$2')')')

define_blind # ⇒define_blind
define_blind(`foo', `arguments were $*')
define_blind(`bar', defn(`foo'))

foo      # ⇒foo
foo(`bar') # ⇒arguments were bar
bar(`foo') # ⇒arguments were foo
```

柯理化（Currying）是函数式编程的一个概念，是一种处理多元函数的方法：将传递给函数参数分解成后来调用它，并且返回一个函数去处理剩下的参数。

Another interesting composition tactic is argument currying, or factoring a macro that takes multiple arguments for use in a context that provides exactly one argument.

    Composite: curry (macro, …)

Expand to a macro call that takes exactly one argument, then appends that argument to the original arguments and invokes macro with the resulting list of arguments.

注意 curry 实现代码是如何通过使用一个宏名（`_$0` 扩展后指代的 `_curry`）完成“$1”参数的收集，而不使用左括号。`_curry` 是一个辅助宏，它接受一个参数，然后将其添加到列表中，这个列表是 curry 宏体缺失的那一部分。注意 $1 使用了双层反引号包括，这使得它会原样扩展到 curry 宏体中。最后 `_curry` 提供右括号，完成了 curry 宏体的定义。shift 调用中使用逗号允许 currying 也适用于接受一个参数的宏，尽管直接调用该宏通常比通过 curry 更有意义。

```sh
divert(`-1')
# curry(macro, args)
# Expand to a macro call that takes one argument, then invoke
# macro(args, extra).
define(`curry', `$1(shift($@, ) _$0')
define(`_curry', `$1)')
divert`'dnl

# debugmode(`+letx')
# debugmode(`+letaq')
define(`add', `eval($1+$2+$3)')
curry(`curry', `add', 1)(2)(3)
```

打开 debugmode 并设置打印扩展过程调用细节就可以看到细节，其中 -1- 这样的数值表达展开式递归处理的深度。第 12 行脚本调用 curry 宏时得到的展开式还不是完全闭合的 curry 宏调用，展开式的最后位置是一个 `_curry`，当这个展开式与后续的参数 (2)(3)(4)(5) 组合到一起时，就会得到一个 `_curry(2)`。到这里就是第二层递归展开处理，这又是一个宏调用，这就是为何 curry 宏定义中可以使用 `_$0` 来获取参数列表中下一个参数的原理。只要有 curry 调用，就一定会有一个辅助宏 `_$0` 去获取后续的参数。

```sh
m4trace:11: -1- define(`add', ``add'(eval($1+$2))')
m4trace:12: -1- curry(`curry', `add', `1') -> `curry(shift(`curry',`add',`1', ) _curry'
m4trace:12: -2- shift(`curry', `add', `1', `') -> ``add',`1',`''
m4trace:12: -2- _curry(`2') -> `2)'
m4trace:12: -1- curry(`add', `1', ` 2') -> `add(shift(`add',`1',` 2', ) _curry'
m4trace:12: -2- shift(`add', `1', ` 2', `') -> ``1',` 2',`''
m4trace:12: -2- _curry(`3') -> `3)'
m4trace:12: -1- add(`1', ` 2', ` 3') -> ``add'(eval(1+ 2))'
add(m4trace:12: -1- eval(`1+ 2') -> `3'
```

使用命令行参数也可以定义宏，并且同样可以在宏体中调用其它宏并传递参数：

    m4 -Dcc="list(1,2,3)" .\m4tutor.m4

注意：m4 的宏调用无限递归处理，宏名可以其它宏展开的结果，宏体中也可以调用宏，所以小心形成循环调用的无限展开。宏必需先定义才能使用。比如，以下就是无限循环调用 apple 宏，打印无限的 sweet，除非永远不去调用 apple 这个宏。因此，类型允许宏的重定义这样的表达，但是，事实上它不是重写宏的定义，而是递归处理。

```sh
define(apple, sweet apple)dnl
apple
```
以下演示宏的递归定义以及调用：

```sh
define(Apple, bad_apple)dnl
Apple                   # Apple -> bad_apple
define(Apple, sweet_apple)dnl # define(bad_apple, sweet_apple)
Apple                   # Apple -> bad_apple -> sweet_apple
bad_apple                # bad_apple -> sweet_apple
```

可以使用 indir 间接调用宏，也可以使用 builtin 调用内置宏，调用 undefine 来解除。此外，使用 defn 可以重命名现有的宏，这宏本身的功能是获取指定宏定义，配合 define 使用就可以给已有的宏定义起一个新的名称：

```sh
define(`zap', defn(`undefine'))
dumpdef(`undefine')  # ⇒ undefine:  <undefine> 
zap(`undefine')
dumpdef(`undefine')  # ⇒ undefined macro `undefine'
dumpdef(`zap')      # ⇒ zap:    <undefine>  
undefine(`zap')      # ⇒ undefine(zap)
dumpdef(`zap')      # ⇒ zap:    <undefine>  
defn(`zap')         # ⇒ 
```

Dumpdef 并不能获取内部宏定义，只能查看用户定义宏。Defn 也只能返回用户定义的宏体，不能打印内部宏定义。


## 🍀 Strings vs. Numbers
1. https://www.gnu.org/software/m4/manual/m4.html#Arithmetic
2. https://www.gnu.org/software/m4/manual/m4.html#Text-handling

11 Macros for text handling
There are a number of builtins in m4 for manipulating text in various ways, extracting substrings, searching, substituting, and so on.

    Builtin: len (string)
    Builtin: index (string, substring)
    Builtin: regexp (string, regexp, [replacement])
    Builtin: substr (string, from, [length])
    Builtin: translit (string, chars, [replacement])
    Builtin: patsubst (string, regexp, [replacement])

    Composite: upcase (text)
    Composite: downcase (text)
    Composite: capitalize (text)
    Builtin: format (format-string, …)

1. • Len          Calculating length of strings
2. • Index macro   Searching for substrings
3. • Regexp        Searching for regular expressions
4. • Substr        Extracting substrings
5. • Translit      Translating characters
6. • Patsubst      Substituting text by regular expression
7. • Format        Formatting strings (printf-like)

m4 处理双引号的基本规则是：在读取带引号的文本片段 S 时，无论 S 中含有多少重引号，m4 只消除其最外层引号，然后将剩余的文本直接发送到输出流，使用 m4wrap 保存的内容同等对待。使用反引号和单引号来包括多行内容，或者使宏的展开功能或者逗号作为宏参数列表的功能逃逸。单引号、双引号包括的字符串会进行宏展开操作。

反引号的外层再封装一层引号从而将前者变为普通字符，但是，有些时候你只想以普通文本的形式显示左引号，不希望出现一个与之配对的右引号。对于这个问题，可以使用 changequote 宏修改 m4 默认的引号定界符，例如：

    changequote(<!,!>)
    changequote(`[', `]')

如果不向 changequote 提供任何参数，就恢复了默认的引号定界符。

以下代码演示反引号包括的字符串是如果一层层解包的：

```sh
define(`box', bad apple)
define(`l1unwrap', `$1')
define(`l2unwrap', ``$1'')
l1unwrap(`box')    # A ⇒ bad apple
l2unwrap(`box')    # B ⇒ box
l1unwrap(``box'')  # C ⇒ box
l2unwrap(``box'')  # D ⇒ `box'
```

反引号包括的字符串，在每一轮的解释处理中都会剥去一层。以 A 情况的执行为例，解释器首先将 "box" 字符传入 l1unwrap 进行展开，宏体中同样只有一层反引号包括。所以在这一轮处理中，无论在调用处，还是在宏体，单层的反引号将被剥离，也就是得到的是 box 对应一个宏定义，所以要继承展开。

然后，按 C 情况的执行进行分析，由于外层使用了两层反号包括，所以处理时只剥离最外层，得到的结果是 `box'，即转义状态的字符，不会以进行宏展开。但是输出时还会剥离一层，所以输出的内容看不到有引号。

至于，情况 D 所示，由于调用、和宏体两处都使用了双层反引号，处理时各剥离一层，还留下两层。字符串写入输出流时再剥离一层，最后剩下一层，所以结果输出内容保留有一层反引号包括。

字符串处理宏功能演示：

```sh
translit(`GNUs not Unix', `A-Z')
⇒s not nix
translit(`GNUs not Unix', `a-z', `A-Z')
⇒GNUS NOT UNIX
translit(`GNUs not Unix', `A-Z', `z-a')
⇒tmfs not fnix
translit(`+,-12345', `+--1-5', `<;>a-c-a')
⇒<;>abcba
translit(`abcdef', `aabdef', `bcged')
⇒bgced
```

使用圆括号，只可以将多个字符串当作列表处理：

```sh
define(`reverse', `ifelse(eval($# > 1), 1, `reverse(shift($@)), `$1'', ``$1'')')

shift(,,,,)         # ⇒ ,,,
shift(1, 2, 3, 4)   # ⇒ 2,3,4
shift((1, 2, 3, 4))  # ⇒
reverse(1, 2, 3, 4)  # ⇒ reverse(1, 2, 3, 4)
```

m4 只认识文本，数字也是文本。不过 m4 提供了内建宏 eval 等宏对整型数的运算表达式进行『求值』——求值结果在 m4 看来依然是文本。

    Builtin: incr (number)
    Builtin: decr (number)
    Builtin: eval (expression, [radix = ‘10’], [width])

m4 只有宏没有变量的概念，但可以通过宏来模拟变量赋值，注意不能对没有定义的变量（宏）进数学求值：

```sh
define(`var', 0)
define(`var', eval(var+2))
`var' = var
```

Expands to the value of expression. The expansion is empty if a problem is encountered while parsing the arguments. If specified, radix and width control the format of the output.

Calculations are done with 32-bit signed numbers. Overflow silently results in wraparound. A warning is issued if division by zero is attempted, or if expression could not be parsed.

Expressions can contain the following operators, listed in order of decreasing precedence.

    ‘()’          Parentheses
    ‘+ - ~ !’   Unary plus and minus, and bitwise and logical negation
    ‘**’         Exponentiation
    ‘* / %’     Multiplication, division, and modulo
    ‘+ -’       Addition and subtraction
    ‘<< >>’    Shift left or right
    ‘> >= < <=’Relational operators
    ‘== !=’      Equality operators
    ‘&’          Bitwise and
    ‘^’          Bitwise exclusive-or
    ‘|’          Bitwise or
    ‘&&’         Logical and
    ‘||’         Logical or

The macro eval is recognized only with parameters.


## 🍀 Lexical & Embed Macros

虽然，宏可以无限递归展开，但是宏不能进行“穿透式调用”，如下：

```sh
define(`definenum', `define(`num', `99')extra') 
definenum
num
```

如果没调用 definenum 宏，那么就不会展开其宏体，也就不会产生 num 宏定义，所以不能直接通过 num 调用这个嵌在宏体中定义的宏。

m4 的词法结构决定了解释器会如何处理输入流。

3 Lexical and syntactic conventions

1. • Names     Macro names
2. • Quoted strings        Quoting input to m4
3. • Comments      Comments in m4 input
4. • Other tokens      Other kinds of input tokens
5. • Input processing      How m4 copies input to output

在进行脚本语法解析的过程中，m4 将输入流看作记号（Token）为单元的数据进行处理。Token 就像自然语言中的单词，符号也属于 Token 的一种，并且用符号还用来做 Token 之间的分隔标志。可以猜测，m4 解释器实现代码中可能会存在类型 COMMA、PERIOD、COLON、SEMICOLON 或者 DOLLAR (‘$’) 这样的 Token 常量或变量名称，用于指代解释程序在处理输入流时的获得的对应 Token。

使用 changeword 指令可以改变默认的标识符号单词匹配的正则规则：

    [_a-zA-Z][_a-zA-Z0-9]*

    Optional builtin: changeword (regex)

就以前面的示范代码而言，m4 解释器先读取到一个 define 单词，而后遇到 ( 符号，这意味着可能是一个宏定义，需要期待后续是否存在逗号（作为参数列表的标志）、右侧圆括号（作为宏定义的结束边界），如果后续读取的 Token 都满足条件，那么就得到一个宏定义。

从左侧圆括号继续读取数据流，遇到一个反引号，解释器则开始字符串，直接到遇到单引号结束，获取到一个完整的 Token：definenum，并且它将作为潜在的宏定义名称，除非后续解释到的数据与前面的得到的状态有冲突，否则这个字符串就是潜在的宏名称。

然后，继续读取数据，得到一个逗号，这就是宏参数列表分隔符号，是合理合规合法的 Token，非常符合预期。

然后，叕读取到一个字符串，到目前为之，这个字符串还未曾展开，它里的内容也没作解释，直到最后得到一个 Token 即右侧圆括号作为宏定义的结束标志。

解释进入第二行内容的处理，读取到一个单词，通过以上解释结果，这个单词匹配到一个宏定义，那么就展开它。亦即对第一行定义的宏体进行展开操作，又获取到一个新宏定义。并且宏定义后面还跟着一个字符串 extra，就直接将它输出。

进入最后一行内容的处理，同样获取到一个单词，并且匹配到以上处理结果中的一个宏定义，所以也要进行展开。最后输出宏体，即数值 99。


## 🍀 if else for loops recursion
https://www.gnu.org/software/m4/manual/m4.html#Conditionals

6 Conditionals, loops, and recursion
Macros, expanding to plain text, perhaps with arguments, are not quite enough. We would like to have macros expand to different things, based on decisions taken at run-time. For that, we need some kind of conditionals. Also, we would like to have some kind of loop construct, so we could do something a number of times, or while some condition is true.

    Builtin: ifdef (name, string-1, [string-2])

    Builtin: ifelse (comment)
    Builtin: ifelse (string-1, string-2, equal, [not-equal])
    Builtin: ifelse (string-1, string-2, equal-1, string-3, string-4, equal-2, …, [not-equal])

    Builtin: shift (arg1, …)

    Composite: reverse (…)
    Composite: cond (test-1, string-1, equal-1, [test-2], [string-2], [equal-2], …, [not-equal])
    Composite: join ([separator], [args…])
    Composite: joinall ([separator], [args…])
    Composite: quote (…)
    Composite: dquote (…)
    Composite: dquote_elt (…)
    Composite: argn (n, …)
    Composite: forloop (iterator, start, end, text)
    Composite: foreach (iterator, paren-list, text)
    Composite: foreachq (iterator, quote-list, text)
    Composite: stack_foreach (macro, action)
    Composite: stack_foreach_lifo (macro, action)

    Composite: define_blind (name, [value])
    Composite: curry (macro, …)
    Composite: copy (source, dest)
    Composite: rename (source, dest)

1. • Ifdef     Testing if a macro is defined
2. • Ifelse     If-else construct, or multibranch
3. • Shift     Recursion in m4
4. • Forloop       Iteration by counting
5. • Foreach       Iteration by list contents
6. • Stacks        Working with definition stacks
7. • Composition       Building macros with macros

文档中标记为 Composite 即为宏组合实现的功能，如果在 Windows 平台下通过 MinGW 使用 GNU m4，则可能需要下载源代码，因为这些功能需要引用其 examples 目录下的脚本：

```sh
# m4 -I C:/mingw/src/m4-1.4.19/examples tutorial.m4
include(`forloop.m4')
forloop(`i', 1, 10, "LOOP i")
```

m4 提供了两种条件宏，ifdef 宏用于判断宏是否定义，ifelse 宏是判断表达式的真假。

    ifdef(`a', "TRUE")
    ifdef(`a', "TRUE", "FALSE")

条件宏根据输入值决定展开 "TRUE" 或者是 "FALSE" 部分，如果 a 是未定义的宏，这条语句的展开结果是 "FALSE"。

被测试的宏，它的定义可以是空字串，例如：

    define(`def')
    `def' is ifdef(`def', , not) defined.  # -> def is defined.
    
    define(`def', DEF)
    `def' is ifdef(`def', , not) defined.  # -> def is defined.

    "def" is ifdef(def, , not) defined.    # -> DEF is not defined.

ifelse(a,b,c,d) 会比较字符串 a 与 b 是否相同，如果它们相同，这条语句的展开结果是字符串 c，否则展开为字符串 d。

ifelse 可以支持多个分支，例如：

    ifelse(`a', `b', "EQUAL", "NOT-EQUAL")


以下是等价表达：

    ifelse(a,b,c,d,e,f,g)
    ifelse(a,b,c,ifelse(d,e,f,g))

递归版本的 Fibonacci 宏的实现与应用，它可以产生第 47 个 Fibonacci 数：

    divert(-1)
    define(`FIB',
        `ifelse(`$1', `0',
             0,
            `ifelse(`$1', `1',
                 1,
                `eval(FIB(eval($1 - 1)) + FIB(eval($1-2)))')')')
    divert(0)dnl
    FIB(46)

因为 m4 目前只支持 32 位的有符号整数，只能表示的最大正整数是 2^31 - 1。

以上递归版本 Fibonacci 数计算过程中包含着大量的重复计算，对每一个值都进行 ifelse 的判断，效率很低。如果以尾递归方式，就可以节省无效运算，只使用一条 ifelse 调用并且将递归调用放到宏体最未尾进行，实现快速的迭代。将值从小到大逐步累加，当到达指定位置时就结束并输出结果：

    divert(-1)
    define(`FIB_ITER',
    `ifelse(`$3', 0,
             $2,
         `FIB_ITER(eval($1 + $2), $1, eval($3 - 1))')')
    define(`FIB', `FIB_ITER(1, 0, $1)')
    divert(0)dnl
    FIB(46)

注意，没有负值判断，如果输入负值就不会得到结果。


## 🍀 Shell commands
https://www.gnu.org/software/m4/manual/m4.html#Shell-commands

13 Macros for running shell commands
There are a few builtin macros in m4 that allow you to run shell commands from within m4.

Note that the definition of a valid shell command is system dependent. On UNIX systems, this is the typical /bin/sh. But on other systems, such as native Windows, the shell has a different syntax of commands that it understands. Some examples in this chapter assume /bin/sh, and also demonstrate how to quit early with a known exit value if this is not the case.

    Optional builtin: __gnu__
    Optional builtin: __os2__
    Optional builtin: os2
    Optional builtin: __unix__
    Optional builtin: unix
    Optional builtin: __windows__
    Optional builtin: windows

    Builtin: syscmd (shell-command)
    Builtin: esyscmd (shell-command)
    Builtin: sysval

    Builtin: mkstemp (template)
    Builtin: maketemp (template)

1. • Platform macros       Determining the platform
2. • Syscmd        Executing simple commands
3. • Esyscmd       Reading the output of commands
4. • Sysval        Exit status
5. • Mkstemp       Making temporary files

系统平台测试：

```sh
define(`provided', `unknown')
ifdef(`__unix__',    `define(`provided', (`Unix', provided) )')
ifdef(`__windows__', `define(`provided', (`Windows', provided) )')
ifdef(`__os2__',    `define(`provided', (`OS/2', provided) )')
System platform is provided
```

When GNU extensions are in effect (that is, when you did not use the -G option, see Invoking m4), GNU m4 will define the macro __gnu__ to expand to the empty string.

```sh
$ m4
__gnu__
⇒
__gnu__(`ignored')
⇒
Extensions are ifdef(`__gnu__', `active', `inactive')
⇒Extensions are active

$ m4 -G
__gnu__
⇒__gnu__
__gnu__(`ignored')
⇒__gnu__(ignored)
Extensions are ifdef(`__gnu__', `active', `inactive')
⇒Extensions are inactive
```

外部程序退出状态码判断：

```sh
sysval        # ⇒ default sysval should be 0
syscmd(`false')dnl
sysval        # ⇒ syscmd(`false') should be 1
syscmd(`true')dnl
sysval        # ⇒ syscmd(`true') should be 0
syscmd(`exit 2')dnl

esyscmd(`true')dnl
sysval        # ⇒ esyscmd(`true') should be 0
esyscmd(`false')dnl
sysval        # ⇒ esyscmd(`false') should be 1
esyscmd(`echo dnl && exit 127')dnl
sysval        # ⇒ esyscmd(`exit 127') should be 127
ifelse(sysval, `0', `zero', `non-zero') dnl # ⇒non-zero
```

只要 true 或者 false 没有关联的宏定义，只可以不使用引号，效果一样。退出状态码常用值 127，因为它在整个字节除了最高 bit 全都置位。

syscmd 与 esyscmd 的差别在于，后者会对命令进行宏展开操作，前缀 e 即代表 expansion：

```sh
define(`foo', `FOO')dnl
syscmd(`echo foo')  # ⇒foo

define(`foo', `FOO')dnl
esyscmd(`echo foo')  # ⇒FOO
```

On UNIX platforms, where it is possible to detect when command execution is terminated by a signal, rather than a normal exit, the result is the signal number shifted left by eight bits.

```sh
dnl This test assumes kill is a shell builtin, and that signals are recognizable.
ifdef(`__unix__', ,
      `errprint(` skipping: syscmd does not have unix semantics
')m4exit(`77')')dnl
changequote(`[', `]')dnl
syscmd([/bin/sh -c 'kill -9 $$'; st=$?; test $st = 137 || test $st = 265])dnl
ifelse(sysval, [0], , [errprint([ skipping: shell does not send signal 9
])m4exit([77])])dnl

syscmd([kill -9 $$])   # ⇒
sysval              # ⇒2304
```

Bash ($$) Expands to the process ID of the shell. In a subshell, it expands to the process ID of the invoking shell, not the subshell. ($?) Expands to the exit status of the most recently executed foreground pipeline.

By default, the shell-command will be used as the argument to the -c option of the /bin/sh shell (or the version of sh specified by ‘command -p getconf PATH’, if your system supports that). If you prefer a different shell, the configure script can be given the option --with-syscmd-shell=location to set the location of an alternative shell at GNU m4 installation; the alternative shell must still support -c.



## 🍀 Misscelleneous macros
https://www.gnu.org/software/m4/manual/m4.html#Debugging
https://www.gnu.org/software/m4/manual/m4.html#Debugging-options
https://www.gnu.org/software/m4/manual/m4.html#Miscellaneous
https://www.gnu.org/software/m4/manual/m4.html#Frozen-files
https://www.gnu.org/software/m4/manual/m4.html#File-Inclusion

7 How to debug macros and input
When writing macros for m4, they often do not work as intended on the first try (as is the case with most programming languages). Fortunately, there is support for macro debugging in m4.

    Builtin: dumpdef ([names…])
    Builtin: traceon ([names…])
    Builtin: traceoff ([names…])

    Builtin: debugmode ([flags])
    Builtin: debugfile ([file])

1. • Dumpdef       Displaying macro definitions
2. • Trace         Tracing macro calls
3. • Debug Levels      Controlling debugging output
4. • Debug Output      Saving debugging output

14 Miscellaneous builtin macros
This chapter describes various builtins, that do not really belong in any of the previous chapters.

    Builtin: errprint (message, …)
    Builtin: m4exit ([code = ‘0’])
    Composite: fatal_error (message)

    Builtin: __file__
    Builtin: __line__
    Builtin: __program__

1. • Errprint      Printing error messages
2. • Location      Printing current location
3. • M4exit        Exiting from m4


The -d option (or --debug) controls the amount of details presented in three categories of output.

    -d[flags]
    --debug[=flags]

Set the debug-level according to the flags flags. The debug-level controls the format and amount of information presented by the debugging functions. See Debug Levels, for more details on the format and meaning of flags. If omitted, flags defaults to ‘aeq’.

    --debugfile[=file]
    -o file
    --error-output=file

Redirect dumpdef output, debug messages, and trace output to the named file. Warnings, error messages, and errprint output are still printed to standard error. If these options are not used, or if file is unspecified (only possible for --debugfile), debug output goes to standard error; if file is the empty string, debug output is discarded. See Debug Output, for more details. The option --debugfile may be given more than once, and order is significant with respect to file names. The spellings -o and --error-output are misleading and inconsistent with other GNU tools; for now they are silently accepted as synonyms of --debugfile and only recognized once, but in a future version of M4, using them will cause a warning to be issued.

    -l num
    --arglength=num

Restrict the size of the output generated by macro tracing to num characters per trace line. If unspecified or zero, output is unlimited. See Debug Levels, for more details.

    -t name
    --trace=name

This enables tracing for the macro name, at any point where it is defined. name need not be defined when this option is given. This option may be given more than once, and order is significant with respect to file names. See Trace, for more details.


Trace output is requested by traceon (see Trace), and each line is prefixed by ‘m4trace:’ in relation to a macro invocation. Debug output tracks useful events not associated with a macro invocation, and each line is prefixed by ‘m4debug:’. Finally, dumpdef (see Dumpdef) output is affected, with no prefix added to the output lines.


The -d or --debug flags following the option can be one or more of the following:

a
In trace output, show the actual arguments that were collected before invoking the macro. This applies to all macro calls if the ‘t’ flag is used, otherwise only the macros covered by calls of traceon. Arguments are subject to length truncation specified by the command line option --arglength (or -l).

c
In trace output, show several trace lines for each macro call. A line is shown when the macro is seen, but before the arguments are collected; a second line when the arguments have been collected and a third line after the call has completed.

e
In trace output, show the expansion of each macro call, if it is not void. This applies to all macro calls if the ‘t’ flag is used, otherwise only the macros covered by calls of traceon. The expansion is subject to length truncation specified by the command line option --arglength (or -l).

f
In debug and trace output, include the name of the current input file in the output line.

i
In debug output, print a message each time the current input file is changed.

l
In debug and trace output, include the current input line number in the output line.

p
In debug output, print a message when a named file is found through the path search mechanism (see Search Path), giving the actual file name used.

q
In trace and dumpdef output, quote actual arguments and macro expansions in the display with the current quotes. This is useful in connection with the ‘a’ and ‘e’ flags above.

t
In trace output, trace all macro calls made in this invocation of m4, regardless of the settings of traceon.

x
In trace output, add a unique ‘macro call id’ to each line of the trace output. This is useful in connection with the ‘c’ flag above.

V
A shorthand for all of the above flags.

If no flags are specified with the -d option, the default is ‘aeq’. The examples throughout this manual assume the default flags.

There is a builtin macro debugmode, which allows on-the-fly control of the debugging output format:

    Builtin: debugmode ([flags])

The argument flags should be a subset of the letters listed above. As special cases, if the argument starts with a ‘+’, the flags are added to the current debug flags, and if it starts with a ‘-’, they are removed. If no argument is present, all debugging flags are cleared (as if no -d was given), and with an empty argument the flags are reset to the default of ‘aeq’.


## 🍀 Some examples
https://www.gnu.org/software/m4/manual/m4.html#Answers

17 Correct version of some examples
Some of the examples in this manuals are buggy or not very robust, for demonstration purposes. Improved versions of these composite macros are presented here.

1. • Improved exch      Solution for exch
2. • Improved forloop      Solution for forloop
3. • Improved foreach      Solution for foreach
4. • Improved copy         Solution for copy
5. • Improved m4wrap       Solution for m4wrap
6. • Improved cleardivert      Solution for cleardivert
7. • Improved capitalize       Solution for capitalize
8. • Improved fatal_error      Solution for fatal_error

###  Solution for exch

宏要求调用者对其参数进行引号包括引用。一个更好的定义，让调用者遵循每一级括号用一级反引号包括的经验法则，包括在 exch 的定义中添加引号，如下所示：

The exch macro (see Arguments) as presented requires clients to double quote their arguments. A nicer definition, which lets clients follow the rule of thumb of one level of quoting per level of parentheses, involves adding quotes in the definition of exch, as follows:

```sh
define(`exch', ``$2', `$1'')
define(mydef, `define($1, ``args:' $# => $@')')
mydef(exch(`expansion text, `$#'', `macro'))
macro
```

exch 宏功能就是用来交换 $1 $2 两个参数，所以当执行 exch(`expansion text xxx', `macro') 就会得到两参数位置交换后的结果，然后 define 就会定义一个叫做 macro 的宏，宏体包含 expansion text 这样的字符串。为了保证参数个体完整性不会因为宏展开而产生变化，就应该使用多层引号包括。


###  Solution for forloop

forloop.m4 有点低效率，使用了 6 macros， 不含字符内部。

```sh
divert(`-1')
# forloop(var, from, to, stmt) - simple version
define(`forloop', `pushdef(`$1', `$2')_forloop($@)popdef(`$1')')
define(`_forloop',
       `$4`'ifelse($1, `$3', `', `define(`$1', incr($1))$0($@)')')
divert`'dnl
```


forloop2.m4 提升版本，可以使用，但容易出问题。

```sh
divert(`-1')
# forloop(var, from, to, stmt) - improved version:
#   works even if VAR is not a strict macro name
#   performs sanity check that FROM is larger than TO
#   allows complex numerical expressions in TO and FROM
define(`forloop', `ifelse(eval(`($2) <= ($3)'), `1',
  `pushdef(`$1')_$0(`$1', eval(`$2'),
    eval(`$3'), `$4')popdef(`$1')')')
define(`_forloop',
  `define(`$1', `$2')$4`'ifelse(`$2', `$3', `',
    `$0(`$1', incr(`$2'), `$3', `$4')')')
divert`'dnl


forloop(`i', `2', `1', `no iteration occurs')
# ⇒
forloop(`', `1', `2', ` odd iterator name')
# ⇒ odd iterator name odd iterator name
forloop(`i', `5 + 5', `0xc', ` 0x`'eval(i, `16')')
# ⇒ 0xa 0xb 0xc
forloop(`i', `a', `b', `non-numeric bounds')
# error→m4:stdin:6: bad expression in eval (bad input): (a) <= (b)
```

forloop3.m4

```sh
divert(`-1')
# forloop_arg(from, to, macro) - invoke MACRO(value) for
#   each value between FROM and TO, without define overhead
define(`forloop_arg', `ifelse(eval(`($1) <= ($2)'), `1',
  `_forloop(`$1', eval(`$2'), `$3(', `)')')')
# forloop(var, from, to, stmt) - refactored to share code
define(`forloop', `ifelse(eval(`($2) <= ($3)'), `1',
  `pushdef(`$1')_forloop(eval(`$2'), eval(`$3'),
    `define(`$1',', `)$4')popdef(`$1')')')
define(`_forloop',
  `$3`$1'$4`'ifelse(`$1', `$2', `',
    `$0(incr(`$1'), `$2', `$3', `$4')')')
divert`'dnl
```

foreach.m4，注意 `_arg1$2` 这里，因为第二个参数是一个列表，如 (1,2,3)，组合在一起就是宏调用，用于获取第一个待枚举的值，并将它赋值到 $1 中指定的变量。另外一处，`shift$2` 也是类型的结构。`_foreach` 宏体中第一个 $3 就是在调用循环体。

```sh
divert(`-1')
# foreach(x, (item_1, item_2, ..., item_n), stmt)
#   parenthesized list, simple version
define(`foreach', `pushdef(`$1')_foreach($@)popdef(`$1')')
define(`_arg1', `$1')
define(`_foreach', `ifelse(`$2', `()', `',
  `define(`$1', _arg1$2)$3`'$0(`$1', (shift$2), `$3')')')
divert`'dnl
```

foreach2.m4 提升版本，参数加引号包括。

```sh
include(`quote.m4')dnl
divert(`-1')
# foreach(x, (item_1, item_2, ..., item_n), stmt)
#   parenthesized list, improved version
define(`foreach', `pushdef(`$1')_$0(`$1',
  (dquote(dquote_elt$2)), `$3')popdef(`$1')')
define(`_arg1', `$1')
define(`_foreach', `ifelse(`$2', `(`')', `',
  `define(`$1', _arg1$2)$3`'$0(`$1', (dquote(shift$2)), `$3')')')
divert`'dnl
```

quote.m4 字符串引号包装程序。

```sh
divert(`-1')
# quote(args) - convert args to single-quoted string
define(`quote', `ifelse(`$#', `0', `', ``$*'')')
# dquote(args) - convert args to quoted list of quoted strings
define(`dquote', ``$@'')
# dquote_elt(args) - convert args to list of double-quoted strings
define(`dquote_elt', `ifelse(`$#', `0', `', `$#', `1', ```$1''',
                             ```$1'',$0(shift($@))')')
divert`'dnl
```

foreachq.m4 反引号包括的参数列表简单版本。

```sh
include(`quote.m4')dnl
divert(`-1')
# foreachq(x, `item_1, item_2, ..., item_n', stmt)
#   quoted list, simple version
define(`foreachq', `pushdef(`$1')_foreachq($@)popdef(`$1')')
define(`_arg1', `$1')
define(`_foreachq', `ifelse(quote($2), `', `',
  `define(`$1', `_arg1($2)')$3`'$0(`$1', `shift($2)', `$3')')')
divert`'dnl
```

foreachq2.m4 反引号包括的参数列表提升版本，使用 `_$0` 替代 `_foreachq`，增加了一个 `_rest` 获取待枚举元素。

```sh
include(`quote.m4')dnl
divert(`-1')
# foreachq(x, `item_1, item_2, ..., item_n', stmt)
#   quoted list, improved version
define(`foreachq', `pushdef(`$1')_$0($@)popdef(`$1')')
define(`_arg1q', ``$1'')
define(`_rest', `ifelse(`$#', `1', `', `dquote(shift($@))')')
define(`_foreachq', `ifelse(`$2', `', `',
  `define(`$1', _arg1q($2))$3`'$0(`$1', _rest($2), `$3')')')
divert`'dnl
```

foreachq3.m4 另一个提升版本。

```sh
divert(`-1')
# foreachq(x, `item_1, item_2, ..., item_n', stmt)
#   quoted list, alternate improved version
define(`foreachq', `ifelse(`$2', `', `',
  `pushdef(`$1')_$0(`$1', `$3', `', $2)popdef(`$1')')')
define(`_foreachq', `ifelse(`$#', `3', `',
  `define(`$1', `$4')$2`'$0(`$1', `$2',
    shift(shift(shift($@))))')')
divert`'dnl
```


foreachq4.m4 基于 forloop 的版本。

```sh
include(`forloop2.m4')dnl
divert(`-1')
# foreachq(x, `item_1, item_2, ..., item_n', stmt)
#   quoted list, version based on forloop
define(`foreachq',
`ifelse(`$2', `', `', `_$0(`$1', `$3', $2)')')
define(`_foreachq',
`pushdef(`$1', forloop(`$1', `3', `$#',
  `$0_(`1', `2', indir(`$1'))')`popdef(
    `$1')')indir(`$1', $@)')
define(`_foreachq_',
``define(`$$1', `$$3')$$2`''')
divert`'dnl
```

###  Solution for m4wrap

m4wrap 用于暂指定内容，到脚本运行到最后才输出，m4exit 会导致暂存内容的丢失。并且多个暂存内容输出顺序不确定，在未使用递归的情况下是按 LIFO—last in, first out 规则，但根据脚本的执行不同宏扩展流程，不能保证按此顺序。

比如，wrap.m4 示范程序演示了以下混乱的暂存顺序，分析代码可能的暂存顺序应该是 1、4、3、2，但是运行结果证明是 4、3、1、2：

```sh
divert(-1)
m4wrap(`Wrapper no. 1
')

m4wrap(`Wrapper no. 2
m4wrap(`Wrapper no. 3
m4wrap(`Wrapper no. 4
')')')
divert
No. 33: The End.
```

wrapfifo.m4 先进先出规则版本：

```sh
dnl Redefine m4wrap to have FIFO semantics.
define(`_m4wrap_level', `0')dnl
define(`m4wrap',
`ifdef(`m4wrap'_m4wrap_level,
       `define(`m4wrap'_m4wrap_level, defn(`m4wrap'_m4wrap_level)`$1')',
       `builtin(`m4wrap', `define(`_m4wrap_level', incr(_m4wrap_level))dnl
m4wrap'_m4wrap_level)dnl
define(`m4wrap'_m4wrap_level, `$1')')')dnl
```


wraplifo.m4 后进先出规则版本：

```sh
dnl Redefine m4wrap to have LIFO semantics.
define(`_m4wrap_level', `0')dnl
define(`_m4wrap', defn(`m4wrap'))dnl
define(`m4wrap',
`ifdef(`m4wrap'_m4wrap_level,
       `define(`m4wrap'_m4wrap_level, `$1'defn(`m4wrap'_m4wrap_level))',
       `_m4wrap(`define(`_m4wrap_level', incr(_m4wrap_level))dnl
m4wrap'_m4wrap_level)dnl
define(`m4wrap'_m4wrap_level, `$1')')')dnl
```


wraplifo2.m4 后进先出提升版本：

```sh
dnl Redefine m4wrap to have LIFO semantics, improved example.
include(`join.m4')dnl
define(`_m4wrap', defn(`m4wrap'))dnl
define(`_arg1', `$1')dnl
define(`m4wrap',
`ifdef(`_$0_text',
       `define(`_$0_text', joinall(` ', $@)defn(`_$0_text'))',
       `_$0(`_arg1(defn(`_$0_text')undefine(`_$0_text'))')dnl
define(`_$0_text', joinall(` ', $@))')')dnl
```

使用到 join.m4 提供的连接列表功能：

```sh
divert(`-1')
# join(sep, args) - join each non-empty ARG into a single
# string, with each element separated by SEP
define(`join',
`ifelse(`$#', `2', ``$2'',
  `ifelse(`$2', `', `', ``$2'_')$0(`$1', shift(shift($@)))')')
define(`_join',
`ifelse(`$#$2', `2', `',
  `ifelse(`$2', `', `', ``$1$2'')$0(`$1', shift(shift($@)))')')
# joinall(sep, args) - join each ARG, including empty ones,
# into a single string, with each element separated by SEP
define(`joinall', ``$2'_$0(`$1', shift($@))')
define(`_joinall',
`ifelse(`$#', `2', `', ``$1$3'$0(`$1', shift(shift($@)))')')
divert`'dnl
```



###  Solution for fatal_error

```sh
define(`fatal_error',
    `errprint(ifdef(`__program__', `__program__', ``m4'')'dnl
        `:ifelse(__line__, `0', `',
        `__file__:__line__:')` fatal error: $*
')m4exit(`1')')

m4wrap(`divnum(`demo of internal message')
dnl # error→m4:stdin:6: Warning: excess arguments to builtin `divnum' ignored

fatal_error(`inside wrapped text')')
dnl # error→m4:stdin:6: fatal error: inside wrapped text
```

## 🍀 Autoconf + Automake 构建工程
0. https://www.gnu.org/prep/standards/standards.html
1. https://www.gnu.org/savannah-checkouts/gnu/autoconf/manual/
2. https://www.gnu.org/software/automake/manual/
3. https://www.gnu.org/software/make/manual
4. https://www.sourceware.org/autobook/

Windows 系统可以通过 Msys2 安装：

1. https://packages.msys2.org/package/automake1.16
2. https://packages.msys2.org/package/autoconf2.71

源代码使得 zst 格式压缩，可以在 WSL 系统下使用 tar 或者直接使用 zstd 命令进行解包：

    dest -d autoconf2.71-2.71-2-any.pkg.tar.zst 
    tar -C path/to/dest -I zstd -xvf autoconf2.71-2.71-2-any.pkg.tar.zst 

1. Autoconf 根据一个宏文件生成 configure 源代码配置脚本；
2. Automake 依赖 autoconf 并根据 `Makefile.am` 等宏模板文件来生成 Makefile.in；
3. configure 脚本依据 Makefile.in 脚本模板生成一个符合 GNU 惯例的 Makefile 脚本；
4. GNU m4 通用的宏处理器，宏编程工具，autoconf 中大量采用；

这一套基于 Make 命令和 Makefile 规则脚本的自动化构建系统就 GNU Build System，这套工具也就是 GNU Autotools 工具集。使用这套工具的好处是可以按 GNU 软件规范编写程序及构建系统，缺点是有门槛，涉及多个工具的使用，同时不能流畅地跨平台工作。当然，还有其它备选的构建系统，CMake、Ninja 等等都是不错的选择。

Cmake 文档中有对使用 Autoconf 工具的一些观点，Why Not Use Autoconf?

1. Autotools 工具集跨平台工作是个问题，安装非常麻烦，并且不是原生工具。
2. 尽管 autoconf 支持用户指定的选项，但没有用选项依赖功能，即一个选项依赖其它选项；
3. 对于 Unix 用户，CMake 还提供了自动生成依赖项的功能，autoconf 不能直接完成。
4. CMake 输入格式简单，也比 Makefile.in 和 config.in 组合更容易读取和维护。
5. CMake 记忆和链接依赖库信息的能力和 autoconf/automake 不对等。

Automake 文档有一个简短的使用教程，演示这套工具的使用流程：
https://www.gnu.org/software/automake/manual/html_node/Creating-amhello.html

安装 autorconf 附带 autoscan 扫描工具，它可以扫描源代码中的脚本文件并生成 `configure.scan`，此文件可以作为 `configure.ac` 的蓝本，稍加修改就可以执行 autoconf 生成 configure 源代码脚本。源代码配置脚本的目的是为了针对平台特性、软件功能配置、依赖库路径、编译器参数配置等等提供脚本自动化的操作，包括生成配置代码文件等等。执行配置脚本后生成相应的 Makefile，最后就是执行 make 命令按构建规则编译项目。

附带工具包里还有一个 autoheader 用来提取 configure.ac 里面的宏配置，比如软件版本号等等，并按 C 语言宏格式的 #define 形式写入 config.h.in 文件，作为头文件模板。运行配置脚本 configure 生成 makefile 的时候，一并生成 config.h 头文件。如果想在程序代码中使用这些宏，就可以直接 #include "config.h"。


Automake 工具出现后，增加了一些自定义宏，扩展了 Autoconf 的宏库。在此前，Autoconf 都是单独使用的，现在要跟 automake 配合使用，就要在 configure.ac 文件里调用 `AM_INIT_AUTOMAKE` 这样的 automake 宏定义来执行初始化工作。为了运行 autoconf 命令时能找到这些扩展的宏定义，就在 configure.ac 同目录下引入 `aclocal.m4` 脚本，里面存放 automake 的宏扩展或用户定义宏。

Automake 工具自带 aclocal 工具，所谓 aclocal 意思即是 Autoconf Local Marcros 宏定义处理工具。 此工具根据 configure.ac 脚本来生成 aclocal.m4 脚本中的宏定义。在此之前会搜索所有能找到的 m4 脚本，找到各种宏定义，并将宏定义写入 aclocal.m4 文件中。工程外的目录，可以使用 -I 将其路径添加到搜索目录列表。

如果项目目录存在 `acinclude.m4`，则会直接 include 到 aclocal.m4 宏定义脚本中。 

理想状态下，aclocal 工具不应该是 Automake 的组成部分，Automake 应该聚焦于生成 `Makefile`。解决 M4 宏定义更应该是 Autoconf 的工作，但是实际上安装 Automake 的用户经用是为了使用 aclocal 工具来处理宏定义。

Autoconf 和 Automake 集成了 GNU m4 宏解释器，但又对其进行了一些改动。脚本文件中 GNU m4 内置宏定义为使用 m4 前缀命名，比如 m4_ifndef。改动较大的内容如下：

1. 宏定义使用 AC_DEFUN 或者 m4_define。
2. 列表由 GNU m4 的逗号分隔改变为空格分隔。
3. 字符串包括符号新定义为方括号，而 GNU m4 默认是反引号与单引号组合。

一个简单的演示工程，可以只有以下两个或三个文件：

1. helloworld.cc 源代码文件；
2. Makefile.am 构建脚本模板，供 automake 参考生成 Makefile.in；
3. configure.ac (configure.in) 可以使用 autoscan 工具生成参考模块；

项目目录结构参考如下：

    .
    |-- configure.ac
    |-- Makefile.am
    |-- lib
    |   |-- foo.c
    |   `-- Makefile.am
    `-- src
        |-- bar.c
        `-- Makefile.am

演示用的 C/C++ hello world 源文件：

```cpp
#include <iostream>
#include <cstdlib>
#include <cstdio>

int main(int argc, char** argv)
{
    printf("Hello, Linux! ");
    return 0;
} 
```

各个模板文件按依赖关系顺序的操作流程如下：

1. *configure.scan* 通过 autoscan 工具生成，然后根据需要稍加修改保存为 configure.ac；
2. *congigure* 源代码配置脚本运行 autoconf 或 `autoconf configure.ac > congifure` 命令生成；
3. *config.h.in* 使用 `autoheader` 命令生成配置信息模板，设置标准库或软件版本信息等；
4. *aclocal.m4* 宏定义文件使用 `aclocal` 命令生成，依赖 'configure.ac' or 'configure.in'；
5. *Makefile.am* 手动编写基本宏调用，配置 aotomake 各种选项，包括要编译程序、源代码；
6. *Makefile.in* 执行 `automake --add-missing` 生成构建脚本模板，依赖前面多个模板文件；
7. *Makefile* 执行 configure 源代码配置脚本生成最终构建脚本；
8. 最后，调用 make 命令按 Makefile 脚本指示编译项目；

常用的 automake --add-missing  命令意思是“add missing standard files to package”，让 automake 自动加入标准软件包所必须的一些文件。这些文件有 compile, install-sh, missing，使用 `autoreconf --install` 也可以生成这些文件，这个命令可以根据最基本的 Makefil.am 和 configure.ac 生成所有脚本模板。参考手册 Automake 3.7 Programs automake might require。按照手册说明，新版本的工具只需要按以下步骤操作：

3.1 Writing configure.ac
3.1.1 A Shell Script Compiler
3.1.2 The Autoconf Language
3.1.3 Standard configure.ac Layout
3.2 Using autoscan to Create configure.ac
3.3 Using ifnames to List Conditionals
3.4 Using autoconf to Create configure
3.5 Using autoreconf to Update configure Scripts

这些模板文件的依赖关系非常繁杂，用图表可以更清晰表达：

```sh
# https://www.sourceware.org/autobook/autobook/autobook_150.html#aclocal-process    

user input files   optional input     process          output files
================   ==============     =======          ============

                    acinclude.m4 - - - - -.
                                          V
                                      .-------,
configure.in ------------------------>|aclocal|
                 {user macro files} ->|       |------> aclocal.m4
                                      `-------'

                    aclocal.m4 - - - - - - - .
                    (acconfig.h) - - - -.    |
                                        V    V
                                     .----------,
configure.in ----------------------->|autoheader|----> config.h.in
                                     `----------'

                                     .--------,
                                     |        | - - -> COPYING
                                     |        | - - -> INSTALL
                                     |        |------> install-sh
                                     |        |------> missing
                                     |automake|------> mkinstalldirs
configure.in ----------------------->|        |
Makefile.am  ----------------------->|        |------> Makefile.in
                                     |        |------> stamp-h.in
                                 .---+        | - - -> config.guess
                                 |   |        | - - -> config.sub
                                 |   `------+-'
                                 |          | - - - -> config.guess
                                 |libtoolize| - - - -> config.sub
                                 |          |--------> ltmain.sh
                                 |          |--------> ltconfig
                                 `----------'

                   aclocal.m4 - - - - - -.
                                         V
                                     .--------,
configure.in ----------------------->|autoconf|------> configure
                                     `--------'

                                     .---------,
                   config.site - - ->|         |
                  config.cache - - ->|configure| - - -> config.cache
                                     |         +-,
                                     `-+-------' |
                                       |         |----> config.status
                   config.h.in ------->|config-  |----> config.h
                   Makefile.in ------->|  .status|----> Makefile
                                       |         |----> stamp-h
                                       |         +--,
                                     .-+         |  |
                                     | `------+--'  |
                   ltmain.sh ------->|ltconfig|-------> libtool
                                     |        |     |
                                     `-+------'     |
                                       |config.guess|
                                       | config.sub |
                                       `------------'

                                   .--------,
                   Makefile ------>|        |
                   config.h ------>|  make  |
{project sources} ---------------->|        |--------> {project targets}
                                 .-+        +--,
                                 | `--------'  |
                                 |   libtool   |
                                 |   missing   |
                                 |  install-sh |
                                 |mkinstalldirs|
                                 `-------------'
```

源代码配置脚本 configure 除了生成构建脚本，还可能会生成一系列 config 文件，包括 config.h config.status config.log 或者 config.guess 等等。因为 configue 是一个 Linux Shell 脚本，Linux 环境下可以直接运行。Windows 系统下安装 msys2 或者 MinGW 后也可以 `bash configure` 这样运行。

autoconf 工具根据配置脚本模板生成源代码配置脚本，执行 automake 参照 Makefile.am、config.h.in 和 configure.ac 等模板文件生成 Makefile.in，再通过 autoconf 生成的源代码配置脚本生成 Makefile 构建脚本，最后正式执行 make 编译项目。


使用 `aclocal` 命令生成的 aclocal.m4 宏定义文件，是通过扫描 'configure.ac' or 'configure.in' 等脚本文件中的宏调生成的，目的是统一在这个脚本文件中提供宏定义，供 autoconf 调用。双比如 automake 初始化宏 AM_INIT_AUTOMAKE 的定义，初始化宏接收参数有两种形式，旧式传递 PACKAGE 和 VERSION 这样的多参数形式，应该将旧式的参数传递到 AC_INIT。新版本参数是传递一个 OPTIONS，是一个空格分隔的参数列表，注意不是像 GNU 4 那样使用逗号分隔，可以直接调用 `AM_INIT_AUTOMAKE` 初始化，如果没有参数要传递。选项与 AUTOMAKE_OPTIONS 配置的选项内容一致，初始化宏可以直接传递一个版本号，比如 1.12 表示要使用的 automake 版本。

    Macro: AC_INIT (package, version, [bug-report], [tarname], [url])

1. https://www.gnu.org/software/autoconf/manual/autoconf-2.67/html_node/Initializing-configure.html
2. https://www.gnu.org/software/automake/manual/html_node/Public-Macros.html
3. https://www.gnu.org/software/automake/manual/html_node/List-of-Automake-options.html

```sh
# AM_INIT_AUTOMAKE(PACKAGE, VERSION, [NO-DEFINE])
# AM_INIT_AUTOMAKE([OPTIONS])
# -----------------------------------------------
# The call with PACKAGE and VERSION arguments is the old style
# call (pre autoconf-2.50), which is being phased out.  PACKAGE
# and VERSION should now be passed to AC_INIT and removed from
# the call to AM_INIT_AUTOMAKE.
# We support both call styles for the transition.  After
# the next Automake release, Autoconf can make the AC_INIT
# arguments mandatory, and then we can depend on a new Autoconf
# release and drop the old call support.
AC_DEFUN([AM_INIT_AUTOMAKE],
[AC_PREREQ([2.65])dnl
dnl Autoconf wants to disallow AM_ names.  We explicitly allow
dnl the ones we care about.
m4_pattern_allow([^AM_[A-Z]+FLAGS$])dnl
AC_REQUIRE([AM_SET_CURRENT_AUTOMAKE_VERSION])dnl
AC_REQUIRE([AC_PROG_INSTALL])dnl
if test "`cd $srcdir && pwd`" != "`pwd`"; then
  # Use -I$(srcdir) only when $(srcdir) != ., so that make's output
  # is not polluted with repeated "-I."
  AC_SUBST([am__isrc], [' -I$(srcdir)'])_AM_SUBST_NOTMAKE([am__isrc])dnl
  # test to see if srcdir already configured
  if test -f $srcdir/config.status; then
    AC_MSG_ERROR([source directory already configured; run "make distclean" there first])
  fi
fi
```

Autoconf 依赖 GNU m4 宏处理器来运行 aclocal.m4，并且按照源代码配置模板文件生成 configure 脚本。源代码配置脚本主要的功能就是检测系统特性，默认是为当前系统环境准备编译工作的。

config.h.in 是默认的配置信息头文件模板，比如标准库、依赖库、PACKAGE 和 VERSION 等符号，无须对它们硬编码，`#include "config.h"` 写入代码中以利用这些定义。有时为了软件的移植性，可能还需要去配置各种数据类型所以使用的字节大小，比如在嵌入式开发领域，存在大量 8-bit 或者 16-bit 的嵌入式处理器，以及各种名目的 Advanced RISC Machines (ARM) 架构处理器。在 GNU 软件标准的推动下，目前 GNU GCC 编译器套件已经支持市场上流行的 CPU 架构的目标程序编译。注意，不要将 config.h 文件安装到系统中，因为它有可能与其他的软件包冲突。

1. https://www.gnu.org/software/libtool/manual/
2. https://www.gnu.org/software/gnulib/manual/gnulib.html

```cpp
/* config.h.in.  Generated from configure.ac by autoheader.  */

/* Define to 1 if you have the <inttypes.h> header file. */
#undef HAVE_INTTYPES_H

/* Define to 1 if you have the `crypto' library (-lcrypto). */
#undef HAVE_LIBCRYPTO

/* Define to 1 if you have the <memory.h> header file. */
#undef HAVE_MEMORY_H

/* Define to 1 if you have the <stdint.h> header file. */
#undef HAVE_STDINT_H

/* Define to 1 if you have the <stdlib.h> header file. */
#undef HAVE_STDLIB_H
...

```

Makefile.am 构建脚本模板中使用的宏功能参考，在使用上有点类似 CMake：

AUTOMAKE_OPTIONS 配置 automake 选项，参数与 configure.ac 调用 AM_INIT_AUTOMAKE 设置的选项一样，但会覆盖配置脚本中的设置。执行命令时会检查目录下是否存在标准 GNU 软件包的各种文件，例如 AUTHORS、ChangeLog、NEWS 等文件。设置为 foreign 表示 automake 会改用一般软件包的标准来检查，GNU standards 软件规范严格性分为三个等级：

1. *gnits* Gnits standards 标准是对软件进行编程、维护和分发的标准和建议的集合，由一群 GNU 项目维护人员发布，他们自称“Gnits”，是“GNU nit-pickers”的缩写。
2. *gnu* 默认值，按照 GNU standards 软件标准配置。
3. *foreign* “外来”相对于 GNU standards 规范，此严格等级下不会包含 NEWS 这样的文件。


bin_PROGRAMS 指定编译生成的可执行文件，可以有多个可执行文件，名字间用空格隔开。

helloworld_SOURCES 指定产生“helloworld”这个可执行程序所需要的源代码，多个源文件使用空格隔开。bin_PROGRAMS 如果定义了多个可执行文件，则对应每个可执行文件都要定义 filename_SOURCES 这样的源代码文件配置。

```sh
AUTOMAKE_OPTIONS=foreign

bin_PROGRAMS=helloworld

helloworld_SOURCES=helloworld.c 
```

Automake 规则变量参考如下，prog 是用户定义的程序名，保持和 bin_PROGRAMS 定义一致：

01. *SUBDIRS* 指定需要递归处理的子目录；
02. *DIST_SUBDIRS*  指定发布时包含目录，包括有条件地排除在构建之外的目录，比如 opt；
03. *bin_PROGRAMS* 指定用户要编译的程序；
04. *prog_SOURCES* 给程序指定依赖的源代码文件；
05. *prog_CFLAGS* 指定 C 语言编译器参数；
06. *prog_CPPFLAGS* 或者 prog_CXXFLAGS 指定 C++ 编译器参数；
07. *prog_DEPENDENCIES* 给程序添加依赖库；
08. *prog_LINK* 给程序指定链接程序；
09. *prog_LDFLAGS* 给程序指定链接程序参数；
10. *prog_AR* 指定需要构建的静态库；
11. *prog_LIBRARIES* 指定需要构建的动态链接库；
12. *prog_LDADD* 给程序添加链接导入库，automake 会根据依赖库添加；
13. *prog_LIBADD* 编译静态库时指定要添加的依赖库；
14. *prog_LIBTOOLFLAGS* 传递给 libtool 工具的参数，会覆盖 AM_LIBTOOLFLAGS。

configure.ac 模板中需要设置一些基本的宏，比如 AM_INIT_AUTOMAKE，automake 需要这些基本宏来进行配置，指导如何生成 makefile.in 模块文件。

configure.scan 模块需要调用的宏内容参考，也可以直接手写配置文件模板：

1. AC_INIT 初始化 autoconf，接收程序包的完整路径，用于定位源文件目录和健全性检查。
2. AM_INIT_AUTOMAKE 初始化 automake，接收应用程序的名称和版本号，它们将成为 config.h 中定义的 PACKAGE 和 VERSION 值。
3. AC_PROG_CC 此宏用于检查 cc 编译器命令。
4. AC_CONFIG_FILES 设置要写入的脚本文件，可以有多个，用空格分隔。
5. AC_OUTPUT 这个宏指定要输出生成的 Makefile 脚本文件名字。

```sh
#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AM_INIT_AUTOMAKE(hello, 1.0)

AC_PREREQ([2.69])
AC_INIT([port], [0.1], [some@email.com, https://some.web.com])
AM_INIT_AUTOMAKE([-Wall -Werror foreign 1.12])
AC_CONFIG_SRCDIR([config.h.in])
AC_CONFIG_HEADERS([config.h])
# Checks for programs.
AC_PROG_CC

# Checks for libraries.
# FIXME: Replace `main' with a function in `-lcrypto':
AC_CHECK_LIB([crypto], [main])

# Checks for header files.
AC_CHECK_HEADERS([stdlib.h string.h unistd.h])

# Checks for typedefs, structures, and compiler characteristics.

# Checks for library functions.

AC_CONFIG_FILES([Makefile lib/crypto-4.5/priv/obj/Makefile])
AC_OUTPUT

```

按手册说明，3.1.3 Standard configure.ac Layout，以下是配置脚本的基本流程：

01. Autoconf requirements
02. AC_INIT(package, version, bug-report-address)
03. information on the package
04. checks for programs
05. checks for libraries
06. checks for header files
07. checks for types
08. checks for structures
09. checks for compiler characteristics
10. checks for library functions
11. checks for system services
12. AC_CONFIG_FILES([file…])
13. AC_OUTPUT


## 🍀 C.1 Index for all m4 macros

    Index Entry     Section
                                                        _       
    __file__:       Location
    __gnu__:        Platform macros
    __line__:       Location
    __os2__:        Platform macros
    __program__:    Location
    __unix__:       Platform macros
    __windows__:    Platform macros
                                                        A       
    argn:          Shift
    array:         Define
    array_set:      Define
                                                        B       
    builtin:        Builtin
                                                        C       
    capitalize:      Patsubst
    changecom:      Changecom
    changequote:     Changequote
    changeword:     Changeword
    cleardivert:     Cleardivert
    cond:          Shift
    copy:          Composition
    curry:         Composition
                                                        D       
    debugfile:      Debug Output
    debugmode:      Debug Levels
    decr:          Incr
    define:        Define
    define_blind:    Composition
    defn:         Defn
    divert:        Divert
    divnum:       Divnum
    dnl:          Dnl
    downcase:      Patsubst
    dquote:       Shift
    dquote_elt:     Shift
    dumpdef:        Dumpdef
                                                        E       
    errprint:       Errprint
    esyscmd:        Esyscmd
    eval:          Eval
    example:        Manual
    exch:          Arguments
                                                        F       
    fatal_error:     M4exit
    foreach:        Foreach
    foreachq:       Foreach
    forloop:        Forloop
    format:     Format
                                                        I       
    ifdef:      Ifdef
    ifelse:     Ifelse
    ifelse:     Ifelse
    ifelse:     Ifelse
    include:     Include
    incr:       Incr
    index:      Index macro
    indir:      Indir
                                                        J       
    join:       Shift
    joinall:      Shift
                                                        L       
    len:        Len
                                                        M       
    m4exit:     M4exit
    m4wrap:     M4wrap
    maketemp:       Mkstemp
    mkstemp:        Mkstemp
                                                        N       
    nargs:      Pseudo Arguments
                                                        O       
    os2:        Platform macros
                                                        P       
    patsubst:       Patsubst
    popdef:     Pushdef
    pushdef:        Pushdef
                                                        Q       
    quote:      Shift
                                                        R       
    regexp:     Regexp
    rename:     Composition
    reverse:        Shift
                                                        S       
    shift:      Shift
    sinclude:       Include
    stack_foreach:      Stacks
    stack_foreach_lifo:     Stacks
    stack_foreach_sep:      Improved copy
    stack_foreach_sep_lifo:     Improved copy
    substr:     Substr
    syscmd:     Syscmd
    sysval:     Sysval
                                                        T       
    traceoff:       Trace
    traceon:        Trace
    translit:       Translit
                                                        U       
    undefine:       Undefine
    undivert:       Undivert
    unix:         Platform macros
    upcase:        Patsubst
                                                        W       
    windows:        Platform macros


## 🍀 C.2 Index for many concepts

    Index Entry     Section
                                                                A       
    argument currying:      Composition
    arguments to macros:        Macro Arguments
    arguments to macros:        Arguments
    arguments to macros, special:       Pseudo Arguments
    arguments, joining:     Shift
    arguments, more than nine:      Arguments
    arguments, more than nine:      Shift
    arguments, more than nine:      Improved foreach
    arguments, quoted macro:        Quoting Arguments
    arguments, reversing:       Shift
    arithmetic:     Arithmetic
    arrays:     Define
    avoiding quadratic behavior:        Improved foreach
                                                                B       
    basic regular expressions:      Regexp
    basic regular expressions:      Patsubst
    blind macro:        Inhibiting Invocation
    blind macro:        Ifelse
    blind macro:        Composition
    bug reports:        Bugs
    builtins, indirect call of:     Builtin
    builtins, special tokens:       Defn
                                                                C       
    call of builtins, indirect:     Builtin
    call of macros, indirect:       Indir
    case statement:     Ifelse
    changing comment delimiters:        Changecom
    changing quote delimiters:      Changequote
    changing syntax:        Changeword
    characters, translating:        Translit
    command line:       Invoking m4
    command line, file names on the:        Command line files
    command line, macro definitions on the:     Preprocessor features
    command line, options:      Invoking m4
    commands, exit status from shell:       Sysval
    commands, running shell:        Shell commands
    comment delimiters, changing:       Changecom
    comments:       Comments
    comments, copied to output:     Changecom
    comparing strings:      Ifelse
    compatibility:      Compatibility
    composing macros:       Composition
    concatenating arguments:        Shift
    conditional, short-circuiting:      Shift
    conditionals:       Ifdef
    controlling debugging output:       Debug Levels
    copying macros:     Composition
    counting loops:     Forloop
    currying arguments:     Composition
                                                                D       
    debugging macros:       Debugging
    debugging output, controlling:      Debug Levels
    debugging output, saving:       Debug Output
    decrement operator:     Incr
    deferring expansion:        M4wrap
    deferring output:       Diversions
    defining new macros:        Definitions
    definition stack:       Pushdef
    definition stack:       Stacks
    definitions, displaying macro:      Defn
    definitions, displaying macro:      Dumpdef
    deleting macros:        Undefine
    deleting whitespace in input:       Dnl
    delimiters, changing:       Changequote
    delimiters, changing:       Changecom
    discarding diverted text:       Cleardivert
    discarding input:       Ifelse
    discarding input:       Dnl
    discarding input:       Divert
    displaying macro definitions:       Dumpdef
    diversion numbers:      Divnum
    diverted text, discarding:      Cleardivert
    diverting output to files:      Divert
    dumping into frozen file:       Using frozen files
                                                                E       
    error messages, printing:       Errprint
    errors, fatal:      Operation modes
    evaluation, of integer expressions:     Eval
    examples, understanding:        Manual
    executing shell commands:       Shell commands
    exit status from shell commands:        Sysval
    exiting from m4:        M4exit
    expansion of macros:        Macro expansion
    expansion, deferring:       M4wrap
    expansion, tracing macro:       Trace
    expressions, evaluation of integer:     Eval
    expressions, regular:       Regexp
    expressions, regular:       Patsubst
    extracting substrings:      Substr
                                                                F       
    fast loading of frozen files:       Using frozen files
    fatal errors:       Operation modes
    FDL, GNU Free Documentation License:        GNU Free Documentation License
    file format, frozen file:       Frozen file format
    file inclusion:     File Inclusion
    file inclusion:     Undivert
    file inclusion:     Undivert
    file names, on the command line:        Command line files
    files, diverting output to:     Divert
    files, names of temporary:      Mkstemp
    for each loops:     Foreach
    for loops:      Forloop
    formatted output:       Format
    Free Documentation License (FDL), GNU:      GNU Free Documentation License
    frozen file format:     Frozen file format
    frozen files for fast loading:      Using frozen files
                                                                G       
    General Public License (GPL), GNU:      GNU General Public License
    GNU extensions:     Inhibiting Invocation
    GNU extensions:     Define
    GNU extensions:     Arguments
    GNU extensions:     Indir
    GNU extensions:     Builtin
    GNU extensions:     Debug Levels
    GNU extensions:     Debug Output
    GNU extensions:     Search Path
    GNU extensions:     Divert
    GNU extensions:     Undivert
    GNU extensions:     Undivert
    GNU extensions:     Regexp
    GNU extensions:     Patsubst
    GNU extensions:     Format
    GNU extensions:     Eval
    GNU extensions:     Esyscmd
    GNU extensions:     Mkstemp
    GNU extensions:     Using frozen files
    GNU extensions:     Extensions
    GNU Free Documentation License:     GNU Free Documentation License
    GNU General Public License:     GNU General Public License
    GNU M4, history of:     History
    GPL, GNU General Public License:        GNU General Public License
                                                                H       
    history of m4:      History
                                                                I       
    included files, search path for:        Search Path
    inclusion, of files:        File Inclusion
    inclusion, of files:        Undivert
    inclusion, of files:        Undivert
    increment operator:     Incr
    indirect call of builtins:      Builtin
    indirect call of macros:        Indir
    initialization, frozen state:       Using frozen files
    input location:     Preprocessor features
    input location:     Location
    input tokens:       Syntax
    input, discarding:      Ifelse
    input, discarding:      Dnl
    input, discarding:      Divert
    input, saving:      M4wrap
    integer arithmetic:     Arithmetic
    integer expression evaluation:      Eval
    invoking m4:        Invoking m4
    invoking macros:        Invocation
    iterating over lists:       Foreach
                                                                J       
    joining arguments:      Shift
                                                                L       
    length of strings:      Len
    lexical structure of words:     Changeword
    License, code:      Copying This Package
    License, manual:        Copying This Manual
    limit, nesting:     Limits control
    literal output:     Pseudo Arguments
    local variables:        Pushdef
    location, input:        Preprocessor features
    location, input:        Location
    loops:      Shift
    loops, counting:        Forloop
    loops, list iteration:      Foreach
                                                                M       
    M4PATH:     Search Path
    macro composition:      Composition
    macro definitions, on the command line:     Preprocessor features
    macro expansion, tracing:       Trace
    macro invocation:       Invocation
    macro, blind:       Inhibiting Invocation
    macro, blind:       Ifelse
    macro, blind:       Composition
    macros, arguments to:       Macro Arguments
    macros, arguments to:       Arguments
    macros, copying:        Composition
    macros, debugging:      Debugging
    macros, displaying definitions:     Defn
    macros, displaying definitions:     Dumpdef
    macros, expansion of:       Macro expansion
    macros, how to define new:      Definitions
    macros, how to delete:      Undefine
    macros, how to rename:      Defn
    macros, indirect call of:       Indir
    macros, quoted arguments to:        Quoting Arguments
    macros, recursive:      Shift
    macros, special arguments to:       Pseudo Arguments
    macros, temporary redefinition of:      Pushdef
    manipulating quotes:        Shift
    messages, printing error:       Errprint
    more than nine arguments:       Arguments
    more than nine arguments:       Shift
    more than nine arguments:       Improved foreach
    multibranches:      Ifelse
                                                                N       
    names:      Names
    nesting limit:      Limits control
    nine arguments, more than:      Arguments
    nine arguments, more than:      Shift
    nine arguments, more than:      Improved foreach
    numbers:        Manual
                                                                O       
    options, command line:      Invoking m4
    output, diverting to files:     Divert
    output, formatted:      Format
    output, literal:        Pseudo Arguments
    output, saving debugging:       Debug Output
    overview of m4:     Intro
                                                                P       
    pattern substitution:       Patsubst
    platform macros:        Platform macros
    positional parameters, more than nine:      Arguments
    POSIX:      Extensions
    POSIXLY_CORRECT:        Invoking m4
    POSIXLY_CORRECT:        Incompatibilities
    preprocessor features:      Preprocessor features
    printing error messages:        Errprint
    pushdef stack:      Pushdef
    pushdef stack:      Stacks
                                                                Q       
    quadratic behavior, avoiding:       Improved foreach
    quote delimiters, changing:     Changequote
    quote manipulation:     Shift
    quoted macro arguments:     Quoting Arguments
    quoted string:      Quoted strings
    quoting rule of thumb:      Quoting Arguments
                                                                R       
    recursive macros:       Shift
    redefinition of macros, temporary:      Pushdef
    regular expressions:        Changeword
    regular expressions:        Regexp
    regular expressions:        Patsubst
    reloading a frozen file:        Using frozen files
    renaming macros:        Defn
    renaming macros:        Composition
    reporting bugs:     Bugs
    rescanning:     Limits control
    rescanning:     Inhibiting Invocation
    rescanning:     Pseudo Arguments
    rescanning:     Defn
    rescanning:     Other Incompatibilities
    reversing arguments:        Shift
    rule of thumb, quoting:     Quoting Arguments
    running shell commands:     Shell commands
                                                                S       
    saving debugging output:        Debug Output
    saving input:       M4wrap
    search path for included files:     Search Path
    shell commands, exit status from:       Sysval
    shell commands, running:        Shell commands
    short-circuiting conditional:       Shift
    special arguments to macros:        Pseudo Arguments
    stack, macro definition:        Pushdef
    stack, macro definition:        Stacks
    standard error, output to:      Dumpdef
    standard error, output to:      Trace
    standard error, output to:      Errprint
    status of shell commands:       Sysval
    status, setting m4 exit:        M4exit
    string, quoted:     Quoted strings
    strings, length of:     Len
    substitution by regular expression:     Patsubst
    substrings, extracting:     Substr
    substrings, locating:       Index macro
    suggestions, reporting:     Bugs
    suppressing warnings:       Macro Arguments
    switch statement:       Ifelse
    synchronization lines:      Preprocessor features
    syntax, changing:       Changeword
                                                                T       
    temporary file names:       Mkstemp
    temporary redefinition of macros:       Pushdef
    TMPDIR:     Diversions
    tokens:     Syntax
    tokens, builtin macro:      Defn
    tokens, special:        Other tokens
    tracing macro expansion:        Trace
    translating characters:     Translit
                                                                U       
    undefining macros:      Undefine
    UNIX commands, exit status from:        Sysval
    UNIX commands, running:     Shell commands
                                                                V       
    variables, local:       Pushdef
                                                                W       
    warnings, suppressing:      Macro Arguments
    words:      Names
    words, lexical structure of:        Changeword


# 🐣 Cross-Compiling 交叉编译
https://learn.microsoft.com/en-us/vcpkg/users/platforms/mingw
https://www.llvm.org/docs/HowToCrossCompileLLVM.html
https://clang.llvm.org/docs/CrossCompilation.html
https://gcc.gnu.org/install/specific.html
https://gcc.gnu.org/install/configure.html
https://www.mingw-w64.org/downloads/
https://sourceforge.net/projects/mingw/files/
https://wiki.wxwidgets.org/Install_The_Mingw_Cross-Compiler
https://www.gnu.org/software/autoconf/manual/autoconf-2.69/html_node/Hosts-and-Cross_002dCompilation.html
https://cmake.org/cmake/help/book/mastering-cmake/chapter/Cross%20Compiling%20With%20CMake.html
https://jensd.be/1126/linux/cross-compiling-for-arm-or-aarch64-on-debian-or-ubuntu

Unix 类系统下，GNU Autotools 工具生成的 config.guess 脚本可以检测出系统的架构信息，包括：

1. *cpu* 指示当前处理器类型，`i386` or `sparc`，或者 `mipsel` little endian MIPS 处理器等等。
2. *manufacturer* 系统制造商信息，通常取值是 unknown，或者 pc 代表 IBM 个人兼容机。
3. *operating_system* 当前操作系统类型，如 `solaris2.5` `winnt4.0` `aix4.1.4.0` 等等。
4. *kernel* 主要用来指示 GNU/Linux 系统所使用的内核信息，例如 `i586-pc-linux-gnulibc1`。

操作系统配置名称也可以用来描述非特定系统，比如嵌入式系统就不运行于任何特定操作系统，这种情况下就使用可执行程序的文件格式类型，比如 Linux `elf` 或者 Windows `coff` 等格式。

因为像 GCC 这样的编译器支持交叉编译，所以当前系统平台信息以及目标平台信息是配置脚本中非重要的信息，它们决定了具体的配置。比如，以下是三种不同的编译环境的配置，build 表示当前运行编译器的环境，host 和 target 分别表示目标程序运行环境和目标程序支持的系统及格式。target 只有在建立交叉编译环境的时候用到，正常编译和交叉编译都不会用到。build 主机上的编译器，编译一个新的编译器工具，binutils gcc gdb 等等，这个新的编译器将来编译出来的程序将运行在 target 指定的系统上。

Compiling a simple package for a GNU/Linux system.
host = build = target = `i586-pc-linux-gnu`

Cross-compiling a package on a GNU/Linux system that is intended to
run on an IBM AIX machine: build = `i586-pc-linux-gnu`, host = target = `rs6000-ibm-aix3.2`

Building a Solaris-hosted MIPS-ECOFF cross-compiler on a GNU/Linux
system. build = `i586-pc-linux-gnu`, host = `sparc-sun-solaris2.4`, target = `mips-idt-ecoff'

虽然，config.guess 脚本可以检测系统平台信息，但是依然可以通过配置脚本覆盖设置：

    ./configure --build i686-pc-linux-gnu --host i586-mingw32msvc
    ./configure --build=i686-pc-linux-gnu --host=m68k-coff
    ./configure --host=alpha-netbsd sparc-gnu
    ./configure CC=m68k-coff-gcc

一般情况下的交叉编程，也是常用于嵌入式开发的编译模式，只涉及当前运行编程器的系统和程序构建出来后运行的目标系统，比如 Cross-Compiling from x86_64 to ARM。这需要编译器工具链的支持，比如 CMake 交叉编译脚本配置在 Linux 环境下使用 mingw32-binutils 交叉编译器构建目标运行于 Windows 系统的程序。i586-mingw32msvc-gcc 这个编译器名称表示支持 Intel Pentium 586 CPU 和支持 MinGW32 MSVC 编译方式的 GCC 交叉编译器。还可以使用 i686-w64-mingw32-gcc 或者 x86_64-w64-mingw32-gcc 交叉编译 32/64 位应用程序。

Rust 语言交叉编译也做得比较好，使用 rustup 命令可心安装各种 Target 工具链：

    $ rustup target list
    $ rustup toolchain list
    $ rustup toolchain default nightly

    $ rustup target add x86_64-unknow-linux-gnu
    $ rustup target add i686-unknown-linux-gnu 
    $ rustup target add x86_64-pc-windows-msvc
    $ rustup target add x86_64-pc-windows-gnu
    $ rustup target add i686-pc-windows-msvc
    $ rustup target add i686-pc-windows-gnu
    $ rustup target add wasm32-wasi

说到交叉编译，就不得不提到引入三层构架设计的 LLVM 编译器套件，由于引入了中间层，LLVM 将源代码编译和最终目标代码链接完全分离，形成编译器前端、中间层和后端三层分离式编译器构架，通过开发依赖不同硬件平台的编译器后端，大大方便了同一个程序链接为不同平台的可执行程序。Clang/LLVM 本身就是一个交叉编译器，只要有相应的编译器后端，这意味着一组程序可以通过设置 `-target` 选项编译到所需要的交叉编译目标。这使得希望编译到不同平台和体系结构的程序员、只需要维护一个构建系统的编译器开发人员以及只需要一组主包的操作系统发行版更容易。

交叉编译参数指定通常使用 Target Triple 三元组，需要包含最基础的信息就是目标系统的 CPU 构架信息，其次是操作系统和系统。

一个 triple 的一般格式为 `<arch><sub>-<vendor>-<sys>-<env>`，各部分说明如下：
https://github.com/llvm/llvm-project/blob/main/llvm/include/llvm/TargetParser/Triple.h

1. arch   = x86_64, i386, arm, thumb, mips, etc.
2. sub    = for ex. on ARM: v5, v6m, v7a, v7m, etc.
3. vendor  = pc, apple, nvidia, ibm, etc.
4. sys    = none, linux, win32, darwin, cuda, etc.
5. env    = eabi, gnu, android, macho, elf, etc.

以上内容包含了常用的 CPU 构架和操作系统环境信息，其中 x86_64 构架也叫做 x64 或 amd64 构架，因为是 AMD 公司首先研发出来的 64-bit CPU 架构。而更早期的个人计算机使用的是 Intel x86 32-bit 构架，也叫做 i386、i586 等等。

Linux 作为编译器资源最丰富的操作系统，它可以实现非常多的交叉编译方式，交叉编译为 Windows 系统，或者交叉编译为 ARM CPU 构架的常用的工具安装如下：

    suto apt update
    sudo apt-get install llvm
    sudo apt-get install mingw32 mingw32-binutils
    sudo apt-get install i686-w64-mingw32-gcc
    sudo apt-get install mingw-w64
    sudo apt-get install gcc-mingw-w64-x86-64 g++-mingw-w64-x86-64

    sudo apt-get install gcc-arm-linux-gnueabi binutils-arm-linux-gnueabi
    sudo apt-get install gcc-aarch64-linux-gnu binutils-aarch64-linux-gnu
    sudo apt-get install gcc-12-arm-linux-gnueabihf g++-12-arm-linux-gnueabihf
    sudo apt install gcc-9-aarch64-linux-gnu

    clang --target=arm-linux-gnueabihf -o hello hello.cpp
    clang --target=x86_64-mingw-w64 -o hello hello.cpp

Mingw-w64 工具套件也可以在 Windows 系统上做交叉编译：

| Architecture  | vcpkg community triplets                 | Tool name prefix
| ------- | ------------------------ | ----------- |
| x64        | x64-mingw-dynamic, x64-mingw-static   | x86_64-w64-mingw32-
| x86        | x86-mingw-dynamic, x86-mingw-static   | i686-w64-mingw32-
| arm64      | arm64-mingw-dynamic, arm64-mingw-static | aarch64-w64-mingw32-
| arm        | arm-mingw-dynamic, arm-mingw-static     | armv7-w64-mingw32-

    # 查看 GCC 支持的 CPU 架构列表
    gcc -march=native -Q --help=target
    # 查询编译目标三元组，例如 x86_64-pc-msys
    gcc -dumpmachine

CMake 手册中用 Build host 和 Target System 表示两个系统，但是命令行中依然是使用 build 和 host 参数：

    --build=BUILD    The system on which the package is built.
    --host=HOST     The system where built programs and libraries will run.
    --target=TARGET When building compiler tools: the system for which the tools will create output.

```sh
cmake_minimum_required(VERSION 3.16.0)
project(hello)

add_executable(port port.c)

# the name of the target operating system
set(CMAKE_SYSTEM_NAME Windows)

# which compilers to use for C and C++
set(CMAKE_C_COMPILER   i586-mingw32msvc-gcc)
set(CMAKE_CXX_COMPILER i586-mingw32msvc-g++)

# where is the target environment located
set(CMAKE_FIND_ROOT_PATH  /usr/i586-mingw32msvc
    /home/alex/mingw-install)

# adjust the default behavior of the FIND_XXX() commands:
# search programs in the host environment
set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)

# search headers and libraries in the target environment
set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)
```

CMake 项目的一般构建、编译流程：

1. 编写 CMakeLists.txt 脚本；
2. 执行 cmake 按指定的工程生成器生成相应的项目文件，例如 -G "Unix Makefiles"；
3. 按生成的工程类型执行编译工作，例如 Makefiles 工程就执行 make 命令进行编译。

WSL 中运行 CMake 按 CMakeLists.txt 脚本进行编译，Cmake 提示占用磁盘空间超额，需要在宿主机运行 Cmake。但是这不是磁盘空间占用问题，因为这个命令连帮助信息都不能打印。通过 apt 卸载时发现是曾经装过野鸡 cmake 产生的脚本命令，它只打印这条信息。执行 cmake 可能会有卡死现象，可以尝试关闭 WSL 再启动。

```sh
    $ cmake -S . -B build-win32 -G "Unix Makefiles"
    cmake take more than 179MB hard disk, use it from the host system in place of WSL.

    $ sudo apt remove cmake
    Package 'cmake' is not installed, so not removed

    $ cat /usr/bin/cmake
    #!/bin/bash
    echo cmake take more than 179MB hard disk, use it
    from the host system in place of WSL.
```

WSL2 系统的虚拟磁盘文件在 AppData\Local\Packages 目录下，不同的 WSL2 发行版对应的名称前缀不同：

1. Pengwin：WhitewaterFoundryLtd.Co
2. Ubuntu：CanonicalGroupLimited
3. Debian：TheDebianProject

使用 `df -h /mnt/` 命令可以查看磁盘空间使用状态。

vhdx 虚拟磁盘支持自动扩容，但是不会自动缩容。一旦把它“撑大”，即使删除文件后它也不会自动“缩小”。Diskpart 命令可以对虚拟磁盘进行压缩，它会根据WSL2中数据的大小来重新申请磁盘空间。：

    wsl --shutdown
    diskpart
    # open window Diskpart
    select vdisk file="ext4.vhdx"
    attach vdisk readonly
    compact vdisk
    detach vdisk
    exit


The Meson Build system

Meson is an open source build system meant to be both extremely fast, and, even more importantly, as user friendly as possible.

The main design point of Meson is that every moment a developer spends writing or debugging build definitions is a second wasted. So is every second spent waiting for the build system to actually start compiling code.

Features

1. multiplatform support for Linux, macOS, Windows, GCC, Clang, Visual Studio and others
2. supported languages include C, C++, D, Fortran, Java, Rust
3. build definitions in a very readable and user friendly non-Turing complete DSL
4. cross compilation for many operating systems as well as bare metal
5. optimized for extremely fast full and incremental builds without sacrificing correctness
6. built-in multiplatform dependency provider that works together with distro packages
7. fun!

Meson Cross compilation 脚本参考：
https://mesonbuild.com/Cross-compilation.html

Meson has full support for cross compilation through the use of a cross build definition file. An minimal example of one such file x86_64-w64-mingw32.txt for a GCC/MinGW cross compiler targeting 64-bit Windows could be:

```sh
[binaries]
c = 'x86_64-w64-mingw32-gcc'
cpp = 'x86_64-w64-mingw32-g++'
ar = 'x86_64-w64-mingw32-ar'
strip = 'x86_64-w64-mingw32-strip'
exe_wrapper = 'wine64' # A command used to run generated executables.

[host_machine]
system = 'windows'
cpu_family = 'x86_64'
cpu = 'x86_64'
endian = 'little'
```

```sh
# meson.build
project('meson-project', 'c',
  version : '0.1',
  default_options : ['warning_level=3'])

executable('meson-project',
           'ei.c',
           'port.c',
           install : true)
```

Which is then used during the setup phase.

    meson init --name testproject --build
    meson setup --cross-file x86_64-w64-mingw32.txt build-mingw
    meson compile -C build-mingw


# 🐣 面向 makefile 编程

此教程将计划以两部分内容呈现，目标是从零基础到 GNU make 最本原的原理的掌握，这是第二部分内容，分按不同的工程类型分成多个示范项目来展示。零基础可以先看第一部分：Basic Concepts：

1.  🐣 Basic Concepts
2.  🐣 Demo Projects
2.1.  🐣 Scheme R6RS 语言规范文档处理 [LaTeX]
2.2.  🐣 Multi threaded Download [Msys2 Packages]
2.3.  🐣 C/C++ Project Templates [GLib Gobject]
2.4.  🐣 Erlang Project Templates 
2.5.  🐣 Unit Test [CPL] 


完整《Makefile 光学教程》以及 GNU M4 教程参考开源文档：https://github.com/Jeangowhy/opendocs/blob/main/Makefile.md


## 🍀 LaTeX & TeX 排版系统


1. https://www.latex-project.org/ 
1. https://tikzit.github.io/
2. https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes
3. https://www-cs-faculty.stanford.edu/~knuth/index.html
4. https://www-cs-faculty.stanford.edu/~knuth/taocp.html
5. https://lamport.azurewebsites.net/pubs/pubs.html

https://www.tug.org/texlive/windows.html
https://miktex.org/download
https://github.com/latex3/latex2e/releases/tag/release-2023-06-01-PL1
https://github.com/latex3/latex2e/archive/refs/tags/release-2023-06-01-PL1.zip

TeX 是一个排版系统，也是 LaTeX 的基础。TeX 作者高德纳(Donald Ervin Knuth)的传奇一生中写作了一部计算机科学巨著 The Art of Computer Programming (TAOCP)。在准备出版第四卷时，出版社给了他一本已经出版的第二卷第二版书过目过目，发现那书的颜值一言难尽，觉得现有的计算机排版系统不太行，为了使自己的毕生心血看着美观，自己写一个排版系统。1978 年 TeX 第一版发布，就得到了许多人的追捧，1982 年高老爷子紧接着发布了 TeX 的第二版 TeX82。10 年后，1989 年发布了 TeX3.0，老爷子宣布，除了修改 bug 停止 TeX 的开发，因为 TeX3.0 已经非常稳定了。

LaTeX 是基于 TeX 之上定义的一组宏集，相当于对 TeX 进行了一次封装。是出版物的高质量排版系统，一个文档准备系统，包括为制作技术和科学文件而设计的功能。LaTeX 是科学文献交流和出版的事实标准。LaTeX 是免费软件。LaTeX 作者是美国计算机科学家莱斯利·兰伯特 Leslie Lamport。

TeX 名字源自 technology 的希腊词根，而将 Lamport 大佬的名字和 TeX 混合则得到了 LaTeX 的名字。到现在，已经出现一堆数不过来的和 TeX 扯关系的应用。

LaTeX 也是宏编程的一种形式，它大量使用斜杆前缀定义宏符号，An introduction to LaTeX 文档给出以下 Hello World 文档示范：

```LaTeX
\documentclass{article}
\title{Cartesian closed categories and the price of eggs}
\author{Jane Doe}
\date{September 1994}
\begin{document}
   \maketitle
   Hello world!
\end{document}
```

文档类型：

1. article 排版科学期刊、 演示文档、 短报告、 程序文档、 邀请函……
2. proc    一个基于 article 的会议文集类
3. minimal 非常小的文档类。 只设置了页面尺寸和基本字体。 主要用来查错。
4. report  排版多章节长报告、 短篇书籍、 博士论文……
5. book    排版书籍。
6. slides  排版幻灯片。 该文档类使用大号 sans serif 字体。 也可以选用 FoilTEXa 来得到相同的效果。

LaTeX 目录分区条目的宏定义：
https://www.overleaf.com/learn/latex/Sections_and_chapters

    -1  \part{part}
    0   \chapter{chapter}
    1   \section{section}
    2   \subsection{subsection}
    3   \subsubsection{subsubsection}
    4   \paragraph{paragraph}
    5   \subparagraph{subparagraph}

https://www.overleaf.com/learn/latex/Cross_referencing_sections%2C_equations_and_floats
https://www.overleaf.com/learn/latex/Hyperlinks

LaTeX \label 和 \ref 两个宏分别用于定义标签、引用标签。另外还有扩展引用宏，引用文档内容的宏定义有如下这些：

\ref 基本引用宏，只输出所引用对象的编号；
\pageref 页面引用宏，它可以输出被引用对象所在的页码数；
varioref 宏包的 \vref 命令合并 \ref 和 \pageref 的功能，输出被引用对象的编号和所在页码。
cleveref 宏包 \cref 命令可以根据所以引用的对象类型输出内容。
hyperref 宏包中提供给交叉引用加上链接宏功能，点击该引用会转到被引用对象所在的页面。

很多宏库扩展了 LaTeX 交叉引用系统，例如 varioref, cleveref, hyperref, xr/xr-hyper。
https://www.cnblogs.com/wenbosheng/p/9537774.html

引用的标记符并没有什么格式上的限制。不过，通用的做法是使用前缀+冒号作为标记符的开头。添加前缀可以帮助作者识别被引用对象的类型。例如，引用图形的标记符可以是\label{fig:schema}这样的形式。对于一些最常用的引用对象，下表给出了相应的前缀名建议。

|    对象    | 前缀 |    对象   | 前缀 |
|------------|------|-----------|------|
| Chapter    | ch   | Figure    | fig  |
| Section    | sec  | Table     | tab  |
| Subsection | ssec | List item | itm  |
| Appendix   | app  | Equation  | eqn  |

当然，使用前缀是个好习惯，不过这也仅仅是建议。



## 🍀 Scheme R6RS 语言规范文档处理 [LaTeX]

RnRS (the Revised^n Reports on Scheme) 作为 Scheme 社区的权威报告，对其语言规范的实现者具有积极指导意义。比如，按规范实现的 rsrn base 模块，就 提供各种数据类型相关操作的模块。Guile 3.0.9 版本的源代码文档中包含了 R5RS Texinfo 格式文档，可以作为趁手的备查文档。源代码中同样包含了官方的参考手册，info 格式可以很方便地转换成其它格式，比如 Markdown。

Make 提供了一套机制给开发者编写扩展程序，即各种基于 make 的工具开发，也就是手册 12 Extending GNU 'make' 和 13 Integrating GNU 'make' 中所阐述的内容，主要是 job slots 在进程间的共享。扩展 make 就是基于插件机制编写工具，并且通过脚本中的 load 指令加载和执行指定方法，或者默认的入口方法。官方已经在 GNU Make 4.2 集成 Guile。

Guile 是一种嵌入式脚本语言，属于 Scheme programming language 的一种，即 LISP 语言的一种方言。这类语言使用的语法非常新奇（古典），例如，调用加法算术函数 `(+ 1 2)` 得到结果为 3，嵌套调用就继续加圆括号。


目前 R6RS 规范报告文档共享在 https://www.r6rs.org/ 网站上，文档分为四个部分：

1. Revised6 Report on the Algorithmic Language Scheme
2. Revised6 Report on the Algorithmic Language Scheme — Standard Libraries
3. Revised6 Report on the Algorithmic Language Scheme — Non-Normative Appendices
4. Revised6 Report on the Algorithmic Language Scheme — Rationale

TeX 文件不仅包含以上四部分内容，还包含一系列 TeX 宏符号定义文件。

R6RS 文档原始格式是 48 个 TEX 文档，外加两个书目 Bibliology，计算其它转换脚本就有 67 个原始文件。

现在希望将 R6RS 这些文件的内容统一归纳到一个文件，这样可以使用 Sublime Text 阅读文档时提供的快捷跳转功能，避免了文档来回切换的时间损失，更严重的是切换动作导致注意力的涣散，使文档阅读效率大大下降。

文档压缩包内 Makefile 脚本已经定义好了各种格式转换的规则，但对于我的目标不是很重要，只需要它定义的文件列表：

```makefile
COMMON_TEX_FILES = \
    commands.tex revision.tex status.tex semantics-commands.tex

REPORT_TEX_FILES = r6rs.tex \
    intro.tex \
    struct.tex \
    mustard.tex \
    numbers.tex \
    lex.tex \
    basic.tex \
    entry.tex \
    library.tex \
    programs.tex \
    syntax.tex \
    expansion.tex \
    base.tex \
    semantics.tex \
    derived.tex \
    repository.tex \
    example.tex \
    changes

LIB_TEX_FILES = r6rs-lib.tex \
    unicode.tex \
    bytevector.tex \
    list.tex \
    sort.tex \
    control.tex \
    records.tex \
    exc.tex \
    io.tex \
    iocond.tex \
    portio.tex \
    convio.tex \
    programlib.tex \
    arith.tex \
    syntax-case.tex \
    hashtable.tex \
    enum.tex \
    complib.tex \
    eval.tex \
    setcar.tex \
    stringset.tex \
    r5rscompat.tex

APP_TEX_FILES = r6rs-app.tex

RATIONALE_TEX_FILES = r6rs-rationale.tex

BIB_FILES = rrs.bib abbrevs.bib
```

其中，r6rs.tex 和 r6rs-lib.tex 分别是 Algorithmic Language Scheme 和 Standard Libraries 两个主要内容的目录文件。其中 arith.tex 是属性标准库文档，iocond.tex
portio.tex
convio.tex 属性 io.tex 的补充内容。文件罗列顺序也并不是目录序，上列表按目录调整过顺序。此外，标准库文档列表中还缺失了 sort.tex stringset.tex 文档。

可以使用 Node.js 平台提供的 watch 工具监视脚本，Linux 系统内置 watch 命令，只是用法上有些差别。只要监视的文件有改动就执行相应的命令，这会很方便地调试 Makefile 脚本。

```sh
    npm install -g watch
    watch "echo ---====+ Watching +====--- && make -f Makefile tomd" -f filter.js .  
```

使用过滤器只可以监视指定的文件，过滤器文件是一个返回过滤函数的 Node.js 模块脚本，过滤函数名称随意，但需要在作为 exports 返回，然后通过 -f 或者 --filter 将文件名传递给 watch 工具：

```ts
const fs = require('node:fs')
const path = require('node:path')
const list = ["filter.js","m4tutor.m4","hi.scm","Makefile","EMakefile"];

/**
 * @param {string}   f   - File name
 * @param {fs.Stats} curr - File Statments
 */
function filter (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
        // coonsole.log( f, 'Finished walking the tree ')
    } else if (prev === null) {
        // coonsole.log( f, 'file is a new file ')
    } else if (curr.nlink === 0) {
        // coonsole.log( f, 'file was removed ')
    } else {
        // coonsole.log( f, 'file was changed ')
    }
    return list.indexOf( path.basename(f) )>=0 && curr.isFile
}

module.exports = filter;
```

过滤器中的注解符号是 TypeScript 编译器支持的类型修饰符号，Sublime Text 安装 LSP 插件和 TypeScript 语言服务器后就可以提示智能提示，并且在 tsc 编译器中也可以做类型检查工作。


为了将这些 TEX 文档按目录顺序写入同一个 TEX 文档，当然这过过程引入的文档头部定义可能会导致文档定义不符合规范，需要在 Makefile 文档中增加以下规则定义：

```makefile
CONCATED = $(COMMON_TEX_FILES) $(REPORT_TEX_FILES) $(APP_TEX_FILES) \
           $(BIB_FILES) $(LIB_TEX_FILES) $(RATIONALE_TEX_FILES)

.PHONY: $(CONCATED) 
UNITY = r6rs.org.tex
UNITYOUT = r6rs.org.tex
$(file > $(UNITYOUT),) # create new file with an empty line

.PHONY: $(CONCATED) 
unity : $(CONCATED)
    @echo "unity: = $^" >> $(UNITYOUT)
$(CONCATED) :
    @echo "TEX: = $@" >> $(UNITYOUT)
```

现在开始需要使用到自动变量了，它们在命令块中引用当前规则包含的各种信息：

1.  `$<` 自动变量表示依赖列表中的第一个依赖项；
2.  `$^` 自动变量表示整个依赖列表，列表中各依赖项之以空格隔开；
3.  `$+` 类似 $^，只是按顺序包含目标在 Makefile 中的依赖列表，配合链接程序使用；
4.  `$*` 模式匹配 % 符号匹配到的内容，称为主干 stem 并会替换依赖文件 % 符号；
5.  函数内可以接收 $1 ~ $9 这几个参数，GNU m4 则没有这个数量限制，$0 还是一样指代宏名。

这里使用了 Makefile 内置的 .PHONY 虚构目标，它的功能及目的就是不对目标文件是否存在、更新状态等等进行隐式的检测，而是在构建目标时无条件地执行命令块中定义的 shell 命令。目前只是使用 echo 命令打印文档列表，接下来就需要考虑是否需要进行格式转换？如果需要就调用系统中安装好的转换工具程序。当前就不需要做格式转换处理，Sublime Text 有可以提供阅读 TEX 格式文档的辅助插件。

所以，只需要将文档内容直接写入指定文件，Makefile 脚本中有多种执行命令的形式：

1. 直接使用操作系统提供的标准文件重定向功能，如 > 和 >> 分别表示写入、附加写入；
2. 使用 shell 命令，如 cat 等等将内容写入指定文件；
3. 使用 Makefile 内置的 file 函数，也使用标准文件重定向一样尖括号表示读写操作；
4. 使用 Make 提供的插件扩展接口，编写自己的插件实现文件读写功能；

要小心使用这些功能、函数，否则不小心传递错误参数就可以导致文件内容被覆盖，或者制造一个巨无霸文件。另外，在同一个命令块中，echo 方式输出的内容会在 file 函数输出内容之后，与命令出现的先后顺序无关，由低层数据操作逻辑决定的。

接下来，需要引入一个顺号作为 TeX 文档中通过 \chapter 标记记录当前嵌入文档的序号。但是 Makefile 除了字符串，并没有直接提供数值运算的功能，解决数值运算有以下几种方法：

1. 使用 shell 函数调用外部的数值计算能力，如 @echo "1+3=$(shell echo $$((1+2)))"；
2. 使用内置宏函数、自定义函数构造出数值运算功能；
3. 使用 Make 提供的插件扩展接口，编写自己的插件实现数值运算功能；

Make 不支持在执行构建目标的命令中修改变量，这为数值处理设置了一些障碍。

注意：shell 使用 `$((1+2))` 这样的表达式做数值运算，Makefile 中就需要将 $ 转义为 $$。变量 赋值和引用变量语法上也有差别，后者需要 $var 这样的表达，同样需要转义。因为 shell 命令计算结果是临时的，所有需要将它保存到文件中重复利用。即使用 .ONESHELL 或者 export 导出 shell 变量也不行，因为 .ONESHELL 只能保证命令块在当前目标构建的时候同在一个 shell 进程中捃命令，一旦更换构建目标，所有环境变量都被重置。

```sh
    # if [ -z "$$ID" ]; then export ID=1; fi
    if [ -f "temp.id" ]; \
        then echo $$(($(file < temp.id)+1)) > temp.id; \
        else echo 1 > temp.id; fi
    echo ID $(file < temp.id)
```

使用 eval 函数，比如简单的使用它来增加 info 函数调用的脚本，另外更重要的是 eval 函数提供了一种在命令块中修改变量值的途径，此外别无它法：

```makefile
$(eval ID=$$(shell echo "1+2=?" ))
$(eval ID=$$(shell echo $$$$((1+2)) ))
$(eval $$(info Eval info: $$(ID) ))
$(eval ID=$$(shell echo $$$$$$$$$$$$$$$$$$ )) # what that hell?
```

但是，eval 不能循环使用同一个变量，即不能从一个变量取值并且又给它赋值：

    Recursive variable 'ID' references itself (eventually).

重新整理一下以上内容，编写一个不需要通过 shell 写文件来实现的步进计数函数：

```makefile
counter = $(eval ID=$$(shell echo $$$$(( $1+$(if $($0_ID),$($0_ID),0) )) )) \
        $(eval $0_ID=$(ID)) $(ID)
%:
    @echo "$@: Get ID Variable. $(call counter,1)"
```

说明一下 counter 自增函数的逻辑：首先是 eval 函数定义了一段“将要”被 make 执行的代码，即 ID
=xxx 的变量赋值语句。并且这个值需要借助 shell 的 `$((x+y+z))` 这种算术支持。其中运行使用到的值有两个：一是来自函数调用时 call 函数传递来过的参数 $1，它表示步长值。然后另一个值来自一个为了避免 eval 函数循环引用而加入的 counter_ID 变量，这个变量使用了 $0 自动变量表示，它指代函数名称 counter，组合得到这个变量的名称。


最后，整理以上代码片段，就可以得到需要的 Makefile 脚本：一个带有数值运算功能的脚本，它可以将 LeX 有秩序地按目录编号合并到统一的文档文件中：

```makefile
CONCATED = $(COMMON_TEX_FILES) $(REPORT_TEX_FILES) $(APP_TEX_FILES) \
           $(BIB_FILES) $(LIB_TEX_FILES) $(RATIONALE_TEX_FILES)

ROOT = $(dir $(lastword $(MAKEFILE_LIST)))
UNITYOUT = r6rs.org.tex
$(file > $(UNITYOUT),) # create new file with an empty line
inc = $(eval ID=$$(shell echo $$$$(( $1+$(if $($0_ID),$($0_ID),0) )) )) \
        $(eval $0_ID=$(ID)) $(ID)

.PHONY: $(CONCATED) 
unity : $(CONCATED)
    @echo "unity: = $^" >> $(UNITYOUT)
$(CONCATED) :
#   @echo "TEX: = $@" >> $(UNITYOUT)
    @echo "" >> $(UNITYOUT)
    @echo "" >> $(UNITYOUT)
    $(file >> $(UNITYOUT),\part{📜 File $(call inc,1): $@})
    $(file >> $(UNITYOUT),$(file < $(ROOT)$@))
```


## 🍀 GNU Make 数值逻辑折腾教程

此教程将原计划内容已经全部呈现，从零基础到 GNU make 最本原的原理的掌握，到工程应用实例演示。但是 GNU Make 作为一个功能实现上极度自制的构建工具，也体现了它在 GNU Autotools 工具集中的反面形象：臃肿 vs. 小巧。Gnu Make 本身没有提供现成的数值计算功能，如果有，那么就是 words 可以统计列表元素的个数。如果硬要说有现成的数值计算，那些 shell 功能只能被抬上台面了。为此觉得折腾一下 GNU Make 数值运算非常有趣，顺便讲讲计算机最基本的数值处理机制：补码，以及探索 GNU Make 图灵完备性。

首先来分析一下宏函数库 The GNU Make Standard Library (GMSL)，此库定义了一系列 Makefile 宏函数，实现了以下一系列数理逻辑运算：
https://github.com/jgrahamc/gmsl/

01. Associative Arrays
02. Integer Arithmetic Functions
03. List Manipulation Functions
04. Logical Operator: AND
05. Logical Operator: NAND
06. Logical Operator: NOR
07. Logical Operator: NOT
08. Logical Operator: OR
09. Logical Operator: XOR
10. Miscellaneous and Debugging Facilities
11. Named Stacks
12. Set Manipulation Function
13. String Manipulation Functions

GMSL 只有五个文件，其中两个文档，一个测试脚本，另一个 gmsl 是自助引用服务脚本，另外一个才是真实的函数库定义文件。gmsl 引用自助脚本根据 MAKEFILE_LIST 自动变量检测其本身所在目录。在没有出现 include 指令引用其它脚本时，此列表记录着当前 make 已经加载的所有脚本文件路径信息，其中最后一个就是当前脚本。脚本路径有两种基本形式：

1. 相对路径：比如相对于当前目录的 Makefile；
2. 绝对路径：比如从其它目录运行当前脚本 /pl/Makefile；

根据当前脚本路径，加载函数库文件。尽管，GMSL 只加一个函数库文件，但如果是加载多个文件，这种通过入口加载整个库的处理方式是非常适当的。

```makefile
ifndef __gmsl_included

true  := T
false :=

# Function:  not
# Arguments: 1: A boolean value
# Returns:   Returns the opposite of the arg. (true -> false, false -> true)
not = $(if $1,$(false),$(true))

__gmsl_included := $(true)

__gmsl_root := $(abspath $(dir $(lastword $(MAKEFILE_LIST)))/__gmsl)
__gmsl_root := $(patsubst %gmsl,%,$(__gmsl_root))__gmsl

include $(__gmsl_root)
endif
```

调试信息追踪机制：定义 TRACE 符号时启用函数追踪器，所有使用了追踪前缀的函数就会在调用时输出其函数名称及参数值。追踪器被当作变量嵌入到目标函数中，其中定义的自动变量 $0 $1 等等就会输出当前调用函数的相关信息。为了方便阅读代码，可以将调试用的符号清除。

```makefile
TRACE = 1
ifdef TRACE
Trace3 = $(warning $0('$1','$2','$3'))
else
Trace3 :=
endif
counter = $(Trace3)$(eval ID=$$(shell echo $$$$(( $1+$(if $($0_ID),$($0_ID),0) )) )) \
        $(eval $0_ID=$(ID)) $(ID)

all: a b c d

%:
    @echo "$@: Get ID Variable. $(call counter,1)"
```

输出内容参考：

```sh
Makefile:43: counter('1')
a: Get ID Variable.   1
Makefile:43: counter('1')
b: Get ID Variable.   2
Makefile:43: counter('1')
c: Get ID Variable.   3
Makefile:43: counter('1')
d: Get ID Variable.   4
```

Make 定义函数与定义变量本质上是没有区别的，都是一样的宏定义，使用便捷的 = 定义，或者使用 define 多行式，定义方式取决于宏定义的复杂度。差别在于使用宏符号的方式（是否使用 call 去调用），和宏体内部如何使用自动变量，$0 ~ $9，通过输入列表与这些自动变量的配合，就可以对列表中的元素进行地重新排列：

以上定义的 counter 自增函数就是变量风格定义的简单函数，其逻辑是借用 shell 的算术 `$((a+b))` 支持、以及内置的 eval 设置全局变量实现的计数器。

```makefile
# 8.1 Function Call Syntax
     $(FUNCTION ARGUMENTS)
     ${FUNCTION ARGUMENTS}
# 8.8 The 'call' Function
     $(call VARIABLE,PARAM,PARAM,...)
```

注意：调用内置函数与用户定义函数的区别，后者需要通过 call 内置函数去调用，VARIABLE 即 $0 自动变量对应的参数必需是函数名称，后面的参数都需要使用逗号分隔式。对于参数是列表的情形，直接使用空格作为分隔符，不需要使用括号：

```makefile
# $(call counter, 1) = 1
# $(call counter, 2) = 3
# $(call counter,-3) = 0
counter = $(Trace3)$(eval ID=$$(shell echo $$$$(( $1+$(if $($0_ID),$($0_ID),0) )) )) \
        $(eval $0_ID=$(ID)) $(ID)

# $(call resetlist,1,a b c d) = a b c d
# $(call resetlist,2,a b c d) = b c d
# $(call resetlist,3,a b c d) = c d
restlist = $(Trace3)$(wordlist $1,$(words $2),$2)

# $(call reverse,1 2 3 4) = 4 3 2 1
# $(call reverse,a b c d) = d c b a
reverse = $(Trace3)$(strip $(if $1, $(call reverse,$(call restlist,2,$1)) $(firstword $1) ))

all: a b c d
    @echo "[0-9]: $(words $([0-9]))"
    echo reverse: $(call reverse,$^) 
    echo reverse: $(call reverse,1 2 3 4) 
    @echo "$@: Get ID Variable. $(call counter,-4)"

%:
    @echo "$@: Get ID Variable. $(call counter,1)"
```

GMSL 使用一个字符列表的长度来表示一个数字，字符可以随意选择，比如“x”，然后加法就像连接列表一样容易，连接后的列表长度就是加和。这种实现减法就需要一种方法生成指定长度的列表，然后利用内置函数 `join` 进行结对连接，再通过 `filter-out` 函数过滤掉（剔除）已经结对的符号，即相当于减法运算。

乘法和除法则可以转换为多次的加法、减法运算。

这些方法适用于较小的数字，但当值变大时会出现明显的问题。表示负数也不太自然：

    $(call subtract,3,4) # 10

Evosyn 这里提出了一个新的实现 https://evosyn.com/arithmake.html


过滤器函数，包括 `filter`，以及 `patsubst` 函数都支持模式匹配。字符替换函数有两个，其中模式匹配替换是一次全局性匹配。而 `subst` 则是字符串线性匹配，从头到尾搜索一遍，匹配的字符串就替换，已经处理过不会再进行处理。

```makefile
$(info $(subst --,- -,----))       # return: - -- -
$(info $(patsubst -%-,- -,----))   # return: - -
$(info $(join 1 2 3,4 5 6))        # return: 14 25 36
$(info $(filter -%,-1 -2 -3 filter -negative))      # -1 -2 -3 -negative
$(info $(filter-out -%,-1 -2 -3 filter out positive)) # filter out positive
```

Make 提供的逻辑关系处理只有三函数函数，它们也都基于空字符的判断，自己实现逻辑函数时也应该基于这一套原则，否则就有可能导致自定义宏函数被展开（即使用条件不满足），而导致代码被执行进而产生副作用：

```makefile
$(if CONDITION,THEN-PART[,ELSE-PART])
$(or CONDITION1[,CONDITION2[,CONDITION3...]])
$(and CONDITION1[,CONDITION2[,CONDITION3...]])
$(intcmp LHS,RHS[,LT-PART[,EQ-PART[,GT-PART]]]) # GNU Make 4.4
```

虽然，GNU Make 没有提供获取字符索引位置的字符，但是提供了一个 word 函数可以用来获取指定列表序号的元素。如果再构建一个方法将数值顺序打碎为列表，那么就可以对列表中的 digits 进行操作，这就可以将数值计算转换为 1 位十进制数的映射关系处理。

内置函数 sort 是一个去重排序函数，它处理后的列表所有元素都是独一无二的，重复元素只保留一个副本。元素按字典序排列，例如 `$(sort 2 33 -1 -11 +1)` 返回 +1 -1 -11 2 33，注意所有元素都是字符串非数值。

以下是一套基本逻辑函数，参考自 Are makefiles Turing complete?
https://www.gangofcoders.net/solution/are-makefiles-turing-complete/

```makefile
not = $(if $1,,.)

lteq = $(if $1,$(if $(findstring $1,$2),.,),.)
gteq = $(if $2,$(if $(findstring $2,$1),.,),.)
eq = $(and $(call lteq,$1,$2),$(call gteq,$1,$2))
lt = $(and $(call lteq,$1,$2),$(call not,$(call gteq,$1,$2)))

add = $1$2
sub = $(if $(call not,$2),$1,$(call sub,$(call dec,$1),$(call dec,$2)))
mul = $(if $(call not,$2),$2,$(call add,$1,$(call mul,$1,$(call dec,$2))))
dec = $(patsubst .%,%,$1)
inc = $(patsubst %,.%,$1)
numeral = $(words $(subst .,. ,$1))

fibo = $(if $(call lt,$1,..),$1,$(call add,$(call fibo,$(call dec,$1)),$(call fibo,$(call sub,$1,..))))
fact = $(if $(call lt,$1,..),.,$(call mul,$1,$(call fact,$(call dec,$1))))


go = $(or $(info $(call numeral,$(call mul,$1,$1)) $(call numeral,$(call fibo,$1)) $(call numeral,$(call fact,$1)) ),$(call go,.$1))

_ := $(call go,)
```

综合 GNU Make 提供的以上函数及功能，就可以使用 - + 符号来实现加减法运算。以此俩符号的个数作为记数值，符号本身作为结果的正负号。首先，只需要尝试实现一个支持个位数带进位的加法函数。如果要实现一个通用的加法器（支持正负数的加减运算），那么就需要考虑两种基本情况：需要进位的运算、需要借位的运算。虽然在书写上正数、负数的加减存在四种不同的形式，但归纳起来就是两种：同符号值相加与同符号值相减，分别对应进位与借位两种运算。而这两种运算又可以归纳为一种情形：进位相当于高一级权重位 +1，而借位相当于高一级权重位 -1。如果采用 + - 符号数量来实现数值表达，那么，原本的进位、借位分别等价于进位一个 + 或 - 符号。

所以，实现一个基于符号运算的加法器，基于 + - 两个符号的数量计数，先要对两个数进行符号判断，以确定其“进位”符号是 + 或者 -。并且还需要确定，。比如说 1 - 9，如果在不确定结果属性正、负，那么实现计算函数时就面临 1 - 9 进位“-”得 2，或者无进位得 -8 两种情况。如果知道结果应该是负数，那么就应该选择第二种计算流程。另外，对于需要借位的运算，为了避免对两个数（较大值和较小值的符号序列）运算结果的判断（进位符号），可以采取预借策略。预借较大值的高一级权重值，相当于进位多一个对手符号，而当前运算的符号序列中增加十个较大值的符号。

以下 Makefile 函数库实现仅供参考，注意事项以及功能说明：

1. if 函数的条件是基于字符是否为空判断的，strip 函数过滤掉空白字符避免错误检测；
2. 这其中的符号等值判断不能调用 ifequal 这样嵌套的用户宏函数，宏体展开会产生副作用。
3. 计算结果保留了前缀 0，而且，`$(wordlist 02,02,18 17)` 这样的表达式也正确。
4. 为了便于通过字典序比较两数值的大小，采取 padding 在较小值序列上前缀 0。
5. add 宏函数只能计算正整数加法，plus 则可以实现整数加减运算。
6. 因为基于符号运算，理论只要内存足够，可以进行任意精度的整数加减运算。
7. 处理符号运算的“进位”，取巧地采用预借，如果是异符号数运算结果产生了进位就抵消；

```makefile
# TRACE = 1
ifdef TRACE
Trace = $(warning $0('$1','$2','$3'))
else
Trace :=
endif

# $(call counter, 1) = 1
# $(call counter, 2) = 3
# $(call counter,-3) = 0
counter = $(Trace)$(strip $(eval ID=$$(shell echo $$$$(( $1+$(if $($0_ID),$($0_ID),0) )) )) \
        $(eval $0_ID=$(ID)) $(ID) )

# $(call resetlist,1,a b c d) = a b c d
# $(call resetlist,2,a b c d) = b c d
# $(call resetlist,3,a b c d) = c d
restlist = $(Trace)$(wordlist 2,$(words $1),$1)
restlistn = $(Trace)$(wordlist $1,$(words $2),$2)

# $(call reverse,1 2 3 4) = 4 3 2 1
# $(call reverse,a b c d) = d c b a
reverse = $(Trace)$(strip $(if $1, $(call reverse,$(call restlist,$1)) $(firstword $1) ))

# $(call ifequal,a,b,true_expr,false_expr)
ifequal = $(Trace)$(if $(findstring $(findstring $1,$2),$1),$3,$4)
ifempty = $(Trace)$(if $(findstring [0],[$(words $1)]),$2,$3)

equal = $(Trace)$(findstring [$1],[$2])
empty = $(Trace)$(findstring [0],[$(words $1)])

# L = $(call split,ab,123ab456ab789) # return list: 123 456 789
# $(info $(call merge,-,$(L)))        # merge list: 123-456-789
# $(info $(call merge,,$(L)))         # merge list: 123456789
split =  $(Trace)$(strip $(subst $1, ,$2))
merge=  $(Trace)$(strip $(if $2, $3$(word 1,$2)$(call merge,$1,$(call restlist,$2),$1),))

# $(info $(call n2digits,114))       # return list: 1 1 4
[0-9] := 0 1 2 3 4 5 6 7 8 9
n2digits = $(Trace)$(strip $(if $1,$(foreach x,$([0-9]), \
            $(if $(findstring $(findstring $1,$(subst L$x,,L$1)),$1),,\
            $(subst $(subst L$x,,L$1)L,,$1L) $(strip $(call n2digits,$(subst L$(x),,L$(1)))))),))
# $(info $(call add2dcarry,1,4))     # return num: 5
# $(info $(call add2dcarry,9,9))     # return num: 1 8
# $(info $(call add2dcarry,9,9,1))    # return num: 2 8
# $(info $(call add2dcarry,10,9))    # error: no define
add2dcarry = $(Trace)$(call n2digits,$(words $(wordlist 1,$1,$([0-9])) \
            $(wordlist 1,$2,$([0-9])) $(if $(strip $3),1) ))
# $(info add(10,20): $(call add,10,20))    # return 30
# $(info add(15,25): $(call add,15,25))    # return 40
# $(info add(116,25): $(call add,216,25))  # return 241
# $(info add bignumber: $(call add,1161234551436712,25123211433213))  # 1186357762869925
add = $(Trace)$(call merge,,$(call reverse,$(foreach x,\
            $(join $(call reverse,$(call n2digits,$1)),$(call reverse,$(call n2digits,$2)) ),\
            $(eval add_cache:=$(call add2dcarry,$(firstword $(call n2digits,$x)),\
                $(wordlist 2,2,$(call n2digits,$x) 0),$(wordlist 2,2,$(call reverse,$(add_cache))) ))\
            $(lastword $(add_cache)) )))

# $(info $(call plus,-126,-6))  # return: -132
# $(info $(call plus,11,-11))   # return: 00
# $(info $(call plus,-12,21))   # return: 09
# $(info $(call plus,1,-10))    # return: -09
# $(info $(call plus,18,17))    # return: 35
# $(info $(call plus,1161234551436712,25123211433213))  # return: 1186357762869925
# $(info $(call plus,1186357762869925,-25123211433213))  # return: 1161234551436712
# $(info $(call plus,18446744073709552000,1))  # return: 18446744073709552001
# $(info $(call plus,-18446744073709552001,-1))  # return: -18446744073709552002
M10 := - - - - - - - - - -
P10 := + + + + + + + + + +
plus = $(strip $(eval PLUS1=$(if $(findstring L-,L$1),-,+))\
      $(eval PLUS2=$(if $(findstring L-,L$2),-,+))\
      $(eval PLUSD1=$(call reverse,$(call n2digits,$(subst $(PLUS1),,$1))))\
      $(eval PLUSD2=$(call reverse,$(call n2digits,$(subst $(PLUS2),,$2))))\
      $(if $(findstring [0],[$(words $(wordlist $(words $(PLUSD1)),1,$(PLUSD2)))]),\
        $(eval PLUSD2=$(PLUSD2) $(call restlist,$(foreach x,$(wordlist $(words $(PLUSD2)),$(words $(PLUSD1)),$(PLUSD1)),0))), \
        $(eval PLUSD1=$(PLUSD1) $(call restlist,$(foreach x,$(wordlist $(words $(PLUSD1)),$(words $(PLUSD2)),$(PLUSD2)),0))) ) \
      $(if $(findstring $(lastword $(sort $(call merge,,$(call reverse,$(PLUSD1))) $(call merge,,$(call reverse,$(PLUSD2))))),$1),\
        $(call _plus,$(findstring -,$(PLUS1)),$(findstring -,$(PLUS2)),$(join $(PLUSD1),$(PLUSD2))),\
        $(call _plus,$(findstring -,$(PLUS2)),$(findstring -,$(PLUS1)),$(join $(PLUSD2),$(PLUSD1))) ))
_plus = $(Trace)$(eval _plus_c=)$1$(call merge,,$(call reverse,$(foreach x,$3,$(eval _plus_p=$(call n2digits,$x) 0)\
        $(eval _plus_p=$(words $(subst ++,+ +,$(subst --,- -,$(filter-out -+,$(filter-out +-,$(join \
          $(if $(call equal,$1,$2),,$(if $(call equal,-,$1),$(M10),$(P10)))\
          $(wordlist 1,$(word 1,$(_plus_p)),$(if $1,$(M10),$(P10)) ), \
          $(wordlist 1,$(word 2,$(_plus_p)),$(if $2,$(M10),$(P10)) )  \
          $(_plus_c) \
        ))))))) \
        $(eval _plus_d=$(call reverse,$(call n2digits,$(_plus_p))) 0) \
        $(if $(call equal,$1,$2), \
          $(eval _plus_c=$(wordlist 1,$(word 2,$(_plus_d)),$(if $(call equal,-,$1),$(M10),$(P10)) )), \
          $(eval _plus_c=$(if $(call equal,1,$(word 2,$(_plus_d))),,$(if $(call equal,-,$1),+,-)) ) ) \
        $(word 1,$(_plus_d)) \
        )))
```

以下谈谈计算机数值逻辑基础：补码。

计算机硬件底层的数值计算设计使用的是补码，这种编码方案的妙处在于数值二进制最高比特既作为符号位使用，又作为数值位使用，并且加减法同一套操作，就使得基于二进制的 CPU 电路设计大大得到精简。

数值编码涉及以下几个概念：

0. 符号位，最高比特作为符号位，0 表示正数，1 表示负数；
1. 原码 Sign-Magnitude，数值的原始编码，比如十进制的 15 对应的二进制原码就是 1111；
2. 反码 One's Complement，原码和比特按位取反（Bitwise Not），原码 1111 的反码就是 0000；
3. 补码 two's complement ，正数保持原码，负数保留符号位不变，先求反码再加上 1。

为了简化，以上使用 4-bit 的数据来解析，最高位既作为数值使用又作为符号位。正数需要转换为补码形式，负数则直接在原码上转位符号位。例如：

1. 十进制 0 的二进制补码就是 0000，反码为 1111，正数不用取反加 1 操作；
2. 十进制 1 的二进制补码就是 0001，反码为 1110，正数不用取反加 1 操作；
3. 十进制 -1 的补码就是 1111。-1 原码是 1001，符号位保持不变，取反再加 1 即 1111；
4. 十进制 -15 的补码就是 1001，原码是 1111，符号位保持不变，取反加 1 即 1001。

接下来有趣的事情发生了，1 + -1 = 0，对应的二进制比特运算就是：0001 + 1111 = 1 0000，舍弃掉进位，结果为 0000。如果具象化地去理解补码运算的本质，可以借用数轴，两个互补的值的叠加就是其模长。

模 modulus 是一个抽象代学概念，有专门的模论 module theory 研究相关问题。

将整数的补码按其在数轴上的顺序罗列出来更直观，正数相当于计算其二进制的 1，负数相当于计算其二进制的 0。注意：以下是以补码作为线索进行对比，对于一个 4bit 数，原码、反码方案因为正负零问题并不能表达 -8（超出范围）。

         补码  原码  反码（保持符号位）
     -4  1100  1100  1011
     -3  1101  1011  1100
     -2  1110  1010  1101
     -1  1111  1001  1110
      0  0000  0000  0111
      1  0001  0001  0110
      2  0010  0010  0101
      3  0011  0011  0100
      4  0100  0100  0011
      5  0101  0101  0010
      6  0110  0110  0001
      7  0111  0111  0000
     -8  1000  1000  1111
     -7  1001  1111  1000
     -6  1010  1110  1001
     -5  1011  1101  1010

所有编码系统的设计，都在追求连续性和唯一性。补码也是这种思维下的一种最佳选择，尽管它也不连续，但是比起原码、反码方案（有两个不连续位置在正负数交界处）好多了，只在正负极值处不连续。补码为这种连续带来的代价就是表达范围少一个 bit，负数比正数的表达范围大 1。原码方案存在两个 0 值：正负零，以及两个不连续位置。反码方案通过反转将不连续位置，但还存在正负零。补码则是通过对负值加 1 偏移，清除掉负零，使负值的极大值范围加 1。

反码（对1求补）所指的 1，本质上是一个有限位计数系统里所能表示出的最大值。补码（对2求补）所指的 2 是计数系统的容量（模），就是计数系统所能表示的状态数。

补码运算的原理就是“数轴”这个抽象原理的一个应用，可以形象地将“轴”理解为一根具有长度（模长）的“棍子”，不同的数对应不同的轴长，通过比较长短来得到计算结构。编程语言中的不同数据类型也代表了不同的模长，例如 char 类型模长就是 2^8。

补码本质就是符号的处理，和计算机中的宏符号处理同源。用模减去一个数（无符号部分）就能得到这个数的补。对于一个 4bit 的数值，模长 2^4=16 表达为二进制的 10000，减一个数，比如 7（0111），它的补即为 9（1001），这个过程可以表述为取反加 1，隐去进位借位。

C/C++ 语言中直接打印数值的补码，并且做数值计算，经常需要考虑是否有溢出的可能。例如，以下例子中的变量 c 就会出现负值溢出。对于 char 只有 8bit 可表示范围 -128 ~ 127，或者用指数形式表示 -2^8 ~ 2^8-1：

```cpp
#include <stdlib.h>
#include <stdio.h>

int main(void) {
    char a = -127, b = -127, c = a + b;
    printf("a = %x, b = %x, c = %x\n [%d]", a, b, c, c);
}
```

对于必然溢出的两个数的运算，就可以用数轴的思维（模）进行计算，或者使用刻度转盘（钟表）来形象地理解，圆盘周长就是模长。这个圆盘只有一根指针，指向两个互补数的求和值，正负数同样方式处理。对于代码中的 a b，可以它们和 -254 的绝对绝对与模 2^8=256 只差 2，这就是圆盘指针指向的位置，不考虑进位借位。



## 🍀 Multi threaded Download & Msys2 Packages

参考 [Glib Tutorial](GLib_tutorial.md) 与 [Glib Manual](GLib_manual.md)


### 📜 reStructuredText 文档规范
https://github.com/adamchainz/sublime-rst-improved
https://docutils.sourceforge.io/rst.html
https://docutils.sourceforge.io/docs/user/rst/cheatsheet.txt
https://docutils.sourceforge.io/docs/user/rst/demo.html

    =====================================================
     The reStructuredText_ Cheat Sheet: Syntax Reminders
    =====================================================
    :Info: See <https://docutils.sourceforge.io/rst.html> for introductory docs.
    :Author: David Goodger <goodger@python.org>
    :Date: $Date: 2022-01-20 11:11:44 +0100 (Do, 20. JÃ¤n 2022) $
    :Revision: $Revision: 8956 $
    :Description: This is a "docinfo block", or bibliographic field list

    .. NOTE:: If you are reading this as HTML, please read
       `<cheatsheet.txt>`_ instead to see the input syntax examples!

    Section Structure
    =================
    Section titles are underlined or overlined & underlined.

    Body Elements
    =============
    Grid table:

    +--------------------------------+-----------------------------------+
    | Paragraphs are flush-left,     | Literal block, preceded by "::":: |
    | separated by blank lines.      |                                   |
    |                                |     Indented                      |
    |     Block quotes are indented. |                                   |
    +--------------------------------+ or::                              |
    | >>> print 'Doctest block'      |                                   |
    | Doctest block                  | > Quoted                          |
    +--------------------------------+-----------------------------------+
    | | Line blocks preserve line breaks & indents. [new in 0.3.6]       |
    | |     Useful for addresses, verse, and adornment-free lists; long  |
    |       lines can be wrapped with continuation lines.                |
    +--------------------------------------------------------------------+

    Simple tables:

    ================  ============================================================
    List Type         Examples (syntax in the `text source <cheatsheet.txt>`_)
    ================  ============================================================
    Bullet list       * items begin with "-", "+", or "*"
    Enumerated list   1. items use any variation of "1.", "A)", and "(i)"
                      #. also auto-enumerated
    Definition list   Term is flush-left : optional classifier
                          Definition is indented, no blank line between
    Field list        :field name: field body
    Option list       -o  at least 2 spaces between option & description
    ================  ============================================================

    ================  ============================================================
    Explicit Markup   Examples (visible in the `text source`_)
    ================  ============================================================
    Footnote          .. [1] Manually numbered or [#] auto-numbered
                         (even [#labelled]) or [*] auto-symbol
    Citation          .. [CIT2002] A citation.
    Hyperlink Target  .. _reStructuredText: https://docutils.sourceforge.io/rst.html
                      .. _indirect target: reStructuredText_
                      .. _internal target:
    Anonymous Target  __ https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html
    Directive ("::")  .. image:: images/biohazard.png
    Substitution Def  .. |substitution| replace:: like an inline directive
    Comment           .. is anything else
    Empty Comment     (".." on a line by itself, with blank lines before & after,
                      used to separate indentation contexts)
    ================  ============================================================

    Inline Markup
    =============
    *emphasis*; **strong emphasis**; `interpreted text`; `interpreted text
    with role`:emphasis:; ``inline literal text``; standalone hyperlink,
    https://docutils.sourceforge.io; named reference, reStructuredText_;
    `anonymous reference`__; footnote reference, [1]_; citation reference,
    [CIT2002]_; |substitution|; _`inline internal target`.
    
    Directive Quick Reference
    =========================
    See <https://docutils.sourceforge.io/docs/ref/rst/directives.html> for full info.

    ================  ============================================================
    Directive Name    Description (Docutils version added to, in [brackets])
    ================  ============================================================
    attention         Specific admonition; also "caution", "danger",
                      "error", "hint", "important", "note", "tip", "warning"
    admonition        Generic titled admonition: ``.. admonition:: By The Way``
    image             ``.. image:: picture.png``; many options possible
    figure            Like "image", but with optional caption and legend
    topic             ``.. topic:: Title``; like a mini section
    sidebar           ``.. sidebar:: Title``; like a mini parallel document
    parsed-literal    A literal block with parsed inline markup
    rubric            ``.. rubric:: Informal Heading``
    epigraph          Block quote with class="epigraph"
    highlights        Block quote with class="highlights"
    pull-quote        Block quote with class="pull-quote"
    compound          Compound paragraphs [0.3.6]
    container         Generic block-level container element [0.3.10]
    table             Create a titled table [0.3.1]
    list-table        Create a table from a uniform two-level bullet list [0.3.8]
    csv-table         Create a table from CSV data [0.3.4]
    contents          Generate a table of contents
    sectnum           Automatically number sections, subsections, etc.
    header, footer    Create document decorations [0.3.8]
    target-notes      Create an explicit footnote for each external target
    math              Mathematical notation (input in LaTeX format)
    meta              Document metadata
    include           Read an external reST file as if it were inline
    raw               Non-reST data passed untouched to the Writer
    replace           Replacement text for substitution definitions
    unicode           Unicode character code conversion for substitution defs
    date              Generates today's date; for substitution defs
    class             Set a "class" attribute on the next element
    role              Create a custom interpreted text role [0.3.2]
    default-role      Set the default interpreted text role [0.3.10]
    title             Set the metadata document title [0.3.10]
    ================  ============================================================

    Interpreted Text Role Quick Reference
    =====================================
    See <https://docutils.sourceforge.io/docs/ref/rst/roles.html> for full info.

    ================  ============================================================
    Role Name         Description
    ================  ============================================================
    emphasis          Equivalent to *emphasis*
    literal           Equivalent to ``literal`` but processes backslash escapes
    math              Mathematical notation (input in LaTeX format)
    PEP               Reference to a numbered Python Enhancement Proposal
    RFC               Reference to a numbered Internet Request For Comments
    raw               For non-reST data; cannot be used directly (see docs) [0.3.6]
    strong            Equivalent to **strong**
    sub               Subscript
    sup               Superscript
    title             Title reference (book, etc.); standard default role
    ================  ============================================================



## 🍀 C/C++ Project Templates [Glib-2.0 & ADT]

### 📜 GLib–2.0 前置教程：Msys + Meson 构建工具

参考 [Glib Tutorial](GLib_tutorial.md) 与 [Glib Manual](GLib_manual.md)


## 🍀 Erlang Project Templates

用来测试的 Erlang 脚本如下，只负责打印一条信息：

```erlang
-module(main).
-export([start/0]).
%-on_load(main/0).

start() ->
    io:format("$1 start: ~p  ~p~n", [?MODULE, self()]).
```

Makeile 将自动创建多个子目录，并将以上脚本写入 main.erl 文件，然后再进行编译测试。使用 erlc 编译器命令时，-o 可以指定编译生成的 .beam 文件保存目录的路径，可以使用集中目录存放。但是，如果模块重名，如这里演示的所有子目录下的主模块都命名为 main，就需要独立目录保存。

Erlang 模块就是脚本文件，文件名就是模块名，使用 `-module` 指令显式命名也受此约束。

Erlang 处理处理 Code path 搜索路径列表中存在多个同名模块呢？以搜索路径列表顺序作为优先级，使用 -pa 等参数会将路径添加列表前头，所以以下命令可以解释同名的 main 模块只加载到最靠前的 ModuleC 目录下的模块。

```sh
> erl -pa ebin -pa ModuleA -pa ModuleB -pa ModuleC
1> code:is_loaded(main).
false
2> main:start().
ModuleC/main.erl start: main  <0.76.0>
ok
3> code:is_loaded(main).
{file,"~/erlang/port/ModuleC/main.beam"}
```

在处理多层级 Makefile 脚本时，有两种方式：

1. include 方式：通过直接原样引用外部 Makefile 脚本；
2. submake 方式：通过 make 命令运行子进程去解释更多的 Makefile 脚本；

这两种方式有很多差别，submake 相当于直接运行 make 命令，但是可以通过变量控制来改变默认行为。

使用 include 直接引用的外部脚本会将内容原样拼合到主脚本中，这种方式反而可能更复杂。因为这种引用外部脚本的方式，会因为脚本拼合导致规则更新，而致使 Make 解析器需要重启，`MAKE_RESTARTS` 自动变量会记录当前重启的次数。而且，在执行 clean 这样的清理工作时，也会有可能触发 Makefiles 文件目标规则，如果有定义并且需要更新的话。

另外，还要求理解透 Make 的规则覆盖机制：

1. 单冒号规则的覆盖：命令块被最后的同名 Target 定义替代，但是依赖项叠加；
2. 双冒号规则的独立性，同名的 Target 命令块与依赖独立解析运行，不存在覆盖行为；

除了规则层面上的覆盖，还需要考虑同名变量的处理：

使用 = 递归赋值，变量值由右侧所引用变量最后叠加的值决定；
使用 := 立即赋值，变量值虽然当下是已经绑定，但后缀叠加脚本还可以进行重新赋值；

最后，include 指令还会改变 `MAKEFILE_LIST` 变量的列表，列表中最后一个脚本文件即为上一条 include 指令引用的脚本（也可以是列表）中的最后一个脚本。如果使用 = 递归赋值的变量需要使用此列表，就需要考虑如何正确处理这个值的状态。

如果不希望各种 Makefile 脚本中的变量相互影响，那么就应该使用名称前缀、后缀来解决。


以下是 Makefile 脚本输出内容参考：

```sh
Build [ModuleC] : ModuleC/main.beam
====== Test [ModuleA/main.beam.test] ======
erl -noshell -pa ModuleA/ -s main start -s init stop
ModuleA/main.erl start: main  <0.8.0>
====== Test [ModuleB/main.beam.test] ======
erl -noshell -pa ModuleB/ -s main start -s init stop
ModuleB/main.erl start: main  <0.8.0>
====== Test [ModuleC/main.beam.test] ======
erl -noshell -pa ModuleC/ -s main start -s init stop
ModuleC/main.erl start: main  <0.8.0>
all done.
```

以下是 Makefile 脚本内容参考，简要说明如下：

1. 宏函数与变量定义没有本质区别，只是使用上不同，使用 call 调用即为宏函数；
2. 变量的 := 立即绑定方式其值立即固定，= 递归绑定由右则变量的最终值决定；
3. include 引用外部脚本，可能因脚本被更新导致 Make 重启解释过程，MAKE_RESTARTS 变量记录重启次数；
4. 引用脚本可能会因为 Target 同名，导致原有单引号规则的命令块失效，被新规则替换，但是依赖列表叠加；

```makefile
MAIN := $(lastword $(MAKEFILE_LIST))
SRC := $(realpath $(dir $(MAIN)))/
ROOT := $(realpath $(dir $(MAIN))../)/
OUTPUT := $(ROOT)ebin

SUBDIRS = ModuleA  ModuleB  ModuleC 
ERLC = erlc.exe -o $(OUTPUT)
Makefiles = $(addsuffix /Makefile,$(SUBDIRS))
Modules = $(addsuffix /main.erl,$(SUBDIRS))
TARGETS = $(SUBDIRS:%=%/main.beam)

define Toucherl
%-module(main).
-export([start/0]).
%-on_load(main/0).

start() ->
    io:format("$1 start: ~p  ~p~n", [?MODULE, self()]).
endef

define Touchcat
# Generated by $(ROOT)EMakefile
$1_ROOT := $$(realpath $$(dir $$(lastword $$(MAKEFILE_LIST))))/
$1_SRCS := $$(wildcard $$($1_ROOT)*.erl)
$1_BEAMS := $$($1_SRCS:%.erl=%.beam)

all: $$($1_BEAMS)
test: $$($1_BEAMS)
$$($1_BEAMS) : %.beam :
    @echo "++Build $1: $$@"
    @erlc.exe -o $$($1_ROOT) $$*.erl
endef

include $(Makefiles)
$(info Remaking: [$(MAKE_RESTARTS)] )

all : $(TARGETS) test
    @echo all done.

$(TARGETS) : %/main.beam : prepare
    @echo "Build [$*] : $@"

$(Makefiles) : %/Makefile : %/main.erl $(MAIN)
    @echo Makefile: [$*] $@
    $(file > $@,$(call Touchcat,$*))
$(Modules) : %/main.erl : %          $(MAIN)
    @echo Make module: [$*] $@
    $(file > $@,$(call Toucherl,$@))
$(SUBDIRS) : 
    @echo Make dir: $@
    $(if $(wildcard $@), ,@mkdir $@)

test : $(TARGETS:%=%.test)
$(TARGETS:%=%.test) : %.test : %
    @echo ====== Test [$@] ======
    erl -noshell -pa $(dir $*) -s main start -s init stop
#   @echo +- Sub-Make: ---+ $1 +---
#   @$(MAKE) -kis -Oline -C $(dir $1)

.PHONY : clean all prepare
prepare : $(OUTPUT)  $(Makefiles) $(Modules)
$(OUTPUT) :
    @echo mkdir output: $(OUTPUT)
    $(if $(wildcard $(OUTPUT)), , mkdir $(OUTPUT))

clean :
    @echo Delete all subdirs and file under ebnin.
    @rm -r --force $(OUTPUT)  *.beam
```



## 🍀 Unit Test [CPL]

为了在 Make 脚本中测试程序，需要了解各种 shell 环境中如何使用 Exit Code：

```sh
    sh -c "false; exit 0" ; echo "should be zero: $?"
    sh -c 'exit 1'; if [ $? = 0 ]; then echo YES; else echo NO; fi;
```

1. Windows 传统命令行 CMD 使用 `echo %errorlevel%` 打印退出码，不等于 0 就是错误退出； 
2. PowerShell 使用 $LASTEXITCODE 获取退出码，或者 $? 获取布尔值，True 表示正常退出；
3. Bash 使用 $? 自动变量，比如 `echo $?` 显示 127 表示 False，程序错误退出；

潜在的问题：Msys2 MinGW 编译的程序出现非法指针时，内存违规访问，bash 不能检测到返回码，-1073741819 0xC0000005 STATUS_ACCESS_VIOLATION。2.3.1 NTSTATUS Values。

使用 Msys2 没有正确安装编译器版本，或者安装在错误的平台目录下，也可能导致编译出来的程序出现内存违规访问。因此，要确保编译器正常工作，编译生成的程序能够正常执行。

注意：虽然反斜杠 \ 符号在 Makefile 中并不是功能符号，它和其它一般字符一样对待，但是构建命令执行时，将它输入到 shell 中执行就会有转义字符的功能。所以，使用 make 命令时一般需要在 Makefile 当前目录下执行，如果不是，将使用斜杠 / 作为 Makefile 路径的目录分隔符。

Bash 支持字符串替换，3.5.3 Shell Parameter Expansion，表达式是 `${var/[/]pattern[/replacement]}`，其中一个斜杠可以省略，表示不做全局替换。但是对于 Makefile 中的反斜杠，它在输出到 shel 环境是就被当作了转义符号处理掉了。自带的 `$(patsubst pat,rep,text)` 函数又不能像 shell 环境中替换功能一样。对于真实文件路径，可以使用 `$(realpath ..\..\)` 这样的函数获取，它会自动转换反斜杠为斜杠。但是，如果文件不存在，它返回空字符串。也可以使用 `$(realpath $(dir $(lastword $(MAKEFILE_LIST))))` 获取当前 Makefile 脚本的父目录路径。注意，realpath 不带后尾斜杠，与 dir 函数不同。

```makefile
MAIN := $(lastword $(MAKEFILE_LIST))
SRC := $(realpath $(dir $(MAIN)))/
ROOT := $(realpath $(dir $(MAIN))../)/
$(info SRC: $(SRC))
$(info ROOT: $(ROOT))
```

另外，更重要的是不能使用 ifeq 或者 ifneq 对被程序的输出结果进行判断。因为条件指令是立即绑定模式，不能使用自动变量，或者 eval 函数设置的变量，只有 Makefile 中已有定义的全局变量才可以使用。

并且，内置函数 if 只能做字符串是否为空值的判断，不能做等值比较。Make v4.4 版本引入的 intcmp 函数才能比较数值的小于、等于、大于三种状态。所以判断结果是否相等，可以交给 shell 命令去判断。

    $(intcmp LHS,RHS[,LT-PART[,EQ-PART[,GT-PART]]])  v4.4

Make 还有一个做等值判断的 “诡计”是使用做局部匹配的 findstring 函数，其逻辑是：如果一个字符串 A 包含另一个字符串 B，并且这个 B 又包含 A，那么它们相等。我想可以发掘一些 GNU Make 没有直接提供，并且又可以通过组合各种逻辑实现的功能，大概是这个构建工具在功能实现上如此克制的原因吧。为此，这些专用的功能函数，可以使用专用脚本“保管”集中管理，需要引用就通过 include 指令加载，以下是 utilities.mk 函数库参考：

```makefile
# TRACE = 1
ifdef TRACE
Trace = $(warning $0('$1','$2'))
else
Trace :=
endif

# $(call counter, 1) = 1
# $(call counter, 2) = 3
# $(call counter,-3) = 0
counter = $(Trace)$(strip $(eval ID=$$(shell echo $$$$(( $1+$(if $($0_ID),$($0_ID),0) )) )) \
        $(eval $0_ID=$(ID)) $(ID) )

# $(call resetlist,1,a b c d) = a b c d
# $(call resetlist,2,a b c d) = b c d
# $(call resetlist,3,a b c d) = c d
restlist = $(Trace)$(wordlist 2,$(words $1),$1)
restlistn = $(Trace)$(wordlist $1,$(words $2),$2)

# $(call reverse,1 2 3 4) = 4 3 2 1
# $(call reverse,a b c d) = d c b a
reverse = $(Trace)$(strip $(if $1, $(call reverse,$(call restlist,$1)) $(firstword $1) ))

# $(call ifequal,a,b,true_expr,false_expr)
ifequal = $(Trace)$(if $(findstring $(findstring $1,$2),$1),$3,$4)
```

以下是用于构建待测试程序，以及进行测试的脚本，功能说明如下：

1. 测试程序 type.c 代码文件和 utilities.mk 函数库与 Makefile 共同存放于 src 目录；
2. 在任意目录中执行 make -f Makefile 进行编译、测试，输出存放于上一级 bin 目录；
3. 使用 GCC 编译器，DEBUG、RELEASE 两套基本配置，使用 make DEBUG=true 激活调试配置；
4. 配置了一条 test_hello 用于测试的规则，配合 EXPACT PASS FAILED 等变量输出相应测试信息；
5. 测试还不够完善，例如，在 PowerPC 构架 CPU 上运行测试程序就会输出 Big-Endian Machine。

```makefile
ROOT := $(patsubst %Makefile,%../,$(lastword $(MAKEFILE_LIST)))
OUT = $(ROOT)bin/
BIN_HELLO = $(ROOT)bin/type.exe
$(info Makefile: $(lastword $(MAKEFILE_LIST)))
$(info Root dir: $(ROOT))
$(info Output dir: $(OUT))
$(info Output binary: $(BIN_HELLO))

include $(ROOT)src/utilities.mk

CC = gcc
CONFIG_DEBUG := $(CFLAGS) -g3 -O0
CONFIG_RELEASE := $(CFLAGS) -O1 -s
ifdef DEBUG 
  CFLAGS = $(CONFIG_DEBUG)
  $(info Build config for DEBUG)
else
  CFLAGS = $(CONFIG_RELEASE)
  $(info Build config for RELEASE)
endif


EXPACT = [Hello World!: [0x0] 123]
PASS = ++Test Pass! expact $(EXPACT)
FAILED = --Test failed: expact $(EXPACT)

all : test_hello
    @echo $@: $^ : $(ROOT) CFLAGS:[$(CFLAGS)]

test_hello : $(BIN_HELLO)
#   @bash -c "Trigger test failed; exit 1"
#   @if [ "0" = "$$?" ]; then $(PASS); else $(FAILED) ; fi
    @echo $@ $(BIN_HELLO): 
    $(eval RESULT=[$(shell $(BIN_HELLO))])
    @echo "$(call ifequal,$(RESULT),$(EXPACT),$(PASS),$(FAILED) but got: $(RESULT))"

$(BIN_HELLO) : $(ROOT)src/type.c prepare_output
    @echo Build $@ : $<
    @echo Compiler version: "$(shell $(CC) --version | grep gcc)"
    $(CC) $(CFLAGS) -o $(BIN_HELLO) $(ROOT)src/type.c

prepare_output : $(OUT)
$(OUT) :
    @pwd
    mkdir -p "$(OUT)"

clean : 
    $(RM) $(OUT)*.*

.DEFAULT_GOAL = all
```

为了让编译与测试更加自动化，可以使用 Node watch 模块实时监视并执行命令：

```sh
npm install -g watch
watch 'echo -------watching------- && make -f Makefile' ./ 
```

Deno 也内置了 watch 功能，也可以直接通过命令行运行，但是它毕竟不是专用的 watch 工具，可以将以下功能编写到 js 或 ts 脚本文件中再执行，并且可以创造出一些自定义功能：

```sh
deno eval 'for await (const evt of Deno.watchFs("..")) { \
    let res = new Deno.Command("make", {args:["-f", "Makefile"]}).outputSync(); \
    console.log(new TextDecoder().decode(res.stderr), new TextDecoder().decode(res.stdout));}'
```


以下是作为一个要测试的使用的目标程序：

```cpp
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>  // from C99 standard

typedef struct _ByteChunk {
    int type;
} ByteChunk;

int main (int argc, char * argv[]) {
    int et = 0x1234;
    char isBigEndian = *(char *)&et ^ 0x34;
    if (isBigEndian == 0x26) {
        printf("Big-Endian Machine.\n");
    } else {
        // printf("Little-Endian Machine.\n");
    }

    ByteChunk ms;
    ms.type = isBigEndian==0? 0x00333231 : 0x31323300;
    printf("Hello %s: [0x%x] %s\n", "World!", isBigEndian, (char *)&ms);
    return 0;
}
```

字节序 Endianness 是在处理多字节的数据时，不同的 CPU 构架使用不同的方式。

1. x86、6502、Z80、VAX、PDP-11 等处理器为小端序；
2. 6800、68000、PowerPC 970、System/370、SPARC 等处理器为大端序；
3. ARM、PowerPC、DEC Alpha、SPARC V9、MIPS、PA-RISC 及 IA64 可配置字节序。

比如 0x1234 这个值（十进制 4660）：

| address | big-endian | little-endian |
|---------|------------|---------------|
| 0x0000  | 0x12       | 0x34          |
| 0x0001  | 0x34       | 0x12          |

- Big endian 大端序方式，PowerPC 或苹果 CPU 构架使用。
- Little endian 小端序方式，Intel x86 系统使用。


测试程序中，使用“123”字符串作为一个测试数据，由于 C 语言中的字符串使用 \0 作为结束标志，即 null-terminated string 格式。在一个四字节的整形数值中，其中三个字节位置设置为 “123”，最后一个字节需要设置为 null，否则打印函数就会因为边界失误面导出内存违规访问。通常，这个违规并不一定会发生，因为内存中有很多 null 值的位置，随意遇到一个 null 就可以终结这个字符串。但是，从逻辑上这就是违规的内存访问。

字节内部的比特位也有两种序，Most Significant Bit (MSB)，在二进制数中属于最高有效位，MSB 是最高加权位。Least Significant Bit (LSB) 在二进制数中意为最低有效位。一般来说，按书写习惯，MSB 位于二进制数的最左侧，LSB 位于二进制数的最右侧。

CPU 存储数据操作的最小单位是一个字节，至于字节内部的比特序如何，对于程序来说是一个黑盒子。

这其中有一个隐含信息：字符串按字节序保存。比如“123”这个字符串，字符“1”保存在内存代地址位置，“3”保存在高地址位置。如果在一个 int 内存空间保存，它就相当是数值的 0x00333231。如果按数值处理，就会根据不同 CPU 架构，有不同的顺序排列。因为 x86 是“反向”存储，所以它的值在 Hex 工具中看起来就和书面表达一样的顺序。

并且，在类型调整时，比如 int 变为 long long 类型或者是显式转型时，因为变量地址总是指向最低字节，LSB 又总是保存在最低内存位置，所以它不需要调整原数据。这个过程可以使用以下代码证明：

```cpp
    int e1 = 0x123456;
    int e2 = 0x12345678;
    printf("c1: %x, c2: %x", *(char *)&e1, *(char *)&e2);
    // c1: 56, c2: 78 <-- little-endian
    // c1: 12, c2: 12 <-- big-endian
```

而大端序则总是将 MSB 放置在最低内存位置，所以只需要获取第一个字节就可以判断数值的正负。

计算机电路先处理低位字节效率比较高，因为考虑进位借位，计算都从低位开始。所以，计算机的内部处理都是小端字节序。但是，人类通常还是书写习惯大端字节序。所以，除了计算机的内部处理，其他的场合几乎都是大端字节序，比如网络传输和文件储存。但是，如果你经常使用 Hex 工具做分析，那么小端序就更符号阅读习惯。


使用 C 语言定义结构体或联合体时，实践中通常和 typedef 一起使用，这样方便定义结构体类型的变量。但是，至今我仍记得结构体定义与 typedef 关键字使用时出现的混乱状态，让我毕生难忘。总得来说，定义一个结构体类型和实例化结构体对象，它们有部分语法结构会因为 typedef 关键字的使用而出现重叠，这也是混乱的主要来源。

假设要定义一个 ByteChunk 结构体，以及其实体变量 byteChunk，各种形式如下，当然还可以使用花括号对实例进行初始化：

```cpp
// typedef-free style
struct ByteChunk        { /* some filds */};
struct ByteChunk        { /* some filds */} byteChunk;
struct ByteChunk byteChunk;

// typedef style
typedef struct          { /* some filds */} ByteChunk;
typedef struct _ByteChunk { /* some filds */} ByteChunk;
typedef struct _ByteChunk ByteChunk;
ByteChunk byteChunk;
```



# 🐣 Makefile 光学教程
3. https://www.gnu.org/software/make/manual

Make 是最常用的基于宏编程的构建工具，诞生于 1977 年，斯图亚特·费尔德曼（Stuart Feldman）在贝尔实验室（Bell Labs）创立，主要用于 C 语言的项目。但是实际上 ，任何只要某个文件有变化，就要重新构建的项目，都可以用 Make 构建。

Makefile 构建脚本配置多种 targets，常用 make 命令用法如下：

1. *make all* Builds all derived files sufficient to declare the package built.
2. *make check* Runs any self-tests that the package may have.
3. *make install* Installs the package in a predetermined location.
4. *make clean* Removes all derived files.

命令中指定的参数就是 Makefile 脚本文件中规则定义的 Target，可以在脚本中使用 DEFAULT_GOAL 变量指定一个默认执行的 Target。Make 最基本的能力就是，可以根据规则定义的 Target 依赖文件更新状态来决定是否执行 Target 的重新编译。

Make 是一个宏编程工具，类似通用宏编程工具 GNU m4，执行 make 命令时，它就会读取 Makefile 脚本中的规则定义，并按宏符号定义对文件中的字符串进行扩展，即用宏定义的内容替换文件中相应的字符串，替换后文本应该包含要执行的命令，执行完这些相关的命令后，就完成了程序的编译工作。

Make 命令的默认输入文件是当前目录下的 GNUmakefile 或者 makefile 或者 Makefile，依次尝试读取，如果需要指定脚本文件，使用 -f 或 --file 或 --makefile=somefile 指定。

脚本中可以使用 include 指令原样地引用其它脚本文件，或者使用 -include filenames… 方式引用以避免在文件近缺失时引发错误，相当于 C/C++ 中引用头文件一样。make 会在当前目录、默认头文件目录中搜索，或者通过命令行参数 -I 或 --include-dir 指定搜索目录列表。

Makefile 脚本作用指令 make 执行编译工作的规则集合，它本身也需要根据项目变化而调整。自动构建系统中可能存在不止一个 Makefile 文件，一些可能是脚本自动生成的，所以会需要在 make 命令读取这些规则内容之前进行内容更新。在顶层 Makefile 规则中只可以设置某些 Target 依赖某些 Makefile 文件，并根据其更新状态来执行是否要更新其中的规则定义。每次更新重启、加载 Makefile，其相应的特殊变量 `MAKE_RESTARTS` 就增加一次以记录重启次数。参考文档 3.5 How Makefiles Are Remade。

如果知道某些 Makefile 脚本是不需要更新的，可以使用空实现的规则定义，其格式是 `target: ;`，注意使用单个分号以及使用分号结尾，并且与 Target 名称同在一行，参考手册 5.9 Using Empty Recipes。

一般来说，使用双冒号规则定义的 Target 或者是 .PHONY （内置的虚目标）会无条件地执行，而不管依赖文件是否有更新，参考手册 4.13 Double-Colon Rules。

但是，将这类规则应用到 MakeFile 时会导致死循环，make 会不断更新并读取被依赖的 Makefile，所以 make 对这类规则做了改变，禁止默认的无条件执行，而是无条忽略原本要执行的 Makefile 更新动作。所以，这个反常态的规则变化可以用来做加载优化，文件操作是 I/O 密集问题，操作的文件越少，程序性能就会越高，下面其中任何一条都可以避免 Makefile 的重复处理：

```makefile
    .PHONY: Makefile

    Makefile:: ;
```

脚本的基本解释流程，3.8 How Makefiles Are Parsed，GNU make 命令行为单位解释 Makefile： 

1. Read in a full logical line, including backslash-escaped lines.
2. Remove comments.
3. If the line begins with the recipe prefix character and we are in a rule context, add the line to the current recipe and read the next line.
4. Expand elements of the line which appear in an immediate expansion context.
5. Scan the line for a separator character, such as ‘:’ or ‘=’, to determine whether the line is a macro assignment or a rule.
6. Internalize the resulting operation and read the next line.

比如，手册给出的例子，单行编写的规则：

```makefile
    myrule = target : ; echo built

    $(myrule)
```

解释时，make 会将其重新分割成相应的行：

```makefile
    define myrule
    target:
            echo built
    endef

    $(myrule)
```


使用 Makefile 宏编程时，可以安装 Node.js watch 监视工具，它可以在监视到文件有更新时，及时调用指定的命令以自动地完成原来需要手工执行的命令行：

```sh
npm install -g watch
watch "echo ---====+ Watching +====--- && make -f Makefile" --wait 0.1 .
watch "echo ---====+ Watching +====--- && make -j4 -Otarget" --wait 0.1 .
watch "echo ---====+ Watching +====--- && make -j4 -Otarget" --wait 0.1 -f filter.js .
```

注意，使用 watch 工具时，生成的文件最好不要放在监视中的目录下，这会触发命令的重新执行。当然，一个逻辑完全正确的 Makefile 绝不会出现重复编译。

这个 watch 工具模拟了 Linux watch 工具，但是它们实现原理不一样，Node watch 是通过轮询文件状态信息实现，Linux 则提供了通用通知机制 watch_notification，建立在标准管道驱动之上，它可以有效地将来自内核的通知消息拼接到用 户空间打开的管道中，这就使用得 Linux watch 命令更加有效率。

使用过滤器只可以监视指定的文件，过滤器文件是一个返回过滤函数的 Node.js 模块脚本，过滤函数名称随意，但需要在作为 exports 返回，然后通过 -f 或者 --filter 将文件名传递给 watch 工具：

```js
const fs = require('node:fs')
const path = require('node:path')
const list = ["filter.js","Makefile","EMakefile","m4tutor.m4","hi.scm"]

/**
 * @param {string}   f   - File name
 * @param {fs.Stats} curr - File Statments
 */
function filter (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
        // Finished walking the tree
    } else if (prev === null) {
        // file is a new file
    } else if (curr.nlink === 0) {
        // file was removed
    } else {
        // file was changed
    }
    return list.indexOf( path.basename(f) )>=0 && curr.isFile
}

module.exports = filter;
```


## 🍀 Basic Concepts

按照 GNU m4 宏编程经验， Macros 即代码生成工具，输入输出都是字符串，输入字符中所有宏符号都会被相应的宏定义内容替换。但是 make 作为一种宏编程工具，有些功能差异，它并不像 GNU m4 这种通用的宏编程工具，出于约束它的灵活性同时降低使用风险，make 增加了许多约束条件，比如在 Target 规则之外不能使用宏输出内容。

GNU m4 作为一个通用的宏编程工具，它的核心概念就是字符串流，输入输出都是字符串流。宏定义的功能就是替换输入流中匹配的字符串，再将替换后的数据发送到输出流，这个过程称之为宏展开 macro expannsion。

比如，以下是一个 m4tutor.m4 脚本，即字符串文件，它将作为 GNU m4 宏处理器的输入流：

```makefile
    define(say_hello, Hello World!)
    say_hello
    cc
```

宏处理器处理字符串输入流唯一规则就是按宏定义进行内容替换，最简单的宏定义就是使用 define 指令，或者直接通过命令行定义宏符号，如下：

    m4 -Dcc=list(1,2,3) m4tutor.m4

那么这个执行过程就是：读取输入流中的第一行，得到一个宏定义，最后可以输出的只有换行符。然后读取第二行内容，是一个字符串，刚好 say_hello 这个字符串对应一个宏定义，那么替换它得到 Hello World! 包含换行符，然后再输出。最后读取到一个字符串 cc，同样它对应一个宏定义，从命令行中传入的宏定义，同样要替换，得到 List(1,2,3)。整个宏脚本输出内容如下：

```sh

Hello World!
list(1,2,3)
```

以上就是宏编程的一个基本流程概念：字符串替换！Makefile 脚本编程也适用这一基本原理。


Makefile 宏编程核心概念有两个，*Target* 和 *Rule*，其次是指令 directive 用于实现 make 脚本功能的内置宏。另外就是附加的一些宏脚本编程能力，比如变量、宏指令、宏参数、include 其它脚本、Secondary Expansion 二次展开，以及各种特殊功能符号等等，它们功能上都类似 GNU m4 的宏替换过程。Makefile 规则定义就是描述如何生成 Targer 之间的逻辑关系，也就是 Target 之间可以形成的依赖网络。


```makefile
    # 4.2 Rule Syntax
    target … : prerequisites …
            recipe
            …
            …
```

默认配置下，recipe 部分编写的命令内容必须使用 Tab 符号作为行首字符。可以使用 .RECIPEPREFIX 内置变量来定义。但这个功能不一定所有 make 都支持，在不支持的情况下就会提示错误信息：missing separator.

```makefile
    .RECIPEPREFIX = ++
    all:
    ++ @echo Hello, world
```

Makefile 最基本的能力就是根据 Target 所设置的依赖决定是否需要执行 recipe 中编写的编译命令来生成最新的程序。这其中涉及了文件更新时间戳的检测行为，包括 Target 命令匹配的文件，以及规则中冒号右侧指定的依赖文件。

当然，不是所有规则都需要对应文件，像以上示范中的规则，一个命名为 all 的目标，没有任何依赖文件，它本身也不对应磁盘中的文件，这条规则只需要在命令行中执行一条 echo 命令，打印一段字符串。

依赖关系链由 Target 与先决条件 prerequisites 之间的联系产生，因为先决条件中的任何项都可以被定义为 Target，也就形成了 A_Target -> Prerequisite -> B_Target -> Prerequisite 这样的链条。当执行 make A_Target 时，根据依赖链，会一起递归到最尾端的 Target 并执行其规则定义的 recipes，然后逐级返回执行上一层的 recipes，直到 A_Target 的部分。


但是，只要这链条中间任何一环节破坏，Target 命名与上一层的先决条件名称不匹配，那么后面的 Target 定义即失效。除非调用 make 命令时，直接指定那些处于断链状态的 Target。依赖关系的判断，是根据宏扩展后的结果进行的，所以定义规则时，可以在规则中的 Targets 或先决条件中使用任意的宏函数，来灵活地构建依赖关系网络。

本质上，Makefile 就是一个描述依赖关系的脚本，例如如下一个 `Makefile` 规则定义：

```makefile
all: foo
foo: foo.o bar.o baz.o
.c.o:
        $(CC) $(CFLAGS) -c $< -o $@
.l.c:
        $(LEX) $< && mv lex.yy.c $@
clean:
        rm *.o temp
```

先抛开 $ 宏调用等特殊功能符号，以上这个 Makefile 它描述的是以下这样的依赖关系，最终是构建出 all 这个目标，它代表要链接各种目标文件的可执行程序。整个依赖关系网络由规则定义，链接命令由依赖关系推断。make 命令知道扩展名为 .o 的目标文件的处理，以及如何调用 C/C++ 编译器和链接程序，通过 $(CC) 和 $(LEX) 分别调用 C/C++ 编译器和 lex 词法解释器生成命令，两个外部命令完成相应的编译工作。这种自动推断能力就是 make 的隐含能力，具有隐含功能的规则定义也就称为 Implicit Rules，参考手册 2.5 Letting make Deduce the Recipes。除非需要，开发者可以指定编译器的各种参数以修正默认的配置：

               all
                |
               foo
                |
        .-------+-------.
       /        |        \
    foo.o     bar.o     baz.o
      |         |         |
    foo.c     bar.c     baz.c
                          |
                        baz.l

这里的 Makefile 编写了两条旧风格的 suffix rule，即通过后缀识别行为/定义的规则，包含 double-suffix 和 single-suffix 两种。其中 .c .o .l 三个都是后缀，对应了 C 语言源代码、目标文件和词法规则分析器三种源文件。这种连续使用 source suffix 和 target suffix 后缀的形式就是 double-suffix，也即是双后缀形式的规则定义，从其执行结果可以知道这种规则就是将前 source 文件处理成后 target 文件。Single-suffix 则是保留 source surfix 文件后缀。

Make 和 GNU m4 一样默认使用 # 作为注解符号。另外，如果行内容超长，可以在先进性行尾使用斜杠 \ 转义换行符号，便后一行内容与前一行内容拼接起来成为一行，即相当于断行连接。

一般的 Makefile 规则以冒号为分界，*Ordinary Rules*，左侧表示输出称为 `Target`，可以有多个输出，它本身就是一般的没有隐含功能的字符串标识，右侧表示输入称之为依赖或者先决条件。更复杂的规则可以参考官方文档，Complex Makefile 示例中有完整的规则参考。语法中的 recipe 单词为食谱、处方，也是规则实现、促使规则达成的意思，就是定义构建目标时要执行的命令。像以上这种规则，因为 Target 部分字符具有特殊功能的规则，称之为隐式规则 *Implict Rules*，与之对应的就是显式规则 *Explicit rules*，普通规则就是显式规则。

Implict Rules vs. Explicit rules，弄清楚隐式规则与显式规则的区别，是深入掌握各使用 make 的必要条件。

要区分什么规则是显式或者是隐式，根本上来说有一个参考标准：就是会不会触发 GNU make 内置的规则，如果会触发内置规则，那么就可以认定是隐式规则。内置规则之所以称为隐式规则，是因为它们不会用户在 Makefile 脚本中将这些规则编写出来，make 会根据目标的扩展名或者磁盘对应名称的文件类型去调用相应的内置规则。这个过程是隐式的，不透明的（Makefile 脚本没有相应规则定义）。参考手册 10.2 Catalogue of Built-In Rules。

所有内置规则可以通过 make -p 命令查询，它们涉及以下编程语言或者文件类型：

01. Compiling C programs
02. Compiling C++ programs
03. Compiling Pascal programs
04. Compiling Fortran and Ratfor programs
05. Preprocessing Fortran and Ratfor programs
06. Compiling Modula-2 programs
07. Assembling and preprocessing assembler programs
08. Linking a single object file
09. Yacc for C programs
10. Lex for C programs
11. Lex for Ratfor programs
12. Making Lint Libraries from C, Yacc, or Lex programs
13. TeX and Web
14. Texinfo and Info
15. Revision Control System (RCS)
16. Scientific Committee on Consumer Safety (SCCS)

所有隐式规则涉及的文件扩展名可以通过 .SUFFIXES 内置变量中列表。

以下脚本演示了各种经常出现的规则定义形式，在这里它们都可以认为是显式规，除了最后一个注解掉规则。依赖关系链上没有不清晰的环节，所有依赖，从 all 到各个 .lex 文件的依赖都有定义，所以不会触发 GNU make 内置的规则，因此它们可认为是显式规则。

如果 all 只与最后一个注解掉规则 a.tex 搭配使用，那么就会触发 make 内置规则，这就有两种可能的结果：一是磁盘有相应的 .lex 文件，make 自动应用隐式规则的命令；二是缺失对应磁盘文件，Makefile 又不能提供完整的依赖关系，缺失了 b.lex 和 c.tex 两个依赖的目标规则，所以提示错误信息：No rule to make target 'b.tex' 等等。**因为其中一条依赖构建失败，那么就会导致上层目标构建失败，all 目标中的命令就不会执行。**

为何让最后一条规则也“显式”起来，那么可以搭配 %.tex 这样的模式匹配规则、静态模式匹配规则，或者使用变量等等方式来解决大量文件依赖关系的处理。注意：使用这些灵活的规则非常容易触发隐式规则，并且 Makefile 可以使用 inlude 指令来引用更多的脚本文件，这会使得脚本变得异常复杂。

```makefile
# 6.3 Advanced Features for Reference to Variables
foo := a.o b.o l.a c.o
bar := $(foo:.o=.c)
# bar := a.c b.c  l.a c.c
```

其中，Static Pertern Rules 是非常特别的一种模式匹配规则，它不像其它规则（包括一般的模式匹配规则）可以不指定依赖，静态模式匹配规则就是为了批量处理依赖设计的。使用模式匹配符号 % 可以将匹配到的内容（stem）替换到依赖列表中的名称中形成新的依赖列表。当然，静态模式匹配可以省略依赖条件部分，同时也可以在 Targets 上使用高级变量引用特性，这样既可以达到不引入新的依赖，同时又可以实现对目标名称的分解处理。

```makefile
LEXS = a.tex b.tex c.tex

all : $(LEXS)
    @echo all done: $^

# a.tex b.tex c.tex : 
#   @echo "Explicit rules (By Literal): $@"

# %.tex :
#   @echo "Explicit rules (By Pertern): $@"

# $(LEXS) : %.tex : %
# $(LEXS:%.tex=%):
#   @echo "Explicit rules (Static Pertern Rules): $@ [$^]"

$(LEXS):
  @echo "Explicit rules (By Variable): $@"

# a.tex:
#     @echo "Implicit rules (By Literal): $@"
```

另外一个问题是规则的优先级问题，以下脚本片段提供参考：

```makefile
BIBS = rrs.bib abbrevs.bib

all : $(BIBS)
    @echo "all = $^"

# Group Literal Rules
rrs.bib :
    @echo "rrs.bib = $@"
abbrevs.bib :
    @echo "abbrevs.bib = $@"
rrs.bib abbrevs.bib :  # This rule will rewrite both rules above.
    @echo "md = $@"

# Group Double-Colon Rules
abb%.bib ::
    @echo "abb%.bib :: = $@"
abbrevs.bib ::
    @echo "abbrevs.bib:: = $@"
rrs.bib ::
    @echo "rrs.bib :: = $@"
%.bib ::
    @echo "%.bib :: = $@"

# Group Pattern Rules
%.bib : # This rule will be rewrite by the follow one.
    @echo "%.bib 1st = $@"
%.bib :
    @echo "%.bib 2nd = $@"
abb%.bib :
    @echo "abb%.bib = $@"
```

1. 字面量定义方式（Literal Rules）优先于 Double-Colon Rules，优先于 Pattern Rules；
2. 同类形规则，Target 命名使用的字面量字符越多越优先，即信息精细度高；
3. 单冒号规则中，新定义会覆盖旧定义，但保留依赖列表，只替换命令块；
4. 双冒号规则各自独立执行不存在定义覆盖，但是 Target 不能同时定义单、双冒号规则；

多目标规则与单目标规则不同，多目标规则中不能混用多种匹配方式，只使用字面量匹配，或者只使用模式匹配。
否则就会得到警告提示：

    mixed implicit and normal rules: deprecated syntax

因为 Static Pertern Rules 通常会形成新的依赖列表，单独考虑。双冒号规则参考手册 4.13 Double-Colon Rules。

如果脚本中规则依赖已经存在定义，但是没有被执行，那么最有可能的原因有二：

1. 一是可能是优先级没处理好。
2. 二是依赖的目标文件已经存在对应的磁盘文件。

解决方法就是重新整理规则定义，对于磁盘文件已经存在，但是还要执行构建命令的规则（通常不需要这样做），就可以使用 .PHONY 内置目标规则，它会忽略磁盘文件的状态信息，无条件地执行命令块。

隐式规则中涉及文件搜索的算法过程参考手册：

10.4 Chains of Implicit Rules
10.8 Implicit Rule Search Algorithm

对于复杂的 Makefile 脚本的调用有三大法器：

1. 注解！使用注解可以最大程序地缩小 Makefile 的复杂度；
2. 清空！将脚本运行目录下的文件清空（使用新文件夹）再运行；
3. 调试！GNU make 使用 -d 或者 --debug[=FLAGS] 参数打印解释器运行状态；
4. 禁止隐式！使用 -r, --no-builtin-rules 或者脚本中禁用内置隐含规则，避免加入意外规则。

```makefile
# Disable all built-in implicit rules
MAKEFLAGS += --no-builtin-rules

# Alternative syntax that does the same thing
.SUFFIXES:

# Disable implicit rules for .o files
%.o : %.c

# Disable pattern rules you don't want
% : %.sh
```

Windows 系统下使用 GNU make 工具的常见问题：无论构建的结果是否需要更新，即使源文件没有修改、更新，执行 make 命令时总是重新构建工程。此问题通常是因为编写规则时，目标名称没有使用 .exe 后缀，导致 make 检测不到工程输出的二进制程序文件，从而触发构建工程。Linux 等系统下，应用程序是没有 .exe 扩展名称的，因此不会有这样的问题。

调试信息输出参考如下，它们完整打印从 make 加载隐式规则到目标文件检测的解释过程：

```sh
GNU Make 4.3
Built for x86_64-pc-msys
Copyright (C) 1988-2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
Reading makefiles...
Reading makefile 'Makefile'...
Updating makefiles....
 Considering target file 'Makefile'.
  Looking for an implicit rule for 'Makefile'.
  Trying pattern rule with stem 'Makefile'.
  Trying implicit prerequisite 'Makefile.o'.
  Trying implicit prerequisite 'Makefile.c'.
  Trying implicit prerequisite 'Makefile.cc'.
  Trying implicit prerequisite 'Makefile.C'.
  Trying implicit prerequisite 'Makefile.cpp'.
  ...
  Looking for a rule with intermediate file 'Makefile.o'.
   Avoiding implicit rule recursion.
  No implicit rule found for 'Makefile'.
  Finished prerequisites of target file 'Makefile'.
 No need to remake target 'Makefile'.
Updating goal targets....
Considering target file 'all'.
 File 'all' does not exist.
  Considering target file 'rrs.bib'.
   File 'rrs.bib' does not exist.
   Finished prerequisites of target file 'rrs.bib'.
  Must remake target 'rrs.bib'.
Putting child 0xa00046600 (rrs.bib) PID 731 on the chain.
Live child 0xa00046600 (rrs.bib) PID 731 
md: = rrs.bib
Reaping winning child 0xa00046600 PID 731 
Removing child 0xa00046600 PID 731 from chain.
  Successfully remade target file 'rrs.bib'.
  Considering target file 'abbrevs.bib'.
   Finished prerequisites of target file 'abbrevs.bib'.
  No need to remake target 'abbrevs.bib'.
```

Make 在处理 makefiles 脚本依赖关系（include）期间，会触发 Remaking，涉及 MAKE_RESTARTS 内置变量值的更新。然后再处理构建目标的规则定义与执行命令块，这就是 make 命令执行的两个主要阶段。

提炼一下调试器输出信息，大体可以总结出以下几个步骤，以下展示一个目标及其一个依赖目标的构建过程，从文件搜索检测、到依赖目标的搜索检测，最后创建新进程构建目标：

1. Reading makefile 'Makefile'...
2. Updating makefiles....
3. Updating goal targets....
4. Considering target file 'all'.
4.1  File 'all' does not exist.
4.1.1   Considering target file 'rrs.bib'.
4.1.1.1    File 'rrs.bib' does not exist.
4.1.1.2    Finished prerequisites of target file 'rrs.bib'.
4.1.1.3    Must remake target 'rrs.bib'.
5. Putting child 0xa00046600 (rrs.bib) PID 731 on the chain.
6. Live child 0xa00046600 (rrs.bib) PID 731 

很巧合，打印调试信息时出来一个 731，这是多么令人恐怖的数字啊！

https://allthatsinteresting.com/unit-731
Inside Unit 731, Japan’s Disturbing Human Experiments Program During World War II By Richard Stockton

https://allthatsinteresting.com/shiro-ishii-unit-731
The Twisted Story Of Shiro Ishii, The Josef Mengele Of World War 2 Japan By Andrew Lenoir

General Shiro Ishii, the commander of Unit 731.

石井四郎——一个来自地狱的外科医生、将军！



## 🍀 Rules Definition
1. https://www.gnu.org/software/make/manual/make.html#Rule-Example
2. https://www.gnu.org/software/make/manual/make.html#Rule-Introduction
3. https://www.gnu.org/software/make/manual/make.html#Reading-Makefiles
4. https://www.gnu.org/software/make/manual/make.html#Recipe-Syntax
1. https://www.gnu.org/software/make/manual/make.html#Suffix-Rules
2. https://www.gnu.org/software/make/manual/make.html#Complex-Makefile

手册参考：

2.1 What a Rule Looks Like
3.7 How make Reads a Makefile
4.1 Rule Example
4.3 Types of Prerequisites
4.5 Searching Directories for Prerequisites
4.6 Phony Targets
4.10 Multiple Targets in a Rule
4.12 Static Pattern Rules
4.13 Double-Colon Rules
4.14 Generating Prerequisites Automatically
5.1 Recipe Syntax
5.4 Parallel Execution
7 Conditional Parts of Makefiles
10.5 Defining and Redefining Pattern Rules
10.5.3 Automatic Variables
10.5.4 How Patterns Match
10.6 Defining Last-Resort Default Rules
10.7 Old-Fashioned Suffix Rules
16.6 Standard Targets for Users

总的来说，Makefile 规则定义可以简化理解为：

1. Targets 指代要执行命令生成的文件；
2. Prerequisites 指代 Targets 依赖的文件，这些文件本身又可以定义为相应的 Target；
3. Recipes 指代生成 Target 要执行的命令，make 会通过 shell -c 执行这些命令；

Target 与依赖文件之间的依赖关系通过它们的名称进行匹配，只要一个 Target 名称出现在某一个依赖文件路径之内，即可以建立 Targets 之间的依赖关系。

依赖关系一般是空格分隔的字符串，属于 Makefile 中的列表，依赖列表有两种定义形式：

    # 4.3 Types of Prerequisites
    targets : normal-prerequisites | order-only-prerequisites

1. normal-prerequisites 任何一个依赖有更新，则需要重新构建建目标。
2. order-only-prerequisites 此依赖列表中文件的更新，不触发重新构建目标。

Order-only 应该译作“仅指示”或者“整理过的”，这种依赖可以称作指示性依赖，也就是说这种依赖出现在依赖列表中的管道符号后面依赖都是起指示性功能，供阅读者参考，但本身不会参数 make 的更新时间条件比较运算。搭配 .PHONY 目标使用，就可以实现那些 Order-only 目标在依赖它的目标发生构建时才会进行重新构建。Order-only 先决条件可以用来做一些准备工作，比如创建目录结构、准备临时数据等等。

在定位 Target 文件或依赖文件时，make 默认以当前工作目录为参考，而不所执行的 Makefile 目录。工作目录即命令当前运行所在目录，使用 . 表示，上级目录使用 .. 表示。Unix 类型系统中，~/ 还表示用户的 Home 目录。Makefile 中可以使用内置谈到 `VPATH` 添加依赖文件搜索路径，默认使用冒号作为目录之间的分隔符号。Windows 系统则使用分号作为目录之间的分隔符号。另外，还可以使用 `vpath` 指令来设置模式匹配，给匹配到的依赖文件指定一个搜索目录。此外，还可以使用 wildcard 函数配合 * 通配符来获取文件列表。 GNU Makefile 中，在先决条件（prerequisites）中使用通配符（如 *, ?, [...]）需要特别注意，因为 Make 的通配符展开时机和模式匹配规则可能会导致意外的行为。Make 在解析阶段（parse phase）会立即展开通配符，而不是在运行时。正确方法是使用 wildcard 函数，比如通过 wildcard 函数动态获取文件列表 $(wildcard *.txt)。

```makefile
# vpath pattern directories
# vpath   %.c   C:/coding/md-code/erlang/port/ebin
VPATH = one/src : more/src :  C:/coding/md-code/erlang/port/ebin

all : pp
#   touch ebin/pp.c
    @echo VPATH: $(word 1,$(VPATH))

# port.h is order-only which never cause pp remake.
pp : pp.c | port.h

# port.h is normal prerequisite which cause pp remake when it updated.
# pp : pp.c port.h  

.DEFAULT_GOAL = all
```

每条规则定义中，Recipes 指代生成 Target 要执行的命令，但是这部分是可选的，即一条规则只有 Target 名称和冒号是必需的，依赖和命令都是可选的内容。并且，如果需要编写命令，那么按默认设置，就一定要使用 Tab 符号作为行首字符。


另一个比较让人难以理解的规则，可能是模式匹配规则 *Pattern Rule*，它会在 Target 名称和先决条件中使用 % 符号来做匹配工作。并且按照依赖关系的处理，Taget 中的 % 符号会和上层目标的先决条件进行匹配处理。一旦上层 Target 的先决条件也使用了 % 做模式匹配，那么就有非常大的可能导致下层的 Target 与上层建立不了依赖联系，这完全取决于宏扩展结果生成的上层先决条件中的内容。

模式匹配规则 *Pattern Rule* 也是隐式规则的一种，这种规则在 Target 命名中使用了 % 通配符号来匹配其它 Target 规则定义中的依赖文件。Multiple Targets 规则中经常需要模式匹配规则来处理大量的文件。通配符 % 匹配任意非空白字符，但可以包含合法的符号字符。并且，最重要的一条是，% 符号匹配到的内容会被替换到为 Targets 指定的依赖文件 Prerequisites 之中，得到展开状态的依赖文件。所以，在每一个依赖文件中只能使用一个 % 符号，这个符号匹配到的内容称为主干 stem，可以通过自动变量 $* 来引用它。

注意，模式匹配规则中，不能像多目标那样定义编写多个 Target 命名并使用 % 符号。并且，模式匹配属性隐式规则，也不能和显式规则混用，总之不能编写多个 Targets。

1. https://www.gnu.org/software/make/manual/make.html#Special-Targets
2. https://www.gnu.org/software/make/manual/make.html#Pattern-Rules
3. https://www.gnu.org/software/make/manual/make.html#Static-Pattern
4. https://www.gnu.org/software/make/manual/make.html#Error-Messages


Static Pattern Rules 规则定义中，目标匹配模式 `target-pattern` 和前提条件匹配模式 `prereq-patterns`，用于计算先决条件如果应用到每个 Target 之上。

    # 4.12.1 Syntax of Static Pattern Rules
    targets …: target-pattern: prereq-patterns …
            recipe
            …

当然，静态模式匹配可以省略依赖条件部分，同时也可以在 Targets 上使用高级变量引用特性，这样既可以达到不引入新的依赖，同时又可以实现对目标名称的分解处理。

```makefile
# 6.3 Advanced Features for Reference to Variables
foo := a.o b.o l.a c.o
bar := $(foo:.o=.c)
# bar := a.c b.c  l.a c.c
```

除了在规则中使用 % 模式匹配，还可以在 wildcard 函数中使用 * 通配符来获取文件或目录列表，可以同时获取多种文件类型，比如 `$(wildcard *.erl *.hrl)`，每种类型文件都是一个排序过的列表。

目标匹配模式 `target-pattern` 和前提条件匹配模式 `prereq-patterns` 说明如何计算每个目标的前提条件。每个目标都与目标模式相匹配，以提取目标名称的一部分，称为词干。这个词干被替换到每个prereq模式中，以形成先决条件名称（每个preeq模式中有一个）。

每个模式匹配都包含一个“%”字符以匹配 Target 名称中的一部分，称之为 stem 主干。只有在 target-pattern 与 Target 名称完全匹配时，比如在一条 `foo.o : %.o : src/%.c %.h` 规则中，Target 名称为 `foo.o` 与目标模式 `%.o` 就是完全匹配，主干部分 `foo` 替换到每一个 `prereq-patterns` 匹配模式中，并且先决匹配模式中只能有一个 % 符号。最后，得到 Target 与 `src/foo.c` 和 `foo.h` 两个先决条件的依赖关系。

模式匹配规则中，Target 名称，即包含 % 符号的字符串会和上层目标的依赖条目进行匹配，这个匹配只是部分匹配，只需要上层依赖文件路径中出现了可以匹配 Target 名称的内容就算是匹配。

在多条模式匹配规则中，% 匹配到的主干内容越短，执行优先级越高，即提供额外的字符越多匹配越细致。以下示范中演示了这个匹配优先级的作用，其中 b% 不会被执行，因为对于匹配 bar 这样的目标，另外一条 ba% 有更细致的匹配，而 % 提供的匹配信息最粗放，它也是最后的备选规则：

```makefile
    all : foo far
    foo far: f%: src/b%.c
    %: ;   @echo -% $@
    b%: ;  @echo -b% $@
    f%: ;  @echo -f% $@
    ba%: ; @echo -ba% $@
    bo%: ; @echo -bo% $@

    .DEFAULT_GOAL = all
```

参考输出：

    -bo% src/boo.c
    -f% foo
    -ba% src/bar.c
    -f% far
    -% all


在缺件 RecIpes 的规则中，它的执行与完全形式的规则有些许差异。以下代码为例：

```makefile
    all : port.o
        @echo all done: $^

    % :
        @echo -% $@
    %.o : %.c
        @echo -%.o $@
    %.c : nothing
        @echo -%.c $@

    .PHONY: nothing
    .nothing : ;

    .DEFAULT_GOAL = all
```

这个示例所有规则都是显式规则，没有任何规则规则起作用，因为整条依赖关系链是完备的，all -> port.o -> port.c -> nothing (.PHONY)，没有任何一个环节有依赖缺失，也没有命令缺件。其中 nothing 这个目标是为了演示内置目标 .PHONY 而加入的依赖，即表示没有任何依赖。但实事上 nothing 是受 `% :` 这条后备规则接管的，如果缺失这条规则，就会因为依赖关系链缺失而导致 make 使用隐式规则来处理 nothing 这个目标。

通过省略不同规则中的命令定义，将带出 make 很多奇妙的行为，前提假设磁盘中没有像 port 这样命名的文件，如果存在则会有不一样的执行结果：

1. all 目标的命令定义省略，整个脚本原样运行，因为会被 `% :` 这条后备规则接管；
2. 注解掉 `% :` 这条后备规则，同时移除 nothing 依赖，同样是显式规则，按依赖执行；
3. 但是，只要中间任何环节注解掉，那么就会错误，错误有两种基本形式：
    4. 缺失依赖的磁盘文件，一般信息提示是：No such file or directory  
    5. 缺失规则定义错误：No rule to make target `xxx', needed by `yyy'. 

详细错误码信息参考手册 Appendix B Errors Generated by Make。

*依赖完备*和*规则完备*同时满足的前提下，脚本就会完全按编写好的命令执行，不会执行任何其它命令，因为 make 隐式规则不生效，不会以调用额外的命令。即使磁盘存在相应的源代码文件，make 也不会调用隐式规则去处理它们。

依赖完备是指任何目标的依赖项都有相应的 Target 定义，规则完备是指任何规则都有 Target 和 Recipes 定义，因为依赖列表可以为空，所以没有强制要求。但是如果指定了依赖，那么任何一个依赖缺失相应的 Target 定义同时又没有相应的磁盘文件，那么就不算是规则完备。那么出现的结果就是，当前依赖列表中的其它依赖条件都会失效，并且由 cmake 使用相应的隐式规则接管。

所以，总结起来，依赖完备的条件是满足以下其中之一：

1. 任何目标的依赖文件都有相应的 Target 定义；
2. 或者任何目标的依赖文件都有相应的磁盘文件，文件类型包含在 .SUFFIXES 列表中；

另外，以上说明也从侧面上描述了一个事实：在目标定义了相应的命令就不能用隐式规则中命令替换，假设存在适用的隐式规则。所以，问题是在添加一个 Target 的依赖项时，应该考虑使用什么规则去处理它，是显式定义规则，还是有意使用隐式规则，又或者一知半解地使用了隐式规则，三者总有其一。

如果，磁盘中存在 port 这样命令的文件，并且它是 make 隐式规则中包含的文件类型，.SUFFIXES 内容变量包含了这些文件的扩展名。在脚本文件缺失依赖关系的条件下，make 就会按隐式规则自动推断出，什么样的依赖文件应该执行什么命令去生成。比如，缺失 port.o 文件，这是 C/C++ 语言的目标文件，那么应该调用编译器编译源代码生成它。如果确实存在相应的源代码文件，那么就可以成功生成，否则编译器报错找不到相应文件。

其中 % 这条后备规则，虽然它可以匹配任何 Target，但是由于它是最低优先级的模式匹配规则，所以在隐式规则发生作用时，它就不会被执行，除非依赖文件不是 make 可能自动处理的类型。

隐式规则是相当多的一套预设规则，涉及 C/C++ Pascal LEX YACC TEX WEAVE CWEAVE TANGLE
等等编译语言或文档工具的使用，以致需要专门编写章节内容去说明它。


例子中 clean 这种规则没有要生成的 Target 文件输出，这种规则定义的目标称为 *Phony Targets* 或者虚目标。虚目标的一个特性是：不进行 Target 文件的更新检查，总是会在触发时执行相应的命令，常用来定义 clean 这种用来做清理工作的目标。做目录递归处理时，也可以将子目录添加到 .PHONY 的先决条件列表中，这样就可以在子目录已经存的情况下无条件地处理。

但是，.PHONY 目标有一个副作用，它依赖列表中指定的依赖（目标），将标记为“不需要生成相应文件”，即在构建项目时，这些依赖文件的更新状态将不参与比较，这些标记为虚拟文件就不会触发受依赖方目标文件的更新。另一方面，那些依赖了 .PHONY 的目标，总是会认定需要执行重新构建！

可以使用 Order-only 依赖方式来避免触发目标重新构建，只需要将声明为 .PHONY 的目标添加到其依赖列表中的管道符号 | 之后即可，Oerder-only 依赖不会触发重新构建动作。

Make 定义了一系列的内置 Target，名称及功能说明如，参考手册 4.9 Special Built-in Target Names。

01. .DEFAULT 用于收纳还没有相应规则定义的目标，并为其提供后选的命令设置；
02. .DELETE_ON_ERROR 在执行命令错误退出、返回错误码时删除目标文件；
03. .EXPORT_ALL_VARIABLES 导出所有变量符号供 Sub-make 进程使用；
04. .IGNORE 忽略构建目标时出现的错误信息；
05. .INTERMEDIATE 作为中间文件处理（intermediate files）；
06. .LOW_RESOLUTION_TIME 低时间分辨模式，避免因为系统不支持高分时间戳而误判断；
07. .NOTINTERMEDIATE 不要作为蹭文件处理；
08. .NOTPARALLEL 不要并行运行，使用命令行 -j 参数在此目标不失效；
09. .ONESHELL 在同个 shell 进程中执行目标定义的命令；
10. .PHONY 虚文件目标，不判断磁盘文件是否存在或其更新时间，总是认定重新构建；
11. .POSIX 使用 POSIX 兼容模式 脚本，当然 GNU make 脚本特性依然有效；
12. .PRECIOUS 珍贵目标，即构建失败也不要删除其文件；
13. .SECONDARY 次要目标像中间文件类似处理，但不会自动删除文件，避免繁复的重新编译；
14. .SECONDEXPANSION 进行宏定义二次扩展的目标；
15. .SILENT 静默目标，等效使用命令参数 -s or --silent，又或者在命令前使用 @ 符号 ；
16. .SUFFIXES 使用文件后缀作为规则的目标，参考 Old-Fashioned Suffix Rules；

中间文件是指隐式规则推断出构建目标需要产生的临时文件，make 默认会在构建收尾阶段清理掉中间文件
（Removing intermediate files...），即通过执行 rm 命令删除临时文件。GCC 也会产生中间文件，
包括汇编代码文件，如果需要保留中间文件，可以带上 -save-temps 参数运行编译。Makefile 可以使用
没有先决条件的 ``.NOTINTERMEDIATE`` 特殊目标，或者将目标标记为珍贵目标。

```
# To prevent execute: Removing intermediate files...
# .NOTINTERMEDIATE: 
.PRECIOUS: .build/%.exe
    @echo "FEATURES: $(.FEATURES)"
```

中间文件就像所有其他目标文件一样，但中间文档的处理有两点差别，其中一点就是在构建收尾时自动删除。
另一点就是它只在正在构建的目标有更新的依赖时，才会构建临时文件以重新构建目标。

以上这些内置目标定义的使用语法形式都一样：将其它目标添加到其依赖列表中，即声明这些目标拥有这些内置目标定义特殊功能属性。

对于支持时间高分辨的系统，文件更新时间具有亚秒值 sub-second，而对于不支持的系统，那么执行像 `cp -p` 这样的文件复制命令时，会丢弃亚秒部分，从而导致文件的更新时间比实际值要早一些，这个误差有可能导致 make 误差为旧文件。

注意：recipe 所有行必须由一个 tab 键起首，后面跟着 commands 等等，不支持空格缩进。否则会引发 Makefile: missing separator.  Stop. 


```makefile
all: foo
foo: foo.o bar.o baz.o
.c.o:
        $(CC) $(CFLAGS) -c $< -o $@
.l.c:
        $(LEX) $< && mv lex.yy.c $@
clean:
        rm *.o temp
```

例子这种以冒号作为标志的规则称为 *Single-Colon Rules*，它们的执行有序，有明确的前后依赖关系。另外一种规则称之为 *Double-Colon Rules*，即使用双冒号的规则，这种规则都是独立的规则，Target 在旧于依赖文件的情况下，或者没有先决条件的情况下，所以双冒号规则都会被执行，也就没有顺序执行的特性。双冒号规则的独立性还体现在：它可以为同名 Target 提供多个定义，这样就可以有多个命令块。而单冒号规则不具有这种特性，如果存在多个同名的单冒号定义的 Target，那么就会提示旧定义的命令块将被覆盖。但是原依赖关系不变，并且新定义的规则中的依赖会叠加。注意，使用 include 指令，根据指令出现的位置前、后来决定引入的定义是被替换还替换当前脚本的 Target 定义。include 指令和 ifeq 这样的指令一样是全局作用的，不会因为放在那个 Target 后面就属于哪个 Target。

    'warning: overriding recipe for target `XXX''
    'warning: ignoring old recipe for target `XXX''

以下示例，两个 pp 目标中定义的命令块都会被执行，它们各自独立拥有相应的依赖列表，如果是单冒号规，则合并依赖，并且输 pp2 oo bb：

```makefile
all: pp
bb :    ;  @echo bb $^; # bb
oo :    ;  @echo oo $^; # pp1 bb
pp :: bb ; @echo pp1 $^; # oo
pp :: oo ; @echo pp2 $^; # pp2 oo
```

Makefile 中定义的 Target 可以有多条规则，但多条规则只能使用同样的规则类型，单冒号的或者双冒号的规则。具有相同 Target 的双冒号规则各自完全独立，每个双冒号规则都单独处理，就像处理具有不同目标的规则一样。双冒号规则按照它们在 Makefile 中出现的顺序执行。然而，双冒号规则真正有意义的情况是那些执行配方的顺序无关紧要的情况。

双冒号规则有些晦涩难懂，而且通常不太有用；它们只是提供了一种更新 Target 的机制。

注意，make 目标就是根据先决条件产生相应的输出文件，所以一般的规则中，Target 对应的是系统磁盘中的文件，亦即 make 会隐含地进行 Target 和先决条件文件的检查。检查工作一项重要任务是比较 Target 与其先决条件文件、文件夹的更新时间，如果发现先决条件有更新，则触发 Target 的重新编译。

这里可能导致有个 Bug，就是如果执行 make clean all 这样构建动作时，因为先检查到了文件存在并且没有需要更新，然后文件、文件夹被删除，再构建 all 目标时就可能会出错。

注意：如果 Target 文件被移动，或者像 erlc 这样的编译器会按 -o 参数指定的目录输出编译文件，这时就要注意确保 Target 包含正确的路径，否则 make 会因为定位不到目标文件而始终重新编译 Target，不管依赖文件是否有更新。

规则中使用模式匹配，就会有一个依赖文件搜索的过程。当应用在多先决条件的规则中时，就会出现一个隐含的约束，代码演示如下：

```makefile
    %.beam: %.erl %.hrl
        @echo Start buildding $(basename $(@F)) : $@ < $<
        @erlc -o $(Output) $<
```

因为在同一条规则中，通配符 % 表示的是相同的匹配内容，一旦触发规则，那么 Target 模式匹配 % 匹配到的部分（stem 主干）就会替换到先决条件的 % 号中，一旦找不到其中一个文件，比如 ei_test.erl 和 ei_test.hrl 其中一个缺失则将产生错误。其中打印的信号不一定准确表现依赖关系，因为可能存在多组源代码的情况会出现错配现象：

    make: No rule to make target 'port_test.beam', needed by 'ei_test'.  Stop.：

在 Multiple Targets 形式规则中，有不同使用形式：

0. Independent Targets 形式中所有 Targets 都是独立的，语法上使用冒号分隔先决条件；
1. Grouped Targets 形式中所有 Targets 用空格隔开，或者使用变量列表，列表后跟 `&:`；
2. Static Pattern Rules 形式中，多个 Target 后还有 target-pattern 和 prereq-patterns；

对于分组形式，Target 不能出现在多个分组，除非使用 `&::` 而不是 `&:` 符号，其中 & 符号代表 all 的意思。分组形式的更新有一个特点：当其中一个 Target 先决条件更新，所有 Targets 都需要更新编译。

此时可以在 reciple 可以使用以下自动变量，注意 @ 符号用在 shell 命令前以消隐当前当的内容，避免在执行命令时将命令本身打印出来：

1. `$^` 自动变量引用完整的先决条件列表；
2. `$<` 自动变量引用规则中的首个先决条件；
3. `$@` 自动变量引用触发当前规则的 Target。
4. `$*` 自动变量引用 % 模式匹配到的部分。
5. `$?` 自动变量引用先决条件列表中比当前 Target 更新的那一部分。

提示：使用 cc -M 或者 cc -MM 命令可以打印指定 C/C++ 源代码中的头文件依赖关系。
Linux 命令 `ls -ld */*/` 可以打印二级子目录，使用通配符加斜杠组合 `*/` 成一个目录匹配模式。参考手册 4.14 Generating Prerequisites Automatically。

在子目录嵌套执行 make 时注意，因为 make 每执行一行命令都会返回到默认的工作目录。所以需要执行 cd 命令后执行的命令，必需并行执行，手册参考 5.7 Recursive Use of make。

如果不喜欢命令并行执行，又或者命令太长，那么就需要使用在单独一个 shell 进程中执行命令，内置目标 .ONESHELL 就是干这种事的，将要以 One Shell 方式执行的目标添加作为其依赖项，参考手册 5.3.1 Using One Shell。

```makefile
    .ONESHELL:
    foo : bar/lose
        cd $(<D)
        gobble $(<F) > ../$@
```

Make 命令默认使用 shell 程序的 -c 或者 -ec 参数来执行规则定义的命令，后者在 POSIX 标准模式中使用。通过内置变量 SHELL 和 .SHELLFLAGS 可以修改这些参数值，参考手册 5.3.2 Choosing the Shell。

```makefile
    SHELL = $(COMSPEC)
    SHELL = /bin/sh
    SHELLFLAGS = -c
```

注意，条件判断宏不能使用 Tab 缩进，并且参数列表使用圆括号时，需要用空格与宏名称隔开。这个空格隔开参数列表好理解，但是不能缩进这种要求实在太奇异了。但是，这种语法的怪异是有原因的。根据手册说明，3.7.2 Conditional Directives - Conditional directives are parsed immediately，也就是条件会在 make 一运行时就解释，不再有后续的宏扩展功能，这也就是为何不能在条件宏中使用局部变量的因由。

Makefile 中有两种条件使用方式，其中一种就是 ifeq 和 ifneq 这种怪异的方式，这种形式的条件中不能使用 Target 特定变量，只能使用全局变量。第二种方式是条件函数，这种方式可以使用局部变量。但是在函数内编写多行的命令不是很方便，因此可以考虑修改脚本逻辑，使用全局变量替代局部变量。但至少可以通过自定义函数来解决问题，可以使用传入的参数或者自动变量，不过依然不能在函数内进行变量赋值或在内部的条件语句使用局部变量。

因为函数只是在做宏展开，最后输出字符串依然是当作 shell 命令执行的。所以，事实上编写 Makefile 规则的 Recipes 部分就是在进行 Linxu shell 编程！只不过可以使用 Makefile 中定义的宏函数来生成 shell 脚本而已。参考手册 16.2 Utilities in Makefiles。

    ifneq  (arg1, arg2)          ifeq  (arg1, arg2)
    ifneq 'arg1' 'arg2'         ifeq 'arg1' 'arg2'
    ifneq "arg1" "arg2"         ifeq "arg1" "arg2"
    ifneq "arg1" 'arg2'         ifeq "arg1" 'arg2'
    ifneq 'arg1' "arg2"         ifeq 'arg1' "arg2"
    [TAB]...                  [TAB]...
    else                      else
    [TAB]...                  [TAB]...
    endif                     endif

    $(if condition,then-part[,else-part])
    $(or condition1[,condition2[,condition3…]])
    $(and condition1[,condition2[,condition3…]])
    $(intcmp lhs,rhs[,lt-part[,eq-part[,gt-part]]])  v4.4

注意条件函数 if 的判断条件，即 condition 是空字符串 "" 决定结果也是为 then-part，除非变量没有定义。条件函数的宏体并不是一开始就扩展的，而只根据条件设定扩展对应的部分。

1. https://www.gnu.org/software/make/manual/make.html#Conditionals
2. https://www.gnu.org/software/make/manual/make.html#Conditional-Functions
3. https://www.gnu.org/software/make/manual/make.html#index-pattern_002dspecific-variables


## 🍀 Variables
1. https://www.gnu.org/software/make/manual/make.html#Automatic-Variables
2. https://www.gnu.org/software/make/manual/make.html#Reading-Makefiles
3. https://www.gnu.org/software/make/manual/make.html#MAKE-Variable

Makefile 中的变量应该是最简单的宏定义，变量名不能包含 characters not containing :#= 或者空白字符，并且也不应该使用句点开关头，因为由内置 Target 名称使用。变量赋值有四种，其中两种常用的基本方式：= 号赋值也叫做延后绑定赋值，变量的值绑定为等号右侧变量最后确定的值。而立即绑定赋值使用 := 进行赋值，右侧变量当前是什么内容，那么变量就被赋予什么值，后续不会再改变。

    # 6.2.2 Simply Expanded Variable Assignment
    x := foo
    y := $(x) bar # foo bar
    z  = $(x) bar # later bar
    x := later

四种变量赋值（扩展）方式如下：

1. `=` Recursively Expanded Variable Assignment
2. `:=` Simply Expanded Variable Assignment
3. `::=` Immediately Expanded Variable Assignment
4. `?=` Conditional Variable Assignment

获取变量的值使用 `$(var)` 语法，变量名也可以使用其它变量，嵌套表达。使用 `$(flavor variable)` 函数可以获取变量的赋值方式的信息，延后绑定赋值即文档所说的的 Recursive flavor 方式：

1. `undefined` if variable was never defined.
2. `recursive` if variable is a recursively expanded variable.
3. `simple` if variable is a simply expanded variable.

除以上四种赋值方式，另外还提供了赋值时的两种高级特性，6.3 Advanced Features：

1. Substitution References 替换变量值，例如 `bar := $(foo:.o=.c)`，替换 .o 为 .c；
2. Computed Variable Names 计算变量名，例如 `foo := $($bar)`，实际变量由 bar 变量指定;

取变量值的简化表达是使用 $ 符号，也可以使用 value 函数取变量值。使用 $ 符号时，可以不使用圆括号，如果变量只有一个字符，如自动变量 $0 $1 $2 ... 等等：

```makefile
a = App
ab = Able

$(info a or ab? $ab) # Appb
```

高级变量引用表达式，不仅可以用在变量赋值上，还可以在 Targets 规则声明中使用。静态模式匹配也可以在 Targets 上使用高级变量引用特性，并且省略依赖条件部分，这样既可以达到不引入新的依赖，同时又可以实现对目标名称的分解处理。示范如下，通过变量高级引用与 Static Pattern Rules 配合，就可以对大量目标的分解处理。对于，不需要执行命令的目标，还可以使用空命令规则，所谓空命令规则即使用 shell 的一个分号（语句分隔符号）作为命令块的替代，参考 5.9 Using Empty Recipes。

```makefile
targets = a b c d
all : $(targets)
    @echo "All done: $@ <-- $^"

$(targets) : % : %.c
    @echo "Build $@ <-- $^"

$(targets:%=%.c) :
    @echo "Compile $*.o <-- $@"

c.c d.c : ; # Empty Recipes Rule to be fine!
```

注意：静态模式匹配虽然可以实现以大量目标名称的分解处理，但本身也导致目标路径定位的复杂，所以需要更小心地处理 Targets 和依赖文件的路径是否与磁盘的目录结构对应。否则就很容易导致 make 检测不到文件，而总是触发重新构建，相当于将 Makefile 最核心的依赖处理功能封禁掉。

另外，Makefile 可以定义程序测试功能，只要程序重新编译，就执行测试。一个测试可以定义为一个 Target，而这个 Target 实质上没有对应的磁盘文件，但是可以使用 touch 命令将它关联到一个空文件，这个文件主要功能就是供 Make 用来做更新时间判断。

变量只可以在脚本文件中定义，也可以在环境变量、命令行中定义，即 command line 类型的变量，例如 `make foo=bar`。使用 origin 函数可以获取变量定义来源信息。调用函数 `$(origin variable)` 返回的结果可能是：

1. `undefined` if variable was never defined.
2. `default` if variable has a default definition, as is usual with CC and so on. 
3. `environment` if variable was inherited from the environment provided to make.
4. `environment override` if variable was inherited from the environment provided to make, and is overriding a setting for variable in the makefile as a result of the ‘-e’option.
5. `file` if variable was defined in a makefile.
6. `command line` if variable was defined on the command line.
7. `override` if variable was defined with an override directive in a makefile.
8. `automatic` if variable is an automatic variable defined for the execution of the recipe for each rule (see Automatic Variables).

变量的存活期可以是文件级别，随整个 Makefile 执行时存活。也可以是随 let 或者 foreach 函数执行时存活，这种变量只能在函数调用时有效，函数结束变量消失。自动变量是比如常用的变量，会在 Target 执行时自动替换为与当前规则相关的的值。也可以主动调用 undefine 撤消变量的定义。

```makefile
    # 8.5 The let Function
    reverse = $(let first rest,$1,\
                $(if $(rest),$(call reverse,$(rest)) )$(first))

    all: ; @echo $(call reverse,d c b a)
```

可以为某个目标设置局部变量，这种变量被称为目标特定变量“Target-specific Variable”，需要在 Target 规则前定义，在规则触发时就会对变量进行赋值。它和全局变量作用范围不同，只在特定规则触发时有效，所以其值也只在目标规则执行时的作用范围内有效。特定变量的值可以使用自动变量，这些自动变量会在规则执行时被替换成相应的值。类似的变量还是模式匹配特定变量，在特定模式触发时变量才有效。

    # 6.11 Target-specific Variable Values
    target … : variable-assignment

    # 6.12 Pattern-specific Variable Values
    pattern … : variable-assignment

Makefile 一些特殊变量，6.14 Other Special Variables

    myprog: myprog.o file1.o file2.o
           $(CC) $(CFLAGS) $(LDFLAGS) -o $@ $^ $(LDLIBS)
    myprog: .EXTRA_PREREQS = $(CC)

1. `MAKEFILE_LIST`  包含当前 make 命令已经解释到的所有 Makefile 文件列表。
2. `MAKE_RESTARTS` 在 make 重启脚本时自动设置此变量，而递归调用深度记录在 MAKELEVEL。
3. `MAKE_TERMOUT` 和 `MAKE_TERMERR` 会自动设置为相应的终端类型，对于标准文件则会停用控制台彩色。
4. `.DEFAULT_GOAL`   变量指定一个默认执行的构建目标，以备命令行没有指定 Target。
5. `.RECIPEPREFIX` 设置规则的命令行的首字符，默认是 TAB，可以随用随改。
6. `.VARIABLES`  包含目前已经定义的所有全局变量的列表。
7. `.FEATURES`  包含当前 make 命令支持的所有特性的列表。
8. `.INCLUDE_DIRS` 包含 Makefile 文件搜索目录列表。
9. `.EXTRA_PREREQS` 通过目标绑定变量给它设置额外的依赖，这些依赖不会出现在常用依赖的自动变量中。


使用 .EXTRA_PREREQS 特殊变量以及通过 target-specific 变量给目标添加额外依赖：

```makefile
    myprog: myprog.o file1.o file2.o
           $(CC) $(CFLAGS) $(LDFLAGS) -o $@ $^ $(LDLIBS)
    myprog: .EXTRA_PREREQS = $(CC)
```

额外依赖功能可以在不用修改原脚本的前提下实现变更目标依赖文件，只需要将它声明在另一个脚本，比如命名为 extra.mk，然后运行 make 命令时将它包含进行来：

    make -f extra.mk -f Makefile


Makefile 中有许多变量由隐式规则使用，10.3 Variables Used by Implicit Rules。如果脚本中没有对 make 可以知识的文件类型提供规则定义，那么 make 就会自行推断使用相应的构建命令。比如，Target 为 C 语言源文件，则会执行 `$(CC) -c $(CFLAGS) $(CPPFLAGS)` 编译命令，并且可以多级推断，这就是 10.4 Chains of Implicit Rules。隐式规则中使用的 CFLAGS 或者 CPPFLAGS 都是隐式变量。


## 🍀 Functions

Make 定义函数和定义变量差别不大，因为都是宏定义，主要是在使用方式上的差别。变量除了可以使用简化的 = 或 := 或 ::= 等等符号进行定义，还有一种通用的变量、函数定义，就是使用 define 指令定义用户宏。使用 define 指令定义宏函数时，也和变量一样，有使用 = 和 := 两种基本的绑定方式，使用 = 号或者省略 = 号表示延后绑定（deferred），是递归处理模式，宏体展开的内容始终是所使用宏符号的最后定义的值。而使用 := 的是立即绑定模式，当前定义这个宏函数时相应的宏定义是什么值，就会立即扩展变成字符串替换到宏函数体中相应的位置。

    # 3.7.1 Variable Assignment
    immediate = deferred
    immediate ?= deferred
    immediate := immediate
    immediate ::= immediate
    immediate :::= immediate-with-escape
    immediate += deferred or immediate
    immediate != immediate

这宏是作用函数使用还是作用变量使用，完全取决于调用方式，使用 call 函数调用，用户宏就是函数，使用 $() 方式就是变量。用户宏函数只能通过 call 调用，不能像内置函数一样使用 $(sort 3,2,1) 这样的语法调用。每个参数都在宏函数调用前展开，函数内可以接收 $1 ~ $9 这几个参数，GNU m4 则没有这个数量限制，$0 还是一样指代宏名。

    # 8.1 Function Call Syntax
    $(function arguments)   # $(function a,b,c...)
    ${function arguments}   # ${function a,b,c...}

    # 8.8 The call Function
    $(call variable,param,param,…)

宏函数有 9 个参数的限制，实际上包括宏名就是 10 个，那么怎么处理更多参数的情形？解决方法也简单：使用列表传递参数，Makefile 列表就是空白字符（空格）隔开的多个字符串。

```makefile
    define Fun
    @echo Fun args test: $0 - $1 ... $9 [$(Srcs)]
    endef

    define Fun_Imm_ver :=
    @echo Fun args test: $0 - $1 ... $9 [$(Srcs)]
    endef

    SOME_FUN_RET = $(call Fun_Imm_ver,123)
    Srcs := NOTHING

    all : $(Targets)

        @echo var: $(Fun)
        @echo bad: $(Fun a b c d e f g h i j k)
        @echo bad: $(Fun ,a,b,c,d,e,f,g,h,i,j,k)
        @echo call: $(call Fun,a b c d,e,f,g,h,i,j,k)
        @echo ret: $(SOME_FUN_RET)
```

以下是输出内容参考：

    var: @echo Fun args test: - ... [NOTHING]
    bad:
    bad:
    call: @echo Fun args test: Fun - a b c d ... [NOTHING]
    ret: @echo Fun args test: - ... [foo.c bar.c]

从返回结果上看，在规则 recipes 中调用自定义函数与全局位置调用两种方式是有差别的，后者会丢失 $0 或者 $1 这样的局部变量，这样的自动变量只在执行 Target 构建的过程中有。

宏编程的本质就是符号替换，宏函数的返回值也就是宏体扩展后，最终替换结果的内容。

Makefiel 中只有一个列表循环处理函数 foreach，它与 shell 命令行中的 for 循环不同，即宏与命令行功能的差别。Makefile 中的列表只是空格分隔的字符串，此外，它们仅仅就是字符串而已，列表不需要使用括号包括，否则会得到很奇怪的输出：

```makefile
$(info info: $(foreach X,(x y z),X=$(X)))
$(info info: $(foreach X,x y z,X=$(X)))
# info: X=(x X=y X=z)  
# info: X=x X=y X=z 
```

另外一个函数 let 也是用来处理列表的，不要被它的名字误导，它不是用来周全赋值的，至少不是给变量赋值。文档给出的示范用它来实现一个列表倒序函数：

```makefile
    # 8.5 The let Function
    $(let var [var ...],[list],text)
    reverse = $(let first rest,$1,\
                $(if $(rest),$(call reverse,$(rest)) )$(first))
```

可以从源代码 NEWS 文档找到其更新的信息，要求 Make 4.4 版本，旧版本将不能体现此函数功能：

    2020-12-06  Jouke Witteveen  <j.witteveen@gmail.com>

        Create $(let ...) providing lexically scoped variables
        Add a new function $(let ...) which allows lexically scoped variables.

        * NEWS: Add information on this feature.
        * doc/make.texi (Let Function): Document the 'let' function.
        * src/function.c (func_let): Create the 'let' built-in function.
        * tests/scripts/functions/let: Test the 'let' built-in function.

    Version 4.4 (31 Oct 2022)

    * New feature: The $(let ...) function
      This function allows user-defined functions to define a set of local
      variables: values can be assigned to these variables from within the
      user-defined function and they will not impact global variable assignments.
      Implementation provided by Jouke Witteveen <j.witteveen@gmail.com>


Makefile 提供了一个 eval 函数，和 JavaScript 中的 eval 类似，它可以通过文本构造出 Makefile 脚本，就像是直接在脚本文件后面编写脚本代码一样：

    * A new function is defined: $(eval ...).  The arguments to this
      function should expand to makefile commands, which will then be
      evaluated as if they had appeared in the makefile.  In combination
      with define/endef multiline variable definitions this is an extremely
      powerful capability.  The $(value ...) function is also sometimes
      useful here.

使用 eval 函数，比如简单的使用它来增加 info 函数调用的脚本，另外更重要的是 eval 函数提供了一种在命令块中修改变量值的途径，此外别无它法：

```makefile
$(eval ID=$$(shell echo "1+2=?" ))
$(eval ID=$$(shell echo $$$$((1+2)) ))
$(eval $$(info Eval info: $$(ID) ))
$(eval ID=$$(shell echo $$$$$$$$$$$$$$$$$$ )) # what that hell?
```

但是，eval 不能循环使用同一个变量，即不能从一个变量取值并且又给它赋值：

    Recursive variable 'ID' references itself (eventually).

重新整理一下以上内容，编写一个不需要通过 shell 写文件来实现的步进计数函数：

```makefile
inc = $(eval ID=$$(shell echo $$$$(( $1+$(if $($0_ID),$($0_ID),0) )) )) \
        $(eval $0_ID=$(ID)) $(ID)
%:
    @echo "$@: Get ID Variable. $(call inc,1)"
```

说明一下 inc 自增函数的逻辑：首先是 eval 函数定义了一段“将要”被 make 执行的代码，即 ID
=xxx 的变量赋值语句。并且这个值需要借助 shell 的 `$((x+y+z))` 这种算术支持。其中运行使用到的值有两个：一是来自函数调用时 call 函数传递来过的参数 $1，它表示步长值。然后另一个值来自一个为了避免 eval 函数循环引用而加入的 inc_ID 变量，这个变量使用了 $0 自动变量表示，它指代函数名称 inc，组合得到这个变量的名称。

小心使用 $ 符，还需要了解 shell 系统可能与之冲突的内容，比如 Makefile 脚本中使用 `echo $$(ID)`，那么就对应 shell 环境中的 `$(ID)`，即调用 id 命令，输出 uid gid groups 等等信息。eval 函数中，还要注意二次展开问题，以上化码中，第一次展开是 eval 函数调用时导致 `$$(shel)` 展开为 `$(shel)` 函数调用并附加到正在执行的 Makefile 脚本代码后面，还有 `$$$$((1+2))` 展开为 `$$((1+2))`。在执行这些通过 eval 增加的脚本时，就会调用 shell 函数，并且 `$$((1+2))` 做二次展开变成 `$((1+2))` 执行 shell 环境中的算术运算。这个过程有点绕，但就是 Second Expansion 这回事。

```makefile
    PROGRAMS    = server client

    server_OBJS = server.o server_priv.o server_access.o
    server_LIBS = priv protocol

    client_OBJS = client.o client_api.o client_mem.o
    client_LIBS = protocol

    .PHONY: all
    all: $(PROGRAMS)

    define PROGRAM_template =
     $(1): $$($(1)_OBJS) $$($(1)_LIBS:%=-l%)
     ALL_OBJS   += $$($(1)_OBJS)
    endef

    $(foreach prog,$(PROGRAMS),$(eval $(call PROGRAM_template,$(prog))))

    $(PROGRAMS):
            $(LINK.o) $^ $(LDLIBS) -o $@

    clean:
            rm -f $(ALL_OBJS) $(PROGRAMS)
```

内置函数的使用，文件内容读取，以演示两种文件读取方法，file 函数和 shell 命令：

```makefile
@echo $(word 4,$(file < makefile))
@echo $(subst \n,"@@@",$(shell cat $(wildcard makefile)))
@echo $(join ,$(wordlist 1,80,$(file < makefile)))
```

注意，因为 shell 是宏函数处理，读取的内容还在宏展开的处理过程，所以 # 注解符号后的内容将不会被 echo 命令输出。并且，echo 也不能处理多行内容输出，除了第一行，其它内容都可能被当作不能识别的命令处理。使用 join 内置函数可以对内容进行并行处理，使用 wordlist 可以抽取其中若干个词。多行文件不需要使用 subst 替换换行符号，它直接当作列表处理。

GNU 还有许多高级的扩展编程能力，已经提供 GNU Glue 编程，这是一种  Scheme programming language。还可以编写扩展插件，通过 load 指令加载并运行。


## 🔄 Secondary Expansion
1. https://www.gnu.org/software/make/manual/make.html#Secondary-Expansion
2. https://www.gnu.org/software/make/manual/make.html#Static-Pattern

Make 规则解释过程工作于两个阶段，读取规则定义阶段，和更新规则阶段。对于 Target 的依赖部分，make 引入了二次扩展，所谓二次扩展就是对宏定义展开的基础上再做一次扩展，也就需要经过两轮宏符号替换操作，参考手册 3.9 Secondary Expansion。

二次扩展一般同结合 $$ 转义符号使用，因为 $ 符号是功能符号，用于获取变量值，或者用于调用内置的宏函数。比如 $(value var) 这个函数调用就相当 $(var) 获取变量值。利用转义后的符号，就可以避免一些不需要在第一轮宏展开的符号被替换，比如 $@, $* 这些自动变量。

要触发二次扩展，就需要使用 .SECONDEXPANSION 这个内置的 Target 命名，并且要在其它 Target 使用二次扩展依赖之前定义它。

```makefile
    .SECONDEXPANSION:
    AVAR = top
    onefile: $(AVAR)
    twofile: $$(AVAR)
    AVAR = bottom

    % : ; @echo $@
    .DEFAULT_GOAL = twofile
```

对于使用转义符号的 `$$(AVAR)` 来说，在经过第一轮宏展开，应该得到 `$(AVAR)`，但运行中没有使用二次展开将得到一个 "$" 字符。如果是使用 `{AVAR}` 花括号形式，没有使二次展开将得到空字符串。出现这种结果可能是由于 `(AVAR)` 或者 `{AVAR}` 并不是合法的语法形式，被过滤掉了。 

二次扩展可以应用在不同的规则类型上：

1. Secondary Expansion of Explicit Rules
2. Secondary Expansion of Implicit Rules
3. Secondary Expansion of Static Pattern Rules

通过使用宏定义的二次展开，可以在定义 Target 规则时获得非常巧妙的功能：

```makefile
    .SECONDEXPANSION:
    main_OBJS := main.o try.o test.o
    lib_OBJS := lib.o api.o

    main lib: $$($$@_OBJS)

    % : ; @echo += $@
    %.o : ; @echo +- $@
    .DEFAULT_GOAL = main
```

以上演示了通过二次展开，让 $@ 这个自动变量和后缀拼接后得到一个对象文件依赖列表。另外，使用了两条模式匹配规则，前一条只使用 % 用于匹配所以显式的 Target 依赖，后一条使用了 %.o 用于匹配所有目标文件。

因为 make 的自动推断功能会自动识别 .o 这种常用的扩展名文件，并且会推导出相应的命令，如果没有 %.o 这条模式匹配规则，则会执行 make 推导出现的命令。显式定义了这条规则后，就以显式定义的为准，而不会去执行自动推导的命令，参考手册 2.5 Letting make Deduce the Recipes。

为何 % 这种模式匹配不会匹配上 .o 这种文件呢，即使是 %.o 也不行？大概是习惯，模式匹配不用于 make 自动推断出来的 Target。% 模式匹配是匹配其它 Target 的依赖列表，并且是进行了宏展开后的依赖列表中的条目，包括从命令行中传入的目标，例如 `make anything`，参考手册 10.5 Defining and Redefining Pattern Rules。

注意：模式匹配中的通配符 % 和文件操作中的通配符 * 是不同用途的通配符，后者用于文件处理，配置 wildcard 函数使用，例如 `$(wildcard *.c *.h)` 将获得一个列表，列表的前半部分是 C 源文件，后面半部分是头文件，它们经过了排序。另外，模式匹配规则定义常常与 $* 自动蛮量一起使用，它代表 % 符号匹配到的内容。

使用 Pattern Rule 还需要注意一个异常：如果模式目标过期或对应的文件不存在，并且不需要构建它，那么这样的 Target 就不会导致其他目标被认为过期。注意，这个历史异常将在 GNU make 未来版本中被删除，不应被依赖。如果检测到这种情况，make 将生成一个警告模式，pattern recipe did not update peer target。然而，无法确保 make 检测到所有此类情况。应该自行确保 Pattern Target 在运行时会得到更新。

以下是文档给出的 Explicit Rules 示范，演示了二次展开中自动变量的状态：

```makefile
.SECONDEXPANSION:

foo: foo.1 bar.1 $$< $$^ $$+    # line #1
foo: foo.2 bar.2 $$< $$^ $$+    # line #2
foo: foo.3 bar.3 $$< $$^ $$+    # line #3
foo: $$< $$(join $$^, .ext .ext) $$+
    @echo 2: $^ 

% : 
    @echo ALL: $@ - $^
.DEFAULT_GOAL = foo
```

1.  `$<` 自动变量表示依赖列表中的第一个依赖项；
2.  `$^` 自动变量表示整个依赖列表，列表中各依赖项之以空格隔开；
3.  `$+` 类似 $^，只是按顺序包含目标在 Makefile 中的依赖列表，配合链接程序使用；
4.  `$*` 模式匹配 % 符号匹配到的内容，称为主干 stem 并会替换依赖文件 % 符号；

第一行依赖列表，所有自动变量展开为空字符串，因此此时依赖关系还没有建立。

第二行依赖列表，三个自动变量分别展开为 `foo.1`，`foo.1 bar.1`，`foo.1 bar.1`。

第三行依赖列表，三个自动变量分别展开为 `foo.1`，`foo.1 bar.1 foo.2 bar.2`，`foo.1 bar.1 foo.2 bar.2 foo.1 foo.1 bar.1 foo.1 bar.1`。

以上是文档描述内容，但是无法在脚本程序中进行验证。

以下代码演示了 .SECONDEXPANSION 内置目标的两种使用方式：一是直接编写在要做二次展开的 Target 定义之前，二是将 Target 使用其依赖项添加到依赖列表。

```makefile
# .SECONDEXPANSION : %  %.c  %.h  %.o

all : port  
    @echo all done: $^
port : port.o
    @echo port done: $@ - $^
%.c :
    @echo done %.c: $@ - $^
%.h :
    @echo done %.h: $@ - $^
# % :
#   @echo done %: $@ - $^

.SECONDEXPANSION :
%.o : $$(addprefix %, .c .h) foo.h
    @echo done %.o: $@ - $^

# .PHONY: clean all
clean:
    @sleep 1.5
    rm -f port.o port.exe

.DEFAULT_GOAL = all
```

事实上这里的 addprefix 函数调用其实不需要二次展开，脚本输出参考：

```makefile
    done %.h: foo.h -
    done %.o: port.o - port.c port.h foo.h
    port done: port - port.o
    all done: port
```

以下是 Static Pattern Rules 和 Implicit Rules 合体的二次展开示范例子：

```makefile
.SECONDEXPANSION:
foo : bar
foo foz: f%: bo%
%: $$< $$^ $$+ $$*
    @echo -- $+

.DEFAULT_GOAL = foo
```

当这个隐式规则由 foo 这个目标触发执行时，$$< 二次展开为 bar，即首个依赖，$$^ 和 $$+ 都展开为 bar booo，最后 $$* 展开为 oo 即模式匹配 % 符号匹配到的主干内容。最后，$$* 匹配到的主干为 foo。

但是，由于模式匹配只有一 % 没有其它字符，所以它会匹配到这里定义的所有依赖条目，这就会形成循环依赖。比如，构建 bar 目标时，模式匹配规则就得到一条 `bar : $$< $$^ $$+ $$*` 依赖规则，二次展开替换为 `bar : bar`，因为是 bar 目标的首条依赖规则，除了 $$* 匹配到的主干为 bar 之外，其它三个自动变量都是空字符。而这个就是循环依赖，make 不允许这种规则，所以打印出来的消息中显示 $+ 自动变量是空字符。

    make: Circular Makefile <- Makefile dependency dropped.
    make: Circular bar <- bar dependency dropped.
    --

如果由 foo 触发目标的构建，那么就会有更多的依赖需要处理，情况复杂一点。其中第一个依赖就是 bar，然后匹配到第三条规则形成 `bar : bar` 循环依赖，当前的依赖链条结束，make 给出错误信息提示 Circular bar。但是依赖已经添加到 $+ 自动变量中包含的依赖列表，即 `foo : bar bar`。就当前目标而言 bar 本身在出现第一次循环依赖就结束了依赖关系的处理，所以它本身的依赖列表是空字符。

然后，处理第二条规则，通过静态模式匹配，增加了一个 booo 依赖，此时 $+ 依赖列表就叠加了 booo 得到 `bar booo`，可以看到它是按 Makefile 规则中的依赖列表顺序叠加的。同样地，booo 也会在第三条规则中形成循环依赖，当前的依赖链条结束，make 给出错误信息提示 Circular booo。

最后，其它自动变量也会在循环依赖出现之前向 $+ 列表添加相应的依赖条目。其中 $< 始终是指向第一个依赖 bar，这就是为何最终结果会出现 `bar bar booo` 这样的依赖。然后是 $^ 指向当前目标规则中的完整依赖列表，它不像 $+ 那样会将目标的所有规则中的依赖叠加起来，所以它指向的是 `bar booo`，再结合前面得到相同内容的 $+ 自动变量，整个依赖关系就是 `bar bar booo bar booo bar booo`。foo 本身也会和静态模式匹配结合形成循环依赖定义，从而终结整个目标的依赖关系，

    make: Circular Makefile <- Makefile dependency dropped.
    make: Circular bar <- bar dependency dropped.
    --
    make: Circular booo <- booo dependency dropped.
    --
    make: Circular foo <- foo dependency dropped.
    -- bar bar booo bar booo bar booo

例子中使用了 Static Pattern Rules，所谓静态模式规则，就是增加了 `target-pattern` 的多目标规则：

    # 4.12.1 Syntax of Static Pattern Rules
    targets …: target-pattern: prereq-patterns …
            recipe
            …

模式匹配符号 % 可以出现在 Targets 命名中、还 `target-pattern` 和依赖项中。并且依赖项只能有一个 % 符号，这个符号将会被替换成 `target-pattern` 中 % 符号匹配到内容，此内容称为主干 stem。替换后得到的依赖项即为对应的依赖文件，或者下一层 Target 的名称，这个尝试找到模式匹配规则中的依赖项的过程就是隐式规则。

Make 自动推导能力是关联多层目标的，比如，一个目标依赖 .o 文件，那么就会自动推导出 .o 目标，继而推导出 .c 目标，这就是 C 语言的基本构建涉及的文件目标。


## 🔁 Remaking & MAKE_RESTARTS
1. https://www.gnu.org/software/make/manual/make.html#Remaking-Makefiles
2. https://www.gnu.org/software/make/manual/make.html#Remaking-Loaded-Objects

Make 本身功能就是围绕如何通过比较 Target 与依赖文件之间的更新时间来决定是否要重新编译，这个过程会在 make 命令运行时读取 Makefile 文件中的规则后完成。

但是，重新编译这个动作还可以在 make 正在处理的 Makefile 之内触发：

1. make 命令载入脚本规则，判断出有依赖文件更新，并且达成更新编译的条件；
2. 脚本中使用 include 或者 sinclude 指令包含的脚本产生变动，更新、删除等；

Makefile 脚本并不要求一定要在 make 命令运行时存在，可以使用 --file 参数指定，还可以使用 --touch 参数在目标不存在时创建一个空内容的文件。

使用命令行参数 --always-make 可以强制 make 执行目标的重新构建，而不管目标是否需要更新。

根据手册描述 3.4 The Variable MAKEFILES，使用环境变量 `MAKEFILES` 可以指定列表，使用空格作为分隔符，make 会加载这个列表中的所有脚本文件。它相当于使用 include 等指令直接引用多个脚本文件，可以配合 --include-dir 命令行参数使用。

6.14 Other Special Variables 说明了一个相似的内部变量，`MAKEFILE_LIST` 包含了当前 make 解释过的脚本列表，列表最后一个就是当前正在处理的脚本，`$(lastword $(MAKEFILE_LIST))`，除非使用了 include 引用其它脚本文件，此时列表最后一个脚本就是最后引用的文件。

```makefile
    # 3.3 Including Other Makefiles
    # -I DIRECTORY, --include-dir=DIRECTORY
    include filenames…
    include foo *.mk $(bar)
    sinclude foo a.mk b.mk c.mk bish bash
    -include filenames… # silent include (sinclude) ignore errors
```

虽然 silent include 可以忽略包含时出现的文件缺失等错误，但是文件脚本如果存在错误就不会 siLent.

注意，使用 include 指令，根据指令出现的位置前、后来决定引入的定义是被替换还替换当前脚本的 Target 定义。include 指令和 ifeq 这样的指令一样是全局作用的，不会因为放在那个 Target 后面就属于哪个 Target。

根据替换的 Target 规则形式，有不同的替代效果，*Double-Colon Rules*，即使用双冒号的规则，这种规则都是独立的规则。双冒号规则的独立性体现在：它可以为同名 Target 提供多个定义，这样就可以有多个命令块。而单冒号规则不具有这种特性，如果存在多个同名的单冒号定义的 Target，那么就会提示旧定义的命令块将被覆盖。但是原依赖关系不变，并且新定义的规则中的依赖会叠加。

Makefile 中可以使用的一些特殊变量参考 6.14 Other Special Variables。MAKE_RESTARTS 变量用于指示 make 命令执行 Makefile 脚本时已经重启的次数。不应该在脚本中设置它，也不要修改或导出，此值会在 make 进程实例重启时更新。注意，此值与递归调用不同，递归深度记录在 MAKELEVEL。

所谓递归调用，即自己调用自己，也就是在 Makefile 中执行 make 调用自己，以下限制递归深度为 2。所以 `make -f Makefile recursion` 会使脚本执行 3 次，第一次是在命令行调用：

```makefile
    recursion:
    ifneq "$(MAKELEVEL)" "2"
        @echo  ====recursion====: $(MAKELEVEL)
        @$(MAKE) -f Makefile  recursion
    endif
```

递归调用在不同的目录中切换时，make 会打印消息提示进入、退出相应目录，可以使用 --print-directory 和 --no-print-directory 切换是否使用 working directory printing。另外 --silent 也有类似禁止显示目标切换提示的功能。

MAKELEVEL 的值不仅在以上这种递归调用中递增，在脚本中使用 $(MAKE) 执行其它脚本时，也会递增，初始值为 0。

注意，递归调用，和 make 重启是两回事，如果调用的是递归目标，则会引起循环调用，应该加条件限制。但是，include 或者 sinclude 指令引用文件时，如果是自引用，那么就是循环引用，这会导致 make 无法正常执行规则的解释。注意：循环引用并不会改变 `MAKELEVEL` 或者 `MAKE_RESTARTS` 的值，但会改变 `MAKEFILE_LIST`。


Makefile 可以由 CVS，Revision Control System (RCS) 或者 Source Code Control System (SCCS) 等等源代码管理工具生成，因为需要 make 有一种重新加载 Makefile 脚本的机制。

照此处理，make 会将所有加载的 Makefile 当作一个构建目标，就像脚本规则中定义的 Target 一样，但是按照其解释顺序进行处理，尝试更新它。

按照手册 3.5 How Makefiles Are Remade 所述，如果 Makefile 中有一条规则规定了如何更新它（可以在该 Makefile 或另一个 Makefile 中找到），或者如果一条隐式规则适用于它，则在必要时会更新它。在检查完所有 Makefile 后，如果有任何 Makefile 确实发生了更改，make 将从头开始，并重新读取所有 Makefile ，每次重新启动都会更新内置变量 MAKE_RESTARTS。make 也会尝试再次更新这些 Makefile，但通常不会再次更改它们，因为它们已经是最新的。

根据源代码 NEWS 文档得知，MAKE_RESTARTS 内置变量由 GNU make 3.81 (01 Apr 2006) 引入，默认状态下是空值，除非当前的 make 进程实例重启 Makefile，此时就会设置一个数据指示重启的次数。

Gnu Texinfo 文档算是一种类似 markdown 的文本格式，可以使用 makeinfo 或者 textinfo 工具处理。这种格式文档可以很方便地转换成 HTML, PDF, DVI, Info, DocBook, LaTeX, EPUB 3。

参考源代码的测试用的 Perl 脚本文件，参考其中一个测试案例，测试方法 run_make_test 包含了要测试的 make 脚本和脚本正确运行后的返回值，以下展示代码直接截取自 perl 脚本：

```makefile
    # make-4.3\tests\scripts\variables\MAKE_RESTARTS
    # Test multiple restarts and make sure the variable is cleaned up
    recurse:
        @echo recurse MAKE_RESTARTS=$$MAKE_RESTARTS
        @$(MAKE) -f #MAKEFILE# all
    all:
        @echo all MAKE_RESTARTS=$$MAKE_RESTARTS
    $(info MAKE_RESTARTS=$(MAKE_RESTARTS))
    include foo.x
    foo.x: ; @echo "include bar.x" > $@
    bar.x: ; @touch $@
```

#MAKEFILE# 这样的字符串会被 subst_make_string 方法替换成类似以下的测试文件名：


```perl
$makestring = '@$(MAKE) -f #MAKEFILE# all';
$makefile ='tmpxxx';
$makestring = subst_make_string($makestring);
print $it, $makestring, "\n";

sub subst_make_string
{
    local $_ = shift;
    $makefile and s/#MAKEFILE#/$makefile/g;
    return $_;
}
```

Perl 可以作为 Unix 系统维护工具，它可以对文本文件，特别是对配置文件进行处理。Sublime Text 可以配置 PerlNavigator 提供 Perl LSP 代码智能提示服务。

测试脚本构建 foo.x 目标时会将 include bar.x 写入 foo.x 文件，另外一条规则通过 touch 命令创建一个 bar.x 空内容文件。由于脚本中通过 include foo.x，所以就会形成一个 Makefile - foo.x - bar.x  三级引用关系。

在首次运行时，由于待引用的脚本还没有生成，解释 Makefile 主脚本中发现 include 指令，然后根据指令中要引用的文件列表尝试调用相应的 Target 生成相应的脚本，这一点很重要，它就是触发 Makefile 重启的机制。创建 foo.x 就触发第一次重启，然后是嵌套引用 bar.x 触发第二次重启。这个过程会发生，就是因为 Makefile 文件中 include 指令引用脚本与对应定义的 Target，因为依赖脚本文件的更新（新创建文件）触发了 make 需要重启加载多个脚本，对依赖关系进行重新分析。生成文件后，再次运行 make 命令时，就不需要再重启脚本了，因为此时加载的所有脚本都已经完成更新，就如手册 3.5 How Makefiles Are Remade 所述。

以上这个过程发生在依赖分析阶段，而不是执行阶段，以下例子输出结果观察到被引用的脚本 makefile.mk 会经过两次的分析重启。

```makefile
define Test
$$(info MAKE_RESTARTS=[$$(MAKE_RESTARTS)])
$$(info MAKEFILE_LIST=$$(MAKEFILE_LIST))
$$(info MAKELEVEL=$$(MAKELEVEL))

autoall: ; @:
include foo.mk
foo.mk: ; @touch $$@
endef

sinclude makefile.mk
$(info =+sinclude makefile.mk+=)

all: makefile.mk
    @echo $@

makefile.mk: 
    touch $@
    $(file > $@,$(call Test))

clean :
    $(RM) foo.mk makefile.mk makefilemk

$(info |||MAKE_RESTARTS=[$(MAKE_RESTARTS)])
$(info |||MAKEFILE_LIST=$(MAKEFILE_LIST))
$(info |||MAKELEVEL=$(MAKELEVEL))

.PHONY: all clean

.DEFAULT_GOAL = clean
```

在没有生成任何文件的情况下构建默认目标 make clean 输出内容参考，可以看到 clean 最后执行，这是执行构建阶段的工作，在分析阶段，多次重启了 Makefile 脚本并执行脚本中的 info 函数等函数打印调试信息。如果尝试将 all 目标的依赖项改一个名，即将 makefile.mk 改为不同于 sinclude 指令中引用的脚本名称，如 makefilemk 就不会有以下的逻辑表现：

    =+sinclude makefile.mk+=
    |||MAKE_RESTARTS=[]
    |||MAKEFILE_LIST=Makefile
    |||MAKELEVEL=0
    touch makefile.mk
    MAKE_RESTARTS=[1]
    MAKEFILE_LIST=Makefile makefile.mk
    MAKELEVEL=0
    =+sinclude makefile.mk+=
    |||MAKE_RESTARTS=[1]
    |||MAKEFILE_LIST=Makefile makefile.mk
    |||MAKELEVEL=0
    MAKE_RESTARTS=[2]
    MAKEFILE_LIST=Makefile makefile.mk
    MAKELEVEL=0
    =+sinclude makefile.mk+=
    |||MAKE_RESTARTS=[2]
    |||MAKEFILE_LIST=Makefile makefile.mk foo.mk
    |||MAKELEVEL=0
    rm -f foo.mk makefile.mk makefilemk


## ⏫ Make Jobs
1. https://make.mad-scientist.net/papers/jobserver-implementation/
2. https://www.gnu.org/software/make/manual/make.html#Parallel
3. https://www.gnu.org/software/make/manual/make.html#MAKE-Variable
4. https://www.gnu.org/software/make/manual/make.html#Instead-of-Execution
5. https://www.gnu.org/software/make/manual/make.html#Options_002fRecursion
6. https://www.gnu.org/software/make/manual/make.html#Job-Slots

Make 支持多个 Tareget 并行处理，通过 -j 或 --jobs 指定并行数量，不能并行处理的 Target 可以将其添加到内置的 .NOTPARALLEL 目标依赖列表中：

```makefile
Delay = 0.2

.RECIPEPREFIX = ++
.ONESHELL : all T1 T2 T3 T4 T5 J1 J2 J3 J4 J5 

all:  T1 T2 T3 T4 T5
++ @echo build $@ : $^ ;
++ echo $@ done.

T1 : J1 ; @echo build $@ : $^ ; sleep $(Delay)
T2 : J2 ; @echo build $@ : $^ ; sleep $(Delay)
T3 : J3 ; @echo build $@ : $^ ; sleep $(Delay)
T4 : J4 ; @echo build $@ : $^ ; sleep $(Delay)
T5 : J5 ; @echo build $@ : $^ ; sleep $(Delay)
J1 :    ; @echo build $@ : $^ ; sleep $(Delay)
J2 :    ; @echo build $@ : $^ ; sleep $(Delay)
J3 :    ; @echo build $@ : $^ ; sleep $(Delay)
J4 :    ; @echo build $@ : $^ ; sleep $(Delay)
J5 :    ; @echo build $@ : $^ ; sleep $(Delay)

# .NOTPARALLEL: all
.DEFAULT_GOAL = all
```

使用 `make -j 4 -Otarget` 运行以上脚本，会依次打印各个目标的构建过程，并且 make 以依赖关系分割并行任务，此时 sleep 命令以模拟大量的编译计算，指定的时间延时会按并行方式计算时长。如果解除注解 .NOTPARALLEL 则会按顺序构建各个目标，时间将是所有 sleep 时间的累加。所以，多进程并行任务中将大大节省构建时间，而顺序执行累计所有 Target 的构建时间。

可以将依赖看成是一个 N 叉树的数据结构，叶节点就是没有任何依赖的节点（目标），那么并行构建时，可以将它们随意分配给空闲的进程进行构建。当某个节点的所有子节点都算是构建完成状态，那么它就可以看作是没有任何依赖（未构建的目标），也就可以随意分配给空闲进程进行处理。而那些还有依赖目标处于构建中或还未构建，那么就继续等待工作进程完成任务。这个任务分割逻辑是根据依赖关系猜测得来，并不一定是 make 源代码中的实现。

并行任务的最小切割单位就是每个 Target 的命令块，它们会通过一个 shell 线程执行，对于使用 .ONESHELL 目标，或者每条命令都用 shell 线程执行。

并行运行可以设置 --max-load 限制，防止 make 占用过多的 CPU，比如设置负载平衡为 -l 2.5，当到达这个值时，make 就控制进程不再进行更多的工作。

并行构建方式下可能产生错误的情形：

1. 存在未被发现的依赖，并且没有在脚本依赖关系中体现出来，这会导致执行命令出错；
2. 不同目标访问的资源文件交错混乱，产生临界资源访问问题，数据竟态；
3. 最隐蔽的问题还是在 Makefile 脚本中递归并行运行 make 子进程，后面讨论 Sub-make；

为了提升性能，同时避免隐式规则触发多余的文件检查或产生潜在错误，可以使用 5.9 Using Empty Recipes，这是显式规则的一种使用方式，主要目的就是禁止 make 调用隐式规则的命令。假设以下脚本中删除 `target: ;` 这条空目标，那么 make 就会在执行时检查 target 文件，根据所有隐式规则定义的文件类型进行匹配，如果有相应的文件就调用隐式规则定义的命令编译它：

```makefile
    all : target
    target: ;
```

另外两条目标也用于处理那些没有需要定义规则的目标，其中模式匹配 % 可以匹配到所有未定义的 Target，但它的执行优先级最低，会随时被隐式规则中更高优先级的其它模式匹配规则替换。另外一条是 .DEFAULT 内置目标，这个预置目标是处理那些没有 Target 规则声明，但又被其它 Target 依赖的目标，除非那些目标有适用的隐式规则进行处理。如列子中的 port 作为 all 的依赖，但它本身没有定义 Target 规则，除非磁盘有 port.c 这样的可以隐式处理的文件，否则它就会由 .DEFAULT 接管。当然，在以下例子中，因为 .DEFAULT 的优先级还不及模式匹配高，可以它不会被调用。但是，它们都是备选规则 10.6 Defining Last-Resort Default Rules。

```makefile
    all : port
    %::
            touch $@
    .DEFAULT :
        @echo do default command for prerequisites that has no target rules.
```

使用 :: 是将 % 匹配的目标定义为独立的目标，当然可以使用 : 定义为使用常规依赖的目标。双冒号规则有一个特点，因为它定义的是独立目标，所以没有依赖也会总是执行构建，4.13 Double-Colon Rules

使用空命令目标也许不是用来定义那些没有对应磁盘文件的目标，Makefile 中可以使用内置的 Phony Targets，它专用于此目的，只需要将那些目标添加到 .PHONY 依赖列表中即可以声明它们是虚目标，不涉及对应的磁盘文件，也不会进行文件的检查确定是不要更新。所以虚目标在执行时，其规则中定义的命令部是会得到执行，而不管文件的状态。但是，另一个副作用，那么些依赖了 .PHONY 的目标，就不会因为虚目标（事实上可能有对应的磁盘文件）触发更新构建。

在明确 Makefile 不需要重新构建的情况下，使用以下任何一条规则避免 make 命令重新加载脚本：

```makefile
.PHONY: Makefile
Makefile:: ;
```

文件 I/O 是一个性能瓶颈，编写 Makefile 应该尽量减少触发隐式规则，这里面涉及大量文件检查工作，这会明显了降低 make 工作性能。同时，利用多进程进行编译，又可以大大提升 I/O 的访问效率，减少 I/O 等待时间。

并行处理过程中，消息打印就会乱序，可以开启输出同步 --output-sync 或 -O。

1. `none` 默认方式，所有输出不经过同步直接打印；
2. `line` 单行同步，确保每一行内容不会出现其它线程中的消息出现；
3. `target` 单目标同步，--output-sync 或者 -O 即启用此方式，消息按 Target 各自分组输出；
4. `recurse` 递归同步，也是分组方式会在递归调用完成后进行分组和打印。

一般情况下，GNU make 会通过 stdin 和 stdout 标准输入输出文件来传递所有被调用命令的数据，许多工具都可以实现检测输入输出是否发生在终端环境中。根据文档 13.2 Synchronized Terminal Output，当使用了多进程构建功能时，--output-sync 选项激活了文件暂存各个线程的输出数据，这就会导致其它工具无法检测 make 是否在终端上处理 I/O。为了帮助各种工具应用进行检测，在调用工具之前，make 将通过内置变量 `MAKE_TERMOUT` 和 `MAKE_TERMERR` 提供指示性信息，自动设置为相应的终端类型或者文件设备。这些参数值类似 /dev/cons0 and /dev/cons0，即控制台标准文件设备。

所谓终端程序，Terminaal，就当代而言，就是各种模拟大型计算机时代的硬终端的程序，即软件终端，它模拟了终端设备与主机进行交互的功能，同时打印从主机上传递回来的数据。一般彩色终端可以将字符打印成各种背景色、字体颜色。

而对于标准文件则会没有这样的功能，因此就会停用控制台彩色。如果输出这些用于设置终端字符属性数据到标准文件中，就会当作乱码显示。比如 git 命令可以在终端中打印彩色文字，但是当使用命令 git status > status.txt 将输出重定向到文件，而不是输出到终端，那么就不应该有字符属性数据。Linux 提供了 isatty(int fd) 库函数用于检查 FD 是指终端还是其他文件设备，此函数是 unistd.h 头文件的一部分。


Makefile 脚本中执行的命令其实就是 Linux shell 脚本，但 make 提供了一些功能：

5.3.1 Using One Shell 使用 .ONESHELL 可以让指定目标的命令运行在同一个 shell 进程。
5.4.1 Disabling Parallel Execution 使用 .NOTPARALLEL 可以让指定目标不能以多进程方式运行。

在目标启用 .ONESHELL 的前提下，通过设置命令中首行首字符是 @ - + 三者之一激活特殊功能，这样在当前有目标所有命令行的开头都会包含这个字符，所以需要根据具体 shell 环境使用，三个字符对应功能如下：

1. `@` 符号前缀在命令名就可以禁止命令本身被打印，相当 --silent。5.2 Recipe Echoing
2. `-` 忽略命令退出状态码，默认在出错时 make 会终止构建。5.5 Errors in Recipes
3. `+` 表示命令不能正常执行时就运行于 make -ntq 之下。5.7.1 How the MAKE Variable Works

使用 .ONESHELL 的一个主要目的是执行一些前后相关的命令，比如需要进入到指定目录下操作的命令，如果不使用 .ONESHELL 就需 cd && commands 这样的并行命令执行形式，在大量执行命令时并不适用。注意，shell 命令是新的进程中执行的，wildcard 函数并不受 cd 命令的影响，它始终以父进程的工作目录为参考。以下脚本演示 .ONESHELL 的两种使用方式：

```makefile
# .ONESHELL : all
.ONESHELL :
all: makefile.mk clean 
    @touch $<
    pwd
    cd $(word 1,$(wildcard */))
    pwd
    cd ../$(lastword $(wildcard */))
    pwd
    echo $(wildcard ./*/Make*) # path relative to parent make process pwd 
```

按照 5.7.1 How the MAKE Variable Works 文档说明，Makefile 脚本中应该总是以 MAKE 内部变量来调用 make 进程，以激活以上的功能特性。

命令行参数说明：

1. -t --touch 表示阻止 .Phony Targets 功能，禁止它无条的更新功能，即利用 touch 更新时间。
2. -n --just-print 表示只打印出目标的构建命令，不要执行，No-op。
3. -q --question 静默地检查目标是否需要更新，但不执行，返回码 1 表示需要更新。
4. --ignore-errors 忽略目标命令出现的错误，默认会终止执行。
5. --keep-silent 静默方式运行，Echo recipes，相当使用命令前缀 @ 。
6. -k, --keep-going 某些目标构建失败时，继续构建其它目标。


现在来讨论一下 Sub-make 执行方式，可以将 make 的运行分为三种形式：

1. 普通模式，make -f Makefile aall 这样的命令运行方式；
2. 并行模式，make -f Makefile -j4 aall 启用多进程运行方式，5.4 Parallel Execution；
3. 子进程模式，Sub-make，即在 Makefile 脚本中通过 $(MAKE) 调用创建新进程的模式；

子进程模式下，主进程就称为父进程或者顶级进程，与子进程之间就可以实现数据的传递，最基本的就是通过命令行参数、export 环境变量等等手段传递变量，5.7.3 Communicating Options to a Sub-make。而更深入的是 Job Slots 的共享处理，13.1 Sharing Job Slots with GNU make。

The options ‘-C’, ‘-f’, ‘-o’, and ‘-W’ are not put into MAKEFLAGS; these options are not passed down.

MAKELEVEL 内置变量会自动根据递归深度设置，顶层进程为 0，一级子进程为 1，依此设置。

根据文档描述，make 调用的各种工具，如下罗列，或者是通过多进程，或者是多线程，又或者是通过 GNU make job 的方式进行，Jobserver 是一种进程、线程管理器，它确保系统活动的线程不会超过 GNU make 提供的最大 slots 数量。Slot 即插槽，插入线程以启动工作任务的一个抽象插槽。

    awk cat cmp cp diff echo expr false grep install-info ln ls
    mkdir mv printf pwd rm rmdir sed sleep sort tar test touch tr true
    ar bison cc flex install ld ldconfig lex make makeinfo ranlib texi2dvi yacc
    chgrp chmod chown mknod


进程间通信技术 Inter-process communication (IPC)，是由于操作系统为了安全性而不得不隔离进程的内存空间，从而产生的一种技术需求，进行间通信有很多种方法：

1. 匿名管道 Pipe：父子进程间的通信。
2. 命名管道 FIFO：跨进程的通信。
3. 共享内存 SHM：跨进程的通信，需要处理进程同步，比如和信号量配合。
4. Unix Socket：跨进程的通信。
5. Internet Socket：可以跨主机通信。

Make 提供了一套机制给开发者编写扩展程序，即各种基于 make 的工具开发，也就是手册 12 Extending GNU 'make' 和 13 Integrating GNU 'make' 中所阐述的内容，主要是 job slots 在进程间的共享。扩展 make 就是基于插件机制编写工具，并且通过脚本中的 load 指令加载和执行指定方法，或者默认的入口方法。官方已经实现的一个工具就是 GNU Guile，这是一种嵌入式脚本语言，属于 Scheme programming language 的一种。

关于 Jobserver 的讨论分为两大类操作系统，因为低层实现机制不一样：

13.1.1 POSIX Jobserver Interaction 使用 Named Pipe（FIFO）或者简单 Unix Pipe；
13.1.2 Windows Jobserver Interaction 使用命名信号量实现，named semaphore；

Jobserver 通信手段：

1. MAKEFLAGS 环境变量，程序要参与 jobs 就应该查找是否有 `--jobserver-auth=` 设置；
2. make 命令启动默认就有一个 slot，jobserver 如此假定，其它程序就不需要进行通信；
3. 最重要的是 jobserver protocol 要求程序申请到的 slots 在退出时归还，即使错误退出。

Windows 系统下，Jobserver 使用的信号量设置为具有初始时可用 slots 的数量，工具要获得 slots，就必须等待信号量（可有或没有超时机制），释放信号量就是释放 slots。

要访问信号量，必须从 MAKEFLAGS 变量解析出 --jobserver-auth=NAME 这橛的数字符串，其中 NAME 就是命名信号量的名称 。将此名称作为 Windows API  OpenSemaphore 参数创建信号量的句柄。环境变量中 jobserver-auth 可能存在多个值，但最后一个才是当前适用值。另外，只支持 --jobserver-style=sem 这一种风格设置。

你实现的工具必须考虑各种错误条件，以确保实施的稳健：

1. 通常，并行操作有相应的命令行参数。它如何处理同时指定 jobserver 和命令行参数的情况；
2. 应该确保为它读取的令牌释放信号量，即使在错误触发时，包括外部中断（SIGINT）等。可能需要使用信号处理函数以片延时回写（write-back）。

POSIX 系统上有更多的进程通信实现技术，Jobserver 实现有两种选择：

1. 基于命名管道，Named Pipe，使用认证参数格式 --jobserver-auth=fifo:PATH
2. 基于命名管道，UNIX Pipe，使用认证参数格式 --jobserver-auth=R,W

其中，PATH 即是命名管道的路径名称，R、W 分别代码读、写文件描述符号，即操作文件时标识。如果为负值即表示 jobserver 禁用了进程间通信。如果系统不支持，或者用户指定参数 --jobserver-style=pipe 就使用使用简单 UNIX pipe。

可以使用 make -p 命令将隐式规则打印出来，可以看到 $(MAKE) 相比直接调用 make 命令的方式可能包含一些默认的参数。在子进程中可以通过 MAKEFLAGS 检测到 --jobserver-auth=3,4 这样的命令行参数。表示各种工具可以从 3 号文件设备读取数据，可以往 4 号文件写数据，以进行进程间的通信。

UNIX Pipe 即一般的匿名管道，这种方式下，只允许使用 make 支持的命令行参数进行递归调用。

注意：UNIX 匿名管道读取设置为阻塞模式，即除非 jobserver 有空闲的 slots，否则申请 slot 时就会导致进程进入阻塞状态，即等待其它进程释放有限制的资源。更重要的是一定要归还 slot，即使工具运行出错！

以上两种实现方式会为每个有效的 job 预加载只有单个字符的 Token，即使用一个独一的字符与 slot 建立一一对应关系。要获取额外的 slot，就必须从 jobseerver 管道中读取一个字符，要释放 slot 就将对应的字符回写到管道，这样就实现了 slots 的申请与归还，始终保持一致的工作进程关系。

在实现自己的工具时，有以下必需考虑的问题：

1. 如果使用命令行参数控制工具的并行运行模型，要同时考虑 jobserver 的指定的参数；
2. 不支持 --jobserver-auth 参数时，应该假定 jobserer 使用不同风格且不能相互通信；
3. 支持 --jobserver-auth 参数但检测到其指定的文件描述符已关闭时，表示 make 假定了此工具不是 make 递归调用，比如执行命令时没前缀 + 符号，应该告知工具的使用者。
4. 必须确保回写已经读取的 Token 字符，即确保 slot 申请与归还逻辑闭环，即使工具被外部中断（SIGINT）强制终止，也应当使用信号响应函数来处理延时回写（write-back）。
5. 应当检测 MAKEFLAGS 变量的第一个参数，如果是一个‘n’字符，即 make 使用 -n 选项，工具应当停止执行操作。

通过命令行参数 --jobs N 指定了进程数 N，父进程和子进程就会通信以保证同时运行的进程数量不会超过此值。但是，那些标记为递归调用的 sub-make 不计数，如果计数那么运行 N 个子进程后就会导致无 slots 可用于实际的工作。参数中如果省略数值表示不限制进程数量。

如果操作系统不支持以上父子进程的通信，而导致无法保证进程数据，make 就会从 MAKEFLAGS 环境变量中移除 -j 参数，迫使子进程不能运行于并行模式。如果依然要手动将这个参数传递给子进程，那么就会获取多得多的进程数量。

MAKEFLAGS 或者环境变量（-e 启用覆盖值）或者 export 导出的变量可以无条件地传入子进程。如果不希望传递 MAKEFLAGS，就清空参数：

```makefile
    subsystem:
        cd subdir && $(MAKE) MAKEFLAGS=
```

以下例子演示了 Sub-make 运行方式：

```makefile
    SUBDIRS = foo bar baz

    subdirs:
        for dir in $(SUBDIRS); do \
          $(MAKE) -C $$dir; \
        done
```

对于每个目标的命令定义部分，其实就是 shell 编程，经过 make 进行宏展开后，这部分内容就是对应 shell 脚本内容。以上这种方式虽然是可以执行的脚本，但是存在较大问题：

1. 一是没有利用 make 自带的 Parallel Execution 并行构建功能；
2. 二是忽略了每个 Sub-make 的错误状态，尽管可以使用 -k 让其在出错时继承构建工作；

假设各个子目录独立，可以修改为可以用并行处理的规则定义，因为目录总是存在的（对于假设的项目），那么它就不需要进行文件状态的检测，通过声明为 .PHONY 目标就可以节省 I/O 操作。更重要的是它可以让子目录的构建无条进行，假设没有 .PHONY 目标的特性，当检测到对应的目录已经存在，make 就不会去构建它：

```makefile
SUBDIRS = foo bar baz
.PHONY : $(SUBDIRS)

all : $(SUBDIRS)

$(SUBDIRS) :
    $(MAKE) -C $@;
```

以下两组错误信息分别由脚本中使用的两种递归调用触发，都涉及多进程构建模式。前一组由使用 --jobs=N 强制激活多进程递归调用时触发，其中 N 是大于 0 的自然数。后一组由直接使用 make 命令调用时触发。结果就是 jobserver 只能提供顺序执行，没有并行处理功能：

    @$(MAKE) -j4 --no-print-directory -f Makefile foo
    warning: -jN forced in submake: resetting jobserver mode.
    warning: -jN forced in submake: disabling jobserver mode.

    @make --no-print-directory -f Makefile foo
    warning: jobserver unavailable: using -j1. Add `+' to parent make rule.

前面一组警告意思是：递归调用的 submake 命令因命令行直接指定的 -j4 这样的参数而导致被迫要求进入多进程工作，所以此时子进程就会拒绝与其它进程通信，并且假装自己已经有 4 jobs。

在正常的并行构建方式下，父进程设置了 -jN 指定进程数，假设是 N = 8 就是父进程可以有个并行进行可以处理构建工作，并且父进程会与 submake 进行通信确保进程数量限制。当用户在 Makefile 脚本中再通过递归调用 make，并且又将 -jN 这样参数显式传递到子进程，包括使用 MAKEFLAGS 内置变量中设置也一样，那么如果允许这样做，每增加一次递归调用，每个子线程将多产生 N 个进程数，这就是为何 make 给出警告，并且假装已经有相应的工作进程。所以，要避免这个错误警告，就不能在递归调用中显式指定 -jN 参数。

在使用多进程编译时，特别需要注意规则的依赖定义，并且注意是否有可能多个非直接依赖的目标对同一资源访问，这可能会造成数据竞争（Data Race）甚至竞态条件（Race condition）。

Make 给多进程分割任务的依据是 Makefile 规则定义的依赖关系，同一个目标的多个依赖的构建构建顺序与其在依赖列表中出现的顺序无关，因为存在有此依赖已经完成构建的情况，只能确保当前 Target 会在所有依赖完成构建后再构建。

多个进程不能同时从同一设备获取输入，为了确保一次只有一个进程尝试从终端获取输入，make 将使正在运行的进程能访问标准输入流，其它进程的标准输入流无效。如果另一方试图从标准输入中读取，通常会产生致命错误，Broken pipe signal。

为了使进程能够进行通信，父进程将信息传递给子进程。由于实际上子进程可能不是 make 进程，比如 C/C++ 编译器进程，这会导致问题，因此只有当父进程认为子进程是 make 进程时，父进程才会发送消息给子进程。父级使用普通算法来确定这一点。如果构造的 makefile 使得父进程不能检测出子进程是 make 子进程，那么子进程将只接收到部分必要的信息。在这种情况下，子进程将按顺序进行构建，并警告提示：Add `+` to parent make rule. 即告知需要在父进程应该像 `+make -C sub` 这样调用。

命令行中的 -n -t -q 选项会在规则定义的命令中使用 `$(MAKE)` 或者 `${MAKE}` 形式调用 make 进程时失效，或者在命令前经 + 号也有相同作用，即这样的运行方式不会考虑这三个命令行参数。同时，同一规则下的其它命令行不会运行，除非它们也以 + 开头或包含 `$(MAKE)` 或者 `${MAKE}` 。

如果 job 运行的不是 make 子进程，那么在命令脚本中就不会有 MAKE 变量（假定条件），并且没有 + 前缀在 make 命令前，GNU make 命令就是通过这些手段来检测是不是 make 子进程。然后，在调用命令前，make 就会关闭 jobserver 管道文件。如果脚本构造不能让 make 成功检测出是否是 make 子进程，在尝试读取管道文件时就会出现错误，然后会按顺序构建。这种检查是通过字符比较得出，只需要简单地使用 `echo $(MAKE)` 就可以消除警告信息。

以下代码仅供参考：

```makefile
    SHOW = $(patsubst --jobserver-auth=%,--jobserver-auth=<auth>,$(MAKEFLAGS))
    AUTH = $(filter --jobs%,$(MAKEFLAGS))
    # MAKEFLAGS += -j2

    all:
        @echo $@: "[$(SHOW)]"

    recurse: ;
    default: recurse 
    #   @$(MAKE) -j4 --silent -f Makefile all
        @$(MAKE) --silent -f Makefile all
        @make --silent -f Makefile all; # $(MAKE) fake sign
        @echo $@: "[$(AUTH)]";

    .DEFAULT_GOAL = default
```

参考源代码或测试脚本：

1. make-4.3\tests\scripts\features\parallelism
2. make-4.3\tests\scripts\features\jobserver

NEWS: Mention the extended support for -jN on MS-Windows.
https://github.com/sunnyden/make/commit/d3bba301cee84c6e2b150649411a0d649056a75f
http://sv.gnu.org/bugs/index.php?group=make&report_id=111&fix_release_id=108&set=custom

* The previous limit of 63 jobs under -jN on MS-Windows is now
  increased to 4095.  That limit includes the subprocess started by
  the $(shell) function.

Version 4.2.1 (10 Jun 2016)



## 🤘 Make Make with Guile

Guile 扩展不一定与正在使用的 make 一起编译，可以通过 .FEATURES 检测是否存在 guile 扩展。也可以编译源代码，调用源代码配置脚本 bash configure --with-guile 启用 Guile 进行编译，然后就可以在 Makefile 脚本中通过 guile 函数进行 LISP 编程：

```makefile
    $(info FEATURES: $(filter vpath% load% guile%,$(.FEATURES)) )
    GUILE = $(filter guile%,$(.FEATURES))
    LOAD = $(filter load%,$(.FEATURES))
    $(info 12.1 GNU Guile Integration $(if $(GUILE),,un)supported )
    $(info 12.2 Loading Dynamic Objects $(if $(LOAD),,un)supported )
```

Optional Packages:

    --with-PACKAGE[=ARG]    use PACKAGE [ARG=yes]
    --without-PACKAGE       do not use PACKAGE (same as --with-PACKAGE=no)
    --with-gnu-ld           assume the C compiler uses GNU ld [default=no]
    --with-libiconv-prefix[=DIR]  search for libiconv in DIR/include and DIR/lib
    --without-libiconv-prefix     don't search for libiconv in includedir and libdir
    --with-libintl-prefix[=DIR]  search for libintl in DIR/include and DIR/lib
    --without-libintl-prefix     don't search for libintl in includedir and libdir
    --with-guile            Support GNU Guile for embedded scripting
    --with-customs=DIR      enable remote jobs via Customs--see README.customs
    --with-dmalloc          use dmalloc, as in http://www.dmalloc.com

GNU Make 代码管理非常好，即使在 Windows 系统下也可以免配置地进行编译，执行 build_w32.bat 即可以调用 MSVC 编译器进行编译。也使用 Msys2 编译环境，先安装好 guile 开发库，再使用配置脚本激活 guile 扩展即可以编译得到支持 Guile 脚本的 make 构建命令：

```sh
> pacman -Fy
:: Synchronizing package databases...
> pacman -S pkg-config guile libguile libguile-devel
> pacman -S pkg-config glib2 glib2-devel
> pacman -Q glib2 glib2-devel
glib2 2.68.1-1
> pkg-config --list-all
guile-2.0             GNU Guile - GNU's Ubiquitous Intelligent Language for Extension
guile-3.0             GNU Guile - GNU's Ubiquitous Intelligent Language for Extension

> sh configure --with-guile
checking for pkg-config... /c/MinGW/bin/pkg-config
checking pkg-config is at least version 0.9.0... yes
checking for GNU Guile... 3.0
checking for GUILE... yes
checking whether we can link GNU Guile... yes
> make
```

编译完成后，即会在代码根目录下生成 make.exe，所有中间文件会保存在 GccRel。如果是 MSVC 编译器，文件会保存在 WinRel 目录。 

默认 GCC 编译器参数中使用了 --export-dynamic，但是 Windows PE+ 可执行程序格式不支持。这个链接参数指示链接程序导出动态符号（添加符号定义到 dynamic symbol table），可以在 congifure.ac 模板文件中修改，但是直接修改 Makefile 就只可以避免重新运行配置过程。尝试按提示直接修改 Makefile 脚本，设置为 `--export-all-symbols` 也不行，应该直接注解掉这个参数，再进行编译：

```sh
    # AM_LDFLAGS = -Wl,--export-all-dynamic

    warning: --export-dynamic is not supported for PE+ targets, did you mean --export-all-symbols?
    
    /usr/lib/gcc/x86_64-pc-msys/13.2.0/../../../../x86_64-pc-msys/bin/ld: 
    unrecognized option '--export-all-dynamic' 
    
    gcc.exe: error: unrecognized command line option '--export-all-symbols'
```

以下 Makefile 用于测试 gile 扩展：

```makefile
JOBS = $(patsubst --jobserver-auth=%,--jobserver-auth=<auth>,$(MAKEFLAGS))
AUTH = $(filter --jobs%,$(MAKEFLAGS))
GUILE = $(filter guile%,$(.FEATURES))
LOAD = $(filter load%,$(.FEATURES))

define GULEIO
(define (hi msg)
    (display "Hello, world!" )
    (display (string-append "Hel""l""o! 1+2+3+4=" (number->string (+ 1 2 3 4) 16) ))
    (newline)
    #f)

#f
endef

all:
    $(info FEATURES: $(filter vpath% load% guile%,$(.FEATURES)) )
    $(info 12.1 GNU Guile Integration $(if $(GUILE),,un)supported )
    $(info 12.2 Loading Dynamic Objects $(if $(LOAD),,un)supported )

#   internalize the Guile hello functions from GUILED variable
#   $(guile $(GUILEIO))
    $(info load hi.scm... $(guile (lood ./src/hi.scm)))
    $(info hello hi.scm... $(guile (hi "hi.scm")))

    $(guile (display (string-append "guile script: 1+1=" (number->string (+ 1 1)) )) (newline) )
    $(info Makefile $(if $(guile (access? "Makefile" R_OK)),exists,not exists))
```

构建好的 make 调用 Guile 函数时出现错误，提示信息由 ice-9/boot-9.scm 模块发出，指示对应的函数是未绑定的变量，无法通过 resolve-variable 方法解析。但是直接使用 Guile 解释器则没有这样的问题，`load` 函数正常加载指定的脚本：

```sh
Backtrace:
In ice-9/boot-9.scm:
  1752:10  6 (with-exception-handler _ _ #:unwind? _ # _)
In unknown file:
           5 (apply-smob/0 #<thunk 7000001f5280>)
In ice-9/boot-9.scm:
   2836:4  4 (save-module-excursion #<procedure 7000001fda00 at ice-?>)
In ice-9/eval-string.scm:
     38:6  3 (read-and-eval #<input: string 700000200ee0> #:lang _)
In ice-9/eval.scm:
   191:27  2 (_ #f)
   223:20  1 (proc #<directory (guile-user) 70000013dc80>)
In unknown file:
           0 (%resolve-variable (7 . lood) #<directory (guile-user) ?>)

ERROR: In procedure %resolve-variable:
Unbound variable: lood
```


GNU Make 源代码已经配置好 Windows 系统下的编译环境，build_w32.bat 会调用 MSVC 或者 Mingw 等编译工具，脚本中会检测是否安装好了 Guile 依赖库，并自动在编译时启用它。

```shell
    :ChkGuile
    :: Build with Guile is supported only on NT and later versions
    if not "%OS%" == "Windows_NT" goto NoGuile
    call pkg-config --help > %OUTDIR%\guile.tmp 2> NUL
    if ERRORLEVEL 1 goto NoPkgCfg

    echo Checking for Guile 3.0
    call pkg-config --cflags --short-errors "guile-3.0" > %OUTDIR%\gl-c3.tmp 3> NUL
    if not ERRORLEVEL 1 set /P GUILECFLAGS= < %OUTDIR%\gl-c3.tmp

    call pkg-config --libs --static --short-errors %PKGMSC% "guile-3.0" > %OUTDIR%\gl-l3.tmp 3> NUL
    if not ERRORLEVEL 1 set /P GUILELIBS= < %OUTDIR%\gl-l3.tmp
    # set GUILECFLAGS = -IC:/MinGW/include/guile/3.0 -I/C:/MinGW/usr  
    # set GUILELIBS= /libpath:C:/MinGW/lib /libpath:/usr/lib/ guile-3.0.lib gc.lib /usr/lib/libgmp.dll.a ffi.lib /usr/lib/libunistring.dll.a crypt.lib /usr/lib/libiconv.dll.a /usr/lib/libintl.dll.a

    :GuileDone
    if "%GUILECFLAGS%" == "" goto :EOF

    echo - Guile found: building with Guile
    set "GUILECFLAGS=%GUILECFLAGS% -DHAVE_GUILE"
    goto :EOF
```

源代码中使用了 pkg-config 管理依赖，需要通过它为编译定位 Guile 库文件，可以尝试使用 msys2 平台下构建的库文件：

```sh
    # https://github.com/ruby-gnome/pkg-config/tags
    # https://community.chocolatey.org/packages/jq
    # https://packages.msys2.org/api/search?query=pkg-config
    # https://www.freedesktop.org/wiki/Software/pkg-config
    # https://hyperpolyglot.org/shell
    choco install jq
    $url = 'https://packages.msys2.org/api/search?query=pkg-config'
    curl -X 'GET' $url -H 'accept: application/json' | jq

    kg-config --list-all | findstr guile
    # guile-3.0          GNU Guile - GNU's Ubiquitous Intelligent Language for Extension
```

Windows 平台下编译 GNU make 4.4 并不顺利，安装依赖麻烦，并且代码有需要修改，有些符号没有定义。比如调用 MSVC CRT 库函数设置标准文件的模式时传入的参数，MinGW 使用了不同的常量名 O_BINARY 和 O_TEXT。最隐蔽的符号未定义问题是错乱的编译器与正在使用的依库平台架构不一致。为了让编译通过，不惜硬编码一些

    src/job.c:3311:32: error: '_O_TEXT' undeclared (first use in this function); did you mean 'O_TEXT'?      
    https://learn.microsoft.com/zh-cn/cpp/c-runtime-library/reference/setmode

    rc/signame.c:43:20: error: static declaration of 'sys_siglist' follows non-static declaration
       43 | static const char *sys_siglist[NSIG];
          |

```cpp
        /* Create a FILE object for the batch file, and write to it the
           commands to be executed.  Put the batch file in TEXT mode.  */
        _setmode (temp_fd, _O_TEXT);
        batch = _fdopen (temp_fd, "wt");
        if (!unixy_shell)
          fputs ("@echo off\n", batch);
        fputs (command_ptr, batch);
        fputc ('\n', batch);
        fclose (batch);
        DB (DB_JOBS, (_("Batch file contents:%s\n\t%s\n"),
                      !unixy_shell ? "\n\t@echo off" : "", command_ptr));
```


## 🤘 Make Guile Extending
1. https://www.gnu.org/software/guile/manual/
2. https://www.gnu.org/software/guile/docs/guile-tut/tutorial.html
3. https://spritely.institute/static/papers/scheme-primer.html
4. https://packages.msys2.org/base/guile

Make 提供了一套机制给开发者编写扩展程序，即各种基于 make 的工具开发，也就是手册 12 Extending GNU 'make' 和 13 Integrating GNU 'make' 中所阐述的内容，主要是 job slots 在进程间的共享。扩展 make 就是基于插件机制编写工具，并且通过脚本中的 load 指令加载和执行指定方法，或者默认的入口方法。官方已经在 GNU Make 4.2 集成 Guile。

Guile 是一种嵌入式脚本语言，属于 Scheme programming language 的一种，即 LISP 语言的一种方言。这类语言使用的语法非常新奇（古典），例如，调用加法算术函数 `(+ 1 2)` 得到结果为 3，嵌套调用就继续加圆括号。

人类在数值计算领域技术进步的脚印简要介绍：

01. 大约在 300 万年前，古代，使用绳结记数；
02. 公元 200 年左右，中国发明算盘( abacus)，记录于东汉末年的《数术记遗》；
03. 1623 年，德国数学家席卡德设计和制造出了齿轮机械计算机。
04. 1820 年，法国查尔斯托马斯根据莱布尼茨的计算机原理设计出第一个成功商业化的四则运算器 Arithmometer。
05. 1804 年，法国发明家 Joseph Marie Jacquard 设计出首台可设计织布机——雅卡尔织布机；
06. 1836 年，意大利数学家巴贝奇受提花织布机启发，提出卡片式通用型计算机器的概念，命名为分析机，使用纸质卡片控制开关。
07. 1941 年，美国爱荷华州立大学教授 John Vincent Atanasoff 及其研究生 Clifford Berry 研发出世界上第一台电子计算机，以其二人名字命名 Atanasoff-Berry Computer (ABC)。
08. 1943 年，英国数学家逻辑学家 阿兰·图灵 (Alan Turing) 研发出图灵机，即现代电子计算机的原型。
09. 1946 年，美国宾大基于电子原理的真空管制造出第一台二进制通用计算机 ENIAC；
10. 1958 年，美国德州仪器的工程师 Jack Kilby 发明了集成电路 Integrated Circuit（IC），二极管、三极管和电阻电容体积被极大地缩小。此后电器化时代的计算器进入高速发展阶段引领了信息化时代。

Electronic Numerical Integrator And Computer (ENIAC) 电子数字积分计算机的诞生标记着通用计算机时代的开始，它是第一台通用计算机，是继 ABC（阿塔纳索夫-贝瑞计算机）之后的第二台电子计算机。机器相关数据：

1. 17468 只电子管；
2. 7200 个二极管；
3. 70000 多个电阻器；
4. 10000 多只电容器；
5. 6000 只继电器；
6. 50 万多电路焊接点；
7. 全机重量 31 吨；

ENIAC 是完全的电子计算机，能够重新编程，解决各种计算问题。承担开发任务的人员由科学家约翰·冯·诺依曼和“莫尔小组”的工程师埃克特、莫希利、戈尔斯坦以及华人科学家朱传榘组成。总工程师埃克特在当时年仅25岁。

计算机编程语言也随着机器的进步而不断演化，从早期的编码，慢慢演变成为专门的语言，并演变成今天通用的编程语言，包括 C/C++/Java/C#，或者脚本编程语言等等。

1842 年，人称“数字女王”的阿达·洛芙莱斯（Ada Lovelace，本名 Ada Byron）编写了历史上首款电脑程序。并于 1843 年公布了世界上第一套算法。此前，Ada 为其朋友，数学家、发明家兼机械工程师查尔斯·巴贝其（Charles Babbage）发明的分析机编写算法。1980年12月10日，美国国防部设计出 Ada 高级计算机编程语言以纪念阿达•洛芙莱斯。

1953 年，在艾达去世后的一百年之时，她之前翻译《分析机概论》所留下的笔记被重新公布。在这份笔记中，包含了一张写满数学算法的巨幅图表，被视为「第一个计算机程序」。
https://p6.itc.cn/q_70/images03/20220330/ccd2389c846a4098a846218252a31a06.png

从现在的观点来看，艾达首先为了计算制作了“算法”，然后制作了“程序设计流程图”，这个珍贵的计划被认为是“第一件计算机程序”。

在机械计算机时代，格雷斯·霍珀（Grace Hopper）提出了一个革命性的想法，发明了世界上第一个编译器 (Compiler)，名字叫做 A-0。将原来由计算人员（computers 一词的最早期含义）控制开关的工作变成打孔卡片，卡片上对应位置打孔或不打孔相当于 0 或 1。在当时是没有任何高级语言的存在，程序设计人员需要把程序翻译成机器码，01101010110 这样的形式，在纸上打孔，再送到机器里去控制开关（读取程序）。Grace 设计出一种程序，让人可以用类似英文的语法，把想做的事写下来，然后用这个程序把英文翻译成机器的语法，交给机器去执行。这个想法就是今日的 Compiler (编译器)。

https://plato.sydney.edu.au/archives/win2017/entries/church-turing/
https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/turing-machine/one.html
Turing Machine 是阿兰·图灵构想的机器，尽管它很简单，但是现代的计算机无论制造工艺有多复杂，都没有超出图灵机的构想的原理。可计算性理论里，如果机器的一系列操作数据的规则（如指令集、编程语言、细胞自动机等）可以用来模拟单带图灵机，那么这个机器就符合图灵完备 Turing Complete。图灵机原型有两个重要的部件：

1. 一个有状态信息的读写头，可以擦除、填写纸带内容，相当于 CPU 或程序；
2. 一条无限长的或左右移动的纸带，上面有格子，有存储状态信息，相当于内存；

数学模型中，使用 7 种符号（七元组）来描述图灵机：M={Q，Σ，Γ，δ，q0，qaccept，qreject}，其中 M 表示图灵机，Q，Σ，Γ 都是有限集合，且满足：

1. Q 是状态集合；
2. Σ 是输入字母表，其中不包含特殊的空白符；
3. Γ 是纸带（tape）字母表，其中 Q∈Γ 且 Σ∈Γ ；
4. δ 是转移函数，δ：Q×Γ→Q×Γ×{L，R}，其中 L，R 表示移动方向；
5. q0 是起始状态，q0∈Q；
6. qaccept 是接受状态；
7. qreject 是拒绝状态，且 qreject≠qaccept。

读写头内部本身能保存一个称为“状态”信息，初始状态下，读写头指向第 0 号格子， M 处于状态 q0。机器开始运行后，按照转移函数 δ 所描述的规则进行计算，改变其内部状态，并决定读写头在当前纸带的格子上做怎样的输出，然后让读写头向哪个方向移动。

停机问题 (halting problem) 是逻辑数学的焦点，是第三次数学危机的解决方案。其本质问题是：给定一个图灵机和一个任意语言集合 S，是否会最终停机于每一个 s∈S。显然任意有限 S 是可判定性的、可数的 S 也可停机。


1950 年代设计出来三个重要现代编程语言 ，时至今日仍旧广泛地被采用：

1. Fortran (1955)，名称取自公式翻译器 "FORmula TRANslator"，由约翰·巴科斯等人所发明；
2. LISP，名称取自枚举处理器 "LISt Processor"，由约翰·麦卡锡等人所发明；
3. COBOL，名称取自通用商业导向语言 "COmmon Business Oriented Language"，Short Range Committee 发明，深受葛丽丝·霍普的影响。

Common Lisp 是比较正统的 Lisp，工业化程度高，《黑客与画家》一书有说明。但是缺点是学习难度大，虽然大家都说 CL 久经历练，但是糟粕也不少，这些别人说了没用，只有学过做过两个项目后才有体会。不过总起来说还是一门非常伟大的语言。首先由 Lisp 引进的编程思想包括 if/then/else 控制结构、递归函数调用、动态内存分配、垃圾收集、高阶函数、词法闭包、交互式编程、增量编译以及动态类型……

Common Lisp Quick Reference
http://clqr.boundp.org/clqr-a4-booklet-all.pdf
Common Lisp the Language, 2nd Edition
https://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node1.html

Lisp 语法具有强大的包容性，https://lisp-lang.org/  就有一系列示例演示了 Lisp 如何包容 SQL 查询语言、函数式编程、和面向对象编程。

```lisp
; An example of SxQL, a macro-based SQL DSL
(select (:title :author :year)
  (from :books)
  (where (:and (:>= :year 1995)
               (:< :year 2010)))
  (order-by (:desc :year)))

⇒ ((:title "Practical Common Lisp"
    :author "Peter Seibel"
    :year 2005)
   (:title "ANSI Common Lisp"
    :author "Paul Graham"
    :year 1995))

; Functional
; Functions are first class objects: 
; you can pass them around, store them, call them dynamically. 
; Build your application by composing small, functional building blocks.
(reduce #'-
        (reverse (list 1 2 3)))
⇒ 0

(mapcar #'string-downcase
        (list "Hello" "world!"))
=> ("hello" "world!")

; Object-Oriented
; Build reusable and extensible class hierarchies using the Common Lisp Object System. 
; Design patterns disappear as you adapt the language to your problem domain.
(defclass book ()
  ((title :reader book-title
          :initarg :title)
   (author :reader book-author
           :initarg :author))
  (:documentation "Describes a book."))

(make-instance 'book
               :title "ANSI Common Lisp"
               :author "Paul Graham")
```

Guile 项目起源于 GNU Project，作为 Emacs Lisp 扩展功能得到成功应用。Guile 按照 Scheme 社区的学术报告 R5RS 算法语言方案实现，提供整洁的 通用数据和控制结构。Guile 超越了 R5RS 中提出的朴素语言，完全访问 POSIX 系统调用，网络支持，多线程，动态链接，外部函数调用接口，强大的字符串处理以及实际编程所需的许多其他功能。

2007 年，Scheme 社区同意并发布了 R6RS，这是 RnRS 系列的重要一期。R6RS 扩展核心 Scheme 语言，并标准化了许多非核心功能，包括 Guile 在内的实现，按不同以前的方式进行。随着时间的推移，Guile 已经更新，几乎包含了
R6RS 的功能，并调整一些现有功能以符合 R6RS 规范，以及 2013 年发布的 R7RS 规范。

RnRS (the Revised^n Reports on Scheme) 作为 Scheme 社区的权威报告，对其语言规范的实现者具有积极指导意义。比如，按规范实现的 rsrn base 模块，就 提供各种数据类型相关操作的模块。Guile 3.0.9 版本的源代码文档中包含了 R5RS Texinfo 格式文档，可以作为趁手的备查文档。源代码中同样包含了官方的参考手册，info 格式可以很方便地转换成其它格式，比如 Markdown。

很不幸听到了一个关于 Guile 不支持 Windows 的消息，Re: No Guile on Windows?
https://mail.gnu.org/archive/html/guile-user/2020-07/msg00123.html

尝试在 WSL 中编译 Guile，但是依赖库根本找不齐全，LISP 编程的另一方案是使用 Chez Scheme：

```sh
$cat /etc/aapt/sources.list
# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to 
# newer versions of the distribution. 
deb http://archive.ubuntu.com/ubuntu/ focal main restricted
deb http://security.ubuntu.com/ubuntu/ focal-security multiverse
...

$sudo apt search "GNU MP"
$sudo apt search "libunistring"
$sudo apt search "bdw-gc" # The Boehm-Demers-Weiser GC Library
$sudo apt install "libunistring" "libgmp-ocaml-dev"
$ ./configure --enable-mini-gmp
```


Eli Zaretskii （Stallman 的老朋友）是 2022 年自由软件进步奖的获得者。 Zaretskii 目前是 GNU Emacs 的共同维护者，GNU Emacs 是 GNU 操作系统的旗舰程序之一，三十多年来，他一直是 Emacs 的贡献者，作为共同维护者协调 200 多个活跃贡献者的工作。

Eli Zaretskii Wins  Free Software Foundation (FSF) Award.
Thank you Eli Zaretskii for releasing make-with-guile port version.

0. https://github.com/sunnyden/make
1. https://sourceforge.net/projects/ezwinports/files/make-4.4.1-without-guile-w32-bin.zip/download
2. https://sourceforge.net/projects/ezwinports/files/make-4.4.1-with-guile-w32-bin.zip/download
3. https://sourceforge.net/projects/ezwinports/files/guile-2.0.11-2-w32-bin.zip/download
4. https://sourceforge.net/projects/ezwinports/files/guile-2.0.11-2-w32-src.zip/download


Windows 系统可以使用 msys2 安装移植版本，这个移植平台使用 Pacman 作为软件安装管理工具，并且提供了 API 接口，可以手动查询安装包及依赖关系，并且进行手动安装程序包。安装 Guile 后就可以编写测试脚本，并通过 `guile -s hi.scm` 命令运行测试：

```lisp
    #! /c:/mingw/bin/guile -s
    !#
    (display "Hello, world!" )
    (display (string-append "Hel""l""o! 1+2+3+4=" (number->string (+ 1 2 3 4)) ))
    (newline)
```

```sh
    whereis guile
    # guile: /usr/bin/guile.exe
```

Linix 系统中可以直接 ./hi.scm 执行脚本，Bash 会根据脚本第一行注解找到解释命令，Windows 系统则没有这种服务，需要手动使用 bash 或者解释器程序命令去调用脚本。更好的方法是使用 watch 命令监视脚本的改动，并且在出现改动时重新执行脚本：

    watch "echo ---====+ Watching +====--- && guile -ds hi.scm" --wait 0.1 . 

除了 Guile 嵌入式脚本的支持，GNU make 还提供了一个插件接口，通过 load 指令加载插件动态链接库，此功能目前是 techonology preview 状态。

     load OBJECT-FILE ...
     load OBJECT-FILE(SYMBOL-NAME) ...
    -load silient_load_objects ...

     load ../mk_funcs.so
     load ../mk_funcs.so(init_mk_func)

初始化函数可以通过 SYMBOL-NAME 指定，默认初始化函数是 OBJECT-FILE_gmk_setup，其中 OBJECT-FILE 是指动态链接库名称，但只取其名称中合法的标识字符，字母和数字和下划线，忽略首个非标识字符及之后内容。初始化函数只调用一次，接收参数包括文件名、调用它的脚本所在行号，返回 int 值，功能说明如下：

1. 0 表示初始化失败；
2. -1 表示 GNU make 不会尝试重新构建其插件的目标文件。
3. 非零值表示初始化成功；

成功加载的插件会添加到 $(.LOADED) 变量中，make 支持插件像 Remaking Makefiles 一样重新执行构建。关于插件开发及接口定义的内容参考手册：

12.2.3 Loaded Object Interface
12.2.4 Example Loaded Object

16.2 Utilities in Makefiles 手册逻列了各种可以配合 make 使用的工具：

     awk cat cmp cp diff echo egrep expr false grep install-info ln ls
     mkdir mv printf pwd rm rmdir sed sleep sort tar test touch tr true

    Compression programs such as 'gzip' can be used in the 'dist' rule.

编译器相关命令，应该使用内置变量进行调用：

     ar bison cc flex install ld ldconfig lex
     make makeinfo ranlib texi2dvi yacc

       Use the following 'make' variables to run those programs:

     $(AR) $(BISON) $(CC) $(FLEX) $(INSTALL) $(LD) $(LDCONFIG) $(LEX)
     $(MAKE) $(MAKEINFO) $(RANLIB) $(TEXI2DVI) $(YACC)

额外的文件属性处理工具：

     chgrp chmod chown mknod


Guile 扩展不一定与正在使用的 make 一起编译，可以通过 .FEATURES 检测是否存在 guile 扩展。也可以编译源代码，调用源代码配置脚本 bash configure --with-guile 启用 Guile 进行编译，然后就可以在 Makefile 脚本中通过 guile 函数进行 LISP 编程：

```makefile
    $(info FEATURES: $(filter vpath% load% guile%,$(.FEATURES)) )
    GUILE = $(filter guile%,$(.FEATURES))
    LOAD = $(filter load%,$(.FEATURES))
    $(info 12.1 GNU Guile Integration $(if $(GUILE),,un)supported )
    $(info 12.2 Loading Dynamic Objects $(if $(LOAD),,un)supported )
```

Make 宏编程只有字符串，没有其它数据类型，如何处理 Guile 数据类型？

答案就是使用字符串约定值表示各种 Guile 数据类型：

1. `#f` 使用空字符表示 False；
2. `#t` 任何非空字符串表示 True；
3. `symbol` 和 `number` 转换成对应的字符串表示；
4. `character` 可打印字符原样转换；
5. `string` 字符串按原样转换；
6. `list` 根据以上规则转换列表，默认列表扁平化，如 (a b (c d) e) 转换为 'a b c d e'；
7. `other` 其它任何 Guile 类型都会转换为错误，表示待将来版本支持；


其中代表空字符的 '#f' 和代表非空字符的 '#t' 设计用 Guile 布尔来表达 make 中的布尔条件表达，例如：

     $(if $(guile (access? "myfile" R_OK)),$(info myfile exists))

Guile script 中必需考虑后面的类型转换结果，因为它们最终会以字符串出现在 make 脚本中。可以考虑使用 #f 结束脚本，以避免语法错误等问题。

Guile scripts 脚本中会在启动时导出一个 Guile 模块，gnu make，并导出以下公共的函数：

1. 'gmk-expand' 传入一个参数，它会以 make 宏展开式的结果返回；
2. 'gmk-eval' 传入一个参数，无返回值，参数转换成字符串当作 Makefile 脚本，并通过 make 求值；

以下 Makefile 脚本演示内嵌 Guile 脚本实现文件写入操作，使用 Makefile 脚本中的 define endef 指令可以定义多行的过程定义。因为不能在 make 中表示 Guile ports，所以将它保存在 Guile 脚本中的 MKPORT 变量中，最后一行就是调用 Guile 注册函数登记模块定义：

```makefile
     define GUILEIO
     ;; A simple Guile IO library for GNU make

     (define MKPORT #f)

     (define (mkopen name mode)
       (set! MKPORT (open-file name mode))
       #f)

     (define (mkwrite s)
       (display s MKPORT)
       (newline MKPORT)
       #f)

     (define (mkclose)
       (close-port MKPORT)
       #f)

     #f
     endef

     # Internalize the Guile IO functions
     $(guile $(GUILEIO))
```

可以将代码保存到 Scheme 脚本文件，然后在 Makefile 脚本中通过 guile 函数载入：

     $(guile (load "guileio.scm"))

单独使用脚本文件的好处理就是可以完全使用 Scheme 语法进行编程，而不必考虑 Makefile 脚本语法。加入 Guile 脚本后，就可以使用注册好的函数库，Makefile 脚本中使用它们写数据到指定文件，注意这个工具还是使用列表作为输入：

```makefile
    prog: $(PREREQS)
         @$(guile (mkopen "tmp.out" "w")) \
          $(foreach X,$^,$(guile (mkwrite "$(X)"))) \
          $(guile (mkclose))
         $(LINK) < tmp.out
```

使用 Eli Zaretskii 编译的 Make 4.4.1 调用内嵌的 Guile 脚本解释器加载初始模块时可能出现错误：

    Throw without catch before boot:
    Throw to key misc-error with args ("primitive-load-path" "Unable to find file ~S in load path" ("ice-9/boot-9") #f)Aborting.
    Cannot exit gracefully when init is in progress; aborting.  

在未掌握其运行逻辑之前，这样的问题显得常抽象，完全无法想象是什么环节出了问题。可能是因为环境设置导致 Guile 解释器没有在合适的目录下查找文件吗？显然，从字面上可以得出的信息是：

1. 抛出了异常，并且是 misc-error 异常；
2. 异常参数信息似乎指向 ice-9/boot-9 模块的 primitive-load-path 方法；


Guile 官方文档 2.3 Linking Guile into Programs 给了一个嵌入 Guile 脚本解释器的示范，示范代码只有一个 simple-guile.c 文件，实现了一个简单的嵌入式脚本语言的使用，演示了如何将 C/C++ 定义的函数导出到 Guile 脚本环境，并在脚本中调用它。
1. https://www.gnu.org/software/guile/manual/guile.html#Linking-Guile-into-Programs
2. 

```cpp
#include <stdlib.h>
#include <libguile.h>

static SCM
my_hostname (void)
{
  char *s = getenv ("HOSTNAME");
  if (s == NULL)
    return SCM_BOOL_F;
  else
    return scm_from_locale_string (s);
}

static void
inner_main (void *data, int argc, char **argv)
{
  scm_c_define_gsubr ("my-hostname", 0, 0, 0, my_hostname);
  scm_shell (argc, argv);
}

int
main (int argc, char **argv)
{
  scm_boot_guile (argc, argv, inner_main, 0);
  return 0; /* never reached */
}
```

编译嵌入了 Guile 解释器的主程序，然后运行它进行 Lisp 编程，并调用主程序中注册的函数：

```sh
$ gcc -o simple-guile simple-guile.c `pkg-config --cflags --libs guile-3.0`

$ ./simple-guile
scheme@(guile-user)> (+ 1 2 3)
$1 = 6
scheme@(guile-user)> (my-hostname)
"burns"
```


注意：Guile 库文件名中的版本号带点号，用引号包括避免错误，gcc: error: .0: No such file or directory。

5.2.1 Guile Initialization Functions 所述，初始化方法有三种方形：

1. scm_with_guile 最佳移植的初始化函数；
2. scm_init_guile 当前进程内完成初始化，线程内可以直接调用 Guile；
3. scm_boot_guile scm_shell 为需要增强功能的 C 函数库应用提供脚本扩展；


Make 4.4 嵌入 Guile 实现代码在 make-4.4\src\guile.c 文件独立完成嵌入式脚本扩展，其中导出的到脚本函数通过 gmk_add_function 注册完成，可以看到代码中只向 Makefile 脚本导出了 guile 这一个函数。注册函数的参数列表除了函数名称，还有 min_args max_args flags。

```cpp
/* We could send the flocp to define_new_function(), but since guile is
   "kind of" built-in, that didn't seem so useful.  */
int
guile_gmake_setup (const floc *flocp UNUSED)
{
  /* Create a make function "guile".  */
  gmk_add_function ("guile", func_guile, 0, 1, GMK_FUNC_DEFAULT);

  return 1;
}
```

按照 GNU make 插件接口规定，12.2.3 Loaded Object Interface，所有导出到脚本的函数除了接收函数调用名称，还被调用时的脚本所传入的参数数量，以及参数列表。另一方面，Guile 初始化函数之一，scm_with_guile 就是最具移植性的初始化方法。此方法可以多次调用，可以多线程并发调用，内部使用全局状态服务并在这些调用中保持。开发者的函数会在这个函数回调，因为 GC 需要知道每个线程的堆栈信息。Make 就在回调函数中向 Guile 注册了 `gnu make` 模块。初始化 Guile 参考手册 6.4 Initializing Guile。

```cpp
/* This is the function registered with make  */
static char *
func_guile (const char *funcname UNUSED, unsigned int argc UNUSED, char **argv)
{
  static int init = 0;

  if (! init)
    {
      /* Initialize the Guile interpreter.  */
      scm_with_guile (guile_init, NULL);
      init = 1;
    }

  if (argv[0] && argv[0][0] != '\0')
    return scm_with_guile (internal_guile_eval, argv[0]);

  return NULL;
}

/* Initialize the GNU make Guile module.  */
static void *
guile_init (void *arg UNUSED)
{
  /* Define the module.  */
  make_mod = scm_c_define_module ("gnu make", guile_define_module, NULL);

  /* Get a reference to the object-to-string translator, for later.  */
  obj_to_str = scm_variable_ref (scm_c_module_lookup (make_mod, "obj-to-str"));

  /* Import the GNU make module exports into the generic space.  */
  scm_c_eval_string ("(use-modules (gnu make))");

  return NULL;
}
```


```sh
$ gcc -o simple-guile simple-guile.c `pkg-config --cflags --libs guile-3.0`
$ gcc -o simple-guile box/box.c `pkg-config --cflags --libs guile-3.0`
gcc -IC:/MinGW/include/guile/3.0 -I/usr .\box\box.c

$CCFLAGS= pkg-config --cflags "guile-3.0"
$LDFLAGS= pkg-config --libs "guile-3.0"
gcc -c -o box $CCFLAGS .\box\box.c
gcc $LDFLAGS box

gcc -c -o box.o -IC:/MinGW/include/guile/3.0 -I/usr  .\box\box.c
gcc -LC:/MinGW/lib -l"guile-3.0" -lgc  box.o
gcc -LC:/MinGW/lib -l"guile-3.0" -lgc -IC:/MinGW/include/guile/3.0 -I/usr  box/box.c
gcc -LC:/MinGW/lib -L/usr/lib/../lib -lguile-3.0.dll.a -lgc -llibgmp.dll.a -lffi /usr/lib/libunistring.dll.a -lcryp -IC:/MinGW/include/guile/3.0 -I/usr  box/box.c

pkg-config --cflags --short-errors --msvc-syntax "guile-3.0"
pkg-config --cflags --short-errors "guile-3.0"
pkg-config --libs --short-errors "guile-3.0"
pkg-config --libs --static --short-errors "guile-3.0"
```

使用 Msys2 平台编译的依赖库链接时可能产生函数符号无定义的错误，但是链接库（静态、动态）都可以查询到有导出的函数符号，有可能是 GCC 编译器版本不匹配。MSVC 编译器生成的库文件可以使用 dumpbin 查询编译器信息，MinGW 等平台的库文件可以使用 strings 工具查询其中的字符内容。可以看到 Msys2 平台上的 libguile-devel 3.0 开发库使用了 GCC: (GNU) 11.3.0 编译器。

```sh
objdump -t C:\mingw\lib\libguile-3.0.a
objdump -t C:\mingw\lib\libguile-3.0.dll.a

dumpbin /all some.lib | findstr _MSC_VER
strings C:\mingw\lib\libguile-3.0.a | grep GCC
strings C:\mingw\lib\libguile-3.0.a | grep x86

libguile_3.0_la-init.o:     file format pe-x86-64

SYMBOL TABLE:
[  0](sec  1)(fl 0x00)(ty  20)(scl   3) (nx 1) 0x0000000000000000 invoke_main_func
AUX tagndx 0 ttlsiz 0x0 lnnos 0 next 0
[  2](sec  1)(fl 0x00)(ty  20)(scl   3) (nx 0) 0x0000000000000040 really_cleanup_for_exit
[  3](sec  1)(fl 0x00)(ty  20)(scl   3) (nx 0) 0x0000000000000050 scm_standard_stream_to_port
[  4](sec  1)(fl 0x00)(ty  20)(scl   3) (nx 0) 0x00000000000000d0 cleanup_for_exit
[  5](sec  1)(fl 0x00)(ty  20)(scl   2) (nx 0) 0x0000000000000130 scm_load_startup_files
[  6](sec  1)(fl 0x00)(ty  20)(scl   2) (nx 0) 0x0000000000000190 scm_boot_guile
[  7](sec  1)(fl 0x00)(ty  20)(scl   2) (nx 0) 0x00000000000001f0 scm_i_init_guile

msys_guile_3_0_1_dll_d000182.o:     file format pe-x86-64

SYMBOL TABLE:
...
[  5](sec  1)(fl 0x00)(ty   0)(scl   2) (nx 0) 0x0000000000000000 scm_boot_guile
[  6](sec  3)(fl 0x00)(ty   0)(scl   2) (nx 0) 0x0000000000000000 __imp_scm_boot_guile
[  7](sec  0)(fl 0x00)(ty   0)(scl   2) (nx 0) 0x0000000000000000 _head_msys_guile_3_0_1_dll
```


## ✋ Implicit Rules
https://www.gnu.org/software/make/manual/make.html#Suffix-Rules
https://www.gnu.org/software/make/manual/make.html#Implicit-Rule-Search

隐含规则绝对是 Makefile 宏编程中最令人迷惑的内容，一方面它既便利了常用的语言编译规则的编写，另一方面它又像副作用一样让人难以适应。特别是在不清楚隐式规则背后的功能时，脚本非旦不能简单地完成编译工具，还会带来各种让人迷惑的错误信息。

Make 将所有隐式规则，包括运行环境、脚本解释数据都记录在程序的内置的数据库中，使用命令行参数 -p 就可以打印出来，或者使用 -r 将隐式规则禁用。

      -d                          Print lots of debugging information.
      --debug[=FLAGS]             Print various types of debugging information.
      -i, --ignore-errors         Ignore errors from recipes.
      -k, --keep-going            Keep going when some targets can't be made.

      -p, --print-data-base       Print make's internal database.
      -q, --question              Run no recipe; exit status says if up to date.
      -r, --no-builtin-rules      Disable the built-in implicit rules.
      -R, --no-builtin-variables  Disable the built-in variable settings.

还可以使用 -d 激活调试信息，以观察 make 命令解释脚本的过程：

    Reading makefiles...
    Reading makefile 'Makefile'...
    Updating makefiles....
     Considering target file 'Makefile'.
      Looking for an implicit rule for 'Makefile'.
      Trying pattern rule with stem 'Makefile'.
      Trying implicit prerequisite 'Makefile.o'.
      Trying pattern rule with stem 'Makefile'.
      Trying implicit prerequisite 'Makefile.c'.
      ...
      No implicit rule found for 'Makefile'.
      Finished prerequisites of target file 'Makefile'.
     No need to remake target 'Makefile'.
    Updating goal targets....
    Considering target file 'foo'.
     File 'foo' does not exist.
     Looking for an implicit rule for 'foo'.
     Trying pattern rule with stem 'foo'.
     Trying implicit prerequisite 'foo.o'.
     Found an implicit rule for 'foo'.
      Considering target file 'foo.o'.
       File 'foo.o' does not exist.
       Finished prerequisites of target file 'foo.o'.
      Must remake target 'foo.o'.
    Putting child 0x8000a1bf0 (foo.o) PID 1059 on the chain.
    Live child 0x8000a1bf0 (foo.o) PID 1059 
    echo Building: foo.o
    ...
    Removing child 0x8000a6330 PID 1060 from chain.
        Successfully remade target file 'bar.c'.
       Finished prerequisites of target file 'bar'.
      Must remake target 'bar'.
    cc     bar.c   -o bar
    Putting child 0x80009fb40 (bar) PID 1061 on the chain.
    Live child 0x80009fb40 (bar) PID 1061 
    Reaping losing child 0x80009fb40 PID 1061 
    Removing child 0x80009fb40 PID 1061 from chain.


打印 Makefile 数据列表中，可以看到隐式规则相关的文件扩展名列表：

.SUFFIXES: .out .a .ln .o .c .cc .C .cpp .p .f .F .m .r .y .l .ym .yl .s .S .mod .sym .def .h .info .dvi .tex .texinfo .texi .txinfo .w .ch .web .sh .elc .el

已知的扩展名列表可以通过同名的内置目标 .SUFFIXES 来添加，将需要添加的扩展名设置为此目标的依赖项。


隐含规则触发的情形：

1. 使用模式匹配时，包括 Static Pattern Rules，% 在匹配依赖的过程触发隐式规则；
2. 使用隐式规则时，Old-Fashioned Suffix Rules，如 .c.o : 
3. 显式规则依赖关系不完善，有依赖项未定义相应的 Target。

隐式规则必需有依赖项，没有依赖项就不能触发隐式规则。

禁用隐式规则可以通过命令行参数 make -r 全局禁用隐式规则，如果要进行局部禁用，就需要在 makefile 中自定义完善的显式规则，比如，为 C 语言定义模式匹配规则 `%.o : %.c` 接管所有中间文件的处理。


像以下这种显式规则，它就有可能会触发隐式规则，因为它是不完善的显式规则定义，并未完全定义依赖项的构建规则：

    app : port plugin

对于显式规则，Target 名称必需与上一层 Target 依赖文件一致匹配，才算是相互形成依赖关系。一个写 port，另一个写 port.o 就不算是匹配。

对于隐式规则，需要 Target 和磁盘系统中的文件名（不含扩展名）匹配时，就可以根据 make 数据库找到相应文件的编译命令，并构建出相应的程序，即使没有设置依赖，只要求 Target 名称匹配。但是 Target 名称与文件名不匹配，则不能应用此隐式行为。

```makefile
app : port    # build port.exe if there is a port.c
bar : port.o  # make object if there is a port.c and no port.o
foo : port.c  # make: Nothing to be done for 'foo'.
.DEFAULT_GOAL = app
```

以上用三条规则演示了给目标指定不同的依赖文件类型时的隐式规则行为差别。其中 foo 直接依赖源代码文件，但是又没有定义 recipes，所以无事可做。并且对于源代码文件，make 的数据库中再找不出更深一层的隐式规则。

在处理隐式规则时，根据依赖文件是否存在有不同的行为，如果依赖文件存在，则按 make 命令数据库的隐式规则寻找匹配的文件类型，并调用相应的规则命令。如果没有相应的文件则触发错误信息：

    make: *** No rule to make target 'ported', needed by 'app'.  Stop.   

如果对应有 port.c 这样的可以被 make 隐式规则数据库识别的文件类型存在，那么 make 就会调用相应的编译命令编译出程序，这个过程没有中间文件，因为 make 会自动执行 RM 命令将它们删除。有几个方法可以让 make 保留这些中间生成的文件：

1. 将中间文件指定为依赖文件，比如 `app: port.o plugin.o`；
2. 将中间文件指定为内置目标 .NOTINTERMEDIATE 的依赖文件；
3. 使用内置目标 .PRECIOUS 可以在 make 意外中断时保留目标文件；

通常，Makefile 规则中的 Target 包括依赖的目标文件不会当作中介文件，使用内置目标 .INTERMEDIATE 可以告诉 make 将其依赖项当作中间文件处理。注意，中间文件和中间目标文件的差别，前者是指那些没有定义为 Target 的编译过程生成的文件。

Makefile 这种涉及中间文件的隐式规则的目标构建，称为链式隐式规则 10.4 Chains of Implicit Rules。

将中间目标文件声明为 .SECONDARY 的依赖项，可以避免无效的重新编译行为。不使用的 .SECONDARY 的情况下，即源代码文件没有更新，也会因为中间文件的缺失而进行重新编译。将中间文件声明为 .SECONDARY 的依赖项就可以避免这样的问题。在显式规则中才需要这样做，隐式规则中会自动处理。

注意：.SECONDARY 可能因为错误关系导致无效，中间文件不一定需要声明为 Target，可以通过隐式规则生成。但如果整个依赖关系链其中一个环节错误都可能导致需要重新编译，比如经常出现的就是 Target 文件路径不一致导致的非更新条件下的重新编译。


使用旧风格的 suffix rule，包括 double-suffix 和 single-suffix，尽管后缀规则本身属性隐式规则。通过后缀识别行为/定义的规则，比如双后缀规则 `.c.o`。在编译 port 这个依赖项目时，因为没有后续的定义，所以 make 会尝试定位文件确定类型再决定调用相应的命令。注意，Target 依赖文件的扩展名要与 suffix rule 中的相匹配，这样才会调用相应的规则。

本例使用的双后缀规则对应了 C 语言源代码、目标文件和词法规则分析器三种源文件。这种连续使用 source suffix 和 target suffix 后缀的形式就是 double-suffix，也即是双后缀形式的规则定义，从其执行结果可以知道这种规则就是将前 source 文件处理成后 target 文件。Single-suffix 则是保留 source surfix 文件后缀，比如 source suffix 定义为 .c 就等价于模式匹配规则 `% : %.c`。

使用后缀规则注意，需要使用 .SUFFIXES 列表中显示的已经支持的文件格式。

```makefile
all : app

app : port.o
    # @touch port.c
    @echo app compiling...
    @cc -o app $<

# .NOTINTERMEDIATE : port.o
# .SECONDARY : port.o
# port.o: port.c

.c.o:
    @echo compile $@ - $<
    @CC -c -o $@ $<

.DEFAULT_GOAL = all
```

各种文件对应的隐式规则、默认处理命令如下，变量具体值根据不同的系统环境有所不同：

| Lang         | Implicit Rules | Processors                      |
| -------- | ------- | --------------------- |
| C/C++       | %: %.o   | $(LINK.o) $^ $(LOADLIBES) $(LDLIBS) -o $@
| C/C++       | %: %.c   | $(LINK.c) $^ $(LOADLIBES) $(LDLIBS) -o $@
| C/C++       | %.ln: %.c | $(LINT.c) -C$* $<
| C/C++       | %.o: %.c | $(COMPILE.c) $(OUTPUT_OPTION) $<
| C/C++       | %: %.cc  | $(LINK.cc) $^ $(LOADLIBES) $(LDLIBS) -o $@
| C/C++       | %.o: %.cc | $(COMPILE.cc) $(OUTPUT_OPTION) $<
| C/C++       | %: %.C   | $(LINK.C) $^ $(LOADLIBES) $(LDLIBS) -o $@
| C/C++       | %.o: %.C | $(COMPILE.C) $(OUTPUT_OPTION) $<
| C/C++       | %: %.cpp  | $(LINK.cpp) $^ $(LOADLIBES) $(LDLIBS) -o $@
| C/C++       | %.o: %.cpp | $(COMPILE.cpp) $(OUTPUT_OPTION) $<
| Fortran/Ratfor | %: %.f   | $(LINK.f) $^ $(LOADLIBES) $(LDLIBS) -o $@
| Fortran/Ratfor | %.o: %.f | $(COMPILE.f) $(OUTPUT_OPTION) $<
| Fortran/Ratfor | %: %.F   | $(LINK.F) $^ $(LOADLIBES) $(LDLIBS) -o $@
| Fortran/Ratfor | %.o: %.F | $(COMPILE.F) $(OUTPUT_OPTION) $<
| Fortran/Ratfor | %.f: %.F | $(PREPROCESS.F) $(OUTPUT_OPTION) $<
| Fortran/Ratfor | %: %.r   | $(LINK.r) $^ $(LOADLIBES) $(LDLIBS) -o $@
| Fortran/Ratfor | %.o: %.r | $(COMPILE.r) $(OUTPUT_OPTION) $<
| Fortran/Ratfor | %.f: %.r | $(PREPROCESS.r) $(OUTPUT_OPTION) $<
| Objective-C    | %: %.m   | $(LINK.m) $^ $(LOADLIBES) $(LDLIBS) -o $@
| Objective-C    | %.o: %.m | $(COMPILE.m) $(OUTPUT_OPTION) $<
| Yacc for C    | %.ln: %.y | $(YACC.y) $<; $(LINT.c) -C$* y.tab.c; $(RM) y.tab.c
| Yacc for C    | %.c: %.y  | $(YACC.y) $<; mv -f y.tab.c $@
| Yacc for C    | %.m: %.ym | $(YACC.m) $<
| Lex for Ratfor | %.r: %.l  | $(LEX.l) $< > $@
| Assembly     | %: %.s    | $(LINK.s) $^ $(LOADLIBES) $(LDLIBS) -o $@
| Assembly     | %.o: %.s  | $(COMPILE.s) -o $@ $<
| Assembly     | %: %.S   | $(LINK.S) $^ $(LOADLIBES) $(LDLIBS) -o $@
| Assembly     | %.o: %.S  | $(COMPILE.S) -o $@ $<
| Assembly     | %.s: %.S  | $(PREPROCESS.S) $< > $@
| Modula-2     | %: %.mod  | $(COMPILE.mod) -o $@ -e $@ $^
| Modula-2     | %.o: %.mod | $(COMPILE.mod) -o $@ $<
| Modula-2     | %.sym: %.def | $(COMPILE.def) -o $@ $<
| LaTeX        | %.dvi: %.tex | $(TEX) $<
|             | %.info: %.texinfo | $(MAKEINFO) $(MAKEINFO_FLAGS) $< -o $@
|             | %.dvi: %.texinfo | $(TEXI2DVI) $(TEXI2DVI_FLAGS) $<
|             | %.info: %.texi  | $(MAKEINFO) $(MAKEINFO_FLAGS) $< -o $@
|             | %.dvi: %.texi   | $(TEXI2DVI) $(TEXI2DVI_FLAGS) $<
|             | %.info: %.txinfo | $(MAKEINFO) $(MAKEINFO_FLAGS) $< -o $@
|             | %.dvi: %.txinfo  | $(TEXI2DVI) $(TEXI2DVI_FLAGS) $<
|             | %.c: %.w       | $(CTANGLE) $< - $@
|             | %.tex: %.w     | $(CWEAVE) $< - $@
|             | %.p: %.web      | $(TANGLE) $<
|             | %.tex: %.web     | $(WEAVE) $<
|             | (%): %           | $(AR) $(ARFLAGS) $@ $<
|             | %.c: %.w %.ch   | $(CTANGLE) $^ $@
|             | %.tex: %.w %.ch | $(CWEAVE) $^ $@
|             | %:: %,v     | $(CHECKOUT,v)
|             | %:: RCS/%,v | $(CHECKOUT,v)
|             | %:: RCS/%   | $(CHECKOUT,v)
|             | %:: s.%     | $(GET) $(GFLAGS) $(SCCS_OUTPUT_OPTION) $<
|             | %:: SCCS/s.% | $(GET) $(GFLAGS) $(SCCS_OUTPUT_OPTION) $<

命令变量及对应的默认命令：

| $(LINK.o)        |  cc        |  $(YACC.y)        |  yacc     |
| $(LINK.c)        |  cc        |  $(LEX.l)         |  lex -t   |
| $(LINT.c)        |  lint      |  $(YACC.m)        |  yacc     |
| $(COMPILE.c)     |  cc -c     |  $(LINK.s)        |  cc       |
| $(LINK.cc)       |  g++       |  $(COMPILE.s)     |  as       |
| $(COMPILE.cc)    |  g++ -c    |  $(LINK.S)        |  cc       |
| $(LINK.C)        |  g++       |  $(COMPILE.S)     |  cc -c    |
| $(COMPILE.C)     |  g++ -c    |  $(PREPROCESS.S)  |  cc -E    |
| $(LINK.cpp)      |  g++       |  $(COMPILE.mod)   |  m2c      |
| $(COMPILE.cpp)   |  g++ -c    |  $(COMPILE.def)   |  m2c      |
| $(LINK.f)        |  f77       |  $(TEX)           |  tex      |
| $(COMPILE.f)     |  f77 -c    |  $(TEXI2DVI)      |  texi2dvi |
| $(LINK.F)        |  f77       |  $(MAKEINFO)      |  makeinfo |
| $(COMPILE.F)     |  f77 -c    |  $(CWEAVE)        |  cweave   |
| $(PREPROCESS.F)  |  f77 -F    |  $(TANGLE)        |  tangle   |
| $(LINK.m)        |  cc        |  $(WEAVE)         |  weave    |
| $(COMPILE.m)     |  cc -c     |  $(AR)            |  ar       |
| $(LINK.r)        |  f77       |  $(CTANGLE)       |  ctangle  |
| $(COMPILE.r)     |  f77 -c    |  $(GET)           |  get      |
| $(PREPROCESS.r)  |  f77 -F     

命令变量及默认参数配置：

    .SHELLFLAGS := -c
    ARFLAGS = rv
    COMPILE.F = $(FC) $(FFLAGS) $(CPPFLAGS) $(TARGET_ARCH) -c
    COMPILE.S = $(CC) $(ASFLAGS) $(CPPFLAGS) $(TARGET_MACH) -c
    COMPILE.c = $(CC) $(CFLAGS) $(CPPFLAGS) $(TARGET_ARCH) -c
    COMPILE.cc = $(CXX) $(CXXFLAGS) $(CPPFLAGS) $(TARGET_ARCH) -c
    COMPILE.def = $(M2C) $(M2FLAGS) $(DEFFLAGS) $(TARGET_ARCH)
    COMPILE.f = $(FC) $(FFLAGS) $(TARGET_ARCH) -c
    COMPILE.m = $(OBJC) $(OBJCFLAGS) $(CPPFLAGS) $(TARGET_ARCH) -c
    COMPILE.mod = $(M2C) $(M2FLAGS) $(MODFLAGS) $(TARGET_ARCH)
    COMPILE.p = $(PC) $(PFLAGS) $(CPPFLAGS) $(TARGET_ARCH) -c
    COMPILE.r = $(FC) $(FFLAGS) $(RFLAGS) $(TARGET_ARCH) -c
    COMPILE.s = $(AS) $(ASFLAGS) $(TARGET_MACH)
    F77FLAGS = $(FFLAGS)
    LEX.l = $(LEX) $(LFLAGS) -t
    LEX.m = $(LEX) $(LFLAGS) -t
    LINK.F = $(FC) $(FFLAGS) $(CPPFLAGS) $(LDFLAGS) $(TARGET_ARCH)
    LINK.S = $(CC) $(ASFLAGS) $(CPPFLAGS) $(LDFLAGS) $(TARGET_MACH)
    LINK.c = $(CC) $(CFLAGS) $(CPPFLAGS) $(LDFLAGS) $(TARGET_ARCH)
    LINK.cc = $(CXX) $(CXXFLAGS) $(CPPFLAGS) $(LDFLAGS) $(TARGET_ARCH)
    LINK.f = $(FC) $(FFLAGS) $(LDFLAGS) $(TARGET_ARCH)
    LINK.m = $(OBJC) $(OBJCFLAGS) $(CPPFLAGS) $(LDFLAGS) $(TARGET_ARCH)
    LINK.o = $(CC) $(LDFLAGS) $(TARGET_ARCH)
    LINK.p = $(PC) $(PFLAGS) $(CPPFLAGS) $(LDFLAGS) $(TARGET_ARCH)
    LINK.r = $(FC) $(FFLAGS) $(RFLAGS) $(LDFLAGS) $(TARGET_ARCH)
    LINK.s = $(CC) $(ASFLAGS) $(LDFLAGS) $(TARGET_MACH)
    LINT.c = $(LINT) $(LINTFLAGS) $(CPPFLAGS) $(TARGET_ARCH)
    MAKEFLAGS = p
    MFLAGS = -p
    PREPROCESS.F = $(FC) $(FFLAGS) $(CPPFLAGS) $(TARGET_ARCH) -F
    PREPROCESS.S = $(CC) -E $(CPPFLAGS)
    PREPROCESS.r = $(FC) $(FFLAGS) $(RFLAGS) $(TARGET_ARCH) -F
    YACC.m = $(YACC) $(YFLAGS)
    YACC.y = $(YACC) $(YFLAGS)


各种命令功能说明：

01. *AR*  函数库打包程序。
02. *AS*  汇编语言编译程序。
03. *CC*  C 语言编译程序。
04. *CXX*  C++ 语言编译程序。
05. *CO*  从 RCS 文件中扩展文件程序。
06. *CPP*  C 语言程序的预处理器（输出是标准输出设备）。
07. *FC*  Fortran 和 Ratfor 的编译器和预处理程序。
08. *GET*  从 SCCS 文件中扩展文件的程序。
09. *LEX*  Lex 方法分析器程序（针对于C或Ratfor）。
10. *PC*  Pascal 语言编译程序。
11. *YACC*  Yacc 文法分析器（针对于C程序）。
12. *YACCR*  Yacc 文法分析器（针对于Ratfor程序）。
13. *MAKEINFO*  Texinfo（.texi）到 Info 文件的转换程序。
14. *TEX*  TeX 文件到 TeX DVI 文件的转换程序。
15. *TEXI2DVI*  Texinfo 到 TeX DVI 文件的转换程序。
16. *WEAVE*  Web 到 TeX 的转换程序。
17. *CWEAVE*  转换 C Web 到 TeX的程序。
18. *TANGLE*  转换 Web 到 Pascal 语言的程序。
19. *CTANGLE*  转换 C Web 到 C。
20. *RM*  删除文件命令。


## 💻 Make CLI

    Usage: make [options] [target] ...
    Options:
      -b, -m                      Ignored for compatibility.
      -B, --always-make           Unconditionally make all targets.
      -C DIRECTORY, --directory=DIRECTORY
                                  Change to DIRECTORY before doing anything.
      -d                          Print lots of debugging information.
      --debug[=FLAGS]             Print various types of debugging information.
      -e, --environment-overrides
                                  Environment variables override makefiles.
      -E STRING, --eval=STRING    Evaluate STRING as a makefile statement.
      -f FILE, --file=FILE, --makefile=FILE
                                  Read FILE as a makefile.
      -h, --help                  Print this message and exit.
      -i, --ignore-errors         Ignore errors from recipes.
      -I DIRECTORY, --include-dir=DIRECTORY
                                  Search DIRECTORY for included makefiles.
      -j [N], --jobs[=N]          Allow N jobs at once; infinite jobs with no arg.
      -k, --keep-going            Keep going when some targets can't be made.
      -l [N], --load-average[=N], --max-load[=N]
                                  Don't start multiple jobs unless load is below N.
      -L, --check-symlink-times   Use the latest mtime between symlinks and target.
      -n, --just-print, --dry-run, --recon
                                  Don't actually run any recipe; just print them.
      -o FILE, --old-file=FILE, --assume-old=FILE
                                  Consider FILE to be very old and don't remake it.
      -O[TYPE], --output-sync[=TYPE]
                                  Synchronize output of parallel jobs by TYPE.
      -p, --print-data-base       Print make's internal database.
      -q, --question              Run no recipe; exit status says if up to date.
      -r, --no-builtin-rules      Disable the built-in implicit rules.
      -R, --no-builtin-variables  Disable the built-in variable settings.
      -s, --silent, --quiet       Don't echo recipes.
      --no-silent                 Echo recipes (disable --silent mode).
      -S, --no-keep-going, --stop
                                  Turns off -k.
      -t, --touch                 Touch targets instead of remaking them.
      --trace                     Print tracing information.
      -v, --version               Print the version number of make and exit.
      -w, --print-directory       Print the current directory.
      --no-print-directory        Turn off -w, even if it was turned on implicitly.
      -W FILE, --what-if=FILE, --new-file=FILE, --assume-new=FILE
                                  Consider FILE to be infinitely new.
      --warn-undefined-variables  Warn when an undefined variable is referenced.

    This program built for x86_64-pc-msys
    Report bugs to <bug-make@gnu.org>


## 📜 Makefile Syntaxes 语法列表
https://www.gnu.org/software/make/manual/make.html#Quick-Reference
https://www.gnu.org/software/make/manual/make.html#Error-Messages
https://www.gnu.org/software/make/manual/make.html#Complex-Makefile
https://www.gnu.org/software/make/manual/make.html#Standard-Targets
https://www.gnu.org/software/make/manual/make.html#Concept-Index

```makefile
    # 3.3 Including Other Makefiles
    include filenames…
    include foo *.mk $(bar)
    include foo a.mk b.mk c.mk bish bash
    -include filenames… # ignore errors
    # 3.7 How make Reads a Makefile
    # 3.7.1 Variable Assignment
    immediate = deferred
    immediate ?= deferred
    immediate := immediate
    immediate ::= immediate
    immediate :::= immediate-with-escape
    immediate += deferred or immediate
    immediate != immediate

    define immediate
      deferred
    endef

    define immediate =
      deferred
    endef

    define immediate ?=
      deferred
    endef

    define immediate :=
      immediate
    endef

    define immediate ::=
      immediate
    endef

    define immediate :::=
      immediate-with-escape
    endef

    define immediate +=
      deferred or immediate
    endef

    define immediate !=
      immediate
    endef
    # 3.7.2 Conditional Directives
    # Conditional directives are parsed immediately. 
    # 3.7.3 Rule Definition
    # A rule is always expanded the same way, regardless of the form:
    immediate : immediate ; deferred
            deferred

    # 4.2 Rule Syntax
    target … : prerequisites …
            recipe
            …
            …
    targets : prerequisites ; recipe
            recipe
            …
    # 4.3 Types of Prerequisites
    targets : normal-prerequisites | order-only-prerequisites

    # 4.10 Multiple Targets in a Rule
    # 4.11 Multiple Rules for One Target
    # 4.12.1 Syntax of Static Pattern Rules
    targets …: target-pattern: prereq-patterns …
            recipe
            …
    # 5.7 Recursive Use of make
    subsystem:
            cd subdir && $(MAKE)
    subsystem:
            $(MAKE) -C subdir
    # 5.7.2 Communicating Variables to a Sub-make
    export variable …
    unexport variable …
    export variable = value
    # 6.1 Basics of Variable References
    objects = program.o foo.o utils.o
    program : $(objects)
            cc -o program $(objects)
    $(objects) : defs.h
    # 6.2.1 Recursively Expanded Variable Assignment
    foo = $(bar)
    bar = $(ugh)
    ugh = Huh?
    all:;echo $(foo)  # echo Huh?
    # 6.2.2 Simply Expanded Variable Assignment
    x := foo
    y := $(x) bar # foo bar
    z  = $(x) bar # later bar
    x := later
    # 6.2.4 Conditional Variable Assignment
    FOO ?= bar
    ifeq ($(origin FOO), undefined)
      FOO = bar
    endif
    # 6.7 The override Directive
    # To override or append more text to a variable defined on the command line, use:
    override CFLAGS = -fPIC
    override CFLAGS := -fPIC
    override CFLAGS += -g
    # 6.8 Defining Multi-Line Variables
    define two-lines
    echo foo
    echo $(bar)
    endef
    # 6.11 Target-specific Variable Values
    target … : variable-assignment
    # 6.12 Pattern-specific Variable Values
    pattern … : variable-assignment
    # 7.1 Example of a Conditional
    libs_for_gcc = -lgnu
    normal_libs =
    foo: $(objects)
    ifeq ($(CC),gcc)
            $(CC) -o foo $(objects) $(libs_for_gcc)
    else
            $(CC) -o foo $(objects) $(normal_libs)
    endif
    # 8 Functions for Transforming Text
    # 8.1 Function Call Syntax
    $(function arguments)   # $(function a,b,c...)
    ${function arguments}   # ${function a,b,c...}
    # 8.2 Functions for String Substitution and Analysis
    $(subst from,to,text)}
    $(patsubst pattern,replacement,text)
    $(strip string) 
    $(findstring find,in)
    $(filter pattern…,text)     # $(filter %.c %.s,$(sources))
    $(filter-out pattern…,text)
    $(sort list)        # $(sort foo bar lose) produces‘bar foo lose’.
    $(word n,text)     # $(word 2, foo bar baz) produces bar
    $(wordlist s,e,text) # $(wordlist 2, 3, foo bar baz) produces‘bar baz’.
    $(words text)      # $(info $(words "bad apple pie")) produces 3
    $(firstword names…)
    $(lastword names…)
    # 8.3 Functions for File Names
    $(dir names…)             # $(dir src/foo.c bar) produces‘src/ ./’. 
    $(notdir names…)           # $(notdir src/foo.c bar) produces‘foo.c bar’. 
    $(suffix names…)          # $(suffix src/foo.c bar) produces‘.c’. 
    $(basename names…)        # $(basename src/foo.c bar) produces‘src/foo bar’.
    $(addsuffix suffix,names…) # $(addsuffix .c,foo bar) produces‘foo.c bar.c’.
    $(addprefix prefix,names…) # $(addprefix src/,foo bar) produces‘src/foo src/bar’.
    $(join list1,list2)         # $(join a b,.c .o) produces‘a.c b.o’.
    $(wildcard pattern)
    $(realpath names…)        # produces path lieke /a/b/c
    $(abspath names…)        # produces path lieke /a/b/c
    # 8.4 Functions for Conditionals
    $(if condition,then-part[,else-part])
    $(or condition1[,condition2[,condition3…]])
    $(and condition1[,condition2[,condition3…]])
    $(intcmp lhs,rhs[,lt-part[,eq-part[,gt-part]]])  v4.4
    # 8.5 The let Function
    $(let var [var ...],[list],text)
    reverse = $(let first rest,$1,\
                $(if $(rest),$(call reverse,$(rest)) )$(first))

    all: ; @echo $(call reverse,d c b a)
    # 8.6 The foreach Function
    $(foreach var,list,text)
    # 8.7 The file Function
    $(file op filename[,text]) # $(file >$@.in,$^)  $(file >>$@.in,$^) $(file < file/to/be/read)
    # 8.8 The call Function
    $(call variable,param,param,…)
    # 8.9 The value Function
    $(value variable)          # $(FOO) equals to $(value FOO)
    # 8.10 The eval Function
    $(eval txt)
    # 8.11 The origin Function
    $(origin variable)
    # 8.12 The flavor Function
    $(flavor variable)
    # 8.13 Functions That Control Make
    $(error text…)
    $(warning text…)
    $(info text…) 
    # 8.14 The shell Function
    $(shell command argus...)  # contents := $(shell cat foo)
    # 8.15 The guile Function
    # GNU Guile embedded extension language ( Scheme programming language )
    https://www.gnu.org/software/guile/
    https://www.gnu.org/software/make/manual/make.html#Guile-Integration
    $(guile arg)  
    # 10.5 Defining and Redefining Pattern Rules
    # 10.5.3 Automatic Variables
    %.o : %.c ; recipe…
    # 12 Extending GNU make
    # 12.1 GNU Guile Integration
    # 12.2 Loading Dynamic Objects
    # 12.2.1 The load Directive
    load object-file …
    load object-file(symbol-name) …
    load ../mk_funcs.so(mk_funcs_gmk_setup) # default moodule init function
    load ../mk_funcs.so(init_mk_func)
    # 12.2.4 Example Loaded Object
    https://www.gnu.org/software/make/manual/make.html#Loaded-Object-Example
```


# 🐣 NMake 微软自动化构建工具
- NMAKE Reference https://docs.microsoft.com/en-us/cpp/build/reference/nmake-reference?view=msvc-160
- Use the Microsoft C++ toolset from the command line https://docs.microsoft.com/en-us/cpp/build/building-on-the-command-line?view=msvc-160

NMAKE.EXE 是 Microsoft Program Maintenance Utility，随 Visual Studio 提供的自动化编译工具，也使用 Makefile 脚本。

因为环境变量配置，通常它需要和 Visual Studio 配合使用，或者以命令行方式调用就需要配合 Visual Studio 提供的环境配置脚本使用：

- vcvars32.bat
- vcvars64.bat
- vcvarsall.bat
- vcvarsamd64_x86.bat
- vcvarsx86_amd64.bat

可以在安装目录下找到它们，根据编译目标的 CPU 架构选择脚本：

    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Auxiliary\Build\

这通常需要对 VS 编译工具的使用非常熟悉，知道如何设置参数，其中 vcvarsall.bat 是具有可配置的功能，其它脚本都是其它它定制的，可以直接使用它：

    vcvarsall.bat [architecture] [platform_type] [winsdk_version] [-vcvars_ver=vcversion]
    vcvarsall.bat amd64_arm uwp -vcvars_ver=14.16 

已支持的一些构架：

    |       architecture       |      Compiler      | Host computer architecture | Target architecture |
    |--------------------------|--------------------|----------------------------|---------------------|
    | x86                      | x86 32-bit native  | x86, x64                   | x86                 |
    | x86_amd64 or x86_x64     | x64 on x86 cross   | x86, x64                   | x64                 |
    | x86_arm                  | ARM on x86 cross   | x86, x64                   | ARM                 |
    | x86_arm64                | ARM64 on x86 cross | x86, x64                   | ARM64               |
    | amd64 or x64             | x64 64-bit native  | x64                        | x64                 |
    | amd64_x86 or x64_x86     | x86 on x64 cross   | x64                        | x86                 |
    | amd64_arm or x64_arm     | ARM on x64 cross   | x64                        | ARM                 |
    | amd64_arm64 or x64_arm64 | ARM64 on x64 cross | x64                        | ARM64               |

运行 NMAKE 命令和 make 类似，可以指定要编译的目标，或脚本文件：

    NMAKE [option ...] [macros ...] [targets ...] [@command-file ...]
    NMAKE [options...] [/f makefile] [/x stderrfile] [macrodefs] [targets]

但是 NAME 有些概念的叫法和 make 不同，例如，内置的变量或用户定义的变量在 NAME 手册中称作 macro，使用一个变量的语法格式 `$(var)`。

NMAKE 预定义的文件宏：

    | Macro |                               Meaning                                |
    |-------|----------------------------------------------------------------------|
    | $@    | 当前目标路径 (path, base name, extension)                            |
    | $$@   | 当前目标路径 (path, base name, extension) 限定作为依赖项中的依赖项。 |
    | $*    | 当前目标路径，不含扩展名。                                           |
    | $**   | 当前目标的所有依赖项。                                               |
    | $?    | 当前目标所有更新的依赖项。                                           |
    | $<    | 当前目标更新的依赖文件，只在命令推理规则有效。                       |

如果使用 `$**` 或 `$?`，可以使用感叹号修饰命令，! command 这样可以对每一个更新的依赖文件执行命令。

NMAKE 中叫做宏的东西很像 make 中的变量，它们是有差别的，例如，`$(**:.c=.obj)` 这种 `$(macro:string1=string2)` 格式就是进行宏文本替换，把 .c 后缀换成 .obj。

宏内容替换可以应用所有预定义宏，除了 `$$@`。

可以指定这此文件宏的约束，后缀以下字符，使其具有特定功能，并使用圆括号包括起来，如 `$(<B)`：

    | Modifier |       Resulting filename part       |
    |----------|-------------------------------------|
    | D        | Drive plus directory                |
    | B        | Base name                           |
    | F        | Base name plus extension            |
    | R        | Drive plus directory plus base name |

递归宏，可以在脚本中递归调用 NMAKE：

    |   Macro   |                             Definition                             |
    |-----------|--------------------------------------------------------------------|
    | MAKE      | 最初用于调用 NMAKE 的命令，$(MAKE) 返回全路径。                    |
    | MAKEDIR   | 执行 NMAKE 命令的当前目录。                                        |
    | MAKEFLAGS | 传入 NMAKE 命令的选项，使用 /$(MAKEFLAGS) 宏将不包含 /F 选项。 |

NMAKE 使用以下命令及选项预定义宏：

    | Microsoft product | Command macro |    Defined as    | Options macro |
    |-------------------|---------------|------------------|---------------|
    | Macro Assembler   | AS            | ml, ias, or ml64 | AFLAGS        |
    | C Compiler        | CC            | cl               | CFLAGS        |
    | C++ Compiler      | CPP           | cl               | CPPFLAGS      |
    | C++ Compiler      | CXX           | cl               | CXXFLAGS      |
    | Resource Compiler | RC            | rc               | RFLAGS        |

所以，可以通过 `$(AS)` 调用宏汇编命令，即 ML.EXE，而对应的选项则在 `AFLAGS` 中设置，如 `AFLAGS=/c /coff`。

当然还有环境变量：

```makefile
PATH=$(PATH);\nonesuch

all:
    echo %%PATH%%
```

目标定义的基本格式和 make 很像，也具有推理能力，以下是基本使用规则：

```makefile
targets... : dependents...
    commands...

# Multiple targets
bounce.exe leap.exe : jump.obj
   echo Building...

## 🐤🐥 is evaluated as:
bounce.exe : jump.obj
   echo Building...

leap.exe : jump.obj
   echo Building...

# Cumulative dependencies
bounce.exe : jump.obj
bounce.exe : up.obj
   echo Building bounce.exe...

## 🐤🐥 is evaluated as:
bounce.exe : jump.obj up.obj
   echo Building bounce.exe...

# Targets in multiple description blocks
target.lib :: one.asm two.asm three.asm
    ml one.asm two.asm three.asm
    lib target one.obj two.obj three.obj
target.lib :: four.c five.c
    cl /c four.c five.c
    lib target four.obj five.obj

# Dependency side effects
bounce.exe : jump.obj
   echo Building bounce.exe...

bounce.exe : up.obj

## 🐤🐥 is evaluated as:
bounce.exe : jump.obj up.obj
   echo Building bounce.exe...

# This effect doesn't occur if a double colon (::) is used.
bounce.exe :: jump.obj
   echo Building bounce.exe...

bounce.exe :: up.obj

## 🐤🐥 is evaluated as:
bounce.exe : jump.obj
   echo Building bounce.exe...

bounce.exe : up.obj
    echo invokes an inference rule
```

NMAKE 使用 Pseudotargets 来编写规则的文件依赖行，以下规则会在执行时拷贝当前目录下的所有文件到指定的位置：

```sh
UPDATE : *.*
!COPY $** c:\product\release
```

以下规则，执行 exe 链接前会先设置 LIB 环境变量：

```sh
all : setenv project1.exe project2.exe

project1.exe : project1.obj
    LINK project1;

project2.exe : project2.obj
    LINK project2;

setenv :
    set LIB=\project\lib
```

以下规则指定了文件的搜索路径：

```sh
reverse.exe : {\src\omega;e:\repo\backwards}retro.obj
```

推理规则会根据被推断目标依赖项来决定提是否执行更新目标的命令，推理规则匹配具有相同基本名称的单个 target 和依赖项。推理规则是用户定义或预定义的，预定义的规则也可以重新定义。

以下推理规则定义格式中，`fromext` 表示一个依赖文件扩展名，`toext` 表示一个目标文件扩展名，同样也可以指定搜索路径：

```sh
.fromext.toext:
   commands

# Search Paths in Rules
{frompath}.fromext{topath}.toext:
   commands

# Batch-Mode Rules
{frompath}.fromext{topath}.toext::
   commands
```

扩展名不分大小写，也可以使用 Macros 来表达 fromext 和 toext，在处理时展开 Macros。

`.fromext` 中的句点必需是行内容的开始位置，而冒号前可以有空格或制表符。如果要在同一行编写命令，可以将命令编写在分号后面。

```sh
project.obj : project.c project.h ; cl /c project.c
```

以下是预定义推理规则：

    |   Rule   |         Command          | Default action | Batch Rule | Runs on |
    |----------|--------------------------|----------------|------------|---------|
    | .asm.exe | $(AS) $(AFLAGS) $<       | ml $<          | no         | x86     |
    | .asm.obj | $(AS) $(AFLAGS) /c $<    | ml /c $<       | yes        | x86     |
    | .asm.exe | $(AS) $(AFLAGS) $<       | ml64 $<        | no         | x64     |
    | .asm.obj | $(AS) $(AFLAGS) /c $<    | ml64 /c $<     | yes        | x64     |
    | .c.exe   | $(CC) $(CFLAGS) $<       | cl $<          | no         | all     |
    | .c.obj   | $(CC) $(CFLAGS) /c $<    | cl /c $<       | yes        | all     |
    | .cc.exe  | $(CC) $(CFLAGS) $<       | cl $<          | no         | all     |
    | .cc.obj  | $(CC) $(CFLAGS) /c $<    | cl /c $<       | yes        | all     |
    | .cpp.exe | $(CPP) $(CPPFLAGS) $<    | cl $<          | no         | all     |
    | .cpp.obj | $(CPP) $(CPPFLAGS) /c $< | cl /c $<       | yes        | all     |
    | .cxx.exe | $(CXX) $(CXXFLAGS) $<    | cl $<          | no         | all     |
    | .cxx.obj | $(CXX) $(CXXFLAGS) /c $< | cl /c $<       | yes        | all     |
    | .rc.res  | $(RC) $(RFLAGS) /r $<    | rc /r $<       | no         | all     |

如果存在可用的推理规则，NMAKE 就为目标设定一个推理依赖，应用以下规则：

- `toext` 匹配到目标的扩展名。
- `fromext` 在当前目录或指定目录匹配到文件扩展名，且文件和目标具有相同的基本名。
- `fromext` 在 `.SUFFIXES` 列表中，没有其它具有更优先的 `fromext` 匹配。
- 没有其它更优先的显式依赖 `.SUFFIXES`。

NMAKE 定义了几个 Dot Directives：

    |      Directive      |                     Purpose                      |
    |---------------------|--------------------------------------------------|
    | .IGNORE :           | 忽略命令的非零退出代码，                         |
    | .PRECIOUS : targets | 保留目标文件，如果执行过程中出现中断。           |
    | .SILENT :           | 安静模式执行命令，从这个指令出现位置到脚本结束。 |
    | .SUFFIXES : list    | 列表推理匹配的规则的扩展名。                     |

默认，NMAKE 会在遇到命令错误返回时结束执行，即非零返回码，要恢复错误检查可使用 !CMDSWITCHES，要忽略单个命令的错误可以使用负号修饰命令，如`-[number] command`。也可以执行 NMAKE 时传入参数 /I 来禁用错误检查。默认 NMAKE 会在 CTRL+C or CTRL+BREAK 中断时删除正在更新的目标文件。

单个命令安静模式执行使用 @ 前缀，如 `@echo silent`，或者在执行 NMAKE 时使用 /S 选择激活安静模式。

预定义的扩展名包括 .exe .obj .asm .c .cpp .cxx .bas .cbl .for .pas .res .rc .f .f90

NMAME 支持文件及目录的通配符号 * 和 ?，在多文件的处理时很方便。

```sh
# Comment on line by itself
OPTIONS = /MAP  # Comment on macro definition line

all.exe : one.obj two.obj  # Comment on dependency line
    link one.obj two.obj
# Comment in commands block
#   copy *.obj \objects  # Command turned into comment
    copy one.exe \release

.obj.exe:  # Comment on inference rule line
    link $<

my.exe : my.obj ; link my.obj  # Err: cannot comment this
# Error: # must be the first character
.obj.exe: ; link $<  # Error: cannot comment this

# To specify a literal number sign, precede it with a caret (^),
DEF = ^#define  #Macro for a C preprocessing directive
```

脱字号 caret 即 ^ 用来做字符转义，在特殊符号前面使用 ^ 就可以转义为普通字符，所有特殊符号包括 `: ; # ( ) $ ^ \ { } ! @ —`。

在命令表达式中，% 符号是文件指示符号，要转义为普通字符需要使用一个前缀的百分号进行转义 %% 来表达一个百分号，其它地方 NMAKE 将百分号当作普通字符。

另外，美元符号 $ 在命令中也需要前缀一个美元符号进行转义 $$ 表示普通符号，当然用脱字符也可以 ^$。

```sh
# Sample makefile

!include <win32.mak>

all: simple.exe challeng.exe

.c.obj:
  $(cc) $(cdebug) $(cflags) $(cvars) $*.c

simple.exe: simple.obj
  $(link) $(ldebug) $(conflags) -out:simple.exe simple.obj $(conlibs) lsapi32.lib

challeng.exe: challeng.obj md4c.obj
  $(link) $(ldebug) $(conflags) -out:challeng.exe $** $(conlibs) lsapi32.lib
```

示范：

```sh
LFLAGS=/subsystem:console
AFLAGS=/c /coff
# CFLAGS=/c /coff
# CPPFLAGS=/c /coff

all: 1.43 5.1

1.43: 1.43_prog.obj
    link $(LFLAGS) $?
1.43_prog.obj: 1.43_prog.asm
    $(AS) $(AFLAGS) $?

5.1: 5.1_prog.obj
    link $(LFLAGS) $?
5.1_prog.obj: 5.1_prog.asm
    $(AS) $(AFLAGS) $?

clean: 
    del *.obj
    del *.exe

.SUFFIXES : suffixlist
```


# 🐣 MSBuild Concepts & vcxproj
- https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/msbuild/msbuild-concepts
- https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/msbuild/task-writing
- https://docs.microsoft.com/en-us/cpp/build/reference/vcxproj-file-structure
- https://docs.microsoft.com/en-us/cpp/build/how-to-use-build-events-in-msbuild-projects
- https://github.com/dotnet/docs
- https://github.com/dotnet/dotnet-api-docs
- https://github.com/dotnet/corefx

Visual Sutdio 执行调试就卡住，虽然没有卡死但没有几分钟都不能进入调试状态，这可能是使用网络
加载调试符号导致的问题。

设置：工具 -> 选项 -> 调试 -> 符号 -> Microsoft 符号服务器，不要勾选，并且设置为
“仅加载指定的模块”。调试分类下面勾选：使用托管兼容模式，使用本机兼容模式。

MSBuild Tools 是独立于 Visual Studio 的构建工具，可以通过命令调用执行程序构建。执行脚本前，
先执行 MSVC 环境配置批处理脚本，根据需要设置平台类型，如 x86 或 x64，然后再配合执行 CMake -G 
生成构建脚本：

```sh
> "C:/Program Files (x86)/Microsoft Visual Studio/2022/BuildTools/Common7/Tools/VsDevCmd.bat"
> "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat" x86
> "C:/Program Files (x86)/Microsoft Visual Studio/2017/BuildTools/VC/Auxiliary/Build/vcvars64.bat"
> cmake .. -G "Sublime Text 2 - Ninja"
```

MSBuild project whose settings are stored in an XML project file that has the 
extension *.vcxproj*. The project file may also import *.props* files and 
*.targets* files where settings can be stored.

The first thing to notice is that the top-level elements appear in a particular 
order. For example:

01. Most of the property groups and item definition groups occur after the import 
    for Microsoft.Cpp.Default.props.

02. All targets are imported at the end of the file.

03. There are multiple property groups, each with a unique label, and they 
    occur in a particular order.

安装最新的 MSBuild 2020 竟然没有提供 Microsoft.Cpp.Default.props，可以使用 2017/2019 
版本，这是一个基础配置文件，一般 C++ 项目都需要引用它。

    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Microsoft\VC\v160\Microsoft.Cpp.ToolsetLocation.props

各种项目扩展名：

.sln 解决方案文件，一个 slution 可以包含多语言的项目；
.proj 主项目文件，MSBuild 命令执行时会对它进行编译；
.vcproj 项目文件，使用 C++ 语言，Visual Studio .NET 日期版本使用；
.vcxproj 项目文件，使用 C++ 语言，新版本格式，包含 .h .cpp .hpp 等文件；
.csproj 项目文件，使用 C# 语言，包含 .cs 等文件；

XML 项目文件的主要节点：

01. *Properties*  Properties are key/value pairs that you can use to configure
     builds.
02. *Items*   General concepts behind the MSBuild file format and how the pieces
     fit together.
03. *Targets* Group of tasks in a particular order of the build process to be
     called on the command line.
04. *Tasks* a unit of executable code that can be used by MSBuild to perform
     atomic build operations.

Because MSBuild properties are name-value pairs that have just one string value, 
they are often described as *scalar*. Because MSBuild item types are lists of 
items, they are often described as *vector*. 

Property 和 Item 都用来向任务节点传递信息的基础节点，可以设置条件，保存数据，在整个工程文件中
可以引用。

```xml
<ItemGroup>  
    <KeyFile Include="KeyFile.cs">  
        <Version>1.0.0.3</Version>  
    </KeyFile>  
</ItemGroup>  
<PropertyGroup>  
    <!-- Property Function -->
    <Today>$([System.DateTime]::Now.ToString("yyyy.MM.dd"))</Today>

    <KeyFileVersion>@(KeyFile->'%(Version)')</KeyFileVersion>  
</PropertyGroup>  
<Target Name="AfterBuild">  
    <Message Text="KeyFileVersion: $(KeyFileVersion)" />  
</Target>  
```

通过命令行指定属性，如 *msbuild.exe MyProj.proj /p:Configuration=DEBUG*。可以直接
访问环境变量，如 *$(PATH)*。

Target 可以设置依赖关系，可以指定初始构建目标和默认构建目标，也可以使用 Import 节点导入
其它工程文件的目标。执行命令时，可以指定默认的构建目标，如 *msbuild /target:Comile;Link*。

通过设置 BeforeTargets 和 AfterTargets 可以让目标于指定目标之前或之前运行。

项目的默认 XML 命名空间必须为 MSBuild XML 命名空间或无命名空间，使用 HTTPS 可能无法识别。

```xml
<Project xmlns="https://schemas.microsoft.com/developer/msbuild/2003"
    InitialTargets="Optimizing" 
    DefaultTargets="Compile;Link" >  

    <!-- <Import Project="PCBuild/pythoncore.vcxproj"/> -->

    <Target Name="Compile">  
        <Message Text="Compiling" />  
    </Target>  
    <Target Name="Link">  
        <Message Text="Linking" />  
    </Target>  
    <Target Name="Optimizing" 
        AfterTargets="Compile" BeforeTargets="link">  
        <Message Text="Optimizing..." />  
        <!-- <CallTarget Targets="Compile"/>   -->
    </Target>  
</Project>  
```

MSBuild determines the target build order as follows:

01. *InitialTargets* targets are run.
02. Targets specified on the command line by the */target* switch are run.
    If you specify no targets on the command line, then the *DefaultTargets* 
    targets are run. 
    If neither is present, then the first target encountered is run.
03. The Condition attribute of the target is evaluated. 
    If the Condition attribute is present and evaluates to false, 
    the target isn't executed and has no further effect on the build.
04. Before a target is executed, 
    05. its *DependsOnTargets* targets are run.
    06. any target that lists it in a *BeforeTargets* attribute is run.
    07. its Inputs attribute and *Outputs* attribute are compared. 
        If MSBuild determines that any output files are out of date with 
        respect to the corresponding input file or files, then MSBuild 
        executes the target. Otherwise, MSBuild skips the target.
08. After a target is executed or skipped, any target that lists it in 
    an *AfterTargets* attribute is run.

一个 vcxproj 项目配置文件大概结构如下：

```xml
<!-- .vcxproj and .props file structure -->
<Project DefaultTargets="Build" ToolsVersion="4.0" 
    xmlns='http://schemas.microsoft.com/developer/msbuild/2003'>
  <ItemGroup Label="ProjectConfigurations" />
  <PropertyGroup Label="Globals" />
  <Import Project="$(VCTargetsPath)\Microsoft.Cpp.Default.props" />
  <PropertyGroup Label="Configuration" />
  <Import Project="$(VCTargetsPath)\Microsoft.Cpp.props" />
  <ImportGroup Label="ExtensionSettings" />
  <ImportGroup Label="PropertySheets" />
  <PropertyGroup Label="UserMacros" />
  <PropertyGroup />
  <ItemDefinitionGroup />
  <ItemGroup />
  <ImportGroup Label="ExtensionTargets" />
</Project>
```

Target 节点之外的 Item 节点必须具有以下操作之一: Include、Update 或 Remove。

Item 可以包含 Include, Exclude 属性信息外，还可能包含元数据，设置子节点。列表默认使用分号
作分隔符号，也使用数据时可以指定分隔符号 `@(ItemListName, '<separator>')`。可以使用 
Item Functions 对数据进行处理：

```xml
<ItemGroup>  
    <theItem Include="andromeda;tadpole;cartwheel" />  
</ItemGroup>  
  
<Target Name = "go">  
    <Message Text="IndexOf  @(theItem->IndexOf('r'))" />  
    <Message Text="Replace  @(theItem->Replace('tadpole', 'pinwheel'))" />  
    <Message Text="Length   @(theItem->get_Length())" />  
    <Message Text="Chars    @(theItem->get_Chars(2))" />  
</Target> 

<ItemGroup>  
    <TheItem Include="first">  
        <Plant>geranium</Plant>  
    </TheItem>  
    <TheItem Include="second">  
        <Plant>algae</Plant>  
    </TheItem>  
    <TheItem Include="third">  
        <Plant>geranium</Plant>  
    </TheItem>  
</ItemGroup>  
  
<Target Name="go">  
    <Message Text="MetaData:    @(TheItem->Metadata('Plant'))" />  
    <Message Text="HasMetadata: @(theItem->HasMetadata('Plant'))" />  
    <Message Text="WithMetadataValue: @(TheItem->WithMetadataValue('Plant', 'geranium'))" />  
    <Message Text=" " />  
    <Message Text="Count:   @(theItem->Count())" />  
    <Message Text="Reverse: @(theItem->Reverse())" />  
</Target> 
```


A C# demo.vcxproj

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project DefaultTargets="Compile"
    xmlns="http://schemas.microsoft.com/developer/msbuild/2003" >

    <PropertyGroup>
        <builtdir>built</builtdir>
    </PropertyGroup>

    <ItemGroup>
        <CSFile Include="*.cs" Exclude="Form2.cs"/>

        <Reference Include="System.dll"/>
        <Reference Include="System.Data.dll"/>
        <Reference Include="System.Drawing.dll"/>
        <Reference Include="System.Windows.Forms.dll"/>
        <Reference Include="System.XML.dll"/>
    </ItemGroup>

    <Target Name="PreBuild">
        <Exec Command="if not exist $(builtdir) md $(builtdir)"/>
    </Target>

    <Target Name="Compile" DependsOnTargets="PreBuild">
        <Csc Sources="@(CSFile)"
            References="@(Reference)"
            TargetType="exe">
            <!-- OutputAssembly="$(builtdir)\$(MSBuildProjectName).exe" -->
            <Output  
                TaskParameter = "OutputAssembly"  
                ItemName = "EXEFile" />  
        </Csc>
        <!-- Log the file name of the output file -->  
        <Message Text="The output file is @(EXEFile)"/>  
    </Target>
</Project>
```

MSBuild Advanced Concepts - Batching & Transforms
https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/msbuild/msbuild-batching

MSBuild has the ability to perform dependency analysis on the inputs and 
outputs of a build target. If it is determined that the inputs or outputs 
of the target are up-to-date, the target will be skipped and the build will
procede. Target elements use the Inputs and Outputs attributes to specify 
the items to inspect during dependency analysis.

MSBuild has the ability to divide item lists into different categories, 
or batches, based on item metadata, and run a task one time with each batch. 

1. Dividing an item list into batches
2. Dividing several item lists into batches
3. Batching one item at a time
4. Filtering item lists

The following table describes the metadata assigned to every item upon creation. 
In each example, the following item declaration was used to include the 
file *C:\MyProject\Source\Program.cs* in the project.

```xml
<ItemGroup>  
    <MyItem Include="..\**\Source\Program.cs" />  
</ItemGroup>  
<Target Name="Exec">  
    <message text="@(MyItem) FullPath: %(FullPath) " />
</Target>
```

```xml
<Project  
    xmlns="https://schemas.microsoft.com/developer/msbuild/2003">  
  
    <ItemGroup>  
        <Res Include="Strings.fr.resources"> <Culture>fr</Culture> </Res>
        <Res Include="Strings.jp.resources"> <Culture>jp</Culture> </Res>
        <Res Include="Menus.fr.resources">   <Culture>fr</Culture> </Res>
        <Res Include="Dialogs.fr.resources"> <Culture>fr</Culture> </Res>
        <Res Include="Dialogs.jp.resources"> <Culture>jp</Culture> </Res>
        <Res Include="Menus.jp.resources">   <Culture>jp</Culture> </Res>
    </ItemGroup>  

    <!-- Item Metadata in Target Batching -->
    <Target Name="Build"  
        Inputs="@(Res)"  
        Outputs="%(Culture)\MyApp.resources.dll">  
  
        <AL Resources="@(Res)"  
            TargetType="library"  
            OutputAssembly="%(Culture)\MyApp.resources.dll"  />
  
    </Target>  

    <ItemGroup>  
  
        <Col Include="Item1"> <Number>1</Number> </Col>
        <Col Include="Item2"> <Number>2</Number> </Col>
        <Col Include="Item3"> <Number>3</Number> </Col>
        <Col Include="Item4"> <Number>1</Number> </Col>
        <Col Include="Item5"> <Number>2</Number> </Col>
        <Col Include="Item6"> <Number>3</Number> </Col>
        <Col2 Include="Item7"><Number>1</Number> </Col2>
        <Col2 Include="Item8"><Number>2</Number> </Col2>
        <Col2 Include="Item9"><Number>3</Number> </Col2>
  
    </ItemGroup>  
  
    <Target Name="Exec">  
        <!-- Filtering Item lists: Item2;Item5 -->
        <Message Text = "Items in Col: @(Col)" Condition="'%(Number)'=='2'"/>

        <!-- Batching One Item at a Time, use Identity metadata value -->
        <Message Text = "Identity: %(Identity) -- Items in Col: @(Col)"/>

        <!-- Dividing Several Item lists into Batches -->
        <Message Text = "No. %(Number) -- Items in Col: @(Col) Col2: @(Col2)"/>

        <!-- Dividing an Item list into Batches -->
        <Message Text = "No. %(Col.Number) -- Items in Col: @(Col)"/>
    </Target>  
  
</Project>  
```


## ==⚡ MSBuild References
- https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild-reference
- https://docs.microsoft.com/en-us/visualstudio/msbuild/exec-task
- https://docs.microsoft.com/en-us/dotnet/api/microsoft.build.tasks
- https://docs.microsoft.com/en-us/dotnet/api/microsoft.build.utilities
- https://docs.microsoft.com/en-us/dotnet/api/microsoft.build.utilities.task

MSBuild project file schema reference

```xml
<Project InitialTargets="TargetA;TargetB"
         DefaultTargets="TargetC;TargetD"
         TreatAsLocalProperty="PropertyA;PropertyB"
         ToolsVersion=<version number>
         Sdk="name[/version]"
         xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <Sdk... />
    <Choose>... </Choose>
    <PropertyGroup>... </PropertyGroup>
    <ItemGroup>... </ItemGroup>
    <Target>... </Target>
    <UsingTask.../>
    <ProjectExtensions>... </ProjectExtensions>
    <Import... />
</Project>

<Property Condition="'String A' == 'String B'">
    Property Value
</Property>

<Sdk Name="My.Custom.Sdk" Version="1.0.0" />

<Import Project="ProjectPath"
    Condition="'String A'=='String B'" />

<Choose>
    <When Condition="'StringA'=='StringB'">... </When>
    <Otherwise>... </Otherwise>
</Choose>

<Target Name="Target Name"
        Inputs="Inputs"
        Outputs="Outputs"
        Returns="Returns"
        KeepDuplicateOutputs="true/false"
        BeforeTargets="Targets"
        AfterTargets="Targets"
        DependsOnTargets="DependentTarget"
        Condition="'String A' == 'String B'"
        Label="Label">
    <Task>... </Task>
    <PropertyGroup>... </PropertyGroup>
    <ItemGroup>... </ItemGroup>
    <OnError... />
</Target>

<Task Parameter1="Value1"... ParameterN="ValueN"
    ContinueOnError="WarnAndContinue/true/ErrorAndContinue/ErrorAndStop/false"
    Condition="'String A' == 'String B'" >
    <Output... />
</Task>

<Item Include="*.cs"
        Exclude="MyFile.cs"
        Condition="'String A'=='String B'">
    <ItemMetadata1>...</ItemMetadata1>
    <ItemMetadata2>...</ItemMetadata2>
</Item>

<Output TaskParameter="Parameter"
    PropertyName="PropertyName"
    Condition = "'String A' == 'String B'" />

<UsingTask TaskName="TaskName"
    AssemblyName = "AssemblyName"
    TaskFactory = "ClassName"
    Condition="'String A'=='String B'" />
```

Tasks 是执行命令使用的节点，可以直接使用现有的 Task 节点，也可以编程实现自定义节点。

Tasks 最直接的用途就是执行目录创建、文件拷贝，调用 csc 编译器等命令，或者调用其它目标：

```xml
<Target Name="tasks">  
    <CSC  
        Sources="@(Compile)"  
        OutputAssembly="$(AppName).exe"  
        EmitDebugInformation="true" />  
    
    <Exec Command="echo y| cacls %(Binaries.Identity) /G everyone:R"/>  

    <MakeDir  
        Directories="$(BuildDir)" />  
    <Move  
        SourceFiles="@(MySourceFiles)"  />
    <Copy  
        SourceFiles="@(MySourceFiles)"  
        DestinationFolder="@(MyDestFolder)">  
        <Output  
            TaskParameter="CopiedFiles"  
            ItemName="SuccessfullyCopiedFiles"/>  
    </Copy>  
    <Delete Files="$(AppName).pdb" />  
</Target>  


<PropertyGroup>
    <OutputDirectory>\Output\</OutputDirectory>
    <DebugDirectory>\Debug\</DebugDirectory>
</PropertyGroup>
<Target Name="RemoveDirectories">
    <RemoveDir
        Directories="$(OutputDirectory);$(DebugDirectory)" />
</Target>


<ItemGroup>  
    <MyTextFile Include="Items.txt"/>  
    <MyItems Include="*.cs"/>  
</ItemGroup>  
<Target Name="WriteToFile">  
    <WriteLinesToFile  
        File="@(MyTextFile)"  
        Lines="@(MyItems)"  
        Overwrite="true"  
        Encoding="Unicode"/>  
</Target>  


<ItemGroup>  
    <MyTextFile Include="Items.txt"/>  
</ItemGroup>  
<Target Name="ReadFromFile">  
    <ReadLinesFromFile File="@(MyTextFile)" >
        <Output TaskParameter="Lines"ItemName="ItemsFromFile"/>
    </ReadLinesFromFile>  
</Target>  


<PropertyGroup>
  <MyUrl>https://raw.githubusercontent.com/Microsoft/msbuild/master/LICENSE</MyUrl>
</PropertyGroup>
<Target Name="DownloadContentFiles" BeforeTargets="Build">
    <DownloadFile
        SourceUrl="$(MyUrl)"
        DestinationFolder="$(MSBuildProjectDirectory)">
    <Output TaskParameter="DownloadedFile" ItemName="Content" />
  </DownloadFile>
</Target>


<ItemGroup>
    <Files Include="*.obj"/>
</ItemGroup>
<Target Name="Clean">
    <Delete Files="@(Files)" ContinueOnError="WarnAndContinue"/>
</Target>

<Target Name="CallOtherTargets">  
    <CallTarget Targets="TargetA"/>  
</Target>  

<Target Name="TargetA">  
    <Message Text="Building TargetA..." />  
</Target>  
```

通过编程实现自己的 Task 对象，`<SimpleTask />`：

```cs
using System;  
using Microsoft.Build.Framework;  
using Microsoft.Build.Utilities;  
  
namespace MyTasks  
{  
    public class SimpleTask : Task  
    {  
        public override bool Execute()  
        {  
            return true;  
        }  
    }  
}  
```

或者直接在 XML 文件中实现 Task 对象，注意 TaskName 指定其 XML 中的节点名称：

```xml
<Project ToolsVersion="12.0" xmlns="https://schemas.microsoft.com/developer/msbuild/2003">  
  <!-- This simple inline task displays "Hello, world!" -->  
  <UsingTask  
    TaskName="HelloWorld"  
    TaskFactory="CodeTaskFactory"  
    AssemblyFile="$(MSBuildToolsPath)\Microsoft.Build.Tasks.v4.0.dll" >  
    <ParameterGroup />  
    <Task>  
      <Reference Include="System.Xml"/>  
      <Using Namespace="System"/>  
      <Using Namespace="System.IO"/>  
      <Code Type="Fragment" Language="cs">  
<![CDATA[  
// Display "error : Hello, world!"  
Log.LogError("Hello, world!");  
Console.Write("ERROR : Hello, world!");
]]>  
      </Code>  
    </Task>  
  </UsingTask>  
</Project>  
```

使用 ParameterGroup 进行参数传递：

```xml
<Project xmlns='https://schemas.microsoft.com/developer/msbuild/2003' ToolsVersion="12.0">  
  
  <UsingTask TaskName="TokenReplace" TaskFactory="CodeTaskFactory" AssemblyFile="$(MSBuildToolsPath)\Microsoft.Build.Tasks.v12.0.dll">  
    <ParameterGroup>  
      <Path ParameterType="System.String" Required="true" />  
      <Token ParameterType="System.String" Required="true" />  
      <Replacement ParameterType="System.String" Required="true" />  
    </ParameterGroup>  
    <Task>  
      <Code Type="Fragment" Language="cs"><![CDATA[  
string content = File.ReadAllText(Path);  
content = content.Replace(Token, Replacement);  
File.WriteAllText(Path, content);  
]]></Code>  
    </Task>  
  </UsingTask>  
  
  <Target Name='Demo' >  
    <TokenReplace Path="C:\Project\Target.config" Token="$MyToken$" Replacement="MyValue"/>  
  </Target>  
</Project>  
```

MSBuild Special Characters

| Character | ASCII |                               Reserved Usage                               |
|-----------|-------|----------------------------------------------------------------------------|
| %         | %25   | Referencing metadata                                                       |
| $         | %24   | Referencing properties                                                     |
| @         | %40   | Referencing item lists                                                     |
| '         | %27   | Conditions and other expressions                                           |
| ;         | %3B   | List separator                                                             |
| ?         | %3F   | Wildcard character for file names in Include and Exclude attributes        |
| *         | %2A   | Wildcard character for use in file names in Include and Exclude attributes |

MSBuild predefined properties

|            Property            |                            Description                             |
|--------------------------------|--------------------------------------------------------------------|
| MSBuildBinPath                 | The absolute path of the folder where the MSBuild binaries         |
| MSBuildExtensionsPath          | In .NET Framework 4: env variable MSBUILDLEGACYEXTENSIONSPATH.     |
| MSBuildExtensionsPath32        | 32-bit MSBuild subfolder                                           |
| MSBuildExtensionsPath64        | 64-bit MSBuild subfolder                                           |
| MSBuildLastTaskResult          | true if the previous task completed without any errors             |
| MSBuildProgramFiles32          | The location of the 32-bit program folder;                         |
| MSBuildProjectDefaultTargets   | The complete list in the DefaultTargets attribute                  |
| MSBuildProjectDirectory        | The absolute path of the project root directory.                   |
| MSBuildProjectDirectoryNoRoot  | the project directory, excluding the root drive.                   |
| MSBuildProjectExtension        | The file name extension of the project file, including the period  |
| MSBuildProjectFile             | The complete file name of the project file.                        |
| MSBuildProjectFullPath         | The absolute path and complete file name of the project file.      |
| MSBuildProjectName             | The file name of the project file without the file name extension. |
| MSBuildStartupDirectory        | The absolute path of the folder where MSBuild is called.           |
| MSBuildThisFile                | The file name and file extension portion of ThisFile.              |
| MSBuildThisFileDirectoryNoRoot | The directory portion of ThisFile, excluding the root drive.       |
| MSBuildThisFileExtension       | The file name extension portion of ThisFile. Reserved              |
| MSBuildThisFileFullPath        | The absolute path of the project or targets file.                  |
| MSBuildThisFileName            | The ThisFile name without the file name extension.                 |
| MSBuildToolsPath               | The installation path of the MSBuild.                              |
| MSBuildToolsVersion            | The version of the MSBuild Toolset.                                |

|            Property            |                        Value                        |
|--------------------------------|-----------------------------------------------------|
| MSBuildBinPath                 | C:\PFile(x86)\MSVC\2017\BuildTools\MSBuild\15.0\bin |
| MSBuildExtensionsPath          | C:\PFile(x86)\MSVC\2017\BuildTools\MSBuild          |
| MSBuildExtensionsPath32        | C:\PFile(x86)\MSVC\2017\BuildTools\MSBuild          |
| MSBuildExtensionsPath64        | C:\Program Files\MSBuild                            |
| MSBuildLastTaskResult          | true                                                |
| MSBuildProgramFiles32          | C:\Program Files (x86)                              |
| MSBuildProjectDefaultTargets   | Build                                               |
| MSBuildProjectDirectory        | C:\Python310\Python-3.10.2                          |
| MSBuildProjectDirectoryNoRoot  | Python310\Python-3.10.2                             |
| MSBuildProjectExtension        | .vcxproj                                            |
| MSBuildProjectFile             | fms.vcxproj                                         |
| MSBuildProjectFullPath         | C:\Python310\Python-3.10.2\fms.vcxproj              |
| MSBuildProjectName             | fms                                                 |
| MSBuildStartupDirectory        | C:\Python310\Python-3.10.2                          |
| MSBuildThisFile                | fms.vcxproj                                         |
| MSBuildThisFileDirectoryNoRoot | Python310\Python-3.10.2\                            |
| MSBuildThisFileExtension       | .vcxproj                                            |
| MSBuildThisFileFullPath        | C:\Python310\Python-3.10.2\fms.vcxproj              |
| MSBuildThisFileName            | fms                                                 |
| MSBuildToolsPath               | C:\PFile(x86)\MSVC\2017\BuildTools\MSBuild\15.0\bin |
| MSBuildToolsVersion            | 15.0                                                |

MSBuild Well-known Item Metadata

|  Item Metadata  |                    Description                    |            Example             |
|-----------------|---------------------------------------------------|--------------------------------|
| %(FullPath)     | full path of the item                             | C:\MyProject\Source\Program.cs |
| %(RootDir)      | Root directory of the item                        | C:\                            |
| %(Filename)     | File name of the item                             | Program                        |
| %(Extension)    | File name extension of the item                   | .cs                            |
| %(RelativeDir)  | Path specified in the Include attribute           | ..\MyProject\Source\           |
| %(Directory)    | Directory of the item, without the root directory | MyProject\Source\              |
| %(RecursiveDir) | the part replaces the the wildcard ** in Include  | MyProject\                     |
| %(Identity)     | The item specified in the Include attribute       | ..\MyProject\Source\Program.cs |
| %(ModifiedTime) | the timestamp from the last modification          | 2004-07-01 00:21:31.5073316    |
| %(CreatedTime)  | the timestamp from it's creation                  | 2004-06-25 09:26:45.8237425    |
| %(AccessedTime) | the timestamp from the last access                | 2004-08-14 16:52:36.3168743    |



## ==⚡ MSBuild Internals & PlatformToolset Versions
- https://docs.microsoft.com/en-us/cpp/build/walkthrough-using-msbuild-to-create-a-visual-cpp-project
- https://docs.microsoft.com/en-us/cpp/build/reference/msbuild-visual-cpp-overview

工程中可以指定使用 MSVC 工具集版本号，或者使用默认值。

平台工具集与 MSBuild 版本关系，以及编译器预计处理版本号 `_MSC_VER` 宏的对应关系如下表：

|    Visual Studio    |  MSVC | PlatformToolset |   MSC_VER   |
|---------------------|-------|-----------------|-------------|
| Visual Studio 2022  | v17.x | v143            | 1930        |
| Visual Studio 2019  | v16.x | v142            | 1920 - 1929 |
| Visual Studio 2017  | v15.x | v141            | 1910 - 1916 |
| Visual Studio 2015  | v14.x | v140            | 1900        |
| Visual Studio 2013  | v12.x | v120            | 1800        |
| Visual Studio 2012  | v11.x | v110            | 1700        |
| Visual Studio 2010  | v10.x | v100            | 1600        |
| Visual Studio 2008  | v9.x  | v90             | 1500        |
| Visual Studio 2005  | v8.x  | v80             | 1400        |
| Visual Studio 2003  | v7.1  | v71             | 1310        |
| Visual Studio 2002  | v7.0  | v70             | 1300        |
| Visual Studio 98    | v6.x  | v60             | 1200        |
| Visual Studio 97    | v5.x  | v50             | 1100        |
| Visual C++ 4.2      | v4.2  |                 | 1020        |
| Visual C++ 4.1      | v4.1  |                 | 1010        |
| Visual C++ 4.0      | v4.0  |                 | 1000        |
| Visual C++ 2.0      | v2.0  |                 | 900         |
| Visual C++ 1.0      | v1.0  |                 | 800         |
| Microsoft C/C++ 7.0 |       |                 | 700         |
| Microsoft C 6.0     |       |                 | 600         |

参考 MSVC C++ binary compatibility 2015-2022 或：

- https://learn.microsoft.com/en-us/cpp/preprocessor/predefined-macros
- https://docs.microsoft.com/en-us/cpp/preprocessor/predefined-macros
- https://dev.to/yumetodo/list-of-mscver-and-mscfullver-8nd
- https://docs.microsoft.com/en-us/cpp/overview/visual-cpp-language-conformance


因为配置问题或者没有执行 VCVARS64.bat 环境配置脚本，可以导致 $(VCTargetsPath) 变量没有指向正确路径，导致未找到导入的项目“C:\Microsoft.Cpp.Default.props”。

可以配置环境变量 VCTargetsPath 指向正确目录，例如：

    C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\Common7\IDE\VC\VCTargets\
    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Microsoft\VC\v160\
    C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\MSBuild\Microsoft\VC\v170\

以下工程文件可以打印当前默认的 VCTargetsPath 路径：

```xml
<Project ToolsVersion="4.0" 
    xmlns='http://schemas.microsoft.com/developer/msbuild/2003'>
    <Target Name="go">  
        <Message Text="VCTargetsPath: $(VCTargetsPath)" />  
    </Target> 
</Project>
```

MSBuild 也会创建 VCTargetsPath.vcxproj 工程来进行测试：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Project DefaultTargets="Build" ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <ItemGroup Label="ProjectConfigurations">
        <ProjectConfiguration Include="Debug|x64">
            <Configuration>Debug</Configuration>
            <Platform>x64</Platform>
        </ProjectConfiguration>
    </ItemGroup>
    <PropertyGroup Label="Globals">
        <ProjectGuid>{F3FC6D86-508D-3FB1-96D2-995F08B142EC}</ProjectGuid>
        <Keyword>Win32Proj</Keyword>
        <Platform>x64</Platform>
        <WindowsTargetPlatformVersion>10.0.18362.0</WindowsTargetPlatformVersion>
    </PropertyGroup>
    <Import Project="$(VCTargetsPath)\Microsoft.Cpp.Default.props"/>
    <PropertyGroup>
        <PreferredToolArchitecture>x64</PreferredToolArchitecture>
    </PropertyGroup>
    <PropertyGroup Label="Configuration">
        <ConfigurationType>Utility</ConfigurationType>
        <CharacterSet>MultiByte</CharacterSet>
        <PlatformToolset>$(DefaultPlatformToolset)</PlatformToolset>
    </PropertyGroup>
    <Import Project="$(VCTargetsPath)\Microsoft.Cpp.props"/>
    <ItemDefinitionGroup>
        <PostBuildEvent>
            <Command>echo VCTargetsPath=$(VCTargetsPath)</Command>
        </PostBuildEvent>
    </ItemDefinitionGroup>
    <Import Project="$(VCTargetsPath)\Microsoft.Cpp.targets"/>
</Project>
```

以上 MSBuild 工程使用了三个基本的内部配置文件：

- Microsoft.Cpp.Default.props
- Microsoft.Cpp.props
- Microsoft.Cpp.targets

在 VCTargets 目录有许多 props 属性配置文件和 targets 目标配置文件。

属性配置提供 Windows SDK 及平台工具有效性检测设置，目标配置文件提供一系列默认的目标，有它们才会执行相应的命令：

- *BscMake* Executes the Microsoft Browse Information Maintenance Utility tool, `bscmake.exe`.
- *Build*   Builds the project. This target is the default for a project.
- *ClCompile*   Executes the MSVC compiler tool, `cl.exe`.
- *Clean*   Deletes temporary and intermediate build files.
- *Lib* Executes the Microsoft 32-Bit Library Manager tool, `lib.exe`.
- *Link*    Executes the MSVC linker tool, `link.exe`.
- *ManifestResourceCompile* Extracts a list of resources from a manifest and `then exe`cutes `rc.exe`.
- *Midl*    Executes the Microsoft Interface Definition Language (MIDL) compiler tool, `midl.exe`.
- *Rebuild* Cleans and then builds your project.
- *ResourceCompile* Executes the Microsoft Windows Resource Compiler tool, `rc.exe`.
- *XdcMake* Executes the XML Documentation tool, `xdcmake.exe`.
- *Xsd* Executes the XML Schema Definition tool, `xsd.exe`.

Microsoft.CppCommon.targets 配置文件会使用 UsingTask 引入相应的 Tasks 对象。

这里的 *Build* 是非常重要的默认构建目标，它定义在 Microsoft.BuildSteps.targets 文件，它定义了构建流程中相关事件的执行，BuildDependsOn 默认提供的多个流程事件。


CPP 工程构建划为 3 个相对独立的步骤，并填充到 *$(BuildSteps)* 列表中：

1. Generate sources (BuildGenerateSources: PreBuildEvent, InitializeBuildStatus)
2. Compile          (BuildCompile)
3. Link             (BuildLink: CustomBuildStep, PostBuildEvent)

为了继承这些内置事件执行流程，可以在目标中设置 DependsOnTargets 属性：

```xml
<Target Name="go" DependsOnTargets="$(BuildDependsOn)" >
    <Exec Command="@echo go..." />
    <!-- <Exec Command="@echo go..." ConsoleOutput="OUT" /> -->
</Target> 
```

利用 Exec 和 Output 捕捉命令输出，如果通过 > 重定向内容到文件，可能无法正常编码与解码，chcp 65001 命令也不能解决，例如 GBK -> UTF8 转换不协调。

```xml
<PropertyGroup>
   <OutputFile>Output.txt</OutputFile>
</PropertyGroup>
<Exec StdOutEncoding="UTF-8" Command="chcp 65001 &amp; dir > &quot;$(OutputFile)&quot;" />
<ReadLinesFromFile File="$(OutputFile)" >
   <Output TaskParameter="Lines" ItemName="OutputLines"/>
</ReadLinesFromFile>
<Message Text="MSBuild Transforms Output: @(OutputLines->'%(Identity)', '%0a')" />
<!-- <Message Text="OUTPUT: $([System.Text.Encoding]::Convert(ASCII, UTF8, @(out)))" /> -->
```

并且 MSBuild 静态方法调用语法又不能调用 Encoding::Conver() 方法进行转码，可以使用功能更强大的 PowerShell 脚本编程：

```xml
<PropertyGroup Label="Configuration">
    <PSCommand>powershell -Command dir;</PSCommand>
    <PSCommand>powershell -Command "dir | Out-File -FilePath Output.txt -Encoding default"</PSCommand>
    <PSCommand>powershell -Command $list=dir; Out-File -InputObject $list -FilePath Output.txt -Encoding UTF8</PSCommand>
    <PSCommand>powershell -Command get-content Output.txt -encoding OEM;</PSCommand>
</PropertyGroup>
<Target Name="go" DependsOnTargets="$(BuildDependsOn)" >
    <Exec ConsoleToMSBuild="true" EchoOff="true" StandardOutputImportance="low" Command="$(PSCommand)" >
      <Output TaskParameter="ConsoleOutput" ItemName="out" />
    </Exec>
    <Message Text="OUTPUT: @(out->'%(Identity)','%0a')" />
</Target> 
```

最后，基于 Microsoft.Build.Framework 实现一个 Task 子类，这是根本的解决方法，可以直接在 MSBuild 工程文件中的 *UsingTask* 节点内编写 C# 代码：

- https://docs.microsoft.com/en-us/dotnet/api/microsoft.build.framework
- https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/msbuild/msbuild-task-reference
- https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/msbuild/usingtask-element-msbuild
- https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/msbuild/msbuild-inline-tasks
- https://docs.microsoft.com/en-us/dotnet/api/system.text.encoding

```C#
// <Using Namespace="System"/>  
// <Using Namespace="System.Text"/>  
byte[] data = Encoding.ASCII.GetBytes("MS啼笑皆非"); // String -> Bytes
data = Encoding.Convert(Encoding.ASCII, Encoding.UTF8, data); // ASCII -> UTF8
data = Encoding.Convert(Encoding.UTF8, Encoding.ASCII, data); // UTF8 -> ASCII
String text = Encoding.ASCII.GetString(data);
Console.WriteLine(text);
```

以上展示的代码会将 UTF8 编码的字符串，假定 MSBuild 工程代码文件编码 为 UTF8，先通过 ASCII.GetBytes 转换为 ASCII 编码，这一步会导致不兼容符号丢失，所以后续即使正确通过 ASCII 编码将字节数据转换为字符串也不能得到正确内容。


## ==⚡ MSBuild & Sublime Text

保存 MSBuild.sublime-build 到 Sublime Text Preferences 的用户目录：

```json
{
    "env": {
        "libs":"-reference:netstandard.dll",
        "MSBuild": "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat",
        "MSBuild": "C:/Program Files (x86)/Microsoft Visual Studio/2022/BuildTools/Common7/Tools/VsDevCmd.bat",
        "MSBuild": "C:/Program Files (x86)/Microsoft Visual Studio/2017/BuildTools/VC/Auxiliary/Build/vcvars64.bat",
    },
    "working_dir": "$file_path",
    "shell_cmd": "where csc && csc /langversion:? & where msbuild & msbuild /version",
    "file_regex": "^(.[^\\(]*)\\(([0-9]+),([0-9]+)\\):(.*)$",
    "selector": "source.cs, source.msbuild, text.xml, source.csproj, source.fsharp",
    "encoding": "cp936",
    "quiet": true,
    "variants": [
    {
        "name": "MSBuild proj",
        "shell_cmd": "\"%MSBuild%\" && MSBuild /maxcpucount:4 $file"
    },{
        "name": "MSBuild proj - DEBUG",
        "shell_cmd": "\"%MSBuild%\" && MSBuild /p:Configuration=DEBUG /maxcpucount:4 $file"
    },{
        "name": "C# Build Exe & Run (C# 10.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:10.0 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 1.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:1 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 9.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:9.0 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 8.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:8.0 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 7.3)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:7.3 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 7.2)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:7.2 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 7.1)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:7.1 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 7.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:7.0 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 6.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:6 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 5.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:5 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 4.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:4 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 3.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:3 $file_name && $file_base_name"
    },{
        "name": "C# Build Exe & Run (C# 2.0)...",
        "shell_cmd": "\"%MSBuild%\" && where csc && csc.exe %libs% /langversion:2 $file_name && $file_base_name"
    },{
        "name": "C# Build DLL",
        "shell_cmd": "\"%MSBuild%\" && csc.exe /target:library $file"
    },{
        "name": "Run",
        "shell_cmd": "$file_base_name"
    },{
        "name": ".Net New Console",
        "shell_cmd": "dotnet new console -o demo"
    },{
        "name": ".Net Run",
        "shell_cmd": "dotnet run"
    },{
        "name": ".Net Watch",
        "shell_cmd": "dotnet watch run"
    },{
        "name": ".Net Run Project",
        "shell_cmd": "echo $project_path && dotnet run --project $project_path"
    },{
        "name": ".Net Watch Project",
        "shell_cmd": "echo $project_path && dotnet watch run --project $project_path"
    },{
        "name": "Run with Test Arguments",
        "shell_cmd": "$file_base_name http://baidu.com/ http://golang.org/ http://goproxy.io"
    }]
}   
```


# 🐣 Ninja 快速构建工具
- [Ninja - a speedy and small build system](https://ninja-build.org/)
- [The Ninja build system v1.10.0](https://ninja-build.org/manual.html)

Ninja 是 Chrome 项目的构建工具，用来替换经典工具 make，目前这个开源工具已经被很多其它项目采用。据项目作者描述，创建这个新的构建工具，主要是为了提升大型项目的编译速度。

由于 Ninja 的设计目标之一是“必须易于嵌入大型构建系统”，所以，像写 Makfile 那样手写规则文件，并不是它的目标； Ninja 的项目作者说，Ninja 构建文件使用的语言“简单到了不便于人类书写”的程度。Ninja 的规则文件中，并没有条件语句或是基于文件后缀的规则，相反，有的仅仅是一个个列表。这些列表记录了确切的输入文件路径，以及所产生的确切结果。因为这种简单的表达并不需要额外的解释，所以，在运行时，这些规则文件能够被快速载入。 

Ninja 规则脚本默认名称 build.ninja，简单到只需要三个基本概念：

- Variables 变量设置
- Rules 规则设置
- Build 构建设置

假设有一个 demo.cpp 程序要编译，以下示范 Ninja 的脚本编写：

    # Version required
    ninja_required_version = 1.5

    # build output
    builddir = bin

    # variables
    GCC = C:\MinGW\bin\g++.exe
    cflags = -Wall

    # compile rules depfile ---> ninja_deps files
    rule compile_demo
      command = $GCC -c $cflags -MD -MF $out.d $in -o $out
      description = Compiling $in for $out
      depfile = $out.d
      deps = gcc

    # link rules
    rule link_demo
      command = $GCC $DEFINES $INCLUDES $cflags $in -o $out
      description = Linking $in for $out

    # build
    build demo.o : compile_demo src/demo.cpp
    build demo.exe : link_demo demo.o
    build all: phony demo.exe

    default all

其中 phony 是一条特殊的规则，用来创建目标别名：

    build foo: phony some/file/in/a/faraway/subdir/foo

规则中，只有 command 变量是必须的，这指定要运行的命令。

在 Ninja 1.3 引入 deps 规则变量，它可以指定 gcc 或 msvc 依赖文件处理方式。

Ninja 处理三类的依赖：

- Explicit dependencies 显式依赖，在 build 规则罗列的依赖文件，包括 $in 变量，改变显式依赖文件就会导致重新构建。
- Implicit dependencies 隐式依赖，在 build 规则后面 `| dep1 dep2` 指定，或者从 depfile 文件解释得到的依赖。
- Order-only dependencies 顺序依赖，在 build 规则后面 `|| dep1 dep2 ` 指定，会依据日期状态重新构建。

为了正确构建 C/C++ 代码，一个构建系统必需能感知头文件间的依赖。假定 foo.c 包含一行 #inclue “foo.h” 。而 foo.h 自身又包含一行 #include “bar.h”。所有的三个文件都会影响后续编译，例如，bar.h 的改变也会触发 foo.o 的重新构建。

一些构建系统使用一个“头文件扫描器”在构建时提取这部分依赖信息。但这个方法太慢，而且很难精确处理有 #ifdef 指令出现的情形。另一种选择是要求构建文件正确地报告所有依赖，包括头文件的依赖，但这对开发人员来说十分笨重：每次你添加或删除 #include 语句时，都需要修改或重新生成构建文件。

一个有用的方法依赖于这样的事实：在编译时，GCC 以及 MSVC 可以给出在构建输出时用到了哪些头文件。这份信息文件，如同用于生成输出的信息，可以被构建系统记录和加载，由此，依赖可以被精确追踪。在第一次编译时，因为还未有输出，所有文件都会被编译，故不需头文件依赖。第一次编译后，对于被某个输出用到的任何文件如果发生更改包括增加或删除额外的依赖，就会导致重新构建，这保证了依赖信息的更新。

在编译时，gcc 以 Makefile 的格式记下头文件依赖。Ninja 包括一个解析器处理 depfile 指定的这一 Makefile 语法文件，只是 Makefile 简化子集，并在下一次构建时载入这份依赖信息。

Ninja 文件由记录的序列组成，而记录要么是一个路径，要么是一个依赖列表。每个写入文件的路径都被赋于了一个整数序列号，故而依赖就是一列整数。为了向文件添加依赖，Ninja 首先记录下还没有序列号的路径，然后用这些序列号记录依赖。在后续的构建载入这一文件时，Ninja 可以简单地使用一个数组将序列号映射到对应的 Node 指针。


安装 Ninja ：

- Ninja binary https://github.com/ninja-build/ninja/releases
- build from source:

        $ git clone git://github.com/ninja-build/ninja.git && cd ninja
        $ git checkout release
        $ cat README

环境变量 NINJA_STATUS 可以控制 ninja 打印进度状态的样式，有几个占位符：

| 占位符号    | 说明                                             |
| ----------: | :----------------------------------------------- |
|          %s | 起始 edges 的数量。                              |
|          %t | 完成构建必须运行的 edges 总数。                  |
|          %p | 起始 edges 的百分比。                            |
|          %r | 当前运行的 edges 数。                            |
|          %u | 要开始的剩余 edges 数。                          |
|          %f | 完成的 edges 数。                                |
|          %o | 每秒完成 edges 数                                |
|          %c | 当前每秒完成 edges 数，由 -j 指定构建的平均值    |
|          %e | 经过的时间，以秒为单位。自 Ninja 1.2 起可用。    |
|          %% | 一个普通的 % 字符。                              |

默认进度状态为 "[%f/%t] " 请注意尾随空格以与构建规则分开。可能的进度状态的另一个示例可能是 "[%u/%r/%f] "。
尝试改为

    export NINJA_STATUS="[%p/%f/%t %e] "（Windows下set NINJA_STATUS="[%p/%f/%t %e] "）


规则文件一般是通过 cmake/gn 来生成 ninja 的配置，再进行编译：

    # 示例
    cmake . -G "Ninja" 
    cmake . -G "CodeBlocks - Ninja"
    cmake . -G "Sublime Text 2 - Ninja"
    ninja 



# 🐣 VCpkg 开源库管理工具
- [Manage C and C++ libraries on Windows](https://github.com/Microsoft/vcpkg/)
- [Tips for VCpkg](https://vvingerfly.github.io/2018/05-08-Tips4vcpkg/)
- Vcpkg Vs Conan: Best Package Manager For C++? https://matgomes.com/vcpkg-vs-conan-for-cpp/
- https://github.com/microsoft/vcpkg/blob/master/docs/specifications/versioning.md
- https://github.com/microsoft/vcpkg/blob/master/docs/specifications/manifests.md
- https://github.com/microsoft/vcpkg/blob/master/docs/users/versioning.md
- https://github.com/microsoft/vcpkg/blob/master/docs/users/manifests.md

Windows 下开发 C/C++ 程序，少不了编译开源的第三方库。比如用于网络连接的高性能库 libcurl、用于压缩解压的 zlib 等等。使用这些库开发极大的方便了程序员，使得我们不必重复造轮子。由于这些开源库绝大部分都来源于 Linux 系统，其工程文件、编译系统都使用 gnu 系列工具，使得将其移植到 Windows 的 VC 开发环境下一直是难点。

还需要考虑预先编译出哪种类型的开源库程序，比如：Debug 还是 Release、动态库还是静态库、MD 还是 MT、32 位还是 64 位。光是这三种组合就有 16 种可能性。如果像 libcurl 这种还要考虑是否引用其他开源库的功能，那么编译类型的组合会更多。

vcpkg 就是解决这个问题的：

- 自动调用 git 等工具下载开源库源代码；
- 源码包的缓存管理和版本管理，可以升级版本；
- 紧密结合 CMake 轻松编译；
- 依赖关系检查，比如编译 libcurl，会自动下载 zlib、openssl 进行编译；
- 无缝集成 Visual Studio，不需要设置库文件、头文件的所在目录，自动集成。
- Visual Studio 全平台支持，支持 Debug/Release、x86/x64 编译，还支持 UWP、ARM 平台的编译。

vcpkg 一般使用流程：

- 执行 vcpkg 安装模块，等待编译动作完成；
- 执行 vcpkg integrate 集成到项目或者 Visual Studio，又或者全局集成；
- 在代码中通过头文件使用安装好的模块；

vcpkg 安装依赖模块的基本执行流程：

- 环境初始化；
- 下载源代码到 downloads 目录，如果已经在 cache 中，则跳过下载环节；
- 校验文件有效性；
- 解压缩源代码到 buildtrees 目录准备编译；
- 利用配套工具编译源码工程，使用 cmake，ninja 及系统已经安装的编译工具，如 MSBuild；
- 编译源码，一般会同时编译 Release 和 Debug 版本；
- 编译好的文件保存在 packages 目录备用，并且安装到 installed 目录。

vcpkg 主目录文件夹结构：

- *buildtrees* | library 源代码解包及构建目录
- *docs*       | 文档与示例
- *downloads*  | 下载缓冲文件夹，执行安装命令时会先查询这里
- *installed*  | 编译好 library 后安装头文件和编译生成的文件
- *packages*   | 编译好的库文件，在工程安装依赖时会用到
- *ports*      | 移植数据库目录，包含分类中的库描述文件，包含版本、依赖关系、下载地址等
- *scripts*    | 脚本目录，如 cmake, powershell 脚本
- *toolsrc*    | VcPkg C++ 源代码和组件
- *triplets*   | 包含支持架构配置文件，如 x86-windows、x64-uwp
- *versions*   | 版本树目录，记录了在册依赖库的版本信息

移植数据库目录，port database，非常重要，它记录了构建过程信息，如 `portfile.cmake`，manifest vcpck.json 以及补丁信息，补丁文件是 `git diff` 输出的内容。

移植脚本 `portfile.cmake` 决定了模块是如何构建的，注意 Call Stack 输出信息。它会调用一系列 CMake 函数，完成模块的构建流程，参考维护者指南 Portfile helper functions：

   - *vcpkg_download_distfile()*, *vcpkg_from_github()* 下载源代码到 downloads 目录；
   - *vcpkg_extract_source_archive_ex()* 解包到 buildtrees 目录；
   - *vcpkg_acquire_msys()* 下载 MSYS2 工具套件；
   - *vcpkg_configure_cmake()* 配置 CMake 工程准备构建；
   - *vcpkg_configure_make()* 配置 Make 工程准备构建；
   - *vcpkg_configure_msbuild()* 配置 MSBuild 工程准备构建；
   - *vcpkg_install_cmake()* 构建并安装 CMake 工程；
   - *vcpkg_install_make()* 构建并安装 Make 工程；
   - *vcpkg_install_msbuild()* 构建并安装 MSBuild 工程；

清单文件 `vcpkg.json` 中可以将依赖模块设置为宿主依赖模式，Host Dependencies，将 `"host"` 设置为 true，它们可以在 vcpkg 执行模块编译时做一些代码生成、自定义构建等工作。典型的宿主依赖有 vcpkg-cmake 和 vcpkg-cmake-config，它们会比受依赖方更先进行编译。

以下有多种设置 Host Dependencies 的编译方式，包含平台架构信息，如 `x64-windows`, `x64-linux`, `x64-osx`：

1. In CMake-based manifest mode, calling `set(VCPKG_HOST_TRIPLET "<triplet>" CACHE STRING "")` before the first `project()` directive
2. In MSBuild-based manifest mode, setting the `VcpkgHostTriplet` property
3. On the command line, via the flag `--host-triplet=...`
4. The `VCPKG_DEFAULT_HOST_TRIPLET` environment variable


有些库多平台兼容做得不够好，编译经常出现失败的现象，比如 libpng 这个库，根据编译日志给出的信息来修正 `buildtrees` 目录下的代码：

- 使用 `git init` 在 buildtress 目录下的源代码目录创建仓库；
- 使用 `git add .` 将源代码入库；
- 使用 `git commit -m "temp"` 做临时提交；
- 修改代码，使用源代码正确编译；
- 使用 `git diff --ignore-space-at-eol | out-file -enc ascii ..\..\..\..\ports\libpng\use-abort-on-all-platforms.patch` 在移植数据库目录生成补丁文件；
- 将补丁写入 portfile.cmake 脚本，vcpkg_extract_source_archive 会在解包时应用补丁；
- 最后重新安装依赖进行验证，通过验证即完成补丁制作；

```sh
# ports\libpng\portfile.cmake
...
vcpkg_extract_source_archive_ex(
  OUT_SOURCE_PATH SOURCE_PATH
  ARCHIVE ${ARCHIVE}
  PATCHES 
    "use-abort-on-all-platforms.patch"
)

vcpkg_cmake_configure(
...
# Verification:
# vcpkg remove libpng:x64-uwp
# vcpkg install libpng:x64-uwp
```

一般用户直接使用 vcpkg 提供的库已经够用，对于没有收录的库，或者内部库，可以使用注册信息文件进行管理。每个注册中心都有一个 `versions/baseline.json` 文件，它是一个列表，记录库信息。在 vcpkg 根目录或者 `vcpkg.json` 同级目录下，manifest mode 模式，可以放置一个 `vcpkg-configuration.json` 配置文件来使用注册中心登记的模块。

根据数据来源的不同，有三种注册类型，如下：

- `"git"` 
- `"filesystem"` 
- `"builtin"` 

假设在内部制作了 vcpkg 的仓库的副本，并且还使用了 North Wind Trader 中的 beison、beicode 两个依赖库，以下是 `vcpkg-configuration.json` 配置：

```json
{
  "default-registry": {
    "kind": "git",
    "repository": "https://internal/mirror/of/github.com/Microsoft/vcpkg",
    "baseline": "eefee7408133f3a0fef711ef9c6a3677b7e06fd7"
  },
  "registries": [
    {
      "kind": "git",
      "repository": "https://github.com/northwindtraders/vcpkg-registry",
      "baseline": "dacf4de488094a384ca2c202b923ccc097956e0c",
      "packages": [ "beicode", "beison" ]
    }
  ]
}
```

Vcpkg 中使用三元组 triplets 来确定一个库的目标平台构架、编译器和动态或静态链接方式，列如 Mingw-w64 编译工具的三元组如下：

| architecture | vcpkg community triplets                | tool name prefix     |
|--------------|-----------------------------------------|----------------------|
| x64          | x64-mingw-dynamic, x64-mingw-static     | x86_64-w64-mingw32-  |
| x86          | x86-mingw-dynamic, x86-mingw-static     | i686-w64-mingw32-    |
| arm64        | arm64-mingw-dynamic, arm64-mingw-static | aarch64-w64-mingw32- |
| arm          | arm-mingw-dynamic, arm-mingw-static     | armv7-w64-mingw32-   |

```sh
git clone git@github.com:Microsoft/vcpkg.git
.\vcpkg\bootstrap-vcpkg.bat
# .\vcpkg\vcpkg install [packages to install]
# .\vcpkg\vcpkg install [package name]:x64-windows
# .\vcpkg\vcpkg install [packages to install] --triplet=x64-windows
```

下载 Vcpkg 源代码后，使用 PowerShell 执行 Vcpkg 工程目录下的 bootstrap-vcpkg.bat 就会对 toolsrc 目录中保存的 Vcpkg C++ 源代码和组件代码进行编译，并在同级目录下生成 vcpkg.exe 文件。

最新版本提供了 Windows 系统的 vcpkg.exe 而不用再进行编译，`toolsrc` 目录下的代码也独立转移到  https://github.com/microsoft/vcpkg-tool。

示范，查询 GLFW 相关的包，并安装：

    >vcpkg search glfw
    >vcpkg install libigl[glfw]

如果没有在 vcpkg 主目录运行，可能会遇到 Error: Could not detect vcpkg-root。

命令使用示范：

    >vcpkg --help
    Commands:
      vcpkg search [pat]              Search for packages available to be built
      vcpkg install <pkg>...          Install a package
      vcpkg remove <pkg>...           Uninstall a package
      vcpkg remove --outdated         Uninstall all out-of-date packages
      vcpkg list                      List installed packages
      vcpkg update                    Display list of packages for updating
      vcpkg upgrade                   Rebuild all outdated packages
      vcpkg x-history <pkg>           (Experimental) Shows the history of CONTROL versions of a package
      vcpkg hash <file> [alg]         Hash a file by specific algorithm, default SHA512
      vcpkg help topics               Display the list of help topics
      vcpkg help <topic>              Display help for a specific topic

      vcpkg integrate install         Make installed packages available user-wide. Requires admin
                                      privileges on first use
      vcpkg integrate remove          Remove user-wide integration
      vcpkg integrate project         Generate a referencing nuget package for individual VS project use
      vcpkg integrate powershell      Enable PowerShell tab-completion

      vcpkg export <pkg>... [opt]...  Exports a package
      vcpkg edit <pkg>                Open up a port for editing (uses %EDITOR%, default 'code')
      vcpkg import <pkg>              Import a pre-built library
      vcpkg create <pkg> <url> [archivename]
                                      Create a new package
      vcpkg owns <pat>                Search for files in installed packages
      vcpkg depend-info <pkg>...      Display a list of dependencies for packages
      vcpkg env                       Creates a clean shell environment for development or compiling
      vcpkg version                   Display version information
      vcpkg contact                   Display contact information to send feedback

    Options:
      --triplet <t>                   Specify the target architecture triplet. See 'vcpkg help triplet'
                                      (default: %VCPKG_DEFAULT_TRIPLET%)
      --overlay-ports=<path>          Specify directories to be used when searching for ports
      --overlay-triplets=<path>       Specify directories containing triplets files
      --downloads-root=<path>         Specify the downloads root directory
                                      (default: %VCPKG_DOWNLOADS%)
      --vcpkg-root <path>             Specify the vcpkg root directory
                                      (default: %VCPKG_ROOT%)
      --x-buildtrees-root=<path>      (Experimental) Specify the buildtrees root directory
      --x-install-root=<path>         (Experimental) Specify the install root directory
      --x-packages-root=<path>        (Experimental) Specify the packages root directory
      --x-scripts-root=<path>         (Experimental) Specify the scripts root directory

      @response_file                  Specify a response file to provide additional parameters

    >vcpkg search assimp
    >vcpkg search | findstr assimp
    assimp               5.0.1            The Open Asset import library
    magnum-plugins[assimpimporter]        AssimpImporter plugin

    >vcpkg search | findstr glu
    aws-sdk-cpp[glue]                     C++ SDK for the AWS glue service
    freeglut             3.2.1-4          Open source implementation of GLUT with source and binary backwards compatibil...
    glui                 2019-11-30       GLUI is a GLUT-based C++ user interface library
    mathgl[glut]                          glut module

    >vcpkg install assimp:
    Computing installation plan...
    The following packages will be built and installed:
        assimp[core]:x86-windows
      * minizip[core]:x86-windows
      * rapidjson[core]:x86-windows
      * zlib[core]:x86-windows
    Additional packages (*) will be modified to complete this operation.
    Warning: The following VS instances are excluded because the English language pack is unavailable.
        C:\Program Files (x86)\Microsoft Visual Studio\2019\Community
    Please install the English language pack.

安装具有 Cuda 加速的 opencv 库：

    vcpkg search opencv
    vcpkg install opencv[cuda]:x64-windows 
    vcpkg --triplet x64-windows install opencv[cuda]

支持的架构组合查询，也可以查询 triplets 目录下的配置文件：

    >vcpkg help triplet

| VCPKG built-in triplets | VCPKG community triplets                            |
|-------------------------|-----------------------------------------------------|
| arm-uwp                 | arm-ios                  | x64-ios                  |
| arm64-windows           | arm-mingw                | x64-mingw                |
| x64-linux               | arm-windows              | x64-osx-dynamic          |
| x64-osx                 | arm64-ios                | x64-windows-static-md    |
| x64-uwp                 | arm64-mingw              | x86-ios                  |
| x64-windows-static      | arm64-uwp                | x86-mingw                |
| x64-windows             | arm64-windows-static     | x86-uwp                  |
| x86-windows             | wasm32-emscripten        | x86-windows-static-md    |
|                         |                          | x86-windows-static       |

新版本更新了 VCPKG community triplets，部分旧版改名添加了 static 和 dnyamic 后缀。

| arm-android        | arm64-android           | x86-android           | x64-android
| arm-ios            | arm64-ios               | x86-freebsd           | x64-freebsd
| arm-linux          | arm64-linux             | x86-ios               | x64-ios
| arm-mingw-dynamic  | arm64-mingw-dynamic     | x86-mingw-dynamic     | x64-linux-release
| arm-mingw-static   | arm64-mingw-static      | x86-mingw-static      | x64-mingw-dynamic
| arm-neon-android   | arm64-osx-dynamic       | x86-uwp               | x64-mingw-static
| arm-windows-static | arm64-osx               | x86-windows-static-md | x64-openbsd
| arm-windows        | arm64-uwp               | x86-windows-static    | x64-osx-dynamic
| ppc64le-linux      | arm64-windows-static-md | x86-windows-v120      | x64-osx-release
| s390x-linux        | arm64-windows-static    |                       | x64-windows-release
| wasm32-emscripten  | armv6-android           |                       | x64-windows-static-md


作为 MinGW 的用户，我非愿意看到 triplet 列表中有 mingw 的身影。

Triplet 文件用来记录和库相关的 OS、CPU、Compiler、Runtime 信息，它包含了编译模块时使用的工具链。

依赖包的管理：

    vcpkg remove assimp
    vcpkg remove --outdated
    vcpkg list
    vcpkg export assimp --7zip

Export Command 可以将库文件导出为一个打包文件，导出时必须指定导出的包格式，支持多种导出包格式：

- `--nuget`: NuGet package
- `--zip`: Zip archive
- `--7zip`: 7Zip archive
- `--raw`: Raw, uncompressed folder

每个打包文件内部结构和 vcpkg 的目录结构类似，使用导出的包只需要在 CMake 脚本中导入 vcpkg.cmake：

To use the exported libraries in CMake projects use:

    -DCMAKE_TOOLCHAIN_FILE=[...]/scripts/buildsystems/vcpkg.cmake

- `installed\` contains the installed package files
- `scripts\buildsystems\vcpkg.cmake` is a toolchain file suitable for use with CMake
- `build\native\vcpkg.targets` NuGet packages, that integrates with MSBuild projects.

因为安装好的库文件都在 `installed` 目录下，可以在工程中手动引用它们，而不必理会复杂的 vcpak 集成使用机制。

可以在环境变量中设置默认的架构，vcpkg 在导出包会使用它：

```bash
export VCPKG_DEFAULT_TRIPLET=x64-mingw-dynamic
export VCPKG_DEFAULT_HOST_TRIPLET=x64-mingw-dynamic
```


最后，提示一下，如果系统安装有多套编译器、多套库文件，VCpkg 脚本自动查找依赖库可能会定位到错误的编译器或库文件，引起编译失败问题。

例如，编译 libpng 出现 zlib 库的各种函数无定义：

    undefined reference to `deflateEnd'
    undefined reference to `crc32'

这是因为编译依赖库时找到的 zlib 可能是来自 Anaconda 中安装的库文件，而在自己编写的程序中引用的是另一个版本的库，前后不一致而导致找不到符号。


安装第三方的 MinGW 架构依赖库时出现错误：

    >vcpkg install assimp:x64-mingw
    Computing installation plan...
    The following packages will be built and installed:
        assimp[core]:x64-mingw
      * minizip[core]:x64-mingw
      * rapidjson[core]:x64-mingw
      * zlib[core]:x64-mingw
    Additional packages (*) will be modified to complete this operation.
    Unable to determine toolchain to use for triplet x64-mingw with CMAKE_SYSTEM_NAME MinGW

提示信息表明，vcpkg 无法从 CMAKE_SYSTEM_NAME 指定的 x64-mingw 架构确定需要用到的工具链：

    triplets/community/x64-mingw.cmake

这个问题有点恶心，因为 vcpkg 的源代码忽略了 MinGW，解决方法是修改 build.cpp 重新编译 vcpkg：

    diff --git a/toolsrc/src/vcpkg/build.cpp b/toolsrc/src/vcpkg/build.cpp
    index c61c6b7..d7c78aa 100644
    --- a/toolsrc/src/vcpkg/build.cpp
    +++ b/toolsrc/src/vcpkg/build.cpp
    @@ -558,6 +558,10 @@ namespace vcpkg::Build
             else if (cmake_system_name == "Android")
             {
                 return m_paths.scripts / fs::u8path("toolchains/android.cmake");
    +        }
    +        else if (cmake_system_name == "MinGW")
    +        {
    +            return m_paths.scripts / fs::u8path("toolchains/mingw.cmake");
             }
             else if (cmake_system_name.empty() || cmake_system_name == "Windows" || cmake_system_name == "WindowsStore")
             {
    --

参考 https://github.com/microsoft/vcpkg/issues/12065


## ==⚡ Classic vs Manifest

vcpkg 有两种依赖管理模式：

- Classic mode 经典模式
- Manifest mode 清单模式

经典模式下，在项目中使用 `vcpkg install` 和 `vcpkg remove` 命令管理依赖库，安装在项目中的 *vcpkg_installed* 子子目录下，而且所有库对当前所有项目都可见，并不是独立于项目。这种操作类似 `brew` or `apt` 等依赖工具的行为。

这会带一些问题，例如 2 个项目需要各依赖同一个库的不同版本，各自的依赖就会互相冲突，以往的解决方案是给每一个项目单独配置一份 vcpkg，单独去集成，这样很不方便，使用 manifest 模式能很方便的解决这个问题。

Manifest 清单模式下，各个项目安装依赖彼此独立，与 CMake 和 MSBuild 集成使用，这种模式和 Cargo 或 npm 这类依赖管理工具非常类似。

使用 `vcpkg install` 命令安装库时，被安装的库的依赖是通过 vcpkg 目录下的 *ports/PORT_NAME/CONTROL* 或 *ports/PORT_NAME/vcpkg.json* 文件中的 "Build-depends" 或 "Depends" 关键字确定的。

可以在命令行中指定 Ports Overlay 位置，而不是默认 vcpkg 安装目录下的 ports：

```sh
# an individual port (directory containing a CONTROL file),
vcpkg install sqlite3 --overlay-ports="C:\custom-ports\sqlite3"

# a directory containing ports,
vcpkg install sqlite3 --overlay-ports=\\share\org\custom-ports

# a file listing paths to the former two.
vcpkg install sqlite3 --overlay-ports=..\port-repos.txt
```

同样的，我们需要创建一个文件并指定私有项目的依赖以通过 vcpkg 读取该依赖并自动安装它们。清单文件 vcpkg.json 通常放置在最顶级的 CMakeLists.txt 的同级目录下，或者构建目录下，CMake 会检测到它。

进入清单模式的方式：

- 在清单文件 vcpkg.json 所在目录或其子目录下执行 vcpkg 命令就会进入清单模式。
- 或者传入 `--manifest-root=<directory>` 参数执行命令时，初始值为 `x-manifest-root`；

在清单模式下，依赖默认安装目录位于 `<manifest-root>/vcpkg_installed`，可以通过 `--x-install-root=<path>` 指定安装目录。并且执行 `vcpkg install` 命令安装依赖时，会自动移除清单中没有指定的依赖。如果是 CMake 执行时调用依赖安装命令，则会安装到构建输出目录下的 `vcpkg_installed` 目录。

    ${CMAKE_SOURCE_DIR}/vcpkg.json
    ${CMAKE_BINARY_DIR}/vcpkg_installed

与 CMake 集成，在命令行中添加参数 VCPKG_OVERLAY_PORTS，其值必须为绝对路径：

    cmake.exe -G "Ninja" --DCMAKE_TOOLCHAIN_FILE=<vcpkg_toolchain_path> -DVCPKG_OVERLAY_PORTS="<overlay_abs_path>"

与 MSBuild 工程集成，设置项目 Properties -> Configuration Properties ->  vcpkg -> Additional Options 中添加以下参数，其值必须为绝对路径：

    --overlay-ports=<overlay_abs_path>


将以下 Manifests -- vcpkg.json 保存在项目根目录下，并执行 vcpkg install 命令即会根据依赖配置文件安装依赖库，可以指定平台架构，如 `vcpkg install --triplet x64-mingw-static`：

```json
{
    "name": "versions-test",
    "version-string": "1.0.0",
    "dependencies": [
        { "name": "boost-python", 
          "version>=": "1.56.0",
          "platform": "!windows",
          "default-features": false,
          "features": [ "python2" ]
        }
    ],
    "overrides": [
        { "name": "boost-python", "version": "1.66.0" }
    ],
    "builtin-baseline":"3426db05b996481ca31e95fff3734cf23e0f51bc"
}
```

执行 vcpkg install 命令安装依赖时，会根据 builtin-baseline 指定的 Git commit ID 去 vcpkg 目录的 git 仓库查询相应的 versions/baseline.json 版本依赖关系。注意 *platform* 指定依赖适用的平台架构，使用感叹号表示否定，如 "!windows" 表示 Windows 系统不适用，也就不会安装。还可以组合表达式 `(windows & arm64) | (linux & x64)`，就会在 Windows ARM64 或 Linux x64 系统上安装。

- The operating system: `windows`, `uwp`, `linux`, `osx` (includes macOS), `android`, `emscripten`
- The architecture: `x86`, `x64`, `wasm32`, `arm64`, `arm` (includes both arm32 and arm64 due to backwards compatibility)

声明覆盖 overrides 可以强制 vcpkg 忽略所有其他版本约束，并使用覆盖中指定的版本，解决精确版本和解析版本冲突非常有用。


安装依赖极有可能遇到编译失败的情况，需要到 buildtrees 目录查询日志文件，以确定具体错误。

例如，在 CMake 脚本中设置 *x64-mingw-static* 方式，编译 CPython 就会失败，除非修改源代码构建脚本，提供 Windows 系统下 MinGW 编译方式的实现，否则就要使用 MSBuild + MSVC 来编译。这需要花点功夫来重编编写 portfile.cmake 脚本逻辑，并且 CPython 中的 PCbuild 的工程配置对 MinGW 无效，需要重新配置。 

    set(VCPKG_TARGET_TRIPLET      x64-windows-static)
    
    add_definitions("/MTd")

避免符号未定义问题，需要根据 UCRT 运行库的实际使用情况来设置链接选项，是否使用静态链接 /MT or /MD？是否使用调试版本 /MTd or /MDd？

根据编译输出信息显示，CPython 的移植构建脚本 portfile.cmake 会调用 MSBuild：

    Working Directory: C:/vcpkg/buildtrees/python3/x64-mingw-static-rel/v3.9.2-51955b816d.clean
    Error code: 1
    See logs for more information:
      C:\vcpkg\buildtrees\python3\build-x64-mingw-static-rel-out.log

    Call Stack (most recent call first):
      scripts/cmake/vcpkg_install_msbuild.cmake:172 (vcpkg_execute_required_process)
      buildtrees/versioning_/versions/python3/.../portfile.cmake:101 (vcpkg_install_msbuild)
      scripts/ports.cmake:145 (include)

    vcpkg_install_msbuild(
        SOURCE_PATH ${SOURCE_PATH}
        PROJECT_SUBPATH "PCbuild/pcbuild.proj"
        OPTIONS ${OPTIONS}
        LICENSE_SUBPATH "LICENSE"
        SKIP_CLEAN
    )

因为 CPython 在 Windows 系统上，使用 PCbuild 目录下的 MSBuild 构建配置，错误的配置，例如没有在命令行中执行 MSVC VCVARS64 配置脚本，$(VCTargetsPath) 变量没有指向正确路径，会导致 MSB4019: 未找到导入的项目“C:\Microsoft.Cpp.Default.props”。

可以配置环境变量 VCTargetsPath 指向正确目录，使用 msbuild 执行以下 vcxproj 可以显示当前设置的路径：

```xml
<Project ToolsVersion="4.0" 
    xmlns='http://schemas.microsoft.com/developer/msbuild/2003'>
    <Target Name="go">  
        <Message Text="VCTargetsPath: $(VCTargetsPath)" />  
    </Target> 
</Project>
```

在 CMake 脚本中可以设置环境变量，但这并不会生成，因为依赖是在工程的 CMake 脚本前面执行的，需要预先执行 VCVARS64.bat 配置脚本：

```sh
# C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\Common7\IDE\VC\VCTargets\
# C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Microsoft\VC\v160\
# C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\MSBuild\Microsoft\VC\v170\
set( ENV{VCTargetsPath} "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/MSBuild/Microsoft/VC/v160/" )
```

即使使用 MSBuild MSVC 编译安装 boost-python 也不能一次通过，它的 portfile.cmake 脚本使用了已删除的过期功能，需要将 vcpkg_common_functions 注解掉，另外，引用的 boost-modular.cmake 不存在，应该是引用 boost-modular-headers.cmake。

```sh
# C:\vcpkg\buildtrees\versioning_\versions\boost-python\1fefff58b74c58d6af63fd36fb83198a1cc32de8\portfile.cmake
# include(vcpkg_common_functions)
# include(${CURRENT_INSTALLED_DIR}/share/boost-vcpkg-helpers/boost-modular.cmake)
include(${CURRENT_INSTALLED_DIR}/share/boost-vcpkg-helpers/boost-modular-headers.cmake)
```


## ==⚡ vcpkg & cmake

集成使用 vcpkg 有两种主要方式，分别和 MSBuild 和 CMake 集成使用。

MSBuild Integration (Visual Studio) 使用以下命令：

```sh
# Make installed packages available user-wide. Requires admin privileges on first use
vcpkg integrate install
# Remove user-wide integration
vcpkg integrate remove
# Generate a referencing nuget package for individual VS project use
vcpkg integrate project
# Enable PowerShell tab-completion
vcpkg integrate powershell
```

MSBuild 工程使用 xml 文件，所以要修改 triplets 就使用相应的节点进行设置，推荐使用 `Globals` PropertyGroup：

```xml
<PropertyGroup Label="Globals">
  <!-- .... -->
  <VcpkgTriplet Condition="'$(Platform)'=='Win32'">x86-windows-static</VcpkgTriplet>
  <VcpkgTriplet Condition="'$(Platform)'=='x64'">x64-windows-static</VcpkgTriplet>
</PropertyGroup>
```

与 CMake 或 Visual Studio 集成使用 vcpkg，请运行以下命令，可能需要管理员权限：

```sh
>vcpkg integrate install
Applied user-wide integration for this vcpkg root.

All MSBuild C++ projects can now #include any installed libraries.
Linking will be handled automatically.
Installing new libraries will make them instantly available.

CMake projects should use: "-DCMAKE_TOOLCHAIN_FILE=C:/vcpkg/scripts/buildsystems/vcpkg.cmake"
```

在此之后，可以创建一个非 cmake 项目或打开已有的项目，项目中，所有已安装的库均可立即使用 `#include` 包含您需使用的库的头文件且无需额外配置。

对于 CMake Integration 方式，只需要将 vcpkg.cmake 传入命令行，或者直接在 CMakeLists.txt 脚本的变量中设置。Vcpkg toolchain 文件会设置好正确的 Vcpkg 路径，以使用 cmake 执行 `find_package()`, `find_path()`, `find_library()` 等命令时可以正确找到相应的对象。

在 cmake 项目中使用 vcpkg，仍需通过 `find_package` 来引用已安装的库。

使用以下三个开源库来演示一个 Vcpkg + CMake 工程组织结构，参考 vcpkg\docs\examples\manifest-mode-cmake.md：

- [fmt](https://github.com/fmtlib/fmt) 一个现代化的字符串格式化库
- [range-v3](https://github.com/ericniebler/range-v3) 基于 C++20 std::ranges 实现的区间对象
- [cxxopts](https://github.com/jarro2783/cxxopts) 一个经量的 C++ 程序命令行解析器

使用 Vcpkg 经典模式安装依赖库，需要根据使用的编译器来安装相应架构的库：

```sh
set path=C:\vcpkg\downloads\tools\msys2\msys64\opt\bin;%path%;
vcpkg install fmt range-v3 cxxopts
vcpkg install fmt range-v3 cxxopts --triplet x64-windows
vcpkg install fmt range-v3 cxxopts --triplet x64-windows-dynamic
vcpkg install fmt range-v3 cxxopts --triplet x64-mingw-static
vcpkg install fmt range-v3 cxxopts --triplet x64-mingw-dynamic
```

```sh
> vcpkg export fmt:x64-mingw-dynamic range-v3 cxxopts --7zip
> vcpkg export fmt range-v3 cxxopts --7zip
The following packages are already built and will be exported:
    cxxopts:x64-mingw-static
    fmt:x64-mingw-static
    range-v3:x64-mingw-static
  * vcpkg-cmake:x64-windows
  * vcpkg-cmake-config:x64-windows
Additional packages (*) need to be exported to complete this operation.
Creating 7zip archive...
7zip archive exported at: C:\vcpkg\vcpkg-export-20220409-155546.7z
To use the exported libraries in CMake projects use:
    -DCMAKE_TOOLCHAIN_FILE=[...]/scripts/buildsystems/vcpkg.cmake
```

安装多个编译器可能出现配置混乱，编译源代码出现符号不匹配问题，而导致安装失败。并且需要注意，多个编译器的切换可能导致同一个 triplet 配置下的库，因为使用不同版本的编译器而出现兼容问题，典型的问题就有 File format not recognized。这种情况就需要删除 *installed* 目录下的相关文件，或者使用 vcpkg remove 移除指定的已经安装库文件。

重新安装时，会有一个 Detecting compiler hash for triplet ... 的过程，切换了不同的编译器通常会出现结果不匹配的情况，vcpkg 就知道需要重新进行编译并安装。

需要理解 vcpkg 的整个依赖编译流程，vcpkg 使用 cmake + ninja 编译方案，编译器工具可以使用 Mingw-w64、MSYS2 或 MSVC 等等。安装一个依赖库时，首先是下载源代码到 *downloads* 目录下，然后解包到 *builtrees* 目录，并根据指定架构进行编译，最后安装到 *installed* 目录中供项目使用，编译好的库文件会缓存到 *packages* 目录，下次安装时直接使用而不用再编译，并且这里还包含了使用说明文件，以及 CMake 配置脚本。

此外，Binary Caching 也是编译好的库文件缓存，避免重复编译，使用 `vcpkg help binarycaching` 命令查询相关位置。

在 *builtrees* 目录中，通过 CMakeCache.txt 文件可以查询库文件使用的具体编译命令。

使用 MSYS2 编译工具安装依赖模块时，如果搜索路径设置了 msys2/msys64/opt/bin/ 目录，那么 vcpkg 会使用此目录下提供的 32-bit 和 64-bit 编译工具套件，文件名分别使用 i686-w64-mingw32 和 x86_64-w64-mingw32 两种前缀。注意，编译产生的程序可能需要依赖动态链接库，这需要将其对应的目录路径设置到环境变量中，版本错误导致程序不能正确定位动态链接库的入口点。

如果是单独安装 Mingw-w64，就不会有这样的前缀，而是根据下载时所选的安装包决定是 32-bit 还是 64-bit 的编译工具套件。

但是项目中 CMake 不会自动定位到这些工具，默认会使用不带前缀的 gcc g++ 这些命令。参考 Vcpkg 提供的配置脚本，它们会根据配置参数来尝试定位到 MSYS2 提供的各种带有平台构架前缀的命令文件位置，可以直接使用 include 引用它，并通过指定 CMAKE_SYSTEM_PROCESSOR 变量来实现特定编译器的查找定位：

```sh
# C:\vcpkg\scripts\ports.cmake
# C:\vcpkg\ports\vcpkg-cmake\vcpkg_cmake_configure.cmake
# C:\vcpkg\scripts\toolchains\mingw.cmake
find_program(CMAKE_C_COMPILER "${CMAKE_SYSTEM_PROCESSOR}-w64-mingw32-gcc")
find_program(CMAKE_CXX_COMPILER "${CMAKE_SYSTEM_PROCESSOR}-w64-mingw32-g++")
find_program(CMAKE_RC_COMPILER "${CMAKE_SYSTEM_PROCESSOR}-w64-mingw32-windres")
```

Vcpkg 经典模式下，依赖库可以同时安装不同的构架版本，这会导致 CMake 引用时出现错乱。因为引用错误的库导致符号未定义错误，项目编译失败，在 CMakeCache.txt 文件中可以看到当前工程的具体配置。

最新的 Manifest 清单模式会更好，依赖库独立于项目而不至于太混乱。

将以下 Manifests -- vcpkg.json 保存在项目根目录下，并执行 vcpkg install 命令即会根据依赖配置文件安装依赖库，可以指定平台架构，如 `vcpkg install --triplet x64-windows`：

```json
{
    "name": "versions-test",
    "version-string": "1.0.0",
    "dependencies": [
        "fmt", "range-v3", "cxxopts"
    ],
    "builtin-baseline":"3426db05b996481ca31e95fff3734cf23e0f51bc"
}
```

在配置文件所在目录下执行 vcpkg install 命令安装依赖时，vcpkg 会根据 builtin-baseline 指定的 Git commit ID 去 vcpkg 目录的 git 仓库查询相应的 versions/baseline.json 版本依赖关系，并安装到项目中的 *vcpkg_installed* 子目录。

直接执行 CMake 生成器，它会自动调用 vcpkg install 命令安装依赖模块到构建目录。

项目目录结构如下：

    fibo/
      src/
        main.cxx
      CMakeLists.txt
      vcpkg.json

先编写 `CMakeLists.txt` 脚本及程序后就可以生成构建脚本，并执行构建，CMake 提供非常丰富的生成器，Ninja 就非常好用：

```sh
> cmake -B build -S . -G "Ninja" -DCMAKE_TOOLCHAIN_FILE=C:/vcpkg/scripts/buildsystems/vcpkg.cmake
> cmake --build build
```

还有一种方法，直接在 CMakeLists.txt 文件中指定 `CMAKE_TOOLCHAIN_FILE` 变量，其它脚本可以使用 `VCPKG_CHAINLOAD_TOOLCHAIN_FILE` 或者直接使用 include 指令引用：

```sh
if(DEFINED ENV{VCPKG_ROOT} AND NOT DEFINED CMAKE_TOOLCHAIN_FILE)
  set(CMAKE_TOOLCHAIN_FILE "$ENV{VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake"
      CACHE STRING "")
endif()

project(myproject CXX)
```

注意，要在 `project()` 命令之前设置。另外，类似 `CMAKE_SYSTEM_NAME`,`CMAKE_C_COMPILER` 等这些变量都要在 `project()`命令之前设定，不然 CMake 会按照默认的设置处理。

如果电脑中没有安装 cmake，vcpkg 会自动下载 cmake portable 版本。


先编写 `CMakeLists.txt` 脚本：

```sh
cmake_minimum_required(VERSION 3.15)
#[===================================[
# use MSVC
set(CMAKE_CXX_COMPILER cl.exe)
#]===================================]

set( ENV{PATH} "$ENV{PATH};C:/vcpkg/downloads/tools/msys2/msys64/opt/bin" )

set(VCPKG_TARGET_TRIPLET      x64-mingw-dynamic)
set(CMAKE_SYSTEM_PROCESSOR    x86_64)

set(CMAKE_TOOLCHAIN_FILE "C:/vcpkg/scripts/buildsystems/vcpkg.cmake")
set(VCPKG_CHAINLOAD_TOOLCHAIN_FILE "C:/vcpkg/scripts/toolchains/mingw.cmake")
# include("C:/vcpkg/scripts/toolchains/mingw.cmake")

project(manifest-mode-example CXX)

find_package(fmt CONFIG REQUIRED)
find_package(range-v3 CONFIG REQUIRED)
find_package(cxxopts CONFIG REQUIRED)

message("LIB PATH: ${fmt_DIR}")

add_executable(main src/main.cxx)
target_compile_features(main PRIVATE cxx_std_17)

target_link_libraries(main
  PRIVATE
    fmt::fmt
    range-v3::range-v3
    cxxopts::cxxopts)
```

程序代码 `main.cxx`，得到可执行程序后，就可以通过 main -h 来获取使用帮助：

```cpp
#include <cxxopts.hpp>
#include <fmt/format.h>
#include <range/v3/view.hpp>

namespace view = ranges::views;

int fib(int x) {
  int a = 0, b = 1;

  for (int it : view::repeat(0) | view::take(x)) {
    (void)it;
    int tmp = a;
    a += b;
    b = tmp;
  }

  return a;
}

int main(int argc, char** argv) {
  cxxopts::Options options("fibo", "Print the fibonacci sequence up to a value 'n'");
    options.add_options()
      ("n,value", "The value to print to", cxxopts::value<int>()->default_value("10"))
      ("h,help",  "Print Help");

  auto result = options.parse(argc, argv);
  if (result.count("n")==0 || result.count("help")){
    std::cout << options.help() << std::endl;
    exit(0);
  }
  auto n = result["value"].as<int>();

  for (int x : view::iota(1) | view::take(n)) {
    fmt::print("fib({}) = {}\n", x, fib(x));
  }
}
```

注意 add_options() 返回一个 OptionAdder，它重载了 operator()，可以进行链式表达，后续添加选项就很方便。


# 🐣 MSYS2 & Pacman
- [MSYS2](https://www.msys2.org/docs/what-is-msys2/)
- [Pacman Wiki](https://wiki.archlinux.org/title/Pacman)
- [Pacman Base Packages](https://packages.msys2.org/base)

Msys 2.0 目前维护比较好的一套编译工具及 Windows 应用程序构建环境，它本身基于 Cygwin 构建，
结合了 Arch Linux 的 pacman 依赖管理工具，使用它可以很方便地安装需要的组件，比如 ARM 嵌入式
开发需要使用 GCC 交叉编译，那么就可以通过 pacman 安装现有的编译套件。

```sh
usage:  pacman <operation> [...]
operations:
    pacman {-h --help}
    pacman {-V --version}
    pacman {-D --database} <options> <package(s)>
    pacman {-F --files}    [options] [package(s)]
    pacman {-Q --query}    [options] [package(s)]
    pacman {-R --remove}   [options] <package(s)>
    pacman {-S --sync}     [options] [package(s)]
    pacman {-T --deptest}  [options] [package(s)]
    pacman {-U --upgrade}  [options] <file(s)>

# Get Help
pacman -h
pacman -S -h

# Finding a package
pacman -Ss <name or part of the name of the package>

# Installing a package
pacman -S <name of the package>

# Installing a specific version of a package or a stand-alone packages
pacman -U <packagefile.tar.zst>
pacman -U <packagefile.tar.xz>

# Uninstalling a package
# -s, --recursive remove unnecessary dependencies
# (-ss includes explicitly installed dependencies)
pacman -R <name of the package>
pacman -Rs <name of the package>
pacman -Rss <name of the package>

# Finding dependencies of a package
pactree mingw-w64-x86_64-gettext
pacman -Qi mingw-w64-x86_64-gettext

# Finding out which package a file belongs to
# /opt/bin/i686-w64-mingw32-as.exe is owned by mingw-w64-cross-binutils 2.35.1-1
# /opt/bin/x86_64-w64-mingw32-gcc.exe is owned by mingw-w64-cross-gcc 10.2.0-1
pacman -Qo <full file path>

# Listing the content of a package
pacman -Ql <name of the package>

# Finding which package will install the file you need
# Call pacman -Fy to update your package database.
pacman -F <filename>
pacman -Fx <filename>

# Remove old packages from cache directory: -c, --clean (-cc for all)
pacman -Sc
pacman -S --clean

# /etc/pacman.conf
>pacman-conf
[options]
RootDir = /
DBPath = /var/lib/pacman/
CacheDir = /var/cache/pacman/pkg/
HookDir = /etc/pacman.d/hooks/
GPGDir = /etc/pacman.d/gnupg/
LogFile = /var/log/pacman.log
HoldPkg = pacman
Architecture = x86_64
```

同一个包安装多个版本后，会在 var\lib\pacman\local 产生多个条目，运行 pacman 会提示重复数据，
可以使用以下 Python 脚本移除旧版本的记录：

```py
import glob
import os
import shutil

pacmap = dict()

for file in glob.glob("var/lib/pacman/local/*/desc"):
    with open(file) as text:
        path = os.path.dirname(file)
        isname = False
        for line in text:
            if line == "%NAME%\n":
                isname = True
            elif isname and line in pacmap.keys():
                print("remove: duplicated database entry:", line, end="")
                shutil.rmtree(pacmap[line])
                break
            elif isname:
                pacmap[line] = path
                break
print("var/lib/pacman/local: duplicated database entry removed.")
```

使用 MSYS2 提供的 32-bit 和 64-bit 编译工具套件，选择就有很多种，还有 ARM 等交叉编译工具。
在 msys2/msys64/opt 和 msys2\msys64\usr 目录下各有一套编译工具，此外，还有 clang32，
clang64，mingw32 和 mingw64 等整合的编译工具，根据需要安装使用，注意使用时不能搞混。 

MSYS2 目录结构及相关的平台构架，运行库关系：

|    Name    |    Prefix   | Toolchain | Architecture | C Library | C++ Library |
|------------|-------------|-----------|--------------|-----------|-------------|
| MSYS       | /usr        | gcc       | x86_64       | cygwin    | libstdc++   |
| MINGW32    | /mingw32    | gcc       | i686         | msvcrt    | libstdc++   |
| MINGW64    | /mingw64    | gcc       | x86_64       | msvcrt    | libstdc++   |
| UCRT64     | /ucrt64     | gcc       | x86_64       | ucrt      | libstdc++   |
| CLANG64    | /clang64    | llvm      | x86_64       | ucrt      | libc++      |
| CLANG32    | /clang32    | llvm      | i686         | ucrt      | libc++      |
| CLANGARM64 | /clangarm64 | llvm      | aarch64      | ucrt      | libc++      |

两个运行于 Windows 系统上的 C standard library：

- MSVCRT (Microsoft Visual C++ Runtime) Windows 系统默认的运行库随 MSVC 发行，有个性功能并不完全兼容 C99；
- UCRT (Universal C Runtime) 是新版本 Visual Studio 默认的运行库，随 Win10 提供，拥有更好的兼容性；

MSVCRT 的特点还包括：

- Works out of the box on every Microsoft Windows versions.
- It isn't C99 compatible, for example the printf() function family, but...
- mingw-w64 provides replacement functions to make things C99 compatible in many cases
- It doesn't support the UTF-8 locale
- Binaries linked with MSVCRT should not be mixed with UCRT ones because the
  internal structures and data types are different. (More strictly, object files
  or static libraries built for different targets shouldn't be mixed. DLLs built
  for different CRTs can be mixed as long as they don't share CRT objects, e.g. 
  FILE* , across DLL boundaries.) Same rule is applied for MSVC compiled binaries
  because MSVC uses UCRT by default (if not changed).


MSYS2 各个编译器套件及其编译的文件安装包都使用的名称前缀来区别，如下，可以使用 pacman 工具
查询可用的工具包，如 pacman -Ss mingw-w64-i686 获取 32-bit 相关的工具，包含编译工具：

|    Name    |      Package prefix      |
|------------|--------------------------|
| MSYS       | None                     |
| MINGW32    | mingw-w64-i686-          |
| MINGW64    | mingw-w64-x86_64-        |
| UCRT64     | mingw-w64-ucrt-x86_64-   |
| CLANG64    | mingw-w64-clang-x86_64-  |
| CLANG32    | mingw-w64-clang-i686-    |
| CLANGARM64 | mingw-w64-clang-aarch64- |

可以直接安装一组工具，也可以单独安装某些部分，每个 Base Package 都包含一系列的工具包 Binary 
Packages，并且相关工具通常会用一个 Group 来管理，安装时指定一个组名即可，注意 Base Package 
可以和包重名。

以下是 -S 同步命令的使用参考：

```sh
# Package: gcc
# The GNU Compiler Collection - C and C++ frontends
pacman -S gcc   # ==> /usr/bin

# Package: clang
# C language family frontend for LLVM
pacman -S clang # ==> /usr/bin

# Group: base-devel
# https://packages.msys2.org/group/base-devel
# https://packages.msys2.org/package/msys2-w32api-headers
# https://packages.msys2.org/package/msys2-w32api-runtime
pacman -S base-devel
pacman -S msys2-w32api-headers
pacman -S msys2-w32api-runtime

# Base Package: mingw-w64-gcc
# GNU Compiler Collection (C,C++,OpenMP) for MinGW-w64
# Group(s):
# mingw-w64-i686-toolchain, mingw-w64-ucrt-x86_64-toolchain, mingw-w64-x86_64-toolchain
pacman -S mingw-w64-i686-toolchain        # ==> /mingw32/bin
pacman -S mingw-w64-x86_64-toolchain      # ==> /mingw64/bin
pacman -S mingw-w64-ucrt-x86_64-toolchain # ==> /ucrt64/bin

# Base Package: mingw-w64-clang 14.0.0-1
# C language family frontend for LLVM (mingw-w64)
# Group(s):
# mingw-w64-clang-aarch64-toolchain, mingw-w64-clang-i686-toolchain, mingw-w64-clang-x86_64-toolchain
# Package: C language family frontend for LLVM (mingw-w64)
pacman -S mingw-w64-x86_64-clang
pacman -S mingw-w64-i686-clang


# Base Package: mingw-w64-cmake
# A cross-platform open-source make system (mingw-w64)
# Package: mingw-w64-x86_64-cmake  3.23.0-1 
# A cross-platform open-source make system (mingw-w64)
pacman -S mingw-w64-x86_64-cmake
pacman -S mingw-w64-clang-x86_64-cmake
```

2.1.1 Comparing versions before updating
To see old and new versions of available packages, uncomment the "VerbosePkgLists" line in /etc/pacman.conf. The output of pacman -Syu will be like this:

    Package (6)             Old Version  New Version  Net Change  Download Size

    extra/libmariadbclient  10.1.9-4     10.1.10-1      0.03 MiB       4.35 MiB
    extra/libpng            1.6.19-1     1.6.20-1       0.00 MiB       0.23 MiB
    extra/mariadb           10.1.9-4     10.1.10-1      0.26 MiB      13.80 MiB


# 🐣 CMake 编译脚本生成工具
- [CMake Tutorial – Getting Started](https://www.johnlamp.net/cmake-tutorial-1-getting-started.html)
- [CMake Manual](https://cmake.org/cmake/help/v3.18/)
- [CMake Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)
- [User Interaction Guide](https://cmake.org/cmake/help/latest/guide/user-interaction/index.html)
- [Using Dependencies Guide](https://cmake.org/cmake/help/latest/guide/using-dependencies/index.html)
- [Ninja - small build system](https://ninja-build.org/)
- [Entry point symbol](https://docs.microsoft.com/en-us/cpp/build/reference/entry-entry-point-symbol)
- [CMake BASIS](https://cmake-basis.github.io/)
- CMake 指定编译器 https://www.bookset.io/read/CMake-Cookbook/content-chapter1-1.6-chinese.md
- Undocumented command line flags (-H, -B) https://cmake.org/pipermail/cmake-developers/2018-January/030521.html

What is CMake？

CMake 是一个翻译工具，将 CMakeLists.txt 脚本翻译成其它自动构建工具的脚本，如织 make、
ninja、nmake 等等。

CMake 是跨平台编译工具，比 make 更为高级，通过编写 `CMakeLists.txt` 文件，然后用 cmake 
命令将其转化为 make 所需要的 `makefile` 文件，最后用 `make -G` 命令生成指定编译平台的脚本
或工程文件。

Why CMake？

被逼的！这三个字是认真的。

不管 CMake - Cross platform Make 是否是一个优秀的构建工具，不管你是否认同 CMake，都无法
否认 CMake 目前是 C++ 的 defacto build system。


CMake 输入的脚本文件有两种扩展名，但有三种组织方式：

01. - 入口脚本 `CMakeLists.txt`，通常在项目的顶层目录，用来生成构建脚本系统，包含此脚本的
    子目录可以 add_subdirectory 添加；
02. - Scripts `<script>.cmake`，独立脚本执行简单任务并不生成构建脚本，可以使用 -P 选项传入
     cmake 命令执行；
03. - Modules `<module>.cmake`，模块脚本，可以由独立脚本或入口脚本 include() 命令引用；

目前 CMake 已经支持 Ninja、GCC 等编译平台，同时也支持生成 Visual Studio、 Xcode、CodeBlocks、
Sublime Text 等 IDE 的工程文件。支持 cmake 和 cmake-gui 两种工作方式。

```sh
cmake.exe -Ssrc -Bbuild
cmake.exe -Hsrc -Bbuild
cmake-gui.exe -Ssrc -Bbuild
cmake .. -G"Visual Studio 12 2017 Win64" -D CMAKE_CONFIGURATION_TYPES="Release;Debug"
cmake -H. -Bbuild -DCMAKE_BUILD_TYPE Release
cmake --build . --config Release
cmake --install . --prefix /prefix/path/to/install
```

其中 -H 和 -B 官方文档未记录的 CLI 选项。 -H 表示在指定当前目录中搜索根 CMakeLists.txt 文件。
-B 告诉 CMake 在指定的目录中生成所有编译脚本文件。

来看看 CMake 命令的基本使用，通常会将脚本生成文件放到 build 目录下统一管理：

    Generate a Project Buildsystem
     cmake [<options>] <path-to-source>
     cmake [<options>] <path-to-existing-build>
     cmake [<options>] -S <path-to-source> -B <path-to-build>

    Build a Project
     cmake --build <dir> [<options>] [-- <build-tool-options>]

    Install a Project
     cmake --install <dir> [<options>]

    Open a Project
     cmake --open <dir>

    Run a Script
     cmake [{-D <var>=<value>}...] -P <cmake-script-file>

    Run a Command-Line Tool
     cmake -E <command> [<options>]

    Run the Find-Package Tool
     cmake --find-package [<options>]

生成目标的 Makefile 脚本后，可以执行命令查看 CMake 自动生成了什么目标设置：

    >make help
    The following are some of the valid targets for this Makefile:
    ... all (the default if no target is provided)
    ... clean
    ... depend
    ... edit_cache
    ... rebuild_cache

生成目标的 Makefile 脚本后，还没有脱离 CMake 环境，执行 make 时还是需要调用 cmake 执行
命令行工具，cmake_progress_start 这个命令行工具也没有文档说明，看名字应该是启动编译时初始化
工作，然后才是 make 执行 CMakeFiles/Makefile2：

    # The main all target
    all: cmake_check_build_system
        $(CMAKE_COMMAND) -E cmake_progress_start freetype/build/CMakeFiles freetype/build/CMakeFiles/progress.marks
        $(MAKE) $(MAKESILENT) -f CMakeFiles/Makefile2 all
        $(CMAKE_COMMAND) -E cmake_progress_start freetype/build/CMakeFiles 0

    # Special rule to run CMake to check the build system integrity.
    # No rule that depends on this can have commands that come from listfiles
    # because they might be regenerated.
    cmake_check_build_system:
        $(CMAKE_COMMAND) -S$(CMAKE_SOURCE_DIR) -B$(CMAKE_BINARY_DIR) --check-build-system CMakeFiles/Makefile.cmake 0

CMake 提供的命名行工具还不少，例如生成摘要：

    >cmake -E sha512sum cmake_install.cmake
    de7e06db2e5a535896689db776fc72a25abf6xd...  cmake_install.cmake

目前已存在多种 Make 工具，GNU Make ，QT 的 qmake ，微软的 nmake，BSD Make，Makepp 等等。
这些 Make 工具遵循着不同的规范和标准，所执行的 Makefile 格式也千差万别。如果使用 Make 工具，
就得为每一种标准写一次 Makefile，这将是一件让人抓狂的工作。而 CMake 就是为了解决这种工作而开发
出来让人抓狂的工具！

cmake 命令提供了相关的文档，可以使用命令打印到文件中。例如，以下命令会将所有 CMake 的模块文档
保存到 cmake_modules.rst 文件中：

    >cmake --help-modules cmake_modules.rst

reStructuredText 这种文件可以理解为是 Markdown 文件的加强版。


CMake 提供 5 个工具：

- Command-Line Tools

    - `CMake` 主要的生成编译脚本工具，如 `cmake -H. -Bbuild`
    - `CTest` 运行测试，如 `ctest -R Qt -j8`
    - `CPack` 打包安装程序，

- Interactive Dialogs

    - `CMake-GUI` 图形界面的 cmake
    - `ccmake` CMake curses interface

在当前目标下执行 `cmake path_to_cmakelists_txt` 命令，就会根据指定的列表文件生成编译脚本，
也可以直接在源代码目录中执行这个命令，除非列表文件指定了禁止在源目录生成。当前目录和指定的 
CMakeLists.txt 所在的目录是就 path-to-build 和 path-to-source 也对应 cmake-gui 两个目录。

CMake 强大的功能按以下类别进行划分，这也是主要的学习内容：

| 命令分类  | 功能描述  |
| :-------- | :-------- |
|`cmake-buildsystem`            | 构建系统，高逻辑级别上定义构建目标，生成执行文件、库文件输出等 |
|`cmake-commands`               | 重点内容，各种命令功能支持，分成 Scripting、Project、CTest 三类 |
|`cmake-compile-features`       | 为各种编译器提供参数或设置 |
|`cmake-developer`              | CMake 扩展开发支持，如编写 Find Module 脚本 |
|`cmake-env-variables`          | 环境变量读写支持 |
|`cmake-file-api`               | 提供文件 API 访问  `<build>/.cmake/api/` |
|`cmake-generator-expressions`  | 表达式生成器，在脚本运行过程中生成个表达式的值 |
|`cmake-generators`             | CMake 生成器，即 -G 指定生成的 Makefile 类型 |
|`cmake-language`               | CMake 脚本语言 |
|`cmake-modules`                | CMake 提供了一系列的模块，如 FindPNG 找图像库，还有 FindPHP4 等等 |
|`cmake-packages`               | 依赖模块功能支持，如查找依赖模块 find_package |
|`cmake-policies`               | 考虑后向兼容，不同版本的 CMake 可按指定策略运行编译脚本 |
|`cmake-properties`             | 编译脚本属性支持，如 INCLUDE_DIRECTORIES 属性包含头文件的目录列表 |
|`cmake-qt`                     | CMake 提供 Qt 4 和 Qt 5 库支持 |
|`cmake-server`                 | cmake -E server 启动服务器模式，已弃用，由 cmake-file-api 替代 |
|`cmake-toolchains`             | 工具链接支持，如使用语言设置、平台交叉编译等 |
|`cmake-variables`              | CMake 提供的变量支持非常丰富，内置的变量按编译工具、平台等分成多类 |
|`cpack-generators`             | 打包生成器，Archive、NSIS、NuGet、RPM、WIX 等等 |


以下是和当前工程、项目有关的变量：
https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html

    CMAKE_HOME_DIRECTORY
    CMAKE_BINARY_DIR
    PROJECT_BINARY_DIR
    CMAKE_CURRENT_SOURCE_DIR

    PROJECT_DESCRIPTION
    PROJECT_HOMEPAGE_URL
    PROJECT_NAME
    PROJECT_SOURCE_DIR
    PROJECT_VERSION

    <PROJECT-NAME>_BINARY_DIR
    <PROJECT-NAME>_DESCRIPTION
    <PROJECT-NAME>_HOMEPAGE_URL
    <PROJECT-NAME>_SOURCE_DIR
    <PROJECT-NAME>_VERSION


因此 CMake 的编译基本步骤如下：

- 在当前目录为 cmake 配置 CMakeLists.txt;
- 在当前目录执行 `cmake .` 命令生成 makefile 脚本供 make 等工具使用;
- 执行 make 进行编译；

CMake 与控制台交互的命令除 message 输出消息，还可以使用 execute_process 执行 shell 命令：

    execute_process(COMMAND <cmd1> [<arguments>]
                    [COMMAND <cmd2> [<arguments>]]...
                    [WORKING_DIRECTORY <directory>]
                    [TIMEOUT <seconds>]
                    [RESULT_VARIABLE <variable>]
                    [RESULTS_VARIABLE <variable>]
                    [OUTPUT_VARIABLE <variable>]
                    [ERROR_VARIABLE <variable>]
                    [INPUT_FILE <file>]
                    [OUTPUT_FILE <file>]
                    [ERROR_FILE <file>]
                    [OUTPUT_QUIET]
                    [ERROR_QUIET]
                    [COMMAND_ECHO <where>]
                    [OUTPUT_STRIP_TRAILING_WHITESPACE]
                    [ERROR_STRIP_TRAILING_WHITESPACE]
                    [ENCODING <name>]
                    [ECHO_OUTPUT_VARIABLE]
                    [ECHO_ERROR_VARIABLE])

    execute_process(COMMAND where g++ )

使用 file 命令进行文件的操作，包括上传下载。

访问环境变量，读取环境变量使用 $ENV{JAVA_HOME} 这样的格式，写入环境变量使用 set：

    set( ENV{PATH} /home/martink )
    
    if(NOT DEFINED ENV{JAVA_HOME})
        message(FATAL_ERROR "not defined environment variable:JAVA_HOME")  
    endif()
    #不能用 if(ENV{JAVA_HOME}) 形式来判断是否定义 
    #但可以用 if($ENV{JAVA_HOME})

总结一下，读取环境变量时用 `$ENV`，写入和判断时用 `ENV{JAVA_HOME}` 它指代变量名。


## 🐤🐥 CMake & Sublime Text
- https://www.sublimetext.com/docs/3/build_systems.html
- https://docs.sublimetext.io/reference/projects.html
- https://docs.sublimetext.io/guide/usage/file-management/projects.html
- https://docs.sublimetext.io/guide/extensibility/plugins/
- https://docs.sublimetext.io/guide/extensibility/snippets.html

CMkae 和 Sublime Text 可以很好地搭配工作，使用以下编译配置方便执行项目编译操作，将其保存到 \Packages\User\CMake.sublime-build 文件中即可：

```json
{
    "encoding": "utf-8",
    "encoding": "gbk",
    "quiet": true,
    "working_dir": "${project_path:${folder}}",
    "cmd": ["echo", "shell_cmd cause this command disabled!"],
    "shell_cmd": "cmake --help && cmake --version && where gcc && gcc --version",
    "selector": "source.c, source.cpp, source.c++, source.cmake, source.cmakecache",
    "env":
    {
        "PATH": "C:/Program Files (x86)/freeglut/bin;c:/MinGW/bin/;%PATH%;",
        "CPATH": "C:/Program Files (x86)/freeglut/include",
        "LIBRARY_PATH": "C:/Program Files (x86)/freeglut/lib",
        "LIBS": "-lopengl32 -lfreeglut -lfreeglut_static -lstdc++ ",
        "VCPKG": "-DCMAKE_TOOLCHAIN_FILE=C:/vcpkg/scripts/buildsystems/vcpkg.cmake ",
        "VCVARS64": "\"C:/Program Files (x86)/Microsoft Visual Studio/2022/BuildTools/Common7/Tools/VsDevCmd.bat\"",
        "VCVARS64": "\"C:/Program Files (x86)/Microsoft Visual Studio/2017/BuildTools/VC/Auxiliary/Build/vcvars64.bat\"",
        "VCVARS64": "\"C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat\"",
    },
    // for MSVC Compiler message process
    "file_regex": "^(.+)\\((\\d+)\\): ((?:fatal )?(?:error|fatal) \\w+): (.*)$",
    // for GCC Compiler message process
    "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (?:error|fatal):(.*)$",
    "variants":
    [
        {
            "name": "CMake - Visual Studio 17 2020",
            "shell_cmd": "del build\\CMakeCache.txt & cmake -H. -S. -Bbuild -DCMAKE_VERBOSE_MAKEFILE=ON %VCPKG% -G \"Visual Studio 17 2020\"",
        },
        {
            "name": "CMake - Visual Studio 16 2019",
            "shell_cmd": "del build\\CMakeCache.txt & cmake -H. -S. -Bbuild -DCMAKE_VERBOSE_MAKEFILE=ON %VCPKG% -G \"Visual Studio 16 2019\"",
        },
        {
            "name": "CMake - Visual Studio 15 2017",
            "shell_cmd": "del build\\CMakeCache.txt & cmake -H. -S. -Bbuild -DCMAKE_VERBOSE_MAKEFILE=ON %VCPKG% -G \"Visual Studio 15 2017 Win64\"",
        },
        {
            "name": "CMake - Ninja - Vcpkg [Default]",
            "shell_cmd": "del build\\CMakeCache.txt & cmake -H. -S. -Bbuild -DCMAKE_VERBOSE_MAKEFILE=ON -G \"Ninja\" %VCPKG%",
        },
        {
            "name": "CMake - Ninja - Vcpkg [MSVC]",
            "shell_cmd": "del build\\CMakeCache.txt & %VCVARS64% x64 & cmake -H. -S. -Bbuild -DCMAKE_VERBOSE_MAKEFILE=ON -G \"Ninja\" %VCPKG%",
        },
        {
            "name": "Ninja - all [Default]",
            "shell_cmd": "cd build & ninja.exe -f build.ninja all && ${file_base_name} & echo Done!",
        },
        {
            "name": "Ninja - all [MSVC]",
            "shell_cmd": "%VCVARS64% x64 & cd build & ninja.exe -f build.ninja all && ${file_base_name} & echo Done!",
        },
        {
            "name": "Ninja - clean",
            "shell_cmd": "%VCVARS64% x64 & cd build & ninja.exe -f build.ninja clean",
        },
        {
            "name": "Ninja - rebuild_cache",
            "shell_cmd": "%VCVARS64% x64 & cd build & ninja.exe -f build.ninja rebuild_cache",
        },
        {
            "name": "Ninja - test",
            "shell_cmd": "%VCVARS64% x64 & cd build & ninja.exe -f build.ninja test",
        },
        {
            "name": "CMake Build Release",
            "shell_cmd": "cd & cmake --build build --config Release",
        },
        {
            "name": "CMake Build Debug",
            "shell_cmd": "cd & cmake --build build --config Debug",
        },
        {
            "name": "CMake install",
            "shell_cmd": "cd & cmake --install build --prefix distributed",
        },
        {
            "name": "Memory Layout of Class (GCC)",
            "shell_cmd": "gcc --version && gcc --std=c++11 -fdump-class-hierarchy ${file} %LIBS% && echo Done with ${file_base_name}.class!",
        },
        {
            "name": "Compile & Run (GCC Debug)",
            "shell_cmd": "gcc --version && where gcc && gcc --std=c++11 ${file} %LIBS% -Og -g -o ${file_base_name} && ${file_base_name} && echo Done!",
        },
        {
            "name": "Compile & Run (GCC Release)",
            "shell_cmd": "gcc --version && where gcc && gcc --std=c++11 ${file} %LIBS% -Os -s -o ${file_base_name} && ${file_base_name} && echo Done!",
        },
        {
            "name": "GNU Make Win32",
            "shell_cmd": "cd \"${file_path}\" & powershell -Command \"make --version; where make; make Win32; \" && ${file_base_name} & echo Done!",
        },
        {
            "name": "GNU Make all",
            "shell_cmd": "cd \"${file_path}\" & powershell -Command \"make --version; where make; make all; \" && ${file_base_name} & echo Done!",
        },
        {
            "name": "GNU Make Clean",
            "shell_cmd": "cd \"${file_path}\" & powershell -Command \"make --version; where mak; make clean; echo Done!\"",
        },
    ],
}
```

将以下代码片段保存到 \Packages\User\cmake.sublime-snippet，在文本文件或 CMakelist.txt
脚本中使用 *cmake* 就可以输入模板内容：

```XML
    <snippet>
        <description>cmake - My Fancy Snippet</description>
        <content><![CDATA[
    cmake_minimum_required(VERSION 3.18.0 FATAL_ERROR)

    project(${1:demo} VERSION 0.1.0 LANGUAGES CXX C)

    add_executable(${2:project} main.cpp)
    ]]></content>
        <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
        <tabTrigger>cmake</tabTrigger>
        <!-- Optional: Set a scope to limit where the snippet will trigger -->
        <scope>text.plain, source.cmake</scope>
    </snippet>
```

类似地，创建 C++ 程序模板，保存到 %AppData%\Sublime Text 3\Packages 目录下：

```XML
    <snippet>
        <description>cpp - My Fancy Snippet</description>
        <content><![CDATA[
    #include <iostream>

    using namespace std;

    int main(int argc, char *argv[]) try
    {
        cout << "${1:Hello World!}" << endl;
    }
    catch (const char *err)
    {
        cout << "${2:Error}: " << err << endl;
    }
    ]]></content>
        <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
        <tabTrigger>cpp</tabTrigger>
        <!-- Optional: Set a scope to limit where the snippet will trigger -->
        <scope>text.plain, source.c++</scope>
    </snippet>
```

使用控制台查询所有代码片段文件：

    sublime.find_resources('*.sublime-snippet') 


## 🐤🐥 CMake Tutorial
- CMake Tutorial https://cmake.org/cmake/help/latest/guide/tutorial/index.html

CMake 脚本使用 # 添加注解，多行注解再使用两个方括号，并且方括号之间可以有任意等号：

    #[===================================[
    # use MSVC
    set(CMAKE_CXX_COMPILER cl.exe)
    #]===================================]

按 CMake 教程，一般 CMakeLists.txt 编写流程：

    Step 1: A Basic Starting Point
        Build and Run
        Adding a Version Number and Configured Header File
        Specify the C++ Standard
        Rebuild
    Step 2: Adding a Library
    Step 3: Adding Usage Requirements for a Library
    Step 4: Installing and Testing
        Install Rules
        Testing Support
    Step 5: Adding System Introspection
    Step 6: Adding a Custom Command and Generated File
    Step 7: Packaging an Installer
    Step 8: Adding Support for a Testing Dashboard
    Step 9: Selecting Static or Shared Libraries
    Step 10: Adding Generator Expressions
    Step 11: Adding Export Configuration
    Step 12: Packaging Debug and Release

以下是 CmakeLists.txt 示范：

    # (Step 1) ==========================================
    # A Basic Starting Point
    # - Adding a Version Number and Configured Header File
    # - Specify the C++ Standard

    cmake_minimum_required( VERSION 2.8 )
    project(Tutorial VERSION 1.0)

    set(CMAKE_CXX_FLAGS "-std=c++11" )
    set(CMAKE_CXX_STANDARD 11)
    set(CMAKE_CXX_STANDARD_REQUIRED True)
    
    # (Step 2) ==========================================
    # Adding a Library

    add_library(MathFunctions mysqrt.cxx)
    # add the MathFunctions library in subdirectory
    add_subdirectory(MathFunctions)

    # add the executable
    add_executable(Tutorial tutorial.cxx)

    # (Step 3) ==========================================
    # Adding Usage Requirements for Library

    # target_compile_definitions()
    # target_compile_options()

    # Add a dependency between top-level targets.
    add_dependencies(Tutorial [<target-dependency>]...)
    target_link_libraries(Tutorial PUBLIC MathFunctions)
    
    # add the binary tree to the search path for include files
    # so that we will find TutorialConfig.h
    target_include_directories(Tutorial PUBLIC
                              "${PROJECT_BINARY_DIR}"
                              "${PROJECT_SOURCE_DIR}/MathFunctions"
                              )

    find_package(OpenCV REQUIRED)
    # If the package has been found, several variables will
    # be set, you can find the full list with descriptions
    # in the OpenCVConfig.cmake file.
    # Print some message showing some of them
    message(STATUS "OpenCV library status:")
    message(STATUS "    version: ${OpenCV_VERSION}")
    message(STATUS "    libraries: ${OpenCV_LIBS}")
    message(STATUS "    include path: ${OpenCV_INCLUDE_DIRS}")
    
    # (Step 4) ==========================================
    # Installing and Testing
    # - Install Rules
    # - Testing Support

    install(TARGETS Tutorial DESTINATION bin)
    install(FILES "${PROJECT_BINARY_DIR}/TutorialConfig.h"
      DESTINATION include
      )

    # (Step 5) ==========================================
    # Adding System Introspection
    # - Specify Compile Definition

    # (Step 6) ==========================================
    # Adding a Custom Command and Generated File

    add_executable(MakeTable MakeTable.cxx)
    add_custom_command(
      OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/Table.h
      COMMAND MakeTable ${CMAKE_CURRENT_BINARY_DIR}/Table.h
      DEPENDS MakeTable
      )

    # (Step 7) ==========================================
    # Building an Installer

    include(InstallRequiredSystemLibraries)
    set(CPACK_RESOURCE_FILE_LICENSE "${CMAKE_CURRENT_SOURCE_DIR}/License.txt")
    set(CPACK_PACKAGE_VERSION_MAJOR "${Tutorial_VERSION_MAJOR}")
    set(CPACK_PACKAGE_VERSION_MINOR "${Tutorial_VERSION_MINOR}")
    include(CPack)

    # (Step 10) ==========================================
    # Adding Generator Expressions

    add_library(tutorial_compiler_flags INTERFACE)
    target_compile_features(tutorial_compiler_flags INTERFACE cxx_std_11)

    set(gcc_like_cxx "$<COMPILE_LANG_AND_ID:CXX,ARMClang,AppleClang,Clang,GNU>")
    set(msvc_cxx "$<COMPILE_LANG_AND_ID:CXX,MSVC>")
    target_compile_options(tutorial_compiler_flags INTERFACE
      "$<${gcc_like_cxx}:$<BUILD_INTERFACE:-Wall;-Wextra;-Wshadow;-Wformat=2;-Wunused>>"
      "$<${msvc_cxx}:$<BUILD_INTERFACE:-W3>>"
    )

    # (Step 11) ==========================================
    # Adding Export Configuration
            
    install(TARGETS MathFunctions tutorial_compiler_flags
            DESTINATION lib
            EXPORT MathFunctionsTargets)
    install(FILES MathFunctions.h DESTINATION include)

    # (Step 12) ==========================================
    # Packaging Debug and Release

    set(CMAKE_DEBUG_POSTFIX d)
    add_library(tutorial_compiler_flags INTERFACE)

    add_executable(Tutorial tutorial.cxx)
    set_target_properties(Tutorial PROPERTIES DEBUG_POSTFIX ${CMAKE_DEBUG_POSTFIX})

    target_link_libraries(Tutorial PUBLIC MathFunctions)

    set_property(TARGET MathFunctions PROPERTY VERSION "1.0.0")
    set_property(TARGET MathFunctions PROPERTY SOVERSION "1")


静态、动态链接混合 Mixing Static and Shared

    cmake_minimum_required(VERSION 3.10)

    # set the project name and version
    project(Tutorial VERSION 1.0)

    # specify the C++ standard
    set(CMAKE_CXX_STANDARD 11)
    set(CMAKE_CXX_STANDARD_REQUIRED True)

    # control where the static and shared libraries are built so that on windows
    # we don't need to tinker with the path to run the executable
    set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY "${PROJECT_BINARY_DIR}")
    set(CMAKE_LIBRARY_OUTPUT_DIRECTORY "${PROJECT_BINARY_DIR}")
    set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${PROJECT_BINARY_DIR}")

    option(BUILD_SHARED_LIBS "Build using shared libraries" ON)

    # configure a header file to pass the version number only
    configure_file(TutorialConfig.h.in TutorialConfig.h)

    # add the MathFunctions library
    add_subdirectory(MathFunctions)

    # add the executable
    add_executable(Tutorial tutorial.cxx)
    target_link_libraries(Tutorial PUBLIC MathFunctions)


实际使用中，CMake 提供丰富的功能，列如：

    include_directories(
        ${PROJECT_SOURCE_DIR}/../include/mq 
        ${PROJECT_SOURCE_DIR}/../include/incl 
        ${PROJECT_SOURCE_DIR}/../include/rapidjson
    )
    target_include_directories(${PROJECT_NAME} )

    # 它相当于 g++ -L 选项的作用，也相当于环境变量中增加 LD_LIBRARY_PATH
    link_directories(directory1 directory2 ...)
    link_directories("/home/server/third/lib")

    # 设定 SRC 变量，将源代码路径统一管理
    set(SRC 
        ${PROJECT_SOURCE_DIR}/../include/incl/a.cpp 
        ${PROJECT_SOURCE_DIR}/../include/mq/b.cpp 
        ${PROJECT_SOURCE_DIR}/c.cpp
    )
    
    # 创建共享库/静态库或引用库 add_library
    
    # 设置生成共享库的路径
    set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/lib)
     
    # 成的共享库文件就叫做 lib[LIB_NAME].so
    set(LIB_NAME freetype)

    add_library(${LIB_NAME} SHARED ${SRC})
    add_library(${LIB_NAME} STATIC ${SRC})

    # 把 ${LIB_NAME} 库和其它依赖的库链接起来
    # 以 libpthread.so 为例，这个命令相当 -lpthread
    target_link_libraries(${LIB_NAME} pthread more)
    
    # 可执行文件生成
    set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/bin)
    add_executable(${PROJECT_NAME} ${SRC})
    # 可执行文件所依赖的库
    target_link_libraries(${PROJECT_NAME} pthread more ${LIB_NAME})



## 🐤🐥 Compilers Settings
- https://www.bookset.io/read/CMake-Cookbook/content-chapter1-1.6-chinese.md
- https://cmake.org/cmake/help/v3.5/manual/cmake-toolchains.7.html
- https://cmake.org/cmake/help/v3.5/manual/cmake-buildsystem.7.html
- https://cmake.org/cmake/help/v3.5/manual/cmake-generators.7.html
- https://cmake.org/cmake/help/v3.5/manual/cmake-generator-expressions.7.html
- https://cmake.org/cmake/help/v3.5/manual/cmake-compile-features.7.html
- https://cmake.org/cmake/help/v3.5/variable/CMAKE_BUILD_TYPE.html

试试 MinGW 生成器创建 Sublime 工程：

    cmake path_to_cmakelists.txt -G "Sublime Text 2 - MinGW Makefiles"
    cmake -G "Sublime Text 2 - MinGW Makefiles" path_to_cmakelists.txt 

CMake 3.22.2 支持的生成器，生成器即生成编译脚本的工具：

- Visual Studio 工程
- Borland Makefiles
- NMake Makefiles
- NMake Makefiles JOM
- MSYS Makefiles
- MinGW Makefiles
- Green Hills MULTI
- Unix Makefiles
- Ninja
- Ninja Multi-Config
- Watcom WMake
- CodeBlocks 工程
- CodeLite 工程
- Eclipse CDT4 工程
- Kate 工程
- Sublime Text 工程

CMake 目前支持的编译系统：

- `AppleClang`: Apple Clang for Xcode versions 4.4+.
- `Clang`: Clang compiler versions 2.9+.
- `GNU`: GNU compiler versions 4.4+.
- `MSVC`: Microsoft Visual Studio versions 2010+.
- `SunPro`: Oracle SolarisStudio versions 12.4+.
- `Intel`: Intel compiler versions 12.1+.
- `NVIDIA CUDA`: NVIDIA nvcc compiler 7.5+.

如何选择一个特定的编译器？例如，如果想使用 Intel 或 Portland Group 编译器怎么办？CMake 
将语言的编译器存储在 `CMAKE_<LANG>_COMPILER` 变量中，其中 `<LANG>`是受支持的任何一种语言，
比如 CXX、C 或 Fortran。用户可以通过环境变量和脚本两种方式设置此变量。

配置时，CMake 会进行一系列平台测试，以确定哪些编译器可用，以及它们是否适合当前的项目。一个合适的
编译器不仅取决于我们所使用的平台，还取决于我们想要使用的生成器。CMake 执行的第一个测试基于项目
语言的编译器的名称。例如，cc 是一个可用的 C 编译器，那么它将用作 C 项目的默认编译器。

GNU/Linux 系统上，使用 Unix Makefile 生成器或 Ninja 时, GCC 家族中的编译器就是默认的 
C++、C 和 Fortran 的默认选择。

Windows 系统上，选择 Visual Studio 生成器，并且默认的 C++ 和 C 编译器是 MSVC。如果选择 
MinGW 或 MSYS Makefile 作为生成器，则默认使用 MinGW 编译器。

除了在生成器名称中指定 Platform architecture，还可以通过 -A 参数指定，在脚本中，脚本中 
`CMAKE_GENERATOR_PLATFORM` 变量也可以指定平台构架。默认构架为 `Win32`，具体项目类型的
架构选项参考 cmake --help-full 帮助信息：

* ``cmake -G "Visual Studio 15 2017" -A Win32``
* ``cmake -G "Visual Studio 15 2017" -A x64``
* ``cmake -G "Visual Studio 15 2017" -A ARM``
* ``cmake -G "Visual Studio 15 2017" -A ARM64``

要使用指定的编译，首先是通过指定生成器来大概确定用什么类型的编译器，默认是 MSVC，可以选择 
MinGW 等编译器。

正确的方法是通过生成器来确定默认的编译，一般使用 Ninja 或 MinGW Makefiles 生成器，默认
就是使用 GCC 编译器，CMake 会根据配置环境、环境变量的设置来选择默认编译器。

例如，执行了 MSVC vcvars64.bat 环境配置脚本后再生成构建脚本时就会选择 MSVC 作为默认编译器，
否则 CMake 会使用搜索到的可用编译器：

    cmake -S. -Bb -G "Sublime Text 2 - Ninja"
    cmake -S. -Bb -G "Sublime Text 2 - MinGW Makefiles"

然后，要指定编译具体位置时才使用脚本指定，并且要指定可执行程序的全名。

对于 C/C++ 语言的编译器选择，可以导出环境变量或在 CMakeLists.txt 中 project 指令前指定
编译器，并且还不能在 if 条件语句内设置：

```sh
# CMakeLists.txt 
#set within user supplied toolchain file

# use GCC
SET(CMAKE_C_COMPILER gcc.exe)
SET(CMAKE_CXX_COMPILER g++.exe)
set(CMAKE_C_COMPILER /full/path/to/gcc --arg1 --arg2)

# use MSVC
set(CMAKE_C_COMPILER cl.exe)
set(CMAKE_CXX_COMPILER cl.exe)
set(CMAKE_RC_COMPILER rc.exe)

# use Clang
SET(CMAKE_C_COMPILER "c:/llvm/bin/clang.exe" CACHE PATH "clang" FORCE)
SET(CMAKE_CXX_COMPILER "c:/llvm/bin/clang++.exe" CACHE PATH "clang++" FORCE)

cmake_minimum_required(VERSION 2.8)
project( cppDemo )
```

还可以使用 CLI 命令行中的 -D 选项定义符号，但是可能检测失败，例如：
https://cmake.org/cmake/help/latest/variable/CMAKE_LANG_COMPILER.html

    cmake ... -DCMAKE_C_COMPILER='gcc;--arg1;--arg2'
    cmake -S. -Bbuild -DCMAKE_CXX_COMPILER=g++.exe -DCMAKE_C_COMPILER=gcc.exe


总结起来，要显式指定编译器，应该按以下操作，并且尽量使用完整路径指定编译命令：

1. 先指定 Generator 以确定可使用的编译类型，这一步非常重要；
2. 使用 SET Cmake COMPILER 命令在项目定义前指定编译器；
3. 通过导出环境变量 export CC 或者 export CXX 来指定编译器；
4. 通过 cmake -DCMAKE_CXX_COMPILER="gcc" 指定编译器；
5. 生成脚本前可以删除配置缓存文件 CMakeCache.txt；

```sh
# Environment Variables
export CC=c:/llvm/bin/clang
export CXX=c:/llvm/bin/clang++
rm -r CMakeFiles
rm CMakeCache.txt
cmake -S. -G "Ninja" -DCMAKE_C_COMPILER='c:/llvm/bin/clang' -DCMAKE_CXX_COMPILER='c:/llvm/bin/clang++'
```

定义项目时，可以指定项目支持的语言，如 C、CXX、Fortran 等。默认情况下，如果没有提供语言选项，
则启用 C 和 CXX。指定“无语言”，或使用“语言”关键字并列出任何语言，以跳过启用任何语言。

也可以根据 vcpkg 等依赖包管理工具提供的配置脚本来决定所使用的编译器：

    -DCMAKE_TOOLCHAIN_FILE=C:/vcpkg/scripts/buildsystems/vcpkg.cmake

在使用 Ninja 生成器的项目上使用 MSVC 编译器可能会导致 CMake 的 simple test program 
测试程序编译失败：Detecting C compiler ABI info - failed。

CMake 会通过编译一段测试程序对编译器进行 ABI 信息测试，期间可能会收到以下错误信息。所谓 ABI，
是指应用程序二进制接口（Application Binary Interface, ABI）。

    > cmake -H. -B_build -DCMAKE_VERBOSE_MAKEFILE=ON
    >cmake -H. -S. -Bbuild -DCMAKE_VERBOSE_MAKEFILE=ON -G "Sublime Text 2 - Ninja"
    -- The C compiler identification is GNU 10.2.0
    -- The CXX compiler identification is MSVC 19.26.28806.0
    -- Detecting C compiler ABI info
    -- Detecting C compiler ABI info - done
    -- Check for working C compiler: C:/mingw/bin/cc.exe - skipped
    -- Detecting C compile features
    -- Detecting C compile features - done
    -- Detecting CXX compiler ABI info
    -- Detecting CXX compiler ABI info - failed
    -- Check for working CXX compiler: MSVC/14.26.28801/bin/Hostx64/x64/cl.exe
    -- Check for working CXX compiler: MSVC/14.26.28801/bin/Hostx64/x64/cl.exe - broken
    CMake Error at C:/CMake/share/cmake-3.18/Modules/CMakeTestCXXCompiler.cmake:59 (message):
      The C++ compiler

        "MSVC/14.26.28801/bin/Hostx64/x64/cl.exe"

      is not able to compile a simple test program.

      It fails with the following output:
      ...
        LINK : fatal error LNK1104: 无法打开文件“kernel32.lib”
        LINK : fatal error LNK1104: 无法打开文件“LIBCMT.lib”
          'pwsh.exe' 不是内部或外部命令，也不是可运行的程序


查看错误信息文件提供的内容，了解的问题原因，可能是没有调用 MSVC 环境变量初始化脚本导致库文件
不能正确定位，也有可能是 vcpkg 需要使用 PowerShell 但不能在环境变量中搜索到它。只需要将 vcpkg 
自动下载好的 PowerShell 路径设置好即可：

    C:\vcpkg\downloads\tools\powershell-core-7.2.1-windows

这里使用了生成器，会为 Ninja 脚本默认设置 GCC 编译器，可以看到检测结果中显示指定了 MSVC C++ 
编译器，需要根据测试出现的错误信息来解决问题。找不到符号或库文件，通常有可能是库文件目录配置引起。

执行脚本前，先执行 MSVC 环境配置批处理脚本，根据需要设置平台类型，如 x86 或 x64，然后再执行
CMake -G 生成构建脚本：

    > "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat" x86
    > cmake .. -G "Sublime Text 2 - Ninja"

虽然可以在 CMake 脚本中调用批处理文件，但是环境变量设置并不能返回供 CMake 后续使用：

    execute_process(COMMAND "vcvars64.bat" "x64")

在 CMAKE 中指定 C/C++ 使用的标准，可以直接设置编译器变量，或针对某个 target 设置属性：

    set(CMAKE_C_STANDARD 99)
    set(CMAKE_C_STANDARD_REQUIRED True)
    set(CMAKE_C_FLAGS "-std=c99 -ffunction-sections -fdata-sections")

    add_executable(demoApp demo.c)
    set_property(TARGET demoApp PROPERTY C_STANDARD 99)

变量说明：

- *CXX_STANDARD* 会设置想要的 C++ 标准，98/11/14/17/20。
- *CXX_EXTENSIONS* 告诉 CMake，是否只启用 ISO C++ 标准的编译器标志，OFF 不使用特定编译器的扩展。
- *CXX_STANDARD_REQUIRED* 如只使用所选标准的版本没有找到，CMake 将停止配置并出现错误，设置为 OFF 会降级顺序查找可用版本。

使用 C++ 11 标准，可以通过不同方式设置：

    # 设置C++标准为 C++ 11
    set(CMAKE_CXX_STANDARD 11)

    # 检查c++编译器标志，设置c++11支持变量
    include(CheckCXXCompilerFlag)
    CHECK_CXX_COMPILER_FLAG("-std=c++11" COMPILER_SUPPORTS_CXX11)
    CHECK_CXX_COMPILER_FLAG("-std=c++0x" COMPILER_SUPPORTS_CXX0X)

    # 使用变量设置编译标志
    if(COMPILER_SUPPORTS_CXX11)
        set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")
    elseif(COMPILER_SUPPORTS_CXX0X)
        set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++0x")
    else()
        message(STATUS "The compiler ${CMAKE_CXX_COMPILER} has no C++11 support. Please use a different C++ compiler.")
    endif()

注意，一定要写在 project 指令之前，否则无效，并且会在生成的脚本中固定。

CMake 提供 --system-information 来查询当前系统的所有信息，要查看这个信息，请尝试以下操作：

    $ cmake --system-information information.txt

输出文件中可以看到 CMAKE_CXX_COMPILER、CMAKE_C_COMPILER 和 CMAKE_Fortran_COMPILER
的默认值，以及默认标志。

CMake 提供了额外的变量来与编译器交互：

1. - `CMAKE_<LANG>_COMPILER_LOADED`: 如果为项目启用相应的语言，则将设置为 TRUE。
2. - `CMAKE_<LANG>_COMPILER_ID`: 编译器标识字符串，编译器供应商所特有。例如，GCC 编译器
    集合的 ID 就是 GNU。AppleClang 用于 macOS 上的 Clang，还有 MSVC 编译器。
    注意，不能保证为所有编译器或语言定义此变量。
3. - `CMAKE_COMPILER_IS_GNU<LANG>`: 如果语言是 GNU 编译器集合的一部分，则将此逻辑变量
    设置为 TRUE。注意变量名的 LANG 部分遵循 GNU 约定：C 语言为 CC, C++ 语言为 CXX, 
    Fortran 语言为 G77。
4. - `CMAKE_<LANG>_COMPILER_VERSION`: 此变量包含一个字符串，该字符串给定语言的编译器版本。
    版本信息在 major[.minor[.patch[.tweak]]] 中给出。

下面的示例 CMakeLists.txt 可以显示编译器相关信息：

    cmake_minimum_required(VERSION 3.5 FATAL_ERROR)
    project(recipe-06 LANGUAGES C CXX)
    message(STATUS "Is the C++ compiler loaded? ${CMAKE_CXX_COMPILER_LOADED}")
    if(CMAKE_CXX_COMPILER_LOADED)
        message(STATUS "The C++ compiler ID is: ${CMAKE_CXX_COMPILER_ID}")
        message(STATUS "Is the C++ from GNU? ${CMAKE_COMPILER_IS_GNUCXX}")
        message(STATUS "The C++ compiler version is: ${CMAKE_CXX_COMPILER_VERSION}")
    endif()
    message(STATUS "Is the C compiler loaded? ${CMAKE_C_COMPILER_LOADED}")
    if(CMAKE_C_COMPILER_LOADED)
        message(STATUS "The C compiler ID is: ${CMAKE_C_COMPILER_ID}")
        message(STATUS "Is the C from GNU? ${CMAKE_COMPILER_IS_GNUCC}")
        message(STATUS "The C compiler version is: ${CMAKE_C_COMPILER_VERSION}")
    endif()

CMake 交叉编译的配置，以 Linux 交叉编译工具链为例，典型的配置如下：

    set(CMAKE_SYSTEM_NAME Linux)
    set(CMAKE_SYSTEM_PROCESSOR arm)

    set(CMAKE_SYSROOT /home/devel/rasp-pi-rootfs)
    set(CMAKE_STAGING_PREFIX /home/devel/stage)

    set(tools /home/devel/gcc-4.7-linaro-rpi-gnueabihf)
    set(CMAKE_C_COMPILER ${tools}/bin/arm-linux-gnueabihf-gcc)
    set(CMAKE_CXX_COMPILER ${tools}/bin/arm-linux-gnueabihf-g++)

    set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
    set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
    set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)
    set(CMAKE_FIND_ROOT_PATH_MODE_PACKAGE ONLY)

相关变量说明：

- `CMAKE_SYSTEM_NAME` 配置 target platform，即编译生成的程序会在此系统平台上执行。
- `CMAKE_SYSTEM_PROCESSOR` 配置 target architecture 编译生成的程序会在此 CPU 架构上运行。
- `CMAKE_SYSROOT` 系统根目录，可选项。
- `CMAKE_STAGING_PREFIX` 指定主机上安装路径，可选项。注意 CMAKE_INSTALL_PREFIX 总是运行时的安装路径前缀，即使在交叉编译。
- `CMAKE_<LANG>_COMPILER` 设置编译器完整路径，或者可以通过环境变量 PATH 搜索到的编译器命令。

如果 CMake 没有从编译器中提取足够的信息，则可以使用 CMakeForceCompiler 模块绕过某些检查。

Cross Compiling using Clang：

    set(CMAKE_SYSTEM_NAME Linux)
    set(CMAKE_SYSTEM_PROCESSOR arm)

    set(triple arm-linux-gnueabihf)

    set(CMAKE_C_COMPILER clang)
    set(CMAKE_C_COMPILER_TARGET ${triple})
    set(CMAKE_CXX_COMPILER clang++)
    set(CMAKE_CXX_COMPILER_TARGET ${triple})

类似地，一些编译器不提供自己的补充实用程序（如链接器），而是提供一种方法来指定编译器驱动程序要
用到的外部工具链位置。可以在工具链文件中设置 `CMAKE_<LANG>_COMPILER_EXTERNAL_TOOLCHAIN` 
变量，以将路径传递给编译器驱动程序。


## 🐤🐥 Cmake Build Type

CMake 可以配置构建类型，例如：Debug、Release 等，并且可以通过以下变量为编译器设置相关的选项或属性：

    $ cmake .. -G"Visual Studio 12 2017 Win64" -D CMAKE_CONFIGURATION_TYPES="Release;Debug"
    $ cmake -H. -Bbuild -DCMAKE_BUILD_TYPE Release
    $ cmake --build . --config Release
    $ cmake --install . --prefix /prefix/path/to/install

控制生成构建系统使用的配置变量是 CMAKE_BUILD_TYPE，默认值为空，CMake 识别的值为:

- *Debug*：用于在没有优化的情况下，使用带有调试符号构建库或可执行文件。
- *Release*：用于构建的优化的库或可执行文件，不包含调试符号。
- *RelWithDebInfo*：用于构建较少的优化库或可执行文件，包含调试符号。
- *MinSizeRel*：用于不增加目标代码大小的优化方式，来构建库或可执行文件。

有多个配置的属性变量，命名规则是 `SOME_VAR_<CONFIG>`，比如 `CMAKE_C_FLAGS_<CONFIG>` 为 C 语言编译器配置指定参数，还有 `CMAKE_CXX_FLAGS_<CONFIG>`，编译配置使用大写字母，如 CMAKE_CXX_FLAGS_[DEBUG|RELEASE|RELWITHDEBINFO|MINSIZEREL]。

示例中，展示如何为项目设置 Release 构建类型，并打印 CMake 设置的相应编译标志：

    cmake_minimum_required(VERSION 3.5 FATAL_ERROR)
    project(recipe-07 LANGUAGES C CXX)

    if(NOT CMAKE_BUILD_TYPE)
        set(CMAKE_BUILD_TYPE Release CACHE STRING "Build type" FORCE)
    endif()
    message(STATUS "Build type: ${CMAKE_BUILD_TYPE}")

    message(STATUS "C flags, Debug configuration: ${CMAKE_C_FLAGS_DEBUG}")
    message(STATUS "C flags, Release configuration: ${CMAKE_C_FLAGS_RELEASE}")
    message(STATUS "C flags, Release configuration with Debug info: ${CMAKE_C_FLAGS_RELWITHDEBINFO}")
    message(STATUS "C flags, minimal Release configuration: ${CMAKE_C_FLAGS_MINSIZEREL}")
    message(STATUS "C++ flags, Debug configuration: ${CMAKE_CXX_FLAGS_DEBUG}")
    message(STATUS "C++ flags, Release configuration: ${CMAKE_CXX_FLAGS_RELEASE}")
    message(STATUS "C++ flags, Release configuration with Debug info: ${CMAKE_CXX_FLAGS_RELWITHDEBINFO}")
    message(STATUS "C++ flags, minimal Release configuration: ${CMAKE_CXX_FLAGS_MINSIZEREL}")

要注意的是，CMAKE_BUILD_TYPE 变量被设置为缓存变量，可以通过缓存进行编辑。


一般编译方式有 Debug 和 Release 两种，当然还可以指定其它的构建类型。

```sh
SET(CMAKE_CXX_FLAGS_DEBUG "/nologo /MDd /W3 /ZI /FD /Od /DEBUG /D WIN32 /D _DEBUG /D _WINDOWS /D _MBCS /D _AFXDLL /Fp\"demo_d.pch\"")
SET(CMAKE_CXX_FLAGS_RELEASE "/Ox /MD /W3 /O2 /D WIN32 /D NDEBUG /D _WINDOWS /D _AFXDLL /D _MBCS /Zi /D NDEBUG /Fp\"demo.pch\"")
set(CMAKE_DEBUG_POSTFIX "_d") 
set(CMAKE_RELEASE_POSTFIX "_r") 

# set (CMAKE_BUILD_TYPE "Release")

if(CMAKE_BUILD_TYPE MATCHES "Debug")
    message(STATUS "CMAKE_BUILD_TYPE => ${CMAKE_BUILD_TYPE}")
    set(CMAKE_EXE_LINKER_FLAGS "/subsystem:windows /machine:x64 /out:../bin/demod.exe")
elseif(CMAKE_BUILD_TYPE MATCHES "Release")
    message(STATUS "CMAKE_BUILD_TYPE -> ${CMAKE_BUILD_TYPE}")
    set(CMAKE_EXE_LINKER_FLAGS "/subsystem:windows /incremental:no /pdb:demo.pdb /machine:x64 /out:../bin/demo.exe")
endif(CMAKE_BUILD_TYPE MATCHES "Debug")

# set(EXECUTABLE_OUTPUT_PATH "../bin")
# set(LIBRARY_OUTPUT_PATH "${PROJECT_SOURCE_DIR}/lib")
```


方式一：显示指定

    mkdir Release  
    cd Release  
    cmake -DCMAKE_BUILD_TYPE=Release ..  
    make  

或者

    mkdir Debug  
    cd Debug  
    cmake -DCMAKE_BUILD_TYPE=Debug ..  
    make  

方式二：在CMakeLists.txt中设置

    SET(CMAKE_BUILD_TYPE "Debug”)
    SET(CMAKE_BUILD_TYPE "Release")


## 🐤🐥 Build System
- https://cmake.org/cmake/help/v3.5/manual/cmake-buildsystem.7.html
- https://cmake.org/cmake/help/latest/command/project.html
- https://cmake.org/cmake/help/latest/manual/cmake-commands.7.html
- https://cmake.org/cmake/help/latest/command/target_link_libraries.html

每个 CMake 工程都可以通过 project 命令指定名称，并指定所使用的语言，当然后这是可选的，CMake 
也可能自动探测：

    project(<PROJECT-NAME> [<language-name>...])
    project(<PROJECT-NAME>
            [VERSION <major>[.<minor>[.<patch>[.<tweak>]]]]
            [DESCRIPTION <project-description-string>]
            [HOMEPAGE_URL <url-string>]
            [LANGUAGES <language-name>...])

每个 CMake 工程可以包含多个按目录层级组织的 CMakeLists.txt 脚本，可以通过 add_subdirectory 
命令包含引用。这个命令用于向当前工程添加存放脚本源文件的子目录，并可以指定中间二进制和目标二进制
存放的位置。EXCLUDE_FROM_ALL 参数的含义是将这个目录从编译过程中排除，可能就需要工程构建完成后，
再进入子目录单独进行构建。当然，你也可以通过定义依赖来解决此类问题。

    subdirs(dir1 dir2...) # Deprecated since version 3.0
    add_subdirectory(source_dir [binary_dir] [EXCLUDE_FROM_ALL])

不论是 subdirs 还是 add_subdirectory 命令是否指定编译输出目录，我们都可以通过 SET 指令
重新定义 `EXECUTABLE_OUTPUT_PATH` 和 `LIBRARY_OUTPUT_PATH` 变量来指定最终的目标
二进制的位置：

    set(EXECUTABLE_OUTPUT_PATH ${PROJECT_BINARY_DIR}/bin)
    set(LIBRARY_OUTPUT_PATH ${PROJECT_BINARY_DIR}/lib)

每个构建脚本都奔构建目标来的，CMake 的目标 Target 是一个抽象，对应生成可执行文件或是类库，
也可以是自定义的。如果是类库，那么可以指定静态 STATIC 或动态 SHARED 等：

    add_library(archive archive.cpp zip.cpp lzma.cpp)

    add_library(archive SHARED archive.cpp zip.cpp lzma.cpp)
    add_library(archive STATIC archive.cpp zip.cpp lzma.cpp)
    add_library(archive OBJECT archive.cpp zip.cpp lzma.cpp)

    add_executable(zipapp zipapp.cpp)
    target_link_libraries(zipapp archive)

脚本中的程序可以通过 target_link_libraries 依赖 add_library 定义的库，CMake 会按依赖
关系的先后进行编译。

当一个编译目标需要依赖多个源文件时，有多种方法，一个个文件罗列是最原始的：

    source_group(<name> [FILES <src>...] [REGULAR_EXPRESSION <regex>])
    source_group(TREE <root> [PREFIX <prefix>] [FILES <src>...])

    FILE (GLOB ALL_SOURCES "*.cpp" "*.c" "./AFolder/*.cpp" )
    FILE (GLOB ALL_INCLUDES "*.hpp" "*.h" "./AFolder/*.hpp"  "./AFolder/*.h" )

    SET (ALL_SRCS 
         ${ALL_SOURCES}
         ${ALL_INCLUDES}
    )

    # 查找当前目录下的所有源文件将名称保存到 ALL_SRCS 变量
    aux_source_directory(. ALL_SRCS)
    add_executable(Demo ${ALL_SRCS})

注意 aux_source_directory 会叠加每次执行时发现的文件，列如在多目录的循环处理：

    macro(add_demo name)
        add_executable( ${name} ${ARGN} )
        target_link_libraries( ${name} ${OpenGL_LIBS} )
    endmacro(add_demo)

    message(STATUS)
    message("DEMOS LIST:")
    message(STATUS)
    FILE(GLOB tutorials "tutorial*")
    foreach(item ${tutorials})
        string(REGEX REPLACE ".*/\(.*\)" "\\1" name ${item})
        message(STATUS ${name})
        FILE(GLOB src "${item}/*.cpp")
        # aux_source_directory(${item} ${name})
        add_demo(${name} ${src})
    endforeach(item)

以下类似的命令用于指定链接过程使用的依赖共享库的链接，即通过导入库 `.lib` 链接到动态链接库：

    link_libraries([item1 [item2 [...]]]
                   [[debug|optimized|general] <item>] ...)

    target_link_libraries(<target> ... <item>... ...)
    target_link_libraries(<target>
                          <PRIVATE|PUBLIC|INTERFACE> <item>...
                         [<PRIVATE|PUBLIC|INTERFACE> <item>...]...)

要给 target 设置要链接的库，必需在 add_executable() 或 add_library() 之前设置。指定的
target 必需是工程内通过 add_library() 定义的库，或者是 IMPORTED 库。 

使用 PUBLIC, PRIVATE 和 INTERFACE 关键字可以在一条命令中指定链接依赖和链接接口，在 
PUBLIC 指定的链接库或目标会成为链接接口的一部分，而 PRIVATE 后指定的链接或目标则不会。
在 INTERFACE 后指定的库会添加到链接接口，但不会用于连接 `<target>`。

类似地，target 前缀的命令表示只为指定的编译目标提供链接库，而且这个目标要已经使用 
`add_executable()` 或 `add_library()` 定义。

    add_executable(<name> [WIN32] [MACOSX_BUNDLE]
                   [EXCLUDE_FROM_ALL]
                   [source1] [source2 ...])

    add_library(<name> [STATIC | SHARED | MODULE]
                [EXCLUDE_FROM_ALL]
                [source1] [source2 ...])

添加库目标或可执行程序时，可以指定 IMPORTED，即工程外部的库或程序，这样不会产生一个 
target rule 目标规则。

生成共享库的 add_library 命令格式如下：

- SHARED 动态库(扩展名为.so)
- STATIC 静态库(扩展名为.a)
- MODULE 在使用 dyld 的系统有效，如果不支持 dyld，则被当作 SHARED 对待。
- EXCLUDE_FROM_ALL 参数的意思是这个库不会被默认构建，除非有其他的组件依赖或者手工构建。

共享库和静态库是两种常见的库类型，而 MODULE 库通常是一些插件，运行时候使用 dlopen-like 
功能进行动态加载。通常不进行链接，不作为 target_link_libraries() 命令的右侧参数使用。

如果一个库不导出任何未托管符号，如 Windows 资源 DLL, C++/CLI DLL 等，就不能是动态共享库，
因为共享库目的就是导出符号供客户使用。

使用全局标志变量 BUILD_SHARED_LIBS 也可以影响 CMake 构建库的行为，设置为 ON 时就会构建共享库：

    option(BUILD_SHARED_LIBS "Build shared libraries" ON)


CMake 会根据的生成库的设置，为编译链接程序提供和种链接方式：

    set(CMAKE_EXE_LINKER_FLAGS "-static")

| 连接方式 |                连接选项               |                       优缺点                       |
|----------|---------------------------------------|----------------------------------------------------|
| 全静态   | -static -pthread -lrt -ldl            | 生成的文件比较大，没有运行依赖。                   |
| 全动态   | -pthread -lrt -ldl                    | 生成文件最小，并且可能有依赖不兼容问题。           |
| 半静态   | -static-libgcc -L. -pthread -lrt -ldl | 灵活度大，结合了全静态与全动态两种链接方式的优点。 |

通常，编译一个目标会需要以下属性设置：

- *INCLUDE_DIRECTORIES* 包含头文件目录列表，供预处理程序搜索头文件，在编译器命令以 -I 或 -isystem 这样的参数引用；
- *LINK_DIRECTORIES* 属性包含目录列表，包含链接阶段使用的共享库、模块等；
- *COMPILE_DEFINITIONS* 编译器宏符号定义，会以编译命令的 -D 或 /D 这样的参数定义；
- *COMPILE_OPTIONS* 单独转义处理供 shell 使用，并按属性值中的出现顺序添加；

使用 target_compile_definitions 命令设置编译器符号定义，可以使用生成器表达式语法 `$<...>`：

    target_compile_definitions(<target>
      <INTERFACE|PUBLIC|PRIVATE> [items1...]
      [<INTERFACE|PUBLIC|PRIVATE> [items2...] ...])

    target_compile_definitions(foo PUBLIC FOO)
    target_compile_definitions(foo PUBLIC FOO=1)
    # Note that many compilers treat -DFOO as equivalent to -DFOO=1

    target_compile_definitions(foo PUBLIC -DFOO)  # -D removed
    target_compile_definitions(foo PUBLIC "" FOO) # "" ignored
    target_compile_definitions(foo PUBLIC -D FOO) # -D becomes "", then ignored

库属性还有一类称为 Usage Requirements 用法需求的属性，只是前缀了 INTERFACE，如下：

- INTERFACE_INCLUDE_DIRECTORIES
- INTERFACE_COMPILE_DEFINITIONS
- INTERFACE_COMPILE_OPTIONS

库的使用者必需正确地使用它们进行编译并链接，每个在 target_link_libraries() 命令指定目标
都需要处理这些用法需求内容。

以下脚本中，指定了 PRIVATE BUILDING_WITH_LZMA，因此不会成为链接接口的一部分，也就不会
添加到 INTERFACE_COMPILE_DEFINITIONS 列表中。

    set(srcs archive.cpp zip.cpp)
    if (LZMA_FOUND)
      list(APPEND srcs lzma.cpp)
    endif()
    add_library(archive SHARED ${srcs})
    if (LZMA_FOUND)
      # The archive library sources are compiled with -DBUILDING_WITH_LZMA
      target_compile_definitions(archive PRIVATE BUILDING_WITH_LZMA)
    endif()
    target_compile_definitions(archive INTERFACE USING_ARCHIVE_LIB)

    add_executable(consumer)
    # Link consumer to archive and consume its usage requirements. The consumer
    # executable sources are compiled with -DUSING_ARCHIVE_LIB.
    target_link_libraries(consumer archive)

接口库 Interface Libraries 是一种特殊的库形式，像 Eigen 数学库，它只提供头文件，不用进行
源代码编译，不产生库文件，也没库目录位置。

从 CMake 3.19 开始，INTERFACE library 目标可选地包含源代码，包含源文件的接口库将作为生成
的构建系统中的目标。它不编译源代码，但可能包含用于生成其他源代码的自定义命令。此外，IDE 将显示
源文件作为交互式阅读和编辑目标的一部分。

只提供头文件的接口库 INTERFACE libraries 示范：

    set(Eigen_headers
      src/eigen.h
      src/vector.h
      src/matrix.h
      )
    add_library(Eigen INTERFACE ${Eigen_headers})
    target_include_directories(Eigen INTERFACE
      $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/src>
      $<INSTALL_INTERFACE:include/Eigen>
    )

    add_executable(exe1 exe1.cpp)
    target_link_libraries(exe1 Eigen)

    install(TARGETS Eigen EXPORT eigenExport)
    install(EXPORT eigenExport NAMESPACE Upstream::
      DESTINATION lib/cmake/Eigen
    )
    install(FILES ${Eigen_headers}
      DESTINATION include/Eigen
    )

include_directories 和 target_include_directories() 都可以为编译的目标提供头文件目录，
但推荐使用后者，它可以指定具体的目标，`add_executable()` 或 `add_library()` 定义的目标：

    include_directories([AFTER|BEFORE] [SYSTEM] dir1 [dir2 ...])

    target_include_directories(<target> [SYSTEM] [BEFORE]
      <INTERFACE|PUBLIC|PRIVATE> [items1...]
      [<INTERFACE|PUBLIC|PRIVATE> [items2...] ...])

    target_include_directories(mylib PUBLIC
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include/mylib>
        $<INSTALL_INTERFACE:include/mylib>  # <prefix>/include/mylib
    )

这个命令会将设置的目录赋值给 INCLUDE_DIRECTORIES 列表，也可以使用 set_property() 命令来
设置属性。

还有两条和链接库目录有关的命令：

    link_directories([AFTER|BEFORE] directory1 [directory2 ...])

    target_link_directories(<target> [BEFORE]
      <INTERFACE|PUBLIC|PRIVATE> [items1...]
      [<INTERFACE|PUBLIC|PRIVATE> [items2...] ...])

两者的差别就在于 target_link_directories 只为指定的编译目标提供链接库目录，供链接程序查找
依赖文件。

来看看 set_property、get_property 两个命令的使用格式：

    set_property(<GLOBAL                      |
                  DIRECTORY [<dir>]           |
                  TARGET    [<target1> ...]   |
                  SOURCE    [<src1> ...]
                            [<TARGET_DIRECTORY ... | DIRECTORY ...>]   |
                  INSTALL   [<file1> ...]     |
                  TEST      [<test1> ...]     |
                  CACHE     [<entry1> ...]    >
                 [APPEND] [APPEND_STRING]
                 PROPERTY <name> [value1 ...])

    get_property(<variable>
                 <GLOBAL             |
                  DIRECTORY [<dir>]  |
                  TARGET    <target> |
                  SOURCE    <source> |
                            [<TARGET_DIRECTORY ... | DIRECTORY ...>]   |
                  INSTALL   <file>   |
                  TEST      <test>   |
                  CACHE     <entry>  |
                  VARIABLE           >
                 PROPERTY <name>
                 [SET | DEFINED | BRIEF_DOCS | FULL_DOCS])

这是两个通用方法，可以给各种对象设置属性，例如给目标对象设置属性，以下分别展示了读写 
INCLUDE_DIRECTORIES 属性的两种命令，注意属性是区分大小写的：

    set_property(TARGET ${LIB_NAME} PROPERTY 
        INCLUDE_DIRECTORIES "c:/OpenCV/include c:/Qt/include")
    set_target_properties(${LIB_NAME} PROPERTIES 
        INCLUDE_DIRECTORIES "c:/OpenCV/include c:/Qt/include")

    get_property(var TARGET ${LIB_NAME} PROPERTY INCLUDE_DIRECTORIES)
    get_target_property(var ${LIB_NAME} INCLUDE_DIRECTORIES)

    message(${var})

类似的命令有以下这些：

- get_source_file_property
- get_target_property
- get_test_property
- set_source_files_properties
- set_target_properties
- set_tests_properties

## 🐤🐥 Importing & Exporting
- https://cmake.org/cmake/help/latest/guide/importing-exporting/index.html

导入目标即标记为 *IMPORTED* 的库或可执行程序，是从逻辑上将 CMake 工程外部、保存磁盘文件的
导入到工程内部，所以 add_library() 或 add_executable() 不会产生构建文件。

以下示范导入可执行程序，并为其设置自定义命令，myexe 命令会被相应的导入目标指定的 
IMPORTED_LOCATION 路径替换：

    add_executable(myexe IMPORTED)
    set_property(TARGET myexe PROPERTY
                 IMPORTED_LOCATION "../InstallMyExe/bin/myexe")
    add_custom_command(OUTPUT main.cc COMMAND myexe)
    add_executable(mynewexe main.cc)

以下示范导入库文件并在工程内使用：

    add_library(foo STATIC IMPORTED)
    set_property(TARGET foo PROPERTY
                 IMPORTED_LOCATION "/path/to/libfoo.a")

    add_executable(myexe src1.c src2.c)
    target_link_libraries(myexe PRIVATE foo)

在 Windows 系统上，.dll 和相应的 .lib 导入库文件可以一起导入：

    add_library(bar SHARED IMPORTED)
    set_property(TARGET bar PROPERTY
                 IMPORTED_LOCATION "c:/path/to/bar.dll")
    set_property(TARGET bar PROPERTY
                 IMPORTED_IMPLIB "c:/path/to/bar.lib")
    add_executable(myexe src1.c src2.c)
    target_link_libraries(myexe PRIVATE bar)

以下示范多个配置导入一个库：

    find_library(math_REL NAMES m)
    find_library(math_DBG NAMES md)
    
    add_library(math STATIC IMPORTED GLOBAL)
    set_target_properties(math PROPERTIES
      IMPORTED_LOCATION "${math_REL}"
      IMPORTED_LOCATION_DEBUG "${math_DBG}"
      IMPORTED_CONFIGURATIONS "RELEASE;DEBUG"
    )
    add_executable(myexe src1.c src2.c)
    target_link_libraries(myexe PRIVATE math)

根据构建配置的不同，会在 RELEASE 配置中使用 m.lib，会在 DEBUG 配置中使用 md.lib 导入库。

以上是单独使用导入功能，但是只有将它与导出功能一起使用才是最方便的。

通过 install(TARGETS) 和 install(EXPORT) 命令可以在安装库目标的同时，产生用于协助
导入目标的脚本，这样编译的库会更容易被其它 CMake 工程导入使用。

假定一个数学函数库，头文件 MathFunctions.h 内容如下：

    #pragma once

    namespace MathFunctions {
    double sqrt(double x);
    }

对应代码 MathFunctions.cpp 如下：

    #include "MathFunctions.h"

    #include <cmath>

    namespace MathFunctions {
    double sqrt(double x)
    {
      return std::sqrt(x);
    }
    }

以及工具的 CMakeLists.txt 脚本内容如下，定义了一个静态函数库 MathFunctions：

    cmake_minimum_required(VERSION 3.15)
    project(MathFunctions)

    # make cache variables for install destinations
    include(GNUInstallDirs)

    # specify the C++ standard
    set(CMAKE_CXX_STANDARD 11)
    set(CMAKE_CXX_STANDARD_REQUIRED True)

    add_library(MathFunctions STATIC MathFunctions.cxx)

    target_include_directories(MathFunctions
                               PUBLIC
                               "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}>"
                               "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>"
    )

脚本包含发 GNUInstallDirs 模块，以使用各个和平台相关的路径变量。

要为其提供更好的导入导出，首先，使用 install(TARGETS) 命令安装目标的同时设置导出导出名称 
*MathFunctionsTargets* 以及目录信息：

    install(TARGETS MathFunctions
            EXPORT MathFunctionsTargets
            LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
            ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR}
            RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
            INCLUDES DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}
    )

    install(FILES MathFunctions.h DESTINATION ${CMAKE_INSTALL_INCLUDEDIR})

现在，MathFunctions 库的头文件会被安装到指定位置，接下来使用 install(EXPORT) 命令来安装
导出目标 MathFunctionsTargets 的细节：

    install(EXPORT MathFunctionsTargets
            FILE MathFunctionsTargets.cmake
            NAMESPACE MathFunctions::
            DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/MathFunctions
    )

这个命令会产生 MathFunctionsTargets.cmake 脚本，后续通过它来导入前面导出那些目标。

指定命令空间 NAMESPACE 选项，对应的内容 MathFunctions:: 会写入导出脚本中，而双冒号也
提示了 CMake 这是一个 IMPORTED 目标，后续会被其它工程导入使用。通过这种脚本编写，CMake 
可以在找不到库时给出诊断信息：

    # Create imported target MathFunctions::MathFunctions
    add_library(MathFunctions::MathFunctions STATIC IMPORTED)

    set_target_properties(MathFunctions::MathFunctions PROPERTIES
      INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
    )

以上脚本类似 Importing Libraries 操作，注意 `${_IMPORT_PREFIX}` 是计算相对文件路径。

外部工程可以通过 include() 命令来引用 MathFunctions 函数库：

     include(${INSTALL_PREFIX}/lib/cmake/MathFunctionTargets.cmake)
     add_executable(myexe src1.c src2.c )
     target_link_libraries(myexe PRIVATE MathFunctions::MathFunctions)



## 🐤🐥 Installation
- https://cmake.org/cmake/help/latest/command/install.html
- https://cmake.org/cmake/help/latest/variable/CMAKE_INSTALL_PREFIX.html

安装命令 install()  用于将文件或编译的目标复制到指定位置。指定在安装时运行的规则，可以用来安装
多种类型内容，可以包括目标二进制、动态库、静态库以及文件、目录结构、脚本等。

比如，将目标 Tutorial 拷贝到 DESTINATION 指定的 bin 目录：

    install(TARGETS Tutorial DESTINATION bin)

安装命令会在构建目录下产生 cmake_install.cmake 脚本，所有安装命令产生的脚本内容都会保存到
此文件，供 CMake 的 CPack 工具使用。也可以使用 *cmake -P file* 手动调用脚本，此脚本接受
多个变量：

- *COMPONENT* 设置此变量以安装单一的 CPack 组件，否则是完全安装。
- *BUILD_TYPE*  设置构建配置类型，如 Release/Debug 这两种常用的构建配置类型。
- *DESTDIR* 这是一个环境变量，而不是 CMake 变量，用来在 UNIX 系统上改变安装路径前缀。

比如：

    cmake -DCOMPONENT=Development -P cmake_install.cmake
    cmake -DBUILD_TYPE=Debug -P cmake_install.cmake

生成库文件或可以执行文件后，就可以执行安装命令来触发安装过程，install() 相关脚本就会执行。

    cmake --install <dir>
    make install

CMake --install 命令行参考：

    Usage: cmake --install <dir> [options]
    Options:
      <dir>              = Project binary directory to install.
      --config <cfg>     = For multi-configuration tools, choose <cfg>.
      --component <comp> = Component-based install. Only install <comp>.
      --prefix <prefix>  = The installation prefix CMAKE_INSTALL_PREFIX.
      --strip            = Performing install/strip.
      -v --verbose       = Enable verbose output.

INSTALL 有一个非常有用的变量 CMAKE_INSTALL_PREFIX，用来设置安装路径的前缀，作为类似于
configure 脚本的 –prefix 参数。可以在运行 cmake 命令时指定一个路径前缀：

    cmake .. -DCMAKE_INSTALL_PREFIX=/opt/the/prefix
    cmake --install . --prefix "/home/my/install/dir"

    cmake --build .\build_gcc --config Debug
    cmake --install .\build_gcc --config Debug

先指定生成的 cmake_install.cmake 脚本文件所在目录，然后通过参数 --config 指定编译的配置。

命令语法参考：

    # Synopsis
    install(TARGETS <target>... [...])
    install(IMPORTED_RUNTIME_ARTIFACTS <target>... [...])
    install({FILES | PROGRAMS} <file>... [...])
    install(DIRECTORY <dir>... [...])
    install(SCRIPT <file> [...])
    install(CODE <code> [...])
    install(EXPORT <export-name> [...])
    install(RUNTIME_DEPENDENCY_SET <set-name> [...])

    # Installing Targets
    install(TARGETS targets... [EXPORT <export-name>]
            [[ARCHIVE|LIBRARY|RUNTIME|OBJECTS|FRAMEWORK|BUNDLE|
              PRIVATE_HEADER|PUBLIC_HEADER|RESOURCE]
             [DESTINATION <dir>]
             [PERMISSIONS permissions...]
             [CONFIGURATIONS [Debug|Release|...]]
             [COMPONENT <component>]
             [NAMELINK_COMPONENT <component>]
             [OPTIONAL] [EXCLUDE_FROM_ALL]
             [NAMELINK_ONLY|NAMELINK_SKIP]
            ] [...]
            [INCLUDES DESTINATION [<dir> ...]]
            )
    
    # Installing Files
    install(<FILES|PROGRAMS> files...
            TYPE <type> | DESTINATION <dir>
            [PERMISSIONS permissions...]
            [CONFIGURATIONS [Debug|Release|...]]
            [COMPONENT <component>]
            [RENAME <name>] [OPTIONAL] [EXCLUDE_FROM_ALL])

    # Installing Directories
    install(DIRECTORY dirs...
            TYPE <type> | DESTINATION <dir>
            [FILE_PERMISSIONS permissions...]
            [DIRECTORY_PERMISSIONS permissions...]
            [USE_SOURCE_PERMISSIONS] [OPTIONAL] [MESSAGE_NEVER]
            [CONFIGURATIONS [Debug|Release|...]]
            [COMPONENT <component>] [EXCLUDE_FROM_ALL]
            [FILES_MATCHING]
            [[PATTERN <pattern> | REGEX <regex>]
             [EXCLUDE] [PERMISSIONS permissions...]] [...])

    # Custom Installation Logic
    install([[SCRIPT <file>] [CODE <code>]]
            [ALL_COMPONENTS | COMPONENT <component>]
            [EXCLUDE_FROM_ALL] [...])

    # Installing Exports
    install(EXPORT <export-name> DESTINATION <dir>
            [NAMESPACE <namespace>] [[FILE <name>.cmake]|
            [PERMISSIONS permissions...]
            [CONFIGURATIONS [Debug|Release|...]]
            [EXPORT_LINK_INTERFACE_LIBRARIES]
            [COMPONENT <component>]
            [EXCLUDE_FROM_ALL])
    install(EXPORT_ANDROID_MK <export-name> DESTINATION <dir> [...])

安装库目标会使用到的 GNUInstallDirs 路径变量及其关联的路径：

|  Target Type   |   GNUInstallDirs Variable   | Built-In Default |
|----------------|-----------------------------|------------------|
| ARCHIVE        | ${CMAKE_INSTALL_LIBDIR}     | lib              |
| LIBRARY        | ${CMAKE_INSTALL_LIBDIR}     | lib              |
| RUNTIME        | ${CMAKE_INSTALL_BINDIR}     | bin              |
| PRIVATE_HEADER | ${CMAKE_INSTALL_INCLUDEDIR} | include          |
| PUBLIC_HEADER  | ${CMAKE_INSTALL_INCLUDEDIR} | include          |

对于共享库、静态库和可执行程序，MACOSX_BUNDLE 除外，可以省略目的路径，默认会安装到 CMAKE_INSTALL_BINDIR 指定的目录，可以使用 CMAKE_INSTALL_PREFIX 改变目录地址前缀。

库目标安装示范：

    add_library(mylib STATIC ...)
    set_target_properties(mylib PROPERTIES PUBLIC_HEADER mylib.h)
    include(GNUInstallDirs)
    install(TARGETS mylib
            PUBLIC_HEADER
              DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}/myproj
    )

安装文件或目录指定类型及关联的 GNUInstallDirs 路径变量：

| TYPE Argument |    GNUInstallDirs Variable     |    Built-In Default   |
|---------------|--------------------------------|-----------------------|
| BIN           | ${CMAKE_INSTALL_BINDIR}        | bin                   |
| SBIN          | ${CMAKE_INSTALL_SBINDIR}       | sbin                  |
| LIB           | ${CMAKE_INSTALL_LIBDIR}        | lib                   |
| INCLUDE       | ${CMAKE_INSTALL_INCLUDEDIR}    | include               |
| SYSCONF       | ${CMAKE_INSTALL_SYSCONFDIR}    | etc                   |
| SHAREDSTATE   | ${CMAKE_INSTALL_SHARESTATEDIR} | com                   |
| LOCALSTATE    | ${CMAKE_INSTALL_LOCALSTATEDIR} | var                   |
| RUNSTATE      | ${CMAKE_INSTALL_RUNSTATEDIR}   | <LOCALSTATE dir>/run  |
| DATA          | ${CMAKE_INSTALL_DATADIR}       | <DATAROOT dir>        |
| INFO          | ${CMAKE_INSTALL_INFODIR}       | <DATAROOT dir>/info   |
| LOCALE        | ${CMAKE_INSTALL_LOCALEDIR}     | <DATAROOT dir>/locale |
| MAN           | ${CMAKE_INSTALL_MANDIR}        | <DATAROOT dir>/man    |
| DOC           | ${CMAKE_INSTALL_DOCDIR}        | <DATAROOT dir>/doc    |

示例，将头文件及目录结构提取到指定目录：

    install(DIRECTORY src/ DESTINATION include/myproj
            FILES_MATCHING PATTERN "*.h")

    install(DIRECTORY icons scripts/ DESTINATION share/myproj
            PATTERN "CVS" EXCLUDE
            PATTERN "scripts/*"
            PERMISSIONS OWNER_EXECUTE OWNER_WRITE OWNER_READ
                        GROUP_EXECUTE GROUP_READ)

安装好 SCRIPT 脚本代码会在 `make install` 执行安装过程中执行，如下：

    install(CODE "MESSAGE(\"Sample install message.\")")




## 🐤🐥 Find Modules: FindPackage
- https://cmake.org/cmake/help/latest/command/find_package.html
- https://cmake.org/cmake/help/latest/command/find_library.html
- https://cmake.org/cmake/help/latest/command/find_program.html
- https://cmake.org/cmake/help/latest/manual/cmake-developer.7.html#find-modules
https://cmake.org/cmake/help/latest/variable/CMAKE_PREFIX_PATH.html

如果编译软件使用了外部库，事先并不知道它的头文件和链接库的位置，CMake 为了解决依赖定位问题引入 Find Modules 功能。就是使用 `find_package` 命令来执行 `Find<PackageName>.cmake` 脚本以定位依赖库。

在 FindXxx.cmake 脚本中会定义并返回一些标准变量供客户代码使用：

- *Xxx_INCLUDE_DIRS* 头文件目录列表，参考 *find_path()* 和 Xxx_INCLUDE_DIR
- *Xxx_LIBRARIES* 此模块使用的库列表，参考 *find_library()* 和 Xxx_LIBRARY
- *Xxx_DEFINITIONS* 编译使用了此模块的代码时要使用的符号定义。比如，客户代码使用 -DHAS_JPEG 这样的命令行参数定义符号来决定是否使用 `#include <jpeg.h>`。
- *Xxx_EXECUTABLE* 可执行文件的全路径，这种情况下 Xxx 可能不是模块的名称，而是工具的名称（通常转换为全大写），参考 *find_program()* 命令。
- *Xxx_YYY_EXECUTABLE* 同上，但是这里的 Xxx 总是为模块名，而 YYY 是大写的工具名，主要用于不太广泛使用的工具以避免冲突。
- *Xxx_LIBRARY_DIRS* 库目录列表，可选项，不应缓存。
- *Xxx_ROOT_DIR* 此模块的根目录。
- *Xxx_VERSION_VV* 指示此模块是否提供 VV 相应的版本，此类变量不应该设置多个，如 Barry_VERSION_3 & Barry_VERSION_2 同时设置为错误做法。
- *Xxx_WRAP_YY* 指标不应该使用相关的包装命令，它可能由模块名称暗示，也可能由变量的 YY 部分指定。
- *Xxx_Yy_FOUND* 指示 Xxx 库的 Yy 模块是否找到，设置 false 表示没有找到。
- *Xxx_FOUND* 指示 Xxx 库是否找到，find_package() 命令执行后返回值。
- *Xxx_NOT_FOUND_MESSAGE* 找不到依赖库时的提示信息，find_package() 或 find_package_handle_standard_args() 命令会在 Xxx_FOUND 设置为 FALSE 时打印。也可以使用 message() 打印消息。
- *Xxx_RUNTIME_LIBRARY_DIRS* 在链接程序到静态库时指定运行时目录，可选项，不应缓存。
- *Xxx_VERSION* 已找到的依赖库的完整版本号，注意许多模块会提供 *Xxx_VERSION_STRING* 代替。
- *Xxx_VERSION_MAJOR* 已找到的依赖库的 Major 版本号。
- *Xxx_VERSION_MINOR* 已找到的依赖库的 Minor 版本号。
- *Xxx_VERSION_PATCH* 已找到的依赖库的 Patch 版本号。

以下这些变量名应避免直接在 CMakeLists.txt 脚本中使用，用户通常能够设置和编辑这些变量以控制查找模块的行为，如手动输入库的路径：

- *Xxx_LIBRARY* 库路径，在模块只提供单一库时使用，作为 *find_library()* 命令返回变量。
- *Xxx_Yy_LIBRARY* 库提供的 Yy 模块路径，在模块提供多个库时使用，作为 *find_library()* 命令返回变量。
- *Xxx_INCLUDE_DIR* 库头文件目录，在模块只提供单一库时使用，作为 *find_path()* 命令返回变量。
- *Xxx_Yy_INCLUDE_DIR* 库头文件目录，在模块提供多个库时使用，作为 *find_path()* 命令返回变量。

相关的查找定位命令签名参考如下，在编译脚本中使用它们来获取各种依赖信息：

    # Basic Signature

    find_package(Foo [major[.minor[.patch[.tweak]]]])
    find_package(<PackageName> [version] [EXACT] [QUIET] [MODULE]
                 [REQUIRED] [[COMPONENTS] [components...]]
                 [OPTIONAL_COMPONENTS components...]
                 [NO_POLICY_SCOPE])

    find_library (<VAR> name1 [path1 path2 ...])
    find_program (<VAR> name1 [path1 path2 ...])
    find_path (<VAR> name1 [path1 path2 ...])

    # Full Signature

    find_package(<PackageName> [version] [EXACT] [QUIET]
                 [REQUIRED] [[COMPONENTS] [components...]]
                 [OPTIONAL_COMPONENTS components...]
                 [CONFIG|NO_MODULE]
                 [NO_POLICY_SCOPE]
                 [NAMES name1 [name2 ...]]
                 [CONFIGS config1 [config2 ...]]
                 [HINTS path1 [path2 ... ]]
                 [PATHS path1 [path2 ... ]]
                 [PATH_SUFFIXES suffix1 [suffix2 ...]]
                 [NO_DEFAULT_PATH]
                 [NO_PACKAGE_ROOT_PATH]
                 [NO_CMAKE_PATH]
                 [NO_CMAKE_ENVIRONMENT_PATH]
                 [NO_SYSTEM_ENVIRONMENT_PATH]
                 [NO_CMAKE_PACKAGE_REGISTRY]
                 [NO_CMAKE_BUILDS_PATH] # Deprecated; does nothing.
                 [NO_CMAKE_SYSTEM_PATH]
                 [NO_CMAKE_SYSTEM_PACKAGE_REGISTRY]
                 [CMAKE_FIND_ROOT_PATH_BOTH |
                  ONLY_CMAKE_FIND_ROOT_PATH |
                  NO_CMAKE_FIND_ROOT_PATH])

    find_library (
              <VAR>
              name | NAMES name1 [name2 ...] [NAMES_PER_DIR]
              [HINTS path1 [path2 ... ENV var]]
              [PATHS path1 [path2 ... ENV var]]
              [PATH_SUFFIXES suffix1 [suffix2 ...]]
              [DOC "cache documentation string"]
              [REQUIRED]
              [NO_DEFAULT_PATH]
              [NO_PACKAGE_ROOT_PATH]
              [NO_CMAKE_PATH]
              [NO_CMAKE_ENVIRONMENT_PATH]
              [NO_SYSTEM_ENVIRONMENT_PATH]
              [NO_CMAKE_SYSTEM_PATH]
              [CMAKE_FIND_ROOT_PATH_BOTH |
               ONLY_CMAKE_FIND_ROOT_PATH |
               NO_CMAKE_FIND_ROOT_PATH]
             )


find_package 指令有两种搜索模式：

- Module mode 根据 CMAKE_MODULE_PATH 指定的路径搜索并执行 `Find<package>.cmake` 脚本文件；只支持 Basic Signature 的 find_library 命令调用方式。
- Config mode 配置模式下 CMake 搜索并执行 `<lowercasePackageName>-config.cmake` or `<PackageName>Config.cmake`。如果指定了 [version] 版本参数，还包括 `<lowercasePackageName>-config-version.cmake` or `<PackageName>ConfigVersion.cmake`。

CMAKE_MODULE_PATH 是分号分隔的目录列表，由 include() or find_package() 命令加载使用。

CMAKE_PREFIX_PATH 类型，也是以分号分隔的列表，供 find_package(), find_program(), find_library(), find_file() 和 find_path() 等命令使用。这两个变量初始都为空，由工程设定。

    list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_LIST_DIR}/cmake")

CMake在查找模块（比如FindXXX.cmake）的时候会用到一些路径变量。CMAKE_MODULE_PATH 用来指定额外的模块路径的。比如，当项目里有一些自定义的Find脚本，或者第三方提供的CMake模块，设置这个变量可以让CMake找到它们。比如，假设我有一个项目，里面有个cmake目录，里面放了FindFoo.cmake，这时候可能需要把该目录加到CMAKE_MODULE_PATH里，这样CMake就能找到这个模块了。

然后是CMAKE_PREFIX_PATH，这个应该和依赖库安装路径有关。比如，当使用 find_package 查找库的时候，CMake 会去这个路径下寻找。比如，如果我把 Qt 安装在非标准位置，比如/home/user/qt5，那么设置 CMAKE_PREFIX_PATH 为这个路径，CMake 就能在那里找到 Qt 的配置。这个路径通常是库的安装根目录，下面有 lib、include 等子目录的结构。

不过具体来说，两者的区别在于用途。CMAKE_MODULE_PATH用于查找CMake模块，而CMAKE_PREFIX_PATH用于查找依赖库的安装前缀。比如，当使用find_package时，CMake会在CMAKE_PREFIX_PATH指定的路径下寻找对应的Config.cmake或FindXXX.cmake文件，而CMAKE_MODULE_PATH则是直接添加查找模块的路径。

如果仍然需要手动指定 CMAKE_MODULE_PATH，find_package() 有什么用？事实上确实 CMake 是方便了依赖的配置。

在命令中传入的 Components 参数可以在 Find Modules 脚本中通过 *Xxx_FIND_COMPONENTS* 变量获取，它是一个列表，可以使用 list() 命令处理。

Cmake 根据规则去以下目录搜索并尝试执行脚本，然后，客户代码可以根据 `<package>_FOUND` 变量指示来检测是否找到该软件包。

可以参考现有的工程示范，如 SFML 预编译文件中就包含 SFML-2.4.1\cmake\Modules\FindSFML.cmake。

为依赖 SFML 的客户工程编译脚本：

    # CMakeLists.txt example:
    cmake_minimum_required(VERSION 3.0.0 FATAL_ERROR)
    project(SFML_Win32)

    find_path(SFML_FRAMEWORK "SFML-2.4.1" "../../dependencies/")
    if(SFML_FRAMEWORK)
        set(SFML_ROOT "${SFML_FRAMEWORK}/SFML-2.4.1")
        message("SFML Framework 2.4.1 Found: " ${SFML_ROOT})
    else()
        message("SFML Framework 2.4.1 Not found: " ${SFML_ROOT})    
    endif()

    # set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${SFML_ROOT}/cmake/Modules/")
    list(APPEND CMAKE_MODULE_PATH "${SFML_ROOT}/cmake/Modules/")
    list(APPEND CMAKE_PREFIX_PATH "${SFML_ROOT}/cmake/Modules/")

    set(SFML_STATIC_LIBRARIES TRUE)
    find_package(SFML COMPONENTS system window audio network)
    include_directories(${SFML_INCLUDE_DIR})

    add_executable(sfml_win32 Windows.cpp)
    target_link_libraries(sfml_win32 ${SFML_LIBRARIES} opengl32 winmm)
    target_link_libraries(sfml_win32 ${SFML_DEPENDENCIES} )

    # cmake -H. -B_builds -DCMAKE_VERBOSE_MAKEFILE=ON
    # cmake --build _builds

根据客户程序使用的功能，比如，SFML 提供的示例使用了 OpenGL，就需要添加 OpenGL 库文件。如果使用静态链接，比如在 Windows 则还可能会需要 DirectX SDK。如果使用了摇杆设备 API 如 joyGetDevCapsW，可以添加 winmm.lib 依赖库，否则会有 LNK2019: 无法解析的外部符号错误。

注意，平台不同，库文件的命名规则不同，比如 find_library 查找 freetype 库文件时，在 Windows MSVC 系统下应该找 freetype.lib 文件，而如果是 Linux 系统下 GCC 会编译生成 .so 库文件，如 MinGW 编译产生的库文件就是 libfreetype.a。

这就需要使用到库文件前后缀变量设置，可以将以下脚本片断写入 FindXxx.cmake 文件中：

    option(MINGW "Using MinGW Library file name rule" ON)
    IF(MINGW)
      SET(CMAKE_FIND_LIBRARY_PREFIXES "lib" "")
      SET(CMAKE_FIND_LIBRARY_SUFFIXES ".dll" ".dll.a" ".a" ".lib")
    ENDIF(MINGW)

另外一个方法是直接在 find_library 命令中传入多个库名称，有些库还会带版本号，推荐首先使用不带版本号的名称。


如查找 OpenGL FreeGLUT 库：

    # set(FreeGLUT_DIR C:/download/OpenCV/freeglut-3.2.1/build/FreeGLUT)
    set(CMAKE_PREFIX_PATH C:/download/OpenCV/freeglut-3.2.1/build/FreeGLUT)

    find_library(libs FreeGLUT)
    find_package(FreeGLUT REQUIRED)

    if (NOT FreeGLUT_FOUND)
        message(FATAL_ERROR "FreeGLUT Not Found!")
    else(ADD_FOUND)
        message(STATUS "FreeGLUT Found!")
        message(----> ${FREEGLUT_INCLUDE_DIRS})
        message(----> ${FreeGLUT_LIBRARIES})
        message(----> ${FreeGLUT_LIBS})
    endif (NOT FreeGLUT_FOUND)

    # include_directories(${FreeGLUT_INCLUDE_DIRS})
    # add_executable(demo demo.cpp)
    # target_link_libraries(demo ${FreeGLUT_LIBRARIES})

如果没有在指定的目录找到，就会提示相关信息，一般在以下两个变量中设置包含 `FreeGLUTConfig.cmake` 或
`freeglut-config.cmake` 配置文件的目录，注意文件名的格式：

- `CMAKE_PREFIX_PATH`
- `<PackageName>_DIR` 即 `FreeGLUT_DIR`

CMake 解决项目的依赖时，会自动查找那些已知的软件通常会保存的目录路径，如果找不到再通过依赖包的  Config-file 来查找。这条命令执行后，CMake 会到变量 `CMAKE_MODULE_PATH` 指示的目录中查找文件 `Find<name>.cmake` 并执行，然后这个脚本返回以下这些变量保存目录位置：

    <NAME>_FOUND
    <NAME>_INCLUDE_DIRS or <NAME>_INCLUDES
    <NAME>_LIBRARIES or <NAME>_LIBRARIES or <NAME>_LIBS
    <NAME>_DEFINITIONS


首先明确一点，cmake 本身不提供任何搜索库的便捷方法，比如下面将要提到的 FindXXX.cmake 和 XXXConfig.cmake，库的作者通常会提供这两个文件，以方便使用者调用。

find_package 采用两种模式搜索库：

- Module 模式：搜索 CMAKE_MODULE_PATH 指定路径下的 FindXXX.cmake 文件，执行该文件，由它找到 XXX 库，并赋值给 `XXX_INCLUDE_DIRS`、`XXX_LIBRARIES` 两个变量。

- Config 模式：搜索 XXX_DIR 指定路径下的 XXXConfig.cmake 文件，执行该文件从而找到 XXX 库，并给 `XXX_INCLUDE_DIRS`、`XXX_LIBRARIES` 两个变量赋值。

两种模式看起来似乎差不多，不过 cmake 默认采取 Module 模式，如果 Module 模式未找到库，才会采取 Config 模式。如果 XXX_DIR 路径下找不到 XXXConfig.cmake 文件，则会找 /usr/local/lib/cmake/XXX/ 中的 XXXConfig.cmake 文件。总之，Config 模式是一个备选策略。通常，库安装时会拷贝一份 XXXConfig.cmake 到系统目录中，因此在没有显式指定搜索路径时也可以顺利找到。

在 CMake 安装目录下，提供了许多常用的库查找脚本，例如 FindGLEW.cmake、FindGLUT.cmake 等等。

有此依赖包使用脚本输出 XXXConfig.cmake 配置文件，例如 nlohmann/json 库，下载源代码后，就需要先执行其构建脚本生成相应的文件。
[CMake + nlohmann/json 配置](https://json.nlohmann.me/integration/cmake/)


以 Assimp 中提供的 DirectX SDK FindDirectX.cmake 为例，在主脚本 CMakeLists.txt 中添加以下命令：

    LIST(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/cmake-modules" )

    FIND_PACKAGE( DirectX )
    if (NOT DirectX_FOUND)
    message(FATAL_ERROR "DirectX Not Found!")
    else(DirectX_FOUND)
    message(STATUS "DirectX Found!")
    message(STATUS ----> ${DirectX_INCLUDE_DIR})
    message(STATUS ----> ${DirectX_LIBRARIES})
    message(STATUS ----> ${DirectX_ROOT_DIR})
    endif (NOT DirectX_FOUND)

然后，将 FindDirectX.cmake、FindPkgMacros.cmake 脚本保存到 cmake-modules 目录下，那么在执行 FIND_PACKAGE 命令时，就会调用这些脚本定位 DirectX SDK 的位置：

    #-------------------------------------------------------------------
    # This file is part of the CMake build system for OGRE
    #     (Object-oriented Graphics Rendering Engine)
    # For the latest info, see http://www.ogre3d.org/
    #
    # The contents of this file are placed in the public domain. Feel
    # free to make use of it in any way you like.
    #-------------------------------------------------------------------

    # -----------------------------------------------------------------------------
    # Find DirectX SDK
    # Define:
    # DirectX_FOUND
    # DirectX_INCLUDE_DIR
    # DirectX_LIBRARY
    # DirectX_ROOT_DIR

    if(WIN32) # The only platform it makes sense to check for DirectX SDK
      include(FindPkgMacros)
      findpkg_begin(DirectX)

      # Get path, convert backslashes as ${ENV_DXSDK_DIR}
      getenv_path(DXSDK_DIR)
      getenv_path(DIRECTX_HOME)
      getenv_path(DIRECTX_ROOT)
      getenv_path(DIRECTX_BASE)

      # construct search paths
      set(DirectX_PREFIX_PATH 
        "${DXSDK_DIR}" "${ENV_DXSDK_DIR}"
        "${DIRECTX_HOME}" "${ENV_DIRECTX_HOME}"
        "${DIRECTX_ROOT}" "${ENV_DIRECTX_ROOT}"
        "${DIRECTX_BASE}" "${ENV_DIRECTX_BASE}"
        "C:/DSDK*"
        "C:/apps_x86/Microsoft DirectX SDK*"
        "C:/Program Files (x86)/Microsoft DirectX SDK*"
        "C:/apps/Microsoft DirectX SDK*"
        "C:/Program Files/Microsoft DirectX SDK*"
        "C:/Program Files (x86)/Windows Kits/8.1"
        "$ENV{ProgramFiles}/Microsoft DirectX SDK*"
      )
      create_search_paths(DirectX)
      # redo search if prefix path changed
      clear_if_changed(DirectX_PREFIX_PATH
        DirectX_LIBRARY
        DirectX_INCLUDE_DIR
      )

      find_path(DirectX_INCLUDE_DIR NAMES d3d9.h HINTS ${DirectX_INC_SEARCH_PATH})
      # dlls are in DirectX_ROOT_DIR/Developer Runtime/x64|x86
      # lib files are in DirectX_ROOT_DIR/Lib/x64|x86
      if(CMAKE_CL_64)
        set(DirectX_LIBPATH_SUFFIX "x64")
      else(CMAKE_CL_64)
        set(DirectX_LIBPATH_SUFFIX "x86")
      endif(CMAKE_CL_64)
      find_library(DirectX_LIBRARY NAMES d3d9 HINTS ${DirectX_LIB_SEARCH_PATH} PATH_SUFFIXES ${DirectX_LIBPATH_SUFFIX})
      find_library(DirectX_D3DX9_LIBRARY NAMES d3dx9 HINTS ${DirectX_LIB_SEARCH_PATH} PATH_SUFFIXES ${DirectX_LIBPATH_SUFFIX})
      find_library(DirectX_DXERR_LIBRARY NAMES DxErr HINTS ${DirectX_LIB_SEARCH_PATH} PATH_SUFFIXES ${DirectX_LIBPATH_SUFFIX})
      find_library(DirectX_DXGUID_LIBRARY NAMES dxguid HINTS ${DirectX_LIB_SEARCH_PATH} PATH_SUFFIXES ${DirectX_LIBPATH_SUFFIX})


      # look for dxgi (needed by both 10 and 11)
      find_library(DirectX_DXGI_LIBRARY NAMES dxgi HINTS ${DirectX_LIB_SEARCH_PATH} PATH_SUFFIXES ${DirectX_LIBPATH_SUFFIX})

      # look for d3dcompiler (needed by 11)
      find_library(DirectX_D3DCOMPILER_LIBRARY NAMES d3dcompiler HINTS ${DirectX_LIB_SEARCH_PATH} PATH_SUFFIXES ${DirectX_LIBPATH_SUFFIX})

      findpkg_finish(DirectX)
      set(DirectX_LIBRARIES ${DirectX_LIBRARIES} 
        ${DirectX_D3DX9_LIBRARY}
        ${DirectX_DXERR_LIBRARY}
        ${DirectX_DXGUID_LIBRARY}
      )

      mark_as_advanced(DirectX_D3DX9_LIBRARY DirectX_DXERR_LIBRARY DirectX_DXGUID_LIBRARY
        DirectX_DXGI_LIBRARY DirectX_D3DCOMPILER_LIBRARY)


      # look for D3D11 components
      if (DirectX_FOUND)
        find_path(DirectX_D3D11_INCLUDE_DIR NAMES D3D11Shader.h HINTS ${DirectX_INC_SEARCH_PATH})
          get_filename_component(DirectX_LIBRARY_DIR "${DirectX_LIBRARY}" PATH)
          message(STATUS "DX lib dir: ${DirectX_LIBRARY_DIR}")
        find_library(DirectX_D3D11_LIBRARY NAMES d3d11 HINTS ${DirectX_LIB_SEARCH_PATH} PATH_SUFFIXES ${DirectX_LIBPATH_SUFFIX})
        find_library(DirectX_D3DX11_LIBRARY NAMES d3dx11 HINTS ${DirectX_LIB_SEARCH_PATH} PATH_SUFFIXES ${DirectX_LIBPATH_SUFFIX})  
        if (DirectX_D3D11_INCLUDE_DIR AND DirectX_D3D11_LIBRARY)
          set(DirectX_D3D11_FOUND TRUE)
          set(DirectX_D3D11_INCLUDE_DIR ${DirectX_D3D11_INCLUDE_DIR})
          set(DirectX_D3D11_LIBRARIES ${DirectX_D3D11_LIBRARIES}
        ${DirectX_D3D11_LIBRARY}
        ${DirectX_D3DX11_LIBRARY}
        ${DirectX_DXGI_LIBRARY}
        ${DirectX_DXERR_LIBRARY}
        ${DirectX_DXGUID_LIBRARY}
        ${DirectX_D3DCOMPILER_LIBRARY}            
          ) 
        endif ()
        mark_as_advanced(DirectX_D3D11_INCLUDE_DIR DirectX_D3D11_LIBRARY DirectX_D3DX11_LIBRARY)
      endif ()

    endif(WIN32)


以下是一个 reStructuredText 格式展示的 Find Module 编写格式示范，具体参考 cmake-developer 文档：

    # Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
    # file Copyright.txt or https://cmake.org/licensing for details.

    #[=======================================================================[.rst:
    FindFoo
    -------

    Finds the Foo library.

    Imported Targets
    ^^^^^^^^^^^^^^^^

    This module provides the following imported targets, if found:

    ``Foo::Foo``
      The Foo library

    Result Variables
    ^^^^^^^^^^^^^^^^

    This will define the following variables:

    ``Foo_FOUND``
      True if the system has the Foo library.
    ``Foo_VERSION``
      The version of the Foo library which was found.
    ``Foo_INCLUDE_DIRS``
      Include directories needed to use Foo.
    ``Foo_LIBRARIES``
      Libraries needed to link to Foo.

    Cache Variables
    ^^^^^^^^^^^^^^^

    The following cache variables may also be set:

    ``Foo_INCLUDE_DIR``
      The directory containing ``foo.h``.
    ``Foo_LIBRARY``
      The path to the Foo library.

    #]=======================================================================]


## 🐤🐥 Shell Commands
- https://cmake.org/cmake/help/latest/command/execute_process.html

Execute one or more child processes.

    execute_process(
        COMMAND <cmd1> [<arguments>]
        [COMMAND <cmd2> [<arguments>]]...
        [WORKING_DIRECTORY <directory>]
        [TIMEOUT <seconds>]
        [RESULT_VARIABLE <variable>]
        [RESULTS_VARIABLE <variable>]
        [OUTPUT_VARIABLE <variable>]
        [ERROR_VARIABLE <variable>]
        [INPUT_FILE <file>]
        [OUTPUT_FILE <file>]
        [ERROR_FILE <file>]
        [OUTPUT_QUIET]
        [ERROR_QUIET]
        [COMMAND_ECHO <where>]
        [OUTPUT_STRIP_TRAILING_WHITESPACE]
        [ERROR_STRIP_TRAILING_WHITESPACE]
        [ENCODING <name>]
        [ECHO_OUTPUT_VARIABLE]
        [ECHO_ERROR_VARIABLE]
        [COMMAND_ERROR_IS_FATAL <ANY|LAST>])

进入命令模式 cmake -E 可以执行一系列外部命令：

    Usage: C:/Program Files (x86)/CMake/bin/cmake.exe -E <command> [arguments...]
    Available commands: 
      capabilities              - Report capabilities built into cmake in JSON format
      cat <files>...            - concat the files and print them to the standard output
      chdir dir cmd [args...]   - run command in a given directory
      compare_files [--ignore-eol] file1 file2
                                  - check if file1 is same as file2
      copy <file>... destination  - copy files to destination (either file or directory)
      copy_directory <dir>... destination   - copy content of <dir>... directories to 'destination' directory
      copy_if_different <file>... destination  - copy files if it has changed
      echo [<string>...]        - displays arguments as text
      echo_append [<string>...] - displays arguments as text but no new line
      env [--unset=NAME]... [NAME=VALUE]... COMMAND [ARG]...
                                - run command in a modified environment
      environment               - display the current environment
      make_directory <dir>...   - create parent and <dir> directories
      md5sum <file>...          - create MD5 checksum of files
      sha1sum <file>...         - create SHA1 checksum of files
      sha224sum <file>...       - create SHA224 checksum of files
      sha256sum <file>...       - create SHA256 checksum of files
      sha384sum <file>...       - create SHA384 checksum of files
      sha512sum <file>...       - create SHA512 checksum of files
      remove [-f] <file>...     - remove the file(s), use -f to force it (deprecated: use rm instead)
      remove_directory <dir>... - remove directories and their contents (deprecated: use rm instead)
      rename oldname newname    - rename a file or directory (on one volume)
      rm [-rRf] <file/dir>...   - remove files or directories, use -f to force it, r or R to remove recursively
      server                    - start cmake in server mode
      sleep <number>...         - sleep for given number of seconds
      tar [cxt][vf][zjJ] file.tar [file/dir1 file/dir2 ...]
                                - create or extract a tar or zip archive
      time command [args...]    - run command and display elapsed time
      touch <file>...           - touch a <file>.
      touch_nocreate <file>...  - touch a <file> but do not create it.
      create_symlink old new    - create a symbolic link new -> old
      true                      - do nothing with an exit code of 0
      false                     - do nothing with an exit code of 1
    Available on Windows only:
      delete_regv key           - delete registry value
      env_vs8_wince sdkname     - displays a batch file which sets the environment for the provided Windows CE SDK installed in VS2005
      env_vs9_wince sdkname     - displays a batch file which sets the environment for the provided Windows CE SDK installed in VS2008
      write_regv key value      - write registry value

比如打包 tar 文件：

```sh
cmake -E tar cz test.tar.gz somefiles
# tar -czf test.tar.gz somefiles
```


## 🐤🐥 CMake Macro & Function
- https://cmake.org/cmake/help/latest/command/macro.html
- https://cmake.org/cmake/help/latest/command/function.html
- https://cmake.org/cmake/help/latest/command/cmake_parse_arguments.html


函数和宏非常像，调用不分大小写，同样可以使用 cmake_language(CALL foo) 调用，但函数中 
ARGN, ARGC, ARGV 或 ARGV0, ARGV1, … 这些是真的变量。但是宏内只会替换相应的值。

内置变量说明：

- `ARGC` 参数个数；
- `ARGV` 所有参数变量列表；
- `ARGN` 参数声明列表中非命名的所有传入参数；
- `ARGV#` 带数字序号访问指定的参数，# 为序号，从 0 开始；

但是宏内，它们不是变量，只是预处理替换的字符串，不能按以下方式使用：

    if(ARGV1)           # ARGV1 is not a variable
    if(DEFINED ARGV2)   # ARGV2 is not a variable
    if(ARGC GREATER 2)  # ARGC is not a variable
    foreach(loop_var IN LISTS ARGN) # ARGN is not a variable

应该这样：

    if(${ARGV1})
    if(${ARGC} GREATER 2)
    foreach(loop_var ${ARGN}) # but this will skip empty arguments.

    set(list_var "${ARGN}")
    foreach(loop_var IN LISTS list_var)
      <commands>
    endforeach()

还有函数中可用的属性：

- CMAKE_CURRENT_FUNCTION 当前函数名称；
- CMAKE_CURRENT_FUNCTION_LIST_DIR 定义当前函数的列表文件所在目录路径；
- CMAKE_CURRENT_FUNCTION_LIST_FILE 定义当前函数的列表文件路径；
- CMAKE_CURRENT_FUNCTION_LIST_LINE 定义当前函数的代码行号；

使用函数、宏定义：

    macro(<name> [<arg1> ...])
      <commands>
    endmacro()

    function(<name> [<arg1> ...])
      <commands>
    endfunction()

定义宏或函数 `<name>` 可以带参数列表 `<arg1>, …`，macro 命令和 function 命令都和配对的
结束符号使用，名称不区分大小写。但是参数大小写要匹配，否则替换时变量内容不能正确获取。

所谓命名参数，即函数、宏定义的参数列表中指定名字的变量，而传入参数可能比列表中的命名参数还要多，
那么其它未曾命名的参数就可以通过 **ARGN** 引用，这是一个列表。

函数体内的命令 `<commands>` 会被记录下来，直到函数被调用时才执行。调用函数时，记录下来的命令
会先经过参数的替换，如，将实际参数值 ${arg1} 替换到命令中，并调用命令。

示范：

```sh,ignore
    function(add_sfml_executable NAME)
        message("NAME:" ${NAME})
        message("NAME:" ${SFML_LIBRARIES})
        add_executable(${NAME} ${ARGN})
        target_link_libraries(${NAME} ${SFML_LIBRARIES} opengl32 winmm )
        target_link_libraries(${NAME} ${SFML_DEPENDENCIES} )    
    endfunction()

    add_sfml_executable(sfml_sprite "examples/sprite.cpp")


    function(foo)
      bar(BOB ARGN)
      bar(JANE ${ARGV} WHITE)
    endfunction()

    macro(bar hello world)
        MESSAGE(STATUS ARGV=${ARGV})
        MESSAGE(STATUS ARGN=${ARGN})
        MESSAGE(STATUS ARGV0=${ARGV0})
        MESSAGE(STATUS ARGV1=${ARGV1})
        MESSAGE(STATUS ARGV2=${ARGV2})
    endmacro()

    foo(TOM JERRY SUSAN BERN)
```


输出：

    -- ARGV=BOBARGN
    -- ARGN=
    -- ARGV0=BOB
    -- ARGV1=ARGN
    -- ARGV2=SUSAN
    -- ARGV=JANETOMJERRYSUSANBERNWHITE
    -- ARGN=JERRYSUSANBERNWHITE
    -- ARGV0=JANE
    -- ARGV1=TOM
    -- ARGV2=JERRY

注意，将变量再传入其它函数或宏中使用的格式差异 `ARGN`、`${ARGV}`。

对参数列表进行解析：

    cmake_parse_arguments(<prefix> <options> <one_value_keywords>
                          <multi_value_keywords> <args>...)

    cmake_parse_arguments(PARSE_ARGV <N> <prefix> <options>
                          <one_value_keywords> <multi_value_keywords>)

此命令用于解析函数、宏参数列表并获得相应的变量，参数解析：

- `<prefix>` 给解析后得到的变量设置前缀；
- `<options>` 此处参数指定可选项的变量名称，解析参数列表中的可选值，参数列表包含此变量则为 TRUE 反之为 FALSE；
- `<one_value_keywords>` 单值关键词列表，每个关键词仅仅对应一个值；
- `<multi_value_keywords>` 多值关键词列表，每个关键词可对应多个值；
- `<args>...` 要解析的参数，一般传入 *${ARGN}*。

解析结果可能有得到以下变量：

- `<prefix>_UNPARSED_ARGUMENTS`: 未被解析的参数值；
- `<prefix>_KEYWORDS_MISSING_VALUES`：定义了关键词，但是参数列表没有对应的值；

官方文档示范脚本：

```sh,ignore
macro(my_install)
    set(options OPTIONAL FAST)
    set(oneValueArgs DESTINATION RENAME)
    set(multiValueArgs TARGETS CONFIGURATIONS)
    cmake_parse_arguments(MY_INSTALL "${options}" "${oneValueArgs}" "${multiValueArgs}" ${ARGN} )
    # ...
endmacro()

# Assume my_install() has been called like this:
my_install(TARGETS foo bar DESTINATION bin OPTIONAL blub CONFIGURATIONS)
```

After the *cmake_parse_arguments* call the macro will have set or undefined the following variables:

    MY_INSTALL_OPTIONAL = TRUE
    MY_INSTALL_FAST = FALSE # was not used in call to my_install
    MY_INSTALL_DESTINATION = "bin"
    MY_INSTALL_RENAME <UNDEFINED> # was not used
    MY_INSTALL_TARGETS = "foo;bar"
    MY_INSTALL_CONFIGURATIONS <UNDEFINED> # was not used
    MY_INSTALL_UNPARSED_ARGUMENTS = "blub" # nothing expected after "OPTIONAL"
    MY_INSTALL_KEYWORDS_MISSING_VALUES = "CONFIGURATIONS"
             # No value for "CONFIGURATIONS" given

VulkanTutorial 项目示范脚本：

```sh,ignore
function (add_chapter CHAPTER_NAME)
  cmake_parse_arguments (CHAPTER "" "SHADER" "LIBS;TEXTURES;MODELS" ${ARGN})

  add_executable (${CHAPTER_NAME} ${CHAPTER_NAME}.cpp)
  set_target_properties (${CHAPTER_NAME} PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${CHAPTER_NAME})
  set_target_properties (${CHAPTER_NAME} PROPERTIES CXX_STANDARD 17)
  target_link_libraries (${CHAPTER_NAME} Vulkan::Vulkan glfw)
  target_include_directories (${CHAPTER_NAME} PRIVATE ${STB_INCLUDEDIR})

  if (DEFINED CHAPTER_SHADER)
    set (CHAPTER_SHADER_TARGET ${CHAPTER_NAME}_shader)
    file (GLOB SHADER_SOURCES ${CHAPTER_SHADER}.frag ${CHAPTER_SHADER}.vert)
    add_shaders_target (${CHAPTER_SHADER_TARGET} CHAPTER_NAME ${CHAPTER_NAME} SOURCES ${SHADER_SOURCES})
    add_dependencies (${CHAPTER_NAME} ${CHAPTER_SHADER_TARGET})
  endif ()
  if (DEFINED CHAPTER_LIBS)
    target_link_libraries (${CHAPTER_NAME} ${CHAPTER_LIBS})
  endif ()
  if (DEFINED CHAPTER_MODELS)
    file (COPY ${CHAPTER_MODELS} DESTINATION ${CMAKE_BINARY_DIR}/${CHAPTER_NAME}/models)
  endif ()
  if (DEFINED CHAPTER_TEXTURES)
    file (COPY ${CHAPTER_TEXTURES} DESTINATION ${CMAKE_BINARY_DIR}/${CHAPTER_NAME}/textures)
  endif ()
endfunction ()



add_chapter (22_descriptor_sets
  SHADER 21_shader_ubo
  LIBS glm::glm)
```


## 🐤🐥 Set Options & File Download
- https://cmake.org/cmake/help/latest/command/file.html

使用 set 指令配置的选项参数可以在执行 Cmake 命令时传入参数，比如 Spine 动画制作软件配置的脚本：

```js
set(CMAKE_INSTALL_PREFIX "./")
set(CMAKE_VERBOSE_MAKEFILE ON)
set(SPINE_SFML FALSE CACHE BOOL FALSE)
set(SPINE_COCOS2D_OBJC FALSE CACHE BOOL FALSE)
set(SPINE_COCOS2D_X FALSE CACHE BOOL FALSE)

if((${SPINE_SFML}) OR (${CMAKE_CURRENT_BINARY_DIR} MATCHES "spine-sfml"))
    add_subdirectory(spine-c)
    add_subdirectory(spine-sfml/c)
    add_subdirectory(spine-cpp)
    add_subdirectory(spine-sfml/cpp)
endif()
```

使用 option 命令提供选项，它可接受三个参数：

    option(<option_variable> "help string" [initial value])

- option_variable 表示该选项的变量的名称。
- "help string" 记录选项的字符串，在 CMake 的终端或图形用户界面中可见。
- [initial value] 选项的默认值，可以是 ON 或 OFF。

可以在命令行中通过 -D 选项来定义参数值，以下会使用编译脚本进入 SPINE_SFML 项目编译脚本生成，并将生成文件保存到 build 目录：

    cmake -DSPINE_SFML=TRUE . build

参数变量定义格式 VAR:type=value，类型是可选的。

set 语法参考：

    Set Normal Variable
    set(<variable> <value>... [PARENT_SCOPE])

    Set Cache Entry
    set(<variable> <value>... CACHE <type> <docstring> [FORCE])

    Set Environment Variable
    set(ENV{<variable>} [<value>])

    Clear Environment Variable
    set(ENV{<variable>})
    set(ENV{<variable>} "")

如果不指定 PARENT_SCOPE 父作用域，变量默认在 function scope 方法作用域和 directory scope 目录作用域有效。

类型 `<type>` 指定：

- *BOOL* 布尔类型使用 ON/OFF 值，在 cmake-gui 操作界面会以多选框显示；
- *FILEPATH* 路径类型，在 cmake-gui 提供文件选择对话框；
- *PATH* 目录路径类型，同上，如果找不到相应目录，则会返回包含 NOTFOUND 后缀的字符串。
- *STRING* 单行字符串，cmake-gui 使用文本框显示，如果设置了缓存还会有下拉列表。
- *INTERNAL* 内部类型，单行字符串，cmake-gui 界面不显示。可以跨运行持久存储变量，使用这种类型意味着使用 [FORECE] 可选项。

示范：

    set(SFML_DIR "../../dependencies/SFML-2.4.1/" CACHE PATH "path string")

进入命令模式后可以调用系统的命令工具，例如 tar 命令解压文件，*CMake -E tar xzf some.zip*。 

Cmake 提供的 file 命令进行文件处理，读写或者远程上传、下载文件，或者使用 GLOB 来获取匹配正则表达式的文件列表：

```js
// Reading
  file(READ <filename> <out-var> [...])
  file(STRINGS <filename> <out-var> [...])
  file(<HASH> <filename> <out-var>)
  file(TIMESTAMP <filename> <out-var> [...])
  file(GET_RUNTIME_DEPENDENCIES [...])

// Writing
  file({WRITE | APPEND} <filename> <content>...)
  file({TOUCH | TOUCH_NOCREATE} [<file>...])
  file(GENERATE OUTPUT <output-file> [...])
  file(CONFIGURE OUTPUT <output-file> CONTENT <content> [...])

// Filesystem
  file({GLOB | GLOB_RECURSE} <out-var> [...] [<globbing-expr>...])
  file(MAKE_DIRECTORY [<dir>...])
  file({REMOVE | REMOVE_RECURSE } [<files>...])
  file(RENAME <oldname> <newname> [...])
  file(COPY_FILE <oldname> <newname> [...])
  file({COPY | INSTALL} <file>... DESTINATION <dir> [...])
  file(SIZE <filename> <out-var>)
  file(READ_SYMLINK <linkname> <out-var>)
  file(CREATE_LINK <original> <linkname> [...])
  file(CHMOD <files>... <directories>... PERMISSIONS <permissions>... [...])
  file(CHMOD_RECURSE <files>... <directories>... PERMISSIONS <permissions>... [...])

// Path Conversion
  file(REAL_PATH <path> <out-var> [BASE_DIRECTORY <dir>] [EXPAND_TILDE])
  file(RELATIVE_PATH <out-var> <directory> <file>)
  file({TO_CMAKE_PATH | TO_NATIVE_PATH} <path> <out-var>)

// Transfer
  file(DOWNLOAD <url> [<file>] [...])
  file(UPLOAD <file> <url> [...])

// Locking
  file(LOCK <path> [...])

// Archiving
  file(ARCHIVE_CREATE OUTPUT <archive> PATHS <paths>... [...])
  file(ARCHIVE_EXTRACT INPUT <archive> [...])
```

使用 EXIST 检测目录是否存在时注意，在编译时工作目录是指定的编译输出目录，如果错误指定一个相对目录会造成命令没有效果的错觉。

需要使用以下内置变量来定位目录：

- *PROJECT_SOURCE_DIR* 工程源代码目录，即入口 CMakeLists.txt 脚本所在的目录；
- *CMAKE_CURRENT_LIST_DIR* 当前列表目录，即被包含的 CMakeLists.txt 脚本所在目录；
- *CMAKE_CURRENT_SOURCE_DIR* 当前脚本处理的源代码目录；

```sh,ignore
set(DEPS_DIR "${PROJECT_SOURCE_DIR}/dependencies/")
function(install_deps Directory FileName URL)
    set(DEP_DIR ${DEPS_DIR}/${Directory})
    if (NOT EXISTS "${DEP_DIR}")
        message("Try to download and install ${FileName}")
        if(NOT EXISTS ${DEPS_DIR}/${FileName})
            message("Downloading ${URL}")
            file(DOWNLOAD "${URL}" "${DEPS_DIR}/${FileName}")
        endif()
        execute_process(
            COMMAND ${CMAKE_COMMAND} -E tar -xzf "${FileName}"
            WORKING_DIRECTORY ${DEPS_DIR}
        )
    endif()
endfunction()

# set(SFML_URL "http://www.sfml-dev.org/files/SFML-2.4.1-linux-gcc-64-bit.tar.gz")
set(SFML_URL "http://www.sfml-dev.org/files/SFML-2.4.1-windows-vc14-32-bit.zip")
install_deps("SFML-2.4.1" "SFML-2.4.1-windows-vc14-32-bit.zip" ${SFML_URL})

set(FreeGLUT_URL "http://prdownloads.sourceforge.net/freeglut/freeglut-3.2.2.tar.gz?download")
install_deps("freeglut-3.2.2" "freeglut-3.2.2.tar.gz" ${FreeGLUT_URL})

# set(GLFW_URL "https://github.com/glfw/glfw/archive/refs/tags/3.3.6.tar.gz")
set(GLFW_URL "https://github.com/glfw/glfw/releases/download/3.3.6/glfw-3.3.6.zip")
install_deps("glfw-3.3.6" "glfw-3.3.6.zip" ${GLFW_URL})

# add FreeGLUT project
# set(SFML_BUILD_EXAMPLES FALSE)
# set(SFML_BUILD_DOC FALSE)
# add_subdirectory(${DEPS_DIR}/SFML-2.4.1)

# add FreeGLUT project
set(FREEGLUT_BUILD_DEMOS OFF)
add_subdirectory(${DEPS_DIR}/freeglut-3.2.2)

set(GLFW_BUILD_DOCS OFF CACHE BOOL "" FORCE)
set(GLFW_BUILD_TESTS OFF CACHE BOOL "" FORCE)
set(GLFW_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
add_subdirectory(${DEPS_DIR}/glfw-3.3.6)
# target_link_libraries(myapp glfw)
# list(APPEND CMAKE_PREFIX_PATH "./dependencies/glfw-3.3.6/cmake")
```

Spine 运行时项目的编译脚本配置很完善，会检测当前是否已需要下载 SFML 框架，参考脚本片段：

```sh,ignore
#
# First download and extract SFML 2.4.1 for the respective OS we are on
#
set(DEPS_DIR "${CMAKE_CURRENT_LIST_DIR}/dependencies/")
set(DEPS_DIR "${CMAKE_CURRENT_SOURCE_DIR}/dependencies/")
set(DEPS_DIR "${PROJECT_SOURCE_DIR}/spine-sfml/dependencies/")

if (${CMAKE_SYSTEM_NAME} MATCHES "Darwin")
    set(SFML_URL "http://www.sfml-dev.org/files/SFML-2.4.1-osx-clang.tar.gz")
    set(SFML_DIR ${DEPS_DIR}/SFML-2.4.1-osx-clang)
    if (NOT EXISTS "${SFML_DIR}")
        message("Downloading SFML for Mac OS X")
        file(DOWNLOAD "${SFML_URL}" "${DEPS_DIR}/sfml.tar.gz")
        execute_process(
            COMMAND ${CMAKE_COMMAND} -E tar xzf  ${DEPS_DIR}/sfml.tar.gz
            WORKING_DIRECTORY ${DEPS_DIR}
        )
        # copy freetype over to Frameworks/ so rpath resoultion works
        execute_process(
                COMMAND ${CMAKE_COMMAND} -E copy_directory ${SFML_DIR}/extlibs/freetype.framework ${SFML_DIR}/Frameworks/freetype.framework
                WORKING_DIRECTORY ${SFML_DIR}
        )
    endif()
elseif (${CMAKE_SYSTEM_NAME} MATCHES "Linux")
    set(SFML_URL "http://www.sfml-dev.org/files/SFML-2.4.1-linux-gcc-64-bit.tar.gz")
    set(SFML_DIR ${DEPS_DIR}/SFML-2.4.1)
    if (NOT EXISTS ${SFML_DIR})
        message("Downloading SFML for Linux 64-bit")
        file(DOWNLOAD "${SFML_URL}" "${DEPS_DIR}/sfml.tar.gz")
        execute_process(
            COMMAND ${CMAKE_COMMAND} -E tar xzf  ${DEPS_DIR}/sfml.tar.gz
            WORKING_DIRECTORY ${DEPS_DIR}
        )
    endif()
else()
    set(SFML_URL "http://www.sfml-dev.org/files/SFML-2.4.1-windows-vc14-32-bit.zip")
    set(SFML_DIR ${DEPS_DIR}/SFML-2.4.1)
    if (NOT EXISTS ${SFML_DIR})
        message("Downloading SFML for Windows 32-bit")
        file(DOWNLOAD "${SFML_URL}" "${DEPS_DIR}/sfml.zip")
        execute_process(
            COMMAND ${CMAKE_COMMAND} -E tar x  ${DEPS_DIR}/sfml.zip
            WORKING_DIRECTORY ${DEPS_DIR}
        )
    endif()
endif()

if(MSVC)
    message("MSCV detected")
    set (CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -D_CRT_SECURE_NO_WARNINGS")
    set (CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -D_CRT_SECURE_NO_WARNINGS")
else()
    set (CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wall -Wextra -pedantic -std=c89")
    set (CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wextra -Wnon-virtual-dtor -pedantic -std=c++11 -fno-exceptions -fno-rtti")
endif()

# Define spine-sfml-cpp library
include_directories(src ${SFML_DIR}/include)
file(GLOB INCLUDES "src/**/*.h")
file(GLOB SOURCES "src/**/*.cpp")
add_library(spine-sfml-cpp STATIC ${SOURCES} ${INCLUDES})
target_link_libraries(spine-sfml-cpp LINK_PUBLIC spine-cpp)
install(TARGETS spine-sfml-cpp DESTINATION dist/lib)
install(FILES ${INCLUDES} DESTINATION dist/include)

# Define spine-sfml example executable
add_executable(spine-sfml-cpp-example example/main.cpp)

# Link in SFML libraries and OS dependencies like OpenGL
if (${CMAKE_SYSTEM_NAME} MATCHES "Darwin")
    find_library(SFML SFML PATHS ${SFML_DIR}/Frameworks)
    find_library(SFML_SYSTEM "sfml-system" PATHS ${SFML_DIR}/Frameworks)
    find_library(SFML_WINDOW sfml-window PATHS ${SFML_DIR}/Frameworks)
    find_library(SFML_GRAPHICS sfml-graphics PATHS ${SFML_DIR}/Frameworks)
    target_link_libraries(spine-sfml-cpp-example ${SFML} ${SFML_SYSTEM} ${SFML_WINDOW} ${SFML_GRAPHICS})
elseif (${CMAKE_SYSTEM_NAME} MATCHES "Linux")
    target_link_libraries(spine-sfml-cpp-example sfml-graphics sfml-window sfml-system)
else()
    set(SFML_LIBS ${SFML_DIR}/lib)
    target_link_libraries(spine-sfml-cpp-example ${SFML_LIBS}/sfml-main-d.lib)
    target_link_libraries(spine-sfml-cpp-example ${SFML_LIBS}/sfml-graphics-s-d.lib)
    target_link_libraries(spine-sfml-cpp-example ${SFML_LIBS}/sfml-window-s-d.lib)
    target_link_libraries(spine-sfml-cpp-example ${SFML_LIBS}/sfml-system-s-d.lib)
    target_link_libraries(spine-sfml-cpp-example ${SFML_LIBS}/freetype.lib)
    target_link_libraries(spine-sfml-cpp-example ${SFML_LIBS}/jpeg.lib)
    target_link_libraries(spine-sfml-cpp-example opengl32)
    target_link_libraries(spine-sfml-cpp-example gdi32)
    target_link_libraries(spine-sfml-cpp-example winmm)
    add_definitions(-DSFML_STATIC)
endif()

# copy data to build directory
add_custom_command(TARGET spine-sfml-cpp-example PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${CMAKE_CURRENT_LIST_DIR}/data $<TARGET_FILE_DIR:spine-sfml-cpp-example>/data)

target_link_libraries(spine-sfml-cpp-example spine-cpp)
target_link_libraries(spine-sfml-cpp-example spine-sfml-cpp)
```

CMAKE_CURRENT_LIST_DIR 变量指向当前 Cmake 命令正在处理的脚本所在目录，可以使用 message 打印出来：

    message("${CMAKE_CURRENT_LIST_DIR}")

虽然 Cmake 脚本编程功能强大，但是使用不当确实很多问题，比例在网络环境差的条件下，像 spine-sfml 项目提供 C/C++ 两个示范程序都需要单独下载 SFML 框架，这确实是不太好。

一个变通方法是在上一级目录中保存共用的依赖目录，PROJECT_SOURCE_DIR 是指运行 Cmake 指定的源代码目录，而 CMAKE_CURRENT_SOURCE_DIR 则是 Cmake 脚本当前处理中的项目源代码目录：

    set(DEPS_DIR "${CMAKE_CURRENT_SOURCE_DIR}/dependencies/")
    set(DEPS_DIR "${PROJECT_SOURCE_DIR}/dependencies/")
    set(DEPS_DIR "${PROJECT_SOURCE_DIR}/spine-sfml/dependencies/")


## 🐤🐥 add_executable() add_library() add_custom_target() 
- https://cmake.org/cmake/help/latest/command/add_custom_target.html
- https://cmake.org/cmake/help/latest/command/add_executable.html
- https://cmake.org/cmake/help/latest/command/add_library.html

在脚本中使用 add_executable() add_library() add_custom_target() 来设置编译产生的输出目标，一般有应用程序和库文件。

add_executable() 定义编译产生的应用程序输出，以及抽象的目标，所库 Imported 即 CMake 工程外部导入的目标：

- Normal Executables
- Imported Executables
- Alias Executables

add_library() 除了定义一般意义上的动态连接库，还可以是抽象的库：

- Normal Libraries
- Object Libraries
- Interface Libraries
- Imported Libraries
- Alias Libraries

```sh
# Add a target with no output so it will always be built.
add_custom_target(Name [ALL] [command1 [args1...]]
                  [COMMAND command2 [args2...] ...]
                  [DEPENDS depend depend depend ... ]
                  [BYPRODUCTS [files...]]
                  [WORKING_DIRECTORY dir]
                  [COMMENT comment]
                  [JOB_POOL job_pool]
                  [VERBATIM] [USES_TERMINAL]
                  [COMMAND_EXPAND_LISTS]
                  [SOURCES src1 [src2...]])

# Normal Executables
add_executable(<name> [WIN32] [MACOSX_BUNDLE]
               [EXCLUDE_FROM_ALL]
               [source1] [source2 ...])

# Imported Executables
add_executable(<name> IMPORTED [GLOBAL])

# Alias Executables
add_executable(<name> ALIAS <target>)

# Normal Libraries
add_library(<name> [STATIC | SHARED | MODULE]
            [EXCLUDE_FROM_ALL]
            [<source>...])

# Object Libraries
add_library(<name> OBJECT [<source>...])

# Interface Libraries
add_library(<name> INTERFACE)

# Imported Libraries
add_library(<name> <type> IMPORTED [GLOBAL])

# Alias Libraries
add_library(<name> ALIAS <target>)
```

## 🐤🐥 target_compile_definitions target_compile_options

给目标添加编译符号定义：

    target_compile_definitions(<target>
       <INTERFACE|PUBLIC|PRIVATE> [items1...]
       [<INTERFACE|PUBLIC|PRIVATE> [items2...] ...]
      )

示范：

    target_compile_definitions(foo PUBLIC FOO)
    target_compile_definitions(foo PUBLIC -DFOO)  # -D removed
    target_compile_definitions(foo PUBLIC "" FOO) # "" ignored
    target_compile_definitions(foo PUBLIC -D FOO) # -D becomes "", then ignored

等价 set_property(TARGET ... PROPERTY COMPILE_DEFINITIONS ...)

add_definitions(-DFOO -DBAR ...) 函数可以添加任意符号选项。

给目标添加编译选项：

    target_compile_options(<target> [BEFORE]
      <INTERFACE|PUBLIC|PRIVATE> [items1...]
      [<INTERFACE|PUBLIC|PRIVATE> [items2...] ...])

给指定的 target 添加编译选项，target 指的是由 add_executable() 产生的可执行文件或 add_library() 添加进来的库。 

INTERFACE PUBLIC PRIVATE 指的是 [items...] 选项可以传播的范围，PUBLIC and INTERFACE 会传播 target 的 INTERFACE_COMPILE_DEFINITIONS 属性，PRIVATE and PUBLIC 会传播 target 的 COMPILE_DEFINITIONS  属性。


## 🐤🐥 target_link_options & set_target_properties
- https://cmake.org/cmake/help/latest/command/target_link_options.html
- https://cmake.org/cmake/help/latest/command/set_target_properties.html

CMake 中有 target_compile_options 命令，指定目标的编译选项。但却没有相应的命令，指定目标的链接选项。

要指定目标的链接选项，或者设置目标的属性来，这些属性影响其构建过程。

target_link_options(<target> [BEFORE]
  <INTERFACE|PUBLIC|PRIVATE> [items1...]
  [<INTERFACE|PUBLIC|PRIVATE> [items2...] ...])

set_target_properties(target1 target2 ...
                      PROPERTIES prop1 value1
                      prop2 value2 ...)

例如，指定“静态库”目标的“链接时代码生成”的链接选项：

    set_target_properties(<library_name>
        PROPERTIES
        STATIC_LIBRARY_FLAGS /LTCG:incremental
        )

指定“可执行程序”目标的“链接时代码生成”的链接选项：

    set_target_properties(<executable_name>
        PROPERTIES
        LINK_FLAGS /LTCG:incremental
        )


根据不同的编译器，链接参数的传入方式也有差别，GCC 的链接参数可以如下设置：

    set_target_properties (${name} PROPERTIES LINK_OPTIONS "LINKER:--subsystem,console")
    target_link_options( ${name} PUBLIC LINKER:--subsystem,console)



## 🐤🐥 add_dependencies & target_link_libraries 
- https://cmake.org/cmake/help/latest/command/link_libraries.html
- https://cmake.org/cmake/help/latest/command/target_link_libraries.html
- https://cmake.org/cmake/help/latest/command/add_dependencies.html

```sh
# Link libraries to all targets added later.
link_libraries([item1 [item2 [...]]]
               [[debug|optimized|general] <item>] ...)

# Libraries for a Target and/or its Dependents
target_link_libraries(<target>
                      <PRIVATE|PUBLIC|INTERFACE> <item>...
                     [<PRIVATE|PUBLIC|INTERFACE> <item>...]...)

# Libraries for both a Target and its Dependents
target_link_libraries(<target> <item>...)

# Libraries for a Target and/or its Dependents (Legacy)
target_link_libraries(<target>
                      <LINK_PRIVATE|LINK_PUBLIC> <lib>...
                     [<LINK_PRIVATE|LINK_PUBLIC> <lib>...]...)

# Libraries for Dependents Only (Legacy)
target_link_libraries(<target> LINK_INTERFACE_LIBRARIES <item>...)

# Add a dependency between top-level targets.
add_dependencies(<target> [<target-dependency>]...)
```

对于编译时遇到的依赖问题，很多时候我们只需要一句 target_link_libraries 就可以搞定。

但是 add_dependencies 可以解决编译时间的前后依赖，当项目中两个 targets 有依赖关系，需要在
另一个编译完成后才能执行另一个目标的编译。这时候，就只有通过 add_dependencies 实现等待目标 
target 编译的动作，自动检查下层依赖库是否已经生成。没有的话先编译下层依赖库，然后再编译上层 
target，最后再 link depend target。

为了等待指定的文件完成编译，可以添加自定义目标，如：

    add_executable(app  "main.c" "meta.emf")
    add_custom_command(
            OUTPUT "${EXECUTABLE_OUTPUT_PATH}/meta.emf"
            COMMAND ${CMAKE_COMMAND} -E copy "meta.emf" "${EXECUTABLE_OUTPUT_PATH}"
            COMMENT "Copying meta.emf to exe directory"
            DEPENDS "meta/meta.emf")
    add_custom_target(custom_target_meta ALL
            DEPENDS "${EXECUTABLE_OUTPUT_PATH}/meta.emf")
    add_dependencies(app custom_target_meta)


## 🐤🐥 target_sources & C++2023
- https://cmake.org/cmake/help/git-stage/command/target_sources.html
- https://crascit.com/2016/01/31/enhanced-source-file-handling-with-target_sources
- https://cmake.org/cmake/help/book/mastering-cmake/chapter/Modules.html

CMake 3.1 新的关联目标源代码功，它能更好地支持 CMake 项目：

1. 它可以产生更清晰、更简洁的 CMakeLists.txt 项目文件
2. 依赖信息 (dependency information) 可以在依赖实际发生的目录层次中得以指定
3. 源文件可以成为目标接口的一部分
4. 源文件可以添加到第三方项目的目标中，而无需修改第三方项目文件

在 target_sources() 出现前，CMake 通过 add_executable() 或 add_library() 命令直接
列出源文件来定义目标。

    add_executable(myApp src1.cpp src2.cpp)

当源文件的数量越来越大，并且它们分布在多个子目录中（可能嵌套到多个级别）时，这就会变得很难处理。
这样还导致必须（在 CMakeLists.txt 文件中）重复目录结构，这首先降低了将源文件结构化为目录的好处。

因此，许多开发人员做出的改进是，在子目录中用变量中建立源文件列表，并通过 include() 引入该变量。
而引入 target_sources 命令后，流程可以更简洁：

    target_sources(myLib
        PRIVATE
            foo.cpp
            foo_p.cpp
            foo_p.h
        PUBLIC
            foo.h  # poor PUBLIC example, see discussion below for why
    )

    find_library(BARRY_LIB barry)
    # This call requires CMake 3.13 or later, see next section
    target_link_libraries(myLib PUBLIC ${BARRY_LIB})

    target_compile_definitions(myLib PUBLIC USE_BARRY)
    target_include_directories(myLib PUBLIC ${CMAKE_CURRENT_LIST_DIR})

CMake 3.23 更新功能 FILE_SET 可以使用 CXX_MODULES 支持 C++20 的模块。
当前 CMake 对 C++20 模块这个不成熟的方案支持度还不够高，可用 add_custom_target 来编译模块。
https://vladiant.github.io/blog/2022/09/24/cmake-cpp-modules

    cmake_minimum_required(VERSION 3.23)
    project(simple CXX)
    set(CMAKE_CXX_STANDARD 20)
    add_library(simple)

    target_sources(simple
       PRIVATE
       FILE_SET cxx_modules TYPE CXX_MODULES FILES
       A.cpp B.cpp
    )

New in version 3.1. Add sources to a target.
New in version 3.20: <target> can be a custom target.
New in version 3.23: FILE_SET

    target_sources(<target>
      <INTERFACE|PUBLIC|PRIVATE> [items1...]
      [<INTERFACE|PUBLIC|PRIVATE> [items2...] ...])

Specifies sources to use when building a target and/or its dependents. 
The named <target> must have been created by a command such as 

    add_executable()
    add_library()
    add_custom_target()

and must not be an ALIAS target. The <items> may use generator expressions.

    # WRONG: starts with generator expression, but relative path used
    target_sources(MyTarget PRIVATE "$<$<CONFIG:Debug>:dbgsrc.cpp>")
    
    # CORRECT: absolute path used inside the generator expression
    target_sources(MyTarget PRIVATE "$<$<CONFIG:Debug>:${CMAKE_CURRENT_SOURCE_DIR}/dbgsrc.cpp>")

File Sets - New in version 3.23.

    target_sources(<target>
      [<INTERFACE|PUBLIC|PRIVATE>
       [FILE_SET <set> [TYPE <type>] [BASE_DIRS <dirs>...] [FILES <files>...]]...
      ]...)

Adds a file set to a target, or adds files to an existing file set. 
Targets have zero or more named file sets. Each file set has a name, 
a type, a scope of INTERFACE, PUBLIC, or PRIVATE, one or more base directories, 
and files within those directories. The acceptable types include:

- HEADERS

    Sources intended to be used via a language's #include mechanism.

- CXX_MODULES

    Note Experimental. Gated by CMAKE_EXPERIMENTAL_CXX_MODULE_CMAKE_API
    Sources which contain C++ interface module or partition units 
    (i.e., those using the export keyword). 
    This file set type may not have an INTERFACE scope except on IMPORTED targets.

- CXX_MODULE_HEADER_UNITS

    Note Experimental. Gated by CMAKE_EXPERIMENTAL_CXX_MODULE_CMAKE_API
    C++ header sources which may be imported by other C++ source code. 
    This file set type may not have an INTERFACE scope except on IMPORTED targets.

    The optional default file sets are named after their type. 
    The target may not be a custom target or FRAMEWORK target.

    Files in a PRIVATE or PUBLIC file set are marked as source files for 
    the purposes of IDE integration. Additionally, files in HEADERS file sets 
    have their HEADER_FILE_ONLY property set to TRUE. 
    Files in an INTERFACE or PUBLIC file set can be installed with the 
    install(TARGETS) command, and exported with the install(EXPORT) 
    and export() commands.

    Each target_sources(FILE_SET) entry starts with INTERFACE, PUBLIC, or 
    PRIVATE and accepts the following arguments:

- FILE_SET <set>

    The name of the file set to create or add to. It must contain only letters, 
    numbers and underscores. Names starting with a capital letter are reserved 
    for built-in file sets predefined by CMake. The only predefined set names 
    are those matching the acceptable types. All other set names must not start 
    with a capital letter or underscore.

- TYPE <type>

    Every file set is associated with a particular type of file. Only types 
    specified above may be used and it is an error to specify anything else. 
    As a special case, if the name of the file set is one of the types, the 
    type does not need to be specified and the TYPE <type> arguments can be 
    omitted. For all other file set names, TYPE is required.

- BASE_DIRS <dirs>...

    An optional list of base directories of the file set. Any relative path 
    is treated as relative to the current source directory 
    (i.e. CMAKE_CURRENT_SOURCE_DIR). If no BASE_DIRS are specified when the 
    file set is first created, the value of CMAKE_CURRENT_SOURCE_DIR is added. 
    This argument supports generator expressions.

    No two base directories for a file set may be sub-directories of each other. 
    This requirement must be met across all base directories added to a file set, 
    not just those within a single call to target_sources().

- FILES <files>...

    An optional list of files to add to the file set. Each file must be in 
    one of the base directories, or a subdirectory of one of the base directories. 
    This argument supports generator expressions.
    If relative paths are specified, they are considered relative to 

    CMAKE_CURRENT_SOURCE_DIR at the time target_sources() is called. 
    An exception to this is a path starting with $<. Such paths are treated as 
    relative to the target's source directory after evaluation of generator expressions.

    The following target properties are set by target_sources(FILE_SET), but 
    they should not generally be manipulated directly:

For file sets of type HEADERS:

    HEADER_SETS
    INTERFACE_HEADER_SETS
    HEADER_SET
    HEADER_SET_<NAME>
    HEADER_DIRS
    HEADER_DIRS_<NAME>

For file sets of type CXX_MODULES:

    CXX_MODULE_SETS
    INTERFACE_CXX_MODULE_SETS
    CXX_MODULE_SET
    CXX_MODULE_SET_<NAME>
    CXX_MODULE_DIRS
    CXX_MODULE_DIRS_<NAME>

For file sets of type CXX_MODULE_HEADER_UNITS:

    CXX_MODULE_HEADER_UNIT_SETS
    INTERFACE_CXX_MODULE_HEADER_UNIT_SETS
    CXX_MODULE_HEADER_UNIT_SET
    CXX_MODULE_HEADER_UNIT_SET_<NAME>
    CXX_MODULE_HEADER_UNIT_DIRS
    CXX_MODULE_HEADER_UNIT_DIRS_<NAME>

Target properties related to include directories are also modified by 
target_sources(FILE_SET) as follows:

INCLUDE_DIRECTORIES

    If the TYPE is HEADERS or CXX_MODULE_HEADER_UNITS, and the scope of 
    the file set is PRIVATE or PUBLIC, all of the BASE_DIRS of the file set 
    are wrapped in $<BUILD_INTERFACE> and appended to this property.

INTERFACE_INCLUDE_DIRECTORIES

    If the TYPE is HEADERS or CXX_MODULE_HEADER_UNITS, and the scope of 
    the file set is INTERFACE or PUBLIC, all of the BASE_DIRS of the file set 
    are wrapped in $<BUILD_INTERFACE> and appended to this property.


## 🐤🐥 generator expressions 生成器表达式
- https://cmake.org/cmake/help/latest/manual/cmake-generator-expressions.7.html

生成器表达式 Generator expressions 可以在许多目标属性上下文中使用，如：

    LINK_LIBRARIES, 
    INCLUDE_DIRECTORIES, 
    COMPILE_DEFINITIONS

    target_link_libraries(), 
    target_include_directories(), 
    target_compile_definitions()

它们通常用于条件链接、条件编译，或有条件的目录引用等等。这些条件可能基于构建配置，目标属性，
平台信息或其它。

生成器表达式语法 `$<...>`，可以进行嵌套使用。

基于 0 或 1 的布尔生成器表达和条件表达：

    $<condition:true_string>
    # Evaluates to true_string if condition is 1. Otherwise evaluates to the empty string.

    $<IF:condition,true_string,false_string>
    # New in version 3.8.
    # Evaluates to true_string if condition is 1. Otherwise evaluates to false_string.

    $<$<CONFIG:Debug>:DEBUG_MODE>
    # expands to DEBUG_MODE when the Debug configuration is used, and otherwise expands to the empty string.

Logical Operators

    $<BOOL:string>
    # Converts string to 0 or 1. Evaluates to 0 if any of the following is true:
    # - string is empty,
    # - string is a case-insensitive equal of 0, FALSE, OFF, N, NO, IGNORE, or NOTFOUND, or
    # - string ends in the suffix -NOTFOUND (case-sensitive).
    # - Otherwise evaluates to 1.

    $<AND:conditions>
    # Evaluates to 1 if all conditions are 1. Otherwise evaluates to 0.
    # where conditions is a comma-separated list of boolean expressions. 

    $<OR:conditions>
    # Evaluates to 1 if at least one of the conditions is 1. Otherwise evaluates to 0.
    # where conditions is a comma-separated list of boolean expressions. 

    $<NOT:condition>
    # 0 if condition is 1, else 1.

String Comparisons

    $<STREQUAL:string1,string2>
    # 1 if string1 and string2 are equal, else 0. The comparison is case-sensitive.

    $<STREQUAL:$<UPPER_CASE:${foo}>,"BAR"> # "1" if ${foo} is any of "BAR", "Bar", "bar", ...
    $<EQUAL:value1,value2>
    # 1 if value1 and value2 are numerically equal, else 0.

    $<IN_LIST:string,list>
    # New in version 3.12.
    # 1 if string is member of the semicolon-separated list, else 0. Uses case-sensitive comparisons.

    $<VERSION_LESS:v1,v2>
    # 1 if v1 is a version less than v2, else 0.
    
    $<VERSION_GREATER:v1,v2>
    # 1 if v1 is a version greater than v2, else 0.
    
    $<VERSION_EQUAL:v1,v2>
    # 1 if v1 is the same version as v2, else 0.
    
    $<VERSION_LESS_EQUAL:v1,v2>
    # New in version 3.7.
    # 1 if v1 is a version less than or equal to v2, else 0.

    $<VERSION_GREATER_EQUAL:v1,v2>
    # New in version 3.7.
    # 1 if v1 is a version greater than or equal to v2, else 0.


String-Valued Generator Expressions

    include_directories(/usr/include/$<CXX_COMPILER_ID>/)
    # expands to /usr/include/GNU/ or /usr/include/Clang/ etc

    $<$<VERSION_LESS:$<CXX_COMPILER_VERSION>,4.2.0>:OLD_COMPILER>
    # expands to OLD_COMPILER if the CMAKE_CXX_COMPILER_VERSION is less than 4.2.0.

    -I$<JOIN:$<TARGET_PROPERTY:INCLUDE_DIRECTORIES>, -I>
    # generates a string of the entries in the INCLUDE_DIRECTORIES target property with each entry preceded by -I.

    set(prop "$<TARGET_PROPERTY:INCLUDE_DIRECTORIES>") # helper variable
    $<$<BOOL:${prop}>:-I$<JOIN:${prop}, -I>>
    # join INCLUDE_DIRECTORIES list if there has item

Escaped Characters

    $<ANGLE-R>  # A literal >
    $<COMMA>    # A literal ,
    $<SEMICOLON>    # A literal ;

String Transformations

    $<JOIN:list,string>
    # Joins the list with the content of string.

    $<REMOVE_DUPLICATES:list>
    # New in version 3.15.
    # Removes duplicated items in the given list.

    $<FILTER:list,INCLUDE|EXCLUDE,regex>
    # New in version 3.15.
    # Includes or removes items from list that match the regular expression regex.

    $<LOWER_CASE:string>
    # Content of string converted to lower case.

    $<UPPER_CASE:string>
    # Content of string converted to upper case.

    $<GENEX_EVAL:expr>
    # New in version 3.12.
    # Content of expr evaluated as a generator expression in the current context.

    $<TARGET_GENEX_EVAL:tgt,expr>
    # New in version 3.12.
    # Content of expr evaluated as a generator expression in the context of tgt target.


Variable Queries

    $<CONFIG>
    # Configuration name.

    $<CONFIGURATION>
    # Configuration name. Deprecated since CMake 3.0. Use CONFIG instead.

    $<PLATFORM_ID>
    ＃ The current system's CMake platform id. See also the CMAKE_SYSTEM_NAME variable.

    $<C_COMPILER_ID>
    The CMake's compiler id of the C compiler used. See also the CMAKE_<LANG>_COMPILER_ID variable.

    $<CXX_COMPILER_ID>
    The CMake's compiler id of the CXX compiler used. See also the CMAKE_<LANG>_COMPILER_ID variable.

    $<COMPILE_LANGUAGE>
    New in version 3.3.

    The compile language of source files when evaluating compile options. See the related boolean expression $<COMPILE_LANGUAGE:language> for notes about the portability of this generator expression.

    $<LINK_LANGUAGE>
    New in version 3.18.

    The link language of target when evaluating link options. See the related boolean expression $<LINK_LANGUAGE:language> for notes about the portability of this generator expression.





## 🐤🐥 Sring 处理
- https://cmake.org/cmake/help/latest/command/string.html

CMake 字符串处理能力很强大，包括正则表达式工具，可以用来查找、替换，也可以生成指定特征的字符串：

    Search and Replace
      string(FIND <string> <substring> <out-var> [...])
      string(REPLACE <match-string> <replace-string> <out-var> <input>...)
      string(REGEX MATCH <match-regex> <out-var> <input>...)
      string(REGEX MATCHALL <match-regex> <out-var> <input>...)
      string(REGEX REPLACE <match-regex> <replace-expr> <out-var> <input>...)

    Manipulation
      string(APPEND <string-var> [<input>...])
      string(PREPEND <string-var> [<input>...])
      string(CONCAT <out-var> [<input>...])
      string(JOIN <glue> <out-var> [<input>...])
      string(TOLOWER <string> <out-var>)
      string(TOUPPER <string> <out-var>)
      string(LENGTH <string> <out-var>)
      string(SUBSTRING <string> <begin> <length> <out-var>)
      string(STRIP <string> <out-var>)
      string(GENEX_STRIP <string> <out-var>)
      string(REPEAT <string> <count> <out-var>)

    Comparison
      string(COMPARE <op> <string1> <string2> <out-var>)

    Hashing
      string(<HASH> <out-var> <input>)

    Generation
      string(ASCII <number>... <out-var>)
      string(HEX <string> <out-var>)
      string(CONFIGURE <string> <out-var> [...])
      string(MAKE_C_IDENTIFIER <string> <out-var>)
      string(RANDOM [<option>...] <out-var>)
      string(TIMESTAMP <out-var> [<format string>] [UTC])
      string(UUID <out-var> ...)
    
    JSON - New in version 3.19.
      string(JSON <out-var> [ERROR_VARIABLE <error-var>]
             {GET | TYPE | LENGTH | REMOVE}
             <json-string> <member|index> [<member|index> ...])
      string(JSON <out-var> [ERROR_VARIABLE <error-var>]
             MEMBER <json-string>
             [<member|index> ...] <index>)
      string(JSON <out-var> [ERROR_VARIABLE <error-var>]
             SET <json-string>
             <member|index> [<member|index> ...] <value>)
      string(JSON <out-var> [ERROR_VARIABLE <error-var>]
             EQUAL <json-string1> <json-string2>)


## 🐤🐥 List 列表处理
- https://cmake.org/cmake/help/latest/command/list.html

列表是 CMake 中常用的命令，列表在 CMake 无处不在，可以配合 foreacch 命令使用：

    Reading
      list(LENGTH <list> <out-var>)
      list(GET <list> <element index> [<index> ...] <out-var>)
      list(JOIN <list> <glue> <out-var>)
      list(SUBLIST <list> <begin> <length> <out-var>)

    Search
      list(FIND <list> <value> <out-var>)

    Modification
      list(APPEND <list> [<element>...])
      list(FILTER <list> {INCLUDE | EXCLUDE} REGEX <regex>)
      list(INSERT <list> <index> [<element>...])
      list(POP_BACK <list> [<out-var>...])
      list(POP_FRONT <list> [<out-var>...])
      list(PREPEND <list> [<element>...])
      list(REMOVE_ITEM <list> <value>...)
      list(REMOVE_AT <list> <index>...)
      list(REMOVE_DUPLICATES <list>)
      list(TRANSFORM <list> <ACTION> [...])

    Ordering
      list(REVERSE <list>)
      list(SORT <list> [...])

示例：

    set(my_var_name "a")
    set(${my_var_name} "some value") # Assign value to variable 'a'
    set(name_suffix "b")
    list(APPEND list_${name_suffix} "other value") # Appends to a list 'list_b'.


## 🐤🐥 if 条件判断
- https://cmake.org/cmake/help/latest/command/if.html

语法：

    if(condition)
        #...
    elseif(condition)
        #...
    else()
        #...
    endif()

可用的判断方式有 EQUAL, LESS, LESS_EQUAL, GREATER, GREATER_EQUAL, STREQUAL, 
STRLESS, STRLESS_EQUAL, STRGREATER, STRGREATER_EQUAL, VERSION_EQUAL, 
VERSION_LESS, VERSION_LESS_EQUAL, VERSION_GREATER, VERSION_GREATER_EQUAL, 
MATCHES，还有布尔值判断 NOT, AND, OR。

Basic Expressions

    if(<constant>)
    if(<variable>)
    if(<string>)

如果常量 constant 的值是真值常量时为条件成立： 1, ON, YES, TRUE, Y, 或者 non-zero number。
如果值是假值常量则不成立： 0, OFF, NO, FALSE, N, IGNORE, NOTFOUND, 空字符串或后缀为 
-NOTFOUND。

如果变量 variable 的值不是一个真值常量则条件成立，不则不成立，包括未定义变量。注意，macro 参数
不是变量，而 Environment variables 不能用于测试，所以 if(ENV{some_var}) 这样的表达总是不成立。

对于双引号的字符串 string，条件总是不成立，除非字符串值是真值常量，或者 Policy CMP0054 策略
没有设置为 NEW 并且字符串的值恰好是受 CMP0054 行为影响的变量名。

以下代码中的条件判断等价 if(var1)，变量扩展后得到 var1，最后 OFF 导致不成立：

    set(var1 OFF)
    set(var2 "var1")
    if(${var2})

Logic Operators

    if(NOT <condition>)
    if(<cond1> AND <cond2>)
    if(<cond1> OR <cond2>)
    if((condition) AND (condition OR (condition)))

Comparisons

    if(<variable|string> LESS <variable|string>)
    if(<variable|string> GREATER <variable|string>)
    if(<variable|string> EQUAL <variable|string>)

    if(<variable|string> STRLESS <variable|string>)
    if(<variable|string> STRGREATER <variable|string>)
    if(<variable|string> STREQUAL <variable|string>)

    if(<variable|string> MATCHES regex) 
    # New in version 3.9: () groups are captured in CMAKE_MATCH_<n> variables.

    if(<variable|string> LESS_EQUAL <variable|string>)
    if(<variable|string> GREATER_EQUAL <variable|string>)
    if(<variable|string> STRLESS_EQUAL <variable|string>)
    if(<variable|string> STRGREATER_EQUAL <variable|string>)
    # New in version 3.7

Existence Checks

    if(COMMAND command-name)
    # True if the given name is a command, macro or function that can be invoked.

    if(POLICY policy-id)
    # True if the given name is an existing policy (of the form CMP<NNNN>).

    if(TARGET target-name)
    # True if the given name is an existing logical target name

    if(TEST test-name)
    # True if the given name is an existing test name created by the add_test() command.

    if(DEFINED <name>|CACHE{<name>}|ENV{<name>})
    # True if a variable, cache variable or environment variable with given <name> is defined.
    # Note that macro arguments are not variables.

    if(<variable|string> IN_LIST <variable>)

Version Comparisons

    if(<variable|string> VERSION_LESS <variable|string>)
    if(<variable|string> VERSION_GREATER <variable|string>)
    if(<variable|string> VERSION_EQUAL <variable|string>)

    if(<variable|string> VERSION_LESS_EQUAL <variable|string>)
    if(<variable|string> VERSION_GREATER_EQUAL <variable|string>)
    # New in version 3.7

version format is major[.minor[.patch[.tweak]]], omitted components are treated as zero).


示范：

    if(VAR1 MATCHES "Hello")
        message("this is hello")
        message("this is hello2")
    elseif(VAR1 MATCHES "world")
        message("this is world")
        message("this is world2")
    endif()


    option(BUILD_SHARED_LIBS "Build shared libraries" ON)

    if (BUILD_SHARED_LIBS)
        set(_GLFW_BUILD_DLL 1)
    endif()

    if (BUILD_SHARED_LIBS AND UNIX)
        # On Unix-like systems, shared libraries can use the soname system.
        set(GLFW_LIB_NAME glfw)
    else()
        set(GLFW_LIB_NAME glfw3)
    endif()


    if(NOT (HAVE_LOG AND HAVE_EXP))
      unset(HAVE_LOG CACHE)
      unset(HAVE_EXP CACHE)
      set(CMAKE_REQUIRED_LIBRARIES "m")
      check_symbol_exists(log "math.h" HAVE_LOG)
      check_symbol_exists(exp "math.h" HAVE_EXP)
      if(HAVE_LOG AND HAVE_EXP)
        target_link_libraries(MathFunctions PRIVATE m)
      endif()
    endif()


## 🐤🐥 foreach 循环处理
- https://cmake.org/cmake/help/latest/command/foreach.html

语法：

    foreach(<loop_var> <items>)
      <commands>
    endforeach()

    foreach(<loop_var> RANGE <stop>)

    foreach(<loop_var> RANGE <start> <stop> [<step>])

    foreach(<loop_var> IN [LISTS [<lists>]] [ITEMS [<items>]])

    foreach(<loop_var>... IN ZIP_LISTS <lists>)

可以使用 break() 和 continue()。

示范：

    set(A 0;1)
    set(B 2 3)
    set(C "4 5")
    set(D 6;7 8)
    set(E "")
    foreach(X IN LISTS A B C D E)
        message(STATUS "X=${X}")
    endforeach()

    # OUTPUT
    -- X=0
    -- X=1
    -- X=2
    -- X=3
    -- X=4 5
    -- X=6
    -- X=7
    -- X=8

配合列表使用：

    list(APPEND English one two three four)
    list(APPEND Bahasa satu dua tiga)

    foreach(num IN ZIP_LISTS English Bahasa)
        message(STATUS "num_0=${num_0}, num_1=${num_1}")
    endforeach()

    foreach(en ba IN ZIP_LISTS English Bahasa)
        message(STATUS "en=${en}, ba=${ba}")
    endforeach()

    # OUTPUT
    -- num_0=one, num_1=satu
    -- num_0=two, num_1=dua
    -- num_0=three, num_1=tiga
    -- num_0=four, num_1=
    -- en=one, ba=satu
    -- en=two, ba=dua
    -- en=three, ba=tiga
    -- en=four, ba=

配合 file 命令和正则表达式从文件路径中提取文件名

    FILE(GLOB_RECURSE SRC_FILES "*.c" "*.cc" "*.cpp" "*.h" "*.hpp")
    FOREACH(FILE_PATH ${SRC_FILES})
        MESSAGE(${FILE_PATH})
        STRING(REGEX REPLACE ".+/(.+)\\..*" "\\1" FILE_NAME ${FILE_PATH})
        MESSAGE(${FILE_NAME})
    ENDFOREACH(FILE_PATH)

获取某文件夹下的所有符合 `*.cpp` 的文件名并存入 USER_LIBS_PATH 变量中，GLOB_RECURSE 表示枚举子目录：

    file(GLOB USER_LIBS_PATH ./src/*.cpp)
    file(GLOB_RECURSE USER_LIBS_PATH ./src/*.cpp)

注意正则表达式的使用：

    string(REGEX REPLACE ".*/\(.*\)" "\\1" CURDIR ${CMAKE_CURRENT_SOURCE_DIR})

配合条件判断使用：

    macro(AddDemo name)
        message(STATUS "AddDemo = [${name}]")
        add_executable(${name} ${ARGN})
    endmacro()

    message("DEMOS LIST:")
    aux_source_directory("src/" src)
    foreach(item ${src})
        string(REGEX REPLACE ".*/(.*)\\..*$" "\\1" name ${item})
        if(name STREQUAL "bin")
            message(STATUS "----------------------> ${item}")
            continue()
        endif(name STREQUAL "bin")
        AddDemo(${name} ${item})
    endforeach(item)



## 🐤🐥 add_custom_command
- https://cmake.org/cmake/help/latest/command/add_custom_command.html
- https://cmake.org/cmake/help/latest/manual/cmake-commands.7.html
- https://cmake.org/cmake/help/latest/command/build_command.html

Deprecated Commands 

    load_command()

向构建过程添加自定义构造规则，执行自定义命令，add_custom_command 有两种使用方式:

- Generating Files 生成文件
- Build Events 构建事件

在构建过程中生成文件 Generating Files，输出文件与 CMakeLists.txt 同目录：

    add_custom_command(OUTPUT output1 [output2 ...]
                       COMMAND command1 [ARGS] [args1...]
                       [COMMAND command2 [ARGS] [args2...] ...]
                       [MAIN_DEPENDENCY depend]
                       [DEPENDS [depends...]]
                       [BYPRODUCTS [files...]]
                       [IMPLICIT_DEPENDS <lang1> depend1
                                        [<lang2> depend2] ...]
                       [WORKING_DIRECTORY dir]
                       [COMMENT comment]
                       [DEPFILE depfile]
                       [JOB_POOL job_pool]
                       [VERBATIM] [APPEND] [USES_TERMINAL]
                       [COMMAND_EXPAND_LISTS])

构建事件 Build Events 中添加自定义命令，比如 library 和可执行文件在构建前后执行的命令：

    add_custom_command(TARGET <target>
                       PRE_BUILD | PRE_LINK | POST_BUILD
                       COMMAND command1 [ARGS] [args1...]
                       [COMMAND command2 [ARGS] [args2...] ...]
                       [BYPRODUCTS [files...]]
                       [WORKING_DIRECTORY dir]
                       [COMMENT comment]
                       [VERBATIM] [USES_TERMINAL]
                       [COMMAND_EXPAND_LISTS])

执行时机有三种，但时目标已经构建的情况下不会执行命令：

- PRE_BUILD 构建前执行；
- PRE_LINK 编译后执行；
- POST_BUILD 构建后执行；

示例:

    add_custom_target(Test1 ALL DEPENDS ${src})

    add_custom_command(TARGET Test1
        PRE_BUILD 
        COMMAND echo "executing a fake command"
        COMMENT "This command will be executed before building target Test1"
        file(COPY /opt/foo/lib/libfoo.so DESTINATION lib FOLLOW_SYMLINK_CHAIN)
        COMMAND ${CMAKE_COMMAND} -E copy 
            "${CMAKE_CURRENT_BINARY_DIR}/${CMAKE_CFG_INTDIR}/misc05_picking_slow_easy${CMAKE_EXECUTABLE_SUFFIX}" "${CMAKE_CURRENT_SOURCE_DIR}/misc05_picking/"
        COMMAND ${CMAKE_COMMAND} -E copy_if_different
            "$<$<CONFIG:Release>:${Plugin_Runtime_Release_DLL_FILES}>"  
            "$<$<CONFIG:Debug>:${Plugin_Runtime_Debug_DLL_FILES}>" 
            "${PROJECT_BINARY_DIR}/$<$<CONFIG:Release>:Release>$<$<CONFIG:Debug>:Debug>/"   
    )

注意，拷贝命令不支持能配符，但可以使用多个文件列表：

    COMMAND ${CMAKE_COMMAND} -E copy_if_different "../tutorial04/shader.fs" "../tutorial04/shader.vs" "${EXECUTABLE_OUTPUT_PATH}"

注意，CMAKE_CURRENT_BINARY_DIR 和以下两个目录设置是不同的：

    set(EXECUTABLE_OUTPUT_PATH "../bin")
    set(LIBRARY_OUTPUT_PATH "${PROJECT_SOURCE_DIR}/lib")



## 🐤🐥 CMake Ctest
- [CppUnit 单元测试](http://sourceforge.net/projects/cppunit)
- [Boost 单元测试框架](https://www.ibm.com/developerworks/cn/aix/library/au-ctools1_boost/index.html)
- [Google C++ Testing Framework 简介](https://www.ibm.com/developerworks/cn/aix/library/au-googletestingframework.html)
- [Google Test](https://github.com/google/googletest)

Demo目录结构如下：

    Test/
    ├── add.cpp
    └── CMakeLists.txt

add.cpp

    #include <iostream>
    #include <stdlib.h>
    int main(int argc, char *argv[])
    {
        if (argc != 3) {
            std::cout << "parameter error" << std::endl;
            return -1; 
        }   
     
        int a, b;
        a = atoi(argv[1]);
        b = atoi(argv[2]);
        std::cout << a << " + " << b << " is " << a + b << std::endl;
        return 0;
    }

CMakeLists.txt

    CMAKE_MINIMUM_REQUIRED(VERSION 3.3)
    ADD_EXECUTABLE(add add.cpp)
    enable_testing()
    ADD_TEST(NAME test_add_2_3 COMMAND add 2 3)
    SET_TESTS_PROPERTIES(test_add_2_3
        PROPERTIES PASS_REGULAR_EXPRESSION "5")
    ADD_TEST(NAME test_add_4_5 COMMAND add 4 5)
    SET_TESTS_PROPERTIES(test_add_4_5
        PROPERTIES PASS_REGULAR_EXPRESSION "9")

在 CMakeLists.txt 里面，我们添加了两个测试用例。

TEST PROPERTIES 包括 WILL_FAIL、PASS_REGULAR_EXPRESSION、FAIL_REGULAR_EXPRESSION。代码中用到的是 PASS_REGULAR_EXPRESSION，测试输出将根据指定的正则表达式列表进行检查，并且至少有一个正则表达式必须匹配，否则测试失败。

在 Test 目录下建立 build 目录：

    cd build && cmake .., make, make test

像上面的方式写测试用例还是比较繁琐，还可以定义宏来简化：

    CMAKE_MINIMUM_REQUIRED(VERSION 3.3)
    ADD_EXECUTABLE(add add.cpp)
    enable_testing()
     
    macro(do_test ARG1 ARG2 RESULT)
        ADD_TEST(NAME test_add_${ARG1}_${ARG2} COMMAND add ${ARG1} ${ARG2})
        SET_TESTS_PROPERTIES(test_add_${ARG1}_${ARG2}
            PROPERTIES PASS_REGULAR_EXPRESSION ${RESULT})
    endmacro(do_test)
    do_test(2 3 5)
    do_test(4 5 9)

对于输出多选的内容，替换 `\n` 为 `[\r\n\t ]*`，或因为不知道系统使用什么换行符号，用更宽松的规则。

还要注意输出内容中，和正则表达式符号相同的内容，比如 + 号和括号就需要转义：

    "str3 : Hello[\n\r]*str1 \\+ str2 : HelloWorld[\n\r]*str3.size\\(\\) :  10[\n\r]*")

    str3 : Hello
    str1 + str2 : HelloWorld
    str3.size() :  10


配合 CPPUNIT 使用如下：

    #include <cppunit/TestResult.h>
    #include <cppunit/TestResultCollector.h>
    #include <cppunit/TextOutputter.h>
    #include <cppunit/TestRunner.h>
    #include <cppunit/extensions/HelperMacros.h>
     
    class StringTest : public CppUnit::TestFixture
    {
        CPPUNIT_TEST_SUITE(StringTest);
        CPPUNIT_TEST(testSwap);
        CPPUNIT_TEST(testFind);
        CPPUNIT_TEST_SUITE_END();
    public:
        void setUp()
        {   
            m_str1 = "Hello, world";
            m_str2 = "Hi, cppunit";
        }   
        void tearDown()
        {   
     
        }   
        void testSwap()
        {   
            std::string str1 = m_str1;
            std::string str2 = m_str2;
            m_str1.swap(m_str2);
            CPPUNIT_ASSERT(m_str1 == str2);
            CPPUNIT_ASSERT(m_str2 == str2);
        }   
        void testFind()
        {   
            int pos1 = m_str1.find(',');
            int pos2 = m_str2.rfind(',');
            CPPUNIT_ASSERT_EQUAL(5, pos1);
            CPPUNIT_ASSERT_EQUAL(2, pos2);
        }   
    protected:
        std::string m_str1;
        std::string m_str2;
    };
     
    CPPUNIT_TEST_SUITE_REGISTRATION(StringTest);
    int main(int argc, char *argv[])
    {
        CppUnit::TestResult r;
        CppUnit::TestResultCollector rc;
        r.addListener(&rc);
     
        CppUnit::TestRunner runner;
        runner.addTest(CppUnit::TestFactoryRegistry::getRegistry().makeTest());
        runner.run(r);
     
        CppUnit::TextOutputter o(&rc, std::cout);
        o.write();
     
        return rc.wasSuccessful()?0:-1;
    }

测试是软件开发过程中极其重要的一环，详尽周密的测试能够减少软件BUG，提高软件品质。测试包括单元测试、系统测试等。其中单元测试是指针对软件功能单元所作的测试，这里的功能单元可以是一个类的属性或者方法，测试的目的是看这些基本单元是否工作正常。由于单元测试的内容很基础，因此可以看作是测试工作的第一环，该项工作一般由开发人员自行完成。如果条件允许，单元测试代码的开发应与程序代码的开发同步进行。

虽然不同程序的单元测试代码不尽相同，但测试代码的框架却非常相似，于是便出现了一些单元测试类库，CppUnit便是其中之一。

CppUnit 是 XUnit 中的一员，XUnit 是一个大家族，还包括 JUnit 和 PythonUnit 等。CppUnit 简单实用，学习和使用起来都很方便，网上已有一些文章对其作介绍，但本文更着重于讲解其中的基本概念和使用方法，以帮助初次接触CppUnit的人员快速入门。



# 🐣 MSVC CL.EXE 编译器
- [MSVC 构建参考手册](https://docs.microsoft.com/en-us/cpp/build/reference/c-cpp-building-reference)
- [CL.EXE 选项参考](https://docs.microsoft.com/en-us/cpp/build/reference/compiler-options-listed-by-category)
- [LINK.EXE 选项参考](https://docs.microsoft.com/en-us/cpp/build/reference/linker-options)
- [MSVC Build Tools](https://docs.microsoft.com/zh-cn/cpp/build/reference/c-cpp-build-tools?view=vs-2019)
- [使用资源文件](https://docs.microsoft.com/zh-cn/cpp/windows/working-with-resource-files?view=vs-2019)
- [Entry Point symbol](https://docs.microsoft.com/en-us/cpp/build/reference/entry-entry-point-symbol?view=vs-2019)
- [C++ 标准库](https://docs.microsoft.com/zh-cn/cpp/cpp/c-cpp-language-and-standard-libraries?view=vs-2019)
- C Runtime library (CRT) reference https://docs.microsoft.com/en-us/cpp/c-runtime-library/c-run-time-library-reference?view=msvc-170
- /MD /MT /LD (Use Run-Time Library) https://docs.microsoft.com/en-us/cpp/build/reference/md-mt-ld-use-run-time-library?view=msvc-170

安装 Microsoft Visual Studio 社区版即可获取 MSVC 编译套件，套件自带的编译程序有以下这些：

|   命令程序  |               使用示范              |                      功能                     |
|-------------|-------------------------------------|-----------------------------------------------|
| cl.exe      | cl /c /Fo:Test.obj Test.cpp         | 编译程序                                      |
| link.exe    | link /out:Test.exe Test.obj         | 链接程序                                      |
| lib.exe     | lib /machine:x86 /DEF:Test.def      | 库管理程序，可生成静态库，根据 DEF 创建导入库 |
| errlook.exe |                                     | 根据错误号检索系统错误消息或模块错误消息      |
| nmake.exe   |                                     | Makefile 脚本构建工具                         |
| ml64.exe    | ml64.exe Test.asm                   | 汇编程序                                      |
| editbin.exe | editbin /SUBSYSTEM:CONSOLE Test.exe | COFF/PE 程序文件编辑器，如修改程序子系统      |
| dumpbin     | dumpbin -exports Test.dll           | COFF/PE 信息查看工具，如查看导出符号          |

Microsoft Visual C++，版本对应 C++ 标准关系如下所示：

| IDE                   | Compiler     | C++ 标准                         |
| :-------------------- | ------------ | -------------------------------- |
| Visual Studio 6       | vc6          |                                  |
| Visual Studio 2003    | vc7          |                                  |
| Visual Studio 2005    | vc8          |                                  |
| Visual Studio 2008    | vc9          |                                  |
| Visual Studio 2010    | vc10         |                                  |
| Visual Studio 2012    | vc11         | C++11 基本支持                   |
| Visual Studio 2013    | vc12         | C++11 基本支持，C++14 部分支持   |
| Visual Studio 2015    | vc14         | C++17 部分支持                   |
| Visual Studio 2017    | vc15         | C++14 完全支持，C++17 基本支持   |
| Visual Studio 2019    | vc16         | C++14 完全支持，C++17 基本支持   |

CodeBlocks 为 GCC 编译器创建工程 Debug/Release 的配置会默认使用 `-g` 调试选项和 `-O2` 优化选项，另外链接时还有 `-s` 参数对额外的符号数据进行清除，以生成更小的可执行文件。

dumpbin 还可以查看汇编代码、查看程序依赖的 DLL 模块，查看 DLL 或程序导出的符号，查看导入库的符号：

    dumpbin /disasm ..\bin\dynamicLibTest.exe
    dumpbin /imports ..\bin\dynamicLibTest.exe | findstr dll
    dumpbin /exports ..\bin\dynamicLibTest.exe
    dumpbin /symbols ..\lib\dynamicLib.lib

安装 MSVC 后可以找到以下用来自动配置环境的脚本文件：

    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Auxiliary\Build\vcvarsall.bat
    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\Tools\VsDevCmd.bat

|       配置脚本      |                  功能                 |             说明             |
|---------------------|---------------------------------------|------------------------------|
| vcvars32.bat        | @call "%~dp0vcvarsall.bat" x86 %*     | 生成 32 位程序               |
| vcvars64.bat        | @call "%~dp0vcvarsall.bat" x64 %*     | 生成 64 位程序               |
| vcvarsx86_amd64.bat | @call "%~dp0vcvarsall.bat" x86_x64 %* | 在 32 位系统下生成 64 位程序 |
| vcvarsamd64_x86.bat | @call "%~dp0vcvarsall.bat" x64_x86 %* | 在 64 位系统下生成 32 位程序 |
| vcvarsall.bat       |                                       | 配置脚本主文件               |

批处理文件中，`%~dp0` 表示从当前文件的路径中提取目录部分，`%~nx0` 表示批处理本身的名字。呵呵，
怪诞的 BAT 批处理，M$ 的血统就是要将简单的事件搞复杂。


C 运行时库（CRT）的 Microsoft 实现的引用，有时称为通用 CRT。C 运行时库 (CRT) 是集成了 
ISO C99 标准库的 C++ 标准库。 实现 CRT 的 Visual C++ 库支持用于 .NET 开发的本机代码
开发以及本机和托管混合代码。 所有版本的 CRT 都支持多线程开发。 大多数的库都支持通过静态链接
将库直接链接到代码中，或通过动态链接让代码使用常用 DLL 文件。

从 Visual Studio 2015 开始，CRT 已被重构为新的二进制文件。 通用 CRT (UCRT) 包含通过标准
C99 CRT 库导出的函数和全局函数。 UCRT 现为 Windows 组件，并作为 Windows 10 的一部分提供。 
静态库、DLL 导入库和 UCRT 的头文件现在 Windows 10 SDK 中提供。 安装 Visual C++ 时，
Visual Studio 安装程序将安装使用 UCRT 所需 Windows 10 SDK 的子集。可以在 VS 2015 及
更高版本支持的任何 Windows 版本上使用 UCRT。可以使用 vcredist 重新分发它，以便支持
Windows 10 以外的 Windows 版本。

下表列出了实现 UCRT 的库。

| 选项 |       预处理器指令      |      库      |  关联的 DLL   |             特征             |
|------|-------------------------|--------------|---------------|------------------------------|
| /MT  | `_MT`                   | libucrt.lib  | 无            | 将 UCRT 静态链接到你的代码。 |
| /MTd | `_DEBUG`, `_MT`         | libucrtd.lib | 无            | UCRT 静态链接库的调试版本。  |
| /MD  | `_MD`, `_DLL`           | ucrt.lib     | ucrtbase.dll  | UCRT 的 DLL 导入库。         |
| /MDd | `_DEBUG`, `_MD`, `_DLL` | ucrtd.lib    | ucrtbased.dll | UCRT 调试版本的 DLL 导入库。 |

vcruntime 库包含 Visual C++ CRT 实现特定的代码，例如异常处理和调试支持、运行时检查和类型信息、
实现的详细信息和某些扩展的库函数。 此库特定于所用编译器的版本。

此表列出了实现 vcruntime 库的库。

|  选项  |       预处理器指令      |        库         |     关联的 DLL      |               特征              |
|--------|-------------------------|-------------------|---------------------|---------------------------------|
| `/MT`  | `_MT`                   | libvcruntime.lib  | 无                  | 静态链接到你的代码。            |
| `/MTd` | `_MT`, `_DEBUG`         | libvcruntimed.lib | 无                  | 静态链接的调试版本。            |
| `/MD`  | `_MD`, `_DLL`           | vcruntime.lib     | vcruntime[ver].dll  | vcruntime 的 DLL 导入库。       |
| `/MDd` | `_DEBUG`, `_MD`, `_DLL` | vcruntimed.lib    | vcruntime[ver]d.dll | vcruntime 调试版的 DLL 导入库。 |

初始化 CRT 的代码是几个库中的一个，根据 CRT 库是采用静态或动态链接还是本机、托管或混合代码而定。
此代码处理 CRT 启动、内部逐线程数据初始化和终止。 它特定于所用编译器的版本。 此库始终采用动态链接，
即使使用动态链接的 UCRT 也是如此。

此表列出了实现 CRT 初始化和终止的库。

|    选项   |       预处理器指令      |      库      |                          特征                          |
|-----------|-------------------------|--------------|--------------------------------------------------------|
| /MT       | `_MT`                   | libcmt.lib   | CRT 静态链接。                                         |
| /MTd      | `_DEBUG`, `_MT`         | libcmtd.lib  | CRT 静态链接库的调试版本。                             |
| /MD       | `_MD`, `_DLL`           | msvcrt.lib   | UCRT、VCRT 一起使用 启动的静态库。                     |
| /MDd      | `_DEBUG`, `_MD`, `_DLL` | msvcrtd.lib  | UCRT、VCRT 一起使用，调试版本，静态库。                |
| /clr      |                         | msvcmrt.lib  | UCRT、VCRT 一起使用的本机和托管混合 CRT 启动的静态库。 |
| /clr      |                         | msvcmrtd.lib | UCRT、VCRT 一起使用，托管混合 CRT，调试版本，静态库。  |
| /clr:pure |                         | msvcurt.lib  | 纯托管 CRT 的已弃用静态库。                            |
| /clr:pure |                         | msvcurtd.lib | 纯托管 CRT 调试版本的已弃用静态库。 不可再发行。       |

如果从没有编译器选项给链接程序指定 C++ 运行时库，则链接程序将使用静态链接的 CRT 库：
libcmt.lib、libvcruntime.lib 和 libucrt.lib。

C++ 标准库列表：

| 选项 |       预处理器指令      |  C++ 标准库  |                    特征                    |
|------|-------------------------|--------------|--------------------------------------------|
| /MT  | `_MT`                   | libcpmt.lib  | 多线程, 静态链接                           |
| /MD  | `_MD`, `_DLL`           | msvcprt.lib  | 多线程动态链接（MSVCP[ver].dll 的导入库）  |
| /MTd | `_DEBUG`, `_MT`         | libcpmtd.lib | 多线程, 静态链接                           |
| /MDd | `_DEBUG`, `_MD`, `_DLL` | msvcprtd.lib | 多线程动态链接（MSVCP[ver]D.DLL 的导入库） |

当构建项目的发行版时，默认情况下，将链接其中一个基本 C 运行时库，libcmt、msvcmrt、msvcrt 之一。
具体取决于你选择的编译器选项（多线程、DLL、/clr)。 如果在代码中包含其中一个 C++ 标准库标头文件，
则将在编译时通过 Visual C++ 自动链接 C++ 标准库。 

    LNK2038: 检测到“RuntimeLibrary”的不匹配项值“MT_StaticRelease”不匹配值“MD_DynamicRelease”。

    LNK4098: 默认库“MSVCRT”与其他库的使用冲突；请使用 /NODEFAULTLIB:library


如果工程与依赖库的配置不一致就会出现类似这样的错误，意思是当前工程使用的是静态链接的 MD 发行配置，
而依赖库使用的是动态链接的 MT 发行配置。

- /MDd  多线程 DLL 对应 MD_DynamicDebug
- /MD   多线程 DLL 对应 MD_DynamicRelease
- /MT   多线程静态链接库 MD_StaticRelease
- /MTd  多线程静态链接库 MD_StaticDebug

在 CMake 脚本中可以配置编译参数，当然不一定有效，有可能受到工程中引用到的其它脚本影响，
在 CMakeCache 文件可以看到各种编译参数配置：

```sh
set(CMAKE_CXX_FLAGS "/MT")
set(CMAKE_CXX_FLAGS_DEBUG "/MTd")
set(CMAKE_CXX_FLAGS_RELEASE "/MT")
add_compile_options(/MT)
add_definitions("/MT")
```

编译不同的 Windows 程序用到的 C Runtime 运行库，指定错误的程序类型会导致莫名的符号无定义、
重号重复定义、找不到入口函数或其它怪异的编译错误。

如果应用程序使用多个 CRT 版本，将存在什么问题？

每个可执行映像（EXE 或 DLL）可以具有其自己静态链接的 CRT，或可以动态链接到 CRT。 静态包括在
某个映像中或某个映像动态加载的 CRT 版本取决于构建 该 CRT 时采用的工具和库。 单个进程可能会
加载多个 EXE 和 DLL 映像，每个都有其自己的 CRT。 每个 CRT 可能使用不同的分配器，可能具有
不同的内部结构布局，可能使用不同的存储排列方式。 这意味着，分配的内存、CRT 资源或跨 DLL 边界
传递的类可能会导致内存管理、内部静态使用情况或布局解释方面的问题。

例如，如果在一个 DLL 中分配类，但将其传递给另一个 DLL 或由另一个 DLL 删除，那么使用了哪个
CRT 释放器？ 导致的错误程度可以从微小到立即致命，因此强烈建议不要直接传输此类资源。

你可以使用应用程序二进制接口 (ABI) 技术避免这些问题，因为此技术被设计成稳定且版本可控。 
设计 DLL 导出接口以按值传递信息，或致力于调用方传入而非本地分配并返回给调用方的内存。 
使用封送技术复制可执行映像之间的结构化数据。 本地封装资源并仅允许通过向客户端公开的句柄或函数操作。

如果进程中的所有映像全都使用相同的 CRT 动态加载版本，则也有可能避免这些问题。 若要确保所有
组件都使用相同的 CRT 的 DLL 版本，请使用 /MD 选项，并使用相同的编译器工具集和属性设置进行构建。


在 Windows 平台运行的程序大概分为类，控制台程序和窗体程序，给链接程序指定参数后，会根据程序
类型选择链接的入口函数：

|      链接方式      |    程序类型    | C Runtime 库入口点 |    入口函数    |
|--------------------|----------------|--------------------|----------------|
| /SUBSYSTEM:CONSOLE | 控制台程序     | mainCRTStartup     | main           |
| /SUBSYSTEM:CONSOLE | 控制台程序     | wmainCRTStartup    | wmain          |
| /SUBSYSTEM:WINDOWS | GUI 程序       | WinMainCRTStartup  | WinMain        |
| /SUBSYSTEM:WINDOWS | GUI 程序       | wWinMainCRTStartup | wWinMain       |
| /DLL               | DLL 动态链接库 | _DllMainCRTStartup | DllMain [可选] |

MSVC 编译器可以指定 /NOENTRY 创建没有入口的纯资源 DLL。

以  mainCRTStartup 为例，编译器将 CRT 初始化和终止的库代码插入到程序中，对 C Runtime 
库初始化，初始化的一个重要任务就是初始化 CRT 堆，在此之前不能使用 CRT 的分配内存函数。完成
初始化后，再调用程序入口函数执行程序。

运行库包含了 C Runtime 库入口点代码，设置链接选项后，链接需要其中对应的一个库文件，否则就会
出现链接程序找不到入口的错误。一般来说，环境变量正确设置，MSVC 会自动根据编译、链接参数正确
选择 C Runtime 运行库。但是，使用命令行的编译方式有时不能正确使用运行库，这就需要手动指定其中一个。

因为链接方式使用了 */SUBSYSTEM:CONSOLE*，很多程序运行时会自带一个控制台，即使是有图形界面。
因为 Windows 控制台程序和图形界面不冲突，可以在同一个程序同时使用。

而完全使用图形界面，隐藏控制台，即不使用控制台子系统，就意味着程序需要提供 *WinMain* 作为入口。
但是，程序为了保证兼容，还是会保留 *main*，并且通过 *WinMain* 来调用标准的 C/C++ 程序入口。

入口函数原型：

```cpp
int main(int argc, char *argv[]) 

int WINAPI WinMain(
    HINSTANCE hApp, 
    HINSTANCE prevApp, 
    LPSTR cmdLine, 
    int nCMD)
{
    return main(__argc, __argv);
}

int __clrcall WinMain(
    HINSTANCE hInstance,
    HINSTANCE hPrevInstance,
    LPSTR     lpCmdLine,
    int       nShowCmd
);

BOOL WINAPI DllMain(HINSTANCE hinstDLL, DWORD fdwReason, LPVOID lpvReserved)
```

在 CMake 中可以通过以下方式设置链接选项来确定子系统：

```sh
set(CMAKE_EXE_LINKER_FLAGS "/subsystem:windows")
add_link_options("/subsystem:windows")
target_link_options(some_exe PUBLIC "/subsystem:windows")
```

这三种方式的差别在于：

- 通过 *set* 命令设置的链接标志可能会被其它命令设置的标记覆盖；
- 通过 *add_link_option* 命令设置的链接参数会被所有目标使用；
- 通过 *target_link_options* 设置的链接参数只对指定的目标有效。

以上入口的调用关系定义在 MSVC 的源代码中 \crt\src\vcruntime\exe_common.inl：

    //  * mainCRTStartup     => main
    //  * wmainCRTStartup    => wmain
    //  * WinMainCRTStartup  => WinMain
    //  * wWinMainCRTStartup => wWinMain

    //-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    //
    // Common main()/WinMain() implementation
    //
    //-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    struct __scrt_main_policy
    {
        static void set_app_type() { _set_app_type(_crt_console_app); }
    };

    struct __scrt_winmain_policy
    {
        static void set_app_type() { _set_app_type(_crt_gui_app); }
    };

    struct __scrt_enclavemain_policy
    {
        static void set_app_type() { }
    };

    struct __scrt_file_policy
    {
        static void set_fmode() { _set_fmode(_get_startup_file_mode()); }
        static void set_commode() { _commode = _get_startup_commit_mode(); }
    };

    struct __scrt_nofile_policy
    {
        static void set_fmode() { }
        static void set_commode() { }
    };

    #if defined _SCRT_STARTUP_MAIN

        using main_policy = __scrt_main_policy;
        using file_policy = __scrt_file_policy;
        using argv_policy = __scrt_narrow_argv_policy;
        using environment_policy = __scrt_narrow_environment_policy;

        static int __cdecl invoke_main()
        {
            return main(__argc, __argv, _get_initial_narrow_environment());
        }

    #elif defined _SCRT_STARTUP_WMAIN

        using main_policy = __scrt_main_policy;
        using file_policy = __scrt_file_policy;
        using argv_policy = __scrt_wide_argv_policy;
        using environment_policy = __scrt_wide_environment_policy;

        static int __cdecl invoke_main()
        {
            return wmain(__argc, __wargv, _get_initial_wide_environment());
        }

    #elif defined _SCRT_STARTUP_WINMAIN

        using main_policy = __scrt_winmain_policy;
        using file_policy = __scrt_file_policy;
        using argv_policy = __scrt_narrow_argv_policy;
        using environment_policy = __scrt_narrow_environment_policy;

        static int __cdecl invoke_main()
        {
            return WinMain(
                reinterpret_cast<HINSTANCE>(&__ImageBase),
                nullptr,
                _get_narrow_winmain_command_line(),
                __scrt_get_show_window_mode());
        }

    #elif defined _SCRT_STARTUP_WWINMAIN

        using main_policy = __scrt_winmain_policy;
        using file_policy = __scrt_file_policy;
        using argv_policy = __scrt_wide_argv_policy;
        using environment_policy = __scrt_wide_environment_policy;

        static int __cdecl invoke_main()
        {
            return wWinMain(
                reinterpret_cast<HINSTANCE>(&__ImageBase),
                nullptr,
                _get_wide_winmain_command_line(),
                __scrt_get_show_window_mode());
        }

    #elif defined _SCRT_STARTUP_ENCLAVE || defined _SCRT_STARTUP_WENCLAVE

        using main_policy = __scrt_enclavemain_policy;
        using file_policy = __scrt_nofile_policy;
        using argv_policy = __scrt_no_argv_policy;
        using environment_policy = __scrt_no_environment_policy;

    #if defined _SCRT_STARTUP_ENCLAVE
        static int __cdecl invoke_main()
        {
            return main(0, nullptr, nullptr);
        }
    #else
        static int __cdecl invoke_main()
        {
            return wmain(0, nullptr, nullptr);
        }
    #endif

    #endif


给定一段测试程序：

    #include <cstdio>

    int main()
    {
        printf("Hello!");
    }

如果配置不正确，那么执行编译时就会出错：

    >cl test.cpp
    用于 x64 的 Microsoft (R) C/C++ 优化编译器 19.26.28806 版
    版权所有(C) Microsoft Corporation。保留所有权利。

    test.cpp
    test.cpp(1): fatal error C1034: stdio.h: 不包括路径集

要结合 CMake 使用 MSVC，环境配置显得十分重要。其中 PATH、INCLUDE、LIB、LIBPATH 是很重要的环境变量，它们决定了能否找到命令程序，还有编译链接程序能否找到正确的头文件和导入库。同时，出于多构架的支持，引入导入库时也要注意正确导入 x86、x64、arm、arm64 架构的库文件：

    INCLUDE=C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\ATLMFC\include;C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\include;C:\Program Files (x86)\Windows Kits\10\Include\10.0.18362.0\ucrt\;

    LIB=C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\ATLMFC\lib\x64;C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\lib\x64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.18362.0\um\x64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.18362.0\ucrt\x64;
    
    LIBPATH=C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\ATLMFC\lib\x64;C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\lib\x64;C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\lib\x86\store\references;C:\Windows\Microsoft.NET\Framework64\v4.0.30319;

其中 /LIBPATH 叫做附加 Libpath，链接程序会在 LIB 中搜索不到库文件时，再搜索附加库目录。 Path 主要是确保编译命令和链接程序正确执行，一般指定 VC 编译器目录，还有 Windows SDK 工具目录：

    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\bin\Hostx64\x64\cl.exe
    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\bin\Hostx64\x64\link.exe
    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\bin\Hostx64\x64\cvtres.exe
    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\bin\Hostx64\x64\ml64.exe
    C:\Program Files (x86)\Windows Kits\10\bin\10.0.18362.0\x64\rc.exe

    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Current\Bin\Roslyn\csc.exe
    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Current\Bin\Roslyn\vbc.exe

    C:\Program Files (x86)\MSBuild\14.0\Bin\csc.exe
    C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe
    C:\Windows\Microsoft.NET\Framework\v4.0.30319\cvtres.exe

Roslyn 是以 API 为驱动的下一代编译器，集成在最新版的 Visual Studio 上。它开放 C# 和 Visual Basic 编译器的 API，使得开发者可以借助编译器进行解析代码文件、动态为编程语言增加功能、扩展编译器、自定义编译器动作等操作。

Roslyn 支持两种方式的动态编译：

- 源代码动态编译就是对 C# 或 VB.Net 原代码进行解析编译，源代码动态编译实现简单易于上手，但是编译效率较低，适合小量的动态编译工作和初期开发人员。
- 通过 API 创建动态程序集的方式开发难度大但是编译效率高，适合需要进行大量动态编译工作的场景，适合高级开发人员，同样以上面实现的动态程序集功能为例，

.Net 有了 Roslyn 后 C#、VB.net 也具备了脚本语言的优点，不用预先编译就能够运行，同时又具备了预编译语言的特性，执行效率更高，著名的跨平台游戏开发引擎 unity/unity3D 就已经提供了 C# 作为脚本开发语言的支持。


CL.EXE 是 32-bit Microsoft C and C++ 编译链接程序，生成 COFF - Common Object File Format 格式对象文件 .OBJ，链接生成可执行程序 .EXE 或者动态链接 DLLs。

编译时通常指定 /c 只进行编译阶段，并在链接阶段，联合 LINK.EXE 增量链接程序生成最后输出。

例如 /DLL 表示链接为动态链接库，生成程序时使用 /SUBSYSTEM 指定生成程序类型，
如 /SUBSYSTEM:WINDOWS 表示生成 GUI 程序，这样就不会有黑框，即字符界面窗口：

|          Subsystem           |             Minimum              |             Default              |
|------------------------------|----------------------------------|----------------------------------|
| BOOT_APPLICATION             | 1.0                              | 1.0                              |
| CONSOLE                      | 5.01 (x86) 5.02 (x64) 6.02 (ARM) | 6.00 (x86, x64) 6.02 (ARM)       |
| WINDOWS                      | 5.01 (x86) 5.02 (x64) 6.02 (ARM) | 6.00 (x86, x64) 6.02 (ARM)       |
| NATIVE (with DRIVER:WDM)     | 1.00 (x86) 1.10 (x64, ARM)       | 1.00 (x86) 1.10 (x64, ARM)       |
| NATIVE (without /DRIVER:WDM) | 4.00 (x86) 5.02 (x64) 6.02 (ARM) | 4.00 (x86) 5.02 (x64) 6.02 (ARM) |
| POSIX                        | 1.0                              | 19.90                            |
| EFI_APPLICATION,             | 1.0                              | 1.0                              |
| EFI_BOOT_SERVICE_DRIVER,     | =                                | =                                |
| EFI_ROM,                     | =                                | =                                |
| EFI_RUNTIME_DRIVER           | =                                | =                                |

MSVC 编译命令基本语法：

    CL [option...] file... [option | file]... [lib...] [@command-file] [/link link-opt...]

下表描述了对 CL 命令的输入。

|      条目     |                                           含义                                           |
|---------------|------------------------------------------------------------------------------------------|
| option...     | 任意个 CL 选项，适用于所有指定的源文件。 选项由前斜杠 / 或破折号 - 指定。                |
| file          | 任意个源文件或 .obj 文件或库的名称。 CL 编译源文件并将 .obj 文件和库的名称传递给链接器。 |
| 自由          | 一个或多个库名称。 CL 将这些名称传递给链接器。                                           |
| @command-file | 包含多个选项和文件名的文件。                                                             |
| /link         | 一个或多个 MSVC 链接器选项，CL 会传递给链接器。                                          |

只要命令行上的字符数不超过 1024，即操作系统规定的限制，就可以指定任意数量的选项、文件名和库名。

编译器版本确定 `_MSC_VER` 宏的对应关系如下表：

| VS 版本 | VC 版本号 | cl 版本号 | `_MSC_VER` 值 |
|---------|-----------|-----------|---------------|
|      98 | 6.x       | 12.x      |          1200 |
|    2005 | 8.x       | 14.x      |          1400 |
|    2008 | 9.x       | 15.x      |          1500 |


## 🐤🐥 MSVC & DLL
- [Exporting a class from a DLL for multiple instantiations](http://www.mingw.org/wiki/exporting_a_class_from_a_dll_for_multiple_instantiations)
- [Decorated Names](https://docs.microsoft.com/en-us/cpp/build/reference/decorated-names?view=vs-2019)
- [VC Listing file type](https://docs.microsoft.com/en-us/cpp/build/reference/fa-fa-listing-file?view=vs-2019)
- [The Secret Life of C++: Symbol Mangling](http://web.mit.edu/tibbetts/Public/inside-c/www/mangling.html)
- [C++ Name mangling](http://en.wikipedia.org/wiki/Name_mangling#Name_mangling_in_C.2B.2B)
- [GCC and MSVC C++ Demangler](http://demangler.com/)
- [MSVC and MinGW DLLs](http://www.mingw.org/wiki/MSVC_and_MinGW_DLLs)
- [Anders Norlander - reimp](http://wyw.dcweb.cn/download.asp?path=&file=reimp_new.zip)
- [Create C/C++ DLLs in Visual Studio](https://docs.microsoft.com/en-us/cpp/build/dlls-in-visual-cpp?view=vs-2019)
- [Create and use a static library](https://docs.microsoft.com/en-us/cpp/build/walkthrough-creating-and-using-a-static-library-cpp)
- [DLLs & VC++ run-time library behavior](https://docs.microsoft.com/en-us/cpp/build/run-time-library-behavior?view=vs-2019)
- [Link & Buil a DLL](https://docs.microsoft.com/en-us/cpp/build/reference/dll-build-a-dll?view=vs-2019)
- [Exporting from a DLL Using DEF Files](https://docs.microsoft.com/en-us/cpp/build/exporting-from-a-dll-using-def-files?view=vs-2019)

在 DLL 工程中，使用 dllexport 方式导出符号，和模块定义文件 DEF 导出方式，一个很大的区别就是 DEF 可以避免符号的改名。还能避免 MinGW 出现 definition is marked dllimport 错误。


MSVC 编译动态链接库使用 /LD 或 /LDd，链接参数为 /DLL。

使用 MSVC 命令行生成静态库必须分两个步骤，首先，运行编译命令并只进行编译步骤，不链接：

    cl /c /EHsc Test.cpp

编译器 Cl.exe 生成对象文件后，接下来，运行 lib 库管理器工具以链接代码创建静态库 Test.lib：

    lib Test.obj


流行的 CMake 构建 DLL 设置：

    add_library(<name> [STATIC | SHARED | MODULE]
                [EXCLUDE_FROM_ALL]
                source1 [source2 ...])

目标库的名字 name，这个名字就是输出的库文件名，在工程内全局唯一，最终编译出来的目标文件名字取决于目标平台，比如说 libname.a 或 name.lib。

- STATIC 代表静态链接库，编译的时候 link 到工程中；
- SHARED 代表动态链接库，运行时候加载；
- MODULE 是一些插件，运行时候使用 dlopen-like 的功能进行动态加载；

示范代码仓库：

- [MinGW DLL 示范工程](https://github.com/jimboyeah/demo/tree/dllDemo)
- [MSVC DLL 工程示例代码仓库](https://github.com/jimboyeah/demo/tree/cppDemos/mfcDemo)


库管理用到的 DEF 文件格式与示范：

    LIBRARY [library][BASE=address]

    NAME [application][BASE=address]

    VERSION major[.minor]

    STUB:filename

    EXPORTS
        entryname[=internal_name|other_module.exported_name] [@ordinal [NONAME] ] [ [PRIVATE] | [DATA] ]
        func2=func1
        func2=other_module.func1
        func2=other_module.#42
        exported_global DATA

    /HEAP:reserve[,commit]

    STACKSIZE reserve[,commit]

    SECTIONS
        .section_name specifier
        .rdata READ WRITE
        .rcode SHARED EXECUTE

模块定义文件 module-definition (.def) 文件示例，导出符号定义和 DLL 保持一至，在链接程序生成 DLL 时也可以指定 /DEF：

    ;Test.def
    ;Usage: lib /machine:x64 /def:"..\dynamicLib\Test.def" /out:dynamicLib.lib
    ;link to dynamicLib_d.dll
    LIBRARY dynamicLib_d
    VERSION 0.1

    EXPORTS
        ??0LibTest@@QEAA@XZ         @1
        Max             @2
        ?Pi@LibTest@@2NB              @3 DATA
        Test            @4
        PI              @5 DATA
        add             @6
        getText         @7

    ; dumpbin /EXPORTS dynamicLib_d.dll
    ;
    ; dllexport style:
    ;    ordinal hint RVA      name
    ;
    ;          1    0 00011050 ??0LibTest@@QEAA@XZ = @ILT+75(??0LibTest@@QEAA@XZ)
    ;          2    1 0001104B ?Max@LibTest@@SAHHH@Z = @ILT+70(?Max@LibTest@@SAHHH@Z)
    ;          3    2 00014000 ?PI@LibTest@@2NB = ?PI@LibTest@@2NB (public: static double const LibTest::PI)
    ;          4    3 00011078 ?Test@LibTest@@QEAAXXZ = @ILT+115(?Test@LibTest@@QEAAXXZ)
    ;          5    4 00014008 PI = PI
    ;          6    5 0001102D add = @ILT+40(add)
    ;          7    6 00011069 getText = @ILT+100(getText)
    ; DEF style:
    ;    ordinal hint RVA      name
    ;
    ;          8    0 00011113 ??0LibTest@@QEAA@XZ = @ILT+270(??0LibTest@@QEAA@XZ)
    ;          2    1 00011109 Max = @ILT+260(?Max@LibTest@@SAHHH@Z)
    ;          5    2 00018888 PI = PI
    ;          3    3 00018880 Pi = ?Pi@LibTest@@2NB (public: static double const LibTest::Pi)
    ;          4    4 0001119F Test = @ILT+410(?Test@LibTest@@QEAAXXZ)
    ;          6    5 00011069 add = @ILT+100(add)
    ;          7    6 00011172 getText = @ILT+365(getText)

使用 DEF 导出类成员是直接写成员名字，不能使用类名前缀。导出类对象是一般是通过虚函数封装实现的：

- 为 DLL 导出的每个类设计一个纯虚基类，即所有函数都是 `virtual ...{...}=0;` 格式。
- 从基类派生要导出的类，并实现每一个纯虚函数。并给 DLL 设计一个可动态导出的函数，这个函数里 return new CxxxInDll;
- 在调用 DLL 的程序里定义纯虚基类的指针，并赋予第二步返回的值。
- 动态加载、调用 DLL 里的类，这个方法在小型应用里非常有效！（在大型应用里，由于缺乏生存期控制，所以不安全）

需要补充的是：需要为每个类增加定义一个 Release 函数，函数里 delete this，不要在调用 DLL 的程序里直接 delete 第二步获得的指针。

导出类成员还要注意命名不要和现有的符号冲突，例如示例中含有一个全局的 PI 常量，如果导出的类也有一个同名的成员，那么就需要改名了。所以，要导出类的话，用 dllexport 还是比较方便的做法，上面说的这种"代理类"的方法比较复杂，本质是设计一个接口类，更深入的了解参考《COM 本质论》 的第一章内容。

类对象的构造函数编译后产生的符号可以通过 dumpbin 获取，注意 `0LibTest` 就是 LibTest 类的默认构造函数：

    >dumpbin /SYMBOLS "C:\mfcDemo\ninja\dynamicLib\CMakeFiles\dynamicLib_d.dir\lib.cpp.obj" | findstr "LibTest"
    00E 00000000 SECT4  notype       External     | ?Pi@LibTest@@2NB (public: static double const LibTest::Pi)
    093 00000000 SECT9  notype ()    External     | ??0LibTest@@QEAA@XZ (public: __cdecl LibTest::LibTest(void))
    094 00000000 SECT18 notype ()    External     | ?Test@LibTest@@QEAAXXZ (public: void __cdecl LibTest::Test(void))
    095 00000000 SECT16 notype ()    External     | ?Max@LibTest@@SAHHH@Z (public: static int __cdecl LibTest::Max(int,int))
    0E3 00000000 SECT34 notype       Static       | $unwind$??0LibTest@@QEAA@XZ
    0E7 00000000 SECT35 notype       Static       | $pdata$??0LibTest@@QEAA@XZ
    0EB 00000000 SECT36 notype       Static       | $unwind$?Test@LibTest@@QEAAXXZ
    0EF 00000000 SECT37 notype       Static       | $pdata$?Test@LibTest@@QEAAXXZ
    0F3 00000000 SECT38 notype       Static       | $unwind$?Max@LibTest@@SAHHH@Z
    0F7 00000000 SECT39 notype       Static       | $pdata$?Max@LibTest@@SAHHH@Z
    1C4 00000000 SECT6C notype       External     | ??_C@_0BD@PPMBJMOB@LibTest?5inistance?6@ (`string')


编译器为了支持 C++ 特性，如重载，使用名称变形 `name mangling` 技术。通过反查函数修饰名字 Decorated Name 也能知道对应的原始名字是什么。

C++ 编译时函数名修饰约定规则根据不同的函数调用约定制定，在 `__stdcall` 调用约定规则下，函数名修饰规则如下：

- 以**?**标识函数名的开始，后跟函数名；
- 函数名后面以 **@@YG**、**@@YA** 和 **@@YI** 标识 **__stdcall**、**__cdecl** 和 **__fastcall** 调用约定，后跟参数表；
- 参数表以字母代号表示，如 D 表示字符类型参数；
- 参数表的第一项为该函数的返回值类型，其后依次为参数的数据类型，指针标识在其所指数据类型前；
- 参数表后以**@Z**标识整个名字的结束，如果该函数无参数无返回，则以**Z**标识结束。

| 字母代码 |                               对应数据类型                              |
|----------|-------------------------------------------------------------------------|
| X        | void                                                                    |
| D        | char                                                                    |
| E        | unsigned char                                                           |
| F        | short                                                                   |
| H        | int                                                                     |
| I        | unsigned int                                                            |
| J        | long                                                                    |
| K        | unsigned long                                                           |
| M        | float                                                                   |
| N        | double                                                                  |
| _N       | bool                                                                    |
| PA       | 表示指针，后面的代号表明数据类型，每一个连续相同类型指针以一个**0**代替 |
| PB       | const指针                                                               |
| U        | struct                                                                  |

对于 C++ 类成员函数，其调用方式是 **thiscall**。函数的名字修饰与非成员的 C++ 函数稍有不同，首先就是在函数名字和參数表之间插入 **@class** 字 符标记。其次是參数表的開始标识不同：

- 公有 public 成员函数的标识是 **@@QEA**(@@QAE ???)；
- 保护 protected 成员函数的标识是 **@@IAE**；
- 私有 private 成员函数的标识是 **@@AAE**；
- 假设函数声明使用了 **const** 关键字，则对应的标识应分别为 **@@QBE**，**@@IBE** 和 **@@ABE**；
- 如果参数类型是类实例的引用，则使用 **AAV1**，const 引用则为 **ABV1**；

例如，**?Test@LibTest@@QEAAXXZ** 表示一个类成员函数，名称为 LibTest::Test，结束位置的 Z 表示函数没有参数没有返回值。**@@QEA** 表明是一个公有函数，

    public: void __cdecl LibTest::Test(void) __ptr64

可以使用 dumpbin 工具或 CL.EXE 查看生成的符号名字，执行以下命令会生成 test.asm 汇编列表文件类型 Listing File Type，里包含了装饰过的函数名称：

    cl /c /FAs test.cpp

如果要用模块定义文件 DEF 导出一个 C++ 类，则把要输出的数据和成员的修饰名都写入 .def 文件。 所以，通过 def 文件来导出 C++ 类是很麻烦的，并且这个修饰名是不可避免的。

在声明语句中使用 **extern "C"** 可以防止 C++ 编译器使用装饰名。


MSVC 和 MinGW 编译的 DLL 互用，两个编译器的应用程序二进制接口 ABI - Application Binary Interface 是不兼容的，所以无法识别对方导出的符号完成链接。

但是可以用 C 语言中转，C 的 ABI 在所有编译器中都是相同的。简单来说，把 VC 动态库所有导出接口都改为 **extern "C"** 形式即可，这样生成的动态库，MinGW 是可以正确链接使用的，反之亦然。

注意，要规避一个内存管理问题，不要跨越动态库边界分配/释放内存，因为两边用的并不是同一套 malloc/free。并且发布程序时，两边的依赖都要带齐，比如 VC 库依赖的 msvcrt 等，MinGW 程序依赖的 libpthread 等。


假设，现有 testdll.h, testdll.c, testmain.c，需要生成 DLL 在 MinGW 和 MSVC 间互相调用。

要 MinGW 编译 DLL 供 MSVC 使用，首先，编译 testdll.c：

    gcc -shared -o testdll.dll testdll.c -Wl,--output-def,testdll.def,--out-implib,libtestdll.a

生成的 DLL 还有 DEF 文件，MSVC 还不能直接使用 DLL，需要 Microsoft LIB 工具按 DEF 定义生成导入库：

    lib /machine:i386 /def:testdll.def

得到导入库 testdll.lib 就可以供 MSVC 去链接 DLL：

    cl testmain.c testdll.lib


要 MinGW 使用 MSVC 编译的 DLL，首先也是编译 DLL，然后将生成的导入库传入 GCC：

    cl /LD testdll.c
    gcc -o testmain testmain.c testdll.lib

还有一个方法是生成 .a 文件供 GCC 使用，通常 **__cdecl** 函数调用方式，为了简化，使用 Anders Norlander 的 reimp 工具进行转换：

    reimp testdll.lib
    gcc -o testmain testmain.c -L. -ltestdll

对于 **__stdcall** 函数调用方式，上面的方法不管用，MSVC 会加下划线前缀，而 MinGW 不会。使用 mingw-utils 工具包中的 pexports 生成 DEF 文件，使用 sed 文字处理工具将下划线清理:

    pexports testdll.dll | sed "s/^_//" > testdll.def

再用 dlltool 工具生成导入库，并且使用 `-U` 选项，然后就可以在 GCC 中链接程序：

    dlltool -U -d testdll.def -l libtestdll.a
    gcc -o testmain testmain.c -L. -ltestdll



## 🐤🐥 Ninja & MSVC
- [TN011: Using MFC as Part of a DLL](https://docs.microsoft.com/en-us/cpp/mfc/tn011-using-mfc-as-part-of-a-dll?view=vs-2019)
- [TN033: DLL Version of MFC](https://docs.microsoft.com/en-us/cpp/mfc/tn033-dll-version-of-mfc?view=vs-2019)

学习去 IDE 化编译，必须掌握 MSVC 命令行编译的用法。

无论什么编译程序，基本原理都一样：编译源代码 + 包含头文件 + 链接库文件 + 资源文件。

以编译 MFC 程序为示范，需要安装 Windows SDK 和 MFC SDK，可以通过 Microsoft Visual Studio 2019 Community 进行安装，执行菜单 工具 -> 获取工具和功能。

    "c:/Program Files (x86)/Windows Kits/10/Include/10.0.18362.0/um/"
    'C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Tools/MSVC/14.26.28801/atlmfc/include/'

默认安装目录路径带空格，可以通过 dir 命令来获取 DOS 8.3 格式不带空格的目录路径：

    > dir /x C:\
    ...
    2020-07-18  08:50    <DIR>          PROGRA~1     Program Files
    2020-07-23  03:10    <DIR>          PROGRA~2     Program Files (x86)

    > dir /x "C:\Program Files (x86)"
    ...
    2020-07-11  02:22    <DIR>          MICROS~3     Microsoft DirectX SDK (June 2010)
    2020-07-06  21:01    <DIR>          MICROS~2     Microsoft SDKs
    2020-07-06  20:13    <DIR>          MICROS~1     Microsoft Visual Studio
    2020-06-04  07:32    <DIR>          WI3CF2~1     Windows Kits

在编译 DLL 工程时，MFC 使用了三个相关符号定义：

- `/D_WINDLL` signifies the compilation is for a DLL
- `/D_USRDLL` specifies you are building a regular MFC DLL
- `/D_AFXDLL` specifies that you are building a regular MFC DLL that dynamically links to MFC


编写 CMake 脚本 CMakeLists.txt：

```sh
cmake_minimum_required(VERSION 2.8)

# execute_process(COMMAND "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat")

# set(CMAKE_C_FLAGS "/MDd")
set(CMAKE_C_STANDARD 99)
set(CMAKE_C_STANDARD_REQUIRED True)
# set(CMAKE_CXX_FLAGS "/EHsc" )
# set(CMAKE_CXX_STANDARD_REQUIRED True)
set(CMAKE_CXX_STANDARD 11)


# 设置 /MT 或 /MTd 进行多线程静态库链接，默认使用静态库 NAFXCW、NAFXCWD、UAFXCW、UAFXCWD、AFXNMCD、AFXNMCDD
# 设置 /MD 或 /MDd 进行多线程动态链接，结合 /D _AFXDLL 进行动态链接

# add_definitions(/D _WINDOWS /D _UNICODE /D UNICODE)
# add_definitions(/D _WINDOWS /D _MBCS)
# set(CMAKE_MFC_FLAG 1)
# add_definitions(/D_USRDLL)
# add_definitions(-D _AFXDLL)
# set(CMAKE_MFC_FLAG 2)

# SET(CMAKE_CXX_FLAGS_DEBUG "/W3 /MDd /Zl /ZI /FD /Od /D DEBUG /D WIN32 /D _DEBUG /Fp\"demo_d.pch\"")
# SET(CMAKE_CXX_FLAGS_RELEASE "/Ox /MD /Zl /Zi /W3 /O2 /D WIN32 /D NDEBUG /Fp\"demo.pch\"")

SET(CMAKE_CXX_FLAGS_DEBUG " /W3 /FD /Od /MDd")
SET(CMAKE_CXX_FLAGS_RELEASE "/W3 /Ox /O2 /MD")

# set (CMAKE_BUILD_TYPE "Release")

if(CMAKE_BUILD_TYPE MATCHES "Debug")
    set(CMAKE_EXE_LINKER_FLAGS "/machine:x64") # /out:../bin/MFCdemo_d.exe
    # set(CMAKE_EXE_LINKER_FLAGS " /NODEFAULTLIB:libcmtd.lib")
elseif(CMAKE_BUILD_TYPE MATCHES "Release")
    set(CMAKE_EXE_LINKER_FLAGS "/machine:x64 /incremental:no /pdb:demo.pdb")
    # set(CMAKE_EXE_LINKER_FLAGS " /NODEFAULTLIB:libcmt.lib")
endif(CMAKE_BUILD_TYPE MATCHES "Debug")

set(EXECUTABLE_OUTPUT_PATH "../bin")
set(LIBRARY_OUTPUT_PATH "${PROJECT_SOURCE_DIR}/lib")


set(CMAKE_C_COMPILER cl.exe)
set(CMAKE_CXX_COMPILER cl.exe)
set(CMAKE_RC_COMPILER rc.exe)


project( DEMO CXX )

# LIST(APPEND CMAKE_MODULE_PATH 
#     "C:/PROGRA~2/MICROS~1/2019/COMMUN~1/Common7/IDE/CommonExtensions/Microsoft/CMake/CMake/share/cmake-3.17/Modules/" )

FIND_PACKAGE( MFC )
message(STATUS "MFC_FOUND ${MFC_FOUND}")

include_directories(
    "${PROJECT_SOURCE_DIR}/dynamicLib/"
    "C:/PROGRA~2/WI3CF2~1/10/Include/10.0.18362.0/um/"
    "C:/PROGRA~2/MICROS~1/2019/COMMUN~1/VC/Tools/MSVC/1426~1.288/atlmfc/include/"
    "C:/Program Files (x86)/Windows Kits/10/Include/10.0.18362.0/ucrt/"
    "C:/Program Files (x86)/Windows Kits/10/Include/10.0.18362.0/shared/"
    "C:/Program Files (x86)/Windows Kits/10/Include/10.0.18362.0/winrt/"
    "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Tools/MSVC/14.26.28801/include/"
    # "c:/Program Files (x86)/Windows Kits/10/Include/10.0.18362.0/um/"
    # 'C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Tools/MSVC/14.26.28801/atlmfc/include/'
)
link_directories(
    "C:/PROGRA~2/MICROS~1/2019/COMMUN~1/VC/Tools/MSVC/1426~1.288/atlmfc/lib/x64/"
    "C:/PROGRA~2/MICROS~1/2019/COMMUN~1/VC/Tools/MSVC/1426~1.288/lib/x64/"
    "C:/PROGRA~2/WI3CF2~1/10/Lib/10.0.18362.0/ucrt/x64/"
    "C:/PROGRA~2/WI3CF2~1/10/Lib/10.0.18362.0/um/x64/"
)

SET(01-simple 
    # ./01-simple/src/StdAfx.h 
    ./01-simple/src/StdAfx.cpp 
    # ./01-simple/src/ChildView.h 
    ./01-simple/src/ChildView.cpp
    # ./01-simple/src/Mainfrm.h 
    ./01-simple/src/Mainfrm.cpp
    # ./01-simple/src/demo.h 
    ./01-simple/src/demo.cpp
    # 设置资源文件
    # ./01-simple/res/resource.h 
    ./01-simple/res/demo.rc 
    ./01-simple/res/demo.ico 
    ./01-simple/res/demo.rc2
    )

# 定义 WIN32 GUI 程序目标输出，等效 /SUBSYSTEM:WINDOWS
if(CMAKE_BUILD_TYPE MATCHES "Debug")
    add_executable(01-simple_d WIN32 ${01-simple})
    target_link_libraries(01-simple_d)
    target_compile_definitions(01-simple_d PUBLIC /D DEBUG /D WIN32 /D _DEBUG /D _WINDOWS /D _MBCS /D _AFXDLL)
    target_compile_options(01-simple_d PUBLIC /MDd /Fp\"demo_d.pch\")
else(CMAKE_BUILD_TYPE MATCHES "Debug")
    add_executable(01-simple WIN32 ${01-simple})
    target_link_libraries(01-simple)
    target_compile_definitions(01-simple PUBLIC /D WIN32 /D NDEBUG /D _WINDOWS /D _MBCS /D _AFXDLL)
    target_compile_options(01-simple PUBLIC /MD /Fp\"demo.pch\" )
endif(CMAKE_BUILD_TYPE MATCHES "Debug")

add_subdirectory(src)
add_subdirectory(dynamicLib)
```



执行脚本前，先执行环境配置批处理脚本，然后再执行 CMake -G 生成构建脚本：

    > "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat"
    > cmake .. -G "Sublime Text 2 - Ninja"

    **********************************************************************
    ** Visual Studio 2019 Developer Command Prompt v16.6.1
    ** Copyright (c) 2020 Microsoft Corporation
    **********************************************************************
    [vcvarsall.bat] Environment initialized for: 'x64'
    -- The CXX compiler identification is MSVC 19.26.28806.0
    -- Detecting CXX compiler ABI info
    -- Detecting CXX compiler ABI info - done
    -- Check for working CXX compiler: C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Tools/MSVC/14.26.28801/bin/Hostx64/x64/cl.exe - skipped
    -- Detecting CXX compile features
    -- Detecting CXX compile features - done
    -- Looking for MFC
    -- Looking for MFC - found
    -- MFC_FOUND YES
    -- Configuring done
    -- Generating done
    -- Build files have been written to: C:/cppDemos/mfcDemo/ninja



## 🐤🐥 RC VERSIONINFO
- [Versioninfo Resource](https://docs.microsoft.com/en-us/windows/win32/menurc/versioninfo-resource)
- [Version Information API](https://docs.microsoft.com/en-us/windows/win32/menurc/version-information)
- [VS_FIXEDFILEINFO structure](https://docs.microsoft.com/en-us/windows/win32/api/verrsrc/ns-verrsrc-vs_fixedfileinfo)

大多数 Visual C++ 向导自动为项目生成 .rc 资源脚本文件，可以引用的位图、图标或光标文件，还可以给输出程序添加版本信息等。

通过 Windows SDK 提供的 RC.EXE 资源编译程序生成 .res 资源文件。如果使用 MinGW，资源编译程序是 windres.exe。

给输出程序添加版本信息，首先准备一个 .rc 资源模板，里面各信息对应位置都是 CMake 可替换的变量；

- 在 CMakeLists.txt 中，通过 configure_file 处理 .rc 模板，生成最终的 .rc 文件；
- 将最终的 .rc 文件放入 add_library 参与编译。

资源模板如下，保存为 VersionInfo.rc.in：

    1 VERSIONINFO

     FILEVERSION ${PROJECT_VERSION_MAJOR}, ${PROJECT_VERSION_MINOR}, ${PROJECT_VERSION_PATCH}
     PRODUCTVERSION ${PROJECT_VERSION_MAJOR}, ${PROJECT_VERSION_MINOR}, ${PROJECT_VERSION_PATCH}
     FILEFLAGSMASK 0x17L

    #ifdef _DEBUG
     FILEFLAGS 0x1L
    #else
     FILEFLAGS 0x0L
    #endif
     FILEOS 0x4L
     FILETYPE 0x0L
     FILESUBTYPE 0x0L
    BEGIN
        BLOCK "StringFileInfo"
        BEGIN
            BLOCK "040904b0"
            BEGIN
                VALUE "FileDescription", "MyLibrary Binary"
                VALUE "FileVersion", "${PROJECT_VERSION_MAJOR}, ${PROJECT_VERSION_MINOR}, ${PROJECT_VERSION_PATCH}"
                VALUE "InternalName", "MyLibrary"
                VALUE "LegalCopyright", "Copyright (C) 2019"
                VALUE "OriginalFilename", ""
                VALUE "ProductName", "MyLibrary"
                VALUE "ProductVersion", "${PROJECT_VERSION_MAJOR}, ${PROJECT_VERSION_MINOR}, ${PROJECT_VERSION_PATCH}"
            END
        END
        BLOCK "VarFileInfo"
        BEGIN
            VALUE "Translation", 0x409, 1200
        END
    END

在CMake中处理文件
使用CMake的configure_file命令可以将上面的.rc模板文件中的CMake变量都替换为当前CMake解析过程中的变量值：

    if(MSVC)
        set(MY_VERSIONINFO_RC "${CMAKE_BINARY_DIR}/VersionInfo.rc")
        configure_file("${CMAKE_SOURCE_DIR}/VersionInfo.rc.in" "${MY_VERSIONINFO_RC }")
    endif()

因为是　Windows　平台特有的机制，所以我们使用条件判断语句判断下是否是　MSVC。

资源模板中的 PROJECT_VERSION_MAJOR，PROJECT_VERSION_MINOR 和 PROJECT_VERSION_PATCH 都来自 CMake 中 project 命令：

    project(MyLibrary VERSION 1.2.3)

经过上面转换之后 MY_VERSIONINFO_RC 这个 CMake 变量就存了转换后的 .rc 文件路径。

将其加入库编译文件列表即可：

    add_library(${TARGET_NAME} SHARED ${PUBLIC_HEADERS} ${PRIVATE_HEADERS} ${SOURCES} ${MY_VERSIONINFO_RC })


## 🐤🐥 CL.EXE 选项列表
- [MSVC 构建参考手册](https://docs.microsoft.com/en-us/cpp/build/reference/c-cpp-building-reference)
- [CL.EXE 选项参考](https://docs.microsoft.com/en-us/cpp/build/reference/compiler-options-listed-by-category)
- [LINK.EXE 选项参考](https://docs.microsoft.com/en-us/cpp/build/reference/linker-options)

旧版 CL.EXE 选项罗列：

|          Option         |                        Purpose                            |
|-------------------------|-----------------------------------------------------------|
| /C                      | Preserves comments during preprocessing                   |
| /c                      | Compiles without linking                                  |
| /Dname[= ,#[{str,num}]] | Defines constants and macros                              |
| /E                      | Copies preprocessor output to standard output             |
| /EH{s,a}[c][-]          | Specifies the model of exception handling                 |
| /EP                     | Copies preprocessor output to standard output             |
| /F number               | Sets stack size                                           |
| /FA[c,s]                | Creates a listing file                                    |
| /Fa                     | Sets listing file name                                    |
| /Fdfilename             | Renames program database file                             |
| /FD                     | Generate file dependencies                                |
| /Fefilename             | Renames the executable file                               |
| /FIfilename             | Preprocesses the specified include file                   |
| /Fm[filename]           | Creates a map file                                        |
| /Fofilename             | Creates an object file                                    |
| /Fpfilename             | Specifies a precompiled header file name                  |
| /FR /Fr[filename]       | Generate browser files                                    |
| /G3                     | 针对 386 处理器优化，VC++ 5.0 逐步淘汰此选项                 |
| /G4                     | 针对 486 处理器优化，VC++ 5.0 逐步淘汰此选项                 |
| /G5                     | 针对 Pentium 处理器优化，                                  |
| /G6                     | 针对 Pentium Pro 处理器优化，                              |
| /GA                     | 优化 Windows 应用程序                                      |
| /GB                     | 针对 Pentium 处理器优化，混合 /G3、/G4、/G5 和 /G6 优化。      |
| /GD                     | 优化 Windows DLL                                          |
| /Gd                     | 使用 __cdecl 调用约定                                      |
| /Ge                     | Activates stack probes                                    |
| /GF /Gf                 | Enable string pooling                                     |
| /Gh                     | Calls hook function, __penter                             |
| /Gi                     | Enables incremental compilation                           |
| /Gm                     | Enables minimal rebuild                                   |
| /GR                     | Enables run-time type information (RTTI)                  |
| /Gr                     | Uses the __fastcall calling convention                    |
| /Gssize                 | Controls stack probes                                     |
| /GT                     | Supports fiber safety for data allocated using static thread-local storage. |
| /GX[–]                  | Enables synchronous exception handling                    |
| /Gy                     | Enables function-level linking                            |
| /GZ                     | Catch release-build errors in debug build                 |
| /Gz                     | Uses the __stdcall calling convention                     |
| /Hnumber                | Restricts the length of external (public) names           |
| /HELP                   | Lists the compiler options                                |
| /Idirectory             | Searches a directory for include files                    |
| /J                      | Changes the default char type                             |
| /LD                     | 创建动态链接库 DLL                                         |
| /LDd                    | 创建动态链接库 DLL 调试版                                   |
| /link option            | Passes the specified option to LINK                       |
| /MD                     | 使用 MSVCRT.LIB 创建多线程 DLL 程序                         |
| /MDd                    | 使用 MSVCRTD.LIB 创建多线程 DLL 程序调试版                  |
| /ML                     | 使用 LIBC.LIB 创建单线程程序                                |
| /MLd                    | 使用 LIBCD.LIB 创建单线程程序调试版                         |
| /MT                     | 使用 LIBCMT.LIB 创建多线程程序                              |
| /MTd                    | 使用 LIBCMTD.LIB 创建多线程程序调试版                       |
| /nologo                 | Suppresses display of sign-on banner                      |
| /O1                     | Creates small code                                        |
| /O2                     | Creates fast code                                         |
| /Oa                     | Assumes no aliasing                                       |
| /Ob                     | Controls inline expansion                                 |
| /Od                     | Disables optimization                                     |
| /Og                     | Uses global optimizations                                 |
| /Oi                     | Generates intrinsic functions                             |
| /Op                     | Improves floating-point consistency                       |
| /Os                     | Favors small code                                         |
| /Ot                     | Favors fast code                                          |
| /Ow                     | Assumes aliasing across function calls                    |
| /Ox                     | Uses maximum optimization (/Ob1gity /Gs)                  |
| /Oy                     | Omits frame pointer                                       |
| /Qlf                    | Generates additional debugging information for kernal-mode device drivers.  |
| /QI0f                   | Performs Pentium 0x0f erratum fix                         |
| /QIfdiv[–]              | Performs Pentium FDIV erratum fix                         |
| /P                      | Writes preprocessor output to a file                      |
| /Tcfilename /TC         | Specifies a C source file                                 |
| /Tpfilename /TP         | Specifies a C++ source file                               |
| /Usymbol                | Removes a predefined macro                                |
| /u                      | Removes all predefined macros                             |
| /V                      | Sets the version string                                   |
| /vd{0,1}                | Suppresses or enables hidden vtordisp class members       |
| /vmb                    | Uses best base for pointers to members                    |
| /vmg                    | Uses full generality for pointers to members              |
| /vmm                    | Declares multiple inheritance                             |
| /vms                    | Declares single inheritance                               |
| /vmv                    | Declares virtual inheritance                              |
| /Wlevel                 | Sets warning level                                        |
| /w                      | Disables all warnings                                     |
| /X                      | Ignores the standard include directory                    |
| /Yc[filename]           | Creates a precompiled header file                         |
| /Yd                     | Places complete debugging information in all object files |
| /Yu[filename]           | Uses a precompiled header file during build               |
| /YX                     | Automates precompiled header                              |
| /Z7                     | Generates C 7.0–compatible debugging information          |
| /Za                     | Disables language extensions                              |
| /Zd                     | Generates line numbers                                    |
| /Ze                     | Enables language extensions                               |
| /Zg                     | Generates function prototypes                             |
| /Zi                     | Generates complete debugging information                  |
| /ZI                     | Debug 在程序中包含调试信息                                  |
| /Zl                     | Removes default library name from .OBJ file               |
| /Zmnumber               | Sets the compiler's memory allocation limit               |
| /Zn                     | Turns off SBRPACK for .SBR files                          |
| /Zpn                    | Packs structure members                                   |
| /Zs                     | Checks syntax only                                        |


用于调试的选项：

|  Option |                                 Purpose                                 |
|---------|-------------------------------------------------------------------------|
| /c      | Compiles without linking.                                               |
| /FD     | Generate file dependencies                                              |
| /Od     | Disables optimization.                                                  |
| /Oi     | Generates intrinsic functions.                                          |
| /DDEBUG | 定义 DEBUG 符号，使用调试模式，自动生成 PDB 符号文件，还可以定义 _DEBUG |
| /MDd    | 使用 MSVCRTD.LIB 创建多线程 DLL 程序调试版                              |
| /MLd    | 使用 LIBCD.LIB 创建单线程程序调试版                                     |
| /MTd    | 使用 LIBCMTD.LIB 创建多线程程序调试版                                   |
| /Gm     | ⛔ Enables minimal rebuild.                                              |
| /GX     | ⛔ Enables synchronous exception handling. Use /EH instead.              |
| /GZ     | ⛔ Enables fast checks. (Same as /RTC1)                                  |
| /EH     | Specifies the model of exception handling.                              |
| /YX     | Automates precompiled header                                            |
| /ZI     | Debug 在程序中包含调试信息，x86 有效                                    |

新版 CL.EXE 选项：

优化选项 Optimization

| Option |                     Purpose                      |
|--------|--------------------------------------------------|
| /O1    | Creates small code.                              |
| /O2    | Creates fast code.                               |
| /Ob    | Controls inline expansion.                       |
| /Od    | Disables optimization.                           |
| /Og    | ⛔ Uses global optimizations.                     |
| /Os    | Favors small code.                               |
| /Ot    | Favors fast code.                                |
| /Ox    | A subset of /O2 that doesn't include /GF or /Gy. |
| /Oy    | Omits frame pointer. (x86 only)                  |
| /favor | 为指定 CPU 框架优化                              |

代码生成 Code generation

|         Option         |                                            Purpose              |
|------------------------|-----------------------------------------------------------------|
| /arch                  | Use SSE or SSE2 instructions in code generation. (x86 only)     |
| /clr                   | Produces an output file to run on the common language runtime.  |
| /EH                    | Specifies the model of exception handling.                      |
| /fp                    | Specifies floating-point behavior.                              |
| /GA                    | Optimizes for Windows applications.                             |
| /Gd                    | Uses the __cdecl calling convention. (x86 only)                 |
| /Ge                    | ⛔ Activates stack probes.                                     |
| /GF                    | Enables string pooling.                                        |
| /Gh                    | Calls hook function _penter.                                   |
| /GH                    | Calls hook function _pexit.                                    |
| /GL                    | Enables whole program optimization.                            |
| /Gm                    | ⛔ Enables minimal rebuild.                                   |
| /GR                    | Enables run-time type information (RTTI).                     |
| /Gr                    | Uses the __fastcall calling convention. (x86 only)             |
| /GS                    | Checks buffer security.                                        |
| /Gs                    | Controls stack probes.                                          |
| /GT                    | Supports fiber safety for data allocated by using static thread-local storage.                |
| /guard:cf              | Adds control flow guard security checks.                        |
| /guard:ehcont          | Enables EH continuation metadata.                               |
| /Gv                    | Uses the __vectorcall calling convention. (x86 and x64 only)    |
| /Gw                    | Enables whole-program global data optimization.                 |
| /GX                    | ⛔ Enables synchronous exception handling. Use /EH instead.    |
| /Gy                    | Enables function-level linking.                                |
| /GZ                    | ⛔ Enables fast checks. (Same as /RTC1)                        |
| /Gz                    | Uses the __stdcall calling convention. (x86 only)               |
| /homeparams            | 在进入函数写堆栈时，强制在寄存器中传递参数，此编译器选项仅适用于x64编译器（本机和交叉编译）。 |
| /hotpatch              | Creates a hotpatchable image.                                   |
| /Qfast_transcendentals | Generates fast transcendentals.                                 |
| /QIfist                | ⛔ 浮点类型转换为整型类型时，禁止调用函数 _ftol，仅 x86 有效       |
| /Qimprecise_fwaits     | Removes fwait commands inside try blocks.                       |
| /QIntel-jcc-erratum    | Mitigates the performance impact of the Intel JCC erratum microcode update.                   |
| /Qpar                  | Enables automatic parallelization of loops.                      |
| /Qpar-report           | Enables reporting levels for automatic parallelization.          |
| /Qsafe_fp_loads        | 对浮点值使用整数移动指令，并禁用某些浮点加载优化。                    |
| /Qspectre              | Enable mitigations for CVE 2017-5753, for a class of Spectre attacks.                         |
| /Qspectre-load         | Generate serializing instructions for every load instruction.    |
| /Qspectre-load-cf      | Generate serializing instructions for every control flow instruction that loads memory.       |
| /Qvec-report           | Enables reporting levels for automatic vectorization.            |
| /RTC                   | 运行时错误检测，/RTCc, /RTCu, /RTCs                               |
| /volatile              | Selects how the volatile keyword is interpreted.                 |

文件输出选项 Output files

|  Option  |                     Purpose                      |
|----------|--------------------------------------------------|
| /doc     | Processes documentation comments to an XML file. |
| /FA      | Configures an assembly listing file.             |
| /Fa      | Creates an assembly listing file.                |
| /Fd      | Renames program database file.                   |
| /Fe      | Renames the executable file.                     |
| /Fi      | Specifies the preprocessed output file name.     |
| /Fm      | Creates a mapfile.                               |
| /Fo      | Creates an object file.                          |
| /Fp      | Specifies a precompiled header file name.        |
| /FR, /Fr | Name generated .sbr browser files.               |

预处理 Preprocessor

| Option |                          Purpose                            |
|--------|-------------------------------------------------------------|
| /AI    | 指定搜索目录，解决 #using 指令的引用                          |
| /C     | Preserves comments during preprocessing.                   |
| /D     | Defines constants and macros.                              |
| /E     | Copies preprocessor output to standard output.             |
| /EP    | Copies preprocessor output to standard output.             |
| /FI    | Preprocesses the specified include file.                   |
| /FU    | Forces the use of a file name, as if it had been passed to the #using directive. |
| /Fx    | Merges injected code with the source file.                 |
| /I     | Searches a directory for include files.                    |
| /P     | Writes preprocessor output to a file.                      |
| /U     | Removes a predefined macro.                                |
| /u     | Removes all predefined macros.                             |
| /X     | Ignores the standard include directory.                    |

Language

|   Option   |                            Purpose                            |
|------------|---------------------------------------------------------------|
| /constexpr | Control constexpr evaluation at compile time.                 |
| /openmp    | Enables #pragma omp in source code.                           |
| /vd        | Suppresses or enables hidden vtordisp class members.          |
| /vmb       | Uses best base for pointers to members.                       |
| /vmg       | Uses full generality for pointers to members.                 |
| /vmm       | Declares multiple inheritance.                                |
| /vms       | Declares single inheritance.                                  |
| /vmv       | Declares virtual inheritance.                                 |
| /Z7        | Generates C 7.0-compatible debugging information.             |
| /Za        | Disables C89 language extensions.                             |
| /Zc        | Specifies standard behavior under /Ze.                        |
| /Ze        | ⛔ Enables C89 language extensions.                            |
| /Zf        | Improves PDB generation time in parallel builds.              |
| /ZH        | Specifies MD5, SHA-1, or SHA-256 for checksums in debug info. |
| /ZI        | Debug 在程序中包含调试信息，x86 有效                          |
| /Zi        | Generates complete debugging information.                     |
| /Zl        | 从 .obj 文件移除默认库名                                      |
| /Zp        | Packs structure members.                                      |
| /Zs        | Checks syntax only.                                           |
| /ZW        | Produces an output file to run on the Windows Runtime.        |

Linking

| Option |                       Purpose                       |
|--------|-----------------------------------------------------|
| /F     | Sets stack size.                                    |
| /LD    | 链接动态链接库                                      |
| /LDd   | 链接动态链接库 调试版                               |
| /link  | 给 LINK.EXE 传递参数                                |
| /LN    | 创建 MSIL 模块                                      |
| /MD    | 使用 MSVCRT.lib 库链接创建多线程 DLL                |
| /MDd   | 使用 MSVCRTD.lib 库链接创建多线程 DLL 调试版        |
| /MT    | 使用 LIBCMT.lib 库链接创建多线程可执行程序         |
| /MTd   | 使用 LIBCMTD.lib 库链接创建多线程可执行程序 调试版 |

注意 /MT 或 /MTd 是编译静态库的选项。

多功能选项 Miscellaneous

|        Option       |                    Purpose                    |
|---------------------|-----------------------------------------------|
| /?                  | Lists the compiler options.                   |
| @                   | Specifies a response file.                    |
| /analyze            | Enables code analysis.                        |
| /bigobj             | Increases the number of addressable sections in an .obj file. |
| /c                  | Compiles without linking.                     |
| /cgthreads          | Specifies number of cl.exe threads to use for optimization and code generation.  |
| /errorReport        | ⛔ Error reporting is controlled by Windows Error Reporting (WER) settings.       |
| /FC                 | Displays the full path of source code files passed to cl.exe in diagnostic text. |
| /FS                 | Forces writes to the PDB file to be serialized through MSPDBSRV.EXE. |
| /H                  | ⛔ Restricts the length of external (public) names. |
| /HELP               | Lists the compiler options.                    |
| /J                  | Changes the default char type.                 |
| /JMC                | Supports native C++ Just My Code debugging.    |
| /kernel             | 创建 Windows kernel 可执行程序                  |
| /MP                 | Builds multiple source files concurrently.     |
| /nologo             | Suppresses display of sign-on banner.          |
| /sdl                | Enables additional security features and warnings.      |
| /showIncludes       | Displays a list of all include files during compilation.|
| /Tc                 | Specifies a C source file.                      |
| /TC                 | Specifies all source files are C.               |
| /Tp                 | Specifies a C++ source file.                    |
| /TP                 | Specifies all source files are C++.             |
| /V                  | ⛔ Sets the version string.                    |
| /w                  | Disables all warnings.                         |
| /W0,/W1,/W2,/W3,/W4 | Sets output warning level.                     |
| /w1,/w2,/w3,/w4     | Sets warning level for the specified warning.   |
| /Wall               | Enables all warnings, including warnings that are disabled by default.|
| /wd                 | Disables the specified warning.                  |
| /we                 | Treats the specified warning as an error.        |
| /WL                 | 命令行编译 C++ 源代码时，启用一行诊断错误和警告消息。 |
| /wo                 | Displays the specified warning only once.        |
| /Wv                 | Disables warnings introduced by later versions of the compiler.        |
| /WX                 | Treats warnings as errors.                       |
| /Yc                 | Create .PCH file.                                |
| /Yd                 | ⛔ Places complete debugging information in all object files. Use /Zi instead. |
| /Yl                 | Injects a PCH reference when creating a debug library.  |
| /Yu                 | 使用预编译头文件 pch - precompiled header          |
| /Y-                 | Ignores all other precompiled-header compiler options in the current build.  |
| /Zm                 | Specifies the precompiled header memory allocation limit.   |
| /await              | Enable coroutines (resumable functions) extensions.         |
| /source-charset     | Set source character set.                         |
| /execution-charset  | Set execution character set.                      |
| /utf-8              | Set source and execution character sets to UTF-8. |
| /validate-charset   | Validate UTF-8 files for only compatible characters. |
| /diagnostics        | Controls the format of diagnostic messages.        |
| /permissive-        | Set standard-conformance mode.                     |
| /std                | C++ standard version compatibility selector.       |

体验选项 Experimental options

|           Option           |        Purpose         |
|----------------------------|------------------------|
| /experimental:module       | 打开体验模块支持       |
| /experimental:preprocessor | 打开体验协调处理器支持 |

弃用的选项：

|      Option     |                          Purpose                           |
|-----------------|------------------------------------------------------------|
| /clr:noAssembly | ⛔ 使用 /LN 替代，创建 MSIL 模块                            |
| /errorReport    | ⛔ 错误报告由 Windows Error Reporting (WER) 设置            |
| /Fr             | ⛔ 创建无局部变量的浏览信息文件                             |
| /Ge             | ⛔ Activates stack probes. On by default.                   |
| /Gm             | ⛔ Enables minimal rebuild.                                 |
| /GX             | ⛔ Enables synchronous exception handling. Use /EH instead. |
| /GZ             | ⛔ Enables fast checks. Use /RTC1 instead.                  |
| /H              | ⛔ Restricts the length of external (public) names.         |
| /Og             | ⛔ Uses global optimizations.                               |
| /QIfist         | ⛔ 增用来转换 floating-point 到整型                         |
| /V              | ⛔ Sets the .obj file version string.                       |
| /Wp64           | Obsolete. Detects 64-bit portability problems.             |
| /Yd             | ⛔ 在所有对象文件中放置调试信息，使用 /Zi 替代              |
| /Zc:forScope-   | ⛔ Disables conformance in for loop scope.                  |
| /Ze             | ⛔ Enables language extensions.                             |
| /Zg             | ⛔ 生成函数原型，Visual Studio 2015 移除了                  |


## 🐤🐥 Link.EXE 选项
- [MSVC 构建参考手册](https://docs.microsoft.com/en-us/cpp/build/reference/c-cpp-building-reference)
- [CL.EXE 选项参考](https://docs.microsoft.com/en-us/cpp/build/reference/compiler-options-listed-by-category)
- [LINK.EXE 选项参考](https://docs.microsoft.com/en-us/cpp/build/reference/linker-options)

Linker options listed alphabetically

|            Option           |                                            Purpose                                            |
|-----------------------------|-----------------------------------------------------------------------------------------------|
| @                           | Specifies a response file.                                                                    |
| /ALIGN                      | Specifies the alignment of each section.                                                      |
| /ALLOWBIND                  | Specifies that a DLL can't be bound.                                                          |
| /ALLOWISOLATION             | Specifies behavior for manifest lookup.                                                       |
| /APPCONTAINER               | Specifies whether the app must run within an appcontainer process environment.                |
| /ASSEMBLYDEBUG              | Adds the DebuggableAttribute to a managed image.                                              |
| /ASSEMBLYLINKRESOURCE       | Creates a link to a managed resource.                                                         |
| /ASSEMBLYMODULE             | 指定要导入的 MSIL - Microsoft intermediate language 模块。                                    |
| /ASSEMBLYRESOURCE           | Embeds a managed resource file in an assembly.                                                |
| /BASE                       | Sets a base address for the program.                                                          |
| /CGTHREADS                  | 为优化及代码生成指定 CL.EXE 线程数量 /CGTHREADS:[1-8]                                         |
| /CLRIMAGETYPE               | Sets the type (IJW, pure, or safe) of a CLR image.                                            |
| /CLRSUPPORTLASTERROR        | Preserves the last error code of functions that are called through the P/Invoke mechanism.    |
| /CLRTHREADATTRIBUTE         | Specifies the threading attribute to apply to the entry point of your CLR program.            |
| /CLRUNMANAGEDCODECHECK      | 是否将 SuppressUnmanagedCodeSecurity 应用于从托管代码到本机 DLL 的链接器生成的 PInvoke 调用。 |
| /DEBUG                      | /DEBUG:FASTLINK/FULL/NONE Creates debugging information.                                      |
| /DEBUGTYPE                  | Specifies which data to include in debugging information.                                     |
| /DEF                        | 指定模块定义文件 module-definition (.def)                                                     |
| /DEFAULTLIB                 | Searches the specified library when external references are resolved.                         |
| /DELAY                      | Controls the delayed loading of DLLs.                                                         |
| /DELAYLOAD                  | Causes the delayed loading of the specified DLL.                                              |
| /DELAYSIGN                  | Partially signs an assembly.                                                                  |
| /DEPENDENTLOADFLAG          | Sets default flags on dependent DLL loads.                                                    |
| /DLL                        | 链接构建 DLL 动态链接                                                                         |
| /DRIVER                     | Creates a kernel mode driver.                                                                 |
| /DYNAMICBASE                | 是否使用地址空间布局随机化 ASLR 功能                                                          |
| /ENTRY                      | Sets the starting address.                                                                    |
| /ERRORREPORT                | Deprecated. Error reporting is controlled by Windows Error Reporting (WER) settings.          |
| /EXPORT                     | Exports a function.                                                                           |
| /FILEALIGN                  | Aligns sections within the output file on multiples of a specified value.                     |
| /FIXED                      | Creates a program that can be loaded only at its preferred base address.                      |
| /FORCE                      | Forces a link to complete even with unresolved symbols or symbols defined more than once.     |
| /FUNCTIONPADMIN             | Creates an image that can be hot patched.                                                     |
| /GENPROFILE /FASTGENPROFILE | 生成指定剖析文件 .pgd 以支持按配置优化 PGO。                                                  |
| /GUARD                      | Enables Control Flow Guard protection.                                                        |
| /HEAP                       | Sets the size of the heap, in bytes.                                                          |
| /HIGHENTROPYVA              | Specifies support for high-entropy 64-bit address space layout randomization (ASLR).          |
| /IDLOUT                     | Specifies the name of the .idl file and other MIDL output files.                              |
| /IGNORE                     | Suppresses output of specified linker warnings.                                               |
| /IGNOREIDL                  | Prevents the processing of attribute information into an .idl file.                           |
| /IMPLIB                     | Overrides the default import library name.                                                    |
| /INCLUDE                    | Forces symbol references.                                                                     |
| /INCREMENTAL                | Controls incremental linking.                                                                 |
| /INTEGRITYCHECK             | Specifies that the module requires a signature check at load time.                            |
| /KEYCONTAINER               | Specifies a key container to sign an assembly.                                                |
| /KEYFILE                    | Specifies a key or key pair to sign an assembly.                                              |
| /LARGEADDRESSAWARE          | Tells the compiler that the application supports addresses larger than two gigabytes          |
| /LIBPATH                    | Specifies a path to search before the environmental library path.                             |
| /LINKREPRO                  | Specifies a path to generate link repro artifacts in.                                         |
| /LINKREPROTARGET            | Generates a link repro only when producing the specified target.16.1                          |
| /LTCG                       | Specifies link-time code generation.                                                          |
| /MACHINE                    | 指定目标构架 /MACHINE:{ARM,EBC,X64,X86,I386}                                                  |
| /MANIFEST                   | Creates a side-by-side manifest file and optionally embeds it in the binary.                  |
| /MANIFESTDEPENDENCY         | Specifies a <dependentAssembly> section in the manifest file.                                 |
| /MANIFESTFILE               | Changes the default name of the manifest file.                                                |
| /MANIFESTINPUT              | 指定要嵌入的清单输入文件，可以多次使用此选项嵌入多个清单输入文件。                            |
| /MANIFESTUAC                | Specifies whether User Account Control (UAC) information is embedded in the program manifest. |
| /MAP                        | Creates a mapfile.                                                                            |
| /MAPINFO                    | Includes the specified information in the mapfile.                                            |
| /MERGE                      | Combines sections.                                                                            |
| /MIDL                       | Specifies MIDL command-line options.                                                          |
| /NATVIS                     | Adds debugger visualizers from a Natvis file to the program database (PDB).                   |
| /NOASSEMBLY                 | Suppresses the creation of a .NET Framework assembly.                                         |
| /NODEFAULTLIB               | 当外部符号有定义时，禁止使用默认库                                                            |
| /NOENTRY                    | 创建没有入口的纯资源 DLL                                                                      |
| /NOLOGO                     | Suppresses the startup banner.                                                                |
| /NXCOMPAT                   | 将程序标记为验证兼容数据执行保护 DEP - Windows Data Execution Prevention                      |
| /OPT                        | Controls LINK optimizations.                                                                  |
| /ORDER                      | Places COMDATs into the image in a predetermined order.                                       |
| /OUT:filename               | Specifies the output file name.                                                               |
| /PDB:filename               | Creates a PDB file.                                                                           |
| /PDBALTPATH                 | Uses an alternate location to save a PDB file.                                                |
| /PDBSTRIPPED                | Creates a PDB file that has no private symbols.                                               |
| /PGD                        | Specifies a .pgd file for profile-guided optimizations.                                       |
| /POGOSAFEMODE               | Obsolete Creates a thread-safe PGO instrumented build.                                        |
| /PROFILE                    | Produces an output file that can be used with the Performance Tools profiler.                 |
| /RELEASE                    | Sets the Checksum in the .exe header.                                                         |
| /SAFESEH                    | Specifies that the image will contain a table of safe exception handlers.                     |
| /SECTION                    | Overrides the attributes of a section.                                                        |
| /SOURCELINK                 | Specifies a SourceLink file to add to the PDB.                                                |
| /STACK                      | Sets the size of the stack in bytes.                                                          |
| /STUB                       | Attaches an MS-DOS stub program to a Win32 program.                                           |
| /SUBSYSTEM                  | Tells the operating system how to run the .exe file.                                          |
| /SWAPRUN                    | Tells the operating system to copy the linker output to a swap file before it's run.          |
| /TLBID                      | Specifies the resource ID of the linker-generated type library.                               |
| /TLBOUT                     | Specifies the name of the .tlb file and other MIDL output files.                              |
| /TSAWARE                    | Creates an application that is designed specifically to run under Terminal Server.            |
| /USEPROFILE                 | Uses profile-guided optimization training data to create an optimized image.                  |
| /VERBOSE                    | Prints linker progress messages.                                                              |
| /VERSION                    | Assigns a version number.                                                                     |
| /WHOLEARCHIVE               | Includes every object file from specified static libraries.                                   |
| /WINMD                      | 启用 Windows Runtime Metadata (winmd)                                                         |
| /WINMDFILE                  | 为 /WINMD 指定输出文件名。                                                                    |
| /WINMDKEYFILE               | Specifies a key or key pair to sign a Windows Runtime Metadata file.                          |
| /WINMDKEYCONTAINER          | Specifies a key container to sign a Windows Metadata file.                                    |
| /WINMDDELAYSIGN             | 通过将公钥放入 winmd 文件中并对其进行部分签名。                                               |
| /WX                         | Treats linker warnings as errors.                                                             |


Controls the optimizations that LINK performs during a build.

    /OPT:{REF | NOREF}
    /OPT:{ICF[=iterations] | NOICF}
    /OPT:{LBR | NOLBR}




# 🐣 CLANG
- [结构化编译器前端 Clang 介绍](https://developer.ibm.com/zh/articles/os-cn-clang/)
- [Clang: a C language family frontend for LLVM](https://clang.llvm.org/)

Clang 是一个 C、C++、Objective-C 和 Objective-C++ 编程语言的编译器前端。它采用了底层虚拟机 LLVM - Low Level Virtual Machine 作为其后端，目标是提供一个 GNU GCC 编译器套装的替代品。作者是克里斯·拉特纳 Chris Lattner，在苹果公司的赞助支持下进行开发，而源代码授权是使用类 BSD 的伊利诺伊大学厄巴纳-香槟分校开源码许可。

Clang 项目包括 Clang 前端和 Clang 静态分析器等，是 LLVM 编译器工具集的前端 front-end，目的是输出代码对应的抽象语法树 AST - Abstract Syntax Tree，并将代码编译成 LLVM Bitcode。接着在后端 back-end 使用 LLVM 编译成平台相关的机器语言。

相比于 GCC，Clang 具有如下优点：

- 编译速度快：在某些平台上，Clang 的编译速度显著的快过 GCC。
- 占用内存小：Clang 生成的 AST 所占用的内存是 GCC 的五分之一左右。
- 模块化设计：Clang 采用基于库的模块化设计，易于 IDE 集成及其他用途的重用。
- 诊断信息可读性强：在编译过程中，Clang 创建并保留了大量详细的元数据 (metadata)，有利于调试和错误报告。
- 设计清晰简单，容易理解，易于扩展增强。与代码基础古老的 GCC 相比，学习曲线平缓。

Clang 本身性能优异，其生成的 AST 所耗用掉的内存仅仅是 GCC 的 20% 左右。2014 年 1 月发行的 FreeBSD 10.0 版将 Clang/LLVM 作为默认编译器。

Clang 性能测试证明编译 Objective-C 代码速度为 GCC 的 3 倍，还能针对用户发生的编译错误准确地给出建议。

LLVM 是一种虚拟机，它在对代码进行处理的时候都需要使用 IR 中间文件，所以源代码要被先转换为 LLVM IR 中间文件 LLVM Intermediate Representation。

LLVM 在对程序进行优化的时候全部都是以 IR 的形式来进行优化的，它类似于是一种被 LLVM 所使用的一种语言，可以跨平台使用，因此所有平台上的 LLVM 都可以解释同一份 IR，然后 LLVM 后端再利用 IR 生成不同平台上的机器码，此种类型的程序才可以正常运行。

它们使用的宏不同，GCC 定义的宏包括：

    __GNUC__
    __GNUC_MINOR__
    __GNUC_PATCHLEVEL__
    __GNUG__

Clang 除了支持 GCC 定义的宏之外还定义了：

    __clang__
    __clang_major__
    __clang_minor__
    __clang_patchlevel__


生成文本格式的 IR 文件：

    clang -O3 -emit-llvm helloworld.c -S -o helloworld.ll

直接编译生成二进制格式 IR 文件：

    clang -O3 -emit-llvm helloworld.c -c -o helloworld.bc

LLVM IR 文件格式转换，.bc 和 .ll 文件的转换：

    llvm-as helloworld.ll     //llvm .ll -> .bc assembler
    llvm-dis helloworld.bc  //llvm .bc -> .ll disassembler

通过 IR 文件生成符合目标平台上的汇编文件，LLVM 后端做的事情，通过 llc 进行操作：

    llc helloworld.ll -o helloworld.S

通过 IR 文件生成符合目标平台上的可执行文件，LLVM 后端做的事情，通过 llc 进行操作：

    llc -filetype=obj helloworld.ll -o helloworld.o
    gcc helloworld.o

或者

    llc -filetype=obj helloworld.bc -o helloworld.o
    gcc helloworld.o

llvm 只能保证生成 obj 文件，最后都需要使用 gcc 进行一次链接才能生成可执行文件。

LLVM IR 文件 link 操作

    llvm-link func1.bc func2.bc -o linked.bc

交叉编译 arm64 平台 andoird native 程序

    clang -O3 -emit-llvm helloworld.c -c -target aarch64-none-linux-android -o helloworld.bc   # 生成aarch64-none-linux-android目标的IR文件
    clang -O3 -emit-llvm helloworld.c -S -target aarch64-none-linux-android -o helloworld.ll     # 生成aarch64-none-linux-android目标的IR文件
    llc -march=aarch64 helloworld.bc -o hello.S                   #生成aarch64平台上的汇编文件
    llc -march=aarch64 -filetype=obj helloworld.bc -o hello.o  #生成aarch64平台上的obj文件

注意到这里生成的hello.o并不是一个可执行文件，最后一步需要调用本地链接器链接后才可以生成最终的可执行文件。

    aarch64-linux-android-gcc hello.o  #生成最后的a.out可执行文件



# 🐣 GCC - GNU Compiler Collection
- [GCC - the GNU Compiler Collection](https://gcc.gnu.org/)
- [GCC Releases](http://gcc.gnu.org/releases.html)
- [GCC 5 Release Series](https://gcc.gnu.org/gcc-5/)
- [C++ Standards Support in GCC](http://gcc.gnu.org/projects/cxx-status.html)
- [C++ compiler support](https://en.cppreference.com/w/cpp/compiler_support)
- [GCC 8.1.0 Doucmentation](https://gcc.gnu.org/onlinedocs/gcc-8.1.0/gcc/)
- [GCC Invocation](https://gcc.gnu.org/onlinedocs/gcc-5.5.0/cpp/Invocation.html)
- [GCC 参数详解](https://www.runoob.com/w3cnote/gcc-parameter-detail.html)
- [mingw-w64 GCC for Windows 64 & 32 bits](http://mingw-w64.org/doku.php)
- [MinGW](http://www.mingw.org/)
- [MinGW Distro](https://nuwen.net/mingw.html)
- [多种编译器对 C++11 的支持](http://www.klayge.org/wiki/index.php/多种编译器对C%2B%2B11的支持)
- [Tiny C 编译器](https://bellard.org/tcc/)
- Code::Blocks Binary releases with MinGW https://www.codeblocks.org/downloads/binaries/

GNU 编译器套件 GNU Compiler Collection 包括 C、C++、Objective-C、Fortran、Java、Ada 和
Go 语言的前端，也包括了这些语言的库，如 libstdc++、libgcj 等等。GCC 的初衷是为GNU操作系统专门
编写的一款编译器。GNU 系统是彻底的自由软件。此处，自由的含义是它尊重用户的自由。

对于后缀为 `.c` 的文件 gcc 把它当作是 C 程序，而 g++ 当作是 c++ 程序。后缀为 `.cpp` 的，
两者都会认为是 C++ 程序，虽然 C++ 是 C 的超集，但是两者对语法的要求是有区别的。在编译阶段，
g++ 会调用 gcc，对于 C++ 代码，两者是等价的，但是因为 gcc 命令不能自动和 C++ 程序使用的库
联接，所以通常用 g++ 来完成链接，为了统一起见，干脆编译链接统统用 g++。

此外，TCC - Tiny C Compiler 是一个小巧的编译器，用来研究编译原理是不错的目标。

MinGW 就是 GCC 的 Windows 移植版。

MinGW - Minimalist GNU on Windows 是将经典的开源 C/C++ 语言编译器 GCC 移植到了 Windows
平台下，并且包含了 Win32API ，因此可以将源代码编译为可在 Windows 中运行的可执行程序。而且还可以
使用一些 Windows 不具备的，Linux 平台下的开发工具。

MinGW 包含 32-bit 和 64-bit 两种，MinGW-w64 可以编译生成 64-bit 或 32-bit 可执行程序，
使用 `-m32` 选项。正因为如此，MinGW 32-bit 版本现已被 MinGW-w64 所取代，且 MinGW 也早已
停止了更新，内置的 GCC 停滞在了 4.8.1 版本，而 MinGW-w64 内置的 GCC 则持续更新。

使用 MinGW-w64 的优势：

- MinGW-w64 是开源软件，可以免费使用。
- MinGW-w64 由一个活跃的开源社区在持续维护，因此不会过时。
- MinGW-w64 支持最新的 C/C++ 语言标准。
- MinGW-w64 使用 Windows 的 C 语言运行库，因此，可以编译出无 DLL 依赖的 Windows 程序。
- 许多开源 IDE 集成 MinGW-w64，如 CodeBlocks，使它拥有友好的图形化界面。

MinGW-w64 是稳定可靠的、持续更新的 C/C++ 编译器，使用它可以免去很多麻烦，不用担心跟不上时代，
也不用担心编译器本身有bug，可以放心的去编写程序。

GCC 有多个 Windows 移植版本，比较出名的就是 MinGW 和 TDM-GCC，如 MinGW-W64 GCC-8.1.0：

- [MinGW](http://www.mingw.org/)
- [TDM-GCC:](http://tdm-gcc.tdragon.net/download)
- [Cygwin](http://www.cygwin.com/)

MinGW Distro 是提供了一个开箱即用的打包,提供最新的 MinGW 17.1 包含以下常用部件:

| Essentials    | Libraries     | Utilities     | Utilities     |
| :-----------  | :-----------  | :-----------  | :-----------  |
| binutils 2.33.1| Boost 1.71.0 | coreutils 8.31| 7-Zip 19.00   |
| GCC 9.2.0     | FreeType 2.10.1| gdb 8.3.1    | git 2.24.1.2  |
| mingw-w64 7.0 | glbinding 3.1.0| grep 3.3     |               |
|               | GLFW 3.3      | LAME 3.100    |               |
|               | GLM 0.9.9.6   | make 4.2.1    |               |
|               | libjpeg-turbo 2.0.3| OptiPNG 0.7.7    |       |
|               | libogg 1.3.4  | pngcheck 2.3.0    |           |
|               | libpng 1.6.37 | sed 4.7       |               |
|               | libvorbis 1.3.6| vorbis-tools 1.4.0   |       |
|               | PCRE 8.43**   |               |               |
|               | PCRE2 10.34** |               |               |
|               | SDL 2.0.10    |               |               |
|               | SDL_mixer 2.0.4|              |               |
|               | zlib 1.2.11   |               |               |
|               | zstd 1.4.4    |               |               |


目前 C 语言的标准有：C89(ANSI C)、C90、C95、C99(ISO C)、C11（C1x）。

目前 C++ 语言的标准有：C++98、C++03（对98小幅修改）、C++11（全面进化）、C++14、C++17、C++18、C++20。

目前来说 C++11 是普及标准。

高版本的 GCC 向下兼容，支持低版本的 C++ 标准：

| GCC 版本    | 发布日期  | C++ 标准    |
| :-------  | :-------  | :-------  |
| GCC 4.3   | Mar 2008  | C++11 部分支持，C++14 部分支持 |
| GCC 4.8.1 | May 2013  | C++11 完全支持，C++14 部分支持 |
| GCC 5.3   | Dec 2015  | C++14 完全支持，C++17 部分支持 |
| GCC 6.1   | Apr 2016  | C++14 完全支持，C++17 部分支持 |
| GCC 7.1   | May 2017  | C++17 完全支持    |
| GCC 8.1   | May 2018  | C++2a 部分支持    |
| GCC 10.1  | May 2020  | C++20 基本支持    |

使用 `g++ -v --help` 可以查询当前版本支持的标准：

|       Standard      | GCC 9.2 | GCC 8.1 | GCC 5.3 |                            Note                            |
|---------------------|---------|---------|---------|------------------------------------------------------------|
| -std=c++03          | ✅       | ✅       | ✅       | ✓ ISO 1998 C++ 2003 修订版，同 `-std=c++98`                |
| -std=c++0x          | ✅       | ✅       | ✅       | ✗ 弃用，`-std=c++11` 替代，同 `-std=c++11`                 |
| -std=c++11          | ✅       | ✅       | ✅       | ✓ ISO 2011 C++                                             |
| -std=c++14          | ✅       | ✅       | ✅       | ✓ ISO 2014 C++                                             |
| -std=c++17          | ✅       | ✅       | ✅       | ✓ ISO 2017 C++                                             |
| -std=c++1y          | ✅       | ✅       | ✅       | ✗ 弃用，`-std=c++14` 替代，同 `-std=c++14`                 |
| -std=c++1z          | ✅       | ✅       | ✅       | ✗ 弃用，`-std=c++17` 替代，同 `-std=c++17`                 |
| -std=c++2a          | ✅       | ✅       | ❌       | ✓ ISO 2020(?) C++ draft [体验]                             |
| -std=c++98          | ✅       | ✅       | ✅       | ✓ ISO 1998 C++ 2003 修订版                                 |
| -std=c11            | ✅       | ✅       | ✅       | ✓ ISO 2011 C                                               |
| -std=c17            | ✅       | ✅       | ❌       | ✓ ISO 2017 C (2018)                                        |
| -std=c18            | ✅       | ✅       | ❌       | ✓ ISO 2017 C (2018)，同 `-std=c17`                         |
| -std=c1x            | ✅       | ✅       | ✅       | ✗ 弃用，`-std=c11` 替代，同 `-std=c11`                     |
| -std=c2x            | ✅       | ❌       | ❌       | ✓ ISO 202X C 标准草案 [体验]                               |
| -std=c89            | ✅       | ✅       | ✅       | ✓ ISO 1990 C 标准，同 `-std=c90`                           |
| -std=c90            | ✅       | ✅       | ✅       | ✓ ISO 1990 C                                               |
| -std=c99            | ✅       | ✅       | ✅       | ✓ ISO 1999 C                                               |
| -std=c9x            | ✅       | ✅       | ✅       | ✗ 弃用，`-std=c99` 替代，同 `-std=c99`                     |
| -std=gnu++03        | ✅       | ✅       | ✅       | ✓ ISO 1998 C++ 2003 修订版，带 GNU 扩展，同 `-std=gnu++98` |
| -std=gnu++0x        | ✅       | ✅       | ✅       | ✗ 弃用，`-std=gnu++11` 替代，同 `-std=gnu++11`             |
| -std=gnu++11        | ✅       | ✅       | ✅       | ✓ ISO 2011 C++ 标准，带 GNU 扩展                           |
| -std=gnu++14        | ✅       | ✅       | ✅       | ✓ ISO 2014 C++ 标准，带 GNU 扩展                           |
| -std=gnu++17        | ✅       | ✅       | ✅       | ✓ ISO 2017 C++ 标准，带 GNU 扩展                           |
| -std=gnu++1y        | ✅       | ✅       | ✅       | ✗ 弃用，`-std=gnu++14` 替代，同 std=gnu++14                |
| -std=gnu++1z        | ✅       | ✅       | ✅       | ✗ 弃用，`-std=gnu++17` 替代，同 std=gnu++17                |
| -std=gnu++2a        | ✅       | ✅       | ❌       | ✓ ISO 2020(?) C++ draft 标准，带 GNU 扩展 [体验]           |
| -std=gnu++98        | ✅       | ✅       | ✅       | ✓ ISO 1998 C++ 2003 修订版，带 GNU 扩展                    |
| -std=gnu11          | ✅       | ✅       | ✅       | ✓ ISO 2011 C 标准，带 GNU 扩展                             |
| -std=gnu17          | ✅       | ✅       | ❌       | ✓ ISO 2017 C (2018)，带 GNU 扩展                           |
| -std=gnu18          | ✅       | ✅       | ❌       | ✓ ISO 2017 C (2018)，带 GNU 扩展，同 std=gnu17             |
| -std=gnu1x          | ✅       | ✅       | ✅       | ✗ 弃用，`-std=gnu11` 替代，同 std=gnu11                    |
| -std=gnu2x          | ✅       | ❌       | ❌       | ✓ ISO 202X C 标准草案，带 GNU 扩展  [体验]                 |
| -std=gnu89          | ✅       | ✅       | ✅       | ✓ ISO 1990 C 标准，带 GNU 扩展，同 std=gnu90               |
| -std=gnu90          | ✅       | ✅       | ✅       | ✓ ISO 1990 C 标准，带 GNU 扩展                             |
| -std=gnu99          | ✅       | ✅       | ✅       | ✓ ISO 1999 C 标准，带 GNU 扩展                             |
| -std=gnu9x          | ✅       | ✅       | ✅       | ✗ 弃用，`-std=gnu99` 替代，同 std=gnu99                    |
| -std=iso9899:1990   | ✅       | ✅       | ✅       | ✓ ISO 1990 C 标准，同 std=c90                              |
| -std=iso9899:199409 | ✅       | ✅       | ✅       | ✓ ISO 1990 C as amended in 1994                            |
| -std=iso9899:1999   | ✅       | ✅       | ✅       | ✓ ISO 1999 C 标准，同 std=c99                              |
| -std=iso9899:199x   | ✅       | ✅       | ✅       | ✗ 弃用，`-std=iso9899:1999` 替代，同 std=c99               |
| -std=iso9899:2011   | ✅       | ✅       | ✅       | ✓ ISO 2011 C 标准，同 std=c11                              |
| -std=iso9899:2017   | ✅       | ✅       | ❌       | ✓ ISO 2017 C (2018)，同 `-std=c17`                         |
| -std=iso9899:2018   | ✅       | ✅       | ❌       | ✓ ISO 2017 C (2018)，同 `-std=c17`                         |

## 🐤🐥 GCC CLI 命令
- ld Linux man page https://www.man7.org/linux/man-pages/man1/ld.1.html
- https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html
- https://gcc.gnu.org/onlinedocs/gcc/Environment-Variables.html

GCC 环境变量：

- `CPATH` 搜索目录列表，分隔符号由 PATH_SEPARATOR 变量指定，通常是分号或冒号，等同 C_INCLUDE_PATH、OBJC_INCLUDE_PATH、CPLUS_INCLUDE_PATH。也可以使用命令选项，如 -I. -I/special/include
- `DEPENDENCIES_OUTPUT` 非系统依赖的输出，相当命令选项 -MM、-MT 和 -MF 结合
- `SUNPRO_DEPENDENCIES` 类似 DEPENDENCIES_OUTPUT，除了系统头文件不被忽略，相当 -M 选项
- `LIBRARY_PATH` 库文件搜索目录；

指定要引入的库文件时，-lfoo 和 -l:foo.so 分别会查找 libfoo.so 和 foo.so。

GCC 命令的常用选项：

|     选项     |                                       解释                                       |
|--------------|----------------------------------------------------------------------------------|
| -ansi        | 只支持 ANSI C 语法。这一选项将禁止 GNU C 的某些特色，例如 asm 或 typeof 关键词。 |
| -c           | 只编译并生成目标文件。                                                           |
| -DMACRO      | 以字符串"1"定义 MACRO 宏。                                                       |
| -DMACRO DEFN | 以字符串"DEFN"定义 MACRO 宏。                                                    |
| -E           | 只运行 C 预编译器。                                                              |
| -g           | 生成调试信息，一般用于生成 Debug 版本程序，GNU 调试器可利用该信息。              |
| -IDIRECTORY  | 指定 DIRECTORY 为额外的头文件搜索路径。                                          |
| -LDIRECTORY  | 指定 DIRECTORY 为额外的函数库搜索路径。                                          |
| -lLIBRARY    | 连接时搜索指定的函数库LIBRARY。                                                  |
| -m486        | 针对 486 进行代码优化。                                                          |
| -o           | FILE 生成指定的输出文件。用在生成可执行文件时。                                  |
| -O<number>   | 程序优化等级设置。                                                               |
| -s           | 清理符号 --strip-all 生成更小的可执行程序文件                                    |
| -shared      | 生成共享目标文件，通常用在建立共享库时。                                         |
| -static      | 使用静态共享连接。                                                               |
| -UMACRO      | 取消对 MACRO 宏的定义。                                                          |
| -w           | 不生成任何警告信息。                                                             |
| -Wall        | 生成所有警告信息。                                                               |

GCC 编译时加 -g 参数产生的额外调试，优化选项会剔除调试信息，额外调试符号能让 gdb 调试工作更明了：

- `-g` 产生当前操作系统默认调试信息格式。
- `-ggdb` 产生 GDB 专用的调度信息格式。
- `-g3` 指定调试信息等级为 Level 3：
    - Level 0 不产生调试信息，默认 Level 2，所以 -g0 与 -g 不同。
    - Level 1 产生最小的调试信息，包括函数和外部变量的描述，以及行号表，但没有关于局部变量的信息。
    - Level 3 包含额外的信息，如 macro 定义，部分调试器支持 -g3 生成的宏扩展。
- `-gstabs` 生成 stabs 格式调试信息，但是不包括 gdb 专用的额外调试信息。
- `-gstabs+` 生成 stabs+ 格式调试信息，并且包含 gdb 专用的额外调试信息。

GCC optimization 优化选项：

- `-O0` 默认设置减少了编译时间，并且具有调试总是产生预期结果的效果。
- `-O1` 编译器试图减少输出二进制代码的大小和执行速度，但它不会执行可能大幅增加编译时间的优化。
- `-O2` 编译器执行的优化不需要以空间换取速度，增加了编译时间，但与 Level 1 相比，提高了性能。
- `-O3` 在 -O2 的基础上，打开更多的选项，这些选项还需要在速度上权衡空间。
- `-Ofast` 优化速度，无视严格的标准遵从性。
- `-Og` 调试体验优化，而不是空间或速度。
- `-Os` 空间优化，而不是速度。

Level 0 相当于没有指定此选项，但是会打开一些功能，如 -falign-loops, -finline-functions-called-once, -fmove-loop-invariants。

Level 3 打开了 -fgcse-after-reload, -finline-functions, -fipa-cp-clone, -fpredictive-commoning, -ftree-vectorize, and -funswitch-loops，这些选项还需要在速度上权衡空间。该选项除了执行 -O2 所有的优化选项之外，一般都是采取很多向量化算法，提高代码的并行执行程度，利用现代 CPU 中的流水线。

调试体验优化 `-Og` 在保持 -O0 快速编译和良好调试体验的同时，提供合理的优化级别，禁用了其中会干扰调试的标志。用于生成可调试代码，包含在 -O0 优化级别中，某些被禁用的收集调试信息的编译器通道。


GCC 编译命令与链接命令使用，加 `-shared` 链接选项生成动态链接库：

    >gcc -c -o add_basic.o add_basic.c
    >gcc -o add_basic.dll -s -shared add_basic.o -Wl,--subsystem,windows

以上分步演示了编译和链接两个过程，但是 GCC 可以一步执行：

    gcc -o add_basic.dll -s -shared add_basic.c -Wl,--subsystem,windows

GCC 编译工具只是 GNU 旗下众多开源软件项目中的一个，GNU Binutils 工具套件提供的各个命令作用如下：

- Compiler 编译程序，gcc/g++/cc 用来编译源代码文件，通常通过 gcc 调用 g++ 或 cc 命令；
- Assemblers 汇编程序，编译汇编程序，通常通过 gcc 调用 as 命令；
- Linkers 链接程序，用来链接编译输出的目标文件，生成可执行程序，通常通过 gcc 调用 ld 命令，还有 ar 命令生成链接库；

GCC 编译套件不仅支持 C/C++，支持各种 C/C++ 方言标准，还支持 Go 或 Object-C/C++ 等，并且支持 x86、x86_64、ARM 等多种 CPU 架构。提供 `gcc` 命令相当于一个门户，它本身就是 C 语言编译器，并且通过它可以调用整个编译流程中会使用到的各种命令。它可以识别各种 C/C++ 源文件的扩展名，并将相应参数传给相应的命令，如果是 C++ 源代码，则执行 `g++` 命令。

另外，`cc` 是 Unix 系统的 C Compiler，一个是古老的 C 编译器命令。Linux 的 cc 一般是一个符号连接，指向 gcc，可以通过 `ls -l /usr/bin/cc` 来查看。

注意，直接使用 `g++` 编译 C 语言源代码会被当作 C++ 源代码处理。

安装 GCC 编译套件及调试器：

```sh
sudo apt-get install -y build-essential gdb
```

例如，编译 C 语言为汇编程序，不生成目标文件和可执行程序，只需要执行命令时使用 `-S` 参数：

```sh
gcc -S hello.c
as -o a.out hello.s
gcc -o hello a.out --verbose
ld -e main -lc -o hello a.out
```

链接程序默认使用 `_start` 符号作为程序入口，C 语言中使用 main，如果直接使用 ld 命令链接程序时
不指定入口就会报以下的错误。另外，需要给链接程序指明需要使用到的链接库，否则会报错符号未定义，
因为代码中调用的外部符号需要在链接时重新定位才能从正确的地址调用 API。

上面命令行中的 `-lc` 表示引用 GCC 默认提供的 libc.a 动态链接库，指定库文件名时省略 lib 前缀
和后缀名，如果依赖其它动态库，就需要通过 `-L` 参数指定要搜索的目录。

```sh
ld: warning: cannot find entry symbol _start; defaulting to 0000000000401000
hello.c:(.text+0x15): undefined reference to printf
```

链接 C++ 程序一般都会乃至标准库，如果使用 gcc 命令来执行 C++ 程序的编译链接工具，也应该指定
 -lstdc++ 引入基础库：

    ld -o model model.o -LC:\mingw\lib -lstdc++

LD 链接时，一般先指定目标文件，然后再指定依赖的库，从左到右扫描输入的依赖库，其它库之间也有
依赖关系时，也按这个规则处理，将库放在被依赖的库前面。

在链接过程中，还会加入 glibc 辅助运行库（C RunTime Library）几个目标文件，分别执行程序
启动、初始化、构造、析构和结束清理，它们通常会被 gcc 命令自动链接到应用程序中。

Linux 平台下它们的链接顺序是：

    ld crt1.o crti.o [user_objects] [system_libraries] crtn.o

crt1.o 中包含程序的入口函数 `_start` 以及两个未定义的符号 `__libc_start_main` 和 `main`，由 `_start` 负责调用 `__libc_start_main` 初始化 libc，然后调用我们源代码中定义的 `main` 函数。

由于类似于全局静态对象这样的代码需要在 `main` 函数之前执行，crti.o 和 crtn.o 负责辅助启动
这些代码。而 GCC 中也有相应的 crtbegin.o 和 crtend.o 两个文件，用于配合 glibc 来实现 C++
的全局构造和析构。

为了观察执行命令时的具体过程，可以使用 -v 命令行参数启动细节显示：

```sh
gcc -v hello.cpp
g++ -v hello.cpp
```

其实这一切 `gcc` 命令会自动帮你处理好，如果自行调用这些命令，就需要知道它们是如何工作的，
就是编译所有源代码 -> 生成目标文件 -> 链接所有目标文件 -> 符号重定位 -> 生成可执行程序。

    ╭───────────────╮  ╭────────╮  ╭──────╮
    │Assembly source│──│        │──│object│─╮
    ╰───────────────╯  │        │  ╰──────╯ │
                       │        │           │ ╭──────╮
    ╭───────────────╮  │        │  ╭──────╮ │ │      │  ╭─────╮
    │C source       │──│Compiler│──│object│─+─│Linker│──│ Exe │
    ╰───────────────╯  │        │  ╰──────╯ │ │      │  ╰─────╯
                       │        │           │ ╰───+──╯
    ╭───────────────╮  │        │  ╭──────╮ │     │
    │C++ source     │──│        │──│object│─╯     │
    ╰───────────────╯  ╰───+────╯  ╰──────╯       │
                           │                      │
    ╭──────────────╮       │               ╭──────+───────╮
    │ Header Files │───────╯               │Resource Files│
    ╰──────────────╯                       ╰──────────────╯

编译得到的目标文件是什么呢？其实它就是包含二进制代码的文件，只不过还不能直接执行，因为它包含
一些符号需要经过重定位后才能正确执行。这些符号可以是源代码中的一些函数，或需要调用的一些系统 API，
可以通过 `file a.out` 命令查看文件类型信息:

```sh
a.out: ELF 64-bit LSB relocatable, x86-64, version 1 (SYSV), not stripped
```

可以使用 `ldd` 命令查看可执行程序依赖的动态库，或使用 `readelf` 想看 Linux 可执行程序的文件信息。

生成的目标文件包含的信息可以通过 `objdump` 查看，包括反汇编、符号定义、符号重定位等。只是列表
其中的符号定义，可以使用 `nm` 命令。应该看到输出的文件格式信息为 `elf32-i386`，这表示运行于
 i386 架构上的 Linux 可执行文件。如果是 `elf64-x86-64` 表示使用的是 x86_64 架构运行的代码，
 表明正在使用的编译器是 64-bit 版本，应该安装 32-bit 版本编译出 elf32-i386 格式可执行程序。



## 🐤🐥 GCC Warning

❌ warning: no return statement in function returning non-void [-Wreturn-type]

一个函数需要返回一个 non-void 数据，但没有返回语句，可以 `return NULL;`。

❌ warning: 'xxx' is deprecated [-Wdeprecated-declarations]

使用了过时的符号定义，更正使用最新的替代符号。


## 🐤🐥 GCC Error

❌ error: 'xxx' was not declared in this scope

常见原因，名称写错，或是没有给编译器指定引用的导入库，又或者导入库的版本不对导致链接程序找不到符号定义。


❌ undefined reference to `xxx`

找不到引用符号的定义，链接程序没有大指定的链接库中找到对应符号，可能是导入库文件没在给链接程序指定。如果确实已经指定导入库文件，那需要确实，依赖使用的动态链接库和导入库版本是不一致，要确保编译器一致和编译的架构一致，尽量版本号也一致。

提示一下，像 VCpkg 会自动查找依赖的库，像本系统一样，编译 libpng 进出现 zlib 库的各种函数无定义：

    undefined reference to `deflateEnd'
    undefined reference to `crc32'

这是因为编译依赖库时找到的 zlib 是来自 Anaconda 中安装的库文件，而在自己编写的程序中引用的是另一个版本的库，前后不一致而导致找不到符号：

    C:/Anaconda3/Library/include
    C:/Anaconda3/Library/lib/z.lib

这里的问题就很隐秘，因为自己的程序中使用的 libpng 是使用 Anaconda 中的 zlib 编译的，而在编译程序时使用了另一个 zlib 版本，这就是版本不一致导致的引用未定义符号。

## 🐤🐥 gcc options

    Usage: gcc [options] file...
    Options:
      -pass-exit-codes         Exit with highest error code from a phase.
      --help                   Display this information.
      --target-help            Display target specific command line options.
      --help={common|optimizers|params|target|warnings|[^]{joined|separate|undocumented}}[,...].
                               Display specific types of command line options.
      --version                Display compiler version information.
      -dumpspecs               Display all of the built in spec strings.
      -dumpversion             Display the version of the compiler.
      -dumpmachine             Display the compiler's target processor.
      -print-search-dirs       Display the directories in the compiler's search path.
      -print-libgcc-file-name  Display the name of the compiler's companion library.
      -print-file-name=<lib>   Display the full path to library <lib>.
      -print-prog-name=<prog>  Display the full path to compiler component <prog>.
      -print-multiarch         Display the target's normalized GNU triplet, used as
                               a component in the library path.
      -print-multi-directory   Display the root directory for versions of libgcc.
      -print-multi-lib         Display the mapping between command line options and
                               multiple library search directories.
      -print-multi-os-directory Display the relative path to OS libraries.
      -print-sysroot           Display the target libraries directory.
      -print-sysroot-headers-suffix Display the sysroot suffix used to find headers.
      -Wa,<options>            Pass comma-separated <options> on to the assembler.
      -Wp,<options>            Pass comma-separated <options> on to the preprocessor.
      -Wl,<options>            Pass comma-separated <options> on to the linker.
      -Xassembler <arg>        Pass <arg> on to the assembler.
      -Xpreprocessor <arg>     Pass <arg> on to the preprocessor.
      -Xlinker <arg>           Pass <arg> on to the linker.
      -save-temps              Do not delete intermediate files.
      -save-temps=<arg>        Do not delete intermediate files.
      -no-canonical-prefixes   Do not canonicalize paths when building relative
                               prefixes to other gcc components.
      -pipe                    Use pipes rather than intermediate files.
      -time                    Time the execution of each subprocess.
      -specs=<file>            Override built-in specs with the contents of <file>.
      -std=<standard>          Assume that the input sources are for <standard>.
      --sysroot=<directory>    Use <directory> as the root directory for headers
                               and libraries.
      -B <directory>           Add <directory> to the compiler's search paths.
      -v                       Display the programs invoked by the compiler.
      -###                     Like -v but options quoted and commands not executed.
      -E                       Preprocess only; do not compile, assemble or link.
      -S                       Compile only; do not assemble or link.
      -c                       Compile and assemble, but do not link.
      -o <file>                Place the output into <file>.
      -pie                     Create a dynamically linked position independent
                               executable.
      -shared                  Create a shared library.
      -x <language>            Specify the language of the following input files.
                               Permissible languages include: c c++ assembler none
                               'none' means revert to the default behavior of
                               guessing the language based on the file's extension.

    Options starting with -g, -f, -m, -O, -W, or --param are automatically
     passed on to the various sub-processes invoked by gcc.  In order to pass
     other options on to these processes the -W<letter> options must be used.

    The following options are specific to just the language Ada:
      -fbuiltin-printf            Ignored.

    The following options are specific to just the language AdaSCIL:
     None found.  Use --help=AdaSCIL to show *all* the options supported by the AdaSCIL front-end.

    The following options are specific to just the language AdaWhy:
     None found.  Use --help=AdaWhy to show *all* the options supported by the AdaWhy front-end.

    The following options are specific to just the language BRIG:
     None found.  Use --help=BRIG to show *all* the options supported by the BRIG front-end.

    The following options are specific to just the language C:
      -fgimple                    Enable parsing GIMPLE.
      -lang-asm                   This option lacks documentation.

    The following options are specific to just the language C++:
      -Wplacement-new             Warn for placement new expressions with undefined
                                  behavior.  Same as -Wplacement-new=.
      -Wplacement-new=<0,2>       Warn for placement new expressions with undefined
                                  behavior.
## 🐤🐥 Fortran options

    The following options are specific to just the language Fortran:
      -J<directory>               Put MODULE files in 'directory'.
      -Waliasing                  Warn about possible aliasing of dummy arguments.
      -Walign-commons             Warn about alignment of COMMON blocks.
      -Wampersand                 Warn about missing ampersand in continued
                                  character constants.
      -Wargument-mismatch         Warn about type and rank mismatches between
                                  arguments and parameters.
      -Warray-temporaries         Warn about creation of array temporaries.
      -Wc-binding-type            Warn if the type of a variable might be not
                                  interoperable with C.
      -Wcharacter-truncation      Warn about truncated character expressions.
      -Wcompare-reals             Warn about equality comparisons involving REAL or
                                  COMPLEX expressions.
      -Wconversion-extra          Warn about most implicit conversions.
      -Wdo-subscript              Warn about possibly incorrect subscripts in do
                                  loops.
      -Wfrontend-loop-interchange Warn if loops have been interchanged.
      -Wfunction-elimination      Warn about function call elimination.
      -Wimplicit-interface        Warn about calls with implicit interface.
      -Wimplicit-procedure        Warn about called procedures not explicitly
                                  declared.
      -Winteger-division          Warn about constant integer divisions with
                                  truncated results.
      -Wintrinsic-shadow          Warn if a user-procedure has the same name as an
                                  intrinsic.
      -Wintrinsics-std            Warn on intrinsics not part of the selected
                                  standard.
      -Wline-truncation           Warn about truncated source lines.
      -Wreal-q-constant           Warn about real-literal-constants with 'q'
                                  exponent-letter.
      -Wrealloc-lhs               Warn when a left-hand-side array variable is
                                  reallocated.
      -Wrealloc-lhs-all           Warn when a left-hand-side variable is
                                  reallocated.
      -Wsurprising                Warn about "suspicious" constructs.
      -Wtabs                      Permit nonconforming uses of the tab character.
      -Wtarget-lifetime           Warn if the pointer in a pointer assignment might
                                  outlive its target.
      -Wundefined-do-loop         Warn about an invalid DO loop.
      -Wunderflow                 Warn about underflow of numerical constant
                                  expressions.
      -Wunused-dummy-argument     Warn about unused dummy arguments.
      -Wuse-without-only          Warn about USE statements that have no ONLY
                                  qualifier.
      -Wzerotrip                  Warn about zero-trip DO loops.
      -cpp                        Enable preprocessing.
      -cpp=                       This option lacks documentation.
      -faggressive-function-elimination Eliminate multiple function invocations
                                  also for impure functions.
      -falign-commons             Enable alignment of COMMON blocks.
      -fall-intrinsics            All intrinsics procedures are available
                                  regardless of selected standard.
      -fallow-leading-underscore  This option lacks documentation.
      -fautomatic                 Do not treat local variables and COMMON blocks as
                                  if they were named in SAVE statements.
      -fbackslash                 Specify that backslash in string introduces an
                                  escape character.
      -fbacktrace                 Produce a backtrace when a runtime error is
                                  encountered.
      -fblas-matmul-limit=<n>     Size of the smallest matrix for which matmul will
                                  use BLAS.
      -fc-prototypes              Generate C prototypes from BIND(C) declarations.
      -fcheck-array-temporaries   Produce a warning at runtime if a array temporary
                                  has been created for a procedure argument.
      -fcheck=[...]               Specify which runtime checks are to be performed.
      -fcoarray=<none|single|lib> Specify which coarray parallelization should be
                                  used.
      -fconvert=                  -fconvert=<big-endian|little-endian|native|swap>
                                  The endianness used for unformatted files.
      -fcray-pointer              Use the Cray Pointer extension.
      -fd-lines-as-code           Ignore 'D' in column one in fixed form.
      -fd-lines-as-comments       Treat lines with 'D' in column one as comments.
      -fdec                       Enable all DEC language extensions.
      -fdec-intrinsic-ints        Enable kind-specific variants of integer
                                  intrinsic functions.
      -fdec-math                  Enable legacy math intrinsics for compatibility.
      -fdec-static                Enable DEC-style STATIC and AUTOMATIC attributes.
      -fdec-structure             Enable support for DEC STRUCTURE/RECORD.
      -fdefault-double-8          Set the default double precision kind to an 8
                                  byte wide type.
      -fdefault-integer-8         Set the default integer kind to an 8 byte wide
                                  type.
      -fdefault-real-10           Set the default real kind to an 10 byte wide type.
      -fdefault-real-16           Set the default real kind to an 16 byte wide type.
      -fdefault-real-8            Set the default real kind to an 8 byte wide type.
      -fdollar-ok                 Allow dollar signs in entity names.
      -fdump-core                 Does nothing. Preserved for backward
                                  compatibility.
      -fdump-fortran-optimized    Display the code tree after front end
                                  optimization.
      -fdump-fortran-original     Display the code tree after parsing.
      -fdump-parse-tree           Display the code tree after parsing; deprecated
                                  option.  Same as -fdump-fortran-original.
      -fexternal-blas             Specify that an external BLAS library should be
                                  used for matmul calls on large-size arrays.
      -ff2c                       Use f2c calling convention.
      -ffixed-form                Assume that the source file is fixed form.
      -ffixed-line-length-<n>     Use n as character line width in fixed mode.
      -ffixed-line-length-none    Allow arbitrary character line width in fixed
                                  mode.
      -ffpe-summary=[...]         Print summary of floating point exceptions.
      -ffpe-trap=[...]            Stop on following floating point exceptions.
      -ffree-form                 Assume that the source file is free form.
      -ffree-line-length-<n>      Use n as character line width in free mode.
      -ffree-line-length-none     Allow arbitrary character line width in free mode.
      -ffrontend-loop-interchange Try to interchange loops if profitable.
      -ffrontend-optimize         Enable front end optimization.
      -fimplicit-none             Specify that no implicit typing is allowed,
                                  unless overridden by explicit IMPLICIT statements.
      -finit-character=<n>        Initialize local character variables to ASCII
                                  value n.
      -finit-derived              Initialize components of derived type variables
                                  according to other init flags.
      -finit-integer=<n>          Initialize local integer variables to n.
      -finit-local-zero           Initialize local variables to zero (from g77).
      -finit-logical=<true|false> Initialize local logical variables.
      -finit-real=<zero|snan|nan|inf|-inf> Initialize local real variables.
      -finline-matmul-limit=<n>   Specify the size of the largest matrix for which
                                  matmul will be inlined.
      -finteger-4-integer-8       Interpret any INTEGER(4) as an INTEGER(8).
      -fintrinsic-modules-path    Specify where to find the compiled intrinsic
                                  modules.
      -fintrinsic-modules-path=   Specify where to find the compiled intrinsic
                                  modules.
      -fmax-array-constructor=<n> Maximum number of objects in an array constructor.
      -fmax-identifier-length=<n> Maximum identifier length.
      -fmax-stack-var-size=<n>    Size in bytes of the largest array that will be
                                  put on the stack.
      -fmax-subrecord-length=<n>  Maximum length for subrecords.
      -fmodule-private            Set default accessibility of module entities to
                                  PRIVATE.
      -fpack-derived              Try to lay out derived types as compactly as
                                  possible.
      -fprotect-parens            Protect parentheses in expressions.
      -frange-check               Enable range checking during compilation.
      -freal-4-real-10            Interpret any REAL(4) as a REAL(10).
      -freal-4-real-16            Interpret any REAL(4) as a REAL(16).
      -freal-4-real-8             Interpret any REAL(4) as a REAL(8).
      -freal-8-real-10            Interpret any REAL(8) as a REAL(10).
      -freal-8-real-16            Interpret any REAL(8) as a REAL(16).
      -freal-8-real-4             Interpret any REAL(8) as a REAL(4).
      -frealloc-lhs               Reallocate the LHS in assignments.
      -frecord-marker=4           Use a 4-byte record marker for unformatted files.
      -frecord-marker=8           Use an 8-byte record marker for unformatted files.
      -frecursive                 Allocate local variables on the stack to allow
                                  indirect recursion.
      -frepack-arrays             Copy array sections into a contiguous block on
                                  procedure entry.
      -fsecond-underscore         Append a second underscore if the name already
                                  contains an underscore.
      -fsign-zero                 Apply negative sign to zero values.
      -fstack-arrays              Put all local arrays on stack.
      -ftest-forall-temp          Force creation of temporary to test infrequently-
                                  executed forall code.
      -funderscoring              Append underscores to externally visible names.
      -fwhole-file                Does nothing.  Preserved for backward
                                  compatibility.
      -nocpp                      Disable preprocessing.
      -static-libgfortran         Statically link the GNU Fortran helper library
                                  (libgfortran).
      -std=f2003                  Conform to the ISO Fortran 2003 standard.
      -std=f2008                  Conform to the ISO Fortran 2008 standard.
      -std=f2008ts                Conform to the ISO Fortran 2008 standard
                                  including TS 29113.
      -std=f2018                  Conform to the ISO Fortran 2018 standard.
      -std=f95                    Conform to the ISO Fortran 95 standard.
      -std=gnu                    Conform to nothing in particular.
      -std=legacy                 Accept extensions to support legacy code.

## 🐤🐥 golang options

    The following options are specific to just the language Go:
      -fgo-c-header=<file>        Write Go struct definitions to file as C code.
      -fgo-check-divide-overflow  Add explicit checks for division overflow in
                                  INT_MIN / -1.
      -fgo-check-divide-zero      Add explicit checks for division by zero.
      -fgo-compiling-runtime      Apply special rules for compiling runtime package.
      -fgo-debug-escape           Emit debugging information related to the escape
                                  analysis pass when run with -fgo-optimize-allocs.
      -fgo-debug-escape-hash=<string> Hash value to debug escape analysis.
      -fgo-dump-<type>            Dump Go frontend internal information.
      -fgo-optimize-<type>        Turn on optimization passes in the frontend.
      -fgo-pkgpath=<string>       Set Go package path.
      -fgo-prefix=<string>        Set package-specific prefix for exported Go names.
      -fgo-relative-import-path=<path> Treat a relative import as relative to path.
      -frequire-return-statement  Functions which return values must end with
                                  return statements.

    The following options are specific to just the language LTO:
      -flinker-output=            Set linker output type (used internally during
                                  LTO optimization)
      -fltrans                    Run the link-time optimizer in local
                                  transformation (LTRANS) mode.
      -fltrans-output-list=       Specify a file to which a list of files output by
                                  LTRANS is written.
      -fresolution=               The resolution file.
      -fwpa                       Run the link-time optimizer in whole program
                                  analysis (WPA) mode.
      -fwpa=                      Whole program analysis (WPA) mode with number of
                                  parallel jobs specified.

    The following options are specific to just the language ObjC:
     None found.  Use --help=ObjC to show *all* the options supported by the ObjC front-end.

    The following options are specific to just the language ObjC++:
      -fobjc-call-cxx-cdtors      Generate special Objective-C methods to
                                  initialize/destroy non-POD C++ ivars, if needed.
## 🐤🐥 language-related

    The following options are language-related:
      --all-warnings              Same as -Wall.  Use the latter option instead.
      --ansi                      Same as -ansi.  Use the latter option instead.
      --assert                    Same as -A.  Use the latter option instead.
      --assert=                   Same as -A.  Use the latter option instead.
      --comments                  Same as -C.  Use the latter option instead.
      --comments-in-macros        Same as -CC.  Use the latter option instead.
      --define-macro              Same as -D.  Use the latter option instead.
      --define-macro=             Same as -D.  Use the latter option instead.
      --dependencies              Same as -M.  Use the latter option instead.
      --dump                      Same as -d.  Use the latter option instead.
      --dump=                     Same as -d.  Use the latter option instead.
      --imacros                   Same as -imacros.  Use the latter option instead.
      --imacros=                  Same as -imacros.  Use the latter option instead.
      --include                   Same as -include.  Use the latter option instead.
      --include-barrier           Same as -I.  Use the latter option instead.
      --include-directory         Same as -I.  Use the latter option instead.
      --include-directory-after   Same as -idirafter.  Use the latter option
                                  instead.
      --include-directory-after=  Same as -idirafter.  Use the latter option
                                  instead.
      --include-directory=        Same as -I.  Use the latter option instead.
      --include-prefix            Same as -iprefix.  Use the latter option instead.
      --include-prefix=           Same as -iprefix.  Use the latter option instead.
      --include-with-prefix       Same as -iwithprefix.  Use the latter option
                                  instead.
      --include-with-prefix-after Same as -iwithprefix.  Use the latter option
                                  instead.
      --include-with-prefix-after= Same as -iwithprefix.  Use the latter option
                                  instead.
      --include-with-prefix-before Same as -iwithprefixbefore.  Use the latter
                                  option instead.
      --include-with-prefix-before= Same as -iwithprefixbefore.  Use the latter
                                  option instead.
      --include-with-prefix=      Same as -iwithprefix.  Use the latter option
                                  instead.
      --include=                  Same as -include.  Use the latter option instead.
      --no-line-commands          Same as -P.  Use the latter option instead.
      --no-standard-includes      Same as -nostdinc.  Use the latter option instead.
      --no-standard-libraries     Same as -nostdlib.  Use the latter option instead.
      --no-warnings               Same as -w.  Use the latter option instead.
      --output                    Same as -o.  Use the latter option instead.
      --output-pch=               This option lacks documentation.
      --output=                   Same as -o.  Use the latter option instead.
      --pedantic                  Same as -Wpedantic.  Use the latter option
                                  instead.
      --preprocess                This option lacks documentation.
      --print-missing-file-dependencies Same as -MG.  Use the latter option instead.
      --trace-includes            Same as -H.  Use the latter option instead.
      --traditional-cpp           Same as -traditional-cpp.  Use the latter option
                                  instead.
      --trigraphs                 Same as -trigraphs.  Use the latter option
                                  instead.
      --undefine-macro            Same as -U.  Use the latter option instead.
      --undefine-macro=           Same as -U.  Use the latter option instead.
      --user-dependencies         Same as -MM.  Use the latter option instead.
      --verbose                   Same as -v.  Use the latter option instead.
      --write-dependencies        Same as -MD.  Use the latter option instead.
      --write-user-dependencies   Same as -MMD.  Use the latter option instead.
      -A<question>=<answer>       Assert the <answer> to <question>.  Putting '-'
                                  before <question> disables the <answer> to
                                  <question>.
      -C                          Do not discard comments.
      -CC                         Do not discard comments in macro expansions.
      -D<macro>[=<val>]           Define a <macro> with <val> as its value.  If
                                  just <macro> is given, <val> is taken to be 1.
      -E                          This option lacks documentation.
      -F <dir>                    Add <dir> to the end of the main framework
                                  include path.
      -H                          Print the name of header files as they are used.
      -I <dir>                    Add <dir> to the end of the main include path.
      -L                          This option lacks documentation.
      -M                          Generate make dependencies.
      -MD                         Generate make dependencies and compile.
      -MF <file>                  Write dependency output to the given file.
      -MG                         Treat missing header files as generated files.
      -MM                         Like -M but ignore system header files.
      -MMD                        Like -MD but ignore system header files.
      -MP                         Generate phony targets for all headers.
      -MQ <target>                Add a MAKE-quoted target.
      -MT <target>                Add an unquoted target.
      -P                          Do not generate #line directives.
      -U<macro>                   Undefine <macro>.
      -Wabi                       Warn about things that will change when compiling
                                  with an ABI-compliant compiler.
      -Wabi-tag                   Warn if a subobject has an abi_tag attribute that
                                  the complete object type does not have.
      -Wabi=                      Warn about things that change between the current
                                  -fabi-version and the specified version.
      -Waddress                   Warn about suspicious uses of memory addresses.
      -Waligned-new               Warn about 'new' of type with extended alignment
                                  without -faligned-new.  Same as -Waligned-new=.
      -Waligned-new=[none|global|all] Warn even if 'new' uses a class member
                                  allocation function.
      -Wall                       Enable most warning messages.
      -Walloc-size-larger-than=   -Walloc-size-larger-than=<bytes> Warn for calls
                                  to allocation functions that attempt to allocate
                                  objects larger than the specified number of bytes.
      -Walloc-zero                -Walloc-zero Warn for calls to allocation
                                  functions that specify zero bytes.
      -Walloca                    Warn on any use of alloca.
      -Walloca-larger-than=<number> Warn on unbounded uses of alloca, and on
                                  bounded uses of alloca whose bound can be larger
                                  than <number> bytes.
      -Wassign-intercept          Warn whenever an Objective-C assignment is being
                                  intercepted by the garbage collector.
      -Wbad-function-cast         Warn about casting functions to incompatible
                                  types.
      -Wbool-compare              Warn about boolean expression compared with an
                                  integer value different from true/false.
      -Wbool-operation            Warn about certain operations on boolean
                                  expressions.
      -Wbuiltin-declaration-mismatch Warn when a built-in function is declared with
                                  the wrong signature.
      -Wbuiltin-macro-redefined   Warn when a built-in preprocessor macro is
                                  undefined or redefined.
      -Wc++-compat                Warn about C constructs that are not in the
                                  common subset of C and C++.
      -Wc++0x-compat              Same as -Wc++11-compat.  Use the latter option
                                  instead.
      -Wc++11-compat              Warn about C++ constructs whose meaning differs
                                  between ISO C++ 1998 and ISO C++ 2011.
      -Wc++14-compat              Warn about C++ constructs whose meaning differs
                                  between ISO C++ 2011 and ISO C++ 2014.
      -Wc++17-compat              Warn about C++ constructs whose meaning differs
                                  between ISO C++ 2014 and ISO C++ 2017.
      -Wc++1z-compat              Same as -Wc++17-compat.  Use the latter option
                                  instead.
      -Wc90-c99-compat            Warn about features not present in ISO C90, but
                                  present in ISO C99.
      -Wc99-c11-compat            Warn about features not present in ISO C99, but
                                  present in ISO C11.
      -Wcast-function-type        Warn about casts between incompatible function
                                  types.
      -Wcast-qual                 Warn about casts which discard qualifiers.
      -Wcatch-value               Warn about catch handlers of non-reference type. 
                                  Same as -Wcatch-value=.
      -Wcatch-value=<0,3>         Warn about catch handlers of non-reference type.
      -Wchar-subscripts           Warn about subscripts whose type is "char".
      -Wchkp                      Warn about memory access errors found by Pointer
                                  Bounds Checker.
      -Wclass-memaccess           Warn for unsafe raw memory writes to objects of
                                  class types.
      -Wclobbered                 Warn about variables that might be changed by
                                  "longjmp" or "vfork".
      -Wcomment                   Warn about possibly nested block comments, and
                                  C++ comments spanning more than one physical line.
      -Wcomments                  Synonym for -Wcomment.  Same as -Wcomment.
      -Wconditionally-supported   Warn for conditionally-supported constructs.
      -Wconversion                Warn for implicit type conversions that may
                                  change a value.
      -Wconversion-null           Warn for converting NULL from/to a non-pointer
                                  type.
      -Wcpp                       Warn when a #warning directive is encountered.
      -Wctor-dtor-privacy         Warn when all constructors and destructors are
                                  private.
      -Wdangling-else             Warn about dangling else.
      -Wdate-time                 Warn about __TIME__, __DATE__ and __TIMESTAMP__
                                  usage.
      -Wdeclaration-after-statement Warn when a declaration is found after a
                                  statement.
      -Wdelete-incomplete         Warn when deleting a pointer to incomplete type.
      -Wdelete-non-virtual-dtor   Warn about deleting polymorphic objects with non-
                                  virtual destructors.
      -Wdeprecated                Warn if a deprecated compiler feature, class,
                                  method, or field is used.
      -Wdesignated-init           Warn about positional initialization of structs
                                  requiring designated initializers.
      -Wdiscarded-array-qualifiers Warn if qualifiers on arrays which are pointer
                                  targets are discarded.
      -Wdiscarded-qualifiers      Warn if type qualifiers on pointers are discarded.
      -Wdiv-by-zero               Warn about compile-time integer division by zero.
      -Wdouble-promotion          Warn about implicit conversions from "float" to
                                  "double".
      -Wduplicate-decl-specifier  Warn when a declaration has duplicate const,
                                  volatile, restrict or _Atomic specifier.
      -Wduplicated-branches       Warn about duplicated branches in if-else
                                  statements.
      -Wduplicated-cond           Warn about duplicated conditions in an if-else-if
                                  chain.
      -Weffc++                    Warn about violations of Effective C++ style
                                  rules.
      -Wempty-body                Warn about an empty body in an if or else
                                  statement.
      -Wendif-labels              Warn about stray tokens after #else and #endif.
      -Wenum-compare              Warn about comparison of different enum types.
      -Werror                     Treat all warnings as errors.
      -Werror-implicit-function-declaration This switch is deprecated; use
                                  -Werror=implicit-function-declaration instead. 
                                  Same as -Werror=.
      -Wexpansion-to-defined      Warn if "defined" is used outside #if.
      -Wextra                     Print extra (possibly unwanted) warnings.
      -Wextra-semi                Warn about semicolon after in-class function
                                  definition.
      -Wfloat-conversion          Warn for implicit type conversions that cause
                                  loss of floating point precision.
      -Wfloat-equal               Warn if testing floating point numbers for
                                  equality.
      -Wformat                    Warn about printf/scanf/strftime/strfmon format
                                  string anomalies.  Same as -Wformat=.
      -Wformat-contains-nul       Warn about format strings that contain NUL bytes.
      -Wformat-extra-args         Warn if passing too many arguments to a function
                                  for its format string.
      -Wformat-nonliteral         Warn about format strings that are not literals.
      -Wformat-overflow<0,2>      Warn about function calls with format strings
                                  that write past the end of the destination
                                  region.  Same as -Wformat-overflow=1.  Same as
                                  -Wformat-overflow=.
      -Wformat-overflow=<0,2>     Warn about function calls with format strings
                                  that write past the end of the destination region.
      -Wformat-security           Warn about possible security problems with format
                                  functions.
      -Wformat-signedness         Warn about sign differences with format functions.
      -Wformat-truncation         Warn about calls to snprintf and similar
                                  functions that truncate output. Same as -Wformat-
                                  truncation=1.  Same as -Wformat-truncation=.
      -Wformat-truncation=<0,2>   Warn about calls to snprintf and similar
                                  functions that truncate output.
      -Wformat-y2k                Warn about strftime formats yielding 2-digit
                                  years.
      -Wformat-zero-length        Warn about zero-length formats.
      -Wformat=<0,2>              Warn about printf/scanf/strftime/strfmon format
                                  string anomalies.
      -Wframe-address             Warn when __builtin_frame_address or
                                  __builtin_return_address is used unsafely.
      -Wif-not-aligned            Warn when the field in a struct is not aligned.
      -Wignored-attributes        Warn whenever attributes are ignored.
      -Wignored-qualifiers        Warn whenever type qualifiers are ignored.
      -Wimplicit                  Warn about implicit declarations.
      -Wimplicit-function-declaration Warn about implicit function declarations.
      -Wimplicit-int              Warn when a declaration does not specify a type.
      -Wimport                    This option lacks documentation.
      -Wincompatible-pointer-types Warn when there is a conversion between pointers
                                  that have incompatible types.
      -Winherited-variadic-ctor   Warn about C++11 inheriting constructors when the
                                  base has a variadic constructor.
      -Winit-self                 Warn about variables which are initialized to
                                  themselves.
      -Wint-conversion            Warn about incompatible integer to pointer and
                                  pointer to integer conversions.
      -Wint-in-bool-context       Warn for suspicious integer expressions in
                                  boolean context.
      -Wint-to-pointer-cast       Warn when there is a cast to a pointer from an
                                  integer of a different size.
      -Winvalid-offsetof          Warn about invalid uses of the "offsetof" macro.
      -Winvalid-pch               Warn about PCH files that are found but not used.
      -Wjump-misses-init          Warn when a jump misses a variable initialization.
      -Wliteral-suffix            Warn when a string or character literal is
                                  followed by a ud-suffix which does not begin with
                                  an underscore.
      -Wlogical-not-parentheses   Warn when logical not is used on the left hand
                                  side operand of a comparison.
      -Wlogical-op                Warn when a logical operator is suspiciously
                                  always evaluating to true or false.
      -Wlong-long                 Do not warn about using "long long" when
                                  -pedantic.
      -Wmain                      Warn about suspicious declarations of "main".
      -Wmaybe-uninitialized       Warn about maybe uninitialized automatic
                                  variables.
      -Wmemset-elt-size           Warn about suspicious calls to memset where the
                                  third argument contains the number of elements
                                  not multiplied by the element size.
      -Wmemset-transposed-args    Warn about suspicious calls to memset where the
                                  third argument is constant literal zero and the
                                  second is not.
      -Wmisleading-indentation    Warn when the indentation of the code does not
                                  reflect the block structure.
      -Wmissing-attributes        Warn about declarations of entities that may be
                                  missing attributes that related entities have
                                  been declared with it.
      -Wmissing-braces            Warn about possibly missing braces around
                                  initializers.
      -Wmissing-declarations      Warn about global functions without previous
                                  declarations.
      -Wmissing-field-initializers Warn about missing fields in struct initializers.
      -Wmissing-format-attribute  Same as -Wsuggest-attribute=format.  Use the
                                  latter option instead.
      -Wmissing-include-dirs      Warn about user-specified include directories
                                  that do not exist.
      -Wmissing-parameter-type    Warn about function parameters declared without a
                                  type specifier in K&R-style functions.
      -Wmissing-prototypes        Warn about global functions without prototypes.
      -Wmudflap                   This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -Wmultichar                 Warn about use of multi-character character
                                  constants.
      -Wmultiple-inheritance      Warn on direct multiple inheritance.
      -Wmultistatement-macros     Warn about unsafe macros expanding to multiple
                                  statements used as a body of a clause such as if,
                                  else, while, switch, or for.
      -Wnamespaces                Warn on namespace definition.
      -Wnarrowing                 Warn about narrowing conversions within { } that
                                  are ill-formed in C++11.
      -Wnested-externs            Warn about "extern" declarations not at file
                                  scope.
      -Wnoexcept                  Warn when a noexcept expression evaluates to
                                  false even though the expression can't actually
                                  throw.
      -Wnoexcept-type             Warn if C++17 noexcept function type will change
                                  the mangled name of a symbol.
      -Wnon-template-friend       Warn when non-templatized friend functions are
                                  declared within a template.
      -Wnon-virtual-dtor          Warn about non-virtual destructors.
      -Wnonnull                   Warn about NULL being passed to argument slots
                                  marked as requiring non-NULL.
      -Wnonnull-compare           Warn if comparing pointer parameter with nonnull
                                  attribute with NULL.
      -Wnormalized                Same as -Wnormalized=.  Use the latter option
                                  instead.
      -Wnormalized=[none|id|nfc|nfkc] Warn about non-normalized Unicode strings.
      -Wold-style-cast            Warn if a C-style cast is used in a program.
      -Wold-style-declaration     Warn for obsolescent usage in a declaration.
      -Wold-style-definition      Warn if an old-style parameter definition is used.
      -Wopenmp-simd               Warn if a simd directive is overridden by the
                                  vectorizer cost model.
      -Woverlength-strings        Warn if a string is longer than the maximum
                                  portable length specified by the standard.
      -Woverloaded-virtual        Warn about overloaded virtual function names.
      -Woverride-init             Warn about overriding initializers without side
                                  effects.
      -Woverride-init-side-effects Warn about overriding initializers with side
                                  effects.
      -Wpacked-bitfield-compat    Warn about packed bit-fields whose offset changed
                                  in GCC 4.4.
      -Wpacked-not-aligned        Warn when fields in a struct with the packed
                                  attribute are misaligned.
      -Wparentheses               Warn about possibly missing parentheses.
      -Wpedantic                  Issue warnings needed for strict compliance to
                                  the standard.
      -Wpedantic-ms-format        Warn about none ISO msvcrt scanf/printf width
                                  extensions.
      -Wpmf-conversions           Warn when converting the type of pointers to
                                  member functions.
      -Wpointer-arith             Warn about function pointer arithmetic.
      -Wpointer-compare           Warn when a pointer is compared with a zero
                                  character constant.
      -Wpointer-sign              Warn when a pointer differs in signedness in an
                                  assignment.
      -Wpointer-to-int-cast       Warn when a pointer is cast to an integer of a
                                  different size.
      -Wpragmas                   Warn about misuses of pragmas.
      -Wproperty-assign-default   Warn if a property for an Objective-C object has
                                  no assign semantics specified.
      -Wprotocol                  Warn if inherited methods are unimplemented.
      -Wpsabi                     This option lacks documentation.
      -Wredundant-decls           Warn about multiple declarations of the same
                                  object.
      -Wregister                  Warn about uses of register storage specifier.
      -Wreorder                   Warn when the compiler reorders code.
      -Wrestrict                  Warn when an argument passed to a restrict-
                                  qualified parameter aliases with another argument.
      -Wreturn-type               Warn whenever a function's return type defaults
                                  to "int" (C), or about inconsistent return types
                                  (C++).
      -Wscalar-storage-order      Warn on suspicious constructs involving reverse
                                  scalar storage order.
      -Wselector                  Warn if a selector has multiple methods.
      -Wsequence-point            Warn about possible violations of sequence point
                                  rules.
      -Wshadow-ivar               Warn if a local declaration hides an instance
                                  variable.
      -Wshift-count-negative      Warn if shift count is negative.
      -Wshift-count-overflow      Warn if shift count >= width of type.
      -Wshift-negative-value      Warn if left shifting a negative value.
      -Wshift-overflow            Warn if left shift of a signed value overflows. 
                                  Same as -Wshift-overflow=.
      -Wshift-overflow=<0,2>      Warn if left shift of a signed value overflows.
      -Wsign-compare              Warn about signed-unsigned comparisons.
      -Wsign-conversion           Warn for implicit type conversions between signed
                                  and unsigned integers.
      -Wsign-promo                Warn when overload promotes from unsigned to
                                  signed.
      -Wsized-deallocation        Warn about missing sized deallocation functions.
      -Wsizeof-array-argument     Warn when sizeof is applied on a parameter
                                  declared as an array.
      -Wsizeof-pointer-div        Warn about suspicious divisions of two sizeof
                                  expressions that don't work correctly with
                                  pointers.
      -Wsizeof-pointer-memaccess  Warn about suspicious length parameters to
                                  certain string functions if the argument uses
                                  sizeof.
      -Wstrict-aliasing=<0,3>     Warn about code which might break strict aliasing
                                  rules.
      -Wstrict-null-sentinel      Warn about uncasted NULL used as sentinel.
      -Wstrict-overflow=<0,5>     Warn about optimizations that assume that signed
                                  overflow is undefined.
      -Wstrict-prototypes         Warn about unprototyped function declarations.
      -Wstrict-selector-match     Warn if type signatures of candidate methods do
                                  not match exactly.
      -Wstringop-overflow         Warn about buffer overflow in string manipulation
                                  functions like memcpy and strcpy.  Same as
                                  -Wstringop-overflow=.
      -Wstringop-overflow=<0,4>   Under the control of Object Size type, warn about
                                  buffer overflow in string manipulation functions
                                  like memcpy and strcpy.
      -Wstringop-truncation       Warn about truncation in string manipulation
                                  functions like strncat and strncpy.
      -Wsubobject-linkage         Warn if a class type has a base or a field whose
                                  type uses the anonymous namespace or depends on a
                                  type with no linkage.
      -Wsuggest-attribute=format  Warn about functions which might be candidates
                                  for format attributes.
      -Wsuggest-override          Suggest that the override keyword be used when
                                  the declaration of a virtual function overrides
                                  another.
      -Wswitch                    Warn about enumerated switches, with no default,
                                  missing a case.
      -Wswitch-bool               Warn about switches with boolean controlling
                                  expression.
      -Wswitch-default            Warn about enumerated switches missing a
                                  "default:" statement.
      -Wswitch-enum               Warn about all enumerated switches missing a
                                  specific case.
      -Wsync-nand                 Warn when __sync_fetch_and_nand and
                                  __sync_nand_and_fetch built-in functions are used.
      -Wsynth                     Deprecated.  This switch has no effect.
      -Wsystem-headers            Do not suppress warnings from system headers.
      -Wtautological-compare      Warn if a comparison always evaluates to true or
                                  false.
      -Wtemplates                 Warn on primary template declaration.
      -Wterminate                 Warn if a throw expression will always result in
                                  a call to terminate().
      -Wtraditional               Warn about features not present in traditional C.
      -Wtraditional-conversion    Warn of prototypes causing type conversions
                                  different from what would happen in the absence
                                  of prototype.
      -Wtrigraphs                 Warn if trigraphs are encountered that might
                                  affect the meaning of the program.
      -Wundeclared-selector       Warn about @selector()s without previously
                                  declared methods.
      -Wundef                     Warn if an undefined macro is used in an #if
                                  directive.
      -Wuninitialized             Warn about uninitialized automatic variables.
      -Wunknown-pragmas           Warn about unrecognized pragmas.
      -Wunsuffixed-float-constants Warn about unsuffixed float constants.
      -Wunused                    Enable all -Wunused- warnings.
      -Wunused-const-variable     Warn when a const variable is unused.  Same as
                                  -Wunused-const-variable=.
      -Wunused-const-variable=<0,2> Warn when a const variable is unused.
      -Wunused-local-typedefs     Warn when typedefs locally defined in a function
                                  are not used.
      -Wunused-macros             Warn about macros defined in the main file that
                                  are not used.
      -Wunused-result             Warn if a caller of a function, marked with
                                  attribute warn_unused_result, does not use its
                                  return value.
      -Wunused-variable           Warn when a variable is unused.
      -Wuseless-cast              Warn about useless casts.
      -Wvarargs                   Warn about questionable usage of the macros used
                                  to retrieve variable arguments.
      -Wvariadic-macros           Warn about using variadic macros.
      -Wvirtual-inheritance       Warn on direct virtual inheritance.
      -Wvirtual-move-assign       Warn if a virtual base has a non-trivial move
                                  assignment operator.
      -Wvla                       Warn if a variable length array is used.
      -Wvla-larger-than=<number>  Warn on unbounded uses of variable-length arrays,
                                  and on bounded uses of variable-length arrays
                                  whose bound can be larger than <number> bytes.
      -Wvolatile-register-var     Warn when a register variable is declared
                                  volatile.
      -Wwrite-strings             In C++, nonzero means warn about deprecated
                                  conversion from string literals to 'char *'.  In
                                  C, similar warning, except that the conversion is
                                  of course not deprecated by the ISO C standard.
      -Wzero-as-null-pointer-constant Warn when a literal '0' is used as null
                                  pointer.
      -ansi                       A synonym for -std=c89 (for C) or -std=c++98 (for
                                  C++).
      -d<letters>                 Enable dumps from specific passes of the compiler.
      -fRTS=                      Select the runtime.
      -fabi-compat-version=       The version of the C++ ABI used for -Wabi
                                  warnings and link compatibility aliases.
      -faccess-control            Enforce class member access control semantics.
      -fada-spec-parent=          -fada-spec-parent=unit  Dump Ada specs as child
                                  units of given parent.
      -faligned-new               Support C++17 allocation of over-aligned types. 
                                  Same as -faligned-new=.
      -faligned-new=              -faligned-new=<N> Use C++17 over-aligned type
                                  allocation for alignments greater than N.
      -fall-virtual               This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fallow-parameterless-variadic-functions Allow variadic functions without
                                  named parameter.
      -falt-external-templates    No longer supported.  Uses of this option are
                                  diagnosed.
      -fasm                       Recognize the "asm" keyword.
      -fbuilding-libgcc           This option lacks documentation.
      -fbuiltin                   Recognize built-in functions.
      -fbuiltin-                  This option lacks documentation.
      -fcanonical-system-headers  Where shorter, use canonicalized paths to systems
                                  headers.
      -fcheck-pointer-bounds      Add Pointer Bounds Checker instrumentation. 
                                  fchkp-* flags are used to control
                                  instrumentation.  Currently available for C, C++
                                  and ObjC.
      -fchkp-check-incomplete-type Generate pointer bounds checks for variables
                                  with incomplete type.
      -fchkp-check-read           Generate checks for all read accesses to memory.
      -fchkp-check-write          Generate checks for all write accesses to memory.
      -fchkp-first-field-has-own-bounds Forces Pointer Bounds Checker to use
                                  narrowed bounds for address of the first field in
                                  the structure.  By default pointer to the first
                                  field has the same bounds as pointer to the whole
                                  structure.
      -fchkp-flexible-struct-trailing-arrays Forces Pointer Bounds Checker to treat
                                  all trailing arrays in structures as possibly
                                  flexible.  By default only arrays fields with
                                  zero length or that are marked with attribute
                                  bnd_variable_size are treated as flexible.
      -fchkp-instrument-calls     Generate bounds passing for calls.
      -fchkp-instrument-marked-only Instrument only functions marked with
                                  bnd_instrument attribute.
      -fchkp-narrow-bounds        Control how Pointer Bounds Checker handle
                                  pointers to object fields.  When narrowing is on,
                                  field bounds are used.  Otherwise full object
                                  bounds are used.
      -fchkp-narrow-to-innermost-array Forces Pointer Bounds Checker to use bounds
                                  of the innermost arrays in case of nested static
                                  arrays access.  By default outermost array is
                                  used.
      -fchkp-optimize             Allow Pointer Bounds Checker optimizations.  By
                                  default allowed on optimization levels >0.
      -fchkp-store-bounds         Generate bounds stores for pointer writes.
      -fchkp-treat-zero-dynamic-size-as-infinite With this option zero size
                                  obtained dynamically for objects with incomplete
                                  type will be treated as infinite.
      -fchkp-use-fast-string-functions Allow to use *_nobnd versions of string
                                  functions by Pointer Bounds Checker.
      -fchkp-use-nochk-string-functions Allow to use *_nochk versions of string
                                  functions by Pointer Bounds Checker.
      -fchkp-use-static-bounds    Use statically initialized variable for vars
                                  bounds instead of generating them each time it is
                                  required.
      -fchkp-use-static-const-bounds Use statically initialized variable for
                                  constant bounds instead of generating them each
                                  time it is required.
      -fchkp-use-wrappers         Transform instrumented builtin calls into calls
                                  to wrappers.
      -fchkp-zero-input-bounds-for-main Use zero bounds for all incoming arguments
                                  in 'main' function.  It helps when instrumented
                                  binaries are used with legacy libs.
      -fcilkplus                  Deprecated in GCC 8.  This switch has no effect.
      -fconcepts                  Enable support for C++ concepts.
      -fcond-mismatch             Allow the arguments of the '?' operator to have
                                  different types.
      -fconserve-space            Does nothing.  Preserved for backward
                                  compatibility.
      -fconst-string-class=<name> Use class <name> for constant strings.
      -fconstexpr-depth=<number>  Specify maximum constexpr recursion depth.
      -fconstexpr-loop-limit=<number> Specify maximum constexpr loop iteration
                                  count.
      -fdebug-cpp                 Emit debug annotations during preprocessing.
      -fdeclone-ctor-dtor         Factor complex constructors and destructors to
                                  favor space over speed.
      -fdeduce-init-list          enable deduction of std::initializer_list for a
                                  template type parameter from a brace-enclosed
                                  initializer-list.
      -fdefault-inline            Does nothing.  Preserved for backward
                                  compatibility.
      -fdiagnostics-show-template-tree Print hierarchical comparisons when template
                                  types are mismatched.
      -fdirectives-only           Preprocess directives only.
      -fdollars-in-identifiers    Permit '$' as an identifier character.
      -fdump-ada-spec             Write all declarations as Ada code transitively.
      -fdump-ada-spec-slim        Write all declarations as Ada code for the given
                                  file only.
      -felide-constructors        This option lacks documentation.
      -felide-type                -fno-elide-type Do not elide common elements in
                                  template comparisons.
      -femit-struct-debug-baseonly Aggressive reduced debug info for structs.
      -femit-struct-debug-detailed=<spec-list> Detailed reduced debug info for
                                  structs.
      -femit-struct-debug-reduced Conservative reduced debug info for structs.
      -fenforce-eh-specs          Generate code to check exception specifications.
      -fenum-int-equiv            This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fexec-charset=<cset>       Convert all strings and character constants to
                                  character set <cset>.
      -fext-numeric-literals      Interpret imaginary, fixed-point, or other gnu
                                  number suffix as the corresponding number literal
                                  rather than a user-defined number literal.
      -fextended-identifiers      Permit universal character names (\u and \U) in
                                  identifiers.
      -fextern-tls-init           Support dynamic initialization of thread-local
                                  variables in a different translation unit.
      -fexternal-templates        This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -ffor-scope                 Scope of for-init-statement variables is local to
                                  the loop.
      -ffreestanding              Do not assume that standard C libraries and
                                  "main" exist.
      -ffriend-injection          Inject friend functions into enclosing namespace.
      -fgnu-keywords              Recognize GNU-defined keywords.
      -fgnu-runtime               Generate code for GNU runtime environment.
      -fgnu89-inline              Use traditional GNU semantics for inline
                                  functions.
      -fguiding-decls             This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fhandle-exceptions         Same as -fexceptions.  Use the latter option
                                  instead.  Uses of this option are diagnosed.
      -fhonor-std                 This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fhosted                    Assume normal C execution environment.
      -fhuge-objects              No longer supported.  Uses of this option are
                                  diagnosed.
      -fimplement-inlines         Export functions even if they can be inlined.
      -fimplicit-inline-templates Emit implicit instantiations of inline templates.
      -fimplicit-templates        Emit implicit instantiations of templates.
      -finput-charset=<cset>      Specify the default character set for source
                                  files.
      -fvisibility=[private|protected|public|package] Set the default symbol
                                  visibility.
      -fkeep-inline-dllexport     Don't emit dllexported inline functions unless
                                  needed.
      -flabels-ok                 This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -flax-vector-conversions    Allow implicit conversions between vectors with
                                  differing numbers of subparts and/or differing
                                  element types.
      -flocal-ivars               Allow access to instance variables as if they
                                  were local declarations within instance method
                                  implementations.
      -fmacro-prefix-map=         -fmacro-prefix-map=<old>=<new> Map one directory
                                  name to another in __FILE__, __BASE_FILE__, and
                                  __builtin_FILE().
      -fms-extensions             Don't warn about uses of Microsoft extensions.
      -fmudflap                   This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fmudflapir                 This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fmudflapth                 This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fname-mangling-version-    This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fnew-abi                   This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fnew-inheriting-ctors      Implement C++17 inheriting constructor semantics.
      -fnew-ttp-matching          Implement resolution of DR 150 for matching of
                                  template template arguments.
      -fnext-runtime              Generate code for NeXT (Apple Mac OS X) runtime
                                  environment.
      -fnil-receivers             Assume that receivers of Objective-C messages may
                                  be nil.
      -fnonansi-builtins          This option lacks documentation.
      -fnonnull-objects           This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fnothrow-opt               Treat a throw() exception specification as
                                  noexcept to improve code size.
      -fobjc-abi-version=         Specify which ABI to use for Objective-C family
                                  code and meta-data generation.
      -fobjc-direct-dispatch      Allow fast jumps to the message dispatcher.
      -fobjc-exceptions           Enable Objective-C exception and synchronization
                                  syntax.
      -fobjc-gc                   Enable garbage collection (GC) in Objective-C/
                                  Objective-C++ programs.
      -fobjc-nilcheck             Enable inline checks for nil receivers with the
                                  NeXT runtime and ABI version 2.
      -fobjc-sjlj-exceptions      Enable Objective-C setjmp exception handling
                                  runtime.
      -fobjc-std=objc1            Conform to the Objective-C 1.0 language as
                                  implemented in GCC 4.0.
      -fopenacc                   Enable OpenACC.
      -fopenacc-dim=              Specify default OpenACC compute dimensions.
      -fopenmp                    Enable OpenMP (implies -frecursive in Fortran).
      -fopenmp-simd               Enable OpenMP's SIMD directives.
      -foperator-names            Recognize C++ keywords like "compl" and "xor".
      -foptional-diags            Does nothing.  Preserved for backward
                                  compatibility.
      -fpch-deps                  This option lacks documentation.
      -fpch-preprocess            Look for and use PCH files even when
                                  preprocessing.
      -fpermissive                Downgrade conformance errors to warnings.
      -fplan9-extensions          Enable Plan 9 language extensions.
      -fpreprocessed              Treat the input file as already preprocessed.
      -fpretty-templates          -fno-pretty-templates Do not pretty-print
                                  template specializations as the template
                                  signature followed by the arguments.
      -fprintf-return-value       Treat known sprintf return values as constants.
      -freplace-objc-classes      Used in Fix-and-Continue mode to indicate that
                                  object files may be swapped in at runtime.
      -frepo                      Enable automatic template instantiation.
      -frtti                      Generate run time type descriptor information.
      -fshort-enums               Use the narrowest integer type possible for
                                  enumeration types.
      -fshort-wchar               Force the underlying type for "wchar_t" to be
                                  "unsigned short".
      -fsigned-bitfields          When "signed" or "unsigned" is not given make the
                                  bitfield signed.
      -fsigned-char               Make "char" signed by default.
      -fsized-deallocation        Enable C++14 sized deallocation support.
      -fsquangle                  This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fsso-struct=[big-endian|little-endian|native] Set the default scalar storage
                                  order.
      -fstats                     Display statistics accumulated during compilation.
      -fstrict-enums              Assume that values of enumeration type are always
                                  within the minimum range of that type.
      -fstrict-prototype          This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fstrong-eval-order         Follow the C++17 evaluation order requirements
                                  for assignment expressions, shift, member
                                  function calls, etc.  Same as -fstrong-eval-
                                  order=.
      -fstrong-eval-order=        Follow the C++17 evaluation order requirements
                                  for assignment expressions, shift, member
                                  function calls, etc.
      -ftabstop=<number>          Distance between tab stops for column reporting.
      -ftemplate-backtrace-limit= Set the maximum number of template instantiation
                                  notes for a single warning or error.
      -ftemplate-depth-           Same as -ftemplate-depth=.  Use the latter option
                                  instead.
      -ftemplate-depth=<number>   Specify maximum template instantiation depth.
      -fthis-is-variable          This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -fno-threadsafe-statics     Do not generate thread-safe code for initializing
                                  local statics.
      -ftrack-macro-expansion     This option lacks documentation.
      -ftrack-macro-expansion=    -ftrack-macro-expansion=<0|1|2>  Track locations
                                  of tokens coming from macro expansion and display
                                  them in error messages.
      -funsigned-bitfields        When "signed" or "unsigned" is not given make the
                                  bitfield unsigned.
      -funsigned-char             Make "char" unsigned by default.
      -fuse-cxa-atexit            Use __cxa_atexit to register destructors.
      -fuse-cxa-get-exception-ptr Use __cxa_get_exception_ptr in exception handling.
      -fvisibility-inlines-hidden Marks all inlined functions and methods as having
                                  hidden visibility.
      -fvisibility-ms-compat      Changes visibility to match Microsoft Visual
                                  Studio by default.
      -fvtable-gc                 No longer supported.  Uses of this option are
                                  diagnosed.
      -fvtable-thunks             No longer supported.  Uses of this option are
                                  diagnosed.
      -fweak                      Emit common-like symbols as weak symbols.
      -fwide-exec-charset=<cset>  Convert all wide strings and character constants
                                  to character set <cset>.
      -fworking-directory         Generate a #line directive pointing at the
                                  current working directory.
      -fxref                      No longer supported.  Uses of this option are
                                  diagnosed.
      -fzero-link                 Generate lazy class lookup (via objc_getClass())
                                  for use in Zero-Link mode.
      -gant                       Catch typos.
      -gen-decls                  Dump declarations to a .decl file.
      -gnat<options>              Specify options to GNAT.
      -gnatO                      Set name of output ALI file (internal switch).
      -idirafter <dir>            Add <dir> to the end of the system include path.
      -imacros <file>             Accept definition of macros in <file>.
      -imultilib <dir>            Set <dir> to be the multilib include subdirectory.
      -include <file>             Include the contents of <file> before other files.
      -iprefix <path>             Specify <path> as a prefix for next two options.
      -iquote <dir>               Add <dir> to the end of the quote include path.
      -isysroot <dir>             Set <dir> to be the system root directory.
      -isystem <dir>              Add <dir> to the start of the system include path.
      -iwithprefix <dir>          Add <dir> to the end of the system include path.
      -iwithprefixbefore <dir>    Add <dir> to the end of the main include path.
      -nostdinc                   Do not search standard system include directories
                                  (those specified with -isystem will still be
                                  used).
      -nostdinc++                 Do not search standard system include directories
                                  for C++.
      -nostdlib                   Do not look for object files in standard path.
      -o <file>                   Place output into <file>.
      -pedantic                   Same as -Wpedantic.  Use the latter option
                                  instead.
      -print-objc-runtime-info    Generate C header of platform-specific features.
      -remap                      Remap file names when including files.
      -std=c++03                  Conform to the ISO 1998 C++ standard revised by
                                  the 2003 technical corrigendum.  Same as
                                  -std=c++98.
      -std=c++0x                  Deprecated in favor of -std=c++11.  Same as
                                  -std=c++11.
      -std=c++11                  Conform to the ISO 2011 C++ standard.
      -std=c++14                  Conform to the ISO 2014 C++ standard.
      -std=c++17                  Conform to the ISO 2017 C++ standard.
      -std=c++1y                  Deprecated in favor of -std=c++14.  Same as
                                  -std=c++14.
      -std=c++1z                  Deprecated in favor of -std=c++17.  Same as
                                  -std=c++17.
      -std=c++2a                  Conform to the ISO 2020(?) C++ draft standard
                                  (experimental and incomplete support).
      -std=c++98                  Conform to the ISO 1998 C++ standard revised by
                                  the 2003 technical corrigendum.
      -std=c11                    Conform to the ISO 2011 C standard.
      -std=c17                    Conform to the ISO 2017 C standard (expected to
                                  be published in 2018).
      -std=c18                    Conform to the ISO 2017 C standard (expected to
                                  be published in 2018).  Same as -std=c17.
      -std=c1x                    Deprecated in favor of -std=c11.  Same as
                                  -std=c11.
      -std=c89                    Conform to the ISO 1990 C standard.  Same as
                                  -std=c90.
      -std=c90                    Conform to the ISO 1990 C standard.
      -std=c99                    Conform to the ISO 1999 C standard.
      -std=c9x                    Deprecated in favor of -std=c99.  Same as
                                  -std=c99.
      -std=gnu++03                Conform to the ISO 1998 C++ standard revised by
                                  the 2003 technical corrigendum with GNU
                                  extensions.  Same as -std=gnu++98.
      -std=gnu++0x                Deprecated in favor of -std=gnu++11.  Same as
                                  -std=gnu++11.
      -std=gnu++11                Conform to the ISO 2011 C++ standard with GNU
                                  extensions.
      -std=gnu++14                Conform to the ISO 2014 C++ standard with GNU
                                  extensions.
      -std=gnu++17                Conform to the ISO 2017 C++ standard with GNU
                                  extensions.
      -std=gnu++1y                Deprecated in favor of -std=gnu++14.  Same as
                                  -std=gnu++14.
      -std=gnu++1z                Deprecated in favor of -std=gnu++17.  Same as
                                  -std=gnu++17.
      -std=gnu++2a                Conform to the ISO 2020(?) C++ draft standard
                                  with GNU extensions (experimental and incomplete
                                  support).
      -std=gnu++98                Conform to the ISO 1998 C++ standard revised by
                                  the 2003 technical corrigendum with GNU
                                  extensions.
      -std=gnu11                  Conform to the ISO 2011 C standard with GNU
                                  extensions.
      -std=gnu17                  Conform to the ISO 2017 C standard (expected to
                                  be published in 2018) with GNU extensions.
      -std=gnu18                  Conform to the ISO 2017 C standard (expected to
                                  be published in 2018) with GNU extensions.  Same
                                  as -std=gnu17.
      -std=gnu1x                  Deprecated in favor of -std=gnu11.  Same as
                                  -std=gnu11.
      -std=gnu89                  Conform to the ISO 1990 C standard with GNU
                                  extensions.  Same as -std=gnu90.
      -std=gnu90                  Conform to the ISO 1990 C standard with GNU
                                  extensions.
      -std=gnu99                  Conform to the ISO 1999 C standard with GNU
                                  extensions.
      -std=gnu9x                  Deprecated in favor of -std=gnu99.  Same as
                                  -std=gnu99.
      -std=iso9899:1990           Conform to the ISO 1990 C standard.  Same as
                                  -std=c90.
      -std=iso9899:199409         Conform to the ISO 1990 C standard as amended in
                                  1994.
      -std=iso9899:1999           Conform to the ISO 1999 C standard.  Same as
                                  -std=c99.
      -std=iso9899:199x           Deprecated in favor of -std=iso9899:1999.  Same
                                  as -std=c99.
      -std=iso9899:2011           Conform to the ISO 2011 C standard.  Same as
                                  -std=c11.
      -std=iso9899:2017           Conform to the ISO 2017 C standard (expected to
                                  be published in 2018).  Same as -std=c17.
      -std=iso9899:2018           Conform to the ISO 2017 C standard (expected to
                                  be published in 2018).  Same as -std=c17.
      -traditional-cpp            Enable traditional preprocessing.
      -trigraphs                  Support ISO C trigraphs.
      -undef                      Do not predefine system-specific and GCC-specific
                                  macros.
      -v                          Enable verbose output.
      -w                          Suppress warnings.

    The --param option recognizes the following as parameters:
      predictable-branch-outcome  Maximal estimated outcome of branch considered
                                  predictable.
      inline-min-speedup          The minimal estimated speedup allowing inliner to
                                  ignore inline-insns-single and inline-insns-auto.
      max-inline-insns-single     The maximum number of instructions in a single
                                  function eligible for inlining.
      max-inline-insns-auto       The maximum number of instructions when
                                  automatically inlining.
      max-inline-insns-recursive  The maximum number of instructions inline
                                  function can grow to via recursive inlining.
      max-inline-insns-recursive-auto The maximum number of instructions non-inline
                                  function can grow to via recursive inlining.
      max-inline-recursive-depth  The maximum depth of recursive inlining for
                                  inline functions.
      max-inline-recursive-depth-auto The maximum depth of recursive inlining for
                                  non-inline functions.
      min-inline-recursive-probability Inline recursively only when the probability
                                  of call being executed exceeds the parameter.
      max-early-inliner-iterations The maximum number of nested indirect inlining
                                  performed by early inliner.
      comdat-sharing-probability  Probability that COMDAT function will be shared
                                  with different compilation unit.
      partial-inlining-entry-probability Maximum probability of the entry BB of
                                  split region (in percent relative to entry BB of
                                  the function) to make partial inlining happen.
      max-variable-expansions-in-unroller If -fvariable-expansion-in-unroller is
                                  used, the maximum number of times that an
                                  individual variable will be expanded during loop
                                  unrolling.
      min-vect-loop-bound         If -ftree-vectorize is used, the minimal loop
                                  bound of a loop to be considered for
                                  vectorization.
      max-delay-slot-insn-search  The maximum number of instructions to consider to
                                  fill a delay slot.
      max-delay-slot-live-search  The maximum number of instructions to consider to
                                  find accurate live register information.
      max-pending-list-length     The maximum length of scheduling's pending
                                  operations list.
      max-modulo-backtrack-attempts The maximum number of backtrack attempts the
                                  scheduler should make when modulo scheduling a
                                  loop.
      large-function-insns        The size of function body to be considered large.
      large-function-growth       Maximal growth due to inlining of large function
                                  (in percent).
      large-unit-insns            The size of translation unit to be considered
                                  large.
      inline-unit-growth          How much can given compilation unit grow because
                                  of the inlining (in percent).
      ipcp-unit-growth            How much can given compilation unit grow because
                                  of the interprocedural constant propagation (in
                                  percent).
      early-inlining-insns        Maximal estimated growth of function body caused
                                  by early inlining of single call.
      large-stack-frame           The size of stack frame to be considered large.
      large-stack-frame-growth    Maximal stack frame growth due to inlining (in
                                  percent).
      stack-clash-protection-guard-size Size of the stack guard expressed as a
                                  power of two.
      stack-clash-protection-probe-interval Interval in which to probe the stack
                                  expressed as a power of two.
      max-gcse-memory             The maximum amount of memory to be allocated by
                                  GCSE.
      max-gcse-insertion-ratio    The maximum ratio of insertions to deletions of
                                  expressions in GCSE.
      gcse-after-reload-partial-fraction The threshold ratio for performing partial
                                  redundancy elimination after reload.
      gcse-after-reload-critical-fraction The threshold ratio of critical edges
                                  execution count that permit performing redundancy
                                  elimination after reload.
      gcse-cost-distance-ratio    Scaling factor in calculation of maximum distance
                                  an expression can be moved by GCSE optimizations.
      gcse-unrestricted-cost      Cost at which GCSE optimizations will not
                                  constraint the distance an expression can travel.
      max-hoist-depth             Maximum depth of search in the dominator tree for
                                  expressions to hoist.
      max-pow-sqrt-depth          Maximum depth of sqrt chains to use when
                                  synthesizing exponentiation by a real constant.
      max-unrolled-insns          The maximum number of instructions to consider to
                                  unroll in a loop.
      max-average-unrolled-insns  The maximum number of instructions to consider to
                                  unroll in a loop on average.
      max-unroll-times            The maximum number of unrollings of a single loop.
      max-peeled-insns            The maximum number of insns of a peeled loop.
      max-peel-times              The maximum number of peelings of a single loop.
      max-peel-branches           The maximum number of branches on the path
                                  through the peeled sequence.
      max-completely-peeled-insns The maximum number of insns of a completely
                                  peeled loop.
      max-completely-peel-times   The maximum number of peelings of a single loop
                                  that is peeled completely.
      max-once-peeled-insns       The maximum number of insns of a peeled loop that
                                  rolls only once.
      max-completely-peel-loop-nest-depth The maximum depth of a loop nest we
                                  completely peel.
      max-unswitch-insns          The maximum number of insns of an unswitched loop.
      max-unswitch-level          The maximum number of unswitchings in a single
                                  loop.
      max-loop-header-insns       The maximum number of insns in loop header
                                  duplicated by the copy loop headers pass.
      max-iterations-to-track     Bound on the number of iterations the brute force
                                  # of iterations analysis algorithm evaluates.
      max-iterations-computation-cost Bound on the cost of an expression to compute
                                  the number of iterations.
      sms-max-ii-factor           A factor for tuning the upper bound that swing
                                  modulo scheduler uses for scheduling a loop.
      sms-min-sc                  The minimum value of stage count that swing
                                  modulo scheduler will generate.
      sms-dfa-history             The number of cycles the swing modulo scheduler
                                  considers when checking conflicts using DFA.
      sms-loop-average-count-threshold A threshold on the average loop count
                                  considered by the swing modulo scheduler.
      hot-bb-count-ws-permille    A basic block profile count is considered hot if
                                  it contributes to the given permillage of the
                                  entire profiled execution.
      hot-bb-frequency-fraction   Select fraction of the maximal frequency of
                                  executions of basic block in function given basic
                                  block needs to have to be considered hot.
      unlikely-bb-count-fraction  The minimum fraction of profile runs a given
                                  basic block execution count must be not to be
                                  considered unlikely.
      align-threshold             Select fraction of the maximal frequency of
                                  executions of basic block in function given basic
                                  block get alignment.
      align-loop-iterations       Loops iterating at least selected number of
                                  iterations will get loop alignment..
      max-predicted-iterations    The maximum number of loop iterations we predict
                                  statically.
      builtin-expect-probability  Set the estimated probability in percentage for
                                  builtin expect. The default value is 90%
                                  probability.
      tracer-dynamic-coverage-feedback The percentage of function, weighted by
                                  execution frequency, that must be covered by
                                  trace formation. Used when profile feedback is
                                  available.
      tracer-dynamic-coverage     The percentage of function, weighted by execution
                                  frequency, that must be covered by trace
                                  formation. Used when profile feedback is not
                                  available.
      tracer-max-code-growth      Maximal code growth caused by tail duplication
                                  (in percent).
      tracer-min-branch-ratio     Stop reverse growth if the reverse probability of
                                  best edge is less than this threshold (in
                                  percent).
      tracer-min-branch-probability-feedback Stop forward growth if the probability
                                  of best edge is less than this threshold (in
                                  percent). Used when profile feedback is available.
      tracer-min-branch-probability Stop forward growth if the probability of best
                                  edge is less than this threshold (in percent).
                                  Used when profile feedback is not available.
      max-crossjump-edges         The maximum number of incoming edges to consider
                                  for crossjumping.
      min-crossjump-insns         The minimum number of matching instructions to
                                  consider for crossjumping.
      max-grow-copy-bb-insns      The maximum expansion factor when copying basic
                                  blocks.
      max-goto-duplication-insns  The maximum number of insns to duplicate when
                                  unfactoring computed gotos.
      max-cse-path-length         The maximum length of path considered in cse.
      max-cse-insns               The maximum instructions CSE process before
                                  flushing.
      lim-expensive               The minimum cost of an expensive expression in
                                  the loop invariant motion.
      iv-consider-all-candidates-bound Bound on number of candidates below that all
                                  candidates are considered in iv optimizations.
      iv-max-considered-uses      Bound on number of iv uses in loop optimized in
                                  iv optimizations.
      iv-always-prune-cand-set-bound If number of candidates in the set is smaller,
                                  we always try to remove unused ivs during its
                                  optimization.
      avg-loop-niter              Average number of iterations of a loop.
      dse-max-object-size         Maximum size (in bytes) of objects tracked
                                  bytewise by dead store elimination.
      scev-max-expr-size          Bound on size of expressions used in the scalar
                                  evolutions analyzer.
      scev-max-expr-complexity    Bound on the complexity of the expressions in the
                                  scalar evolutions analyzer.
      max-tree-if-conversion-phi-args Maximum number of arguments in a PHI
                                  supported by TREE if-conversion unless the loop
                                  is marked with simd pragma.
      vect-max-version-for-alignment-checks Bound on number of runtime checks
                                  inserted by the vectorizer's loop versioning for
                                  alignment check.
      vect-max-version-for-alias-checks Bound on number of runtime checks inserted
                                  by the vectorizer's loop versioning for alias
                                  check.
      vect-max-peeling-for-alignment Maximum number of loop peels to enhance
                                  alignment of data references in a loop.
      max-cselib-memory-locations The maximum memory locations recorded by cselib.
      ggc-min-expand              Minimum heap expansion to trigger garbage
                                  collection, as a percentage of the total size of
                                  the heap.
      ggc-min-heapsize            Minimum heap size before we start collecting
                                  garbage, in kilobytes.
      max-reload-search-insns     The maximum number of instructions to search
                                  backward when looking for equivalent reload.
      sink-frequency-threshold    Target block's relative execution frequency (as a
                                  percentage) required to sink a statement.
      max-sched-region-blocks     The maximum number of blocks in a region to be
                                  considered for interblock scheduling.
      max-sched-region-insns      The maximum number of insns in a region to be
                                  considered for interblock scheduling.
      max-pipeline-region-blocks  The maximum number of blocks in a region to be
                                  considered for interblock scheduling.
      max-pipeline-region-insns   The maximum number of insns in a region to be
                                  considered for interblock scheduling.
      min-spec-prob               The minimum probability of reaching a source
                                  block for interblock speculative scheduling.
      max-sched-extend-regions-iters The maximum number of iterations through CFG
                                  to extend regions.
      max-sched-insn-conflict-delay The maximum conflict delay for an insn to be
                                  considered for speculative motion.
      sched-spec-prob-cutoff      The minimal probability of speculation success
                                  (in percents), so that speculative insn will be
                                  scheduled.
      sched-state-edge-prob-cutoff The minimum probability an edge must have for
                                  the scheduler to save its state across it.
      selsched-max-lookahead      The maximum size of the lookahead window of
                                  selective scheduling.
      selsched-max-sched-times    Maximum number of times that an insn could be
                                  scheduled.
      selsched-insns-to-rename    Maximum number of instructions in the ready list
                                  that are considered eligible for renaming.
      sched-mem-true-dep-cost     Minimal distance between possibly conflicting
                                  store and load.
      sched-autopref-queue-depth  Hardware autoprefetcher scheduler model control
                                  flag.  Number of lookahead cycles the model looks
                                  into; at '0' only enable instruction sorting
                                  heuristic.  Disabled by default.
      max-last-value-rtl          The maximum number of RTL nodes that can be
                                  recorded as combiner's last value.
      max-combine-insns           The maximum number of insns combine tries to
                                  combine.
      integer-share-limit         The upper bound for sharing integer constants.
      ssp-buffer-size             The lower bound for a buffer to be considered for
                                  stack smashing protection.
      min-size-for-stack-sharing  The minimum size of variables taking part in
                                  stack slot sharing when not optimizing.
      max-jump-thread-duplication-stmts Maximum number of statements allowed in a
                                  block that needs to be duplicated when threading
                                  jumps.
      max-fields-for-field-sensitive Maximum number of fields in a structure before
                                  pointer analysis treats the structure as a single
                                  variable.
      max-sched-ready-insns       The maximum number of instructions ready to be
                                  issued to be considered by the scheduler during
                                  the first scheduling pass.
      max-dse-active-local-stores Maximum number of active local stores in RTL dead
                                  store elimination.
      prefetch-latency            The number of insns executed before prefetch is
                                  completed.
      simultaneous-prefetches     The number of prefetches that can run at the same
                                  time.
      l1-cache-size               The size of L1 cache.
      l1-cache-line-size          The size of L1 cache line.
      l2-cache-size               The size of L2 cache.
      loop-interchange-max-num-stmts The maximum number of stmts in loop nest for
                                  loop interchange.
      loop-interchange-stride-ratio The minimum stride ratio for loop interchange
                                  to be profitable
      use-canonical-types         Whether to use canonical types.
      max-partial-antic-length    Maximum length of partial antic set when
                                  performing tree pre optimization.
      sccvn-max-scc-size          Maximum size of a SCC before SCCVN stops
                                  processing a function.
      sccvn-max-alias-queries-per-access Maximum number of disambiguations to
                                  perform per memory access.
      ira-max-loops-num           Max loops number for regional RA.
      ira-max-conflict-table-size Max size of conflict table in MB.
      ira-loop-reserved-regs      The number of registers in each class kept unused
                                  by loop invariant motion.
      lra-max-considered-reload-pseudos The max number of reload pseudos which are
                                  considered during spilling a non-reload pseudo.
      lra-inheritance-ebb-probability-cutoff Minimal fall-through edge probability
                                  in percentage used to add BB to inheritance EBB
                                  in LRA.
      switch-conversion-max-branch-ratio The maximum ratio between array size and
                                  switch branches for a switch conversion to take
                                  place.
      loop-block-tile-size        size of tiles for loop blocking.
      graphite-max-nb-scop-params maximum number of parameters in a SCoP.
      graphite-max-arrays-per-scop maximum number of arrays per scop.
      max-isl-operations          maximum number of isl operations, 0 means
                                  unlimited
      graphite-allow-codegen-errors whether codegen errors should be ICEs when
                                  -fchecking.
      loop-max-datarefs-for-datadeps Maximum number of datarefs in loop for
                                  building loop data dependencies.
      loop-invariant-max-bbs-in-loop Max basic blocks number in loop for loop
                                  invariant motion.
      profile-func-internal-id    use internal function id in profile lookup.
      indir-call-topn-profile     track topn target addresses in indirect-call
                                  profile.
      slp-max-insns-in-bb         Maximum number of instructions in basic block to
                                  be considered for SLP vectorization.
      min-insn-to-prefetch-ratio  Min. ratio of insns to prefetches to enable
                                  prefetching for a loop with an unknown trip count.
      prefetch-min-insn-to-mem-ratio Min. ratio of insns to mem ops to enable
                                  prefetching in a loop.
      max-vartrack-size           Max. size of var tracking hash tables.
      max-vartrack-expr-depth     Max. recursion depth for expanding var tracking
                                  expressions.
      max-vartrack-reverse-op-size Max. size of loc list for which reverse ops
                                  should be added.
      max-debug-marker-count      Max. count of debug markers to expand or inline.
      min-nondebug-insn-uid       The minimum UID to be used for a nondebug insn.
      ipa-sra-ptr-growth-factor   Maximum allowed growth of number and total size
                                  of new parameters that ipa-sra replaces a pointer
                                  to an aggregate with.
      tm-max-aggregate-size       Size in bytes after which thread-local aggregates
                                  should be instrumented with the logging functions
                                  instead of save/restore pairs.
      sra-max-scalarization-size-Ospeed Maximum size, in storage units, of an
                                  aggregate which should be considered for
                                  scalarization when compiling for speed.
      sra-max-scalarization-size-Osize Maximum size, in storage units, of an
                                  aggregate which should be considered for
                                  scalarization when compiling for size.
      ipa-cp-value-list-size      Maximum size of a list of values associated with
                                  each parameter for interprocedural constant
                                  propagation.
      ipa-cp-eval-threshold       Threshold ipa-cp opportunity evaluation that is
                                  still considered beneficial to clone..
      ipa-cp-recursion-penalty    Percentage penalty the recursive functions will
                                  receive when they are evaluated for cloning..
      ipa-cp-single-call-penalty  Percentage penalty functions containing a single
                                  call to another function will receive when they
                                  are evaluated for cloning..
      ipa-max-agg-items           Maximum number of aggregate content items for a
                                  parameter in jump functions and lattices.
      ipa-cp-loop-hint-bonus      Compile-time bonus IPA-CP assigns to candidates
                                  which make loop bounds or strides known..
      ipa-cp-array-index-hint-bonus Compile-time bonus IPA-CP assigns to candidates
                                  which make an array index known..
      ipa-max-aa-steps            Maximum number of statements that will be visited
                                  by IPA formal parameter analysis based on alias
                                  analysis in any given function.
      lto-partitions              Number of partitions the program should be split
                                  to.
      lto-min-partition           Minimal size of a partition for LTO (in estimated
                                  instructions).
      lto-max-partition           Maximal size of a partition for LTO (in estimated
                                  instructions).
      cxx-max-namespaces-for-diagnostic-help Maximum number of namespaces to search
                                  for alternatives when name lookup fails.
      max-stores-to-sink          Maximum number of conditional store pairs that
                                  can be sunk.
      case-values-threshold       The smallest number of different values for which
                                  it is best to use a jump-table instead of a tree
                                  of conditional branches, if 0, use the default
                                  for the machine.
      allow-store-data-races      Allow new data races on stores to be introduced.
      tree-reassoc-width          Set the maximum number of instructions executed
                                  in parallel in reassociated tree. If 0, use the
                                  target dependent heuristic..
      max-tail-merge-comparisons  Maximum amount of similar bbs to compare a bb
                                  with.
      store-merging-allow-unaligned Allow the store merging pass to introduce
                                  unaligned stores if it is legal to do so.
      max-stores-to-merge         Maximum number of constant stores to merge in the
                                  store merging pass.
      max-tail-merge-iterations   Maximum amount of iterations of the pass over a
                                  function.
      max-tracked-strlens         Maximum number of strings for which strlen
                                  optimization pass will track string lengths.
      sched-pressure-algorithm    Which -fsched-pressure algorithm to apply.
      max-slsr-cand-scan          Maximum length of candidate scans for straight-
                                  line strength reduction.
      asan-stack                  Enable asan stack protection.
      asan-instrument-allocas     Enable asan allocas/VLAs protection.
      asan-globals                Enable asan globals protection.
      asan-instrument-writes      Enable asan store operations protection.
      asan-instrument-reads       Enable asan load operations protection.
      asan-memintrin              Enable asan builtin functions protection.
      asan-use-after-return       Enable asan detection of use-after-return bugs.
      asan-instrumentation-with-call-threshold Use callbacks instead of inline code
                                  if number of accesses in function becomes greater
                                  or equal to this number.
      use-after-scope-direct-emission-threshold Use direct poisoning/unpoisoning
                                  instructions for variables smaller or equal to
                                  this number.
      uninit-control-dep-attempts Maximum number of nested calls to search for
                                  control dependencies during uninitialized
                                  variable analysis.
      chkp-max-ctor-size          Maximum number of statements to be included into
                                  a single static constructor generated by Pointer
                                  Bounds Checker.
      fsm-scale-path-stmts        Scale factor to apply to the number of statements
                                  in a threading path when comparing to the number
                                  of (scaled) blocks.
      fsm-maximum-phi-arguments   Maximum number of arguments a PHI may have before
                                  the FSM threader will not try to thread through
                                  its block.
      fsm-scale-path-blocks       Scale factor to apply to the number of blocks in
                                  a threading path when comparing to the number of
                                  (scaled) statements.
      max-fsm-thread-path-insns   Maximum number of instructions to copy when
                                  duplicating blocks on a finite state automaton
                                  jump thread path.
      max-fsm-thread-length       Maximum number of basic blocks on a finite state
                                  automaton jump thread path.
      max-fsm-thread-paths        Maximum number of new jump thread paths to create
                                  for a finite state automaton.
      parloops-chunk-size         Chunk size of omp schedule for loops parallelized
                                  by parloops.
      parloops-schedule           Schedule type of omp schedule for loops
                                  parallelized by parloops (static, dynamic,
                                  guided, auto, runtime).
      parloops-min-per-thread     Minimum number of iterations per thread of an
                                  innermost parallelized loop.
      max-ssa-name-query-depth    Maximum recursion depth allowed when querying a
                                  property of an SSA name.
      max-rtl-if-conversion-insns Maximum number of insns in a basic block to
                                  consider for RTL if-conversion.
      max-rtl-if-conversion-predictable-cost Maximum permissible cost for the
                                  sequence that would be generated by the RTL if-
                                  conversion pass for a branch that is considered
                                  predictable.
      max-rtl-if-conversion-unpredictable-cost Maximum permissible cost for the
                                  sequence that would be generated by the RTL if-
                                  conversion pass for a branch that is considered
                                  unpredictable.
      hsa-gen-debug-stores        Level of hsa debug stores verbosity
      max-speculative-devirt-maydefs Maximum number of may-defs visited when
                                  devirtualizing speculatively
      max-vrp-switch-assertions   Maximum number of assertions to add along the
                                  default edge of a switch statement during VRP
      vect-epilogues-nomask       Enable loop epilogue vectorization using smaller
                                  vector size.
      unroll-jam-min-percent      Minimum percentage of memrefs that must go away
                                  for unroll-and-jam to be considered profitable.
      unroll-jam-max-unroll       Maximum unroll factor for the unroll-and-jam
                                  transformation.
      avoid-fma-max-bits          Maximum number of bits for which we avoid
                                  creating FMAs.
## 🐤🐥 warning messages

    The following options control compiler warning messages:
      --extra-warnings            Same as -Wextra.  Use the latter option instead.
      -W                          This switch is deprecated; use -Wextra instead. 
                                  Same as -Wextra.
      -Waggregate-return          Warn about returning structures, unions or arrays.
      -Waggressive-loop-optimizations Warn if a loop with constant number of
                                  iterations triggers undefined behavior.
      -Warray-bounds              Warn if an array is accessed out of bounds.
      -Warray-bounds=<0,2>        Warn if an array is accessed out of bounds.
      -Wattribute-alias           Warn about type safety and similar errors in
                                  attribute alias and related.
      -Wattributes                Warn about inappropriate attribute usage.
      -Wcast-align                Warn about pointer casts which increase alignment.
      -Wcast-align=strict         Warn about pointer casts which increase alignment.
      -Wcoverage-mismatch         Warn in case profiles in -fprofile-use do not
                                  match.
      -Wdeprecated-declarations   Warn about uses of __attribute__((deprecated))
                                  declarations.
      -Wdisabled-optimization     Warn when an optimization pass is disabled.
      -Wframe-larger-than=<number> Warn if a function's stack frame requires more
                                  than <number> bytes.
      -Wfree-nonheap-object       Warn when attempting to free a non-heap object.
      -Whsa                       Warn when a function cannot be expanded to HSAIL.
      -Wimplicit-fallthrough      Same as -Wimplicit-fallthrough=.  Use the latter
                                  option instead.
      -Wimplicit-fallthrough=<0,5> Warn when a switch case falls through.
      -Winline                    Warn when an inlined function cannot be inlined.
      -Winvalid-memory-model      Warn when an atomic memory model parameter is
                                  known to be outside the valid range.
      -Wlarger-than-              Same as -Wlarger-than=.  Use the latter option
                                  instead.
      -Wlarger-than=<number>      Warn if an object is larger than <number> bytes.
      -Wlto-type-mismatch         During link time optimization warn about
                                  mismatched types of global declarations.
      -Wmissing-noreturn          Same as -Wsuggest-attribute=noreturn.  Use the
                                  latter option instead.
      -Wnull-dereference          Warn if dereferencing a NULL pointer may lead to
                                  erroneous or undefined behavior.
      -Wodr                       Warn about some C++ One Definition Rule
                                  violations during link time optimization.
      -Woverflow                  Warn about overflow in arithmetic expressions.
      -Wpacked                    Warn when the packed attribute has no effect on
                                  struct layout.
      -Wpadded                    Warn when padding is required to align structure
                                  members.
      -Wreturn-local-addr         Warn about returning a pointer/reference to a
                                  local or temporary variable.
      -Wshadow                    Warn when one variable shadows another.  Same as
                                  -Wshadow=global.
      -Wshadow-compatible-local   Same as -Wshadow=compatible-local.  Use the
                                  latter option instead.
      -Wshadow-local              Same as -Wshadow=local.  Use the latter option
                                  instead.
      -Wshadow=compatible-local   Warn when one local variable shadows another
                                  local variable or parameter of compatible type.
      -Wshadow=global             Warn when one variable shadows another
                                  (globally).  Same as -Wshadow.
      -Wshadow=local              Warn when one local variable shadows another
                                  local variable or parameter.
      -Wstack-protector           Warn when not issuing stack smashing protection
                                  for some reason.
      -Wstack-usage=<number>      Warn if stack usage might be larger than
                                  specified amount.
      -Wstrict-aliasing           Warn about code which might break strict aliasing
                                  rules.
      -Wstrict-overflow           Warn about optimizations that assume that signed
                                  overflow is undefined.
      -Wsuggest-attribute=cold    Warn about functions which might be candidates
                                  for __attribute__((cold)).
      -Wsuggest-attribute=const   Warn about functions which might be candidates
                                  for __attribute__((const)).
      -Wsuggest-attribute=malloc  Warn about functions which might be candidates
                                  for __attribute__((malloc)).
      -Wsuggest-attribute=noreturn Warn about functions which might be candidates
                                  for __attribute__((noreturn)).
      -Wsuggest-attribute=pure    Warn about functions which might be candidates
                                  for __attribute__((pure)).
      -Wsuggest-final-methods     Warn about C++ virtual methods where adding final
                                  keyword would improve code quality.
      -Wsuggest-final-types       Warn about C++ polymorphic types where adding
                                  final keyword would improve code quality.
      -Wswitch-unreachable        Warn about statements between switch's
                                  controlling expression and the first case.
      -Wtrampolines               Warn whenever a trampoline is generated.
      -Wtype-limits               Warn if a comparison is always true or always
                                  false due to the limited range of the data type.
      -Wunreachable-code          Does nothing. Preserved for backward
                                  compatibility.
      -Wunsafe-loop-optimizations Does nothing. Preserved for backward
                                  compatibility.
      -Wunused-but-set-parameter  Warn when a function parameter is only set,
                                  otherwise unused.
      -Wunused-but-set-variable   Warn when a variable is only set, otherwise
                                  unused.
      -Wunused-function           Warn when a function is unused.
      -Wunused-label              Warn when a label is unused.
      -Wunused-parameter          Warn when a function parameter is unused.
      -Wunused-value              Warn when an expression value is unused.
      -Wvector-operation-performance Warn when a vector operation is compiled
                                  outside the SIMD.
## 🐤🐥 optimization options

    The following options control optimizations:
      -O<number>                  Set optimization level to <number>.
      -Ofast                      Optimize for speed disregarding exact standards
                                  compliance.
      -Og                         Optimize for debugging experience rather than
                                  speed or size.
      -Os                         Optimize for space rather than speed.
      -faggressive-loop-optimizations Aggressively optimize loops using language
                                  constraints.
      -falign-functions           Align the start of functions.
      -falign-functions=          This option lacks documentation.
      -falign-jumps               Align labels which are only reached by jumping.
      -falign-jumps=              This option lacks documentation.
      -falign-labels              Align all labels.
      -falign-labels=             This option lacks documentation.
      -falign-loops               Align the start of loops.
      -falign-loops=              This option lacks documentation.
      -fassociative-math          Allow optimization for floating-point arithmetic
                                  which may change the result of the operation due
                                  to rounding.
      -fasynchronous-unwind-tables Generate unwind tables that are exact at each
                                  instruction boundary.
      -fauto-inc-dec              Generate auto-inc/dec instructions.
      -fbranch-count-reg          Replace add, compare, branch with branch on count
                                  register.
      -fbranch-probabilities      Use profiling information for branch
                                  probabilities.
      -fbranch-target-load-optimize Perform branch target load optimization before
                                  prologue / epilogue threading.
      -fbranch-target-load-optimize2 Perform branch target load optimization after
                                  prologue / epilogue threading.
      -fbtr-bb-exclusive          Restrict target load migration not to re-use
                                  registers in any basic block.
      -fcaller-saves              Save registers around function calls.
      -fcode-hoisting             Enable code hoisting.
      -fcombine-stack-adjustments Looks for opportunities to reduce stack
                                  adjustments and stack references.
      -fcompare-elim              Perform comparison elimination after register
                                  allocation has finished.
      -fconserve-stack            Do not perform optimizations increasing
                                  noticeably stack usage.
      -fcprop-registers           Perform a register copy-propagation optimization
                                  pass.
      -fcrossjumping              Perform cross-jumping optimization.
      -fcse-follow-jumps          When running CSE, follow jumps to their targets.
      -fcx-fortran-rules          Complex multiplication and division follow
                                  Fortran rules.
      -fcx-limited-range          Omit range reduction step when performing complex
                                  division.
      -fdce                       Use the RTL dead code elimination pass.
      -fdefer-pop                 Defer popping functions args from stack until
                                  later.
      -fdelayed-branch            Attempt to fill delay slots of branch
                                  instructions.
      -fdelete-dead-exceptions    Delete dead instructions that may throw
                                  exceptions.
      -fdelete-null-pointer-checks Delete useless null pointer checks.
      -fdevirtualize              Try to convert virtual calls to direct ones.
      -fdevirtualize-speculatively Perform speculative devirtualization.
      -fdse                       Use the RTL dead store elimination pass.
      -fearly-inlining            Perform early inlining.
      -fexceptions                Enable exception handling.
      -fexpensive-optimizations   Perform a number of minor, expensive
                                  optimizations.
      -ffast-math                 This option lacks documentation.
      -ffinite-math-only          Assume no NaNs or infinities are generated.
      -ffloat-store               Don't allocate floats and doubles in extended-
                                  precision registers.
      -fforward-propagate         Perform a forward propagation pass on RTL.
      -ffp-contract=[off|on|fast] Perform floating-point expression contraction.
      -ffp-int-builtin-inexact    Allow built-in functions ceil, floor, round,
                                  trunc to raise "inexact" exceptions.
      -ffunction-cse              Allow function addresses to be held in registers.
      -fgcse                      Perform global common subexpression elimination.
      -fgcse-after-reload         Perform global common subexpression elimination
                                  after register allocation has finished.
      -fgcse-las                  Perform redundant load after store elimination in
                                  global common subexpression elimination.
      -fgcse-lm                   Perform enhanced load motion during global common
                                  subexpression elimination.
      -fgcse-sm                   Perform store motion after global common
                                  subexpression elimination.
      -fgraphite                  Enable in and out of Graphite representation.
      -fgraphite-identity         Enable Graphite Identity transformation.
      -fguess-branch-probability  Enable guessing of branch probabilities.
      -fhoist-adjacent-loads      Enable hoisting adjacent loads to encourage
                                  generating conditional move instructions.
      -fif-conversion             Perform conversion of conditional jumps to
                                  branchless equivalents.
      -fif-conversion2            Perform conversion of conditional jumps to
                                  conditional execution.
      -findirect-inlining         Perform indirect inlining.
      -finline                    Enable inlining of function declared "inline",
                                  disabling disables all inlining.
      -finline-atomics            Inline __atomic operations when a lock free
                                  instruction sequence is available.
      -finline-functions          Integrate functions not declared "inline" into
                                  their callers when profitable.
      -finline-functions-called-once Integrate functions only required by their
                                  single caller.
      -finline-small-functions    Integrate functions into their callers when code
                                  size is known not to grow.
      -fipa-bit-cp                Perform interprocedural bitwise constant
                                  propagation.
      -fipa-cp                    Perform interprocedural constant propagation.
      -fipa-cp-clone              Perform cloning to make Interprocedural constant
                                  propagation stronger.
      -fipa-icf                   Perform Identical Code Folding for functions and
                                  read-only variables.
      -fipa-icf-functions         Perform Identical Code Folding for functions.
      -fipa-icf-variables         Perform Identical Code Folding for variables.
      -fipa-profile               Perform interprocedural profile propagation.
      -fipa-pta                   Perform interprocedural points-to analysis.
      -fipa-pure-const            Discover pure and const functions.
      -fipa-ra                    Use caller save register across calls if possible.
      -fipa-reference             Discover readonly and non addressable static
                                  variables.
      -fipa-sra                   Perform interprocedural reduction of aggregates.
      -fipa-vrp                   Perform IPA Value Range Propagation.
      -fira-algorithm=[CB|priority] Set the used IRA algorithm.
      -fira-hoist-pressure        Use IRA based register pressure calculation in
                                  RTL hoist optimizations.
      -fira-loop-pressure         Use IRA based register pressure calculation in
                                  RTL loop optimizations.
      -fira-region=[one|all|mixed] Set regions for IRA.
      -fira-share-save-slots      Share slots for saving different hard registers.
      -fira-share-spill-slots     Share stack slots for spilled pseudo-registers.
      -fisolate-erroneous-paths-attribute Detect paths that trigger erroneous or
                                  undefined behavior due to a null value being used
                                  in a way forbidden by a returns_nonnull or
                                  nonnull attribute.  Isolate those paths from the
                                  main control flow and turn the statement with
                                  erroneous or undefined behavior into a trap.
      -fisolate-erroneous-paths-dereference Detect paths that trigger erroneous or
                                  undefined behavior due to dereferencing a null
                                  pointer.  Isolate those paths from the main
                                  control flow and turn the statement with
                                  erroneous or undefined behavior into a trap.
      -fivopts                    Optimize induction variables on trees.
      -fjump-tables               Use jump tables for sufficiently large switch
                                  statements.
      -fkeep-gc-roots-live        This option lacks documentation.
      -flifetime-dse              Tell DSE that the storage for a C++ object is
                                  dead when the constructor starts and when the
                                  destructor finishes.
      -flifetime-dse=<0,2>        This option lacks documentation.
      -flimit-function-alignment  This option lacks documentation.
      -flive-range-shrinkage      Relief of register pressure through live range
                                  shrinkage.
      -floop-interchange          Enable loop interchange on trees.
      -floop-nest-optimize        Enable the loop nest optimizer.
      -floop-parallelize-all      Mark all loops as parallel.
      -floop-unroll-and-jam       Perform unroll-and-jam on loops.
      -flra-remat                 Do CFG-sensitive rematerialization in LRA.
      -fmath-errno                Set errno after built-in math functions.
      -fmodulo-sched              Perform SMS based modulo scheduling before the
                                  first scheduling pass.
      -fmodulo-sched-allow-regmoves Perform SMS based modulo scheduling with
                                  register moves allowed.
      -fmove-loop-invariants      Move loop invariant computations out of loops.
      -fnon-call-exceptions       Support synchronous non-call exceptions.
      -fomit-frame-pointer        When possible do not generate stack frames.
      -fopt-info                  Enable all optimization info dumps on stderr.
      -foptimize-sibling-calls    Optimize sibling and tail recursive calls.
      -foptimize-strlen           Enable string length optimizations on trees.
      -fpack-struct               Pack structure members together without holes.
      -fpack-struct=<number>      Set initial maximum structure member alignment.
      -fpartial-inlining          Perform partial inlining.
      -fpatchable-function-entry= Insert NOP instructions at each function entry.
      -fpeel-loops                Perform loop peeling.
      -fpeephole                  Enable machine specific peephole optimizations.
      -fpeephole2                 Enable an RTL peephole pass before sched2.
      -fplt                       Use PLT for PIC calls (-fno-plt: load the address
                                  from GOT at call site).
      -fpredictive-commoning      Run predictive commoning optimization.
      -fprefetch-loop-arrays      Generate prefetch instructions, if available, for
                                  arrays in loops.
      -freciprocal-math           Same as -fassociative-math for expressions which
                                  include division.
      -freg-struct-return         Return small aggregates in registers.
      -frename-registers          Perform a register renaming optimization pass.
      -freorder-blocks            Reorder basic blocks to improve code placement.
      -freorder-blocks-algorithm=[simple|stc] Set the used basic block reordering
                                  algorithm.
      -freorder-blocks-and-partition Reorder basic blocks and partition into hot
                                  and cold sections.
      -freorder-functions         Reorder functions to improve code placement.
      -frerun-cse-after-loop      Add a common subexpression elimination pass after
                                  loop optimizations.
      -freschedule-modulo-scheduled-loops Enable/Disable the traditional scheduling
                                  in loops that already passed modulo scheduling.
      -frounding-math             Disable optimizations that assume default FP
                                  rounding behavior.
      -fsched-critical-path-heuristic Enable the critical path heuristic in the
                                  scheduler.
      -fsched-dep-count-heuristic Enable the dependent count heuristic in the
                                  scheduler.
      -fsched-group-heuristic     Enable the group heuristic in the scheduler.
      -fsched-interblock          Enable scheduling across basic blocks.
      -fsched-last-insn-heuristic Enable the last instruction heuristic in the
                                  scheduler.
      -fsched-pressure            Enable register pressure sensitive insn
                                  scheduling.
      -fsched-rank-heuristic      Enable the rank heuristic in the scheduler.
      -fsched-spec                Allow speculative motion of non-loads.
      -fsched-spec-insn-heuristic Enable the speculative instruction heuristic in
                                  the scheduler.
      -fsched-spec-load           Allow speculative motion of some loads.
      -fsched-spec-load-dangerous Allow speculative motion of more loads.
      -fsched-stalled-insns       Allow premature scheduling of queued insns.
      -fsched-stalled-insns-dep   Set dependence distance checking in premature
                                  scheduling of queued insns.
      -fsched-stalled-insns-dep=<number> Set dependence distance checking in
                                  premature scheduling of queued insns.
      -fsched-stalled-insns=<number> Set number of queued insns that can be
                                  prematurely scheduled.
      -fsched2-use-superblocks    If scheduling post reload, do superblock
                                  scheduling.
      -fschedule-fusion           Perform a target dependent instruction fusion
                                  optimization pass.
      -fschedule-insns            Reschedule instructions before register
                                  allocation.
      -fschedule-insns2           Reschedule instructions after register allocation.
      -fsection-anchors           Access data in the same section from shared
                                  anchor points.
      -fsel-sched-pipelining      Perform software pipelining of inner loops during
                                  selective scheduling.
      -fsel-sched-pipelining-outer-loops Perform software pipelining of outer loops
                                  during selective scheduling.
      -fsel-sched-reschedule-pipelined Reschedule pipelined regions without
                                  pipelining.
      -fselective-scheduling      Schedule instructions using selective scheduling
                                  algorithm.
      -fselective-scheduling2     Run selective scheduling after reload.
      -fset-stack-executable      For nested functions on stack executable
                                  permission is set.
      -fshrink-wrap               Emit function prologues only before parts of the
                                  function that need it, rather than at the top of
                                  the function.
      -fshrink-wrap-separate      Shrink-wrap parts of the prologue and epilogue
                                  separately.
      -fsignaling-nans            Disable optimizations observable by IEEE
                                  signaling NaNs.
      -fsigned-zeros              Disable floating point optimizations that ignore
                                  the IEEE signedness of zero.
      -fsimd-cost-model=[unlimited|dynamic|cheap] Specifies the vectorization cost
                                  model for code marked with a simd directive.
      -fsingle-precision-constant Convert floating point constants to single
                                  precision constants.
      -fsplit-ivs-in-unroller     Split lifetimes of induction variables when loops
                                  are unrolled.
      -fsplit-loops               Perform loop splitting.
      -fsplit-paths               Split paths leading to loop backedges.
      -fsplit-wide-types          Split wide types into independent registers.
      -fssa-backprop              Enable backward propagation of use properties at
                                  the SSA level.
      -fssa-phiopt                Optimize conditional patterns using SSA PHI nodes.
      -fstack-check=[no|generic|specific] Insert stack checking code into the
                                  program.
      -fstack-clash-protection    Insert code to probe each page of stack space as
                                  it is allocated to protect from stack-clash style
                                  attacks.
      -fstack-protector           Use propolice as a stack protection method.
      -fstack-protector-all       Use a stack protection method for every function.
      -fstack-protector-explicit  Use stack protection method only for functions
                                  with the stack_protect attribute.
      -fstack-protector-strong    Use a smart stack protection method for certain
                                  functions.
      -fstack-reuse=[all|named_vars|none] Set stack reuse level for local variables.
      -fstdarg-opt                Optimize amount of stdarg registers saved to
                                  stack at start of function.
      -fstore-merging             Merge adjacent stores.
      -fstrict-aliasing           Assume strict aliasing rules apply.
      -fstrict-volatile-bitfields Force bitfield accesses to match their type width.
      -fthread-jumps              Perform jump threading optimizations.
      -ftracer                    Perform superblock formation via tail duplication.
      -ftrapping-math             Assume floating-point operations can trap.
      -ftrapv                     Trap for signed overflow in addition, subtraction
                                  and multiplication.
      -ftree-bit-ccp              Enable SSA-BIT-CCP optimization on trees.
      -ftree-builtin-call-dce     Enable conditional dead code elimination for
                                  builtin calls.
      -ftree-ccp                  Enable SSA-CCP optimization on trees.
      -ftree-ch                   Enable loop header copying on trees.
      -ftree-coalesce-vars        Enable SSA coalescing of user variables.
      -ftree-copy-prop            Enable copy propagation on trees.
      -ftree-cselim               Transform condition stores into unconditional
                                  ones.
      -ftree-dce                  Enable SSA dead code elimination optimization on
                                  trees.
      -ftree-dominator-opts       Enable dominator optimizations.
      -ftree-dse                  Enable dead store elimination.
      -ftree-forwprop             Enable forward propagation on trees.
      -ftree-fre                  Enable Full Redundancy Elimination (FRE) on trees.
      -ftree-loop-distribute-patterns Enable loop distribution for patterns
                                  transformed into a library call.
      -ftree-loop-distribution    Enable loop distribution on trees.
      -ftree-loop-if-convert      Convert conditional jumps in innermost loops to
                                  branchless equivalents.
      -ftree-loop-im              Enable loop invariant motion on trees.
      -ftree-loop-ivcanon         Create canonical induction variables in loops.
      -ftree-loop-optimize        Enable loop optimizations on tree level.
      -ftree-loop-vectorize       Enable loop vectorization on trees.
      -ftree-lrs                  Perform live range splitting during the SSA-
                                  >normal pass.
      -ftree-parallelize-loops=<number> Enable automatic parallelization of loops.
      -ftree-partial-pre          In SSA-PRE optimization on trees, enable partial-
                                  partial redundancy elimination.
      -ftree-phiprop              Enable hoisting loads from conditional pointers.
      -ftree-pre                  Enable SSA-PRE optimization on trees.
      -ftree-pta                  Perform function-local points-to analysis on
                                  trees.
      -ftree-reassoc              Enable reassociation on tree level.
      -ftree-scev-cprop           Enable copy propagation of scalar-evolution
                                  information.
      -ftree-sink                 Enable SSA code sinking on trees.
      -ftree-slp-vectorize        Enable basic block vectorization (SLP) on trees.
      -ftree-slsr                 Perform straight-line strength reduction.
      -ftree-sra                  Perform scalar replacement of aggregates.
      -ftree-switch-conversion    Perform conversions of switch initializations.
      -ftree-tail-merge           Enable tail merging on trees.
      -ftree-ter                  Replace temporary expressions in the SSA->normal
                                  pass.
      -ftree-vectorize            Enable vectorization on trees.
      -ftree-vrp                  Perform Value Range Propagation on trees.
      -funconstrained-commons     Assume common declarations may be overridden with
                                  ones with a larger trailing array.
      -funroll-all-loops          Perform loop unrolling for all loops.
      -funroll-loops              Perform loop unrolling when iteration count is
                                  known.
      -funsafe-math-optimizations Allow math optimizations that may violate IEEE or
                                  ISO standards.
      -funswitch-loops            Perform loop unswitching.
      -funwind-tables             Just generate unwind tables for exception
                                  handling.
      -fvar-tracking              Perform variable tracking.
      -fvar-tracking-assignments  Perform variable tracking by annotating
                                  assignments.
      -fvar-tracking-assignments-toggle Toggle -fvar-tracking-assignments.
      -fvar-tracking-uninit       Perform variable tracking and also tag variables
                                  that are uninitialized.
      -fvariable-expansion-in-unroller Apply variable expansion when loops are
                                  unrolled.
      Specifies the cost model for vectorization. -fvect-cost-model=[unlimited|dynamic|cheap] Specifies
                                  the cost model for vectorization.
      -fvpt                       Use expression value profiles in optimizations.
      -fweb                       Construct webs and split unrelated uses of single
                                  variable.
      -fwrapv                     Assume signed arithmetic overflow wraps around.
      -fwrapv-pointer             Assume pointer overflow wraps around.

## 🐤🐥 target specific options

    The following options are target specific:
      -m128bit-long-double        sizeof(long double) is 16.
      -m16                        Generate 16bit i386 code.
      -m32                        Generate 32bit i386 code.
      -m3dnow                     Support 3DNow! built-in functions.
      -m3dnowa                    Support Athlon 3Dnow! built-in functions.
      -m64                        Generate 64bit x86-64 code.
      -m80387                     Use hardware fp.
      -m8bit-idiv                 Expand 32bit/64bit integer divide into 8bit
                                  unsigned integer divide with run-time check.
      -m96bit-long-double         sizeof(long double) is 12.
      -mabi=                      Generate code that conforms to the given ABI.
      -mabm                       Support code generation of Advanced Bit
                                  Manipulation (ABM) instructions.
      -maccumulate-outgoing-args  Reserve space for outgoing arguments in the
                                  function prologue.
      -maddress-mode=             Use given address mode.
      -madx                       Support flag-preserving add-carry instructions.
      -maes                       Support AES built-in functions and code
                                  generation.
      -malign-data=               Use the given data alignment.
      -malign-double              Align some doubles on dword boundary.
      -malign-functions=          Function starts are aligned to this power of 2.
      -malign-jumps=              Jump targets are aligned to this power of 2.
      -malign-loops=              Loop code aligned to this power of 2.
      -malign-stringops           Align destination of the string operations.
      -march=                     Generate code for given CPU.
      -masm=                      Use given assembler dialect.
      -mavx                       Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2 and AVX built-in functions and code
                                  generation.
      -mavx2                      Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX and AVX2 built-in functions and code
                                  generation.
      -mavx256-split-unaligned-load Split 32-byte AVX unaligned load.
      -mavx256-split-unaligned-store Split 32-byte AVX unaligned store.
      -mavx5124fmaps              Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2, AVX512F and AVX5124FMAPS built-
                                  in functions and code generation.
      -mavx5124vnniw              Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2, AVX512F and AVX5124VNNIW built-
                                  in functions and code generation.
      -mavx512bitalg              Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2, AVX512F and AVX512BITALG built-
                                  in functions and code generation.
      -mavx512bw                  Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2 and AVX512F and AVX512BW built-
                                  in functions and code generation.
      -mavx512cd                  Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2 and AVX512F and AVX512CD built-
                                  in functions and code generation.
      -mavx512dq                  Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2 and AVX512F and AVX512DQ built-
                                  in functions and code generation.
      -mavx512er                  Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2 and AVX512F and AVX512ER built-
                                  in functions and code generation.
      -mavx512f                   Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2 and AVX512F built-in functions
                                  and code generation.
      -mavx512ifma                Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2 and AVX512F and AVX512IFMA
                                  built-in functions and code generation.
      -mavx512pf                  Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2 and AVX512F and AVX512PF built-
                                  in functions and code generation.
      -mavx512vbmi                Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2 and AVX512F and AVX512VBMI
                                  built-in functions and code generation.
      -mavx512vbmi2               Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2, AVX512F and AVX512VBMI2 built-
                                  in functions and code generation.
      -mavx512vl                  Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2 and AVX512F and AVX512VL built-
                                  in functions and code generation.
      -mavx512vnni                Support AVX512VNNI built-in functions and code
                                  generation.
      -mavx512vpopcntdq           Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX, AVX2, AVX512F and AVX512VPOPCNTDQ
                                  built-in functions and code generation.
      -mbmi                       Support BMI built-in functions and code
                                  generation.
      -mbmi2                      Support BMI2 built-in functions and code
                                  generation.
      -mbranch-cost=<0,5>         Branches are this expensive (arbitrary units).
      -mcall-ms2sysv-xlogues      Use libgcc stubs to save and restore registers
                                  clobbered by 64-bit Microsoft to System V ABI
                                  calls.
      -mcet-switch                Turn on CET instrumentation for switch statements
                                  that use a jump table and an indirect jump.
      -mcld                       Generate cld instruction in the function prologue.
      -mclflushopt                Support CLFLUSHOPT instructions.
      -mclwb                      Support CLWB instruction.
      -mclzero                    Support CLZERO built-in functions and code
                                  generation.
      -mcmodel=                   Use given x86-64 code model.
      -mconsole                   Create console application.
      -mcpu=                      Same as -mtune=.  Use the latter option instead. 
                                  Uses of this option are diagnosed.
      -mcrc32                     Support code generation of crc32 instruction.
      -mcx16                      Support code generation of cmpxchg16b instruction.
      -mdispatch-scheduler        Do dispatch scheduling if processor is bdver1,
                                  bdver2, bdver3, bdver4 or znver1 and Haifa
                                  scheduling is selected.
      -mdll                       Generate code for a DLL.
      -mdump-tune-features        This option lacks documentation.
      -mf16c                      Support F16C built-in functions and code
                                  generation.
      -mfancy-math-387            Generate sin, cos, sqrt for FPU.
      -mfentry                    Emit profiling counter call at function entry
                                  before prologue.
      -mfma                       Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1,
                                  SSE4.2, AVX and FMA built-in functions and code
                                  generation.
      -mfma4                      Support FMA4 built-in functions and code
                                  generation.
      -mforce-drap                Always use Dynamic Realigned Argument Pointer
                                  (DRAP) to realign stack.
      -mforce-indirect-call       Make all function calls indirect.
      -mfp-ret-in-387             Return values of functions in FPU registers.
      -mfpmath=                   Generate floating point mathematics using given
                                  instruction set.
      -mfsgsbase                  Support FSGSBASE built-in functions and code
                                  generation.
      -mfunction-return=          Convert function return to call and return thunk.
      -mfused-madd                Same as -ffp-contract=.  Use the latter option
                                  instead.  Uses of this option are diagnosed.
      -mfxsr                      Support FXSAVE and FXRSTOR instructions.
      -mgeneral-regs-only         Generate code which uses only the general
                                  registers.
      -mgfni                      Support GFNI built-in functions and code
                                  generation.
      -mhard-float                Use hardware fp.
      -mhle                       Support Hardware Lock Elision prefixes.
      -miamcu                     Generate code that conforms to Intel MCU psABI.
      -mieee-fp                   Use IEEE math for fp comparisons.
      -mincoming-stack-boundary=  Assume incoming stack aligned to this power of 2.
      -mindirect-branch-register  Force indirect call and jump via register.
      -mindirect-branch=          Convert indirect call and jump to call and return
                                  thunks.
      -minline-all-stringops      Inline all known string operations.
      -minline-stringops-dynamically Inline memset/memcpy string operations, but
                                  perform inline version only for small blocks.
      -mintel-syntax              Same as -masm=.  Use the latter option instead. 
                                  Uses of this option are diagnosed.
      -mlarge-data-threshold=<number> Data greater than given threshold will go
                                  into .ldata section in x86-64 medium model.
      -mlong-double-128           Use 128-bit long double.
      -mlong-double-64            Use 64-bit long double.
      -mlong-double-80            Use 80-bit long double.
      -mlwp                       Support LWP built-in functions and code
                                  generation.
      -mlzcnt                     Support LZCNT built-in function and code
                                  generation.
      -mmemcpy-strategy=          Specify memcpy expansion strategy when expected
                                  size is known.
      -mmemset-strategy=          Specify memset expansion strategy when expected
                                  size is known.
      -mmitigate-rop              Attempt to avoid generating instruction sequences
                                  containing ret bytes.
      -mmmx                       Support MMX built-in functions.
      -mmovbe                     Support code generation of movbe instruction.
      -mmovdir64b                 Support MOVDIR64B built-in functions and code
                                  generation.
      -mmovdiri                   Support MOVDIRI built-in functions and code
                                  generation.
      -mmpx                       Support MPX code generation.
      -mms-bitfields              Use native (MS) bitfield layout.
      -mmwaitx                    Support MWAITX and MONITORX built-in functions
                                  and code generation.
      -mno-align-stringops        This option lacks documentation.
      -mno-default                Clear all tune features.
      -mno-fancy-math-387         This option lacks documentation.
      -mno-push-args              This option lacks documentation.
      -mno-red-zone               This option lacks documentation.
      -mno-sse4                   Do not support SSE4.1 and SSE4.2 built-in
                                  functions and code generation.
      -mnop-fun-dllimport         Ignore dllimport for functions.
      -mnop-mcount                Generate mcount/__fentry__ calls as nops. To
                                  activate they need to be patched in.
      -momit-leaf-frame-pointer   Omit the frame pointer in leaf functions.
      -mpc32                      Set 80387 floating-point precision to 32-bit.
      -mpc64                      Set 80387 floating-point precision to 64-bit.
      -mpc80                      Set 80387 floating-point precision to 80-bit.
      -mpclmul                    Support PCLMUL built-in functions and code
                                  generation.
      -mpcommit                   This option lacks documentation.  Uses of this
                                  option are diagnosed.
      -mpconfig                   Support PCONFIG built-in functions and code
                                  generation.
      -mpe-aligned-commons        Use the GNU extension to the PE format for
                                  aligned common data.
      -mpku                       Support PKU built-in functions and code
                                  generation.
      -mpopcnt                    Support code generation of popcnt instruction.
      -mprefer-avx128             Use 128-bit AVX instructions instead of 256-bit
                                  AVX instructions in the auto-vectorizer.  Same as
                                  -mprefer-vector-width=.
      -mprefer-vector-width=      Use given register vector width instructions
                                  instead of maximum register width in the auto-
                                  vectorizer.
      -mpreferred-stack-boundary= Attempt to keep stack aligned to this power of 2.
      -mprefetchwt1               Support PREFETCHWT1 built-in functions and code
                                  generation.
      -mprfchw                    Support PREFETCHW instruction.
      -mpush-args                 Use push instructions to save outgoing arguments.
      -mrdpid                     Support RDPID built-in functions and code
                                  generation.
      -mrdrnd                     Support RDRND built-in functions and code
                                  generation.
      -mrdseed                    Support RDSEED instruction.
      -mrecip                     Generate reciprocals instead of divss and sqrtss.
      -mrecip=                    Control generation of reciprocal estimates.
      -mrecord-mcount             Generate __mcount_loc section with all mcount or
                                  __fentry__ calls.
      -mred-zone                  Use red-zone in the x86-64 code.
      -mregparm=                  Number of registers used to pass integer
                                  arguments.
      -mrtd                       Alternate calling convention.
      -mrtm                       Support RTM built-in functions and code
                                  generation.
      -msahf                      Support code generation of sahf instruction in
                                  64bit x86-64 code.
      -msgx                       Support SGX built-in functions and code
                                  generation.
      -msha                       Support SHA1 and SHA256 built-in functions and
                                  code generation.
      -mshstk                     Enable shadow stack built-in functions from
                                  Control-flow Enforcement Technology (CET).
      -mskip-rax-setup            Skip setting up RAX register when passing
                                  variable arguments.
      -msoft-float                Do not use hardware fp.
      -msse                       Support MMX and SSE built-in functions and code
                                  generation.
      -msse2                      Support MMX, SSE and SSE2 built-in functions and
                                  code generation.
      -msse2avx                   Encode SSE instructions with VEX prefix.
      -msse3                      Support MMX, SSE, SSE2 and SSE3 built-in
                                  functions and code generation.
      -msse4                      Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1 and
                                  SSE4.2 built-in functions and code generation.
      -msse4.1                    Support MMX, SSE, SSE2, SSE3, SSSE3 and SSE4.1
                                  built-in functions and code generation.
      -msse4.2                    Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1 and
                                  SSE4.2 built-in functions and code generation.
      -msse4a                     Support MMX, SSE, SSE2, SSE3 and SSE4A built-in
                                  functions and code generation.
      -msse5                      Same as -mavx.  Use the latter option instead. 
                                  Uses of this option are diagnosed.
      -msseregparm                Use SSE register passing conventions for SF and
                                  DF mode.
      -mssse3                     Support MMX, SSE, SSE2, SSE3 and SSSE3 built-in
                                  functions and code generation.
      -mstack-arg-probe           Enable stack probing.
      -mstack-protector-guard-offset= Use the given offset for addressing the stack-
                                  protector guard.
      -mstack-protector-guard-reg= Use the given base register for addressing the
                                  stack-protector guard.
      -mstack-protector-guard-symbol= Use the given symbol for addressing the stack-
                                  protector guard.
      -mstack-protector-guard=    Use given stack-protector guard.
      -mstackrealign              Realign stack in prologue.
      -mstringop-strategy=        Chose strategy to generate stringop using.
      -mstv                       Disable Scalar to Vector optimization pass
                                  transforming 64-bit integer computations into a
                                  vector ones.
      -mtbm                       Support TBM built-in functions and code
                                  generation.
      -mthreads                   Use Mingw-specific thread support.
      -mtls-dialect=              Use given thread-local storage dialect.
      -mtls-direct-seg-refs       Use direct references against %gs when accessing
                                  tls data.
      -mtune-ctrl=                Fine grain control of tune features.
      -mtune=                     Schedule code for given CPU.
      -municode                   Use unicode startup and define UNICODE macro.
      -mvaes                      Support VAES built-in functions and code
                                  generation.
      -mveclibabi=                Vector library ABI to use.
      -mvect8-ret-in-mem          Return 8-byte vectors in memory.
      -mvpclmulqdq                Support VPCLMULQDQ built-in functions and code
                                  generation.
      -mvzeroupper                Generate vzeroupper instruction before a transfer
                                  of control flow out of the function.
      -mwbnoinvd                  Support WBNOINVD built-in functions and code
                                  generation.
      -mwin32                     Set Windows defines.
      -mwindows                   Create GUI application.
      -mx32                       Generate 32bit x86-64 code.
      -mxop                       Support XOP built-in functions and code
                                  generation.
      -mxsave                     Support XSAVE and XRSTOR instructions.
      -mxsavec                    Support XSAVEC instructions.
      -mxsaveopt                  Support XSAVEOPT instruction.
      -mxsaves                    Support XSAVES and XRSTORS instructions.

      Known assembler dialects (for use with the -masm= option):
        att intel

      Known ABIs (for use with the -mabi= option):
        ms sysv

      Known code models (for use with the -mcmodel= option):
        32 kernel large medium small

      Valid arguments to -mfpmath=:
        387 387+sse 387,sse both sse sse+387 sse,387

      Known indirect branch choices (for use with the -mindirect-branch=/-mfunction-return= options):
        keep thunk thunk-extern thunk-inline

      Known data alignment choices (for use with the -malign-data= option):
        abi cacheline compat

      Known vectorization library ABIs (for use with the -mveclibabi= option):
        acml svml

      Known address mode (for use with the -maddress-mode= option):
        long short

      Known preferred register vector length (to use with the -mprefer-vector-width= option)
        128 256 512 none

      Known stack protector guard (for use with the -mstack-protector-guard= option):
        global tls

      Valid arguments to -mstringop-strategy=:
        byte_loop libcall loop rep_4byte rep_8byte rep_byte unrolled_loop
        vector_loop

      Known TLS dialects (for use with the -mtls-dialect= option):
        gnu gnu2

## 🐤🐥 language-independent options

    The following options are language-independent:
      --debug                     Same as -g.  Use the latter option instead.
      --dumpbase                  Same as -dumpbase.  Use the latter option instead.
      --dumpdir                   Same as -dumpdir.  Use the latter option instead.
      --help                      Display this information.
      --help=<class>              Display descriptions of a specific class of
                                  options.  <class> is one or more of optimizers,
                                  target, warnings, undocumented, params.
      --optimize                  Same as -O.  Use the latter option instead.
      --param <param>=<value>     Set parameter <param> to value.  See below for a
                                  complete list of parameters.
      --param=                    Same as --param.  Use the latter option instead.
      --pedantic-errors           Same as -pedantic-errors.  Use the latter option
                                  instead.
      --profile                   Same as -p.  Use the latter option instead.
      --target-help               Alias for --help=target.
      --version                   This option lacks documentation.
      -Werror=                    Treat specified warning as error.
      -Wfatal-errors              Exit on the first error occurred.
      -aux-info <file>            Emit declaration information into <file>.
      -aux-info=                  Same as -aux-info.  Use the latter option instead.
      -auxbase                    This option lacks documentation.
      -auxbase-strip              This option lacks documentation.
      -dumpbase <file>            Set the file basename to be used for dumps.
      -dumpdir <dir>              Set the directory name to be used for dumps.
      -fPIC                       Generate position-independent code if possible
                                  (large mode).
      -fPIE                       Generate position-independent code for
                                  executables if possible (large mode).
      -fabi-version=              The version of the C++ ABI in use.
      -fargument-alias            Does nothing. Preserved for backward
                                  compatibility.
      -fargument-noalias          Does nothing. Preserved for backward
                                  compatibility.
      -fargument-noalias-anything Does nothing. Preserved for backward
                                  compatibility.
      -fargument-noalias-global   Does nothing. Preserved for backward
                                  compatibility.
      -fasan-shadow-offset=<number> Use custom shadow memory offset.
      -fauto-profile              Use sample profile information for call graph
                                  node weights. The default profile file is
                                  fbdata.afdo in 'pwd'.
      -fauto-profile=             Use sample profile information for call graph
                                  node weights. The profile file is specified in
                                  the argument.
      -fbounds-check              Generate code to check bounds before indexing
                                  arrays.
      -fcall-saved-<register>     Mark <register> as being preserved across
                                  functions.
      -fcall-used-<register>      Mark <register> as being corrupted by function
                                  calls.
      -fcf-protection             Same as -fcf-protection=.  Use the latter option
                                  instead.
      -fcf-protection=[full|branch|return|none] Instrument functions with checks to
                                  verify jump/call/return control-flow transfer
                                  instructions have valid targets.
      -fcheck-data-deps           This switch is deprecated; do not use.
      -fcheck-new                 Check the return value of new in C++.
      -fchecking                  Perform internal consistency checkings.
      -fchecking=                 Perform internal consistency checkings.
      -fcommon                    Do not put uninitialized globals in the common
                                  section.
      -fcompare-debug-second      Run only the second compilation of -fcompare-
                                  debug.
      -fcompare-debug[=<opts>]    Compile with and without e.g. -gtoggle, and
                                  compare the final-insns dump.
      -fcse-skip-blocks           Does nothing.  Preserved for backward
                                  compatibility.
      -fdata-sections             Place data items into their own section.
      -fdbg-cnt-list              List all available debugging counters with their
                                  limits and counts.
      -fdbg-cnt=<counter>:<limit>[,<counter>:<limit>,...] Set the debug counter
                                  limit.
      -fdebug-prefix-map=         -fdebug-prefix-map=<old>=<new> Map one directory
                                  name to another in debug information.
      -fdebug-types-section       Output .debug_types section when using DWARF v4
                                  debuginfo.
      -fdevirtualize-at-ltrans    Stream extra data to support more aggressive
                                  devirtualization in LTO local transformation mode.
      -fdiagnostics-color         Same as -fdiagnostics-color=.  Use the latter
                                  option instead.
      -fdiagnostics-color=[never|always|auto] Colorize diagnostics.
      -fdiagnostics-generate-patch Print fix-it hints to stderr in unified diff
                                  format.
      -fdiagnostics-parseable-fixits Print fix-it hints in machine-readable form.
      -fdiagnostics-show-caret    Show the source line with a caret indicating the
                                  column.
      -fdiagnostics-show-location=[once|every-line] How often to emit source
                                  location at the beginning of line-wrapped
                                  diagnostics.
      -fdiagnostics-show-option   Amend appropriate diagnostic messages with the
                                  command line option that controls them.
      -fdisable-                  -fdisable-[tree|rtl|ipa]-<pass>=range1+range2
                                  disables an optimization pass.
      -fdump-<type>               Dump various compiler internals to a file.
      -fdump-final-insns=filename Dump to filename the insns at the end of
                                  translation.
      -fdump-go-spec=filename     Write all declarations to file as Go code.
      -fdump-internal-locations   Dump detailed information on GCC's internal
                                  representation of source code locations.
      -fdump-noaddr               Suppress output of addresses in debugging dumps.
      -fdump-passes               Dump optimization passes.
      -fdump-unnumbered           Suppress output of instruction numbers, line
                                  number notes and addresses in debugging dumps.
      -fdump-unnumbered-links     Suppress output of previous and next insn numbers
                                  in debugging dumps.
      -fdwarf2-cfi-asm            Enable CFI tables via GAS assembler directives.
      -feliminate-dwarf2-dups     Does nothing.  Preserved for backward
                                  compatibility.
      -feliminate-unused-debug-symbols Perform unused symbol elimination in debug
                                  info.
      -feliminate-unused-debug-types Perform unused type elimination in debug info.
      -femit-class-debug-always   Do not suppress C++ class debug information.
      -fenable-                   -fenable-[tree|rtl|ipa]-<pass>=range1+range2
                                  enables an optimization pass.
      -fexcess-precision=[fast|standard] Specify handling of excess floating-point
                                  precision.
      -ffat-lto-objects           Output lto objects containing both the
                                  intermediate language and binary output.
      -ffile-prefix-map=          -ffile-prefix-map=<old>=<new> Map one directory
                                  name to another in compilation result.
      -ffixed-<register>          Mark <register> as being unavailable to the
                                  compiler.
      -fforce-addr                Does nothing.  Preserved for backward
                                  compatibility.
      -ffunction-sections         Place each function into its own section.
      -fgnat-encodings=[all|gdb|minimal] Select the balance between GNAT encodings
                                  and standard DWARF emitted in the debug
                                  information
      -fgnu-tm                    Enable support for GNU transactional memory.
      -fgnu-unique                Use STB_GNU_UNIQUE if supported by the assembler.
      -fhelp                      Same as --help.  Use the latter option instead.
      -fhelp=                     Same as --help=.  Use the latter option instead.
      -fident                     Process #ident directives.
      -finhibit-size-directive    Do not generate .size directives.
      -finline-limit-             Same as -finline-limit=.  Use the latter option
                                  instead.
      -finline-limit=<number>     Limit the size of inlined functions to <number>.
      -finstrument-functions      Instrument function entry and exit with profiling
                                  calls.
      -finstrument-functions-exclude-file-list= -finstrument-functions-exclude-file-
                                  list=filename,...  Do not instrument functions
                                  listed in files.
      -finstrument-functions-exclude-function-list= -finstrument-functions-exclude-
                                  function-list=name,...  Do not instrument listed
                                  functions.
      -fipa-cp-alignment          Does nothing.  Preserved for backward
                                  compatibility.
      -fipa-matrix-reorg          Does nothing. Preserved for backward
                                  compatibility.
      -fipa-struct-reorg          Does nothing. Preserved for backward
                                  compatibility.
      -fira-verbose=<number>      Control IRA's level of diagnostic messages.
      -fkeep-inline-functions     Generate code for functions even if they are
                                  fully inlined.
      -fkeep-static-consts        Emit static const variables even if they are not
                                  used.
      -fkeep-static-functions     Generate code for static functions even if they
                                  are never called.
      -fleading-underscore        Give external symbols a leading underscore.
      -floop-block                Enable loop nest transforms.  Same as -floop-nest-
                                  optimize.  Same as -floop-nest-optimize.
      -floop-flatten              Does nothing. Preserved for backward
                                  compatibility.
      -floop-optimize             Does nothing.  Preserved for backward
                                  compatibility.
      -floop-strip-mine           Enable loop nest transforms.  Same as -floop-nest-
                                  optimize.  Same as -floop-nest-optimize.
      -flto                       Enable link-time optimization.
      -flto-compression-level=<number>  Use  Use zlib compression level <number> for
                                  IL.
      -flto-odr-type-merging      Merge C++ types using One Definition Rule.
      -flto-partition=            Specify the algorithm to partition symbols and
                                  vars at linktime.
      -flto-report                Report various link-time optimization statistics.
      -flto-report-wpa            Report various link-time optimization statistics
                                  for WPA only.
      -flto=                      Link-time optimization with number of parallel
                                  jobs or jobserver.
      -fmax-errors=<number>       Maximum number of errors to report.
      -fmem-report                Report on permanent memory allocation.
      -fmem-report-wpa            Report on permanent memory allocation in WPA only.
      -fmerge-all-constants       Attempt to merge identical constants and constant
                                  variables.
      -fmerge-constants           Attempt to merge identical constants across
                                  compilation units.
      -fmerge-debug-strings       Attempt to merge identical debug strings across
                                  compilation units.
      -fmessage-length=<number>   Limit diagnostics to <number> characters per
                                  line.  0 suppresses line-wrapping.
      -foffload-abi=              -foffload-abi=[lp64|ilp32]     Set the ABI to use
                                  in an offload compiler.
      -foffload=                  -foffload=<targets>=<options>  Specify offloading
                                  targets and options for them.
      -fopt-info[-<type>=filename] Dump compiler optimization details.
      -foptimize-register-move    Does nothing. Preserved for backward
                                  compatibility.
      -fpcc-struct-return         Return small aggregates in memory, not registers.
      -fpermitted-flt-eval-methods=[c11|ts-18661] Specify which values of
                                  FLT_EVAL_METHOD are permitted.
      -fpic                       Generate position-independent code if possible
                                  (small mode).
      -fpie                       Generate position-independent code for
                                  executables if possible (small mode).
      -fplugin-arg-<name>-<key>[=<value>] Specify argument <key>=<value> for plugin
                                  <name>.
      -fplugin=                   Specify a plugin to load.
      -fpost-ipa-mem-report       Report on memory allocation before
                                  interprocedural optimization.
      -fpre-ipa-mem-report        Report on memory allocation before
                                  interprocedural optimization.
      -fprofile                   Enable basic program profiling code.
      -fprofile-abs-path          Generate absolute source path names for gcov.
      -fprofile-arcs              Insert arc-based program profiling code.
      -fprofile-correction        Enable correction of flow inconsistent profile
                                  data input.
      -fprofile-dir=              Set the top-level directory for storing the
                                  profile data. The default is 'pwd'.
      -fprofile-generate          Enable common options for generating profile info
                                  for profile feedback directed optimizations.
      -fprofile-generate=         Enable common options for generating profile info
                                  for profile feedback directed optimizations, and
                                  set -fprofile-dir=.
      -fprofile-reorder-functions Enable function reordering that improves code
                                  placement.
      -fprofile-report            Report on consistency of profile.
      -fprofile-update=[single|atomic|prefer-atomic] Set the profile update method.
      -fprofile-use               Enable common options for performing profile
                                  feedback directed optimizations.
      -fprofile-use=              Enable common options for performing profile
                                  feedback directed optimizations, and set
                                  -fprofile-dir=.
      -fprofile-values            Insert code to profile values of expressions.
      -frandom-seed               This option lacks documentation.
      -frandom-seed=<string>      Make compile reproducible using <string>.
      -frecord-gcc-switches       Record gcc command line switches in the object
                                  file.
      -free                       Turn on Redundant Extensions Elimination pass.
      -fregmove                   Does nothing. Preserved for backward
                                  compatibility.
      -freport-bug                Collect and dump debug information into temporary
                                  file if ICE in C/C++ compiler occurred.
      -frerun-loop-opt            Does nothing.  Preserved for backward
                                  compatibility.
      -fsanitize-address-use-after-scope This option lacks documentation.
      -fsanitize-coverage=        Select type of coverage sanitization.
      -fsanitize-recover          This switch is deprecated; use -fsanitize-
                                  recover= instead.
      -fsanitize-recover=         After diagnosing undefined behavior attempt to
                                  continue execution.
      -fsanitize-sections=<sec1,sec2,...> Sanitize global variables in user-defined
                                  sections.
      -fsanitize-undefined-trap-on-error Use trap instead of a library function for
                                  undefined behavior sanitization.
      -fsanitize=                 Select what to sanitize.
      -fsched-verbose=<number>    Set the verbosity level of the scheduler.
      -fsched2-use-traces         Does nothing.  Preserved for backward
                                  compatibility.
      -fsee                       Does nothing.  Preserved for backward
                                  compatibility.
      -fself-test=                Run self-tests, using the given path to locate
                                  test files.
      -fsemantic-interposition    Allow interposing function (or variables) by ones
                                  with different semantics (or initializer)
                                  respectively by dynamic linker.
      -fshow-column               Show column numbers in diagnostics, when
                                  available.  Default on.
      -fsplit-stack               Generate discontiguous stack frames.
      -fstack-check               Insert stack checking code into the program. 
                                  Same as -fstack-check=specific.  Same as -fstack-
                                  check=.
      -fstack-limit               This option lacks documentation.
      -fstack-limit-register=<register> Trap if the stack goes past <register>.
      -fstack-limit-symbol=<name> Trap if the stack goes past symbol <name>.
      -fstack-usage               Output stack usage information on a per-function
                                  basis.
      -fstrength-reduce           Does nothing.  Preserved for backward
                                  compatibility.
      -fstrict-overflow           Treat signed overflow as undefined.  Negated as
                                  -fwrapv -fwrapv-pointer.
      -fsync-libcalls             Implement __atomic operations via libcalls to
                                  legacy __sync functions.
      -fsyntax-only               Check for syntax errors, then stop.
      -ftarget-help               Same as --target-help.  Use the latter option
                                  instead.
      -ftest-coverage             Create data files needed by "gcov".
      -ftime-report               Report the time taken by each compiler pass.
      -ftime-report-details       Record times taken by sub-phases separately.
      -ftls-model=[global-dynamic|local-dynamic|initial-exec|local-exec] Set the
                                  default thread-local storage code generation
                                  model.
      -ftoplevel-reorder          Reorder top level functions, variables, and asms.
      -ftrampolines               For targets that normally need trampolines for
                                  nested functions, always generate them instead of
                                  using descriptors.
      -ftree-coalesce-inlined-vars Does nothing.  Preserved for backward
                                  compatibility.
      -ftree-copyrename           Does nothing.  Preserved for backward
                                  compatibility.
      -ftree-loop-if-convert-stores Does nothing. Preserved for backward
                                  compatibility.
      -ftree-loop-linear          Enable loop nest transforms.  Same as -floop-nest-
                                  optimize.  Same as -floop-nest-optimize.
      -ftree-salias               Does nothing.  Preserved for backward
                                  compatibility.
      -ftree-store-ccp            Does nothing.  Preserved for backward
                                  compatibility.
      -ftree-store-copy-prop      Does nothing.  Preserved for backward
                                  compatibility.
      -ftree-vect-loop-version    Does nothing. Preserved for backward
                                  compatibility.
      -ftree-vectorizer-verbose=  Does nothing.  Preserved for backward
                                  compatibility.
      -funit-at-a-time            Compile whole compilation unit at a time.
      -funsafe-loop-optimizations Does nothing.  Preserved for backward
                                  compatibility.
      -fuse-ld=bfd                Use the bfd linker instead of the default linker.
      -fuse-ld=gold               Use the gold linker instead of the default linker.
      -fuse-linker-plugin         This option lacks documentation.
      -fvect-cost-model           Enables the dynamic vectorizer cost model. 
                                  Preserved for backward compatibility.  Same as
                                  -fvect-cost-model=.
      -fverbose-asm               Add extra commentary to assembler output.
      -fversion                   This option lacks documentation.
      -fvisibility=[default|internal|hidden|protected] Set the default symbol
                                  visibility.
      -fvtable-verify=            Validate vtable pointers before using them.
      -fvtv-counts                Output vtable verification counters.
      -fvtv-debug                 Output vtable verification pointer sets
                                  information.
      -fwhole-program             Perform whole program optimizations.
      -fwritable-relocated-rdata  Put relocated read-only data into .data section.
      -fzee                       Does nothing.  Preserved for backward
                                  compatibility.
      -fzero-initialized-in-bss   Put zero initialized data in the bss section.
      -g                          Generate debug information in default format.
      -gas-loc-support            Assume assembler support for (DWARF2+) .loc
                                  directives
      -gas-locview-support        Assume assembler support for view in (DWARF2+)
                                  .loc directives
      -gcoff                      Does nothing.  Preserved for backward
                                  compatibility.  Uses of this option are diagnosed.
      -gcoff1                     Does nothing.  Preserved for backward
                                  compatibility.  Uses of this option are diagnosed.
      -gcoff2                     Does nothing.  Preserved for backward
                                  compatibility.  Uses of this option are diagnosed.
      -gcoff3                     Does nothing.  Preserved for backward
                                  compatibility.  Uses of this option are diagnosed.
      -gcolumn-info               Record DW_AT_decl_column and DW_AT_call_column in
                                  DWARF.
      -gdwarf                     Generate debug information in default version of
                                  DWARF format.
      -gdwarf-                    Generate debug information in DWARF v2 (or later)
                                  format.
      -ggdb                       Generate debug information in default extended
                                  format.
      -ggnu-pubnames              Generate DWARF pubnames and pubtypes sections
                                  with GNU extensions.
      -ginline-points             Generate extended entry point information for
                                  inlined functions
      -ginternal-reset-location-views Compute locview reset points based on insn
                                  length estimates
      -gno-pubnames               Don't generate DWARF pubnames and pubtypes
                                  sections.
      -gpubnames                  Generate DWARF pubnames and pubtypes sections.
      -grecord-gcc-switches       Record gcc command line switches in DWARF
                                  DW_AT_producer.
      -gsplit-dwarf               Generate debug information in separate .dwo files.
      -gstabs                     Generate debug information in STABS format.
      -gstabs+                    Generate debug information in extended STABS
                                  format.
      -gstatement-frontiers       Emit progressive recommended breakpoint locations.
      -gstrict-dwarf              Don't emit DWARF additions beyond selected
                                  version.
      -gtoggle                    Toggle debug information generation.
      -gvariable-location-views   Augment variable location lists with progressive
                                  views.
      -gvariable-location-views=incompat5 This option lacks documentation.
      -gvms                       Generate debug information in VMS format.
      -gxcoff                     Generate debug information in XCOFF format.
      -gxcoff+                    Generate debug information in extended XCOFF
                                  format.
      -gz                         Generate compressed debug sections.
      -gz=<format>                Generate compressed debug sections in format
                                  <format>.
      -imultiarch <dir>           Set <dir> to be the multiarch include
                                  subdirectory.
      -iplugindir=<dir>           Set <dir> to be the default plugin directory.
      -p                          Enable function profiling.
      -pedantic-errors            Like -pedantic but issue them as errors.
      -quiet                      Do not display functions compiled or elapsed time.
      -version                    Display the compiler's version.

## 🐤🐥 as options

    Usage: as [option...] [asmfile...]
    Options:
      -a[sub-option...]   turn on listings
                              Sub-options [default hls]:
                              c      omit false conditionals
                              d      omit debugging directives
                              g      include general info
                              h      include high-level source
                              l      include assembly
                              m      include macro expansions
                              n      omit forms processing
                              s      include symbols
                              =FILE  list to FILE (must be last sub-option)
      --alternate             initially turn on alternate macro syntax
      --compress-debug-sections[={none|zlib|zlib-gnu|zlib-gabi}]
                              compress DWARF debug sections using zlib
      --nocompress-debug-sections
                              don't compress DWARF debug sections [default]
      -D                      produce assembler debugging messages
      --debug-prefix-map OLD=NEW
                              map OLD to NEW in debug information
      --defsym SYM=VAL        define symbol SYM to given value
      -f                      skip whitespace and comment preprocessing
      -g --gen-debug          generate debugging information
      --gstabs                generate STABS debugging information
      --gstabs+               generate STABS debug info with GNU extensions
      --gdwarf-2              generate DWARF2 debugging information
      --gdwarf-sections       generate per-function section names for DWARF line information
      --hash-size=<value>     set the hash table size close to <value>
      --help                  show this message and exit
      --target-help           show target specific options
      -I DIR                  add DIR to search list for .include directives
      -J                      don't warn about signed overflow
      -K                      warn when differences altered for long displacements
      -L,--keep-locals        keep local symbols (e.g. starting with `L')
      -M,--mri                assemble in MRI compatibility mode
      --MD FILE               write dependency information in FILE (default none)
      -nocpp                  ignored
      -no-pad-sections        do not pad the end of sections to alignment boundaries
      -o OBJFILE              name the object-file output OBJFILE (default a.out)
      -R                      fold data section into text section
      --reduce-memory-overheads 
                              prefer smaller memory use at the cost of longer
                              assembly times
      --statistics            print various measured statistics from execution
      --strip-local-absolute  strip local absolute symbols
      --traditional-format    Use same format as native assembler when possible
      --version               print assembler version number and exit
      -W  --no-warn           suppress warnings
      --warn                  don't suppress warnings
      --fatal-warnings        treat warnings as errors
      -w                      ignored
      -X                      ignored
      -Z                      generate object file even after errors
      --listing-lhs-width     set the width in words of the output data column of
                              the listing
      --listing-lhs-width2    set the width in words of the continuation lines
                              of the output data column; ignored if smaller than
                              the width of the first line
      --listing-rhs-width     set the max width in characters of the lines from
                              the source file
      --listing-cont-lines    set the maximum number of continuation lines used
                              for the output data column of the listing
      @FILE                   read options from FILE
      -n                      Do not optimize code alignment
      -q                      quieten some warnings
      --32/--64/--x32         generate 32bit/64bit/x32 code
      --divide                ignored
      -march=CPU[,+EXTENSION...]
                              generate code for CPU and EXTENSION, CPU is one of:
                               generic32, generic64, i386, i486, i586, i686,
                               pentium, pentiumpro, pentiumii, pentiumiii, pentium4,
                               prescott, nocona, core, core2, corei7, l1om, k1om,
                               iamcu, k6, k6_2, athlon, opteron, k8, amdfam10,
                               bdver1, bdver2, bdver3, bdver4, znver1, btver1,
                               btver2
                              EXTENSION is combination of:
                               8087, 287, 387, 687, mmx, sse, sse2, sse3, ssse3,
                               sse4.1, sse4.2, sse4, avx, avx2, avx512f, avx512cd,
                               avx512er, avx512pf, avx512dq, avx512bw, avx512vl,
                               vmx, vmfunc, smx, xsave, xsaveopt, xsavec, xsaves,
                               aes, pclmul, fsgsbase, rdrnd, f16c, bmi2, fma, fma4,
                               xop, lwp, movbe, cx16, ept, lzcnt, hle, rtm, invpcid,
                               clflush, nop, syscall, rdtscp, 3dnow, 3dnowa,
                               padlock, svme, sse4a, abm, bmi, tbm, adx, rdseed,
                               prfchw, smap, mpx, sha, clflushopt, prefetchwt1, se1,
                               clwb, avx512ifma, avx512vbmi, avx512_4fmaps,
                               avx512_4vnniw, avx512_vpopcntdq, avx512_vbmi2,
                               avx512_vnni, avx512_bitalg, clzero, mwaitx, ospke,
                               rdpid, ptwrite, cet, gfni, vaes, vpclmulqdq, no87,
                               no287, no387, no687, nommx, nosse, nosse2, nosse3,
                               nossse3, nosse4.1, nosse4.2, nosse4, noavx, noavx2,
                               noavx512f, noavx512cd, noavx512er, noavx512pf,
                               noavx512dq, noavx512bw, noavx512vl, noavx512ifma,
                               noavx512vbmi, noavx512_4fmaps, noavx512_4vnniw,
                               noavx512_vpopcntdq, noavx512_vbmi2, noavx512_vnni,
                               noavx512_bitalg
      -mtune=CPU              optimize for CPU, CPU is one of:
                               generic32, generic64, i8086, i186, i286, i386, i486,
                               i586, i686, pentium, pentiumpro, pentiumii,
                               pentiumiii, pentium4, prescott, nocona, core, core2,
                               corei7, l1om, k1om, iamcu, k6, k6_2, athlon, opteron,
                               k8, amdfam10, bdver1, bdver2, bdver3, bdver4, znver1,
                               btver1, btver2
      -msse2avx               encode SSE instructions with VEX prefix
      -msse-check=[none|error|warning]
                              check SSE instructions
      -moperand-check=[none|error|warning]
                              check operand combinations for validity
      -mavxscalar=[128|256]   encode scalar AVX instructions with specific vector
                               length
      -mevexlig=[128|256|512] encode scalar EVEX instructions with specific vector
                               length
      -mevexwig=[0|1]         encode EVEX instructions with specific EVEX.W value
                               for EVEX.W bit ignored instructions
      -mevexrcig=[rne|rd|ru|rz]
                              encode EVEX instructions with specific EVEX.RC value
                               for SAE-only ignored instructions
      -mmnemonic=[att|intel]  use AT&T/Intel mnemonic
      -msyntax=[att|intel]    use AT&T/Intel syntax
      -mindex-reg             support pseudo index registers
      -mnaked-reg             don't require `%' prefix for registers
      -mold-gcc               support old (<= 2.8.1) versions of gcc
      -madd-bnd-prefix        add BND prefix for all valid branches
      -mshared                disable branch optimization for shared code
      -mbig-obj               generate big object files
      -momit-lock-prefix=[no|yes]
                              strip all lock prefixes
      -mfence-as-lock-add=[no|yes]
                              encode lfence, mfence and sfence as
                               lock addl $0x0, (%{re}sp)
      -mrelax-relocations=[no|yes]
                              generate relax relocations
      -mamd64                 accept only AMD64 ISA
      -mintel64               accept only Intel64 ISA

    Report bugs to <http://www.sourceware.org/bugzilla/>
    Usage: collect2 [options]
     Wrap linker and generate constructor code if needed.
     Options:
      -debug          Enable debug output
      --help          Display this information
      -v, --version   Display this program's version number

    Overview: http://gcc.gnu.org/onlinedocs/gccint/Collect2.html
    Report bugs: <http://www.cnblogs.com/nlsoft>

## 🐤🐥 ld options

    Usage: ld.exe [options] file...
    Options:
      -a KEYWORD                  Shared library control for HP/UX compatibility
      -A ARCH, --architecture ARCH
                                  Set architecture
      -b TARGET, --format TARGET  Specify target for following input files
      -c FILE, --mri-script FILE  Read MRI format linker script
      -d, -dc, -dp                Force common symbols to be defined
      --force-group-allocation    Force group members out of groups
      -e ADDRESS, --entry ADDRESS Set start address
      -E, --export-dynamic        Export all dynamic symbols
      --no-export-dynamic         Undo the effect of --export-dynamic
      -EB                         Link big-endian objects
      -EL                         Link little-endian objects
      -f SHLIB, --auxiliary SHLIB Auxiliary filter for shared object symbol table
      -F SHLIB, --filter SHLIB    Filter for shared object symbol table
      -g                          Ignored
      -G SIZE, --gpsize SIZE      Small data size (if no size, same as --shared)
      -h FILENAME, -soname FILENAME
                                  Set internal name of shared library
      -I PROGRAM, --dynamic-linker PROGRAM
                                  Set PROGRAM as the dynamic linker to use
      --no-dynamic-linker         Produce an executable with no program interpreter header
      -l LIBNAME, --library LIBNAME
                                  Search for library LIBNAME
      -L DIRECTORY, --library-path DIRECTORY
                                  Add DIRECTORY to library search path
      --sysroot=<DIRECTORY>       Override the default sysroot location
      -m EMULATION                Set emulation
      -M, --print-map             Print map file on standard output
      -n, --nmagic                Do not page align data
      -N, --omagic                Do not page align data, do not make text readonly
      --no-omagic                 Page align data, make text readonly
      -o FILE, --output FILE      Set output file name
      -O                          Optimize output file
      --out-implib FILE           Generate import library
      -plugin PLUGIN              Load named plugin
      -plugin-opt ARG             Send arg to last-loaded plugin
      -flto                       Ignored for GCC LTO option compatibility
      -flto-partition=            Ignored for GCC LTO option compatibility
      -fuse-ld=                   Ignored for GCC linker option compatibility
      --map-whole-files           Ignored for gold option compatibility
      --no-map-whole-files        Ignored for gold option compatibility
      -Qy                         Ignored for SVR4 compatibility
      -q, --emit-relocs           Generate relocations in final output
      -r, -i, --relocatable       Generate relocatable output
      -R FILE, --just-symbols FILE
                                  Just link symbols (if directory, same as --rpath)
      -s, --strip-all             Strip all symbols
      -S, --strip-debug           Strip debugging symbols
      --strip-discarded           Strip symbols in discarded sections
      --no-strip-discarded        Do not strip symbols in discarded sections
      -t, --trace                 Trace file opens
      -T FILE, --script FILE      Read linker script
      --default-script FILE, -dT  Read default linker script
      -u SYMBOL, --undefined SYMBOL
                                  Start with undefined reference to SYMBOL
      --require-defined SYMBOL    Require SYMBOL be defined in the final output
      --unique [=SECTION]         Don't merge input [SECTION | orphan] sections
      -Ur                         Build global constructor/destructor tables
      -v, --version               Print version information
      -V                          Print version and emulation information
      -x, --discard-all           Discard all local symbols
      -X, --discard-locals        Discard temporary local symbols (default)
      --discard-none              Don't discard any local symbols
      -y SYMBOL, --trace-symbol SYMBOL
                                  Trace mentions of SYMBOL
      -Y PATH                     Default search path for Solaris compatibility
      -(, --start-group           Start a group
      -), --end-group             End a group
      --accept-unknown-input-arch Accept input files whose architecture cannot be determined
      --no-accept-unknown-input-arch
                                  Reject input files whose architecture is unknown
      --as-needed                 Only set DT_NEEDED for following dynamic libs if used
      --no-as-needed              Always set DT_NEEDED for dynamic libraries mentioned on
                                    the command line
      -assert KEYWORD             Ignored for SunOS compatibility
      -Bdynamic, -dy, -call_shared
                                  Link against shared libraries
      -Bstatic, -dn, -non_shared, -static
                                  Do not link against shared libraries
      -Bsymbolic                  Bind global references locally
      -Bsymbolic-functions        Bind global function references locally
      --check-sections            Check section addresses for overlaps (default)
      --no-check-sections         Do not check section addresses for overlaps
      --copy-dt-needed-entries    Copy DT_NEEDED links mentioned inside DSOs that follow
      --no-copy-dt-needed-entries Do not copy DT_NEEDED links mentioned inside DSOs that follow
      --cref                      Output cross reference table
      --defsym SYMBOL=EXPRESSION  Define a symbol
      --demangle [=STYLE]         Demangle symbol names [using STYLE]
      --embedded-relocs           Generate embedded relocs
      --fatal-warnings            Treat warnings as errors
      --no-fatal-warnings         Do not treat warnings as errors (default)
      -fini SYMBOL                Call SYMBOL at unload-time
      --force-exe-suffix          Force generation of file with .exe suffix
      --gc-sections               Remove unused sections (on some targets)
      --no-gc-sections            Don't remove unused sections (default)
      --print-gc-sections         List removed unused sections on stderr
      --no-print-gc-sections      Do not list removed unused sections
      --gc-keep-exported          Keep exported symbols when removing unused sections
      --hash-size=<NUMBER>        Set default hash table size close to <NUMBER>
      --help                      Print option help
      -init SYMBOL                Call SYMBOL at load-time
      -Map FILE                   Write a map file
      --no-define-common          Do not define Common storage
      --no-demangle               Do not demangle symbol names
      --no-keep-memory            Use less memory and more disk I/O
      --no-undefined              Do not allow unresolved references in object files
      --allow-shlib-undefined     Allow unresolved references in shared libraries
      --no-allow-shlib-undefined  Do not allow unresolved references in shared libs
      --allow-multiple-definition Allow multiple definitions
      --no-undefined-version      Disallow undefined version
      --default-symver            Create default symbol version
      --default-imported-symver   Create default symbol version for imported symbols
      --no-warn-mismatch          Don't warn about mismatched input files
      --no-warn-search-mismatch   Don't warn on finding an incompatible library
      --no-whole-archive          Turn off --whole-archive
      --noinhibit-exec            Create an output file even if errors occur
      -nostdlib                   Only use library directories specified on
                                    the command line
      --oformat TARGET            Specify target of output file
      --print-output-format       Print default output format
      --print-sysroot             Print current sysroot
      -qmagic                     Ignored for Linux compatibility
      --reduce-memory-overheads   Reduce memory overheads, possibly taking much longer
      --relax                     Reduce code size by using target specific optimizations
      --no-relax                  Do not use relaxation techniques to reduce code size
      --retain-symbols-file FILE  Keep only symbols listed in FILE
      -rpath PATH                 Set runtime shared library search path
      -rpath-link PATH            Set link time shared library search path
      -shared, -Bshareable        Create a shared library
      -pie, --pic-executable      Create a position independent executable
      --sort-common [=ascending|descending]
                                  Sort common symbols by alignment [in specified order]
      --sort-section name|alignment
                                  Sort sections by name or maximum alignment
      --spare-dynamic-tags COUNT  How many tags to reserve in .dynamic section
      --split-by-file [=SIZE]     Split output sections every SIZE octets
      --split-by-reloc [=COUNT]   Split output sections every COUNT relocs
      --stats                     Print memory usage statistics
      --target-help               Display target specific options
      --task-link SYMBOL          Do task level linking
      --traditional-format        Use same format as native linker
      --section-start SECTION=ADDRESS
                                  Set address of named section
      -Tbss ADDRESS               Set address of .bss section
      -Tdata ADDRESS              Set address of .data section
      -Ttext ADDRESS              Set address of .text section
      -Ttext-segment ADDRESS      Set address of text segment
      -Trodata-segment ADDRESS    Set address of rodata segment
      -Tldata-segment ADDRESS     Set address of ldata segment
      --unresolved-symbols=<method>
                                  How to handle unresolved symbols.  <method> is:
                                    ignore-all, report-all, ignore-in-object-files,
                                    ignore-in-shared-libs
      --verbose [=NUMBER]         Output lots of information during link
      --version-script FILE       Read version information script
      --version-exports-section SYMBOL
                                  Take export symbols list from .exports, using
                                    SYMBOL as the version.
      --dynamic-list-data         Add data symbols to dynamic list
      --dynamic-list-cpp-new      Use C++ operator new/delete dynamic list
      --dynamic-list-cpp-typeinfo Use C++ typeinfo dynamic list
      --dynamic-list FILE         Read dynamic list
      --warn-common               Warn about duplicate common symbols
      --warn-constructors         Warn if global constructors/destructors are seen
      --warn-multiple-gp          Warn if the multiple GP values are used
      --warn-once                 Warn only once per undefined symbol
      --warn-section-align        Warn if start of section changes due to alignment
      --warn-shared-textrel       Warn if shared object has DT_TEXTREL
      --warn-alternate-em         Warn if an object has alternate ELF machine code
      --warn-unresolved-symbols   Report unresolved symbols as warnings
      --error-unresolved-symbols  Report unresolved symbols as errors
      --whole-archive             Include all objects from following archives
      --wrap SYMBOL               Use wrapper functions for SYMBOL
      --ignore-unresolved-symbol SYMBOL
                                  Unresolved SYMBOL will not cause an error or warning
      --push-state                Push state of flags governing input file handling
      --pop-state                 Pop state of flags governing input file handling
      --print-memory-usage        Report target memory usage
      --orphan-handling =MODE     Control how orphan sections are handled.
      @FILE                       Read options from FILE
    ld.exe: supported targets: pe-i386 pei-i386 elf32-i386 elf32-iamcu elf32-little elf32-big pe-x86-64 pei-x86-64 pe-bigobj-x86-64 elf64-x86-64 elf64-l1om elf64-k1om elf64-little elf64-big plugin srec symbolsrec verilog tekhex binary ihex
    ld.exe: supported emulations: i386pe i386pep
    ld.exe: emulation specific options:
    i386pe: 
      --base_file <basefile>             Generate a base file for relocatable DLLs
      --dll                              Set image base to the default for DLLs
      --file-alignment <size>            Set file alignment
      --heap <size>                      Set initial size of the heap
      --image-base <address>             Set start address of the executable
      --major-image-version <number>     Set version number of the executable
      --major-os-version <number>        Set minimum required OS version
      --major-subsystem-version <number> Set minimum required OS subsystem version
      --minor-image-version <number>     Set revision number of the executable
      --minor-os-version <number>        Set minimum required OS revision
      --minor-subsystem-version <number> Set minimum required OS subsystem revision
      --section-alignment <size>         Set section alignment
      --stack <size>                     Set size of the initial stack
      --subsystem <name>[:<version>]     Set required OS subsystem [& version]
      --support-old-code                 Support interworking with old code
      --[no-]leading-underscore          Set explicit symbol underscore prefix mode
      --thumb-entry=<symbol>             Set the entry point to be Thumb <symbol>
      --[no-]insert-timestamp            Use a real timestamp rather than zero (default).
                                         This makes binaries non-deterministic
      --add-stdcall-alias                Export symbols with and without @nn
      --disable-stdcall-fixup            Don't link _sym to _sym@nn
      --enable-stdcall-fixup             Link _sym to _sym@nn without warnings
      --exclude-symbols sym,sym,...      Exclude symbols from automatic export
      --exclude-all-symbols              Exclude all symbols from automatic export
      --exclude-libs lib,lib,...         Exclude libraries from automatic export
      --exclude-modules-for-implib mod,mod,...
                                         Exclude objects, archive members from auto
                                         export, place into import library instead.
      --export-all-symbols               Automatically export all globals to DLL
      --kill-at                          Remove @nn from exported symbols
      --output-def <file>                Generate a .DEF file for the built DLL
      --warn-duplicate-exports           Warn about duplicate exports
      --compat-implib                    Create backward compatible import libs;
                                           create __imp_<SYMBOL> as well.
      --enable-auto-image-base[=<address>] Automatically choose image base for DLLs
                                           (optionally starting with address) unless
                                           specifically set with --image-base
      --disable-auto-image-base          Do not auto-choose image base. (default)
      --dll-search-prefix=<string>       When linking dynamically to a dll without
                                           an importlib, use <string><basename>.dll
                                           in preference to lib<basename>.dll 
      --enable-auto-import               Do sophisticated linking of _sym to
                                           __imp_sym for DATA references
      --disable-auto-import              Do not auto-import DATA items from DLLs
      --enable-runtime-pseudo-reloc      Work around auto-import limitations by
                                           adding pseudo-relocations resolved at
                                           runtime.
      --disable-runtime-pseudo-reloc     Do not add runtime pseudo-relocations for
                                           auto-imported DATA.
      --enable-extra-pe-debug            Enable verbose debug output when building
                                           or linking to DLLs (esp. auto-import)
      --large-address-aware              Executable supports virtual addresses
                                           greater than 2 gigabytes
      --disable-large-address-aware      Executable does not support virtual
                                           addresses greater than 2 gigabytes
      --enable-long-section-names        Use long COFF section names even in
                                           executable image files
      --disable-long-section-names       Never use long COFF section names, even
                                           in object files
      --dynamicbase          Image base address may be relocated using
                           address space layout randomization (ASLR)
      --forceinteg       Code integrity checks are enforced
      --nxcompat         Image is compatible with data execution prevention
      --no-isolation         Image understands isolation but do not isolate the image
      --no-seh           Image does not use SEH. No SE handler may
                           be called in this image
      --no-bind          Do not bind this image
      --wdmdriver        Driver uses the WDM model
      --tsaware                  Image is Terminal Server aware
      --build-id[=STYLE]         Generate build ID
    i386pep: 
      --base_file <basefile>             Generate a base file for relocatable DLLs
      --dll                              Set image base to the default for DLLs
      --file-alignment <size>            Set file alignment
      --heap <size>                      Set initial size of the heap
      --image-base <address>             Set start address of the executable
      --major-image-version <number>     Set version number of the executable
      --major-os-version <number>        Set minimum required OS version
      --major-subsystem-version <number> Set minimum required OS subsystem version
      --minor-image-version <number>     Set revision number of the executable
      --minor-os-version <number>        Set minimum required OS revision
      --minor-subsystem-version <number> Set minimum required OS subsystem revision
      --section-alignment <size>         Set section alignment
      --stack <size>                     Set size of the initial stack
      --subsystem <name>[:<version>]     Set required OS subsystem [& version]
      --support-old-code                 Support interworking with old code
      --[no-]leading-underscore          Set explicit symbol underscore prefix mode
      --[no-]insert-timestamp            Use a real timestamp rather than zero. (default)
                                         This makes binaries non-deterministic
      --add-stdcall-alias                Export symbols with and without @nn
      --disable-stdcall-fixup            Don't link _sym to _sym@nn
      --enable-stdcall-fixup             Link _sym to _sym@nn without warnings
      --exclude-symbols sym,sym,...      Exclude symbols from automatic export
      --exclude-all-symbols              Exclude all symbols from automatic export
      --exclude-libs lib,lib,...         Exclude libraries from automatic export
      --exclude-modules-for-implib mod,mod,...
                                         Exclude objects, archive members from auto
                                         export, place into import library instead.
      --export-all-symbols               Automatically export all globals to DLL
      --kill-at                          Remove @nn from exported symbols
      --output-def <file>                Generate a .DEF file for the built DLL
      --warn-duplicate-exports           Warn about duplicate exports.
      --compat-implib                    Create backward compatible import libs;
                                           create __imp_<SYMBOL> as well.
      --enable-auto-image-base           Automatically choose image base for DLLs
                                           unless user specifies one
      --disable-auto-image-base          Do not auto-choose image base. (default)
      --dll-search-prefix=<string>       When linking dynamically to a dll without
                                           an importlib, use <string><basename>.dll
                                           in preference to lib<basename>.dll 
      --enable-auto-import               Do sophisticated linking of _sym to
                                           __imp_sym for DATA references
      --disable-auto-import              Do not auto-import DATA items from DLLs
      --enable-runtime-pseudo-reloc      Work around auto-import limitations by
                                           adding pseudo-relocations resolved at
                                           runtime.
      --disable-runtime-pseudo-reloc     Do not add runtime pseudo-relocations for
                                           auto-imported DATA.
      --enable-extra-pep-debug            Enable verbose debug output when building
                                           or linking to DLLs (esp. auto-import)
      --enable-long-section-names        Use long COFF section names even in
                                           executable image files
      --disable-long-section-names       Never use long COFF section names, even
                                           in object files
      --high-entropy-va                  Image is compatible with 64-bit address space
                                           layout randomization (ASLR)
      --dynamicbase          Image base address may be relocated using
                           address space layout randomization (ASLR)
      --forceinteg       Code integrity checks are enforced
      --nxcompat         Image is compatible with data execution prevention
      --no-isolation         Image understands isolation but do not isolate the image
      --no-seh           Image does not use SEH. No SE handler may
                           be called in this image
      --no-bind          Do not bind this image
      --wdmdriver        Driver uses the WDM model
      --tsaware                  Image is Terminal Server aware
      --build-id[=STYLE]         Generate build ID

    Report bugs to <http://www.sourceware.org/bugzilla/>

    For bug reporting instructions, please see:
    <http://www.cnblogs.com/nlsoft>


## 🐤🐥 paltform relialy preprocessor
- https://stackoverflow.com/questions/5919996/how-to-detect-reliably-mac-os-x-ios-linux-windows-in-c-preprocessor

平台依赖预处理示例：

    #include <iostream>

    #ifdef _WIN32
        //define something for Windows (32-bit and 64-bit, this part is common)
        #ifdef _WIN64
            #define msg "for Windows (64-bit only)"
        #else
            #define msg "for Windows (32-bit only)"
        #endif
    #elif __APPLE__
        #include "TargetConditionals.h"
        #if TARGET_IPHONE_SIMULATOR
           #define msg "for iOS Simulator"
        #elif TARGET_OS_IPHONE
           #define msg "for iOS device"
        #elif TARGET_OS_MAC
           #define msg "for Other kinds of Mac OS"
        #else
           #define msg "= "Unknown Apple platform""
         #endif
    #elif __ANDROID__
        #define msg "for android"
    #elif __linux__
        #define msg "for linux"
    #elif __unix__ // all unices not caught above
        #define msg "for Unix"
    #elif defined(_POSIX_VERSION)
        #define msg "for POSIX"
    #else
        #define msg "Unknown compiler"
    #endif

    int main()
    {
         std::cout << msg << std::endl;
    }

可以参考 Qt 的 qglobal.h 头文件。


# 🐣 DLL with MinGW
- [Building Windows DLLs with MinGW](https://www.transmissionzero.co.uk/computing/building-dlls-with-mingw/)
- [MinGW-w64 GCC for Windows](https://zhuanlan.zhihu.com/p/76613134)
- [Advanced MinGW DLL Topics](https://www.transmissionzero.co.uk/computing/advanced-mingw-dll-topics/)
- [A.1 — Static and dynamic libraries](https://www.learncpp.com/cpp-tutorial/a1-static-and-dynamic-libraries/)
- [Dynamic linking best practices(https://begriffs.com/posts/2021-07-04-shared-libraries.html)

动态库和静态库在不同平台下的几点差别：

- static library 也称 archive，Linux 和 Windows 系统分别使用 .a 和 .lib 文件。
- dynamic library 也称为 shared library，Linux 和 Windows 系统上分别为 .so 和 .dll 文件；
- 因为动态库需要在编译期向程序导入符号信息，又需要一个导入库 import library：
    - Windows 的导入库使用一个小型静态库 (.lib)记录这些信息。
    - Linux 系统上，动态库和导入库都是 .so 文件。

在编译动态链接的程序时，要区别动态链接库 DLL 和导入库 LIB 的概念，程序要完成编译就需要相关的
导入库 lib 文件，导入库只记录了在动态链接库导出的符号，编译得到程序要运行就需要导入库关联的
DLL 文件。

在编译静态链接的程序时，只需要导入库，并且静态导入库 lib 文件包含了符号定义和实现代码，程序和
静态库链接后运行就不需要依赖 DLL 文件。

在 Windows 下用 MinGW 编译 DLL：

    /* add_basic.c
       Demonstrates creating a DLL with an exported function, the inflexible way.
    */

    __declspec(dllexport) int __cdecl Add(int a, int b)
    {
      return (a + b);
    }

只需要添加 `-shared` 链接选项：

    >gcc -c -o add_basic.o add_basic.c
    >gcc -o add_basic.dll -s -shared add_basic.o -Wl,--subsystem,windows

以上分步演示了编译和链接两个过程，但是 GCC 可以一步执行：

    gcc -o add_basic.dll -s -shared add_basic.c -Wl,--subsystem,windows-

其中 `-Wl,--subsystem,windows` 不是必要的参数，因为不是编译窗口程序。注意 `-s` 选项，
它清理导出的 DLL 符号，通过在发布 DLL 时使用。

对于动态链接库，用户在程序中使用时，为了程序能正确链接，就需要`导入库` Import Library，
即链接程序中使用的 `.lib` 文件。

下面，试着写一个程序来调用动态链接库的 Add(a, b) 方法：

    /* addtest_basic.c
       Demonstrates using the function imported from the DLL, the inelegant way.
    */

    #include <stdlib.h>
    #include <stdio.h>

    /* Declare imported function so that we can actually use it. */
    __declspec(dllimport) int __cdecl Add(int a, int b);

    int main(int argc, char** argv)
    {
      printf("%d\n", Add(6, 23));

      return EXIT_SUCCESS;
    }

现在，执行编译链接：

    >gcc -c -o addtest_basic.o addtest_basic.c
    >gcc -o addtest_basic.exe -s addtest_basic.o -L. -ladd_basic
    >addtest_basic.exe

其它 DLL 使用的高级知识点：

- Displaying functions exported from a DLL.
- The DllMain function.
- Using a module definition file.
- Exporting undecorated stdcall functions.
- Exporting C++ functions and variables from a DLL.
- Creating JNI DLLs.
- P/Invoking MinGW DLLs in .NET
- Setting the DLL base address.
- Loading and unloading DLLs at runtime.


## 🐤🐥 Dll Information

使用 GNU binutils objdump 查看 DLL 导出函数符号：

    >objdump -p AddLib.dll
    
    There is an export table in .edata at 0x6da46000

    The Export Tables (interpreted .edata section contents)

    Export Flags                    0
    Time/Date stamp                 4da9a500
    Major/Minor                     0/0
    Name                            00006046 AddLib.dll
    Ordinal Base                    1
    Number in:
            Export Address Table            00000003
            [Name Pointer/Ordinal] Table    00000003
    Table Addresses
            Export Address Table            00006028
            Name Pointer Table              00006034
            Ordinal Table                   00006040

    Export Address Table -- Ordinal Base 1
            [   0] +base[   1] 1280 Export RVA
            [   1] +base[   2] 2004 Export RVA
            [   2] +base[   3] 2000 Export RVA

    [Ordinal/Name Pointer] Table
            [   0] Add
            [   1] bar
            [   2] foo

    >dumpbin -exports AddLib.dll
    Microsoft (R) COFF/PE Dumper Version 9.00.30729.01
    Copyright (C) Microsoft Corporation.  All rights reserved.


    Dump of file AddLib.dll

    File Type: DLL

      Section contains the following exports for AddLib.dll

        00000000 characteristics
        4DA9A500 time date stamp Sat Apr 16 15:17:36 2011
            0.00 version
               1 ordinal base
               3 number of functions
               3 number of names

        ordinal hint RVA      name

              1    0 00001280 Add
              2    1 00002004 bar
              3    2 00002000 foo

      Summary

            1000 .CRT
            1000 .bss
            1000 .data
            1000 .edata
            1000 .eh_fram
            1000 .idata
            1000 .rdata
            1000 .reloc
            1000 .rsrc
            1000 .text
            1000 .tls

## 🐤🐥 The DllMain function.

DllMain 是 DLL 入口函数，在加载或卸载时被系统调用：

    #include <windows.h>

    BOOL WINAPI DllMain(HINSTANCE hinstDLL, DWORD fdwReason, LPVOID lpvReserved)
    {
      switch (fdwReason)
      {
        case DLL_PROCESS_ATTACH:
          /* Code path executed when DLL is loaded into a process's address space. */
          break;

        case DLL_THREAD_ATTACH:
          /* Code path executed when a new thread is created within the process. */
          break;

        case DLL_THREAD_DETACH:
          /* Code path executed when a thread within the process has exited *cleanly*. */
          break;

        case DLL_PROCESS_DETACH:
          /* Code path executed when DLL is unloaded from a process's address space. */
          break;
      }

      return TRUE;
    }

## 🐤🐥 Using a module definition file.
- [Import library & export file](https://docs.microsoft.com/en-us/cpp/build/reference/building-an-import-library-and-export-file?view=vs-2019)

除了 `__declspec(dllexport)` 标记一个导出函数，更方便的做法是使用模块定义文件 
module definition file，它可以定义 DLL 中导出的变量、函数等等，如下 `AddLib.def`：

    LIBRARY AddLib.dll
    EXPORTS
      Add
      foo
      bar

对应的 C 文件头：

    /* Define calling convention in one place, for convenience. */
    #define ADDCALL __cdecl

    /* Make sure functions are exported with C linkage under C++ compilers. */
    #ifdef __cplusplus
    extern "C"
    {
    #endif

    /* Declare our Add function using the above definitions. */
    int ADDCALL Add(int a, int b);

    /* Exported variables. */
    extern int foo;
    extern int bar;

    #ifdef __cplusplus
    } // __cplusplus defined.
    #endif

头文件中的导出变量、函数依然使用了 extern 关键字，确保它们在使用中能正确链接，函数实现代码如下：

    #include "add.h"

    int ADDCALL Add(int a, int b)
    {
      return (a + b);
    }

    /* Assign value to exported variables. */
    int foo = 7;
    int bar = 41;

在编译链接命令中使用模块定义文件 `AddLib.def`：

    >gcc -O3 -std=c99 -Wall -c add.c -o add.o
    >gcc -o AddLib.dll add.o AddLib.def -shared -s -Wl,--subsystem,windows,--out-implib,libaddlib.a


## 🐤🐥 Exporting Undecorated stdcall Functions

导出函数意味着 stdcall 调用转换，即 `int Add(int, int)` 这样的函数签名会导出变成 `Add@8`
类似格式，`@` 符号后面跟着的数字表示参数占据的空间，而 Visual C++ 还会使用其它前缀，
如下划线 `_Add@8`。正因为 MSVC 和 MinGW 不同编译器之间的转换不一致，当开发出来的 DLL 被
多用户使用时，他们使用什么编译器就受到约束了。

解决办法就是避免导出时，编译器对函数的重命名，传递 `--kill-at` 选项给链接程序，同时，需要
重建导入库 import library，否则用户不能正确链接特殊处理过的导出函数。此时，`--out-implib`
创建的导入库无效，需要使用 `dlltool.exe` 工具，还有模块定义文件，它包含了函数正确的导出名字：

    >gcc -o AddLib.dll add.o -shared -s -Wl,--subsystem,windows,--output-def,AddLib.def
    >gcc -o AddLib.dll add.o -shared -s -Wl,--subsystem,windows,--kill-at
    >dlltool --kill-at -d AddLib.def -D AddLib.dll -l libaddlib.a

上面的命令首先会创建修饰过函数名称的 DLL，使用了 `--output-def,AddLib.def` 链接参数生成
模块定义文件，它包含了修饰过的函数名称。

第二步还是创建 DLL，但是传入了 `--kill-at` 链接参数，导出的函数名是未修饰过的，这一步不能
创建模块定义文件。

最后，基于模块定义文件创建导入库，如果你关心不同编译器的表现，这一步会很有趣。事实上，Win32 API
函数都是以这种方式导出的，没有任何修饰。

## 🐤🐥 Exporting C++ functions and variables

在 C++ DLL 的导出符号中，不同编译器之间是不通用的，甚至同一个编译器不同版本也不通用。
因为 C++ 的复杂性，要处理异常、虚函数实现、或 STL 类型的不同内存模型等等。为了明确不兼容，
编译器还会使用名称变形 `name mangling` 来处理导出符号。

导出全局符号，函数和变量，C/C++ 的做法都是一样的，不同的是 C 语言导出全局变量时，可以作为
C++ 对象实例导出，导出函数时可以重载。还可以导出 C++ 的类对象，这个导出的类对象所有静态方法
和成员不区分 public、protected、private 访问修饰。

示例 Point 头文件：

    #ifndef POINT_HPP
    #define POINT_HPP

    #ifdef POINT_EXPORTS
      #define POINTAPI __declspec(dllexport)
    #else
      #define POINTAPI __declspec(dllimport)
    #endif

    #include <ostream>

    using std::ostream;

    class POINTAPI Point
    {
      public:
        // Constructors.
        Point();
        Point(int x, int y);

        // Getters and setters.
        int getX() const;
        int getY() const;
        void setX(int x);
        void setY(int y);

        // Friend the overloaded operators, so they can access private Point data.
        friend Point operator+(const Point& lhs, const Point& rhs);
        friend ostream& operator<<(ostream& os, const Point& pt);

      private:
        int x, y;
    };

    // Overloaded operators.
    POINTAPI Point operator+(const Point& lhs, const Point& rhs);
    POINTAPI ostream& operator<<(ostream& os, const Point& pt);

    extern POINTAPI Point foo;
    extern POINTAPI Point bar;

    #endif

实现代码：

    #include "point.hpp"

    Point::Point()
      : x(0), y(0)
    { }

    Point::Point(int x, int y)
      : x(x), y(y)
    { }

    int Point::getX() const { return this->x; }

    int Point::getY() const { return this->y; }

    void Point::setX(int x) { this->x = x; }

    void Point::setY(int y) { this->y = y; }

    Point operator+(const Point& lhs, const Point& rhs)
    {
      return Point(lhs.x + rhs.x, lhs.y + rhs.y);
    }

    ostream& operator<<(ostream& os, const Point& pt)
    {
      return os << "(" << pt.x << ", " << pt.y << ")";
    }

    Point foo(9, 6);
    Point bar(3, 19);

编译生成 C++ 代码的 DLL，和 C 语言的 DLL 没有区别：

    >g++ -c -o point.o point.cpp -D POINT_EXPORTS
    >g++ -o point.dll point.o -s -shared -Wl,--subsystem,windows,--out-implib,libpoint.a 

或者生成静态库，链接成无动态链接依赖的程序：

    >gcc -c src\*.cpp -Iinclude
    >ar rcs libpoint.a *.o
    >gcc pointTest.cpp -I include/ -L lib/ -l point -o testPoint.exe


打包归档命令 ar 将所有 .o 文件打包为静态库，r 将文件插入静态库中，c 创建静态库，不管库是否存在，
s 写入一个目标文件索引到库中，或者更新一个存在的目标文件索引。

这时创建了导入库 libpoint.a，这是可选的，因为除了链接程序，还有其它方法调用 DLL 中的 API。

使用 `objdump -p` 命令查看导出符号，可以我发现类似 `_ZN5Point4setXEi`、`_ZlsRSoRK5Point`
这样的符号。使用 c++filt 这个 Demangle 工具可以将导出的 C++ 符号还原：

    >c++filt -n _ZlsRSoRK5Point
    operator<<(std::basic_ostream<char, std::char_traits<char> >&, Point const&)

    >c++filt -n _ZN5Point4setXEi
    Point::setX(int)

    >c++filt -n _ZN5Point4setYEi
    Point::setY(int)
    >c++filt -n _ZN5PointC1Eii
    Point::Point(int, int)
    >c++filt -n _ZN5PointC1Ev
    Point::Point()
    >c++filt -n _ZN5PointC2Eii
    Point::Point(int, int)
    >c++filt -n _ZN5PointC2Ev
    Point::Point()
    >c++filt -n _ZNK5Point4getXEv
    Point::getX() const
    >c++filt -n _ZNK5Point4getYEv
    Point::getY() const
    >c++filt -n _ZlsRSoRK5Point
    operator<<(std::basic_ostream<char, std::char_traits<char> >&, Point const&)
    >c++filt -n _ZplRK5PointS1_
    operator+(Point const&, Point const&)

创建 DLL 后，就可以写测试程序：

    #include <iostream>
    #include "point.hpp"

    using namespace std;

    int main(int argc, char** argv)
    {
      Point a;
      Point b(2, 7);
      Point c;
      
      c.setX(85);
      c.setY(24);
      
      cout << "a = " << a << endl;
      cout << "b = " << b << endl;
      cout << "c = (" << c.getX() << ", " << c.getY() << ")\n";

      cout << "foo + bar = " << foo << " + " << bar << " = " << (foo + bar) << endl;

      return 0;
    }

编译链接测试程序 testPoint.cpp：

    >g++ -c -o pointtest.o pointtest.cpp
    >g++ -o pointtest.exe -s pointtest.o -L. -lpoint
    >pointtest.exe a = (0, 0)

    b = (2, 7)
    c = (85, 24)
    foo + bar = (9, 6) + (3, 19) = (12, 25)

发布 DLL 时，需要注意避免破坏其它程序的正常运行，应该给 DLL 附加一个版本号后缀以区别，如下：

    point-mingw-4.5.2.dll
    point-msvc-2010.dll


这个工程目录结构：

    ─ ${application}
      ├── example
      │   ├── CMakeLists.txt 
      │   └── testPoint.cpp
      ├── include
      │   └── point.hpp
      ├── src
      │   └── point.cpp
      ├── CMakeLists.txt 
      └── DllDemo.sublime-project 

为了使用 CMake 自动化编译，在工程顶级目录设置 CMakeLists.txt：

    cmake_minimum_required(VERSION 2.8)

    project( dllDemo )

    # set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -m64 -g -Wall -O2")
    # set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -m64 -g -Wall -O2 -std=c++11")

    set(CMAKE_CXX_FLAGS "-w" )
    set(CMAKE_CXX_STANDARD 11)
    set(CMAKE_CXX_STANDARD_REQUIRED True)

    set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)
    set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/lib)

    if (POLICY CMP0015)
        cmake_policy(SET CMP0015 NEW)
    endif()

    include_directories( "./include/" )

    # Static Libs
    # set(CMAKE_EXE_LINKER_FLAGS "-static-libgcc -static-libstdc++ -static")
    set(BUILD_SHARED_LIBS ON)

    set(ENV{PATH} C:/CodeBlocks/MinGW/bin)
    message($ENV{PATH})
    execute_process(COMMAND where g++ )
    execute_process(COMMAND where make )

    aux_source_directory("src/" src)
    add_library( point ${src} )

    # message( ${CMAKE_INSTALL_LIBDIR} )
    install(TARGETS point DESTINATION "/lib")
    install(TARGETS point DESTINATION "${PROJECT_SOURCE_DIR}/bin")

    add_subdirectory(example bin EXCLUDE_FROM_ALL)
    # add_subdirectory(example bin)

如果要在包含目录、库目录中使用相对路径，需要 Policy CMP0015：

    if (POLICY CMP0015)
        cmake_policy(SET CMP0015 NEW)
    endif()

在 example 子目录下设置 CMakeLists.txt：

    cmake_minimum_required(VERSION 2.8)

    include_directories("${PROJECT_SOURCE_DIR}/include/")
    link_directories( 
        "${PROJECT_BINARY_DIR}/lib/"
        "${PROJECT_SOURCE_DIR}/lib/"
        )

    # set(CMAKE_CXX_FLAGS "-Wl,-Bstatic" )
    # set(CMAKE_FIND_LIBRARY_SUFFIXES ".a")
    # link_libraries(point)

    add_executable(PointTest pointTest.cpp)

    # dynamic link
    add_executable(PointTest pointTest.cpp)
    target_link_libraries( PointTest point )

    # static linke
    # set_property(TARGET point PROPERTY IMPORTED_LOCATION libpoint.a)
    # add_executable(PointTest pointTest.cpp)
    # target_link_libraries( PointTest libpoint.a )


作为小巧、功能强大的 SublimeText，用它来编写 C++ 工程是组好的选择，工程文件配置如下，
Ctrl-Shift-B 调用设置好的命令，先执行 CMake 生成 MinGW Makefiles 编译脚本，再执行
Make 或 Make install 生成动态链接库，然后生成 PointTest 程序：

    {
        "build_systems":
        [
            {
                "env":{
                    "PATH":"c:/CodeBlocks/MinGW/bin/;%PATH%"
                },
                "encoding": "utf8",
                "file_regex": "^  (.+)\\((\\d+)\\)(): ((?:fatal )?(?:error|warning) \\w+\\d\\d\\d\\d: .*) \\[.*$",
                "name": "MinGW Build (Windows)",
                "quiet": true,
                "shell_cmd": "cmake --build .",
                "variants":
                [
                    {
                        "name": "Make help",
                        "shell_cmd": "make help"
                    }, {
                        "name": "MinGW Makefiles",
                        "shell_cmd": "cmake .. -G \"MinGW Makefiles\""
                    }, {
                        "name": "clean",
                        "shell_cmd": "make clean"
                    }, {
                        "name": "clear all",
                        "shell_cmd": "del * /s /q"
                    }, {
                        "name": "Make",
                        "shell_cmd": "make -j 4 all"
                    }, {
                        "name": "Make install",
                        "shell_cmd": "make install"
                    }, {
                        "name": "Make PointTest",
                        "shell_cmd": "make PointTest"
                    }
                ],
                "working_dir": "${project_path}/build"
            }
        ],
        "folders":
        [
            {
                "path": ".",
                "binary_file_patterns":["*.noting"],
                "name": "Dll Demo Project",
            }
        ],
        "settings":
        {
            "cmake":
            {
                "build_folder": "${project_path}/build"
            }
        }
    }



## 🐤🐥 Creating JNI DLLs

MinGW 创建的 DLL 可以和 Java Native Interface 一起使用，JNI 调用 Win32 函数使用 
stdcall 调用约定，这种调用表示函数参数入栈顺序从右到左。

因为不同的语言想到交互时，需要有一致的函数调用和返回行为，C 语言作为一种历史悠久的编程语言，
它的函数调用方式称为标准调用 stdcall，其它常见方式如下：

|   调用约定   | 清理堆栈 |                              说明                              |
|--------------|----------|----------------------------------------------------------------|
| `__cdecl`    | 主调函数 | 参数从右到左 push 入栈                                         |
| `__stdcall`  | 被调函数 | 同 `cdecl`                                                     |
| `__fastcall` | 被调函数 | 参数从右到左 push 入栈，但优先使用寄存器传递，如 EAX、ECX、EDX |
| `__thiscall` | 被调函数 | 参数从右到左 push 入栈，this 指针通过 ECX 传递                 |
| `__declspec` | 被调函数 | 用于 DLL 导出函数，如 `__declspec(dllexport)`                  |

JVM 希望调用的 DLL 函数名是未修饰的，或者按 `_[function name]@[size of arguments]` 
这样的格式修饰。错误的调用类似以下结果：

    >java Hello
    Exception in thread "main" java.lang.UnsatisfiedLinkError: Hello.add(II)I
            at Hello.add(Native Method)
            at Hello.main(Hello.java:5)

正确导出 JNI 调用的函数需要使用 `--kill-at` 编译选项，Java 示例如下：

    public class Hello
    {
      public static void main(String[] args)
      {
        System.out.println("8 + 5 = " + Hello.add(8, 5));
      }
      
      static
      {
        System.loadLibrary("Hello");
      }
      
      public static native int add(int a, int b);
    }

使用 `System.loadLibrary()` 加载 DLL，然后使用 Java 提供的命令编译并生成 C/C++ 头文件：

    >javac Hello.java
    >javah Hello

第二个命令生成 C/C++ 头文件类似如下：

    /* DO NOT EDIT THIS FILE - it is machine generated */
    #include <jni.h>
    /* Header for class Hello */

    #ifndef _Included_Hello
    #define _Included_Hello
    #ifdef __cplusplus
    extern "C" {
    #endif
    /*
     * Class:     Hello
     * Method:    add
     * Signature: (II)I
     */
    JNIEXPORT jint JNICALL Java_Hello_add
      (JNIEnv *, jclass, jint, jint);

    #ifdef __cplusplus
    }
    #endif
    #endif

接下来创建 C 代码文件，实现函数：

    #include "Hello.h"

    jint JNICALL Java_Hello_add(JNIEnv* env, jclass clazz, jint a, jint b)
    {
      return (a + b);
    }

编译并运行测试它，`--kill-at` 别忘了，还有 JDK 版本和 MinGW 要统一为 32-bit 或 64-bit 版本：

    >gcc -c -o Hello.o Hello.c -I "c:\Java\jdk\include\win32" -I "c:\Java\jdk\include"
    >gcc -o Hello.dll -s -shared Hello.o -Wl,--subsystem,windows,--kill-at

    >java Hello
    8 + 5 = 13

在 CMake 编写脚本时，发现并不能正确使用 --kill-at，必须在 target_link_options 命令中
使用 `LINKER:` 才能正确将参数传入链接程序：

    target_link_options( hello PUBLIC --kill-at)
    target_link_options( hello PUBLIC LINKER:--kill-at)

最后，注意，32-bit JVM 只能加载 32-bit DLL，64-bit JVM 也只能加载 64-bit DLLs，否则异常：

    Can't load IA 32-bit .dll on a AMD 64-bit platform


## 🐤🐥 P/Invoking MinGW DLLs in .NET

MinGW 编译的 DLL 与 .NET 一起使用要比 JNI 简单，因为不必按 JNI 规定格式进行设置。 

C# 提供 P/Invoke 即 Platform Invoke 平台调用，调用非托管 DLL 中的函数，和关键字 
DllImport 一起使用。实际上，NET 基类库中定义的类型内部调用 Kernel32.dll、User32.dll、
gdi32.dll 等非托管 DLL 中导出的函数。

使用 DllImport 将 DLL 导出的 stdcall 函数声明为 `extern` 即可：

    using System;
    using System.Runtime.InteropServices;

    public class Hello
    {
      public static void Main(string[] args)
      {
        Console.WriteLine("8 + 5 = {0}", Hello.Add(8, 5));
      }
      
      [DllImport("AddLib.dll", CallingConvention = CallingConvention.Cdecl)]
      extern public static int Add(int a, int b);
    }

还可以指定调用约定方式，这就是语言更新换代带来的好处：

    CallingConvention = CallingConvention.StdCall

.NET CLR 会尝试导入没有修饰的函数名，可以指定 MSVC 函数名修饰方式，如 `_Add@8`:

    ExactSpelling = true

当然，完全可以显式指定导入的函数名：

    using System;
    using System.Runtime.InteropServices;

    public class Hello
    {
      public static void Main(string[] args)
      {
        Console.WriteLine("8 + 5 = {0}", Hello.Add(8, 5));
      }
      
      [DllImport("AddLib.dll", CallingConvention = CallingConvention.StdCall, EntryPoint = "Add@8", ExactSpelling = true)]
      extern public static int Add(int a, int b);
    }

注意，程序和 DLL 文件要 32-bit 或 64-bit 对应，否则异常：

    >Hello.exe

    未经处理的异常:  System.BadImageFormatException: 试图加载格式不正确的程序。 (异常来自 HRESULT:0x8007000B)
       在 Hello.Add(Int32 a, Int32 b)
       在 Hello.Main(String[] args)

作为新式语言，C# 的编译器提供了平台链接选项：

    >csc /platform:x86 /out:Hello.exe Hello.cs
    Microsoft (R) Visual C# 2005 Compiler version 8.00.50727.4927
    for Microsoft (R) Windows (R) 2005 Framework version 2.0.50727
    Copyright (C) Microsoft Corporation 2001-2005. All rights reserved.

在 Visual Studio 中设置平台目标，在工程属性的 build 选项卡，这样就可以在 64-bit 系统编译
32 bit 目标程序，同样，可以指定 platform 为 x64。



## 🐤🐥 Using MinGW DLLs with VB6 and VBA

MinGW 编译的 DLL 可以和 Visual Basic 6 或 VBA 一起使用，只要调用约定为 stdcall 方式，
不支持 cdecl 或其它调用约定，并且使用 `--kill-at` 编译选项：

    >gcc -o AddLib.dll add.o -shared -s -Wl,--subsystem,windows,--kill-at

然后，在 VB 代码中声明：

    Private Declare Function MyAddFunction Lib "AddLib.dll" Alias "Add" (ByVal a As Long, ByVal b As Long) As Long

    Sub Test()
        Call MsgBox(MyAddFunction(4, 5))
    End Sub

注意，VB 关键字 `Alias` 导出了 DLL 中的函数，并起了个别名。Visual Basic 只支持 ANSI 而
不支持 Unicode。

如果在 VBA 中，还需要标记 PtrSafe，以确保可以在 64 bit 的 Microsoft Office 上运行，
为了向后兼容 Office 2010，可以进行条件判断：

    #If VBA7 Then
        Private Declare PtrSafe Function MyAddFunction Lib "AddLib.dll" Alias "Add" (ByVal a As Long, ByVal b As Long) As Long
    #Else
        Private Declare Function MyAddFunction Lib "AddLib.dll" Alias "Add" (ByVal a As Long, ByVal b As Long) As Long
    #End If

    Sub Test()
        Call MsgBox(MyAddFunction(4, 5))
    End Sub

这些代码使用起来相当不舒服，VB 除了在 Office 中用得较多，几乎没什么用户了。



## 🐤🐥 Setting the DLL base address

DLL 的基址 base address 是 Windows 系统加载 DLL 的默认地址，进程的内存空间是一个`虚拟空间`
virtual address space。程序中使用的 DLL 很多，当任意 DLL 的地址出现覆盖时，就不可能按 DLL
的基址去加载，而需要重定位 relocated 加载到不同的地址。这涉及到加载器的硬编码补丁操作，比较消耗资源。

默认 MinGW 链接程序基于 DLL 名字的哈希分散选择基址，这一般不会有什么问题。也可以通过
`--image-base` 链接参数设置基础：

    >gcc -o AddLib.dll obj/add.o -shared -s ^
         -Wl,--subsystem,windows,--out-implib,libaddlib.a,--image-base,0x10000000

然后再用 objdump 查看 ImageBase：

    >objdump -p AddLib.dll
    AddLib.dll:     file format pei-i386

    Characteristics 0x230e
            executable
            line numbers stripped
            symbols stripped
            32 bit words
            debugging information removed
            DLL

    Time/Date               Tue Apr 19 16:32:45 2011
    Magic                   010b    (PE32)
    MajorLinkerVersion      2
    MinorLinkerVersion      21
    SizeOfCode              00000c00
    SizeOfInitializedData   00002200
    SizeOfUninitializedData 00000200
    AddressOfEntryPoint     000010c0
    BaseOfCode              00001000
    BaseOfData              00002000
    ImageBase               10000000
    SectionAlignment        00001000
    FileAlignment           00000200
    MajorOSystemVersion     4
    MinorOSystemVersion     0
    MajorImageVersion       1
    MinorImageVersion       0
    MajorSubsystemVersion   4
    MinorSubsystemVersion   0
    Win32Version            00000000
    SizeOfImage             0000c000
    SizeOfHeaders           00000400
    CheckSum                0000383c
    Subsystem               00000002        (Windows GUI)
    DllCharacteristics      00000000
    SizeOfStackReserve      00200000
    SizeOfStackCommit       00001000
    SizeOfHeapReserve       00100000
    SizeOfHeapCommit        00001000
    LoaderFlags             00000000
    NumberOfRvaAndSizes     00000010

## 🐤🐥 Loading and unloading DLLs at runtime

运行时加载 DLL 对于插件开发是非常有用的。

这里演示 `void __cdecl DoPlugin();` 导出函数，模拟插件的运行机制，程序中只需要调用 
DoPlugin 就可以让插件运行起来。

需要用到 kernel32.dll 中的 Windows API `LoadLibrary` ，调用此函数将 DLL 加载到
进程的地址空间中。Windows 系统自动对 DLL 的加载进行计数。加载成功计数增加一，返回一个模块
句柄 HMODULE 也即是 DLL 加载到的内存地址信息。然后，通过 `GetProcAddress` 函数获取 DLL 
导出函数的地址，继续使用 `AddLib.dll` 演示如何在运行时调用 `Add` 导出函数。

    #include <windows.h>
    #include <stdio.h>
    #include <stdlib.h>

    /* Function signature of the function exported from the DLL. */
    typedef int (__cdecl *AddFunc)(int a, int b);

    int main(int argc, char** argv)
    {
      HMODULE hAddLib;
      AddFunc Add;

      /* Attempt to load the DLL into the process's address space. */
      if (! (hAddLib = LoadLibrary(TEXT("AddLib.dll"))))
      {
        fprintf(stderr, "Error loading \"AddLib.dll\".\n");
        return EXIT_FAILURE;
      }

      /* Print the address that the DLL was loaded at. */
      printf("Library is loaded at address %p.\n", hAddLib);

      /* Attempt to get the memory address of the "Add()" function. */
      if (! (Add = (AddFunc) GetProcAddress(hAddLib, "Add")))
      {
        fprintf(stderr, "Error locating \"Add\" function.\n");
        return EXIT_FAILURE;
      }

      /* Print the address of the "Add()" function. */
      printf("Add function is located at address %p.\n", Add);

      /* Call the function and display the results. */
      printf("7 + 41 = %d\n", Add(7, 41));

      /* Unload the DLL. */
      FreeLibrary(hAddLib);

      return EXIT_SUCCESS;
    }

程序有几点注意：

- LoadLibrary 和 GetProcAddress 返回 NULL 表示失败，应该进行检查。
- LoadLibrary 有 ANSI 和 Unicode 两个版本，GetProcAddress 总是使用 ANSI 字符串。
- 使用 C 语言类型定义的函数指针类型要和 DLL 导出函数完全匹配，否则会让程序崩溃。
- 最后，FreeLibrary 函数应该在不需要使用 DLL 时用来释放它，计数会减一，让系统知道何时回收内存。

运行程序测试：

    >DynamicLoad.exe
    Library is loaded at address 6DA40000.
    Add function is located at address 6DA41280.
    7 + 41 = 48


# 🐣 CMake OpenCV

使用 OpenCV 创建一个简单的程序 DisplayImage.cpp，如下所示。

    #include <stdio.h>
    #include <opencv2/opencv.hpp>

    using namespace cv;

    int main(int argc, char** argv )
    {
        if ( argc != 2 )
        {
            printf("usage: DisplayImage.out <Image_Path>\n");
            return -1;
        }
        Mat image;
        image = imread( argv[1], 1 );
        if ( !image.data )
        {
            printf("No image data \n");
            return -1;
        }
        namedWindow("Display Image", WINDOW_AUTOSIZE );
        imshow("Display Image", image);
        waitKey(0);
        return 0;
    }

为 CMake 命令创建一个 CMakeLists.txt 文件：

    cmake_minimum_required(VERSION 2.8)
    project( DisplayImage )
    # find_package( OpenCV REQUIRED )

    include_directories(c:/download/OpenCV/opencv/build/include/)
    link_directories(
        "c:/download/OpenCV/opencv/build/x64/vc15/lib/"
    )

    set(BUILD_SHARED_LIBS OFF)
    set(OpenCV_LIBS 
        opencv_calib3d430
        opencv_core430
        opencv_dnn430
        opencv_features2d430
        opencv_flann430
        opencv_gapi430
        opencv_highgui430
        opencv_imgcodecs430
        opencv_imgproc430
        opencv_ml430
        opencv_objdetect430
        opencv_photo430
        opencv_python3
        opencv_stitching430
        opencv_ts430
        opencv_video430
        opencv_videoio430
        opencv_world430
        opencv_world430d
    )
    link_libraries( ${OpenCV_LIBS} )
    add_executable( DisplayImage display.cpp )
    target_link_libraries( DisplayImage ${OpenCV_LIBS} )

使用 CMake 生成可执行文件：

    cd <DisplayImage_directory>
    cmake .
    make

或者：

    cmake --build .

在 Windows 平台下和 MinGW 编译器一起工作，指定生成 Makefile：

    mkdir -p cmake-build && cd cmake-build
    cmake .. -G"Unix Makefiles"

注意，不同编译的器连接库是没办法通过的，甚至同一套编译器不同版本编译出来的动态链接库也不能通用。
所以要使用同版本的 MinGW 编译出来链接库，除了使用 CMke 这个被逼着使用的东西，在 GCC 中可以
选择更通用的 GUN make。也可以像我一样直接撸命令，以下是 Sublime 下使用的编译配置文件，直接
保存到 Preferences - Browser Packages - User 目录下，命名就取 `MinGW.sublime-build`，
sublime 会自动读取这个编译配置文件，使用快捷键 Ctrl-B 就可以调出编译命令：

    {
        "env": {
            "PATH":"C:/MinGW-OpenCV-4.1.1-x64/x64/mingw/bin;%PATH%",
            "inc":"-IC:/MinGW-OpenCV-4.1.1-x64/include",
            "libpath":"-LC:/MinGW-OpenCV-4.1.1-x64/x64/mingw/lib",
            "libs":"-lopencv_calib3d411 -lopencv_core411 -lopencv_dnn411 -lopencv_features2d411 -lopencv_flann411 -lopencv_gapi411 -lopencv_highgui411 -lopencv_imgcodecs411 -lopencv_imgproc411 -lopencv_ml411 -lopencv_objdetect411 -lopencv_photo411 -lopencv_stitching411 -lopencv_video411 -lopencv_videoio411",
            "cc":"g++.exe -Wall -Wno-unused-variable"
        },
        "shell_cmd": "ECHO MinGW GCC 8.1.0 Compiling $file_name ... && %cc% -g -std=c++11 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && echo done.",
        "file_regex": "^(...*?):([0-9]*):?([0-9]*)",
        "working_dir": "${file_path}",
        "selector": "source.c++",
        "encoding":"gbk",
        "quiet": true,
        "variants":[
            {
                "name":"(-std=c++17)",
                "shell_cmd":"ECHO Compiling (-std=c++17) $file_name ... && %cc% -g -std=c++17 -c \"$file\" -o $file_base_name.o && g++.exe -o ${file_base_name}.exe ${file_base_name}.o && ECHO Start run $file_name ... && ${file_base_name} "
            },
            {
                "name":"(-std=c++14)",
                "shell_cmd":"ECHO Compiling (-std=c++14) $file_name ... && %cc% -g -std=c++14 -c \"$file\" -o $file_base_name.o && g++.exe -o ${file_base_name}.exe ${file_base_name}.o && ECHO Start run $file_name ... && ${file_base_name} "
            },
            {
                "name":"(-std=c++11)",
                "shell_cmd":"ECHO Compiling (-std=c++11) $file_name ... && %cc% -g -std=c++11 -c \"$file\" -o $file_base_name.o && g++.exe -o ${file_base_name}.exe ${file_base_name}.o && ECHO Start run $file_name ... && ${file_base_name} "
            },
            {
                "name":"(-std=c++11) with ENV",
                "shell_cmd":"ECHO Compiling (-std=c++11) $file_name ... && %cc% -g -std=c++11 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
            },
            {
                "name":"(-std=c++11) Release with ENV",
                "shell_cmd":"ECHO Compiling (-std=c++11) $file_name ... && %cc% -DNDEBUG -std=c++11 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
            }
        }
    }

或者在 Sublime Text 的工程文件中配置构建命令，如下 demo.sublime-project，注意 
working_dir 设置的当前工作目录一定要存在，否则命令不能执行，${project_path} 表示
工程文件所在目录：

    {
        "build_systems":
        [
            {
                "env":{
                    "PATH":"c:/CodeBlocks/MinGW/bin/;%PATH%"
                },
                "file_regex": "^  (.+)\\((\\d+)\\)(): ((?:fatal )?(?:error|warning) \\w+\\d\\d\\d\\d: .*) \\[.*$",
                "name": "MyProject (Windows)",
                "shell_cmd": "cmake --build .",
                "syntax": "Packages/Users/CMake.sublime-syntax",
                "encoding":"utf8",
                "quiet": true,
                "variants":
                [
                    {"name": "Test", "shell_cmd":"echo Testing..."}
                ],
                "working_dir": "${project_path}/build"
            }
        ],
        "folders":
        [
            {
                "path": "."
            }
        ],
        "settings":
        {
            "cmake":
            {
                "build_folder": "${project_path}/build"
            }
        }
    }

**注意：安装了多个 MinGW 版本的机器，在编写编译脚本时，第一步要搞清楚脚本执行时，调用的是
那一个版本，否则用错编译器一定会出现莫名的错误。比如，设置了链接依赖库，却报错找不到符号定义。**

配置中加入 PATH 的路径有两个主要作用，一是为了运行编译出来的程序能找到 OpenCV 的 DLL 文件，
二是为了正确调用编译器，包括从安装多个版本中指定正确的一个。另外注意，GCC 中的 ld 链接程序默认
会自动查找引用引用库目录中 `.lib` 扩展名的文件。如果，编译 OpenCV 生成的文件是 `.dll.a` 
这样古怪的名字，那么就找不到了。

在 Windows 和 Linux 系统上，程序的编译链接都有动态和静态两种方式，动态链接 `.dll` 文件
和 `.so` 文件是在程序执行时使用的，而 `.lib` 引用库文件是在程序编译阶段用来定位符号用的。
如何是静态链接，会使用到 `.a` 静态链接库，静态链接生成的程序文件运行时就不需要依赖动态链接库了。

一般来说 Linux 中的库文件名还可以这样 `libQt5Widgets.a` 在引用时只需要取 Qt5Widgets 
这部分，ld 查找的目录顺序是 `/var/lib` -> `/usr/lib` -> `LD_LIBRARY_PATH` 环境变量
指定的目录 -> 命令行指定的 `-LPATH_TO_LIB` 目录。

如果遇到以下提示，请不要傻傻地去设置环境变量，这可以是因为 MinGW 使用的是 mingw32-make.exe
导致 CMake 检测不到，复制一份改名 make.exe：

    CMake Error: CMAKE_C_COMPILER not set, after EnableLanguage
    CMake Error: CMAKE_CXX_COMPILER not set, after EnableLanguage

编译前，还可以将 MinGW 编译好的 OpenCV 的头文件和库文件放到对应的位置：

    C:\MinGW\x86_64-w64-mingw32\include

现在你应该有一个可执行文件，但它需要依赖 OpenCV 的动态链接库，指定可以访问到的一个路径。运行它
给出一个图像位置作为参数，即：

    set path=C:\OpenCV\build\bin
    ./DisplayImage lena.jpg




# 🐣 OpenCV freetype 模块单独构建
- [CMake 构建静态库与动态库](https://www.cnblogs.com/52php/p/5681755.html)
- [OpenCV freetype 模块启用支持并中文](https://cloud.tencent.com/developer/article/1353734)
- [OpenCV 渲染中文字符](https://mangoroom.cn/opencv/opencv-puttext-chinese-characters.html)
- [FreeType](https://download.savannah.gnu.org/releases/freetype/)
- [WOFF File Format 2.0](https://www.w3.org/TR/WOFF2/)
- [The FreeType Project](https://www.freetype.org/)

OpenCV 默认不支持渲染中文字符，不支持 utf-8，cv::putText() 函数仅支持对 ASCII，这是一个
很小的字符编码，想要支持中文或者其他字符的渲染就需要支持 Unicode 的字符集。其实早期的 OpenCV
是字符 Unicode 字符渲染的，采用的是 FreeType 库实现的，由于 FreeFype 是 GPL 版权发布的库，
和 OpenCV 版权并不一致。

opencv_contrib 提供的 freetype 模块并不支持独门构建，但可以到 FreeType 官方下载完整的
源代码进行编译：

    cmake_minimum_required(VERSION 3.18)
    project( freetype )

    set(CMAKE_CXX_FLAGS "-std=c++11" )
    # set(CMAKE_CXX_STANDARD 11)
    # set(CMAKE_CXX_STANDARD_REQUIRED True)

    INCLUDE_DIRECTORIES(
        "${PROJECT_SOURCE_DIR}/include"
        "C:/download/OpenCV/MinGW-OpenCV-4.1.1-x64/include/"
    )

    link_directories(
        "C:/download/OpenCV/MinGW-OpenCV-4.1.1-x64/x64/mingw/lib/"
    )

    get_property(var DIRECTORY PROPERTY INCLUDE_DIRECTORIES)
    message(${var})

    # set(CMAKE_FIND_LIBRARY_SUFFIXES ".a")
    # 设置生成共享库的路径
    set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/lib)
     
    # 成的共享库文件就叫做 lib[LIB_NAME].so
    set(LIB_NAME freetype)

    set(SRC src/freetype.cpp)

    add_library(${LIB_NAME} SHARED ${SRC})
    #add_library(${LIB_NAME} STATIC ${SRC})


示例：

    #include <opencv2/opencv.hpp>
    #include <opencv2/freetype.hpp>

    using namespace std;
    using namespace cv;

    int main(int argc,char **argv){
        String text = "Hello世界！*毛*泽*东";
        int fontHeight = 60;
        int thickness = -1;
        int linestyle = 8;
        int baseline=0;

        Ptr<freetype::FreeType2> ft2;
        ft2 = freetype::createFreeType2();
        ft2->loadFontData( "/user/local/ttf/maozedong.ttf", 0 );

        namedWindow("box");
        Mat img(600, 800, CV_8UC3, Scalar::all(0));

        Size textSize = ft2->getTextSize(text,
                                     fontHeight,
                                     thickness,
                                     &baseline);
        if(thickness > 0){
            baseline += thickness;
        }

        Point textOrg((img.cols - textSize.width) / 2,
                      (img.rows + textSize.height) / 2);
        rectangle(img, textOrg + Point(0, baseline),
              textOrg + Point(textSize.width, -textSize.height),
              Scalar(0,255,0),1,8);
        line(img, textOrg + Point(0, thickness),
         textOrg + Point(textSize.width, thickness),
         Scalar(0, 0, 255),1,8);
        ft2->putText(img, text, textOrg, fontHeight,
                 Scalar::all(255), thickness, linestyle, true );
        imshow("box",img);
        
        while(1){ if(waitKey(100)==27)break; } 

        return 0;
    }

