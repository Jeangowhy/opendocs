集合与逻辑语言基本概念
-------------------------------------------------------------------------------

   | 形式语言与自动机 同济大学 | https://www.bilibili.com/video/BV1Zg411T7ki/
   | 形式语言与自动机 哈工大 | https://www.bilibili.com/video/BV1oE4116794/
   | 形式语言与自动机 哈工大 课件 1.2 基础知识 | https://pan.baidu.com/s/1TKBcdFk2TR5UC7JQSwc-yg?pwd=abxq

   .. Note:: 电子文档的数学公式处理

      此文档（RST，reStructured）中使用的数学公式语法可参考 `LaTeX syntax for mathematics`_。
      使用 Draw.io 开源绘图工具也可以非常方便地编辑数学公式，只需打开 `Mathematical typesetting`_
      选项就可以输入数学公式，支持三种常用语法格式：

      *  AsciiMath between \`, for example: `a^2+b^2 = c^2`
      *  LaTeX between $$, for example: $$\sqrt{3×-1}+(1+x)^2$$
      *  Inline LaTeX between \( and \), for example: \(\sqrt{3×-1}+(1+x)^2\)

      如果从 VS Code 复制数学公式并粘贴到 Draw.io 中，例如以下公式，因为 VS Code 使用的是基于
      Web 的渲染技术，所以复制的是 HTML 代码，直接粘贴到 Draw.io 会因为 HTML 标记导致公式不被
      识别。此时，可以双击 Text 文本区后打开其属性面板（Text 属性面板），通过打开 HTML 代码模式，
      即 `</>` 图标对应的按钮，此时粘贴就可以解除剪切板中的 HTML 标记影响。

      .. code::

         $$ x \cdot y = \begin{cases} 
                        x              &y= \varepsilon \cr 
                        (x \cdot z)a   &y=za 
                        \end{cases} $$

      .. Math::

         $$ x \cdot y = \begin{cases} x&y= \varepsilon \\  \\ (x \cdot z)a \ &y=za \end{cases} $$

.. _Mathematical typesetting: https://www.drawio.com/doc/faq/math-typesetting
.. _LaTeX syntax for mathematics: https://docutils.sourceforge.io/docs/ref/rst/mathematics.html


   形式语言与集合论基本概念说明如下：

   1. 字母表：符号（字符）的非空有穷集。例如：

      .. Math:: & Σ_1 = \{0, 1 \}               \\
                & Σ_2 = \{a, b, ..., z \}       \\
                & Σ_3 = \{x | x 是一个汉字 \}

   2. 字符串：由某字母表中符号组成的有穷序列。例如：

      若 ∑₁ = {0, 1}，那么 0, 1, 00, 111001 等等都为 ∑₁ 上的字符串；
      若 ∑₂ = { a, b, ..., z }，那么 ab，xkcd 乖乖都为 ∑₂ 上的字符串；

   3. 空字符串：记为 ε，有 0 个字符的串。任意字母表 ∑ 都有 ε ∉ ∑，空串不属于任意字符集。
      空集 Ø = {}，是不包含任何元素的集合。{ε} 是任意一个符号串集合的 0 次幂，表示一个
      由空字组成的集合。符号使用的一般约定：

      | ● 字母表使用大定希腊字母表示：∑, Γ, …
      | ● 字符使用单个小字字母表示：a, b, c, ...
      | ● 字符串使用多个小写字母表示：…, w, x, y, z
      | ● 集合使用大写字母表示：A, B, C, …

   4. 字符串的长度：字符串中符号所占位置的个数，记为 \|□\|。若字母表为 ∑，可递归定义为：

      .. math:: 

         |ω| = \begin{cases} 
                     0  \quad\quad\quad  \text{ w = ε  } \\
                     |x|+ 1  \quad       \text{ w = xa }  
               \end{cases}

      其中 a ∈ ∑，w 和 x 是 ∑ 中字符组成的字符串。

   5. 字符串 x 和 y 的连接：将首尾相接得到新字符串的运算，记为 x·y 或 xy。同样，可递归定义为

      .. math:: 

         x \cdot y = \begin{cases}
                     x              &  y= \varepsilon \\
                     (x \cdot z)a   &  y=za
                     \end{cases}

      其中 a ∈ ∑，且 x、y、z  都是字符串。对任何字符串 x，有 ε.ε⋅x = x⋅ε = x。
      连接运算的符号 “.” 一般省略。

   6. 字符串 x 的 n 次幂 (n ≥ 0)，递归定义为：

      .. math:: 

         x^n = \begin{cases} 
               \varepsilon       &  n=0 \\ 
               x^{n-1}x          &  n>0 
               \end{cases}

      .. $$x^n = \begin{cases} \varepsilon &n=0 \cr x^{n-1}x&n>0 \end{cases}$$

      例如，若 ∑ = {a, b}，那么：

      .. math:: 

         (ba)^2 &= (ba)^1 ba     &    ba^2 &= ba^1 a         \\
                &= (ba)^0 baba   &         &= ba^0 aa        \\
                &= εbaba         &         &= bsaa           \\
                &= baba          &         &= baa

   7. 集合 A 和 B 的连接，记为 A·B 或 AB，定义为：

      .. math::  A \cdot B = { w | w = x \cdot y, x \in A \ 且 \ y \in B}

   8. 集合 A 的 n 次幂 (n≥0)，递归定义为：

      .. math::  A^n =  \begin{cases}
                        {ε}      &  n = 0 \\
                        A^{n-1}  &  n >= 1
                        \end{cases}

      那么，若 ∑ 为字母表，则 :math:`∑^n` 表示为 ∑ 集合上长度为 n 的字符串集合。
      若有字母表 ∑ = {0,1}，则有：

      .. math:: & ∑^0 = {ε},              \\
                & ∑^1 = {0,1},            \\
                & ∑^2 = {00,01,10,11},    \\
                & ∑^3 = {000,001,010,011,100,101,110,111},…

   9. 克林闭包 (Kleene Closure) :math:`∑^*`：

      .. math:: \sum^{ \ast } = \bigcup_{i=0}^{ \infty } \sum ^{i}

      克林闭包（或称克林星、克林算子）是一种一元运算，可以是对字符串集或符号或字符集的运算。
      它被广泛用于正则表达式，斯蒂芬·克莱恩（Stephen Kleene）引入它来描述自动机的上下文，
      它在此意味着“零次或多次重复”。

      克林闭包经常推广到任何幺半群 (M,○)，即一个集合 M 和在 M 上的二元运算 ○ 符合以下运算律：

      *  封闭性： :math:`∀a,b \in M : a \circ b \in M`
      *  结合律： :math:`∀a,b,c \in M : (a \circ b) \circ c = a \circ (b \circ c)`
      *  单位元： :math:`∃ε \in M : ∀a \in M : a \circ ε = a = ε \circ a`

      幺半群，是指在抽象代数此一数学分支中，一个带有可结合二元运算（圆圈表示）和单位元的代数结构。

      封闭性，即闭包 (Closure)。数学中，若对集合的某个元素进行一种运算，结果仍然是这个集合的元素，
      则该集合被称为在这个运算下闭合。例如，实数在减法下闭合，自然数不行：3 − 7 结果仍然是实数。

      结合律 (associative laws) 是在数学中二元运算可以有的一个性质，意指在一个包含有二个以上
      的可结合运算子的表示式，只要算子的位置没有改变，其运算的顺序就不会对运算出来的值有影响。

      单位元 (Identity Element) 是集合里的一种特别的元，与该集合里的运算有关。当它和其他元素
      结合时，并不会改变那些元素。单位元也叫幺元（么元）。

      逻辑符号：∀ 是全称量词，∃ 是存在量词。∀（倒写的A）意思是：“对于所有”或“对每一个”。它用于
      描述一个命题对某一范围内的所有元素都成立。∃（反写的E）意思是：“存在”或“至少有一个”。它用于
      指出在某一范围内至少存在一个元素使得某命题成立。两个符号对应的 LaTeX 语法为 `\forall` 和
      `\exists`。

   #. 正闭包 (Positive Closure) :math:`∑^+`：

      .. math:: \sum^{+} = \bigcup_{i=1}^{ \infty } \sum ^{i}

      显然，

      .. math:: \sum^{ \ast } = \sum^{+} ∪ \{ \varepsilon \} 

   #. 语言，概念定义：

      语言：若 ∑ 为字母表，且 :math:`\forall L \subseteq \sum^{ \ast }`，则 L 称为字母表 ∑ 上的语言。

      | ● 自然语言，程序设计语言等。
      | ● {0ⁿ 1ⁿ | n≥0}
      | ● The set of strings of 0's and 1's with an equal number of each:
        {ε, 01, 10, 0011, 0101, 1100, …}
      | ● ∅, {ε} 和 :math:`∑^*` 分别都是任意字母表 ∑ 上的语言，注意 Φ ≠ {ε}。

      句子：设 ∑ 是一个字母表，:math:`∀x ∈ ∑^*`，x 称为字母表 ∑ 上的一个句子 (sentence)，
      ε 叫做 ∑ 上的一个空句子。空串就是长度为 0 的字符串，:math:`L^0`，可以理解为程序读取到的空行（不含换行符号）。

      所谓句子，就是某一字符集合中字符串，不管句子的含义。所谓语言，就是此字符集合中所有句子的集合。

      关于语言：唯一重要的约束就是所有字母表都是有穷的。

      解释器中使用单字 (Token) 符号来表达待处理的代码串，比如 C 语言的 if while 这些关键字就是 Token。
      各种数值表达形式也属性 Token 的不同形式，但是这些都 Token 可以归为一类，就可以给这类 Token 起个名称，
      词法记号名（Token Name），而代码串中具体的 Token 称为词法单元。比如这些数值形式称为 NumberTokens。
      同样，也可以给各种运算符号起名为 Operators。在计算机语言编译器中，主要是处理上下文无关法，它的子集是正则语言。
      在实现词法分析器时，通常使用更简单的正规式，即正则表达式（regular expression）语法规则来描述上下文无关文法。
      正规式可以由较小的正规式按照特定规则递归地构建，每个正规式 r 定义（表示）一个简单的语言，记为 L(r)。

   #. Formal Grammars 形式语言文法

      | Formal Grammars - Handout written by Maggie Johnson and Julie Zelenski.
      | https://suif.stanford.edu/dragonbook/lecture-notes/Stanford-CS143/06-Formal-Grammars.pdf
      | 编译器紫龙书相关课程 Lecture Notes 精选 https://suif.stanford.edu/dragonbook/lecture-notes.html

      **What is a grammar?**

      A grammar is a powerful tool for describing and analyzing languages. It is a set of rules
      by which valid sentences in a language are constructed. Here’s a trivial example of
      English grammar::

         sentence     –> <subject> <verb-phrase> <object>
         subject      –> This | Computers | I
         verb-phrase  –> <adverb> <verb> | <verb>
         adverb       –> never
         verb         –> is | run | am | tell
         object       –> the <noun> | a <noun> | <noun>
         noun         –> university | world | cheese | lies

      Using the above rules or productions, we can derive simple sentences such as these::

         This is a university.
         Computers run the world.
         I am the cheese.
         I never tell lies.

      Here is a leftmost derivation of the first sentence using these productions.
      ::

         sentence –> <subject> <verb-phrase> <object>
                  –> This <verb-phrase> <object>
                  –> This <verb> <object>
                  –> This is <object>
                  –> This is a <noun>
                  –> This is a university

      In addition to several reasonable sentences, we can also derive nonsense like "Computers
      run cheese" and "This am a lies". These sentences don't make semantic sense, but they
      are syntactically correct because they are of the sequence of subject, verb-phrase, and
      object. Formal grammars are a tool for syntax, not semantics. We worry about
      semantics at a later point in the compiling process. In the syntax analysis phase, we
      verify structure, not meaning. 

   #. 自动机理论中的典型问题

      判断给定的字符串 :math:`w` 是否属于某个具体的语言 L，

      .. math::  w \in L?

      | ● 任何所谓问题，都可以转为语言成员性的问题。
      | ● 语言和问题其实是相同的东西。

   #. 形式化证明：演绎法、归纳法和反证法

      例 1. 若 x 和 y 是 ∑ 上的字符串，请证明 `|xy| = |x| + |y|`。
      ::

         证明： 通过对 |y| 的归纳来证明
   
         ❶ 基础: 当 |y| = 0，即 y = ε

         |xε|  = |x|             连接的定义
               = |x| + |ε|       长度的定义

         ❷ 递推: 假设 |y| = n (n≥0) 时命题成立，那么当 |y| = n+1，即 y = wa

         |x(wa)| = |(xw)a|       连接的定义
                 = |xω| + 1      长度的定义
                 = |x| + |w|+1   归纳假设
                 = |x| + |wa|    长度的定义                    ■

      续例 1. 若 x 和 y 是 ∑ 上的字符串，请证明 `|xy| = |x|+|y|`。
      ::

         证明：通过对 y 的归纳来证明

         ❶ 基础: y = ε 时

            |xε| = |x|           连接的定义
                 = |x| + |ε|     长度的定义

         ❷ 递推： 假设 y = w (w ∈ ∑^*) 时命题成立，那么当 y = wa 时

         |x(wa)| = |(xw)a|       连接的定义
                 = |xw| + 1      长度的定义
                 = |x| + |w| + 1 归纳假设
                 = |x| + |wa|    长度的定义                    ■

      Q.E.D. 是拉丁片语 「quod erat demonstrandum」（这被证明了）的缩写。这是希腊语
      「ὅπερ ἔδει δεῖξαι」（hoper edei deixai）的翻译。「Q.E.D.」 可以在证明的尾段写出，
      以显示证明所需的结论已经完整了。证明完毕符号，通常是实心黑色正方形 ■，有时是空心的 □，
      称之为 「墓碑」 或 「哈尔莫斯」（因保罗·哈尔莫斯最先采用此做法）。

形式语言与自动状态机
-------------------------------------------------------------------------------

   | 乔姆斯基——语言学的神！ | https://www.bilibili.com/video/BV1uw411t79T/
   | 乔姆斯基：语言最大的用途是为了思考 | https://www.bilibili.com/video/BV12S4y157TM/
   | 乔姆斯基：世界的未来 | https://www.bilibili.com/video/BV1syWhemE5R/
   | 计算语言学 冯志伟 | https://www.bilibili.com/video/BV14x41137mD/
   | Alfred V. Aho 主编 龙书 中文扫描版 | https://vscode.dev/github/HITLittleZheng/HITCS/blob/main/编译原理/编译原理教材%20第二版.pdf
   | 龙书 中文文字版 | https://url03.ctfile.com/f/24333903-976153894-2e4fe9?p=5831
   | Foundations of CS Theory CSCI-661 | https://www.cs.rit.edu/~spr/COURSES/FCT/661.html
   | Introduction to Automata Theory, Languages, and Computation | http://infolab.stanford.edu/~ullman/ialc.html
   | Discrete Structures - 09 Finite-State Automata | https://eng.libretexts.org/Under_Construction/Book%3A_Discrete_Structures/09%3A_Finite-State_Automata
   | Discrete Mathematics An Open Introduction, 4th edition - 2 Graph Theory| https://discrete.openmathbooks.org/dmoi4.html

   自动机理论、语言和计算机导论是编译原理的前置基础课程，主要涉及形式语言与自动机理论。这些理论包含
   在 Discrete Mathematics and Its Applications 或者 Discrete Structures 等相关课程。
   计算机学科重要的理论基础，有着广泛的应用，而且非常有利于培养计算机学科人员的计算思维能力：问题
   的形式化和模型化描述、抽象思维能力、逻辑思维能力。编译原理是计算机专业中最有价值的课程，它所涉
   及的抽象思维能力、逻辑思维能力会串连整个计算机理论体系。正如 Alfred V. Aho 在编译原理龙书第
   一章所说：

      Besides compilers, the principles and techniques for compiler design 
      are applicable to so many other domains that they are likely to be 
      reused many times in the career of a computer scientist. The study of 
      compiler writing touches upon programming languages, machine architecture, 
      language theory, algorithms, and software engineering.

   .. figure:: https://m.media-amazon.com/images/I/41NS1iHHKLL._SY522_.jpg
      :target: http://infolab.stanford.edu/~ullman/ialc.html
      :alt: https://www.amazon.com/Introduction-Automata-Theory-Languages-Computation/dp/0321455363

      Introduction to Automata Theory, Languages, and Computation 3rd Edition 
      by John Hopcroft, Jeffrey D. Ullman
      https://hep.tsinghua.edu.cn/~liwj/hopcroft_english.pdf

   图灵机是是计算理论模型，而计算机又是图灵机的一种实现，它本身就是计算理论中的一种自动机。计算理论
   研究的主题偏向数学理论，包括各自问题类型的研究、复杂度的研究，又与计算机工程密切相关。停机问题
   （Halting Probelm）是决定任意程序最终是会停止运行还是会无限运行下去的问题，它是一种无解问题
   （Undecidable Probelms）。Alan Turing 在 1963 年就证明，没有这样一个通用的算法存在，此
   算法在所有可能的输入参数下可以解决停机问题。

   《自动机理论、语言和计算导论》是关于形式语言、自动机理论和计算复杂性方面的经典教材，是三位理论
   计算大师的巅峰之作，本书只更新到第 3 版。书中涵盖了有穷自动机、正则表达式与语言、正则语言的性质、
   上下文无关文法、上下文无关语言、下推自动机、上下文无关语言的性质、图灵机、不可判定性，以及难解
   问题等内容。

   这些课程需要有一定高等数学基础。需要了解一点数学的发展史，学习抽象代数。之所以要将高中到大学的
   数学切分为两种不同的数学，或者说数学之所以为数学，是因为它全面涉及了抽象思维、逻辑思维。高中阶段
   的教课书中的数学本来就不应该叫估数学，应该叫做算术。高等数学（Higher Mathematics）是进入其它
   数学领域的基础课程，涵盖了函数的性质、极限、连续性、导数、微分、积分等内容。高等数学是本科学生最
   重要的基础课程之一，高等数学课程的教学质量是本科教学水平的一个重要标志。

   抽象代数（Abstract algebra）又称近世代数（Modern algebra）是现代计算机理论基础之一。抽象
   代数不再像算术那样研究 1 + 1 或者 x + y 等于多少这种初级抽象，而是研究类似 x ○ y 这样问题，
   其中的 ○ 称为二元运算符的抽象符号，x y 称为数学结构。研究各种代数结构的性质才是代数学的中心，
   至于它如何运算，结果是什么已经不是最重要的事。比如，这个二元运算符可以被定义为一个用于连接两个
   字符串的操作，设 x = “Hello”，y = “World!”，那么 x ○ y = “Hello World!”。通过这些抽象
   工具，如线性代数、范畴论、群论、环论、模论 (Module)、代数结构等等，可用于解决现代科学技术中的
   复杂计算问题。

   Haskell 就是基于数学语言的编程语言，涉及大量数学术语，对于没有数学背景的读者，可能存在读不懂
   文档的问题。并且，像笔者这样非数学专业、离开大学就冰封数学的水平，直接阅读“态射”这一概念都有困难。
   态射是范畴论的核心概念，也是 Haskell 语言的基础结构。

   Haskell Brooks Curry（哈斯凯尔·科里，1900-1982），美国数学家、逻辑学家，数理逻辑和计算机
   科学历史上里程碑式的存在，其名声不如阿兰·图灵那么响亮，其影响不如库尔特·哥德尔那么广泛，但是，
   Curry 对的人类历史的贡献完全可以和前者比肩。如果说图灵机是现代计算机程序设计语言的基本模型，
   那么可计算函数就是和图灵机等价的另一种模型。当前流行的丘奇的 λ-演算 模型，其动机就是函数式
   编程模式的兴起。而柯里的组合逻辑，作为 λ-演算 的等价，在某些方面比后者更为洗练、优雅。当今，
   有三种编程语言以他的名字命名: Haskell、Brooks 和 Curry。为了纪念他，将一个多参数函数
   转换为单参数函数序列的技术称为柯里化（Currying)。

   姜守旭（哈工大）编译原理课程中提供了一份《浅浅谈本科教学》文档，里非常详细讲解了哈尔滨工业大学
   计算机课程体系 (HIT-CS 2008) 的设计，罗列了编译原理课程的前置课程，读者可以按照其依赖关系去
   学习相应的课程。另外，姜守旭老师也是《龙书》译者之一。

   掌握形式语言、自动机理论是进入编译原理学习的前置基础，编译原理（龙书）是在语言学形式语言理论非常
   成熟的时期下编著的指导教材，因此龙书第二版后就没有再版，但是不影响它作为专业的基石教材的地位。
   编译原理有三大教材，介绍如下。另外，LLVM (Low Level Virtual Machine，底层虚拟机) 编译器
   平台开创设计了三层编译器架构，它代表了现代编译器的最高水平。创始人 Chris Lattner 毕业于波特兰
   大学的计算机科学系，具有创建和领导多个知名大型项目的经验，其中包括 LLVM、Clang、MLIR 和 CIRCT
   等编译器基础设施项目，他还带头创建了 Swift 编程语言。Chris Lattner 和 Tim Davis 共同成立
   Modular AI，他本人担任 CEO，目标是重建全球 ML 基础设施。
   | LLVM 之父 Chris Lattner：编译器的黄金时代 | https://xie.infoq.cn/article/f5c1ccfd528e8a169edbc3711

   1. Compilers: Principles,Techniques,and Tools 
      作者：Alfred V.Aho,Ravi Sethi,Jeffrey D.Ullman 
      译名：编译原理技术和工具 龙书（Dragon book）
      主页：https://suif.stanford.edu/dragonbook/

      龙书是 Alfred V. Aho 等人于 1986 年出版的，由于出版年代较早，其中包含部分过时的技术并且
      没有反映一些新的编译技术。新编的《编译原理》抛弃诸如算符优先分析等过时技术，增加面向对象编译。
      类型检查等新技术。本书深入讨论了编译器设计的重要主题，包括词法分析、语法分析、语法制导分析、
      类型检查、运行环境、中间代码生成、代码生成、代码优化等，并在最后两章中讨论了实现编译器的一些
      编程问题和几个编译器实例，每章都提供了大量的练习和参考文献。

      1977 年，Alfred V. Aho 和Jeffrey D. Ullman 出版《Principles of Compiler Design 》，
      封面是一名骑士和一只恐龙，因此第一次被人称为龙书，但因为那条龙是绿色的，所以称为绿龙书。

      1986 年升级此书并改名为 Compilers: Principles, Techniques and Tools，作者名单中增加 Ravi Sethi,
      封面依然沿用骑士和恐龙，那头龙是红色的，因此被叫做龙书二或者是红龙书。2006 年底，龙书最后一次升级，作者名单
      又增加了 Monica S. Lam，名字和版号沿用第二版，但是这次是紫色龙封面，因此叫做紫龙书。

      最新版本，增添三章节内容，使龙书地位更权威！本书全面、深入地探讨了编译器设计方面的重要主题，包括词法分析、
      语法分析、语法制导 定义和语法制导翻译、运行时刻环境、目标代码生成、代码优化技术、并行性检测以及过程
      间分析技术，并在相关章节中给出大量的实例。与上一版相比，本书进行了全面的修订，涵盖了编译器开发方面的最新进展。
      每章中都提供了大量的系统及参考文献。本书是编译原理课程方面的经典教材，内容丰富，适合作为高等院校计算机及相关
      专业本科 生及研究生的编译原理课程的教材，也是广大技术人员的极佳参考读物。

   2. Modern Compiler Implementation in C 
      作者：Andrew W.Appel, with Jens Palsberg 
      译名：现代编译原理 - C 语言实现，虎书（Tiger book） 

      虎书出版比较晚，与《编译原理》的知识点差不多，但增加了数据流分析、循环优化、内存管理等内容。
      全面讲述了现代编译器的结构、编译算法和实现方法。Andrew w．Apple “虎书”是“红蓝绿”系列之一，
      这三本书的内容基本相同，但是使用不同的语言来实现书中给出的一个编译器。本书使用的是更适合广大
      读者的 C 语言，而另外两本书分别采用 ML 语言和 Java 语言。本书的另一个特点是增加了一些其他
      编译原理教科书没有涉及的内容。前端增加了面向对象的程序设计语言、函数式程序设计语言等现代语言
      的编译实现方法，后端增加了针对现代计算机体系结构特征的一些比较成熟的优化方法。这部分内容展现
      了现代商业编译器需解决的一些关键问题，开拓了学生的视野，为学生未来进行更深入的研究奠定了基础。
      与虎书比，《编译原理》更适合国内的编译原理课程教学。

   3. Advanced Compiler Design and Implementation 
      作者：Steven S.Muchnick 
      译名：高级编译器设计与实现，鲸书（Whale book）

      鲸书是经典的编译器著作，与“龙书”齐名。书中针对现代语言和体系结构全面介绍了编译器设计与实现的
      高级论题，从编译器的基础领域中的高级问题开始，然后深入讨论了各种重要的代码优化。本书专为编译
      器专业人士和计算机专业本科生，研究生编写，在设计和实现高度优化的编译器以及确定优化的重要性和
      实现优化的最有效的方法等方面，为读者提供了非常有价值的指导。

   对于没有编程基础的读者，Aho 和 Jeff Ullman 还提供了免费的《计算机科学基础》一书，此书涉及了
   计算机科学编程基本原理，抽象思维与基础算法。
   `Foundations of Computer Science <http://infolab.stanford.edu/~ullman/focs.html>`__

   诺姆·乔姆斯基（Noam Chomsky）作为现代语言学奠基人，他对计算机语言发展作出了巨大的贡献，他在
   语言学上的研究将形式语言分类与自动状态机紧密关联起来，证明了形式语言 (Formal Language) 与
   有关限状态机的等价性。

   -  1956 年，Chomsky 从语言产生的角度定义了语言与文法；
   -  1951-1956, Kleene 提出了有穷状态自动机 (FA)，从语言识别的角度，定义了语言；
   -  1959年, Chomsky 证明了语言与自动机的等价性， 形式语言从此诞生；

   状态自动机被设计为可以接收特定形式语言的机器，Language recognition machine，符合自动机能
   接收语言的字符串才能被正确识别。所谓自动状态机，就是会自动根据输入（字符）来确定内部状态的机器，
   因此自动机也就是形式语言识别机器。

   斯蒂芬·科尔·克林（Stephen Cole Kleene）作为数学家、逻辑学家，他的递归论研究有助于奠定理论
   计算机科学的基础。师从著名的逻辑学家丘奇（Alonzo Church），并取得 Princeton University
   博士学位。克林在研究生物细胞结构中，建立了自动机，它和神经元运作机制很相似：接收信号、改变状态。
   Stephen Cole Kleene 人物志 https://mathshistory.st-andrews.ac.uk/Biographies/Kleene/

   乔姆斯基在形式语言理论上的研究得出四种不同复杂度的语言类型，形式语言文法可以生成语言，而自动状态机
   可以识别语言。比如，自动机读取一个字母符号，那么就可以认为这是一个标识符的开始，进入标识符处理模式。
   乔姆斯基结合了克林的自动机理论研究成果指导实践，不同难度的语言适用不同类型的自动机进行处理，从而产生
   四各形式语言分类。这种将不同领域研究成果加以综合提炼的能力正是乔姆斯基的伟大之处，他将自己的理论
   研究与他人的研究成果共同推向人类知识边界的新高度。

   乔姆斯基一直以来认为，自然语言中普遍存在的歧义暗示着语言主要用于引发思考，而非交流，因为歧义
   信号显然会阻碍交流。语言与思维之间的确存在着很多直觉上的联系。比如，我们很多人可能都会感觉到
   一种“内心的声音”，似乎可以阐述自己的想法。而且，善于表达的人往往也是思维清晰的人。现代神经科
   学家和认知科学家有了更先进的工具，可以对这种观点进行更严格的考量。利用功能性磁共振成像（fMRI）
   技术，找到了那些专门参与了阅读或者听到语句和段落时的脑区，可靠地识别出了语言处理网络。他们可以
   在一个人执行其他任务（比如解决数独，或者推理其他人的想法）时监测这些脑区。迄今为止，在几乎所
   有被测试过的项目中，都没有发现语言机制参与的证据。也就是说，当人们进行各种思考时，脑中的语言
   系统基本上处于沉默状态。

   20 世纪 50 年代，巴科斯范式或称巴科斯-诺姆范式 BNF（Backus Nour Form, Backus-Normal Form），
   成功描述了高级语言 Algol-60，使得形式语言在此后得到大力发展，并使得形式语言与编译原理、人工智能、
   可计算性和时序逻辑电路设计选择领域紧密联系在一起。用文法（语法）来来描述语言，是跨时代的理论成果。
   至此，形式语言文法大量用于描述计算机语言，学习编程语言的最快速有效的方法就是阅读其语言文法（Grammar）。

   Avram Noam Chomsky ( born December 7,1928) is an American linguist, philosopher,
   cognitive scientist, historian, social critic, and political activist. Sometimes
   described as "the father of modern linguistics", Chomsky is also a major figure
   in analytic philosophy, and one of the founders of the field of cognitive science.

   乔姆斯基的文法理论中，每个分类都是细分类型的超集，在计算机编程领域中使用的只有 Type 2 和 Type 3 文法。
   研究语言语法的数学和计算机科学分支叫做形式语言理论，它不致力于语言的语义研究。
   ::

      ╭────────────────────────────╮
      │ Recursively Enumerable     │
      │  ╭──────────────────────╮  │
      │  │ Context-Sensitive    │  │
      │  │  ╭────────────────╮  │  │
      │  │  │ Context-Free   │  │  │   The Chomsky Hierarchy of Grammars and Languages 
      │  │  │  ╭──────────╮  │  │  │
      │  │  │  │  Regular │  │  │  │
      │  │  │  ╭──────────╯  │  │  │
      │  │  ╭────────────────╯  │  │
      │  ╭──────────────────────╯  │
      ╰────────────────────────────╯

   乔姆斯基文法体系：

   -  Type 0 无约束文法（递归可枚举） Unrestricted grammar
   -  Type 1 上下文有关方法 CSG：Context sensitive grammar
   -  Type 2 上下文无关文法 CFG：Context free grammars
   -  Type 3 正则文法 RG：Regular grammars

   乔姆斯基在二十世纪五十年代创建了转换-生成语法（Transformational-generative grammar），
   他在 1957 年所写的《文法结构》的出版是转换-生成文法诞生的标志。简单的说，转换-生成文法理论
   研究的是人类为什么会说话以及如何了解新的句子。

   1. 生成 (Generation)：“生成”指的是构建语言结构的过程。从简单的成分开始，逐步组合它们，直到形成一个完整的句子。
   2. 转换 (Transformation)：“转换”表示在生成过程中的一系列步骤或规则，将一个语法结构转变为另一个。

   比如，定义名词短语生成规则，规则中只涉及三个元素：名词短语、限定词、名词，→ 表示替换：

   *  规则一：名词短语 NP → T + N；
   *  规则二：限定词 T → the
   *  规则三：名词 N → man

   应用这些规则就可以生成名词短语 the man。类似地，可以定义更复杂的规则以生成内容更丰富的句子。

   格语法（case grammar）是美国语言学家查尔斯·菲尔墨（Charles J. Fillmore）于1960年代末对
   转换语法进行修正而提出的一种语法分析理论。菲尔墨建议使用九个格，分别为施事格、感受格、对象格、
   工具格、来源格、目的格、场所格、时间格、路径格。例如使用格语法分析以下例句：

      “The student solved problems with a calculator in the classroom this morning”
      （这个学生今天上午在教室用计算器解决问题）

   句子中各个部分的格类型如下：

   *  solve（解决）为中心动词
   *  the student（学生）为施事格
   *  problems（问题）为对象格
   *  with a calculator（计算器）为工具格
   *  in the classroom（教室）为场所格
   *  this morning（上午）为时间格。

   Chomsky 形式文法理论中用 G 表示形式语法，将其表示为四元组：

      G = (Vn, Vt, S, P)

   其中各符号定义如下：

   - `Vn`：非终结符的有限集合，Non-Terminal，不能处于生成式的终点。在推导中起变量作用，相当于语言中的语法范畴；
   - `Vt`：终结符的有限集合，Terminal，只处于生成过程的终点，是句子中实际出现的符号，相当于单词表。
   - `S`：Vn 中的初始符号 Start Symbol，相当于语法范畴中的句子。
   - `P`：重写规则，也称为生成规则或文法产生式 Grammar Prduction。
      一般形式为 α → β，其中 α、β 都是符号串，α 至少含有一个 Vn 中的符号。

   语法 G 的不含非终结符的句子形式称为 G 生成的句子；由语法 G 生成的语言，记做 L(G)，表示由语法
   G 生成的所有句子的集合。形式语言使用数学上的集合、逻辑语言来描述，无论是状态机的内部状态还是输入，
   都使用有限集合来表示。对于一个编程语言的状态机实现，输入数据就是有限的字母（finite alphabet）
   组成的字母表或集合。

   Type 0 无约束文法，规则形式没有任何限制，也称无限制重写文法，重写规则如下：

      α → β，其中 α, β ∈ (Vn ∪ Vt)

   Type 1 重写规则如下，在上下文 α…β 中，单个非终结符 A 被重写为符号串 γ，因此是上下文相关的文法。

      αAβ → αγβ，其中 A ∈ Vn, α, β, γ ∈ (Vn ∪ Vt)，且 γ 非空

   Type 2 上下文无关文法 CFG，重写规则如下，A 重写为 α 时没有上下文限制。

      A → α，其中 A ∈ Vn, α ∈(Vn ∪ Vt)

   Type 3 正则文法 RG，重写规则如下。A → xA 是将 A → Bx 中的 B 看作空符号的一种特殊情况。
   如果把 A, B 看作不同的状态，那么由重写规则可知，由状态 A 转入状态 B 时，可生成一个终结符 x ，
   因此正则文法也称作有限状态文法。

      A → Bx 或 A → x，其中 A, B ∈ Vn, x ∈ Vt

   乔姆斯基的文法理论，每个分类都是细分类型的超集，在计算机领域中使用的只有 Type 2 和 Type 3 文法。

      (G3) ⊆ (G2) ⊆ (G1) ⊆ (G0)

   即每一个正则文法都是上下文无关文法，每一个上下文无关文法都是上下文有关文法，每一个上下文有关文法
   都是 0 型文法。

   Type 2 上下文无关文法特征是任何语言元素在任何上下文中的含义始终保持一致。事实上，多数如今的
   程序设计语言语法都以此为基础。Type 3 三型方法特征是语法中不存在递归下降结构，它的代表是基本
   正则表达式（扩展正则表达式情况略有不同）。以上两种文法构成了现今所有实用计算机程序设计语言的
   分析器理论基础，也有成熟的数据结构和算法支持：三型文法的 NFA/DFA，以及二型文法的递归下降、
   LL(x)、LR(x)、LALR(x)。


   人类的问题存在可解与不可解两种：

   -  1 + 1 等于几？  Decidable problem
   -  明天几点起床？ Undecidable Problem

   形式语言与自动机理论就是研究可计算语言和计算模型的理论。形式语言（Formal language）是数学、
   逻辑和计算机科学中用精确的数学或机器可处理的公式定义的语言。

   如语言学中语言一样，形式语言一般有两个方面: 语法和语义。专门研究语言的语法的数学和计算机科学
   分支叫做形式语言理论，它只研究语言的语法而不致力于它的语义。在形式语言理论中，形式语言是一个
   字母表上的某些有限长字符串的集合。一个形式语言可以包含无限多个字符串。

   人类日常生活中使用自然语言（Natural Language），比如汉语、英语和法语，这类语言是自然演化
   结果而非人为设计产物（虽然有人试图强加一些规则）。形式语言（Formal Language）是为了特定应
   用而人为设计的语言。例如数学家用的数字和运算符号、化学家用的分子式等。编程语言也是一种形式语言，
   是专门设计用来表达计算过程的形式语言。

   形式语言有严格的语法（Syntax）规则，例如，3+3=6 是一个语法正确的数学等式，而 3=+6$ 则不是，
   H2O 是一个正确的分子式，而 2Zz 则不是。语法规则是由关于单词符号（Token）和结构（Structure）
   的规则所组成的。Token 的概念相当于自然语言中的单词和标点、数学式中的数和运算符、化学分子式中
   的元素名和数字。关于 Token 的规则称为词法规则（Lexical），而关于语句结构的规则称为语法规则
   （Grammar）。由合乎词法、语法的语句表达的语句含义就是语义（Semantics），只有合乎语义的语句
   才能组成、生成正确的程序。

   从自然语言到形式语言、编程语言，在功能上是不断收窄的，也就是后者是前者的子集。自然语言与编程
   语言的最大区别在于：自然语言普遍存在歧义（ambiguity）。同样的文字存在的多种解释使用自然语言
   非常难以被计算机处理，而编程语言就是在语法、词法结构设计上精心排除了语句二义性的语言。

   比如自然语言说“将它搬到那边去？”，这里面的“它”就是上下文相关的概念，具体是什么取决于对话情境。
   同样的句式对应到编程语言相当于 a = b，将一个变量值赋予另一个变量，变量们都是有声明的、具体的、
   无二义的变量，它们在内存中拥有确定的地址，对应有限状态机中的确定的状态。

   在可计算性理论 Computability theory 中，把那些可证明或可解决的问题统称为 可计算问题，
   这需要构建数学模型来判定问题是否可计算，图灵给出的答案就是图灵机，Turing Machine 是计算机
   世界的理论基石。《论可计算数及其在判定性问题上的应用》论文于 1936 年发表，On Computable 
   Numbers, with an Application to the Entscheidungsproblem。

   计算理论的核心问题：计算机的基本能力和限制是什么?

   *  可计算性理论：究竟哪些问题，可通过计算解决?
   *  计算复杂性理论：解决可计算的问题， 究竟需要多少资源?
   *  形式语言与自动机理论：为了研究计算，要使用哪些计算模型?

   自动机理论 (Automata Theory) 中的自动机模型与四种乔姆斯基文法类型的对应关系如下：
   ::

      +--------------------------------------------------------------------------+
      | Grammar  Languages            Automaton          Production Rules        |
      +--------------------------------------------------------------------------+
      | Type 0   Turing Recognizable  TM                 α→β                     |
      |                               (Turing            No restrictions except  |
      |                               machines)          α contains at least one |
      |                                                  variable                |
      +--------------------------------------------------------------------------+
      | Type 1   Context-Sensitive    LBA                αAβ→αγβ                 |
      |                               (linear            α,γ,β all strings,      |
      |                               bounded            γ must be non-empty,    |
      |                               automaton)         A is a variable         |
      +--------------------------------------------------------------------------+
      | Type 2   Context-Free         PDA                A→γ                     |
      |                               (Pushdown          γ is a non-empty        |
      |                               Automata)          string,                 |
      |                                                  A is a variable         |
      +--------------------------------------------------------------------------+
      | Type 3   Regular              DFA                A→α, A→αB               |
      |                               (Deterministic     α is a terminal,        |
      |                               Finite Automaton)  A,B are variables       |
      +--------------------------------------------------------------------------+

   *  TM - Turing machines，图灵机对应递归可枚举语言 (RE)，也称为 0 型语言
   *  LBA - Linear Bounded Automata，线性有界自动机对应前后文有关语言 (CSL)，也称为 1 型语言
   *  PDA - Pushdown Automata，下推自动机，无内存但有堆栈，对应前后文无关语言(CFL)，也称为 2 型语言
   *  DFA - Deterministic Finite Automaton，有限状态机是最简单的自动机，无内存，对应正则语言 (RL)，也称为 3 型语言。

   参考资料：

   *  https://www.geeksforgeeks.org/introduction-of-finite-automata/
   *  https://www.geeksforgeeks.org/difference-between-pushdown-automata-and-finite-automata/
   *  https://www.geeksforgeeks.org/introduction-to-linear-bounded-automata-lba/
   *  https://www.geeksforgeeks.org/multitape-nondeterministic-turing-machine-simulator/
   *  https://www.geeksforgeeks.org/turing-machine-in-toc/

   有穷状态自动机（Finite Automata, FA）也称有限状态机（Finite State Machine），即机器的
   有限状态组成一个有限集合，根据状态的确定性又分为两类：

   *  不确定的有穷自动机 NFA - Nondeterministic Finate Automata。
   *  有确定有穷自动机 DFA - Deterministic Finite Automaton。

   确定性指的是一个状态到另一个状态的输入是否是确定的。NFA 和 DFA 的状态转换图为例，NFA 同一个
   符号可以标记离开同一状态的多条边，并且 e （表示一个空的串）也可以作为标记；DFA 同一个符号只能
   标记一个状态到另一个状态的一条边，即一个状态到另一个状态的边是确定的。图灵机功能虽然强大，但依然
   是属于有限状态机，和线性有界自动机一样属于 NFA。线性有界自动机是一种特殊的图灵机，是把计算限制
   在仅仅包含输入的那一段带上的图灵机，它的存储空间受输入长度的线性约束，但在这个限制内可以按任意
   方式移动读写头。因此它只有一端拥有无限内存，而图灵机拥有完全无限内存。

   灵机是一种理论计算模型，由一个无限长度的磁带、一个读写头和一个有限状态控制器组成。根据当前状态
   和磁带上的符号，它可以执行写入、移动读写头以及改变内部状态等操作。图灵机是当前最通用的计算模型，
   所有可计算的函数理论上都可以由某个图灵机来计算，这一性质被称为"图灵完备"。

   图灵完备性 Turing completness 表示为：对于两个计算机 A 和 B，如果 A 可以模拟 B，B 可以
   模拟 A，就称他们是图灵等价的。如果某个系统能够模拟图灵机，那么就称该系统是图灵完备的。迄今为止，
   人类设计的所有计算模型都是图灵机模型的实现。任何计算装置：算盘、手机、个人电脑、超级计算机等等，
   都没有超越图灵机模型的计算能力，不考虑计算速度性能，只从可计算性考虑。

   Features of Finite Automata

      | Input: Set of symbols or characters provided to the machine.
      | Output: Accept or reject based on the input pattern.
      | States of Automata: The conditions or configurations of the machine.
      | State Relation: The transitions between states.
      | Output Relation: Based on the final state, the output decision is made.

   Formal Definition of Finite Automata

      | A finite automaton can be defined as a tuple:

      | { Q, Σ, q, F, δ }, where:

      | Q: Finite set of states
      | Σ: Set of input symbols
      | q: Initial state
      | F: Set of final states
      | δ: Transition function

   Deterministic Finite Automata (DFA)
      A DFA is represented as {Q, Σ, q, F, δ}. In DFA, for each input symbol, 
      the machine transitions to one and only one state. DFA does not allow 
      any null transitions, meaning every state must have a transition defined 
      for every input symbol.

   DFA consists of 5 tuples {Q, Σ, q, F, δ}. 

      | Q : set of all states.
      | Σ : set of input symbols. ( Symbols which machine takes as input )
      | q : Initial state. ( Starting state of a machine )
      | F : set of final state.
      | δ : Transition Function, defined as δ : Q X Σ --> Q.

   NFA is similar to DFA but includes the following features:

      | It can transition to multiple states for the same input.
      | It allows null (ϵ) moves, where the machine can change states without consuming any input.

   状态图（Statechart Diagram）主要用于描述一个对象在其生存期间的动态行为，表现为一个对象所经
   历的状态序列，引起状态转移的事件（Event），以及因状态转移而伴随的动作（Action）。状态图是图论
   （graph theory）范畴内的一种图，最简单的状态图包含以下元素：

   Simplest representation is often a graph.

   *  Nodes = states.
   *  Arcs indicate state transitions.
   *  Labels on arcs tell what causes the transition.

   In C/C++, make a piece of code for each state. This code:

   1. Reads the next input.
   2. Decides on the next state.
   3. Jumps to the beginning of the code for that state.

   以正则表达式 (a|b)*abb 为例，此正则表达式表示以任意数量的 a 或 b 字符开头，并且以 abb 结束
   的字符串。下面分别是一个能识别此正则语言的 NFA 和 DFA 状态转换图：
   ::

      ╠                ↺ a
      ╠ NFA         ╭───╮      a      ╭───╮      b      ╭───╮      b      ╭───╮
      ╠ start -----→│ 0 │------------→│ 1 │------------→│ 2 │------------→│ 3 │
      ╠             ╰───╯             ╰───╯             ╰───╯             ╰───╯
      ╠                ↻ b


      ╠                ↺ b               ↻ a
      ╠ DFA         ╭───╮      a      ╭───╮      b      ╭───╮      b      ╭───╮
      ╠ start -----→│ 0 │------------→│ 1 │------------→│ 2 │------------→│ 3 │
      ╠             ╰───╯             ╰───╯             ╰───╯             ╰───╯
      ╠                                ↑ ↑       a        │                 │
      ╠                                │ ╰────────────────╯        a        │
      ╠                                ╰────────────────────────────────────╯

   DFA 从一个状态到另一个状态只有唯一的一个输入与之对应。比如从 S0 到 S1 对应的输入是 a，从
   S0 到 S0 对应的输入时 b，从 S1 到 S2 对应的输入是 b，这就是 DFA 的确定。

   NFA 从状态 0 出发对于同一个输入有两条边指向了不同的状态，即从 0 状态出发，当输入为 a 的时候
   下一个状态可以是 0 也可以是 1，这就是 NFA 的不确定。

   DFA 拥有一个无限的数据输入（有限的字符集 Σ），但这本身结构简单，无任何内存配置，只有内部状态，
   包括起、止状态，和状态转换函数可以输出的各种状态，这些状态组成 Q 集合。
   
   假设一个 DFA = { Q = {a,b,c,e}, Σ = {0,1}, q = a, F = e, δ = 如果输入 1 则循环 a、b、c。}，
   可以用以下原理图表一个 DFA 机器：
   ::

      ╠     Tape - This holds the input string
      ╠     ╭───╮╭───╮╭───╮╭───╮╭───╮╭───╮╭───╮╭───╮╭───╮
      ╠     │ 0 ││ 1 ││ 1 ││ 0 ││ 1 ││ 0 ││ 1 ││ 0 ││ 0 │ ...
      ╠     ╰───╯╰───╯╰───╯╰───╯╰───╯╰───╯╰───╯╰───╯╰───╯
      ╠                                ↑
      ╠                                │
      ╠                            ╭───────╮
      ╠                            │   a   │
      ╠                            │ c ↑ b │ DFA Control
      ╠                            │   e   │ Current state (arrow)
      ╠                            ╰───────╯

   Turing Machine was invented by Alan Turing in 1936 and it is used to accept 
   Recursive Enumerable Languages (generated by Type-0 Grammar). 

   A Turing machine is a finite automaton that can read, write, and erase symbols 
   on an infinitely long tape. The tape is divided into squares, and each square 
   contains a symbol. The Turing machine can only read one symbol at a time, and 
   it uses a set of rules (the transition function) to determine its next action 
   based on the current state and the symbol it is reading.

   A turing machine consists of a tape of infinite length on which read and writes
   operation can be performed. The tape consists of infinite cells on which each 
   cell either contains input symbol or a special symbol called blank. It also 
   consists of a head pointer which points to cell currently being read and it 
   can move in both directions.

   Figure: Turing Machine
   ::

      ┌──────────────────────────────────────────────────────────┐
      │ Turing Machine (TM)                                      │
      │                      Infinite Tape                       │
      │    ┌────┐ ┌────┐ ┌─────┐ ┌────┐ ┌────┐ ┌────┐ ┌─────┐    │
      │    │ a1 │-│ a2 │-│ ... │-│ an │-│  b │-│  b │-│ ... │    │
      │    └────┘ └────┘ └─────┘ └────┘ └────┘ └────┘ └─────┘    │
      │          Read/Write Head  ←◙→  can move left or right    │
      │                            │                             │
      │                ┌───────────────────────┐                 │
      │                │ Finite Control with Q │                 │
      │                └───────────────────────┘                 │
      └──────────────────────────────────────────────────────────┘

   A TM is expressed as a 7-tuple (Q, T, B, ∑, δ, q0, F) where: 

      | Q is a finite set of states
      | T is the tape alphabet (symbols which can be written on Tape)
      | B is blank symbol (every cell is filled with B except input alphabet initially)
      | ∑ is the input alphabet (symbols which are part of input alphabet)
      | δ is a transition function which maps Q × T → Q × T × {L,R}. 
        Depending on its present state and present tape alphabet (pointed by head pointer), 
        it will move to new state, change the tape symbol (may or may not) and move head 
        pointer to either left or right.
      | q0 is the initial state
      | F is the set of final states. If any state of F is reached, input string is accepted.

   Let us construct a turing machine for :math:`L={0^n 1^n|n>=1}` 

      | Q = {q0,q1,q2,q3} where q0 is initial state.
      | T = {0,1,X,Y,B} where B represents blank.
      | ∑ = {0,1}
      | F = {q3}


   A Linear Bounded Automaton (LBA) is similar to Turing Machine with some 
   properties stated below:

      | Turing Machine with Non-deterministic logic,
      | Turing Machine with Multi-track, and
      | Turing Machine with a bounded finite length of the tape.

   LBA can be defined with eight tuples (elements that help to design automata) as: 

      | Tuples Used in LBA : 

      | M = (Q , T , E , q0 , ML , MR , S , F), 

      | where,  
      | Q -> A finite set of transition states
      | T -> Tape alphabet
      | E -> Input alphabet
      | q0 -> Initial state
      | ML -> Left bound of tape
      | MR -> Right bound of tape
      | S -> Transition Function
      | F -> A finite set of final states 

   Diagrammatic Representation of LBA ::

      ┌──────────────────────────────────────────────────────────┐
      │ Linear Bounded Automaton (LBA)                           │
      │                                                          │
      │ Left bound of tape                   Right bound of tape │
      │     ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐     │
      │ ╭──>│ ML │-│    │-│    │-│    │-│    │-│    │-│ MR │<──╮ │
      │ │   └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘   │ │
      │ │     ╰────────────────────┬─────────────────────╯     │ │
      │ │                                                      │ │
      │ Left Ended Marker     Working Space   Right Ended Marker │
      │                                                          │
      └──────────────────────────────────────────────────────────┘

   Examples: Languages that form LBA with tape as shown above,

      | L = {an! | n >= 0}
      | L = {wn | w from {a, b}+, n >= 1}
      | L = {wwwR | w from {a, b}+}

   Facts :

   Suppose that a given LBA M has
      | --> q states,
      | --> m characters within the tape alphabet, and
      | --> the input length is n

   *  Then M can be in at most f(n) = q * n * mn configurations i.e. a tape of 
      n cells and m symbols, we are able to have solely mn totally different tapes.

   *  The tape head is typically on any of the n cells which we have a tendency 
      to are typically death penalty in any of the q states.


   | CS154: Introduction to Automata and Complexity Theory | http://infolab.stanford.edu/~ullman/ialc/spr10/spr10.html
   | Course Introduction | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/intro.pdf
   | Introduction to Automata | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/fa1.pdf
   | Deterministic Finite Automata | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/fa2.pdf
   | Nondeterministic Finite Automata | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/fa3.pdf
   | Regular Expressions | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/re1.pdf
   | Decision Properties of Regular Languages | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/rs1.pdf
   | Closure Properties of Regular Languages | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/rs2.pdf
   | Context-Free Languages | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/cfl1.pdf
   | Parse Trees | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/cfl2.pdf
   | Normal Forms for Context-Free Grammars | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/cfl3.pdf
   | Pushdown Automata | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/pda1.pdf
   | Equivalence of CFG's and PDA's | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/pda2.pdf
   | The Pumping Lemma for Context-Free Languages | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/cfl4.pdf
   | Properties of Context-Free Languages | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/cfl5.pdf
   | Enumerations, Turing Machines | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/tm1.pdf
   | More About Turing Machines | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/tm2.pdf
   | Undecidable Problems | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/tm3.pdf
   | More Undecidable Problems | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/tm4.pdf
   | NP-Completeness | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/pnp1.pdf
   | Satisfiability, Cook's Theorem | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/pnp2.pdf
   | More NP-Complete Problems | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/pnp3.pdf
   | PSPACE-Complete Problems | http://infolab.stanford.edu/~ullman/ialc/spr10/slides/pnp4.pdf
   | CS154 Midterm Examination | http://infolab.stanford.edu/~ullman/ialc/win00/midterm.pdf
   | CS154 Midterm Solutions | http://infolab.stanford.edu/~ullman/ialc/win00/msol.html
   | CS154 and CS154N Final Examination | http://infolab.stanford.edu/~ullman/ialc/win00/final.pdf
   | CS154 Final Solutions | http://infolab.stanford.edu/~ullman/ialc/win00/fsol.html
   | CS154 The Midterm Examination | http://infolab.stanford.edu/~ullman/ialc/spr10/CS154_Midterm.pdf
   | CS154 Solutions to the Midterm | http://infolab.stanford.edu/~ullman/ialc/spr10/CS154_MidtermSolutions.pdf
   | CS154 Final Examination | http://infolab.stanford.edu/~ullman/ialc/spr10/CS154_Final.pdf
   | CS154 Solutions to the Final | http://infolab.stanford.edu/~ullman/ialc/spr10/CS154_FinalSolutions.pdf

   杰弗里·戴维·乌尔曼（Jeffrey David Ullman），2020 年图灵奖得主，斯坦福大学名誉教授，在线
   学习平台 Gradiance Corporation 首席执行官。主要研究兴趣为编译器设计和数据库系统。曾获荣誉
   包括 IEEE 冯诺伊曼奖章、NEC C&C 基金会 C&C 奖、Donald E.Knuth 奖，ACM Karl V.Karlstrom
   杰出教育家奖。是美国国家工程院、国家科学院、美国艺术与科学院的成员，也是 ACM 的成员。与另一位
   图灵奖得主 Alfred V. Aho 曾合著《编译程序设计原理》（龙书）和《计算机算法设计与分析》。

   | Jeffrey D. Ullman | http://infolab.stanford.edu/~ullman/
   | Mining of Massive Datasets 3rd Edition | http://www.mmds.org
   | Foundations of Computer Science | http://infolab.stanford.edu/~ullman/focs.html
   | Introduction to Automata Theory, Languages, and Computation 3rd Edition by John Hopcroft, Jeffrey D. Ullman | https://www.amazon.com/Introduction-Automata-Theory-Languages-Computation/dp/0321455363

