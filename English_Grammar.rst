
Sentences marker
================

   External linkage pertains to entities declared extern, functions, class types 
   and their members (including static members), and variables, and all templates 
   thereof, that are not already internal by the rules above, and all enums. 
   ...
   This sounds very esoteric, so let’s pin it down with some concrete examples:

   —— `Understanding C++ Modules: Part 3: Linkage and Fragments <https://vector-of-bool.github.io/2019/10/07/modules-3.html>`__


   从《左传》与《东周列国志》的词语对比中看词义突显
   On the Exposition of Words' Meaning by Comparison between Zuo Zhuan and Records 
   of the States in the Eastern Zhou Dynasty


   Before you can use a variable or constant in a JavaScript program, you
   must declare it. In ES6 and later, this is done with the ``let`` and 
   ``const`` keywords, which we explain next. Prior to ES6, variables were
   declared with ``var``, which is more idiosyncratic and is explained later
   on in this section.

   —— The JavaScript Definitive Guide 7th Edition - 3.10 Variable Declaration and Assignment

   “A ship in harbor is safe — but that is not what ships are built for.” — John A. Shedd.
   Grace Hopper also employed a version of this expression on multiple occasions. In 1981 
   Grace M. Hopper was interviewed and profiled in “The San Diego Union” of San Diego, 
   California. She stated that a version of the saying was important in her life. Hopper 
   said that to maintain the leading edge in world computer technology, the United States 
   must rely on the unbridled enthusiasm and ideas of youth. “A motto that has stuck with 
   me is: ‘A ship in port is safe. But that’s not what ships were built for.'”


Formal Grammars
===============

   *  `CSC 081 Computability and Logic <https://cs.pomona.edu/~kim/CSC081S13/>`__

   语言（Language）是人类进行沟通交流的表达方式。语言是人与人交流的一种工具，更是文化的重要载体。
   语言是伴随劳动产生的，语言是社会的产物，语言既然是社会的产物，必然会随着社会的发展而发展。

   人类之间交流的语言称为自然语言（Natural Language），计算机中使用的编程语言是人与机器交流的工具，
   本质上没有区别，只是人类的语言是编程语言的超集。

   乔姆斯基，Avram Noam Chomsky，1928 年生于美国费城，麻省理工学院语言学及语言哲学研究所教授
   兼名誉教授，被誉为“现代语言学之父”。乔姆斯基继承了布龙菲尔德的分布主义分析方法，提出了生成语法
   理论，认为“思考语言为何物，就是在思考人类为何物”。

   在 20 世纪 50 年代，年仅二十多岁的乔姆斯基就提出了著名的生成语法理论，在语言学中引起了革命性
   的变革。乔姆斯基主张语法是一种规则体系，能够生成某种语言全部的仅仅是合乎语法的句子，生成语法理
   论就是要找出这种语言模式。不论乔姆斯基的语法理论是否正确，它无疑是当前最有生命力、最有影响的语
   法理论。

   乔姆斯基专攻的是语言学，也是哲学家，认同无政府主义，他的政治言论一向很大胆：“美国是当今世上的头
   号恐怖国家”。

   .. Note::

      In much of the world the U.S. is regarded as leading terrorist state. 
                                                            -- Noam Chomsky

   他本人并不涉及计算机领域，真正将乔姆斯基的语言学理论引入计算机编译技术领域的人，是约翰・巴克斯 
   John Warner Backus，是编译领域大名鼎鼎的 Backus-Naur Form 巴克斯-诺尔范式的第一发明者。
   他据此第一次书写了 ALGOL 58 的语法，并提出了可实现的计算机语法分析算法。

   Chomsky 形式文法 Formal Grammars 是极为重要的理论，Chomsky 文法用 G 表示形式语法，将其
   表示为四元组：

      G = (Vn, Vt, S, P)

   其中各变量定义如下：

   - :math:`Vn`：Non-Terminal 非终结符的有限集合，不能处于生成式的终点。在推导中起变量作用，相当于语言中的语法范畴；
   - :math:`Vt`：Terminal 终结符的有限集合，只处于生成过程的终点，是句子中实际出现的符号，相当于单词表。
   - :math:`S`：Start Symbol，Vn 中的初始符号，相当于语法范畴中的句子。
   - :math:`P`：Grammar Prduction，重写规则，也称为生成规则或文法产生式，一般形式为 α → β，其中 α、β 都是符号串，α 至少含有一个 Vn 中的符号。

   语法 G 的不含非终结符的句子形式称为 G 生成的句子；由语法 G 生成的语言，记做 L(G)，指 G 生成的所有句子的集合。

   乔姆斯基将语言形式整理为 4 种形式（The Chomsky Hierarchy of Grammars and Languages）：

   ======== ================================== ==========================
   Type 0   Unrestricted grammar               无约束文法    
   Type 1   CSG (Context sensitive grammar)    上下文有关文法 
   Type 2   CFG (Context free grammars)        上下文无关文法 
   Type 3   RG (Regular grammars)              正则文法      
   ======== ================================== ==========================

   Type 0 无约束文法，规则形式没有任何限制，也称无限制重写文法，重写规则如下：

      α → β，其中 α, β ∈ (Vn ∪ Vt)

   Type 1 上下文相关文法，重写规则如下，在上下文 α…β 中，单个非终结符 A 被重写为符号串 γ，因此上下文相关。

      αAβ → αγβ，其中 A ∈ Vn, α, β, γ ∈ (Vn ∪ Vt)，且 γ 非空

   Type 2 上下文无关文法 CFG，重写规则如下，A 重写为 α 时没有上下文限制。

      A → α，其中 A ∈ Vn, α ∈(Vn ∪ Vt)

   Type 3 正则文法 RG，重写规则如下。A → xA 是将 A → Bx 中的 B 看作空符号的一种特殊情况。
   如果把 A, B 看作不同的状态，那么由重写规则可知，由状态 A 转入状态 B 时，可生成一个终结符 x ，
   因此正则文法也称作有限状态文法。

      A → Bx 或 A → x，其中 A, B ∈ Vn, x ∈ Vt

   乔姆斯基的文法理论，每个分类都是细分类型的超集，在计算机领域中使用的只有 Type 2 和 Type 3 文法。

      L(G3) ⊆ L(G2) ⊆ (G1) ⊆ (G0)

   即每一个正则文法都是上下文无关文法，每一个上下文无关文法都是上下文有关文法，每一个上下文有关文法
   都是 0 型文法。

   Type 2 上下文无关文法，特征是任何语言元素在任何上下文中的含义始终保持一致。事实上，多数如今的
   程序设计语言语法都以此为基础。

   Type 3 三型方法特征是语法中不存在递归下降结构，它的代表是基本正则表达式（扩展后的正则表达式情况略有不同）。

   以上两种文法构成了现今所有实用计算机程序设计语言的分析器理论基础，也有成熟的数据结构和算法支持：
   三型文法的 NFA/DFA，以及二型文法的递归下降、LL(x)、LR(x)、LALR(x)。

   而再向上的一型文法（上下文有关文法）和零型文法（任意图灵机可识别文法），计算机工程界则通常不会涉足。
   一个非常重要的理论结果是：Type 0 型文法的能力相当于图灵机(Turing)。或者说，任何 0 型文语言都是
   递归可枚举的，反之，递归可枚举集必定是一个 0 型语言。


Chineses vs. English 中英文差异
===============================

   *  `GoldenDict 开源的电子词典 <http://goldendict.org/>`__
   *  `GoldenDict 开源的电子词典 <https://github.com/xiaoyifang/goldendict/releases>`__
   *  `English with Lucy <https://www.bilibili.com/video/BV1zy4y1b7jZ/>`__
   *  `國立清華大學 周育如 K.K 音标英文教学（自然发音） <https://www.bilibili.com/video/BV1fs411e7zn/>`__
   *  `English Grammar In Use [intermediate] 5th Edition by Raymond Murphy <https://englishfrench.academy/wp-content/uploads/2020/09/235_7-English-Grammar-in-Use.-Murphy-R.-2019-5th-394p-.pdf>`__

   首先推荐一款开源的电子词典 GoldenDict，无广告骚扰，擅长查词，不擅长文本翻译，可以使用百度翻译补足。
   无单词本，但可以保存超长历史查询。跨平台：Windows / Mac / Linux，支持多种词典格式。

   推荐一套语法自学教材：

   *  Essential Grammar in use 4th edition
   *  English Grammar In Use 5th Edition (intermediate)
   *  Advanced Grammar In Use 3rd Edition

   *  https://pan.baidu.com/s/1H_W8x3WG-OAqGZY6WHsGxQ?pwd=nnd3
   *  `牛津书虫英汉对照电子书.chm <https://pan.baidu.com/s/1Hf-5QMQy2erqhVYHo8JXlg?pwd=m3fs>`

   .. Note::

      GIU 这套语法书针对不同基础层次的学生（自学）编写了初级、中级、高级三本，书并不厚，每本都在 400
      页左右，100 多单元，每单元讲解、习题各占一页，基本可以讲透每个语法知识点。这样的内容编排非常合理，
      没有基础或基础差的同学，可以从 Essential 这本开始，它着手于“要素”教学，也就是那些需要经常使用
      需要熟练使用的日常用语。别小看这些基础简单的用语，它们已经将英语中最重要的时态（tense）、语态
      （voice）、情态（mood）融合在一起。熟练掌握这些最基础的内容后，接着将语法点系统地、全面地做一
      梳理形成自己对英文的独特认识，这样方能全面高效地掌握这门语言。这里说的“梳理”指的就是将基础用语、
      语法知识点脉络，有机地、联想丰富地、网络联系地形成大脑的深刻记忆。所谓梳理，就是要通过主观的联想
      与抽象思维在大脑中为所学的知识构建起一个强大的知识点网络系统。如果你是初学者，那么持久地重复使用
      Essential 书中所展示的各种单词的使用方式、基本的句子的结构，直到你可以不回思考地可以复述出来，
      就像小时候学中文那样，不仅经常接触、听到，还要模仿、使用它来表达内心的想法。当一天你内心有想法
      自然地从大脑知识网络中找到相应的英语表达，那么这就是最好的熟练程度。母语教学就是实现这样一种效果
      的“浸入”式教学，将自己浸在一个英语世界。这本基础级的语法书就是这样一本自觉教材，它列举的例句全
      是符合英语思维习惯的日常用语，掌握它们就是敲开了英语世界大门。

      大脑知识网络的形成需要耐心、专注，这一切都在说明需要的是时间！当然，一个棘手的问题是大脑对外界
      事物的“看法”，我即我脑，你的所有看法其实是大脑了态度，是它指示你应该这样看待这个，应该这样看待
      那个。当你的大脑觉得英语很乏味，或者说某个老师教的英语很乏味，这都是大脑的对英语的态度。改变这
      种现状是不能通过强迫你去花时间在英语这件事上，这样只能有反作用。正确的做法应该是改变大脑对英语
      这件事的态度、或者改变大脑对某种乏味教学方式的态度。要达到这个目标也并不容易，但这确实是更有效果
      的方式。这种方法我有一个策略：扩大与英文有关的外缘知识网络。比如我自己，我喜欢研究计算系统，喜欢
      研究编程语言，喜欢使用一些开源电子文件工具。这一些都是极好的突破口，因为这些内容通常来自英语体系
      下的社区贡献的成果。如果能引起你足够的好奇、兴趣，那么这时候英语的学习就会变成一件日常行为，最后
      也是最好的结果就是形成生活习惯。我曾经也为大脑对事件的乏味感懊恼，可能在不久前还是饶有兴致的事，
      但是经过一段时间的深入接触，发现和开始的感觉不一样了，只好作罢。如果早一点掌握大脑的基本结构，
      了解海马体短时记忆与大脑皮层的长期记忆的关联，以及记忆对大脑响应外界时的态度的影响，就不一样了。

   Oxford English Dictionary 于 1884 年开始出版第 1 版第 1 卷，历时 40 余年，于 1928 年
   全部出齐。1989 年该词典出版了第 2 版。100 多年来，牛津英语词典从第一版本单词总数 90000 条增加
   到第二版的 171,476 在用主词条，这个数据的变化可以反向估算自工业革命以来的英语词汇量加速增长的事实。
   当前每年还要新增上万单词。

   .. Note:: How many words are there in the English language?

      The Second Edition of the 20-volume Oxford English Dictionary contains 
      full entries for 171,476 words in current use, and 47,156 obsolete words.

      长达 20 卷的《牛津英语词典》第二版中有 171476 个仍在使用的单词词条，还有 47156 个废弃单词词条。

      To this may be added around 9,500 derivative words included as subentries.

      此外还要加上约 9500 个派生词作为词条下面的分项。

      Over half of these words are nouns, about a quarter adjectives, and about a 
      seventh verbs; the rest is made up of exclamations, conjunctions, prepositions, 
      suffixes, etc.

      这些单词超过半数是名词，约四分之一是形容词，七分之一左右是动词，剩下的是感叹词、连词、介词和词缀等。

   `OED 牛津在线英语大词典 <https://www.oed.com/search/dictionary/?scope=Entries&q=colonize>`__
   内容来自于《牛津英语词典》第 2 版，在纸本词典的基础上每 3 个月更新一次，每次增加千余个词条，
   由牛津大学出版社庞大的辞书编辑团队对其进行维护。它是英语语言发展的忠实记录者，收录了超过 60
   万英语单词自公元 1050 年至今的发展沿革和 250 万各种来源的引文。


   联合国注册的语言有 6000 多种，全球 97% 的人口只使用这些语种其中的 4%，语言使用的集中度极高。
   我们国家曾在苏联时期大规范推行过俄语。新中国成立后，教育领域掀起全面学习苏联的热潮。作为最直接、
   最快速地学习苏联经验的语言工具，俄文被大规模地引入到教育界，对社会发展的影响可谓深远。2001 年，
   中国正式加入世界贸易组织 - WTO (World Trade Organization)。WTO 框架下的中国教育进一步融
   入世界教育体系。WTO 框架下《服务贸易总协定》- GATS（General Agreementon Trade in Services）
   规定，国际服务贸易的提供方式主要有境外消费、商业存在、跨境交付、自然人流动四种。由于教育属于 WTO
   国际服务贸易中的一类，这四种提供方式自然也包括教育领域。并且在中美贸易硬脱钩之前，美国长期作为
   中国最大贸易伙伴，这也直接拉动英语教育的大规模增长。2024 年 8 月 8 日，中国海关总署公布数据显示，
   2023 年 1-7 月，中美贸易额为 3815.14 亿美元，同比下降 15. 4%。与此同时，美国仍然是除东盟和
   欧盟之外中国的第三大贸易伙伴。中国海关数据显示，2024 年前七个月，中国对美国出口 2816.55 亿美元，
   下降 18.6%；中国自美国进口 998.59 亿美元，下降 4.7%。

   英文学习很讲究词汇量（vocabulary），主要是指名词的记忆积累。常用动词大概 2457 个，而名词有
   至少 25 万单词，其中的 20% 可能已经不再使用，并且还会随着社会变化而增加新词。如果将名词变型、
   《牛津英语词典》中不收录的专业术语和地方方言、以及尚未被已出版词典收录的单词，将同一单词的不同
   含义分别计算，英语单词的总数可能会接近 100 万。随着英语的不断发展，在经历 1400 多年发展之后
   也渐渐暴露出了它的缺点，新词汇的数量越来越多，越来越长，甚至对人们的生活产生了很大的影响。

   相比之下，虽然汉字数量级在 10 个水平（八万多），但日常使用汉字只需要 3500 个，这些基础汉字足
   以让一个人在日常生活中应对所有的交流问题。汉字是象形字，很多只学过简体中文的人都可以看得懂繁体，
   这个优点是让古人的文字更容易流传，这也是中华历史悠久的一大因素。虽然英文也有词缀，但是功能规模
   远不如汉语从古代流传下来的象形（pictographic characters）普遍。

   英文流行成为世界通用语言的原由有几个，我想至少最主要的要算经济条件，工业革命、电气化、信息化时代
   处于国际领先地位，并且通过殖民扩张（colonization）向全球传输英语。英国曾经建立所谓“日不落帝国”
   环绕整个地球，每时每刻总有一片土地照着太阳。其次，英语的简单是毋庸置疑的，学过外语的朋友会发现，
   在诸多语言中，英语是最简单不过的语言，最难的入门的是汉语。由于英语表述的语义相对明确，这让它在
   科技领域有更佳的表现力，也更容易普及，这就使得其传播更容易。

   .. Note::

      The empire on which the sun never sets.

   正是因为汉语的入门难，在清末民初出现过“汉语拉丁化”文化运动，旨在用更容易写的拼音替换笔画复杂的
   象形文字。1936 年 10 月，鲁迅临逝世前，在答《病中答救亡情报访员》时候说："汉字不灭，中国必亡。"
   现在很多自霉体特别喜欢截取迅哥的只言片语来炒作，完全不提 1931 九一八事变给中国社会后续带来的沉
   痛打击。毛教员曾评价：“鲁迅的方向，就是中华民族新文化的方向。”
   
   .. Note:: 1936年10月，鲁迅临逝世前所作《病中答救亡情报访员》

      “汉字不灭，中国必亡。因为汉字的艰深，使全中国大多数的人民，永远和前进的文化相隔离，
      中国的人民，绝不会聪明起来，理解自身所遭受的压榨，理解整个民族的危机。我是自身受汉
      字苦痛很深的一个人，因此我坚决主张，以新文字来替代这种障碍大众进步的汉字。”

   回到现实，人类命运共同体（a Community with a Shared Future for Mankind）才是王道，不搞
   种群的优劣，不搞社会达尔文主义，更不必去争文字的高低。物尽其用思想自古有之：天下之物，为水火者多矣，
   何忧乎相害？何患乎不尽其用也？

   拉丁语是古罗马及其帝国的语言, 历史上曾被广泛用作学术和官方语言。

   Latin - The language of ancient Rome and its empire, widely used historically
   as a language of scholarship and administration.

   汉语是我们民族的原生文化特产，全球再找不到第二份象形文字。文字从实物的图形表演变，经历了甲骨文、
   金文、小篆（秦朝）、隶书（汉朝）、楷书、草书（唐朝），以及介于楷书和草书之间的行书等演变过程。

   .. figure:: https://pics5.baidu.com/feed/9213b07eca8065386fadf77a0394aa42ac3482e7.png

      [inscriptions on bones or tortoise shells of the Shang Dynasty [16th—11th century B.C.] 
      殷朝和周朝刻在龟甲和兽骨上的文字,内容多为占卜记录。现在的汉字就是从甲骨文演变下来的。

   *  `鲁迅全集 - 论新文字 <https://www.marxists.org/chinese/reference-books/luxun/19/013.htm>`__
   *  `鲁迅：且介亭杂文 - 关于新文字 <https://www.marxists.org/chinese/reference-books/luxun/18/027.htm>`__

   英语与汉语的相似之处：

   *  句子基本结构相似：主+谓+宾 作为句子主干，辅以各种虚词。
   *  存在相似的构词法：汉语有偏旁部首，英语有词缀（affix），包括前缀（prefix）和后缀（postfix）。
   *  都存在同义词（synonym），比如 “开心”和“高兴”，happy and joyous。
   *  都存在反义词（opposite），比如 “上”和“下”，up and down。
   *  存在类似成语的习语（idiom），比如 as busy as a bee（十分忙碌），all thumbs（笨手笨脚）。
   *  都存在字形相近容易混淆的字，比如汉语有“日曰”，英语有 shirt shit。


   根据不同场合表达需要，英语句子中谓语有三态之分，根据不同的“态”来约束谓语动词，因此用作谓语的动词
   又被叫限定性动词（Finite Forms of Verbs），“限定”是指动词受到主语的功能性限定。那些不作为
   谓语使用的就称非限定动词（Non-Finite Forms of Verbs)：

   *  时态（tense）时间上有现在、过去、将来三个基本形式，动作效果上有一般式、完成式、进行式，完成进行式。
   *  语态（voice）又分主动和被动，Active vs. passive voice。
   *  情态（mood）表示说话者的情绪态度。

   中文没有这么多“态”的规则，汉语讲究在什么山头唱什么歌。比如要表示过去的事就用“过去”或者“昨天”、
   “上星期”，要表示将来的事就用“将来”，要表示现在的事就用“现在”或者“在”。比如要表示情态，就用符合
   身份词。比如问女子年龄，文艺点可以说“芳龄”，粗俗点可以说“几岁”“多大”。

   英语与汉语最大的不同在于思想层面，英语侧重具体（concretization）、明确（categorical），汉语
   着重于抽象（abstract）与模糊。就模糊这一词，英语语境就难以表达，此模糊并非 dim（光线影响的模糊），
   也并非 indistinct（不清不楚）、vague（表意不明）。事实上这个模糊用上下文有关文法 CSG (Context
   sensitive grammar) 来表达最清楚不过。汉语表达的具体意思只有结合具体语境后才会有具体意思。因此，
   汉语中的“心”一字就难以找到对应的翻译，英语的 heart 是心脏，mindset 是心态，thinking 是思维，
   它们多多少少与“心”有关。也因此，英语在科技创作方面体现出易用的优点，著作也显得通俗易懂，因为多数
   情况下其句子的单词含义明确不容易造成理解上的困扰。英语这种“明确”思维还大量体现在名词的分类上，名词
   因此一定有可数、不可数，单数与复数的形式。并且名词有数的约束还不够，如果名词作句子的主语，还必需要
   和谓语动词一致，复数形式的语句就不能和复数形式的谓语一起使用，要将数量分得清清楚楚。“多少牛奶”就得
   用 how `much` milk，多少张纸就得 how `many` papers，并且纸作为原料使用它又不可数。基于这
   两种“数态”，much 与 many 形成大量习惯搭配，还有成对出现的以下这样对应的数量表达形式：

   ================================= =======================================
   `a little` = some but not `much`  ✘a little (without a) = nearly no or nearly nothing
   `a few` = some but not `many`     ✘a few (without a) = nearly no 
   ================================= =======================================

   .. code::

         ╭────────────────────────╮        ╭────────────────────────╮
         │ I have a little money. │        │ I have little money.   │
         │ I have a few friends.  │        │ I have few friends.    │
         ╰────────────────────────╯        ╰────────────────────────╯
               ↙                                 ↙           
           ┌─┐                                ┌─┐            
           ║"│                                ║"│            
           └┬┘                                └┬┘            
           ┌┼┐                                ┌┼┐            
            │                                  │             
           ┌┴┐                                ┌┴┐            
      ==============================     ==============================

   汉语的组合思维再次表现出强大的表现力，我们不关心天、地、思想、知识是否可数，不关心动词与主语在
   数量上的关系是否满足“主谓一致”。关心的是人与天地的和谐共存关系，打出一片天、造福一方地，成就一种
   思想，我们从数字和相应的名词组合就知道什么该数，什么又不该数。组合思维从我们接收语文教育那天开始，
   就在潜移默化地让我们掌握通过组合不同的字结对成词，然后组合各种词造句。

   英语字典中特有 old fashion 的单词标签，这是一种词汇系统清扫器。英语语言系统的造词机制，使得它
   必需为新物理造一个单词。如果没有这种机制，英语词汇将不会停止地暴增，就像癌细胞一样。基于组合、抽象
   底层思维的中文没有这样的烦恼，新事物往往对就的是两个词或多个字的组合，汉语的字符数量相对固定，不需
   要词汇清扫机制。英语还有一个潜在的问题，就是处理外来语时也经常需要造新词，这种现象在学术上最为明显，
   比如研究中国历史，英文要表达历史上的专有名词就必需新造词，比如“司马光” Sima Guang，词典一般不会
   积极收录这些学术词汇，当然特别有影响力或者日常使用频繁的例外，比如 Maoism（毛主义/毛泽东思想）。

   也正因如上，英语存在这样“巨大”的 BUG，因为它 需要不断造新轮子适应社会的发展，现在词汇量是 100 万，
   指不定百年后，就是 150 万。汉语中体现的抽象 模糊思想在语言的发展中的作用就可以体现出强大的无限的
   组合创造能力，比如古人用“金木水火土”等基本物质 的抽象概念来表示世界上的各种事物，当化学物理发展到
   分子水平时，就出现了一大批的元素字符，并且创造出 具有汉语特色的化学元素周期表。中国人只要看到“氢氦
   氮氧氟氖氯氩氪”就知道这是常态下的气体，看到“溴汞” 就知道是常态下的液体，“锂铍硼碳”中哪些是金属哪些
   是非金属也一目了然。当化学物理发展到夸克（quack） 水平时，中文的拟声又可以发挥作用，直接创造出“夸克”
   一词。可以预见，在未来的发展中，英语会不断溶合汉 语言的底层思维。

   .. figure:: https://ptable.com/image/元素周期表-长式.svg
      :target: https://ptable.com/#Properties

      Periodic table of elements

   组合思维是一种强大的创造性思维，数学理论对应有组合学（Combinatorics），计算机编程语言的面向对象
   编程模型也基于组合理论，并且现代的 Go/Rust/Kotlin 的组合能力优于早期发展成熟的 C/C++/Java，
   现代语言的一个组合能力的体现就是扩展方法（Extension Function），引入扩展能力后，开发者只需要
   使用扩展语法为原有的类型实现扩展方法，就不必像早期语言那样，必需修改源代码才能更新类型的方法。

