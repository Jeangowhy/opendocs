

# =🚩 Compilers and Interpreters
- [AST Explorer](https://astexplorer.net/)
- [TCC - Tiny C Compiler](http://bellard.org/tcc/)
- Advanced Compiler Design and Implementation by Steven Muchnick
- Compilers Principles, Techniques, and Tools, by Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman
- [Cooper, Torczon: Engineering a Compiler, 2nd Edition](https://booksite.elsevier.com/9780120884780/)
- [Programming Language Pragmatics 4th, Morgan Kaufmann Michael L. Scott](https://booksite.elsevier.com/9780124104099/)
- Writing Compilers and Interpreters: A Modern Software Engineering Approach Using Java
- Modern Compiler Implementation in C by Andrew W.Appel, Jens Palsberg
- Modern Compiler Implementation in C/ML/Java by Andrew W. Appel
- [Modern Compiler Implementation in C/ML/Java](https://www.cs.princeton.edu/~appel/modern/)
- [编译原理初学者入门指南 by pixelcao](https://cloud.tencent.com/developer/article/1776822)
- [有限状态机之 KMP 字符匹配算法](https://labuladong.gitee.io/algo/3/27/99/)
- [NLP - Natural Language Processing](https://algorithmia.com/blog/introduction-natural-language-processing-nlp)
- [Natural Language Processing with Python](https://www.nltk.org/book_1ed/)
- [Let's Build a Compiler, by Jack Crenshaw](https://compilers.iecc.com/crenshaw/)
- [从 Graph 到 Graph Convolution：漫谈图神经网络模型](https://www.cnblogs.com/SivilTaram/p/graph_neural_network_1.html)

计算机编译原理是涉及知识面非常广泛的一门课程，以下罗列部分较重要的知识点：

- 掌握计算机原理与结构。
- 语言学或语言的本质认识，掌握一门基本的计算机语言，如 C/C++/JavaScript/Python。
- 掌握正式表达式的应用，Regular Expression Language。
- 掌握一定的数据结构与算法知识，特别是字符串模式匹配、二叉树等。
- 良好的数理逻辑与抽象能力，图论相关算法 Graph Algorithms。

艾伦·麦席森·图灵（Alan Mathison Turing，1912.6.23 - 1954.6.7），英国数学家、逻辑学家、密码学家和英国首位计算机科学家，被誉为计算机科学和人工智能之父。

人类的问题存在可证明与不可证明两种：

- 1 + 1 等于几？
- 明天几点起床？ Undecidable Problem

在可计算性理论 Computability theory 中，把那些可证明或可解决的问题统称为**可计算问题**，这需要构建数学模型来判定问题是否可计算，图灵给出的答案就是图灵机，Turing Machine 是计算机世界的理论基石。《论可计算数及其在判定性问题上的应用》论文于 1936 年发表，On Computable Numbers, with an Application to the Entscheidungsproblem。

图灵机是图灵受打字机的启发而假想出来的数学模型，一种抽象机器，是一个很直观的模型：

➡ 一条无限长的纸带（tape），纸带被分成一个个相邻的格子（square），每个格子都可以写上至多一个字符（symbol）。

➡ 一个字符表（alphabet），即字符的集合，它包含纸带上可能出现的所有字符，包括一个特殊的空白字符（blank）。

➡ 一个读写头（head），可以每次向左/右移动一个格子，它可以读取/擦除/写入当前格子的内容。

➡ 一个状态（state），记录机器当前所处的状态（运行/终止）。当这个状态从运行变为终止，则运算结束，机器停机并交回控制权。如果你了解有限状态机，它便对应着有限状态机里的状态。

➡ 一个有限的指令集（instructions table），它记录着读写头在特定情况下应该执行的行为。

可以想象读写头有一本操作指南，里面记录着很多条类似于“当处于编号 53 的格子且内容为 0 时，擦除，改写为 1，并向右移一格。此外，令下一状态为运行。”这样的命令。纸带可以是完全空白，也可以在某些格子里预先就有写上部分字符作为输入。

停机问题（Halting Problem）是逻辑计算的焦点问题，它的表述是这样的：给定一个任意程序的描述和一个有限的输入，求解该程序是结束运行，还是会死循环？

Halting Problem: given the description of an arbitrary program and a finite input, decide whether the program finishes running or will run forever.

其实图灵机的状态是为了判定是否可以停机而设计的，而图灵机停机问题实际上就是理发师悖论(罗素悖论)，是不可计算的计算问题。

The Halting Problem: Proof That Computers Can’t Do Everything.

停机问题不可解的结果证明了算法不是万能的，当算法计算自己时，即发生自涉时，就会出现悖论！虽然 Halting Problem 的描述有点难懂，但是用罗素悖论去理解也是一样的。



迄今为止，人类设计的所有计算模型都没有超出图灵机模型所有具有的能力。任何计算装置：用算盘的人、手机、个人电脑、超级计算机等等，都没有超越图灵机模型的计算能力，不考虑计算速度性能，只从可计算性考虑。

图灵完备性 Turing completness 表示为：对于两个计算机 A 和 B，如果 A 可以模拟 B，B 可以模拟 A，就称他们是图灵等价的。如果某个系统能够模拟图灵机，那么就称该系统是图灵完备的。

计算机本质是逻辑运算机器，其实就是图灵机的高级版，工作原理相通，纸带就是输入输出设备，控制器是机械的，程序是预先编程好的。现代计算机的原型是冯·诺伊曼搞出来的，他在运算器中事先内置操作并用带有操作码与地址码的指令来对存储器内数据进行运算与读写，也就是他用二进制实现了图灵机。

图灵另一个很出名的成就就是图灵测试，图灵认为机器是可以具有智能的，因此他构想出了一个猜性别的测试，进而衍生为猜测对话的是人还是机器的测试。这点其实很有意思，图灵应该是当时少数清楚通用计算机运行原理的学者，而他也正是通用计算机机械原型的设计者，按说他最知道机器跟人的区别，但他却认为机器可以有智能。也就是说，原理上的不同并不是智能差异的论据，图灵可能想的更深了一层：人脑其实也是个机械，虽然原理到今天也没弄明白，而智能也就是出现在这个机械的各种生化反应之中的，那么同样作为机械，为什么就不能也有智能呢？


忽略繁杂的用途，按计算机语言表达能力分类，有以下两种：

➡ DSL（Domain Specific Language）：特定领域语言，比如用来描述数据的 yaml、json、sql、xml 和 html，都属于面向特定领域的专用语言，用在正确的领域上就是利器，用错地方就是自找麻烦，比如用 sql 来一段冒泡排序；

➡ GPL（General Purpose Language）：通用编程语言，比如 C、JavaScript、Golang，这类语言是图灵完备 的，可以用一门 GPL 语言去设计和实现一种 DSL 语言。

程序设计语言虽然数量繁多，但也无非属于以下三大类，通常称之为程序设计语言范式，Programming Paradigm：

- *命令式语言* IP - Imperative Programming，如 Assebmly、C、C++、Java、C#、Go、Rust 等，给 CPU 发指令实现程序逻辑；
- *函数式语言* FP - Functional Programming，如 Erlang、Scala 和 Clojure（Lisp 语言方言），逻辑抽象为函数，复杂的逻辑（高阶函数）可以通过操纵（传递、调用、返回）简单的逻辑（低阶函数）和数据来表达。没有了时序与状态耦合关系，隐藏了计算的很多细节，程序本身模块化更强，也更利于并行处理。这也使 FP 语言如 Haskell 在金融等领域（高并发且需要避免程序并发错误）受到瞩目。
- *逻辑式语言* LP - Logic Programming，如 Prolog，更抽象了，计算细节干脆不见了，直接解决直观表达的逻辑。

在数据驱动计算日益增加的背景下，LP 中的声明式语言（Declarative programming language，如 Datalog）作为代表开始崭露头角，在诸多专家领域开拓应用市场。

函数式编程的函数是指数学上的函数：给定输入固定的输出，没有副作用。函数式语言有两个个主要的特点：

1. 函数是“头等公民”，First-class function。
2. 数据的“immutability”. 操作的“无副作用”，这规避了‘锁’。

C/C++ 是最成功的过程式编程语言（Procedural programming）与面向对象编程（Object-oriented programming）之一。注意，C 语言有函数，但它不是函数式语言，任何语言都可以用函数式的风格。

这些其实都是在静态层面上对语言的描述，不像自然语言那样灵活和不可确定，计算机语言需要在语言形式和含义都有确定性，即 form(syntax) 和 meaning(semantics) 都不存二义性。也没有上下文因素干扰，所以其语法称作 Unambiguous grammar 或者上下文无关文法 CFG - Context free grammars。为了执行这些语言，就需要对其进行解析，还原出语言本身所描述的信息结构。

所谓上下文有关，举例来说，就是同样一句话“非常好”，在回答“今天感觉如何？”或“味道如何？”等不同的问题时具有不同的含义。

计算语言学（Computational Linguistics）是跨学科的研究领域，其目标是找出自然语言的规律，建立运算模型，最终让电脑能够像人类一样分析、理解并处理自然语言。

计算语言学有时也称计量语言学（Measuring Linguistic），数理语言学（Mathematical Linguistics），自然语言理解 （Natural Language Understanding），自然语言处理（Natural Language Processing），人类语言技术（Human Language Technology）。

在计算机科学与自然语言的交叉学科，有一门智能科学与技术的课程叫《自然语言理解》，对应计算机语言领域的《编译原理》。NLP - Natural Language Processing 复杂度上增加了上下文的处理，通常还和语音识别、合成联系在一起。

自然语言的机器翻译大致分为三个发展阶段：

- 基于规则的翻译方法：先分析句子中单词的词性，将每个词翻译成目标语言，再根据语法规则等进行调整，输出结果。
- 基于统计的翻译方法：在庞大的语料库中进行搜索出现概率最高的短语或结果，以获得更准确的输出。
- 基于神经网络的翻译：通过学习大量成对的语料（平行语料库）让神经网络自己学习语言的特征，找到输入和输出的关系，端到端的输出翻译结果，取得了不错的效果。但目前的机器翻译系统距离翻译的最高标准信、达、雅还有很远的距离。

自然语言处理（NLP）就是在机器语言和人类语言之间沟通的桥梁，以实现人机交流的目的。自然语言处理有两大任务，NLU - Natural Language Understanding 和 NLG - Natural Language Generation。

NLP 难点在于：

- 语言是没有规律的，或者说规律是错综复杂的。
- 语言是可以自由组合的，可以组合复杂的语言表达。
- 语言是一个开放集合，我们可以任意的发明创造一些新的表达方式。
- 语言需要联系到实践知识，有一定的知识依赖。
- 语言的使用要基于环境和上下文。

NLP 处理的 6 个步骤：

- 分词 – Tokenization
- 词干提取 – Stemming
- 词形还原 – Lemmatization
- 词性标注 – Parts of Speech
- 命名实体识别 – NER - Named-entity recognition
- 分块 – Chunking

NLG 处理的 6 个步骤：

内容确定 – Content Determination
文本结构 – Text Structuring
句子聚合 – Sentence Aggregation
语法化 – Lexicalisation
参考表达式生成 – REG - Referring Expression Generation
语言实现 – Linguistic Realisation

自然语言专家，乔姆斯基（Noam Chomsky）的定义——语言是按照一定规律构成的句子和符号串的有限或无限的集合。

对工程师来说，解决问题的第一步就是先知道你面对的是什么问题：使用编译原理的知识来解析开头的表达式，相当于定义一个简陋的 DSL 语言，并编写词法解析器和语法解析器（lexer & parser）来将其转换成 AST 抽象语法树，进而对其进行处理。

手写词法解析器和语法解析器（lexer & parser）是传统手艺，现代的工程应用上，更多是使用工具生成它们，而不是手动实现。通常可以使用 YACC (Yet Another Compiler Compiler) 这类工具生成词法分析器的实现代码。

不管是为特定领域而发明的各类 DSL，还是图灵完备的 GPL 语言，他们基本都符合*巴科斯范式* BNF - Backus-Naur Form。

BNF 是一种上下文无关文法，CFG - Context Free Grammars。而人类的语言就是一种上下文有关文法，我随时都可以幽默一句 “以上说的都是废话”，戏弄一下读者。

Python 语言语法参考文档有相应的介绍，参考 Python-3.10.2\Doc\reference\introduction.rst 或 lexical_analysis.rst。

Backus-Naur Form 定义语法，有几个组成部分：

• a set of terminal symbols
• a set of non-terminal symbols
• a set of production rules of the form

    Left-Hand-Side ::= Right-Hand-Side 

摘自 Python 语法文档的实例，定义一个 `name` 规则：由小写字母开头，并后缀任意的小写字母及下划线。

    name: lc_letter (lc_letter | "_")*
    lc_letter: "a"..."z"


一个编译器的实现涉及多个处理流程：

- Lexical analysis
- Syntax analysis
- Semantic analysis
- Intermediate code generation
- Optimization
- Code generation

通过词法分析，在脚本代码中提取出 Tokens 并经过编译器初步处理，就会转换成 AST - Abstract Syntax Tree，Token trees 则是介于 Tokens 与 AST 之间的东西。

计算机语言和人类自然语言的处理是同一回事，只不过人类自然语言具有上下文的影响，处理起来更复杂。简单来说，将英语“I have a dream”编译成中文“我有一个梦想”，就先要进行分词处理 Tokenize，对句子进行拆解处理，每个单词就是一个 Token，再根据语言的语法结构解析成 AST，然后再进行更深入的处理。

将源代码的字符流转换成 Token 是编译原理最开始的部分，做这一步工作的叫做词法分析器 Lexical Analyzer，然后转换 AST 的有 Syntax Analyzer，即 Parser。

编译原理这门课程的学习少不了计算机硬件体系、和编译原理这两块基本内容，数据结构与算法更是基础的基础，推荐教材：

- 计算机系统要素 The Elements of Computer Systems: Building a Modern Computer from First Principles
- 编译原理与实践 Compiler Construction Principles and Practice 

编译是个理论与工程经验并重的课，一定要自己动手，比如这几位同学的作品。最后一个是 Eli Bendersky 用 Python 开发的 C99 兼容解析器：

    git clone git@github.com/rswier/c4
    git clone git@github.com:aixiangfei/jack-compiler
    git clone git@github.com:lotabout/write-a-C-interpreter
    git clone git@github.com:eliben/pycparser

学习编译原理最好的姿势：实际动手做一个编译器出来，不管效果如果，这样对能力有很大的提升。所以，带着写一个编译器的目的来学习编译原理，这才是学习该有的姿态。

在没有真正认识编译原理之前，看到各种概念肯定是非常抽象的，什么词法，什么语法，什么 Token，什么语义，什么中间代码，什么优化，什么代码生成，这一切都非常地抽象。对于已经掌握编译原理的人，自然是到处爆名词，侃术语，这对于没有入门编译的学生而言几乎没有任何好处，对于自学者更是个灾难！

对于一个正统的 C/C++ 语言编译器来说，将 C/C++ 源代码编译为 CPU 可以执行指令，或是 x86 架构，或是 ARM 移动端 CPU，这都不重要，关键是这些编译器所做的工作就是：将高级语言（源语言）翻译成汇编语言或机器语言（目标语言）的过程，这也是编译的正式定义。

但是编译原理入门可以有简明的法门，并不一定需要知道机器指令的结构，也并不一定需要知道操作系统的程序执行机制。

比如，以 C/C++ 语言为基础，假设这是自己目前已经掌握的语言，也可以是 JavaScript 或 Python，这不是最重要的，关键是有一门计算机语言作用可用的工具来实现自己的编译器。

以 Python 语言的 CPython 解释器实现为例，假设源代码为 "abc" + "xyz" 这样的字符串连接语句，通过语法解析器对源代码进行分析后，得到一个 Tokens 列表：

| Token Name | Value |   Iterpreter Implementation   |
|------------|-------|-------------------------------|
| STRING     | "abc" | PyObject (tp_name="str")      |
| OP         | "+"   | PySequenceMethods (sq_concat) |
| STRING     | "xyz" | PyObject (tp_name="str")      |

Token 列表可以在以下文件中找到，根据 Python 语法规则文件，[generate_token.py](Tools/scripts/generate_token.py) 脚本可以自动生成以下文件：

- [Tokens 规则输入文件](Python-3.10.2\Grammar\Tokens)
- [py generate_token.py h](Python-3.10.2\Include\token.h)
- [py generate_token.py c](Python-3.10.2\Parser\token.c)
- [py generate_token.py rst](Python-3.10.2\Doc\library\token-list.inc)
- [py generate_token.py py](Python-3.10.2\Lib\token.py)

Tokenize 只是源代码解析的前期工作，在编译实现中也叫前端实现，在后端是关于目标代码生成与优化的工作。得到目标代码后，根据不同语言实现，目标代码运行于不同的环境，如 C/C++ 目标代码运行于 CPU 硬件指令系统上，而 Python 这样的脚本语言则运行于解析器。Python 解释器的来源是 CPython 实现，即 C 实现的 Python 运行环境。

对于上面的这个代码片段例子，作为一个系统，它在解释器上的最终实现体现在许多 C 语言代码上，但目前只需关注其实对应的操作实现部分，也就是源代码进行字符串连接操作，在解释器上的实现。

编译后得到的目标代码最终就是在调用 PySequenceMethods 结构中指定的 *sq_concat* 方法：

```c
// Python-3.10.2\Include\cpython\object.h
typedef struct {
    lenfunc      sq_length;
    binaryfunc   sq_concat;
    ssizeargfunc sq_repeat;
    ssizeargfunc sq_item;
    void    *was_sq_slice;
    void    *was_sq_ass_slice;
    ssizeobjargproc sq_ass_item;
    objobjproc sq_contains;

    binaryfunc   sq_inplace_concat;
    ssizeargfunc sq_inplace_repeat;
} PySequenceMethods;
```

如果是在场字符串连接，也就是 += 连接方式，对应的实现就是 *sq_inplace_concat* 方法。这些底层设计决定了 Python 语言的能力，如 *sq_repeat* 方法，它可以很方便地实现 Python 程序中的字符串复制操作，"#" * 5 就可以得到 "#####"。

虽然，在这里跳过了 ASTs (Abstract Syntax Trees) 这部分的以下大量解析器算法内容，但是 AST 作为编译器中一个重要的前端数据结构，在编译系统实现中是必不可少的。所谓抽象，就是指 AST 在数据结构上并非真的像棵树，只不过 AST 数据结构各个节点展开来看，它有根节点，进而形成各个分枝，这非常像一棵树的形态。

基于解释器运行的脚本语言和基于 CPU 指令运行静态编译语言，其实没有本质区别，只不过在实现上有所不同。基于解释器的语言，需要为目标实现一个可执行目标代码的 Interpreter 程序，而基于 CPU 指令的语言，生成的目标代码则包含 CPU 指令集。当然，这点差点还是蛮大的，毕竟 CPU 指令集是固定的，而解析器的代码规则可以自由更改。

除非需要实现基于指令的运行环境，否则不需要对程序的内存模型深入学习。进程的内存会被分成几个段，在内存中的位置类似于下图：

    +------------------+
    |    stack   |     |      high address
    |    ...     v     |
    |                  |
    |                  |
    |                  |
    |                  |
    |    ...     ^     |
    |    heap    |     |
    +------------------+
    | bss  segment     |
    +------------------+
    | data segment     |
    +------------------+
    | text segment     |      low address
    +------------------+

- （text）代码段：用于存放代码（指令）。
- （data）数据段：用于存放初始化了的数据。
- （bss）未初始化数据段：用于存放未初始化的数据，即那些只申请了内存空间变量。
- （stack）栈内存：用于处理函数调用相关的数据，如调用帧（calling frame）或是函数的局部变量等。
- （heap）堆内存：用于为程序动态分配内存。

利用手上掌握的计算机语言来设计一个编译程序就是最好的编译原理入门：

- 首先，编译器需要编译源程序，这门程序肯定要有语言规范或者语法规则；
- 制定最终生成代码的格式及执行规则，后面需要设计程序将源代码转译成目标代码；
- 利用现有的编程工具编写可以用于执行生成代码的解析器，或者叫做虚拟机 Virtual Machine；
- 根据，语言的法规则生成目标代码，这个过程中少不了分析源代码的过程，而 Token 就是分析得到基本语法要素。

抽象语法树其实就是用树状数据结构来组织分析结果的工具，它不是必需的，而 AST 的大量应用实际上就是证明了它好用。语法分析环节涉及字符串检索处理，像 KMP - Knuth-Morris-Pratt 或 Sunday 这类字符串搜索算法肯定需要掌握。这是一个著名的字符串匹配算法，效率很高，但是确实有点复杂，所以最后还是算法为王。


实例操作，假定以下为一种新的 M 语言的函数定义和调用，甚至可以直接使用 C/C++ 的语法，这取决复杂度和工作量：

    f(a, b) = a * b
    f(1, 2)

为了实现 M 语言，使用的编程工具是 C/C++，那么现在需要设计一个目标语言，这样就可以不用考虑复杂的机器指令，直接通过 C/C++ 提供的能力来执行程序，这相当于提供了标准库，即运行时环境。


## ==⚡ Parser Algorithms
- [The ANTLR Parser Generator](https://www.antlr.org/about.html)
- [LL and LR Parsing Demystified](https://blog.reverberate.org/2013/07/ll-and-lr-parsing-demystified.html)
- [LL and LR in Context: Why Parsing Tools Are Hard](https://blog.reverberate.org/2013/09/ll-and-lr-in-context-why-parsing-tools.html)
- [Direct Left-Recursive Parsing Expression Grammars](https://tratt.net/laurie/research/pubs/html/tratt__direct_left_recursive_parsing_expression_grammars)/
- https://www.geeksforgeeks.org/shift-reduce-parser-compiler/
- https://www.geeksforgeeks.org/predictive-parser-in-compiler-design/
- https://www.tutorialspoint.com/what-is-shift-reduce-parser
- https://eli.thegreenplace.net/2008/09/26/recursive-descent-ll-and-predictive-parsers
- Parsing Techniques: A Practical Guide, 2nd, Dick Grune, Ceriel J. H. Jacobs
- Language Implementation Patterns by Terence Parr
- [Programming Language Pragmatics 4th, Morgan Kaufmann Michael L. Scott](https://booksite.elsevier.com/9780124104099/)
- [Cooper, Torczon: Engineering a Compiler, 2nd Edition](https://booksite.elsevier.com/9780120884780/)
- [CS106A: Programming Methodology (Python)](https://web.stanford.edu/class/cs106a/)
- [CS143: Compilers](http://web.stanford.edu/class/cs143/)
- [CS224N: Natural Language Processing with Deep Learning (Python)](https://web.stanford.edu/class/cs224n/)
- [CS224U: Natural Language Understanding](https://web.stanford.edu/class/cs224u/)
- [CS243: Advanced Compilers - Program Analysis and Optimization](https://suif.stanford.edu/~courses/cs243/)
- [COS320: Compiling Techniques](https://www.cs.princeton.edu/courses/archive/spring19/cos320/)
- [CIS341: Compilers and Interpreters](https://www.cis.upenn.edu/~cis341/current/)
- [6.827 Multithreaded Parallelism: Languages and Compilers](http://csg.csail.mit.edu/6.827/)
- [CS350: Secure Compilation](https://theory.stanford.edu/~mp/mp/CS350-2018.html)
- [CSE 401/M501: Compiler Construction](https://courses.cs.washington.edu/courses/cse401/22sp/)
- [CSc 453: Compilers and Systems Software](http://www2.cs.arizona.edu/classes/cs453/fall14/)
- [CPEG 421/621 Compiler Design](https://www.capsl.udel.edu/courses/cpeg421/2012/)
- 国防科技大学 编译原理 https://www.bilibili.com/video/BV1dJ411D7w6/
- 中山大学 CS290 编译原理 https://github.com/arcsysu/arcsysu.github.io/tree/latest/teach/dcs290
- 中山大学 CS290 编译原理 https://arcsysu.github.io/teach/dcs290/s2021.html

乔姆斯基，Avram Noam Chomsky，1928 年生于美国费城，麻省理工学院语言学及语言哲学研究所教授兼名誉教授，被誉为“现代语言学之父”。乔姆斯基继承了布龙菲尔德的分布主义分析方法，提出了生成语法理论，认为“思考语言为何物，就是在思考人类为何物”。

在 20 世纪 50 年代，年仅二十多岁的乔姆斯基就提出了著名的生成语法理论，在语言学中引起了革命性的变革。乔姆斯基主张语法是一种规则体系，能够生成某种语言全部的仅仅是合乎语法的句子，生成语法理论就是要找出这种语言模式。不论乔姆斯基的语法理论是否正确，它无疑是当前最有生命力、最有影响的语法理论。

乔姆斯基专攻的是语言学，也是哲学家，认同无政府主义，他的政治言论一向很大胆：“美国是当今世上的头号恐怖国家”。

    In much of the world the U.S. is regarded as leading terrorist state. -- Noam Chomsky

他本人并不涉及计算机领域，真正将乔姆斯基的语言学理论引入计算机编译技术领域的人，是约翰・巴克斯 John Warner Backus，也就是编译领域大名鼎鼎的 Backus-Naur Form 巴克斯-诺尔范式的第一发明者。他据此第一次书写了 ALGOL 58 的语法，并提出了可实现的计算机语法分析算法。

Chomsky 形式文法 Formal Grammars 是极为重要的理论，Chomsky 文法用 G 表示形式语法，将其表示为四元组：

    G = (Vn, Vt, S, P)

其中各变量定义如下：

- `Vn`：非终结符的有限集合，*Non-Terminal*，不能处于生成式的终点。在推导中起变量作用，相当于语言中的语法范畴；
- `Vt`：终结符的有限集合，*Terminal*，只处于生成过程的终点，是句子中实
际出现的符号，相当于单词表。
- `S`：Vn 中的初始符号 *Start Symbol*，相当于语法范畴中的句子。
- `P`：重写规则，也称为生成规则或文法产生式 *Grammar Prduction*，一般形式为 α → β，其中 α、β 都是符号串，α 至少含有一个 Vn 中的符号。

语法 G 的不含非终结符的句子形式称为 G 生成的句子；由语法 G 生成的语言，记做 L(G)，指 G 生成的所有句子的集合。

The Chomsky Hierarchy of Grammars and Languages 乔姆斯基将语言形式整理为 4 种形式：

    Type 0 无约束文法 unrestricted grammar
    Type 1 上下文有关方法 CSG：Context sensitive grammar
    Type 2 上下文无关文法 CFG：Context free grammars
    Type 3 正则文法 RG：Regular grammars

Type 0 无约束文法，规则形式没有任何限制，也称无限制重写文法，重写规则如下：

    α → β，其中 α, β ∈ (Vn ∪ Vt)

Type 1 上下文相关文法，重写规则如下，在上下文 α…β 中，单个非终结符 A 被重写为
符号串 γ，因此是上下文相关的。

     αAβ → αγβ，其中 A ∈ Vn, α, β, γ ∈ (Vn ∪ Vt)，且 γ 非空

Type 2 上下文无关文法 CFG，重写规则如下，A 重写为 α 时没有上下文限制。

    A → α，其中 A ∈ Vn, α ∈(Vn ∪ Vt)

Type 3 正则文法 RG，重写规则如下。A → xA 是将 A → Bx 中的 B 看作空符号的一种特殊情况。如果把 A, B 看作不同的状态，那么由重写规则可知，由状态 A 转入状态 B 时，可生成一个终结符 x ，因此正则文法也称作有限状态文法。

    A → Bx 或 A → x，其中 A, B ∈ Vn, x ∈ Vt

乔姆斯基的文法理论，每个分类都是细分类型的超集，在计算机领域中使用的只有 Type 2 和 Type 3 文法。

    L(G3) ⊆ L(G2) ⊆ (G1) ⊆ (G0)

即，每一个正则文法都是上下文无关文法，每一个上下文无关文法都是上下文有关文法，每一个上下文有关文法都是 0 型文法。

Type 2 上下文无关文法，特征是任何语言元素在任何上下文中的含义始终保持一致。事实上，多数如今的程序设计语言语法都以此为基础。

Type 3 三型方法特征是语法中不存在递归下降结构，它的代表是基本正则表达式（扩展后的正则表达式情况略有不同）。

以上两种文法构成了现今所有实用计算机程序设计语言的分析器理论基础，也有成熟的数据结构和算法支持：三型文法的 NFA/DFA，以及二型文法的递归下降、LL(x)、LR(x)、LALR(x)。

而再向上的一型文法（上下文有关文法）和零型文法（任意图灵机可识别文法），计算机工程界则通常不会涉足。一个非常重要的理论结果是：0 型文法的能力相当于图灵机(Turing)。或者说，任何 0 型文语言都是递归可枚举的，反之，递归可枚举集必定是一个 0 型语言。

虽然有些时候，我们会开玩笑地将一些语法发展得极其复杂的语言称为上下文有关语言，比如 Perl。但事实上，这类语言仍然是通过二型文法进行分析，只是通过增补一部分规则来解决。至于真正可以解析上下文有关文法的线性有界自动机，可以肯定地说，没有程序语言开发者会试图实现。事实上一型文法可以用来表述许多自然语言，拿来表述程序设计语言，多少有点杀鸡用牛刀的意思。


在编译器的工作流程中，它们包揽了前端部分工作：

                V  +===============+
                V  | Lexer/Scanner |
                V  +===============+
                V  +========+
    Frontend    V  | Parser |
                V  +========+
                V  +===================+
                V  | Semantic Analyzer |
                V  +===================+
    -----------------------------------------
                V  +=================+
    Middle-end  V  | Optimizers Code |
                V  +=================+
    -----------------------------------------
                V  +===========+
    Backend     V  | Generator |
                V  +===========+

要掌握 Flex/Bison 这些工具的使用，就需要理解编译前端的工作内容：

- Lexical Analysis (Scanner) 分析输入的源代码字符序列得到 Tokens；
- Syntactic Analysis (Parser) 解析器分析 Tokens 序列得到 AST，确定语法结构并检查部分语法错误；
- Semantic Analysis 语义分析器检查语法树可能出现的语义错误，例如 *float d = "x"*，还包含类型检查、对象绑定等；

Challenges in Scanning 词法分析中的难点：

● How do we determine which lexemes are associated with each token?
● When there are multiple ways we could scan the input, how do we know which one to pick?
● How do we address these concerns efficiently?


在词法分析的工作流程中，会在依次在以下三个基本概念处理输入：

- RE: Regular Expression Language 正则表达式
- NFA: Non-deterministic finite automaton 非确定性有限自动机
- DFA: Deterministic finite automaton 确定性有限自动机

参考 Engineering a Compiler, 2e, 2.4 From Regular Expression To Scanner, FIGURE 2.3 The Cycle of Constructions. 相关算法：Thompson’s Construction，Kleene’s Construction。

语法分析器设计中会高频地出现以下两类解析器算法，这两类算法对文法结构分析的差异，衍生出来多种解析器类型：

- *Top-Down Parsing*，`LL` 解析器算法从左到右、自顶向下分析文法，Left-to-Right，Left Most Derivation，这种解析技术从起始符号（non-terminal）扩展到整个程序。
    - Top-Down Parser with Backtracking
        - Brutefore Method
    - Top-Down Parsers without Backtracking
        - Recursive Descent Parser: 递归下降分析法解析器
        - Non-Recursive Descent Parser: *LL(1) Parser*
        - Predictive Parsing: *LL Parser*
        - Table Driver Parsing
- *Button-Up Parsing*，`LR` 解析器算法从左到右、自底向上分析文法，解析树从叶子到根构造，Left-to-Right，Right Most Derivation ，在这种解析技术中，将整个程序归纳简化为起始符号。
    - Operator Precedence Parser 运算符优先分析法
    - *LR(0) Parser*
    - *LALR Parser*
    - *SLR Parser*
    - *CLR Parser*

这两类算法的基本特点：

- Top-Down: `LL parsers` (Left-to-right, Left Most Derivation)
    • Easy to understand & write by hand.
- Bottom-Up: `LR parsers` (Left-to-right, Right Most Derivation)
    • More general, (variations) implemented in parser generators.
    • Easier to write LR grammars
    • Every LL(k) grammar is also LR(k), but not vice versa.
    • No need to eliminate left (or right) recursion
    • No need to left-factor

语法能力按以下关系逐级提升灵活性，前者为后者的真子集，同级别的 LL 为 LR 的真子集：

    LR(0) < LR(1) < LR(2) < LR
    LL(1) < LL(2) < LL

    LR(0) < LALR(1) < LALR(2) < LALR < LR(1)

另外，增加前缀的算法，如 LALR 和 SLL 之类，又增加了相应的约束。

自底向上分析的就是从给定的句子开始，不断的挑选出合适的产生式，将中间句子中的子串
折叠为非终结符，最终折叠到起始符号。

Bottom-Up 比 To-Down 分析法的解析能力要强大的多，可以解析更复杂、更广泛的语法。
但自底向上分析法的构造过程也复杂的多，其分析法程序的手写难度相当之大。幸运的是，
目前有一些非常强大的分析器构造工具（如 bison ）可以为开发者定义的语法规则生成
一个自底向上分析器，使得编写语法分析器变得非常简单。

参考补充材料 [Programming Language Pragmatics 4th - Sections and Sub-sections](https://booksite.elsevier.com/9780124104099/content/Sections%20and%20Sub-sections/Scott%204e_Supplementary%20Sections.pdf)

    Figure 2.36 Containment relationships among popular grammar classes. In addition to the
    containments shown, SLL(k) is just inside LL(k), for k ≥ 2, but has the same relationship to
    everything else, and SLR(k) is just inside LALR(k), for k ≥ 1, but has the same relationship to
    everything else.

    LL(2) but not SLL:             SLL(k) and SLR(k) but not LR(k - 1):    
    S −→ a A a | b A b a           S −→ A aᴷ⁻¹ b | B aᴷ⁻¹ c    
    A −→ b | ?                     A −→ ?    
                                   B −→ ?    
    SLL(k) but not LL(k − 1):      
    S −→ aᴷ⁻¹ b | a k              LALR(1) but not SLR:    
                                   S −→ b A b | A c | a b    
    LR(0) but not LL:              A −→ a    
    S −→ A b                       
    A −→ A a | a                   LR(1) but not LALR:    
                                   S −→ a C a | b C b | a D b | b D a    
    SLL(1) but not LALR:           C −→ c    
    S −→ A a | B b | c C           D −→ c    
    C −→ A b | B a                 
    A −→ D                         Unambiguous but not LR:    
    B −→ D                         S −→ a S a | ?    
    D −→ ?

    Figure 2.37 Examples of grammars in various regions of Figure C 2.36.

注意，算法的 LR 并不是指左递归 LR - Left Recursive，递归文法是指形如 A  →  A u 这样的语法规则，右递归 RR - Right Recursive 则是指形如 A  →  u A 这样的规则，其中 A 不为终结符号。为避免回溯，不宜将自顶向下分析法应用于含 LR 的语法 ，这是由此方法的分析顺序决定的。

间接左递归则需多次推导才可以看出文法存在左递归，如文法：S → Qc｜c，Q → Rb｜b，R → Sa｜a 有 S => Qc => Rbc => Sabc。

递归下降分析法对应 Top-Down Parsing，一般实现这类解析器实现都要求是线性运行时间。大多数 Top-Down parser 也是预测分析器 Predictive Parsers。因为这种解析器在运行时，每次都要至少可以向前看一个符号，如 LL(1) 只向前查看一个符号，然后去查每个产生式的 Predictive set 才能决定用哪个产生式，即 LL(k) 类解析器是由“向前看” k 个符号这种预测能力来驱动的。

LL(2) 语法比 LL(1) 语法更难以手工编码，而且它们也更难被解析器生成器自动转换成代码，这可能就是为什么大多数语言使用 LL(1) 就足够了。

既然称为递归算法，当然要使用递归过程来处理输入，递归下降解析受到回溯的影响。Backtracking 意味着，如果产生式的一个推导失败，语法分析器将重试同一产生式的不同规则，这种技术可以多次处理输入字符串以确定正确的生产。

预测解析法不需要回溯功能的递归下降解析，但是，LL Predictive Parsers 预测分析法解析器是特殊的，使用了支持回溯的递归下降分析法（with Backtracking）。

LL(1) 属于自顶向下非递归下降算法设计，可以支持正则表达式。第一个 L 表示将以从左到右的方式扫描输入，第二个 L 表示在这种解析技术中，将使用最左边的派生树，数字 1 表示预测/输入多一个节点/符号，以利于决策。

以下是等价但缺失直观的解析：

- LL 解析器输出最左推导树，LR 解析器输出相反的最右推导树。
- LL 解析器自上而下构建二叉树，LR 解析器自下而上构建二叉树。
- LL 解析器通常被称为预测解析器 Predictive Parsers，LR 解析器通常被称为移位归约解释器 Shift Reduce Parsers

移位归约解释器实现只需要 stack 和 input buffer 两个数据结构，用 R.H.S. 和 L.H.S 表示 Grammar Production 和对应的方法表达式，Right-Hand Side & Left-Hand Side，操作如下：

- Init 初始化，往 stack 底部和 input buffer 末尾各插入一个 start symbol ($) 符号作为起止标记；
- Shift 移位，读取输入串的 0 或 1 个符号，直到处理完；
- Reduce 归约，或用文法表达式替换 stack 顶部的 Grammar Production，即 R.H.S. 弹出栈，将 L.H.S 推入栈；
- Accept 确认，经过前面两步的循环处理后，在无错误且处理完输入串，stack 顶部为 $ 起止符号，确认解释工作完成；

例如，输入串 abbcde 对应以下文法的 LR 解析过程：

    S → a A B e
    A → A b c | b
    B → d

- 处理输入 a，并没有完全匹配的方法；
- 处理输入 b，同好这个生成式对应 A 表达的右侧，替换后符合 S → a A B e 的前缀；
- 处理输入 b，同好这个生成式对应 A 表达的右侧，但不以替换，因为没有相应的方法前缀；

| Step | Input | Stack |  Buffer |               Note              |
|------|-------|-------|---------|---------------------------------|
|    0 | -     | $     | abbcde$ | Init, insert $                  |
|    1 | a     | $a    | bbcde$  | Shift a                         |
|    2 | b     | $aA   | bcde$   | Shift b & Reduce by A → b       |
|    3 | b     | $aAb  | cde$    | Shift b                         |
|    4 | c     | $aA   | de$     | Shift c & Reduce by A → A b c   |
|    5 | d     | $aAB  | e$      | Shift d & Reduce by B → d       |
|    6 | e     | $S    | $       | Shift e & Reduce by S → a A B e |

另一个例子，文法定义如下，输入串为 id1 + id2 * id3：

    E → E + E 
    E → E * E 
    E → (E) 
    E → id

| Right Sentienal Form | HANDLE | Production Used |
|----------------------|--------|-----------------|
| id1 + id2 * id3      | id1    | E → id1         |
| E + id2 * id3        | id2    | E → id2         |
| E + E * id3          | id3    | E → id3         |
| E + E * E            | E * E  | E → E ∗ E       |
| E + E                | E + E  | E → E + E       |
| E                    |        |                 |


说到 LL 或者 LR 算法，就不得不和二叉树这种数据结构一起说。

二叉树这种数据结构应用非常广泛，无论是在操作系统，编译软件还大型应用程序，都非常多应用，并且变体非常多，比如程序优先级的算法中可能会用到 Red-Black Tree，最普通的有序数据查找就是 Binary Search Tree 算法，它通过每次都折半查询数据，大致快速定位目标数据的目的。

二叉树由于结构的特殊，具有非常多的节点，并且这些节点的读取秦顺序不同，也具有不同的功能：

- pre-order 先序遍历，从根节点开始，逆时针遍历整棵树，类似 DFS 深度优先遍历；
- in-order 中序遍历，将节点按原有线性顺序遍历，可以理解为二叉树每个节点垂直方向投影下来从左到右的顺序；
- post-order 后序遍历，从左子树开始，从最底层节点由左至右遍历，可以想象为一棵棵摘葡萄，左子树摘完再摘右子树后摘根；
- level-order 层次遍历，从最底层由左至右遍历，无论是左、右子树，只要同高度的一层就一并遍历；

例如，以下一棵树的各种遍历结果：

           *      
       ┌───┴───┐     先序遍历： * + 1 2 / 3 4
       +       /     中序遍历： 1 + 2 * 3 / 4
     ┌─┴─┐   ┌─┴─┐   后序遍历： 1 2 + 3 4 / *
     1   2   3   4   层次遍历： 2 2 3 4 + / *

解析树包含以下属性，首先遍历最深的子树，父节点中的运算符的优先级低于子树中的运算符。

- 根节点始终是指示开始符号的节点。
- 推导是从左到右读取的。
- 叶节点始终是终端节点。
- 内部节点始终是非终端节点。

推导树是根据一组文法生成规则来解释输入串中的字符串，得到二叉树结构，也称为解析树。

最左派生树 Left Most Derivation 总是替换文法生成式中最左边的非终止符号，则派生树是最左边的。最右派生树 Right Most Derivation 总是替换文法生成式中最右边的非终止符号，则派生是最右边的。Derivation 一词可以翻译为派生，也可以翻译为推导，意义相同。

最左派生树 LMD 构造非常空间，但是不能处理以下文法，而使用 RMD 的自底向上分析法可以：

- Ambiguous Grammars 歧义文法
- Left Recursive Grammars 左递归文法
- Non Deterministic Grammars (Left factoring) 非确定性语法（左因子分解）

xlist
例如，有以下文法规则定义，输入串为 a+aa：

    S → AB
    A → a | t
    B → +CD
    C → a
    D → a

则最左、最右推导式如下：

    Left Most Derivation
    S → AB → aB → a+CD → a+aD → a+aa

    Right Most Derivation
    S → AB → A+CD → A+Ca  → A+aa → a+aa

再来另外一组，方法如下，输入串为 -(id + id)：

    E ::= E "+" E | E "*" E | "-" E | "(" E ")" | id

    Left Most Derivation
    E => - E => - ( E ) => - ( E + E ) => - ( id + E ) => - ( id + id )

    Right Most Derivation
    E => - E => - ( E ) => - ( E + E ) => - ( E + id ) => - ( id + id )


当抽象语法树中出现不同的解析树时，就表示文法有歧义 Ambiguity，造成二义性的原因是：文法中没有体现出结合率和优先级。

例如，以下这个 1 + 2 * 3 / 4 的表达式解析树：

    <expr> ::= <int> | <var> | <expr>+<expr> | <expr>*<expr> | (<expr>)
    <var>  ::= a | ... | z
    <int>  ::= 0 | ... | 9

           *                    +      
       ┌───┴───┐            ┌───┴───┐  
       +       /            1       *  
     ┌─┴─┐   ┌─┴─┐                ┌─┴─┐
     1   2   3   4                2   /
                                    ┌─┴─┐
                                    3   4

二叉树在编译器算法实现上，应用也非常广，LL、LR 就跟前面几种二叉树节点遍历方式有关，以下是教学常用的各种 Polish Notion：

    1 + 2 * 3  // Infix expression; in-order traversal.
    + 1 * 2 3  // Polish (prefix) expression; pre-order traversal.
    1 2 3 * +  // Reverse Polish (postfix) expression; post-order traversal.

应该将它们当作抽象的二叉树来看待，而不是一个算术表达式，它们本来就有对应的二叉树的遍历方式。

参考教材 Parsing Techniques by Dick Grune and Ceriel J.H. Jacobs，这本书专门讲解析器各种算法设计，LL(k), SLR(k), LALR(k), LR(k) 等，它们对应的是解析树 Parse Tree 的二叉树节点遍历方式：

- LL parser --> pre-order traversal
- LR parser --> post-order traversal.

LL 和 LR 解析理论已有 50 多年的历史：Knuth 的论文 On the Translation of Languages from Left to Right 首次定义了 LR(k) 发表于 1965 年。但成熟的研究不代表它们已经过时，LL 和 LR 解析器有一些无可争辩的优势。它们是最有效的解析算法，他们提前执行的语法分析可以告诉您有关语法的重要信息，并且适当的可视化可以帮助您发现错误，这与正则表达式可视化工具可以使用的方式大致相同。

使用 LR 算法意味着可以将语言规则描述文件喂给语法解析程序，解释器就可以自动生成，而不是一定要手工编写，例如 yacc 就是这样的工具。

两种最流行的基于 LL 和 LR 的解析工具分别为 ANTLR 和 Bison，都以各种方式扩展了纯 LL 和 LR 算法，添加了诸如运算符优先级、句法/语义谓词、可选回溯和广义解析等功能。


## ==⚡ Compilers Architecture
- [Programming Language Pragmatics 4th, Morgan Kaufmann Michael L. Scott](https://booksite.elsevier.com/9780124104099/)
- [Stanford CS143: Compilers](http://web.stanford.edu/class/archive/cs/cs143/cs143.1128/)
- [CPEG 421/621 Compiler Design](https://www.capsl.udel.edu/courses/cpeg421/2012/)
- [CSc 453: Compilers and Systems Software](http://www2.cs.arizona.edu/classes/cs453/fall14/)
- [CMU 15-411 Compiler Design](https://www.cs.cmu.edu/~fp/courses/15411-f08/)
- [CS 6120: Advanced Compilers](https://www.cs.cornell.edu/courses/cs6120/2022sp/)
- [LLVM Tutorial: Implementing My Kaleidoscope Language](http://llvm.org/docs/tutorial/index.html)
- [The Architecture of Open Source Applications: LLVM)(http://www.aosabook.org/en/llvm.html)

经典编译器工作流程如下：

                |  +===============+
                |  | Lexer/Scanner |
                |  +===============+
                |  +========+
    Frontend    |  | Parser |
                |  +========+
                |  +===================+
                |  | Semantic Analyzer |
                |  +===================+
    -----------------------------------------
                |  +=================+
    Middle-end  |  | Optimizers Code |
                |  +=================+
    -----------------------------------------
                |  +===========+
    Backend     |  | Generator |
                |  +===========+

- Front end : machine independent phases
    - Lexical analysis
    - Syntax analysis
    - Semantic analysis
- Middle end
    - Intermediate code generation
    - Some code optimization
- Back end : machine dependent phases
    - Final code generation
    - Machine-dependent optimizations

一种语言的 compiler 或 interptreter 通常需要两个基本步骤，前端与中端作为一个部分，后端负责
机器码的生成（合成），高度依赖具体的硬件系统：

- Read the source program and discover its structure.
- Process this structure, e.g. to generate the target program.

Lex 和 Yacc，Flex 和 Biion 这些工具可以完成前面的代码结构分析工具，并细分为两步操作流程：

- Split the source file into tokens (Lex).
- Find the hierarchical structure of the program (Yacc).

编译前端流程工作内容：

- Lexical Analysis (Scanner) 分析输入的源代码字符序列得到 Tokens；
- Syntactic Analysis (Parser) 解析器分析 Tokens 序列得到 AST，确定语法结构并检查部分语法错误；
- Semantic Analysis 语义分析器检查语法树可能出现的语义错误，例如 *float d = "x"*，还包含类型检查、对象绑定等；

为了加强理解 Programming Language Pragmatics 4th 书中第一章有一道习题，尝试使用熟悉的一种
命令式语言，如 C/C++，去触发不同阶段的错误：

(a) A lexical error, detected by the scanner
(b) A syntax error, detected by the parser
(c) A static semantic error, detected by semantic analysis
(d) A dynamic semantic error, detected by code generated by the compiler
(e) An errorthat the compiler can neither catch nor easily generatecode to
    catch (this should be a violation of the language definition, not just a
    program bug)


现代的 LLVM - “Low Level Virtual Machine” 编译器基础构架，增加了中间代码表示层，
IR - Intermediate Representations，因为增加 IR 层带来的灵活性而取得了巨大的成功。
不同语言可以方便地先将源代码经过前端编译为中间代码，经过优化调整后，再用后端编译成平台相关的
机器指令，这极大地简化了各种语言编译器与各种平台差异化的编译工作。

参考 Stanford CS143: Compilers 提供的现代编译器工作流程图：

    The Structure of a Modern Compiler
    
    +=============+     +===================+       |
    | Source Code | ==> | Lexical Analysis  |   <---|
    +=============+     +===================+       |
                        +===================+       |
                        | Syntax Analysis   |   <---|
                        +===================+       | front-end
                        +===================+       | (Analysis)
                        | Semantic Analysis |   <---|
                        +===================+       |
                        +===================+       |
                        | IR Generation     |   <---|
                        +===================+       |
                |       +=============================+
                |--->   | Intermediate Representation |
                |       +=============================+
                |       +===================+
                |--->   | IR Optimization   |
     back-end   |       +===================+
    (synthesis) |       +===================+
                |--->   | Code Generation   |
                |       +===================+
                |       +===================+     +==============+
                |--->   | Optimization      | ==> | Machine Code |
                |       +===================+     +==============+

●  Lexical analysis (Scanning): Identify logical pieces of the description.
●  Syntax analysis (Parsing): Identify how those pieces relate to each other.
●  Semantic analysis: Identify the meaning of the overall structure.
●  IR Generation: Design one possible structure.
●  IR Optimization: Simplify the intended structure.
●  Generation: Fabricate the structure.
●  Optimization: Improve the resulting structure.

参考 CPEG 421/621 Compiler Design 提供的 LLVM 工具链示意图：

    +=========+    |
    | C       | ==>+
    +=========+    |                                  +=================+             |
                   |                                  | Target ASM Code | ===========>+
    +=========+    |                                  +=================+             |
    | Haskell | ==>+                                                                  |
    +=========+    |                                  +=================+             |
                   |                                  | Target ASM Code | ===========>+
    +=========+    |                                  +=======^=========+             |
    | C++     | ==>+     +===========+                        |                       |
    +=========+    |     |   Front   |     +=========+     +======+             +=====v=====+
                   | ==> |    end    | ==> | LLVM IR | ==> | llvm |             | Assembler |
    +=========+    |     | Compilers |     +=========+     +======+             +===========+
    | Obj-C   | ==>+     +===========+                        |                       |
    +=========+    |                                  +=======v=========+    +========v========+
                   |                                  | Target Obj Code |    | Target Obj Code |
    +=========+    |                                  +=================+    +=================+
    | Python  | ==>+                                          |                       |
    +=========+    |                                          |   +===============+   |
                   |                                          +==>|    Linker     |<==+
    +=========+    |     ==============================           +===============+
    | Ruby    | ==>+     LLVM Toolchain at a High-Level                  |
    +=========+    |     ==============================      +===========v===========+
                   |                                         | Executable or Library |
        ...     ==>+                                         +=======================+

通过实现编译器前端与后端的分离构架，LLVM 就可以使用 IR 灵活地处理各种言语分析并生成的中间代码，
中间表示也称为 LLVM ASM，然后通过后端生成各种硬件平台依赖的机器码，无论是 ARM、x86、PowerPC 
架构都可以，只需要根据不同的语言实现相应的前端编译器即可。

LLVM IR 是一种基于*静态单一赋值*的表示法，Static Single Assignment (SSA) 提供类型安全性、
底层操作、灵活性，以及清晰地表示所有高级语言的能力。

SSA 是 LLVM Virtual Instruction Set 中虚拟寄存器的基本结构，也是中间代码的主要表达形式。
虚拟寄存器用来存储各种原始类型的值，primitive types (integral, floating point, or pointer values)
通过引入 SSA 可以解决物理寄存器的平台依赖或约束，被大量应用于编译器优化中。

SSA philosophy:

    definitions == variables
    instructions == values
    arguments == data flow graph edges

SSA 理念：

- 每个变量被赋值一次，每次赋值定义一个新变量；
- 这样做获取的好处是，变量引用指向唯一的定义，同名变量拥有相同值；
- 形式上等价于 Continuation-Passing Style (CPS) IR；

SSA 属于控制流分析技术，所以相关的概念有控制流图、控制树、直接控制和真控制，参考康奈尔大学课程
CS 6120: Advanced Compilers 或卡内基梅隆大学 CMU 15-411 Compiler Design 课程资源。

Clang 项目就是 LLVM 的前面编译器，目前提供了大量流行语言的编译能力：

● Compiler Front end for LLVM.
● Compiles C, C++, Objective-C, and Objective-C++ into LLVM IR.
● Using Clang in conjunction with LLVM replaces the GCC stack.

参考 LLVM 文档多阶段优化文档：

    LLVM: An Infrastructure for Multi-Stage Optimization
    Figure 2.1: LLVM system architecture diagram

当前编译系统主要有以下编译优化方法：

● Traditional Approaches to Link-Time Interprocedural Optimization
    1. Very Low Level - Machine Code
    2. Very High Level - Abstract Syntax Trees (AST)
● Traditional Approaches to Run-Time Optimization
    1. High Level Language Virtual Machines, Run-time optimization and Just-In-Time (JIT) compilation
    2. Architecture Level Virtual Machines and Dynamic Translators
● Traditional Approaches to Compile-time Profile-Driven Optimization
● Multi-stage Optimization with LLVM 
    1. Compile Time: Front-end & Static Optimizer
    2. Link Time: Linker & Interprocedural Optimizer
    3. Run Time: Profiling & Reoptimization
    4. Gathering Profile Information at Run Time
    5. The LLVM Approach to Run Time Optimization
    6. Idle Time: Offline Reoptimizer 

得益于前后分离的编译系统构架，LLVM 可以在多个阶段提供编译优化时机，可以为优化提供 
Optimizing Linker、Runtime Optimizer、Offline Reoptimizer 实现。

参考 Programming Language Pragmatics by Michael L. Scott，对于 Python 这类使用解释器
运行的脚本语言，或者 Java 这种使用虚拟机运行的语言，编译器与解析器的结构简化表达如下：

       Source program
             🡓
      +============+
      | Translator |
      +============+
             🡓
      Intermediate program 
                          🡖   +=================+    +========+
                            🡒 | Virtual machine | 🡒 | Output |
                          🡕   +=================+    +========+
                     Input

虽然，Python 并没有虚拟机的实现，但是脚本运行流程基本是类似的，依然会将脚本转译为字节码，然后再
通过字节码解析器运行。

最早的 Java 实现完全基于字节码解析器运行程序，byte-code interpreters，经过发展优化后，现代的
Java 实现了 JIT - Just-in-Time compiler，在程序即将执行之前，它会将字节码转译为机器语言：

                 Java program
                       🡓
                +===============+
                | Java compiler |            Input
                +===============+              🡓
                       🡓             +======================+
                 Java byte code  ==> | Bytecode interpreter |
                       🡓             +======================+
                +===============+              🡓
                | JIT compiler  |              🡓
                +===============+              🡓
                       🡓                       🡓
              +==================+             🡓
    Input ==> | Machine language | =======> Output
              +==================+

LLVM 不仅有编译器，已然是最优秀的编译器开发平台，LLVM Compiler Framework and Infrastructure。

JIT - Just-in-Time Compiler 作为一个重要的提速技术，它主要负责在程序执行前将字节码转化为机器
实现更高的效率提升，像 Google V8 JavaScript 引擎，就是因为引入了 JIT 技术使得它在脚本的执行
效率完全领先于其它 JavaScript 脚本引擎。


## ==⚡ LLVM Tutorial: Implementing My Kaleidoscope Language
- [LLVM Git Repository](https://github.com/llvm/llvm-project)
- [LLVM 14.0.0 docs](https://releases.llvm.org/14.0.0/docs/index.html)
- [LLVM Tutorial: Implementing My Kaleidoscope Language](http://llvm.org/docs/tutorial/index.html)

LLVM Tutorial: Implementing My Kaleidoscope Language 编译器前端实现教程，
此教程演示如何使用 LLVM C++ 工具实现一种称为万花筒 “Kaleidoscope” 的简单语言。

Kaleidoscope 这个项目按以下步骤讲解，符合了现代编译的架构：

01. Kaleidoscope: Kaleidoscope Introduction and the *Lexer*
02. Kaleidoscope: Implementing a *Parser* and *AST*
03. Kaleidoscope: Code generation to *LLVM IR*
04. Kaleidoscope: Adding *JIT* and *Optimizer* Support
05. Kaleidoscope: Extending the Language: *Control Flow*
06. Kaleidoscope: Extending the Language: User-defined Operators
07. Kaleidoscope: Extending the Language: Mutable Variables
08. Kaleidoscope: Compiling to Object Code
09. Kaleidoscope: Adding Debug Information
10. Kaleidoscope: Conclusion and other useful LLVM tidbits


Requirements: This tutorial assumes you know C++, but no previous compiler 
experience is necessary.

Welcome to the “My First Language Frontend with LLVM” tutorial. Here we run 
through the implementation of a simple language, showing how fun and easy it 
can be. This tutorial will get you up and running fast and show a concrete 
example of something that uses LLVM to generate code.

This tutorial introduces the simple “Kaleidoscope” language, building it 
iteratively over the course of several chapters, showing how it is built 
over time. This lets us cover a range of language design and LLVM-specific 
ideas, showing and explaining the code for it all along the way, and reduces 
the overwhelming amount of details up front. We strongly encourage that you 
work with this code - make a copy and hack it up and experiment.

Warning: In order to focus on teaching compiler techniques and LLVM specifically, 
this tutorial does not show best practices in software engineering principles. 
For example, the code uses global variables pervasively, doesn’t use visitors, 
etc… but instead keeps things simple and focuses on the topics at hand.



## ==⚡ A Simple Interpreter
- [The Lex & Yacc Page](http://dinosaur.compilertools.net/)
- [Write Your Own Compiler](https://silcnitc.github.io/roadmap.html)
- [Writing Your Own Toy Compiler Using Flex, Bison and LLVM](https://gnuu.org/2009/09/18/writing-your-own-toy-compiler/)

根据编译器的工作流程，基于 C/C++ 语言实现一个 Simple 语言解释器。

利用现有的工具，如 ANTLR、LLVM 等，可以大大降低实现一种计算机语言的技术门槛。可以利用现有的
汇编编译器实现机器码的生成，也可以利用其它编译器，如 C/C++ 编译器实现机器码的生成。

Lex 和 Yacc，Flex 和 Biion 可以生成编译器前端的代码结构分析工具，细分为两步操作流程：
    
- Split the source file into tokens (Lex).
- Find the hierarchical structure of the program (Yacc).

要掌握 Flex/Bison 这些工具的使用，需要理解编译前端的工作内容：

- Lexical Analysis (Scanner) 分析输入的源代码字符序列得到 Tokens；
- Syntactic Analysis (Parser) 解析器分析 Tokens 序列得到 AST，确定语法结构并检查部分语法错误；
- Semantic Analysis 语义分析器检查语法树可能出现的语义错误，例如 *float d = "x"*，还包含类型检查、对象绑定等；

Flex 与 Bison 搭配生成解析器，根据 CFG 规范文件生成解释器，工作流程如下：

    Yacc: A Parser Generator

    bison -d ==> y.tab.h
    bison -y ==> y.tab.c

               +===============+         +===============+
               | lexical rules |         | grammar rules |
               +===============+         +===============+
                   |                           |
                   V                           V
               +=========+               +===========+
               |   Lex   |               |    Yacc   |
               +=========+               +===========+
                   |                           |
                   V                           V
               +=========+               +===========+
    =========> | yylex() |  ==========>  | yyparse() | =============>
      input    +=========+    tokens     +===========+  parsed input


A First Example: A Simple Interpreter

    The Memphis Tree Builder & Tree Walker Tool


Writing an Interpreter with Lex, Yacc, and Memphis


Here is a small example that shows how to write an interpreter with Lex, Yacc, 
and Memphis. Our example language provides arithmetic and relational expressions 
as well as assignment and print statements. To structure programs it features 
conditional and repetitive statements and the possibility to group statements 
to sequences.

Here is a typical program in our example language:

       // Greatest Common Divisor
       x := 8;
       y := 12;
       WHILE x != y DO
          IF x > y THEN x := x-y
          ELSE y := y-x
          FI
       OD;
       PRINT x

Our processor for this language will be decomposed into two parts.

The task of the first part (the analizer) is to read the source program and to 
discover its structure.

The task of the second part (the tree walker) is to process this structure, 
thereby evaluating expressions and executing statements.

The glue between these parts is an abstract program representation.

The Analizer
The task to structure the program is decomposed into lexical analysis and 
syntactical analysis. Lexical analysis splits the source text into a sequence 
of tokens, skipping blanks, newlines, and comments. 

For example, the source text

       x :=   // multiply x
       x*100  // by hundred

is handled as the sequence of tokens

       x
       :=
       x
       *
       100

Each token belongs to a token class. There are simple tokens such as ``:=``, 
it belongs to the class ASSIGN which has only this member. And there are more 
complex tokens such 100, it belongs to the class Number which comprises the 
strings that form decimal numbers. Simple tokens can be specified simply by the 
string that represents them. Complex tokens are defined by a regular expression 
that covers the strings of the token class. For example, the regular expression

       [0-9]+

specifies nonempty sequences of decimal digits. In case of simple tokens we just 
need to know the token class, in case of complex tokens some additional processing
is neccessary. E.g. the strings that matches the regular expression for numbers 
must be converted to an integer that holds its numerical value.

The lexical analysis is implemented by a function `yylex()` that reads a token 
from the input stream and returns its name (token class). In addition, it assign 
the semantic value (e.g. of numbers) to the global variable `yylval`.

Such a function can be generated by the tool Lex. Its input is a set of pairs

    regular-expression { action }

The action is performed when the current input matches the regular expression. 
For example,

       ":=" { return ASSIGN; }

defines ASSIGN tokens and

       [0-9]+ { yylval = atoi(yytext); return NUMBER; }

specifies how to handle numbers.

Here is the input to Lex:

       %{
       #include "y.tab.h"
       extern int yylval;
       %}
       %%
       "="      { return EQ; }
       "!="     { return NE; }
       "<"      { return LT; }
       "<="     { return LE; }
       ">"      { return GT; }
       ">="     { return GE; }
       "+"      { return PLUS; }
       "-"      { return MINUS; }
       "*"      { return MULT; }
       "/"      { return DIVIDE; }
       ")"      { return RPAREN; }
       "("      { return LPAREN; }
       ":="     { return ASSIGN; }
       ";"      { return SEMICOLON; }
       "IF"     { return IF; }
       "THEN"   { return THEN; }
       "ELSE"   { return ELSE; }
       "FI"     { return FI; }
       "WHILE"  { return WHILE; }
       "DO"     { return DO; }
       "OD"     { return OD; }
       "PRINT"  { return PRINT; }
       [0-9]+   { yylval = atoi(yytext); return NUMBER; }
       [a-z]    { yylval = yytext[0] - 'a'; return NAME; }   
       \        { ; }
       \n       { nextline(); }
       \t       { ; }
       "//".*\n { nextline(); }
       .        { yyerror("illegal token"); }
       %%
       #ifndef yywrap
       yywrap() { return 1; }
       #endif


Syntactical analysis imposes a hierarchical structure on the program. 
This structure is specified by the rules of a context-free grammar. 
A syntactical phrase is introduced by giving one or more alternatives. 
An alternative specifies how to construct an instance of the phrase. 
It list the members that build up the phrase, where such a member is 
either atoken or the name of a phrase (a nonterminal).

Consider the rule to define statements:

       statement:
         designator ASSIGN expression
       | PRINT expression
       | IF expression THEN stmtseq ELSE stmtseq FI
       | IF expression THEN stmtseq FI
       | WHILE expression DO stmtseq OD
       ;

For example, the first alternative specifies that if D is a designator and 
if E is an expression then D := E is a statement.

We use the tool Yacc to generate the syntactical analizer. Its input is a 
context-free grammar from which it creates a function `yyparse()` that parses 
the source text according to that grammar. (`yyparse()` invokes `yylex()` to obtain 
the next token).

With rules like the one given above, `yyparse()` would only be able to check 
whether a given source is consistent with the grammar. As we did with the Lex 
specification, we attach semantic actions. They are executed whenever an 
alternative matches a phrase of the input and are used to construct an abstract 
program representation.

The rule for statement becomes:

     statement:
       designator ASSIGN expression {$$ = assignment($1, $3);} 
     | PRINT expression {$$ = print($2);} 
     | IF expression THEN stmtseq ELSE stmtseq FI
         {$$ = ifstmt($2, $4, $6);}
     | IF expression THEN stmtseq FI
         {$$ = ifstmt($2, $4, empty());}
     | WHILE expression DO stmtseq OD {$$ = whilestmt($2, $4);}
     ;

Consider again the first alternative. The semantic action attached to it 
constructs an abstract representation of an assignment statement and defines 
this as the structural value of the phrase, i.e. it assigns it to the special 
variable `$$`. the value is constructed by applying the function `assignment()` 
to the value of the first member (designator), denoted by `$1`, and the value 
of the third member (expression), denoted by $3.

Here is the input to Yacc:


       %start ROOT

       %token EQ
       %token NE
       %token LT
       %token LE
       %token GT
       %token GE
       %token PLUS
       %token MINUS
       %token MULT
       %token DIVIDE
       %token RPAREN
       %token LPAREN
       %token ASSIGN
       %token SEMICOLON
       %token IF
       %token THEN
       %token ELSE
       %token FI
       %token WHILE
       %token DO
       %token OD
       %token PRINT
       %token NUMBER
       %token NAME

       %%

       ROOT:
         stmtseq { execute($1); } 
       ;

       statement:
         designator ASSIGN expression { $$ = assignment($1, $3); } 
       | PRINT expression { $$ = print($2); } 
       | IF expression THEN stmtseq ELSE stmtseq FI
        { $$ = ifstmt($2, $4, $6); }
       | IF expression THEN stmtseq FI
        { $$ = ifstmt($2, $4, empty()); }
       | WHILE expression DO stmtseq OD { $$ = whilestmt($2, $4); }   
       ;

       stmtseq:
         stmtseq SEMICOLON statement { $$ = seq($1, $3); }
       | statement { $$ = $1; }
       ;

       expression:
         expr2 { $$ = $1; } 
       | expr2 EQ expr2 { $$ = eq($1, $3); }
       | expr2 NE expr2 { $$ = ne($1, $3); }
       | expr2 LT expr2 { $$ = le($1, $3); }
       | expr2 LE expr2 { $$ = le($1, $3); }
       | expr2 GT expr2 { $$ = gt($1, $3); }
       | expr2 GE expr2 { $$ = gt($1, $3); }
       ;

       expr2:
         expr3 { $$ == $1; }
       | expr2 PLUS expr3 { $$ = plus($1, $3); }
       | expr2 MINUS expr3 { $$ = minus($1, $3); }
       ;

       expr3:
         expr4 { $$ = $1; }
       | expr3 MULT expr4 { $$ = mult($1, $3); }
       | expr3 DIVIDE expr4 { $$ = divide ($1, $3); }
       ;

       expr4:
         PLUS expr4 { $$ = $2; }
       | MINUS expr4 { $$ = neg($2); }
       | LPAREN expression RPAREN { $$ = $2; }
       | NUMBER { $$ = number($1); }
       | designator { $$ = $1; }
       ;

       designator:
         NAME { $$ = name($1); }
       ;


The Glue
As we have seen with `assignment()`, the abstract representation, or abstract 
syntax, is constructed by functions that take the representation of constituents 
and build the representation of a larger construct.

This results in a tree structure: the functions construct nodes whose childs 
are subtrees representing the constituents.

In language processors the abstract syntax plays a central role. It does not 
only define the glue between passes, it also determines the design of functions 
that process the program: they often inductively follow the structure of the 
abstract representation.

Hence it is a good idea to provide a clean definition. We classify the nodes 
into into node types and list the types of its childs.

For our example language we introduce two node types: Statement and Expression. 
An example of nodes of type Statement is assignment that takes two arguments 
(lhs and rhs) of type Expression. This is specified by listing

       assignment (Expression lhs, Expression rhs)

as an alternative of type Statement.

We use domain declarations for the specification.

For example, Statement is introduced by a declaration of the form

       domain Statement {
          ...
       }

that lists the Statement alternatives. One of them is

       assignment (Expression lhs, Expression rhs)

Here is the complete definition of the abstract syntax:

       domain Statement {

          assignment (Expression lhs, Expression rhs)
          print (Expression x)
          ifstmt (Expression cond, Statement thenpart, Statement elsepart)   
          whilestmt (Expression cond, Statement body)
          seq (Statement s1, Statement s2)
          empty ()

       }

       domain Expression {

          eq (Expression x, Expression y)
          ne (Expression x, Expression y)
          lt (Expression x, Expression y)
          le (Expression x, Expression y)
          gt (Expression x, Expression y)
          ge (Expression x, Expression y)
          plus (Expression x, Expression y)
          minus (Expression x, Expression y)
          mult (Expression x, Expression y)
          divide (Expression x, Expression y)
          neg (Expression x)
          number (int x)
          name (int location)

       }

Note that this definition can be read as a grammar defining the abstract syntax.

The definition not only provides documentation (as it is valuable even if we 
write the corresponding C/C++ data types and the functions manually), it also 
enables the Memphis precompiler to generate the implementation automatically.

The Tree Walker
We are now ready to write the tree walker.
It will consist of two functions (one for each domain of the abstract syntax): 
evaluate (Expression e) that evaluates an Expression e and returns its numerical
value, and execute (Statement s) that executes a Statement s.

Such functions are generally written by providing a piece of code for each 
possible alternative of the argument, where this code recursively visits the 
constituents the argument.

In Memphis we can use the match statement to describe this style of processing.

The evaluate function takes the form

       int evaluate(Expression e)
       {
          match e {
             ...
          }
       }

The body of the match statement lists specific rules that handle the Expression 
e according to its structure.

One of these rules is

       rule plus(x, y) : return evaluate(x) + evaluate(y);

If e has the form plus(x, y) then this rule is applied. It recursively evaluates 
x and y and returns the sum of their numerical values.

Here is the tree walker:


       with ast;

       extern "C" printf(...);
       extern "C" execute(Statement s);

       int var[26];

       int evaluate(Expression e)
       {
          match e {
         rule eq(x, y)     :  return evaluate(x) == evaluate(y);   
         rule ne(x, y)     :  return evaluate(x) != evaluate(y);
         rule lt(x, y)     :  return evaluate(x) <  evaluate(y);
         rule le(x, y)     :  return evaluate(x) <= evaluate(y);
         rule gt(x, y)     :  return evaluate(x) >  evaluate(y);
         rule ge(x, y)     :  return evaluate(x) >= evaluate(y);
         rule plus(x, y)   :  return evaluate(x) +  evaluate(y);
         rule minus(x, y)  :  return evaluate(x) -  evaluate(y);
         rule mult(x, y)   :  return evaluate(x) *  evaluate(y);
         rule divide(x, y) :  return evaluate(x) /  evaluate(y);
         rule neg(x)       :  return - evaluate(x);
         rule number(x)    :  return x;
         rule name(x)      :  return var[x];
          }
       }

       execute (Statement s)
       {
          match s {
         rule assignment(name(x), rhs) :
            var[x] = evaluate(rhs);
         rule print(x) :
            printf("%d\n", evaluate(x));
         rule ifstmt(c, s1, s2) :
            if(evaluate(c)) execute(s1); else execute(s2);
         rule whilestmt(c, s) :
            while(evaluate(c)) execute(s);
         rule seq(s1, s2) :
            execute(s1); execute(s2);
         rule empty() :
            ;
          }
       }

Note that this notation is similar to the Yacc style. A syntactic pattern is 
followed by an associated action. But here the pattern describes abstract syntax 
instead of concrete source text.

Again, the notation is more concise than the corresponding manual implementation. 
The Memphis precompiler not only generates the implementation, it also allows to 
check statically that constituents are only used in a context where they are 
indeed fields of the actual item.


## ==⚡ ANTLR Parser Generator
- https://github.com/antlr/antlr4
- [Download ANTLR](https://www.antlr.org/download.html)
- [ANTLR Getting Started](antlr\doc\getting-started.md)
- [ANTLR 4 Python Target](antlr/doc/python-target.md)
- [Grammars written for ANTLR v4](https://github.com/antlr/grammars-v4)
- [The Definitive ANTLR 4 Reference - Source Code](http://pragprog.com/titles/tpantlr2/source_code)

What is ANTLR?

ANTLR (ANother Tool for Language Recognition) is a powerful parser generator for reading, processing, executing, or translating structured text or binary files. It's widely used to build languages, tools, and frameworks. From a grammar, ANTLR generates a parser that can build and walk parse trees.

ANTLR 4.10, released April 10, 2022. It has these code generation targets:

| Target (-Dlanguage) |       Note       |
|---------------------|------------------|
| (default)           | Java             |
| CSharp              | C#               |
| Python3             | Python (2 and 3) |
| JavaScript          | JavaScript       |
| Go                  | Go               |
| Cpp                 | C++              |
| Swift               | Swift            |
| PHP                 | PHP              |
| Dart                | Dart             |

安装 ANTLR 需要 Java 1.7+ 运行环境，所以目标语言都需要 ANTLR tool：

```sh
# 0. Install Java (version 1.7 or higher)
# 1. Download ANTLR tool
$ cd /usr/local/lib
$ curl -O https://www.antlr.org/download/antlr-4.10-complete.jar
$ curl -O https://www.antlr.org/download/antlr-4.10.1-complete.jar

# 2. Add `antlr-4.10-complete.jar` to your `CLASSPATH`:
$ export CLASSPATH=".:/usr/local/lib/antlr-4.10-complete.jar:$CLASSPATH"
# It's also a good idea to put this in your `.bash_profile` or whatever your startup script is.

# 3. Create aliases for the ANTLR Tool, and `TestRig`.
$ alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.10-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
$ alias grun='java -Xmx500M -cp "/usr/local/lib/antlr-4.10-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig'
```

Windows 系统上可以创建脚本以方便命令使用：

```sh
# 3. Create short convenient commands for the ANTLR Tool, and TestRig, 
# using batch files or doskey commands:
# * Batch files (in directory in system PATH) antlr4.bat and grun.bat
java org.antlr.v4.Tool %*

@ECHO OFF
SET TEST_CURRENT_DIR=%CLASSPATH:.;=%
if "%TEST_CURRENT_DIR%" == "%CLASSPATH%" ( SET CLASSPATH=.;%CLASSPATH% )
@ECHO ON
java org.antlr.v4.gui.TestRig %*

# Or, use doskey commands:
doskey antlr4=java org.antlr.v4.Tool $*
doskey grun  =java org.antlr.v4.gui.TestRig $*
```

在 Windows 系统下可以将 jar 包路径添加到 CLASSPATH 环境变量中，多个包用分号分隔，并验证安装是否成功：

```sh
$ java org.antlr.v4.Tool
ANTLR Parser Generator Version 4.10

# java -cp C:\jdk-14.0.2\jars\antlr-4.10-complete.jar org.antlr.v4.Tool
$ java -jar /usr/local/lib/antlr-4.10-complete.jar
ANTLR Parser Generator Version 4.10
```

ANTLR tool and Java Target

- [Complete ANTLR 4.10.1 Java binaries jar](https://www.antlr.org/download/antlr-4.10.1-complete.jar). Complete ANTLR 4.10.1 tool, Java runtime and ST 4.0.8, which lets you run the tool and the generated code.
- [ANTLR 4.10.1 distribution (zip)](https://github.com/antlr/antlr4/archive/4.10.1.zip). Everything you need to build the tool and Java runtime from source.
- [ANTLR 4.10.1 Java runtime binaries jar](https://www.antlr.org/download/antlr-runtime-4.10.1.jar). Only what's needed for building and executing parsers/lexers generated in Java.

ANTLR 默认的目标语言就是 Java，示范，文法定义文件如下 Hello.g4：

    ## A First Example: 
    // Define a grammar called Hello
    grammar Hello;
    r  : 'hello' ID ;         // match keyword hello followed by an identifier
    ID : [a-z]+ ;             // match lower-case identifiers
    WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines

执行 ANTLR 命令构建，并编译 Java 源代码生成类文件：

```sh
$ antlr4 Hello.g4
$ javac Hello*.java
```

执行以下命令测试解析器，输入串后，再按 Ctrl-Z (Windows) 或 Ctrl-D (Uinx) 输入文件终结符号 EOF 以结束输入，以下用 ^D 或 ^Z 表示：

- 使用 -tree 命令行参数以输出 LISP 标记符号；
- 使用 -gui 使命行参数以显示树状结构的图形；
- 输出内容变方法规则 `r` 匹配的关键字 `hello` 并跟着一个 ID `parrt`；

使用 PowerShell 也可以配合 echo 命令来输入串，因为不支持文件重定向到 stdin 所以需要命令读取文件并配合管道操作： 

```sh
$ grun Hello r -tree
hello parrt
# press ^D for EOF
# and the output of LISP notation:
(r hello parrt)

$ grun Hello r -gui
hello parrt
# press ^D for EOF
# and the GUI window show.

# PowerShell
> get-content test.txt | grun Hello r -gui
> echo hello abc | grun Hello r -tokens
[@0,0:4='hello',<'hello'>,1:0]
[@1,7:9='abc',<ID>,2:0]
[@2,12:11='<EOF>',<EOF>,3:0]
```

另外，使用静态代码分析技术（static code analysis）能够在代码构建过程中帮助开发人员快速、有效的定位代码缺陷并及时纠正这些问题，从而极大地提高软件可靠性并节省软件开发和测试成本。

目前 Java 静态代码分析有以下主流工具：

- Checkstyle，FindBugs，PMD，Jtest
- https://github.com/soot-oss/soot

另外，安装 OpenJDK 后，还会提供一个 javap 命令，可以用来查看字节码的反汇编：

    javap -c .\HelloLexer.class

参考：

- [Static Program Analysis Book](https://spa-book.pblo.gq/)
- 南京大学 [软件分析 李樾、谭添](https://tai-e.pascal-lab.net/lectures.html)
- 北京大学 [Software Analysis](https://xiongyingfei.github.io/SA/2017/main.htm)
- [编译技术入门](https://github.com/lazyparser/becoming-a-compiler-engineer)
- [华为方舟编译器](https://gitee.com/openarkcompiler)
- [15-819 O: Program Analysis](http://www.cs.cmu.edu/~aldrich/courses/15-819O-13sp/)
- [Static Program Analysis by Anders Møller and Michael I. Schwartzbach](https://cs.au.dk/~amoeller/spa/)
- Formal Semantics of Programming Languages by G. Winskel, MIT Press, 1993.


### ===🗝 ANTLR targets Python3

为 Python 3.x 目标语言环境安装 ANTLR，不要安装 *antlr4* 这个错误的包，会导致 'Lexer' is not defined，如果已安装就卸载它：

```sh
# clone and install antlr4 to site-packages
git clone https://github.com/antlr/antlr4/
cd antlr-4.10/runtime/Python3
python setup.py install

# or pip install antlr4 runtime
pip install antlr4-python3-runtime
# pip install antlr4
# pip uninstall antlr4
```

执行命令构建时，和默认的 Java 目标语言非常相似，只需要指定语言为 Python3。

```sh
# build grammar
antlr4 -Dlanguage=Python3 MyGrammar.g4
```

构建会产生 4 个文件：

* MyGrammarLexer.py 包含文法规则配置的分析器；
* MyGrammarParser.py 包含文法配置配置的解析器；
* MyGrammarListener.py 可以通过 -no-listener 选项取消生成；
* MyGrammarVisitor.py 需要通过 -visitor 选项生成；

假设文法定义了一个 *startRule* 规则，那么在解析器中就会有相应的 *startRule()* 方法，调用它得到解析树，但是

和 Java/C# 不同，Python 不支持接口，所以 Listener 或 Visitor 直接继承基类 ParseTreeListener 和 ParseTreeVisitor。

完整功能的脚本参考如下，虽然它可以正常运行，但是只有提供具体的 Listerner 和 Vistor 逻辑才有实用性：

- you visit the parse tree using a custom listener
- you visit the parse tree using a custom visitor
- your grammar comprises production code (like ANTLR3)
 
```python
import sys
from antlr4 import *
import antlr4

from HelloLexer import HelloLexer
from HelloParser import HelloParser
 
def main(argv):
    input_stream = FileStream(argv[1])
    lexer = HelloLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = HelloParser(stream)
    tree = parser.startRule()
 
if __name__ == '__main__':
    sys.argv.append("hello_test.txt")
    main(sys.argv)
```

假设文法 MyGrammar.g4 中定义了 key 和 value 两条规则，那么 antlr4 tool 会生成以下这样的 Listener 实现：

```python
class MyGrammarListener(ParseTreeListener):
    def enterKey(self, ctx):
        pass
    def exitKey(self, ctx):
        pass
    def enterValue(self, ctx):
        pass
    def exitValue(self, ctx):
        pass
```
 
通过继承并覆盖父类方法，添加自定义行为代码来创建功能逻辑，例如：

```python
class KeyPrinter(MyGrammarListener):
    def exitKey(self, ctx):
        print("Oh, a key!") 
```

然后，创建一个 *ParseTreeWalker* 来执行 Listener，参考代码：
 
```python
   ...
   tree = parser.startRule() - only repeated here for reference
   printer = KeyPrinter()
   walker = ParseTreeWalker()
   walker.walk(printer, tree)
```

ANTLR 提供的 Python 运行时实现和 Java 的已经非常相似了，因为掌握其中一个就可以很好适应其它语言的实现。




## ==⚡ Lex/Yacc & Flex/Bison
- MSYS2 https://www.msys2.org/docs/what-is-msys2/
- Pacman Base Packages https://packages.msys2.org/base
- [The Lex & Yacc Page](http://dinosaur.compilertools.net/)
- [Bison](https://www.gnu.org/software/bison/)
- [Stanford CS143: Compilers](http://web.stanford.edu/class/archive/cs/cs143/cs143.1128/)
- [CPEG 421/621 Compiler Design](https://www.capsl.udel.edu/courses/cpeg421/2012/)
- [CSc 453: Compilers and Systems Software](http://www2.cs.arizona.edu/classes/cs453/fall14/)
- [CS 6120: Advanced Compilers](https://www.cs.cornell.edu/courses/cs6120/2022sp/)
- Write Your Own Compiler https://silcnitc.github.io/roadmap.html
- 自己动手写编译器 https://pandolia.net/tinyc/index.html
- goyacc for json https://github.com/sjjian/yacc-examples
- [The ANTLR Parser Generator](https://www.antlr.org/about.html)


Bison is a general-purpose parser generator that converts an annotated context-free 
grammar into a deterministic LR or generalized LR (GLR) parser employing LALR(1), 
IELR(1) or canonical LR(1) parser tables. Once you are proficient with Bison, 
you can use it to develop a wide range of language parsers, from those used in 
simple desk calculators to complex programming languages.

德拉威尔大学 University of Delaware 计算机体系与并行系统实验实验室网站提供研究生
课程 CPEG 421/621 Spring 2012 Compiler Design 包含的参考材料 Tutorial Lex/Yacc 
是非常棒的入门指南。该校位于美国东部特拉华州的纽瓦克市，是一所公立研究型大学，
也是公立常春藤大学之一。学校始建于 1743 年，最初名为纽瓦克学院，1921 年正式更名为
特拉华大学。

亚利桑那大学（University of Arizona）计算机学院的 CSc 453: Compilers and Systems Software
 课程资源也非常棒。该校始建于 1885 年，是该州的旗舰公立大学和第一所综合大学，世界一流的研究型大学，负有盛名的美国“公立常春藤”大学之一。

另外，康奈尔大学（Cornell University）计算机学院的高级编译器课程 CS 6120: Advanced Compilers 提供了非常便利的带方案的教学视频和 Github 讨论组。

使用以下 PowerShell 脚本可以下载相关的课程讲义及参考文档：

```sh
chcp 65001;

function download([HashTable]$list, [String]$url){
  $skip = 0
  $list.keys | % {
    $rename = $list[$_]
    $ori = ("$_" -split "/")[-1]
    $base = ("$ori" -split ".")[0]
    $rename = ($rename -replace "{NAME}", $ori)
    $rename = ($rename -replace "{BASE}", $base)

    $a = (Test-Path ($_ -split "/")[-1])
    $b = $rename -and (Test-Path "$rename")
    if($a -or $b) {
      $skip += 1
      echo "Skip $_"
      return # continue in % (for-each form)
    }
    echo "Donwlod: $url/$_"
    if($rename){
      curl.exe -L -o $rename "$url$_"
    }else{
      curl.exe -L -O "$url$_"
    }
  }
  echo "================================="
  echo "COUNT: $($list.Count) SKIP: $skip"
}

$list = @{
  "projects/project_cpeg621.pdf" = $false
  "slides/Topic-0_2012.pdf" = $false
  "slides/Topic-1_2012.pdf" = $false
  "slides/Topic-1a-IR_2012.pdf" = $false
  "slides/Topic-1b-CFAnalysis.pdf" = $false
  "slides/Tutorial-Flex_Bison.pdf" = $false
  "slides/Topic-1c-DFAnalysis.pdf" = $false
  "slides/Topic-1d-SSA.pdf" = $false
  "slides/Topic-2a-Instruction_Selection.pdf" = $false
  "slides/abi-tutorial.pdf" = $false
  "slides/Topic-2b.pdf" = $false
  "slides/Topic-2c.pdf" = $false
  "slides/Contemporary-Compilers.pdf" = $false
  "slides/Contemporary-Compilers-Additional.tar" = $false
  "slides/openmp_tutorial_04_06_2012.pdf" = $false
  "slides/Topic-3a-dependence.pdf" = $false
  "slides/swarm-turorial-4-13-2012.pdf" = $false
  "slides/Topic-4b-Dataflow.pdf" = $false
  "slides/Topic-4c-EARTH.pdf" = $false
  "slides/Topic-4c-EARTH.ppt" = $false
  "slides/Topic-4de-Codelets.pdf" = $false
  "slides/Topic-4de-Codelets.pptx" = $false
}

download $list "https://www.capsl.udel.edu/courses/cpeg421/2012/"

$list = @{
  "DOCS/lex tutorial.ppt" = "lex tutorial [DOCS].ppt"
  "DOCS/yacc tutorial.ppt" = "yacc tutorial [DOCS].ppt"
  "DOCS/tutorial4.ps" = "Lex and Yacc - A Brisk Tutorial.ps"
  "DOCS/tutorial4.pdf" = "Lex and Yacc - A Brisk Tutorial.pdf"
  "DOCS/tutorial-large.pdf" = "Lex and Yacc - A Brisk Tutorial [Large].pdf"
  "DOCS/gff-doc.ps" = $false
  "DOCS/gff-doc.pdf" = $false
  "DOCS/conflicts.ps" = $false
  "DOCS/conflicts.pdf" = $false
  "DOCS/intcode.html" = $false
  "DOCS/3addr2spim.ps" = $false
  "DOCS/3addr2spim.pdf" = $false
  "DOCS/spim.pdf" = $false
  "class_notes/0_background.pptx" = $false
  "class_notes/1_LexicalAnalysis-DOCTORED.ppt" = $false
  "class_notes/1_LexicalAnalysis.ppt" = $false
  "class_notes/2_BottomUpParsing.ppt" = $false
  "class_notes/3_SemanticAnalysis.ppt" = $false
  "class_notes/4_RuntimeEnvironment.ppt" = $false
  "class_notes/5_IntermediateCodeGeneration.pptx" = $false
  "class_notes/6_FinalCodeGeneration.ppt" = $false
  "class_notes/7_Interpretation.ppt" = $false
  "class_notes/8_LinkingLoading.ppt" = $false
  "class_notes/lex tutorial.ppt" = $false
  "class_notes/yacc tutorial.ppt" = $false
}

download $list "http://www2.cs.arizona.edu/classes/cs453/fall14/"
```

另外 Stanford CS143 Compilers 课程提供的讲义非常全面，可以作为一参考。

Lex 代表 lexical analyzar，Yacc 代表 yet another compiler compiler，它们是两个最常用的词法分析器、编译器代码生成器工具，Scanner & Parser Generator。

Windows 系统上可以通过 MSYS2 获取这些工具：

```sh
# MSYS2
> pacman -Qo /usr/bin/lex.exe
/usr/bin/lex.exe is owned by flex 2.6.4-1
> pacman -S flex
> pacman -S bison

# Ubuntu
sudo apt install flex       # version 2.6.4-6.2, or
sudo apt install bison       # version 2:3.5.1+dfsg-1, or
sudo apt install bison++     # version 1.21.11-4build1
sudo apt install btyacc      # version 3.0-5build1
sudo apt install byacc       # version 20140715-1build1
sudo apt install byacc-j     # version 1.15-1build3
sudo apt install perl-byacc  # version 2.0-8
```

使用这些工具需要精通 C 或 C++ 编程，并且掌握正则表达式的使用。

Bison is a general-purpose parser generator that converts an annotated context-free grammar into a deterministic LR or generalized LR (GLR) parser employing LALR(1), IELR(1) or canonical LR(1) parser tables. Once you are proficient with Bison, you can use it to develop a wide range of language parsers, from those used in simple desk calculators to complex programming languages.

Bison 是一种兼容 Yacc 的通用解析器生成器，可将带注释的上下文无关文法 CFGs 转换为使用 LALR (1) parser tables 的 deterministic LR 或 generalized LR (GLR) 解析器。

作为一项实验性功能，Bison 还可以生成 IELR (1) 或规范 LR(1) 解析器表。一旦你精通 Bison，就可以用它来开发各种语言解析器，从简单的桌面计算器到复杂的编程语言。

Bison 与 Yacc 向上兼容：所有正确编写的 Yacc 语法都应该可以用 Bison 处理而无需更改。任何熟悉 Yacc 的人都应该可以轻松使用 Bison。Bison 还支持 Java 作为实验性功能。

Bison 和 Flex 配合使用，可以将用户提供的语法规则转化成一个语法分析器。

使用的角度，Flex 和 Bison 用来生成词法分析器和语法分析器两个程序的工具，可以处理结构化输入，一般结合使用，处理复杂的文件解析工作。


1975 年 Mike Lesk 和当时尚在 AT&T 实习的 Eric Schmidt 共同完成词法分析器的生成程序 Lex，Schmidt 曾是 Google 的 CEO。

Lex 可以单独使用也可以与 Johnson 的 Yacc 协同工作，很有名气，但是无奈效率太低加上有 Bug。

大概在 1987 年，Lawrence Berkeley 实验室的 Vern Paxson 用 C 重写 Lex，并命名为 FLex（the Fast Lexical Analyzer Generator），基于伯克利许可证。项目地址 [Flex](https://github.com/westes/flex "Flex")。

Yacc 是由贝尔实验室的 S. C. Johnson 基于 Knuth 大神的 LR 语法分析理论，于 1975 ~ 1978 年写成。大约 1985 年，UC Berkeley 的研究生 Bob Corbett 使用改进的内部算法实现了伯克利 Yacc，来自 FSF 的 Richard Stallman 改写了伯克利 Yacc 并将其用于 GNU 项目，添加了很多特性，形成了今天的 GNU Bison，现在作为 FSF 的项目被维护，基于 GNU 公共许可证发布。

Flex 和 Bison 使用的规则文件扩展名如下：

- Flex .l specification file
- Bison .y specification file

Flex 输入一个规则文件 .l 然后根据规则生成 tokenizer/scanner，例如 lex.l ===> lex.yy.c，可以使用 -o 指定输出文件而不是使用默认输出文件名。Flex 生成的词法分析器会根据输入串执行匹配规则中的动作代码，其主入口函数是 *yylex()*，可以配合 flex runtime library 生成可执行程序，也可以手动提供 *main()* 函数。当执行这个词法分析程序时，就会根据正则表达式匹配输入串，并且在匹配出现时，执行相应的 C Code，或者丢弃内容，如果规则没有定义 action。

Bison 输入一个规则文件 .y 然后根据规则生成解析器，例如使用 bison -y 模拟 Yacc 输出头文件加 C 代码文件，默认文件名 some.y ===> y.tab.c + y.tab.h。不使用 -y 模拟 Yacc 则直接输出一个和输入文件同名的 some.tab.c 文件。


在生成的 Scanner 与 Parser 之间的通信：

• The user must supply an integer-valued function *yylex()* that implements the lexical analyzer (scanner).
• If there is a value associated with the token, it should be assigned to the external variable *yylval*.
• The token *error* is reserved for error handling.
• Token numbers : These may be chosen by the user if desired. The default is:
    – chosen by yacc [in a file `y.tab.h`]
    – the token no. for a literal is its ASCII value
    – other tokens are assigned numbers starting at 257
    – the endmarker must have a number zero or negative.

Using Yacc

• Generate `y.tab.h` using *yacc -d*
• Suppose the grammar spec is in a file `foo.y`. Then:
    – The command *yacc foo.y* yields a file `y.tab.c` containing the parser constructed by yacc.
    – The command *yacc -d foo.y* constructs a file `y.tab.h` that can be #include’d into the scanner generated by lex.
    – The command *yacc -v foo.y* additionally constructs a file `y.output` containing a description of the parser (useful for debugging).
• The user needs to supply a function *main()* to driver, and a function *yyerror()* that will be called by the parser if there is an error in the input.


### ===🗝 Usage of Flex & Bison CLI

Usage: flex [OPTIONS] [FILE]...

    Generates programs that perform pattern-matching on text.

    Table Compression:
      -Ca, --align      trade off larger tables for better memory alignment
      -Ce, --ecs        construct equivalence classes
      -Cf               do not compress tables; use -f representation
      -CF               do not compress tables; use -F representation
      -Cm, --meta-ecs   construct meta-equivalence classes
      -Cr, --read       use read() instead of stdio for scanner input
      -f, --full        generate fast, large scanner. Same as -Cfr
      -F, --fast        use alternate table representation. Same as -CFr
      -Cem              default compression (same as --ecs --meta-ecs)

    Debugging:
      -d, --debug             enable debug mode in scanner
      -b, --backup            write backing-up information to lex.backup
      -p, --perf-report       write performance report to stderr
      -s, --nodefault         suppress default rule to ECHO unmatched text
      -T, --trace             flex should run in trace mode
      -w, --nowarn            do not generate warnings
      -v, --verbose           write summary of scanner statistics to stdout
          --hex               use hexadecimal numbers instead of octal in debug outputs

    Files:
      -o, --outfile=FILE      specify output filename
      -S, --skel=FILE         specify skeleton file
      -t, --stdout            write scanner on stdout instead of lex.yy.c
          --yyclass=NAME      name of C++ class
          --header-file=FILE   create a C header file in addition to the scanner
          --tables-file[=FILE] write tables to FILE

    Scanner behavior:
      -7, --7bit              generate 7-bit scanner
      -8, --8bit              generate 8-bit scanner
      -B, --batch             generate batch scanner (opposite of -I)
      -i, --case-insensitive  ignore case in patterns
      -l, --lex-compat        maximal compatibility with original lex
      -X, --posix-compat      maximal compatibility with POSIX lex
      -I, --interactive       generate interactive scanner (opposite of -B)
          --yylineno          track line count in yylineno

    Generated code:
      -+,  --c++               generate C++ scanner class
      -Dmacro[=defn]           #define macro defn  (default defn is '1')
      -L,  --noline            suppress #line directives in scanner
      -P,  --prefix=STRING     use STRING as prefix instead of "yy"
      -R,  --reentrant         generate a reentrant C scanner
           --bison-bridge      scanner for bison pure parser.
           --bison-locations   include yylloc support.
           --stdinit           initialize yyin/yyout to stdin/stdout
           --nounistd          do not include <unistd.h>
           --noFUNCTION        do not generate a particular FUNCTION

    Miscellaneous:
      -c                      do-nothing POSIX option
      -n                      do-nothing POSIX option
      -?
      -h, --help              produce this help message
      -V, --version           report flex version


Usage: bison [OPTION]... FILE

    Generate a deterministic LR or generalized LR (GLR) parser employing
    LALR(1), IELR(1), or canonical LR(1) parser tables.

    Mandatory arguments to long options are mandatory for short options too.
    The same is true for optional arguments.

    Operation Modes:
      -h, --help                 display this help and exit
      -V, --version              output version information and exit
          --print-localedir      output directory containing locale-dependent data
                                 and exit
          --print-datadir        output directory containing skeletons and XSLT
                                 and exit
      -u, --update               apply fixes to the source grammar file and exit
      -f, --feature[=FEATURES]   activate miscellaneous features

    FEATURES is a list of comma separated words that can include:
      caret, diagnostics-show-caret
                        show errors with carets
      fixit, diagnostics-parseable-fixits
                        show machine-readable fixes
      syntax-only       do not generate any file
      all               all of the above
      none              disable all of the above

    Diagnostics:
      -W, --warnings[=CATEGORY]  report the warnings falling in CATEGORY
          --color[=WHEN]         whether to colorize the diagnostics
          --style=FILE           specify the CSS FILE for colorizer diagnostics

    Warning categories include:
      conflicts-sr      S/R conflicts (enabled by default)
      conflicts-rr      R/R conflicts (enabled by default)
      counterexamples, cex
                        generate conflict counterexamples
      dangling-alias    string aliases not attached to a symbol
      deprecated        obsolete constructs
      empty-rule        empty rules without %empty
      midrule-values    unset or unused midrule values
      precedence        useless precedence and associativity
      yacc              incompatibilities with POSIX Yacc
      other             all other warnings (enabled by default)
      all               all the warnings except 'counterexamples', 'dangling-alias' and 'yacc'
      no-CATEGORY       turn off warnings in CATEGORY
      none              turn off all the warnings
      error[=CATEGORY]  treat warnings as errors

    WHEN can be one of the following:
      always, yes  colorize the output
      never, no    don't colorize the output
      auto, tty    colorize if the output device is a tty

    Tuning the Parser:
      -L, --language=LANGUAGE          specify the output programming language
      -S, --skeleton=FILE              specify the skeleton to use
      -t, --debug                      instrument the parser for tracing
                                       same as '-Dparse.trace'
          --locations                  enable location support
      -D, --define=NAME[=VALUE]        similar to '%define NAME VALUE'
      -F, --force-define=NAME[=VALUE]  override '%define NAME VALUE'
      -p, --name-prefix=PREFIX         prepend PREFIX to the external symbols
                                       deprecated by '-Dapi.prefix={PREFIX}'
      -l, --no-lines                   don't generate '#line' directives
      -k, --token-table                include a table of token names
      -y, --yacc                       emulate POSIX Yacc

    Output Files:
          --defines[=FILE]          also produce a header file
      -d                            likewise but cannot specify FILE (for POSIX Yacc)
      -r, --report=THINGS           also produce details on the automaton
          --report-file=FILE        write report to FILE
      -v, --verbose                 same as '--report=state'
      -b, --file-prefix=PREFIX      specify a PREFIX for output files
      -o, --output=FILE             leave output to FILE
      -g, --graph[=FILE]            also output a graph of the automaton
      -x, --xml[=FILE]              also output an XML report of the automaton
      -M, --file-prefix-map=OLD=NEW replace prefix OLD with NEW when writing file paths
                                    in output files

    THINGS is a list of comma separated words that can include:
      states            describe the states
      itemsets          complete the core item sets with their closure
      lookaheads        explicitly associate lookahead tokens to items
      solved            describe shift/reduce conflicts solving
      counterexamples, cex
                        generate conflict counterexamples
      all               include all the above information
      none              disable the report

    Report bugs to <bug-bison@gnu.org>.
    GNU Bison home page: <https://www.gnu.org/software/bison/>.
    General help using GNU software: <https://www.gnu.org/gethelp/>.
    For complete documentation, run: info bison.


### ===🗝 Flex Specifications
- [Lexical Analysis With Flex, for Flex 2.6.2](https://westes.github.io/flex/manual/)

快速参考 Flex 符号索引文档：

- [Concept Index](https://westes.github.io/flex/manual/Concept-Index.html)
- [Index of Functions and Macros](https://westes.github.io/flex/manual/Index-of-Functions-and-Macros.html)
- [Index of Variables](https://westes.github.io/flex/manual/Index-of-Variables.html)
- [Index of Data Types](https://westes.github.io/flex/manual/Index-of-Data-Types.html)
- [Index of Hooks](https://westes.github.io/flex/manual/Index-of-Hooks.html)
- [Index of Scanner Options](https://westes.github.io/flex/manual/Index-of-Scanner-Options.html)
- [A.2 C Scanners with Bison Parsers](https://westes.github.io/flex/manual/Bison-Bridge.html)
- [A.4 Common Patterns](https://westes.github.io/flex/manual/Common-Patterns.html)

Flex 输入的规范文件，Flex .l Specification 由三部分组成，每个部分用 %% 分开：

    definitions
    %%
    rules
    %%
    user code

- *definitions* 定义：包含 `name definition` 这种格式的定义以简化扫描器规则，以及开始条件（start condition）的声明
- *Rules* 规则：规则格式 `pattern action`，前者必须位于行首不能有缩进，并且和 action 处在同一行，可以省略匹配动作。
- *User code* 用户代码：可选内容，这部分内容会逐字复制到输出文件，它用于扫描程序调用或调用的伴随例程。

可以使用 `/* ... */` 块注解，在 Rules 区可以使用前导空格的块注解。

规范文件中只有规则 Rules 部分是必要的，其它为可选内容。

```C
/*** Definition section ***/
%{
/* C code to be copied verbatim */
%}

/* This tells flex to read only one input file */
%option noyywrap

%% /*** Rules section ***/
   /*** pattern action ***/

/* [0-9]+ matches a string of one or more digits */
[0-9]+ {
    /* yytext is a string containing the matched text. */
    printf("Saw an integer: %s\n", yytext);
    }

/* Ignore all other characters. */
.|\n { }

%% /*** User Code Seccion ***/
```

缩进的文本或用 `%{...%}` 括起来的文本也会逐字复制到输出中，会删除两侧的 %{ 和 %} 符号。%{ 和 %} 符号本身必须在行上没有缩进。

另外，还有 `%top{...}` 设置代码块，允许多个，并保留其顺序，其中的代码会输出到所生成文件的顶部。 Bison 还可以设置 `%code{...}` 代码块。当要定义某些预处理器宏或在生成的代码之前包含某些文件时，此功能很有用。 如以下示例所示：

    %top{
            /* This code goes at the "top" of the generated file. */
            #include <stdint.h>
            #include <inttypes.h>
        }

第一条规则之前的任何缩进或 `%{...%}` 括起来的文本都可以用于声明扫描例程本地的变量，以及（在声明之后）每次进入扫描例程时都将执行的代码。

规则部分中的其他缩进或 `%{...%}` 括起来的文本仍会复制到输出中，但是其含义不明确，很可能会导致编译时错误。

Flex 规则的模式匹配 pattern 使用正式表达式匹配输入，动作 action 是一条或 C 语言语句，多条语句使用花括号包括，并返回一个 Token Type：

    REGEX {
            /*Code*/
            return TOKEN-TYPE;
        }
        …

*Token* 是 Flex 作为词法分析器生成工具所产生最重要的信息，配合 Bison 生成解析器使用 `%token` 来声明。

如果 action 没有指定内容则表示丢弃匹配到的输入数据，有些特殊的模式匹配，如 <<EOF>> 匹配输入数据的结束，参考 Flex 源代码提供的示范程序 examples\manual\cat.lex。


有多条规则匹配，只有第一条有效，如以下只有 Rule1 有效：

– Input: post
– Rule1: "post" { printf("Hello,"); }
– Rule2: [a-zA-z]+ { printf ("World!"); }

使用以下三条规则演示：

- `[0-9]+` 这条规则匹配一串数字，如输入的 1234，然后将输入内容通过 *atof()* 函数转换为浮点值存储到 yylval.dval，然后在输出文件 .y 声明返回的 Token Type 为 NUMBER。
-`[A-Za-z]+` 这条规则匹配一串字符串，并通过 *symlook()* 函数转换为符号表中的符号存储到 sp 指针中。同样在输出文件中声明 Token Type，其类型为 WORD。
-`%% /*** Rules section ***/
.` 这条规则匹配一个字符，Token Type 就由这个字符表示。

```c
/*** Definition section ***/
DIGIT    [0-9]
ID       [a-z][a-z0-9]*

%% /*** Rules section ***/
[0-9]+ {
        /*Code*/
        yylval.dval = atof(yytext);
        return NUMBER;
    }

{DIGIT}+ { return NUMBER; }

[A-Za-z]+ {
        /*Code*/
        struct symtab *sp = symlook(yytext);
        yylval.symp = sp;
        return WORD;
    }

. { return yytext[0]; } 
```

在定义区声明的规则名称可以在 Rules 区引用，如 <DIGIT> 表示匹配数字。

部分匹配模式及特殊规则参考如下，具体参考 [Flex 文档](https://westes.github.io/flex/manual/Patterns.html)：

    {name}          the expansion of the ‘name’ definition 
    <<EOF>>         an end-of-file.
    <s1,s2><<EOF>>  an end-of-file when in start condition s1 or s2
    <s>r            an ‘r’, but only in start condition s
    <s1,s2,s3>r     same, but in any of start conditions s1, s2, or s3.
    <*>r            an ‘r’ in any start condition, even an exclusive one.
    \X      if X is ‘a’, ‘b’, ‘f’, ‘n’, ‘r’, ‘t’, or ‘v’, then the ANSI-C interpretation of ‘\x’. Otherwise, a literal ‘X’

    \0  return NUL;
    \"  return QUOTE;
    \{  return OBRACE;
    \}  return EBRACE;
    \n  return NEWLINE;
    \*  return MULT;
    \+  return PLUS;
    -   return MINUS;
    ;   return SEMICOLON;
    [ \t]+ /* ignore whitespace */;

Flex 还内置了一些通用匹配规则，参考文档 A.4 Common Patterns：

• Numbers: `[:digit:]` ==> [0-9] and `[:xdigit:]` ==> [0-9A-Fa-f]
• Identifiers: `[:alpha:]` ==> [A-Za-z] and `[:alnum:]` ==> [0-9A-Za-z]

```sh
# C99 decimal constant
([[:digit:]]{-}[0])[[:digit:]]*
# C99 hexadecimal constant
0[xX][[:xdigit:]]+
# C99 octal constant
0[01234567]*

# C99 Identifier
ucn        ((\\u([[:xdigit:]]{4}))|(\\U([[:xdigit:]]{8})))
nondigit    [_[:alpha:]]
c99_id     ([_[:alpha:]]|{ucn})([_[:alnum:]]|{ucn})*
```

Flex 提供了一个机制来按条件激活匹配规则，[Start Conditions](https://westes.github.io/flex/manual/Start-Conditions.html)。

规则格式设置带有尖括号包括时，如 <sc> 表示这是一个 Start Conditions，只扫描到当前的条件名称，即用 BEGIN 指令来激活 sc 这个条件名称时才激活此规则。

```c
/* define some Start Conditions*/
%s sc

%%  /*** Rules section ***/

sc        BEGIN(sc); /* activated sc*/
<sc>foo   printf("DO_SOMETHING");
bar       printf("SOMETHING_ELSE");

<INITIAL>{
    "/*"      BEGIN(COMMENT);
}
<COMMENT>{
    "*/"      BEGIN(0);
    [^*\n]+   ;
    "*"[^/]   ;
    \n        ;
}
```

在 definitions 区域进行条件名称声明的方式有两种，并且可以在花括号中定义多条 action，例如上面用于匹配注解的规则：

- inclusive 条件使用 %s 声明，如 `%s sc`，被激活时，没有前缀条件的规则也会有效。
- exclusive 条件使用 %x 声明，如 `%x sc`，被激活时，其它没有前缀条件的规则处于失效。

- Start Conditions 规则要放置在前面。
- BEGIN(0) 和 BEGIIN(INITIAL) 都是回到初始条件。
`<*>` 代表所有条件：也就是无条件了，规则在任何情况都会生效。
`<INITIAL,sc>` 代表初始状态或 sc 条件在任何一种情况都会生效。
- 像 sc 这样的条件名字其实是整型，你也可以用一个整型变量来存储下来他的值。
- 当前的 start condition 通过 YY_START 或者 YYSTATE 获取。

可以嵌套 start condition，使用以下函数操作起始条件堆栈：

```c
void yy_push_state (int new_state)
void yy_pop_state () // 通过 BEGIN 弹出栈顶并。
int yy_top_state ()  // 返回栈顶而不改变栈的内容。
```

将当前的开始条件推入开始条件堆栈的顶部并切换到 new_state，就像使用过 *BEGIN(new_state)* 一样，注意括号不是必要的但更直观，开始条件名称也是整数。

要使用启动条件堆栈，必须包含一个 `%option stack` 指令。开始条件堆栈动态增长，因此没有内置的大小限制。如果内存耗尽，程序执行将中止。


生成分析器，并编译执行：

```sh
> flex lexer.l && g++ .\lex.yy.c -o lexer
> lexer
```

生成词法分析器中 yyin 和 yyout 设置标准输入输出，通过 *yyget_in()* 和 *yyget_out()* 方法获取。

默认设置 yyin 输入为标准控制台输入，可以打开其它文件作为输入：

    yyin = stdin;
    yyout = stdout;
    
    yyin = fopen("some.txt",r);

当词法分析程序遇到文件结尾时，它调用例程 *yywrap()* 确定下一步要做什么，如果返回 0，扫描程序继续扫描，如果返回 1，扫描程序就返回报告文件结尾标记。

标准版本 *yywrap()* 总是返回 1 表示没有更多输入数据。如果返回 0 指示有更多的输入，那么它首先需要调整指向新的文件 yyin，可使用 *fopen()* 打开新的输入文件。

```c
int yywrap() {
   // open next reference or source file and start scanning
   if((yyin = compiler->getNextFile()) != NULL) {
      line = 0; // reset line counter for next source file
      return 0;
   }
   return 1;
}
```

也可以声明区设置选项不使用 *yywrap()* 函数：

    %option noyywrap

在编译时还可以指定 *-lfl* 参数来使用 libfl.a 库提供的 *yywrap* 符号和 *main()* 函数。

例如，以下 lexer.l 代码编译后就只可以产生一个词法分析器，虽然只能分析 stop 和 start 两个符号：

```c
/*** Definition section ***/
%{
#include <stdio.h>
%}

/* %option noyywrap */

%%  /*** Rules section ***/

stop printf("Stop service.\n");
start printf("Start service.\n");

%%  /*** User Code Session ***/

int yywrap()
{
    return 0;
}

int main(void)
{
    return yylex();
}
```

编译并执行测试：

```sh
> flex lexer.l && g++ lex.yy.c -o lexer
> echo startstop | .\lexer.exe
Start service.
Stop service.

> .\lexer.exe
stop
Stop service.

start
Start service.
```

输出内容出现空行，这是从输入的内容而来的，分析器不会匹配空白串，所以它们被直接输出。


### ===🗝 Grammar & Bison
- [Lexical Analysis With Flex, for Flex 2.6.2](https://westes.github.io/flex/manual/)
- [Bison Doc](https://www.gnu.org/software/bison/manual/)
- [CSc 453: Compilers and Systems Software](http://www2.cs.arizona.edu/classes/cs453/fall14/)
- [Lex and Yacc: A Brisk Tutorial](https://www2.cs.arizona.edu/classes/cs453/fall14/DOCS/tutorial-large.pdf)

Flex 与 Bison 搭配生成解析器，根据 CFG 规范文件生成解释器，工作流程如下：

    Yacc: A Parser Generator

    bison -d ==> y.tab.h
    bison -y ==> y.tab.c

               +===============+         +===============+
               | lexical rules |         | grammar rules |
               +===============+         +===============+
                   |                           |
                   V                           V
               +=========+               +===========+
               |   Lex   |               |    Yacc   |
               +=========+               +===========+
                   |                           |
                   V                           V
               +=========+               +===========+
    =========> | yylex() |  ==========>  | yyparse() | =============>
      input    +=========+    tokens     +===========+  parsed input

用户可以在 *main()* 调用 *yyparse()*，其工作流程：

    int main() { return yyparse(); }

- Called once from *main()* [user-supplied]
- Repeatedly calls *yylex()* until done:
    - On syntax error, calls *yyerror()* [user-supplied]
    - Returns 0 if all of the input was processed;
    - Returns 1 if aborting due to syntax error.

Token 定义及相关规则：

- Token encodings:
    - “end of file” represented by ‘0’;
    - a character literal: its ASCII value;
    - other tokens: assigned numbers > 257.
- Token names:
    - declared using ‘%token’
    - single-character tokens don’t have to be declared
    - any name not declared as a token is assumed to be a nonterminal.
- start symbol of grammar, using ‘%start’     [optional]
- operator info: precedence, associativity

Yacc specification 规范文件类似 Flex，规范文件中只有语法规则部分是必要的，其它为可选内容。

```c
/*** Declarations ***/
%%

/*** Grammar rules ***/
%%

/*** Programs ***/
```

得到的解析器可以读取输入串的 Token 序列，并通过指定语法确定其语法结构。

语法通常是一组扩展巴科斯范式（Extended Backus-Naur Form，EBNF），例如以下是简单的数学运的递归语法：

    E   : E + E
        | E - E
        | E * E
        | E / E
        | id

每个表达式，这里只有一个 Case Expressions (E)，右侧有 5 个文法产生式 Grammar Production，竖直线表示这些是可选项，它们作用等价，每个表达式可以递归表达为 E + E 或 E - E 或 E * E 或 E / E 等等。

解析器怎么工作呢？假设输入的 Token 序列为：2 + 2 - 1，假定从左至右处理：

- 先匹配到一个 id 即数值 2，解析器现在知道第一个 E 表达式；
- 接下来解析可能会遇到四种情况，即四则运算；
- 读取下一个 Token，得到 + 运算符，至此解析器就进入 E + E 这个递归分支下，只需要读取下一个 1 就得到这个结果；
- 上一步骤得到一个 Production，其它 Token 也按这样的思路处理。

Bison .y Specification 格式，如下：

- 声明 Tokens，格式为 `%token <TYPE> NAME`；
- 声明运算符，声明在后面表示优先级更高，left 和 right 分别表示结合方向；
- 规则定义部分，和前面的 BNF 语法很像，使用了各种 Tokens。
    - *statement_list* 表示语句列表，它产生自其它语句列表或跟着语句的语句列表，| 表示可选值，使用换行字符结束；
    - *statement* 表示语句，由 expression 赋值结构构成，或者是一个简单的打印信息语句；
    - *expression* 表达式由 NUMBER 或 NAME 等 Token 构成；
    - 花括号内的是语法规则匹配时执行的代码语句，expression 中的语句 $$ 表示返回值；

```c
/*** Definition section ***/
%{ /* C code to be copied verbatim */ %}

/*** Declaration of Tokens: ***/
/*** %token <TYPE> NAME  ***/
%token <symp> NAME
%token <dval> NUMBER

/*** Operator Precedence and Associativity ***/
/*** %left|right|nonassoc operators  ***/
%left '-' '+'
%left '*' '/'

/*** Defined non-terminal name ***/
/*** (the left side of productions) ***/
%type <dval> expression

%%
/*** Grammar Rules section ***/
statement_list: statement '\n'
                | statement_list statement '\n'

statement: NAME '=' expression { $1->value = $3; }
                | expression { printf("= %g\n", $1); }

expression: NUMBER
                | NAME { $$ = $1->value; }

%%
/*** Programs ***/
```

文法规则定义中，RHS 可以指定花括号包括的 C 语言代码，并且左递归解释效率高于右递归的表达方式如：

    A : B1 { printf(“after B1\n”); x = 0; } B2 { x++; } B3
        
    Left-recursion: 
    A : A x | … 

    right-recursion:
    A : x A | …

运算符号定义参考，运算符优先级往下增加，后定义的优先级更高，以下方法定义 * / 比 + - 运算符号有更高优先级：

    %left '+'  '-'
    %left  '*'  '/'

    Expr: expr '+' expr
        | '–' expr    %prec '*'
        | …

- Binary operators: %left, %right, %nonassoc
- Unary operators: %prec

处理错误使用 `error` 这个 Token，它会专门为错误处理保留，可以在文法生成式中使用。

如下，为了恢复 expr 可能出现的错误：

    stmt: IF '(' expr ')' stmt 
        | IF '(' error ')' stmt 
        | FOR …
        | …

建议放置在可能出现错误并复原到上一状态的位置上：

- Close to the start symbol of the grammar:
    - To allow recovery without discarding all input.
- Near terminal symbols:
    - To allow only a small amount of input to be discarded on an error.
    - Consider tokens like ‘)’, ‘;’, that follow nonterminals.
- Without introducing conflicts.

解析器处理错误时的行为：

- pops its stack until it enters a state where the token `error` is legal;
- then behaves as if it saw the token `error`
    - performs the action encountered;
    - resets the lookahead token to the token that caused the error.
- If no `error` rules specified, processing halts.
- user-supplied function `void yyerror(char *s)` may call to prints out error message.
- `extern int yychar`: token `no.` of token causing the error, and `curr_line` is the line number.
- user program keeps track of line numbers, as well as any additional info desired.

错误行为控制：

- Parser remains in error state until three tokens successfully read in and shifted
    - prevents cascaded error messages;
    - if an error is detected while parser in error state:
        - no error message given;
        - input token causing the error is deleted.
- To force the parser to believe that an error has been fully recovered from: *yyerrok*;
- To clear the token that caused the error: *yyclearin*;


解释树出现二义，冲突有两种，Conflicts types:

- shift-reduce conflict: 
    - The parser can either keep reading more of the input (“shift action”), 
    - or it can mimic a derivation step using the input it has read already (“reduce action”).
- reduce-reduce conflict: 
    - There is more than one production that can be used for mimicking a derivation step at that point.

解决二义性冲突问题：

- specify operator precedence, associativity;
- restructure the grammar, use y.output to identify reasons for the conflict.



To trace the shift/reduce actions of the parser:

    when compiling:
    #define YYDEBUG

    at runtime:
    set yydebug = 1    /* extern int yydebug; */


在产生式中使用 $i 来规则中的符号，例如 `$1` 表示第一个符号，它也是规则的默认值，`$$` 可以用来设置规则的返回值。

    decl : type { tval = $1 } id_list { symtbl_install($3, tval); }
           ==== ============= ======= =============================
            $1       $2          $3               $4

规则默认返回 Non-Terminal 符号值的类型是 int，可以使用 `%union` 定义返回类型：

    %union {
        symtbl_ptr      st_ptr;
        id_list_ptr     list_of_ids;
        tree_node_ptr   syntax_tree_ptr;
        int             value;
    }

给 union 定义不同的可返回类型，然后指定 union 成员作为返回的文法符号 Grammar Symbol：

    %union {
        symtbl_ptr      st_ptr;
        id_list_ptr     list_of_ids;
        tree_node_ptr   syntax_tree_ptr;
        int             value;
    }

    /* Specify which union member a particular grammar symbol will return:*/

    %token <value> INTCON, CHARCON;
    %type <st_ptr> identifier;
    %type <syntax_tree_ptr> expr, stmt;

编译 Flex 示范程序 \examples\manual\expr.lex & expy.y

```sh
bison -d -y expr.y
flex -i -I  expr.lex
gcc -g -o expr lex.yy.c y.tab.c
# gcc -g -o expr lex.yy.c y.tab.c -ll -lm

# -y, --yacc              emulate POSIX Yacc
# -d                      likewise but cannot specify FILE (for POSIX Yacc)
# -i, --case-insensitive  ignore case in patterns
# -I, --interactive       generate interactive scanner (opposite of -B)
```

# =🚩 CPython Source Code Layout
- Developer Guide: https://devguide.python.org/
- Exploring CPython’s Internals https://devguide.python.org/exploring/
- CPython Directory structure https://devguide.python.org/setup/#directory-structure
- The CPython Developer's Guide https://github.com/python/devguide

On average, PyPy with Just-in-Time Compiler (JIT - Just-in-Time Compiler 作为一个重要的提速技术，它主要负责在程序执行前将字节码转化为机器实现更高的效率提升，像 Google V8 JavaScript 引擎，就是因为引入了 JIT 技术使得它在脚本的执行效率完全领先于其它 JavaScript 脚本引擎。), is 4.2 times faster than CPython

    "If you want your code to run faster, you should probably just use PyPy."
    -- Guido van Rossum (creator of Python)

CPython is the original Python implementation. PyPy is not a completely universal replacement for the stock CPython runtime. PyPy has always performed best with “pure” Python applications — i.e., applications written in Python and nothing else. Python packages that interface with C libraries, such as NumPy, have not fared as well due to the way PyPy emulates CPython’s native binary interfaces. 

PyPy’s developers have whittled away at this issue, and made PyPy more compatible with the majority of Python packages that depend on C extensions. Numpy, for instance, works very well with PyPy now. But if you want maximum compatibility with C extensions, use CPython.

基于 Rust 语言实现的解释器也值得探索，它可以通过 WebAssembly 将 Python 运行于 Web 浏览器上：

    git clone git@github.com:RustPython/RustPython.git
    git clone git@github.com:RustPython/rustpython.github.io.git

开发者参考文档 The CPython Developer's Guide，可以作为源代码开发者参考：

    git clone git@github.com:python/devguide

- [Python Developer's Guide](devguide\index.rst)
- [1. Getting Started](devguide\setup.rst)
- [2. Where to Get Help](devguide\help.rst)
- [3. Lifecycle of a Pull Request](devguide\pullrequest.rst)
- [4. Running & Writing Tests](devguide\runtests.rst)
- [5. Increase Test Coverage](devguide\coverage.rst)
- [6. Helping with Documentation](devguide\docquality.rst)
- [7. Documenting Python](devguide\documenting.rst)
- [8. Silence Warnings From the Test Suite](devguide\silencewarnings.rst)
- [9. Fixing "easy" Issues (and Beyond)](devguide\fixingissues.rst)
- [10. Issue Tracking](devguide\tracker.rst)
- [11. Triaging an Issue](devguide\triaging.rst)
- [12. Following Python's Development](devguide\communication.rst)
- [13. Porting Python to a new platform](devguide\porting.rst)
- [14. How to Become a Core Developer](devguide\coredev.rst)
- [15. Developer Log](devguide\developers.rst)
- [16. Accepting Pull Requests](devguide\committing.rst)
- [17. Development Cycle](devguide\devcycle.rst)
- [18. Continuous Integration](devguide\buildbots.rst)
- [19. Adding to the Stdlib](devguide\stdlibchanges.rst)
- [20. Changing the Python Language](devguide\langchanges.rst)
- [21. Experts Index](devguide\experts.rst)
- [22. gdb Support](devguide\gdb.rst)
- [23. Exploring CPython's Internals](devguide\exploring.rst)
- [24. Changing CPython's Grammar](devguide\grammar.rst)
- [25. Guide to CPython's Parser](devguide\parser.rst)
- [26. Design of CPython's Compiler](devguide\compiler.rst)
- [27. Design of CPython's Garbage Collector](devguide\garbage_collector.rst)
- [28. Updating standard library extension modules](devguide\extensions.rst)
- [29. Changing Python's C API](devguide\c-api.rst)
- [30. Coverity Scan](devguide\coverity.rst)
- [31. Dynamic Analysis with Clang](devguide\clang.rst)
- [32. Running a buildbot worker](devguide\buildworker.rst)
- [33. Core Developer Motivations and Affiliations](devguide\motivations.rst)
- [34. Git Bootcamp and Cheat Sheet](devguide\gitbootcamp.rst)
- [35. Appendix: Topics ](devguide\appendix.rst)
- [The CPython Developer's Guide](devguide\README.rst)

CPython Source Code Layout 源代码目录结构

```sh
# Install and set up Git and other dependencies 
# The latest release for each Python version can be found on the download page.
# https://www.python.org/downloads/
# Clone or fork the CPython repository to get the source code using:
git clone https://github.com/cpython/cpython
cd cpython
# Build Python, on UNIX and Mac OS use:
./configure --with-pydebug && make -j
# and on Windows use:
PCbuild\build.bat -e -d
# Run the tests:
./python -m test -j3
```

For Python modules, the typical layout is:

    Lib/<module>.py
    Modules/_<module>.c (if there’s also a C accelerator module)
    Lib/test/test_<module>.py
    Doc/library/<module>.rst

For extension-only modules, the typical layout is:

    Modules/<module>module.c
    Lib/test/test_<module>.py
    Doc/library/<module>.rst

For builtin types, the typical layout is:

    Objects/<builtin>object.c
    Lib/test/test_<builtin>.py
    Doc/library/stdtypes.rst

For builtin functions, the typical layout is:

    Python/bltinmodule.c
    Lib/test/test_builtin.py
    Doc/library/functions.rst

Some exceptions:

• builtin type int is at ➡ Objects/longobject.c
• builtin type str is at ➡ Objects/unicodeobject.c
• builtin module sys is at ➡ Python/sysmodule.c
• builtin module marshal is at ➡ Python/marshal.c
• Windows-only module winreg is at ➡ PC/winreg.c

CPython Directory structure

➡ `Doc` The official documentation https://docs.python.org/.
➡ `Grammar` Contains the EBNF grammar file for Python.
➡ `Include` Contains all interpreter-wide header files.
➡ `Lib` The part of the standard library implemented in pure Python.
➡ `Mac` Mac-specific code (e.g., using IDLE as an OS X application).
➡ `Misc` Things that do not belong elsewhere. Typically this is varying kinds of developer-specific documentation.
➡ `Modules` The part of the standard library (plus some other code) that is implemented in C.
➡ `Objects` Code for all built-in types.
➡ `PC` Windows-specific code.
➡ `PCbuild` Build files for the version of MSVC currently used for the Windows installers provided on python.org.
➡ `Parser` Code related to the parser. The definition of the AST nodes is also kept here.
➡ `Programs` Source code for C executables, including the main function for the CPython interpreter (in versions prior to Python 3.5, these files are in the Modules directory).
➡ `Python` The code that makes up the core CPython runtime. This includes the compiler, eval loop and various built-in modules.
➡ `Tools` Various tools that are (or have been) used to maintain Python.


Python Misc subdirectory
========================

This directory contains files that wouldn't fit in elsewhere.  Some
documents are only of historic importance.

Files found here
----------------

ACKS                    Acknowledgements
gdbinit                 Handy stuff to put in your .gdbinit file, if you use gdb
HISTORY                 News from previous releases -- oldest last
indent.pro              GNU indent profile approximating my C style
NEWS                    News for this release (for some meaning of "this")
Porting                 Mini-FAQ on porting to new platforms
python-config.in        Python script template for python-config
python.man              UNIX man page for the python interpreter
python.pc.in            Package configuration info template for pkg-config
python-wing*.wpr        Wing IDE project file
README                  The file you're reading now
README.AIX              Information about using Python on AIX
README.coverity         Information about running Coverity's Prevent on Python
README.valgrind         Information for Valgrind users, see valgrind-python.supp
SpecialBuilds.txt       Describes extra symbols you can set for debug builds
svnmap.txt              Map of old SVN revs and branches to hg changeset ids,
                        help history-digging
valgrind-python.supp    Valgrind suppression file, see README.valgrind
vgrindefs               Python configuration for vgrind (a generic pretty printer)


文档标题可以使用 PowerShell 读取：

```sh
$dir = "C:\Python-2.7.18\Doc\reference*.rst"
$dir = "C:\Python-3.10.2\Doc\howto\*.rst"
clear
(dir $dir) | % { 
    $rst = Get-Content "$dir\$($_.Name)"
    foreach ($line in $rst){
        # Title # Subtitle # Subtitle # Index
        if (-not ($line.StartsWith("******") `
            -or $line.StartsWith("------")   `
            -or $line.StartsWith("======")   `
            -or $line.StartsWith("######")   `
            ) ) 
        {
            if ($rst.IndexOf($line) -eq $rst.Count -1)
            {
                echo $_.name
            }
            continue
        }
        $idx = $rst.IndexOf($line)
        $title = $rst[$idx+1].Trim()
        if ($title -eq ""){ $title = $rst[$idx-1] }
        echo ("    |   • -- {0,-26} => $title" -f $_.Name)
        break
    }
}
```

## ==⚡ Python interpreter main program
- PEP 587 – Python Initialization Configuration https://peps.python.org/pep-0587/
- Your Guide to the CPython Source Code by Anthony Shaw https://realpython.com/cpython-source-code-guide

Python 解释器程序的 5 种执行方式：

• `pymain_run_command`: -c 命令行参数指定运行 Python command，如 python -c "print('HI')"
• `pymain_run_module`: -m 命令行参数指定运行 Python module，如 python -m site
• `pymain_run_file`: 直接运行脚本文件，指定要文件名，python main.py
• `pymain_run_stdin`: 使用 shell pipe 运行 stdin 输入的脚本内容，如 echo print('"HI"') | python -i
• `pymain_repl`: 进入 REPL 交互模式运行环境

The REPL acronym is short for Read, Eval, Print and Loop.

• Read: take user input.
• Eval: evaluate the input.
• Print: shows the output to the user.
• Loop: repeat.

Python 解释器程序主模块，位于 Modules\main.c 文件，pymain_run_python 会根据前面初始化的配置来决定如何执行解析器输入的参数，或是否进行交互操作模式。

这个模块里会产生几个 Audit Events

• cpython.run_startup
• cpython.run_command
• cpython.run_module
• cpython.run_file
• cpython.run_interactivehook
• cpython.run_stdin

在前期是一个配置阶段，`PyConfig` 结构体指示了所有配置项，参考相关源代码文档。

    +-- Doc\c-api
    |  ✒ -- init.rst                => Initialization, Finalization, and Threads
    |  ✒ -- init_config.rst         => Python Initialization Configuration

There are two kinds of configuration:

* The `Python Configuration <init-python-config>` can be used to build a
  customized Python which behaves as the regular Python. For example,
  environments variables and command line arguments are used to configure
  Python.

* The `Isolated Configuration <init-isolated-conf>` can be used to embed
  Python into an application. It isolates Python from the system. For example,
  environments variables are ignored, the LC_CTYPE locale is left unchanged and
  no signal handler is registered.

初始化分为两个阶段，以 `PyConfig._init_main=0` 状态下执行 `Py_InitializeFromConfig` 和 `_Py_InitializeMain` 两个方法为界。在前面的 Core 初始化只包含最核心的部分功能，此时还不能使用模块导入功能：

* "Core" initialization phase, "bare minimum Python":

  * Builtin types;
  * Builtin exceptions;
  * Builtin and frozen modules;
  * The `sys` module is only partially initialized (ex: `sys.path` doesn't exist yet).

* "Main" initialization phase, Python is fully initialized:

  * Install and configure `importlib`;
  * Apply the `Path Configuration <init-path-config>`;
  * Install signal handlers;
  * Finish `sys` module initialization (ex: create `sys.stdout` and :data:`sys.path`);
  * Enable optional features like `faulthandler` and `tracemalloc`;
  * Import the `site` module;
  * etc.

Private provisional API:

* `PyConfig._init_main`: if set to 0,
  `Py_InitializeFromConfig` stops at the "Core" initialization phase.
* `PyConfig._isolated_interpreter`: if non-zero,
  disallow threads, subprocesses and fork.

程序入口定义在 Programs\python.c，只有几行代码，以下是整个解析器运行的基本流程：

    +=========+       +========+
    |  wmain  |       |  main  |
    +=========+       +========+            Programs python.c
         |                 |          ===============================
    +====v====+     +======v=======+         Modueles main.c
    | Py_Main |     | Py_BytesMain |
    +=========+     +==============+
         |                 |
         +--------+--------+
                  |
    +=============v=============+
    | pymain_main (pymain_init) | ===> Python-3.10.2\Python\initconfig.c
    +===========================+        ===> _Py_GetEnv
                  |                      ===> _Py_get_env_flag 
            +=====v======+               PyConfig_SetBytesArgv
            | Py_RunMain |               PyConfig_SetArgv
            +============+
                  |
        +=========v=========+
        | pymain_run_python |
        +===================+
                  |                     +=====================+
                  +-----------------+==>| pymain_get_importer |
                  |                 |   +=====================+
                  |                 |   +===========================+
    +=============v============+    +==>| pymain_sys_path_add_path0 |
    | pymain_run_command ...   |    |   +===========================+
    +==========================+    |   +===============================+
    +==========================+    +==>| _PyPathConfig_ComputeSysPath0 |
    | pymain_run_module ...    |    |   +===============================+
    +==========================+    |   +===============+
    +==========================+    +==>| pymain_header |
    | pymain_run_file ...      |    |   +===============+
    +==========================+    |   +========================+
    +==========================+    +==>| pymain_import_readline |
    | pymain_run_stdin ...     |        +========================+
    +==========================+    
    +==========================+    
    | pymain_repl ...          |    
    +==========================+    
                  |
         +=================+
         |  Py_FinalizeEx  |
         +=================+
                  |
          +===============+
          |  pymain_free  |
          +===============+

```c
// Python-3.10.2\Programs\python.c
wmain(int argc, wchar_t **argv) //=> Py_Main
main(int argc, char **argv) //=> Py_BytesMain

// Python-3.10.2\Modules\main.c
int Py_Main(int argc, wchar_t **argv) //=> pymain_main
int Py_BytesMain(int argc, char **argv) //=> pymain_main

static int pymain_main(_PyArgv *args) //=> Py_RunMain
static PyStatus pymain_init(const _PyArgv *args)

int Py_RunMain(void) //=> pymain_run_python

static void pymain_run_python(int *exitcode)
{
    static int pymain_sys_path_add_path0(PyInterpreterState *interp, PyObject *path0)
    static void pymain_header(const PyConfig *config)
    static void pymain_import_readline(const PyConfig *config)

    if (config->run_command) {
        *exitcode = pymain_run_command(config->run_command);
    }
    else if (config->run_module) {
        *exitcode = pymain_run_module(config->run_module, 1);
    }
    else if (main_importer_path != NULL) {
        *exitcode = pymain_run_module(L"__main__", 0);
    }
    else if (config->run_filename != NULL) {
        *exitcode = pymain_run_file(config);
    }
    else {
        *exitcode = pymain_run_stdin(config);
    }
}
```

## ==⚡ Python PyEval_EvalCode

脚本执行可以分为字符串内容，包括脚本文件及命令行内容，以及编译后生成的字节码文件。

以字符串方式为例，这种方式需要语法解析模块生成 AST，执行脚本命令，会调用 `PyRun_SimpleStringFlags` 方法：

- 在此设置顶级模块名称为 __main__ 将字符串转化为抽象的模块文件。
- 创建模块全局字典对象。
- 调用 `PyRun_StringFlags` 方法，通 Python parser 解析脚本，生成抽象语法树。

Python 提供了几个内置函数：

- compile 编译函数，将脚本代码编译成 Code Object 待执行；
- eval 执行单个语句使用，exec 执行多条语句，它们都可以执行 Code Object；

```py
try:
    codeobj = compile(code, "string", "exec")
    exec(codeobj)
except Exception as ex:
    print(f"execute_snippet: {ex=}")
    # print(f"tb: {ex.__traceback__}")
    # raise
```

Python 解释器程序，Top level execution of Python code，位于 Python/pythonrun.c 文件。在命令行使用 -m 参数运行脚本时执行的是 run_eval_code_obj 方法。包括模块和 pyc 文件的运行都会通过它执行，调用关系如下，可以看到 Python 五种执行方式的影子：

    +============================+         +======================+
    | PyRun_InteractiveOne       |         | PyRun_AnyFile        |
    +============================+         | PyRun_AnyFileEx      |
                   |                       | PyRun_AnyFileFlags   |
    +==============v=============+         +======================+
    | PyRun_InteractiveOneFlags  |                    |            
    +============================+         +==========v===========+
                   |                       | PyRun_AnyFileExFlags |
    +==============v=============+         +======================+
    | PyRun_InteractiveOneObject |                    |            
    +============================+      +============v===============+
                   |                    |    _PyRun_AnyFileObject    |
                   |                    +============================+
                   |                            |                 |
                   |   +========================v=====+           |
                   |   | _PyRun_InteractiveLoopObject |           |
                   |   +==============================+           |
                   |         |                                    |
    +==============v=========v=====+                              |
    | PyRun_InteractiveOneObjectEx |                              |
    +==============================+                              |
        |                                                         |
        |   +===================+                                 |
        |   | PyRun_File        |      +====================+     |
        |   | PyRun_FileFlags   |      | PyRun_SimpleFile   |     |
        |   | PyRun_FileEx      |      | PyRun_SimpleFileEx |     |
        |   +===================+      +====================+     |
        |             |                           |               |
        |   +=========v=========+    +============v============+  |
        |   | PyRun_FileExFlags |    | PyRun_SimpleFileExFlags |  |
        |   +===================+    +=========================+  |
        |             |                           |               |
        |      +======v=======+      +============v===============v==+
        +<---- |  pyrun_file  | <=== |    _PyRun_SimpleFileObject    |
        |      +==============+      +===============================+
        |                                 |
        |   +========================+    |
        |   | PyRun_String           |    |
        |   | PyRun_SimpleString     |    |
        |   | PyRun_SimpleStringFlags|    |
        |   +========================+    |
        |                |                |
        |   +============v===========+    |
        |   | PyRun_StringFlags      |    |
        |   +========================+    |
        |               |                 |
        |       +=======v======+   +======v=======+
        +-----> |    run_mod   |   | run_pyc_file |
                +==============+   +==============+
                        |                 |
                        +---+         +---+
                            |         |
                      +=====v=========v=====+
                      |  run_eval_code_obj  |
                      +=====================+
                                 |
                        +========v========+
                        | PyEval_EvalCode |
                        +=================+

```c
// Python-3.10.2\Python\pythonrun.c
int PyRun_SimpleStringFlags(const char *command, PyCompilerFlags *flags)

PyObject *
PyRun_StringFlags(const char *str, int start, PyObject *globals,
                  PyObject *locals, PyCompilerFlags *flags)

static PyObject *
run_mod(mod_ty mod, PyObject *filename, PyObject *globals, PyObject *locals,
            PyCompilerFlags *flags, PyArena *arena)
static PyObject *
run_pyc_file(FILE *fp, PyObject *globals, PyObject *locals,
             PyCompilerFlags *flags)

static PyObject *
run_eval_code_obj(PyThreadState *tstate, PyCodeObject *co, PyObject *globals, PyObject *locals)

// Python-3.10.2\Python\ceval.c
PyObject * PyEval_EvalCode(PyObject *co, PyObject *globals, PyObject *locals)
```

## ==⚡ Zephyr ASDL & PEG
- Python behind the scenes https://tenthousandmeters.com/tag/python-behind-the-scenes/
- PEP 617 – New PEG parser for CPython https://peps.python.org/pep-0617/
- PEP 339 – Design of the CPython Compiler https://peps.python.org/pep-0339/
- Using ASDL to describe ASTs in compilers https://eli.thegreenplace.net/2014/06/04/using-asdl-to-describe-asts-in-compilers
- Parsing C++ in Python with Clang https://eli.thegreenplace.net/2011/07/03/parsing-c-in-python-with-clang
- [SPARK - Scanning, Parsing, and Rewriting Kit](http://pages.cpsc.ucalgary.ca/~aycock/spark/)
- Compiling Little Languages in Python https://pages.cpsc.ucalgary.ca/~aycock/papers/ipc7-compiler.pdf
- The CPython Developer's Guide https://github.com/python/devguide
- Parsing Expression Grammars https://pdos.csail.mit.edu/~baford/packrat/popl04/
- The Architecture of Open Source Applications: LLVM by Chris Lattner https://aosabook.org/en/llvm.html
- Complete C99 parser in pure Python https://github.com/eliben/pycparser
- Python internals https://eli.thegreenplace.net/tag/python-internals

此部分大量参考 CPython 开发者指导文档：

    git clone git@github.com:python/devguide

- [The CPython Developer's Guide](devguide\README.rst)
- [Python Developer's Guide](devguide\index.rst)
- [1. Getting Started](devguide\setup.rst)
- [2. Where to Get Help](devguide\help.rst)
- [3. Lifecycle of a Pull Request](devguide\pullrequest.rst)
- [4. Running & Writing Tests](devguide\runtests.rst)
- [5. Increase Test Coverage](devguide\coverage.rst)
- [6. Helping with Documentation](devguide\docquality.rst)
- [7. Documenting Python](devguide\documenting.rst)
- [8. Silence Warnings From the Test Suite](devguide\silencewarnings.rst)
- [9. Fixing "easy" Issues (and Beyond)](devguide\fixingissues.rst)
- [10. Issue Tracking](devguide\tracker.rst)
- [11. Triaging an Issue](devguide\triaging.rst)
- [12. Following Python's Development](devguide\communication.rst)
- [13. Porting Python to a new platform](devguide\porting.rst)
- [14. How to Become a Core Developer](devguide\coredev.rst)
- [15. Developer Log](devguide\developers.rst)
- [16. Accepting Pull Requests](devguide\committing.rst)
- [17. Development Cycle](devguide\devcycle.rst)
- [18. Continuous Integration](devguide\buildbots.rst)
- [19. Adding to the Stdlib](devguide\stdlibchanges.rst)
- [20. Changing the Python Language](devguide\langchanges.rst)
- [21. Experts Index](devguide\experts.rst)
- [22. gdb Support](devguide\gdb.rst)
- [23. Exploring CPython's Internals](devguide\exploring.rst)
- [24. Changing CPython's Grammar](devguide\grammar.rst)
- [25. Guide to CPython's Parser](devguide\parser.rst)
- [26. Design of CPython's Compiler](devguide\compiler.rst)
- [27. Design of CPython's Garbage Collector](devguide\garbage_collector.rst)
- [28. Updating standard library extension modules](devguide\extensions.rst)
- [29. Changing Python's C API](devguide\c-api.rst)
- [30. Coverity Scan](devguide\coverity.rst)
- [31. Dynamic Analysis with Clang](devguide\clang.rst)
- [32. Running a buildbot worker](devguide\buildworker.rst)
- [33. Core Developer Motivations and Affiliations](devguide\motivations.rst)
- [34. Git Bootcamp and Cheat Sheet](devguide\gitbootcamp.rst)
- [35. Appendix: Topics ](devguide\appendix.rst)


历史原因 Python 2.4 之前使用以下两步流程编译源代码为字节码：

- [Parse the *source code* into a *parse tree*](Parser/pgen.c)
- [Emit *bytecode* based on the *parse tree*](Python/compile.c)

两步走的编译流程看似简单，其实表现并不优秀，并且耦合度太高不利用功能扩展。

从 Python 2.5 才开始较为正式的细化编译流程，这：

- [Parse *source code* into a *parse tree*](Parser/pgen.c)
- [Transform *parse tree* into an *Abstract Syntax Tree*](Python/ast.c)
- [Transform *AST* into a *Control Flow Graph*](Python/compile.c)
- [Emit *bytecode* based on the *Control Flow Graph*](Python/compile.c)

Python 语法分析器生成器（parser generators），有两个，早期是自制的 [pgen](Parser\pgen.c)，用 C 语言开发。还有一个则是用 Python 重写的 [pgen2](lib/lib2to3/pgen2)，生成解析器 [parser.c](Parser\parser.c)

Python 3.10 新的解析器将基于 PEG-based 算法实现，[pegen](Parser\pegen.c)，替代落后的基于 LL(1)-based 算法的解析器。输入语法文件 [PEG grammar for Python](Grammar/python.gram)，编译生成解析器 [parser.c](Parser\parser.c)。

2019 年 3 月更新： Python 3.8 将删除 pgen 的 C 版本，转而使用重写的 pgen2 版本。[bpo-35808: Retire pgen and use pgen2 to generate the parser #11814
](https://github.com/python/cpython/pull/11814)

Guido van Rossum 当前设计 Python 时具有历史局限性，将脚本执行设计为三步：分析代码生成 AST，编译生成字节码，最后执行。

根据 Design of CPython's Compiler 文档说明，Python 2.5 开始，CPython 开始了现代编译器的模式：

- 解析源代码得到分析树 (`Parser/pgen.c`)
- 转化分析树得到抽象语法树 (`Python/ast.c`)
- AST - Abstract Syntax Tree 转化成 CFG - Control Flow Graph
- 基于 CFG 优化生成 bytecode，后面这两步实现在 (`Python/compile.c`)

编译器的实现是自动化研究成果非常多的领域，yacc - Yet Another Compiler Compiler 就是作为生产编译器的一个工具。

编译器前端将源代码转换成某种中间表示，接着优化器执行优化动作，后端将优化后的中间表示转换成目标代码。像 LLVM 编译器工具链就选择了一种不依赖特定源语言，也不依赖特定机器的中间表示，整个系统架构是三段式设计，并具有巨大的灵活性优势：只需要新增一个前端就可以支持一种新的源语言，新增一个后端就可以支持一种新的目标机器。

LLVM 编译器工具链这种设计非常成功，它有 C、Rust、Swift 以及许多其它语言的前端，各种语言都能用到 LLVM 提供的复杂编译功能，其作者 Chris Lattner 对这种设计结构有很好的介绍，The Architecture of Open Source Applications: LLVM。


Python 3.9 版本之后，CPython 支持两个解析器，默认使用新的 PEG 解析器，不再构建解析树，而是直接生成抽象语法树，编译器模型更加简化。可以通过 -X oldparser 选项选择旧版解析器，不过，Python 3.10 版本之后不再支持旧版解析器。

解析表达式语法 PEG - Parsing Expression Grammar，由 Bryan Ford 在 2004 年提出，用于描述一门编程语言，并生成对应的解析器。

大多传统解析器算法只实现单一语言的语法解析，例如 Earley 在 An efficient context-free parsing algorithm 提出的模式识别算法。比如说在 Java 语言混合 SQL 就具有双语言语法，无法被单一语言解析器正确解析，这些解释器只能解析 CFG 的一个子子集。

参考：Direct Left-Recursive Parsing Expression Grammars by Laurence Tratt

https://github.com/erikrose/parsimonious

The Python programming language has its own PEG parser since 3.10, which was derived from its EBNF notation in former versions. Here are some significant characteristics of its PEG parser:

- Python PEG Parser is only used internally. The parser has no public C API.
- The input grammar0 needs to be compiled to file parser.c1 first.
- Python PEG grammar allows left-recursion. So sum = sum '+' term | sum '-' term | term is allowed and won’t end up with stack exhausted.
- Python PEG grammar don’t have CST to AST conversion. The grammar rules are compiled from source code to AST directly given an “action” block followed by the definitions. The action blocks are in essence raw C code that will be copied into parser.c1 in verbatim. For example, if there is an exact keyword match for pass, an AST node for pass will be created.
simple_stmt:
  ... (truncated)
  | 'pass' { _PyAST_Pass(EXTRA) }
  ... (truncated)
Python provides ASDL description to aid the AST generation. ASDL file (Python.asdl2) is parsed to a “meta-AST” by asdl_c.py, then emit C statements into a “Include/internal/pycore_ast.h”3 file and “Python/Python-ast.c”4. The functions in “Python/Python-ast.c”4 happens to be those action code in PEG grammar.
soasme

以下是重要的相关源代码文件：

- [ASDL syntax file](Parser/Python.asdl)
- [使用 SPARK 解析 ASDL 语法文件的 Zephyr ASDL 实现](Parser/asdl.py)
- [根据 ASDL 描述生成 C 代码](Parser/asdl_c.py) 生成文件包括 Python/Python-ast.c 和 Include/Python-ast.h
- [SPARK parser generator](Parser/spark.py)

SPARK 是一种用 Python 编写的强大的、通用的解析器、编译器框架。作者 John Aycock 在其 Compiling Little Languages in Python 文章中将 Compiler model 分为以下四个步骤：

- Scanning => Token List
- Parsing => AST
- Semantic Analysis => AST
- Code Generation

SPARK 解析工具包由于太复杂，Eli Bendersky 作为一名精通编译器的 CPython 开发人员为 Python 3.x 提供了更简易的 ASDL 解释器实现，即 asdl.py 和 asdl_c.py 替代了 spark.py，参考文章 Using ASDL to describe ASTs in compilers。新的解析器更短，不需要 SPARK 依赖项（现在已被删除），有测试并且更易于维护。


Zephyr Abstract Syntax Description Lanuguage (ASDL) 是 20 多年前发布的一个工具，它是 The National Compiler Infrastructure 项目的一个组成部分。这是一个语法描述语言，通过 ASDL 语法定义文件，并通过它的解释器生成编译器中使用的树状数据结构，例如 abstract syntax trees (ASTs)，或者编译器中间表示 Intermediate Representations (IRs)。

- Zephyr - University of Delaware
https://www.eecis.udel.edu/~pollock/471/compiler-slides/Zephyr.ppt

- The Zephyr Abstract Syntax Description Language
https://www.cs.princeton.edu/techreports/1997/554.pdf
https://www.cs.princeton.edu/research/techreps/TR-554-97

Zephyr ASDL 的目标是提供一个抽象语言层，降低不同的计算机语言进行复杂的递归数据结构的交流难度，Recursive data structures，用来描述 AST。作者提供的源代码中实现了一个 asdlGen 工具，在编译器开发中使用它，可以实现以下优势：

• Concise descriptions of important data structures.
• Automatic generation of data structure implementations for C, C++, Java, Standard ML, and Haskell.
• Automatic generation of functions to read and write the data structures to disk in a machine and language independent way.

asdlGen 在生成函数中读写的数据结构，是与语言无关的字节串，称作 pickle。

既然 ASDL 加了抽象作用名字前缀，它当然要比 C/C++/Java 等高级语言要抽象得多了，来个简单的例子提供一点直观感觉：


    ASDL Description     |  An Example exp   |      AST    
                         |                   |          
    exp = :=(var, exp)   |                   |       :=          
    exp =  +(var, exp)   |  :=(x, +(y, 1))   |      /  \  
    exp = var            |                   |     x    +
    exp = int            |                   |         / \
                         |                   |        y   1

ASDL 从实现上讲，是一种领域特定语言，DSL - Domain Specific Language，不具有通用编程语言的完备的功能，但是用来描述数据结构却非常实用。

领域可以指某种商业细分行业，例如银行业、保险业等，也可以指某种应用程序的细分领域，例如 Web 应用、数据库等。与之对应的概念是，通用语言 General-Purpose Language，则可以广泛应用于各种商业或应用问题当中。

DSL 的优点是，它对于领域的特征捕捉得非常好，同时它不像 GPL 那样包罗万有，学习和使用起来相对比较简单。因此，它在专业人员之间、专业人员和开发人员之间都提供了一个沟通的桥梁。

而 DSL 最显著的缺点就在于它只能用于一个特定的领域和目标，果使用到 DSL 相关的工具，即使对工作效率有所提升，但开发或配置这些工具也会增加一定的工作负担。另外，如果要设计一款 DSL，设计者必须具备专业领域知识和语言开发知识，而同时具备这两种知识的人却少之又少。

以下列表引用自参考材料： Clojure for Domain-specific Languages (Ryan D. Kelker)

|               DSL                |   Domain   |
|----------------------------------|------------|
| Structured Query Language (SQL)  | Databases  |
| HyperText Markup Language (HTML) | Websites   |
| Postscript                       | Publishing |


ADSL 语法结构中，有以下这些功能符号，和正则有些相像：

- | 一组选项，表示接受的参数类型和个数各不相同，在紧线两侧指定。
- ? 说明这个参数是可有可无的（0 ~ 1个）；
- * 说明这个参数的数量是 0 或者更多（≥ 0）；
- [a] 可选部分；
- 没有修饰符表示这个参数是必须且只能有一个的。

Python 旧版本解析器使用的是 LL(1) 文法，具体地说，是扩展巴科斯范式（EBNF），提供了部分正则功能。

大多数正式的解析器都使用扩展巴科斯范式（Extended Backus-Naur Form，EBNF）上的变体来描述它们所描述的语言的“语法”。

前人的研究已经确定哪些生成语法可以生成对应的解析器，包括上下文无关文法、LL(k)，LR(k)，及它们的变体 Strong-LL, SLR, LALR 文法等。

解析树是生成抽象语法树前一阶段 Tokenize 时产生的原始二叉树数据。解析树包含源代码所有语法信息，它是代码的直接翻译，也称为具象语法树 CST - Concret Syntax Tree，和后面的 AST 对应。

抽象语法树 AST - Abstract Syntax Tree 实际上是解析树的精简版本，在编译器设计的语境中，AST 和语法树 Syntax Tree 可以互换。它忽略了一些解析树包含的一些语法信息，剥离掉一些不重要的细节，所以它看起并不像解析树那么事无巨细，这也是 AST 名字中抽象一词的由来。


## ==⚡ Symbol Table

参考材料 Python internals: Symbol tables

- https://eli.thegreenplace.net/2010/09/20/python-internals-symbol-tables-part-1
- https://eli.thegreenplace.net/2010/09/20/python-internals-symbol-tables-part-2
- https://realpython.com/cpython-source-code-guide/

源代码提供 API、模块文档参考：

    +-- Doc\reference
    |   • -- index.rst          => The Python Language Reference
    |   • -- datamodel.rst         => Data model
    |   • -- executionmodel.rst    => Execution model

    +-- Doc\library
    |   • - stdtypes.rst        => Built-in Types
    |  ✒ language.rst          => Python Language Services
    |   • - symtable.rst           => `symtable` --- Access to the compiler's symbol tables
    |   • - dis.rst                => `dis` --- Disassembler for Python bytecode
    |  ✒ python.rst            => Python Runtime Services
    |   • - inspect.rst            => `inspect` --- Inspect live objects

    +-- Doc\c-api
    |  ✒ -- concrete.rst       => Concrete Objects Layer
    |   + -- Function Objects
    |   |    • -- cell.rst         => Cell Objects
    |   |    • -- code.rst         => Code Objects
    |   |    • -- function.rst     => Function Objects
    |   |    • -- method.rst       => Instance Method Objects


Symbol Table 是编译器中使用的通用技术，维基百科简洁的定义：

In computer science, a symbol table is a data structure used by a language translator such as a compiler or interpreter, where each identifier in a program's source code is associated with information relating to its declaration or appearance in the source, such as its type, scope level and sometimes its location.

既然是表，那么它就是带有行列的二维数据表格结构，虽然在内存中地址都是线性递增的，但是每一行的数据都可以通膨这指针来引用一个结构体，这就是数据结构抽象。每一行记录的内容包含符号所有具有的语言规范中有效的数据类型，作用域，其出现的位置等信息。

概要地总结 CPython 编译前端工作流程步骤：

- Parse source code into a parse tree
- Transform parse tree into an Abstract Syntax Tree
- Transform AST into a Control Flow Graph
- Emit bytecode based on the Control Flow Graph

在转换 AST 为字节码的过程中，符号表的作用非常大，编译器需要从 AST 节点中生成符号表，这其中包含了作用域信息，生成的字节码就可以根据符号表的作用域信息正确地调用正确符号的数据。

符号表的实现代码文件：

- include/internal/pycore_symtable.h
- Python/symtable.c

通过结构体定义 *PySTEntryObject* 可以快速了解定义符号的数据结构，这也是理解符号对象的根本，符号对象是符号表的中心，比 *symtable* 结构更重要：

PyObject_HEAD 这个宏向符号对象添加 PyObject 基本对象结构，ste 表示 Symbol Table Entry；

```c
typedef struct _symtable_entry {
    PyObject_HEAD

    PyObject *ste_id;        /* int: key in ste_table->st_blocks */
    PyObject *ste_symbols;   /* dict: variable names to flags */
    PyObject *ste_name;      /* string: name of current block */
    PyObject *ste_varnames;  /* list of function parameters */
    PyObject *ste_children;  /* list of child blocks */
    PyObject *ste_directives;/* locations of global and nonlocal statements */
    _Py_block_ty ste_type;   /* module, class or function */

    struct symtable *ste_table;
} PySTEntryObject;
```

Python 程序执行是以 blocks 为单位的，块的类型有 *FunctionBlock*, *ClassBlock*, *ModuleBlock*, *AnnotationBlock*，每个块就对应一个作用域，符号属于什么 block 就属性哪个作用域。

从 AST 生成符号表时，每解析到一个新的代码块时就会调用 *symtable_enter_block* 创建一个块 ID，将关联到符号表及符号对象上，处理完一个块就调用 *symtable_exit_block*。

AST 中记录的每一个块都对应一个 *ste_id* 值，所属的表的其它符号在 *ste_symbols* 字段中，它通过字典记录符号名与符号标记数据。而在 *ste_table* 字段中引用的是符号表结构体，也就是符号表的相关信息，如相关文件名。但它本身不及符号结构重要，是一个链表结构，通过 *st_cur* 和 *st_top* 两个指针来枚举所有符号。

所有符号都共用这套结构，包括函数、变量等等，所以结构体中定义的这些属性会在不同的符号类型中发挥不同的作用，比如函数符号，它就有参数，记录在 *ste_varnames* 字段中。


Python 没有像 C/C++ 一样的变量符号结构，脚本中的变量都与底层实现的 PyObject 结构绑定，并且每种对象类型都对应一个 PyTypeObject 结构。Python 的不同作用域下的变量是通过 Symbol Table 引用的，有全局的也有局部的，对应有 *global*、 *nonlocal* 关键，注意不定将函数参数定义为全局变量：

```py
import dis, __main__

def outer(aa):
    def inner():
        bb = 1
        return aa + bb + cc
    return inner

dis.dis(__main__)
```

这里有个闭包的概念，Closure，它的本质是引用自由变量的函数，这个概念在脚本编程中很常见。这里，inner 函数内部引用了 aa 这个由父级传入的变量，在父级 outer 函数执行完后，aa 的引用就不能被外部访问到，但是 inner 可以访问，这就是自由变量，通过 *is_free* 符号方法判断。

在手册 Execution model 中这样定义自由变量，也就是 lexically bound free variable：

If a variable is used in a code block but not defined there, it is a free variable.


执行编译时，*PyAST_Compile* 方法会调用 *PySymtable_Build* 构建符号表，根据 `pycore_ast.h` 文件定义的 AST (mod_ty) 的类型去构造符号表，这个过程需要进行两遍。

第一遍，主要是 *symtable_visit_stmt* 和 *symtable_visit_expr* 方法，以及其它 symtable_visit 前缀的方法，进行初始的数据收集整理，为代码中的符号创建相应的 PySTEntryObjects 实体结构，并形成上下级的层次绑定关系。

第二遍，主要是调用 *symtable_analyze* 分析方法对已经生成的符号表实体进行分析，由它来确定那些变量是本地的、全局的、还是自由变量。在进行本地符号分析之后，使用一组更新的名称绑定来分析每个子块。如果子块将一个本地变量添加为自由变量，这个本地变量就会标记为 Cell Objects。

CPython 使用 *PyCellObject* 来实现变量的多个作用域引用，即自由变量的实现。因为自由变量可以在其本身定义的作用域外存在，函数对象运行时必需提供存储。在分析方法 *analyze_cells()* 返回到其父函数之前，cell 变量将从自由集合中移除。但是对于当前 block 的自由变量，它可以安全地包含在自由变量集合中，因为变量符号名可以在同一个作用域，既是自由的、又是本地的。

1. analyze_name() 分析符号名的作用域；
2. analyze_cells() 分析 cells 应该归属的集合；
3. analyze_block() 负责分析块中定义的各个名称。
4. analyze_child_block() 准备用于计算嵌套块的临时命名空间字典对象。

在分析过程中，涉及以下集合名称：

1. *symbols*: dict mapping from symbol names to flag values (including offset scope values)
2. *scopes*: dict mapping from symbol names to scope values (no offset)
3. *local*: set of all symbol names local to the current scope
4. *bound*: set of all symbol names local to a containing function scope
5. *free*: set of all symbol names referenced but not bound in child scopes
6. *global*: set of all symbol names explicitly declared as global


为什么需要两遍，而一遍不够？这是一个思考软件开发实践背后的一些哲学和风格问题的好问题。猜测是，虽然这项任务可以在一次过程中完成，但多过程方法允许代码简化，但代价是性能上的影响非常小（如果有的话）。有时，将算法分成多个步骤会使它们更容易掌握，可读性和可维护性是编写良好的代码的重要特征。


使用 symtable 模块可以获取符号表记录的信息：

```py
def describe_symbol(sym):
    assert type(sym) == symtable.Symbol
    print("Symbol:", sym.get_name())

    for prop in [
            'referenced', 'imported', 'parameter',
            'global', 'declared_global', 'local',
            'free', 'assigned', 'namespace']:
        if getattr(sym, 'is_' + prop)():
            print('    is', prop)

with open(__file__, 'r', encoding="utf-8") as source:
    table = symtable.symtable(source.read(), __file__, "exec")
    child = table.get_children()

    outertab = [it for it in child if it.get_name() == "outer"][0]
    child = outertab.get_children()

    innertab = [it for it in child if it.get_name() == "inner"][0]
    for sym in outertab.get_symbols():
        describe_symbol(sym)
    for sym in innertab.get_symbols():
        describe_symbol(sym)
```



## ==⚡ Python Parser & Token AST
- The CPython Developer's Guide https://github.com/python/devguide
- Changing CPython’s Grammar https://devguide.python.org/grammar/
- Guide to CPython’s Parser https://devguide.python.org/parser/
- Design of CPython’s Compiler https://devguide.python.org/compiler/

The CPython Developer's Guide 作为源代码开发者必备参考材料：

    git clone git@github.com:python/devguide

源代码文档参考：

- Python-3.10.2\Doc\whatsnew\3.10.rst
- Python-3.10.2\Doc\library\tokenize.rst --- Tokenizer for Python source

最新版本的 Python 在脚本编译处理上有较多的 API 修改，移除了大量使用 `_mod` 结构体的编译器与解析器方法。

按照通用编译原理，词法扫描和 Tokenized 是脚本处理的第一个主要步骤，在 Python 的词法解释器实现中，只包含 Parser 目录下的十几个代码文件，但结构都比较复杂，涉及现代解析器的设计流程。

➡ Grammar\Tokens 清单文件，内容修改后，配合 `make regen-token` 或者 `build.bat --regen` 自动生成以下代码文件：

- `Include/token.h` Tokens 宏定义头文件；
- `Parser/token.c` Tokens 符号名称列表、以及字符到 Token 的转换方法；
- `Lib/token.py` Token constants
- `Doc/library/token-list.inc` Token 列表参考文档

➡ Grammar\python.gram 语法清单文件，PEG grammar for Python，内容修改后，配合 `make regen-pegen` 或者 `build.bat --regen` 自动生成以下代码文件：

- `Parser/parser.c` 使用构建工具`Tools/peg_generator`自动生成的 PEG 语法解析器实现代码；

➡ `Parser/Python.asdl` 抽象描述语言文件，需要根据语法清单文件更新，并执行 `make  regen-ast` 命令调用 Parser 目录下的 ASDL 解释器，`asdl.py` 及 `asdl_c.py`，转译 ASDL 描述语言为 C 语言代码，生成以下文件：

- `Include/internal/Python-ast.h` 
- `Python/Python-ast.c` 根据 ASDL 规则自动生成的抽象语法树实现代码；
- `Python/ast.c` 定义 PyAST_Validate interface；

➡ Parser\tokenizer.h 定义 Tokenizer state 结构；
➡ Parser\tokenizer.c 定义 tok_get 函数解析 Tokens；

在这些文件中， Tokenizer *tok_get* 函数是最复杂的实现之一，有 700 行代码，包括数十年的算法历史遗产，包括新的语言功能和语法。它像个迭代器，不断从输入代码中提取下一个 Token，内部使用 goto 行标跳转，读起代码来真的会头痛。


一个 Token 就是用于标识，源代码被分解到最细的一个基本结构功能的基本单位。因为它们是根据语法产生的，所以叫 Lexical Tokens，通常会给它们相应的名字。Python 将这些名字记录在 `Parser/token.c` TokenNames 列表中，总共为 63 个 Tokens。此外，Python 的关键字也会自动生成为解释器实现代码中定义的 KeywordToken。有对应字符的 Token 按字符长度分成三组，除了通用的 `OP` 表示 operator，还提供了三个字符到 Token 的转换方法：

- *PyToken_OneChar()* 可转换 23 个基本符号 & ( ) * + , - . / : ; < = > @ [ ] ^ { | } ~ - 
- *PyToken_TwoChars()* 可转换 20 个由两个符号组合的操作符号，如 |= << <= <> // /= %= ** ... 等
- *PyToken_ThreeChars()* 可转换 5 个三字符组合，有 `**= ... //= <<= >>=`

新版本 Python 3.10 移除了 <> 不等价比较运算符号。

没有具体字符对应的 Token 就直接使用名称，例如 "STRING" 这个 Token 名称如其字面含义，对应的是源代码中的字符串。"ENDMARKER" 这个名称对应的是源代码中的结束符号，即文件内容结束。"DOUBLESLASH" 对应的是 // 符号表示整除功能。


使用 tokenize 模块可以查看 Token 分析结果：

    python -m tokenize -e hello.py

模块提供的 tokenize(readline) 方法将源代码内容逐行读取进行分析，返回 TokenInfo 命名元组数据，分别包含 `(srow, scol)`
`(erow, ecol)` 指示 Token 在源代码中的起始行、列，和终结行列位置，以及 Token 类型、名称、及其字符串值，还有 line 中包含整行源代码内容，内容类似如下：

```py
# TokenInfo(type=63 (ENCODING), string='utf-8', start=(0, 0), end=(0, 0), line='')
with open("__main__.py", "rb") as f:
    tokens = tokenize(f.readline)
    for tok in tokens:
        s = tok.string.replace("\r\n","\\n")
        print(f'''{str(tok.start)+str(tok.end):>16} {tok_name[tok.type]:>12}   '{s}' ''')
```

例如，使用 tokenize 模块对以下代码进行分析：

```py
# token demo
item = ["abc", "xyz"]
len(item) == 2 and print("two")
```

就可以得到 Token 列表，可以看到 len 函数调用对应的 Token 名称是 "NAME"，和变量，包括 import 这些关键字也是，缩进对应 "INDENT" 和 "DEDENT"，行末多余空格丢弃不管：

    0,0-0,0:            ENCODING       'utf-8'        
    1,0-1,12:           COMMENT        '# token demo' 
    1,12-1,14:          NL             '\r\n'         
    2,0-2,4:            NAME           'item'         
    2,5-2,6:            OP             '='            
    2,7-2,8:            OP             '['            
    2,8-2,13:           STRING         '"abc"'        
    2,13-2,14:          OP             ','            
    2,15-2,20:          STRING         '"xyz"'        
    2,20-2,21:          OP             ']'            
    2,21-2,23:          NEWLINE        '\r\n'         
    3,0-3,3:            NAME           'len'          
    3,3-3,4:            OP             '('            
    3,4-3,8:            NAME           'item'         
    3,8-3,9:            OP             ')'            
    3,10-3,12:          OP             '=='           
    3,13-3,14:          NUMBER         '2'            
    3,15-3,18:          NAME           'and'          
    3,19-3,24:          NAME           'print'        
    3,24-3,25:          OP             '('            
    3,25-3,30:          STRING         '"two"'        
    3,30-3,31:          OP             ')'            
    3,31-3,33:          NEWLINE        '\r\n'         
    4,0-4,0:            ENDMARKER      ''             

使用抽象语法树模块生成以上代码对应的节点数据如下：

```sh
> python -m ast __main__.py
Module(
   body=[
      Assign(
         targets=[
            Name(id='item', ctx=Store())],
         value=List(
            elts=[
               Constant(value='abc'),
               Constant(value='xyz')],
            ctx=Load())),
      Expr(
         value=BoolOp(
            op=And(),
            values=[
               Compare(
                  left=Call(
                     func=Name(id='len', ctx=Load()),
                     args=[
                        Name(id='item', ctx=Load())],
                     keywords=[]),
                  ops=[
                     Eq()],
                  comparators=[
                     Constant(value=2)]),
               Call(
                  func=Name(id='print', ctx=Load()),
                  args=[
                     Constant(value='two')],
                  keywords=[])]))],
   type_ignores=[])
```

这是打印出来的语法树结构，在内存中，AST 是链表数据结构，每个节点都有其属性。每个节点都会对应一个 Token，例如：

- 赋值操作 = OP 对应 AST 节点名称为 `Assign`，它有 targets、value 两个属性，表示被赋值的对象和一个值。
- 第二行代码的逻辑比较表达式对应的是 `Expr` 节点，它就只有一个布尔值。
- `BoolOP` 节点的 op 属性指定逻辑与操作，value 属性指定的两个节点，一个是比较操作，另一个是函数调用。



```c
// Python-3.10.2\Parser\peg_api.c
mod_ty _PyParser_ASTFromString(const char *str, PyObject* filename, int mode,
                        PyCompilerFlags *flags, PyArena *arena)
    // if (PySys_Audit("compile", "yO", str, filename) < 0) {

mod_ty _PyParser_ASTFromFile(FILE *fp, PyObject *filename_ob, const char *enc,
                      int mode, const char *ps1, const char* ps2,
                      PyCompilerFlags *flags, int *errcode, PyArena *arena)
    // if (PySys_Audit("compile", "OO", Py_None, filename_ob) < 0) {

// Python-3.10.2\Parser\pegen.c
mod_ty _PyPegen_run_parser_from_string(const char *, int, PyObject *, PyCompilerFlags *, PyArena *);
mod_ty _PyPegen_run_parser_from_file_pointer(FILE *, int, PyObject *, const char *,

int _PyPegen_fill_token(Parser *p)

// Python-3.10.2\Parser\tokenizer.c
int PyTokenizer_Get(struct tok_state *tok, const char **p_start, const char **p_end)

/* Get next token, after space stripping etc. */
static int tok_get(struct tok_state *tok, const char **p_start, const char **p_end)

```


## ==⚡ Compile & Bytecode

参考文档：

    +-- Doc\library
    |   • - stdtypes.rst        => Built-in Types
    |  ✒ language.rst          => Python Language Services
    |   • - symtable.rst           => `symtable` --- Access to the compiler's symbol tables
    |   • - dis.rst                => `dis` --- Disassembler for Python bytecode
    |  ✒ python.rst            => Python Runtime Services
    |   • - inspect.rst            => `inspect` --- Inspect live objects

    +-- Doc\c-api
    |  ✒ -- concrete.rst       => Concrete Objects Layer
    |   + -- Function Objects
    |   |    • -- cell.rst         => Cell Objects
    |   |    • -- code.rst         => Code Objects
    |   |    • -- function.rst     => Function Objects
    |   |    • -- method.rst       => Instance Method Objects


Python 3.6 开始使用双字节指令，所以技术上应该叫 wordcode，但是习惯上还是中 bytecode。所有指令都可以在 dis 模块手册中查询，或者 opcode.h 头文件查看相应的字节码值。例如 *LOAD_CONST* 这个指令，字节码为 100，对应 0x64，即字母 d 的值。

可以使用 Code Object Visualizer 工具来查看抽象语法树，这是一个 Web 视图工具：

    pip install instaviz

    import instaviz; 
    instaviz.show(my_function)

Python 提供了一个 compile 全局内置函数，因为是通过 `builtins` 模块提供的方法，C 语言代码定义的符号为 BUILTIN_COMPILE_METHODDEF，具体实现方法为 builtin_compile 和 builtin_compile_impl，`bltinmodule.c` 文件中实现。所有内置模块的方法都在 builtin_methods 中导入，所有内置类型都会一起在 PyBuiltin_Init 方法中初始化，官方手册参考内容 Extending Python with C or C++。

编译函数先调用脚本词法分析工具及 AST 相关函数将代码转化为 AST 结构，调用编译器实现代码将 AST 转换为对应的字节码。它可以调用编译对脚本进行编译，并返回一个 `PyCodeObject`，可以使用 exec 或 eval 函数执行。另外，函数对象的 __code__ 属性返回其相应的 Code Object。

注意，exec 只返回 None，而 eval 只执行一条语句，但可以有返回值。

Python 3.10 版本编译方法有更新，移除了 `PyAST_CompileObject()` 这些方法，只有一个 `PyAST_Compile()`，执行到这个方法，已经准备好进行编译。前面已经完成了 PEG 语法的源代码解析，生成了抽象语法树及模块对象（AST 依附在模块数据结构上），并且有一个编译器状态。

编译过程主要的工作是将 AST，符号表，状态等转化成 CFG - Control Flow Graph，并生成字节码：

 1. Checks for future statements.  See future.c
 2. Builds a symbol table.  See symtable.c.
 3. Generate code for basic blocks.  See compiler_mod() in this file.
 4. Assemble the basic blocks into final code.  See assemble() in this file.
 5. Optimize the byte code (peephole optimizations).

方法调用关系流程：


    +============v===========+        +======v=======+
    |    PyRun_StringFlags   |        |  pyrun_file  |
    +============v===========+        +==============+
                 |                           |
    +============v===========+    +==========v===========+
    | PyParser_ASTFromString |    | PyParser_ASTFromFile |
    +========================+    +======================+
                 |                           |
         +=======v=======+                   | 
         |    run_mod    | <-----------------+ 
         +===============+                     
                 |                             
    +============v===========+                 
    |      PyAST_Compile     |                 
    |    PySymtable_Build    |                 
    +========================+                 
                 |                             
         +=======v========+                    
         |  compiler_mod  |                    
         |    assemble    |                    
         +================+                    
                 |                             
                 |    +=====v=========v=====+      +======v=======+
                 +--> |  run_eval_code_obj  | <--- | run_pyc_file |
                      +=====================+      +==============+
                                 |
                        +========v========+
                        | PyEval_EvalCode |
                        +=================+

在编译的过程中，使用 *compiler* 结构体保存符号表的引用，以及编译器状态，即 *compiler_unit* 结构，另外，还有 `PyArena` 对象，它是内存分配器。

此外，指令结构体是比较重要的数据结构，它包含了字节码、操作数、代码块指针和源代码行号信息：

```c
struct instr {
    unsigned char i_opcode;
    int i_oparg;
    struct basicblock_ *i_target; /* target block (if jump instruction) */
    int i_lineno;
};
```

代码块是 Python 脚本的基本结构，每个 *basicblock* 都是一个链表，一个代码块包含多条指令。包含当前编译单元中下一个代码块的指针 *b_list*，以及下一个控制流的代码块指针 *b_next*。

一个编译单元 *compiler_unit* 由多个代码块组成，可以将它看作是一个大号代码块，它包含代码起止行列位置。它包含的部分信息，最后会记录到 PyCodeObject 对象上，如：

```c
struct compiler_unit {
    ...
    PyObject *u_consts;    /* all constants */
    PyObject *u_names;     /* all names */
    PyObject *u_varnames;  /* local variables */
    PyObject *u_cellvars;  /* cell variables */
    PyObject *u_freevars;  /* free variables */
    ...
}
```


进入 *compiler_mod* 方法后，会使用 VISIT 宏定义调用带前缀 compiler_visit 的各种方法，例如：

- compiler_visit_stmt 准备编译语句；
- compiler_visit_keyword 准备编译关键字；
- compiler_visit_expr 准备编译表达式；

然后，根据代码结构进行具体的代码块类型编译，这些函数返回 0 或 1 表示编译是否通过：

- compiler_boolop 编译布尔运算操作；
- compiler_lambda 编译 lambda 结构；
- compiler_nameop 已命名的操作码编译；

字节码插入则基本是在带有 *compiler_add* 前缀的这些方法中操作。

每个指令对应的操作码都有一个预定义的“堆栈效应”，*stack_effect()* 函数负责管理，此函数返回堆栈中每个操作码的 delta 值，这值跟指令是否进行 jump 操作有关。

    stack_effect(opcode, oparg, jump)

Python 指令分为以下 6 类，Miscellaneous 包含多种功能指令，可以按更细的用途进行细分，参考 dis 模块手册：

|   General    |   Unary operations  |   Binary operations    |   In-place operations   | Coroutine opcodes |
|--------------|---------------------|------------------------|-------------------------|-------------------|
| NOP          | UNARY_POSITIVE      | BINARY_POWER           | INPLACE_POWER           | GET_AWAITABLE     |
| POP_TOP      | UNARY_NEGATIVE      | BINARY_MULTIPLY        | INPLACE_MULTIPLY        | GET_AITER         |
| ROT_TWO      | UNARY_NOT           | BINARY_MATRIX_MULTIPLY | INPLACE_MATRIX_MULTIPLY | GET_ANEXT         |
| ROT_THREE    | UNARY_INVERT        | BINARY_FLOOR_DIVIDE    | INPLACE_FLOOR_DIVIDE    | END_ASYNC_FOR     |
| ROT_FOUR     | GET_ITER            | BINARY_TRUE_DIVIDE     | INPLACE_TRUE_DIVIDE     | BEFORE_ASYNC_WITH |
| ROT_N(count) | GET_YIELD_FROM_ITER | BINARY_MODULO          | INPLACE_MODULO          | SETUP_ASYNC_WITH  |
| DUP_TOP      |                     | BINARY_ADD             | INPLACE_ADD             |                   |
| DUP_TOP_TWO  |                     | BINARY_SUBTRACT        | INPLACE_SUBTRACT        |                   |
|              |                     | BINARY_SUBSCR          | INPLACE_LSHIFT          |                   |
|              |                     | BINARY_LSHIFT          | INPLACE_RSHIFT          |                   |
|              |                     | BINARY_RSHIFT          | INPLACE_AND             |                   |
|              |                     | BINARY_AND             | INPLACE_XOR             |                   |
|              |                     | BINARY_XOR             | INPLACE_OR              |                   |
|              |                     | BINARY_OR              | STORE_SUBSCR            |                   |
|              |                     |                        | DELETE_SUBSCR           |                   |
|--------------|---------------------|------------------------|-------------------------|-------------------|

Miscellaneous opcodes

|    LOAD/STORE/DELETE    |          Data Type          |              Jump              |
|-------------------------|-----------------------------|--------------------------------|
| LOAD_CLASSDEREF (i)     | SET_ADD (i)                 | JUMP_FORWARD (delta)           |
| LOAD_CLOSURE (i)        | LIST_APPEND (i)             | POP_JUMP_IF_TRUE (target)      |
| LOAD_CONST (consti)     | MAP_ADD (i)                 | POP_JUMP_IF_FALSE (target)     |
| LOAD_ATTR (namei)       | BUILD_SLICE (argc)          | JUMP_IF_NOT_EXC_MATCH (target) |
| STORE_ATTR (namei)      | BUILD_TUPLE (count)         | JUMP_IF_TRUE_OR_POP (target)   |
| DELETE_ATTR (namei)     | BUILD_LIST (count)          | JUMP_IF_FALSE_OR_POP (target)  |
| LOAD_NAME (namei)       | BUILD_SET (count)           | JUMP_ABSOLUTE (target)         |
| STORE_NAME (namei)      | BUILD_MAP (count)           |                                |
| DELETE_NAME (namei)     | BUILD_CONST_KEY_MAP (count) |                                |
| LOAD_GLOBAL (namei)     | BUILD_STRING (count)        |                                |
| STORE_GLOBAL (namei)    | LIST_TO_TUPLE               |                                |
| DELETE_GLOBAL (namei)   | LIST_EXTEND (i)             |                                |
| LOAD_FAST (var_num)     | SET_UPDATE (i)              |                                |
| STORE_FAST (var_num)    | DICT_UPDATE (i)             |                                |
| DELETE_FAST (var_num)   | DICT_MERGE                  |                                |
| LOAD_DEREF (i)          | GET_LEN                     |                                |
| STORE_DEREF (i)         | COPY_DICT_WITHOUT_KEYS      |                                |
| DELETE_DEREF (i)        |                             |                                |
|-------------------------|-----------------------------|--------------------------------|
| Misc                    | Generator/Coroutine/Try     | Function/Method                |
|-------------------------|-----------------------------|--------------------------------|
| PRINT_EXPR              | POP_BLOCK                   | LOAD_BUILD_CLASS               |
| RETURN_VALUE            | POP_EXCEPT                  | CALL_FUNCTION (argc)           |
| SETUP_ANNOTATIONS       | RERAISE                     | CALL_FUNCTION_KW (argc)        |
| IMPORT_STAR             | WITH_EXCEPT_START           | CALL_FUNCTION_EX (flags)       |
| FORMAT_VALUE (flags)    | LOAD_ASSERTION_ERROR        | LOAD_METHOD (namei)            |
| SETUP_WITH (delta)      | RAISE_VARARGS (argc)        | CALL_METHOD (argc)             |
| HAVE_ARGUMENT           | SETUP_FINALLY (delta)       | MAKE_FUNCTION (flags)          |
| EXTENDED_ARG (ext)      | YIELD_VALUE                 | MATCH_CLASS (count)            |
| MATCH_MAPPING           | YIELD_FROM                  |                                |
| MATCH_SEQUENCE          | FOR_ITER (delta)            |                                |
| MATCH_KEYS              | GEN_START (kind)            |                                |
| UNPACK_SEQUENCE (count) |                             |                                |
| UNPACK_EX (counts)      |                             |                                |
| COMPARE_OP (opname)     |                             |                                |
| CONTAINS_OP (invert)    |                             |                                |
| IS_OP (invert)          |                             |                                |
| IMPORT_NAME (namei)     |                             |                                |
| IMPORT_FROM (namei)     |                             |                                |


编译过程中，会使用到大量前端 PEG 及 ASDL 解析器生成的数据结构，它们都是 AST 节点的基本数据结构，例如：

```c
// include/internal/pycore_ast.h
typedef struct _mod *mod_ty;
typedef struct _stmt *stmt_ty;
typedef struct _expr *expr_ty;
typedef enum _boolop { And=1, Or=2 } boolop_ty;
typedef enum _expr_context { Load=1, Store=2, Del=3 } expr_context_ty;
typedef struct _keyword *keyword_ty;
```

几乎每种结构都会有一个 kind 字段指示这是什么类的结构，比如表达式有 *expr_kind* 指定的 27 种类型，语句有 *stmt_kind* 指定的 26 种类型。模块类型则对应编译代码的来源，*mod_kind* 指示有 4 种，标准模块、交互模块、表达式模块、函数类型，Module、Interactive、Expression、FunctionType。

在使用这些 AST 节点结构时，需要先判断类型，再从结构体中读取数据。

以条件表达式结构编译为例，*compiler_if* 可能需要 2 个代码块，至少需要一个 body-block，每个代码块都可以被嵌套处理：

```py
if test:
    # body-block 
else:  # optional if orelse is null
    # next-block
# end-block or next-block if orelse is null
```

条件测试部分会调用 *compiler_jump_if* 按条件表达式的类型进一步处理，

```c
// Python-3.10.2/Python/compile.c
static int
compiler_if(struct compiler *c, stmt_ty s)
{
    ...
    if (!compiler_jump_if(c, s->v.If.test, next, 0)) {
        return 0;
    }
    ...
}

static int
compiler_jump_if(struct compiler *c, expr_ty e, basicblock *next, int cond)
```

最后调用 *assemble()*、 *makecode()* 方法将字节码组装成 Code Object。


## ==⚡ Code Objects & Frame Object
- The Python Language Reference  3. Data model - 3.2. The standard type hierarchy - Internal types
- PEP 684 – A Per-Interpreter GIL https://peps.python.org/pep-0684/

GIL 保护 CPython Runtime State 在并发访问进的安全，所有应该受 GIL 保护的全局状态数据都应该放到 PyInterpreterState 结构中。

Python 1.5 (1997) 开始，CPython 用户可以在同一个进程中运行多个解释器。但是，同一进程中的解释器总是共享大量的全局状态，这是并发程序出错源头，因此为了提供足够的隔离促进真正的多核并行，解释器不再共享 GIL。

CPython 源代码一直在努力大幅减少 C 全局变量的内部使用，并将运行时状态整合到 `_PyRuntimeState` 和 `PyInterpreterState` 对象上。

- 全局的 `_PyRuntime` 运行时状态对象会在 `PyInterpreterState` 的 runtime 字段引用；
- `PyThreadState` 通过 `interp` 字段引用解释器状态对象。
- `PyThreadState` 通过 `frame` 字段引用当前运行的 Stack Frame 对象。
- `PyFrameObject` 通过 `f_code` 字段引用字节码对象。

在运行时，PyFrameObject，PyCodeObject 对象结构关系图如下：


        +=================================+
    +-->|_PyRuntimeState (pyruntimestate) |
    |   +=================================+
    |   | ...                             | 
    |   | struct pyinterpreters {...}     |
    |   |                   interpreters  |
    |   | unsigned long      main_thread  |
    |   | ...                             | 
    |   | struct _ceval_runtime_state     | /* ceval state */
    |   |                          ceval  |
    |   | struct _gilstate_runtime_state  | /* GIL state */
    |   |                       gilstate  |
    |   | ...                             |
    |
    |
    |   +=============================+          +=============================+
    |   |   PyInterpreterState (_is)  |<---+     |  PyThreadState (_ts)        |
    |   +=============================+    |     +=============================+
    |   | struct _is     *next        |    |     | struct _ts         *prev    |
    |   | struct _ts     *tstate_head |    |     | struct _ts         *next    |
    |   | struct pyruntimestate       |    +<----| PyInterpreterState *interp  |
    +<--|                *runtime     |          |                             |
        | ...                         |        +-| PyFrameObject      *frame   |
                                               | | int        recursion_depth  |
                                               | | ...                         |
        +==============================+       |
        |  PyFrameObject (_frame)      |<------+ Current Frame
        +==============================+        
        |  PyObject_VAR_HEAD           |        
        | ^^^^^^^^^^^^^^^^^^^^^^^^^^^  |        
        |  PyObject          ob_base   |        
        |  Py_ssize_t        ob_size   |        
        +==============================+     +==========================+     +==========+
        | struct _frame      *f_back   |---->| Previous frame, or NULL  |---->| ...      |
    +<--| PyCodeObject       *f_code   |     +==========================+     +==========+
    |   | ...                          |
    |   | char         f_trace_lines   | /* Emit per-line trace events? */
    |   | char         f_trace_opcodes | /* Emit per-opcode trace events? */
    |   +==============================+
    |   | int          f_lasti         | /* Last instruction if called */
    |   | int          f_lineno        | /* Current line number. Only valid if non-zero */
    |   | int          f_iblock        | /* index in f_blockstack */
    |   | PyFrameState f_state         | /* What state the frame is in */
    |   | PyTryBlock                   | 
    |   |   f_blockstack[CO_MAXBLOCKS] | /* for try and loop blocks */
    |   | PyObject    *f_localsplus[1] | /* locals+stack, dynamically sized */
    |   +==============================+
    |   
    |   
    |   +==============================+
    +-->|  PyCodeObject                |
        +==============================+
        |  PyObject_HEAD               |
        | ^^^^^^^^^^^^^^^^^^^^^^^^^^^  |
        |  PyObject          ob_base   |
        +==============================+
        | ...                          |
        | PyObject          *co_code   | /* instruction opcodes */
        | ...                          |


字节码对应的指令可以使用 dis - Disassembler 字节码反汇编模块获取，完整指令的功能可以参考 dis 模块手册参考。

```py
import dis
code = "a = 1; b = 2; a+b"
co = compile(code, "string","exec")
dis.dis(code)
# dis.dis(co.co_code)
print({"consts": co.co_consts, "vars":co.co_names, "code":co.co_code})
print((compile.__module__))

#   1           0 LOAD_CONST      0 (1)     # read const: 1
#               3 STORE_NAME      0 (a)     # init a = const: 1
#               6 LOAD_CONST      1 (2)     # read const: 2
#               9 STORE_NAME      1 (b)     # init a = const: 2
#              12 LOAD_NAME       0 (a)     # load a
#              15 LOAD_NAME       1 (b)     # load b
#              18 BINARY_ADD                # calc a + b
#              19 POP_TOP                   # throw it away
#              20 LOAD_CONST      2 (None)  # load const: None
#              23 RETURN_VALUE              # return None for exec
# {'vars': ('a', 'b'), 'consts': (1, 2, None),
# 'code': b'd\x00\x00Z\x00\x00d\x01\x00Z\x01\x00e\x00\x00e\x01\x00\x17\x01d\x02\x00S'}
```

PyFrameObject 对象属性：

↪ `f_code`         # Code，字节码对象 Code Object: Bytecode object struct PyCodeObject
    ↪ `co_filename`# str， 当前文件名，可以通过 __file__ 获得
    ↪ `co_name`    # str， 当前函数名，如果是顶层代码，则返回 <module>
    ↪ `co_code`    # bytes，字节码内容。
    ↪ `co_consts`  # tuple，包含字节码需要引用的字面量数据。
    ↪ `co_names`   # tuple，包含字节码需要引用的本地变量符号。
    ↪ `co_lnotab`  # bytes，经过编码的源代码行号-内存地址映射数据，Python 3.10 之前的版本使用。
    ↪ `co_linetable`  # bytes，经过编码的源代码行号-内存地址映射数据，Python 3.10+ 版本使用。
    ↪ `co_nlocals` # int 本地变量的符号数量，包括函数参数。
↪ `f_lineno`       #当前代码行号
↪ `f_builtins`     #内建命名空间符号表
↪ `f_globals`      #全局空间符号表
↪ `f_locals`       #本地空间符号表，可以指函数作用域，也可以批代码块作用域，如 for 循环等。

Code Objects 有几个属性，除了代码对象定义所在对象的名字外，还包含了参数列表、本地变量的名字：

+-------------------+------------------------------------------------------+
| co_name           | name with which this code object was defined         |
+-------------------+------------------------------------------------------+
| co_names          | tuple of names of local variables                    |
+-------------------+------------------------------------------------------+
| co_nlocals        | number of local variables                            |
+-------------------+------------------------------------------------------+
| co_stacksize      | virtual machine stack space required                 |
+-------------------+------------------------------------------------------+
| co_varnames       | tuple of names of arguments and local variables      |
+-------------------+------------------------------------------------------+

*STORE_NAME* 指令可以将程序栈顶的值设置到 co_names 相应序号的变量中。

*LOAD_NAME* 指令则将相应的变量加载到栈顶中。*LOAD_GLOBAL* 也干一样的事，这点会让人困扰。


除了基本的变量，还一个很重要的变量概念：自由变量 free variable，这是闭包的根本，引用自由变量的函数就是闭包。当一个自由变量被多个作用域引用时，Python 将它定义为 cell 变量。使用 *LOAD_CLOSURE* 指令时会从 co_cellvars 或 co_freevars 列表中读取变量值到栈顶。

此外还有常量，存储在 co_consts 列表中，*LOAD_CONST* 就从这里加载常量到栈顶位置。

+-------------------+------------------------------------------------------+
| co_cellvars       | tuple of names of cell variables                     |
+-------------------+------------------------------------------------------+
| co_consts         | tuple of constants used in the bytecode              |
+-------------------+------------------------------------------------------+
| co_freevars       | tuple of names of free variables                     |
+-------------------+------------------------------------------------------+


以下代码可以观察引用自由变量的闭包，inner 引用了 aa 这个自由变量，它就是一个闭包。还可以看到在内部函数中的 cc 这个符号会被当作全局符号看待，因为没有本地变量定义：

```py
import dis, __main__

def outer(aa):
    def inner():
        bb = 1
        return aa + bb + cc
    return inner

dis.dis(__main__)
```

分部字节反编译对应指令如下：

    Disassembly of outer:
      4           0 LOAD_CLOSURE             0 (aa)
                  2 BUILD_TUPLE              1
                  4 LOAD_CONST               1 (<code object inner at 0x191F7C91580>)
                  6 LOAD_CONST               2 ('outer.<locals>.inner')
                  8 MAKE_FUNCTION            8 (closure)
                 10 STORE_FAST               1 (inner)

      7          12 LOAD_FAST                1 (inner)
                 14 RETURN_VALUE

    Disassembly of <code object inner at 0x191F7C91580>:
      5           0 LOAD_CONST               1 (1)
                  2 STORE_FAST               0 (bb)

      6           4 LOAD_DEREF               0 (aa)
                  6 LOAD_FAST                0 (bb)
                  8 BINARY_ADD
                 10 LOAD_GLOBAL              0 (cc)
                 12 BINARY_ADD
                 14 RETURN_VALUE

反汇编 code object 输出的数据每列含义如下，上面：

   #. the line number, for the first instruction of each line
   #. the current instruction, indicated as ``-->``,
   #. a labelled instruction, indicated with ``>>``,
   #. the address of the instruction,
   #. the operation code name,
   #. operation parameters, and
   #. interpretation of the parameters in parentheses.

根据代码的加法运算，加载下一个符号数据到栈顶上之前都会执行 BINARY_ADD 栈顶部两个数相加，其它字节指令参考如下：

```py
# Implements TOS = TOS1 + TOS.
# the top of the stack (TOS)
# the second top-most stack item (TOS1)
BINARY_ADD

# Returns with TOS to the caller of the function.
RETURN_VALUE

# Loads the global named ``co_names[namei]`` onto the stack.
LOAD_GLOBAL (namei)

# Pushes a reference to the local ``co_varnames[var_num]`` onto the stack.
LOAD_FAST (var_num)

# Pushes the value associated with ``co_names[namei]`` onto the stack.
LOAD_NAME (namei)

# Stores TOS into the local ``co_varnames[var_num]``.
STORE_FAST (var_num)

# Deletes local ``co_varnames[var_num]``.
DELETE_FAST (var_num)

# Implements ``name = TOS``. *namei* is the index of co_names’ item.
STORE_NAME (namei)

# Works as :opcode:`STORE_NAME`, but stores the name as a global.
STORE_GLOBAL (namei)

# Works as :opcode:`DELETE_NAME`, but deletes a global name.
DELETE_GLOBAL (namei)

# Pushes ``co_consts[consti]`` onto the stack.
LOAD_CONST (consti)
```

MAKE_FUNCTION (flags) 这个指令复杂点，根据标志位不同接收不同的参数格式，并将新创建的函数推到栈顶：

   * ``0x01`` a tuple of default values for positional-only and
     positional-or-keyword parameters in positional order
   * ``0x02`` a dictionary of keyword-only parameters' default values
   * ``0x04`` a tuple of strings containing parameters' annotations
   * ``0x08`` a tuple containing cells for free variables, making a closure
   * the code associated with the function (at TOS1)
   * the :term:`qualified name` of the function (at TOS)

   .. versionchanged:: 3.10
      Flag value ``0x04`` is a tuple of strings instead of dictionary


```py
import sys # <---- this line no 40

def print_frames():
    frames   = sys._current_frames()
    current  = sys._getframe(0)
    previous = sys._getframe(1)
    for fo in frames:   # <---- this line no 46
        if frames[fo] is current:
            print(f"Current frames key {fo}")

    # frames['0'] = current
    # frames['1'] = sys._getframe(1) # previous frame
    # Top Level Code has only one frame!
    # ValueError: call stack is not deep enough

    for k in frames:
        fo = frames[k]
        co = fo.f_code
        print(f"""
    #=======================================+
    # Frame {k} -> {type(fo)}
    #=======================================+
    f_back     = type: {type(fo.f_back)} {      fo.f_back}
    f_lasti    = type: {type(fo.f_lasti)} {     fo.f_lasti}
    f_lineno   = type: {type(fo.f_lineno)} {    fo.f_lineno}
    f_trace    = type: {type(fo.f_trace)} {     fo.f_trace}
    f_builtins = type: {type(fo.f_builtins)} {  len(fo.f_builtins)} members
    f_globals  = type: {type(fo.f_globals)} {   len(fo.f_globals)} members
    f_locals   = type: {type(fo.f_locals)} {    len(fo.f_locals)} members
        {fo.f_locals}
    f_trace_lines   = type: {type(fo.f_trace_lines)} {  fo.f_trace_lines}
    f_trace_opcodes = type: {type(fo.f_trace_opcodes)} {fo.f_trace_opcodes}
    f_code          = type: {type(co)}
        co_argcount: {type(co.co_argcount)} {        co.co_argcount}
        co_cellvars: {type(co.co_cellvars)} {        co.co_cellvars}
            co_code: {type(co.co_code)} {            co.co_code}
          co_consts: {type(co.co_consts)} {          co.co_consts}
        co_filename: {type(co.co_filename)} {        co.co_filename}
     co_firstlineno: {type(co.co_firstlineno)} {     co.co_firstlineno}
           co_flags: {type(co.co_flags)} {           co.co_flags}
        co_freevars: {type(co.co_freevars)} {        co.co_freevars}
  co_kwonlyargcount: {type(co.co_kwonlyargcount)} {  co.co_kwonlyargcount}
           co_lines: {type(co.co_lines)} {           co.co_lines}
       co_linetable: {type(co.co_linetable)} {       co.co_linetable}
          co_lnotab: {type(co.co_lnotab)} {          co.co_lnotab}
            co_name: {type(co.co_name)} {            co.co_name}
           co_names: {type(co.co_names)} {           co.co_names}
         co_nlocals: {type(co.co_nlocals)} {         co.co_nlocals}
 co_posonlyargcount: {type(co.co_posonlyargcount)} { co.co_posonlyargcount}
       co_stacksize: {type(co.co_stacksize)} {       co.co_stacksize}
        co_varnames: {type(co.co_varnames)} {        co.co_varnames}
        """)

if __name__ == "__main__":
    print_frames()
```


PyFrameObject `_frame` 对象的属性（只读）及 PyCodeObject 对象的属性（只读）参考官方文档，只是还没更新到 `co_linetable` 相关的内容，直接查询源代码资料，还得到了一个行号编码压缩算法说明：

> string (encoding addr<->lineno mapping)
> See Objects/lnotab_notes.txt for details.

Description of the internal format of the line number table

Conceptually, the line number table consists of a sequence of triples:

> start-offset (inclusive), end-offset (exclusive), line-number.

Note that not all byte codes have a line number so we need handle `None` for the line-number.

However, storing the above sequence directly would be very inefficient as we would need 12 bytes per entry.

First, note that the end of one entry is the same as the start of the next, so we can overlap entries.
Second, we don't really need arbitrary access to the sequence, so we can store deltas.

We just need to store (end - start, line delta) pairs. The start offset of the first entry is always zero.

Third, most deltas are small, so we can use a single byte for each value, as long we allow several entries for the same line.

    Consider the following table
         Start    End     Line
          0       6       1
          6       50      2
          50      350     7
          350     360     No line number
          360     376     8
          376     380     208

Stripping the redundant ends gives:

       End-Start  Line-delta
          6         +1
          44        +1
          300       +5
          10        No line number
          16        +1
          4         +200

Note that the end - start value is always positive.

Finally, in order to fit into a single byte we need to convert start deltas to the range 0 <= delta <= 254,
and line deltas to the range -127  <= delta <= 127.
A line delta of -128 is used to indicate no line number.
Also note that a delta of zero indicates that there are no bytecodes in the given range,
which means we can use an invalid line number for that range.

Final form:

       Start delta   Line delta
        6               +1
        44              +1
        254             +5
        46              0
        10              -128 (No line number, treated as a delta of zero)
        16              +1
        0               +127 (line 135, but the range is empty as no bytecodes are at line 135)
        4               +73

## ==⚡ CPython VM & Bytecode
- https://tenthousandmeters.com/blog/python-behind-the-scenes-4-how-python-bytecode-is-executed/
- Computer Science - 10.7. The Stack Frame http://www.cs.uwm.edu/classes/cs315/Bacon/Lecture/HTML/ch10s07.html

官方文档参考资料如下，源代码参考 PyTypeObject PyCode_Type 及 PyCodeObject：

    +-- Doc\c-api
    |  ✒ -- concrete.rst            => Concrete Objects Layer
    |   + -- Function Objects
    |   |    • -- cell.rst              => Cell Objects
    |   |    • -- code.rst              => Code Objects
    |   |    • -- function.rst          => Function Objects
    |   |    • -- method.rst            => Instance Method Objects
    +-- Doc\reference
    |   • -- datamodel.rst              => Data model
    |   • -- executionmodel.rst         => Execution model
    +-- Doc\library
    |  ✒ debug.rst             => Debugging and Profiling
    |   • - audit_events.rst         => Audit events table
    |   • - bdb.rst                  => `bdb` --- Debugger framework
    |   • - faulthandler.rst         => `faulthandler` --- Dump the Python traceback
    |   • - pdb.rst                  => `pdb` --- The Python Debugger
    |   • - profile.rst              => The Python Profilers
    |   • - timeit.rst               => `timeit` --- Measure execution time of small code snippets
    |   • - trace.rst                => `trace` --- Trace or track Python statement execution
    |   • - tracemalloc.rst          => `tracemalloc` --- Trace memory allocations
    |  ✒ python.rst            => Python Runtime Services
    |   • - sys.rst                  => `sys` --- System-specific parameters and functions
    |   • - traceback.rst            => `traceback` --- Print or retrieve a stack traceback


编译得到字节码后，下一步就是通过 CPython 虚拟机来解析并运行它。

无论是 run_pyc_file 还 run_mod 执行方式，都是将 PyCodeObject 对象所协整的字节码传递给 CPython 虚拟机进行解析运行。

字节码基于 Stack Frame 方式运行，栈内存将每个函数调用抽象为一个 Frame，可以理解为内存中的一段空间，专用于当前函数上下文，及本地变量得管理之用。在基于硬件指令的系统中，C 语言开发的程序就是，使用 pop push 等指令可以很方便地管理、使用栈内存。Python 则使用 *PyFrameObject* 对象管理 Stack Frame 方式运行的字节码。

像 CALL_FUNCTION, CALL_METHOD 这些指令调用其它函数、方法，会加载另外的编译好的 PyFrameObject 对象到 Stack Frame，新的帧对象加载后，其 f_back 属性将设置为最后一个帧的引用，以供后续控制流返回继承执行。


                      +=====v=========v=====+
                      |  run_eval_code_obj  |
                      +=====================+
                                 |
                        +========v========+
                        | PyEval_EvalCode | (init builtins)
                        +=================+
                                 |
                        +========v========+
                        |  _PyEval_Vector |
                        +=================+
                                 |
                    +============v=============+
                    | _PyEval_MakeFrameVector  |
                    +==========================+
                                 |
                    +============v=============+
                    | _PyEval_EvalFrameDefault |
                    +==========================+

在 *PyEval_EvalCode* 方法内部，加载内置模块，使用 PyFrameConstructor 结构封装一个顶级的 Stack Frame，但它和 PyFrameObject 类型有所差别，会在下一步经过 *_PyEval_MakeFrameVector* 转换，这个方法需要为首次执行做以下准备工作：

- 参数处理：Positional/Keyword arguments，即将参数打包到函数中的 `*args **kwargs` 参数；
- 参数添加到本地作用域的变量集合中；
- 为 Cell 变量分配空间，并将自由变量拷贝到 Stack Frame 对象中；
- 将所有闭包名称添加到 PyCodeObject 的自由变量列表中；

阅读 C 语言代码时，宏定义可能会影响阅读的流畅度，但宏的使用可以实现软件工程的 DRY - Don't Repeat Yourself 法则，可以使用 GCC 编译器的 -E 参数来扩展理宏生成实现的代码：

    gcc -Iinclude -Iinclude/internal -IPC -DPy_BUILD_CORE -E Python/ceval.c


Python 3.10 移除了 `_PyEval_EvalCodeWithName`，*_PyEval_Vector* 取而代之，它根据 Code Object 标志设置需要调用 *make_coro()* 来创建协程，简化了从 C 语言调用 Python 解释器。协程是基于生成器实现线程内调度的，参考 *PyGenObject*、*PyAsyncGenObject* 和 *PyCoroObject*。

负责管理字节码执行的是 PyThreadState 对象，它代表了虚拟线程，内部的 eval_frame 字段引用的是真正执行指令的方法 *_PyEval_EvalFrameDefault()*，在这里字节码解码为相应要执行的指令，也就是调用指令所预定的功能。

在此函数将近 3000 行代码中，主要是 switch 分支结构，精髓可以通过以下简化版本来理解：

```c
PyObject* _Py_HOT_FUNCTION
_PyEval_EvalFrameDefault(PyThreadState *tstate, PyFrameObject *f, int throwflag)
{
    // ... declarations and initialization of local variables
    // ... macros definitions
    // ... call depth handling
    // ... code for tracing and profiling

    for (;;) {
        // ... check if the bytecode execution must be suspended,
        // e.g. other thread requested the GIL

        // NEXTOPARG() macro
        _Py_CODEUNIT word = *next_instr; // type is uint16_t
        opcode = _Py_OPCODE(word);
        oparg = _Py_OPARG(word);
        next_instr++;

        switch (opcode) 
        {
            case TARGET(NOP) : {
                FAST_DISPATCH(); // more on this later
            }

            case TARGET(LOAD_FAST): {
                // ... code for loading local variable
            }

            // ... 127 more cases for every possible opcode
        }

        // ... error handling
    }

    // ... termination
}
```

解释器使用 PyInterpreterState 结构体表示，每个解释器可以运行多个线程，在线程对象的 *interp* 字段引用解释器实例。

解释器的 *runtime* 字段引用了一个全局的 *_PyRuntimeState* 对象，表示 Python 运行时全局状态。

在 GCC 支持 Labels-as-Values，行标作为指针这种 C 扩展功能前提下，操作码分支结构可以使用 *USE_COMPUTED_GOTOS* 优化，启用优化后 *TARGET* 和 *DISPATCH* 宏会启用 opcode_targets.h 定义的字节码与目标操作的跳转表。这种代码编写方式目的不是为了代码紧凑，而是希望激活 CPU 使用其分支预测机制来预测下一个操作码，加速字节码的执行。跳转表的目的是让 CPU 缓存起来，作为 BTB - Branch target buffer 以实现更好的分支预测效果。

这种优化也叫线索代码 Threaded-code，通过把一系列调用指令转换成一完整的地址表，然后使用恰当的方式调用。最初用来减少代码的占用空间，提高代码密度的一种技术，实现 DRY - Don't repeat yourself。此技术目前不仅用于压缩代码，很多 VM 解释器用它来加快指令的执行速度。据 The Structure and Performance of Efficient Interpreters 实验显示，通过 Direct threaded code 方式可以获得相对于 switch-based dispatch 方式 2 倍速度的优化。

操作码还会经常配对出现，如 *COMPARE_OP* 常常跟着 *POP_JUMP_IF_FALSE* 或 *POP_JUMP_IF_TRUE* 操作，这可以利用 CPU 的预测特性。验证预测需要对寄存器变量与常数进行一次高速测试，操作码配对良好时，CPU 内部分支预测成功的可能性很高，从而导致到下一个操作码的转换开销几乎为零。一个成功的预测将在 eval-loop（包括其不可预测的 switch 分支）节省一次行程时间。与处理器的内部分支预测相结合，成功的预测可以使两个操作码一起运行，就像是一个新的操作码。

执行任意给定的指令后，Python VM 会有三种情况或行为：

➡ 从求值函数返回，发生在 VM 执行 RETURN_VALUE, YIELD_VALUE 和 YIELD_FROM 指令时。
➡ 处理错误并继续执行，或从带有异常集合的求值函数返回。例如，执行 BINARY_ADD 指令并且要相加的对象未实现 __add__ 和 __radd__ 方法时，可能会发生错误。
➡ VM 继续执行下一条指令，最简单的是用 continue 语句结束 case 块。不过，真正的解决方案要复杂一些。

使用简单 continue 语句跳转的问题是需要两个跳转指令才能完成一次 switch case 的执行，一个是 swich 选择分支时的跳转，另一个是 continue 语句添加的跳转。而使用跳转表，只需要一个跳转指令就进入分支执行。因为操作码是 0 到 255 之间的整数，范围很紧凑，编译器可以创建一个跳转表来存储 case 块的地址，并使用操作码作为该表的索引。现代编译器确实做到了这一点，因此 DISPATCH 可以有效地实现为单个间接跳转。

在 case 语句块末尾添加 continue 语句增加了另一个跳转，要执行一个操作码，VM 必须跳转两次：跳转到循环的开头，然后跳转到下一个 case 块。由于所有操作码都是通过一次跳转调度的，因此 CPU 预测下一个操作码的机会很小。它可以做的是选择最后一个操作码，或者可能选择最常用的一个操作。

优化的想法是在每个非返回 case 块的末尾放置一个单独的调度跳转，这就节省了一个跳转。其次，CPU 可以将下一个操作码预测为当前操作码之后最可能的操作码。

Python 3.10 中没有使用 continue 方式来跳转循环体，在没有使用跳转表的情况下，也会使用 goto predispatch 进入下一条指令的执行，这个结构取代旧版本的 *FAST_DISPATCH* 宏定义。

跳转表中所 Labels-as-Values 地址符号都在 switch 分支中使用 TARGET() 宏生成，例如：

|        Switch case        |       Opcode      | Instruction | Char |
|---------------------------|-------------------|-------------|------|
| TARGET(WITH_EXCEPT_START) | WITH_EXCEPT_START |          49 | 1    |
| TARGET(BINARY_AND)        | BINARY_XOR        |          64 | @    |
| TARGET(BINARY_XOR)        | BINARY_XOR        |          65 | A    |
| TARGET(STORE_GLOBAL)      | STORE_GLOBAL      |          97 | a    |
| TARGET(LOAD_CONST)        | LOAD_CONST        |         100 | d    |
| TARGET(SETUP_FINALLY)     | SETUP_FINALLY     |         122 | y    |
| TARGET(CALL_FUNCTION)     | CALL_FUNCTION     |         131 |      |
| TARGET(CALL_METHOD)       | CALL_METHOD       |         161 |      |


运行字节码时，先将携带的字节码的 PyFrameObject 对象设置到 PyThreadState.frame 字段，这就是 Current Frame，也是 the Fist Frame。随着后继更多的 PyFrameObject 载入，就会在 *f_back* 字段记录上一个帧：

- 在 *main_loop:* 行标中是一个读取 opcode 的循环结构；
- opcode 通过一个 2600 行的 switch 分支结构进入各自的操作；
- opcode 操作执行完成，继续通过 *DISPATCH* 宏派发下一个指令操作，如果启用回溯就调用 *tracing_dispatch:* 行标。
- 分支结构执行完毕后，通过一条 goto main_loop 指令返回前面的循环体继续，直到操作码执行完毕；
- 在递归的过程中，当一个帧执行完毕，就设置 tstate->frame = f->f_back;

CPython VM 最重要且容易理解的事实是它是基于堆栈执行字节码，这意味着为计算一个值，VM 从堆栈中弹出（或窥视）值，对它们执行计算并将结果推回。

堆栈值作为数组的一部分实现驻留在 PyFrameObject 对象的 *f_localsplus* 字段中，locals + stack, dynamically sized。

这个数组被分成几个部分来存储不同的东西，但只有最后一部分用于值堆栈。这部分的开始是堆栈的底部，*f_valuestack* 字段指向它。为了定位栈顶，CPython 在函数中保留了 *stack_pointer* 局部变量，它指向栈顶之后的下一个槽。数组的元素 *f_localsplus* 是指向 Python 对象的指针，它就是 CPython VM 实际使用的对象。

操作码回溯功能通过 PyFrameObject *f_trace_opcode* 字段打开，配合以下模块可以实现简单的调试器：

- traceback 模块获取 Stack Frame 对象信息。
- dis.disco() 模块方法反汇编 PyCodeObject 对象，并将当前执行的指令用 --> 箭头指示出来。
- sys.settrace() 指定回溯函数，sys 模块可以处理底层的 Audit Events。

在未打开 opcode 事件时，trace 处理函数中只有 call, return, line 等事件：

```py
import sys
import dis
import traceback
import io

def trace(frame, event, args):
   frame.f_trace_opcodes = True
   stack = traceback.extract_stack(frame)
   pad = "#" * len(stack) + "|"
   print(f"{pad}Audit event: {event:8}", end='')
   if event == 'opcode':
      with io.StringIO() as out:
         dis.disco(frame.f_code, frame.f_lasti, file=out)
         lines = out.getvalue().split('\n')
         print("Disassemble Code Object:")
         [print(f"{pad}{l}") for l in lines]
   elif event == 'line':   print(f"to {frame.f_lineno}")
   elif event == 'call':   print(f"f_code: {frame.f_code}")
   elif event == 'return': print(f"{args}")
   else:
      print(f"\n{pad}{frame} ({event} - {args})")
   print(f"{pad}----------------------------")
   return trace
sys.settrace(trace)

# Run some code for a demo
exec(f'''
ho = "hello"
"-".join([letter for letter in ho])
''')
```

例如，以上代码的反汇编状态如下：

   - 新版本 Python 指令都是 2 字节；
   - 第 4 条指令 LOAD_METHOD 加载 join 内置函数：
      - 指令行为在 ceval.c 中 *TARGET(LOAD_METHOD)* 分支上；
      - join 这个函数符号通过 *GETITEM(names, oparg)* 从代码对象的 `co_names[namei]` 字段中获取；
      - 通过 *TOP()* 从栈指针获取栈顶地址；
      - 通过 *_PyObject_GetMethod()* 获取方法对应的方法对象，内部通过 *tp_getattro* 调用 *PyObject_GenericGetAttr()* ；
      - 通过 *SET_TOP(meth)* 将代码对象设置到栈顶的地址上；
   - 后面通过 CALL_METHOD 来调用方法，和 CALL_FUNCTION 指令类似，都会通过 *call_function()* 函数来执行栈上的函数对象。 

```py
##|Audit event: opcode  Disassemble Code Object:
##|  2 -->       0 LOAD_CONST               0 ('hello')
##|              2 STORE_NAME               0 (ho)
##|
##|  3           4 LOAD_CONST               1 ('-')
##|              6 LOAD_METHOD              1 (join)
##|              8 LOAD_CONST               2 (<code object <listcomp> at 0x... line 3>)
##|             10 LOAD_CONST               3 ('<listcomp>')
##|             12 MAKE_FUNCTION            0
##|             14 LOAD_NAME                0 (ho)
##|             16 GET_ITER
##|             18 CALL_FUNCTION            1
##|             20 CALL_METHOD              1
##|             22 POP_TOP
##|             24 LOAD_CONST               4 (None)
##|             26 RETURN_VALUE
```


## ==⚡  PyObject & PyTypeObject

Python 的世界一切皆为对象，这个对象的 C 语言实现就是 PyObject & PyTypeObject 这两个结构体，它们分别代表的类型实例，和类型信息。

➡ PyObject 实例对象的信息，`ob_refcnt` 这个字段就是程序计数器变量，自定义新类型实例信息时只需要使用 `PyObject_HEAD` 宏就可以在新的结构体中添加基础对象结构。对于长度不固定的对象，使用 *PyVarObject*，增加了 *ob_size* 字段指示大小。

➡ PyTypeObject 基础对象类型信息，除文档属性字段 tp_name、tp_doc 之外，还包含众多的字段，主要是类型 API 字段，包括实例创建、内存申请、销毁、以及其它魔术方法 API 的定义。

因为 PyTypeObject 是所有实例对象共同使用的信息类型，没有多实例的内存管理问题，尽管如此，它本身也通过 `PyObject_VAR_HEAD` 宏定义经过 `PyVarObject` 间接引入了 PyObject 结构。

PyObject 通过 *ob_type* 字段引用 PyTypeObject，而后者又通过 *ob_base* 引用前者，这种循环的引用结构，使用得 Python 基本的 PyObject 对象具有类型结构，同时类型又是基本对象的子类型。

其中 `tp_basicsize` 字段很重要，指定了对象结构体所占内存大小，在创建实例时，需要按它的指示来申请内存。创建实例、增加引用时都需要调用 **Py_INCREF** 修改计数器变量，取消引用则对应 **Py_DECREF**。

另外，`tp_itemsize` 是指可变大小对象每个扩展单位占用内存大小，它只在可变大小对象中使用。调用 **PyType_GenericAlloc** 方法分配内存时会根据它进行判断内存申请大小，这个 API 通过 PyTypeObject 类型实例化方法 **type_new_alloc()** 绑定。用户自定义类型则通过 `PyType_Ready()` 方法传入初始化结构体。

各字段分类说明参考官方文档 Extending and Embedding the Python Interpreter 

• 2. Defining Extension Types: Tutorial
• 3. Defining Extension Types: Assorted Topics

另外源代码中 Doc 目录下的示范文档也是非常用心制作的，推荐细读，如 Doc\c-api\typeobj.rst 是类型信息文档。


以长整形数据结构 PyLongObject 定义为例，它就是变长的结构，除了基本的 PyObject 结构，还增加了 *ob_size* 字段指示大小，digit 根据机器选择配置决定最大字节数：

```c
// Python-3.10.2\Include\longintrepr.h
// Python-3.10.2\Include\longobject.h
struct _longobject {
    PyObject_VAR_HEAD
    digit ob_digit[1];
};
```

注意 *ob_digit* 是一个数组，就是因为有这个数组，Python 可以使整形没有精度限制，不会像一般的编程语言，超过 32-bit 或 64-bit 就会出现数值溢出。Python 给内置的整形 int 对象提供一个数组，可以轻松表达  2 ** 66 这种超过 64-bit 的数值，参考 *long_pow()* 方法的实现。大数的计算使用到了分层合并聚类算法 HAC - Hierarchical Agglomerative Clustering Algorithm，代码中给了算法文档：

    Handbook of
    Applied Cryptography
    Alfred J. Menezes, Paul C. van Oorschot and Scott A. Vanstone

        /* Left-to-right binary exponentiation (HAC Algorithm 14.79) */
        /* http://www.cacr.math.uwaterloo.ca/hac/about/chap14.pdf    */

Python 提供了两个 digit 长度版本，默认 digit = uint32_t，也可以使用 unsigned short。在 32-bit 机器上，digit 相当于 2 字节，只使用了最低的 30-bit 来记数。使用 16-bit 整型时，它用了 15-bit 来记数。保留高位不用，这是为乘法进位考虑的，并且 ob_digit 是无符号数，那么符号信息就被转移到 ob_size 字段上记录了。


内置类型的初始化在 *PyBuiltin_Init* 方法中执行，所有内置类型都会添加到内置模块 builtins 的字典对象内，实现方法统一存放在 Objects 目录下。

Python 脚本使用的各种内置类型都是 PyTypeObject 结构体实例，例如浮点数类型定义则是直接声明了一个 *PyFloat_Type*，创建、销毁浮点实例分别指定了 *float_new* 和 *float_dealloc* 方法。

其中，*PyType_Type* 是比较特殊的，对应了 Python 脚本中的 *type* 类型，也就是 metaclass。


列表是一个动态数组结构，*PyListObject*，每次添加数据时都会调用 *list_resize()* 方法自动扩容，如果 allocated 字段显示预分配的空间够用则跳过，否则执行 *PyMem_Realloc()* 重新分配空间并搬迁数据，当前占用空间的元素满足： 0 <= ob_size <= allocated。

但在涉及大量的内存操作时，对列表头部和尾部进行不同的操作，性能差别较大：

- *insert(0, v)* 方法向头部追加元素时需要挪动整个列表，时间复杂度是 O(n)，性能极差，需谨慎使用；
- *append(v)* 方法向尾部追加元素时，无需挪动任何元素，时间复杂度是 O(1)；
- *pop(0)* 方法从头部弹出元素时也需要挪动整个列表，时间复杂度是 O(n) ，同样需谨慎使用；
- *pop()* 方法从尾部弹出元素时，无需挪动任何元素，时间复杂度是 O(1)；

通过 copy 方法复制 list ，修改新列表会影响旧列表吗？

列表复制方法只是浅拷贝，Shadow Copy，list.copy() 内部直接调用 *list_slice()* 返回切片，只是将元素逐一复制。

```py
l = [1,2,3]
k = [l] * 2
l[0] = 4
# k = [[4, 2, 3], [4, 2, 3]]
```

Python 标准库 collections module 提供了 deque，这是一种双向线性表结构，很好地补全了 list 的短板。它在两端插入删除数据的时间复杂度都是 O(1)，因而可以作为队列来使用。

Deque 使用定长区块 block 作为数据容器，*dequeobject* 结构则记录两端区块和它们所保存数据位置的索引值，通过 *leftblock* 和 *rightblock* 指向两端的区块。block 结构体就是链表的节点，结构非常简单，只有 3 个字段：

- *leftlink* 引用左侧区块的指针，更接近链表头部；
- *rightlink* 引用右侧区块的指针，更接近尾部；
- *data* ，保存数据的 PyObject 指针数组，两端区块的当前数据索引值在 dequeobject 中记录；

Deque 增删数据的逻辑很清晰，分别在两端的区块增、删加数据，相应修改 dequeobject 记录的位置索引值。如果区块的容量不足，就增加区块，如果区块没有数据就考虑删除区块，不必对所有数据进行迁移。

以下是自定义类型的代码片段，摘自官方源代码文件 Python-3.10.2\Doc\includes\custom.c：

```c
#define PY_SSIZE_T_CLEAN
#include <Python.h>

typedef struct {
    PyObject_HEAD // PyObject ob_base;
    /* Type-specific fields go here. */
} CustomObject;

static PyTypeObject CustomType = {
    PyVarObject_HEAD_INIT(NULL, 0)
    .tp_name = "custom.Custom",
    .tp_doc = "Custom objects",
    .tp_basicsize = sizeof(CustomObject),
    .tp_itemsize = 0,
    .tp_flags = Py_TPFLAGS_DEFAULT,
    .tp_new = PyType_GenericNew,
};

static PyModuleDef custommodule = {
    PyModuleDef_HEAD_INIT,
    .m_name = "custom",
    .m_doc = "Example module that creates an extension type.",
    .m_size = -1,
};

PyMODINIT_FUNC
PyInit_custom(void)
{
    PyObject *m;
    if (PyType_Ready(&CustomType) < 0)
        return NULL;

    m = PyModule_Create(&custommodule);
    if (m == NULL)
        return NULL;

    Py_INCREF(&CustomType);
    if (PyModule_AddObject(m, "Custom", (PyObject *) &CustomType) < 0) {
        Py_DECREF(&CustomType);
        Py_DECREF(m);
        return NULL;
    }

    return m;
}
```

自定义类型通过 *PyVarObject_HEAD_INIT* 宏定义引入 **PyVarObject** 结构定义的 ob_base 和 ob_size 字段的初始值。

另外，有大量字段未提供初始值，使用编译器默认填充的 0 值，一般不用管它们，除非需要使用，例如，继承现有类型，在 `tp_bases` 指定就可以实现。参考源代码文档 Defining Extension Types: Tutorial - Subclassing other types：Python-3.10.2\Doc\extending\newtypes_tutorial.rst 及代码示范文件 Doc/includes/sublist.c

大部分 API 初始指针会在 PyTypeObject 类型实例化方法 **type_new_alloc()** 中绑定。

编写扩展模块时，会需要以下结构体来定义新类型的公开方法、成员、GetSetter 及模块本身的结构，这些都是稳定 ABI 结构，参考源代码文档 stable_abi.dat：

```c
struct PyModuleDef
/* Attribute descriptor and subclassing stuff */
struct PyMethodDef *tp_methods;
struct PyMemberDef *tp_members;
struct PyGetSetDef *tp_getset;
```


涉及的源代码文件如下，Doc 目录下的文件为说明性代码文件或 reStructuredText 文档：

PyObject, PyVarObject:

↪ Python-3.10.2\include\object.h
↪ Python-3.10.2\Objects\object.c


PyTypeObject 基础类型信息结构对象参考 Doc 目录下的 typestruct.h：

↪ Python-3.10.2\include\cpython\object.h
↪ Python-3.10.2\Doc\includes\typestruct.h


            +===============================+
            | PyObject (_object)            | <-------+
            +===============================+         |
            | #ifdef Py_TRACE_REFS          |         |
            | _PyObject_HEAD_EXTRA          |         |
            | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ |         |
            | _object          *_ob_next    | ------->+
            | _object          *_ob_prev    | ------->+
            +===============================+         |
            | Py_ssize_t         ob_refcnt  |         | GC Reference Count 
       +<-- | PyTypeObject      *ob_type    |         | Object Type
       |    +===============================+         |
       |                                              |
       |                                              |
       |    +===============================+         |
       |    | PyVarObject                   | <---+   |
       |    +===============================+     |   |
       |    | PyObject           ob_base    | ----|-->+
       |    | Py_ssize_t         ob_size    |     |     Number of items in variable part
       |    +===============================+     |     used for dynamic types
       |                                          |
       v                                          |
    +=======================================+     |
    | PyTypeObject (_typeobject)            |     |
    +=======================================+     |
    | PyObject_VAR_HEAD                     |     |
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ |     |
    | PyVarObject        ob_base            | --->+
    +=======================================+
    | const char        *tp_name            | For printing, in format "<module>.<name>"
    | Py_ssize_t         tp_basicsize,      |
    |                    tp_itemsize        | For allocation
    +=======================================+
    | destructor         tp_dealloc         | Methods to implement standard operations
    | Py_ssize_t      tp_vectorcall_offset  | 
    | getattrfunc        tp_getattr         | 
    | setattrfunc        tp_setattr         | 
    | PyAsyncMethods    *tp_as_async        | tp_compare or tp_reserved (Python 2 or 3)
    | reprfunc           tp_repr            | 
    +=======================================+
    | PyNumberMethods   *tp_as_number       | Method suites for standard classes
    | PySequenceMethods *tp_as_sequence     | 
    | PyMappingMethods  *tp_as_mapping      | 
    +=======================================+
    | hashfunc           tp_hash            | More standard operations
    | ternaryfunc        tp_call            | (here for binary compatibility)
    | reprfunc           tp_str             | 
    | getattrofunc       tp_getattro        | 
    | setattrofunc       tp_setattro        | 
    | PyBufferProcs     *tp_as_buffer       | Functions to access object as input/output buffer
    +=======================================+
    | unsigned long      tp_flags           | Flags to define presence of optional/expanded features
    | const char        *tp_doc             | Documentation string 
    +=======================================+
    | traverseproc       tp_traverse        | Assigned meaning in release 2.0
    |                                       | call function for all accessible objects
    +=======================================+
    | inquiry            tp_clear           | delete references to contained objects
    +=======================================+
    |                                       | Assigned meaning in release 2.1
    | richcmpfunc        tp_richcompare     | rich comparisons
    +=======================================+
    | Py_ssize_t         tp_weaklistoffset  | weak reference enabler
    +=======================================+
    | getiterfunc        tp_iter            | Iterators
    | iternextfunc       tp_iternext        | 
    +=======================================+
    | struct PyMethodDef *tp_methods        | Attribute descriptor and subclassing stuff
    | struct PyMemberDef *tp_members        | 
    | struct PyGetSetDef *tp_getset         | 
    +=======================================+
    | struct _typeobject *tp_base           | Strong reference on a heap type, borowed reference on a static type
    | PyObject           *tp_dict           | 
    | descrgetfunc        tp_descr_get      | 
    | descrsetfunc        tp_descr_set      | 
    | Py_ssize_t          tp_dictoffset     | 
    | initproc            tp_init           | 
    | allocfunc           tp_alloc          | 
    | newfunc             tp_new            | 
    | freefunc            tp_free           | /* Low-level free-memory routine */
    | inquiry             tp_is_gc          | /* For PyObject_IS_GC */
    | PyObject           *tp_bases          | 
    | PyObject           *tp_mro            | /* method resolution order */
    | PyObject           *tp_cache          | 
    | PyObject           *tp_subclasses     | 
    | PyObject           *tp_weaklist       | 
    | destructor          tp_del            | 
    +=======================================+
    | unsigned int        tp_version_tag    | Type attribute cache version tag. Added in version 2.6
    +=======================================+
    | destructor          tp_finalize       | 
    | vectorcallfunc      tp_vectorcall     | 
    +=======================================+

## ==⚡  CPython OOP - AOL & COL 类型体系

C API 官方手册参考材料相关内容：

    +-- Doc\c-api
    |  ✒ -- abstract.rst            => Abstract Objects Layer
    |   • -- object.rst                 => Object Protocol
    |   • -- call.rst                   => Call Protocol
    |   • -- number.rst                 => Number Protocol
    |   • -- sequence.rst               => Sequence Protocol
    |   • -- mapping.rst                => Mapping Protocol
    |   • -- iter.rst                   => Iterator Protocol
    |   • -- buffer.rst                 => Buffer Protocol
    |   • -- objbuffer.rst              => Old Buffer Protocol
    |  ✒ -- concrete.rst            => Concrete Objects Layer
    |   + -- Fundamental Objects
    |   |    • -- none.rst              => The ``None`` Object
    |   |    • -- type.rst              => Type Objects
    |   + -- Numeric Objects
    |   |    • -- long.rst              => Integer Objects
    |   |    • -- bool.rst              => Boolean Objects
    |   |    • -- float.rst             => Floating Point Objects
    |   |    • -- complex.rst           => Complex Number Objects
    |   + -- Sequence Objects
    |   |    • -- bytes.rst             => Bytes Objects
    |   |    • -- bytearray.rst         => Byte Array Objects
    |   |    • -- unicode.rst           => Unicode Objects and Codecs
    |   |    • -- tuple.rst             => Tuple Objects
    |   |    • -- list.rst              => List Objects
    |   + -- Container Objects
    |   |    • -- dict.rst              => Dictionary Objects
    |   |    • -- set.rst               => Set Objects
    |   + -- Function Objects
    |   |    • -- cell.rst              => Cell Objects
    |   |    • -- code.rst              => Code Objects
    |   |    • -- function.rst          => Function Objects
    |   |    • -- method.rst            => Instance Method Objects
    |   + -- Other Objects
    |   |    • -- file.rst              => File Objects
    |   |    • -- module.rst            => Module Objects
    |   |    • -- iterator.rst          => Iterator Objects
    |   |    • -- descriptor.rst        => Descriptor Objects
    |   |    • -- slice.rst             => Slice Objects
    |   |    • -- memoryview.rst        => MemoryView objects
    |   |    • -- weakref.rst           => Weak Reference Objects
    |   |    • -- capsule.rst           => Capsules
    |   |    • -- gen.rst               => Generator Objects
    |   |    • -- coro.rst              => Coroutine Objects
    |   |    • -- contextvars.rst       => Context Variables Objects
    |   |    • -- datetime.rst          => DateTime Objects
    |   |    • -- typehints.rst         => Objects for Type Hinting
    |   • -- allocation.rst             => Allocating Objects on the Heap
    |   • -- structures.rst             => Common Object Structures
    |   • -- typeobj.rst                => Type Objects
    +-- Doc\extending
    |   • -- index.rst               => Extending and Embedding the Python Interpreter
    |   • -- extending.rst              => Extending Python with C or C++
    |   • -- newtypes_tutorial.rst      => Defining Extension Types: Tutorial
    |   • -- newtypes.rst               => Defining Extension Types: Assorted Topics
    |   • -- building.rst               => Building C and C++ Extensions
    |   • -- windows.rst                => Building C and C++ Extensions on Windows
    |   • -- embedding.rst              => Embedding Python in Another Application


抽象对象层 AOL - Abstract Objects Layer 是 Python 类型系统的核心概念，它为一切类型提供了一个基本的架构，包括 Python 脚本中的类型系统和解释器实现。也就是为 PyObject、PyTypeObject 实现各种类型而提供的一套通用 API，与具体类型无关，可以当作泛型方法来理解。它涉及的内容非常多，这里主要研究面向对象 OOP 的层次结构实现。

与抽象对象层相对的是具象类型层 COL - Concrete Objects Layer，是 Python 具体类型的实现。

CPython 是建立在不支持 OOP 的 C 语言基础上的，AOL 概念的引入提供了很好的 OOP 思想来组织类型对象。

现代 OOP 的基本特征与 CPython C API 基于 *PyTypeObject* 结构的类型系统实现：

- `抽象` Abstraction 作为 OOP 的最显著的特征，CPython AOL 通过 C API 构建出完整的 Python 类型系统，完美体现抽象的概念。
- `封装` Encapsulation，体现在 Python 各种类型与其所提供的 API 接口上，在 C 代码上，基于 PyObject、PyTypeObject；
- `继承` Inheritance，在 *tp_base* 指针存放了继承链中的上一级类型对象，通过创建 PyTypeObject 结构实例及 API 配置，使得各种 Python 类型具有相应的行为功能，同时又可以继承父级类型对象的功能。*PyType_Type* 作为 metaclass 它本身处于继承链的顶端，不设置 *tp_base* 属性；
- `多态` Polymorphism，基于继承和 MRO - Method Resolution Order 算法
- `方法`，Methods 是 OOP 最基本的 API 形式，*tp_methods* 指针引用 *PyMethodDef* 结构获取方法配置；
- `成员` Members 是 OOP 数据封装与公开的一种方式，*tp_members* 指针引用 *PyMemberDef* 结构获得成员配置；
- `属性` Properties 指通过 get/setter 访问的属性，与 Attribute 有些许区别，*tp_getset* 指针引用 *PyGetSetDef* 结构配置类属性的访问方法；

封装的一方面向外提供接口，另一层含义就是隐藏实现细节，在 PyObject 和 PyTypeObject 内部的实现并不会直接向 Python 类型系统公开，而仅限于 C 语言的实现中，这也就是为何需要使用 AOL 来约束这个自由的 C 语言。

Python 作为一个动态语言，从 PyTypeObject 这个基础类型就开始构建动态特性，*tp_dict* 指针指向的是一个用于扩展动态属性的 PyObject 对象。最新版本 Python 已经使用 __slots__ 替代字典方式动态创建对象属性，而是使用插槽显式声明需要的属性。关于 PyType_Spec、PyType_Slot，参考 Fundamental Objects 文档。

从 Python 内置模块代码开始，bltinmodule.c 这里的 *SETBUILTIN* 有所有 Python 内置类型的线索。

所以 Python 内置类型都可以总结为：PyTypeObject 结构的实例，也就是类型 API 的具体配置。

以 int 和 float 两种类型为例，它们在 bltinmodule.c 模块中注册类型如下：

    SETBUILTIN("float",                 &PyFloat_Type);
    SETBUILTIN("int",                   &PyLong_Type);

不同类型，除了名字的差异，更多的是背后的 Object Layout 所使用的结构，以及各种类型所使用的一套 API 配置，这一切决定不同类型具有不同的功能。

前面已经讲到 Python 整数类型是具有任意长度的数值类型，不会以出现溢出，这是由于整形的底层实现 *PyLongObject* 使用了数组来表达数值：

```c
PyTypeObject PyType_Type = {
    PyVarObject_HEAD_INIT(&PyType_Type, 0)
    "type",                                     /* tp_name */
    sizeof(PyHeapTypeObject),                   /* tp_basicsize */
    sizeof(PyMemberDef),                        /* tp_itemsize */
    (destructor)type_dealloc,                   /* tp_dealloc */
    offsetof(PyTypeObject, tp_vectorcall),      /* tp_vectorcall_offset */
    ...

PyTypeObject PyLong_Type = {
    PyVarObject_HEAD_INIT(&PyType_Type, 0)
    "int",                                      /* tp_name */
    offsetof(PyLongObject, ob_digit),           /* tp_basicsize */
    sizeof(digit),                              /* tp_itemsize */
    ...

PyTypeObject PyFloat_Type = {
    PyVarObject_HEAD_INIT(&PyType_Type, 0)
    "float",                    /* tp_name */
    sizeof(PyFloatObject),      /* tp_basicsize */
    0,                          /* tp_itemsize */
    (destructor)float_dealloc,  /* tp_dealloc */
    ...
    float_new,                  /* tp_new */
    ...

    // PyVarObject_HEAD_INIT(&PyType_Type, 0)
    // PyObject_VAR_HEAD { { 1, &PyType_Type } 0 },
```

PyVarObject_HEAD_INIT 宏用来初始化可变类型的开头部分，PyTypeObject 类型名前面包含的是 PyObject_VAR_HEAD 宏定义的结构，PyVarObject ob_base 字段。

初始化为 GC 机制的属性 *ob_refcnt* 设置了引用计数初始值 1，同时又设置了 *ob_type* 为 &PyType_Type，*ob_size* 设置为 0，这是所有内置类型默认的初始行为：

    +=======================================+
    | PyTypeObject (_typeobject)            |
    +=======================================+
    | PyObject_VAR_HEAD (PyVarObject)       |
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ |
    | PyObject           ob_base            |
    |   +===============================+   |
    |   | Py_ssize_t         ob_refcnt  |   |
    |   | PyTypeObject      *ob_type    |   |
    |   +===============================+   |
    | Py_ssize_t         ob_size            |
    +=======================================+
    | const char        *tp_name            |
    | Py_ssize_t         tp_basicsize,      |
    | ....                                  |

所有类型最后都应该调用 *PyType_Ready()* 进行最终的初始化过程，它会处理继承链上的一些设置，从父类型继承 Slots API。Python 所有可用的 Slots API 定义在 static slotdef slotdefs。此外，还会初始化一些字段的置默认值，包括 tp_dict, tp_bases, tp_mro, tp_new, 检查是否按 GC 标志正确设置了 tp_free 函数等。

所有内置类型在 C 语言代码的表现上都是结构体实例，但具体上会根据不同类型提供一个合适的底层结构实现，在 Objects 目录下会相应的结构定义。除了像布尔值类型这些特殊例子外，它们基本都是 PyTypeObject 结构体实例的配置。

    Builtin Type    SETBUILTIN Symbol    Struct Config                          Object layout
    =============== ==================== =================================== ===================
    None             Py_None             PyTypeObject _PyNone_Type           
    Ellipsis         Py_Ellipsis         PyTypeObject PyEllipsis_Type        
    NotImplemented   Py_NotImplemented   PyTypeObject _PyNotImplemented_Type 
    False            Py_False             _longobject _Py_FalseStruct        
    True             Py_True              _longobject _Py_TrueStruct         
    bool           & PyBool_Type         PyTypeObject PyBool_Type            _longobject
    memoryview     & PyMemoryView_Type   PyTypeObject PyMemoryView_Type      PyMemoryViewObject
    bytearray      & PyByteArray_Type    PyTypeObject PyByteArray_Type       PyByteArrayObject
    bytes          & PyBytes_Type        PyTypeObject PyBytes_Type           PyBytesObject
    classmethod    & PyClassMethod_Type  PyTypeObject PyClassMethod_Type     classmethod
    complex        & PyComplex_Type      PyTypeObject PyComplex_Type         PyComplexObject
    dict           & PyDict_Type         PyTypeObject PyDict_Type            PyDictObject
    enumerate      & PyEnum_Type         PyTypeObject PyEnum_Type            enumobject
    filter         & PyFilter_Type       PyTypeObject PyFilter_Type          filterobject
    float          & PyFloat_Type        PyTypeObject PyFloat_Type           PyFloatObject
    frozenset      & PyFrozenSet_Type    PyTypeObject PyFrozenSet_Type       PySetObject
    property       & PyProperty_Type     PyTypeObject PyProperty_Type        propertyobject
    int            & PyLong_Type         PyTypeObject PyLong_Type            _longobject
    list           & PyList_Type         PyTypeObject PyList_Type            PyListObject
    map            & PyMap_Type          PyTypeObject PyMap_Type             mapobject
    object         & PyBaseObject_Type   PyTypeObject PyBaseObject_Type      PyObject
    range          & PyRange_Type        PyTypeObject PyRange_Type           rangeobject
    reversed       & PyReversed_Type     PyTypeObject PyReversed_Type        reversedobject
    set            & PySet_Type          PyTypeObject PySet_Type             PySetObject
    slice          & PySlice_Type        PyTypeObject PySlice_Type           PySliceObject
    staticmethod   & PyStaticMethod_Type PyTypeObject PyStaticMethod_Type    staticmethod
    str            & PyUnicode_Type      PyTypeObject PyUnicode_Type         PyUnicodeObject
    super          & PySuper_Type        PyTypeObject PySuper_Type           superobject
    tuple          & PyTuple_Type        PyTypeObject PyTuple_Type           PyTupleObject
    type           & PyType_Type         PyTypeObject PyType_Type            PyHeapTypeObject
    zip            & PyZip_Type          PyTypeObject PyZip_Type             zipobject

其中，*PyType_Type* 是比较特殊的，对应了 Python 脚本中的 *type* 类型，也就是 metaclass。

`PyCFunction`

除了以上内置类型，CPython 还有许多底层类型，称为 Python 的静态类型，这些类型的结构体配置在 *_PyTypes_Init* 方法中初始化，如 Code Object，函数对象，各种描述符，类成员方法，C/C++ 扩展模块类型：

    Struct Config                          Object layout
    =================================== ===================
    PyTypeObject PyCode_Type            PyCodeObject
    PyTypeObject PyCell_Type            PyCellObject
    PyTypeObject PyInstanceMethod_Type  PyInstanceMethodObject
    PyTypeObject PyMethod_Type          PyMethodObject
    PyTypeObject PyMemberDescr_Type     PyMemberDescrObject
    PyTypeObject PyMethodDescr_Type     PyMethodDescrObject
    PyTypeObject PyModuleDef_Type       PyModuleDef
    PyTypeObject PyFunction_Type        PyFunctionObject

可以在函数代码中看到，Python 基本类型的实现关系：

                 (NULL)
                    ^
                    |
                 tp_base
                    |
    +--------------------------------+
    |  PyBaseObject_Type (PyObject)  |
    +---------------^----------------+
                    |         
                 tp_base      
                    |         
    +--------------------------------+
    | PyType_Type (PyHeapTypeObject) |
    +--------------------------------+

    +==============+                 +=============+
    |   PyObject   | <-- ob_base <-- | PyVarObject | <-- ob_base <-- +
    +==============+                 +=============+                 |
                                                                     |
    +==================+                 +==================+        |
    | PyHeapTypeObject | --> ht_type --> |   PyTypeObject   | ------>+
    +==================+                 +==================+

                            Base types

作为一切类型的基本结构，*PyTypeObject* 是产生类型的工厂，既是 Python 内置模块中的类型来源，也是 Python 解释器系统中各种静态类型的来源。而 *PyObject* 作为整个系统的类型抽象对象，和前者一起定义了 AOL 的基本结构。

有两个重要的 *PyTypeObject* 结构体实例：

➡ PyBaseObject_Type，以 *PyObject* 结构为对象内存布局，它将作为所有类型、对象的基底。
➡ PyType_Type，以 *PyHeapTypeObject* 结构为对象的内存布局，它是所有堆内存上创建的 Python 类型的元类型。

其它子类型都需要调用 *PyVarObject_HEAD_INIT(&PyType_Type, 0)*，将 PyType_Type 内嵌到类型内部。

函数对象 *PyFunctionObject* 太重要了，无论是 def 定义的单个函数，还 class 中定义的类方法都是函数对象，它本身的函数体是单独编译到一个 PyCodeObject  对象中保存的，需要调用时，就先要加载到栈内存中，再通过 *CALL_FUNCTION* 指令执行。

    +============================+
    | PyFunctionObject           |
    +============================+
    | PyObject_HEAD              |
    | ^^^^^^^^^^^^^^^^^^^^^^^    |
    | PyObject      ob_base      |
    +============================+
    | COMMON_FIELDS(func_)       |
    | ^^^^^^^^^^^^^^^^^^^^^^^    |
    | PyObject func_globals      |
    | PyObject func_builtins     |
    | PyObject func_name         |
    | PyObject func_qualname     |
    | PyObject func_code         | /* A code object, the __code__ attribute */ \
    | PyObject func_defaults     | /* NULL or a tuple */ \
    | PyObject func_kwdefaults   | /* NULL or a dict */ \
    | PyObject func_closure      | /* NULL or a tuple of cell objects */
    +============================+
    | PyObject *func_doc         | /* The __doc__ attribute, can be anything */
    | PyObject *func_dict        | /* The __dict__ attribute, a dict or NULL */
    | PyObject *func_weakreflist | /* List of weak references */
    | PyObject *func_module      | /* The __module__ attribute, can be anything */
    | PyObject *func_annotations | /* Annotations, a dict or NULL */
    | vectorcallfunc vectorcall  | 
    +============================+

    /* Invariant:
     *     func_closure contains the bindings for func_code->co_freevars, so
     *     PyTuple_Size(func_closure) == PyCode_GetNumFree(func_code)
     *     (func_closure may be NULL if PyCode_GetNumFree(func_code) == 0).
     */

以下代码展示了一个函数定义的字节码：

```py
source = '''\
def fly(*run):
  print(f"it can't fly: {run}")
'''
import dis
print(dis.dis(compile(source, "string", "exec")))
```

首先是第一条 `LOAD_CONST` 指令将函数的代码对象加载到栈顶上，它保存在 co_consts 字段中。然后是将函数名 “fly” 加载到栈顶上，然后调用 `MAKE_FUNCTION` 指令执行函数对象的构建，指令参数 flags 取决于函数是否使用了 positional-or-keyword 或者 dictionary of keyword-only parameters 等不同的默认参数形式。参数 flags = 0 表示没有默认参数。

栈顶 TOS 对应函数限定名，"Class.func" 这种格式，通过 __qualname__ 属性可以获取。TOS1 对应函数的 PyCodeObject 对象，也就是以下输出内容的第二部分，它就是函数体的代码对象，通过 __code__ 属性也可以获得。函数对象的 __class__ 属性指向是 function 类型，这也就是函数类型的结构配置，PyTypeObject PyFunction_Type 设置的 *func_new* 函数，也可以通过 types.FunctionType 访问。

然后，构建好的函数对象存放在栈顶，通过 `STORE_NAME` 指令将其保存到 `co_names` 字段上。

输出的第一指令内容中，最后一条 `LOAD_CONST` 和 `RETURN_VALUE` 指令是设置返回值，因为是代码块，不是函数，返回 None。

      1           0 LOAD_CONST               0 (<code object fly at 0x0x000001DBE824CDF0 ..., line 1>)
                  2 LOAD_CONST               1 ('fly')
                  4 MAKE_FUNCTION            0
                  6 STORE_NAME               0 (fly)
                  8 LOAD_CONST               2 (None)
                 10 RETURN_VALUE

    Disassembly of <code object fly at 0x0x000001DBE824CDF0 ..., line 1>:
      2           0 LOAD_GLOBAL              0 (print)
                  2 LOAD_CONST               1 ("it can't fly: ")
                  4 LOAD_FAST                1 (run)
                  6 FORMAT_VALUE             0
                  8 BUILD_STRING             2
                 10 CALL_FUNCTION            1
                 12 POP_TOP
                 14 LOAD_CONST               0 (None)
                 16 RETURN_VALUE

以下代码显示了 Python 的多态，Ostrich 是不能飞的鸟：

```py
class Bird():
    pass
    def __init__(self, *fly):
        print(f"fly: {fly}")

    def fly(self, *args):
        print(f"flying: {args}")

class Ostrich(Bird):

    def __init__(self, *run):
        print(f"run: {run}")

    def fly(self, *run):
        print(f"it can't fly: {run}")

bird = Ostrich() # run: ()
bird.fly()       # it can't fly: ()
```

使用反汇编模块获得以上代码的字节码指令，python -m dis main.py 或者直接，能代码中执行反汇编：

```py
source = '''
class Bird():
    ...
'''
import dis
print(dis.dis(compile(source, "string", "exec")))
```

抽象语法树可以使用 ast 模块打印出来：

> python -m ast __main__.py

类定义对应的抽象语法树的节点类型是 *ClassDef*，类方法对应的是 *FunctionDef* 节点类型。

阅读源代码时，真的有种感觉，大师在宏编程。通过 VM 解码分支 *TARGET(LOAD_BUILD_CLASS)* 可以看到，调用 *_Py_IDENTIFIER(__build_class__)* 宏会生成，*_Py_Identifier* 结构体，并命名为 *PyId___build_class__*，它用来简化方法的调用，在解释器退出时这些结构体及字符串资源会自动释放。

前面在解释字节友执行流程已经解析到 *PyEval_EvalCode* 方法中，会对 *_PyBuiltin_Init(interp)* 方法初始化后的内置模块进行最后的设置，以供字节码调用。

脚本经过编译后就会得到以下字节码，其它代码对象未展示出来：

      1           0 LOAD_BUILD_CLASS
                  2 LOAD_CONST               0 (<code object Bird at 0x000001A94CBF1580, line 1>)
                  4 LOAD_CONST               1 ('Bird')
                  6 MAKE_FUNCTION            0
                  8 LOAD_CONST               1 ('Bird')
                 10 CALL_FUNCTION            2
                 12 STORE_NAME               0 (Bird)

      9          14 LOAD_BUILD_CLASS
                 16 LOAD_CONST               2 (<code object Ostrich at 0x000001A94CBF1790, line 9>)
                 18 LOAD_CONST               3 ('Ostrich')
                 20 MAKE_FUNCTION            0
                 22 LOAD_CONST               3 ('Ostrich')
                 24 LOAD_NAME                0 (Bird)
                 26 CALL_FUNCTION            3
                 28 STORE_NAME               1 (Ostrich)

     17          30 LOAD_NAME                1 (Ostrich)
                 32 CALL_FUNCTION            0
                 34 STORE_NAME               2 (bird)

     18          36 LOAD_NAME                2 (bird)
                 38 LOAD_METHOD              3 (fly)
                 40 CALL_METHOD              0
                 42 POP_TOP
                 44 LOAD_CONST               4 (None)
                 46 RETURN_VALUE

1. 首先 `LOAD_BUILD_CLASS` 指令从 *PyFrameObject* 对象的 f_builtins 字段装入内置模块的 __build_class__ 方法到栈顶，稍后通过 `CALL_FUNCTION` 调用。它用来创建类型定义，C API 实现是 builtin___build_class__。
2. 第 2 条指令，`LOAD_CONST` 载入类定义对应的 *PyCodeObject* 对象，它包含了类结构中定义的数据成员、方法等等。
3. 第 3 条指令，`LOAD_CONST` 载入类名，字符串对象，这两条指令载入的数据都是为了产生一个函数对象。
4. 第 4 条指令，`MAKE_FUNCTION` 将栈上的定义类型的数据转化为一个函数对象，这会当作 Frame Constructor 函数使用，参数 flags = 0 表示没有默认参数。TOS 对应函数限定名，"class.func" 这种格式，TOS1 对应函数的 PyCodeObject 对象。类定义 Bird 和 Ostrich 它们本身是一个函数，在 C 语言实现上，都是函数对象。
5. 第 5 条指令，`LOAD_CONST` 将类名载入，准备构建出类型。
6. 第 6 条指令，`CALL_FUNCTION` 将前面得到的类型函数和类名作为参数，调用 builtin___build_class__。
7. 第 7 条指令，`STORE_NAME` 将构建好的类形保存到 PyCodeObject 对象 `co_names` 字段上。

第二段输出内容中，因为 Ostrich 继承了 Brid，在执行 `CALL_FUNCTION` 指令之前增加了一个`LOAD_NAME` 指令将 `co_names[namei]` 字段保存的父类名称加载到栈顶上，传入函数 `*args` 变量的的参数也变为 3 个。

注意，`MAKE_FUNCTION` 指令创建构造器时会消耗栈顶上两个数据，所以在执行 `CALL_FUNCTION` 指令时，是通过 *call_function* 函数调用 `LOAD_BUILD_CLASS` 指令载入的 builtin___build_class__ 函数，而栈上的参数则是类型名对应的函数对象、类名，以及父类名。在内部分调用 *PyVectorcall_Function* 进行包装，这是 PEP 引入了一个新的 C API 对象调用的优化，相对于 CPython 使用中的 “fastcall” 约定，新的调用约定称为 “vectorcall” 协议。

build_class 这个函数接收的参数和 prepare_class 函数是类似的，在 `*args` 第 2 个位置后面的到最后两个参数之前都是用来指定父类的，并且在缺失 metaclass 时，就会默认指定为 PyType_Type：

```py
# https://peps.python.org/pep-3115/
# def prepare_class(name, *bases, metaclass=None, **kwargs):

/* AC: cannot convert yet, waiting for *args support */
static PyObject *
builtin___build_class__(PyObject *self, PyObject *const *args, Py_ssize_t nargs,
                        PyObject *kwnames)
{
    ...
    orig_bases = _PyTuple_FromArray(args + 2, nargs - 2);
    ...
    bases = update_bases(orig_bases, args + 2, nargs - 2);
    ...
    if (meta == NULL) {
        /* if there are no bases, use type: */
        if (PyTuple_GET_SIZE(bases) == 0) {
            meta = (PyObject *) (&PyType_Type);
        }
        /* else get the type of the first base */
        else {
            PyObject *base0 = PyTuple_GET_ITEM(bases, 0);
            meta = (PyObject *)Py_TYPE(base0);
        }
        Py_INCREF(meta);
        isclass = 1;  /* meta is really a class */
    }
    ...
```

## ==⚡ Sequence Objects
- 探究Python源码，终于弄懂了字符串驻留技术 https://www.macnp.com/express/info/c63c8895

C API 官方手册参考材料相关内容：

    +-- Doc\c-api
    |   + -- Sequence Objects
    |   |    • -- bytes.rst             => Bytes Objects
    |   |    • -- bytearray.rst         => Byte Array Objects
    |   |    • -- unicode.rst           => Unicode Objects and Codecs
    |   |    • -- tuple.rst             => Tuple Objects
    |   |    • -- list.rst              => List Objects


Python 序列对象包含五种最常用的数据类型，除 list 和 bytearray 外，都是 immutable 类型。

Python 2.x 版本中，通过 sys.setdefaultencoding('utf-8') 可以改变默认编码方案，在启动解释器时会读取这个默认设置，也会使用环境变量，如 PYTHONIOENCODING="UTF-8"。但是这种修改默认编码方案的操作电磁学容易出现编码问题，所以在升级版本后直接硬编码使用 Unicode 作为字符串编码方案。


Python 3.x PEP 0393 为实现多灵活的字符编码，直接采用最通用的 Unicode，尽管如此，也有多种编码方案，多字节的省空间的 UTF-8 方案，双字节的 UTF-16 方案，以及终极的 UTF-32 四字节全球码。

旧的 *Py_UNICODE* 类型已经弃用，同样包括旧式 API，`PyUnicode_FromUnicode` 这种方式不太高效，并且还必需调用 `PyUnicode_READY` 进行类型的预备处理，Python 3.12 版本会移除它们。

正式规范字符串类型的读写使用以下宏定义，对于传统方式创建的字符串需要确保调用了 `PyUnicode_READY`：

    PyUnicode_READ(kind, data, index)
    PyUnicode_WRITE(kind, data, index, value)
    PyUnicode_READ_CHAR(unicode, index)

脚本系统中，Python Unicode 字符串类型 str 使用 *PyTypeObject PyUnicode_Type* 定义，每个字符使用 *Py_UCS4*, *Py_UCS2*, *Py_UCS1* 表示，对应各个不同字节数的编码方案，字符串对象内存布局使用 *PyUnicodeObject* 表示，还包含内部的结构。不计字符串具体值，光这些基本结构就占 sizeof(PyUnicodeObject) = 80 个字节，也就是 PyTypeObject *tp_basicsize* 字段指示的值，字符串序列的数据占用空间并不通过 tp_itemsize 指示，在内部结构体有相应的字段。

对应不同的 Unicode 编码方法，字符串内部有四种不同的形式，*PyUnicode_Kind* 枚举类型指示，获取类型信息则使用 *PyUnicode_KIND* 宏。

字符串的引用在 interned 字典存储驻留、访问和管理。该字典在第一次调用字符串驻留时，被延迟地初始化，并持有全部已驻留字符串对象的引用。

字符串驻留是编译器/解释器优化方法，通过缓存字符串达到节省字符串处理任务的空间和时间优化。

这种优化方法不会每次都创建一个新的字符串副本，而是仅为每个适当的不可变值保留一个字符串副本，并使用指针引用之。每个字符串的唯一拷贝被称为它的 intern，并因此而得名 String Interning，也称作 “常量折叠” Constant Folding 或 String Pool 字符串常量池。

字符串驻留的优点是提升了字符串比较的速度，没有驻留的情况下比较两个字符串只能是逐一检查，时间复杂度 O(n)。

能过常量池，相同的字符串就会使用同一个对象引用，因此只需检查指针是否相同，由于这是一个非常普遍的操作，因此，它被典型地实现为指针相等性校验，仅使用一条完全没有内存引用的机器指令。

字符串驻留还可以减少了内存占用，避免内存中充斥多余的字符串对象，通过享元设计模式共享和重用已经定义的对象，从而优化内存占用。

PyASCIIObject 结构 *interned* 字段用于登记相应的字符串是否被驻留，*PyUnicode_CHECK_INTERNED* 宏用来检查一个字符串是否被驻留，*PyUnicode_InternInPlace* 函数执行驻留登录操作，内部通过 *Py_SETREF* 保持相同字符串引用相同对象。

字符串常量驻留状态有 3 种，SSTATE_NOT_INTERNED，SSTATE_INTERNED_MORTAL，SSTATE_INTERNED_IMMORTAL，分别表示不驻留，驻留但可删除，永久驻留。


创建一个字符串对象建议调用 *PyUnicode_New*，通过指定 maxchar 确定要采用什么编码方案，按字符最大码值 128、256、65536 等数值进行形式选择。这个方法主要是给字符串分配内存空间，字符个数通过 size 参数传入，然后根据使用使用编码文字计算具体占用内存空间大小，并且将 PyUnicode_Type 结构体配置好的 API 信息绑定到字符串对象实例上：

    obj = (PyObject *) PyObject_Malloc(struct_size + (size + 1) * char_size);

    _PyObject_Init(obj, &PyUnicode_Type) --> Py_SET_TYPE(op, typeobj) -> ob->ob_type = type

注意，因为 PyObject 结构位于 PyUnicodeObject 结构的最前头，所以两者之间可以安全地互相转换类型。

字符串对象结构的各个属性说明：

1. *length*: number of code points in the string (result of *sq_length*)
2. *interned*: interned-state (SSTATE_*) as in 3.2
3. *kind*: form of string
   00 => str is not initialized (data are in wstr)
   01 => 1 byte (Latin-1)
   10 => 2 byte (UCS-2)
   11 => 4 byte (UCS-4);
4. *compact*: the object uses one of the compact representations (implies ready)
5. *ascii*: the object uses the *PyASCIIObject* representation (implies compact and ready)
6. *ready*: the canonical representation is ready to be accessed through *PyUnicode_DATA* and *PyUnicode_GET_LENGTH*. This is set either if the object is compact, or the data pointer and length have been initialized.
7. *wstr_length*, wstr: representation in platform’s *wchar_t* (null-terminated). If *wchar_t* is 16-bit, this form may use surrogate pairs (in which cast *wstr_length* differs form length). *wstr_length* differs from length only if there are surrogate pairs in the representation.
8. *utf8_length*, utf8: UTF-8 representation (null-terminated).
9. *data*: shortest-form representation of the unicode string. The string is null-terminated (in its respective representation).

PyUnicodeObject String Sequences

                                   wstr (Latin-1)
    +==========+                 +===============+
    | PyObject | <-- ob_base <-- | PyASCIIObject | <-- _base <----+
    +==========+                 +===============+                |
                                                                  |
     data (USC-1/2/4)                       utf8 (UTF-8)          |
    +=================+               +========================+  |
    | PyUnicodeObject | --> _base --> | PyCompactUnicodeObject |--+
    +=================+               +========================+

```c
typedef struct {
  PyObject_HEAD
  Py_ssize_t length;
  Py_hash_t hash;
  struct {
      unsigned int interned:2; // SSTATE_INTERNED_IMMORTAL
      unsigned int kind:2;     // PyUnicode_2BYTE_KIND
      unsigned int compact:1;  // 
      unsigned int ascii:1;
      unsigned int ready:1;
  } state;
  wchar_t *wstr;
} PyASCIIObject;

typedef struct {
  PyASCIIObject _base;
  Py_ssize_t utf8_length;
  char *utf8;
  Py_ssize_t wstr_length;
} PyCompactUnicodeObject;

typedef struct {
  PyCompactUnicodeObject _base;
  union {
      void *any;
      Py_UCS1 *latin1;
      Py_UCS2 *ucs2;
      Py_UCS4 *ucs4;
  } data;
} PyUnicodeObject;
```


## ==⚡ Memory Management
- [Memory Management in Python](https://realpython.com/python-memory-management/)
- https://fasionchan.com/python-source/memory/refcnt-drawback/
- https://fasionchan.com/python-source/memory/memory-pool/

参考 Python-3.10.2 代码文档：

- [An object allocator for Python](Objects/obmalloc.c)
- [Supporting Cyclic Garbage Collection](Doc\c-api\gcsupport.rst)
- Defining Extension Types:
    - [Assorted Topics - Finalization and De-allocation](Doc\extending\newtypes.rst)
    - [Supporting cyclic garbage collection](Doc\extending\newtypes_tutorial.rst )
- The Python Standard Library 
    - [Python Runtime Services](library\python.rst)
    - [gc — Garbage Collector interface](library\gc.rst)

内存是软件系统必不可少的物理资源，精湛的内存管理技术是确保内存使用效率的关键，也是进阶高级研发的必备技巧。

内存分配器的*高效性*是内存管理的基本要求，而分配过程中产生的*内存碎片化*问题却是困扰经典内存分配器的一大难题。内存碎片直接导致系统无法高效分配内存，比如 1MB 的内存，中间如果出现 1 个字节的在碎片，可能就无法有效分配超出 512KB 的内存。

计算机内存硬件资源由操作系统负责管理，应用程序通过系统调用向操作系统申请内存。而 C/C++ 库函数则进一步将系统调用封装成通用的 内存分配器，并提供了 malloc 系列函数。

操作系统内部基于 CPU 内存分页机制实现虚拟内存管理器，以一个 page 为单位管理内存，CPU 内存管理单元 MMU 在这个过程中发挥重要作用。虚拟内存管理器 VMM 与物理内存设备直接关联，管理物理内存以及磁盘等二级存储设备。

以上是内存分配的底层操作，应用程序在此基础上建立自己的内存管理。

        Object-specific allocators
        _____   ______   ______       ________
       [ int ] [ dict ] [ list ] ... [ string ]       Python core         |
    +3 | <----- Object-specific memory -----> | <-- Non-object memory --> |
        _______________________________       |                           |
       [   Python's object allocator   ]      |                           |
    +2 | ####### Object memory ####### | <------ Internal buffers ------> |
        ______________________________________________________________    |
       [          Python's raw memory allocator (PyMem_ API)          ]   |
    +1 | <----- Python memory (under PyMem manager's control) ------> |   |
        __________________________________________________________________
       [    Underlying general-purpose allocator (ex: C library malloc)   ]
     0 | <------ Virtual memory allocated for the python process -------> |

       =========================================================================
        _______________________________________________________________________
       [                OS-specific Virtual Memory Manager (VMM)               ]
    -1 | <--- Kernel dynamic storage allocation & management (page-based) ---> |
        __________________________________   __________________________________
       [                                  ] [                                  ]
    -2 | <-- Physical memory: ROM/RAM --> | | <-- Secondary storage (swap) --> |

Python 的内存管理主要分 3 个层次：

- 第 1 层，提供统一接口 PyMem_API；
- 第 2 层，内存池，一个对象内存分配器，实现统一的对象内存分配方法 object.tp_alloc；
- 第 3 层，具体对象内存分配器，为特定对象服务，例如 float 空闲对象缓存池；


那么，Python 为什么不直接使用 malloc 系列函数，而是自己折腾一遍呢？

一个主要原因是，系统调用成本很高，应该避免或减少系统调用：

- 引入内存池，可化解对象频繁创建销毁带来的内存分配压力；
- 最大程度避免内存碎片化，提升内存利用效率；
- malloc 有很多实现版本，不同实现性能千差万别；

按内存尺寸分类管理是 Python 采用的分治法内存管理解决方案，根据内存块尺寸，将内存空间划分成不同区域，独立管理。

内存可以被划分成小、中、大三个不同尺寸的区域，对应代码中的 Arenas、Pools、Blocks 三个概念，区域中每个页都按规格划分成内存块。这样一来，小块内存的分配，不会影响大块内存区域，使其碎片化。

每个区域的碎片仍无法完全避免，但这些碎片都是可以被重新分配出去的，影响不大。此外，通过优化分配策略，碎片还可被进一步合并。以小块内存为例，新内存优先从内存页 1 分配，内存页 2 将慢慢变空，最终将被整体回收。

Python 虚拟机内部，时刻有对象创建、销毁，这引发频繁的内存申请、释放动作。这类内存尺寸一般不大，但分配、释放频率非常高，因此 Python 专门设计 内存池 对此进行优化。

那么，什么尺寸的内存会使用内存池呢？

Python 以 *SMALL_REQUEST_THRESHOLD* 指定字节为限，小于 512 的内存分配会被内存池接管，512 以上，直接调动 malloc 函数动态分配。

Python 内存池分类以 8 字节为梯度，将内存块分为：8、16、24 ... 512 字节，总共 64 种粒度。

     * For small requests we have the following table:
     *
     * Request in bytes     Size of allocated block      Size class idx
     * ----------------------------------------------------------------
     *        1-8                     8                       0
     *        9-16                   16                       1
     *       17-24                   24                       2
     *       25-32                   32                       3
     *       33-40                   40                       4
     *       41-48                   48                       5
     *       49-56                   56                       6
     *       57-64                   64                       7
     *       65-72                   72                       8
     *        ...                   ...                     ...
     *      497-504                 504                      62
     *      505-512                 512                      63
     *
     *      0, SMALL_REQUEST_THRESHOLD + 1 and up: routed to the underlying
     *      allocator.

以 8 字节内存块的内存池为例，内存池由多个内存页，一般每 4K/page 构成，每个内存页划分为若干 8 字节内存块，这些 block 组成 free lists。谈论内存时，可以认为是谈论指向 block 的指针。

只要请求的内存大小不超过 8 字节，Python 都在这个内存池为其分配一块 8 字节内存，就算只申请 1 字节内存也是如此。

这种做法好处显而易见，前面提到的问题均得到解决，还带来另一个好处：内存起始地址均以计算机字为单位对齐，内存对齐可提升内存读写速度。计算机访问内存以 *word* 为单位，从早期硬件的 2 字节、4 字节，慢慢发展到现在主流的 32-bit or 64-bit 主机适用的 8 字节，以后甚至高达 16 字节。

这种方法的缺点是内存利用率成了被牺牲的因素，以 8 字节块内存池为例，最小利用 1 个字节，最大利用 8 个字节，平均利用率为 (1+8)/2/8，大约只有 56.25%。但是，考虑所有大小内存块的平均利用率，其实数值并不低，可以达到 98.65%！

Python 内存池由一个个内存块组成，基于空闲列表阵列的简单隔离存储，simple segregated storage based on array of free lists。这是一个 double-linked list，其链表节点是一个 *pool_header* 结构，用于组织当前页，并记录页中的空闲内存块。

Python 调用 malloc 申请系统内存时，每次都是以 page 为单位申请的，然后将其划分为统一尺寸的 block，通常一个内存页大小是 4K。这些对齐到 4k 的内存在 Python 中叫做 Arenas，使用 *arena_object* 结构体管理，里面容纳多个内存池。

因为最小的 block 粒度是 8 字节，其它更大的块都是以 8 字节的位数递增的：

- 只需要 *nextoffset* 指定一个偏移量就知道块的大小；
- 而 *maxnextoffset* 指向最后一个 block 地址；
- 而 *szidx* 是 block 粒度的编号 Size class idx；
- 而 *freeblock* 是当头空闲 block 的地址；

每个内存池都只有三种状态：

- empty 完全空闲，内部所有内存块都是空闲的，没有任何块已被分配；
- used 部分使用，内部内存块部分已被分配，但还有另一部分是空闲的；
- full 完全用满，内部所有内存块都已被分配，没有任何空闲块，因此 freeblock 为 NULL ；

那么在用的内存池会添加到 *usedpools* 列表中，Python 使用内存时，会先检查是否有可用的内存池，如果没有就申请新的内存空间。

注意指针 *freeblock*，这是一个单向链表的头地址，参考代码注解 Block Management。换句话说，一个可放置数据的位置列表。如果需要超过可用的空闲块，分配器将在未分配池中获得一些块。

随着内存管理器释放内存块，这些空闲 block 被添加到 *freeblock* 列表的前面，实际列表可能不是连续的内存块。

Arenas Manager 部分，Arenas 本身没有内存池那样明确的状态，使用到 3 个链表：

首先，`arenas` 是一个向量，保存所有 *arena_object*，无论是否在使用，或未分配内存。这里面的 arena 对象，根据其使用状态，使用 *unused_arena_objects* 和 *usable_arenas* 进行管理。

管理未使用内存的 *unused_arena_objects*，单向链接，这里保存未分配内存的 arena 对象。在 *new_arena()* 方法中，将内存划给对象，并从列表的顶部移除，在 *PyObject_Free()* 方法中，当 arena 为 empty 时，arena 对象被推到列表的顶部。关键点：arena_object.address 地址成员为 0，malloc 分配失败时这个地址也为 0。

使用中内存的管理在 *usable_arenas* 双向链接中，这里的 *arena_object* 对象分配了相应的内存，有可用的内存池。

该列表按 *nfreepools* 成员的升序排序，这个字段指示完全空闲内存池的数量。这意味着下一次分配将来自一个内存使用率很高的 arena，这给了几乎空荡荡的 arena 一个释放并返回给系统的机会。这在测试统计中，可以大大增加释放的 arena 的数量。

```cpp
/* When you say memory, my mind reasons in terms of (pointers to) blocks */
typedef uint8_t block;

/* Pool for small blocks. */
struct pool_header {
    union { block *_padding;
            uint count; } ref;          /* number of allocated blocks    */
    block *freeblock;                   /* pool's free list head         */
    struct pool_header *nextpool;       /* next pool of this size class  */
    struct pool_header *prevpool;       /* previous pool       ""        */
    uint arenaindex;                    /* index into arenas of base adr */
    uint szidx;                         /* block size class index        */
    uint nextoffset;                    /* bytes to virgin block         */
    uint maxnextoffset;                 /* largest valid nextoffset      */
};

/* Record keeping for arenas. */
struct arena_object {
    /* The address of the arena, as returned by malloc.  Note that 0
     * will never be returned by a successful malloc, and is used
     * here to mark an arena_object that doesn't correspond to an
     * allocated arena.
     */
    uintptr_t address;

    /* Pool-aligned pointer to the next pool to be carved off. */
    block* pool_address;

    /* The number of available pools in the arena:  free pools + never-
     * allocated pools.
     */
    uint nfreepools;

    /* The total number of pools in the arena, whether or not available. */
    uint ntotalpools;

    /* Singly-linked list of available pools. */
    struct pool_header* freepools;

    /* Whenever this arena_object is not associated with an allocated
     * arena, the nextarena member is used to link all unassociated
     * arena_objects in the singly-linked `unused_arena_objects` list.
     * The prevarena member is unused in this case.
     *
     * When this arena_object is associated with an allocated arena
     * with at least one available pool, both members are used in the
     * doubly-linked `usable_arenas` list, which is maintained in
     * increasing order of `nfreepools` values.
     *
     * Else this arena_object is associated with an allocated arena
     * all of whose pools are in use.  `nextarena` and `prevarena`
     * are both meaningless in this case.
     */
    struct arena_object* nextarena;
    struct arena_object* prevarena;
};
```

## ==⚡ Inside Python - Garbage Collection (GC)
- [Garbage Collection for Python](http://arctrix.com/nas/python/gc/)
- [Design of CPython’s Garbage Collector](https://devguide.python.org/garbage_collector/)
- [PyPy Goals and Architecture Overview](https://doc.pypy.org/en/latest/architecture.html)
- [Python object reference graphs with graphviz](https://pypi.org/project/objgraph/)
- [`weakref` - Weak references](library\weakref.rst)
- [Weak Reference Objects](c-api\weakref.rst)
- [Reference Cycle Garbage Collection](Modules/gcmodule.c)
- https://fasionchan.com/python-source/memory/gc/

内存管理和内存回收技术紧密联系，为提高内存分配效率，Python 内部做了很多殚心竭虑的优化，从中我们可以获得一些启发。

内置垃圾回收机制是现代高级编程语言的基本特性，和 C/C++ 语言的手动管理内存不同，自动垃圾回收替程序员担起内存管理的重任，极大地提高了生产力。

常见垃圾回收方法都有哪些呢？

- Reference Count *引用计数法*：对象记录引用次数，引用次数降为 0 时回收；
- Mark-Sweep *标记-清除法*：从根集合出发，遍历能访问到的对象并标记，将所有未标记的对象清除；
- Copying  *复制法*：内存划分为大小相同的两块，一块用完后启用另一块并将存活的对象拷贝过去，原来那块则被整体回收；
- Mark-Compact *标记*-整理法：
- Generational-Collection *分代回收法*：根据存活时间将对象分为若干代，并按照特征采用最适合的回收策略，如新生代和老生代；

引用计数可以说是最简单的垃圾回收方法，它能够在第一时间回收不再需要的对象，而且不会导致程序长时间停顿。但引用计数存在一个致命缺陷，无法解决循环引用问题 Cyclic Reference。

Python 是如何解决循环引用的？

- 手动解除：很好理解，就是在合适的时机，解除引用关系。
- 使用弱引用 C-API 及标准库 weakref，它旨在使用弱引用指针解决循环引用问题。

C/C++ 标准库提供了 `weak_ptr<T>` 弱指针，可以帮助 shared_ptr 智能指针避免循环引用问题。

Python 内部采用引用计数法，为每个对象维护引用次数，并据此回收不再需要的垃圾对象。由于引用计数法存在重大缺陷，循环引用时有内存泄露风险，因此 Python 还采用 标记清除法 来回收存在循环引用的垃圾对象。此外，为了提高垃圾回收( GC )效率，Python 还引入了 分代回收机制 。

Python 为对象分配内存时，调用位于 (gcmodule.c) 源文件的 `_PyObject_GC_Alloc` 函数，会在对象头部之前预留了一些内存空间，以便垃圾回收模块用链表将它们跟踪起来。

Python 程序启动后，内部可能会创建大量对象。如果每次执行标记清除法时，都需要遍历所有对象，多半会影响程序性能。为此，Python 引入分代回收机制，将对象分为若干 generation，每次只处理某个代中的对象，因此 GC 卡顿时间更短。

考察对象的生命周期，有一个显著统计学特征：一个对象存活的时间越长，它下一刻被释放的概率就越低。例如在函数中创建的一些临时对象，用完即刻释放，而定义为全局变量的对象则极少释放。因此，根据对象存活时间，对它们进行划分就是一个不错的选择。

Python 采用引用计数器作为垃圾收集机制，通过 getrefcount 方法可以查看对象的引用计数器的值：

```py
import sys
item = [-2, -1, 0, 1, 2, "it"]
ref2 = item

print(f'''item: {sys.getrefcount(item)}''')
for it in item:
    print(f'''{it:>4}: {sys.getrefcount(it)}''')

del ref2
print(f'''item: {sys.getrefcount(item)}''')

'''Output:
item: 3
  -2: 7
  -1: 32
   0: 165
   1: 87
   2: 78
  it: 21
item: 2
```

因为对象创建时就有 1 次引用记录，传入 getrefcount 函数时又增加一次，所以在打印值中会多 1 次引用记录。

Python 启动时会生成一个小整形数值对象缓存 small_ints [-5, 256] 这些数值会缓存下来，也就是创建和缓存一样的数值引用的还是同一个数值对象，这也就是为何 0 值出现么多的引用。使用 is 运算符可以判断两个等值的数值，就是引用同一个对象。但是，对于等什的字面常量，它们无论什么值，都是同一个对象引用，当它们被修改后，即是值相等也不是引用同一个字面量对象。

    static PyLongObject small_ints[NSMALLNEGINTS + NSMALLPOSINTS]

每个创建一个数值对象，

引用计数机制，垃圾回收机制的一个挑战是处理循环引用问题，例如，以下 container 将自身添加到列表中，导致循环引用自己：

```py
>>> container = []
>>> container.append(container)
>>> sys.getrefcount(container)
3
>>> del container
```

Python 的 Cyclic Garbage Collector (GC) 实现中，通过在 PyObject 结构前面添加 *ob_next* 和 *ob_prev* 两个字段来实现一个双向链表，以方便对引用进行查询，这部分额外添加的字段就是 PyGC_Head。因为 PyGC_Head 位于 PyObject 结构开始位置，所以 PyObject 可以直接转换为 PyGC_Head 类型。

                  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ \
                  |                    *_gc_next                  | |
                  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ | PyGC_Head
                  |                    *_gc_prev                  | |
    object -----> +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ /
                  |                    ob_refcnt                  | \
                  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ | PyObject_HEAD
                  |                    *ob_type                   | |
                  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ /
                  |                      ...                      |

```c
// Python-3.10.2\include\internal\pycore_gc.h
/* GC information is stored BEFORE the object structure. */
typedef struct {
    // Pointer to next object in the list.
    // 0 means the object is not tracked
    uintptr_t _gc_next;

    // Pointer to previous object in the list.
    // Lowest two bits are used for flags documented later.
    uintptr_t _gc_prev;
} PyGC_Head;

// Python-3.10.2\Include\object.h
#ifdef Py_TRACE_REFS
/* Define pointers to support a doubly-linked list of all live heap objects. */
#define _PyObject_HEAD_EXTRA            \
    struct _object *_ob_next;           \
    struct _object *_ob_prev;

#define _PyObject_EXTRA_INIT 0, 0,

#else
#  define _PyObject_HEAD_EXTRA
#  define _PyObject_EXTRA_INIT
#endif
```

以下 service.py 例子是一个存在内存使用错误的 API 服务，cache 只入不出，不算是泄露问题，解决方法是弱引用 (weakref.rst)。解决内存泄露问题，首先需要确认问题的存在性以及严重程度。程序它占用了多少内存？内存增长速度快吗？有哪些方法测量内存呢？

这是一个基于 fastapi 框架编写的 API 服务，它只实现了一个接口：根据用户 ID 获取用户信息。API 服务由 uvicorn 启动，它是一个性能非常优秀的 ASGI 服务器。

为减少数据库访问频率，程序将数据库返回的用户数据，以用户 ID 为索引，缓存在 cache 字典内存中。注意到，演示服务直接使用 faker 随机生成用户数据，模拟数据库查询，以此消除数据库依赖。

```py
import uvicorn

from fastapi import FastAPI
from faker import Faker

from pyconsole import start_console_server

faker = Faker()
cache = {}

app = FastAPI()

async def fetch_user_from_database(user_id):
    return {
        'user_id': faker.sha256() if user_id == 'random' else user_id,
        'name': faker.name(),
        'email': faker.email(),
        'address': faker.address(),
        'desc': faker.text(),
    }

async def get_user(user_id):
    data = cache.get(user_id)
    if data is not None:
        return data

    data = await fetch_user_from_database(user_id)
    cache[data['user_id']] = data

    return data

@app.get('/users/{user_id}')
async def retrieve_user(user_id):
    return await get_user(user_id)

if __name__ == '__main__':
    start_console_server()
    uvicorn.run(app)
```

服务启动后，即可通过 8000 端口访问用户信息接口，用户 ID 任意指定：

    $ curl http://127.0.0.1:8000/users/bef76936c7d22e
    $ curl http://127.0.0.1:8000/users/random


### ===🗝 Py_IncRef & Py_DecRef

CPytyon 程序计数器机制使用的增、减引用计数方法定义在 Python310\include\object.h，以下片段包含调试用的代码，过滤掉后就是在对实例对象进行 op->ob_refcnt++ 或 op->ob_refcnt-- 操作。

当减少计数变量的值为 0 时，执行清理 `_Py_Dealloc(op)`，回收已经分配给对象实例的内存。

```c
#ifdef Py_TRACE_REFS
/* Py_TRACE_REFS is such major surgery that we call external routines. */
PyAPI_FUNC(void) _Py_ForgetReference(PyObject *);
#endif

/* Cast argument to PyObject* type. */
#define _PyObject_CAST(op) ((PyObject*)(op))
#define _PyObject_CAST_CONST(op) ((const PyObject*)(op))
// ...

static inline Py_ssize_t _Py_REFCNT(const PyObject *ob) {
    return ob->ob_refcnt;
}
#define Py_REFCNT(ob) _Py_REFCNT(_PyObject_CAST_CONST(ob))

PyAPI_FUNC(void) _Py_Dealloc(PyObject *);

/*
These are provided as conveniences to Python runtime embedders, so that
they can have object code that is not dependent on Python compilation flags.
*/
PyAPI_FUNC(void) Py_IncRef(PyObject *);
PyAPI_FUNC(void) Py_DecRef(PyObject *);

// Similar to Py_IncRef() and Py_DecRef() but the argument must be non-NULL.
// Private functions used by Py_INCREF() and Py_DECREF().
PyAPI_FUNC(void) _Py_IncRef(PyObject *);
PyAPI_FUNC(void) _Py_DecRef(PyObject *);

static inline void _Py_INCREF(PyObject *op)
{
#if defined(Py_REF_DEBUG) && defined(Py_LIMITED_API) && Py_LIMITED_API+0 >= 0x030A0000
    // Stable ABI for Python 3.10 built in debug mode.
    _Py_IncRef(op);
#else
    // Non-limited C API and limited C API for Python 3.9 and older access
    // directly PyObject.ob_refcnt.
#ifdef Py_REF_DEBUG
    _Py_RefTotal++;
#endif
    op->ob_refcnt++;
#endif
}
#define Py_INCREF(op) _Py_INCREF(_PyObject_CAST(op))

static inline void _Py_DECREF(
#if defined(Py_REF_DEBUG) && !(defined(Py_LIMITED_API) && Py_LIMITED_API+0 >= 0x030A0000)
    const char *filename, int lineno,
#endif
    PyObject *op)
{
#if defined(Py_REF_DEBUG) && defined(Py_LIMITED_API) && Py_LIMITED_API+0 >= 0x030A0000
    // Stable ABI for Python 3.10 built in debug mode.
    _Py_DecRef(op);
#else
    // Non-limited C API and limited C API for Python 3.9 and older access
    // directly PyObject.ob_refcnt.
#ifdef Py_REF_DEBUG
    _Py_RefTotal--;
#endif
    if (--op->ob_refcnt != 0) {
#ifdef Py_REF_DEBUG
        if (op->ob_refcnt < 0) {
            _Py_NegativeRefcount(filename, lineno, op);
        }
#endif
    }
    else {
        _Py_Dealloc(op);
    }
#endif
}
#if defined(Py_REF_DEBUG) && !(defined(Py_LIMITED_API) && Py_LIMITED_API+0 >= 0x030A0000)
#  define Py_DECREF(op) _Py_DECREF(__FILE__, __LINE__, _PyObject_CAST(op))
#else
#  define Py_DECREF(op) _Py_DECREF(_PyObject_CAST(op))
#endif
```

Python-3.10.2\Objects\object.c 关联部分：

```c
void
Py_IncRef(PyObject *o)
{
    Py_XINCREF(o);
}

void
Py_DecRef(PyObject *o)
{
    Py_XDECREF(o);
}

void
_Py_IncRef(PyObject *o)
{
    Py_INCREF(o);
}

void
_Py_DecRef(PyObject *o)
{
    Py_DECREF(o);
}
```

完全销毁引用，执行 `_Py_Dealloc` 收回已分配的内存：

```c
void
_Py_Dealloc(PyObject *op)
{
    destructor dealloc = Py_TYPE(op)->tp_dealloc;
#ifdef Py_TRACE_REFS
    _Py_ForgetReference(op);
#endif
    (*dealloc)(op);
}


#ifdef Py_TRACE_REFS
void
_Py_ForgetReference(PyObject *op)
{
    if (Py_REFCNT(op) < 0) {
        _PyObject_ASSERT_FAILED_MSG(op, "negative refcnt");
    }

    if (op == &refchain ||
        op->_ob_prev->_ob_next != op || op->_ob_next->_ob_prev != op)
    {
        _PyObject_ASSERT_FAILED_MSG(op, "invalid object chain");
    }

#ifdef SLOW_UNREF_CHECK
    PyObject *p;
    for (p = refchain._ob_next; p != &refchain; p = p->_ob_next) {
        if (p == op) {
            break;
        }
    }
    if (p == &refchain) {
        /* Not found */
        _PyObject_ASSERT_FAILED_MSG(op,
                                    "object not found in the objects list");
    }
#endif

    op->_ob_next->_ob_prev = op->_ob_prev;
    op->_ob_prev->_ob_next = op->_ob_next;
    op->_ob_next = op->_ob_prev = NULL;
}
```