编译原理第二版
-------------------------------------------------------------------------------

   .. figure:: https://node2d-public.hep.com.cn/28f857c2da3621d7af7b768693d309b1.jpg
      :target: https://www.hep.com.cn/book/show/bdf7dcb5-39aa-415a-9719-56bbd79b4edb

   - `姜守旭-哈工大【编译原理】 <https://www.bilibili.com/video/av52129297/>`__
   - `姜守旭-哈工大【编译原理】 课件资源文件 <https://pan.baidu.com/s/1QeHBJuLSy4deILtgj8lj8Q?pwd=6dee>`__
   - `将宗礼 姜守旭 【编译原理】第二版（扫描） <https://pan.baidu.com/s/1mn_goIqpBy6yxqjrH1BY9Q?pwd=wxrp>`__
   - `姜守旭【集合论与图论】（上） <https://www.bilibili.com/video/BV1Cu4y1R7Zy/>`__
   - `姜守旭【集合论与图论】（下） <https://www.bilibili.com/video/BV1D14y1q72Z/>`__
   - `中科院陈意云 编译原理 <https://www.bilibili.com/video/BV1nW41127Y3/>`__

目录
-------------------------------------------------------------------------------
::

   前辅文

   第 1 章 引论
   1.1 程序设计语言
   1.2 程序设计语言的翻译
   1.3 编译程序的总体结构
   1.4 编译程序的组织
   1.5 编译程序的生成
   1.6 本章小结
   习题

   第 2 章 高级语言及其文法
   2.1 语言概述
   2.2 基本定义
   2.3 文法的定义
   2.4 文法的分类
   2.5 CFG的语法树
   2.6 CFG的二义性
   2.7 本章小结
   习题

   第 3 章 词法分析
   3.1 词法分析器的功能
   3.1.1 单词的分类与表示
   3.1.2 词法分析器的输出
   3.1.3 源程序的输入缓冲与预处理
   3.1.4 词法分析阶段的错误处理
   3.1.5 词法分析器的位置
   3.2 单词的描述
   3.2.1 正则文法
   3.2.2 正则表达式
   3.2.3 正则表达式与正则文法的等价性
   3.2.4 有穷状态自动机
   3.2.5 状态转换图
   3.2.6 正则表达式转换为状态转换图
   3.3 单词的识别
   3.3.1 有穷状态自动机与单词识别的关系
   3.3.2 单词识别的状态转换图表示
   3.3.3 几种典型的单词识别问题
   3.3.4 状态转换图的实现
   3.3.5 词法分析程序的编写
   3.4 词法分析程序的自动生成
   3.4.1 Lex源程序
   3.4.2 Lex的实现原理
   3.5 本章小结
   习题

   第 4 章 自顶向下的语法分析
   4.1 语法分析概述
   4.2 自顶向下的语法分析面临的问题与文法的改造
   4.2.1 自顶向下分析面临的问题
   4.2.2 对上下文无关文法的改造
   4.2.3 LL(1)文法
   4.3 预测分析法
   4.3.1 预测分析器的构成
   4.3.2 预测分析表的构造
   4.3.3 预测分析中错误的处理
   4.4 递归下降分析法
   4.4.1 递归下降分析法的基本思想
   4.4.2 语法图和递归子程序法
   4.4.3 基于语法图的语法分析器的工作方式
   4.4.4 语法图的化简与实现
   4.4.5 递归子程序法的实现步骤
   4.5 本章小结
   习题

   第 5 章 自底向上的语法分析
   5.1 自底向上的语法分析概述
   5.1.1 移进-归约分析
   5.1.2 优先法
   5.1.3 状态法
   5.2 算符优先分析法
   5.2.1 算符优先文法
   5.2.2 算符优先矩阵的构造
   5.2.3 算符优先分析算法
   5.2.4 优先函数
   5.2.5 算符优先分析的出错处理
   5.3 LR分析法
   5.3.1 LR分析算法
   5.3.2 LR(0)分析表的构造
   5.3.3 SLR(1)分析表的构造
   5.3.4 LR(1)分析表的构造
   5.3.5 LALR(1)分析表的构造
   5.3.6 二义性文法的应用
   5.3.7 LR分析中的出错处理
   5.4 语法分析程序的自动生成工具Yacc
   5.4.1 Yacc源程序的结构
   5.4.2 Yacc源程序的声明部分
   5.4.3 Yacc源程序的规则部分
   5.4.4 Yacc源程序的例程部分
   5.4.5 Yacc对二义性文法的处理
   5.4.6 Yacc的出错处理
   5.5 本章小结
   习题

   第 6 章 语法制导翻译与属性文法
   6.1 语法制导翻译概述
   6.2 语法制导定义
   6.3 属性计算
   6.3.1 依赖图
   6.3.2 属性的计算顺序
   6.3.3 S-属性定义
   6.3.4 L-属性定义
   6.3.5 属性计算示例
   6.4 翻译模式
   6.4.1 翻译模式与语义动作的执行时机
   6.4.2 S-属性定义的自底向上翻译
   6.4.3 L-属性定义的自顶向下翻译
   6.4.4 L-属性定义的自底向上翻译
   6.5 本章小结
   习题

   第 7 章 语义分析与中间代码生成
   7.1 中间代码的形式
   7.1.1 逆波兰表示
   7.1.2 三地址码
   7.1.3 图表示
   7.2 声明语句的翻译
   7.2.1 类型表达式
   7.2.2 类型等价
   7.2.3 声明语句的文法
   7.2.4 过程内声明语句的翻译
   7.2.5 嵌套过程中声明语句的翻译
   7.2.6 记录的翻译
   7.3 赋值语句的翻译
   7.3.1 简单赋值语句的翻译
   7.3.2 数组元素的寻址
   7.3.3 带有数组引用的赋值语句的翻译
   7.3.4 记录域的访问
   7.4 类型检查
   7.4.1 类型检查的规则
   7.4.2 类型转换
   7.5 控制结构的翻译
   7.5.1 布尔表达式的翻译
   7.5.2 常见控制结构的翻译
   7.5.3 布尔表达式的控制流翻译
   7.5.4 混合模式的布尔表达式翻译
   7.6 回填
   7.6.1 布尔表达式的回填式翻译
   7.6.2 常用控制流语句的回填式翻译
   7.6.3 for循环语句的回填式翻译
   7.6.4 repeat语句的回填式翻译
   7.6.5 break､continue及goto语句的翻译
   7.7 switch语句的翻译
   7.7.1 switch语句翻译的基本思想
   7.7.2 switch语句的语法制导翻译
   7.8 过程调用和返回语句的翻译
   7.9 输入输出语句的翻译
   7.10 本章小结
   习题

   第 8 章 符号表管理
   8.1 符号表的作用
   8.2 符号表中存放的信息
   8.2.1 符号表中的名字
   8.2.2 符号表中的属性
   8.2.3 符号的地址属性
   8.3 符号表的组织结构
   8.3.1 符号表的线性表实现
   8.3.2 符号表的散列表实现
   8.4 符号表与作用域
   8.4.1 程序块结构的符号表
   8.4.2 程序块结构符号表的其他实现
   8.4.3 C语言的符号表
   8.4.4 嵌套过程的符号表
   8.5 本章小结
   习题

   第 9 章 运行时的存储组织
   9.1 与存储组织有关的源语言概念与特征
   9.1.1 名字及其绑定
   9.1.2 声明的作用域
   9.1.3 过程及其活动
   9.1.4 参数传递方式
   9.1.5 对变长数据及用户自由申请空间的支持
   9.2 存储组织
   9.2.1 运行时内存的划分
   9.2.2 活动记录
   9.2.3 局部数据的组织
   9.2.4 全局存储分配策略
   9.3 静态存储分配
   9.4 栈式存储分配
   9.4.1 调用序列和返回序列
   9.4.2 C语言的过程调用和过程返回
   9.4.3 栈中的可变长数据
   9.5 栈中非局部数据的访问
   9.5.1 无嵌套过程的静态作用域的实现
   9.5.2 包含嵌套过程的静态作用域的实现
   9.5.3 动态作用域的实现
   9.6 本章小结
   习题

   第 10 章 代码优化
   10.1 优化的种类
   10.1.1 公共子表达式删除
   10.1.2 复制传播
   10.1.3 无用代码删除
   10.1.4 代码外提
   10.1.5 强度削弱和归纳变量删除
   10.2 控制流分析
   10.2.1 基本块
   10.2.2 流图
   10.2.3 循环
   10.3 数据流分析
   10.3.1 数据流方程的一般形式
   10.3.2 到达-定义分析
   10.3.3 活跃变量分析
   10.3.4 可用表达式分析
   10.4 局部优化
   10.4.1 基本块的DAG表示
   10.4.2 局部公共子表达式删除
   10.4.3 无用代码删除
   10.4.4 代数恒等式的使用
   10.5 循环优化
   10.5.1 循环不变计算的检测
   10.5.2 代码外提
   10.5.3 归纳变量删除和强度削弱
   10.5.4 带有循环不变表达式的归纳变量
   10.6 全局优化
   10.6.1 全局公共子表达式的删除
   10.6.2 复制传播
   10.7 本章小结
   习题

   第 11 章 代码生成
   11.1 代码生成器设计中的问题
   11.1.1 代码生成器的输入
   11.1.2 目标代码的形式
   11.1.3 指令选择
   11.1.4 寄存器分配
   11.1.5 计算顺序选择
   11.2 目标语言
   11.2.1 目标机模型
   11.2.2 程序和指令的开销
   11.2.3 变量的运行时刻地址
   11.3 一个简单的代码生成器
   11.3.1 后续引用信息
   11.3.2 寄存器描述符与地址描述符
   11.3.3 代码生成算法
   11.3.4 常用三地址码的代码生成
   11.4 寄存器分配与指派
   11.4.1 全局寄存器分配
   11.4.2 引用计数
   11.4.3 外层循环的寄存器指派
   11.5 本章小结
   习题

   附录 “编译原理”课程教学设计
   缩写符号
   词汇索引
   参考文献

