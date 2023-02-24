# =🚩 Big forest
- [初识 Rust](https://wudaijun.com/2020/02/rust-basic/)
- [Cppreference Archives](https://en.cppreference.com/w/Cppreference:Archives)
- [C++ Quick Guide](https://www.tutorialspoint.com/cplusplus/cpp_quick_guide.htm)
- [Visual Studio 2019 C++ 语言文档](https://docs.microsoft.com/zh-cn/cpp/cpp/)
- [欢迎回到新式 C++](https://docs.microsoft.com/zh-cn/cpp/cpp/welcome-back-to-cpp-modern-cpp)
- [C++11 - the new ISO C++ standard](https://www.stroustrup.com/C++11FAQ.html)
- [C++17 features, Tony Tables](https://github.com/tvaneerd/cpp17_in_TTs/blob/main/ALL_IN_ONE.md)
- [重读 The C Programming Language](https://zhuanlan.zhihu.com/p/379408556)
- Writing Compilers and Interpreters: A Modern Software Engineering Approach Using Java
- [CS106B Programming Abstractions (C++)](https://web.stanford.edu/class/cs106b/)
- [CS107 Computer Organization & Systems (C)](https://web.stanford.edu/class/cs107/)

面向对象编程的四大特征：

✔ `抽象` Abstraction 类与对象体现了 C++ 的抽象特征，即类是对象的抽象，对象是类的具体表现形式。
✔ `封装` Encapsulation 封装意味着对象只向外部世界提供有限的接口，隐藏对象的内部状态和实现细节。
✔ `继承` Reuse 重用类的继承与派生体现了 C++ 的继承特性。
✔ `多态` Polymorphism 类的虚函数体现了 C++ 的多态性。

类与对象的数据成员、函数成员，以及数据成员和函数成员的公用、私有和保护特性体现了 C++ 的封装特性，
无法从外部直接修改。封装简化了类的使用，因为用户只需要了解类的有限接口，而不需要了解类的内部实现细节，
这可能很复杂。同时，程序员在编写类时总是可以通过封装来保持类实体的一致性。

OOP 概念创造者 Alan Kay 强调**消息**这一概念在 OOP 中所起的作用，即两个对象的消息通信是通过方法调用这一行为来实现。

The five SOLID principles are these:

• (SRP) Single responsibility principle — a class should have one, and only one, reason to change.
• (OCP) Open–closed principle — it should be possible to extend the behavior of a class without modifying it.
• (LSP) Liskov substitution principle — subclasses should be substitutable for their superclasses.
• (ISP) Interface segregation principle — many small, client-specific interfaces are better than one general-purpose interface.
• (DIP) Dependency inversion principle — depends on abstractions, not concretions.

推荐书单之前，先掌握技术书阅读方法论：

- 略读、泛读，速读一遍，最好在 1 ~ 2 天内完成，甚至是几个小时，主要目的是提取内容关键字；
- 精读一遍，在 2 周内看完，需要在时间充分的条件下进行；
- 深入实践，在整个过程中都要结合实践，也就是配合阅读做实验加深理解，并发现理解误区；
- 当你不精读后并结合实践还不能理解，请果断放弃并更换其它选择，目前此书不适合你阅读，即使好书你也吸收不了。

人的大脑记忆力有限，并且有遗忘时间曲线。在一天内快速看完一本书会在大脑里留下深刻印象，对于之后复习
以及总结都会有特别好的作用。

但是，这种短时记忆是牢固，在一定时间内不进行重复加固，就会被大脑遗弃，因为它觉得这对你来说不是重要的事。

对于每一章的知识，先阅读标题，弄懂大概讲的是什么主题，再去快速看一遍。不懂也没有关系，但是一定要在
不懂的地方做个记号，什么记号无所谓，但是要让自己后面再看的时候有个提醒的作用，看看第二次看有没有懂了些。

有了前面速读的感觉，第二次看会有慢慢深刻了思想和意识的作用，大脑就是这种工作模式。现在人类可能还没有
总结出为什么大脑对记忆的完全方法论，但是，就像我们专业程序员，打代码都是先实践，然后就渐渐懂了过程，
慢慢懂了原理。

记住一句话：每看完一个章节后，总结一下这个章节讲了啥，这是吸收记忆并释放记忆力的关键。

注意 C/C++ 语言并不等于计算机科学，需要结构其它更细分领域的知识才通知用好，包括数据结构与算法，
计算机网络编程等等，操作系统原理，编译原理，这很重要！还有计算机硬件体系结构，以及各种软件工具，
如 GNC GCC 编译器和 GDB 调试工具等等。

C++ 是一门很难掌握的语言，极其灵活且强大，体系庞大，支持各种编程范式：

- 面向过程（Procedure Programming, PP）
- 面向对象（Object Oriented Programming, OOP）
- 泛型编程（Generic Programming，GP）
- 函数编程（Lambda 表达式实现）


推荐使用配套工具，可以跨平台可使用：

- CMake + Ninja 自动化工程编译脚本生成器；
- GNU GCC 编译器套件，Windows 系统下使用 MinGW 移植版；
- Git + Github 作为代码版本管理以及笔记同步管理工具； 
- Visual Studio Code 或 Sublime Text 作为文字处理及 IDE 开发工具；


以下是 C/C++ 语言入门及深入的书单，StackOverflow 上也有 
The Definitive C++ Book Guide and List 和 The Definitive C Book Guide and List。

作为专业人员，我想说个笑话：C++ 未入门！

C/C++ 语言入门：

- C Primer Plus, 6th Edition By Stephen Prata
- C++ Primer Plus 6th By Stephen Prata
- Essential C++
- Accelerated C++
- C++ FAQs, Second Edition By Marshall Cline, Greg Lomow, Mike Girou
- The Design and Evolution of C++ By Bjarne Stroustrup

C/C++语言进阶之路：

- Expert C Programming: Deep C Secrets By Peter van der Linden
- C Traps and Pitfalls By Andrew Koenig
- C Programming FAQs By Steve Summit (495个C语言问题)
- Pointers On C 1st Edition By Kenneth Reek
- Pointers On C: Instructors Guide By Kenneth Reek
- Pointers in C A Hands on Approach by Naveen Toppo, Hrishikesh Dewan
- The C programming Language 2nd By Brian W. Kernighan and Dennis M. Ritchie.
- The C++ Programming Language By Bjarne Stroustrup (4th ed updated for C++11)
- Thinking in C++ By Bruce Eckel, 2nd Edition Volume 1/2, 2000
- Effective C++ By Scott Meyers
- More effective C++ By Scott Meyers
- Exceptional C++: 47 engineering puzzles, programming problems, and solutions
- More Exceptional C++: 40 New Engineering Puzzles, Programming Problems, and Solutions
- The C++ standard library
- Effective STL
- Generic programming and the STL（泛型编程与STL）

- 紧跟时代更新：

- A Tour of C++ By Bjarne Stroustrup (2nd edition for C++17)
- Overview of the New C++ (C++11/14) By Scott Meyers
- Effective Modern C++: 42 Specific Ways to Improve Your Use of C++11 and C++14 by Scott Meyers

C++ 进阶：

- C++ Concurrency In Action By Anthony Williams
- Advanced C++ Programming Styles and Idioms By James Coplien
- Modern C++ Design: Generic Programming and Design Patterns Applied By Andrei Alexandrescu
- Inside the C++ Object Model By Stanley Lippman（经典古老系列深度探索C++对象模型）
- Design Patterns in Modern C++ Reusable Approaches for OO Software Design By Dmitri Nesteruk


C Primer 和 C Primer plus 这是目前市场上，最适合自学的 C 语言书籍。你可以在书中找到所有 C 语言编程概念的详细解释。这本书为每一个单独的概念提供了简短的例子，帮助读者更好理解。比如，指针这一章节就体现了这个特点。指针章节是本书编写最出色的章节之一。指针用来标识内存中的具体位置并且存放相应内存地址。书中参照了最新的ANSI标准C99。对于初级程序员来说，本书对学习基本概念大有帮助。这些概念在其他语言（比如：PHP和JAVA中）也有所应用。

《C专家编程》 你是准备进一步提高编程技巧的C语言专家吗？《C专家编程》就是为你准备的，它可以帮助程序员理解高级的C语言概念，强调程序员常用的一些最佳C语言技巧。这本书写得十分有趣，展现了作者在SUN系统（SUN SYSTEM）中的丰富经验。还定义了一些传统的编程方式，比如使用不同的声明方式。同时，还提供了很多实用的编程实践提示，比如，指针和数组之间的差别。

《C和指针》

本书通过对指针的基础知识和高级特性的探讨，帮助程序员把指针的强大功能融入到自己的程序中去。全书共18章，覆盖了数据、语句、操作符和表达式、指针、函数、数组、字符串、结构和联合等几乎所有重要的C编程话题。 适合C语言初学者和初级c程序员阅读，也可作为计算机专业学生学习C语言的参考。 　　

《你必须知道的495个C语言问题》

本书以问答的形式组织内容，讨论了学习或使用C语言的过程中经常遇到的一些问题。书中列出了C用户经常问的400多个经典问题，涵盖了初始化、数组、指针、字符串、内存分配、库函数、C预处理器等各个方面的主题，并分别给出了解答，而且结合代码示例阐明要点。

本书结构清晰，讲解透彻，是各高校相关专业C语言课程很好的教学参考书，也是各层次C程序员的优秀实践指南。

《Essential C++》 

这是一本内容不多但很实用的C++入门书籍，强调快速上手与理解C++编程。本书主要围绕一系列逐渐复杂的程序问题，以及用以解决这些问题的语言特性展开讲解。你不只学到C++的函数和结构，也会学习到它们的设计目的和基本原理。

《C++ Primer》

本书对C++基本概念、技术、以及现代C++编程风格进行了全面而且权威的阐述，是C++初学者的最佳指南；本书可以帮助你编写实用的程序，而无需首先精通每个语言细节。对于中高级程序员，本书也是不可或缺的参考书。

《Effective C++》和《More effective C++》

作者Scott Meyers。你应该熟读它们，并清楚地理解每个项目。该书围绕55条准则，每一条都介绍了一个可让你写出更好的C++程序代码的方法，并以特别设计过的例子详加讨论。

《Exceptional C++（C++编程剖析）》和《More exceptional C++》

这两本书中都包含了40个C++编程问题，这些问题会让你磨练自己的技能，最终成为优秀的C++程序员。这些问题是Herb Sutter精心挑选，与ISO/ANSI C++官方标准相一致，帮助程序员在设计、架构和编码过程中保持良好的风格，从而使编写的C++软件更健壮、更高效。

《The C++ standard library（C++标准程序库）》

这是标准模板库字典，你可以在本书中找到STL相关的一切知识。本书焦点放在标准模板库、检查容器、迭代器、函数对象和STL算法上。每一个元素都有深刻的呈现，包括其介绍、设计、运用实例、细节解说、陷阱、意想不到的危险，以及相关类别和函数等。

《Effective STL》

这是Scott Meyers的第三本C++专著，也是学习STL最权威的书籍。作者对书中的50个指导方针都作了详尽的分析，并配以示例。通过这些规则，C++开发者可以最大限度地使用STL。

《Generic programming and the STL（泛型编程与STL）》

本书阐述了泛型程序设计的核心理念：concepts（概念）、modeling（模型）和refinement（改善），并为你展示这些观念如何导出STL的基础概念：iterators（迭代器）、containers（容器）和function objects（函数对象）。按照本书所述，你可以把STL想象成一个由concepts组成的library，你将学习到STL正式结构并理解其强大的优势。

《Modern C++ design（现代C++设计）》

作者Andrei Alexandrescu为C++程序员打开了一个新的局面。本书提供了一些针对软件设计的前沿方法，如联合设计模式、泛型编程，使程序员可以编写有表现力的、灵活的、高度可重用的代码。

《Inside the C++ object model（深度探索C++对象模型）》

本书专注于C++面向对象程序设计的底层机制，包括结构式语意、临时性对象的生成、封装、继承，以及虚拟——虚拟函数和虚拟继承，帮助你理解程序的底层实现，以便写出更高效的代码。




# =🚩 Professional C++, 5th Edition
- [Compiler support for C++20](https://en.cppreference.com/w/cpp/compiler_support/20)
- [Professional C++, 5th Edition](https://www.wiley.com/en-us/Professional+C%2B%2B%2C+5th+Edition-p-9781119695400)

《C++20高级编程-第5版》经典，且内容丰富，不仅有 C++ 基础知识，也有很多 C++ 高级功能，特别是
C++20 的新特性。目前介绍 C++ 基础知识的书籍很多，但介绍 C++20 新特性的书籍却不多，而既介绍
C++ 基础知识又介绍 C++20 新特性的书可以说几乎没有。另外本书还重点介绍了很多编程哲学，包括 
C++ 的设计方法论，还从专业角度分析了 C++ 的编程艺术，并介绍 C++ 的软件工程和调试技术。可以说
本书的出版是 C++ 开发人员的福音，本书既适合新手学习 C++ 基础知识，又适合中高级开发者进阶。 

近十年来，C++ 引入了很多新特性，有 C++11 新特性、C++14 新特性、C++17 新特性，近期又更新了 C++20
新特性。作为一名 C++程序员，很有必要了解语言最新的变革。而且 C++20 标准新引入了很多有用的内容，
例如模块化、协程、std::format、std::jthread 等。读者在学习本书 C++20 新特性的时候，可以
多做一层思考，思考为什么标准委员会要引入此新特性。 

要成为资深 C++ 开发人员，必须扎实理解 C++ 语言的底层原理，了解不同的编程哲学和软件工程 方法论，
如何设计和编码，如何测试，如何调试，如何优化等。巧了，这些知识，本书都有介绍。 

《C++20高级编程-第5版》包括 5 部分。第 I 部分是 C++ 基础速成教程，第 II 部分介绍 C++ 设计方法论，
第 III 部分从 专业角度分析 C++ 编程技术，第 IV 部分讲解如何真正掌握 C++ 的高级功能，第 V 部分
重点介绍 C++ 软件工程技术。最后，附录 A 阐述了在 C++技术面试中取得成功的指南，附录 B 总结标准的
C++头 文件，附录 C 则简要介绍 UML。 

节选自《C++20高级编程(第5版) 》一书译者序

这本书的第五版不是简单地在以前的版本上打个小补丁出来卖钱，而是彻底地根据 C++20 重写了。特别明显的，
就是模块（module）的引入。作为 C++20 中最具革命性的新特性，你从最基本的 Hello World 程序就能
看到跟传统的 C++ 程序的不同；而后面讨论较新特性的时候，也莫不如此，几乎处处都能看到这个新特性的影子。
类似地，另外一些较新的 C++ 新特性（如 [[nodiscard]]、string_view 和结构化绑定），也较早得到介绍，
并在书中多次出现。如果你新学 C++ 的话，这本书可以让你不带历史包袱地看到一门现代的高性能编程语言。如果你
之前学过 C++ 的话，它也可以让你细细品味现代 C++ 带来的不同，特别是模块引入后对代码组织产生的巨大影响。


PROFESSIONAL C++ 5th Edition
INTRODUCTION xlvii

▸ PART I INTRODUCTION TO PROFESSIONAL C++

    CHAPTER 1 A Crash Course in C++ and the Standard Library 3
    CHAPTER 2 Working with Strings and String Views 87
    CHAPTER 3 Coding with Style 111

▸ PART II PROFESSIONAL C++ SOFTWARE DESIGN

    CHAPTER 4 Designing Professional C++ Programs 137
    CHAPTER 5 Designing with Objects 169
    CHAPTER 6 Designing for Reuse 187

▸ PART III C++ CODING THE PROFESSIONAL WAY

    CHAPTER 7 Memory Management 211
    CHAPTER 8 Gaining Proficiency with Classes and Objects 249
    CHAPTER 9 Mastering Classes and Objects 283
    CHAPTER 10 Discovering Inheritance Techniques 337
    CHAPTER 11 Odds and Ends 397
    CHAPTER 12 Writing Generic Code with Templates 421
    CHAPTER 13 Demystifying C++ I/O 465
    CHAPTER 14 Handling Errors 495
    CHAPTER 15 Overloading C++ Operators 535
    CHAPTER 16 Overview of the C++ Standard Library 573
    CHAPTER 17 Understanding Iterators and the Ranges Library 603
    CHAPTER 18 Standard Library Containers 627
    CHAPTER 19 Function Pointers, Function Objects, and Lambda Expressions 699
    CHAPTER 20 Mastering Standard Library Algorithms 725
    CHAPTER 21 String Localization and Regular Expressions 763
    CHAPTER 22 Date and Time Utilities 793
    CHAPTER 23 Random Number Facilities 809
    CHAPTER 24 Additional Library Utilities 821

▸ PART IV MASTERING ADVANCED FEATURES OF C++

    CHAPTER 25 Customizing and Extending the Standard Library 833
    CHAPTER 26 Advanced Templates 877
    CHAPTER 27 Multithreaded Programming with C++ 915

▸ PART V C++ SOFTWARE ENGINEERING

    CHAPTER 28 Maximizing Software Engineering Methods 971
    CHAPTER 29 Writing Efficient C++ 993
    CHAPTER 30 Becoming Adept at Testing 1021
    CHAPTER 31 Conquering Debugging 1045
    CHAPTER 32 Incorporating Design Techniques and Frameworks 1083
    CHAPTER 33 Applying Design Patterns 1105
    CHAPTER 34 Developing Cross-Platform and Cross-Language Applications 1137

▸ PART VI APPENDICES

    APPENDIX A C++ Interviews 1165
    APPENDIX B Annotated Bibliography 1191
    APPENDIX C Standard Library Header Files 1203
    APPENDIX D Introduction to UML 1213
    INDEX 1219


# =🚩 Hello World from C to C++
- http://www.cplusplus.com/reference/cstdio/
- http://www.cplusplus.com/reference/iostream/cout/

Hello World! for C

    #include <stdio.h>

    int main(int argv, char **args)
    {
        printf("Hello World!");
        return 0;
    }

Hello World! for C++

    #include <iostream>
    #include <cstdio>  // C++ style for stdio.h
    using namespace std;

    int main(int argv, char **args)
    {
        cout << "Hello World!" << endl;
        return 0;
    }

# =🚩 C Standard Library header
- [The GNU C Library](https://www.gnu.org/software/libc/manual/html_mono/libc.html)
- https://www.runoob.com/cprogramming/c-macro-errno.html

C 语言是一种通用的、面向过程式的计算机程序设计语言。1972 年，为了移植与开发 UNIX 操作系统，丹尼斯·里奇在贝尔电话实验室设计开发了 C 语言。以下这些 C 标准库就是基石：

| 头文件           | 功能            |
| :----------   | :----------   |
|`<assert.h>`   | 条件编译宏及断言比较 |
|`<complex.h>`  | (since C99) 复数算法 |
|`<ctype.h>`    | 字符类型检测函数，如判断变量是不是标点符号 ispunct(int) |
|`<errno.h>`    | 错误报告宏，如将错误宏号码转换成错误信息字符串 strerror(errno)  |
|`<fenv.h>`     | (since C99) 浮点数环境控制函数  |
|`<float.h>`    | 与浮点值相关的平台依赖常量。 |
|`<inttypes.h>` | (since C99) Format conversion of integer types  |
|`<iso646.h>`   | (since C95) Alternative operator spellings  |
|`<limits.h>`   | 基础类型的大小，和极限值  |
|`<locale.h>`   | 本地化工具，从发展的眼光看，UTF8 成为事实上的通用工具  |
|`<math.h>`     | 通用数学函数  |
|`<setjmp.h>`   | 非本地跳转 Nonlocal jumps |
|`<signal.h>`   | 信号量处理  |
|`<stdalign.h>` | (since C11) alignas and alignof convenience macros  |
|`<stdarg.h>`   | 参数变量宏  |
|`<stdatomic.h>`| (since C11) 原子类型 Atomic types  |
|`<stdbool.h>`  | (since C99) 布尔类型 Boolean type  |
|`<stddef.h>`   | 通用宏，如 NULL、size_t  |
|`<stdint.h>`   | (since C99) 定宽整数 |
|`<stdio.h>`    | 标准输入输出 Input/output  |
|`<stdlib.h>`   | 通用工具库，内存管理、程序工具、字符串转换、随机数等 |
|`<stdnoreturn.h>`| (since C11) noreturn 宏定义  |
|`<string.h>`   | C 风格 Null-terminated 字符串处理  |
|`<tgmath.h>`   | (since C99) Type-generic math (macros wrapping math.h and complex.h)  |
|`<threads.h>`  | (since C11) 线程库  |
|`<time.h>`     | 日期时间工具  |
|`<uchar.h>`    | (since C11) UTF-16、UTF-32 字符工具 |
|`<wchar.h>`    | (since C95) 多字节宽度字符工具 |
|`<wctype.h>`   | (since C95) 宽字符类型与映射工具 |

有兴趣了解源代码，可以从以下位置获取 The GNU C Library (glibc)，只建议有需要才去翻：

    # http://www.gnu.org/software/libc/
    git clone git://sourceware.org/git/glibc.git
    cd glibc
    git checkout --track -b glibc-2_11-branch origin/release/2.11/master

MSVC 编译器也提供源代码，标准库代码在 VC 安装目录 \VC\crt\src。

偶尔看看恶心的肠子肚子有利于看透美女的本质！


# =🚩 va_list Variable Argument lists
- [Variable Argument Lists in C++ using va_list](https://www.cprogramming.com/tutorial/lesson17.html)

参数列表化使用步骤：

- va_list arguments;                 // 初始一个区域保存参数列表
- va_start ( arguments, last_arg);   // 将参数初始化到前面定义的区域
- va_arg ( arguments, ... );         // 获取下一个参数
- va_end ( arguments );              // Cleans up the list

last_arg 是最后一个传递给函数的命名参数，即省略号之前的最后一个参数。这是一个分隔位，va_start 会将后面的变量初始化到 va_list 指定的区域。

    typedef /* unspecified */ va_list;
    void va_start(va_list ap, last_arg);
    T va_arg( va_list ap, T );
    void va_copy( va_list dest, va_list src );  (since C99) 
    void va_end( va_list ap );

还可以拷贝参数列表：

    va_copy(args2, args1);

va_start 的作用是初始化，va_start 指的是初始化为未知参数列表的第一个参数的地址，未知参数列表的参数个数。可以通过显式参数来传入参数个数，或者在参数列表最后传入 NULL 表示结束，像 sprintf 内置函数是通过桥式化字体串中的占位符号个数来确实参数列表的。

参数列表化示范：

```cpp
#include <cstdarg>
#include <iostream>
 
using namespace std;
 
// this function will take the number of values to average
// followed by all of the numbers to average
double average ( int num, ... )
{
    va_list arguments;                     // A place to store the list of arguments
    double sum = 0;

    va_start ( arguments, num );           // Initializing arguments to store all values after num
    for ( int x = 0; x < num; x++ )        // Loop until all numbers are added
    {
        sum += va_arg ( arguments, double ); // Adds the next value in argument list to sum.
    }
    va_end ( arguments );                  // Cleans up the list

    return sum / num;                   // Returns the average
}
int main()
    {
    // this computes the average of 13.2, 22.3 and 4.5 (3 indicates the number of values to average)
    cout << average ( 3, 12.2, 22.3, 4.5 ) << endl;
    // here it computes the average of the 5 values 3.3, 2.2, 1.1, 5.5 and 3.3
    cout << average ( 5, 3.3, 2.2, 1.1, 5.5, 3.3 ) << endl;
}
```


# =🚩 Advance with times (C++11 C++17 C++20)
- Effective Modern C++: 42 Specific Ways to Improve Your Use of C++11 and C++14 by Scott Meyers
- 现代 C++ 教程：高速上手 C++ 11/14/17/20 https://changkun.de/modern-cpp/

## ==⚡ In-Class Initializer (since C++11)
- C++ Core Guidelines http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines
- https://www.bestprog.net/en/2018/12/02/initialization-in-classes

C++11 introduced serveral contructor-related enhancements including:

- Class member initializers
- Delegating controctors

```cpp
class Foo {
  public:
    Foo() = default; // No need to initialize data members in the initializer list.
    Foo(bool) { /* Do stuff here. */ } // Again, data member already have values. 

  private:
    int bar = 42; 
    //      ^^^^ in-class initialization
    int baz{};
    //     ^^ same, but requests zero initialization
};
```

## ==⚡ Delegating constructors (since C++11)
- https://www.learncpp.com/cpp-tutorial/overlapping-and-delegating-constructors/
- https://en.cppreference.com/w/cpp/language/constructor

🦻 Constructors and member initializer lists

Constructor is a special non-static member function of a class that is used to initialize objects of its class type.

In the definition of a constructor of a class, member initializer list specifies the initializers for direct and virtual base subobjects and non-static data members. ( Not to be confused with std::initializer_list )

Constructors are allowed to call other constructors from the same class. This process is called delegating constructors (or constructor chaining).

To have one constructor call another, simply call the constructor in the member initializer list. This is one case where calling another constructor directly is acceptable. Applied to our example above:

```cpp
class Foo
{
private:

public:
    Foo()
    {
        // code to do A
    }

    Foo(int value): Foo{} // use Foo() default constructor to do A
    {
        // Foo(); // use the above constructor to do A (doesn't work)
        // code to do B
    }

};
```


## ==⚡ auto specifier (since C++11)

在变量声明中使用 auto 自动从变量的初始化参数中获取类型 (since C++14)。

函数返回值中使用 auto 自动从 return 语句中获取返回值类型 (since C++14)。

无类型的模板参数中使用 auto 自动从参数中获取类型 (since C++17)。

```cpp
// Syntax 
auto variable initializer       (1) (since C++11) 
auto function -> return type    (2) (since C++11) 
auto function                   (3) (since C++14) 
decltype(auto) variable initializer (4) (since C++14) 
decltype(auto) function         (5) (since C++14) 
auto ::                         (6) (concepts TS) 
cv(optional) auto ref(optional) parameter (7) (since C++14) 
template < auto Parameter >     (8) (since C++17) 
cv(optional) auto ref(optional) [ identifier-list ] initializer ; (9) (since C++17)
```

Explanation

1) When declaring variables in block scope, in namespace scope, in initialization statements of for loops, etc., the keyword auto may be used as the type specifier.

一但初始化参数的类型确定，auto 关键字就会被替换成具体类型，从函数调用中使用模板推断规则。auto 可以结合 const 或 & 等修饰符号。

For example, given *const auto& i = expr;*, the type of i is exactly the type of the argument u in an imaginary template `template<class U> void f(const U& u)` if the function call f(expr) was compiled. Therefore, auto&& may be deduced either as an lvalue reference or rvalue reference according to the initializer, which is used in range-based for loop.

If auto is used to declare multiple variables, the deduced types must match. For example, the declaration `auto i = 0, d = 0.0;` is ill-formed, while the declaration `auto i = 0, *p = &i;` is well-formed and the auto is deduced as int.

2) 在函数中使用尾返回的语法，auto 不会自动检测类型，它只作用语法的一部分。
3) 在函数中不用尾返回的语法，auto 会根据模板参数推断规则来推断 return 语句的返回值类型。
4) If the declared type of the variable is decltype(auto), the keyword auto is replaced with the expression (or expression list) of its initializer, and the actual type is deduced using the rules for decltype.
5) If the return type of the function is declared decltype(auto), the keyword auto is replaced with the operand of its return statement, and the actual return type is deduced using the rules for decltype.
6) A nested-name-specifier of the form auto:: is a placeholder that is replaced by a class or enumeration type following the rules for constrained type placeholder deduction.
7) A parameter declaration in a lambda expression. (since C++14) A function parameter declaration. (concepts TS)
8) If a template parameter is declared auto, its type is deduced from the corresponding argument.
9) A structured binding declaration

Until C++11, auto had the semantic of a storage duration specifier.

不允许混合变量和函数使用，如： `auto f() -> int, i = 0;`

The example showing output using one of the implementations where typeinfo::name prints full type names; filter through c++filt -t if using gcc or similar.

```cpp
#include <iostream>
#include <cmath>
#include <typeinfo>
 
template<class T, class U>
auto add(T t, U u) -> decltype(t + u) // the return type is the type of operator+(T, U)
{
    return t + u;
}
 
auto get_fun(int arg) -> double (*)(double) // same as: double (*get_fun(int))(double)
{
    switch (arg)
    {
        case 1: return std::fabs;
        case 2: return std::sin;
        default: return std::cos;
    }
}
 
int main()
{
    auto a = 1 + 2;
    std::cout << "type of a: " << typeid(a).name() << '\n';
    auto b = add(1, 1.2);
    std::cout << "type of b: " << typeid(b).name() << '\n';
    auto c = {1, 2};
    std::cout << "type of c: " << typeid(c).name() << '\n';
 
    auto my_lambda = [](int x) { return x + 3; };
    std::cout << "my_lambda: " << my_lambda(5) << '\n';
 
    auto my_fun = get_fun(2);
    std::cout << "type of my_fun: " << typeid(my_fun).name() << '\n';
    std::cout << "my_fun: " << my_fun(3) << '\n';
 
//  auto int x; // error as of C++11: "auto" is no longer a storage-class specifier
}
```


Possible output:

```sh
type of a: int
type of b: double
type of c: std::initializer_list<int>
my_lambda: 8
type of my_fun: double (*)(double)
my_fun: 0.14112
```



## ==⚡ Range-based for loop (since C++11)
https://en.cppreference.com/w/cpp/language/range-for

```cpp
#include <iostream>
#include <vector>
 
int main() {
    std::vector<int> v = {0, 1, 2, 3, 4, 5};
 
    // access by const reference
    for (const int& i : v) std::cout << i << ' ';
    std::cout << '\n';
 
    // access by value, the type of i is int
    for (auto i : v) std::cout << i << ' ';
    std::cout << '\n';
 
    // access by reference, the type of i is int&
    for (auto&& i : v) std::cout << i << ' ';
    std::cout << '\n';
 
    // the initializer may be a braced-init-list
    for (int n : {0, 1, 2, 3, 4, 5}) std::cout << n << ' ';
    std::cout << '\n';
 
    int a[] = {0, 1, 2, 3, 4, 5};
    // the initializer may be an array
    for (int n : a) std::cout << n << ' ';
    std::cout << '\n';
 
    // the loop variable need not be used
    for (int n : a) std::cout << 1 << ' ';
    std::cout << '\n';
 
}
```


# ==⚡ constexpr (since C++11)

C++11 标准中，定义变量时可以用常量表达式 constexpr 修饰，从而使该变量获得在编译阶段即可计算出结果的能力。

值得一提的是，使用 constexpr 修改普通变量时，变量必须经过初始化且初始值必须是一个常量表达式：

```cpp
#include <iostream>
using namespace std;
int main()
{
    constexpr int num = 1 + 2 + 3;
    int url[num] = {1,2,3,4,5,6};
    couts<< url[1] << endl;
    return 0;
}
```

constexpr 还可以用于修饰函数的返回值，这样的函数又称为“常量表达式函数”。

一个函数要想成为常量表达式函数，必须满足如下 4 个条件：

1) 函数体只能包含一条 return 返回语句，using、typedef 以及 static_assert 断言语句除外。
2) 该函数必须有返回值，即函数的返回值类型不能是 void。
3) 函数在使用之前，必须有对应的定义语句。
4) return 返回的表达式必须是常量表达式。

```cpp
//常量表达式函数的声明
constexpr int display(int x);

//常量表达式函数的定义
constexpr int display(int x) {
    return 1 + 2 + x;
}
```

constexpr 可以修饰模板函数，但由于模板中类型的不确定性，因此模板函数实例化后的函数是否符合常量表达式函数的要求也是不确定的。

C++11 标准规定，如果 constexpr 修饰的模板函数实例化结果不满足常量表达式函数的要求，则 constexpr 会被自动忽略，即该函数就等同于一个普通函数。


# ==⚡ Lambda expressions (since C++11)
- https://en.cppreference.com/w/cpp/language/lambda
- https://docs.microsoft.com/zh-cn/cpp/cpp/lambda-expressions-in-cpp
- Under the hood of lambdas and std::function https://shaharmike.com/cpp/lambdas-and-functions/
在程序设计语言中，变量可以分为自由变量 free variable 与约束变量 bound variable 两种。简单来说，一个函数里局部变量和参数都被认为是约束变量。

闭包是可以包含自由变量的代码块，这些变量不是在这个代码块内或者任何全局上下文中定义的，而是在定义代码块的环境中定义的局部变量。闭包一词来源于以下两者的结合：要执行的代码块和为自由变量提供绑定的计算环境，即作用域 Scope。由于自由变量被包含在代码块中，这些自由变量以及它们引用的对象没有被释放。

在 Scala、Scheme、Common Lisp、Smalltalk、Groovy、JavaScript、Ruby、 Python 和 Lua，objective c 等语言中都能找到对闭包不同程度的支持。

通俗的说：匿名函数可以使用父函数中的局部变量，这种行为就叫做闭包！

Constructs a closure: an unnamed function object capable of capturing variables in scope.

Syntax 

    1) [capture-list](params) mutable(optional) constexpr(optional)(c++17) exception attribute -> ret { body }
    2) [capture-list](params) -> ret { body }
    3) [capture-list](params) { body }
    4) [capture-list]{ body }
 
1) 完整定义
2) 常量 lambda，捕获的对象拷贝不可修改
3) 省略末尾返回，闭包返回由以下规则决定：

    if the body consists of nothing but a single return statement with an expression, the return type is the type of the returned expression (after lvalue-to-rvalue, array-to-pointer, or function-to-pointer implicit conversion); 
    otherwise, the return type is void. 
    (until C++14)
    
    The return type is deduced from return statements as if for a function whose return type is declared auto.(since C++14)

4) 省略参数列表，闭包没有参数，参数列表相当一个空的圆括号，只用在非 constexpr, mutable, exception specification, attributes, or trailing return type is used.

概念解析：

- `mutable` - 允许函数体修改捕获的变量，并调用它们的非常量成员函数；
- `constexpr(C++17)` - 显式指定调用操作是 constexpr 函数，省略也一样，如果满足 constexpr 函数要求；
- `exception` - 为闭包指定异常规范或非异常从句 noexpert；
- `attribute` - 提供属性规范；
- `capture-list` - 捕获列表，逗号分隔，捕获方式有以下几种：

    - `[a,&b]` 副本拷贝方式捕获 a 变量，引入方式捕获 b；
    - `[this]` 捕获当前作用域对象，引用方式； 
    - `[&]` 以引用方式捕获所有自动变量，当前对象为引用方式如果存在；
    - `[=]` 以副本拷贝方式捕获所有自动变量，当前对象为引用方式如果存在；
    - `[]` 无捕获；
 
- `params` - 参数列表，C++14 之前不能使用默认参数，C++14 之后，如果使用 auto 类型，就是 generic lambda; 
- `ret` - 返回类型，省略时由函数体的返回语句推导；
- `body` - 闭包函数体； 

需要注意的是，`[&]` 不会修改被捕获变量的生命周期，你要保证被这些变量在闭包运行时是有效的。这一点不像 Java 中变量被 capture 就变成被引用了，从而 GC 不会回收它。

标准库提供的 bind 是更加强大的语法糖, 将手写需要很多很多代码的闭包, 浓缩到一行 bind 就可以搞定了.

    int boost_func(float f, float round) { return f + round; }
    float round = 0.5;
    boost::function<int(float)> f = boost::bind(boost_func, _1, round);

closure 的类型是隐藏的，每次创建一个 closure，编译器都会创建一个新的类型。

如果你想保存一个 clousre 时就不是那么直接，因为你不知道它的类型。这时那需要一些模板技巧，可参考 boost::function 的实现。

简单的方式是直接用 std::function 来保存。

    std::function<int(float)> closure;
    closure = [](float f) { return 0.0f };
    closure = [](float f) { return 1.0f };

示例：

```cpp
#include <vector>
#include <iostream>
#include <algorithm>
#include <functional>
 
int main()
{
    std::vector<int> c = {1, 2, 3, 4, 5, 6, 7};
    int x = 5;
    c.erase(std::remove_if(c.begin(), c.end(), [x](int n) { return n < x; }), c.end());
 
    std::cout << "remove x<5 from c: ";
    std::for_each(c.begin(), c.end(), [](int i){ std::cout << i << ' '; });
    std::cout << '\n';
 
    // the type of a closure cannot be named, but can be inferred with auto
    auto plus4 = [](int i) { return i + 4; };
    std::cout << "plus4(6): " << plus4(6) << '\n';
 
    // like all callable objects, closures can be captured in std::function
    // (this may incur unnecessary overhead)
    std::function<int(int)> plus4f = [](int i) { return i + 4; };
    std::cout << "plus4f(6): " << plus4f(6) << '\n';
}
```


对比引入 lambda 之前的写法：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool gt5(int x){
    return x>5;
}

struct GT5{
    bool operator()(int x){
        return x>5;
    }
};

int main(){
    vector<int> v;
    v.push_back(1);
    ...
    cout<<count_if(v.begin(),v.end(),gt5)<<endl;
    cout<<count_if(v.begin(),v.end(),GT5())<<endl;
}
```


在类定义中使用 lambda：

```cpp
#include <vector>
#include <iostream>
#include <algorithm>
#include <functional>
// #include <boost/format.hpp>
// #include <format> // C++20

using namespace std;

struct X {
    int x, y;
    int operator()(int i){
        x = y = i;
    }
    void f()
    {
        // the context of the following lambda is the member function X::f
        auto lambda = [=]()->int
        {
            return operator()(this->x + y); // X::operator()(this->x + (*this).y)
                                            // this has type X*
        };
        printf("<struct X(%d,%d)>\n", x, y);
    }
}x1;

class S {
    int x = 0;
    void use(int a, int b){
        printf("<use (%d,%d)>\n", a, b);
    }
public:
    void f() {
        int i = 0;
        //  auto l1 = [i, x]{ use(i, x); };    // error: x is not a variable
        auto l2 = [i, x=x, this]{ use(i, x); };  // OK, copy capture
        i = 1; x = 1; l2(); // calls use(0,0)
        auto l3 = [i, &x=x, this]{ use(i, x); }; // OK, reference capture
        i = 2; x = 2; l3(); // calls use(1,2)
    }
};

int main()
{
    x1(1);
    x1.f();
    S s1;
    s1.f();
}
```



## ==⚡ narrowing conversions
- http://www.stroustrup.com/C++11FAQ.html#narrowing

Since C++11, {} initialization doesn't allow narrowing conversions.

In your code you are relying on implicit conversion from int to uint8_t which is considered a narrowing conversion because not all values of int can be stored in a uint8_t.

If you are sure you want to make this conversion you should use explicit casting.

```cpp
uint8_t x8bit[2] = 
{
    static_cast<uint8_t>(mv->dst_x & 0xff), 
    static_cast<uint8_t>(mv->dst_x >> 8)
};
```

Some compilers still allow narrowing conversions and only show a warning but it's actually an error according to the C++ standard.


## ==⚡ nullptr 与 NULL
 
C 语言通常将 NULL 定义为 0 值的空指针，当尝试将 NULL 指针赋值给变量时，会隐式转换到变量的数据类型，如下：

```cpp
#define NULL ((void *)0)
int *i = NULL;
```

而如果换做一个 C++ 编译器来编译的话是要出错的，因为 C++ 是强类型的，空指针是不能隐式转换成其他指针类型的。所以 C++ 中引入 0 值来表示空指针，编译器提供的头文件会这样定义 NULL：

```cpp
#ifdef __cplusplus
    #define NULL 0
#else
    #define NULL ((void *)0)
#endif
```

实际使用上推荐 C++ 中使用 0 来表示空指针而不是 NULL，尽管在 C++ 编译器下 NULL 就是 0，但是 0 的字面意义是明确的。

考虑一个重载函数的情况，fun 有一个重载接收整形指针，但是当发生空指针传入时，fun(int) 这种形式的重载被调用，这与程序员的意图相违背。

```cpp
int *i = 0; // ok
int *j = (void *)0; // error: invalid conversion from 'void*' to 'int*' [-fpermissive]
int fun(int i) { }
int fun(int *i){ }
```

在没有 C++11 的 nullptr 的时候，Imperfect C++ 上面有一个实现：

```cpp
const class nullptr_t
{
    public:
    template<class T>
    inline operator T*() const { return 0; }

    template<class C, class T>
    inline operator T C::*() const { return 0; }

    private:
    void operator&() const;
} nullptr = {};
```

## ==⚡ enum class (since C++11)

C++ 11 新出 enum class 解决 enum 两个问题：

- Two enumerations cannot share the same names.
- Enums are not type-safe.

枚举类型可以直接当做整数来使用，可以进行隐式转换，但是 enum class 不可以，不能直接当整数来用，它可以避免错误的枚举用法，在编译期就可以检测到。

并且，两个传统枚举类型不能使用相同的成员名。

如果要将 enum class 当成整型或字符型使用，就需要显式转换类型。

```cpp
#include <bits/stdc++.h>
using namespace std;
 
int main()
{
    enum Gender { Male, Female };
 
    // This will throw error:  redeclaration of 'Male' ...
    // enum Gender2 { Male, Female };
 
    // Creating Gender type variable
    Gender gender = Male;
    cout << gender << endl;

    // Upon comparing gender and color
    // it will return true as both have value 0
    // which should not be the case actually
    int color = 1;
    if (gender == color) cout << "Equal";
}
```

Enum Class
C++11 has introduced enum classes (also called scoped enumerations), that makes enumerations both strongly typed and strongly scoped. Class enum doesn’t allow implicit conversion to int, and also doesn’t compare enumerators from different enumerations.
To define enum class we use class keyword after enum keyword. 
Syntax: 
 
```cpp
// Declaration
enum class EnumName{ Value1, Value2, ... ValueN};

// Initialisation
EnumName ObjectName = EnumName::Value;
 

// Example: 
// Declaration
enum class Color{ Red, Green, Blue};

// Initialisation
Color col = Color::Red;
```




## ==⚡ magic_enum (since C++17)
- https://gitcode.net/mirrors/Neargye/magic_enum

Magic Enum header-only library provides static reflection for enums (to string, from string, iteration) for C++17.

利用 C++17 提供的静态反射能力实现枚举与字符串的转化。

```js
// Enum value to string
Color color = Color::RED;
auto color_name = magic_enum::enum_name(color);
// color_name -> "RED"


// String to enum value
std::string color_name{"GREEN"};
auto color = magic_enum::enum_cast<Color>(color_name);
if (color.has_value()) {
  // color.value() -> Color::GREEN
}


// Integer to enum value
int color_integer = 2;
auto color = magic_enum::enum_cast<Color>(color_integer);
if (color.has_value()) {
  // color.value() -> Color::RED
}


// Indexed access to enum value
std::size_t i = 1;
Color color = magic_enum::enum_value<Color>(i);
// color -> Color::BLUE


// Enum value sequence
constexpr auto colors = magic_enum::enum_values<Color>();
// colors -> {Color::RED, Color::BLUE, Color::GREEN}
// colors[0] -> Color::RED


// Number of enum elements
constexpr std::size_t color_count = magic_enum::enum_count<Color>();
// color_count -> 3


// Enum value to integer
Color color = Color::RED;
auto color_integer = magic_enum::enum_integer(color);
// color -> 2
```

## ==⚡ for-each (since C++17)
https://en.cppreference.com/w/cpp/algorithm/for_each

```cpp
#include <vector>
#include <algorithm>
#include <iostream>
 
struct Sum
{
    Sum(): sum{0} { }
    void operator()(int n) { sum += n; }
    int sum;
};
 
int main()
{
    std::vector<int> nums{3, 4, 2, 8, 15, 267};
 
    auto print = [](const int& n) { std::cout << " " << n; };
 
    std::cout << "before:";
    std::for_each(nums.begin(), nums.end(), print);
    std::cout << '\n';
 
    std::for_each(nums.begin(), nums.end(), [](int &n){ n++; });
 
    // calls Sum::operator() for each number
    Sum s = std::for_each(nums.begin(), nums.end(), Sum());
 
    std::cout << "after: ";
    std::for_each(nums.begin(), nums.end(), print);
    std::cout << '\n';
    std::cout << "sum: " << s.sum << '\n';
}
```

## ==⚡ std::variant (since C++17)

The class template *std::variant* represents a type-safe *union*. An instance of *std::variant* at any given time either holds a value of one of its alternative types, or in the case of error - no value (this state is hard to achieve, see valueless_by_exception).

As with unions, if a *variant* holds a value of some object type T, the object representation of T is allocated directly within the object representation of the *variant* itself. *Variant* is not allowed to allocate additional (dynamic) memory.

A *variant* is not permitted to hold references, arrays, or the type void. Empty variants are also ill-formed (`std::variant<std::monostate>` can be used instead).

A *variant* is permitted to hold the same type more than once, and to hold differently cv-qualified versions of the same type.

Consistent with the behavior of unions during aggregate initialization, a default-constructed *variant* holds a value of its first alternative, unless that alternative is not default-constructible (in which case the *variant* is not default-constructible either). The helper class *std::monostate* can be used to make such variants default-constructible.

```C++
#include <variant>
#include <string>
#include <cassert>
 
int main()
{
    std::variant<int, float> v, w;
    v = 12; // v contains int
    int i = std::get<int>(v);
    w = std::get<int>(v);
    w = std::get<0>(v); // same effect as the previous line
    w = v; // same effect as the previous line
 
//  std::get<double>(v); // error: no double in [int, float]
//  std::get<3>(v);      // error: valid index values are 0 and 1
 
    try {
      std::get<float>(w); // w contains int, not float: will throw
    }
    catch (const std::bad_variant_access&) {}
 
    using namespace std::literals;
 
    std::variant<std::string> x("abc");
    // converting constructors work when unambiguous
    x = "def"; // converting assignment also works when unambiguous
 
    std::variant<std::string, void const*> y("abc");
    // casts to void const * when passed a char const *
    assert(std::holds_alternative<void const*>(y)); // succeeds
    y = "xyz"s;
    assert(std::holds_alternative<std::string>(y)); // succeeds
}
```


## ==⚡ std::tuple (since C++11)

元组，多类开组合的类型，也是一种数据结构，可以当作结构体一样看待。这是非常时髦的类型，Python 使用非常广泛。

虽然 C++11 已经引入元组，但是直到 C++17 才支持元组的列表初始化表达：

```C++
std::tuple<int, int> foo_tuple() 
{
  return {1.0, -1};  // Error until C++17
  return std::make_tuple(1.0, -1); // Always works
}
```

在函数中利用元组来返回多值是常规用法，使用 *std::tie()* 对元组进行解构，或者使用 *std::get()* 获取元组中的数据，C++17 支持结构化绑定：

```C++
#include <tuple>
#include <iostream>
#include <string>
#include <stdexcept>
 
std::tuple<double, char, std::string> get_student(int id)
{
    if (id == 0) return std::make_tuple(3.8, 'A', "Lisa Simpson");
    if (id == 1) return std::make_tuple(2.9, 'C', "Milhouse Van Houten");
    if (id == 2) return std::make_tuple(1.7, 'D', "Ralph Wiggum");
    throw std::invalid_argument("id");
}
 
int main()
{
    auto student0 = get_student(0);
    std::cout << "ID: 0, "
              << "GPA: " << std::get<0>(student0) << ", "
              << "grade: " << std::get<1>(student0) << ", "
              << "name: " << std::get<2>(student0) << '\n';
 
    double gpa1;
    char grade1;
    std::string name1;
    std::tie(gpa1, grade1, name1) = get_student(1);
    std::cout << "ID: 1, "
              << "GPA: " << gpa1 << ", "
              << "grade: " << grade1 << ", "
              << "name: " << name1 << '\n';
 
    // C++17 structured binding:
    auto [ gpa2, grade2, name2 ] = get_student(2);
    std::cout << "ID: 2, "
              << "GPA: " << gpa2 << ", "
              << "grade: " << grade2 << ", "
              << "name: " << name2 << '\n';
}
```

Output:

    ID: 0, GPA: 3.8, grade: A, name: Lisa Simpson
    ID: 1, GPA: 2.9, grade: C, name: Milhouse Van Houten
    ID: 2, GPA: 1.7, grade: D, name: Ralph Wiggum




## ==⚡ std::any (since C++17)

The class *any* describes a type-safe container for single values of any type.

1) An object of class any stores an instance of any type that satisfies the constructor requirements or is empty, and this is referred to as the state of the class any object. The stored instance is called the contained object. Two states are equivalent if they are either both empty or if both are not empty and if the contained objects are equivalent.
2) The non-member any_cast functions provide type-safe access to the contained object.

```C++
#include <any>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    // any type
    std::any a = 1;
    std::cout << a.type().name() << ": " << std::any_cast<int>(a) << '\n';
    a = 3.14;
    std::cout << a.type().name() << ": " << std::any_cast<double>(a) << '\n';
    a = true;
    std::cout << a.type().name() << ": " << std::any_cast<bool>(a) << '\n';
 
    // bad cast
    try
    {
        a = 1;
        std::cout << std::any_cast<float>(a) << '\n';
    }
    catch (const std::bad_any_cast& e)
    {
        std::cout << e.what() << '\n';
    }
 
    // has value
    a = 1;
    if (a.has_value())
    {
        std::cout << a.type().name() << '\n';
    }
 
    // reset
    a.reset();
    if (!a.has_value())
    {
        std::cout << "no value\n";
    }
 
    // pointer to contained data
    a = 1;
    int* i = std::any_cast<int>(&a);
    std::cout << *i << "\n";
}
```

Possible output:

    i: 1
    d: 3.14
    b: true
    bad any_cast
    i
    no value
    1


## ==⚡ std::optional (since C++17)
- https://sodocumentation.net/cplusplus/topic/2423/std--optional

optional 用来管理一个可选值，可用于检测是否有对其进行赋值操作。

The optional object contains a value in the following conditions:

- The object is initialized with/assigned from a value of type *T* or another *optional* that contains a value.

The object does not contain a value in the following conditions:

- The object is default-initialized.
- The object is initialized with/assigned from a value of type *std::nullopt_t* or an *optional* object that does not contain a value.
- The member function *reset()* is called.

```C++
#include <optional>
// ...

std::optional<uint32_t> graphicsFamily;
std::cout << std::boolalpha << graphicsFamily.has_value() << std::endl; // false

graphicsFamily = 0;
std::cout << std::boolalpha << graphicsFamily.has_value() << std::endl; // true
```

在 C++17 之前，使用 nullptr 来表示未设置的指针，现在可以使用 optional 来替代这种用法：

```C++
#include <iostream>
#include <optional>
#include <string>

struct Animal {
    std::string name;
};

struct Person {
    std::string name;
    std::optional<Animal> pet;
};

int main() {
    Person person;
    person.name = "John";

    if (person.pet) {
        std::cout << person.name << "'s pet's name is " <<
            person.pet->name << std::endl;
    }
    else {
        std::cout << person.name << " is alone." << std::endl;
    }
}
```


## ==⚡ decltype - Type Inference 类型推导
- https://en.cppreference.com/w/cpp/language/decltype

decltype specifier

```cpp
decltype ( entity )     (1) (since C++11)
decltype ( expression ) (2) (since C++11)
decltype(auto) variable initializer (4) (since C++14) 
decltype(auto) function (5) (since C++14) 
```

从表达式或实体中获取类型：

```cpp
#include <type_traits>
 
struct A { double x; };
const A* a;
 
decltype(a->x) y;       // type of y is double (declared type)
decltype((a->x)) z = y; // type of z is const double& (lvalue expression)
 
template<typename T, typename U>
auto add(T t, U u) -> decltype(t + u) // return type depends on template parameters
                                      // return type can be deduced since C++14
{
    return t + u;
}
```


# =🚩 malloc/free 动态内存管理
- [一个跨平台的 C++ 内存泄漏检测器](https://www.ibm.com/developerworks/cn/linux/l-mleak2/index.html)
- C++ 内存管理 侯捷 https://www.bilibili.com/video/BV1b4411977J
- Memory management: Algorithms and implementation in C/C++ Bill Blunden https://book4you.org/book/459114/5840d1
- A Memory Allocator by Doug Lea http://gee.cs.oswego.edu/dl/html/malloc.html

头文件 `<stdlib.h>` 定义 C-style Dynamic Memory Allocation：   

    void *malloc( size_t size );
    void *realloc( void *ptr, size_t size );
    void *calloc( size_t num, size_t size );
    void free( void* ptr );

- malloc()

    运行时动态分配指定大小的内存，并返回了指向这块内存的指针。如果分配失败，例如内存不足，则返回一个空指针 NULL。

    动态分配的内存从堆里面获得，也就是说函数返回的指针是指向堆里面的一块内存。操作系统中有一个记录空闲内存地址的链表，当操作系统收到程序的申请时，就会遍历该链表，然后就寻找第一个空间大于所申请空间的堆结点，然后就将该结点从空闲结点链表中删除，并将该结点的空间分配给程序。

    堆内存 Heap 在操作系统对进程 初始化的时候分配，运行过程中也可以向系统要额外的堆，但是记得用完了要还给操作系统，要不然就是内存泄漏。

    栈内存 Stack 是由编译器自动分配释放，在调用函数时，存放函数的参数值、局部变量的值等。

    通过 `malloc()` 函数得到的堆内存，一般使用 `memset()` 函数来初始化。

- aligned_alloc() - (since C11)

    在一个特定的对齐边界分配内存。

- calloc() 

    分配 num 个 size 大小的连续的空间，并且初始化内存为 zero。如果成功分配，返回内存的最低位地址。 如果 size 为 0，根据实现有不同表现，但是不应用这样使用。

- realloc()

    为原来分配的动态内存重新分配一块内存，如果成功会拷贝原内存到新地址，并释放原有内存，返回新内存地址。但还有可能可以从原地址中扩展或收缩，原内存保持不变，新扩充内存未初始化。请不要直接将返回值赋值给原内存指针，因为在分配失败时，它返回 NULL 指针。

- free()

    收回 malloc(), calloc(), aligned_alloc, realloc() 分配的动态内存，释放的是内存而不是指针。

    如果 ptr 是 null 指针，什么也不做，不可以释放非 malloc(), calloc(), realloc(), aligned_alloc() 分配的地址，行为未知。

    不可以重复释放同一内存，包括 free() 或 realloc() 释放过的内存，行为行为未知。

    不可通过 ptr 指针访问已经释放的内存，行为未知。


C 语言没有 new，C++ 引入 new 后可以动态分配内存，结合 delete 收回已分配的内存。

在动态内存管理中，如果 new 没有相应的 delete，就会有内存泄露的问题。有时候，代码中 new 和 delete 配对了，还会出现问题。例如，在 new 和 delete 之间异常导致没有执行 delete。


使用 debug_new 可以对程序进行内存泄漏检测，只要把 debug_new.cpp 编译、链接进去就可以了：

    g++ test.cpp debug_new.cpp -o test

如果我们需要更清晰的报告，也很简单，在 test.cpp 开头加一行：

    #include "debug_new.h"

示例：

```cpp
#include <cstdlib>
#include <cstdio>
#include <thread>
#include <cstdbool>

#if defined(WIN32) || defined(WIN64)
    #include <windows.h>
    #define sleep(n) Sleep(1000 * (n))
#else
    #include <unistd.h>
#endif

int * test(bool leak)
{
    //char arr[0];                  // error: cannot define zero-length array
    char *cpa = new char[0];         // ok: but cp can't be dereferenced
    delete [] cpa;

    int* p1 = (int*)std::malloc(1000*1000*sizeof *p1);
    if (!leak) std::free(p1); // every allocated pointer must be freed
 
    int* p2 = (int*)std::calloc(10, sizeof *p2);
    int* p3 = (int*)std::realloc(p2, 1000*sizeof *p3);
    if(p3) // p3 not null means p2 was freed by std::realloc
       std::free(p3);
    else // p3 null means p2 was not freed
       std::free(p2);
    return p1;
}

int main(int argc, char *argv[])
{
    bool leak = argc > 1 && 0 == strcmp("-leak", argv[1]);
    for (int i = 0; i < 1000000; ++i)
    {
        int *p = test(leak);
        if (p==NULL)
        {
            printf("NULL return %d\n", p);
            break;
        } 
        printf("test %d\n", i);
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
        // sleep(1);
    }
    printf("DONE!");
}
```



# =🚩 Enumeration
- https://docs.microsoft.com/en-us/cpp/error-messages/compiler-errors-1/compiler-error-c2460?view=vs-2019

枚举类型，可以理解为一种带类型信息和名称的整形，每个枚举值都分配一个名称，每一组名称都归属于一个枚举类型，或匿名或以 typedef 显式命名：

    #include <cstdio>

    class Base
    {
    public:
        typedef enum {
            ABOUT = 1,
            CHILD = 3,
            POPUP,
            OVERLAPPE
        } Style;
        Base(Style);
    };

    Base::Base(Base::Style style)
    {
        printf("Base with style %d ...\n", style);
    }

    typedef enum __Style {Big, Small, Tiny } Style;

    int main()
    {
        printf("Style Small: %d\n", Small);
        printf("Enum POPUP: %d\n", Base::POPUP);

        Style v1 = Big;
        Base::Style v2 = Base::OVERLAPPE;
        printf("Variable v1[Style Big: %d\n", v1);
        printf("Variable v2[Base::OVERLAPPE]: %d\n", v2);
        Base b(Base::POPUP);

        // Style vr = 1; 
        // Style vr = Base::CHILD; 
        // error: cannot convert 'Base::<unnamed enum>' to 'Style' {aka '__Style'} in initialization

        return 0;
    }

Output:

    Style Small: 1
    Enum POPUP: 4
    Variable v1[Style Big: 0
    Variable v2[Base::OVERLAPPE]: 5
    Base with style 4 ...

以上代码 GCC 通过，MSVC 报错 C2460，因为类中使用了类定义的数据：

    // C2460.cpp
    class C {
       C aC;    // C2460
    };

改为指定引用通过：

    // C2460.cpp
    class C {
       C * aC;    // OK
    };


# =🚩 nearbyint
- https://bobjin.com/blog/c_cpp_docs/reference/en/c/numeric/math/nearbyint.html

示例：

    #include <stdio.h>
    #include <math.h>
    #include <fenv.h>
     
    int main(void)
    {
    #pragma STDC FENV_ACCESS ON
        fesetround(FE_TONEAREST);
        printf("rounding to nearest:\nnearbyint(+2.3) = %+.1f  ", nearbyint(2.3));
        printf("nearbyint(+2.5) = %+.1f  ", nearbyint(2.5));
        printf("nearbyint(+3.5) = %+.1f\n", nearbyint(3.5));
        printf("nearbyint(-2.3) = %+.1f  ", nearbyint(-2.3));
        printf("nearbyint(-2.5) = %+.1f  ", nearbyint(-2.5));
        printf("nearbyint(-3.5) = %+.1f\n", nearbyint(-3.5));
     
        fesetround(FE_DOWNWARD);
        printf("rounding down: \nnearbyint(+2.3) = %+.1f  ", nearbyint(2.3));
        printf("nearbyint(+2.5) = %+.1f  ", nearbyint(2.5));
        printf("nearbyint(+3.5) = %+.1f\n", nearbyint(3.5));
        printf("nearbyint(-2.3) = %+.1f  ", nearbyint(-2.3));
        printf("nearbyint(-2.5) = %+.1f  ", nearbyint(-2.5));
        printf("nearbyint(-3.5) = %+.1f\n", nearbyint(-3.5));
     
        printf("nearbyint(-0.0) = %+.1f\n", nearbyint(-0.0));
        printf("nearbyint(-Inf) = %+.1f\n", nearbyint(-INFINITY));
    }

Output:

    rounding to nearest:
    nearbyint(+2.3) = +2.0  nearbyint(+2.5) = +2.0  nearbyint(+3.5) = +4.0
    nearbyint(-2.3) = -2.0  nearbyint(-2.5) = -2.0  nearbyint(-3.5) = -4.0
    rounding down: 
    nearbyint(+2.3) = +2.0  nearbyint(+2.5) = +2.0  nearbyint(+3.5) = +3.0
    nearbyint(-2.3) = -3.0  nearbyint(-2.5) = -3.0  nearbyint(-3.5) = -4.0
    nearbyint(-0.0) = -0.0
    nearbyint(-Inf) = -inf

References

    C11 standard (ISO/IEC 9899:2011):
        7.12.9.3 The nearbyint functions (p: 251-252)
        7.25 Type-generic math <tgmath.h> (p: 373-375)
        F.10.6.3 The nearbyint functions (p: 526)
    C99 standard (ISO/IEC 9899:1999):
        7.12.9.3 The nearbyint functions (p: 232)
        7.22 Type-generic math <tgmath.h> (p: 335-337)
        F.9.6.3 The nearbyint functions (p: 463)



# =🚩 array 数组

C 中的数组定义方式：

    // a and b have the same const-qualified type "array of 5 const char"
    typedef const char CC;
    CC a[5] = {}; 
    typedef char CA[5];
    const CA b = {};

    int* p = new int[0]; // accessing p[0] or *p is undefined
    delete[] p; // cleanup still required

    int a[3] = {1, 2, 3}, b[3] = {4, 5, 6};
    int (*p)[3] = &a; // okay: address of a can be taken
    a = b;            // error: a is an array
    struct { int c[3]; } s1, s2 = {3, 4, 5};
    s1 = s2; // okay: implicity-defined copy assignment operator
             // can assign data members of array type

    // array of 2 arrays of 3 int each
    int a[2][3] = {{1, 2, 3},  // can be viewed as a 2 × 3 matrix
                   {4, 5, 6}}; // with row-major layout

    int a[2];            // array of 2 int
    int* p1 = a;         // a decays to a pointer to the first element of a
     
    int b[2][3];         // array of 2 arrays of 3 int
    // int** p2 = b;     // error: b does not decay to int**
    int (*p2)[3] = b;    // b decays to a pointer to the first 3-element row of b
     
    int c[2][3][4];      // array of 2 arrays of 3 arrays of 4 int
    // int*** p3 = c;    // error: c does not decay to int***
    int (*p3)[3][4] = c; // c decays to a pointer to the first 3 × 4-element plane of c

    extern int x[];      // the type of x is "array of unknown bound of int"
    int a[] = {1, 2, 3}; // the type of a is "array of 3 int"

    extern int a[][2]; // okay: array of unknown bound of arrays of 2 int
    extern int b[2][]; // error: array has incomplete element type

    extern int a1[];
    int (&r1)[] = a1;  // okay
    int (*p1)[] = &a1; // okay
    int (*q)[2] = &a1; // error (but okay in C)
     
    int a2[] = {1, 2, 3};
    int (&r2)[] = a2;  // error
    int (*p2)[] = &a2; // error (but okay in C)



C 中的数组初始化方式：

    // NULL-terminated string
    char str[] = "abc";      // str has type char[4] and holds 'a', 'b'. 'c', '\0'

    char str[3] = "abc";     // str has type char[3] and holds 'a', 'b', 'c'
    wchar_t wstr[4] = L"猫"; // str has type wchar_t[4] and holds L'猫', '\0', '\0', '\0'

    int x[] = {1,2,3};  // x has type int[3] and holds 1,2,3
    int y[5] = {1,2,3}; // y has type int[5] and holds 1,2,3,0,0
    int z[3] = {0};     // z has type int[3] and holds all zeroes

    int y[4][3] = { // array of 4 arrays of 3 ints each (4x3 matrix)
        { 1 },      // row 0 initialized to {1, 0, 0}
        { 0, 1 },   // row 1 initialized to {0, 1, 0}
        { [2]=1 },  // row 2 initialized to {0, 0, 1}
    };              // row 3 initialized to {0, 0, 0}

    int y[4][3] = {    // array of 4 arrays of 3 ints each (4x3 matrix)
    1, 3, 5, 2, 4, 6, 3, 5, 7 // row 0 initialized to {1, 3, 5}
    };                        // row 1 initialized to {2, 4, 6}
                              // row 2 initialized to {3, 5, 7}
                              // row 3 initialized to {0, 0, 0}
     
    struct { int a[3], b; } w[] = { { 1 }, 2 }; // array of structs
       // { 1 } is taken to be a fully-braced initializer for element #0 of the array
       // that element is initialized to { {1, 0, 0}, 0}
       // 2 is taken to be the first initialized for element #1 of the array
       // that element is initialized { {2, 0, 0}, 0}

    int a[3] = {0}; // valid C and C++ way to zero-out a block-scope array
    int a[3] = {};  // invalid C but valid C++ way to zero-out a block-scope array

Example

    int main(void)
    {
        // The following four array declarations are the same
        short q1[4][3][2] = {
            { 1 },
            { 2, 3 },
            { 4, 5, 6 }
        };
     
        short q2[4][3][2] = {1, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 4, 5, 6};
     
        short q3[4][3][2] = {
            {
                { 1 },
            },
            {
                { 2, 3 },
            },
            {
                { 4, 5 },
                { 6 },
            }
        };
     
        short q4[4][3][2] = {1, [1]=2, 3, [2]=4, 5, 6};
     
     
        // Character names can be associated with enumeration constants
        // using arrays with designators:
        enum { RED, GREEN, BLUE };
        const char *nm[] = {
            [RED] = "red",
            [GREEN] = "green",
            [BLUE] = "blue",
        };
    }

C++ 支持数组数据结构类型，它可以存储一个固定大小的相同类型元素的顺序集合。数组是用来存储一系列数据，但它往往被认为是一系列相同类型的变量。

示例：

    #include <string>
    #include <iterator>
    #include <iostream>
    #include <algorithm>
    #include <array>
     
    int main()
    {
        // construction uses aggregate initialization
        std::array<int, 3> a1{ {1, 2, 3} }; // double-braces required in C++11 (not in C++14)
        std::array<int, 3> a2 = {1, 2, 3};  // never required after =
        std::array<std::string, 2> a3 = { std::string("a"), "b" };
     
        // container operations are supported
        std::sort(a1.begin(), a1.end());
        std::reverse_copy(a2.begin(), a2.end(), 
                          std::ostream_iterator<int>(std::cout, " "));
     
        std::cout << '\n';
     
        // ranged for loop is supported
        for(const auto& s: a3)
            std::cout << s << ' ';
    }

Member types

| Member    | type Definition  |
| :------   | :------   |
| value_type| T  |
| size_type | std::size_t  |
| difference_type   | std::ptrdiff_t  |
| reference | value_type&  |
| const_reference   | const value_type&  |
| pointer   | value_type*  |
| const_pointer | const value_type*  |
| iterator  | RandomAccessIterator and LiteralType (since C++17)  |
| const_iterator    | Constant random access iterator and LiteralType (since C++17)  |
| reverse_iterator  | std::reverse_iterator<iterator>  |
| const_reverse_iterator    | std::reverse_iterator<const_iterator>  |


Member functions 

Element access 

- `at` access specified element with bounds checking
- `operator[]` access specified element
- `front` access the first element
- `back` access the last element
- `data` direct access to the underlying array

Iterators 

- `begin` `cbegin` returns an iterator to the beginning
- `end` `cend` returns an iterator to the end
- `rbegin` `crbegin` returns a reverse iterator to the beginning
- `rend` `crend` returns a reverse iterator to the end

Capacity 

- `empty` checks whether the container is empty
- `size` returns the number of elements
- `max_size` returns the maximum possible number of elements

Operations 

- `fill` fill the container with specified value
- `swap` swaps the contents



# =🚩 Reference vs Pointer

C++ 使用引用变量的概念，和指针的可以运算不同，引用可以在保证安全地修改引用变量所指向的对象。

引用不能为空引用吗？

```cpp
int *np = nullptr;
int &nr = *np;
// if (&nr) 
cout << nr << endl; // Error: access null reference!
```

显然可以有空引用，并且它会和空指针一样导致程序崩溃。当然，可以判断引用是否为空，显然这种表达对于 C++ 来说确实很奇怪。

忠告就是引用不能为空，如果可能存在空对象时，请使用指针。

MSVC 编译器可能会增加了容错性，而 GCC 在处理引用时减少判断，增加性能，体现出两种不同的开发理念。所以，遇到空引用时会有什么不良后果，需要看是那个编译器在干活。

引用是变量的一个别名，这有点抽象。在一个函数中使用引用作为参数，那么调用函数时，传入的变量将会以引用的方式传入函数，即函数内可以直接访问传入变量的原始地址的值。而引用作为变量的别名，只是共用变量的原始地址。

如果函数的参数列表中定义的是变量，那么传入参数时，被传入的变量将会复制副本交给函数进行处理。从这一点来说，传递指针和传递变量的方式本质是一样的，就是将被传入的那个量复制一份交给函数处理。而指针之所以依然可以函数内部操作变量的原始值，是因复制的指针其所指向的地址还是原始变量。而如果是复制的变量，虽然值还是原始值，但地址已经不是原始地址。

```cpp
#include <iostream>
using namespace std;
void swap(int& x, int& y) throw()
{
  int temp = x;
  x = y;
  y = temp;
}
int main()
{
  int i = 5;
  int j = 7;
  cout << "before: i=" << i << ", j=" << j << '\n';
  swap(i, j);
  cout << "after:  i=" << i << ", j=" << j << '\n';
}
```

语法：

    & attr(optional) declarator (1)  
    && attr(optional) declarator (2) (since C++11) 
 
1) Lvalue 左值引用定义，如 `S& D;` 定义 D 为左值引用 S 类型；
2) Rvalue 右值引用定义，如 `S&& D;` 定义 D 为右值引用 S 类型；

右值引用 Rvalue Referene 是 C++11 新标准引入的新特性, 它实现了移动语义 Move Sementics 和完美转发 Perfect Forwarding。

它的主要目的有两个方面：

1. 消除两个对象交互时不必要的对象拷贝，节省运算存储资源，提高效率。
2. 能够更简洁明确地定义泛型函数。

C/C++ 中所有的表达式和变量要么是左值，要么是右值。通俗的左值的定义就是非临时对象，可以在多条语句中使用的对象。 所有的变量都满足这个定义，在多条代码中都可以使用，都是左值。 右值是指临时的对象，它们只在当前的语句中有效。

    int i = 0; // ok, i 是左值，0 是临时变量，就是右值

在 C++11 之前，右值是不能引的，如

    int &a = 1; // error, 非常量的引用必须为左值
    const int &a = 1; // 只能用常量引用来绑定一个右值

在 C++11 引用右值，使用 && 实现：

    int &&a = 1;

其它示例：

```cpp
typedef int&  lref;
typedef int&& rref;
int n;
lref&  r1 = n; // type of r1 is int&
lref&& r2 = n; // type of r2 is int&
rref&  r3 = n; // type of r3 is int&
rref&& r4 = 1; // type of r4 is int&&

double d = 2.0;
double& rd = d;        // rd refers to d
const double& rcd = d; // rcd refers to d
struct A {};
struct B : A {} b;
A& ra = b;             // ra refers to A subobject in b
const A& rca = b;      // rca refers to A subobject in b

struct A { };
struct B : A { operator int&(); } b;
int& ir = B();         // ir refers to the result of B::operator int&

struct A { };
struct B : A { } b;
extern B f();
const A& rca2 = f(); // bound to the A subobject of the B rvalue.
A&& rra = f();       // same as above
 
int i2 = 42;
int&& rri = static_cast<int&&>(i2); // bound directly to i2

struct A { };
struct B : A { };
struct X { operator B(); } x;
const A& r = x; // bound to the A subobject of the result of the conversion
B&& rrb = x;    // bound directly to the result of the conversion

const std::string& rs = "abc"; // rs refers to temporary copy-initialized from char array
const double& rcd2 = 2;        // rcd2 refers to temporary with value 2.0
int i3 = 2;
double&& rrd3 = i3;            // rrd3 refers to temporary with value 2.0
```


示例：

```cpp
#include <utility>
#include <sstream>
struct S {
    int mi;
    const std::pair<int,int>& mp; // reference member
};
 
void foo(int) {}
 
struct A {};
struct B : A {
    int n;
    operator int&() { return n; };
};
 
B bar() {return B(); }
 
//int& bad_r; // error: no initializer
extern int& ext_r; // OK
 
int main()
{
     // lvalues
    int n = 1;
    int& r1 = n;  // lvalue reference to the object n
    const int& cr(n); // reference can be more cv-qualified
    volatile int& cv{n}; // any initializer syntax can be used
    int& r2 = r1; // another lvalue reference to the object n
    // int& bad = cr; // error: less cv-qualified
    int& r3 = const_cast<int&>(cr); // const_cast is needed

    void (&rf)(int) = foo; // lvalue reference to function
    int ar[3];
    int (&ra)[3] = ar; // lvalue reference to array

    B b;
    A& base_ref = b; // reference to base subobject
    int& converted_ref = b; // reference to the result of a conversion

    // rvalues
    //  int& bad = 1; // error: cannot bind lvalue ref to rvalue
    const int& cref = 1; // bound to rvalue
    int&& rref = 1; // bound to rvalue

    const A& cref2 = bar(); // reference to A subobject of B temporary
    A&& rref2 = bar();      // same

    int&& xref = static_cast<int&&>(n); // bind directly to n
    //  int&& copy_ref = n; // error: can't bind to an lvalue
    double&& copy_ref = n; // bind to an rvalue temporary with value 1.0

    // restrictions on temporary lifetimes
    std::ostream& buf_ref = std::ostringstream() << 'a'; // the ostringstream temporary
                      // was bound to the left operand of operator<<, but its lifetime
                      // ended at the semicolon: buf_ref is now a dangling reference.

    S a { 1, {2,3} }; // temporary pair {2,3} bound to the reference member
                      // a.mp and its lifetime is extended to match a
                      // (Note: does not compile in C++17)
    S* p = new S{ 1, {2,3} }; // temporary pair {2,3} bound to the reference
                      // member p->mp, but its lifetime ended at the semicolon
                      //  p->mp is a dangling reference
    delete p;
}
```



# =🚩 type casting 类型转换
- https://en.cppreference.com/w/cpp/language/reinterpret_cast

类型转换

- 隐式转换（implicit conversion）

        short a=2000;
        int b;
        b=a;

    没有精度丢失，无损转换可以由编译器进行隐式转换，没有 warning，如宽化转换 char -> int，int -> long long，int -> float，float -> double，int -> double 等，编译器允许直接转换。

- C 风格显式转换（C style explicit conversion）
 
    不能进行隐式转换又没有进行显式转换，就会发生 waring，C 风格转换与函数风格转换：

        double a=2000.3;
        short b;
        b = (short) a;    // c-like cast notation
        b = short (a);    // functional notation 

在继承链进行转换有两个方向，上行转换（up-casting）与下行转换（down-casting）。

转换的不安全来源于两个方面：

- 其一是类型的窄化转化，会导致数据位数的丢失；
- 其二是在类继承链中，将父类对象的地址（指针）强制转化成子类的地址（指针），这就是所谓的下行转换。

下行表示沿着继承链向下走，向子类的方向走。类似地，上行转换的表示沿继承链向上走，向父类的方向走。一般结论，上行转换一般是安全的，下行转换很可能是不安全的。

针对类指针的问题，C++ 特别设计了更加细致的转换方法，分别有：

    static_cast <new_type>( expression )
    dynamic_cast <new_type>( expression )
    reinterpret_cast <new_type>( expression )
    const_cast <new_type>( expression )

静态转换是最接近于 C 风格转换，很多时候都需要程序员自身去判断转换是否安全。比如：

    double pi = 3.14159265;
    int i = static_cast<int>(pi);

动态转换确保类指针的转换是合适完整的，它有两个重要的约束条件，其一是要求 new_type 为指针或引用，其二是下行转换时要求基类是多态的，即基类中包含至少一个虚函数。

    #include <iostream>
    using namespace std;

    class CBase { };
    class CDerived: public CBase { };

    int main()
    {
       CBase b; CBase* pb;
       CDerived d; 
       CDerived* pd;

       pb = dynamic_cast<CBase*>(&d);     // ok: derived-to-base
       pd = dynamic_cast<CDerived*>(&b);  // wrong: base-to-derived
       // error: cannot dynamic_cast (source type is not polymorphic)
    }

如果，将基类改为：

    class CBase { virtual void dummy() {} };

可以看到编译器将父类经过 dynamic_cast 转成子类的指针设置为空指针，这正是 dynamic_cast 提升安全性的功能，dynamic_cast 可以识别出不安全的下行转换，但并不抛出异常，而是将转换的结果设置成 null（空指针）。

补充一个特殊情况，当待转换指针是 void * 或者转换目标指针是 void * 时，dynamic_cast 总是认为是安全的：

    #include <iostream>
    using namespace std;
    class A {virtual void f(){}};
    class B {virtual void f(){}};

    int main() {
        A* pa = new A;
        B* pb = new B;
        void* pv = dynamic_cast<void*>(pa);
        cout << pv << endl;
        // pv now points to an object of type A

        pv = dynamic_cast<void*>(pb);
        cout << pv << endl;
        // pv now points to an object of type B
    }

可见 dynamic_cast 认为空指针的转换安全的，但这里 A 和 B 必须是多态的，包含虚函数，若不是，则会编译报错。


重解释转换是最“不安全”的，两个没有任何关系的类指针之间转换都可以用这个转换实现，举个例子：

    class A {};
    class B {};

    A * a = new A;
    B * b = reinterpret_cast<B*>(a); //correct!

更厉害的是，reinterpret_cast 可以把整型数转换成地址（指针），这种转换在系统底层的操作，有极强的平台依赖性，移植性不好。

    // int i = (int *)0x197ad0;
    int* x = reinterpret_cast<int*>(0x197ad0);

它同样要求 new_type 是指针或引用，下面的例子是通不过编译的：

    double a=2000.3;
    short b;
    b = reinterpret_cast<short> (a); //compile error!


常量向非常量转换：

    // const_cast
    #include <iostream>
    using namespace std;

    void print (char * str)
    {
      cout << str << endl;
    }

    int main () {
      const char * c = "sample text";
      char *cc = const_cast<char *> (c) ;
      print(cc);
      return 0;
    }

切记，这个转换并不转换原常量本身，即 c 还是常量，只是返回的结果 cc 是变量。


总结

- C 风格转换是“万能的转换”，但需要程序员把握转换的安全性，编译器无能为力；
- static_cast 最接近于 C 风格转换，但在无关类指针转换时，编译器会报错，提升了安全性；
- dynamic_cast 要求转换类型必须是指针或引用，且在下行转换时要求基类是多态的，如果发现下行转换不安全，dynamic_cast 返回一个 null 指针，dynamic_cast 总是认为 void * 之间的转换是安全的；
- reinterpret_cast 可以对无关类指针进行转换，甚至可以直接将整型值转成指针，这种转换是底层的，有较强的平台依赖性，可移植性差；
- const_cast 可以将常量转成非常量，但不会破坏原常量的 const 属性，只是返回一个去掉 const 的变量。



## ==⚡ Implicit Conversion 隐式转换

隐式转型是非常易容让人困惑的特性，以下代码演示了隐式转形是如何自动调用构造函数的：

```cpp
#include <iostream>
#include <string>

using namespace std;

// Declarations
class House;
class Grace
{
public:
    Grace(House);
    string name = "Grace";
};


// Implementations
class House 
{

};

Grace::Grace(House h)
{
    cout << "Grace(House)" << endl;
}

class Curious
{
public:
    void autoConstruct(Grace baby)
    {
        cout << "baby name: " << baby.name << "\n";
    }
};

int main(void)
{
    House h;
    Grace g(h);
    Curious test;
    test.autoConstruct(h);

    return EXIT_SUCCESS;
}
```

在执行 autoConstruct(h) 函数时，它收到一个 House 类型的参数，但是它声明接收 Grace，奇怪！

编译器也知道这些，但是它还掌握更多更完整的信息，知道 House 是 Grace 构造函数的参数，并且完全匹配参数列表，可以调用构造函数来构造出 aotoConstruct() 函数需要的参数类型。

当一个构造函数只有一个参数，而且该参数又不是本类的 const 引用时，这种构造函数称为转换构造函数 conversion constructor function。转换构造函数的作用是将一个其他类型的数据转换成一个类的对象｡




# =🚩 Regexp Expressions
- [详解KMP算法](https://www.cnblogs.com/yjiyjige/p/3263858.html)
- [字符串匹配算法之：有限状态自动机](https://blog.csdn.net/tyler_download/article/details/52549315)

头文件定义 `<regex>` 

    std::basic_regex< cpp‎ | regex

    template <
        class CharT,
        class Traits = std::regex_traits<CharT>
    > class basic_regex;  (since C++11) 

基本类型：

|     Type    |                Definition                |
|-------------|------------------------------------------|
| regex       | basic_regex<char>                        |
| wregex      | basic_regex<wchar_t>                     |
| Member      | typesMember type Definition              |
| value_type  | CharT                                    |
| traits_type | Traits                                   |
| string_type | Traits::string_type                      |
| locale_type | Traits::locale_type                      |
| flag_type   | std::regex_constants::syntax_option_type |

常量：

| Constants  |                                 Value Effect(s)                                 |
|------------|---------------------------------------------------------------------------------|
| icase      | 不分大小写                                                                      |
| nosubs     | 子表达式作为 (?:expr)，不提供匹配项存储 std::regex_match 或 mark_count() 返回 0 |
| optimize   | 优化更快匹配，构建会更久，比如会转换不确定的 FSA 为确定的                       |
| collate    | 字符范围 [a-b] 区分本地化                                                       |
| multiline  | (C++17) 使用 ECMAScript 的行开头 ^ 和行结尾 $                                   |
| ECMAScript | 使用 ECMAScript 正则                                                            |
| basic      | 使用 POSIX 正则                                                                 |
| extended   | 使用 POSIX 正则                                                                 |
| awk        | 使用 awk 工具的正则                                                             |
| grep       | 使用 grep 工具的正则，和 basic 一样提供 '\n' 作为备选                           |
| egrep      | 使用 grep 工具的正则，带 -E 选项，和 basic 一样提供 '\n' 作为备选               |

FSA - Finite State Automata 有限状态自动机字符串匹配。

正则规则可选 ECMAScript, basic, extended, awk, grep, egrep，默认 ECMAScript，以下是等价的：

    std::regex("meow", std::regex::icase)
    std::regex("meow", std::regex::ECMAScript|std::regex::icase)

示例：

    #include <iostream>
    #include <iterator>
    #include <string>
    #include <regex>
     
    int main()
    {
        std::string s = "Some people, when confronted with a problem, think "
            "\"I know, I'll use regular expressions.\" "
            "Now they have two problems.";

        std::string UP = "REGULAR EXPRESSIONS";
        std::regex self_regex(UP.c_str(),
            std::regex_constants::ECMAScript | std::regex_constants::icase);

        if (std::regex_search(s, self_regex))
        {
            std::cout << UP << " Found!" << std::endl;
        }

        std::regex word_regex ("(\\S+)");
        auto words_begin = std::sregex_iterator(s.begin(), s.end(), word_regex);
        auto words_end = std::sregex_iterator();

        std::cout << "Found "
                  << std::distance(words_begin, words_end)
                  << " words\n";

        const int N = 6;
        std::cout << "Words longer than " << N << " characters:\n";
        for (std::sregex_iterator i = words_begin; i != words_end; ++i)
        {
            std::smatch match = *i;
            std::string match_str = match.str();
            if (match_str.size() > N)
            {
                std::cout << " --> " << match_str << std::endl;
            }
        }

        std::regex long_word_regex("(\\w{7,})");
        std::string new_s = std::regex_replace(s, long_word_regex, "[$&]");
        std::cout << new_s << '\n';
     }

     /*
     >regex.cpp.exe
     REGULAR EXPRESSIONS Found!
     Found 19 words
     Words longer than 6 characters:
      --> people,
      --> confronted
      --> problem,
      --> regular
      --> expressions."
      --> problems.
     Some people, when [confronted] with a [problem], think "I know, I'll use [regular] [expressions]."...
     */


# =🚩 Embedding a File in an Exe
- https://www.linuxjournal.com/content/embedding-file-executable-aka-hello-world-version-5967

Embedding a File in an Executable, aka Hello World, Version 5967

Let's say we have a file name data.txt that we want to embed in our executable:

    # cat data.txt
    Hello world

To convert this into an object file that we can link with our program we just use objcopy to produce a ".o" file:

    # objcopy --input binary \
              --output elf32-i386 \
              --binary-architecture i386 data.txt data.o

This tells objcopy that our input file is in the "binary" format, that our output file should be in the "elf32-i386" format (object files on the x86). The --binary-architecture option tells objcopy that the output file is meant to "run" on an x86. This is needed so that ld will accept the file for linking with other files for the x86. One would think that specifying the output format as "elf32-i386" would imply this, but it does not.

Now that we have an object file we only need to include it when we run the linker:

    # gcc main.c data.o

When we run the result we get the prayed for output:

    # ./a.out
    Hello world

Of course, I haven't told the whole story yet, nor shown you main.c. When objcopy does the above conversion it adds some "linker" symbols to the converted object file:

    _binary_data_txt_start
    _binary_data_txt_end

After linking, these symbols specify the start and end of the embedded file. The symbol names are formed by prepending `_binary_` and appending `_start` or `_end` to the file name. If the file name contains any characters that would be invalid in a symbol name they are converted to underscores (eg *data.txt* becomes *data_txt*). If you get unresolved names when linking using these symbols, do a hexdump -C on the object file and look at the end of the dump for the names that objcopy chose.

The code to actually use the embedded file should now be reasonably obvious:

```cpp
#include <stdio.h>

extern char _binary_data_txt_start;
extern char _binary_data_txt_end;

main()
{
    char*  p = &_binary_data_txt_start;

    while ( p != &_binary_data_txt_end ) putchar(*p++);
}
```

One important and subtle thing to note is that the symbols added to the object file aren't "variables". They don't contain any data, rather, their address is their value. I declare them as type char because it's convenient for this example: the embedded data is character data. However, you could declare them as anything, as int if the data is an array of integers, or as struct foo_bar_t if the data were any array of foo bars. If the embedded data is not uniform, then char is probably the most convenient: take its address and cast the pointer to the proper type as you traverse the data.


# =🚩 include_next vs include

`#include_next` 是 GNU 的一个扩展，和 #include 指令一样用来包含一个头文件，它们的不同地方是包含的路径不一样。假设，有个 demo.h 头文件，在包含 include 目录列表中的多个目录都有一个，那么 include_next 就会引入目录列表靠后面的头文件。

还有一点是 `#include_next` 是不区分 `<>` 和 `""` 的包含形式的。

引人这条指令是为了解决升级引起多个头文件副本的问题，假如，你要创建一个新的头文件，而这个新的头文件和现在已有的头文件有相同的名字，而且你想用你的这个新的头文件，那么你要做的就是把这个新的头文件放在 #include 指令的搜索路径的前面，即是在旧的头文件的前面，新的头文件首先被搜索到，这样你就可以使用你这个新的头文件。

但是你在另一个源代码文件中想使用旧的头文件了，那怎么办！有个办法就是使用绝对路径来搜索，那么就不存在这样的问题了。问题出在，如果我们把头文件的位置移动了，移到了其它的目录里了，那我们就得在相应的源码文件中修改这个包含的绝对路径，如果一个源码文件还好，但如果是大型工程的话，修改的地方多了就容易出问题。

又进一步说，如果你这个新的头文件引用了旧的头文件，而这个新的头文件如果没有使用只编译一次的预处理语句包含即 #ifndef，#endif 等，那么就会陷入一个无限的递归包含中，这个新的头文件就会无限的包含自己，就会出现一个致命的错误。如果我们使用 #include_next 就会避免这样的问题。

在标准的 C 中，这没有一个办法来解决上面的问题的，因此 GNU 就引人了这个指令 #include_next。
 

下面再举一个#include_next的例子。

假设你用 -I 选项指定了一个编译包含的路径 

    -I /usr/local/include

这个路径下面有个 signal.h 的头文件，在系统的 '/usr/include' 下也有一个，我们知道 -I 选项的路径首先搜索。如果直接使用 include 就会包含进 /usr/local/include/signal.h 头文件，而使用 include_next 就可以包含 /usr/include/signal.h：

    #include <signal.h>
    #include_next <signal.h>

GNU 建议一般没有其它可取代的办法的情况下才使用 #include_next 的。



# =🚩 STL - Standard Template Library

STL - Standard Template Library 标准模板库，提供了通用的函数模板和类模板。

STL 有六大组件类型：

- 容器 Containers

    STL 容器是一种类模板 Class Template，主要分为`关联式容器` Associated containers 和`序列式容器` Sequence containers，存放各种数据结构，如 Vector，List，Deque，Set，Map。就体积而言，这一部分很像冰山载海面的比率。

- 算法 Algorithms

    各种常用算法，如Sort，Search，Copy，Erase。从实现的角度来看，STL 算法是一种函数模板 Function Templates。

- 迭代器 Iterators

    扮演容器与算法之间的胶合剂，是所谓的泛型指针，共有五种，以及其它衍生变化。从实现的角度来看，迭代器是一种将 `Operators*`, `Operator->`, `Operator++`, `Operator–` 等相关操作予以重载的 Class Template。所有 STL 容器都附带有自己专属的迭代器。是的，只有容器设计者才知道如何遍历自己的元素，原生指针 Native pointer 也是一种迭代器。

- 仿函数 Functors

    **行为类似函数，可作为算法的某种策略 Policy。**从实现的角度来看，仿函数是一种重载了 `Operator()` 的 Class 或 Class Template。一般函数指针可视为狭义的仿函数。

- 适配器 Adapters

    **一种用来修饰容器 Containers 或仿函数 Functors 或迭代器 Iterators 接口的东西，**例如：STL 提供的 Queue 和 Stack，虽然看似容器，其实只能算是一种容器配接器，因为它们的底部完全借助 Deque，所有操作由底层 Deque 供应。改变 Functor 接口者，称为 Function Adapter；改变 Container 接口者，称为 Container Adapter；改变 Iterator 接口者，称为 Iterator Adapter。配接器的实现技术很难一言蔽之，必须逐一分析。

- 分配器 Allocators

    负责空间配置与管理，从实现的角度来看，配置器是一个实现了动态空间配置、空间管理、空间释放的 Class Template。

C++ STL 中最基本以及最常用的类或容器 string、vector、set、list、map 等等。

顺序访问容器 Sequence containers 实现按顺序的访问容器元素，能快速插入新元素。

- `array` 模板类实现，(since C++11) static contiguous array
- `vector` 模板类实现，dynamic contiguous array
- `deque` 模板类实现，double-ended queue
- `forward_list` 模板类实现，(since C++11) singly-linked list
- `list` 模板类实现，doubly-linked list
 
关联容器 Associative containers 实现有序的数据结构，能实现快速查找，时间复杂度 (O(log n)。

- `set` collection of unique keys, sorted by keys
- `map` collection of key-value pairs, sorted by keys, keys are unique
- `multiset` collection of keys, sorted by keys
- `multimap` collection of key-value pairs, sorted by keys

(since C++11) 提供无序关联容器 Unordered associative containers 实现松散哈希 hashed 数据结构，实现快速查找，时间复杂度平均为常数 O(1)，最差为 O(n)。

- `unordered_set` collection of unique keys, hashed by keys
- `unordered_map` collection of key-value pairs, hashed by keys, keys are unique
- `unordered_multiset` collection of keys, hashed by keys
- `unordered_multimap` collection of key-value pairs, hashed by keys

容器适配 Container adaptors 
Container adaptors provide a different interface for sequential containers.

- `stack` adapts a container to provide stack (LIFO data structure)
- `queue` adapts a container to provide queue (FIFO data structure)
- `priority_queue` adapts a container to provide priority queue



## ==⚡ template 模板泛型
- https://www.runoob.com/cplusplus/cpp-templates.html
- [C++ 模板和 C# 泛型之间的区别](https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/generics/differences-between-cpp-templates-and-csharp-generics)
- C++ Primer, 5th Edition - 16. Templates and Generic Programming
- C++ Primer 笔记——模板与泛型编程 https://www.cnblogs.com/zoneofmine/p/7401494.html

C++ Primer Chapter 16. Templates and Generic Programming

- Section 16.1 Defining a Template
- Section 16.2 Template Argument Deduction
- Section 16.3 Overloading and Templates
- Section 16.4 Variadic Templates
- Section 16.5 Template Specializations

模板中使用的关键字 *typename* 和 *class* 没有区别，相同含义，可以互换使用。

注意：inline and constexpr 模板函数的关键字要放在摸板型列表之后，返回类型之前，不能放在 *template* 关键字之前。

模板的实例化：编译器用模板产生指定的类或函数的特定类型版本，产生模板的特定类型实例的过程称为实例化。需要和类对象的实例化区别开来。

从函数调用时的实参确定模板实参的类型和值的过程叫做模板实参推断。

当编译器遇到一个模板定义的时候，它并不生成代码。只有当我们实例化模板的一个特定版本时，编译器才会生成代码。为了生成一个实例化版本，编译器需要掌握函数模板或类模板成员函数的定义。所以模板的头文件通常既包括声明也包括定义。

与函数模板不同，编译器不能为类模板推断模板参数类型，所以必须在模板名后的尖括号中提供额外信息。每个类模板的每个实例都形成一个独立的类。默认情况下，一个类模板的成员函数只有当程序用到它时才进行实例化。

如果一个类模板包含一个非模板友元，则友元可以访问所有模板实例。如果友元自身是模板，类可以授权给所有友元模板实例，也可以只授权给特定实例。

当希望通知编译器一个名字表示类型时，必须使用关键字 *typename*，而不能使用 *class*。

```cpp
template <typename T>
void test(const T& t)
{
    typename T::value_type *p;
}
```


泛型编程 Generic 这个概念最早就是来源于 C++ 当初设计 STL 时所引入的模板 Template 概念，而为什么要引入模板呢，因为 STL 要完成这样一个目标：

设计一套通用的，不依赖类型的，高效的的算法和数据结构，例如 std::sort 和 std::list。

关于通用性，运行时多态 Polymorphism 可以做到，高级语言的继承 Inheritance 机制，接口 Interface 机制，但是 C++ 作为一门相对底层的语言，对运行效率的要求是很严格的，而运行时多态会影响效率。例如成员函数只有在运行时才知道调用哪个，所以设计 STL 的人就创造了一种编译时多态技术，即模板。

那什么又是编译时多态呢，简单点说就是让编译器帮我确定类型，我写程序时只要标记下这里我要用某种类型的对象，至于具体是什么类型我不关心，你编译器帮我确定，编译完成后在运行时绝对是类型确定的，这样就大大提高了运行效率，反之对编译就增加了很多工作，而且生成的目标代码也会大大增加。

所以对 C++ 来说，所谓泛型 Generics，并不是说编译器不知道类型，而是针对程序员来说的，这也正是通用性的体现。C++ 的模板在刚出来的时候并没有想到会演化成今天这样，其他高级语言，如 Java，C# 在使用的时候带给了程序员极大的便利，就考虑支持这样一种功能，但是也仅仅是借用了 C++ 的模板理念，而没有完全照抄模板的实现方法，所以对于大部分程序员来说，只要使用起来差不多，并不关心实现。

所以最后总结下，泛型是只是一个概念，具体实现有 C++ 的模板，Java 的泛型等，但实现方法大不相同，只是提供给语言使用者相同的使用方法而已。

C++ 模板与 Java 泛型的比较：

- C++ template 是 reified generic，Java generic 是 type erasure。
- C++ 是在 call site 做 instantiate type，Java 是在 call site 插入 cast。
- C++ template 在 call site 可以做 inline，Java generic 因为并没有在 call site 生成代码所以不行。
- C++ 在 runtime 没有额外的开销，Java 在 runtime 有 cast 的开销。
- C++ 的每个 reified generic type 都有一份独立的代码，Java 只有一份 type erased 之后的代码。
- C++ 的 type check 在编译时完成，Java 的 type check 在编译期和运行期都要做一些工作。

总的来说 C++ 的 template 会生成更大的二进制代码，但会执行的比较快，但大个的二进制代码可能会导致更多的 I/O，所以也不一定完全是优势。Java 生成的代码只有一份，运行时会有一些 type cast 开销，但可以在运行时支持新类型，比如用 ClassLoader 动态加载进来的类。

C++ 模板和 C# 泛型之间的主要差异：

- C# 泛型的灵活性与 C++ 模板不同。 例如，虽然可以调用 C# 泛型类中的用户定义的运算符，但是无法调用算术运算符。
- C# 不允许使用非类型模板参数，如 template C<int i> {}。
- C# 不支持显式定制化；即特定类型模板的自定义实现。
- C# 不支持部分定制化：部分类型参数的自定义实现。
- C# 不允许将类型参数用作泛型类型的基类。
- C# 不允许类型参数具有默认类型。
- C# 泛型类型参数本身不能是泛型，但是构造类型可以用作泛型。 C++ 允许使用模板参数。
- C++ 允许在模板中使用可能并非对所有类型参数有效的代码，随后针对用作类型参数的特定类型检查此代码。 C# 要求类中编写的代码可处理满足约束的任何类型。 例如，在 C++ 中可以编写一个函数，此函数对类型参数的对象使用算术运算符 + 和 -，在实例化具有不支持这些运算符的类型的模板时，此函数将产生错误。 C# 不允许此操作；唯一允许的语言构造是可以从约束中推断出来的构造。

在语法层次，C# 泛型是参数化类型的一个更简单的方法，而不具有 C++ 模板的复杂性。 此外，C# 不试图提供 C++ 模板所具有的所有功能。 在实现层次，主要区别在于 C# 泛型类型的替换在运行时执行，从而为实例化对象保留了泛型类型信息。


模板函数定义的一般形式如下所示：

    template <typename type> 
    ret-type func-name(parameter list)
    {
       // body
    }

C++ 的模板定义的是一类具有相似行为的对象：

- `class template` a family of classes, which may be nested classes 
- `function template` a family of functions, which may be member functions 
- `alias template` an alias to a family of types (since C++11) 
- `variable template` a family of variables (since C++14) 

Templates are parametrized by one or more template parameters, of three kinds: type template parameters, non-type template parameters, and template template parameters.


函数模板示例：

```cpp
#include <iostream>
#include <string>
 
using namespace std;
 
// Define a Function Template
template <typename T>
inline T const& Max (T const& a, T const& b) 
{ 
    return a < b ? b:a; 
} 

int main ()
{
    int i = 39;
    int j = 20;
    // Instantiating a Function Template
    cout << "Max(i, j): " << Max(i, j) << endl; 
 
    double f1 = 13.5; 
    double f2 = 20.7; 
    cout << "Max(f1, f2): " << Max(f1, f2) << endl; 
 
    string s1 = "Hello"; 
    string s2 = "World"; 
    cout << "Max(s1, s2): " << Max(s1, s2) << endl; 
 
   return 0;
}
```


类模板示例：

```cpp
#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>
#include <stdexcept>

using namespace std;

template <class T>
class Stack 
{
private:
    vector<T> elems;

public:
    Stack<T>& push(T const&);
    T pop();
    T top() const;
    bool empty() const {
        return elems.empty();
    }
    int size() const {
        return elems.size();
    }
};

template<class T>
Stack<T>& Stack<T>::push(T const& elem)
{
    elems.push_back(elem);
    return *this;
}

template<class T>
T Stack<T>::pop()
{
    if (elems.empty())
    {
        throw out_of_range("Stack<T>::pop() with empty stack");
    }
    T back = elems.back();
    elems.pop_back();
    return back;
}

template <class T>
T Stack<T>::top() const
{
    if (elems.empty())
    {
        throw out_of_range("Stack<T>::top() with empty stack");
    }
    return elems.back();
}

int main()
{
    try
    {
        Stack<int> iStack;
        Stack<string> sStack;

        iStack.push(7).push(8);
        cout << iStack.pop() << endl;
        cout << iStack.top() << endl;

        sStack.push("hello").push("world");
        cout << sStack.pop() << endl << sStack.pop()  << endl;
        sStack.pop();
    } catch (exception const& ex)
    {
        cerr << "Exception: " << ex.what() << endl;
        return -1;
    }
}
```



## ==⚡ map 映射容器
- https://www.w3cschool.cn/cpp/cpp-fu8l2ppt.html
- https://docs.microsoft.com/zh-cn/cpp/standard-library/map
- https://docs.microsoft.com/zh-cn/cpp/standard-library/multimap-class
- https://preshing.com/20110603/hash-table-performance-tests/

```cpp
// Defined in header <map>   
template<
    class Key,
    class T,
    class Compare = std::less<Key>,
    class Allocator = std::allocator<std::pair<const Key, T> >
> class map; // (1)  

namespace pmr {
    template <class Key, class T, class Compare = std::less<Key>>
    using map = std::map<Key, T, Compare, std::pmr::polymorphic_allocator<std::pair<const Key,T>>>
}            // (2) (since C++17) 
```
Map 是 C++ 标准容器，提供了很好 Key-Value 一对一的关系。

通常是红黑树算法结构实现，red-black trees，Keys 通过 Compare() 方法排序，搜索、移除、插入操作对数复杂度。

std::map 符合 *Container*, *AllocatorAwareContainer*, *AssociativeContainer*, *ReversibleContainer* 等容器的要求。

用于存储和检索集合中的数据，此集合中的每个元素均为包含数据值和排序键的元素对。 键的值是唯一的，用于自动排序数据，可以直接更改映射中的元素值。 键值是常量，不能更改。 必须先删除与旧元素关联的键值，才能为新元素插入新键值。

C++ 标准库 map 类为：

- 大小可变的关联容器，基于关联键值高效检索元素值。
- 可逆，因为它提供双向迭代器来访问其元素。
- 有序，因为它的元素根据指定的比较函数按键值排序。
- 唯一。 因为它的每个元素必须具有唯一键。
- 关联容器对，因为它的元素数据值与其键值不同。
- 类模板实现，是泛型的，独立于元素或键类型。

在一份性能测试数据中，std::map 效率垫底，并且与第一名相差 5 倍以上，GCC hash table 也不错：

|        实现        |  效率  |
|--------------------|--------|
| StringHashTable    | 171 ms |
| GCC hash table     | 239 ms |
| ChainedHashTable   | 247 ms |
| OpenHashTable      | 279 ms |
| Google dense hash  | 309 ms |
| JudyL hash table   | 342 ms |
| stdext::hash_map   | 357 ms |
| JudySL array       | 359 ms |
| Google sparse hash | 501 ms |
| Python dictionary  | 661 ms |
| std::map           | 956 ms |


构造函数用法；

```cpp
map<char, int> mapchar;
map<char, string> mapchar;
map<int, char> mapint；
map<int, string> mapint;
map<sring, char> mapstring;
map<string, int> mapstring;
```

添加数据；

```cpp
map<int ,string> maplive;  
maplive.insert(pair<int,string>(102,"aclive"));
maplive.insert(map<int,string>::value_type(321,"hai"));
maplive[112]="April";
```

std::map 重载了赋值运算符：

```cpp
map& operator=( const map& other ); // (1)  
map& operator=( map&& other );      // (2) (since C++11) (until C++17)
map& operator=( map&& other ) noexcept();    // (2) (since C++17) 
map& operator=( std::initializer_list<value_type> ilist );  // (3) (since C++11) 
```

1) Copy assignment operator. Replaces the contents with a copy of the contents of other.If `std::allocator_traits<allocator_type>::propagate_on_container_copy_assignment()` is true, the target allocator is replaced by a copy of the source allocator. If the target and the source allocators do not compare equal, the target (`*this`) allocator is used to deallocate the memory, then other's allocator is used to allocate it before copying the elements. (since C++11).

2) Move assignment operator. Replaces the contents with those of other using move semantics (i.e. the data in other is moved from other into this container). other is in a valid but unspecified state afterwards. If `std::allocator_traits<allocator_type>::propagate_on_container_move_assignment()` is true, the target allocator is replaced by a copy of the source allocator. If it is false and the source and the target allocators do not compare equal, the target cannot take ownership of the source memory and must move-assign each element individually, allocating additional memory using its own allocator as needed. In any case, all element originally present in `*this` are either destroyed or replaced by elementwise move-assignment.

3) Replaces the contents with those identified by initializer list ilist.


三种方法复杂度：

1) Linear in the size of `*this` and other.
2) Linear in the size of `*this` unless the allocators do not compare equal and do not propagate, in which case linear in the size of `*this` and other
3) Linear in the size of `*this` and ilist.


成员类型：

| Member type               | Definition                                       |
| :------------------------ | -------------------------------------------------|
| key_type                  | Key                                              |
| mapped_type               | T                                                |
| value_type                | std::pair<const Key, T>                          |
| size_type                 | Unsigned integer type (usually std::size_t)      |
| difference_type           | Signed integer type (usually std::ptrdiff_t)     |
| key_compare               | Compare                                          |
| allocator_type            | Allocator                                        |
| iterator                  | BidirectionalIterator                            |
| const_iterator            | Constant bidirectional iterator                  |
| reverse_iterator          | std::reverse_iterator<iterator>                  |
| const_reverse_iterator    | std::reverse_iterator<const_iterator>            |
| reference         | Allocator::reference (until C++11), value_type& (since C++11)|
| const_reference   | Allocator::const_reference (until C++11), const value_type& (since C++11)|
| pointer           | Allocator::pointer (until C++11), std::allocator_traits<Allocator>::pointer (since C++11)|
| const_pointer     | Allocator::const_pointer (until C++11), std::allocator_traits<Allocator>::const_pointer (since C++11)|
| node_type         | a specialization of node handle representing a container node (since C++17)|
| insert_return_type| instantiated with template arguments iterator and node_type. (since C++17)|

基本操作函数：

- `at`             查找具有指定键值的元素。
- `begin`          返回指向 map 头部的迭代器
- `begin`          返回指向 map 头部的迭代器
- `clear`          删除所有元素
- `count`          返回指定元素出现的次数
- `empty`          如果 map 为空则返回 true
- `emplace`        将就地构造的元素插入到映射。
- `end`            返回指向 map 末尾的迭代器
- `equal_range`    返回特殊条目的迭代器对
- `erase`          删除一个元素
- `find`           查找一个元素
- `get_allocator`  返回 map 的配置器
- `insert`         插入元素
- `key_comp`       返回比较元素 key 的函数
- `lower_bound`    返回键值 >= 给定元素的第一个位置
- `max_size`       返回可以容纳的最大元素个数
- `rbegin`         返回一个指向 map 尾部的逆向迭代器
- `rend`           返回一个指向 map 头部的逆向迭代器
- `size`           返回 map 中元素的个数
- `swap`           交换两个 map
- `upper_bound`    返回键值 > 给定元素的第一个位置
- `value_comp`     返回比较元素 value 的函数

示例程序：

```cpp
#include <map>
#include <iostream>

int main( )
{
    using namespace std;
    map <int, int> m1;

    map <int, int> :: iterator m1_Iter;
    map <int, int> :: const_iterator m1_cIter;
    map <int, int> :: const_iterator m1_eIter;
    typedef pair <int, int> Int_Pair;

    m1.insert ( Int_Pair ( 0, 0 ) );
    m1.insert ( Int_Pair ( 1, 1 ) );
    m1.insert ( Int_Pair ( 1, 3 ) );
    m1.insert ( Int_Pair ( 2, 4 ) );

    m1_cIter = m1.begin ( );
    cout << "The first element of m1 is " << m1_cIter -> first << endl;
    cout << "The second element of m1 is " << m1_cIter -> second << endl;
    // cout << "The third element of m1 is " << m1_cIter -> third << endl; // no third

    m1_Iter = m1.begin ( );
    m1.erase ( m1_Iter );

    // The following 2 lines would err because the iterator is const
    // m1_cIter = m1.begin ( );
    // m1.erase ( m1_cIter );

    m1_cIter = m1.begin( );
    cout << "The first element of m1 is now " << m1_cIter -> first << endl;

    // Keys must be unique in map, so duplicates are ignored
    int i = m1.count(1);
    cout << "The number of elements in m1 with a sort key of 1 is: " << i << "." << endl;

    i = m1.count(2);
    cout << "The number of elements in m1 with a sort key of 2 is: " << i << "." << endl;

    m1_Iter = m1.begin( );
    m1_eIter = m1.end();
    cout << "double each element in map:\n<key -> value>\n";
    while ( m1_Iter != m1_eIter)
    {
        m1_Iter -> second *= 2;
        cout << m1_Iter -> first << " -> " << m1_Iter -> second << "\n";
        m1_Iter++;
    }
    cout << "The number of element in map with a key 2 is: " << m1[2] << endl;

    i = m1.size();
    m1.clear();
    cout << "The size of the map after clearing is " << m1.size() << ", whcih before is " << i << "." << endl;
}
```

注意，map 取值主要有 at 和下标 [] 两种操作，(C++11) 引入的 at 会作下标检查。map 可使用类似数组下标的方式访问元素。multimap 不可以这样访问元素，它需要通过迭代器访问：

```cpp
m1_Iter = m1.find(2);
cout << "The number of element in map with a key 2 is: " << m1_Iter->second << endl;
```

## ===✒ std::map::insert()

```cpp
std::pair<iterator,bool> insert( const value_type& value ); (1)  
template< class P >
std::pair<iterator,bool> insert( P&& value ); (2) (since C++11) 
std::pair<iterator,bool> insert( value_type&& value ); (2) (since C++17) 
 (3)  
iterator insert( iterator hint, const value_type& value );  (until C++11) 
iterator insert( const_iterator hint, const value_type& value );  (since C++11) 
template< class P >
iterator insert( const_iterator hint, P&& value ); (4) (since C++11) 
iterator insert( const_iterator hint, value_type&& value ); (4) (since C++17) 
template< class InputIt >
void insert( InputIt first, InputIt last ); (5)  
void insert( std::initializer_list<value_type> ilist ); (6) (since C++11) 
insert_return_type insert(node_type&& nh); (7) (since C++17) 
iterator insert(const_iterator hint, node_type&& nh); (8) (since C++17) 
```


## ===✒ std::map::find()

返回 key 关联的条目，否则返回 end()。返回条目即 Key-value，通过 first 和 second 成员引用。

```cpp
iterator find( const Key& key ); // (1)  
const_iterator find( const Key& key ) const; // (2)  
template< class K > iterator find( const K& x ); // (3) (since C++14) 
template< class K > const_iterator find( const K& x ) const; // (4) (since C++14) 
```

1,2) Finds an element with key equivalent to key.
3,4) Finds an element with key that compares equivalent to the value x. This overload only participates in overload resolution if the qualified-id Compare::is_transparent is valid and denotes a type. It allows calling this function without constructing an instance of Key

Example

```cpp
#include <iostream>
#include <string>
#include <map>

using namespace std;

class Item 
{
public:
    static int index;
    // Item(string name): name(name)
    Item(): name("Default#" + std::to_string(Item::index++))
    {
        cout << "Item::Item() " << this << endl;
    }
    string name;
};

int Item::index = 0;

int main()
{
    map<string, Item> mymap;
    // Demonstrates the risk of accessing non-existing elements via operator [].
    auto a = mymap["a"]; // auto-call default constructor.
    auto b = mymap["b"]; // auto-call default constructor.
    auto c = mymap.find("c");

    cout << "a: " << a.name << endl;
    if (c != mymap.end())
    {
        cout << "Found: " << c->first << " => " << c->second.name << endl;
    }
    else
    {
        cout << "Not found!" << endl;
    }
}
```

Output:

```sh
Item::Item() 0x751a00
Item::Item() 0x752a80
a: Default#0
Not found!
```

## ===✒ std::multimap
- https://en.cppreference.com/w/cpp/container/multimap


C++ 标准库多重映射类 multimap 用于存储和检索集合中的数据，此集合中的每个元素均为包含数据值和排序键的元素对。 键值不需要唯一，用于自动排序数据。 可以直接更改多重映射中的元素值，但不能直接更改其关联键值。 必须先删除与旧元素关联的键值，才能插入与新元素关联的新键值。

C++ 标准库多重映射类：

- 大小可变的关联容器，支持基于关联键值高效检索元素值。
- 可逆，因为它提供双向迭代器来访问其元素。
- 有序，因为它的元素在容器中根据指定的比较函数按键值排序。
- 多个，它的元素不需要具有唯一键，因此一个键值可具有多个相关联的元素数据值。
- 关联容器对，因为它的元素数据值与其键值不同。
- 类模板实现，是泛型的，因此与作为元素或键包含的特定数据类型无关。

*Multimap* is an associative container that contains a sorted list of key-value pairs, while permitting multiple entries with the same key. Sorting is done according to the comparison function *Compare*, applied to the keys. Search, insertion, and removal operations have logarithmic complexity.

The order of the key-value pairs whose keys compare equivalent is the order of insertion and does not change. (since C++11)

Everywhere the standard library uses the Compare requirements, equivalence is determined by using the equivalence relation as described on Compare. In imprecise terms, two objects a and b are considered equivalent if neither compares less than the other: `!comp(a, b) && !comp(b, a)`.

*std::multimap* meets the requirements of *Container*, *AllocatorAwareContainer*, *AssociativeContainer* and *ReversibleContainer*.

```C++
#include <iostream>
#include <map>
 
struct Point { double x, y; };
struct PointCmp {
    bool operator()(const Point& lhs, const Point& rhs) const { 
        return lhs.x < rhs.x; // NB. ignores y on purpose
    }
};
 
int main() {
    std::multimap<int, int> m = {{1,1}, {2,2}, {3,3}, {4,4}, {3,3}, {2,2}, {1,1}};
    for(auto& p: m) std::cout << p.first << ' ' << p.second << '\n';
 
    // custom comparison
    std::multimap<Point, double, PointCmp> mag{
        { {5, 12}, 13 },
        { {3, 4}, 5 },
        { {8, 15}, 17 },
        { {3, -3}, -1 },
    };
 
  for(auto p : mag)
      std::cout << "The magnitude of (" << p.first.x
                << ", " << p.first.y << ") is "
                << p.second << '\n';
}
```

Output:

    1 1
    1 1
    2 2
    2 2
    3 3
    3 3
    The magnitude of (3, 4) is 5
    The magnitude of (3, -3) is -1
    The magnitude of (5, 12) is 13
    The magnitude of (8, 15) is 17


## ==⚡ vector 向量容器
- https://www.runoob.com/w3cnote/cpp-vector-container-analysis.html
- https://www.w3cschool.cn/cpp/cpp-i6da2pq0.html
- https://en.cppreference.com/w/cpp/container/vector

向量 Vector 封装了动态大小数组的序列容器 Sequence Container。跟任意其它类型容器一样，它能够存放各种类型的对象。可以简单的认为，向量是一个能够存放任意类型的动态数组。

容器特性：

- `顺序序列` 顺序容器中的元素按照严格的线性顺序排序。可以通过元素在序列中的位置访问对应的元素。
- `动态数组` 支持对序列中的任意元素进行快速直接访问，甚至可以通过指针算述进行该操作。操供了在序列末尾相对快速地添加/删除元素的操作。
- `内存分配感知` Allocator-aware 容器使用一个内存分配器对象来动态地处理它的存储需求。

Vector 是 C++ STL 的一个重要成员。

定义：

    template<
        class T,
        class Allocator = std::allocator<T>
    > class vector; (1)  

    namespace pmr {
        template <class T>
        using vector = std::vector<T, std::pmr::polymorphic_allocator<T>>;
    } (2) (since C++17) 

1) std::vector is a sequence container that encapsulates dynamic size arrays.
2) std::pmr::vector is an alias template that uses a polymorphic allocator

vector 有五种构造方式：

    #include<vector>;

    int a[7]={1,2,3,4,5,9,8};
    vector<int> v(a,a+7); // 从数组中获得初值
    vector<int> b(10);    // 定义了 10 个整型元素的向量，但没有给出初值。
    vector<int> b(10,1);  // 定义了 10 个整型元素的向量初值为 1
    vector<int> c(b);     // 整体复制 b 向量
    vector<int> c(b.begin(),b.begin+3); // 从 b 向量中提取元素
 
vector 对象的增删改遍历等重要操作：

    a.at(pos < size())
    a.back();  // 返回最后一个元素
    a.front(); // 返回第一个元素
    a[i];      // 返回第 i 个元素，a[i] 必须存在才可以访问

    a.assign(4,2); // 定义 a 含 4 个元素，初始值 2
    a.assign(b.begin(), b.begin()+3); // b 为向量，将 b 的 0~2 个元素构成的向量赋给a
    a.capacity(); // 返回向量对象现有的容量，即可容纳的元素个数
    a.clear(); // 清空元素
    a.empty(); // 判断是否为空，返回 ture、false
    a.erase(a.begin()+1, a.begin()+3); // 删除元素，但不包括 a.begin()+3
    a.insert(a.begin()+1,3,5); // 在 1 索引位置插入 3 个数，其值都为5
    a.insert(a.begin()+1,5);   // 在 1 索引位置插入数值 5
    a.insert(a.begin()+1,b+3,b+6); // 在 1 索引位置插入数组 b 的第3个元素到第5个元素
    a.pop_back(); // 删除向量的最后一个元素
    a.push_back(5); // 在向量最后插入一个元素，值为 5
    a.reserve(100); // 保留并扩容，如果容量少于 100 则扩充至 100，大于 100 则保留原容量
    a.resize(10); // 调整容量为 10 个，元素多则删，少则补，其值随机
    a.resize(10,2); // 调整空间为 10 个，多则删，少则补，其值为 2
    a.size(); // 返回向量元素的个数；
    a.swap(b); // 两向量元素整体进行交换
    a==b;  // 向量的比较操作，还有!=,>=,<=,>,<

另外，新增的方法 data() (C++11) 实现底层数组的直接访问。

示例：

    #include <iostream>
    #include <vector>
    #include <algorithm>

    int main()
    {
        // Create a vector containing integers
        std::vector<int> v = {7, 5, 16, 8};
     
        // Add two more integers to vector
        v.push_back(25);
        v.push_back(13);
        sort(v.begin(),v.end());

        // Iterate and print values of vector
        for(int n : v) {
            std::cout << n << '\n';
        }
    }

Output:

    7
    5
    16
    8
    25
    13

利用数组下标遍历 & 迭代器遍历：

    #include <string.h>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
     
    int main()
    {
        vector<int>obj;
        for(int i=0;i<10;i++)
        {
            obj.push_back(i);   
        } 
     
        for(int i=0;i<10;i++)
        {
            cout << obj[i] << " ";
        }
     
        cout<<endl; 
        vector<int>::iterator it;
        for(it=obj.begin();it!=obj.end();it++)
        {
            cout<<*it<<" ";
        }
        return 0;
    }

使用 vector 注意事项：

1、如果你要表示的向量长度较长，容易导致内存泄漏，而且效率会很低；
2、Vector作为函数的参数或者返回值时，需要注意它的写法：

    double Distance(vector<int>&a, vector<int>&b)

其中的“&”绝对不能少！！！

在实际使用时，如果需要经常构造新的 vector 并向其中放入一些元素，或者扩容动作太频繁，就会造成频繁的内存分配和元素移动。一个常用的技巧是，若可以预先计算出 vector 至多需要的空间大小，可以先使用 reserve 分配好内存空间。

reserve 还有一个使用场景：假如总共有 4G 内存可用，内存扩展倍率为 2，若根据此前的内存扩展策略已经占用了 2.1G，则下一次扩展必定失败，此时可以预分配空间以避免这种问题。

如果经常需要将自定义类型放入 vector，有时这些类型的复制开销很大，如果不正确地实现 C++11 引入的移动构造和赋值，在 vector 拷贝搬运元素性能开销巨大。vector 在如下场景下不得不搬运元素：内存空间需要扩展时、向除末尾的位置插入元素时、删除除最后一个元素时、不同分配器的 vector 相互赋值等。

vector::clear 除了析构所有元素外，不会释放任何空间，这与我们用到的其它容器类型都不同，但没有办法，它就是这样。想要释放 vector 占用的内存，可以使用 vector::swap，或者使用 shrink_to_fit 收缩内存空间。

## ==⚡ set 有序集合

set 跟 vector 类似，唯一区别就是，set 里面的元素是有序的且唯一的，往 set 里添加元素，它就会自动排序，而且，对于已经存在数据就忽略添加操作。

    #include <iostream>
    #include <iomanip>
    #include <set>
    #include <string>

    using namespace std;

    template <typename T>
    void showset(set<T> v)
    {
        for (typename set<T>::iterator it = v.begin(); it != v.end(); it++)
        {
            cout << setw(10) << left << *it;
        }
        cout << endl;
    }

    int main()
    {
        set<int> nums{9,8,1,2,3,4,5,5,5,6,7,7 };
        showset(nums);
        set<string> fruits{ "pineapple", "apple", "melon", "peach" };
        showset(fruits);

        nums.insert(9); // do nothing for existing one
        fruits.insert("berry");
        showset(fruits);
        
        // system("pause");
        return 0;
    } 



## ==⚡ list 链表

list 就是双向链表数据结构，C 语言中经常需要自己实现链表，但是，花时间实现高效的链表，这种重复造轮子并不这个讨好。

除了 list 双向链表，还有单链表容器 foward_list。

list 双向链表的优点是插入和删除元素都比较快捷，缺点是不能随机访问元素。

    #include <list>
    #include <iostream>
    #include <iomanip>
    #include <list>
    #include <string>

    using namespace std;

    template <typename T>
    void showlist(list<T> v)
    {
        for (list<T>::iterator it = v.begin(); it != v.end(); it++)
        {
            cout << setw(4) << left << *it;
        }
        cout << endl;
    }

    int main()
    {
        list<int> l1{ 1,2,3,4,5,5,6,7,7 };
        l1.sort();
        l1.reverse();
        showlist(l1);
        list<double> l2;
        list<char> l3(10);
        list<int> l4(5, 10); // 将元素都初始化为10
        showlist(l4);

        // system("pause");
        return 0;
    } 


值得注意的是，list 容器不能调用 algorithm 下的 sort 函数进行排序，因为 sort 函数要求容器必须可以随机存储。所以，list 内部实现了排序函数。

GCC 编译程序时候提示如下错误：

    error: need 'typename' before 'std::list<T>::iterator' because 'std::list<T>' is a dependent scope|

提示的意思是说在 list<T> 前面需要用 typename 限定一下，因为编译器不知道 list<T>::iterator 是代表一个类型，更改代码：

    list<T>::iterator it; => typename std::list<T>::iterator it;




# =🚩 Strings library

到 C++17 规范为止，C++ 字符串标准库提供了三种泛型字符类型：

- *std::basic_string* - a templated class designed to manipulate strings of any character type. 
- *std::basic_string_view* (C++17) - a lightweight non-owning read-only view into a subsequence of a string. 
- *Null-terminated strings* - arrays of characters terminated by a special null character. 

根据使用 C/C++ 风格的差异，有不同的字符串头文件导入语法：

- `#include <cstring>` C 风格字符串；
- `#include <string>` C++ 引入的 string 类类型；

C 风格的字符串起源于 C 语言，并在 C++ 中继续得到支持。字符串实际上是使用 null 终止的一维字符数组 Null-terminated。是一个以 null 结尾的字符串，包含了组成字符串的字符。

Null-terminated 字符串使用特殊字符 '\0' 作为字符串的终结标记，C++ 提供了函数来创建、探测、修改这种字符串。

以下是有三种使用 Null 终结的基本字符串类型：

- null-terminated byte strings 
- null-terminated multibyte strings 
- null-terminated wide strings 


C++ `<string>` 提供以下类型定义： 

    |                Type               |            Definition            |
    |-----------------------------------|----------------------------------|
    | std::string                       | std::basic_string<char>          |
    | std::wstring                      | std::basic_string<wchar_t>       |
    | std::u16string (C++11)            | std::basic_string<char16_t>      |
    | std::u32string (C++11)            | std::basic_string<char32_t>      |
    | std::string_view (since C++17)    | std::basic_string_view<char>     |
    | std::wstring_view (since C++17)   | std::basic_string_view<wchar_t>  |
    | std::u16string_view (since C++17) | std::basic_string_view<char16_t> |
    | std::u32string_view (since C++17) | std::basic_string_view<char32_t> |
    | std::pmr::string (C++17)          | std::pmr::basic_string<char>     |
    | std::pmr::wstring (C++17)         | std::pmr::basic_string<wchar_t>  |
    | std::pmr::u16string (C++17)       | std::pmr::basic_string<char16_t> |
    | std::pmr::u32string (C++17)       | std::pmr::basic_string<char32_t  |


基础泛型字符串 std::basic_string 提供了以下通常的类型：

```cpp
// Defined in header <string> 
// Type Definition 
std::string    std::basic_string<char> 
std::wstring   std::basic_string<wchar_t> 
std::u16string std::basic_string<char16_t> 
std::u32string std::basic_string<char32_t> 
```

另外一种泛型字符串 std::basic_string_view 提供经量化字符串对象，只提供读取功能，以下是对应的泛型实例：

```cpp
// Defined in header <string> 
// Type Definition 
std::string_view    std::basic_string_view<char> 
std::wstring_view   std::basic_string_view<wchar_t> 
std::u16string_view std::basic_string_view<char16_t> 
std::u32string_view std::basic_string_view<char32_t> 
```

连接字符串时，str = str + "a" 加的运算产生的是一个新的对象，进行复制赋值。而 str += "a" 相当于调用 append() 方法，操作之后直接返回引用，避免了产生新的对象。因此，两者的性能有一定的差距。另外，使用 stringstream 方法是最快的，通过 str() 方法设置区获取内容！



## ==⚡ Null-terminated 字符串

下面的声明和初始化创建了一个 "Hello" 字符串。由于在数组的末尾存储了 NULL-terminated 空字符，所以字符数组的大小比单词 "Hello" 的字符数多一个。

```cpp
char greeting[6] = {'H', 'e', 'l', 'l', 'o', ''};
char greeting[] = "Hello";
```

不需要把 null 字符放在字符串常量的末尾。C++ 编译器会在初始化数组时，自动添加在末尾。

示例：

```cpp
#include <iostream>
#include <string>
 
// using std::string;
// using std::cout;
using namespace std;
 
int main ()
{
    char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};

    cout << "Greeting message: ";
    cout << greeting << endl;

    string ss [] = {"Beijing", "Shanghai", "Chengdu"};
    cout << ss[1];

    return 0;
}
```

C 风格函数：

```cpp
#include <iostream>
#include <cstring>
 
using namespace std;
 
int main ()
{
   char str1[11] = "Hello";
   char str2[11] = "World";
   char str3[11];
   int  len ;
 
   strcpy( str3, str1);
   cout << "strcpy( str3, str1) : " << str3 << endl;
 
   strcat( str1, str2);
   cout << "strcat( str1, str2): " << str1 << endl;
 
   len = strlen(str1);
   cout << "strlen(str1) : " << len << endl;
 
   return 0;
}
```

C++ 字符串对象：

```cpp
#include <iostream>
#include <string>
 
using namespace std;
 
int main ()
{
   string str1 = "Hello";
   string str2 = "World";
   string str3;
   int  len ;
 
   // 复制 str1 到 str3
   str3 = str1;
   cout << "str3 : " << str3 << endl;
 
   // 连接 str1 和 str2
   str3 = str1 + str2;
   cout << "str1 + str2 : " << str3 << endl;
 
   // 连接后，str3 的总长度
   len = str3.size();
   cout << "str3.size() :  " << len << endl;
 
   return 0;
}
```

C 语言作为一种不算太高级的语言，在 stdlib 中提供了许多有用的函数。对字符串的比较是一个个字符对比的，strcmp() 函数比较字符串区分大小写，到了 C++ 引入了操作符重载的概念，使用字符串的对比可以使用 >、<、==、>=、<=、!= 等比较运算符，由 Basic_string 类模板既提供，另外还提供了 compare() 函数，支持用索引值和长度定位子串进行比较。如果相比较的两个子串相同，函数返回 0，否则返回非零值。

|          函数          |                        功能                      |
|------------------------|--------------------------------------------------|
| strcpy(p, p1)          | 复制字符串                                       |
| strncpy(p, p1, n)      | 复制指定长度字符串                               |
| strcat(p, p1)          | 附加字符串                                       |
| strncat(p, p1, n)      | 附加指定长度字符串                               |
| strlen(p)              | 取字符串长度                                     |
| strcmp(p, p1)          | 比较字符串                                       |
| strcasecmp             | 忽略大小写比较字符串                             |
| strncmp(p, p1, n)      | 比较指定长度字符串                               |
| strchr(p, c)           | 在字符串中查找指定字符                           |
| strrchr(p, c)          | 在字符串中反向查找                               |
| strstr(p, p1)          | 查找字符串                                       |
| strpbrk(p, p1)         | 以目标字符串的所有字符作为集合，在当前字符串查找该集合的任一元素             |
| strspn(p, p1)          | 以目标字符串的所有字符作为集合，在当前字符串查找不属于该集合的任一元素的偏移 |
| strcspn(p, p1)         | 以目标字符串的所有字符作为集合，在当前字符串查找属于该集合的任一元素的偏移   |
|------------------------|------------------------------------------------------------------------|
| 字符串 -> 数值         |                                                                         |
|------------------------|------------------------------------------------------------------------|
| strtod(p, ppend)       | p 转换 double，并将后续的字符串指针存储到 char* ppend 类型存储。           |
| strtol(p, ppend, base) | p 转换 long，base 指定进制 0 表示自动判断，如 0x、0 前缀表示 Hex、Oct      |
| atoi(p)                | 字符串转换到 int 整型                             |
| atof(p)                | 字符串转换到 double 符点数                        |
| atol(p)                | 字符串转换到 long 整型                           |
|------------------------|------------------------------------------------|
| 字符检查               |                                                 |
|------------------------|------------------------------------------------|
| isalpha()              | 检查是否为字母字符                               |
| isupper()              | 检查是否为大写字母字符                            |
| islower()              | 检查是否为小写字母字符                            |
| isdigit()              | 检查是否为数字                                   |
| isxdigit()             | 检查是否为十六进制数字表示的有效字符               |
| isspace()              | 检查是否为空格类型字符                            |
| iscntrl()              | 检查是否为控制字符                                |
| ispunct()              | 检查是否为标点符号                                |
| isalnum()              | 检查是否为字母和数字                              |
| isprint()              | 检查是否是可打印字符                              |
| isgraph()              | 检查是否是图形字符，等效于 isalnum() ispunct()     |


## ==⚡ std::string (std::basic_string of char)

C++ 字符串类成员类型 String Member types

|      member type       |                            definition                            |
|------------------------|------------------------------------------------------------------|
| value_type             | char                                                             |
| traits_type            | char_traits<char>                                                |
| allocator_type         | allocator<char>                                                  |
| reference              | char&                                                            |
| const_reference        | const char&                                                      |
| pointer                | char*                                                            |
| const_pointer          | const char*                                                      |
| iterator               | a random access iterator to char (convertible to const_iterator) |
| const_iterator         | a random access iterator to const char                           |
| reverse_iterator       | reverse_iterator<iterator>                                       |
| const_reverse_iterator | reverse_iterator<const_iterator>                                 |
| difference_type        | ptrdiff_t                                                        |
| size_type              | size_t                                                           |

C++ 字符串成员方法 Member functions

- `operator=` assigns values to the string
- `assign` assign characters to a string
- `get_allocator` returns the associated allocator

Element access 

- `at` access specified character with bounds checking
- `operator[]` access specified character
- `front` (C++11) accesses the first character
- `back` (C++11) accesses the last character
- `data` returns a pointer to the first character of a string
- `c_str` returns a non-modifiable standard C character array version of the string
- `operator basic_string_view` (C++17) returns a non-modifiable string_view into the entire string

Iterators 

- `begincbegin` (C++11) returns an iterator to the beginning
- `end` `cend` (C++11) returns an iterator to the end
- `rbegin` `crbegin` (C++11) returns a reverse iterator to the beginning
- `rend` `crend` (C++11) returns a reverse iterator to the end

Capacity 

- `empty` checks whether the string is empty
- `sizelength` returns the number of characters
- `max_size` returns the maximum number of characters
- `reserve` reserves storage
- `capacity` returns the number of characters that can be held in currently allocated storage
- `shrink_to_fit` (C++11) reduces memory usage by freeing unused memory

Operations 

- `clear` clears the contents
- `insert` inserts characters
- `erase` removes characters
- `push_back` appends a character to the end
- `pop_back` (C++11) removes the last character
- `append` appends characters to the end
- `operator`+= appends characters to the end
- `compare` compares two strings
- `replace` replaces specified portion of a string
- `substr` returns a substring
- `copy` copies characters
- `resize` changes the number of characters stored
- `swap` swaps the contents

Search 

- `find` find characters in the string
- `rfind` find the last occurrence of a substring
- `find_first_of` find first occurrence of characters
- `find_first_not_of` find first absence of characters
- `find_last_of` find last occurrence of characters
- `find_last_not_of` find last absence of characters

C++11 开始提个一个全局的 to_string 方法：

```cpp
// Defined in header <string>   
std::string to_string( int value ); (1) (since C++11) 
std::string to_string( long value ); (2) (since C++11) 
std::string to_string( long long value ); (3) (since C++11) 
std::string to_string( unsigned value ); (4) (since C++11) 
std::string to_string( unsigned long value ); (5) (since C++11) 
std::string to_string( unsigned long long value ); (6) (since C++11) 
std::string to_string( float value ); (7) (since C++11) 
std::string to_string( double value ); (8) (since C++11) 
std::string to_string( long double value ); (9) (since C++11) 
```

Converts a numeric value to std::string.

1) signed decimal integer to string `std::sprintf(buf, "%d", value)`
2) signed decimal integer to string `std::sprintf(buf, "%ld", value)`
3) signed decimal integer to string `std::sprintf(buf, "%lld", value)`
4) unsigned decimal integer to string `std::sprintf(buf, "%u", value)`
5) unsigned decimal integer to string `std::sprintf(buf, "%lu", value)`
6) unsigned decimal integer to string `std::sprintf(buf, "%llu", value)`
7,8) floating point value to string `std::sprintf(buf, "%f", value)`
9) floating point value to string `std::sprintf(buf, "%Lf", value)`


## ==⚡ string split

C++11 之前只能自己写，我目前发现的史上最优雅的一个实现是这样的：
    
```cpp
void split(const string& s, vector<string>& tokens, const string& delimiters = " ")
{
    string::size_type lastPos = s.find_first_not_of(delimiters, 0);
    string::size_type pos = s.find_first_of(delimiters, lastPos);
    while (string::npos != pos || string::npos != lastPos) {
        tokens.push_back(s.substr(lastPos, pos - lastPos));//use emplace_back after C++11
        lastPos = s.find_first_not_of(delimiters, pos);
        pos = s.find_first_of(delimiters, lastPos);
    }
}
```


从C++11开始，标准库中提供了regex，regex用来做split就是小儿科了，比如：
    
    std::string text = "Quick brown fox.";
    std::regex ws_re("\\s+"); // whitespace
    std::vector<std::string> v(std::sregex_token_iterator(text.begin(), text.end(), ws_re, -1), 
        std::sregex_token_iterator());
    for(auto&& s: v)
        std::cout<<s<<"\n";

结合 C++17 提供的 string_view 实现，减少拷贝，性能有不小提升，参看此文：
Speeding Up string_view String Split Implementation。
https://www.bfilipek.com/2018/07/string-view-perf-followup.html

从 C++20 开始，标准库中提供了 ranges，有专门的 split view，只要写 `str|split(' ')` 就可以切分字符串，如果要获取结果 `vector<string>` 可以这样用(随手写的，可能不是最简)：
    
    string str("hello world test split");
    auto sv = str
        | ranges::views::split(' ') 
        | ranges::views::transform([](auto&& i){
            return i | ranges::to<string>(); }) 
        | ranges::to<vector>();
        
    for(auto&& s: sv) {
        cout<<s<<"\n";
    }

其实 C 语言里面也有一个函数 strtok 用于 char* 的 split，例如：
    
    #include <string.h>
    #include <iostream>
    #include <string>
    using namespace std;
    int main() 
    {
        string str = "one two three four five";
        char *token = strtok(str.data(), " ");// non-const data() needs c++17
        while (token != NULL) {
            std::cout << token << '\n';
            token = strtok(NULL, " ");
        }
    }

这里要注意的是 strtok 的第一个参数类型是 char* 而不是 const char* 实际上 strtok 的确会改变输入的字符串。


## ==⚡ string literal

在C++中，

    char* p = "abc";　　// valid in C, invalid in C++

会跳出警告：

    warning: ISO C++ forbids converting a string constant to 'char*' [-Wwrite-strings]

等号两边的变量类型不一样，进行了隐式类型转换 implicit conversion。

等号右边的 "abc" 是一个 string literal 字面常量，是 `const char*`，而 p 则是一个 `char*`。将右边的常量强制类型转换成一个指针，结果就是我们在修改一个 const 常量。编译运行的结果会因编译器和操作系统共同决定，有的编译器会通过，有的会抛异常，就算过了也可能因为操作系统的敏感性而被杀掉。

像这种直接将 string literal 赋值给指针的操作被开发者们认为是 deprecated，只不过由于以前很多代码都有这种习惯，为了兼容，就保留下来了。更规矩的写法：

    char* p = (char*)"abc";  // OK
    char const *p = "abc";　　// OK


C++11 raw strings literals：

    string raw_str = R"(
        some raw string...
        )";
    string raw_str = R"~(R"(foo)")~";
    string raw_str = R"***(R"(foo)")***";



# =🚩 Input/output library

C++ includes two input/output libraries: a modern, stream-based I/O library and the standard set of C-style I/O functions.

Input/output library

- Stream-based I/O
- I/O manipulators
- Synchronized output (C++20)

I/O 类抽象层次结构：

                                  +===========+
                                  | ios_base  |
                                  +=====^=====+
                                        |
                                  +===========+
                +---------------> | basic_ios | <---------------+
                |                 +=====^=====+                 |
                |                       |                       |
        +================+      +================+      +================+
        | basic_istream  |      | basic_iostream |      | basic_ostream  |
        +=======^========+      +=======^========+      +=======^========+
                |                       |                       |
    +=====================+   +=====================+   +=====================+
    | basic_ifstream      |   | basic_fstream       |   | basic_ofstream      |
    +=====================+   +=====================+   +=====================+
    +=====================+   +=====================+   +=====================+
    | basic_istringstream |   | basic_stringstream  |   | basic_ostringstream |
    +=====================+   +=====================+   +=====================+

具体的流实现类会从四个基本父类继承相应的接口方法。


🦻 Abstraction class 

Defined in header `<ios>`

- *ios_base* manages formatting flags and input/output exceptions (class)
- *basic_ios* manages an arbitrary stream buffer (class template)

Defined in header `<streambuf>`

- *basic_streambuf* abstracts a raw device (class template)

Defined in header `<ostream>`

- *basic_ostream* wraps a given abstract device (std::basic_streambuf) and provides high-level output interface (class template)

Defined in header `<istream>`

- *basic_istream* wraps a given abstract device (std::basic_streambuf) and provides high-level input interface (class template) 
- *basic_iostream* wraps a given abstract device (std::basic_streambuf) and provides high-level input/output interface

🦻 File I/O implementation
Defined in header `<fstream>`

- *basic_filebuf* implements raw file device (class template)
- *basic_ifstream* implements high-level file stream input operations (class template)
- *basic_ofstream* implements high-level file stream output operations (class template)
- *basic_fstream* implements high-level file stream input/output operations (class template)

🦻 String I/O implementation
Defined in header `<sstream>`
- *basic_stringbuf* implements raw string device (class template)
- *basic_istringstream* implements high-level string stream input operations (class template)
- *basic_ostringstream* implements high-level string stream output operations (class template)
- *basic_stringstream* implements high-level string stream input/output operations (class template)

🦻 Array I/O implementations
Defined in header `<strstream>`
- *strstreambuf* (deprecated in C++98) implements raw character array device (class)
- *istrstream* (deprecated in C++98) implements character array input operations (class)
- *ostrstream* (deprecated in C++98) implements character array output operations (class)
- *strstream* (deprecated in C++98) implements character array input/output operations (class)

🦻 Synchronized output
Defined in header `<syncstream>`
- *basic_syncbuf* (C++20) synchronized output device wrapper (class template)
- *basic_osyncstream* (C++20) synchronized output stream wrapper (class template)


🦻 Predefined standard stream objects

Defined in header `<iostream>`

- *cin* *wcin*   reads from the standard C input stream stdin
- *cout* *wcout* writes to the standard C output stream stdout
- *cerr* *wcerr* writes to the standard C error stream stderr, unbuffered
- *clog* *wclog* writes to the standard C error stream stderr

🦻 Typedefs 

The following typedefs for common character types are provided:

```cpp
typedef basic_ios<char>                ios;
typedef basic_ios<wchar_t>            wios;
 
typedef basic_streambuf<char>     streambuf;
typedef basic_streambuf<wchar_t> wstreambuf;
typedef basic_filebuf<char>         filebuf;
typedef basic_filebuf<wchar_t>     wfilebuf;
typedef basic_stringbuf<char>     stringbuf;
typedef basic_stringbuf<wchar_t> wstringbuf;
typedef basic_syncbuf<char>         syncbuf;
typedef basic_syncbuf<wchar_t>     wsyncbuf;
 
typedef basic_istream<char>         istream;
typedef basic_istream<wchar_t>     wistream;
typedef basic_ostream<char>         ostream;
typedef basic_ostream<wchar_t>     wostream;
typedef basic_iostream<char>       iostream;
typedef basic_iostream<wchar_t>   wiostream;
 
typedef basic_ifstream<char>       ifstream;
typedef basic_ifstream<wchar_t>   wifstream;
typedef basic_ofstream<char>       ofstream;
typedef basic_ofstream<wchar_t>   wofstream;
typedef basic_fstream<char>         fstream;
typedef basic_fstream<wchar_t>     wfstream;
 
typedef basic_istringstream<char>     istringstream;
typedef basic_istringstream<wchar_t> wistringstream;
typedef basic_ostringstream<char>     ostringstream;
typedef basic_ostringstream<wchar_t> wostringstream;
typedef basic_stringstream<char>       stringstream;
typedef basic_stringstream<wchar_t>   wstringstream;
 
typedef basic_osyncstream<char>     osyncstream;
typedef basic_osyncstream<wchar_t> wosyncstream;
```

## ==⚡ C-style IO (C Standard I/O)

C++ also includes the input/output functions defined by C, such as std::fopen, std::getc, etc.

The C I/O subset of the C++ standard library implements C-style stream input/output operations. The `<cstdio>` header provides generic file operation support and supplies functions with narrow and multibyte character input/output capabilities, and the `<cwchar>` header provides functions with wide character input/output capabilities.

C streams are objects of type `std::FILE` that can only be accessed and manipulated through pointers of type `std::FILE*` (Note: while it may be possible to create a local object of type std::FILE by dereferencing and copying a valid `std::FILE*`, using the address of such copy in the I/O functions is undefined behavior). Each C stream is associated with an external physical device (file, standard input stream, printer, serial port, etc).

C streams can be used for both unformatted and formatted input and output. They are locale-sensitive and may perform wide/multibyte conversions as necessary. Unlike C++ streams, where each stream is associated with its own locale, all C streams access the same locale object: the one most recently installed with std::setlocale.

Besides the system-specific information necessary to access the device (e.g. a POSIX file descriptor), each C stream object holds the following:

1) Character width: unset, narrow or wide
2) Buffering state: unbuffered, line-buffered, fully buffered.
3) The buffer, which may be replaced by an external, user-provided buffer.
4) I/O mode: input, output, or update (both input and output).
5) Binary/text mode indicator.
6) End-of-file status indicator.
7) Error status indicator.
8) File position indicator (an object of type std::fpos_t), which, for wide character streams, includes the parse state (an object of type std::mbstate_t).
9) (C++17) Reentrant lock used to prevent data races when multiple threads read, write, position, or query the position of a stream.


## ==⚡ iostream & file
- [Input/output library](https://en.cppreference.com/w/cpp/io#Stream-based_I.2FO)
- [std::basic_fstream](https://en.cppreference.com/w/cpp/io/basic_fstream)
- https://docs.microsoft.com/zh-cn/cpp/standard-library/iostream
- https://docs.microsoft.com/zh-cn/cpp/standard-library/fstream

C++ 两个 I/O 库，现代的基于流的 Stream-based I/O，以及兼容的 C-style I/O。

基于流的 I/O，由高度抽象的 ios_base -> basic_ios 类型作为文件流、内存流或其它流的接口适配。再了继承生成 basic_ostream、basic_istream、basic_iostream 等一系列的明确输入或输出方向的流对象。再按具体流设备的差异，实现各种不同的流对象类型，如下：

- File I/O implementation `<fstream>`

    - basic_filebuf 
    - basic_ifstream
    - basic_ofstream
    - basic_fstream
 
- String I/O implementation `<sstream>`

    - basic_stringbuf
    - basic_istringstream
    - basic_ostringstream
    - basic_stringstream

- Array I/O implementations `<strstream>`

    - strstreambuf 已经在 C++98 标准弃用
    - istrstream 已经在 C++98 标准弃用
    - ostrstream 已经在 C++98 标准弃用
    - strstream 已经在 C++98 标准弃用


在 (since C++11) 引用 `<iostream>` 头文件后，相当引用了以下四个：

    #include <ios>
    #include <streambuf>
    #include <istream>
    #include <ostream>

基本流对象 `<iostream>` 定义了标准的输入输出流：

| 标准流对象 | 流对象类型 | 说明    |
| :-------  | :-------  | :-------  |
| std::cin  | istream   | standard input |
| std::cout | ostream   | standard output |
| std::cerr | ostream   | standard error |
| std::clog | ostream   | standard log |
| std::wcin | wistream  | standard input |
| std::wcout| wostream  | standard output |
| std::wcerr| wostream  | standard error |
| std::wclog| wostream  | standard log |

这些标准流对象的基础类型：

    typedef basic_istream<char>         istream;
    typedef basic_istream<wchar_t>     wistream;
    typedef basic_ostream<char>         ostream;
    typedef basic_ostream<wchar_t>     wostream;
    typedef basic_iostream<char>       iostream;
    typedef basic_iostream<wchar_t>   wiostream;

在控制台程序中，cin 和 cout 可以用来在字符界面输入输出。

基本文件流 `<fstream>` 定义了：

| 流对象类型 | 基础类型  |
| :------   | :------   |
| basic_filebuf | 实现低层文件设备 |
| basic_ifstream| 实现高级文件流输入操作 |
| basic_ofstream| 实现高级文件流输出操作 |
| basic_fstream | 实现高级文件流输入输出操作 |

类型定义 Typedefs：

| 流对象类型 | 基础类型  |
| :------   | :------   |
| filebuf   | basic_filebuf<char>   |
| wfilebuf  | basic_filebuf<wchar_t>    |
| ifstream  | basic_ifstream<char>  |
| wifstream | basic_ifstream<wchar_t>   |
| ofstream  | basic_ofstream<char>  |
| wofstream | basic_ofstream<wchar_t>   |
| fstream   | basic_fstream<char>   |
| wfstream  | basic_fstream<wchar_t>    |

基本文件流对象：

| class     | 默认模式  |
| :-------- | :-------- |
| ofstream  | ios::out  |
| ifstream  | ios::in   |
| fstream   | ios::in or ios::out   |

常用文件流模式：

| 文件模式      | 说明    |
| :-------- | :-------- |
| ios::in   | 读取    |
| ios::out  | 写入    |
| ios::binary| 二进制  |
| ios::ate  | 初始化读写游标到文件末端 at end   ，默认会在文件开头|
| ios::app  | 附加内容 append   |
| ios::trunc| 截断清空文件，如果文件存在 |

读写操作的数据由读写游标位置决定，默认是文件开头 ios::beg：

| 游标位置  | 说明    |
| :-------- | :-------- |
| ios::beg  | 在文件开头 |
| ios::cur  | 在当前位置 |
| ios::end  | 在文件结尾 |


文件状态标志检查：

- bad() 检查文件操作是否失败；
- fail() 同 bad() 并且包括文件格式错误等，如试图读取数值时得到字符；
- eof() 检查是不否读取到了文件末尾；
- good() 一般状态检查，注意和 bad() 并不是相反关系；
- clear() 重置状态标记；


文件读写操作示范：

```cpp
#include <iostream>
#include <fstream>

using namespace std;

int main () {
  ofstream myfile;
  myfile.open ("example.txt");
  myfile << "Writing this to a file.\n";
  myfile.close();
  return 0;
}
```


binary 文件读取：

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main () {
  streampos size;
  char * memblock;

  ifstream file ("file-binary.cpp.exe", ios::in|ios::binary|ios::ate);
  if (file.is_open())
  {
    size = file.tellg();
    memblock = new char [size];
    file.seekg (0, ios::beg);
    file.read (memblock, size);
    file.close();

    cout << "the entire file content is in memory: " << size;

    delete[] memblock;
  }
  else cout << "Unable to open file";
  return 0;
}
```


文本文件读写：

```cpp
#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int write (string file) {
    try
    {
        fstream myfile (file, ios::app|ios::ate);
        // myfile.open (file, ios::app);
        myfile.exceptions(myfile.failbit);
        int size = myfile.tellg();
        myfile.seekg (0, ios::beg);
        myfile << "// write comments by myself\n";
        myfile.close();
        cerr << "done!" << endl;
        return size;
    } catch (const std::ios_base::failure& e) {
        std::cout << "Caught an ios_base::failure.\n"
                  << "Error code: " << e.code().value() 
                  << " (" << e.code().message() << ")\n"
                  << "Error category: " << e.code().category().name() << '\n';

    } catch (exception const& ex) {
        cerr << "Exception: " << ex.what() << endl;
        return -1;
    }
    return 0;
}

int read(string file)
{
    string line;
    ifstream myfile (file, ios::ate);
    int size = myfile.tellg();
    myfile.seekg (0, ios::beg);
    if (!myfile.is_open())
    {
        cout << "Unable to open file: " << file; 
        return 0;
    }
    while ( getline (myfile, line) )
    {
        cout << line << '\n';
    }
    myfile.close();
    return size;
}

int main()
{
    string file = "../src/file-text.cpp";
    cout << write(file) << endl;
    cout << read(file) << endl;
}
```


## ==⚡ stringstream 字符串流

用于文件内容读取，并快速连接字符串：

```cpp
string Read(string fileName)
{
    string line;
    stringstream ss;
    ifstream file (fileName, ios::ate); // position at end for size
    int size = file.tellg();
    file.seekg (0, ios::beg); // position at beginning of content
    if (!file.is_open()) return "Unable to open file: " + fileName;
    while (getline (file, line))
    {
        ss << line;
    }
    file.close();
    return ss.str();
}
```

Two specializations for common character types are also defined:

Defined in header `<sstream>`

    |      Type      |          Definition          |
    |----------------|------------------------------|
    | istringstream  | basic_istringstream<char>    |
    | wistringstream | basic_istringstream<wchar_t> |
    | ostringstream  | basic_ostringstream<char>    |
    | wostringstream | basic_ostringstream<wchar_t> |
    | stringstream   | basic_stringstream<char>     |
    | wstringstream  | basic_stringstream<wchar_t>  |


🦻 String I/O implementation
Defined in header `<sstream>`
- *basic_stringbuf* implements raw string device (class template)
- *basic_istringstream* implements high-level string stream input operations (class template)
- *basic_ostringstream* implements high-level string stream output operations (class template)
- *basic_stringstream* implements high-level string stream input/output operations (class template)

std::basic_stringbuf 是字符串内容容器，它负责保存数据和获取数据。

*std::basic_stringbuf* is a *std::basic_streambuf* whose associated character sequence is a memory-resident sequence of arbitrary characters, which can be initialized from or made available as an instance of *std::basic_string*.

Typical implementations of *std::basic_stringbuf* hold an object of type *std::basic_string* or equivalent resizeable sequence container directly as a data member and use it as both the controlled character sequence (the array where the six pointers of *std::basic_streambuf* are pointing to) and as the associated character sequence (the source of characters for all input operations and the target for the output).

In addition, a typical implementation holds a data member of type *std::ios_base::openmode* to indicate the status of the stream (input-only, output-only, input/output, at-end, etc).

if over-allocation strategy is used by overflow(), an additional high-watermark pointer may be stored to track the last initialized character


🦻 Member types

|  Member type   |                              Definition                              |
|----------------|----------------------------------------------------------------------|
| char_type      | CharT                                                                |
| traits_type    | Traits; the program is ill-formed if Traits::char_type is not CharT. |
| int_type       | Traits::int_type                                                     |
| pos_type       | Traits::pos_type                                                     |
| off_type       | Traits::off_type                                                     |
| allocator_type | Allocator (since C++11)                                              |


🦻 Member functions

- (constructor) constructs the string stream (public member function)
- operator= (C++11) moves the string stream (public member function)
- *swap()* (C++11) swaps two string streams (public member function)
- *rdbuf()* returns the underlying raw string device object (public member function)

字符串流实现类除了会从四个基本父类继承相应的接口方法，还提供 *str()* 内容设置和读取方法：

- Inherited from std::ios_base
- Inherited from std::basic_ios
- Inherited from std::basic_ostream
- Inherited from std::basic_istream

String operations

- *str()* gets or sets the contents of underlying string device object (public member function)



## ==⚡ stream format
- https://en.cppreference.com/w/cpp/utility/format/format
- https://en.cppreference.com/w/cpp/header/iomanip

C++ 的 `<cstdio>` 头文件定义替代 C 的 `<stdio.h>`：

```cpp
int printf( const char* format, ... ); (1)  
int fprintf( std::FILE* stream, const char* format, ... ); (2)  
int sprintf( char* buffer, const char* format, ... ); (3)  
int snprintf( char* buffer, std::size_t buf_size, const char* format, ... ); (4) (since C++11) 

const char *fmt = "sqrt(2) = %f";
int sz = std::snprintf(nullptr, 0, fmt, std::sqrt(2));
std::vector<char> buf(sz + 1); // note +1 for null terminator
std::snprintf(&buf[0], buf.size(), fmt, std::sqrt(2));
```

Formatting library (C++20)，对没错老妖怪这时才提供格式化函数库，在头文件 `<format>` 中定义，但是这个功能边 GCC 10.1 也没支持：
    
    #include <iostream>
    #include <format>
     
    int main() {
        std::format("{} {}!", "Hello", "world", "something"); // OK, produces "Hello world!"
        std::cout << std::format("Hello {}!\n", "world");
    }

示范，利用字符串打印函数 `_vsnprintf` 实现一个 format 函数：

```cpp
// #include <boost/format.hpp>
// #include <format> // C++20

#include <string>
#include <vector>
#include <cstdarg>

std::string format(const char *pszFmt, ...)
{
    std::string str;
    va_list args;
    va_start(args, pszFmt);
    {
        int nLength = _vscprintf(pszFmt, args);
        nLength += 1;  // plus 1 for null-terminator
        std::vector<char> vectorChars(nLength);
        _vsnprintf(vectorChars.data(), nLength, pszFmt, args);
        str.assign(vectorChars.data());
    }
    va_end(args);
    return str;
}

int main()
{
    char c = 'A';
    std::string str = format("c=%c", c);  // c=A
         
    int i = 10;
    str = format("i=%c", i);  // i=10
     
    double d = 1.5;
    str = format("d=%f", d);  // d = 1.500000
     
    std::string strName = ("txdy");
    str = format("I am %s", strName.c_str());  // I am txdy
}
```



C 库定义的宏 va_start 初始化 ap 变量，变量类型 va_list 是参数列表。此宏与 va_arg、va_end 搭配使用，并在它们之前调用。last_arg 是最后一个传递给函数的命名参数，即省略号之前的最后一个参数。这是一个分隔位，va_start 会将后面的变量初始化到 va_list 指定的区域。

    void va_start(va_list ap, last_arg);

C++ 中常用的输出流操纵算子都是在头文件 `<iomanip>` 中定义的。

C++ 流操纵算子

| 流操纵算子 | 作  用 |
| :-------- | :-------- |
| dec       | 以十进制形式输出整数 |
| hex       | 以十六进制形式输出整数 |
| oct       | 以八进制形式输出整数 |
| fixed     | 以普通小数形式输出浮点数 |
| scientific| 以科学计数法形式输出浮点数 |
| left      | 左对齐，即在宽度不足时将填充字符添加到右边 |
| right     | 右对齐，即在宽度不足时将填充字符添加到左边 |
| setbase(b)| 设置输出整数时的进制，b=8、10 或 16 |
| setw(w)   | 指定输出宽度为 w 个字符，或输人字符串时读入 w 个字符 |
| setfill(c)| 在指定输出宽度的情况下，输出的宽度不足时用字符 c 填充（默认情况是用空格填充） |
| setprecision(n)   | 设置输出浮点数的精度为 n。 |
| setiosflags(flag) | 将某个输出格式标志置为 1 |
| resetiosflags(flag)   | 将某个输出格式标志置为 0 |
| boolapha  | 把 true 和 false 输出为字符串 |
| *noboolalpha  | 把 true 和 false 输出为 0、1 |
| showbase  | 输出表示数值的进制的前缀 |
| *noshowbase   | 不输出表示数值的进制.的前缀 |
| showpoint | 总是输出小数点 |
| *noshowpoint  | 只有当小数部分存在时才显示小数点 |
| showpos   | 在非负数值中显示 + |
| *noshowpos| 在非负数值中不显示 + |
| *skipws   | 输入时跳过空白字符 |
| noskipws  | 输入时不跳过空白字符 |
| uppercase | 十六进制数中使用 A~E。若输出前缀，则前缀输出 0X，科学计数法中输出 E |
| *nouppercase  | 十六进制数中使用 a~e。若输出前缀，则前缀输出 0x，科学计数法中输出 e。 |
| internal  | 数值的符号（正负号）在指定宽度内左对齐，数值右对 齐，中间由填充字符填充。 |


使用这些算子的方法是将算子用 << 和 cout 连用。例如：

    cout << hex << 12 << "," << 24;

这条语句的作用是指定以十六进制形式输出后面两个数，因此输出结果是：

    c, 18

在使用非 fixed 且非 scientific 方式输出的情况下，n 即为有效数字最多的位数，如果有效数字位数超过 n，则小数部分四舍五人，或自动变为科学计 数法输出并保留一共 n 位有效数字。

在使用 fixed 方式和 scientific 方式输出的情况下，n 是小数点后面应保留的位数。


setiosflags() 算子实际上是一个库函数，它以一些标志作为参数，这些标志可以是在 iostream 头文件中定义的以下几种取值，它们的含义和同名算子一样。

| 标 志       | 作 用 |
| :-------  | :-------  |
| ios::left | 输出数据在本域宽范围内向左对齐 |
| ios::right    | 输出数据在本域宽范围内向右对齐 |
| ios::internal | 数值的符号位在域宽内左对齐，数值右对齐，中间由填充字符填充 |
| ios::dec  | 设置整数的基数为 10 |
| ios::oct  | 设置整数的基数为 8 |
| ios::hex  | 设置整数的基数为 16 |
| ios::showbase | 强制输出整数的基数（八进制数以 0 开头，十六进制数以 0x 打头） |
| ios::showpoint    | 强制输出浮点数的小点和尾数 0 |
| ios::uppercase    | 在以科学记数法格式 E 和以十六进制输出字母时以大写表示 |
| ios::showpos  | 对正数显示“+”号 |
| ios::scientific   | 浮点数以科学记数法格式输出 |
| ios::fixed    | 浮点数以定点格式（小数形式）输出 |
| ios::unitbuf  | 每次输出之后刷新所有的流 |
| ios::stdio    | 每次输出之后清除 stdout, stderr |

这些标志实际上都是仅有某比特位为 1，而其他比特位都为 0 的整数。

多个标志可以用|运算符连接，表示同时设置。例如：

    cout << setiosflags(ios::scientific|ios::showpos) << 12.34;

    +1.234000e+001

如果两个相互矛盾的标志同时被设置，如先设置 setiosflags(ios::fixed)，然后又设置 setiosflags(ios::scientific)，那么结果可能就是两个标志都不起作用。因此，在设置了某标志，又要设置其他与之矛盾的标志时，就应该用 resetiosflags 清除原先的标志。例如下面三条语句：

    cout << setiosflags(ios::fixed) << 12.34 << endl;
    cout << resetiosflags(ios::fixed) << setiosflags(ios::scientific | ios::showpos) << 12.34 << endl;
    cout << resetiosflags(ios::showpos) << 12.34 << endl;  //清除要输出正号的标志

输出结果是：

    12.340000
    +1.234000e+001
    1.234000e+001

关于流操纵算子的使用，来看下面的程序。

```cpp
#include <iostream>
#include <iomanip>
using namespace std;
int main()
{
    int n = 141;
    //1) 分别以十六进制、十进制、八进制先后输出 n
    cout << "1)" << hex << n << " " << dec << n << " " << oct << n << endl;
    double x = 1234567.89, y = 12.34567;
    //2)保留5位有效数字
    cout << "2)" << setprecision(5) << x << " " << y << " " << endl;
    //3)保留小数点后面5位
    cout << "3)" << fixed << setprecision(5) << x << " " << y << endl;
    //4)科学计数法输出，且保留小数点后面5位
    cout << "4)" << scientific << setprecision(5) << x << " " << y << endl;
    //5)非负数显示正号，输出宽度为12字符，宽度不足则用 * 填补
    cout << "5)" << showpos << fixed << setw(12) << setfill('*') << 12.1 << endl;
    //6)非负数不显示正号，输出宽度为12字符，宽度不足则右边用填充字符填充
    cout << "6)" << noshowpos << setw(12) << left << 12.1 << endl;
    //7)输出宽度为 12 字符，宽度不足则左边用填充字符填充
    cout << "7)" << setw(12) << right << 12.1 << endl;
    //8)宽度不足时，负号和数值分列左右，中间用填充字符填充
    cout << "8)" << setw(12) << internal << -12.1 << endl;
    cout << "9)" << 12.1 << endl;
    return 0;
}
```


程序的输出结果是：

    1)8d 141 215
    2)1.2346e+06 12.346
    3)1234567.89000 12.34567
    4)1.23457e+06 1.23457e+01
    5)***+12.10000
    6)12.10000****
    7)****12.10000
    8)-***12.10000
    9)12.10000

需要注意的是，setw() 算子所起的作用是一次性的，即只影响下一次输出。每次需要指定输出宽度时都要使用 setw()。因此可以看到，第 9) 行的输出因为没有使用 setw()，输出的宽度就不再是前面指定的 12 个字符。

在读入字符串时，setw() 还能影响 cin 的行为。例如下面的程序：

    #include <iostream>
    #include <iomanip>
    using namespace std;
    int main()
    {
        string s1, s2;
        cin >> setw(4) >> s1 >> setw(3) >> s2;
        cout << s1 << "," << s2 << endl;
        return 0;
    }

输入：

    1234567890↙

程序的输出结果是：

    1234,567

说明setw(4)使得读入 s1 时，只读入 4 个字符，其后的setw(3)使得读入 s2 时只读入 3 个字符。

setw() 用于 cin 时，同样只影响下一次的输入。

思考题：setw() 究竟是如何实现的，以至于能和 cout 连用来指定输出宽度？自行查看编译器所带的 iomanip 头文件，然后写一个功能和 setw() 完全相同的 mysetw()。

调用cout的成员函数

ostream 类有一些成员函数，通过 cout 调用它们也能用于控制输出的格式，其作用和流操纵算子相同，如表 3 所示。

| 成员函数  | 作用相同的流操纵算子    | 说明 |
| :-------- | :-------- | :-------- |
| precision(n)  | setprecision(n)   | 设置输出浮点数的精度为 n。 |
| width(w)  | setw(w)   | 指定输出宽度为 w 个字符。 |
| fill(c)   | setfill(c)    | 在指定输出宽度的情况下，输出的宽度不足时用字符 c 填充（默认情况是用空格填充）。|
| setf(flag)    | setiosflags(flag) | 将某个输出格式标志置为 1。 |
| unsetf(flag)  | resetiosflags(flag)   | 将某个输出格式标志置为 0。 |

setf 和 unsetf 函数用到的flag，与 setiosflags 和 resetiosflags 用到的完全相同。

这些成员函数的用法十分简单。例如下面的三行程序：

    cout.setf(ios::scientific);
    cout.precision(8);
    cout << 12.23 << endl;



# =🚩 const 的用法

C++ 中 const 关键字用来告诉编译器一个常量信息，不允许修改，但是具体用法不同，意义有多种区别。

- 可以定义常量，具有不可变性。可以节省空间，避免不必要的内存分配。

    编译器通常不为普通 const 常量分配存储空间，而是将它们保存在符号表中，这使得它成为一个编译期间的常量，没有了存储与读内存的操作，使得它的效率也很高。所以 Effective C++ & More Effective C++ 书中提到 Use const whenever possible 尽可能使用 const！

        // 定义常量，Pi 不是变量，值不可修改
        const doulbe Pi=3.14159;

        // const pointer, const data
        const char * const p = "Hello";

    const 定义常量从汇编的角度来看，只是给出了对应的内存地址，而不像 #define 一样给出的是立即数。所以，const 定义的常量在程序运行过程中只有一份拷贝，而 #define 定义的常量在内存中有若干个拷贝。

- 为函数重载提供了一个参考，const 修饰符定义常成员可以作为重载参考。

        class A
        {
            void f(int i);
            void f(int i) const;
        };

    定义 non-mutable 成员函数或叫做常成员函数，不改变对象的成员变量. 也不能调用类中任何非 const 成员函数。对于 const 类对象/指针/引用，也只能调用类的 const 成员函数。

- 便于进行类型检查，使编译器对处理内容有更多了解，消除了一些隐患。可以保护被修饰的东西，防止意外的修改，增强程序的健壮性。

        void f(const int i)
        {
            // 编译器得知道 i 是一个常量，不允许修改。
        }

- 便于进行类型检查，使编译器对处理内容有更多了解，消除了一些隐患。


具体用法示范，可以参考 Core C++ A Software Engineering Approach - Chapter 9 More on the const Keyword：

修饰一个指针或引用，表示指向一个不可修改的常量：

    const double *p1 = &pi;
    const double &r1 = pi;

修饰一个指针符号，表示只指向 pi 而不能再指向其它：

    double* const p1 = &pi;

注意 const 关键字的位置，说实在的，C++ 这种复杂性真让人头痛！

识别 const 到底是修饰指针还是指针所指的对象，有人沿着 * 号划一条线进行分辨：

- 如果是 const * 则用来修饰指针所指向的变量，即指针本身是变量；
- 如果是 * const 则是修饰指针本身，即指针本身是常量。

但更根本的方法，认识 * 单元操作符是从右到左结合，而且优先级低于，下标运算符这类一级优先符号。所以，除非使用了圆括号，* 右侧的标识符号将定义为指针。如果右侧是 const 关键字，就是定义常指针。如果 const 跑到前头那就是定义标识符号为一个常量了。

修饰一个数组，可采用如下格式：

    int const a[5]={1, 2, 3, 4, 5};
    const int a[5]={1, 2, 3, 4, 5};

用在函数上：

    void f1(const int& x);     // x is not changed by the function
    void f2(const int x);      // redundant: x is passed by value anyway
    void f3(int* const y);     // redundant: y is passed by value
    void f4(int * const *y);   // ok, pointer is passed by pointer
    void f4(const int *&y);    // ok: pointer is passed by reference

    int Array::getInt (int i) const     // Array object does not change

修饰函数返回值，表示返回一个不可修改的常量：

    const int * mallocA(){  ///const data,non-const pointer
        int *a = new int(2);
        return a;
    }

    int main()
    {
        const int *a = mallocA();
        int *b = mallocA();  //  error: invalid conversion from 'const int*' to 'int*'
        return 0;
    }


Effective C++ & More Effective C++ 总结了以下用法：

    char *p              = "Hello";  // non-const pointer, non-const data5
    const char *p        = "Hello";  // non-const pointer, const data
    char * const p       = "Hello";  // const pointer, non-const data
    const char * const p = "Hello";  // const pointer, const data


    class Widget { ... };
    void f1(const Widget *pw);      // f1 takes a pointer to a
                                    // constant Widget object
    void f2(Widget const *pw);      // so does f2


    class String {
    public:
      ...
      // operator[] for non-const objects
      char& operator[](int position)
      { return data[position]; }

      // operator[] for const objects
      const char& operator[](int position) const
      { return data[position]; }
    private:
      char *data;
    };

和常量转型有关的是 const_cast。


FAQ 11.13 Does int& const x make sense?

No, it doesn't. Since a reference is always bound to the same referent, the const is superfluous and possibly
confusing.

```cpp
class Fred { };
void f(Fred& const a);                               <-- 1
void g(const Fred& const a);                         <-- 2
void sample(Fred& a)
{
  Fred& const b = a;                                 <-- 3
  const Fred& const c = a;                           <-- 4
}
```

(1) Wrong; should be f(Fred& a);
(2) Wrong; should be g(const Fred& a);
(3) Wrong; should be Fred& b = a;
(4) Wrong; should be const Fred& c = a;


# =🚩 operators 运算符重载
- https://www.runoob.com/cplusplus/input-output-operators-overloading.html

C++ 允许在同一作用域中的某个函数和运算符指定多个定义，分别称为函数重载和运算符重载。

在同一个作用域内，可以声明几个功能类似的同名函数，但是这些同名函数的参数列表必须不同，但不能仅通过返回类型的差别来`重载函数`。

操作符重载方式有三种，类成员函数、友元函数、全局函数。使用类成员函数实现操作符重载，其函数列表中隐含了第二参数为 this 指针，不在参数列表中编写出来。如果使用码友元函数或全局函数，则需要在参数列表中增加这个隐含的参数，增加的这个参数可以用来代替 this 指针。

运算符重载 5 种基本类型：

- overloaded operator;
- user-defined conversion function;
- allocation function;
- deallocation function;
- user-defined literal.

罗列如下：

    operator op

    operator type

    operator new
    operator new []

    operator delete
    operator delete []  

    operator "" suffix-identifier (since C++11) 

其中 `op` 可以以下 38 个操作符号之一：

    + - * / % ˆ & | ~ ! = < > += -= *= /= %= ˆ= &= |= << >> >>= <<= == != <= >= && || ++ -- , ->* -> ( ) [ ] 

其中 `operator` 是运算符重载关键字，事实上可以将运算符重载当作函数来看待，即每个重载的运算就是一个对应的函数。

| 表达式  |     作为成员函数     | 作为非成员函数  |                              示例                             |
|---------|----------------------|-----------------|---------------------------------------------------------------|
| @a      | (a).operator@( )     | operator@(a)    | !cin 等价 cin.operator!()                                     |
| a@b     | (a).operator@(b)     | operator@(a, b) | cout << 42 等价 cout.operator<<(42)                           |
| a=b     | (a).operator=(b)     | 不可用          | string s; s = "abc"; 等价 s.operator=("abc")                  |
| a(b...) | (a).operator()(b...) | 不可用          | random_device r; auto n = r(); 等价 r.operator()()            |
| a[b]    | (a).operator[](b)    | 不可用          | map<int, int> m; m[1] = 2; 等价 m.operator[](1)               |
| a->     | (a).operator->( )    | 不可用          | auto p = make_unique<S>(); p->bar() 等价 p.operator->()       |
| a@      | (a).operator@(0)     | operator@(a, 0) | vector<int>::iterator i = v.begin(); i++ 等价 i.operator++(0) |

此表中，@ 是所有匹配运算符的占位符号：

- 前缀运算符即是 @a；
- 后缀运算符即是 a@，除 `->` 外；
- 中间点位的运算符即是 a@b，除 `=` 外；


点运算 . .* 和 arithmetic if (?:), size (sizeof), typeid, and :: 等是不能重载的 C++ 运算符。

除内置运算符，built-in operators，重载运算符都可以用函数式调用：

    std::string str = "Hello, ";
    str.operator+=("world");                       // same as str += "world";
    operator<<(operator<<(std::cout, str) , '\n'); // same as std::cout << str << '\n';
                                                   // (since C++17) except for sequencing

在 C++ 中，标准库本身对左移运算符 << 和右移运算符 >> 进行了重载，使其能够用于不同数据的输入输出，但是输入输出的对象只能是 C++ 内置的数据类型，例如 bool、int、double 和标准库所包含的类类型，例如 string、complex、ofstream、ifstream 等。

习惯上，输入输出运算符号是 cin >> 和 cout << 这样使用的，实现自己的输入输出运算符的重载，通常使用友元函数的方式来实现，如果使用成员函数来重载会出现 `obj << cout;` 这种不自然的代码。

示范实现 <<、>>、[] 以及 () 强制类型转换运算符重载：

```cpp
#include <string>
#include <cstdarg>
#include <iostream>

using namespace std;

/*-------------------------------*/
// Header            
/*-------------------------------*/
class Base
{
public:
    const char * text = "Test content...";
    Base(const char *);
    void operator=(Base &b);
    const char & operator[](int) const;
    friend ostream & operator<<(basic_ostream<char> &out, Base & b);
    ostream & operator<<(basic_ostream<char> &out);
    operator const char *(); // 重载强制类型转换运算符： const char *
};


/*-------------------------------*/
// Implementation            
/*-------------------------------*/
Base::Base(const char * value)
{
    this->text = value;
}

void Base::operator=(Base &b)
{
    this->text = b.text;
}

Base::operator const char *()
{
    return this->text;
}

const char & Base::operator[](int index) const
{
    return this->text[index];
}

// The problem is that you define it inside the class, which
// a) means the second argument is implicit (this) and
// b) it will not do what you want it do, namely extend std::ostream.
ostream & Base::operator<<(basic_ostream<char> &out)
{
    return out << "Base.text = " << this->text;
}


ostream & operator<<(basic_ostream<char> &out, Base & b)
{
    return out << "Base.text = " << b.text;
}


int main(int argc, char *argv[])
{
    Base a{"Some text..."};
    Base b{"More text..."};
    b = a;
    std::cout << "after operator<< : " << a << std::endl;
    std::cout << "after operator = : " << b << std::endl;
    std::cout << "after operator[1]: " << b[1] << std::endl;
    a << std::cout << " <--- use operator << as member function" << endl;
    std::cout << "after typecast: " << (const char *)b << endl;
    std::cout << "another typecast: " << b.operator const char *() << endl;
}
```

另外，注意一下 operator<< 如果以成员函数的方式实现，这样做的话，表示需要通过成员函数调用的方式来使用输出操作符，也就是要在 << 的左侧写类实例。为了让 << 运算符更符合常规表达，使用 friend 函数实现。

展示了强制类型转换运算符的两种方式，一种是以 C 风格的类型转换，另一种是成员函数方式的类型转换，语法看起来真的很怪诞！


## ==⚡ operator BoolType
- https://www.sfml-dev.org/documentation/2.5.1/Packet_8hpp_source.php
- user-defined conversion function https://en.cppreference.com/w/cpp/language/cast_operator

从 SFML 源代码中学习到一种类型转换重载，非常巧妙：

- 先定义一个函数类型 BoolType，这里不需要调用它，只需要它起到类型定义的作用；
- 重载一个类型转换运算符 cast operator，通过函数引用或 NULL 来充当布尔值的 True 或 False 两种状态；

```C++
#include <iostream>

using namespace std;

class Test {
    // A bool-like type that cannot be converted to integer or pointer types
    typedef bool (Test::*BoolType)(std::size_t);

    int _i;
public:
    Test(int i): _i(i) {}

    bool checkSize(std::size_t size) 
    {
        cout << "    bool checkSize(std::size_t size);" << endl;
        return size > 0;
    }

    operator BoolType() const 
    {
        cout << "    operator BoolType() const;" << endl;
        return _i > 0? &Test::checkSize : NULL;
    }
};

int main()
{
    Test t(1);
    if(t){
        cout << "    True" << endl;
    }else{
        cout << "    False" << endl;
    }
}
```

输出：

    operator BoolType() const;
    True


## ==⚡ operator[] in pairs

FAQ 23.05 Why do subscript operators usually come in pairs?

为何下载运算符总是成对地重载？

通常是因为访问元素时有无修改约束两种形式，const 和 non-const 两种形式，带 const 版本返回元素的 const 引用或值，约束用户，保护数据内容不被改动。

而 non-const 版本返回一般引用，没有 const 约束。相反，由于常量下标运算符通过常量引用返回元素，类似于 b[3]的内容不能出现在赋值运算符的左侧。

```cpp
#include <iostream>
#include <stdexcept>

using namespace std;

class Fred { };
class Array {
public:
  Fred&       operator[] (unsigned i)       throw(out_of_range);
  const Fred& operator[] (unsigned i) const throw(out_of_range);
protected:
  enum { capacity_ = 100 };
  Fred data_[capacity_];
};

Fred& Array::operator[] (unsigned i) throw(out_of_range)
{
  if (i >= capacity_) throw out_of_range("Array::operator[]");
  return data_[i];
}
const Fred& Array::operator[] (unsigned i) const throw(out_of_range)
{
  if (i >= capacity_) throw out_of_range("Array::operator[] const");
  return data_[i];
}

void sample(Array& a, const Array& b)
{
  Fred x, y;
  x = a[3];                               // <-- (1) OK: Get a[3]
  a[3] = y;                               // <-- (2) OK: Change a[3]
  x = b[3];                               // <-- (3) OK: Get b[3]
  #ifdef GENERATE_ERROR
    b[3] = y;                             // <-- (4) Error: b[3] cannot be changed
  #endif
}

int main()
{
  Array a, b;
  sample(a, b);
}
```

## ==⚡ operator=

FAQ 24.01 What should assignment operators return?

Assignment operators should generally return `*this` by reference. This means that they adhere to the same convention used by the built-in types by allowing assignment to be used as an expression rather than simply as a statement. This allows assignment to be cascaded into larger expressions. An example follows.

```cpp
#include <iostream>
using namespace std;
class Fred {
public:
  Fred(int i=3) throw();
  Fred& operator= (const Fred& x) throw();
  friend int operator== (const Fred& a, const Fred& b) throw();
protected:
  int i_;
};

Fred::Fred(int i) throw() : i_(i) { }

Fred& Fred::operator= (const Fred& x) throw()
{ i_ = x.i_; return *this; }

int operator== (const Fred& a, const Fred& b) throw()
{ return a.i_ == b.i_; }

int main()
{
  Fred x, y, z;
  x = y = 5;                                      // <-- 1
  if ((z = x) == y)                               // <-- 2
    cout << "z (which was assigned from x) is equal to y\n";
}
```

(1) Result of y = 5 used as an expression
(2) Result of z = x used as an expression


## ==⚡ operator+= operator+ operator=

FAQ 23.06 What is the most important consideration for operators such as +=, +, and =?

重要 += + = 这些运算符要注意什么？当然是 intuition & expectations 尊重用户意图与期待。

在重载了这些运算符号的类型中，a += b 应该 a = a + b 具有一致的功能。对于内置类型的其他标识，也可以做出类似的解析。

类似地，一个类实现了下标运算符 operator[] 和 operator+ 接收一个右侧的参数 i，那么 `p[i]` 和 `*(p+i)` 应该功能一致。

执行这些规则的一种方法是使用相应的可变运算符实现构造性二元运算符，这也简化了维护。

One way to enforce these rules is to implement constructive binary operators using the corresponding mutative operators. This also simplifies maintenance. For example, the code below implements + using +=.

例如，下面的代码使用 operator+= 实现 operator+ 运算符。

```cpp
class Fred {
public:
  friend Fred operator+ (const Fred& a, const Fred& b) throw();
  Fred& operator+= (const Fred& b) throw();
};
Fred operator+ (const Fred& a, const Fred& b) throw()
{
  Fred result = a;
  result += b;
  return result;
}
```

注意，有时不重载 operator+= 或 operator-= 这类运算符，而是重载 operator+ 可以实现更高效的运算操作。


## ==⚡ prefix vs postfix operator++

FAQ 23.07 How are the prefix and postfix versions of operator++ distinguished?

编译器是怎么区分自增、自减运算符使用中的前后位置的呢？

```cpp
#include <iostream>

using namespace std;

class Increasement {
public:
  void operator++ ()    throw();
  void operator++ (int) throw();
};

void Increasement::operator++ ()    throw() { cout << "prefix: ++i\n"; }
void Increasement::operator++ (int) throw() { cout << "postfix: i++\n"; }

int main()
{
  Increasement i;
  ++i;
  i++;
}
// The output is
// prefix: ++i
// postfix: i++
```

两个版本的 operator++ 运算符很相似，前缀版没有参数，后缀版有一个参数。


## ==⚡ operator() for Matrix

FAQ 23.09 How can a Matrix-like class have a subscript operator that takes more than one subscript?

方括号运算符通常只接收一个下标参数，这是习惯用法。对于矩阵，操作它的元素有一个坐标，需要指定多个参数来定位。重载圆括号运算是个不错的主意：

```cpp
#include <iostream>
#include <stdexcept>

using namespace std;

class Matrix {
public:
  double& operator() (unsigned row, unsigned col) throw(out_of_range);
  double  operator() (unsigned row, unsigned col) const throw(out_of_range);
private:
  enum { rows_ = 100, cols_ = 100 };
  double data_[rows_ * cols_];
};
inline double& Matrix::operator() (unsigned row, unsigned col)
throw(out_of_range)
{
  if (row >= rows_ || col >= cols_)
    throw out_of_range("Matrix::operator()");
  return data_[cols_*row + col];
}
inline double Matrix::operator() (unsigned row, unsigned col) const
throw(out_of_range)
{
  if (row >= rows_ || col >= cols_)
    throw out_of_range("Matrix::operator()");
  return data_[cols_*row + col];
}

int main()
{
  Matrix const n;
  Matrix m;
  m(5,8) = 106.15;
  cout << n(5,8) << endl << m(5,8) << endl;
}
```

注意成对出现的运算符重载，分别有 const 版本和 non-const 版本，前者用于返回 const 引用防止用户修改原始数据，所以这种形式的返回值不能作为左值。

而不带 const 的版本，返回的是一般引用，可以用作左值，供赋值使用，如代码中的 m。


# =🚩 OOP 面向对象编程

面向对象三大特征： 

- 封装：Encapsulation，封装和隐藏
    - ● 缘由：使用者对定义的属性(成员变量)直接操作会导致数据的错误、混乱或安全性问题
    - ● 办法：隐藏不需要对外提供的实现细节，使用者只能通过事先定制好的方法来访问
    - ● 实现：将属性声明为私有的，再提供公共的方法实现对该属性的操作

- 继承：Inheritance
    - ● 多个类中存在相同属性和行为时，将这些内容抽取到一个新类中，多个类无需再定义这些属性和行为，只要继承那个类即可
    - ● 子类会把父类除构造器之外的所有信息给继承下来
    - ● 子父类的概念是相对的（子类也可以作为其他类的父类，父类也可以作为其他类的子类）
    - ● 子类可以有自己特有属性和方法也可以重写父类定义的方法
    - ● 子类是父类的扩展
    - ● 语法： 修饰符  class  类名(子类)  extends  类名(父类){ }
    - ● 作用 ：提高了代码的复用性，让类与类之间产生了关系，提供了多态的前提

- 多态：Polymorphism，指一个事物存在多种形态
    - 表现形式：
        - ● 方法的重载和重写 overload & override
        - ● 对象的多态性：父类的引用指向子类的对象  如：Person p1 = new Woman();
    - 多态的前提：
        - ● 继承关系
        - ● 子类重写了父类的方法
    - 多态在程序运行分为： （编译时“看左边”，运行时“看右边”）
        - ● 编译状态 ：关注是父类。子类特有的属性和方法不能被编译通过
        - ● 运行状态 ：关注的是子类（真正对象的实体，子类的对象，那么执行的方法就是子类重写的方法）

抽象是人类解决问题的一种高度思维能力，抽象在 OOP 随处可见，而抽象类和接口则一集中体现的两个典型。

继承过后，子类变得越来越具体，父类则更一般，更通用。有时将父类设计得非常抽象，以至于它没有具体的实例，这样的类叫做抽象类。

抽象类：（可以定义和普通类完全一样的内容）
- ● 语法：`privilege abstract class name { }`
- ● 不能被实例化，用来被继承。子类必须重写父类的抽象方法，才能被实例化
- ● 有构造器(所以的类都有构造器)
- ● 抽象类中不一定有抽象方法
抽象方法：（只有方法的声明，没有方法的实现。在定义抽象方法时没有方法体和 { }，结尾分号结束）
- ● 语法：`privilege abstract void/type name(arguments);`
- ● 抽象方法所在的类一定是抽象类 
- ● 子类如果继承的是抽象的父类（有抽象方法），那么子类必须重写父类的所有抽象方法或者子类也是一个抽象类
- ● 若子类继承抽象类，并重写所有的抽象方法，则此类是一个“实体类”，即可以实例化

接口：interface 是一种特殊的抽象类，是抽象方法和常量值定义的集合，没有具体的实现。
- ● 接口类语法：`privilege interface name { }`
- ● 常量(成员变量)语法：`public static final type NAME = value;`（其中 public static final 可以省略，为默认）
- ● 抽象方法语法：`public abstract void/type name(arguments)`（其中 public abstract 可以省略，为默认）
- ● 实现接口语法：`privilege class name implements interface_name { }`（实现多个接口，接口名称之间使用“，”分隔）
- ● 实现类可以继承父类也可以实现接口语法：`privilege class Derived extends BaseClass implements interface_name { }`
- ● 对象的引用语法：`interface_name name = new Derived()` 接口与实现类之间也存在多态性

类形声明信息和定义一般分开编写，有了声明信息编译器就知道如何使用这个类形。

声明时注意花括号后面的分号，类型声明它就是一条语句，就像声明函数一样：

```cpp
// Declarations
class Grace
{
public:
    void tryAccess(House h);
protected:
    int age;
private:
    char *secret;
};


// Implementations
void Grace::tryAccess(House h)
{
    cout << "Grace is " << h.outdoor << "\n";
    cout << "Grace is " << h.indoor << "\n";
    cout << "Grace is " << h.bedroom << "\n";
}
```


## ==⚡ Constructors & Destructors

C++ 提供构造函数来处理对象的初始化，从内存删除对象时调用析构函数进行清理，回收所占用内存。

构造函数名字与类名相同，无返回类型。在一个类中可以有多个构造函数，它们构成了函数的重载。

构造函数参数列表后可以使用初始化列表 *Initializer list*，即圆括号后跟着冒号后面可以对类成员进行初始化，使用逗号分隔。

如果没有显式定义构造函数，编译器会隐式提供定义一个无参的默认构造函数，它不对成员属性做任何操作。如果显式定义了构造函数，系统就不会创建默认构造函数。

构造执行顺序：先执行父类的构造函数，再执行子类构造函数。这是因为，子类型构建于父类型的基础之上，子类型必然是父类的一种，而父类型却不是子类型。

子类如果没有对父类构造函数进行显式调用，则会由编译器提供默认构造函数的调用。并且只能调用直接父类的构造函数，不能跨级调用，除非使用 *virtual* 虚拟继承方式。

与构造函数相反, 析构函数是在对象被撤销时被自动调用, 调用顺序也相反，用于对成员撤销时的一些清理工作回收内存。

析构函数具有以下特点：

- ■ 析构函数函数名与类名相同, 紧贴在名称前面用波浪号 ~ 与构造函数进行区分, 例如: ~Point()；
- ■ 构造函数没有返回类型, 也不能指定参数不能被重载，因此析构函数只能有一个；
- ■ 从内存删除对象时，析构函数被自动调用，也可以显式调用析构函数以释放对象中动态申请的内存。

当用户没有显式定义析构函数时，编译器同样会为对象生成一个默认的析构函数。

但默认生成的析构函数只能释放类的普通数据成员所占用的空间, 无法释放通过 *new* 或 *malloc* 进行申请的空间, 因此有时我们需要自己显式的定义析构函数对这些申请的空间进行释放, 避免造成内存泄露。

初始化表达与赋值表达式的区别：初始化发生在类对象定义时指定的 = 号，在其它位置出现的 = 号都是赋值操作，而非初始化。

```cpp
#include <iostream>
#include <string>
#include <stdexcept>

using namespace std;

class BasicError: public runtime_error 
{
public:
    ~BasicError() 
    { cout << "       BasicError dtor : " << what() << endl; }
    BasicError(): runtime_error("Default") 
    { cout << "BasicError default ctor : " << what() << endl; }
    BasicError(string str): runtime_error(str) 
    { cout << "BasicError string ctor : " << str << endl; }    
};

class SomeError: public BasicError 
{
public:
    ~SomeError() 
    { cout << "        SomeError dtor : " << what() << endl; }
    SomeError(): BasicError("Default") 
    { cout << "SomeError default ctor : " << what() << endl; }
    SomeError(char *str): BasicError(str) 
    { cout << "  SomeError char* ctor : " << str << endl; }
    SomeError(string str): BasicError(str) 
    { cout << "SomeError string* ctor : " << str << endl; }
    SomeError(const SomeError &other): BasicError(other) 
    { cout << "   SomeError copy ctor : " << other.what() << endl; }
    void operator= (SomeError &other) 
    { cout << "   SomeError operator= : " << this << " <= " << &other << endl; }
};


void doAction()
{
    throw SomeError(string("Some message"));
}

int main(int argc, char **argv) try
{
    SomeError sd;     // default ctor.
    SomeError sc(sd); // copy ctor.
    SomeError *se = new SomeError(string("XYZ")); // initialized, string* ctor
    SomeError se2((char*)"ABC"); // char* ctor
    se2 = *se; // operator=
    cout << "================doAction===============" << endl;
    doAction();
}
catch (exception &ex)
// catch (exception ex)
{
    cout << ex.what() << endl;
    // cout << string("ABC")+to_string(123);
}
```

Output:

    BasicError string ctor : Default
    SomeError default ctor : Default
       SomeError copy ctor : Default
    BasicError string ctor : XYZ
    SomeError string* ctor : XYZ
    BasicError string ctor : ABC
      SomeError char* ctor : ABC
       SomeError operator= : 0x60fdc0 <= 0xd22750
    ================doAction===============
    BasicError string ctor : Some message
    SomeError string* ctor : Some message
            SomeError dtor : ABC
           BasicError dtor : ABC
            SomeError dtor : Default
           BasicError dtor : Default
            SomeError dtor : Default
           BasicError dtor : Default
    Some message
            SomeError dtor : Some message
           BasicError dtor : Some message


## ==⚡ Inheritances 继承

继承是面向对象编程的基本能力之一，通过继承，可以直接复用现有代码。C++ 的基本继承方式有单继承、多继承、虚继承，涉及内存布局的 Polymorphism 多态特性。

几乎不使用 protected 或 private 继承，通常使用 public 继承，继承权限修饰遵循以下几个规则：

- 公有继承 Public 保持基类原有的访问权限；
- 保护继承 Protected 则将基类的公有权限降级为保护；
- 私有继承 Private 则将基类的所有权限降级为私有；

所谓局部类 local class 就是定义在一个函数内部的类，这个类只能在这个函数内部使用，例子：

```cpp
int main()
{
    class c4
    {
    public:
        int a;
        void foo() {a = 4;}
    };
 
    class c4 ff;
    ff.foo();
    cout << ff.a << endl;
    return 0;
}
```

所谓嵌套类，即在类内部定义的类，根据类的访问修饰符决定外部代码是否可以访问：

```cpp
#include <cstdio>
#include <typeinfo>

class Base
{
    class _neasted
    {
        const char *data = "some secret";
    public:
        void test()
        { 
            printf("%s\n", typeid(*this).name()); 
        };
    };

public:
    Base()
    {
        _neasted _n;
        neasted n;
        printf("Construct %s\n", typeid(*this).name());
        // error: 'char Base::_neasted::data []' is private within this context
        // printf("--> Test _neasted: %s\n", _n.data);
        printf("--> Test neasted: %s\n", n.data);
    }

    ~Base()
    {
        printf("Destructure of %s\n", __FUNCTION__);
    }
    
    class neasted
    {
    public:
        const char *data = "some string";
        void test()
        { 
            printf("%s\n", typeid(*this).name()); 
        }
    };
};


int main()
{
    Base();

    // error: 'class Base::_neasted' is private within this context
    // Base::_neasted _n;
    Base::neasted n;
    printf("%s:\n", __FUNCTION__);
    printf("--> Test neasted: %s\n", n.data);

    return 0;
}
```



## ==⚡ Friend & Access Control

C++ 使用 public protected private 三级访问控制权，结构体默认 public 访问权，类默认 private 访问权。

```C++
#include <iostream>

using namespace std;

class Base
{
private:
    int nPrivate;
public:
    int nPublic;
protected:
    int nProtected;
};

class Derived: public Base // public 继承
{
    void AccessTest()
    {
        nPublic = 1;    // Ok 可以访问 public 继承的基类 protected 成员
        nProtected = 1; // Ok 可以访问 public 继承的基类 protected 成员
        //nPrivate = 1; // No 不能访问 public 继承的基类 private 成员
        Derived d;
        // d.nProtected = 1; // Ok 可以从外部访问 public 成员
        // d.nProtected = 1; // No 不能从外部访问 protected 成员
        // d.nPrivate = 1;   // No 不能从外部访问 private 成员
    }
};

int main()
{
    Derived s;
    s.AccessTest();
    return 0;
}
```

Table 14.1 Varieties of Inheritance 展示了各种基本继承关系中父类成员在子类中的访问权：

|  Base's Property   | Public Inheritance | Protected Inheritance | Private Inheritance |
|--------------------|--------------------|-----------------------|---------------------|
| Public members     | Public members     | Protected members     | Private members     |
| Protected members  | Protected members  | Protected members     | Private members     |
| Private members    | NO                 | NO                    | NO                  |
| Implicit upcasting | Yes                | Yes (within)          | No                  |

注意，public 继承方式是完全支持隐式转型的，即编译器会直接将子类实例变量或指针赋值给父类实例变量或指针。

友元机制允许一个类向另一个类公开其所有成员访问权的，访问权可以授予指定的函数或者类及类成员方法。

友元的声明只能出现在类声明内，通常，将友元声明成组地放在类定义的开始或结尾是个好主意。声明友元后，就表示信任友元对自身的私密数据或成员进行访问：

    class MyFiends {
        friend void set_show(int x, A &a);
        friend void B::set_show(int x, A &a);
        friend class C;
        friend int main();
    private:
        int something_for_my_friend;
    }

友元关系不可继承、不可传递、不可交换，构造函数不能作为友元，友友不分 public/proteced/private。但是为了方便文档的构建，通常应该在 public 下声明，因为文档构建时可能忽略保护、私有的成员。

例如，不可传递：

- A 类声明 B 为友元，那么只能保证 B 类可以访问 A 类的所有成员。
- B 类声明 C 为友元，也就只能保证 C 类可以访问 B 类的所有成员。
- C 类不是 A 类的友元，所以不可以访问 A 类的非公有成员。

类、成员、函数友元用法示范：

```cpp
#include <iostream>
#include <string>

using namespace std;

// Declarations
class House;
class Jack;
class Grace
{
public:
    void tryAccess(House h);
};


// Implementations
class House 
{
    friend class Jack;
    friend void Funky(House);
    friend void Grace::tryAccess(House);
public:
    string outdoor = "outside of the House.";
protected: 
    // accessible for friend
    string indoor = "inside of the House.";
private:
    // accessible for friend
    string bedroom = "inside of the Bedroom!";
};

class Jack
{
public:
    Jack(House h)
    {
        cout << "Jack is " << h.outdoor << "\n";
        cout << "Jack is " << h.indoor << "\n";
        cout << "Jack is " << h.bedroom << "\n";
    }
};

class Son: public Jack 
{
    Son(House h): Jack(h)
    {
        cout << "Jack's son is " << h.outdoor << "\n";
        // unaccessable
        // cout << "Jack's son is " << h.indoor << "\n";
        // cout << "Jack's son is " << h.bedroom << "\n";
    }
};

void Grace::tryAccess(House h)
{
    cout << "Grace is " << h.outdoor << "\n";
    cout << "Grace is " << h.indoor << "\n";
    cout << "Grace is " << h.bedroom << "\n";
}

void Funky(House h)
{
    cout << "Funky is " << h.outdoor << "\n";
    cout << "Funky is " << h.indoor << "\n";
    cout << "Funky is " << h.bedroom << "\n";
}

int main(void)
{
    House h;
    Jack j(h);
    Grace g;
    g.tryAccess(h);
    Funky(h);
    return EXIT_SUCCESS;
}
```


下面代码中，基类 B 定义了三种访问权限的成员方法，在 B 在中任一个方法中都可以调用 apple、pie、pine 三个成员方法。而 X、Y、Z 分别以三种限继承 B，X、Y、Z 类的继承方法不同，使得它们的子类对基类 B 的成员方法有不同的访问权限，但在 X、Y、Z 内不可访问的方法只有 pine 这个私有方法。N 类继承了 Z 类，由于 Z 类的私有继承使得 N 类对基类 B 的所有成员都不具有访问权限。

在类外部环境中，即 main 函数中只有 B 类及子类 X 可以访问 apple() 方法。C++ 中没有 super 或 parent 等关键字，想要调父类方法，只能以两个冒号指定父类名称及方法名 B::apple() 这种方式调用。

```cpp
#include <iostream>

class B {
    // 公有成员方法允许子类访问
    public: void apple() {
        std::cout << "B::apple() is called" << std::endl; 
    }

    // 保护成员方法不允许私有继承的子类访问
    protected: void pie() {
        std::cout << "B::pie() is called" << std::endl; 
    }

    // 私有成员方法只允许友元子类访问
    private: void pine() {
        std::cout << "B::pine() is called" << std::endl; 
    }

    friend class F; // 友元类声明
};

class X: public    B { 
    /* 公有继承不可访问基类私有方法 pine() */ 
};

class Y: protected B { 
    /* 保护继承，基类公有成员将降级为保护成员，不可访问基类私有方法 pine() */ 
};

class Z: private   B { 
    /* 私有继承将隐藏基类，不暴露给下一级代码 */ 
    // public: Z(){ B::pie(); }
};

class N: public Z { 
    // 不可访问私有继承的基类 apple() pie() pine() 
    // public: N(){ B::apple(); }
};

class F: private B { 
    // 友元类可访问基类私有方法
    public: F(){ B::pine(); }
};

int main()
{
    X x; Y y; Z z; N n; F f;
    x.apple();
    // x.pie();   // 不可外部访问保护成员
    // y.apple(); // 不可访问保护继承的基类
    // z.apple(); // 不可访问私有继承的基类
}
```


上面还将 F 类作为友元引入到 A 类中，这样在 F 类中可以访问 A 类的任意成员，就像是自己的家一样，还可以将 main 函数作为友元引入 A 类，这样在 main 方法中也像在 A 类内一样访问其私有成员。


## ==⚡ Override vs. Overwrite

C++ 中有几个常让初学者搞不清晰的术语，通过虚函数表的解析就十分明确：

- Overload 重载，是指在*同作用域*定义*同名*，但*签名不同*的函数，签名包括了参数类型、参数顺序，是否有 const 和 volatile 关键字。
- Override 覆盖，是指在*不同作用域*即在子类中定义和基类*同名*而且*同参数*、*同返回值*的函数，以覆盖*基类虚函数*，与虚函数表关联。
- Overwrite 重写，也叫重定义，是指在*不同作用域*定义和基类*同名*的函数，以实现在作用域上屏蔽同名函数。

注意，签名包括函数名称、参数类型及顺序，后缀关键字如 const 和 volatile，但是不包括返回值！重载解析中不考虑返回类型，而且在不同的作用域里声明的函数也不算是重载。

虽然，函数返回值不作为签名供编译器参考，但是，可以在函数参数列表后面，即圆括号后使用特殊关键来为编译器提供额外参考，例如使用 const 表示 non-mutable 成员函数或叫做常成员函数，否则就是 mutable 函数。常成员函数不改变对象的成员变量. 也不能调用类中任何非 const 成员函数。对于 const 类对象/指针/引用，也只能调用类的 const 成员函数。

其中，*Override* 原意是推翻重来，完全满足虚函数签名条件时，会将函数地址写入父类对应的虚函数表中，并覆盖原始记录，这就表示基类的相应虚函数版本已经从内存中消失了。静态方法不能被重写，因为 static 与 virtual 不能同时使用。子类声明重写的函数时，virtual 关键字省略，本质上都是虚函数属性。

如果签名一至，但返回值不一致，则不能通过编译：重写虚函数返回类型有差异，且不是来自基类的协变类型。所谓协变 Covariant，原意是以保持指定关系不变的方式随另一变量变化的统计数据，You jump and I jump！

重载的虚函数在内存数据布局，在打印出现来的虚函数表中出现的顺序和声明顺序是相反的。

注意，区别 *Override* 与 *Overwrite* 的不同在于，前者是后者的一种特例，而且只对虚函数有意义。前者只会条件完全满足的前提下修改虚函数表中的对应记录，从内存中抹去被覆盖的虚函数，并且其它重载方式也被隐藏。而后者，则只是用在同名不同签名的条件下，将基类的所有同名方法隐藏，不能直接调用，只能通过 Scope operator :: 或 using declarations 来间接调用。

C++11 规范引入了 *override* 和 *final* 关键字，主要作用是提示，在我们下面的代码中有没有发现什么问题呢？

    class Base {
    public:
        virtual void print(void){...}
    };

    class Derived : public Base {
    public:
        void pirnt(void){...}
    };


额...原来在 Derived 中将 print 误输入为 pirnt，关键问题是编译器完全可以正确的编译上面的代码，这是一个很难发现的错误。

在声明函数时，使用 *override* 关键字就是用来提示编译器，检查覆盖是否正确：

```cpp
struct A
{
    virtual void foo();
    virtual void foonal();
    void bar();
};
 
struct B : A
{
    void foo() const override; // Error: B::foo does not override A::foo
                               // (signature mismatch)
    void bar() override; // Error: A::bar is not virtual
    void foo() override; // OK: B::foo overrides A::foo
    void foonal() final; // OK: B::foonal overrides A::foonal
};

struct C : B
{
    void foonal() override; // Error: can't override a final function B::foonal 
}
```


## ==⚡ Scope & Name-Hiding
- Effective C++ 3rd - Item 33: Avoid hiding inherited names.

当编译器在 someFunc 的作用域中遇到名字 x 时，它会先检查 Local Scope 局部作用域，看看是否有什么东西叫这个名字。因为那里有，它们就不再检查其它作用域。

在此例中，someFunc 的 x 类型为 double，而 global x 类型为 int，但这不要紧。C++ 的 name-hiding 规则仅仅是覆盖那个名字，而相对应的名字的类型是否相同是无关紧要的。

在此例中，一个名为 x 的 double 覆盖了一个名为 x 的 int。

```cpp
int x; // global variable
void someFunc()
{
    double x; // local variable
    std::cin >> x; // read a new value for local x
}
```

加入继承以后，在一个派生类成员函数内引用位于基类的数据或成员时，编译器能够找到所引用的东西是因为派生类继承了基类声明的东西。

实际中的运作方法是将派生类的作用域嵌套在基类作用域之中。

以下代码导致的行为会使每一个第一次遇到它的 C++ 程序员吃惊。基于作用域的名字覆盖规则不会有什么变化，基类中的所有名为 mf1 和 mf3 的函数被派生类中的同名函数覆盖。从名字搜索的观点看，Base::mf1 和 Base::mf3 不再被 Derived 继承！

实际上，如果你使用了 public inheritance 但没有继承其它重载函数，就违反了“派生类 is-a 基类”这一基本原则。

在这种情况下，几乎总是要绕过 C++ 对“通过继承得到的名字”的缺省的覆盖机制。那就是使用 Scope operator :: 直接指定作用域，或者使用 using declarations 来解决。

```cpp
class Base {
private:
    int x;
public:
    virtual void mf1() = 0;
    virtual void mf1(int) {};
    void mf3() {};
    void mf3(double d) {};
};
class Derived: public Base {
public:
    // using Base::mf1;       // make all things in Base named mf1 and mf3
    // using Base::mf3;       // visible (and public) in Derived's scope
    virtual void mf1() {};
    void mf3() {};
};

int main()
{
    Derived d;
    d.mf1(1);       // Error Derived::mf1() hide Base::mf1()
    d.mf3(1);       // Error Derived::mf3() hide Base::mf3()
    d.Base::mf1(2); // OK always
    d.Base::mf3(2); // OK always
}
```

记住：

- ✦ 派生类会隐藏同名的基类成员、数据等。在公共继承下，这不会是想要的。
- ✦ 让被隐藏的名字再次呈现，请使用 using declarations or forwarding functions。


## ==⚡ CRTP Static Polymorphism 静多态
- [Cee Plus Plus Idioms](http://wiki.c2.com/?CeePlusPlusIdioms)
- [CRTP 编程模式](https://www.fluentcpp.com/2017/05/12/curiously-recurring-template-pattern/)
- [C++ Core Guidelines](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
- [c++ Patterns](https://cpppatterns.com)
- Design Patterns in Modern C++ Reusable Approaches for Object-Oriented Software Design by Dmitri Nesteruk
- Hands-On Design Patterns With C++ by Fedor G. Pikus - CH8 The Curiously Recurring Template Pattern
- 奇异递归模板模式(Curiously Recurring Template Pattern) https://zhuanlan.zhihu.com/p/54945314
- https://zh.cppreference.com/w/cpp/memory/enable_shared_from_this
- https://eli.thegreenplace.net/2013/12/05/the-cost-of-dynamic-virtual-calls-vs-static-crtp-dispatch-in-c

静多态是一种比 Dynamic Binding 实现的多态更有效率的多态实现方式。

以下是简单的示范，使用 struct 是因为它默认的访问权为 public，方便写代码，而 class 默认访问权为
 private。

```cpp
// static polymorphism demo
template <class impl>
class base : public impl { 
public: void op() { impl::op(); }};

struct impl { void op() {  std::cout<< "work here\n"; }};

base<impl>().op();
```

这是一种编程模式，基于模板参数作为基类的混入模式 Mixin Types。

奇异递归模板模式 CRTP - Curiously Recurring Template Pattern，更一般地被称作 F-bound polymorphism。

CRTP 是 C++ 模板编程时的一种惯用法：把派生类作为基类的模板参数，它在 C++ 中主要有两种用途：

- 实现 Static Polymorphism
- 添加方法同时精简代码

通过 CRTP 实现类似于虚函数的效果，同时又没有虚函数调用开销，因为虚函数调用是 Dynamic Binding，需要通过虚函数指针查找虚函数表进行调用。同时类的对象的体积相比使用虚函数也会减少，因为不需要存储虚函数指针，但是缺点是无法动态绑定。

用以下示范代码演示 CRTP 的形式，关键是使用模板基类：

```cpp
// F-bound polymorphism
template <typename Child>
struct Base
{
    void doAction()
    {
        static_cast<Child*>(this)->implementation();
    }
private:
    Base(){};
    friend Child;
};

template<typename T>
void Action(Base<T> &thing)
{
    thing.doAction();
}

struct Derived : Base<Derived>
{
    void implementation()
    {
        std::cerr << "F-bound polymorphism\n";
    }
};


int main()
{
    Derived d;
    d.doAction();
}
```

注意这里使用的静态转型，和典型的派生类使用的 *dynamic_cast* 不同，因为这里需要的是静态绑定，使用 *static_cast* 转型就好了，将此视为一种意义暗示。

动态强制转换通常用在运行时，用来保证将派生类正确转型。但在这里不需要这种保证：基类被设计为通过其模板参数继承，编译期绑定。

另外，基类中将默认构造函数定义为 private 防止子类继承时，传入不合规范的其它类型。

事实上，派生类的构造函数必须调用基类的构造函数，即使代码中没有显式调用它，编译器也会默认进行调用。由于基类中的构造函数是私有的，除了友元类之外，不可能访问它，而唯一的友元类是模板类！因此，如果派生类与模板类不同，则代码不会编译，这真是妙用。

还有一个容易忽略的问题，派生类中的方法可能会覆盖相同名称的基类方法。正如 Effective C++ 3rd Item 33: Avoid hiding inherited names 解释的那样，因为这些方法不是虚拟的。因此，您需要注意，基类和派生类中的名称不能相同。


下面演示如何用奇异递归模板模式来简化接口。

假设有一系列传感器，有数据的读写能力，现在希望增加一个数据处理能力，对原始数据进行系数化缩放。

如果，按传统的继承，是不是要给每个传感器都定义一个 scale() 方法？或者增加一层继承，并添加数据处理功能。

但是，使用 CRTP 编程模式真的不要太方便了，直接在模板基类设置一个 scale() 方法就解决了，这操作很有函数式编程的灵活性。但是，这种绕一圈调用本身的方法，缺点是接口定义不够直观。

```cpp
template <typename T>
struct NumericalFunctions
{
    void scale(double multiplicator)
    {
        T& underlying = static_cast<T&>(*this);
        underlying.setValue(underlying.getValue() * multiplicator);
    }
    void square()
    {
        T& underlying = static_cast<T&>(*this);
        underlying.setValue(underlying.getValue() * underlying.getValue());
    }
    void setToOpposite()
    {
        scale(-1);
    };
};

class Sensitivity : public NumericalFunctions<Sensitivity>
{
public:
    double getValue() const { return 0; };
    void setValue(double value) { };
    // rest of the sensitivity's rich interface...
};

class Sens: public Sensitivity {};

int main()
{
    Sens st;
    st.setValue(1l);
}
```

为何不用非成员的模板函数呢？这是因为会增加额外的代码，至少它的参数更多了，至少要有一个参数，如下：

```cpp
template <typename T>
void scale(T& object, double multiplicator)
{
    object.setValue(object.getValue() * multiplicator);
}
```

标准库的 std::enable_shared_from_this 模板类使用了类似的技术。

假如在 C++ 要在一个已被 shareptr 管理的类型对象内获取并返回 this，为了防止被管理的对象已被智能指针释放，而导致 this 成为悬空指针，可能会考虑以 share_ptr 的形式返回 this 指针。

让需要返回 this 指针的类，继承 std::enable_shared_from_this 模板类，同时模板参数为该类的类型：

```cpp
struct Good: std::enable_shared_from_this<Good>
{
    std::shared_ptr<Good> getptr() {
        return shared_from_this();
    }
};
```

参考 enable_shared_from_this 代码：

```cpp
template<class T>
class enable_shared_from_this {
protected:
    constexpr enable_shared_from_this() { }
    enable_shared_from_this(enable_shared_from_this const&) { }
    enable_shared_from_this& operator=(enable_shared_from_this const&) {
        return *this;
    }

public:
    shared_ptr<T> shared_from_this() { return self_; }
    shared_ptr<T const> shared_from_this() const { return self_; }

private:
    weak_ptr<T> self_;

    friend shared_ptr<T>;
};
```



## ==⚡ Virtual & Polymorphism 虚拟与多态机制
- Polymorphism in C++ https://www.tutorialspoint.com/cplusplus/cpp_polymorphism.htm
- Hands-On Design Patterns With C++ by Fedor G. Pikus - Chapter 1: An Introduction to Inheritance and Polymorphism

C++ 语言中虚函数（virtual function）是在面向对象编程语言中的一个非常重要的概念，虚函数的目的就在于实现多态性。

虚函数的一个重要用法是期待子类对父类的虚拟成员函数进行重载，这种情况下，*virtual* 关键字就意味着“overridable”。当你用一个基类指针指向或引用它的继承类对象的时候，用这个指针或引用去调用虚函数时，实际调用的是继承类的版本。

Effective C++ 提到条款 37: 决不要重新定义继承而来的非虚函数，这是有道理的，统一的约定让代码逻辑更清晰。

因为重载、虚拟、多态机制的存在，编译期编译器在选择要调用的函数版本时有两种方式，Static & Dynamic Binding。那些可以在编译期确定下来的调用，就执行静态绑定 Static Binding，这种方式效率更高，不必在运行时再选择具体要执行的函数版本。

而所谓动态联编，是指在程序的运行阶段动态地选择合适的成员函数，那些不能在编译期确定的调用就需要使用 Dynamic Binding。

多态 Polymorphism 本意就是多种状态，即哪个函数版本会被调用取决于 Dynamic Binding 使用方式。当然，动态绑定只是其中一种实现多态的方法，使用静态绑定也可以实现多态。

Dynamic Binding 使用条件：

1）为基类定义类虚函数；
2）派生子类并实现虚拟函数；
3）使用基类指针指向子类型的对象，并通过它调用虚函数；

虚函数常识：

1）为什么类的静态成员函数不能为虚函数？

虚函数就意味动态绑定，也就是可以在派生类中覆盖，这与静态成员函数的定义（在内存中只有一份拷贝，通过类名或对象引用访问静态成员）本身就是相矛盾的。

2）为什么构造函数不能为虚函数？

因为如果构造函数为虚函数的话，它将会在执行期间被构造，而执行期则意味已经完成对象构造过程，这也是冲突的。构造函数所完成的工作就是为了建立合适的对象，因此在没有构建好的对象上不可能执行多态的工作。在继承体系中，构造的顺序是先构造基类，再构造派生类，其目的就在于确保对象能够成功地构建。构造函数同时承担着虚函数表的建立，如果它本身都是虚函数的话，如何确保 vtbl 的构建成功呢？

3）虚析构函数如何执行？

C++ 开发的时候，用来做基类的类的析构函数一般都是虚函数。当基类中有虚函数的时候，析构函数也要定义为虚析构函数。如果不定义虚析构函数，当删除一个指向派生类对象的指针时，会调用基类的析构函数，而派生类的析构函数未被调用，造成内存泄露。

注意：new 和 delete 是表达式，是静态的成员函数，不能是虚函数。C++ Primer 演示了通过重载类的 operator new, operator delete 来达到类似效果，new Expression versus operator new Function。

只需要在声明函数时使用 *virtual* 关键字，定义函数体时不需要，子类声明中也可以不使用。

虚函数是通过一张虚函数表来实现的，简称 V-Table，它是一块连续的内存，每个内存单元中记录一个 JMP 指令的地址。编译器会为每个有虚函数的类创建一个虚函数表，该虚函数表将被该类的所有对象共享，类的每个虚函数成员占据虚函数表中的一行。

在这个表中，主要是一个类的虚函数的地址表。这张表解决了继承、覆盖的问题，保证其真实反应实际的函数。在有虚函数的类的实例中，分配了指向这个表的指针的内存。所以，当用父类的指针来操作一个子类的时候，这张虚函数表就指明了实际所应该调用的函数。


虚拟机制的基本用法：

- 虚函数，例如：`virtual void imaging() const throw();`
- 纯虚函数，例如：`virtual void pure_virtual() const throw() = 0;`
- 虚继承，例如：`class derive : virtual public base {};`
- 虚解构函数，例如： `virtual ~Shape() throw();`

使用 *virtual* 关键字和纯说明符 *=0* 将方法定义为纯虚函数，*Pure Virtual Functions*，意思是指这个函数为 NULL 指针，除非在类中提供实现定义。所属的类将会变为抽象类，通常作为接口使用，所以纯虚函数一般在子类中提供实现，而不是在其本身，当然可以这样做。

纯说明符或抽象重写说明符只允许在虚函数上使用，它只起形式上的作用，告诉编译系统“这是纯虚函数”。

类声明只要有纯虚函数就会成为抽象类，但是抽象类中除了包含纯虚函数外，还可以提供其它成员函数（虚函数或普通函数）和成员变量。例如，定义 protected 成员函数专供子类使用。

只有类中的虚函数才能被声明为纯虚函数，普通成员函数和顶层函数均不能声明为纯虚函数。

包含纯虚函数的类称为抽象类 *Abstract Class*，之所以说它抽象，是因为它无法实例化，也就无法创建对象。因为作为接口使用，抽象类就是父类，也称为 ABC (Abstract Base Class)。

在大多数 OOP 语言中，都有接口的概念，通常也会有相应的关键字 *interface* 来定义一个接口，使用 *implements* 关键字来实现接口。本质上，接口是一种约定规范，目录是为子类提供一个统一的规范。从这一点来说，即使用没有 *interface* 关键字，使用 *class* 也可以定义一个具有实质意义的接口。

某些类，主要是接口这样的类，在现实角度和逻辑角度都不需要实例化（不需要创建它的对象实例），它的存在目的就是提供一个形式上的接口，让子类按同一规范来实现，C++ 抽象类的目的也就是提供接口定义。

一般上，多继承机制会带来复杂的问题，一个类继承多个基类本身就是复杂的结构。但是一个类可以有多个接口，这是很正确的做法。接口相当于定义了一套行为，实现相应的接口就具有这套行为规范的能力。像鸵鸟困局这样的问题也可以很好地解决，像 Golang 语言那样使用接口组合来扩展类的能力。

以继承为特点的 OOP 只是编程世界的一种抽象方式，在 Golang 的世界里没有继承，只有组合和接口，并且是松散的接口结构，不强制声明实现接口。

If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.

翻译过来就是：如果某个东西长得像鸭子，像鸭子一样游泳，像鸭子一样嘎嘎叫，那它就可以被看成是一只鸭子。

结合到 GO 语言，也就是说那些实现了鸭子某个 interface 全部方法的 struct 对象就是鸭子。

单一继承关系解决了 is-a 也就是定义问题，因此可以把子类当做父类来对待。但对于父类不同但又具有某些共同行为的数据，单一继承就不能解决了，C++ 采取了多继承这种复杂的方式。。

所以，在 C++ 编程中，Multiple and Virtual Inheritance，Virtual Functions 的关系处理是逃不掉的，这是高级内容。

以下代码可以用来测试构造函数和析构的执行顺序：

```cpp
```
    #include <iostream>

    class A { public: A(){ std::cout << "A() ";} };
    class B : public A { public: B(){ std::cout << "B() ";} };
    class C : public B { public: C(){ std::cout << "C() ";} };
    class X { public: X(){ std::cout << "X() ";} };
    class Y { public: Y(){ std::cout << "Y() ";} };
    class Z : public X, public Y { public: Z(){ std::cout << "Z() ";} };
    class MI : public C, public Z { public: MI(){ std::cout << "MI() ";} };
    class MIV : public C, virtual public Z { public: MIV(){ std::cout << "MIV() ";} };

    int main()
    {
        std::cout << "\n======nonvirtual inheritence=======\n";
        MI mi;
        std::cout << "\n========virtual inheritence========\n";
        MIV miv;
    }

Output: 

    ======nonvirtual inheritence=======
    A() B() C() X() Y() Z() MI() 
    ========virtual inheritence========
    X() Y() Z() A() B() C() MIV() 

- FAQ 20.05 What happens when a destructor is executed?
- FAQ 20.06 What is the purpose of a copy constructor?

析构器会自动调用所有成员对象和所有立即非虚拟基类的析构函数。首先，析构函数体执行，然后以成员对象在类主体中出现的相反顺序调用成员对象的析构函数，然后调用立即基类的析构函数，以继承它们时在类声明中出现的反向顺序进行。

虚拟基类是特殊的，它们的析构函数在大多数派生类的析构函数末尾调用。这是因为，虚拟继承机制改变了原有的构造器执行顺序，在继承列表中的基类中，按虚基类优先，从左到右，从顶级到底层的顺序执行。总之，virtual 继承出现的位置，其基类就会优先执行构造过程。

可以在以上代码的 MI 和 MIV 继承列表中差别，只是后者将继承 Z 的方式改为 virtual 进行测试。

使用虚继承后，导致编译器通过继承列表先找到 Z 的顶层基类即 X -> Y -> Z 这样的优先顺序执行构造过程，然后到 A -> B -> C 。

原本是优先处理 C 的继承链，从其顶层基类开始，按 A -> B -> C 这样的顺序执行构造过程，然后再到 X -> Y -> Z。

参考 The C++ Programming Language 3rd/4th 两个版本中关于 Class Hierarchies 的两个示范代码：

```js
class A {                  /*no constructor*/ };
class B { public: B();     /*default constructor*/ };
class C { public: C(int) ; /*no default constructor*/ };
class D : virtual public A, virtual public B, virtual public C
{
    D() { /* ... */ } // error: no default constructor for C
    D(int i) : C(i) { /* ... */ }; // ok 
};
// The C++ Programming Language, Third Edition
// 15.2.4.1 Programming Virtual Bases [hier.vbase.prog]

struct V 
{
    V(int i); // no default constructor
};
struct A 
{
    A(); // default constructor
};
struct B : virtual V, virtual A 
{
    B() : V{1} { /* ... */ }; // default constructor ; must initialize base V
};
class C : virtual V 
{
public:
    C(int i) : V{i} { /* ... */ }; // must initialize base V
};
class D : virtual public B, virtual public C {
    // implicitly gets the virtual base V from B and C
    // implicitly gets virtual base A from B
public:
    D() { /* ... */ } // error : no default constructor for C or V
    D(int i) :C{i} { /* ... */ }; // error : no default constructor for V
    D(int i, int j) :V{i}, C{j} { /* ... */ } // OK
};
// The C++ Programming Language, Forth Edition
// 21.3.5.1 Constructing Virtual Bases
```

这两个示范代码都是在说多继承中的构造过程问题，要使用一个多继承层次结构成功执行构造，就必需满足所有基类相应的构造函数被成功执行。

而这个过程中，C++ 构造器会执行一些*默认构造函数*，即没有参数的构造函数。如果没有定义任何构造函数，那么编译器会隐含提供一个，这个隐含的动作就是 compiler-synthesized。除非代码中定义了任何一个构造函数，此时隐含提供的默认构造函数就不存在了。

这就是说，像 struct V 这样的定义了一个带整数参数的构造函数，就不能对它调用默认构造函数，即需要显式指定要执行的构造函数。

而 struct A 显式定义了默认构造函数，所以编译器会和调用隐含的默认构造函数一样，在需要时自动调用它。


## ==⚡ Virtual and Multiple Inheritance
- C++ Primier 4th - Advanced Topics - 17.3. Multiple and Virtual Inheritance
- C++ Primer Plus 6th - 14 Reusing Code in C++ - Multiple Inheritance
- Thinking in C++ 2nd Volume 2: Standard Libraries & Advanced Topics
- Inside the C++ Object Model By Stanley B. Lippman, May 03, 1996
- The Design and Evolution of C++ By Bjarne Stroustrup - Ch12 Multiple Inheritance
- The C++ Programming Language 3rd - II Abstraction Mechanisms - 15.2.4.1 Programming Virtual Bases
- The C++ Programming Language 4th - III Abstraction Mechanisms - 21.3.5.1 Constructing Virtual Bases

在派生类继承基类时，加上 virtual public 关键词则为虚拟继承，是多重继承的一种形式，派生类多次共享包含在层次结构中的基类的单个副本。

虚继承与多继承示范代码片段：

```cpp
// Virtual Inheritance
class Base {};
class Derived : virtual public Base {};
// class Derived : public virtual Base {}; 
// virtual and public can appear in either order

// Multiple Inheritance
class HumanBeing {
public:
    virtual void pure_virtual() const throw() = 0;
    virtual void Show() {}
    virtual ~HumanBeing() {}
}
class Waiter : public HummanBeing { public: void Show() {} };
class Singer : public HummanBeing { public: void Show() {} };
class SingingWaiter : public Waiter, public Singer {...};
// class SingingWaiter : public Waiter, Singer {...}; // Singer is a private base
```

根据上面的代码，先来搞清楚两个容易混淆的概念：

- VBC - Virtual Base Classes，此处 Base 就称为虚基类，这是相对于子类 Derived 派生方式而言的，虚基类本身可以是一个普通的类。
- ABC - Abstract Base Classes，当父类中存在至少一个纯虚函数时，这个类就是抽象类，它作为基类使用时就是 ABC。

这里主要关注虚继承与多继承，相对于单继承，使用多继承是件复杂的事，它带来两大问题：

- 二义性：不同的父类拥有名字相同的成员时，如何处理二义性，Ambiguous upcasting？
- 多副本：通过多个直接基类继承共同基类的多个实例，即内存有多个 HumanBeing 副本，Duplicate subobjects 如何处理以节省内存？

所以，有人强烈反对使用多继承，但也有人钟爱有加，形成 MI vs SI 两大阵营。

在典型的多继承菱形结构中，如上面的 SingingWaiter，有两个直接基类和一个共同基类 HumanBeing。实例化时，SingingWaiter 实例就会包含多个基类实例，在这里就是有两个 HumanBeing，分别位于 Waiter 和 Singer 父类内部，它们有相应的地址。

以下展示了二义性问题，以及显式转型处理方式：

```cpp
SingingWaiter ed;
HumanBeing * ph = &ed; // error: ambiguous
ed.Show(); // error: ambigous
ed.Singer::Show(); // OK: use Singer version
ed.Waiter::Show(); // OK: use Waiter version

HumanBeing * p1 = (Waiter *) &ed; // OK: the HumanBeing in Waiter
HumanBeing * p2 = (Singer *) &ed; // OK: the HumanBeing in Singer
Waiter *pw = &ed;                 // OK: the SingingWaiter upcasting as a Waiter
Singer *ps = &ed;                 // OK: the SingingWaiter upcasting as a Singer
```

二义性有两种基本方式解决，一是使用 Scope operator :: 来调用同名的继承方法指定版本，或使用 using declarations 如 `using Singer::Show;`。另一个方法就是使存在歧义的成员只在一条继承路径上出现，而最接近的版本就是默认被调用的版本，更好的方法是提供自己的版本。

Table 14.1 Varieties of Inheritance 展示了各种基本继承关系中父类成员在子类中的访问权：

|  Base's Property   | Public Inheritance | Protected Inheritance | Private Inheritance |
|--------------------|--------------------|-----------------------|---------------------|
| Public members     | Public members     | Protected members     | Private members     |
| Protected members  | Protected members  | Protected members     | Private members     |
| Private members    | NO                 | NO                    | NO                  |
| Implicit upcasting | Yes                | Yes (within)          | No                  |

注意，public 继承方式是完全支持隐式转型的，所以上面的代码中可以直接将 SingingWaiter 的指针赋值给 Waiter 或 Singer 指针。

这也是多继承问题的关键点之一，编译器偷偷做了一件事情：this 指针调整！

在单继承 SI 模型下，对象内存采用重叠的模型，基类和任何的派生类的指针都指向该对象的首地址。因此，转型操作不影响指针指向，这些指针的地址值都一样，所有基类都共享同一个首地址。

也就是说，在单继承体系内，不论你用什么样的方式对其中一个指针进行 downcasting 或 upcasting，指针的地址值都是一样的。

但是在 MI 的世界里，采用的是非重叠模型。

简单来说，对于子类实例，其包含的每个基类的对象都有自己的首地址，只有继承列表中第一个基类对象地址才一样。

所以，在频繁的 this 指针调整中，this 指针地址变化主要发生在派生类对象与其继承列表中第 2 个以及后续的基类对象之间的转换。

参考 1996 年发行的 Inside the C++ Object Model By Stanley B. Lippman，Chapter 3. The Semantics of Data - 3.4. Inheritance and the Data Member。

如果在多条继承路径上有一个公共的基类，在这些路径中的某几条汇合处，即这个*公共基类*就会产生多个实例，若只想保存这个公共基类的一个实例，就需要对这个公共基类使用*虚继承*，将公共基类当作虚基类 VBC - Virtual Base Classes。

在多继承情况下，从不同途径可以能继承得到同名的数据成员，这在内存中有不同的拷贝会造成数据不一致问题。C++ 使用虚拟继承 Virtual Inheritance，将共同基类设置为虚基类。这时从不同的路径继承过来的同名数据成员在内存中就只有一个拷贝，同一个函数名也只有一个映射。通过虚基类统一多基类继承的同名数据成员解决了二义性问题，也节省了内存，避免了数据不一致的问题。

如果是虚继承、非虚继承混搭，基类有多少子对象，就要按组合来计算，虚继承的部分算一个，其它继承的有几个算几个。

加入虚继承，就需要修改原有代码，即使用在 C++ 的编译规则上也做了调整。如果是在工业上，这是潜在的工作量，和回收返工操作没什么不同：

```cpp
class Singer : virtual public HumanBeing {...};
class Waiter : public virtual HumanBeing {...};
class SingingWaiter: public Singer, public Waiter {...};
```

按以上修改声明后，加入了虚继承，这样实例化 SingingWaiter 就只会继承到一个 HumanBeing 实例。关键字 virtual 的位置可前可后，它的作用就是将 C++ 菱形多继承结构中共同基类作为子类的直接基类一样看待，即 HumanBeing 相当于 SingingWaiter 的直接基类。

                +============+
                | HumanBeing |
                +=====+======+
                 /   v|i    \
                /    i|n     \
    +========+ /     r|h      \ +========+
    | Waiter |+      t|e       +| Singer |
    +========+ \     u|r      / +========+
                \    a|i     /
                 \   l|t    /
               +===============+
               | SingingWaiter |
               +===============+

        C++ Diamond Inheritance Hierarchy

以上示意图也说明了虚继承的关于构造器规则的调整中，具有间接虚拟基类的派生类应该让其构造函数直接调用间接基类构造函数，这对于间接非虚拟基类是非法的。非虚继承中，只有直接基类的构造器才可以出现在子类构造器的 Initialization list，不能是间接基类的构造器。

这个规则的调整，是因为在虚继承关系中，如果 SingingWaiter 直接基类都在其构造器中的初始化列表中执行虚基类的构造器，那么会出现多个路径通向虚基类的构造器，这与虚继承的设计规则相违背。

```cpp
SingingWaiter(const Worker & man, int p = 0, int v = Singer::other)
: Waiter(man,p), Singer(man,v) {} // flawed

SingingWaiter(const Worker & man, int p = 0, int v = Singer::other)
: Worker(man), Waiter(man,p), Singer(man,v) {}
```

上面代码的第一种方式，如果在非虚继承模式下，初始化参数 man 可以经由 SingingWaiter 的父类传递到上一层基类。但是在虚承继模式下，这种做法就被禁止了。因为此时虚基类只有一个对象，所以需要先对虚基类进行构造，这就是为何可以在 SingingWaiter 的构造器中调用虚基类的构造器。

如果虚基类不只有默认构造器，那么就应该在子类 SingingWaiter 的构造器中显式调用，这样做才保证虚基类只有一个对象。

虚拟基类的使用并没有那么简单，上面的示例使用默认构造函数，包括隐含编译器合成的或显式定义的。如果虚拟基有一个构造函数，事情就会变得有点奇怪。

需要引入一个新术语来简化理解：most-derived，最近派生类，通常是指所执行的构造函数所在的类，它的构造器只能执行直接基类的构造函数。但是使用虚继承后，这个概念也指对虚基类进行初始化的类。参考前面的棱形层次结构示意图，在虚继承方式下，无论子类离虚基数间隔多远，子类都可以对虚基类进行初始化。

参考以下示范代码，VMan1 和 VMan2 对直接基类 HumanBeing 初始化是很正常的，而 MI 或 XMan 在虚继承形式下也可以对远端的虚基类进行初始化：

```cpp
class HumanBeing 
{
public:
    HumanBeing() {}
    HumanBeing(int) {}
    // pure virtual make it to be an abstract class
    virtual const char* vf() const = 0;
    virtual ~HumanBeing() {}
};
class VMan1 : virtual public HumanBeing 
{
public:
    VMan1() : HumanBeing(1) {}
    const char* vf() const { return "VMan1"; }
};
class VMan2 : virtual public HumanBeing 
{
public:
    VMan2() : HumanBeing(2) {}
    const char* vf() const { return "VMan2"; }
};
class MI : public VMan1, public VMan2 
{
public:
    MI() : HumanBeing(3) {}
    const char* vf() const {
        return VMan1::vf(); // MUST disambiguate
    }
};
class XMan : public MI 
{
public:
    // You must ALWAYS init the virtual base:
    XMan() : HumanBeing(4) {}
};
```

像上面这样的多继承结构中，二义性问题就比较复杂。HumanBeing、VMan1、Vman2 同时定义了 vf() 函数，继承者覆盖了顶层基数的虚函数，因为子类中出现了和基类虚函数同名又同签名的形式。

但是接下来，MI 如何要多继承 VMan1、Vman2 就会出现，两个直接基类有相同签名的虚函数，如果不是两个基类都使用了虚继承，MI 可以真的继承它们，而无需覆盖虚函数 vf()。在两者都使用虚继承时，MI 如果不覆盖 vf()，编译器就不知道怎么处理二义性问题。

这是因为从 HumanBeing 到 MI 之间，vf() 函数有二条继承路线，从 VMan1 或者从 VMan2，这就导致：no unique final overrider。在 MSVC 中的提示就是直接基类同名方法不明确继承，这是典型的棱形继承二义性问题 Diamond Problem。

至于为何一定要 MI 继承 vf() 函数呢，不继承行吗？不行，至少在这种情况下不行。这是因为虚继承必需将虚基类的方法继承给子类，否则就失去虚继承的设计意义了。

另外，给虚基类进行初始化并不是用户友好的一种方式，对于代码的用户来说深入了解继承链是件乏味浪费时间的事。

因此，使用默认参数是个好方法：

```cpp
class HumanBeing {
public:
    // Default constructor removes responsibility:
    HumanBeing(int = 0) {}
    virtual char* vf() const = 0;
    virtual ~HumanBeing() {}
};
```

- FAQ 21.14 How can the compiler be kept from generating duplicate outlined copies of inline virtual functions?

如果类具有一个或多个虚函数，继承的或在该类中声明的，则该类应至少具有一个非内联虚拟函数。许多编译器使用第一个非内联虚拟函数的位置来确定源文件，该文件将包含类的神奇内容（virtual table, out-lined copies of inline virtual functions）。如果类的所有虚拟函数都是内联定义的，那么这些编译器可能会在那些包含此类头文件的每个源文件中放置神奇内容的静态副本。

请注意，此建议对编译器相当敏感。一些编译器不会生成神奇内容的副本，即使类中的所有虚拟函数都是内联的。但即使在这些编译器中，也不需要花费太多的成本确保至少有一个类的虚拟函数是非内联的。

相比普通函数，调用虚函数的额外开销是不大的。实际上，几乎所有编译器都以相同的方式进行编译，并且开销非常小。并且在参数越多的情况下，越趋于相同，因为虚函数的动态绑定是恒定的开销。在极大的差别情况下，可能有 10% - 20% 的额外开销。


## ==⚡ Class Layout 类数据结构布局
- C++ vtables https://shaharmike.com/cpp/vtable-part1/
- Inside the C++ Object Model By Stanley B. Lippman, May 03, 1996
- the Virtual Table https://www.learncpp.com/cpp-tutorial/the-virtual-table/

类数据结构在内存布局上有两种策略，取决于编译器的实现，它们决定了虚函数表在内存中地址如何安排：

- Virtual Inheritance with Pointer Strategy
- Virtual Inheritance with Virtual Table Offset Strategy

根据使用的继承机制不同，编译器不实现差异，类数据内存布局明显有变化，主要包含了：

- vftable 虚函数表：包含虚函数的列表数据结构；
- vbtable 虚基类表：继承链上所有路径上共同的虚基类都通过一张表管理；
- vfptr 虚函数指针：指向虚函数表中的首条目；
- vbptr 虚基类指针：指向虚基类副本，在使用虚继承时产生；
- this adjustor 上下文指针调整：继承结构中，有各种类实例对象需要使用 this 指针来访问成员，根据进行偏移地址调整；

显然，创建类实例后，它就是按类结构存放在内存某个区块的数据结构，任意多的实例就有任意多的这些数据结构。但是类的结构是统一的，除了实例的数据，像成员函数、静态成员这些东西都是共用的。所以设置数据结构时，就需要使用一个 this 指针来指向这些数据，并且在实例数据所在要保留一个指针指向类的公共结构。当调用成员时，就根据数据找到到成员方法的地址，或者对于虚函数，就先通过虚函数表指针来定位。所以，虚函数表有时也被叫作 dispatch table，派发函数调用的表。调用成员方法时，this 指针作为第一个参数传入，供成员函数访问相应的实例数据。

以下示范代码中，表示了编译器隐含的操作，它会在顶层基类内存开始地址处放置一个虚函数表指针：

```cpp
class Base
{
public:
    VirtualTable* __vptr;
    virtual void function1() {};
    virtual void function2() {};
};
```

在 MSVC 编译器中，一个类使用虚函数表方式如下，根据单一继承、多继承，和是否使用虚继承进行区别，这里只讨论两层继承：

- 非虚单继承，只要类本身或父类只要使用了虚函数，就需要使用一张虚函数表，表中条目按虚函数在类中的声明顺序排列，基类优先，包括私有的虚函数；
- 虚单一继承，只要类本身或父类只要使用了虚函数，都独立一张虚函数表管理，因没有其它基类，所以子类不用和其它非虚基类共用虚函数表。
- 非虚多继承，子类和首个使用了虚函数的基类共用虚函数表，其它基类使用独立虚函表，如果有使用虚函数；

虚拟多继承情形分开讨论，主要区别在于是否使用虚继承，如果使用虚继承，类本身和基类虚函数分表管理。所有可能存在的虚基类都通过一张 vbtable 表管理。

- 子类、基类都没有使用虚函数的虚继承很简单，只有 vbtable 来管理虚基类，没有虚函数表，因为不需要。
- 只在子类使用虚函数的情况，只有子类一张虚函数表。
- 只在基类使用虚函数的情况，根据使用了虚函数的基数在列表的顺序设置虚函数表。因为只会有一张 vbtable，只有在第一个虚继承的基类的虚函数表前放置，如果它有使用虚函数表。
- 子类、基类都有使用虚函数的情况，子类会和虚继承前面的基类共同同一张虚函数表，如果前面有使用了虚函数的基类。后继的基类按继承列表顺序设置虚函数表。会在第一个虚基类的虚函数表前会设置一张 vbtable，和其它虚基类共用。

在多层的虚拟继承结构中，vbtable 会有多张，取决于有多少层次深度，和虚继承关系数量。

各种现代编译都提供了打印 C++ 类对象数据内存布局的工具：

    cl.exe source.cpp /d1reportSingleClassLayout<CLASSNAME>
    cl.exe source.cpp /d1reportAllClassLayout
    gcc --fdump-class-hierarchy source.cpp
    clang -Xclang -fdump-record-layouts source.cpp

输出格式不一样，以 MSVC 编译器的输出为参考，将前面小节的示范类型层次结构打印出来，以下是没有虚继承时两层继承的内存布局：

    **********************************************************************
    ** Visual Studio 2019 Developer Command Prompt v16.6.1
    ** Copyright (c) 2020 Microsoft Corporation
    **********************************************************************
    [vcvarsall.bat] Environment initialized for: 'x64'
    用于 x64 的 Microsoft (R) C/C++ 优化编译器 19.26.28806 版
    版权所有(C) Microsoft Corporation。保留所有权利。

    class XMan  size(16):
        +---
     0  | +--- (base class MI)
     0  | | +--- (base class VMan1)
     0  | | | +--- (base class HumanBeing)
     0  | | | | {vfptr}
        | | | +---
        | | +---
     8  | | +--- (base class VMan2)
     8  | | | +--- (base class HumanBeing)
     8  | | | | {vfptr}
        | | | +---
        | | +---
        | +---
        +---

    XMan::$vftable@VMan1@:
        | &XMan_meta
        |  0
     0  | &MI::vf 
     1  | &XMan::{dtor} 

    XMan::$vftable@VMan2@:
        | -8
     0  | &thunk: this-=8; goto MI::vf 
     1  | &thunk: this-=8; goto XMan::{dtor} 

    XMan::{dtor} this adjustor: 0
    XMan::__delDtor this adjustor: 0
    XMan::__vecDelDtor this adjustor: 0

从打印出来的内存布局信息可以看到，HumanBeing 有两个副本对象。XMan 实例主体占 16-Byte，包含自身的数据成员和两个直接基类的数据成员。因为使用了虚函数，所以配置了相应的 Virtual Table，每个直接父类对应一个，使用 vfptr 指针引用。

包含纯虚函数的基类 HumanBeing 是抽象类，不能直接使用代码来实例化，所以 MSVC 没有打印相应的内存布局，只嵌入子类的内存布局中。

其它普通的类方法成员有专用的地址，不会在虚表中记录，也不会在对象的数据内存布局中记录。

特定情况可以看到虚函数表中有两个析构函数，在 MSVC 生成的内存布局信息中会用 deleting 和 complete 后缀标记，因为对象有两种构造方式，栈构造和堆构造。所以对应对象也有两种析构方式。差别在于，堆上对象的析构需要手动管理，而栈内存的对象析构不需要执行 delete 函数，编译器会自动处理回收问题。

以下是两层的虚继承的类数据结构，同时有两张 vbtable 对应两个直接基类的虚继承。最主要的是 HumanBeing 在内存中只有一个副本，这就是虚继承的设计的目的：

    class XMan  size(32):
        +---
     0  | +--- (base class MI)
     0  | | +--- (base class VMan1)
     0  | | | {vbptr}
        | | | <alignment member> (size=4)
        | | +---
     8  | | +--- (base class VMan2)
     8  | | | {vbptr}
        | | | <alignment member> (size=4)
        | | +---
        | | <alignment member> (size=4)
        | +---
        | <alignment member> (size=4)
        +---
    20  | (vtordisp for vbase HumanBeing)
        +--- (virtual base HumanBeing)
    24  | {vfptr}
        +---

    XMan::$vbtable@VMan1@:
     0  | 0
     1  | 24 (XMand(VMan1+0)HumanBeing)

    XMan::$vbtable@VMan2@:
     0  | 0
     1  | 16 (XMand(VMan2+0)HumanBeing)

    XMan::$vftable@:
        | -24
     0  | &(vtordisp) MI::vf 
     1  | &(vtordisp) XMan::{dtor} 

    XMan::{dtor} this adjustor: 24
    XMan::__delDtor this adjustor: 24
    XMan::__vecDelDtor this adjustor: 24
    vbi:       class  offset o.vbptr  o.vbte fVtorDisp
          HumanBeing      24       0       4 1

GCC 编译器，可以使用 -fdump-class-hierarchy 选项进行编译会得到一个 .class 类结构信息文件，以下是同样源代码产生类层次布局，只摘取 XMan 相关部分。

在虚继承中，GCC 编译器还会为子类多生成一个虚表数据表 VTT(virtual table table)，这张表记录了虚继承类的虚表地址。

显示，两种编译器处理虚函数的工作方式完全不同：

    VTT for XMan
    XMan::_ZTT4XMan: 10u entries
    0     ((& XMan::_ZTV4XMan) + 20u)
    4     ((& XMan::_ZTC4XMan0_2MI) + 20u)
    8     ((& XMan::_ZTC4XMan0_5VMan1) + 20u)
    12    ((& XMan::_ZTC4XMan0_5VMan1) + 20u)
    16    ((& XMan::_ZTC4XMan4_5VMan2) + 20u)
    20    ((& XMan::_ZTC4XMan4_5VMan2) + 48u)
    24    ((& XMan::_ZTC4XMan0_2MI) + 20u)
    28    ((& XMan::_ZTC4XMan0_2MI) + 52u)
    32    ((& XMan::_ZTV4XMan) + 20u)
    36    ((& XMan::_ZTV4XMan) + 52u)

    Class XMan
       size=8 align=4
       base size=8 base align=4
    XMan (0x0x5c4b040) 0
        vptridx=0u vptr=((& XMan::_ZTV4XMan) + 20u)
      MI (0x0x5c4b080) 0
          primary-for XMan (0x0x5c4b040)
          subvttidx=4u
        VMan1 (0x0x5c4b0c0) 0 nearly-empty
            primary-for MI (0x0x5c4b080)
            subvttidx=8u
          HumanBeing (0x0x5c423f0) 0 nearly-empty virtual
              primary-for VMan1 (0x0x5c4b0c0)
              vptridx=32u vbaseoffset=-20
        VMan2 (0x0x5c4b100) 4 nearly-empty
            lost-primary
            subvttidx=16u vptridx=36u vptr=((& XMan::_ZTV4XMan) + 52u)
          HumanBeing (0x0x5c423f0) alternative-path

    Vtable for XMan
    XMan::_ZTV4XMan: 16u entries
    0     0u
    4     0u
    8     0u
    12    (int (*)(...))0
    16    (int (*)(...))(& _ZTI4XMan)
    20    (int (*)(...))MI::vf
    24    (int (*)(...))XMan::~XMan
    28    (int (*)(...))XMan::~XMan
    32    4294967292u
    36    4294967292u
    40    4294967292u
    44    (int (*)(...))-4
    48    (int (*)(...))(& _ZTI4XMan)
    52    (int (*)(...))MI::_ZThn4_NK2MI2vfEv
    56    (int (*)(...))XMan::_ZThn4_N4XManD1Ev
    60    (int (*)(...))XMan::_ZThn4_N4XManD0Ev

    Construction vtable for MI (0x0x5c4b080 instance) in XMan
    XMan::_ZTC4XMan0_2MI: 16u entries
    0     0u
    4     0u
    8     0u
    12    (int (*)(...))0
    16    (int (*)(...))(& _ZTI2MI)
    20    (int (*)(...))MI::vf
    24    0u
    28    0u
    32    4294967292u
    36    4294967292u
    40    4294967292u
    44    (int (*)(...))-4
    48    (int (*)(...))(& _ZTI2MI)
    52    (int (*)(...))MI::_ZThn4_NK2MI2vfEv
    56    0u
    60    0u

    Construction vtable for VMan1 (0x0x5c4b0c0 instance) in XMan
    XMan::_ZTC4XMan0_5VMan1: 8u entries
    0     0u
    4     0u
    8     0u
    12    (int (*)(...))0
    16    (int (*)(...))(& _ZTI5VMan1)
    20    (int (*)(...))VMan1::vf
    24    0u
    28    0u

    Construction vtable for VMan2 (0x0x5c4b100 instance) in XMan
    XMan::_ZTC4XMan4_5VMan2: 15u entries
    0     4294967292u
    4     0u
    8     0u
    12    (int (*)(...))0
    16    (int (*)(...))(& _ZTI5VMan2)
    20    (int (*)(...))VMan2::vf
    24    0u
    28    0u
    32    4u
    36    4u
    40    (int (*)(...))4
    44    (int (*)(...))(& _ZTI5VMan2)
    48    (int (*)(...))VMan2::_ZTv0_n12_NK5VMan22vfEv
    52    0u
    56    0u

## ==⚡ GDB & Class Layout 类数据结构布局
- Debugging with GDB - Print Settings https://ftp.gnu.org/old-gnu/Manuals/gdb/html_node/gdb_57.html
- C++虚函数表深入探索(详细全面) https://cloud.tencent.com/developer/article/1599283

注意 GCC 编译时加 -g 参数产生的额外调试，额外调试符号能让 gdb 调试工作更明了。

有了调试信息后，就可以使用一些和调试直接相关的操作了，首先是列表命令 list，使用它可以列出指定行号的源代码内容。

以下是一个程序调试的一般过程：

    gcc source.cpp -lstdlib++ -g -o hello.exe
    gdb hello.exe

    (gdb) exec hello.exe
    (gdb) file hello.o
    Reading symbols from /hello.o...done.
    (gdb) l 47
    42      int main() {
    43          vector<HumanBeing*> b;
    44          HumanBeing *vman1 = new VMan1;
    45          b.push_back(vman1);
    ...
    (gdb) b 44
    Breakpoint 2 at 0x401651: file /spine-runtimes/spine-sfml/hello.cpp, line 44.
    (gdb) b main
    Breakpoint 1 at 0x401647: file /spine-runtimes/spine-sfml/hello.cpp, line 43.
    (gdb) i b
    Num     Type           Disp Enb Address    What
    1       breakpoint     keep y   0x00401647 in main()
                                               at /spine-runtimes/spine-sfml/hello.cpp:43
            breakpoint already hit 1 time
    2       breakpoint     keep y   0x00401651 in main()
                                               at /spine-runtimes/spine-sfml/hello.cpp:44
            breakpoint already hit 1 time
    (gdb) delete 1 2
    (gdb) info stack
    #0  main () at /spine-runtimes/spine-sfml/hello.cpp:51
    (gdb) info registers
    eax            0x729b28 7510824
    ecx            0x729b2c 7510828
    edx            0x409a80 4233856
    ebx            0x729b28 7510824
    esp            0x63fe60 0x63fe60
    ebp            0x63fe98 0x63fe98
    esi            0x729a30 7510576
    edi            0x3b     59
    eip            0x40173a 0x40173a <main()+266>
    eflags         0x206    [ PF IF ]
    cs             0x23     35
    ss             0x2b     43
    ds             0x2b     43
    es             0x2b     43
    fs             0x53     83
    gs             0x2b     43
    (gdb) r
    Starting program: /spine-runtimes/spine-sfml/hello.exe
    (gdb) c
    Continuing.
    (gdb) quit

操作步骤：

- 使用 gcc -g 编译好带调试符号的程序；
- 使用 gdb hello.exe 或者进入 gdb 再执行 exec hello.exe, file hello.o 命令先装入程序和调试符号；
- 使用 list 列表命令查看源代码；
- 使用 break 命令下断点，如 break main 或下在指定行 break 42；
- 执行 run 命令运行进行调试；
- 执行 quit 命令结束调试；

期间可以进行具体的调式工作，使用 examine 命令检查内存，使用 print 打印表达式。

    (gdb) p vman1
    $2 = (HumanBeing *) 0x729ac8
    (gdb) p &vman1
    $3 = (HumanBeing **) 0x63fe7c
    (gdb) p *vman1
    $4 = {_vptr.HumanBeing = 0x409aa0 <vtable for VMan1+20>}
    (gdb) p vman1->vf
    $5 = {const char *(const HumanBeing * const)} 0x4068a4 <HumanBeing::vf() const>
    (gdb) p VMan1::VMan1
    $6 = {void (VMan1 * const)} 0x406620 <VMan1::VMan1()>
    (gdb) p b
    $7 = std::vector of length 1, capacity 1 = {0x729ac8}
    (gdb) p b@1
    $8 = {std::vector of length 1, capacity 1 = {0x729ac8}}

获取实例地址和实例的成员结构信息：

    (gdb) p &hb
    $3 = (HumanBeing *) 0x63fe68
    (gdb) p &man
    $2 = (XMan *) 0x63fe60

    (gdb) p hb
    $4 = {_vptr.HumanBeing = 0x409a00 <vtable for HumanBeing+8>}
    (gdb) p man
    $1 = {<MI> = {<VMan1> = {<HumanBeing> = {
            _vptr.HumanBeing = 0x409a60 <vtable for XMan+20>}, <No data fields>}, <VMan2> = {<No data fields>}, <No data fields>}, <No data fields>}

尝试解引用对象首地址，处理后得到地址一个虚函数表地址，说明在 GCC 编译器中的虚函数表位于对象实例的最前端。并且，虚函数表 vtable 和实例数据结构中 *_vptr* 虚表指针中的 HumanBeing 所指地址一致：

    (gdb) p (int*)*(int *)0x63fe68
    $7 = (int *) 0x409a00 <vtable for HumanBeing+8>
    (gdb) p (int*)*(int*) 0x63fe60
    $8 = (int *) 0x409a60 <vtable for XMan+20>

这里说明一下转型 ( int * ) * ( int * )，先说右侧，它将 0x63fe68 这样一个数值转换成指针，这个指针指向这个地址。然后使用 * 进行解引用得到实例首地址的内容的引用。但是这个内容仅仅是个数值而以，要怎么处理还要看后面将它当作什么类型看待，所以，左侧圆括号目的是转型为一个指针。然后 GDB 将这个指针指向的内容打印出来，根据调试信息，可以知道这是虚函数表的所在。

另外，由于虚函数表使用的是二级指针，所以后续需要使用 void ** 转换后，再解引用运算变成一级指针。

关于指针对应信息的打印处理，假设定义了一个指针和类实例 XMan * xman 和 XMan man，那么打印信息如下：

    (gdb) p xman
    $1 = (XMan *) 0x759ac0
    (gdb) p &man
    $2 = (XMan *) 0x63fe60
    (gdb) p (XMan *) 0x63fe60
    $3 = (XMan *) 0x63fe60
    (gdb) p &xman
    $4 = (XMan **) 0x63fe7c

    (gdb) p man
    $5 = {<MI> = {<VMan1> = {<HumanBeing> = {
            _vptr.HumanBeing = 0x409a60 <vtable for XMan+20>}, <No data fields>}, <VMan2> = {<No data fields>}, <No data fields>}, <No data fields>}

    (gdb) p *xman
    $6 = {<MI> = {<VMan1> = {<HumanBeing> = {
            _vptr.HumanBeing = 0x409a60 <vtable for XMan+20>}, <No data fields>}, <VMan2> = {<No data fields>}, <No data fields>}, <No data fields>}
    
    (gdb) show print object
    Printing of object's derived type based on vtable info is off.
    (gdb) set print object on

    (gdb) p *xman
    $7 = (XMan) {<MI> = {<VMan1> = {<HumanBeing> = {
            _vptr.HumanBeing = 0x409a60 <vtable for XMan+20>}, <No data fields>}, <VMan2> = {<No data fields>}, <No data fields>}, <No data fields>}
    
    (gdb) p &main::man
    $9 = (XMan *) 0x63fe60
    (gdb) info symbol 0x63fe60
    vtable for XMan + 20 in section .rdata of /spine-runtimes/spine-sfml/build/XMan.exe

根据设置的显示方式不同，打印内容稍有差别。总体来说，前面圆括号表示的是当前打印的数据类型，它可以按同样的方式执行打印。如果是结构体或联合体等复合类型，就使用花括号表示，对象内部布局结构的子对象使用尖括号显示。

接下来，需要使用到 print 命令的 Addr@NUM 方式，它会将指定内存地址上的数据当作数组元素来处理，NUM 为元素个数。

如果打印 0 指针就会出错：Attempt to dereference a generic pointer.

另外，为了美化打印，使用到以下 Debugging with GDB - Print Settings，这些功能和 C++ 调试关系比较密切。

- `set print pretty on` 设置美化结构体的打印。
- `set print union on` 打开联合体的格式化显示；
- `set print array on` 打开数组的格式化显示；
- `set print demangle on` 打开 C++ 名字复原显示；
- `set print asm-demangle` on 打开汇编对象名字复原显示；
- `set demangle-style style` 设置 C++ 名字复原方案：
    - auto 将由 GDB 自动处理；
    - gnu  按 GNU C++ compiler (g++) 名字编码方案处理；
    - hp   按 HP ANSI C++ (aCC) 名字编码方案处理；
    - lucid 按 Lucid C++ compiler (lcc) 名字编码方案处理；
    - arm  按 C++ Annotated Reference Manual 方案；
- `set print object on` 打印对象时，通过 virtual function table 确认真实的派生类形，而不是声明类型。
- `set print static-members on` 打印 C++ 静态函数，默认开启。
- `set print vtbl on` 格式化打印 C++ 虚函数表，推荐打开。但不支持 HP ANSI C++ compiler aCC。

将 set 命令改变 show 命令，并且去掉后面的 on/off 参数值，可以查询当前的设置值。

另外，`x/nfu addr` 内存区检查，这是 examine 命令的简写，可以使用 $eip 作地址：参数作用：
- n 为重复数，默认值 1；
- f 指定格式，像 print 命令使用一样的格式：
    - x 十六进制
    - d 十进制
    - o 八进制
    - t 二进制
    - f 浮点数
    - u 无符号十进制
    - a 地址，类似 x 格式
    - c 字符
    - s 字符串
    - i 显示汇编指令，将内存数据作为 CPU 指令解析
    - z 前缀 0 的十六进制
- u 指定单位，默认是 w Words：
    - b Bytes.
    - h Halfwords (two bytes).
    - w Words (four bytes).
    - g Giant words (eight bytes)

可以对比，打开这些功能后，显示更有条理了：

    (gdb) p hb
    $4 = {_vptr.HumanBeing = 0x409a00 <vtable for HumanBeing+8>}
    (gdb) p /a *(void **)0x409a00@4
    $11 = {0x40692c <HumanBeing::vf() const>, 0x4063f0 <HumanBeing::~HumanBeing()>, 0x4063d0 <HumanBeing::~HumanBeing()>, 0x0}

    (gdb) set print array on
    (gdb) p /a *(void **)0x409a00@4
    $12 =   {0x40692c <HumanBeing::vf() const>,
      0x4063f0 <HumanBeing::~HumanBeing()>,
      0x4063d0 <HumanBeing::~HumanBeing()>,
      0x0}

    (gdb) p *vman1
    $20 = {<HumanBeing> = {_vptr.HumanBeing = 0x409aa0 <vtable for VMan1+20>}, <No data fields>}
    (gdb) set print object on
    (gdb) set print pretty on
    (gdb) p man
    $21 = (XMan) {
      <MI> = {
        <VMan1> = {
          <HumanBeing> = {
            _vptr.HumanBeing = 0x409a60 <vtable for XMan+20>
          }, <No data fields>},
        <VMan2> = {<No data fields>}, <No data fields>}, <No data fields>}

打印 XMan 虚函数表，然后就可以更晰地检查内存数据了：

    (gdb) p *(void **)0x409a60@4
    $28 =   {0x40693c <MI::vf() const>,
      0x40665c <XMan::~XMan()>,
      0x40663c <XMan::~XMan()>,
      0xfffffffc}
    (gdb) x /20aw *(void **)0x409a60
    0x40693c <MI::vf() const>:      0x83e58955      0x4d8918ec      0xf4458bf4      0x5e8c189
    0x40694c <MI::vf() const+16>:   0xc9000000      0x909090c3      0x83e58955      0x4d8904ec
    0x40695c <VMan1::vf() const+8>: 0x9068b8fc      0xc3c90040      0x83e58955      0x4d8904ec
    0x40696c <VMan2::vf() const+8>: 0x906eb8fc      0xc3c90040      0x83e58955      0x4d8904ec
    0x40697c <__gnu_cxx::new_allocator<HumanBeing*>::max_size() const+8>:   0xffffb8fc      0xc3c93fff      0x83e58955      0x4d8904ec



## ==⚡ Object Model 对象模型
- 图说 C++ 对象内存布局 - https://www.cnblogs.com/QG-whz/p/4909359.html
- Inside The C++ Object Model 学习笔记 - https://www.cnblogs.com/qiaozhoulin/p/5227690.html

参考 1996 年发行的 *Inside the C++ Object Model*，这本书中讲的 C++ Object Model 是重点。基于 C++ 实现强大的面向对象编程能力，其对象模型也是复杂的。

在C++对象模型中，非静态数据成员 non-static data members 被放置在类实例的结构体之内，静态数据成员 static data members 和所有成员方法则存放在类全局数据结构之内。但对于编程者而言，代码中 class 定义的类结构是一个整体，看不到以普通数据成员与方法成员分离存储的数据结构。在 C 语言中，数据和操作数据的方法是分离设计的，但在 C++ 这种面向对象的高级语言中，数据和相应的操作方法被组合到了一起，形成的以类为单位的编程体系。以类这组织的数据结构就称为抽象数据类型 ADT (Abstract Data Type)。抽象数据类型是一个实现包括储存数据元素的存储结构以及实现基本操作的算法。在这个数据抽象思想中，数据类型的定义和它的实现是分开的，这在软件设计中是一个重要的概念。

C++ 的虚函数 virtual function 是通过虚函数表+虚指针来支持的，为每个类生成一个表格，称为虚表 virtual table，简称vtbl。虚表中存放着一堆指针，这些指针指向该类每一个虚函数。虚表中的函数地址将按声明时的顺序排列
每个类对象都拥有一个虚表指针 vptr。虚表指针的设定与重置皆由类的复制控制，也即是构造函数、析构函数、赋值操作符等来完成。vptr的位置由编译程序决定，现在许多编译器把 vptr 放在类对象的最前端，即对象的地址就是 vptr 的地址。虚函数表的前面设置了一个指针指向 type_info 用以支持运行时类型识别 RTTI(Run Time Type Identification)。RTTI 是为多态而生成的信息，包括对象继承关系，对象本身的描述等。

多态 Polymorphism 按字面的意思就是多种状态，有动态多态和静态多态。动态多态是指一般的多态，是通过类继承和虚函数机制实现的多态；静态多态是通过模板来实现，这种多态在编译时完成绑定。在面向对象语言中，接口的多种不同的实现方式即为多态。多态性是允许了类对象当作父类对象的技术，将子类对象赋值给父类对象变量之后，父类对象变量就可以根据当前赋值给它的子对象的特性以不同的方式运作。多态性在 C++ 中是通过虚函数实现的，多态与非多态的实质区别就是函数地址是早绑定还是晚绑定。如果函数的调用，在编译器编译期间就可以确定函数的调用地址，并生产代码，是静态的，就是说地址是早绑定的。而如果函数调用的地址不能在编译器期间确定，需要在运行时才确定，这就属于晚绑定。多态的实现基于晚绑定，有三个条件，有继承、虚函数重写、有父类指针指向子类对象，这种将子类转成父类的转型就叫向上转型 upcasting。如果没有使用虚函数，即没有利用 C++ 多态性，基类指针调用相应的函数时总是指定基类函数本身，而无法调用到子类中重写的函数。

    #include <iostream>
    struct A {
        virtual void foo() { std::cout << "A::foo() is called" << std::endl; }
        void bar() { std::cout << "A::bar() is called" << std::endl; }
    };
    struct B: public A {
        void foo() { std::cout << "B::foo() is called" << std::endl;}
        void bar() { std::cout << "B::bar() is called" << std::endl; }
    };
    
    int main()
    {
        A *a = new B();
        a->foo(); // B::foo() is called
        a->bar(); // A::bar() is called
    }

有虚函数的类，它在类内存的开始有一个指针指向虚函数表，虚函数表中包含了基类中以 virtual 修饰的所有虚函数。在基类中，虚函数表中的 foo 指向的是 A::foo。而在子类虚函数表中的 foo 指向的是 B::foo，因而在使用基类指针调用实例方法时当前对象虚函数表中对应的函数就会被执行。

C++的多态在编程的作用类似 C# 和 Java 的接口概念，在设计程序时，只要给指定的入口声明一个基类数据类型，在首先会针对数据进行抽象（确定基类）和继承（确定派生类），构成类层次。这个类层次的使用者在使用它们的时候，如果仍然在需要基类的时候写针对基类的代码，在需要派生类的时候写针对派生类的代码，就等于类层次完全暴露在使用者面前。如果这个类层次有任何的改变（增加了新类），都需要使用者“知道”（针对新类写代码）。

大部分编译器都提供了查看C++代码中类内存分布的工具，在Visual Studio中，右击项目，Properties -> C/C++ -> Command Line -> Additional Options 中输入 /d1 reportAllClassLayout 即可在输出窗口中查看类的内存分布，其中 vftable 标记的就是 Virtual Function Table。对于 GCC 编译器，可以使用 -fdump-class-hierarchy 选项进行编译，会得到一个 .class 类结构信息文件。


    Vtable for A
    A::_ZTV1A: 3u entries
    0     (int (*)(...))0
    4     (int (*)(...))(& _ZTI1A)
    8     (int (*)(...))A::foo

    Class A
       size=4 align=4
       base size=4 base align=4
    A (0x0x5012ea8) 0 nearly-empty
        vptr=((& A::_ZTV1A) + 8u)

    Vtable for B
    B::_ZTV1B: 3u entries
    0     (int (*)(...))0
    4     (int (*)(...))(& _ZTI1B)
    8     (int (*)(...))B::foo

    Class B
       size=4 align=4
       base size=4 base align=4
    B (0x0x5035ac0) 0 nearly-empty
        vptr=((& B::_ZTV1B) + 8u)
      A (0x0x5012f50) 0 nearly-empty
          primary-for B (0x0x5035ac0)


## ==⚡ Memory Layout 内存布局

在 C++11 中内存布局分两个类型 trivial-layout 普通布局和 standard-layout 标准布局。

trivial-layout 类型支持静态初始化。如果一个类型是拷贝不变的 trivially copyable，使用memcpy这种方式把它的数据从一个地方拷贝出来会得到相同的结果，即浅拷贝可以保持数据结构的一致。

    * 不能有用户定义的默认构造函数；
    * 不能有默认拷贝构造函数，即有且只有一个参数，类型是本类的构造函数； 
    * 不能有重载拷贝赋值运算符；
    * 不能有重载移动赋值运算符，即 operator=(T&&){} 这种结构；
    * 不能有默认析构函数，即没有参数的析构器；
    * 不能有虚函数；
    * 不能有虚基类；

standard-layout 类型，C++标准中的是这样定义的：

    * 没有虚函数和虚基类
    * 基类都符合标准布局
    * 所有的非静态数据成员都符合标准布局或是引用
    * 非静态数据成员的访问控制必须是相同
    * 在派生类中没有非静态数据成员，且在基类中最多有一个基类拥有非静态数据成员
    * 相同基类的非静态数据成员不能作为第一个成员，也就是说在子类中的第一个非静态数据成员不能是父类或其子类

计算机科学及面向对象编程 OOP (Object-oriented Programming) 有个被动数据结构的概念 PDS (Passive Data Structure) 也叫 POD (Plain Old Data Structure)。POD 判断的一个基本原则是没有使用 OOP 特性。以上两个内存布局的要求就是 POD 数据的判断条件，只有同时满足了 trival-layout 和 standard-layout 才是 POD 数据类型。

Classes versus Structs

```cpp
struct MyStruct
{
    int myInt = 0; // this defaults to public
};

class MyClass
{
    int myInt = 0; // this defaults to private
};
```

通俗地讲，兼容传统 C 语言的 struct、union 及基本数据类型的都是 POD，如 int、char、float、long、unsigned char、double 等等，C++、C 的 POD 数据模型的内存布局是兼容的。聚集数据类型 Aggregate 也是 POD，要求满足以下条件：

    * no user-declared constructors,
    * no private nor protected non-static data,
    * no virtual base classes,
    * no virtual functions.

下面代码判断对象属不属于何种 POD 类型，is_pod 和 is_trivial 等模板类提供常量属性 value 来表明目标是否是所指类型：

    #include <iostream>

    using namespace std;
     
    struct A { int m; };
    struct B { private: int p1; };
    // struct C { int m1; private: static int p1; };
    // struct D { int m1; protected: static int p1; };

    struct C { int m1; private: int p1; };
    struct D { int m1; protected: int p1; };
    class E { virtual void foo(); };
    class F { F(){} };
    class G { G(G&){} };
    class H { H operator=(H& object){ return object; } };
    class I { I operator=(I&& object){} }; // 重载移动赋值运算符，C++11新特性之右值引用(&&)
    class J { ~J(){} };
    class K : E {};

    #if __cplusplus<201103L
        #warning C++ 2011 standard required
        #define log(T) void(0);
    #else
        #include <type_traits>
        #define log(T) cout << is_pod<T>::value << "\t" << is_trivial<T>::value << "\t" << is_standard_layout<T>::value << "\t" #T "\n";
    #endif

    int main()
    {
        cout << std::boolalpha;
        test(A); // true        true    true    A
        test(B); // true        true    true    B
        test(C); // false   true    false   C
        test(D); // false   true    false   D
        test(E); // false   false   false   E
        test(F); // false   false   true    F
        test(G); // false   false   true    G
        test(H); // false   false   true    H
        test(I); // false   false   true    I
        test(J); // false   false   true    J
        test(K); // false   false   false   K
    }

## ==⚡ C++ FAQs Virtual Functions

C++ FAQs Virtual Functions

- FAQ 8.05 Should an overridden virtual function throw an exception?
- FAQ 8.06 Can an overridden virtual function be a no-op?
- FAQ 8.07 Why does C++ make it so hard to fix the Ostrich/Bird dilemma?
- FAQ 20.13 When the constructor of a base class calls a virtual function, why isn't the override called?
- FAQ 20.14 When a base class destructor calls a virtual function, why isn't the override called?
- FAQ 21.02 What is a virtual member function?
- FAQ 21.03 How much does it cost to call a virtual function compared to calling a normal function?
- FAQ 21.04 How does C++ perform static typing while supporting dynamic binding?
- FAQ 21.05 Can destructors be virtual?
- FAQ 21.06 What is the purpose of a virtual destructor?
- FAQ 21.07 What is a virtual constructor?
- FAQ 21.08 What syntax should be used when a constructor or destructor calls a virtual function in its object?
- FAQ 21.09 Should the scope operator :: be used when invoking virtual member functions?
- FAQ 21.10 What is a pure virtual member function?
- FAQ 21.11 Can a pure virtual function be defined in the same class that declares it?
- FAQ 21.12 How should a virtual destructor be defined when it has no code?
- FAQ 21.13 Can an ABC have a pure virtual destructor?
- FAQ 21.14 How can the compiler be kept from generating duplicate outlined copies of inline virtual functions?
- FAQ 21.15 Should a class with virtual functions have at least one non-inline virtual function?
- FAQ 24.10 Can an ABC's assignment operator be virtual?
- FAQ 24.11 What should a derived class do if a base class's assignment operator is virtual?
- FAQ 29.05 Can virtual functions be overloaded?
- FAQ 33.12 When should a nonfinal virtual function be invoked with a fully qualified name?


### ===✒ FAQ 8.05 virtual 虚函数重写版该抛异常还是 no-op 什么也不做？

C++ FAQs 提出一个问题，该不该在虚函数重写版本中抛出异常，还是 no-op 什么也不做：

- FAQ 8.05 Should an overridden virtual function throw an exception?
- FAQ 8.06 Can an overridden virtual function be a no-op?
- FAQ 8.07 Why does C++ make it so hard to fix the Ostrich/Bird dilemma?

用鸵鸟困局演示 Ostrich / Bird dilemma，假设 Bird::fly() 这个基类方法不抛出异常：

```cpp
#include <iostream>

using namespace std;

class Bird {
public:
    Bird() throw();
    virtual ~Bird() throw();
    int altitude() const throw();
    virtual void fly() throw();
        // PROMISE: altitude() will return a number > 0; never
        // throws an exception
protected:
    int altitude_;
};

Bird::Bird() throw()
: altitude_(0)
{ }

Bird::~Bird() throw()
{ }

int Bird::altitude() const throw()
{ 
    return altitude_; 
}

void Bird::fly() throw()
{ 
    altitude_ = 100; 
}
```

基于基类的约定，fly() 成员函数不会抛出异常。

```cpp
class CannotFly { };
class Ostrich : public Bird {
public:
    virtual void fly() throw(CannotFly);
    // PROMISE: Throws an exception despite what Bird says
};

void Ostrich::fly() throw(CannotFly)
{ 
    throw CannotFly();
    // or Does nothing despite what Bird said (bad!)
}

void sample(Bird& bird) throw()
{
    bird.fly();
}

int main()
{
    Ostrich bird;
    sample(bird);
}
```

对 Bird::fly() 来说，sample() 调用是合理的。

但是对于 Ostrich::fly()，它定义为抛出异常，假如有人合法地将 Ostrich 传递给 sample()，程序就崩了。

不能责怪在 main() 将鸵鸟传递给 sample() 函数，因为鸵鸟遗传自鸟类，因此鸵鸟被认为是鸟类的替代品。

也不能责怪 sample() 相信 Bird::fly() 的承诺。事实上，程序员是应该依赖于规范而不是实现。因此，责任在于编写 Ostrich 鸵鸟类的作者，他声称鸵鸟是鸟类的替代品，尽管鸵鸟的行为不像鸟。

如果 Ostrich::fly() 什么也不做是不是可以呢？虽然这不会导致程序崩溃，但是这种做法也不符合基类约定，执行一个动作就应该有相应的。

教训是，如果基类禁止抛出异常，则不能通过抛出异常或什么也不做来修复不正确的继承。因为不正当继承的根源是违反约定的行为，而抛出异常是函数行为的一部分。

鸵鸟是否可以替代鸟的问题不是 C++ 语言的失败，也不是面向对象技术的失败。这是领域分析的失败，领域分析错误地得出了关于问题领域的结论：所有鸟类飞行时的海拔高度都是正的。稳定的 OO 软件依赖于对问题域的准确理解和在类关系中正确编码问题域知识。如果设计团队中没有人理解问题域，那么设计会有缺陷也就不足为奇了。这突出了“领域专家”在 OO 项目中的关键作用。

### ===✒ FAQ 19.10 为什么友元不能是 virtual？

C++ FAQs 常见问题：为什么友元不能是 virtual？

FAQ 19.10 What does it mean that friends aren't virtual?

友元不是动态绑定的，但是有一个简单的 inline 习惯用法使用友元函数的语法启用虚拟函数的功能，即为友元启用动态绑定，这个习语被称为虚拟友元函数。

虚拟友元函数习惯用法是：为友元函数提供动态绑定操作的作用，使用友元函数语法，但操作必须动态绑定时使用它。

友元函数不会动态绑定。但是，有一个简单的单行习惯用法，它使用友元函数的语法启用虚拟函数的功能（即动态绑定）。这个习语被称为虚拟朋友函数习语。

简单地说，就是使用一个 friend 函数去调用一个 protected: virtual member 函数。例如，假设 Shape 类是一个抽象基类，并且通过 cout<< shape 这样的表达来打印信息。其中 shape 是派生自 Shape 的子类对象，例如 Circle。要使用虚拟友元函数习惯用法，operator<< 操作符将要声明为 Shape 的友元，并将可以调用 protected: pure virtual member，如 print(ostream&）const 保护成员函数。

注意，在整个继承层次结构中，只有基类声明了友元 operator<< 操作符，子类没有，但是 operator<< 可以访问子类的虚所保护成员或私有成员。

```cpp
#include <iostream>

using namespace std;

class Shape {
public:
  virtual ~Shape() throw();
  friend ostream& operator<< (ostream& ostr, const Shape& s) throw();
protected:
  virtual void print(ostream& ostr) const throw() = 0;
  // virtual void print(ostream& ostr) const throw();
};

inline ostream& operator<< (ostream& ostr, const Shape& s) throw()
{
  s.print(ostr);
  return ostr;
}
// void Shape::print(ostream& ost) const throw() { 
//  cout << "implementation can be omit for pure virtual function." << endl;
// }
Shape::~Shape() throw() { }

class Circle : public Shape {
public:
  Circle() throw();
protected:
  // virtual void print(ostream& ostr) const throw();
  void print(ostream& ostr) const throw();
  float radius_;
};

Circle::Circle() throw() : radius_(42) { }
void Circle::print(ostream& ostr) const throw()
{ ostr << "Circle of radius " << radius_; }

void userCode(Shape &shape)
{
    cout << shape << endl;
}

int main()
{
    Circle circle;
    userCode(circle);
}
```

例子还有一个可能被忽略的问题，可能会导致报错： error C2804: operator << 二元运算符的参数太多。

重载运算符相当于给类定义成员函数，对于二元运算符它的第一个参数就应该是当前的类，因为成员函数需要类实例去调用，第一个参数就必需是当前的类型，如果有的话，它的作用就是当作 this 指针指向当前实例。

但是这个例子中，Shape 又必需放到第二个参数中，第一个参数必需是 ostream，否则 operator << 无法按需要定义。

解决方法也就是使用友元函数，将这个要重载的二元运算符声明为友元函数，这样它就不需要使用类实例去调用成员。


### ===✒ FAQ 20.12 没有代码的 virtual 解构器如何定义?

- FAQ 21.12 How should a virtual destructor be defined when it has no code?
- FAQ 20.05 What happens when a destructor is executed?

应该使用 inline virtual functions 作为解构函数，避免子类解构时自动调用父类解构函数，以下示范代码定义了 `inline Base::~Base()`，编译器会自动为子类合成这个解构函数，而不是在 `Derived::~Derived()` 额外调用一次。

```cpp
#include <iostream>
using namespace std;

// Declarationss
class Base {
public:
  virtual void f() throw();
  virtual void g() throw();
  virtual ~Base()  throw();
};

class Derived : public Base {
public:
  virtual void f() throw();
};

// Definitions ("implementation" is for interface)
void Base::f() throw() { cout << "Base::f()\n"; }
void Base::g() throw() { cout << "Base::g()\n"; }
inline Base::~Base()  throw() { cout << "Not really a ~Base::Base()\n"; }

void Derived::f() throw() { cout << "Derived::f()\n";  }

int main()
{
  Base b; //                <-- OK: destructor really is a Base:~Base()
  b.f();
  b.g();
  Derived d; //             <-- OK: destructor really is a Derived:~Derived()
  d.f();
  d.g();
}
```


### ===✒ FAQ 20.13 基类构造器调用 virtual 函数时为何不是调用重写版本?

C++ FAQs 常见问题：当基类的构造函数或解构函数调用虚函数时，为什么不调用重写方法？

- FAQ 20.13 When the constructor of a base class calls a virtual function, why isn't the override called?
- FAQ 20.14 When a base class destructor calls a virtual function, why isn't the override called?

这个问题很明显，构造函数就是保证使用类实例之前构造内存中的数据结构的。在构造器中调用的虚函数只可以是本身实现的，而不是子类重写的，因为它们还没有完成构造。解构过程和构造过程完全相反，在基类解构前，先要确定子类完全解构。

```cpp
#include <iostream>
using namespace std;

class MemberObject {
public:
    MemberObject()     throw();
    void doSomething() throw();
};

MemberObject::MemberObject()     throw()
{ cout << "MemberObject ctor\n"; }
void MemberObject::doSomething() throw()
{ cout << "MemberObject used\n"; }

class Base {
public:
    Base()           throw();
    virtual void f() throw();
};

Base::Base()   throw() { cout << "Base ctor\n"; f(); }
void Base::f() throw() { cout << "Base::f()\n"; }

class Derived : public Base {
public:
    Derived()        throw();
    virtual void f() throw();
protected:
    MemberObject m_;
};

Derived::Derived() throw()
: Base(), m_() { cout << "Derived ctor\n"; }
void Derived::f()  throw()
{ cout << "Derived::f()\n"; m_.doSomething(); }

int main()
{
    Derived d;
    cout << "====\n";
    d.f();
}
// Output:
// Base ctor
// Base::f()
// MemberObject ctor
// Derived ctor
// ====
// Derived::f()
// MemberObject used
```

### ===✒ FAQ 21.07 virtual 虚构造器是什么？

C++ FAQs 常见问题：虚构造器是什么？

- FAQ 21.07 What is a virtual constructor?
- FAQ 16.05 What is an analogy for static member functions?

尽管构造函数是不能为虚拟的，但变通的方法是，不要认为构造函数是对象上的普通成员函数，想象它们是创建对象的静态成员函数。有一种习惯用法 virtual constructor idiom，可以实现对象的创建而不需要指定具体类型。

比如，以下示范代码中，给 Shape 类中定义了：

- virtual clone() const 方法，作为拷贝构造器使用。
- virtual createSimilar() const 方法，作为默认构造器使用。

注意，后面的 const 修饰符可以供编译器作为重载参考。

以下示范代码中，子类实现了父类的虚函数，virtual 关键字可以省略，但为了直观还是使用了。这些虚函数当作构造器使用，通过基类指针调用 clone() 这些方法就可以实现子类实例的创建，这就是虚拟多态机制的好处。

FAQ 21.08 在构造器、解构器中调用虚拟函数可以使用作用域操作符，Scope operator :: 来指定要调用哪个类作用域下的虚函数，如 Shape::draw()。

FAQ 21.09 在子类中也可以使用 Scope operator :: 来调用虚函数，它的目的是跳过虚拟多态机制，因为动态绑定是
对于用户来说非常重要，用户代码通常应该避免使用它。

注意，虚函数返回的是经过 auto_ptr 智能指针包装的对象，在 C++11 后，这个智能指针已经被 unique_ptr 取代。使用智能指针的好处是可以自动进行内存管理，注意代码中的注解。

```cpp
#include <new>
#include <memory>
#include <iostream>
using namespace std;

class Shape;

typedef auto_ptr<Shape>  ShapePtr;
// typedef unique_ptr<Shape>  UniShapePtr;

class Shape {
public:
           Shape()                       throw();
  virtual ~Shape()                       throw();
  virtual void draw() const              throw() = 0;
  virtual ShapePtr clone() const         throw(bad_alloc) = 0;
  virtual ShapePtr createSimilar() const throw(bad_alloc) = 0;
};

Shape::Shape()  throw() { }
Shape::~Shape() throw() { }

class Circle : public Shape {
public:
  Circle(int radius=0)                   throw();
  virtual void draw() const              throw();
  virtual ShapePtr clone() const         throw(bad_alloc);
  virtual ShapePtr createSimilar() const throw(bad_alloc);
protected:
  int radius_;
};

Circle::Circle(int radius) throw() : Shape(), radius_(radius) { }
void Circle::draw() const throw()
{ 
  cout << "Circle: radius=" << radius_ << '\n'; 
}
ShapePtr Circle::createSimilar() const throw(bad_alloc)
{ 
  return ShapePtr(new Circle()); 
}
ShapePtr Circle::clone() const throw(bad_alloc)
{ 
  return ShapePtr(new Circle(*this)); 
}

void userCode(ShapePtr s) throw()
{
  cout << "userCode() number 1: ";
  s->draw();
  ShapePtr copy = s->clone();
  cout << "userCode() number 2: ";
  copy->draw();
  ShapePtr similar = s->createSimilar();
  cout << "userCode() number 3: ";
  similar->draw();
} // (1) "copy" and "similar" are automatically deleted here (see FAQ 2.07)

int main()
{
  ShapePtr c(new Circle(42));
  cout << "main() number 1: ";
  c->draw();
  userCode(c);
  // (2) Because of auto_ptr's copy semantics, c will be NULL here (see FAQ 2.11)
}
```


# =🚩 Try Error Handling
- std::exception Class Reference https://gcc.gnu.org/onlinedocs/gcc-4.6.2/libstdc++/api/a00475.html

在 C 语言中有两个主要主错误处理提供的文件头：

- `<assert.h>` Conditionally compiled macro that compares its argument to zero 
    - *assert* 宏函数，在给定条件表达式为 true 时中止程序。Release 构建配置中可以禁用。
    - *static_assert* 宏函数，静态断言需要在编译期可以判断的常量条件表达式。
- `<errno.h>` Macros reporting error conditions 
    - *errno* macro variable which expands to POSIX-compatible thread-local error number variable
    - *E2BIG*, *EACCES*, ..., *EXDEV* macros constant for standard POSIX-compatible error conditions

断言 assert 是一个宏定义，使用它，就可以在代码中插入用于验证的代码，并且可以通过定义一个 NDEBUG 符号来清除这些用于验证的代码。

断言会诊断指定条件表达式，必需是 scalar 值，如果比较结果不为 0，那么就打印诊断信息，然后调用标准库的 abort() 结束程序。

诊断信息包含条件表达式、还有标准的宏 `__FILE__`, `__LINE__`, `__func__` (since C99)

另外，除了断言，静态断言 static_assert (C11)，它需要在编译期完成条件判断是否为 false。

```cpp
static_assert(2 + 2 == 4, "2+2 isn't 4");      // well-formed
static_assert(sizeof(int) < sizeof(char),
            "this program requires that int is less than char"); // compile-time error
            ```

在 C++ 语言中，错误处理模块内容大量增加。

以下是 `<system_error>` 引入与操作系统、流I/O、std::future 或其它底层 API 相关的错误条件： 

- *error_category* (C++11) base class for error categories (`class`) 
- *generic_category* (C++11) identifies the generic error category (`function`) 
- *system_category* (C++11) identifies the operating system error category (`function`) 
- *error_condition* (C++11) holds a portable error code (`class`) 
- *errc* (C++11) the std::error_condition enumeration listing all standard `<cerrno>` macro constants (`class`) 
- *error_code* (C++11) holds a platform-dependent error code (`class`) 
- *system_error* (C++11) exception class used to report conditions that have an error_code (`class`) 


在 `<exception>` 提供了多个和 C++ 程序的异常处理相关的类和函数。

- *exception* base class for exceptions thrown by the standard library components (class) 

Capture and storage of exception objects

- *uncaught_exceptionuncaught_exceptions* (C++17) checks if exception handling is currently in progress (function)
- *exception_ptr* (C++11) shared pointer type for handling exception objects (typedef)
- *make_exception_ptr* (C++11) creates an std::exception_ptr from an exception object (function template)
- *current_exception* (C++11) captures the current exception in a std::exception_ptr (function)
- *rethrow_exception* (C++11) throws the exception from an std::exception_ptr (function)
- *nested_exception* (C++11) a mixin type to capture and store current exceptions (class)
- *throw_with_nested* (C++11) throws its argument with std::nested_exception mixed in (function template)
- *rethrow_if_nested* (C++11) throws the exception from a std::nested_exception (function template)

在 `<exception>` 定义了异常处理失败时的应对方法：

- *terminate* function called when exception handling fails (function)
- *terminate_handler* the type of the function called by std::terminate (typedef)
- *get_terminate* (C++11) obtains the current terminate_handler (function)
- *set_terminate* changes the function to be called by std::terminate (function)
- *bad_exception* exception thrown when std::current_exception fails to copy the exception object (class)

Handling of exception specification violations (removed in C++17) 

- *unexpected* (until C++17) function called when dynamic exception specification is violated (function)
- *unexpected_handler* (until C++17) the type of the function called by std::unexpected (typedef)
- *get_unexpected* (C++11)(until C++17) obtains the current unexpected_handler (function)
- *set_unexpected* (until C++17) changes the function to be called by std::unexpected (function)


在 `<stdexcept>` 定义的异常分类主要有两类：

- Logic errors are a consequence of faulty logic within the program and may be preventable. 
- Runtime errors are due to events beyond the scope of the program and can not be easily predicted.

- *logic_error* exception class to indicate violations of logical preconditions or class invariants (`class`)
- *invalid_argument* exception class to report invalid arguments (`class`)
- *domain_error* exception class to report domain errors (`class`)
- *length_error* exception class to report attempts to exceed maximum allowed size (`class`)
- *out_of_range* exception class to report arguments outside of expected range (`class`)
- *runtime_error* exception class to indicate conditions only detectable at run time (`class`)
- *range_error* exception class to report range errors in internal computations (`class`)
- *overflow_error* exception class to report arithmetic overflows (`class`)
- *underflow_error* exception class to report arithmetic underflows (`class`)
- *tx_exception* (TM TS) exception class to cancel atomic transactions (`class template`)

std::exception 异常类层次结构：

- logic_error 
    -  
    - domain_error 
    - length_error 
    - out_of_range 
    - future_error(C++11) 
    - bad_optional_access(C++17) 
- runtime_error 
    - range_error 
    - overflow_error 
    - underflow_error 
    - regex_error(C++11) 
    - tx_exception(TM TS) 
    - system_error(C++11) 
        - ios_base::failure(C++11) 
        - filesystem::filesystem_error(C++17) 
- bad_typeid 
- bad_cast 
    - bad_any_cast(C++17) 
- bad_weak_ptr(C++11) 
- bad_function_call(C++11) 
- bad_alloc 
    - bad_array_new_length(C++11) 
- bad_exception 
- ios_base::failure(until C++11) 
- bad_variant_access(C++17) 

捕捉尽量多的信息帮助调试程序：

- 使用 std::exception 基础类，并按需要进行扩展。
- 使用基类的 what() 方法返回异常信息。
- 使用 catch(...) 捕捉所有异常。

```cpp
  class exception
  {
  public:
    exception() { }
    virtual ~exception();
#if __cplusplus >= 201103L
    exception(const exception&) = default;
    exception& operator=(const exception&) = default;
    exception(exception&&) = default;
    exception& operator=(exception&&) = default;
#endif

    /** Returns a C-style character string describing the general cause
     *  of the current error.  */
    virtual const char* what() const;
  };
```

C++ 的类有四类特殊的成员函数，分别为：默认构造函数，析构函数，拷贝函数以及拷贝赋值函数。如果程序没有显式地为一个类定义某个特殊成员函数，而又需要用到该特殊成员函数时，编译器会隐式地为这个类生成一个默认的特殊成员函数。

但是，显式自定义了非默认构造函数，却没有定义默认构造函数，尝试执行默认构造行为时又会出现编译错误。

C++11 为了解决默认函数的使用效率及便利问题，引入了其中一个关于构造函数的新特性 = default。这样就不必为默认构造函数显式提供函数体，通过附加说明符 = default，编译器将创建此函数的默认实现。

Defaulted Function 需要用于特殊的成员函数（默认构造函数，复制构造函数，析构函数等），并且没有默认参数。


## ==⚡ try-catch block
- function-try-block https://en.cppreference.com/w/cpp/language/function-try-block
- Stack Unwinding in C++ https://www.geeksforgeeks.org/stack-unwinding-in-c
- Exceptions and Error Handling https://isocpp.org/wiki/faq/exceptions

异常处理机制有三个部分：

- Throwing an exception 抛出异常对象等待 try 语句块进行捕捉处理；
- Catching an exception with a handler 在 try 语句块中定义异常处理方法；
- Using a try block 使用 try 语句块将可能会抛出异常的代码包裹起来；

✒ What shouldn’t I use exceptions for?  

- *Use throw* only to signal an error (which means specifically that the function couldn’t do what it advertised, and establish its postconditions).
- *Use catch* only to specify error handling actions when you know you can handle an error (possibly by translating it to another type and *rethrowing* an exception of that type, such as catching a bad_alloc and *rethrowing* a no_space_for_file_buffers).
- *Do not use throw* to indicate a coding error in usage of a function. Use *assert* or other mechanism to either send the process into a debugger or to crash the process and collect the crash dump for the developer to debug.
- *Do not use throw* if you discover unexpected violation of an invariant of your component, use *assert* or other mechanism to terminate the program. Throwing an exception will not cure memory corruption and may lead to further corruption of important user data.

✒ Why doesn’t C++ provide a “finally” construct?

Because C++ supports an alternative that is almost always better: The “resource acquisition is initialization” *RAII* technique. The basic idea is to represent a resource by a local object, so that the local object’s destructor will release the resource. That way, the programmer cannot forget to release the resource. For example:

```cpp
// wrap a raw C file handle and put the resource acquisition and release
// in the C++ type's constructor and destructor, respectively
class File_handle {
    FILE* p;
public:
    File_handle(const char* n, const char* a)
        { p = fopen(n,a); if (p==0) throw Open_error(errno); }
    File_handle(FILE* pp)
        { p = pp; if (p==0) throw Open_error(errno); }
    ~File_handle() { fclose(p); }
    operator FILE*() { return p; }   // if desired
    // ...
};
// use File_handle: uses vastly outnumber the above code
void f(const char* fn)
{
    File_handle f(fn,"rw"); // open fn for reading and writing
    // use file through f
} // automatically destroy f here, calls fclose automatically with no extra effort
  // (even if there's an exception, so this is exception-safe by construction)
```


异常捕捉代码块的几个用法：

```cpp
// 1) Catch-clause that declares a named formal parameter 
try { /* */ } catch (const std::exception& e) { /* */ }
// 2) Catch-clause that declares an unnamed parameter 
try { /* */ } catch (const std::exception&) { /* */ }
// 3) Catch-all handler, which is activated for any exception 
try { /* */ } catch (...) { /* */ }
```

示例：

```cpp
try {
    f();
} catch (const std::overflow_error& e) {
    // this executes if f() throws std::overflow_error (same type rule)
} catch (const std::runtime_error& e) {
    // this executes if f() throws std::underflow_error (base class rule)
} catch (const std::exception& e) {
    // this executes if f() throws std::logic_error (base class rule)
} catch (...) {
    // this executes if f() throws std::string or int or any other unrelated type
}
```

此外，为了处理构造函数初始化列表中发生的异常，必须为构造函数编写 function try block：

```cpp
struct S {
    std::string m;
    S(const std::string& arg) try : m(arg, 100) {
        std::cout << "constructed, mn = " << m << '\n';
    } catch(const std::exception& e) {
        std::cerr << "arg=" << arg << " failed: " << e.what() << '\n';
    } // implicit throw; here
};
```
try 关键字要放在构造函数初始化列表开始的分号前面，catch 语句连在构造函数体后，其中的异常也会一并 catch。

也可以将 function-try-block 应用于 main() 函数：

```cpp
int main() try
{
  A a;
  // use 'a' as needed ...
  return EXIT_SUCCESS;
}
catch (const char* e)
{
  std::cout << e << std::endl;
  return EXIT_FAILURE;
}
catch (const std::exception& e)
{
  std::cout << e.what() << std::endl;
  return EXIT_FAILURE;
}
```

注意：

The primary purpose of function-try-blocks is to log or modify, and then rethrow the exceptions thrown from the member initializer list in a constructor. They are rarely used with destructors or with regular functions.

Function-try-block does not catch the exceptions thrown by the copy/move constructors and the destructors of the function parameters passed by value: those exceptions are thrown in context of the caller.

Likewise, function-try-block of the main() function does not catch the exceptions thrown from the constructors and destructors of static objects (except for the constructors of function-local statics).


## ==⚡ try-catch demos

C++ 不会隐式转换 char 为 int，注意以下这个异常测试程序：

```cpp
#include <iostream> 
using namespace std; 

struct Inf
{
    char *tip;
    Inf(): Inf((char*)"Default") { }
    Inf(char *t): tip(t) { cout << "Inf ctor. " << tip << "\n"; }
    ~Inf(){ cout << "Inf dtor. " << tip << "\n"; }
};

class Leak
{
public:
    Inf m_info;
    Inf *m_infp;
    Leak()
    {
        m_infp = new Inf((char*)"pointer");
        throw "Error";
    }
};

int main() 
{
    // Leak warning; ///< Situation A
    try  { 
        // Leak warning; ///< Situation B
        try  {
            throw 'E'; 
            cout << "Unreachable.";
        } 
        catch (...) { 
            cout << "Handle inside\n"; 
            throw;   //Re-throwing an exception 
        } 
    }
    catch (int x)  { 
        cout << "Caught int\n" << x; ///< Nerver Here
    }
    catch (char x)  { 
        cout << "Caught char\n" << x; ///< Here
    }
    catch (...)  { 
        cout << "Default Exception\n";
    }
    return 0;
}
```

Default Output:

    Handle inside
    Caught char
    E

Open Situation A:

    Inf ctor. Default
    Inf ctor. pointer
    terminate called after throwing an instance of 'char const*'

Open Situation B:

    Inf ctor. Default
    Inf ctor. pointer
    Inf dtor. Default
    Default Exception

注意，catch 中指定标识符为引用，否则会选择原始异常对象的信息：

```cpp
#include <iostream>
#include <string>
#include <stdexcept>

using namespace std;

class SomeError: public runtime_error 
{
public:
    SomeError(char *str): runtime_error(str) { cout << "char* ctor. " << str << endl; }
    SomeError(string str): runtime_error(str) { cout << "string* ctor. " << str << endl; }
    SomeError(const SomeError &other): runtime_error(other) { cout << "copy ctor. " << other.what() << endl; }
    void operator= (SomeError &other) {
        cout << "operator= : " << this << " <= " << &other << endl;
    }
};

void doAction()
{
    throw SomeError(string("Some message"));
}

int main(int argc, char **argv) try
{
    SomeError *se = new SomeError(string("XYZ"));
    SomeError se2((char*)"ABC");
    se2 = *se; // operator=
    doAction();
}
// catch (exception ex)
catch (exception &ex)
{
    cout << ex.what() << endl;
}
```

## ==⚡ Stack Unwinding 栈展开

抛出异常时，将暂停当前函数的执行，开始查找匹配的 catch 子句，看是否可以处理该异常。如果不能处理，就退出当前函数，并且释放当前函数的内存并销毁局部对象，即为局部对象调用析构函数。然后，继续到上层的调用函数中查找，直到找到一个可以处理该异常的 catch。这个过程称为栈展开（stack unwinding）。当处理该异常的 catch 结束之后，紧接着该位置继续执行。

1. 为局部对象调用析构函数

但需要注意的是，Stack unwindig 虽然会为局部对象调用析构函数，但是如果一个块通过 new 动态分配内存，并且在释放该资源之前发生异常，该块因异常而退出，这样就会造成内存泄露。

2. 析构函数应该从不抛出异常

在为某个异常进行栈展开的时候，析构函数如果又抛出自己的未经处理的另一个异常，将会导致调用标准库 terminate 函数，它通常调用 abort 函数非正常退出程序，所以析构函数应该从不抛出异常。

3. 异常与构造函数

如果在构造函数对象时发生异常，此时该对象可能只是被部分构造，要保证能够适当的撤销这些已构造的成员。

4. 未捕获的异常将会终止程序

不能不处理异常。如果找不到匹配的 catch，程序就会调用库函数 terminate。

有二个重点：

- 构造函数中的异常；
- 析构函数中的异常；

对于类实例化的对象而言，不管是在堆上还是栈上，这个资源一定是会释放的。

但是对于这个对象的成员来说，就不一定了。当成员没有申请动态内存，由于 Stack Unwinding，如果有捕捉到异常，这个资源是一定释放的。但是如果成员是个指针，并且指向了在构造函数中执行 new 返回的动态内存，那么之后发生的 Exception 将会导致内存泄漏：


要想解决上述问题，答案就在于智能指针

C++11 destructors default to noexcept，throw will always call terminate().

也就是说析构函数中的 throw 行为一定会导致 terminate()，可以显式的将析构函数由默认的 noexcept 改为 noexcept(false)。

如果析构是由 Stack Unwinding 触发的，那么析构不可以抛出异常。这种事情一旦发生，会使得我们的程序进入尴尬状态，同时有两个异常要处理，因此 terminate 来快刀斩乱麻。

如果析构不是 Stack Unwinding 过程触发的，那么析构函数中的异常也可以被外面的 catch 语句捕获。

而从现实中的实践来看，由于析构函数是用来释放资源的，通常不会发生异常。即使发生异常，我们也没什么有效的应对措施。再综合上面的复杂情况，在实践中一般禁止在析构函数中抛出异常，改为记录日志等其它操作。

C++ 异常不带调用栈信息，当在外层捕获到下层自动传播来异常时，现场已经没了，对调试十分不利。反而可能是 return code 或 error code 向上层层传播更有利于定位到真正的问题。


## ==⚡ specifications
- deprecated feature https://en.cppreference.com/w/cpp/language/except_spec

虽然，Google C++ Style Guide 出于历史包袱制定不使用异常，看一下就写在这个 Style Guide 里这一行字：

Given that Google's existing code is not exception-tolerant, the costs of using exceptions are somewhat greater than the costs in a new project.

在特殊项目里，被禁用的 C++ 特性就多了，比如有些项目动态内存分配都不能使用。一些游戏项目为了追求高性能，也禁用异常。这个实际上也有一定的历史原因，现在主流 C++ 编译器，在异常关闭和开启时应该已经能够产生性能差不多的代码（在异常未抛出时）。代价是产生的二进制文件大小的增加，因为异常产生的位置决定了需要如何做栈展开（stack unwinding），这些数据需要存储在表里。

典型情况，使用异常和不使用异常比，二进制文件大小会有约百分之十到二十的上升。LLVM 就是因此放弃使用 C++ 异常机制的：

> Do not use RTTI or Exceptions
> In an effort to reduce code and executable size, LLVM does not use exceptions or RTTI (runtime type information, for example, dynamic_cast<>).


旧的 C++ 标准中使用函数异常声明列表来查看函数可能抛出的异常，函数后面跟着 *throw()* 表示不会抛出异常，除非在括号内填写要抛出的异常类型。

C++11 异常规范中抛弃了 *throw()* 而提出的一个新的关键字 *noexcept* 只用来表示明函数会不会抛出异常。

不抛出异常的表达有三种语法格式：

```cpp
// Syntax 
noexcept (1)  
noexcept(expression) (2)  
throw() (3) (deprecated) 
```

1) Same as noexcept ( true )
2) If expression evaluates to true, the function is declared to not throw any exceptions.
3) Same as noexcept(true) (since C++17) 
3) Non-throwing dynamic exception specification (unlike noexcept(true) guarantees stack unwinding and may call std::unexpected) (until C++17) 

Explanation

The noexcept-specification is a part of the function type and may appear as part of any function declarator. (since C++17)

The noexcept-specification is not a part of the function type (just like dynamic exception specification) and can only appear as a part of a lambda declarator or a top-level function declarator when declaring functions, variables, non-static data members of type function, pointer to function, reference to function, or pointer to member function, and also when declaring a parameter or a return type in one of those declarations that in turn happens to be a pointer or reference to function. It cannot appear in a typedef or type alias declaration.

```cpp
void f() noexcept; // the function f() does not throw
void (*fp)() noexcept(false); // fp points to a function that may throw
void g(void pfa() noexcept);  // g takes a pointer to function that doesn't throw
// typedef int (*pf)() noexcept; // error 
```


注意：

The throw-expression throw NULL; is not matched by a pointer catch clause, because the exception object type is int, but throw nullptr; is matched by any pointer or pointer-to-member catch clause.

If a catch-clause for a derived class is placed after the catch-clause for a base class, the derived catch-clause will never be executed.

```cpp
try {
    f();
} catch (const std::exception& e) {
    // will be executed if f() throws std::runtime_error
} catch (const std::runtime_error& e) {
    // dead code!
}
```

注意

When rethrowing exceptions, the second form must be used to avoid object slicing in the (typical) case where exception objects use inheritance:

```cpp
try {
    std::string("abc").substr(10); // throws std::length_error
} catch(const std::exception& e) {
    std::cout << e.what() << '\n';
//  throw e; // copy-initializes a new exception object of type std::exception
    throw;   // rethrows the exception object of type std::length_error
}
```

以下是被 C++11 抛弃的 dynamic exception specification 异常规范。

异常规范是 C++98 新增的一项功能，但是后来的 C++11 已经将它抛弃了，不再建议使用。

异常规范的初衷是好的，它希望让程序员看到函数的定义或声明后，立马就知道该函数会抛出什么类型的异常，这样程序员就可以使用 try-catch 来捕获了。如果没有异常规范，程序员必须阅读函数源码才能知道函数会抛出什么异常。

不过这有时候也不容易做到。例如，func_outer() 函数可能不会引发异常，但它调用了另外一个函数 func_inner()，这个函数可能会引发异常。再如，您编写的函数调用了老式的库函数，此时不会引发异常，但是库更新以后这个函数却引发了异常。

总之，异常规范的初衷实现起来有点困难，所以大家达成的一致意见是，最好不要使用异常规范。否则会收到：

    warning C4290: 忽略 C++ 异常规范，但指示函数不是 __declspec(nothrow)

在 C++17 之前，有两种类型的异常规范。 noexcept 规范是 C++11 中的新增功能。动态异常规范在 C++11 中已弃用，在 C++17 中已删除，但 noexcept(true) 除外，它是 throw() 的别名。

dynamic exception specification

- *throw( )*  (`deprecated` in c++11) 
- *throw(typeid, typeid, ...)*  (`deprecated` in C++11)(until C++17)
    - 1) Non-throwing dynamic exception specification (until C++17) 
    - 1) Same as noexcept(true) (since C++17) 

```cpp
void f() throw(int); // OK: function declaration
void (*fp)() throw (int); // OK: pointer to function declaration
void g(void pfa() throw(int)); // OK: pointer to function parameter declaration
typedef int (*pf)() throw(int); // Error: typedef declaration
```

Explanation

If a function is declared with type *T* listed in its exception specification, the function may throw exceptions of that type or a type derived from it.

Incomplete types, pointers or references to incomplete types other than cv `void*`, and rvalue reference types are not allowed in the exception specification. Array and function types, if used, are adjusted to corresponding pointer types. parameter packs are allowed (since C++11).

If the function throws an exception of the type not listed in its exception specification, the function *std::unexpected* is called. The default function calls *std::terminate*, but it may be replaced by a user-provided function (via *std::set_unexpected*) which may call *std::terminate* or throw an exception. If the exception thrown from *std::unexpected* is accepted by the exception specification, stack unwinding continues as usual. If it isn't, but *std::bad_exception* is allowed by the exception specification, *std::bad_exception* is thrown. Otherwise, *std::terminate* is called.

Example 抛出未声明异常对象：

```cpp
#include <iostream>
#include <exception>
#include <cstdlib>
 
class X {};
class Y {};
class Z : public X {};
class W {};
 
void f() throw(X, Y) 
{
    int n = 0;
    if (n) throw X(); // OK
    if (n) throw Z(); // also OK
    throw W(); // will call std::unexpected()
}
 
int main() {
  std::set_unexpected([]{ // lambada
      std::cout << "That was unexpected" << std::endl; // flush needed
      std::abort();
  });
  f();
}
```

Output:

    That was unexpected




# =🚩 Design Patterns 编程模式
- Cee Plus Plus Idioms http://wiki.c2.com/?CeePlusPlusIdioms
- c++ Patterns https://cpppatterns.com
- Design Patterns in Modern C++ Reusable Approaches for Object-Oriented Software Design by Dmitri Nesteruk
- Hands-On Design Patterns With C++ by Fedor G. Pikus - CH8 The Curiously Recurring Template Pattern

## ==⚡ CRTP Static Polymorphism 静多态


## ==⚡ Singleton with std::call_once (C++11)
- C++ 内存屏障总结 https://lday.me/2017/12/02/0018_cpp_atomic_summary/

call_once, once_flag, ONCE_FLAG_INIT

```cpp
// Defined in header <threads.h>   
void call_once( once_flag* flag, void (*func)(void) ); (1) (since C11) 
typedef /* unspecified */ once_flag (2) (since C11) 
#define ONCE_FLAG_INIT /* unspecified */ (3) (since C11) 
```

1) Calls function func exactly once, even if invoked from several threads. The completion of the function func synchronizes with all previous or subsequent calls to *call_once* with the same flag variable.
2) Complete object type capable of holding a flag used by *call_once*
3) Expands to a value that can be used to initialize an object of type *once_flag*.

The POSIX equivalent of this function is `pthread_once`.

Example

```cpp
#include <stdio.h>
#include <threads.h>
 
void do_once(void) {
    puts("called once");
}
 
static once_flag flag = ONCE_FLAG_INIT;
int func(void* data)
{
    call_once(&flag, do_once);
}
 
int main(void)
{
    thrd_t t1, t2, t3, t4;
    thrd_create(&t1, func, NULL);
    thrd_create(&t2, func, NULL);
    thrd_create(&t3, func, NULL);
    thrd_create(&t4, func, NULL);
 
    thrd_join(t1, NULL);
    thrd_join(t2, NULL);
    thrd_join(t3, NULL);
    thrd_join(t4, NULL);
}
```

Output:

    called once

C++ 内存模型可以被看作是 C++ 程序和计算机系统（包括编译器，多核CPU等可能对程序进行乱序优化的软硬件）之间的契约，它规定了多个线程访问同一个内存地址时的语义，以及某个线程对内存地址的更新何时能被其它线程看见。这个模型约定：没有数据竞争(data race)的程序是遵循顺序一致性的。该模型的核心思想就是由程序员用同步原语（例如，锁或者C++11中新引入的atomic类型的共享变量）来保证你程序是没有数据竞争的，这样CPU和编译器就会保证程序是按程序员所想的那样执行的（即顺序一致性）。换句话说，程序员只需要恰当地使用具有同步语义的指令来标记那些真正需要同步的变量和操作，就相当于告诉CPU和编译器不要对这些标记好的同步操作和变量做违反顺序一致性的优化，而其它未被标记的地方可以做原有的优化。编译器和CPU的大部分优化手段都可以继续实施，只是在同步原语处需要对优化做出相应的限制；而且程序员只需要保证正确地使用同步原语即可，因为它们最终表现出来的执行效果与顺序一致性模型一致。由此，C++多线程内存模型帮助我们在易编程性和性能之间取得了一个平衡。

在C++11标准之前，C++是建立在单线程语义上的。为了进行多线程编程，C++程序员通过使用诸如Pthreads，Windows Thread等C++语言标准之外的线程库来完成代码设计。以Pthreads为例，它提供了类似pthread_mutex_lock这样的函数来保证对共享变量的互斥访问，以防止数据竞跑。

Atomic operations library - Memory synchronization ordering (C++11) 

- *memory_order* defines memory ordering constraints for the given atomic operation (*typedef*)
- *kill_dependency* removes the specified object from the std::memory_order_consume dependency tree (*function template*)
- *atomic_thread_fence* generic memory order-dependent fence synchronization primitive (*function*)
- *atomic_signal_fence* fence between a thread and a signal handler executed in the same thread (*function*)

```cpp
// Defined in header <atomic>   
enum memory_order {
    memory_order_relaxed,
    memory_order_consume,
    memory_order_acquire,
    memory_order_release,
    memory_order_acq_rel,
    memory_order_seq_cst
};  (since C++11) 
```

std::memory_order specifies how regular, non-atomic memory accesses are to be ordered around an atomic operation. Absent any constraints on a multi-core system, when multiple threads simultaneously read and write to several variables, one thread can observe the values change in an order different from the order another thread wrote them. Indeed, the apparent order of changes can even differ among multiple reader threads. Some similar effects can occur even on uniprocessor systems due to compiler transformations allowed by the memory model.

The default behavior of all atomic operations in the library provides for sequentially consistent ordering (see discussion below). That default can hurt performance, but the library's atomic operations can be given an additional std::memory_order argument to specify the exact constraints, beyond atomicity, that the compiler and processor must enforce for that operation.




## ==⚡ Singleton with local static (C++11)
- C++ 内存屏障总结 https://lday.me/2017/12/02/0018_cpp_atomic_summary/

全局静态初始化也可以用来实现单例模式：

```cpp
#include <iostream>
#include <string>
#include <map>

using namespace std;

class AssetManager 
{
public:
    static int index;
    static const AssetManager self; // use const for Singleton
    // AssetManager(string name): name(name)
    AssetManager(): name("Default#" + std::to_string(AssetManager::index++))
    {
        cout << "AssetManager::AssetManager() " << this << endl;
        // self = *this; // Error: never new a Singleton
        // assert(&self == nullptr);
    }
    string name;
};

const AssetManager AssetManager::self = AssetManager();

int AssetManager::index = 0;

int main()
{
    map<string, AssetManager> mymap;
    // Demonstrates the risk of accessing non-existing elements via operator [].
    auto a = mymap["a"]; // auto-call default constructor.
    auto b = mymap["b"]; // auto-call default constructor.
    auto c = mymap.find("c");

    cout << "a: " << a.name << endl;
    if (c != mymap.end())
    {
        cout << "Found: " << c->first << " => " << c->second.name << endl;
    }
    else
    {
        cout << "Not found!" << endl;
    }
}
```

这种实现的问题是多个静态对象初始化不确定的问题。

虽然可以通过断言来实现类似的效果，它只会在尝试构造多实例时抛出断言错误信息，并且可以在 Release 构建中禁用：

```cpp
#include <iostream>
#include <string>
#include <map>
#include <cassert>

using namespace std;

class AssetManager 
{
public:
    string name;
    static int index;
    static AssetManager self;
    // AssetManager(string name): name(name)
    AssetManager(): name("Default#" + std::to_string(AssetManager::index++))
    {
        cout << "AssetManager::AssetManager() " << this << endl;
        assert(&self == nullptr);
        self = *this;
    }
};

AssetManager AssetManager::self;

int AssetManager::index = 0;

int main()
{
    map<string, AssetManager> mymap;
    // Demonstrates the risk of accessing non-existing elements via operator [].
    auto a = mymap["a"]; // auto-call default constructor.
    auto b = mymap["b"]; // auto-call default constructor.
    auto c = mymap.find("c");

    cout << "a: " << a.name << endl;
    if (c != mymap.end())
    {
        cout << "Found: " << c->first << " => " << c->second.name << endl;
    }
    else
    {
        cout << "Not found!" << endl;
    }
}
```

C++ 中 static 对象的初始化：

- non-local static 对象（函数外）
- local static 对象（函数内）

C++ 规定，non-local static 对象的初始化发生在 main 函数执行之前。也即 main 函数之前的单线程启动阶段，所以不存在线程安全问题。但 C++ 没有规定多个 non-local static 对象的初始化顺序，尤其是来自多个编译单元的 non-local static 对象，他们的初始化顺序是随机的。

对于 local static 对象，其初始化发生在控制流第一次执行到该对象的初始化语句时，多个线程的控制流可能同时到达其初始化语句。

在 C++11 之前，在多线程环境下 local static 对象的初始化并不是线程安全的。这个问题在 C++11 语言规范中解决了，C++11 规定，在一个线程开始 local static 对象的初始化后到完成初始化前，其他线程执行到这个 local static 对象的初始化语句就会等待，直到该local static 对象初始化完成。

C++11 规定了 local static 在多线程条件下的初始化行为，要求编译器保证了内部静态变量的线程安全性。

Effective C++ 基于 C++11 提出一种优雅的单例模式实现，使用函数内的 local static 对象。这样，只有当第一次访问 getInstance() 方法时才创建实例。这种方法也被称为 Meyers' Singleton。C++0x 之后该实现是线程安全的，C++0x 之前仍需加锁，C++0x 是 C++11 早期称谓。

```cpp
// version 1.2
class Singleton
{
private:
    Singleton() { };
    ~Singleton() { };
    Singleton(const Singleton&);
    Singleton& operator=(const Singleton&);
public:
    static Singleton& getInstance() 
        {
        static Singleton instance; // C++11 local static
        return instance;
    }
};
```

## ==⚡ Singleton 单态模式实现示例
- Implementing the Singleton Pattern in C# - C# in Depth http://csharpindepth.com/Articles/General/Singleton.aspx
- Design Patterns in Modern C++ by Dmitri Nesteruk Chapter 5 Singleton

C++ 的单态模式的实现，为了防止默认构造函数被调用，可以私有化一个构造函数。一个类的构造函数声明为 private 则其本身以及派生类都不能由系统实例化，即它实例化的对象不会在栈内存上。然后添加一个静态助手函数 getInstance 来管理唯一实例的构造过程，如果已经构造实例，这个助手函数就返回现有实例。

可以借助虚继承与友元的方式来实现单态模式，声明一个基类 Skeleton 并设置构造函数为 private 以及声明友元类 Singleton。友元类 Singleton 则虚继承 Skeleton。这样 Singleton 可以执行基类的构造器来实例化，如果其它类尝试继承 Singleton 或 Skeleton，那么在实例化时将会编译出错，因为其它类没有友元的特权，不能调用私有构造函数不能实例化。

```cpp
#include <iostream>

// Declaration & implementation combined together
class Skeleton {
    Skeleton() { std::cout << "Skeleton run ......" << std::endl; }
    friend class Singleton;
};

// Declaration part
class Singleton: virtual Skeleton {
public:
    static Singleton instance();
    static Singleton *_instance;
};

// Implementation part
Singleton *Singleton::_instance = NULL;
Singleton Singleton::instance(){
    if( _instance ) return *_instance;
    _instance = new Singleton();
    std::cout << "_instance @ " << _instance << std::endl;
    return *_instance;
}

class X: public Singleton { };
int main()
{
    Singleton s, y = Singleton::instance();
    // X x; // error: 'Skeleton::Skeleton()' is private
    return &s == &y? 1:0;
}
```

实例展示了类声明 Declaration 及实现 Implementation 是如何拆分或整合的。注意 Skeleton 这个类声明和实现是放在一起的，只有一个构造波函数，花括号的代码就是默认构造函数的实现。

Singleton 这个类则将类的声明和实现分离，注意声明部分的花括号结尾要加分号，否则可能出现奇怪的错误提示：

    error C2533: “A::{ctor}”: 构造函数不能有返回类型

通常类型声明部分独立放在头文件中，头文件只包含编译器需要知道类型的编译规则信息。当其它程序需要使定义好的类时，只需要引入头文件，那么编译器就知道如何编译代码中出现的类。类实现部分则作为代码，经过编译器的编译形成机器码，在程序使用到类时再根据实际情况选择是否需要进行链接。如作为类库编译的情况下就需要链接，像这里的示例这样定义和实现同在一个文件，是不需要链接过程的。

声明和实现混合的方式越来越广泛，许多开源库都只提供 .hpp 头文件，里面就包含了实现代码。



# =🚩 Declarations & Definitions 声明、初始化与对象模型
- 前端要以正确的姿势学习编译原理 - https://zhuanlan.zhihu.com/p/36301857
- AST Explorer 抽象语法树浏览器 https://astexplorer.net/
- 编程语言关系网 http://programming-languages.herokuapp.com/
- https://en.cppreference.com/w/cpp/types/is_pod
- https://github.com/PeterFeicht/cppreference-doc
- https://github.com/myfreeer/cppreference2mshelp/releases
- https://github.com/crea7or/cppreference2mshelp/blob/master/cppreference.chm
- https://winworldpc.com/product/visual-c/5x#Microsoft_Visual_Studio_97_(5.x)

介绍一个好用的 C++ 参考网站，不是 cplusplus.com 而是 cppreference.com，这个站点查询库函数和一些示例很方便，包含标准 C++98、C++03、C++11、C++14、C++17、C++20 特性的介绍，也提供离线版本，网站已经被打包成 chm 下载，有中英文齐全。

## ==⚡ Declarations 声明与内存空间联系

声明 Declarations 就是告诉编译器准备一个内存用于存放声明指定类型的数据，编译准备好内存空间后还需要代码对这块内容进行初始化。 定义 Definitions 这个词一般用在类上，实现类的过程就是在定义类，有定义的类就可以通过声明类对象来使用它。对于内置基础数据类型，如 char、int、long、float 等等，编译所准备的内存空间就是用来存放相应的数据。而对于类对象，编译所准备的这块内存空间则是用来存放指针，指针所指的内存地址才是类的数据结构实际的存放空间。如果没有初始化，基础数据类型变量的值是不可以预测的，类对象指针所指也一样不可预测。

在计算机硬件体系层面上，编译器可以选择将数据存放到内存 Memory 或CPU内部的寄存器 Register，现代的的编译器会自动优化将重度使用的数据存放到寄存器中。在系统软件基础层面上，数据存放可以是在堆栈 Heap & Stack 内。堆栈是两个特殊的内存空间，栈 stack 也叫栈堆用于函数参数或局部变量的内存分配上。堆 Heap 则主要用在动态内存分配上，通过C语言的动态内存分配函数管理，主要有 malloc、calloc、free 等，C++相应有新增的 new,delete 操作符。存放空间的不同决定了数据在程序运行时的存活周期，因此这也称之为存储期 Storage duration，总体上有以下几种：

    automatic   - 自动存储期，如代码块变量，在代码块开始时有效结束时就被销毁。不含 static, extern, thread_local 声明。
    static      - 静态存储期，整个程序运行期都有效，直到结束程序，并且在整个程序中只一个份数据。 static 或 extern 声明。
    thread      - 线程存储期，整个程序子线程内有效，直到线程结束，数据也只有一份。通过 thread_local 结合 static，extern 声明。 (since C++11) 
    dynamic     - 动态存储期，在C语言中也叫 allocated，由代码进行操作，通过内存管理函数管理或 new, delete 操作。

要指定存储类型，需要在声明变量时相应使用以下关键字，寄存器方式在新的编译器已经废弃不再使用了，auto 是默认的方式，在C++11也有。

    auto            - automatic 存储期 (until C++11) 默认声明方式
    register        - automatic 存储期 (deprecated) (until C++17) 块作用域中使用，如函数参数
    static          - static 存储期 / thread 存储期 / internal linkage 
    extern          - static 存储期 / thread 存储期 / external linkage 
    thread_local    - thread 存储期 (since C++11) C11 标准使用 _Thread_local

关于链接方式 linkage，编译器编译时是分单元进行编译的，可以简单理解为一个源代码文件就是一个单元，对那些在相同作用域下标识符，不需要进行链接 no linkage，程序就可以正确使用。对于那些需要在当前作用域外，在当前编译单元内的标识符，如 static 函数及变量，编译需要进行内部链接 internal linkage 才能使用标识符被程序正确使用。对于引用自其它单元的标识符，如引用其它文件的 non-static 变量，或 extern 声明变量，编译器需要做外部链接 external linkage。

不指定存储期的声明情况下，默认以 auto 方法声明块作用内的变量或对象标识符，以 extern 声明函数，以 extern 声明文件作用域内的对象。

声明标识符后，一般接着就介初始化过程，内置类型的初始化较简单，用变量或字面常量进行初始化都是可以的，甚至不初始化也是没有强制要求的，只是声明引用时强制要求初始化。

## ==⚡ Initialization 初始化的细节

C++ 初始化是个复杂的过程，局部静态变量会在代码块执行时初始化，对于非局部变量 Non-local variables 涉及到：

- 编译器编译时进行的静态初始化 Static initialization，包含零值初始化 Zero initialization 和常量初始化 Constant initialization。
- 完成静态初始化后再继续动态初始化 Dynamic initialization，这部分需要在程序执行时进行，又可以细分三种情况。 

    - 一种是无序的 Unordered，主要针对没有显式异化的 explicitly specialized 静态模板数据成员及模板变量 variable templates (since C++14)，这类初始化顺序是不可测的。
    - 另一种是偏序化 Partially-ordered，先定义先初始化。
    - 除此外就是有序的 Ordered dynamicc initialization。

另外在动态初始化之前，还可能做一些编译期不能完成的静态初始化。关于偏序化，举个例子，现有以下 A,B,C,D 四种异化模板函数，细化度依次增加，那么给 fun 传入一个整形指针，会执行哪个异化模板函数呢？

    #include <iostream>

    template<class T> void fun(T i){ std::cout << "fun 1" << std::endl; }           // A
    template<class T> void fun(T *i){ std::cout << "fun 2" << std::endl; }          // B
    template<       > void fun(int *i){ std::cout << "fun 3" << std::endl; }        // C
    template<       > void fun(const int *i){ std::cout << "fun 4" << std::endl; }  // D

    int main()
    {
        int *i = 0;
        fun(i); // fun 3
    }

因重载导致调用模糊不清的情况，编译器会根据细化程序来选择最适合的一个，这个选择过程就是偏序化。这里没有选择细化度最高的 D 是因为整形指针需要做隐式转换到整形常量指针，这个优先级别比其它的选择更低。而如果将 C 的定义提到 B 前面，编译器则会选择执行 B 。

早期 C++ 不能在类中，在定义数据成员时直接对其初始化，而是通过构造函数进行初始化。但是 C++11 标准下能这样写了，虽然在一定程度上这样写破坏了类的抽象性，但是却能带来一定的便利。但这也是抽象出来共有的属性啊，并且这样写后也可以通过构造函数中初始化的值会覆盖掉声明时初始化的值。

类对象的初始化就比较复杂，初始化可以在声明语句中发生，也可以在构造函数的成员初始化列表 根据对象类型结构差异的不同大体分为以下几种情况，只有在对象没有相应的初始化功能时去执行默认初始化：

    * 值初始化   Value initialization (C++03) std::string s{}; 
    * 拷贝初始化 Copy initialization          std::string s = "hello"; 
    * 直接初始化 Direct initialization        std::string s("hello"); 
    * 列表初始化 List initialization (C++11)  std::string s{'a', 'b', 'c'}; 
    * 聚集初始化 Aggregate initialization     char a[3] = {'a', 'b'}; 
    * 引用初始化 Reference initialization     char& c = a[0]; 

前面提到的零值初始化有多种情况，如值初始化数据为零值的特殊情况，聚集初始化数据为零的特殊情况。没有常量初始化的静态变量会预先零值初始化。

    static T object ;
    char array [ n ] = "";
    T () ; 
    T t = {} ;
    T {} ; (since C++11) extended initializer lists

默认初始化 Default initialization 发生在 automatic, static, thread-local 存储期声明并且没有指定初始化的情况，包含使用 new 带空圆括号或不带圆括号的情况。基类或者非静态数据成员没有出现在构造器初始化列表中也会进行默认初始化。

    T object;
    new T; (until c++03)
    new T (); (until c++03)

拷贝初始化 Copy initialization 就是通过拷贝现有对象的数据来实现的。第(3) (4)组分别指函数调用时和返回时会进行的拷贝初始化，因为是传值，对象传入函数时是传入的拷贝，返回时局部对象 orther 会被销毁。第(5)组是异常处理中抛出异常以及捕捉异常时发生的拷贝初始化。第(6)组是将对象拷贝一组副本初始化对象数组，这种方式也是聚集初始化的一种特殊列子。

    T object = other;     (1)  
    T object = {other} ;  (2) (until C++11) 
    f(other)              (3)
    return other;         (4)

    throw object; 
    catch (T object)      (5)
    
    T array[N] = {other}; (6)

直接初始化 Direct initialization 则直接提供初始参数，形式如下，第(3),(4)组分别是 functional cast 和 static cast 转型纯右值 prvalue 后的初始化，第(5)组是 new 动态初始化形式，第(6)组提到的是构造函数初始化列表的形式，第(7)组是C++11中实现的闭包 lambda 形式，[arg] 称为变量捕获列表，这里只是拷贝变量 arg：

    T object ( arg ); 
    T object ( arg1, arg2, ... ); (1)

    T object { arg }; 
    T object { arg1, arg2, ... }; (2) (since C++11) 
     
    T ( other ) 
    T ( arg1, arg2, ... );        (3)
    
    static_cast< T >( other )     (4)
    new T(args, ...)              (5)
    Class::Class() : member(args, ...) {... (6)  
    [arg](){...                   (7) (since C++11)

聚集初始化 Aggregate initialization 也可以叫花括号列表初始化 braced-init-list。所谓聚集 Aggregate 就是指数组或者是 class,struct,union 类型但不能有 private 或 protected 的非静态成员，也不能有 virtual, private, protected 继承，也不能有虚成员函数，也不能有默认成员初始化即定义成员同时进行初始化的情况，也不能有用户定义的构造器，继承的也不可以，编译提供的默认构造器和析构函数除外。所以聚集初始化中 T 和花括号部分都要满足聚集数据类型条件。

    T object = {arg1, arg2, ...}; (1)
    T object {arg1, arg2, ...};   (2) (since C++11) 

值初始化 Value initialization 使用空初始值 empty initializer 来初始化变量，默认构造函数会被调用，如果定义了用户构造函数那么默认构造函数也要一并定义。注意 T object(); 这种表达，比默认初始化 T object; 多了圆括号，这并不是初始化，而是构造函数调用返回一个 T 实例对象。在 C++11 标准前，正确的表达应该是 T object = T(); 这样的表达方式，先是值初始化一个临时对象，然后再执行拷贝初始化 object，大多数编译器都会优化这种情况。

    T();            (1)  
    new T ();       (2)
    Class::Class(...) : member() { ... } (3)  
    T object {};    (4) (since C++11) 
    T{};            (5) (since C++11) 
    new T {};       (6) (since C++11) 
    Class::Class(...) : member{} { ... } (7) (since C++11) 

新的C++为基础数据类型提供了初始化函数，所以以下这样的写法是可以的：

    int a (1);
    int a = int (2);



# =🚩 ANSI console 终端字符色彩控制
- https://docs.microsoft.com/en-us/windows/console/setconsoletextattribute
- https://docs.microsoft.com/en-us/windows/console/console-virtual-terminal-sequences

Linux 终端中的颜色是用转义序列控制的，转义序列以控制字符 ESC 开头，可以用八进制 \033 或十进制 27，十六进行制 0x1b 表示 ESC 的 ASCII 码，其格式为：

    \033[显示方式;前景色;背景色m 显示内容 \033[0m

    显示方式            意义
     -------------------------
     0                终端默认设置
     1                高亮显示
     4                使用下划线
     5                闪烁
     7                反白显示
     8                不可见
    nA                光标上移n行
    nB                光标下移n行
    nC                光标右移n行
    nD                光标左移n行

ANSI 显示方式控制码

    0m  关闭所有属性         nA   光标上移 n 行        2J    清屏 
    1m  设置高亮度           nB   光标下移 n 行        K     清除从光标到行尾的内容 
    4m  下划线               nC   光标右移 n 行        s     保存光标位置 
    5m  闪烁                 nD   光标左移 n 行        u     恢复光标位置 
    7m  反显                y;xH  设置光标位置        ?25l   隐藏光标 
    8m  消隐                                         ?25h   显示光标
    30; -- 37; 设置前景色 
    40m -- 47m 设置背景色 

显示方式、前景色、背景色至少一个存在即可，位置可随意。

    前景色            背景色             颜色
     ---------------------------------------
     30;               40m              黑色
     31;               41m              红色
     32;               42m              绿色
     33;               43m              黃色
     34;               44m              蓝色
     35;               45m              紫红色
     36;               46m              青蓝色
     37;               47m              白色

Linux 系统中，可以使用 printf 打印控制字符：

```c
#include "stdio.h"

int main(void)
{
    printf("\033[1;45;33m HELLO_WORLD \033[0m\n");
    printf("\033[5;46;37m HELLO_WORLD \033[0m\n");
    return 0;
}
```

如果是 Windows 系统，可以直接使用命令 `system("color 02")` 则屏幕变成黑底蓝字。

Window console 对 ANSI 控制码的支持不是很好。

使用键盘 CTRL+[ 在控制台输入控制符号 ESC。

颜色代码：

    0 = 黑色      8 = 灰色
    1 = 蓝色      9 = 淡蓝色
    2 = 绿色      A = 淡绿色
    3 = 浅绿色    B = 淡浅绿色
    4 = 红色      C = 淡红色
    5 = 紫色      D = 淡紫色
    6 = 黄色      E = 淡黄色
    7 = 白色      F = 亮白色


```c
HANDLE handle = GetStdHandle(STD_OUTPUT_HANDLE);
SetConsoleTextAttribute(handle, foreColor | backColor);
SetConsoleTextAttribute(h, FOREGROUND_INTENSITY | FOREGROUND_INTENSITY);

const string UNDERLINE = "\x1B[4m";
const string RESET = "\x1B[0m";
Console.WriteLine($"Some {UNDERLINE}underlined{RESET} text");

const string RED = "\x1B[31m";
Console.WriteLine($"Some {UNDERLINE}underlined{RESET} and {RED}red{RESET} text");
```

示范：

```c
// This is the ColoredText program which demonstrates
// how to change the text color in a console-mode program.

#include <stdio.h>     // needed for printf()
#include <windows.h>   // needed for HANDLE, SetConsoleTextAttribute()

int main()
{
    HANDLE    hStdout = GetStdHandle( STD_OUTPUT_HANDLE );

    printf( "First line\n" );

    SetConsoleTextAttribute( hStdout, FOREGROUND_RED );  // dim red

    printf( "Second line\n" );

    SetConsoleTextAttribute( hStdout,
                             FOREGROUND_RED | FOREGROUND_INTENSITY );
                                                         // brighter red

    printf( "Third line\n" );

    SetConsoleTextAttribute( hStdout,
                             FOREGROUND_BLUE | FOREGROUND_INTENSITY );

    printf( "Fourth line\n" );

    SetConsoleTextAttribute( hStdout,
                             FOREGROUND_RED
                           | FOREGROUND_BLUE
                           | FOREGROUND_GREEN
                           | FOREGROUND_INTENSITY );   // bright white

    printf( "Fifth line\n" );

    return 0;
}
```


# =🚩 std:system & popen
- http://www.linuxidc.com/Linux/2011-04/34092.htm

Windows 下利用 `_popen`,`_wpoen` 创建管道执行系统 shell 命令并获取输出数据。它们是 C 运行库，当然 popen 函数为 Linux C。

Create Pipe API 函数

system 函数可以运行命令行，但不能获得显示结果。要获取执行结果，则要通过管道来完成的。首先用 popen 打开一个命令行的管道，然后通过 fgets 读取该管道传输的内容，也就是命令行运行的结果。

函数介绍

    FILE *_popen(
        const char *command, 
        const char *mode  
    ); 

    FILE *_wpopen( 
        const wchar_t *command, 
        const wchar_t *mode  
    ); 

    int _pclose( 
        FILE *stream  
    ); 

模式：

| mode |                          说明                         |
|------|-------------------------------------------------------|
| "r"  | 通过 spawned 返回的流文件读取线程的标准输出文件       |
| "w"  | 通过 spawned 返回的流文件写入数据到线程的标准输入文件 |
| "b"  | 二进制模式 binary                                     |
| "t"  | 文本模式 text                                         |


**_popen** 示例：

    #include "stdafx.h"
    #include "stdlib.h"
    int main()
    {
        FILE *fp;
        char buf[255] = { 0 };
        if ((fp = _popen("ipconfig", "r")) == NULL) {
            perror("Fail to popen\n");
            exit(1);
        }
        while (fgets(buf, 255, fp) != NULL) {
            printf("%s", buf);
        }
        _pclose(fp);
        return 0;
    }

**_wpopen** 示例：

    #include "stdafx.h"
    #include "stdlib.h"
    int main()
    {
        FILE *fp;
        char buf[255] = { 0 };
        if ((fp = _wpopen(_T("ipconfig"), _T("r"))) == NULL) {
            perror("Fail to popen\n");
            exit(1);
        }
        while (fgets(buf, 255, fp) != NULL) {
            printf("%s", buf);
        }
        _pclose(fp);
        return 0;
    }

使用匿名管道 pipe 来获取执行 shell 命令返回的信息，一般流程如下

- 创建管道
- 使用 dup 函数复制描述符将 shell 命令行标准输出绑定到管道的写端
- 从管道的读端读取数据

pipe 函数

    所需头文件：#include<unistd.h>
    函数原型：int pipe(int fd[2]);
    返回值：成功返回0，出错返回-1

一个例子：创建进程，创建匿名管道，子进程使用dup2函数将标准输出的描述符复制给管道的写端，父进程从管道的读端读取数据

    #include<stdio.h> 
    #include<unistd.h>
    #include<string.h>
    #include<stdlib.h>
    
    int main()
    {
        int fpipe[2] = {0};
        pid_t fpid;
        char massage[1000] = {0};
        memset(massage, 0, 20);
        if (pipe(fpipe) < 0)
        {
            printf("Create pipe error!\n");
        }
        fpid = fork();
        if (fpid == 0)
        {
            close(fpipe[0]);
            dup2(fpipe[1],STDOUT_FILENO);
            system("ls");
        }
        else if (fpid > 0)
        {
            wait(NULL);
            printf("this is father,recieve:");
            fflush(stdout);
            close(fpipe[1]);
            read(fpipe[0], massage, 1000);
            printf("%s\n",massage);
        }
        else
        {
            printf("create fork error!\n");
        }
        return 0;
    }


综合示例：

    // crt_popen.c  
    /* This program uses _popen and _pclose to receive a   
     * stream of text from a system process.  
     */  
      
    #include <stdio.h>  
    #include <stdlib.h>  
      
    int main( void )  
    {  
      
       char   psBuffer[128];  
       FILE   *pPipe;  
      
            /* Run DIR so that it writes its output to a pipe. Open this  
             * pipe with read text attribute so that we can read it   
             * like a text file.   
             */  
      
       if( (pPipe = _popen( "dir *.c /on /p", "rt" )) == NULL )  
          exit( 1 );  
      
       /* Read pipe until end of file, or an error occurs. */  
      
       while(fgets(psBuffer, 128, pPipe))  
       {  
          printf(psBuffer);  
       }  
      
       /* Close pipe and print return value of pPipe. */  
       if (feof( pPipe))  
       {  
         printf( "\nProcess returned %d\n", _pclose( pPipe ) );  
       }  
       else  
       {  
         printf( "Error: Failed to read the pipe to the end.\n");  
       }  
    }  
     
Sample Output
     

This output assumes that there is only one file in the current directory with a .c file name extension.
     
     
     Volume in drive C is CDRIVE  
     Volume Serial Number is 0E17-1702  
      
     Directory of D:\proj\console\test1  
      
    07/17/98  07:26p                   780 popen.c  
                   1 File(s)            780 bytes  
                                 86,597,632 bytes free  
      
    Process returned 0  



# =🚩 Concurrent 并发
- [C++11 并发指南系列](https://www.cnblogs.com/haippy/p/3284540.html)


MinGW-w64 编译器版本选择方法：

- 32-bit 系统选择 i686
- 64-bit 系统选择 x86_64
- 线程模型选择 win32 没有 C ++ 11 多线程特性，无法使用 std::mutex 等
- 线程模型选择 posix 支持 C ++ 11 多线程特性，OpenCV 需要使用此线程模式
- 异常处理模型 32-bit 系统推荐 dwarf，64-bit 系统推荐 SEH 更有效率。SJLJ - SetJump LongJump，前者设还原点，后者跳到还原点，这是一种古老的技术，稳定但性能不佳。SEH 是 Borland 公司的专利，微软买了其专利使用权，它利用了 FS 段寄存器，将还原点压入，收到异常时弹出。

std::thread::thread 原型：

    thread(); (1) (since C++11) 
    thread( thread&& other ); (2) (since C++11) 
    template< class Function, class... Args >
    explicit thread( Function&& f, Args&&... args ); (3) (since C++11) 
    thread(const thread&) = delete; (4) (since C++11) 

示例：

    #include <iostream>       // std::cout
    #include <thread>         // std::thread
    #include <mutex>          // std::mutex

    volatile int counter(0); // non-atomic counter
    std::mutex mtx;           // locks access to counter

    void attempt_10k_increases(const char* args[], int index) {
        printf("%d %s\n", index, args[0]);
        for (int i=0; i<10000; ++i) {
            if (mtx.try_lock()) {   // only increase if currently not locked:
                ++counter;
                mtx.unlock();
            }
        }
    }

    int main (int argc, const char* argv[]) {
        std::thread threads[10];
        for (int i=0; i<10; ++i)
            threads[i] = std::thread(attempt_10k_increases, argv, i);

        for (auto& th : threads) th.join();
        std::cout << counter << " successful increases of the counter.\n";

        return 0;
    }


cppreference.com 示例：

    #include <iostream>
    #include <utility>
    #include <thread>
    #include <chrono>
    #include <functional>
    #include <atomic>
     
    void f1(int n)
    {
        for (int i = 0; i < 5; ++i) {
            std::cout << "Thread 1 executing\n";
            ++n;
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
        }
    }
     
    void f2(int& n)
    {
        for (int i = 0; i < 5; ++i) {
            std::cout << "Thread 2 executing\n";
            ++n;
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
        }
    }
     
    int main()
    {
        int n = 0;
        std::thread t1; // t1 is not a thread
        std::thread t2(f1, n + 1); // pass by value
        std::thread t3(f2, std::ref(n)); // pass by reference
        std::thread t4(std::move(t3)); // t4 is now running f2(). t3 is no longer a thread
        t2.join();
        t4.join();
        std::cout << "Final value of n is " << n << '\n';
    }


# =🚩 Concurrency 并发实践
- [CPP Concurrency In Action 2nd](https://github.com/xiaoweiChen/CPP-Concurrency-In-Action-2ed-2019)

(since C++11) Thread Hello：

    #include <iostream>
    #include <thread>
    #include <chrono>

    void hello(int delay, const char* msg)
    {
        std::this_thread::sleep_for(std::chrono::milliseconds(delay));
        std::cout << msg;
    }
    int main()
    {
        std::thread t1(hello, 200, "Hello ");
        std::thread t2(hello, 200, "Concurrent ");
        std::thread t3(hello, 200, "World ");
        t1.join();
        t2.join();
        t3.join();
        std::cout << "DONE!" << std::endl;
    }


duration 的定义方式：

    // duration<Rep,Period> 
    typedef duration<long long> seconds;
    typedef duration<int, ratio<60> > minutes;

Period 是 ratio 类型，用来表示时间单位，比如 second milisecond 等。
常用的时间单位已经定义在：

    std::chrono::nanoseconds duration</*signed integer type of at least 64 bits*/, std::nano> 
    std::chrono::microseconds duration</*signed integer type of at least 55 bits*/, std::micro> 
    std::chrono::milliseconds duration</*signed integer type of at least 45 bits*/, std::milli> 
    std::chrono::seconds duration</*signed integer type of at least 35 bits*/> 
    std::chrono::minutes duration</*signed integer type of at least 29 bits*/, std::ratio<60>> 
    std::chrono::hours duration</*signed integer type of at least 23 bits*/, std::ratio<3600>> 

## ==⚡ Thread demo
- https://cpppatterns.com/patterns/create-thread.html

以下代码演示如何使用标准库来创建线程，使用函数模板 std::ref 来为函数提供参数引用包装。

线程创建后进入运行状态，在线程销毁之前必须，应该在主线程中调用 join() 方法进入阻塞状态，等待线程内的 func 函数工作完成并返回，或者分离线程，否则 std::terminate 会被执行。在子线程中抛出异常时，std::terminate 也会执行。

```cpp
#include <thread>
#include <string>
#include <functional>

void func(std::string str, int& x);
void do_something();

int main()
{
  std::string str = "Test";
  int x = 5;
  std::thread t{func, str, std::ref(x)};
  do_something();
  t.join();
}
```


## ==⚡ Function objects

函数对象标准库可以实现函数对象的编程，functional 是函数对象其中一个头文件，提供引用包装器。

所谓函数对象，就是函数调用操作执行对象，C++ 提供了许多函数对象，以及创建和管理函数对象的支持。

以下代码演示如何使用函数对象，以及引用包装器来传递参数到函数对象内部：

- std::ref 函数模板返回一个引用包装器 `std::reference_wrapper<T>`
- std::cref 函数模板返回一个常量引用包装器 `std::reference_wrapper<const T>`
- std::bind 函数模板返回一个 forwarding call 包装器，调用它等价于调用被包装的函数。

```cpp
#include <functional>
#include <iostream>
 
void f(int& n1, int& n2, const int& n3)
{
    std::cout << "In function: " << n1 << ' ' << n2 << ' ' << n3 << '\n';
    ++n1; // increments the copy of n1 stored in the function object
    ++n2; // increments the main()'s n2
    // ++n3; // compile error
}
 
int main()
{
    int n1 = 1, n2 = 2, n3 = 3;
    std::function<void()> bound_f = std::bind(f, n1, std::ref(n2), std::cref(n3));
    n1 = 10;
    n2 = 11;
    n3 = 12;
    std::cout << "Before function: " << n1 << ' ' << n2 << ' ' << n3 << '\n';
    bound_f();
    std::cout << "After function: " << n1 << ' ' << n2 << ' ' << n3 << '\n';
}
// Output:

// Before function: 10 11 12
// In function: 1 11 12
// After function: 10 12 12
```

## ==⚡ future & task

## ==⚡ POSIX multi-thread demo

    #include <stdio.h>
    #include <stdlib.h>
    #include <time.h>
    #include <pthread.h>
    #include <unistd.h>

    #if defined(WIN32) || defined(WIN64)
        #include <windows.h>
        #define sleep(n) Sleep(1000 * (n))
    #else
        #include <unistd.h>
    #endif

    typedef struct
    {
        int index;
        int repeat;
        char * message;
    } Message;

    void * sendMsg(void *);

    int main( int c, char * args [])
    {
        srand(time(0));
        int num = 5;
        pthread_t ids[num];
        Message m[num];
        for( int i=0; i<num; i++)
        {
            Message msg = { i, rand()%9, args[0] };
            m[i] = msg;
            pthread_create( &ids[i], NULL, sendMsg, (void *)&m[i] );
            // pthread_join( ids[i], NULL ); // synchronous threads，this make multi-thread work as single thread
        }
        printf("main thread done sid:%u \n", pthread_self());
    }

    void * sendMsg( void *msg)
    {
        pthread_t tid = pthread_self();
        Message m = *(Message *)msg;

        for( int i=0; i<m.repeat; i++)
        {
            printf( "%u thread sid:%u %s \n", m.index, tid, m.message);
            fflush(stdout);
            // usleep(1);
        }
        printf("%u thread sid:%u done repeat %u \n", m.index, tid, m.repeat);
    }


# =🚩 NP-hard
- https://zhuanlan.zhihu.com/p/70305881

时间复杂度并不是表示一个程序解决问题需要花多少时间，而是当问题规模扩大后，程序需要的时间长度增长得有多快。

- O(1) 常量时间复杂度，也称常数级复杂度；
- O(n) 正比例复杂度，数据规模变得有多大，花的时间也跟着变得有多长。比如找 n 个数中的最大值；
- O(n^2) 复杂度，像冒泡排序、插入排序等，数据扩大 2 倍，时间变慢 4 倍的。
- O(a^n) 指数级复杂度，一些穷举类的算法，所需时间长度成几何阶数上涨，甚至 O(n!) 阶乘级复杂度。

不会存在 `O(2*n^2)` 的复杂度，因为前面的那个“2”是系数，根本不会影响到整个程序的时间增长。同样地，`O(n^3+n^2)` 的复杂度也就是 O(n^3) 的复杂度。因此，我们会说，一个 `O(0.01*n^3)` 的程序的效率比 `O(100*n^2)`的效率低，尽管在 n 很小的时候，前者优于后者，但后者时间随数据规模增长得慢，最终 `O(n^3)` 的复杂度将远远超过 `O(n^2)`。我们也说，`O(n^100)`的复杂度小于 `O(1.01^n)` 的复杂度。

概念：

- P 问题(Polynomial Problem)：可以找到一个能在多项式的时间里解决它的算法，那么这个问题就属于P问题。。
- NP 问题(Non-Deterministic Polynomial Problem)：可以在多项式时间内验证一个解的问题。
- NPC 问题(NP Complete Problem)：所有NP问题都可以在多项式时间内约化(Reducibility)到它并且它本身就是一个NP问题的问题。
- NP-Hard 问题(NP Hard Problem)：所有NP问题都可以在多项式时间内约化(Reducibility)到它的问题。

2000 年，美国克莱数学研究所公布了世界七大数学难题，又称千禧年大奖难题。其中 P 与 NP 难题被列为这七大世界难题之首。

NPH 即 non-deterministic polynomial hard 非确定性多项式难题。所谓的非确定性是指，可用一定数量的运算去解决多项式时间内可解决的问题。NP-hard 问题通俗来说是其解的正确性能够被“很容易检查”的问题，这里“很容易检查”指的是存在一个多项式检查算法。相应的，若 NP 中所有问题到某一个问题是图灵可归约的，则该问题为 NP 困难问题。

旅行推销员问题就是最著名的 NP 问题之一，多线程多机调度问题也属于NP问题之一。

著名的推销员旅行问题（Travel Saleman Problem or TSP）：假设一个推销员需要从香港出发，经过广州，北京，上海，…，等 n 个城市， 最后返回香港。 任意两个城市之间都有飞机直达，但票价不等。假设公司只给报销 C 元钱，问是否存在一个行程安排，使得他能遍历所有城市，而且总的路费小于 C？

推销员旅行问题显然是 NP 的。因为如果你任意给出一个行程安排，可以很容易算出旅行总开销。但是，要想知道一条总路费小于 C 的行程是否存在，在最坏情况下，必须检查所有可能的旅行安排！ 这将是个天文数字。

旅行推销员问题是数图论中最著名的问题之一，即“已给一个n个点的完全图，每条边都有一个长度，求总长度最短的经过每个顶点正好一次的封闭回路”。Edmonds，Cook 和 Karp 等人发现，这批难题有一个值得注意的性质，对其中一个问题存在有效算法时，每个问题都会有有效算法。

迄今为止，这类问题中没有一个找到有效算法。倾向于接受 NP 完全问题（NP-Complete或NPC）和 NP 难题（NP-Hard 或 NPH）不存在有效算法这一猜想，认为这类问题的大型实例不能用精确算法求解，必须寻求这类问题的有效的近似算法。
此类问题中，经典的还有 子集和问题； Hamilton 回路问题；最大团问题。

# =🚩 BOOST 类库
- [C++ BOOST Library](https://www.boost.org/)
- [Boost C++ 库](http://zh.highscore.de/cpp/boost/frontpage.html)
- [The Boost C++ Libraries](https://theboostcpplibraries.com/)

Boost C++ 库基于 C++ 标准使用最先进的 C++ 来实现，是平台独立的，并由于有一个大型的开发人员社区，它可以被包括 Windows 和 Linux 在内的许多操作系统所支持。

Boost C++ 库可以提升你作为一个 C++ 开发人员的生产力。 例如，你可以从智能指针中受益，帮助你写出更可靠的代码，或者使用某个库来开发平台独立的网络应用。 因为多数 Boost C++ 库正被收录进下一个版本的 C++ 标准，所以你可以从今天就开始作好准备。

Boost C++ 库是基于且扩展了 C++ 标准，所以你应该懂得 C++ 标准。 你应该了解且能够使用容器、迭代器及算法，最好有听说过以下概念：RAII，函数对象，或是谓词。 你越是了解 C++ 标准，就越能从 Boost C++ 库中受益。


The Boost C++ Libraries 目录指示了 Boot 的主要内容：

|-------------------------------|-----------------------------|---------------------------|----------------------------|
| I. RAII and Memory Management |     II. String Handling     |      III. Containers      |      III. Containers       |
|-------------------------------|-----------------------------|---------------------------|----------------------------|
| 1. Boost.SmartPointers        | 5. Boost.StringAlgorithms   | 12. Boost.MultiIndex      | 12. Boost.MultiIndex       |
| 2. Boost.PointerContainer     | 6. Boost.LexicalCast        | 13. Boost.Bimap           | 13. Boost.Bimap            |
| 3. Boost.ScopeExit            | 7. Boost.Format             | 14. Boost.Array           | 14. Boost.Array            |
| 4. Boost.Pool                 | 8. Boost.Regex              | 15. Boost.Unordered       | 15. Boost.Unordered        |
|                               | 9. Boost.Xpressive          | 16. Boost.CircularBuffer  | 16. Boost.CircularBuffer   |
|                               | 10. Boost.Tokenizer         | 17. Boost.Heap            | 17. Boost.Heap             |
|                               | 11. Boost.Spirit            | 18. Boost.Intrusive       | 18. Boost.Intrusive        |
|                               |                             | 19. Boost.MultiArray      | 19. Boost.MultiArray       |
|                               |                             | 20. Boost.Container       | 20. Boost.Container        |
|-------------------------------|-----------------------------|---------------------------|----------------------------|
| III. Containers               | IV. Data Structures         | V. Algorithms             | VI. Communication          |
|-------------------------------|-----------------------------|---------------------------|----------------------------|
| 12. Boost.MultiIndex          | 21. Boost.Optional          | 29. Boost.Algorithm       | 32. Boost.Asio             |
| 13. Boost.Bimap               | 22. Boost.Tuple             | 30. Boost.Range           | 33. Boost.Interprocess     |
| 14. Boost.Array               | 23. Boost.Any               | 31. Boost.Graph           |                            |
| 15. Boost.Unordered           | 24. Boost.Variant           |                           |                            |
| 16. Boost.CircularBuffer      | 25. Boost.PropertyTree      |                           |                            |
| 17. Boost.Heap                | 26. Boost.DynamicBitset     |                           |                            |
| 18. Boost.Intrusive           | 27. Boost.Tribool           |                           |                            |
| 19. Boost.MultiArray          | 28. Boost.CompressedPair    |                           |                            |
| 20. Boost.Container           |                             |                           |                            |
|-------------------------------|-----------------------------|---------------------------|----------------------------|
| VII. Streams and Files        | VIII. Time                  | X. Parallel Programming   | XII. Language Extensions   |
|-------------------------------|-----------------------------|---------------------------|----------------------------|
| 34. Boost.IOStreams           | 36. Boost.DateTime          | 44. Boost.Thread          | 51. Boost.Coroutine        |
| 35. Boost.Filesystem          | 37. Boost.Chrono            | 45. Boost.Atomic          | 52. Boost.Foreach          |
|                               | 38. Boost.Timer             | 46. Boost.Lockfree        | 53. Boost.Parameter        |
|                               | IX. Functional Programming  | 47. Boost.MPI             | 54. Boost.Conversion       |
|                               | 39. Boost.Phoenix           | XI. Generic Programming   |                            |
|                               | 40. Boost.Function          | 48. Boost.TypeTraits      |                            |
|                               | 41. Boost.Bind              | 49. Boost.EnableIf        |                            |
|                               | 42. Boost.Ref               | 50. Boost.Fusion          |                            |
|                               | 43. Boost.Lambda            |                           |                            |
|-------------------------------|-----------------------------|---------------------------|----------------------------|
| XIII. Error Handling          | XIV. Number Handling        | XV. Application Libraries | XVI. Design Patterns       |
|-------------------------------|-----------------------------|---------------------------|----------------------------|
| 55. Boost.System              | 57. Boost.Integer           | 62. Boost.Log             | 66. Boost.Flyweight        |
| 56. Boost.Exception           | 58. Boost.Accumulators      | 63. Boost.ProgramOptions  | 67. Boost.Signals2         |
|                               | 59. Boost.MinMax            | 64. Boost.Serialization   | 68. Boost.MetaStateMachine |
|                               | 60. Boost.Random            | 65. Boost.Uuid            |                            |
|                               | 61. Boost.NumericConversion |                           |                            |
|-------------------------------|-----------------------------|---------------------------|----------------------------|
| XVII. Other Libraries         |                             |                           |                            |
|-------------------------------|-----------------------------|---------------------------|----------------------------|
| 69. Boost.Utility             |                             |                           |                            |
| 70. Boost.Assign              |                             |                           |                            |
| 71. Boost.Swap                |                             |                           |                            |
| 72. Boost.Operators           |                             |                           |                            |
|-------------------------------|-----------------------------|---------------------------|----------------------------|



# =🚩 Smart Pointers
- http://zh.highscore.de/cpp/boost/smartpointers.html
- C++ 是否应避免使用普通指针，而使用智能指针 shared，unique，weak https://www.zhihu.com/question/319277442/answer/1517987598

内容：

    2.1 概述
    2.2 RAII
    2.3 作用域指针
    2.4 作用域数组
    2.5 共享指针
    2.6 共享数组
    2.7 弱指针
    2.8 介入式指针
    2.9 指针容器

Boost 提供了下面几种智能指针：

| shared_ptr<T>    | 普通的智能指针，大多数地方都使用 shared_ptr。                                 |
| scoped_ptr<T>    | 作用域指针，它不传递所有权，离开作用域能够自动释放。                          |
| intrusive_ptr<T> | 比 shared_ptr 更好的智能指针，但是需要类型 T 提供自己的指针使用引用记数机制。 |
| weak_ptr<T>      | 一个弱指针，帮助 shared_ptr 避免循环引用。                                    |
| shared_array<T>  | 和 shared_ptr 类似，用来处理数组。                                            |
| scoped_array<T>  | 和 scoped_ptr 类似，用类处理数组。                                            |

Boost C++ 库 Smart Pointers 提供了许多可以用在各种场合的智能指针。

智能指针的原理基于一个常见的习语叫做 RAII - Resource Acquisition Is Initialization 资源申请即初始化。 智能指针只是这个习语的其中一例——当然是相当重要的一例。 智能指针确保在任何情况下，动态分配的内存都能得到正确释放，从而将开发人员从这项任务中解放了出来。 这包括程序因为异常而中断，原本用于释放内存的代码被跳过的场景。 用一个动态分配的对象的地址来初始化智能指针，在析构的时候释放内存，就确保了这一点。 因为析构函数总是会被执行的，这样所包含的内存也将总是会被释放。

无论何时，一定得有第二条指令来释放之前另一条指令所分配的资源时，RAII 都是适用的。 许多的 C++ 应用程序都需要动态管理内存，因而智能指针是一种很重要的 RAII 类型。 不过 RAII 本身是适用于许多其它场景的。

## ==⚡ lvalue & rvalue reference
- https://www.geeksforgeeks.org/lvalues-references-and-rvalues-references-in-c-with-examples/

左值（lvalue）和右值（rvalue）是比较基础的概念，虽然平常几乎用不到，但 C++11 之后变得十分重要，它是理解 move/forward 等新语义的基础。

左值与右值这两个概念是从 C 中传承而来的，左值指既能够出现在等号左边，也能出现在等号右边的变量；右值则是只能出现在等号右边的变量。

左值和右值主要的区别之一是左值可以被修改，而右值不能。左值是可寻址的变量，有持久性。右值一般是不可寻址的常量，或在表达式求值过程中创建的无名临时对象，短暂性的。

左值引用是一个类型变量的别名，如 &a = b 表示的 a 和 b 是同一个变量，a 和 b 表现在内存中相同的地址。

右值是只能放在赋值右边的值, 右值没有变量名字, 如 i+j 两个变量相加这个表达式返回的值，放在一个临时内存空间, 这个空间并不能被用来赋值，可以看作一个常量。例如，不能写 i+j = 5 这样的赋值表达式。

但是在 C++11 的右值引用出现后就改变了。

为了支持移动语义减少内存拷贝以优化性能，实现移动构造函数和移动赋值函数，Move Constructors & Move Assignment Operators，，C++11 引入了右值引用，用来自由接管右值引用的对象内容。也就是通过右值引用实现将右值变成左值，即将没有变量名的右值变成了有名有姓的变量。

例如 String 类内部都有一个 char * pstr 指针指向实际存放字符串的内存，以下代码片段有 str1, str2, str3 三个 String 对象：

    str3 = str1.concat(str2);

上面的代码实际执行了二次构造函数, 第一次是 concat() 函数内构造一个临时字符串对象, 第二次是赋值的时候执行了拷贝构造函数，临时对象的值被拷贝到 str3 的内存, 然后临时对象立即被销毁。

显然这个第二次拷贝构造造成了多余的消耗，有了右值引用后就可以增加一个移动构造函数以及移动赋值函数来解决这个问题，直接把临时值拿来用，而不再复制一次，然后把 other.pstr 置 null 避免析构函数 delete pstr:

    String(String &&other) {
        pstr = other.pstr;
        other.pstr = nullptr;
    }

以下代码显示左值引用与右值引用：

```cpp
#include <iostream>  // for std::cout & std::endl
#include <utility>   // for std::move()
#include <string>    // for std::string
#include <cstdlib>   // for EXIT_SUCCESS macro

using namespace std;

void foo(const std::string& str)
{
    cout << "foo(const std::string& str) (const lvalue ref):\t" << str << endl;
}
 
void foo(std::string& str)
{
    cout << "foo(std::string& str) (non-const lvalue ref):\t" << str << endl;
}
 
void foo(std::string&& str)
{
    cout << "foo(std::string&& str) (rvalue ref):\t" << str << endl;
}
 
void baz(const std::string& str)
{
    cout << "baz(const std::string& str) (const lvalue ref):\t" << str << endl;
}
 
void baz(std::string& str)
{
    cout << "baz(std::string& str) (non-const lvalue ref):\t" << str << endl;
}
 
void bar(std::string& str)
{
    cout << "bar(std::string& str) (non-const lvalue ref):\t" << str << endl;
}
 
void constObjectCallFunc(std::string&& str)
{
    cout << "constObjectCallFunc(std::string&& str) (rvalue ref):\t" << str << endl;
}

int main()
{
    std::string hello("Good Bye!");
    const std::string final("FINAL!");

    // Declaring lvalue reference
    string& lref = hello;
 
    // Declaring rvalue reference
    string&& rref = "some rvalue";
 
    // error: as l-value cannot be assigned to the r-value references
    // string &&ref = hello;
 
    // foo(std::string& str) will be called
    foo(hello);
 
    // foo(std::string&& str) will be called
    foo(std::string("Hello"));
    foo(std::move(hello + " using std::move()"));
 
    cout << "\n\n";
 
    // move semantics fallback
    // baz(const std::string& str) will be called
    baz(std::string("This is temporary string object"));
    baz(std::move(std::string("This is temporary string object using std::move()")));

    // baz(const std::string& str) will be called
    baz(final);
    // baz(std::string& str) will be called
    baz(hello);

    cout << "\n\n";
 
    std::string failToCall("This will fail to call");
 
    /*
      Reasons to fail bar() call -
      1. No rvalue reference implementation available
      2. No const lvalue reference implementation available
      */
    // bar(std::move(failToCall));
 
    // constObjectCallFunc(std::move(final));
    // Error : because of const qualifier
    // It doesn't make any sense to steal or
    // move the resources of a const object
   
    return EXIT_SUCCESS;
}
```

std::move 和 std::forward 是 C++11 中的特性，用于解决 C++98/C++0x 中遗留的问题，move 用来将左值转换成右值。 所谓转发 forward 就是通过一个函数将参数继续转交给另一个函数进行处理，原参数可能是右值，可能是左值，如果还能继续保持参数的原有特征，那么它就是完美转发。下面的例子 std::forward 结合模板编程实现：

    #include <iostream>

    void process_(int& i){
        std::cout << "process_lvalue_reference ... " << i << std::endl;
    }

    void process_(int&& i){
        std::cout << "process_rvalue_reference ... " << i << std::endl;
    }

    template<typename T> 
    void forward_(T&& i){
        process_(std::forward<T>(i));
    }

    int main()
    {
        int i = 0;
        process_(i);            // process_lvalue_reference ... 0
        process_(1);            // process_rvalue_reference ... 1
        process_(std::move(i)); // process_rvalue_reference ... 0
        forward_(i);            // process_lvalue_reference ... 0
        forward_(std::move(i)); // process_rvalue_reference ... 0
    }


## ==⚡ Move Constructors
- Move Constructors https://en.cppreference.com/w/cpp/language/move_constructor
- move Assignment Opertors https://en.cppreference.com/w/cpp/language/move_assignment
- https://www.geeksforgeeks.org/move-constructors-in-c-with-examples/
- https://docs.microsoft.com/en-us/cpp/cpp/explicitly-defaulted-and-deleted-functions?view=msvc-170

Move Constructors 和 Move Assignment Operators 是 C++11 基于移动语义引入的两项提供效率的技术。

```cpp
class-name ( class-name && )    (1) (since C++11)
class-name ( class-name && ) = default; (2) (since C++11)
class-name ( class-name && ) = delete;  (3) (since C++11)

class-name & class-name :: operator= ( class-name && )              (1) (since C++11)
class-name & class-name :: operator= ( class-name && ) = default;   (2) (since C++11)
class-name & class-name :: operator= ( class-name && ) = delete;    (3) (since C++11)
```

以下为 Move 类实现移动构造函数：

```cpp
// C++ program with declaring the move constructor
#include <iostream>
#include <vector>
using namespace std;
 
class Move {
private:
    int* data;

public:
    Move(int d)
    {
        // Declare object in the heap
        data = new int;
        *data = d;
        cout << "Common Constructor is called: " << d << endl;
    };
 
    // Copy Constructor
    // Move(const Move& source) = delete;
    Move(const Move& source): Move{ *source.data }
    {
        // Copying the data by making deep copy
        cout << "Copy Constructor (Deep copy):" << *source.data << endl;
    }
 
    // Move Constructor
    Move(Move&& source) : data{ source.data }
    {
        cout << "Move Constructor (No copy just move it):" << *source.data << endl;
        source.data = nullptr;
    }

    ~Move()
    {
        if (data != nullptr)
            cout << "Destructor is called for " << *data << endl;
        else
            cout << "Destructor is called for nullptr " << endl;

        // Free up the memory assigned to the data member of the object
        delete data;
    }
};
 
int main()
{
    vector<Move> vec;
    // cout << "capacity: " << vec.capacity() <<  endl;
    vec.push_back(Move{ 10 });
    vec.push_back(Move{ 20 });
    return 0;
}
```

可以注解掉移动构造函数对比运行结果，在移动构造函数的作用下，确实会减少不必要的开销。

有 Move Constructor 的运行输出结果如下：

    Common Constructor is called: 10
    Move Constructor (No copy just move it):10
    Destructor is called for nullptr
    Common Constructor is called: 20
    Move Constructor (No copy just move it):20
    Common Constructor is called: 10
    Copy Constructor (Deep copy):10
    Destructor is called for 10
    Destructor is called for nullptr
    Destructor is called for 10
    Destructor is called for 20

首先是 Move{ 10 } 执行普通构造器产生实例，接着移动语义生效，相应的实例被移动到 vector 向量容器中，所以解构函数只操作了一个 nullptr，并没有实际上释放内存。

接着 Move{ 20 } 执行普通构造过程，同样移动语义生效，接着实例被移动到 vector 向量容器中。

但是此时，容器空间不足，需要扩容，所以容器原有内容会被复制到新的内存空间。这就是为何出现了另一条构造 Move{ 10 } 的消息，并执行了拷贝构造函数，最终容器原内容被清理，也就是第一次真正的解构 Move{ 10 } 实例。

C++ STL 的 vector 容器在扩容时不会调用元素的移动构造函数，所以后续的扩容动作依然不够有效率。

要实现移动语义，必须让编译器知道什么时候需要复制，什么时候不需要复制，这就是右值引用发挥最大作用的地方。

为了让容器在扩容时不进行复制，这就是需要使用到 C++11 引入的 `=delete` 默认构造器删除说明符来禁止拷贝函数的使用，还有另一个新功能是显式标记默认构造函数 `=default`。

在定义了 Move Constructor 的前提下，直接注解 Copy Constructor 也可以。



## ==⚡ auto_ptr to unique_ptr
- Dynamic memory management - Smart pointers https://en.cppreference.com/w/cpp/memory
- gcc libstdc++ auto_ptr.h https://gcc.gnu.org/onlinedocs/gcc-4.6.2/libstdc++/api/a00761_source.html

提示：新的 Rust 语言中，资源的所有权受到全面的管理，在指针的智能管理上是非常优秀的。

1998 年修订的第一版 C++ 标准只提供了一种智能指针： `std::auto_ptr`。 它基本上就像是个普通的指针： 通过地址来访问一个动态分配的对象。 std::auto_ptr 之所以被看作是智能指针，是因为它会在析构的时候调用 delete 操作符来自动释放所包含的对象。

当然这要求在初始化的时候，传给它一个由 new 操作符返回的对象的地址。 既然 std::auto_ptr 的析构函数会调用 delete 操作符，它所包含的对象的内存会确保释放掉。 

C++98 引入的智能指针 auto_ptr，对于拷贝构造和赋值运算符重载，该智能指针采用管理权转移的方式。当一个指针拷贝构造另一个指针时，当前指针就将对空间的管理权交给拷贝的那个指针，当前指针就指向空。

这种方式不符合指针的要求，可以允许多个指针指向同一块空间，将一个指针赋值给另一个指针的时候，就是需要让两个指针指向同一块空间。而 auto_ptr 只允许一块空间上只能有一个指针指向它，并且当管理权转移之后要想再访问之前的指针，就会出错，因为之前的指针已经为 NULL，就会出现解引用空指针的问题。

当和异常联系起来时这就更加重要了：没有 std::auto_ptr 这样的智能指针，每一个动态分配内存的函数都需要捕捉所有可能的异常，以确保在异常传递给函数的调用者之前将内存释放掉。

注意，auto_ptr 在 C++11 中已经被 unique_ptr 替代，C++11 引入移动语义 std::move，提出了 std::unique_ptr，才真正地完成了 std::auto_ptr 的设计意图，而原本的 std::auto_ptr 也被标记为 deprecated。

但是，由于以下原因，在 C++11 以后的版本中不推荐使用 auto_ptr，并会在 C++17 移除：

- ● auto_ptr 对象不能存储在 STL 容器中。
- ● auto_ptr 拷贝构造函数将从原始源中删除所有权，即原 auto_ptr 将失效。
- ● auto_ptr 拷贝赋值运算符会从原始源中删除所有权，即原 auto_ptr 将失效。
- ● auto_ptr 赋值运算符会删除右侧源对象的所有权，并将所有权分配给左侧对象，违反其原始意图。


C++11 借鉴了 boost 库里面的智能指针 `<memory>` 头文件定义：

- C++11 unique_ptr 就是 boost scoped_ptr；
- C++11 shared_ptr 就是 boost shared_ptr。


智能指针可以分为不同类型，以下是 C++11 的 memory 模块引入的几种基本类型：

- 独占型：std::unique_ptr，一份资源仅能由一个 std::unique_ptr 对象管理。
- 共享型：std::shared_ptr，一份资源可以由多个 std::shared_ptr 对象共同管理。当没有 std::shared_ptr 对象指向这份的资源，资源才会被释放，基于引用技术原理。
- 弱引用：std::weak_ptr，共享资源的观察者，需要和 std::shared_ptr 一起使用，不影响资源的生命周期。

智能指针不支持指针的算术运算，但是，智能指针通过运算符重载支持常用 * 和 -> 指针运算符。

不能使用其他 unique_ptr 对象的值来初始化一个 unique_ptr。同样，也不能将一个 unique_ptr 对象赋值给另外一个。这是因为，这样的操作将导致两个独占指针共享相同对象的所有权。但是可以通过 std::move() 将对象的所有权从一个独占指针转移到另外一个独占指针。

由于 std::unique_ptr 对象管理的资源，不可共享，只能在 std::unique_ptr 对象之间转移，因此 std::unique_ptr 就禁止了复制构造函数、赋值表达式，仅实现了移动构造函数。

简单说，使用 std::unique_ptr 对其独占所有权的资源进行管理，在离开 unique_ptr 对象的作用域时，会自动释放资源，这是很基本的 RAII 思想。

有趣的是，可以从函数中返回一个独占指针，在遇到函数返回 unique_ptr 对象时，编译器会自动应用 std::move() 操作以返回其值。

要销毁独占智能指针管理的任何可能存在的对象，只需要调用 reset()。

```cpp
template< class T, class Deleter = std::default_delete<T> > class unique_ptr;
template < class T, class Deleter > class unique_ptr<T[], Deleter>;
```

根据功能将成员函数分成以下几类：

- Modifiers 
    - *release()* returns a pointer to the managed object and releases the ownership
    - *reset()* replaces the managed object
    - *swap()* swaps the managed objects
- Observers 
    - *get()* returns a pointer to the managed object
    - *get_deleter()* returns the deleter that is used for destruction of the managed object
    - *operator()* bool checks if there is an associated managed object
- Single-object version, `unique_ptr<T>` 
    - `operator*` and 
    - `operator->` dereferences pointer to the managed object
- Array version, `unique_ptr<T[]>` 
    - `operator[]` provides indexed access to the managed array

std::unique_ptr 有两个版本：

- 管理单个对象（例如以 new 分配的对象）
- 管理动态分配的对象数组（例如以 new[] 分配的对象）

各种方法的重载原型：

```cpp
pointer get() const;  (since C++11) 
pointer release();  (since C++11) 
void swap(unique_ptr& other);  (since C++11) 

// members of the primary template, unique_ptr<T>   
void reset( pointer ptr = pointer() ); // (1)  
// members of the specialization unique_ptr<T[]>   
void reset( pointer ptr = pointer() ); // (2) (until C++17) 
 // (3)  
template< class U >
void reset( U ) = delete; // (until C++17) 
template< class U >
void reset( U ); // (since C++17) 
 // (4)  
void reset( std::nullptr_t p ); // (until C++17) 
void reset( std::nullptr_t p = nullptr ); // (since C++17) 
```

get 方法并不夺取所有权，而是以观察者身体使用数据：

```cpp
#include <iostream>
#include <string>
#include <memory>
 
int main()
{
    std::unique_ptr<std::string> s_p(new std::string("Hello, world!"));
    std::string *s = s_p.get();
    std::cout << *s << '\n';
}
```

搭配使用还有 std::make_unique 它使用独占指针来包装对象：

```cpp
// Defined in header <memory>   
template< class T, class... Args >
unique_ptr<T> make_unique( Args&&... args );
// (1) (since C++14) (only for non-array types) 
template< class T >
unique_ptr<T> make_unique( std::size_t size );
// (2) (since C++14) (only for array types with unknown bound)
template< class T, class... Args >
/* unspecified */ make_unique( Args&&... args ) = delete;
// (3) (since C++14) (only for array types with known bound)
```

Constructs an object of type T and wraps it in a std::unique_ptr.

1) Constructs a non-array type T. The arguments args are passed to the constructor of T. This overload only participates in overload resolution if T is not an array type. The function is equivalent to: unique_ptr<T>(new T(std::forward<Args>(args)...))
2) Constructs an array of unknown bound T. This overload only participates in overload resolution if T is an array of unknown bound. The function is equivalent to: unique_ptr<T>(new typename std::remove_extent<T>::type[size]())
3) Construction of arrays of known bound is disallowed.

智能指针 shared_ptr、make_unique 数组创建方法： 

```cpp
std::unique_ptr<int[]> ptr1{ new int[5]{1,2,3,4,5} };
shared_ptr<vector<int>> ptr3 = make_shared<vector<int>>();
auto ptr2 = std::make_unique<std::array<int, 5>>(std::array<int, 5>{1, 2, 3, 4, 5});
```

说回已经被遗弃的 std::auto_ptr，以下代码演示其最大弊端，就是不能通过编译检测发现 auto_ptr 删除所有权问题：

```cpp
#include <new>
#include <memory>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Shape;

typedef auto_ptr<Shape>  ShapePtr;
typedef unique_ptr<Shape>  UniShapePtr;

class Shape 
{
public:
  Shape(){ }
  Shape(string name): name(name){ }
  string name = "Basic Shape";
  friend ostream& operator<< (ostream& ost, const ShapePtr shapePtr);
};

ostream& operator<< (ostream& ost, const ShapePtr shapePtr)
{
  ost << "Shape: " << shapePtr->name << endl;
  return ost;
}

ostream& operator<< (ostream& ost, const UniShapePtr shapePtr)
{
  ost << "Shape: " << shapePtr->name << endl;
  return ost;
}

int main()
{
  ShapePtr shape(new Shape("Box"));
  ShapePtr another = shape; // Move to another
  // UniShapePtr another = move(shape); // Move to another
  cout << another;
  cout << shape;            // Violate access!
  cout << ShapePtr(new Shape());
}
```

以上代码中，shape 智能指针会将所有权转交 another，执行 auto_ptr 拷贝构造函数再释放对托管对象的所有权。但是后续代码还可以继续使用 shape，编译器并不给错误提示，但是运行程序时就崩。如果使用新的 unique_ptr 替代它，在转移所有权时，编译就会明确给出错误提示。

auto_prt 采用"Copy"语义，期望实现"Move"语义的实现有以下三大问题：

- auto_ptr 采用拷贝构造和拷贝赋值构造去实现"Move"语义，若将 auto_ptr 用值传递作为函数的参数，当函数执行结束时会导致资源被释放；
- auto_ptr 总是使用"non-array delete"，所以它不能用于管理 array 类的动态内存；
- auto_ptr 不能和 STL 容器和算法配合工作，因为 STL 中的"Copy"真的是"Copy"，而不是"Move"。

unique_ptr 示范：

```cpp
#include <iostream>
#include <vector>
#include <memory>
#include <cstdio>
#include <fstream>
#include <cassert>
 
struct B {
  virtual void bar() { std::cout << "B::bar\n"; }
  virtual ~B() = default;
};
struct D : B
{
    D() { std::cout << "D::D\n";  }
    ~D() { std::cout << "D::~D\n";  }
    void bar() override { std::cout << "D::bar\n";  }
};
 
// a function consuming a unique_ptr can take it by value or by rvalue reference
std::unique_ptr<D> pass_through(std::unique_ptr<D> p)
{
    p->bar();
    return p;
}
 
int main()
{
  std::cout << "unique ownership semantics demo\n";
  {
      auto p = std::make_unique<D>(); // p is a unique_ptr that owns a D
      auto q = pass_through(std::move(p)); 
      assert(!p); // now p owns nothing and holds a null pointer
      q->bar();   // and q owns the D object
  } // ~D called here
 
  std::cout << "Runtime polymorphism demo\n";
  {
    // p is a unique_ptr that owns a D as a pointer to base
    std::unique_ptr<B> p = std::make_unique<D>(); 
    p->bar(); // virtual dispatch
 
    std::vector<std::unique_ptr<B>> v;  // unique_ptr can be stored in a container
    v.push_back(std::make_unique<D>());
    v.push_back(std::move(p));
    v.emplace_back(new D);
    for(auto& p: v) p->bar(); // virtual dispatch
  } // ~D called 3 times
 
  std::cout << "Custom deleter demo\n";
  std::ofstream("demo.txt") << 'x'; // prepare the file to read
  {
      std::unique_ptr<std::FILE, decltype(&std::fclose)> 
          fp(std::fopen("demo.txt", "r"), &std::fclose);
      if(fp) // fopen could have failed; in which case fp holds a null pointer
        std::cout << (char)std::fgetc(fp.get()) << '\n';
  } // fclose() called here, but only if FILE* is not a null pointer
    // (that is, if fopen succeeded)
 
  std::cout << "Custom lambda-expression deleter demo\n";
  {
    std::unique_ptr<D, std::function<void(D*)>> p(new D, [](D* ptr)
        {
            std::cout << "destroying from a custom deleter...\n";
            delete ptr;
        });  // p owns D
    p->bar();
  } // the lambda above is called and D is destroyed
 
  std::cout << "Array form of unique_ptr demo\n";
  {
      std::unique_ptr<D[]> p{new D[3]};
  } // calls ~D 3 times
}
```

Output:

    unique ownership semantics demo
    D::D
    D::bar
    D::bar
    D::~D
    Runtime polymorphism demo
    D::D
    D::bar
    D::D
    D::D
    D::bar
    D::bar
    D::bar
    D::~D
    D::~D
    D::~D
    Custom deleter demo
    x
    Custom lambda-expression deleter demo
    D::D
    D::bar
    destroying from a custom deleter...
    D::~D
    Array form of unique_ptr demo
    D::D
    D::D
    D::D
    D::~D
    D::~D
    D::~D


## ==⚡ shared_ptr & weak_ptr 共享智能指针
- https://en.cppreference.com/w/cpp/memory/weak_ptr
- https://en.cppreference.com/w/cpp/memory/shared_ptr
- 现代 C++：一文读懂智能指针 https://zhuanlan.zhihu.com/p/150555165

std::shared_ptr 其实就是对资源做引用计数——当引用计数为 0 的时候，自动释放资源。

共享指针方法参考：

- get() 函数返回存储的指针；
- use_count() 返回引用同一个托管对象的共享指针数量，即引用计数；
- swap() 交换两个共享指针的托管对象；
- reset() 释放当前共享指针拥有对象的所有权；
- std::weak_ptr<T>::lock() 将弱共享指针提供为共享指针；

std::weak_ptr 要与 std::shared_ptr 一起使用，可以将 weak_ptr 看做是 shared_ptr 对象管理的资源的观察者，它不影响共享资源的生命周期。如果需要使用 weak_ptr 正在观察的资源，通过 lock() 方法将 weak_ptr 提升为 shared_ptr。

当 shared_ptr 管理的资源被释放时，weak_ptr 会自动变成 nullptr。

```cpp
#include <iostream>
#include <memory>
 
std::weak_ptr<int> gw;
 
void observe()
{
    std::cout << "gw.use_count() == " << gw.use_count() << "; ";
    // we have to make a copy of shared pointer before usage:
    if (std::shared_ptr<int> spt = gw.lock()) {
        std::cout << "*spt == " << *spt << '\n';
    }
    else {
        std::cout << "gw is expired\n";
    }
}
 
int main()
{
    {
        auto sp = std::make_shared<int>(42);
        gw = sp;
 
        observe();
    }
 
    observe();
}
// Output:
// gw.use_count() == 1; *spt == 42
// gw.use_count() == 0; gw is expired
```

共享指针示范：

```cpp
#include <iostream>
#include <memory>
#include <thread>
#include <chrono>
#include <mutex>
 
struct Base
{
    Base() { std::cout << "  Base::Base()\n"; }
    // Note: non-virtual destructor is OK here
    ~Base() { std::cout << "  Base::~Base()\n"; }
};
 
struct Derived: public Base
{
    Derived() { std::cout << "  Derived::Derived()\n"; }
    ~Derived() { std::cout << "  Derived::~Derived()\n"; }
};
 
void thr(std::shared_ptr<Base> p)
{
    std::this_thread::sleep_for(std::chrono::seconds(1));
    std::shared_ptr<Base> lp = p; // thread-safe, even though the
                                  // shared use_count is incremented
    {
        static std::mutex io_mutex;
        std::lock_guard<std::mutex> lk(io_mutex);
        std::cout << "local pointer in a thread:\n"
                  << "  lp.get() = " << lp.get()
                  << ", lp.use_count() = " << lp.use_count() << '\n';
    }
}
 
int main()
{
    std::shared_ptr<Base> p = std::make_shared<Derived>();
 
    std::cout << "Created a shared Derived (as a pointer to Base)\n"
              << "  p.get() = " << p.get()
              << ", p.use_count() = " << p.use_count() << '\n';
    std::thread t1(thr, p), t2(thr, p), t3(thr, p);
    p.reset(); // release ownership from main
    std::cout << "Shared ownership between 3 threads and released\n"
              << "ownership from main:\n"
              << "  p.get() = " << p.get()
              << ", p.use_count() = " << p.use_count() << '\n';
    t1.join(); t2.join(); t3.join();
    std::cout << "All threads completed, the last one deleted Derived\n";
}
```

Possible output:

    Base::Base()
      Derived::Derived()
    Created a shared Derived (as a pointer to Base)
      p.get() = 0x2299b30, p.use_count() = 1
    Shared ownership between 3 threads and released
    ownership from main:
      p.get() = 0, p.use_count() = 0
    local pointer in a thread:
      lp.get() = 0x2299b30, lp.use_count() = 5
    local pointer in a thread:
      lp.get() = 0x2299b30, lp.use_count() = 3
    local pointer in a thread:
      lp.get() = 0x2299b30, lp.use_count() = 2
      Derived::~Derived()
      Base::~Base()
    All threads completed, the last one deleted Derived



# =🚩 API 参考


## ==⚡ rand & srand
- https://www.mkssoftware.com/docs/man3/drand48.3.asp

定义于头文件 <stdlib.h>

    int rand();

返回 ​0​ 与 RAND_MAX 宏常量间的随机整数值（包含 0 与 RAND_MAX ）。

srand() 播种 rand() 所用的伪随机数生成器。若在任何对 srand() 的调用前使用 rand() ，则 rand() 表现如同它以 srand(1) 播种。每次以 srand() 播种 rand() 时，它必须产生相同的值数列。

不保证 rand() 为线程安全。

注意

无对产生的随机数质量的保证。过去，某些 rand() 的实现在随机性、分布和产生的数列周期中有严重缺陷（在一个广为人知的例子中，最低位在调用间简单地于 1 和 0 间改变）。不推荐将 rand() 用于严肃的随机数生成需求，如加密。

POSIX 要求 rand 所用的伪随机数生成器的周期至少为 232。

POSIX 提供 rand 的线程安全版本，名为 rand_r ，它由于 drand48 函数族而过时。

示例

    #include <stdio.h>
    #include <stdlib.h>
    #include <time.h>
     
    int main(void)
    {
        srand(time(NULL)); // 以当前时间为随机生成器的种子
        int random_variable = rand();
        printf("Random value on [0,%d]: %d\n", RAND_MAX, random_variable);
     
        // 扔 6 面色子 20 次
        for (int n = 0; n != 20; ++n) {
            int x = 7;
            while(x > 6) 
                x = 1 + rand() / ((RAND_MAX + 1u) / 6); // 注意： 1 + rand() % 6 有偏差！
            printf("%d ", x); 
        }
    }

可能的输出：

    Random value on [0,2147483647]: 448749574
    3 1 3 1 4 2 2 1 3 6 4 4 3 1 6 2 3 2 6 1

引用

C11 standard (ISO/IEC 9899:2011):
7.22.2.1 The rand function (p: 346)

C99 standard (ISO/IEC 9899:1999):
7.20.2.1 The rand function (p: 312)

C89/C90 standard (ISO/IEC 9899:1990):
4.10.2.1 The rand function


drand48(), erand48(), jrand48(), lcong48(), lrand48(), mrand48(), nrand48(), seed48(), srand48()
generate pseudo-random numbers using 48-bit integer arithmetic 

    #include <stdlib.h>
    double drand48(void);
    double erand48(unsigned short xsubi[3]);
    long jrand48(unsigned short xsubi[3]);
    void lcong48(unsigned short param[7]);
    long lrand48(void);
    long mrand48(void);
    long nrand48(unsigned short xsubi[3]);
    unsigned short *seed48(unsigned short seed16v[3]);
    void srand48(long seedval);

RETURN VALUES

- The `drand48()` `erand48()` return non-negative, double-precision, floating point values, uniformly distributed over the interval [0.0,1.0).
- The `lrand48()` `nrand48()` return non-negative, long integers, uniformly distributed over the interval [0,231).
- The `mrand48()` `jrand48()` return signed long integers uniformly distributed over the interval [-231,231).
- The `seed48()` returns a pointer to a buffer containing the previous value of Xi.
- The `lcong48()` `srand48()` return nothing.

