Getting Started Linux kernel Programming
========================================

   *  `kernel_started <https://github.com/Jeangowhy/opendocs/blob/main/kernel_started.rst>`__
   *  `hi_kernel <https://github.com/jimboyeah/demo/tree/hi_kernel>`__

   此代码仓库为 Linux Kernel 学习之用，Kernel 包含的代码经过数十年的积累的庞大代码库，
   学习它不必强求全面，每个人的精力有限，可以挑选此感兴趣的功能部分进行研究。这本身也不是
   简单的事，为了可以顺利进行 Kernel 功能模块的的学习，要求有一定的 C/C++ 语言基础，
   并且需要有良好的数据结构与算法基础，要熟悉各种树状数据结构的特点、优劣面，以及其常用操作。

   并且需要掌握 GCC/LLVM 等编译器的使用，编写代码的过程中，还会需要使用 GDB 等调试工具。

   LLVM 为了方便 GCC 用户迁移到 Clang，设计考虑到与 GCC 的兼容，编译驱动（Compilation Driver）
   或语言特性都有对应的参照物，以下是 LLVM 标准编译驱动名称与 GCC 对照关系：

   - ``clang`` for the ``gcc`` driver (used to compile C programs)
   - ``clang++`` for the ``gxx`` driver (used to compile C++ programs)
   - ``clang-cpp`` for the ``cpp`` driver (pure preprocessor)
   - ``clang-cl`` for the ``cl`` driver
   - ``flang`` for the ``flang`` driver
   - ``clang-dxc`` for the ``dxc`` driver

   LLVM 编译器三层架构设计中，Clang 本身工作只包括前端部分，整个编译流程包括以下主要步骤：

   - **Preprocessor**: 执行 C 语言预处理，展开 #includes 和 #defines 等宏指令。
      使用 ``Clang -E``  命令完成这个步骤就停止。
   - **Parsing**: 源代码词法解析（parses）与语法分析（semantically analyzes）。
      生成中间阶段的抽象语法树 Abstract Syntax Trees (AST)。以及，根据不同输入生成：
      precompiled header (PCH), preamble, or precompiled module file (PCM)。
      使用 ``clang -precompile``  命令完成这个步骤就停止，这是处理输入为头文件的默认行为。
   - **IR generation**: 源代码转换为中间层表示，主要是方便对代码做优化工作。对于 Clang，中间代码就是 LLVM IR。
      使用 ``clang -emit-llvm `` 命令产生中间代码，配合 -S 输出文本，否则输出字节码。
   - **Compiler backend**: 编译器后端将中间代码转换为目标机器汇编代码。
      使用 ``clang -S``  命令生成汇编代码，然后停止后续步骤。
   - **Assembler**: 汇编程序将汇编代码转换为机器码对象文件，包含特定机器可以直接执行的指令。
      使用 ``clang -c`` 生成机器码对象文件，然后停止后续步骤。
   - **Linker**: 链接程序将多个对象文件链接成为一个映像（可执行文件或者共享库）。

   如果对操作系统硬件底层有兴趣，那么法布里斯·贝拉 (Fabrice Bellard)所编写的 `QEMU <https://www.qemu.org>`__
   模拟器将是你的得力助手，底层开发者用过都说离不开它。 

   如果你还没有自己用得顺手的开发工具，那么我建议使用 VS Code，这里有一篇专为你订制的教程：
   `VSCode Insideout <https://github.com/Jeangowhy/opendocs/blob/main/VSCode_Insideout.rst>`__

   LLVM 是革新的编译器构架，目前编译器领域的领跑者，关于 LLVM 编译器的使用在此文档有较详细的介绍。

   前几天重看了一遍《功夫》，没想到这片已经是二十年前的作品了！最精彩的部分我认为是天残地缺与三大高手
   对战的桥段，这三大高手在前面一直在铺垫段位关系，并且这种铺垫在整片持续进行，以突出人物的功夫境界。
   段落高潮在于第三个，通过中国古典音乐将中国传统舞台剧与刀枪棍棒完美融合在一起，全是暴力美感与艺术。
   五郎八卦棍阿鬼死前说了一句：“能力越大，责任就越大，你避不了。What are you parepared to do?”
   我想到要给这篇 VSCode Insideout 起个中文名《八戒，听说你想学 VSCode？让为师教你啊！》

   如果你还没有自己的数字图书馆，那么请阅读这篇教程，也许可以帮助你在学习道路上借力先进的电子工具：
   `论 《Intel 80386 CPU 编程手册》与私有电子图书馆建造 <https://github.com/Jeangowhy/opendocs/blob/main/mcu/Intel_80386_manual.md>`__

   关于如何学习 Linux 内核的方法，肯定过来人都有自己的方法，有人用苦法，有人用甜法，我用兴趣导向的
   闭眼摸象法。古人曰盲人摸象，形容不同人对一件宏大事物的偏见。现今 Linux Kernel 无疑就是一头特别
   巨大的象，很多人想摸透它。在我看来，它不仅仅是头大象，摸透它就可以站在巨人的肩膀，这肩膀的高度
   是数百万人积累了几十年的高度。

   研究任何一件巨物，起步阶段必然经历“盲人摸象”的困境，认知就像电容两端的电压，不可突变。这个阶段
   必然是由局部开始，可以是一个兴趣点或者是一个技术点，而我的正式计划研究 Linux Kernel 是在接触
   到了源代码 Documentation 目录的文档资源，以及在 Windows 使用终端遇到 ioctl 警告问题而致。
   所以此代码库的首个 k0001 就是为学习源代码的错误码而创建的。这就是开端，错误码的学习就是一个技术点，
   随着一个个这样非常小型的问题解决，最终会慢慢拓展你对整个 Linux Kernel 的认知水平的全面提升。
   反而那种一着手就想着吃透 Linux 整个原代码的行动力反而极为脆弱，一遇难题就无法进展下去。反而，
   怀着一颗敬畏之心，切勿想着几个月、几年就想把整整几百万人几十年的积累啃个透彻，这真的太难了，又不
   是神人，何来这种壮志雄心！

   这里有一份 `Linux Distributions Timeline <pictures\ldt_v22.10.svg>`__，光是看这
   几十年 Linux 的版本分叉发展就让人头皮发麻，更何况要吃透拥有 1GB 数据量的源代码仓库的文件。
   可以找找看自己的主机安装的 Linux 发行版本是那个分支衍生出来的。

   学习过程中遇到问题是肯定的，甚至靠个人无法解决的问题也会很多，即使代码仓库已经提供了非常丰富的
   开发者文档。但是，好在有个好老师：历史。Linux 的发展历史会揭示很多问题的潜在答案，所以在遇到
   问题的时间，可以花点时间探索一下历史上是如何解决类似问题的，或者是如出于何种考虑引入的技术、或
   解决方案。

   Linux Kernel 一般学习方法：

   *  前置基础：计算机硬件体系结构、操作系统理论、数据结构与算法、C 语言（主要编程语言）和一些 C++ 基础。
      -  算法导论：Algorithms, 4th Edition by Robert Sedgewick and Kevin Wayne
      -  `MIT 6.828: Operating System Engineering <https://pdos.csail.mit.edu/6.828/2016/index.html>`__
      -  C98 权威教材： The C Programming Language 2nd Edition By Brian W. Kernighan and Dennis M. Ritchie. 
      -  C98 参考材料：`重读 The C Programming Language <./cpl.md>`__
      -  C11 规范基础教材：`C Primer Plus, 6th Edition by Stephen Prata <C_Primer_Plus_6th.rst>`__
      -  可选参考材料： ISO IEC 98992011 - C11 编程语言规范。
      -  在线参考文档： `cppreference.com <https://en.cppreference.com/w/c>`__
      -  选读最新 C++23 教材： Professional C++ 6th Edition by Marc Gregoire
      -  https://gustedt.gitlabpages.inria.fr/modern-c/
      -  https://inria.hal.science/hal-02383654/file/ModernC.pdf

   *  形成操作系统整体基础轮廓：进程调度、内存管理、I/O 处理、驱动模型，开始写一些简单的内核模块，
      比如 Char Drivers 字符驱动等。配合驱动开发相关教材：

      -  Linux Device Driver Development 《Linux 设备驱动开发》
         https://www.oreilly.com/library/view/linux-device-driver/9781803240060/
      -  Linux Device Drivers 《Linux 设备驱动程序》
         https://www.amazon.com/Linux-Device-Drivers-Kernel-Hardware-ebook/dp/B0026OR2XQ
      -  Linux Kernel Development 《Linux 内核设计与实现》
         https://www.amazon.com/Linux-Kernel-Development-Developers-Library-ebook/dp/B003V4ATI0
      -  Understanding the Linux Kernel 《深入理解 Linux 内核》
         https://www.amazon.com/Understanding-Linux-Kernel-Process-Management-ebook/dp/B0043D2E54

   *  着手开发具体的系统应用，解决实际工作中的问题，或者实现自己的软件产品。这个过程将会遇到
      大量棘手问题，而这些问题将在未来直接将你的 Linux Kernel 研究水平推上新的台阶。你遇到
      的问题可能涉及多个子系统（进程、内存、I/O、驱动），但是不要急躁，慢慢解决问题，逐步解决。
      即使暂时解决不了也没关系，相信我，你可以去睡大觉，我是认真的，只有在充足的休息后，大脑才
      能量、才能更专注地研究 Kernel，或者做阅读。尽量拓展阅读量、动手尝试写代码加深对知识的理解。

   MIT 6.828: Operating System Engineering 公开课包含的资源对于研究操作系统入门有相当大的
   指导作用。全美大学一般入门课程编号是 101，这个课程编号来看应该是研究生课程。课程中使用的教学用
   操作系统是根据 Dennis Ritchie 和 Ken Thompson 二人实现的 Unix Version 6 (v6) 重新
   实现的 xv6，代码仓库文件数量 99 个，包括脚本。课程配置 6 个核心实验，涵盖操作系统的核心功能：

   *  Lab 1: Booting a PC
   *  Lab 2: Memory Management
   *  Lab 3: User Environments
   *  Lab 4: Preemptive Multitasking
   *  Lab 5: File system, Spawn and Shell
   *  Lab 6: Network Driver (default final project)
   *  Lab 7: Final JOS project

   用户实验的代码仓库使用实验编号创建分支，每个分支随着实验涉及的功能不断增加代码，这些分支只
   包含当前实验涉及功能的实现代码。目的是减小整个 Xv6 代码量带来的压力，因此实验用的操作系统
   又称为 Joy OS。此课程教学用操作系统源代码参考了多个开源操作系统代码，可以从以下链接获取：

   ::

       JOS (asm.h, elf.h, mmu.h, bootasm.S, ide.c, console.c, and others)
       Plan 9 (entryother.S, mp.h, mp.c, lapic.c)
       FreeBSD (ioapic.c)
       NetBSD (console.c)

   ::

      # Xv6, a simple Unix-like teaching operating system
      git clone git://github.com/mit-pdos/xv6-public.git

      # JOS, Joy OS for Labs
      git clone https://pdos.csail.mit.edu/6.828/2016/jos.git/


   阅读必需要大量、高速地进行，不要想着拿着一本书从头读到尾，这是最低效能的读书方式。因为，每个写书
   的人拥有的知识和阅读者之间是不对等的，而也不可能根据每个读者的基础定制合适难题的文字编排，更糟糕
   的是写作者有些默会知识，其本人通常不会无意识地讲授，而这些知识的缺失极有可能就是导致你理解困难的
   关键！正确的方法应该是快速泛读、积极地为每个 Kernel 模块建立初步印象，这个步骤的工作我称之为
   大脑知识网络索引系统，它会在某一天遇到问题时起作用。

   人类大脑的工作模式决定了学习这件事不是轻而易举可以获得，大脑对短时接触到的东西，并不会分配大量的
   大脑皮层工作去作永久的记录，而暂时保管在海马体。在经过频繁、多次数的重复后，海马体中的临时记忆会
   逐渐在皮层发展出记忆神经网络，并随着重复的时间、次数的保持而丰富记忆神经网络。

   大脑中的记忆不是单独的信息，是富有联系的信号的叠加，这些叠加的成分可以是温度、情绪感觉，视觉、
   想象、触觉、味觉等等可以输入大脑中的信号，当某些信息的记忆网络越丰富，那么记忆就越牢固。这种
   现象就好像大脑在给某种信息做了一个大型的信息索引。因此，古人所说的“一目十行”并不是务虚，
   而是非常有效的学习指导。现代英语专业的泛读课程就有这种指导思想的影子：尽量快速的接触大量的
   新鲜信号，并且按经验以适当的周期重复这些信号，并且可以配合不同的环境进行，以求尽量形成丰富的
   有联系的记忆网络。这里使用信号指大脑接收到的各种感官传导到大脑的信号，不特指文字信息。
   这个重复的过程并不是机械的，而需要有深度的重试，并且要尝试解决这个过程中出现的一些难题。

   这种方法中的要素有以下几个：

   *   大量新新鲜信号，刺激海马体，形成短期记忆；
      这时不求甚解，因为就算是盯着一个字看，大脑也不会因为你花了一个小时、两个小时而永远记得它。
      这与大脑皮层物质结构（记忆网络）的改变有直接关系，不能一蹴而就。而是提高数量，以求远期的高效率；

   *   选择合适的难题，不要刻意求深度，而忽视自己的能力基础。
      大量的难题意味着它们彼此几乎没有任何联系，这一点直接与记忆需要联系相违背。

   *   要尝试解决遇到的难题，不要回避。
      新的难题可能意味着突破，是形成新知识的关系所在。在合适难度的基础上，攻克难题就是最大的收获。

   总之，一目十行的奥义在于：在一本书的角度看，一字一词一句的意义其实并没那么紧要，同样，
   一文一书一说在人生之中其实也并没有那么重要。特别是在信息泛滥的时代，更要以“一目十行”的效率
   过滤掉那些“糟糕的信息垃圾”。这里的糟糕引号意味和“汝之蜜糖，彼之砒霜”含义相似，不同的东西
   对不同的人功用是不相等的，即使是同一物品在人生的不同时期的功用亦不相同。

   在编译代码过程中，会遇到各种各样的问题，需要尽可以地利用编译器、调试器来解决问题。比如，字符串，
   如果在代码中引用了标记为弃用的功能，将会收到警告信息，要定位警告来源，就需要利用以上的编译流程，
   通过格检查预处理生成的代码、汇编代码等等来解决问题。

   C++ 有两种字符串流（数组 I/O 流）： ``<strstream>`` 和 ``<sstream>``，它们实现的功能上基本一致。

      =======================  ======================
      strstream (char\*)        sstream (std::string)
      =======================  ======================
      class strstreambuf;      class stringbuf;
      class istrstream;        class istringstream;
      class ostrstream;        class ostringstream;
      class strstream;         class stringstream;
      =======================  ======================

   它们的主要差别在于一个基于 C 类型字符串，另一个更规范地使用 std::string 实现。str() 方法
   返回的数据类型不同：

   - ostrstream::str() 返回的是 char* 类型的字符串
   - ostringstream::str() 返回的是 std::string 类型的字符串

   一般情况下编写 C++ 程序推荐使用 std::string 类型的字符串。strstream 虽仍然是 C++ 语言标准，
   但已被标记为 “deprecated”，如果引用它，编译还会给出警告信息：

   .. code-block:: bash

      $ g++ -H src/x0000-diff-ccpp.cpp
      ...
      . /usr/include/c++/9/backward/strstream
      .. /usr/include/c++/9/backward/backward_warning.h
      In file included from /usr/include/c++/9/backward/strstream:50,
                     from src/x0000-diff-ccpp.cpp:15:
      /usr/include/c++/9/backward/backward_warning.h:32:2: warning: #warning This file includes at least one deprecated or antiquated header which may be removed without further notice at a future date. Please use a non-deprecated interface with equivalent functionality instead. For a listing of replacement headers and interfaces, consult the file backward_warning.h. To disable this warning use -Wno-deprecated. [-Wcpp]
      32 | #warning \
         |  ^~~~~~~

   一直以来，Kernel 代码全是纯 C 语言风格编写，因为 Linux 诞生之初 C 语言已经伴随 Unix 系统
   发展了 20 年并成为最成熟的系统开发语言。Linux 系统诞生于 1991 年芬兰，由 Linus Torvalds
   本人在一封主题为《关于我的新操作系统的小型民意调查》电邮公开其原型代码，系统借鉴 UNIX 的变体
   MINIX 系统。

   自从 Dennis 创建 C 语言，它的发展大概分为产生和繁荣两个主要历史时期：

   1969-1970 年，Tompson 在 BCPL 语言上创造 B 语言。
   1971-1977 年，Ritchie 改造 B 语言增加数据类型创造了 C 语言，伴随 Unix 产生而产生。
   1977-1979 年，C 语言伴随 Unix 移植性需求而繁荣发展。

   Ken Thompson 与 Dennis M. Ritchie 这对好基友都是图灵奖获得者。

   1979 年，本贾尼·斯特劳斯特卢普（Bjarne Stroustrup）来到 AT&T 贝尔实验室从事 C 语言改良
   工作，并给成果取名 C with classes。1983 年，该语言被正式命名为 C++。1989 年开始 C++ 
   标准化工作，并联合 ANSI 和 ISO 国际标准化组织成立标准化委员会。

   2018 年 4 月 1 日，Andrew Pinski 提议将 Linux 内核源码转为 C++，出于以下优点考虑：

   1. 内联模板函数，使得诸如 cmpxchg() 和 get_user() 这样的功能的实现更加清晰。
   2. 内联重载函数，使得诸如 static_branch_likely() 这样功能的实现更加清晰。
   3. 类继承。例如，所有那些需要包含基本 inode 结构并且必须通过更规范方式访问 inode 封装器。

   2024 年 1 月 9 日，Linux 基金会技术顾问委员会成员、长期从事 Linux 内核开发的 H. Peter Anvin
   写了一篇长长的 LKML（Linux Kernel Mailing List，Linux 内核邮件列表）帖子，其认为
   「现在是 Linux 内核从 C 语言转向 C++」的正确时机。
   
   另外还有陈述了不选用 Rust 的原因，相比之下，C++ 语法更加熟悉，而且通过一些清理，现有的 C 语言
   代码可以逐步转换为 C++。作者认为 Rust 的语法不仅不必要，而且内核开发人员需要花费大量时间来适应。

   一切事件都在运动，即使是死尸也一样，只不过它在腐败中成为其它物体的养料。新的 C++20（23）规范
   确实是主要的游戏规则改变者，从其引入模块化、协程来看，推进力量不小。还有元编程的便利性，从泛型
   (Generics)时代进化到元编程 (Metaprogramming)。

   为了编写这件文档，我又翻了一下 Just for Fun 中文版，里面提到：

      看起来比尔.盖茨并不理解这点。可能他现在被他自己在 1976 年所提出的一个令人不愉快的
      带修辞的问题所困惑：“你所需要做的一件事，就是防止别人写也好的软件。谁能够毫无报
      酬地做一项专业工作呢？”他在公开源代码程序员们写的一封信中再次提出了这一观点。

   这就是为何，我更喜欢开源的动力。开源，我好喜欢！❤💻👊

   What are you parepared to do?


