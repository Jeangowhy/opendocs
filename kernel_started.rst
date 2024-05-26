Getting Started Linux kernel Programming
========================================

   *  `kernel_started <https://github.com/Jeangowhy/opendocs/blob/main/kernel_started.rst>`__
   *  `hi_kernel <https://www.github.com/jimboyeah/demo/tree/hi_kernel>`__

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

   前几天重看了一遍《功夫》，没想到这片已经是二十年前的作品了！最精彩的部分我认为是天残地缺与三大高手
   对战的桥段，这三大高手在前面一直在铺垫段位关系，并且这种铺垫在整片持续进行，以突出人物的功夫境界。
   段落高潮在于第三个，通过中国古典音乐将中国传统舞台剧与刀枪棍棒完美融合在一起，全是暴力美感与艺术。
   五郎八卦棍阿鬼死前说了一句：“能力越大，责任就越大，你避不了。What are you parepared to do?”
   我想到要给这篇 VSCode Insideout 起个中文名《八戒，听说你想学 VSCode？让为师教你啊！》

   如果你还没有自己的数字图书馆，那么请阅读这篇教程，也许可以帮助你在学习道路上借力先进的电子工具：
   `论 《Intel 80386 CPU 编程手册》与私有电子图书馆建造 <https://github.com/Jeangowhy/opendocs/blob/main/mcu/Intel_80386_manual.md>`__

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
      strstream (char*)        sstream (std::string)
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

   What are you parepared to do?