Analytic Language vs Fusional Language
=======================================

   *  `上海外国语大学 SISU文研｜世界语言知识图谱系列二：印欧语系 <https://amm.shisu.edu.cn/78/c2/c11394a161986/page.htm>`__
   *  `拉丁语：罗马帝国官方语言，为什么消失了？ <https://www.thepaper.cn/newsDetail_forward_12789552>`__
   *  `The Cambridge History of the English Language <https://www.cambridge.org/core/books/cambridge-history-of-the-english-language/BB4BF6C6BC019EC2FA5C676F755FBE29>`__
   *  `Key Events in the History of the English Language <https://www.thoughtco.com/events-history-of-the-english-language-1692746>`__
   *  `The History of English <https://www.bilibili.com/video/BV1vB4y1K7rk/>`__
   *  `Chinese languages <https://www.britannica.com/topic/Chinese-languages/Standard-Cantonese>`__
   *  `林语堂 - 开明英文文法 (Kaiming English Grammar) [1st] <https://pan.baidu.com/s/1a5awg>`__

   语言学上，汉语属于分析语（Analytic Language）与综合语相对。其特点在于词与句的关系主要不是靠
   词形的变化来表示，而是由词序和虚词来决定。分析语的特点在于其句子中词与词的关系需要通过词序和虚词
   来明确表达，而不是像综合语那样通过词的内部形态变化来表示。分析语的主要特点体现在以下几个方面：

   *  词序重要性：在分析语中，词序对于表达意思至关重要。通过改变词序，可以改变句子的意思或语法结构。
   *  虚词的作用：虚词在分析语中扮演着重要的角色，它们用来表示语法关系，如时态、语态、语气、主语、宾语等。
   *  词汇形态稳定：与综合语相比，分析语的词汇形态变化较少，通常通过词汇的组合和虚词的使用来表达复杂的语法关系。

   综合语（Synthetic）运用词汇形态变化来表达语法关系，常见的例子有拉丁语、德语、古英语等。其定义参考
   Webster's Nith New Collegiate Dictionary：

   A synthetic language is characterized by frequent and systematic use of inflected 
   forms to express grammatical relationships. 

   分析语也叫孤立语，不用形态变化，而用语序及虚词来表达语法关系。汉语是典型的分析语，此外彝语、壮语、
   苗语、越南语等也属于分析语。其定义参考 The Random House College Dictionary：

   An analytic language is "characterized by a relatively frequent use of function 
   words, auxiliary verbs, and changes in word order to express syntactic relations, 
   rather than of inflected forms.

   屈折语（Fusional/Inflectional Language）是一种介于分析语、综合语之间的语言类型，词的形态变化
   较为丰富，但不如综合语那样复杂，且往往也需要依赖词序和虚词来表达语法关系。因此，分析语在形态变化上
   更具简约性。分析语更少依赖词汇形态变化，更多地通过词序和虚词来表达语法关系。屈折语中需要通过词汇形
   态变化通常用于表示时态、语态、数等基本的语法功能。

   此外，屈折语在语法表达上具有一定的灵活性。屈折语中的词汇形态变化可以与词序和虚词相结合，形成丰富的
   语法结构。而分析语则更多地依赖固定的词序和虚词的使用来表达语法关系，因此在语法结构上相对较为固定。

   .. figure:: https://img2020.cnblogs.com/blog/26752/202009/26752-20200904142829183-1882472974.png
      :target: https://img2023.cnblogs.com/blog/26752/202303/26752-20230321162740727-1949258936.jpg
      :target: https://www.cnblogs.com/pengchenggang/p/13613657.html

   希腊和罗马被认为是欧洲的两大文明源头，欧洲的古典文明大多数用罗马帝国官方语言（希腊语、拉丁语）记载。
   西方罗马帝国时期两种通用语言境内分布：西边是拉丁语，东边为希腊语。罗马帝国瓦解后，公元 3-8 世纪，
   各地拉丁语方言独立发展，最终形成了近代的罗曼语族分支：东支、西支，以及撒丁语。包括意大利语、罗马
   尼亚语、法语、西班牙语、葡萄牙语、普罗旺斯语、加泰罗尼亚语、罗曼什语。其中西班牙语的使用人口超过
   5 亿，法语和葡萄牙语也均超 2 亿。

   在西罗马帝国的废墟上，日耳曼人建立起法兰克、西哥特等日耳曼国家。拉丁语的口语随着欧洲民族语言兴起退化。
   影响力最大的是法兰克王国，后来法兰克王国被一分为三。东法兰克的语言，形成了今天的日耳曼语系的德语的雏形。
   日耳曼人的其他部落，比如维京人、盎格鲁-撒克逊人，逐渐发展成为了日耳曼语系的瑞典语、丹麦语以及英语。

   除了日耳曼语系占据了拉丁语的生存空间外，在一些曾经使用拉丁语的地区，则衍生出若干个相对独立的罗曼语支。
   其中，东罗曼语族包括罗马尼亚语。西罗曼语族则主要包括意大利语、法语、加泰罗尼亚语、西班牙语和葡萄牙语，
   它们在口语上逐渐取代了通俗的拉丁语。

   日耳曼语族（Germanic languages）中的西日耳曼语支是其中最大的一支，包括 德语、英语、荷语，
   （南非语属其分支）和弗里西语。古英语和古诺尔斯语（Old Norse）的关系密切，它们有很多相似的文字，
   例如：armr（arm）、fótr（foot）、fullr（full）等。这是因为英语和古诺尔斯语都可以追溯到原始
   日耳曼语。因此，称英语为日耳曼语的传承（The Germanic heritage）一点也不为过。

   由于印度、欧洲大陆上存在大量相互借鉴出展出来的民族语言，语言学上于 1789 年人为地提出印欧语系
   （Indo-European）这一概念，语言学上通过大量相似性的考证，认为古印度梵文同凯尔特语、拉丁语、
   希腊语等 8 个语族有着惊人的相似之处。

   欧洲大陆从来没有统一过，很大的一个原因是因为民族语言的大发展，使用得民族向心力被极大地分散开来。
   历史上曾经最有可能的几次机会出现在：

   *  孛儿只斤·铁木真（1162/5/31 - 1227/8/25）元朝时期；
   *  拿破仑·波拿巴（Napoléon Bonaparte，1769/8/15 — 1821/5/5）执政法兰西第一帝国时期；
   *  阿道夫·希特勒（Adolf Hitler，1889/4/20 — 1945/4/30）发动二战时期。

   中国能有今天这样统一的大好局面，必有得承认秦帝国打下的根基，同时必需认清秦帝国的残暴，这两者不可相抵。
   秦灭六国从公元前 230 年攻打韩国到公元前 221 年灭齐国结束共持续了 10 年之久，依次消灭战国末期
   六大诸侯国（韩，赵，魏，楚，燕，齐），完成中国大一统，结束自春秋以来长达 500 多年的诸侯割据纷争
   局面。并最终实行书同文、车同轨、度同制、改币制，从文化根源上为统一的中国打开基础，然后才有大汉盛唐。
   这其中也形成了统一的语言，从古代的汉藏语系（Sino-Tibetan language family）发展出现代汉语
   （Modern Standard Chinese），也就是普通话（Mandarin），也间接让现代的汉语使用者可以通过
   “被”“请”“也许”“好吗”等简单的字眼来表达英语中通过“打补丁”方式来表达的语态、情态。

   广义的“上古汉语”（Old Chinese）指公元前 221 年秦统一中国之前各种形式的汉语。汉语最早的文字
   记录起源于约公元前1250年（商代晚期，周克商于公元前1045年）刻在兽骨和龟甲上的甲骨文，所以我们
   讨论的也就是这一千年里的汉语。原始汉藏语（Proto-Sino-Tibetan language）是基于语言学上假设
   汉藏语系拥有共同起源的假说而建构出的祖语。学者相信，这种语言为汉藏语系的共同先祖，使用这种语言
   的族群为原始汉藏族。而由于最早的汉语文献所记录的语言，看上去和所有已证实的汉语方言的共同祖先很
   接近，现阶段我们很难对上古汉语和原始汉语（Proto-Chinese、Proto-Sinitic）作出有意义的区分。
   汉语族分化出现代的北部方言群：官话（包含东干语）、晋语南部方言群：吴语、赣语、湘语、闽语、客语、
   粤语。

   这里我用“打补丁”来形容英文中的语态、情态表达，是基于一个大胆的猜测：语言是随着人类劳动实践发展的产物。
   所以，语态、情态等功能并不是英文原本就有的功能。从英文发展的历史可以看到，这是一门经过多民族转手的语言，
   就像古董那样打几个补丁是容易理解的。也可以大胆地设想，英文的时态比语态、情态更早出现，因为对于文字来说，
   时间要素是描述事物的关键信息之一，它比情态、语态更关键。当英语进化阶段发展到需要增加情态、语态等表达
   功能时，如何在当时的流行的句式结构中增加这样一个功能就成了一个不小的问题。使用古英文的人们需要对使用中
   的时态结构动刀子了：通过增加 be 动词来表达被动，通过增加情态动词来表示说话者的情态，这些动词都作为辅助
   功能出现，因此也形成英语中的助动词这样的一种特殊分类。

   以下是摘抄大英百科线上版本对汉语的描述：

      The most common suffixes that indicate nouns are -zi (as in fangzi 
      ‘house’), and -tou (as in mutou ‘wood’). A set of postposed noun 
      particles express space and time relationships (-li ‘inside,’ -hou 
      ‘after’). An example of a verbal affix is -jian in kanjian ‘see’ and 
      tingjian ‘hear.’ Important verb particles are -le (completed action), 
      -guo (past action), and -zhe (action in progress). The directional verbal 
      particles -lai ‘toward speaker’ and -qu ‘away from speaker’ and some 
      verbal suffixes can be combined with the potential particles de ‘can’ and 
      bu ‘cannot’—e.g., na chulai ‘take out,’ na bu chulai ‘cannot take out’; 
      tingjian ‘hear,’ ting de jian ‘can hear.’ The particle de indicates 
      subordination and also gives nominal value to forms for other parts of 
      speech (e.g., wo ‘I,’ wode ‘mine,’ wo de shu ‘my book,’ lai ‘to come,’ 
      lai de ren ‘a person who comes’). The most important sentence particle is 
      le, indicating ‘new situation’ (e.g., xiayu le ‘now it is raining,’ bu 
      lai le ‘now there is no longer any chance that he will be coming’). Ge is 
      the most common noun classifier (i ‘one,’ yi ge ren ‘one person’); others 
      are suo (yi suo fangzi ‘one house’) and ben (liang ben shu ‘two books’).

   可以看到英语母语者对汉语的解读思维以时态作为基本架构，解释汉语中的“了”“的”“不”等等的虚词，解析了
   “了”字后缀作为现在进行时的标志性虚词。“下雨了”解释为 now it is raining 当然没错，但是英文始终
   脱离不开时态来表达“在下雨”“下着雨”“这不下着雨么？”这些灵活的组合的句子。作者还将“个”解读为最广泛
   的“名词量词”，但是是汉语母语者眼中的“个”“只”“条”“头”都是最普通的物体的个体单位（名词量词），取决
   于物体该如何去形容：生命体通常用头、尾、只，物体常用件、条、个、块等等。


Word Categories 单词分类
========================

   *  `瑞秋英语 Rachel 教你纯正的美式英语吞音 <https://www.bilibili.com/video/BV1Wp4y1q7MM/>`__
   *  `瑞秋英语 100 常见的英语单词发音 <https://www.bilibili.com/video/BV1Ki4y1E7DW/>`__
   *  `莎拉布莱曼 经典歌曲《斯卡布罗集市》 <https://www.bilibili.com/video/BV1mf4y1a7Zi/>`__
   *  `Your Go-To Guide for English Grammar <https://www.grammarly.com/grammar>`__

   **Your Go-To Guide for English Grammar**

   Make mistake-free writing your superpower. Try Grammarly’s free grammar checker 
   to find and fix any lingering typos, and check out our handy resources to get a 
   better understanding of English grammar topics like syntax, mechanics, and punctuation.

   **What Is Grammar?**

   Grammar is a set of language rules that allows you to combine individual words 
   to make different meanings. Your writing is stronger, clearer, and more effective 
   when you follow grammar rules. Learn more about the principles of grammar and 
   see how polished writing is brilliant writing.


   英语母语的发音与非母语的学习者有巨大的发音习惯差别，特别在连读的处理上，基本是幼儿园水平开始。
   甚至有人根本没有在课堂上接受过良好的发音知识。没有掌握英语的吞音技巧（Reduced Sound），更别说
   同化 & 异化（Assimilation & Dissimilation）。失去自然的发音，同时会影响你的听力发展。因为
   一直使用错误的发音，或者没有正确的发音技巧，导致与纯正的母语者发音存在巨大差别，这会导致你的听力
   系统无法正确听辨耳朵感受到的声音信息。发音技巧有一条重要规则：一切发音都靠向发音舒服流畅的方向。
   如果某些音素影响发音的流畅度，那么最干脆的解决方法就是吞音：不送气流不发声。英语本身的单词也会做
   这方面的工作，例如 an apple 比 a apple 更容易连读，所以前者是正确的表达，后者是错误的表达。
   冠词 a 与 aeiou 等元音组合时，应该改写为 an。

   建议认真学习莎拉布莱曼演唱的经典歌曲《斯卡布罗集市》，认真分析其发音技巧。特别是其中 Parsley, 
   sage, rosemary and thyme 这里的连音。

   单词（word）是语言的基本要素，单词的分类词类又叫词性（Parts of Speech），英语单词根据其在
   句子中的功用，可以分成 8 个大类，其中数词、感叹词可以省去：

   *  `Understanding the Parts of Speech in English <https://languagetool.org/insights/post/parts-of-speech/>`__
   *  `The 8 Parts of Speech: Examples and Rules <https://www.grammarly.com/blog/parts-of-speech/>`__
   *  `Parts Of Speech: Breaking Them Down With Examples <https://word.tips/grammar/parts-of-speech/>`__
   *  `The 8 Parts of Speech | Chart, Definition & Examples <https://www.scribbr.com/category/parts-of-speech/>`

   ============ ============= ====================== ====== ======================
   Category     abbreviation  phonetic symbol        Zh      example
   ------------ ------------- ---------------------- ------ ----------------------
   Noun         n.            /naʊn/                 名词      master “砖家”
   Pronoun      pron.         /ˈprəʊnaʊn/            代词      you 你
   Adjective    adj.          /ˈædʒɪktɪv/            形容词    happy 高兴的
   Adverb       adv.          /ˈædvɜːb/              副词      quickly 迅速地
   Verb         v.            /vɜːb/                 动词      cut 砍、剪、割
   Article      art.          /ˈɑːtɪkəl/             冠词      a 一个
   Preposition  prep.         /ˌprepəˈzɪʃən/         介词      at 在...
   Conjunction  conj.         /kənˈdʒʌŋkʃən/         连词      and 和
   Numeral      num.          /ˈnjuːmərəl/           数词      three 三
   Interjection interj.       /ˌɪntəˈdʒekʃən/        感叹词    oh 哦
   ============ ============= ====================== ====== ======================

   前六类叫实词（notional word），后四类叫虚词（form word）。对应的汉语表达语境就是“言之有物”。
   其中的介词、连词只可以从其名字猜测出含义：“介”即介入，英语词缀“pre"表示“前置”，也是在其修饰目标
   之前介入的词，因此介词又称为前置词（preposition, prep.）。连词即连接前后两个部分的词，被连接
   的可以是单词（You and me)，也可以是句子（I open the door and then turn on the light）。

   注意，上表中使用双引号释义“砖家”来表示 master 这个单词。虽然这是一种花样，但是需要理性看待
   网络语言。一方面语言是随着社会发展而发展的产物，存在有一定的合理性。另一方面是大脑需要你去通过
   各种感官交互来调动它的记忆力。越是丰富的交互，包括不同场景、不同感受的条件下，总之感官接收到的
   信息越丰富，大脑的记忆构建过程就有越丰富的材料，最后形成的记忆也越深远。以上“砖家”这种解释就是
   在调动大脑的联想，尝试让大脑对单词建立一个更强化记忆。

   英语作为一个国际通用语言，它在不同的母语国家也有一些差异，主要是英、美、澳三国之间出现的一些差异。
   以下仅摘取部分动词作为参考：
   `UK vs. US English | Difference, Spelling & Examples <https://www.scribbr.com/category/us-vs-uk/>`

   ================ ================ ==================
   US               UK               Australia
   [analyze]        analyse          analyse
   [apologize]      apologise        apologise
   [capitalize]     capitalise       capitalise
   [categorize]     categorise       categorise
   [characterize]   characterise     characterise
   [colonize]       colonise         colonise
   [endeavor]       endeavour        endeavour
   [enroll]         enrol            enrol
   [fulfill]        fulfil           fulfil
   [globalize]      globalise        globalise
   [honor]          honour           honour
   [hypothesize]    hypothesise      hypothesise
   [inquire]        enquire          enquire
    install         [instal]         install
   [legalize]       legalise         legalise
   [maneuver]       manoeuvre        manoeuvre
   [maximize]       maximise         maximise
   [minimize]       minimise         minimise
   [mold]           mould            mould
   [neutralize]     neutralise       neutralise
   [optimize]       optimise         optimise
   [paralyze]       paralyse         paralyse
   [plow]           plough           plough
   [privatize]      privatise        privatise
   [randomize]      randomise        randomise
   [realize]        realise          realise
   [recognize]      recognise        recognise
   ================ ================ ==================

   名词又分为可数、不可数两类，countable vs. uncountable，包括单数（singular）和复数（plural）
   两种形式，用在不同场合。就以 clock 这个词来说，它表示时间是不可数的，表示钟表是可数的。比如：
   They work against the clock。

   不定冠词 a (an) 与数词 one 同源，是“一个”的意思，其中的 an 是与 aeiou 一个元音字母开头的
   单词一起使用的形式，目的是使用句子连读时发音更流畅、连读更容易实现吞音乐。定冠词 the 与指示代词 
   this，that 同源，有“那（这）个”的意思。它们常与名词
   搭配使用，定冠词的“定”就是限定、固定的意思，表明明确所指的事物。比如球人都知道地球只有一个地球，
   所以不是使用 an earth 而是使用 the earth。

Pronouns and Persons 代词与人称
--------------------------------

   *  `语言学“格”范畴 <https://www.polyglot101.com/zh/languages/cases/>`

   代词是“名词的替代词”，它的形式变化非常活跃，特别是不定代词，比较复杂。代词可以细分为九类：

   =============================== =============================================
   1. 人称代词 Personal Pronouns    ： `They` are my school mates.
   2. 物主代词 Possessive Adj/Noun  ： `Our` friends have great concern for each other.
   3. 反身代词 Reflexive Pronouns   ： Take good care of `yourselves`.
   4. 相互代词                      ： We should help `each` other. 　　      　
   5. 指示代词                      ： `Who` are these people?
   6. 疑问代词                      ： `What` are you doing?
   7. 关系代词 Relative Pronouns    ： She married Tony Harper, `who` is a student too. 　　
   8. 连接代词                      ： Do you know `who` did it?
   9. 不定代词                      ： Do you know `anything` about it?
   =============================== =============================================

   Relative Pronouns

   ================  ===========================================================
   relative pronoun  use and example
   who               subject or object pronoun for people
   which             subject or object pronoun for animals and things
   which             referring to a whole sentence
   whose             possession for people animals and things
   whom              object pronoun for people, especially in 
                     non-defining relative clauses 
                     (in defining relative clauses we colloquially prefer who)
   that              subject or object pronoun for people, animals and things in
                     defining relative clauses (who or which are also possible)
   ================  ===========================================================


   在一场对话情境中，涉及三类人称角度，代词的使用与之密切相关：

   *  第一人称（First person）即说话的人；
   *  第二人称（Second person）直接与说话的对话的人；
   *  第三人称（Third person）听众；

   造句时主语使用不同的代词会影响到动词的变化形式选择与使用，不仅需要考虑动词的主语人称，还要考虑
   单数、复数的差别。同时，也需要根据作为主语、还是宾语来考虑代词本身的形式。

   格（case）是语言学上标记名词与动词、另一名词或附置词之间关系的语法范畴，关联着形态、句法以及语义
   等多个语言学部门。

   Grammar any of the inflected forms of a noun, adjective, or pronoun that express 
   the semantic relation of the word to other words in the sentence.

   *  主格（Subjective / Nominative） 作为句子的主语，比如“他” he 。 
   *  宾格（Objective / Accusative） 作为宾语，也叫做 the accusative case。比如“~他” him 。
   *  属格 / 所有格（Possessive / Genitive） 比如“他的” his 。

   人称代词（Personal Pronoun）、人称、格范畴等多方的关系如下表所示：

   +--------------------------+-------------------------+-----------------+----------------+
   |                          |     Personal Pronoun    |   Possessive    |    Reflexive   |
   |                          +------------+------------+--------+--------+      Noun      |
   |                          | Subjective | Objective  |   Adj. | Noun   |                |
   +---------------+----------+------------+------------+--------+--------+----------------+
   | First person  | singular |     I      |     me     |    my  |  mine  |         myself |
   |               +----------+------------+------------+--------+--------+----------------+
   |               | plural   |     we     |     us     |   our  |  ours  |        ourself |
   +---------------+----------+------------+------------+--------+--------+----------------+
   | Second person | singular |                         |        |        |       yourself |
   |               +----------+           you           |  your  | yours  |----------------|
   |               | plural   |                         |        |        |     yourselves |
   +---------------+----------+------------+------------+--------+--------+----------------+
   | Third person  | singular |  he/she/it | him/her/it |   his/hers/its  | him/her/itself |
   |               +----------+------------+------------|--------+--------|----------------|
   |               | plural   |    they    |   them     |  their | theirs |     themselves |
   +---------------+----------+------------+------------+--------+--------+----------------+

   反身是人类思维的一种自我意识，知道谁我，知道镜子里的人是自己，但是动物知道？猫知道自己在镜子里吗？
   Does the cat knows who is inside the mirror? 使用人称代词造句时，就需要考虑人称、单数或
   复数、作主语还是宾语等等因素来选择合适的形式。如果用错了，就有种“她是个好男孩”的错误形式，。这一
   点中英文都适用。如果单数、复数形式用错，就会产生“你是一个好孩子们”的逻辑错误。如果属格形式错误，
   就会出现类似中文“这是我的东西桌子”这样的错误。This desk is mine 或者 This is my desk 才是
   正确的属格使用方法，一个是名词性用法，另一个是形容词性用法。

   虽然英语总是用大写的 I 代表“我”，但是有种特殊场合不使用 I，这就是在写履历时用 He/Her 来表示本人，
   这种特殊表达形式主要是考虑给读者（通常是用人单位）一种更中立的（neutral）的立场，更容易取得别人的
   认同。如果使用 I 来表示本人，则可能会让人产生一种王婆卖瓜的感觉。