内容提要
-------------------------------------------------------------------------------

   “编译原理”是计算机科学与技术专业重要的专业（基础）课程。本书是“十二五”本科普通高等教育国家级
   规划教材，也是国家精品课程、国家级精品资源共享课程主讲教材，是作者结合三十余年在哈尔滨工业大学、
   北京工业大学讲授该课程的经验和体会，根据将其作为本科生专业技术基础课教学的实际需要选择和组织有
   关内容撰写而成的，包含了“编译原理”课程所需涵盖的知识。本书以知识为载体，对本学科问题求解的典型
   思想和方法进行探讨，致力于学生四大专业基本能力的培养，为“能力导向”的课程教学提供有力支持。为了
   便于读者学习和掌握有关内容，面向工程应用型学生的培养，在附录中给出了相应的课程设计。

   本书适合于高等学校计算机科学与技术学科本科生“编译原理”课程教学使用， 也可供相关专业的学生、教师
   和科研人员参考。

   图书在版编目 (CIP )数据

   编译原理/ 蒋宗礼，姜守旭编著.--2版.--北京：高等教育出版社，2017.8

   ISBN 978-7-04-048386-4

   Ⅰ.①编… Ⅱ. ①蒋⋯ ②姜⋯ Ⅲ.①编译程序-程序设计-高等学校-教材 Ⅳ.①TP314

   中国版本图书馆 CIP 数据核字(2017)第203599号
   
   策划编辑 张海波  责任编辑 张海波  封面设计 赵 阳  版式设计 马敬茹  
   插图绘制 杜晓丹  责任校对 刘 莉  责任印制 赵义民  

   出版发行 高等教育出版社
   网 址

      http://www.hep.edu.cn
      http://www.hep.com.cn

   社 址 北京市西城区德外大街4号
   邮政编码 100120

   网上订购

      http://www.hepmall.com.cn
      http://www.hepmall.com
      http://www.hepmall.cn

   印 刷 北京中科印刷有限公司
   开 本 787mm×1092mm.1/16
   印 张 28  版 次 2010年2月第1版
   字 数 630千字  2017年8月第2版
   购书热线 010-58581118  印 次 2017年8 月第1次印刷
   咨询电话 400-810-0598  定 价 43.00元
   本书如有缺页、倒页、脱页等质量问题，请到所购图书销售部门联系调换
   版权所有 侵权必究
   物 料 号 48386-00

数字课程资源使用说明
-------------------------------------------------------------------------------

   与本书配套的数字课程资源发布在高等教育出版社易课程网站，请登录网站后开始课程学习。

   一、注册/登录

   访问 http://about.hep.com.cn/187706，单击“注册”，在注册页面输入用户名、密码及常用的
   邮箱进行注册。已注册的用户直接输入用户名和密码登录即可进入“我的课程”页面。

   二、课程绑定

   单击“我的课程”页面右上方“绑定课程”，正确输入教材封底防伪标签上的20位密码，单击“确定”完成课程绑定。

   三、访问课程

   在“正在学习”列表中选择已绑定的课程，单击“进入课程”即可浏览或下载与本书配套的课程资源。刚绑定
   的课程请在“申请学习”列表中选择相应课程并单击“进入课程”。

   四、与本书配套的易课程数字课程资源包括电子教案、重难点讲解等，以便读者学习使用。
   账号自登录之日起一年内有效，过期作废。

   如有账号问题,请发邮件至:  abook@hep.com.cn。

第2版前言
-------------------------------------------------------------------------------

   从 2006年开始，计算机科学与技术专业作为我国工程教育专业认证的试点专业之一，便开始了旨在追求
   国际等效的工程教育专业认证工作。2016年6月，我国成为《华盛顿协议》的正式成员，标志着我国的工
   程教育在实现国际接轨上迈出了极其重要的一步。从一定意义上讲，那些通过工程教育专业认证的计算机
   类专业点的教育是国际等效的。目前，加快包括计算机科学与技术专业在内的计算机类专业的内涵发展步
   伐，快速提升专业教育水平和质量，使2785个计算机类专业的专业点有更多达到工程教育专业认证的标准，
   是我们共同的追求。

   按照《华盛顿协议》，两年制专科，定位于培养学生解决狭义工程问题 (well-defined problems)
   的能力; 三年制的大专教育, 定位于培养学生解决广义工程问题 (broadly-defined problems) 
   的能力；而本科教育，定位于培养学生解决复杂工程问题 (complex problems) 的能力。中国工程
   教育专业认证协会发布的《工程教育认证标准(2015版)》和《华盛顿协议》所给的毕业要求标准，明确地
   聚焦到了这一基本定位。

   那么，什么是复杂工程问题?《华盛顿协议》用如下7个特征进行刻画。其中第(1)条是必备的，第(2)到
   第(7)条是可选的。必备的条款指出了复杂工程问题的本质，可选的条款可以看作是复杂工程问题的表象。

   (1) 必须运用深入的工程原理经过分析才可能解决；
   (2) 需求涉及多方面的技术、工程和其他因素，并可能相互有一定冲突；
   (3) 需要通过建立合适的抽象模型才能解决，在建模过程中需要体现出创造性；
   (4) 不是仅靠常用方法就可以完全解决的；
   (5) 问题中涉及的因素可能没有完全包含在专业标准和规范中；
   (6) 问题相关各方利益不完全一致；
   (7) 具有较高的综合性，包含多个相互关联的子问题。

   “编译原理”的教学内容几乎吻合了以上全部条款。它包含求解计算机问题和利用计算机技术求解问题的基本
   原理、最典型最基本的方法；编译原理课程所涉及的问题都需要进行深入的分析；这些问题的解决必须建立
   恰当的抽象模型，并基于模型进行分析和处理；很多问题需要根据设计开发的实际，综合运用恰当的方法，
   要在多种因素和“指标”中进行折中，以求全局的优化和良好的系统性能；不仅要设计和实现词法分析器、语
   法分析器、语义分析器、代码优化器、代码生成器等一系列子系统，还要对它们进行综合和集成，以构成编
   译系统。所以，该课程不仅使学生掌握“基本原理”“基本技术”“基本方法”，还提供了一个使学生经历计算机
   “复杂工程”构建过程的机会——构建一个适当规模的教学型编译系统。难怪许多年以前， AlfredV. Aho
   就在其编著的《编译原理》的开篇写道“编写编译器的原理和技术具有十分普遍的意义，以至于在每个计算机
   科学家的研究生涯中，本书中的原理和技术都会反复用到。”

   就我国目前的教育需求来看，我们不再将编译原理这门课程当作专业课，而是作为专业技术基础课，旨在向
   学生传授计算机问题求解的基本思想和方法，引导他们经历“复杂工程问题”的求解过程，培养他们包括计算
   思维能力(狭义的，包括模型的认知、建立和使用在内)、算法设计与分析能力、程序设计与实现能力、系统
   能力在内的专业能力，以及承担解决复杂工程问题相关的非技术性能力和素质。

   按照人才培养方案的系统化设计和实施的要求，本门课程将具体支持相关毕业要求的达成。虽然这门课程全
   面地体现了支持培养学生解决复杂工程问题能力的需要，我们还是将其目标主要集中在 3 个方面，并认为
   通过恰当的教学设计，对另外 3 个方面也会提供相应的支撑，具体我们将在附录中给出。

   虽然“编译原理”作为计算机类专业，特别是计算机科学与技术专业的技术基础课是非常恰当，也是非常重要
   的，还是专业教育达到《计算机类专业教学质量国家标准》的最佳课程载体之一，但是，我们也了解到，由
   于其描述的问题比较复杂，相应的“计算模型”的描述抽象度相对较高，理解难度较大，加上编译系统本身也
   很复杂，导致部分专业点并没有将其纳入基本课程体系。在众多原因中，恐怕该课程的“难度”是重要原因之
   一，这使得我们感到甚是遗憾。针对这一现象和上述的一些新认识，我们在第一版的基础上按照面向工程应
   用型人才培养的要求，对相关的内容做了适当的精选调整，明确给出了目标追求，强调原理指导下的“工程开发”。

   为了便于学生学习参考，便于教师根据需要组织教学，我们将全程的真实课堂录像和对应的讲稿(PPT)放在
   有关网站上，大家可以根据需要选择参考。系统看过该教学录像和对应的讲稿后，读者会发现，我们并没有
   拘泥于这本教材或者哪一本教材，而是根据我们所教学生的教学需要，进行内容的选择和组织。我们认为，
   这正是大学课程教学要追求的。国家精品资源共享课所在的爱课程网站中：
   http://www.icourses.cn/coursestatic/course_2279.html

   另外，在本版中，我们还修改了一些算法描述等，使其更易理解，并更正了发现的文字错误。

   作 者
   2016年 12月 20 日


初版前言
-------------------------------------------------------------------------------

   根据《中华人民共和国高等教育法》第二章第十六条高等学历教育学业标准，本科教育应当使学生比较系统
   地掌握本学科、专业必需的基础理论、基本知识，掌握本专业必要的基本技能、方法和相关知识，具有从事
   本专业实际工作和研究工作的初步能力。法律规定了高等教育对知识、能力、素质三方面的要求。专业基本
   能力在学生的可持续发展和创新精神、创新意识与创新能力的形成中具有非常重要的作用。所以，教育不仅
   要强调知识基础，更要强调能力基础。

   在对知识基础和能力基础的追求上，东西方教育存在着一定的差异。相对而言，东方教育表现出更注重夯实
   知识基础的倾向，而西方教育则更注重夯实能力基础。实际上，“知识基础”和“能力基础”并不矛盾，两者相
   辅相成：以知识为载体，通过对知识的学习，掌握恰当的问题求解思想和方法，培养学生的(专业)能力；能
   力的增强又可以促进学习、掌握甚至发现更多的知识。所以，倡导的是研究型“教”与“学”，尊崇的是“能力
   导向”。

   在大学里，不能简单、肤浅地将学习一门课程看成是未来要从事这门课程所含内容的研究、设计和开发，而
   要关注是否在有限时间内最有利于实现对受教育者专业能力的培养。所以，我们反对面向系统的教育，更反
   对产品教育。由于计算学科还是一个较新的学科，其专业教育从总体上来说还不够成熟，所以才有了今天的
   “操作系统”、“数据库系统”、“网络系统”、“编译系统”等面向系统的课程。相信随着计算学科的发展，计算
   机专业教育会不断成熟，会形成更能体现专业教育需要的课程。目前应该努力做到“使用工具、探索规律”、
   “实现具体系统、研究基本原理”，也就是“使用工具，不忽略规律；学习系统，未冷落原理”。

   那么，作为计算机专业的学生，应该具有什么样的基本能力呢? 除了交流、获取知识与信息的基本能力、应
   用数学和自然科学知识的能力、创新能力、工程实现能力、团队合作能力外，作为接受专业教育的专业人员
   ，更应该具备专业基本能力。自2002年起，作者就将计算机专业人才的专业基本能力归纳成计算思维能力、
   算法设计与分析能力、程序设计与实现能力、系统能力。这四大基本能力有着自己丰富的内涵，大约有83个
   “能力点”，它们的培养需要落实到各个教学环节中，特别是各门主干课程的教学中。

   例如，系统能力要求学生站在系统的全局去看问题、分析问题和解决问题，并实现系统优化。对计算机专业
   人才来说，狭义的系统能力包括对一定规模系统的“全局掌控能力”(从全局上掌控一定规模的系统)和在构建
   系统时能够系统地考虑问题的求解方法。要培养学生的系统能力，就需要在基本思想的指导下，从教学的点
   滴入手。例如，自顶向下是系统设计的重要思想方法，用于引导学生分层次考虑问题，逐步求精；鼓励学生
   由简到繁，进行复杂程序的设计，是一个逐渐深入、逐渐扩展规模的过程；结合计算机硬件系统、编译系统、
   操作系统等教学，可以使学生学着关注并努力去掌握系统逻辑，引导学生从宏观到微观去分析、理解和把握
   系统；通过参与较

   大型系统的设计与实现，鼓励学生在工作过程中努力掌握系统的总体结构，关心本人承担的工作在系统中的
   地位及其与其他部分的关系等，以此增强系统观和合作能力。在教学中要不断提升学生的眼光，以使学生从
   系统级上对算法和程序进行再认识。

   “编译原理”是一门非常好的课程。 Alfred V. Aho 编著的 Compilers: Principles, Techniques, 
   and Tools 被认为是编译领域里的经典教材，加上其封面上“龙”的造型，被人们尊称为“龙书”。作为第1章
   的第一句话，作者这样写道“编写编译器的原理和技术具有十分普遍的意义，以至在每个计算机科学家的研究
   生涯中，本书中的原理和技术都会被反复用到。”这句话给出了这门课程的真正教学定位。

   因为计算学科是对信息描述和变换算法的系统研究，包括理论、分析、效率、实现和应用，问题求解的基本
   思路是“问题、形式化描述、计算机化”，以抽象、理论、设计为其学科形态。编译原理涉及的是一个比较适
   当的抽象层面上的数据变换，既抽象，又实际；既有理论，又有实践，而且这些实践还是理论指导下的实践。
   课程还包含一个具有一定规模的系统的设计，非常适于对学生进行系统能力的培养。此外，还含有基本问题
   求解的典型思想、技术和方法。因此，课程教学还应使学生掌握程序变换的基本概念、问题描述和处理方法
   (自顶向下、自底向上、逐步求精、递归求解、目标驱动、问题的抽象与形式化描述、算法设计与实现、数据
   结构的选取与实现、系统构建、模块化)等。所含的问题描述与处理方式，有利于进一步培养学生的形式化描
   述能力：给出问题的形式化描述，基于这种描述设计出自动化处理的过程，最后实现“自动计算”，体验实现
   自动计算的乐趣，使学生养成“问题、形式化描述、计算机化”的问题求解习惯，推进从“实例计算”到“类计算
   ”和“模型计算”的跨越。

   所以，该课程的内容对于培养学生的计算思维、算法设计与分析、程序设计与实现、计算机系统的认知、开
   发和利用等四大专业基本能力非常重要，是在程序设计、数据结构与算法等课程中受到一定的锻炼后，从系
   统的级别上对程序、算法的认识进行再提高，通过课程进一步提升学生的计算机问题求解水平，在系统的级
   别上重新认识算法和程序，增强系统能力。因此，“编译原理”课程是计算机专业最为恰当、有效的知识载体
   之一。

   自 1986年以来，我们在哈尔滨工业大学和北京工业大学为计算机科学与技术专业学生讲授该课程，这门课程
   在两校都是主干课，从原来的专业课变成现在的专业技术基础课。多年的研究和教学实践积累，使我们不断
   加深对该课程的认识和理解，两校的“编译原理”课程分别被评为国家、北京市、黑龙江省精品课程。

   本书按能力培养的要求，结合作者20余年的经验和体会，根据本科生教学的实际需要选择和组织有关内容，
   包含了“编译原理”课程所需涵盖的知识，但是本书没有按照惯例着力追求知识的全、深、新，而是以知识为
   载体，对本学科问题求解的典型思想和方法进行探讨，致力于学生四大专业基本能力的培养。

   全书共分为11章，第1章为编译原理引论，第2章讲文法，第3章讲词法分析，第4、5章分别讲述自顶向下和
   自底向上的语法分析方法，第6章给出语法制导翻译与属性文法，第7章具体讨论语义分析与中间代码生成，
   第8章是符号表管理，第9章为运行时的存储组织，第10章讨论代码优化，第11章介绍代码生成。

   作为教材，为了便于读者使用，在附录中按照56学时(理论授课44学时，课内实验12学时)给出了面向工程
   应用型学生的课程教学设计，也进一步体现作者撰写本书的目的。另外，对于科学型的学生，建议在授课中
   注意进一步突出对基本原理的研究；对于工程类的学生，可以给后4章多分配些学时。特别是在如果有更多
   学时的情况下，建议用于后4章的学习。当然，要想更好地理解和掌握本书内容，安排一个课程设计是很有
   意义的。

   在过去的几十年中，专家们编著了很多与编译原理相关的教材，包括前面所说的“龙书”，都为本书的编写提
   供了很好的参考和借鉴。同时，“编译”作为理论基础好、形式化(自动化)水平高、对类计算体现好的技术和
   系统，与其相关的“形式语言与自动机”类教材也为本书的编写提供了参考，在这里向相关作者表示诚挚的谢意！

   由于作者水平有限，书中的不当之处在所难免，敬请读者批评指正。如果读者有任何建议或意见,可以发送
   电子邮件至  jiangzl@bjut.edu.cn 或者 jsx@hit.edu.cn。

   作 者
   2009年10月


第 1 章 引论
-------------------------------------------------------------------------------

   程序设计语言的“进步”，给人们使用计算机提供了方便，随着它越来越接近人们的习惯，也就会越来越远离
   了机器。因此，在人和机器之间就需要一个系统来自动地完成人们用程序设计语言所编写的程序的翻译工作，
   以弥补这个越来越宽的鸿沟，这就是编译系统。

   编译原理讨论编译系统的基本部分——编译程序的构造原理，同时讨论相关的技术和方法。对计算机科学与技
   术学科(简称计算机学科或计算学科)的学生来说，它是一门非常好的课程。 AlfredV. Aho曾在其编著的
   《编译原理、技术与工具》的开篇中写道，“编写编译器的原理和技术具有十分普遍的意义，以至在每个计算
   机科学家的研究生涯中，本书中的原理和技术都会被反复用到。”

   计算机学科对信息描述和变换算法进行系统研究，主要包括相关的理论、分析、效率、实现和应用。编译原
   理涉及的是在一个比较适当的抽象层面上的数据变换(既抽象，又实际)，在这里除了给出一些问题的具体表
   示和变换算法外，还给出了自顶向下、自底向上、逐步求精、递归求解、目标驱动、问题的归纳与分析、抽
   象与形式化描述，以及相应算法的设计与实现、模块化等一系列系统构建的基本方法和问题求解思想。同时
   还清晰地给出了一个具有一定规模的系统的设计，包括非常重要的系统总体结构，这些对于培养学生的基本
   学科能力非常重要，所以它是计算机学科最为恰当、有效的知识载体之一。

   我们希望通过本课程的教学，学生能够掌握“编译原理”中的基本概念、基本理论、基本方法，在系统层面上
   再认识程序和算法，提升计算机问题的求解水平，增强系统能力，体验实现自动计算的乐趣。

   考虑到编译是关于程序设计语言的变换，所以本章首先简要介绍程序设计语言的发展，在此基础上讨论程序
   变换的基本概念、编译系统的构成，以及编译程序的生成技术，使读者能够从系统的角度对编译程序及编译
   过程有一个清晰、宏观的了解。