/G0001 Manual Pages and Vim
===========================

vim [arguments] -               read text from stdin

   Linux 自带 man pages 手册文档，包含命令手册、System Calls 以及 Linxu Programmer's Manual
   等等日常帮助资料。根据 GNU Coding Standards 所述，Man Page 是 GNU 项目的备选文档，不是
   必要的。作为旧的文档系统，Man 手册结构比起 Texinfo 差了不止一个层次，没有索引，基本上也没有
   目录。新文档格式使用参考 `texinfo <info\texinfo.info>`__。

   好在 man 文档本身的结构规范约束，使得 man pages 阅读起来也相当整洁。``man`` 命令本身是一个
   简单的排版工具，它将 man.N 文档格式化排版后，N 是一组数字，用于划分文档的归类：

   1.  Executable programs or shell commands
   2.  System calls (functions provided by the kernel)
   3.  Library calls (functions within program libraries)
   4.  Special files (usually found in /dev)
   5.  File formats and conventions eg /etc/passwd
   6.  Games
   7.  Miscellaneous  (including  macro  packages  and  conventions), e.g. man(7), groff(7)
   8.  System administration commands (usually only for root)
   9.  Kernel routines [Non standard]

   但是 man pages 阅读有个问题是就是不能使用 / 按键进行全文搜索，虽然可以通过 man 命令搜索整个
   文档数据中的关键字，但是并不及当前文档的全文搜索方便。为此可以将 man 命令格式输出的文档通过管道
   导向 vim 编辑，它的正则搜索功能是全面。如果直接使用管道命令，会导致 vim 错误并立即退出，应该
   使用 ``vim -`` 命令形式读取 stdin，这是最标准的操作，也可以使用临时文件、或者 /dev/stdin
   设备文件等等，但还是 Vim 命令形式最便利，Sublime Text 提供的 subl 命令工具也是模仿的 Vim。
   打开 Vim 后就可以按 / 进行全文正则搜索，按 ``n`` 向前搜索，``N`` 向后搜索，非常方便：

   .. code-block::bash

      $ man munmap | vim
      Vim: Error reading input, exiting...
      Vim: preserving files...
      Vim: Finished.

      $ man munmap >/tmp/manpage; vim /tmp/manpage
      $ man munmap | vim /dev/stdin
      $ man munmap | vim -
      Vim: Warning: Input is not from a terminal


/k0001 Generic errors message
=============================

https://vscode.dev/github/mit-pdos/xv6-public/blob/master/syscall.c