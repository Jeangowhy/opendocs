
# 🐣 Makefile 自动化编译
- http://www.ruanyifeng.com/blog/2015/02/make.html
- https://www.gnu.org/software/make/manual/make.html
- http://erlang.org/doc/man/make.html#emakefile
- Programming Erlang 2nd - 10.3 Automating Compilation with Makefiles

Make 是最常用的构建工具，诞生于 1977 年，主要用于 C 语言的项目。但是实际上 ，任何只要某个文件有变化，就要重新构建的项目，都可以用 Make 构建。

Erlang 命令本身也实现了 Emakefile 的功能，执行编译 `erl -make` 相当执行 `make:all()`，编译后的字节文件会保存到 `ebin` 目录，执行时使用 `erl -pa ebin` 就可以自动加载字节码。erl -make 也兼容 GNU make。

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

        # 等同于

        all:
            for i in one two three; do \
                echo $i; \
            done

- 支持使用函数：

        $(function arguments)
        # 或者
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

```sh
PATH=$(PATH);\nonesuch

all:
    echo %%PATH%%
```

目标定义的基本格式和 make 很像，也具有推理能力，以下是基本使用规则：

```sh
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
编译器：

```sh
# Environment Variables
export CC=/usr/bin/clang++
export CXX=/usr/bin/clang++

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
```

还可以使用 CLI 命令行中的 -D 选项定义符号，但是可能检测失败，例如：
https://cmake.org/cmake/help/latest/variable/CMAKE_LANG_COMPILER.html

    cmake ... -DCMAKE_C_COMPILER='gcc;--arg1;--arg2'
    cmake -S. -Bbuild -DCMAKE_CXX_COMPILER=g++.exe -DCMAKE_C_COMPILER=gcc.exe

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

    +---------------+  +--------+  +------+
    |Assembly source|--|        |--|object|-+
    +---------------+  |        |  +------+ |
                       |        |           | +------+
    +---------------+  |        |  +------+ | |      |  +-----+
    |C source       |--|Compiler|--|object|-+-|Linker|--| Exe |
    +---------------+  |        |  +------+ | |      |  +-----+
                       |        |           | +---+--+
    +---------------+  |        |  +------+ |     |
    |C++ source     |--|        |--|object|-+     |
    +---------------+  +---+----+  +------+       |
                           |                      |
    +--------------+       |               +------+-------+
    | Header Files |-------+               |Resource Files|
    +--------------+                       +--------------+

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



# 🐣 WSL - Windows Subsystem for Linux
- [WSL Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [WSL VSCode](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode)
- [VSCode Remote Development](https://code.visualstudio.com/docs/remote/remote-overview)
- [VSCode Remote Development](https://code.visualstudio.com/docs/remote/wsl)
- [Using C++ and WSL in VS Code](https://code.visualstudio.com/docs/cpp/config-wsl)
- [chmod chown wsl improvements](https://devblogs.microsoft.com/commandline/chmod-chown-wsl-improvements/)
- [linux GTK、KDE、Gnome、XWindows 图形界面](https://www.jb51.net/LINUXjishu/512251.html)
- WSL - Windows Subsystem for Linux & Xfce Desktop https://www.jianshu.com/p/2dd28c78355a

在 Windows 1607 x64 位版本后提供了 WSL - Windows Subsystem for Linux 功能，即在 Windows 运行的 Linux 开发环境，能原生运行 Linux ELF 格式可执行文件。

WSL 目的是运行 Bash 和 Linux 核心命令行工具，并不包含 GUI 组件，所以 Gnome, KDE 等子系统不能使用。对于不需要图形的开发，WSL 体验甚至超过了在纯 Linux 下开发，因为节省了 GUI 的消耗，使得系统意想不到的稳定。而且没有虚拟机那恶心的地址桥接、转换，Windows 的网络通信地址和端口直接可以在 WSL 上使用。

尽管 WSL 不支持完整的 GUI 桌面环境，但是，它可以正常工作，使用 XServer 等远程桌面就可以实现。

使用 Visual Studio Code 开发非常方便，只需要在主机上安装 VSCode，再安装 Remote Development extension pack 插件包，含有 Remote - WSL 插件，它可以处理映射到 Linux 系统的 `/mnt/c` 目录，使用 remote-wsl 菜单命令，或打开终端输入 wsl 即可以进行远程开发。

Remote Development extension pack 插件包：

- Remote - SSH 安全 Shell 可以打开远程系统的文件，包括虚拟机。
- Remote - Containers 提供 sandboxed 工具链和基于窗口的应用。
- Remote - WSL 使用集成于 Windows 的 Linux 子系统功能。 

使用 Sublime Text 也可以结合 wsl 命令使用。

首先，打开 更新和安全 -> 针对开发人员 -> 开发人员模式，然后在 PowerShell 执行命令安装 WSL：

    dism /online /enable-feature /featurename:microsoft-windows-subsystem-linux

打开 Microsoft store 选择 Linxu 系统进行安装。

    wsl -l -v
    wsl --list --verbose
    wsl -l --all

WSL 系统安装目标位置和安装包位置，以 Ubuntuon 系统为例，但是尽量不要直接在 Windows 系统修改这里的文件，因为它们是按 Linux 系统组织的：

    C:\Users\xxx\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_xxx\LocalState\rootfs
    C:\Program Files\WindowsApps\CanonicalGroupLimited.UbuntuonWindows_xxx

可以通过网络访问 WSL 子系统文件系统，直接在文件资源管理器输入 `\\wsl$` 就可以。

Linux 子系统访问 Windows 寄主系统的文件，只需要到 `/mnt` 挂载点就可以看到 c 盘的文件。

安装包里有一个主程序用来启动 Ubuntu 系统：

    C:\Program Files\WindowsApps\CanonicalGroupLimited.UbuntuonWindows_2004.2020.424.0_x64__79rhkp1fndgsc\ubuntu.exe

安装 GCC 开发工具：

    wsl
    sudo apt install gcc
    sudo apt install g++

    sudo apt-get install libpng-dev
    sudo apt-get install zlib1g-dev

    sudo apt-get install zlib1g
    sudo apt-get install --reinstall zlibc zlib1g zlib1g-dev

使用 cat 命令生成代码，再编译并运行示例程序：

    cat > demo.c << END
    #include <stdio.h>
    int main()
    {
        printf("\033[5;46;37m%s\033[0m\n", "hello");
    }
    END

    gcc demo.c -o demo && ./demo

`cat >>` 表示附加内容到文件，`cat >` 表示覆盖文件内容，`cat file` 表示打印文件内容。`<< END` 表示设置一个结束标记，再次输入 END 就会停止 cat 命令。

使用 Sublime 时就要配置以下命令：

    wsl gcc ../src/demo.c -o pr && wsl ./pr

升级到 WSL 2:

    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    wsl --set-default-version 2
    wsl --set-version <distribution name> <versionNumber>

下载文件较大，需要网络快速。安装成功后，打开 PowerShell，键入 bash 并回车，即可进入 Linux 子系统。使用 lsb_release -a 命令查看 Linux 子系统版本，目前已经支持的子系统如下：

- Ubuntu 16.04 LTS
- Ubuntu 18.04 LTS
- Ubuntu 20.04 LTS
- openSUSE Leap 15.1
- SUSE Linux Enterprise Server 12 SP5
- SUSE Linux Enterprise Server 15 SP1
- Kali Linux
- Debian GNU/Linux
- Fedora Remix for WSL
- Pengwin
- Pengwin Enterprise
- Alpine WSL

在 Windows 10 Build 19041，版本号 2004 或更高系统中，可以使用 WSL 2，可以通过 winver 命令查看当前系统版本。

WSL 版本功能对比：

|              Feature               |   WSL 1   |   WSL 2   |
|------------------------------------|-----------|-----------|
| 集成 Windows & Linux               | ✅         | ✅         |
| Fast boot times                    | ✅         | ✅         |
| Small resource foot print          | ✅         | ✅         |
| Managed VM                         | ❌         | ✅         |
| Full Linux Kernel                  | ❌         | ✅         |
| Full system call compatibility     | ❌         | ✅         |
| 运行当前版本 VMWare and VirtualBox  | ✅         | ❌         |
| Performance across OS file systems | ✅         | ❌         |


Linux 子系统的管理：

    wsl -l --all
    wsl --list --running
    wsl --terminate Ubuntu

    wsl --export <Linux_distrib> <export_file>
    wsl --export Ubuntu C:\WSL\Ubuntu.tar

    wsl --import <system_name> <save_path> <import_path>
    wsl --import MyUbuntu C:\WSL\Ubuntu C:\WSL\Ubuntu.tar

    wsl --distribution MyUbuntu
    wsl --unregister MyUbuntu


DrvFs 是 WSL 提供的文件驱动器映射系统，通过它可以装饰各个磁盘分区映射到 `/mnt/c`, `/mnt/d` 等目录上。

    mount -l
    sudo umount /mnt/c
    sudo mount -t drvfs C: /mnt/c -o metadata

启动 WSL，Windows 的硬盘会自动 mount 到 Linux 系统下，但是早期版本所有 Windows 文件的 owner 和 group 都会设置为 root，读写权限则是从 Windows 系统下继承过来。经常可以看到一片绿油油的 777 权限的文件和文件夹列表，这显然和 Linux 系统中的最佳实践不符的，而且对这些文件使用 chmod 或者 chown 是不起作用的，简直没法忍。

或者使用添加 umask 和 fmask 等参数装载：

    sudo mount -t drvfs C: /mnt/c -o metadata,uid=1000,gid=1000,umask=22,fmask=111

这些标记说明，umask=22 和 fmask=111 表示文件和目录有相应的 read/write/execute 权限：

- uid: the user ID used for the owner of all files
- gid: the group ID used for the owner of all files
- umask: an octal mask of permissions to exclude for all files and directories.
- fmask: an octal mask of permissions to exclude for all regular files.
- dmask: an octal mask of permissions to exclude for all directories.


但是每次使用时手动 mount 也太麻烦了，这时正好用上另一个新特性 Automatically Configuring WSL。把下面 automount 的选项添加到 wsl 配置文件中就可以了。

    sudo cat > /etc/wsl.conf << END
    [automount] 
    enabled = true 
    root = /mnt/ 
    options = "metadata,umask=22,fmask=11" 
    mountFsTab = false 
    END

如果 sudo cat 执行不了，可以使用 sudo vim 进行编辑。

现在重启 WSL 的 console, Windows 硬盘上的文件和文件夹都拥有正常权限了。但是，用 mkdir 命令创建一个空文件夹，就会发现新的文件夹还是 777 权限。这可能是 wsl 的一个bug (Issue 1801, Issue 352)，console 默认的 umask 值仍然是 0000。work-around 的方法是在 .profile、.bashrc、.zshrc 或者其他 shell 配置文件中重新设置一下 umask。

    #Fix mkdir command has wrong permissions
    if grep -q Microsoft /proc/version; then
        if [ "$(umask)" == '0000' ]; then
            umask 0022
        fi
    fi


## 🐤🐥 SSH 登录设置

在 Windows WSL 系统上启用 SSH 服务，先适当修改配置文件，更改端口 Port 22 改成 Port，或启用密码验证 PasswordAuthentication，并创建密钥对：

```sh
$ sudo vi /etc/ssh/sshd_config
$ cd /etc/ssh              
$ sudo ssh-keygen -A
 ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519   
