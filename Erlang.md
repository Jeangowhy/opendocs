
# 🚩 Erlang Introduction
- [上帝说：要有一门面向未来的语言，于是有了 erlang](https://zhuanlan.zhihu.com/p/26341437)
- [Erlang 官方文档](http://www.erlang.org/doc/)
- [高可用微服务](https://juejin.im/post/5d3a7b966fb9a07f00532110)
- [为啥 Erlang 没有像 Go、Scala 语言那样崛起？](https://www.zhihu.com/question/38032439/answer/84176970)
- [一位 Erlang 程序员的自白](https://www.cnblogs.com/xuan52rock/p/4597300.html)
- [Learn you some erlang](https://learnyousomeerlang.com/content)
- [Sublime Erlang Plugin](https://github.com/fjl/Sublime-Erlang)
- [游戏服务器难在哪？](https://wudaijun.com/2019/02/gs-difficulty/)
- [《面对软件错误构建可靠的分布式系统》](http://www.kaiyuanba.cn/content/other/erlang.pdf)
- [Making reliabledistributed systemsin the presence ofsodware errors](http://erlang.org/download/armstrong_thesis_2003.pdf)
- [Erlang Movie](https://www.bilibili.com/video/av24778289/)
- [Elixir Introduction](https://elixir-lang.org/getting-started/introduction.html)
- [Erlang/Opt In Action](https://www.manning.com/books/erlang-and-otp-in-action)

Erlang 最初是爱立信为开发电信相关产品而产生，即 OTP - Open Telecom Platform 缩写，Erlang 开源前这个名字多少还有点品牌效应。

无论 Erlang 还是 OTP 都早已不再局限于电信应用：更贴切的名字应该是“并发系统平台”。

Erlang 是一种面向并发 Concurrency Oriented，面向消息 Message Oriented 的函数式 Functional 编程语言。

Erlang 应用场景

- 分布式产品，网络服务器，客户端，等各种应用环境。
- Erlang 也可以作为一种快速开发语言，进行原型开发。
- 应用需要处理大量并发活动。
- 需要良好的软件或硬件 fault-tolerant 容错能力。
- 软件产品需要在多服务器中具有良好的伸缩能力，而不必大改动。
- 容易实现不中断服务进行升级过程，如游戏服务器。
- 软件需要在严格的时间片响应用户，如游戏服务器。

我学了两天两夜的二郎，学它备用，游戏服务端开发非常有用！如果低延迟对你的应用来说很重要，那么平心而论，不选 Erlang 反而显得很奇怪了。

游戏服务器是后端，做后端的，每天耳濡目染横向扩展，自动伸缩等炫酷的特性，要说放在以前，这些特性还是巨头的”专利”，我们想要自己实现这些东西挑战性是比较大的，但近几年有了容器生态如 k8s 的加持，只要你实现了一个无状态应用，你几乎马上就可以得到一个可伸缩的集群，享受无状态本身带来的各种好处，机器挂了自动重启，性能不够了就自动扩展等等。而作为一名游戏服务器开发者，自然也想充分享受容器时代的红利。


面向并发说明 Erlang 支持大规模的并发应用，我们可以在应用中处理成千上万的并发，而不相互影响。面向消息，其实是为并发服务！我们应该都熟悉多线程，熟悉加锁解锁操作，熟悉可能出现的资源竞争与死锁。在 Erlang 的世界里，我们可以将轻轻的抹去这些令人苦恼的词汇。Erlang 的世界，每个处理都是独立的个体，他们之间的交互仅仅靠消息！因此不会有死锁，不会有那种痛苦的编程经历。

Erlang 中一个非常重要的名词 `Process`，也就是我们前面提到的个体。它不是我们操作系统中的进程，也不是线程。它是 Erlang 提供给我们的超级轻量的进程。为了适应大规模并发的特性，Process 需要能够快速创建，快速销毁。Process 之间通信的唯一方法就是消息，我们只要知道一个 Process 的名字即 pid，就可以向其发送消息。Process 也可以在任何时候，接收消息。我们这样做只有一个目的：让我们的系统更加简单，用一种朴素的做法，实现一个高效的语言。

Erlang 是种函数式编程语言，对此我没有很深刻的理解，最明显的特征就是，Erlang 中到处都是函数，函数构成了我们的产品的主体，把这些函数放到一个个的 Process 中去，让他们运行起来，那么就组成了我们朝气蓬勃的产品。

Erlang 支持对数据的位操作，拥有丰富的数据持久化机制。

同时需要说明的是 Erlang 内建垃圾回收机制 GC。 Erlang 的 GC 机制跟 Java 相比，很重要的一点是，它是以进程为单位进行的，一般情况下，GC 搜索的根对象主要包括进程栈以及进程信箱中的对象。Erlang 系统中，GC 进行时，会挂起整个系统当前结点上的所以调度队列，也就是说是 STW- Stop the world 方式。但是，就算一个系统中有大量进程，总共占用几个 G 的内存，它的 GC 的延迟也会很低，这是因为每个进程可能只使用很小的内存（比如20K），所花费的时间很小，基本可以忽略不计。

在 Erlang 中可以通过 spawn_opt 来指定初始堆内存大小，如果这个数值足够大（需要诊断后确定），那么就可以完全避免GC。进程在销毁时，统一收回其所拥有的所有堆内存，而不需要进行GC，因为堆内存是每个进程私有的。

Erlang 中，堆内存被分成年轻代和年老代。进程在分配新数据时，会将数据放在年轻代中，分代的理论基础是大部分刚创建的对象会在不久的将来不再使用。只查看年轻代对象的 GC 称为 minor GC，查看所有堆内存对象的 GC 称为 major GC，因此 minor GC 比 major GC 更频繁，也更快。年轻代中的对象经过两到三次 minor GC 后，才会被拷贝到年老代。

关于 Minor GC 和 Major GC 的部分说明来源于 Characterizing the Scalability of Erlang VM on Many-core Processors。

作为 Erlang 创始人，瑞典 Joe Armstrong 在软件工程领域贡献是巨大的，不必说 Erlang 与 OTP， 光他的论文《面对软件错误构建可靠的分布式系统》就足以载入史册，领先现在几十年，提出了OOP 等思想本质上不是并发的正确处理方法。

2019年4月20日，Erlang 语言设计者 Joe Armstrong 去世，享年 68 岁。

1986 年，Joe Armstrong 和 Robert Virding、Mike Williams 在电信公司爱立信共同创造了应对大规模并发场景的编程语言 Erlang，这一语言起初是爱立信的私有语言，后于 1998 年开源。

Erlang 是一门相对小众的编程语言，这一点与 Lisp 很像 —— 小众但影响很大。Joe Armstrong 曾用一句话概括过 Erlang 的优点：一次编写，永远运行。

Joe Armstrong 在论文中是这样认为的：几乎所有传统的编程语言对真正的并发都缺乏有力的支持——本质上是顺序化的，而语言的并发性都仅仅由底层操作系统而不是语言提供。

而用对并发提供良好支持的语言，也就是作者说的`面向并发的语言` COL - Concurrency Oriented Language 来边写程序，则是相当容易的：

- 从真实世界的活动中识别出真正的并发活动
- 识别出并发活动之间的所有消息通道
- 写下能够在不同消息通道中流通的所有消息

其次，通过定下的九条原则性思想设计，写出来天然支持分布式系统的 Erlang 以及 OTP 框架，真的做到了他说的实现面向并发的语言。


> - everything is a process.
> - process are strongly isolated.
> - process creation and destruction is a lightweight operation.
> - message passing is the only way for processes to interact.
> - processes have unique names.
> - if you know the name of a process you can send it a message.
> - processes share no resources.
> - error handling is non-local.
> - processes do what they are supposed to do or fail.

- 一切皆进程
- 进程强隔离
- 进程的生成与销毁都是轻量的操作
- 消息传递是进程交互的唯一方式
- 每个进程有唯一的名字
- 你若知道进程的名字，就可以向他发消息
- 进程之间不共享资源
- 错误处理非本地化
- 进程要么正常跑着，要么马上挂掉

就以上九条的观念，设计出的 Erlang 语言，成就了可靠性达到 99.9999999% 的目前世界上最复杂的 ATM 交换机。

其三，let it crash 思想的提出与实现。

程序不可能处理一切错误，因此程序员只要力所能及的处理显然易见的错误就好了，而那些隐藏着的，非直觉性的错误，就让他崩掉吧——本来就很有可能是极少见的错误，经常出现的？就需要程序员人工处理了，这是紧急情况，就算 try catch 所有错误也无法避免，因为系统已经陷入崩溃边缘了，苟延残喘下去只是自欺欺人。并且，不恰当地使用 try catch 还会埋下隐患，让系统带病运转。

其四，一切进程都是轻量级的，都可以被监控 monitor，OTP 构架中的有 Supervisor 专门做监控。用一个 supervisor 进程去管理子进程，supervisor 会根据你设定的策略，来处理意外挂掉的子进程。这种情况的问题的是，错误处理稍微做不好就会挂，策略有：

- one_for_one：只重启挂掉的子进程
- one_for_all：有一个子进程挂了，重启所有子进程
- rest_for_one：一个子进行挂掉，该子进程和所有在其之后创建的子进程都会重启。


## 🍀 我们读过的 Erlang 论文
- 	https://www.cnblogs.com/me-sa/p/best_thing_i_met.html

我在Erlang Resources 豆瓣小站上发起了一个征集活动 [链接] ,"[征集] 我们读过的Erlang论文",希望大家来参加.发起这样一个活动的目的是因为Erlang相关的出版物很少,很多时候都是从学术论文中寻找答案,而发现合适的论文是第一步,这个活动就是为了解决这个问题.

在一个极小的知识点可能都会有一篇精彩的论文为你条分缕析,抽丝剥茧,甚至可以拼凑起来一个完整的Erlang知识系统,我们开始吧...


《面向软件错误构建可靠的分布式系统》
Making reliable distributed systems in the presence of sodware errors
地址:  http://pubftp0.availo.se/pub/FreeBSD/distfiles/erlang-doc/r13b01/armstrong_thesis_2003.pdf 
译文地址: http://man.lupaworld.com/content/other/erlang.pdf   
备注: 没有什么可说的,这篇论文几乎是Erlang入门必读,甚至在论文里面已经可以完成Erlang基础知识的学习;

Concurrent Programming in ERLANG
地址: http://www.erlang.org/download/erlang-book-part1.pdf 
备注: 教科书

Characterizing the Scalability of Erlang VM on Many-core Processors
地址: http://kth.diva-portal.org/smash/get/diva2:392243/FULLTEXT01 
备注: 估计是了解Erlang VM必读的一篇论文,在众多涉及Erlang VM实现的博客,论文里面到处可以看到这篇论文的身影;
摘要: This section will introduce the reader to Erlang and brieﬂy describe the Erlang compiler and virtual machine in order to give the reader some basic understanding of Erlang.

Exploring Alternative Memory Architectures for Erlang:Implementation and Performance Evaluation
地址: http://www.fantasi.se/publications/Wilhelmsson_MSc.pdf
备注: 文章介绍了Erlang VM垃圾回收和内存管理

Efﬁcient memory management for concurrent programs that use message passing I,II
地址: http://user.it.uu.se/~kostis/Papers/scp_mm.pdf 
备注: Erlang VM 内存管理 GC
 

Heap Architectures for Concurrent Languages using Message Passing
地址: http://www.fantasi.se/publications/ISMM02.pdf
摘要:We discuss alternative heap architectures for languages that rely on automatic memory management and implement concurrency through asynchronous message passing. We describe how interprocess communication and garbage collection happens in each architecture, and extensively discuss the tradeoﬀs that are involved. In an implementation setting (the Erlang/OTP system) where the rest of the runtime system is unchanged, we present a detailed experimental comparison between these architectures using both synthetic programs and large commercial products as benchmarks.
备注: 一句话总结这篇论文就是:当消息传递的时候本质上发生了什么

 

On Preserving Term Sharing in the Erlang Virtual Machine
地址: http://user.it.uu.se/~kostis/Papers/erlang12_sharing.pdf 
摘要:In this paper we describe our experiences and argue through examples why ﬂattening terms during copying is not a good idea for a language like Erlang. More importantly, we propose a sharing preserving copying mechanism for Erlang/OTP and describe a pub-licly available complete implementation of this mechanism. 

 

Bit-level Binaries and Generalized Comprehensions in Erlang
地址: http://user.it.uu.se/~pergu/papers/erlang05.pdf
备注: To further simplify programming on bit streams we then show how binary comprehensions can be introduced in the language and how binary and list comprehensions can be extended to allow both binary and list generators.


An introduction to Core Erlang
地址: http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=1C8691982F56D28905DAC4D731A386C7?doi=10.1.1.20.7146&rep=rep1&type=pdf
备注: 简单描述Core Erlang 和Erlang的关系,发展历史 从Erlang代码到Core Erlang代码中间经历的分析和转换过程中是怎样被大大简化的.
 
 
Programming Efﬁciently with Binaries and Bit Strings
地址: http://www.erlang.org/euc/07/papers/1700Gustafsson.pdf
摘要: This paper will describe the new additions to the language and show how they can be used efﬁciently given the new optimizations of binary pattern matching and binary construction. It also includes some performance numbers to give an idea of the gains that can be made with the new optimizations.
备注:Erlang Efficiency Guide告诉你How,这篇论文告诉你Why
 
Programming Distributed Erlang Applications:Pitfalls and Recipes
编写分布式的 Erlang 程序：陷阱和对策
地址: http://man.lupaworld.com/content/develop/p37-svensson.pdf 
译文地址:  http://www.kaiyuanba.cn/content/develop/p37-svensson-cn.pdf 
备注:   基本消息传递保障-流语义 跨节点编程陷阱 Pid重复 消息顺序
 
Parameterized modules in Erlang
地址: http://ftp.se.postgresql.org/pub/lang/erlang/workshop/2003/paper/p29-carlsson.pdf
备注: 这个已经成为传说,在最新版Erlang中需要通过插件项目使用此特性
 
Design Patterns for Simulations in Erlang/OTP
地址: http://ftp.nsysu.edu.tw/FreeBSD/ports/local-distfiles/olgeni/master_thesis_patterns.pdf
备注: 不感兴趣的部分就大段大段的跳过吧,这篇论文讲到了 The implemented behaviours
 
Extended Process Registry for Erlang 
地址: http://svn.ulf.wiger.net/gproc/doc/erlang07-wiger.pdf   
地址: http://www.erlang.se/workshop/2007/proceedings/02wiger.pdf
备注: gproc: Extended Process Registry 这个应该有不少人在实践了
 
Troubleshooting a Large Erlang System
地址: http://www.erlang.se/workshop/2004/cronqvist.pdf
备注: 串讲了OTP排错工具集如何使用 
 
Static Detection of Race Conditions in Erlang
地址: http://www.it.uu.se/research/group/hipe/dialyzer/publications/races.pdf
摘要: We address the problem of detecting some commonly occurring kinds of race conditions in Erlang programs using static analysis.

Erlang’s Exception Handling Revisited
地址: http://www.erlang.se/workshop/2004/exception.pdf 
摘要:  We give a comprehensive description of the behaviour of exceptions in modern-day Erlang , present a theoretical model of the semantics of exceptions, and use this to derive the new try-construct.

Cleaning up Erlang Code is a Dirty Job but Somebody’s Gotta Do It
地址: http://users.ece.cmu.edu/~aavgerin/papers/Erlang09.pdf 
备注: 看这篇论文我们都不一定要用这个代码自动优化工具,更有价值的是问How & Why

Build Your Next Web Application with Erlang
地址: http://www.kth.se/polopoly_fs/1.162674!/Menu/general/column-content/attachment/ieee.pdf 
备注: 有O'记那本小册子,这篇论文不读也罢
 
A Study of Erlang ETS Table Implementations and Performance
地址: http://www.erlang.org/workshop/2003/paper/p43-fritchie.pdf 
摘要: The viability of implementing an in-memory database, Erlang ETS, using a relatively-new data structure, called a Judy array, was studied by comparing the performance of ETS tables based on four data structures: AVL balanced binary trees, B-trees, resizable linear hash tables, and Judy arrays. 
 
 
A Stream Library using Erlang Binaries
地址: http://www.duomark.com/erlang/publications/acm2005.pdf
摘要: This paper introduces the memory and behavior characteristics of lists, tuples and binaries in erlang, then continues with a description of the Bit syntax and standard methods of using binaries to deal with streamed data. Next it introduces BIF functions that are shown to be much faster than using the traditional Bit syntax to manipulate binary data.


A Scalability Benchmark Suite for Erlang/OTP
地址: http://www.softlab.ntua.gr/~gtsiour/files/erlang01-aronis.pdf 
摘要: This paper presents the main aspects of the design and the current status of bencherl, a publicly available scalability benchmark suite for applications written in Erlang. 

All you wanted to know about the HiPE compiler (but might have been afraid to ask)
地址: http://user.it.uu.se/~pergu/papers/erlang03.pdf 
备注:几乎解答了HIPE的所有常见问题
 
No more need for records
地址: http://www.cs.otago.ac.nz/staffpriv/ok/frames.pdf 
备注:Maps结构的缘起 设计上的取舍部分很有意思



## 🍀 Erlang 语言特性

1. 简单小巧

Erlang 简单小巧只有 6 种基本的数据类型，另外提供几种复合结构，这就是 Erlang 的所有数据类型。

- `Atom`
- `bitstring`
- `Number` (`float`, `integer`)
- `List`
- `Maps`
- `Tuple`
- `Reference`
- `Fun`
- `Port`
- `Pid`
- `String`
- `Record`
- `Boolean`

在 Erlang 中表示任何类型的数据都叫做 `Terms`，它是源代码中的基本数据类型。而常见的 `string` 在 Erlang 中是以位串 `bitstring` 或 `List` 表达的。没有 Boolean 类型，使用 atoms 原子类型的 true & false 替代。


2. 模式匹配

在 Erlang 的函数中，= 号不是赋值，而是模式匹配，某些语法中，如 C# 8.0 也可以使用 Pattern 匹配，这是一个非常好的特性，我们可以让代码自己去决定如何执行。

比如，我们定义一个函数，其告诉我们某种水果的价格:

	price(apple) -> 2.0;
	price(banana) -> 1.2.

我们随后调用 `price(Fruit)`，会根据 Fruit 变量的内容返回具体的价格。这样做的好处就是节省了我们的代码量，我们不用 if...else… 或者 switch…case 的来伺候了。也便于代码的扩展：加一个新的水果品种，我们只需要加一行就可以了。

学习 Erlang 一个非常重要的内容就是`模式匹配`，但是请不要混淆，这个匹配和正则表达式没有任何干系。

3. 变量单次赋值

一个匪夷所思的特性，变量竟然只能`单次赋值`！是的 Erlang 中变量一旦绑定某个数值以后，就不能再次绑定，这样做的好处是便于调试出错，更深层次的原因是 Erlang 为并发设计，如果变量可以修改，那么就涉及到资源的加锁解锁等问题，当发生错误时，某个变量是什么就永远是什么，不用顺藤摸瓜的查找谁修改过它，省了好多事情。唯一的麻烦就是需要一个信的变量时，你必须再为它想一个名字。

4. Erlang 中提供丰富的 libs

- `stdlib` 中包含大量的数据结构如 lists，array，dict，gb_sets，gb_trees，ets，dets 等
- `mnesia` 提供一个分布式的数据库系统
- `inets` 提供 ftp client，http client/server，tftp client/server
- `crypto` 提供加密解密相关函数，基于 openssl 相关实现
- `ssl` 实现加密socket通信，基于openssl实现
- `ssh` 实现ssh协议
- `xmerl` 实现XML相关解析
- `snmp` 实现SNMP协议（Simple Network Management Protocol）
- `observer` 用来分析与追踪分布式应用
- `odbc` 使 Erlang 可以连接基于SQL的数据库
- `orber` 实现 CORBA 对象请求代理服务
- `os_mon` 提供对操作系统的监控功能
- `dialyzer` 提供一个静态的代码或程序分析工具
- `edoc` 依据源文件生成文档
- `gs` 可以为我们提供某些 GUI 的功能（基于Tcl/Tk）

还有很多朋友提供了一些开源的lib，比如eunit，用来进行单元测试。

5. 灵活多样的错误处理

Erlang 最初为电信产品的开发，这样的目的，决定了其对错误处理的严格要求。Erlang 中提供一般语言所提供的 exception，catch，try…catch 等语法，同时 Erlang 支持 `Link` 和 `Monitor` 两种机制，我们可以将 Process 连接起来，让他们组成一个整体，某个 Process 出错，或退出时，其他 Process 都具有得知其推出的能力。而 Monitor 顾名思义，可以用来监控某个 Process，判断其是否退出或出错。所有的这些 Erlang 都提供内在支持，我们快速的开发坚固的产品，不再是奢望。

6. 代码热替换

你的产品想不间断的更新么？Erlang 可以满足你这个需求，Erlang 会在运行时自动将旧的模块进行替换。一切都静悄悄。

7. 天生的分布式

Erlang 天生适合分布式应用开发，其很多的 BIF 内建函数都具有分布式版本，我们可以通过 BIF 在远程机器上创建 Process，可以向远程机器上的某个 Process 发送消息。在分布式应用的开发中，我们可以像 C、C＋＋，Java 等语言一样，通过 Socket 进行通讯，也可以使用 Erlang 内嵌的基于 Cookie 的分布式架构，进行开发。当然也可以两者混合。分布式开发更加方便，快速。Erlang 的 Process 的操作，Error 的处理等都对支持分布式操作。

8. 超强的并发性

由于采用其自身 Process，而没有采用操作系统的进程和线程，我们可以创建大规模的并发处理，同时还简化了我们的编程复杂度。我们可以通过几十行代码实现一个并发的TCP服务器，这在其他语言中都想都不敢想！

9. 多核支持

Erlang让您的应用支持多个处理器，您不需要为不同的硬件系统做不同的开发。采用Erlang将最大限度的发挥你的机器性能。

10. 跨平台

如同JAVA一样，Erlang 支持跨平台（其目前支持linux，mac，windows等19种平台），不用为代码的移植而头疼。

我们仅仅需要了解平台的一些特性，对运行时进行优化。

11. 开源

开源是我非常喜欢的一个词汇，开源意味这更加强壮，更加公开，更加的追求平等。开源会让 Erlang 更好。


## 🍀 Erlang 与外界的交互

Erlang 可以与其他的语言进行交互，如 C、C++，Java。当然也有热心的朋友提供了与其他语言的交互，如果需要你也可以根据 Erlang 的数据格式，提供一个库，让 Erang 与您心爱的语言交互。

Erlang 支持分布式开发，您可以创建一个 C Node，其如同一个 Erlang 节点，前提是你遵照 Erlang 的规范。

当然最常用的交互还是再同一个 Node 上，比如我们要调用某个 lib，调用一些系统提供的功能，这时候主要有两种方式：Port 和嵌入式执行。

Port 是 Erlang 最基本的与外界交互的方式，进行交互的双方通过编码，解码，将信息以字节流的方式进行传递。（具体这个通道的实现方式，根据操作系统的不同而不同，比如 Unix 环境下，采用 PIP E实现，理论上任何支持对应 Port 通道实现的语言都可以与 Erlang 进行交互）。Erlang 为了方便 C 和 JAVA 程序员，提供了 Erl_Interface 和 Jinterface。

采用 Port，您的代码在 Erlang 的平台之外运行，其崩溃不会影响 Erlang。

嵌入式执行，通过 Erlang 平台加载，因此这是非常危险的，如果您的程序崩溃，没有任何理由，Erlang 也会崩溃。


## 🍀 Erlang 批评者


曾经使用过一段时间 Erlang，结论是：方便的地方真的方便，但麻烦的地方真的很麻烦。最终放弃 Erlang 并不是因为社区，文档，或者开源项目的多少，而是因为语言本身。首先是状态问题，比如要在 Erlang 中操作二维地图，很多人都选择用C来实现：Erlang 如何操作游戏中的二维地图？ 

游戏引擎 Erlang 写无状态的代码是非常的爽的，代码就像一个个数学公式把程序给 “定义” 出来，模式匹配有时也很高效。确实很适合电信系统这种请求与请求间隔离的，前后逻辑关系不大的“非状态系统”，比如 HTTP，比如棋牌或者回合制游戏。但两个请求间如果逻辑交互很频繁，比如动作游戏，ARPG，两个角色间的交互频繁了，牵扯装太多了，用 Erlang就比较麻烦了，别人一个函数调用解决的问题，Erlang可能要几个actor之间不停的消息中转。

Erlang是一个专业化定制程度很高的语言（非状态类电信系统，请求隔离），所以不能因为 Erlang 在有的地方比其他语言开发效率高8倍（尽管似乎号称），就觉得 Erlang在任何时候开发效率都很高，比如你在 .BAT 文件里面可以这样：

	DEL d:\temp\*.jpg 

换成 C++ 可能要写7，8行，大家就觉得 .BAT比 C++方便一样。处理文件和目录或许是，但你说用BAT写点除此之外别的东西，它就傻逼了，Erlang 也是一样，方便的地方挺方便，别扭的地方别扭死你，关键还是 Scala 和 Go 的设计充满了“妥协”，而 Erlang 里充满了 “各种原则”。在适合的领域，这些原则能让你很酸爽，而跳出那个圆圈，这些 “绝不妥协的原则” 会让你花数倍的时间和精力去完成原本很直接的事情。

1. Erlang陡峭的学习曲线

大多数情况下，学一门新语言，大部分基本概念都可以靠其他语言的经验快速理解，比如你如果学过 C，再学 Java 不是什么难事。但是 erlang 正相反，你要先设法忘掉其他语言的一些概念，比如变量这个概念，在 erlang 中是不存在的。这些概念是如此地根深蒂固，让我很难 think in erlang，以至于读完一本 erlang 的教程，我仍然写不出来斐波那契数列的程序.

2. 这门语言没有什么 killer app

每一种流行的语言都一定有用这种语言实现的、应用广泛的系统，以及由此衍生的庞大社区。社区中的布道者会把这个语言推向更多的应用场景。比如 php 的 wordpress、druple，python 的 web 框架 Django，用于机器学习的 sklearn。但是对于 erlang，除了 rabbitmq，jabber，似乎没有太多 killer app。



# 🚩 Erlang LSP
https://erlang-ls.github.io/

Sublime 上编写 Erlang 程序，只需配置以下 build system 配置文件，将文件保存到 `Packages\User\erlang.sublime-build`，就可以使用菜单运行 source.erlang 代码文件：

```json
	{
		"env": {
			"path":"c:\\Program Files\\erl10.4\\bin;%path%"
		},
		"working_dir": "$file_path",
		"cmd": "escript.exe $file",
		// hello.erl:2: function perms/2 undefined
		"file_regex":"^(..[^:]+):([0-9]+): (.*)",
		"selector": "source.erlang",
		"encoding": "cp936",
		"quiet": true,
		"variants": [{
			"name": "Run ...",
			"shell_cmd": "erlc $file_name && erl -noshell -s $file_base_name start -s init stop"
		}]
	}   
```

Erlang OTP 23 开始在 erl shell 中集成在线帮助文档同时完善了 TAB 自动完成功能，比如 `h(lists).` 就可以查询列表模块的文档。

安装 Sublime Text 语言服务插件获取智能代码提示，erlang-ls 插件本身使用 Erlang 开发，可以直接下载源代码编译安装。需要注意，它本身依赖了几个代码仓库，在构建时会自动克隆到 build 目录下，或者插件或是依赖库，根据 rebar.config 或者 rebar.lock 配置指示，可以插件下载到指定目录。国内网络访问不了 git 服务器，可以使用 git@github.com 以 SSH 协议尝试访问：

```sh
git clone --depth=1 git@github.com:erlang-ls/erlang_ls

git clone --depth=1 git@github.com:gomoripeti/erlfmt.git _build/default/lib/erlfmt
git clone --depth=1 git@github.com:gomoripeti/erlfmt.git _build/default/lib/erlfmt
git clone --depth=1 git@github.com:erlang-ls/rebar3_bsp.git _build/default/plugins/rebar3_bsp

cd erlang_ls
make clean
make
# rebar3 escriptize
# This will create an Erlang escript in:
# _build/default/bin/erlang_ls
```

构建脚本 Makefile 中的命令 `rebar3 as dap escriptize` 表示构建包含 Debug Adapter Protocol (DAP) 调试信息的输出。

1. https://github.com/erlang-ls/erlang_ls/releases/download/0.48.1/els_dap-win32.tar.gz
2. https://github.com/erlang-ls/erlang_ls/releases/download/0.48.1/erlang_ls-win32.tar.gz
3. https://microsoft.github.io/debug-adapter-protocol/

0. https://lsp.sublimetext.io/language_servers/#erlang
1. https://github.com/sublimelsp/LSP-elixir
2. https://github.com/erlang-ls/erlang_ls
3. https://erlang-ls.github.io/

执行构建命令后，会生成 erlang_ls 脚本，这就是 LSP 服务入口程序。这是一个 escript 脚本，Windows 系统下配置 command 时需要前缀 escript.exe 命令去执行它。插件官方发布的 0.48.1 版本还会在 Windows 10 平台下引发 main 入口函数未定义问题，生成的文件有问题。

	escript erlang_ls --version  
	escript: exception error: undefined function erlang_ls:main/1 
	  in function  escript:run/2 (escript.erl, line 758)          
	  in call from escript:start/1 (escript.erl, line 277)        
	  in call from init:start_em/1 (init.erl, line 1109)          
	  in call from init:do_boot/3 (init.erl, line 817) 

源代码构建也会产生错误面终止，Gradualizer 模块代码中调用函数时可能少传了参数，可以添加一个 utf8 默认值。另一处问题是定义了未使用的函数 eep48_docs，将其相关代码行注解即可：

	_build/default/lib/gradualizer/src/rebar_prv_gradualizer.erl:147: function binary_to_atom/1 undefined

	apps/els_lsp/src/els_docs.erl:293: function eep48_docs/4 is unused 

Rebar3 在 Windows 10 执行编译不顺利，根据以上修改后成功编译，并自动创建一个 `erlang_ls.cmd` 即可执行相应的 rebar3 脚本，Linux 系统则会自动处理：

	@echo off
	setlocal
	set rebarscript=%~f0
	escript.exe "%rebarscript:.cmd=%" %*

这段脚本的意思是，将命令行的脚本名保存到 rebarscript 变量中，然后 `"%rebarscript:.cmd=%"` 表示将其中的 `.cmd` 扩展名删除，而 `%*` 表示命令行中传入的所有参数，然后使用 escript 执行它。

比如，如下查看版本命令，执行的是 erlang_ls.cmd，就会调用 escript 执行 erlang_ls 这个编译好的脚本文件。

```sh
.\_build\default\bin\erlang_ls.cmd --version
Version: 0.48.1+build.1929.refa4a1200
```

Install the Erlang Language Server.
Open Preferences > Package Settings > LSP > Settings and add the "erlang-ls" client configuration to the "clients":

```json
{
  "clients":
    {
      "erlang-ls":
        {
          "command"   : [ "path/to/erlang_ls", "--transport", "stdio" ],
          "command"   : [ "escript", "path/to/erlang_ls", "--transport", "stdio" ],
          "enabled"   : true,
          "languageId": "erlang",
          "scopes"    : [ "source.erlang" ],
          "syntaxes"  : ["Packages/Erlang/Erlang.sublime-syntax"]
        }
    },
  // Allow up to 30 secs to `erlang_ls` to respond to `initialize`
  // (it requires less, but just to be on the safe side)
  "initialize_timeout": 30
}
```

注意，以下 otp_path 路径配置只需要指定到 OTP 根目录，即包含 lib 子目录的安装目录。

The erlang_ls.config file should be placed in the root directory of a given project to store the configuration for that project.

A sample erlang_ls.config file would look like the following:

```yaml
otp_path: "/path/to/otp"
deps_dirs:
  - "lib/*"
diagnostics:
  enabled:
    - crossref
  disabled:
    - dialyzer
include_dirs:
  - "include"
  - "_build/default/lib"
lenses:
  enabled:
    - ct-run-test
  disabled:
    - show-behaviour-usages
macros:
  - name: DEFINED_WITH_VALUE
    value: 42
  - name: DEFINED_WITHOUT_VALUE
code_reload:
  node: node@example
providers:
  enabled:
    - signature-help
```


# 🚩 Getting Started
- [Erlang Reference Manual User's Guide](https://erlang.org/doc/reference_manual/users_guide.html)
- [Erlang 官方文档](http://erlang.org/documentation/doc-5.2/doc/getting_started/getting_started.html)
- [Programming Erlang 第6章笔记 编译和运行](http://gashero.yeax.com/?p=52)
- [Erlang 系统运行](https://erlang.org/doc/system_principles/system_principles.html)
- [Codes in Programming Erlang](https://github.com/everpeace/programming-erlang-code)
- [Learn You some Erlang for Great Good!](https://learnyousomeerlang.com/starting-out-for-real)
- http://erlang.org/documentation/doc-5.2/doc/getting_started/getting_started.html

Erlang 官方文档提供以下两大类内容，用户手册 [User's Guide] 是主要的指导参考资料，参考手册 [Reference Manual] 则是整个系统和种模块的细节手册，根据不同的内容特点分成多个部分：

- System Documentation [User's Guide]

	- Installation Guide
	- System Principles
	- Embedded System
	- Getting Started
	- Erlang Reference Manual
	- Programming Examples
	- Efficiency Guide
	- Interoperability Tutorial
	- Design Principles
	- OAM Principles

- Application Groups [Reference Manual]

	- Basic
	- Database
	- Operation & Maintenance
	- Interface and Communication
	- Tools
	- Test
	- Documentation
	- Miscellaneous

其中 OTP Design Principles User's Guide 这部分是开发 Erlang 程序的核心理念，主要涉及 Supervision Tree 监督树框架的各个部分。

Application 分组下的 Basic 包含最核心的几个模块的文档，这几个文档分类下包含的内容极其基础又极其重要。其中 erts 即 Erlang 的运行时，在安装目录下使用独立的子目录保存源文件，比如 erts-10.4：

1. compiler 7.4	- A byte code compiler for Erlang which produces highly compact code
2. erts 10.4	- Functionality necessary to run the Erlang System itself
3. kernel 6.4	- Functionality necessary to run the Erlang System itself
4. sasl 3.4	- The System Architecture Support Libraries is a set of tools for release upgrades and alarm handling etc.
5. stdlib 3.9	- The Erlang standard libraries


另外，还提供参考书籍 Erlang books：

- Programming Erlang: Software for a Concurrent World
- Learn You Some Erlang for Great Good!
- Erlang Programming
- Erlang and OTP in Action
- Introducing Erlang
- Designing for Scalability with Erlang/OTP

可以直接从 Erlang Reference Manual 开始从零学习，或者跟随 Erlang 实践 Erlang and OTP in Action。

当然，这里有 Frederic 制作的免费的电子书 Learn You Some Erlang for Great Good!

## 🍀 erl shell
1. https://www.erlang.org/doc/man/erl
2. https://www.erlang.org/doc/man/erlc

安装 Erlang 后，需要将 Erlang 的 bin 目录加入环境变量 Path 之中。

Erlang/OTP 文件类型:

| Extension	| File Type		| Documented in |
| :--------	| :--------	| :--------	|
| .erl		| Module		| Erlang Reference Manual |
| .hrl		| Include file	| Erlang Reference Manual |
| .rel		| Release resource file	| rel(4) manual page in SASL |
| .app		| Application resource file	| app(4) manual page in Kernel |
| .script		| Boot script	| script(4) manual page in SASL |
| .boot		| Binary boot script	| - |
| .config		| Configuration file	| config(4) manual page in Kernel |
| .appup		| Application upgrade file	| appup(4) manual page in SASL |
| relup		| Release upgrade file	| relup(4) manual page in SASL |


安装 Erlang 后，执行 erl 命令进入 Erlang shell 交互界面，可以键入 `help().` 来获取相关的 shell 命令信息，注意加句点表示执行。

以下罗列可能会用到的 shell 函数或编译命令：

	1> help().
	** shell internal commands **
	b()        -- display all variable bindings
	e(N)       -- repeat the expression in query <N>
	f()        -- forget all variable bindings
	f(X)       -- forget the binding of variable X
	h()        -- history
	history(N) -- set how many previous commands to keep
	results(N) -- set how many previous command results to keep
	catch_exception(B) -- how exceptions are handled
	v(N)       -- use the value of query <N>
	rd(R,D)    -- define a record
	rf()       -- remove all record information
	rf(R)      -- remove record information about R
	rl()       -- display all record information
	rl(R)      -- display record information about R
	rp(Term)   -- display Term using the shell's record information
	rr(File)   -- read record information from File (wildcards allowed)
	rr(F,R)    -- read selected record information from file(s)
	rr(F,R,O)  -- read selected record information with options
	** commands in module c **
	bt(Pid)    -- stack backtrace for a process
	c(Mod)     -- compile and load module or file <Mod>
	cd(Dir)    -- change working directory
	flush()    -- flush any messages sent to the shell
	help()     -- help info
	i()        -- information about the system
	ni()       -- information about the networked system
	i(X,Y,Z)   -- information about pid <X,Y,Z>
	l(Module)  -- load or reload module
	lm()       -- load all modified modules
	lc([File]) -- compile a list of Erlang modules
	ls()       -- list files in the current directory
	ls(Dir)    -- list files in directory <Dir>
	m()        -- which modules are loaded
	m(Mod)     -- information about module <Mod>
	mm()       -- list all modified modules
	memory()   -- memory allocation information
	memory(T)  -- memory allocation information of type <T>
	nc(File)   -- compile and load code in <File> on all nodes
	nl(Module) -- load module on all nodes
	pid(X,Y,Z) -- convert X,Y,Z to a Pid
	pwd()      -- print working directory
	q()        -- quit - shorthand for init:stop()
	regs()     -- information about registered processes
	nregs()    -- information about all registered processes
	uptime()   -- print node uptime
	xm(M)      -- cross reference check a module
	y(File)    -- generate a Yecc parser
	** commands in module i (interpreter interface) **
	ih()       -- print help for the i module

当执行表达式，如调用函数 Func(Arg1,Arg2,...,ArgN)，shell 会按以下先后顺序确定 Func 的定义：

- Func refers to a functional object (Fun)
- Func refers to a built-in function (BIF)
- user_default:Func in the module user_default
- shell_default:Func in the module shell_default

使用 `.erlang` 启动文件，编写需要自动执行的代码，可以实现自动加载一些模块到 shell 环境中，Erlang/OTP 启动程序时会在启动目录下查找这个文件，或者在用户 Home 目录下查找它。

典型的 .erlang 文件包含以下这样的代码：

    io:format("executing user profile in HOME/.erlang\n",[]).
    code:add_path("/home/calvin/test/ebin").
    code:add_path("/home/hobbes/bigappl-1.2/ebin").
    io:format(".erlang rc finished\n",[]).
      
user_default 模型可以用来加载用户定义的函数或其它内容：

    code:load_abs("..../user_default").
      

现在，可以输入 Erlang 支持的表达式，试试感受一下这种特色语言：

	1> 2 + 15.
	17
	2> 49 * 100.
	4900
	3> 1892 - 1472.
	420
	4> 5 / 2.
	2.5
	5> 5 div 2.
	2
	6> 5 rem 2.
	1

You should have noticed Erlang doesn't care if you enter floating point numbers or integers: both types are supported when dealing with arithmetic. A calculator with the number '80085' typed inIntegers and floating values are pretty much the only types of data Erlang's mathematical operators will handle transparently for you. However, if you want to have the integer-to-integer division, use div, and to have the modulo operator, use rem (remainder).

	7> (50 * 100) - 4999.
	1
	8> -(50 * 100 - 4999).
	-1
	9> -50 * (100 - 4999).
	244950

可以给数值指定进制范围 2..36，默认是十进制，按这样的格式 Base#Value：

	10> 2#101010.
	42
	11> 8#0677.
	447
	12> 16#AE.
	174

erlc -help

	Usage: erlc [Options] file.ext ...
	Options:
	-b type        type of output file (e.g. beam)
	-d             turn on debugging of erlc itself
	-Dname         define name
	-Dname=value   define name to have value
	-help          shows this help text
	-I path        where to search for include files
	-M             generate a rule for make(1) describing the dependencies
	-MF file       write the dependencies to 'file'
	-MT target     change the target of the rule emitted by dependency generation
	-MQ target     same as -MT but quote characters special to make(1)
	-MG            consider missing headers as generated files and add them to the dependencies
	-MP            add a phony target for each dependency
	-MD            same as -M -MT file (with default 'file')
	-MMD           generate dependencies as a side-effect
	-o name        name output directory or file
	-pa path       add path to the front of Erlang's code path
	-pz path       add path to the end of Erlang's code path
	-smp           compile using SMP emulator
	-v             verbose compiler output
	-Werror        make all warnings into errors
	-W0            disable warnings
	-Wnumber       set warning level to number
	-Wall          enable all warnings
	-W             enable warnings (default; same as -W1)
	-E             generate listing of expanded code (Erlang compiler)
	-S             generate assembly listing (Erlang compiler)
	-P             generate listing of preprocessed code (Erlang compiler)
	+term          pass the Erlang term unchanged to the compiler


## 🍀 CLI Arguments
1. https://www.erlang.org/doc/man/erl
2. https://www.erlang.org/doc/man/erlang
3. https://www.erlang.org/doc/man/string

erl shell 命令参数有三种形式：

1. emulator flags 使用 + 表示，比如打印版本号 `erl +v`；
2. flags 使用 - 表示，传递到 Erlang 运行时内部，比如 `erl -s hello`，调用模块 start 方法；
3. plain arguments 出现在首个 flag 参数之前，或者 -- flag 或者 -extra flag 中指定，可以通过 `init:get_plain_arguments/0` 函数获取，这些参数不会被解释，只会在 init 进程中缓存；

文档中所有标记为 init flags 的参数会在运行时初始化中使用，其它 flags 参数为用户参数，可以通过 init:get_argument/1 函数获取。如果只需要通过 CLI 执行程序，可以使用 -noshell 参数禁用 shell 交互，同时在执行完后调用 init:stop/0 方法终止。

	erl -eval "io:format(hi)"
	erl -eval "io:format(""hi"")"
	erl -s module function arg1 arg2 ...
	erl -pa ebin -s hello fac 1 
	erl -noshell -s hello fac -s init stop

命令行中调用模块函数传递参数时容易引发异常，以下错误提示在 Windows 10 系统，说明如下：

	Erlang (SMP,ASYNC_THREADS) (BEAM) emulator version 10.4 
	{"init terminating in do_boot",{badarith... }
	{"init terminating in do_boot",{function_clause..}

	Erlang/OTP 26 [erts-14.0.2] [source] [64-bit] 
	Runtime terminating during boot ({badarith,[{erlang...})

1. badarg 参数类型错误，传入参数和函数要求参数不匹配。
2. badarith 运算错误，atithmetic 运算，例如将一个整数和一个 atom 相加。
3. badmatch 模式匹配错误，最常见的就是给变量重新赋值。
4. undef 符号未定义，可能是符号拼写错误，或者没有编译生成相应的 beam 文件。
4. function_clause 找不到匹配的函数从句，即没有匹配的分支。

使用命令控制台传递参数，与代码中传递参数的形式是有差别的，也就是数据类型会不一样，命令控制台中传递的是字符串，并且进入到 Erlang 中以 List 的形式出现，并且是 [atom]，因为这是传递作为函数参数列表使用的数据。

Erlang 中的 atom 类型通常以小写字母的形式出现，如果包含下载线开头或者是数字等等形式，就需要使用单引号包括。可以使用 erlang 模块内置函数以及字符串库函数将 atom 转换为数值：

	string:list_to_integer(erlang:atom_to_list('123')).

	erlang:list_to_integer(String, Base) -> integer()
	erlang:list_to_integer(String) -> integer()

	string:to_integer(String) -> {Int,Rest} | {error,Reason}

注意命令行传入的参数不是 ["string"]，尽管 Erlang 中的字符串本身就是数值列表，但是 "string" 和 ["string"] 的区别还是挺大的，就是一维与二维 list 的区别。可以使用 is_list/1 或者 is_atom/1 等内置函数进行类型判断。

以下程序演示从命令行传递参数到 Erlang 程序的处理过程：

```erlang
-module(hello).
-export([main/1, fac/1, test/1]).
-on_load(start/0).

main(Args) ->
    test("123b"),
    io:format("Cli arguments: ~p~n", [Args]).

start() -> 
   io:fwrite("Hello Module Load.~n").

fac(0) -> 1;
fac(N) -> N * fac(N-1).

test(_S) -> 
    io:format("# RAW INPUT ==> ~p ~n",[_S]),
    case _S of
        [A|_] when is_atom(A) -> 
            N = string_to_integer(atom_to_list(A)),
            io:fwrite("# input is atom list ~p ~p~n", [_S,N]),
            io:format("# factorial ~5.10B = ~.10B~n", [N, fac(N)]);
        L1   when is_list(L1) -> 
            N = string_to_integer(L1),
            io:fwrite("# input is list ~p ~p~n", [_S,N]),
            io:format("# factorial ~5.10B = ~.10B~n", [N, fac(N)])
    end.

string_to_integer(_S) ->
    case string:to_integer(_S) of
        { N, _R } when is_integer(N) -> N;
        { Err, Reason } ->  throw ({Err, Reason})
    end.
```

```sh
erlc -o ebin .\hello.erl

erl -pa ebin -s hello main someargs -s init stop
# RAW INPUT ==> "123b"
# input is list "123b" 123
# factorial   123 = 1214630436702532967...
erl -pa ebin -s hello test "123c" -s init stop
# RAW INPUT ==> ['123c']
# input is atom list ['123c'] 123
# factorial   123 = 1214630436702532967...
```


## 🍀 Hello World
- https://erldocs.com/current/stdlib/io.html#type-format
- [Rebar Package Manager](https://www.cnblogs.com/autumnwhisper/p/4914726.html)

Rebar 和 Hex 一样用于包管理的工具，是一个遵循 Erlang/OTP 原则的 Erlang 项目构建工具，使用它可以减少构建标准 Erlang/OTP 项目架构配置的工作量，并且可以很容易的编译、测试、发布 Erlang 应用程序。更强大的是，rebar 提供一种依赖管理机制，它可以使开发者很方便地通过 Git、Hg 等方式重用常见的第三方 Erlang 模块或库。

你可以用下面的命令来创建、编译项目：

	rebar create-app appid=myapp
	rebar compile
	rebar clean 

编译完成之后，会生成一个 ebin 文件夹，里面存放了应用的资源文件 .app 和对应 beam 文件。

rebar doc 可以用这个命令来生成对应的 doc 文档，里面的 index.html 就可以看到所有的模块的 API 描述，当然你必须要符合 Edoc 的描述格式。

如果要发布一个应用，我们需要在应用目录下，创建一个名为 rel 的文件夹，用来作为发布用的文件夹，在文件夹下面执行命令来创建一个名为 myapp 的独立的 Erlang VM 节点：

	rebar create-node nodeid=myapp

修改 rel/reltools.config 里的 lib_dirs 的值，指向正确的目录。然后应用的根目录下面，在 rebar.config 里加上一行登记 rel 文件夹，以使 rebar 可以访问，作为应用内容的发布文件夹：

	{sub_dirs, ["rel"]}

如果没有什么错误，那么就可以进行发布了：

	rebar generate


Erlang 程序的运行一般需要两个步骤，即编译和运行。通过编译生成与程序文件的主文件名相同而扩展名为 `.beam`。要运行 Erlang 程序，可以在 Erlang 的交互式命令行下或直接在命令行下编译后运行。

如下，执行 erl 命令或窗口版 werl 开始 HelloWorld，`q()` 其实只是 shell 上 `init:stop()` 的别名：

	>erl
	Eshell V10.4  (abort with ^G)
	1> io:format("Hello WOrld!").
	Hello WOrld!ok
	2> q().
	ok
	3>


编写一个 hello.erl 程序，配合 erl 命令行、erlc 编译器、escript 脚本解释器有多种方式运行它：

	-module(hello).
	-export([fac/1]).

	fac(0) -> 1;
	fac(N) -> N * fac(N-1).

把这些存储到文件 hello.erl 中，文件名必须与模块名相同。

- `-module` 表示定义一个模块；
- `-export` 表示导出一个函数列表，列表格式 [Fun/N1, Fun/N2 ...]，数字是参数个数，这里只导出了一个 fac 函数；
- `-import(io,[fwrite/1]).` 导入函数的格式类似导出，它需要指定导入的模块；
- `%` 注解符号，没有注释块；
- `.` 句点表示 Erlang 代码的行的结束，每条语句都需要句点结束。

使用 Erlang shell 编译，再运行程序:

	3> c(hello).
	{ok,hello}
	30> hello:fac(20).
	2432902008176640000
	4> hello:fac(40).
	815915283247897734345611269596115894272000000000
	32> _

确保工作目录与程序所在目录为同一个目录，避免 erl 找不到文件，或者使用 `-pa ./ebin` 参数将当前目录传入 erl，或者使用 `cd(Dir)` 命令进入指定目录。然后执行编译 `c(hello).` 出现 `{ok，hello}` 说明编译成功，生成相应的二进制文件 hello.beam，然后可以执行程序了。

在命令行编译和运行，erlc 命令提供了一个公共的途径来运行所有 Erlang 系统的编译器，erlc 会根据于各输入文件的扩展名来调用合适的编译器。

	$ erlc hello.erl
	$ erl -noshell -s hello fac -s init stop

Erlc 编译一个或一个以上文件，文件必须包括它们的扩展名，需要通过扩展名来调用正确的编译器。例如 .erl 代表 Erlang 源代码，而 .yrl 代表 Yecc 源代码。

使用 erl 命令来调用模块中的函数运行程序，设置参数如下：

- `-noshell` 启动 Erlang 而没有交互式 shell，此时不会提示 Erlang 的启动信息
- `-s hello fac` 运行函数 hello:fac() ，注意使用 -s Mod ... 选项时，相关的模块 Mod 必须已经编译完成了。
- `-s init stop` 运行函数 init:stop()，即调用 apply(hello,fac,[]) 后，系统结束运行。


使用 escript 可以直接运行程序，不需要先编译。想要以 escript 方式运行 hello，需要创建如下文件，提供 `main(_)` 入口函数:

```erlang
	#! /usr/bin/env escript
	-module (coding).
	-export ([main/1]).

	main(_) ->
		io:format("Hello world\n").

	% io:format("consulting .erlang in ~p~n",[element(2,file:get_cwd())]).
	% c:cd("g:/programing/programingerlang").
	% io:format("Now in:~p~n",[element(2,file:get_cwd())]).
```

脚本的启动函数为main，它有一个参数，表示运行时传入的参数，如果不传参的话，可以写为下划线，意味丢弃该参数。io 模块中的格式化函数接收的数据是一个 List 类型，每个元素对应格式字符串中的一个占位。

```erlang
%% -*- erlang -*-
-module(hello).
-export([main/1]).

main(Args) ->
    io:format("Hello ~p!\n", [Args]).
```

然后执行：

	> escript hello
	Hello world

在 Linux 中编写 Shell 程序运行 Erlang：

	#!/bin/sh
	#---
	# Excerpted from "Programming Erlang",
	# published by The Pragmatic Bookshelf.
	# Copyrights apply to this code. It may not be used to create training material, 
	# courses, books, articles, and the like. Contact us if you are in doubt.
	# We make no guarantees that this code is fit for any purpose. 
	# Visit http://www.pragmaticprogrammer.com/titles/jaerlang for more book information.
	#---
	erl -noshell -pa /home/joe/2009/book/JAERLANG/Book/code\
				 -s hello start -s init stop

使用格式输出：

```erlang
	-module(helloworld). 
	-export([start/0]). 

	start() -> 
	   X = 40.00, 
	   Y = 50.00, 
	   io:fwrite("~f~n",[X]), 
	   io:fwrite("~e",[Y]).
```

Output

	40.000000
	5.00000e+1

输出使用的格式字符串一般格式 `~F.P.PadModC.`：

- `~` 波浪号表示格式定义；
- `C` 决定输出数据类型，这是必要的，其它如 F、P、Pad、Mod 部分都是可选的；
	- `~c` 定义数字显示为 ASCII 字符串格式:
	- `~s` 定义字符串格式:
	- `~f` 定义浮点数格式:
	- `~n` 定义换行符号；
	- `~e` 科学计数法格式，默认精度 6 位，至少 2 位；
- `Pad` 定义填充符号，默认是空格，比如填充 # 号，`~..#C`；
- `Mod` 定义控制修饰序列，如货币是 t，:
- `P` 定义精度:
- `F` 定义字段宽度 Field width，负值表示左对齐，省略表示按数据要求长度输出，如果指定宽度不足则用 * 填充:
- `B` 定义基数，2-36，默认是 10，比如二进制显示 `io:fwrite("~.16B~n", [31]).`
- `X` 类似 `B` 但使用前缀，比如 16 进制前显示 0x， `io:fwrite("~.16X~n", [-31,"0x"]).`

Mod is the control sequence modifier. This is one or more characters that change the interpretation of Data. The current modifiers are t, for Unicode translation, and l, for stopping p and P from detecting printable characters.

If F, P, or Pad is a * character, the next argument in Data is used as the value. For example:

	1> io:fwrite("~*.*.0f~n",[9, 5, 3.14159265]).
	003.14159
	ok

To use a literal * character as Pad, it must be passed as an argument:

	2> io:fwrite("~*.*.*f~n",[9, 5, $*, 3.14159265]).
	**3.14159
	ok


在 erl 中使用常用 sheel 函数：

- `b()` - Prints the current variable bindings.
- `f()` - Removes all current variable bindings.
- `f(x)` - Removes the binding for a particular variable.
- `h()` - Prints the history list of all the commands executed in the shell.
- `history(N)` - 设置历史记录为 N 条，返回旧设置值，默认值 20。
- `e(N)` - 重复执行 N 号命令，如果 N 为负数则从最的位置回数，如 e(-1) 执行上一条命令。
- `q()` - 退出


Erlang 数字前面可以用 # 来标注其 Base，语法：Base#Value，默认的 Base 是 10 进制：

	10> 2#101010.  %% 2 进制的 101010
	42
	11> 8#0677.  %% 8 进制的 0677
	447
	12> 16#AE.   %% 16 进制的 AE
	174

## 🍀 Pattern matching 模式匹配
- https://www.erlang.org/doc/apps/erts/match_spec
- [Erlang shell](https://www.tutorialspoint.com/erlang/erlang_shell.htm)
- [Erlang Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)
- [Erlang case & if](https://www.w3cschool.cn/erlang/qik11p5y.html)

变量 Variables 大概是编程入门掌握的一个基本概念，正因为变量可变 mutable，所以它可以被重新赋值，与常量相对。

Erlang 是函数式语言(虽然也支持副作用)。这意味着 Erlang 里的变量 ‘Immutable’ (不可变的).
Immutable variables 在设计上简单，减少了并发过程中处理状态改变带来的复杂性。理解这一点很重要。

Erlang 的变量则完全打破常规的变量意义，因为 Erlang 使用的是变量模式匹配机制 pattern matching。变量只能进行一次性赋值，所以 Erlang 的变量一共有 2 个状态：已被赋值的变量叫绑定变量，未绑定的变量则是自由变量，可以后续通过 pattern matching 进行绑定。若试图改变已绑定变量的值，就会得到错误，模式匹配同样的值并不改变数据也不会引起错误。

```sh
$ erl
Eshell V10.4  (abort with ^G)
1> List = [1,2,3].
[1,2,3]
2> List = [1,2,3].
[1,2,3]
3> List = [1,2].
** exception error: no match of right hand side value [1,2] 
```

Erlang 这种反常识的模式匹配机制，相比使用 mutable 变量机制的语言，immutable 变量机制可以算是优点。比如 C 或 Java 等语言进行多核 CPU 编程的时候，因为变量可变，就必须面对共享内存的问题，为了不破坏共享内存，访问这些内存的时候，必须加锁防止*竞态条件*（Race condition）与*数据竞争*（Data Race），否则就可能在多线程下导致数据逻辑不一致的线程安全问题。

Erlang 具有不可变状态，没有共享内存，也没有锁，这就让程序并行变得简单。

当然，模式匹配与变量不可变的缺点也存在，因为这是一种反常识的逻辑，会造成编码的一定障碍。没有可变变量该怎么去实现 X = X + 1 这种已经十分深入人心的概念呢？简单的解决就是换一个变量来接收新的值。


Erlang 是动态类型的语言，但它也是强类型的语言。动态类型意味着你声明变量时不需要指定类型，而强类型是说，erlang 不会偷偷做类型转换:

	1> 6 + "1".
	** exception error: bad argument in an arithmetic expression
	in operator  +/2
	called as 6 + "1"

Erlang 里变量的命名有约定，必须首字母大写。因为首字母小写的，会被认为是 atom (原子) 类型。

**Erlang 里没有赋值语句，= 号在 Erlang 里是 pattern matching 模式匹配。**


变量通过模式匹配绑定到值，在 function call, case- receive- try- 和匹配操作符 = 等表达式中进行模式匹配。另外，还有 Guards （保护序列）模式匹配，TypeScript 相似的概念是 Type Guards 类型守卫。

Erlang 变量只能以大写字母或下载线 _ 开关，并且单独的 _ 代表丢弃的变量，Python 有相同应用。Erlang 还有一此非常特别的运算符号，如恒等测试符号 =:=，不等测试符号 =/=，参考布尔值比较运算。


更多的模式匹配规则参考 Erlang Reference Manual 9 Expressions
https://www.erlang.org/doc/reference_manual/expressions


模式匹配通常用来简单嵌套 if-else 结构。

Erlang 里变量的命名有约定，必须首字母大写。因为首字母小写的，会被认为是 atom 原子类型。

Erlang 里没有赋值语句，等号 = 是模式匹配符号，如果 = 左侧跟右侧的值不相等，就叫没匹配上，这时那个 erlang 进程会直接异常崩溃，不要害怕，erlang 是高容错系统，程序崩溃挺正常。

匹配模式中，左则的模式如果和右侧的 term 匹配，那么模式中未绑定的变量就会绑定到匹配到的值。

Erlang 中的变量在绑定之前是自由的，非绑定变量可以绑定一次任意类型的数据。为了支持这种类型系统，Erlang 虚拟机采用的实现方法是用一个带有标签的机器字表示所有类型的数据，这个机器字就叫做 term。在 32 位机器上，一个 term 为 32 位宽；在 64 位机器上，一个 term 默认为 64 位宽。由于目前大规模的服务器基本上都是 64 位平台，所以本文下面的讨论都基于 64 位平台。


示例:

	1> X.
	** 1: variable 'X' is unbound **
	2> X = 2.
	2
	3> X + 1.
	3
	4> {X, Y} = {1, 2}.
	** exception error: no match of right hand side value {1,2}
	5> {X, Y} = {2, 3}.
	{2,3}
	6> Y = 3.
	3

程序解析：

- `X` 变量开始是未绑定的，然后绑定到 2 这个数值，后面的 X + 1 并非给变量加 1，并没有模式匹配。
- `{X, Y} = {1, 2}` 这里的模式匹配失败，因为 X 已经绑定 2，但和右侧的值不一致。
- `{X, Y} = {2, 3}` 这里的模式匹配成功，因为已经绑定的变量 X 和右侧的值一致，而 Y 变量是没有绑定的，所以匹配成功对其绑定为 3。

列如，在更多的匹配条件中获取值：

	3> {X, 1, 5} = {2, 1, 5}.
	{2,1,5}
	4> X. 
	2

使用匹配来解析 List，将第一个元素绑定到 H, 将其余绑定到 T：

	5> [H | T] = [1, 2, 3].
	[1,2,3]
	6> H.
	1
	7> T.
	[2,3]

可以在函数中这么递归下去，下划线表示丢弃赋值：

	8> [_ | T2] = T.
	[2,3]
	9> T2.
	[3]
	10> [_ | T3] = T2.
	[3]
	11> T3.
	[]

Erlang 里面变量是 immutable 的，可以使用 `f()` 解绑所有变量，清理之前用过的变量名。

下面重新定义了 Add 函数，现在它只接收一个 tuple 参数。然后在参数列表里做 pattern matching 以获取 tuple 中的两个值，解析到 A，B.

	12> f().
	ok
	13> Add = fun({A, B}) -> A + B end.
	#Fun<erl_eval.6.118419387>
	14> Add({1, 2}).   
	3

Erlang 到处都模式匹配，如下面代码定义的 greet/2 函数就使用了 case-of-end 模式匹配:

```erlang
	-module(case_matching).
	-export([greet/2]).

	greet(Gender, Name) ->
	  case Gender of
		male ->
		  io:format("Hello, Mr. ~s!~n", [Name]);
		female ->
		  io:format("Hello, Mrs. ~s!~n", [Name]);
		_ ->
		  io:format("Hello, ~s!~n", [Name])
	  end.
```

case 的各个分支是自上往下依次匹配的，如果 Gender 是 atom 'male', 则走第一个，如果是 'female' 走第二个，如果上面两个都没匹配上，则走第三个。case 语句一定要有匹配的分支，否则就会触发异常。不同的模式匹配分支使用分号隔离，在定义函数参数列表的模式匹配时也一样。

上面的例子改一下，就可以得到规整一点的函数参数列表匹配模式的形式：

```erlang
	-module(function_matching).
	-export([greet/2]).

	greet(male, Name) ->
	  io:format("Hello, Mr. ~s!~n", [Name]);
	greet(female, Name) ->
	  io:format("Hello, Mrs. ~s!~n", [Name]);
	greet(_, Name) ->
	  io:format("Hello, ~s!~n", [Name]).
```

这个模块使用函数匹配模式，有三个 clause，与 case 一样，自上往下依次匹配。

```sh
	$ erl -pa ebin/
	Eshell V10.4  (abort with ^G)
	1> function_matching:greet(female, "Scarlett").
	Hello, Mrs. Scarlett!
	ok
	2>
```

`erl -pa` 参数的意思是 Path Add, 添加目录到 erlang 以查找目录列表里的 beam 文件。使用 erlc 编译器时，应该将编译输出的二进制文件保存到 ebin 目录下：

	erlc -o ebin function_matching.erl




## 🍀 Data Types
- Erlang Data Types https://erlang.org/doc/reference_manual/data_types.html
- EEP 8: Types and function specifications http://erlang.org/eeps/eep-0008.html
- Array https://erlang.org/doc/man/array.html
- Using Record in Erlang Shell https://developer.aliyun.com/article/332330

Erlang 类型系统很特别，也很复杂。

Erlang 为动态语言，变量在运行时动态绑定，这对于我们获取函数的参数及返回值的类型信息具有一定的难度。为了弥补这个不足，Erlang 通过 type 及 spec 定义数据类型及函数原型。通过这些信息，我们对函数及调用进行静态检测，从而发现一些代码中问题。同时，这些信息也便于他人了解函数接口，也可以用来生成文档。

Erlang 是一个有着 20 多年历史的成熟系统，它早已发展出了一套自己的类型标注系统，不仅用来生成文档，更重要的是可以据此对源码进行静态分析，通过程序来排除一些低级的和隐藏的错误。动态类型语言属性并没有让其成为短板，相比 TypeScript 也通过类型标注解决了 JavaScript 的弱类型问题。

预定义的类型及语法规则如下:

    Type  :: any ()         %% 最顶层类型，表示任意的 Erlang term
        | none ()           %% 最底层类型，不包含任何 term
        | pid ()
        | port ()
        | ref ()
        | []                %% nil
        | Atom
        | Binary
        | float ()
        | Fun
        | Integer
        | List
        | Tuple
        | Union
        | UserDefined       %% described in Section 2
     
    Union  :: Type1  | Type2
     
    Atom  :: atom ()
        | Erlang_Atom       %% 'foo', 'bar', ...
     
    Binary  :: binary ()                        %% <<_:_ *8>>
          | <<>>
          | << _ : Erlang_Integer >>            %% Base size
          | << _ : _ * Erlang_Integer >>        %% Unit size
          | << _ : Erlang_Integer , _ : _ * Erlang_Integer >>
     
    Fun  :: fun ()                              %% 任意函数
       | fun (( ... )  -> Type )                %% 任意 arity, 只定义返回类型
       | fun (()  -> Type )
       | fun (( TList )  -> Type )
     
    Integer  :: integer ()
          | Erlang_Integer                      %% ..., -1, 0, 1, ... 42 ...
          | Erlang_Integer .. Erlang_Integer    %% 定义一个整数区间
     
    List  :: list ( Type )                      %% 格式规范的 list (以[]结尾)
        | improper_list ( Type1 , Type2 )       %% Type1=contents, Type2=termination
        | maybe_improper_list ( Type1 , Type2 ) %% Type1 and Type2 as above
     
    Tuple  :: tuple ()                          %% 表示包含任意元素的 tuple
         | {}
         | { TList }
     
    TList  :: Type
         | Type , TList

- 3.1  Terms

    在 Erlang 中表示任何类型的数据都叫做 `Terms`，它是源代码中的基本数据类型。单词全称 terminology，即术语。Erlang 中的变量在绑定之前是自由的，非绑定变量可以绑定一次任意类型的数据。为了支持这种类型系统，Erlang 虚拟机采用的实现方法是用一个带有标签的机器字表示所有类型的数据，这个机器字就叫做 term。对应 C 语言实现代码中的 `Eterm` 数据结构。

- 3.2  Number 

    数值有 integers & floats 两种。数值字面量 literals 也有两种形式:

    - `$char` ASCII 字符或 unicode 字符。
    - `base#value` 指定进制的整数，bae 数值范围在 2..36。

    数值可以使得 _ 分隔符号以便于视觉区别。

        1> 42.          # 42
        2> -1_234_567_890.          # -1234567890
        3> $A.          # 65
        4> $\n.         # 10
        5> 2#101.       # 5
        6> 16#1f.       # 31
        7> 16#4865_316F_774F_6C64.  # 5216630098191412324
        8> 2.3.         # 2.3
        9> 2.3e3.       # 2.3e3
        10> 2.3e-3.     # 0.0023
        11> 1_234.333_333           # 1234.333333

- 3.3  Atom 

    命名的字面常量，使用小写字母，如果使用大写字母或 `_`、`@` 符号就需要单引号包括。

        hello
        phone_number
        'Monday'
        'phone number'

- 3.4  Bit Strings and Binaries

    比特字符串 bit string 保存在无类型定义的内存 untyped memory。当元素都是 8-bit 或者刚好是它的整数倍分组，那么就是 Binaries 二进制数据。

        1> <<10,20>>.
        <<10,20>>
        2> <<"ABC">>.
        <<"ABC">>
        1> <<1:1,0:1,0:1,0:1>>.
        <<8:4>>

    冒号后指定数据占用的 bit 宽度，还可以指定数据具体类型，参考 Bit Syntax：

    list_to_integer_binaries(L) ->
	    [<<I:32/integer-native>> || I <- L].


- 3.5  Reference

    引用是 make_ref/0 函数创建的，在 Erlang 运行时唯一的 term 类型。

- 3.6  Fun

    函数对象，可以将一个匿名函数作为参数传给另一个函数，而不使用函数名：

        1> Fun1 = fun (X) -> X+1 end.
        #Fun<erl_eval.6.39074546>
        2> Fun1(2).
        3


- 3.7  Port Identifier

    Erlang 提供 Port 接口实现与外部相互调用，Port 只是其中一种，通过 open_port/2 函数创建，并返回一个标识符号用作这个 Port 对象的身份标记。

- 3.8  Pid

    进程标识符号 pid 标识一个对进程，Erlang 面向并发编程，进程是最常使用的对象，以下 BIFs 用来创建进程并返回其标识符号：

    spawn/1,2,3,4
    spawn_link/1,2,3,4
    spawn_opt/4

    以下例子使用 `self()` 返回当前运行此代码的进程标识：

        -module(m).
        -export([loop/0]).

        loop() ->
            receive
                who_are_you ->
                    io:format("I am ~p~n", [self()]),
                    loop()
            end.

        1> P = spawn(m, loop, []).
        <0.58.0>
        2> P ! who_are_you.
        I am <0.58.0>
        who_are_you

    通过 P 或 <0.58.0> 给进程发送消息是等价的。

- 3.9  Tuple

    元组是组件类型，有固定数量的 Terms，如 `{Term1,...,TermN}`，元素数量就是元组的大小。

    以下示范使用无组相关的 BIFs，注意 `element` 方法使用的序号从 1 开始：

        1> P = {adam, 24, {july, 29}}.
        {adam, 24, {july, 29}}
        2> element(1, P).
        adam
        3> element(3, P).
        {july, 29}
        4> P2 = setelement(2, P, 25).
        {adam, 25, {july, 29}}
        5> tuple_size(P).
        3
        6> tuple_size({}).
        0

- 3.10  Map

    映射也是一种复合数据类型，是常见的基于哈希算法的键值对。

        #{Key1=>Value1, ..., KeyN=>ValueN}

    每个键值对都由 key 和 value 两部分，知道 key 就可以检索映射中存储的关联值，键值对数量就是映射的大小。

    以下示范内建的映射相关函数使用：

        1> M1 = #{name=>adam, age=>24, date=>{july, 29}}.
        #{age => 24, date => {july, 29}, name => adam}
        2> maps:get(name, M1).
        adam
        3> maps:get(date, M1).
        {july, 29}
        4> M2 = maps:update(age, 25, M1).
        #{age => 25, date => {july, 29}, name => adam}
        5> map_size(M).
        3
        6> map_size(#{}).
        0

    完整的函数可以在 STDLIB 手册找到。

    Maps 是 Erlang/OTP R17 版本中的体验特性。

- 3.11  List

    列表是组合数据类型，和元组类型差别在于列表更像是数组：

        [Term1,...,TermN]
    
    所有元素个数即列表的长度，并且列表通常都有 head 和 tail 指针，除非是 [] 空列表，tail 部分也是一个列表。所以，一个列表可以表示为 `[H|T]` 这种常见格式，前面的列表语法也只可以表示为 [Term1|[...|[TermN|[]]]]。

        [] is a list, thus
        [c|[]] is a list, thus
        [b|[c|[]]] is a list, thus
        [a|[b|[c|[]]]] is a list, or in short [a,b,c]

    尾部指针是列表的列表称为 proper list，允许 tail 不是列表的列表，例如 [a|b]，只是这种类型的列表几乎没有实际用途。

        1> L1 = [a,2,{c,4}].
        [a,2,{c,4}]
        2> [H|T] = L1.
        [a,2,{c,4}]
        3> H.
        a
        4> T.
        [2,{c,4}]
        5> L2 = [d|T].
        [d,2,{c,4}]
        6> length(L1).
        3
        7> length([]).
        0
    
     array 数据结构的实现还是 tuple，只是定义为一个 record。

        array:new(100)
        array:new({default,0})
        array:new([{size,10},{fixed,false},{default,-1}])


- 3.12  String

    字符串使用双引号包括，但它的类型是 List 而不是 String，比如 "hello" 就是 [$h,$e,$l,$l,$o] 列表，具体值为 [104,101,108,108,111]。

        "string" "42"
        % is equivalent to
        "string42"

- 3.13  Record

    记录类型是一个数据结构并非是一个真正的数据类型，它可以定义各种类型的字段成员，并给定一个名称以方便访问，和 C 语言中的结构体类似。但是，Erlang 的结构体会在编译期转换为元组，所以 shell 环境中并不能识别结构体，除非采取特别措施，如使用 `rd(R, D)` 函数，或者使用 `rr(File)` 从代码中读取结构体信息，可以使用通配符 `rr("*")`。

        -module(person).
        -export([new/2]).

        -record(person, {name, age}).

        new(Name, Age) ->
            #person{name=Name, age=Age}.

        1> person:new(ernie, 44).
        {person,ernie,44}

    在 shell 中使用结构体，注意结构体成员使用模式匹配设置值时需要加花括号，不能真的直接使用 `F#film.type` 这样的方式：

        Eshell V5.9 (abort with ^G)
        1> rd(film ,{ director, actor, type, name, imdb}).
        film
        2> F =#film{}.
        #film{director = undefined,actor = undefined,
            type = undefined,name = undefined,imdb = undefined}
        3> F#film.type.
        undefined
        4> F1 =F#film{type=23}.
        #film{director = undefined,actor = undefined,type = 23,
            name = undefined,imdb = undefined}

        5> rr(person).
        [person]
        6> P = #person{name=adam, age=24}. 
        #person{name = adam,age = 24}

    除了以上手动在 shell 加载结构体，还可以使用 shell 会自动加载的 user_default 模块，在遇到不能识别的命令时就会执行它。需要编译 user_default.erl 并在 HOME 目录下生成 user_default.beam。启动 Erlang Shell 就可以使用 `rl()` 查看加载的 record 信息，而且 user_default 定义的方法也可以直接访问。

- 3.14  Boolean

    Erlang 并没有 Boolean 数据类型，而是定义 true 和 false 两个作为布尔值的两个原子类型。

        1> 2 =< 3.
        true
        2> true or false.
        true


### 🐣 Atoms 原子类型

Erlang 里面有 atom 原子类型，它使用的内存很小，所以常用来做函数的参数和返回值。参加 pattern matching 的时候，运算也非常快速。

在其他没有 atom 的语言里，你可能用过 constant 之类的东西，一个常量需要对应一个数字值或者其他类型的值。

在 Erlang 里 atom 真是抬头不见低头见，可以通过 atom 来表示各种意义的常量。在其他语言，例如 C/C++ 中使用 #define 宏定义，enum 枚举，或者用 const 常量等方法实现类似的功能。

但是，使用这些方法的时候，总会觉得不是太舒服，比如使用 #define 宏定义和 const 常量，除了本来就头痛的给宏或常量命名之外，还要真正填上一个值，为了让这些值不冲突，又是一件头痛的事情了。如果用字符串吧，那么每次匹配的时候还要做低效的字符串操作。

比如：

	const int red = 1;
	const int green = 2;
	const int blue = 3;

但多了这个映射，其实用起来不大方便，后面对应的值 1， 2，3 一般只是用来比较，具体是什么值都关系不大。所以有了 atom 就很方便了，我们从字面上就能看出，这个值是干嘛的:

	1> red.
	red

atom 类型支持的写法：

	1> atom.
	atom
	2> atoms_rule.
	atoms_rule
	3> atoms_rule@erlang.
	atoms_rule@erlang
	4> 'Atoms can be cheated!'.
	'Atoms can be cheated!'
	5> atom = 'atom'.
	atom

包含空格等特殊字符的 atom 需要用单引号括起来。 Erlang 里变量的命名必须首字母大写，小写起头是 atom 原子类型。

需要注意的是：在一个 erlang vm 里，可创建的 atom 的数量是有限制的，默认是 1,048,576，因为 erlang 虚拟机创建 atom 表也是需要内存的。一旦创建了某个 atom，它就一直存在那里了，不会被垃圾回收。不要在代码里动态的做 string -> atom 的类型转换，这样最终会使你的 erlang atom 爆表。比如在你的接口逻辑处理的部分做 to atom 的转换的话，别人只需要用不一样的参数不停地调用你的接口，就可以攻击你。



### 🐣 String 字符串
https://www.erlang.org/doc/reference_manual/data_types#string

Strings 是指用双引号包括的一系列字符，Erlang 类型系统中没有字符串这种数据类型，只有这种数据。比如字符串 "hello" 等价的列表是 [$h,$e,$l,$l,$o]，也即是 [104,101,108,108,111] 这样的二进制数据序列。

Two adjacent string literals are concatenated into one. This is done in the compilation, thus, does not incur any runtime overhead.

Example:

	"string" "42"

is equivalent to

	"string42"

String 模块中处理的字符使用 unicode:chardata() 表示，即 UTF-8 编码的字符集，是码点值的列表，或者 UTF-8 编码的二进制数据。

	"abcd"               is a valid string
	<<"abcd">>           is a valid string
	["abcd"]             is a valid string
	<<"abc..åäö"/utf8>>  is a valid string
	<<"abc..åäö">>       is NOT a valid string,
	                     but a binary with Latin-1-encoded codepoints
	[<<"abc">>, "..åäö"] is a valid string
	[atom]               is NOT a valid string


### 🐣 bitstring & binary 位串与二进制
- http://erlang.org/doc/reference_manual/data_types.html
- http://erlang.org/doc/reference_manual/expressions.html#bit_syntax
- http://erlang.org/doc/programming_examples/bit_syntax.html

比特串 bit string 保存在无类型定义的内存 untyped memory。

位串包含一系列比特位，当元素都是 8-bit 或者刚好是它的整数倍分组，那么就是二进制数据。

位串表达式的基本格式：

	<<>>
	<<E1,...,En>>

每个元素 Ei 指定了一段位串值，大小和类型是可选的：

	Ei = Value |
		 Value:Size |
		 Value/TypeSpecifierList |
		 Value:Size/TypeSpecifierList

TypeSpecifierList 类型列表是以下三种组合，使用连字符拼接，如 ` <<D/integer-signed>> = <<80>>.`：

- Type 设置类型 integer, float, binary, bytes, bitstring, bits, utf8, utf16, utf32
- Signedness 为 integer 设置符号 signed, unsigned 默认值
- Endianness 字节序，big 默认、little、 native

Examples:

	1> <<10,20>>.
	<<10,20>>
	2> <<"ABC">>.
	<<"ABC">>
	3> <<1:2, 2:2>>.
	<<6:4>>

上面显示的 `<<6:4>>` 表示化位串是 4-bit，值是 6，可以根据比特位拼接得到 01 拼接 10 结果为 0110，即十进制的 6。

注意，当位串刚好是 8-bit 的整数倍时，就按二进制数据处理了：

	1> A = <<2:6,2:2>>.
	<<"\n">>
	2> bit_size(A).
	8

Erlang 没有字符串类型，字符串用 List 表达，如：

	1> [97, 98, 99].
	"abc"

也可以用二进位来表示字符串，更省空间：

	1> <<"ABC">>.
	<<"ABC">>

使用模式匹配获取位串的值，使用内置函数 bit_size 获取大小：

	1> A = <<255, 256, 16#80>>.
	<<255,0,128>>
	2> <<B,C,D>> = A.
	<<255,0,128>>
	3> B.
	255
	4> bit_size(A).
	24
	5> E = <<B:8>>.
	<<"">>
	6> F = <<B:16>>.
	<<0,255>>

注意，不能直接从位串获取指定的子位串 `B = <<A:16>>.`，但是可以先将位串绑定到变量再获取：

	1> A = <<1,1>>.
	<<1,1>>
	2> B = <<A:16>>.
	** exception error: bad argument
		 in function  eval_bits:eval_exp_field1/6 (eval_bits.erl, line 101)
		 in call from eval_bits:eval_field/3 (eval_bits.erl, line 92)
		 in call from eval_bits:expr_grp/4 (eval_bits.erl, line 68)
	3> <<B:16>> = A.
	<<1,1>>
	4> C = <<B:16>>.
	<<1,1>>

内置函数 binary_to_list 可以用于将一个位字符串转换为列表。
	
	-module(helloworld).
	-export([start/0]).

	start() ->
	   Bin1 = <<10,20>>,
	   X = binary_to_list(Bin1),
	   io:fwrite("~w",[X]).

执行上面的程序，输出结果如下： 
	
	[10,20]

位逻辑操作

bsl (Bit Shift Left),
bsr (Bit Shift Right),
band,
bor,
bxor,
bnot.


### 🐣 Boolean 布尔

Erlang 没有专用的 Boolean 类型，使用 atom 类型的 true 和 false 两个值，作为布尔处理。

	1> true and false.
	false
	2> false or true.
	true
	3> true xor false.
	true
	4> not false.
	true
	5> not (true and true).
	false

还有两个与 and 和 or 类似的操作：`andalso` 和 `orelse`。区别是 and 和 or 不论左边的运算结果是真还是假，都会执行右边的操作。而 andalso 和 orelse 是短路的，意味着右边的运算不一定会执行。

来看一下比较：

	6> 5 =:= 5.
	true
	7> 1 =:= 0.
	false
	8> 1 =/= 0.
	true
	9> 5 =:= 5.0.
	false
	10> 5 == 5.0.
	true
	11> 5 /= 5.0.
	false

`=:=` 和 `=/=` 分别是严格相等运算符、严格不等运算符，`/=` 和 `==` 分别是相差很多、大概相等。

	12> 1 < 2.
	true
	13> 1 < 1.
	false
	14> 1 >= 1.
	true
	15> 1 =< 1.
	true
	17> 0 == false.
	false
	18> 1 < false.  
	true

数字和 atom 类型是不相等的， 0 /= false。注意，小于等于的写法 `=<`，= 在前面，=> 和 <= 两个箭头还有其他的用处。

虽然不同的类型之间可以比较，也有个对应的顺序，但一般情况用不到的:

	number < atom < reference < fun < port < pid < tuple < list < bit string


### 🐣 Tuples 元组

Tuple 类型是多个不同类型的值组合成的类型。有点类似于 C 语言里的 struct。

语法是：{Element1, Element2, ..., ElementN}

	1> X = 10, Y = 4.
	4
	2> Point = {X,Y}.
	{10,4}

上面的 Point 是个 Tuple 类型，包含了两个整形的变量 X 和 Y。

实践中，经常在 tuple 的第一个值放一个 atom 类型，来标注这个 tuple 的含义。这种叫做 tagged tuple:

	1> Data1 = {point, 1, 2}.
	{point,1,2}
	2> Data2 = {rectangle, 20, 30}.
	{rectangle,20,30}

后面的代码如果要处理 Data1 和 Data2 的话，只需要检查 tuple 的第一项，就知道这个 tuple 是个点坐标，还是个矩形:

	3> case Data1 of
	3>   {point, X, Y} -> "this is a point";
	3>   {rectangle, Length, Width} -> "this is a rectangle"
	3> end.
	"this is a point"

上面用 case 做 pattern matching 模式匹配。


### 🐣 Map 映射
- http://erlang.org/doc/reference_manual/expressions.html#map_expressions
- http://erlang.org/doc/reference_manual/data_types.html
- http://erlang.org/doc/man/maps.html
- https://www.erlang.org/doc/getting_started/seq_prog#maps

映射是复合数据类型，存放各种键值对，一个主键 Key 对应一个值，存放键值对也中元素 Element，其数量就是映射的大小：

	#{Key1=>Value1,...,KeyN=>ValueN}

使用 STDLIB 提供的内置函数 BIFs 操作映射：

	1> M1 = #{name=>adam,age=>24,date=>{july,29}}.
	#{age => 24,date => {july,29},name => adam}
	2> maps:get(name,M1).
	adam
	3> maps:get(date,M1).
	{july,29}
	4> M2 = maps:update(age,25,M1).
	#{age => 25,date => {july,29},name => adam}
	5> map_size(M).
	3
	6> map_size(#{}).
	0

Creating Maps

	#{}
	#{ K => V }
	#{ K1 => V1, .., Kn => Vn }

Examples:

	M0 = #{},                 % empty map
	M1 = #{a => <<"hello">>}, % single association with literals
	M2 = #{1 => 2, b => b},   % multiple associations with literals
	M3 = #{k => {A,B}},       % single association with variables
	M4 = #{{"w", 1} => f()}.  % compound key associated with an evaluated expression

这里的 A 和 B 可以是任何表达式。

旧的主键值会被新的替换：

	1> #{1 => a, 1 => b}.
	#{1 => b }
	2> #{1.0 => a, 1 => b}.
	#{1 => b, 1.0 => a}

Updating Maps

	M#{ K => V }

更新已经存在的键值，如果不存在 K 主键就触发异常，返回一个新的映射：

	M#{ K := V } 

Examples:

	M0 = #{},
	M1 = M0#{a => 0},
	M2 = M1#{a => 1, b => 2},
	M3 = M2#{"function" => fun() -> f() end},
	M4 = M3#{a := 2, b := 3}.  % 'a' and 'b' was added in `M1` and `M2`.

More examples:

	1> M = #{1 => a}.
	#{1 => a }
	2> M#{1.0 => b}.
	#{1 => a, 1.0 => b}.
	3> M#{1 := b}.
	#{1 => b}
	4> M#{1.0 := b}.
	** exception error: bad argument


Maps in Patterns

	#{ K := V } = M

映射 M 中的 K 必须是 guard expression，并绑定了变量。如果 V 是没有绑定的值，就会绑定到 K，如果 V 是绑定的值，必需和映射 M 中的主键 K 的值匹配。

Example:

	1> M = #{"tuple" => {1,2}}.
	#{"tuple" => {1,2}}
	2> #{"tuple" := {1,B}} = M.
	#{"tuple" => {1,2}}
	3> B.
	2.

相似地，多值模式匹配：

	#{ K1 := V1, .., Kn := Vn } = M

主键 K1 .. Kn 是字面表达式或是绑定的变量，如果，所有主键在 M 中存在都匹配，那么 V1 .. Vn 匹配到相应主键的对应值。

模式匹配满足以下任一条件即为失败：

- A badmatch exception.
- Or resulting in the next clause being tested in function heads and case expressions.

映射的模式匹配只可用 := 分隔符号，顺序是不重要的，重复的主键也是可以的，空映射也可以匹配，只要以下的 Expr 是映射类型：

	#{ K := V1, K := V2 } = M
	#{} = Expr

用表达式作为主键，要求 List 已经绑定变量：

	#{{tag,length(List)} := V} = Map


Matching Syntax

	%% only start if not_started
	handle_call(start, From, #{ state := not_started } = S) ->
	...
		{reply, ok, S#{ state := start }};

	%% only change if started
	handle_call(change, From, #{ state := start } = S) ->
	...
		{reply, ok, S#{ state := changed }};

使用 maps 库函数：

```sh
> Map = #{ key1 => val1, key2 => val2 }.
#{key1 => val1,key2 => val2}
> maps:get(key1, Map, "Default value").
val1
> maps:get(key3, Map, "Default value").
"Default value"
```


### 🐣 List 列表
- https://www.erlang.org/doc/man/lists
- [List Comprehensions](https://erlang.org/doc/programming_examples/lists.html)
- [List Handling](https://erlang.org/doc/efficiency_guide/listHandling.html)

List 就是我们经常说的链表，数据结构里学的那个。但 List 类型在 Erlang 里使用极其频繁，因为用起来很方便。

List 可以包含各种类型的值:

	1> [1, 2, 3, {numbers,[4,5,6]}, 5.34, atom].
	[1,2,3,{numbers,[4,5,6]},5.34,atom]

上面这个 list 包含了 3 个数值类型和一个 tuple，一个浮点数，一个 atom 类型。

来看看这个：

	2> [97, 98, 99].
	"abc"

卧槽这什么意思？！因为 Erlang 的 String 类型其实就是 List！所以 erlang shell 自动给你显示出来了。就是说如果你这么写 "abc" 等效 [97, 98, 99]。

注意，链表存储空间比纯字符串数组大，拼接等操作也费时，所以一般使用字符串的时候，用 Erlang 的 Binary 类型，这样写：`<<"abc">>` 内存消耗就小很多了。

开始你可能不大明白 tuple 跟 list 的区别，这样吧：

- 当你知道你的数据结构有多少项的时候，用 Tuple；
- 当你需要动态长度的数据结构时，用 List。

List 处理:

	5> [1,2,3] ++ [4,5].
	[1,2,3,4,5]
	6> [1,2,3,4,5] -- [1,2,3].
	[4,5]
	7> [2,4,2] -- [2,4].
	[2]
	8> [2,4,2] -- [2,4,2].
	[]
	9> [] -- [1, 3].
	[]
	11> hd([1,2,3,4]).  
	1
	12> tl([1,2,3,4]).
	[2,3,4]

- `++` 运算符是往左边的那个 List 尾部追加右边的 List。
- `--` 是移除操作符，如果左边的 List 里不包含需要移除的值，也没事儿。不要拿这种东西来做面试题，这样会没朋友的。
- `hd/1` 函数是获取 Head。
- `tl/1` 函数是获取 Tail，和 hd/1 都是 Erlang 内置函数 BIF - Built-In-Function。

链表嘛你知道的，往链表尾部追加，需要先遍历这个链表，找到链表的尾部。 所以 "abc" ++ "de" 这种的操作的复杂度，取决于前面 "abc" 的长度。

第一行里你也看到了，List 的追加操作会有性能损耗，`lists:append/2` 跟 ++ 是一回事儿，所以我们需要一个从头部插入 List 的操作:

	13> List = [2,3,4].
	[2,3,4]
	14> NewList = [1|List].
	[1,2,3,4]
	15> [1, 2 | [0]].
	[1,2,0]
	16> [1, 2 | 0].
	[1,2|0]

注意这个 `|` 操作的左边应该放元素，右边应该放 List。左边元素有好几个的话，erlang 会帮你一个一个的插到头部。如果右边放的不是 List，像 `[1, 2 | 0]` 这种叫不适 improper list。虽然你可以生成这种列表，但不要这么做，代码里出现这种一般就是个 bug，忘了这种用法吧。

因为，Erlang 内部实现列表是链表数据结构，有一个 Head 指向链表第一个元素，和一个 Tail 指向其余的项。所以前面使用 `++` 操作连接两个列表其实是很消耗时间的操作，因为要枚举整个链表，找到最后一项，再将第二个列表拼接到第一个列表的末端。

List 可以分解为 `[Head|Tail]`，仔细看一下这几行体会一下：

	20> [1 | []].
	[1]
	21> [2 | [1 | []]].
	[2,1]
	22> [3 | [2 | [1 | []] ] ].
	[3,2,1]

实践中我们经常会从一个 List 取出需要的那些元素，然后做处理，最后再将处理过的元素重新构造成一个新的元素。

你马上就想到了 map，reduce。在 Erlang 里，我们可以用`列表推理` List Comprehensions 语法，很方便的做一些简单的处理。

下例，取出 [1,2,3,4] 每个元素，然后乘 2，返回值再组成一个新的 List，后面再取出列表里所有偶数。

	1> [2*N || N <- [1,2,3,4]].
	[2,4,6,8]
	2> [X || X <- [1,2,3,4,5,6,7,8,9,10], X rem 2 =:= 0].
	[2,4,6,8,10]

使用 lists 库函数：

	lists:sum ([1,2,3]).      % 6
	lists:flatlength ([1,2,3]). % 3

Erlang 的 list 在 c 语言实现中是链表结构的 ETERM 数组，list 本身也是一个 ETERM，指向这个结构的头部。这个数据结构本身不包含长度信息，所以获取 list 元素的数量也需要遍历。

List Comprehensions 列表推断表达式是对列表元素进行运算并返回新列表的一种方式，`||` 符号就表达一个列表推断表达式，其左侧为新列表元素，其右侧是一组 Guard 表达式。注意 `<-` 符号从右侧的列表中产生一个表达式，即左侧为生成的表达式，后续逗号分隔的是一个 Guard Expression，它需要返回 true 时，整个 Guard Sequence 表达式才成立。生成表达式可以单独作为新列表的元素值，也可以进行排列组合运算。

```erlang
> [X || X <- [1,2,a,3,4,b,5,6], X > 3].
[a,4,b,5,6]

> [X || X <- [1,2,a,3,4,b,5,6], is_integer(X), X > 3].
[4,5,6]

> [{X, Y} || X <- [1,2,3], Y <- [a,b]].
[{1,a},{1,b},{2,a},{2,b},{3,a},{3,b}]
```

以下是一个利用列表推断产生 Permutations 变化组合的示范：

```erlang
perms([]) -> [[]];
perms(L) -> [[H|T] || H <- L, T <- perms(L--[H])].
> perms([b,u,g]).
[[b,u,g],[b,g,u],[u,b,g],[u,g,b],[g,b,u],[g,u,b]]
```

根据排列组合的规则，推断式中两个列表中的元素会依次被枚举处理，而其中后一个列表就是前一个列表中移除当前枚举元素的余下部分，利用这一点，就可以产生列表所有元素的不同变化组合。

示范使用列表推断进行类似 QuickSort 排序的算法操作：

```erlang
sort([]) -> [];
sort([Pivot|List]) ->
    sort([X || X <- List, X < Pivot]) 
    ++ [Pivot] ++ 
    sort([X || X <- List, X >= Pivot]).
```

在需要考虑性能的场合不能使用列表 ++ 列表这种低效率的运算，因为将列表后缀到另一个列表需要枚举所有元素。

QuickSort 快速排序算法的核心思想是分而治之：把数组列表根据参考值 Pivot 分两段，左侧小右侧在，再对左右两边执行同样的递归操作。


以下是官方文档中两个列表示范例子：
https://www.erlang.org/doc/getting_started/seq_prog

```erlang
-module(tut4).

-export([list_length/1]).

list_length([]) ->
    0;    
list_length([First | Rest]) ->
    1 + list_length(Rest).
```

```erlang
-module(tut8).

-export([reverse/1]).

reverse(List) ->
    reverse(List, []).

reverse([Head | Rest], Reversed_List) ->
    reverse(Rest, [Head | Reversed_List]);
reverse([], Reversed_List) ->
    Reversed_List.
```

因为是 pattern matching 编程模式，包括函数参数的传递也是，比如对一个列表进行反转操作，reverse([1,2,3])，首先调用的是 reverse/1 函数，它再调用 reverse/2，最后递归调用直接列表中 Rest 所代表的列表后尾不同有更多元素时，才调用最后一个 reverse/2 方法，也即是 Rest 与空列表 [] 相匹配的最后形式。注意：reverse/2 两种形式对应了两种匹配模式规则，两者之间使用 ; 号间隔开，与常规使用 . 点分隔的 reverse/1 之间的差别在于：句点表示一个完整的函数定义，分号表示函数参数列表的模式匹配规则分隔。


### 🐣 Records 记录体
- http://erlang.org/doc/reference_manual/records.html
- http://erlang.org/doc/programming_examples/records.html
- https://www.cnblogs.com/me-sa/archive/2011/12/31/erlang0027.html
- http://erlang.org/doc/getting_started/record_macros.html

前面讲过 tagged tuple，但它用起来还不够方便，因为没有个名字，也不好访问其中的变量。

	-record(Name,{
			key1 = Default1,
			key2 = Default2,
			key3, %% 默认值是 undefined
			...
			}).

Erlang 的 record 类型可以提个名字访问：

	-module(records).
	-export([get_user_name/1,
			 get_user_phone/1]).

	-record(user, {name, phone }).

	get_user_name(#user{name=Name}) -> Name.

	get_user_phone(#user{phone=Phone}) -> Phone.

编译测试：

```erlang
	$ erl
	Eshell V8.3  (abort with ^G)
	1> c(records).
	{ok,records}
	2> rr(records).
	[user]
	4> Shawn = #user{name = <<"Shawn">>, phone = <<"18253232321">>}.
	#user{name = <<"Shawn">>,phone = <<"18253232321">>}
	5> records:get_user_phone(Shawn).
	<<"18253232321">>
	6> records:get_user_name(Shawn).
	<<"Shawn">>

	7> records:get_user_name({user, <<"Shawn">>, <<"18253232321">>}).
	<<"Shawn">>

	8> Shawn#user.name.
	<<"Shawn">>
	9> #user.name.
	2
```

程序解释：

- 使用 # 运算符创建记录体实例。
- `#user{}` 相当默认值 `{user, name, phone}`，是第一个元素为 user 的 tagged tuple。
- `#user.name` 是这个 tuple 里 name 字段的位置号 2。
- Record 字段的位置 Index 等都是约定从 1 开始的。
- Shawn#user.name 的意思是取 Shawn 里的第 2 个元素。

记录体在 Erlang 内部表达就是 tuple 元组的形式，这会在编译过程中将记录体转换为元组，如下：

	-record(Name, {Field1,...,FieldN}).

	{Name,Value1,...,ValueN}

每个 ValueI 对应记录体 FieldI 的值。

对每个使用记录体的模块，编译器会自动添加函数获取记录体的信息：

	record_info(fields, Record) -> [Field]
	record_info(size, Record) -> Size

Size 就是对应 tuple 的大小，另外 #Record.Name 返回 tuple 中的 Name 索引位置。



定义记录 record 可以包含在 .erl 源代码或在 .hrl 文件中：

	-record(todo,{status=reminder,who=joe,text}).

在 Erlang shell 创建 record 实例，必须先读取记录的定义，使用命令 rr(read records)：

	1>rr("records.hrl").

注意: rr 方法支持通配符，比如 `rr("*")`，使用 rf(record free) 函数释放掉记录的定义。

有个内置函数 is_record(Term, RecordTag) 判断记录类型：

	is_person(P) when is_record(P, person) ->
		true;
	is_person(_P) ->
		false.

	foo(P) when is_record(P, person) -> a_person;
	foo(_) -> not_a_person.

Record 是一个编译时的功能，在 Erlang VM 中并没有专门的数据类型，在线上解决问题有时候会遇到要在 shell 中使用 record。在 shell 中使用 rd 命令构造 record 定义，构造 record 定义编写 ets:match 的匹配模式就方便多了。另一种方法是直接使用 record 对应的 tuple 结构。

	Eshell V5.9 (abort with ^G)
	1> rd(film ,{ director, actor, type, name,imdb}).
	film
	2> F =#film{}.
	#film{director = undefined,actor = undefined,
	type = undefined,name = undefined,imdb = undefined}
	3> F#film.type.
	undefined
	4> F#film.type=23.
	* 1: illegal pattern
	5> F2 =F#film{type=23}.
	#film{director = undefined,actor = undefined,type = 23,
	name = undefined,imdb = undefined}

Record 通过 # 符号来创建，更新 Record 和创建 Record 很类似，模式匹配也使用同样的语法 Records in Patterns： 

	Opts = #person{name=<<"Jean">>, Phone=<<"020-12345">>},  
	NewOpts = Opts#person{name="Jim"}.  

这里首先创建一个 person 绑定到 Opts 变量，然后 NewOpts 创建了一个 Opts 的副本，并指定新的名字绑定到 NewOpts。 

模式匹配，假如定义 person 记录，下面的模式匹配中会将 P3 中的名子绑定到 Name 变量。

	> rd(person, {name = "", phone = [], address}).
	person
	> P3 = #person{name="Joe", phone=[0,0,7], address="A street"}.
	#person{name = "Joe",phone = [0,0,7],address = "A street"}
	> #person{name = Name} = P3, Name.
	"Joe"

守卫中的记录体匹配 Records in Guards

	handle(Msg, State) when Msg==#msg{to=void, no=3} ->
		...

	handle(Msg, State) when State#state.running==true ->
		...

	is_person(P) when is_record(P, person) ->
		true;
	is_person(_P) ->
		false.

Erlang/OTP R14 支持记录体嵌套 Nested Records 的访问或更新省略圆括号：

	-record(nrec0, {name = "nested0"}).
	-record(nrec1, {name = "nested1", nrec0=#nrec0{}}).
	-record(nrec2, {name = "nested2", nrec1=#nrec1{}}).

	N2 = #nrec2{},

	% Before R14
	"nested0" = ((N2#nrec2.nrec1)#nrec1.nrec0)#nrec0.name,
	N0n = ((N2#nrec2.nrec1)#nrec1.nrec0)#nrec0{name = "nested0a"},
	
	% Since R14
	"nested0" = N2#nrec2.nrec1#nrec1.nrec0#nrec0.name,
	N0n = N2#nrec2.nrec1#nrec1.nrec0#nrec0{name = "nested0a"},


## 🍀 Operators 四类操作符

Arithmetic operators

| Operator	| Description	| Example |
| :--------	| :--------	| :--------	|
| +	| 两数相加	| 1 + 2 = 3 |
| −	| 两数相减	| 1 - 2 = -1 |
| *	| 两数相乘	| 2 * 2 = 4 |
| /	| 两数相除	| 2 / 2 = 1 |
| rem	| 求余	| 3 rem 2 = 1 |
| div	| 整除	| 3 div 2 will give 1 |

Relational operators

| Operator	| Description	| Example |
| :--------	| :--------	| :--------	|
| ==	| 判断是否相等	| 2 = 2 = true |
| /=	| 判断是否不等	| 3 /= 2 = true |
| <		| 左侧是否小于右侧	| 2 < 3 = true |
| >		| 左侧是否大于右侧	| 3 > 2 = true |
| =<	| 左侧是否小于或等于右侧	| 2 =<3 = true |
| >=	| 左侧是否大于或等于右侧	| 3 >= 2 = true |

Logical operators

| or	| 逻辑或运算	| true or true = true |
| and	| 逻辑与运算	| True and false = false |
| not	| 逻辑非运算	| not false = true |
| xor	| 逻辑异或	| True xor false = true |

Bitwise operators 比特位运算符号有四个，在逻辑运算符前缀 b 就是对应的位运算。另外还有两个移位操作：

- bsl (Bit Shift Left)
- bsr (Bit Shift Right)

注意，以下数值是十六进制，如下：

	-module(helloworld). 
	-export([start/0]). 

	start() -> 
	   io:fwrite("~w~n",[00111100 band 00001101]), 
	   io:fwrite("~w~n",[00111100 bxor 00111100]), 
	   io:fwrite("~w~n",[bnot 00111100]), 
	   io:fwrite("~w~n",[00111100 bor 00111100]).

Output

	76
	0
	-111101
	111100


## 🍀 Function 函数
- https://math.fandom.com/wiki/Arity
- https://www.erlang.org/doc/reference_manual/functions
- https://www.erlang.org/doc/reference_manual/expressions#funs
- https://www.erlang.org/doc/getting_started/seq_prog#modules-and-functions
- [Funs Programming Example](https://erlang.org/doc/programming_examples/funs.html)
- [Function Call](https://erlang.org/doc/reference_manual/expressions.html#function-calls)

Erlang 函数的一般表达形式是 M:F/A，即 `Module:FunctionName/Arity`，其中 Arity 意思为元素，是逻辑、数学术语，表示函数参数的数量。比如一个 Nullary 形式的函数没有参数，Unary 形式的函数有一个参数，n-ary function 就有 n 个参数，等等。

01. Nullary means 0-ary.
02. Unary means 1-ary.
03. Binary means 2-ary.
04. Ternary means 3-ary.
05. Quaternary means 4-ary.
06. Quinary means 5-ary.
07. Senary means 6-ary.
08. Septenary means 7-ary.
09. Octary means 8-ary.
10. Nonary means 9-ary.
11. Polyadic, multary and multiary mean any number of operands (or parameters).
12. n-ary means n operands (or parameters), but is often used as a synonym of "polyadic".

函数定义的一般写法如下，使用分号分隔函数不同参数列表模式匹配的形式，使用句点作为函数定义的结束：

	Name(Pattern11,...,Pattern1N) [when GuardSeq1] ->
	    Body1;
	...;
	Name(PatternK1,...,PatternKN) [when GuardSeqK] ->
	    BodyK.

匿名函数即 Fun Expression，示范：

	F = fun (Arg1, Arg2, ... ArgN) ->
			...
		end

函数表达式一般形式如下：
https://www.erlang.org/doc/reference_manual/expressions#funs

	fun
	    [Name](Pattern11,...,Pattern1N) [when GuardSeq1] ->
	              Body1;
	    ...;
	    [Name](PatternK1,...,PatternKN) [when GuardSeqK] ->
	              BodyK
	end

匿名函数，没有与任何名称相关联：

```erlang
	-module(helloworld). 
	-export([start/0]). 

	start() -> 
	   Fn = fun() -> 
	       io:fwrite("Anonymous Function") end, 
	   Fn().
```

匿名函数定义要点：

- 匿名函数使用 fun() 形式定义
- 该函数被分配给一个名为 Fn 的变量
- 该函数是通过变量名称来调用的

Erlang 的世界观认为，有输入就一定有输出，Erlang 是面向数据和消息，没有 return 这样的流程控制语句，尽管可以使用 throw/1 来提供结束函数，只是大多喜欢 try catch 验证条件。


示例，tut1.erl 文件定义了 tut1 模块，其中定义一个阶乘函数，比如 factorial 4 等于 4 * 3 * 2 * 1，结果是 24：

```erlang
-module(tut1).
-export([fac/1]).

fac(1) ->
    1;
fac(N) ->
    N * fac(N - 1).
```

因为是 pattern matching 编程模式，包括函数参数的传递也是。注意：fac/1 两种形式对应了两种匹配模式规则，两者之间使用 ; 号间隔开，每段函数定义即是 function_clause。与常规使用 . 点分隔的函数之间的差别在于：句点表示一个完整的函数定义，分号表示函数参数列表的模式匹配规则分隔。


函数可以使用保护序列来防止输入无效参数，TypeScript 就有类似的 Type Guards 类型守卫，语法如下：

	FunctionName(Pattern1… PatternN) [when GuardSeq1]->
	Body;

示例，如果 add 函数被调用为 add(3)，该程序将会出现错误：

	-module(helloworld). 
	-export([add/1,start/0]). 

	add(X) when X>3 -> 
	   io:fwrite("~w~n",[X]). 

	start() -> 
	   add(4).


Erlang 里面函数是用 `函数名/参数个数` 来表示的，如果两个函数的函数名与参数个数都一样，他们就是一个函数的两个分支，必须写在一起，分支之间用分号分割，对参数列表应用模式匹配规则进行分支选择。

如下，clauses.erl 模块定义一个函数的多个分支 clause 就要用 `;` 分割：

```erlang
	-module(clauses).
	-export([add/2]).

	%% goes into this clause when both A and B are numbers
	add(A, B) when is_number(A), is_number(B) ->
	  A + B;
	%% goes this clause when both A and B are lists
	add(A, B) when is_list(A), is_list(B) ->
	  A ++ B.
	%% crashes when no above clauses matched.
```

上面代码里，定义了一个函数：add/2. 这个函数有两个 clause 分支，一个是计算数字相加的，一个是计算字符串相加的。

代码里 when 是一个 Guard 关键字，匹配模式 Pattern Matching 和保护序列 Guard 后面讲解。

运行 add/2 时会从上往下挨个匹配：

	$ erl -pa ebin/
	Eshell V8.3  (abort with ^G)
	1> clauses:add("ABC", "DEF").
	"ABCDEF"
	2> clauses:add(1, 2).
	3
	3> clauses:add(1, 2.4).
	3.4
	4> clauses:add(1, "no").
	** exception error: no function clause matching clauses:add(1,"no") (clauses.erl, line 4)

第一个 clauses:add 匹配的是定义中的第二个从句，由于类型守卫确实。最后一个 clauses:add 都没匹配上，崩溃了。

函数可以像其它变量一样传递给函数使用，基本语法是 `fun funtionName/Arity`，也可以使用带有模块名称的全称，这种形式就需要将函数导出，因为属性外部调用形式。以下示范代码演示如何抽像一个日志数据输出设备接口，通过不同的设备函数实现数据写入到不同的设备中：

```erlang
-module(funpass).
-export([start/0,floppy/1, hardDisk/1, compactDisck/1]).

start() ->
    log("bad apple", fun ?MODULE:floppy/1),
    log("green apple", fun ?MODULE:hardDisk/1),
    log("sweet apple", fun ?MODULE:compactDisck/1).

log(Data,Device) ->
    Device(Data).

floppy(Data) ->
    io:format("Write to Floppy: ~p~n", [Data]).
hardDisk(Data) ->
    io:format("Write to HardDisk: ~p~n", [Data]).
compactDisck(Data) ->
    io:format("Write to CompactDisck: ~p~n", [Data]).
```


函数尾递归 Tail recursion 是一种节省资源提升函数运行效率的优化手段。将递归调用放置到函数最末端，这样就不需要当前函数栈的资源。优化后，就不需要为尝试递归调用分配巨量的资源。

```erlang
loop(N) ->
    io:format("~w~n", [N]),
    loop(N+1).
```

正是基于 Tail recursiion，Erlang 没有提供循环语句，通过尾递归函数即可以模拟循环，即使不停地运行也不会将栈空间耗尽，同时还能达到和 while 循环一样高效。


函数式编程中还有一个常用概念：高阶函数 High Order Component，接受 fun 作为参数并按原样返回 fun 的函数都称为高阶函数。可以将 HoC 理解为一个函数包装工具，它本身也是函数。


Efficiency guide 指导手册中按效率罗列出不同的函数调用形式，注意大写开头表的是变量：
https://www.erlang.org/doc/efficiency_guide/functions.html

This is a rough hierarchy of the performance of the different types of function calls:

1. Calls to local or external functions (`foo()`, `m:foo()`) are the fastest calls.
2. Calling or applying a fun (`Fun()`, `apply(Fun, [])`) is just a little slower than external calls.
3. Applying an exported function (`Mod:Name()`, `apply(Mod, Name, [])`) where the number of arguments is known at compile time is next.
4. Applying an exported function (`apply(Mod, Name, Args)`) where the number of arguments is not known at compile time is the least efficient.


## 🍀 Type specifications 类型规范指示
https://www.erlang.org/doc/reference_manual/typespec.html
https://www.erlang.org/doc/reference_manual/opaques

Erlang 是一次性赋值（single-assignment variable）的动态类型的函数式编程语言。动态类型语言的数据类型不会在编译阶段决定，而是在运行时做变量的类型绑定。并且在运行时可以改变类型结构，例如新的函数、对象、甚至代码可以被引进，已有的函数可以被删除或是其他结构上的变化。

为了提升编码时的类型辅助信息，Erlang 引入了类型规范指示以实现以下目标：

1. To document function interfaces
2. To provide more information for bug detection tools, such as Dialyzer
3. To be exploited by documentation tools, such as EDoc, for generating program documentation of various forms
4. To replaces the purely comment-based @type and @spec declarations used by EDoc.

Given the function sum/2 which computes the sum of two numbers:

```erlang
-spec sum(number(), number()) -> number().
sum(A, B) ->
  A + B.
```

类型规范描述一组 Erlang terms，类型包含一组预定义类型，以及从中构造新类型。比如预定义类型 integer(), atom(), 和 pid() 等等，预定义类型表示属于此 Erlang terms 集合类型的典型的无限集，比如 atom() 表示 Erlang 中所有的 atoms 类型。

对于 integers 或者 atoms，可以是 singleton 类型（单态类型），比如 -1 或者 42 这样的单态类型，又或者是 'foo' 与 'bar' 这样的单态 atoms 类型。其它类型都使用类型联合构建。在一个类型与其子类型之间的类型并集中，该子类型被超类型吸收。因此，不将并集类型视为并集的子类型。例如，以下两个类型并集等价：

	atom() | 'bar' | integer() | 42

	atom() | integer()

由于类型之间存在子类型关系，因此类型会形成交错结构，但其中最顶层的类型元素为 `any()` 表示所有 Erlang terms 的集合，而底层类型元素为 `none()` 表示空项的 terms 集合，除了 `dynamic()` 类型以外。

其中 `dynamic()` 这种类型是为了方便 Erlang 逐步类型化引入的，类似 Python 中的 Any 类型，也类似于 TypeScript 中的 any 类型，以及 Hack 中的 dynamic 类型。`any()` 和 `dynamic()` 的交互方式相同，静态类型分析工具 Dialyzer 并不会区别对象，这个工具会将分析结果写入 Persistent Lookup Table (PLT)。
https://www.erlang.org/doc/apps/dialyzer/dialyzer_chapter.html

To facilitate gradual typing of Erlang, the type `dynamic()` is provided. It is similar to Any in Python, any in TypeScript and dynamic in Hack. `any()` and `dynamic()` interact with success typing the same way, so Dialyzer doesn't distinguish between them.

预定义类型的集合和类型的语法如下：

```erlang
  Type :: any()                 %% The top type, the set of all Erlang terms
        | none()                %% The bottom type, contains no terms
        | dynamic()
        | pid()
        | port()
        | reference()
        | []                    %% nil
        | Atom
        | Bitstring
        | float()
        | Fun
        | Integer
        | List
        | Map
        | Tuple
        | Union
        | UserDefined           %% described in Type Declarations of User-Defined Types

  Atom :: atom()
        | Erlang_Atom           %% 'foo', 'bar', ...

  Bitstring :: <<>>
             | <<_:M>>          %% M is an Integer_Value that evaluates to a positive integer
             | <<_:_*N>>        %% N is an Integer_Value that evaluates to a positive integer
             | <<_:M, _:_*N>>

  Fun :: fun()                  %% any function
       | fun((...) -> Type)     %% any arity, returning Type
       | fun(() -> Type)
       | fun((TList) -> Type)

  Integer :: integer()
           | Integer_Value
           | Integer_Value..Integer_Value      %% specifies an integer range

  Integer_Value :: Erlang_Integer              %% ..., -1, 0, 1, ... 42 ...
                 | Erlang_Character            %% $a, $b ...
                 | Integer_Value BinaryOp Integer_Value
                 | UnaryOp Integer_Value

  BinaryOp :: '*' | 'div' | 'rem' | 'band' | '+' | '-' | 'bor' | 'bxor' | 'bsl' | 'bsr'

  UnaryOp :: '+' | '-' | 'bnot'

  List :: list(Type)                           %% Proper list ([]-terminated)
        | maybe_improper_list(Type1, Type2)    %% Type1=contents, Type2=termination
        | nonempty_improper_list(Type1, Type2) %% Type1 and Type2 as above
        | nonempty_list(Type)                  %% Proper non-empty list

  Map :: #{}                                   %% denotes the empty map
       | #{AssociationList}

  Tuple :: tuple()                             %% denotes a tuple of any size
         | {}
         | {TList}

  AssociationList :: Association
                   | Association, AssociationList

  Association :: Type := Type                  %% denotes a mandatory association
               | Type => Type                  %% denotes an optional association

  TList :: Type
         | Type, TList

  Union :: Type1 | Type2
```

为了便利，提供了以下内置类型定义：

	| Built-in type	| Defined as
	| --------- | --------- |
	| term()			| any()
	| binary()			| <<_:_*8>>
	| nonempty_binary()	| <<_:8, _:_*8>>
	| bitstring()		| <<_:_*1>>
	| nonempty_bitstring()	| <<_:1, _:_*1>>
	| boolean()			| 'false' | 'true'
	| byte()			| 0..255
	| char()			| 0..16#10ffff
	| nil()			| []
	| number()			| integer() | float()
	| list()			| [any()]
	| maybe_improper_list()	| maybe_improper_list(any(), any())
	| nonempty_list()	| nonempty_list(any())
	| string()			| [char()]
	| nonempty_string()	| [char(),...]
	| iodata()			| iolist() | binary()
	| iolist()			| maybe_improper_list(byte() | binary() | iolist(), binary() | [])
	| map()			| #{any() => any()}
	| function()		| fun()
	| module()			| atom()
	| mfa()			| {module(),atom(),arity()}
	| arity()			| 0..255
	| identifier()		| pid() | port() | reference()
	| node()			| atom()
	| timeout()			| 'infinity' | non_neg_integer()
	| no_return()		| none()

Table 7.1:   Built-in types, predefined aliases

In addition, the following three built-in types exist and can be thought as defined below, though strictly their "type definition" is not valid syntax according to the type language defined above.

| Built-in type		| Can be thought defined by the syntax
| ------------ | ------------ |
| non_neg_integer()		| 0..
| pos_integer()			| 1..
| neg_integer()			| ..-1

Table 7.2:   Additional built-in types

对于一些极少乃至的类型，还可以使用非常长的名称：

	nonempty_maybe_improper_list() :: nonempty_maybe_improper_list(any(), any())
	nonempty_improper_list(Type1, Type2)
	nonempty_maybe_improper_list(Type1, Type2)

同样为了方便起见，允许使用 Record 符号。对于相应的元组类型，Record 更简略：

    Record :: #Erlang_Atom{} | #Erlang_Atom{Fields}

Records are extended to possibly contain type information. This is described in Type Information in Record Declarations.

Erlang/OTP 26 开始可以覆盖预定义类型，使用 -type 定义和内建类型相同名称的类型。假设新版本引入了一个 gadget() 类型，等价 reerence() 类型，那么使用以下方式重新定义为 Recode 类型：

	-type gadget() :: {'gadget', reference()}.

	-type gadget() :: #{}.

用户定义类型 User-Defined Types，按以下两种方式定义，类型名称是原子跟着圆括号：

    -type my_struct_type() :: Type.
    -opaque my_opaq_type() :: Type.

其中的 `Type` 即是前面预定义类型语法中定义的 Type，当前的限制是，Type 除了预定义类型外，只能是以下两种形式：

1. Module-local type, that is, with a definition that is present in the code of the module
2. Remote type, that is, type defined in, and exported by, other modules; more about this soon.

两种形式示范如下，其中 T 为类型的原子名称，A 表示 Arity，即 T 类型的参数：

	-type orddict(Key, Val) :: [{Key, Val}].
	-export_type([T1/A1, ..., Tk/Ak]).
	-export_type([my_struct_type/0, orddict/2]).

假设，以上的类型经由 'mod' 模块导出，那么在其它模块中按以下语法引用这些类型：

    mod:my_struct_type()
    mod:orddict(atom(), term())


Erlang 引入类型不透明性的主要目的是隐藏数据类型的实现，避免类型实现从实现模块的外部观察，使得 API 在不断发展同时最大限度地降低破坏类型消费者的风险。运行时不检查类型不透明度。Dialyzer 静态检查工具提供了一些不透明度检查，但其余的都符合惯例。

Record Declarations 语法参考：

    -record(rec, {field1 :: Type1, field2, field3 :: Type3}).
    -record(rec, {field1 :: Type1, field2 :: any(), field3 :: Type3}).
    -record(rec, {field1 = [] :: Type1, field2, field3 = 42 :: Type3}).

一旦定义了 Record 类型，就可以按以下方式使用，未指定的字段按定义中的字段类型处理：

    #rec{}
    #rec{some_field :: Type}

Specifications for Functions 语法参考：

	-spec Function(ArgType1, ..., ArgTypeN) -> ReturnType.
	-spec Module:Function(ArgType1, ..., ArgTypeN) -> ReturnType.
	-spec Function(ArgName1 :: Type1, ..., ArgNameN :: TypeN) -> RT.

	-spec id(X) -> X.
    -spec id(X) -> X when X :: tuple().

	-spec foo(T1, T2) -> T3
         ; (T4, T5) -> T6.

为了文档生成包含信息更丰富，可以使用模块前缀，或参数名也可以添加。可以为输入参数和输出之间添加类型约束。

对于重载函数类型，当前的一个限制是，会导致 Dialyzer 发出警告：参数类型的域不能重叠。


## 🍀 Type Conversions 类型转换

Erlang 核心模块 erlang 提供以下类型转换内置函数，Built-in Functions (BIFs)：

```erlang
    1> atom_to_list(hello).
    "hello"
    2> list_to_atom("hello").
    hello
    3> binary_to_list(<<"hello">>).
    "hello"
    4> binary_to_list(<<104,101,108,108,111>>).
    "hello"
    5> list_to_binary("hello").
    <<104,101,108,108,111>>
    6> float_to_list(7.0).
    "7.00000000000000000000e+00"
    7> list_to_float("7.000e+00").
    7.0
    8> integer_to_list(77).
    "77"
    9> list_to_integer("77").
    77
    10> tuple_to_list({a,b,c}).
    [a,b,c]
    11> list_to_tuple([a,b,c]).
    {a,b,c}
    12> term_to_binary({a,b,c}).
    <<131,104,3,100,0,1,97,100,0,1,98,100,0,1,99>>
    13> binary_to_term(<<131,104,3,100,0,1,97,100,0,1,98,100,0,1,99>>).
    {a,b,c}
    14> binary_to_integer(<<"77">>).
    77
    15> integer_to_binary(77).
    <<"77">>
    16> float_to_binary(7.0).
    <<"7.00000000000000000000e+00">>
    17> binary_to_float(<<"7.000e+00">>).
    7.0
```

多种数据类型都可以转换成 list，字符串就是列表类型：

	atom_to_list(hello).
	"hello"
	binary_to_list(<<"hello">>).
	"hello"
	binary_to_list(<<104,101,108,108,111>>).
	"hello"
	float_to_list(7.0).
	"7.00000000000000000000e+00"
	integer_to_list(77).
	"77"

	tuple_to_list({a,b,c}).
	[a,b,c]

Number 转 binary 都转成了字符串

	integer_to_binary(77).
	<<"77">>
	float_to_binary(7.0).
	<<"7.00000000000000000000e+00">>
	 

其他的转换

	list_to_atom("hello").
	hello
	list_to_binary("hello").
	<<104,101,108,108,111>>
	list_to_float("7.000e+00").
	7.0
	list_to_integer("77").
	77
	list_to_tuple([a,b,c]).
	{a,b,c}
	term_to_binary({a,b,c}).
	<<131,104,3,100,0,1,97,100,0,1,98,100,0,1,99>>
	binary_to_term(<<131,104,3,100,0,1,97,100,0,1,98,100,0,1,99>>).
	{a,b,c}
	binary_to_integer(<<"77">>).
	77
	binary_to_float(<<"7.000e+00>>").
	7.0

类型判断

	is_atom/1           
	is_binary/1        
	is_bitstring/1      
	is_boolean/1        
	is_builtin/3       
	is_float/1          
	is_function/1       is_function/2      
	is_integer/1        
	is_list/1           
	is_number/1        
	is_pid/1            
	is_port/1           
	is_record/2         is_record/3         
	is_reference/1      
	is_tuple/1



## 🍀 Expressions
https://www.erlang.org/doc/reference_manual/expressions


### 🐣 Escape Sequences

转义符号，在字符串或单引号包括的 atoms 原子类型中使用：

| 转义符号	| 意义 |
| :-----	| :----- |
| \b	| Backspace |
| \d	| Delete |
| \e	| Escape |
| \f	| Form feed |
| \n	| Newline |
| \r	| Carriage return |
| \s	| Space |
| \t	| Tab |
| \v	| Vertical tab |
| \XYZ, \YZ, \Z	| 代表八制字符 XYZ, YZ or Z |
| \xXY	| 代表十六进制字符 XY |
| \x{X...}	| 代表十六进制字符， X... 表示多个十六进制字符 |
| \^a...\^z, \^A...\^Z	| 控制字符 Control A to control Z |
| \'	| Single quote |
| \"	| Double quote |
| \\	| Backslash |


### 🐣 Operator Precedence 运算符优先级

Operator precedence in descending order:
Table 9.6:   Operator Precedence

	| :								|  
	| #								|  
	| Unary + - bnot not				|  
	| / * div rem band and				| Left-associative
	| + - bor bxor bsl bsr or xor		| Left-associative
	| ++ --						| Right-associative
	| == /= =< < >= > =:= =/=	| Non-associative
	| andalso							| Left-associative
	| orelse							| Left-associative
	| catch							|  
	| = !							| Right-associative
	| ?=							| Non-associative

Unary + - 即单目运算中的正负号运算符号。


### 🐣 Guard Sequences 关卡序列
https://www.erlang.org/doc/reference_manual/expressions#guard-sequences

Guard 表达式是 Erlang 编程中最基本的元素，是合法 Erlang 表达式的子集，相当于其它语言的代码语句。

在函数定义中，可以使用 when 加入 Guard Sequences，其作用和 TypeScript 概念 Type Guards 类型守卫一致。

官方文档对 Guard 和 Guard Sequences 概念的解释有点拗口，意思是有两种基本 Guard 形式：

	GuardExpr1,...,GuardExprN
	Guard1;...;GuardK

1. guard 是使用逗号分隔的 guard expresssions，所有子表达式求值为 true 才返回 true；
2. guard sequence 是使用分号分隔的一系列 guards，其中一个子表达式求值为 true 就立即返回 true，后续的不再求值；


假设，learn-you-some-erlang 的作者那边 16 岁才能"开车" (笑)，那我们写个函数判断一下，某个人能不能开车？

	old_enough(0) -> false;
	old_enough(1) -> false;
	old_enough(2) -> false;
	...
	old_enough(14) -> false;
	old_enough(15) -> false;
	old_enough(_) -> true.

上面这个又点太繁琐了，所以我们得另想办法：

	old_enough(X) when X >= 16 -> true;
	old_enough(_) -> false.

然后作者又说了，超过 104 岁的人，禁止开车：

	right_age(X) when X >= 16, X =< 104 ->
	   true;
	right_age(_) ->
	   false.

注意 when 语句里，`,` 逗号表示 and, `;` 分号表示 or, 如果你想用短路运算符的话，用 andalso 和 orelse, 这么写：

	right_age(X) when X >= 16 andalso X =< 104 -> true;

The set of valid guard expressions is a subset of the set of valid Erlang expressions. The reason for restricting the set of valid expressions is that evaluation of a guard expression must be guaranteed to be free of side effects. Valid guard expressions are the following:

01. Variables
02. Constants (atoms, integer, floats, lists, tuples, records, binaries, and maps)
03. Expressions that construct atoms, integer, floats, lists, tuples, records, binaries, and maps
04. Expressions that update a map
05. The record expressions Expr#Name.Field and #Name.Field
06. Calls to the BIFs specified in tables Type Test BIFs and Other BIFs Allowed in Guard Expressions
07. Term comparisons
08. Arithmetic expressions
09. Boolean expressions
10. Short-circuit expressions (andalso/orelse)

Table 9.4:   Type Test BIFs

	is_atom/1 					is_map/1
	is_binary/1 					is_number/1
	is_bitstring/1 					is_pid/1
	is_boolean/1 					is_port/1
	is_float/1 					is_record/2
	is_function/1 					is_record/3
	is_function/2 					is_reference/1
	is_integer/1 					is_tuple/1
	is_list/1 					

Notice that most type test BIFs have older equivalents, without the is_ prefix. These old BIFs are retained for backwards compatibility only and are not to be used in new code. They are also only allowed at top level. For example, they are not allowed in Boolean expressions in guards.

Table 9.5:   Other BIFs Allowed in Guard Expressions

	abs(Number)						max(A, B)
	bit_size(Bitstring)				min(A, B)
	byte_size(Bitstring)				node()
	element(N, Tuple)				node(Pid|Ref|Port)
	float(Term)						round(Number)
	hd(List)						self()
	is_map_key(Key, Map)			size(Tuple|Bitstring)
	length(List)						tl(List)
	map_get(Key, Map)				trunc(Number)
	map_size(Map)					tuple_size(Tuple)



### 🐣 if 条件匹配

条件匹配表达式的一般形式：

```erlang
if
    GuardSeq1 ->
        Body1;
    ...;
    GuardSeqN ->
        BodyN
end
```

按各分支的前后顺序进行匹配，直到其中一条 GuardSeq 匹配，就执行地相应的 Body，其返回值就是 if 表达式的值。

If no guard sequence is evaluated as true, an if_clause run-time error occurs. If necessary, the guard expression true can be used in the last branch, as that guard sequence is always true.

Example:

```erlang
is_greater_than(X, Y) ->
    if
        X>Y ->
            true;
        true -> % works as an 'else' branch
            false
    end
```

if 条件表达式会进行异常处理？文档说 if 只会在匹配到 GuardSeq 求值为 true 时执行相应的分支。示例中 1/0 的求值结果是一个异常，并不是 true。

```sh
1> Fn = fun() -> if 1/0 -> err; true -> ok end end.
#Fun<erl_eval.21.91303403>
2> Fn().
ok
3> 1/0.
** exception error: an error occurred when evaluating an arithmetic expression
     in operator  '/'/2
        called as 1 / 0
```


### 🐣 Case-of 分支

基本 case-of 分支结构语法：

```erlang
case Expr of
    Pattern1 [when GuardSeq1] ->
        Body1;
    ...;
    PatternN [when GuardSeqN] ->
        BodyN
end
```

当其中一个模式与 Expr 匹配，就需要相应的 Body，可以使用类型守卫序列保证匹配只发生在输入正确的数据前提下。

case-of 表达式的值就是相应执行的 Body 返回值。

注意：分支之间的分号，并且最后分支不使用分号，如果 case-of 作为函数体，还需要在 end 后面使用句点。

与 if 条件匹配模式类似，在没有匹配的情况都会引发运行时异常，if 通常使用一个 true 作为默认匹配，case 则使用 _ 作为默认的匹配。

```erlang
is_valid_signal(Signal) ->
    case Signal of
        {signal, _What, _From, _To} ->
            true;
        {signal, _What, _To} ->
            true;
        _Else ->
            false
    end.
```


### 🐣 maybe 可能

maybe is an experimental feature introduced in Erlang/OTP 25. By default, it is disabled. To enable maybe, either use the `-feature(maybe_expr,enable)` directive (from within source code), or the compiler option `{feature,maybe_expr,enable}`.

maybe
    Expr1,
    ...,
    ExprN
end
The expressions in a maybe block are evaluated sequentially. If all expressions are evaluated successfully, the return value of the maybe block is ExprN. However, execution can be short-circuited by a conditional match expression:

Expr1 ?= Expr2
?= is called the conditional match operator. It is only allowed to be used at the top-level of a maybe block. It matches the pattern Expr1 against Expr2. If the matching succeeds, any unbound variable in the pattern becomes bound. If the expression is the last expression in the maybe block, it also returns the value of Expr2. If the matching is unsuccessful, the rest of the expressions in the maybe block are skipped and the return value of the maybe block is Expr2.

None of the variables bound in a maybe block must be used in the code that follows the block.

Here is an example:

maybe
    {ok, A} ?= a(),
    true = A >= 0,
    {ok, B} ?= b(),
    A + B
end
Let us first assume that a() returns {ok,42} and b() returns {ok,58}. With those return values, all of the match operators will succeed, and the return value of the maybe block is A + B, which is equal to 42 + 58 = 100.

### 🐣 Try catch throw
1. https://www.erlang.org/doc/reference_manual/expressions#catch-and-throw
2. https://www.erlang.org/doc/reference_manual/errors

catch 语句用来捕捉表达式的返回值，`catch EXPR`，如果返回的是抛出的异常，则捕捉异常。

```erlang
1> catch 1+2.
3
2> catch 1+a.
{'EXIT',{badarith,[{erlang,'+',[1,a],[]},...
3> catch throw(hello).
hello
4> 1/0.
** exception error: an error occurred when evaluating an arithmetic expression
     in operator  '/'/2
        called as 1 / 0
```

如果异常未曾被 catch 捕获，则触发一个 nocatch 运行时错误。

内建函数 throw(any) 用于抛出异常，异常可以是任何数据。

Before Erlang/OTP 24, the catch operator had the lowest precedence, making it necessary to add parentheses when combining it with the match operator:

```erlang
1> A = (catch 42).
42
2> A.
42
```

Starting from Erlang/OTP 24, the parentheses can be omitted:

```erlang
1> A = catch 42.
42
2> A.
42
```

try 语句相当于加强版的 catch 语句，注意，try 语句中使用的 `catch` 关键字并非是上面介绍的 catch 表达式，它不用来做 `catch EXPR`，try 语句可以用实现以下功能：

1. Distinguish between different exception classes.
2. Choose to handle only the desired ones.
3. Passing the others on to an enclosing try or catch, or to default error handling.

try 语句的基本形式如下，可以使用 try-of 形式增加模式匹配从句，语句中只有 Exprs 触发的异常才会进入 catch 处理流程：

```erlang
try Exprs
catch
    Class1:ExceptionPattern1[:Stacktrace] [when ExceptionGuardSeq1] ->
        ExceptionBody1;
    ClassN:ExceptionPatternN[:Stacktrace] [when ExceptionGuardSeqN] ->
        ExceptionBodyN
end

% It is allowed to omit Class and Stacktrace. An omitted Class is shorthand for throw:
try Exprs
catch
    ExceptionPattern1 [when ExceptionGuardSeq1] ->
        ExceptionBody1;
    ExceptionPatternN [when ExceptionGuardSeqN] ->
        ExceptionBodyN
end

% The try expression can have an of section:
try Exprs of
    Pattern1 [when GuardSeq1] ->
        Body1;
    ...;
    PatternN [when GuardSeqN] ->
        BodyN
catch
    Class1:ExceptionPattern1[:Stacktrace] [when ExceptionGuardSeq1] ->
        ExceptionBody1;
    ...;
    ClassN:ExceptionPatternN[:Stacktrace] [when ExceptionGuardSeqN] ->
        ExceptionBodyN
after
    AfterBody
end

try Exprs after AfterBody end
```

try-of 形式中，如果 Exprs 的求值成功没有发生异常，则模式 Pattern 将以与 case 表达式相同的方式与结果顺序匹配，只是在匹配失败时，则会出现 `try_clause` 运行时错误，而不是 `case_lause` 错误。

try 语句还可以使用一个 after 区块用于处理副作用，无论是否捕捉异常都会执行，相当于 Java 中的 finally 区块。

try 语句除了 end 必须，其它所有区块都是可选项，但是至少要有一个 `catch` 或者 `after` 区块。

简单的 try 语句例子：

```erlang
    try 
        1/0, 1+a
    catch
        error:badarith -> io:format("catch badarith.~n");
        Class:Reason -> io:format("catch exception ~p ~n", [[Class,Reason]])
    end.
```

异常捕捉区块中，模式匹配的规则可以使用精确的 Atom 类型，比如常用的 error，也可以使用变量对错误类型、异常类型进行匹配。Erlang 的错误分为四种类型：

1. Compile-time errors 编译中可以检查的错误，通常是语法错误；
2. Logical errors 逻辑错误，这类问题通常最隐蔽，只是逻辑问题，不会导致程序异常结束；
3. Run-time errors 运行时错误，导致程序不能正常执行，比如不合法的运算 1 + a。
4. Generated errors 生成的错误，比如调用 exit/1 或者 throw/1 方法就可以生成相应的异常。

Erlang 编程语言具有用于处理运行时错误的内置功能。运行时错误也可以通过调用 `error(Reason)`来模拟，运行时错误是 `error` 类型异常。以下表中的异常都可以使用 `erlang:raise/3` 函数生成：

Table 12.1:   Exception Classes.

| Class	| Origin |
| ---- | ---- |
| error	| Run-time error, for example, 1+a, or the process called error/1,2
| exit	| The process called exit/1
| throw	| The process called throw/1

Table 12.2:   Exit Reasons

| Reason		| Type of Error
| ------- | ------- |
| badarg		| Bad argument. The argument is of wrong data type, or is otherwise badly formed.
| badarith		| Bad argument in an arithmetic expression.
| {badmatch,V}	| Evaluation of a match expression failed. The value V did not match.
| function_clause	| No matching function clause is found when evaluating a function call.
| {case_clause,V}	| No matching branch is found when evaluating a case expression. The value V did not match.
| if_clause		| No true branch is found when evaluating an if expression.
| {try_clause,V}	| No matching branch is found when evaluating the of-section of a try expression. The value V did not match.
| undef			| The function cannot be found when evaluating a function call.
| {badfun,F}		| Something is wrong with a fun F.
| {badarity,F}		| A fun is applied to the wrong number of arguments. F describes the fun and the arguments.
| timeout_value		| The timeout value in a receive..after expression is evaluated to something else than an integer or infinity.
| noproc			| Trying to link or monitor to a non-existing process or port.
| noconnection		| A link or monitor to a remote process was broken because a connection between the nodes could not be established or was severed.
| {nocatch,V}		| Trying to evaluate a throw outside a catch. V is the thrown term.
| system_limit		| A system limit has been reached. See Efficiency Guide for information about system limits.

Stack 调用栈追溯数据是一系列 tuples {Module,Name,Arity,ExtraInfo}，最近调用的函数信息在最开头，它可能的形式是 {Module,Name,[Arg],ExtraInfo}。可以使用 erlang:get_stacktrace/0 函数获得异常堆栈。


以下例子使用 after 区块来关闭已经打开的并操作中出现异常的文件，异常可能会在 file:read/2 或者 binary_to_term/1 函数中触发：

```erlang
termize_file(Name) ->
    {ok,F} = file:open(Name, [read,binary]),
    try
        {ok,Bin} = file:read(F, 1024*1024),
        binary_to_term(Bin)
    after
        file:close(F)
    end.
```

以下是利用 try 语句模块 catch Expr 的演示：

```erlang
try Expr
catch
    throw:Term -> Term;
    exit:Reason -> {'EXIT',Reason}
    error:Reason:Stk -> {'EXIT',{Reason,Stk}}
end
```

Variables bound in the various parts of these expressions have different scopes. Variables bound just after the try keyword are:

1. bound in the of section
2. unsafe in both the catch and after sections, as well as after the whole construct

Variables bound in of section are:

1. unbound in the catch section
2. unsafe in both the after section, as well as after the whole construct

Variables bound in the catch section are unsafe in the after section, as well as after the whole construct.

Variables bound in the after section are unsafe after the whole construct.



### 🐣 send & receive 消息处理
- [Learn you some erlang - More On Multiprocessing](https://learnyousomeerlang.com/more-on-multiprocessing)
- [Send & Receive](https://erlang.org/doc/reference_manual/expressions.html#send)
- https://www.erlang.org/doc/getting_started/conc_prog

Erlang 一出生就是奔着并发编程来的，所以它与传统 C、C++、Java、C#，或者 JavaScript、Python、PHP、Lua 等脚本语言有很大的区别，编程模型是 Actors Model，彼此进程之间的数据交流则是消息处理机制。

消息发送使用感叹号，基本语法如下：

	Expr1 ! Expr2

Expr2 表达式是任意数据代表的消息，Expr1 求值应该对应一个进程 PID，使用 `self()`  获取当前进程 PID、或者进程别名、Port 或已经注册的进程 (atom)，又或者是 tuple {Name,Node}，其中 Name 是代表进程命名，Node 代表分布系统中节点名，它们都是 atom 数据类型。

1. 如果进程名没有相应注册过的进程，则引发 badarg 运行时错误。
2. 给一个引用发送消息如不失败，即使它不再或从未曾引用进程别名。
3. 给一个 PID 发送消息永不失败，即便进程已经结束。
4. 分布系统的消息发送永不失败，即给 tuple {Name,Node} 或者另一个节点上的 PID 发消息。

进程别名是 OTP 24.0 引入的功能，可以使用 alias 或者 unalias 处理进程别名，但不能如下操作：

1. create an alias identifying another process than the caller.
2. deactivate an alias unless it identifies the caller.
3. look up an alias.
4. look up the process identified by an alias.
5. check if an alias is active or not.
6. check if a reference is an alias.

接收消息的基本语法格式如下，其中 after 区块可选，用于超时操作：

	receive
	    Pattern1 [when GuardSeq1] ->
	        Body1;
	    ...;
	    PatternN [when GuardSeqN] ->
	        BodyN
	after
	    ExprT ->
	        BodyT
	end

receive 语句使用模式匹配 pattern matching 来从自己进程的消息队列中读取消息，其中一条 Patern 匹配的消息就进入相应的分支进行处理。

总结 receive 语句的用法：

- receive 语句阻塞直到有消息到来，或者使用 after 0 避免阻塞；
- receive 语句当且仅当有一个消息到达时才被触发；
- receive 语句当且仅当 BodyN (N=0,1,2,...) 被求值后退出且计时器清零；
- receive 语句触发后若无 BodyN 被求值，就挂起等待下一次触发；
- receive 语句通常植入一个独立的进程；
- receive 语句至少在 Interval（毫秒）内，会有 BodyN 被求值；
- receive 语句通常被置入一个函数，并被创建一个进程；
- Body1 ~ N 可以包含函数重入，通常是在 Expression0；
- Body1 ~ N 如果被求值的话，`after` 子句被忽略；
- Body1 ~ N 只要有一个被求值，即退出；
- after 子句缺失等价于 after infinity，没有匹配的 BodyN 就进入阻塞;
- after 0 意味着如果 BodyN 不被求值的话，BodyT 立刻会被求值；

receive 只会遍历消息邮箱一次，下一次遍历，是在受到新消息的时候。遍历邮箱的时候，匹配到一个，立刻结束匹配的过程，执行相应分支，然后执行 receive end 后面的代码块，如果有的话。

可选的 after 语句用来设置等待超时时间，不加 after 语句的 receive 遍历邮箱，如果没有匹配到，就会进入阻塞。设置了 after 语句扣，如果遍历邮箱没有匹配的消息，则等待 Interval 指定的时间后，单位是毫秒，再执行 after 分支后续的代码。

在 receive 语句的执行过程中，它是从头到尾遍历了整个邮箱，并尝试拿邮箱里的各个消息跟代码里的分支模式进行匹配，这是消耗资源的，等后面消息堆积越多越耗时间。这个叫 Selective Message Reception，消息的读取顺序是接收方决定的。

所以一般情况下我们在读取信箱消息时，读到我们不感兴趣的消息也取出来，打个 error log 然后扔掉它，不要让它一直在信箱里耗费资源。或者在 after 语句中执行 flush() 清空消息。

使用 receive 语句实现定时器：

	sleep(T) ->
		receive
			after T -> ok
	end.

另一个特殊的 receive 是 0 等待：

	flush() ->
		receive
			_ -> flush()
			after 0 ->
				ok
		end.

Erlang VM 遇到这种情况就会从邮箱中获取任意一个消息，因为 `_` 表示丢弃，它可以匹配任何消息，然后执行 flush() 清空消息。如果，没有任何消息，那么就立即返回而不阻塞。

可以按下面的测试代码运行，在 Erlang shell 中先给本进程发几条消息 `self() ! msg1`，再执行以下代码:

		receive
			_ -> 
				io:fwrite("[flush()]~n"),
				flush()
			after 0 ->
				io:fwrite("[after 0]~n"),
				ok
		end.

在 Erlang shell 中测试一个消息接收，看看模式匹配是如何工作的：

	1> self() ! "msg1".
	"msg1"
	2> self() ! "msg2".
	"msg2"
	3> self() ! "msg3".
	"msg3"
	4> receive Msg -> Msg after 3000 -> no_more end.
	"msg1"
	5> receive Msg -> Msg after 3000 -> no_more end.
	no_more
	6> receive Msg -> Msg after 3000 -> no_more end.
	no_more

上面读取任意消息并返回这条消息，如果信箱里没有消息了，等待 3 秒后结束并返回 no_more 原子类型。后面这两条为什么返回 no_more ? 不应该是 "msg2", "msg3" 吗？

上面的第 4 行 receive 语句中，接收消息的进程查看邮箱，查到第一个消息是 "msg1", `Msg` 变量就绑定为 "msg1"。再次运行 receive 语句的时候，由于 Msg 的值已经为 "msg1"，与信箱里的 "msg2", "msg3" 都不匹配，所以后面两条 receive 语句都没有从信箱里读取新消息，"msg2" 和 "msg3" 仍然存储在信箱里:

	7> flush().
	Shell got "msg2"
	Shell got "msg3"
	ok

所以，由于模式匹配失败， receive 语句都没有从信箱里读取后面两个消息。

一个简单例子，在 loop 函数中根据接收的消息执行不同的动作, 并继续等待接收消息：

	-module(loop_demo).
	-export([loop/0]).

	loop() ->
		receive
			{rectangle, Width, Ht} ->
				io:format("Area of rectangle is ~p~n", [Width * Ht]),
				loop();
			{circle, R} ->
				io:format("Area of circle is ~p~n", [3.14159 * R * R]),
				loop();
			Other ->
				io:format("I don't know what the area of a ~p is ~n", [Other]),
				loop()
		end.

编译测试进程，通过 spawn 创建进程，并向 Pid 指定进程传递消息：

```erlang
	1> c(loop_demo).
	{ok,loop_demo}

	2> Pid = spawn(fun loop_demo:loop/0).
	<0.37.0>

	3> Pid ! {rectangle, 6, 10}.
	Area of rectangle is 60
	{rectangle,6,10}

	4> Pid ! {circle, 23}.
	Area of circle is 1661.90111
	{circle,23}

	5> Pid ! {triangle, 2, 4, 5}.
	I don't know what the area of a {triangle,2,4,5} is 
	{triangle,2,4,5}
```



### 🐣 Loops 循环控制

Erlang 中没有可直接使用的循环控制语句，须使用递归技术在 Erlang 中来实现 while/for 等语句。

	-module(helloworld). 
	-export([while/1,while/2, start/0]). 

	while(L) -> while(L,0). 
	while([], Acc) -> Acc;

	while([_|T], Acc) ->
	   io:fwrite("~w~n",[Acc]), 
	   while(T,Acc+1). 
	   
	   start() -> 
	   X = [1,2,3,4], 
	   while(X).

此循环程序定义了递归函数模拟 while 循环，在主函数输入一个数值列表，列表绑定到变量 X 中。在 while 函数中，利用中间变量 Acc 保存从列表取出的值，然后递归调用 while 函数。

	-module(helloworld). 
	-export([for/2,start/0]). 
	
	for(0,_) -> 
	   []; 
	   for(N,Term) when N > 0 -> 
	   io:fwrite("Hello~n"), 
	   [Term|for(N-1,Term)]. 
	   
	start() -> 
	   for(5,1).

上述程序实现 for 循环的关键点：

- 定义一个递归函数来实例和执行 for 循环；
- 使用 for 函数以确保 N 或限制的值是正值；
- 递归地调用 for 函数，通过在每一次递归后减少 N 的值。




### 🐣 Decision Making 条件决策

If 语句的一般形式、多条件判断和嵌入式，如下面的程序所显示，

	if
	condition1 ->
	   statement#1;
	condition2 ->
	   statement#2;
	conditionN ->
	   statement#N;
	true ->
	   defaultstatement
	end.

示例：

	-module(helloworld). 
	-export([start/0]). 

	start() -> 
	   A = 4, 
	   B = 6, 
	   if 
		  A < B ->
			 if 
				A > 5 -> 
				   io:fwrite("A is greater than 5"); 
				true -> 
				   io:fwrite("A is less than 5")
			 end;
		  true -> 
			 io:fwrite("A is greater than B") 
	   end.


Case Statements

	case expression of
	   value1 -> statement#1;
	   value2 -> statement#2;
	   valueN -> statement#N
	end.

示例：

	-module(helloworld). 
	-export([start/0]). 

	start() -> 
	   A = 5,
	   case A of 
		  5 -> io:fwrite("The value of A is 5"); 
		  6 -> io:fwrite("The value of A is 6") 
	   end.



## 🍀 Recursive 递归
- http://www.jishuchi.com/read/erlang-lang/2500
- https://erlang.org/doc/efficiency_guide/myths.html

递归是 Erlang 的重要组成部分。

以下实现阶乘程序来了解简单的递归。

	-module(helloworld). 
	-export([fac/1,start/0]). 

	fac(N) when N == 0 -> 1; 
	fac(N) when N > 0 -> N*fac(N-1). 
	
	start() -> 
	   X = fac(4), 
	   io:fwrite("~w",[X]).

以递归一个更有效的方法可以用于确定一个列表的长度，现在来看看一个简单的例子。列表中有多个值，如[1,2,3,4]。

让我们用递归的方法来看看如何能够得到一个列表的长度。

	-module(helloworld). 
	-export([len/1,start/0]). 

	len([]) -> 0; 
	len([_|T]) -> 1 + len(T). 
	
	start() -> 
	   X = [1,2,3,4], 
	   Y = len(X), 
	   io:fwrite("~w",[Y]).

上述程序关键点：

- 第一个函数 `len([])` 用于特殊情况的条件：如果列表为空。
- `[H|T]` 模式来匹配一个或多个元素的列表，如长度为 1 的列表可以定义为 `[X|[]]`，而长度为 2 的列表可以定义为 `[X|[Y|[]]]` 。

注意，第二元素是列表本身。这意味着我们只需要计数第一个，函数可以调用它本身在第二元素上。在列表给定每个值的长度计数为 1 。

Tail-Recursive 比 Recursive 更快！

有个比喻可以帮你理解`尾递归` Tail-Recursive 与`递归` Recursive 的区别：

假设玩一个游戏，你需要去收集散落了一路，并通向远方的硬币。

于是你一个一个的捡，一边捡一边往前走，但是你必须往地上撒些纸条做记号，因为不做记号你就忘了回来的路。于是你一路走，一路捡，一路撒纸条。等你捡到最后一个硬币时，你开始沿着记号回来了，一路走，一路捡纸条(保护环境)。等回到出发点时，你把硬币装你包里，把纸条扔进垃圾桶。
这就是非尾递归，纸条就是你的调用栈，是内存记录。

下次再玩这个游戏时，你学聪明了，你直接背着包过去了，一路走，一路捡，一路往包里塞。等到了终点时，最后一个硬币进包了，任务完成了，你不回来了！这就是尾递归，省去了调用栈的消耗。


## 🍀 Module 模块定义
- https://www.erlang.org/doc/man/erl
- https://www.erlang.org/doc/man/code
- https://www.erlang.org/doc/man/erlang#load_module-2
- https://www.erlang.org/doc/reference_manual/code_loading#on_load
- https://www.erlang.org/doc/system_principles/system_principles#code_loading
- [Erlang Module](https://erlang.org/doc/reference_manual/modules.html)
- [Record & Macros](http://erlang.org/doc/getting_started/record_macros.html)
- [Learn You some Erlang for Great Good!](https://learnyousomeerlang.com/modules)

模块是项目中组织代码的一种抽象概念，Erlang 模块是定义在一个文件重新组合的函数集合，在 Erlang 所有函数必须在模块定义。模块的名称必须在模块代码的第一行，并且和文件名一致。

Erlang 源文件的后缀为 .erl，也有头文件，后缀为 .hrl，可以编写一些预定义宏。每个模块编译后会产生一个 .beam 文件。

The following file types are defined in Erlang/OTP:
https://www.erlang.org/doc/system_principles/system_principles#file-types
Table 1.1:   File Types

| File Type	| File Name/Extension	| Documented in |
| ------- | ------- | ------- |
| Module				| .erl	| Erlang Reference Manual |
| Include file			| .hrl	| Erlang Reference Manual |
| Release resource file	| .rel	| rel(4) manual page in SASL |
| Application resource file| .app	| app(4) manual page in Kernel |
| Boot script			| .script	| script(4) manual page in SASL |
| Binary boot script		| .boot	| - |
| Configuration file		| .config	| config(4) manual page in Kernel |
| Application upgrade file	| .appup	| appup(4) manual page in SASL |
| Release upgrade file	| relup	| relup(4) manual page in SASL |


模块编译有多种方式，代码中调用编译器，或者在 erl shell，或者直接调用 erlc 编译器：

```erlang
compile:file(Module)
compile:file(Module, Options)
% erl -compile Module1...ModuleN
% erl -make
% erlc <flags> File1.erl...FileN.erl
```

Erlang 提供自动构建脚本 Emakefile 的功能，执行编译 `erl -make` 相当执行 `make:all()`，编译后的字节文件会保存到 `ebin` 目录，执行时使用 `erl -pa ebin` 就可以自动加载字节码。erl -make 脚本功能兼容 GNU make。

模块之间可以互相引用对方的函数，但是要注意避免循环调用问题。

大部分像算术，逻辑和布尔操作符的基本函数已经 Erlang 内部集成提供并且可以直接调用，因为在运行程序时的默认模块被加载。一个模块中使用定义的所有其他函数需要使用形式 Module:Function (参数) 来调用。

根据文档描述 Code Loading Strategy，Erlang 运行时系统有两种启动方式，默认 interactive mode，另外可以手动指定 embeded mode，由 Code server 负责处理代码加载：

	% erl -mode embedded

在 embedded 模式，Code server 会在系统启动时按 boot script 指示加载所有代码。

在 interactive 模式，目标代码会动态地在第一次引用时加载。比如，首次调用模块中的函数，就会导致模块的加载行为。Code server 会在 Code path 目录列表中搜索相应的模块，并加载它。

初始状态下，code path 包含当前工作目录，以及 Erlang/OTP 安装目录下的 ROOT/lib 子目录，可以通过 `code:root_dir()` 函数获取些目录位置。这些自带的库目录名都使用一个版本号作为后缀，名称格式 `Name[-Vsn]`，Code server 会自动挑选高版本号的加载。通过命令行参数 -pa 或 -pz 可以添加指定目录。

可以使用环境变量 `ERL_LIBS` 来设置 code path 目录，此方式会忽略不含 ebin 子目录的条目。

在目录列表前的库目录会覆盖 OTP 中具有相同名称的模块，但固定模块除外，即 Kernel 和 STDLIB 中的模块除外。

OTP 26.0 以来，$OTP_ROOT、ERL_LIBS 和引导脚本中指定的 code path 会默认地缓存下来，当前工作目录“.”除外。代码服务器将在其目录中查找内容一次，以避免将来的文件系统遍历。因此，在Erlang 虚拟机引导之后添加到这些目录中的模块将不会被拾取。可以通过将 `-cache_boot_path false` 或调用 `code:set_path(code:get_path())` 来禁用此行为。

Erlang 自带三个 Boot 脚本，扩展名 .script 为文本格式，.boot 为二进制格式：

1. start_clean.boot 加载和启动 Kernel 和 STDLIB
2. start_sasl.boot 比上面多加载 SASL
3. no_dot_erlang.boot 跟第一个一样，只是不加载 .erlang

安装 Erlang/OTP 时可以选择默认的启动脚本，start_clean 还是 start_sasl，然后拷贝一份命名为 start.boot 保存在安装目录下作为默认启动脚本。

对于内置的模块，如 lists，math 等等，这些模块是不能重复热更新的。这些模块所在的目录称为 sticky 目录，如 kernel, stdlib, compiler 等模块目录。目的是防止误操作把系统模块给替换了导致整个系统崩溃。除了这些系统模块，其他的模块都是可以热更新的，也可以使用 `-nostick` 参数禁用此特性。

模块的代码可以有两种变体存在于系统中：`current code` 和 `old code`。当模块首次加载到系统，模块代码将变为“current”，全局导出表将更新为引用从模块导出的所有函数。

如果加载了模块的新实例（例如，由于纠错），则上一个实例的代码将变为“old”，并且所有引用上一个示例的导出条目都将被删除。之后，新实例将像第一次一样加载，并变为“当前”实例。

旧代码和当前代码都是有效的代码，甚至可以同时求值。不同之处在于，旧代码中导出的函数不可用。因此，不能对旧代码中导出的函数进行全局调用，但由于进程在旧代码中徘徊，因此仍然可以对旧代码进行求值。

如果加载了模块的第三个实例，code server 将删除（purge）旧代码，并终止其中的任何进程。然后第三个实例变为“current”，前一个 “current” 代码变为“old”。

可以使用以下代码来演示 current code 与 old code 两种状态：

1. 打开 erl shell，执行 `c(curold), curold:start('1.0')` 就开始了 current code；
2. 可以执行 start/1 创建更多的进程，但它们都属性 current code，打印指定的信息；
3. 然后，尝试修改代码的内容，重新编译生成新 beam 文件就有差别了：
	4. 使用非全称调用 loop(V) 依然会执行原先的代码，即 old code；
	5. 使用全称调用 curold:loop(V) 将会执行新编译的代码，即总是执行 current code；
6. 若再重新编译生成新的 beam，那么执行 old code 的进程将被终止，current code 成为 old code。

注意，使用全称调用的方式，它不会执行 old code，所以在加载新 beam 代码时不会被终结。

```erlang
-module(curold).
-export([start/1, loop/1]).

start(V) ->
    spawn(?MODULE, loop, [V]).

loop(V) ->
    timer:sleep(3000),
    io:format("Version. ~p~n", [V]),
    loop(V). % will execute old code
    % ?MODULE:loop(V). % alway execute current code
```

所以一般在处理 Code replacement，热更新模块的首次发生是安全的，因为系统只有一个 current code。第二次热更新就出现了 old code，如果强制更新就可能杀死一些进程，引发一些意想不到的后果。
要避免这种情况，一方面是在调用代码的时候使用全名函数，一方面在热更新的时候尝试使用 soft purge，避免还有进程在执行老代码而被强制终止。

1. purge/1 从系统中移除 old code，并且强制终止在执行 old code 的进程；
2. soft_purge/1 尝试移除 old code，如果仍有进程在执行老版本代码，则返回 false。

Beam VM 为每份代码都保存了“多个副本”，然后通过一个全局的 code index（代码索引） 确认当前使用的是哪个版本。code index 作用是当 beam 代码正在修改时（如加载，更新，或删除），允许 erlang 进程同时访问执行代码而不用加锁。code index 同时作用于 export / module / beam_catches / beam_ranges 这几个模块的结构数据。

code index 有3个状态： active、staging，和另外一个未明确使用的状态，可以理解成“上一个的active”，或者是“下一个staging”。其中，active 表示当前使用的版本；staging 表示下一个版本，仅在更新 beam 代码时使用到。当代码更新完成后 staging 将切换成 active，那 active 就变成了“上一个active状态”。代码改变时就一直重复这个过程。


以下是erlang热更新的三个过程：

	c(Modudle) ->
		compile:file(Module),   % generate .beam file
		code:purge(Module),    % remove old code
		code:load_file(Module). % load module code to beam vm

最终调用 erlang:load_module/2 函数完成模块加载：
erl10.4\lib\erts-10.4\src\erlang.erl:2125

```erlang
-spec load_module(Module, Binary) -> {module, Module} | {error, Reason} when
      Module :: module(),
      Binary :: binary(),
      Reason :: badfile | not_purged | on_load.
load_module(Mod, Code) ->
    case erlang:prepare_loading(Mod, Code) of
	{error,_}=Error ->
	    Error;
	Prep when erlang:is_reference(Prep) ->
	    case erlang:finish_loading([Prep]) of
		ok ->
		    {module,Mod};
		{Error,[Mod]} ->
		    {error,Error}
	    end
    end.
```

Before Erlang/OTP 19, if the on_load function failed, any previously current code would become old, essentially leaving the system without any working and reachable instance of the module.

示例：

```erlang
-module(m).
-export([loop/0]).

loop() ->
    receive
        code_switch ->
            m:loop();
        Msg ->
            ...
            loop()
    end.
```

要使用进程使用更新的代码，只需要发送 code_switch 消息给它即可。进程接收到消息就会以全称调用 `m:loop()` 函数，即全局导出表中引用的导出函数。注意 `m:loop/0` 必须导出才能以此形式调用。

For code replacement of funs to work, use the syntax `fun Module:FunctionName/Arity` (remember that Arity = number of arguments). https://math.fandom.com/wiki/Arity


执行 erl 命令行时可以配置代码路径 Code Path 以定位 beam 文件：

	-pa Dir1 Dir2 ...
	Adds the specified directories to the beginning of the code path, similar to code:add_pathsa/1. Note that the order of the given directories will be reversed in the resulting path.

	As an alternative to -pa, if several directories are to be prepended to the code path and the directories have a common parent directory, that parent directory can be specified in environment variable ERL_LIBS; see code(3).

	-pz Dir1 Dir2 ...
	Adds the specified directories to the end of the code path, similar to code:add_pathsz/1; see code(3).

	-path Dir1 Dir2 ...
	Replaces the path specified in the boot script; see script(4).

也可以使用 code 模块提供的函数来设置模块目录，或查询现有的目录列表：

	code:add_path(Dir) -> add_path_ret()
	code:add_path(Dir, Cache :: cache()) -> add_path_ret()  % OTP 26.0
	code:add_pathz(Dir) -> add_path_ret()
	code:add_pathz(Dir, Cache :: cache()) -> add_path_ret()  % OTP 26.0

	add_patha(Dir) -> add_path_ret()
	add_patha(Dir, Cache :: cache()) -> add_path_ret()   % OTP 26.0

	add_paths(Dirs) -> ok
	add_paths(Dirs, Cache :: cache()) -> ok   % OTP 26.0
	add_pathsz(Dirs) -> ok
	add_pathsz(Dirs, Cache :: cache()) -> ok  % OTP 26.0

	add_pathsa(Dirs) -> ok
	add_pathsa(Dirs, Cache :: cache()) -> ok

	del_path(NameOrDir) -> boolean() | {error, What}
	del_paths(NamesOrDirs) -> ok

	code:is_loaded(Module) -> {file, Loaded} | false
	code:load_file(Module) -> load_ret()
	code:ensure_loaded(Module) -> {module, Module} | {error, What}
	code:load_binary(Module, Filename, Binary) ->
               {module, Module} | {error, What}

	purge(Module) -> boolean()
	soft_purge(Module) -> boolean()


添加目录的方法有多种重载，看后缀识别功能：s 后缀表示添加目录列表，a 表示添加到 code path 前头，z 表示添加在 code path 列表后头。如果误将字符串传入 add_paths 等方法，目录路径将被忽略。

```erlang
	code:add_pathsa(["path/to/module/ebin"]).
	code:add_pathsz(["path/to/module/ebin"]).
	code:del_path("path/to/module/ebin").
	code:load_file(module).
```

使用 `load_file(Module)` 会尝试加载模块，并且自动给模块名添加上 .beam 后缀名，重复加载将导致 not_perged 异常。

```erlang
$ erl
Eshell V10.4  (abort with ^G)
1> code:load_file(hello).
{module,hello}
2> code:is_loaded(hello).
{file,"c:/coding/md-code/erlang/hello.beam"}
3> code:load_file(hello).                         
{error,not_purged} 
```

加载模块文件可能返回的错误码：

1. `badfile` The object code has an incorrect format or the module name in the object code is not the expected module name.
2. `nofile` No file with object code was found.
3. `not_purged` The object code could not be loaded because an old version of the code already existed.
4. `on_load_failure` The module has an -on_load function that failed when it was called.
5. `sticky_directory` The object code resides in a sticky directory.


比如，erlang-color 这个 ANSI Color 功能模块，下载代码文件后，就可以手动编译它，然后告知 erl 命令如果去定位其模块二进制文件：

```sh
$ git clone https://github.com/julianduque/erlang-color
$ cd erlang-color
$ mkdri ebin
$ erlc -I include -o ebin src\color.erl
$ erl -pa .\erlang-color\ebin\
Eshell V10.4  (abort with ^G)
1> color:red("red color").
[<<"\e[31m">>,"red color",<<"\e[0m">>] 
2> q().

$ erl
Eshell V10.4  (abort with ^G)
1> code:add_path("erlang-color/ebin").
true
2> color:red("r").
[<<"\e[31m">>,"r",<<"\e[0m">>]
```

下面的程序显示了一个叫 helloworld 模块的一个例子。

```erlang
	-module(helloworld). 
	-include("some.hrl").
	-author("TutorialPoint"). 
	-version("1.0"). 
	-export([start/0]). 
	-import(io,[fwrite/1]). 
	-on_load(start/0).

	start() -> 
	   io:fwrite("Hello World").
```

模块定义了 author、 version 两个标签属性，可以按 `-Tag(Value)` 格式定义。

编译指令 

- `-export([start/0])` 是说，其他模块可以在源码级调用本模块的函数 start。
- `-compile(export_all,nowarn_export_all)` 本模块编译成 .beam 后，全部函数均开放调用。

这里只导出一个 start 函数，参数个数为 0 个。导入语句类似，它指定导入的模块和函数列表。所以，现在每当调用 fwrite 函数，不必每次都要带上模块的名称。

导入模块和函数 `-import(io,[fwrite/1]).` 格式类似导出，它需要指定导入的模块。Erlang 没有全部导入的方式，但是可以在运行 erl -pa .\ebin 指定编译后的程序目录，这样 Erlang 会自动查找引用到的函数。


然后调用 erlc 编译

	mkdir -p ./ebin
	erlc -o ebin helloworld.erl

或者在 Erlang shell 中编译：

	1> cd("/path/to/where/you/saved/the-module/").
	"Path Name to the directory you are in"
	ok
	2> c(helloworld).
	{ok,helloworld}


编译后的 beam 文件会在 ebin 目录下，然后你启动 erlang shell：

	$ erl -pa ./ebin

	Eshell V8.3  (abort with ^G)
	1> helloworld:start().
	3
	2> helloworld:start().
	4

erl -pa 参数的意思是 Path Add, 添加 beam 文件目录到 erlang 以自动查找编译好的程序。就是说，你运行 helloworld:start(). 的时候，Erlang 发现 module 'helloworld' 没加载，就在那些查找目录里找 helloworld.beam，然后加载进来。

在 Erlang shell 中通过 `m()` 查询当前加载的模块列表，使用 `m(shell_default)` 或 `module_info()` 查询 shell 默认模块的信息。用户模块信息也一样可以查询：`m(hello)` 或者 `hello:module_info()`。

在模块中，可以使用内置宏 `?MODULE` 来引用模块名，或 `?MODULE_STRING` 当前模块名的字符串值，参考预处理 Preprocessor。


## 🍀 Processes 进程
https://www.erlang.org/doc/getting_started/conc_prog
https://www.erlang.org/doc/reference_manual/processes

现代主机可以按 CPU 的结构划分成以下三类：

- SMP - Symmetrical Multi-Processing 对称多处理技术，同一主机上各 CPU 之间共享内存子系统以及总线结构。
- MPP - Massive Parallel Processing 大规模并行处理系统由多个 SMP 服务器通过一定的节点互联网络进行连接，协同工作，完成相同的任务，从用户的角度来看是一个服务器系统。
- NUMA - Non-Uniform Memory Access 架构每个处理器拥有自己的内存，访问共享内存时具有不同的访问延迟。

SMP Emulator 在 R11B 版本引入，目的是利用现有的多核心 CPU 的能力，并行使用多个 Erlang 调试器线程 scheduler，数量同核心数，每个调度器和 non-SMP 的调度器表现一样。但仍然要注意超锁，locking overhead，尽管 Erlang 尽量减少此情况的发生。

在没有 HiPE 的 non-SMP emulator 分裂一个 Erlang 进程使用 309 机器字内存。SMP 或 HiPE 支持各增加 309 机器字内存。 

```sh
	1> Fun = fun() -> receive after infinity -> ok end end.
	#Fun<...>
	2> {_,Bytes} = process_info(spawn(Fun), memory).
	{memory,1232}
	3> Bytes div erlang:system_info(wordsize).
	309
```

这个内存包含了 233 机器字作为堆内存 heap，堆内存则包含栈内存 stack，回收器 garbage collector 会增加堆内存，如果有需要。

PID 数据类型属于基本的 term 类型，其旧结构格式是 <serial,number,creation,node>，0 节点代表当前节点，就像计算机始终使用主机名“ localhost”来引用自身一样。这是由旧的记忆造成的，因此可能不是100％正确的解决方案。

OTP 19 引入的新 NEW_PID_EXT 格式如下：
https://www.erlang.org/doc/apps/erts/erl_ext_dist#pid_ext

	1	N	4	4	4
	88	Node	ID	Serial	Creation
	
	Table 12.19:   NEW_PID_EXT

Encodes an Erlang process identifier object.

1. Node - The name of the originating node, encoded as an atom.
2. ID - A 32-bit big endian unsigned integer.
3. Serial - A 32-bit big endian unsigned integer.
4. Creation - A 32-bit big endian unsigned integer. 

参考源代码 OTP-26.0.2\erts\emulator\beam\erl_term.h

一个进程运行结束时，总会返回一个 exit reason，可以是任何 term 类型数据。正常结束通常以 atom `normal` 表示，其它情况视之为异常退出。

出现运行时错误的退出理由使用 {Reason,Stack} 表示。进程可以调用以下 BIF 函数主动结束：

	exit(Reason)
	erlang:error(Reason)
	erlang:error(Reason, Args)

The process then terminates with reason Reason for exit/1 or {Reason,Stack} for the others.

Erlang 使用 Actor Model 编程模型，进程之间使用各种信号通信，列如最常用的 message 就是其中一种信号，使用 receive 表达式接收消息，使用 ! 运算符发送消息。

信号的接收是 Erlang 编程模型的基本构成，自动异步处理，进程不必做任何事情来处理信号的接收，也不必做什么来防止信号的接收。特别是，信号接收与 receive 接收表达式的执行无关，而是可以发生在进程执行流中的任何地方。部分信号参考如下：

1. *message* Sent when using the send operator !, erlang:send/2,3 or erlang:send_nosuspend/2,3 BIFs.
2. *link* Sent when calling the link/1 BIF.
3. *unlink* Sent when calling the unlink/1 BIF.
4. *exit* Sent either when explicitly sending an exit signal by calling the exit/2 BIF...
5. *monitor* Sent when calling one of the monitor/2,3 BIFs.
6. *demonitor* Sent when calling one of the demonitor/1,2 BIFs, or when a monitor process terminates.
7. *alive_request/alive_reply* Sent due to a call to the is_process_alive/1 BIF.

进程直接可见资源是非常重要的概念，Erlang 的进程是完全隔离的，进程只能使用已经分配的资源，比如 registered name 或者 ETS tables (Built-in term storage)。在进程完全释放资源之前，exit、down 和 alive_reply (因由 alive_requests)信号不会在退出过程中发送。

消息发送运算符可以串连表达，给多个进程发送消息。消息接收每次只从信箱中取当头一条信息，其它信息需要在下一回接收消息时获取，或者使用 flush/0 函数清空信箱：

```erlang
1> self() ! self() ! self() ! 'hello!'.
'hello!'
2> flush().
Shell got 'hello!'
Shell got 'hello!'
Shell got 'hello!'
ok 
```

Erlang 进程附带了一个字典作为临时数据存储用途，Process Dictionary 只供当前进程访问，可以使用以下方法进行读写、擦除等操作：

```erlang
-spec put(Key, Val) -> term() when
      Key :: term(),
      Val :: term().

-spec get() -> [{Key, Val}] when
      Key :: term(),
      Val :: term().
-spec get(Key) -> Val | undefined when
      Key :: term(),
      Val :: term().

-spec get_keys() -> [Key] when
      Key :: term().
-spec get_keys(Val) -> [Key] when
      Val :: term(),
      Key :: term().

-spec erase() -> [{Key, Val}] when
      Key :: term(),
      Val :: term().
-spec erase(Key) -> Val | undefined when
      Key :: term(),
      Val :: term().
```

| BIF		| Description
| ------- |------- |
| register(Name, Pid)	| Associates the name Name, an atom, with the process Pid.
| registered()		| Returns a list of names that have been registered using register/2.
| whereis(Name)		| Returns the pid registered under Name, or undefined if the name is not registered.

Table 14.1:   Name Registration BIFs


```erlang
-spec spawn(Fun) -> pid() when
      Fun :: function().

-spec spawn(Node, Fun) -> pid() when
      Node :: node(),
      Fun :: function().

-spec spawn(Module, Function, Args) -> pid() when
      Module :: module(),
      Function :: atom(),
      Args :: [term()].

-spec spawn_link(Fun) -> pid() when
      Fun :: function().

-spec spawn_link(Node, Fun) -> pid() when
      Node :: node(),
      Fun :: function().


-spec spawn_monitor(Fun) -> {pid(), reference()} when
      Fun :: function().

-spec spawn_monitor(Module, Function, Args) -> {pid(), reference()} when
      Module :: module(),
      Function :: atom(),
      Args :: [term()].

-spec processes() -> [pid()].

-spec process_flag(Pid, Flag, Value) -> OldValue when
      Pid :: pid(),
      Flag :: save_calls,
      Value :: non_neg_integer(),
      OldValue :: non_neg_integer().

-spec process_info(Pid) -> Info when
      Pid :: pid(),
      Info :: [InfoTuple] | undefined,
      InfoTuple :: process_info_result_item().
-spec process_info(Pid, Item) -> InfoTuple | [] | undefined when
      Pid :: pid(),
      Item :: process_info_item(),
      InfoTuple :: process_info_result_item();
              (Pid, ItemList) -> InfoTupleList | [] | undefined when
      Pid :: pid(),
      ItemList :: [Item],
      Item :: process_info_item(),
      InfoTupleList :: [InfoTuple],
      InfoTuple :: process_info_result_item().

-spec processes() -> [pid()].

-spec is_process_alive(Pid) -> boolean() when
      Pid :: pid().

-spec self() -> pid().

-spec unlink(Id) -> true when
      Id :: pid() | port().

-spec link(PidOrPort) -> true when
      PidOrPort :: pid() | port().

-spec is_pid(Term) -> boolean() when
      Term :: term().
```

主进程消息循环一定要以 Tail-Recursive 实现，否则堆栈无限增长最终会杀掉进程，下面两种实现中，前面一例的 io:format 语句就永远不会执行，但每次递归的返回地址总是压栈。

```erlang
	loop() -> 
	  receive
		 {sys, Msg} ->
			 handle_sys_msg(Msg),
			 loop();
		 {From, Msg} ->
			  Reply = handle_msg(Msg),
			  From ! Reply,
			  loop()
	  end,
	  io:format("Message is processed~n", []).
```

正确的消息循环实现：

```erlang
   loop() -> 
	  receive
		 {sys, Msg} ->
			handle_sys_msg(Msg),
			loop();
		 {From, Msg} ->
			Reply = handle_msg(Msg),
			From ! Reply,
			loop()
	end.
```

对于支持百万进程级别的 Erlang 来说，默认的初始堆内存 233 机器字是个保守值，GC 会按需要增加或回收。对于进程量少的系统，使用 `+h` 选项，或在 `spawn_opt/4` 函数的 min_heap_size 选项指定一个大内存，减少 GC 操作可以增加性能。

在大量进程的系统中，设置合适的初始堆内存，也许进程完成任务刚好够用，GC 根本都不用做清理。

进程管理中，所有消息都是拷贝传递到另一个进程的，除了引用二进制类型 refc binaries。消息发送时，先会编码成 Erlang External Format，再通过 TCP/IP 传输。接收节点再进行解码，并发往目标进程。

在常量池 Constant Pool 保存的是 Erlang 的字面量类型，每个加载的模块都自有常量池。如下，这个函数不会在每次调用时都构造元组，因为它在常量池保存的，只有在 GC 运行丢弃后才会。

	days_in_month(M) ->
		element(M, {31,28,31,30,31,30,31,31,30,31,30,31}).

但是，常量在发往其它进程，或保存到 Ets 数据表中时，是复制的。因为，运行时系统要追踪所以正确卸载包含常量的代码，并将常量拷贝到目标进程的堆内存中，此常量拷贝流程可能在将来的版本中清除掉。

以下几种情况中，共享类型 Shared subterms 不受保护：

- 当一个 term 改善到其它进程；
- 当一个 term 作为参数传入 spawn 函数；
- 当一个 term 保存到 Ets 数据表中；

这是优化行为，大多数程序并不发送带 shared subterms 的消息。

以下例子演示如何创建共享子类 shared subterm：

	kilo_byte() ->
		kilo_byte(10, [42]).

	kilo_byte(0, Acc) ->
		Acc;
	kilo_byte(N, Acc) ->
		kilo_byte(N-1, [Acc|Acc]).

`kilo_byte/1` 使用递归创建一个深度嵌套列表，如果 `list_to_binary/1` 函数将结果转换为 binary，结果为 1024 字节：

	1> byte_size(list_to_binary(efficiency_guide:kilo_byte())).
	1024

使用 `erts_debug:size/1` BIF 可以看到这个列表只需要 22 机器字的头部堆内存空间：

	2> erts_debug:size(efficiency_guide:kilo_byte()).
	22

使用 `erts_debug:flat_size/1` BIF 可以看到忽略共享时占用的内存，这个大小就是它发送到其它进程或保存到 Ets 数据表中的大小：

	3> erts_debug:flat_size(efficiency_guide:kilo_byte()).
	4094

下面将列表保存到 Ets 数据表中，可以验证共享丢失：

	4> T = ets:new(tab, []).
	#Ref<0.1662103692.2407923716.214181>
	5> ets:insert(T, {key,efficiency_guide:kilo_byte()}).
	true
	6> erts_debug:size(element(2, hd(ets:lookup(T, key)))).
	4094
	7> erts_debug:flat_size(element(2, hd(ets:lookup(T, key)))).
	4094


使用 `ernlang:register/2` 函数可以将一个进程 Pid 与一个进程名称关联在一起，这样就可以直接通过模块名称给进程发消息。

	start() ->
	register(?MODULE, Pid=spawn(?MODULE, init, [])),
	Pid.
	 
	start_link() ->
	register(?MODULE, Pid=spawn_link(?MODULE, init, [])),
	Pid.
	 
	terminate() ->
	?MODULE ! shutdown.




## 🍀 Mornitors & Linked Processes

进程退出信号 exit 可以是调用退出函数触发的，或者由已链接的进程终结时触发，这种情况会在进程使用的所有直接可见的 Erlang 资源都已释放后发送信号。

Erlang 是为电信产品服务发展起来的语言，这决定了她对错误处理的严格要求。除了异常，try catch 等语法，还支持 `Monitor` 和 `Link`，单向、双向两种监控进程的机制，使得所有进程可以连接起来组成一个整体。当某个进程出错退出时，其他进程都会收到该进程退出的消息通知。基于这些特性，Erlang 可以建立一个简单并且健壮的系统。

Monitor 方式则实现进程的单向监控，当被监控进程退出时，监控进程会收到该进程退出的消息。如果受监控进程以 normal 方式退出，则不会发出进程退出通知。
https://www.erlang.org/doc/man/erlang#monitor-2

```erlang
-module(monitor).
-export([start/0]).

start() ->
    P1 = spawn(fun() ->process_msg() end),
    P2 = spawn(fun() ->process_msg() end),
    P3 = spawn(fun() ->process_msg() end),
    P2 ! P3 ! {mon, P1},
    io:format("P1 ~p P2 ~p P3 ~p~n", [P1,P2,P3]),
    exit(P1, reason),
    Alives = [is_process_alive(P1), is_process_alive(P2), is_process_alive(P3) ],
    io:format("Alive ~p~n", [Alives]).

process_msg() ->
    receive
        {mon, PID} when is_pid(PID) ->
            io:format("~p monitors ~p~n", [self(), PID]),
            _MonitorRef = erlang:monitor(process, PID),
            process_msg();
        Msg ->
            io:format("~p received: ~p~n", [self(), Msg])
    end.
```

```erlang
monitor(Type :: process, Item :: monitor_process_identifier()) ->
           MonitorRef
monitor(Type :: port, Item :: monitor_port_identifier()) ->          % OTP 19.0
           MonitorRef
monitor(Type :: time_offset, Item :: clock_service) -> MonitorRef   % OTP 18.0

monitor(Type :: process, Item :: monitor_process_identifier(), Opts :: [monitor_option()]) -> % OTP 24.0
           MonitorRef
monitor(Type :: port, Item :: monitor_port_identifier(), Opts :: [monitor_option()]) ->     % OTP 24.0
           MonitorRef
monitor(Type :: time_offset, Item :: clock_service, Opts :: [monitor_option()]) ->       % OTP 24.0
           MonitorRef
```

OTP 应用构架作为 Erlang 官方的编程框架，OTP 的实现中，link 机制被广泛的应用。OTP 实现容错的主要途径之一就是改写退出信号默认的传播行为。通过设置 trap_exit 进程标记，你可以令进程不再服从外来的退出信号的默认行为，而是捕捉它自行处理。
https://www.erlang.org/doc/design_principles/users_guide

Erlang 进程间或者进程与 Port 之间可以结成 Linked 关系，通过 link/1 函数进行连结，当其中一方终结，就会向另一方发送 `unlink` 信号，连结时会发送 `link` 信号。连结操作也可以由 spawn_link(), spawn_opt(), or spawn_request() 等函数自动完成。

1. https://www.erlang.org/doc/man/erlang#link-1
2. https://www.erlang.org/doc/apps/erts/erl_dist_protocol#link_protocol
3. https://learnyousomeerlang.com/errors-and-processes

OTP 23.3 引入的新链路协议，link protocol，OTP 26 起成为强制性协议，OTP 节点将拒绝使用 DFLAG_UNLINK_ID 分发标志来连接到那些没有表明支持新链路协议的节点。

假设两个链结进程 A 和 B，在不同的 trap_exit 设置下有不同的信号行为：

1. A 调用 error/1 正常结束，原因是 normal 或指定，那么 B 进程不会退出，此时 link 机制不发生作用；
2. A 被强制终结，结束原因是 killed，例如 `exit(PidA,kill)`，B 也同样被终结，exit 信号无效；
3. A 因其它理由终结，例如 exit(PidA,Reason)，并且 B 设置 trap_exit 时就可以捕捉 exit 信号；

| Reason	| (trap_exit = true)	            |  (trap_exit = false)
| ---- | ----------------- | ----------------- |
| normal	| Receives {'EXIT', Pid, Normal}	| Nothing happens
| kill	| Terminates with reason killed	| Terminates with reason killed
| Other	| Receives {'EXIT', Pid, Other}	| Terminates with reason Other

注：Erlang 进程默认不捕捉 exit 信号，使用 process_flag(trap_exit, true) 改变默认行为。

调用 link/1 方法创建链结时，是双向链结，进程任何一方调用此方法都是双向链结，并且只有一个链结关系，重复调用 link 方法无效。

Exit Signal 的默认处理方式：只要退出理由不是 normal 并且没有设置 trap_exit，那么默认行为就是结束链结进程。注意，设置 trap_exit 后，exit/1 指定其它退出理由并不会执行默认的进程结束行为，除非是 error 方法触发运行时错误。

链接进程关系中，如果错误在 A、B 和 C 当中任何一个发生，通过传播错误，所有链接的进程将会死去。进程设置捕捉信号后，错误信号也一样传播，但是进程不会自动终结。使用 unlink 断开链结可以阻止信号的传播，注意只能对 link 方法中使用的同样 PID 进行解除链结，unlink 不会提示对其它 PID 操作的问题。并且，首个搜捕到错误的进程与后续进程捕捉到的信号形式上有些差别，前者捕捉到的信息包含 Sender identifier 和 error reason，后者是 'EXIT' + normal。以下是演示代码，采用星型链结。


```erlang
-module(linked).
-export([start/0]).

% execute command:
% erlc -o ebin linked.erl; erl -pa ebin -s linked -s init stop

start() ->
    P1 = spawn(fun() ->loop({trap}) end),
    P2 = spawn(fun() ->loop({P1,trap}) end),
    P3 = spawn(fun() ->loop({P1,trap}) end),
    io:format("P1: ~p  P2: ~p  P3: ~p~n", [P1,P2,P3]),
    timer:sleep(100), P3 ! error,
    % timer:sleep(100), P3 ! {unlink, P2},
    % io:format("Terminate ~p with reason.~n", [P1]),
    % exit(P1, reason),
    timer:sleep(200), 
    Alives = [is_process_alive(P1), is_process_alive(P2), is_process_alive(P3)],
    io:format("Alive ~p ~n", [Alives]).

process_msg() ->
    receive
        error -> erlang:error(error);
        { link,PID} -> 
            R = erlang:link(PID),
            io:format("link(~p) ~p~n", [PID, R]),
            process_msg();
        {unlink,PID} -> 
            R = erlang:unlink(PID),
            io:format("unlink(~p) ~p~n", [PID, R]),
            process_msg();
        Msg ->
            io:format("~p received: ~p~n", [self(), Msg])
    end.

loop(Arg) ->
    case Arg of
        {trap} -> 
            process_flag(trap_exit, true),
            io:format("~p set trap_exit~n", [self()]);
        {PID, trap} when is_pid(PID) -> 
            io:format("~p set trap_exit~n", [self()]),
            io:format("link process ~p <==> ~p~n", [self(), PID]),
            process_flag(trap_exit, true),
            erlang:link(PID);
        {PID, none} when is_pid(PID) -> 
            io:format("link process ~p <==> ~p ~n", [self(), PID]),
            erlang:link(PID);
        _ -> Arg
    end,
    process_msg().
```

	<0.120.0> set trap_exit                   
	<0.121.0> set trap_exit                   
	<0.122.0> set trap_exit                   
	link process <0.121.0> <==> <0.120.0>                     
	link process <0.122.0> <==> <0.121.0>
	<0.121.0> received: {'EXIT',<0.122.0>, {error,...
	<0.120.0> received: {'EXIT',<0.121.0>,normal}
	=ERROR REPORT==== 5-Sep-2023::17:37:28.515000 ===
	Error in process <0.122.0> with exit value:
	{error,[{linked,process_msg,0,[{file,"linked.erl"},{line,20}]}]}



## 🍀 Distributed Erlang 分布式应用
https://www.erlang.org/doc/apps/erts/alt_dist
https://www.erlang.org/doc/apps/erts/erl_dist_protocol
https://www.erlang.org/doc/reference_manual/distributed
https://www.erlang.org/doc/man/gen_udp
https://www.erlang.org/doc/man/gen_tcp

Erlang 分布式应用基于 TCP/IP 和 UDP 协议进行数据传递，Kernel 库中的 gen_tcp 和 gen_udp 模块提供相应函数。监护进程 Port Mapper Daemon (EPMD) 默认使用 4369 端口。分布式协议可以分为以下四部分：


1. Low-level socket connection (1)
2. Handshake, interchange node name, and authenticate (2)
3. Authentication (done by net_kernel(3)) (3)
4. Connected (4)

每启动一个节点，它都会检查本地机器上是否运行着 EPMD 并且会自动启动它。EPMD 会追踪在本地机器上运行的所有节点，并记录分配给它们的端口。当一台机器上的节点试图与某远程节点通信时，本地 EPMD 就会联络远程机器上的 EPMD，询问在远程机器上有没有叫相应名字的节点，如果有，远程的 EPMD 就会回复一个端口，通过该端口便可直接与远程节点通信，不过 EPMD 不会主动搜寻其他 EPMD，只有在某个节点主动搜寻其他节点时通信才能建立。

部分用于分布式编程的 BIFs：

1. `spawn(Node, Mod, Func, Args)` 创建远程节点的一个进程；
2. `spawn_link(Node, Mod, Func, Args)` 创建并链结到远程节点的进程；
3. `monitor_node(Node, Flag)` 开户或关闭远程节点的监控；
4. `node()` 返回当前进程的节点名称；
5. `node(pid|port|ref)` 返回指定进程的原节点名称，节点关闭时返回 nonode@nohost。
6. `nodes()` 返回已知节点名称列表；
7. `disconnect_node(Nodename)` 从节点Nodename断开。



## 🍀 Preprocessor 预处理指令
- https://erlang.org/doc/reference_manual/macros.html
- http://erlang.org/doc/getting_started/record_macros.html

Erlang 和 C 语言类似，也使用预处理指令对源代码进行修饰。

文件头包含：

	-include(File).
	-include_lib(File).

有三个目录会被搜索以找到头文件：

- 当前工作目录 current working directory；
- 模块所在目录；
- include 指定的目录；

示例：

	-include("my_records.hrl").
	-include("incdir/my_records.hrl").
	-include("/home/user/proj/my_records.hrl").
	-include("$PROJ_ROOT/my_records.hrl").

	-include_lib("kernel/include/file.hrl").

定义宏 Macros：

	-define(Const, Replacement).
	-define(Func(Var1,...,VarN), Replacement).

使用宏：

	?Const
	?Func(Arg1,...,ArgN)

宏使用在源代码上，在编译时会用前面定义好的内容替换。

使用示例：

	-define(TIMEOUT, 200).
	...
	call(Request) ->
		server:call(refserver, Request, ?TIMEOUT).

编译时替换的结果：

	call(Request) ->
		server:call(refserver, Request, 200).

带参数的宏：

	-define(MACRO1(X, Y), {a, X, b, Y}).
	...
	bar(X) ->
		?MACRO1(a, b),
		?MACRO1(X, 123)

展开结果：

	bar(X) ->
		{a,a,b,b},
		{a,X,b,123}.


查看宏展开的结果，可以在编译时使用 'P' 选项，compile:file(File, ['P'])，这样会生成预处理后的文件 File.P。

内部宏定义 Predefined Macros：

| 内部宏定义	| 功能 |
| :-------	| :------- |
| ?MODULE	| 当前模块名 |
| ?MODULE_STRING	| 当前模块名，字符串 |
| ?FILE		| 当前模块文件锃 |
| ?LINE		| 当前行号 |
| ?MACHINE	| 虚拟机名称，现在是 'BEAM'. |
| ?FUNCTION_NAME	| 当前函数名称 |
| ?FUNCTION_ARITY	| 当前函数的参数数量 arity |
| ?OTP_RELEASE	| OTP 21 引入的宏，获取当前 ERTS 的发行版号，整数，参考 erlang:system_info(otp_release) |


在 Erlang 5.7.5/OTP R13B04 版本后，引入了宏覆重载功能 Macros Overloading，可以定义多个不同参数的同名宏，除内置宏外。

假设以下定义：

	-define(F0(), c).
	-define(F1(A), A).
	-define(C, m:f).

以下的代码不工作：

	f0() ->
		?F0. % No, an empty list of arguments expected.

	f1(A) ->
		?F1(A, A). % No, exactly one argument expected.

而以下代码：

	f() ->
		?C().

会展开为：

	f() ->
		m:f().


流程控制宏 Flow Control in Macros：

| 流程控制	| 功能	|
| :-------	| :-------	|
| `-undef(Macro)`	| 解除宏定义 |
| `-ifdef(Macro)`	| 如果 Macro 有定义则激活随后的代码 |
| `-ifndef(Macro)`	| 如果 Macro 没有定义则激活随后的代码 |
| `-else`	| 和 -ifndef 或 -ifdef 配套使用的返转条件 |
| `-endif`	| 和 -ifndef 或 -ifdef 配套使用的结束标记 |
| `-if(Condition)`	| 如果 Condition 条件为真则激活随后的代码 |
| `-elif(Condition)`	| 配合 -if 或其它 -elif 后面使用，如果 Condition 为真则激活随后代码 |

示例：

	-module(m).
	...

	-ifdef(debug).
	-define(LOG(X), io:format("{~p,~p}: ~p~n", [?MODULE,?LINE,X])).
	-else.
	-define(LOG(X), true).
	-endif.

当需要追踪输出，定义 debug 符号，那么模块 m 展开编译命令如下：

	% erlc -Ddebug m.erl

	or

	1> c(m, {d, debug}).
	{ok,m}

`?LOG(Arg)` 就会替换为 io:format/2 以打印追踪消息。

示例：

	-module(m)
	...
	-ifdef(OTP_RELEASE).
	  %% OTP 21 or higher
	  -if(?OTP_RELEASE >= 22).
		%% Code that will work in OTP 22 or higher
	  -elif(?OTP_RELEASE >= 21).
		%% Code that will work in OTP 21 or higher
	  -endif.
	-else.
	  %% OTP 20 or lower.
	-endif.
	...

上面代码使用 OTP_RELEASE 宏来根据不同的 OTP 版本生成不同的代码。


在 OTP 19 版本后使用 `-error()` 和 `-warning()` 指令在编译期发出错误或警告消息。

-error 示例：

	-module(t).
	-export([version/0]).

	-ifdef(VERSION).
	version() -> ?VERSION.
	-else.
	-error("Macro VERSION must be defined.").
	version() -> "".
	-endif.

出错消息类似以下：

	% erlc t.erl
	t.erl:7: -error("Macro VERSION must be defined.").

-warning 示例：

	-module(t).
	-export([version/0]).

	-ifndef(VERSION).
	-warning("Macro VERSION not defined -- using default version.").
	-define(VERSION, "0").
	-endif.
	version() -> ?VERSION.

警告消息类似如下：

	% erlc t.erl
	t.erl:5: Warning: -warning("Macro VERSION not defined -- using default version.").


宏参数的字符串化 Stringifying Macro Arguments，`??Arg` 这种宏参数表达会串连为字符串。

示例：

	-define(TESTCALL(Call), io:format("Call ~s: ~w~n", [??Call, Call])).

	?TESTCALL(myfunction(1,2)),
	?TESTCALL(you:function(2,1)).

结果：

	io:format("Call ~s: ~w~n",["myfunction ( 1 , 2 )", myfunction(1,2)]),
	io:format("Call ~s: ~w~n",["you : function ( 2 , 1 )", you:function(2,1)]).




## 🍀 Error 错误处理
- https://www.erlang.org/doc/apps/erts/crash_dump
- http://erlang.org/doc/getting_started/robustness.html
- http://erlang.org/doc/reference_manual/errors.html
- https://www.tutorialspoint.com/erlang/erlang_exceptions.htm
- https://iowiki.com/erlang/erlang_exceptions.html
- https://learnyousomeerlang.com/errors-and-exceptions

Erlang 的错误分类：

- Compile-time errors
- Logical errors
- Run-time errors
- Generated errors 

Throw 抛出一类异常，用于程序员可以处理的情况。 与出口和错误相比，他们并没有真正承担任何“崩溃过程！” 他们背后的意图，而是他们控制流量。 当您在期望程序员处理它们的同时使用 throws 时，通常最好在使用它们的模块中记录它们的使用。

调用 `erlang:error(Reason,Args)` 将结束当前进程中的执行，并包含当您捕获它们时使用其参数调用的最后函数的堆栈跟踪。 这些是引发上述运行时错误的异常。

通过调用函数 exit/1 触发内部退出，并使当前进程停止执行。 外部出口使用 exit/2 调用，并且与 Erlang 的并发方面中的多个进程有关。

- exit(Reason)
- erlang:error(Reason)
- erlang:error(Reason, Args)

任何编程语言都需要异常处理来处理运行时错误，以便可以保持应用程序的正常流程。 异常通常会破坏应用程序的正常流程，这就是我们需要在应用程序中使用异常处理的原因。

通常，当Erlang中发生异常或错误时，将显示以下消息。

	{"init terminating in do_boot", {undef,[{helloworld,start,[],[]}, 
	{init,start_it,1,[]},{init,start_em,1,[]}]}}

崩溃转储将被写入 `erl_crash.dump` 虚拟机状态转储文件。

常见错误码意义：

- `eacces` Missing search or write permissions for the parent directories of Dir.
- `eexist` 目录不是空目录；
- `enoent` 目录不存在；
- `enotdir` 不是目录，一些系统会返回 enoent；
- `einval` 试图删除当前目录，一些系统会返回 eacces；
- `badarg` 参数错误；
- `badfun` 最常见的错误之一，不是函数的变量当函数使用时就会出现；
- `badarity` 算是 badfun 的细分，使用高阶函数 HOC 但参数不匹配时出现。
- `badarith` 运算错误，atithmetic 运算，例如将一个整数和一个 atom 相加。
- `{badmatch, V}`  模式匹配错误
- `function_clause` 找不到匹配的函数从句，即没有匹配的分支。
- `{case_clause, V}` case 表达式找不到匹配的分支。一般要把 `_` 加到最后的分支中，作为容错或者其它。
- `if_clause` if 表达式是 case 表达式的一种特殊方式，要求至少有一个分支测试条件的结果为 true，否则会引发错误。
- `undef` 调用未定义的函数或者模块时，返回该错误信息。
- `noproc` 进程不存在，例如 gen_server:call 一个不存在的进程。
- `system_limit` 超出系统上限，如 atom，ets，port，process 等。

使用 erlang:error(Reason) 触发的常见错误：

	1> erlang:error(badarith).
	** exception error: bad argument in an arithmetic expression
	2> erlang:error(custom_error).
	** exception error: custom_error

使用 throw  抛出错误：

	1> throw(permission_denied).

	** exception throw: permission_denied

使用 try-catch 捕获异常,同时也调用 erlang:get_stacktrace()，获取栈信息，定位错误。

	try:
		%% 业务代码
		Exprs
	catch
		Calss:Reason ->
		%% 异常处理代码，
		%% Calss为异常类型，Reason为异常原因
		ok
	end.

一个简单的例子:

```erlang
	-module(test).
	-export([add/2]).

	add(A,B) ->
		try
			A + B
		catch
			Class:Reason ->
				io:format("Class:~p,Reason:~p~nstacktrace:~n~p",
						  [Class, Reason, erlang:get_stacktrace()]),
				error
		end.
```

以下是如何使用这些异常以及如何完成任务的示例。

第一个函数生成所有可能的异常类型。然后我们编写一个包装函数来在 try ... catch 表达式中调用 generate_exception 。

```erlang
	-module(helloworld). 
	-compile(export_all). 

	generate_exception(1) -> a; 
	generate_exception(2) -> throw(a); 
	generate_exception(3) -> exit(a); 
	generate_exception(4) -> {'EXIT', a}; 
	generate_exception(5) -> erlang:error(a). 

	demo1() -> 
	   [catcher(I) || I <- [1,2,3,4,5]]. 
	catcher(N) -> 
	   try generate_exception(N) of 
		  Val -> {N, normal, Val} 
	   catch 
		  throw:X -> {N, caught, thrown, X}; 
		  exit:X -> {N, caught, exited, X}; 
		  error:X -> {N, caught, error, X} 
	   end. 
	demo2() -> 
	   [{I, (catch generate_exception(I))} || I <- [1,2,3,4,5]]. 
	demo3() -> 
	   try generate_exception(5) 
	   catch 
		  error:X -> 
			 {X, erlang:get_stacktrace()} 
	   end. 
	lookup(N) -> 
	   case(N) of 
		  1 -> {'EXIT', a}; 
		  2 -> exit(a) 
	   end.
```


# 🚩 io 模块
https://www.cnblogs.com/zhongwencool/p/playwithioformat.html

格式化函数常用格式序列字符：

https://www.erlang.org/doc/man/io_lib

	format(Format, Data) -> chars()
	fwrite(Format, Data) -> chars()
	format(Format, Data, Options) -> chars()  OTP 21.0
	fwrite(Format, Data, Options) -> chars()  OTP 21.0

https://www.erlang.org/doc/man/io

	format(Format) -> ok
	format(Format, Data) -> ok
	format(IoDevice, Format, Data) -> ok
	fwrite(Format) -> ok
	fwrite(Format, Data) -> ok
	fwrite(IoDevice, Format, Data) -> ok

	Types
		IoDevice = device()
		Format = format()
		Data = [term()]


	io:format("this is a ~s from ~w~n", ["hello world", erlang]).
	io:format("~p", [[1,2,3]]).

	io:format("~6s~n", ["Apple"]). % " Apple"
	io:format("~6w~n", [apple]).   % " apple"
	io:format("~6.3f~n", [3.14]). % " 3.140"

	io:fwrite("~.16B~n", [-31]).      % -1F
	io:fwrite("~.16X~n", [-31,"0x"]). % -0x1F
	io:fwrite("~.16#~n", [-31]).      % -16#1F

格式序列基本形式是 `~F.P.PadModC`，波浪号和最后的字符类型控制才是必需参数：

1. F is the field width of the printed argument. 
2. P is the precision of the printed argument.
3. Pad is the padding character. 
4. Mod is the control sequence modifier. 
5. The character C determines the type of control sequence to be used. 

控制字符，~n 表示换行：

	c The argument is a number that is interpreted as an ASCII code.
	e The argument is a float that is written as [-]d.ddde+-ddd,
	f The argument is a float that is written as [-]ddd.ddd,
	s Prints the argument with the string syntax. 
	w Writes data with the standard syntax.
	p Writes the data with standard syntax in the same way as ~w, but breaks terms
	W Writes data in the same way as ~w, but takes an extra argument that is the maximum depth to which terms are printed.
	P Writes data in the same way as ~p, but takes an extra argument that is the maximum depth to which terms are printed. 

	B Writes an integer in base 2-36, the default base is 10.
	X Like B, but takes an extra argument that is a prefix to insert before the number, but after the leading dash, if any.
	# Like B, but prints the number with an Erlang style #-separated base prefix. 
	b Like B, but prints lowercase letters.
	x Like X, but prints lowercase letters.
	+ Like #, but prints lowercase letters.
	n Writes a new line.
	i Ignores the next term.

The current modifiers are:

	t For Unicode translation.
	l For stopping p and P from detecting printable characters.
	k For use with p, P, w, and W to format maps in map-key ordered order (see maps:iterator_order()).
	K Similar t o k, for formatting maps in map-key order, but takes an extra argument that specifies the maps:iterator_order().

For example:

```sh
> M = #{ a => 1, b => 2 }.
#{a => 1,b => 2}
> io:format("~Kp~n", [reversed, M]).
#{b => 2,a => 1}
ok
```

格式化函数中 Format 数据类型为 format() = atom() | string() | binary()，可以是原子、字符串以及二进制数据。

I/O 驱动类型 device() = atom() | pid()，可以是标准的输入输出 standard_io, 或是错误信息的输入输出 standard_error，也可以是一个使用 file:open/2 打开处理 I/O 协议的 pid(或 register name )，比如：

```erlang
%% 写入二进制数据 <<"good">> 到在当前目录下 test.txt 文件(没有则创建)
{ok, IoDevice} = file:open("test.txt", [write,binary]),
io:format(IoDevice, <<"good">>, []),
ok = file:close(IoDevice).
```

利用预处理和宏函数打印调试信息：

```erlang
-ifndef(PRINT).
-define(PRINT(Var), io:format("DEBUG: ~p:~p - ~p=~p~n~n", [?MODULE, ?LINE, ??Var, Var])).
-endif.

main(Args) ->
    MyValue = test_value,
    ?PRINT(MyValue).
```

ANSI 色彩控制参考
https://github.com/julianduque/erlang-color


io 模块定义的数据类型 Data Types：

	device() = atom() | pid()
	An I/O device, either standard_io, standard_error, a registered name, or a pid handling I/O protocols (returned from file:open/2).

	For more information about the built-in devices see Standard Input/Output and Standard Error.

	opt_pair() =
	    {binary, boolean()} |
	    {echo, boolean()} |
	    {expand_fun, expand_fun()} |
	    {encoding, encoding()} |
	    {atom(), term()}
	get_opt_pair() = opt_pair() | {terminal, boolean()}
	expand_fun() = fun((string()) -> {yes | no, string(), list()})
	encoding() =
	    latin1 | unicode | utf8 | utf16 | utf32 |
	    {utf16, big | little} |
	    {utf32, big | little}
	setopt() = binary | list | opt_pair()
	format() = atom() | string() | binary()
	location() = erl_anno:location()
	prompt() = atom() | unicode:chardata()
	server_no_data() = {error, ErrorDescription :: term()} | eof
	What the I/O server sends when there is no data.

io_lib 模块定义的数据类型 Data Types：

	chars() = [char() | chars()]
	continuation()
	A continuation as returned by fread/3.

	chars_limit() = integer()
	depth() = -1 | integer() >= 0
	fread_error() =
	    atom | based | character | float | format | input | integer |
	    string | unsigned
	fread_item() = string() | atom() | integer() | float()
	latin1_string() = [unicode:latin1_char()]
	format_spec() =
	    #{control_char := char(),
	      args := [any()],
	      width := none | integer(),
	      adjust := left | right,
	      precision := none | integer(),
	      pad_char := char(),
	      encoding := unicode | latin1,
	      strings := boolean(),
	      maps_order => maps:iterator_order()}
	Where:

	control_char is the type of control sequence: $P, $w, and so on.

	args is a list of the arguments used by the control sequence, or an empty list if the control sequence does not take any arguments.

	width is the field width.

	adjust is the adjustment.

	precision is the precision of the printed argument.

	pad_char is the padding character.

	encoding is set to true if translation modifier t is present.

	strings is set to false if modifier l is present.

	maps_order is set to undefined by default, ordered if modifier k is present, or reversed or CmpFun if modifier K is present.


# 🚩 Logger 日志
- [System Principles - Error Logging](https://erlang.org/doc/system_principles/error_logging.html)
- [SASL Error Logging](https://erlang.org/doc/apps/sasl/error_logging.html)
- [Kernel User's Guide - Logging](https://erlang.org/doc/apps/kernel/logger_chapter.html)
- [Logger module](https://erlang.org/doc/man/logger.html)
- [disk_log module](https://erlang.org/doc/man/disk_log.html)
- [Syslog protocol RFC 5424](https://www.ietf.org/rfc/rfc5424.txt)

Erlang 系统的错误信息默认是输出到 tty - Teletype terminal unit 即控制台字符设备，并且是由核心应用 Logger 日志模块处理的：

	=ERROR REPORT==== 9-Dec-2003::13:25:02 ===
	Error in process <0.27.0> with exit value: {{badmatch,[1,2,3]},[{m,f,1},{shell,eval_loop,2}]}

在 OTP behaviours 架构中，标准行为 supervisor, gen_server, gen_event, gen_statem 等等，都是向 Logger 发送进程和错误消息。比如，Kernel 一启动就给 logger 模块配置好 logger_level 参数，默认会记录错误 error 和信息报告 information reports。

Erlang/OTP 21.0 引入新的 logger，默认的 SASL 程序不再影响日志的记录，内核配置的日志处理器会记录 Supervisor Report 和 Crash Report。

在 Erlang/OTP 21.0 之前，Crash Report 或 Progress Report 都是在 SASL 应用程序运行后作记录的，可以提供向后兼容选项，内核配置 logger_sasl_compatible 为 true 即可。 


查询 kernel 的 info 级别的日志记录：

	>erl -kernel logger_level info -s init stop
	=PROGRESS REPORT==== 15-Jun-2020::17:03:16.209000 ===
		application: kernel
		started_at: nonode@nohost
	=PROGRESS REPORT==== 15-Jun-2020::17:03:16.222000 ===
		application: stdlib
		started_at: nonode@nohost
	Eshell V10.4  (abort with ^G)
	1>

Report Browser 这个工具通过 log_mf_h 日志处理器，来浏览和格式化错误报告。

	5> rb:start([{max, 20}]).
	rb: reading report...done.
	rb: reading report...done.
	rb: reading report...done.
	rb: reading report...done.
	{ok,<0.199.0>}
	> rb:help().

	Report Browser Tool - usage
	===========================
	rb:start()         - start the rb_server with default options
	rb:start(Options)  - where Options is a list of:
		  {start_log, FileName}
	...

修改默认的日志处理器，比如，使用 disk_log 模块可以实现日志写入文件。

一个日志事件包含了 level、 message、 metadata 三部分内容，日志过滤器对日志事件的 level 层层过滤，在 logger 模块中定义了和各个级别相关的宏：

	-include_lib("kernel/include/logger.hrl").

	?LOG_EMERGENCY (FunOrFormat,Args[,Metadata])
	?LOG_ALERT (FunOrFormat,Args[,Metadata])
	?LOG_CRITICAL (FunOrFormat,Args[,Metadata])
	?LOG_ERROR (FunOrFormat,Args[,Metadata])
	?LOG_WARNING (FunOrFormat,Args[,Metadata])
	?LOG_NOTICE (FunOrFormat,Args[,Metadata])
	?LOG_INFO (FunOrFormat,Args[,Metadata])
	?LOG_DEBUG (FunOrFormat,Args[,Metadata])
	?LOG (Level,FunOrFormat,Args[,Metadata])

	?LOG_EMERGENCY (StringOrReport[,Metadata])
	?LOG_ALERT (StringOrReport[,Metadata])
	?LOG_CRITICAL (StringOrReport[,Metadata])
	?LOG_ERROR (StringOrReport[,Metadata])
	?LOG_WARNING (StringOrReport[,Metadata])
	?LOG_NOTICE (StringOrReport[,Metadata])
	?LOG_INFO (StringOrReport[,Metadata])
	?LOG_DEBUG (StringOrReport[,Metadata])
	?LOG (Level,StringOrReport[,Metadata])

这些宏包封的是 log 函数：

	logger:log(Level,Arg1[,Arg2[,Arg3]])

或者使用其它关联到指定级别的日志方法，可以指定一个用于格式化的回调函数：

	logger:error("The file does not exist: ~ts",[Filename])
	logger:notice("Something strange happened!")
	logger:debug(#{got => connection_request, id => Id, state => State},
				 #{report_cb => fun(R) -> {"~p",[R]} end})

这些日志级别 Log Levels 在内部是以数值表示的，级别设置参考了 ：

| Level		| Integer	| 描述 |
| :-------	| :-------	| :------- |
| emergency	| 0	| system is unusable |
| alert		| 1	| action must be taken immediately |
| critical	| 2	| critical conditions |
| error		| 3	| error conditions |
| warning	| 4	| warning conditions |
| notice	| 5	| normal but significant conditions |
| info		| 6	| informational messages |
| debug		| 7	| debug-level messages |

Logger 模块提供的 Handler 配置函数：

- get_handler_config/0,1
- set_handler_config/2,3
- update_handler_config/2,3
- add_handler_filter/3
- remove_handler_filter/2
- update_formatter_config/2,3

Kernel 程序和日志相关的配置：

	logger = [Config]
	logger_level = Level
	logger_sasl_compatible = true | false

配置修改示例，修改默认日志写入到文件 log/erlang.log，同时增加一个 info 日志：

	[{kernel,
	  [{logger,
		[{handler, default, logger_std_h,
		  #{level => error,
			config => #{file => "log/erlang.log"}}},
		 {handler, info, logger_std_h,
		  #{level => debug,
			config => #{file => "log/debug.log"}}}
		]}]}].

示例：

	1> logger:set_primary_config(level, info).
	ok
	2> logger:set_module_level(mymodule, info).
	ok
	3> logger:set_handler_config(default, level, notice).
	ok
	4> Config = #{config => #{file => "./info.log"}, level => info}.
	#{config => #{file => "./info.log"},level => info}
	5> logger:add_handler(myhandler, logger_std_h, Config).
	ok
	6> logger:add_handler_filter(myhandler, stop_non_info,
								 {fun logger_filters:level/2, {stop, neq, info}}).
	ok

实现一个日志处理器，打印到控制台：

	-module(myhandler1).
	-export([log/2]).

	log(LogEvent, #{formatter := {FModule, FConfig}}) ->
		io:put_chars(FModule:format(LogEvent, FConfig)).

实现一个写文件的日志处理器：

	-module(myhandler2).
	-export([adding_handler/1, removing_handler/1, log/2]).
	-export([init/1, handle_call/3, handle_cast/2, terminate/2]).

	adding_handler(Config) ->
		MyConfig = maps:get(config,Config,#{file => "myhandler2.log"}),
		{ok, Pid} = gen_server:start(?MODULE, MyConfig, []),
		{ok, Config#{config => MyConfig#{pid => Pid}}}.

	removing_handler(#{config := #{pid := Pid}}) ->
		gen_server:stop(Pid).

	log(LogEvent,#{config := #{pid := Pid}} = Config) ->
		gen_server:cast(Pid, {log, LogEvent, Config}).

	init(#{file := File}) ->
		{ok, Fd} = file:open(File, [append, {encoding, utf8}]),
		{ok, #{file => File, fd => Fd}}.

	handle_call(_, _, State) ->
		{reply, {error, bad_request}, State}.

	handle_cast({log, LogEvent, Config}, #{fd := Fd} = State) ->
		do_log(Fd, LogEvent, Config),
		{noreply, State}.

	terminate(_Reason, #{fd := Fd}) ->
		_ = file:close(Fd),
		ok.

	do_log(Fd, LogEvent, #{formatter := {FModule, FConfig}}) ->
		String = FModule:format(LogEvent, FConfig),
		io:put_chars(Fd, String).



# 🚩 Myths of Erlang Performance
- [Retired Myths](https://erlang.org/doc/efficiency_guide/retired_myths.html)
- [The Seven Myths of Erlang Performance](https://erlang.org/doc/efficiency_guide/myths.html)


The Seven Myths of Erlang Performance

2.1  Myth: Tail-Recursive Functions are Much Faster Than Recursive Functions

2.2  Myth: Operator "++" is Always Bad


2.3  Myth: Strings are Slow

2.4  Myth: Repairing a Dets File is Very Slow

2.5  Myth: BEAM is a Stack-Based Byte-Code Virtual Machine (and Therefore Slow)

2.6  Myth: Use `_` to Speed Up Your Program When a Variable is Not Used

2.7  Myth: A NIF Always Speeds Up Your Program

Retired Myths

12.1  Myth: Funs are Slow

But that is history. Funs was given its own data type in R6B and was further optimized in R7B. Now the cost for a fun call falls roughly between the cost for a call to a local function and apply/3.

12.2  Myth: List Comprehensions are Slow

Nowadays, the compiler rewrites list comprehensions into an ordinary recursive function. Using a tail-recursive function with a reverse at the end would be still faster. Or would it? That leads us to the myth that tail-recursive functions are faster than body-recursive functions.

12.3  Myth: List subtraction ("--" operator) is slow

List subtraction used to have a run-time complexity proportional to the product of the length of its operands, so it was extremely slow when both lists were long.

As of OTP 22 the run-time complexity is "n log n" and the operation will complete quickly even when both lists are very long. In fact, it is faster and uses less memory than the commonly used workaround to convert both lists to ordered sets before subtracting them with ordsets:subtract/2.



# 🚩 Erlang Application
- [Application](https://erlang.org/doc/design_principles/applications.html)
- [application module](https://erlang.org/doc/man/application.html)
- [Application resource file - .app](https://erlang.org/doc/man/app.html)
- [Boot script file - .script](https://erlang.org/doc/man/script.html)
- [Release resource file - .rel](https://erlang.org/doc/man/rel.html)
- [Release upgrade file - .relup](https://erlang.org/doc/man/relup.html)
- [Application upgrade file - .appup](https://erlang.org/doc/man/appup.html)
- [Creating and Upgrading a Target System](https://erlang.org/doc/system_principles/create_target.html)
- [Upgrade when Erlang/OTP has Changed](https://erlang.org/doc/system_principles/upgrade.html)
- [Appup Cookbook](http://erlang.org/doc/design_principles/appup_cookbook.html)
- [Release Handling](https://erlang.org/doc/design_principles/release_handling.html)
- [Release Structure](https://erlang.org/doc/design_principles/release_structure.html)
- [Building applications with OTP](https://learnyousomeerlang.com/building-applications-with-otp)

Erlang 应用程序就是一组相关代码和进程，使用 OTP 框架的程序就是 Erlang/OTP 应用程序。

启动 Erlang shell 后，默认至少运行了以下两个程序：

- kernel Application
- STDLIB Application

不要将这里运行的 STDLIB 程序和 STDLIB 标准库混乱，这是两个不同的东西，一般来说，还有一个 SASL 程序也是经常需要用到的，因为这三个应用程序是 Erlang 系统中运行的最基本程序。

Kernel 应用程序拥有运行基础代码以运行 Erlang runtime system，包括文件服务、代码服务等等，它是第一运行和程序。它也是强制运行的，因为基于 Erlang/OTP 最小系统就包括 Kernel 和 STDLIB 两个程序。

Kernel 应用程序拥有运行基础代码以运行 Erlang runtime system，包括文件服务、代码服务等等，它是最先运行的程序。它也是强制运行的，因为基于最小系统就包括 Kernel 和 STDLIB 两个程序。

STDLIB 应用程序不提供服务，而 Kernel 应用程序功能如下：

- 应用程序的启动、停止，supervision 监督, 配置, 分布应用程序；
- 代码加载 Code loading；
- 日志记录 Logging；
- 全局进程名称服务 Global name service；
- 监督系统 Supervision of Erlang/OTP；
- 套接通信 Communication with sockets；
- 操作系统接口 Operating system interface；

SASL - System Architecture Support Libraries 为 Erlang/OTP 应用程序架构提供了以下机制支持，主要用于应用程序的发布打包升级等：

- alarm_handler 警告事件处理机制；
- release_handler 程序发布机制；
- systools 程序发布打包生成工具；

注意 Erlang/OTP 的 SASL 应用与 RFC 4422 文档中的 Simple Authentication and Security Layer 没有任何关系。

## 🍀 OTP Application
https://www.erlang.org/doc/design_principles/users_guide

Erlang/OTP 工程的基本框架，即 Supervision Tree 架构：

- 项目可以包含很多个 `Application`，它包含了本应用的所有代码，可以随时加载和关闭；
- Application 一般会包含一个顶层 `Supervisor` 进程用来监控 `Worker`，这使得设计和编程容错软件成为可能；
- 顶层 Supervisor 下面管理了许多 sub Supervisor 和 Worker 进程。
- 业务逻辑都在 Worker 里面，Supervisor 里可以定制重启策略，如果返现某个 Worker 挂掉了，可以按照既定的策略重启它。

可以将 OTP 监察树构架抽象为二叉树，Supervision Tree 所有叶节点都是受监管的 Worker，它们是真正做事的进程，而其它节点都是监管进程。

Supervisor 负责启动，停止和监视其子进程，基本思想是通过在必要时重新启动它们来保持子进程的活动。

在 Erlang/OTP 架构中，一切进程都是轻量级的，都可以被监控 monitor，有 Supervisor 专门做监控。你可以方便的用一个 Supervisor 进程去管理子进程，它会根据你设定的策略，来处理意外挂掉的子进程。这种情况的问题的是，错误处理稍微做不好就会挂，Restart Strategy 重启策略有：

- one_for_one：只重启挂掉的子进程
- one_for_all：有一个子进程挂了，重启所有子进程
- rest_for_one：一个子进行挂掉，该子进程和所有在其之后创建的子进程都会重启。

在监督树中，许多流程具有相似的结构，它们遵循类似的模式，即抽象为 Behaviour 模型。Supervisor 的结构相似，他们之间唯一的区别是他们监督哪个子进程。许多 Worker 都是 C/S 服务器对客户端关系模式中的服务器角色，Worker 对应各种 Behaviour，包括有限状态机器 gen_statem、错误事件记录器 gen_event 等事件处理程序，还有 gen_server 通用服务器行为。

总结起来，Erlang/OTP 系统就是三大基础应用程序，四大 Behaviour 中，除 Supervisor 外，都在监督树充当 Worker 角色：

- `gen_server` Generic server behaviour，实现 C/S 架构中的服务端；
- `gen_statem` Generic state machine behaviour，实现一个有限状态机 FSM - Finite State Machine；
- `gen_event`  Generic event handling behavior，实现事件处理功能；
- `supervisor` Generic supervisor behavior，实现监督者，它以监督树的方式存在；


推荐的开发阶段使用的目录结构：

	─ ${application}
	  ├── doc
	  │   ├── internal
	  │   ├── examples
	  │   └── src
	  ├── include
	  ├── priv 
	  ├── src 
	  │   └── ${application}.app.src
	  └── test

- `src` 必要的，存放源代码，内部头文件等，子目录可以作为命名空间组织，但不应该有二级子目录！
- `priv` - Optional，存放程序指定文件；
- `include` - Optional，存放公开头文件等；
- `doc` - Recommended，源代码文档，应该存放在子目录下；
- `doc/internal` - Recommended，存放内部实现代码细节文档；
- `doc/examples` - Recommended，存放公开的示例源代码；
- `doc/src` - Recommended，归档原文件，如 Markdown, AsciiDoc 或 XML-files；
- `test` - Recommended，保存用于测试的文档，如测试脚本等；

其它目录可以根据需要添加，比如 c_src 存放 C 代码，java_src 存放 Java 代码，go_src 存放 Go 代码。

发布后，推荐使用的应用程序目录结构：

	─ ${application}-${version}
	  ├── bin
	  ├── doc
	  │   ├── html
	  │   ├── man[1-9]
	  │   ├── pdf
	  │   ├── internal
	  │   └── examples
	  ├── ebin
	  │   └── ${application}.app
	  ├── include
	  ├── priv
	  │   ├── lib
	  │   └── bin
	  └── src

- `src` - Optional，包含公开的代码及内部头文件；
- `ebin` - 必要的，存放编译后的 Erlang 字节码文件 `.beam`，还有 `.app` 必需保存在此；
- `priv` - Optional，存放程序指定文件，可以使用 `code:priv_dir/1` 函数访问；
- `priv/lib` - 推荐的，共享对象文件，如 NIFs 或 linked-in-drivers 应该存放在此；
- `priv/bin` - 推荐的，可以执行文件，如 port-programs 应该存放在此；
- `include` - Optional，存放公共头文件等；
- `bin` - Optional，存放可执行文件，如 escripts 或 shell-scripts；
- `doc` - Optional，存放发布文档等资源；
- `doc/man1` - 推荐的，存放 Application executables 手册；
- `doc/man3` - 推荐的，存放 module APIs 手册；
- `doc/man6` - 推荐的，存放 Application overview 手册；
- `doc/html` - Optional，存放整个应用的 HTML 页面；
- `doc/pdf` - Optional，存入整个应用的 PDF 文档；


在经典 Erlang/OTP 程序框架中，Supervision Tree 框架应用程序实现了各种上回调模块，包括 Application Callback Module，它提供了两个函数来启动或终止应用：

- start(StartType, StartArgs) -> {ok, Pid} or {ok, Pid, State}
- stop(State)

参数解析：

- `start` 函数在顶级 Supervisor 启动应用时进行回调，需要它返回顶级 Supervisor 的 pid 和选项，还有状态数据 State，默认是空列表 []；
- `StartArgs` 启动参数，可以由应用程序资源文件 `.app` 定义的 `mod` 设置；
- `stop/1` 在应用程序停止后或做清理时调用，真实的停止是 Supervision Tree 关闭时。

在 Erlang 中，程序可以包含其它任意个程序，Included Applications，有独立的目录结构，子程序同时只能被一个程序拥有，通常通过 Supervision Tree 启动。而只包含子程序的顶级程序，叫做主程序 Primary Application。它们可以在 `.app` 文件中配置，子程序在启动时的同步可以使用 `start_phases` 设置，而 `mod` 必需设置为 `{application_starter,[Module,StartArgs]}`，StartArgs 会在子程序启动时传入 `Module:start/2` 函数：

	{application, prim_app,
	 [{description, "Tree application"},
	  {vsn, "1"},
	  {modules, [prim_app_cb, prim_app_sup, prim_app_server]},
	  {registered, [prim_app_server]},
	  {included_applications, [incl_app]},
	  {start_phases, [{init,[]}, {go,[]}]},
	  {applications, [kernel, stdlib, sasl]},
	  {mod, {application_starter,[prim_app_cb,[]]}},
	  {env, [{file, "/usr/local/log"}]}
	 ]}.

	{application, incl_app,
	 [{description, "Included application"},
	  {vsn, "1"},
	  {modules, [incl_app_cb, incl_app_sup, incl_app_server]},
	  {registered, []},
	  {start_phases, [{go,[]}]},
	  {applications, [kernel, stdlib, sasl]},
	  {mod, {incl_app_cb,[]}}
	 ]}.

Erlang 运行时系统启动后，需要一些进程来与应用程序进行交互，它们注册为`程序控制器进程` application_controller，就像是 Kernel application 核心进程的一部分。应用程序可以进行四种基本操作，`loaded`, `unloaded`, `started`, `stopped`。

示例，Supervision Tree 框架应用程序回调模块：

ch_sup.erl 模块：

	-module(ch_sup).
	-behaviour(supervisor).

	-compile([export_all,nowarn_export_all]).

	% -export([start_link/0]).
	% -export([init/1]).

	start_link() ->
		supervisor:start_link(ch_sup, []).

	init(_Args) ->
		SupFlags = #{strategy => one_for_one, intensity => 1, period => 5},
		ChildSpecs = [#{id => ch3,
						start => {ch3, start_link, []},
						restart => permanent,
						shutdown => brutal_kill,
						type => worker,
						modules => [cg3]}],
		{ok, {SupFlags, ChildSpecs}}.

ch_app.erl 模块：

	-module(ch_app).
	-behaviour(application).

	-export([start/2, stop/1]).

	start(_Type, _Args) ->
		ch_sup:start_link().

	stop(_State) ->
		ok.

ch_app.app 应用程序资源文件：

	{application, ch_app,
	 [{description, "Channel allocator"},
	  {vsn, "1"},
	  {modules, [ch_app, ch_sup, ch3]},
	  {registered, [ch3]},
	  {applications, [kernel, stdlib, sasl]},
	  {mod, {ch_app,[]}},
	  {env, [{file, "/usr/local/log"}]}
	 ]}.

加载应用程序 application:load 需要用到 `.app` 文件，文件名必需和指定的 atom 程序名相同，每个选项都是 `{Key,Value}` 元组键值对。其中 `mod` 主键指定的值就是应用程序启动时的参数，这里指定的是 ch_app 和 []。这里指定的 `env` 这些配置可以使用 application 模块的  `get_env`、`get_all_key` 或 `get_key` 方法获取相应数据。

在发布应用程序时，可以使用 Erlang/OTP 提供的打包工具 `systools` 生成应用程序资源文件。它生成的文件包含以下这些主键 `description`, `vsn`, `modules`, `registered`, `applications`。

其中 applications 主键设置了应用程序的依赖项，kernel、stdlib、sasl 是程序的基础依赖，默认前两者是加载的。注意，如果依赖模块没有运行，是不能够运行 Application 的：

	1> application:start(ch_app).
	{error,{not_started,sasl}}
	2> application:start(sasl).
	ok

一个程序停止后，卸载后，或者根本没有开始，它就会从 Erlang 内部的应用控制器数据库中移除：

	1> application:load(ch_app).
	ok
	2> application:loaded_applications().
	[{kernel,"ERTS  CXC 138 10","2.8.1.3"},
	 {stdlib,"ERTS  CXC 138 10","1.11.4.3"},
	 {ch_app,"Channel allocator","1"}]

	3> application:start(ch_app).
	ok
	4> application:get_env(ch_app, file).
	{ok,"/usr/local/log"}

	5> application:unload(ch_app).
	ok
	6> application:loaded_applications().
	[{kernel,"ERTS  CXC 138 10","2.8.1.3"},
	 {stdlib,"ERTS  CXC 138 10","1.11.4.3"}]

	7> application:which_applications().
	[{stdlib,"ERTS  CXC 138 10","3.9"},
	 {kernel,"ERTS  CXC 138 10","6.4"}]

	9> application:get_all_key(ch_app).
	{ok,[{description,"Channel allocator"},
		 {id,[]},
		 {vsn,"1"},
		 {modules,[ch_app,ch_sup,ch3]},
		 {maxP,infinity},
		 {maxT,infinity},
		 {registered,[ch3]},
		 {included_applications,[]},
		 {applications,[kernel,stdlib,sasl]},
		 {env,[{file,"/usr/local/log"}]},
		 {mod,{ch_app,[]}},
		 {start_phases,undefined}]}

可以指定配置运行程序，假设内容 `test.config` 配置内容 `[{ch_app, [{file, "testlog"}]}].`，注意有句点：

	% erl -config test
	Erlang (BEAM) emulator version 5.2.3.6 [hipe] [threads:0]

	Eshell V5.2.3.6  (abort with ^G)
	1> application:start(ch_app).
	ok
	2> application:get_env(ch_app, file).
	{ok,"testlog"}

如果使用了 Release Handling 还可以配置 sys.config，包括 `.app` 文件的配置所有配置都可以通过命令行指定:

	% erl -ApplName Par1 Val1 ... ParN ValN

Example:

	% erl -ch_app file '"testlog"'
	Erlang (BEAM) emulator version 5.2.3.6 [hipe] [threads:0]

	Eshell V5.2.3.6  (abort with ^G)
	1> application:start(ch_app).
	ok
	2> application:get_env(ch_app, file).
	{ok,"testlog"}

应用程序启动时，可以指定启动类型，`永久方式` permanent 或`临时方式` transient：

- application:start(Application, Type)
- application:start(Application) 
- application:start(Application, temporary)

默认是临时方式，永久方式启动的应用程序终止意味着运行时系统也终止。

临时应用程序可以是正常终止 `normal`，也可以是其它反常终止 `abnormally`，这时其它程序和运行时系统也终止，并产生一个 `normal` 以外的 Reason。如果是终结 `terminates`，那么其它应用程序不会终止。

应用程序总是可以通过 `application:stop/1` 函数结束，不管什么运行模式，并且不影响其它应用程序。

临时应用程序在实践中少见，因为，Supervision Tree 结束时产的 Reason 是 `shutdown` 而不是 `normal`。


## 🍀 OTP Application Pool
- [Building applications with OTP](https://learnyousomeerlang.com/building-applications-with-otp)

Erlang 应用程序就是一组相关代码和进程，使用 OTP 框架的程序就是 Erlang/OTP 应用程序。

本节内容演示 Erlang/OTP 工程的基本框架，即 Supervision Tree 架构：

- 项目可以包含很多个 `Application`，它包含了本应用的所有代码，可以随时加载和关闭；
- Application 一般会包含一个顶层 `Supervisor` 进程用来监控 `Worker`，这使得设计和编程容错软件成为可能；
- 顶层 Supervisor 下面管理了许多 sub Supervisor 和 Worker 进程。
- 业务逻辑都在 Worker 里面，Supervisor 里可以定制重启策略，如果返现某个 Worker 挂掉了，可以按照既定的策略重启它。

这里以一个线程池程序为例，实现功能：

- 限制最大服务连接为 N；
- 限制应用程序打开文件数量；
- 分配优先权给子系统；
- 允许程序在突发条件下过载；

提供函数支持：

- 程序启动和停止函数；
- 指定线程的启动和停止；
- 在线程池中运行任务，并在满池情况下告知不能运行任务；
- 在线程池中运行任务如果有余量线程空间，否则让主调线程进入队列等待，在可以运行任务时释放；
- 在张程池中运行异步任务，如果不能立即运行就安排队列，并在有空闲进程时立即运行；

洋葱皮理论 The Onion Layer Theory 是分解 Supervision Tree 框架的一种方法，将框架的各个子系统分拆学习理解，再整合成为整体，因为一次过学习整个监督树框架涉及的内容太多了。

在 Learn you some Erlang 网站中，有两章内容演示了 OTP 应用程序的架构组织形式，可以参考其源代码：

- Building an Application With OTP 不使用 Application behaviour，使用普通模块实现程序：
- Building OTP Applications 使用 Application behaviour，按 OTP 框架实现；

Application Pool 程序的目录结构：

	ebin/
	include/
	priv/
	src/
	 - ppool.erl
	 - ppool_sup.erl
	 - ppool_supersup.erl
	 - ppool_worker_sup.erl
	 - ppool_serv.erl
	 - ppool_nagger.erl
	test/
	 - ppool_tests.erl



运行测试：

We can now play with the pool compile all the files and start the pool top-level supervisor itself:

	$ erlc *.erl
	$ erl
	Erlang R14B02 (erts-5.8.3) [source] [64-bit] [smp:4:4] [rq:4] [async-threads:0] [hipe] [kernel-poll:false]
	 
	Eshell V5.8.3  (abort with ^G)
	1> ppool:start_link().
	{ok,<0.33.0>}

From this point, we can try a bunch of different features of the nagger as a pool:

	2> ppool:start_pool(nagger, 2, {ppool_nagger, start_link, []}).
	{ok,<0.35.0>}
	3> ppool:run(nagger, ["finish the chapter!", 10000, 10, self()]).
	{ok,<0.39.0>}
	4> ppool:run(nagger, ["Watch a good movie", 10000, 10, self()]).
	{ok,<0.41.0>}
	5> flush().
	Shell got {<0.39.0>,"finish the chapter!"}
	Shell got {<0.39.0>,"finish the chapter!"}
	ok
	6> ppool:run(nagger, ["clean up a bit", 10000, 10, self()]).
	noalloc
	7> flush().
	Shell got {<0.41.0>,"Watch a good movie"}
	Shell got {<0.39.0>,"finish the chapter!"}
	Shell got {<0.41.0>,"Watch a good movie"}
	Shell got {<0.39.0>,"finish the chapter!"}
	Shell got {<0.41.0>,"Watch a good movie"}
	...

We can try the queuing facilities (asynchronous), just to see:

	8> ppool:async_queue(nagger, ["Pay the bills", 30000, 1, self()]).
	ok
	9> ppool:async_queue(nagger, ["Take a shower", 30000, 1, self()]).
	ok
	10> ppool:async_queue(nagger, ["Plant a tree", 30000, 1, self()]).
	ok
	<wait a bit>
	received down msg
	received down msg
	11> flush().
	Shell got {<0.70.0>,"Pay the bills"}
	Shell got {<0.72.0>,"Take a shower"}
	<wait some more>
	received down msg
	12> flush().
	Shell got {<0.74.0>,"Plant a tree"}
	ok

Great! So the queuing works. The log here doesn't show everything in a very clear manner, but what happens there is that the two first naggers run as soon as possible. Then, the worker limit is hit and we need to queue the third one (planting a tree). When the nags for paying the bills are done for, the tree nagger is scheduled and sends the message a bit later.

The synchronous one will behave differently:

	13> ppool:sync_queue(nagger, ["Pet a dog", 20000, 1, self()]).
	{ok,<0.108.0>}
	14> ppool:sync_queue(nagger, ["Make some noise", 20000, 1, self()]).
	{ok,<0.110.0>}
	15> ppool:sync_queue(nagger, ["Chase a tornado", 20000, 1, self()]).
	received down msg
	{ok,<0.112.0>}
	received down msg
	16> flush().
	Shell got {<0.108.0>,"Pet a dog"}
	Shell got {<0.110.0>,"Make some noise"}
	ok
	received down msg
	17> flush().
	Shell got {<0.112.0>,"Chase a tornado"}
	ok

Again, the log isn't as clear as if you tried it yourself (which I encourage). The basic sequence of events is that two workers are added to the pool. They aren't done running and when we try to add a third one, the shell gets locked up until ppool_serv (under the process name nagger) receives a worker's down message (received down msg). After this, our call to sync_queue/2 can return and give us the pid of our brand new worker.

We can now get rid of the pool as a whole:

	18> ppool:stop_pool(nagger).
	ok
	19> ppool:stop().
	** exception exit: killed

## 🍀 hot-update 热更新
- [functional interface to system messages](https://erlang.org/doc/man/sys.html)

Erlang 支持运行时的代码更新，使用 `l()` 加载字节码文件，代码更新作用在模块级别，每个代码模块允许存在两个版本在系统中。即连续两次执行 `l()` 就会杀死模块旧版的进程，即使模块没有更新。但是新启动的进程，总是以最后加载的字节码为准。

列如以下模块 hot_update.erl：

	-module(hot_update).
	-export([start/0]).
	start() ->
		spawn(fun loop/0).
	loop() ->
		receive
			_ -> loop()
		after 1500 ->
			io:format("vsn~p~n", [1]),
			loop()
		end.

打开 Erlang shell 编译并运行它，然后连续执行 `l()` 加载模块，通过 `is_process_alive` 会发现旧进程被干掉了：

	>erl
	Eshell V10.4  (abort with ^G)
	1> c(hot_update).
	{ok,hot_update}
	2> P1 = hot_update:start().
	<0.83.0>
	3> vsn v3.21
	3> l(hot_update).vsn v3.21
	{module,hot_update}
	4> l(hot_update).vsn v3.21
	4> vsn v3.21
	{module,hot_update}
	5> erlang:is_process_alive(P1).
	false

一个更新的版是通过消息来实现热更新，注意，需要导出 loop/0 函数，因为需要使用内置宏 `?MODULE` 来调用它：

	-module(hot_update).
	-export([start/0, loop/0]).
	start() ->
		spawn(fun loop/0).
	loop() ->
		receive
			code_switch ->
				?MODULE:loop()
		after 1500 ->
			io:format("vsn v0.10~p~n", [1]),
			loop()
		end.

编译运行测试：

	>erl
	Eshell V10.4  (abort with ^G)
	1> c(hot_update).
	{ok,hot_update}
	2> P1 = hot_update:start().
	<0.83.0>
	3> vsn v0.10
	3> vsn v0.10

运行中在外部修改代码，比如输出 v1.10，并在外部编译好：

	erlc hot_update.erl

再回到运行中的控制台，执行 `l()` 加载更新后的字节码，发送 code_switch 消息通知进程切换新模块的方法：

	3> l(hot_update).
	3> vsn v0.10
	3> P1 ! code_switch.
	code_switch
	4> vsn v1.10

这种更新只是非常初级的应用，其实 OTP 已经帮我们实现了更好的解决方法，就是 gen_server 的 change_code 机制。我想它应该是大家在 Erlang 开发中接触最多的模块了。

我们经常会碰到要修改内部状态 State 的时候，例如原来的 state 不再适用于新的需求，需要增加或者减少某字段，那么 change_code 机制就是解决这种问题的。

首先，认识一下 sys 模块，它用来向进程发送系统消息 System Messages，如暂停、恢复、退出等：

- sys:get_state(Name) -> State 获取进程的 State
- sys:suspend(Name) -> ok 暂停进程
- sys:change_code(Name, Module, OldVsn, Extra) -> ok | {error, Reason}. 激发代码更新动作
- sys:resume(Name) -> ok 恢复进程
- sys:terminate(Name, Reason) -> ok 终止进程
- get_status(Name) -> Status 获取进程状态

实现一个基本的 get_server：

	-module(hot_update).
	-behaviour(gen_server).

	-export([start/0, vsn/0]).
	-export([init/1, handle_call/3, handle_cast/2, handle_info/2, 
		terminate/2, code_change/3]).

	-record(state, {}).

	vsn() -> 1.

	% model API
	start() ->
		gen_server:start(?MODULE, [], []).

	% gen_server API
	init([]) ->
		{ok, #state{}}.
	handle_call(_Request, _From, State) ->
		{reply, ok, State}.
	handle_cast(_Request, State) ->
		{noreply, State}.
	handle_info(_Info, State) ->
		{noreply, State}.
	terminate(_Reason, _State) ->
		ok.
	code_change(_OldVsn, {state}, _Extra) ->
		io:format("old:~p, ex:~p~n", [_OldVsn, _Extra]),
		{ok, #state{}}.

加载之前编译好代码：

	>erl
	Eshell V10.4  (abort with ^G)
	1> c(hot_update).
	{ok,hot_update}
	2> {ok, P} = hot_update:start().
	{ok,<0.83.0>}
	3> sys:get_state(P).
	{state}

现在，需要改变了，state 结构体和 code_change 按以下修改：

	-record(state, {a, b, c}).

	{ok, #state{a = "1", b = "2", c = "3"}}.

现在，我们需要先暂停运行中的进程，并将加载编译好的更新代码。注意，sys:change_code 一定要在进程暂停后才能运行，然后查询新的 State，还有恢复进程运行：

	4> c(hot_update).
	{ok,hot_update}
	5> l(hot_update).
	{module,hot_update}
	5> sys:suspend(P).
	ok
	6> sys:change_code(P, hot_update, "0.1.1", []).
	old:"0.1.1", ex:[]
	ok
	7> sys:resume(P).
	ok
	9> sys:get_state(P).
	{state,"123"}



## 🍀 Upgrade File 自动升级

Erlang 程序天生高可用，可以无间断升级，它提供 SASL 应用实现程序的热更新，注意 Erlang/OTP 的 SASL 应用与 RFC 4422 文档中的 Simple Authentication and Security Layer 没有任何关系。

OTP 的 SASL 提供以下功能：

- `systools` 

	发布处理工具模块，包含各种文件生成：, `.script`，生成发布升级文件 `.relup` 和生成升级包；

	- `make_relup/3`	生成升级描述文件 `relup`；
	- `make_relup/4`	生成升级描述文件 `relup`；
	- `make_script/1`	生成启动脚本文件 `.script`；
	- `make_script/2`	生成启动脚本文件 `.script`；
	- `make_tar/1`		生成程序升级包 `.tar.gz`；
	- `make_tar/2`		生成程序升级包 `.tar.gz`；
	- `script2boot/1`	启动脚本转换为字节码文件 `.boot`；

- `alarm_handler`

	警告事件处理进程模块，是 gen_event 类型进程。

- `release_handler`

	发布处理进程模块，解包和安装 `systools` 生成的发布包。


涉及的文件用途及格式：

- `.app` Application resource file

	描述程序信息，如 `Application.app` 文件就是对应 Application 程序； 

		{application, Application, [
			{description,  Description},
			{id,           Id},
			{vsn,          Vsn},
			{modules,      Modules},
			{maxP,         MaxP},
			{maxT,         MaxT},
			{registered,   Names},
			{included_applications, Apps},
			{applications, Apps},
			{env,          Env},
			{mod,          Start},
			{start_phases, Phases},
			{runtime_dependencies, RTDeps}]}.

					Value                Default
					:-----               :-------
		Application  atom()               -
		Description  string()             ""
		Id           string()             ""
		Vsn          string()             ""
		Modules      [Module]             []
		MaxP         int()                infinity
		MaxT         int()                infinity
		Names        [Name]               []
		Apps         [App]                []
		Env          [{Par,Val}]          []
		Start        {Module,StartArgs}   []
		Phases       [{Phase,PhaseArgs}]  undefined
		RTDeps       [ApplicationVersion] []

		Module = Name = App = Par = Phase = atom()
		Val = StartArgs = PhaseArgs = term()
		ApplicationVersion = string()

- `.rel` Release Resource File

	描述发布程序的信息，Name, Vsn, EVsn, AppVsn 是字符串：

		{release, {RelName,Vsn}, {erts, EVsn},
			[{Application, AppVsn} |
			{Application, AppVsn, Type} |
			{Application, AppVsn, IncApps} |
			{Application, AppVsn, Type, IncApps}]}.


- `.appup` Application upgrade file

	程序升级文件，描述程序的升级或降级信息，`release_handler` 会根据它来调用 `relup` 模块； 

		{Vsn,
			[{UpFromVsn, Instructions}, ...],
			[{DownToVsn, Instructions}, ...]}.

- `.relup` Release upgrade file

	描述如何升级正在运行的程序，升级文件通过 `systools:make_relup/3,4` 函数生成，输入 `.rel`、 `.app`、 `.appup`。

		{Vsn,
			[{UpFromVsn, Descr, Instructions}, ...],
			[{DownToVsn, Descr, Instructions}, ...]}.

- `.script` Boot script

	启动脚本文件指导 Erlang 运行时如何启动，包含程序或模块的启动指令。通过 `systools` 工具，输入 `.rel`、`.app` 文件生成：

		{script, {Name, Vsn},
			[
			{progress, loading},
			{preLoaded, [Mod1, Mod2, ...]},
			{path, [Dir1,"$ROOT/Dir",...]}.
			{primLoad, [Mod1, Mod2, ...]},
			...
			{kernel_load_completed},
			{progress, loaded},
			{kernelProcess, Name, {Mod, Func, Args}},
			...
			{apply, {Mod, Func, Args}},
			...
			{progress, started}]}.

- `.boot` Boot script binary

	启动脚本转换来的字节码文件，使用 `systools:script2boot/1` 函数将启动脚本转换成字节码谇。例如，使用以下命令来加载 `Name.boot` 启动脚本:

		erl -boot Name


示例，`ch_app` 程序的 .app 文件:

	{application, ch_app,
	 [{description, "Channel allocator"},
	  {vsn, "1"},
	  {modules, [ch_app, ch_sup, ch3]},
	  {registered, [ch3]},
	  {applications, [kernel, stdlib, sasl]},
	  {mod, {ch_app,[]}}
	 ]}.

以及 ch_rel-1.rel 文件，它一定要包含 kernel, stdlib, sasl 三个部分：

	{release,
	 {"ch_rel", "A"},
	 {erts, "5.3"},
	 [{kernel, "2.9"},
	  {stdlib, "1.12"},
	  {sasl, "1.10"},
	  {ch_app, "1"}]
	}.



# 🚩 EDoc 自动化文档
- [EDoc User's Guide](https://erlang.org/doc/apps/edoc/chapter.html)

EDoc 是 Erlang 程序文档生成器，受 Javadoc(TM) 工具的启发，EDoc 是生成 Erlang 文件的工具，还新增了几个 Javadoc 没有的功能。

在代码中编写文档时注意，一定要使用连续的两个百分号 `%%`，并且紧跟 `@` 开头的标记，如下：

	%% @doc Prints the value X.

	-record(foo, {x, y, z}).

	print(X) -> ...

此文档为最相近的有意义程序结构生成，这里即是为 print 函数编写的文档，记录体直接忽略。

执行文档生成的函数：

- `edoc:run/2`: 通用接口函数，为指定一组代码文件生成文档；
- `edoc:application/2`: 为典型的 Erlang 程序生成文档；
- `edoc:files/2`: 从指定的代码中生成文档，EDoc 0.1 旧版函数，弃用；

## 🍀 The overview page

整个程序的概览页面，默认从目标目录下的 overview.edoc 文件生成，参考 edoc_doclet 模块：

	** this is the overview.doc file for the application 'frob' **

	@author R. J. Hacker <rjh@acme.com>
	@copyright 2007 R. J. Hacker
	@version 1.0.0
	@title Welcome to the `frob' application!
	@doc `frob' is a highly advanced frobnicator with low latency,
	...

以下标记可以用于 overview page：

- @author 参考模块标记 `@author`
- @copyright 参考模块标记 `@copyright`
- @doc 参考模块标记 `@doc`
- @reference 参考模块标记 `@reference`
- @see 参考模块标记 `@see`
- @since 参考模块标记 `@since`
- @title 指定 overview page 标题
- @version 参考模块标记 `@version`


## 🍀 Generic tags

@clear 清除前面的标记

	-ifdef(DEBUG).
	%% @doc ...
	foo(...) -> ...
	-endif.
	%% @clear

	%% @doc ...
	bar(...) -> ...

@docfile 读取文档标记，将 plain documentation 内容读入作为文档内容。 参考 @headerfile

@end 结束标记，忽略后续的文档

	%% ----------------------------------
	%% ...
	%% @doc ...
	%% ...
	%% @end
	%% ----------------------------------

@headerfile 文件头标记，类似 @docfile，但会读取 Erlang 头文件 `.hrl`，参考 `edoc:read_source/2`

@todo (or @TODO)

	%% @TODO Finish writing the documentation.

	%% @todo Implement <a href="http://www.ietf.org/rfc/rfc2549.txt">RFC 2549</a>.

	%% TODO: call your mother

@type 抽象数据类型或别名


## 🍀 Module tags

以下标记可以在模块定义前使用

@author 作者名称

	%% @author Richard Carlsson
	%% @author Richard Carlsson <carlsson.richard@gmail.com>
	%%   [http://example.net/richardc/]
	%% @author <carlsson.richard@gmail.com>
	%% @author carlsson.richard@gmail.com [http://example.net/richardc/]

@copyright 版权标记

	%% @copyright 2001-2003 Richard Carlsson

@deprecated 弃用标记

	%% @deprecated Please use the module {@link foo} instead.

@doc 描述标记

	%% @doc This is a <em>very</em> useful module. It is ...

@hidden 隐藏标记，不在文档中显示 EDoc 忽略标记的内容

@private 私有模块标记，除非生成私有文档，否则和 @hidden 一样会隐藏文档。

@reference 参考链接标记

	%% @reference Pratchett, T., <em>Interesting Times</em>,
	%% Victor Gollancz Ltd, 1994.
	%% @reference See <a href="www.google.com">Google</a> for
	%% more information.

@see 参考函数标记中的 @see

@since 引入时间标记

@version 版本标记

## 🍀 Function tags

以下标记在函数前使用

@deprecated 弃用标记

@doc 描述标记

@equiv 等价标记

@hidden 隐藏标记

@param 参数标记

@private 私有标记

@returns 返回标记

@see 参考引用标记，See References，参考 module, function, datatype, application 等

	@see edoc
	@see edoc. <b>EDoc</b>

@since 引入时间标记

@spec 参考 Type specifications

@throws 抛出异常标记

@type 类型标记，通用标记

## 🍀 References

@see, @link 之类的引用标记规则

| Syntax			| Example	| Scope	|
| :-------			| :-------	| :-------	|
| Module			| edoc_run, erl.lang.list	| Global	|
| Function/Arity	| file/2	| Within module	|
| Module:Function/Arity	| edoc:application/2	| Global	|
| Type()			| filename()	| Within module	|
| Module:Type()		| edoc:edoc_module()	| Global	|
| //Application		| edoc	| Global	|
| //Application/Module	| edoc_doclet(3)	| Global	|
| //Application/Module:Function/Arity	| edoc_run:file/1	| Global	|
| //Application/Module:Type()	| edoc:edoc_module()	| Global	|

## 🍀 Wiki notation

Empty lines separate paragraphs

	%% @doc This will all be part of the first paragraph.
	%% It can stretch over several lines and contain <em>any
	%% XHTML markup</em>.
	%%
	%% This is the second paragraph. The above line is
	%% regarded as "empty" by EDoc, even though it ends with
	%% a space.

Headings

	== Heading ==
	=== Sub-heading ===
	==== Sub-sub-heading ====

等价对比：

	== Concerning Hobbits ==
	<h3><a name="Concerning_Hobbits">Concerning Hobbits</a></h3>

	{@section Concerning Hobbits}
	<a href="#Concerning_Hobbits">Concerning Hobbits</a>

External links

	[http://www.w3c.org/]
	<a href="http://www.w3c.org/"><tt>http://www.w3c.org/</tt></a>

Verbatim quoting

	%% @doc ...where the variable `Foo' refers to...
	%% @doc ...returns the atom `` 'foo@erlang.org' ''...
	%% @doc ...use the command ```erl -name foo''' to...
	%% @doc ...as in the following code:
	%% ```f(X) ->
	%%       case X of
	%%          ...
	%%       end'''
	%% @doc ...or in the following:
	%% ```
	%%     g(X) ->
	%%       fun () -> ... end
	%% '''

## 🍀 Macro expansion

文档宏可以自定义，参考 `edoc:file/2` 和 `edoc:get_doc/2`

	{@name}
	{@name argument}

Predefined macros

{@date} 日期时间宏 "Month Day Year", e.g. "May 12 2020".

{@link reference. description} 
This creates a hypertext link; cf. the @see function tag above for details. The description text (including the period separator) is optional; if no text is given, the reference itself is used. For example, {@link edoc:file/2} creates the link edoc:file/2, and {@link edoc:file/2. <em>this link</em>} creates this link.

{@module} 展开当前模块名

{@section heading} 展开一个链接

{@time} 展开当前时间 "Hr:Min:Sec", e.g. "23:30:28".

{@type type-expression} 展开类型 `<code>...</code>`

	{@type {options, List::edoc:option_list()@}} 

	{options, List::edoc:option_list()}

{@version} 展开版本

Escape sequences

@{ 展开 "{"

	%% @doc A macro call starts with the sequence "@{@".

@} 展开 "}"

	%% @doc ...{@foo ...{Key, Value@}...}...

@@ 展开 "@"

	%% @doc Contact us at support@@{@hostname}


	%% @doc You might want to write something like
	%% @@foo that will expand to @foo and does not start
	%% a new tag even if it appears first in a line.


## 🍀 Type specifications

Table 1.2:   specification syntax grammar

| Spec			| ::=	| FunType "where"? DefList? or FunctionName FunType "where"? DefList?	|
| FunctionName	| ::=	| Atom	|
| FunType		| ::=	| "(" UnionTypes? ")" "->" UnionType	|
| UnionTypes	| ::=	| UnionType or UnionType "," UnionTypes	|
| UnionType		| ::=	| UnionList or Name "::" UnionList	|
| Name			| ::=	| Variable	|
| UnionList		| ::=	| Type or Type "+" UnionList or Type `"|"` UnionList	|
| Type			| ::=	| TypeVariable or Atom or Integer or Float or Integer ".." Integer or FunType or "fun(" FunType ")" or "fun(...)" or "{" UnionTypes? "}" or "#" Atom "{" Fields? "}" or "[" "]" or "[" UnionType "]" or "[" UnionType "," "..." "]" or "(" UnionType ")" or BinType or TypeName "(" UnionTypes? ")" or ModuleName ":" TypeName "(" UnionTypes? ")" or "//" AppName "/" ModuleName ":" TypeName "(" UnionTypes? ")"	|
| Fields		| ::=	| Field or Fields "," Fields	|
| Field			| ::=	| Atom "=" UnionList	|
| BinType		| ::=	| "<<>>" or "<<" BaseType ">>" or "<<" UnitType ">>" or "<<" BaseType "," UnitType ">>"	|
| BaseType		| ::=	| "_" ":" Integer	|
| UnitType		| ::=	| `"_"` `":"` `"_"` `"*"` Integer	|
| TypeVariable	| ::=	| Variable	|
| TypeName		| ::=	| Atom	|
| ModuleName	| ::=	| Atom or ModuleName "." Atom	|
| AppName		| ::=	| Atom	|
| DefList		| ::=	| Def or DefList Def or DefList "," Def	|
| Def			| ::=	| TypeVariable "=" UnionList or TypeName "(" TypeVariables? ")" "=" UnionType	|
| TypeVariables	| ::=	| TypeVariable or TypeVariable "," TypeVariables	|

Examples:

	-spec my_function(X :: integer()) -> integer().

	%% @doc Creates ...
	%% @spec my_function(X::integer()) -> integer()
	%% @spec (X::integer()) -> integer()
	%% @spec sqrt(float()) -> float()
	%% @spec pair(S, T) -> {S, T}
	%% @spec append(List, List) -> List
	%%       List = [term()]
	%% @spec append(A::List, B::List) -> List
	%%       List = [Item]
	%%       Item = term()
	%% @spec open(File::filename()) -> FileDescriptor
	%% where
	%%       filename() = string() + atom(),
	%%       FileDescriptor = term()
	%% @spec close(graphics:window()) -> ok

type definition grammar

	Typedef	::=	TypeName "(" TypeVariables? ")" DefList? | TypeName "(" TypeVariables? ")" "=" UnionList DefList?

Type definitions

	-type my_list(X) :: [X]. %% A special kind of lists ...
	-opaque another_list(X) :: [X].
	%% another_list() is a kind of list...
	%% @type myList(X). A special kind of lists ...
	%% @type filename() = string(). Atoms not allowed!
	%% @type thing(A) = {thong, A}
	%%           A = term().
	%%   A kind of wrapper type thingy.

Pre-defined data types

	any()
	arity()
	atom()
	binary()
	bitstring()
	bool()        (allowed, but use boolean() instead)
	boolean()
	byte()
	char()
	cons()
	deep_string()
	float()
	function()
	integer()
	iodata()
	iolist()
	list()
	maybe_improper_list()
	mfa()
	module()
	nil()
	neg_integer()
	node()
	non_neg_integer()
	nonempty_improper_list()
	nonempty_list()
	nonempty_maybe_improper_list()
	nonempty_string()
	none()
	number()
	pid()
	port()
	pos_integer()
	reference()
	string()
	term()
	timeout()
	tuple()


# 🚩 rebar & eunit 项目自动化工具
- [Rebar3 Source](https://github.com/erlang/rebar3)
- [Rebar3 Getting Started](https://www.rebar3.org/docs)
- [Rebar Oldversion](https://github.com/rebar/rebar)
- [EUnit Reference Manual](https://erlang.org/doc/apps/eunit/index.html)
- [EUnit User's Guide](https://erlang.org/doc/apps/eunit/users_guide.html)
- [EDoc User's Guide](https://erlang.org/doc/apps/edoc/chapter.html)


代码变成可执行文件，叫做编译 compile，工程中通过要编译多个文件，整体叫做构建 build，自动化构建工具有很多，Make 是比较古老的一个。

先来介绍 rebar 这个工具，它是遵循 Erlang/OTP 原则的项目构建工具，使用它可以减少构建标准 Erlang/OTP 项目架构配置的工作量，并且可以很容易的编译、测试、发布 Erlang 应用程序。更强大的是，rebar 提供一种依赖管理机制，它可以使开发者很方便地通过 Git、Hg 等方式重用常见的第三方 Erlang 模块或库。

下载 Rebar 源代码编译使用，Windows 10 下执行根目录下 bootstrap.bat 会生成两个文件 rebar.cmd 和 rebar 这两个文件，可以把这两个文件 Copy 到你系统变量能够访问到的地方，方便使用 rebar 命令。 

	>rebar create-app appid=myapp

	==> erlang (create-app)
	Writing src/myapp.app.src
	Writing src/myapp_app.erl
	Writing src/myapp_sup.erl

	>rebar compile
	==> rb (compile)
	Compiled src/myapp_app.erl
	Compiled src/myapp_sup.erl

创建命令会在一个 src 文件夹下面生成 3 个文件：

- myapp.app.src 应用的资源描述文件，影响后面编译生成的 rebarapp.app 里的内容
- myapp_app.erl 应用的 Application Behaviour 代码文件
- myapp_sup.erl 应用的 Supervisor Behaviour 代码文件

执行编译后生成 ebin 下的可以执行程序，自动生成 `.app` 程序资源文件。

同时 rebar 还内置了 OPT 相关的其它模板，你可以自动生成相应的框架代码：

	rebar create template=simplesrv srvid=myapp_server
	rebar create template=simplefsm fsmid=myapp_fsm
	rebar create template=simpleapp appid=myapp_app

执行完之后则会在 src 目录下生成对应模板的文件。这里 gen_server 对应 simplesrv，gen_fsm 对应 simplefsm，application 对应 simpleapp，相应的 ID 分别是 srvid，fsmid，appid。

如果要发布一个应用，就要配置 Erlang VM 节点，我们需要在应用目录下创建一个名为 rel 的文件夹，用来作为发布用的文件夹。在 rel 文件夹下面创建一个 myapp 独立 Erlang VM 节点：

	rebar create-node nodeid=myapp

修改 rel/reltools.config 里的 lib_dirs 的值，默认这里是一个空的列表，改成应用所在的目录结构：

	{lib_dirs, ["../../"]},

然后应用的根目录下面，在 rebar.config 里加上一行，把新建的 rel 文件夹放入到子文件夹配置，作为应用内容的发布文件夹：

	{sub_dirs, ["rel"]}

然后需要编译一下项目：

	rebar compile

如果没有什么错误，那么就可以进行发布了：

	rebar generate
	rebar generate-upgrade  previous_release=path  Build an upgrade package
	rebar generate-appups   previous_release=path  Generate appup files

如果在终端上没有发现任何错误的话，那么就证明发布成功了。我们会发现在发布文件夹下，生成了一堆文件，在 rel\myapp\bin 下面生成了一系列的 bat 文件，用来控制和操作应用的状况，用法如下：

- myapp [install|uninstall|start|stop|restart|console|ping|query|attach|upgrade]
- myapp install：会安装一个 service 到本地服务里，这样你电脑启动的时候这个节点就已经能够执行了。
- myapp uninstall：卸载这个服务
- myapp start：启动服务 stop：停止服务 restart：重启服务
- myapp console：用来启动一个 Erlang Shell 来执行这个节点


在 rebar 文件夹下有个 rebar.config 文件，可以在这里配置 eunit 选项来进行测试。首先我们把 rebar.config 拷贝到我们的项目根目录，并添加 eunit 单元配置：

	%%-*- mode: erlang -*-

	%% Erlang compiler options

	{erl_opts, [debug_info,
				{i, "test"},
				{src_dirs, ["src"]}]}.

	{eunit_opts, [verbose, {report, {eunit_surefire, [{dir, "."}]}}]}.
	{cover_enabled, true}.

上面的配置会加载 test 文件下的测试文件，所以我们需要自己建立一个 test 文件夹，设置相应的测试用例文件，如下，建立 myapp_test.hrl 测试用例文件，内容如下：

	-include_lib("eunit/include/eunit.hrl").

	 my_test() ->
		?assert(1 + 2 =:= 3).
	 simple_test() ->
		ok = application:start(myapp),
		?assertNot(undefined =:= whereis(myapp_sup)).

eunit 测试函数的命令可以是 `_test()` 和 `_test_()` 两种后缀样式，后一种称为 test generator 生成测试函数。测试结果在 passes 和 fails 两种结果。包含 enuit.hrl 头文件除了引入宏定义，还会导出一个 ` test()` 函数，除非关闭了测试，同时自动导出测试函数。

然后在 myapp_app.erl 文件的末尾加上下面的代码，不能放在 -export 指令前面：

	-ifdef(TEST).
	-include("test/myapp_test.hrl").
	-endif.

如果有必要，需要在每个模块的文件最后都加上测试代码，这操作比较麻烦，然后执行下面的命令来进行 eunit 测试：

	Rebar compile eunit

也可以直接在模块中包含 enuit.hrl 测试头文件，这样可以直接通过模块或 eunit 提供的方法执行单元测试：

- module:test()
- eunit:test(m) 
- eunit:test({inparallel, m}) 

如果只要测试导出函数，一个好的做法是，将测试代码写到独立模块中，命名规则 `m_tests.erl`，m 为被测试的模块名。这样，执行 eunit 测试时，它会自动查找这个测试模块并执行。但是，在实现使用中，并未成功执行测试：

	-module(myapp_tests).
	-include_lib("eunit/include/eunit.hrl").

	my_test() ->
		?assert(1 + 2 =:= 3).
	simple_test() ->
		ok = application:start(myapp),
		?assertNot(undefined =:= whereis(myapp_sup)).


编译测试模块：

	>erlc -o .\test\ebin ".\test\myapp_tests.erl"
	>erl
	Eshell V10.4  (abort with ^G)
	1> eunit:test(myapp).
	undefined
	*** test module not found ***
	**myapp

	=======================================================
	  Failed: 0.  Skipped: 0.  Passed: 0.
	One or more tests were cancelled.
	error


如果没有什么问题的话，你应该能看到下面的信息，会告诉你 eunit 测试情况：

	======================== EUnit ========================
	module 'rebarapp_server'
	rebarapp_server: my_test...ok
	rebarapp_server: simple_test...[0.015 s] ok
	[done in 0.047 s]
	module 'myfsm'
	module 'myapp_sup'
	module 'myapp_app'
	=======================================================
	All 2 tests passed.
	Cover analysis: d:/Mongodb/projects/.eunit/index.html

这样你就可以打开 .eunit/index.html 来查看测试结果。

在 rebar.config 文件中可以配置项目依赖，再执行依赖安装命令：

	rebar get_deps


Rebar3 在 Windows 10 执行编译不顺利，还到官网上下载编译好的 rebar3。将下载的 rebar3 文件移动到 erl 的环境变量目录下，创建一个 `rebar3.cmd` 即可执行相应的 rebar3 脚本，Linux 系统则会自动处理：

	@echo off
	setlocal
	set rebarscript=%~f0
	escript.exe "%rebarscript:.cmd=%" %*

这段脚本的意思是，将命令行的脚本名保存到 rebarscript 变量中，然后 `"%rebarscript:.cmd=%"` 表示将其中的 `.cmd` 扩展名删除，而 `%*` 表示命令行中传入的所有参数，然后使用 escript 执行它。比如，命令行执行的是 rebar.cmd 那么 escript 就会调用 rebar 这个编译好的脚本文件，执行 rebar3.cmd 那么 escript 就会调用 rebar3 这个编译好的脚本文件。

可以查看是否安装成功：

	>rebar3 --version
	rebar 3.13.2 on Erlang/OTP 22 Erts 10.4

新建项目命令，项目类型可以是 app、rebar 插件，或者发布程序骨架结构：

	>rebar3 new --help
	app (built-in): Complete OTP Application structure.
	cmake (built-in): Standalone Makefile for building C/C++ in c_src
	escript (built-in): Complete escriptized application structure
	lib (built-in): Complete OTP Library application (no processes) structure
	plugin (built-in): Rebar3 plugin project structure
	release (built-in): OTP Release structure for executable programs
	umbrella (built-in): OTP structure for executable programs (alias of 'release' template)

app项目结构

	$> rebar3 new app projApp

	projApp
	├── LICENSE
	├── README.md
	├── rebar.config
	└── src
		├── projApp.app.src
		├── projApp_app.erl
		└── projApp_sup.erl

release项目结构

	$> rebar3 new release projRel

	projRel
	├── LICENSE
	├── README.md
	├── apps
	│   └── projRel
	│       └── src
	│             ├── projRel.app.src
	│             ├── projRel_app.erl
	│             └── projRel_sup.erl
	├── config
	│   ├── sys.config
	│   └── vm.args
	└── rebar.config

rebar3 的基本使用如下：

	$ rebar3 new app myapp
	===> Writing myapp/src/myapp_app.erl
	===> Writing myapp/src/myapp_sup.erl
	===> Writing myapp/src/myapp.app.src
	===> Writing myapp/rebar.config
	===> Writing myapp/.gitignore
	===> Writing myapp/LICENSE
	===> Writing myapp/README.md

	$ rebar3 compile
	===> Verifying dependencies...
	===> Compiling myapp

	$ rebar3 new release myrel
	===> Writing myrel/apps/myrel/src/myrel_app.erl
	===> Writing myrel/apps/myrel/src/myrel_sup.erl
	===> Writing myrel/apps/myrel/src/myrel.app.src
	===> Writing myrel/rebar.config
	===> Writing myrel/config/sys.config
	===> Writing myrel/config/vm.args
	===> Writing myrel/.gitignore
	===> Writing myrel/LICENSE
	===> Writing myrel/README.md

	$ rebar3 release
	===> Verifying default dependencies...
	===> Compiling myrel
	===> Starting relx build process ...
	===> Resolving OTP Applications from directories: 
			  _build/default/lib
			  /usr/lib/erlang/lib
	===> Resolved myrel-0.1.0
	===> Dev mode enabled, release will be symlinked
	===> release successfully created!

	$ rebar3 release tar
	$ rebar3 as prod tar
	===> Verifying default dependencies...
	===> Compiling myrel
	===> Starting relx build process ...
	===> Resolving OTP Applications from directories:
			  .../myrel/apps
			  /usr/lib/erlang/lib
	===> Resolved myrel-0.1.0
	===> Including Erts from /usr/lib/erlang
	===> release successfully created!
	===> tarball myrel/_build/rel/myrel/myrel-0.1.0.tar.gz successfully created!


在标准发布版本中，rebar 能够支持大部分 Erlang 开发者的需要。需要扩展 rebar 的时，rebar 提供 插件机制实现扩展。



# 🚩 Erlang Tools 工具使用

Erlang 还提供许多工具应用，比如运行 Observer 监视 Erlang 程序，GUI 基于 wxErlang 实现：

	>erl
	Eshell V10.4  (abort with ^G)
	1> observer:start().
	ok

其它工具及启动命令：

- crashdump_viewer:start("erl_crash.dump").	启动 Ccrashdump Viewer 模块；
- etop:start().	进程监视，类似 Unix 的 top 命令；
- ttb:start_trace(Nodes, Patterns, FlagSpec, Opts)	A base for building trace tools for distributed systems.
- debugger:start().	Erlang Debugger.
-	
-	
-	
-	

## 🍀 dialyzer 
- http://erlang.org/doc/man/dialyzer.html

Dialyzer 是 Erlang 程序差异分析工具，DIscrepancy AnaLYZer for ERlang programs。

Dialyzer 是一个静态分析工具，可以确定程序中的定义类型错误、死代码等。

Dialyzer 可以从原代码和带调试信息的 beam 字节码中分析：

	erlc +debug_info MODULE.erl

报告生成显示差异的行号及相关的差异信息。

第一次运行 dialyzer 需要为打算使用的所有标准库类型建立持久性查询表缓存，PLT - Persistent Lookup Table。PLT 应当包含标准系统里所有类型的缓存。生成 PLT 需要花费几分钟的时间。

	dialyzer --build_plt --apps erts kernel stdlib
	  Creating PLT c:/Users/OCEAN/.dialyzer_plt ...
	Unknown functions:
	  compile:file/2
	  compile:forms/2
	  compile:noenv_forms/2
	  compile:output_generated/1
	  crypto:block_decrypt/4
	  crypto:start/0
	Unknown types:
	  compile:option/0
	 done in 1m1.47s
	done (passed successfully)

再执行代码分析：

	dialyzer --gui test_processes.erl


## 🍀 Debugger 调试器
- [Debuger Reference](http://erlang.org/doc/apps/debugger/index.html)
- [Debugger User's Guide](http://erlang.org/doc/apps/debugger/users_guide.html)

在使用调试器前，先编译带有调试信息的模块：

	erlc +debug_info MODULE.erl

Erlang Debugger 启动，再使用菜单 Module > Interpret... 加载模块 erl 代码文件：

	debugger:start().

在加载的模块列表中，双击打开代码视图。设置合适的断点，然后从 Erlang shell 中执行程序，和正常一样执行。

在调试器中的 Auto Attach 勾选 First Call 或 On Break，模块执行后就会在调试器 Attach Process 窗口中出现，自动附加到调试进程。

手动附加进程，运行程序扣，在 Monitor 窗口右边的列表中会出现进程，双击其中一进程，在 Attach Process 窗口中，通过菜单 Process > Attach 附加到调试进程。在开发时，组件调试通常要附加到一个进程中去调试，因为它本身没有入口。


其它启动方法：

	start()
	start(File)
	start(Mode)
	start(Mode, File)

	Mode = local | global
	File = string()

指定 local 模式启动调试器只会解析当前节点的代码，默认是 global 模式，会解析所有已知节点。

	quick(Module, Name, Args)

	Module = Name = atom()
	Args = [term()]

quick 方法调试单进程，解析模块时执行 apply(Module,Name,Args)，会打开附加进程的窗口 Attach Process window。

和调试器一起的还有两个模块：

- `int`	Interpreter Interface 提供 breakpoints and stepwise 调试方式。
- `i`	Debugger/Interpreter Interface 提供 int 模块的简短表达。

如，获取当前进程 Pid：

	i:im().


## 🍀 Profiling Tool
- Programming Erlang 2nd - Ch21 Profiling, Debugging, and Tracing

标准的 Erlang 自带代码分析工具 profiling tools：

- `cprof` 统计函数调用数，轻量分析工具；
- `fprof` displays the time for calling and called functions. Output is to a file.
This is suitable for large system profiling in a lab or simulated system. It
adds significant load to the system.
- `eprof` measures how time is used in Erlang programs. This is a predecessor
of fprof , which is suitable for small-scale profiling.

示范：

	1> cprof:start(). %% start the profiler
	4501
	2> shout:start(). %% run the application
	<0.35.0>
	3> cprof:pause(). %% pause the profiler
	4844
	4> cprof:analyse(shout). %% analyse function calls
	{shout,232,
	[{{shout,split,2},73},
	{{shout,write_data,4},33},
	{{shout,the_header,1},33},
	{{shout,send_file,6},33},
	{{shout,bump,1},32},
	{{shout,make_header1,1},5},
	Chapter 21. Profiling, Debugging, and Tracing • 340
	report erratum • discuss
	{{shout,'-got_request_from_client/3-fun-0-',1},4},
	{{shout,songs_loop,1},2},
	{{shout,par_connect,2},2},
	{{shout,unpack_song_descriptor,1},1},
	...
	5> cprof:stop(). %% stop the profiler
	4865

## 🍀 Testing Code Coverage

When we’re testing our code, it’s often nice to see not only which lines of code
are executed a lot but also which lines are never executed. Lines of code that
are never executed are a potential source of error, so it’s really good to find
out where these are. To do this, we use the program coverage analyzer.

Here’s an example:

	1> cover:start(). %% start the coverage analyser
	{ok,<0.34.0>}
	2> cover:compile(shout). %% compile shout.erl for coverage
	{ok,shout}
	3> shout:start(). %% run the program
	<0.41.0>
	Playing:<<"title: track018 performer: .. ">>
	4> %% let the program run for a bit
	4> cover:analyse_to_file(shout). %% analyse the results
	{ok,"shout.COVER.out"} %% this is the results file


# 🚩 Calendar & DateTime
- http://erlang.org/doc/man/calendar.html
- https://www.cnblogs.com/me-sa/archive/2012/05/17/erlang-calendar-date-time.html

时间函数相关：

- os:timestamp() 获取操作系统时间戳，高效的获取时间戳方法，返回时间就是墙上时间 wall clock time。
- erlang:now() 获取 Erlang 虚拟机时钟时间戳，但经过增量修正，返回一个唯一时间值，即单调递增时间 monotonic time 但不保证唯一。
- erlang:timestamp() 用来替代 now() 函数的。
- erlang:time() 获取时间，按时、分、秒保存的元组 `{Hour,Min,Sec}`。
- erlang:date() 获取日期，按年、月、日保存的元组 `{Year,Month,Day}`。
- erlang:localtime() 获取本地日期时间 `{{Year,Month,Day},{Hour,Min,Sec}}`。
- erlang:universaltime() 获取标准日期时间 `{{Year,Month,Day},{Hour,Min,Sec}}`。

常用的数值：

- 86400 秒/天
- 365 天/平年 ordinary year
- 366 天/闰年 leap year
- 1461 天/四年
- 36524 天/百年
- 146097 天/四百年
- 719528 从 Jan 1, 0 到 Jan 1, 1970 的天数


函数 erlang:now/0 相关的源代码在以下两个文件： 

- otp_src_23.0/erts/emulator/beam/bif.c。
- otp_src_23.0/erts/emulator/beam/erl_time_sup.c

now 会调用 get_now，它从操作系统获取后还要按 Erlang 时间处理的方式在调整为 monotonic time。在旧版本中会对全局变量加锁，故效率会有损耗，新版中也使用原子操作 `ethr_atomic_read`，虽然性能上会优于加锁，但还是有开销的。每一次获取时间值后会与上一次获取的值做一个对比，并加一来保证获取值的严格单调递增，所以可以用来作为唯一名 unique name 的生成，但是，erts7.0 之后就不建议用这个函数了，可以用 `erlang:timestamp/0` 替代，如果要生成唯一名可以用 `erlang:unique_integer/0` 等等。 而 `os:timestamp/0` 则是获取操作系统的墙上时间 wall time，并做调整变为 erlang system time。

时间戳是从 1970 年 1 月 1 日零时起，到现在经过的时间，结果为 {MegaSecs, Secs, MicroSecs}。

格林尼治标准时间 GMT - Greenwich Mean Time 是指位于英国伦敦郊区的皇家格林尼治天文台的标准时间，因为本初子午线被定义在通过那里的经线。自 1924 年 2 月 5 日开始，格林尼治天文台每隔一小时会向全世界发放调时信息。

UTC - Universal Time Coordinated 时间是协调世界时，这套时间系统被应用于许多互联网和万维网的标准中。例如，网络时间协议就是协调世界时在互联网中使用的一种方式。在军事和航空中，协调世界时区会使用“Z”来表示。

在中国大陆、港澳台的本地时间比 UTC 快 8 小时，就会写作 UTC+8，俗称东 8 区。如果是在本地时间比 UTC 时间慢的地区，例如夏威夷的时间是比 UTC 时间慢 10 小时，就会写作 UTC-10，俗称西 10 区。

calendar 模块是和日期时间紧密联系的模块，可以参考文档或直接通过源代码获取其使用的数据类型，和导出的函数。

calendar 模块定义的类型，year 不使用年份的缩写，比如 93 不用来表示 1993，注意 daynum 使用 1 ~ 7 表示周一到星期天：

	datetime() = {date(), time()}
	datetime1970() = {{year1970(), month(), day()}, time()}
	date() = {year(), month(), day()}
	year() = integer() >= 0
	year1970() = 1970..10000
	month() = 1..12
	day() = 1..31
	time() = {hour(), minute(), second()}
	hour() = 0..23
	minute() = 0..59
	second() = 0..59
	daynum() = 1..7
	ldom() = 28 | 29 | 30 | 31
	yearweeknum() = {year(), weeknum()}
	weeknum() = 1..53

calender 导出符号：

- `date_to_gregorian_days`(Date)					-> Days
- `date_to_gregorian_days`(Year, Month, Day)		-> Days
- `datetime_to_gregorian_seconds`(DateTime)			-> Seconds
- `day_of_the_week`(Date)							-> daynum()
- `day_of_the_week`(Year, Month, Day)				-> daynum()
- `gregorian_days_to_date`(Days)					-> date()
- `gregorian_seconds_to_datetime`(Seconds)			-> datetime()
- `is_leap_year`(Year)								-> boolean()
- `iso_week_number`()								-> yearweeknum()
- `iso_week_number`(Date)							-> yearweeknum()
- `last_day_of_the_month`(Year, Month)				-> LastDay
- `local_time`()									-> datetime()
- `local_time_to_universal_time`(DateTime1)			-> DateTime2
- `local_time_to_universal_time_dst`(DateTime1)		-> [DateTime]
- `now_to_datetime`(Now)							-> datetime1970()
- `now_to_local_time`(Now)							-> datetime1970()
- `now_to_universal_time`(Now)						-> datetime1970()
- `rfc3339_to_system_time`(DateTimeString)			-> integer()
- `rfc3339_to_system_time`(DateTimeString, Options)	-> integer()
- `seconds_to_daystime`(Seconds)					-> {Days, Time}
- `seconds_to_time`(Seconds)						-> time()
- `system_time_to_local_time`(Time, TimeUnit)		-> datetime()
- `system_time_to_rfc3339`(Time)					-> DateTimeString
- `system_time_to_rfc3339`(Time, Options)			-> DateTimeString
- `system_time_to_universal_time`(Time, TimeUnit)	-> datetime()
- `time_difference`(T1, T2)							-> {Days, Time}
- `time_to_seconds`(Time)							-> secs_per_day()
- `universal_time`()								-> datetime()
- `universal_time_to_local_time`(DateTime)			-> datetime()
- `valid_date`(Date)								-> boolean()
- `valid_date`(Year, Month, Day)					-> boolean()


比如求娶 2020 年 6 月 22 日是日期几，结果显示是星期一：

	1> calendar:day_of_the_week(2020, 6, 22).
	1

又比如求取标准时，在国内是 +8 时区，所以要减 8 小时：

	1> calendar:local_time_to_universal_time({{2020,6,22},{12,30,6}}).
	{{2020,6,22},{4,30,6}}

关于润年 Leap Years，最根本的原因是：地球绕太阳运行周期为 365 天 5 小时 48 分 46 秒，合 365.24219 天，即一回归年 tropical year。公历的平年只有 365 日，比回归年短约 0.2422 日，所余下的时间约为每四年累计一天时间差，故第四年于 2 月末加 1 天，使当年的历年长度为 366 日，这一年就为闰年。

现行公历中每 400 年有 97 个闰年，按照每四年一个闰年计算，平均每年就要多算出0.0078天，这样经过四百年就会多算出大约 3 天来。因此每四百年中要减少 3 个闰年。

所以公历规定：年份是整百数时，必须是 400 的倍数才是闰年；不是 400 的倍数的世纪年，即使是 4 的倍数也不是闰年。

这就是通常所说的：四年一闰，百年不闰，四百年再闰。 例如：2000年是闰年，2100年则是平年。

总结起来就是两条，满足其中一条即是闰年：

- Y 整除 4 但不能整除 100；
- Y 整除 400；


## 🍀 Timer 定时器
- http://erlang.org/doc/man/timer.html

对于任何网络程序来讲，定时器管理都是重头戏，Erlang 更是依赖于定时器。基础的 timer 主要是由 `time.c` `erl_time_sup.c` 实现。

示例，定时 5s 再显示 "Hello World!"：

	1> timer:apply_after(5000, io, format, ["~nHello World!~n", []]).
	{ok,TRef}
	Hello World!

示例二，限时执行进程动作：

	Pid = spawn(mod, fun, [foo, bar]),
	%% If pid is not finished in 10 seconds, kill him
	{ok, R} = timer:kill_after(timer:seconds(10), Pid),
	...
	%% We change our mind...
	timer:cancel(R),
	...

这里，使用 spawn 分裂进程时注意，如果是在 Erlang shell 中执行，如果需要给 fun 函数传入参数，就需要指定 Erlang shell 中的模块名，默认的模块是 shell_default，可以通过 module_info 函数查询，但是实际测试时部是触发 bad argument 异常，并且在 Erlang shell 中是不能使用宏的，`?MODULE` 也无法用上，如果需要传参数还是使用加载的模块测试吧。

	F = fun() -> 
		receive
			after 10000 -> 
				io:fwrite("Done~n") 
		end end.
	Pid = spawn(F).

	Fun = fun(A, B) -> 
		receive
			after 10000 -> 
				io:fwrite("Done ~s ~s", A, B) 
		end
		end.
	Pid = spawn(?MODULE, Fun, [foo, bar, []]).


定时器在网络程序几乎无所不在，语法层面的 receive after，IO 操作超时，driver 内部等都在大量使用 timer。特别是 TCP 在发送接收都有个超时，如果你有大量的 TCP 链接，就意味着大量的定时器。 那么定时器的性能就是个很大的考验，erts 的定时器是个 timer_wheel 实现，和 Linux 内核用的差不多，支持百万级别的规模。

以下测试示范：

	root@nd-desktop:~/test# cat ttimer.erl
	-module(ttimer).
	-export([start/1]).

	upmap(F, L) ->
		Parent = self(),
		Ref = make_ref(),
		[receive {Ref, Result} -> Result end
		 || _ <- [spawn(fun() -> Parent ! {Ref, F(X)} end) || X <- L]].

	loop(0)->
		ok;

	loop(Cnt)->
			receive after random:uniform(10000) -> cont end,
			loop(Cnt-1).

	start([A1, A2]) ->
			 Start= now(),
			 N= list_to_integer(atom_to_list(A1)),
			 Cnt = list_to_integer(atom_to_list(A2)),
			 io:format("spawn ~w process, loop ~w~n", [N, Cnt]),
			 upmap(fun loop/1, lists:duplicate(N, Cnt)),
			 io:format("run ~w ms~n", [round(timer:now_diff(now(), Start) /1000)]),
			 done.


	root@nd-desktop:~/test# erl -smp disable -noshell +P 9999999 -s ttimer start 500000 10 -s erlang halt
	spawn 500000 process, loop 10
	run 63201 ms

单cpu保持在70-80%， 63秒处理了500W个定时器事件， 大概每秒8W.

	root@nd-desktop:~/test# cat /proc/cpuinfo
	model name      : Pentium(R) Dual-Core  CPU      E5200  @ 2.50GHz
	bogomips        : 4987.08

Erlang 中有两个很相似的延迟发送消息的函数, send_after/3 和 start_timer/3, 区别仅在于前者返回 Msg, 后者返回 {timeout, TimerRef, Msg}，后者的这个 TimerRef 有什么用呢?源代码 `gen_fsm.erl` 中十分清楚，在取消定时器时，可以利用这个 Ref 把消息队列中未处理的消息也删掉。

	%% Returns Ref, sends event {timeout,Ref,Msg} after Time 
	%% to the (then) current state.
	start_timer(Time, Msg) ->
		erlang:start_timer(Time, self(), {'$gen_timer', Msg}).

	%% Returns Ref, sends Event after Time to the (then) current state.
	send_event_after(Time, Event) ->
		erlang:start_timer(Time, self(), {'$gen_event', Event}).

	%% Returns the remaining time for the timer if Ref referred to
	%% an active timer/send_event_after, false otherwise.
	cancel_timer(Ref) ->
		case erlang:cancel_timer(Ref) of
		false ->
			receive {timeout, Ref, _} -> 0
			after 0 -> false 
			end;
		RemainingTime ->
			RemainingTime
		end.

Erlang 的计时器 timer 是通过一个唯一进程实现的，该进程是一个 gen_server，用户通过 `timer:send_after` 和 `timer:apply_after` 在指定时间间隔后收到指定消息执行某个函数。每个用户的计时器都是一条记录，保存在它的 ets 表 timer_tab 中，timer 的时序驱动通过 gen_server 的超时机制实现。若同时使用 timer 的用户过多，则 timer 将响应不过来，成为瓶颈。

更好的方法是使用 Erlang 的原生计时器 `erlang:send_after` 和 `erlang:start_timer`，它们把计时器附着在进程自己身上。

看一段 timer 的源码，如下：

	schedule_cast(Msg, Default, Timers) ->
		%% Cancel the old timer...
		TRef = proplists:get_value(Msg, Timers),
		timer:cancel(TRef),

		%% Lookup the interval...
		IntervalKey = list_to_atom(atom_to_list(Msg) ++ "_interval"),
		Interval = sync_utils:get_env(IntervalKey, Default),

		%% Schedule the call...
		{ok, NewTRef} = timer:apply_after(Interval, gen_server, cast, [?SERVER, Msg]),

		%% Return the new timers structure...
		lists:keystore(Msg, 1, Timers, {Msg, NewTRef}).


假设 start_timer(1000), 这个时候跳快系统时间，会提前收到消息吗？
不会。start_timer/3 用的是虚拟机内部时间

erlang:send_after 和 erlang:start_timer 的区别
主要是 TimerRef，超时消息进入邮箱，这个时候用 TimerRef 来匹配谁来发的，以便做处理。


# 🚩 Erlang 面试题
- http://erlang.org/course/advanced.html

OTP相关

	gen_server:cast 和 erlang:send() 都可以向指定进程发消息，有什么区别？
	gen_server:cast 调用的就是 erlang:send() 函数，消息为 {'$gen_cast',Request}，但是加上了 no_connect. 如果没有连上，那么返回 false

	en_server 远程 call 一个节点方法的过程？
	回答者需要知道 empd 的概念及其相关过程。

	gen_server:call({Name,Node},Request) 可以 call 远程节点的进程，和 call(Node, Module, Function, Args)有什么区别？
	rpc:call 是调用远程节点的 rex 进程来做事情，gen_server:call 可以选中远程节点的任意进程做事情
	rpc:call 的内部实现就是 gen_server:call({Name,Node},Request)，只不过 NAME 为 rex


数据类型

	ref() 有是什么？什么用？
	ref() 就是一个 erlang 中的基础数据类型，就是用来唯一表示(erlang只能保证基本100%)和比较的。
	A 发送消息的时候 B 加一个 ref, 在 receive 中用这个 ref 来高效和指定匹配 B 返回的消息

ets表

	write_concurrency 和 read_concurrency 是用使得 ets 表支持读和写并发控制的吗？
	不是。ets原生就支持并发控制，通过原子操作来实现。就是说，单个ets表的读写都是原子的。他们是用来提升读写性能的，代价是额外内存

进程相关

	不使用 io 或者 lager:info 如何确定进程受到的消息和发出的消息？
	回答者需要知道 erlang:dbg 模块，trace 相关的知识。如果知道火焰图相关知识，更好
	Pid 的那 3 位数字 <A,B,C> 代表着什么
	A, 对应是哪一个节点 (0 代表是本地节点 ，其它数字代表远程节点)
	B, 低15字节代表进程唯一记数(一个进程表的索引)
	C, 16~18字节也是进程唯一记数(和B一样）


# 🚩 wxErlang GUI
- [wxErlang User's Guide](http://erlang.org/doc/apps/wx/users_guide.html)
- [Erlang GUI - wxWidgets 教程](https://zhuanlan.zhihu.com/p/29005161)
- [wxFrame Manual](https://erlang.org/doc/man/wxFrame.html)
- [wxWidgets 3.0](https://docs.wxwidgets.org/3.0/index.html)
- [wxErlang - a GUI library for Erlang](http://wxerlang.sourceforge.net/docs/Report.pdf)
- [XML Based Resource System (XRC)](https://docs.wxwidgets.org/trunk/overview_xrc.html)
- []()
- Erlang Source code - otp_src_23.0\lib\wx\examples\sudoku\sudoku.erl

Erlang 这门编程语言通常用于服务器方面，虽然它也有类似 Wings 3D 这样图像密集的应用。wxWidget 是对 Erlang 支持最好的图像 API，它为 GUI 编程提供一个大型，成熟，稳定的跨平台 API。

wxWidgets 现在引入 XML Based Resource System (XRC)，将软件界面分享到 XML 资源文件中实现，搭配可视工具：

- wxDesigner a commercial dialog designer/RAD tool.
- DialogBlocks a commercial dialog editor.
- XRCed a wxPython-based dialog editor
- wxFormBuilder a C++-based dialog editor that can output C++, XRC or python.

在这个部分，还是按代码组织方式去写 GUI，假设你早已：

- 安装了 Erlang
- 已经知道怎么使用 Erlang shell
- 有用过合适的文本编辑器写程序

并非所有wx调用都产生一个直观的图形显示；在 Erlang shell 中，通常你只能看到返回值。这些值可能是神秘的，尤其是如果你过去没有用过 Erlang。因为 Erlang 是一门函数式编程语言，所以每个wx调用都会返回一个值。这些值大多是 tuple。而这些 tuple 又大多有记录 record 的内容。在记录格式下理解 wx 返回值会更容易。Erlang shell 需要被告知 wx 的定义。

寻找在你系统上 wx 定义在哪，可以输入这个：

	1> My_wx_dir = code:lib_dir(wx).
	"c:/Program Files/erl10.4/lib/wx-1.8.8"

从刚刚获取的那个目录读取 wx 定义的 record 类型：

	rr (My_wx_dir ++ "/include/wx.hrl"). 
	rr (My_wx_dir ++ "/src/wxe.hrl").

两个 rr 调用都应该返回一系列模块，如果 rr 调用出错，你将得到空列表。 打开你的文本编辑器。把上面三行代码复制粘贴到一个临时文件。然后，当你开始一个新小节，或者重新开始小节，或者因为崩溃不得不重启，你可以把它们复制粘贴到 shell 里。现在就试试，确保它们能正常工作。退出 Erlang，重启，然后复制粘贴这些代码到 shell。

很不幸，我们不能在 shell 中使用 Erlang 宏定义。不过这也是另一个需要定位 wx.hrl 文件的理由：为了在 shell 中使用，我们得查询需要的 wx 宏符号所对应的值。

	Wx=wx:new().
	#wx_ref{ref = 0,type = wx,state = []

它运行了吗？可能有消息说对称多处理 SMP 没有开启，或者“SMP emulator required”。在一些 Windows Erlang 发行版中 SMP 没有默认开启。退出 Erlang shell 然后带参 `-smp` 重启，在DOS命令行中就像这样： werl.exe -smp 如果 wx:new() 正常运行，将会返回一个记录。


在 wxWidgets 中，一个窗口相当于一个 frame。让我们写一个简单的程序，然后添加它。输入下面的代码可以生成一个 frame：

	F=wxFrame:new(Wx, -1, "Hello, World!").

但是屏幕上没有任何改变。为什么？我们必须提出想看看frame的请求它才会出现。输入：

	wxFrame:show(F).

它会返回 true，并且你就会看到一个窗体。

## 🍀 从 shell 异常中恢复

只需要点击关闭按钮就能关闭 frame。但是别那么做，先试试下面这个无意义的调用；

	nothing:doint().

这会让 frame 消失，随之出现的还有异常错误消息。这是因为 wxWidgets 在它 shell 的进程运行图形程序，如果 shell 中出现异常又不捕获，它就会当即被杀死。

仅仅键盘输入错误就有可能导致 GUI 完全丢失，这种情况而且会经常发生。无论在哪只要你引发了错误就要重新输入一遍。没人愿意来上几次吧？所以，在开始教程之前，输入下面的代码：

	catch_exception (true).

现在休息一下吧！这样设置后可以让GUI程序无视引发错误的地方继续工作。把上面的代码全都放到一个临时文件，像这样：

	catch_exception (true). 
	My_wx_dir = code:lib_dir(wx). 
	rr (My_wx_dir ++ "/include/wx.hrl"). 
	rr (My_wx_dir ++ "/src/wxe.hrl"). 
	Wx=wx:new(). 
	F=wxFrame:new(Wx, -1, "Hello, World!"). 
	wxFrame:show(F).

当 frame 在屏幕上现实时，输入：

	wxFrame:destory(F).

它应该返回 ok 然后 frame 销毁消失了。


## 🍀 StatusBar 状态栏

就当是开心一下，创建多个frame：

- 创建一个标题为"Hey!"的wxFrame，变量名为 F1
- 显示 F1
- 创建一个标题为"Boo!"的wxFrame，变量名为 F2
- 显示 F2.
- 使用 wxFrame:destroy 将两个 frame 销毁。 

别把这些代码放到临时文件，我们的 lesson 要从第一个 destroy 调用继续。

	catch_exception (true). 
	My_wx_dir = code:lib_dir(wx). 
	rr (My_wx_dir ++ "/include/wx.hrl"). 
	rr (My_wx_dir ++ "/src/wxe.hrl"). 
	Wx=wx:new(). 
	F1=wxFrame:new(Wx, -1, "F1"). 
	wxFrame:show(F1).
	F2=wxFrame:new(Wx, -1, "F2"). 
	wxFrame:show(F2).

状态栏不仅方便程序功能，也便于调试。

	wxFrame:createStatusBar(F).

现在你的 frame 就会增加一个状态栏。

将一些文字放到状态栏中：

	wxFrame:setStatusText(F, "Quiet here.").

花一点时间把上面这些代码复制粘贴到你的临时文件，尝试向状态栏设置其他文字，然后恢复为“Quiet here”：

	SB = wxFrame:getStatusBar(F). 
	wxStatusBar:pushStatusText(SB, "A LITTLE LOUDER NOW."). 
	wxStatusBar:popStatusText(SB).

现在应该已经回到了之前你向状态栏添加文字的样子。


## 🍀 Menu 菜单栏

按照惯例 wxWidgets 中的 frame 都会有一个菜单栏。这样看起来状态栏菜单栏没什么区别。然而，菜单栏通常由其他东西组成：它们需要被组合到一起。

在 wxWidgets 中，复杂的东西通常都是由简单的东西开始一步步构建的。wxWidgets 的 API 不假设新建的复杂的东西包含任何简单的东西。对于越复杂的东西，所需的构建步骤就越多。

让我们尽快生成一个可见的菜单栏。当你完成后记得复制下面的代码到你的临时文件，

生成一个菜单栏，输入：

	MenuBar = wxMenuBar:new().
	#wx_ref{ref = 37,type = wxMenuBar,state = []} 

但是 frame 仍然没有菜单栏吧？我们有看到菜单栏关联 frame 吗？是的，F 是到目前为止你仅有的 frame，但 wx 不假设你想把 MenuBar 放到 F 里面去。

尝试一下将 MenuBar 设置为 F 的一部分：

	wxFrame:setMenuBar (F, MenuBar).
	wxFrame:getMenuBar (F).

它可能会返回ok，但是...窗口还是没有任何东西！的确发生了菜单栏和 frame 的关联。问题是：frame 显示这个已经关联的菜单栏并没有菜单项，我们得做点什么。

下面几步将添加菜单项到菜单栏，然后显示它。

大多数 GUI 应用程序都有一个 File（文件）菜单。输入这个：

	FileMn = wxMenu:new().
	#wx_ref{ref = 37,type = wxMenu,state = []}

又是这样，wxWidgets 不知道你想把这个菜单添加到哪，所以不会显示。你必须告诉 FileMn 它应该被放到哪个菜单栏。现在我们把 FileMn 放到 F 的菜单栏 MenuBar 里：

	wxMenuBar:append (MenuBar, FileMn, "&File").

“&File” 前面的 “&” 符号表示你可以输入快捷键 Alt-F 使用它。

现在有菜单了，但是一个好的菜单没有菜单项怎么行。点击 File 菜单或者 Alt-F，好吧，没有任何东西，那是怎么回事？

需要添加一个菜单项，每个 File 菜单都应该有一个 Quit 菜单项，让我们也添加一个，并添加到文件菜单上，输入：

	Quit = wxMenuItem:new ([{id,400},{text, "&Quit"}]).
	wxMenu:append (FileMn, Quit).

现在，点击 File 菜单，可以看到 Quit 菜单项了。

回顾上述设置的菜单的所有代码，你会看到：

	MenuBar = wxMenuBar:new(). 
	wxFrame:setMenuBar (F, MenuBar). 
	FileMn = wxMenu:new(). 
	wxMenuBar:append (MenuBar, FileMn,"&File"). 
	Quit = wxMenuItem:new ([{id,400},{text, "&Quit"}]). 
	wxMenu:append (FileMn, Quit).

我们还可以添加什么呢？每一个得体的应用程序都有一个 Help 菜单。然后 Help 菜单通常有一个 About 菜单项。

重复你之前添加 File 菜单所用的 new append 命令：

	HelpMn = wxMenu:new(). 
	wxMenuBar:append (MenuBar, HelpMn, "&Help").
	About = wxMenuItem:new ([{id,500},{text,"About"}]). 
	wxMenu:append (HelpMn, About).

添加 About 菜单后，同样重复之前将 Quit 菜单项添加到 File 菜单的步骤，就会得到另外一个 Help 菜单。点一下 Help 菜单，你会看到 About 菜单。

花一点时间把代码复制粘贴到你的临时文件。

## 🍀 Events 事件

到目前为止，我们所做的都没有涉及事件。你可能认为 Erlang wxWidgets 没有事件。如果你现在输入 flush().， 你就不会那样想了。 事实上，在 wxWidgets 中每个鼠标点击都会触发事件。它们被wx以默认的一些方式处理。通常，wx 的默认处理方式是忽略它们。让我们捕获事件，看看它到底是什么样的。

使用 connect 联接并查看事件，输入:

	wxFrame:connect (F, close_window).

点击 frame 上的关闭按钮，然后输入：

	flush().

你会看到这样的输出：

	Shell got {wx,-202,{wx_ref,35,wxFrame,[]},[],{wxClose,close_window}}

注意，现在点击关闭按钮不会真正的关闭一个 frame。你将重写这个默认行为。 多点几次关闭按钮，然后点击最大化窗口按钮，最小化窗口按钮。然后再次输入 `flush().`。你会看到 close_window 事件，但是没有最大化最小化事件。

同样请注意 shell 怎样输出它收到的事件：它不会使用之前读取的 wx 定义。你只会看到原始 tuple。这使得我们知晓这些 wx 事件是什么的难度增加。

有一个使用记录定义查看事件的方法。下面的 fun 返回一个 receive 接收到的事件，输入：

	Ev = fun() -> receive E->E after 0 -> empty end end.

点击关闭按钮，然后调用事件读取器：

	Ev().

你会看到类似这样的东西：

	#wx{id = -202,
		obj = #wx_ref{ref = 35,type = wxFrame,state = []},
		userData = [],
		event = #wxClose{type = close_window}}

让我们尝试关联 connect 菜单选择事件，输入：

	wxFrame:connect (F, command_menu_selected).

尝试选择菜单。选择File->Quit,然后选择File->About。然后输入Ev().看看生成了哪些事件。除了id外，返回的事件应该都是一样的。

	#wx{id = 400,
		obj = #wx_ref{ref = 35,type = wxFrame,state = []},
					  userData = [],
					  event = #wxCommand{type = command_menu_selected,
						 cmdString = [],
						 commandInt = 0,
						 extraLong = 0}}

知道发生了什么事件很有用，有时它有助于观察细节。但是大多数时候，我们只想当事件发生时做出我们希望的动作。所以我们必须捕获事件，然后搞懂怎样给它添加一个动作。

wx 中的事件由回调函数处理。首先，生成一个回调函数。输入：

	Ding = fun (_,_) -> wx_misc:bell() end.

试试，给它传入正确的参数。

	Ding(#wx{},#wx_ref{}).

它会响铃吗？会的。

现在将它关联到你的 frame 的 close_windows 事件上：

	wxFrame:connect (F, close_window, [{callback, Ding}]).

再试试点击关闭按钮，就会有哔哔声。试试调用 Ev(). 它不再返回 close_window 事件。

因为简单的哔哔声对于这个关闭窗口事件是没有实际意义的，你可能想解除关联

	wxFrame:disconnect (F, close_window).


## 🍀 Dialog 对话框

一个“About”菜单项应该给我们显示一个模态对话框。但是怎样生成这个对话框？这里是最简单的方法。

生成一个模态对话框，输入下面这行代码：

	D = wxMessageDialog:new (F, "Let's talk.").
	#wx_ref{ref = 43,type = wxMessageDialog,state = []}

它应该返回一个类似 #wx_ref 这样的回应，但是屏幕上不会有任何显示。

要想显示对话框并与之交互，输入：

	wxMessageDialog:showModal (D).

在你的屏幕上就会看到弹出的对话框。

因为对话框是模态的，所以直到你点 OK 之前 shell 都不会有任何返回值。返回值应该是 5100。如果你看看 wx.hrl，你就会知道它代表 `wxID_OK`。


## 🍀 wxErlang Hello
- https://erlang.org/doc/man/wx_object.html#start_link-3
- https://erlang.org/doc/man/wx.html#batch-1

参考代码来自 Erlang 源代码中，wx 模块提供了 Examples。

执行 `erl -make` 可以编译，编译成功就会出现源代码对应的 .beam。

这是一个基本窗体演示，可以通过以下命令编译执行：

	erlc hello.erl && erl -noshell -s hello start -s init stop

不像专门为特定系统设计的快速 GUI 原型程序，如 Tcl/Tk，从 Erlang shell 命令行开始图形界面开发之前有一些准备工作要做。

注意 Erlang 是面向函数式的编程，和面向对象的编程在表达式上有些差别，如以下 OOP 代码：

	wxWindow MyWin = new wxWindow();
	MyWin.CenterOnParent(wxVERTICAL);
	...
	delete MyWin;

Erlang 对应的代码：

	MyWin = wxWindow:new(),
	wxWindow:centerOnParent(MyWin, [{dir,?wxVERTICAL}]),
	...
	wxWindow:destroy(MyWin),

很多对象模块都提供了 destroy 解构函数，这本来在 OOP 中是对象的析构函数，在 Erlang 中则就模块函数的方式提供。

对于 wxWidgets 那些非类实现的方法，在 Erlang 中使用 wx_misc 模块实现。
wxWidgets 对象和 Erlang 的对应参考：

| wxWidgets 对象	| Erlang 对象	|
| :------------	| :-------	|
| `wxPoint`		| `{Xcoord,Ycoord}` |
| `wxSize`		| `{Width,Height}` |
| `wxRect`		| `{Xcoord,Ycoord,Width,Height}` |
| `wxColour`	| `{Red,Green,Blue[,Alpha]}` |
| `wxPoint`		| `{Xcoord,Ycoord}` |
| `wxString`	| `unicode:charlist()` |
| `wxGBPosition`| `{Row,Column}` |
| `wxGBSpan`	| `{RowSpan,ColumnSPan}` |
| `wxGridCellCoords`	| `{Row,Column}` |

使用 wxErlang 时，需要刻意调用 `wx:new()` 来执行 GUI 程序的初始化，处理环境变量和内存映射。为了在多线程中共用这些配置，需要调用 `wx:get_env/0` 或 `wx:set_env/1` 来获取当前的活动环境变量，或设置给新进程使用。两个进程都各自调用 `wx:new()` 就不能互相使用对方的对象。

	wx:new(), 
	MyWin = wxFrame:new(wx:null(), 42, "Example", []),
	Env = wx:get_env(),
	spawn(fun() -> 
		   wx:set_env(Env),
		   %% Here you can do wx calls from your helper process.
		   ...
		end),
	...

在事件处理中，使用 connect 方法来连接要处理的事件，Erlang 以 receive 方式来接收处理指定的事件，这是最方便的事件处理方式。


示例程序结构要点：

- 导出入口函数 `-export([start/0]).`；
- 导入 wx 头文件 `-include_lib("wx/include/wx.hrl").`；
- 入口函数执行时，执行初始化；

	- 执行 `wx:new()` 函数启动 wx 服务，初始化环境和内存映射，可以传入参数格式 {debug, Level}；
	- 执行 `wx:batch()` 以高效批量处理 wx 的各种命令，没有它就不会处理 wxWidgets 线程的事件；
	- 执行 create_window 创建窗体，并设置状态栏 `createStatusBar` 再返回 Frame；
	- 执行 `wxFrame:connect()` 连接各种事件处理，有标题栏的 close_window、 按钮事件 command_menu_selected； 

- 在 `loop` 函数中进入 receive 接收事件进行处理；

	- 注意 `#wx{event=#wxClose{}}` 这里的 `wx` 记录体在 event 嵌套了 `wxClose` 记录体，对应了窗口的关闭事件。
	- `Msg` 等待处理一个消息事件，并继续执行 loop 循环。


事件元组格式如下，有 wxCommand 按钮事件，有 窗体标题栏的关闭按钮事件，根据需要进行匹配：

	#wx{event=#wxClose{}}
	#wx{obj=Frame, id=xxx, event=#wxCommand{}}
	#wx{obj=Frame, event=#wxCommand{type=command_menu_selected}} 

可以给窗体设置图标 `code:which(?MODULE)` 用来获取当前模块路径：

	Path = filename:dirname(code:which(?MODULE)),    
	wxFrame:setIcon(Frame,  wxIcon:new(filename:join(Path,"sample.xpm"), [{type, ?wxBITMAP_TYPE_XPM}])),

XPM 是一个文本化图像定义文件，格式如下：

	/*XPM*/
	static char * <pixmap_name>[] = 
	{ 
	<Values>
	<Colors>
	<Pixels>
	<Extensions>
	};

以下是 wxWidgets 的标准图标：

	/* XPM */
	static const char * sample_xpm[] = {
		/* columns rows colors chars-per-pixel */
		"32 32 6 1",	// 定义一个 32*32 的图像，它有 6 种颜色，每像素一个字符
		"  c black",	// 空格表示黑色，c 表示这种颜色是彩色模式
		". c navy",		// . 表示海军蓝
		"X c red",		// X 表示红色，除了命名的色彩表达，颜色值还可以使用十六进制 #ff0000 表达
		"o c yellow",	// o 表示黄色
		"O c gray100",	// O 表示灰色
		"+ c None",		// + 表示透明
		/* pixels */	// 下面是用色板上的颜色定义表示的像素
		"++++++++++++++++++++++++++++++++",
		"++++++++++++++++++++++++++++++++",
		"++++++++++++++++++++++++++++++++",
		"++++++++++++++++++++++++++++++++",
		"++++++++++++++++++++++++++++++++",
		"++++++++              ++++++++++",
		"++++++++ ............ ++++++++++",
		"++++++++ ............ ++++++++++",
		"++++++++ .OO......... ++++++++++",
		"++++++++ .OO......... ++++++++++",
		"++++++++ .OO......... ++++++++++",
		"++++++++ .OO......              ",
		"++++++++ .OO...... oooooooooooo ",
		"         .OO...... oooooooooooo ",
		" XXXXXXX .OO...... oOOooooooooo ",
		" XXXXXXX .OO...... oOOooooooooo ",
		" XOOXXXX ......... oOOooooooooo ",
		" XOOXXXX ......... oOOooooooooo ",
		" XOOXXXX           oOOooooooooo ",
		" XOOXXXXXXXXX ++++ oOOooooooooo ",
		" XOOXXXXXXXXX ++++ oOOooooooooo ",
		" XOOXXXXXXXXX ++++ oOOooooooooo ",
		" XOOXXXXXXXXX ++++ oooooooooooo ",
		" XOOXXXXXXXXX ++++ oooooooooooo ",
		" XXXXXXXXXXXX ++++              ",
		" XXXXXXXXXXXX ++++++++++++++++++",
		"              ++++++++++++++++++",
		"++++++++++++++++++++++++++++++++",
		"++++++++++++++++++++++++++++++++",
		"++++++++++++++++++++++++++++++++",
		"++++++++++++++++++++++++++++++++",
		"++++++++++++++++++++++++++++++++"
	};


完整代码，有改动：

	%%%-------------------------------------------------------------------
	%%% File    : hello.erl
	%%% Author  : Matthew Harrison <harryhuk at users.sourceforge.net>
	%%% Description : _really_ minimal example of a wxerlang app
	%%%
	%%% Created :  18 Sep 2008 by  Matthew Harrison <harryhuk at users.sourceforge.net>
	%%%-------------------------------------------------------------------
	-module(hello).

	-include_lib("wx/include/wx.hrl").

	-export([start/0]).

	-define(menuID_TEST_QUIT,      400).
	-define(menuID_TEST_CHECK,     401).
	-define(menuID_TEST_RADIO_1,   402).
	-define(menuID_TEST_RADIO_2,   403).
	-define(menuID_TEST_RADIO_3,   404).


	start() ->
		Wx = wx:new(),
		% Wx = wx:null(),
		Frame = wx:batch(fun() -> create_window(Wx) end),
		wxWindow:show(Frame),
		loop(Frame),
		wx:destroy().

	create_window(Wx) ->
		Frame = wxFrame:new(Wx, 
				-1, % window id
				"Hello World", % window title
				[{size, {600,400}}]),


		wxFrame:createStatusBar(Frame,[]),

		MenuBar = wxMenuBar:new(?wxMB_DOCKABLE),
		create_test_menu(MenuBar),
		wxFrame:setMenuBar(Frame, MenuBar),

		%% if we don't handle this ourselves, wxwidgets will close the window
		%% when the user clicks the frame's close button, but the event loop still runs
		wxFrame:connect(Frame, close_window),
		wxFrame:connect(Frame, command_menu_selected), 

		ok = wxFrame:setStatusText(Frame, "Hello World!",[]),
		Frame.

	create_test_menu(MenuBar) ->
		TestMenu   = wxMenu:new(),
		wxMenu:append(TestMenu, wxMenuItem:new([
				{id,    ?menuID_TEST_QUIT},
				{text,  "&Quit"},
				{help,  "Click to Exit..."}
				])),
		wxMenu:appendSeparator(TestMenu), %% --------------------------
		%% note different way of adding check menu item
		wxMenu:appendCheckItem(TestMenu, ?menuID_TEST_CHECK,    "&Check item"),
		wxMenu:appendCheckItem(TestMenu, ?wxID_ABOUT,    "&About"),
		wxMenu:appendSeparator(TestMenu), %% --------------------------
		wxMenu:appendRadioItem(TestMenu, ?menuID_TEST_RADIO_1,  "Radio item &1"),
		wxMenu:appendRadioItem(TestMenu, ?menuID_TEST_RADIO_2,  "Radio item &2"),
		wxMenu:appendRadioItem(TestMenu, ?menuID_TEST_RADIO_3,  "Radio item &3"),
		wxMenuBar:append(MenuBar, TestMenu,     "&Test"),
		TestMenu.

	loop(Frame) ->
		receive 
		#wx{event=#wxClose{}} ->
			io:format("~p Closing window ~n",[self()]),
			ok = wxFrame:setStatusText(Frame, "Closing...",[]),
			wxWindow:destroy(Frame),
			ok;

		#wx{obj=Frame, id=?menuID_TEST_QUIT, event=#wxCommand{}} = Wx->
			io:format("~p Quit now ~p ~n",[?MODULE, Wx]),
			wxWindow:destroy(Frame);

		#wx{obj=Frame, id=?wxID_ABOUT, event=#wxCommand{}} = Wx->
			io:format("~p About ~p ~n",[?MODULE, Wx]),
			dialog(?wxID_ABOUT, Frame),
			loop(Frame);

		#wx{obj=Frame, event=#wxCommand{type=command_menu_selected}} = Wx->
			io:format("~p Got ~p ~n",[?MODULE, Wx]),
			loop(Frame);

		Msg ->
			io:format("~p Got ~p ~n", [?MODULE, Msg]),
			loop(Frame)
		end.

	dialog(?wxID_ABOUT,  Frame) ->
		Str = string:join(["Welcome to wxErlang.", 
				   "This is the minimal wxErlang sample\n",
				   "running under ",
				   wx_misc:getOsDescription(),
				   "."], 
				  ""),
		MD = wxMessageDialog:new(Frame,
					 Str,
					 [{style, ?wxOK bor ?wxICON_INFORMATION}, 
					  {caption, "About wxErlang minimal sample"}]),

		wxDialog:showModal(MD),
		wxDialog:destroy(MD).



## 🍀 wxErlang gen_server
- [wxErlang Reference Manual 1.9.1](https://erlang.org/doc/man/wx_object.html)
- [OTP design principles](http://erlang.org/doc/design_principles/des_princ.html)
- [Erlang Generic server behavior](http://erlang.org/doc/man/gen_server.html)
- [gen_server Behaviour](http://erlang.org/doc/design_principles/gen_server_concepts.html)
- [What is OTP](https://learnyousomeerlang.com/what-is-otp#its-the-open-telecom-platform)


参考代码来自 Erlang 源代码中，wx 模块提供的 Examples/simple/hello2.erl。

执行 `erl -make` 可以编译，编译成功就会出现源代码对应的 .beam。

wx_object 提供了一个 `start_link` 方法来启动一个 wx object server 对象服务器，它会自动在新进程中执行模块的 init 方法，`Mod:init(Args)` 并返回一个窗体对象：

	start_link(Name, Mod, Args, Options) -> wxWindow() 

wx_object 不是 wxWidgets 的类，而是 wx 在内存里的具体物理实现，可以看做是 Erlang 中 gen_server 的 behaviour。

当然，现在是用 Erlang，还是要用它的说法，用户程序模块应该导出以下函数：

- init(Args) 
- handle_call(Msg, {From, Tag}, State)
- handle_event(#wx{}, State)
- handle_info(Info, State)

这样的模块定义，实现这些函数，就完成了 wx 对象服务器的结构定义。事件发生时，就会执行相应的模块方法。

示例代码如下，有改动：

	%%%-------------------------------------------------------------------
	%%% File    : hello.erl
	%%% Author  : Matthew Harrison <harryhuk at users.sourceforge.net>
	%%% Description : _really_ minimal example of a wxerlang app
	%%%               implemented with wx_object behaviour
	%%%
	%%% Created :  18 Sep 2008 by  Matthew Harrison <harryhuk at users.sourceforge.net>
	%%%            Dan rewrote it to show wx_object behaviour
	%%%-------------------------------------------------------------------
	-module(hello2).
	-include_lib("wx/include/wx.hrl").

	-export([start/0,
			 init/1, handle_info/2, handle_event/2, handle_call/3,
			 code_change/3, terminate/2]).

	-behaviour(wx_object).

	-record(state, {win}).

	start() ->
		wx_object:start_link(?MODULE, [], []),
		loop().

	%% Init is called in the new process.
	init([]) ->
		wx:new(),
		Frame = wxFrame:new(wx:null(), 
				-1, % window id
				"Hello World", % window title
				[{size, {600,400}}]),
		
		wxFrame:createStatusBar(Frame,[]),

		%% if we don't handle this ourselves, wxwidgets will close the window
		%% when the user clicks the frame's close button, but the event loop still runs
		wxFrame:connect(Frame, close_window),
		
		ok = wxFrame:setStatusText(Frame, "Hello World!",[]),
		wxWindow:show(Frame),
		{Frame, #state{win=Frame}}.

	loop() ->
		receive 
			{'EXIT',_,_}->
				io:fwrite("Exit...");
			Msg ->
				io:fwrite("Loop ~p...~n", [Msg]),
				loop()
		end.

	%% Handled as in normal gen_server callbacks
	handle_info(Msg, State) ->
		io:format("Got Info ~p~n",[Msg]),
		{noreply,State}.

	handle_call(Msg, _From, State) ->
		io:format("Got Call ~p~n",[Msg]),
		{reply,ok,State}.

	%% Async Events are handled in handle_event as in handle_info
	handle_event(#wx{event=#wxClose{}}, State = #state{win=Frame}) ->
		io:format("~p Closing window ~n",[self()]),
		ok = wxFrame:setStatusText(Frame, "Closing...",[]),
		wxWindow:destroy(Frame),
		{stop, normal, State}.

	code_change(_, _, State) ->
		{stop, not_yet_implemented, State}.

	terminate(_Reason, _State) ->
		ok.



## 🍀 wxErlang Sudoku
- [wxErlang Reference Manual 1.9.1](https://erlang.org/doc/man/wx_object.html)
- [OTP design principles](http://erlang.org/doc/design_principles/des_princ.html)
- [Erlang Generic server behavior](http://erlang.org/doc/man/gen_server.html)
- [gen_server Behaviour](http://erlang.org/doc/design_principles/gen_server_concepts.html)
- [What is OTP](https://learnyousomeerlang.com/what-is-otp#its-the-open-telecom-platform)

在 Erlang 源代码中，wx 模块提供了 Examples，其中有 sudoku 游戏的示范。

执行 `erl -make` 可以编译，编译成功就会出现源代码对应的 .beam。

Sudoku 是日语的数独，最简单的数独就是九宫格。标准 Sudoku 从整体上看，是 9 X 9 的盘格，每 3 X 3 的盘格作为一区。

Sudoku 的游戏规则非常简单，全盘的每一行、每一列，必须填进 9 个数字。每行每列的数字，必须完全不同，不允许出现重复数字，每个小区 3 X 3 的盘格也不允许出现重复数字。

Sudoku 这个程序也是基于 Erlang/OTP 工程的基本框架，即 Supervision Tree 监督树架构实现的，大量使用了 Erlang/OTP 四大 Behaviour 中的 `gen_server`。除 Supervisor 外，它们都在监督树充当 Worker 角色：

- `gen_server` Generic server behaviour，实现 C/S 架构中的服务端；
- `gen_statem` Generic state machine behaviour，实现一个有限状态机 FSM - Finite State Machine；
- `gen_event`  Generic event handling behavior，实现事件处理功能；
- `supervisor` Generic supervisor behavior，实现监督者，它以监督树的方式存在；


Sudoku 模块分解：

- `sudoku.hrl` 

	引入 wx 头文件，定义结构体和菜单常量，还有一个宏 `TC` 包装参数方便使用主模块中的 tc 方法；

- `sudoku.erl` 

	是程序主进程模块，定义两个入口 `go` 和 `start`，还有两个内部方法：

	- `init` 初始化，执行 `sudouku_gui:new` 设置界面，同时执行 `sudoku_game:init(GFX)` 初始化游戏逻辑模块，并进入消息循环。GFX 是整个游戏的 GUI 界面模块，即 `sudoku_gui` 模块，它通过消息发送给主模块，`Game ! {gfx, self()}`；
	- `tc` 封装 timer:tc 函数，即 Time counter 计时器，用来测量运行时间；

- `sudoku_gui.erl` GUI 界面模块，只供 sudoku.erl 调用；

	在唯一的对外接口 new 函数中执行 wx_object:start_link 开始一个类似 gen_server behaviour 的服务器，配置主界面及事件处理，使用 wxBoxSizer 做布局，将主界面分成 `Top` 和 `Main` 两块。`Top` 部分放按钮，`Main` 用来放棋盘，通过执行 `sudoku_board:new` 来初始化棋盘。在 `handle_info` 函数中接收来自棋盘消息，如 `set_val` 设置格子数值消息，并通过 `validate` 消息通知主模块。

- `sudoku_board.erl` 是游戏棋盘实现：

	属于 GUI 功能的一部分，棋盘显示是通过 `wxDC` 绘图实现的，每个格子只占 Canvas 中的一个绘图区域。棋盘模块也是标准 `gen_server`，绑定的各种事件，如键盘事件，按数字键就可以在格子上填数字，在 `handle_event` 或 `handle_sync_event` 回调函数中处理各种事件，如窗口大小变化事件 `#wxSize` 中就执行 `redraw` 重绘格子，`draw_board` 函数就是真正画格子方法。在鼠标移动过程中或键盘事件中，通过鼠标位置计算是哪个格子，然后再向 `sudoku_gui` 发送 `set_val` 消息。

		wxWindow:connect(Win, paint,  [callback]),
		wxWindow:connect(Win, size,  []),
		wxWindow:connect(Win, erase_background, []),
		wxWindow:connect(Win, key_up, [{skip, true}]),
		wxWindow:connect(Win, left_down, [{skip, true}]),
		wxWindow:connect(Win, enter_window, [{skip, true}]),

		handle_sync_event( #wx{event=#wxPaint{}} ...
		handle_event( #wx{event=#wxKey{keyCode=KeyC}} ...
		handle_event( #wx{event=#wxMouse{type=left_down,x=X,y=Y}} ...
		handle_event( #wx{event=#wxSize{}} ...

- `sudoku_gamr.erl` 是数独游戏逻辑模块，由 `sudoku` 模块执行初始化，`init(GFX)` 函数传入的 GUI 界面模块用于消息传递，整个程序的消息循环就是这个核心模块。注意，它和入口模块是同进程的，并不像 `sudoku_gui` 或 `sudoku_board` 是 wx_object behaviour，会创建新进程运行，它们和主进程的通信走消息管道。所以进入消息循环后，主要的逻辑就是主线程与 GUI 线程的消息处理，以及根据游戏规则响应。列如，`validate` 消息是在给格子设置数字时产生的，核心模块需要对数字进行判断，如果是相同的数字就忽略继续消息循环，否则进入 `validate` 函数验证，再将验证结果发送消息给 GUI 模块进行相应的绘图。

GUI 界面在关闭时，发送了一条消息 `G ! quit` 并给 wx_object 返回一个 `{stop, shutdown, S}`，这个返回值不符合 wx_object 的要求，会触发异常导致不能正常关闭程序，应该在关闭时返回 `{stop, Reason, State}`：

	handle_event(#wx{}, State) should return
	{noreply, State} | {noreply, State, Timeout} | {stop, Reason, State}

同时 `G ! quit` 消息在主模块消息循环中会转换为一个 `halt` 原子类型，主模块的入口设置的 case 条件不匹配又会导致异常：

	init(Halt) ->
		?TC(sudoku_gui:new(self())),
		% tc(fun() -> sudoku_gui:new(self()) end, ?Module, ?Line)
		receive {gfx, GFX} -> ok end,
		case sudoku_game:init(GFX) of
			Halt -> erlang:halt();
			Stop -> exit(Stop)
		end.

这里示例中的 BUG 代码，需要作相应修改。

draw_board 格子绘制的相关代码：

	-record(state, {win, parent, board=[], pen, fonts=[]}).

	init([ParentObj, ParentPid]) ->
		...
		%% Init pens and fonts
		Pen = wxPen:new({0,0,0}, [{width, 3}]),
		Fs0  = [{Sz,wxFont:new(Sz, ?wxSWISS, ?wxNORMAL, ?wxNORMAL,[])} ||
			   Sz <- [8,9,10,11,12,13,14,16,18,20,22,24,26,28,30,34,38,42,44,46]],
		TestDC  = wxMemoryDC:new(),
		Bitmap = wxBitmap:new(256,256),
		wxMemoryDC:selectObject(TestDC, Bitmap),
		true = wxDC:isOk(TestDC),
		CW = fun({Sz,Font},Acc) ->
			 case wxFont:ok(Font) of
				 true ->
				 wxDC:setFont(TestDC, Font),
				 CH = wxDC:getCharHeight(TestDC),
				 [{CH,Sz,Font} | Acc];
				 false ->
				 Acc
			 end
		 end,
		Fs = lists:foldl(CW, [], Fs0),
		wxMemoryDC:destroy(TestDC),
		{Win, #state{win=Win, board=[], pen=Pen, fonts=Fs,parent=ParentPid}}.

	redraw(S = #state{win=Win}) ->
		DC0  = wxClientDC:new(Win),
		DC   = wxBufferedDC:new(DC0),
		Size = wxWindow:getSize(Win),
		redraw(DC, Size, S),
		wxBufferedDC:destroy(DC),
		wxClientDC:destroy(DC0),
		ok.

	redraw(DC, Size, S) ->    
		wx:batch(fun() -> 
				 wxDC:setBackground(DC, ?wxWHITE_BRUSH),
				 wxDC:clear(DC),
				 BoxSz = draw_board(DC,Size,S),
				 F = sel_font(BoxSz div 3,S#state.fonts),
				 [draw_number(DC,F,BoxSz,Sq) || Sq <- S#state.board]
			 end).

	draw_number(DC,F,Sz,#sq{key={R,C},val=Num,given=Bold,correct=Correct}) ->
		{X,Y} = get_coords(Sz,R-1,C-1),
		TBox = Sz div 3,
		if Bold -> 
			wxFont:setWeight(F,?wxBOLD),
			wxDC:setTextForeground(DC,{0,0,0});
		   Correct =:= false ->
			wxFont:setWeight(F,?wxNORMAL),
			wxDC:setTextForeground(DC,{255,40,40,255});
		   true ->
			wxFont:setWeight(F,?wxNORMAL),
			wxDC:setTextForeground(DC,{50,50,100,255})
		end,
		wxDC:setFont(DC,F),
		CH = (TBox - wxDC:getCharHeight(DC)) div 2,
		CW = (TBox - wxDC:getCharWidth(DC)) div 2,
		wxDC:drawText(DC, integer_to_list(Num), {X+CW,Y+CH+1}),
		ok.

	draw_board(DC,{W0,H0},#state{pen=Pen}) ->
		BoxSz = getGeomSz(W0,H0),
		BS = ?BRD+3*BoxSz,

		wxPen:setWidth(Pen, 3),
		wxPen:setColour(Pen, {0,0,0}),
		wxDC:setPen(DC,Pen),
		
		wxDC:drawRoundedRectangle(DC, {?BRD,?BRD,3*BoxSz+1,3*BoxSz+1}, 
					  float(?ARC_R)),
		%% Testing DrawLines
		wxDC:drawLines(DC, [{?BRD+BoxSz, ?BRD}, {?BRD+BoxSz, BS}]),
		wxDC:drawLine(DC, {?BRD+BoxSz*2, ?BRD}, {?BRD+BoxSz*2, BS}),
		wxDC:drawLine(DC, {?BRD, ?BRD+BoxSz}, {BS, ?BRD+BoxSz}),
		wxDC:drawLine(DC, {?BRD, ?BRD+BoxSz*2}, {BS, ?BRD+BoxSz*2}),

		%% Draw inside lines
		wxPen:setWidth(Pen, 1),
		wxDC:setPen(DC,Pen),
		TBox = BoxSz div 3,   
		wxDC:drawLine(DC, {?BRD+TBox, ?BRD}, {?BRD+TBox, BS}),
		wxDC:drawLine(DC, {?BRD+TBox*2, ?BRD}, {?BRD+TBox*2, BS}),
		wxDC:drawLine(DC, {?BRD+TBox+BoxSz, ?BRD}, {?BRD+TBox+BoxSz, BS}),
		wxDC:drawLine(DC, {?BRD+TBox*2+BoxSz, ?BRD}, {?BRD+TBox*2+BoxSz, BS}),
		wxDC:drawLine(DC, {?BRD+TBox+BoxSz*2, ?BRD}, {?BRD+TBox+BoxSz*2, BS}),
		wxDC:drawLine(DC, {?BRD+TBox*2+BoxSz*2, ?BRD}, {?BRD+TBox*2+BoxSz*2, BS}),
		%% Vert
		wxDC:drawLine(DC, {?BRD, ?BRD+TBox}, {BS, ?BRD+TBox}),
		wxDC:drawLine(DC, {?BRD, ?BRD+TBox*2}, {BS, ?BRD+TBox*2}),
		wxDC:drawLine(DC, {?BRD, ?BRD+TBox+BoxSz}, {BS, ?BRD+TBox+BoxSz}),
		wxDC:drawLine(DC, {?BRD, ?BRD+TBox*2+BoxSz}, {BS, ?BRD+TBox*2+BoxSz}),
		wxDC:drawLine(DC, {?BRD, ?BRD+TBox+BoxSz*2}, {BS, ?BRD+TBox+BoxSz*2}),
		wxDC:drawLine(DC, {?BRD, ?BRD+TBox*2+BoxSz*2}, {BS, ?BRD+TBox*2+BoxSz*2}),
		BoxSz.

绘制格式步骤：

- wxDC:drawRoundedRectangle 绘制一个圆角大矩形；
- wxDC:drawLine 绘制大、小九宫格的分割线，只是粗细的区别；
- wxDC:drawText 在 draw_number 函数中绘制数字；

注意 `redraw` 方法中的 `[draw_number(DC,F,BoxSz,Sq) || Sq <- S#state.board]` 表达，它是`列表推理` List Comprehensions，相当于枚举了各个数字并调用 draw_number 函数进行绘制。



# 🚩 Socket 编程
- [Programming Erlang 第14章 Socket 编程](http://gashero.yeax.com/?p=66)

Programming Erlang 2nd 版在 17 章讲 Programming with Sockets。

大多数我写的更有趣的程序都包含了 Socket，它允许机器与 Internet 上另一端使用 IP 的端点通信。Internet 上有两种核心网络协议，TCP 和 UDP，作为开发者必须关注。

UDP 允许应用发送简短报文，即数据报 datagram 到另一端，但是对报文的接收成功与否不作保证，并且可能在到达时有错误的顺序。而 TCP 则提供了可靠的字节流，并且确保在连接后传输数据的顺序也是对的。

为什么 Socket 编程很有趣呢？因为它允许应用于其他 Internet 上的机器通信，而这些比本地操作更有潜力，所有流行的软件几乎都需要网络的支持。

有两种主要的库用于 Socket 编程： gen_tcp 用于 TCP 编程、 gen_udp 用 于UDP 编程。

在本章，我们看看如果使用 TCP 和 UDP socket 编写客户端和服务器。我们将会尝试多种形式的服务器(并行、串行、阻塞、非阻塞)并且看看通信接口应用如何将数据流传递给其他应用。

我们先写一个小函数，标准库的 http:request(Url) 实现相同的功能，但是这里是演示 TCP socket 编程获取网站的 HTML 页面:

```erlang
	-module(coding).
	-export([nano_get_url/0, nano_get_url/1]).
	-import(lists, [reverse/1]).

	main(_) ->
		nano_get_url().

	nano_get_url() ->
		nano_get_url("www.google.com").

	nano_get_url(Host) ->
		{ok,Socket} = gen_tcp:connect(Host, 80, [binary, {packet,0}]),
		ok = gen_tcp:send(Socket, "GET / HTTP/1.0\r\n\r\n"),
		receive_data(Socket, []).

	receive_data(Socket,SoFar) ->
		receive
			{tcp,Socket,Bin} ->
				io:format("go ~s~n", [Bin]),
				receive_data(Socket, [Bin|SoFar]);
			{tcp_closed,Socket} ->
				io:format("go ~s~n", [tcp_closed]),
				list_to_binary(reverse(SoFar))
		end.
```

它如何工作呢？

我们通过 `gen_tcp:connect` 打开 TCP 协议 80 端口。connect 的参数告知系统以 `binary` 模式打开 socket，并且以二进制方式传递数据到应用。 `{packet, 0}` 意味着任意长度无需遵守特定格式即可将数据传递到应用。

我们调用 `gen_tcp:send` 并发送 HTTP 消息 GET / HTTP/1.0\r\n\r\n 到 socket。然后我们等待对方响应，响应并不会一次性得到，而是分片的、分时间的。这些分片是按照一系列 TCP 报文的方式接收的，并且通过打开的 socket 发送到进程。

我们接收一个 `{tcp, Socket, Bin}` 报文，第三个参数是 binary。这是因为我们已经使用二进制方式打开了 socket。这是从 WEB 服务器发到我们的一个消息报文。我们把这个报文加到分片列表并等待下一个报文。

我们接收到 `{tcp_closed, Socket}` 报文，这在服务器发送完所有数据时发生，这仅在 HTTP/1.0 时正确，现在的 HTTP 版本使用另外一种结束策略。

当我们收到了所有的分片，存储顺序是错误的，所以我们重新对分片排序和连接。
我们看看他如何工作:

	1> B=socket_examples:nano_get_url().
	<<"HTTP/1.0 302 Found\r\nLocation: http://www.google.se/\r\n
		Cache-Control: private\r\nSet-Cookie: PREF=ID=b57a2c:TM"...>>

这就差不多 WEB 客户端的工作方式，不过在浏览器中正确的显示要做更多的工作。上面的代码只是实验的开始，你可以尝试做一些修改来下载整个网站或者读取电子邮件，可能性是无限的。

注意分片的重新组装方式如下:

	receive_data(Socket,SoFar) ->
		receive
			{tcp,Socket,Bin} ->
				receive_data(Socket,[Bin|SoFar]);
			{tcp_closed,Socket} ->
				list_to_binary(reverse(SoFar))
		end.

每当我们收到分片时，就把他们加入 SoFar 这个列表的头部。当收到了所有分片时，Socket 就关闭了，我们颠倒顺序，并且把所有分片组合起来。

你可能以为收到分片后立即合并会好些:

	receive_data(Socket,SoFar) ->
		receive
			{tcp,Socket,Bin} ->
				receive_data(Socket,list_to_binary([SoFar,Bin]));
			{tcp_closed,Socket} ->
				SoFar
		end.

这段代码是正确，但是效率比较低，因为不断的把新的二进制数据加到缓冲区后面，也就是包含了多个数据的拷贝的。一个好办法是累积所有分片，尽管顺序是相反的，然后反序整个列表并一次连接所有分片。


## 🍀 TCP Server Demo

在前一节，我们写了一个简单的客户端，现在我们写个服务器。

服务器开启 2345 端口然后等待一个消息。这个消息是包含 Erlang 术语的二进制数据，这个术语是包含 Erlang 表达式的字符串。服务器对该表达式求值并且将结果通过 socket 发到客户端。

编写 WEB 客户端或服务器是很有趣的。当然，有些人已经写好这些了，但是如果想要真正理解他们的工作原理，研究底层实现还是很有意义的。谁知道呢，说不定我们写的 WEB 服务器更好。所以我们看看如何做吧？

想要构建一个 WEB 服务器，任何一个需要实现标准的 Internet 协议，我们需要使用正确的工具和了解协议实现。

在我们的例子用来抓取一个 WEB 页，我们如何知道已经正确打开了 80 端口，并且如何知道已经发送了 GET / HTTP/1.0\r\n\r\n 到服务器？答案很简单，所有主要协议都已经在 RFC 文档中有描述。HTTP/1.0 定义于 RFC1945，可以从 RFC 的官方网站 http://www.letf.org 获取参考文献。

另外一个非常有用的方法是抓包，使用类似 Fiddler 这样的 HTTP 抓包工具。通过一个数据包嗅探器，我们可以抓取和分析所有 IP 数据包，无论是应用程序发出的还是接收的。大多数嗅探器包含解码器和分析器可以得出数据包的内容和格式。一个著名的嗅探器是 Wireshark，以前叫 Ethereal，可以到 http://www.wireshark.org/ 了解更多。

使用嗅探器和 RFC 武装起来的我们，就可以准备编写下一个杀手级应用了。

编写这个程序或者其他使用 TCP/IP 的程序需要响应一些简单的请求：

- 数据如何组织，知道数据如何组成请求或者响应？
- 数据在请求和响应中如何编码(encode & marshal)和解码(decode & demarshal)
- TCP socket 数据只是没有格式的字节流。在传输时，数据会切成任意长度的分片，所以我们需要多少数据如何组成请求或响应。

在 Erlang 的例子，我们使用简单的转换，把每个逻辑请求或响应前加上 N(1/2/4) 字节的长度数。这就是 `{packet,N}` 参数在 gen_tcp:connect 和 gen_tcp:listen 函数的意义。这里的 packet 表示一个应用程序请求或响应报文，而不是电线里面的物理包。注意 packet 附带的那个参数在客户端和服务器端必须商定好。如果服务器使用 `{packet,2}` 而客户端使用 `{packet,4}` 则会出错。

在我们以 `{packet,N}` 选项打开 socket 后，我们就不需要担心数据分片了。Erlang 驱动会自动确保数据报文的所有分片都收到并且长度正确时才发到应用程序。

另一个需要注意的是数据编码和解码。最简单时，我们可以用 term_to_binary 来对 Erlang 术语编码，并使用 binary_to_term 来解码数据。

注意，客户端和服务器通信的包转换和编码规则是两行代码完成，分别使用 {packet,4} 来打开socket和使用 term_to_binary 和其反函数完成编码和解码数据。

我们可以简单的打包和编码Erlang术语到基于文本的协议如HTTP或XML。使用Erlang的 term_to_binary 和其反函数可以比基于XML等文本的协议性能高出一个数量级。现在我们先看看一个简单的服务器:

	start_nano_server() ->
		{ok,Listen}=gen_tcp:listen(2345,[binary,{packet,4},
												{reuseaddr,true},
												{active,true}]),
		{ok,Socket}=gen_tcp:accept(Listen),
		gen_tcp:close(Listen),
		loop(Socket).

	loop(Socket) ->
		receive
			{tcp,Socket,Bin} ->
				io:format("Server received binary = ~p~n",[Bin]),
				Str=binary_to_term(Bin),
				io:format("Server (unpacked) ~p~n",[Str]),
				Reply=lib_misc:string2value(Str),
				io:format("Server replying = ~p~n",[Reply]),
				gen_tcp:send(Socket,term_to_binary(Reply)),
				loop(Socket);
			{tcp_closed,Socket} ->
				io:format("Server socket closed~n")
		end.

它如何工作？

首先，我们调用 gen_tcp:listen 来监听2345端口，并且设置报文转换格式为 {packet,4} ，意味着每个包有4个字节的包头，代表长度。然后 gen_tcp:listen(..) 会返回 {ok,Socket} 或者 {error,Why} ，但是我们先看看成功的情况。所以写下如下代码 {ok,Listen}=gen_tcp:listen(...), 这在程序返回 {error,…} 时发生匹配错误。如果成功则会绑定Listen到正在监听的socket。对于正在监听的socket，我们只需要做一件事，就是使用它做参数调用 gen_tcp:accept 。
现在我们调用 gen_tcp:accept(Listen) 。在这里，程序会挂起以等待连接。当我们获得连接时，这个函数返回已经绑定的Socket，这个socket就是可以与客户端连接并且可以通信的了。
当 gen_tcp:accept 返回，我们立即调用 gen_tcp:close(Listen) 。这就关闭了监听的socket，服务器也就不会继续接受新的连接了。而这不会影响已有的连接，只是针对新连接。
解码输入数据
对字符串求值
编码返回数据并且通过socket发送
注意，这个程序只接受一个请求，程序运行完成后就不会再接受其他请求了。

这是一个非常简单的服务器展示了如何打包和编码应用数据。接收请求，计算响应，发出响应，然后结束。

想要测试这个服务器，我们需要一个对应的客户端:

	nano_client_eval(Str) ->
		{ok,Socket}=get_tcp:connect("localhost",2345,[binary,{packet,4}]),
		ok=gen_tcp:send(Socket,term_to_binary(Str)),
		receive
			{tcp,Socket,Bin} ->
				io:format("Client received binary = ~p~n",[Bin]),
				Val=binary_to_term(Bin),
				io:format("Client result = ~p~n",[Val]),
				gen_tcp:close(Socket)
		end.

想要测试你的代码，我们需要在一台机器上同时启动客户端和服务器。所以在 gen_tcp:connect 中的hostname参数就可以用硬编码的 localhost 。

注意客户端和服务器端使用的 term_to_binary 和 binary_to_term 怎样编码和解码数据。

想要运行，我们需要开两个终端然后启动Erlang shell。

首先，我们启动服务器:

1> socket_examples:start_nano_server().
我们看不到任何输出，当然什么也没发生呢。然后我们在另一个终端启动客户端，输入如下命令:

1> socket_examples:nano_client_eval("list_to_tuple([2+3*4,10+20])").
在服务器端的窗口尅看到如下输出:

Server received binary = <<131,107,0,28,108,105,115,116,95,116,
						   111,95,116,117,112,108,101,40,91,50,
						   43,51,42,52,44,49,48,43,50,48,93,41>>
Server (unpacked)  "list_to_tuple([2+3*4,10+20])"
Server replying = {14,30}
在客户端窗口可以看到:

Client received binary = <<131,104,2,97,14,97,30>>
Client result = {14,30}
ok
最后，在服务器窗口看到:

	Server socket closed



# 🚩 Concurrent Programming 并发编程
- https://www.cnblogs.com/scheme/archive/2013/05/31/3110580.html
- https://www.tutorialspoint.com/erlang/erlang_spawn.htm
- http://erlang.org/doc/reference_manual/processes.html

Erlang 使用 spawn 函数创建进程，Erlang 的进程特点：

- 并非属于操作系统, 它是属于程序语言本身
- 创建和销毁进程非常迅速
- 在两个进程间收发消息非常迅速
- 进程在所有操作系统上行为相同
- 可以创建大量进程
- 进程之间不共享任何数据, 彼此间完全独立
- 进程间交互的唯一方式是消息传递


介绍一下函数孵化机，用于分裂函数，产生新进程，轻量进程 Lightweight process。参数传入 Function 待分裂的函数，返回进程 ID。

	spawn(Fun)
	spawn(Module, Function, Args)
	spawn(Node, Fun)
	spawn(Node, Module, Function, Args)

	spawn(ModName, FuncName, [Arg1, Arg2, ..., ArgN])

关于模块，可以使用 Module:module_info 函数获取指定的模块信息，对于 Erlang shell，直接使用 module_info 获取，默认的 shell 模块是 shell_default，也可以使用 m() 方法查询当前加载的模块列表。

For example

	-module(helloworld). 
	-export([start/0]). 

	start() ->
	   spawn(fun() -> server("Hello") end). 

	server(Message) ->
	   io:fwrite("~p",[Message]).
	
Output

	“Hello”

spawn 与 spawn_link 二者的主要区别在于，spawn 出的进程意外崩溃后，不影响父进程的运行；spawn_link 出的进程意外崩溃后，则连带父进程一并停运。


可以使用 pid 来生成一个 PID， `is_pid` 函数检查是否是 PID 类型，`is_process_alive` 函数检查 Process 是否还活着。显示 false 是因为它已经运行完成终止了。

	1> HelloParallel = fun() -> io:format("hello parallel!~n") end.
	#Fun<erl_eval.20.99386804>
	2> spawn(HelloParallel).  %% spawn/1 BIF 接受一个函数做为参数。
	hello parallel!
	<0.63.0>
	3> PID = pid(0,63,0).
	4> is_pid(PID). 
	true
	5> is_process_alive(PID).
	false

`spawn` 函数创建进程，`!` 向进程发送消息：

	Pid = spawn(Fun).

	Pid ! Message
	Pid1 ! Pid2 ! ... M

接收消息

	receive
		Pattern1 [when Guard1] ->
			Expressions1;
		Pattern2 [when Guard2] ->
			Expressions2;
		...
	end.

receive 语句使用 pattern matching 来从自己进程的信箱里读取消息，可以使用 after 语句来设置等待超时时间：

	1> self() ! "msg1".
	"msg1"
	2> self() ! "msg2".
	"msg2"
	3> self() ! "msg3".
	"msg3"
	4> receive Msg -> Msg after 3000 -> no_more end.
	"msg1"
	5> receive Msg -> Msg after 3000 -> no_more end.
	no_more
	6> receive Msg -> Msg after 3000 -> no_more end.
	no_more

上面读取任意消息并返回这条消息，如果信箱里没有消息了，等待 3 秒后结束并返回 no_more 原子类型。后面这两条为什么返回 no_more ? 不应该是 "msg2", "msg3" 吗？

上面的第 4 行 receive 语句里，erlang shell 进程查看邮箱，查到第一个消息是 "msg1", Msg 被绑定为 "msg1"。再次运行 receive 语句的时候，由于 Msg 的值已经为 "msg1"，与信箱里的 "msg2", "msg3" 都不匹配，所以后面两条 receive 语句都没有从信箱里读取新消息，"msg2" 和 "msg3" 仍然存储在信箱里:

	16> flush().
	Shell got "msg2"
	Shell got "msg3"
	ok

注意虽然后面两个 receive 语句都没有从信箱里读取消息，但在 receive 语句的执行过程中，它仍然是从头到尾遍历了整个邮箱，并尝试拿邮箱里的各个消息跟代码里的 Msg 进行匹配，这是消耗资源的，等后面消息堆积越多越麻烦。这个叫 Selective Message Reception，消息的读取顺序是接收方决定的。

所以一般情况下我们在读取信箱消息时，读到我们不感兴趣的消息也取出来，打个 error log 然后扔掉它，不要让它一直在信箱里耗费资源。


一个简单例子，在 loop 函数中根据接收的消息执行不同的动作, 并继续等待接收消息：

	-module(area_server0).
	-export([loop/0]).

	loop() ->
		receive
			{rectangle, Width, Ht} ->
				io:format("Area of rectangle is ~p~n", [Width * Ht]),
				loop();
			{circle, R} ->
				io:format("Area of circle is ~p~n", [3.14159 * R * R]),
				loop();
			Other ->
				io:format("I don't know what the area of a ~p is ~n", [Other]),
				loop()
		end.

编译测试进程，通过 spawn 创建进程，并向 Pid 指定进程传递消息：

	1> c(area_server0).
	{ok,area_server0}

	2> Pid = spawn(fun area_server0:loop/0).
	<0.37.0>

	3> Pid ! {rectangle, 6, 10}.
	Area of rectangle is 60
	{rectangle,6,10}

	4> Pid ! {circle, 23}.
	Area of circle is 1661.90111
	{circle,23}

	5> Pid ! {triangle, 2, 4, 5}.
	I don't know what the area of a {triangle,2,4,5} is 
	{triangle,2,4,5}

客户/服务器介绍

	-module(area_server).
	-export([loop/0, rpc/2]).

	rpc(Pid, Request) ->
		Pid ! {self(), Request},
		receive
			Response ->
				Response
		end.

	loop() ->
		receive
			{From, {rectangle, Width, Ht}} ->
				From ! Width * Ht,
				loop();
			{From, {circle, R}} ->
				From ! 3.14159 * R * R,
				loop();
			{From, Other} ->
				From ! {error, Other},
				loop()
		end.

定义了远程过程调用函数 rpc 和 loop 循环心接收消息。在 rpc 中封装请求和等待回应，发送消息后使用 receive 原语等待回应。发送消息时带上了自身进程号以区分发送者，使用 `self()` 函数获取进程自己的 Pid。

调用结果：

	1> c(area_server).
	{ok,area_server}

	2> Pid = spawn(fun area_server:loop/0).
	<0.48.0>

	3> area_server:rpc(Pid, {rectangle, 6, 8}).
	48

	4> area_server:rpc(Pid, {circle, 6}).
	113.09723999999999

	5> area_server:rpc(Pid, socks).
	{error,socks}

还可以改造 rpc 增加 Pid 以区分服务器进程的 Pid，使用其它函数封装 rpc 函数：

	-module(area_server3).
	-export([start/0, area/2]).

	%% 封装进程创建的过程 
	start() ->spawn(fun loop/0).

	%% 隐藏远程过程调用
	area(Pid, What) ->rpc(Pid, What).

	rpc(Pid, Request) ->
		Pid ! {self(), Request},
		receive
			{Pid, Response} ->
				Response
		end.

	loop() ->
		receive
			{From, {rectangle, Width, Ht}} ->
				From ! {self(), Width * Ht},
				loop();
			{From, {circle, R}} ->
				From ! {self(), 3.14159 * R * R},
				loop();
			{From, Other} ->
				From ! {self(), {error, Other}},
				loop()
		end.

测试创建一个进程需要花费多少时间。

使用 statistics 函数进行统计，system_info 函数获取系统支持的最大进程数， 可以在启动 shell 时通过 +P 进行设置。

将要用于统计执行所耗的 CPU 时间的代码段放在两个 statistics(runtime) 函数调用之间。

	-module(processes).
	-export([max/1]).

	max(N) ->
		Max = erlang:system_info(process_limit),
		io:format("Maximum allowed processes:~p~n", [Max]),

		statistics(runtime),
		statistics(wall_clock),
		
		L = for(1, N, fun() ->spawn(fun() ->wait() end) end),
		{_, Time1} = statistics(runtime),
		{_, Time2} = statistics(wall_clock),
		
		lists:foreach(fun(Pid) ->Pid ! die end, L),
		U1 = Time1 * 1000 / N,
		U2 = Time2 * 1000 / N,
		io:format("Process spawn time=~p (~p) microseconds~n",[U1, U2]).
	wait() ->
		receive 
			die ->void
		end.

	for(N, N, F) ->[F()];
	for(I, N, F) ->[F() | for(I+1, N, F)].


在 Intel i7 2.9G 处理器、8G内存的 Mac Pro 上运行效果如下：

	matrix@MBP:8 $ erl +P 500000
	Erlang R15B01 (erts-5.9.1) [source] [64-bit] [smp:4:4] [async-threads:0] [hipe] [kernel-poll:false]

	Eshell V5.9.1  (abort with ^G)
	1> processes:max(20000).
	Maximum allowed processes:500000
	Process spawn time=3.0 (2.95) microseconds
	ok

在 Surface Book 2，i7-8650U 1.9Ghz/2.11Ghz 16G GTX 1050 机器测试，50 万进程和 500 万进程：

	>erl +P 500000
	Eshell V10.4  (abort with ^G)
	1> c(processes).
	{ok,processes}
	2> processes:max(20000).
	Maximum allowed processes:524288
	Process spawn time=8.6 (3.15) microseconds
	ok
	3> processes:max(500000).
	Maximum allowed processes:524288
	Process spawn time=6.094 (2.812) microseconds
	ok
	1

	>erl +P 5000000
	Eshell V10.4  (abort with ^G)
	1> processes:max(5000000).
	Maximum allowed processes:8388608
	Process spawn time=6.7094 (4.3374) microseconds
	ok
	2> processes:max(5000000).
	Maximum allowed processes:8388608
	Process spawn time=6.4812 (3.353) microseconds
	ok

为 receive 语句添加超时处理, 格式如下：

	receice
		Pattern1 [when Guard1] ->
			Expressions1;
		Pattern2 [when Guard2] ->
			Expressions2;
		...
	after Time ->
		Expressions
	end.

只有超时的 receive 其实就是实现的 sleep 功能

	sleep(T) ->
		receive
		after T ->
			true
		end.

超时时间为 0 的 receive，设置超时时间为 0, 避免进程永久暂停：

	flush_buffer() ->
		receive
			%% 这里使用下划线变量(未绑定)来匹配任意消息
			_Any ->
				%%  _Any匹配任意消息后继续调用flush_buffer()将最终清空所有消息
				flush_buffer()
		%% 清空所有消息后如果没有设置超时时间为0将导致flush_buffer()函数的永久暂停
		after 0 ->
			true
		end.

设置超时时间为0, 实现优先接收

	priority_receive() ->
		%% 如果没有消息匹配alarm, 程序将会走到超时设置的代码
		receive
			{alarm, X} ->{alarm, X}
		%% 在超时设置里使用Any将会匹配到第一条消息
		after 0 ->
			receive
				Any ->Any
			end
		end.

如果将 after 后跟的时间值设置为 infinity 将会导致系统永远不会触发超时，即使用一个无限等待超时进行接收。

实现一个计时器

	-module(stimer).
	-export([start/2, cancel/1]).

	%% 启动函数, 指定间隔时间和要执行的函数
	start(Time, Fun) ->spawn(fun() ->timer(Time, Fun) end).

	%% 结束函数, 向指定进程发送结束命令 
	cancel(Pid) ->Pid ! cancel.

	%% 计时器函数
	%% 如果在超时时间之前接收到结束消息则销毁进程
	%% 否则将执行指定的函数 
	timer(Time, Fun) ->
		receive
			cancel ->void
		after Time ->
				Fun()
		end.

8.6 选择性接收

	send原语将消息发送到一个进程的邮箱
	receive原语将邮箱中的消息进行处理并删除
	%% 进入receive语句后即启动计时器(如果有after语句)
	receice
		%% 依次从邮箱中取出消息对Pattern进行模式匹配
		%% 匹配成功后将执行模式后面的表达式并删除消息
		Pattern1 [when Guard1] ->
			Expressions1;
		Pattern2 [when Guard2] ->
			Expressions2;
		...
	%% 如果没有找到可以匹配的消息则进程挂起 
	after Time ->
		Expressions
	end.
	8.7 注册进程
	考虑到安全性和便捷性, Erlang提供了进程注册的方式替换PID的方式实现进程间的通信。
	注册进程
	register(AnAtom, Pid), 将Pid注册一个名为AnAtom的原子
	取消注册
	unregister(AnAtom), 移除AnAtom相对于的进程信息
	判断是否已注册
	whereis(AnAtom) -> Pid | undefined, 如果已注册则返回Pid, 否则返回undefined
	查看注册列表
	registered() -> [AnAtom::atom()], 返回一个系统中所有已注册的名称列表
	8.8 如何编写一个并发程序
	作者提供的并发程序的编程模版
	-module(ctemplate).
	-compile(export_all).

	%% 在启动函数中创建线程并调用loop函数
	start() ->
		spawn(fun() ->loop([]) end).

	%% 在远程过程调用中向指定的进程发送消息, 为区别不同的发送者调用self()带上自己的进程号
	rpc(Pid, Request) ->
		Pid ! {self(), Request},
		receive
			{Pid, Response} ->Response
		end.

	%% 在loop函数中处理不同的消息 
	loop(X) ->
		receive
			Any ->
				io:format("Received:~p~n", [Any]),
				loop(X)
		end.
	8.9 尾递归技术
	使用求阶乘来说明尾递归更容易理解一些：
	-module(fact).
	-compile(export_all).

	factorial(N) ->
		factorial(1, N).
	%% 求阶乘的函数
	%% Res用于记录当前结果, N用于记录乘数的变化
	%% 如计算factorial(5), 展开过程为
	%% (1, 5) -> (1*5, 4) -> (5*4, 3) -> (20*3, 2) -> (60*2, 1) -> (120, 0) -> 120
	%% 始终只需要两个变量来记录状态, 相比于普通的递归, 极为节省栈空间 
	factorial(Res, N) ->
		case N =:= 0 of
			true  ->Res;
			false ->factorial(Res*N, N-1)
		end.

	8.10 使用MFA启动进程
	MFA方式即通过指定模块、函数、参数的方式来启动进程
	spawn(Mod, FuncName, Args)
	相比于普通的方式, 其可以使程序在出于运行状态时仍然可以使用新版本代码进行升级。
	8.11 习题
	测试注册函数
	%% 在main函数中连续调用两次start函数, 模拟并行
	main(AnAtom, Fun) ->
		start(AnAtom, Fun),
		start(AnAtom, Fun).

	%% 根据Fun创建进程, 注册之前首先调用whereis函数查看是否已注册 
	start(AnAtom, Fun) ->
		Pid = spawn(Fun),
		Temp = whereis(AnAtom),
		case undefined =:= Temp of
			true  ->register(AnAtom, Pid);
			false ->io:format("~p had registered and Pid is ~p ~n", [AnAtom, Temp])
		end.
	调用结果：
	1> test1:main(test1, fun() -> io:format("just for test register") end). 
	test1 had registered and Pid is <0.36.0> 
	just for test register
	just for test register
	测试发送消息
	-module(sendm).
	-compile(export_all).

	%% 创建N个进程并销毁, 查看其运行时间
	sendmessage(N, M) ->
		%% 用于统计代码执行所耗的CPU时间和真实时间
		statistics(runtime),
		statistics(wall_clock),
		%% 创建N个进程
		L = for(1, N, fun() ->spawn(fun() ->wait() end) end),
		%% 给每个进程发送M条消息
		for(1, M, fun() ->lists:foreach(fun(Pid) ->Pid ! test end, L) end),
		%% 销毁每个进程
		lists:foreach(fun(Pid) ->Pid ! die end, L),
		{_, Time1} = statistics(runtime),
		{_, Time2} = statistics(wall_clock),
		U1 = Time1 * 1000,
		U2 = Time2 * 1000,
		io:format("Process send message time=~p (~p) microseconds~n",[U1, U2]).
	wait() ->
		receive 
			test ->wait();
			die  ->void
		end.
	for(N, N, F) ->[F()];
	for(I, N, F) ->[F() | for(I+1, N, F)].
	调用结果：
	1> c(sendm).                      
	{ok,sendm}
	2> sendm:sendmessage(1000, 10000).
	Process send message time=32760000 (56635000) microseconds
	ok



# 🚩 ETS 存储
- [30 分钟学 Erlang (二)](https://www.jianshu.com/p/5b7e73576dcb)
- [Bears, ETS, Beets](https://learnyousomeerlang.com/ets)

ETS - Erlang Term Storage 是设计来存放大量的 Erlang 数据的。跟 ETS 打交道不用消息格式转换，可直接存放 Erlang 数据格式，Erlang 各种数据格式的统称叫做 erlang terms。

ETS 非常快，访问时间是常数级的，自动帮你解决了多进程访问的各种竞态条件问题，让我们在 Erlang 中做并发编程一身轻松。ETS 是非常优秀的缓存系统，是我们开发中不可或缺的利器之一。这比起用某种流行语言来说，舒服太多。

ETS 只将数据存储在内存里，如果想保存到磁盘，或者要在多个 Erlang Node 之间共享数据，OTP 基于 ETS 和 `DETS` 实现了 `Mnesia`。

持久化存储的 DETS 就是 ETS 的磁盘版，它们的 API 几乎相同，但有些关键差异：

- 没有 ordered_set 表，DETS 磁盘文件大小限制 2GB，有些函数也没有内存版的快和安全，如 `prev/1`, `next/1`。

- 启停表变更，使用 `dets:open_file/2` 创建表，使用 `dets:close/1` 关闭表，使用 `dets:open_file/1` 重新打开。

注意，DETS 是基于磁盘的存储，RAM 和 Disk 的性能道别很大，Mnesia 作为一个持久化的实现，已经处理好了事务、和分布。

Mnesia 是一个分布式数据库管理系统 DBMS，适合于电信和其它需要持续运行和具备软实时特性的 Erlang 应用，是构建电信应用的控制系统平台开放式电信平台 OTP 的一部分。

Mnesia 只适合用来做缓存，在多个 Node 之间共享少量数据，非常快速。但是并不适合当做数据库存储大量的数据，因为 mnesia 在启动时会加载所有数据到内存里，导致启动缓慢、新节点加入缓慢。并且 Mnesia 是强一致性的数据库，其本身并不处理由于集群脑裂导致的不一致性，这可能不太符合你的预期。

ETS 支持几种数据类型：

- `set` 是普通的 key - value 存储类型，一个 ETS table 里，两个数据的 key 不能相同，旧的值会被新的覆盖。
- `ordered_set` 有序的 set 表。
- `bag` 允许多个 key 相同的数据的存在，但 key, value 都完全相同的数据只能留一个。
- `duplicate_bag` 允许多个 key, value 完全相同的数据的存在。

我们来试试 set 类型的 table，这也是最常用的类型。我们创建一个命名表，叫 users, 然后插入两条数据：

	1> ets:new(users, [set, named_table]).
	users
	2> ets:info(users).   %% 注意默认的权限是 protected
	[{read_concurrency,false},
	 {write_concurrency,false},
	 {compressed,false},
	 {memory,304},
	 {owner,<0.57.0>},
	 {heir,none},
	 {name,users},
	 {size,0},
	 {node,nonode@nohost},
	 {named_table,true},
	 {type,set},
	 {keypos,1},
	 {protection,protected}]
	3> ets:insert(users, {1, <<"Shawn">>, 27}).
	true
	4> ets:insert(users, {2, <<"Scarlett">>, 25}).
	true
	5> ets:lookup(users, 1).
	[{1,<<"Shawn">>,27}]
	6> ets:lookup(users, 2).
	[{2,<<"Scarlett">>,25}]
	7> ets:info(users).
	[{read_concurrency,false},
	 {write_concurrency,false},
	 {compressed,false},
	 {memory,332},
	 {owner,<0.57.0>},
	 {heir,none},
	 {name,users},
	 {size,2},
	 {node,nonode@nohost},
	 {named_table,true},
	 {type,set},
	 {keypos,1},
	 {protection,protected}]
	8>

注意上边的示例里：

创建 ETS table 时给了两个 Options 参数 `[set, named_table]` 指定创建 set 类型的表，named_table 是创建命名表，命名为 users，后面可以用这个表名来引用。

插入数据 `{1, <<"Shawn">>, 27}` 和 `{2, <<"Scarlett">>, 25}` 时，两个 tuple 的第一项就是默认的 key，tuple 里其他项都是 values。如果你想用其他的项作为 key，可以在 ets:new 的时候，指定 `{keypos, Pos}` 参数，设置 key 在 tuple 中的位置。

需要注意的是：

- ETS 表里的任何数据都不参加 GC；
- ETS 表有自己的 owner 进程，默认情况下，创建表的那个进程就是 ETS table 的 owner。如果 owner 进程挂了，ETS 表也就被释放了。我们上边的例子里，erlang shell 进程就是 user table 的 owner。

ETS 表也是有访问权限的，默认是 protected:

- `public` 任何人可以读写这张表。
- `protected` owner 可以读写，但其他进程只能读。
- `private` 只有 owner 可以读写。别的进程无法访问。

由于 ETS 表非常高效，一般情况下我们都直接使用 public，然后设置 `{read_concurrency, true}` 或 `{write_concurrency,true}` 选项来提高并发读或写的效率，在写一个管理模块来直接访问 ets 表，让什么封装什么设计模式都去 shi。

一些方法使用示例：

	1> ets:new(ingredients, [set, named_table]).
	ingredients
	2> ets:insert(ingredients, {bacon, great}).
	true
	3> ets:lookup(ingredients, bacon).
	[{bacon,great}]
	4> ets:insert(ingredients, [{bacon, awesome}, {cabbage, alright}]).
	true
	5> ets:lookup(ingredients, bacon).
	[{bacon,awesome}]
	6> ets:lookup(ingredients, cabbage).
	[{cabbage,alright}]
	7> ets:delete(ingredients, cabbage).
	true
	8> ets:lookup(ingredients, cabbage).
	[]

	9> TabId = ets:new(ingredients, [bag]).
	16401
	10> ets:insert(TabId, {bacon, delicious}).
	true
	11> ets:insert(TabId, {bacon, fat}).
	true
	12> ets:insert(TabId, {bacon, fat}).
	true
	13> ets:lookup(TabId, bacon).
	[{bacon,delicious},{bacon,fat}]

	14> ets:new(ingredients, [ordered_set, named_table]).
	ingredients
	15> ets:insert(ingredients, [{ketchup, "not much"}, {mustard, "a lot"}, {cheese, "yes", "goat"}, {patty, "moose"}, {onions, "a lot", "caramelized"}]).
	true
	16> Res1 = ets:first(ingredients).
	cheese
	17> Res2 = ets:next(ingredients, Res1).
	ketchup
	18> Res3 = ets:next(ingredients, Res2).
	mustard
	19> ets:last(ingredients).
	patty
	20> ets:prev(ingredients, ets:last(ingredients)).
	onions
	21> ets:next(ingredients, ets:last(ingredients)).
	'$end_of_table'
	22> ets:prev(ingredients, ets:first(ingredients)).
	'$end_of_table'

注意，前缀 `$` 的原子类型，OTP 用它们传递信息：

- $end_of_table 表示已经到表尾端





# 🚩 OTP - Supervisor Behaviour
- [30 分钟学 Erlang (二)](https://www.jianshu.com/p/5b7e73576dcb)
- [OTP design principles](http://erlang.org/doc/design_principles/des_princ.html)
- [Supervisor Behaviour](http://erlang.org/doc/design_principles/sup_princ.html)
- [supervisor module](http://erlang.org/doc/man/supervisor.html)
- [What is OTP](https://learnyousomeerlang.com/what-is-otp#its-the-open-telecom-platform)

Erlang/OTP 工程的基本框架，即 Supervision Tree 架构：

- 项目可以包含很多个 `Application`，它包含了本应用的所有代码，可以随时加载和关闭；
- Application 一般会包含一个顶层 `Supervisor` 进程用来监控 `Worker`，这使得设计和编程容错软件成为可能；
- 顶层 Supervisor 下面管理了许多 sub Supervisor 和 Worker 进程。
- 业务逻辑都在 Worker 里面，Supervisor 里可以定制重启策略，如果返现某个 Worker 挂掉了，可以按照既定的策略重启它。

Supervisor 负责启动，停止和监视其子进程，基本思想是通过在必要时重新启动它们来保持子进程的活动。

在 Erlang/OTP 架构中，一切进程都是轻量级的，都可以被监控 monitor，有 Supervisor 专门做监控。你可以方便的用一个 Supervisor 进程去管理子进程，它会根据你设定的策略，来处理意外挂掉的子进程。这种情况的问题的是，错误处理稍微做不好就会挂，Restart Strategy 重启策略有：

- one_for_one：只重启挂掉的子进程
- one_for_all：有一个子进程挂了，重启所有子进程
- rest_for_one：一个子进行挂掉，该子进程和所有在其之后创建的子进程都会重启。

由列表指定 child specifications 指定哪些子进程受监视，子进程按此列表指定的顺序启动，并以相反的顺序终止。

在监督树中，许多流程具有相似的结构，它们遵循类似的模式，即抽象为 Behaviour 模型。Supervisor 的结构相似，他们之间唯一的区别是他们监督哪个子进程。许多 Worker 都是 C/S 服务器对客户端关系模式中的服务器角色，Worker 对应各种 Behaviour，包括有限状态机器 gen_statem、错误事件记录器 gen_event 等事件处理程序，还有 gen_server 通用服务器行为。

Erlang/OTP 四大 Behaviour 中，除 Supervisor 外，都在监督树充当 Worker 角色：

- `gen_server` Generic server behaviour，实现 C/S 架构中的服务端；
- `gen_statem` Generic state machine behaviour，实现一个有限状态机 FSM - Finite State Machine；
- `gen_event`  Generic event handling behavior，实现事件处理功能；
- `supervisor` Generic supervisor behavior，实现监督者，它以监督树的方式存在；

Erlang/OTP 带有许多组件，每个组件都实现了一些特定的功能。在 Erlang/OTP 术语中这些组件被称为应用程序 Application。例子有 Mnesia，它具有编程数据库服务所需的所有功能，以及 Debugger，用于调试 Erlang 程序。基于 Erlang/OTP 的最小系统由以下两个应用程序组成：

- Kernel - 运行 Erlang 所必需的核心功能；
- STDLIB -  Erlang 标准库；

应用程序概念同时适用于程序结构和目录结构，即进程 Proces 和模块 Module。最简单的应用程序没有任何进程，但由一组功能模块组成，这样的应用程序被称为库应用，库应用程序的一个示例是 STDLIB。具有流程的应用程序最容易实现为使用标准行为的监督树。


Supervisor 启动服务器的 gen_server Behaviour 回调模块可能如下所示：

	-module(ch_sup).
	-behaviour(supervisor).

	-export([start_link/0]).
	-export([init/1]).

	start_link() ->
		supervisor:start_link(ch_sup, []).

	init(_Args) ->
		SupFlags = #{strategy => one_for_one, intensity => 1, period => 5},
		ChildSpecs = [#{id => ch3,
						start => {ch3, start_link, []},
						restart => permanent,
						shutdown => brutal_kill,
						type => worker,
						modules => [cg3]}],
		{ok, {SupFlags, ChildSpecs}}.

参数解析：

- `SupFlags` 返回值代表 supervisor flags。

		sup_flags() = #{strategy => strategy(),         % optional
						intensity => non_neg_integer(), % optional
						period => pos_integer()}        % optional
			strategy() =  one_for_all
						| one_for_one
						| rest_for_one
						| simple_one_for_one

	- strategy 指定 restart strategy。
	- intensity 和 period 指定最大重启强度 maximum restart intensity。

- `ChildSpecs` 返回值是一个列表 child specifications。

		child_spec() = #{id => child_id(),      % mandatory
						start => mfargs(),      % mandatory
						restart => restart(),   % optional
						shutdown => shutdown(), % optional
						type => worker(),       % optional
						modules => modules()}   % optional
			child_id() = term()
			mfargs() = {M :: module(), F :: atom(), A :: [term()]}
			modules() = [module()] | dynamic
			restart() = permanent | transient | temporary
			shutdown() = brutal_kill | timeout()
			worker() = worker | supervisor

最大重启强度设置是可选的，`intensity` 和 `period` 分别默认值为 1 和 5，即默认强制设置下最多每 5s 重启 1 次。重启机制的目的是为了防止出于同样的原因一个进程重复死亡的情况，只能重新启动。

如果强度系数为 MaxR，在最后 MaxT 秒内发生了多次重新启动，监督程序会终止所有子进程，然后自行终止。在这种情况下，Supervisor 本身的终止原因将是 shutdown。当 Supervisor 终止时，下一个上级主管会采取一些行动。它要么重新启动终止的监督员，要么自行终止。

参数 `start` 指定了子进程的启动函数参数，这里指定 module-function-arguments 元组，用于 apply(M, F, A) 执行以下任意函数启动子进程：

- supervisor:start_link
- gen_server:start_link
- gen_statem:start_link
- gen_event:start_link


## 🍀 Start a Supervisor

在前面的示例代码中，通过调用模块暴露的 `ch_sup:start_link()` 命令执行 Supervisor 启动函数：

	start_link() ->
		supervisor:start_link(ch_sup, []).

调用 `supervisor:start_link/2` 函数，它产生并链接到一个新进程，产生一个 Supervisor。

- 第一个参数 `ch_sup` 是，回调模块的名称，即 init 回调函数所在的模块。
- 第二个参数，`[]` 是一个传递给 init 回调函数的 term，在这里不需要任何输入的数据，忽略它。

在这种情况下，Supervisor 没有注册。相反，它的pid必须使用，名称可以通过调用以下两种方式注册： 

- supervisor:start_link({local, Name}, Module, Args)
- supervisor:start_link({global, Name}, Module, Args)。

新的 Supervisor 进程调用回调函数 `ch_sup:init([])`，它应返回 `{ok, {SupFlags, ChildSpecs}}`：

	init(_Args) ->
		SupFlags = #{},
		ChildSpecs = [#{id => ch3,
					  start => {ch3, start_link, []},
					  shutdown => brutal_kill}],
		{ok, {SupFlags, ChildSpecs}}.

然后，Supervisor 根据启动规范中的子规格启动其所有子进程，在这种情况下，有一个 ID 为 ch3 的子进程。

`supervisor:start_link` 是同步的，直到所有子进程启动后才会返回。


## 🍀 Adding a Child Process

除了静态监督树之外，还可以通过以下调用动态添加子进程到现有 Supervisor：

	supervisor:start_child(Sup, ChildSpec)

Sup 是 Supervisor 进程的 pid 或名称，ChildSpec 是一个 child specification。

函数 `start_child/2` 添加的子进程与其他子进程的行为方式相同，但有一个重要的例外：如果 Supervisor 进程挂了并重新创建，那么动态添加到主管的所有子进程都会丢失。


## 🍀 Stopping a Child Process

任何子进程，静态或动态，都可以根据 shutdown specification 关闭规范终止进程：

	supervisor:terminate_child(Sup, Id)

通过以下调用删除停止的子进程的 child specification：

	supervisor:delete_child(Sup, Id)

Sup 是 Supervisor 进和的 pid 或名称。Id 是 child specification 中值相关联的值。

与动态添加的子进程一样，如果管理程序本身重新启动，则动态删除静态子进程的效果将丢失。


## 🍀 Simplified one_for_one Supervisors

具有简化 `one_for_one` 重启策略 `simple_one_for_one` 的 Supervisor 进程，其所有子进程都是同一进程动态添加实例。

以下是 simple_one_for_one 回调模块的示例：

	-module(simple_sup).
	-behaviour(supervisor).

	-export([start_link/0]).
	-export([init/1]).

	start_link() ->
		supervisor:start_link(simple_sup, []).

	init(_Args) ->
		SupFlags = #{strategy => simple_one_for_one,
					 intensity => 0,
					 period => 1},
		ChildSpecs = [#{id => call,
						start => {call, start_link, []},
						shutdown => brutal_kill}],
		{ok, {SupFlags, ChildSpecs}}.

启动这个 Supervisor 并不会启动子进程，而是需要调用以下函数动态添加：

	supervisor:start_child(Sup, List)

Sup 是 Supervisor 进和的 pid 或名称。List 是可选的，它会添加到 child specification 的参数列表中。如果指定 start 参数指定 `{M, F, A}`，那么子进程会通过 `apply(M, F, A++List)` 产生。

如：

	supervisor:start_child(Pid, [id1])

结果就是调用 apply(call, start_link, []++[id1]) 产生子进程，或者如下执行：

	call:start_link(id1)

在 simple_one_for_one 重启策略的 supervisor 下的子进程，要通过以下函数终止：

	supervisor:terminate_child(Sup, Pid)

因为 simple_one_for_one supervisor 可以包含许多子进程，它需要异步关闭，所以子进程的退出清理工作是并发进行的，发生的顺序不可知。


因为 Supervisor 是 Supervision tree 框架上的一分部，它会由它的父级自动关闭。当要 Supervisor 求关闭时，先关闭子进程，并以启动子进程的相反顺序关闭，然后结束自己。




# 🚩 OTP - gen_server Behaviour
- [30 分钟学 Erlang (二)](https://www.jianshu.com/p/5b7e73576dcb)
- [OTP design principles](http://erlang.org/doc/design_principles/des_princ.html)
- [Erlang Generic server behavior](http://erlang.org/doc/man/gen_server.html)
- [gen_server Behaviour](http://erlang.org/doc/design_principles/gen_server_concepts.html)
- [gen_statem Behaviour](http://erlang.org/doc/design_principles/statem.html)
- [gen_event Behaviour](http://erlang.org/doc/design_principles/events.html)
- [Supervisor Behaviour](http://erlang.org/doc/design_principles/sup_princ.html)
- [What is OTP](https://learnyousomeerlang.com/what-is-otp#its-the-open-telecom-platform)

OTP 已经失去了字面意思，基本上指的就是 Erlang 生态环境的官方部分。Erlang 世界的组成是这样的：

- Erlang 以及 Elixir 等语言。
- 工具和函数库，包括 erlang runtime，kernel，stdlib(像 lists 这种的官方库), sasl, 还有像 ETS，dbg 之类的很多。
- 系统设计原则, 包括本章要讲的一众 Behaviors。是一堆应用于并发世界的设计模式，他们包含了解决通用问题的通用代码。
- 开源社区生态环境，包括各种开源软件和社区。

OTP 指的是前三个，Elixir 的话还不大算。

Erlang 的逻辑是，架构的设计应该由有经验的人负责，由专家做好基础代码框架，解决好最困难的问题。而使用者只需要写自己的逻辑代码。这就是 OTP behaviors，他们已经在通信、互联网领域，经历了几十年的战火考验。

Erlang/OTP 工程的基本框架，即 Supervision Tree 架构：

- 项目可以包含很多个 `Application`，它包含了本应用的所有代码，可以随时加载和关闭；
- Application 一般会包含一个顶层 `Supervisor` 进程用来监控 `worker`；
- 顶层 Supervisor 下面管理了许多 sub Supervisor 和 worker 进程。
- 业务逻辑都在 worker 里面，supervisor 里可以定制重启策略，如果返现某个 worker 挂掉了，可以按照既定的策略重启它。

首先清楚 gen_server 提供 C/S 架构中的服务端的实现，即定义了自己一套规范的服务器框架，它是 Erlang/OTP 四大 Behaviour 的其中之一：

- `gen_server` Behaviour，实现 C/S 架构中的服务端；
- `gen_statem` Behaviour，实现一个有限状态机 FSM - Finite State Machine；
- `gen_event` Behaviour，实现事件处理功能；
- `Supervisor` Behaviour，实现监督者，它以监督树的方式存在；

使用 Erlang 标准 gen_server 模板，可以简单快速建立 server 服务，它具有良好的接口定义，封装了进程初始化，结束，同步，异步等接口，所以在开发过程被普遍使用。是开发中最常用的一种模式，使用 gen_server 时，需在模块中定义 behaviour 属性为 gen_server，并实现六个回调接口函数，参考 gen_server_demo 模块的示范：

	-module(gen_server_demo).

	-behaviour(gen_server).

	-record(state, { user_data }).

	%% export gen_server callbacks
	-export([init/1,
			 handle_call/3,
			 handle_cast/2,
			 handle_info/2,
			 terminate/2,
			 code_change/3]).

	%% API functions
	-export([start_link/2]).

	%%%===================================================================
	%%% API functions
	%%%===================================================================
	start_link(UserData) ->
	  {ok, ServerID}  = gen_server:start_link(?MODULE, [UserData], []),
	  ServerID.

	%%%===================================================================
	%%% gen_server callbacks
	%%%===================================================================
	init([UserData]) ->
		{ok, #state{user_data=UserData}}.

	handle_call(_Request, _From, State) ->
		Reply = ok,
		{reply, Reply, State}.

	handle_info(_Info, State) ->
		{noreply, State}.

	handle_cast(_Msg, State) ->
		{noreply, State}.

	terminate(_Reason, State) ->
		ok.

	code_change(_OldVsn, State, _Extra) ->
		{ok, State}.

- `Module:init/1` 在进程初始化时调用，其参数为列表，它相当于类的构造函数。调用 `gen_server:start` 或 `gen_server:start_link` 时会自动回调 `Module:init/1`。执行成功返回 `{ok,State}`，State 为进程状态，记录进程的内部信息。

- `Module:terminate/2` 函数在进程结束时自动回调，用户可以做相关收尾工作，它相当于类中的析构函数。若 gen_server 是某个监督树的一部分，则无需停止函数，它的督程会自动终止它。如果在终止之前需要进行一些清理工作，那么关闭策略必须是一个超时值，同时 gen_server 必须在 init 函数中设置为捕获退出信号。当 gen_server 被要求关闭时，它就会调用回调函数 terminate(shutdown, State)。

- `Module:handle_cast/2` 接收异步调用的 `gen_server:cast/2` 发过来的广播消息，它不需等待模块的处理结果。 

- `Module:handle_call/3` 接收同步调用的 `gen_server:call/2` 发送来的消息，它需等待模块返回结果。

- `Module:handle_info/2` 处理进程收到的其他消息，如直接给进程发送的消息 Pid ! Msg。

- `Module:code_change/3` 正如其名，此函数用来进行代码版本替换。是 server 热部署或代码升级时做回调进行进程状态修改。参数 `_OldVsn` 是旧版本，`State` 是 gen_server 的内部状态，`_Extra` 原封不动的传递过来的更新指令。 如果更新成功，返回 `{ok,State}`，如果失败返回 `{error,Reason}`，并回滚到旧版本。

通常，使用 gen_server 框架，还需要增加模块的对外调用函数 API，如暴露 gen_server:start_link。

看官方文档演示的接口调用流程：

	gen_server module            Callback module
	-----------------            ---------------
	gen_server:start
	gen_server:start_monitor
	gen_server:start_link -----> Module:init/1

	gen_server:stop       -----> Module:terminate/2

	gen_server:call
	gen_server:send_request
	gen_server:multi_call -----> Module:handle_call/3

	gen_server:cast
	gen_server:abcast     -----> Module:handle_cast/2
	-                     -----> Module:handle_info/2
	-                     -----> Module:handle_continue/2
	-                     -----> Module:terminate/2
	-                     -----> Module:code_change/3

gen_server 要解决的问题，就是我们上面那个 msg_cache 面临的问题：怎样做一个服务来响应用户的请求。

我们之前写的代码很短，可以工作，但是很多东西都没有考虑。比如请求者如果同时收到来自服务端的两个 Response 的话，不知道是对应哪个请求的：

	%% 服务端：
	{get_name, From}->
	  From ! {ok, Name},
	  loop(State);
	{get_length, From}->
	  From ! {ok, Len},
	  loop(State);

	%% 客户端：
	ServerPID ! {get_length, self()},
	ServerPID ! {get_length, self()},  
	receive
	  {ok, Len} ->  %% 你知道这次匹配到的消息，是上面哪次调用的回复吗？
		 success;
	  _ ->
		 failed
	end.

上面代码里连续调用了两次 {get_length}, 但是由于发送消息是异步的，消息通过网络回来，你并不能确定第一次收到的回复就是第一次调用产生的。

这个问题可以加一个随机生成的 RequestID 的字段来解决，客户端发送请求消息的时候带 RequestID 过去，服务端返回的时候再传回来。客户端通过匹配 RequestID，就能知道当前的回复是对应的哪个请求。

但这种需求其实是通用的，你现在写 msg_cache 用得到，改天写其他代码也一样用得到。另外我们也没有过多考虑异常的情况：如果程序崩溃了怎么办？发送消息怎么知道对方是不是还活着？

诸如此类的问题应该由专家来解决，所以我们有了 gen_server 模板：

	-module(gen_server_demo).
	-behaviour(gen_server).

	%% API functions
	-export([start_link/0]).

	%% gen_server callbacks
	-export([init/1,
			 handle_call/3,
			 handle_cast/2,
			 handle_info/2,
			 terminate/2,
			 code_change/3]).

	-record(state, {}).

	%%%% %%%% %%%% %%%% %%%% 
	%%%% 这是给客户端调用的接口部分
	%%%% %%%% %%%% %%%% %%%% 
	%% 启动一个服务，后台会启动一个 erlang process, 并进入 loop 函数, 回想一下我们实现 msg_cache 时写的那个 loop/1.
	%% 但是这个 loop 函数属于通用部分的代码，是由 OTP 官方实现的，所以代码不在这里，在 OTP 代码的 lib/stdlib/src/gen_server.erl 里。
	start_link() ->
		%% gen_server:start_link 启动 process, 然后将 process 注册在当前
		%% node 上，注册名字就是当前 Module 名：gen_server_demo
		gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

	%%%% %%%% %%%% %%%% %%%% 
	%%%% 这是 gen_server 发生某事件时的回调函数部分
	%%%% %%%% %%%% %%%% %%%%

	%% gen_server:start_link 被调用，服务启动时，回调 init/1
	init([]) ->
		{ok, #state{}}.

	%% gen_server:call 被调用。gen_server:call 是“同步”调用，调用方可以设置一个超时时间。
	%% 返回值里的 Reply 是返回给调用者的内容。
	handle_call(_Request, _From, State) ->
		Reply = ok,
		{reply, Reply, State}.

	%% gen_server:cast 被调用。gen_server:cast 是“异步”调用。
	%% 调用者一般是想发一个消息给我们的 gen_server，然后继续做自己的事情，他不想收到来自 gen_server 的回复。
	handle_cast(_Msg, State) ->
		{noreply, State}.

	%% gen_server 进程收到一个普通 erlang 消息：一个不是通过 gen_server:call 和 gen_server:cast 发来的消息。
	handle_info(_Info, State) ->
		{noreply, State}.

	%% 上面的三个函数 handle_call, handle_cast, handle_info
	%%   都可以返回一个 {stop, Reason, State}，这样的话 gen_server 会退出。
	%%   但退出之前，可能会回调 terminate(_Reason, _State)。


	%% gen_server 将要退出时，回调 terminate/2.
	%% 注意
	%% 1) 要想 terminate 在 gen_server 退出前被回调，gen_server 必须捕获退出信号：
	%%    需要在 init 回调里，加这么一行：process_flag(trap_exit, true).
	%% 2) 有几个特定的 Reason 被认为是正常退出：normal, shutdown, or {shutdown,Term}，
	%%    其他的 Reason，sasl 是会报错打日志的。
	terminate(_Reason, _State) ->
		ok.

	code_change(_OldVsn, State, _Extra) ->
		{ok, State}.

gen_server 真正的进程代码在 OTP 库里，运行 start_link()，gen_server 就在后台跑起来了。你需要实现的只是这个模板里的各个回调函数，将你的业务逻辑放到这些回调里。

仔细看一下上面的 gen_server 模板和注释，确保你能完全理解。

我不想重新实现之前的 msg_cache，一点都不酷。我们重新写个其他的，让你对 Erlang 程序的基本设计理念有更深的印象。

我们要实现一个多用户聊天的程序：

- 用户能够查询在线的其他用户。
- 用户之间能够聊天。
- 要容易扩展，因为后面我们的 Client 会通过 TCP、WebSocket 等连接上来，不会是 Erlang 写的 Client。
- 要容易伸缩，因为我们业务发展很快，用户量会越来越大，我们希望程序能很容易的部署在多台服务器上。

先来设计我们 chat-server 程序的架构：

									+--[Process:ChatServer] <===> [Client]
									|··· send or receive msgs
	[DB] <===> [Module:Route] <===> +--[Process:ChatServer] <===> [Client]
									|··· send or receive msgs
									+--[Process:ChatServer] <===> [Client]

- 每个 client 连接上来，都会启动一个新的 Process，叫做 ChatServer；
- ChatServer 负责维护这个 Client 的 TCP 连接；
- Route 模块它提供了数据库的管理，数据库里维护了从 User 到其 ChatServer 的 PID 的映射关系。

注意我们的设计思想：

- 为每一个连接上来的请求启动一个 ChatServer 进程，不要担心进程个数，百万也没问题。
- 两个用户之间的消息传递，体现在服务端就是两个 ChatServer 之间的 Erlang 消息传递。
- Route 是模块不是进程，每一个 ChatServer 调用 Route 里的代码的时候，执行过程其实是在每个 ChatServer 进程内部的。这样我们就避免了集中向一个进程发送消息带来的瓶颈。我们把这种瓶颈的处理留给了 ETS 来解决。
- 如何伸缩？ChatServer 不在同一个服务器上没什么关系。`ChatServerPID !{send, Msg}` 会将消息发送到 ChatServerPID，即使它在远端的服务器上。分布式部署的时候，这行代码根本不用改，你要做的仅仅是添加一个新的 Erlang Node。分布式 Erlang 后面还要讲。
- 如何扩展？ETS 使用 Route Module 管理，为的就是当以后换用其他的缓存数据库的时候简单一些。我们设想后面为了做分布式集群，要用 mnesia 替代 ETS，只需要写一个新的 Route Module，内部改用 mnesia 存储，然后替换线上已经加载的老的 Route Module。线上系统都不用停止，客户端的连接一个都不会断！

你现在能否体会到 Erlang 的实用主义呢？完全没废话，就是解决问题！

Client 部分我们现在不做，让前端的同学帮我们实现。但假设我们的前端程序员还没到岗，所以我们可以先放着 WebSocket 部分后面再做。但有两个过程必须现在实现：

- 当 Client 登录时，我们需要使用 Route 注册 user 所在的 ChatServer 的 PID。
- 当 Client 发消息时，我们需要使用 Route 查找对方的 ChatServer 的 PID。

首先我们来定义我们的消息协议。我们的消息体内包含几部分，发送者 ID，接收者 ID，以及消息内容：

	-record(msg, {
	  from_userid,
	  to_userid,
	  payload
	}).

接下来让我们来实现 Route 模块，实现数据库创建，注册，查找与注销功能：

	-module(route).
	-export([ensure_db/0,
			 lookup_server/1,
			 register_server/2,
			 unregister_server/1]).

	ensure_db() ->
	  case ets:info(servers) of
		undefined ->
		  %% 为了演示方便，我们启动一个临时进程来创建 ETS 表，
		  %% 如果直接在 erlang shell 里创建ETS的话，出错时 shell 的崩溃连带着我们的ETS也丢了。
		  %% 当然线上系统不会这么做。
		  spawn(fun() -> ets:new(servers, [named_table, public]), receive after infinity->ok end end);
		_ -> ok
	  end.

	lookup_server(UserID) ->
	  case ets:lookup(servers, UserID) of
		[{UserID, ServerID}] -> {ok, ServerID};
		_ -> {error, no_server}
	  end.

	register_server(UserID, ServerID) ->
	  ets:insert(servers, {UserID, ServerID}).

	unregister_server(UserID) ->
	  ets:delete(servers, UserID).

接下来实现我们的 ChatServer:

	-module(chat_server).
	-behaviour(gen_server).
	%% state 保存用户的 userid，以及 client 端连上来的 socket.
	-record(state, {
	  userid,
	  socket
	}).

	%% 后面当一个新连接连接到服务器的时候，我们会调用 start_link 启动一个新的 ChatServer 为之服务。
	%% 注意这里使用的是 gen_server:start_link/3，没有注册进程名，我们直接使用 PID. 因为我们要启动很多个 ChatServer。
	start_link(UserID, Socket) ->
	  {ok, ServerID}  = gen_server:start_link(?MODULE, [UserID, Socket], []),
	  ServerID.

	%% 在 init 回调里注册用户的 ChatServer。
	%% 注意我们捕获了 exit signal, 以便程序退出的时候回调 terminate/2. 
	%% 我们在 terminate/2 里取消注册。
	init([UserID, Socket]) ->
		process_flag(trap_exit, true),
		route:register_server(UserID, self()),
		{ok, #state{userid=UserID, socket=Socket}}.

	%% 如果我们的 ChatServer 收到一条来自 Socket 的消息，它会收到一条类似 {tcp, Sock, Data} 的普通消息。
	%% 我们需要在 handle_info 里处理，转发给对方的 ChatServer。
	handle_info({tcp, #msg{to_userid = ToUserID, payload = Payload} = Msg}, State) ->
	  io:format("Chat Server(User: ~p) - received msg from tcp client, Msg: ~p~n",[State#state.userid, Msg]),
	  case route:lookup_server(ToUserID) of
		{error, Reason} ->
		  io:format("Chat Server(User: ~p) - cannot forward to Chat Server(User: ~p): ~p~n",
			  [State#state.userid, ToUserID, Reason]);
		{ok, TargetServerID} ->
		  io:format("Chat Server(User: ~p) - forward msg to Chat Server(User: ~p), Payload: ~p~n",
			[State#state.userid, ToUserID, Payload]),
		  ok = gen_server:call(TargetServerID, {send, Msg})
	  end,
	  {noreply, State};

	%% 我们的 ChatServer 收到一条来自对端 ChatServer 的转发请求
	handle_call({send, #msg{payload = Payload}}, _From, State) ->
	  io:format("Chat Server(User: ~p) - deliver msg to tcp client, Payload: ~p~n",
		[State#state.userid, Payload]),
	  send_to_client_via_tcp(State#state.socket, Payload),
	  {reply, ok, State};

	%% Socket 部分我们没有实现，暂时就简单打印一下
	send_to_client_via_tcp(_Socket, Payload) ->
	  %gen_tcp:send(_Socket, Payload),
	  io:format("Sent To Client: ~p~n",[Payload]).

完工了！我们测试一下：

	1> c(chat_server).
	{ok,chat_server}
	2> c(route).
	{ok,route}

	%% 现在模拟系统启动时，初始化 DB 的过程。
	%% 后续这个会在启动代码里写。
	3> route:ensure_db().
	<0.73.0>

	%% 现在我们模拟一个新的用户登录上来，启动新的 ChatServer 的过程。
	%% 后续这个过程当然是由 WebSocket 模块调用。
	4> ServerIDUser1 = chat_server:start_link(<<"user1">>, fake_socket).
	<0.75.0>
	5> ServerIDUser2 = chat_server:start_link(<<"user2">>, fake_socket).
	<0.77.0>

	%% 我们来做一个 #msg{} 消息体。
	%% 后续我们应该在收到 socket 上来的消息解析成功之后，打包一个 #msg{} 消息体。
	6> rr("chat_protocol.hrl").
	[msg]
	7> Msg = #msg{from_userid= <<"user1">>, to_userid = <<"user2">>, payload = <<"hello?">>}.
	#msg{from_userid = <<"user1">>,to_userid = <<"user2">>,
		 payload = <<"hello?">>}


	%% 模拟从 socket 收到消息的过程。
	8> ServerIDUser1 ! {tcp, Msg}.
	Chat Server(User: <<"user1">>) - received msg from tcp client, Msg: {msg,
																		 <<"user1">>,
																		 <<"user2">>,
																		 <<"hello?">>}
	{tcp,#msg{from_userid = <<"user1">>,to_userid = <<"user2">>,
			  payload = <<"hello?">>}}
	Chat Server(User: <<"user1">>) - forward msg to Chat Server(User: <<"user2">>), Payload: <<"hello?">>
	Chat Server(User: <<"user2">>) - deliver msg to tcp client, Payload: <<"hello?">>
	Sent To Client: <<"hello?">>
	9>

我们看到服务端的路由已经走通了，接下来只要写一个 web socket 模块，listen 在某个端口，当有连接请求时，像上面第 4、第 5 行一样调用 chat_server:start_link/2 就行了。当然 send_to_client_via_tcp 也要改为真正往 socket 发送消息。


# 🚩 OTP - gen_statem Behaviour
- [OTP design principles](http://erlang.org/doc/design_principles/des_princ.html)
- [Erlang Generic server behavior](http://erlang.org/doc/man/gen_server.html)
- [gen_server Behaviour](http://erlang.org/doc/design_principles/gen_server_concepts.html)
- [gen_statem Behaviour](http://erlang.org/doc/design_principles/statem.html)
- [gen_event Behaviour](http://erlang.org/doc/design_principles/events.html)
- [Supervisor Behaviour](http://erlang.org/doc/design_principles/sup_princ.html)
- [What is OTP](https://learnyousomeerlang.com/what-is-otp#its-the-open-telecom-platform)
- [gen_statem Module](http://erlang.org/doc/man/gen_fsm.html)
- [gen_statem Module](http://erlang.org/doc/man/gen_statem.html)
- [Rage Against The Finite-State Machines](https://learnyousomeerlang.com/finite-state-machines)

Erlang/OTP 四大 Behaviour：

- `gen_server` Behaviour，实现 C/S 架构中的服务端；
- `gen_statem` Behaviour，实现一个有限状态机 FSM - Finite State Machine，替换旧版的 gen_fsm 模块；
- `gen_event` Behaviour，实现事件处理功能；
- `Supervisor` Behaviour，实现监督者，它以监督树的方式存在；

FSM 简称状态机 State Machine，表示有限个状态以及在这些状态之间进行转换 Transation
和动作 Action 等行为的数学模型。状态机的应用无处不在，比如敌人的AI，角色的状态，或是现实生活中我们坐地铁
的验票闸门 turnstile。

有限状态机可以用下面这个公式来表达：

	State(S) x Event(E) -> Actions(A), State(S')

表示的就是在 S 状态时如果有事件 E 发生，那么执行动作 A 后把状态调整到 S’。

对于简单的有限状态机，通过 switch case 就可以实现，有些很简单的状态控制
确实可以如此，这样可以简少不必要的代码量。

当状态机要控制的逻辑比较复杂时，潜在问题包括：

- 不易于维护和扩展，任何修改都会影响到其它的状态；
- 容易出错，代码都在一起，可能会改出新的问题；
- 耦合性太高，如果多人开发这个功能，就得频率解决冲突的问题；

Erlang/OTP 的有限状态机目的就是为了降低实现状态机中可能出现的问题，提供一个事件驱动的状态机 Event-Driven State Machines。

参考官方文档演示的 gen_statem 回调流程：

	gen_statem module            Callback module
	-----------------            ---------------
	gen_statem:start
	gen_statem:start_monitor
	gen_statem:start_link -----> Module:init/1

	Server start or code change
						  -----> Module:callback_mode/0

	gen_statem:stop       -----> Module:terminate/3

	gen_statem:call
	gen_statem:cast
	gen_statem:send_request
	erlang:send
	erlang:'!'            -----> Module:StateName/3
								 Module:handle_event/4

	-                     -----> Module:terminate/3

	-                     -----> Module:code_change/4

gen_statem 拥有 gen_fsm 所有功能，并增加以下内容：

- Co-located state code
- Arbitrary term state
- Event postponing
- Self-generated events
- State time-out
- Multiple generic named time-outs
- Absolute time-out time
- Automatic state enter calls
- Reply from other state than the request, sys traceable
- Multiple sys traceable replies
- Changing the callback module

新加两种回调模式支持，可以在模块定义的 callback_mode 函数中返回给 gen_statem：

- 一种是 state_functions，和 gen_fsm 相似的有限状态机 Finite State Machine，这种方式要求状态是原子状态，并且用作回调的名称。每个事件对应每种状态一个回调函数处理：

		Module:StateName(enter, OldState, Data) -> StateEnterResult(StateName) 
		Module:StateName(EventType, EventContent, Data) -> StateFunctionResult

- 另一种是 handle_event_function，允许状态为任何 term 类型，使用一个回调函数处理事件，那就是类似无限状态。

		Module:handle_event(enter, OldState, State, Data) -> StateEnterResult(State) 
		Module:handle_event(EventType, EventContent, State, Data) -> HandleEventResult

StateName 就是自定义的一些状态的原子，任意的原子。比如 hello, hi, open, closed, withdraw, topup 等等


参考官方文档的 pushbutton 例子：

	-module(pushbutton).
	-behaviour(gen_statem).

	-export([start/0,push/0,get_count/0,stop/0]).
	-export([terminate/3,code_change/4,init/1,callback_mode/0]).
	-export([on/3,off/3]).

	name() -> pushbutton_statem. % The registered server name

	%% API.  This example uses a registered name name()
	%% and does not link to the caller.
	start() ->
		gen_statem:start({local,name()}, ?MODULE, [], []).
	push() ->
		gen_statem:call(name(), push).
	get_count() ->
		gen_statem:call(name(), get_count).
	stop() ->
		gen_statem:stop(name()).

	%% Mandatory callback functions
	terminate(_Reason, _State, _Data) ->
		void.
	code_change(_Vsn, State, Data, _Extra) ->
		{ok,State,Data}.
	init([]) ->
		%% Set the initial state + data.  Data is used only as a counter.
		State = off, Data = 0,
		{ok,State,Data}.
	callback_mode() -> state_functions.

	%%% state callback(s)
	off({call,From}, push, Data) ->
		%% Go to 'on', increment count and reply
		%% that the resulting status is 'on'
		{next_state,on,Data+1,[{reply,From,on}]};
	off(EventType, EventContent, Data) ->
		handle_event(EventType, EventContent, Data).

	on({call,From}, push, Data) ->
		%% Go to 'off' and reply that the resulting status is 'off'
		{next_state,off,Data,[{reply,From,off}]};
	on(EventType, EventContent, Data) ->
		handle_event(EventType, EventContent, Data).

	%% Handle events common to all states
	handle_event({call,From}, get_count, Data) ->
		%% Reply with the current count
		{keep_state,Data,[{reply,From,Data}]};
	handle_event(_, _, Data) ->
		%% Ignore all other events
		{keep_state,Data}.

这个按钮状态机要点：

- 对外公开了四个 API，供用户使用来切换状态，`start`、 `push`、 `get_count`、 `stop`。

- 定义了 on 和 off 两个内部方法来切换 pushbutton 状态，它们通过 handle_event 进行。

- start 这个 API 中执行 `start_link` 注册模块，并启动 gen_statem 状态机。成功则返回 `{ok,Pid}`。使用 `start_link/4` 注册时，如果 ServerName 存在，则返回 `{error,{already_started,Pid}}`。如果，在 init 遇到返回失败 Reason，那么 start_link 返回 `{error,Reason}`。如果 init 返回 `{stop,Reason}` 或 `ignore`，进程结束，它也对应返回 `{error,Reason}` 或 `ignore`。

- `init([])` 初始化回调在，在新进程执行时调用 `start_link/3`, `start_link/4`, `start_monitor/3`,`start_monitor/4`, `start/3`, `start/4` 任意一个启动 gen_statem 时执行，以初始化机器状态和服务器数据民。

- `terminate(Reason, State, Data) -> Ignored` 在 gen_statem 终结状态机前回调，通过 Reason 会传入理由，和 init 相反，做清理工作。 

- `Module:code_change(OldVsn, OldState, OldData, Extra) -> Result`

	gen_statem 在 upgrade/downgrade 更新内部状态时回调。这是可选的回调，但是，在 .appup 文件指定 Change = {advanced,Extra} 就必要实现。对于升级，OldVsn 参数就是 `Vsn`，降级则是 `{down,Vsn}`。成功时，需要返回 Result = {ok,NewState,NewData}，或者返回失败原因 Reason。

- `callback_mode() -> CallbackMode`

	此方法由 gen_statem 回调，在需要了解模块使用什么回调模式时使用，如启动时、code_change 之后，改变回调模块等等情况下都会回调。返回值决定了 gen_statem 状态机如何使用特定的模式工作，这里使用 state_functions 方式。

测试上面的代码：

	1> pushbutton:start().
	{ok,<0.36.0>}
	2> pushbutton:get_count().
	0
	3> pushbutton:push().
	on
	4> pushbutton:get_count().
	1
	5> pushbutton:push().
	off
	6> pushbutton:get_count().
	1
	7> pushbutton:stop().
	ok
	8> pushbutton:push().
	** exception exit: {noproc,{gen_statem,call,[pushbutton_statem,push,infinity]}}
		 in function  gen:do_for_proc/2 (gen.erl, line 261)
		 in call from gen_statem:call/3 (gen_statem.erl, line 386)


gen_fsm behaviour 是旧版的状态机实现，Erlang 手册中的开锁例子，有一个密码锁的门，它就可以看作一个状态机，初始状态门锁着。任何时候有人按一个密码键就会产生一个事件，这个键值和前面的按键组合后与密码相比较，看是否正确，如果输入的密码顺序是对的，那么将门打开 10 秒，如果输入密码不完全，则等待下次按钮按下，如果输入密码顺序是错的，则重新开始等待按键按下。



# 🚩 OTP - gen_event Behaviour
- [OTP design principles](http://erlang.org/doc/design_principles/des_princ.html)
- [Erlang Generic server behavior](http://erlang.org/doc/man/gen_server.html)
- [gen_event Behaviour](http://erlang.org/doc/design_principles/events.html)
- [What is OTP](https://learnyousomeerlang.com/what-is-otp#its-the-open-telecom-platform)

在 OTP 中，事件管理器是一个事件可以发送的命名对象，一个事件可以是一个错误、一个警告、或者一些要写入日志的信息。

在事件管理器中，可以安装有任意个事件处理器，当一个事件通知到事件管理器时，这个事件将被事件处理器进行处理。

事件管理器用一个进程实现，事件处理器用回调模块实现。事件管理器本质上维护一个 `{Module, State}` 列表，每一个 Module 为一个事件处理器，其内部状态是 `State`。

示例，打印错误事件：

	-module(terminal_logger).
	-behaviour(gen_event).

	-export([init/1, handle_event/2, terminate/2]).

	init(_Args) ->
		{ok, []}.

	handle_event(ErrorMsg, State) ->
		io:format("***Error*** ~p~n", [ErrorMsg]),
		{ok, State}.

	terminate(_Args, _State) ->
		ok.

示例，将错误事件写入文件：

	-module(file_logger).
	-behaviour(gen_event).

	-export([init/1, handle_event/2, terminate/2]).

	init(File) ->
		{ok, Fd} = file:open(File, read),
		{ok, Fd}.

	handle_event(ErrorMsg, Fd) ->
		io:format(Fd, "***Error*** ~p~n", [ErrorMsg]),
		{ok, Fd}.

	terminate(_Args, Fd) ->
		file:close(Fd).

调用 start_link 启动事件管理器:

	gen_event:start_link({local, error_man})

这个函数生成并连接到一个新进程，参数 `{local, error_man}` 指定名称，在这个例子中，事件管理器被局部注册为 error_man。

假如忽略名称，那么事件管理器不会被注册，必须使用它的 PID。名称也可以是这种形式 `{global, Name}`，这样，事件管理器用 `global:register_name/2` 方法注册。

假如事件管理器要成为监控树的一部分，就必须使用 `gen_event:start_link` 启动，即由 supervisor 监控树启动，而`gen_event:start` 启动单独的事件管理器，也就是事件管理器不是监控树的一部分。


添加事件处理器，下面的例子演示启动一个事件管理器：

	1> gen_event:start({local, error_man}).
	{ok,<0.31.0>}
	2> gen_event:add_handler(error_man, terminal_logger, []).
	ok

启动事件管理器后，为 `error_man` 添加一个事件处理器 terminal_logger，事件管理器调用 `terminal_logger:init([])` 这个回调函数, [] 是参数，init 要返回一个 `{ok, State}`，State 是事件处理器的内部状态。如下示范：

	init(_Args) ->
		{ok, []}.

这里，init不需要任何输入参数，对于terminal_logger，也没使用内部状态，对于file_logger，内部状态保存了打开的文件描述符

	init(File) ->
		{ok, Fd} = file:open(File, read),
		{ok, Fd}.
	 
事件通知
 

	3> gen_event:notify(error_man, no_reply).
	***Error*** no_reply
	ok

error_man 是事件管理器的名称，no_reply 是事件，事件作为消息发送给事件管理器，当事件被收到时，事件管理器为每个安装的事件处理器按安装次序调用 handle_event(Event, State)，这个函数期待返回 {ok, State}，State 是事件处理器的新状态。

在 terminal_logger 中

	handle_event(ErrorMsg, State) ->
		io:format("***Error*** ~p~n", [ErrorMsg]),
		{ok, State}.

在 file_logger 中

	handle_event(ErrorMsg, Fd) ->
		io:format(Fd, "***Error*** ~p~n", [ErrorMsg]),
		{ok, Fd}.

删除一个事件处理器

gen_event:delete_handler(error_man, terminal_logger, []) 这个函数向事件管理器 error_man 发送了一个消息，告诉他删除 terminal_logger 这个事件处理器，事件管理器将调用 terminal_logger:terminate([], State)，参数 [] 是 delete_handler 的第三个参数，terminate 以 init 相反的方向调用，以完成清理工作，返回值被忽略。

在 terminal_logger 中，没有清理动作

	terminate(_Args, _State) ->
		ok.
	 
在 file_logger 中，文件描述符被关掉

	terminate(_Args, Fd) ->
		file:close(Fd).
	 
当事件管理器被停止，它给每个注册的事件处理器 terminate/2 的调用机会，就好像事件处理器被删除一样。如果事件管理器是监控树的一部分，不需要显式的停止事件管理器。当事件管理器作为单独进程使用时，则调用 `gen_event:stop(error_man)` 来停止。






# 🚩 Distributed 分布式编程
- [30 分钟学 Erlang (一)](https://www.jianshu.com/p/b45eb9314d1e)
- [30 分钟学 Erlang (二)](https://www.jianshu.com/p/5b7e73576dcb)
- [30 分钟学 Erlang (三)](https://www.jianshu.com/p/bbaf695ec167)
- [Erlang.mk User Guide](https://erlang.mk/guide/index.html)
- [Distributed Erlang](http://erlang.org/doc/reference_manual/distributed.html)
- [OTP design principles](https://erlang.org/doc/design_principles/des_princ.html)
- [ERTS User's Guide - Distribution Protocol](https://erlang.org/doc/apps/erts/erl_dist_protocol.html)
- [ERTS User's Guide - alternative carrier protocol for the Erlang Distribution](https://erlang.org/doc/apps/erts/alt_dist.html)
- [ERTS - Erlang Run-Time System Application Reference Manual](https://erlang.org/doc/man/erlang.html)

Erlang 自带分布式功能，并且 Erlang 语言的消息发送也完全适应分布式环境。
我们称一个 Erlang VM 是一个 Erlang Node。所以每次用 erl 命令启动一个 erlang shell，就是启动了一个节点 Node。节点是分布式应用程序运行的场所，而分布式程序可以在各个节点间移动，即程序运行的节点是不限制的。从这个意义上讲，所有程序都是分布式的，因为 Node 提供了分布能力。为了能追踪分布应用程序，不必考虑程序是在哪个节点上运行的，就要使用 `global` 和 `pg` 两个模块，pg 即进行分组 process groups。

EPMD - Erlang Port Mapper Daemon 负责节点的连接，使用分布协议 distribution protocol 进行通信：

- (1) Low-level socket connection
- (2) Handshake, interchange node name, and authenticate
- (3) Authentication (done by net_kernel(3))
- (4) Connected

Distribution BIFs

| BIF	| 函数功能	|
| :----	| :----	|
| disconnect_node(Node)	| 强制断开节点	|
| get_cookie()	| 返回当前节点的 magic cookie	|
| is_alive()	| 判断当前运行的系统是否为可以连接其它节点的的节点	|
| monitor_node(Node, boolean)	| 监视节点，断开时收到 message{nodedown, Node} 	|
| node()		| 返回当前节点名称	|
| node(Arg)		| 返回参数指定的节点名称，pid, reference, port	|
| nodes()		| 返回当前可见的所有连接节点	|
| nodes(Arg)	| 根据参数返回连接的节点，包括隐藏节点	|
| set_cookie(Node, Cookie)	| 在连接时设置节点 magic cookie，当前节点设置对后面联接节点生效 	|
| `spawn[_link|_opt](Node, Fun)`	| 创建远程节点上的进程	|
| `spawn[_link|opt](Node, Module, FunctionName, Args)`	| 创建远程节点上的进程	|

Distribution Command-Line Flags

| 命令行标记	| 作用 |
| :----	| :----	|
| -connect_all false	| 只显式联接设置使用 |
| -hidden		| 隐藏节点 |
| -name Name	| 将运行时系统转换为节点，指定节点长名称 |
| -setcookie Cookie	| 同 set_cookie(node(), Cookie). |
| -sname Name	| 将运行时系统转换为节点，指定节点短名称 |

有两种办法连接两个 Node。第一种是显式的调用 `net_kernel:connect_node/1` 函数，第二种是在使用 RPC 调用一个远程的方法的时候，自动加入集群。

来试一下，先启动第一个节点 `node1`, 绑定在 127.0.0.1 上。并设置 erlang distribution cookie：

	$ erl -name node1@127.0.0.1 -setcookie 'dist-cookie'
	(node1@127.0.0.1)1>

cookie 是用来保护分布式系统安全的，只有设置了相同 cookie 的 node 才能建立分布式连接。

我们在另外一个终端里，再启动一个新的节点 `node2`：

	$ erl -name node2@127.0.0.1 -setcookie 'dist-cookie'
	(node2@127.0.0.1)1> nodes().
	[]
	(node2@127.0.0.1)2> net_kernel:connect_node('node1@127.0.0.1').
	true
	(node2@127.0.0.1)3> nodes().
	['node1@127.0.0.1']
	(node2@127.0.0.1)4>

erlang:nodes/0 用来显示与当前建立了分布式连接的那些 nodes。

再启动一个新的节点 `node3`:

	$ erl -name node3@127.0.0.1 -setcookie 'dist-cookie'
	(node3@127.0.0.1)1> net_adm:ping('node1@127.0.0.1').
	pong
	(node3@127.0.0.1)2> nodes().
	['node1@127.0.0.1','node2@127.0.0.1']
	(node3@127.0.0.1)3>

这次仅仅 ping 了一下 node1, 就已经建立了 node1, node2, node3 所有 3 台 node 组成的集群。

发送消息语句完全适应分布式环境，我们来试试在 `node2` 里查看一下当前 erlang shell 的 PID：

	(node2@127.0.0.1)4> self().
	<0.63.0>

在 `node3` 里，查看一下这个 `node2` 对应到本地的 PID 系统是怎么表示的，然后给它发个消息：

	(node3@127.0.0.1)7> ShellNode2 = rpc:call('node2@127.0.0.1', erlang, list_to_pid, ["<0.63.0>"]).
	<7525.63.0>

	(node3@127.0.0.1)8> ShellNode2 ! "hi, I'm node3".
	"hi, I'm node3"

在 `node2` 里执行一下数据清刷，就会收到这条消息：

	(node2@127.0.0.1)5> flush().
	Shell got "hi, I'm node3"
	ok

看到了吧，只要我们知道一个 PID，不论他是在本地 node 还是在远端，我们都能用 ! 发送消息，语义完全一样。
在聊天程序里，只需要把 PID 存到 mnesia，让它在各个 node 之间共享，就可以实现从单节点到分布式的无缝迁移。


**分布式 Erlang 怎么工作的？**

启动 erlang 的时候，系统会确保一个 `epmd` 已经起来了。

	$ lsof -i -n -P | grep TCP | grep epmd
	epmd      22871 liuxinyu    3u  IPv4 0x1b..6d   0t0  TCP *:4369 (LISTEN)
	epmd      22871 liuxinyu    4u  IPv6 0x1b..1d   0t0  TCP *:4369 (LISTEN)
	epmd      22871 liuxinyu    5u  IPv4 0x1b..65   0t0  TCP 127.0.0.1:4369->127.0.0.1:59719 (ESTABLISHED)
	epmd      22871 liuxinyu    6u  IPv4 0x1b..7d   0t0  TCP 127.0.0.1:4369->127.0.0.1:52371 (ESTABLISHED)
	epmd      22871 liuxinyu    7u  IPv4 0x1b..95   0t0  TCP 127.0.0.1:4369->127.0.0.1:52381 (ESTABLISHED)
	epmd      22871 liuxinyu    9u  IPv4 0x1b..7d   0t0  TCP 127.0.0.1:4369->127.0.0.1:53066 (ESTABLISHED)

epmd 监听在系统的 4369 端口，并记录了本地所有 erlang node 开放的分布式端口。

来看一下 node1 使用的端口情况：

	$ lsof -i -n -P | grep TCP | grep beam
	beam.smp  47263 liuxinyu   25u  IPv4 0x1b..8d   0t0  TCP *:52370 (LISTEN)
	beam.smp  47263 liuxinyu   26u  IPv4 0x1b..95   0t0  TCP 127.0.0.1:52371->127.0.0.1:4369 (ESTABLISHED)
	beam.smp  47263 liuxinyu   27u  IPv4 0x1b..95   0t0  TCP 127.0.0.1:52370->127.0.0.1:52405 (ESTABLISHED)
	beam.smp  47263 liuxinyu   28u  IPv4 0x1b..95   0t0  TCP 127.0.0.1:52370->127.0.0.1:53312 (ESTABLISHED)

epmd 工作的原理是：

- node1 监听在 52370 端口。
- 当 node2 尝试连接 node1 时先去 127.0.0.1 机器上的 empd 请求一下，获得 node1 监听的端口号：52370。
- 然后 node2 使用一个临时端口号 52405 作为 client 端，与 node1 的 52370 建立了 TCP 连接。


在 Windows 分两步查询 empd 的绑定端口，首先查询 empd 的 PID，再根据 PID 查找对应端口：

	tasklist | findstr epmd*

比如查询到 PID 是 1260：

	>netstat -ano |findstr "1260 PID"
	  协议  本地地址          外部地址        状态           PID
	  TCP    0.0.0.0:4369           0.0.0.0:0              LISTENING       1260
	  TCP    127.0.0.1:4369         127.0.0.1:57283        ESTABLISHED     1260
	  TCP    127.0.0.1:4369         127.0.0.1:57290        ESTABLISHED     1260
	  TCP    127.0.0.1:4369         127.0.0.1:57294        ESTABLISHED     1260
	  TCP    [::]:4369              [::]:0                 LISTENING       1260


**一个分布式 Hello World**

我们 Hello World 程序的教学目的是，熟悉如何创建一个可以上线的项目。
让我们用 erlang.mk 工具简化 Makefiles，创建一个真正的 hello world 工程。

Erlang/OTP 工程的基本框架，即 Supervision Tree 架构：

- 项目可以包含很多个 `Application`，它包含了本应用的所有代码，可以随时加载和关闭；
- Application 一般会包含一个顶层 `Supervisor` 进程用来监控 `worker`；
- 顶层 Supervisor 下面管理了许多 sub Supervisor 和 worker 进程。
- 业务逻辑都在 worker 里面，supervisor 里可以定制重启策略，如果返现某个 worker 挂掉了，可以按照既定的策略重启它。

首先创建一个 hello_world 目录，然后在里面建立工程的基本框架，要先安装好 git 和 make，Windows 系统可以使用 gnuwin32 make 替代：

	$ mkdir hello_world && cd hello_world
	$ curl -O https://erlang.mk/erlang.mk

	$ make -f erlang.mk bootstrap SP=2

然后我们创建一个 hello_world.erl, 模板是 gen_server :

	$ make new t=gen_server n=hello_world SP=2
	$ ls src
	total 24
	drwxr-xr-x  5 liuxinyu  staff   170B  3 21 19:01 .
	drwxr-xr-x  8 liuxinyu  staff   272B  3 21 18:59 ..
	-rw-r--r--  1 liuxinyu  staff   673B  3 21 19:01 hello_world.erl
	-rw-r--r--  1 liuxinyu  staff   170B  3 21 18:59 hello_world_app.erl
	-rw-r--r--  1 liuxinyu  staff   233B  3 21 18:59 hello_world_sup.erl

以上我们生成的文件里，文件命名有一些约定。与工程名同名的文件 hello_world.erl 里是我们的 worker，gen_server 的模板文件，是工程的入口文件。`_app` 后缀的是 application behavior, `_sup` 结尾的是 supervisor behavior。

hello_world_app.erl 里面，start/2 函数启动的时候，启动了整个应用的顶层 supervisor，hello_world_sup:

	start(_Type, _Args) ->
	  hello_world_sup:start_link().

hello_world_sup.erl 里面，调用 supervisor:start_link/3 之后，supervisor 会回调 init/1。我们需要在 init/1 中做一些初始化参数的设置:

	init([]) ->
	  %% 重启策略是 one_for_one
	  %% 重启频率是5 秒内最多重启1次，如果超过这个频率就不再重启
	  SupFlags = #{strategy => one_for_one, intensity => 1, period => 5},

	  %% 只启动一个子进程，类型是 worker
	  Procs = [#{id => hello_world,   %%  给子进程设置一个名字，supervisor 用这个名字标识这个进程。
				  start => {hello_world, start_link, []}, %% 启动时调用的 Module:Function(Args)
				  restart => permanent,  %% 永远需要重启
				  shutdown => brutal_kill, %% 关闭时不需要等待，直接强行杀死进程
				  type => worker,
				  modules => [cg3]}],  %% 使用的 Modules
	  {ok, {SupFlags, Procs}}.

在 hello_world.erl 里的 init/1 里添加一个 timer

	init([]) ->
	  timer:send_interval(10000, {interval, 3}), %% 每隔 10 秒发一个 {interval, 3} 给自己进程
	  {ok, #state{}}.

最后 make run 看看效果。可以看到每次崩溃都会被 supervisor 重启：

	$ make run
	(hello_world@127.0.0.1)1> hello_world(<0.228.0>): doing something bad now...
	=ERROR REPORT==== 21-Mar-2018::19:44:35 ===
	** Generic server <0.228.0> terminating
	** Last message in was {interval,3}

	...

	hello_world(<0.247.0>): doing something bad now...
	=ERROR REPORT==== 21-Mar-2018::19:44:58 ===
	** Generic server <0.247.0> terminating
	** Last message in was {interval,3}

然后添加一个 timer 的回调函数，回调函数里故意写了一行让程序崩溃的代码

	handle_info({interval, Num}, State) ->
	  io:format("~p(~p): doing something bad now...~n", [?MODULE, self()]),
	  1 = Num,
	  {noreply, State};




# 🚩 Ports and Port Drivers
- http://erlang.org/doc/reference_manual/ports.html
- https://www.erlang.org/doc/tutorial/introduction#interoperability%20tutorial
- https://www.erlang.org/doc/getting_started/conc_prog#distributed-programming
- http://beam-wisdoms.clau.se/interfacing.html
- http://beam-wisdoms.clau.se/indepth-io.html
- http://bert-rpc.org/

与其说 Erlang 是一个语言运行环境，不如说它是一个虚拟的操作系统环境。在这个操作系统环境下运行着虚拟的 Erlang process，这些进程之间是独立并行运行的，由 Erlang 虚拟机负责调度，就像在真的操作系统中一样。

作为虚拟的操作系统，当然少不了对 io 的处理。这些虚拟的 process 需要虚拟的 IO 设备来和外界通信。`Port` 在整个 Erlang 环境中就扮演了这个角色。Port 是连接外部程序进程和 Erlang 虚拟机的桥梁，外部进程是操作系统中独立的进程，通过标准输入输出以字节接口 byte-oriented 而非 Erlang terms 的方式与 Erlang 虚拟机交互，并运行于独立的地址空间。

Ports 方式根据不同系统会有实现层面上差别，比如 UNIX 系统下会使用 pipes 作为数据传递通道。由于外部程序是独立的操作系统进程而非 Erlang 进程，具有独立进程内存空间，运行安全性更高，但也更消耗系统资源。

Port Drivers 方式则是通过链接库载入 Erlang 运行时，虽然同样需要使用 Port 通信机制，但是和 Erlang 同属一个进程。使用 C 等语言按接口规则编写 Port Drivers，并通过动态链接库的方式挂载到 Erlang 运行时，称之为 Linked-in drivers。

除了 Port 通信方式和 Port Drivers 链接库方式，为了方便接入外部程序，Erlang 还提供以下类库或互调方式：

- Erl_Interface: 为 C 语言编程实现的接口，使用 term_to_binary 和 binary_to_term 转换类型类型。
- Jinterface: Java 和 Erlang 的通讯接口，和 Erl_Interface 接口类似。
- C Nodes: 用 C 语言按 Erl_Interface 接口模拟 Erlang Node 行为实现的可执行程序。
- NIF: Erlang 虚拟机直接调用 C 原生代码实现的动态链接函数库。
- Network: 通过自定义序列化格式与 Erlang 节点网络交互，如 bert-rpc。

从进程关系上来分类，Port、Erl_Interface、Jinterface、C Nodes 还有 Network 方式都是独立的外部程序，进程完全独立。而通过动态链接库加载的形式有 Port Drivers、NIF。

所有需要引用的头文件或库都可以在安装目录下 usr\include 和 lib 中找到。

Erlang 外部调用有几种方式，Port 或者 Port Drivers 只是其中之一，与其它语言程序的互调用机制可以归纳为两类：

1. Distributed Erlang 分布式互调用，主要用于 Erlang 程序之间，当然也可以与 C 或 Java 互调。
2. Ports 或者 linked-in drivers，主要用于 Erlang 与其它语言程序。

通过给分布系统中的一个 Erlang 运行时系统一个名称而成为一个分布式 Erlang 节点。分布式 Erlang 节点可以连接并监视其他节点，还可以在其他节点生成进程。不同节点的进程之间的消息传递和错误处理是透明的。分布式 Erlang 系统中提供了许多有用的 STDLIB 模块。例如，global，它提供全局名称注册。分发机制使用 TCP/IP 套接字实现。


## 🍀 NIF 原生实现函数
- https://www.erlang.org/doc/tutorial/nif
- https://www.erlang.org/doc/man/erl_nif.html
- https://www.erlang.org/doc/tutorial/debugging
- https://www.cnblogs.com/zhengsyao/p/dirty_scheduler_otp_17rc1.html
- https://github.com/slfritchie/nifwait/tree/md5
- https://github.com/vinoski/bitwise


> Warning
> 
> Use this functionality with extreme care.
> 
> A native function is executed as a direct extension of the native code of the VM. Execution is not made in a safe environment. The VM cannot provide the same services as provided when executing Erlang code, such as pre-emptive scheduling or memory protection. If the native function does not behave well, the whole VM will misbehave.
> 
> A native function that crashes will crash the whole VM.
> 
> An erroneously implemented native function can cause a VM internal state inconsistency, which can cause a crash of the VM, or miscellaneous misbehaviors of the VM at any point after the call to the native function.
> 
> A native function doing lengthy work before returning degrades responsiveness of the VM, and can cause miscellaneous strange behaviors. Such strange behaviors include, but are not limited to, extreme memory usage, and bad load balancing between schedulers. Strange behaviors that can occur because of lengthy work can also vary between Erlang/OTP releases.。

NIF - Native Implemented Functions 是 Erlang 调用 C 代码最简单高效的方案，对 Erlang 层来说，调用 NIF 就像调用普通函数一样，只不过这个函数是由 C 实现的。实现方式和 Port Drivers 类似，都是通过动态链接库的形式加载，只是没有经过 Port 接口。

NIF 是同步语义的，运行于调度线程中，无需上下文切换，因此效率很高。但也引出一个问题，对于执行时间长的 NIF，在 NIF 返回之前，调度线程不能做别的事情，影响了虚拟机的公平调度，甚至会影响调度线程之间的协作。因此 NIF 是把双刃剑，在使用的时候要尤其小心。

Erlang 建议的 NIF 执行时间不要超过 1ms，针对于执行时间长的 NIF，Long-running NIFs
 文档方案参考：

- 分割任务，将单次长时间调用切分为多次短时间调用，再合并结果。这种方案显然不通用
- 让 NIF 参与调度。NIF 适时通过 `enif_consume_timeslice` 汇报消耗的时间片，让虚拟机确定是否放弃控制权并通过返回值通知 NIF(做上下文保存等)
- Dirty NIF 脏调度器，让 NIF 在非调度线程中执行；
- Threaded NIF，让独立线程进行长时的工作，完成后通过 enif_send 方法发送结果。

Erlang 默认并未启用脏调度器，通过 `--enable-dirty-schedulers` 选项重新编译虚拟机可打开脏调度器，目前脏调度器只能被 NIF 使用。

关于脏调度器，NIF 测试与调优，参考：

- siyao blog Erlang/OTP 17.0-rc1 新引入的"脏调度器"浅析
- nifwait
- bitwise
- O'Reilly 出版的 Designing for Scalability with Erlang/OTP

Port Driver 和 NIF 与虚拟机调度密切相关，想要在实践中用好它们，还是要加深对 Erlang 虚拟机调度的理解，如公平调度，进程规约，调度器协同等。再来理解异步线程池，脏调度器的存在的意义以及适用场景。

另外，Port Driver 和 NIF 还有一种用法是自己创建新的线程或线程池，Driver 和 NIF 也提供了线程操作 API，这基本是费力不讨好的一种方案，还极易出错。

NIF library 作为动态链接库，.so 或者 .dll，并且通过 erlang:load_nif/2 加载到 Erlang 运行时，调用 NIF 函数就和其它内建函数一样。编写 NIF 函数库需要以下头文件：

1. usr\include\erl_nif.h
2. usr\include\erl_drv_nif.h
3. usr\include\erl_nif_api_funcs.h

一个最小 NIF 库的实现如下，C 语言代码只需要引用 erl_nif.h 头文件。代码中
调用宏函数 `ERL_NIF_INIT` 将 C 实现的函数注册为 NIF，并关联指定的 Erlang 模块名，宏体会构建出相应的 `ErlNifEntry`。

	#define ERL_NIF_INIT(NAME, FUNCS, LOAD, RELOAD, UPGRADE, UNLOAD) 

宏函数参数说明：

1. NAME 指定要绑定的 Eerlang 模块的名称；
2. FUNCS 指定 NIFs 函数列表与对应的 C 语言实现函数；
3. LOAD、RELOAD、UPGRADE、UNLOAD  对应模块的功能函数，可选。

```cpp
    int  (*load)   (ErlNifEnv*, void** priv_data, ERL_NIF_TERM load_info);
    int  (*reload) (ErlNifEnv*, void** priv_data, ERL_NIF_TERM load_info);
    int  (*upgrade)(ErlNifEnv*, void** priv_data, void** old_priv_data, ERL_NIF_TERM load_info);
    void (*unload) (ErlNifEnv*, void* priv_data);
```

每个 NIF 函数实现对应 `ErlNifFunc` 结构，相当于是描述 `FunctionName/Arity` 的结构。实现函数接收一个 Erlang 上下文环境, 可以通过它得到对应的 NIF 模块信息。
函数输入输出都使用 `ERL_NIF_TERM` 类型，它是一个用于标识 terms 类型的值。使用 erl_nif_api_funcs.h 中提供的各种类型转换函数，比如 `enif_make_string`，实现函数只需要负责输出部分的数据类型转换。

根据系统差异，类型转换函数使用不同的宏函数构造：`ERL_NIF_API_FUNC_MACRO` (Win32) 和 `ERL_NIF_API_FUNC_DECL`。以下按 Win32 系统的处理梳理类型转换函数的逻辑：

```cpp
#  define enif_make_binary ERL_NIF_API_FUNC_MACRO(enif_make_binary)

#  define ERL_NIF_API_FUNC_MACRO(NAME) (WinDynNifCallbacks.NAME)
#  include "erl_nif_api_funcs.h"

#  define ERL_NIF_API_FUNC_DECL(RET_TYPE, NAME, ARGS) RET_TYPE (*NAME) ARGS
typedef struct {
#  include "erl_nif_api_funcs.h"
   void* erts_alc_test;
} TWinDynNifCallbacks;
extern TWinDynNifCallbacks WinDynNifCallbacks;
#  undef ERL_NIF_API_FUNC_DECL
```


以下是 NIF 函数库的示范代码：

```cpp
/* niftest.c */
#include <erl_nif.h>

static ERL_NIF_TERM hello(ErlNifEnv* env, int argc, const ERL_NIF_TERM argv[])
{
    return enif_make_string(env, "Hello world!", ERL_NIF_LATIN1);
}

static ErlNifFunc nif_funcs[] =
{
    {"hello", 0, hello}
};

ERL_NIF_INIT(niftest,nif_funcs,NULL,NULL,NULL,NULL)
```

对应的 Erlang 加载程序如下，注意使用 `-on_load` 指令，它保证模块加载时会执行 NIF 函数库的加载。并且使用了 `-nifs` 指令定义了 NIF 函数库导出的函数列表，这个指令指导 Erlang 用 NIF 函数替代代码中定义的同名的 Erlang 函数，如果 NIF 函数库加载成为就会以 Code replacement 的形式替换它，在加载 NIF 函数库失败时就会以 fallback 形式使用同名的 Erlang 函数。同时 fallback 函数必要存在以确保 NIF 函数库加载前被调用的情形得到响应，一般会调用 erlang:nif_error 触发异常：

```erlang
-module(niftest).

-export([init/0, hello/0]).

-nifs([hello/0]).

-on_load(init/0).

init() ->
      erlang:load_nif("./niftest", 0).

hello() ->
      erlang:nif_error("NIF library not loaded").
```

A NIF does not have to be exported, it can be local to the module. However, unused local stub functions will be optimized away by the compiler, causing loading of the NIF library to fail.

以上 NIF 函数库程序可以在 Linux 系统使用以下命令编译并加载调用：

```sh
$> gcc -fPIC -shared -o niftest.so niftest.c -I $ERL_ROOT/usr/include/
$> erl

1> c(niftest).
{ok,niftest}
2> niftest:hello().
"Hello world!"
```

NIF 函数库一旦加载就持久存在，除非主动 purge 函数库所归属的 Erlang 模块。可以在 NIF 实现中，编写 unload 函数，用于在卸载函数库时做清理工作。

调试 NIF 程序，可以激活 erl 的调试功能，如果编译时已启用 debug emulator 调试功能会出现 debug-compiled。建议开发中总是使用调试模拟器，尽管会降低性能，但可以获得以下好处：

1. Increase probability of detecting bugs earlier. It contains a lot more runtime checks to ensure correct use of internal interfaces and data structures.
2. Generate a core dump that is easier to analyze. Compiler optimizations are turned off, which stops the compiler from "optimizing away" variables, thus making it easier/possible to inspect their state.
3. Detect lock order violations. A runtime lock checker will verify that the locks in the erl_nif and erl_driver APIs are seized in a consistent order that cannot result in deadlock bugs.

```sh
# https://www.erlang.org/doc/installation_guide/install
# $ (cd $ERL_TOP/erts/emulator && make debug)
> erl.exe -emu_type debug
Erlang/OTP 26 [erts-14.0.2] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:1] [jit:ns] [type-assertions] [debug-compiled] [lock-checking]

Eshell V14.0.2 (press Ctrl+G to abort, type help(). for help) 
```

## 🍀 C Port Example
- https://www.erlang.org/doc/tutorial/c_port
- https://www.erlang.org/doc/reference_manual/ports
- [SMP、NUMA、MPP体系结构介绍](https://www.cnblogs.com/yubo/archive/2010/04/23/1718810.html)

在 Erlang 中，一个 `Port` 其实就代表了一个 IO 句柄，进程通过 `open_port` 打开，然后在这个 port 上进行读写数据操作，来与这个 IO 句柄进行数据交换。Port 被用来抽象所有和 Erlang 虚拟机交互的 IO 对象，比如文件，socket 等等，就像 unix 设计一样。Port 作为抽象的端口，不仅实现 Erlang 进程与其它独立的操作系统进程的通信，也实现了在 Erlang 进程内部与其它语言编写的 Port Drivers 动态链接程序进行互调用。

系统与 `Port Driver` 的交互中，要向系统提供一个 `ErlDrvEntry` 类型的结构体，其中包含有系统回调函数的指针，每个回调函数都用于处理 driver 事件进行处理。关于每个回调函数的描述可以参考 Ports and Port Drivers 文档。

每个 Port 都有一个 owner 进程，通常为创建 Port 的进程，当 owner 进程终止时，Port 也将被自动关闭。Ports 使用示例参考官方文档 C Ports。进程创建 port 也叫做连接进程到 port，是同一个意思。

通过 open_port 函数文档提供的信息，可以知道 Port 程序有多种运行方式：

```erlang
PortName =
    {spawn, Command :: string() | binary()} |
    {spawn_driver, Command :: string() | binary()} |
    {spawn_executable, FileName :: file:name()} |
    {fd, In :: integer() >= 0, Out :: integer() >= 0}
```

1. 第一种方式，`{spawn, Command}`，是 Ports 和 Port Drivers 互调用的方式，不适用于运行目录路径或命令名称中带空格的情况。

2. `{spawn_driver, Command}` 专用于 Port Drivers，并以命令中的第一个空格前的内容作为驱动程序名。

3. `{spawn_executable, FileName}` 适用于运行目录路径或命令名称中带空格的情况。

4. `{fd, In, Out }` 允许访问当前 Erlang 进程打开的文件描述符，标准输入和标准输出。

第一、二种形式中，Command 指定要运行的 PATH 环境变量目录列表中可以定位的外部程序，或者 Port Drivers 名称。如果命令包含空格，那么第一个空格前的值作为要运行的外部程序和 Driver 名称。命令所需要的参数可以通过 open_port PortSettings 参数 args 或 arg0 传入。

由于 open_port 涉及到建立操作系统进程，所以是比较耗资源的操作。

现代主机可以按 CPU 的结构划分成以下三类：

- Symmetrical Multi-Processing (SMP) 对称多处理技术，同一主机上各 CPU 之间共享内存子系统以及总线结构。
- Massive Parallel Processing (MPP) 大规模并行处理系统由多个 SMP 服务器通过一定的节点互联网络进行连接，协同工作，完成相同的任务，从用户的角度来看是一个服务器系统。
- Non-Uniform Memory Access (NUMA) 非统一内存读写架构每个处理器拥有自己的内存，访问共享内存时具有不同的访问延迟。

Erlang 虚拟机在默认情况下运行于对称多处理 SMP 模式。系统一般会根据处理器数量，启动同样数量的 scheduler 调度线程负责以下工作：

- 运行属于本 scheduler 的 process；
- 处理系统 IO 事件；
- driver 在一个 scheduler 线程中运行，对应以上两个上下文。

所有 port 相关的 BIFs 都运行于 process 执行上下文中。比如 `open_port`，会立即调用 driver 的 `start` 回调，`port_command` 会调用 `output` 回调等等。在处理这些回调时，经常需要一些 IO 处理，比如读写 socket 或文件。如果我们使用同步的阻塞方法进行读写，将会挂起整个 scheduler 线程，从而导致所属的所有工作都被挂起。这是不允许的，所以在 driver 中处理 IO 时，都会使用非阻塞的方法。

系统通过 `driver_select` 接口函数为 driver 提供了事件监听机制，来实现非阻塞的 IO 处理。当有 IO 需要操作时，通过 `driver_select` 向系统注册可读或者可写事件，然后等待系统回调来最终处理读写。这个回调就是 `ready_input` 和 `ready_output`。他们运行于处理系统 IO 事件的上下文中。同样，在这个上下文中也不能阻塞 scheduler 线程的运行。

这些方法可以在源代码中找到：

1. otp_src_23.0\erts\emulator\sys\common\erl_check_io.c
2. otp_src_23.0\erts\emulator\sys\unix\sys_drivers.c
3. otp_src_23.0\erts\emulator\sys\win32\sys.c

系统还为每个 port 提供了一个 driver queue，用来存储异步数据。我们可以通过将待处理的数据加入到 driver queue 中，等待系统读写事件发生时再进行处理。

如果 driver 中有耗时的计算需要进行，这也等于阻塞了 scheduler 线程。为了解决这个问题，系统还提供了 `driver_async` 接口。系统在运行 scheduler 线程的同时，还运行了一个异步线程池 async thread pool，专门用来做异步的计算。我们应该把这样的计算推给异步线程池，然后等待在 `ready_async` 中处理结果。 Erlang 本身的 zip 处理就依赖于异步线程池来进行数据的压缩和解压运算。

非阻塞模式并不影响虚拟机的阻塞操作，很多高层的函数，比如 `prim_inet` 模块中的 `accept`、`connect`等函数，都通过 receive 被实现成了阻塞函数。与 driver 中的阻塞不同，在虚拟机中的阻塞可以被 scheduler 调度，而不会影响其他的 process。

在 driver 中，还有一个与阻塞相关的功能，就是 port busy，可以通过 `set_busy_port` 设置 busy 状态。如果一个 process 向 busy 状态的 port 发送数据时，这个 process 就会被挂起，直到 port 解除 busy 状态，一般使用这个功能来解决处理能力问题。比如 socket 的数据已经堆积了很多还没有发送出去时，就可以设置 busy，让发送 process 暂时阻塞在发送上面，等待数据发送完成。

假设由 C 语言编写的程序提供了两个函数：foo 和 bar，暂时将这个程序看作是 complex 模块。通过编写 Erlang Port 程序，可以实现 complex:foo() 或者 complex:bar() 这样的方式去调用 C 语言程序，并完成参数的传递与输出数据的获取。Erlang Port 程序在这个过程需要按以下步骤操作：

1. Encodes the message into a sequence of bytes.
2. Sends it to the port.
3. Waits for a reply.
4. Decodes the reply.
5. Sends it back to the caller:

以下是 Erlang complex 模块代码，代码使用定义的 encode 和 decode 方法用于将数值映射到 foo 和 bar，这样方便 C 程序接收到消息时直接处理数值即可。

注意，代码中的 complex 这个原子，它既是模块名，但更重要的是它是注册的进程，所以可以直接向它发送消息。注意，`self/0` 获取到的 PID 取决于其当前运行的进程，即什么进程调用它就反回对应进程的 PID。而无关于代码定义写在什么模块，由哪个进行运行这个模块。

1. spawn 孵化进程执行初始化 init/1，此时 self/0 是指这个孵化出来的进程；
2. 其它进程调用 complex:foo/1，并打开端口，此时 self/0 却是指这“其它进程”；

已经注册过的进程名或者 Port 可以使用 `whereis/1` 函数进行查询，获取其引用。如果指定的 atom 名称即没有相应注册的进程，也没有相应的注册端口，则返回 undefined。具体返回什么对象，取决于 register/2 方法注册时与 atom 名称关联的对象，可以用此方法来检测指定进程是否处于启动状态。

PID 与 Port 标识的字面表达有些不同，前者像 <0.78.0> ，而后者像 #Port<0.5>，可以。

```erlang
	-module(complex).
	-export([start/1, stop/0, init/1]).
	-export([foo/1, bar/1]).

	start(ExtPrg) ->
		spawn(?MODULE, init, [ExtPrg]).
	stop() ->
		complex ! stop.

	foo(X) ->
		call_port({foo, X}).
	bar(Y) ->
		call_port({bar, Y}).

	call_port(Msg) ->
		complex ! {call, self(), Msg},
		receive
		{complex, Result} ->
			Result
		end.

	init(ExtPrg) ->
		register(complex, self()),
		process_flag(trap_exit, true),
		Port = open_port({spawn, ExtPrg}, [{packet, 2}]),
		loop(Port).

	loop(Port) ->
		receive
		{call, Caller, Msg} ->
			Port ! {self(), {command, encode(Msg)}},
			receive
			{Port, {data, Data}} ->
				Caller ! {complex, decode(Data)}
			end,
			loop(Port);
		stop ->
			Port ! {self(), close},
			receive
			{Port, closed} ->
				exit(normal)
			end;
		{'EXIT', Port, Reason} ->
			io:fwrite(Reason),
			exit(port_terminated)
		end.

	encode({foo, X}) -> [1, X];
	encode({bar, Y}) -> [2, Y].

	decode([Int]) -> Int.
```

Erlang complex 模块启动时执行 start 方法，以新进程启动 init 函数完成以下事务：

1. 模块注册，名称为原子 complex；
2. 设置 trap_exit 错误信息捕捉；
3. 打开 Port 对象准备与外部程序进行消息通信，消息字节指 {packet, N} ，1、2、4 字节。
4. 进入 `loop` 函数中递归处理模块的消息，捕捉到错误或退出信号就结束程序。

为了自动化处理初始过程，可以使用 -on_load(start/0) 指令去执行初始化方法。注意，此 start/1 方法需要指定外部程序文件名，省略扩展名。外部程序名可以是字符串或者原子形式指定都可以。注意，这个名称会作用 open_port 函数中的商品命令使用。另外，-on_load 指令中不能使用匿名函数，并且不能在 -on_load 直接返回进程对象，使用中会出现循环调用现象。

```erlang
-on_load(start/0).

start() -> 
	% start(port_test). % dead cycle
	P = start(port_test),
	io:format("MOD: ~p ~p~n", [?MODULE, P]).
```

模块中定义的 `complex1:foo/1` 和 `complex1:bar/1` 两个函数供其它模块调用，用于触发调用外部程序，通过向模块本身发送 call 消息实现，loop 循环中接收到调用信息就通过 Port 对象发起与外部程序的消息通信。

进程在 `loop` 循环处理的调用任务如下：

1. 接收到 call 消息，此消息包含了要调用的外部函数与相应的参数；
2. 使用 `encode` 对消息进行编码，将待调用函数映射为对应的数字编号；
3. 然后，向 Port 对象发送 command 消息一并发送相应的参数，等待外部程序回复；
4. 接收到数据消息回复，使用 `decode` 解码得到计算结果的数值，并发回给 caller。

注意：call_port 方法中的 self() 获取当前进程 PID，即正在调用 complex:foo/1 或者 complex:bar/1 运行中的进程。示范程序假定使用 1 个字节来传递参数。

注意：Port 对象消息的收发规范，数据发送 {Pid,{command,Data}}，数据接收 {Port,{data,Data}}。


外部程序的主函数负责调用 erl_comm.c 程序中的函数读写 Erlang 程序通过 Port 机制收发的消息数据。因为 Erlang 将调用的函数映射为数值，并通过消息发送到 C 程序，所以读取消息时，根据数组映射关系去调用 foo 或 bar 函数，两个函数只接收一个参数简化了处理过程：

```cpp
	/* port.c */

	typedef unsigned char byte;

	int main() {
	  int fn, arg, res;
	  byte buf[100];

	  while (read_cmd(buf) > 0) {
		fn = buf[0];
		arg = buf[1];
		
		if (fn == 1) {
		  res = foo(arg);
		} else if (fn == 2) {
		  res = bar(arg);
		}

		buf[0] = res;
		write_cmd(buf, 1);
	  }
	}
```

在 C 代码中，stdin 和 stdout 是缓冲区，不可以用来和 Erlang 通讯。

在 main 函数中， port.c 程序在 while 循环中通过 read_cmd 读取来自 Erlang 的消息，最终会调用 C 语言库函数 read 读取缓冲区数据到 buf 变量中。此方法是阻塞的，它等待数据的到来，并逐字节读取再定入 buf 这个程序缓冲变量。在循环读取流程中，满足以下任一条，read_cmd 函数立即返回：

1. 缓冲区达到结束，即读取到 0 值；
2. 读取数据长度满足参数 len 指定的字节长度就返回。

根据读取到的消息数据第一个整数来决定执行 foo 或 bar 函数进行处理，而第二个整数则作为参数。得到计算结果后，再通过 write_cmd 发送回 Erlang 程序。

示范程序假设了一个字节足够映射两个 NIF 函数，同时假定其参数也使用一个字节表达。经过 encode、decode 简单的编码，foo 由数值 1 表示，bar 由 2 表示，输入参数也同样由单个字节表示。

```c
	/* erl_comm.c */

	#include <stdio.h>
	#include <unistd.h>

	typedef unsigned char byte;

	int read_exact(byte *buf, int len)
	{
	  int i, got=0;

	  do {
		  if ((i = read(0, buf+got, len-got)) <= 0){
			  return(i);
		  }
		got += i;
	  } while (got<len);

	  return(len);
	}

	int write_exact(byte *buf, int len)
	{
	  int i, wrote = 0;

	  do {
		if ((i = write(1, buf+wrote, len-wrote)) <= 0)
		  return (i);
		wrote += i;
	  } while (wrote<len);

	  return (len);
	}

	int read_cmd(byte *buf)
	{
	  int len;

	  if (read_exact(buf, 2) != 2)
		return(-1);
	  len = (buf[0] << 8) | buf[1];
	  return read_exact(buf, len);
	}

	int write_cmd(byte *buf, int len)
	{
	  byte li;

	  li = (len >> 8) & 0xff;
	  write_exact(&li, 1);
	  
	  li = len & 0xff;
	  write_exact(&li, 1);

	  return write_exact(buf, len);
	}
```

功能函数只用于演示 Port 调用逻辑，本身功能只做常规数学计算：

```cpp
	/* complex.c */

	int foo(int x) {
	  return x+1;
	}

	int bar(int y) {
	  return y*2;
	}
```

运行测试

Step 1. 编译 C 代码生成 extprg 程序：

	unix> gcc -o extprg complex.c erl_comm.c port.c

Step 2. 进入 Erlang 编译 erl 代码：

	unix> erl
	Erlang (BEAM) emulator version 4.9.1.2

	Eshell V4.9.1.2 (abort with ^G)
	1> c(complex1).
	{ok,complex1}

Step 3. 运行并装入外部 C 程序：

	2> complex1:start("extprg").
	<0.34.0>
	3> complex1:foo(3).
	4
	4> complex1:bar(5).
	10
	5> complex1:stop().
	stop

或者将编译输出到 ebin 目录，再将此目录添加到 code path 列表：

	erlc -o ebin complex1.erl
	erl -pa ebin -s complex1 foo 3 -s init stop

注意，装入 C 程序指定的文件名不匹配会导致 `enoent` 错误，在 Windows 系统上可以省略 exe 扩展名。

如果，输入错误参数，会导致 port 进程挂掉，因为没有进行错误处理：

	> complex:bar(0.5).
	=ERROR REPORT==== 17-Jun-2020::04:53:35.026000 ===
	Bad value on output port 'extprg'


https://www.erlang.org/doc/man/erlang#open_port-2
otp-OTP-26.0.2\erts\preloaded\src\erlang.erl

```erlang
-spec open_port(PortName, PortSettings) -> port() when
      PortName :: {spawn, Command :: string() | binary()} |
                  {spawn_driver, Command :: string() | binary()} |
                  {spawn_executable, FileName :: file:name() } |
                  {fd, In :: non_neg_integer(), Out :: non_neg_integer()},
      PortSettings :: [Opt],
      Opt :: {packet, N :: 1 | 2 | 4}
           | stream
           | {line, L :: non_neg_integer()}
           | {cd, Dir :: string() | binary()}
           | {env, Env :: [{Name :: os:env_var_name(), Val :: os:env_var_value() | false}]}
           | {args, [string() | binary()]}
           | {arg0, string() | binary()}
           | exit_status
           | use_stdio
           | nouse_stdio
           | stderr_to_stdout
           | in
           | out
           | binary
           | eof
	   | {parallelism, Boolean :: boolean()}
	   | hide.

-spec erlang:ports() -> [port()].

-spec erlang:port_call(Port, Data) -> term() when
      Port :: port() | atom(),
      Data :: term().

-spec erlang:port_call(Port, Operation, Data) -> term() when
      Port :: port() | atom(),
      Operation :: integer(),
      Data :: term().

-spec erlang:port_info(Port) -> Result when
      Port :: port() | atom(),
      ResultItem :: {registered_name, RegisteredName :: atom()}
		  | {id, Index :: non_neg_integer()}
		  | {connected, Pid :: pid()}
		  | {links, Pids :: [pid()]}
		  | {name, String :: string()}
		  | {input, Bytes :: non_neg_integer()}
		  | {output, Bytes :: non_neg_integer()}
		  | {os_pid, OsPid :: non_neg_integer() | 'undefined'},
      Result :: [ResultItem] | 'undefined'.
      
-spec erlang:port_set_data(Port, Data) -> 'true' when
      Port :: port() | atom(),
      Data :: term().

-spec erlang:port_get_data(Port) -> term() when
      Port :: port() | atom().

-spec port_command(Port, Data) -> 'true' when
      Port :: port() | atom(),
      Data :: iodata().

-spec port_command(Port, Data, OptionList) -> boolean() when
      Port :: port() | atom(),
      Data :: iodata(),
      Option :: force | nosuspend,
      OptionList :: [Option].

-spec port_connect(Port, Pid) -> 'true' when
      Port :: port() | atom(),
      Pid :: pid().

-spec port_close(Port) -> 'true' when
      Port :: port() | atom().

-spec port_control(Port, Operation, Data) -> iodata() | binary() when
      Port :: port() | atom(),
      Operation :: integer(),
      Data :: iodata().

-spec whereis(RegName) -> pid() | port() | undefined when
      RegName :: atom().
```

Table 17.1:   Port Creation BIF

| Port Bif	| Description
| ------ |------- |
| open_port(PortName, PortSettings)	| Returns a port identifier Port as the result of opening a new Erlang port. Messages can be sent to, and received from, a port identifier, just like a pid. Port identifiers can also be linked to using link/1, or registered under a name using register/2.

Table 17.2:   Messages Sent To a Port

| Message	| Description
| --------- |--------- |
| {Pid,{command,Data}}	| Sends Data to the port.
| {Pid,close}			| Closes the port. Unless the port is already closed, the port replies with {Port,closed} when all buffers have been flushed and the port really closes.
| {Pid,{connect,NewPid}}	| Sets the port owner of Port to NewPid. Unless the port is already closed, the port replies with{Port,connected} to the old port owner. Note that the old port owner is still linked to the port, but the new port owner is not.

Table 17.3:   Messages Received From a Port

| Message		| Description
| --------- |--------- |
| {Port,{data,Data}}	| Data is received from the external program.
| {Port,closed}		| Reply to Port ! {Pid,close}.
| {Port,connected}	| Reply to Port ! {Pid,{connect,NewPid}}.
| {'EXIT',Port,Reason}		| If the port has terminated for some reason.

Table 17.4:   Port BIFs

| Port BIF		| Description	|
| --------- |--------- |
| port_command(Port,Data)	| Sends Data to the port.
| port_close(Port)		| Closes the port.
| port_connect(Port,NewPid)	| Sets the port owner of Portto NewPid. The old port owner Pid stays linked to the port and must call unlink(Port) if this is not desired.
| erlang:port_info(Port,Item)		| Returns information as specified by Item.
| erlang:ports()			| Returns a list of all ports on the current node.


## 🍀 Port Driver 动态链接程序
- http://erlang.org/doc/tutorial/c_portdriver.html
- http://erlang.org/doc/apps/erts/driver.html
- https://erlang.org/doc/efficiency_guide/drivers.html

Port Drivers API 相关文档：

1. Kernel erl_ddll https://www.erlang.org/doc/man/erl_ddll
2. ERTS driver_entry https://www.erlang.org/doc/man/driver_entry
3. ERTS erl_driver https://www.erlang.org/doc/man/erl_driver
4. Kernel global https://www.erlang.org/doc/man/global
5. Kernel net_adm https://www.erlang.org/doc/man/net_adm
6. Kernel pg https://www.erlang.org/doc/man/pg
7. Kernel rpc https://www.erlang.org/doc/man/rpc
8. STDLIB pool https://www.erlang.org/doc/man/pool
9. STDLIB slave https://www.erlang.org/doc/man/slave

> Warning
> Use this functionality with extreme care.
> 
> A driver callback is executed as a direct extension of the native code of the VM. Execution is not made in a safe environment. The VM cannot provide the same services as provided when executing Erlang code, such as pre-emptive scheduling or memory protection. If the driver callback function does not behave well, the whole VM will misbehave.
> 
> A driver callback that crash will crash the whole VM.
> 
> An erroneously implemented driver callback can cause a VM internal state inconsistency, which can cause a crash of the VM, or miscellaneous misbehaviors of the VM at any point after the call to the driver callback.
> 
> A driver callback doing lengthy work before returning degrades responsiveness of the VM, and can cause miscellaneous strange behaviors. Such strange behaviors include, but are not limited to, extreme memory usage, and bad load balancing between schedulers. Strange behaviors that can occur because of lengthy work can also vary between Erlang/OTP releases.

Port 的优势在于隔离性和安全性，因为外部程序的进程与 Erlang 虚拟机进程是两个完全独立的操作系统进程，任何异常都不会导致虚拟机崩溃，并且 Erlang 层通过 receive 来实现同步调用等待外部程序响应时，是不会影响 Erlang 虚拟机调度的。至于 Port 的缺点，主要是效率低，由于传递的是字节流数据，因此需要对数据进行序列化反序列化，Erlang 本身针对 C 和 Java 提供了对应的编解码库 ei 和 Jinterface。

Port Driver 则是通过链接程序装载到 Erlang 虚拟机进程同一内存空间下运行，属性于同一个操作系统进程。分为静态链接和动态链接两种，前者和虚拟机一起编译，在虚拟机启动时被加载，后者通过动态链接库的方式嵌入到虚拟机。出于灵活性和易用性的原因，通常使用动态链接库的形式。

除了进程的隔离性质差异，Erlang 虚拟机和 Port Driver 的交互方式与 Port 一样，Port 和 Port Driver 在 Erlang 层表现的语义一致。

Port Driver 动态链接库通过 erl_ddll:load_driver/2 方法加载，按规范导出入口函数，然后再调用 open_port({spawn, DriverName}) 打开相应的端口进行通信。

ERTS 5.9 (Erlang/OTP R15B) 开始，驱动接口作了更新，引入了版本管理，通过设置 ErlDrvEntry 结构体的 extended_marker 字段值为 `ERL_DRV_EXTENDED_MARKER` 来启用新规范。以及配置相应的适用版本号，ERL_DRV_EXTENDED_MAJOR_VERSION 和 ERL_DRV_EXTENDED_MINOR_VERSION。Erlang 运行时会根据驱动所指示扩展版本来选择加载或不加载。

旧版接口使用 erl_driver.h，适用于 ERTS v5.9 之前的版本。

驱动没有线程安全机制，不建议进行驱动之间的通信。

默认情况下，会应用驱动级别的锁，当然也可以使用 Port 级别的锁。默认设置下同时只有一个 Erlang 模块器线程会在驱动程序中执行。如果使用 Port 级别锁，则可心有多个模块器线程运行在驱动器上。不过，一次只有一个线程会调用对应于同一 Port 的驱动程序的回调。在驱动程序入口配置 `driver_entry` 设置驱动程序标志 driver_flags 为 ERL_DRV_FLAG_USE_PORT_LOCKING 即启用端口级锁定。当使用端口级锁定时，driver writer 负责同步对端口（驱动程序实例）共享的数据的所有访问。

如果使用驱动程序级锁定，在具有 SMP 构架支持的运行时系统存在之前编写的大多数驱动程序，都可以在具有 SMP 支撑的运行时体系中运行，而无需重写。


Port Driver 通过一个 `ErlDrvEntry` 结构体与虚拟机交互，该结构体注册了driver 针对各种虚拟机事件的响应函数。skynet 挂接 service 的思想大概也继承于此。driver entry 结构体定义在 `erl_driver.h` 主要成员如下：

```cpp
	typedef struct erl_drv_entry {
	int (*init)(void);
	/* called at system start up for statically
				   linked drivers, and after loading for
				   dynamically loaded drivers */ 

	#ifndef ERL_SYS_DRV
		ErlDrvData (*start)(ErlDrvPort port, char *command);
		/* called when open_port/2 is invoked. return value -1 means failure. */
	#else
		ErlDrvData (*start)(ErlDrvPort port, char *command, SysDriverOpts* opts);
		/* special options, only for system driver */
	#endif
		void (*stop)(ErlDrvData drv_data);
		/* called when port is closed, and when the emulator is halted. */
		void (*output)(ErlDrvData drv_data, char *buf, ErlDrvSizeT len);
		/* called when we have output from erlang to the port */
		void (*ready_input)(ErlDrvData drv_data, ErlDrvEvent event); 
		/* called when we have input from one of the driver's handles */
		void (*ready_output)(ErlDrvData drv_data, ErlDrvEvent event);  
		/* called when output is possible to one of the driver's handles */
		char *driver_name;		
		/* name supplied as command in open_port XXX ? */
		void (*finish)(void);        
		/* called before unloading the driver - DYNAMIC DRIVERS ONLY */
		void *handle;
		/* Reserved -- Used by emulator internally */
		ErlDrvSSizeT (*control)(ErlDrvData drv_data, unsigned int command,
					char *buf, ErlDrvSizeT len, char **rbuf,
					ErlDrvSizeT rlen); 
		/* "ioctl" for drivers - invoked by port_control/3 */
		void (*timeout)(ErlDrvData drv_data);	
		/* Handling of timeout in driver */
		void (*outputv)(ErlDrvData drv_data, ErlIOVec *ev);
		/* called when we have output from erlang to the port */
		void (*ready_async)(ErlDrvData drv_data, ErlDrvThreadData thread_data);
		void (*flush)(ErlDrvData drv_data);
		/* called when the port is about to be 
					   closed, and there is data in the 
					   driver queue that needs to be flushed
					   before 'stop' can be called */
		ErlDrvSSizeT (*call)(ErlDrvData drv_data,
				 unsigned int command, char *buf, ErlDrvSizeT len,
				 char **rbuf, ErlDrvSizeT rlen,
				 /* Works mostly like 'control', a synchronous call into the driver. */
				 unsigned int *flags); 

		void (*unused_event_callback)(void);

		int extended_marker;	/* ERL_DRV_EXTENDED_MARKER */
		int major_version;		/* ERL_DRV_EXTENDED_MAJOR_VERSION */
		int minor_version;		/* ERL_DRV_EXTENDED_MINOR_VERSION */
		int driver_flags;		/* ERL_DRV_FLAGs */
		void *handle2;              /* Reserved -- Used by emulator internally */

		void (*process_exit)(ErlDrvData drv_data, ErlDrvMonitor *monitor);
		/* Called when a process monitor fires */
		void (*stop_select)(ErlDrvEvent event, void* reserved);
		/* Called on behalf of driver_select when
					   it is safe to release 'event'. A typical
					   unix driver would call close(event) */
		void (*emergency_close)(ErlDrvData drv_data);
		/* called when the port is closed abruptly.
					   specifically when erl_crash_dump is called. */
		/* When adding entries here, dont forget to pad in obsolete/driver.h */
	} ErlDrvEntry;
```

该结构体比较复杂，主要原因是 Erlang Port Driver 支持多种运行方式：

- 运行于虚拟机调度线程的基本模式
- 基于 select 事件触发的异步 Driver
- 基于异步线程池的异步 Driver

三种模式的示例参考 Port Driver，How to Implement a Driver，Driver API 接口文档。Erlang 虚拟机提供的异步线程池可通过命令行 `+A size` 选项设置。

端口驱动的主要优势是效率高，但是缺点是链入的动态链接库本身出现内测泄露或异常，将影响虚拟机的正常运行甚至导致虚拟机崩溃。将外部模块的问题带入了虚拟机本身。对于耗时较长或阻塞的任务，应该通过异步方式设计，避免影响虚拟机调度。


以下是 C 语言实现的 Port Driver 程序，不含 foo 或者 bar 等演示函数的实现，所依赖的头文件和链接库位于 ERTS 安装目录下。

初始化使用宏函数 `DRIVER_INIT(example_drv)` 构造相应的初始化函数 example_drv driver_init，供 Erlang 调用以注册驱动程序信息，返回 ErlDrvEntry 实例中的 driver_name 字段值必需与方法参数一至。这个名字会作为 open_port 方法的命令参数使用。另外，应当作为动态链接库导出函数名称的前缀，如启动、停止方法 example_drv_start、example_drv_stop，以及 Erlang 端口数据到达时的回调方法 example_drv_output。

启动函数会在 open_port/2 调用时执行，其接收唯一的参数就是 Erlang Port 实例，`ErlDrvPort` 类型，需要保存下来，并作为返回值交给 Erlang 运行时。在进行消息通信时它会传入相应的消息答复函数，即 output 函数。在驱动程序中，消息通信的输入输出都在 Output 函数，它接收的参数就是 Erlang 发送的消息，调用 `driver_output` 函数就是返回响应消息。

示范代码中直接使用的 Port Drivers 接口方法有三个：

1. *driver_alloc()* 申请分配动态内存，由驱动程序进行管理；
2. *driver_free()* 在卸载驱动时被调用，需要在此释放申请到的动态内存；
3. *driver_output()* 输出响应 Erlang 的消息，输入参数即包含 Erlang 发送的消息。

在驱动程序中使用全局变量不是什么好点子，因为会有多进程的数据共享问题。

```cpp
/* port_driver.c */

#include <stdio.h>
#include "erl_driver.h"

typedef struct {
    ErlDrvPort port;
} example_data;

static ErlDrvData example_drv_start(ErlDrvPort port, char *buff)
{
    example_data* d = (example_data*)driver_alloc(sizeof(example_data));
    d->port = port;
    return (ErlDrvData)d;
}

static void example_drv_stop(ErlDrvData handle)
{
    driver_free((char*)handle);
}

static void example_drv_output(ErlDrvData handle, char *buff, 
			       ErlDrvSizeT bufflen)
{
    example_data* d = (example_data*)handle;
    char fn = buff[0], arg = buff[1], res;
    if (fn == 1) {
      res = foo(arg);
    } else if (fn == 2) {
      res = bar(arg);
    }
    driver_output(d->port, &res, 1);
}

ErlDrvEntry example_driver_entry = {
    NULL,			/* F_PTR init, called when driver is loaded */
    example_drv_start,	/* L_PTR start, called when port is opened */
    example_drv_stop,	/* F_PTR stop, called when port is closed */
    example_drv_output,	/* F_PTR output, called when erlang has sent */
    NULL,			/* F_PTR ready_input, called when input descriptor ready */
    NULL,			/* F_PTR ready_output, called when output descriptor ready */
    "example_drv",		/* char *driver_name, the argument to open_port */
    NULL,			/* F_PTR finish, called when unloaded */
    NULL,			/* void *handle, Reserved by VM */
    NULL,			/* F_PTR control, port_command callback */
    NULL,			/* F_PTR timeout, reserved */
    NULL,			/* F_PTR outputv, reserved */
    NULL,			/* F_PTR ready_async, only for async drivers */
    NULL,			/* F_PTR flush, called when port is about 
					to be closed, but there is data in driver queue */
    NULL,			/* F_PTR call, much like control, sync call to driver */
    NULL,			/* unused */
    ERL_DRV_EXTENDED_MARKER, 
    /* int extended marker, Should always be set to indicate driver versioning */
    ERL_DRV_EXTENDED_MAJOR_VERSION, 
    /* int major_version, should always be set to this value */
    ERL_DRV_EXTENDED_MINOR_VERSION, 
    /* int minor_version, should always be set to this value */
    0,				/* int driver_flags, see documentation */
    NULL,			/* void *handle2, reserved for VM use */
    NULL,			/* F_PTR process_exit, called when a monitored process dies */
    NULL				/* F_PTR stop_select, called to close an event object */
};

DRIVER_INIT(example_drv) /* must match name in driver_entry */
{
    return &example_driver_entry;
}
```

Port Drivers 互调用的 Erlang 端程序与 Port 互调用形式基本一致，只是增加了动态链接库的加载，调用 `erl_ddll:load_driver(Path, Name)` 函数完成加载。

```erlang
-module(complex5).
-export([start/1, stop/0, init/1]).
-export([foo/1, bar/1]).

start(SharedLib) ->
    case erl_ddll:load_driver(".", SharedLib) of
	ok -> ok;
	{error, already_loaded} -> ok;
	_ -> exit({error, could_not_load_driver})
    end,
    spawn(?MODULE, init, [SharedLib]).

init(SharedLib) ->
    register(complex, self()),
    Port = open_port({spawn, SharedLib}, []),
    loop(Port).

stop() ->
    complex ! stop.

foo(X) ->
    call_port({foo, X}).
bar(Y) ->
    call_port({bar, Y}).

call_port(Msg) ->
    complex ! {call, self(), Msg},
    receive
	{complex, Result} ->
	    Result
    end.

loop(Port) ->
    receive
	{call, Caller, Msg} ->
	    Port ! {self(), {command, encode(Msg)}},
	    receive
		{Port, {data, Data}} ->
		    Caller ! {complex, decode(Data)}
	    end,
	    loop(Port);
	stop ->
	    Port ! {self(), close},
	    receive
		{Port, closed} ->
		    exit(normal)
	    end;
	{'EXIT', Port, Reason} ->
	    io:format("~p ~n", [Reason]),
	    exit(port_terminated)
    end.

encode({foo, X}) -> [1, X];
encode({bar, Y}) -> [2, Y].

decode([Int]) -> Int.
```

从形式上，Port Driver 使用动态链接库不需要像 Port 方式那样需要使用入口函数，而是直接使用规范的 ouput 函数进行消息处理。逻辑结构上更清晰，代码也更容易管理。逻辑上，驱动程序只需要导出一个入口函数即可，即通过宏函数 DRIVER_INIT 构建的函数。

但是，因为动态链接库需要与 Erlang 运行时以同一进程运行，所以引入了潜在的风险，甚至是致使 Beam VM 宕机，驱动程序代码编写要求更高。在进行长时任务时，驱动程序回调会降低 VM 的响应能力，并可能导致各种奇怪的行为。这种奇怪的行为包括但不限于极端的内存使用和调度器之间糟糕的负载平衡。

程序编程与测试流程参考：

Step 1. Compile the C code:

```sh
unix> gcc -o example_drv.so -fpic -shared complex.c port_driver.c
windows> cl -LD -MD -Fe example_drv.dll complex.c port_driver.c
```

Step 2. Start Erlang and compile the Erlang code:

```sh
> erl
Erlang (BEAM) emulator version 5.1

Eshell V5.1 (abort with ^G)
1> c(complex5).
{ok,complex5}
```

Step 3. Run the example:

```sh
2> complex5:start("example_drv").
<0.34.0>
3> complex5:foo(3).
4
4> complex5:bar(5).
10
5> complex5:stop().
stop
```



## 🍀 driver_async & ready_async 

除了使用消息收发机制，还可以直接使用 port_control 函数与驱动程序进行同步通信：

```erlang
	port_control(Port, Operation, Data) -> iodata() | binary()
		Types
			Port = port() | atom()
			Operation = integer()
			Data = iodata()
```

Do not call port_control/3 with an unknown Port identifier and expect badarg exception. Any undefined behavior is possible (including node crash) depending on how the port driver interprets the supplied arguments.

Operation 和 Data 参数的含义取决于 Port，并非所有 Port Driver 都支持此特性，需要在 ErlDrvEntry 配置 control 回调函数。返回值是一个字节 0..255 或者 binary，其含义取决于 Port Driver。

Erlang 和驱动程序之间的所有通信都可以通过 port_control/3 完成，驱动程序使用 buf 指向的冲区返回消息数据。

异步通信则需要使用在 Driver 代码中配合 driver_async 方法实现 ready_async 回调函数，或者实现 ready_input 和 ready_output 回调函数。

使用 ready_async 进行异步消息处理时，只需要在 output 回调中调用 driver_async，并且将异步操作的回调函数传递给 Erlang，并由其进行调用，然后就可以在 ready_async 等待异步操作的数据返回时执行处理。


```cpp
	void (*output)(ErlDrvData drv_data, char *buf, ErlDrvSizeT len);
	/* called when we have output from erlang to the port */
	void (*ready_input)(ErlDrvData drv_data, ErlDrvEvent event); 
	/* called when we have input from one of the driver's handles */
	void (*ready_output)(ErlDrvData drv_data, ErlDrvEvent event);  
	/* called when output is possible to one of the driver's handles */
	void (*outputv)(ErlDrvData drv_data, ErlIOVec *ev);
	/* called when we have output from erlang to the port */
	void (*ready_async)(ErlDrvData drv_data, ErlDrvThreadData thread_data);

	ErlDrvSSizeT (*control)(ErlDrvData drv_data, unsigned int command,
				char *buf, ErlDrvSizeT len, char **rbuf, ErlDrvSizeT rlen);
	/* "ioctl" for drivers - invoked by port_control/3 */
```

How to Implement a Driver 文档演示如何只使用 port_control 实现消息通信，以及异步消息处理，Erlang 源代码中包含示范程序，编译它们需要用到 postgres 数据库接口的依赖文件，并且需要提供 erl_int_sizes_config.h 头文件配置各种数据类型大小，编译 Erlang 源代码时，会根据系统类型自动按模板脚本生成此配置头文件：

1. https://www.erlang.org/doc/apps/erts/driver.html
2. https://github.com/erlang/otp/blob/master/erts/example/pg_sync.c
2. https://github.com/erlang/otp/blob/master/erts/example/pg_async.c
2. https://github.com/erlang/otp/blob/master/erts/example/pg_async2.c
2. https://github.com/erlang/otp/blob/master/erts/example/next_perm.cc
3. OTP-26.0.2\erts\include\erl_int_sizes_config.h.in
3. OTP-26.0.2\erts\include\x86_64-unknown-linux-gnu\erl_int_sizes_config.h

```cpp
/* The number of bytes in a char.  */
#define SIZEOF_CHAR 1

/* The number of bytes in a short.  */
#define SIZEOF_SHORT 2

/* The number of bytes in a int.  */
#define SIZEOF_INT 4

/* The number of bytes in a long.  */
#define SIZEOF_LONG 8

/* The number of bytes in a long long.  */
#define SIZEOF_LONG_LONG 8

/* The size of a pointer. */
#define SIZEOF_VOID_P 8
```

其中一个示例演示了通过 C++ 库函数实现的 Next Permutation 算法来解决问题，假设问题使用的数组元素超过 10 万个。示范代码中使用了一些过时的 API，比如 `driver_output_term`，文档推荐使用 `erl_drv_output_term` 替代它。

使用 make 命令编译示范程序，原脚本要先行编译 Erlang 源代码以生成依赖的链接库：

	make ERL_TOP="/path/to/otp" next_perm.so

	make --makefile=makeme ERL_TOP="c:/program files/erl10.4" next_perm.so

也可以修改 Makefile 并存为副本 makeme，按当前系统中安装的 Erlang 自带的依赖文件来配置示范程序的编译。但是，还是遇到了问题，使用到的 erl_driver.h 中声明的外部函数会在链接阶段出现引用错误：

	next_perm.cc:115: undefined reference to `driver_async'
	next_perm.cc:134: undefined reference to `driver_mk_port'
	next_perm.cc:144: undefined reference to `erl_drv_output_term'

使用 objdump --syms ei.lib 查询导出的符号列表，也没有发现 erl_driver.h 声明的相关外部函数，可能是因为此导入库文件只是为 erl_interface 接口服务的。

动态连接库，Dynamic Link Libraraies 也叫做共享库 Shared Libraries。Windows 系统下使用 .dll 扩展名，Linux 系统下使用 .so 扩展名，是指不同的程序可以在运行时动态地链接，并调用库函数。由于不同程序都共享同一个共享库文件，所以可以节省空间。可以使用 nm 命令查看动态链接符号。与之相对的是静态库，编译程序时会和程序链接到一起，程序运行时不依赖外部文件。Windows 系统中静态库和共享库的导入库使用一样的 .lib 扩展名，Linux 系统中使用 .a 扩展名。

1. https://learn.microsoft.com/cpp/build/linking-an-executable-to-a-dll
2. https://www.sourceware.org/autobook/autobook/autobook_96.html#Using-GNU-libltdl

共享库有两种链接方式：

1. Explicit linking 隐式链接会的共享库会随程序运行时自动由操作系统加载；
2. Implicit linking 显式链接需要在程序运行时调用操作系统 API 加载；

在编译程序时，不需要对显式连接的共享库进行处理，而是用开发者自行调用系统 API 加载。这种技术通常用于插件机制，程序通过规定插件接口，就可以动态地加载按照插件接口开发的共享库。比如，GNU M4 1.5 版本就开始支持加载动态模块：

```sh
$ m4 --help
Usage: m4 [OPTION]... [FILE]...
...
Dynamic loading features:
  -M, --module-directory=DIRECTORY  add DIRECTORY to the search path
  -m, --load-module=MODULE          load dynamic MODULE from M4MODPATH
...
Report bugs to <bug-m4@gnu.org>.
```

而隐式链接共享库的函数就需要给链接程序指定导入库，Import Libraries，导入库包含共享库的信息，如果共享库的文件名，导出的函数符号等等。编译器遇到调用共享库中的外部函数时，并不知道库函数的地址，因为这些库函数是声明在头文件中的外部函数，只有函数签名声明。链接程序需要通过导入库 .lib 来获取这些外部函数的加载信息，如果缺失这些导入信息，编译器就会给出错误提示：引用符号没有定义。

```sh
# include $(ERL_TOP)/make/target.mk
# include $(ERL_TOP)/make/$(TARGET)/otp.mk

EI_ROOT = $(ERL_TOP)/lib/erl_interface-3.12
EI_INCLUDE = -I"$(ERL_TOP)/usr/include" -I"$(EI_ROOT)/include"
EI_LIB = -L"$(ERL_TOP)/usr/lib" -I"$(EI_ROOT)/lib" -lei

PQ_LIB = -lpq

OUR_C_FLAGS =  -g -Wall -fpic $(EI_INCLUDE)
CFLAGS += $(OUR_C_FLAGS)
CXXFLAGS += $(OUR_C_FLAGS)

TARGETS = matrix_nif.so pg_sync.so pg_async.so pg_async2.so next_perm.so

all: $(TARGETS)

clean:
	rm -f $(TARGETS) *.o
	rm -f pg_async2.so pg_encode2.beam pg_async2.beam
	rm -f core erl_crash.dump
	rm -f *~

pg_async2.o  pg_encode2.o: pg_encode2.h

pg_sync.o pg_async.o pg_encode.o: pg_encode.h

pg_async2.so: pg_encode2.o

pg_sync.so pg_async.so: pg_encode.o

pg_async2.so: pg_async2.o
	$(CC) $(CFLAGS) pg_encode2.o -shared $< $(EI_LIB) $(PQ_LIB) -o $@

# next_perm.so: next_perm.o
# 	$(CXX) $(CXXFLAGS) $<  -shared $(EI_LIB) -o $@

%.so: %.cc
	$(CXX) $(CXXFLAGS) $< -shared -o $@

%.so: %.o
	$(CC) $(CFLAGS) pg_encode.o -shared $< $(EI_LIB) $(PQ_LIB) -o $@

%: %.cc
	$(CXX) $(CXXFLAGS) $< -o $@
```


下一排列问题是指：给定大小为N的数组 `arr[]`，任务是按字典顺序打印给定数组的下一个较大排列。如果不存在任何更大的排列，则打印给定数组的字典式最小排列。

https://leetcode.cn/problems/next-permutation/
Given an array arr[] of size N, the task is to print the lexicographically next greater permutation of the given array. If there does not exist any greater permutation, then print the lexicographically smallest permutation of the given array.

整数数组的一个排列，就是将其所有成员以序列或线性顺序排列。字典序就是字符在字典出现的顺序，比如 0123456789abc 等等。

	字典序值 0	1	2	3	4	5
	排列    123	132	213	231	312	321

字典序值就是当前序列在字典序中的排列位置。那给定一个排列，我们应该如何求出它的字典序值呢？假设给定的内存容器固定，如何计算出指定的排列呢？

举例来说，全排列 {1,2,3} 按照字典序的排列分别有 123、132、213、231、312 和 321，其中 321 就是最大的字典序排列，123 就是最小的字典序排列，“下一个更大”的排列就是 132。类似地，[2,3,1] 的下一个更大的排列是 [3,1,2]，再下一个更大排列是 [3,2,1]，即最大的字典序排列。





## 🍀 Erl_Interface 接口编程
- http://gashero.yeax.com/?p=69
- https://www.erlang.org/doc/man/ei
- http://erlang.org/doc/tutorial/erl_interface.html
- http://erlang.org/doc/apps/erl_interface/ei_users_guide.html
- http://erlang.org/doc/apps/jinterface/jinterface_users_guide.html

Erl_Interface 接口库简称 ei，包含的函数接口可以帮助你用 C 语言开发 Erlang 模块，此接口的功能如下：

- 在 C 语言中操作 Erlang 的数据类型；
- 在 C 语言和 Erlang 之间转换数据格式；
- 在传送或保存数据对 Erlang 数据类型进行编码和解码；
- 在 C nodes 和 Erlang 进程间通信；
- 从 Mensia 中恢复或保存 C node 的状态；

注意，Erl_Interface 库默认只兼容同版本 Erlang/OTP 组件。旧版的组件通信可以参考 ei_set_compat_rel 函数。https://www.erlang.org/doc/man/ei#ei_set_compat_rel

官方文档按 Erl_Interface 工作流程进行讨论：

- 编译包含 Erl_Interface 的 C 代码；
- 初始化 Erl_Interface；
- 编码与解码和发送 Erlang terms；
- 建立 terms 和模式 patterns；
- 模式匹配 Pattern matching；
- 连接到分布式 Erlang 节点；
- 使用 Erlang Port Mapper Daemon (EPMD)
- 向 Erlang 发送或接收消息；
- 运程过程调用 RPC - Remote procedure calls；
- 使用全局模块名称 Using global names；
- 使用注册模块，OTP 24 可能会移除此功能；

编写 Erl_Interface 接口程序，需要使用相应的链接库和头文件，可以使用 `code:rootdir()` 来获取 Erlang 的安装目录，其子目录 lib 包含所有模块的文件。

1. lib\erl_interface-3.12\include\ei.h
2. lib\erl_interface-3.12\include\erl_interface.h

在执行 C 编译命令时将模块的 include 目录路径添加到搜索列表：

```sh
gcc -I/path/to/erl_interface/include -L/path/to/erl_interface/lib -lei myprog.c    
```

在一些系统上，可能还需要链接额外的系统库实现 Erl_Interface 的通信，比如 Solaris 系统：libnsl.a 和 libsocket.a；Windows 系统：wsock32.lib。

Erl_Interface 接口程序开发与 C 语言编写的 Port 程序具有类似的 Erlang 代码，差异在于使用的数据编码。Erl_Interface 接口是 byte-oriented，在打开 Port 时需要使用 binary 方式，同时消息处理中也需要使用 binary 数据。

```erlang
	-module(complex).
	-export([start/1, stop/0, init/1]).
	-export([foo/1, bar/1]).

	start(ExtPrg) -> spawn(?MODULE, init, [ExtPrg]).
	stop() -> complex ! stop.

	foo(X) -> call_port({foo, X}).
	bar(Y) -> call_port({bar, Y}).

	call_port(Msg) ->
		complex ! {call, self(), Msg},
		receive
		{complex, Result} ->
			Result
		end.

	init(ExtPrg) ->
		register(complex, self()),
		process_flag(trap_exit, true),
		% Port = open_port({spawn, ExtPrg}, [{packet, 2}]),     % C Port Version
		Port = open_port({spawn, ExtPrg}, [{packet, 2}, binary]), % Erl_Interface Version
		loop(Port).

	loop(Port) ->
		receive
		{call, Caller, Msg} ->
			% Port ! {self(), {command, encode(Msg)}},        % C Port Version
			% receive                                  %
			% {Port, {data, Data}} ->                    %
			% 	Caller ! {complex, decode(Data)}              %
			% end,                                    %
			Port ! {self(), {command, term_to_binary(Msg)}},    % Erl_Interface Version
			receive
			  {Port, {data, Data}} ->
			    Caller ! {complex, binary_to_term(Data)}
			end,
			loop(Port);
		stop ->
			Port ! {self(), close},
			receive
			{Port, closed} ->
				exit(normal)
			end;
		{'EXIT', Port, Reason} ->
			io:fwrite(Reason),
			exit(port_terminated)
		end.

	% encode({foo, X}) -> [1, X];  % C Port Version
	% encode({bar, Y}) -> [2, Y].
	% decode([Int]) -> Int.
```
以下是相应的 C 语言实现的主程序，其它函数，比如 read_cmd() 或者 write_cmd() 等等，都和 C Port Example 中使用的代码相同。

```cpp
/* ei.c */

#include "ei.h"
#include <unistd.h>
#include <string.h>
#include <stdlib.h>

typedef unsigned char byte;

int read_cmd(byte *buf);
int write_cmd(byte *buf, int len);
int foo(int x);
int bar(int y);

static void fail(int place) {
    fprintf(stderr, "Something went wrong %d\n", place);
    exit(1);
}

int main() {
    byte buf[100];
    int index = 0;
    int version = 0;
    int arity = 0;
    char atom[128];
    long in = 0;
    int res = 0;
    ei_x_buff res_buf;
    ei_init();
    while (read_cmd(buf) > 0) {
        if (ei_decode_version(buf, &index, &version) != 0)
            fail(1);
        if (ei_decode_tuple_header(buf, &index, &arity) != 0)
            fail(2);
        if (arity != 2)
            fail(3);
        if (ei_decode_atom(buf, &index, atom) != 0)
            fail(4);
        if (ei_decode_long(buf, &index, &in) != 0)
            fail(5);
        if (strncmp(atom, "foo", 3) == 0) {
            res = foo((int)in);
        } else if (strncmp(atom, "bar", 3) == 0) {
            res = bar((int)in);
        }
        if (ei_x_new_with_version(&res_buf) != 0)
            fail(6);
        if (ei_x_encode_long(&res_buf, res) != 0)
            fail(7);
        write_cmd(res_buf.buff, res_buf.index);

        if (ei_x_free(&res_buf) != 0)
            fail(8);
        index = 0;
    }
}
```

示范代码使用到的 Erl_Interface API 说明：

2. *ei_init* 接口初始化，内部会调用 `ei_init_connect()` 和 `ei_init_resolve()`。
3. *ei_decode_version* 解码消息数据头部的魔术字，版本与 ERL_VERSION_MAGIC 匹配才认可。
4. *ei_decode_tuple_header* 解码一个 tuple 头部。
5. *ei_decode_atom* 解码一个 atom 数据。
6. *ei_decode_long* 解码一个 long 数据。
1. *ei_x_buff* 定义一个包含 buffsz 和 index 属性的消息回复缓存区结构。
7. *ei_x_new_with_version* 申请分配用于回复缓冲区的内存空间。
8. *ei_x_encode_long* 将一个 long 类型数据编码后写入回复缓冲区。
9. *ei_x_free* 释放接口分配的内存。

接口内部定义了一个 `get8(s)` 和 `get32be(s)` 宏函数，它会从 s 指针指向的内存读取一个字节或者一个机器字，并将 s 地址加一个偏移值。

解析消息要与 Erlang 发送过来的 tuple 消息数据类型一致，它应该有两个元素，{PID, {command, data}}，如果不匹配就不予通过。tuple 头部首字节会有 'h' 和 'i' 两种情况，对应 `ERL_SMALL_TUPLE_EXT` 和 `ERL_LARGE_TUPLE_EXT`，根据此值调用 get8 或 get32be。后续一个字(节)对应 arity，即元素个数。解码方法都会相应修改 index 值，确保它指向缓冲区中下一个待处理数据的位置。

使用 *ei_x_new()* 申请动态内存，而 *ei_x_new_with_version*  则表示设置好 ERL_VERSION_MAGIC。Erlang 加载 Eri_Interface 程序后，就会通过外部程序的标准输入文件 stdin 来发送消息，回复消息数据通过 C 语言标准库函数 write 写入标准输出文件 stdout。


5.3  Running the Example

Step 1. Compile the C code. This provides the paths to the include file ei.h, and also to the library ei:

```sh
unix> gcc -o extprg -I/usr/local/otp/lib/erl_interface-3.9.2/include \ 
      -L/usr/local/otp/lib/erl_interface-3.9.2/lib \ 
      complex.c erl_comm.c ei.c -lei -lpthread
```

In Erlang/OTP R5B and later versions of OTP, the include and lib directories are situated under OTPROOT/lib/erl_interface-VSN, where OTPROOT is the root directory of the OTP installation (/usr/local/otp in the recent example) and VSN is the version of the Erl_interface application (3.2.1 in the recent example).

In R4B and earlier versions of OTP, include and lib are situated under OTPROOT/usr.

Step 2. Start Erlang and compile the Erlang code:

```sh
unix> erl
Erlang (BEAM) emulator version 4.9.1.2

Eshell V4.9.1.2 (abort with ^G)
1> c(complex2).
{ok,complex2}
```

Step 3. Run the example:

```sh
2> complex2:start("./extprg").
<0.34.0>
3> complex2:foo(3).
4
4> complex2:bar(5).
10
5> complex2:bar(352).
704
6> complex2:stop().
stop
```





# 🚩 OAM Principles
- [Erlang -- OAM Principles](http://erlang.org/doc/oam/oam_intro.html)
- [ASN.1 Reference Manaual](https://erlang.org/doc/man/asn1ct.html)

这些朴实无华的，看上去似乎没什么大不了的句子，构成了 erlang 世界的基石。
Erlang/OTP 中的 OAM - Operation and Maintenance 框架，是由通用模型构成的协议无关的管理子系统。

模型的主要概念是不绑定具体的网络管理协议 management protocol，只定义应用程序接口 API 来适配管理协议。每个 OAM 组件作为子程序实现，可以包括在管理程序内。

OAM 是一个典型的 C/S 客户对主机架构，管理程序作为 Client 角色，它向作为 Server 的代理 Agent 发请求，以访问管理信息。

与一般的 C/S 架构相比，有两个基本的差别：

- 少量的 Managers 与大量的 Agents 通信；
- Agents 可以自然向 Managers 发送通告；

使用到的术语 Terminology：

- `Manager` 通常是 `NMS` - Network Management System，为操作呈现数据；
- `Agent` 则是在 `NE` - Network Element 内执行的实体，在 Erlang/OTP 的 NE 可以是分布系统；
- 管理信息在 `MIB` - Management Information Base 定义，Manager 通过各种管理协议，如 SNMP, CMIP, HTTP, CORBA 访问 MIB，通常，MIB 中定义的实体称为 Managed Objects (MOs)。在 SNMP 协议中有 `ASN.1` 子协议，在 CMIP 中有 `GDMO` 子协议，而 HTTP 隐含使用 CORBA 作为 IDL。

通用对象请求代理体系 CORBA - Common Object Request Broker Architecture，是由对象管理组 OMG - Object Management Group 制定的一种标准的面向对象分布式应用程序体系规范，旨在为异构分布式环境中，硬件和软件系统的互联而提出的一种解决方案。解决异构分布式系统两条主要原则：

- 寻求独立于平台的模型和抽象，这样有助于解决大部分问题。
- 在不牺牲太多性能的前提下，尽可能隐藏底层的复杂细节。


# 🚩 SNMP
- []()
- [SNMP Reference Manual - SNMP(App)](https://erlang.org/doc/apps/snmp/index.html)
- [SNMP - Simple Network Management Protocol User's Guide](https://erlang.org/doc/apps/snmp/users_guide.html)
- [SNMP module](https://erlang.org/doc/man/snmp.html)




# 🚩 OS Monitor
- [OS_Mon Reference Manual](https://erlang.org/doc/man/os_mon_app.html)
- [Erlang top](https://erlang.org/doc/apps/observer/etop_ug.html)
- https://www.cnblogs.com/me-sa/archive/2012/11/22/erlang_vm_monitor_text_mode.html

Erlang 提供 os_mon 系统监控服务程序，用于监测系统信息的服务，分成四个模块提供的四种监测服：

| 模块		| 支持平台	| 功能		|
| :-------	| :-------	| :-------	|
| `cpu_sup`	| Unix	| 监测 CPU 负载和使用率	|
| `disksup`	| Unix、Windows	| 监测磁盘	|
| `memsup`	| Unix、Windows、VxWorks	| 监测内存	|
| `os_sup`	| Solaris、Windows	| 监测系统日志	|

使用 os_mon 进行监测前，必须启动监测服务程序，因为 os_mon 服务依赖于 sasl 服务程序，先必须启动 SASL 程序，否则会返回 `{error,{not_started,sasl}}` 错误：

	> erl
	Eshell V10.4  (abort with ^G)
	1> application:start(sasl).
	ok
	2> application:start(os_mon).
	ok
	3> =INFO REPORT==== 24-Jun-2020::00:15:56.709000 ===
		alarm_handler: {set,{{disk_almost_full,"C:\\"},[]}}

默认会启动 cpu_sup、disksup 和 memsup 三种服务，如果需要启动相应监测服务，可以修改 Erlang 安装目录下的 os_mon.app 配置参数，如 `{start_os_sup, true}`：

	{application, os_mon,
	   [{description, "CPO  CXC 138 46"},
		{vsn, "2.5"},
		{modules, [os_mon, os_sup,
				   disksup, memsup, cpu_sup, os_mon_sysinfo, nteventlog]},
		{registered, [os_mon_sup, os_mon_sysinfo, disksup, memsup, cpu_sup, 
					  os_sup_server]},
		{applications, [kernel, stdlib, sasl]},
		{env, [
			{start_cpu_sup, true},
			{start_disksup, true},
			{start_memsup, true},
			{start_os_sup, false}]},
		{mod, {os_mon, []}},
		{runtime_dependencies, ["stdlib-2.0","sasl-2.4","kernel-3.0","erts-6.0"]}]}.


etop 进程监视，类似 Unix 的 top 命令；

	etop:start().
	etop:config(lines,5).

由于 etop 本身执行会阻塞输入，可以创建一个进程做这个事情：

	spawn(fun() -> etop:start([{output, text}, {interval, 20}, {lines, 20}, {sort, memory}]) end).


在 5.8.3 版本中 `cpu_sup` 监测只能用于 Solaris 和 Linux 操作系统，负载值与 Unix 进程运行前在队列中的排队时间成正比，因此值越大意味着负载越高，返回值除以 256 为 rup 和 top 命令中显示的值。avg1/0, avg5/0 和 avg15/0 函数计算负载，util/0 和 util/1 函数计算 CPU 使用率。在 Linux 系统中，必须保证 /proc 文件目录能被 cpu_sup 服务访问，如果不能监测服务会停止。

模块中的函数列表

- `nprocs()` -> UnixProcesses or {error, Reason} 返回 UNIX 进程数
- `avg1()` -> SystemLoad or {error, Reason} 返回最后 1 分钟系统的负载
- `avg5()` -> SystemLoad or {error, Reason} 返回最后 5 分钟系统的负载
- `avg15()` -> SystemLoad or {error, Reason} 返回最后 15 分钟系统的负载
- `util()` -> CpuUtil or {error, Reason} 返回 CPU 使用率
- `util(Opts)` -> UtilSpec or {error, Reason} 返回 CPU 使用率的详细信息

调用这些函数取 CPU 监测数据时，如果前后两次调用，数值没有变化时显示为 0。


磁盘空间监测服务 `disksup` 定期检查磁盘，对于每个磁盘或分区，在它使用超过一定的可用空间量，通过 `{{disk_almost_full，MountedOn}，[]}` 设置产生报警。在 Unix 下所有的本地磁盘都会被监测，包括存在的交换分区。在 WIN32 下所有类型为 FIXED_DISK 逻辑驱动器都会被检查。

配置监控间隔时间和阀值，监测间隔时间，单位为分钟，默认为30分钟。监测阀值，磁盘使用率达到多少时产生告警，默认为 80，单位是百分比:

	disk_space_check_interval = int()>0
	disk_almost_full_threshold = float()


模块中的函数列表

- `get_disk_data()` -> [DiskData] 返回最后一次磁盘检查结果
- `get_check_interval()` -> MS 获取监测间隔时间，单位是毫秒
- `set_check_interval(Minutes)` -> ok 设置监测间隔时间，重启程序后失效
- `get_almost_full_threshold()` -> Percent 获取监测阀值，为磁盘使用率
- `set_almost_full_threshold(Float)` -> ok 设置监测阀值，服务重启后，设置失效，使用默认值


系统内存和各个进程内存的使用率监控服务 `memsup` 适用于 Unix、Windows 和 VxWorks 系统，定时监测内存。

如果内存使用超过系统分配的一定值，通过 `{system_memory_high_watermark, []}` 设置产生告警。

如果系统中任何 Erlang 进程使用内存超过在总内存中的一定百分比，通过设置 `{process_memory_high_watermark,Pid}` 产生告警。

配置监测间隔时间和阀值，以分钟为刻度，默认为1分钟

	memory_check_interval = int()>0

内存使用阀值，默认为80，单位是百分比

	system_memory_high_watermark = float()

单个 Erlang 进程使用阀值，默认为5，单位是百分比

	process_memory_high_watermark = float()

等待监测结果的超时时间，默认为30秒

	memsup_helper_timeout = int()>0

设置是否只监控系统内存使用率还是同时监测Erlang进程内存使用率，默认为false

	memsup_system_only = bool()

模块中的函数列表

- `get_check_interval()` -> MS 获取监测间隔时间，单位毫秒
- `get_helper_timeout()` -> Seconds 获取监测数据返回等待时间
- `get_memory_data()` -> {Total,Allocated,Worst} 获取系统总内存，使用内存，每个Erlang进程的使用内存
- `get_os_wordsize()` -> Wordsize 获取操作系统的位数
- `get_procmem_high_watermark()` -> int() 获取每一进程内存使用告警阀值
- `get_sysmem_high_watermark()` -> int() 获取系统内存使用阀值
- `get_system_memory_data()` -> MemDataList 获取系统内存使用的详细信息
- `set_check_interval(Minutes)` -> ok 设置监测间隔时间，单位分钟
- `set_helper_timeout(Seconds)` -> ok 设置监测数据返回等待时间
- `set_procmem_high_watermark(Float)` -> ok 设置每一进程内存告警阀值
- `set_sysmem_high_watermark(Float)` -> ok 设置系统内存使用阀值



# 🚩 Erlang Kernel
- [ERTS - Erlang Run-Time System Application](http://erlang.org/doc/apps/erts/erl_ext_dist.html)
- [Lukas Larsson - Understanding the Erlang Scheduler](https://www.bilibili.com/video/BV15W411Y7Tq)
- [Everything](https://www.voidtools.com/zh-cn/support/everything/)
- [Erlang OTP 源码阅读指引](https://www.cnblogs.com/me-sa/p/erlang_source_code_guide.html)
- [英雄远征 Erlang 项目源码分析](https://blog.csdn.net/s291547/article/details/88935204)
- [官网下载源代码](http://www.erlang.org/download.html)
- [start_erl](http://erlang.org/doc/man/start_erl.html)
- [C/Java Interoperability Tutorial](http://erlang.org/doc/tutorial/introduction.html)
- [「译」懂点那啥编译 Compilers for Free](https://zhuanlan.zhihu.com/p/148451115)
- [Compilers for Free](https://codon.com/compilers-for-free)
- [How to Build Erlang/OTP on Windows](https://erlang.org/doc/installation_guide/INSTALL-WIN32.html)
- [Building and Installing Erlang/OTP](https://erlang.org/doc/installation_guide/INSTALL.html)


> 庄子说：“吾生也有涯，而知也无涯，以有涯随无涯，殆已！”

原代码是好，人生有限，所以各取所需就好，且读且珍惜吧。

Erlang 是解析型语言，也是强类型语言，它不会以做隐式的类型变换。像 Java 语言一样，也使用虚拟机技术 BEAM Virtual Machine，先是将 erl 源代码文件编译成字节码，再由 BVM 执行。

Erlang OTP 源码量不小，好的工具能帮我们查看代码时省很多时间，比如支持文件夹查找或者项目内搜索的 Sublime，在代码之间各种跳转更是减少很多麻烦。如果是在 Windows 环境中 Everything 这样的工具也是定位文件利器。

Erlang OTP 源代码编译在 Linux 系统上完成，在 Windows 10 系统上，可以安装 WSL 环境。Windows Subsystem for Linux。


大体上 otp_src 的代码组织如下，与我们每天写代码最息息相关的是 ERTS 和 lib 两个目录：

- `erts` 包含了 ERTS - Erlang Run-Time System 运行时系统代码，是基础设施；
- `lib` 包含了所有的外围类库实现，有些类库的安排是违反直觉的，不过习惯了就好了，比如 file.erl 不是在 stdlib 而是在 kernel。gen_server 和 gen_fsm 的代码实现应该是在 kernel 吧? 错，它们的代码是在 stdlib 下。但是呢 application.erl 是在 kernel。

Erlang 运行时有一个 kernel application，运行一下 appmon 我们可以动态看到 kernel 涉及到的代码模块。我们大致可以揣摩到设计者的规划原则，kernel 的范畴包含了 application 管理，code 生命周期管理，IO 包含文件和网络等，io_request，HIPE，分布式基础设施等等。

`kernel` 模块分解：

	- Kernel APP 部分
		- kernel.erl
		- kernel_config.erl
		- kernel.appup.src
		- kernel.app.src

	- application 管理
		- application_controller.erl
		- application_starter.erl
		- application_master.hrl
		- application_master.erl
		- application.erl
		- heart.erl

	- HIPE
		- hipe_ext_format.hrl
		- hipe_unified_loader.erl

	- Logging
		- disk_log.erl
		- disk_log_sup.erl
		- disk_log_server.erl
		- disk_log_1.erl
		- disk_log.hrl
		- error_logger.erl
		- wrap_log_reader.erl

	- Debug
		- error_handler.erl
		- erts_debug.erl
		- standard_error.erl
		- seq_trace.erl

	- File IO
		- file.erl
		- file_server.erl
		- file_io_server.erl
		- ram_file.erl

	- Network IO
		- gen_sctp.erl
		- gen_udp.erl
		- gen_tcp.erl
		- inet.erl
		- inet_config.hrl
		- inet_config.erl
		- inet_boot.hrl
		- inet6_udp.erl
		- inet6_tcp_dist.erl
		- inet6_tcp.erl
		- inet6_sctp.erl
		- inet_db.erl
		- inet_dns.hrl
		- inet_dns.erl
		- inet_gethost_native.erl
		- inet_udp.erl
		- inet_tcp_dist.erl
		- inet_tcp.erl
		- inet_sctp.erl
		- inet_res.hrl
		- inet_res.erl
		- inet_parse.erl
		- inet_int.hrl
		- inet_hosts.erl
		- inet_dns_record_adts.pl
		- erl_reply.erl
		- net_kernel.erl
		- net_adm.erl
		- net.erl

	- IO Request
		- user_drv.erl
		- user.erl
		- user_sup.erl
		- group.erl 

	- Code 生命周期管理
		- code.erl
		- code_server.erl
		- erl_boot_server.erl
		- erl_ddll.erl

	- distribute 管理
		- dist_util.erl
		- dist_ac.erl
		- Distributed Applications Controller
		- erl_distribution.erl
		- erl_epmd.erl
		- rpc.erl
		- pg2.erl
		- global_search.erl
		- global_group.erl
		- global.erl
		- auth.erl

	- OS
		- os.erl

相比 kernel，`stdlib` 模块恰如起名包含了绝大多数的功能模块，比如 lists、ets 和各种数据结构实现。当然最重要的是它包含了 OTP 的 `gen_server`、 `gen_fsm`、 `gen_event`、 `supervisor` 以及幕后英雄 `proc_lib` 和 `sys`。

特别值得一提的是 shell 和 shell_default，对 Erlang Shell 好奇的同学看看这里能找到答案。所谓 EShell 里面灵异的问题也就有了一个合理的解释。其它的模块因为功能特别明确很容易定位到，比如专门处理 XML 的 xmerl，数据库 mnesia 等等，辅之以 Google 几乎没有什么障碍。

## 🍀 Power on BEAM VM
- [透析器 dialyzer](https://cloud.tencent.com/developer/section/1122978)
- https://www.cnblogs.com/zhengsyao/archive/2012/08/15/Erlang-otp_start_up.html
- http://erlang.org/doc/man/ct_run.html
- http://erlang.org/doc/man/typer.html
- http://erlang.org/doc/man/dialyzer.html

在 Linux 系统上，有一个 erl 脚本启动 Erlang 虚拟机，脚本执行设置所需的一系列环境变量，然后调用可执行文件 erlexec。

etc 目录下除了提供虚拟机的运行入口，还提供许多应用程序，基本上包含 main 函数的文件都是一个程序，整个源代码会提供以下工具或命令 它们可以在手册中找到：

- `ct_run` Program used for starting Common Test from the OS command line.
- `epmd` Erlang Port Mapper Daemon.
- `erl` The Erlang emulator.
- `dialyzer` 静态分析工具，用于识别单个 Erlang 模块或整个应用程序中的软件差异
- `erlc` The Erlang compiler.
- `erlsrv` Run the Erlang emulator as a service on Windows.
- `escript` Erlang scripting support.
- `run_erl` Redirect Erlang input and output streams on Unix systems.
- `start` OTP start script example for Unix..
- `werl` The Erlang Emulator with Windows GUI.

在 Windows 系统上，直接运行 erl.exe 或 werl.exe，入口点代码在 `erts/etc` 目录下，根据不同的系统，编译时生成各个平台的依赖文件：

- Linux/Unix 平台入口点 `otp_src_23.0/erts/emulator/sys/unix/erl_main.c` 
- Windows 平台入口 `otp_src_23.0/erts/emulator/sys/win32/erl_main.c` 

beam 进程的入口点在 erl_main.c 这个文件中，main 函数只有一行：

	erl_start(argc, argv);

通过 erl_start 这个函数真正进入 Erlang 虚拟机的世界了，它定义在 otp_src_23.0\erts\emulator\beam\erl_init.c。Erlang 虚拟机初始化相关的代码基本上都在这个文件中。

	int ncpu = early_init(&argc, argv);
	erl_init(ncpu...);
	init_shared_memory(boot_argc, boot_argv);
	load_preloaded();
	erts_initialized = 1;
	erl_first_process_otp("otp_ring0", NULL, 0, boot_argc, boot_argv);
	erts_start_schedulers();
	erts_sys_main_thread();

- early_init() 函数进行一些非常底层的初始化工作，处理一些和 Erlang 虚拟机本身的初始化操作，例如各种数据结构的初始化。

- init_shared_memory()进行一些和内存回收相关的初始化。

- load_preloaded() 函数将需要预加载的 Erlang 模块加载至虚拟机。需要预加载的模块都在 erts/preloaded/ebin 目录下。由于在 build Erlang/OTP 的时候，本地应该还没有 Erlang 编译器，所以这个目录下提供的都是编译好的 .beam 文件。这些模块的源码位于 erts/preloaded/src 目录。预加载模块在 build 的时候由工具程序 make_preload 生成 C 语言文件硬编码在虚拟机中了。如果想要修改预加载的文件，例如在里面加上 erlang:display() 表达式打印调试信息，可以修改 src 中的文件，然后通过编译器 erlc 生成 .beam 文件保存在 erts/preloaded/ebin 目录下覆盖原来的文件，再 build 即可。

在预加载的文件夹中可以看到，预加载的有以下模块：

- erl_prim_loader：主要加载器，负责所有模块的加载
- erlang：对虚拟机提供的一些BIF的接口
- init：init进程的代码
- otp_ring0：Erlang虚拟机中第一个进程的代码，启动init
- prim_file：文件操作接口
- prim_inet：网络操作接口
- prim_zip：压缩文件操作接口
- zlib：zlib库

把这些必要模块都加载至虚拟机之后，通过 `erl_first_process_otp()` 函数创建了 Erlang 虚拟机上的第一个进程，调用 otp_ring0 模块中的 start/2 函数运行 init 模块的 boot/1 函数，之后开始 Erlang/OTP 系统的引导过程。

创建了第一个进程之后，进程还不能运行，因为还没有创建调度器。`erts_start_schedulers()` 根据 CPU 的核心数和用户通过参数设置的数值启动某个数目的调度器线程。每一个调度器都在一个线程中运行。调度器挑选要执行的进程，然后执行进程，当进程的 reds 用完或进程等待 IO 挂起的时候再挑选另一个进程执行。以后再撰文详细分析Erlang调度器的工作原理。运行了 erts_start_schedulers() 函数之后Erlang虚拟机才真正运转起来。

启动调度器之后，调用 `erts_sys_main_thread()` 函数，也就是说 beam 进程的主线程进入了 `erts_sys_main_thread()` 函数，下面简单分析一下：

	void erts_sys_main_thread(void)
	{
		erts_thread_disable_fpe();
		smp_sig_notify(0); /* Notify initialized */
		while (1) {
			/* Wait for a signal to arrive... */
			select(0, NULL, NULL, NULL, NULL);
		}
	}

这个函数很简单，屏蔽浮点数异常、通知信号处理线程已经完成了初始化，然后进入一个死循环等待信号。这个 select 调用表示永远等待文件 IO 操作，但是什么文件也不等，只是把线程挂起，但是这个函数在收到信号的时候会返回。

这里顺便提一下 Erlang 虚拟机中的信号处理。在之前初始化的时候，设置了信号处理函数，也就是通过函数 `init_break_handler()` 设置了一些信号的处理函数。这些信号处理函数收到了信号之后实际上将信号通过管道转发给了一个专门处理信号的线程，之前在调用 `early_init()` 的时候创建了这个线程，这个信号处理线程运行的函数是 `signal_dispatcher_thread_func()`，这个函数是一个死循环，等待从管道中读取值。虚拟机的主线程通过 `smp_sig_notify()` 函数将通知消息写入管道发给信号处理线程。

从 Erlang 虚拟机处理信号的方式可以看出，这种处理方式也是 Erlang 提倡的进程间通信方式。

在 Linux 中，我们可以使用 select 函数实现 I/O 端口的复用，传递给 select函数的参数会告诉内核：

- 我们所关心的文件描述符
- 对每个描述符，我们所关心的状态。(我们是要想从一个文件描述符中读或者写，还是关注一个描述符中是否出现异常)
- 我们要等待多长时间。(我们可以等待无限长的时间，等待固定的一段时间，或者根本就不等待)

从 select 函数返回后，内核告诉我们一下信息：

- 对我们的要求已经做好准备的描述符的个数
- 对于三种条件哪些描述符已经做好准备.(读，写，异常)

有了这些返回信息，我们可以调用合适的 I/O 函数(通常是 read 或 write)，并且这些函数不会再阻塞.

	#include <sys/select.h>   

	int select(int maxfdp1, fd_set *readset, fd_set *writeset, fd_set *exceptset,struct timeval *timeout);

Erlang 虚拟机很像一个运行了操作系统的计算机。erl 对应的是 BIOS，erlexec 加载对应 bootloader。erlexec 加载 BEAM 虚拟机，BEAM 虚拟机对应了操作系统。接下来 BEAM 进行初步的初始化，初始化执行环境，对应了操作系统的初始化。初始化完成之后，BEAM 像 Linux 一样加载系统中的第一个进程 init。init 进程读取启动列表，执行启动系统的步骤。执行完这些步骤之后，Erlang 成为了一个完全完成了初始化过程可以运行的系统。Erlang 像操作系统一样，有自己的调度系统，内存管理系统，还有和外界交互的 I/O 系统。只不过内存管理系统更加的智能，可以主动帮助进程进行垃圾回收。I/O 系统以系统服务的方式存在，通过 Erlang 消息通信的方式向其他进程提供服务，因此 Erlang 的进程只需要通过消息这一种语义就能和外界交换数据。Erlang 中的模块就好像操作系统中的动态共享库，只要加载到系统中，就可以供所有的进程访问。多个模块可以组织为应用程序。Erlang 的模块命名是平坦的，因此不同应用程序中的模块不能重名。Erlang 的应用程序是对模块和进程的一种组织方式，从一个应用程序可以包含一组进程的角度看，Erlang 的应用程序有点类似于 Linux 系统中的进程。
   

## 🍀 Source Basic

介绍 erts/emulator/beam 目录部分文件，这里的代码涉及 BEAM 中间代码的实现：
 
- atom.names  罗列了 ERTS 使用到的 atom
- bif.tab	内置函数清单 Built-in function，大概分成三类，各种数据实现的内置函数对应了不同的 `erl_bif_*.c` 文件

	- `ubif`:   Use for operators and guard BIFs.
	- `hbif`:   Use for BIFs that perform garbage collection or need up-to-date information on where they were called from.
	- `bif`:    Use for all other BIFs.

- `sys.h` 定义基本类型结构，如 Eterm、BeamInstr，基本类型 UInt、SInt、Uint32、 Sint32、 Uint16、 Sint16。
- `big.c` 大数值计算实现
- `erl_term.h` Erlang Term 的构造定义，包括了各种 Term 的比特位定义，如 PID 的结构：

		PID layout (internal pids):

		|3 3 2 2 2 2 2 2|2 2 2 2 1 1 1 1|1 1 1 1 1 1    |               |
		|1 0 9 8 7 6 5 4|3 2 1 0 9 8 7 6|5 4 3 2 1 0 9 8|7 6 5 4 3 2 1 0|
		|               |               |               |               |
		·-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-·
		|n n n n n n n n n n n n n n n n n n n n n n n n n n n n|0 0|1 1|
		·-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-·

		n : number


如何使用源代码，这里举两个例子，通过阅读源代码来解决深层疑问。

第一个例子，lists:append 函数是如何实现的？

首先，使用 Sublime 的文件定义功能，Ctrl-P，根据关联的文件名很容易找到 `lists.erl`。 

	otp_src_23.0\lib\stdlib\src\lists.erl

再使用 Sublime 的符号定位，Ctrl-R，可以快速定位到 Funcition: append，注意，需要先行安装 SublimeErlang 插件。

	append(L1, L2) -> L1 ++ L2.

我们发现其实 append 就是使用的 ++ 运算符，它又是在哪里实现的呢？这要涉及 bif 内置函数的使用，在 erts/emulator/beam 目录下面，可以看到一系列 `erl_bif_*.c` 文件，这里可以找到对应模块的 bif 实现。打开，`erl_bif_lists.c`:

	/* erlang:'++'/2
	 *
	 * Adds a list to another (LHS ++ RHS). For historical reasons this is
	 * implemented by copying LHS and setting its tail to RHS without checking
	 * that RHS is a proper list. [] ++ 'not_a_list' will therefore result in
	 * 'not_a_list', and [1,2] ++ 3 will result in [1,2|3], and this is a bug that
	 * we have to live with. */

是不是很快就找到我们想要的代码了?对，就是源代码注解部分提示了。

比较有趣的一个地方是这两句:

	copy = last = CONS(hp, CAR(list_val(list)), make_list(hp + 2));
	list = CDR(list_val(list));

有同学说,CAR CDR CONS这三个东西好熟悉啊?对,没错,这就是Lisp列表操作的三个基础原语,分别实现取表头,取表头外剩余部分,表构造(constructs),跳转到它们的实现,在erl_term.h:

	#define CONS(hp, car, cdr) \
			(CAR(hp)=(car), CDR(hp)=(cdr), make_list(hp))
	 
	#define CAR(x)  ((x)[0])
	#define CDR(x)  ((x)[1])


第二个例子 看看 `process` 的定义是什么样的，首先在 `erl_process.h` 找到 Process 的定义

	typedef struct process Process;

转到 struct process 的定义:

```C
	struct process {
		ErtsPTabElementCommon common; /* *Need* to be first in struct */

		/* All fields in the PCB that differs between different heap
		 * architectures, have been moved to the end of this struct to
		 * make sure that as few offsets as possible differ. Different
		 * offsets between memory architectures in this struct, means that
		 * native code have to use functions instead of constants.
		 */

		Eterm* htop;		/* Heap top */
		Eterm* stop;		/* Stack top */
		Eterm* heap;		/* Heap start */
		Eterm* hend;		/* Heap end */
		Eterm* abandoned_heap;
		Uint heap_sz;		/* Size of heap in words */
		Uint min_heap_size;         /* Minimum size of heap (in words). */
		Uint min_vheap_size;        /* Minimum size of virtual heap (in words). */
		Uint max_heap_size;         /* Maximum size of heap (in words). */

	#if !defined(NO_FPE_SIGNALS) || defined(HIPE)
		volatile unsigned long fp_exception;
	#endif

	#ifdef HIPE
		/* HiPE-specific process fields. Put it early in struct process,
		   to enable smaller & faster addressing modes on the x86. */
		struct hipe_process_state hipe;
	#endif

		/*
		 * Saved x registers.
		 */
		Uint arity;			/* Number of live argument registers (only valid
					 * when process is *not* running).
					 */
		Eterm* arg_reg;		/* Pointer to argument registers. */
		unsigned max_arg_reg;	/* Maximum number of argument registers available. */
		Eterm def_arg_reg[6];	/* Default array for argument registers. */

		BeamInstr* i;		/* Program counter for threaded code. */
		Sint catches;		/* Number of catches on stack */
		Sint fcalls;		/* 
					 * Number of reductions left to execute.
					 * Only valid for the current process.
					 */
		Uint32 rcount;		/* suspend count */
		int  schedule_count;	/* Times left to reschedule a low prio process */
		Uint reds;			/* No of reductions for this process  */
		Uint32 flags;		/* Trap exit, etc */
		Eterm group_leader;		/* Pid in charge (can be boxed) */
		Eterm fvalue;		/* Exit & Throw value (failure reason) */
		Uint freason;		/* Reason for detected failure */
		Eterm ftrace;		/* Latest exception stack trace dump */

		Process *next;		/* Pointer to next process in run queue */

		ErtsSignalPrivQueues sig_qs; /* Signal queues */
		ErtsBifTimers *bif_timers;	/* Bif timers aiming at this process */

		ProcDict  *dictionary;       /* Process dictionary, may be NULL */

		Uint seq_trace_clock;
		Uint seq_trace_lastcnt;
		Eterm seq_trace_token;	/* Sequential trace token (tuple size 5 see below) */

	#ifdef USE_VM_PROBES
		Eterm dt_utag;              /* Place to store the dynamc trace user tag */
		Uint dt_utag_flags;         /* flag field for the dt_utag */
	#endif
		union {
			struct process *real_proc;
		void *terminate;
		ErtsCodeMFA initial;	/* Initial module(0), function(1), arity(2),
									   often used instead of pointer to funcinfo
									   instruction. */
		} u;
		ErtsCodeMFA* current;	/* Current Erlang function, part of the funcinfo:
					 * module(0), function(1), arity(2)
					 * (module and functions are tagged atoms;
					 * arity an untagged integer).
					 */

		/*
		 * Information mainly for post-mortem use (erl crash dump).
		 */
		Eterm parent;		/* Pid of process that created this process. */

		Uint32 static_flags;        /* Flags that do *not* change */

		/* This is the place, where all fields that differs between memory
		 * architectures, have gone to.
		 */

		Eterm *high_water;
		Eterm *old_hend;            /* Heap pointers for generational GC. */
		Eterm *old_htop;
		Eterm *old_heap;
		Uint16 gen_gcs;		/* Number of (minor) generational GCs. */
		Uint16 max_gen_gcs;		/* Max minor gen GCs before fullsweep. */
		ErlOffHeap off_heap;	/* Off-heap data updated by copy_struct(). */
		ErlHeapFragment* mbuf;	/* Pointer to heap fragment list */
		ErlHeapFragment* live_hf_end;
		ErtsMessage *msg_frag;	/* Pointer to message fragment list */
		Uint mbuf_sz;		/* Total size of heap fragments and message fragments */
		erts_atomic_t psd;		/* Rarely used process specific data */

		Uint64 bin_vheap_sz;	/* Virtual heap block size for binaries */
		Uint64 bin_old_vheap_sz;	/* Virtual old heap block size for binaries */
		Uint64 bin_old_vheap;	/* Virtual old heap size for binaries */

		ErtsProcSysTaskQs *sys_task_qs;
		ErtsProcSysTask *dirty_sys_tasks;

		erts_atomic32_t state;  /* Process state flags (see ERTS_PSFLG_*) */
		erts_atomic32_t dirty_state; /* Process dirty state flags (see ERTS_PDSFLG_*) */

		ErtsSignalInQueue sig_inq;
		ErlTraceMessageQueue *trace_msg_q;
		erts_proc_lock_t lock;
		ErtsSchedulerData *scheduler_data;
		erts_atomic_t run_queue;

	#ifdef CHECK_FOR_HOLES
		Eterm* last_htop;		/* No need to scan the heap below this point. */
		ErlHeapFragment* last_mbuf;	/* No need to scan beyond this mbuf. */
		ErlHeapFragment* heap_hfrag; /* Heap abandoned, htop now lives in this frag */
	#endif

	#ifdef FORCE_HEAP_FRAGS
		Uint space_verified;        /* Avoid HAlloc forcing heap fragments when */ 
		Eterm* space_verified_from; /* we rely on available heap space (TestHeap) */
	#endif

	};
```

## 🍀 BEAM Virtual Machine Data Types
- [BEAM Wisdoms](http://beam-wisdoms.clau.se/en/latest/index.html)
- [BEAM Wisdoms Indepth Memory Layout](http://beam-wisdoms.clau.se/en/latest/indepth-memory-layout.html)
- [Erlang 数据类型的内部表示和实现](https://www.cnblogs.com/zhengsyao/p/erlang_eterm_implementation_2.html)
- [Erlang binary 数据类型的表示和实现](https://www.cnblogs.com/zhengsyao/p/erlang_eterm_implementation_5_binary.html)

Erlang 中的变量在绑定之前是自由的，非绑定变量可以绑定一次任意类型的数据。为了支持这种类型系统，Erlang 虚拟机采用的实现方法是用一个带有标签 `tag` 和值 `value` 或称为属性元 `arity` 的机器字表示所有类型的数据，这个机器字就叫做 `term`。

在 32 位机器上，一个 term 为 32 位宽，其中 tag 占最低有效位的 4-bit 用来区分类型，也就是说最多有 32 种 Term 定义。

在 64 位机器上，一个 term 默认为 64 位宽，Erlang 虚拟机支持一种 hybrid heap 混合堆模式，混合使用 32-bit 和 64-bit 位宽，因为有一些 term 类型并不需要 64 位宽，如果在 64 位系统下统一使用 64 位宽的 term，会造成一定程度的内存浪费。由于混合堆模式显然会使得虚拟机更复杂，因此属于一种实验性质的优化措施，默认是关闭的。

- 对于 `atom` 的 term 值是全局 atom 表中的一个索引值，对应了一个 atom 值。
- 对于 `integer` 的 term 值就是它的整形数值。
- 对于 `big` 数值，term 值就是指向一个 heap object 堆对象的指针，这个对象包含这个数的符号和它占用的机器字数。
- 对于 `list` 的 term 值就是指向两连续 tagged objects 的指针，这两个对象就是 list 的头部和尾部。
- 对于 `tuple` 的 term 值就是指向一个 heap object 的指针，它包含了 tuple 的大小，紧跟着 tuple 的元素。
- 对于 `float` 的 term 值就是指向一个 heap object 的指针，它包含了 two-word 双机器字的浮点数。
- 对于 `process` 的 term 值就是进程标识符本身。

来看看 `erl_term.h` 中定义的内部数据类型，结合 BEAM Wisdoms Indepth Memory Layout 中的图文理解它在内存中的结构：

- `Immediate`

	立即数，分为 IMMED1、IMMED2 两种，一个机器字长度，有 local pid, local port, small integer, atom, `NIL` 即空列表 `[]`，还有 catch (internal value)。

- `List` 

	列表是一个指向 Cons 胞元的指针，即两个连续的对象，各占用一个机器字，一个是列表头，一个是列表尾。列表通过它们链接，直到 non-list term 对于 improper lists，或者直到一个 NIL 对于 proper lists。

	我们在生成一个列表的时候，会采用这样的语法：L = [Head | Tail]，Head 表示要添加到头部的单个元素，Tail 表示另一个列表。这种 Head 和 Tail 的组合称为一个 Cons 连续单元。在函数式语言里面，获得 Head 的操作称为 CAR，获得 Tail 的操作称为 CDR。

- `Boxed` 

	装箱数据 Box 是占用一个机器字的指针，指向 heap 或其它位置，它总是指向一个区域，数据以 Header 开头，除非在 GC 期间，此时会指向 `THE_NON_VALUE` 或另一个装箱数据 Box。

- `Header` 

	是装箱数据的组成部分，占用的一组机器字，在第一个机器字中包含 `arity` 属性元，或称数据值，最低有效位的 6-bit 作为 tag 标签使用，其中的 2-bit 是 `TAG_PRIMARY`，紧跟的 4-bit 是 Header Tag。Header 应该是最复杂的一种数数据，只能在堆内存中出现，在首个机器字中余下的比特位，即除去 6-bit 标签位后的比特位都用来表示 arity 值。对于一个 map，用不同的公式计算 arity 值，参考 `MAP_HEADER_ARITY` 宏定义。

	Header Tag 可以用来标记各种对象的起点，如 tuple 元组的 arityval、冻结变量闭包 fun、 正负分开保存的 bigint、 float、 export、 refvalue、 refcounted binary、 HEAP_BINARY、 subbinary、 external pid、 port、 ref、 内部对象 matchstate 和 map。在 `erl_temr.h` 可以找到 HEADFER 的结构定义。

- `Tuple` 

	元组的大小就是 arity 值加一个机器字的头部，还有一个机器字指针指向 tuple box。

- `Float` 

	浮点数总是 64-bit 加一个机器字头部，还有一个机器字指针指向 float box。

- `Big Integer`

	大数占用 ceil(log2^64(Number)) Words + 1 Word header，所以，64-bit 内的整形占用一个机器字，65-127bit 占用 2 个机器字，如此。还有 +1 Word 保存指向 bigint box 的指针。


Eterm 是一个打了标签的机器字，Erlang 虚拟机可以通过标签的具体内容判断 Eterm 的类型，并且针对不同类型的 Eterm 采取不同的解释。给机器字打标签的意义实际上就是把机器字中的 term 中几个 bit 位专用做标签位。那么机器字中剩下的表示实际信息的位数就减少了，因此 Eterm 采用的标签方案必须简洁高效。

为了高效使用标签位，Eterm 采用了层次化的标签方案。

	% otp_src_23.0\erts\emulator\beam\erl_term.h
	#define _TAG_PRIMARY_SIZE	2
	#define _TAG_PRIMARY_MASK	0x3
	#define TAG_PRIMARY_HEADER	0x0
	#define TAG_PRIMARY_LIST	0x1
	#define TAG_PRIMARY_BOXED	0x2
	#define TAG_PRIMARY_IMMED1	0x3

	% otp_src_23.0\lib\hipe\rtl\hipe_tagscheme.erl
	-define(TAG_PRIMARY_SIZE,   2).
	-define(TAG_PRIMARY_MASK,   16#3).
	-define(TAG_PRIMARY_HEADER, 16#0).
	-define(TAG_PRIMARY_LIST,   16#1).
	-define(TAG_PRIMARY_BOXED,  16#2).
	-define(TAG_PRIMARY_IMMED1, 16#3).

首层标签符号及宏定义及应用可以在 `erl_map.c`、 `erl_term.h` 找到，叫做 `TAG_PRIMARY`，占用 Eterm 的最低有效位的 2-bit，因此有 4 种组合：

- `TAG_PRIMARY_HEADER` 00 

	表示装箱数据 Boxed 的组成，这些对象在 Erlang 虚拟机内都称为 THING，还有细分为 EXTERNAL THINGS。标签位紧接 4-bit 是一个 Header Tag 表示已装箱的数据类型，注意，这种 Term 消耗了 6-bit 位作为标签使用，具体定义 `erl_term.h` 文件找。例如，Header Tag 为值 0 表示这是一个 arity 值，即 `ARITYVAL` 标签，它对应的符号定义有两个 `ARITYVAL_SUBTAG`、`_TAG_HEADER_ARITYVAL`。BIGNUM 表示一个大数，它有一个比特位来表示正负。当 Header Tag 不够用时，`REF` 和 `EXTERNAL_REF` 合并。

		HEADER representation:
		
		aaaaaaaaaaaaaaaaaaaaaaaaaatttt00	arity:26, tag:4
		
		HEADER tags:
		
		0000	ARITYVAL
		0001	BINARY_AGGREGATE	|
		001x	BIGNUM with sign bit|
		0100	REF					|
		0101	FUN					| THINGS
		0110	FLONUM				|
		0111	EXPORT				|
		1000	REFC_BINARY			|			|
		1001	HEAP_BINARY			| BINARIES	|
		1010	SUB_BINARY			|			|
		1011	Not used
		1100	EXTERNAL_PID		|                 |
		1101	EXTERNAL_PORT		| EXTERNAL THINGS |
		1110	EXTERNAL_REF		|                 |
		1111	MAP
		
		XXX: globally replace XXX_SUBTAG with TAG_HEADER_XXX


- `TAG_PRIMARY_LIST` 01 

	表示一个列表，剩下的 62-bit 指向一个连续单元 Cons 的指针。由于一个机器字是 64 位，所以 Eterm 必然采用 8 字节对齐，因而必然也是 4 字节对齐。而这里的指针只能指向一个 Eterm，所以借用 2 个位用作标签不会影响指针的精度，在使用的时候在后面填两个 0 就好了。

- `TAG_PRIMARY_BOXED` 10 

	表示一个装箱对象，即无法在一个机器字中表示一个位数为 World - 4-bit，即 28-bit 或 60-bit 的对象。剩下的 62-bit 位指针指向 boxed 头部对象 `TAG_PRIMARY_HEADER`。

- `TAG_PRIMARY_IMMED1` 11 

	表示保存一个 62-bit 立即数 immediate，保存小型对象，如 small integers, local pids and ports, atoms, empty list NIL 等等。

	立即数在剩下的 62 个位中，又借了 2 个位作为标签用来区分立即数的类别，那么共 4-bit 的 tag 含义如下：

	- 0011 本地的 pid
	- 0111 本地的 port
	- 1011 细分的立即数 IMMED2，即在剩下的 60 个位中进一步打标签表示更小的立即数
	- 1111 带符号的小整数，去掉符号位，还剩 59 位。

在玩 Erlang 的时候，我们每时每刻都会见到 pid 的身影，比如说刚打开 Erlang 的 shell 时，调用 self() 就能看到当前 shell 进程的 pid，例如 <0.32.0>，在 `erl_temr.h` 可以找到 Pid 的结构定义。

目前不论是在 64 位系统还是 32 位系统上，新旧两种 pid 表达的宽度都是 32-bit，因此在 64 位系统上只用了 Eterm 的一半。除了 4-bit 标签，剩下的 28 位中，固定地分为两段了，一段是 `Serial`，一段是 `Number`。

在 pid 的三段式表示法中，tag 点用 4-bit，中间那一段是 Number，右边那一段是 Serial。目前在代码中将 Number 部分宽度定义为 15 位，可以表示最大值 2^15 - 1 = 32767，所以当系统进程编号使用超过的时候，就会进位到 Serial 部分。

	
	PID layout (internal pids):
	
	|3 3 2 2 2 2 2 2|2 2 2 2 1 1 1 1|1 1 1 1 1 1    |               |
	|1 0 9 8 7 6 5 4|3 2 1 0 9 8 7 6|5 4 3 2 1 0 9 8|7 6 5 4 3 2 1 0|
	|               |               |               |               |
	+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
	|n n n n n n n n n n n n n n n n n n n n n n n n n n n n|0 0|1 1|
	+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
	
	n : number
	
	Very old pid layout:
	
	|3 3 2 2 2 2 2 2|2 2 2 2 1 1 1 1|1 1 1 1 1 1    |               |
	|1 0 9 8 7 6 5 4|3 2 1 0 9 8 7 6|5 4 3 2 1 0 9 8|7 6 5 4 3 2 1 0|
	|               |               |               |               |
	+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
	|s s s|n n n n n n n n n n n n n n n|N N N N N N N N|c c|0 0|1 1|
	+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
	
	s : serial
	n : number
	c : creation
	N : node number

在分布式 Erlang 的环境中，建立两个节点，如果在一个节点上把 pid 放在消息中发送至另外一个节点上的进程，在另一个节点上打印出这个 pid，就会发现第一段的数字变成了一个非零的值。没错，这个值就是和节点有关，具体意义见后。可是我们在上面的 pid Eterm 结构中并没有看到用于保存节点的空间，这是因为 local pid 当做消息发送给远程节点之后，Erlang 的分布式机制会对 pid 做打包处理，外部节点收到之后会重组为表示外部 pid 的新的 Eterm，这个 Eterm 就不是立即数了，变成了一个 boxed。

要注意的是，Number 部分并不表示系统最大进程数的限制，Number 部分和 Serial 部分的长度是在编译的时候通过宏写死的。pid 最多有 28 个有效位，这些位构成的数据经过一定的变换可以成为进程表中的索引。进程表就是一个巨大的指针数组，每一个指针都指向一个进程的描述符，数组中包含的元素个数等于系统允许的最大进程数。目前默认最大进程数为 262144，也就是 18 位。最大进程数可以在启动的时候通过虚拟机参数 +P 设置。要注意，由于进程表是静态分配的，每一条 slot 都要占用 8 字节（实际上由于用空间换时间的优化，每一个进程的 slot 要占用 16 字节），所以最大进程数也不要太大了。Erlang 允许 pid 的这 28 位中最多拿出 27 位表示进程的索引，即最大允许 2^27 - 1 个进程，那么如果真地设置这么大的限值，进程表本身就要占用 2^27×2^3×2=2GB 内存。

以前 pid 里面的高 28 位直接作为进程表的指针。在 R16B 引入了进程表多核访问相关的优化之后，为了避免多个调度器线程同时写入进程表时造成 cache 失效引发的性能降低，连续 pid 对应的指针在进程表中的 slot 中间都间隔了 cache 线。也就是说第一个进程的指针占用第一条 cache 线的第一个位置，第二个进程就跳到第二条 cache 线了。直到所有 cache 线都用完，再跳回第一条 cache 线中的第二个位置分配新的进程指针。因此采用了这种优化之后 pid 的数据值需要做简单的变换才能得到真正的进程表索引。


port 和 pid 结构定义差不多，也是 32 位，只是不区分 Serial 和 Number，整个有效位都作为 Number，所以我们打印 port 的时候得到的是像 #Port<0.52> 这样的结果，只分了两个段。第二个段就是 Number 的值。第一个段和 pid 是一样的，在本地永远打印出 0，发送到外部节点之后，会变成另一个 boxed Eterm。

Erlang 中 port 表的实现用的就是进程表的实现，即 `erl_ptab.h` 头文件中定义的 ErtsPTab 数据结构，因此各种限制和优化和进程表都是一样的。


Erlang 里面立即数的类别不算少，采用了多级标签的方式，一些不需要那么多位的小数据类型，就放在 `IMMED2` 这一级了。按前标签分级，`TAG_PRIMARY_IMMED1` - `IMMED2` 立即数级别在 1011 的基础上再增加 2-bit 标签位分别表示 3 种数据类型：

- 001011 `atom` 重要的原子类型，随处可见。

- 011011 `catch`

	用于表示 Erlang 中 catch 语句的代码的 Eterm，这个 Eterm 只会出现在进程的栈上。这个数据类型属于 Erlang 虚拟机内部使用的数据类型，Erlang 程序不会直接操作或使用这个数据类型。由于这个数据类型涉及到 Erlang 内部的 Beam 字节码以及虚拟机的执行机制，分解它需要弄清楚虚拟机执行机制的所有细节。

- 111011 `NIL`

	表示空指针。虽然 NIL 是打标签的值，但是 Erlang 虚拟机中还是专门定义了一个值表示 NIL，也就是除了 6-bit 标签位之外其全部填 1。

在 Erlang 里 atom 真是抬头不见低头见，可以通过 atom 来表示各种意义的常量。在其他语言，例如 C/C++ 中使用 #define 宏定义，enum 枚举，或者用 const 常量等方法实现类似的功能。使用这些方法的时候，总会觉得不是太舒服，比如使用 #define 宏定义和 const 常量，除了本来就头痛的给宏或常量命名之外，还要真正填上一个值，为了让这些值不冲突，又是一件头痛的事情了。如果用字符串吧，那么每次匹配的时候还要做低效的字符串操作。

在 Erlang 中，使用 atom 既方便又高效，我们就来看看 atom 是怎么实现的。atom 定义中，除去 6-bit 标签之外剩下的部分就是 atom 在 Erlang 虚拟机中的索引，也就是一个整数值。在 Erlang 中，有关 atom 比较的操作只需要比较两个索引值即可，就是整数操作，因此非常高效。atom 本身是一个字符串，那么 atom 的索引是怎样对应上具体的字符串的呢？也就是需要实现字符串和索引值之间的互相映射，字符串和索引值都必须唯一，这显然需要使用散列表。Erlang 虚拟机内实现了一套通用的索引和散列表机制，atom 表就是这个机制的一个客户。

在一个 Erlang 节点内，atom 表是全局共享的，因此多个线程对 atom 表的访问是通过读写锁保护的。对 atom 表的操作绝大部分都是读操作，只有真正插入新的 atom 时的操作才是写操作，插入新 atom 的情况一般不频繁，而且也很少有多个线程争抢着插入新 atom 的情况，大部分情况都是试图插入 atom 但是发现其实已经存在了，因此 atom 表使用的读写锁是针对读操作优化的读写锁。使用针对读操作优化的读写锁时读锁的开销非常小，即使是在大量线程争用的情况下。

Erlang 中的 atom 表是不进行垃圾回收的，毕竟在程序员不滥用 atom 的情况下，atom 数目可以控制在合理范围内。而且跟踪每一个 atom 的引用状况会产生很大的开销。所以不要滥用 atom，把 atom 表塞满是把 Erlang 虚拟机 crash 掉的一种方法。目前默认的 atom 数目限制是 1048576（1024×1024），通过虚拟机的 +t 参数可以设置。


`binary` 是 Erlang 中一个具有特色的数据结构，用于处理大块的原始的字节块。如果没有 binary 这种数据类型，在 Erlang 中处理字节流的话可能还需要像列表或元组这样的数据结构。根据之前对这些数据结构 Eterm 的描述，数据块中的每一个字节都需要一个或两个机器字来表达，明显空间利用率低，因此 binary 是一种空间高效的表示形式。

在 binary 对字节序列处理能力的基础上，Erlang 进一步泛化 binary 的功能，提供了 `bitstring` 数据结构，让开发者能打破字节的边界，能在 bit 层面上操作原始数据块。bitstring 的 bit 层次的模式匹配功能特别适用于网络编程中网络协议数据包的解析和文件解析等操作。

`HEAP_BINARY` 是直接放在进程堆中的 binary，结构较简单，就好像其他 boxed 数据结构一样，第一个字的标签表示了这个对象的类型，arity 表示后面跟了几个字。第二个字则表示这个 binary 中的字节数 size。接下来就是 arity - 1 个字，从低地址到高地址原样保存了 binary 数据的拷贝。

由于 HEAP_BINARY 直接放在堆中，属于小数据，进程间要发送这种 binary 消息的时候会涉及到复制，因此目前 Erlang 虚拟机代码中将 HEAP_BINARY 大小限定为 64 字节。在创建 binary 的时候，如果事先确定 binary 中数据字节数小于等于 64 字节，那么 Erlang 虚拟机就会选择在堆中直接创建 HEAP_BINARY。

如果在创建 binary 的时候，确定 binary 中数据的字节数大于 64 字节，那么 Erlang 虚拟机就会创建 `REFC_BINARY`。

`REFC_BINARY` 保存在 Erlang 虚拟机内存中，进程之间可以共享这种 binary。当一个 Erlang 进程给另一个 Erlang 进程发送这种 binary 的时候，理想情况下只需要发送一个引用即可，因此可以避免复制的开销和内存的开销。由于这种 binary 是可以被多个进程共享的，因此为了跟踪这种 binary 的使用，Erlang 虚拟机采用了引用计数的方式，因此这种 binary 得名为 REFC_BINARY，即 `reference-counted binary` 的意思。

由于 REFC_BINARY 是共享的，所以需要通过两个部分描述，一个部分是 binary 数据本身，另一个部分是对 binary 数据的引用，这是通过 Erlang 进程堆中的 `ProcBin` 对象记录处理的，可以在 `global.h` 找到定义。

	/*
	 * This structure represents one type of a binary in a process.
	 */

	typedef struct proc_bin {
		Eterm thing_word;	/* Subtag REFC_BINARY_SUBTAG. */
		Uint size;			/* Binary size in bytes. */
		struct erl_off_heap_header *next;
		Binary *val;		/* Pointer to Binary structure. */
		byte *bytes;		/* Pointer to the actual data bytes. */
		Uint flags;			/* Flag word. */
	} Pr

ProcBin 对象是在进程堆中的 boxed 对象，并且通过 next 指针串联起来了。进程控制块中有一个 ErlOffHeap 数据，这个数据是进程所有 off-heap（即“堆外”）数据的链表的头，first 指向第一个 ProcBin。

ProcBin 对象的第一个字就是标准的 boxed 对象头。接下来的 size 表示 ProcBin 指向的 Binary 对象的实际字节数，next 指向进程中的下一个 ProcBin，val 指向共享内存区域中的实际 Binary 对象，bytes 则指向实际 Binary 对象中的真正的数据块。flags 是 ProcBin 相关的标志位，和 binary 操作的优化有关。

上面我们讨论了两种包含真实数据的 `HEAP_BINARY` 和 `REFC_BINARY`，它们都是装箱数据的容器，分别对应了 boxed 对象的 header 标签 1000 和 1001。除此之外，我们还可以在 header 标签的列表中看到另外两种和 binary 相关的 header：表示 binary 匹配状态的 0001，以及表示 `SUB_BINARY` 的 1010。这两种 binary 对象本身并不包含实际的 binary 数据，而是引用其他 binary 中的部分数据。

此外，bitstring 的实现也和 SUB_BINARY 有关，在 `erl_bits.h` 找到 `ErlSubBin` 定义：


	/*
	 * This structure represents a SUB_BINARY.
	 *
	 * Note: The last field (orig) is not counted in arityval in the header.
	 * This simplifies garbage collection.
	 */

	typedef struct erl_sub_bin {
		Eterm thing_word;	/* Subtag SUB_BINARY_SUBTAG. */
		Uint size;			/* Binary size in bytes. */
		Uint offs;			/* Offset into original binary. */
		byte bitsize;
		byte bitoffs;
		byte is_writable;	/* The underlying binary is writable */
		Eterm orig;			/* Original binary (REFC or HEAP binary). */
	} ErlSubBin;

SUB_BINARY 表示 binary 中的部分内容。比如我们调用 BIF split_binary/2 的时候，如果参数正确，会将原来的 binary 分割为两个部分，得到两个 SUB_BINARY。

假设，这个 BIF 调用当然可以创建两个新的 HEAP_BINARY 或 REFC_BINARY，然后分别将对应的数据复制到两个新的 binary。由于 Erlang 中的变量都是 immutable 的，所以我们可以认为一个 binary 在创建了之后不会被修改。因此，这种创建新 binary 并复制的操作显然是低效且浪费空间的。

为了在分割 binary 的时候能复用原有的数据，Erlang 虚拟机内部引入了 SUB_BINARY 类型。Erlang 的 split_binary/2 调用生成的就是两个 SUB_BINARY，并将 `ErlSubBin` 的 offs 设置为一个正确的偏移值以正确获取到引用的 binary 数据，然后将这两个 SUB_BINARY 放在一个二元组中返回给调用者。


和其他 boxed 对象的结构体一样，`thing_word` 是 boxed 对象的 header。`size` 表示这个 SUB_BINARY 引用的数据的大小，`offs` 表示这个 SUB_BINARY 引用的具体 binary 中的偏移值。`bitsize` 和 `bitoffs` 跟 `bistring` 有关。`is_writable` 表示引用的那个 binary 是否可写，这个值和 binary 的拼接优化有关。`orig` 则指向原始的那个带有具体数据的 binary。

SUB_BINARY 还有一个重要的用途，就是支持 bitstring，在 Erlang 虚拟机内部实际上也是靠 binary 支撑的，即实际数据都保存在 Binary 对象中。对于 Erlang 程序员来说，在操作 binary 的时候，实际上也不必太操心 binary 里面的位元数是否能被 8 整除，Erlang 虚拟机能在后台处理好各种情况。比如说：

	X = <<A:2, B:6>>.
	Y = <<A:3, B:6>>.

A 和 B 都是整数，那么 X 是一个 binary，而 Y 称作是一个 bitstring。这两个对象在 Erlang 虚拟机内部表示是不同的。对于 Y 来说，为了能显示出额外的那个位元，Erlang 虚拟机内部就要使用 SUB_BINARY 了。当位串不是 8-bit 整数倍，那么最后多出的位就以子串呈现，如下：

	1> A = <<2:6, 2:2, 4:4, 1>>.
	<<10,64,1:4>>

在共享内存中创建一个新的 Binary 对象，根据 Binary 对象缓冲区大小设置为传入的大小，在进程的堆上创建一个新的 ProcBin 对象，新的 ProcBin 指向刚创建的 Binary，大小也设置为数据的长度。 bs_init_bits 指令，根据接收到的 bitstring 位元数，计算出保存这么多位元所需要的字节数，假设，有 513 个位元需要占用 65 个字节。由于所需字节数超过 64，所以要创建 `REFC_BINARY`。即先在共享内存中创建一个 Binary 对象，缓冲区大小设置为上一步计算出来所需的字节数
在进程的堆上创建对应的 `ProcBin`。在进程的堆上创建一个 ErlSubBin 作为多出的位元的引用，这一步是区分 binary 和 bitstring 的关键，结合之前列出的 ErlSubBin 字段描述，下面是各个字段的取值：

- `size`：Binary 所需字节数 -1，因为在底层的 Binary 中最后一个字节并不是完整的，只需要使用其中的几个位。在这个例子中为 64 字节，第 65 字节只使用 1 个位
- `offs`：0，因为这是新创建的 SUB_BINARY
- `bitsize`：Binary 中最后那个字节中使用到的位元数，在这个例子中为 1
- `bitoffs`：依然是 0

从上面的描述中，我们可以看出 binary 和 bitstring 在内部表达上的区别了，即 binary 可以直接通过 `HEAP_BINARY` 或 `REFC_BINARY` 表示，而 bitstring 则需要通过 `SUB_BINARY` 来表示。在 Erlang 语言的层面看不出这个区别，这只是底层 Erlang 虚拟机在实现上的区别。Erlang 虚拟机的代码在处理 binary 的时候，会首先根据代表这些不同类型的 binary 的 Eterm 来判断具体的类型并采取相应的操作。



## 🍀 BEAM VM Instructions
- [Erlang 虚拟机代码运行原理](https://www.cnblogs.com/gavanwanggw/p/6963695.html)
- [The Erlang BEAM Virtual Machine Specification](http://www.cs-lab.org/historical_beam_instruction_set.html)
- [Virtual Machine Showdown: Stack Versus Registers Yunhe Shi, David Gregg, Andrew Beatty](https://www.usenix.org/legacy/events/vee05/full_papers/p153-yunhe.pdf)
- [A Peek Inside the Erlang Compiler James Hague](http://prog21.dadgum.com/127.html)
- [Erlang 运行时系统 —— 进程结构详解](http://io.upyun.com/2015/11/27/erlang-runtime-system/)
- [Characterizing the Scalability of Erlang VM on
Many-core Processors](http://kth.diva-portal.org/smash/get/diva2:392243/FULLTEXT01)
- [Context Threading: A flexible and efficient dispatch technique for virtual machine interpreters (2005)](http://www.cs.toronto.edu/syslab/pubs/demkea_context.pdf)
- [Context Threading: A flexible and efficient dispatch technique for virtual machine interpreters](http://webdocs.cs.ualberta.ca/~amaral/cascon/CDP05/slides/CDP05-berndl.pdf)


Rrlang 对开发人员是友好的，从程序文件编译成能被虚拟机识别的 beam 文件，在这个编译过程还对开发人员暴露中间代码。借助这个中间代码，我们就能够逐步探究 Erlang 代码的运行过程。

和大多数编译器一样，首先将程序文件转换成语法树，依次执行以下生成过程：

- Erlang Core 核心代码

	确切的叫法是 Core Erlang，使用了相似 Haskell 的语法，每一个变量都用 Let 声明。在 Erlang shell 通过下面方式能够获取模块的 Core Erlang 代码，会生成 `test.core` 文件，实际上 core 文件能够直接编译成 beam 文件：

		c(test, to_core).
		c(test, from_core).

- Erlang Asm 汇编码

	这个是 Erlang 代码编译成 beam 前的汇编代码，以及载入到 VM 时会进一步优化。但汇编码实际上能够看成 erlang 代码到 C 代码的纽带。但理解汇编码而不是非常 easy，这里要知道 Erlang VM 的设计基于寄存器。当中有两类重要的寄存器，传递參数的 x 寄存器。和在函数内用作本地变量的 y 寄存器。在 Erlang shell 通过下面方式能够获取模块的汇编代码，将会生成 `test.S` 文件，当然，S 文件也支持编译成 beam 文件：
	
		c(test, to_asm). 或是 c(test, 'S').
		c(test, from_asm).
	
- Erlang BEAM

	beam 文件是不可阅读的，仅仅是给 VM 执行的机器代码。包含原子，导入导出函数，属性，编译信息等数据块。

- Erlang Bytecode 运行时代码

	运行时代码是指模块载入到 VM 后的代码，Erlang 对开发人员暴露了底层的接口。当模块载入后，在 Erlang shell 下通过下面方式能够获取模块的运行时代码，会生成test.dis文件

		erts_debug:df(test).

对照 Erlang 汇编码和运行时代码，发现指令代码是不全然相同的。一方面，Erlang 会对指令进一步做优化。另外，Erlang 使用了两种指令集，有限指令集和扩展指令集，在 beam 文件使用了有限指令集。然后在载入到 VM 时展开为扩展指令集。

Beam 的载入逻辑在 `beam_load.c` 完成，指令集的转换在 `beam_opcodes.c` 做了映射，而 `beam_opcodes.c` 文件是在编译 Erlang 源码过程用 Perl 脚本 `beam_makeops` 依据 `ops.tab` 生成的。全部有限指令集能够在 `genop.tab` 找到。

	erts/emulator/utils/beam_makeops
	erts/emulator/beam/ops.tab
	erts/emulator/<machine>/opt/smp/beam_opcodes.c
	erts/emulator/beam/beam_load.c
	lib/compiler/src/genop.tab


在 Erlang 的发源地 CSLab - Computer Science Laboratory 上，有一份 1997 年 10 月的 BEAM Virtual Machine 规范文档。

通常我们说的 Eralng 虚拟机是指 BEAM 虚拟机模拟器和 Erlang 运行时系统 ERTS。
ERTS 是 VM 最底层的应用，负责和操作系统交互，管理 I/O，实现 Erlang 进程和 BIF 函数。BEAM 模拟器是运行 Erlang 字节码的地方。

Erlang 虚拟机最早的版本号是 Joe Armstrong 编写的，基于栈，叫 JAM - Joe's Abstract Machine，非常相似 WAM - Warren's Abstract Machine。后来改成基于寄存器的虚拟机，也就是如今的 BEAM - Bogdan's Abstract Machine，运行效率有了较大幅度提升，这在 Joe 的 Erlang VM 演变论文有说到。


基于栈和基于寄存器的虚拟机有什么区别？

基于栈（stack-based）的虚拟机的指令长度是固定的。运行多个操作数计算时。会先将操作数做压入栈。由运算指令取出并计算。

而基于寄存器（register-based）的指令长度不是固定的，能够在指令中带多个操作数。这样，基于寄存器能够降低指令数量，降低入栈出栈操作，从而降低了指令派发的次数和内存訪问的次数，相比开销少了非常多。

可是，假设利用寄存器做数据交换，就要常常保存和恢复寄存器的结果。这就导致基于寄存器的虚拟机在实现上要比基于栈的复杂，代码编译也要复杂得多。

Erlang 进程是在代码运行过程中动态创建和销毁，每一个进程都有自己私有的栈和堆。Erlang 进程是虚拟机进行资源分配和调度的基本单位。Erlang 代码的运行要通过进程来实现。

	1> spawn(fun() -> m:loop() end).
	<0.34.0>

为了实现多进程并发，Erlang 虚拟机实现了进程挂起和调度机制。进程运行代码时会消耗调度次数（Reductions），当调度次数为 0 时就会挂起这个进程，然后从调度队列中取出第一个进程运行。

假设进程在等待新消息时也会被挂起，直到这个进程接收到新消息后，就又一次加到调度队列。



Erlang VM 使用以下寄存器：

- `HTOP` - top-of-heap 堆顶指针
- `E` - top-of-stack 栈项指针   
- `CP` - 返回地址指针，原意 Continuation Pointer。
- `I` - 下一条指令指针。
- `x(N)` - 参数寄存器，用来向函数传参，也用来保存变量。
- `y(N)` - 本地变量，不是真实寄存器。保存在 local frame，通过一个值指定它到栈顶的偏移。
- `fcalls` - 表示当前进程剩余的调度次数（Reductions），执行检查以停止。

对于基于栈的虚拟机，操作数在使用前都会被压到栈，计算时取出。也就是先将本地变量的值压入栈，然后在计算时从栈取出赋值给本地变量。所以，这里有非常大开销在本地变量和栈之间的交换上（出入栈）。

若不考虑多调度器，寄存器是全部进程共享的。当虚拟机调度运行某个进程的时候，寄存器就归这个进程使用。


Erlang VM 指令格式 Instructions Format：

经过 BEAM 编译产生 beam 文件中保存的字节码结构 Byte-code Syntax：
 
	opcode value
	operand1
	operand2
	...

在这种格式中 `opcode_value` 小于 255 的占用一个字节，大于 255 的将占用两个字节。

Erlang 指令调度实现是一个巨大的 switch 结构。每一个 case 语句都相应一个指令操作码 opcode。这样就能够实现指令的分发和运行。可是，switch 调度方式实现简单，但效率比較低下。所以，Erlang 虚拟机使用了 goto 语法，避免过多的使用 switch 造成性能损耗。同一时候，在一些高级编译器如 GCC 下，Erlang 还使用跳转表。利用 label-goto 语法，效率比較高。正由于这点，虚拟机调度时解释指令的代价不容忽视，基于寄存器的虚拟机指令少，就要比基于栈高效。

指令按操作数的类型大致可以分为以下几种：

- 8-bit long

	- magic number
	- function arity
	- type of arithmetic
	- type of operand
	- type of bif
	- sign of bignumber value

- 16-bit long

	- atom length
	- float length
	- code length
	- register number
	- frame size
	- heap requirement

- 24-bit long

	- relative address

- 32-bit long

	- integer value
	- code size
	- tuple arity
	- tuple index
	- string length
	- bignum arity
	- bignum value

除此之外，其它的操作数都是 16 位长。

然后字节码文件不能被直接执行，需要由 Erlang 虚拟机解释执行，虚拟机加载字节码文件后，会将字节码映射成虚拟机能识别的指令集，虚拟机指令集是使用 C 代码来定义的，称为 `threaded-code`，其格式如下：

	label address
	operand1
	operand2
	...

前面提到 switch 指令派发方式，每次处理完一条指令后，都要回到循环的開始，处理下一条指令。可是，每次 switch 操作，都可能是一次线性搜索，现代编译器能对 switch 语句进行优化。 以消除这样的线性搜索开销，但也是仅仅限于特定条件。如 case 的数量和值的跨度范围等。

假设是少量的 switch case，全然能够接受，可是对于虚拟机来说。有着成百上千的 switch case，并且运行频繁非常高，运行一条指令就须要一次线性搜索。确定比較耗性能。假设能直接跳转到运行代码位置，就能够省去线性搜索的过程了。于是在字节码的分派方式上，做了新的改进。这项技术叫作 `Context Threading` 上下文线索引技术，参考相关论文。



# 🚩 RabbitMQ 消息队列
- https://www.jianshu.com/p/79ca08116d57
- https://www.rabbitmq.com/tutorials/tutorial-one-php.html
- https://www.rabbitmq.com/tutorials/tutorial-six-go.html
- https://www.rabbitmq.com/tutorials/tutorial-three-dotnet.html

关于消息队列，从前年开始断断续续看了些资料，想写很久了，但一直没腾出空，近来分别碰到几个朋友聊这块的技术选型，是时候把这块的知识整理记录一下了。

市面上的消息队列产品有很多，比如老牌的 ActiveMQ、RabbitMQ ，目前我看最火的 Kafka ，还有 ZeroMQ ，去年底阿里巴巴捐赠给 Apache 的 RocketMQ ，连 redis 这样的 NoSQL 数据库也支持 MQ 功能。总之这块知名的产品就有十几种，就我自己的使用经验和兴趣只打算谈谈 RabbitMQ、Kafka 和 ActiveMQ ，本文先讲 RabbitMQ ，在此之前先看下消息队列的相关概念。

## 🍀 什么叫消息队列
消息（Message）是指在应用间传送的数据。消息可以非常简单，比如只包含文本字符串，也可以更复杂，可能包含嵌入对象。

消息队列（Message Queue）是一种应用间的通信方式，消息发送后可以立即返回，由消息系统来确保消息的可靠传递。消息发布者只管把消息发布到 MQ 中而不用管谁来取，消息使用者只管从 MQ 中取消息而不管是谁发布的。这样发布者和使用者都不用知道对方的存在。

## 🍀 为何用消息队列
从上面的描述中可以看出消息队列是一种应用间的异步协作机制，那什么时候需要使用 MQ 呢？

以常见的订单系统为例，用户点击【下单】按钮之后的业务逻辑可能包括：扣减库存、生成相应单据、发红包、发短信通知。在业务发展初期这些逻辑可能放在一起同步执行，随着业务的发展订单量增长，需要提升系统服务的性能，这时可以将一些不需要立即生效的操作拆分出来异步执行，比如发放红包、发短信通知等。这种场景下就可以用 MQ ，在下单的主流程（比如扣减库存、生成相应单据）完成之后发送一条消息到 MQ 让主流程快速完结，而由另外的单独线程拉取MQ的消息（或者由 MQ 推送消息），当发现 MQ 中有发红包或发短信之类的消息时，执行相应的业务逻辑。

以上是用于业务解耦的情况，其它常见场景包括最终一致性、广播、错峰流控等等。

## 🍀 RabbitMQ 特点
RabbitMQ 是一个由 Erlang 语言开发的 AMQP 的开源实现。

AMQP - Advanced Message Queue，高级消息队列协议。它是应用层协议的一个开放标准，为面向消息的中间件设计，基于此协议的客户端与消息中间件可传递消息，并不受产品、开发语言等条件的限制。

RabbitMQ 最初起源于金融系统，用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。具体特点包括：

- **可靠性** Reliability

	RabbitMQ 使用一些机制来保证可靠性，如持久化、传输确认、发布确认。

- **灵活的路由** Flexible Routing

	在消息进入队列之前，通过 Exchange 来路由消息的。对于典型的路由功能，RabbitMQ 已经提供了一些内置的 Exchange 来实现。针对更复杂的路由功能，可以将多个 Exchange 绑定在一起，也通过插件机制实现自己的 Exchange 。

- **消息集群** Clustering

	多个 RabbitMQ 服务器可以组成一个集群，形成一个逻辑 Broker 。

- **高可用** Highly Available Queues

	队列可以在集群中的机器上进行镜像，使得在部分节点出问题的情况下队列仍然可用。

- **多种协议** Multi-protocol

	RabbitMQ 支持多种消息队列协议，比如 STOMP、MQTT 等等。

- **多语言客户端** Many Clients

	RabbitMQ 几乎支持所有常用语言，比如 Java、.NET、Ruby 等等。

- **管理界面** Management UI

	RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息 Broker 的许多方面。

- **跟踪机制** Tracing

	如果消息异常，RabbitMQ 提供了消息跟踪机制，使用者可以找出发生了什么。

- **插件机制** Plugin System

	RabbitMQ 提供了许多插件，来从多方面进行扩展，也可以编写自己的插件。


## 🍀 RabbitMQ 中的概念模型

消息模型

所有 MQ 产品从模型抽象上来说都是一样的过程：消费者（consumer）订阅某个队列。生产者（producer）创建消息，然后发布到队列（queue）中，最后将消息发送到监听的消费者。


消息流

上面只是最简单抽象的描述，具体到 RabbitMQ 则有更详细的概念需要解释。上面介绍过 RabbitMQ 是 AMQP 协议的一个开源实现，所以其内部实际上也是 AMQP 中的基本概念：


RabbitMQ 内部结构

				+————————————————————————————+
	[Publisher] + Exchange - Binding - Queue + [Connection Pool] - Consumer
				+————————————————————————————+
				   Virtual Host (Broker)

- **Message**

	消息，消息是不具名的，它由消息头和消息体组成。消息体是不透明的，而消息头则由一系列的可选属性组成，这些属性包括routing-key（路由键）、priority（相对于其他消息的优先权）、delivery-mode（指出该消息可能需要持久性存储）等。

- **Publisher**

	消息的生产者，也是一个向交换器发布消息的客户端应用程序。

- **Exchange**

	交换器，用来接收生产者发送的消息并将这些消息路由给服务器中的队列。

- **Binding**

	绑定，用于消息队列和交换器之间的关联。一个绑定就是基于路由键将交换器和消息队列连接起来的路由规则，所以可以将交换器理解成一个由绑定构成的路由表。

- **Queue**

	消息队列，用来保存消息直到发送给消费者。它是消息的容器，也是消息的终点。一个消息可投入一个或多个队列。消息一直在队列里面，等待消费者连接到这个队列将其取走。

- **Connection**

	网络连接，比如一个TCP连接。

- **Channel**

	信道，多路复用连接中的一条独立的双向数据流通道。信道是建立在真实的TCP连接内地虚拟连接，AMQP 命令都是通过信道发出去的，不管是发布消息、订阅队列还是接收消息，这些动作都是通过信道完成。因为对于操作系统来说建立和销毁 TCP 都是非常昂贵的开销，所以引入了信道的概念，以复用一条 TCP 连接。

- **Consumer**

	消息的消费者，表示一个从消息队列中取得消息的客户端应用程序。

- **Virtual Host**

	虚拟主机，表示一批交换器、消息队列和相关对象。虚拟主机是共享相同的身份认证和加密环境的独立服务器域。每个 vhost 本质上就是一个 mini 版的 RabbitMQ 服务器，拥有自己的队列、交换器、绑定和权限机制。vhost 是 AMQP 概念的基础，必须在连接时指定，RabbitMQ 默认的 vhost 是 / 。

- **Broker**

	表示消息队列服务器实体。

AMQP 中的消息路由
AMQP 中消息的路由过程和 Java 开发者熟悉的 JMS 存在一些差别，AMQP 中增加了 Exchange 和 Binding 的角色。生产者把消息发布到 Exchange 上，消息最终到达队列并被消费者接收，而 Binding 决定交换器的消息应该发送到那个队列。

AMQP 的消息路由过程
Exchange 类型
Exchange 分发消息时根据类型的不同分发策略有区别，目前共四种类型：

- direct
- fanout
- topic
- headers

headers 匹配 AMQP 消息的 header 而不是路由键，此外 headers 交换器和 direct 交换器完全一致，但性能差很多，目前几乎用不到了，所以直接看另外三种类型：

direct

消息中的路由键（routing key）如果和 Binding 中的 binding key 一致， 交换器就将消息发到对应的队列中。路由键与队列名完全匹配，如果一个队列绑定到交换机要求路由键为“dog”，则只转发 routing key 标记为“dog”的消息，不会转发“dog.puppy”，也不会转发“dog.guard”等等。它是完全匹配、单播的模式。

fanout

每个发到 fanout 类型交换器的消息都会分到所有绑定的队列上去。fanout 交换器不处理路由键，只是简单的将队列绑定到交换器上，每个发送到交换器的消息都会被转发到与该交换器绑定的所有队列上。很像子网广播，每台子网内的主机都获得了一份复制的消息。fanout 类型转发消息是最快的。

topic

topic 交换器通过模式匹配分配消息的路由键属性，将路由键和某个模式进行匹配，此时队列需要绑定到一个模式上。它将路由键和绑定键的字符串切分成单词，这些单词之间用点隔开。它同样也会识别两个通配符：符号“#”和符号“”。#匹配0个或多个单词，匹配不多不少一个单词。


## 🍀 Erlang 开源项目

排名不分先后

- couchdb	基于文档等非结构化数据的数据库，提供 HTTP 接口
- disco		Map-Reduce 框架，Erlang + Python
- ejabberd	性能出众，使用广泛的 Jabber 开源即时通讯系统服务器
- mochiweb	轻便，高效的 HTTP 应用框架
- rabbitmq	中间服务器，实现AMQP协议
- yaws		高效的 web server
- etorrent	Bittorrent 客户端
- scalaris	分布式的 key-value 存储



## 🍀 RabbitMQ 安装
- https://www.rabbitmq.com/download.html

一般来说安装 RabbitMQ 之前要安装 Erlang ，可以去Erlang官网下载。接着去RabbitMQ官网下载安装包，之后解压缩即可。根据操作系统不同官网提供了相应的安装说明：

Debian / Ubuntu、RPM-based Linux、Mac

Windows Chocolatey 安装：

	choco install rabbitmq

如果是 Mac 用户，个人推荐使用 HomeBrew 来安装，安装前要先更新 brew：

	brew update

接着安装 rabbitmq 服务器：

	brew install rabbitmq

这样 RabbitMQ 就安装好了，安装过程中会自动其所依赖的 Erlang 。

	RabbitMQ 运行和管理

启动很简单，找到安装后的 RabbitMQ 所在目录下的 sbin 目录，可以看到该目录下有6个以 rabbitmq 开头的可执行文件，直接执行 rabbitmq-server 即可，下面将 RabbitMQ 的安装位置以 . 代替，启动命令就是：

	./sbin/rabbitmq-server

启动正常的话会看到一些启动过程信息和最后的 completed with 7 plugins，这也说明启动的时候默认加载了7个插件。


如果想让 RabbitMQ 以守护程序的方式在后台运行，可以在启动的时候加上 -detached 参数：

	./sbin/rabbitmq-server -detached

查询服务器状态

sbin 目录下有个特别重要的文件叫 rabbitmqctl ，它提供了 RabbitMQ 管理需要的几乎一站式解决方案，绝大部分的运维命令它都可以提供。
查询 RabbitMQ 服务器的状态信息可以用参数 status ：

	./sbin/rabbitmqctl status

该命令将输出服务器的很多信息，比如 RabbitMQ 和 Erlang 的版本、OS 名称、内存等等

关闭 RabbitMQ 节点

我们知道 RabbitMQ 是用 Erlang 语言写的，在Erlang 中有两个概念：节点和应用程序。节点就是 Erlang 虚拟机的每个实例，而多个 Erlang 应用程序可以运行在同一个节点之上。节点之间可以进行本地通信（不管他们是不是运行在同一台服务器之上）。比如一个运行在节点 A 上的应用程序可以调用节点 B 上应用程序的方法，就好像调用本地函数一样。如果应用程序由于某些原因奔溃，Erlang 节点会自动尝试重启应用程序。

如果要关闭整个 RabbitMQ 节点可以用参数 stop ：

	./sbin/rabbitmqctl stop

它会和本地节点通信并指示其干净的关闭，也可以指定关闭不同的节点，包括远程节点，只需要传入参数 -n ：

	./sbin/rabbitmqctl -n rabbit@server.example.com stop 
	-n node 默认 node 名称是 rabbit@server ，如果你的主机名是 server.example.com ，那么 node 名称就是 rabbit@server.example.com 。

关闭 RabbitMQ 应用程序
如果只想关闭应用程序，同时保持 Erlang 节点运行则可以用 stop_app：

	./sbin/rabbitmqctl stop_app

这个命令在后面要讲的集群模式中将会很有用。

启动 RabbitMQ 应用程序

	./sbin/rabbitmqctl start_app

重置 RabbitMQ 节点

	./sbin/rabbitmqctl reset

该命令将清除所有的队列。

查看已声明的队列

	./sbin/rabbitmqctl list_queues

查看交换器

	./sbin/rabbitmqctl list_exchanges

该命令还可以附加参数，比如列出交换器的名称、类型、是否持久化、是否自动删除：

	./sbin/rabbitmqctl list_exchanges name type durable auto_delete

查看绑定

	./sbin/rabbitmqctl list_bindings

## 🍀 Java 客户端访问

RabbitMQ 支持多种语言访问，以 Java 为例看下一般使用 RabbitMQ 的步骤。

maven 工程的 pom 文件中添加依赖

	<dependency>
		<groupId>com.rabbitmq</groupId>
		<artifactId>amqp-client</artifactId>
		<version>4.1.0</version>
	</dependency>

消息生产者

```java
	package org.study.rabbitmq;
	import com.rabbitmq.client.Channel;
	import com.rabbitmq.client.Connection;
	import com.rabbitmq.client.ConnectionFactory;
	import java.io.IOException;
	import java.util.concurrent.TimeoutException;
	public class Producer {

		public static void main(String[] args) throws IOException, TimeoutException {
			//创建连接工厂
			ConnectionFactory factory = new ConnectionFactory();
			factory.setUsername("guest");
			factory.setPassword("guest");
			//设置 RabbitMQ 地址
			factory.setHost("localhost");
			//建立到代理服务器到连接
			Connection conn = factory.newConnection();
			//获得信道
			Channel channel = conn.createChannel();
			//声明交换器
			String exchangeName = "hello-exchange";
			channel.exchangeDeclare(exchangeName, "direct", true);

			String routingKey = "hola";
			//发布消息
			byte[] messageBodyBytes = "quit".getBytes();
			channel.basicPublish(exchangeName, routingKey, null, messageBodyBytes);

			channel.close();
			conn.close();
		}
	}
```

消息消费者

```java
	package org.study.rabbitmq;
	import com.rabbitmq.client.*;
	import java.io.IOException;
	import java.util.concurrent.TimeoutException;
	public class Consumer {

		public static void main(String[] args) throws IOException, TimeoutException {
			ConnectionFactory factory = new ConnectionFactory();
			factory.setUsername("guest");
			factory.setPassword("guest");
			factory.setHost("localhost");
			//建立到代理服务器到连接
			Connection conn = factory.newConnection();
			//获得信道
			final Channel channel = conn.createChannel();
			//声明交换器
			String exchangeName = "hello-exchange";
			channel.exchangeDeclare(exchangeName, "direct", true);
			//声明队列
			String queueName = channel.queueDeclare().getQueue();
			String routingKey = "hola";
			//绑定队列，通过键 hola 将队列和交换器绑定起来
			channel.queueBind(queueName, exchangeName, routingKey);

			while(true) {
				//消费消息
				boolean autoAck = false;
				String consumerTag = "";
				channel.basicConsume(queueName, autoAck, consumerTag, new DefaultConsumer(channel) {
					@Override
					public void handleDelivery(String consumerTag,
											   Envelope envelope,
											   AMQP.BasicProperties properties,
											   byte[] body) throws IOException {
						String routingKey = envelope.getRoutingKey();
						String contentType = properties.getContentType();
						System.out.println("消费的路由键：" + routingKey);
						System.out.println("消费的内容类型：" + contentType);
						long deliveryTag = envelope.getDeliveryTag();
						//确认消息
						channel.basicAck(deliveryTag, false);
						System.out.println("消费的消息体内容：");
						String bodyStr = new String(body, "UTF-8");
						System.out.println(bodyStr);

					}
				});
			}
		}
	}
```

启动 RabbitMQ 服务器

	./sbin/rabbitmq-server

先运行 Consumer ，这样当生产者发送消息的时候能在消费者后端看到消息记录。

接着运行 Producer, 发布一条消息，在 Consumer 的控制台能看到接收的消息


## 🍀 RabbitMQ 集群

RabbitMQ 最优秀的功能之一就是内建集群，这个功能设计的目的是允许消费者和生产者在节点崩溃的情况下继续运行，以及通过添加更多的节点来线性扩展消息通信吞吐量。RabbitMQ 内部利用 Erlang 提供的分布式通信框架 OTP 来满足上述需求，使客户端在失去一个 RabbitMQ 节点连接的情况下，还是能够重新连接到集群中的任何其他节点继续生产、消费消息。

RabbitMQ 集群中的一些概念

RabbitMQ 会始终记录以下四种类型的内部元数据：

- 队列元数据 包括队列名称和它们的属性，比如是否可持久化，是否自动删除
- 交换器元数据 交换器名称、类型、属性
- 绑定元数据 内部是一张表格记录如何将消息路由到队列
- vhost 元数据 为 vhost 内部的队列、交换器、绑定提供命名空间和安全属性

在单一节点中，RabbitMQ 会将所有这些信息存储在内存中，同时将标记为可持久化的队列、交换器、绑定存储到硬盘上。存到硬盘上可以确保队列和交换器在节点重启后能够重建。而在集群模式下同样也提供两种选择：存到硬盘上（独立节点的默认设置），存在内存中。

如果在集群中创建队列，集群只会在单个节点而不是所有节点上创建完整的队列信息（元数据、状态、内容）。结果是只有队列的所有者节点知道有关队列的所有信息，因此当集群节点崩溃时，该节点的队列和绑定就消失了，并且任何匹配该队列的绑定的新消息也丢失了。还好RabbitMQ 2.6.0 之后提供了镜像队列以避免集群节点故障导致的队列内容不可用。

RabbitMQ 集群中可以共享 user、vhost、exchange 等，所有的数据和状态都是必须在所有节点上复制的，例外就是上面所说的消息队列。RabbitMQ 节点可以动态的加入到集群中。

当在集群中声明队列、交换器、绑定的时候，这些操作会直到所有集群节点都成功提交元数据变更后才返回。集群中有内存节点和磁盘节点两种类型，内存节点虽然不写入磁盘，但是它的执行比磁盘节点要好。内存节点可以提供出色的性能，磁盘节点能保障配置信息在节点重启后仍然可用，那集群中如何平衡这两者呢？

RabbitMQ 只要求集群中至少有一个磁盘节点，所有其他节点可以是内存节点，当节点加入火离开集群时，它们必须要将该变更通知到至少一个磁盘节点。如果只有一个磁盘节点，刚好又是该节点崩溃了，那么集群可以继续路由消息，但不能创建队列、创建交换器、创建绑定、添加用户、更改权限、添加或删除集群节点。换句话说集群中的唯一磁盘节点崩溃的话，集群仍然可以运行，但知道该节点恢复，否则无法更改任何东西。

RabbitMQ 集群配置和启动

如果是在一台机器上同时启动多个 RabbitMQ 节点来组建集群的话，只用上面介绍的方式启动第二、第三个节点将会因为节点名称和端口冲突导致启动失败。所以在每次调用 rabbitmq-server 命令前，设置环境变量 RABBITMQ_NODENAME 和 RABBITMQ_NODE_PORT 来明确指定唯一的节点名称和端口。下面的例子端口号从 5672 开始，每个新启动的节点都加1，节点也分别命名为 test_rabbit_1、test_rabbit_2、test_rabbit_3。

启动第1个节点：

	RABBITMQ_NODENAME=test_rabbit_1 RABBITMQ_NODE_PORT=5672 ./sbin/rabbitmq-server -detached

启动第2个节点：

	RABBITMQ_NODENAME=test_rabbit_2 RABBITMQ_NODE_PORT=5673 ./sbin/rabbitmq-server -detached

启动第2个节点前建议将 RabbitMQ 默认激活的插件关掉，否则会存在使用了某个插件的端口号冲突，导致节点启动不成功。

现在第2个节点和第1个节点都是独立节点，它们并不知道其他节点的存在。集群中除第一个节点外后加入的节点需要获取集群中的元数据，所以要先停止 Erlang 节点上运行的 RabbitMQ 应用程序，并重置该节点元数据，再加入并且获取集群的元数据，最后重新启动 RabbitMQ 应用程序。

停止第2个节点的应用程序：

	./sbin/rabbitmqctl -n test_rabbit_2 stop_app

重置第2个节点元数据：

	./sbin/rabbitmqctl -n test_rabbit_2 reset

第2节点加入第1个节点组成的集群：

	./sbin/rabbitmqctl -n test_rabbit_2 join_cluster test_rabbit_1@localhost

启动第2个节点的应用程序

	./sbin/rabbitmqctl -n test_rabbit_2 start_app

第3个节点的配置过程和第2个节点类似：

	RABBITMQ_NODENAME=test_rabbit_3 RABBITMQ_NODE_PORT=5674 ./sbin/rabbitmq-server -detached

	./sbin/rabbitmqctl -n test_rabbit_3 stop_app

	./sbin/rabbitmqctl -n test_rabbit_3 reset

	./sbin/rabbitmqctl -n test_rabbit_3 join_cluster test_rabbit_1@localhost

	./sbin/rabbitmqctl -n test_rabbit_3 start_app

RabbitMQ 集群运维

停止某个指定的节点，比如停止第2个节点：

	RABBITMQ_NODENAME=test_rabbit_2 ./sbin/rabbitmqctl stop

查看节点3的集群状态：

	./sbin/rabbitmqctl -n test_rabbit_3 cluster_status





# 🚩 string 模块
- http://gashero.yeax.com/?p=64
- https://erlang.org/doc/man/string.html

## 🍀 string:len(String) -> Length

	String=string()
	Length

返回字符串的字符数。


## 🍀 string:equal(String1,String2) -> bool()

	String1=String2=string()

测试两个字符串是否相等，如果相等返回 true ，不相等返回 false 。


## 🍀 string:concat(String1,String2) -> String3

	String1=String2=String3=string()

连接两个字符串成为新的字符串，返回新的字符串。


## 🍀 string:chr(String,Character) -> Index

	String=string()
	Character=char()
	Index=integer()

返回一个字符串中某个字符第一次出现的位置，如果不存在则返回0。


函数 rchr 拥有相同参数，但是从右侧开始计算。


## 🍀 string:str(String,SubString) -> Index

	String=SubString=string()
	Index=integer()

返回子串匹配位置，未匹配则返回0。例如:

	> string:str(" Hello Hello World World ", "Hello World").
	8

函数 rstr 拥有相同参数，但是从右侧开始计算。


## 🍀 string:span(String,Chars) -> Length

	String=Chars=string()
	Length=integer()

返回String匹配Chars中最多字符长度，从前开始。例如:

	> string:span("\t    abcdefg"," \t").
	5
	> string:cspan("\t    abcdefg"," \t").
	0

函数 cspan 则是取从前开始第一个匹配时前面不匹配的部分。后面的Chars可以包含多个字符用于匹配。


## 🍀 string:substr(String,Start[,Length]) -> SubString

	String=SubString=string()
	Start=Length=integer()

取得字符串的子字符串，可以指定开始处和长度，长度可省略。例如:

	> string:substr("Hello World",4,5).
	"lo Wo"

## 🍀 string:tokens(String,SeparatorList) -> Tokens

	String=SeparatorList=string()
	Tokens=[string()]

根据分隔符号列表中的字符将字符串切割成词法符号。例如:

	> string:tokens("abc defxxghix jkl","x ").
	["abc","def","ghi","jkl"]

## 🍀 string:chars(Character,Number[,Tail]) -> String

	Character=char()
	Number=integer()
	String=string()

返回包含指定数目个字符的字符串，可选的指定随后跟着的字符串Tail。


## 🍀 string:copies(String,Number) -> Copies

	String=Copies=string()
	Number=integer()

返回包含指定数量份复制过的字符串。


## 🍀 string:words(String[,Character]) -> Count

	String=string()
	Character=char()
	Count=integer()

返回字符串中的单词个数，分隔符可以在第二个可选参数指定。例如:

	> string:words(" Hello old boy!",$o).
	4

注意分隔字符必须以美元符号开头，后面指定，如上的 $o 。


## 🍀 string:sub_word(String,Number[,Character]) -> Word

	String=Word=string()
	Character=char()
	Number=integer()

返回指定位置的单词，单词间的分隔符定义同上。注意这里的位置数字是以1开始的。例如:

	> string:sub_word(" Hello old boy !",3,$o).
	"ld b"

## 🍀 string:strip(String[,Direction[,Character]]) -> Stripped

	String=Stripped=string()
	Direction=left | right | both
	Character=char()

返回去掉了两端空白的字符串，可以指定方向和空白字符。 strip/1 等同于 strip(String,both) 。例如:

	> string:strip("...Hello.....",both,$.).
	"Hello"

## 🍀 string:left(String,Number[,Character]) -> Left

	String=Left=string()
	Character=char
	Number=integer()

返回从左起，调整过长度为指定数字的字符串，可以指定后面跟的填充字符，默认为空格。如果字符串太长也不会被截断。例如:

	> string:left("Hello",10,$.).
	"Hello....."

函数 right 拥有相同的参数，只不过会将字符串右对齐。


## 🍀 string:centre(String,Number[,Character]) -> Centered

	String=Centered=string()
	Character=char
	Number=integer()

将字符串中间对齐扩充到指定长度，不足不用用空格或指定字符填充。


## 🍀 string:sub_string(String,Start[,Stop]) -> SubString

	String=SubString=string()
	Start=Stop=integer()
	返回字符串的子字符串，可以指定开始位置和结束位置。例如:

	> string:sub_string("Hello World",4,8).
	"lo Wo"

注意不同于 substr 的指定开始和长度，这个函数是指定开始和结束。


## 🍀 string:to_float(String) -> {Float,Rest} | {error,Reason}

	String=string()
	Float=float()
	Rest=string()
	Reason=no_float | not_a_list

将一个开始于浮点数的字符串转换成浮点数，剩余无法识别的会返回。例如:

	> {F1,Fs}=string:to_float("1.0-1.0e-1"),
	> {F2,[]}=string:to_float(Fs),
	> F1+F2.
	0.900000
	> string:to_float("3/2=1.5").
	{error,no_float}
	> string:to_float("-1.5eX").
	{-1.50000,"eX"}

## 🍀 string:to_integer(String) -> {Int,Rest} | {error,Reason}

	String=string()
	Int=integer()
	Rest=string()
	Reason= no_integer | not_a_list

将参数中以整数开头的字符串转换成整数和剩余部分。例如:

	> {I1,Is}=string:to_integer("33+22"),
	> {I2,[]}=string:to_integer(Is),
	> I1-I2.
	11
	> string:to_integer("0.5").
	{0,".5"}
	> string:to_integer("x=2").
	{error,no_integer}

## 🍀 string:to_lower(String) -> Result

	String=Result=string()
	Char=CharResult=integer()


# 🚩 lists 模块
- https://erldocs.com/current/stdlib/lists.html?i=260

带 Pred 函数和不带 Pred 函数

## 🍀 lists: all(Pred, List) -> boolean()

如果List中的每个元素作为Pred函数的参数执行，结果都返回true，那么all函数返回true，否则返回false

	例子：

	lists:all(fun(E) -> true end,[1,2,3,4]).

	结果

	true


## 🍀 lists: any(Pred, List) -> boolean()

如果List中至少有一个元素作为Pred函数的参数执行，结果返回true，那么any函数返回true，否则返回false

	例子

	lists:any(fun(E) -> is_integer(E) end,[q,2,a,4]).

	结果

	true

	 

## 🍀 lists:dropwhile(Pred, List1) -> List2
将List1列表中的元素作为参数执行Pred函数，如果返回true，将其丢弃，最后返回剩余元素组成的列表

	例子

	lists:dropwhile(fun(E) -> is_atom(E) end,[a,1,2,a,b]).

	结果

	[1,2,a,b]

## 🍀 lists:filter(Pred, List1) -> List2
返回一个列表，这个列表是由List1中执行Pred函数返回true的元素组成。

	lists:filter(fun(E) -> is_integer(E) end,[q,2,a,4]).

	结果：

	[2,4]

	 
## 🍀 lists:map(Fun, List1) -> List2
将List1中的每个元素去在Fun中执行，然后返回一个元素，最后返回的这些元素组成一个列表，返回给List2

	例子：
	lists:map(fun(X)->[X,X] end, [a,b,c]).
	结果：[[a,a],[b,b],[c,c]]
	 

## 🍀 lists:flatmap(Fun, List1) -> List2
这个函数和 map 比较类似，相当于把 map 的结果进行append处理

	lists:append(lists:map(List1)).

	例子：
	lists:flatmap(fun(X)->[X,X] end, [a,b,c]).
	结果：[a,a,b,b,c,c]

	 

## 🍀 lists:foldl(Fun, Acc0, List) -> Acc1

例子：对[1,2,3,4,5]求和

	lists:foldl(fun(X, Sum) -> X + Sum end, 0, [1,2,3,4,5]).

	结果：15
	执行过程：首先，Fun 第一次执行时，X 的值取列表 List 的第一个元素 1，Sum 取 0,
	Fun 第二次执行时，X 的值取列表 List 的第二个元素 2，Sum 取 Fun 第一次的返回值
	依次轮推，直到 List 中每个元素执行完，最后 foldl 返回最后一次的结果。

	 

## 🍀 lists:foldr(Fun, Acc0, List) -> Acc1
foldr这个函数和foldl比较相似
不过是Fun执行时，X的值先取List的最后一个，然后取倒数第二个。


## 🍀 lists:foreach(Fun, List) -> ok
以List中的每个元素为参数执行Fun函数，执行顺序按照List中元素的顺序，这个函数最后返回ok。是单边的

	例子 lists:foreach(fun(X)->
	  %%using X to do somethings 
	  %%
	  end,List)

	 

## 🍀 lists:keymap(Fun, N, TupleList1) -> TupleList2
对TupleList1中的每个元素的第N项作为参数在Fun中处理，然后这个第N项最后就被替换为Fun执行完返回的值

	例子：
	List1 = [{name,"zhangjing"},{name,"zhangsan"}].
	lists:keymap(fun(X)->
	  list_to_atom(X)
	  end,2,List1).
	结果：
	[{name,zhangjing},{name,zhangsan}]

	 

## 🍀 lists:mapfoldl(Fun, Acc0, List1) -> {List2, Acc1}

	这个函数等于是把map和foldl函数结合起来。将List1中的每一个元素执行Fun函数，执行后花括号的第一个值作为返回值返回，
	第二个值作为参数传给Fun，作为下一次用。
	例子：
	lists:mapfoldl(fun(X, Sum) -> {2*X, X+Sum} end,
	0, [1,2,3,4,5]).
	{[2,4,6,8,10],15}

	 

## 🍀 lists:mapfoldr(Fun, Acc0, List1) -> {List2, Acc1}

	这个函数相当于将map和foldr结合起来


## 🍀 lists:merge(Fun, List1, List2) -> List3

	这个函数的功能也是把List1和List2合并到一起，只不过是List1和List2的元素要作为参数在Fun中执行，如果
	Fun返回true，那么返回值就是List1在前，List2在后。否则，反之。
	例子
	lists:merge(fun(A,B)-> false end, [3,4],[2,1]).
	结果
	[2,1,3,4]

	 

## 🍀 lists:partition(Pred, List) -> {Satisfying, NotSatisfying}

	这个函数的功能是将List分成两个List1和List2，List1是将List元素作为参数去Pred函数中执行返回true的元素组成，
	List2由Pred返回false的元素组成。
	注意，返回的是一个元组
	例子
	lists:partition(fun(A) -> A rem 2 == 1 end, [1,2,3,4,5,6,7]).
	结果
	{[1,3,5,7],[2,4,6]}


## 🍀 lists:sort(Fun, List1) -> List2

	如果Fun函数返回true，则排序是从小到大的顺序，否则，从大到小。
	其中Fun有两个参数。
	例子
	lists:sort(fun(A,B)-> false end,[1,2,3]).
	结果
	[3,2,1]


## 🍀 lists:splitwith(Pred, List) -> {List1, List2}

	将List分成List1和List2，
	List1由List中元素在Pred函数返回true的组成，但是有一点，如果遇到为false的，则将剩下的元素
	全部放到List2中，List1中就只有前面为true的。
	例子
	lists:splitwith(fun(A) -> is_atom(A) end, [a,b,1,c,d,2,3,4,e]).
	结果
	{[a,b],[1,c,d,2,3,4,e]}


## 🍀 lists:takewhile(Pred, List1) -> List2

	List1中的元素element依次执行Pred(element),如果返回true，则获取这个元素，直到有元素执行Pred(element)返回false
	例子
	lists:takewhile(fun(E)-> is_atom(E) end,[a,b,1,e,{c},[d]]).
	结果
	[a,b]


## 🍀 lists:umerge(Fun, List1, List2) -> List3

	这个函数和merge不同的是 当Fun返回true时，返回的List3中不能出现相同的元素
	疑问：但是当Fun返回false时，List3中可以有相同的元素。
	例子(Fun返回true的情况)
	lists:umerge(fun(A,B)-> true end,[1,2],[2,3]).
	结果
	[1,2,3]
	(Fun为false的情况)
	lists:umerge(fun(A,B)-> false end,[1,2],[2,3]).
	[2,3,1,2]
	好神奇，竟然2有重复

	 

## 🍀 lists:usort(Fun, List1) -> List2

	按照Fun函数进行排序，如果Fun返回true，那么只返回List1的第一个元素
	如果Fun返回false，那么List1从大到小排序
	例子1
	lists:usort(fun(A,B) -> true end, [1,2,2,3,4]).
	结果
	[1]

	例子2
	lists:usort(fun(A,B) -> false end, [1,2,2,3,4]).
	结果
	[4,3,2,2,1]


## 🍀 lists:zipwith(Combine, List1, List2) -> List3

	将List1和list2中的每个元素执行Combine函数，然后返回一个元素，List3就是由Combine函数返回的一个个元素组成的。
	功能和map有点像，但是这里是对两个列表的操作。
	例子
	lists:zipwith(fun(X, Y) -> X+Y end, [1,2,3], [4,5,6]).
	结果
	[5,7,9]

	 

## 🍀 lists:zipwith3(Combine, List1, List2, List3) -> List4

	将List1和list2，list3中的每个元素执行Combine函数，然后返回一个元素，List4就是由Combine函数返回的一个个元素组成的。
	功能和map有点像，但是这里是对三个列表的操作。
	例子
	lists:zipwith3(fun(X, Y, Z) -> X+Y+Z end, [1,2,3], [4,5,6],[7,8,9]).
	结果
	[12,15,18]

	 

## 🍀 lists:append(ListOfLists) -> List1

	ListOfLists都是由List组成的，而List一个列表，里面可以是任何类型的元素
	这个函数就是将ListOfLists里面的所有列表的元素按顺序编成一个列表
	提示：ListOfLists里面的元素必须都是列表才能用这个函数

	例子

	lists:append([[1, 2, 3], [a, b], [4, 5, 6]]).

	结果：

	[1,2,3,a,b,4,5,6]


## 🍀 lists:append(List1, List2) -> List3

	将List1和List2两个列表连接起来，组成一个列表，然后返回新的这个列表
	这个函数的功能等同于List1 ++ List2

	例子

	lists:append("abc", "def").

	结果

	"abcdef"

	 

## 🍀 lists:concat(Things) -> string()

	这里的 Things 是一个列表，里面由 atom() | integer() | float() | string()
	将这个列表里面的元素拼成一个字符串，然后返回

	例子

	lists:concat([doc, '/', file, '.', 3]). % "doc/file.3"
	lists:concat("123").                 % "495051"

	注意，字符串就是进制值的列表，拼合时就会得到其对应字符的 ASCII 值。
	 

## 🍀 lists:delete(Elem, List1) -> List2

	List1是由很多Element组成的，这个函数的功能是在List1中寻找第一个和Elem元素一样的，
	然后删除之，返回删除后新的列表。

	例子

	lists:delete({name,"zhangsan"},[{name,"lisi"},{name,"zhangsan"},{name,"wangmazi"})).

	结果

	[{name,"lisi"},{name,"wangmazi"}]

	 

## 🍀 lists:duplicate(N, Elem) -> List

	返回一个由N个Elem组成的列表。

	例子

	lists:duplicate(5,"test").

	结果

	["test","test","test","test","test"]

	 

## 🍀 lists:flatlength(DeepList) -> integer() >= 0

	我的理解是DeepList就是列表里面套列表
	计算列表的长度，即用flatten函数将DeepList转化成List后元素的个数
	这个函数和length()的区别就是：
	length函数是得到列表元素的个数，
	而flatlength函数是先将DeepList转化成List后的个数
	譬如说List = [1,2,[3,4]]这个列表用
	length(List)求的值是：3
	lists:flatlength(List)求的值是：4
	其实lists:flatlength(List) = length(flatten(List))

## 🍀 lists:flatten(DeepList) -> List

	将DeepList变成只有term()的list
	例子：
	lists:flatten([[a,a],[b,b],[c,c]]).
	结果：
	[a,a,b,b,c,c]

	 

## 🍀 lists:flatten(DeepList, Tail) -> List

	就是将DeepList变成只有term的List后，在后面再加一个Tail。
	例子：
	lists:flatten([[a,a],[b,b],[c,c]],[dd]).
	结果：
	[a,a,b,b,c,c,dd]

	 

## 🍀 lists:keydelete(Key, N, TupleList1) -> TupleList2

	这个函数适合处理列表里面的元素是元组的情况
	删除TupleList1中元素第N个元素和Key一致的元素，只删除第一个一样的，后面一样的不删除
	例子：
	List = [{name,"zhangjing"},{sex,"male"},{name,"zhangsan"},{sex,"male"}],
	lists:keydelete("male",2,List)
	结果：
	[{name,"zhangjing"},{name,"zhangsan"},{sex,"male"}]

	 

## 🍀 lists:keyfind(Key, N, TupleList) -> Tuple | false

	查找TupleList中的一个Tuple，如果查找到，返回，如果没有查找到，则返回false
	这个Tuple必须满足第N个元素和key是一样。
	例子：
	List1 = [{name,"zhangjing"},{name,"zhangsan"}].
	lists:keyfind("zhangjing",2,List1)
	结果：{name,"zhangjing"}

	 

## 🍀 lists:keymember(Key, N, TupleList) -> boolean()

	如果TupleList中的元素中存在第N个元素和key一致，则返回true，否则返回false
	例子：
	List1 = [{name,"zhangjing"},{name,"zhangsan"}].
	lists:keymember("zhangjing",2,List1).
	结果：true

	 

## 🍀 lists:keymerge(N, TupleList1, TupleList2) -> TupleList3

	将TupleList1和TupleList2进行混合，组成一个TupleList，
	新组成的TupleList是按照Tuple的第N个元素进行排序的
	例子：
	List1 = [{name,"zhangjing"},{name,"zhangsan"}].
	List2 = [{nick,"zj"},{nick,"zs"}].
	lists:keymerge(2,List1,List2).
	结果：
	[{name,"zhangjing"},
	 {name,"zhangsan"},
	 {nick,"zj"},
	 {nick,"zs"}]

	 

## 🍀 lists:keyreplace(Key, N, TupleList1, NewTuple) -> TupleList2

	在TupleList1的Tuple中找出第N个元素和Key一致，然后用NewTuple将这个Tuple替换掉，如果没有找到
	，则返回原来的TupleList1
	例子：
	List1 = [{name,"zhangjing"},{name,"zhangsan"}]
	lists:keyreplace("zhangjing",2,List1,{nickname,"netzj"}).
	结果：
	[{nickname,"netzj"},{name,"zhangsan"}]

	 

## 🍀 lists:keysearch(Key, N, TupleList) -> {value, Tuple} | false

	这个函数和keyfind差不多，就是返回值的结构不一样
	也是在TupleList中找一个Tuple，这个Tuple的第N个元素和Key一样。
	例子：
	List1 = [{name,"zhangjing"},{name,"zhangsan"}]
	lists:keysearch("zhangjing",2,List1).
	结果：
	{value,{name,"zhangjing"}}

	 

## 🍀 lists:keysort(N, TupleList1) -> TupleList2

	对TupleList1中的Tuple按照第N个元素进行排序，然后返回一个新的顺序的TupleList。
	不过这种排序是固定的。
	例子：
	List1 = [{name,"zhangsan"},{name,"zhangjing"}].
	lists:keysort(2,List1).
	结果：
	[{name,"zhangjing"},{name,"zhangsan"}]

	 

## 🍀 lists:keystore(Key, N, TupleList1, NewTuple) -> TupleList2

	这个函数和keyreplace函数比较像，不同的是，这个keystore在没有找到对应的Tuple时，
	会将这个NewTuple追加在这个TupleList1的最后。
	例子：
	List1 = [{name,"zhangsan"},{name,"zhangjing"}].
	找到了的情况
	lists:keystore("zhangjing",2,List1,{name,"netzhangjing"}).
	[{name,"netzhangjing"},{name,"zhangsan"}]
	没有找到的情况
	lists:keystore("zhanging",2,List1,{name,"netzhangjing"}).
	[{name,"zhangjing"},{name,"zhangsan"},{name,"netzhangjing"}]

	 

## 🍀 lists:keytake(Key, N, TupleList1) -> {value, Tuple, TupleList2} | false

	在TupleList1中找Tuple，这个Tuple的第N个元素和Key一致，如果找到了这么一个Tuple
	那么返回，{value, Tuple, TupleList2} 其中TupleList2是去掉Tuple的TupleList1.
	例子：
	List1 = [{name,"zhangjing"},{name,"zhangsan"},{name,"lisi"}].
	lists:keytake("zhangjing",2,List1).
	结果：
	{value,{name,"zhangjing"},[{name,"zhangsan"},{name,"lisi"}]}

	 

## 🍀 lists:last(List) -> Last

	返回：List最后一个元素
	例子：
	List1 = [{name,"zhangjing"},{name,"zhangsan"},{name,"lisi"}].
	lists:last(List1).
	结果：
	{name,"lisi"}

	 

## 🍀 lists:max(List) -> Max

	取出List中最大的元素，一般List是整型时比较适合。
	例子：
	lists:max([1,10,15,6]).
	结果：
	15

	 

## 🍀 lists:member(Elem, List) -> boolean()

	如果Elem和List中的某个元素匹配（相同），那么返回true，否则返回false
	例子
	lists:member({sex,"1"},[{sex,"1"},{sex,"2"},{sex,"3"}]).
	结果：
	true

## 🍀 lists:merge(ListOfLists) -> List1

	ListOfLists是一个列表，里面由子列表构成
	这个函数的功能就是将这些子列表合并成一个列表。
	例子：
	lists:merge([[{11}],[{22}],[{33}]]).
	结果
	[{11},{22},{33}]

	 

## 🍀 lists:merge(List1, List2) -> List3

	List1和List2分别是一个列表，这个函数的功能是将这两个列表合并成一个列表。
	例子：
	lists:merge([11],[22]).
	结果
	[11,22]
	[2,1,3,4]


## 🍀 lists:23, merge3(List1, List2, List3) -> List4

	将List1，List2，List3合并成一个列表
	例子
	lists:merge3([11],[22],[33,44]).
	结果：
	[11,22,33,44]

	 

## 🍀 lists:min(List) -> Min

	返回List中的最小的元素，和max函数对应
	例子
	lists:min([1,2,3]).
	结果
	1

	 

## 🍀 lists:nth(N, List) -> Elem

	返回List中的第N个元素。
	例子
	lists:nth(2,[{name,"zhangsan"},{name,"lisi"},{name,"wangmazi"}]).
	结果
	{name,"lisi"}

	 

## 🍀 lists:nthtail(N, List) -> Tail

	返回List列表中第N个元素后面的元素
	例子
	lists:nthtail(3, [a, b, c, d, e]).
	结果
	[d,e]


## 🍀 lists:prefix(List1, List2) -> boolean()

	如果List1是List2的前缀(也就是说List1和List2前部分相同)，那么返回true，否则返回false

## 🍀 lists:reverse(List1) -> List2

	将List1反转
	例子
	lists:reverse([1,2,3,4]).
	结果
	[4,3,2,1]

	 

## 🍀 lists:reverse(List1, Tail) -> List2

	将List1反转，然后将Tail接在反转List1的后面，然后返回
	例子
	lists:reverse([1, 2, 3, 4], [a, b, c]).
	[4,3,2,1,a,b,c]

	 

## 🍀 lists:seq(From, To) -> Seq

	这个函数返回一个从 From 到 To 的一个整型列表。
	例子
	lists:seq(1,10).
	结果
	[1,2,3,4,5,6,7,8,9,10]
	 
## 🍀 lists:seq(From, To, Incr) -> Seq

	返回一个整型列表，这个列表的后一个元素比前一个元素大Incr。
	例子
	lists:seq(1,10,4).
	[1,5,9]

	 
## 🍀 lists:sort(List1) -> List2

	将List1中的元素从小到大排序，然后返回新的一个列表。
	例子
	lists:sort([3,2,1]).
	结果
	[1,2,3]

## 🍀 lists:split(N, List1) -> {List2, List3}

	将List1分成List2和List3
	其中List2包括List1的前N个元素，List3包含剩余的。
	例子
	lists:split(3,[1,2,3,4,5]).
	结果
	{[1,2,3],[4,5]}


	这个函数和partition数有区别，partition是遍历全部的List，而splitwith在遍历时遇到false的情况
	则马上结束遍历，返回结果。
## 🍀 lists:sublist(List1, Len) -> List2

	返回从第一个元素到第Len个元素的列表，这个Len大于List1的长度时，返回全部。
	例子
	lists:sublist([1,2,3,4,5,6],3).
	结果
	[1,2,3]

	 
## 🍀 lists:sublist(List1, Start, Len) -> List2

	返回从List1的第Start个位置开始，后面Len个元素的列表。
	例子
	lists:sublist([1,2,3,4], 2, 2).
	结果
	[2,3]

	 
## 🍀 lists:subtract(List1, List2) -> List3

	等同于 List1 -- List2
	这个函数功能是返回一个List1的副本，对于List2中的每个元素，第一次在List1副本中出现时被删掉。
	例子
	lists:subtract("112233","12").
	结果
	"1233"

	 
## 🍀 lists:suffix(List1, List2) -> boolean()

	如果List1是List2的后缀，那么返回true，否则返回false
	例子
	lists:suffix("22","1122").
	结果
	true

	 
## 🍀 lists:sum(List) -> number()

	返回List中每个元素的和。其中List中的元素都应该是number()类型的。
	例子
	lists:sum([1,2,3,4]).
	结果
	10

## 🍀 lists:ukeymerge(N, TupleList1, TupleList2) -> TupleList3

	TupleList1和TupleList2里面的元素都是元组
	将TupleList1和TupleList2合并，合并的规则是按照元组的第N个元素，如果第N个元素有相同的，那么保留TupleList1中
	的，删除TupleList2中的。

	 

## 🍀 lists:ukeysort(N, TupleList1) -> TupleList2

	TupleList1里面的元素都是元组
	这个函数也同样返回一个元素是元组的列表，返回的这个列表是按照元组的第N个元素来排序的，如果元组中有出现
	第N个元素相同的情况，删除掉后面的一个元组。
	例子
	lists:ukeysort(1,[{name,"zhangsan"},{sex,"male"},{name,"himan"}]).
	结果
	[{name,"zhangsan"},{sex,"male"}]

	 
## 🍀 lists:umerge(ListOfLists) -> List1

	这个函数和merge唯一不同的就是，里面不能出现相同的元素，如果出现相同的，那么删除之，只保留一个唯一的
	例子
	lists:umerge([[1,2],[2,3]]).
	结果
	[1,2,3]
	分析：由于[[1,2],[2,3]]中merge后是[1,2,2,3],这个时候有两个相同的元素2，所以只保存一个2，所以结果是[1,2,3].

## 🍀 lists:umerge3(List1, List2, List3) -> List4

	将List1, List2, List3合并
	和merge3不同的是返回的List4中不能出现重复的元素
	例子
	lists:merge3([1,2],[2,3],[3,4]).
	结果
	[1,2,3,4]

	 
## 🍀 lists:unzip(List1) -> {List2, List3}

	List1里面的元素是元组，每个元组由两个元素组成，返回值List2包含每个List1中每个元组的第一个元素
	返回值List3包含每个List1中每个元组的第二个元素。
	例子
	lists:unzip([{name,"zhangsan"},{sex,"male"},{city,"hangzhou"}]).
	结果
	{[name,sex,city],["zhangsan","male","hangzhou"]}

	 
## 🍀 lists:unzip3(List1) -> {List2, List3, List4}

	List1里面的元素是元组，每个元组由三个元素组成，返回值List2包含每个List1中每个元组的第一个元素；
	返回值List3包含每个List1中每个元组的第二个元素；返回值List4包含每个List1中每个元组的第三个元素。
	例子
	lists:unzip3([{name,"zhangsan","apple"},{sex,"male","banana"},{city,"hangzhou","orange"}]).
	结果
	{[name,sex,city],
	 ["zhangsan","male","hangzhou"],
	 ["apple","banana","orange"]}
	注意，最终返回的是一个元组。

## 🍀 lists:usort(List1) -> List2

	将List1按照从小到大的顺序排序，如果排序后有重复的元素，删除重复的，只保存一个唯一的。
	例子
	lists:usort([4,3,2,1,2,3,4]).
	结果
	[1,2,3,4]

## 🍀 lists:zip(List1, List2) -> List3

	将两个长度相同的列表合并成一个列表
	List3是里面的每一个元组的第一个元素是从List1获取的，而每个元组的第二个元素是从List2中获取的
	例子
	lists:zip([name,sex,city],["zhangsan","male","hangzhou"]).
	结果
	[{name,"zhangsan"},{sex,"male"},{city,"hangzhou"}]
	注意，如果List1和List2长度不一致，那么这个函数将会报错。

	 
## 🍀 lists:zip3(List1, List2, List3) -> List4

	将三个长度相同的列表合并成一个列表
	List4是里面的每一个元组的第一个元素是从List1获取的，而每个元组的第二个元素是从List2中获取的
	每个元组的第三个元素是从List3中获取的。
	例子
	lists:zip3([name,sex,city],["zhangsan","male","hangzhou"],["nick","1","zhejiang"]).
	结果
	[{name,"zhangsan","nick"},
	 {sex,"male","1"},
	 {city,"hangzhou","zhejiang"}]

	 


# 🚩 RegExp 模块
- https://erlang.org/doc/man/re.html#regexp_syntax
- http://erlang.org/documentation/doc-5.7.4/lib/stdlib-1.16.4/doc/html/regexp.html
- http://gashero.yeax.com/?p=65


## 🍀 re:compile(Regexp) -> {ok, MP} | {error, ErrSpec}
Types
Regexp = iodata()
MP = mp()
ErrSpec =
	{ErrString :: string(), Position :: integer() >= 0}
The same as compile(Regexp,[])

## 🍀 re:compile(Regexp, Options) -> {ok, MP} | {error, ErrSpec}
Types
Regexp = iodata() | unicode:charlist()
Options = [Option]
Option = compile_option()
MP = mp()
ErrSpec =
	{ErrString :: string(), Position :: integer() >= 0}

## 🍀 re:inspect(MP, Item) -> {namelist, [binary()]}
OTP 17.0
Types
MP = mp()
Item = namelist



## 🍀 re:replace(Subject, RE, Replacement) -> iodata() | unicode:charlist()
Types
Subject = iodata() | unicode:charlist()
RE = mp() | iodata()
Replacement = iodata() | unicode:charlist()
Same as replace(Subject, RE, Replacement, []).

## 🍀 re:replace(Subject, RE, Replacement, Options) ->
		   iodata() | unicode:charlist()
Types
Subject = iodata() | unicode:charlist()
RE = mp() | iodata() | unicode:charlist()
Replacement = iodata() | unicode:charlist()
Options = [Option]
Option =
	anchored | global | notbol | noteol | notempty |
	notempty_atstart |
	{offset, integer() >= 0} |
	{newline, NLSpec} |
	bsr_anycrlf |
	{match_limit, integer() >= 0} |
	{match_limit_recursion, integer() >= 0} |
	bsr_unicode |
	{return, ReturnType} |
	CompileOpt
ReturnType = iodata | list | binary
CompileOpt = compile_option()
NLSpec = cr | crlf | lf | anycrlf | any

Example:

	re:replace("abcd","c","[&]",[{return,list}]).
	gives

	"ab[c]d"
	while

	re:replace("abcd","c","[\\&]",[{return,list}]).
	gives

	"ab[&]d"

## 🍀 re:run(Subject, RE) -> {match, Captured} | nomatch
Types
Subject = iodata() | unicode:charlist()
RE = mp() | iodata()
Captured = [CaptureData]
CaptureData = {integer(), integer()}
Same as run(Subject,RE,[]).

## 🍀 re:run(Subject, RE, Options) ->
	   {match, Captured} | match | nomatch | {error, ErrType}
Types
Subject = iodata() | unicode:charlist()
RE = mp() | iodata() | unicode:charlist()
Options = [Option]
Option =
	anchored | global | notbol | noteol | notempty |
	notempty_atstart | report_errors |
	{offset, integer() >= 0} |
	{match_limit, integer() >= 0} |
	{match_limit_recursion, integer() >= 0} |
	{newline, NLSpec :: nl_spec()} |
	bsr_anycrlf | bsr_unicode |
	{capture, ValueSpec} |
	{capture, ValueSpec, Type} |
	CompileOpt
Type = index | list | binary
ValueSpec =
	all | all_but_first | all_names | first | none | ValueList
ValueList = [ValueID]
ValueID = integer() | string() | atom()
CompileOpt = compile_option()
See compile/2.
Captured = [CaptureData] | [[CaptureData]]
CaptureData =
	{integer(), integer()} | ListConversionData | binary()
ListConversionData =
	string() |
	{error, string(), binary()} |
	{incomplete, string(), binary()}
ErrType =
	match_limit | match_limit_recursion | {compile, CompileErr}
CompileErr =
	{ErrString :: string(), Position :: integer() >= 0}


	re:run("cat","(|at)",[global]).

	re:run("ABCabcdABC","abcd",[]).

	{match,[{3,4}]}

	re:run("ABCabcdABC",".*abcd.*",[]).

	{match,[{0,10}]}

	re:run("ABCabcdABC",".*(abcd).*",[]).

	{match,[{0,10},{3,4}]}


## 🍀 re:split(Subject, RE) -> SplitList
Types
Subject = iodata() | unicode:charlist()
RE = mp() | iodata()
SplitList = [iodata() | unicode:charlist()]
Same as split(Subject, RE, []).

## 🍀 re:split(Subject, RE, Options) -> SplitList
Types
Subject = iodata() | unicode:charlist()
RE = mp() | iodata() | unicode:charlist()
Options = [Option]
Option =
	anchored | notbol | noteol | notempty | notempty_atstart |
	{offset, integer() >= 0} |
	{newline, nl_spec()} |
	{match_limit, integer() >= 0} |
	{match_limit_recursion, integer() >= 0} |
	bsr_anycrlf | bsr_unicode |
	{return, ReturnType} |
	{parts, NumParts} |
	group | trim | CompileOpt
NumParts = integer() >= 0 | infinity
ReturnType = iodata | list | binary
CompileOpt = compile_option()
See compile/2.
SplitList = [RetData] | [GroupedRetData]
GroupedRetData = [RetData]
RetData = iodata() | unicode:charlist() | binary() | list()

example:

	re:split("Erlang","[ln]",[{return,list}]).

	["Er","a","g"]

	re:split("Erlang","([ln])",[{return,list}]).

	["Er","l","a","n","g"]
	
	re:split("Erlang","[lg]",[{return,list}]).

	["Er","an",[]]

	re:split("Erlang","[lg]",[{return,list},trim]).

	["Er","an"]

re:split("Erlang","[lg]",[{return,list},{parts,2}]).
gives

["Er","ang"]








## 🍀 regexp:match(String,RegExp) -> MatchRes

	String=RegExp=string()
	MatchRes={match,Start,Length} | nomatch | {error,errordesc()}
	Start=Length=integer()

在字符串String中寻找正则表达式RegExp的第一个最长的匹配。搜索最长可能匹配，如果几个结果相同则返回第一个。返回如下：

{match,Start,Length} ：匹配成功，返回开始和长度。
nomatch ：无法匹配。
{error,Error} ：发生错误。


## 🍀 regexp:first_match(String,RegExp) -> MatchRes

	String=RegExp=string()
	MatchRes={match,Start,Length} | nomatch | {error,errordesc()}
	Start=Length=integer()

寻找第一个匹配，通常比 match 更快，并确定匹配的存在与否。返回值同 match 。



## 🍀 regexp:matches(String,RegExp) -> MatchRes

	String=RegExp=string()
	MatchRes={match,MatchRes} | {error,errordesc()}
	MatchRes=list()

返回所有的不重叠匹配结果，返回如下：

{match,Matches} ：如果正则表达式是正确的，哪么如果没有匹配则返回空的列表。每个元素都是形如 {Start,Length} 的元组。
{error,Error} ：正则表达式有错。


## 🍀 regexp:sub(String,RegExp,New) -> SubRes

	String=RegExp=New=string()
	SubRes={ok,NewString,RepCount} | {error,errordesc()}
	RepCount=integer

将第一个匹配成功的子字符串替换成New。字符串New中的 & 符号代表被替换掉的字符串，而 & 则代表原来的 & 符号。返回结果如：

{ok,NewString,RepCount} ：如果正则表达式正确，则RepCount为替换执行的次数，为0或1。
{error,Error} ：正则表达式有误。


## 🍀 regexp:gsub(String,RegExp,New) -> SubRes
基本等同于 sub ，不同在于所有的不重叠会被替换，而不仅仅是替换一次。


## 🍀 regexp:split(String,RegExp) -> SplitRes

	String=RegExp=string()
	SubRes={ok,FieldList} | {error,errordesc()}
	FieldList=[string()]

通过正则表达式将字符串切割成多个字段。如果分隔字符是空格 ” ” ，则分隔字符也隐含包括TAB字符。其他分隔字符没有此效应。返回值如下：

{ok,FieldList} ：字符串已经被切分成各个字段了。
{error,Error} ：正则表达式有误。


## 🍀 regexp:sh_to_awk(ShRegExp) -> AwkRegExp

	ShRegExp=AwkRegExp=string()
	SubRes={ok,NewString,RepCount} | {error,errordesc()}
	RepCount=integer()

转换sh类型的正则表达式到awk类型的正则表达式。返回转换过的字符串。sh正则表达式是给shell用于匹配文件名用的，支持如下特殊字符：

	：匹配任何数量任何字符
	? ：匹配单一任意字符
	[…] ：匹配范围内的字符，字符范围用符号 – 来分隔。如果第一个字符是 ! 则是相反的匹配。

尽管sh正则表达式并不强大，但在大多数时候却很好用。


## 🍀 regexp:parse(RegExp) -> ParseRes

	RegExp=string()
	ParseRes={ok,RE} | {error,errordesc()}

转换正则表达式字符串到可供其他正则表达式函数使用的内部格式。可以在调用其他函数时替换正则表达式的位置。这对于同一个正则表达式需要使用多次时非常有效。返回值：

{ok,RE} ：匹配成功则返回内部表示法。
{error,Error} ：正则表达式有误。


## 🍀 regexp:format_error(ErrorDescription) -> Chars

	ErrorDescriptor=errordesc()
	Chars=[char() | Chars]

在匹配失败时返回匹配错误的描述信息。

## 🍀 Regular Expression 正则表达式
- https://erlang.org/doc/man/re.html#regexp_syntax

这里提到的正则表达式知识 egrep 和AWK语言中的子集。他们由如下字符组成：

	c	非特殊意义的字母c
	\c	匹配转码序列或字面上的c
	.	匹配任意字符
	^	字符串开头
	$	字符串结尾
	[abc…]	字符类，即指定字符组成的集合。字符范围是两个字符用 – 连接
	[^abc…]	否定字符类，不匹配集合中的字符
	r1 | r2	轮流，匹配r1或r2
	r1r2	串联，匹配r1并且r2
	r+	匹配一个或更多的r
	r*	匹配零个或多个的r
	r?	匹配零个或一个的r
	分组，匹配r

转码序列允许等同于Erlang字符串：

	\b	退格
	\f	换页(form feed)
	\n	换行(line feed)
	\r	回车
	\t	TAB
	\e	escape ESC
	\v	纵向TAB
	\s	空格
	\d	删除
	\ddd	八进制值ddd
	\c	任何除了上面字符以外的，如\或”

可以让这些函数工作的更方便，比如在 io:get_line 中读取新行，当然字符 $ 也会匹配 “…n” 。如下例子时Erlang一些数据类型的正则表达式：

	Atoms	[a-z][0-9a-zA-Z_]*
	Variables	[A-Z_][0-9a-zA-Z_]*
	Floats	(\+|-)?[0-9]+\.[0-9]+((E|e)(\+|-)?[0-9]+)?

正则表达式是以Erlang字符串来编写的。这意味着字符 \ 或 ” 必须以转码方式来书写。例如浮点数的正则表达式就是： (\\+|-)?[0-9]+\\.[0-9]+((E|e)(\\+|-)?[0-9]+)? 。

正则表达式并不是一定要有转义序列字符的，他们可以自动生成。除了用在不同的地方，否则与普通的Erlang字符串是一样的。


# 🚩 unicode 模块
- http://erlang.org/doc/man/unicode.html

## 🍀 unicode:bom_to_encoding/1
## 🍀 unicode:characters_to_binary/1
## 🍀 unicode:characters_to_binary/2
## 🍀 unicode:characters_to_binary/3
## 🍀 unicode:characters_to_list/1
## 🍀 unicode:characters_to_list/2
## 🍀 unicode:characters_to_nfc_binary/1
## 🍀 unicode:characters_to_nfc_list/1
## 🍀 unicode:characters_to_nfd_binary/1
## 🍀 unicode:characters_to_nfd_list/1
## 🍀 unicode:characters_to_nfkc_binary/1
## 🍀 unicode:characters_to_nfkc_list/1
## 🍀 unicode:characters_to_nfkd_binary/1
## 🍀 unicode:characters_to_nfkd_list/1
## 🍀 unicode:encoding_to_bom/1



