Verbs and inflections 动词的屈变形式
------------------------------------

   *  `语言类型学：什么是“屈折变化”？ <https://www.polyglot101.com/zh/languages/linguistic-typology/>`__

   动词是句子的心脏，没有动词就构不成句子，没有名词或其它词却可以。因为动词是如此重要，所以使用它的
   约束规则也特别多。

   语言类型学（Linguistic Typology）上使用屈折变化（inflections）来表示“词”的内部形态变化。
   比如英语用 -s 后缀表示复数，-ed 后缀表示过去，-ing 后缀表示进行（现在分词形式），-er/-est
   后缀表示比较级和最高级。还有 sing （past sang; past participle sung）这种不规则动词的
   不规则变化。西班牙语中的猫还分公猫 gato 和母猫 gata。学汉语就没有这样的烦恼，汉语可以用“雌雄
   公母男女父母阴阳牝牡乾坤凤凰”。中文不存在屈折变化，所以猫这个词本身没有变化，只能通过上下文判断
   是一只猫还是很多猫，是公猫还是母猫。

   现代英文中不分阴阳性，但在早期英语系统中存在过阴阳词，英语的语法有一部分是从被的语言迁移过来的，
   有些语言环境里，为了消除代指的歧义，会有阴阳性的区分。比如 actor（男演员）和 actress（女演员）。

   英语谓语（动词）形式可变，根据不同人称有不同的变化形式，根据不同时态（tenses）也有不同形式。
   根据不同的动作还分为及物、不及物两种动词形式，Transitive vs. intransitive verbs。有些
   动词虽然不及物，但是它需要辅助词来让句子完整，比如“我安静的待着” I stay in silent，这里的
   stay 就是这样的动词，这种动词叫系动词（linking verbs）。这些变化多端的形式也是英语入门的
   难点之一。私认为英语中最特别的动词有 be do。其中 be 动词的屈折变化最多样，有七种屈变形态用于
   时态的表达上。

   +--------------------------+---------------+------------+------------+------------+
   |                          | present tense | past tense | past       | present    |
   |   Auxiliary verb: be     +---------------+------------+ participle | participle |
   |                          | be, am, are   | was, were  |            |            |
   +---------------+----------+---------------+------------+------------+------------+
   | first person  | singular |      am       |    was     |            |            |
   |               +----------+---------------+------------+            |            |
   |               | plural   |               |            |            |            |
   +---------------+----------+               |            |            |            |
   | second person | singular |      are      |    were    |    been    |   being    |
   |               +----------+               |            |            |            |
   |               | plural   |               |            |            |            |
   +---------------+----------+---------------+------------+            |            |
   | third person  | singular |      is       |    was     |            |            |
   |               +----------+---------------+------------+            |            |
   |               | plural   |      are      |    were    |            |            |
   +---------------+----------+---------------+------------+------------+------------+

   +--------------------------+---------------+------------+------------+------------+
   |                          | present tense | past tense | past       | present    |
   |   Auxiliary verb: do     +---------------+------------+ participle | participle |
   |                          |   do, does    |    did     |            |            |
   +---------------+----------+---------------+------------+------------+------------+
   | first person  | singular |               |            |            |            |
   |               +----------+               |            |            |            |
   |               | plural   |               |            |            |            |
   +---------------+----------+               |            |            |            |
   | second person | singular |      do       |     did    |    done    |   doing    |
   |               +----------+               |            |            |            |
   |               | plural   |               |            |            |            |
   +---------------+----------+---------------+            |            |            |
   | third person  | singular |     does      |            |            |            |
   |               +----------+---------------+            |            |            |
   |               | plural   |      do       |            |            |            |
   +---------------+----------+---------------+------------+------------+------------+

   总的来说，will be do have 这几个动词的重要性体现在时态的功能上：

   * 助动词 be 用于进行时态，以及被动语态。 (continuous tenses and passive voice )
   * 助动词 do 用于一般时态。 (simple tenses)
   * 助动词 have 用于完成时态 (perfect tenses)

   时态的时间维度上，使用助动词 will 来表现“将来时”，其它时态就需要根据时态的另一个维度（动作效果）
   来配合 have be do 的不组合来表现 。

   英语有很多固定搭配，就像习惯用语一样：take care of（照料）, be good at（擅长），at last（最后），the same（一样）。

   英语中的短语类似汉语的词组，在口语中可以直接当“句子”用，有几下几种形式：

   ========================== =========================
   Verb Phrases               make up
   Noun phrase                a decent black shirt
   Adjective phrase           way too high
   Adverb phrase              really fast
   Prepositional phrase       on the carpet
   ========================== =========================

   动词短语（Verb Phrases）又称 verb group，Grammar In Use 使用 Phrasal verbs 表达。
   用于表达英语句子中的各种时态、语态、情态和语气。动词短语遵循顺序：modal -have- be -be -main verb

   动词短语由一个基本动词搭配一个或多个助动词（一个副词或/和一个介词）组成，作为一个独立完整的用法来
   描述特定动作所指的含义，并充当动词使用。短语动词的形式有：动词+介词，动词+副词，动词+副词+介词。
   例如：
   
   ================================================ ===========================
   She `made up` with her parents.                   她和父母和好如初。
   She `turned off` the lights.                      她关了灯。
   The cat `snuck up on` the mouse before pouncing.  猫慢慢爬去突然扑倒老鼠。
   ================================================ ===========================

   短语动词（Phrasal Verbs）是相似的概念，由一个主动词与一个或多个 particle（副词或介词）组合而成。
   可以是可分离的（separable）或不可分离的（inseparable）。可分离的短语动词中，particle 可以放在
   直接宾语的前面或后面，而不可分离的短语动词中，particle 必须紧靠主动词。短语动词在日常英语中广泛使用，
   对于理解和使用口语或非正式语言至关重要。

   | Turn off (separable): Please turn the lights off. OR Please turn off the lights.
   | Look after (inseparable): They will look after their pets while they're away.

   动词一般作句子的核心——谓语（Predicate），但是并非所有动词都可以作为谓语，一般之外有各种差异化的
   动词存在形式，具体参考后续句子功能说明。以下是动词功能分类及各种动词形式：

   ===================================================== ===========================
   Forms                                                 分类依据
   ===================================================== ===========================
   Finite Forms of Verbs vs. Non-Finite Forms of Verbs   有限形式与不定式。
   Predicate verbs vs. Non-predicate verbs               是否可以作为句子的谓语，受主语限定就是谓语动词，非限定动词（Non-finite verbs）就是非“谓语动词”。
                                                         非谓语动词包括：The Infinitive（动词不定式，to do 这样的表达形式）、动名词、现在分词和过去分词。
   Transitive vs. intransitive verbs                     动词是否有直接作用的物体，如果有就是及物动词（fly me away），没有则是不及物动词（it fly away）。
   Root form of the verb                                 动词原型，与之相对的有动词各种曲折变化形式。
   Third person singular form of a verb                  在句子中第三人称单数作为主语时使用的动词形式。
   Present participle form of a verb                     动词现在分词：动词原型曲折变化的一种形式，用于句子中表现当前进行、将来进行时态。
   Past participle forms of the verb                     动词过去分词：动词原型曲折变化的一种形式，用于句子中表现过去、完成时态。
   Irregular vs. regular Verbs                           动词屈折变化是否规律。一般规律是 ~ed ~ing 后缀分别表示过去式、过去分词。
                                                         非规则动词例子：sing (（past sang; past participle sung）)。
   Active vs. Passive Verbs                              动词在句子中表现的主动、被动语态信息。
   Auxiliary (helping) verbs                             助动词：用于修饰谓语动词以表现时态、语态、疑问等信息。典型的有 will have be do 等。
   linking verbs                                         系动词：用于构造“主系表”句子形式。
   Dynamic (action) verbs                                实义动词：例如 walk, laugh, swim, play, eat, drink, sing, dance, talk, say
   Stative (state-of-being) verbs                        want, need, prefer, love, hate, like, dislike, seem, understand, know, believe, involve, realize
   ===================================================== ===========================

   以下是几个动词的原型及其衍生出来的两种分词参考：

   ======== ============== ====================
   Root     Simple Past    Past Participle
   ======== ============== ====================
   Sing     Sang           Sung
   See      Saw            Seen
   Fall     Fell           Fallen
   Give     Gave           Given
   Go       Went           Gone
   ======== ============== ====================

   *  `Infinitive and Gerund <https://www.ego4u.com/en/cram-up/grammar/infinitive-gerund>`__
   *  `Verbs: The Definitive Guide <https://www.grammarly.com/blog/parts-of-speech/verbs/>`__
   *  `Verb Forms <https://www.grammarly.com/blog/parts-of-speech/verb-forms/>`__

   动词的非谓语形式有三种：

   1. 不定式（The Infinitive），由 to + 动词原形构成。
   2. 动名词（The Gerund），动词加后缀 ~ing，这与动词的现在分词（p.p.）形式上相似。
   3. 分词（The Participle）

      #. 现在分词（The Present Participle），一般为动词加后缀 ~ing
      #. 过去分词（The Past Participle），一般为动词加后缀 ~ed。

   所谓“非谓语”就是不能作谓语，非谓语动词具有以下特征：

   *  非谓语动词可以做主语、宾语等多种句子成分，但唯独不能做谓语。
   *  非谓语动词具有各种形态：原形、主动语态、被动语态、进行时态和完成时态。
   *  非谓语动词具有动词的功能，如可以有自己的宾语，但不具有语法上的动词性质,如没有人称和数的变化。

   汉语中有词性活用，常见的有动词名词化、名词动词化。"吾射不亦精乎"（《卖油翁》）中的"射"本为"射箭"
   的意思，活用作名词，解释为"射箭的本领"。"山不在高，有仙则名"（《陋室铭》）中的"名"，本为名词，
   活用为动词，表示"出名"的意思。"一狼洞其中"（《狼》）的"洞"，原义是"洞穴"，活用为动词，"挖洞"。

   英文中动名词（Gerund）也是类似现象。动名词的结构是动词加后缀 ~ing，同现在分词一样。动词活用的
   另一种形式是不定式（Infinitive），“不”指不限定，同非谓语动词一样不受句子主语限定，当作名词性质
   的句子成分。相对谓语动词，它需要为主语在句子中所起的作用服务，所以受到主语的约束限定。

   Certain words are followed by an infinite verb with or without ‘to’.

   ==================================================================   ================================================================
   Use and Word Lists                                                   Example
   as the subject of a clause                                           To know you is to love you.
   after certain expressions (without ‘to’)                             Why not go to the cinema?
   after certain verbs (without ‘to’)                                   I can swim.
   after certain verbs (with ‘to’)                                      He wants to swim.
   after certain verbs with interrogatives (infinitive constructions)   They don’t know how to swim.
   after certain verbs with objects (without ‘to’)                      He made her swim.
   after certain verbs with objects (with ‘to’)                         They wanted him to swim.
   after certain adjectives and their comparisons                       It’s easier to swim downstream.
   after nouns deriving from the verbs mentioned above                  We made a promise to swim. (derived from the verb ‘to promise’)
   ==================================================================   ================================================================

   Certain words are followed by an Ing-Form.

   ======================================   ================================================================
   Use and Word Lists                       Example
   as the subject of a clause               Cycling is good for your health.
   after certain adjectives                 He’s afraid of going by plane.
   after certain prepositions               Before going to bed he turned off the lights.
   after certain verbs                      I enjoy cooking.
   after certain verbs with prepositions    I am looking forward to seeing you again.
   after certain nouns                      We had problems finding our way back home.
   ======================================   ================================================================

   Words followed either by Infinitive or Ing-Form

   =================================   ================================================================
   Use and Word Lists                  Example
   same meaning                        I started to read. / I started reading.
   same meaning but different use      She forbids us to talk. / She forbids talking.
   different meaning                   He stopped to smoke. / He stopped smoking.
   infinitive or present participle    I saw him go up the stairs. / I saw him going up the stairs.
   =================================   ================================================================

   There are certain words in English that are usually followed by an infinitive 
   or gerund. If you are not sure whether to use the infinitive or gerund, check 
   out our lists or look the words up in a dictionary.


Timeline of Tenses 时态时间线图解
---------------------------------

   英文谓语动词受句子主语支配是显然的逻辑，如果一个句子的谓语不受主语约束，那么它还能为句子服务吗？
   怕是不能，肯定是不能为语服务，只能作为不受主语限定的非限定动词（Non-finite verbs）——非谓语动词。
   因此，谓语动词必然受到句子主语的限制，为实现主语的功能、句子的表现力提供服务。这就有了英语谓语动词
   三态之分。助动词就是为了在句子中表达这些“态”而设计出来的一种帮助/辅助性功能词，置于动词的前面，
   使得动词能表现出时态、语态、疑问句等变化：

   *  时态（tense）时间上包括现在时、过去时、将来时，动作效果上有一般式、完成式、进行式，完成进行式。
   *  语态（voice）又分主动和被动，Active vs. passive voice，比如 I hit it 和 I was hit（被揍了）。
   *  情态（mood）表示说话者的情绪态度，对比 May/Can I come in? 两种表达的情态差异。
      前者是我想进但请求，后者是我现在就能进只是随口问问。

   通过不同动词（助动词、实义动词、系动词）的不同形式组合起来将这三种形态表达不同意思，但是将它们
   分拆开来进行学习更容易掌握：

   *  I have eaten sushi many times before. (tense)
   *  That piece of sushi was eaten by me. (voice)
   *  Did you eat my sushi? (mood)

   时态作为英文中的一个重要概念，以致于学习语态、情态这些内容之前就应该掌握。如果没掌握这个大前提，
   混入更多的“态”只会徒增心智负担而无更多的好处。在学校的大众教育，大多存在这样的问题，不是每个学生
   都能很好地在课堂上跟紧老师的授课内容，并且和教案计划一致。另一个问题是，我们的教育普遍不是适合
   自学的材料，或者说是“防自学”的教科书。甚至，有些具有“防自觉”功能的材料是经过多轮抄写的，而不是
   作者用心编写的教材。说句不好听的话，我喜欢英文原著教材，无套路不设计“防自学机制”。在新时代的 AI
   支持加持下，我相信未来的计算机辅助学习（CAL - Computer-Aids Learning）将是未来之路，这是强调
   “学习” Learning 而不是 Study 或 Education，是想表达教育不应该垄断于机构手上，知识应该不仅仅
   从书本上获得。
   
   英语时态在其母语使用者已经成为一种最普遍、最自然的表达形式，就像汉语使用者眼中的“了”“已经”“还”
   这些字眼，一眼就可以看出是是过去的事还是未来的事。时态涉及“时间态”和“动作态”（效果）两个维度，时
   间上有“过去时”、“现在时”、“将来时”三个基本形式，外加“过去将来”时，它代入过去设想将要发生的事：

   -  [1] = Simple 一般式
   -  [2] = Progressve/continuous 进行式
   -  [3] = Perfect 完成式
   -  [4] = Perfect progressive 完成进行式

   “时式”两个维度的信息通过时间线（Time line）与动作线（Action line）组合在一起得到以下示意图，
   暂且称之为“英文时态组合图”（Timeline graph for English）。横向为时间线，纵向为行为线。那么，
   英语时态就可以很好地用“◯时刻”、“◕跨时刻”、“◉●某时刻之前”等词或者符号去界定行为、事件的发生状态。
   图中使用四个 Unicode 符号来表达时态中与谓语动作相关的的四种底层含义：

   *  ◯ 行为时刻 (Moment in time)，一般时（Simple）表示客观、行为发生的时刻，图示竖线为时刻分界线。

      -  action that takes place once, never or several times
      -  actions that happen one after another
      -  actions that suddenly take place

   *  ◕ 周期行为 (Period of time)，进行式（Progressive）表示跨时间线的行为，表示计划中的动作。

      -  action that started before a certain moment and lasts beyond that moment
      -  actions taking place at the same time

   *  ◉ 行为效果 (Result)，完成式为时刻线（竖向线）之前发生的行为、事件。

      -  action taking place before a certain moment in time
      -  puts emphasis on the result

   *  ● 持续行为 (Course / Duration)，完成进行式为时刻线之前发生的行为、事件。

      -  action taking place before a certain moment in time
      -  puts emphasis on the course or duration of the action

   比如“我会吉他但是现在没有玩吉他”对应“一般现在”和“一般进行”表示，I play guitar, but I am not playing now.

   .. code:: javascript
      :class: https://www.ego4u.com/en/cram-up/grammar/tenses-graphic

                      ┌──────────────┐          ┌──────────────┐          ┌──────────────┐          ┌──────────────┐
                      │ Simple       │          │   Simple     │          │   Simple     │          │    Simple    │
                      │ Past Future ◯│          │    Past     ◯│          │   Present   ◯│          │    Future   ◯│
        Timeline      └──────┬───────┘          └──────┬───────┘          └──────┬───────┘          └──────┬───────┘
      ───────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼────────►
                      ╭──────┴───────╮          ╭──────┴───────╮          ╭──────┴───────╮          ╭──────┴───────╮
                      │ Past Futuree │          │ Past         │          │ Present      │          │ Future       │
                      │ Progressive ◕│          │ Progressive ◕│          │ Progressive ◕│          │ Progressive ◕│
                      ╰──────┬───────╯          ╰──────┬───────╯          ╰──────┬───────╯          ╰──────┬───────╯
              ┌─────────────┐│          ┌─────────────┐│          ┌─────────────┐│          ┌─────────────┐│
              │ Past Fugure ││          │ Past        ││          │ Preset      ││          │ Future      ││
              │ Perfect   ◉ ││          │ Perfect   ◉ ││          │ Perfect   ◉ ││          │ Perfect   ◉ ││
              └─────────────┘│          └─────────────┘│          └─────────────┘│          └─────────────┘│
      ┌─────────────────────┐│  ┌─────────────────────┐│  ┌─────────────────────┐│  ┌─────────────────────┐│
      │ Past Future       ● ││  │ Pastent           ● ││  │ Present           ● ││  │ Future            ● ││
      │ Perfect Progressive ││  │ Perfect Progressive ││  │ Perfect Progressive ││  │ Perfect Progressive ││
      └─────────────────────┘│  └─────────────────────┘│  └─────────────────────┘│  └─────────────────────┘│
                             │                         │                         │                         │

   `英语时态时间线图解 <https://github.com/Jeangowhy/opendocs/blob/main/pictures/timeline_of_tenses.svg>`__

   === ====================================== ====================================== =========================================
                        Past                             Present                                Future
   === ====================================== ====================================== =========================================
   [1] I `looked` at the painting.            I `look` at the painting.              I `will look` at the painting.
   [2] I `was looking` at the painting.       I `am looking` at the painting.        I `will be looking` at the painting.
   [3] I `had looked` at the painting.        I `have looked` at the painting.       I `will have looked` at the painting.
   [4] I `had been looking` at the painting.  I `have been looking` at the painting. I `will have been looking` at the painting.
   === ====================================== ====================================== =========================================

   时态的基本结构：时间状态通过 `助动词` 体现，行为状态通过 `谓语动词` 体现。现在时就是 do 或 does 
   形式，将来时就变成 will 动词，过去时就变成 did 或 had。过去将来时就变成 could/would。行为状态上，
   一般行为谓语就使用 do 或者 is 这样的 `原型`，完成行为变成 have/has/had done `过去分词`，
   进行中行为就变成 ~ing 形式的 `现在分词`，完成进行也是进行态（完成+进行），have/has/had been。

   过去时体现在实义动词的过去分词（一般是动词加 ed 后缀），或者助动词的过去分词上体现（had）。进行
   式结构中，因为需要使用实义动词的现在分词（ing 后缀）形式来表达“进行中”，所以过去时这一语法特征
   只能通过引入辅助动词的过去式来体现。可以用吃饭这件事来说明时态在表达上功能差异：

   =========================== =================================
   Simple  Past                ：我吃过饭了（腊肉炒芥菜的味道真好）。
   Simple  Present             ：我吃米饭（陈述事实，但是我现在没吃）。
   Simple  Future              ：我要吃饭啦（又到干饭时间）。
   Past    Progressive         ：我刚才吃饭了（所以没听到你的电话）。
   Present Progressive         ：我在吃饭呢（别打扰我干饭）。
   Future  Progressive         ：下午 1 点时我会吃着饭（这是计划）。
   Past    Perfect             ：我刚才吃过饭的（肚子应该饿了）。
   Present Perfect             ：我刚吃过饭（你不会又想约我吃饭吧）。
   Future  Perfect             ：我将要在 1 点吃饭（你不要等我了）。
   Past    Perfect Progressive ：我刚才在吃饭了（一直吃着没饱）。
   Present Perfect Progressive ：我在吃饭（并且还没吃饱）。
   Future  Perfect Progressive ：下午 1 点我肯定吃着饭呢（没时间干别的）。
   =========================== =================================

   过去将来时（The Past Future Tense）使用上相对较少，并且概念上很古怪，更像是英语使用者总结出来的。
   Past Future 时态表示从过去时间看将来可能会发生的动作或者状态。主要在于“可能”，好比我上周说周末会
   去打球，对于上周这个时间来说，周末打球是“将来”发生的事情，但是这个“将来”对于现在来说是已经过去时间。
   为了区别这种“过去将来”的过去时间与 Past 时态所指的过去，引入了过去将来时态，使用 would、should、
   could 助动词与时态中的 be、have 动词结构组合。

   =================================== =========================================
   Simple Past Future                  I `would look` at the painting.
   Past Future Progressive/continuous  I `would be looking` at the painting.
   Past Future Perfect                 I `would have looked` at the painting.
   Past Future Perfect progressive     I `would have been looking` at the painting.
   =================================== =========================================

   1. `would | should | could` + 动词原形，“过去时”由前面的助动词体现，“一般式”由动词原型体现；
   2. `was | were` + going to + 动词原形；
   3. `come | go | leave | arrive | start` 等瞬间动词的过去进行时来表示过去将来时；
   4. `was | were` + `due | about` to do 用于表示根据计划，安排定于某事做某事；

   算上过去将来时，时态组合共有 16 种，但是最常用的是 Simple Present 和 Present Perfect Progressive，
   它们分别用于表示当前的阶段的状态、习惯、客观，后者表示从过去到现在持续的动作、所起的作用效果或者
   最近发生的事件。较常用的时态有以下 8 种（现在时 4 种 + 过去时 3 种 + 将来时 1 种）：

   ============================ ==================================================
   Simple Past                  表示过去发生的事，或者过去经常或反复发生的动作。
   Simple Future                表示将来要发生的动作、或存在的状态，将来经常或反复发生的动作。
   Present Progressive          表示说话时正在发生的动作，因为使用动词现在分词，常被称为 ing 式。
   Present Perfect              表示过去发生或已经完成的动作对现在造成的影响或结果。
   Present Perfect progressive  表示已经发生，并且还在进行的事：I had been swimming for eight hours。
   Past Progressive             表示过去进行中的动作，这个时间由上下文给出或者使用时间状语。
   Past Perfect                 表示过去的时间之前发生或完成了的动作，动作发生的时间是“过去的过去”。
   Future I (will / going to)   表示将来/即将发生的事：I'm going to play tennis tomorrow 。
   ============================ ==================================================

   *  `Verb Examples: Definition & Common Types in The English Language <https://word.tips/grammar/verb-examples/>`
   *  `Verbs: The Definitive Guide <https://www.grammarly.com/blog/verbs/>`__
   *  `What Is a Verb? | Definition, Types & Examples <https://www.scribbr.com/category/verbs/>`__


Voice and Mood of Verbs 语态与情态
----------------------------------

   语态（Voice）是指谓语的主动（active voice）或被动（passvive voice）两种状态，表明主体与
   动作的状态是施体还是受体。

   情态（Mood）也称语气，是英语中比较复杂的一个问题，主要是因为不同情态需要和时态组合到一起，这使得
   情态处理起来显得复杂。英语语气分为五类：

   *  陈述语气 Indicative mood，表示所说的是事实；
   *  祈使语气 Imperative mood，表示所说的是请求、命令；
   *  虚拟语气 Subjunctive mood，表示所说的是主观意愿、假设、建议；
   *  疑问语气 Interrogative mood，表示疑惑；
   *  感叹语气 Exclamation，表示对事物的感概；

   陈述语气构成的句子就是一般意义中的句子。祈使语气对应的就是祈使句，句子特点是省略主语，以助动词
   或者谓语动词开头。疑问语气衍生的句子就是疑问句（interrogative sentence），这种句子的特点是
   助动词前置以引起问题。

   例句：

      | The Chinese people love peace.
      | May peace prevail on earth.
      | He suggests that we should build a digital library for ourself.
      | Do you belief in light? 
      | What a dazzling halo!

   情态当然如其名，与情态动词关系密切，难点在于情态动词与虚拟语气句子的使用。注意，情态动词

   情态动词有 13 个，包含过去分词和否定形式（Negative），其中 must、can/could、may/might 
   有本义、推测两层意义，这也是情态动词的主要的知识点：

   =================== ====================== ==================
   | Mood verb         | Original Meaning     Conjecture Meaning
   =================== ====================== ==================
   | must              | 本义：必须；            推测：一定、必然；
   | mustn't           | 本义：禁止；             -
   | can / could       | 本义：能够、可以；      推测：可能；
   | can't             | 本义：不能、不可以；    推测：一定不、不可能；
   | may / might       | 本义：可以；            推测：可能；
   | may not           | 本义：不可以；           推测：未必
   =================== ====================== ==================

   其中 must 和 can't 分别表示 100% 可能和 0% 可能（不可能）。可以将 may 看作是 50% 的可能，
   may not 表示不可以的意思，还可以表示可能性，might 表示更不确定的可能。

   =================== ========================================
   | Mood verb         | Original Meaning
   =================== ========================================
   | shall / should    | 本义：应该；
   | shouldn't         | 本义：不该；
   
   | will / would      | 本义：将要；
   | won't / wouldn't  | 本义：将不会；

   | need              | 本义：需要；
   | needn't           | 本义：不需；

   | dare              | 本义：敢于；
   | daren't           | 本义：不敢；

   | dare              | 本义：敢于；
   | daren't           | 本义：不敢；

   | used to           | 本义：过去常态的事
   | usedn't           | 本义：过去不；等价于 didn't use to

   | ought to          | 本义：应当；等价于 should
   | oughtn't to       | 本义：不应当；

   | had better        | 本义：最好...；
   | had better not    | 本义：最好不要...；
   =================== ========================================
 
   下表三种 if 从句形式中的 done 和  been 指代动词过去分词，具体动词取决于具体句子采用的谓语动词。
   另外，would + do 或者 would + have + done 用于第三、三人称。

   +-----------+----------------------------------------+-----------------------------------------+
   |           | Main clause                            | If clause                               |
   +-----------+----------------------------------------+-----------------------------------------+
   | past      | would/could/might/should + have + done | had done / had been                     |
   +-----------+----------------------------------------+-----------------------------------------+
   | present   | would/could/might/should + do          | did / were                              |
   +-----------+----------------------------------------+-----------------------------------------+
   | future    | would/could/might/should + do          | were to do / should do / could do / did |
   +-----------+----------------------------------------+-----------------------------------------+

   Kaiming English Grammar 一书 Fact And Fancy 一章总结了虚拟语气的三种基本形式：
   过去不真实、未来不确实、现在看情况。

   (1) Past suppositions are untrue. Past events are facts
       (see §13.40). Hence whether a statement in the past tense
       is true or untrue is generally known, and an imagined on
       supposed event in the past is known to be untrue. This is
       easily seen in the following examples:
 
         If it had rained last night, the roads would be wet (It did not
         rain last night.)

         If I had not stopped him, he would have been killed.(I did
         stop him.)

   (2) Future suppositions are uncertain. Future actions
       or events have not yet taken place, and therefore future 
       statements seldom state a fact, but a wish (I will go), an 
       obligation (I have to go), a possibility (I may go), or an expectation
       (I shall go). In any case, there is almost always a strong
       subjective element (see §13.30). The subjunctive form (if
       it rains tomorrow: also general tense form, if it should rain
       tomorrow) always implies an uncertainty.

   (3) Present suppositions vary. The most common form
       used is the ordinary indicative: if he comes. When a greater
       degree of supposition is meant, the general tense-form if he
       should come (now) is used. This may be called a purer form
       of supposition. If he come (instead of if he should come) is
       used with still greater subjective effect, as in arguments: even
       if he come / though he be a millionaire / provided he obey strictly
       my orders. A more direct and still purer form of supposition
       is if he came, or even if he came, which almost always implies
       that the supposition is untrue.

   `Conditional Sentences / If-Clauses Type I, II und III <https://www.ego4u.com/en/cram-up/grammar/conditional-sentences>`__
   条件句（由引导词 if 导引的从句）是虚拟语气的一大内容。


