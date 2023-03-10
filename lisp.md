
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

2018年8月23日13:28:02

最近手上的任务有点受阻，去找写《On Lisp》的大牛Paul Graham 的书《Hackers & Painters》来看看

Windows下搭建 Clisp 环境，首先是去网上下载Clisp安装文件，在 Clisp 官方网站可以下载

    http://www.clisp.org/

右侧栏 Get CLISP 中找到 Our official distribution sites，这里提供了FTP地址，也可以直接点击下面的链接在sourceforge下载：

https://sourceforge.net/project/platformdownload.php?group_id=1355&sel_platform=8418

ANSI Common Lisp https://acl.readthedocs.io/en/latest/

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

人可以通过实践来学习一件事，这对于 Lisp 来说特别有效，因为 Lisp 是一门交互式的语言。任何 Lisp 系统都含有一个交互式的前端，叫做顶层(toplevel)。一个最简单的 Lisp 表达式是整数，系统会打印出它的值，接着打印出另一个提示符，告诉你它在等待更多的输入。

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


## 求值 (Evaluation) & 保护 (quote)

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


## 中断循环（break loop）

如果你试着输入 Lisp 不能理解的东西，它会打印一个错误讯息，接着带你到一种叫做中断循环（break loop）的顶层。 中断循环给予有经验的程序员一个机会，来找出错误的原因，不过最初你只会想知道如何从中断循环中跳出。 如何返回顶层取决于你所使用的 Common Lisp 实现。在这个假定的实现环境中，输入 :abort 跳出：

   > (/ 1 0)
   Error: Division by zero
         Options: :abort, :backtrace
   >> :abort

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

## if 条件判断 & 空值与逻辑

在 Common Lisp 里有两种方法来表示空列表。你可以用一对不包括任何东西的括号来表示，或用符号 nil 来表示空表。

你不需要引用 nil （但引用也无妨），因为和t一样 nil 是对自身求值的。

nil 同时也表示逻辑假，和真值 t 相对应。
(null nil) 返回 t，null 函数运算列表是否为空。
(not nil)，返回 t，not 函数运算逻辑是否为假。

   > (if 0 (+ 1) (+ 2) )
   1
   > (if 1 (+ 1) (+ 2))
   1
   > (if nil (+ 1) (+ 2))
   2
   > (if () (+ 1) (+ 2))
   2

   > (if 't (+ 1) (+ 2))
   1
   > (if 'T (+ 1) (+ 2))
   1
   > (if T (+ 1) (+ 2))
   1
   > (if '(T) (+ 1) (+ 2))
   1
   > (if (not 'T) (+ 1) (+ 2))
   2
   > (if (not T) (+ 1) (+ 2))
   2

   > ( null () )
   T
   > ( null nil )
   T
   > ( null t )
   NIL

   > ( not () )
   T
   > ( not nil )
   T
   > ( not T )
   NIL

   > ( null (not T) )
   T
   > ( null (not nil) )
   NIL
   > ( null (not (not T)) )
   NIL
   > ( null (not (not ())) )
   T

## Recursive Function
- https://www.kancloud.cn/kancloud/yast-cn/64468

用于计算阶乘的fact函数

    (define (fact n)
      (if (= n 1)
          1
          (* n (fact (- n 1)))))

(fact 5)的计算过程如下：

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

普通的递归调用并不高效因为它既浪费存储空间又具有函数调用开销。与之相反，尾递归函数包含了计算结果，当计算结束时直接将其返回。特别地，由于 Scheme 规范要求尾递归调用转化为循环，因此尾递归调用就不存在函数调用开销。

fact 函数的尾递归版本 fact-tail

    (define (fact-tail n)
      (fact-rec n n))

    (define (fact-rec n p)
      (if (= n 1)
          p
          (let ((m (- n 1)))
        (fact-rec m (* p m)))))

fact-tail 计算阶乘的过程像这样：

    (fact-tail 5)
    ⇒ (fact-rec 5 5)
    ⇒ (fact-rec 4 20)
    ⇒ (fact-rec 3 60)
    ⇒ (fact-rec 2 120)
    ⇒ (fact-rec 1 120)
    ⇒ 120

## printf 打印函数

    (printf "~a" 15) ; 打印十进制 15
    (printf "~b" 15) ; 打印二进制 1111

## assembly-output 汇编代码输出

使用 Chez Scheme 一个未文档化的 API，可以查看你的代码被编译成了怎样的汇编代码：

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

# ⚑ Chez Scheme Version 9 User’s Guide
- [Chez Scheme Version 9 User's Guide](https://cisco.github.io/ChezScheme/csug9.5/index.html)
- [Chez Scheme Version 8 User's Guide R. Kent Dybvig](https://www.scheme.com/csug8/index.html)

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