1.1 程序设计语言
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   众所周知，语言是用来进行信息交流的工具。要想让计算机按照人们的意愿去工作，就需要以适当的语言将
   这种意愿“告诉”计算机。就目前计算机系统的能力而言，需要告诉计算机的内容既包括要完成什么样的工作，
   又包括完成此工作的具体过程。相当来说，程序需要描述待完成的工作及其实现过程，所以人们称这种语言
   为计算机程序设计语言，简称为程序设计语言( programming language)。显然，这种用来刻画“意愿”
   的语言应该是人和计算机都能够理解的。为了方便起见，当用某种语言表示(书写)程序的时候，称用此语言
   描述( describe)某一个程序，并称该程序是该语言程序。

.. page 1


   自从计算机诞生以来，先后出现了许多程序设计语言。按照人们使用的方便程度划分，依次为机器语言、汇编
   语言、高级程序设计语言。随着它们越来越便于人们用来描述问题及其求解算法，它们离机器执行的“距离”
   就越来越远。下面分别对其进行简单介绍。

   1. 机器语言

      每一个具体的计算机系统都具有自己的指令系统，每条指令均用规定格式的 0、1串来表示，可以被计算机
      直接理解并执行。这种可以被计算机直接理解的语言称为机器语言( machinelan- guage)，它们是用
      0、1代码按照规定组成的指令序列的集合。在计算机出现的初期，由0、1表示的指令成为最早的程序设计
      语言。人们用这些由0、1组成的序列来表达机器可以执行的所有指令及其可以操作的数据。指令系统与机器
      的密切相关性决定了机器语言与机器紧密相关。

      简单地说，机器语言就是以0、1代码表示的机器指令所构成的语言。用机器语言描述的程序称为机器语言
      程序( machine language program)。在机器语言程序中,每一条“语句”对应一条指令或者一个数据。

      例 1.1 一个简单的机器语言程序，其功能为从内存中读入两个数值，并求出这两个数值的和。假设数据段
      的首地址为 152B，被求和的两个数值位于数据段起始的两个字。
      ::

         1011 1000 0010 1011 0001 0101          (B82B15)
         1000 1110 1101 1000                    (8ED8)
         1010 0001 0000 0000 0000000            (A10000)
         1000 1011 0001 1110 0000 0010 0000 000 (8B1E0200)
         1011 1001 0000 0000 0000000            (B90000)
         0000 0011 1100 1000                    (03C8)
         0000 0011 1100 1011                    (03CB)
         1000 1011 0000 1110 0000 0100 0000 000 (8B0E0400)
         1011 1000 0000 0000 0100 1100          (B8004C)
         1100 1101 0010 0001                    (CD21)  □

      由于机器语言程序是由机器指令组成的0、1代码，所以它的可读性非常差，给人们进行程序设计带来了
      诸多不便，通常只有计算机专业人员才使用，而且编写效率极其低下，特别容易出错。为了改变这种状况，
      计算机专家们考虑用适当的助记符来表示这些难记、难读、难理解的0、1代码，这就是汇编语言。

   2. 汇编语言

      汇编语言( assembly language)用一系列助记符来表示指令中的操作和操作数，同时用符号表示程序
      用到的一系列数据。例如，在汇编语言中分别用ADD、SUB、MUL、DIV 表示加法、减法、乘法、除法运算，
      用 AX、BX、AH、BH 等表示计算机中的寄存器。用汇编语言描述的程序称为汇编语言程序( assembly 
      language program)。

.. page 2

   例 1.2 一个简单的汇编语言程序(与例1.1功能相同)。

   .. code:: asm

      ASSUME CS:CODE, DS:DATA
      DATA SEGMENT
         DW 1234H,5678H
      DATA ENDS

      CODE SEGMENT
      START:MOV AX, DATA
         MOV DS, AX
         MOV AX, DS:[0]
         MOV BX,DS:[2]
         MOV CX,0
         ADD CX, AX
         ADD CX, BX
         MOV CX,DS:[4]
         MOV AX, 4C00H
         INT 21H
      CODE ENDS
      END START                                          □

   显然用汇编语言表示的程序比起用0、1表示的机器语言程序更容易被人理解。但是由于计算机只能执行由
   0、1构成的程序，所以计算机是无法直接执行汇编语言程序的。因此，需要一种变换程序，它能够承担起
   把汇编语言程序转换成等价的机器语言程序的翻译工作。

   实际上，在汇编语言中，只是用一些助记符来表示机器指令指定的内容，它必然严格地受到具体机型的限制。
   这不仅要求程序设计者了解机器，还需要按照机器的具体执行过程进行程序设计。为了提高程序设计效率，
   人们引入了“宏”的概念，用“宏”表示一些常用的基本处理过程，从而就有了宏汇编( macro assembly)。
   助记符的引入大大地方便了计算机的使用者。

   虽然汇编语言比机器语言更便于人们进行程序设计，但是它仍然对程序设计人员有比较严格的要求。因为与人们通常的描述习惯相比，汇编语言仍有较大的距离。在计算机主要用于进行科学计算的时代，对于使用计算机进行科学计算的非计算机专业的科学家和工程设计人员来说，有着极大的限制。因此，计算机专家们开始考虑寻找一种语言，这种语言可以像描述数学公式那样,允许直接在表示程序的语言中书写诸如 sum=A+B﹡10.9、x= sin(y)﹡ sin(y)- cos(z) ﹡ cos(z)之类的内容，以给用户提供了更多的方便，于是就出现了高级程序设计语言，简称高级语言。

   3. 高级语言

      高级程序设计语言( high level programming language), 简称高级语言( high level language)。
      这个概念是瑞典数学家 H. Rutishauser 在 1952 年首先提出来的。第一个实用的高级语言是 FORTRAN,
      由 IBM 公司在1956年研制。在高级语言的发展历史中, 除了 FORTRAN 外, BASIC、ALGOL、Pascal、
      COBOL、PROLOG、Smalltalk、C、Ada、C++、Java等都是很重要的语言。

.. page 3

   
   简单地讲，高级语言就是以人们容易理解的形式表达计算的要求和过程的语言。

   高级语言通常不受具体机型的限制，而更接近于人们的表达习惯，一条语句通常需要若干条机器指令去实现，
   这样就大大地提高了程序设计的效率。

   用高级语言描述的程序称为高级语言程序( high level language program)。例1.3 就是一个与例
   1.1 中程序具有相同功能的 C 语言程序。

   例1.3一个简单的高级语言程序(与例1.1功能相同)。

   .. code:: cpp

      int main
      {
         int a, b, c;
         a = 1234h;
         b = 5678h;
         c = a+b;
         return 0;
      }
      「それでする。そのは、そのことは、その

   高级语言的优点首先是接近于人们的习惯，可读性好，便于理解和维护，因此比较容易保证程序的正确性。
   其次，其程序设计的效率远远高于汇编语言。再次，用这种语言编写的程序是和机器无关的，因此可以在
   不同的机器上运行。由此也确定了高级语言程序是不能被计算机直接执行的，要想执行这种程序，必须对
   其进行翻译，使之变成等价的机器语言程序。当然，这种翻译工作应该是由一个系统自动完成的。

   按照不同的关注点，高级语言可以被分为不同的类。例如，命令式语言( imperative language)、
   申述式语言( declarative language)。前面提到的 FORTRAN、BASIC、ALGOL、Pascal、COBOL、
   C、Ada、Smalltalk、C++、Java 是命令式语言; PROLOG 是申述式语言。也有人将其分得更细一些,
   FORTRAN、BASIC、Pascal、C、COBOL、ALGOL 等是命令式语言, 其中 BASIC、FORTRAN 为段结构的, 
   Pascal、ALGOL 为嵌套结构的; LISP、ML 为函数式语言( functional language); PROLOG 为
   逻辑式语言( logical language)或称基于规则的语言; Smalltalk、Ada、C++、Java 等为面向
   对象语言( object-oriented language)。也有分成过程语言( procedural language)和非过程
   语言( nonprocedural language)的。

1.2 程序设计语言的翻译
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


   在上一节中已经讲到，为了方便使用，人们设计出了汇编语言、高级语言。但是，用这些语言描述的程序
   是不能被计算机直接执行的，它们必须被翻译成机器可以执行的程序——机器语言程序才能被执行。这种翻
   译工作由一个翻译系统自动完成。