Adjectives and Adverbs
----------------------

   *  `Adjectives and Adverbs <https://www.ego4u.com/en/cram-up/grammar/adjectives-adverbs>`__
   *  `Comparison of Adjectives: A Comprehensive Guide for English Learners <https://7esl.com/comparison-adjectives-grammar/>`__

   形容词和副词是最主要的修饰性句子元素，除了形容词修饰名词，副词修饰动词这点基本差异外，它们都有
   强度比较级别，副词一般可以由形容词加 ~ly 后缀派生得到，slow 和 slowly。有些词本身就兼有形容词、
   副词功能，比如 home，它作为形容词 home match（主场赛事），作为副词表示家的方向 go home（回家）。
   比较的形式有 4 种，原级属于客观状态不属于比较，不规则比较级属于词汇本身结构变化。

   1. 原级（The Positive Degree）表示客观存在，不是比较。
   2. 不规则比较级（Irregular Comparatives），例如 good -> better，bad -> worse，far -> farther/further。
   3. 比较级（The Comparative Degree）~er 后缀或在前面加上“more”。。
   4. 最高级（The Superlative Degree），~est 后缀或形容词前面加上“most”。
   5. 相等比较级（Equality Comparatives），“as...as”结构。
   6. 反义比较级（Antonyms Comparatives），使用“more...than”或“less...than”结构。

   ================================================  ================================
   The elephant is `big`.                            大象很大。
   My cat is `small`.                                我的猫很小。
   My brother is `better` at soccer than I am.       我的兄弟在足球方面比我好。
   Her singing is `worse` than her dancing.          她的唱歌比她的舞跳得差。
   The elephant is `bigger` than the lion.           大象比狮子大。
   Cats are `more independent than` dogs.            猫比狗更独立。
   The elephant is the `biggest` animal in the zoo.  大象是动物园里最大的动物。
   This is the `most delicious` cake I've ever had.  这是我吃过的最美味的蛋糕。
   My dog is `as fast as` your dog.                  我的狗和你的狗一样快。
   This book is `as interesting as` that one.        这本书和那本一样有趣。
   Cats are `more independent than` dogs.            猫比狗更独立。
   This movie is `less boring than` the last one.    这部电影比上一部不那么无聊。
   ================================================  ================================

   使用后缀的比较级形式会改变单词的音节（syllables）结构，比如 big -> bigger -> biggest
   就都多了一个音节变成双音节词，/bɪɡ/ -> /bigə/ -> /bigist/。

   单音节词（Monosyllabic Words）包含一个音节，通常由一个元音字母（aeiou）或一个元音字母和一个
   辅音字母组成。双音节词（Disyllabic Words）由两个音节组成，通常包括一个重读音节和一个次重读音节。
   例如，apple、table。

   Adverbs are used to express how something is done (adjectives express how someone or something is).

   Example: The dog sleeps quietly. The dog is absolutely quiet.

   Adjectives are used to modify nouns:

      The dog is `loud`.

   Adverbs are used to modify verbs, adjectives or other adverbs:

      The dog barks `loudly`.

   **Linking Verbs**
   Some verbs can only be used with adjectives, others might change their meaning 
   when used with an adverb.

   =====  ==================================  =========================================
   verb   used with an adjective              used with an adverb
   look   look good (= appearance)            look well (= healthy)
   feel   feel good (= state of health/mind)  feel well (= have a good sense of touch)
   smell  smell good (= odour)                smell well (= have a good sense of smell)
   taste  taste good (= preference)           taste well (= have a good sense of taste)
   =====  ==================================  =========================================

   The following verbs can only be used with adjectives:

      be become get grow keep remain seem sound stay turn


   **Comparison of Adjectives: Positive Form** 
   Use the positive form of the adjective if the comparison contains one of the 
   following expressions:

      as … as

   Example: Jane is as tall as John.

      not as … as / not so … as

   Example: John is not as tall as Arnie.


   **Comparative Form and Superlative Form (-er/-est)**

   *  one-syllable adjectives (clean, new, cheap)
   *  two-syllable adjectives ending in -y or -er (easy, happy, pretty, dirty, clever)

   ================  ================  ===================
   positive form     comparative form  superlative form
   clean             cleaner           (the) cleanest
   ================  ================  ===================

   Exceptions in spelling when adding -er / -est

   ======================================================  ==========================
   silent ‘e’ is dropped                                   late -> later -> latest
   final ‘y’ after a consonant becomes i                   easy -> easier -> easiest
   final consonant after short, stressed vowel is doubled  hot -> hotter -> hottest
   ======================================================  ==========================


   **Comparative Form and Superlative Form (more/most)**

   adjectives of three or more syllables (and two-syllable adjectives not ending in -y/-er)

   ========================  ================  ===================
   positive form             comparative form  superlative form
   difficult                 more difficult    most difficult
   ========================  ================  ===================


   **Comparative Form and Superlative Form (irregular comparisons)**

   ========================  ================  ===================
   positive form             comparative form  superlative form
   good                      better            best
   bad / ill                 worse             worst
   little (amount)           less              least
   little (size)             smaller           smallest
   much / many               more              most
   far (place + time)        further           furthest
   far (place)               farther           farthest
   late (time)               later             latest
   late (order)              latter            last
   near (place)              nearer            nearest
   near (order)              -                 next
   old (people and things)   older             oldest
   old (people)              elder             eldest
   ========================  ================  ===================


   **Adverbs Comparison (-er/-est)**

   =================================================  =========================  ==========================
                                                      Comparative ending in -er	Superlative ending in -est
   one-syllable adverbs (hard)                        harder                     hardest
   adverbs with the same form as adjectives (early)   earlier                    earliest
   =================================================  =========================  ==========================

   **Adverbs Comparison (more / most)**

   ===============================  ============================  ============================
                                    Comparative formed with more  Superlative formed with most
   adverbs ending in -ly (happily)  more happily                  most happily
   ===============================  ============================  ============================

   **Irregular comparisons**

   ===============================  ============================  ============================
   positive form                    comparative                   superlative
   well                             better                        best
   badly                            worse                         worst
   ill                              worse                         worst
   little                           less                          least
   much                             more                          most
   far (place + time)               further                       furthest
   far (place)                      farther                       farthest
   late (time)                      later                         latest
   ===============================  ============================  ============================


   Exceptions in spelling

   =========================================  ========================
   exception                                  example
   silent `e` is dropped in true, due, whole  true → truly
   `y` becomes `i`                            happy → happily
   `le` after a consonant is dropped          sensible → sensibly
   after `ll` only add `y`                    full → fully
   =========================================  ========================

   Adjectives ending in -ic: adjective + -ally (exception: public-publicly)

   ===========  ============================
   adjective    adverb
   fantastic    fantastically
   ===========  ============================

   Adjectives ending in -ly: use ‘in a … way / manner’ or another adverb with similar meaning

   ===================  =====================
   adjective            adverb
   friendly             in a friendly way
   |                    in a friendly manner
   likely               probably
   ===================  =====================

   Exceptions

   ====================  ========================  ===========================
   adjective             adverb (meaning)          adverb (meaning)
   good                  well                      
   difficult             with difficulty           
   public                publicly                  
   deep                  deep (place)              deeply (feeling)
   direct                direct                    directly (=soon)
   hard                  hard                      hardly (=seldom)
   high                  high (place)              highly (figurative)
   late                  late                      lately (=recently)
   most                  most                      mostly (=usually)
   near                  near                      nearly (=almost)
   pretty                pretty (=rather)          prettily
   short                 short                     shortly (=soon)
   ====================  ========================  ===========================

   The following adjectives are also used as adverbs (without modification):	
   
      daily, enough, early, far, fast, 
      hourly, little, long, low, monthly, much, 
      straight, weekly, yearly, …


Plural Nouns
---------------------

   `Plural Nouns: Rules and Examples <https://www.grammarly.com/blog/plural-nouns/>`

   A `plural noun` is a noun that refers to more than one person, place, thing, 
   or idea. Most `singular nouns` are made plural by adding a suffix, usually –s 
   or –es. For example, the singular noun `dog` takes the plural form `dogs`, as in 
   `three dogs`. However, there are irregular plural nouns that take unique forms.

   Most singular nouns are made plural by simply putting an –s at the end. 
   There are many different rules regarding pluralization depending on what letter 
   a noun ends in. Irregular nouns do not follow plural noun rules, so they must 
   be memorized or looked up in the dictionary.

   **What are plural nouns?**

   A noun is plural when it represents two or more people, places, things, or ideas. 
   You can identify most plural nouns because they end in –s or –es, although there 
   are plenty of exceptions. In particular, irregular plural nouns each have their 
   own special plural forms, such as `child` and its plural form, `children`.

   **Plural nouns vs. singular nouns**

   English distinguishes grammatical nouns as either singular or plural. Singular 
   nouns represent one of something.

   Plural nouns, on the other hand, represent two or more of something.

   =================== =========================
   one `car`           five `cars`
   a `friend`          a few `friends`
   this `daisy`        these `daisies`
   =================== =========================

   You can tell the difference between most singular and plural nouns by how the 
   word ends, except for irregular nouns.

   **Plural nouns vs. possessive nouns**

   Possessive nouns are nouns that show ownership, usually with an –’s at the end. 
   So if you had a friend named Marja and Marja owned a bike, you would write:

      Marja’s bike

   Plural nouns are often confused with possessive nouns because both usually end 
   in –s. However, the major difference between plural and possessive nouns is the 
   apostrophe;

   possessive nouns have it, but plural nouns don’t (unless they’re plural possessive nouns).

   =========== ======================= =====================
               [plural possessive]     [singular possessive]
   =========== ======================= =====================
   [singular]  boss                    boss’s
   [plural]    bosses                  bosses’
   =========== ======================= =====================

   `Possessive Nouns: How to Use Them, With Examples <https://www.grammarly.com/blog/possessive-nouns/>`

   **How do plural nouns work?**

   To make a regular noun plural, you add –s or –es to the end, depending on the 
   word’s ending. Sometimes, letters of the original word get changed to make the 
   plural form, such as half and its plural form, halves. We explain which words 
   get which suffixes in the next section.

   Irregular plural nouns are an exception. Each irregular plural noun has its own 
   unique plural form, such as mouse and its plural, mice, or goose and its plural, geese.

   Most nouns can be turned into plural nouns, including collective nouns that represent groups.

   *  one team
   *  two teams

   However, mass nouns, also known as uncountable nouns or non-count nouns, like art, 
   usually aren’t expressed as plurals, even when they represent multiple things.


   **Plural noun rules**

   There are many plural noun rules, and because we use nouns so frequently when 
   writing, it’s important to know all of them! The correct spelling of plurals 
   usually depends on what letter the singular noun ends in.

   1. To make regular nouns plural, add –s to the end.

      *  cat – cats
      *  house – houses

   2. If the singular noun ends in –s, –ss, –sh, –ch, –x, or –z, you usually 
      add -es to the end to make it plural.

      *  iris – irises
      *  truss – trusses
      *  marsh – marshes
      *  lunch – lunches
      *  tax – taxes
      *  blitz – blitzes

   3. In some cases, singular nouns ending in –s or –z require that you double 
      the –s or –z prior to adding the –es for pluralization.

      *  bus – busses
      *  fez – fezzes

   4. For most nouns that end with –f or –ef, you add an –s to form the plural 
      version. Be aware of exceptions, however. For some nouns ending this way, 
      you must change the –f or –ef to –ve before adding the –s.

      *  roof – roofs
      *  belief – beliefs
      *  chef – chefs
      *  chief – chiefs

   Exceptions:

      *  wife – wives
      *  wolf – wolves
      *  leaf - leaves

   5. If a singular noun ends in –y and the letter before the –y is a consonant, 
      you usually change the ending to –ies to make the noun plural.

      *  city – cities
      *  puppy – puppies

   6. If the singular noun ends in –y and the letter before the –y is a vowel, 
      simply add an –s to make it plural.

      *  ray – rays
      *  boy – boys

   7. If the singular noun ends in –o, you usually add –es to make it plural.

      *  potato – potatoes
      *  tomato – tomatoes

      Exceptions:

      *  photo – photos
      *  piano – pianos
      *  halo – halos

      With the unique word `volcano`, you can apply the standard pluralization 
      for words that end in –o or not. It’s your choice! Both of the following 
      are correct:

      *  volcanoes
      *  volcanos

   8. If the singular noun ends in –us, the plural ending is frequently –i.

      *  cactus – cacti
      *  focus – foci

   9. If the singular noun ends in –is, the plural ending is –es.

      *  analysis – analyses
      *  ellipsis – ellipses

   10. If the singular noun ends in –on, the plural ending is usually –a.

      *  phenomenon – phenomena
      *  criterion – criteria

   11.   Some nouns don’t change at all when they’re pluralized.

      *  sheep – sheep
      *  series – series
      *  species – species
      *  deer – deer

   You need to see these nouns in context to identify them as singular or plural. 
   Consider the following sentence:

      Mark caught one fish, but I caught three fish.

   However, when it comes to fish, things can get a little complicated.


   **Plural noun rules for irregular nouns**

   Irregular nouns follow no specific rules, so it’s best to memorize these or 
   look up the proper pluralization in the dictionary.

   *  child – children
   *  goose – geese
   *  man – men
   *  woman – women
   *  tooth – teeth
   *  foot – feet
   *  mouse – mice
   *  person – people

   **Plural noun FAQs**

   *  What is a plural noun?
      A plural noun is the form of a noun used to show there is more than one person, 
      place, thing, or idea. Most nouns simply add –s or –es to the end to become plural.

   *  What is an example of a plural noun?
      Kids is the plural noun form of kid. Some nouns have an irregular plural form; 
      for instance, the plural noun of child is children, not childs.

   *  What is the difference between singular and plural nouns?
      Singular nouns represent only one thing, but plural nouns represent more than 
      one. If someone stands alone, we call them a person (singular), but if there’s 
      more than one person, we call them people (plural).



Mass nouns (Uncountable Noun)
-----------------------------

   `What Is a Mass (Uncountable) Noun? <https://www.grammarly.com/blog/mass-noun/>`

   Mass nouns, also known as “uncountable nouns” or “noncount nouns,” are nouns 
   representing something that cannot be counted. A mass noun doesn’t have a plural 
   form, like the popular mass noun examples blood or clothing—it’s incorrect to 
   say bloods or clothings. 

   It’s hard to tell the difference between mass nouns and normal nouns (called 
   “count nouns” or “countable nouns”). In fact, sometimes it can be downright 
   frustrating, even for English experts. So in this guide, we explain everything 
   you need to know about how mass nouns work and how to tell them apart from 
   other nouns. 

   **What is a mass noun?**

   A mass noun is any noun that represents something impossible or difficult to count, 
   such as air, rice, or intelligence. These nouns usually refer to abstract concepts 
   (information, advice), physical objects that are hard to separate as individual 
   objects (snow, sand), or general names for the sciences and sports (psychology, football).   

   Mass nouns are often confused with other subtypes of nouns, but they are not the same. 
   For example, mass nouns are different from compound nouns, which are just common nouns 
   composed of more than one word. 

   Likewise, mass nouns are different from irregular plural nouns, which are common 
   nouns that do not use a standard -s or -es ending for their plural (such as `child` 
   and its plural form `children`). In fact, mass nouns don’t have a plural form at all. 

   **Mass nouns vs. collective nouns**

   What about collective nouns? Although they seem similar, mass nouns and collective 
   nouns are not the same. A collective noun is a noun that represents multiple things 
   at once, such as `team`, `family`, or `everyone`. Mass nouns, however, represent 
   things that are impossible or difficult to count, but not necessarily separate, 
   such as energy, wood, or trash. 

   **Mass nouns vs. count nouns**

   The majority of all nouns are countable nouns. These are normal objects that exist 
   individually, making them easy to count. Some things, however, are not divided so 
   conveniently: `liquids`, `gasses`, `abstract concepts`, `natural phenomena`, and 
   `granular substances`, like `sand`. 

   Think about it like this: If you look at a group of cats, it’s possible to count how 
   many cats there are, whether one cat or one hundred cats. That makes cat a countable 
   noun or simply a “count noun.” On the other hand, if you look at salt, it’s very 
   difficult to count all the individual grains of salt. That makes salt a mass noun, 
   otherwise known as an uncountable noun or noncount noun. 

   **How to use mass nouns in a sentence**

   Mass nouns don’t always use normal sentence structure. Let’s take a look at the most 
   important rules for using a mass noun in a sentence. 

   1. Mass nouns always use the singular form.

      Mass nouns don’t have plural forms, so they always use the singular form. 
      That means you never add -s or -es to the end. 

      If a mass noun is the subject of a sentence, the verb should also be 
      singular to maintain subject-verb agreement（主谓一致）. 

      *  The sand burn my feet. ✘
      *  The sand burns my feet. ✔

   2. Mass nouns don’t use numbers. 

      Countable nouns often use numbers to show how many there are, such as 
      “two trucks” or “10,000 trees.” Mass nouns, however, do not use numbers; 
      if you want to specify an exact amount, usually you can add a new word 
      like “pieces” or “types.” A lot of mass nouns have specific words for 
      when you want to separate them, like “slices” or “loaves” for bread or 
      “grains” for sand, salt, wheat, and rice.

      *  I’d like two breads please. ✘
      *  I’d like two loaves of bread, please. ✔

   3. Mass nouns don’t use indefinite articles (a or an).

      Just like with numbers, you can’t use mass nouns with the indefinite 
      articles a and an. You can, however, use the definite article the.

      *  An air is stale. ✘
      *  The air is stale. ✔

   4. Some nouns can be either mass nouns or count nouns.

      Depending on how they’re used, some nouns can be either mass nouns or 
      count nouns, but not at the same time. 

      For example, when `paper` is used to refer to a material, it is a mass noun.

      *  The printer needs more papers. ✘
      *  The printer needs more paper. ✔

      However, when it is used to refer to an individual piece of writing, paper is a count noun. 

      *  I have to write three paper before Friday. ✘
      *  I have to write three papers before Friday. ✔

      Typically, these words act as mass nouns when used `generally` and as count 
      nouns when used `specifically`. 

      *  GENERAL: Since the stock market crash, `business` is down. 
      *  SPECIFIC: All the `businesses` on Main Street remained open. 
      *  GENERAL: `Time` waits for no one. 
      *  SPECIFIC: How many `times` have I told you to close the door!
   
      专用与泛用的例子：代码中有两个 Time 变量，There are two Time variable in the source。

   5. If you’re having trouble, try using a different word 

      Mass nouns can limit your communication, especially if you need to express a 
      certain amount. Sometimes, you can simply replace a mass noun with a count noun 
      to communicate more clearly. 

      For example, `money` is a mass noun that refers to currency in general. If you 
      want to specify an exact amount, you should use a countable noun, like dollar.

      *  I need three more money to get a movie ticket. ✘
      *  I need three more dollars to get a movie ticket. ✔

   **Mass noun examples by category**

   If you’re confused about which words are mass nouns and which aren’t, you’re 
   not alone. Below we list some of the most common mass nouns in English, divided
   by category. The more you familiarize yourself with these lists, the easier 
   it will be to identify them in reading and in conversation. 

   Words with an asterisk (*) mean they can be either mass nouns or countable 
   nouns, depending on how they’re used. 

   **Abstract concepts**

   ================ ================== ==================
   admiration       health             peace         
   advice           help               poetry        
   anticipation     importance         politics      
   aptitude         information        power*        
   art*             innocence          public        
   beauty*          intelligence       reality*      
   bravery          justice*           research      
   business*        knowledge          safety        
   data             love*              speed         
   education        literature         spelling*     
   equality         logic              status        
   failure*         luck               strength*     
   faith*           math/mathematics   stress        
   feedback         morality           success*      
   freedom*         music              trust*        
   fun              nonsense           wealth        
   grammar          patience           wisdom        
   hatred           pay                
   ================ ================== ==================

   *  All emotions:  anger, happiness, sadness, etc.
   *  All languages: English, Spanish, Vietnamese, etc.
   *  All measurements: length, height, width, etc.
   *  All sciences: astronomy, physics, geology, etc.

   **General materials**

   ============== ================ =================== ==================
   cardboard      wood             pasta*               humidity
   clay           wool*            produce              ice
   cloth          Food and drink   rice                 lightning
   coal           bacon            salt*                mud
   concrete       beer*            seafood              rain
   equipment      bread            soup*                rust
   fuel*          butter           spaghetti            smoke
   gasoline       cheese*          sugar*               snow
   glass*         chocolate*       tea*                 (outer) space
   lumber         coffee*          toast                steam
   metal*         cream*           wheat*               sunshine
   oil*           fish             wine*                thunder
   paper*         flour*           Nature and science   weather
   petrol         food*            air                  wind
   plastic*       honey            dirt                 wildlife
   steel          ice cream*       energy               
   timber         juice*           gravity              
   water*         milk             heat                 
   ============== ================ =================== ==================

   All chemical elements: gold, iron, hydrogen, etc.

   **Miscellaneous**

   ============== ================ =============== ==================
   baggage        grass            mail            stuff       
   blood          ground*          money           sweat       
   cash           hair*            news            time*       
   clothing       hay              noise*          toothpaste* 
   darkness       hardware         pain*           traffic     
   electricity    homework         perfume*        trash       
   evidence       jewelry          rubbish         waste       
   flesh          laughter         sand            work*       
   furniture      light*           silence         
   garbage        luggage          soap*           
   gossip         machinery        software        
   ============== ================ =============== ==================

   All sports: football, chess, hockey, etc.

   Additionally, most medical terms are mass nouns, including diseases (influenza, 
   pneumonia), conditions (nausea, hypertension), and medical procedures (chemotherapy, 
   dialysis). 

   **Mass noun FAQs**

   *  What is a mass noun?
      Also known as “uncountable nouns” or “noncount nouns,” mass nouns are nouns 
      representing things that cannot be divided or counted easily, such as air and 
      sand, or abstract concepts, like fun and politics, among other categories.  

   *  When should you use a mass noun?
      If a word can be either countable or uncountable, use it as a mass noun 
      (uncountable) when speaking generally, and use it as a count noun (countable) 
      when speaking about specific occurrences. 

   *  What are some examples of mass nouns?
      Popular mass noun examples include money, water, clothing, wood, and help, 
      although there are hundreds of others. General terms, like those used for weather, 
      emotions, sciences, languages, and sports names are usually mass nouns, too. 



