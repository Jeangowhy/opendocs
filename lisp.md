
# ⚑ lisp readme
- [Chez Scheme Project Page](https://cisco.github.io/ChezScheme/)
- [Revised6 Report on the Algorithmic Language Scheme (R6RS)](http://www.r6rs.org/)
- [Building Chez Scheme](https://github.com/cisco/ChezScheme/blob/master/BUILDING)
- [The Scheme Programming Language 4th ed R. Kent Dybvig](https://www.scheme.com/tspl4/)
- [The Development of Chez Scheme](https://legacy.cs.indiana.edu/~dyb/pubs/hocs.pdf)
- [Yet Another Scheme Tutorial](https://www.kancloud.cn/kancloud/yast-cn/64461)
- [MIT/GNU Scheme](https://www.gnu.org/software/mit-scheme/)
- [ChezScheme 生成单一可执行文件](https://zhuanlan.zhihu.com/p/47923789())
- [Scheme 语言概要一](https://www.ibm.com/developerworks/cn/linux/l-schm/index1.html)
- [Scheme 语言概要二](https://www.ibm.com/developerworks/cn/linux/l-schm/index2.html)
- [为什么教小学生 x=x+1 是错误的？浅议少儿编程教育的误区](https://www.cnblogs.com/bluedoctor/p/12895220.html)

Structure and Interpretation of Computer Programs
https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html

2018年8月23日13:28:02

最近手上的任务有点受阻，去找写《On Lisp》的大牛Paul Graham 的书《Hackers & Painters》来看看

Windows下搭建 Clisp 环境，首先是去网上下载Clisp安装文件，在 Clisp 官方网站可以下载

    http://www.clisp.org/

右侧栏 Get CLISP 中找到 Our official distribution sites，这里提供了FTP地址，也可以直接点击下面的链接在sourceforge下载：

https://sourceforge.net/project/platformdownload.php?group_id=1355&sel_platform=8418

ANSI Common Lisp https://acl.readthedocs.io/en/latest/


传说中的 Chez Scheme 开源了！

编译试试看看香香的是不是，先安装好 Visual Studio 2019 社区版本。

    **********************************************************************
    ** Visual Studio 2019 Developer Command Prompt v16.6.1
    ** Copyright (c) 2020 Microsoft Corporation
    **********************************************************************

安装好 MinGW 和 git，下载 Chez Scheme 源码，然后进行编译，`-j 4` 激活 4 进程利用多核心 CPU 加速编译：

    >git clone https://github.com/cisco/ChezScheme.git
    >cd ChezScheme
    >cd wininstall
    >set CPATH=..\boot\a6nt;..\boot
    >make -j 4 workareas

设置 CPATH 环境变量是为了让编译器找到相应的头文件：

    OCEAN@DESKTOP-CBSK60R MINGW64 /c/ChezScheme-master/wininstall
    $ make workareas
    cd ..; ./configure -m=a6nt; C:/mingw530_32/bin/make -C a6nt
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100   140  100   140    0     0    133      0  0:00:01  0:00:01 --:--:--   135
    100 1049k    0 1049k    0     0   3622      0 --:--:--  0:04:56 --:--:--  2899

等几分钟 make 完成，在整个 a6nt 目录中就是生成的结果，\bin\a6nt下可以看到 scheme.exe，双击它即可运行。 bin、boot 子目录有运行需要的文件。

Scheme 语言是 LISP 语言的一个方言或变种，它诞生于 1975 年的 MIT，对于这个有近三十年历史的编程语言来说，它并没有象 C++，java，C# 那样受到商业领域的青睐，在国内更是显为人知。但它在国外的计算机教育领域内却是有着广泛应用的，有很多人学的第一门计算机语言就是 Scheme 语言。

它是一个小巧而又强大的语言，作为一个多用途的编程语言，它可以作为脚本语言使用，也可以作为应用软件的扩展语言来使用，它具有元语言特性，还有很多独到的特色，以致于它被称为编程语言中的皇后。

下面是洪峰对 Scheme 语言的编程特色的归纳：

- 词法定界（Lexical Scoping）
- 动态类型（Dynamic Typing）
- 良好的可扩展性
- 尾递归（Tail Recursive）
- 函数可以作为值返回
- 支持一流的计算连续
- 传值调用（passing-by-value）
- 算术运算相对独立

Scheme 语言的实现有很多，如 Guile、GNU/MIT-Scheme、SCI、Scheme48、DrScheme 等，它们大多是开源的，可以自由下载安装使用，并且跨平台的实现也很多。你会发现既有像 basic 的 Scheme 语言解释器，也有将 Scheme 语言编译成 C 语言的编译器，也有象 Java，将 Scheme 语言代码编译成虚拟机代码的编译器。

解密Chez Scheme
https://guenchi.github.io/0x7c06.html

从用户角度最明显的：Chez自带一个Repl，简直是吊打所有语言，无论是增量编译还是虚拟机。吊打。那体验，让你用了Chez基本不想再用其他Scheme实现。这个Repl是由1000行c实现的，代码在c/expeditor.c

根据论文，闭源版的代码编译速度是现在版本的2-2.5倍。闭源版除了具有优良的编译速度和执行速度，还有非同一般的稳定性：不是比其他Scheme实现，而是所有语言。所以有好多大厂，偷偷拿Chez跑模拟流片等芯片设计。Chez不流行的原因之一：它们往往和Chez之前公司签订保密协议，外界根本不知道它们用了Chez Scheme。即使是Chez开源的今天，Chez在思科的跑的项目仍然是绝密。我相信正如黑客与画家所说，这些公司正将Lisp作为自己的绝密武器。

开源版本采用Nanopass架构，这个东西可以说是凝结了几代PL人的精华。基础构建于D.F. 惊绝天下的Match宏。整个架构经过几代人的迭代。这个东西可以说是现代编译器的峰顶，可以快速设计出一个编译器，而且因为拆分成小pass的原因，具有非常好的迭代性和可测试性。这个东西多牛逼？作为基石的Match宏就不是随便来个人就能写出来的。（Match宏好像是为了开发Nanopass（当时还只有雏形，也不叫这个名字）而开发的，用来匹配语法。4. Nanopass之外的代码：这些代码基本是30年来Kent Dybvig带领一代代博士生（说是毕生精力也不为过）慢慢迭代开发而来。多牛逼我也没看懂（尼玛1000多行一个的宏定义你去看懂去…），牛逼到我已经看不懂多牛逼了…这些宏在s/syntax.ss里，有好多个上千行代码的宏。写出这个完全是人类智力极限…

开源版本的Chez换用图着色寄存器分配。比原版本执行速度快17-25%。对，Chez不是虚拟机也不是Jit。它是实实在在将代码编译为Native Code的。

有一个性能测试 swapview，似乎 Chez Scheme 表现与 Python 相当，比 Guile 要好些。大概是 C/C++/Rust 的 1/5 ~ 1/10 效率。

## 关于LISP适合人工智能

以下内容摘自徐宥 4G-Spaces <https://blog.youxu.info/2010/02/10/lisp-and-ai-2/> 

>   如果你让任何一个 AI 方向的研究者推荐几本适合初学者的书的话，十有八九他会提到 
>   “Artificial Intelligence: A Modern Approach”(人工智能，一种现代方法) 和 
>   “Artificial Intelligence: A New Synthesis” (人工智能，一个新的综述)。 这两
>   本书的作者分别是 Peter Norvig 和 Nils Nilsson，都是 AI 领域的元老级人物。 
>
>   如果你是一个对书名很敏感的人，你肯定会想：奇怪了，这种书又不是畅销书，难道这两
>   位大牛写了书怕卖不出去，非要在书名上加一个 “现代” 或者 “新” 来吸引眼球？ 
>
>   事实上，这个“现代”和这个“新”都大有来头。 实际上，这二十年来，AI 研究领域接连发
>   生了好几个非常大的 paradigm shift. 传统的基于符号的 AI 方法不再是主流，取而代
>   之的，是多种多样的基于统计的，基于自动推理的，基于机器学习的，基于群体智慧的，
>   基于大规模数据集的等等各种各样研究方法的兴起。 这个 paradigm shift, 对于领域之
>   外的人好像是静悄悄的，可实际上 AI 领域早已发生了翻天覆地的变化。所以才会有 “新” 
>   和 “现代” 这样的词出现在书标题上。 不幸的是，大多写编程语言书的作者，未必全部知
>   晓这个变化，因此还沿袭原来的框架，继续写下 “LISP是适合 AI 的编程语言” 这样一个
>   早就不能完全反映现状的断言。 如果我们统计一个从事 AI 研究的研究者或者科学家用什
>   么语言，答案可能是五花八门无所不有： 做 AI Search 的用 C/C++/Java, 做机器学习
>   的如果模型和矩阵关系密切，可以用 Matlab, 如果统计计算较多，也可以用 R。 
>
>   至于做数据挖掘等等，语言和库更加五花八门，根本无法宣称那一个语言占上风。LISP 是
>   适合 AI 的语言的教科书神话，也早就被无数的这样的实例给打破了。


## [黑客与画家]为什么Lisp语言如此先进？

1958年，John McCarthy设计了Lisp语言。我认为，当前最新潮的编程语言，只是实现了他在1958年的设想而已......

Lisp语言诞生的时候，就包含了9种新思想。其中一些我们今天已经习以为常，另一些则刚刚在其他高级语言中出现，至今还有2种是Lisp独有的。按照被大众接受的程度，这9种思想依次是：

1. 条件结构（即"if-then-else"结构）。现在大家都觉得这是理所当然的，但是Fortran I就没有这个结构，它只有基于底层机器指令的goto结构。

2. 函数也是一种数据类型。在Lisp语言中，函数与整数或字符串一样，也属于数据类型的一种。它有自己的字面表示形式（literal representation），能够储存在变量中，也能当作参数传递。一种数据类型应该有的功能，它都有。

3. 递归。Lisp是第一种支持递归函数的高级语言。

4. 变量的动态类型。在Lisp语言中，所有变量实际上都是指针，所指向的值有类型之分，而变量本身没有。复制变量就相当于复制指针，而不是复制它们指向的数据。

5. 垃圾回收机制。

6. 程序由表达式（expression）组成。Lisp程序是一些表达式区块的集合，每个表达式都返回一个值。这与Fortran和大多数后来的语言都截然不同，它们的程序由表达式和语句（statement）组成。

区分表达式和语句，在Fortran I中是很自然的，因为它不支持语句嵌套。所以，如果你需要用数学式子计算一个值，那就只有用表达式返回这个值，没有其他语法结构可用，因为否则就无法处理这个值。

后来，新的编程语言支持区块结构（block），这种限制当然也就不存在了。但是为时已晚，表达式和语句的区分已经根深蒂固。它从Fortran扩散到Algol语言，接着又扩散到它们两者的后继语言。

7. 符号（symbol）类型。符号实际上是一种指针，指向储存在哈希表中的字符串。所以，比较两个符号是否相等，只要看它们的指针是否一样就行了，不用逐个字符地比较。

8. 代码使用符号和常量组成的树形表示法（notation）。

9. 无论什么时候，整个语言都是可用的。Lisp并不真正区分读取期、编译期和运行期。你可以在读取期编译或运行代码；也可以在编译期读取或运行代码；还可以在运行期读取或者编译代码。

在读取期运行代码，使得用户可以重新调整（reprogram）Lisp的语法；在编译期运行代码，则是Lisp宏的工作基础；在运行期编译代码，使得Lisp可以在Emacs这样的程序中，充当扩展语言 extension language；在运行期读取代码，使得程序之间可以用S-表达式 S-expression通 信，近来XML格式的出现使得这个概念被重新"发明"出来了。



## Chez Scheme 的传说
- [王垠 - Chez Scheme 的传说](http://www.yinwang.org/blog-cn/2013/03/28/chez-scheme)

Chez Scheme 的传说

在上一篇博文的最后，我提到了 Lisp 编译器的问题。由于早期的 Lisp 编译器生成的代码效率普遍低下，成为了 Lisp 失败的主要原因之一。而现在的高性能 Lisp 编译器（比如 Chez Scheme），其实已经可以生成非常高效的代码，甚至可以匹敌 C 程序的速度。如果你看得到我脑子里的东西，就会明白这完全不是吹牛，而是科学的结论。我在这里介绍一下我写 Scheme 编译器的经历，也许你就会从根本上明白为什么我会对此这么自信。这里的介绍其实不止针对函数式语言，而且针对所有语言的编译器。

编译器是一种神秘，有趣，又无聊的的程序。说它神秘，是因为只有非常少的人知道如何写出优秀的编译器。这些会写编译器的人，就像身怀绝技的武林高手一样神出鬼没。说它有趣，是因为编译器的技术里面含有大量的“哲学问题”和深刻的理论（比如 partial evaluation）。但为什么又说它无聊呢？因为你一旦掌握了编译器技术里面最精华的原理，就会发现其实说来说去就那么点东西。编译器代码里面的“创造性含量”其实非常低。里面有些固定的“模式”，几十年都不变。这是因为编译器只是一种“工具”，而不是最终的“目的”。它就像做菜的锅一样，只有屈指可数的那几种形状。设计应用程序才是程序员的最终目的。只有应用程序才能有无穷无尽的创造性。这就像厨师用同样的锅，却能做出无穷变化的菜肴来。然而，我并不是说普通程序员不应该学习写编译器。相反，编译器的原理是非常重要的知识。不理解编译原理的应用程序设计者，就像不理解菜锅组成原理的厨师。

先来说一说为什么早期的 Lisp 编译器生成的代码效率低下吧。在函数式语言的早期，由于它比普通的语言多了一些表达力强大的构造（比如函数作为值传递），人们其实都不知道如何实现它的编译器。很多 Scheme 的编译器其实只是把 Scheme 编译成 C，然后再调用 C 语言的编译器。Haskell 的编译器 GHC 在早期也是这样的。而且由于 C 编译器生成的汇编代码不完全符合 Haskell 的需求，GHC 里面含有一个 Perl 脚本，专门用于调整这汇编代码的结构。这个 Perl 脚本，由于它的工作方式毫无原则，被叫做 evil mangler。现在这个东西已经被去掉了，但从它曾经的存在你可以看出，其实函数式编译器的技术在早期是相当混沌的。

在我看来，早期 Lisp 编译器出现的主要问题，其实在于对编译的本质的理解，以及编译器与解释器的根本区别。解释器之所以大部分时候比编译器慢，是因为解释器“问太多的问题”。每当看到一个构造，解释器就会问：“这是一个整数吗？”“这是一个字符串吗？”“这是一个函数吗？”…… 然后根据问题的结果进行不同的处理。这些问题，在编译器的理论里面叫做“解释开销”（interpretive overhead）。编译的本质，其实就是在程序运行之前进行“静态分析”，试图一劳永逸的回答这些问题。于是编译后的代码根本不问这种问题，它直接就知道那个位置肯定会出现什么构造，应该做什么事，于是它就直接去做了。早期的 Lisp 编译器，以及现在的很多 Scheme 编译器出现的问题其实在于，它们并没有干净的消除这些问题，甚至根本没有消除这些问题。

当我最早学习 Scheme 语言的时候，我发现 Scheme 有太多的“实现”：PLT Scheme（现在叫 Racket）, MIT Scheme, Scheme 48, Bigloo, Chicken, Gambit, Guile, … 让人搞不清楚哪一个更好。有些 Scheme 实现显得高级一些，但实际用起来总是感觉不放心，因为你心里总想着，这代码编译出来到底能不能跟 C 语言代码比？这也是我后来开始使用 Common Lisp 的原因，因为 Common Lisp 似乎有挺多高效的编译器（CMUCL，Lispworks，Allegro 等等）。

直到有一天，我发现了 Chez Scheme，它改变了我对 Scheme 编译器，以至于整个编译器概念的理解。当时我只下载了 Chez Scheme 的免费版本，叫做 Petite。Petite 与正式版 Chez Scheme 的区别是，它不输出二进制代码，所以你不能把编译后的代码拿去销售。另外出于商业目的，Petite 的出错信息非常的“简约”，以至于有时候你不得不用其它的 Scheme 实现，才能找到 bug 的位置。但是一运行就见分晓，Petite 被作为一个“解释器”直接运行 Scheme 代码，比其他的 Scheme 实现编译后的代码还要快很多倍。

Chez Scheme 导致了我命运的改变，我怎么也没有想到，自己最终会见到它的作者 R. Kent Dybvig，并且成为他的学生。我只能说也许一切都是天意吧。第一次见到 Kent 的时候，他安静的对我说，你应该拥有自己的代码，将来有一天，你会发现它的价值。

也就是这个 Kent，单枪匹马的创造了 Chez Scheme，世界上唯一的商业 Scheme 编译器，并且为此成立了自己的公司（Cadence Research Systems）。Chez Scheme 价格不菲，而且不明码实价，它的价格跟项目的大小和公司的规模成正比。有些大公司花重金购买 Chez Scheme 用于一些核心的项目。其中有些公司为了保证这编译器的安全，又花了好几倍的价钱买下了它的源代码。Kent 的公司只有他一个人，不用操心管理，也不用操心销售。所以他过的非常舒服，基本是一个不愁吃穿，不问世事的人。

Kent 是我一生中见过的最神秘，最酷的人。他几乎从来不表扬任何人，但也不贬低任何人。从冷漠的言语之中，你仿佛感觉他并不是这个世界上的人。任何人的喜怒与哀乐，傲慢与偏见，蔑视与奉承，全都不能引起他情绪的变化。他的心里有许许多多的秘密，你需要一些技巧才能套出他的真言。他很少发表论文，却把别人的论文全都看得很透。没有人知道他的核心技术，他也从来不在乎别人是否了解他的水平。最让人惊奇的是，没有人知道他叫什么名字！他的全名叫 R. Kent Dybvig，那么 R. 就应该是他的 first name。然而，却从来没有人知道那个 R. 是哪一个名字的简写，所以大家只好叫他的 middle name，Kent。

Chez Scheme 生成的“目标代码”效率之高，我还没有见到任何其它 Scheme 编译器可以与之匹敌。而它的“编译速度”之快，没有任何语言的任何编译器可以相提并论（注意我去掉了“Scheme”这个限定词）。Chez Scheme 可以在 5 秒钟之内完成从头到尾的自我编译。想想编译 GCC 或者 GHC 需要多少时间，你就明白差距了。

另外值得一提的是，Chez Scheme 从头到尾都是 Kent 一个人的作品。它的工作原理是从 Scheme 源程序一直编译到机器代码，而不依赖任何其他语言的编译器。它甚至不依赖第三方的汇编器，所有三种体系构架（Intel, ARM, SPARC）的汇编器，都是 Kent 自己写的。为什么这样做呢？因为几乎没有其它人的编译器代码能够达到他的标准。连 Intel 自己给自己的处理器写的汇编器，都不能满足他的要求。

如果你上了 Kent 的课，再来看看普通的编译器书籍（比如有名的 Dragon Book），或者 LLVM 的代码，你就会发现 Kent 的水平其实远在这些知名的大牛之上。我为什么可以这么说呢？因为如果你的水平不如这些人的话，你自己都会对这种判断产生怀疑。而如果你超过了别人，他们的一言一行，他们的每一个错误，都像是处于你的显微镜底下，看得一清二楚。这就是为什么有一天我拿起 Dragon Book，感觉它变得那么的幼稚。而其实并不是它变幼稚了，而是我变成熟了。实话实说吧，在编译器这个领域，我觉得 Kent 很有可能就是世界的 No.1。

如果你不了解 Scheme 的编译器里面有什么东西，也许就会轻视它的难度。Scheme 是比 C 语言高级很多的语言，所以它的编译器需要做比 C 语言的编译器多很多的事情。在 Kent 的编译器课程的前半段，我们其实本质上是在实现一个 C 语言的编译器，把一种基于“S表达式”的中间语言，编译为 X64 汇编代码。在后半学期的课程中，我们才加入了各种 Scheme 的先进功能，比如函数作为值（需要进行 closure conversion 以及 closure 优化），尾递归优化（tail-call optimization），等等。另外，我还自己为它加入了一种非常漂亮的技术，叫做 online partial evaluation。这种技术可以在一个 pass 就完成普通编译器需要好几个 pass 才能完成的优化。

在这些先进的优化技术之下，几乎所有的冗余代码都会被编译器消除掉。这些优化的智能程度，在很多方面拥有人类思维没法达到的准确性和深度。如果你的程序没有使用到 Scheme 特有的功能，那么生成的目标代码就会跟 C 语言编译后的代码没有什么两样。比如，如果你的代码没有把函数作为值传递，或者你的函数里面没有“自由变量”，或者你的函数里虽然有自由变量，但是你却没法在函数外部改变它的值，那么生成的代码里面就不会含有“闭包”，也就不会产生多余的内存数据交换。你有时甚至会得到比 C 程序编译之后更好的代码，因为我们的“后端”编译器其实比 GCC，LLVM 之类的 C 编译器先进。

Kent 的课程编译器有很好的结构，它被叫做“nanopass 编译器构架”。它的每一个 pass 只做很小的一件事情，然后这些 pass 被串联起来，形成一个完整的编译器。编译的过程，就是将输入程序经过一系列的变换之后，转化为机器代码。你也许发现了，这在本质上跟 LLVM 的构架是一样的。但是我可以告诉你，我们的课程编译器比 LLVM 干净利落许多，处于远远领先的地位。每一节课，我们都学会一个 pass。每一个讲义，都非常精确的告诉你需要干什么。每一次的作业，提交的时候都会经过上百个测试（当然 Kent 不可能把 Chez Scheme 的测试都给我们），如果没有通过就会被拒绝接受。这些测试也可以下载，用于自己的调试。有趣的是，每一次作业我们都需要提交一些自己写的新测试，目的是用于“破坏”别人的编译器。所以我们每次都会想出很刁钻的输入代码，让同学的日子不好过。当然是开玩笑的，这种做法其实大大的提高了我们对编译器测试的理解和兴趣，以及同学之间的友谊。这比起我曾经在 Cornell 选过（然后 drop 掉）的编译器课程，真是天壤之别。

在课程的最后，我们做出了一个完整的编译器，它可以把 Scheme 最关键的子集编译到 X64 汇编代码，然后通过 GNU 的汇编器转化成机器代码。在最后的一节课，Kent 对我们的学期做了一个令人难忘的总结。他说：“你们现在写出的这个编译器里面含有很多先进的技术。也许过一段时间再回头看这段代码，你们才会发现它的价值。如果你们觉得自己已经成为了编译器的专家，那我就告诉你们，你们提交的最快的编译器，编译速度比 Chez Scheme 慢了 700 倍。但是不要灰心，我告诉你们哪些地方可以改进……”

只有极少数的人见到过 Chez Scheme 的源代码，我也没有看见过。但是见到过它的人告诉我，Chez Scheme 里面其实只有很少几个 pass，而不是像我们的课程编译器有 50 个左右的 pass，这节省了很多用于“遍历”代码树所需要的时间。Chez Scheme 只使用了一些非常简单的算法，没有使用论文里很炫很复杂的方法，这也是它速度快的原因之一。比如它的寄存器分配，没有使用通常的“图着色”（graph coloring）方法，而是使用非常简单的一种类似 linear scan 的算法，生成的代码效率却更高。另外，Scheme 使用“S表达式”作为它的语法，使得“语法分析”的速度非常之快。其它语言由于使用了复杂的语法，挺大一部分编译时间其实花在了语法分析上面。

所以实际上 Chez Scheme 早就有了超越世人的技术，Kent 却很少为它们发表论文。这是因为他自私吗？应该不是。他已经通过他的课程给予了我们那么宝贵的礼物，我们又怎能要求更多？所以对于更深入的内容，我都是自己摸索出解决方案，再去套他的口气，看他有没有更好的想法。于是有时候我会很惊讶的发现他的一些非常透彻的见解。比如有一天我问他，为什么编译器需要进行寄存器分配？为什么需要寄存器？我觉得 Knuth 设计的 MMIX 处理器里的“寄存器环”，也许能够从根本上避免“寄存器分配”这问题。他听了之后不动声色的说，MMIX 的寄存器环（以及 SPARC 的寄存器窗口）其实是有问题的，当函数递归调用达到一定的深度之后，寄存器环里有再多寄存器都会被用光，到时候就会出现大量的寄存器与内存之间的数据交换，而被“压栈”之后的寄存器，并不会得到有效地“再利用”。于是我才发现，他不但早已了解 MMIX 的设计，而且看透了它的本质。

有趣的是在课程进行之中的时候，我发现自己有些突发灵感的做法，其实已经超越了 Chez Scheme，以至于在某些 pass 会生成比它还要高效的代码，然而我的编译器代码却比它的还要短小（当然绝大部分时间我的代码不如 Chez Scheme）。于是我就隐约的发现，Kent 有时候会悄悄的花时间看我的作业，想搞明白我是怎么做的，但却不想让我知道。有一天开会的时候 Kent 没有来，他的编译器课程助教 Andy 对我说：“Kent 还在对你写的代码进行一些侦探工作……” 从任何人那里得到启发，吸收并且融入到自己的能力里面，也许就是 Kent 练就如此盖世神功的秘诀吧。

我想，这篇文章就该到此结束了。写这些东西的目的，其实只是树立人们对于函数式语言编译器的信心。它们有些其实比 C 和 C++ 之类语言的编译器高明很多。我没有时间也没有精力去讲述这编译器里面的细节，因为它实在是非常困难，却又非常优雅的程序。如果你有兴趣的话，可以看看我最后的代码。由于版权原因，有些辅助部件我不能放在网上，所以你并不能运行它，只能看一个大概的形状。如果你需要一个 Scheme 版本用于学习的话，Chez Scheme 有一个免费的版本叫做 Petite Chez Scheme，可以免费下载。因为 Petite 的出错信息非常不友好，所以我也推荐 Racket 作为替补。不过你需要注意的是，Racket 的速度比起 Chez Scheme 是天壤之别。



# ⚑ Scheme 基本语法
https://www.gnu.org/software/guile/download/
https://github.com/cky/guile

Chez Scheme 与 DrRacket 类似，都是 Scheme 语言家族，其编程整体思路跟传统语言有很大区别。其语言结构主要采用递归的形式，顺序执行语句内容需要使用 begin 关键词。使用 define 语句来定义变量和函数，使用 let 语句来绑定某个变量的值并规定作用域，使用 time 来统计语句运行的时间。

    ; 注释形式，使用分号
     
    ; 四则运算
    (+ 1 2)   ; 3
    (- 5 1)   ; 4
    (* 4 3)   ; 12
    (/ 4 2)   ; 2

    (+ 1 2 3) ; 6
    (- 5 1 2) ; 2
    (* 4 3 2) ; 24
    (/ 4 2 2) ; 1
    
    ; 条件判断
    (= 2 3)   ; #f
     
    ; 变量定义
    (define a 3)
     
    ; 变量赋值
    (set! a 6)
    (printf "~a" a)

支持 Unicode 标识符，吊打中文编程神棍：

```lisp
(define 阶乘
    (lambda (x)
      (if (zero? x)
          1
          (* x (阶乘 (1- x))))))

(display (阶乘 36))
```

对值 6.6.8 Pairs 是 Scheme 中非常重要数据类型，它不仅让两个对象结成一个对象，可使用 cons 方法，更重要的是可以结成一个列表。Scheme REPL 交互环境中，可以直接输入“dotted list”语法形式，句点是 cons 方法的语法糖。在代码文件中也可以使用 display 或 printf 函数将它打印出来。因为圆括号是 LISP 的基本语法结构中的元素，为了表达对值，就需要使用引号转义，如 `'(1 . 2)`：

```lisp
(cons '火腿 '(鸡蛋))
(火腿 '鸡蛋')
```

Parts 的两个组成部分在传统中称为“car” 和 “cdr”，可以通过以这两个名称命名的系列方法获取它们的值。例如，set-car! 和 set-cdr!，这俩方法不返回值，使用打印方法会显示 `#<unspecified>`。

由于赋值会改变参数的值，因此它具有破坏性 (destructive)。具有破坏性的方法都以 ！结尾，以作警示。


字符串以及 symbol（不可变字符串，带'号的字母）

    ; 创建字符串
    "awefawef"
    ; 定义字符串
    (define a "awefawef")
    ; 使字符串中所有字符变为大写
    (string-upcase "awefawef")
     
    ; 创建symbol（不可变的字符串）
    'awefawef
    ; 定义symbol
    (define a 'awefawef)
     
相互转换：

    (symbol->string 'Apple)    ;"Apple"
    (string->symbol "Apple")   ;'Apple

函数定义以及操作

    ; 定义函数
    (define (func1 x) (string-upcase x))
    ; 使用函数
    (func1 "awer")
    ; 在map中使用函数
    (map func1 a)

list 数据结构，是一种链表结构。但跟传统的 arraylist 不同，它的 append 方法不改变原来的变量，只返回修改后的 list

    ; 创建list数据结构
    (list "red" "green" "blue")
    ; 定义list数据结构变量
    (define a (list "red" "green" "blue"))
    ; 查看list长度
    (length (list 1 2 3 4))
    ; 取出list中第2个元素
    (list-ref (list 'a 'b 'c) 2)  ; 结果为'c
     
    ; 遍历list（使用map函数）
    (map (lambda (x) (string-upcase x)) (list "red" "green" "blue"))
     
    ; 取元素相关操作
    (car (list 1 2 3))  ; 取第一个元素，结果为1
    (cdr (list 1 2 4))  ; 取第二个及以后元素，结果为(2 4)
     
    ; 改元素相关操作：
    ; Don’t confuse cons and append. The cons function takes an element and a list, 
    ; while append takes a list and a list. That difference is reflected in their types:
    (cons 1 '(2 3))             ; 元素和表一起合并成一个新表，并返回
    (append '(1 2) '(3 4))      ; 表和表一起合并成一个新表，并返回

vector 数据结构（类似 Java 的数组），与 list 的区别详解（6.6.10 Vectors）

    ; 创建vector
    (vector 'a 'b)  ; 输出结果为#(a b)
    (define v1 (vector 'a 'b))
    ; 取出 vector 第0个元素
    (vector-ref v1 0)  ; a
    ; 修改第0个元素
    (vector-set! v1 0 'c)
     
    ; 相互转换
    (vector->list vec)
    (list->vector lst)

操作哈希表

    > (define a make-hash-table)  ; 注意区别，不在make-hash-table两旁加括号的话，系统会认为你是把这个函数赋值给a，而不是把函数的执行结果赋值给a
    > a
    #<procedure make-hash-table>
    > (define ht (make-hash-table))
    > ht
    #<eq hashtable>
    ; 往表中添加（或修改）元素
    (put-hash-table! ht 'b "wtf")  ; 注意感叹号别漏了
    ; 使用key获取对应元素，该实例是获取'b这个key对应的元素，而最后一个参量是指获取失败的时候返回的默认值。
    (get-hash-table ht 'b #f)
    ; 获取key的vector（返回值是一个vector类型，长得像这样#(a b c)）
    (hashtable-keys ht)
    ; 获取value的vector（返回值是一个vector类型，长得像这样#(a b c)）
    (hashtable-values ht)

普通fib函数

    (define (fact n) (if (= n 1) 1
        (* n (fact (- n 1))  )
        )
    )
    
尾递归 fib 函数

    (define (fact-tail n) (fact-rec n n))
    (define (fact-rec n p) (if (= n 1) p
            (let ( (m (- n 1)) ) 
                (fact-rec m (* p m))
            )
        )
    )



## 形式 (Form)

任何 Lisp 系统都含有一个交互式的前端，叫做顶层(toplevel)。一个最简单的 Lisp 表达式是整数，系统会打印出它的值，接着打印出另一个提示符，告诉你它在等待更多的输入。

在这个情况里，打印的值与输入的值相同。称之为对自身求值。当我们输入需要做某些计算来求值的表达式时，生活变得更加有趣了。举例来说，如果我们想把两个数相加，日常生活中用 + 时，它必须有两个实参，一个在左，一个在右。前序表示法的灵活性代表着，在 Lisp 里， + 可以接受任意数量的实参，包含了没有实参：

   > (+)
   0
   > (+ 2)
   2
   > (+ 2 3)
   5
   > (+ 2 3 4)
   9

由于操作符可接受不定数量的实参，我们需要用括号来标明表达式的开始与结束。 表达式可以嵌套。即表达式里的实参，可以是另一个复杂的表达式。例子 (七减一) 除以 (四减二)：

   > (/ (- 7 1) (- 4 2))
   3

Lisp 表示法另一个美丽的地方是：它就是如此简单。所有的 Lisp 表达式，要么是 1 这样的数原子，要么是包在括号里，由零个或多个表达式所构成的列表。在 Lisp 里，我们用单一的表示法，来表达所有的概念。

以下是合法的 Lisp 表达式，空格分割了LIST元素：

   > 2 (* 2 3) (+ 2 3)
   2
   >
   6
   >
   5



## Variable & Binding

```lisp
; 4.1.1 Variable references
; 4.2.2 Binding constructs
(define x 1)
(display (assv 'z '((z (+ x 1)))))(newline)
(display (number->string (let ((x 2) (y 3)) (* x y)) 2 ))(newline)

(letrec (
    (isEven? (lambda (n) (if (zero? n) #t (isOdd? (- n 1)))))
    (isOdd? (lambda (n) (if (zero? n) #f (isEven? (- n 1))))) 
  )
  (display (isEven? 88))(newline)
  (display (isEven? 89))(newline)
  )
```


## 求值 (Evaluation) & 字面量 (quote)

在 Lisp 里，+ 是函数，然而如 (+ 2 3) 的表达式，是函数调用。

当 Lisp 对函数调用求值时，它做下列两个步骤：

首先从左至右对实参求值。在这个例子当中，实参对自身求值，所以实参的值分别是 2 跟 3 。
实参的值传入以操作符命名的函数。在这个例子当中，将 2 跟 3 传给 + 函数，返回 5 。
如果实参本身是函数调用的话，上述规则同样适用。

但不是所有的 Common Lisp 操作符都是函数，不过大部分是。函数调用都是这么求值。
由左至右对实参求值，将它们的数值传入函数，来返回整个表达式的值。这称为 Common Lisp 的求值规则。


一个不遵守 Common Lisp 求值规则的操作符是 quote 。 quote 是一个特殊的操作符，意味着它自己有一套特别的求值规则。
这个规则就是：什么也不做。 quote 操作符接受一个实参，并完封不动地返回它。

   > (quote (+ 3 5))
   (+ 3 5)

为了方便起见，Common Lisp 定义 ' 作为 quote 的缩写。你可以在任何的表达式前，贴上一个 ' ，与调用 quote 是同样的效果：
   
   > '(+ 3 5)
   (+ 3 5)


## Condition & Case

```lisp
(cond ((> 3 2) 'greater)
   ((< 3 2) 'less))                 ==>  greater

(cond ((> 3 3) 'greater)
   ((< 3 3) 'less)
   (else 'equal))                   ==>  equal

(cond ((assv 'b '((a 1) (b 2))) => cadr)
   (else #f))                       ==>  2

(display (case (* 2 3) 
  ((1 3 5 7) 'prime)
  ((2 4 6 8) 'composite)
  ))(newline)

(and (= 2 2) (> 2 1))                  ==>  #t
(and (= 2 2) (< 2 1))                  ==>  #f
(and 1 2 'c '(f g))                    ==>  (f g)
(and)                                  ==>  #t

(or (= 2 2) (> 2 1))                   ==>  #t
(or (= 2 2) (< 2 1))                   ==>  #t
(or #f #f #f)                          ==>  #f
(or (memq 'b '(a b c))
    (/ 3 0))                           ==>  (b c)
```


## Do Loop

4.2.4 Iteration

 -- library syntax: do ((<variable1> <init1> <step1>) ...) (<test>
          <expression> ...) <command> ...

 -- library syntax: let <variable> <bindings> <body>

```lisp
 (do ((vec (make-vector 5))
      (i 0 (+ i 1)))
     ((= i 5) vec)
   (vector-set! vec i i))               ==>  #(0 1 2 3 4)

 (let ((x '(1 3 5 7 9)))
   (do ((x x (cdr x))
        (sum 0 (+ sum (car x))))
       ((null? x) sum)))                ==>  25

 (let loop ((numbers '(3 -2 1 6 -5))
            (nonneg '())
            (neg '()))
   (cond ((null? numbers) (list nonneg neg))
         ((>= (car numbers) 0)
          (loop (cdr numbers)
                (cons (car numbers) nonneg)
                neg))
         ((< (car numbers) 0)
          (loop (cdr numbers)
                nonneg
                (cons (car numbers) neg)))))
               ==>  ((6 1 3) (-5 -2))
```

## 中断循环（break loop）

如果你试着输入 Lisp 不能理解的东西，它会打印一个错误讯息，接着带你到一种叫做中断循环（break loop）的顶层。 中断循环给予有经验的程序员一个机会，来找出错误的原因，不过最初你只会想知道如何从中断循环中跳出。 如何返回顶层取决于你所使用的 Common Lisp 实现。在这个假定的实现环境中，输入 :abort 跳出：

```lisp
   > (/ 1 0)
   Error: Division by zero
         Options: :abort, :backtrace
   >> :abort
```

## 数据 (Data)

除了整数（integer）字符串（string），Lisp 提供了其他语言所找不到的数据类型。

分别是符号（symbol）与列表（lists），符号是英语的单词 (words)，无论你怎么输入，通常会被转换为大写：

   > 'Artichoke
   ARTICHOKE

符号（通常）不对自身求值，所以要是想引用符号，应该像上例那样用 ' 引用它。

列表是由被括号包住的零个或多个元素来表示。元素可以是任何类型，包含列表本身。使用列表必须要引用，不然 Lisp 会以为这是个函数调用：

   > '(my 3 "Sons")
   (MY 3 "Sons")
   > '(the list (a b c) has 3 elements)
   (THE LIST (A B C) HAS 3 ELEMENTS)
   注意引号保护了整个表达式（包含内部的子表达式）被求值。

你可以调用 list 来创建列表。由于 list 是函数，所以它的实参会被求值。这里我们看一个在函数 list 调用里面，调用 + 函数的例子：

如果一个列表被引用了，则求值规则对列表自身来求值；如果没有被引用，则列表被视为是代码，依求值规则对列表求值后，返回它的值。

   > (list '(+ 2 1) (+ 2 1))
   ((+ 2 1) 3)

这里第一个实参被引用了，所以产生一个列表。第二个实参没有被引用，视为函数调用，经求值后得到一个数字。


## 列表操作 (List Operations)

用函数 cons 来构造列表。如果传入的第二个实参是列表，则返回由两个实参所构成的新列表，新列表为第一个实参加上第二个实参：

   > (cons 'a '(b c d))
   (A B C D)

可以通过把新元素建立在空表之上，来构造一个新列表。上一节所看到的函数 list ，不过就是一个把几个元素加到 nil 上的快捷方式：

   > (cons 'a (cons 'b nil))
   (A B)
   > (list 'a 'b)
   (A B)

取出列表元素的基本函数是 car 和 cdr 。对列表取 car 返回第一个元素，而对列表取 cdr 返回第一个元素之后的所有元素：

   > (car '(a b c))
   A
   > (cdr '(a b c))
   (B C)

你可以把 car 与 cdr 混合使用来取得列表中的任何元素。如果我们想要取得第三个元素，我们可以：

   > (car (cdr (cdr '(a b c d))))
   C

不过，你可以用更简单的 third 来做到同样的事情：

   > (third '(a b c d))
   C

## Empty 空值与逻辑

在 Common Lisp 里有两种方法来表示空列表：一对不包括任何东西的圆括号，或用 nil 符号来表示空表。

你不需要引用 nil （但引用也无妨），因为和 #t 一样 nil 是对自身求值的。

1. nil 同时也表示逻辑假，和真值 #t 相对应。
2. (null nil) 返回 #t，null 函数运算列表是否为空。
3. (not nil)，返回 #t，not 函数运算逻辑是否为假。

```lisp
(if nil (+ 1) (+ 0))                 ==>  0
(if () (+ 1) (+ 0))                  ==>  0
(if 0 (+ 1) (+ 0))                   ==>  1
(if 1 (+ 1) (+ 0))                   ==>  1

(if 't (+ 1) (+ 0))                  ==>  1
(if 'T (+ 1) (+ 0))                  ==>  1
(if T (+ 1) (+ 0))                   ==>  1
(if '(T) (+ 1) (+ 0))                ==>  1
(if (not 'T) (+ 1) (+ 0))            ==>  0
(if (not T) (+ 1) (+ 0))             ==>  0

( null () )                          ==>  T
( null nil )                         ==>  T
( null t )                           ==>  NIL

( not () )                           ==>  T
( not nil )                          ==>  T
( not T )                            ==>  NIL

( null (not T) )                     ==>  T
( null (not nil) )                   ==>  NIL
( null (not (not T)) )               ==>  NIL
( null (not (not ())) )              ==>  T
```

## Recursive Function
- https://www.kancloud.cn/kancloud/yast-cn/64468

用于计算阶乘的fact函数

    (define (fact n)
      (if (= n 1)
          1
          (* n (fact (- n 1)))))

(fact 5)的计算过程如下：

```lisp
    (fact 5)
    ⇒ 5 * (fact 4)
    ⇒ 5 * 4 * (fact 3)
    ⇒ 5 * 4 * 3 * (fact 2)
    ⇒ 5 * 4 * 3 * 2 * (fact 1)
    ⇒ 5 * 4 * 3 * 2 * 1
    ⇒ 5 * 4 * 3 * 2
    ⇒ 5 * 4 * 6
    ⇒ 5 * 24
    ⇒ 120
```

普通的递归调用并不高效因为它既浪费存储空间又具有函数调用开销。与之相反，尾递归函数包含了计算结果，当计算结束时直接将其返回。特别地，由于 Scheme 规范要求尾递归调用转化为循环，因此尾递归调用就不存在函数调用开销。

fact 函数的尾递归版本 fact-tail

```lisp
    (define (fact-tail n)
      (fact-rec n n))

    (define (fact-rec n p)
      (if (= n 1)
          p
          (let ((m (- n 1)))
        (fact-rec m (* p m)))))
```

fact-tail 计算阶乘的过程像这样：

```lisp
    (fact-tail 5)
    ⇒ (fact-rec 5 5)
    ⇒ (fact-rec 4 20)
    ⇒ (fact-rec 3 60)
    ⇒ (fact-rec 2 120)
    ⇒ (fact-rec 1 120)
    ⇒ 120
```

## printf 或 display 打印函数

```lisp
    (display '(1 . 2) )
    (display '(foo . bar) )

    (printf "~a" 15) ; 打印十进制 15
    (printf "~b" 15) ; 打印二进制 1111
```

## assembly-output 汇编代码输出

使用 Chez Scheme 一个未文档化的 API，可以查看你的代码被编译成了怎样的汇编代码：

```lisp
> (#%$assembly-output #t)
> (lambda (x) x)

    entry.1:
    0:       cmpi           (imm 1), %ac0
    4:       bne            lf.0(7)
    dcl.2:
    6:       mov            %rsi, %ac0
    9:       jmp            (disp 0 %sfp)
    lf.0:
    13:      movi           (imm 4294967295), %ts
    23:      jmp            %ts
    25:      relocation:    (x86_64-jump 65 (library-code #(libspec doargerr 166)))
    25:      <end>

    dcl.3:
    0:       movi           (literal 0 (closure . #($c-func (...) #f (...) #f))), %ac0
    10:      jmp            (disp 0 %sfp)
    14:      <end>
    #<procedure>
```


# ⚑ The Revised6 Report on the Algorithmic Language Scheme
https://www.r6rs.org/final/r6rs.tar.gz

The Revised6 Report on the Algorithmic Language Scheme
The final versions of the main report, library report, nonnormative appendices, and rationale:

1. Revised6 Report on the Algorithmic Language Scheme
2. Revised6 Report on the Algorithmic Language Scheme — Standard Libraries
3. Revised6 Report on the Algorithmic Language Scheme — Non-Normative Appendices
4. Revised6 Report on the Algorithmic Language Scheme — Rationale

R6RS Existing Implementations
The following list has links to implementations of R6RS Scheme. This page makes no claims to the conformance levels of these implementations.

01. BiwaScheme http://www.biwascheme.org/
02. Chez Scheme http://www.scheme.com/
03. Guile http://www.gnu.org/software/guile/
04. Ikarus Scheme http://ikarus-scheme.org/
05. IronScheme http://www.codeplex.com/IronScheme
06. Larceny http://www.larcenists.org/
07. Loko Scheme https://scheme.fail/
08. Mosh http://code.google.com/p/mosh-scheme/
09. PLT Racket http://www.racket-lang.org/
10. Sagittarius Scheme http://code.google.com/p/sagittarius-scheme/
11. Vicare http://marcomaggi.github.com/vicare.html
12. Ypsilon http://code.google.com/p/ypsilon/

RnRS 报告文档是 Scheme 社区官方语言规范，它的目标读者是 Scheme 语言的实现者，文档规范了 Scheme 语言的基本概念、严格递归、语法、表达式、字面量等等的实现细节要求。这些指导性内容也可以作为学习 Scheme 语言的教材。

Lisp 本义是 LISt Processing，而这个列表处理的过程就是符号逻辑运算。最近使用 GNU Make 实现了一个基于符号运算的加法器，隐约感觉 Scheme 的列表处理就是基于符号运算，以及综合了递归、lambda 片子等等语言特性的工具。如下摘自规范文档的演示代码片断，就是说明 Scheme 的符号处理过程：

```lisp
; 4.1.3 Procedure calls
(+ 3 4)                                ==>  7
((if #f + *) 3 4)                      ==>  12
```

同样出于符号处理的思维，掌握一点 GNU M4 通用宏编程经验将大大提升学习 Scheme 的效率。

Lambda calculus 是一种形式化的计算模型，1930 年代阿隆佐·丘奇（Alonzo Church）首次提出，用于研究可计算性和函数定义的基本原理。它被认为是计算机科学中的基本理论，对于函数式编程和编程语言的设计有着深远的影响。

Lambda 演算的基本概念是“函数抽象”和“函数应用”。函数抽象指的是将一个函数定义为一个参数和一个表达式的形式，而函数应用指的是将一个函数应用于一个参数的过程。Lambda演算中的所有计算都是通过这两种基本操作进行的。

Lambda 演算中的表达式由变量、函数抽象和函数应用组成。变量是一个标识符，表示一个值或一个函数。函数抽象由一个参数和一个表达式组成，表示一个函数的定义。函数应用由一个函数和一个参数组成，表示函数调用的过程。

Lambda 演算中的每个表达式都可以通过一系列的替换规则进行简化。这些规则包括“β-规约”和“α-变换”，其中“β-规约”表示函数应用的过程，而“α-变换”用于避免名称冲突。


# ⚑ Chez Scheme Version 9 User’s Guide
- [Chez Scheme Version 9 User's Guide](https://cisco.github.io/ChezScheme/csug9.5/index.html)
- [Chez Scheme Version 8 User's Guide R. Kent Dybvig](https://www.scheme.com/csug8/index.html)

Chez Scheme
Chez Scheme is both a programming language and an implementation of that language, with supporting tools and documentation.

As a superset of the language described in the Revised6 Report on the Algorithmic Language Scheme (R6RS), Chez Scheme supports all standard features of Scheme, including first-class procedures, proper treatment of tail calls, continuations, user-defined records, libraries, exceptions, and hygienic macro expansion.

Chez Scheme also includes extensive support for interfacing with C and other languages, support for multiple threads possibly running on multiple cores, non-blocking I/O, and many other features.

The Chez Scheme implementation consists of a compiler, run-time system, and programming environment. Although an interpreter is available, all code is compiled by default. Source code is compiled on-the-fly when loaded from a source file or entered via the shell. A source file can also be precompiled into a stored binary form and automatically recompiled when its dependencies change. Whether compiling on the fly or precompiling, the compiler produces optimized machine code, with some optimization across separately compiled library boundaries. The compiler can also be directed to perform whole-program compilation, which does full cross-library optimization and also reduces a program and the libraries upon which it depends to a single binary.

The run-time system interfaces with the operating system and supports, among other things, binary and textual (Unicode) I/O, automatic storage management (dynamic memory allocation and generational garbage collection), library management, and exception handling. By default, the compiler is included in the run-time system, allowing programs to be generated and compiled at run time, and storage for dynamically compiled code, just like any other dynamically allocated storage, is automatically reclaimed by the garbage collector.

The programming environment includes a source-level debugger, a mechanism for producing HTML displays of profile counts and program "hot spots" when profiling is enabled during compilation, tools for inspecting memory usage, and an interactive shell interface (the expression editor, or "expeditor" for short) that supports multi-line expression editing.

The R6RS core of the Chez Scheme language is described in The Scheme Programming Language, which also includes an introduction to Scheme and a set of example programs. Chez Scheme's additional language, run-time system, and programming environment features are described in the Chez Scheme User's Guide. The latter includes a shared index and a shared summary of forms, with links where appropriate to the former, so it is often the best starting point.


Chez Scheme Version 9 User's Guide

Table of Contents

    Preface
    Chapter 1. Introduction
          1.1. Chez Scheme Syntax
          1.2. Notational Conventions
          1.3. Parameters
          1.4. More Information
    Chapter 2. Using Chez Scheme
          2.1. Interacting with Chez Scheme
          2.2. Expression Editor
          2.3. The Interaction Environment
          2.4. Using Libraries and Top-Level Programs
          2.5. Scheme Shell Scripts
          2.6. Optimization
          2.7. Customization
          2.8. Building and Distributing Applications
          2.9. Command-Line Options
    Chapter 3. Debugging
          3.1. Tracing
          3.2. The Interactive Debugger
          3.3. The Interactive Inspector
          3.4. The Object Inspector
          3.5. Locating objects
          3.6. Nested object size and composition
    Chapter 4. Foreign Interface
          4.1. Subprocess Communication
          4.2. Calling out of Scheme
          4.3. Calling into Scheme
          4.4. Continuations and Foreign Calls
          4.5. Foreign Data
          4.6. Providing Access to Foreign Procedures
          4.7. Using Other Foreign Languages
          4.8. C Library Routines
          4.9. Example: Socket Operations
    Chapter 5. Binding Forms
          5.1. Definitions
          5.2. Multiple-value Definitions
          5.3. Recursive Bindings
          5.4. Fluid Bindings
          5.5. Top-Level Bindings
    Chapter 6. Control Structures
          6.1. Conditionals
          6.2. Mapping and Folding
          6.3. Continuations
          6.4. Engines
    Chapter 7. Operations on Objects
          7.1. Missing R6RS Type Predicates
          7.2. Pairs and Lists
          7.3. Characters
          7.4. Strings
          7.5. Vectors
          7.6. Fixnum-Only Vectors
          7.7. Bytevectors
          7.8. Boxes
          7.9. Symbols
          7.10. Void
          7.11. Sorting
          7.12. Hashtables
          7.13. Record Types
          7.14. Record Equality and Hashing
          7.15. Legacy Record Types
          7.16. Procedures
    Chapter 8. Numeric Operations
          8.1. Numeric Type Predicates
          8.2. Fixnum Operations
          8.3. Flonum Operations
          8.4. Inexact Complex Operations
          8.5. Bitwise and Logical Operators
          8.6. Random Number Generation
          8.7. Miscellaneous Numeric Operations
    Chapter 9. Input/Output Operations
          9.1. Generic Ports
          9.2. File Options
          9.3. Transcoders
          9.4. Port Operations
          9.5. String Ports
          9.6. File Ports
          9.7. Custom Ports
          9.8. Input Operations
          9.9. Output Operations
          9.10. Input/Output Operations
          9.11. Non-Unicode Bytevector/String Conversions
          9.12. Pretty Printing
          9.13. Formatted Output
          9.14. Input/Output Control Operations
          9.15. Fasl Output
          9.16. File System Interface
          9.17. Generic Port Examples
    Chapter 10. Libraries and Top-level Programs
          10.1. Built-in Libraries
          10.2. Running Top-level Programs
          10.3. Library and Top-level Program Forms
          10.4. Standalone import and export forms
          10.5. Explicitly invoking libraries
          10.6. Library Parameters
          10.7. Library Inspection
    Chapter 11. Syntactic Extension and Modules
          11.1. Fluid Keyword Bindings
          11.2. Syntax-Rules Transformers
          11.3. Syntax-Case Transformers
          11.4. Compile-time Values and Properties
          11.5. Modules
          11.6. Standalone import and export forms
          11.7. Built-in Modules
          11.8. Meta Definitions
          11.9. Conditional expansion
          11.10. Aliases
          11.11. Annotations
          11.12. Source Tables
    Chapter 12. System Operations
          12.1. Exceptions
          12.2. Interrupts
          12.3. Environments
          12.4. Compilation, Evaluation, and Loading
          12.5. Source Directories and Files
          12.6. Compiler Controls
          12.7. Profiling
          12.8. Waiter Customization
          12.9. Transcript Files
          12.10. Times and Dates
          12.11. Timing and Statistics
          12.12. Cost Centers
          12.13. Parameters
          12.14. Virtual registers
          12.15. Environmental Queries and Settings
          12.16. Subset Modes
    Chapter 13. Storage Management
          13.1. Garbage Collection
          13.2. Weak Pairs, Ephemeron Pairs, and Guardians
          13.3. Locking Objects
    Chapter 14. Expression Editor
          14.1. Expression Editor Parameters
          14.2. Key Binding
          14.3. Editing Commands
          14.4. Creating New Editing Commands
    Chapter 15. Thread System
          15.1. Thread Creation
          15.2. Mutexes
          15.3. Conditions
          15.4. Locks
          15.5. Locked increment and decrement
          15.6. Reference counting with ftype guardians
          15.7. Thread Parameters
          15.8. Buffered I/O
          15.9. Example: Bounded Queues
    Chapter 16. Compatibility Features
          16.1. Hash Tables
          16.2. Extend-Syntax Macros
          16.3. Structures
          16.4. Compatibility File
    Bibliography
    Summary of Forms
    Index

Chez Scheme Version 9 User's Guide
Copyright © 2023 Cisco Systems, Inc.
Licensed under the Apache License Version 2.0 (full copyright notice.).
Revised August 2023 for Chez Scheme Version 9.6.0
about this book https://cisco.github.io/ChezScheme/csug9.6/canned/about.html


## command-line script
- [Chapter 2. Using Chez Scheme - 2.5. Scheme Shell Scripts](https://www.scheme.com/csug8/use.html#./use:h5)
- [Chapter 2. Using Chez Scheme - 2.5. Scheme Shell Scripts](https://cisco.github.io/ChezScheme/csug9.5/use.html#./use:h5)

the following script prints its command-line arguments.

    #! /usr/bin/scheme --script
    (for-each
      (lambda (x) (display x) (newline))
      (cdr (command-line)))

The following script implements the traditional Unix echo command.

    #! /usr/bin/scheme --script
    (let ([args (cdr (command-line))])
      (unless (null? args)
        (let-values ([(newline? args)
                      (if (equal? (car args) "-n")
                          (values #f (cdr args))
                          (values #t args))])
          (do ([args args (cdr args)] [sep "" " "])
              ((null? args))
            (printf "~a~a" sep (car args)))
          (when newline? (newline)))))

The --program command-line option is like --script except that the script file is treated as an RNRS top-level program (Chapter 10). The following RNRS top-level program implements the traditional Unix echo command, as with the script above.

    #! /usr/bin/scheme --program
    (import (rnrs))
    (let ([args (cdr (command-line))])
      (unless (null? args)
        (let-values ([(newline? args)
                      (if (equal? (car args) "-n")
                          (values #f (cdr args))
                          (values #t args))])
          (do ([args args (cdr args)] [sep "" " "])
              ((null? args))
            (display sep)
            (display (car args)))
          (when newline? (newline)))))


# ⚑ The Scheme Programming Language
https://scheme.com/tspl4/


The Scheme Programming Language

Fourth Edition

R. Kent Dybvig

Illustrations by Jean-Pierre Hébert

Table of Contents

    Preface
    Chapter 1. Introduction
          1.1. Scheme Syntax
          1.2. Scheme Naming Conventions
          1.3. Typographical and Notational Conventions
    Chapter 2. Getting Started
          2.1. Interacting with Scheme
          2.2. Simple Expressions
          2.3. Evaluating Scheme Expressions
          2.4. Variables and Let Expressions
          2.5. Lambda Expressions
          2.6. Top-Level Definitions
          2.7. Conditional Expressions
          2.8. Simple Recursion
          2.9. Assignment
    Chapter 3. Going Further
          3.1. Syntactic Extension
          3.2. More Recursion
          3.3. Continuations
          3.4. Continuation Passing Style
          3.5. Internal Definitions
          3.6. Libraries
    Chapter 4. Procedures and Variable Bindings
          4.1. Variable References
          4.2. Lambda
          4.3. Case-Lambda
          4.4. Local Binding
          4.5. Multiple Values
          4.6. Variable Definitions
          4.7. Assignment
    Chapter 5. Control Operations
          5.1. Procedure Application
          5.2. Sequencing
          5.3. Conditionals
          5.4. Recursion and Iteration
          5.5. Mapping and Folding
          5.6. Continuations
          5.7. Delayed Evaluation
          5.8. Multiple Values
          5.9. Eval
    Chapter 6. Operations on Objects
          6.1. Constants and Quotation
          6.2. Generic Equivalence and Type Predicates
          6.3. Lists and Pairs
          6.4. Numbers
          6.5. Fixnums
          6.6. Flonums
          6.7. Characters
          6.8. Strings
          6.9. Vectors
          6.10. Bytevectors
          6.11. Symbols
          6.12. Booleans
          6.13. Hashtables
          6.14. Enumerations
    Chapter 7. Input and Output
          7.1. Transcoders
          7.2. Opening Files
          7.3. Standard Ports
          7.4. String and Bytevector Ports
          7.5. Opening Custom Ports
          7.6. Port Operations
          7.7. Input Operations
          7.8. Output Operations
          7.9. Convenience I/O
          7.10. Filesystem Operations
          7.11. Bytevector/String Conversions
    Chapter 8. Syntactic Extension
          8.1. Keyword Bindings
          8.2. Syntax-Rules Transformers
          8.3. Syntax-Case Transformers
          8.4. Examples
    Chapter 9. Records
          9.1. Defining Records
          9.2. Procedural Interface
          9.3. Inspection
    Chapter 10. Libraries and Top-Level Programs
          10.1. Standard Libraries
          10.2. Defining New Libraries
          10.3. Top-Level Programs
          10.4. Examples
    Chapter 11. Exceptions and Conditions
          11.1. Raising and Handling Exceptions
          11.2. Defining Condition Types
          11.3. Standard Condition Types
    Chapter 12. Extended Examples
          12.1. Matrix and Vector Multiplication
          12.2. Sorting
          12.3. A Set Constructor
          12.4. Word Frequency Counting
          12.5. Scheme Printer
          12.6. Formatted Output
          12.7. A Meta-Circular Interpreter for Scheme
          12.8. Defining Abstract Objects
          12.9. Fast Fourier Transform
          12.10. A Unification Algorithm
      12.11. Multitasking with Engines
    References
    Answers to Selected Exercises
    Formal Syntax
    Summary of Forms
    Index

R. Kent Dybvig / The Scheme Programming Language, Fourth Edition
Copyright © 2009 The MIT Press. Electronically reproduced by permission.
Illustrations © 2009 Jean-Pierre Hébert
ISBN 978-0-262-51298-5 / LOC QA76.73.S34D93
to order this book / about this book

http://www.scheme.com

