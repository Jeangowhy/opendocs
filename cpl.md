
# =🚩 The C Programming Language
- The C programming Language https://cs.nju.edu.cn/gchen/teaching/np/kernighan-ritchie/kandr.html
- 保持简单----纪念丹尼斯•里奇（Dennis Ritchie） http://www.ruanyifeng.com/blog/2011/10/dennis_ritchie.html
- Kernighan《UNIX 传奇：历史与回忆》杂感 https://www.cnblogs.com/Solstice/p/unix_bwk.html
- Unix版权史 https://www.ruanyifeng.com/blog/2010/03/unix_copyright_history.html
- Unix 操作系统演进简史 https://www.sohu.com/a/332185684_632967
- The Unix Tree https://www.tuhs.org/cgi-bin/utree.pl
- Dennis' Unix v6 https://minnie.tuhs.org/Archive/Distributions/Research/Dennis_v6/
- Computer Simulation and History http://simh.trailing-edge.com/
- The Evolution of the Unix Time-sharing System https://www.bell-labs.com/usr/dmr/www/hist.html
- MIT 6.828: Operating System Engineering https://pdos.csail.mit.edu/6.828/2018/schedule.html
- COS 333: Advanced Programming Techniques https://www.cs.princeton.edu/courses/archive/spring19/cos333/
- CS 144: Introduction to Computer Networking https://cs144.github.io/
- Life With Unix: A Guide for Everyone https://www.tuhs.org/Archive/Documentation/Books/Life_with_Unix_v2.pdf
- Distributed Systems with Node.js Thomas Hunter Ii https://book4you.org/book/8496883/e8268b
- Distributed systems: concepts and design Coulouris, George F https://book4you.org/book/5902087/d2300a
- 重读 The C Programming Language https://zhuanlan.zhihu.com/p/379408556

C 语言并不是一开始就像今天这么繁荣的，从硬件系统底层，到高级操作系统开发，到处都有它的影子。

自从创建 C 语言，它的发展大概分为产生和繁荣两个主要历史时期：

- 1969-1970 年，Tompson 在 BCPL 语言上创造 B 语言。
- 1971-1977 年，Ritchie 改造 B 语言增加数据类型创造了 C 语言，伴随 Unix 产生而产生。
- 1977-1979 年，C 语言伴随 Unix 移植性需求而繁荣发展。

Ken Thompson 与 Dennis M. Ritchie 这对好基友都是图灵奖获得者。

时间回到 1970 年，最初由 Ken 个人在 PDP-7 小型机上开发了一个操作系统叫做 Unics，虽说是小型机，但也需要一整个房间才能放下。后来 Ken 邀请 DMR 在 PDP-11 机器上重写整个系统，并改名为 Unix，早期的代码还以他们二人名字作为代码目录分开管理，可以在 The Unix Tree 站点上查看。使用的语言是 Dennis 在 Basic Combined Programming Language(BCPL) 基础上，改进的一种新的高级语言。这个语言将 BCPL 语言进行了升级，也就是现在的 C 语言。

Unix 和 C 诞生，并且完美地结合成为一个统一体，C 与 Unix 很快成为世界的主导，计算机的历史大发展才开始。而它们留给后人的核心思想就是 K.I.S.S - Keep It Simple & Stupid!

时间倒回 Unix 诞生前两年，1968 年，在贝尔实验室计算机研究小组工作的 Ken 和他的同事们为 MULTICS (Multiplexed Information and Computing System) 项目埋头苦干。MULTICS 是一个超前的计算机环境，是一个全面的，通用编程系统。作为一个研究项目，它走错了进化的岔路，提供的功能过于复杂，需要大量的计算资源。生产版本太沉重，速度太慢，最初的设计在实施过程中不得不缩减，最终被迫叫停，并间接成为全身都渗透着简洁理念的 Unix 的催化剂。

贝尔实验室在 1975 年发布 UNIX V6 之后，于 1979 年又发布了 UNIX V7。加州大学伯克利分校于 1978 年发布了以 UNIX V6 为基础的 BSD 的首个版本。在此之后，UNIX 和 BSD 不断有新版本或派生版本出现。然后又出现了标准化的动向，制定了 POSIX 标准，意在统一各个操作系统所提供的 API，因此，大多数新操作系统都和 UNIX V6 有着千丝万缕的联系。著名的 Linux 也是将 POSIX 标准作为开发目标的，兼容 Unix 系统，并实现了接替 Unix 成为当下主流开源操作系统。

C 语言的成功伴随 Unix 操作系统的盛行，然而在 20 世纪 70 年代，AT&T 公司注意到下属的贝尔实验室的 Unix 所带来的商业价值，并使用一些手段来保护 Unix，为了规避垄断而自主禁入计算机软件领域也要达到商业化 Unix 源代码的目的。在专利保护的影响下，包括之前通过许可证方式教学使用的 Unix 源码都受到极大的影响，从而限制了 Unix 的发展。在 20 世纪 80 年代，Unix 发展出两个最主要的版本，基于大学教学目的开源 BSD UNIX 和基于商业目的闭源 AT&T Unix。

Sun Microsystems 公司基于 BSD UNIX 开发出 SunOS 即后来现在的 Solaris 工作站。AT&T 的 Unix System V 的第一版最终也造就了 IBM 的 AIX 和 HP 的 HP-UX。

现在去钻研为古代机器实现的 Unix 源码还不如研究 MIT 6.828 课程，MIT 在 x86 上重新实现的 xv6，代码量约一万行，简化以突出重点，学习的性价比较高。

课程中使用了两个用于教学的 Unix-like 操作系统，Xv6 和 JOS，而 JOS 是在 Xv6 的基础上改写，让我们能在其上进行实验的 OS，可以将 JOS 看作 Unix 的精简教学版本。所以，可以将 Xv6 看作是更完整的版本，其名字来源于 Lions' Commentary on UNIX' 6th Edition，也可以在课程网站上下载《莱昂氏UNIX源代码分析》这本书的电子版。

为了使用精简指令集用于教学目的，在 2019 年后的课程开始使用最新的 RISC-V 架构版本，另外早前的 x86 架构版本也可以在 mit-pdos 仓库上找到。

ANSI C 和 ISO C 标准化

在 C 语言高速发展时期，从大型主机到小型微机，衍生了 C 语言的很多不同版本。

为统一 C 语言版本，1983 年美国国家标准局 ANSI - American National Standards Institute 成立了一个委员会，来制定 C 语言标准。1989 年 C 语言标准被批准，被称为 ANSI X3.159-1989 Programming Language C。第一个版本的 C 语言标准通常被称为 ANSI C。又由于这个版本是 89 年完成制定的，因此也被称为 C89。

后来 ANSI 把这个标准提交到 ISO 国际化标准组织，1990 年被 ISO 采纳为国际标准，称为 ISO C。又因为这个版本是 1990 年发布的，因此也被称为 C90。

ANSI C(C89) 与 ISO C(C90)内容基本相同，主要是格式组织不一样。看到 ANSI C、ISO C、C89、C90，要知道这些标准的内容都是一样的。

2011年12月8日，ISO 又正式发布了新的标准，称为 ISO/IEC9899: 2011，简称为 C11。

目前，几乎所有的开发工具都支持 ANSI/ISO C 标准，是 C 语言用得最广泛的一个标准版本。

在 ANSI C 标准确立之后，C 语言的规范在很长一段时间内都没有大的变动。1995 年 C 程序设计语言工作组对 C 语言进行了一些修改，成为后来的 1999 年发布的 ISO/IEC 9899:1999 标准，通常被成为 C99。

但是商业公司对 C99 的支持所表现出来的兴趣不同，GCC 和其它一些商业编译器支持 C99 的大部分特性的時候，微软和 Borland 却没有什么动作。

GCC - GNU Compiler Collection 编译器套件作为 GNU 工程开发的支持多种编程语言的编译器，在 C 言语标准的支持上一直走在前面。

例如，GCC 9.3.0 支持以下标准，使用 `gcc -v --help` 可以查询当前版本支持的标准：

|       Standard      | 9.3 | 8.1 | 5.3 |                     Note                     |
|---------------------|-----|-----|-----|----------------------------------------------|
| -std=c11            | ✅ | ✅  | ✅ | ✓ ISO 2011 C                                 |
| -std=c17            | ✅ | ✅  | ❌ | ✓ ISO 2017 C (2018)                          |
| -std=c18            | ✅ | ✅  | ❌ | ✓ ISO 2017 C (2018)，同 `-std=c17`           |
| -std=c1x            | ✅ | ✅  | ✅ | ✗ 弃用，`-std=c11` 替代，同 `-std=c11`       |
| -std=c2x            | ✅ | ❌  | ❌ | ✓ ISO 202X C 标准草案 [体验]                 |
| -std=c89            | ✅ | ✅  | ✅ | ✓ ISO 1990 C 标准，同 `-std=c90`             |
| -std=c90            | ✅ | ✅  | ✅ | ✓ ISO 1990 C                                 |
| -std=c99            | ✅ | ✅  | ✅ | ✓ ISO 1999 C                                 |
| -std=c9x            | ✅ | ✅  | ✅ | ✗ 弃用，`-std=c99` 替代，同 `-std=c99`       |
| -std=iso9899:1990   | ✅ | ✅  | ✅ | ✓ ISO 1990 C 标准，同 std=c90                |
| -std=iso9899:199409 | ✅ | ✅  | ✅ | ✓ ISO 1990 C as amended in 1994              |
| -std=iso9899:1999   | ✅ | ✅  | ✅ | ✓ ISO 1999 C 标准，同 std=c99                |
| -std=iso9899:199x   | ✅ | ✅  | ✅ | ✗ 弃用，`-std=iso9899:1999` 替代，同 std=c99 |
| -std=iso9899:2011   | ✅ | ✅  | ✅ | ✓ ISO 2011 C 标准，同 std=c11                |
| -std=iso9899:2017   | ✅ | ✅  | ❌ | ✓ ISO 2017 C (2018)，同 `-std=c17`           |
| -std=iso9899:2018   | ✅ | ✅  | ❌ | ✓ ISO 2017 C (2018)，同 `-std=c17`           |

1983年，贝尔实验室的 Bjarne Stroustrup 在 C 语言基础上推出了 C++，进一步扩充和完善了 C 语言，是一种面向对象的程序设计语言，但是这种扩充也使得 C++ 成为历史上最最最难搞的语言。

C++ 程序过于复杂和庞大，并且消费电子产品所采用的嵌入式处理器芯片的种类繁杂，如何让编写的程序跨平台运行也是个难题。为了解决困难，Sun 公司研发人员并没有开发一种全新的语言，而是根据嵌入式软件的要求，对 C++ 进行了改造，去除了留在 C++ 的一些不太实用及影响安全的成分，并结合嵌入式系统的实时性要求，开发了一种称为 Oak 的面向对象语言，后来发展成为 Java 语言，作者是 James Gosling。

一般而言，C，C++，Java 被视为同一系的语言，它们长期占据着程序使用榜的前三名。

计算机程序是个大世界，各种语言只是一个交流工具，所以，不同语言必然存在沟通交流的现象。不管理是从语言能力上的借鉴、还是代码层面上的相互通信都是常见现象，例如，在 C 语言代码中嵌入更底层的汇编指令，就可以做一些高级语言上不方便操作的能力，如设备驱动的开发、关键代码的优化。再者，不同语言的发展过程中，出现某些特别好用的模块，需要在另一种语言上面借用，就需要通过 ABI - Application Binary Interface 进行调用。比如，不同语言编译出来的动态链接库，由其它语言进行共享使用，这就是最常见的 ABI 使用场景。而模块化是所有编程语言的最基本的代码组织形式，这些模块暴露出来的供用户使用的接口就叫 API - Application Programming Interface。ABI 和 API 是两个最基础的编程概念，但编程语言教材未必会讲。

在谈论标准时，更多是基于操作系统及计算机结构本身来制定的，在操作系统有标准之前，怎么实现是各个系统自己的事。当有了标准之后，不同系统遵循同样的规范，则更能形成一个大的生态环境，POSIX - Portable Operating System Interface of UNIX 作为最成功的移植操作系统接口规范，依赖这个接口标准开发出来的程序就具有非常高的移植特性，在 Unix/Linux 系统基本可以通行。

从计算机结构上讲，程序的标准化则更多是硬件结构的标准，最直接的体现就是在输入输入上，几乎所有软件都需要输入、输出，所以为程序设计基本的 I/O 框架的就是事实的标准。至于，是从鼠标还是键盘输入，输出到屏幕还文件，又或者输出到控制台，这都是标准之下的不同选择。

另外一个很有意义的事，就是了解标准的库的架构思想，任何一门语言都不可能脱离基础库的支持，也没有任何一个人可以从零架构起完整的编程语言生态。基础库是集体众人的力量集成的而成，具有最最基础的支撑部分，基于这些基础开发应用程序。必需要理解，不同语言为何会提供千差万别的基础库，这就需要从语言工具这个角度来理解。每一门语言都有它的特长，适合干什么事配置相应的利器，这是很合理的。如何一门用于开发网络应用的言语，如 Golang，如果给它配置一些硬件底层开始需要用到的基础库，这显示不是那么的合适。

每一门语言所衍生出来的库，其重要性往往会远远超过该语言本身，深入理解那些可以提高生产效率的库，往往也是判断掌握一门语言的重要依据，这往往比学习语言本身更具有挑战性。

是否能对现有库进行二次改造就是对一门语言学习的最高评判标准！

C 语言的成功和教训：

- 成功：
    - C 基础上扩展产生了 Objective C，C++
- 争议：
    - 数组和指针的关系：尽管因为历史偶然性，导致很多被初学者难于理解
    - 对类型错误的容忍：尤其类型之间的转换，如整数和指针类型相互赋值
    - * 运算符导致在复杂场景下，需要括号才能被正确理解，如 int * fp(), int (* fp)()
    - 把数组当成指针不利于编译器的优化，如有指针参数的函数，此指针来源于数组，但是编译器很难对其优化。
    - 需要手工管理内存，并且对自动管理内存机制不友好。

The C Programming Language 一书作为最经典的教材，作者用简洁的语言阐述了简洁的 C 语言，可谓言简意赅。

并且，C 语言强大的底层能力让它可以与汇编指令一起工作，也可以为其它高级语言提供 ABI - Application Binary Interface 接口，即通过编译 C 语言的二进制程序供应其它语言使用，如 Java、Golang、Rust，甚至是脚本语言如 PHP，现在连 JavaScript 也可以通过 WebAssembly 使用 C 语言。

但是作为没有计算机编程经验的人来说，只靠这一本经典教材是不足完全精通这门涉及各个领域的核心极语言的，因为缺少外沿，但是对于一个经验丰富的开发者，对编程环境了解透彻，那么 The C Programming Language 这本不到 300 页还包含了标准库参考的小册子就成为了经典，因为没有累赘的言语。

另外，教材中多处使用各种算法来解析 C 语言的使用，这相当于画龙点睛，通常这些内容是数据结构与算法课程上的内容。

如果用一副战略地图来表示各种语言的联系，那么 C 语言就是最核心要塞，四通八达，是兵家必争之地。

The C Programming Language 教材两位作者都是贝尔实验室的研究员。

Brian W. Kernighan

贝尔实验室计算科学研究中心高级研究人员，著名的计算机科学家。他参加了 UNIX 系统、C 语言、AWK 语言和许多其他系统的开发，同时出版了许多在计算机领域具有影响的著作，The Elements of Programming Style, The Practice of Programming, The UNIX Programming Environment, The AWK Language, Software Tools。

Dennis M. Ritchie

作为 C 语言的开发者，Dennis M. Ritchie 1967 年加入贝尔实验室，他和 Ken L. Thompson 两人共同设计并实现的 C 语言改变了程序设计语言发展的轨迹，是程序设计语言发展过程中的一个重要里程碑。与此同时，他们两人还设计并实现了 UNIX 操作系统。正是由于这两项巨大贡献，Dennis M. Ritchie 于 1983 年获得了计算机界的最高奖——图灵奖。此外，他还获得了 ACM、IEEE、贝尔实验室等授予的多种奖项。

![Dennis M. Ritchie (1941/9/9 - 2011/10/12)](https://pic1.zhimg.com/80/v2-8c9522dfdb51dd5854ab37b538b057e4_1440w.jpg)

C 语言也贯彻了"保持简单"的原则，语法非常简洁，对使用者的限制很少。丹尼斯•里奇编写的教材《C编程语言》总共只有200多页，薄得难以置信。很多人都被它的简洁性吸引，学习并使用C语言。直到今天，C语言依然是世界上最重要的编程语言之一，"保持简单"原则显示了强大的生命力。

发明 Unix 和 C 语言，给丹尼斯•里奇带来巨大的荣誉，他得到了1983年的图灵奖、1990年的汉明奖、1999年的美国国家技术奖章。尽管功成名就，但是就像他的工程设计思想，丹尼斯•里奇在个人生活上也尽量"保持简单"。他依然住在新泽西，低调地生活，不太在媒体上曝光，终身没有结婚。

他一直在贝尔实验室工作，2001年，多次分拆后的贝尔实验室转移到朗讯公司名下，2006年12月1日，贝尔实验室被整体卖给了法国阿尔卡特公司，第二年他就选择退休了。

退休以后，他过上了隐居生活，外界几乎忘了他的存在。2011年10月12日，共事20年的同事Rob Pike从加州到新泽西去拜访他，才发现他已经去世了。由于是独居，无法知道准确的死亡时间。据他的兄弟透露，这几年丹尼斯•里奇的健康状况一直不好，他患有前列腺癌和心脏病。

Rob Pike 在 Google Plus 发了一条简短的消息，"据我所知，Unix 和 C 语言发明人丹尼斯•里奇已经去世"。


## ==⚡ ch1 - A Tutorial Introduction
- Code::Blocks The free C/C++ and Fortran IDE. https://www.codeblocks.org
- C99 - ISO/IEC 9899:1999 Programming languages — C https://book4you.org/book/931317/08fbbd
- C11 – ISO/IEC 9899:2011 https://book4you.org/book/2646095/b0aa1e
- C++强大背后 https://www.cnblogs.com/miloyip/archive/2010/09/17/behind_cplusplus.html
- Object-Oriented Programming With ANSI-C https://www.cs.rit.edu/~ats/books/ooc.pdf
- Object Oriented Programming in C http://ldeniau.home.cern.ch/ldeniau/html/oopc/oopc.html


第一个程序 helloworld.c 控制台程序，使用 printf 函数输出字符串到控制台：

要点：

- 引用标准库函数，使用尖括号，非标准头文件使用双引号；
- 定义 main 入口函数，完整签名`int main(int argc, char* argv[])`；
- 调用 printf 库函数打印字符串，使用格式化字符串；
- 使用转义字符，\n 表示换行符；
- 语句使用分号结束，花括号后面或引用头文件不需要；

```c
#include <stdio.h>

main()
{
    printf("Hello world\n");
}
```

C 语言入口函数参数为命令参数个数 argc 和各个参数内容 argv，它是一个字符串数组。

按照规范，5.1.2.2.1 Program startup 描述主函数有以下两种形式，像上面这种 `void main()` 其实是不严格的：

```c
int main(void) { /* ... */ }; // void 可以省略
int main(int argc, char *argv[]) { /* ... */ };
```

但是 main 函数最后的 return 语句是可以省略的，编译会自动提供 return 0，但是记住，只有 main 函数可以省略！


要编译一个 C 语言程序，编译器需要处理操作系统提供的复杂环境，规范文档 5. Environment 就是解析这部分内容的。一个程序运行时先由操作系统的程序加载器装入内存，程序结束时返回一个值给操作系统，通常是一个整数，0 代表正常结束。而 main 函数返回的值，通常是通过 EAX 寄存器返回，其实是由 C 语言的函数 `exit(main())` 返回给操作系统。

C 标准 ISO 规范命名参考：

- ISO/IEC 9899:1990 — C90
- ISO/IEC 9899:1999 — C99
- ISO/IEC 9899:2011 — C11
- ISO/IEC 9899:2018 — C18
- ISO/IEC 9899:202x — C2x 下一个版本的 C 标准，预计将于 2022 年 12 月 1 日完成。

使用 GCC 编译工具编译生成可执行程序：

    gcc -o hello.exe helloworld.c

可以使用开源的免费工具，如 Code::Blocks，它提供自带 MinGw GCC 编译工具。 

CodeBlocks 安装目录下 compilers\options_common_warnings.xml 文件有 GCC 编译器的选项说明：

    -ansi       In C mode, this is equivalent to -std=c90, in C++ mode, it is equivalent to -std=c++98
    -std=c11    Have gcc follow the 2011 ISO C language standard
    -std=c99    Have gcc follow the 1999 ISO C language standard
    -std=c90    Have gcc follow the 1990 ISO C language standard  (certain GNU extensions that conflict with ISO C90 are disabled)
    -std=c++98  Have g++ follow the 1998 ISO C++ language standard

可以使用这些选项来编译指定规范的代码。

C 语言作为 C++ 的前身，它们是向前兼容的关系，C 语言有的功能，C++ 都支持，C++ 有的功能，C 语言不定有。简洁与复杂之间的平衡就是 C 与 C++ 之间的平衡，C++ 几乎是 C 的超集，只有少量功能 C++ 不支持，例外之一，C++ 没有 C99 的变长数组 VLA。

C/C++ 作为系统底层语言，同样具有强大的底层开发能力，由于 C++ 引入了 OOP，相对于 FP，其实现上更复杂了，也提供更严格全面的封装。

而 C 语言作为成功的 Functional Programming，一直以来保持的简洁的实现，所以也就不具备 C++ 中提供的一些方便的功能，如函数重载、操作符重载、类型系统。

C 语言的保持简洁的观点是：没什么是指针和宏不能解决的，加那么多东西没意义。

C++ 语言功能丰富的观点是：怎么复杂怎么搞，不要最好的，只要最难搞的！

现代 C++ 是至少四种编程范式的集合体，面向过程，面向对象，泛型编程和元编程，函数式编程等。

以下是 Hello World! for C++：

```cpp
#include <iostream>
#include <cstdio>  // C++ style for stdio.h

using namespace std;

int main(int argv, char **args)
{
    cout << "Hello World!" << endl;
    return 0;
}
```

提醒：学习 C 语言不应该掺杂 C++ 的东西，作为同一系但底层思想绝然不同的两种语言，C/C++ 有着太大的区别。


### ===👉 Fahrenheit-Celsius

一个经典的算法教学案例，华氏度与摄氏度两个温度标准的转换，它们的关系如下：

    ℃=(5/9)(℉-32)

在里使用了 while 循环流程控制结构，当圆括号里的条件为 true 时循环就会继续：

```c
#include <stdio.h>

/* 
print Fahrenheit-Celsius table 
fahr from 0 to 300 step by 20
*/
main()
{
    int fahr, celsius;
    int lower, upper, step;

    lower = 0; /* lower limi to f temperature scale */
    upper = 300; // upper limit 
    step  = 20;  // stepsize 

    fahr = lower;
    while (fahr <= upper){
        celsius = 5*(fahr-32)/9;
        printf("%d\t%d\n", fahr, celsius);
        fahr = fahr + step;
    }
}
```

这是一个相对完整的程序结构，有了 C 语言最重要的函数结构，也有了注解内容，单行注解或多选注解，同时还有流程控制结构，还可以用 for 循环结构来替换 while。

这里有个问题，使用整数导致转换过程的精度损失，如果换成浮点运算，那么结果就会更准确，修改两处：

```c
float fahr, celsius;
printf("%6.2f\t%6.2f\n", fahr, celsius);
// 100.00   37.78
```

字符串格式化参考后续内容。


### ===👉 Standard I/O

这是两个最基本的输入输出函数，gethar 函数读取一个字符，然后 putchar 输出一个字符。

以下程序演示控制台的基本输入输出 stdio.c：

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

这个示范程序使用了 while 循环的另一种形式，do-while，将条件判断移到循环体后面。

循环中使用 EOF 作为结束，在 Windows 系统中，输入 ENTER 键新起一行后，再输入 Ctrl+Z，再输入 ENTER 键即可以产生 EOF。 

Linux 直接按 CTRL+D 快捷键结束输入，即产生 EOF。

基本输入输出一般涉及键盘和显示器，也就是程序运行中的控制台。对控制台操作时，键盘和鼠标等输入设备产生的信号或数据被抽象为输入文件 stdin 文件。而输出的内容会写入显示器的缓存中并显示出来，视觉上就是控制台窗口看到的内容，同样，输出也被抽象为 stdout 文件。

对于键盘输入设备抽象而来的 stdin 文件，怎么表示它的结束是个技巧，不像硬盘存储的文件，有明确的文件大小和结束位置。标准控制台的输入结束一般意味着程序的结束，不能再接收用户的输入。比如，通过 Ctrl+D 和 Ctrl+C 结束程序，即会得到文件结束符 EOF，它在函数库里一般定义为 -1，但这个值的意义不在于取什么值，因为它不是用户输入的值，而是任意指定的。

事实上，输入输入文件是可以被重定向到其它文件的，如运行程序时，将 stdio 程序的 stdout 重定向到 out.txt 文件，而不是控制台默认的显示器输出：

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


### ===👉 Null-terminated String

C 语言的字符串称为 Null-terminated String 或称为 C style string，这是因为 C 语言没有类对象，不能为字符串提供额外的属性来记录字符串长度，所以为了方便，直接使用 null 字符作为字符串的结束标记。

这里强调一下，null 字符是指 '\0' 这个字符，而不是 NULL 指针，通常不应该混淆它们，即使 NULL 用来结束字符串不会导致出错，至少其含义不是字符串结束标记。

所以在 C 语言中定义一个字符串真实的数据如下，三个定义等价：

```c
char greeting[6] = {'H', 'e', 'l', 'l', 'o', ''};
char greeting[] = "Hello";
char *greeting = "Hello";
```

编译器会自动将 null 添加到字符串常量的末尾，所以 C 风格字符串比可显示字符多一个字节。

而使用 strlen 函数测试得到的还是字符串内容长度，但是使用其它函数处理字符串时，一定要设置有足够的缓冲字节，以避免溢出：

```c
#include <stdio.h>
#include <string.h>

int main ()
{
   char str1[] = "Hello";
   char str2[] = "World";
   char str3[11];
   int  len ;
 
   strcpy( str3, str1);
   printf("strcpy( str3, str1) : %s\n", str3);
   // strcpy( str3, str1) : Hello

   strcat( str3, str2);
   printf("strcat( str1, str2): %s\n", str1);
   // strcat( str1, str2): Hello
 
   len = strlen(str3);
   printf("strlen(str1) :%d\n", len);
   // strlen(str1) :10
 
   return 0;
}
```

### ===👉 escape sequences & <iso646.h>

字符转义，用于在字符串中插入非显示字符，通常是控制符，如常用的 `\n` 换行符。

    | Escape sequence |         Description         |      Representation      |
    |-----------------|-----------------------------|--------------------------|
    | \'              | single quote byte           | 0x27 (in ASCII encoding) |
    | \"              | double quote byte           | 0x22 (in ASCII encoding) |
    | \?              | question mark byte          | 0x3f (in ASCII encoding) |
    | \\              | backslash byte              | 0x5c (in ASCII encoding) |
    | \a              | audible bell byte           | 0x07 (in ASCII encoding) |
    | \b              | backspace byte              | 0x08 (in ASCII encoding) |
    | \f              | form feed - new page byte   | 0x0c (in ASCII encoding) |
    | \n              | line feed - new line byte   | 0x0a (in ASCII encoding) |
    | \r              | carriage return byte        | 0x0d (in ASCII encoding) |
    | \t              | horizontal tab byte         | 0x09 (in ASCII encoding) |
    | \v              | vertical tab byte           | 0x0b (in ASCII encoding) |
    | \nnn            | arbitrary octal value       | byte nnn                 |
    | \xnn            | arbitrary hexadecimal value | byte nn                  |
    | \unnnn          | Unicode character           | code point U+nnnn        |
    | \Unnnnnnnn      | Unicode character           | code point U+nnnnnnnn    |

其中 `\?` 用来防止三元组符号的出现，如 "??/" 这个三元组合表示 "\"，如果使用转义 "?\?/" 就得到 "??/"，三元组替代符号是个不太常用的功能。

全球码是现行的通用字符集，可以避免各种字符集转换的痛苦。

根据编码方案的不同，一个全球码字符需要多个字节，或固定的 2 个字节或 4 个字节。例如，\U0001f34c 由四个字节表达的字符对应 UTF-8 (\xF0\x9F\x8D\x8C) 和 UTF-16 (\uD83C\uDF4C))。

例如，以下输出两个全球码字符，一个是五角星，另一个是香蕉，如果使用 VSCode 编辑器会有提示字符编码值：

```c
printf("\u2605");     // ★
printf("\U0001f34c"); // 🍌
```

在执行程序输出全球码之前，需要使用 chcp 65001 将 Windows 的控制台切换为 Unicode 字符集模型。

C 代码可以使用非 ASCII 字符集编写，即 ISO 646:1983 invariant character set 之外的字符集。一些 C 运算符和标点符号需要 ISO 646 代码集之外的字符：

    { } [ ] # \ ^ | ~

为了能够在这些符号部分或全部不存在的情况下使用字符编码，如德国 DIN 66003 字符集，有两种选择：使用两个或三个 ISO 646 兼容字符的特殊组合，替代拼写这些运算符，这些字符被解释为一个非 ISO 646 字符。


在 C95 规范引入了 `<iso646.h>` 提供以下运算符号的宏定义：

- `&&`  `and` (macro constant) 
- `&=`  `and_eq` (macro constant) 
- `&`   `bitand` (macro constant) 
- `|`   `bitor` (macro constant) 
- `~`   `compl` (macro constant) 
- `!`   `not` (macro constant) 
- `!=`  `not_eq` (macro constant) 
- `||`  `or` (macro constant) 
- `|=`  `or_eq` (macro constant) 
- `^`   `xor` (macro constant) 
- `^=`  `xor_eq` (macro constant) 

还有二元组 Digraphs 和三元组 Trigraphs 符号替换：

- `{`   `<%` 
- `}`   `%>` 
- `[`   `<:` 
- `]`   `:>` 
- `#`   `%:` 
- `##`  `%:%:` 
- `{`   `??<`
- `}`   `??>`
- `[`   `??(`
- `]`   `??)`
- `#`   `??=`
- `\`   `??/`
- `^`   `??'`
- `|`   `??!`
- `~`   `??-`

示范，以下程序使用拼写替代符号，根据命令行参数打印内容，只是视觉相当的糟糕：

```c
%:include <stdlib.h>
%:include <stdio.h>
%:include <iso646.h>
 
int main(int argc, char** argv)
??<
    if (argc > 1 and argv<:1:> not_eq NULL)
    <%
       printf("Hello%s\n", argv<:1:>);
    %>
 
    return EXIT_SUCCESS;
??>
```

### ===👉 format string
- https://en.cppreference.com/w/c/io/fscanf
- https://en.cppreference.com/w/c/io/fprintf
- https://en.cppreference.com/w/c/types/integer

格式化输入输出是最常用的两个基本 I/O 功能，scanf 和 printf 定义在 `<stdio.h>` 头文件中。

常用的格式化输出：

```c
printf("Strings\n");
const char* s = "Hello";
printf("\t.%10s.\n\t.%-10s.\n\t.%*s.\n", s, s, 10, s);
printf("Characters:\t%c %%\n", 65);

printf("Integers:\n");
printf("Decimal:\t%i %d %.6i %i %.0i %+i %u\n", 1, 2, 3, 0, 0, 4, -1);
printf("Hexadecimal:\t%x %x %X %#x\n", 5, 10, 10, 6);
printf("Octal:\t%o %#o %#o\n", 10, 10, 4);

printf("Floating point\n");
printf("Rounding:\t%f %.0f %.32f\n", 1.5, 1.5, 1.3);
printf("Padding:\t|%05.2f|%.2f|%5.2f|\n", 1.5, 1.5, 1.5);
printf("Scientific:\t%E %e\n", 1.5, 1.5);
printf("Hexadecimal:\t%a %A\n", 1.5, 1.5);
```

以上代码格式化输出：

```sh
Strings
    .     Hello.
    .Hello     .
    .     Hello.
Characters:     A %

Integers
Decimal:        1 2 000003 0  +4 4294967295
Hexadecimal:    5 a A 0x6
Octal:          12 012 04

Floating point
Rounding:       1.500000 2 1.30000000000000004440892098500626
Padding:        |01.50|1.50| 1.50|
Scientific:     1.500000E+00 1.500000e+00
Hexadecimal:    0x1.8p+0 0X1.8P+0
```

格式化包含内容如下：

- 数据类型，如 `%s` 表示字符串，`%d` 表示数值；
- 格式输出宽度，如 `%10s` 表示 10 个字符宽度，`%-10s` 表示靠左对齐，`%*s` 表示通过参数指定字符串宽度，星号也可以用在小数上；
- 小数点位数，如 `%05.2f` 表示 5 个字符宽度，保留两位小数，有空余空间前面整数前缀 0，`%.0f` 不保留小数会进行向上取舍；

格式化数据类型占位符号如下：

- `%d` 十进制有符号整数
- `%u` 十进制无符号整数
- `%f` 浮点数
- `%s` 字符串
- `%c` 单个字符
- `%p` 指针的值
- `%e` 指数形式的浮点数
- `%x`, `%X` 无符号以十六进制表示的整数
- `%0` 无符号以八进制表示的整数
- `%g` 自动选择合适的表示法

对于 long int 或 long long int 可以使用前缀，如 `%lld`。

新的编译器会引进 `__int64 _W64 int64_t` 等类型，要打印它们就需要对应的格式字符，加入 j 前缀，或使用 <inttypes.h> 定义的 PRId64 这类格式符号。size_t 是无符号整形数值，使用 %zu 格式字符串。

```c
#include <inttypes.h>
int64_t it;
uint64_t ut;
printf("%" PRId64 "%" PRIu64 "\n", it, ut);
```

The correct conversion specifications for the fixed-width character types (int8_t, etc) are defined in the header <inttypes.h> (although PRIdMAX, PRIuMAX, etc is synonymous with %jd, %ju, etc).


格式化输入基本规则：

- 非空白多字节字符，除了%：格式字符串中的每个这样的字符只消耗输入流中的一个相同字符，或者如果流中的下一个字符比较不相等，则导致函数失败。
- 空白字符：格式化字符串的空白字符 "\n", " ", "\t\t" 等等，会消耗掉输入内容中的连续的空白字符。

格式转换符号基本组成：

- % 打头表示一个转换指示。
- * 表示禁止赋值，匹配到的内容丢弃处理。
- width 用大于 0 的整数指定匹配内容宽度。注意，%s 和 %[ 这样的转换指示如果不指定宽度会导致溢出。
- length 指定接收参数的大小，即实际的目标类型。这会影响转换精度和溢出规则，每个转换类型的默认目标类型都不同。
- 转换格式指示 Conversion specifier；

格式化输入函数有带 s 后缀的安全版，如 scanf_s，和普通版区别在于 %c, %s, %[ 等转换处理的不同，这些转换都要求两个参数，一指针和一个大小数值来确定安全边界。

Conversion specifier 参考：

- `%` matches literal %
- `c` matches a character or a sequence of characters
- `s` matches a sequence of non-whitespace characters (a string)
- `[set]` matches a non-empty sequence of character from set of characters.
- `[^set]` matches a non-empty sequence of character not in the set of characters.
- `d` matches a decimal integer. 输入格式要求同 strtol() 函数。
- `i` matches an integer. 输入格式要求同 strtol() 函数。
- `u` matches an unsigned decimal integer. 输入格式要求同 strtoul() 函数。
- `o` matches an unsigned octal integer. 输入格式要求同 strtoul() 函数。
- `x`, X matches an unsigned hexadecimal integer. 输入格式要求同 strtoul() 函数。
- `n` 返回当前已经处理的字符数，不消耗输入数据，不记作返回的赋值次数。
- `a`, `A`(C99) `e`, `E`, `f`, `F`, `g`, `G` matches a floating-point number.
- `p` matches implementation defined character sequence defining a pointer.

例如 `%[^\n]` 表示匹配一行输入，但是不包括非 ASCII 字符，如输入 "French suits of trèfles" 将丢失后面四个字符。

示范：

```c
#define __STDC_WANT_LIB_EXT1__ 1
#include <stdio.h>
#include <stddef.h>
#include <locale.h>
 
int main(void)
{
    int i, j;
    float x, y;
    char str1[10], str2[4];
    wchar_t warr[2];
    setlocale(LC_ALL, "en_US.utf8");
 
    char input[] = "25 54.32E-1 Thompson 56789 0123 56ß水";
    /* parse as follows:
       %d: an integer
       %f: a floating-point value
       %9s: a string of at most 9 non-whitespace characters
       %2d: two-digit integer (digits 5 and 6)
       %f:  a floating-point value (digits 7, 8, 9)
       %*d: an integer which isn't stored anywhere
       ' ': all consecutive whitespace
       %3[0-9]: a string of at most 3 decimal digits (digits 5 and 6)
       %2lc: two wide characters, using multibyte to wide conversion  */
    int ret = sscanf(input, "%d%f%9s%2d%f%*d %3[0-9]%2lc",
                     &i, &x, str1, &j, &y, str2, warr);
 
    printf("Converted %d fields:\ni = %d\nx = %f\nstr1 = %s\n"
           "j = %d\ny = %f\nstr2 = %s\n"
           "warr[0] = U+%x warr[1] = U+%x\n",
           ret, i, x, str1, j, y, str2, warr[0], warr[1]);
 
#ifdef __STDC_LIB_EXT1__
    int n = sscanf_s(input, "%d%f%s", &i, &x, str1, (rsize_t)sizeof str1);
    // writes 25 to i, 5.432 to x, the 9 bytes "thompson\0" to str1, and 3 to n.
#endif
}
```

Output:

    Converted 7 fields:
    i = 25
    x = 5.432000
    str1 = Thompson
    j = 56
    y = 789.000000
    str2 = 56
    warr[0] = U+df warr[1] = U+6c34


另外，不得不的一个容易被初学者忽视的是溢出导致的安全问题，例如，以下代码片断使用格式化输入函数多标准输入设置中读取一个字符串：

```c
char buf[256];
scanf("%s", buf);
```

目标缓冲区只定义了 256 个字符，假如恶意用户输入的字符超过 256 个字符会发生什么呢？

显然，buf 所有地址后面 256 字符紧跟的内存区域将会被用户恶意输入的内容覆盖，如果这些内存是精心构造的代码，那么将极有可能演变为成功的堆栈溢出攻击。

解决办法是指定输入的字符宽度：

```c
#define ScanWidth(width) ScanWidthEx(width)
#define ScanWidthEx(width) ("%" #width "s")

char buf[5];
scanf("%5s", buf);
scanf(ScanWidth(MAXWORD), buf);
// scanf_s for C11
```

scanf 与 sscanf 堪称 C 的杀手级标准库函数，因为使用起来实在是太方便了，但是它们的安全隐患又是如此明显和容易被忽视。


### ===👉 macro 宏基础

使用宏 macro 定义可以在编译器预处理阶段 preprocessor 替换代码生成宏定义的功能，合理利用宏能提高程序的运行效率。

可以将宏当作是一段在编译器中运行的脚本，会在程序编译过程中产生一些新的代码。

宏基本语法如下：

    #define MacroName　　Contents

如下，定义 OGLDEV_FILE_ERROR 宏用来打印文件打开的错误消息：

```c
#include <cstring>
#include <iostream>
#include "windows.h"

using namespace std;

#define PI 3.1415926
#define pi "3.1415926"

typedef unsigned int uint;

void OgldevFileError(const char* pFileName, uint line, const char* pFileError);

#define OGLDEV_FILE_ERROR(FileError) OgldevFileError(__FILE__, __LINE__, FileError);

void OgldevFileError(const char* pFileName, uint line, const char* pFileError)
{
#ifdef WIN32
    char msg[1000];
    _snprintf_s(msg, sizeof(msg), "%s:%d: unable to open file? no, just a `%s`", pFileName, line, pFileError);
    MessageBoxA(NULL, msg, NULL, 0);
#else
    fprintf(stderr, "%s:%d: unable to open file? no, just a `%s`\n", pFileName, line, pFileError);
#endif    
}

int main()
{
    OGLDEV_FILE_ERROR("demo from opengl-tutorial.org tutorial02 shader")
}
```

这个示范程序会根据是否定义了 WIN32 符号来选择使用图形界面或者控制台输出，只需要将 "windows.h" 头文件注解就会失去这个符号定义，即编译生成控制台程序。

程序打印一个错误信息，包含了错误出现的源代码及行号，这是非常好的开发体验：

    C:\temp\coding.cpp:29: unable to open file? no, just a `demo from opengl-tutorial.org tutorial02 shader`

ANSI 标准说明了五个预定义的宏名，它们是： 

```c
__LINE__ /* %d */
__FILE__ /* %s */
__DATE__ /* %s */
__TIME__ /* %s */
__FUNCTION__  or __func__
```

宏定义中有三个特别有用的特殊扩展符号：`#`，`##`，`#@`

- `x##y` 表示 x 拼接 y，数值或字符串；
- `#@x` 给 x 加上单引号，结果返回是一个 const char。举例说：
- `#x` 原意是给 x 加双引号变成字符串：

注意，正如前面演示，宏定义可以嵌套宏调用，但是使用'#'或'##'扩展后，宏内容即使用是一个宏名，也不会再发生嵌套的宏调用。

用以下代码演示其功能：

```c
#define Connect(x,y)    x##y
#define ToChar(x)       #@x
#define ToString(x)     #x
#define EXP(a,b)  (int)(a##e##b) 

printf("%d\n", EXP(2,3));  // 2e3 输出:2000 
int n = Connect(123,456);           // n = 123456;
char* str = Connect("asdf", "adf"); // str = "asdfadf";
char a = ToChar(1);           // a = '1';
char* str = ToString(123132); // str="123132";
```

以上定义的宏，使用 (int)(value) 这样的显式类型转换兼容性更好，如果使用 int(value) 这样的类型转换表达可在在 C++ 中通过，但在一些 C 编译器中不能通过。

注意，宏操作这些特殊的内置符号时，不能将它们当作正常的字符串、数值字面量，这些符号应该在代码中原样显示才具有相应效果：

```cpp
// #define ERROR_MSG(msg) (__FILE__ ": "#msg);
// #define ERROR_MSG(msg) (__FILE__ ": "##msg);
// #define BUILD_MSG(l,f,msg)  ("Error: "msg": "f":"+to_string(l)).c_str()
// #define ERROR_MSG(msg) BUILD_MSG(__LINE__,__FILE__,msg);
#define ERROR_MSG(msg) (("Error: "msg": " __FILE__ ":"+to_string(__LINE__)).c_str());

cout << ERROR_MSG("Some error");
```

另外，*__LINE__* 最终会是一个数值，不能和其它字符串直接进行连接，如 *__FILE__#__LINE__* 就会出现应输入宏形参问题，如果直接给等号打双引号它就会变量字串字面量。需要额外使用函数进行转型操作，以上使用了 C++11 引入的 *std::to_string()* 函数。

宏不支持重载，也不支持默认参数，但是利用连接和二次展开可以实现类似 Boost.PP's facilities 提供的功能，以下是在 ++11 中重载宏的模拟：

```cpp
// https://stackoverflow.com/questions/27049491/
// Can C/C++ preprocessor macros have default parameter values?
#include <iostream>
#include <string>

using namespace std;

#define VARGSN(a, b, c, N, ...) N
#define VARGSP(...) VARGSN(0, ##__VA_ARGS__, 2, 1, 0,)
#define CONCAT_AB(a, b) a##b
#define CONCAT(a, b) CONCAT_AB(a, b)

#define ERROR_MSG_0(...) "Error: default message."
#define ERROR_MSG_1(msg) ("Error: " msg ": " __FILE__ ":"+to_string(__LINE__)).c_str()
#define ERROR_MSG_2(msg, more) (("Error: " msg +to_string(more)+": " __FILE__ ":"+to_string(__LINE__)).c_str())
#define ERROR_MSG(...) CONCAT(ERROR_MSG_, VARGSP(__VA_ARGS__))(__VA_ARGS__)
// ERROR_MSG("some literal string")
// ERROR_MSG("some literal string", and somethin to be to_string)

int main()
{
    // std::cout << ERROR_MSG() << endl; // ERROR_MSG_1
    std::cout << ERROR_MSG("a") << endl; // ERROR_MSG_1
    std::cout << ERROR_MSG("a", 1) << endl; // ERROR_MSG_2
    std::cout << ERROR_MSG(+string("")+"ABC") << endl; // ERROR_MSG_1
}
```

VARGSN 目的是获取第 N 个即 11th 号参数，配合 VARGS 将 *__VA_ARGS__* 将其它可能传入的参数推到参数列表，迫使原有的参数从大到小按传入参数个数进入 N 号位，从而获取参数个数。有些编译器并不支持 `##__VA_ARGS__` 这种表达，所以上面的例子有个缺陷，不能完全正确的地调用 ERROR_MSG_0。

从 C++ 11 开始，宏函数支持了变长参数 `...`，接受任意个用逗号分隔的宏参数：

- 传入的变长参数可以用 `__VA_ARGS__` 获取，也可以通过 `#__VA_ARGS__` 获取“逗号+空格分隔”的参数字面量。
- 另外，允许传递空参数，即 `##__VA_ARGS__` 替换为空内容，在有些编译器中可以将其前导的逗号丢弃。

```cpp
#define showlist(...) puts(#__VA_ARGS__)
showlist();            // expands to puts("")
showlist(1, "x", int); // expands to puts("1, \"x\", int")
```

对于空参数，展开时需要处理多余逗号的问题：

```cpp
#define log(format, ...) printf("LOG: " format, __VA_ARGS__)

log("%d%f", 1, .2);    // -> printf("LOG: %d%f", 1, .2);
log("hello world");    // -> printf("LOG: hello world", );
log("hello world", );  // -> printf("LOG: hello world", );
```

后两种调用分别对应不传变长参数、变长参数为空的情况。展开结果会多出一个逗号，导致 C/C++ 编译错误（不是宏展开错误）。

为了解决这个问题，一些编译器（例如 gcc/clang）扩展了 `## __VA_ARGS__` 的用法，如果不传变长参数，则省略前面的逗号：

```cpp
#define log(format, ...) printf("LOG: " format, ## __VA_ARGS__)

log("%d%f", 1, .2);    // -> printf("LOG: %d%f", 1, .2);
log("hello world");    // -> printf("LOG: hello world");
log("hello world", );  // -> printf("LOG: hello world", );
```


为了进一步处理 变长参数为空 的情况，C++ 20 引入了 `__VA_OPT__` 标识符，如果变长参数是空参数，不展开该符号（不仅限于逗号）：

```cpp
#define log(format, ...) printf("LOG: " format __VA_OPT__(,) __VA_ARGS__)

log("%d%f", 1, .2);    // -> printf("LOG: %d%f", 1, .2);
log("hello world");    // -> printf("LOG: hello world");
log("hello world", );  // -> printf("LOG: hello world");
```


宏定义中允许包含多行内容，此时必须在行末，即最右边加上 `\` 转义掉换行符即可，注意后面不能再有其它内容，否则就不是转义换行符。

    #define MALLOC(n, type) \
        ((type *) malloc((n)* sizeof(type)

    int *ptr;
    ptr = MALLOC( 5, int );

利用符号定义防止一个头文件被重复包含 

    #ifndef BODYDEF_H 
    #define BODYDEF_H 

    // ... 

    #endif



### ===👉 macro 宏编程
- C/C++ 宏编程的艺术 https://zhuanlan.zhihu.com/p/152354031
- Compiler Explorer https://godbolt.org/z/3a8Txc
- Macros https://gcc.gnu.org/onlinedocs/cpp/Macros.html

宏编程无法调试，而直接导致难度增加，不经意的符号拼写错误、参数个数错误，导致文本不能正确替换，从而带来 满屏的编译错误，难以定位问题所在。

由于宏代码会 在编译前全部展开，可以让编译器仅输出预处理结果：

- gcc -E 让编译器在预处理结束后停止，不进行 编译、链接
- gcc -P 屏蔽编译器输出预处理结果的行标记 (linemarker)，减少干扰

另外，由于输出结果没有格式化，建议使用 clang-format 工具格式化输出。以及屏蔽无关的头文件，临时删掉 不影响宏展开的 #include 行。

参考 PyBind11 库的实现，它就是宏编程的一种应用。


#### ➡ 特殊符号

和模板元编程不一样，宏编程没有类型的概念，输入和输出都是符号，不涉及编译 C++ 的语法，只进行编译前的文本替换：

- 一个宏参数是一个任意的符号序列 (token sequence)，不同宏参数之间用逗号分隔；
- 每个参数可以是空序列，且空白字符会被忽略，例如 a + 1 和 a+1 相同；
- 在一个参数内，不能出现逗号 (comma) 或不配对的括号 (parenthesis)；

例如 FOO(bool, std::pair<int, int>) 表示 FOO() 有三个参数：bool / std::pair<int / int>

要把 std::pair<int, int> 作为一个参数，一种方法是使用 C++ 的类型别名 (type alias) 避免 参数中出现逗号。例如定义别名 using IntPair = std::pair<int, int>; 就可以使用 FOO(bool, IntPair)。

更通用的方法是使用括号对封装每个参数，称为元组，并通过变长参数 __VA_ARGS__ 在最终展开时移除括号，完成元组解包：

```c
#define PP_REMOVE_PARENS(T) PP_REMOVE_PARENS_IMPL T
#define PP_REMOVE_PARENS_IMPL(...) __VA_ARGS__

#define FOO(A, B) int foo(A x, B y)
#define BAR(A, B) FOO(PP_REMOVE_PARENS(A), PP_REMOVE_PARENS(B))

FOO(bool, IntPair)                  // -> int foo(bool x, IntPair y)
BAR((bool), (std::pair<int, int>))  // -> int foo(bool x, std::pair<int, int> y)
```

代替特殊符号的常用宏函数，用于惰性求值：

    #define PP_COMMA() ,
    #define PP_LPAREN() (
    #define PP_RPAREN() )
    #define PP_EMPTY()

    #define PP_STRING(A) #A


#### ➡ 符号二次展开

调用宏定义需要后缀圆括号，宏参数中的符号与现有宏匹配时并不展开，只有宏内容中出现匹配的内容才会嵌套展开宏定义，区分大小写。

拼接标识符 (identifier concatenation / token pasting) 通过 ## 将宏函数的参数拼接成其他符号，再进一步 展开为目标结果，是宏编程的实现基础，但是被拼接的两个符号并不会单独展开。

```c
#define FOO(SYMBOL) foo_ ## SYMBOL()
#define BAR() bar
#define foo_bar() fun

FOO(bar())       // -> fun()
FOO(BAR){ abc }  // -> foo_BAR(){ abc }
```

一种通用的方法是延迟拼接操作：

```c
#define BAR() bar
#define PP_CONCAT(A, B) PP_CONCAT_IMPL(A, B)
#define PP_CONCAT_IMPL(A, B) A##B

#define FOO(N) PP_CONCAT(foo_, N)

FOO(bar)    // -> foo_bar
FOO(BAR())  // -> foo_bar
```

调用宏，在展开宏内容之前，所有宏参数会先进行一次预扫描，完全展开未用于拼接的标识符或获取字面量的所有参数，*BAR()* 会在调用 *PP_CONCAT* 宏之前展开为 bar 再进入下一步。

预扫描 (Argument Prescan)即宏参数在被替换到宏主体之前会先被完全扩展，除非它们被 # 字符串化或 ## 与其他标记一起粘贴。替换后，将再次扫描整个宏体，包括被替换的参数，以查找要扩展的宏，结果是参数被扫描两次以扩展其中的宏调用。

另外，宏函数要求参数个数必须匹配，并且宏名不能在引号内，否则无法展开：

    PP_CONCAT(x PP_COMMA() y)  // too few arguments (before prescan)
    PP_CONCAT(x, PP_COMMA())   // too many arguments (after prescan)



#### ➡ 自增自减

借助宏的嵌套展开可以实现非负整数增减，即 INC(N) = N + 1 或 DEC(N) = N - 1：

    #define PP_INC(N) PP_CONCAT(PP_INC_, N)
    #define PP_INC_0 1
    #define PP_INC_1 2
    // ...
    #define PP_INC_254 255
    #define PP_INC_255 256

    #define PP_DEC(N) PP_CONCAT(PP_DEC_, N)
    #define PP_DEC_256 255
    #define PP_DEC_255 254
    // ...
    #define PP_DEC_2 1
    #define PP_DEC_1 0

    PP_INC(1)    // -> 2
    PP_DEC(2)    // -> 1
    PP_INC(256)  // -> PP_INC_256 (overflow)
    PP_DEC(0)    // -> PP_DEC_0  (underflow)

展开过程示意：

- PP_INC(N) -> PP_INC_N -> N + 1
- PP_DEC(N) -> PP_DEC_N -> N - 1

因为需要定义各个值，上述操作有上限，若超出则无法继续展开，BOOST_PP 数值操作的上限是 256。


#### ➡ 逻辑运算

借助 PP_CONCAT() 可以实现布尔类型（0 和 1）的逻辑运算（与/或/非/异或/同或）：

    #define PP_NOT(N) PP_CONCAT(PP_NOT_, N)
    #define PP_NOT_0 1
    #define PP_NOT_1 0

    #define PP_AND(A, B) PP_CONCAT(PP_AND_, PP_CONCAT(A, B))
    #define PP_AND_00 0
    #define PP_AND_01 0
    #define PP_AND_10 0
    #define PP_AND_11 1

    PP_AND(PP_NOT(0), 1)  // -> 1
    PP_AND(PP_NOT(2), 0)  // -> PP_AND_PP_NOT_20

原理是符号拼接 + 二次展开，但上述操作仅支持 0 和 1，不能支持非负整数的通用逻辑运算，如果通过定义 PP_NOT_N 来支持 PP_NOT(N)，宏代码会急剧膨胀：

- 一元运算 PP_NOT() 需要考虑 N 种组合
- 二元运算 PP_AND() 则要考虑 N^2 种组合


#### ➡ 其它

得到指定地址上的一个字节或字
 
    #define MEM_B( x ) ( *( (byte *) (x) ) ) 
    #define MEM_W( x ) ( *( (word *) (x) ) )

得到一个变量的地址，byte 或 word 宽度 

    #define B_PTR( var ) ( (byte *) (void *) &(var) ) 
    #define W_PTR( var ) ( (word *) (void *) &(var) )

得到结构体 struct 中字段的偏移量，这里使用了 0 地址的指针：

    #define OFFSETOF( type, field ) ( (size_t) &(( type *) 0)-> field )

得到结构体中一个 field 所占用的字节数 

    #define FSIZ( type, field ) sizeof( ((type *) 0)->field )

将一个字母转换为大写或大小写判断：

```cpp
#define UPCASE( c ) ( ((c) >= "a" && (c) <= "z") ? ((c) - 0x20) : (c) )
#define IS_UPPER(x) (x >= 'A' && x <= 'Z')
#define IS_LOWER(x) (x >= 'a' && x <= 'z')
```

判断字符是不是 10 进值的数字

    #define DECCHK( c ) ((c) >= "0" && (c) <= "9")

判断字符是不是 16 进值的数字 

    #define HEXCHK( c ) ( ((c) >= "0" && (c) <= "9") ||((c) >= "A" && (c) <= "F") ||((c) >= "a" && (c) <= "f") )

防止溢出的一个方法

    #define INC_SAT( val ) (val = ((val)+1 > (val)) ? (val)+1 : (val))

返回数组元素的个数 

    #define ARR_SIZE( a ) ( sizeof( (a) ) / sizeof( (a[0]) ) )

判断机器编码大小尾方式 Big-endian/Little-endian

    #define LITTLE_ENDIAN ((char)(0x30313233)) == '3'

    #if (('1234' >> 24) == '1')
      #define BIG_ENDIAN 0
    #elif (('4321' >> 24) == '1')
      #define BIG_ENDIAN 1
    #else
      #error "Couldn't determine the endianness!"
    #endif

两种字节存储顺序为大端序和小端序 Big-Endian 和 Little-Endian，字节序只针对于多字节类型的数据处理。

在书写习惯上，高位的字节写在左侧，比如 int 整数 0x12345678，它占有 4 个字节的存储空间，最高字节的值为 0x12：

- 0x12 0x34 0x56 0x78 Little-Endian 高位存于低地址端，低位字节排放在内存的高地址端；
- 0x78 0x56 0x34 0x12 Big-Endian 低位存于低地址端，高位字节排放在内存的高地址端。

- Big-endian 的内存顺序和数字的书写顺序是一致的，方便阅读理解。
- Little-endian 在变量指针转换的时候地址保持不变，比如 int64* 转到 int32*

获取最大、最小值

```cpp
#define MAX(a, b)    (((a) > (b)) ? (a) : (b))
#define MIN(a, b)    (((a) < (b)) ? (a) : (b))
```

计算数组中的元素个数

```cpp
#define ARRAY_SIZE(x)    (sizeof(x) / sizeof((x)[0]))
```

位操作

```cpp
#define BIT_MASK(x)         (1 << (x))
#define BIT_GET(x, y)       (((x) >> (y)) & 0x01u)
#define BIT_SET(x, y)       ((x) | (1 << (y)))
#define BIT_CLR(x, y)       ((x) & (~(1 << (y))))
#define BIT_INVERT(x, y)    ((x) ^ (1 << (y)))
```


### ===👉 Preprocessor C/C++ 语言预处理器

预处理器 preprocessor 会在编译器生成机器码前对源代码文件进行必要的替换，或根据条件编译代码，也可以通过预处理指令与编译器进行交互。预算大概分为条件编译，字符替换即宏定义，头文件包含，其它扩展功能。包含头文件有箭括号和双引号两种表达，箭括号表示在标准库中加载，双引号表示先在当前文件所在目录查找，没有找到再从标准库中加载。

    (1) #ifdef identifier is essentially equivalent to #if defined(identifier)
    (2) #ifndef identifier is essentially equivalent to #if !defined(identifier)
    (3) #if expression
    (4) #elif expression
    (5) #else
    (6) #endif

    (1) #define identifier replacement-list(optional)
    (2) #define identifier( parameters ) replacement-list
    (3) #define identifier( parameters, ... ) replacement-list (since C++11)
    (4) #define identifier( ... ) replacement-list (since C++11)
    (5) #undef  identifier

    (1) #include <standar_header>
    (2) #include "non_standar_headr"
    (3) __has_include ( " filename " ) (use with #if, since C++17) 
    (4) __has_include ( < filename > ) (use with #if, since C++17) 

 除了以上预处理功能，还有一些特殊的预处理指令，如文件行号信息，以及一些预定义常量如编译器版本 __cplusplus，文件名 __LINE__，函数名 __func__，行号等 __LINE__：

    # 双引号化转换，用在函数式宏定义，使用#号将宏参数转换成双引号包括的字符串
    ## 标识符拼接，在函数式宏定义中使用##号将宏参数拼接到一个Token后形成完整的标识符
    #error 预处理指令产生编译错误并终止当前的编译。
    #pragma pragma_params
    #pragma once 非标准 Non-standard pragmas
    _Pragma ( string-literal ) (since C99/C++11) 
    #line lineno  
    #line lineno "filename"

预处理功能示例

```c
#include <iostream>

using namespace std;

//宏命令中使用#可以实现替换字符串化，C语言的字符串是自动拼接的："A" "B" = "AB"
#define log(title, var) std::cout << #title << var << std::endl; // # - encloses the result in quotes
#define call(prefix) std::cout << call_##prefix() << std::endl; // ## - Token pasting
char * call_test(){ return (char*)"Macro ## operator demo..."; }
// call(test);  // expands to call_test()

#if __cplusplus < 201103L
    // #error ISO C++ 2011 standard required, so enabled this with the -std=C++11 or -std=gnu++11 compiler options.
    // #pragma message "C++11 standard required ..."
    // #warning C++11 standard required...
#else
    #define __CPP11__
    #define showlist(...) std::cout << " __VA_ARGS__ for " #__VA_ARGS__ << std::endl; // __VA_ARGS__ for C++11 variadic macro
    // showlist();            // expands to puts("")
    // showlist(1, "x", int); // expands to puts("1, \"x\", int")
#endif

// 断言(assertion)主要用于调试中，在程序发布时禁用断言，避免程序非正常退出，在引入断言前通过 #define 或 #undef NDEBUG 开关断言机制，或打开编译选项 -DNDEBUG。
// #define NDEBUG
#include <cassert>

// #ifdef NDEBUG
//  #define assert(x)   ((void)0)
// #else
//  #define assert(e)   ((e) ? (void)0 : _assert(#e, __FILE__, __LINE__))
// #endif

int main(int argc, char* argv[])
{
    assert(__cplusplus==1997L);
    // static_assert(1==2, "C++11 static_assert test");

    #ifdef __CPP11__
        log(New Features C++11, "");
        log(__STDC_UTF_16__ (C11):, __STDC_UTF_16__);   //expands to 1 if char16_t use UTF-16 encoding
        log(__STDC_UTF_32__ (C11):, __STDC_UTF_32__);   //expands to 1 if char32_t use UTF-32 encoding
        showlist(C++11, variadic, macro);
    #endif

    log(Standard Macro Constant, "");
    log(__cplusplus:, __cplusplus); // denotes the version of C++, 199711L(until C++11), 201103L(C++11), 201402L(C++14), or 201703L(C++17)

    #line 123 "custome_lineno_and_FILE.c"
    log(__func__:, __func__);
    log(__FILE__:, __FILE__);
    log(__LINE__:, __LINE__);
    log(__DATE__:, __DATE__); // form "Mar 15 2019", The name of the month is as if generated by asctime and the day "dd" is  1-31.
    log(__TIME__:, __TIME__); // form "hh:mm:ss", as in the time generated by asctime()
    return 0;
}
```


## ==⚡ ch2 - Types, Operators and Expressions
- Type support https://en.cppreference.com/w/c/types
- Fixed width integer types (since C99) https://en.cppreference.com/w/c/types/integer
- Enumerate https://en.cppreference.com/w/c/language/enum

### ===👉 Basic Types

C 语言提供了最基本的数据类型，只有 4 种：

- `char`    a single byte, capable of holding one character in the local character set 
- `int`     an integer, typically reflecting the natural size of integers on the host machine 
- `float`   single-precision floating point 
- `double`  double-precision floating point 

```c
printf("char: %ld\n", sizeof (char));          // char: 1
printf("int: %ld\n", sizeof (int));            // int: 4
printf("long int: %ld\n", sizeof (long int));  // long int: 8
printf("float: %ld\n", sizeof (float));        // float: 4
printf("double: %ld\n", sizeof (double));      // double: 8
```

另外还有用户定义的组合类型：

- struct 结构体类型
- union 联合体类型
- enum 枚举类型

```c
enum Color { RED=1, GREEN, BLUE } c = RED, *cp = &c;
// introduces the type enum Color
// the integer constants RED, GREEN, BLUE
// the object c of type enum Color
// the object cp of type pointer to enum Color
enum Color green = GREEN; // OK
```

枚举类型的第一个成员默认值为 0，后面的依次加 1，可以显式指定一个整数值。

再有就是衍生出来的类型 Derived types：

- arrays of objects of a given type;
- functions returning objects of a given type;
- pointers to objects of a given type;
- structures containing a sequence of objects of various types;
- unions capable of containing any of one of several objects of various types. 

作为补充，C 语言提供了类型修饰，使用 `signed` `unsigned` 修饰字符或整形的符号位，无符号表示最高 bit 作为数值而不是符号位使用，例如 `char` 一个字节内的 256 个状态表示数值范围 -128 ~ 127，而作为无符号数，符号位也参与计数，就可以表示大一倍的正整数 0 ~ 256。

浮点数特殊，在 CPU 内部使用专用的 FPU 浮点处理器计算，并且总是带符号的数值。

整形修饰符号有 `short` `long` 两个，使用修饰符号时，关键字 `int` 可以省略不写，例如 `long int` 表示 `long`，如果不了解这省略的关键字就会觉得它们关系奇怪。

但是 `int` 和 `long` 的关系确实有点特别，C 语言规定 `long` 占用的字节数不小于 `int`：

- 16-bit CPU 系统上，`long` 是 16-bit，int 是 16-bit
- 32-bit CPU 系统上，`long` 是 32-bit，int 是 32-bit
- 64-bit CPU 系统上，`long` 是 64-bit，int 是 32-bit

此外，还有一个特殊的 `void` 关键字，表示没有任何具体类型，通常用在参数列表、修饰函数返回状态，表示没有参数，没有返回值。

```c
// exit function do not return a value are declared as void.
void exit (int status);

// explicitly discard the value of an expression. For example: 
(void)printf("An example.");

// have no parameters 
int rand(void);

// Pointers to void 
void *memcpy(void *dest, void *source, size_t count);
```

使用 `typedef` 关键字可以定义类型别名，参考 C99 规范提供的两个头文件：

- `<inttypes.h>` Format conversion of integer types
- `<stdint.h>` Fixed width integer types

```c
typedef signed char        int8_t;
typedef short              int16_t;
typedef int                int32_t;
typedef long long          int64_t;
typedef unsigned char      uint8_t;
typedef unsigned short     uint16_t;
typedef unsigned int       uint32_t;
typedef unsigned long long uint64_t;
```

另外，现行的 C99 规范的 `true` and `false` 宏定义使用 `int` 而非 `_Bool` 表示，在未来 C23 规范中将进行更新。

编译支持的 `_Bool` 类型与其它整形的转换规则有差别：

- (bool)0.5 -> to 1
- (int)0.5  -> to 0

程序中可以自行定义 `bool`, `true` and `false` 这些宏，但都是过时的做法。

其它，补充的类型相关的宏定义：

```c
///////////////////////////////////
// Defined in header <stddef.h> //
///////////////////////////////////

typedef unsigned int    size_t  // type returned by the sizeof operator
typedef ptrdiff_t       signed int // type returned when subtracting two pointers

#define /*implementation-defined*/ NULL // null pointer constant

// a type with alignment requirement as great as any other scalar type
typedef /*implementation-defined*/ max_align_t; (since C11)

#define offsetof(type, member) /*implementation-defined*/
 // byte offset from the beginning of a struct type to specified member
// (function macro)

///////////////////////////////////
// Defined in header <stdbool.h> //
///////////////////////////////////

#define bool  _Bool // (C99) convenience macro, expands to _Bool
#define false 0 // (keyword macro) (until C23)((_Bool)+0u) (since C23)
#define true  1 // (keyword macro) (until C23)((_Bool)+1u) (since C23)

////////////////////////////////////
// Defined in header <stdalign.h> //
////////////////////////////////////

alignas // (C11) convenience macro, expands to keyword _Alignas (keyword macro)
alignof // (C11) convenience macro, expands to keyword _Alignof (keyword macro)
 
_Alignas ( expression ) (1) (since C11)
_Alignas ( type )   (2) (since C11)
_Alignof( type-name )      (since C11)

#define __alignas_is_defined 1 // (C11)
#define __alignof_is_defined 1 // (C11)

///////////////////////////////////////
// Defined in header <stdnoreturn.h> //
///////////////////////////////////////

noreturn // (C11) convenience macro, expands to _Noreturn (keyword macro)
```

### ===👉 Variable vs Constants
- https://en.cppreference.com/w/c/language/const
- https://en.cppreference.com/w/cpp/language/implicit_conversion

变量和常量两个基本编程概念，但是值得作一翻对比，其中还涉及了声明与初始化的细节，Declarations & Initializations。

首先，给一个量名字时，C 语言有标识符号的规则要求，使用 $ 和字母还有数字和下划线，但是只有 $ 生字母可以打头。

然后，变量定义后，可以改变变量保存的值，而常量意味着一旦定义就不可以改变值。

定义变量可以将多个变量写在同一行，也可以独立一行，这里说的定义就是声明，也就是没有对分配给变量的内存进行初始化：

```c
char c, line[1000];

char c;
char line[1000];
```

比较一下以下这种表达，声明变量的同时，还赋了一个值给变量，准确地讲，这是初始化而不是一般的赋值：

```c
char c = 'C';
```

这里要区别初始化与赋值，是因为在定义常量里，只能而且必需进行初始值，而不可以对常量重新赋值：

```c
#include <stdio.h>

#define PI  3.141592653589793f
int main(){
    const char msg[] = "warning: ";
    const double e = 2.71828182845905L;
    printf("%s\nPI = %f\ne = %f", msg, PI, e);
}
```

以上代码中，常量这个概念的体现有 3 处：

- define 预处理指令定义的 PI 符号常量；
- const 定义的 msg 和 e 两个常量；
- 字面常量 literal constants，包括字符串 "warning: " 和其它两个数值常量，当然也包括 printf 函数中使用的格式化字符串；

关于 const 的使用，在后面结合指针时会出现两种经常让人混淆不清的形式，是关于 const 作用点是哪的问题：

```c
int num = 100; // define a variable
const int PI = 3.14; // define a constant
const int *const cc_pi = &PI; // define a constant pointer point to a constant 
int *const vc_pi = (int*)&PI; // define a const pointer point to a constant
```

参考语法速记如下，记住指针的两个属性，还有单元操作符号 * 的优先级去理解，( Unary * right to left)。

鉴于 Unary * right to left 的结合规则，声明 const 时，将单元运算符 * 写在关键字或标识符号的左侧是逻辑正确的。它修饰的就是靠在右侧的内容，所以 `*const` 就是一个常指针 Constant Pointer。

```c
int var_int1 = 8;
int var_int2 = 9;
const int * vc_i = &var_int1; // initialization for read-write pointer 
int * const cv_i = &var_int2; // initialization for constant pointer

vc_i = &var_int1; // Ok: point to another
*vc_i = 11;       // Error: read only constant can't be changed

cv_i = &var_int1; // Error: read only const pointer can't be changed
*cv_i = 22;       // Ok: variable can be changed

const char * vc_ch = "Hello"; // pointer to constant
char * const cv_ch = "Hello"; // constant pointer
vc_ch = "Ok";                 // Ok: point to another constant string
vc_ch = cv_ch;                // Ok: point to another pointer's value

// Error: constant can't be change 
*vc_ch = *cv_ch;
*vc_ch = "Error";

// Error: const pointer can't be changed
cv_ch = (char * const)vc_ch;
cv_ch = "Error";
```

很有必要对以上这些常量出现进行辨析，通常概念上常量是通过 const 或 define 定义的值不可修改的符号。在编译器的角度上看赋值过程，就是将等号右侧的值赋给左侧的变量符号，即 lvalue = rvalue，即左值与右值的基本概念。

变量可以作为可修改的左值，而常量则不可以，比如 `3.14 = 3.14`，在数学邻域上讲这是个等式，是成立的。而在计算机的领域中，这是赋值，而左值 3.14 是个字面常量，不可修改不可赋值。从语法上讲是错误的，从编译器实现上讲，这是在为难编译器，要实现这样的逻辑就要打破编译器规则。

利用左值为常量不可修改这一点，有经验的开发者会按以下方式编写条件语句，这样做的好处是：

```c
if (100 == abc) {
    // ...
}
```

从汇编指令的角度来看，使用 const 定义的常量符号经过编译后，也和变量类似地指向了内存的某一位置，但是常量指向的这个位置的内容是不可以改变的。

编译器编译后，字面常量将会保存在二进制可执行文件内的数据区，.data 这是不可修改的数据，运行程序时，由操作系统的程序加载器装入内存中直接使用，.data 对应装入的内存区也会设置为只读内存。

强制改变只读内存的数据将导致 SIGSEGV 异常，当然，进程越界访问其它进程的内存也会导致这样的异常。在 CPU 内部，有内存分页机制管理着物理内存，并通过 GDT/LDT 等寄存器管理着映射表，在内存分页记录中，包含了程序使用的内存空间详细信息，包含程序运行的代码段 .text 以及数据段 .data 的起始地址，一旦程序发生了越界访问，或修改只读内存，CPU 就会产生相应的异常保护。

可以使用以下代码来验证：

```c
int main()
{
    char *fixed = "hello";
    fixed[0] = fixed[1]; // Segmentation fault(SIGSEGV) 
    printf("S:%s", fixed);
    return 0;
}
```

只能修改可读写的内存中的数据，列如，以下 rw 定义的内存区：

```c
char *fixed = "hello";
// char rw[] = "hello";
char rw[256];
sscanf(fixed, "%s", rw);
```

简单的做法是直接定义字符数组，它与指针最大的不同在于，指针只分配了指针本身的内存空间，没有分配指针指向的数据所使用的内存空间。

为了说明编译使用的内存分配行为，用以下代码作为例子，事实上这样的代码是不能通过编译的。

```c
int len = 11;
char s[len] = "helloworld";
```

因为，字符串变量 s 作为一个数组，没有使用常量指定大小，这就导致编译器不知道如何给它安排内存空间。如果省略 len 这个变量，直接使用空的方括号 []，那么编译器就会根据右侧的初始化数据长度来给字符串变量分配内存。又因为 C 语言的字符串是 null-terminated，分配内存时，会额外多分配一个字节作为结束符号 null 的空间。

如果，程序必需通过动态确定内存用量，那么就需要使用 smalloc 和 free 函数进行动态内存分配管理，动态内存也称为 `Head` 堆内存，用于程序运行时动态分配。与之相对的是 `Stack` 栈内存，也就是程序的调用栈，像变量的定义，函数参数的传递，包括常量指定长度的数组，都可以在编译期安排好栈内存。堆栈内存模型内存远不止这此，需要通过汇编的角度，结合 CPU 的内存管理模型，和执行程序的流程去理解，这些都是相当贴近硬件层面的内容。

字面常量是经常使用的常量定义方式，几乎远处不在，它也是有类型的。很直观地，使用双引号表示字符串，如 "I am a string"，使用单引号包括的表示字符，如 'C'。

两个相近的字符串，同行或分行，编译器会将它们连接在一起，如 "war" "ning" 等价 "warning"，如要插入特殊字符，可以进行转义，如转义双引号 "\""。

所以，单引号内不能有多个字符，即使使用宽字符集也不可，以下这样的代码就不能通过编译：

```c
#include <wchar.h>

const wchar_t m = '★';
```

字符常量等价一个整数，也就是 ASCII 码表中对应的编码值，如 '0' 对应的码值 48，'A' 对应码值 65，'a' 对应码值 97。

另外，C 语言使用的是 null-terminated 风格的字符串，因为没有类型来管理字符串，不能保存字符串的长度信息，所以使用 '\0' 即 null 作为字符串结束标记。所以在定义字符串时要多久一个字节，比如 "Hello" 字面常量本身字符串长度为 5 但在 C 语言中占了 6 个字节内存空间。

除了普通的字符串和字符，字面常量还有宽字符串、各种数值，这就需要使用类型注解来提示编译器如何处理：

```c
const wchar_t bnn[] = L"🍌wide characters";
int i = 1234;   // 1234   is int
int i = 1234L;  // 1234L  is long int
int i = 1234UL; // 1234UL is unsigned long int
int i = 1234.;  // 1234.  is double
int i = 12e-3;  // 12e-3  is double
int i = 1234.f; // 1234.f is float
```

以上使用了 L、UL 等后缀来给编译器提示类型，但最后还是经过 implit conversions 隐式类型转换为 `int`，这种从 bit 宽度更大的类型向更低的类型转换称为 narrowing convertions 。

另外，类型后缀还可以使用小写形式，包括 ll, ul, ull 等。数值字面常量默认类型为 int，而带小数点的默认为 double 浮点类型，带上 L 或 l 后缀就是 long double 类型，只有整形才可以使用 ll 或 LL 后缀。

除了类型后缀，数值字面常量还可以使用不同的进制表达，如 0x 前缀表示 16 进制，0 前缀表示 8 进制，：

```c
float i = 0b1111;     // binary literal value is 15 in decimal
float i = 017;        // octal literal value is 15 in decimal
float i = 017UL;      // octal literal value is unsigned long 15 in decimal
float i = 0x100.8p0;  // hexadecimal literal value is 256.5 in decimal
float i = 0x100.8p0L; // hexadecimal literal value is 256.5 in decimal
```

需要注意，二进制和八进制字面常量不支持浮点，另外在 16 进制中，e 作为一个合法的 16 进制符号，使用 p 来替代指示指数部分。

十六进制表达浮点时，小数点后面的值也按十六进制计算，列如 .1 就是 1/6。

前面提到的类型窄化 narrowing 隐式转换，通常这会导致精度丢失，通常是不允许的，至少编译器应该提示 overflow。

还有其它合法的隐式类型的转换，比如 float 转换为 double，char 转换为 int，int 转换为 long 等，都不会导致数据丢失，它们称为类型拓宽 widening conversions。

在 The C Programming Language 附录 A.6 中有详细的隐式类型转换规则描述，以下是简要的参考：

- If either operand is long double, convert the other to long double. 
- Otherwise, if either operand is double, convert the other to double. 
- Otherwise, if either operand is float, convert the other to float. 
- Otherwise, convert char and short to int. 
- Then, if either operand is long, convert the other to long. 

通常，字符类型被作为 C 语言提供的最小宽度的整形数据，可以与其它数值进行运算。另外 `<ctype.h>` 提供的库函数也只可以很方便地判断是什么类型的字符，如判断数字 `isdigit(c)`，判断字母 `isalpha(c)`。

除了部分隐式类型转换，C 语言还是相当守规则的，列如，以下定义的浮点类型 a，会将 1/2 运算的结果作为初始值，但是结果并不是 0.5。因为，整数运算结果不审整数，这导致浮点部分被丢掉了。但是只要其中有一个浮点数，结果就会是正确的。

```c
float a = 1/2;
```

因此，需要留心发生隐式类型转换场合：

- 赋值操作，或初始化；
- 二元运算；
- 函数传递参数；

更好的做法是使用显式类型转换，这样就不会有意外的情况出现，显式转换语法如下：

     (type name) expression 

或者使用类型转换函数。


### ===👉 Operators & Expressions
- Bit Twiddling Hacks http://graphics.stanford.edu/~seander/bithacks.html

运算符内容涉及：

- Arithmetic Operators
- Relational and Logical Operators
- Increment and Decrement Operators
- Bitwise Operators
- Assignment Operators 
- Precedence and Order of Evaluation

以及在特定场合下使用特定的运算符，例如，在流程控制结构中，需要条件判断，就需要使用关系与逻辑运算，相应的表达式也称为条件表达式 Conditional Expressions。

例如以下的三元运算符和 if-else 条件判断中，都有 (a > b) 这个条件表达式，还有 for 循环中的 i < n 也是条件表达式。

```c
/* z = max(a, b) */
z = (a > b) ? a : b;

if (a > b)
   z = a;
else
   z = b;

for (i = 0; i < n; i++) printf("%d", i);
```

根据运算符需要的数据个数，可以分为：

- 一元运算符号 Unary，如取地址 &a，或者按位取反 ~a，还有正负号 + -，当然它们也可以当作加减符号；
- 二元运算符号 Binary，如四则运算，a + b，a - b 等等；
- 三元运算符号 Ternary，只有 ?: 一个，`c ? x:y;` 表达式表示当条件 c 为真则返回 x 否则返回 y；

四则运算符号 + - * / 是最基本的算术符号，此外还有模运算，a % b 表示将 a 整数倍于 b 的部分截去，取余下的部分，b 这个数称为模，模可以理解为一个固定的长度。

求解某年份是不为闰年是演示四则运算很好的一个例子，如果某年可以整除 4 且不被 100 整除，又或者年份可以整除 400，那么就是闰年：

```c
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
   printf("%d is a leap year\n", year);
else
   printf("%d is not a leap year\n", year);
```

注意，求模运算符号 % 不能用于浮点数。 

负数进行 / 或 % 运算，结果符号位截断方向与机器有关，计算出现上溢或下溢操作也是如此。

    char a = -256/-2; // -128

自增 ++ 和自减 -- 运算符号可能是总会引发意外的两个符号，它们可以放在操作数据的前面，表示在先进行自增运算再进行其它操作，也可以放在操作数后面，表示先进行其它操作再进行自增运算。

例如，以下代码，两个自增操作意义完全不同，x 为 2 因为先赋值再执行 n 的自增操作，而 y 为 4，因为先执行自增再赋值：

```c
int n = 2;
int x = n++;
int y = ++n;
```

如果一不小心写成以下这样的代码，那就相当难搞了：

```c
x = n+++y;
```

因为，后置的自增或自减运算优先级很低，会优先执行算术运算，但是这里的视觉感受到的逻辑非常令人困惑，除非你不想自己经手的项目让别人轻松地维护，或者你想为难别人要这样做。

另外，也不要使用过于复杂的表达式，这会引入难以察觉的逻辑问题，如下，编译器从左向右、或从右向左进行求值是两种不同的行为，这会导致输出不同的结果：

```c
int i = 2;
printf("%d %d", i, i*i++);
// 3 6
```

在 C 的逗号运算符中，是从左向右求值，但是函数参数列表不属于逗号表达式，默认从右往左求值，但是 C 语言编译器可以选择参数列表求值顺序，以优化得到效率更高的代码。


关系运算符即比较大小的运算符号，包括判断相等 == 或不相等 !=，按优先级罗列如下：

    >   >=   <   <=

    ==   !=

关系运算比算术运算符号优先级要低，所以 i < lim-1 等价 i < (lim-1)，并且建议使用圆括号，意义更清晰。

众多运算符号中，逻辑运算是比较有趣的，逻辑运算判断真假，包括 `!`、`&&` 和 `||` 分别表示 not, and, or，按优先级排列。如果表达式 `a || b` 中 a 为假，那么 b 这部分就不会执行，同理，如果 `a || b` 中 a 为真，则 b 这部分不会执行，因为逻辑或条件已经成立。很多 C 程序都会使用这个特性，也叫 shortcut 短路行为。

例如，以下代码中，只要 lim-1 小于或等于 i，第一个逻辑与符号左侧条件为 false 就导致整个逻辑条件为 false，后面的条件就不会被执行。或者，只要读取到换行符号，那么第二个逻辑与符号的左侧就是 false，整个条件也就是 false，就不会再去判断后面的条件：

```c
for (i=0; i < lim-1 && (c=getchar()) != '\n' && c != EOF; ++i)
   s[i] = c;
```

逻辑非运算符号会将非 0 操作数转换为 0，而 0 值会返转为 1，作为一元运算符号，它的优先级比所有二元运算符号都高。

逻辑转换的组合是相当灵活的，你可以选择喜欢的逻辑运算符，它们之间可以相互转化。

```c
if (!valid) ...
if (valid == 0) ...
if (!(valid != 0)) ...
```

比特位操作 Bitwise Operators 也是相当有趣的，它给人感觉相当贴近 CPU，可以对一个字节的 8-bit 任一个进行操作。

C 提供了 6 个比特操作符，用于整型数据的运算，如 char, short, int, long，当然也包括 signed or unsigned 修饰的整形。

    &   bitwise AND 
    |   bitwise inclusive OR 
    ^   bitwise exclusive OR 
    <<  left shift 
    >>  right shift 
    ~   one's complement (unary) 

比特运算的 `~ & |` 三者非常像逻辑运算，它们也是基于 `! && ||` 的逻辑演化而来的。而移位运算 << 或 >> 则相当直观，就是将二进制的 bit 位依次往左或往右移动指定的位数。

为了简化，下面用 4-bit 的数据来解析 6 种比特运算，最高 bit 也当作符号位看待。

按 two's complement 补码规则，要将一个正数转换为负数，就需要按位取反再加 1。那么，一个负数转换为正数，就相反操作。二进制的 1111 表示一个负值，减 1 再取反就是 1，这个负数也就是 -1。

    1111 & 1010    1111 | 1010    1111 ^ 1010    1111 << 10     1111 & 10      ~ 1111 
    -----------    -----------    -----------    -----------    -----------    -----------
       1111           1111           1111           1111           1111              
     & 1010         | 1010         ^ 1010        << 0010        >> 0010         ~ 1111
    -------        -------        -------        -------        -------        -------
       1010           1111           0101           1100           1111           1111

运算规则：

- & 比特与，两方同为 1 结果就为 1 否则为 0；
- | 比特或，有一方为 1 结果就为 1 否则为 0；
- ^ 异或 XOR，两方相异结果就为 1，否则为 0；
- a >> b 将操作数 a 往右移位，b 指定比特数，符号位进行填充保持不变；
- a << b 将操作数 a 往左移位，b 指定比特数，覆盖符号位，右侧填充 0；
- ~ 按位取反，需要理解补码，例如，`~-1` 得到 0，`~-2` 得到 1，如果不清楚补码规则就相当迷惑。  

在嵌入式开发中，由于资源有限，同时也接近硬件底层，比特运算被大量采用。

比如，要将某个比特置位以打开某功能：

    x = x | SET_ON;

逻辑运算与比特运算具有同样的逻辑概念，但它们还是起不同的作用的，比如，1 && 2 为真，而 1 & 2 则为 0。并且，逻辑运算符号有短路特性，而比特运算符号没有。

利用位运算，可以实现某些功能，如转换英文字符的大小写：

```c
('A' | ' ') == 'a';
('b' & '_') == 'B';
('d' ^ ' ') == 'D';
('D' ^ ' ') == 'd';
```

XOR 运算还会用来做清零操作，任何一个数据和自身进行 XOR 运算结果就为 0，或者做取反操作，只要将一个数据和一个 -1 进行 XOR 就相当于 ~ 操作符号功能。

使用 XOR 还可以交换两个变量值，这个很神奇，可以理解为同一个操作数对另一个操作数进行两次连续 XOR 操作值不变，2 ^ 1 ^ 1 还是 2，甚至这个特性是喝的传递性的，如 5 ^ 24 ^ 5 ^ 16 ^ 24 ^ 5 ^ 16 结果还是 5，在汇编语言这种做法很常见，参考 Leetcode 136. 只出现一次的数字：

```c
int a = 1, b = 2;
a ^= b; // 0001 ^ 0010 => 0011
b ^= a; // 0010 ^ 0011 => 0001
a ^= b; // 0011 ^ 0001 => 0010
```

利用负数补码取反加 1 的特性，还可以对一个数进行加 1 减 1 的操作，`-~2` 结果为 3，`~-3` 结果为 2。还有 `n&(n-1)` 用来消除 bit 最右的 1，循环操作就可以知道一个数有几个 bit 是 1，还可以判断一个数是否为 2 的正幂，负幂如 1/2 属于浮点数判断不了，参考 Leetcode 231 Power of two。

移位操作相当于做乘法运算，往左移 1 bit 就是乘 2，往右就是除 2。填充符号的 >> 也称为算术移位，arithmetic shift，有些机器不填充符号位，而填充 0 即逻辑移位 logical shift。


各种一元、二元、三元运算符优先级参考：

    Operators                     | Associativity            |
    ------------------------------|--------------------------|
    () [] -> .                    | left to right            |
    ! ~ ++ -- + - * (type) sizeof | right to left(Unary)     |
    * / %                         | left to right            |
    + -                           | left to right            |
    <<  >>                        | left to right            |
    < <= > >=                     | left to right            |
    == !=                         | left to right            |
    &                             | left to right            |
    ^                             | left to right            |
    |                             | left to right            |
    &&                            | left to right            |
    ||                            | left to right            | 
    ?:                            | right to left(Ternary)   |
    =                             | right to left            |
    ,                             | left to right            |

    Table 2.1: Precedence and Associativity of Operators

需要注意，一元运算符号，如 & + - * 等选择优先级高于在部分二元运算符号，Unary > Binary，除圆括号、下标方括号和成员运算符号。 

另外，比特位运算符优先级比关系运算符低。按位取反，逻辑与或非 3 种操作符号，三元操作符号，还有关系运算符号不能和赋值符号组合。

赋值号，包括组合赋值符号都是相同的优先级，是属于最低的运算符号，包括以下这些：

    += -= *= /= %= &= ^= |= <<= >>=

其实，没什么优先级问题是不能通过 () 解决的，如果有，那就再来一对圆括号。

最后，逗号也是一个运算符号的存在，它的作用不是进行运算，而在用来分隔表达式，或者说编写多条表达式，从左到右执行。返回逗号列表中最后一个操作数，例如 c = (3, 2) 会将 2 赋值给 c。在定义变量时，或 for、while 等循环结构中的语言中，也可以使用逗号来添加多条表达式。但是，函数参数列表中的逗号并不是逗号操作符。

例如，反转一个字符串，这里的 i++, j-- 的用法在算法上是十分高超的：

```c
#include <string.h>

/* reverse:  reverse string s in place */
void reverse(char s[])
{
   int c, i, j;

   for (i = 0, j = strlen(s)-1; i < j; i++, j--) {
       c = s[i];
       s[i] = s[j];
       s[j] = c;
   }
}
```

如果不是这样的结构将会累赘很多，变量多了，结构也麻烦：

```c
/* reverse:  reverse string s in place */
void reverse(char s[])
{
   int c, i, j, k = strlen(s)%2;
   for (i = 0, j = strlen(s); i < j/2; i++) {
       c = s[i];
       s[i] = s[j-i-k];
       s[j-i-k] = c;
   }
}
```


## ==⚡ ch3 - Control Flow

流程控制是程序结构的基本组织方式，有 for，while，do-while 循环结构，还有 switch-case 分支选择结构，还有 if-else 条件判断结构。

所谓流程控制，就是根据条件判断，选择下一步要执行的代码，如下，花括号的代码只会在 a 为 true 时等等价为 true 时执行：

```c
if(a){
    // execute when a is true
}
```

for 和 while，或者 switch-case 和 if-else 它们都可以相互转换，用不同的结构实现相同的流程控制。

在循环结构中，使用 `break` 关键字来打断循环，使用 `continue` 来跳过本轮执行。


### ===👉 if-else & Prime Number

条件判断结构有以下 3 个基本形式，else if 可以无限制地添加：

```c
if(condition) { ... }
if(condition) { ... } else { ... }
if(condition) { ... } else if(condition) { ... }
```

当语句块，即花括号中只有一条语句时，可以省略花括号，但通常不建议这样做。


判断一个数是否为质数是一个非常不错的算法训练题目，质数分布是一个有趣的问题，欧拉发现质数众多的一条直线空间：

    f(n)=n^2-n+41

那么给定一个值，如何判断是否为质数呢？

定义：除了 1 和它本身以外，不能被任何整数整除的自然数就是质数，Prime 也叫素数，例如 17 就是素数。

那么给定一个数 n，可以直观地枚举所有 2 - n 的数，看是否可以整除。当然这种做法相当没有效率，要知道，任何一个数如果可以分解为两个整数相乘，必然其中一个最大值不大于 sqrt(n)。

再变通一下，假设要求 100 以内的质数，只需要找到一个质数的平方大于 100 的作为分界点，并且找出小于这个值的所有质数作为一个除数列表，并通过这个列表来检查其它质数：

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool isPrimeIn100(int n){
    int p[] = {2, 3, 5, 7, 11};
    int i, len = sizeof p / sizeof *p;
    if(n<4 && n>0) return true;
    for(i=0; i<len; i++){
        if(n % p[i] == 0 && n != p[i]) return false;
    }
    return true;
}

int main() 
{ 
    int c;

    printf("You would be supposed to type a number: ");
    int succ = scanf("%i", &c);
    if (succ!=1){
        printf("%d may be EOF.\n", succ);
        return EXIT_FAILURE;
    }

    if (0 >= c){
        printf("%d is zero or below.\n", c);
    } else if (isPrimeIn100(c)) {
        printf("%d is a Prime Number.\n", c);
    } else if (100 < c) {
        printf("%d is greater then 100.\n", c);
    } else {
        printf("%d is Composite Number.\n", c);
    }
    
    printf("PrimeQ below 100:\n");
    for(c = 0; c<=100; c++){
        if (isPrimeIn100(c)) printf("%d ", c);
    }
    return EXIT_SUCCESS;
}
```

100 以内的质数很容易找，但是大质数的范围就不能手工建表了，需要通过程序处理。

```c
void primeQ(){
    int lim = 100;
    int can = new Array(lim);
    for (int i = 2; i <= lim; i++){
        can[i] = 1;
    }
    for (int i=2; i <= lim; i++){
        for (int j = 2*i; j <= lim; j+=i){
            can[j] = 0;
        }
    }
    for (int i=2; i <= lim; i++){
        if (1 == can[i]) printf("%d\t", can[i]);
    }
}
```

### ===👉 for loop
- https://www.programiz.com/dsa/insertion-sort
- https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm

for 循环和 while 是可以互相替换结构，只是语法结构上的差别。

```c
#include <stdio.h>
#include <stdlib.h>

int main() 
{ 
    int c = 'a';

    // while (c <= 'z'){
    //     printf("%c", c++);
    // }
    
    // for (; ; ){
    //     printf("%c", c++);
    //     if(c > 'z') break;
    // }

    for (; c <= 'z'; ){
        printf("%c", c++);
    }

    return EXIT_SUCCESS;
}
```

for 循环的圆括号中有三条语句，依次分别是：

- 条件初始化语句，只执行一次；
- 条件判断语句，在每次执行循环体前判断是要继续循环；
- 条件更新语句，在每回循环后执行条件的更新操作；

它们都是可选的，可以留空，使用 if 条件判断结合 break 来结束循环。 

教材为了解析 for 循环，演示了 shellsort 排序算法：

```c
/* shellsort:  sort v[0]...v[n-1] into increasing order */
void shellsort(int v[], int n)
{
   int gap, i, j, temp;

   for (gap = n/2; gap > 0; gap /= 2)
       for (i = gap; i < n; i++)
           for (j=i-gap; j>=0 && v[j]>v[j+gap]; j-=gap) {
               temp = v[j];
               v[j] = v[j+gap];
               v[j+gap] = temp;
           }
}
```

这是一个三层 for 嵌套的函数结构，外层定义 gap 负责控制两个子集比较的粒度，从 n/2 到 1 的粒度逐次缩小。中间层负责遍历所有数据，而最内层负责比较并更新顺序。

在多个嵌套循环保持循环控制集中的优势明显，Shell sort 这种排序算法的基本思想是 D. L. Shell 设计的，在比较初期阶段，用粗粒度间距对元素进行粗排，而不是简单的交换相邻的元素。这种粗排往往会很快消除大量的紊乱，使后期的工作更少。随着比较元素之间的间隔逐渐减小为 1，此时排序有效地成为相邻交换方法，所有元素最终都会正确排序。

注意 for 的通用性使外循环与其他循环以相同的形式拟合，即使它不是算术级数，即可以指定 step 值。正是这种逐次减半的粒度控制，使用得所有数据都得到正常的排序，而不被遗漏。

列如，对一个单词的字母进行排序：

    supposed <- gap = 4
    ^   ^
    ouppssed
     ^   ^
    osppsued
      ^   ^
    osepsupd
       ^   ^
    osedsupp <- gap = 2
    ^ ^
    esodsupp
     ^ ^
    edossupp
        ^ ^
    edospusp
         ^ ^
    edosppsu
       ^ ^
    edoppssu
    ^^
    deoppssu

Insertion sort 是和 Bubbble sort 差不多难度的算法，和打扑克牌时对手上的卡片进行排序的过程类似，先以第一张作为参考，比较一下第二张，然后将小的放前面，即交换位置。再用第三张和前面的比较，如果比前面一张要大就表示已经是从小到大排序好了，重复这个操作直到所有牌都排序完毕。

这样的算法对少量的数据是很有效率的，时间复杂度为 O(n^2)，随着数据数量的增加，时间要求按 2 次方增加，如果能对前面已排序的数据进行二分法查找将大量节省时间，对有序数据进行 Binary search 折半查找，在大量数据处理中效率是明显的，它能将 isort 算法内层的 for 循环，即查找部分的时间复杂度降为 Ο(log n)，而不是 Linear search 的 O(n^2)，对于大量数据的排序，isort 的主要消耗就在内层循环。

```c
int isort(unsigned char a[], int n){
   unsigned char k;
   for (size_t i = 1; i < n; i++)
   {
       k = a[i];
       for (size_t j = i; j > 0; j--)
       {
           if (k < a[j-1]) {
               a[j] = a[j-1];
               a[j-1] = k;
           }
       }
   }
   return n;
}

unsigned char s[0xff] = "You would supposed to type some words:";
printf("%s\n", s);
scanf("%[^\n]", s);
isort(s, strlen(s));
printf("isort:%s", s);
```

scanf 可以用来获取一行内容输入，但是不能处理非 ASCII 字符，如 "French suits of trèfles" 将获取不到后面的 4 个字符。


### ===👉 while & do-while

前面的示范程序已经演示过 while 循环的两种形式，这里再将它们放到一起展示：

```c
#include <stdio.h>
#include <stdlib.h>

int main() 
{ 
    int c = 'a';

    while (c <= 'z'){
        printf("%c", c++);
    }

    do {
        c = getchar();
        if (c=='x') break;
        if (c!='\n') putchar(c);
    } while (c != EOF);

    printf("End of File: %d", c);
    return EXIT_SUCCESS;
}
```

在教材中，提供了一个 itoa 函数的实现，用来将一个数值转换成字符，使用到了前面已经实现的 reverse 函数：

```c
/* itoa:  convert n to characters in s */
void itoa(int n, char s[])
{
   int i, sign;

   if ((sign = n) < 0)  /* record sign */
       n = -n;          /* make n positive */
   i = 0;
   do {      /* generate digits in reverse order */
       s[i++] = n % 10 + '0';  /* get next digit */
   } while ((n /= 10) > 0);    /* delete it */
   if (sign < 0)
       s[i++] = '-';
   s[i] = '\0';
   reverse(s);
}
```

这个 itoa 的实现和设想的差不多，就是通过数值辗转除 10 取出余数，并与 '0' 字符码值相加得到数字，最后得到字符串。

另外，要处理好符号，还有 null-terminated 结束标记。


### ===👉 switch case

switch 条件选择结构和 if-else 类似，可以相互转化，其它形式如下：

```c
switch (expression) {
   case const-expr: statements
   case const-expr: statements
   default: statements
}
```

case 后是常量表达式，用来匹配 switch 表达式产生的结果，匹配中的分支就是执行流程的入口，遇到 `break` 关键字为止，如果没匹配中的分支，就执行 `default` 分支：

```cpp
#include <stdio.h>

int main()  /* count digits, white space, others */
{
    int c, i, nwhite, nother, ndigit[10];

    nwhite = nother = 0;
    for (i = 0; i < 10; i++)
        ndigit[i] = 0;
    while ((c = getchar()) != EOF && c != 'x') {
        if (c=='x') break;
        switch (c) {
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            ndigit[c-'0']++;
            break;
        case ' ':
        case '\n':
        case '\t':
            nwhite++;
            break;
        default:
            nother++;
            break;
        }
    }
    printf("digits =");
    for (i = 0; i < 10; i++)
        printf(" %d", ndigit[i]);
    printf(", white space = %d, other = %d\n",
        nwhite, nother);
    return 0;
}
```

每个分支可以缺省代码块，也可以不需要 `break`，但需要它的时候不能忘记它。

虽然，switch 和 if-else 可以互相转化，但是 case 这种分支结构使得 switch 更适合用于那些对多个条件进行处理的场合。

### ===👉 Goto and labels

goto 这种无条件的跳转是汇编时代的遗产，在高级语言中是很少见的，并且也极少使用，因为大量使用它带的负作用更大。

基本结构如下，goto 语句需要配合行标来实现流程跳转：

```c
   for ( ... )
       for ( ... ) {
           ...
           if (disaster)
               goto error;
       }
   ...
error:
   /* clean up the mess */
```

当然，goto 用在多层循环的结束确实很方便，但是可以用函数 return 语句来替代它。


## ==⚡ ch4 - Functions and Program Structure

C 语言是最成功的函数式编程语言，早期的编程语言多数面向过程设计的。扩展 C++ 后，在函数式编程的基础上，又实现了面向对象编程。

在谈论一门语言以什么方式编程，或者说编程思想，通常使用编程范式的概念，Programming Paradigm 进行描述：

- 第一范式 命令式，包括过程式、结构化过程等等。
- 第二范式 声明式，包括函数式、数据流式等等。
- 第三范式 元编程，包括面向对象、泛型、反射化等等。

函数式作为主流的编程范式，以函数为第一公民，通过函数的可以将整个工程分解为功能相对独立的一个个函数。

函数可以递归调用 Recursion，即在函数内部调用函数自身。

每个函数具有一个名称，还有返回值和参数列表，以及函数体。

函数语法：

    return-type function-name(argument declarations)
    {
        declarations and statements
    }

比如，在文本中搜索含有 ould 的行：

    Ah Love! could you and I with Fate conspire
    To grasp this sorry Scheme of Things entire,
    Would not we shatter it to bits -- and then
    Re-mould it nearer to the Heart's Desire!

那么实现这个一个程序，可以将不同的功能分解为一个个函数，最后组合在一起实现需要的程序：

- 读取文本的函数 getline；
- 字符串搜索函数 strindex;

在主函数中循环处理各行即可：

```c
#include <stdio.h>
#define MAXLINE 1000 /* maximum input line length */

int getline(char line[], int max);
int strindex(char source[], char searchfor[]);

char pattern[] = "ould";   /* pattern to search for */

/* find all lines matching pattern */
main()
{
   char line[MAXLINE];
   int found = 0;

   while (getline(line, MAXLINE) > 0)
       if (strindex(line, pattern) >= 0) {
           printf("%s", line);
           found++;
       }
   return found;
}

/* getline:  get line into s, return length */
int getline(char s[], int lim)
{
   int c, i;

   i = 0;
   while (--lim > 0 && (c=getchar()) != EOF && c != '\n')
       s[i++] = c;
   if (c == '\n')
       s[i++] = c;
   s[i] = '\0';
   return i;
}

/* strindex:  return index of t in s, -1 if none */
int strindex(char s[], char t[])
{
   int i, j, k;

   for (i = 0; s[i] != '\0'; i++) {
       for (j=i, k=0; t[k]!='\0' && s[j]==t[k]; j++, k++)
           ;
       if (k > 0 && t[k] == '\0')
           return i;
   }
   return -1;
}
```

函数使用前需要进行声明，即告诉编译器这是一个函数符号，而不是变量或其符号：

```c
int getline(char line[], int max);
int strindex(char source[], char searchfor[]);
```

声明函数只需要函数头，或者叫做函数签名，也叫作 Function Prototypes，不需要花括号部分的代码，即不需要函数的实现。有了这个原型信息，编译器就知道如何调用这个函数。

函数声明可以和变量声明在一起：

```c
int sum, getline(char [], int lim);
```

绘函数传递参数时，会在主调函数中将参数传下压入栈内存，在被调函数中通过栈内存来获取传入参数。这个过程相应于将变量复制了一个副本，所以修改传入的参数不会影响原来的变量，如果需要修改原变量，就需要使用指针来引用原变量。

例如，实现一个 swap 函数来交换两个变量：

```c
void swap(int *a, int *b)
{
    int t = *a;
    *a = *b;
    *b = t;
}
```

在传入结构体变量时，需要考虑性能，选择合适的传参方式，如果可能尽量传递结构体或其成员的指针，以实现高效率。

但是，不得不考虑浅拷贝问题，Shadow copy 这是编译器可以实现的拷贝。如果结构体成员存在指针引用其它数据变量时，则需要进行深层拷贝 Deep copy。

通常，在工程中会以函数库的方式组织，将函数的实现代码放到专门的文件中，并且提供相应的头文件，参考如下：

```c
/* Header for function library.h */
#ifndef _function_library
#define _function_library

// function declarations
int getline(char line[], int max);
int strindex(char source[], char searchfor[]);

#endif
```

头文件中使用了预处理指令，避免在工程中因多次引用而导致链接程序检查到符号重复定义。

接下来创建 C 代码文件，实现函数，这里省略实现代码：

```c
/* library.c */
#include "library.h"
/* getline:  get line into s, return length */
int getline(char s[], int lim)
{
  // ...
}

/* strindex:  return index of t in s, -1 if none */
int strindex(char s[], char t[])
{
  // ...
}
```

使用专用的函数库文件后，前面的程序就可以直接引用头文件 `#include "library.h"` 来使用函数，并且可以省略函数声明和函数实现。如果工程中有多个程序也需要使用库函数，这样处理就非常方便。


### ===👉 Scope Rules & Variables
- https://en.cppreference.com/w/c/language/storage_duration

前面小节讲述了函数的基本组织结构，接下来是其它相关的重要概念。

首先，需要了解作用域的概念，Scope 即范围，在编程语言中，指用来约束变量起作用的一个范围概念。
每个函数，第个语句块，即花括号内都是一个作用域。作用域内部声明的变量，在作用域外部不能访问，
包括静态变量。

变量按其存储组织方式的不同，可以分为以下几种类型：

- `auto` - automatic duration and **no linkage**
- `register` - automatic duration and **no linkage**; address of this variable cannot be taken.
- `static` - static duration and **internal linkage** (unless at block scope)
- `extern` - static duration and **external linkage** (unless already declared internal)

稍为注意一下变量的链接性，Linkage 表明一个符号，可以是变量或函数，是不可以被外部作用域引用的能力。

01. `no linkage` 符号只可在基声明的作用域内使用，包括函数参数、所有非 extern 代码块作用域变量，static 修饰的。
02. `internal linkage` 表示符号只可以在当前编译单元内可用，文件范围的静态符号，包括变量或函数。
03. `external linkage` 表示符号可以在整个工程中使用，即对所有编译单元有效，包括非静态函数、
    所有 extern 修饰的变量(除非先前声明为静态)，所有文件作用域的非静态变量。

特别说明一下，内部链接 `internal linkage` 只有作为一个单独编译单位时才会发生作用，比如
在 alloc.c 中定义全局 static 变量，然后在编译命令中添加上这个文件，和主程序一并编译：

    gcc -o main alloc.c main.c

这样才是内部链接，如果是通过 main.c 的 `#include` 指令引用 alloc.c 则作为同一个编译单元，
所以主程序中是可以访问到 static 全局变量的。

在函数内部定义的局部变量通常也称为自动变量，除非前缀了 static 或 register 这样的关键字。
之所以称为自动变量，是因为编译在编译期自动在栈内存中处理好了变量的分配和回收。

在 CPU 内部，有一个 Stack 数据结构的硬件实现，包含 POP 和 PUSH 这样的操作指令，还有 ESP 
寄存器，它指向程序当前栈顶地址。

程序在编译阶段就需要确定一个可执行文件的结构，也称为程序映像文件，基本需要包括一些段信息： 
`.bss`、`.data`、`.text`，这几个是最基本的程序映像的组成，具体参数 Windows 平台的 PE 
程序格式，和 Linux 平台的 ELF 程序格式文件。

- .bss 即 Block Started by Symbol，通常是指用来存放程序中未初始化的全局变量的一块内存区域，属于静态内存分配。
- .data 即数据段 data segment 通常是指用来存放程序中已初始化的全局变量的一块内存区域，属于静态内存分配。
- .text 代码段 code segment/text segment 通常是指用来存放可执行代码的一块内存区域。

代码段区域的大小在程序运行前就已经确定，编译生成程序文件时就已经确定，并且内存区域通常属于只读内存。当然，代码段也有可能包含一些只读的常数变量，例如字符串常量等。 

另外，还有堆内存区 heap，用于存放进程运行中被动态分配的内存段，它的大小并不固定，可动态扩张或缩减。调用 malloc 等函数分配内存，新分配的内存就被动态添加到堆上，即堆内存扩张。使用完内存后，再通过 free 等函数释放内存，从堆中被剔除，即堆内存被缩减。

而栈 stack，传统的译法又称堆栈，为了不引起歧义，一般称为栈内存更合适，这是是用户程序存放临时变量，或者局部变量使用。一般由编译自动管理，所以这些变量又称为自动变量。

自动变量内存在声明执行时分配，而不是在进入代码块时，并且在超出范围时释放，而不是在块退出时释放。

理解可执行程序的映像组织后，静态变量或寄存器变量就好理解多了。

寄存器变量 Register Variables 像普通变量一样，只是使用 CPU 的寄存器来保存数据，而不是内存，这样速度上会更快：

```c
f(register unsigned m, register long n)
{
   register int i;
   ...
}
```

C 语言程序，在代码文件中可以引用其它代码文件中的变量、函数或对象 External Variables，标准叫法 external linkage。从这个意义上说，外部变量类似于 Fortran 公共块或 Pascal 中最外层块中的变量。

使用关键字 `extern` 修饰变量，意思就是表明该变量在别的地方已经定义过了，需要在这里要使用它。

如果需要共享大量的变量，使用外部链接是个方便的选择，并且，外部链接的变量具有更多长久的生命周期和更广的作用域。

以下摘抄的代码演示了如何使用外部变量：

```c
// ext.h
extern int global_variable;  /* Declaration of the variable */

// ext.c
#include "ext.h"  /* Declaration made available here */

/* Variable defined here */
int global_variable = 37;    /* Definition checked against declaration */

int increment(void) { return global_variable++; }

// main.c
#include <stdio.h>
#include "ext.h"

void use_it(void)
{
    printf("Global variable: %d\n", global_variable++);
}
```

静态变量，使用 static 关键字进行定义，这样定义静态变量就会在全局静态内存区分配内存，而不是在栈内存区：

```c
static char buf[BUFSIZE];  /* buffer for ungetch */
static int bufp = 0;       /* next free position in buf */

int getch(void) { ... }

void ungetch(int c) { ... }
```

无论是在全局还是局部定义静态变量，其内存始终在全局数据区分配内存，即静态变量始终驻留在全局数据区，直到程序运行结束。区别是，局部静态变量的作用域限制在局部，当定义它的函数或块定义结束时，其作用域随之结束，只有再次进入时才可以访问。

使用 static 修饰函数与修饰全局变量类似，就是改变了函数的作用域，也就是生存期更长了。

以上代码片断通过 external static 提供了一种在 getch ungetch 组合中隐藏 buf 和 bufp 等名称的方法，这些名称必须是 external 以便可以共享，但是 getch 和 ungetch 的用户不应该看到这些符号。

静态声明可用于外部变量或函数，这样声明的变量和函数的作用范围限制为正在编译的源文件内的后续部分。如果不是通过 external 引入全局变量，将会按引入的代码文件产生一个对就的变量副本。


变量声明和初始化 Initialization 其实是两个相对独立的概念，但是它们又经常混合一谈，因为它们在语法上就不太容易被注意到。

参考以下代码片断，在声明变量时，同时使用 = 号进行赋值，这时的赋值才称为初始化，其它的赋值操作不能称为初始化。

```c
char pattern; // declaration of a variable
char pattern[] = "ould"; // declaration & initialization of a variable
char pattern[] = { 'o', 'u', 'l', 'd', '\0' }; // longer but equivalent the above line
```

值得一谈的是指针与数组的初始化和内存分配：

```c
char pattern[5]; // declaration of array with 5 bytes memory allocation.
char (*pattern)[5]; // declaration of pointer to array
```

以上代码片断，尽管声明数组但没有初始化，编译器依然是为其分配了 5 个字节的内存空间，而指针则不会有这个数组的空间分配，指针只是指向这样一个数组而已。

如果更深入一点，这里还涉及了变量的空间分配，但这个不是重点，因为变量声明后总分伴随空间的分配，根据变量类型分配，而指针在 32-bit 系统中固定分配 4 个字节，即使指向的是一个数组，通过 `sizeof(char *)` 可以查看。


## ==⚡ ch5 - Pointers and Arrays

这一章内容涉及内存方面的操作，如果对 x86 CPU 架构的内存管理机制有一定的认识将会大大帮助理解指针为何物。

在里简单介绍一下 CPU 内存管理单元和几种内存模型，程序使用的内存访问模型有以下三个，包括此前使用过的：

    Flat Model
    ================================================
                             Linear Address |      |
    Linear Address ------------------------>|++++++|
                                            |      |
                                            | RAM  |
                                            ========

    Segmented Model
    ================================================
                             Linear Address |      |
                                            |++++++|
                                            |++++++|
                         ===========        |      |
              Offset --->| Segment |------->| RAM  |
    Segment Selector --->|---------|        |++++++|
    ================     |   ...   |        |++++++|
    Logical Address      |---------|        |      |
                         | Segment |------->|      |
                         ===========        ========

    Real-Address Mode Model
    ================================================
                                            | ...  |
                                            |------|
                                            |      |
                             Linear Address |      |
              Offset ---------------------->| RAM  |
    Segment Selector ---------------------->|------|
    ================        Space Divided   |      |
    Logical Address         Into Equal      |      |
                            Sized Segments  |      |
                            Address         ========

    Figure 3-3. Three Memory Management Models

展平模型 Flat memory model，内存对于程序就是一个完整连续空间，即线性地址空间，按字节寻址，代码、数据、调用栈全都在这个空间里。在这个线性连续空间的任体一个字节的地址都叫线性地址，如果不是 64-bit 架构，最大可寻址 2^32 共 4GB。

分段模型，分段的内存对程序来说就是独立的地址空间，代码、数据、堆栈通常在另外的段中。程序使用逻辑地址，看作为 far pointers。段选择器标识访问哪个段，而 ofsset 指向段中的字节地址，所以偏移值又称为有效地址(effective address)。在 IA-32 上运行的程序可以寻址多达 16,383 个大小不等不同类型的的分段，每段最大 2^32 字节。

展平模型和分段模型的线性地址可以使用分页机制。

在 CPU 内部，所有系统定义的段都映射到处理器的线性地址空间，要访问一个内存地址，CPU 就要将逻辑地址转换为线性地址，转换过程对程序是透明的。

使用分段模型的主要目的是提升系统的可靠性，例如，将一个程序的调用栈放到另外一个分段上，就很好地避免了堆栈溢出带来的风险，避免了代码或数据被纂改。

实地址模型，这是最早的 Intel 8086 处理器使用的模型，实模式下的寻址方式，直接使用 segment:offset 的方式进行真实内存地址访问，使用的是专用的分段内存，提供一组最多只有 64KB 的分段。在这种情况下，任何程序都能访问最大，也是全部 1MB 的空间，相当于内存是公开没有保护的。

进入保护模式使用内存管理单元后，内存寻址就不再使用段基址加偏移的方式，而是使用逻辑地址，即机器支持的寻址空间上的地址，而不是真实物理内存的地址。

而进入保护模式后，通过 GDT/LDT 分段映射的方式，程序并不能访问整个物理内存空间，即已经被其它程序使用的内存就不会再被使用。

GDT - Global Descriptor Table 全局描述符表就是在保护模式下虚拟内存寻址中的重要环节。

GDT 中每一项叫做段描述符 Segment Descriptor，用来记录每个内存分段的一些属性信息，每个段描述符占 8 字节。

在保护模式下，内存空间被分割为了一个又一个可以重叠的段记录在 GDT，不同的程序访问内存时，通过 GDT 映射到不同的内存空间，这样就保护了内存安全。

以下是启用分页机制下的逻辑地址到物理地址的流程图：

    Logical Address                         Linear Address                           Physical Address
    ========================                ==========================               ======================
    | 16-bit        32-bit |                | 10-bit  10-bit  12-bit |               | 20-bit      12-bit |
    | Selector      Offset |------> + ----->| Dir     Table   Offset |               | PPN         Offset |
    ===+====================        ^       ===+========+========+====               ===^=============^====
       |                            |          |        |        |                      |             |
       |           +----------------+          |        |        +----------------------|-------------+
       |           |                           |        +----------------+              |
       |         32-bit  20-bit  12-bit        |                         |        20-bit|  12-bit
       |        =======|=======|========       |                         |        ======|=|======
       |        | ---- | ----- | ----- |       |                         |   1023 |-----|-|-----|
       |        | ---- | ----- | ----- |       |       20-bit   12-bit   +------> | PPN + |FLAGS|
       |        | ---- | ----- | ----- |       |       ========|======            | ..... | ... |
       |        | ---- | ----- | ----- |       |  1024 |-------|-----|          0 |-------|-----|
       |     16 | ---- | ----- | ----- |       |       |-------|-----|       +--->========|======
       +----> 8 | Base | Limit | Flags |       |       |.......|.....|   PPN |       Page Table
              0 | ---- | ----- | ----- |       +---->3 | PPN   |FLAGS|-------+
       GDTR --> =======|=======|========             2 |-------|-----|---> Page Table
                        GDT/LDT                      1 |-------|-----|---> Page Table
                                                     0 |-------|-----|---> Page Table
    Volume 3                               CR3 ------> ========|======
    Figure 3-1. Segmentation and Paging                Page Directory

在整个转换过程从程序使用的 Logical Address 或 Far Pointer 开始：

- 先将逻辑地址中的选择器部分通过 GDT/LDT 映射后再与偏移部分叠加形成一个线性地址。
- 线性地址再分解为 Dir/Table/Offset 三部分。
- 根据 CR3 控制寄存器指定的分页目录表并找到 Dir 对应的记录并定位到 Page Table。
- 根据线性地址的 Table 部分定位到 Page Table 对应的记录并获得最最终的 PPN - Physical Page Number。

整个过程经过了分段处理，再分页映射得到最终的物理内存地址，注意分页目录表里的 PPN 是指 Page Table Physical Page Number，它指向一个内存分页表，而内存分页表中的 PPN 是分页的物理内存所在地址，Address of 4KB page frame。根据这个映射关系，一个分页目录就可以映射 1023 * 1024 * 4KB = 4GB - 4MB 空间，而新 CPU 架允许分页可以不是固定的 4KB。


以下是 MIPS 架构和 PC x86 架构的内存模型对比：

      +----------+ 0x7FFFFFFF               +------------------+  <- 0xFFFFFFFF (4GB)
      | frame... | stack segment            |      32-bit      |
      |          | |                        |  memory mapped   |
      |          | |                        |     devices      |
      |          | V                        /\/\/\/\/\/\/\/\/\/\
      |          |                          /\/\/\/\/\/\/\/\/\/\
      +----------+                          |      Unused      |
      | Dynamic  |                          +------------------+  <- depends on amount of RAM
      | Static   | Data Segment             | Extended Memory  |
      +----------+ 0x10000000               +------------------+  <- 0x00100000 (1MB)
      |          |                          |     BIOS ROM     |
      |          |                          +------------------+  <- 0x000F0000 (960KB)
      |          |                          |  16-bit devices, |
      +----------+   0x400000               |  expansion ROMs  |
      | Reserved |                          +------------------+  <- 0x000C0000 (768KB)
      +----------+ 0x00000000               |   VGA Display    |
                                            +------------------+  <- 0x000A0000 (640KB)
                                            |    Low Memory    |
                                            +------------------+  <- 0x00000000

MIPS 处理器系统中，将内存划分为 3 个部分：

- 第一部分从最低内存地址开始，以 0x400000 为起点，作为代码段，保存代码指令。
- 第二部分从代码段之上开始，细分为 Static data 区和，起始地址为 0x10000000。
- 第三部分从最高内存地址开始往下作为调用栈内存空间 stack segment。

注意，可以看到最高内存地地址 0x7FFFFFFF 并不是代表真实内存有这么多，它是虚拟内存空间，通过硬件映射后，才访问到真实的内存地址。

在汇编程序中，通过 `.text` 汇编指令就可以指示编译器，在编译进将这部分生成的指令存到代码段内存空间，准确地说是编译器保存了相关信息，在执行程序时，由程序加载器负责将其传送到代码段内存中。

静态数据 Static data 表示那些在编译阶段就可以确定在整个程序运行期间都有效的数据，也就是数据生命周期保持和程序运行周期一样长，比如，C/C++ 中的全局变量。

Stack 是个很重要的内存空间，它是在硬件层次上实现的数据结构，Last-in First-out，后进先出，先进后出，CPU 通常都提供压栈和出栈指令，`PUSH` & `POP`。在高级语言中或汇编语言中，是有函数调用的这一功能的，procedure call。从 A 函数调用 B 函数，执行完后还要回来 A 函数按原位置继续执行。

那么在调用 B 函数前，就需要将当前执行的指令所在的内存地址，即 PC 寄存器的内容记录下来，等调用函数后返回时再恢复。这就叫做现场保护，要保护的还包括使用到的其它寄存器。

而将数据保存在什么地方呢？这就需要使用 Stack 的内存空间了，将需要保护的数据暂存于栈内存。每次函数调用产生的现场保护动作，都会有相应的 Stack 数据产生，这个动作产生的数据称为调用帧 frame，就像电影一帧一帧地记录数据。并且，CPU 内部的提供了两个专用寄存器，EBP、ESP 分别保存调用栈的基址和当前栈顶位置，注意 Stack 生长方向往低地址内存方向。

               +------------+   |
               | arg 2      |   \
               +------------+    >- previous function's stack frame
               | arg 1      |   /
               +------------+   |
               | ret %eip   |   /
               +============+   
               | saved %ebp |   \
        %ebp-> +------------+   |
               |            |   |
               |   local    |   \
               | variables, |    >- current function's stack frame
               |    etc.    |   /
               |            |   |
               |            |   |
        %esp-> +------------+   /


### ===👉 Array

数组作为一个抽象数据类型概念，或者更准确地说是一种数据结构，应该作为一个独立的章节来去解析它。在各种基础数据类型之上，程序需要基于它们来构建一个应用，离不开各种数据结构与算法，而数组则是作为最基础也是最简单的一种数据结构存在。

数组，在内存中就是一块连续的内存空间，这个内存空间放什么就是什么类型的数组，比如 `int a[]` 整形数组，`char a[]` 字符数组，即字符串。

C 语言使用 Null-terminated 风格字符串，会自动在末尾加 \0 作为终结字符：

```c
char s[10] = "Hello"; // 填充后续 s[5] - s[9] 5 个 '\0'
char s[10] = "123456789"; // 内存分配长度为 10 字节，编译器自动加 '\0'
char s[10] = {'H','e','l','l','o'}; // 等效 {'H','e','l','l','o','\0'}
char s[10] = {0} // 全部初始化为 '\0'
char s[10] = "HelloWorld.\n"; // 最后二个字符为超出部分，丢弃，并且没有字符串结尾符
char s[] = "HelloWorld.\n"; // sizeof = strlen + 1，注意 sizeof 是操作符，而字符长度统计到 '\0' 前面的字符为止
```

和 C++ 中字符串数组初始化一样，C 语言中也可以对字符指针数组进行初始化：

```c
// string nums[] = {"one", "two", "three"};
char *nums[] = {"one", "two", "three"};
// int *nums[] = { 1, 2, 3, 4, 5}; // Error
```

但其它类型指针数组不可以这样初始化，原因是指针的初始化或赋值可以使用 0 值、常量表达式、和类型匹配的对象的地址。

指针需要用地址初始化，给指针赋值应该是地址，即 &var 这样的表达，编译器通常会提示错误：不可将 int 类型赋给 int * 类型。

如上，字符串字面值常量类型为 `const char *` 即一个常量的指针，与指针类型匹配，可赋值。

整形字面值常量可以为 int, long 等类型，参考 C++ Primer 第二章 2.2 节关于变量初始化的内容。

利用 = 运算符来拷贝字符串到字符数组中是不可能的，C 语言把这些语句解释为两个指针之间的（非法的）赋值运算。

可是，如前面在初始化时使用 = 用来初始化字符数组是合法的。这是由于在声明中使用 = 作为初始化功能而不是赋值运算符。

试图使用关系运算符或判等运算符来比較字符串是合法的，但不会产生预期的结果。


如果，数组元素是指针，即 Pointer Arrays，Pointers to Pointers，如 `int *ppi[]`，即指针数组，元素为 `int *` 指针，又如 `char *argv[]` 数组，元素为指向字符的指针。

注意 `char *` 声明的是指向字符的指针，竟然它是不是字符串是不确定的。其次，像 `char **` 这样的双重指针在语法上是声明一个指针指向另一个指向字符的指针，可以使用下标运算符，但它的含义并不和数组等价。


声明时，始终要清楚两个运算符的优先级各结合方向：

- [] 下标运算符是二级优先，left to right 结合。
- Unary * right to left 结合规则，三级优先。

声明带指针的数组时，将单元运算符 * 写在关键字或标识符号的左侧是逻辑正确的，它修饰的就是靠在右侧的内容。结合优先级更高下标运算符时，所定义的符号首先就是数组，其次才是指针。

如果要定义指向数组的指针，那么就必需使用圆括号来改变运算符原有的优先级，先让 * 运算符与标识符结合以确定它是一个指针。然后再与下标运算符结合，才是数组部分的定义。

```c
int (*ap)[5];        // pointer to array of 5 ints
int fi[5] = {1, 2, 3, 4, 5};
ap = &fi;
```

这种运算符优先级的分析思路也适合后面指针与函数的混合使用，像以下 fp 的定义：首先 fp 是指针，其次它指向一个函数，再次这个函数接收一个 char* 参数，并返回一个 int 值。

以下是取自 The C++ Programming Language 一书的示范代码：

```c
int* pi;            // pointer to int
char** ppc;         // pointer to pointer to char
int* ap[15] ;       // array of 15 pointers to ints
int (*fp)(char*); // pointer to function taking a char* argument; returns an int
int* f(char*);      // function taking a char* argument; returns a pointer to int
// The C++ Programming Language, Third Edition by Bjarne Stroustrup.
```

而 C 语言作为静态类型语言，需要在程序编译期知道要给数组分配多少空间，所以方括号中通常需要指定一个数值字面常量，表示需要存放多少个整形、字符等。

如果，省略，则编译器会从初始值中推断空间大小，如果不能推断就编译失败，报错。

对于多维数组，必需指定各个维度的内存分配量，除第 1 维：

```c
int im[][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
printf("Test: %p = %d %p = %d", im, **im, im+1, **(im+1));
// Test: 0060FE68 = 1 0060FE74 = 4
```

C99 规范引入了 VLA - variable-length array 也就是变长数组，支持下面这种写法，这是为数不多的 C++ 不支持的功能：

```c
int n = 10;
int a[n];
```

注意上面的语句是在函数内部写的，也就是 n 和 a 都是自动变量。也就是说，如果代码片断放在函数外面就不能通过编译，这是因为在函数外面定义的是全局变量，此外，使用 VLA 不能对数组进行初始化，因为它的长度在运行时才能确定。

通常，Multi-dimensional Arrays，如两维数组表示为 `[row][col]`，三维数据可以表示为 `[plane][row][col]`，如果对三维数组指针进行运算，运算表达式为 `*(*(*(im+plane)+row)+col)`，二维也类似，`*(*(im+row)+col)`先计算的永远是最左侧的方括号。

当然，如果不怕混淆，直接使用第后一维偏移也可以访问所有元素，比如二维数组，只要 offset 足够大，`*(*im+offset)` 这样的就只可以访问到所有元素，使用一个乘数也可以将 offset 转换成其它维度的指针运算，没有本质区别。

前面的代码片断中，还有一点需要注意，作为地址使用 `im` 可以直接通过 printf 打印出来，但是如果需要取值，就必需通过 * 解引用，多少维的数据就有多少个 * 进行解引用，这是编译器约定的规则，否则它就是一个指针，一个地址，而不是一个值。并且，每一次解引用后，得到的地址的维度信息都不一样，所以 + - 运算的意义也不同。

可以用以下图表简化理解：

      🔴im                im+1                     *(im+2)+1
       |                   |                         |
       |                   |                         |
       V                   V                         V
    { 🔴1  🔴2  🔴3 }, { 🔴4  🔴5  🔴6 }, { 🔴7  🔴8  🔴9 }  <-- Memory Cell
    row = 0              row = 1             row = 2


应该注意到，除了 im 变量，像 `im+1` 或 `*(im+2)+1` 并没有加圆点，表示编译器没有为它们分配相应的内存，尽管它们作为表达式确实会产生相应的代码并占据一定内存。

从上面的示意图中，应该理解到，多维数组本质和一维数组是没有区别的，就是连续的内存空间，唯一差别就是进行指针计算时，不同的解引用对应了不同的一个乘数，即偏移量的乘数。

对于许多 C 语言教材来说，以上这点是没有清晰解释的，也没有给出一个很好的入门级解释。

首先，要区分普通变量和指针，虽然在编译语言中它们是两种不同的东西，但本质上没有什么差别。指针就存储内存地址的，而变量是存储一个值，如果将指针存储的内存地址当作普通的整形数值来看待，那么指针就相当于一个整形变量。如果说事实上指针和普通变量区别是巨大的，那就是因为指针的功能或使用场合、使用方式的不同决定的。特别是指针在内存管理中的应用，这就是指针和变量产生巨大差别的原因。

而数组和变量的区别就在于数组是连续的数据，如果数组只有一个元素，那么它和普通变量没有差别。这种情况下，数组名可以理解为一个变量名，变量名也可以理解指向第一个元素的数组名！另外一个区别是，数组的操作上的区别，毕竟和变量存储的内容在连续性上有差别。所以数组额外多了下标运算，它存在的意义在于，可以根据数组名和元素占据字节的大小来进行一个地址偏移的运算，仅此而以。

以下示例统计用户输入的数字字符个数：

```c
#include <stdio.h>

/* count digits, white space, others */
main()
{
   int c, i, nwhite, nother;
   int ndigit[10];

   nwhite = nother = 0;
   for (i = 0; i < 10; ++i)
       ndigit[i] = 0;

   while ((c = getchar()) != EOF)
       if (c >= '0' && c <= '9')
           ++ndigit[c-'0'];
       else if (c == ' ' || c == '\n' || c == '\t')
           ++nwhite;
       else
           ++nother;

   printf("digits =");
   for (i = 0; i < 10; ++i)
       printf(" %d", ndigit[i]);
   printf(", white space = %d, other = %d\n",
       nwhite, nother);
}
```

定义好一个数组变量后，其变量符号就代表了内存空间的起始地址，然后通过方括号指定下标来访问数组的各个元素，如 `a[0]` `a[1]` 分别表示第 1 个和第 2 个元素。

当然，直接将指针作为地址值进行运算也是一样的，`*(a+0)` `*(a+1)`，和使用下标方式是等价的。

另外，C 语言作为一门效率何等优先的语言，对数数组的越界访问行为是不作检查的，所以需要自行处理。


### ===👉 Pointers

指针可以说是 C 语言中最强大的功能，但也是最容易引入问题的功能。

在旧有观点中，指针代表了高效率，但是在现代编译器的优化下，不用指针也同样具有高效率。指针作为一个底层功能，更多的是在数据结构与算法中应用。

有了内存的指针，意味着有了可以对指定内存地址进行操作的权力，而内存通常是在操作系统管理下分配使用，所以直接操作内存很容易和操作系统内存管理冲突，或者破坏破坏程序逻辑完整性。

如前面 👉 Variable vs Constants 的内容，典型的指针问题就是强制改变只读内存的数据将导致 Segmentation fault(SIGSEGV) 异常，当然，进程越界访问其它进程的内存也会导致这样的异常。在 CPU 内部，有内存分页机制管理着物理内存，并通过 GDT/LDT 等寄存器管理着映射表，在内存分页记录中，包含了程序使用的内存空间详细信息，包含程序运行的代码段 .text 以及数据段 .data 的起始地址，一旦程序发生了越界访问，或修改只读内存，CPU 就会产生相应的异常保护。

指针作为 C/C++ 语言最强大的底层操作功能，它表现多少有些类似于变量。

首先，指针和变量一样，具有两个部分的属性，一个是`关联类型`属性，另一个是`地址值`。

其次，指针本身也可以变量一样占用内存，但是指针占用的内存是固定的，例如使用 `sizeof(char *)` 获取字符指针的大小，在 32-bit 平台里，指针本身占据了 4 个字节空间。

但是，指针和变量完全是不一样的东西，变量只是用来通过命名方式访问保存数据的内存，而指针通过地址直接访问内存，并且不局限于变量的数据，还包括函数等一切内存可以访问到的东西。

如前面的指针运算 `a+1`，数组变量 a 就是代表数组起始内存地址的指针，它可以运行是基于指针的两个属性进行的。+1 表示指针地址向前移动一个元素所占用的内存大小，比如 `sizeof(int)`，-1 则表示反向移动地址。如果指针没有关联类型，那么编译器就不能理解如何进行运算，C 语言中可以定义无类型指针 `void *`，但是不能定义无类型的变量。

两个相关的运算符：

- `&` 取地址运算符，它返回运算对象或者变量的内存地址。
- `*` 解指针运算符，即 indirection/dereferencing operator 间接操作符，它返回指针指向的变量值。

两个特殊的指针：

- `void *` 指针可以包容具体类型的指针，即可以将任意指针赋值给无类型指针，但反过来不行。
- `NULL` 空指针，没有关联类型，也没有地址值，不指向任何地址，或者具体理解为指向 0 地址的指针。

按照 ANSI(American National Standards Institute) 标准，不能对 `void *` 指针进行算法操作，包括解引用。

C 语言的 * 确实是令人困惑的符号，在定义指针时，如 `int *ip` 它其实等价为 `int (*ip)`。但是对于 `char *argv[]` 它又等价为 `char *(argv[])`，因为下标方括号优先级高于 * 操作符号。但是，无论如何结合，* 都不是与数据类型结合，而是与变量符号结合。具体含义很明显，将符号定义为指针，而数据类型则为指针的关联数据类型。

不得不提的是，对指针的运算并非是算术运算，它是编译提供的基于内存地址和数据类型的关联运算，所以也就不存在指针的乘除运算，也不包含函数指针的运算，它们是没有意义的。

指针只可以进行 ++ -- + - 四种运算，注意不是简单的算术运算，和数组越界不检查一样，地址运算也同样不做越界检查。

指针也可以像变量一样进行类型转换，参考以下基本用法：

```c
int x = 1, y = 2, z[10];
int *ip;          /* ip is a pointer to int */

ip = &x;          /* ip now points to x */
y = *ip;          /* y is now 1 */
*ip = 0;          /* x is now 0 */
ip = &z[0];       /* ip now points to z[0] */

void *vp = ip;
ip = (int *)vp;
```

在 main 函数的参数列表中，出现了像 `char *argv[]` 这样的指针，首先必需理解 `chat *` 和 `char[]` 基本是等价的两种类型，除了初始化和内存分配的差别，它们定义的都是一个指针。

从运算符号优先级来看，一元运算符号 * 仅次优先于 [] 符号，按 left to right 结合顺序为 `char *(argv[])`。所以，从语法上来解析，argv 先是一个数组，然后才是指针，而数组元素即为 `char *` 指针，即一个包含指针的数组 Array of Pointers。

如果，将括号加于方括号前，`char (* argv)[]` 这样就是数组指针，Pointer of Array。

所以，**不考虑初始化的前提下**，argv 其实就是一个双重指针，但是，又不能将它等价看作 `char **`，这解析为一个指向字符指针的指针，它们两者的区别主要体现在以下代码片断的初始化的过程中。`char *argv[]` 需要一个地址列表来初始化，而 `char **` 需要一个指针的指针来初始化，这可以说是数组与指针的初始化差异。

像以下这样的双重指针，理解起来还是比较容易的，虽然字符串的长短不一，但是还还可以进行 + - 等操作，编译器在编译期可以推断出哪个字符串在哪个地址：

```c
// Ok: initialized Pointer Array with (char *) list
char * argv[] = {"abc","xyz", "uv", "uvw"};
char argv[4][256] = {"abc", "xyz", "uv", "uvw"};
// Error: initialized pointer with (char *) list
char ** argv = {"abc", "xyz", "uv", "uvw"}; 
printf("Test: %s %s %s", *argv, argv[2], *(argv+3));
```

以上代码片断还说明了指针与数组的初始化差异，初始化过程也是指针与数组的最大区别所在。虽然，可以使用 `{"abc","xyz", "uv", "uvw"}` 这样一个字符串列表去初始化相应的数组，但是用保存有同样数据的一个数组变量去初始化就不行，编译只会从字面量列表去推测出初始的时需要的地址列表，而不会去推测一个数组变量含有的地址元素。所以，字符串数组初始化列表经过编译器处理后，实质上就是 [address, address, ...] 这样的地址数组，这些地址指向字符串字面常量的地址。

双重指针在内存上，可以理解为具有两个串联的指针，需要经过两次解引用才能得到数据。首先 argv 变量本身就是入口地址，指向一个数组所在的地址，而这个数组保存的是 `char *` 即字符串指针，所以需要 `*argv` 来获取字符串数组的地址才能通过 printf 打印出内容。

C 语言和其前身 B 语言一样，将地址当作整型数据看待，使用 printf 这样的函数打印时，可以使用 `%p %d %x` 等格式化字符都可以很好地显示指针指向的地址。

在这里的代码片断中需要注意，声明的是一个指针，但同时又将字符串字面常量列表作为初始化值赋给 argv，即将字面量的地址赋给它。

但是，这样的指针初始化方式不可以在数值字面常量中使用，如 `int * ie = 123;` 就不能通过编译，因为指针初始化需要的是一个地址，而不是数值。当然，C 语言作为底层语言，它完全允许你将 123 通过转型变成指针，`(int *) 123`，但是这样做通常会导致程序违规访问内存，一个程序可以访问的内存，或以读取的内存是由系统分配的。即使有限读取，如果尝试执行写入操作，也是违规使用内存，这会导致 SIGSEGV 异常。


指针与常量结合也能产生两种不同的效果：

- 指向常量的指针，因为指针的是常量，当然不能通过指针来修改，但指针本身可以指向不同的地址；
- 常量指针，因为指针是常量，当然指针本身不可变更地址，如果同时又指向一个常量，那就是完全 imutable；

参考语法如下，记住指针的两个属性，还有单元操作符号 * 的优先级去理解：

```c
int num = 100; // define a variable
const int PI = 3.14; // define a constant
const int *const cc_pi = &PI; // define a constant pointer point to a constant 
int *const vc_pi = (int*)&PI; // define a const pointer point to a constant
```

鉴于 Unary * right to left 的结合规则，声明 const 时，将单元运算符 * 写在关键字或标识符号的左侧是逻辑正确的，它修饰的就是靠在右侧的内容。

Command-Line Arguments 是程序经常使用到的输入数据，教材中实现一个 find 程序来展示如何处理主函数的参数列表。

UNIX 系统上的程序的一个常见约定是，以减号开头的参数来向程序引入可选标志或选项。例如，可以使用 -x 表示排除“except”，使用 -n 来请求行编号。

那么命令可以按以下输入，将不匹配的内容打印出来：

    find -x -n pattern

选项还应该不限制顺序，这样用户可以随意输入有效选项而不用管什么顺序，当然，如果选项可以合并输入如 `-nx pattern` 这样输入就更方便了，这样使用 switch 结构处理起来就很合适。

```c
#include <stdio.h>
#include <string.h>
#define MAXLINE 1000

int getline(char *line, int max);

/* find: print lines that match pattern from 1st arg */
main(int argc, char *argv[])
{
   char line[MAXLINE];
   long lineno = 0;
   int c, except = 0, number = 0, found = 0;

   while (--argc > 0 && (*++argv)[0] == '-')
       while (c = *++argv[0])
           switch (c) {
           case 'x':
               except = 1;
               break;
           case 'n':
               number = 1;
               break;
           default:
               printf("find: illegal option %c\n", c);
               argc = 0;
               found = -1;
               break;
           }
   if (argc != 1)
       printf("Usage: find -x -n pattern\n");
   else
       while (getline(line, MAXLINE) > 0) {
           lineno++;
           if ((strstr(line, *argv) != NULL) != except) {
               if (number)
                   printf("%ld:", lineno);
               printf("%s", line);
               found++;
           }
       }
   return found;
}
```

### ===👉 Simple stack

为了突出指针与数组在初始化上面的差别，这里基于 stack 数据结构实现一个简单的内存分配器，演示内存动态分配。

内存的分配一般有两个步骤：

- 申请内存空间，alloc(n) 返回指向 n 个连续字符位置的指针，调用者可以用来存储字符。
- 释放内存空间，afree(p) 释放上一步申请到的内容空间，以便以后可以重用。

这些例程是最基本的，afree 的调用必须与 alloc 的调用配对使用，先申请后释放。也就是说，alloc 和 afree 管理的存储是堆栈，或者说先入后出，First-in last-out。而 C 语言标准库函数 malloc 和 free 就没有这样的限制，在第最后一章将展示如何实现它们。

最简单的实现就是建立一个字符串大数组 allocbuf，它提供的内存空间只供 alloc 和 afree 分配和释放，模拟一个真实的内存分配器。因为，需要使用指针来管理这些内存空间，并且不希望外部代码访问到，所以将数组定义为 static 静态变量。在实践中，这个内存空间甚至可以没有名字，只能通过 malloc 或者操作系统 API 来申请，也只能通过 free 来释放。

接着就是实现算法，合理地使用 allocbuf 的空间，当然作为一个入门介绍，这里并没有什么算法，就是通过一个 Stack 数据结构来演示内存的分配。使用一个指针 allocp 来指向下一个有效内存地址，即后续内存申请将从这个位置开始。通过 alloc 申请 n 个字符串空间，先需要检查 allocbuf 可使用空间是否足够。足够就返回当前 allocp 的指向的地址，然后记录 n 个字节的偏移，指向下一个有效地址。如果，可用空间不够，则内存分配失败，返回 NULL，即零值指针。而 afree(p) 的实现就显得相当简单了，直接将参数指定的 p 指针设置为当前的有效地址，表示回收已分配的内存空间。

将以下代码作为 alloc.c 单独保存：

```c
#define ALLOCSIZE 10000 /* size of available space */

static char allocbuf[ALLOCSIZE]; /* storage for alloc */
static char *allocp = allocbuf;  /* next free position */

char *alloc(int n)    /* return pointer to n characters */
{
   if (allocbuf + ALLOCSIZE - allocp >= n) {  /* it fits */
       allocp += n;
       return allocp - n; /* old p */
   } else      /* not enough room */
       return 0;
}

void afree(char *p)  /* free storage pointed to by p */
{
   if (p >= allocbuf && p < allocbuf + ALLOCSIZE)
       allocp = p;
}
```

在编译命令中添加上这个文件，和主程序一并编译，即它们是两个单独的编译单元，全局 static 变量才会执行 **internal linkage**。如果在主程序中通过 `#include` 引用 alloc.c， 那么 allocbuf 就可以被主程序直接访问：

    gcc -o main alloc.c main.c

通常，指针可以像其它变量一样初始化，只需要一个有效的地址，或者一个零值表示 NULL 指针。

将 allocp 定义为字符指针，并初始化指向数组空间的开始位置，以下两种语法是等价的表达，数组名就是第一个元素的地址：

```c
static char *allocp = allocbuf;
static char *allocp = &allocbuf[0];
```

检查空间是否足够，只需要比较一下数组最大地址偏移与当前 allocp 地址的差值是否不小于申请值 n：

       if (allocbuf + ALLOCSIZE - allocp >= n) {  /* it fits */

如果空间不足，就需要返回 0 值，即 NULL 指针，在 C 语言中表示一个无效地址，可以用它作为信号触发终止事件。虽然，地址用一个正整数表达，但是它和整数是不可以直接互换的。例外是可以将 0 值常量赋给一个指针，也可以和一个 0 值常量进行比较，定义在 `<stdio.h>` 的 NULL 宏定义就是用来表示 0 值指针的。

在 alloc 和 afree 函数中的两条比较语句中，充分展示了指针可以当作整数一样进行运算，进行比较，==, !=, <, >= 等等，但是这都是在特定环境下，保证指针地址的有效前提下进行的运算。

指针可以和 0 值进行比较，在有效地址计算中是有意义的。在这里，如果指针指向的是不同数组，那么这些比较就是没有意义的，会触发不可知的行为。

另外，就是指针的加减运算，这不是一般的加减，而是和元素数据类型大小相关的加减。加 1 或减 1 表示地址偏移一个元素所占据的空间，对于字符类型，当然对应的是一个字节偏移，如果是 int 数组，那么就是 4 个字节的偏移。

以下是基于指针运算的 strlen 实现： 

```c
/* strlen:  return length of string s */
int strlen(char *s)
{
   char *p = s;

   while (*p != '\0')
       p++;
   return p - s;
}
```

C 语言使用 Null-terminated 风格字符串，即结束位置永远是一个 '\0' 字符，所以字符串处理函数都基于这个标志。这个字符串长度测试函数先是找到这个结束标志的地址，再和字符串的起始地址相减，差值就是字符串长度。

在标准头文件 `<stddef.h>` 定义了 ptrdiff_t 类型，它可以正确表示两个指针运算的带符号值。作为字符串长度，使用无符号整形 size_t 更适合，和标准函数使用的统一的类型。

指针的算术需要保持一致，对浮点指针和字符指针同样的加 1 表示的地址偏移是不同的，前者表示 4 个字节，后者则是 1 个字节，编译器会自动处理好一个元素的偏移。

相同类型的指针可以赋值，加减一个整数，或者比较数组元素的地址，这些操作都是有意义的。而对指针进行乘除，或者移位，或者加减浮点数都是无效的。

最后，可以将 `void *` 即 NULL 指针赋值给任何指针，而不需要进行类型转换。


### ===👉 Pointer of a function

将函数地址赋给指针就像将变量地址赋值给指针是没有本质差别的，就是通过指针来获得内存地址，并进行相应的操作。

但是，指针函数的指针在定义上，语法结构显得更复杂，因为函数签名比一个变量名复杂：

```c
int *test(int a, int b); /* declaration a function that return a pointer of int */
int  (*fp1)(int a, int b);
int *(*fp2)(int a, int b);
```

以上代码片断有几点需要解析一下：

- test 作为一个函数声明，表明这是一个返回整形指针的函数，声明方式很像声明整形指针 `int *`；
- fp1 作为一个函数指针声明，多了一个括号，如果不在 fp1 这个名字里使用括号会如何？那就是在声明函数，而不是函数指针了。
- fp2 声明了一个函数指针，相应的函数返回整形指针，这里可以很整个声明分成 3 个部分，除了返回类型，其它都用贺括号： `return-type (* name)(arguments list)`。

以上是简单的函数指针声明语法，在使用中，比如，声明 `fp` 为一个 fp2 函数指针，如果直接使用以上的这样的类型声明语法肯定是麻烦的，这时可以通过 `typedef` 可以将函数指针的复杂声明进行简单。

语法参考如下，可以看到和普通类型别名的声明格式有点差别：

```c
typedef int *IntegerPointer;
typedef int *(*callback)(int, int);
```

可以尝试使用以下等价方式定义函数指针，编译器如果支持这样的语法：

```c
// typedef int *(*ArithmeticFunP)(int, int);
typedef int *ArithmeticFun(int, int);
typedef ArithmeticFun *ArithmeticFunP;
```

以下示范函数指针的使用：

```c
#include <stdio.h>
#include <stdlib.h>

/**
 * declaration of functions
 * - add is a function that return a pointer of int.
 * - call is a function that take a function as parameter.
 */
int *add(int a, int b); 
int call( int *(*func)(int a, int b) );
typedef int *(*ArithmeticFunP)(int, int);

int main()
{
    ArithmeticFunP cb = add;
    printf("add(1,2): %d", call(cb));
}

int call( int *(*func)(int a, int b) ){
    int *ip = func(1, 2);
    int value = *ip;
    free(ip);
    return value;
}
int * add(int a, int b){
    int *c = malloc(sizeof(int));
    *c = a + b;
    return c;
}
```

注意，不能将函数本地的指针返回给上一层使用，因为函数返回后，保存在栈内存的指针也会被回收。

所以需要使用动态内存分配函数 malloc 从 heap 获取动态分配的堆内存，并且在使用完后通过 free 将其动态内存释放，仅且执行一次释放动作。

内存释放后，就不应该再依赖它来获取数据了，有可以获取到正确的数据，但这绝对是巧合，不可靠的。

指针通常都和 stdlib.h 函数库配合使用，所以需要深入动态内存的管理。


### ===👉 Complicated Pointers
- https://en.cppreference.com/w/c/program/signal

The C Programming Language 提供了以下这些复杂的指针声明参考，还给出编译器的词法分析的参考：

```c
char **argv
  // argv:  pointer to char
int (*daytab)[13]
  // daytab:  pointer to array[13] of int
int *daytab[13]
  // daytab:  array[13] of pointer to int
void *comp()
  // comp: function returning pointer to void
void (*comp)()
  // comp: pointer to function returning void
```

其它稍为复杂的一些指针定义：

```c
int *(*x)[4]
  // x: Pointer to int *[4]
char (*(*x())[])()
  // x: function returning pointer to array[] of
  // pointer to function returning char
char (*(*x[3])())[5]
  // x: array[3] of pointer to function returning
  // pointer to array[5] of char
```

以上三个指针定义就有一定复杂度了。

首先，第一例按括号优先处理，内括号作为一个整体 `*x` 表示一个指针，而指针所指向的的类型是 `int*()[4]`。

第二例，优先分解 `*x()` 表明 x 是函数的返回值，这个函数参数列表为空，然后 `*(*x())[]` 表明返回的类型是一个指针，指向一个数组。并且，数组的元素也是函数，函数返回值为 char，参数列表为空，即最后一对圆括号。

第三例，同样优先分解圆括号内的部分，`*x[3]` 表明 x 是一个数组，包含 3 个元素为指针，`*(*P)()` 表明指针指向函数，参数列表为空，然后 `char (*F)[5]` 表明函数返回值是字数组 `char a[5]`，这里逐步使用符号替代法也是不错的简化方法。


使用 typedef 化简是非常好的方法，另外，掌握操作符优先级也是重要的，`() --> [] --> *`，例如以下这个例子：

```c
// int *(*(*fp)(int(*)(int, int), int(*)(int)))(int, int, int(*)(int, int))[10];
typedef int (*A)(int, int);
typedef int (*B)(int);
typedef int *(*(*C)(A, B))(int, int, A)[10];
```

C99 规范就有许多非常好的例子：

```c
// Standard Library `<stdlib.h>`
int atexit( void (*func)(void) );

// Signal handling <signal.h>
void (*signal(int sig, void (*func)(int)))(int);
```

其中 atexit 还不错太复杂，它本身是一个函数，只需要将圆括号内的部分用 X 参数替换，结构就很简单。然后括号内被替换的这部分 `void (*func)(void)` 本身就是一个函数指针，它没有返回值，没有参数输入。

看到这个 signal 函数指针，它就非常复杂了，参数中又嵌套了函数指针。

同样，也按括号优先级进行分解，可以参考使用 typedef 简化形式：

```c
// void (*signal(int, void (*)(int)))(int);
typedef void fv(int), (*pfv)(int);
fv *signal(int, fv *); // style A
pfv signal(int, pfv);  // style B
```

这个函数的定义的难点在于括号内的 `*signal(int, void (*)(int))`，很明显，这里有一个函数指针 `void (*func)(int)`。按操作符号优先级，圆括号优先于 * 操作符号。所以 signal 本身就是一个函数的返回值，这个函数暂且命名为 A，它接收两个参数 `int` 和函数指针 `void (*func)(int))`。

最后，函数返回的 signal 这个值本身又是一个函数指针，这时，将圆括号内的函数定义去掉就可以看到 `void (*signal)(int)`，它就是圆括号内那个 A 函数返回的函数指针定义。

这种传入参数和返回值都是函数指针的语法已经算是反人类了，如果有更难的，建议还是不要学了。

指针可以任意多层级套用，通常，一星、二星程序是常见的，如果用上 3 星就少见了，用上 4 星那可谓奇葩，用上 5 星那绝对是恶搞。

可以参考：

- 前桥和弥（Maebasi Kazuya）《征服C指针》一书，3.5.6 挑战那些复杂的声明。
- Pointers in C A Hands on Approach by Naveen Toppo, Hrishikesh Dewan

```c
#include <signal.h>
#include <stdio.h>
 
volatile sig_atomic_t gSignalStatus;
 
void signal_handler(int signal)
{
  gSignalStatus = signal;
}
 
int main(void)
{
  signal(SIGINT, signal_handler);
 
  printf("SignalValue: %d\n", gSignalStatus);
  printf("Sending signal: %d\n", SIGINT);
  raise(SIGINT);
  printf("SignalValue: %d\n", gSignalStatus);
}
```


## ==⚡ ch6 - Structures

这章主题为结构休，但是包括 Structures, Unions, Bit-Fields 等内容，其实这些类型都可以算是一种结构化数据类型，将不同的类型组合到一起。

联合体 union 允许在同一内存地址上存取不同的类型，将各种类型定义在联合体中就是实现这样一个功能的。

以下示范使用 union 类型：

```c
// declares an union number type
union number {
    long n; 
    double x;
};

// declares an array nx with ten elements of type union number.
union number  nx[10];

nx[0].x = 1.234;   // Assign a double value to nx[0] 

// declares an union number with initializer list.
union number length = { 100L };
```

和结构体一样，联合类型初始化可以指定一个列表，如果没有指定成员名称，则初始化第一个联合体成员。


位域 Bit-fields，定义和结构体或联合体类似，它们都可以定义为位域，给成员设定 bit 宽度，成员定义语法：

    type    [identifier] : width;

可以是 unsigned int 或 signed int 这样的类型, 标识 identifier 是可选的，比特宽度 width 必需指定一个不超过类型的宽度的值，如 char 类型最大宽度只有 8-bit。并且，宽度不能超过 machine word，即机器的一次可处理的比特位宽度，现代的机器通常是 32-bit 或 64-bit。

如果，上一个字段留有足够的比特位，那么就会将下一个字段与上一个字段打包在一起。

如果，宽度为 0，这是特例，用来做分隔，表示下一个位域将打包到新的存储单元中。

位域使用示范：

```c
struct {
    unsigned int   b0_2 : 3;
    signed   char  b3_7 : 5;
    unsigned char       : 7;
    unsigned char  b15  : 1;
} var;

var.b0_2 = 7;
var.b3_7 = 3;
printf("%d", var.b15);
```

对比生成的汇编代码可能会更清晰编译器是处理处理位域的，通常需要使用比特位运算。

使用 IDA 等逆向工具查看汇编代码，或者直接使用编译器生成汇编代码 `gcc -c -S demo.c`。

```sh
.text:0040163E movzx   eax, ds:_var._bf_0                         # movzbl  _var, %eax
.text:00401645 or      eax, 7                                     # orl $7, %eax
.text:00401648 mov     ds:_var._bf_0, al                          # movb    %al, _var
.text:0040164D movzx   eax, byte ptr ds:_var._bf_4                # movzbl  _var+4, %eax
.text:00401654 and     eax, 0FFFFFFE0h                            # andl    $-32, %eax
.text:00401657 or      eax, 3                                     # orl $3, %eax
.text:0040165A mov     byte ptr ds:_var._bf_4, al                 # movb    %al, _var+4
.text:0040165F movzx   eax, byte ptr ds:_var._bf_4+1              # movzbl  _var+5, %eax
.text:00401666 shr     al, 7                                      # shrb    $7, %al
.text:00401669 movzx   eax, al                                    # movzbl  %al, %eax
.text:0040166C mov     [esp+4], eax                               # movl    %eax, 4(%esp)
.text:00401670 mov     dword ptr [esp], offset Format ; "%d"      # movl    $LC0, (%esp)
.text:00401677 call    _printf                                    # call    _printf                                                            
```

由于第 1 个字段和第 2 个使用了不同的数据类型，所以在内存中按排了不同的存储单元，但是连续的，b0_2 在一个 4 字节的空间，而 b3_7 在紧接后面的一个字节空间。

还可以从汇编代码看到，第 3 和第 4 个字段刚好 8-bit 整合在一起，通过 shr 算术右移位指令就可以取出最高的比特位。

Bit-fields 和普通整形数据的差异： 

- 不可以对位域取地址操作，但 & 操作符号可以对包含位域的结构体或变量操作。
- 由于位域和机器字相关，所以会降低可移植性，因为机器字的比特位解释在不同的机器之间可能不同。


### ===👉 struct & typedef

最常用的结构化数据类型还是结构体，使用关键字 `struct` 定义结构体，它可以将不同的类型整合到一起，作为一个成员定义，访问它们就像使用普通变量一样。结构体的成员属性包括数据类型、名称和值，另外，成员定义的先后顺序也是一种隐含的属性。

使用结构体的这种数据整合能力，可以大大简化程序结构，简洁的代码可以更清晰地表达逻辑结构。

示范结构体的定义与使用：

```c
struct article {
    char   name[40];
    int    quantity;
    double price;
} anArticle = {"🍌wide", 1, 0};

anArticle.name = "Hello";
```

上面的代码片断演示了 article 结构体的定义，并且声明了一个变量 anArticle，使用初始化列表对应设置各成员的值。

结构体成员的访问使用句点，即成员操作符号引用，如果是通过结构体指针访问，则需要先解引用，例如 `(*p).field`，因为成员操作符号优先于解引用符号，所以需要使用圆括号，为了避免使用繁杂的语法，C 语言又定义了一个稍为简单一点的 `->` 符号，这样就可以表达为 `p->filed`。

在 C 语言中，自引用结构体需要通过指针来实现，因为指针长度固定，编译期就确定。不通过指针无法实现嵌套结构，但可以嵌套其它结构体。

在定义结构体或联合体时，实践中通常和 typedef 一起使用，这样方便定义结构体类型的变量。但是，至今我仍记得结构体定义与 typedef 关键字使用时出现的混乱状态，让我毕生难忘。总得来说，定义一个结构体类型和实例化结构体对象，它们有部分语法结构会因为 typedef 关键字的使用而出现重叠，这也是混乱的主要来源。

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

像以下这样，Treenode 就是一种结构体类型，而不像前面声明结构体紧接着声明结构体变量：

```c
typedef struct tnode *Treeptr;

typedef struct tnode { /* the tree node: */
   char *word;           /* points to the text */
   int count;            /* number of occurrences */
   struct tnode *left;   /* left child */
   struct tnode *right;  /* right child */
} Treenode;

Treenode node;
```

示范，平面坐标点与点的距离计算：

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// use typedef keyword to define a new type
// or else you will use "struct point p" instead of "Point p"
typedef struct point Point;

struct point {
    int x;
    int y;
    Point (*add)(Point, Point);
    Point (*trace)(Point, char *fmt);
    double (*distance)(Point, Point);
} p0 = {9,9}; /* an instance definition for shortcut.*/

/*prototype declaration*/
Point add(Point, Point);
Point trace(Point, char *fmt);
double distance(Point, Point);
Point newPoint(int x, int y);

int main(void)
{
    // Point p1 = {0,0, add, distance};
    Point p1 = newPoint(0, 0);
    Point p2 = newPoint(3, 4);
    p1.trace(p1, "1st point (%d,%d).\n");
    p2.trace(p2, "2nd point (%d,%d).\n");
    printf("distance between them:%d.\n", (int)p1.distance(p1, p2));
    p2 = p2.add(p2, p1);
    printf("add p1 to p2: (%d, %d).\n\n", p2.x, p2.y);
    free(&p1);
    free(&p2);
    return 0;
}

Point newPoint(int x, int y){
    Point * pp = malloc(sizeof(Point));
    pp->x = x;
    pp->y = y;
    pp->add = add;
    pp->trace = trace;
    pp->distance = distance;
    return *pp;
}
Point add(Point a, Point b){
    a.x += b.x;
    a.y += b.y;
    return a;
}
Point trace(Point a, char * fmt){
    printf(fmt, a.x, a.y);
    return a;
}
double distance(Point a, Point b){
    return sqrt(pow(a.x-b.x,2)+pow(a.y-b.y,2));
}
```

以上模仿了 C++ 类型成员方法，为结构体定义了多个函数指针，并可以通过结构体实例来调用它。但是，在 C++ 中，类对象调用方法时，会自动将当前对象的 this 指针传入方法，而不是像以上代码这样手动传入。

另外，虽然 free 释放的内存确实是 heap 内存，但是 GCC 还是给出了警告。因为分配内存后，指针经过了转换，如果是 malloc 函数直接返回的指针则不会有这样的警告：

    warning: attempt to free a non-heap object 'p2' [-Wfree-nonheap-object]

注意：结构体变量作为参数传递时，如果按值传递将需要复制全部成员，指令会将成员值一个压栈传递，费时间又费空间，开销大。如果结构体类型中的成员很多，或有一些成员是数组，则程序运行效率会大大降低。在这种情况下，用指针做函数参数比较好，能提高运行效率。

传递结构体变量时，需要考虑性能，选择合适的传参方式，如果可能尽量传递结构体或其成员的指针，以实现高效率。

但是，不得不考虑浅拷贝问题，Shadow copy 这是编译器可以实现的拷贝。如果结构体成员存在指针引用其它数据变量时，则需要进行深层拷贝 Deep copy。

C 语言中的浅拷贝是指在拷贝过程中，对于指针型成员变量只拷贝指针本身，而不拷贝指针所指向的目标，它按字节复制的。

编译提供的浅层拷贝会将指针复制一份到另外的内存空间，但是它还是指向相同的地址，所以结构体复制后，将有多个指针指向同一位置的数据。


### ===👉 struct & binary tree

The C Programming Language 展示了通过一个二叉树结构用于单词的统计，结构示意如下：

            Root
            clay(4)       <-- Level 0
         ┌───┴───┐      
       app(2)  dog(5)     <-- Level 1
       ┌─┴─    ┌─┴──┐    
     ab(1)   cd(1) egg(1) <-- Level 2

代码如下，主要是 tnode 这个结构体以下节点添加方法 addtree，它需要对二叉树上的节点进行比较，如果节点上的单词比当前的输入的大，就在左侧添加子节点，否则在右侧添加子节点。

也就是说，只实现了二叉树节点插入，没有实现节点删除、树的节点重新平衡等方法。

```c
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

typedef struct tnode *Treeptr;

typedef struct tnode { /* the tree node: */
   char *word;         /* points to the text */
   int count;          /* number of occurrences */
   Treeptr left;       /* left child */
   Treeptr right;      /* right child */
} Treenode;

#define MAXWORD 100
#define ScanWidth(width) ScanWidthEx(width)
#define ScanWidthEx(width) ("%" #width "s")

Treeptr addtree(Treeptr , char *);
void treeprint(Treeptr );
int getword(char *, int);
Treeptr talloc(void);

/* word frequency count */
int main()
{
    Treeptr root;
    char word[MAXWORD] = {};
    root = NULL;
    int len = 0;
    while ((len = getword(word, MAXWORD)) != EOF){
        printf("word %d:%s\n", len, word);
        if (isalpha(word[0]))
            root = addtree(root, word);
    }
    treeprint(root);
    return 0;
}

int getword(char *buf, int n){
    return scanf(ScanWidth(MAXWORD), buf); // scanf_s for C11
}

/* talloc:  make a tnode */
Treeptr talloc(void)
{
    return (Treeptr ) malloc(sizeof(struct tnode));
}

/* addtree:  add a node with w, at or below p */
Treeptr addtree(Treeptr p, char *w)
{
    int cond;

    if (p == NULL) {     /* a new word has arrived */
        p = talloc();    /* make a new node */
        p->word = strdup(w);
        p->count = 1;
        p->left = p->right = NULL;
    } else if ((cond = strcmp(w, p->word)) == 0)
        p->count++;      /* repeated word */
    else if (cond < 0)   /* less than into left subtree */
        p->left = addtree(p->left, w);
    else             /* greater than into right subtree */
        p->right = addtree(p->right, w);
    return p;
}

/* treeprint:  in-order print of tree p */
void treeprint(Treeptr p)
{
    if (p == NULL) return;
    treeprint(p->left);
    printf("%4d %s\n", p->count, p->word);
    treeprint(p->right);
}
```

### ===👉 Table Lookup

在本节中，展示了一个表查找程序，也就是 Hash Table 的实现，和编译器或宏处理程序的符号管理功能实现类似，例如代码中定义了一个符号：

    #define  IN  1

然后，在其它地方使用这个符号时，就应该将符号用所定义的值替换：

    state = IN

整个流程主要分为两步：

- `install(s,t)` 在表中记录下 s 符号和对应值 t，它们都是字符串；
- `lookup(s)` 查找方法根据输入的符号返回表中记录的符号对应的值，如果没找到就返回 NULL；

这个表的实现是一个 Hash 表，现在可以将其当作一个二维字符串数组，按行列显示如下。需要设计一个 Hash 函数，将输入的 s 字符串转换为一个整数，对应数组的元素。

    Slot -> [0] --> [0] {"IN", 1} [1] ... [2] ...
    Slot -> [1] --> ...
    Slot -> [2] --> ...
    Slot -> [3] --> ...
    Slot -> [4] --> ...
    Slot -> [5] --> ...

上面假设 `hash("IN")` 函数运算结构为 0，那么将 IN = 1 记录到二维数组的第一个单元内，如果后续又有符号记录到这里，就跟在 IN 这个符号的位置后面。

Hash Table 的实现主要在哈希函数的设计，示范中的哈希函数对输入的字符串 s 各个字符进行运算，将字符值反复与 hashval 进行叠加，并且 hashval 先与一个质数 31 先进行乘法运算。

哈希函数本质是一个单向压缩函数，将无限作用域空间映射到有限的值域空间。

质数 Prime 指那些只能被 1 和自身整除的且大于 1 的自然数，例如 2、3、5、7、11。很明显，除了 2，或者说，所有大于 2 的质数中，个位数只有 1, 3, 7, 9。而且，质数满足唯一分解定理：任一大于 1 的自然数，要么本身是质数，要么可以分解为几个质数之积，且这种分解是唯一的。

根据质数唯一分解定理，一个数可以除以一系例质数而得到分解，而且这些质数序列唯一，每个数都不同。

质数分辨定理简单的说就是 N 个质数的乘积，就是这 N 个积数可以精确分辨的整数数量，这 N 个积数组成的序列具有唯一性，每个数都有唯一的质数分解序列。

Hash 函数的设计原则：

- 一致性：如果 a==b 则 hash(a)==hash(b)。
- 高效性：计算高效便捷，O(1)，相当直接使用动态数组，在适当的情况下 resize。
- 均匀性：哈希值的分布越均匀越好，这就是对取模法中模为质数的原因。

哈希函数的高效性还体验现尽量低的哈希冲突，即尽可能的分布均匀，如果冲突明显，那么就会出现大量的数据集中出现在哈希表的其中一个 Slot，这样相当于将哈希表退化为一个数组。

教材中作者安排了两个练习，要求实现 uninstall 方法以完成整个程序，按以下实现 3 个操作交互输入：

- `#` 打头表示添加对应符号。
- `?` 打头表示查询对应符号。
- `@` 打头表示删除对应符号。

例如：

    #IN 1
    #OUT 2
    #ERR 3
    ?OUT
    OUT = 2
    @IN
    Remove IN

注意事项：

- malloc 分配的内存是没有初始化的，这样链表中的指针可能指向错误的地址，改用 calloc 分配经过清零的内存；
- 改造链表，添加一个 prev 指针，方便进行移除操作时找到上一个节点；
- 执行节点移除时，注意 hashtab 中的元素是否正确设置为头节点；
- 删除节点时，注意回收内存，并且，不要再访问回收过的内存；

以下为参考代码：

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct nlist *ListPtr;
struct nlist {      /* table entry: */
    ListPtr next;   /* next entry in chain */
    ListPtr prev;   /* prev entry in chain */
    char *name;     /* defined name */
    char *defn;     /* replacement text */
};

typedef struct cmdtag {
    unsigned char cmd;
    char name[256];
    char value[256];
} CmdTag;

#define HASHSIZE 101
static ListPtr hashtab[HASHSIZE];  /* pointer table */

ListPtr lookup(char *);
ListPtr uninstall(char *name);
ListPtr install(char *name, char *defn);
int gettag(CmdTag *tag);

/* word frequency count */
int main()
{
    CmdTag ct;
    while ((gettag(&ct)) != EOF){
        if (ct.cmd == '#'){
            install(ct.name, ct.value);
        }else if (ct.cmd == '?') {
            ListPtr list = lookup(ct.name);
            if (list == NULL){
                printf("Not Found! %s\n", ct.name);
            }else{
                printf("%s = %s\n", ct.name, list->defn);
            }
        }else if (ct.cmd == '@') {
            ListPtr removed = uninstall(ct.name);
            if (removed == NULL){
                printf("Not Found! %s\n", ct.name);
            }else{
                printf("Remove %s\n", ct.name);
            }
        }
    }
    return 0;
}

int gettag(CmdTag *tag)
{
    char cmd;
    while( (cmd = getc(stdin)) == '\n') {  }
    ungetc(cmd, stdin);
    if (cmd == '?' || cmd == '@'){
        return scanf(" %c%256s", &tag->cmd, &tag->name);
    }
    return scanf(" %c%256s %256s", &tag->cmd, &tag->name, &tag->value);
}

/* hash:  form hash value for string s */
unsigned hash(char *s)
{
    unsigned hashval;

    for (hashval = 0; *s != '\0'; s++)
        hashval = *s + 31 * hashval;
    return hashval % HASHSIZE;
}

ListPtr uninstall(char *name)
{
    ListPtr np;
    if ((np = lookup(name)) != NULL) {
        if (np->prev != NULL) {
            np->prev->next = np->next;
        }else{
            int slot = -1;
            while(hashtab[++slot]!=np) {}
            hashtab[slot] = np->next;
        }
        if (np->next != NULL) np->next->prev = np->prev;
        free((void *)np->defn);
        free((void *)np->name);
        free((void *)np);
        return np;
    }
    return NULL;
}

/* install:  put (name, defn) in hashtab */
ListPtr install(char *name, char *defn)
{
    ListPtr np;
    unsigned slot;

    if ((np = lookup(name)) == NULL) { /* not found */
        // np = (ListPtr ) malloc(sizeof(*np));
        np = (ListPtr ) calloc(HASHSIZE, sizeof(ListPtr));
        if (np == NULL || (np->name = strdup(name)) == NULL)
            return NULL;
        slot = hash(name);
        ListPtr head = hashtab[slot];
        np->next = head;
        if(head != NULL) head->prev = np;
        hashtab[slot] = np;
    } else       /* already there */
        free((void *) np->defn);   /*free previous defn */
    if ((np->defn = strdup(defn)) == NULL)
        return NULL;
    return np;
}

/* lookup:  look for s in hashtab */
ListPtr lookup(char *s)
{
    ListPtr np;

    for (np = hashtab[hash(s)];  np != NULL; np = np->next)
        if (strcmp(s, np->name) == 0)
            return np;     /* found */
    return NULL;           /* not found */
}
```


## ==⚡ ch7 - Input and Output
- 为什么 char a[1] 可以存入三个汉字的字符串？ https://www.zhihu.com/question/456630092/answer/1855656826

在最开始的一章解释了 Standard I/O 的基本使用，包括如何重定向 stdin/stdout/stderr。

从操作系统的角度来看，输入与输出不是 C 语言的一个部分，而是操作系统的责任。

但是操作系统给程序提供复杂的运行环境，这其中包括了输入和输出设备的连接，所以开发程序双必需深入理解这些问题。

为了对接这些复杂的环境，C 语言提供了 Standard I/O `<stdio.h>` 和 Standard Library `<stdlib.h>`函数库来解决基本输入输出等问题，包括从程序运行前的初始化、运行中的内存动态分配和文件读写，到程序结束的处理等。

Unix/Linux 标准 I/O 流文件与对应的 ID：

    | Handle |  Name  |   Description   |
    |--------|--------|-----------------|
    |      0 | stdin  | Standard input  |
    |      1 | stdout | Standard output |
    |      2 | stderr | Standard error  |

标准 I/O 文件的重定向：

```sh
# redirect stdout to output.txt  =
ls > output.txt
ls 1> output.txt

# append stdout to output.txt  =
ls -l >> output.txt

# redirect stderr to err.txt  =
grep -R 'MASTER' $HOME 2> err.txt

# redirect stderr to stdout, and stdout to output.txt  =
$ ls > output.txt 2>&1
## bash only ##  ==
$ ls &> output.txt

# on Windows  =
dir 2>&1 > out.txt
dir 2> nul
dir > output.txt 2> err.txt
dir 1> output.txt 2>&1

# redirect a program output to b stdin   =
a | b

# redirect file to stdin  =
# Windows only support < but not <<  =
cmd < file
# redirect fellowing command's output to cmd, until delimiter（here document）  =
cmd << delimiter
# delimiter (here document), remove beginning \t  =
cmd <<- delimiter
```

I/O 函数库提供了两大类函数，格式化的、非格式化的 I/O 函数，格式化字符参考前面的 format string：

- Unformatted input/output 
- Formatted input/output 

最简易使用的就是以下字符、字符串的输入与输出：

```c
// reads/writes from stdin/stdout
int getchar(void);
char *gets( char *str );  (until C11) 
char *gets_s( char *str, rsize_t n );  (since C11) (optional) 
int putchar( int ch );
int puts( const char *str );
// puts a character back into a file stream
int ungetc( int ch, FILE *stream );

// reads formatted input from stdin, a file stream or a buffer
int scanf( const char          *format, ... );  (until C99) 
int scanf( const char *restrict format, ... );  (since C99) 
// prints formatted output to stdout, a file stream or a buffer
int printf( const char *format, ... );  (until C99) 
int printf( const char *restrict format, ... );  (since C99)
```

另外，不得不的一个容易被初学者忽视的是溢出导致的安全问题，例如，以下代码片断使用格式化输入函数多标准输入设置中读取一个字符串：

```c
char buf[256];
scanf("%s", buf);
```

目标缓冲区只定义了 256 个字符，假如恶意用户输入的字符超过 256 个字符会发生什么呢？

显然，buf 所有地址后面 256 字符紧跟的内存区域将会被用户恶意输入的内容覆盖，如果这些内存是精心构造的代码，那么将极有可能演变为成功的堆栈溢出攻击。

解决办法是指定输入的字符宽度：

```c
#define ScanWidth(width) ScanWidthEx(width)
#define ScanWidthEx(width) ("%" #width "s")

char buf[5];
scanf("%5s", buf);
scanf(ScanWidth(MAXWORD), buf);
// scanf_s for C11
```

scanf 与 sscanf 堪称 C 的杀手级标准库函数，因为使用起来实在是太方便了，但是它们的安全隐患又是如此明显和容易被忽视。

在不同的编程语言中，字符定义是不一样的。

- C/C++ 的 char 数据类型是基本的值类型，占 8bit 内存。
- Rust 使用 Unicode，一个 char 字符占 4 字节，`std::mem::size_of::<char>()` 可以确认。
- JavaScript 也使用全球码，但是没有 char 这种原始值类型，通过 string.charAt 获取字符编码值。

在系统级语言中，C/C++ 或 Rust，内存的控制是相当自由的，特别是 C/C++，Rust 还好具有内存安全性的静态编译检查机制，如果你不知道代码在硬件上的指令行为，这是件很危险的事。

在 C/C++ 定义的字符数组：

    char a[1];

它的本意就是定义一个数组变量，并分配一块具有 1 字节的内存区域，用来存放字符数组，作为系统级语言，它才不管你在干什么，它只管自己能做什么。所以，安全的操作要求数据不超过 1 个字节，在 Rust 或 JavaScript 这样的语言中，是没有机会让你犯这种错误的。

而 C/C++ 不一样，通过 scanf 扫描输入了超过 1 个字节，事实上在 Windows 系统上使用 GBK 编码，一个汉字 2 个字节。所以，它们叫系统级语言，干一切可以干的错，包括出轨，哦，不是出轨是出错，准确地说是出栈，数据越过栈区的内存空间 Stack overflow！

为了更形象地理解，参考以下 ASCIIFlow 绘制图形示意：

    PC Memory address
     0x0001 0x0002 0x0003 0x0004 0x0005 0x0006 ...
    +------+------+------+------+------+------+------+
    |value |      |      |      |      |      |      |
    +--^---+------+------+------+------+------+------+
       |          
       +----------+
     chat a[1];---+

     0x0001 0x0002 0x0003 0x0004 0x0005 0x0006 ...
    +------+------+------+------+------+------+------+
    |  h   |   e  |   l  |  l   |  o   |      |      |
    +--^---+---^--+---^--+--^---+--^---+------+------+
       |       |      |     |      |
       +-------+-^----+-----+------+
                 |
     scanf("%s", a) <--- Enter: Hello


### ===👉 va_arg Variable-length Argument Lists
- Xv6 - a simple Unix-like teaching operating system https://pdos.csail.mit.edu/6.828/2020/xv6.html

可变长度参数 Variable-length Argument Lists 是 `<stdarg.h>` 函数库提供的功能，当调用一个函数时，会先将参数压栈，被调用函数则通过栈内存获取这些传入的参数。

为了获取这些不定长的参数，只需要一个指针，并用偏移去获取相应位置的参数。

比如，定义一个 char 指针，因为参数的长度是可变的，所以用 char 指针类型最合适，可定位到任意字节上：

- `va_list`，一个指针，定义为 char 指针类型，以便支持任意类型的地址偏移；
- `va_start`，根据最后一个参数指定的类型信息初始化参数列表，并定位到第一个可变参数地址；
- `va_arg`，根据可变参数个数，逐渐向高地址方向取出参数；
- `va_end`，清理参数列表，将指针置空；

具体实现可以参考 GCC 源代码，如 expand_builtin_va_start，位于 buildins.c 文件。

变长参数的实现是个有趣又有用的技术，参考 printf 函数原型：

    int printf(const char *fmt, ...)

这里使用了可变参数，使用省略号表达任意个参数。这种语言在 C 语言的强大底层能力下是非常容易实现的。根据函数调用规则，调用函数时，参数列表最右边的先 PUSH 到栈内，其它参数依次处理。

函数接收参数时，只需要使用一个指针指向这个参数列表，并通过每个参数所占的字节数作为偏移直接访问栈内保存的参数。C 语言提供 va_list, va_start, va_arg, va_end 等几个宏定义来做这些工作，初始体数据结构、准备读取参数、获取参数、清理数据。

以下代码摘取自 MIT 6.828 操作系统工程的 JOS 系统的代码，cprintf 函数实现了 printf 同样的功能。

```c
int vcprintf(const char *fmt, va_list ap)
{
    int cnt = 0;

    vprintfmt((void *)putch, &cnt, fmt, ap);
    return cnt;
}

int cprintf(const char *fmt, ...)
{
    va_list ap;
    int cnt;

    va_start(ap, fmt);
    cnt = vcprintf(fmt, ap);
    va_end(ap);

    return cnt;
}
```

在 vprintfmt 函数内部，解析 fmt 传入的格式字符串，根据 % 匹配格式读取指定的参数，每次调用 va_arg 就从参数中 ap 即 argments pointer 指定的位置读取指定类型的参数，并移动指令更新到下一个参数的位置。

例如，从参数列表中读取一个无符号整形：

    va_arg(*ap, unsigned int);

函数处理完后，调用 va_end 结束本次多参数传递的处理。

The C Programming Language 提供了一个精简版本的 printf 函数实现，类似 JOS 中的 vprintfmt 实现：

```c
#include <stdarg.h>

/* minprintf: minimal printf with variable argument list */
void minprintf(char *fmt, ...)
{
   va_list ap; /* points to each unnamed arg in turn */
   char *p, *sval;
   int ival;
   double dval;

   va_start(ap, fmt); /* make ap point to 1st unnamed arg */
   for (p = fmt; *p; p++) {
       if (*p != '%') {
           putchar(*p);
           continue;
       }
       switch (*++p) {
       case 'd':
           ival = va_arg(ap, int);
           printf("%d", ival);
           break;
       case 'f':
           dval = va_arg(ap, double);
           printf("%f", dval);
           break;
       case 's':
           for (sval = va_arg(ap, char *); *sval; sval++)
               putchar(*sval);
           break;
       default:
           putchar(*p);
           break;
       }
   }
   va_end(ap); /* clean up when done */
}
```

### ===👉 File Access

磁盘文件的读写，本质上和读取用户键盘输入、显示器打印输出是没有区别的，在 Linux 系统全部都抽象为文件对象，这不无道理。

当然，使用和实现上的差别还是有的，如磁盘文件的产生就是读取到文件数据的结束位置，而用户键盘输入要产生 EOF 就需要特定的按键组合，Linux 系统下通过 Ctrl+D，Windows 系统下通过行首位置输入的 Ctrl+Z 来产生 EOF 标记。

并且，磁盘文件具有随机读写的特性，不像键盘，通常只能读取(在驱动层次上可以往键盘控制器写入数据)，或者显示器只供写入。

文件操作函数也有相关的参数设置，文件操作的第一步就是获取资源，或者叫做打开文件，得到一个文件资源指针，然后才使用各种库函数进行读写操作。完成操作后，执行 `fclose` 关闭文件，释放文件指针，相当于告诉系统收回资源。这是很重要的操作，否则资源会一直被占用，即使用程序不再使用它，更重要的是系统的资源是有限的，有些系统还限制了打开文件的数量。

同样，在不需要 `stdin` 和 `stdout` 时，也可以调用 `fclose` 将它们关闭。

以下是文件打开、字符读写、字符串读取操作函数，包括格式化、非格式操作两类库函数：

```c
FILE *fp;
FILE *fopen(char *name, char *mode);
// Allowable modes indelude read ("r"), write ("w"), append ("a"), binary ("b").

// closes a file
int fclose( FILE *stream );
// synchronizes an output stream with the actual file
int fflush( FILE *stream );

// unformatted input or output of files
int getc(FILE *fp)
int putc(int c, FILE *fp)
int fgetc( FILE *stream );
int fputc( int ch, FILE *stream );

char *fgets( char          *str, int count, FILE          *stream );  // (until C99)
char *fgets( char *restrict str, int count, FILE *restrict stream );  // (since C99)
int fputs( const char          *str, FILE          *stream );  // (until C99) 
int fputs( const char *restrict str, FILE *restrict stream );  // (since C99) 

// formatted input or output of files
int fscanf( FILE          *stream, const char          *format, ... );  // (until C99) 
int fscanf( FILE *restrict stream, const char *restrict format, ... );  // (since C99) 

int fprintf( FILE *stream, const char *format, ... );  // (until C99) 
int fprintf( FILE *restrict stream, const char *restrict format, ... );  // (since C99)
```

其实对标准输入输出操作的函数，如 getchar 和 putchar 只是宏包装，添加了 stdin 或 stdout 文件的读写操作：

    #define getchar()    getc(stdin)
    #define putchar(c)   putc((c), stdout)

文件读写示范程序，实现一个 cat 命令，将文件内容打印到屏幕：

```c
#include <stdio.h>

/* cat:  concatenate files, version 2 */
main(int argc, char *argv[])
{
   FILE *fp;
   void filecopy(FILE *, FILE *);
   char *prog = argv[0];  /* program name for errors */

   if (argc == 1 ) /* no args; copy standard input */
       filecopy(stdin, stdout);
   else
       while (--argc > 0)
           if ((fp = fopen(*++argv, "r")) == NULL) {
               fprintf(stderr, "%s: can't open %s\n",
                       prog, *argv);
               exit(1);
           } else {
               filecopy(fp, stdout);
               fclose(fp);
           }
   if (ferror(stdout)) {
       fprintf(stderr, "%s: error writing stdout\n", prog);
       exit(2);
   }
   exit(0);
}


/* filecopy:  copy file ifp to file ofp */
void filecopy(FILE *ifp, FILE *ofp)
{
    int c;

    while ((c = getc(ifp)) != EOF)
        putc(c, ofp);
}
```

在处理文件的过程中，出错可能性是极高的，比如指定的文件不存在，因共享冲突打不开文件等等，所以需要对函数的返回值进行判断。

另外，可以通过 `stderr` 这个专用于错误信息的标准输出文件向使用者展示错误信息，如有必要，还可以使用 `exit` 库函数主动退出程序，并设置一个返回码 Exit Code 或 Error Number，当然这不是必要的，但是一种良好的习惯，这是两种典型的错误信息传递方式。

在 Windows 平台，可以在批处理文件中或命令行使用 %ERRORLEVEL% 来获取 ErrorCode。

在 Linux 平台，可以使用 Shell 的一个特殊变量来获取返回码，如 `echo $?` 会将上一个命令的返回值打印出来。

通常，`stderr` 内容会打印在屏幕上，即用户将使用将 `stdout` 重定向到文件，它们相互间也不影响，除非对标准错误文件进行重定向。


### ===👉 Line Input and Output

整行的输入输出是文本处理的常用功能，C 语言提个的格式化输入函数也支持整行内容的输入。

在 fscanf 或 scanf 函数中使用格式化字符 `%[^\n]` 表示匹配一行输入，使用换行符 '\n' 作为分隔符号。但是，这种输入不包括非 ASCII 字符，如输入 "French suits of trèfles" 将丢失后面四个字符。

库函数 `gets` `puts` 和 `fgets` and `fputs` 类似，前者只是包装了 stdin 和 stdout 的宏定义，这些字符串输入、输出函数也对 '\n' 进行了处理，`gets` 则删除了结尾的换行符号，而 `puts` 则相反，在输出内容中附加了一个换行符号。

```c
/* fgets:  get at most n chars from iop */
char *fgets(char *s, int n, FILE *iop)
{
   register int c;
   register char *cs;

   cs = s;
   while (--n > 0 && (c = getc(iop)) != EOF)
       if ((*cs++ = c) == '\n')
           break;
   *cs = '\0';
   return (c == EOF && cs == s) ? NULL : s;
}

/* fputs:  put string s on file iop */
int fputs(char *s, FILE *iop)
{
   int c;

   while (c = *s++)
       putc(c, iop);
   return ferror(iop) ? EOF : 0;
}
```

类似 scanf 函数一样不安全，gets 也容易产生缓冲区溢出问题，C 语言直到 C11 规范才引入 gets_s 安全版，但要实现它不难，只需要将 fets 函数的参数利用起来，约束最大输入长度：

```c
// reads a character string from stdin
char *gets( char *str ); //  (until C11) 
char *gets_s( char *str, rsize_t n ); // (since C11) (optional) 

/* getline:  read a line, return length */
int getline(char *line, int max)
{
   if (fgets(line, max, stdin) == NULL)
       return 0;
   else
       return strlen(line);
}
```

示范宽字符整行输入输出：

```c
#include <wchar.h>
#include <stdio.h>

int main(){
    wchar_t buf[256];
    wscanf(L"%[^\n]", buf);
    wprintf(L"IN: %s\n", buf);
}
```

以下示范文本行的读写，代码摘自 cppreference.com：

```c
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    FILE* tmpf = tmpfile();
    fputs("Alan Turing\n", tmpf);
    fputs("John von Neumann\n", tmpf);
    fputs("Alonzo Church\n", tmpf);
 
    rewind(tmpf);
 
    char buf[8];
    while (fgets(buf, sizeof buf, tmpf) != NULL)
          printf("\"%s\"\n", buf);
 
    if (feof(tmpf))
       puts("End of file reached");
}
```

Output:

    "Alan Tu"
    "ring
    "
    "John vo"
    "n Neuma"
    "nn
    "
    "Alonzo "
    "Church
    "
    End of file reached


### ===👉 File Differ
- 读懂diff http://ruanyifeng.com/blog/2012/08/how_to_read_diff.html
- Detailed Unified https://www.gnu.org/software/diffutils/manual/html_node/Detailed-Unified.html
- An O(ND) Difference Algorithm and Its Variations http://xmailserver.com/diff2.pdf
- Myers' Diff Algorithm : The linear space refinement http://simplygenius.net/Article/DiffTutorial2
- The Myers diff algorithm https://blog.jcoglan.com/2017/02/12/the-myers-diff-algorithm-part-1/
- Diff Strategies https://neil.fraser.name/writing/diff/
- Diff算法与实现 http://koala.ink/posts/4ee58d50/

教材中布置了几个练习，其中文件内容比较值得去实践。

实现一个 differ 程序比较有挑战性，并且它十分有用，Unix/Linux 系统内置 diff 命令，这是一个很重要的工具程序。它用来比较两个文本文件的差异，是代码版本管理的基石之一。

在命令行下，输入以下命令：

    $ diff fileA fileB

就会得到两个文件的差异报告，差异信息有三种 diff 报告格式显示：

- 正常格式（normal diff）
- 上下文格式（context diff）
- 合并格式（unified diff）

正常格式使用 `NMN` 这样的格式表示差异状态信息，这 3 个字母表示三个部分：

- 前面的 N 表示 fileA 的行号；
- 后面的 N 表示 fileB 的行号；
- M 是一个代表模式的字符，c 表示内容改变模式 change，还有 a 表示增加 addition，d 表示删除 deletion；

然后是，fileA 和 fileB 相关的内容一行一行罗列，并且使用 `<` 打头表示删除行内容，使用 `>` 表示增加行内容。两个文件的内容使用 --- 分隔，前面是 fileA 的内容，后面是 fileB 的内容。

例如，以下表示第 4 行内容改动，fileA 第 4 行内容删除，fileB 第 4 行内容为新增，即修改后的内容：

    4c4
    < sometext
    ---
    > new text

现代大量使用的是合并格式，这是因为如果两个文件相似度很高，那么上下文格式的 diff 会产生大量重复的内容，很浪费空间。1990 年，GNU diff 率先推出了合并格式的 diff 报告格式，两个比较的文件上下文合并在一起显示，不进行分隔。Git 代码管理工具也使用这种格式，可以使用 git diff 命令查看差异。

在 diff 命令中加入 -u 参数启用 unified diff 格式：

    $ diff -u f1 f2

git diff 报告格式参考：

    --- a/CTF.md
    +++ b/CTF.md
    @@ -1,9 +1,491 @@

    +# 🚩 CTF PNG 文件隐写术
    +- https://github.com/ReFirmLabs/binwalk
    +- http://www.libpng.org/pub/png/libpng-manual.txt
    +- PNG Reference Library: libpng https://libpng.sourceforge.io/index.html
    +- PNG Specification: File Structure http://www.libpng.org/pub/png/spec/1.2/PNG-Structure.html
    +- CRC Algorithm http://www.libpng.org/pub/png/spec/1.2/PNG-Structure.html#CRC-algorithm
    +- A Painless Guide to CRC Error Detection Algorithms Ross Williams 1993 https://www.zlib.net/crc_v3.txt

要点：

- `---` 表示变动前的文件 f1，`+++` 表示变动后的文件 f2。
- `@@` 之间的两组数字对应表示两个文件变动内容的起止，逗号前面的数字表示起始行号，后面的数字表示总行数。

参考报告中的 `-1,9 +1,491` 表示原文件的第 1 行到后续的共 9 行内容变更为新文件的第 1 行到后续的共 491 行内容，也就是添加大量新内容。这里的行号包括了真正变动内容的前 3 行和后 3 行，所以真正修改的内容所在行号需要 +3，除非修改的是文件开始以的前面 3 行。正负号分别表示两个文件，可以有多组内容变动，这样就有多个 `@@` 标记。

    @@ from-file-range to-file-range @@ [header]

    from-file-range: -<start line>,<number of lines>
    to-file-range: +<start line>,<number of lines>

然后是相关的内容，按行罗列，每一行最前面的一个字符为标志位，用空格表示无变动，用 `-` 表示删除行，`+` 表示增加行，如果增加多行连续，只使用最前面一行的 `+` 号表示。通常在控制台中显示删除的内容为红色，新增的内容为绿色，无改动内容为白色。

Git diff 的实现是通过动态规划算法实现差异比较的，通过求最长公共子序列（LCS）算法实现。它可以非清晰地比较出，两个文件中，哪些内容被删除，哪里有新内容插入，哪些内容有改动。

解决最长公共子序列问题通常有以下两种方法：

- Shortest Edit Script ( SES )
- Longest Common Subsequence ( LCS )

在比较两个文件时，通常需要打出更新后的文件增加、删减、修改的内容。SES 算法只需要指出哪些内容是新插入的，哪些是删减的。这些方法可以生成一个 diff 文件，用于指导如何从旧文件生成更新后的文件，这样能节省大量资源，包括网络带宽、数据库容量等。

相关的论文是 Eugene W. Myers 于 1986 在 Algorithmica 期刊上发布的 An O(ND) Difference Algorithm and Its Variations。

计算两个文本相同部分的问题，即求两个字符串的最长公共子序列 LCS - Longest Common Subsequence 问题。使用动态规划解决 LCS 问题的时间复杂度为 O(mn)，比简单的递归实现要快多了。空间复杂度是 O(mn)，因为使用了一个动态规划表。

子序列 `Subsequence` 定义，设序列 `X=<x1, x2, …, xm>`，从 X 序列中任意取出若干个元素，按照元素下标从小到大的顺序排列得到一个新的序列 `Z=<z1, z2, ..., zk>`，则 Z 为 X 的一个子序列。子序列只要求元素的前后位置关系与原序列中保持一致即可，不必保证元素必需是连续的。

公共子序列 `Common Subsequence` 定义，给出两个序列 X 与 Y，找到一个序列 Z，满足：Z 是 X 的子序列又是 Y 的子序列，则 Z 为 X 与 Y 的一个公共子序列。

最长公共子序列定义，给出两个序列 X 与 Y，找到一个公共子序列 Z，其长度是 X 与 Y 所有公共子序列中长度最长的一个。

注意区别最长子串，子串 `Substring` 是指序列中任意连续的部分，整个序列本身就是最长子串。

如果暴力枚举所有子序列，一个长度为 m 的序列，存在 2^m 个子序列，在一个 n 长度的序列中判断一个子序列的时间复杂度为 O(n)，因此暴力求解 LCS 算法的时间复杂度为 `O(n*2^m)`，效率极低的指数级时间复杂度。




### ===👉 Miscellaneous Functions
- Pseudo-random number generation https://en.cppreference.com/w/c/numeric/random
- memory management https://en.cppreference.com/w/c/memory
- strings conversions https://en.cppreference.com/w/c/string
- program utilities https://en.cppreference.com/w/c/program

这里罗列了一些常用的标准库函数，更完整的列表应该参数头文件定义：

```c
// 7.8.1 String Operations <string.h>
// In the following, s and t are char *'s, and c and n are ints. 
strcat(s,t)     // concatenate t to end of s 
strncat(s,t,n)  // concatenate n characters of t to end of s 
strcmp(s,t)     // return negative, zero, or positive for s < t, s == t, s > t 
strncmp(s,t,n)  // same as strcmp but only in first n characters 
strcpy(s,t)     // copy t to s 
strncpy(s,t,n)  // copy at most n characters of t to s 
strlen(s)       // return length of s 
strchr(s,c)     // return pointer to first c in s, or NULL if not present 
strrchr(s,c)    // return pointer to last c in s, or NULL if not present 

// 7.8.2 Character Class Testing and Conversion <ctype.h>
// In the following, c is an int that can be represented as an unsigned char or EOF. The function returns int. 
isalpha(c)      // non-zero if c is alphabetic, 0 if not 
isupper(c)      // non-zero if c is upper case, 0 if not 
islower(c)      // non-zero if c is lower case, 0 if not 
isdigit(c)      // non-zero if c is digit, 0 if not 
isalnum(c)      // non-zero if isalpha(c) or isdigit(c), 0 if not 
isspace(c)      // non-zero if c is blank, tab, newline, return, formfeed, vertical tab 
toupper(c)      // return c converted to upper case 
tolower(c)      // return c converted to lower case 

// 7.8.3 Ungetc <stdio.h>
// pushes the character c back onto file fp, and returns either c, or EOF for an error.
int ungetc(int c, FILE *fp)

// 7.8.4 Command Execution <stdio.h>
// ex: int exitcode = system("date");
int system( const char *command )

// 7.8.5 Storage Management <stdlib.h>
// The functions malloc and calloc obtain blocks of memory dynamically. 
// malloc returns a pointer to n bytes of uninitialized storage, or NULL if fail. 
void *malloc(size_t n)
// calloc returns a pointer to n * size bytes of storage initialized to zero, or NULL if fail
void *calloc(size_t n, size_t size)
// free deallocates previously allocated memory by malloc or calloc.
void  free( void* ptr )

// 7.8.6 Mathematical Functions <math.h>
// Each takes one or two double arguments and returns a double. 
sin(x)      // sine of x, x in radians 
cos(x)      // cosine of x, x in radians 
atan2(y,x)  // arctangent of y/x, in radians 
exp(x)      // exponential function ex 
log(x)      // natural (base e) logarithm of x (x>0) 
log10(x)    // common (base 10) logarithm of x (x>0) 
pow(x,y)    // xy 
sqrt(x)     // square root of x (x>0) 
fabs(x)     // absolute value of x 

// 7.8.7 Random Number generation <stdlib.h>
int rand()  // computes a sequence of pseudo-random integers in [0, RAND_MAX]
#define frand() ((double) rand() / (RAND_MAX+1.0)) // in [0, 1]
```

其中，动态内存管理函数是 C 语言的重点内存，其重要性不来于 C 语言的指针，并且是容易出错的部分，列如对动态分配的内存进行二次释放，或者释放非 malloc 和 calloc 分配的内存。

释放内存，意味着动态分配的内存被回收，不再具有访问权限，如果进行访问则触发 SegmentFall 异常：

```c
int *ip;
ip = (int *) calloc(n, sizeof(int));
free(ip);

// A typical but incorrect piece of code is this loop that frees items from a list: 
for (p = head; p != NULL; p = p->next) /* WRONG */
    free(p);

// The right way is to save whatever is needed before freeing: 
for (p = head; p != NULL; p = q) {
    q = p->next;
    free(p);
}
```

在后面的章节还会继续探讨这动态内存分配，实现内存分配器。


## ==⚡ ch8 - The UNIX System Interface
- The Unix Programming Environment Brian W. Kernighan, Rob Pike https://book4you.org/book/2753533/762464
- The Practice of Programming Brian W. Kernighan, Rob Pike https://book4you.org/book/735475/780085
- The Art of UNIX Programming Eric S. Raymond https://book4you.org/book/1269633/3c4a32
- Advanced Programming in the UNIX® Environment 3rd https://book4you.org/book/2167553/a59ff8
- UNIX Network Programming, Volume 1: Networking APIs: Sockets and XTI, 2nd https://book4you.org/book/455701/98d00b
- UNIX Network Programming, Volume 1: The Sockets Networking API, 3rd https://book4you.org/book/5337014/e847e9
- UNIX Network Programming, Volume 2: Interprocess Communications https://book4you.org/book/656980/d47b46

最一个章节的口号很明显，就是面向 Unix-like 编程，面向 Linux 编程！作为 Unix 类型的开源操作系统，Linux 已经扛过 Unix 的大旗，大量开放的源代码意味着可以学习到真正的技术，如果是面向 Windows 编程，那么，多半是面向调包编程，除非你可以加入 M$ 内部团队，否则就是在黑箱操作。

但是，使用还是习惯了 Windows，包含这份文档的写作，也是在 Windows 平台上完成的，Unix 程序实验是在 Windows WSL 子系统上完成的，所以节省时间是重要的因素，不玩黑箱是一条底线。

C 语言是和 UNIX 系统伴生的，它们有着相同的函数式编程风格，甚至可以将 UNIX 作为一种函数式典范，它提供一系列的系统 API，也叫 system cvalls，供用户程序调用。

系统调用涉及多个方面，主要有：

- 文件 Files & Directories
- Standard I/O Library & Advanced I/O & Terminal I/O
- 系统信息 System Data Files & Information
- 进程环境 Process Environment
- 进程控制 Process Control
- 进程关系 Process Relationships
- 信号 Signals
- 线程 Threads
- 线程控制 Threads Control
- 进程间通信 Interprocess Communication & Network IPC & Advanced IPC

这里不可能完全涉及，只能挑最基本的文件和进程环境部分内容，主要是文件 I/O 操作，和进程的内存分配，具体可以参考 Advanced Programming in the UNIX® Environment 3rd Edition。

当然，Linux 作为 Unix-Like 系统，也可以用作实验之用，现在通过 Windows WSL 就可以安装，如果工作站已经安装 Linux 系统更好。


### ===👉 File I/O
- https://en.cppreference.com/w/c/io/fread
- https://en.cppreference.com/w/c/io/fwrite

在 Unix 系统中，所有外连设备都抽象为文件，即使是键盘或屏幕，它们对应当作只读、只写文件对象对待。大多数情况下，读写文件需要通知系统，即调用 API 打开文件，可以选择使用 append 模式保留文件内容或丢弃内容。系统在打开文件时，检查文件是否存在，当前用户程序是否有权打开文件。

系统打开对应的文件后，会返回一个代表文件描述符的非负值整数，file descriptor，它用来模块标准库中的文件指针，或者 MS-DOS 中的文件句柄。系统通过文件描述符维护所有文件相关信息，用户程序通过描述符来引用文件。

因为程序基本都会使用一键盘输入和屏幕输出，所以几乎所有系统中，它们都被当作标准的输入输出文件。

Unix/Linux 标准 I/O 流文件与对应的 ID：

    | Handle |  Name  |   Description   |
    |--------|--------|-----------------|
    |      0 | stdin  | Standard input  |
    |      1 | stdout | Standard output |
    |      2 | stderr | Standard error  |

关于它些标准文件的使用，重定向、管道操作，已经在前面解释过，参考 ch7 - Input and Output。

    prog <infile >outfile
    prog | to | another

通过重定向、管道操作，可以改变程序中关联的标准输入输出文件，包括 stderr。

系统提供底层文件 I/O 函数 read 和 write 来读写文件，有对应 C 语言的标准 I/O 函数：

```c
int n_read = read(int fd, char *buf, int n);
int n_written = write(int fd, char *buf, int n);
```

参数：

- fd  - 指定一个文件描述符，通过 open 函数获取；
- buf - 指定读写的内容所在的内存位置；
- n   - 指定最大读写字节数；

两个函数都返回已经操作的字节数，如果写入的字节数不等于指定的字节数，就表示写入出错了。如果读取的字节数为 0 就暗示文件结尾，返回 -1 表示出错。

可以指定读写任意长度的字节，但常用的是指定 1 个字节的非缓存式读写，或者 1024、4096 这样的设备物理块大小会更有效率，稍大一点的缓冲会降低系统调用，同时也就是在降低低层消耗，比如机械磁盘的磁头寻道操作。

以下是一个系统调用示范，将标准输入的内容写入标准输出文件。在 Linux 系统上，提供了 `<unistd.h>` 头文件，即 Unix Standard API，它包装了大多数 Unix 系统调用，虽然也有 `<syscall.h>` 但它本身并非 Unix 的系统调用头文件。

```c
// #include "syscalls.h"
// #include <syscall.h>
#include <unistd.h>
#include <stdio.h>

int main()  /* copy input to output */
{
    char buf[BUFSIZ];
    int n;

    while ((n = read(0, buf, BUFSIZ)) > 0)
        write(1, buf, n);
    return 0;
}
```

代码中的 BUFSIZ 定义在系统头文件内，在 Linux 系统中，则由 `<stdio.h>` 头文件定义。

通过底层 API，可以实现 C 语言函文件数库，如 getchar putchar 等等：

```c
#include "syscalls.h"

/* getchar:  unbuffered single character input */
int getchar(void)
{
   char c;

   return (read(0, &c, 1) == 1) ? (unsigned char) c : EOF;
}
```

封装后，当读取到文件结束，函数就返回一个 EOF - End of File 常量标记，用户程序可以通过它来判断文件是还有内容。

另一个实现是缓冲版本，一次读取大块数据以提升系统调用的效率，然后再逐字节返回给用户程序：

```c
#include "syscalls.h"

/* getchar:  simple buffered version */
int getchar(void)
{
   static char buf[BUFSIZ];
   static char *bufp = buf;
   static int n = 0;

   if (n == 0) {  /* buffer is empty */
       n = read(0, buf, sizeof buf);
       bufp = buf;
   }
   return (--n >= 0) ? (unsigned char) *bufp++ : EOF;
}
```

如果需要配合 `<stdio.h>` 使用以上函数，就需要使用预处理指定 `#undef getchar` 来


### ===👉 Open, Creat, Close, Unlink
- https://www.man7.org/linux/man-pages/man3/error.3.html
- https://www.linux.com/training-tutorials/understanding-linux-file-permissions/

和默认用途的标准输入输出文件不同，其它文件操作需要在打开文件前明确读写目的，对应系统调用 open 和 creat。

打开文件和前面章节讨论的 C 语言库函数类似，只不过返回的是文件描述符，即一个非负值整数，而不是一 FILE 指针。如果返回 -1 就表示打开文件错误，可能是文件不存在。

```c
#include <fcntl.h>

int fd;
int open(char *name, int flags, int perms);
// fd = open(name, O_RDONLY, 0);

int creat(char *name, int perms);
// fd = creat(name, perms);
```

在 System V UNIX 中，以上常量定义在 `<fcntl.h>` 头文件，或者在 Berkeley (BSD) 版本定义在 `<sys/file.h>`。

打开文件时，perms 即 permissions 参数总是设置为 0，如果文件不存在，则产生错误，而 flags 传入文件操作目的：

- `O_RDONLY` open for reading only 
- `O_WRONLY` open for writing only 
- `O_RDWR`  open for both reading and writing 

对于创建文件，如果文件不存在，则新建文件。如果文件存在，那么就重写它的内容，将原文件的内容截断。同样，如果返回 -1 表示创建文件失败，文件存在并不会导致错误。

文件权限只在创建文件时设置，或者使用 Shell 命令 chmod 进行修改，这个权限值是一个 9-bit 的数据，控制文件如何被 owner、owner's group、others 等用户或用户组进行读取、写入、执行。每 3-bit 控制一类用户或用户组的访问权限，总共刚好使用 3 个八进数字就可以表示，例如，0755 给 owner 指定读取、写入、执行权限，而给其它用户指定读取、执行权限。即 7 和 5 对应的二进制为 111 和 101，从左到右，各个比特代表读取、写入、执行。

文件的权限信息可以使用 ls 命令查看，使用 chmod 命令修改：

    $ ls -l
    -rw-r--r-- 1 jeango jeango   31 May  4 07:56 demo.sh
    ---------- - ------ ------ ---- ------------ -------
    ^          ^ ^      ^      ^    ^            ^
    |          | |      |      |    |            第七列：文件名
    |          | |      |      |    第六列：文件最后更新（修改）时间
    |          | |      |      第五列：文件长度（大小）
    |          | |      第四列：文件的所属用户组 
    |          | 第三列：文件的所有者 
    |          第二列：一个数字表示文件 inode 链接个数
    第一列：文件类型、和文件权限，对应 owner/group/others 

文件类型，大体分为如下几类：

- `d` ：目录 
- `-` ：文件 
- `l` ：链接 
- `s` ：socket 
- `p` ：named pipe 
- `b` ：block device 
- `c` ：character device

文件权限分为三段，对应文件所有者的权限、文件所属组的权限、和其他用户对文件的权限，每组有 3 个字符表示不同的权限：

- `r` : Readable 可读，用数字 4 表示
- `w` : Writable 可写，用数字 2 表示
- `x` : Executable 可执行，用数字 1 表示
- `-` : 无权限，用数字 0 表示

以下是一个演示程序，实现一个简单的 cp 命令，将一个文件复制到另一个文件，并且不允许第二个参数是目录，设置默认的读写权限，而不是复制文件的权限信息：

```c
#include <stdio.h>
#include <fcntl.h>
#include <unistd.h> //"syscalls.h"
#include <error.h>
#include <errno.h>
#define PERMS 0666  /* RW for owner, group, others */

extern int errno;

// void error(char *, ...);

/* cp:  copy f1 to f2 */
int main(int argc, char *argv[])
{
    int f1, f2, n;
    char buf[BUFSIZ];

    if (argc != 3)
        perror("Usage: cp  from to");
    if ((f1 = open(argv[1], O_RDONLY, 0)) == -1)
        error(0, errno, "cp: can't open %s", argv[1]);
    if ((f2 = creat(argv[2], PERMS)) == -1)
        error(0, errno, "cp: can't create %s, mode %03o", argv[2], PERMS);
    while ((n = read(f1, buf, BUFSIZ)) > 0)
        if (write(f2, buf, n) != n)
            error(0, errno, "cp: write error on file %s", argv[2]);
    return 0;
}
```

在 Windows WSL 系统中，creat 函数可以正确设置 owner 的权限，但 group 和 all users 的权限中不能设置写入权限。

使用 stat 系统调用可以获取文件的信息，这样就可以对文件的权限进行复制。

注意，error 这个系统调用，在 Unix 系统上，它很像 printf，以下是参考实现：

```c
#include <stdio.h>
#include <stdarg.h>

/* error:  print an error message and die */
void error(char *fmt, ...)
{
   va_list args;

   va_start(args, fmt);
   fprintf(stderr, "error: ");
   vprintf(stderr, fmt, args);
   fprintf(stderr, "\n");
   va_end(args);
   exit(1);
}
```

在 Linux 系统上，error 系列函数定义在 `<error.h>` 头文件中，并且参数列表不同，可以打印 errnum 对应的错误说明信息。如果只是打印一段字符串，可以使用 `<stdio.h>` 的定义 perror 函数。同时，为了获取错误码，需要引入 `<errno.h>` 标准头文件，使用其定义的 errno 变量，在各种操作出现错误时，库函数会设置这个变量为相应的错误码，配置 error 函数可以将错误信息打印出来，向用户提供友好的提示。

```c
#include <stdio.h>
void perror(const char *s);

#include <error.h>
void error(int status, int errnum, const char *format, ...);
// ex: ./cp: cp: can't open test.js: Operation not permitted
```

系统 API 的帮助信息可以通过以下命令来查询 Linux Programmer's Manual，在新版的 Ubuntu 系统中默认已经安装些文档：

```sh
# POSIX Programmer's Manual  =
apt install manpages-posix-dev
# Linux Programmer's Manual  =
sudo apt-get install manpages-dev

$ apropos "^error$"
$ man 3 error

$ man 3 "^printf$"
printf (1)           - format and print data
printf (1posix)      - write formatted output
printf (3)           - formatted output conversion
printf (3posix)      - print formatted output

$ apropos "^intro$"
intro (1)            - introduction to user commands
intro (2)            - introduction to system calls
intro (3)            - introduction to library functions
intro (4)            - introduction to special files
intro (5)            - introduction to file formats and filesystems
intro (6)            - introduction to games
intro (7)            - introduction to overview and miscellany section
intro (8)            - introduction to administration and privileged commands
```

man 命令的操作类似 vim，如 q 表示退出，10G 跳到第 10 行，d 和 u 分别是向下、向上翻页。


在同一个程序中，同时打开的文件数量通常为 20 个，需要处理多文件的程序就需要重用文件描述符，使用 close(int fd) 来断开描述符与打开的文件的关联，并释放描述符以供其他文件使用。对应的 C 语言库函数是 fclose，只是没有缓冲区的 flush 操作。正常的退出程序，如 exit 或主函数的 return 都有后续的文件清理过程，打开的文件会被关闭。

系统调用 `unlink(char *name)` 会从文件系统中移除文件，即删除，对应 C 语言标准库的 remove 函数。 

Exercise 8-1. Rewrite the program cat from Chapter 7 using read, write, open, and close instead of their standard library equivalents. Perform experiments to determine the relative speeds of the two versions. 


### ===👉 Random Access - Lseek

通常，输入输出是按顺序处理的，即每次读写的数据就是文件当前位置。在需要的情况下，可以在文件的任意位置进行读写，这种操作叫随机读写。

系统调用 lseek 提供了方法，可以在文件的数据中定位到任意位置进行操作，函数返回值是文件位置，出错时返回 -1：

    long lseek(int fd, long offset, int origin);

参数中，指定 offset 相对 origin 指定位置的偏移位置，按字节数计算，后续的读写会对最新的位置操作。设置 origin 为 0, 1, 2 分别代表相对文件开始位置、当前位置、结束位置。

比如说，以 append 模式打开的文件，或者使用 >> 重定向写入的文件，就会有一个 seek 操作，将文件的位置设置在其结束位置进行写入：

    lseek(fd, 0L, 2);

如果，需要重新回到文件开头，使用 C 语言库的 `rewind` 库函数，或者以下系统调用： 

    lseek(fd, 0L, 0);

使用 lseek，可以或多或少地将文件视为数组进行操作，但代价是访问速度较慢。例如，下面的函数从文件中的任意位置读取任意数量的字节，它返回读取的数字，出错时返回 -1。

```c
#include "syscalls.h"

/*get:  read n bytes from position pos */
int get(int fd, long pos, char *buf, int n)
{
   if (lseek(fd, pos, 0) >= 0) /* get to pos */
       return read(fd, buf, n);
   else
       return -1;
}
```

C 语言标准库中函数 fseek 和 lseek 类似，只是第一个参数为 FILE 指针，并且返回非零值表示错误。


### ===👉 Example - An implementation of Fopen and Getc

教材最后一章有三个示范，它们占据子过半的内容，这几个示范程序也是比较重要的基础训练。

第一个例子是实现利用系统调用来实现文件打开函数，并读取内容，像 C 语言库函数 fopen 和 getc 那样。

前面已经使用了标准库的文件指针，它和系统调用中的文件描述符就是指针与整数之间的差别，而文件指针指向一个包含文件信息的结构体：

- 一个缓存区指针，用来读写大块的数据；
- 一个记数变量，指示缓冲区还有多少数据；
- 一个指针指向缓存区下一个待处理字符地址；
- 一个标识变量，描述文件的读写模式，错误状态等等；
- 一个文件描述符；

结构体定义在 `<stdio.h>`，以下为摘录的代码片断，库函数使用的名称以下划线开头，表示它们是内部使用的，使用下划线以避免和用户程序中的名称发生冲突，所有标准库例程都使用此约定。

```c
#define NULL      0
#define EOF       (-1)
#define BUFSIZ    1024
#define OPEN_MAX  20    /* max #files open at once */

typedef struct _iobuf {
   int  cnt;       /* characters left */
   char *ptr;      /* next character position */
   char *base;     /* location of buffer */
   int  flag;      /* mode of file access */
   int  fd;        /* file descriptor */
} FILE;
extern FILE _iob[OPEN_MAX];

#define stdin   (&_iob[0])
#define stdout  (&_iob[1])
#define stderr  (&_iob[2])

enum _flags {
   _READ   = 01,   /* file open for reading */
   _WRITE  = 02,   /* file open for writing */
   _UNBUF  = 04,   /* file is unbuffered */
   _EOF    = 010,  /* EOF has occurred on this file */
   _ERR    = 020   /* error occurred on this file */
};

int _fillbuf(FILE *);
int _flushbuf(int, FILE *);

#define feof(p)     ((p)->flag & _EOF) != 0)
#define ferror(p)   ((p)->flag & _ERR) != 0)
#define fileno(p)   ((p)->fd)

#define getc(p)   (--(p)->cnt >= 0 \
              ? (unsigned char) *(p)->ptr++ : _fillbuf(p))
#define putc(x,p) (--(p)->cnt >= 0 \
              ? *(p)->ptr++ = (x) : _flushbuf((x),p))

#define getchar()   getc(stdin)
#define putcher(x)  putc((x), stdout)
```

宏定义 getc 正常地递减 count，将指针偏移到下一个字符，并返回当前指向的字符，无符号值类型。注意，反斜杠表示续行，整个表达式就是一个三元运算符。如果 count 为负值，就会调用 `_fillbuf` 补充缓冲区的内容，重新初始化结构内容并返回一个字符。

类似地，putc 定义的宏语句的操作方式与 getc 基本相同，即在缓冲区已满时调用函数 `_flushbuf`。另外，还包括用于访问错误、文件结束状态，以及文件描述符的宏。

现在，可以编写 fopen 函数了，它大部分功能是将文件打开并定位到正确的位置，并设置标志位以指示正确的状态。fopen 不分配任何缓冲空间，这会在第一次读取文件时由 `_fillbuf` 设置。

```c
#include <fcntl.h>
#include "syscalls.h"
#define PERMS 0666    /* RW for owner, group, others */

FILE *fopen(char *name, char *mode)
{
   int fd;
   FILE *fp;

   if (*mode != 'r' && *mode != 'w' && *mode != 'a')
       return NULL;
   for (fp = _iob; fp < _iob + OPEN_MAX; fp++)
       if ((fp->flag & (_READ | _WRITE)) == 0)
           break;        /* found free slot */
   if (fp >= _iob + OPEN_MAX)   /* no free slots */
       return NULL;

   if (*mode == 'w')
       fd = creat(name, PERMS);
   else if (*mode == 'a') {
       if ((fd = open(name, O_WRONLY, 0)) == -1)
           fd = creat(name, PERMS);
       lseek(fd, 0L, 2);
   } else
       fd = open(name, O_RDONLY, 0);
   if (fd == -1)         /* couldn't access name */
       return NULL;
   fp->fd = fd;
   fp->cnt = 0;
   fp->base = NULL;
   fp->flag = (*mode == 'r') ? _READ : _WRITE;
   return fp;
}
```

这个版本的 fopen 没有处理所有访问模式，比如 binary 模式，这种模式对 UNIX 系统是没有特别含意的，但也不需很多代码来实现。还有 `+` 表示读写模式，也没有支持。

读取文件的第一个 getc 调用遇到 count 为零，则强制执行 `_fillbuf`，如果文件不是读取模式则返回 EOF，否则尝试分配缓冲区读取内容。

一旦缓冲区建立，`_fillbuf` 调用 read 方法读取数据填充它，并设置 count 为相应的字节数，以及指针，并且将第一个字节返回。后续的 `_fillbuf` 调用会在缓冲区中获取内容。

```c
#include "syscalls.h"

/* _fillbuf:  allocate and fill input buffer */
int _fillbuf(FILE *fp)
{
   int bufsize;

   if ((fp->flag&(_READ|_EOF|_ERR)) != _READ)
       return EOF;
   bufsize = (fp->flag & _UNBUF) ? 1 : BUFSIZ;
   if (fp->base == NULL)     /* no buffer yet */
       if ((fp->base = (char *) malloc(bufsize)) == NULL)
           return EOF;       /* can't get buffer */
   fp->ptr = fp->base;
   fp->cnt = read(fp->fd, fp->ptr, bufsize);
   if (--fp->cnt < 0) {
       if (fp->cnt == -1)
           fp->flag |= _EOF;
       else
           fp->flag |= _ERR;
       fp->cnt = 0;
       return EOF;
   }
   return (unsigned char) *fp->ptr++;
}
```

最后剩下的唯一悬而未决的事情，就是设置默认的标准输入输出文件，必须为 stdin、stdout 和 stderr 定义数组 iob 并初始化，以供程序的正常使用：

```c
FILE _iob[OPEN_MAX] = {    /* stdin, stdout, stderr */
   { 0, (char *) 0, (char *) 0, _READ, 0 },
   { 0, (char *) 0, (char *) 0, _WRITE, 1 },
   { 0, (char *) 0, (char *) 0, _WRITE, | _UNBUF, 2 }
};
```

初始化列表中，stdin 定义为只读，stdout 定义为只写，而 stderr 定义为只写且不使用缓冲区，它们对应的文件描述符为 0、1、2。

到这里，一个完整的程序结构框架已经完全解析透彻，但是还有更多更有深度的技术等着你去探索，这包括 C 语言标准库，还有，如果要基于 Linux 平台开发，需要研究 Linux 编程环境。

本小节设置了三个练习：

- 8-2. 使用字段而非 bit 操作重写 `fopen` 和 `_fillbuf`，比较两种实现的速度与代码大小。
- 8-3. 设计实现 `_flushbuf`, `fflush`, `fclose` 三个库函数。
- 8-4. 标准库的 fseek 和系统调用 lseek 差别在于 FILE 指针和文件描述符，并且库函数返回的是状态值不是位置，重写实现一个 fseek，确保与其它库函数的缓冲区协调良好。

```c
int fseek(FILE *fp, long offset, int origin)
```

### ===👉 Example - Listing Directories

获取目标结构信息是常用的文件系统交互功能，这时并不需要关心文件包含什么内容。比如，ls 命令，就是基于目标结构信息的一个工具，它只需知道目录中有什么文件，以及文件的权限、大小等信息。在 MS-DOS 系统中，也有类似的 dir 命令。

由于 UNIX 系统将目标也看作是文件，ls 只是读取文件的名字。但在访问有关文件的其他信息，如文件大小时，使用系统调用是必需的。在其他系统上，甚至访问文件名也可能需要系统调用，例如 MS-DOS 就是这样。我们想要的是以相对独立于系统的方式提供文件信息的访问，即使实现可能高度依赖于系统。

通过编写一个名为 fsize 的程序来说明这一点，这是 ls 的一种特殊形式，它打印命令行参数列表中指定的所有命名文件的大小。如果其中一个文件是目录，则 fsize 将自己递归地应用于该目录，如果根本没有参数，它将处理当前目录。

回顾一下 UNIX 文件系统结构，目录是一个包含文件名列表和它们所在位置指示。location 只是一个名为 inode list 的表的索引号。文件的 inode 保存了除文件名以外的所有文件信息。一个目录条目通常只包含两项，文件名和索引节点号 inode number。

遗憾的是，在所有 UNIX 版本系统中，目录的格式和精确内容并不相同。因此，将任务分为两部分，试图隔离不可移植的部分。外层定义了一个名为 Dirent 的结构和三个例程 opendir、readdir、closedir，以提供对目录项中的名称和节点编号的独立于系统的访问。我们将用这个接口编写 fsize，然后，展示如何在 Version 7 和 System V UNIX 使用相同目录结构的系统上实现这些功能，变体作为练习留下。

Dirent 结构包含 inode 编号和名称。文件名组件的最大长度是 NAME_MAX，这是一个依赖于系统的值。opendir 返回一个指向名为 DIR 的结构的指针，类似于 FILE，readdir 和 closedir 两个函数需要使用它。这些信息被收集到一个名为 dirent.h 的文件中。

```c
#define NAME_MAX   14  /* longest filename component; */
                              /* system-dependent */

typedef struct {       /* portable directory entry */
   long ino;                  /* inode number */
   char name[NAME_MAX+1];     /* name + '\0' terminator */
} Dirent;

typedef struct {       /* minimal DIR: no buffering, etc. */
   int fd;               /* file descriptor for the directory */
   Dirent d;             /* the directory entry */
} DIR;

DIR *opendir(char *dirname);
Dirent *readdir(DIR *dfd);
void closedir(DIR *dfd);
```

系统调用 stat 接收一个文件名，它通过结构体返回指定文件在 inode 数据表中的所有信息，或者返回 -1 如果出错。结构体定义在 `<sys/stat.h>`，参考如下。

```c
char *name;
struct stat stbuf;
int stat(char *, struct stat *);

stat(name, &stbuf);

struct stat   /* inode information returned by stat */
{
   dev_t     st_dev;      /* device of inode */
   ino_t     st_ino;      /* inode number */
   short     st_mode;     /* mode bits */
   short     st_nlink;    /* number of links to file */
   short     st_uid;      /* owners user id */
   short     st_gid;      /* owners group id */
   dev_t     st_rdev;     /* for special files */
   off_t     st_size;     /* file size in characters */
   time_t    st_atime;    /* time last accessed */
   time_t    st_mtime;    /* time last modified */
   time_t    st_ctime;    /* time originally created */
};
```

以上显示的 stat 是常用的字段，字段类型，如 dev_t 或 ino_t 定义在 `<sys/types.h>`。

模式字段 st_mode 包含一系统标志位，包括文件的类型和权限，包括读写及执行权限设置。各标志位定义在 `<sys/types.h>`，现在只需要文件类型的定义，即其中的 3-bit 数据：

```c
/* Encoding of the file mode.  */
#define __S_IFMT    0170000 /* These bits determine file type.  */

/* File types.  */
#define __S_IFDIR   0040000 /* Directory.  */
#define __S_IFSOCK  0140000 /* Socket.  */
#define __S_IFLNK   0120000 /* Symbolic link.  */
#define __S_IFREG   0100000 /* Regular file.  */
#define __S_IFBLK   0060000 /* Block device.  */
#define __S_IFCHR   0020000 /* Character device.  */
#define __S_IFIFO   0010000 /* FIFO(named pipe).  */
/* ... */
```

现在就来实现 fsize 程序，如果接收到的参数是一个文件而不是目录，就直接打印文件的大小。如果，是一个目录，就需要对目录下的一个个文件分别进行处理。

主函数负责对参数进行检查，并按相应的参数进行处理。

```c
#include <stdio.h>
#include <string.h>
#include "syscalls.h"
#include <fcntl.h>      /* flags for read and write */
#include <sys/types.h>  /* typedefs */
#include <sys/stat.h>   /* structure returned by stat */
#include "dirent.h"

void fsize(char *)

/* print file name */
main(int argc, char **argv)
{
   if (argc == 1)  /* default: current directory */
       fsize(".");
   else
       while (--argc > 0)
           fsize(*++argv);
   return 0;
}
```

然后，在 fsize 函数中打印文件大小信息，如果是一个目录，就交给 dirwalk 函数进行递归处理。判断文件是否为目录，需要通过标志位 S_IFMT 和 S_IFDIR 的比特位运算得到。注意使用圆括号，因为比特位的运算符号 & 优先级低于 == 关系运算符。 

```c
int stat(char *, struct stat *);
void dirwalk(char *, void (*fcn)(char *));

/* fsize:  print the name of file "name" */
void fsize(char *name)
{
   struct stat stbuf;

   if (stat(name, &stbuf) == -1) {
       fprintf(stderr, "fsize: can't access %s\n", name);
       return;
   }
   if ((stbuf.st_mode & S_IFMT) == S_IFDIR)
       dirwalk(name, fsize);
   printf("%8ld %s\n", stbuf.st_size, name);
}
```

调用 dirwalk 函数时，一并传递 fsize 函数指针，在其内部进行调用，如果是子目录，则 fsize 会再次递归地调用 dirwalk，直到这两个函数交替地处理完所有文件。

```c
#define MAX_PATH 1024

/* dirwalk:  apply fcn to all files in dir */
void dirwalk(char *dir, void (*fcn)(char *))
{
   char name[MAX_PATH];
   Dirent *dp;
   DIR *dfd;

   if ((dfd = opendir(dir)) == NULL) {
       fprintf(stderr, "dirwalk: can't open %s\n", dir);
       return;
   }
   while ((dp = readdir(dfd)) != NULL) {
       if (strcmp(dp->name, ".") == 0 || strcmp(dp->name, ".."))
           continue;    /* skip self and parent */
       if (strlen(dir)+strlen(dp->name)+2 > sizeof(name))
           fprintf(stderr, "dirwalk: name %s %s too long\n", dir, dp->name);
       else {
           sprintf(name, "%s/%s", dir, dp->name);
           (*fcn)(name);
       }
   }
   closedir(dfd);
}
```

每次调用 readdir 返回包含文件信息的 DIR 结构体指针，或者 NULL 如果没有更多的文件。

每个目录部分包含两个特殊的目录，一个是自身即 "."，另一个是上级目录即 ".."，处理时应该跳过，否则程序就是死循环。

到最后一层，代码依赖了系统组织目录的格式，这里为 Version 7 或 System V UNIX 系统实现最简单的 opendir, readdir, closedir 等函数，opendir 获取文件描述符，然后由 readdir 读取目录的 inode 索引号和目录名。使用到了 `<sys/dir.h>` 定义的目录结构体类型，也就是前面定义的 Dirent：

```c
#ifndef DIRSIZ
#define DIRSIZ  14
#endif
struct direct {   /* directory entry */
   ino_t d_ino;           /* inode number */
   char  d_name[DIRSIZ];  /* long name does not have '\0' */
};
```

这里的 ino_t 是类型别名，一些系统中定义为 unsigned short，但在嵌入式系统中可能是不同的类型，完整的系统类型定义在 `<sys/types.h>`。

函数 opendir 会先确认文件是一个目录，再将获取到的文件描述符通过 DIR 结构体返回用用户。注意，这里使用的是 fstat 系统调用，它通过文件描述符来获取文件信息，和 stat 函数有些差别。

```c
int fstat(int fd, struct stat *);

/* opendir:  open a directory for readdir calls */
DIR *opendir(char *dirname)
{
   int fd;
   struct stat stbuf;
   DIR *dp;

   if ((fd = open(dirname, O_RDONLY, 0)) == -1
    || fstat(fd, &stbuf) == -1
    || (stbuf.st_mode & S_IFMT) != S_IFDIR
    || (dp = (DIR *) malloc(sizeof(DIR))) == NULL)
        return NULL;
   dp->fd = fd;
   return dp;
}

/* closedir:  close directory opened by opendir */
void closedir(DIR *dp)
{
   if (dp) {
       close(dp->fd);
       free(dp);
   }
}
```

最后是 readdir 函数，它负责读取目录的名称信息，调用 read 读取目录文件。如前面所解析的 UNIX 目录文件的结构，它就一个 inode list，每个实体就是包含一个 inode 索引号和文件名的结构。如果一个实体标记为已经从系统中移除，即当前的 directory slot 并没使用，那么 inode 索引号就会设置为 0，那么就应该跳过这个记录。其它有效的实体都有一个对应的 inode 索引号码和文件名字。这些信息存储在一个局部静态变量中，每次读取目录时被覆盖。

```c
#include <sys/dir.h>   /* local directory structure */

/* readdir:  read directory entries in sequence */
Dirent *readdir(DIR *dp)
{
   struct direct dirbuf;  /* local directory structure */
   static Dirent  d;      /* return: portable structure */

   while (read(dp->fd, (char *) &dirbuf, sizeof(dirbuf))
                   == sizeof(dirbuf)) {
       if (dirbuf.d_ino == 0) /* slot not in use */
           continue;
       d.ino = dirbuf.d_ino;
       strncpy(d.name, dirbuf.d_name, DIRSIZ);
       d.name[DIRSIZ] = '\0';  /* ensure termination */
       return &d;
   }
   return NULL;
}
```

尽管这里实现的 fsize 程序是针对专用系统的，但是它演示了几个重要的概念。首先，很多程序并非系统程序，它们只使用由操作系统维护的信息。对于这样的程序，只通过标准头文件提供信息是至关重要的，并且程序包括那些头，而不是将声明嵌入它们自己。第二，小心地创建一个与系统相关的对象的接口是可能的，该对象本身相对独立于系统。

标准库的功能就是很好的例子。

Exercise 8-5. 修改 fsize 程序，打印 inode entry 的其它信息。 


### ===👉 Example - A Storage Allocator
- CS326 - Project 3: Memory Allocator https://www.cs.usfca.edu/~mmalensek/cs326/assignments/project-3.html
- Computer Systems: A Programmer's Perspective 2nd https://book4you.org/book/2190090/f10e21
- Computer Systems: A Programmer's Perspective 3rd Global Edition https://book4you.org/book/3639970/7cae39
- Operating Systems: Three Easy Pieces https://book4you.org/book/5231653/f66f3d
- Extreme C: Taking You To The Limit In Concurrency, OOP, And The Most Advanced Capabilities Of C https://book4you.org/book/5280897/0e0ca6
- Operating Systems: Principles and Practice 2nd, Vol. 1 - 4, Kernels and Processes, Concurrency, Memory Management, Persistent Storage
- 程序员的数学 结城浩 https://www.bilibili.com/read/cv7583920/
- What Every Programmer Should Know About Memory Ulrich Drepper https://www.asc.tuwien.ac.at/~schoeberl/wiki/lva/seminar11/cpumemory.pdf
- Memory management: Algorithms and implementation in C/C++ Bill Blunden https://book4you.org/book/459114/5840d1
- A Memory Allocator by Doug Lea http://gee.cs.oswego.edu/dl/html/malloc.html
- mimalloc https://github.com/microsoft/mimalloc

在前面的 Chapter 5 实现了一个基于 Stack 的简单内存分配器，只实现了有最基本的功能，而且调用顺序也是后申请先释放，也没有使用什么复杂的分配算法。

现在要实现不受调用顺序限制的 malloc 和 free 版本，在必要时通过 malloc 向操作系统申请获取更多内存。例程说明了以相对独立于机器的方式编写依赖于机器的代码时所涉及的一些注意事项，还展示了结构、联合和 typedef 的实际应用。

动态内存分配算法介绍：

- 首次适应算法 First Fit
    - 优点：高址部分的大的空闲分区得到保留，为大作业的内存分配创造了条件；
    - 缺点：每次都是优先利用低址部分的空闲区，产生大量的碎片。每次都从低址部分查找，使得查找空闲分区的开销增大。
- 循环首次适应算法 Next Fit
    - 优点：空闲分区分布更加均匀，查找开销小；
    - 缺点：高址部分的大空闲分区被分小，使得大作业进入无法分配内存；
- 最佳适应算法 Best Fit
    - 优点：找到的空闲分区是大小最接近待分配内存作业大小的；
    - 缺点：产生大量难以利用的外部碎片。
- 最坏适应算法 Worst Fit
    - 优点：效率高，分区查找方便；
    - 缺点：当小作业把大空闲分区分小了，那么，大作业就找不到合适的空闲区。

Next Fit 算法分配内存时，不是从链首进行查找空闲内存，而是从上一次分配内存的下一个位置开始查找，直到找到合适的空闲内存。

Worst Fit 算法与最佳适应算法刚好相反，将空闲分区链的分区按照从大到小的顺序排序形成空闲分区链，每次查找时只要看第一个空闲分区是否满足即可。

连续分配方式是最早出现的一种存储器分配方式， 曾被广泛应用于上世纪 60 ~ 80 年代，该分配万式为个用户程序分配一个连续的内存空间， 即程序中代码或数据的逻辑地址相邻，体现在内存空间分配时物理地址的相邻。

不像之前使用预编译的固定大小的数组，使用 malloc 直接向操作系统申请内存。同时，其它程序也会申请内存，所以，实现这个内存分配器就要考虑内存不可能连续的问题，并且需要通过链表来管理已分配的内存块，每个块包括大小、地址、和下一块指针。按地址值排列，最后一个块指向开头块，形成一个环形链表。

接收内存申请时，malloc 函数扫描空闲列表，直到找到一块足够大的内存块，这种算法叫做 first fit。与之对应的是最佳适用算法 best fit，它查到符合要求的最小块。想到匹配的内存块后，就将链表对应的节点脱离出来，并且将地址返回给用户。如果内存块太大，就进行分割，返回合适的大小给用户，部分及保留在空间列表中。如果找不到足够大的块，则向操作系统申请另一个大块并链接到空闲列表中。

释放过程有一个搜索空闲列表的动作，以找到正确位置插入被释放块。如果被释放的块与任一侧的一个空闲块相邻，它将与之合并成一个更大的块，因此存储不会变得太零碎。确定邻接关系很容易，因为自由列表是按地址递减的顺序维护的。

在第 5 章中提到的一个问题是，确保 malloc 返回的存储与将存储在其中的对象正确对齐。尽管机器各不相同，但每台机器都有一种限制性最强的类型：如果限制性最强的类型可以存储在特定的地址，那么所有其他类型也可以。在某些机器上，最严格的类型是 double，通常其他情况下，int 或 long 就足够了。

空闲块包含指向链表下一个块的指针、块大小的记录，然后是空闲空间地址。开头的控制信息称为 header，为了简化对齐，所有块都是 header 大小的倍数，并且正确对齐 header。这是通过一个联合来实现的，该联合包含所需的头结构和一个限制最严格的对齐类型的实例。

```c
typedef long Align;    /* for alignment to long boundary */

union header {         /* block header */
   struct {
       union header *ptr; /* next block if on free list */
       unsigned size;     /* size of this block */
   } s;
   Align x;           /* force alignment of blocks */
};

typedef union header Header;
```

结构体中的 Align 字段仅作为对齐使用，强制每个 header 结构体在最坏情况下的边界上对齐 4 字节边界。

而其中 size 字段则是必需的，因为内存分配并不连续，在释放内存时，需要通过它来计算内存空间的大小。

在 malloc 函数实现中，申请的内存空间会向上取 header 大小的整数倍，要分配的块包含一个以上的单元，其中一个单元用于记录 header 结构本身，包括 size 字段中记录的值。malloc 返回的指针指向可用空间，而不是 header 本身。用户可以对请求的空间执行任何操作，但如果在分配的空间之外写入任何内容，则列表可能会被打乱。

以下是一个内存块的结构，其中 ptr 和 size 就是 header 的两个成员：

    Memory Block：
    +=========================+
    | ptr | size | free space | 
    +=========================+
    +----Align---+
 
变量 base 用来记录链表的头节点，在未开始分配内存时，freep 指针为 NULL。在首次接收内存申请时设置 freep 指针，它包含一个大小为零的块，和一个指针并指向自身。

在任何情况下，都会搜索空闲列表，搜索从找到最后一个块的指针 freep 开始，直到找到足够大小的空闲块。注意 for 循环后面的条件判断，如果当前空闲列表没有空闲块，则通过 morecore 向操作系统申请内存，并通过 free 添加到空间列表中，在下次循环时进行处理。这种策略有助于保持列表的一致性，如果发现块太大，则将尾部返回给用户，这样，原块只需要调整大小即可。在所有情况下，返回给用户的指针都指向块中的可用空间，该空间从 header 以外的一个单元开始。

```c
static Header base;       /* empty list to get started */
static Header *freep = NULL;     /* start of free list */

/* malloc:  general-purpose storage allocator */
void *malloc(unsigned nbytes)
{
   Header *p, *prevp;
   Header *moreroce(unsigned);
   unsigned nunits;

   nunits = (nbytes+sizeof(Header)-1)/sizeof(header) + 1;
   if ((prevp = freep) == NULL) {   /* no free list yet */ 
       base.s.ptr = freeptr = prevptr = &base;
       base.s.size = 0;
   }
   for (p = prevp->s.ptr; ; prevp = p, p = p->s.ptr) {
       if (p->s.size >= nunits) {  /* big enough */
           if (p->s.size == nunits)  /* exactly */
               prevp->s.ptr = p->s.ptr;
           else {              /* allocate tail end */
               p->s.size -= nunits;
               p += p->s.size;
               p->s.size = nunits;
           }
           freep = prevp;
           return (void *)(p+1);
       }
       if (p == freep)  /* wrapped around free list */
           if ((p = morecore(nunits)) == NULL)
               return NULL;    /* none left */
   }
}
```

函数 morecore 用来从操作系统中获取存储空间，根据不同的系统会有不同的实现。由于直接向操作系统申请内存是一个相对低效过程，因此要尽量避免使用。

所以 morecore 至少要求申请 NALLOC 单位才会执行，这个大块头会根据需要被切碎。设置 size 字段后，morecore 通过调用 free 将额外的内存插入空闲链表中。

UNIX 系统调用 sbrk(n) 返回指向 n 个字节以上的内存指针，返回 -1 表示没有空间，即使 NULL 可能是更好的设计。必须将 -1 转换为 char 指针，以便与返回值进行比较。同样，强制转换使函数相对不受不同机器上指针表示细节的影响。

```c
#include <unistd.h>
int brk(void *addr);
void *sbrk(intptr_t increment);

#include <sys/time.h>
#include <sys/resource.h>
int getrlimit(int resource, struct rlimit *rlim);
int setrlimit(int resource, const struct rlimit *rlim);
int prlimit(pid_t pid, int resource, const struct rlimit *new_limit, struct rlimit *old_limit);
```

使用以下 Linux 命令查询文档：

    $ apropos brk
    brk (2)              - change data segment size
    sbrk (2)             - change data segment size
    strpbrk (3)          - search a string for any of a set of bytes
    strpbrk (3posix)     - scan a string for a byte
    wcspbrk (3)          - search a wide-character string for any of a set of wide characters
    wcspbrk (3posix)     - scan a wide-character string for a wide-character code
    $ man 2 brk

在一个程序加载在内存后，这个程序在内存逻辑地址的影像按低地址到高地址分布着 text segment、data segment、bss segment 和 heap 等分段。 bss 即 Block Started by Symbol 表示未进行初始的数据段，而 program break 是指紧接其后的 heap 内存段，调用操作系统提供的 brk 或 sbrk 会改变 program break，随着申请内存和释放内存动态地调用。

- `brk()` 设置数据段为指定的地址值，只要保证系统有足够的内存资源，并且最常见的有超过进程资源限制，参考系统调用 setrlimit(2) 或 ulimit 命令。
- `sbrk()` 增加程序的数据段空间，指定字节数，通过指定 0 字节可以查询到当前的 program break 位置。

注意，bss 和 heap 是不相邻的，它们有一个随机的间隔，并且同一个程序 bss 的结束地址编译期就固定，而 heap 的起始地址在每次运行的时候都会改变。程序开始运行时 heap 的大小是 0，所以起始地址和结束地址是一样的。可以通过 brk(n) 来设置起点，设置为当前的 heap 地址减去一个偏移，只要这个偏移不超出随机间隔的空间。

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int bss_end;
#define SIZE 0x2000

void heapLocation(){
    void * tret = sbrk(0);
    if (tret != (void *)-1)
        printf ("heap start: %p ", tret);
    int r = brk((char*)tret-SIZE);
    printf("brk(%p):%d %p\n", (char*)tret-SIZE, r, sbrk(0));
}
int main(void)
{
    printf("bss end: %p\n", (char *)(&bss_end) + 4);
    heapLocation();
    void *m = malloc(SIZE);
    heapLocation();
}
```

然而，仍然有一个假设，即 sbrk 返回的指向不同块的指针可以进行有意义的比较。语言标准不能保证这一点，因为它只允许在数组中进行指针比较。因此，这个版本的 malloc 只能在通用指针比较有意义的机器之间移植。

```c
#define NALLOC  1024   /* minimum #units to request */

/* morecore:  ask system for more memory */
static Header *morecore(unsigned nu)
{
   char *cp, *sbrk(int);
   Header *up;

   if (nu < NALLOC)
       nu = NALLOC;
   cp = sbrk(nu * sizeof(Header));
   if (cp == (char *) -1)   /* no space at all */
       return NULL;
   up = (Header *) cp;
   up->s.size = nu;
   free((void *)(up+1));
   return freep;
}
```

释放内存本身是最后一件事，也可以将它理解为空闲内存块的注册函数。它扫描空闲链表，从 freep 开始，寻找插入空闲块的位置，注意它是一个单向循环链表结构。它要么在两个现有块之间，要么在列表的末尾。在任何情况下，如果被释放的块与任一相邻块相邻，则相邻块被合并。唯一的问题是保持指针指向正确的地址、正确的大小。

```c
/* free:  put block ap in free list */
void free(void *ap)
{
   Header *bp, *p;

   bp = (Header *)ap - 1;    /* point to  block header */
   for (p = freep; !(bp > p && bp < p->s.ptr); p = p->s.ptr)
        if (p >= p->s.ptr && (bp > p || bp < p->s.ptr))
            break;  /* freed block at start or end of arena */

   if (bp + bp->size == p->s.ptr) {    /* join to upper nbr */
       bp->s.size += p->s.ptr->s.size;
       bp->s.ptr = p->s.ptr->s.ptr;
   } else
       bp->s.ptr = p->s.ptr;
   if (p + p->size == bp) {            /* join to lower nbr */
       p->s.size += bp->s.size;
       p->s.ptr = bp->s.ptr;
   } else
       p->s.ptr = bp;
   freep = p;
}
```

尽管，存储分配本质上依赖于机器，但上面的代码说明了如何控制机器依赖性，并将其限制在程序的一小部分中。typedef 和 union 的用来处理内存对齐，假设 sbrk 提供了适当的指针。强制转换使指针转类型换显式化，甚至可以处理设计糟糕的系统接口。尽管这里的细节与存储分配有关，但一般方法也适用于其他情况。

本小节设置了三个练习：

- 8-6. 标准库函数 calloc(n,size) 返回 n * size 字节空间，并初始化为 0 值。通过调用 malloc 或修改它实现 calloc 函数。
- 8-7. malloc 接收一个 size 参数而不检查其合理性，而 free 认为请求释放的块包含有效的大小字段。改进这些函数，提供在错误检查方面更加严格。
- 8-8. 编写 bfree(p,n) 实现释放任意块到 free 列表，p 指针为 n 个字符的块地址，用户通过它可以随时将静态或外部数组添加到空闲列表中。


# =🚩 ASCII Chart
https://en.cppreference.com/w/cpp/language/ascii

The following chart contains all 128 ASCII decimal (dec), octal (oct), hexadecimal (hex) and character (ch) codes.

```cpp
#include <iostream>
 
int main()
{
    std::cout << "Printable ASCII [32..126]:\n";
    for (char c{' '}; c <= '~'; ++c)
        std::cout << c << ((c + 1) % 32 ? ' ' : '\n');
    std::cout << '\n';
}
```

Possible output:

    Printable ASCII [32..126]:
      ! " # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ?
    @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ] ^ _
    ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~


| dec | oct | hex |  ch | dec | oct | hex | ch | dec | oct | hex | ch | dec | oct | hex |  ch  |
|-----|-----|-----|-----|-----|-----|-----|----|-----|-----|-----|----|-----|-----|-----|------|
|   0 |   0 | 00  | NUL |  32 |  40 | 20  | SP |  64 | 100 | 40  | @  |  96 | 140 | 60  | BQ    |
|   1 |   1 | 01  | SOH |  33 |  41 | 21  | !  |  65 | 101 | 41  | A  |  97 | 141 | 61  | a    |
|   2 |   2 | 02  | STX |  34 |  42 | 22  | "  |  66 | 102 | 42  | B  |  98 | 142 | 62  | b    |
|   3 |   3 | 03  | ETX |  35 |  43 | 23  | #  |  67 | 103 | 43  | C  |  99 | 143 | 63  | c    |
|   4 |   4 | 04  | EOT |  36 |  44 | 24  | $  |  68 | 104 | 44  | D  | 100 | 144 | 64  | d    |
|   5 |   5 | 05  | ENQ |  37 |  45 | 25  | %  |  69 | 105 | 45  | E  | 101 | 145 | 65  | e    |
|   6 |   6 | 06  | ACK |  38 |  46 | 26  | &  |  70 | 106 | 46  | F  | 102 | 146 | 66  | f    |
|   7 |   7 | 07  | BEL |  39 |  47 | 27  | '  |  71 | 107 | 47  | G  | 103 | 147 | 67  | g    |
|   8 |  10 | 08  | BS  |  40 |  50 | 28  | (  |  72 | 110 | 48  | H  | 104 | 150 | 68  | h    |
|   9 |  11 | 09  | HT  |  41 |  51 | 29  | )  |  73 | 111 | 49  | I  | 105 | 151 | 69  | i    |
|  10 |  12 | 0a  | LF  |  42 |  52 | 2a  | *  |  74 | 112 | 4a  | J  | 106 | 152 | 6a  | j    |
|  11 |  13 | 0b  | VT  |  43 |  53 | 2b  | +  |  75 | 113 | 4b  | K  | 107 | 153 | 6b  | k    |
|  12 |  14 | 0c  | FF  |  44 |  54 | 2c  | ,  |  76 | 114 | 4c  | L  | 108 | 154 | 6c  | l    |
|  13 |  15 | 0d  | CR  |  45 |  55 | 2d  | -  |  77 | 115 | 4d  | M  | 109 | 155 | 6d  | m    |
|  14 |  16 | 0e  | SO  |  46 |  56 | 2e  | .  |  78 | 116 | 4e  | N  | 110 | 156 | 6e  | n    |
|  15 |  17 | 0f  | SI  |  47 |  57 | 2f  | /  |  79 | 117 | 4f  | O  | 111 | 157 | 6f  | o    |
|  16 |  20 | 10  | DLE |  48 |  60 | 30  | 0  |  80 | 120 | 50  | P  | 112 | 160 | 70  | p    |
|  17 |  21 | 11  | DC1 |  49 |  61 | 31  | 1  |  81 | 121 | 51  | Q  | 113 | 161 | 71  | q    |
|  18 |  22 | 12  | DC2 |  50 |  62 | 32  | 2  |  82 | 122 | 52  | R  | 114 | 162 | 72  | r    |
|  19 |  23 | 13  | DC3 |  51 |  63 | 33  | 3  |  83 | 123 | 53  | S  | 115 | 163 | 73  | s    |
|  20 |  24 | 14  | DC4 |  52 |  64 | 34  | 4  |  84 | 124 | 54  | T  | 116 | 164 | 74  | t    |
|  21 |  25 | 15  | NAK |  53 |  65 | 35  | 5  |  85 | 125 | 55  | U  | 117 | 165 | 75  | u    |
|  22 |  26 | 16  | SYN |  54 |  66 | 36  | 6  |  86 | 126 | 56  | V  | 118 | 166 | 76  | v    |
|  23 |  27 | 17  | ETB |  55 |  67 | 37  | 7  |  87 | 127 | 57  | W  | 119 | 167 | 77  | w    |
|  24 |  30 | 18  | CAN |  56 |  70 | 38  | 8  |  88 | 130 | 58  | X  | 120 | 170 | 78  | x    |
|  25 |  31 | 19  | EM  |  57 |  71 | 39  | 9  |  89 | 131 | 59  | Y  | 121 | 171 | 79  | y    |
|  26 |  32 | 1a  | SUB |  58 |  72 | 3a  | :  |  90 | 132 | 5a  | Z  | 122 | 172 | 7a  | z    |
|  27 |  33 | 1b  | ESC |  59 |  73 | 3b  | ;  |  91 | 133 | 5b  | [  | 123 | 173 | 7b  | {    |
|  28 |  34 | 1c  | FS  |  60 |  74 | 3c  | <  |  92 | 134 | 5c  | \  | 124 | 174 | 7c  | PIPE |
|  29 |  35 | 1d  | GS  |  61 |  75 | 3d  | =  |  93 | 135 | 5d  | ]  | 125 | 175 | 7d  | }    |
|  30 |  36 | 1e  | RS  |  62 |  76 | 3e  | >  |  94 | 136 | 5e  | ^  | 126 | 176 | 7e  | ~    |
|  31 |  37 | 1f  | US  |  63 |  77 | 3f  | ?  |  95 | 137 | 5f  | _  | 127 | 177 | 7f  | DEL  |

    NUL (null)                 DLE (data link escape)        PIPE  |
    SOH (start of header)        DC1 (device control 1)        DEL (delete) 
    STX (start of text)         DC2 (device control 2)        SP (space)
    ETX (end of text)          DC3 (device control 3)        BQ (backquote/backtick)
    EOT (end of transmission)     DC4 (device control 4)        
    ENQ (enquiry)              NAK (negative acknowledge)    
    ACK (acknowledge)           SYN (synchronous idle)        
    BEL (bell)                 ETB (end of transmission block) 
    BS (backspace)              CAN (cancel)               
    HT (horizontal tab)           EM (end of medium)         
    LF (line feed - new line)    SUB (substitute)             
    VT (vertical tab)             ESC (escape)                
    FF (form feed - new page)   FS (file separator)           
    CR (carriage return)          GS (group separator)          
    SO (shift out)              RS (record separator)         
    SI (shift in)               US (unit separator)           



# =🚩 OOC
- Object-Oriented Programming With ANSI-C https://www.cs.rit.edu/~ats/books/ooc.pdf
- Object Oriented Programming in C http://ldeniau.home.cern.ch/ldeniau/html/oopc/oopc.html


# =🚩 Non-Standard C Library

除 C 语言标准提供的头文件，还有一些非标准头文件也会经常用到。

标准头与非标准头在引用时，使用不同的语法有些许差异，以 conio.h 为例。

对比标准并头 stdio.h 的引用，标准头使用尖括号，非标准头使用双引号：

```c
#include <stdio.h>
#include "conio.h"
```

因为 C++ 需要兼容 C，所以在 C++ 代码中，使用 C 语言标准头文件时使用的是 C++ 版本的，即去掉后缀名，前缀一个 c 字符。

```cpp
#include <cstdio>
#include "conio.h"
```

## ==⚡ conio.h 控制台函数库
- https://docs.oracle.com/cd/E36784_01/html/E36873/termios.h-3head.html
- https://docs.microsoft.com/en-us/cpp/c-runtime-library/console-and-port-i-o
- https://techsupportwhale.com/conio-h-c-plus-plus-library/
- https://code-reference.com/c/conio.h

这是一个 Console Input/Output 函数库，其中定义了通过控制台进行数据输入和数据输出的函数，主要是一些用户通过按键盘产生的对应操作，比如 getch() 函数等等。

这个头文件最早在 MS-DOS 编译器上大量使用，后来大多数 UNIX/Linux 的 C 语言编译器也兼容它，包括一些嵌入式编译器也提供，所以它的几乎相当是一个标准头文件。

- `cgets`   Reads a string from the console.
- `clrscr`  clears the screen and move the cursor to upper left corner
- `cprintf` prints formatted output to the screen.
- `cputs`   Returns a string to the screen.
- `cscanf`  reads input from the console and reformat it.
- `delline` delete the line containing the cursor and move all lines below it one line up.
- `getch`   prompts the user to press a character
- `getche`  reads a character from the keyboard and display it on the screen
- `gotoxy`  places cursor at a desired location on screen.
- `kbhit`   find ou if a key has been pressed or not
- `putch`   prints characters on the screen.
- `textbackground`  change of current background color in text mode
- `textcolor`   change the color of drawing text
- `ungetch` Pushes a character back into the keyboard buffer
- `wherex`  return current horizontal cursor position
- `wherey`  return current vertival cursor position
- `window`  defines the active text mode window

Console and Port I/O Routines

- `_cgets`, `_cgetws`, `_cgets_s`, `_cgetws_s`    Read string from console
- `_cprintf`, `_cwprintf`, `_cprintf_s`, `_cprintf_s_l`, `_cwprintf_s`, `_cwprintf_s_l`   Write formatted data to console
- `_cputs`  Write string to console
- `_cscanf`, `_cwscanf`, `_cscanf_s`, `_cscanf_s_l`, `_cwscanf_s`, `_cwscanf_s_l` Read formatted data from console
- `_getch`, `_getwch` Read character from console
- `_getche`, `_getwche`   Read character from console and echo it
- `_inp`    Read one byte from specified I/O port
- `_inpd`   Read double word from specified I/O port
- `_inpw`   Read 2-byte word from specified I/O port
- `_kbhit`  Check for keystroke at console; use before attempting to read from console
- `_outp`   Write one byte to specified I/O port
- `_outpd`  Write double word to specified I/O port
- `_outpw`  Write word to specified I/O port
- `_putch`, `_putwch` Write character to console
- `_ungetch`, `_ungetwch` "Unget" last character read from console so it becomes next character read



# =🚩 Standard C Library
- the Standard C Library 1992 by P.J. Plauger
- C 的历史 https://zh.cppreference.com/w/c/language/history
- The GNU C Library (glibc) https://www.gnu.org/software/libc/sources.html
- [The GNU C Library Reference Manual](https://www.gnu.org/software/libc/manual/html_mono/libc.html)

目前，已发布规范总共包括 29 个 C Standard Library header files

- C89/C90 standard (ISO/IEC 9899:1990): 
    - `<assert.h>` Conditionally compiled macro that compares its argument to zero 
    - `<ctype.h>` Functions to determine the type contained in character data 
    - `<errno.h>` Macros reporting error conditions 
    - `<float.h>` Limits of float types 
    - `<limits.h>` Sizes of basic types 
    - `<locale.h>` Localization utilities 
    - `<math.h>` Common mathematics functions 
    - `<setjmp.h>` Nonlocal jumps 
    - `<signal.h>` Signal handling 
    - `<stdarg.h>` Variable arguments 
    - `<stddef.h>` Common macro definitions 
    - `<stdio.h>` Input/output 
    - `<stdlib.h>` General utilities: memory management, program utilities, string conversions, random numbers 
    - `<string.h>` String handling 
    - `<time.h>` Time/date utilities 
- C95 standard (ISO/IEC 9899:1990/AMD 1:1995)
    - `<iso646.h>` (`C95`) Alternative operator spellings 
    - `<wchar.h>` (`C95`) Extended multibyte and wide character utilities 
    - `<wctype.h>` (`C95`) Wide character classification and mapping utilities 
- C99 standard (ISO/IEC 9899:1999): 
    - `<complex.h>` (`C99`) Complex number arithmetic 
    - `<fenv.h>` (`C99`) Floating-point environment 
    - `<inttypes.h>` (`C99`) Format conversion of integer types 
    - `<stdbool.h>` (`C99`) Boolean type 
    - `<stdint.h>` (`C99`) Fixed-width integer types 
    - `<tgmath.h>` (`C99`) Type-generic math (macros wrapping math.h and complex.h) 
- C11 standard (ISO/IEC 9899:2011): 
    - `<stdalign.h>` (`C11`) alignas and alignof convenience macros 
    - `<stdatomic.h>` (`C11`) Atomic types 
    - `<stdnoreturn.h>` (`C11`) noreturn convenience macros 
    - `<threads.h>` (`C11`) Thread library 
    - `<uchar.h>` (`C11`) UTF-16 and UTF-32 character utilities 

有兴趣了解源代码，可以从以下位置获取 The GNU C Library (glibc)，只建议有需要才去翻：

```sh
# http://www.gnu.org/software/libc/  =
# https://git.uclibc.org/uClibc  =
git clone git://sourceware.org/git/glibc.git
cd glibc
git checkout --track -b glibc-2_11-branch origin/release/2.11/master
```

MSVC 编译器也提供源代码，标准库代码在 VC 安装目录 \VC\crt\src。

偶尔看看恶心的肠子肚子有利于看透美女的本质！

从头文件的规范发展来看，C95 主要是对宽字符进行了扩展。这是对 C89 的一个修订和扩充，称为“C89 with Amendment 1”或 C95，严格说来并不是一个真正的标准。

- C95 standard (ISO/IEC 9899:1990/AMD 1:1995)
    - `<iso646.h>` (`C95`) Alternative operator spellings 
    - `<wchar.h>` (`C95`) Extended multibyte and wide character utilities 
    - `<wctype.h>` (`C95`) Wide character classification and mapping utilities 

C95 的主要改动：

- 3个新标准头文件：iso646.h、wctype.h、wchar.h；
- 一些新的标记（token）和宏（macro）；
- 一些新的 printf/scanf 系列函数的格式符；
- 增加了大量的宽字符和多字节字符函数、常数和类型。

1999年，在做了一些必要的修正和完善后，ISO 发布了新的 C 语言标准，命名为 ISO/IEC 9899:1999，简称“C99”。

- C99 standard (ISO/IEC 9899:1999): 
    - `<complex.h>` (`C99`) Complex number arithmetic 
    - `<fenv.h>` (`C99`) Floating-point environment 
    - `<inttypes.h>` (`C99`) Format conversion of integer types 
    - `<stdbool.h>` (`C99`) Boolean type 
    - `<stdint.h>` (`C99`) Fixed-width integer types 
    - `<tgmath.h>` (`C99`) Type-generic math (macros wrapping math.h and complex.h) 

C99 的主要改动：

- 复数（complex）；
- 整数（integer）类型扩展；
- 变长数组；
- Boolean 类型；
- 非英语字符集的更好支持；
- 浮点类型的更好支持；
- 提供全部类型的数学函数；
- C++ 风格注释（//）。

2007 年，C 语言标准委员会又重新开始修订标准，于 2011 年正式发布了 ISO/IEC 9899:2011，简称为 C11 标准。

C11 标准新引入少量的特征尽，没有 C90 引入的那么多，但是这些也都十分有用，比如：字节对齐说明符、泛型机制（generic selection）、对多线程的支持、静态断言、原子操作以及对 Unicode 的支持。

2018 年 6 月发布的 ISO/IEC 9899:2018 的非正式名称 C17，也称为为 C18，是截止到 2020 年为止最新的 C 语言编程标准，被用来替代 C11 标准。C17 没有引入新的语言特性，只对 C11 进行了补充和修正。

作为下一个版本的 C 标准，C2x 预计将于 2022 年 12 月 1 日完成。

有许多人提出想为 C 语言添加面向对象的特性，包括增加类、继承、多态等已被 C++ 语言所广泛使用的语法特性，但是最终被委员会驳回了。因为这些复杂的语法特性并不符合 C 语言的设计理念以及设计哲学，况且 C++ 已经有了这些特性，C 语言无需再对它们进行支持。


## ==⚡ `<stdbool.h>` bool in C90 C99

在编译 C 语言时有时会遇到这样的错误提示：

    `true' undeclared (first use in this function)
    `false' undeclared (first use in this function)

就是说 bool, true, false 在早期 C/C++ 语言中没有这些关键字，没有关键字 bool，使用 BOOL 可以，但 BOOL 不是内置类型，都是通过 typedef 或者宏来定义的，通常都会被定义成 int 类型。后来 C++ 内置类型 bool 值只能为 true（1）和false（0）。

解决方法：

+. 将文件名 .c 改为文件名 .cpp 用 C++ 方式编译

+. 或者使用 C99 文件头定义：

    #include <stdbool.h>

+. 自己进行一个宏定义，模仿布尔型：

    enum bool{false, true}; 

    typedef enum __bool {false = 0,true =1, }bool;

    #define TRUE 1
    #define FALSE 0
    
c90 是没有 bool 的，因此支持 c90 的 dev-c++ 当然也没有。

C99 为了和 C++ 兼容，增加头文件 stdbool.h 定义 bool、true、false。其中 bool 就是 `_Bool` 类型，true 和 false 的值为 1 和 0。

c99 支持 `_Bool`，而不是 bool 或 BOOL，这真的太奇怪了。

    _Bool a = 1;
    _Bool b = 2;    /* 使用非零值，b的值为1 */ 
    _Bool c = 0;
    _Bool d = -1;   /* 使用非零值，d的值为1 */ 

如果 C99 新增的布尔类型叫 bool 或 BOOL，则很可能跟大家已有的代码发生冲突。举个例子，正常情况下，`_Bool` 打印的长度应该是 1，但如果我对它进行宏定义 `#define _Bool int`，则打印出来的长度就变成了 int 的长度。


## ==⚡ `<stdio.h>` Standard I/O
- https://en.cppreference.com/w/c/io

基本输入输出库供应窄字符即单字节字符的输入输出能力，配合 C95 规范引入的 `<wchar.h>` `<wctype.h>` 实现宽字符支持。

I/O 流文件对象使用 `FILE*` 指针操作，尽管可以拷贝这样一个指针，但是每个流关联的外部设备不同，如磁盘存储的文件、标准输入流、打印机、串口等等，所有并不能保证拷贝的文件指针可以正常工作。

I/O 流可以使用格式化或非格式化的输入输出，也可以结合 `<locale.h>` 的本地化设置，流对象都受当前的本地化设置影响，可以通过 `setlocale` 函数设置它。

除了系统需要的设备信息，每个流对象还保存以下信息：

- (C95) Character width: unset, narrow, or wide
- Buffering state: unbuffered, line-buffered, fully buffered.
- The buffer, which may be replaced by an external, user-provided buffer.
- I/O mode: input, output, or update (both input and output).
- Binary/text mode indicator.
- End-of-file status indicator.
- Error status indicator.
- File position indicator (`fpos_t`), which, for wide character streams, includes the parse state (`mbstate_t`(C95)).
- (C11) Reentrant lock used to prevent data races when multiple threads read, write, position, or query the position of a stream.

Narrow and wide orientation
A newly opened stream has no orientation. The first call to *fwide* or to any I/O function establishes the orientation: a wide I/O function makes the stream wide-oriented, a narrow I/O function makes the stream narrow-oriented. Once set, the orientation can only be changed with *freopen*. Narrow I/O functions cannot be called on a wide-oriented stream; wide I/O functions cannot be called on a narrow-oriented stream. Wide I/O functions convert between wide and multibyte characters as if by calling *mbrtowc* and *wcrtomb*. Unlike the multibyte character strings that are valid in a program, multibyte character sequences in the file may contain embedded nulls and do not have to begin or end in the initial shift state.

POSIX requires that the *LC_CTYPE* facet of the currently installed C locale is stored within the stream object the moment its orientation becomes wide, and is used for all future I/O on this stream until the orientation is changed, regardless of any subsequent calls to setlocale.

Binary and text modesA text stream is an ordered sequence of characters composed into lines (zero or more characters plus a terminating '\n'). Whether the last line requires a terminating '\n' is implementation-defined. Characters may have to be added, altered, or deleted on input and output to conform to the conventions for representing text in the OS (in particular, C streams on Windows OS convert \n to \r\n on output, and convert \r\n to \n on input)

Data read in from a text stream is guaranteed to compare equal to the data that were earlier written out to that stream only if all of the following is true:

the data consist only of printing characters and the control characters \t and \n (in particular, on Windows OS, the character '\0x1A' terminates input) no \n is immediately preceded by a space character (space characters that are written out immediately before a \n may disappear when read) the last character is \n A binary stream is an ordered sequence of characters that can transparently record internal data. Data read in from a binary stream always equals to the data that were earlier written out to that stream. Implementations are only allowed to append a number of null characters to the end of the stream. A wide binary stream doesn't need to end in the initial shift state.

POSIX implementations do not distinguish between text and binary streams (there is no special mapping for \n or any other characters)

File access 

```c
/////////////////////////////////
// Defined in header <stdio.h> 
/////////////////////////////////

// opens a file
FILE *fopen( const char *filename, const char *mode ); (until C99)
FILE *fopen( const char *restrict filename, const char *restrict mode ); (since C99)
errno_t fopen_s(FILE *restrict *restrict streamptr,
                const char *restrict filename,
                const char *restrict mode); (since C11)

// open an existing stream with a different name
FILE *freopen( const char *filename, const char *mode,
               FILE *stream ); (until C99)
FILE *freopen( const char *restrict filename, const char *restrict mode,
               FILE *restrict stream ); (since C99)
errno_t freopen_s(FILE *restrict *restrict newstreamptr,
                  const char *restrict filename, const char *restrict mode,
                  FILE *restrict stream);  (since C11)
// closes a file
int fclose( FILE *stream );

// synchronizes an output stream with the actual file
int fflush( FILE *stream );

// sets the buffer for a file stream
void setbuf( FILE          *stream, char          *buffer ); (until C99)
void setbuf( FILE *restrict stream, char *restrict buffer ); (since C99)

// sets the buffer and its size for a file stream
int setvbuf( FILE *         stream, char *         buffer, int mode, size_t size ); (until C99)
int setvbuf( FILE *restrict stream, char *restrict buffer, int mode, size_t size ); (since C99)

/////////////////////////////////
// Defined in header <wchar.h> 
/////////////////////////////////

// switches a file stream between wide character I/O and narrow character I/O
int fwide( FILE *stream, int mode ); (since C95)
```


Direct input/output 

```c
/////////////////////////////////
// Defined in header <stdio.h> //
/////////////////////////////////

// fread reads from a file
size_t fread( void          *buffer, size_t size, size_t count, FILE          *stream ); (until C99)
size_t fread( void *restrict buffer, size_t size, size_t count, FILE *restrict stream ); (since C99)

// fwrite writes to a file
size_t fwrite( const void *buffer, size_t size, size_t count, FILE *stream ); (until C99)
size_t fwrite( const void *restrict buffer, size_t size, size_t count, FILE *restrict stream ); (since C99)
```

Unformatted input/output 

```c
//////////////////////////////////////////////////
// Narrow character Defined in header <stdio.h> //
//////////////////////////////////////////////////

// gets a character from a file stream
int fgetc( FILE *stream );   
int getc( FILE *stream ); 

// gets a character string from a file stream
char *fgets( char          *str, int count, FILE          *stream );  (until C99)
char *fgets( char *restrict str, int count, FILE *restrict stream );  (since C99)

// writes a character to a file stream
int fputc( int ch, FILE *stream );
int putc( int ch, FILE *stream );

// writes a character string to a file stream
int fputs( const char          *str, FILE          *stream );  (until C99) 
int fputs( const char *restrict str, FILE *restrict stream );  (since C99) 
   
// reads a character from stdin
int getchar(void);

// reads a character string from stdin
char *gets( char *str );  (until C11) 
char *gets_s( char *str, rsize_t n );  (since C11) (optional) 

// writes a character to stdout
int putchar( int ch );

// writes a character string to stdout
int puts( const char *str );

// puts a character back into a file stream
int ungetc( int ch, FILE *stream );

////////////////////////////////////////////////
// Wide character Defined in header <wchar.h> //
////////////////////////////////////////////////

// gets a wide character from a file stream
wint_t fgetwc( FILE *stream ); (since C95)
wint_t getwc( FILE *stream ); (since C95)

// gets a wide string from a file stream
wchar_t *fgetws( wchar_t *str, int count, FILE *stream ); (since C95) (until C99)
wchar_t *fgetws( wchar_t * restrict str, int count, FILE * restrict stream ); (since C99)

// writes a wide character to a file stream
wint_t fputwc( wchar_t ch, FILE *stream ); (since C95)
wint_t putwc( wchar_t ch, FILE *stream ); (since C95)

// writes a wide string to a file stream
int fputws( const wchar_t *str, FILE *stream ); (since C95) (until C99)
int fputws( const wchar_t * restrict str, FILE * restrict stream ); (since C99)

// reads a wide character from stdin
wint_t getwchar(void); (since C95)

// writes a wide character to stdout
wint_t putwchar( wchar_t ch ); (since C95)

// puts a wide character back into a file stream
wint_t ungetwc( wint_t ch, FILE *stream ); (since C95)
```

示范，使用宽字符：

```c
#include <locale.h>
#include <wchar.h>
 
int main(void)
{
    char narrow_str[] = "z\u00df\u6c34\U0001f34c";
                    // or "zß水🍌"
                    // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9f\x8d\x8c";
    wchar_t warr[29]; // the expected string is 28 characters plus 1 null terminator
    setlocale(LC_ALL, "en_US.utf8");
    swprintf(warr, sizeof warr/sizeof *warr,
              L"Converted from UTF-8: '%s'", narrow_str);
    wprintf(L"%ls\n", warr);
}
```


示范，文件读写宽字符：

```c
#include <stdio.h>
#include <stdlib.h>
#include <wchar.h>
#include <errno.h>
#include <locale.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    FILE *fp = fopen("fgetwc.dat", "w");
    if(!fp) {
        perror("Can't open file for writing");
        return EXIT_FAILURE;
    }
    fputs("кошка\n", fp);
    fclose(fp);
 
    fp = fopen("fgetwc.dat", "r");
    if(!fp) {
        perror("Can't open file for reading");
        return EXIT_FAILURE;
    }
    wint_t wc;
    errno = 0;
    while ((wc = fgetwc(fp)) != WEOF)
        putwchar(wc);
 
    if (ferror(fp)) {
        if (errno == EILSEQ)
            puts("Character encoding error while reading.");
        else
            puts("I/O error when reading");
    } else if (feof(fp))
        puts("End of file reached successfully");
 
    fclose(fp);
}
```


示范，输出宽字符到标准输出流：

```c
#include <locale.h>
#include <stdio.h>
#include <stdlib.h>
#include <wchar.h>
#include <errno.h>

int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
 
    errno = 0;
    if (fputwc(L'🍌', stdout) == WEOF) {
        if (errno == EILSEQ)
            puts("Encoding error in fputwc.");
        else
            puts("I/O error in fputwc.");
        return EXIT_FAILURE;
    }
}
```

Formatted input/output 

```c
//////////////////////////////////////////////////
// Narrow character Defined in header <stdio.h> //
//////////////////////////////////////////////////

// reads formatted input from stdin, a file stream or a buffer
int scanf( const char          *format, ... );  (until C99) 
int scanf( const char *restrict format, ... );  (since C99) 
int fscanf( FILE          *stream, const char          *format, ... );  (until C99) 
int fscanf( FILE *restrict stream, const char *restrict format, ... );  (since C99) 
int sscanf( const char          *buffer, const char          *format, ... );  (until C99) 
int sscanf( const char *restrict buffer, const char *restrict format, ... );  (since C99) 
int scanf_s(const char *restrict format, ...); (4) (since C11) 
int fscanf_s(FILE *restrict stream, const char *restrict format, ...); (5) (since C11) 
int sscanf_s(const char *restrict buffer, const char *restrict format, ...); (6) (since C11) 

// reads formatted input from stdin, a file stream or a buffer using variable argument list
int vscanf( const char *restrict format, va_list vlist ); (since C99) 
int vfscanf( FILE *restrict stream, const char *restrict format, va_list vlist ); (since C99)
int vsscanf( const char *restrict buffer, const char *restrict format, va_list vlist ); (since C99)
int vscanf_s( const char *restrict format, va_list vlist); (since C11) 
int vfscanf_s( FILE *restrict stream, const char *restrict format, va_list vlist); (since C11)
int vsscanf_s( const char *restrict buffer, const char *restrict format, va_list vlist); (since C11)

// prints formatted output to stdout, a file stream or a buffer
int printf( const char *format, ... );  (until C99) 
int printf( const char *restrict format, ... );  (since C99)
int fprintf( FILE *stream, const char *format, ... );  (until C99) 
int fprintf( FILE *restrict stream, const char *restrict format, ... );  (since C99)
int sprintf( char *buffer, const char *format, ... );  (until C99) 
int sprintf( char *restrict buffer, const char *restrict format, ... );  (since C99) 
int snprintf( char *restrict buffer, int bufsz, const char *restrict format, ... ); (since C99)
int printf_s(const char *restrict format, ...); (since C11) 
int fprintf_s(FILE *restrict stream, const char *restrict format, ...); (since C11) 
int sprintf_s(char *restrict buffer, rsize_t bufsz, const char *restrict format, ...); (since C11)
int snprintf_s(char *restrict buffer, rsize_t bufsz, const char *restrict format, ...); (since C11)

// prints formatted output to stdout, a file stream or a buffer using variable argument list
int vprintf( const char *format, va_list vlist );  (until C99) 
int vprintf( const char *restrict format, va_list vlist );  (since C99) 
int vfprintf( FILE *stream, const char *format, va_list vlist );  (until C99) 
int vfprintf( FILE *restrict stream, const char *restrict format, va_list vlist );  (since C99)
int vsprintf( char *buffer, const char *format, va_list vlist );  (until C99) 
int vsprintf( char *restrict buffer, const char *restrict format, va_list vlist );  (since C99)
int vsnprintf( char *restrict buffer, int bufsz, const char *restrict format, va_list vlist ); (since C99)
int vprintf_s( const char *restrict format, va_list arg); (since C11) 
int vfprintf_s( FILE *restrict stream, const char *restrict format, va_list arg); (since C11)
int vsprintf_s( char *restrict buffer, rsize_t bufsz, const char *restrict format, va_list arg); (since C11)
int vsnprintf_s(char *restrict buffer, rsize_t bufsz, const char * restrict format, va_list arg); (since C11)


////////////////////////////////////////////////
// Wide character Defined in header <wchar.h> //
////////////////////////////////////////////////

// reads formatted wide character input from stdin, a file stream or a buffer
int wscanf( const wchar_t *format, ... );  (since C95) (until C99)
int wscanf( const wchar_t *restrict format, ... );  (since C99) 
int fwscanf( FILE *stream, const wchar_t *format, ... );  (since C95) (until C99)
int fwscanf( FILE *restrict stream, 
            const wchar_t *restrict format, ... );  (since C99)
int swscanf( const wchar_t *buffer, 
            const wchar_t *format, ... );  (since C95) (until C99)
int swscanf( const wchar_t *restrict buffer, 
             const wchar_t *restrict format, ... );  (since C99)
int wscanf_s( const wchar_t *restrict format, ...);  (since C11) 
int fwscanf_s( FILE *restrict stream, 
               const wchar_t *restrict format, ...);  (since C11)
int swscanf_s( const wchar_t *restrict s, 
               const wchar_t *restrict format, ...);  (since C11)

// reads formatted wide character input from stdin, a file stream or a buffer using variable argument list
int vwscanf( const wchar_t *restrict format, va_list vlist );  (since C99) 
int vfwscanf( FILE *restrict stream,
              const wchar_t *restrict format, va_list vlist );  (since C99) 
int vswscanf( const wchar_t *restrict buffer,
              const wchar_t *restrict format, va_list vlist );  (since C99) 
int vwscanf_s( const wchar_t *restrict format, va_list vlist );  (since C11) 
int vfwscanf_s( FILE *restrict stream,
                const wchar_t *restrict format, va_list vlist );  (since C11) 
int vswscanf_s( const wchar_t *restrict buffer,
                const wchar_t *restrict format, va_list vlist );  (since C11) 

// prints formatted wide character output to stdout, a file stream or a buffer
int wprintf( const wchar_t *format, ... );  (since C95) (until C99)
int wprintf( const wchar_t *restrict format, ... );  (since C99) 
int fwprintf( FILE *stream, const wchar_t* format, ... );  (since C95) (until C99)
int fwprintf( FILE *restrict stream,
              const wchar_t *restrict format, ... );  (since C99) 
int swprintf( wchar_t *buffer, size_t bufsz,
              const wchar_t* format, ... );  (since C95) (until C99)
int swprintf( wchar_t *restrict buffer, size_t bufsz,
              const wchar_t *restrict format, ... );  (since C99) 
int wprintf_s( const wchar_t *restrict format, ...);  (since C11) 
int fwprintf_s( FILE *restrict stream,
                const wchar_t *restrict format, ...);  (since C11) 
int swprintf_s( wchar_t *restrict buffer, rsize_t bufsz,
                const wchar_t* restrict format, ...);  (since C11) 
int snwprintf_s( wchar_t * restrict s, rsize_t n,
                 const wchar_t * restrict format, ...);  (since C11) 

// prints formatted wide character output to stdout, a file stream or a buffer using variable argument list
int vwprintf( const wchar_t *format, va_list vlist );  (since C95) (until C99) 
int vwprintf( const wchar_t *restrict format, va_list vlist );  (since C99) 
int vfwprintf( FILE* stream, const wchar_t *format, va_list vlist );  (since C95) (until C99) 
int vfwprintf( FILE *restrict stream,
               const wchar_t *restrict format, va_list vlist );  (since C99) 
int vswprintf( wchar_t *buffer, size_t bufsz,
               const wchar_t *format, va_list vlist );  (since C95) (until C99) 
int vswprintf( wchar_t *restrict buffer, size_t bufsz,
               const wchar_t *restrict format, va_list vlist );  (since C99) 
int vwprintf_s( const wchar_t *restrict format, va_list vlist); (4) (since C11) 
int vfwprintf_s( FILE * restrict stream,
                 const wchar_t *restrict format, va_list vlist); (5) (since C11) 
int vswprintf_s( wchar_t *restrict buffer, rsize_t bufsz,
                 const wchar_t * restrict format, va_list vlist); (6) (since C11) 
int vsnwprintf_s( wchar_t *restrict buffer, rsize_t bufsz,
                  const wchar_t *restrict format, va_list vlist); (7) (since C11) 
```

使用 scanf 注意一下，每个转换占位符号会消费缓冲区的空白字符，如空格或 TAB，那么在转换字符 `%c` 时将会影响到真正的数据，即读取到的是空白字符而不是后面的数据。

解决方法是格式字符串中使用前置空格，这样就可以消耗掉分隔用的空白字符。如下会输入两个值，可以是同一行用空白字符分隔，也可以分两行输入：

```c
scanf("%d", &a);
scanf(" %c", &c); // consume all consecutive whitespace after %d, then read a char
```

File positioning 

```c
// returns the current file position indicator
long ftell( FILE *stream );

// gets the file position indicator
int fgetpos( FILE          *stream, fpos_t          *pos ); // (until C99)
int fgetpos( FILE *restrict stream, fpos_t *restrict pos ); // (since C99)

// moves the file position indicator to a specific location in a file
int fseek( FILE *stream, long offset, int origin );

// moves the file position indicator to a specific location in a file
int fsetpos( FILE *stream, const fpos_t *pos );

//moves the file position indicator to the beginning in a file
void rewind( FILE *stream );
```


Error handling 

```c
// clears errors
void clearerr( FILE *stream );

// checks for the end-of-file
int feof( FILE *stream );

// checks for a file error
int ferror( FILE *stream );

// displays a character string corresponding of the current error to stderr
void perror( const char *s );
```

Operations on files 

```c
// remove erases a file
int remove( const char *fname );

// rename renames a file
int rename( const char *old_filename, const char *new_filename );

// (C11) returns a pointer to a temporary file
FILE *tmpfile(void);
errno_t tmpfile_s(FILE * restrict * restrict streamptr);// (since C11)

// (C11) returns a unique filename
char *tmpnam( char *filename );
errno_t tmpnam_s(char *filename_s, rsize_t maxsize); // (since C11)
```


Types Defined in header `<stdio.h>` 

- `FILE` type, capable of holding all information needed to control a C I/O stream 
- `fpos_t` type, capable of uniquely specifying a position and mutibyte parser state in a file 

Macros Defined in header `<stdio.h>` 

```c
// Predefined standard streams
#define stdin  /* implementation-defined */ // (1) FILE* associated with the input stream
#define stdout /* implementation-defined */ // (2) FILE* associated with the output stream
#define stderr /* implementation-defined */ // (3) FILE* associated with the error output stream

EOF         // integer constant expression of type int and negative value
FOPEN_MAX   // number of files that can be open simultaneously
FILENAME_MAX// size needed for an array of char to hold the longest supported file name
BUFSIZ      // size of the buffer used by setbuf()

_IOFBF      // argument to setvbuf() indicating fully buffered I/O
_IOLBF      // argument to setvbuf() indicating line buffered I/O
_IONBF      // argument to setvbuf() indicating unbuffered I/O

SEEK_SET    // argument to fseek() indicating seeking from beginning of the file
SEEK_CUR    // argument to fseek() indicating seeking from the current file position
SEEK_END    // argument to fseek() indicating seeking from end of the file

TMP_MAX     // maximum number of unique filenames that can be generated by tmpnam
TMP_MAX_S   // (C11) maximum number of unique filenames that can be generated by tmpnam_s

L_tmpnam    // size needed for an array of char to hold the result of tmpnam
L_tmpnam_s  // (C11) size needed for an array of char to hold the result of tmpnam_s
```



## ==⚡ `<stdlib.h>` Standard Library
- https://pubs.opengroup.org/onlinepubs/9699919799/functions/setenv.html
- memory management https://en.cppreference.com/w/c/memory/calloc
- program utilities https://en.cppreference.com/w/c/program
- string conversions https://en.cppreference.com/w/c/string
- random numbers https://en.cppreference.com/w/c/numeric/random
- algorithms https://en.cppreference.com/w/c/algorithm

C 语言标准库通常指各个标准文件头提供的编程接口，而其中有一个名称就叫标准库，`<stdlib.h>`，这也可能是最为复杂的一个库文件。

提供的功能如下：

- C memory management library
    - `void* malloc( size_t size )` 申请未经初始化的内存。
    - `void* calloc( size_t num, size_t typesize ` 申请清零状态的内存，前缀 c 表示 clear，即填充零值。
    - `void* realloc( void *ptr, size_t new_size )` 重新申请，有可能在新的区域申请，并将原内存拷贝过去，扩展的区域不初始化。
    - `void* aligned_alloc( size_t alignment, size_t size )` (`C11`) allocates aligned memory
    - `void  free( void* ptr )` deallocates previously allocated memory
- Program termination
    - `void abort(void)` (until C11) 
    - `_Noreturn void abort(void)` (since C11) 非正常结束程序，除非监听了 SIGABRT 信号，不执行 atexit 注册的回调。
    - `void exit( int exit_code )` (until C11) 正常结束，会完全执行理清工作。
    - `_Noreturn void exit( int exit_code )` (since C11) 
    - `_Noreturn void quick_exit( int exit_code )` (since C11) 快速结束程序，不等待清理，只执行 at_quick_exit 注册的回调。
    - `void _Exit( int exit_code )` (since C99) (until C11) 正常结束不等待清理，文件关闭取决于实现，不调用注册的回调，包括 quick 方式。
    - `_Noreturn void _Exit( int exit_code )` (since C11) 
    - `int at_quick_exit( void (*func)(void) )` (since C11)  注册程序结束时的回调函数。
    - `int atexit( void (*func)(void) )`  注册程序快速结束时的回调函数。
    - `EXIT_SUCCESS` 和 `EXIT_FAILURE` 两个宏常量表示程序退出的状态码。
- Communicating with the environment
    - `int system( const char *command )` 系统调用，执行 shell 程序。
    - `char *getenv( const char *name )` (C11) access to the list of environment variables
    - `errno_t getenv_s( size_t *restrict len, char *restrict value, rsize_t valuesz, const char *restrict name )` (since C11) 
- random numbers
    - `int rand()` 产生一个伪随机数，范围 [0, RAND_MAX]
    - `void srand( unsigned seed )` 随机种子，只应该执行一次，实践中使用 `time(0)` 作为种子。
    - `RAND_MAX` 随机数的最大值。
- algorithms
    - qsort qsort_s (C11) sorts a range of elements with unspecified type
    - bsearch bsearch_s (C11) searches an array for an element of unspecified type

内存管理库函数可以说是最重要的一部分，由于 C 语言没有引入动态内存回收技术，这也是 C 语言性能极好的一个原因。同时这给使用者带来了额外的内存管理责任，开发者必需自己实现内存管理。

对系统中运行的程序来说，操作系统运行程序时会下放内存资源，这部分内存资源称为 User Space。

对于程序来说，主要的内存环境可以分为两个部分：

- 系统内存空间，操作系统运行的环境中所掌控的内存资源，系统运行所使用的部分称为 Kernel space；
- 程序使用空间，User Space；

而编译器链接程序生成的可执行程时也对内存的用途进行划分，有不同的内存分段定义：

- .text  这是整个用户空间的最低地址部分，存放机器指令的位置。
- .data 这里存放的是初始化过的全局变量。
- .BSS 这里存放的是未初始化的全局变量。
- Heap 堆，这是需要重点关注的地方，堆内存可以在程序运行时自行申请分配。
- Mapping Area 这里是与 mmap 系统调用相关的区域。通常 malloc 实现会考虑通过 mmap 分配较大块的内存区域。
- Stack 这是栈区域，自高地址向低地址增长。

程序执行栈空间 Stack 是一个 FILO - First In Last Out 数据结构，程序执行前就在系统的安排下预先设定好，CPU 内有 ESP 寄存器指向栈顶，有其它配置指令管理，如 PUSH/POP。堆内存空间 Heap 由程序运行过程中通过 malloc 等函数动态申请分配。

一般来说，系统应该提供设置，来指定程序运行时环境配置，如 Linux 就可以通过 ulimit -s 设定程序运行时的 Stack 大小。

堆内存的实现有不同的形式，有一种做法是，把进程的内存管理交给操作系统内核去做，但实际上这样做的性能比较差，原因在于每次程序申请或者释放堆空间都需要进行系统调用。

比较好的做法就是：程序向操作系统申请一块适当大小的堆空间，然后由程序自己管理这块空间，而具体来讲，管理着堆空间分配的往往是程序的运行库，即 malloc 这类函数背后的库实现。这种方式相当于向操作系统批发一块较大的内存，到程序这边零售，当内存用完再向系统要。

Linux 系统下，提供两种堆空间分配方式，两个系统调用：

- `brk()` 的作用实际上就是设置进程数据段的结束地址，即它可以扩大或者缩小数据段，.data 数据段和 .BBS 数据段统称数据段。将数据段的结束地址向高地址移动，那么扩大的那部分空间就可以被我们使用，把这块空间拿过来使用作为堆空间是最常见的做法。

- `mmap()` 向操作系统申请一段虚拟地址空间，类似 Windows 的 VirtualAlloc，（堆和栈中间，称为文件映射区域的地方）这块虚拟地址空间可以映射到某个文件。

glibc 的 malloc 函数是这样处理用户的空间请求的：对于小于 128KB 的请求来说，它会在现有的堆空间里面，按照堆分配算法为它分配一块空间并返回；对于大于128KB 的请求来说，它会使用 mmap() 函数为它分配一块匿名空间，然后在这个匿名空间中为用户分配空间。

这两种方式分配的都是虚拟内存，没有分配物理内存。在第一次访问已分配的虚拟地址空间的时候，发生缺页中断，操作系统负责分配物理内存，然后建立虚拟内存和物理内存之间的映射关系。

在标准 C 库中的 malloc/free 函数分配释放内存，这两个函数底层由 brk，mmap，munmap 这些系统调用实现的。


以 C 语言作为计算机入门的同学，可能对内存管理的概念不是很透彻。要知道，计算机安装的物理内存是有限的，假如，程序在运行的时候，不断申请，而又不释放。那么，结果只有一个，就是所有内存都消耗完，没有一点空间可用。

更严重的问题还在于内存泄露 Memory Leak 指的是那些意外不受控制的内存丢失，通常是没有将相应的内存回收代码组织好，导致内存不知在何处消耗掉，这个问题通常会消耗大量的调试时间去排查。

内存只要申请成功，就必需进行释放，否则一起占用内存直到程序结束。对于长时不间断运行的程序来说，一直占有内存资源不一定是件好事。

如果内存申请失败，函数返回 null 指针，不必处理。


C11 引入的地址对齐方式申请内存，在特殊场合需要这样的功能。

示范，动态内存分配，与地址对齐方式分配：

```c
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    int *p1 = malloc(10*sizeof *p1);
    printf("default-aligned addr:   %p\n", (void*)p1);
    free(p1);
 
    int *p2 = aligned_alloc(1024, 1024*sizeof *p2);
    printf("1024-byte aligned addr: %p\n", (void*)p2);
    free(p2);
}
// Possible output:
// default-aligned addr:   0x1e40c20
// 1024-byte aligned addr: 0x1e41000
```

程序与 shell 命令交互，system 函数并不能获取命令的输出内空，只能获取命令的执行状态码，传入 null 指针可以测试是否存在命令处理程序。

在 POSIX 系统中，返回值可以使用 WEXITSTATUS 及 WSTOPSIG 等信号分解，还可以使用 POSIX 相关的 popen 函数来获取命令输出内容。

环境变量的设置可以使用 POSIX 规范函数 setenv(), unsetenv(), putenv() 等。 

程序正常退出时，执行以下动作，而 quick_exit 不会执行这些清理动作：

- 调用 atexit 注册的回调函数，按注册顺序反向执行。
- 据 C streams 对象会执行 flushed 及 closed 
- 关闭 tmpfile 创建的临时文件。
- 将控制权交还主机环境。

程序退出控制还涉及系统信号的处理。


### ===👉 Character type
- https://en.cppreference.com/w/c/string/byte

```c
/////////////////////////////////
// Defined in header <ctype.h> //
/////////////////////////////////

// Character classification
int isalnum(char ch) // checks if a character is alphanumeric
int isalpha(char ch) // checks if a character is alphabetic
int islower(char ch) // checks if a character is lowercase
int isupper(char ch) // checks if a character is an uppercase character
int isdigit(char ch) // checks if a character is a digit
int isxdigit(char ch) // checks if a character is a hexadecimal character
int iscntrl(char ch) // checks if a character is a control character
int isgraph(char ch) // checks if a character is a graphical character
int isspace(char ch) // checks if a character is a space character
int isblank(char ch) // (C99) checks if a character is a blank character
int isprint(char ch) // checks if a character is a printing character
int ispunct(char ch) // checks if a character is a punctuation character 

// Character manipulation
int tolower(char ch) // converts a character to lowercase
int toupper(char ch) // converts a character to uppercase
```

### ===👉 String conversions

C 语言的字符串最大特色就是 Null-terminated，即字符串以字符 '\0' 为结束标志。

根据字符编码，既有单字节、也有多字节：

- NTBS - Null-terminated byte string management
- NTMBS - Null-terminated multibyte string management
- NTWS - Null-terminated wide string management

例如：

- {'\x63','\x61','\x74','\0'} 表示一个 NTBS 字符串，ASCII 编码内容为 "cat"。
- {'\xe4','\xbd','\xa0','\xe5','\xa5','\xbd','\0'} 表示一个 UTF-8 编码 NTMBS 字符串 "你好"。


例如，UTF-8 编码就是常用的多字节编码，还有 GB18030, EUC-JP, Shift-JIS 等国家字符编码，而 UTF-16 则是双字节编码，也叫宽字符编码。

字符串处理相关函数的定义来源：

- `<string.h>`
- `<ctype.h>` 提供了一系列字符类型判断函数。
- 标准库提供了大量字符串操作函数。

Conversions to numeric formats 

    Defined in header <stdlib.h> 
    atof converts a byte string to a floating-point value
    (function) 
    atoiatolatoll
    (C99) converts a byte string to an integer value
    (function) 
    strtolstrtoll
    (C99) converts a byte string to an integer value
    (function) 
    strtoul strtoull
    (C99) converts a byte string to an unsigned integer value
    (function) 
    strtofstrtodstrtold
    (C99)(C99) converts a byte string to a floating point value
    (function) 
    Defined in header <inttypes.h> 
    strtoimaxstrtoumax
    (C99)(C99) converts a byte string to intmax_t or uintmax_t
    (function) 

String manipulation 

    Defined in header <string.h> 
    strcpystrcpy_s
    (C11) copies one string to another
    (function) 
    strncpystrncpy_s
    (C11) copies a certain amount of characters from one string to another
    (function) 
    strcatstrcat_s
    (C11) concatenates two strings
    (function) 
    strncatstrncat_s
    (C11) concatenates a certain amount of characters of two strings
    (function) 
    strxfrm transform a string so that strcmp would produce the same result as strcoll
    (function) 

String examination 

    Defined in header <string.h> 
    strlenstrnlen_s
    (C11) returns the length of a given string
    (function) 
    strcmp compares two strings
    (function) 
    strncmp compares a certain amount of characters of two strings
    (function) 
    strcoll compares two strings in accordance to the current locale
    (function) 
    strchr finds the first occurrence of a character
    (function) 
    strrchr finds the last occurrence of a character
    (function) 
    strspn returns the length of the maximum initial segment that consists
    of only the characters found in another byte string
    (function) 
    strcspn returns the length of the maximum initial segment that consists
    of only the characters not found in another byte string
    (function) 
    strpbrk finds the first location of any character in one string, in another string
    (function) 
    strstr finds the first occurrence of a substring of characters
    (function) 
    strtokstrtok_s
    (C11) finds the next token in a byte string
    (function) 

Character array manipulation 

    Defined in header <string.h> 
    memchr searches an array for the first occurrence of a character
    (function) 
    memcmp compares two buffers
    (function) 
    memsetmemset_s
    (C11) fills a buffer with a character
    (function) 
    memcpymemcpy_s
    (C11) copies one buffer to another
    (function) 
    memmovememmove_s
    (C11) moves one buffer to another
    (function) 

Miscellaneous 

    Defined in header <string.h> 
    strerrorstrerror_sstrerrorlen_s
    (C11)(C11) returns a text version of a given error code
    (function) 


## ==⚡ `<setjmp.h>` Nonlocal jumps
- https://en.cppreference.com/w/c/program
- https://en.cppreference.com/w/c/language/array

在 C 语言中，goto 语句只能在函数体内部各 label 间跳转，但不能跳转到另一个函数中。通过 setjmp 和 longjmp 可以实现这种类型的分支跳转，并且可以实现类似 try-catch 这样的功能，或者协程的实现。

使用步骤：

- 在程序 A 函数中调用 `setjmp` 保存当前执行环境到 `jmp_buf`；
- 在另一函数 B 中调用 `longjmp` 跳转到上面保存的 `jmp_buf`，并传入一个值;
- 程序返回到 A 函数，此时执行点又回到调用 `setjmp` 的返回处，且返回值是 `longjmp` 传入的值。

执行环境，简单地说，就是 CPU 在某个时间中的寄存器、内存状态，寄存器保存了程序执行的必要信息，以 x86 为例：

- ESP 保存当前栈顶的地址。
- EBP 保存当前函数栈帧的地址，即一个指针，函数通过栈指针加偏移获取函数的参数。
- EIP 保存下一条要执行的指令地址。

函数的调用约定 calling conventions 包含参数的入栈顺序，对寄存器也有影响，以 x86 cdecl，即 C 语言函数的调用约定为例：

- 函数参数通过栈传递，参数列表按从右到左顺序压入栈内存，并且由调用者负责清理栈中的参数。
- 整型值和内存地址通过 EAX 返回。
- EAX, ECX, EDX 由调用者负责保存，其余的由被调函数负责保存。

所以，`setjmp` 相当于一个现场保护函数，而 `longjmp` 就是一个现场恢复函数。

调用 `setjmp` 的上下文必需是以下 if, switch, while, do-while, for 几种流程控制结构中，包括完整的 `setjmp` 表达式，其它位置使用产生不确定行为：

```c
switch(setjmp(env)) { /*...*/ }
if(setjmp(env) > 10) { /*...*/ }
while(!setjmp(env)) { /*...*/ }

// the entire expression of an expression statement (possibly cast to void).
setjmp(env);
```

示范，模拟一个循环结构：

```c
#include <stdio.h>
#include <setjmp.h>
#include <stdnoreturn.h>
 
jmp_buf jump_buffer;
 
noreturn void a(int count) 
{
    printf("a(%d) called\n", count);
    longjmp(jump_buffer, count+1); // will return count+1 out of setjmp
}
 
int main(void)
{
    volatile int count = 0; // local vars must be volatile for setjmp
    if (setjmp(jump_buffer) != 9)
        a(count++);
}
```

Output:

    a(0) called
    a(1) called
    a(2) called
    a(3) called
    a(4) called
    a(5) called
    a(6) called
    a(7) called
    a(8) called

模仿错误捕捉：

```c
static jmp_buf env;

double divide(double to, double by)
{
    if(by == 0)
        longjmp(env, 1);
    return to / by;
}

void f() 
{
    if (setjmp(env) == 0)
        divide(2, 0);
    else
        printf("Cannot / 0");
    printf("done");
}
```

头文件提供两个函数和一个类型定义：

```c
//////////////////////////////////
// Defined in header <setjmp.h> //
//////////////////////////////////

// Saves the current execution context into a variable env of type jmp_buf. 
#define setjmp(env) /* implementation-defined */

// Loads the execution context env saved by a previous call to setjmp. 
void longjmp( jmp_buf env, int status ); // (until C11)
_Noreturn void longjmp( jmp_buf env, int status ); // (since C11)

// execution context type
typedef /* unspecified */ jmp_buf;
```

The `jmp_buf` type is an array type suitable for storing information to restore a calling environment. The stored information is sufficient to restore execution at the correct block of the program and invocation of that block. The state of floating-point status flags, or open files, or any other data is not stored in an object of type `jmp_buf`.

`setjmp` saves the current execution context into a variable env of type `jmp_buf`. This variable can later be used to restore the current execution context by `longjmp` function. That is, when a call to `longjmp` function is made, the execution continues at the particular call site that constructed the `jmp_buf` variable passed to `longjmp`. In that case setjmp returns the value passed to `longjmp`.

`longjmp` loads the execution context env saved by a previous call to `setjmp`. This function does not return. Control is transferred to the call site of the macro `setjmp` that set up env. That `setjmp` then returns the value, passed as the status.

If the function that called `setjmp` has exited (whether by return or by a different `longjmp` higher up the stack), the behavior is undefined. In other words, only long jumps up the call stack are allowed.

Jumping across threads (if the function that called `setjmp` was executed by another thread) is also undefined behavior.

(since C11)
If when `setjmp` was called, a VLA or another variably-modified type variable was in scope and control left that scope, `longjmp` to that `setjmp` invokes undefined behavior even if control remained within the function.

On the way up the stack, `longjmp` does not deallocate any VLAs, memory leaks may occur if their lifetimes are terminated in this way:

    void g(int n)
    {
        int a[n]; // a may remain allocated
        h(n); // does not return
    }
    void h(int n)
    {
        int b[n]; // b may remain allocated
        longjmp(buf, 2); // might cause a memory leak for h's b and g's a
    }

以上代码片断中的数组是 VLA - Variable-length arrays，注意它是通过变量来指针长度的，所以需要在运行时才能确实长度，不能在编译器进行初始化设置。

longjmp 函数的参数解析：

- `env` -   variable referring to the execution state of the program saved by `setjmp`
- `status`  -   the value to return from `setjmp`. If it is equal to 0, 1 is used instead



## ==⚡ `<signal.h>` Signals
- https://en.cppreference.com/w/c/program/signal

信号处理函数和 Standard Library `<stdlib.h>` Program termination 函数是搭配使用的，

```c
//////////////////////////////////
// Defined in header <signal.h> //
//////////////////////////////////

// sets a signal handler for particular signal
void (*signal( int sig, void (*handler) (int))) (int);

// Sends signal sig to the program. The signal handler, specified using signal(), is invoked.
int raise( int sig );

// An integer type which can be accessed as an atomic entity even in the presence of asynchronous interrupts made by signals.
typedef /* unspecified */ sig_atomic_t;

#define SIGTERM /*implementation defined*/
#define SIGSEGV /*implementation defined*/
#define SIGINT /*implementation defined*/
#define SIGILL /*implementation defined*/
#define SIGABRT /*implementation defined*/
#define SIGFPE /*implementation defined*/
```

信号处理回调函数必需指定为以下之一：

- `SIG_DFL` macro. The signal handler is set to default signal handler.
- `SIG_IGN` macro. The signal is ignored.
- pointer to a function. The signature of the function must be equivalent to `void fun(int sig);`

SIG_DFL 和 SIG_IGN 是两种不同的信号处理策略，另外 SIG_ERR 定义了注册信号处理函数失败时返回的 `void (*)(int)` 函数指针类型。

信号常量 Signal types：

    | Constant |                           Explanation                           |
    |----------|-----------------------------------------------------------------|
    | SIGTERM  | termination request, sent to the program                        |
    | SIGSEGV  | invalid memory access (segmentation fault)                      |
    | SIGINT   | external interrupt, usually initiated by the user               |
    | SIGILL   | invalid program image, such as invalid instruction              |
    | SIGABRT  | abnormal termination condition, as is e.g. initiated by abort() |
    | SIGFPE   | erroneous arithmetic operation such as divide by zero           |

示范：

```c
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

volatile sig_atomic_t gSignalStatus = 0;

void signal_handler(int signal)
{
    printf("Received signal %d\n", signal);
    gSignalStatus = signal;
}
 
int main(void)
{
    /* Install a signal handler. */
    if (signal(SIGTERM, signal_handler) == SIG_ERR)
    {
        printf("Error while installing a signal handler.\n");
        exit(EXIT_FAILURE);
    }
 
    printf("Sending signal %d\n", SIGTERM);
    if (raise(SIGTERM) != 0)
    {
        printf("Error while raising the SIGTERM signal.\n");
        exit(EXIT_FAILURE);
    }
 
    printf("Exit main()\n");
    return EXIT_SUCCESS;
}
```

Output:

    Sending signal 15
    Received signal 15
    Exit main()



## ==⚡ `<inttypes.h>` & `<stdint.h>`
- https://en.cppreference.com/w/c/types/integer
- https://en.cppreference.com/w/c/types/limits

C99 提供了两个整形跨平台的头文件，旧的整形定义不方便在跨平台中使用，例如在嵌入式开发中常常需要 16-bit 的数据类型，并且由于嵌入式内存紧凑，需要更细致的控制数据范围。C99 提供的定宽整形 int8_t、int16_t、int32_t 可以很方便地根据需要使用，宽度范围显式指定，既清晰也直观。

- `<inttypes.h>` Format conversion of integer types
- `<stdint.h>` Fixed width integer types

```c
typedef signed char        int8_t;
typedef short              int16_t;
typedef int                int32_t;
typedef long long          int64_t;
typedef unsigned char      uint8_t;
typedef unsigned short     uint16_t;
typedef unsigned int       uint32_t;
typedef unsigned long long uint64_t;

typedef signed char        int_least8_t;
typedef short              int_least16_t;
typedef int                int_least32_t;
typedef long long          int_least64_t;
typedef unsigned char      uint_least8_t;
typedef unsigned short     uint_least16_t;
typedef unsigned int       uint_least32_t;
typedef unsigned long long uint_least64_t;

typedef signed char        int_fast8_t;
typedef int                int_fast16_t;
typedef int                int_fast32_t;
typedef long long          int_fast64_t;
typedef unsigned char      uint_fast8_t;
typedef unsigned int       uint_fast16_t;
typedef unsigned int       uint_fast32_t;
typedef unsigned long long uint_fast64_t;

typedef long long          intmax_t;
typedef unsigned long long uintmax_t;
```

除了以上这套 int 和 uint 定宽类型，还有 int_fast, int_least, uint_fast, uint_least 类型。

- fast 表示 fastest signed integer type，根据机器选择宽度，至少为类型名字中数字指定的宽度。
- least 表示 smallest signed integer type，根据机器选择宽度，至少为类型名字中数字指定的宽度。

另外还定义了各种宏常量，如：

```c
#define INT8_MIN         (-127i8 - 1)
#define INT16_MIN        (-32767i16 - 1)
#define INT32_MIN        (-2147483647i32 - 1)
#define INT64_MIN        (-9223372036854775807i64 - 1)
#define INT8_MAX         127i8
#define INT16_MAX        32767i16
#define INT32_MAX        2147483647i32
#define INT64_MAX        9223372036854775807i64
#define UINT8_MAX        0xffui8
#define UINT16_MAX       0xffffui16
#define UINT32_MAX       0xffffffffui32
#define UINT64_MAX       0xffffffffffffffffui64
```

使用时，通常引入 `<inttypes.h>` 即可，它包含了定宽整形的格式定义，也会引入 `<stdint.h>`。

```cpp
#include <stdio.h>
#include <inttypes.h>
 
int main(void)
{
    printf("%zu\n", sizeof(int64_t));
    printf("%s\n", PRId64);
    printf("%+"PRId64"\n", INT64_MIN);
    printf("%+"PRId64"\n", INT64_MAX);
 
    int64_t n = 7;
    printf("%+"PRId64"\n", n);
}
// Possible output:

// 8
// lld
// -9223372036854775808
// +9223372036854775807
// +7
```

如果使用 C++11 编译，以上 PRId64 宏定义格式化字符串需要加空格。


## ==⚡ `<limits.h>` `<float.h>` `<stdint.h>` Limits of library types
- https://en.cppreference.com/w/c/types/limits
- The IEEE 754 Format http://mathcenter.oxford.emory.edu/site/cs170/ieee754/
- Numerical Computation Guide https://docs.oracle.com/cd/E19957-01/806-3568/ncgTOC.html
- CIS-77 Introduction to Computer Systems - Bits, Numbers Representation http://www.c-jump.com/CIS77/CPU/Numbers/index.html

Implementation-defined Limits: `<limits.h>` and `<float.h>`

由于浮点数的有最小精度约束，一般比较浮点数时，不直接进行比较，而是比较差值是否超过最小精度值，即 FLT_EPSILON DBL_EPSILON LDBL_EPSILON 指定的误差值。

ANSI/IEEE Std 754-1985 浮点标准是最应用最广泛的二进制浮点数算术标准，被许多 CPU 与浮点运算器所采用。

IEEE 浮点数标准是从逻辑上用三元组 {S，E，M} 来表示一个数 V 的，即 V=(-1)S×M×2^E。

符号位 S (sign bit) 决定数的正负，是正数 S=0，是负数 S=1，而对于数值 0 的符号位解释则作为特殊情况处理。

有效数字位 M (Significand) 是二进制小数，在内存记录中使用科学计数法，二进制表达省略开头的 1，这样可以多利用一个 bit 来增加有效精度。它的取值范围为 1 ~ 2^-ε，或者为 0 ~ 1^-ε。它也被称为尾数位 Mantissa、系数位 Coefficient，甚至还被称作“小数”。

指数位 E (Exponent Bias) 是 2 的幂，可能是负数，它的作用是对浮点数加权。

IEEE 754 规定了 3 种表示浮点数值格式，对应 C89 规范的三种浮点类型：

    |     IEEE Precision     |    C/C++    |   bits  | 符号位 | 指数位 | 有效位  | 十进位    |   最小规格正整数   |   最大规格正整数   |
    |------------------------|-------------|---------|--------|--------|---------|---------|-------------------|-------------------|
    | single                 | float       | 32bits  | 1 bit  | 8 bit  | 24 bit  | 6 ~ 9   | 1.175... 10e-38   | 3.402... 10e+38   |
    | double                 | double      | 64bits  | 1 bit  | 11 bit | 53 bit  | 15 ~ 17 | 2.225... 10e-308  | 1.797... 10e+308  |
    | double extended(SPARC) | long double | 128bits | 1 bit  | 15 bit | 113 bit | 33 ~ 36 | 3.362... 10e-4932 | 1.189... 10e+4932 |

双精度扩展格式在 x86 平台中定义为 4 个部分，1-bit 符号位，15-bit 指数位，1-bit 显式前导有效位，称为 j，剩下 63-bit 有效位(不包括隐含位)。

注意有效位，因为隐含省略的前缀 1，所以增加了 1 bit 有效位。

另外，规格数和次规格数 Normal 和 Subnormal 两种数值差别在于，正规数有效数字的前导位为 1 即二进制浮点左侧的一个 bit，而次正规数有效数字的前导位为 0，次正规数也称为非正规数。

请注意，单精度、双精度，对应 e < 255 时，e < 2047 时，赋予浮点格式位模式的值使用以下方法构成：将二进制基数点插入到紧邻小数最高有效位的左侧，将一个隐含位插入到紧邻二进制点的左侧。如此构成的数字称为有效数字，称为隐含位，原因是在双精度格式位模式中没有显式指定其值，但偏置指数字段的值隐式指定了该值。因而以二进制位置表示法来表示一个带分数（整数加小数，其中 0 ≤ 小数 < 1）。

The header `<limits.h>` defines constants for the sizes of integral types. The values below are acceptable minimum magnitudes; larger values may be used. 

    | Constants |         Value          |           Description           |
    |-----------|------------------------|---------------------------------|
    | CHAR_BIT  | 8                      | bits in a char                  |
    | CHAR_MAX  | UCHAR_MAX or SCHAR_MAX | maximum value of char           |
    | CHAR_MIN  | 0 or SCHAR_MIN         | maximum value of char           |
    | INT_MAX   | 32767                  | maximum value of int            |
    | INT_MIN   | -32767                 | minimum value of int            |
    | LONG_MAX  | 2147483647             | maximum value of long           |
    | LONG_MIN  | -2147483647            | minimum value of long           |
    | SCHAR_MAX | +127                   | maximum value of signed char    |
    | SCHAR_MIN | -127                   | minimum value of signed char    |
    | SHRT_MAX  | +32767                 | maximum value of short          |
    | SHRT_MIN  | -32767                 | minimum value of short          |
    | UCHAR_MAX | 255                    | maximum value of unsigned char  |
    | UINT_MAX  | 65535                  | maximum value of unsigned int   |
    | ULONG_MAX | 4294967295             | maximum value of unsigned long  |
    | USHRT_MAX | 65535                  | maximum value of unsigned short |

The names in the table below, a subset of `<float.h>`, are constants related to floating-point arithmetic. When a value is given, it represents the minimum magnitude for the corresponding quantity. Each implementation defines appropriate values. 

    |  Constants   | Value |                    Description                    |
    |--------------|-------|---------------------------------------------------|
    | FLT_RADIX    |     2 | radix of exponent, representation, e.g., 2, 16    |
    | FLT_ROUNDS   |       | floating-point rounding mode for addition         |
    | FLT_DIG      |     6 | decimal digits of precision                       |
    | FLT_EPSILON  |  1E-5 | smallest number x such that 1.0+x != 1.0          |
    | FLT_MANT_DIG |       | number of base FLT_RADIX in mantissa              |
    | FLT_MAX      | 1E+37 | maximum floating-point number                     |
    | FLT_MAX_EXP  |       | maximum n such that FLT_RADIXn-1 is representable |
    | FLT_MIN      | 1E-37 | minimum normalized floating-point number          |
    | FLT_MIN_EXP  |       | minimum n such that 10n is a normalized number    |
    | DBL_DIG      |    10 | decimal digits of precision                       |
    | DBL_EPSILON  |  1E-9 | smallest number x such that 1.0+x != 1.0          |
    | DBL_MANT_DIG |       | number of base FLT_RADIX in mantissa              |
    | DBL_MAX      | 1E+37 | maximum double floating-point number              |
    | DBL_MAX_EXP  |       | maximum n such that FLT_RADIXn-1 is representable |
    | DBL_MIN      | 1E-37 | minimum normalized double floating-point number   |
    | DBL_MIN_EXP  |       | minimum n such that 10n is a normalized number    |

以下为 `<stdint.h>` 头文件中定义的整形限制常量：

    | PTRDIFF_WIDTH    | (C23) bit width of object of ptrdiff_t type        |
    | PTRDIFF_MIN      | (C99) minimum value of object of ptrdiff_t type    |
    | PTRDIFF_MAX      | (C99) maximum value of object of ptrdiff_t type    |
    | SIZE_WIDTH       | (C23) bit width of object of size_t type           |
    | SIZE_MAX         | (C99) maximum value of object of size_t type       |
    | SIG_ATOMIC_WIDTH | (C23) bit width of object of sig_atomic_t type     |
    | SIG_ATOMIC_MIN   | (C99) minimum value of object of sig_atomic_t type |
    | SIG_ATOMIC_MAX   | (C99) maximum value of object of sig_atomic_t type |
    | WINT_WIDTH       | (C23) bit width of object of wint_t type           |
    | WINT_MIN         | (C99) minimum value of object of wint_t type       |
    | WINT_MAX         | (C99) maximum value of object of wint_t type       |

以下常量定义在 `<wchar.h>` `<stdint.h>`

    | WCHAR_WIDTH | (C23) bit width of object of wchar_t type     |
    | WCHAR_MIN   | (C99) minimum value of object of wchar_t type |
    | WCHAR_MAX   | (C99) maximum value of object of wchar_t type |


## ==⚡ `<string.h>` String Functions

There are two groups of string functions defined in the header `<string.h>`. The first have names beginning with str; the second have names beginning with mem. Except for memmove, the behavior is undefined if copying takes place between overlapping objects. Comparison functions treat arguments as unsigned char arrays. 

In the following functions

- variables s and t are of type char * ;
- cs and ct are of type const char * ;
- n is of type size_t;
- and c is an int converted to char. 

- `char *strcpy(s,ct)`    copy string ct to string s, including '\0'; return s. 
- `char *strncpy(s,ct,n)` copy at most n characters of string ct to s; return s. Pad with '\0''s if ct has fewer than n characters. 
- `char *strcat(s,ct)`    concatenate string ct to end of string s; return s. 
- `char *strncat(s,ct,n)` concatenate at most n characters of string ct to string s, terminate s with '\0'; return s. 
- `int strcmp(cs,ct)`     compare string cs to string ct, return < 0 if cs < ct, 0 if cs==ct, or > 0 if cs > ct. 
- `int strncmp(cs,ct,n)`  compare at most n characters of string cs to string ct; return < 0 if cs < ct, 0 if cs==ct, or > 0 if cs > ct. 
- `char *strchr(cs,c)`    return pointer to first occurrence of c in cs or NULL if not present. 
- `char *strrchr(cs,c)`   return pointer to last occurrence of c in cs or NULL if not present. 
- `size_t strspn(cs,ct)`  return length of prefix of cs consisting of characters in ct. 
- `size_t strcspn(cs,ct)` return length of prefix of cs consisting of characters not in ct. 
- `char *strpbrk(cs,ct)`  return pointer to first occurrence in string cs of any character string ct, or NULL if not present. 
- `char *strstr(cs,ct)`   return pointer to first occurrence of string ct in cs, or NULL if not present. 
- `size_t strlen(cs)`     return length of cs. 
- `char *strerror(n)`     return pointer to implementation-defined string corresponding to error n. 
- `char *strtok(s,ct)`    strtok searches s for tokens delimited by characters from ct; see below. 


A sequence of calls of strtok(s,ct) splits s into tokens, each delimited by a character from ct. The first call in a sequence has a non-NULL s, it finds the first token in s consisting of characters not in ct; it terminates that by overwriting the next character of s with '\0' and returns a pointer to the token. Each subsequent call, indicated by a NULL value of s, returns the next such token, searching from just past the end of the previous one. strtok returns NULL when no further token is found. The string ct may be different on each call. 

The mem... functions are meant for manipulating objects as character arrays; the intent is an interface to efficient routines. 

In the following functions

- s and t are of type void * ;
- cs and ct are of type const void * ;
- n is of type size_t;
- and c is an int converted to an unsigned char. 

- `void *memcpy(s,ct,n)`  copy n characters from ct to s, and return s. 
- `void *memmove(s,ct,n)` same as memcpy except that it works even if the objects overlap. 
- `int memcmp(cs,ct,n)`   compare the first n characters of cs with ct; return as with strcmp. 
- `void *memchr(cs,c,n)`  return pointer to first occurrence of character c in cs, or NULL if not present among the first n characters. 
- `void *memset(s,c,n)`   place character c into first n characters of s, return s. 



## ==⚡ `<stdarg.h>` Variable arguments
- Variadic functions https://en.cppreference.com/w/c/variadic

Variadic functions 是指类似 printf 这种可以接收可变长度参数的函数，`<stdarg.h>` 函数库提了 3 个宏函数和一个指针类型 va_list，它通常定义为 char 类型的指针，以方便读取栈内存中的参数列表：

```c
///////////////////////////////////
// Defined in header <stdarg.h>  //
///////////////////////////////////

void va_start( va_list ap, parmN );
// enables access to variadic function arguments

void va_copy( va_list dest, va_list src );
// (since C99) makes a copy of the variadic function arguments

T va_arg( va_list ap, T );
// accesses the next variadic function argument

void va_end( va_list ap );
// ends traversal of the variadic function arguments

/* unspecified */ va_list;
// va_list holds the information needed by va_start, va_arg, va_end, and va_copy
```

这些宏定义需要按步骤使用：

- `va_list` 定义一个参数列表对象，可以简单理解它为 char 指针；
- `va_start` or `va_copy` 初始化参数列表；
- `va_arg` 宏扩展后会从 `va_list` 指向的参数列表中获取指定类型 T 的参数，并且会修改参数列表对象指向下一个参数。
- `va_end` 负责清理 `va_start` or `va_copy` 初始化过的参数列表对象，需要配对使用。

如果创建了一个 `va_list` 实例，并传递给另一个函数，通过该函数中的 `va_arg` 使用该实例，则调应该在调用 `va_end` 之前进行。

将指向 `va_list` 列表对象的指针传递给另一个函数，然后在函数返回后使用该对象是合法的。

`va_arg` 可以根据传入的 T 类型来确定下一个参数的地址偏移，sizeof(T) 就是偏移字节数。

If the type of the next argument in ap (after promotions) is not compatible with T, the behavior is undefined, unless:

- one type is a signed integer type, the other type is the corresponding unsigned integer type, and the value is representable in both types; or
- one type is pointer to void and the other is a pointer to a character type.

If va_arg is called when there are no more arguments in ap, the behavior is undefined.


示范实现一个 simple_printf：

```c
#include <stdio.h>
#include <stdarg.h>

void simple_printf(const char* fmt, ...)
{
    va_list args;
    va_start(args, fmt);

    while (*fmt != '\0') {
        if (*fmt == 'd') {
            int i = va_arg(args, int);
            printf("%d\n", i);
        } else if (*fmt == 'c') {
            // A 'char' variable will be promoted to 'int'
            // A character literal in C is already 'int' by itself
            int c = va_arg(args, int);
            printf("%c\n", c);
        } else if (*fmt == 'f') {
            double d = va_arg(args, double);
            printf("%f\n", d);
        }
        ++fmt;
    }

    va_end(args);
}

int main(void)
{
    simple_printf("dcff", 3, 'a', 1.999, 42.5); 
}
```

Output:

    3
    a
    1.999000
    42.50000


## ==⚡ `<math.h>` Common mathematics functions
- https://en.cppreference.com/w/c/numeric/math

1. Basic operations
2. Exponential functions
3. Power functions
4. Trigonometric functions
5. Hyperbolic functions
6. Error and gamma functions
7. Nearest integer floating-point operations
8. Floating-point manipulation functions
9. Classification and comparison
10. Types
11. Macro constants

绝对值函数定义在 <stdlib.h> 文件中，有 abs, labs, llabs 等形式，对应不同的数据类型。

在 <math.h> 文件中也定义了多个形式，fabs, fabsf, fabsl，需要根据数据类型选择要使用的版本。 

```c
// <stdlib.h>
int abs (int);
long    labs (long);
long long llabs (long long);

// <math.h>
extern double fabs (double);
extern float fabsf (float);
extern long double fabsl (long double);

// <stdlib.h>
div_t   div (int __numer, int __denom);
ldiv_t  ldiv (long __numer, long __denom);
lldiv_t lldiv (long long __numer, long long __denom);
```



## ==⚡ `<assert.h>` `<errno.h>` Error handling
- https://www.runoob.com/cprogramming/c-macro-errno.html

有两个主要主错误处理提供的文件头：

- `<assert.h>` Conditionally compiled macro that compares its argument to zero 
- `<errno.h>` Macros reporting error conditions 

断言 assert 是一个宏定义，使用它，就可以在代码中插入用于验证的代码，并且可以通过定义一个 NDEBUG 符号来清除这些用于验证的代码。

断言会诊断指定条件表达式，必需是 scalar 值，如果比较结果不为 0，那么就打印诊断信息，然后调用标准库的 abort() 结束程序。

诊断信息包含条件表达式、还有标准的宏 `__FILE__`, `__LINE__`, `__func__` (since C99)

另外，除了断言，还静态断言 static_assert (C11)，它需要在编译期完成条件判断是否为 false。

    static_assert(2 + 2 == 4, "2+2 isn't 4");      // well-formed
    static_assert(sizeof(int) < sizeof(char),
                "this program requires that int is less than char"); // compile-time error

通过 gcc 参数启用 C11 支持：

    gcc -g -std=c11 -o file_d file.c


以下在非调试模式下生成的代码相当于什么也不做的 NOP 汇编指令：

    #define assert(condition) ((void)0)

在编译程序时，定义 NDEBUG 符号表示当前编译的程序不是用于调试，所以不必添加那些用于调试目的的代码。

    # Debug
    gcc -g -o file file.c

    # Release
    gcc -D NDEBUG -O2 -o file file.c

错误码转换信息函数 strerror 会将对应的错误码转换成用户友好的文字信息，而不是一个毫无意义的数字。

示范程序：

```c
#include <stdio.h>
#include <errno.h>
#include <string.h>
#include <assert.h>

extern int errno;

int main() {
  FILE *fp;

  fp = fopen("file.txt", "r");
  if (fp == NULL) {
    fprintf(stderr, "Value of errno: %d\n", errno);
    fprintf(stderr, "Error opening file: %s\n", strerror(errno));
  } else {
    fclose(fp);
  }

  int num;
  printf("Type some number:");
  int succ_count = scanf("%d", &num);
  assert(succ_count==1);
  printf("yes %d! ", num);

  return (0);
}
```

例如，以下断言就可以打印异常所在的文件，行号，函数名等信息：

```c
#include <stdio.h>
// uncomment to disable assert()
// #define NDEBUG
#include <assert.h>
#include <math.h>
 
int main(void)
{
    double x = -1.0;
    assert(x >= 0.0);
    printf("sqrt(x) = %f\n", sqrt(x));   
 
    return 0;
}
```

注意，如果是手动编译，因为使用 math 数学函数库，就需要给连接程序添加上 libm.so 链接库：

    gcc -g -o file_d file.c -lm

注意，因为链接程序在编译程序后面运行，所以参数也放在后面，否则链接时会找不到 sqrt 函数定义。

C++ 中没有单独提供断言，要使用 C 语言的断言请使用以下导入方式：

```cpp
#include <cassert>
```