Sentence Structures 句子结构
=============================

   英语的语法上将句子成分（sentence element）分为六种：

   =========== ============= ====== ======================
   Elements    abbreviation  Zh      phonetic symbol
   ----------- ------------- ------ ----------------------
   Subject     S             主语    /ˈsʌbdʒɪkt/
   Predicate   P             谓语    /ˈpredɪkət/
   Predicative Pre.          表语    /prɪˈdɪkətɪv/
   Object      O             宾语    /ˈɒbdʒɪkt/
   Attribute   Att.          定语    /əˈtrɪbjuːt/
   Adverbial   Adv.          状语    /ədˈvɜːbɪəl/
   =========== ============= ====== ======================


   宾语分为直接、间接接受主语动作两种形式，Direct objects vs. indirect objects。例如，
   以下句子 me 是间接宾语，five dollars 才是直接宾语。

   .. code::

      My brother lent me five dollars. 


   .. code:: javascript
      :class: Ascii Art draw by https://asciiflow.com/#/local/clause

      ┌───┐ ┌────────────┐ ┌───────────────────────┐ ┌────────────────┐ ┌──────────────────────────────────┐ 
      │ I │ │ rudely hit │ │ Enter key on keyboard │ │ to fix the bug │ │ that had tormented me all night. │ 
      └───┘ └────────────┘ └───────────────────────┘ └────────────────┘ └──────────────────────────────────┘ 
        │        │                │                          │                         │
        │        │                └────── Object             │                         │
        │        └──────── Predicate           Complement ───┘                         │
        └───────────────── Subject   The Adverbial Clause ─────────────────────────────┘

      我粗暴地敲了了一下键盘上的回车键修复了那个折磨我一夜的 bug。

   以上句子严格来说不属于“主＋谓＋宾＋宾补”格式，因为有后面的状语从句。主干是“我敲键盘”，修饰分包括：
   rudely 副词修饰谓语动词（是粗暴而不是温柔），on keyboard 介词短语修饰宾语（回车键在键盘上）。
   但是，如果只有这几部分，句子显然表达不了更多信息：为什么敲？敲出什么效果？为什么要粗暴地敲键盘？
   这里就使用了补足语（complement），这是一种修饰主语、宾语，丰富句子信息的句子成分。用来修饰主语
   就叫做主语补足语（subject complement），用来修饰宾语就叫做宾语补足语（object complement）。
   例句中的“宾补”还包含了两个结构，一是非谓语形式之一：不定式（The Infinitive），二是修饰不定式
   之中的 bug 一词的状语从句。有了额外的信息，这个句子无论从句式上，还是语义上都更加完整。读者一看
   就可以理解”粗暴“的理由，和敲键盘后的效果：修复了折磨人的虫子。这是什么虫子呢？为何这种虫子能折磨人？
   当然，后面这些都可以继续完善下去，并且按照提问的思路，后面肯定离不开青少年趣味科普类作品这条路。

   再来分析一下时态，对于简单句，只有一个谓语成分，只需要考虑句所表达的来确实应该什么什么时态。复杂句
   时态处理原则建立在处理好简单句的时态的基础上，并且需要从逻辑上保证从句中的谓语与主干的谓语两者时态
   不矛盾、自洽。比如说，例句中的从句使用的是将来的时间，这样时态逻辑上怎么解释呢？我修复了一个将会在
   明天折磨我一晚上的 bug？那样我是不是要成算命先生了呢？当然，从软件行业上来说，没有不存在 bug 的
   软件，这是可以预见的信息，但是不能预见刚好有一个 bug 会在明天折磨我一晚上。

   句子结构（Sentence structure）是语法基本研究对象，简单句子由基本元素组成，归纳为五种基本句型。
   显然，从文学创作角度来看，只使用元素构建的句子是缺少表现力的，可修饰的范围受限。就像房间，如果太小
   就没有办法装修成为客厅。出于修辞需要更复杂的句子成分，就是将一个句子当作句子的成分，形成主从关系。
   主句（Main/Principal Clause）是主干，从句（Subordinate Clause）作为主干的修饰成分一同构成
   复合句式（compound sentence）。有两种复合形式：

   *  并列复合句：使用并列连词 ("fanboys") 连接，也称为并列句；
   *  主语从句或从属复合句，也称复杂句（complex sentence）；

   从属复合句（complex sentence）由一个主句和一个或以上的从句（Subordinate Clause）构成。
   用疑问词作引导词，主句是全句的主体，通常可以独立存在；从句则是一个句子成分，不能独立存在。
   从句虽不能单独成句，但也像句子一样有主语和谓语，差别在于从句须由关联词（conjunction）引导。 
   根据引导从句功能不同，大致可分为：主语从句、表语从句、宾语从句、定语从句、状语从句等。从句作为
   句子基本成分修修饰主句。

   .. code:: javascript

      ┌──────────────────────────┐ 
      │ 简单句                    一、主＋谓
      │ Simple sentences         二、主＋谓＋表
      │                          三、主＋谓＋宾
      │                          四、主＋谓＋间宾＋直宾
      │                          五、主＋谓＋宾＋宾补
      └──────────────────────────────────────────────────────────────────────┘ 
      ┌─────────────────────────────┐ 
      │ 并列句                       一、表示递进
      │ The compound sentence       二、表示选择
      │                             三、表示转折
      │ conj.: fanboys              四、表示因果
      │ for and nor but or yet so   五、其它
      └──────────────────────────────────────────────────────────────────────┘ 
      ┌──────────────────────────┐ 
      │ 复杂句                    一、名词从句（The Noun Clause）：从句作主语、宾语、表语
      │ Complex sentence         二、定语从句（The Attributive Clause）
      │                          三、状语从句（The Adverbial Clause）
      └──────────────────────────────────────────────────────────────────────┘ 

   谓语只能是动词，但不是所有动词都可以单独作谓语，只有实义动词、系动词才可以单独作谓语。并且，谓语
   动词还必须要符合英语的时态基本要求，这是由英语的基本语法要求决定的。在此基础上，副词的主要功能是
   作为方式副词（Adverbs of Manner）修饰谓语。由于动词在句子中的角色是如此特别且重要，在分析长
   难句的时间，首要任务就是找动词。找到动词，就基本可以把握句子基本结构，如果还能理解动词含义，就能
   理解长难句的基本含义。主句子谓语动词的要点就是：具有时态、语态的实义动词或者系动词！

   英文句子中有一种非常重要的“非谓语动词”形式，之所以称“非”谓语，即它们不是动词。英语句子中动词
   是作为谓语存在的，其它动词要充当句子中除了谓语之外的成分，就需要将谓语动词转化为“非动词”形式。
   非谓语动词有三种形式：动名词（~ing）、过去分词（~ed）、不定式（to ~），分别表示主动、被动、目的。
   不定式就是没有限定的形式，以 to 这个介词作为不定式的标志。规则动词 ~ing 后缀表示字词、~ed 表示
   过去式，不规则动词的各种形式需要参考词典。

   说完一般情况，接下来就要提到一些特殊形式（习惯用语）：
   ::

      feel ... to be/do something
      listen to ... do something
      hear somebody/something doing something
      make somebody/something do/doing something
      let somebody/something do/doing something
      have somebody/something do/doing something
      watch somebody/something do/doing something
      notice somebody/something doing something
      observe somebody/something doing something
      help somebody (to) do something 帮助某人去做某事

   定语（attributive）是用来修饰、限定、说明名词或代词的品质与特征的。主要由形容词、名词、代词、
   数词、介词短语、动词不定式（短语）、分词、定语从句等相当于形容词的词、短语或句子来充当。汉语中
   常用“……的”表示，定语在句子中出现的位置一般有两种：用在所修饰词之前的叫前置定语，用在所修饰词之
   后的叫后置定语，定语和中心语之间是修饰和被修饰、限制和被限制的关系。

   状语（adverbial）是句子的一个重要修饰成分，是谓语里的另一个附加成分。从情况、时间、处所、方式、
   条件、对象、肯定、否定、范围和程度等方面对谓语中心词进行修饰、限制。在不同的语言中“状语”有不同的
   作用。中文状语是动词或形容词前面的连带成分，修饰、限制动词或形容词，表示动作的状态、方式、时间、
   处所或程度等；英语状语修饰动词、形容词、副词或整个句子；德语状语修饰动词、形容词、副词或整个句子。

   简单句是复合句的基础，复合句都是由简单句作句子成分，搭配连词组合起来的句子。此外，定语、状语作为
   句子的主要修饰成分，在句式构成中起了非常在的功能作用，同时它们所延伸出来的从句也就成为语法的难点。
   在简单句子与复合句之间，还存在一些形式上比 SVO 句式有细微差别的句子，这些差别之一在宾语的形式上，
   包括：直接宾语（direct object）、间接宾语（indirect object），以及
   宾语补足语（Object complement）、双宾语（Double object）：

   *  I wrote this article easily. “我写这篇文章很轻松”。标准 SVO 句型，注意副词不修饰名词，只是副词作为后置状语。
   *  I wrote this article easy. “我写的这篇文章很简单”。SVO + OC 句型，宾语、补足语间的关系可以加 be 动词进行测试。
   *  I keep the door open. “我让门开着”。SVO + OC 句型，可以加 be 动词测试：door is open 是成立的。
   *  She teaches me English. “她教我英语”。SVO + DO 句型，“她教英语”是主干，“我”是间接宾语。
   *  She gave me a candy. “她给了我一块糖果”。SVO + DO 句型，“她给糖果”是主干，“我”是间接宾语。

   主谓表句式也就是主系表结构（Subject-Link verb-Predicative Structure），特点是使用系动词
   作为谓语。表语（Predicative）是用来修饰主语的身份、性质、品性、特征和状态的，与系动词密切联系，
   有系动词就有表语，有表语就有系动词。比如“这很好”（it is fine），系动词 is 后面就跟着一个形容
   词来修修饰主语 it。系动词有三类，包括：

   *  表示状态： be 
   *  感官动词： feel, look, sound, taste, seem, smell (后接形容词)
   *  表示变化： turn, get, become, fall, grow ...
   *  表示保持： stand, keep, stay, remain ...
   *  表示表象： seem (似乎)，apear (好像，如果取意为“出现”，那么就是实义动词。)
   *  表示结果： prove

   倒装句指为了强调、突出等目的而颠倒原有语序的句式。倒装句中颠倒了的成分可以恢复原位而句意基本不变，
   句法成分不变。现代汉语中常见的倒装句有：主语和谓语倒置，定语、状语和中心语倒置。但是悬空修饰和
   错位修饰等语病问题不算，misplaced modifier vs. dangling modifier。例如，以下句子，向家
   跑的是谁？主语是不明确的，前面这部分作为修饰成分就是悬空状态。第二句中的 in 1969 作为修饰成分
   修饰的是 moon，这属性错位修饰，应该将时间放到句子开头修饰整个句子或者修饰 history 后的从句。

      Running home from school, a dog bit me.

      Neil Armstrong made history as the first man to step on the moon in 1969.

   A modifier is a word, phrase, or clause that describes another part of a sentence. 
   A misplaced modifier is improperly positioned in relation to the word, phrase or 
   clause it is supposed to describe.

   A modifier describes or qualifies another part of a sentence. A dangling modifier 
   occurs when the intended subject of the modifier is missing from the sentence, 
   and instead another subject appears in its place.

   Dangling modifiers often take the form of an introductory phrase that is connected 
   to the wrong thing.
   `How to Fix Dangling and Misplaced Modifiers <https://www.scribbr.com/sentence-structure/modifiers/>`__