.. page 4

   这种将一种语言描述的程序翻译成等价的用另一种语言描述的程序的程序称为翻译程序( translator),
   如图1.1所示。用来描述被翻译程序的语言称为源语言( source language), 被翻译程序称为源程序
   ( source program); 用来描述翻译出来的程序的语言称为目标语言( object language)，翻译
   出来的程序称为目标程序( object program)。按照更具普遍意义的说法，有时也称目标程序为目标
   代码( object code)。
   ::

            源程序                  翻译程序              目标代码
      ╭────────────────╮      ╭─────────────╮      ╭─────────────╮
      │ source program │----->│ translator  │----->│ object code │
      ╰────────────────╯      ╰─────────────╯      ╰─────────────╯
      (*.c/*.pas/*.as)                             (*.obj/*.exe/*.*)

   图 1.1翻译程序

   通常情况下，源语言可以是某种高级语言，如 Pascal、C。源程序的名称中分别会带有类似 .pas 和 .c
   的后缀；也可以是汇编语言，此时源程序名中分别会带有类似 .as 的后缀。带什么样的后缀一般是由相应
   的翻译程序规定的，用来指出源语言是什么语言。目标语言既可以是可执行的机器语言，也可以是汇编语言，
   或是其他语言。目标程序的名称中常带有类似 .obj、.exe 的后缀，用来表明目标程序的属性。实际上，
   在文件名后面加适当的后缀既是人们的一种习惯，又给人们从文件名上区分程序的类型提供了方便。

   与自然语言中的语言翻译类似，翻译程序也有两大类。

   一种翻译程序接受源程序，输出与之等价的目标程序，然后再对其进行相应的处理后投入运行。这种将源程序
   完整地转换成机器语言或者汇编语言程序，然后再处理、执行的翻译程序称为编译程序( compiler)。如图
   1.2 所示，这种翻译程序类似于自然语言翻译中的通篇笔译。
   ::

            源程序                  编译程序              目标代码
      ╭────────────────╮      ╭─────────────╮      ╭────────────────╮
      │ source program │----->│ translator  │----->│ object program │
      ╰────────────────╯      ╰─────────────╯      ╰────────────────╯
      (*.c/*.pas/*.as)                             (*.obj/*.exe/*.*)
 
   图 1.2编译程序
 
   另一种翻译程序不断地读取源程序中的语句，对每次读到的语句进行解释，同时读取执行此语句所需要的数据
   ( data，也称为输入，input)，执行该语句后，再根据执行结果读取下一条将要执行的语句，再次进行解释
   并执行，而且在解释执行的过程中还会根据程序的规定在需要的时候输出计算结果( result/ output)。
   重复此过程，直到程序执行结束。这种一边解释一边执行的程序称为解释程序( interpreter)。这种翻译
   程序类似于自然语言翻译中的口译，如图 1.3 所示。
   ::

                                    数据 
                                  (data)
                                     ↓
            源程序                  解释程序                计算结果
      ╭────────────────╮      ╭──────────────╮      ╭────────────────╮
      │ source program │----->│ interpreter  │----->│     result     │
      ╰────────────────╯      ╰──────────────╯      ╰────────────────╯
 
   图1.3解释程序

.. page 5

   显然，在解释程序的运行过程中并不产生完整的目标程序，而是在需要执行那条语句时才对其进行解释，
   所以它是一种特殊的翻译程序。虽然如此，考虑到无论编译程序还是解释程序，对它们的翻译都是通过
   对组成程序的语句进行翻译完成的，可以想象，这两种不同的翻译程序所用到的基本翻译方法应该是相
   同的，所以在“编译原理”课程中，人们通常不单独讨论解释程序的问题。

   相比较而言，编译程序可以在程序执行前完成所有的翻译工作，这样就可以将翻译工作做得更好，以提高
   目标程序的质量。另外，由于在目标程序执行前已经完成了翻译，所以执行效率会有所提高。而解释程序
   边解释边执行，所以程序的执行时间比较长，效率比较低，而且是单句解释，所以目标代码的效率也会低
   一些。特别是对循环语句来说，它的循环体每被执行一次，就需要重新解释一次，导致效率非常低下，所以
   通常人们很少使用解释程序。不过一般来讲，解释程序的人机交互性会好一些。

   值得注意的是，现代的编译程序，要求编译出来的目标程序必须是可重定位的，以适应并发和动态管理的
   需要。此外，通常编译程序翻译出来的目标程序是不能直接执行的，有的还需要连接装配，构成可执行的
   程序，并在适当的支持下运行。所以，编译程序和相应的运行系统一起构成编译系统( compiling system),
   如图 1.4 所示。
   ::

      ( source program)          源程序
              ↓
      ╭───────────────╮
      │   compiler    │          编译程序
      ╰───────────────╯
              ↓
      ( object program)          目标程序
              ↓
              ↓         运行系统
      ╭───────────────╮                 ╭───────────────╮
      │   run system  │ ←───────────────│  data/ input  │ 数据
      ╰───────────────╯                 ╰───────────────╯
              ↓
      ( result/ ouput)           计算结果

   图 1.4 编译系统

   除了编译程序和解释程序外，还有如下一些翻译程序。

   *  汇编程序( assembler)：当源程序是汇编语言程序，目标程序是机器语言程序时，翻译程序称为汇编程序。

   *  交叉汇编程序( cross assembler):通常的翻译程序是为本机生成目标代码，但是有时候人们需要用
      一台机器为另一台机器生成目标代码。当源程序是汇编语言程序，目标程序是另一台机器的机器语言程序时，
      翻译程序称为交叉汇编程序。

   *  反汇编程序( disassembler):当源程序是机器语言程序，目标程序是汇编语言程序时，翻译程序称为
      反汇编程序。反汇编程序通常用来将一段机器代码翻译成汇编代码，以便对这段程序进行分析和改造。

   *  交叉编译程序( crosscompiler)：当源程序是高级语言程序，目标程序是另一台机器的机器语言程序
      或者汇编语言程序时，翻译程序称为交叉编译程序。

   *  反编译程序( decompiler)：当源程序是机器语言程序，目标程序是高级语言程序时，翻译程序称为反
      编译程序。反编译程序通常用来将一段机器代码翻译成高级语言代码，以便对这段程序进行分析和改造。

   *  可变目标编译程序( retargetable compiler)：当源程序是高级语言程序，目标程序是可选机型的
      机器语言程序或者汇编语言程序时，翻译程序称为可变目标编译程序。

   *  并行编译程序( parallelizing compiler)：当源程序是串行执行的高级语言程序，目标程序是并行
      执行的机器语言程序或者汇编语言程序时，翻译程序称为并行编译程序。这种编译程序通常依赖于计算机
      的体系结构, 可以针对单指令流多数据流( single instruction multiple data, SIMD)、多指令
      流多数据流( multiple instruction multiple data, MIMD)、单程序流多数据流( single 
      program multiple data, SPMD)、多程序流多数据流( multiple program multiple data,
      MPMD)、多核多线程( multi-core and multi-thread)、向量化( vectoring)等进行并行化处理。


.. page 6

   另外，还有一些强调某一方面功能的编译程序。例如，强调查错、纠错能力，帮助人们开发和调试程序的诊断
   程序编译程序( diagnostic compiler)；强调提高目标代码效率的优化编译程序( optimizing compiler)。
   主要翻译程序汇总如图 1.5 所示。
   ::

                                          │ 编译系统 │
                                          │ 运行系统 │
                                          │ 编译程序 │
                                            ↓     ↑ 
      机器语言程序 <--- 汇编程序 <---- 汇编语言程序     ↓   
                                              高级语言程序  数据
                                                      ↓   ↓
                                                     解释程序
                                                       ↓
                                                      结果

      机器语言程序 <----- 汇编程序 <----- 汇编程言程序 <----- 编译程序 <---- 高级语言程序
      ↓     ↓
      ↓  反汇编程序 ----------------->  汇编程言程序
      ↓
      反编译程序 -----------------------------------------------------> 高级语言程序

         可变目标编译程序、
         交叉汇编程序、交叉编译程序
         汇编程序、编译程序
         ↓              ↓
      机器语言程序     汇编语言程序

   图 1.5主要翻译程序汇总

.. page 7

1.3 编译程序的总体结构
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   下面是一段高级语言程序，首先概要讨论它是如何被编译程序自动翻译成计算机可以执行的目标程序的。

   .. code:: cpp

      #include <stdio.h>

      main ( )
      {
         int num, square, sum;
         num = 10; 
         square = num * num; 
         sum = (10 + 20) * (num + square);
         printf(" num= %d \n square=%d \n sum=%d", num, square, sum);
      }

   粗略地想，不难发现，编译程序首先必须对其进行分析，弄清这些语句的意思，然后用目标语言将它们表达
   的“意思”等价地表示出来。在这些分析中，首先要切分出 #、include、<、stdio.h 等一系列的“词”，
   它们是组成程序的最小单位。然后再将这些词组合成句子，并在这个过程中分析它们所表达出来的意思。在
   完成分析之后，对分析的结果进行整合，产生与源程序等价的目标程序。

   由此可见，编译程序是一个涉及分析和综合的复杂系统。它通常由词法分析器、语法分析器、语义分析与中
   间代码生成器、代码优化器、目标代码生成器、出错处理器、符号表管理器组成，如图 1.6 所示。为了方
   便起见，下面以对语句“sum = (10 + 20) * (num + square);”的分析为例，简要说明编译程序的
   工作过程和各部分的主要功能。
   ::

                                    ↓        源程序
                                    ↓
                                 词法分析器
                                    ↓        单词符号
                                    ↓
                                 语法分析器
                                    ↓        语法单位
                                    ↓
      符号表管理器            语义分析与中间代码生成器            出错处理器
                                    ↓        中间代码
                                    ↓
                                 代码优化器
                                    ↓        中间代码
                                    ↓
                                 目标代码生成器
                                    ↓
                                    ↓        目标程序

   图 1.6 编译程序总体结构

.. page 8

   1.词法分析

      词法分析( lexical analysis)由词法分析器( lexical analyzer)完成, 词法分析器又称为
      扫描器( scanner)。它的输入是组成源程序的字符( character)串。也就是说，词法分析器将源
      程序看成是一个平滑的字符流。按照组成记号( token)的规则，通过分析，剔除多余的空白符、注解
      等，切分出一个个的记号，并请求符号表管理器将这些记号中的标识符登记到符号表中。记号又称为单
      词( word)，或者单词记号。在分析过程中，如果发现错误，则进行相应的处理。在这个阶段发现的错
      误称为词法错误。

      简单地说，词法分析器的功能是：从左到右扫描组成源程序的字符串，并将其转化成单词串，将发现的
      标识符登记到符号表中，检查组词方面的错误并进行处理。

      例如，“sum=(10+20)*(num+square);”，当将其输入到词法分析器的时候，是一个由 s、u、m、
      =、(、1、0、+、2、0、… 共 25 个字符组成的串。词法分析器按照词法规则对这个字符串进行切分,
      得到 sum、=、(、10、+、20、)、*、(、num、+、square、)、; 共 14 个单词。同时还指出
      这些单词分别属于哪一类。通常用“种属”( kind)表示单词的类别。因此，词法分析器输出的是切分出
      来的单词构成的二元组序列。对于输入串 “sum=(10+20)*(num+square);”，词法分析器输出下列
      二元组序列：
      ::

         标识符,  sum
         赋值号,  =
         左括号,  (
         整常数,  10
         加号,    +
         整常数,  20
         右括号,  )
         乘号,    *
         左括号,  (
         标识符,  num
         加号,    +
         标识符,  square
         右括号,  )
         分号,    ;

      二元组的第一个分量为种别，通常用编码表示；第二个分量为单词的属性值，简称为单词的值，其一般
      形式为：(种别码，属性值)。

      由于词法分析器接收的是平滑的字符流，输出的是切分出来的单词，所以有人称词法分析为线性分析
      ( linear analysis)。

.. page 9

   2. 语法分析

      语法分析( syntax analysis, 或 parsing)由语法分析器( syntax analyzer)完成。

      语法分析器是编译程序的核心模块，它的输入是词法分析器的输出，即单词序列。它的输出是这些单词所
      组成的程序(语句)的结构，也就是不同层次的语法成分。所谓不同层次的语法成分，读者可暂时按照常规
      意义理解。例如，在一篇文章中，词组成主语、谓语、宾语、定语、补语、状语，而主语，谓语、宾语、
      定语、补语、状语又组成句子，一系列句子组成段，一系列段组成一篇文章。这里是类似的，一些语法成分
      组成新的语法成分，新的语法成分又组成新一层次的语法成分，最终组成程序。因此，语法分析又称为非线
      性的层次分析。关于概念“语法成分”的意义读者可暂时按照常规意义理解，确切的意义将在第2章中给出。
      后面读者可能偶尔还会遇到类似的情况，由于相关的知识尚不具备，会适当给出粗略解释或者按照常规意义
      理解，确切的意义将在适当的地方给出。

      简单地说，语法分析器的功能就是“组词成句”，分层给出程序的组成结构，指出语法错误，制导语义翻译。

      语法具有层次结构，通常呈树状结构，所以常用如图1.7所示的语法树( syntax tree)来表示。
      ::

         赋值语句
            ╟─ 左部量
            ║  ╙─ sum
            ╟─ = 
            ╟─ 表达式
            ║  ╟─ 表达式
            ║  ║  ╟─ (
            ║  ║  ╟─ 表达式
            ║  ║  ║  ╟─ 10
            ║  ║  ║  ╟─ +
            ║  ║  ║  ╙─ 20
            ║  ║  ╙─ )
            ║  ╟─ * 
            ║  ╙─ 表达式
            ║     ╟─ (
            ║     ╟─ 表达式
            ║     ║  ╟─ num
            ║     ║  ╟─ +
            ║     ║  ╙─ square
            ║     ╙─ )
            ╙─ ;

      图1.7 句子“ sum=(10+20)*( num+ square);”的语法树

      其中 10、20、num、square 为最基本的表达式,而 sum 是赋值语句的左部量, 10+20 是由 10 和
      20 做加法运算所形成的表达式, num + square 是由 num 和 square 做加法运算所形成的表达式,
      (10+20)、( num+ square) 则是这两个表达式加括号后形成的表达式, 而 (10+20)*(num+square)
      则是赋值语句的右部表达式，这个表达式与左部量 sum、赋值运算符“=”和行结束符“；”一起构成赋值语句。


.. page 10

   3. 语义分析
   
      语义分析( semantic analysis)完成由语法分析程序识别出来的语法成分的语义的分析。所以，语义
      分析器向上与语法分析器密切相关，通常在语法分析器分析出语法成分的同时进行该语法成分的语义分析,
      这种翻译方式称为语法制导翻译( syntax- directed translation)。

      例如，按照图 1.7 所示的分析结果，语法分析器知道这是一条赋值语句，该赋值语句的左部量是简单
      变量 sum，右部表达式是常数10与20 之和乘以简单变量 num 与 square 之和。为了完成这一赋值
      运算，首先要分别计算10与20、num 与 square 的和(需要执行加法运算)，然后再计算这两个和的积
      (需要执行乘法运算)，最后才将计算的结果传送给 sum(需要执行赋值运算)。按照该分析结果，语义分
      析通常以中间代码的形式表达相应的操作过程。

   4. 中间代码生成

      中间代码生成( intermediate code generating)以中间代码( intermediate code)的形式
      实现对语义分析结果的表示。

      一般来讲，对一种类型的计算机来说，无论机器语言还是汇编语言，都是紧密依赖于机器的。如果直接
      用它们来表示语义分析的结果，要考虑许多与机器相关的细节，这不仅会影响翻译的效率，使翻译完全
      受到机器的约束，而且在一种类型的机器上实现的编译很难用到其他类型的机器上，严重地影响了编译
      程序的移植。这样也不利于代码的优化，所以人们通常会先用中间代码的形式表示分析出来的语义。

      常用的中间代码有波兰表示( polish notation)、三元式( triple)、四元式( quadruple)、
      树( tree)。其中波兰表示又分为后缀( suffix)形式和前缀( prefix)形式，有时又称后缀表示为
      逆波兰表示( reverse polish notation), 而专门称前缀形式为波兰表示。这种表示方法是波兰
      科学家 Lukasiewicz 在 1929—1951 年期间发明的，这里省去了表达式中的括号，所以可以说是
      表达式的无括号表示( parenthesis- free), 为表达式的“顺序处理”提供了方便。

      句子“sum=(10+20) * (num+ square);”的中间代码表示如下。

      1) 后缀表示(逆波兰表示)： sum 10 20 + num square + * =
      2) 前缀表示(波兰表示)：= sum + 10 20 + num square

         无论前缀表示还是后缀表示，运算符、运算对象之间是不需要分隔符的，这里只是为了阅读上的方便，
         添加了适当的空格以示分隔。思考：为什么在这个阶段的机内表示中不用加分隔符?

      3) 四元式表示（operator, operand, operand, result）：
         ::

            (+, 10, 20, T₁)
            (+, num, square, T₂)
            (*, T₁, T₂, T₃)
            (=, T₃, sum)

         其中，第一个分量为运算符(也可称为操作符)，第二个、三个分量是两个运算对象，第四个分量为本
         四元式运算的结果或者转移的目标。一元运算的第三个分量为空，零元运算的第二个、三个分量均为空。
         在这种表示中，每个四元式中最多可以有 3 个地址，所以人们有时习惯地称其为三地址码。

         四元式的另一种表示形式为：
         ::

            T₁ = 10+20
            T₂ = num+square
            T₃ = T₁*T₂
            sum = T₃

         显然这种形式从视觉上看更符合人们的习惯，不过存放到机器中时，它们是相同的。

.. page 11

      4) 三元式表示: (+,10,20)

         算这两个和的积(需要执行乘法运算)，最后才将计算的结果传送给 sum (需要执行赋值运算)。
         按照该分析结果，语义分析通常以中间代码的形式表达相应的操作过程。
         ::

            (+, num, square)
            (*, (1), (2))
            (=, sum, (3))

         其中的编号表示相应编号的三元式的计算结果。所以，(1)、(2)、(3) 分别表示1号、2号、3号
         三元式的结果。

      5) 树表示:如图 1.8 所示。
         ::

                       =
               ╭───────┴───────╮
             sum               *
                        ╭──────┴──────╮
                        +             +
                     ╭──┴──╮       ╭──┴──╮
                    10     20    num   square

         图 1.8 语句“sum=(10+20)*(num+square);”的树表示

         从以上例子中不难看出，中间代码生成是根据语义分析的结果完成的。因此，语义分析和中间代码
         生成通常是在一个模块中完成的。

   5. 代码优化

      粗略地讲，代码优化( optimization)是指对中间代码进行优化处理，使程序运行能够尽量节省存储
      空间，更有效地利用机器资源，使得程序的运行速度更快，效率更高。当然这种优化变换必须是等价的。

      代码优化分为与机器无关的优化和与机器有关的优化。

      在与机器无关的优化中，又分为局部优化和全局优化。常见的局部优化有常量的合并、基本块(一种适当
      的范围)内公共子表达式的提取。例如，对于表达式 10 + 20 * 10，可以在编译期间就计算出结果210，
      不用等到运行目标代码时才完成这样的计算；对于 2+d，当 d 是实型变量的时候，在编译时就将 2 
      转换成实数 2.0，以免在运行中进行整型到实型的转换。全局优化主要是指循环优化。例如，可以将循环
      中不变的计算提到循环外进行，避免一些不必要的重复计算。还可以用比较省时的运算代替比较费时的运
      算来实现对计算强度的削弱。例如，用加法替代乘法，用减法替代除法。

      与机器有关的优化主要涉及更有效地利用机器的具体资源，通常是关于寄存器等稀缺资源的高效利用。
      典型的做法是将常用的运算对象存放在寄存器中，以便减少访问内存的次数。还有根据体系结构的情况
      进行的并行化处理、对多级存储体系的有效利用等。
   
      优化在编译程序的设计中是难度较大的一部分，而且也是非常耗时的。不同的编译程序对优化的要求是不
      一样的。有的做得多一些，有的针对面向的具体应用进行优化。所以人们特别称那些优化做得比较多的编译
      程序为优化编译器。

      赋值语句“sum=(10+20)*(num+square);”的三地址码经过优化以后可以变成如下三地址码序列：
      ::

         T₁ = num + square
         sum = 30 * T₁

      如果 num、 square、 sum 均被声明为实型的，则可以优化成如下代码：
      ::

         T₁ = num + square
         sum = 30.0 * T₁

   6. 目标代码生成

      目标代码生成是编译程序的最后一个阶段，如图 1.6 所示，它完成从中间代码到目标机器上的机器指令

.. page 12

      代码或者目标机器上的汇编代码的转换。前面曾经提到，按照目前的要求，如果生成的是机器指令代码，
      则必须是可重定位的。

      在这一阶段，编译程序要为中间代码中出现的运算对象分配存储单元、寄存器等，其中包括用户在源程
      序中定义的各种变量、常量以及在编译过程中生成的用来存放中间结果的临时变量，还要将中间代码翻译
      成等价的指令序列。

      例如，赋值语句“sum=(10+20)*(num+square);”被优化后的三地址码序列可以翻译成如下指令序列：
      ::

         MOV num, R1
         MOV square, R2
         ADD R2, R1
         MUL 30, R1
         MOV R1, sum

   7. 出错处理

      一种高级语言是被各种各样的用户用来编制程序的，用户提交的源程序不仅是各种各样的，而且其中难免
      会存在各种类型的错误，编译程序不仅要能够及时地发现这些错误，准确地确定它们的位置，还要能够及
      时地、以恰当的方式通知用户。作为更高的要求，编译程序还要能够纠正这些错误。较低的要求是当发现
      错误后，编译程序有能力尽量使错误“局部化”，也就是想办法使该错误的影响范围尽可能地小，保证编译
      程序能够继续完成对剩余部分的分析处理。前者称为错误的局部化( localization), 后者称为续编译
      ( compiling continuation)。

      在编译的不同阶段，通常会发现不同的错误。

      词法分析阶段通常会发现拼写方面的错误。例如，标识符的拼写不符合要求，常数的拼写非法，出现非法
      字符，等等。

      在语法分析阶段通常会发现更多的错误，如表达式、句子或程序结构等方面的错误。

      在语义分析阶段，会发现类型匹配问题、参数匹配问题、非法转移问题等。

      在这些分析阶段发现和处理的错误往往会影响后续的语义分析与中间代码生成、代码优化、目标代码生成等，
      所以，与前面介绍的词法分析、语法分析等阶段不同，出错处理是一个辅助模块，它为图 1.6 中的中间 5
      个模块提供服务。

   8. 符号表管理

      符号表管理( symbol table management)也是编译程序中的一个辅助模块,又称为表格管理。

      在编译程序将源程序翻译成等价的目标代码的过程中，会遇到一系列符号，它们有的是简单变量，有的是
      数组；有的是标号，有的是常量；有的是过程，有的是函数，与它们相关的信息在整个编译过程中都会被
      反复用到。从词法分析阶段发现它们，到在目标代码生成阶段为其分配存储单元或者利用它们所对应的地
      址或值，都需要统一管理。符号表管理就负责完成这项工作。

      符号表管理的主要功能是：按照编译过程中的信息需求，以不同的类型组织符号表，并以合适的方式查、
      填、维护这些表格，提供信息服务，辅助实现编译任务。

.. page 13

   图 1.9 所示是编译程序处理赋值语句“sum=(10+20)*(num+square);”的过程。
   ::

                     sum = (10 + 20) * (num + squane);
                                 ↓
                              词法分析器
                                 ↓
      (标识符, sum)(赋值号,=)(左括号,()(整常数,10)(加号,+)(整常数,20)(右括号,))
      (乘号, *)(左括号, ()(标识符, num)(加号, +)(标识符, square)(右括号, ))(分号, ; )
                                 ↓
                              语法分析器
                                 ↓
                                 = 赋值语句（语法树根节点）
                        ╭────┬───┴───┬────╮
                        sum  =      expr  ;
                              ╭──────┼──────╮
                             expr    *     expr
                        ╭─────┼─────╮ ╭─────┼─────╮ 
                        (    expr   ) (    expr   ) 
                        ╭─────┼─────╮ ╭─────┼─────╮ 
                        10    +    20 num   +   square
                                 ↓
                              语义分析器
                                 ↓
                                 =
                         ╭───────┴───────╮
                        sum              *
                                  ╭──────┴──────╮
                                  +             +
                               ╭──┴──╮       ╭──┴──╮
                              10     20    num   square
                                 ↓
                              中间代码生成器
                                 ↓
                              T₁ = 10 + 20
                              T₂ = num + square
                              T₃ = T₁ * T₂
                              sum = T₃
                                 ↓
                              代码优化器
                                 ↓
                              T₁ = num + squaπe
                              sum = 30 * T₁
                                 ↓
                              目标代码生成器
                                 ↓
                              MOV num, R1
                              MOV square, R2 
                              ADD R2, R1 
                              MUL 30, R1 
                              MOVRI, sum

   图 1.9 “sum=(10+20)*( num+ square);”的翻译过程

.. page 14

1.4 编译程序的组织
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   图 1.6 给出的编译程序总体结构是其基本构成，也可以看成是对逻辑功能的一种划分。按照该图，编译程序
   的翻译工作被分成词法分析、语法分析、语义分析与中间代码生成、代码优化、目标代码生成5个阶段。编译
   程序实际实现时，这5个阶段的工作可以被放在对源程序和中间结果的若干次扫描中完成。通常称编译程序对
   源程序和中间结果的完整扫描为遍( pass)。这里所谓的完整扫描指的是从头到尾完整地扫描一遍，并在扫
   描过程中完成相应的翻译(变换)和处理。除了第一遍的输入是源程序外，其他各遍扫描的输入均是上一遍扫
   描的输出。

   一个编译程序究竟需要多少遍扫描，要根据源语言、系统追求的目标、所用的计算机的资源状况等决定。在
   通常情况下，由于本遍扫描的结果将作为下一遍扫描的输入，这使得本遍扫描中得到的信息在下一遍扫描中也
   都是有效的，所以多遍扫描容易得到更优化的目标程序。但是，由于对源程序和中间结果的多次扫描增加了
   内存访问次数以及可能会增加对外部存储的访问次数而使翻译效率降低。而在较少遍的扫描，特别是一遍扫描
   中，由于分析所需的信息很可能是“目前”尚未掌握而无法利用的，这会导致产生的目标程序难以达到较优。
   例如，当前的分析需要后面出现的内容，尤其是在代码优化中，很多时候需要在某一范围内考虑问题，因此，
   通常一遍扫描很难完成合适的代码优化工作。

   图 1.10 所示是一个一遍扫描的编译程序，该程序以语法分析器为中心，词法分析器、语义分析与代码生成
   器均作为其子程序。当语法分析器在分析过程中需要一个单词时，就调用词法分析器，由它从源程序中切分出
   一个单词，并返回给语法分析器；当语法分析器按照规则发现一个适当的语法成分时，就调用语义分析和代码
   生成子程序，完成相应代码的生成。在一遍扫描的情况下，不再生成中间代码，所以也就难以进行更多的优化
   处理。另外，读者可以想象，在一个程序中，当前用到的对象可能是在其他地方定义的，相关的完整处理要延
   续到这些信息在后来获取后才能最终完成，这将导致某些工作完成起来比较困难。例如，跳转语句转向的标号
   可能是先引用后定义的，调用的子程序或者函数更可能是先引用后定义的。所以，在一遍扫描中，当前编译所
   需要的某些信息可能要等到后来才能知道。拉链回填技术就是解决这类问题的一种方法。必须指出，那些在一
   遍扫描中出现的问题并不总是可以解决的，对于一些复杂的程序设计语言，其编译程序很难用一遍扫描来实现。
   ::

      源程序 ---> 语义分析与 <-----> 词法分析器 <-----> 语法分析器、代码生成器 ---> 目标程序

   图 1.10 一遍扫描编译程序


.. page 15

   另外，读者不难发现，编译程序的任务是很复杂的。如果将所有任务都放在一遍中完成，将会需要内存等资源。
   如果将这些工作分到多遍扫描中分别完成，每次的任务只是其中的一部分，这样每遍扫描需要的资源就少一些，
   从而降低整个编译程序对资源的要求。据资料记载，早期曾经有一种机器，它只有 4 KB 的内存，其上的一个
   编译程序有将近 4 万条指令，这个编译程序被分成19遍，每遍只占用 2KB 左右的内存空间。这当然是一个
   特例，但是它表明编译程序对存储空间的依赖是不可忽视的。

   要将一个编译程序设计成多少遍，需要统筹决定。最简单的划分是对应编译程序的5个阶段，设计5遍扫描，每遍
   扫描完成一个阶段的工作。当然，并不是遍数越多越好，前面曾经讨论过，增加遍数势必会导致编译效率下降。
   按照这一思路，不妨将词法分析、语法分析、语义分析和中间代码生成做成一遍，将代码优化做成一遍，再将目
   标代码生成做成一遍，基本上就能较好地完成整个编译工作，这样也可以使整个编译程序的结构更加清楚。

   显然，如果在某一遍扫描中包括多个阶段的工作，那么这些工作需要穿插进行。

   无论设计成几遍扫描的形式，人们都希望编译程序完成的工作在限定条件下是最优的。作为一个大型软件系统，
   通常会要求编译程序本身的规模尽可能地小，执行速度快，诊断能力强，可靠性高，可移植性好，可扩充性好，
   而且它输出的目标程序规模小、执行速度快等。作为一个编译程序，至少需要满足以下条件。

   1. 正确性

      编译程序完成的翻译必须与源程序等价；目标程序必须是适合目标机器的。无论遇到含有什么样错误的
      源程序，编译程序都能够正常终止而不会崩溃。

   2. 完备性

      编译程序必须能够完成给定语言的任何程序的编译。不仅可以完成正确程序的编译，而且对含有词法、
      语法、语义错误的程序也能够准确地发现和处理这些错误。

   3. 可维护

      编译程序的结构是清晰的、便于维护的。

   4. 可移植

      程序的可移植性是很重要的，有利于提高软件系统设计与实现的效率，所以要求编译程序的设计者注意
      它的可移植性。

   为此,人们将编译程序划分成前端( front end)和后端( back end)。

   前端的工作是与源语言有关而与机器无关的，后端的工作则是与机器有关的部分。前端通常包括词法分析、
   语法分析、语义分析、中间代码生成、符号表的建立，以及与机器无关的中间代码优化。后端通常包括与
   机器相关的代码优化、目标代码的生成、相关错误的处理、符号表的访问等。

   进行前端和后端的划分为编译程序的移植提供了很大的方便。不难看出，由于前端的内容是与机器无关的，
   所以，对于某一种高级语言在不同类型机器上的编译程序来说，前端的处理基本上都是一样的，除非两个
   编译系统有不同的追求。所以这一部分内容可以被复用，而只要针对不同类型的机器构建后端就可以了。
   对于这种情况，人们通常采用的办法是，针对给定的高级程序设计语言构建一个标准的前端，以供每一种
   类型的机器的编译程序选用，然后再为各种类型的机器构建相应的后端。前端程序的复用性使得移植工作
   可以更方便地进行。

   从前端和后端的划分可以得到如下启示：如果要在同一种类型的机器上实现多种高级程序设计语言的编译
   程序，那么应该尽可能使它们的后端工作“一致起来”，这样就可以编制统一的后端，然后针对不同的语言
   构建不同的前端。当然，这种做法的基本要求是所有前端的结果至少都是用相同的中间语言表示的。值得
   注意的是，这种做法并不像为不同机器的同一种语言的编译程序构造统一的前端那么容易，因为不同的语
   言在许多机制上可能是不同的，而这种不同很可能影响到后端的进一步处理。无论如何，这其中的潜力是
   值得挖掘的。

.. page 16


1.5 编译程序的生成
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   由于编译程序也是运行在某类计算机上的程序，所以它一定是用程序设计语言编制的。

   在 1970 年以前，几乎所有的编译程序都是用机器语言编写的。由于机器语言的可读性差，所以这类编译
   程序无论从可读性、可靠性、可维护性，还是从编制效率的角度来说，都很差。到了 1980 年后，人们通
   常都是用高级语言来编制编译程序的，从而提高了编译程序的可读性、可靠性、可维护性，以及编制的效率。
   但是，用汇编语言(甚至机器语言)编制的编译程序能够更好地发挥硬件系统的效率，所以，在必要的时候，
   人们仍然使用这种低级语言去编制编译程序中的某些核心部分。

   无可辩驳，一种高级语言的编译程序终归是一个复杂的大型软件系统，为了构建这种系统，人们想出了很多
   办法，通过对语言描述机制的形式化，构建了一些自动生成系统，使得这些系统有能力根据语言的一些基本
   描述---规范说明，自动地生成编译程序的某些部分，如 Lex、Yacc、GAG、CGSS 等。另外，从开发环
   境方面，人们也在努力提供一些开发工具来支持编译程序的构造。通过使用这些工具，就能够较好地降低编
   译程序的构造难度，提高构造工作的效率，如 make。

   总体来说，从第一个编译程序出现至今，人们已经积累了许多经验、工具和系统，所以通常不会再从头到尾
   地编写一个编译程序的完整代码，而是尽可能利用现有的一些工具和编译程序，通过移植、自展等完成一个
   新的编译程序的构建。为了讨论这些技术的方便，下面先介绍T形图，然后分别介绍这些构造方法。

   1. T 形图

   一个编译程序通常会涉及 3 种语言。首先，编译程序本身是一个程序，所以它是用某种语言描述的，称之
   为编译程序的“表示语言”；其次，被编译程序的描述语言和目标程序的描述语言就是人们所说的源语言和
   目标语言。这两种语言体现了编译程序的功能( function)，用如图 1.11 所示的 T 形图表示。


.. page 17

   T 形的下端表示描述该编译程序的语言，T 形的左上端表示被编译程序的描述语言，T 形的右上端则表示
   编译出来的目标代码的描述语言。也就是说，T 形图的下端表示编译程序本身的描述语言，它的上端表示该
   编译程序的功能。如图 1.11 (b) 所示，一个用 A 语言描述的编译程序，它将 S 语言源程序翻译成 T 
   语言目标程序，简称“A 语言写的 S 语言编译程序”。
   ::

      S (Source) 源语言
      T (Target) 目标语言
      A 表示实现语言

                           功能
      ╭──────────────────╮                ╭──────────────────╮
      ├ S              T ┤──────>         ├ S              T ┤
      ╰─────╮     ╭──────╯                ╰─────╮     ╭──────╯
            │  A  │                             │  A  │
            ╰─────╯                             ╰─────╯
              (a)                                 (b)

   图1.11 表示语言翻译的T形图

   2. 自展

   如果要在一台机器上实现某一种语言的编译程序，由于这个编译程序将在这台机器上运行，所以，最直接的
   方法就是用该机器的机器语言或者汇编语言来编写这个编译程序。高级语言往往是比较复杂的，它的编译程
   序具有相当的规模。前面已经提到，无论用机器语言还是用汇编语言编写程序，都存在效率低下、可读性差、
   可维护性差、正确性难以保证等问题，所以人们往往会尽可能地用高级语言来编写程序。依据此思路，人们
   探索出通过自展实现一个高级语言的编译程序的路径。

   顾名思义，所谓自展( bootstrapping)，就像滚雪球那样，从一个较小的系统出发，不断地利用本身进行
   扩展，最终达到所要求的规模和功能。设有 A 机器上的语言 A，现在要实现语言 L 的编译程序，先抽出语
   言 L 中较简单的一部分，构成 L 的子语言 L₁；然后再从 L-L₁ 中抽出一些成分加到 L₁ 中，构成子语
   言 L₂; 再从 L-L₂ 中抽出一些成分加到 L₂ 中，构成子语言 L₃；……，如此继续下去，最后形成语言
   Lₙ = L。此时有：

   .. math::  L_1 \subset L_2 \subset L_3 \subset \cdots \subset L_{n-1} \subset L_n = L

   先用语言 A 编制 L₁ 的编译程序 C₁，不妨假定 C₁ 可以在 A 机器上运行，这样就得到了 A 机器上
   可以运行的 L₁ 的编译程序 AC₁ (即 C₁)，然后再用 L₁ 编制 L₂ 的编译程序 (C₂, 用 L₁ 的编译
   程序 AC₁ 对 L₂ 进行编译，得到一个可以在 A 机器上运行的、语言 L₂ 的编译程序 AC₂，……，如此
   继续下去，最后用 Lₙ₋₁ 编写 Lₙ (即L) 的编译程序 Cₙ，用 ACₙ₋₁ 对 Lₙ 的编译程序 Cₙ 进行编译，
   得到可以在A机器上运行的L的编译程序.ACₙ,，这个过程可以用图1.12 表示。图1.12的下端是这种自展
   过程的“实现原理”，它的上端是相应的实现过程。作为T形图的一个练习，读者应试着真正读懂这个图所表
   达的意思。

   对某一个具体的高级语言 L，其自展过程中的 n 一般取值为 2，具体过程如下。

   ① 先从L中提取一个子集构成 L₁，用 A 机器上的机器语言或者汇编语言编制出 L₁ 的编译程序 C₁，
   它可以在 A 机器上运行，从而得到在 A 机器上可以运行的 L₁ 的编译程序 AC₁ (即 C₁)。


.. page 18

   ::

      ╭──────────────────╮ 
      ├ Ln=L           A ┤ 
      ╰─────╮     ╭──────────────────╮
            │ Ln-1├ Ln-1           A ┤
            ╰─────╰─────╮     ╭──────╯
              Cn        │  A  │
                        ╰─────╯
                         Cn-1
                              ↖...
      ╭──────────────────╮     ╭──────────────────╮
      ├ Ln=L           A ┤     ├ Ln=L           A ┤
      ╰─────╮     ╭──────────────────╮     ╭──────╯
            │ Ln-1├ Ln-1           A ┤  A  │       
            ╰─────╰─────╮     ╭──────╯─────╯       
                        │  A  │        ACn 
                        ╰─────╯           
                         ACn-1
                              ↖...
      ╭──────────────────╮     ╭──────────────────╮
      ├ Ln=L3          A ┤     ├ Ln=L3          A ┤
      ╰─────╮     ╭──────────────────╮     ╭──────╯
            │ Ln-2├ L2              A ┤  A  │       
            ╰─────╰─────╮     ╭──────╯─────╯       
                        │  A  │        AC3 
                        ╰─────╯           
                         AC2
                              ↖
      ╭──────────────────╮     ╭──────────────────╮
      ├ L2             A ┤     ├ L2             A ┤
      ╰─────╮     ╭──────────────────╮     ╭──────╯
            │  L1 ├ L1             A ┤  A  │       
            ╰─────╰─────╮     ╭──────╯─────╯       
               C2       │  A  │        AC2 
                        ╰─────╯           
                         AC1-C1

   图 1.12 一般的自展过程

   ② 用 L₁ 编制 L₂=L 的编译程序 C₂。

   ③ 用AC₁对C₂进行编译，得到一个可以在A机器上运行的语言L的编译程序 AC₂, 这个过呈如图 1. 13 所示。
   ::

      ╭──────────────────╮    ╭──────────────────╮
      ├ L₁             A ┤    ├ L₂             A ┤
      ╰─────╮     ╭──────╯    ╰─────╮     ╭──────╯
            │  A  │                 │  L₁ │       
            ╰─────╯                 ╰─────╯       
            AC₁=C₁                     C₂

      (a) 用 A 编制 C₁           (b) 用 L₁ 编制 C₂

      ╭──────────────────╮     ╭──────────────────╮
      ├ L₂             A ┤     ├ L₂             A ┤
      ╰─────╮     ╭──────────────────╮     ╭──────╯
            │  L₁ ├ L₁             A ┤  A  │       
            ╰─────╰─────╮     ╭──────╯─────╯       
               C₂       │  A  │        AC₂ 
                        ╰─────╯           
                         AC₁-C₁

      (c) 用 AC₁ 编译 C₂, 得到 L 的编译程序 AC₂

   图 1.13 L 编译程序通常的自展过程

   3. 移植

   移植( portable)有时候又称为交叉编译( cross compiling),是指将一台机器上运行的系统进行处理，
   构造出在另一台机器上可以运行的系统。编译程序的移植是指：已知在 A 机器上有 L 语言的编译程序 AC，
   希望在 B 机器上实现 L 语言的编译程序 BC，而这是利用 L 语言在 A 机器上的编译译程序 AC 实现的。
   其具体步骤如下。

   ① 在 B 机器上用 L 语言编写编译程序 C，如图 1.14 (a)所示。

   ② 用 AC 对其进行编译，得到一个在 A 机器上运行的、将 L 语言源程序编译成在 B 机器上可以执行的
   目标程序的编译程序 ABC，如图 1.14 (b) 所示。

.. page 19

   ③ 用 ABC 对 C 再次进行编译，得到一个在 B 机器上可以运行的、将L语言源程序编译成在B机器上可以
   执行的目标程序的编译程序 BC，也就是 B 机器上 L 语言的编译程序，如图 1.14 (c) 所示。
   ::

                                    ╭──────────────────╮     ╭──────────────────╮
                                    ├ L              B ┤     ├ L              B ┤
      ╭──────────────────╮          ╰─────╮     ╭──────────────────╮     ╭──────╯
      ├ L              B ┤                │  L  ├ L              A ┤  A  │       
      ╰─────╮     ╭──────╯                ╰─────╰─────╮     ╭──────╯─────╯       
            │  L  │                          C        │  A  │        ABC  
            ╰─────╯                                   ╰─────╯           
               C                                        AC

      (a) 用 L 编制 B 机器上的编译程序 C      (b) 用 AC 编译 C, 得到 ABC (得到一个工具)
   
               ╭──────────────────╮     ╭──────────────────╮
               ├ L              B ┤     ├ L              B ┤
               ╰─────╮     ╭──────────────────╮     ╭──────╯
                     │  L  ├ L              A ┤  A  │       
                     ╰─────╰─────╮     ╭──────╯─────╯       
                        C        │  A  │        BC  
                                 ╰─────╯           
                                   ABC

      (c) 再用 ABC 编译 C, 得到 BC

   图 1.14 L 编译程序的自展过程

   4. 本机编译程序的利用

   第三种情况是，如何利用 A 机器上的编译程序构造 A 机器上另一种高级语言的编译程序。

   设 A 机器上已经有语言 L 的编译程序 AC-L，希望构造 A 机器上另一种语言 L' 的编译程序 AC-L'。
   这里可以用语言 L 来编制 L' 的编译程序，其过程如下。

   ① 用语言 L 编制 L' 的编译程序 C-L'。

   ② 用 AC-L 编译 C-L'，得到 A 机器上的 L' 语言的编译程序 AC-L'。

   图 1.15 所示是这个过程的T形图。
   ::

                                    ╭──────────────────╮     ╭──────────────────╮
                                    ├ L'             B ┤     ├ L'             B ┤
      ╭──────────────────╮          ╰─────╮     ╭──────────────────╮     ╭──────╯
      ├ L'             B ┤                │  L  ├ L              A ┤  A  │       
      ╰─────╮     ╭──────╯                ╰─────╰─────╮     ╭──────╯─────╯       
            │  L  │                         C-L'      │  A  │        AC-L'  
            ╰─────╯                                   ╰─────╯           
              C-L'                                      AC-L

      (a) 用 L 编制 L' 的编译程序 C-L'            (b) 再用 AC-L 编译 C-L', 得到 AC-L'

   图1.15 本机编译程序的利用


.. page 20

   5. 编译程序的自动生成

   下面简单介绍编译程序的自动生成问题。

   计算机科学与技术学科( discipline of computer science and technology, 又称计算学科, 
   computing discipline) 是一个非常宽泛的学科，它涉及科学、工程、技术问题。如果说科学在于研
   究现象、发现规律，工程在于低成本、有效地构建优质的系统，技术则在于实现方便的服务。落实到计算机
   科学与技术学科，计算机科学研究“什么能够被有效地自动计算”；计算机工程、软件工程分别从硬件和软件
   两方面研究和实现“如何低成本、高效地实现自动计算”；而计算机技术则侧重于研究“如何方便、有效地利
   用计算系统进行计算”。所以，计算机科学与技术学科的根本问题是：什么能且如何被有效地自动计算。这
   就是说，本学科追求的是自动计算。读者需要通过在学习过程中不断体验自动计算的乐趣来不断提高自己的
   专业修养。

   实际上，编译程序就是一种典型的自动计算系统。它按照一种高级语言的基本规定，自动地对用此语言描述
   的各种各样的源程序实施等价变换，通常不需要人工干预。编译程序本身也是一种程序，它需要按照语言的
   基本规定去处理输入，那么，它本身也应该是根据相应的处理语言的这些基本规定构造出来的，加上它的规
   模比较大，尤其是在四五十年前，它更被视为规模宏大的系统，因此，人们从很早就开始研究可以生成编译
   程序的程序，那时有人将这种系统称为编译程序的编译程序( compiler-compiler)。其中开发较早的是
   关于词法分析器和语法分析器的构造系统。

   Lex 是一个用 C 语言编制的词法分析器生成程序，它接受高级语言中单词组成的规则的形式化描述和有关
   处理，自动产生相应的词法分析器，如图 1.16 所示。
   ::

         符合语言 L 规定的词法的形式化描述
                     ↓
               Lex 词法分析器生成器
                     ↓
               语言 L 的词法分析器
                     ↓
               语言 L 的词法分析器  ←------- 语言 L 描述的源程序 (字符流)
                     ↓
               语言 L 描述的源程序
                     ↓
               与源程序等价的单词序列

   图1.16 词法分析器的自动生成与利用

   Lex( lexical analyzer) 接受符合语言 L 规定的词法描述，这种描述通常是被称为正则表达式
   ( regular expression) 的东西及其辅助说明，然后根据所给的正则表达式构造一种称为有穷状态
   自动机( finite automaton)的东西，再经过适当的处理，构成相应的词法分析器 (图 1.16 的上半部)。
   这个词法分析器可以完成用语言 L 描述的源程序的词法分析 (图 1.16 的下半部)。

   Yacc( Yet another compiler compiler) 是一个用 C 语言编制的语法分析器生成程序, 可与 
   Lex 配套使用。与 Lex 类似，它接受高级语言的语法规则( syntax rule)的形式化描述(也就是上面
   提到的对语言组成的“基本描述”)，自动产生相应的语法分析器，如图 1.17 所示。在这个自动构造程序中，
   同样用到了有穷状态自动机，它最终构造出来的是 LALR(1) 分析器。有关正则表达式、语法规则、有穷状态
   自动机、LALR(1) 算法等将在后续的章节中讨论，读者暂时不必深究它们。

.. page 21

         符合语言 L 规定的语法的形式化描述
                     ↓
               Yacc 语法分析器生成器
                     ↓
               语言 L 的语法分析器  ←-------  语言 L 描述的源程序 (字符流)
               语言 L 的词法分析器
                     ↓
               源程序的语法分析结果

   图1.17 语法分析器的自动生成与利用

1.6 本章小结
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   编译原理是一门非常好的课程，通过学习，可以体验到大师们对计算机问题求解的闪光思想、思考方式，
   会掌握计算学科一系列典型的方法，体会到自动计算的乐趣。

   翻译程序是将一种语言的源程序翻译成等价的另一种语言程序的程序，编译程序是翻译程序的一种，它是
   将用高级程序设计语言书写的程序翻译成等价的机器语言程序或者汇编语言程序的程序。要求不同时将会
   使用不同的编译程序。

   基本的编译程序由词法分析、语法分析、语义分析与中间代码生成、代码优化、代码生成、符号表管理、
   出错处理 7 个功能模块构成，它将编译分成 5 个阶段，这 5 个阶段可以放在扫描的不同遍中。相应
   的工作有的是与源语言紧密相关的，有的是与机器紧密相关的，依此相关性将其分成前端和后端，有利于
   程序的复用，可以提高编译程序的构造效率。

   T 形图是一种很好的表达编译程序构造途径的工具，用它可以方便地表示自展、移植、本机编译器的利
   用等。另外，为了提高编译程序的构造效率，探索相应的自动生成技术也是人们努力的方向，Lex、Yacc
   是很典型的自动生成工具。

   习  题

   1. 简要总结机器语言、汇编语言、高级语言的特点。
   2. 翻译程序有哪几种? 它们的功能分别是什么?
   3. 汇编语言程序和汇编程序是什么关系?
   4. 什么是编译程序? 什么是编译系统?
   5. 给出编译程序和解释程序的异同。
   6. 画出编译程序的总体结构图，简要说明每个模块的功能。
   7. 试分析一个简短的高级语言程序，找出几个属于语法、词法、语义的语言现象。

.. page 22

   8. 编译的阶段和扫描的遍各表示什么意思? 为什么要分阶段? 为什么要设计扫描的遍?
   9. 编译程序的总体结构、阶段划分、扫描遍的设计对人们进行一个软件系统的设计有什么启发?
   10. 规划一个3遍扫描的编译程序，在各遍扫描中要完成哪些阶段的工作，并给出规划的理由。
   11. 总结设计实现一个编译程序需要考虑的问题和达到的基本目标。
   12. 在词法分析中切分词的时候会遇到什么样的问题?
   13. 在语法分析中要解决什么样的问题?
   14. 词法分析和语法分析放在一起用一个模块完成是否可行? 通常人们是将它们分开处理的，这是为什么?
   15. 语义分析如何与语法分析相关联?
   16. 在讨论移植的时候，实际上是将A机器上的语言L的编译程序用做工具，重新编写B机器上的L语言编译
       程序。很显然，这两个编译程序肯定有许多地方是相同的，如果A机器上存放有语言L的编译程序的源
       程序，是否可以通过对这个程序进行改写而得到B机器上的语言L的编译程序? 如果可以，这项工作
       大体上应该如何进行? 编译程序的前端、后端划分对此有什么样的支撑作用?
   17. 设A机器上有语言L的编译程序，可以用它来编制B机器上的语言.L'的编译程序，试用T形图进行表示。
   18. 在自展技术的讲述中，先介绍了通过 n 步自展得到一个语言的编译程序，后来又在一般自展过程中取
       n=2, 显然读者理解前面的内容比理解。n=2 时的情况要相对困难一些，为什么要先讨论一般情况? 
       在学习过程中是否有机会体会这样讨论问题的必要性?
   19. 在编译程序的自动生成中提到的“基本描述”应该是对程序设计语言的描述，而大家知道，这个语言通
       常应该是无穷的(有无穷多条语句，这些语句可以组成各种各样的源程序)，显然这种描述本身应该是
       有穷的，否则就无法提交给 Lex 或者 Yacc。那么，它应该是什么样的? 比如说，程序设计语言中
       有正整数，从一般意义上讲，正整数有无穷多个，在“基本描述”中如何刻画正整数?
   20. 本章提到了系统自动生成编译程序的问题，进一步体现了“自动计算”这一根本功能，要完成对一类
       问题的自动计算，对一个系统进行设计时应该做哪些方面的努力? 按照这一思路，总结一下到目前
       为止所见到的系统和所设计实现的系统是如何完成什么样的自动计算的。

.. page 23


第 2 章 高级语言及其文法
-------------------------------------------------------------------------------

   在上一章的最后提到，计算机科学与技术学科的根本问题是：什么能且如何被有效地自动计算? 这是计算机
   学科的专家们一生致力于探讨的问题。为了使一个计算机系统能够实现有效的“自动计算”，必须考虑使系统
   有能力对规定范围内可能出现的所有问题做出适当的反应。

   作为高级程序设计语言的编译程序，它将面对用符合规定的语言描述的各种各样的源程序。从规模上说，这
   种程序是无穷多的。也就是说，编译程序面对的是一个无穷语言，要解决的是无穷域中的问题。显然给出的
   语言的“基本描述”应该是有穷的，否则编译系统将无法去处理它们，因此首先需要给出高级程序设计语言的
   一个有穷描述，而且这种描述应该便于计算机系统去处理，所以“基本描述”必须是形式化的，本章就将讨论
   这些问题。

   为了解决“基本描述”的形式化问题，本章首先讨论关于形式化描述的基本途径，重点讨论对组成语言的字母
   和组合这些字母的规则描述的需求，然后给出在有穷描述的要求下，对语言的字母表、组成语言中遇到的基
   本概念及其相关的运算进行讨论。在此基础上讨论语言的有穷描述——文法的基本定义、文法的构造、Chomsky
   体系、描述语言句子结构的语法树和影响语言分析的二义性等问题。


2.1 语言概述
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   为了有效地描述语言，首先必须弄清语言的基本概念。那么，什么是语言呢? 它仅仅是由一些字组成的吗? 
   下面先来看一些自然情况。

   在世界上，存在着多种多样的语言，它们都是被一定的群体用来进行信息交流的。对人类来说，在日常生活、
   社会实践和科学实验中，语言起着在对象之间进行信息交流的作用。因此可以说，语言是一定的群体用来进
   行信息交流的一种工具。只不过这种工具可以通过音、形(书面、口头、动作)来表达。由于语言是进行信息
   交流的工具，所以，它必须有着一系列的生成规则、理解(语义)规则，只有当使用者都按照这些规则来构造
   “句子”和理解“句子”时，才能达到交流信息的目的。

   高级程序设计语言是人们用来描述问题并对其进行求解的算法，告诉计算机系统要做什么，怎么做。因此，
   高级程序设计语言是人与计算机系统之间的信息交流工具。而到目前为止，计算机的计算都是基于数字的，
   所以，要想使用这种方式实现对问题的求解，首先必须用符号描述问题本身及其求解过程，这就是形式化，
   因此需要给出该语言的严格描述，包括它的表达形式、表达的意思等。

.. page 24


   至于如何实现描述，下面先看一个例子。对“我是一个大学生”这样一个由汉字组成的串，大家认识其中的
   每个字，并且知道它的含义，把这个由字组成的序列称为句子，其中字是组成句子的基本成分。但是对于
   “今节日上课始开译第一编”，同样都是由汉字组成的串，而且大家也都认识其中的每一个字，但对它表达
   的意义则是需要猜测的。如果重新对这些汉字进行排列，将其变成“今日开始上第一节编译课”，就清楚其
   含义了。究其原因，前者没有按照约定俗成的“规则”去组合这些字，而后者则是按照这些规则用字组成的。
   这里的规则就是组成汉语句子的规则。所以，作为信息交流的工具，语言的描述涉及最小单位的“字”和组合
   这些“字”的“规则”，这些规则用于规定句子、句子中的成分的构成。

   实际上，在一种语言中，一个“句子”的结构既可以是简单的，也可以是复杂的。为了描述这种结构，就需
   要刻画其不同层次的成分。下面定义高级程序设计语言中最基本的成分：单词、语句、程序、语言。

   *  单词( token)是按照一定的规则由字符( character)组成的串。单词又称为记号、词、字等。
   *  语句( sentence)是按照一定的规则由单词组成的串。语句通常被称为句子。
   *  程序( program)是按照一定的规则由语句组成的串。
   *  语言( language)是语句的集合。

   例如，一般地，在高级程序设计语言中：

      *  组成单词的符号是由大小写英文字母、各种运算符、分隔符等组成的 ASCII 码字符集。
      *  赋值语句的一般形式为：左部量 = 右部表达式；
      *  条件语句的一般形式为：
         *  if 条件表达式 then 语句；或者
         *  if 条件表达式 then 语句1 else 语句2;
      *  循环语句的一般形式为： 
         *  while 条件表达式 do 语句；或者
         *  repeat 语句 until 条件表达式;
      *  程序的一般形式为：语句1；语句2；…；语句n；
      *  复合语句的形式一般为：{语句1；语句2；…；语句n}

   上述这些描述形式虽然比较简洁，但其形式化程度还不足以由系统自动处理。为了提高其形式化程度， 
   Chomsky 定义了一种称为文法( grammar)的形式，并围绕着语言描述做了大量的工作，取得了一系列
   成果，将对语言的研究推进到形式化的新阶段。

   对语言的形式化描述的研究主要属于形式语言的范畴，其研究结果很快就在计算机科学与技术领域中得到
   了应用。20世纪50年代,人们用巴克斯范式( Backus- Naur form 或 Backus normal form，BNF)
   成功地对高级语言 ALGOL 60 进行了描述。实际上，巴克斯范式就是上下文无关文法( context-free 
   grammar)的一种表示形式。这一成功,促成了形式语言在 20世纪60年代的快速发展。尤其是上下文无关
   文法，被作为计算机程序设计语言的文法的最佳近似描述得到了较为深入的研究。

   作为编译原理的基础，形式语言对语言的研究包括 3 个方面。首先是如何表示( represent)一种语言。

.. page 25

   如果语言只含有有穷多个句子，这个问题就比较简单了。因为只要简单地列出所有的句子就可以了(后面会
   讲到，有穷集是结构最简单的正则语言)。在处理这类语言的翻译问题的时候，最基本的方法就是给出每个
   语句的最佳翻译实现，当对一组语句进行翻译时，只要将每个语句的翻译结果按照原语句的顺序排列在一起
   就可以了。这种一对一的对应是非常机械的，从而也是非常简单的。虽然这种一对一意义上的最优并不能
   保证全局的最优，但却是可行的。

   当语言含有无穷多个语句的时候，它的表示就成了问题，实际上人们关心的是它的有穷描述。高级程序设计
   语言是用来刻画程序的，这些程序可以看成是无穷的，因此必须谈到它们的有穷描述( finite description)。
   还需要关心的是语言的结构( structure)。要想给出语言的一个恰当描述，就必须研究语言的结构，
   对无穷语言的描述来说，研究其结构更是必需的。反过来，研究语言结构的有穷描述又是研究语言的重
   要途径。 Chomsky所设计的文法正是用来实现对语言的有穷描述的。

   那么，一个给定的语言是否存在有穷描述? 如何给出一个语言的有穷描述呢? 是否所有的语言都有有穷
   描述呢? 答案是否定的。但是对于高级程序设计语言来说，由于计算机本身的限制，通常它们都存在有
   穷描述，否则计算机将无法处理它们。问题在于采用什么样的合适形式实现有穷描述，这是关于语言研究
   的第二个问题。

   当然，对语言的处理，也就是编译中对语言进行分析的问题，就是要研究具有有穷表示的语言的结构及
   其特性，这是语言研究的第三个问题。

   文法又称为语法。在编译程序的设计中，为了处理方便，并使系统结构更清晰，将单词的组成规则称为
   词法，由词法分析器处理；而将组成语句和程序的规则称为语法，由语法分析器处理。

   如何给出更能满足高级语言编译需要的形式化描述呢?

2.2 基本定义
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   为了便于进行相关的讨论，首先定义以下基本概念。

   定义2.1字母表( alphabet)是一个非空有穷集合，字母表中的元素称为该字母表的一个字母( letter),
   或者字符( character)。

   值得提醒读者注意的是，字母表具有非空性和有穷性。在本书中通常用 ∑ 表示字母表。

   例2.1不同的字母表。

   (1) {a,b,c,d}。
   (2) {a,b,c,…,z}。
   (3) {0,1}。
   (4) {a,b,c,…,z,A,B,…,Z}。
   (5) {+,-,*,/,!,%,(,),&,=,>,<,#,∧,∨,>=,<=,\n,\t}。  □

   字母表中的字母是组成字母表上的语言中的任何句子的最基本元素，所以，字母表中的字符
   必须具有如下两个特点。

.. page 26

   ① 整体性( monolith), 也称为不可分性。例如, ``{\n,\t}`` 中的 ``\n、\t`` 均是单个字符
   —— \n 不能被拆分成 “\\”和“n”; \\t 不能被拆分成“\\”和“t”。

   在高级程序设计语言中，通常取ASCII字符集中的字符为基本字符。值得注意的是，有时候会用两个字符
   构成一个新的记号( token，又称为单词)，以表达相应的意思。注意，这个时候它已经不是“字符”，而是
   “记号”了。

   例如，在赋值语句、算术表达式、关系表达式中，通常用“*”表示乘法，而用“**”表示幂运算；用“:”表示
   冒号，“=”表示等号，而用“:=”表示赋值；用“>”表示大于，而用“>=”表示大于等于。这里, “*”“:”“=”
   “>”等既是字符, 又是记号, 而“**”“:=”“>=”则都是由两个字符构成的记号。

   ② 可辨认性( distinguishable)，也称为可区分性。这一点要求字母表中的字符是两两不同的，必须
   可以明确区分。如{a，b，a}就不是字母表，因为其中的 a 和另一个 a 是无法区分的。换句话说，字母
   表不可以是多重集。

   对一种高级程序设计语言来说，它的字母表就是该语言的有效字符集。

   定义2.2 设 ∑₁、∑₂ 是两个字母表, ∑₁ 与 ∑₂ 的乘积( product)为:

      ∑₁∑₂ = {ab|a ∈ ∑₁, b ∈ ∑₂}

   例2.2字母表的乘积。
   ::

      (1)        {0,1}{0,1}  =  {00,01,10,11}。
      (2)    {0,1}{a,b,c,d}  =  {0a,0b,0c,0d,1a,1b,1c,1d}。
      (3)    {a,b,c,d}{0,1}  =  {a0,a1,b0,b1,c0,c1,d0,d1}。
      (4)      {i,f,w}{0,1}  =  {i0,i1,f0,f1,w0,w1}。

   显然，字母表的乘积不满足交换律。

   定义2.3 设 ∑ 是一个字母表，∑ 的 n 次幂( power) 的递归定义为：

      (1) ∑⁰ = {ε}
      (2) ∑ⁿ = ∑ⁿ⁻¹∑, n≥1

   其中，ε 是由 ∑ 中的 0 个字符组成的。

   定义2.4 设 ∑ 是一个字母表, ∑ 的正闭包( positive closure)为:

   .. math::  \sum ^{+} = \sum \cup \sum ^{2} \cup \sum ^{3} \cup \sum ^{4} \cup \cdots

   ∑ 的克林闭包( Kleene closure)为:

   .. math::

      \sum ^{*} &= \sum ^{0} \cup \sum ^{+}   \\
                &= \sum ^{0} \cup \sum \cup \sum ^{2} \cup \sum ^{3} \cup \cdots

   例2.3字母表的闭包。

   (1) {0,1}⁺ = {0,1,00,01,10,11,000,001,010,011,100,…}
   (2) {0,1}* = {ε,0,1,00,01,10,11,000,001,010,011,100,…}
   (3) {a,b,c,d}⁺ = {a,b,c,d, aa, ab, ac, ad, ba, bb, bc, bd,…, aaa, aab, aac, aad, aba, abb, abc, …}
   (4) {a,b,c,d}* = {ε,a,b,c,d, aa, ab, ac, ad, ba, bb, bc, bd,…, aaa, aab, aac, aad, aba, abb, abc, …}

.. page 27

   一般地，有：

      :math:`\sum^*` = {x | x 是 ∑ 中的若干个(包括0个)字符连接而成的一个字符串}
      = {ε} ∪ {x|x 是 ∑ 中的1个字符连接而成的字符串} ∪ {x|x 是 ∑ 中的两个字符连接而成的字符串} 
      ∪ {x|x 是 ∑ 中的 3 个字符连接而成的字符串} ∪ {x|x 是 ∑ 中的 4 个字符连接而成的字符串}
      ∪…∪{x|x是∑中的 n 个字符连接而成的字符串}∪…

      :math:`\sum^+` = {x|x 是 ∑ 中的至少一个字符连接而成的字符串}
      = {x|x 是 ∑ 中的 1 个字符连接而成的字符串} ∪ {x|x 是 ∑ 中的两个字符连接而成的字符串}
      ∪ {x|x 是 ∑ 中的 3 个字符连接而成的字符串} ∪ {x|x 是 ∑ 中的 4 个字符连接而成的字符串}
      ∪…∪{x|x 是 ∑ 中的 n 个字符连接而成的字符串}∪…

   定义2.5 设 ∑ 是一个字母表, :math:`∀x∈∑^*`, x 称为 ∑ 上的一个句子( sentence)。ε 称为
   ∑ 上的一个 空句子( null)。两个句子被称为相等，当且仅当它们对应位置上的字符都对应相等。

   句子还可以称为字( word)、行( line)、串( string), 也可称为字符行、字符串。

   定义2.6 设 ∑ 是一个字母表，对任意的 :math:`x，y ∈ ∑^*，a∈∑`，句子 xay 中的 a 称为 a 在
   该句子中的一个出现( occurrence)。

   以后尽量借用数理逻辑中的全称量词“∀”来表示所有的，用存在量词“∃”来表示存在。“∀”读作“所有的”, 
   “∃”读作“存在”。例如, ∀x,y∈∑”读作“∑”中所有的x、y”,表示 :math:`∑^*` 中任意的 x 和 y;
   :math:`∃x,y∈∑` 读作 “:math:`∑^*` 中存在 x、y”, 表示 :math:`∑^*` 中有这样的 x 和 y。

   设 :math:`xay∈∑^*`, 定义:

   (1) 当 x=ε 时，a 的这个出现为字符串 xay 的首字符，也就是该字符串的第 1 个字符。
   (2) 如果 a 的这个出现是字符串 xay 的第 n 个字符，则 y 的首字符的这个出现是字符串 xay 的第 n+1 个字符。
   (3) 当 y=ε 时，a 的这个出现是字符串 xay 的尾字符。

   例2.4字母的出现。

   设字母表 ∑={a，b}，则 abaabb 是 ∑ 上的一个字符串，在这个字符串中，字母 a 有 3 个不同的出现：
   第 1 个出现是该字符串的首部，第 2 个出现是该字符串的第 3 个字符，第 3 个出现是该字符串的第 4 
   个字符；字母 b 也有 3 个不同的出现：第 1 个出现是该字符串的第 2 个字符，第 2 个出现是该字符串
   的第 5 个字符，第 3 个出现是该字符串的第 6 个字符。

   定义2.7 设 ∑ 是一个字母表，∀x∈∑*，在句子 x 中字符出现的总个数称为该字符串的长度( length),
   记作|x|。

   例2.5句子的长度。

   字母表 ∑={a,b} 上的字符串 abaabb 的长度为 6, 字符串 bbaa 的长度为 4, ε 的长度为 0, 
   bbabaabbbaa 的长度为 11, 即:

.. page 28

   ::

      |bbabaabbba| = 11
          |abaabb| = 6
             |bba| = 4
             |±bε| = 0              □

   注意：

   (1) ε 是一个串, 它的长度为 0: ``|ε| = 0``。
   (2) {ε} ≠ ∅。这是因为 {ε} 不是一个空集, 它是含有一个空字符串 ε 的集合。 ``|{ε}|=1``, 而 ``|∅|=0``。

   定义2.8 设 ∑ 是一个字母表, ∀x,y∈∑⁺, x, y 的并置( concatenation)是这样一个串, 该串是
   由串 x 直接连接串 y 所组成的，记作 xy，并置又叫做联结。

   对于 n≥0, 串 x 的 n 次幂( power)定义为:

   (1) x⁰ = ε
   (2) xⁿ = xⁿ⁻¹x

   例如, {0,1} 上的串 x=001, y=1101, 则: xy=0011101; 如果 x=0101, y=11010, 则 xy=0101110110。
   对于 x=001, y=1101, 有 x⁰=y⁰=0, x⁴=00100101001, y⁴=11011101111011:
   对于 x=0101, y=110110, 有 x²=010101, y²=110110101100。
   不难证明, 作为 ∑* 上的运算, 对 ∀x,y,z∈∑*, 并置具有如下性质。

   (1) 结合律: ( xy)z=x( yz)。
   (2) 左消去律: 如果 xy= xz, 则 y=z。
   (3) 右消去律: 如果 yx= zx, 则 y=z。
   (4) 唯一分解性: 存在唯一确定的 a₁,a₂,…,aₙ∈∑,  使得 :math:`x=a_{1}a_{2} \cdots a_{n}`。
   (5) 单位元素: εx=xε=x。

   定义2.9 设 ∑ 是一个字母表, 对 ∀x,y,z∈∑°, 如果 x= yz, 则称 y 是 x 的前缀( prefix);
   如果 z≠ε, 则称 y 是 x 的真前缀( proper prefix)。z 是 x 的后缀( suffix), 如果 y≠ε,
   则称 z 是 x 的真后缀( proper suffix)。

   例2.6句子的前缀、后缀、真前缀和真后缀。

   字母表 ∑={a，b} 上的句子 abaabb 的前缀、后缀、真前缀和真后缀如下。
   ::

      前缀: ε,a, ab, aba, abaa, abaab, abaabb
      真前缀: ε,a, ab, aba, abaa, abaab
      后缀: ε,b, bb, abb, aabb, baabb, abaabb
      真后缀: ε,b, bb, abb, aabb, baabb  □

   为了以后叙述方便，约定：

   (1) 用小写字母表中较为靠前的字母 a，b，c，… 表示字母表中的字母。
   (2) 用小写字母表中较为靠后的字母 x，y，z，… 表示字母表上的句子。

.. page 29

   (3) 用 :math:`x^T` 表示 x 的倒序。例如, 如果 x= abc, 则 :math:`x^{T}=cba`。

   定义2.10 设 ∑ 是一个字母表, 对 ∀x,y,z,w,v∈∑*, 如果 x= yz, w= yv, 则称 y 是 x 和 w 
   的公共前缀( common prefix)。如果 x 和 w 的任何公共前缀都是 y 的前缀，则称 y 是 x 和 w
   的最大公共前缀( maximal common prefix)。如果 x= zy, w= vy, 则称 y 是 x 和 w 的公共
   后缀( common suffix)。如果 x 和 w 的任何公共后缀都是 y 的后缀，则称 y 是 x 和 w 的最大
   公共后缀( maximal common suffix)。

   定义2.11 设 ∑ 是一个字母表, 对 ∀w,x,y,z∈∑°, 如果 w= xyz, 则称 y 是 w 的子串( substring)。

   例如，{0，1} 上的串 x=0101 有如下不同的子串：

      ε,0,1,01,10,010,101,0101

   字母表 ∑={a,b,c} 上的句子 abacb 有如下不同的子串:

      ε,a,b,c, ab, ba, ac, cb, aba, bac, acb, abac, bacb, abacb

   根据这两个例子，对于任意一个字母表上的任意字符串 x，读者应该能够找出它的所有不同子串来。

   定义2.12 设 ∑ 是一个字母表, 对 ∀t,u,v,w,x,y,z∈∑", 如果 t= uyv, w= xyz, 则称 γ 是
   t 和 w 的公共子串( common substring)。如果 y₁,y₂,…, yn 是 t 和 w 的公共子串, 且
   ``|yⱼ|=max|y₁|``, 则称 y, 是 t 和 w 的最大公共子串( maximal common substring)。

   显然，两个串的最大公共子串并不一定是唯一的。

   定义2.13 设 ∑ 是一个字母表, ∀L⊆∑°, L 称为字母表 ∑ 上的一个语言( language), ∀x∈L，
   x 称为 L 的一个句子。

   例如, {00,11}, {0,1,00,11}, {0,1,00,11,01,10}, {0,1}, :math:`\{00,11\}^*`, 
   :math:`\{01,10\}^*`, :math:`\{00,01,10,11\}^*`, :math:`\{0\}\{0,1\}^* \{1\}`,
   :math:`\{0,1\}^* \{111}{0,1\}^*` 都是字母表{0,1}上的不同语言。

   由于 ∑ 的非空有穷性和它的字符的可区分性，从集合基数的角度划分，∑ 上的语言 L 可分成两类：
   含有有穷个句子的和含有可数无穷个句子的。当含有有穷个句子时，称为有穷语言；当含有无穷个句子时，
   称为无穷语言。

   由此定义可知，一个字母表上的语言就是这个字母表上的一些串(又称为句子)的集合，它们都满足给定的
   条件。如果能够用便于计算机处理的适当形式给出这些条件的有穷描述，则对该语言的处理是非常有用的。
   就目前的计算机技术来讲，这个“适当的形式”应该是形式化的。

   定义2.14 设 ∑₁、∑₂ 是字母表，:math:`L_{1} \subseteq \sum_{1}^{*}, L_{2} \subseteq \sum_{2}^{*}`, 
   语言 L₁ 与 L₂ 的乘积( product)是字母表 ∑₁ ∪ ∑₂ 上的一个语言，该语言定义为：

      L₁L₂ = {xy|x∈L₁,y∈L₂}

   例2.7 令 ∑={0,1}, 下面是 ∑ 上的语言的例子。

   (1) L₁ = {0,1}
   (2) L₂ = {00,01,10,11}
   (3) L₃ = {0,1,00,01,10,11,000,…} = ∑⁺

.. page 30

   (4) L₄ = {ε,0,1,00,01,10,11,000,…} = ∑*
   (5) L₅ = {0ⁿ|n≥1}
   (6) L₆ = {0ⁿ1ⁿ|n≥1}
   (7) L₇ = {0ⁿ1ᵐ|n,m≥1}
   (8) L₈ = {0ⁿ1ⁿ0ⁿ|n≥1}
   (9) L₉ = {x|x ∈ ∑+ 且 x 中 0 和 1 的个数相同}
   (10) L₁₀ = {0ⁿ1ᵐ0ᵏ|n,m,k≥0}                     □

   例2.8 对于任一字母表 ∑，下列语言具有不同的结构。

   □

   定义2.15 设 ∑ 是一个字母表，\forall L \subseteq \sum \limits ^{*},，L的n次幂( power)是一个语言，该语言定义为：
   (1) 当n=0时，Lⁿ={c}。
   (2) 当n≥l时，Lⁿ=Lⁿ⁻¹L。
   L的正闭包((positive \emph esizeclosure)L^{+}是一个语言，该语言定义为：
   L^{+}=L \cup L^{2} \cup L^{3} \cup L^{4} \cup \cdots
   L的克林闭包(({Kleene \} \ closure)L^{ \ast }是一个语言，该语言定义为：
   L^{*}=L^{0} \cup L \cup L^{2} \cup L^{3} \cup L^{4} \cup \cdots
   有了上述基本定义，就可以考虑如何用有穷的形式以形式化的方式来定义一个语言了。
   2.3文法的定义
   _文法( grammar)的概念最早是由语言学家在研究自然语言的过程中完成形式化的。那个时候，他们不但关心如何准确地确定哪些是、哪些不是给定语言的句子，而且还关心如何提供句子结构特征的描述。那么，为了描述一个语言，需要表达它的哪几个方面的特征呢? 首先考虑高级语言中最基本的赋值语句。
   通常，赋值语句具有下列形式：
   左部量=右部表达式
   其中， “左部量”可以是简单变量、下标变量(即数组元素)等。为简单起见，不妨先做如下假设:简单变量可以是a、b、c,下标变量可以是m[1],m[2]、m[3]。
   右部表达式可以是由+、-运算符连接的两个简单变量或下标变量。

.. page 31


.. page 32


.. page 33


.. page 34


.. page 35


.. page 36


.. page 37


.. page 38


.. page 39


.. page 40


.. page 41


.. page 42


.. page 43


.. page 44


.. page 45


.. page 46


.. page 47


.. page 48


.. page 49


.. page 50


.. page 51


.. page 52


.. page 53


.. page 54


.. page 55


.. page 56


.. page 57


.. page 58


.. page 59


.. page 50


.. page 61


.. page 62


.. page 63


第 3 章 词法分析
-------------------------------------------------------------------------------

   由1.3节可知，词法分析是编译的第一个阶段，由称为词法分析器或扫描器的词法分析程序完成。词法分析
   器作为编译程序的一个功能模块，它将源程序视为一个“平滑的字符流”，从左至右对这个字符流进行扫描，
   切分出其中由字符组成的单词 (word)，以将其变换成“等价的”单词流。这些单词是具有独立意义的基本
   语法单位，又称为记号 (token)。程序设计语言中的关键字、标识符、常数、运算符及分隔符等都是单词。

   所以，词法分析器就是将构成源程序的字符串转换成“等价的”单词(记号)序列的程序。本章讨论词法分析
   器的设计和实现技术，主要包括两部分内容，即单词的描述与单词的识别。

   由于程序设计语言的单词结构基本上都是正则语言，因此可以用正则文法(3型文法)来描述它们。除此之外，
   正则表达式、正则定义式、状态转换图或有穷状态自动机也都是描述程序设计语言的词法和指导单词识别的
   几种十分有效的工具，所以本章将讨论如何利用它们进行词法分析器的设计与实现。

   本章最后还将讨论词法分析器的自动生成原理，并介绍一种用于描述词法分析器的“模式-动作”语言 Lex，
   其模式用正则表达式来描述，其编译器则能自动产生一个识别正则语言的有穷状态自动机识别器。

   本章介绍的技术还可以应用于文本编辑、查询语言及信息检索系统等其他领域。

3.1 词法分析器的功能
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   词法分析器的输入是一个“平滑的字符流”。例如，对如下 Pascal程序：


   .. code:: cpp

      program sample (output)    { a sample program }
      integer num;               { num is a simple variable }
      begin
         num=10﹡19.1;
         write(' num=', num)     { print " num=" and the value of num }
      end

   作为词法分析器的输入, 这段程序是由
   p、r、o、g、r、a、m、□、□、s、a、m、p、l、e、(、o、u、t、p、u、t、)、Tab、Tab、Tab、
   Tab、Tab、{、a、□、s、a、m、p、l、e、□、p、r、o、g、r、a、m、}、Enter、…、v、a、l、

.. page 64

   u、e、□、o、f、□、n、u、m、}、Enter、e、n、d、Enter 这 184 个字符组成的字符流, 其中第一
   行47个字符，第二行45个字符，第三行6个字符，第四行18个字符，第五行64个字符，第六行4个字符。
   □ 表示空格字符, Tab 表示“Tab”键对应的字符, Enter 表示换行键“Enter”对应的字符。

   作为词法分析器的输出, 这段程序被变换成 program、sample、(、output、)、integer、num、;、
   begin、num、=、10、*、19.1、;、write、(、' num='、,、num、)、end 共22个单词(记号)。原
   来字符流中的空格、注解等字符均被剔除。其中的“ num=”是一个字符型常数，它的值就是“ num=”这4个
   字符的ASCⅡ码。

   简单地说，词法分析器读入表示源程序的字符流，按照程序功能等价的要求，将其转换成对应的单词序列，
   并剔除其中的空格、注解等不影响程序语义的字符。

3.1.1 单词的分类与表示
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   单词是程序设计语言中具有独立意义的最小语法单位。在程序中，单词用来标识相应的对象，如运算符号、
   运算对象、子程序、函数等。根据单词在程序设计语言中所起作用的不同，可以将单词分为如下几种类型。

   (1) 关键字 (key word), 也称为基本字 (basic word),它们具有基本的意思,多用来作为语句
       的标识。如 Pascal 语言中标识一个程序开始的 program，标识一个复合语句开始的 begin 
       和标识其结束的 end，标识条件语句的 if，标识循环语句的 while，等等。

       如果这些关键字在程序中只能用于规定意义的表示，而不可以用于其他用途，例如，不可以再用
       做变量名，甚至变量名的前缀等，则将它们称为保留字 (reserved word)。

   (2) 标识符 (identifier)，用来表示各种名字，如变量名、过程名和数组名等。

   (3) 常数 (constant), 分为整常数 (integer constant)、实常数 (real constant) 和
       字符串常数 (string constant)等,如36、3.14和'Letter'等。

   (4) 运算符 (operator), 又可分为算术运算符 (arithmetic operator),如 `+、-、*、/` 等;
       逻辑运算符 (logical operator),如 not、or 与 and 等; 以及关系运算符 (relational 
       operator), 如 =、<>、>=、<=、> 和 < 等。

   (5) 分界符 (separator)，又可以称为界限符，包括逗号、分号和括号等。

   在上述5种单词中，关键字、运算符、分界符都是程序设计语言预先定义的，所以它们的数量都是固定的。
   而标识符、常数则是由程序设计人员根据具体的需要按照程序设计语言的规定自行定义的，其数量虽然不是
   无穷的(虽然在理论上有的程序设计语言可以支持无穷多个标识符和常数，但在实际实现上却是有限的)，
   不过也是非常大的。

   编译程序为了处理方便，通常都按照一定的方式对单词进行分类和编码。如何对单词进行分类和编码，本身
   并没有特别的规定，主要取决于编译程序处理上的方便。在分类和编码的基础上,将单词表示成二元组 
   (binary tuple,2- tuple)的形式:(种别,属性值)。其中“种别”表示相应的单词所属的类别，通常采
   用整数编码表示，这种整数编码又称为种别码 (codeof kind)；“属性值”( attribute value)表示
   相应单词的值，这种二元组形式又称为单词的内部表示形式( inner form)。

.. page 65


   考虑到不同种类单词的数量和使用上的方便，每个关键字、运算符、分界符与编码具有一一对应关系。也就
   是说，每个这样的符号均对应一个独立的编码。所有的标识符对应一个编码，所有的常数对应另一个编码。
   不同的标识符、不同的常数通过“属性值”来区分。如标准 Pascal语言的单词可以采用表3.1的方式来进行
   编码。为了增强可读性，还可以用宏定义的形式来给出单词的种别码，宏定义用大写黑体字来表示。

   表3.1 标准 Pascal 语言单词的编码
   ::

      单词     种别码   宏          单词     种别码   宏        单词   种别码   宏
      and      1      AND         or         22    OR            /     43    RDIV
      array    2      ARRAY       packed     23    PACKED        =     44    EQ
      begin    3      BEGIN       procedure  24    PROC          <     45    LT
      case     4      CASE        program    25    PROG          >     46    GT
      const    5      CONST       record     26    RECORD        <=    47    LE
      div      6      DIV         repeat     27    REPEAT        >=    48    GE
      do       7      DO          set        28    SET           <>    49    NE
      downto   8      DOWNTO      then       29    THEN          (     50    LR_BRAC
      else     9      ELSE        to         30    TO            )     51    RR_BRAC
      end      10     END         type       31    TYPE          ,     52    COMMA
      file     11     FILE        until      32    UNTIL         、   53    P_MARK
      for      12     FOR         var        33    VAR           ·     54    F_STOP
      function 13     FUNC        while      34    WHILE         ··    55    RANGE
      goto     14     GOTO        with       35    WITH          :     56    COLON
      if       15     IF          标识符     36    ID            :=    57    ASSIGN
      in       16     IN          整常数     37    INT           ;     58    SEMIC
      label    17     LABEL       实常数     38    REAL          ^     59    CAP
      mod      18     MOD         字符串     39    STRING        * *   60    EXP
      nil      19     NIL         +          40    PLUS          [     61    LS_BRAC
      not      20     NOT         —          41    MINUS         ]     62    RS_BRAC
      of       21     OF          *          42    MULTI         ,     63    Q_MARK

.. page 66


3.1.2 词法分析器的输出
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   词法分析器的功能是输入表示源程序的字符流，并输出等价的单词序列。它需要从输入字符流中识别出单词，
   并将其转换为相应的内部表示：(种别，属性值)。其中，种别按照类似于表3.1的规定给出，至于单词的属
   性值，则可根据处理上的方便和具体的编码方式来确定。对于那些和种别码具有一一对应关系的单词(如关
   键字和分界符等)，由于它们的种别码已经能够唯一地表示这些单词，因此无须再给出它们的属性值。但是，
   若一个类别中含有多个单词，则对其中的每个单词除了给出种别码之外，还要给出相应的属性值，这样才能
   把同一类中的各个单词区分开来。标识符和常数就是这样。

   对于标识符和常数，它们的属性值通常可以按如下两种方式来给定。

   (1) 用标识符本身的“值”表示。

      这里所说的“值”可以是标识符的内部码(如ASCⅡ码等)或常数本身的值(二进制表示、逻辑值)。显然，
      标识符的长度可以是不一样的；常数，尤其是字符型常数的长度也是不一样的，因而它们实际需要的
      存储空间就必然是不一样的。为了提高标识符的存储及其处理的效率，这种方式往往需要对标识符的
      长度加以限制，这意味着较长的标识符需要被截断。

   (2) 用指针表示。

      将标识符和常数存入相应的符号表中，用指向该标识符或常数所在符号表中表项的指针作为其属性值。
      由于指针的长度是确定的，所以，每个单词的属性值的长度就是相同的。但是，指针的使用意味着访问
      的间接性的存在----在需要的时候，要根据指针从相应的符号表中取出这个具体的“值”。所以，词法
      分析器需要兼顾符号表的查填和维护工作，这无疑将增加词法分析器的负担。

   例3.1 语句 if count>7 then result:=3.14; 的词法分析结果。

   这里采用表3.1的编码规定，当标识符的属性值采用上述第一种方式给出时，词法分析器的输出为：

   .. code:: cpp

      (IF, )
      (ID, count)
      (GT,)
      (INT,7)
      (THEN,)
      (ID, result)
      (ASSIGN,)
      (REAL,3.14)
      (SEMIC,)

   如果采用第二种方式来表示，则词法分析器的输出为：

   .. code:: cpp

      (IF,0)
      (ID, 指向 count 的符号表入口)
      (GT,0)
      (INT,7)
      (THEN,0)
      (ID, 指向 result 的符号表入口)
      (ASSIGN,0)
      (REAL,3.14)
      (SEMIC,0)

.. page 67


3.1.3 源程序的输入缓冲与预处理
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   通常源程序可以是以字符流的形式存储在外部介质(如磁盘或U盘)上的文件，在对该源程序进行编译的过程
   中，编译程序通过操作系统读取表示源程序的字符流。词法分析器为了正确地识别单词，还需要进行一系列
   相关的处理。

   1. 超前搜索和回退

      有时为了完成一个单词的识别，需要超前搜索( lookahead)，当发现超前搜索来的字符不属于当前
      单词时,还需要回退( retract)。

      对表3.1中的一些双字符运算符的识别就是这样。例如，当前读入的字符是“<”时，并不能确定当前识
      别的单词就是“<”，因为单词“<=”和“<>”的第一个字符也都是“<”，现在读入的“<”很可能是这两个
      单词的首字符。要解决这个问题，就需要超前读入一个字符。如果超前读入的字符是“=”，当前识别的
      运算符就是“<=”；如果超前读入的字符是“>”，当前识别的运算符(单词)就是“<>”；否则，就需要把
      超前读入的这个符号退回去，并确定当前读入的运算符(单词)是“<”。更详细的讨论见3.3.3 节。

   2. 缓冲区

      假定源程序存储在磁盘上，这样每读取一个字符就需要访问一次磁盘，效率显然是很低的。虽然操作系
      统能够在一定程度上避免真正的读盘操作，但是很多其他对应的操作是不可避免的，而这些操作需要耗
      费大量的时间，因此人们开发出一些特殊的缓冲技术以减少这种时间开销。那就是设置适当的缓冲区
      ( buffer)。

   如图3.1所示，词法分析器首先按照缓冲区的大小将源程序的一部分预先读入到缓冲区中，这个缓冲区称为
   输入缓冲区，当需要读“下一个字符”时，通常可以从这个缓冲区中读取，当该缓冲区的内容被处理完后，
   再一次性地从磁盘中读入下一段字符流。

   缓冲区的大小是根据系统的资源情况和需求来确定的，通常根据整盘区读入的需要进行设置。例如，可以是
   512 B、1 024 B、4 096 B。

   ::

      源程序
      ↓
      |  缓冲区
      |
      |       词法分析器
      |
      |  单词识别
      ↓
      单词序列
      
   图3.1带缓冲区的词法分析器

.. page 68

   1) 双缓冲区

      如果将输入缓冲区组织成单个缓冲区，当缓冲区的内容用完后，要等待新的读入，显然应该尽量避免
      这种等待。另外，当前缓冲区的尾部很可能只是包含了当前识别的单词的一部分(真前缀)，而另一部
      分(非空后缀)未被读入，所以要想获得一个“完整的”单词，必须从磁盘中再把下一段字符流读进来。
      然而，当下一部分被读入时，当前这一部分就被覆盖掉了。所以在最坏情况下能够识别的单词长度只能
      为 1，而且无法执行超前搜索操作。为了解决此问题，这里介绍一种双缓冲输入方案，该方案使用的
      缓冲区称为双缓冲区( doublebuffer)，在需要进行超前搜索时非常有用。

      假设缓冲区一共可以容纳2N个字节，缓冲输入方案把一个缓冲区分成两部分，每部分能容纳 N 个字节，
      如图3.2所示。词法分析器每次向缓冲区的某半部分读入 N个字节。如果剩余的输入串不足 N 个字节，
      则在缓冲区中最后一个输入字节后面将会读入文件结束符 eof。

   ::

      ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
      │ ... │  E  │  =  │  M  │  *  │  C  │  *  │  *  │  2  │ eof │ ... │
      └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
                                             ↑           ↑
                                          开始指针      向前指针

   图3.2双缓冲区

   词法分析器对输入缓冲区进行扫描时使用两个指针，即开始指针 ( lexeme beginning) 和向前指针
   ( forward)。开始指针指向当前识别单词的第一个字符，向前指针指向当前读入的字符，这样两个指针
   之间的字符串就是当前已经识别出来的那部分单词。一开始，两个指针都指向下一个要识别的单词的第一个
   字符。然后，向前指针向前扫描，直至发现一个单词为止。一旦发现了某个单词，向前指针将指向它的最右
   字符。在处理完这个单词之后，两个指针将同时定位到这个单词的下一个字符。

   如果向前指针将要移过缓冲区的中间标记，则往缓冲区的右半部读入 N 个新字符。如果向前指针将要移过
   缓冲区的右端，则往其左半部读入N个新字符，且将向前指针绕回到缓冲区的头部继续进行处理。

   显然，与单缓冲中在最坏情况下能够识别的单词长度只能为1相比，这种双缓冲输入方案在缓冲区总长度保持
   不变的情况下，能够将可识别单词的长度限制扩大到N。

   这种缓冲机制在大多数情况下都非常有效，但是仍然会限制超前搜索字符的数量。在进行超前搜索时，若向
   前指针需要移动的距离超过了缓冲区的长度，词法分析器将无法识别出记号。例如，由于PL/I没有规定关键
   字是保留字，所以，在对PL/I程序中的

   .. code:: cpp

      DECLARE(ARG_{1},ARG_{2}, \cdots ,ARG_{n})

   进行词法分析时，在扫描到右括号后面的字符之前，无法确定 DECLARE 是关键字还是数组名称。由于参数
   个数在原则上不受限制，所以需要超前扫描的字符数量也是不受限制的，它与参数个数成正比。当然，这种
   问题是理论上存在的，在通常情况下，取N=4096 就足以满足人们目前遇到的用计算机求解的问题。

.. page 69

   2) 带标记的缓冲区

      在图3.2所示的双缓冲模式中，每次移动向前指针都必须检查是否到了缓冲区某半部分的末尾。若是，
      则需往缓冲区的另一半部分读入下一段字符流。

      如果向前指针不在缓冲区某半部分的末尾，每次移动向前指针时还要测试是否读到了文件结束符 eof，
      这样每次都需要做两次测试。如果在缓冲区两部分的结尾处各设置一个“标志” eof，则可以使测试的
      次数得到大幅度的降低，这种加标记的缓冲区称为带标记缓冲区( marked buffer)，如图3.3所示。
      按照这种设计，每次移动向前指针时只需测试是否遇到了 eof，如果遇到的不是 eof，则不需要进一
      步测试；如果是 eof，则继续判定遇到的是否为缓冲区某半部分的末尾。这样，在大部分情况下只需要
      进行一次测试即可，只有当向前指针到达缓冲区某半部分的末尾或源文件尾时，才需要进行更多的测试。
      由于在两个 eof之间有N个字符，所以当N值足够大时，每个输入字符的平均测试次数(N+1)/N近似为1，
      从而使词法分析器的效率得到很大程度的提高。

   ::

      ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
      │ ... │  E  │  =  │  M  │  *  │ eof │  C  │  *  │  *  │  2  │ eof │ ... │
      └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
                                                   ↑           ↑
                                                开始指针      向前指针

   图3.3在两半部分的末尾加入标志的缓冲区

   经过对缓冲区设计的讨论，读者应该对“效率”这个概念有更为深入的理解。效率是计算学科中重复出现的
   12个重要概念之一，是关于诸如空间、时间、人力、财力等资源消耗的度量，要求人们在设计和实现系统时，
   要对相应的因素给予密切的关注。

   3) 空白字符的剔除

      对于多数程序设计语言来说，空白符、制表符、回车符和换行符等只有出现在符号常数中时才是有意义
      的，注解虽然可以出现在程序的任何地方，但它们只是为了增强程序的易读性，对程序本身是没有任何
      实际意义的，这些符号应当予以删除。

      为了便于识别单词，将空白符号的剔除放在输入串被放到缓冲区之前完成。也就是说，在将表示源程序
      的字符流读入到缓冲区中之前，还需要进行适当的预处理( pre-processing)。根据程序设计语言
      及其表示方式的不同，预处理也会有一些区别。值得注意的是，如果空白符用做分界符，则在进行预处
      理时应该保留多个空白字符中的一个。

3.1.4 词法分析阶段的错误处理
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   好的编译程序在对源程序进行编译时应尽可能地找出源程序中存在的各种错误，并能准确地指出出错位置和
   出错类型，以便用户能够快速改正错误。虽然在词法分析阶段能够发现的源

.. page 70


.. page 71
.. page 72
.. page 73
.. page 74
.. page 75
.. page 76
.. page 77
.. page 78
.. page 79
.. page 80
.. page 81
.. page 82
.. page 83
.. page 84
.. page 85
.. page 86
.. page 87
.. page 88
.. page 89
.. page 90
.. page 91
.. page 92
.. page 93
.. page 94
.. page 95
.. page 96
.. page 97
.. page 98
.. page 99


编译原理第二版课件
-------------------------------------------------------------------------------

   Compiler Principles and Techniques
   ::

      主讲： 姜守旭 博士/教授/教学带头人/博导
      助教： 林世荣
      办公室： 综合楼808 办公电话： 86403492-808
      手机： 13936168008
      email： jsx@hit.edu.cn
      课程网站： http://cst.hit.edu.cn/comp
      博客： http://blog.hit.edu.cn/jsx
      答疑地点： 综合楼808室
      答疑时间： ???

   School of Computer Science & Technology
   Harbin Institute of Technology

   2012-4-26 2

课程性质与特点
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
::

   *  课程性质
      技术基础

   *  基础知识要求
      高级程序设计语言， 数据结构与算法， 形式语言与自动机

   *  主要特点
      既有理论， 又有实践
      面向系统设计
      涉及程序的自动生成技术

教学目的 ——《编译原理》 是一门非常好的课程
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
::

   Alfred V.Aho：编写编译器的原理和技术具有十分普遍的意义，以至于在每个计算机科学家的研究生涯
   中， 本课程中的原理和技术都会反复用到本课程将兼顾语言的描述方法、设计与应用 (形式化)

   *  能形式化就能自 动化（ 抽象→符号化→机械化）
   *  可以使学生对程序设计语言具有更加深刻的理解
   *  体验实现自动计算的乐趣

   涉及的是一个比较适当的抽象层面上的数据变换（既抽象又实际，既有理论又有实践）一个相当规模的系统的设计

   *  总体结构
   *  若干具体的表示和变换算法

   201 2-4-26 3


浅浅谈本科教学
-------------------------------------------------------------------------------

   姜守旭

   博士/ 教授/ 教学带头人/博导

   哈尔滨工业大学计算机科学与技术学院

   email ：jsx@hit.edu.cn

   School of Computer Science & Technology
   Harbin Institute of Technology

   2019-5-11

   主要内容

   1. 认识教育
   2. 理解专业
   3. 设计课程
   4. 课程实施
   5. 教学研究
   6. 质量保证


1. 认识教育
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   | 1.1 教育的目的
   | 1.2 教育的本质
   | 1.3 教育的方法
   | 1.4 教育的动力
   | 1.5 教育的灵魂

   1.1 教育的目的

   明德亲民，修身治国

      “天命之谓性，率性之谓道，修道之谓教” —— 《 中庸 》

      “玉不琢，不成器；人不学，不知道。是故古之王者建国君民，教学为先” —— 《 学记 》

      “大学之道，在明明德，在亲民，在止于至善”“古之欲明明德于天下者，先治其国。欲治其国者，

      先齐其家。欲齐其家者，先修其身。欲修其身者，先正其心。欲正其心者，先诚其意” —— 《 大学 》

      “好学近乎知，力行近乎仁，知耻近乎勇。知斯三者，则知所以修身；知所以修身，则知所以治人；

      知所以治人，则知所以治天下国家矣”。 —— 《 中庸 》

   -  Computing Curricula—ACM/IEEE-CS
   -  CC1991/CC2001/CC2005
   -  CS2008/CS2013
   -  SE2003/SE2014
   -  计算机科学与技术专业发展战略研究报告暨专业规范(CCC2006)— 教育部计算机教指委
   -  知识、能力、素质

1.2 教育的本质
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  “教育就是当你把所学的东西都忘掉后，最终剩下的东西！” — 英国哲学家怀特海德
   -  “能忘掉在学校学的东西，剩下的才是教育” — 爱因斯坦
   -  “教育无非是一切已学过的东西都遗忘掉的时候所剩下的东西” — 美国物理学家劳厄
   -  “最终剩下的东西就是一个人的 创新意识和学习能力。” — 美国教育家布鲁纳
   -  创新意识

      * 人类知识的创造、科学的进展都有前因后果，来龙去脉。
      * 故勤奋学习，全面掌握文献，积累深厚基础，加上追根到底，万事必问为什么的好奇心，就是创新的源泉。
      * 前者是学，后者是问。学而不问则殆，问而不学则罔（孔子曰：学而不思则罔，思而不学则殆）。
      * 学而问，问而思，思而行，行而果，这就是创新——徐光宪院士
      * 关键是 怀疑 与 发问

   - 哥伦比亚大学教育学院的林晓东教授就 “中国学生常会遇到哪些问题？建议他们提高哪些技能？” 请教了 35 位美国大学教授

      * 良好的写作能力
      * 提出问题并批判性思考问题的能力
      * 良好的表达和沟通能力，特别是跟教授和同学

   - 问题驱动 的教学与学习方法

      每一个知识点的介绍、每一种方法的引出、每一个定理的证明 出、每一个定理的证明…都应该首先弄清
      其背景，为什么要学？是为了解决什么问题？当初是怎么想出来的？为什么是正确的 的/有效的？怎么
      证明？还有更好的方法 有效的？怎么证明？还有更好的方法吗？……

   - 学习能力

      * 关键是资料的获取：要 快 、要 会甄别 、要 有选择
      * 除了教材之外，为学生提供一些相关的辅助资料，关键要教会学生如何获取资料，本科生获取科技资料的能力比较弱（ google/baidu ）
      * 经典的图书
      * 校图书馆的电子资源：相关的会议与刊物
      * 相关的研究群体的个人主页
      * ……

1.3 教育的方法
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - 引导示范

      * “务学不如务求师。 师者，人之模范也” — 《 扬子法言- 学行 》
      * 领导做给老师看，老师做给学生看

   - 重复实践

      * “只要 功夫 深，铁杵磨成针”“熟能生巧”
      * 人格绝不是靠所听到的和所说出来的言语而是靠劳动和行动来形成的。因此，最重要的教育方法总是鼓励学生去实际行动。 — 爱因斯坦

1.4 教育的动力
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - 面向需求

      * 目标驱动、学习成效驱动
      * 关键：了解需求、理解需求、定位需求

   - 持续改进

      * “不断地提高教育质量是教育的永恒主题”

   - 关键因素

      * 质量
      * 全员参与
      * 自愿改变
      * 沟通

1.5 教育的灵魂
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - 独立精神

      * “没有自由思想，没有独立精神，即不能发扬真理，即不能研究学术” — 陈寅恪
      * “学校的目标应当是培养 独立工作 和 独立思考 的人，这些人把 为社会服务看作自己最高的人生问题” —爱因斯坦

   - 自由思想

      * “囊括大典，网罗众家；思想自由，兼容并包” — 蔡元培


2. 理解专业
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   | 2.1 专业性质
   | 2.2 专业特征
   | 2.3 培养目标
   | 2.4 毕业要求
   | 2.5 课程体系

2.1 专业性质
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - 计算机学科是一门 基础技术 学科：在科技发展中占有重要地位
   - 计算机技术是 信息化 建设的核心技术：信息化建设需要大量人才
   - 计算机技术是一种 广泛应用 的技术：在人类的生产和生活中占有重要地位

2.2 专业特征 (Computing Curricula)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
::

   - 技术   基本技术、基本工具、新技术、新工具
   - 学科方法学:

      *  学科形态：设计 理论 抽象
      *  核心概念：数学方法（ 随机方法 ） 系统方法
      *  基本方法：绑定、大问题复杂性、概念和形式模型、一致性和完备性、效率、演化、抽象层次、
         按空间排序、重用、安全性、折衷与决策、按时间排序

   -  基本知识体系：知识领域 - 计算机科学 / 计算机工程 / 软件工程 / 信息技术 / 其他
      14:DS/AL/AR … 18:ALG/CAO/DIG… 10:CMP/FND/DES …
      12:ITF/HCUI…

2.2 专业特征
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - 核心是 抽象思维 与 逻辑思维 能力的训练

      *  本学科的基本教育原理 —— 抽象第一
      *  抽象思维能力的培养比较难，需要反复训练，其目的是学会 表示事物，关键是离散化、符号化、形式化、模型化的训练
      *  逻辑思维能力的培养相对简单一些，其目的是学会描述各种 处理流程，关键是编程的训练，目前学生中有相当一部分存在编程障碍

   - 典型代表： 图灵机 模型 (有穷自动机)

工程教育专业认证 - 给出了专业的认证标准
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  工程教育专业认证：是国际通行的工程教育质量保证制度，也是实现工程教育国际互认和工程师资格国际互认的重要基础。
   -  工程教育专业认证的基本理念

      *  强调以学生为本，面向全体学生
      *  强调以学生为中心，以学生学习产出为导向
      *  强调合格评价与质量持续改进

   -  工程教育专业认证标准的基本内容

      *  以 《华盛顿协议》提出的毕业生素质要求为基础，符合国际实质等效要求，分通用标准和专业补充标准
      *  通用标准：学生、培养目标、毕业要求、持续改进、课程体系、师资队伍、支持条件

      《华盛顿协议》是本科工程教育学位互认协议，1989 年由美国、加拿大、爱尔兰、澳大利亚、新西兰
      6 个国家的民间工程专业团体共同发起和签署。我国于 2016 年6 月，成为 《华盛顿协议》 的
      第 18 个正式成员国。

认证对培养目标的要求
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - 有公开的、符合学校定位的、适应社会经济发展需要的培养目标。

      依据：对社会需求有足够深入的理解，对未来发展有合理预期。目标适当，符合学生整体目标。
      通过各种渠道让相关各方知晓目标，特别是教职员工与学生有足够的理解。

   - 培养目标 能反映学生 毕业后 5 年左右 在社会与专业领域预期能够取得的成就。

      依据：清楚地描述学生最具有竞争优势的领域，以及毕业后经过一段时间的实践，在正常情况下
      能够承担的社会与专业责任。应该与毕业要求相匹配，且是对所有合格毕业生的要求。

   - 定期评价 培养目标的 合理性 并根据评价结果对培养目标进行修订，评价与修订过程有 行业或企业专家参与。

      依据：对如何定期评价培养目标的合理性给出描述。有规范的培养目标修订制度，根据培养目标合
      理性评价结果对培养目标进行修订。历史记录能够证明评价与修订过程合理，并有行业和企业专家参与。

2.3 培养目标(HIT-CS 2016)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - 力求培养在教育 / 研究 / 工业 / 社会服务等领域能够引领社会发展的未来领军型人才、毕业生

      1. 具有正确的世界观、人生观与价值观，具有环保 / 经济意识
      2. 熟悉 本 专业国内外现状和发展趋势
      3. 具备计算思维能力，能够综合运用所学知识，独立解决与计算相关的复杂工程技术问题
      4. 计算机理论能力和工程能力并重
      5. 具有跨学科能力、团队合作能力和有效的交流能力
      6. 具有创新精神和国际视野。


认证对毕业要求的要求
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   专业必须有明确、公开的毕业要求 , 毕业要求应能支撑培养目标的达成。专业应通过评价证明毕业要求的
   达成。专业制定的毕业要求应完全覆盖以下内容：

   依据： 

   1. 合理分解毕业要求到可衡量的若干指标点； 
   2. 明确指出下列每一项要求及指标点是通过什么样的教学活动来实施的； 
   3. 能够提出依据说明每一个这样的活动有合理的评价方式，对每一个学生给出是否达到要求的评价结论。

   复杂工程问题的特征：

   1. 必须运用深入的工程原理经过分析才可能得到解决；
   2. 需求涉及多方面的技术、工程和其它因素，并可能相互有一定冲突；
   3. 需要通过建立合适的抽象模型才能解决，在建模过程中需要体现出创造性；
   4. 不是仅靠常用方法就可以完全解决的；
   5. 问题中涉及的因素可能没有完全包含在专业标准和规范中；
   6. 问题相关各方利益不完全一致；
   7. 具有较高的综合性，包含多个相互关联的子问题。

   1. 工程知识：能够将数学、自然科学、工程基础和专业知识 用于解决复杂工程问题。
   2. 问题分析：能够应用数学、自然科学和工程科学的基本原理，识别、表达、并通过文献研究分析复杂工程
      问题，以获得有效结论。
   3. 设计 / 开发解决方案：能够设计针对复杂工程问题的解决方案，设计满足特定需求的系统、单元（部件）
      或工艺流程，并能够在设计环节中体现创新意识 ，考虑社会、健康、安全、法律、文化以及环境等因素。
   4. 研究：能够基于科学原理并采用科学方法对复杂工程问题进行研究，包括 设计实验 、分析与解释数
      据、并通过信息综合 得到合理有效的结论。
   5. 使用现代工具：能够针对复杂工程问题，开发、选择与使用恰当的技术、资源、现代工程工具和信
      息技术工具，包括对复杂工程问题的 预测与模拟，并能够 理解其局限性。
   6. 工程与社会：能够基于工程相关背景知识进行合理分析，评价专业工程实践和复杂工程问题解决方
      案对社会、健康、安全、法律以及文化的影响，并理解应承担的责任。
   7. 环境和可持续发展：能够理解和评价针对复杂工程问题的工程实践 对环境、社会可持续发展的影响。
   8. 职业规范：具有人文社会科学素养、社会责任感，能够在工程实践中 理解并遵守工程
      职业道德和规范，履行责任。
   9. 个人和团队 ：能够在 多学科背景下的团队中承担个体、团队成员以及负责人的角色。
   10. 沟通：能够就复杂工程问题与业界同行及社会公众进行 有效沟通和交流 ，包括撰写
       报告和设计文稿、陈述发言、清晰表达或回应指令。并具备一定的国际视野，能够在跨
       文化背景下进行沟通和交流。
   11. 项目管理 ：理解并 掌握工程管理原理与经济决策方法，并能在多学科环境中应用。
   12. 终身学习 ：具有自主学习和终身学习的意识 ，有不断学习和适应发展的能力。


2.4 毕业要求(HIT-CS 2008)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   知识结构

      程序设计基础、离散结构、算法与复杂度、计算机体系结构与组织、操作系统、软件工程、网络及其计算、
      信息管理、计算机科学与数值方法、社会与职业问题、理论与专业基础知识。

   能力结构

      科学思维与理论分析能力、系统分析与设计能力、运用知识求解问题能力、系统开发与调试能力、组织、
      协调与项目管理能力、表达与沟通能力、英语理解与沟通能力、自学能力、独立思考与创新能力、实践
      动手能力。

   综合素质

      研究素质、个性素质、文化素质、社会素质、精英素质、身心素质、工程素质

   研究素质

      具有良好的科学思维和科学态度，对未知世界有强烈的好奇心和研究兴趣

   个性素质

      培养协同意识，塑造利他精神，健全人格；挖掘自己的潜力和爱好，对待事物有独立见解；具有理性批判、
      自主学习和终身学习的意识和习惯

   文化素质

      具有一定的文学艺术修养，及法律、经济、管理等方面的知识

   社会素质

      爱国敬业，具有科学的世界观、人生观 、价值观 ，具有团队合作精神，自觉遵守社会公德和职业道德，
      具有诚信意识和宽容的心态

   精英素质

      有高度的历史和社会责任感，有一定的领导意识，有国际视野及跨文化交流能力

   身心素质

      养成良好的健身习惯，具有乐观向上的生活态度，掌握调节心态的方式和方法，有较强的抗挫折能力

   工程素质

      具有工程观念，能用工程的思想与方法分析和解决实际问题

认证对课程体系的要求
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   课程设置能支持毕业要求的达成，课程体系设计有企业或行业专家参与。课程体系必须包括：

   1. 与本专业毕业要求相适应的数学与自然科学类课程（至少占总学分的 15% ）。
   2. 符合本专业毕业要求的工程基础类课程、专业基础类课程与专业类课程（至少占总学分
      的 30% ）。工程基础类课程和专业基础类课程能 体现数学和自然科学在本专业应用能力培养，
      专业类课程能 体现系统设计和实现能力的培养。
   3. 工程实践与毕业设计（论文）（至少占总学分的 20% ）。设置完善的实践教学体系，并与企业合
      作，开展实习、实训，培养学生的实践能力和创新能力。毕业设计（论文）选题要结合本专业的
      工程实际问题，培养学生的工程意识、协作精神以及综合应用所学知识解决实际问题的能力。 对
      毕业设计（论文）的指导和考核有企业或行业专家参与。
   4. 人文社会科学类通识教育课程（至少占总学分的 15% ），使学生在 从事工程设计时能够考虑经济、
      环境、法律、伦理等各种制约因素。

2.5 课程体系(HIT-CS 2008)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
::

   哈尔滨工业大学计算机课程设计

         第一学期    第二学期   第三学期        第四学期    第五学期   第六学期               第七学期       第八学期

   基础理论
         代数与几何 Ⅰ         集合论与图论      近世代数    数理逻辑    形式语言
         工科数学分析 Ⅰ       概率论与数理统计  计算方法                                     专业选修课方向     毕业设计
                                                                                              毕业实习
   软件系列                                                                                   智能接口与人机交互技术
      高级语言程序设计 汇编语言程序设计         数据结构与算法 操作系统    数据库系统         语言技术
                                                                  编译原理                    企业智能计算
                                                                  软件工程                    计算机网络与信息安全
                                                                                              可穿戴计算技术
   硬件系列                                                                                   生物信息技术
                  电路 Ⅲ   模拟电子技术      数字电路设计   接口技术                         数据库与系统软件
                  大学物理 Ⅱ  大学物理实验 Ⅰ 计算机组成原理    计算机网络  计算机体系结构   多智能体机器人技术
                                                                                              模式识别
   实践环节
         军训及军事理论                      工程训练（电子工艺实习）   计算机设计与实践
                                                            数据结构与算法课程设计 软件工程课程设计

   公共课
      大学英语   体育
      思想道德修养   毛泽东思想概论   马克思主义政治经济学  邓小平理论  马克思主义哲学 法律基础

   人文选修
      院士、博导讲座       全校性任选课


3. 设计课程
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   | 3.1 课程性质
   | 3.2 教学目的
   | 3.3 教学要求
   | 3.4 学时安排
   | 3.5 重难点与考试方法
   | 3.6 实验目的
   | 3.7 实验要求

3.1 课程性质 — 以编译原理为例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  课程性质：技术基础
   -  基础知识要求：汇编语言，高级程序设计语言，集合论与图论，计算机原理，数据结构与算法，
      算法设计与分析，形式语言与自动机。
   -  主要特点：既有理论，又有实践；面向系统设计；涉及程序的自动生成技术。

3.2 教学目的 — 以编译原理为例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   培养目标中的能力要求（前 5 项）

   1. 计算思维能力：计算思维能力主要包括形式化、模型化描述和抽象思维与逻辑思维能力。
   2. 算法设计与分析能力：针对具体问题设计有效的求解算法，并能分析该算法的时空复杂性
   3. 程序设计与实现能力：有效使用程序设计语言进行程序设计并在计算机上实现。
   4. 系统分析、开发与应用能力：面对具体的工程应用问题，能够以全局观看待问题、分析问题和解决问题。
   5. 表达与沟通能力：具备较强的表达能力，能够清楚地介绍技术问题及其解决办法，能理解他人所表述的
      内容，并能发表自己的见解或提出建设性意见。


   1. 毕业要求：能够将数学、自然科学、工程基础和专业知识用于解决复杂工程问题。
      使学生掌握本专业人才的职业生涯中反复用到的基础理论和基本方法，以用于解决难度较大的问题，
      处理复杂系统的设计与实现。

   2. 毕业要求：能够应用数学、自然科学和工程科学的基本原理，识别、表达、并通过文献研究分析复杂工程问题，
      以获得有效结论。培养学生选择适当的模型，以形式化的方法去描述语言及其翻译子系统，将它们
      用于系统的设计与实现的能力。

   3. 设计 / 开发解决方案 ：能够设计针对复杂工程问题的解决方案，设计满足特定需求的系统、单元（部件）
      或工艺流程，并能够在设计环节中体现创新意识，考虑社会、健康、安全、法律、文化以及环境等因素。
      强化学生数字化、算法、模块化等专业核心意识，对自顶向下、自底向上、递归求解、模块化等典型方法
      的掌握，培养其包括功能划分、多模块协调、形式化描述、程序实现等在内的复杂系统设计实现能力。

   4. 能够针对复杂工程问题，开发、选择与使用恰当的技术、资源、现代工程工具和信息技术工具，包括对
      复杂工程问题的预测与模拟，并能够理解其局限性。（有一定的支持）
      使学生经历复杂系统的设计与实现，培养他们对多种方法、工具、环境的比较、评价和选择的能力。

      -  方法选择：选择实现词法、语法分析的方法；
      -  实现途径选择：直接设计实现、使用某种自动生成工具设计实现（自学）；
      -  工具与环境选择：使用的开发语言和环境；
      -  比较与评价：在组间相互评价中锻炼评价能力。

   5. 个人和团队：能够在多学科背景下的团队中承担个体、团队成员以及负责人的角色。（有一定的支持）
      通过按组完成系统设计与实现培养学生团队协作能力。学生需要在分工、设计、实现、口头和书
      面报告等环节中相互协调、相互配合。

   6. 沟通： 能够就复杂工程问题与业界同行及社会公众进行有效沟通和交流，包括撰写报告和设计文稿、
      陈述发言、清晰表达或回应指令。并具备一定的国际视野，能够在跨文化背景下进行沟通和交流。（有一定的支持）
      通过实验系统设计实现过程中组内讨论，验收过程中的报告撰写、陈述发言等，培养专业相关的表达能力。

   7. Alfred V. Aho：编写编译器的原理和技术具有十分普遍的意义，以至于在每个计算机科学家的研究生涯中，
      本课程中的原理和技术都会反复用到。

   8. 本课程将兼顾语言的描述方法、设计与应用 (形式化)

      -  能形式化就能自动化（抽象 → 符号化 → 机械化）
      -  可以使学生对程序设计语言具有更加深刻的理解
      -  体验实现自动计算的乐趣

   9. 涉及的是一个比较适当的抽象层面上的数据变换（既抽象又实际，既有理论又有实践）

   #. 一个相当规模的系统的设计

      -  总体结构
      -  若干具体的表示和变换算法

   #. 在 系统级 上认识算法、系统的设计

      -  具有把握系统的能力
      -  局部最优 vs. 全局最优 (木桶效用)
      -  “自顶向下” 和 “自底向上” 的系统设计方法
      -  对其思想、方法、实现的全方位讨论

   #. 进一步培养 “计算思维能力”

      -  深入理解软件系统的非物理性质
      -  培养抽象思维能力和逻辑思维能力
      -  训练对复杂数据结构的设计和操纵能力

   #. 计算机专业最为恰当、有效的知识载体之一

   #. 综合运用下列课程所学知识

      -  高级程序设计语言
      -  汇编语言
      -  集合论与图论
      -  数据结构与算法
      -  计算机组成原理
      -  算法设计与分析
      -  形式语言与自动机

3.3 教学要求 — 以编译原理为例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  掌握编译程序的总体结构；
   -  理解标准编译器各个组成部分的任务；
   -  理解和掌握编译过程各个阶段的工作原理；
   -  熟悉编译过程各阶段所要解决的问题及其采用的方法和技术；
   -  应用一些标准的技术解决编译器构造过程中所产生的相关问题；
   -  理解编译器在生成代码时如何充分利用特定处理器的特征。

3.4 学时安排 — 以编译原理为例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   1. 课程的目的，编译的总体结构 （2 学时）
   2. 词法分析器的功能及主要实现技术（2 学时）
   3. 语法分析器的功能和实现方法 （ 12 学时）
   4. 语法制导翻译的相关概念和技术（3 学时）
   5. 中间代码和典型语句的翻译（8 学时）
   6. 运行时刻的存储组织（5 学时）
   7. 代码优化技术（5 学时）
   8. 代码生成（3 学时）

3.5 重难点与考试 — 以编译原理为例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  题型：选择、填空、判断、简答、证明、论述、设计、计算等
   -  重点难点：会在各章的开始点明
   -  考试权重：平时成绩（随堂考试）占 20%、实验占 10%、期末考试占 70%
   -  考前答疑：考试前两天

3.6 实验目的
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  实验贯穿于理论、抽象和设计过程；
   -  实验对软件的设计和实现、测试原理和方法起示范作用；
   -  实验不仅仅是对理论的验证，重要的是 技术训练 和能力培养，包括动手能力、分析问题解决问题能力、
      表达能力、写作能力等的培养；
   -  教学活动是教师和学生不断交流的过程， 实验是实现这个过程的桥梁，可以弥补课堂教学的不足，加
      深对理论过程的理解，启发学生深入思考，敢于创新，达到良好的理论联系实际的教学效果。

3.7 实验要求 — 以编译原理为例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   实验形式

      -  分析、设计、编写程序、调试、测试程序
      -  撰写实验报告
      -  答辩

   实验内容

      -  词法分析器的设计与实现 2 学时
      -  语法分析器的设计与实现 4 学时
      -  语义分析与中间代码生成 2 学时

4. 课程实施
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   |  4.1 教学方法
   |  4.2 学习方法
   |  4.3 实验指导
   |  4.4 习题课
   |  4.5 辅导答疑
   |  4.6 考试
   |  4.7 学习材料

   课程实施

   教学方式

      -  课前：明确课程在整个课程体系中的地位、作用、目的和要求；做好课程设计；准备好教案 
         和要求；做好课程设计；准备好教案……
      -  课中：注重启发、问题驱动、案例教学、交互式 课中：注重启发、问题驱动、案例教学、交互式……
      -  课后：批改作业、答疑
      -  课外：科学研究、教学研究、教学法讨论 课外：科学研究、教学研究、教学法讨论……

   学习方式

   -  课前：了解课程体系、课程大纲、准备课程学习资料 课前：了解课程体系、课程大纲、准备课程学习资料…
   -  课中：认真听讲、积极思考、发问互动 课中：认真听讲、积极思考、发问互动…
   -  课后：主动答疑、完成作业、实验、大作业 课后：主动答疑、完成作业、实验、大作业…
   -  课外：积极参加俱乐部、科技竞赛、讲座、论坛 课外：积极参加俱乐部、科技竞赛、讲座、论坛…

4.1 教学方法 — 以编译原理为例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  围绕一条主线展开：编译过程的各个阶段
   -  面向系统：从系统的角度，引导大家逐步建立系统观和工程观，并学会折衷
   -  启发式：问题驱动，引导大家理解问题和方法的直观背景
   -  以学生为中心，注重课堂交互，鼓励大家多发问
   -  面向应用：引导大家了解技术、方法的应用背景
   -  注重实践：以编写一个小型语言编译器为目标

4.2 学习方法
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   基于问题的学习（ What-Why-hoW ）

      -  学习要以 思考 为基础
      -  一般的学习只是一种模仿，而没有任何创用
      -  思考由怀疑和答案组成，学习便是经常怀疑，经常随时发问。 怀疑是智慧的大门，知道得越多，就越会发问，
         而问题就越多。所以， 发问使人进步 ，发问和答案一样重要。

   基础知识是研究的工具

      在独立思考之前，必须先有基础知识。所谓 “获得基础知识”并不是形式上读过某门课程，而是将学过的东西
      完全弄懂（什么叫做精通 C 语言？）。

4.2 学习方法
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


   要敢于犯错误：学习的一种方法，经常还是唯一的方法，就在于首先犯错误。我们在学习，多数时间在 通过犯错误学习。

   教学、学习是一个过程：

   -  是毛毛雨，需不断地滋润
   -  教师在传授知识和技术的过程中，偶尔会 传授教训 ，
   -  但这种教训如果没有 经过你的亲身体验 ，不会变成有用的经验。
   -  知识没有教训作为根基，只能是纸上谈兵。
   -  上课、读书、复习、做作业、讨论、做实验、自己编程序、上机调试排错 … 是绝对必要的

   把编译的每个阶段放到整个编译程序背景中学习


4.3 实验指导
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   独立完成：可以分工合作，必须有独立完成的工作；独立完成的工作应符合课程要求。

   设计性环节：面向实际问题；能够评价设计方案。

   报告撰写：可以有模板，但必须有自己撰写的内容，可以限制篇幅。

   答辩：主要介绍自己完成的工作。


4.4 习题课
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   翻转课堂

   -  作业 20 分，提前布置好作业，课堂随机抽题，随机抽学生讲解，不会的扣除 n 分。

   -  此办法可以有效解决如下问题：

      #.  不上课、不答疑、抄作业、不预习、不复习、
      #.  前面内容不熟悉，听不懂后面的内容
      #.  期末突击复习
      #.  批改作业工作量大
      #.  ……

4.5 辅导答疑
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  老师可以利用答疑时间收集学生的反馈
   -  充分利用好答疑时间，是与老师交流的机会，会获得意想不到的东西
   -  没有经你思考的习题、问题最好暂时不问，否则收获不大
   -  把老师看成朋友或者长者，这时除谈业务外，谈理想、人生、道德、责任、如何做人 …

4.6 考试
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  考试方式：作业、实验、大作业、期末考试 ……
   -  考试目标：保证课程所支持的毕业要求的达成

4.7 学习材料 — 以编译原理为例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   1. 蒋宗礼，姜守旭 . 编译原理 . 北京：高等教育出版社， 2010 年2 月
   2. Alfred Aho ect. Compilers: Principles, Techniques, and Tools
      北京：人民邮电出版社，Pearson Education 出版集团，2002.2.
   3. Alfred Aho ect. Compilers: Principles, Techniques, and Tools (Second Edition)
      北京：人民邮电出版社，Pearson Education 出版集团，2008.2.

   http://blog.hit.edu.cn/jsx

   -  C、Pascal 语言的文法定义
   -  AT&T 汇编基础
   -  Pascal 的 Lex 和 Yacc 描述
   -  8086 指令集
   -  课程课件 (ppt&pdf)
   -  Lex 与 Yacc 使用手册
   -  与编译技术有关的国际会议

5. 教学研究
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   | 5.1 编写教材与实验教材
   | 5.2 制作多媒体课件
   | 5.3 制作视频
   | 5.4 开发实验系统
   | 5.5 开发教学网站
   | 5.6 教学研究立项
   | 5.7 申报教学成果奖
   | 5.8 发表教学研究论文


6. 质量保证
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  6.1 质量保证的组织
   -  6.2 过程管理
   -  6.3 质量标准
   -  6.4 师资队伍建设

   认证对持续改进的要求

   1. 建立 教学过程质量监控机制。各主要教学环节有明确的质量要求，通过教学环节、
      过程监控和质量评价促进毕业要求的达成；定期进行课程体系设置和教学质量的评价。

   2. 建立 毕业生跟踪反馈机制以及有高等教育系统以外有关各方参与的 社会评价机制，
      对培养目标是否达成进行定期评价。

   3. 能证明评价的结果被用于专业的持续改进。

6.1 质量保证的组织 (HIT-CS 2016)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
::

                  本科生院/研究生院    计算机学院领导机构
                        |                 |
                         \_______________/
                                 |
                              教学委员会
                                /\
                              /    \
                            /        \
                         /             \
                     课程群               分委会

      人工智能与数据科学课程群                     专业建设分委会
      信息安全课程群                               研究生教学分委会
      生物信息课程群                               教师发展与教学研究分委会
      软件工程课程群                               国际化教育分委会
      物联网                                       校企教育合作分委会
                                                   实验室发展分委会
      公共课课程群                                 毕业设计分委会
         计算机理论与算法课程群                    创新与竞赛分委会
         计算机系统与系统软件课程群                素质教育分委会
         公共课： 大类专业导论/高级语言程序设计    教学督导分委会
         全校公共课：数理思维与人文素养            质量保障分委会

6.2 过程管理
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
::

   🟢教学指导委员会
      ┠──→ 🟠培养目标完成情况评估 ←──→ 🟡培养目标
      ┠──→ 🟠培养计划评估 ←──→ 🟡培养计划
      ┠──→ 🟠课程评估 ←──→ 🟡课程大纲
      ┠──→ 🟠教学条件评估 ←──→ 🟡教学建设
      ┖──→ 🟠教师队伍评估 ←──→ 🟡教师队伍
                                 ↓
                           🟢教学督导委员会
            🟡考试考查            ↓          🟡教师选派
                           🟠教学过程评估
                                 ↓
                           🟡课堂教学
                           🟡实践教学
            🟡就业                           🟡招生
                           🟡学生工作
                                 ↑
                                 ↓
                           🟠学生工作评估
                                 ↑
                           🟢学生工作委员会
         🟠就业评估                                🟠招生评估
            ↑                                        ↑
                           🟢招生与就业指导委员会

   图例说明：
      🟠质量保证过程
      🟢质量保证组织
      🟡教学执行过程

6.3 质量标准
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  培养方案
   -  课程教学大纲
   -  实验教学大纲
   -  准入与试讲
   -  专家听课
   -  学生评教
   -  教师评价标准
   -  课程评价标准

认证对师资队伍的要求
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   1. 教师数量能满足教学需要，结构合理，并有企业或行业专家作为兼职教师。
   2. 教师具有足够的教学能力、专业水平、工程经验、沟通能力、职业发展能力，并且能够
      开展工程实践问题研究，参与学术交流。教师的工程背景应能满足专业教学的需要。
   3. 教师有 足够时间和精力投入到本科教学和学生指导中，并 积极参与教学研究与改革。
   4. 教师 为学生提供指导、咨询、服务 ，并对学生职业生涯规划、职业从业教育有足够的指导。

6.4 师资队伍建设
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   什么是一个合格的教师？
      学校对教师基本素质的要求、学院对教师基本素质的要求、新开课的条件、开新课的条件、
      教学行为规范 教学行为规范…

   师资队伍的结构
      总体结构、学历结构、职称结构、年龄结构、学缘结构…

   教学组织的建设
      委员会、课程群、教研室、课程组 委员会、课程群、教研室、课程组……

   抓住对后进学生的教育机会
      考前答疑、补考、重修、试读 考前答疑、补考、重修、试读……

6.4 师资队伍建设
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  教学法研讨会
   -  课程群、课程组日常教研活动
   -  出国进修
   -  国内进修
   -  指导青年教师
   -  ……

大学计算机基础与程序设计语言
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   1. 直观地讲清计算机的工作原理

      程序在计算机中运行的直观过程计算机组成、操作系统、编译程序等

   2. 如何利用计算机求解实际问题

      问题的形式化描述：集合论与图论、数据结构处理流程的机械步骤：程序设计、算法设计数据库

   3. 使用计算机

      计算机网络、办公软件、计算机安全

   谢谢！