$ sudo /etc/init.d/ssh start
  * Starting OpenBSD Secure Shell server sshd          [ OK ]
$ sudo service ssh restart

# 开机自启设置
# vi /etc/rc.local
# service sshd start
```

启用密码验证就可以使用用户账户登录：

    ssh root@localhost -p 22

未启用密码登录，且未正确配置登录密钥，就可能出现公钥权限问题 Permission denied (publickey).

使用公钥登录需要在服务器中记录受认可的公钥，以下情况都会导致公钥访问权限被拒绝：

- 本地访问远程主机的公钥没有添加或者被取消（无法认证）
- 远程服务器公钥文件夹权限错误，.ssh 和 .ssh/authorized_keys，需要保证只有用户自己有权限，否则验证无效。

使用 ssh-keygen 为本地机器生成的一对秘钥，公钥文件的内容，C:\Users\XXX\.ssh\id_rsa.pub，应该保存在远程服务器端已认证秘钥文件内 `~/.ssh/authorized_keys`。登录时，注意要指定相应的用户账户。



## 🐤🐥 GUI - X Windows 图形协议
- [X Window 系统的窗口显示原理](https://www.ibm.com/developerworks/cn/linux/l-cn-xwin/)
- [The Xlib Manual](https://tronche.com/gui/x/xlib/)
- [Dear imgui](https://github.com/ocornut/imgui)
- [Dear ImGUI 在线演示](https://greggman.github.io/doodles/glfw-imgui/out/glfw-imgui.html)
- [Nuklear UI](https://github.com/Immediate-Mode-UI/Nuklear)
- [Nuklear UI Doc](https://cdn.statically.io/gh/vurtun/nuklear/master/doc/nuklear.html)
- [VcXsrv Windows X Server](https://sourceforge.net/projects/vcxsrv/)
- [WSL Terminal](https://github.com/mskyaxl/wsl-terminal)
- [FVWM - F? Virtual Window Manager](https://www.fvwm.org/)
- [FVWM - Beginners Guide by Jaimos F Skriletz](http://zensites.net/fvwm/guide/)
- [FVWM 简明使用指南](https://docs.huihoo.com/homepage/shredderyin/fvwm_frame.html)


GUI 程序是指某一类带有图形界面的程序，和控制台程序的区别就是图形处理的差别。在传统 DOS 系统中，可以通过硬件中断的方式设置显卡工作在图形模式下，程序通过写显卡内存数据实现图形显示。

而在现代的操作系统中，通过新的 API 实现，或者通过现成的图形库实现 GUI 程序。如果是 Windows 系统，可以选择 MFC 或 ALT，或更新的 .Net 框架。

在 Linux 下选择也很多，但 X Windows 是通用性最好的一下图形界面协议。

此外，还有大量可跨平台的 GUI 图形库，如基于 OpenGL 的 IMGUI、Nuklear UI 等，还有 Qt、wxWidgets 等。

用 C++ 从零编写 GUI 这种想法是每个好奇者都会有的想法，但是要从头实现一款自己的界面库，你需要了解界面库是如何运作的，消息机制、绘图机制，字体处理，甚至多语言处理。另外一个层面上讲，程序终归是要依赖系统运行，底层部分肯定是要基于系统 API 之上。

即使作一层抽象，像 IMGUI 这类直白图形库，也是需要处理与系统的关系的。Immediate Mode GUI 是一种简化的图形架构，这种类型的更多的适用于显示区域实时刷新的程序里面，应用于游戏界面的实现上，如著名的游戏引擎 Unity 就是用 IMGUI 模式写的 GUI。

IMGUI 这种实现模式的优势在于他在实现和实用上都会比传统的 Retained Mode GUI，例如 Qt、 MFC 等，要简单不少，不用去管理图形组件的生存周期。IMGUI 模式没有图形控件对象，不保存任何状态，不用单独的去实现 UI 和程序间数据的交换，甚至都不需要单独为事件写回调函数。每个控件都通过绘图函数实现，直接在程序的 Draw() 函数里要哪个控件就调用哪个函数绘图。也因此，在 IMGUI 中实现带状态的图形会显得麻烦，比如动画白控件。

基于系统 API 调用实现 GUI 图形界面，在 Windows 系统中 GUI 编程采用的是消息循环机制，通过 API 向系统注册窗口类，并设置好消息处理的回调函数，处理好用户与系统 GUI 交互过程中产生的事件，这就是一个基本程序流程。而 MFC 则是使用各种类帮你组织好了系统 API，这样开始 GUI 程序就会比直接使用 API 更方便。MFC 作为最经典的 Windows GUI 框架，现在已经不更新了，但是其中的框架思想是值得学习的，台湾的侯捷老师编写了一本《深入浅出 MFC》可以参考，此书是讲原理更关心 MFC 的框架设计。如果要快速上手则合适参考李久进的《MFC 深入浅出》 或《Windows 程序设计》。


而 X Window 系统是一个基于网络的图形界面系统，说它是图形协议自然是因为它的架构特别。它于 1984 年在麻省理工学院开发，有将近 20 年的应用历史，X Window 系统广泛的应用于桌面 Linux（如 Fedora、Debian、Ubuntu 等），嵌入式 Linux（如 Nokia 的 Maemo、Intel 的 Moblin 等）。随着 Nokia 和 Intel 高调的将 Maemo 和 Moblin 合并为 Meego，X Window 系统的应用将被推向一个新的高潮。

X Window 是 C/S 架构，涵盖 X Server、X 协议、X Client 三部分内容。X Client 有三种开发模式：基于 XLib、基于 GTK、基于 Qt。

![图 4. X Client、X Server、窗口管理器交互序列图](https://www.ibm.com/developerworks/cn/linux/l-cn-xwin/image004.gif)

X Windows 图形程序基本运行过程：

- 用户通过鼠标键盘对 X server 下达操作命令 
- X server 利用 Event 传递用户操作信息给 X client 
- X client 运算相应的程序运算 
- X client 利用 Request 传回所要显示的结果 
- X server 将结果显示在屏幕上

X Client 客户端提供界面实现，执行各种 X 程序，创建一些图形相关资源如 XImage；

常见的情况是 X server 与 X client 都在同一台电脑上运行，分别运行于网络上不同的电脑上即远程桌面。X client 是与硬件无关的，它并不关心你使用的是什么显卡什么显示器什么键盘鼠标，这些只与 X server 相关。服务器端运行在有显示设备的主机上，控制输入输出，维护字体，颜色等相关资源，为客户端提供 GC、Pixmap、Window 等资源。例如，使用 XFree86 桌面环境，运行 xf86config 或 xf86cfg 进行的配置实际上只是与 X server 有关。X protocol 就是 X server 和 X client 之间通信的协议，支持现在常用的网络通信协议，如 TCP/IP，默认 X server 侦听 tcp 6000 端口。

从控制台进入 X 图形环境一般是用 startx 命令：

    startx [[client] options .....] [-- [server] options ....] 
    xinit [[client] options ] [-- [server] [display] options] 

把上面 [client] 和 [server] 分别称为 client 程序和 server 程序。

X window system 使用 C/S 结构设计的好处：

- 采用 C/S 架构可以解耦，client 可以采用任意语言开发，只要符合 X protocol 要求。
- 资源统一管理，方便共享。X server 接管硬件及输入事件，clinet 可以方便共享使用，也可主动给各个 clients 发消息。
- 远程显示支持，一般来说 server 和 client 是在同一台电脑上，在不同网络的电脑上运行就是远程登录。

常用的 GTK+，Qt 就是很流行的 x toolkit，实现了常用的组件，而 xlib 封装 X 协议中的打包、解包等操作。所以平时基于 Qt 等框架开发应用的时候，无需理会 X server 的存在。

XLib 就是 C Language X Interface 客户端的 C 语言接口库，它封装了 X 协议，并对应用程序提供方便使用的 API。使用 X-Lib，应用程序不用直接向服务器发送请求与处理回复。

在 Windows 10 中，可以通过 WSL 提供的运行环境安装和运行 X Windows，常用的 X Server 有 Xmanager, Xming, VcXsrv 等：

- Xmanager 是商业软件，需要付费。
- Xming 是开源软件，从 2007 年最后一个免费版本 (6.9.0.31) 之后，就需要捐助才能下载。
- VcXsrv 为开源免费软件，使用方式及界面与 Xming 极为相近。

在 WSL 安装 xfce desktop 这个软件在后台运行就可以提供 Linux 的图形界面，它的优点是轻量、美观、占用系统资源少：

    sudo apt-get install xfce4-terminal
    sudo apt-get install xfce4

在 Windows 系统安装 VcXsrv 后，开始菜单里现在出现了一个文件夹 VcXsrv，选择里面的 **XLaunch**，一路选择下一步即可。

安装 xfce 后，退出 WSL 系统，再重新进入执行 xfce4-session 或者 startxfce4，**XLaunch** 窗口就会有图形界面。

可以将默认显示器配置写入配置文件：

    echo "export DISPLAY=:0.0" >> ~/.bashrc

    echo "export DISPLAY=192.168.0.97:0" >> ~/.bashrc

Ubuntu 默认源速度如果缓慢，可以切换到阿里源，使用 vim 编辑源配置：

    sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
    sudo vim /etc/apt/sources.list

先备分配置文件，再将配置文件中的内容替换：

- cn.archive.ubuntu.com ---> mirrors.aliyun.com
- security.ubuntu.com ---> mirrors.aliyun.com

vim 的替换 substitute 命令 `:s` 用来查找和替换字符串，语法如下：

    :{作用范围}s/{目标}/{替换}/{替换标志}
    
    :%s/cn.archive.ubuntu.com/mirrors.aliyun.com
    :%s/security.ubuntu.com/mirrors.aliyun.com

保存并退出，执行一下以下代码更新软件包到最新状态。

    sudo apt update
    sudo apt upgrade

安装中文语言包

    sudo apt install language-pack-zh-hans language-pack-zh-hans-base

设置本地化环境变量

    echo "LANG=zh_CN.UTF-8" >> ~/.profile

中文输入法

    sudo apt install fcitx fcitx-pinyin
    echo -e "export XMODIFIERS=@im=fcitx\nexport GTK_IM_MODULE=fcitx\nexport QT_IM_MODULE=fcitx\n" >> .profile



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