The Noun Clause
---------------

   *  `Noun Clauses <https://www.grammar-monster.com/glossary/noun_clauses.htm>`__
   *  `Noun Clauses: Definition, Examples, & Exercises <https://www.albert.io/blog/noun-clauses/>`__
   *  `A Guide to Noun Clauses <https://www.grammarly.com/blog/parts-of-speech/noun-clause/>`__
   *  `从句（Clause） <https://viobert.github.io/self_impro/ENGLISH/grammar/clause/>`__

   名词性从句是指作为主句中名词性功能的从句，根据从句的功能可以分为：主语从句、宾语从句、表语从句等。

   **The Function of Noun Clauses**

   Like any noun, a noun clause can be a subject, an object, or a complement. 
   Here are some more easy examples of noun clauses as subjects, objects, and
   complements.

   ======================================= =====================================
   Whoever smelt it dealt it.              (Here, the noun clause is a subject.)
   My command is whatever you wish.        (Here, the noun clause is a subject complement.)
   I will give what you said some thought. (Here, the noun clause is an indirect object. That's pretty rare.)
   ======================================= =====================================

   A noun clause is a clause that plays the role of a noun. For example:

   ====================================== ======================================
   I like what I see.                     "what I see" as an object. SVO form is "I see what".
   I know that patience has its limits.   "that patience has its limits" as a object.
   ====================================== ======================================

   **Real-Life Examples of Noun Clauses**

      光知道你什么时候在看着它。

      Light knows when you are looking at it. 

      — "Light and space" artist James Turrell.
      Here, the noun clause is the direct object of the verb "knows."

      对于那些不涉足麻烦的人来说，给受苦的人提供建议和忠告是件轻而易举的事。

      It is a light thing for whoever keeps his foot outside trouble to advise 
      and counsel him that suffers. 

      — Greek tragedian Aeschylus.
      Here, the noun clause is the object of a preposition ("for").

      我的关系是我和我身边的人之间的关系，而不是我和世界之间的关系。

      My relationships are between me and whomever I'm with, not between me 
      and the world. 

      — Actress Lili Reinhart.
      Here, the noun clause is the object of a preposition ("with").

      自由意味着责任。这就是为什么大多数人害怕它。

      Liberty means responsibility. That is why most men dread it. 

      — Playwright George Bernard Shaw.
      Here, the noun clause is a subject complement.


The Attributive Clause (Relative Clauses)
-----------------------------------------

   “定语从句”即从句充当“主从复合句”中的定语。定语从句的功能是修饰名词、代词，对它进行限制、说明。
   接受定语从句修饰的词叫"先行词"，引导定语从句的词语叫“关系词”。关系词又细分关系代词和关系副词。
   因此，关系词有两个基本功能：引导定语从句，同时在定语从句充当一定的句子成分。

   因为定语从句使用关系代词、关系副词来引导从句，所以定语从句又叫做关系从句（Relative Clauses）。
   台湾语法教学中意译为“形容词性从句”，形容词，其主要功能是修饰名词性质的成分。简而言之，定语从句
   是使用一个具有主谓结构的完整的句子来充当语句中的定语成分，修饰前面的名词、短语或代词。这个具有
   修饰作用的句子就是定语从句。

   构造定语从句时，就要根据不同的要素来选择引导词：

   (1) 先行词的意义：先行词是指人、指物、时间、地点还是原因。指物时不能用 who 或 whom，指人时通常不用 which 等。
   (2) 关系词的功能：关系词在从句中担任什么句子成分，是主语还是宾语、定语还是状语？
       作定语通常用 whose，有时也用 which；作状语要用 when, where, why。
   (3) 定语从句类型：根据定义从句类型选择引导词，如 that 和 why 通常不引导非限制性定语从句。
       * 限制性定语从句（Defining relative clauses）
       * 非限制性定语从句（Non-defining relative clauses）
   (4) 文体形式：分清是正式文体还是非正式文体，是书面语体还是口语体。

   限制（限定）定语从句，是指从句限定先行词，从句的含义是语句成立的前提条件：

      | I love the book which has a luxury cover. 我（只）喜欢那本有豪华封面的书。
      | I love the book, which has a luxury cover. 我喜欢那本书，它有敦化豪华封面。

   例句参考：

   *  Are you the one [who sent me the email]? 是你给我发邮件的吗？
   *  The phone [which has the most features] is also the most expensive. 功能最多的手机也是最贵的。
   *  This is the video [that I wanted to show you]. 这就是我想给你看的视频。
   *  The person [they spoke to] was really helpful. 他们交谈的人真的很有帮助。

   根据人类的语言习惯，不喜欢重复啰嗦是人类的天性，所以定语从句存在省略引导词（关系代词）的现象，
   这种省略通常用于引导词后出现从句的主语的情况下，这种句子结构称为联系从句（Contact Clauses）：

      **Omitting the relative pronoun**

      Sometimes we can leave out the relative pronoun. For example, we can usually 
      leave out `who`, `which` or `that` if it is followed by a subject.

      The assistant [that] we met was really kind.
         (we met assistant, we = subject, can omit that)

      We can't usually leave it out if it is followed by a verb.

      The assistant that helped us was really kind.
         (assistant helped us, helped = verb, can't omit that)

   小测试：

      ========================================================== =================
      The woman ___ called said she'd ring again later.          [who that]
      One of the people ___ I admire the most is Nelson Mandela. [who that –]
      That's the man ___ daughter is a professional footballer.  [whose]
      Where's the book ___ Paul lent you?                        [who which that –]
      I'm looking for something ___ will clean glass.            [which that]
      The day ___ they met was her birthday.                     [when]
      The park ___ I go running is really peaceful.              [where ]
      That's exactly the information ___ I needed!               [that which -]
      ========================================================== =================

   `Relative Clauses <https://www.ego4u.com/en/cram-up/grammar/relative-clauses>`__

   We use relative clauses to give additional information about something without 
   starting another sentence. By combining sentences with a relative clause, your 
   text becomes more fluent and you can avoid repeating certain words.


   **How to Form Relative Clauses**

   Imagine, a girl is talking to Tom. You want to know who she is and ask a friend 
   whether he knows her. You could say:

      A girl is talking to Tom. Do you know the girl?

   That sounds rather complicated, doesn't it? It would be easier with a relative 
   clause: you put both pieces of information into one sentence. Start with the 
   most important thing  – you want to know who the girl is.

      Do you know the girl …

   As your friend cannot know which girl you are talking about, you need to put 
   in the additional information  – the girl is talking to Tom. Use „the girl“ 
   only in the first part of the sentence, in the second part replace it with the 
   relative pronoun (for people, use the relative pronoun „who“). So the final 
   sentence is:

      Do you know the girl who is talking to Tom?


   Relative Pronouns

   ================  ===========================================================  =============================================================
   relative pronoun  use                                                          example
   `who`             subject or object pronoun for people                         I told you about the woman `who` lives next door.
   `which`           subject or object pronoun for animals and things             Do you see the cat `which` is lying on the roof?
   `which`           referring to a whole sentence                                He couldn’t read, `which` surprised me.
   `whose`           possession for people animals and things                     Do you know the boy `whose` mother is a nurse?
   `whom`            object pronoun for people, especially in 
                     non-defining relative clauses 
                     (in defining relative clauses we colloquially prefer who)    I was invited by the professor `whom` I met at the conference.
   `that`            subject or object pronoun for people, animals and things in
                     defining relative clauses (who or which are also possible)   I don’t like the table `that` stands in the kitchen.
   ================  ===========================================================  =============================================================

   **Subject Pronoun or Object Pronoun?** 

   Subject and object pronouns cannot be distinguished by their forms - who, which, 
   that are used for subject and object pronouns. You can, however, distinguish 
   them as follows:

   If the relative pronoun is followed by a verb, the relative pronoun is a subject 
   pronoun. Subject pronouns must always be used.

      the apple `which` is lying on the table

   If the relative pronoun is not followed by a verb (but by a noun or pronoun), 
   the relative pronoun is an object pronoun. Object pronouns can be dropped in 
   defining relative clauses, which are then called Contact Clauses.

      the apple (`which`) George lay on the table


   **Relative Adverbs**

   A relative adverb can be used instead of a relative pronoun plus preposition. 
   This often makes the sentence easier to understand.

      This is the shop `in which` I bought my bike.
      → This is the shop `where` I bought my bike.

   ================ ===========  ===========================  ===================
   relative adverb  meaning      use                          example
   `when`           in/on which  refers to a time expression  the day when we met him
   `where`          in/at which  refers to a place            the place where we met him
   `why`            for which    refers to a reason           the reason why we met him
   ================ ===========  ===========================  ===================


   **Defining Relative Clauses**

   Defining relative clauses (also called identifying relative clauses or restrictive 
   relative clauses) give detailed information defining a general term or expression. 
   Defining relative clauses are not put in commas.

   Imagine, Tom is in a room with five girls. One girl is talking to Tom and you 
   ask somebody whether he knows this girl. Here the relative clause defines which 
   of the five girls you mean.

      Do you know the girl `who` is talking to Tom?

   Defining relative clauses are often used in definitions.

      A seaman is someone `who` works on a ship.

   Object pronouns in defining relative clauses can be dropped. (Sentences with 
   a relative clause without the relative pronoun are called Contact Clauses.)

      The boy (`who/whom`) we met yesterday is very nice.


   **Non-Defining Relative Clauses**

   Non-defining relative clauses (also called non-identifying relative clauses 
   or non-restrictive relative clauses) give additional information on something, 
   but do not define it. Non-defining relative clauses are put in commas.

   Imagine, Tom is in a room with only one girl. The two are talking to each other 
   and you ask somebody whether he knows this girl. Here the relative clause is 
   non-defining because in this situation it is obvious which girl you mean.

      Do you know the girl, `who` is talking to Tom?

   Note: In non-defining relative clauses, `who/which` may not be replaced with `that`.

   Object pronouns in non-defining relative clauses must be used.

      Jim, `who/whom` we met yesterday, is very nice.


   **How to Shorten Relative Clauses?**

   Relative clauses with who, which, that as subject pronoun can be replaced with 
   a participle. This makes the sentence shorter and easier to understand.

      - I told you about the woman `who lives` next door. 
      + I told you about the woman `living` next door.

      - Do you see the cat `which is lying` on the roof? 
      + Do you see the cat `lying` on the roof?


The Adverbial Clause 状语从句
----------------------------

   状语（adverbial，adv.）从情况、时间、处所、方式、条件、对象、肯定、否定、范围和程度等方面
   修饰、限制谓语中心词。在不同的语言中“状语”有不同的作用，中文状语是动词、形容词前面的连带成分，
   用来修饰、限制动词或形容词，表示动作的状态、方式、时间、处所或程度等；英语状语修饰动词、形容词、
   副词或整个句子；德语状语修饰动词、形容词、副词或整个句子。

   现代汉语中，状语分一般状语和句首状语，一般状语位于主语、谓语之间，起修饰、限制谓语中心词的作用；
   句首状语则比较少见，但在表示时间、处所、目的的名词、介词结构做状语时,可以把状语放在主语的前边，
   如“一九四九年，我们国家举行了开国大典”，其中“一九四九年”就是表时间、地点的句首状语。

   状语使用相当灵活，除了不修饰名词，不仅可以修饰主语、谓语和宾语，还可以放在谓语之前或后面。

   状语的书面标志是“地”，如“他们愉快地回了家”，当然有时候状语也不带“地”，如“他们在地铁上碰见了”，
   其中“地铁上”就是地点状语。

   状语可以分为以下 13 种类型，常用的状语从句根据以下分类使用：

   ========================= =============================== =======================
   Time adverbial            now, yesterday, later           时间状语：表示动作发生的时间。
   Place adverbial           here, there, home               地点状语：表示动作发生的地点。
   Manner adverbial          quickly, slowly, carefully      方式状语：表示动作发生的方式。
   Cause adverbial           because, as, since              原因状语：表示动作发生的原因。
   Purpose adverbial         in order to, so as to           目的状语：表示动作的目的。
   Result adverbial          so, therefore, thus             结果状语：表示动作的结果。
   Condition adverbial       if, unless                      条件状语：表示动作发生的条件。
   Concession adverbial      although, even though, despite  让步状语：表示让步、对比或否定。
   Comparison adverbial      more, less, as                  比较状语：表示比较的程度或方式。
   Quantity adverbial        all, enough, much               数量状语：表示数量或程度。
   Degree adverbial          very, almost, hardly            程度状语：表示程度。
   Frequency adverbial       always, often, never            频率状语：表示动作发生的频率。
   Interrogative adverbial   when, where, why                疑问状语：表示疑问。
   ========================= =============================== =======================

   没事就多看几眼，牢记这些引导词，能帮你辨别状语从句。值得强调的是，熟能生巧，熟能花时间，熟能让
   “脸盲”症痊愈，能一眼看穿句子是哪句时间从句、哪句是目的从句，哪句不是状从，“会用”才是最终目的。

   状语从句、主句之间是否需要加上逗号，取决于状语从句的位置和引导词的长度。只有当状语从句出现在主句
   之前，或者状语从句的引导词比较长时才要在它们之间加逗号。比如，“I will come if I can.” 这个
   例子中，“if I can” 是一个 if 条件从句，但是它的引导词“if”非常简短，不需要用逗号将它和主句隔开。
   又如以下时间从句，前一句中出现在主句“我曾经和娃娃玩耍”之前，所以在它们之间加上逗号，后一句则不用：

   .. code:: javascript
      :class: Ascii Art draw by https://asciiflow.com/#/local/clause

      ┌────────────────────┐                          
      │ When I was a child,│ I used to play with dolls.
      └────────────────────┘                          
                                ┌───────────────────┐ 
      I used to play with dolls │when I was a child.│ 
                                └───────────────────┘ 

   从句子结构上来看，定语从名与状语从句十分相似，区分一下以下句子：
   ::

      He knocked my door when I was writing a note. 
      He knocked my door last night when stars were shining in the sky.

   前一句是状语从句结构，引导词 when 后的从句修饰动词。后一句是定语从句，when 引导的从句在修饰
   先行词 the night。在英语语法中，when 作为关系副词时，可引导定语从句，也可引导时间状语从句。
   常见于引导状语从句，也常误认为是时间状语从句，when 实际上可能引导的是定语从句。

   === =================== ============== ==================================================
   1.         Time clause  when,          `When` I arrived at the party, everyone had already left.
   |                       while,         `While` I was walking to work, I saw an accident.
   |                       as,         
   |                       before,     
   |                       after,         `After` she finished her homework, she watched TV.
   |                       since,      
   |                       until,      
   |                       as soon as, 
   |                       the moment  

   2.        Place clause  where,         I will meet you `where` we agreed.
   |                       wherever       `Wherever` you go, I will follow.

   3.       Manner clause  as if,         He walked `as if` he was in a hurry.
   |                       as,            `As` I told you before, we need to finish the project on time.
   |                       like,          She sings `like` an angel.

   4.        Cause clause  because,       `Because` it was raining, we stayed indoors.
   |                       since,         `Since` you are here, let's start the meeting.
   |                       as,         
   |                       now that       `Now that` I have a car, I can travel more easily.

   5.      Purpose clause  so that,       I bought a new phone `so that` I can take better pictures.
   |                       in order that  He left early `in order that` he could catch the train.

   6.       Result clause  so that,       He studied hard `so that` he could pass the exam.
   |                       such that,     The movie was `so boring that` I fell asleep.
   |                       that           She said `that` she would come to the party.

   7.    Condition clause  if,            `If` I were a bird, I would fly around the world.
   |                       unless,        `Unless` you finish your work, you can't go out.
   |                       provided that, 
   |                       in case        `In case` it rains, bring an umbrella.

   8.   Concession clause  although,      `Although` it was raining, we still went to the beach.
   |                       even though,   `Even though` he was tired, he continued to work.
   |                       though,        `Though` he is rich, he is not happy.
   |                       while          

   9.   Comparison clause  than,          He is taller `than` his brother.
   |                       as             She can run `as` fast `as` a cheetah.

   10.     Quality clause  -              -

   11.      Degree clause  as,            She is not `as tall as` her sister.
   |                       than           He works harder `than` anyone else.

   12.  assumption clause  if,            `If` I were you, I would take the job.
   |                       supposing,     `Supposing` he comes late, what should we do?
   |                              

   12. Imperatives clause  that            He suggested `that` we go to the park.
   |                                       I requested `that` he send me the report.
   === =================== ============== ==================================================


Conditional Sentences / If-Clauses
----------------------------------

   https://www.ego4u.com/en/cram-up/grammar/conditional-sentences

   Conditional Sentences are also known as Conditional Clauses or If Clauses. 
   They are used to express that the action in the main clause (without if) 
   can only take place if a certain condition (in the clause with if) is 
   fulfilled. There are three types of Conditional Sentences.

   
   Type I → It is possible and also very likely that the condition will be fulfilled.

      Form: if + Simple Present, will-Future

      *  If I find her address, I’ll send her an invitation.
      *  I will send her an invitation if I find her address.

      The main clause can also be at the beginning of the sentence. In this case, 
      don't use a comma. Main clause and / or if clause might be negative. 

      *  If I don’t see him this afternoon, I will phone him in the evening.

      Conditional Sentences Type I refer to the future. An action in the future 
      will only happen if a certain condition is fulfilled by that time. We don't 
      know for sure whether the condition actually will be fulfilled or not, but 
      the conditions seems rather realistic – so we think it is likely to happen.

      *  If I find her address, I’ll send her an invitation.

      I want to send an invitation to a friend. I just have to find her address. 
      I am quite sure, however, that I will find it.

      *  If John has the money, he will buy a Ferrari.

      I know John very well and I know that he earns a lot of money and that he 
      loves Ferraris. So I think it is very likely that sooner or later he will 
      have the money to buy a Ferrari.

   Type II → It is possible but very unlikely, that the condition will be fulfilled.

      Form: if + Simple Past, Conditional I (= would + Infinitive)
      .. if + Simple Past, main clause with Conditional I (= would + Infinitive)

      *  If I found her address, I would send her an invitation.
      *  I would send her an invitation if I found her address.

      The main clause can also be at the beginning of the sentence. In this case, 
      don't use a comma. Main clause and / or if clause might be negative. 

      *  If I had a lot of money, I wouldn’t stay here.

      Were instead of Was. In IF Clauses Type II, we usually use ‚were‘ – even 
      if the pronoun is I, he, she or it –.

      *  If I were you, I would not do this.

      Conditional Sentences Type II refer to situations in the present. An action 
      could happen if the present situation were different. I don't really expect 
      the situation to change, however. I just imagine "what would happen if …"

      *  If I found her address, I would send her an invitation.

      I would like to send an invitation to a friend. I have looked everywhere 
      for her address, but I cannot find it. So now I think it is rather unlikely 
      that I will eventually find her address.

      *  If John had the money, he would buy a Ferrari.

      I know John very well and I know that he doesn't have much money, but he 
      loves Ferraris. He would like to own a Ferrari (in his dreams). But I think 
      it is very unlikely that he will have the money to buy one in the near future.

   Type III → It is impossible that the condition will be fulfilled because it refers to the past.

      Form: if + Past Perfect, Conditional II (= would + have + Past Participle)
      .. if + Past Perfect, main clause with Conditional II

      *  If I had found her address, I would have sent her an invitation.
      *  I would have sent her an invitation if I had found her address.

      The main clause can also be at the beginning of the sentence. In this case, 
      don't use a comma. Main clause and / or if clause might be negative.

      *  If I hadn’t studied, I wouldn’t have passed my exams.

      Conditional Sentences Type III refer to situations in the past. An action 
      could have happened in the past if a certain condition had been fulfilled. 
      Things were different then, however. We just imagine, what would have 
      happened if the situation had been fulfilled.

      *  If I had found her address, I would have sent her an invitation.

      Sometime in the past, I wanted to send an invitation to a friend. I didn't 
      find her address, however. So in the end I didn't send her an invitation.

      *  If John had had the money, he would have bought a Ferrari.

      I knew John very well and I know that he never had much money, but he loved 
      Ferraris. He would have loved to own a Ferrari, but he never had the money 
      to buy one.


   **Exceptions**
   Sometimes Conditional Sentences Type I, II and III can also be used with other tenses.

   So far you have only learned the basic rules for Conditional Sentences. 
   It depends on the context, however, which tense to use. So sometimes it's 
   possible for example that in an IF Clause Type I another tense than Simple 
   Present is used, e.g. Present Progressive or Present Perfect.

   Conditional Sentences Type I (likely)

   +----------------------+------------------------------------------------------------+-------------------------------------------------+
   | Condition refers to: |                        IF Clause                           |                    Main Clause                  |
   +----------------------+---------------------+--------------------------------------+-------------------+-----------------------------+
   | future action        | Simple Present      | If the book is interesting, …        | | Future I        | | …I will buy it.           |
   |                      |                     |                                      | | Imperative      | | …buy it.                  |
   |                      |                     |                                      | | Modal Auxiliary | | …you can buy it.          |
   +----------------------+---------------------+--------------------------------------+-------------------+-----------------------------+
   | action going on now  | Present Progressive | If he is snoring, …                  | | Future I        | | …I will wake him up.      |
   |                      |                     |                                      | | Imperative      | | …wake him up.             |
   |                      |                     |                                      | | Modal Auxiliary | | …you can wake him up.     |
   +----------------------+---------------------+--------------------------------------+-------------------+-----------------------------+
   | finished action      | Present Perfect     | If he has moved into his new flat, … | | Future I        | | …we will visit him.       |
   |                      |                     |                                      | | Imperative      | | …visit him.               |
   |                      |                     |                                      | | Modal Auxiliary | | …we can visit him.        |
   +----------------------+---------------------+--------------------------------------+-------------------+-----------------------------+
   | improbable action    | should + Infinitive | If she should win this race, …       | | Future I        | | …I will congratulate her. |
   |                      |                     |                                      | | Imperative      | | …congratulate her.        |
   |                      |                     |                                      | | Modal Auxiliary | | …we can congratulate her. |
   +----------------------+---------------------+--------------------------------------+-------------------+-----------------------------+
   | present facts        | Simple Present      | If he gets what he wants, …          | | Simple Present  | | …he is very nice.         |
   +----------------------+---------------------+--------------------------------------+-------------------+-----------------------------+

   Conditional Sentences Type II (unlikely)

   +-------------------------+-------------------------------------------+----------------------------------------------------+
   | Condition refers to:    |                IF Clause                  |                     Main Clause                    |
   +-------------------------+-------------+-----------------------------+----------------+-----------------------------------+
   | present / future event  | Simple Past |  If I had a lot of money, … | Conditional I  | …I would travel around the world. |
   +-------------------------+-------------+-----------------------------+----------------+-----------------------------------+
   | consequence in the past | Simple Past |  If I knew him, …           | Conditional II | …I would have said hello.         |
   +-------------------------+-------------+-----------------------------+----------------+-----------------------------------+

   Conditional Sentences Type III (impossible)

   +----------------------+--------------------------------------------------+------------------------------------------------+
   | Condition refers to: |                   IF Clause                      |                   Main Clause                  |
   +----------------------+--------------+-----------------------------------+----------------+-------------------------------+
   | present              | Past Perfect | If I had known it, …              | Conditional I  | …I would not be here now.     |
   +----------------------+--------------+-----------------------------------+----------------+-------------------------------+
   | past                 | Past Perfect | If he had learned for the test, … | Conditional II | …he would not have failed it. |
   +----------------------+--------------+-----------------------------------+----------------+-------------------------------+


如何读论文
=============

   | 跟李沐学AI 如何读论文【论文精读·1】 https://www.bilibili.com/video/BV1H44y1t75x
   | 耿同学讲故事 阅读SCI最强教程—三心二意大法！ https://www.bilibili.com/video/BV1rM4y147pE

   技术论文一般写作结构如下：

   1. title
   2. abstract
   3. introduction
   4. method
   5. experiments
   6. conclusion
   7. references, bibliography, appendixes or index ...

   三遍法读论文：

   *  第一遍：标题、摘要、结论。看看方法和实验部分重要的图和表，花十几分钟了解论文是否适合你的研究方向。
   *  第二遍：确定论文值得读之后，可以快速的把整个论文过一遍，不需要知道所有的细节，需要了解重要的图和表，
      知道每一个部分在干什么，圈出相关文献。觉得文章太难，可以读引用的文献。
   *  第三遍：提出什么问题，用什么方法来解决这个问题。实验是怎么做的（复现论文成果）。合上文章，回忆每一个部分在讲什么。

   耿同学表示生物、化学、环境、材料等领域论文重点在于 **三个核心概念 + 新意、意义**：
   三心二意：A 通过 B 影响 C，在不同学科文章里面会有区别。比如有化工专业的同学提问：有机微污染物在
   高硅沸石上的吸附机理——S型吸附等温线的实验和蒙特卡罗模拟研究，这篇文章怎么找三心二意？题目中三个
   主要角色，有机微污染物，高硅沸石，S 型吸附等温线的实验和蒙特卡罗模拟研究，这就是三心。意义是污染物，
   新意是那些实验方法。我不是学化工的，但是盲猜应该差不了。大家思路要打开，不一定非要 A 通过 B 影响 C，
   也可以是使用方法 A 研究 B 对 C 的影响。总之就是把题目中的三个主要角色用一句话连接起来。
   这样三心二意大法就可以推广到部分文科专业了。

   一个公认的论文价值标杆是：使用创新方法解决新问题，填补历史的空白。其次是使用新方法解决旧问题，
   再次是使用旧方法解决新问题，再次之是旧法解决旧问题。

How to Read a Paper by S. Keshav
--------------------------------

How to Read a Paper 
https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf

| S. Keshav
| David R. Cheriton School of Computer Science, University of Waterloo
| Waterloo, ON, Canada
| keshav@uwaterloo.ca

ABSTRACT
''''''''

   Researchers spend a great deal of time reading research papers. 
   However, this skill is rarely taught, leading to much
   wasted effort. This article outlines a practical and efficient
   three-pass method for reading research papers. I also describe how 
   to use this method to do a literature survey.

   Categories and Subject Descriptors: A.1 [Introductory and Survey]
   General Terms: Documentation.

   Keywords: Paper, Reading, Hints.

1. INTRODUCTION
'''''''''''''''

   Researchers must read papers for several reasons: to review 
   them for a conference or a class, to keep current in
   their field, or for a literature survey of a new field. A typical 
   researcher will likely spend hundreds of hours every year
   reading papers.

   Learning to efficiently read a paper is a critical but rarely
   taught skill. Beginning graduate students, therefore, must
   learn on their own using trial and error. Students waste
   much effort in the process and are frequently driven to frustration.

   For many years I have used a simple approach to efficiently
   read papers. This paper describes the ‘three-pass’ approach
   and its use in doing a literature survey.

2. THE THREE-PASS APPROACH
''''''''''''''''''''''''''

   The key idea is that you should read the paper in up to
   three passes, instead of starting at the beginning and plowing 
   your way to the end. Each pass accomplishes specific
   goals and builds upon the previous pass: The f irst pass
   gives you a general idea about the paper. The second pass
   lets you grasp the paper’s content, but not its details. The
   third pass helps you understand the paper in depth.

2.1 The first pass
''''''''''''''''''

   The first pass is a quick scan to get a bird’s-eye view of
   the paper. You can also decide whether you need to do any
   more passes. This pass should take about five to ten minutes
   and consists of the following steps:

   1. Carefully read the title, abstract, and introduction
   2. Read the section and sub-section headings, but ignore everything else
   3. Read the conclusions
   4. Glance over the references, mentally ticking off the ones you’ve already read

   At the end of the first pass, you should be able to answer the five Cs:


   1. Category: What type of paper is this? A measurement 
      paper? An analysis of an existing system? A
      description of a research prototype?
   2. Context: Which other papers is it related to? Which
      theoretical bases were used to analyze the problem?
   3. Correctness: Do the assumptions appear to be valid?
   4. Contributions: What are the paper’s main contributions?
   5. Clarity: Is the paper well written?

   Using this information, you may choose not to read further. 
   This could be because the paper doesn’t interest you,
   or you don’t know enough about the area to understand the
   paper, or that the authors make invalid assumptions. The
   first pass is adequate for papers that aren’t in your research
   area, but may someday prove relevant.

   Incidentally, when you write a paper, you can expect most
   reviewers (and readers) to make only one pass over it. Take
   care to choose coherent section and sub-section titles and
   to write concise and comprehensive abstracts. If a reviewer
   cannot understand the gist after one pass, the paper will
   likely be rejected; if a reader cannot understand the highlights 
   of the paper after five minutes, the paper will likely
   never be read.

2.2 The second pass
'''''''''''''''''''

   In the second pass, read the paper with greater care, but
   ignore details such as proofs. It helps to jot down the key
   points, or to make comments in the margins, as you read.

   1. Look carefully at the figures, diagrams and other illustrations 
      in the paper. Pay special attention to graphs.
      Are the axes properly labeled? Are results shown with
      error bars, so that conclusions are statistically significant? 
      Common mistakes like these will separate
      rushed, shoddy work from the truly excellent.

   2. Remember to mark relevant unread references for further 
      reading (this is a good way to learn more about
      the background of the paper).

   The second pass should take up to an hour. After this
   pass, you should be able to grasp the content of the paper.
   You should be able to summarize the main thrust of the paper, 
   with supporting evidence, to someone else. This level of
   detail is appropriate for a paper in which you are interested,
   but does not lie in your research speciality.

   Sometimes you won’t understand a paper even at the end
   of the second pass. This may be because the subject matter
   is new to you, with unfamiliar terminology and acronyms.
   Or the authors may use a proof or experimental technique
   that you don’t understand, so that the bulk of the paper 
   is incomprehensible. The paper may be poorly written
   with unsubstantiated assertions and numerous forward references. 
   Or it could just be that it’s late at night and you’re
   tired. You can now choose to: (a) set the paper aside, hoping
   you don’t need to understand the material to be successful
   in your career, (b) return to the paper later, perhaps after
   reading background material or (c) persevere and go on to
   the third pass.

2.3 The third pass
''''''''''''''''''

   To fully understand a paper, particularly if you are reviewer, 
   requires a third pass. The key to the third pass
   is to attempt to virtually re-implement the paper: that is,
   making the same assumptions as the authors, re-create the
   work. By comparing this re-creation with the actual paper,
   you can easily identify not only a paper’s innovations, but
   also its hidden failings and assumptions.

   This pass requires great attention to detail. You should
   identify and challenge every assumption in every statement.
   Moreover, you should think about how you yourself would
   present a particular idea. This comparison of the actual
   with the virtual lends a sharp insight into the proof and
   presentation techniques in the paper and you can very likely
   add this to your repertoire of tools. During this pass, you
   should also jot down ideas for future work.

   This pass can take about four or five hours for beginners,
   and about an hour for an experienced reader. At the end
   of this pass, you should be able to reconstruct the entire
   structure of the paper from memory, as well as be able to
   identify its strong and weak points. In particular, you should
   be able to pinpoint implicit assumptions, missing citations
   to relevant work, and potential issues with experimental or
   analytical techniques.

3. DOING A LITERATURE SURVEY
''''''''''''''''''''''''''''

   Paper reading skills are put to the test in doing a literature
   survey. This will require you to read tens of papers, perhaps
   in an unfamiliar field. What papers should you read? Here
   is how you can use the three-pass approach to help.

   First, use an academic search engine such as Google Scholar
   or CiteSeer and some well-chosen keywords to find three to
   five recent papers in the area. Do one pass on each paper 
   to get a sense of the work, then read their related work
   sections. You will find a thumbnail summary of the recent
   work, and perhaps, if you are lucky, a pointer to a recent
   survey paper. If you can find such a survey, you are done.
   Read the survey, congratulating yourself on your good luck.
   
   Otherwise, in the second step, find shared citations and
   repeated author names in the bibliography. These are the
   key papers and researchers in that area. Download the key
   papers and set them aside. Then go to the websites of the
   key researchers and see where they’ve published recently.
   That will help you identify the top conferences in that field
   because the best researchers usually publish in the top conferences.
   
   The third step is to go to the website for these top conferences 
   and look through their recent proceedings. A quick
   scan will usually identify recent high-quality related work.
   These papers, along with the ones you set aside earlier, 
   constitute the first version of your survey. Make two passes
   through these papers. If they all cite a key paper that you
   did not find earlier, obtain and read it, iterating as necessary.

4. EXPERIENCE
'''''''''''''

   I’ve used this approach for the last 15 years to read conference 
   proceedings, write reviews, do background research,
   and to quickly review papers before a discussion. This disciplined 
   approach prevents me from drowning in the details
   before getting a bird’s-eye-view. It allows me to estimate the
   amount of time required to review a set of papers. Moreover, I can 
   adjust the depth of paper evaluation depending
   on my needs and how much time I have.

5. RELATED WORK
'''''''''''''''

   If you are reading a paper to do a review, you should also read 
   Timothy Roscoe’s paper on “Writing reviews for systems conferences” 
   [2]. If you’re planning to write a technical paper, 
   you should refer both to Henning Schulzrinne’s comprehensive 
   web site [3] and George Whitesides’s excellent
   overview of the process [4]. Finally, Simon Peyton Jones
   has a website that covers the entire spectrum of research
   skills [1].

6. A REQUEST
''''''''''''

   I would like to make this a living document, updating it
   as I receive comments. Please take a moment to email me
   any comments or suggestions for improvement. You can also
   add comments at CCRo, the online edition of CCR [5].

7. ACKNOWLEDGMENTS
''''''''''''''''''

   The first version of this document was drafted by my students: 
   Hossein Falaki, Earl Oliver, and Sumair Ur Rahman.
   My thanks to them. I also benefited from Christophe Diot’s
   perceptive comments and Nicole Keshav’s eagle-eyed copyediting.

   This work was supported by grants from the National
   Science and Engineering Council of Canada, the Canada
   Research Chair Program, Nortel Networks, Microsoft, Intel
   Corporation, and Sprint Corporation.

8. REFERENCES
'''''''''''''

   | [1] S. Peyton Jones, “Research Skills,”
      http://research.microsoft.com/simonpj/Papers/givinga-talk/giving-a-talk.htm.
   | [2] T. Roscoe, “Writing Reviews for Systems Conferences,”
      http://people.inf.ethz.ch/troscoe/pubs/reviewwriting.pdf.
   | [3] H. Schulzrinne, “Writing Technical Articles,”
      http://www.cs.columbia.edu/hgs/etc/writingstyle.html.
   | [4] G.M. Whitesides, “Whitesides’ Group: Writing a Paper,”
      http://www.che.iitm.ac.in/misc/dd/writepaper.pdf.
   | [5] ACM SIGCOMM Computer Communication Review Online, 
      http://www.sigcomm.org/ccr/drupal/.


Writing 写作
=============

   *  `英文写作有诀窍 - 刘美君 <https://www.bilibili.com/video/BV1rb4y1b7Ke>`__
   *  `上海外国语大学 基础英语写作技巧 <https://www.bilibili.com/video/BV1J7411b7Kw>`__
   *  `Punctuation in Academic Writing: Common Errors <https://www.scribbr.com/language-rules/punctuation-mistakes/>`__

   .. info::

      首先，介绍一下 Scribbr.com 这家提供学术写作服务的网站，成立于 2012 年，总部位于荷兰阿姆斯特丹，
      目前拥有超过 500 名来自不同国家和领域的专业学术编辑。网站使命是帮助学生、研究者和专业人士实现学术
      成功，它通过提供校对和编辑、抄袭检测器、引文工具和知识库等服务来实现这一目标。支持多种语言和格式
      （如 APA、MLA、哈佛和芝加哥），并且可以处理各种类型的文档（如论文、文章、报告、申请书、简历等）。
      无论你是在写本科论文还是博士论文，无论你是在研究社会科学还是自然科学，无论你是在寻求语法修正还是
      结构优化，Scribbr 都可以为你提供合适的服务。Scribbr 知识库涵盖了从选题、写作计划、写作结构、
      写作风格、写作语言、写作格式、写作修正等各个阶段和方面，以及不同类型（如论文、文章、报告、申请书、
      简历等）和领域（如社会科学、自然科学、人文科学等）的写作要求和技巧。

      网站提供的英文写作相关的知识库也非常专业权威，一般野鸡培训机构的广告网站不能与之相比！同时网站还
      提供了一个免费语法检查程序。

      *  `Free Grammar Checker <https://www.scribbr.com/grammar-checker/>`__
      *  `Scribbr Knowledge Base - Writing <https://www.scribbr.com/knowledge-base/>`__

      **Scribbr Knowledge Base - Writing**

      Get your ideas across effectively. We explain academic style and show you 
      how to structure any type of academic text.

      *  `Language rules  <https://www.scribbr.com/category/language-rules/>`__
      *  `Academic style  <https://www.scribbr.com/category/academic-writing/>`__
      *  `Academic essays  <https://www.scribbr.com/category/academic-essay/>`__
      *  `College admissions essays  <https://www.scribbr.com/category/college-essay/>`__
      *  `Grad school applications  <https://www.scribbr.com/category/graduate-school/>`__
      *  `Definitions  <https://www.scribbr.com/category/definitions/>`__
      *  `Commonly confused words  <https://www.scribbr.com/category/commonly-confused-words/>`__
      *  `US vs. UK spellings  <https://www.scribbr.com/category/us-vs-uk/>`__
      *  `Parts of speech  <https://www.scribbr.com/category/parts-of-speech/>`__
      *  `Sentence structure  <https://www.scribbr.com/category/sentence-structure/>`__
      *  `Common language mistakes  <https://www.scribbr.com/category/common-mistakes/>`__
      *  `Fallacies  <https://www.scribbr.com/category/fallacies/>`__


   GSG - General-Specific-General (宽泛-具体-宽泛）三步法是一种普遍的写作方法，学术论文也适用。
   三步法核心在于：

   *  Key Point - General
   *  Supporting Details - Specific
   *  Impressive Conclusion - General

   例子：

      I am an easy going and artistic gril. 

      Instead of making plans, I prefer to follow my feelings and enjoy 
      every unknown moment. I like drawing portraits and comics, and I 
      love Rock 'n' Roll. 

      Dawing and music made my life easy to go!


General Information on Writing English Texts
--------------------------------------------

   https://www.ego4u.com/en/cram-up/writing/text

   The ideal English text is easy to read and understand. Even scientific texts 
   are usually written in plain English words. So try to keep your sentences 
   plain, clear and well structured.

   When writing in English, keep the following rules in mind:

   *  use simple language
   *  keep subordinate clauses short
   *  prefer verbs to nouns (not: The meaning of this is that …, but: This means that …)
   *  avoid slang and techy language

   Sentence

      Make your texts interesting by using various types of clauses, e.g.:

      *  participle clauses
      *  relative clauses
      *  conditional sentences
      *  infinitive constructions, introductory clauses with infinitive or gerund
      *  prepositional clauses
      *  passive voice

      Note, however:

      *  Always use main clauses for important statements – use subordinate 
         clauses only for additional information

      *  Use passive voice sparingly – prefer active voice.

      *  Avoid long introductory clauses – always try to put the subject 
         close to the beginning of a sentence.

      *  Avoid long subordinate clauses – a subordinate clause in the middle 
         of a sentence should have no more than 12 syllables

      Check out the use of participles in our grammar section. They are very 
      useful for shortening lengthy subordinate clauses.

   Paragraph

      As to paragraphs, keep the following rules in mind:

      *  Concentrate on one main point per paragraph. 
         Summarize this point in the first sentence.

      *  All sentences that follow support the main point or limit its scope.

      *  The last sentence is used as a transition to the next paragraph. 
         Use a criteria that applies for both paragraphs.

   Text

      The typical structure of a text is as follows:

      *  (title)
      *  introduction
      *  main part
      *  conclusion

      Make your texts interesting. You can achieve this for example by varying 
      the lengths of your sentences. An important statement is best emphasised 
      in a short sentence, especially if that sentence is between two longer 
      sentences. Do also vary the lenghts of your paragraphs and avoid one-sentence 
      paragraphs.

      There are various possibilities on how to structure your texts, e.g.:

      *  General to Specific: general statement followed by details and examples
      *  Specific to General: details and examples followed by a generalization
      *  Known to Unknown: provide new information based on what readers already know
      *  Least Important to Most Important: catch and keep readers' attention
      *  Chronology (ordering by time): e.g. in biographies


General Information on Spoken Texts
-----------------------------------

   https://www.ego4u.com/en/cram-up/writing/spoken-text

   **Differences between spoken and written texts**

      In general, the same rules apply for spoken texts as for written ones:

      *  use simple language
      *  keep subordinate clauses short
      *  prefer verbs to nouns (not: The meaning of this is that …, but: This means that …)
      *  avoid slang and techy language

      As listeners cannot take up as many information as readers, do also keep the 
      following rules in mind when preparing a text that is to be presented orally:

      *  Keep your sentences short and simple.

      *  Avoid participal constructions. (In written texts they are often used to 
         increase the density of information in a sentence. In spoken texts, however, 
         they make it more difficult for the listeners to follow.)

   **Listeners' attention**

      You surely know that it is not always easy to follow a lecture or presentation. 
      On the other hand, imagine how a speaker must feel if nobody is listening. 
      With just a few tricks, however, you can win your audience's attention:

      *  Speak clearly and slowly. Use simple words and short sentences.

      *  Have little breaks in between the sentences to allow your audience to 
         reflect on what has been said.

      *  Communicate freely (don't read the whole text from a piece of paper).

      *  Outline to the audience how your paper is structured. (e.g. I will 
         first explain … / Then I will … / After that … / Finally …) and 
         indicate when you come to another sub-topic (I will now talk about …). 
         This way your audience can follow your presentation more easily.

      *  Use pictures and graphics as an illustration.

      *  Use a rhetorical question or hypophora from time to time. Your listeners 
         will think that you've asked them a question and thus listen more attentively.

      *  Use enumerations starting first / second / third. This also draws your 
         audience's attention.

      Tip: Depending on the topic or your audience, you can also hand out questions 
      that your listeners have to answer during the presentation, or you announce 
      that there will be a quiz in the end. That will definitely make your audience 
      listen very attentively.

      For an even more sophisticated presentation, use some of the stylistic 
      devices typical for spoken texts, e.g.:

      *  Alliteration 头韵
      *  Allusion 影射
      *  Anaphora 首语重复法
      *  Antithesis 对照、对比、对偶
      *  Hyperbole 夸张
      *  Hypophora 设问
      *  Metaphor 隐喻
      *  Rhetorical question 修辞疑问
      *  Simile 明喻

      头韵 (Alliteration) 是英语语言学分支文体学的重要术语。头韵是英语语音修辞手段之一，它蕴含了
      语言的音乐美和整齐美，使得语言声情交融、音义一体，具有很强的表现力和感染力。从应用范围、结构
      特征以及审美价值三个方面对其进行分析讨论，将有助于我们理解和欣赏这一辞格。

      A joke or a quotation might also help you keep your listeners' attention. 
      Don't overdo it, however. Using stylistic devices, jokes or quotations 
      where they don't fit in might not have the effect you want.

      Very important: Don't try to show off your knowledge of English using 
      complex sentences or difficult words. Always keep your audience in mind: 
      they need to follow your presentation and will therefore appreciate 
      simple language and sentence structure.

Punctuations
------------

   常用标点符号：

   ================== ======
   Punctuation        Symbol
   Commas             ,
   Semicolons         ;
   Colons             :
   Quotation marks    “”
   Apostrophes        ‘
   Apostrophe         's
   Dashes             – or —
   Hyphens            -
   Parentheses        ()
   Question marks     ?
   Exclamation mark   !
   Full stop (Period) .
   Sharp              #
   ================== ======

   The main rule for the use of commas in English is: Keep your sentences clear. 
   Too many commas might be distracting; too few might make the text difficult 
   to read and understand.

   Always check your texts on readability. This requires some practice, however, 
   as first you must know which commas are necessary and which are optional.

   `Comma Rules <https://www.ego4u.com/en/cram-up/writing/comma>`__
   ::

      Commas with Numbers  → October 21, 2024. 123,456,789.
      Commas with Salutations  → Greg, can I talk to you for a second?
      Commas with Geographic Places  → His address is 46 Baker Street, London, NW2 2LK, Great Britain.
      Commas with “please”  → Send me a mail, please.
      Commas with Affirmatives, Negatives and Question Tags  → You are Scottish, aren’t you? Yes, I am.
      Commas with Adjectives  → It was a cold, windy morning.
      Commas with Adverbs  → The thief, however, was very clever.
      Commas with Enumerations  → Old McDonald had a pig, a dog, a cow and a horse.
      Commas between Main Clauses  → We ran out of fuel, and the nearest petrol station was 5 miles away.
      Commas with Conditional Sentences  → If I go to London, I will visit the Tower.
      Commas with Direct Speech  → She said, “I was in London last year.”
      Commas with Introductory Clauses  → To improve her English, she practised every day.
      Commas with Additional Information  → Her brother, who lives in Chicago, came to see her.
      Commas with Opposites  → It was the father, and not the son, who went to the disco every Friday.
      Commas as Means of Readability  → Above, the eagle flew gracefully through the air.

Long Sentences
--------------

   长难句是写作的基本能力，其中并列句可以说是搞定更难的复合句式的突破口。如以下例句摘自赛珍珠文章：

      She `accepted` a bowl of rice and cabbage often at meal time and `sat` 
      among the peasants on the threshing floor about the door and `ate`,
      usually in silence, listening and listening, answering their kindly, 
      careless questions, bearing with shy, painful smiles their kind, 
      teasing laughter at her yellow curls and unfortunate blue eyes, which 
      they thought so ugly.

      APRIL 4, 1936 11, A Debt to Dickens BY PEARL S. BUCK 

      https://unz.com/PDF/PERIODICAL/SaturdayRev-1936apr04/11-12/

   .. Note::

      赛珍珠是美国作家、人权和女权活动家，因为在镇江经历了人生的早期岁月，故称镇江为“中国故乡”，
      A Debt to Dickens 就是赛珍珠对当时镇江生活的回忆，描写了在那个偏僻的村庄，从狄更斯的
      小说中获得的快乐。

      A Debt to Dickens 是赛珍珠对自己童年生活的一种回忆和记录，作为一个“文化边缘人”，她在中国
      生活时始终无法真正融入当时的文化环境，回到美国后却也无法被美国人接受，这篇文章在一定程度上
      展现出了她两个时期的尴尬处境。文章的脉络根据作者的感情变化来书写，前半部分写出了她幼年时期
      生活的艰辛，因为外貌的异域化被村民看成怪物，生活孤独，所以大多数都是负面评价；后半部分描写
      了她发现狄更斯的小说后，乐在其中并对人生有了新的感悟，因此文字中有大量的正面评价。

      “文化边缘人”视阈下 A Debt to Dickens 的态度系统研究
      https://pdf.hanspub.org/ML20240200000_31857866.pdf

      Pearl on the Good Earth
      https://www.britannica.com/topic/The-Good-Earth-novel-by-Buck

      The Good Earth, novel by Pearl Buck, published in 1931. The novel, 
      about peasant life in China in the 1920s, was awarded the Pulitzer 
      Prize for fiction in 1932.

      The Good Earth follows the life of Wang Lung from his beginnings as 
      an impoverished peasant to his eventual position as a prosperous 
      landowner. He is aided immeasurably by his equally humble wife, O-Lan, 
      with whom he shares a devotion to the land, to duty, and to survival. 
      Buck combines descriptions of marriage, parenthood, and complex human 
      emotions with depictions of Chinese reverence for the land and for a 
      specific way of life.

      * `《大地》 The Good Earth (1937)：83 年前美国人拍的清朝农村电影 <https://www.bilibili.com/video/BV1TA411q78F>`__
      * `镜子里的中国：说说赛珍珠，是否丑化中国人？ <https://www.bilibili.com/video/BV121421U7KK/>`__


   例句：

      Darwin was convinced that the loss of hese tastes for pictures or music
      was not only a loss of happiness but might possibly be injurious to the 
      intellect, and more probably to the moral character.

      达尔文坚信，失去对画画或音乐的品味不仅是一种幸福感的丧失，而且可能对智力有害，更有可能对道德品质有害。

      *  先找出具有时态、语气、情态的谓语动词： was convinced
      *  确定宾语：that 引导的定语从句，the loss of hese tastes 是一个 of 介词连接的属格结构 (genitive case)
      *  定语从句的谓语是 was
      *  从句的宾语是 not only - but 并列结构

      but 后面还有 and 连接等位结构，状语 + 介词 + 动词 + 不定式，由此推测后者省略 be injurious：
      ::

         might possibly be injurious to the intellect
         more probably       ...     to the moral character

   例句：

      As a linguist, he acknowledges that all varieties of human language, 
      including non-standard ones like Black English, can be powerfully 
      expressive -- there exists no language or dialect in the world that 
      cannot convey complex ideas.

      作为语言学家，他承认所有种类的人类语言，包括像黑人英语这样的非标准语言，都具有强大的表现力——
      世界上任何语言或方言都能表达复杂思想。

      一般来说，从句的先行词是名词，而且是与引导词最近的一组名词。但是，更复杂的句式中，先行词可能
      是另一个从句，或者先词并不与引导词相邻，如以上句子中的 language or dialect in the world
      介词短语就是先行词。


   以下是诺亚方舟故事 杰里·平克尼 改编绘本的书籍介绍：
   ::

      NOAH'S ARK
      adapted by Jerry Pinkney & illustrated by Jerry Pinkney ‧ 
      RELEASE DATE: Oct. 1, 2002

      Pinkney, at his grandest, matches a poetically phrased text—the Ark 
      “rose over their heads. It rose over the treetops. The strong wooden 
      beams embraced the clouds”—with sweeping spreads of dappled paintings 
      that capture brilliantly the hugeness of the Ark a-building, the wonder 
      of so many creatures gathering peaceably to crowd aboard, and the closing 
      glory of a planet festooned with rainbows as signs of God’s promise to 
      the Charlton Heston–like Noah.

      Of the making of Noahs there seems to be no end, but while other recent 
      versions of the tale put Noah’s family on center stage, or feature 
      realistically depicted animals or humorous touches, this brings out 
      the vast scale of the flood: “The water rose over cities and towns. 
      Whales swam down ruined streets. Schools of fish darted through empty 
      windows.” But turn the page and there inside “everyone was safe.” 
      Filling his pages with lovely earth tones, Pinkney’s occasional use 
      of color stands out all the more: a baboon’s multicolored nose, a bright 
      blue robe, a bright red apple, or a bird’s brilliant plumage. And then 
      there’s all that water.

      A glorious choice for reading aloud. (Picture book/nonfiction. 7-9)
      Pub Date: Oct. 1, 2002

      ISBN: 978-1-58717-201-4
      Page Count: 40
      Publisher: SeaStar/North-South
      Review Posted Online: June 24, 2010
      Kirkus Reviews Issue: Oct. 1, 2002

   诺亚方舟的传说记录在《圣经》中，上帝因人类充满罪恶而决定用洪水毁灭世界，却又选中诺亚一家建造
   方舟拯救人类，也就是诺亚一家审被选中为上帝的代言人。这个故事在宗教领域有着深远的影响，代表了
   上帝的惩戒与宽恕，也象征着希望与避难所。根据底本学说的推论，《创世纪》中的方舟故事，可能具有
   许多相似但分别独立的来源；而一般的正统犹太教与基督教，则认为方舟的故事只有一位作者，圣经直译
   主义者认为方舟确实停留在土耳其东北方厄德尔省的阿勒山区。

   根据《圣经》上的记载，诺亚方舟长 300 腕尺（肘，以0.445米计算，133.5米，437.99英尺），宽
   50 腕尺（22.3米，73.163英尺），高30腕尺（13.4米，43.963英尺），方舟长度大约是伊丽莎白女
   王二号邮轮一半长。Ark 译做“方舟”的希伯来语词源，跟译做摩西在婴孩时所藏身的“箱子”是同一个词。
   摩西的母亲在箱子涂上沥青柏油，使它可以在尼罗河漂浮。从工程理论来看，“方舟”的设计完全不合理，
   这种被水一冲就散架的方形结构可以推测，故事的原型出自一个没有船只设计经验的者的想象之中。


Rhetorical devices
------------------

   `Stylistic Devices (Rhetorical Devices, Figures of Speech) <https://www.ego4u.com/en/cram-up/writing/style>`__

   英语修辞（Stylistic Devices）方法常见写作包括但不仅限以下几种：

   *  Alliteration 头韵
   *  Simile 明喻
   *  Metaphor 隐喻、暗喻
   *  Metonymy 借喻、转喻
   *  Synecdoche 提喻
   *  Synaesthesia 通感、联觉、移觉
   *  Personification 拟人
   *  Hyperbole 夸张
   *  Parallelism 排比、平行
   *  Euphemism 委婉、婉辞法
   *  Allegory 讽喻、比方
   *  Irony 反语
   *  Pun 双关
   *  Parody 仿拟
   *  Rhetorical question 修辞疑问
   *  Antithesis 对照、对比、对偶
   *  Paradox 隽语
   *  Oxymoron 反意法、逆喻
   *  Climax 渐进法、层进法
   *  Anticlimax 渐降法

   **Alliteration - repetition of initial consonant sound**

      The initial consonant sound is usually repeated in two neighbouring words
      (sometimes also in words that are not next to each other). Alliteration 
      draws attention to the phrase and is often used for emphasis.

      Examples:

      *  for the greater good of ...
      *  safety and security
      *  share a continent but not a country

      Repetition of initial consonant sounds means that only the sound must be 
      the same, not the consonants themselves.

      Examples:

      *  killer command
      *  fantastic philosophy
      *  A neat knot need not be re-knotted.

      If neighbouring words start with the same consonant but have a different
      initial sound, the words are not alliterated.

      Examples:

      *  a Canadian child
      *  honoured and humbled (the ‘h’ in honoured is silent)


   **direct comparison**

      Two things are compared directly by using 'like' (A is like B.).

      Other possibilities are for example:

      *  A is (not) like B
      *  A is more/less than B
      *  A is as … as B
      *  A is similar to B
      *  A is …, so is B
      *  A does …, so does B

      Examples:

      *  conrete box-style buildings are spreading like inkblots 
         (National Geographic: Kashmir: Trapped in Conflict, Vol. 196, No. 3; September 1999, pp. 2-29)

      *  The rabbit-hole went straight on like a tunnel. (Alice in Wonderland)

      *  Personality is to a man what perfume is to a flower. (Charles Schwab)

      *  My friend is as good as gold.

   **figurative expression**

      Metaphor compares two different things in a figurative sense. Unlike in 
      a simile (A is like B.), “like” is not used in metaphor (A is B.).

      Example:

      Truths are first clouds, then rain, then harvest and food. (Henry Ward Beecher)
      Through much of the last century, America's faith in freedom and democracy was 
      a rock in a raging sea. Now it is a seed upon the wind, taking root in many nations.
      (Inauguration Speech George W. Bush)

   排比也就是英语文法中的平行句式（Parallel Structure），如下前一句中三个动词现在分词并列，
   后一句中的 watching 就破坏了这种平行结构：

   .. code::

             ┌─────────┐ ┌─────────┐     ┌─────────┐
      I like │ reading,│ │ drawing,│ and │ dancing.│
             └─────────┘ └─────────┘     └─────────┘
      
      I like to jog, bake, paint, and watching movies.

      https://www.scribbr.com/sentence-structure/parallelism/



📦 Encyclopedia Britannica 大英百科全书
========================================

   大英百科全书（ Encyclopedia Britannica），被认为是当今世界上最知名也是最权威的百科全书，
   是世界三大百科全书之一。该书诞生于18世纪苏格兰启蒙运动（Scottish Enlightenment）的氛围之中，
   且于 1994 年推出大英百科全球网络版（Britannica Online），公认为第一部在线百科全书。大英百科
   全书始终坚持其 1768 年创立之初的使命，领导全球参考书、教育与学习工具发展，至今已有 210 多年的历史。

   《美国百科全书》（Encyclopedia Americana）最初版本于 1829-1833 年间出版，翻译自德国的
   布洛克豪斯社交词典。是标准型的综合百科全书。内容偏重美国和加拿大的历史、地理和人物资料。有许多
   人物词条是在其他百科全书中找不到的。附有美国历史中如《独立宣言》等重要文件也是一大特色。从 1923
   年起，每年出版《美国百科年鉴》（Americana Annual）一卷，作为全书的补编。

   《科里尔百科全书》（Collier's Encyclopedia）是 20 世纪新编的大型英语综合性百科全书，由美国
   科里尔出版公司于 1949 年创编。此书以大学生、中学生为主要对象，内容的编选考虑了学校的课程设置。
   这部百科全书最为人们称道的特点是参考书目编选精当，并且有编附内容分类的“学习指南”。

   -  `Home <https://www.britannica.com/>`__
   -  `History & Society <https://www.britannica.com/History-Society>`__
   -  `Science & Tech <https://www.britannica.com/Science-Tech>`__
   -  `Biographies <https://www.britannica.com/Biographies>`__
   -  `Animals & Nature <https://www.britannica.com/Animals-Nature>`__
   -  `Geography & Travel <https://www.britannica.com/Geography-Travel>`__
   -  `Arts & Culture <https://www.britannica.com/Arts-Culture>`__
   -  `Money <https://www.britannica.com/money>`__

   -  `Games & Quizzes <https://www.britannica.com/quiz/browse>`__
   -  `Videos <https://www.britannica.com/videos>`__
   -  `On This Day <https://www.britannica.com/on-this-day>`__
   -  `One Good Fact <https://www.britannica.com/one-good-fact>`__
   -  `Dictionary <https://www.britannica.com/dictionary>`__
   -  `New Articles <https://www.britannica.com/new-articles>`__

   `History & Society <https://www.britannica.com/History-Society>`__

   -  `Lifestyles & Social Issues <https://www.britannica.com/browse/Lifestyles-Social-Issues>`__
   -  `Philosophy & Religion <https://www.britannica.com/browse/Philosophy-Religion>`__
   -  `Politics, Law & Government <https://www.britannica.com/browse/Politics-Law-Government>`__
   -  `World History <https://www.britannica.com/browse/World-History>`__

   `Science & Tech <https://www.britannica.com/Science-Tech>`__

   -  `Health & Medicine <https://www.britannica.com/browse/Health-Medicine>`__
   -  `Science <https://www.britannica.com/browse/Science>`__
   -  `Technology <https://www.britannica.com/browse/Technology>`__

   `Biographies <https://www.britannica.com/Biographies>`__

   -  `Browse Biographies <https://www.britannica.com/browse/biographies>`__

   `Animals & Nature <https://www.britannica.com/Animals-Nature>`__

   -  `Birds, Reptiles & Other Vertebrates <https://www.britannica.com/browse/Birds-Reptiles-Vertebrates>`__
   -  `Bugs, Mollusks & Other Invertebrates <https://www.britannica.com/browse/Bugs-Mollusks-Invertebrates>`__
   -  `Environment <https://www.britannica.com/browse/Environment>`__
   -  `Fossils & Geologic Time <https://www.britannica.com/browse/Fossil-Geologic-Time>`__
   -  `Mammals <https://www.britannica.com/browse/Mammals>`__
   -  `Plants <https://www.britannica.com/browse/Plants>`__

   `Geography & Travel <https://www.britannica.com/Geography-Travel>`__

   -  `Geography & Travel <https://www.britannica.com/browse/Geography-Travel>`__

   `Arts & Culture <https://www.britannica.com/Arts-Culture>`__

   -  `Entertainment & Pop Culture <https://www.britannica.com/browse/Entertainment-Pop-Culture>`__
   -  `Literature <https://www.britannica.com/browse/Literature>`__
   -  `Sports & Recreation <https://www.britannica.com/browse/Sports-Recreation>`__
   -  `Visual Arts <https://www.britannica.com/browse/Visual-Arts>`__

   -  `Companions <https://www.britannica.com/stories/companion>`__
   -  `Demystified <https://www.britannica.com/stories/demystified>`__
   -  `Image Galleries <https://www.britannica.com/gallery/browse>`__
   -  `Infographics <https://www.britannica.com/study/infographics>`__
   -  `Lists <https://www.britannica.com/list/browse>`__
   -  `Podcasts <https://www.britannica.com/podcasts>`__
   -  `Spotlight <https://www.britannica.com/stories/spotlight>`__
   -  `Summaries <https://www.britannica.com/summary>`__
   -  `The Forum <https://www.britannica.com/stories/the-forum>`__
   -  `Top Questions <https://www.britannica.com/question>`__
   -  `#WTFact <https://www.britannica.com/stories/wtfact>`__

   -  `100 Women <https://www.britannica.com/explore/100women/>`__
   -  `Britannica Kids <https://kids.britannica.com/>`__
   -  `Saving Earth <https://www.britannica.com/explore/savingearth/>`__
   -  `Space Next 50 <https://www.britannica.com/explore/space/>`__
   -  `Student Center <https://www.britannica.com/study/>`__

📦 Chinese languages
----------------------


   `Chinese languages <https://www.britannica.com/topic/Chinese-languages>`__

   Table of Contents

   *  `Introduction <https://www.britannica.com/topic/Chinese-languages>`__
   *  `Linguistic characteristics <https://www.britannica.com/topic/Chinese-languages#ref75029>`__
   *  `Modern Standard Chinese (Mandarin) <https://www.britannica.com/topic/Chinese-languages/Modern-Standard-Chinese-Mandarin>`__
   *  `Standard Cantonese <https://www.britannica.com/topic/Chinese-languages/Standard-Cantonese>`__
   *  `Min languages <https://www.britannica.com/topic/Chinese-languages/Standard-Cantonese#ref75032>`__


   *  `Other Sinitic languages or dialects <https://www.britannica.com/topic/Chinese-languages/Standard-Cantonese#ref75033>`__

      -  `Hakka <https://www.britannica.com/topic/Chinese-languages/Standard-Cantonese#ref75034>`__
      -  `Suzhou <https://www.britannica.com/topic/Chinese-languages/Standard-Cantonese#ref75035>`__
      -  `Shanghai dialect <https://www.britannica.com/topic/Chinese-languages/Standard-Cantonese#ref75036>`__
      -  `Xiang languages <https://www.britannica.com/topic/Chinese-languages/Standard-Cantonese#ref75037>`__

   *  `Historical survey of Chinese <https://www.britannica.com/topic/Chinese-languages/Historical-survey-of-Chinese>`__

      -  `The early contacts <https://www.britannica.com/topic/Chinese-languages/Historical-survey-of-Chinese#ref75039>`__
      -  `Pre-Classical Chinese <https://www.britannica.com/topic/Chinese-languages/Historical-survey-of-Chinese#ref75040>`__
      -  `Han and Classical Chinese <https://www.britannica.com/topic/Chinese-languages/Han-and-Classical-Chinese>`__
      -  `Post-Classical Chinese <https://www.britannica.com/topic/Chinese-languages/Han-and-Classical-Chinese#ref75042>`__
      -  `The writing system <https://www.britannica.com/topic/Chinese-languages/Han-and-Classical-Chinese#ref75043>`__
      -  `Pre-Classical characters <https://www.britannica.com/topic/Chinese-languages/Han-and-Classical-Chinese#ref75044>`__
      -  `Qin dynasty standardization <https://www.britannica.com/topic/Chinese-languages/Qin-dynasty-standardization>`__
      -  `The 20th century <https://www.britannica.com/topic/Chinese-languages/Qin-dynasty-standardization#ref75046>`__
      -  `Reconstruction of Chinese protolanguages <https://www.britannica.com/topic/Chinese-languages/Qin-dynasty-standardization#ref75047>`__
      -  `The Qieyun dictionary <https://www.britannica.com/topic/Chinese-languages/The-Qieyun-dictionary>`__
      -  `Additional sources <https://www.britannica.com/topic/Chinese-languages/The-Qieyun-dictionary#ref75049>`__

   *  `References & Edit History <https://www.britannica.com/topic/Chinese-languages/additional-info>`__ 
   *  `Quick Facts & Related Topics <https://www.britannica.com/facts/Chinese-languages>`__
   *  `Images <https://www.britannica.com/topic/Chinese-languages/images-videos>`__


   **Chinese languages**, principal `language`_ group of eastern `Asia`_, belonging 
   to the `Sino-Tibetan language family`_. Chinese exists in a number of varieties 
   that are popularly called `dialects`_ but that are usually classified as separate 
   languages by scholars. More people speak a variety of Chinese as a native language 
   than any other language in the world, and Modern Standard Chinese is one of the 
   six official languages of the `United Nations`_.

   The spoken varieties of Chinese are mutually unintelligible to their respective 
   speakers. They differ from each other to about the same extent as the modern 
   `Romance languages`_. Most of the differences among them occur in pronunciation 
   and vocabulary; there are few grammatical differences. These languages include
   `Mandarin`_ in the northern, central, and western parts of China; `Wu`_; Northern 
   and Southern `Min`_; `Gan`_ (Kan); `Hakka`_ (Kejia); and `Xiang`_; and `Cantonese`_ 
   (Yue) in the southeastern part of the country.

   All the Chinese languages share a common literary language (`wenyan`_), written 
   in characters and based on a common body of literature. This literary language 
   has no single standard of pronunciation; a speaker of a language reads texts 
   according to the rules of pronunciation of his own language. Before 1917 the 
   *wenyan* was used for almost all writing; since that date it has become increasingly 
   acceptable to write in the `vernacular`_ style (`baihua`_) instead, and the old 
   literary language is dying out in the daily life of modern `China`_. (Its use 
   continues in certain literary and scholarly circles.)

   In the early 1900s a program for the unification of the national language, which 
   is based on Mandarin, was launched; this resulted in `Modern Standard Chinese.`_ 
   In 1956 a new system of romanization called `Pinyin`_, based on the pronunciation 
   of the characters in the Beijing `dialect`_, was adopted as an educational instrument 
   to help in the spread of the modern standard language. Modified in 1958, the system 
   was formally prescribed (1979) for use in all diplomatic documents and foreign-language
   publications in English-speaking countries.

   .. figure:: https://cdn.britannica.com/52/12952-004-A711EC54/Oracle-bone-inscriptions-village-Henan-province-Xiaotun.jpg

      Shang dynasty: oracle bone inscriptions


   Some scholars divide the history of the Chinese languages into `Proto-Sinitic`_
   (Proto-Chinese; until 500 bc), `Archaic (Old) Chinese`_ (8th to 3rd century bc),
   `Ancient (Middle) Chinese`_ (through ad 907), and Modern Chinese (from *c.* the
   10th century to modern times). The Proto-Sinitic period is the period of the most 
   ancient inscriptions and poetry; most loanwords in Chinese were borrowed after 
   that period. The works of `Confucius`_ and `Mencius`_ mark the beginning of the
   `Archaic`_ Chinese period. Modern knowledge of the sounds of Chinese during the 
   Ancient Chinese period is derived from a pronouncing dictionary of the language 
   of the Ancient period published in ad 601 by the scholar Lu Fayan and also from 
   the works of the scholar-official `Sima Guang`_, published in the 11th century.

   The sound system of Chinese is marked by its use of `tone`_\ s to indicate 
   differences of meaning between words or syllables that are otherwise identical 
   in sound (i.e., have the same consonants and vowels). Modern Standard Chinese
   has four tones, while the more archaic Cantonese language uses at least six tones, 
   as did Ancient Chinese. Chinese words often have only one syllable, although 
   modern Chinese makes greater use of `compounds`_ than did the earlier language. 
   In Chinese `compound`_ words, few prefixes or infixes occur, but there are a 
   great number of suffixes. Few words end in a `consonant`_, except in such archaic
   `dialects`_ as Cantonese. A Chinese word is invariable in form (i.e., it has no
   `inflectional`_ markers or markers to indicate parts of speech) and, within the 
   range allowed by its `intrinsic`_ meaning, can serve as any `part of speech`_. 
   Because there is no word inflection in the language, there is a fixed word order.
   Person and number are expressed in the pronoun rather than in the verb. Chinese 
   has no definite article (i.e., no word meaning ‘the’), although the word meaning 
   ‘one’ and the demonstrative adjective are sometimes used as articles in the 
   language today. Adjectives, which are probably of verbal origin, are not inflected 
   for degree of comparison and may be used as adverbs without any change of form.


Linguistic characteristics
~~~~~~~~~~~~~~~~~~~~~~~~~~

   All modern Sinitic languages—i.e., the “Chinese dialects”—share a number of 
   important typological features. They have a maximum syllabic structure of the 
   type consonant–semivowel–vowel–semivowel–consonant. Some languages lack one 
   set of semivowels, and, in some, gemination (doubling) or clustering of vowels 
   occurs. The languages also employ a system of tones (pitch and contour), with 
   or without `concomitant`_ glottal features, and occasionally stress. For the 
   most part, tones are lexical (i.e., they distinguish otherwise similar words); 
   in some languages tones also carry grammatical meaning. Nontonal grammatical
   units (i.e., affixes) may be smaller than syllables, but usually the meaningful 
   units consist of one or more syllables. Words can consist of one syllable, of 
   two or more syllables each carrying an element of meaning, or of two or more 
   syllables that individually carry no meaning. For example, Modern Standard Chinese 
   *tian* ‘sky, heaven, day’ is a one-syllable word; *ritou* ‘sun’ is composed 
   of *ri* ‘sun, day,’ a word element that cannot occur alone as a word, and the 
   noun `suffix`_ *tou*; and *hudie* ‘butterfly’ consists of two syllables, each 
   having no meaning in itself (this is a rare type of word formation). The Southern 
   languages have more monosyllabic words and word elements than the Northern ones.

   The Sinitic languages distinguish nouns and verbs with some overlapping, as do 
   Sino-Tibetan languages in general. There are noun suffixes that form different 
   kinds of nouns (concrete nouns, diminutives, abstract nouns, and so on), particles 
   placed after nouns indicating relationships in time and space, and verb particles 
   for modes and aspects. Adjectives act as one of several kinds of verbs. Verbs can 
   occur in a series (concatenation) with irreversible order (e.g., the verbs ‘take’ 
   and ‘come’ placed next to one another denote the concept ‘bring’). Nouns are
   `collective`_ in nature, and only `classifier`_\ s can be counted and referred to
   singly. Specific particles are used to indicate the relationship of `nominals`_ 
   (e.g., nouns and noun phrases) to verbs, such as transitive verb–object, agent–passive 
   verb; in some of the languages this system forms a sentence construction called ergative, 
   in which all nominals are marked for their function and the verb stays unchanged. 
   Final sentence particles convey a variety of meanings (defining either the whole 
   sentence or the predicate) that indicate ‘question, command, surprise, or new
   situation.’ The general word order of subject–verb–object and complement and 
   modifier–modified is the same in all the languages, but the use of the preposed 
   particles and verbs in a series varies considerably. Grammatical elements of equal 
   or closely related `values`_ in various languages are very often not related in sounds.

   The Sinitic languages fall into a Northern and a Southern group. The Northern 
   languages (Mandarin dialects) are more similar to each other than are the Southern 
   (Wu, Xiang, Gan, `Hakka`_, Yue, Min).

Modern Standard Chinese (Mandarin)
----------------------------------

   The pronunciation of Modern Standard Chinese is based on the Beijing dialect, 
   which is of the Northern, or Mandarin, type. It employs about 1,300 different 
   syllables. There are 22 initial consonants, including stops (made with momentary, 
   complete closure in the vocal tract), affricates (beginning as stops but ending 
   with incomplete closure), aspirated consonants, nasals, fricatives, liquid sounds 
   (l, r), and a glottal stop. The medial semivowels are y (i), ɥ (ü), and w (u). 
   In final position, the following occur: nasal consonants, ṛ (retroflex r), the 
   semivowels y and w, and the combinations ŋr (nasalization plus r) and wr (rounding plus r). 
   There are nine vowel sounds, including three varieties of i (retroflex, apical, 
   and palatal). Several vowels combine into clusters.

   There are four tones: (1) high level, (2) high rising crescendo, (3) low falling 
   diminuendo with glottal friction (with an extra rise from low to high when final), 
   and (4) falling diminuendo. Unstressed syllables have a neutral tone, which depends 
   on its surroundings for pitch. Tones in sequences of syllables that belong together 
   lexically and syntactically (“sandhi groups”) may undergo changes known as tonal 
   sandhi, the most important of which causes a third tone before another third tone 
   to be pronounced as a second tone. The tones influence some vowels (notably e and o), 
   which are pronounced more open in third and fourth tones than in first and second tones.

   A surprisingly low number of the possible combinations of all the consonantal, vocalic, 
   and tonal sounds are utilized. The vowels i and ü and the semivowels y and ɥ never 
   occur after velar sounds (e.g., k) and occur only after the palatalized affricate and 
   sibilant sounds (e.g., tś), which in turn occur with no other vowels and semivowels.

   Many alternative interpretations of the distinctive sounds of Chinese have been 
   proposed; the interaction of consonants, vowels, semivowels, and tones sets Modern 
   Standard Chinese apart from many other Sinitic languages and dialects and gives it 
   a unique character among the major languages of the world. The two most widely used 
   transcription systems (romanizations) are Wade-Giles (first propounded by Sir Thomas 
   Francis Wade in 1859 and later modified by Herbert A. Giles) and the official Chinese 
   transcription system today, known as the pinyin zimu (“phonetic spelling”) or simply 
   Pinyin (adopted in 1958). For a comparison of these romanization equivalents, see the 
   table. In Wade-Giles, aspiration is marked by ’ (p’, t’, and so on). The semivowels are 
   y, yü, and w in initial position; i, ü, and u in medial; and i and u (but o after a) in 
   final position. Final retroflex r is written rh. The tones are indicated by raised figures 
   after the syllables (1, 2, 3, 4).

   The Pinyin system indicates unaspirated stops and affricates by means of traditionally 
   voiced consonants (e.g., b, d) and aspirated consonants by voiceless sounds (e.g., p, t). 
   The semivowels are y, yu, and w initially; i, ü, and u medially; and i and u (o after a) 
   finally. Final retroflex r is written r. The tones are indicated by accent markers, 1 = ¯, 
   2 = ´, 3 = ˇ, 4 = ˋ (e.g., mā, má, mǎ, mà = Wade-Giles ma1, ma2, ma3, ma4).

   Pinyin is used in the following discussion of Modern Standard Chinese grammar.

   The most common suffixes that indicate nouns are -zi (as in fangzi ‘house’), and -tou 
   (as in mutou ‘wood’). A set of postposed noun particles express space and time 
   relationships (-li ‘inside,’ -hou ‘after’). An example of a verbal affix is -jian in 
   kanjian ‘see’ and tingjian ‘hear.’ Important verb particles are -le (completed action), 
   -guo (past action), and -zhe (action in progress). The directional verbal particles 
   -lai ‘toward speaker’ and -qu ‘away from speaker’ and some verbal suffixes can be 
   combined with the potential particles de ‘can’ and bu ‘cannot’—e.g., na chulai ‘take out,’ 
   na bu chulai ‘cannot take out’; tingjian ‘hear,’ ting de jian ‘can hear.’ The particle de 
   indicates subordination and also gives nominal value to forms for other parts of speech 
   (e.g., wo ‘I,’ wode ‘mine,’ wo de shu ‘my book,’ lai ‘to come,’ lai de ren ‘a person 
   who comes’). The most important sentence particle is le, indicating ‘new situation’ 
   (e.g., xiayu le ‘now it is raining,’ bu lai le ‘now there is no longer any chance 
   that he will be coming’). Ge is the most common noun classifier (i ‘one,’ yi ge ren 
   ‘one person’); others are suo (yi suo fangzi ‘one house’) and ben (liang ben shu ‘two books’).

   Adjectives can be defined as qualitative verbs (hao ‘to be good’) or stative verbs 
   (bing ‘to be sick’). There are equational sentences with the word order subject–predicate—e.g., 
   wo shi Beijing ren ‘I am a Beijing-person (i.e., a native of Beijing)’—and narrative 
   sentences with the word order subject (or topic)–verb–object (or complement)—e.g., 
   wo chifan ‘I eat rice,’ wo zhu zai Beijing ‘I live in Beijing.’ The preposed object 
   takes the particle ba (wo da ta ‘I beat him,’ wo ba ta dale yidun ‘I gave him a beating’), 
   and the agent of a passive construction takes bei (wo bei ta dale yidun ‘I was given a 
   beating by him’).

Standard Cantonese
------------------

   The most important representative of the Yue languages is Standard Cantonese of Canton, 
   Hong Kong, and Macau. It has fewer initial consonants than Modern Standard Chinese 
   (p, t, ts, k and the corresponding aspirated sounds ph, th, tsh, kh; m, n, ŋ; f, s, h; l, y), 
   only one medial semivowel (w), more vowels than Modern Standard Chinese, six final 
   consonants (p, t, k, m, n, ŋ), and two final semivowels (y and w). The nasals m and ŋ 
   occur as syllables without a vowel.

   There are three tones (high, mid, low) in syllables ending in -p, -t, and -k; six 
   tones occur in other types of syllables (mid level, low level, high falling, low 
   falling, high rising, low rising). Two tones are used to modify the meaning of words 
   (high level °, and low-to-high rising * ), as in yin° “tobacco” from yin “smoke,” 
   and nöy* “daughter” from nöy “woman.” Some special grammatical words also have the 
   tone °. There is no neutral tone and little tonal sandhi (modification).

   There are more than 2,200 different syllables in Standard Cantonese, or almost twice 
   as many as in Modern Standard Chinese. The word classes are the same as in Modern 
   Standard Chinese. The grammatical words, although phonetically unrelated, generally 
   have the same semantic value (e.g., the subordinating and nominalizing particle kɛ, 
   Modern Standard Chinese de; mo ‘not,’ Modern Standard Chinese bu; the verbal particle 
   for ‘completed action’ and the sentence particle for ‘new situation,’ both le in 
   Modern Standard Chinese, are Standard Cantonese tsɔ and lɔ, respectively). A classifier 
   preceding a noun in subject position (before the verb) functions as a definite article 
   (e.g., tsek sün ‘the boat’).


Min languages
-------------

   The most important Min language is Amoy (Xiamen) from the Southern branch of Min. 
   The initial consonants are the same as in Standard Cantonese with the addition of 
   two voiced stops (b and d) and one voiced affricate (dz), developed from original 
   nasals. There are two semivowels (y, w), six vowels and several vowel clusters, 
   plus the syllabic nasal sounds m and ŋ functioning as vowels, the same finals as 
   in Standard Cantonese, and, in addition, a glottal stop (ʔ) and a meaning-bearing 
   feature of nasalization, as well as a combination of the last two features. There 
   are two tones in syllables ending in a stop, five in other syllables. Tonal sandhi 
   operates in many combinations.

   Fuzhou is the most important language of the Northern branch of Min. The very 
   extensive sandhi affects not only tones but also consonants and vowels, so that 
   the phonetic manifestation of a syllable depends entirely on interaction with 
   the surroundings. There are three initial labial sounds (p, ph, m), five dental 
   sounds (t, th, s, l, n), three palatal sounds (tś, tśh, ń), and five velars (k, 
   kh, h, ʔ, and ŋ). Syllables can end in -k, -ŋ, ʔ (glottal stop), a semivowel, or 
   a vowel. The tones fall into two classes: a comparatively high class comprising 
   high, mid, high falling, and high rising (only in sandhi forms) and a rather low 
   one, comprising low rising and low rising-falling (circumflex). Certain vowels 
   and diphthongs occur only with the high class, others occur only with the low 
   class, and the vowel a occurs with both classes. Sandhi rules can cause tone to 
   change from low class to high class, in which case the vowel also changes.


Other Sinitic languages or dialects
-----------------------------------

Hakka
~~~~~

   Of the different Hakka dialects, Hakka of Meizhou (formerly Meixian) in Guangdong 
   is best known. It has the same initial consonants, final consonants, and syllabic 
   nasals as Standard Cantonese; the vowels are similar to those of Modern Standard 
   Chinese. Medial and final semivowels are y and w. There are two tones in syllables 
   with final stops, four in the other syllabic types.

Suzhou
~~~~~~

   Suzhou vernacular is usually quoted as representative of the Wu languages. 
   It is rich in initial consonants, with a contrast of voiced and voiceless 
   stops as well as palatalized and nonpalatalized dental affricates, making 26 
   consonants in all. (Palatalized sounds are formed from nonpalatal sounds by 
   simultaneous movement of the tongue toward the hard palate. Dental affricates 
   are sounds produced with the tongue tip at first touching the teeth and then 
   drawing slightly away to allow air to pass through, producing a hissing sound.) 
   Medial semivowels are as in Modern Standard Chinese. In addition, there are also 
   10 vowels and 4 syllabic consonants (l, m, n, ŋ); -n and -ŋ occur in final position, 
   as do the glottal stop and nasalization.

Shanghai dialect
~~~~~~~~~~~~~~~~

   The Shanghai dialect belongs to Wu. The use of only two tones or registers 
   (high and low) is prevalent; these are related in an automatic way to the 
   initial consonant type (voiceless and voiced).


Xiang languages
~~~~~~~~~~~~~~~

   The Xiang languages, spoken only in Hunan, are divided into New Xiang, which 
   is under heavy influence from Mandarin and includes the language of the 
   capital Changsha, and Old Xiang, more similar to the Wu languages, as spoken 
   for instance in Shuangfeng. Old Xiang has 28 initial consonants, the highest 
   number for any major Sinitic language, and 11 vowels, plus the syllabic 
   consonants m and n. It also uses five tones, final -n and -ŋ, and nasalization, 
   but no final stops.


Historical survey of Chinese
----------------------------

The early contacts
~~~~~~~~~~~~~~~~~~

   Old Chinese vocabulary already contained many words not generally occurring in 
   the other Sino-Tibetan languages. The words for ‘honey’ and ‘lion,’ and probably 
   also ‘horse,’ ‘dog,’ and ‘goose,’ are connected with Indo-European and were acquired 
   through trade and early contacts. (The nearest known Indo-European languages were 
   Tocharian and Sogdian, a middle Iranian language.) A number of words have Austroasiatic 
   cognates and point to early contacts with the ancestral language of Muong-Vietnamese 
   and Mon-Khmer—e.g., the name of the Yangtze River, \*kruŋ, is still the word for 
   ‘river’—Cantonese kɔŋ, Modern Standard Chinese jiang, pronounced kroŋ and kloŋ in 
   some modern Mon-Khmer languages. Words for ‘tiger,’ ‘ivory,’ and ‘crossbow’ are also 
   Austroasiatic. The names of the key terms of the Chinese calendar (“the branches”) 
   have this same non-Chinese origin. It has been suggested that a great many cultural 
   words that are shared by Chinese and Tai are Chinese loanwords from Tai. Clearly, 
   the Chinese received many aspects of culture and many concepts from the Austroasiatic
   and Austro-Tai peoples whom they gradually conquered and absorbed or expelled.

   From the 1st century ad, China’s contacts with India, especially through the 
   adoption of Buddhism, led to Chinese borrowing from Indo-Aryan (Indic) languages, 
   but, very early, native Chinese equivalents were invented. Sinitic languages have 
   been remarkably resistant to direct borrowing of foreign words. In modern times this 
   has led to an enormous increase in Chinese vocabulary without a corresponding increase 
   in basic meaningful syllables. For instance, tielu ‘railroad’ is based on the same 
   concept expressed in the French chemin de fer, using tie ‘iron’ and lu ‘road’; likewise, 
   dianhua ‘telephone’ is a compound of dian ‘lightning, electricity’ and hua ‘speech.’ 
   A number of such words were coined first in Japanese by means of Chinese elements and 
   then borrowed back into Chinese. The reason that China has avoided the incorporation 
   of foreign words is first and foremost a phonetic one; such words fit very badly into 
   the Chinese pattern of pronunciation. A contributing factor has been the Chinese script, 
   which is ill-adapted to the process of phonetic loans. In creating new words for new 
   ideas, the characters have sometimes been determined first and forms have arisen that 
   cannot be spoken without ambiguity (‘sulfur’ and ‘lutecium’ coalesced as liu, ‘nitrogen’ 
   and ‘tantalum’ as dan). It is characteristic of Modern Standard Chinese that the language 
   from which it most freely borrows is one from its own past: Classical Chinese. In recent 
   years it has borrowed from Southern Sinitic languages under the influence of statesmen 
   and revolutionaries (Chiang Kai-shek was originally a Wu speaker and Mao Zedong a Xiang 
   speaker). Influence from English and Russian (in word formation and syntax) has been 
   increasingly felt.


Pre-Classical Chinese
~~~~~~~~~~~~~~~~~~~~~

   The history of the Chinese language can be divided into three periods, pre-Classical 
   (c. 1500 bc–c. ad 200), Classical (c. 200–c. 1920), and post-Classical Chinese (with 
   important forerunners as far back as the Tang dynasty).

   The pre-Classical period is further divided into Oracular Chinese (Shang dynasty 
   [18th–12th centuries bc]), Archaic Chinese (Zhou and Qin dynasties [1046–207 bc]), 
   and Han Chinese (Han dynasty [206 bc–ad 220]).


   Shang dynasty: oracle bone inscriptionsOracle bone inscriptions from the village 
   of Xiaotun, Henan province, China; Shang dynasty, 14th or 12th century bce.


   Oracular Chinese is known only from rather brief oracle inscriptions on bones 
   and tortoise shells. Archaic Chinese falls into Early, Middle (c. 800–c. 400 bc), 
   and Late Archaic. Early Archaic is represented by bronze inscriptions, parts of the 
   Shujing (“Classic of History”), and parts of the Shijing (“Classic of Poetry”). 
   From this period on, many important features of the pronunciation of the Chinese 
   characters have been reconstructed. The grammar depended to a certain extent on 
   unwritten affixes. The writing system kept apart forms with or without medial 
   consonants, which in some cases were meaningful infixes. Early Archaic Chinese 
   possessed a third-person personal pronoun in three cases (nominative and genitive 
   gyəg, accusative tyəg, and another special genitive kywat, used only with concepts 
   intimately connected with the owner). No other kind of written Chinese until the 
   post-Classical period possessed a nominative of the third-person pronoun, but the 
   old form survived in Cantonese (khöy) and is probably also found in Tai (Modern Thai khăw).


   Middle Archaic Chinese is the language of some of the earliest writings of the 
   Confucian school. Important linguistic changes that had occurred between the Early 
   and Middle phases became still more pronounced in Late Archaic, the language of the 
   two major Confucian and Daoist writers, Mencius (Mengzi) and Zhuangzi, as well as 
   of other important philosophers. The grammar by then had become more explicit in the 
   writing system, with a number of well-defined grammatical particles, and it can also 
   be assumed that the use of grammatical affixes had similarly declined. The process 
   used in verb formation and verb inflection that later appeared as tonal differences 
   may at this stage have been manifested as final consonants or as suprasegmental 
   features, such as different types of laryngeal phonation. The word classes included 
   nouns, verbs, and pronouns (each with several subclasses), and particles. The use of 
   a consistent system of grammatical particles to form noun modifiers, verb modifiers, 
   and several types of embedded sentences (i.e., sentences that are made to become parts 
   of another independent sentence) became blurred in Han Chinese and was gone from written 
   Chinese until the emergence of post-Classical Chinese. In Modern Standard Chinese the 
   subordinating particle de combines the functions of several Late Archaic Chinese 
   particles, and the verb particle le and the homophonous sentence particle le have 
   taken over for other Late Archaic forms.

Han and Classical Chinese
~~~~~~~~~~~~~~~~~~~~~~~~~

   Han Chinese developed more polysyllabic words and more specific verbal and nominal 
   (noun) categories of words. Most traces of verb formation and verb conjugation began 
   to disappear. An independent Southern tradition (on the Yangtze River), simultaneous 
   with Late Archaic Chinese, developed a special style, used in the poetry Chuci 
   (“Elegies of Chu”), which was the main source for the refined fu (prose poetry). 
   Late Han Chinese developed into Classical Chinese, which as a written idiom underwent 
   few changes during the long span of time it was used. It was an artificial construct, 
   which for different styles and occasions borrowed freely and heavily from any period 
   of pre-Classical Chinese but in numerous cases without real understanding for the 
   meaning and function of the words borrowed.

   At the same time the spoken language changed continually, as did the conventions 
   for pronouncing the written characters. Soon Classical Chinese made little sense 
   when read aloud. It depended heavily on fixed word order and on rhythmical and 
   parallel passages. It has sometimes been denied the status of a real language, 
   but it was certainly one of the most successful means of communication in human 
   history. It was the medium in which the poets Li Bai (701–762) and Du Fu (712–770) 
   and the prose writer Han Yu (768–824) created some of the greatest masterpieces of 
   all times and was the language of Neo-Confucianist philosophy (especially of Zhu Xi 
   [1130–1200]), which was to influence the West deeply. Classical Chinese was also 
   the language in which the Italian Jesuit missionary Matteo Ricci (1552–1610) wrote 
   in his attempt to convert the Chinese empire to Christianity.

Post-Classical Chinese
~~~~~~~~~~~~~~~~~~~~~~

   Post-Classical Chinese, based on dialects very similar to the language now spoken 
   in North China, probably owes its origin to the Buddhist storytelling tradition; 
   the tales appeared in translations from Sanskrit during the Tang dynasty (618–907). 
   During the Song dynasty (960–1279) this vernacular language was used by both Buddhists 
   and Confucianists for polemic writings; it also appeared in indigenous Chinese novels 
   based on popular storytelling. During and after the Yuan dynasty (1206–1368) the 
   vernacular was used also in the theatre.

   Modern Standard Chinese has a threefold origin: the written post-Classical language, 
   the spoken standard of Imperial times (Mandarin), and the vernacular language of 
   Beijing. These idioms were clearly related originally, and combining them for the 
   purpose of creating a practical national language was a task that largely solved 
   itself once the signal had been given. The term National Language (guoyu) had been 
   borrowed from Japanese at the beginning of the 20th century, and, from 1915, various 
   committees considered the practical implications of promoting it. The deciding event 
   was the action of the May Fourth Movement of 1919; at the instigation of the liberal 
   savant Hu Shi, Classical Chinese (also known as wenyan) was rejected as the standard 
   written language. (Hu Shi also led the vernacular literature movement of 1917; his 
   program for literary reform appeared on Jan. 1, 1917.) The new written idiom has 
   gained ground faster in literature than in science, but there can be no doubt that 
   the days of Classical Chinese as a living medium are numbered. After the establishment 
   of the People’s Republic of China, some government regulation was applied successfully, 
   and the tremendous task of making Modern Standard Chinese understood throughout China 
   was effectively undertaken. In what must have been the largest-scale linguistic plan 
   in history, untold millions of Chinese, whose mother tongues were divergent Mandarin 
   or non-Mandarin languages or non-Chinese languages, learned to speak and understand 
   the National Language, or Putonghua, a name it is now commonly called; with this effort, 
   literacy was imparted to great numbers of people in all age groups.


.. _Ancient (Middle) Chinese: https://www.britannica.com/topic/Middle-Chinese-language
.. _Archaic (Old) Chinese: https://www.britannica.com/topic/Archaic-Chinese-language
.. _Archaic: https://www.merriam-webster.com/dictionary/Archaic
.. _Asia: https://www.britannica.com/place/Asia
.. _baihua: https://www.britannica.com/topic/baihua
.. _Cantonese: https://www.britannica.com/topic/Cantonese-language
.. _China: https://www.britannica.com/place/China
.. _classifier: https://www.britannica.com/topic/Sino-Tibetan-languages/Use-of-noun-classifiers#ref75022
.. _collective: https://www.merriam-webster.com/dictionary/collective
.. _compound: https://www.merriam-webster.com/dictionary/compound
.. _compounds: https://www.merriam-webster.com/dictionary/compounds
.. _concomitant: https://www.merriam-webster.com/dictionary/concomitant
.. _Confucius: https://www.britannica.com/biography/Confucius
.. _consonant: https://www.britannica.com/topic/consonant
.. _dialect: https://www.merriam-webster.com/dictionary/dialect
.. _dialects: https://www.britannica.com/topic/dialect
.. _dialects: https://www.merriam-webster.com/dictionary/dialects
.. _Gan: https://www.britannica.com/topic/Gan-language
.. _Hakka: https://www.britannica.com/topic/Hakka-language
.. _Hakka: https://www.britannica.com/topic/Hakka
.. _inflectional: https://www.britannica.com/topic/inflection
.. _intrinsic: https://www.merriam-webster.com/dictionary/intrinsic
.. _language: https://www.britannica.com/topic/language
.. _Mandarin: https://www.britannica.com/topic/Mandarin-language
.. _Mencius: https://www.britannica.com/biography/Mencius-Chinese-philosopher
.. _Min: https://www.britannica.com/topic/Min-languages
.. _Modern Standard Chinese.: https://www.britannica.com/topic/Modern-Standard-Chinese-language
.. _nominals: https://www.merriam-webster.com/dictionary/nominals
.. _part of speech: https://www.britannica.com/topic/part-of-speech
.. _Pinyin: https://www.britannica.com/topic/Pinyin-romanization
.. _Proto-Sinitic: https://www.britannica.com/topic/Proto-Sinitic-languages
.. _Romance languages: https://www.britannica.com/topic/Romance-languages
.. _Sima Guang: https://www.britannica.com/biography/Sima-Guang
.. _Sino-Tibetan language family: https://www.britannica.com/topic/Sino-Tibetan-languages
.. _suffix: https://www.britannica.com/dictionary/suffix
.. _tone: https://www.britannica.com/topic/tone-speech
.. _United Nations: https://www.britannica.com/topic/United-Nations
.. _values: https://www.britannica.com/dictionary/values
.. _vernacular: https://www.merriam-webster.com/dictionary/vernacular
.. _wenyan: https://www.britannica.com/art/wenyan
.. _Wu: https://www.britannica.com/topic/Wu-language
.. _Xiang: https://www.britannica.com/topic/Xiang-language